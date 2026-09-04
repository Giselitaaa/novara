/**
 * Generación de audio de Listening compartida por todos los niveles.
 * Piper (voz británica en_GB) produce un WAV; lo convertimos a MP3 (~7× menos)
 * con ffmpeg-static para que los ~60 audios por nivel × 8 niveles quepan en el
 * repositorio y en Vercel. Coste cero. Degradación honesta: si Piper no está,
 * devuelve null y el seed deja el Listening "pendiente".
 *
 * Requiere: PIPER (env PIPER_URL, por defecto http://localhost:5001) y el paquete
 * ffmpeg-static (npm i ffmpeg-static --no-save).
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const PIPER_URL = (process.env.PIPER_URL || "http://localhost:5001").replace(/\/$/, "");
const VOICE = "en_GB-cori-high"; // inglés británico (Cambridge)

let ffmpegPath = null;
async function getFfmpeg() {
  if (ffmpegPath !== null) return ffmpegPath;
  try {
    const mod = await import("ffmpeg-static");
    ffmpegPath = mod.default || null;
  } catch {
    ffmpegPath = null;
  }
  return ffmpegPath;
}

function toMp3(ffmpeg, wavPath, mp3Path) {
  return new Promise((resolve) => {
    const p = spawn(ffmpeg, ["-y", "-i", wavPath, "-codec:a", "libmp3lame", "-b:a", "48k", "-ac", "1", mp3Path]);
    p.on("error", () => resolve(false));
    p.on("close", (code) => resolve(code === 0));
  });
}

/**
 * Genera (o reutiliza) el audio de un guion de Listening y devuelve la ruta
 * pública .mp3 (p. ej. /uploads/listening/xxxx.mp3), o null si no se pudo.
 * Idempotente: si el .mp3 ya existe, no regenera.
 */
export async function generateListeningAudio(text, filename) {
  const dir = path.join(process.cwd(), "public", "uploads", "listening");
  const rel = `/uploads/listening/${filename}.mp3`;
  const mp3Abs = path.join(dir, `${filename}.mp3`);
  if (existsSync(mp3Abs)) return rel;

  // 1) Piper → WAV en memoria
  let buf;
  try {
    const res = await fetch(PIPER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice: VOICE }),
    });
    if (!res.ok) return null;
    buf = Buffer.from(await res.arrayBuffer());
    if (!buf.length) return null;
  } catch {
    return null;
  }

  await mkdir(dir, { recursive: true });
  const wavAbs = path.join(dir, `${filename}.wav`);
  await writeFile(wavAbs, buf);

  // 2) WAV → MP3 (si hay ffmpeg-static). Si no, nos quedamos con el WAV.
  const ffmpeg = await getFfmpeg();
  if (ffmpeg) {
    const ok = await toMp3(ffmpeg, wavAbs, mp3Abs);
    await unlink(wavAbs).catch(() => {});
    if (ok) return rel;
    return null;
  }
  // Sin ffmpeg: devuelve el WAV (menos ideal, pero funciona).
  return `/uploads/listening/${filename}.wav`;
}
