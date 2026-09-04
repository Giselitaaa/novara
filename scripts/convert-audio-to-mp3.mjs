/**
 * Migración única: convierte todos los WAV de Listening a MP3 (~7× menos peso)
 * y actualiza en la BD todas las rutas config.audioUrl de .wav a .mp3.
 * Así los audios de todos los niveles caben en el repo/Vercel.
 */
import { spawn } from "node:child_process";
import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";
import ffmpegStatic from "ffmpeg-static";

const db = new PrismaClient();
const DIR = path.join(process.cwd(), "public", "uploads", "listening");

function toMp3(wav, mp3) {
  return new Promise((resolve) => {
    const p = spawn(ffmpegStatic, ["-y", "-i", wav, "-codec:a", "libmp3lame", "-b:a", "48k", "-ac", "1", mp3]);
    p.on("error", () => resolve(false));
    p.on("close", (c) => resolve(c === 0));
  });
}

const files = (await readdir(DIR)).filter((f) => f.endsWith(".wav"));
console.log(`Convirtiendo ${files.length} WAV a MP3…`);
let ok = 0;
for (const f of files) {
  const wav = path.join(DIR, f);
  const mp3 = path.join(DIR, f.replace(/\.wav$/, ".mp3"));
  if (await toMp3(wav, mp3)) {
    await unlink(wav).catch(() => {});
    ok++;
  } else {
    console.warn("  ⚠️  no se pudo convertir", f);
  }
}
console.log(`Convertidos: ${ok}/${files.length}`);

// Actualiza la BD: config.audioUrl .wav -> .mp3 en todos los ejercicios.
const exercises = await db.exercise.findMany({
  where: { config: { path: ["audioUrl"], string_contains: ".wav" } },
  select: { id: true, config: true },
});
console.log(`Ejercicios con audio .wav en BD: ${exercises.length}`);
let updated = 0;
for (const ex of exercises) {
  const cfg = ex.config;
  if (cfg && typeof cfg.audioUrl === "string" && cfg.audioUrl.endsWith(".wav")) {
    cfg.audioUrl = cfg.audioUrl.replace(/\.wav$/, ".mp3");
    await db.exercise.update({ where: { id: ex.id }, data: { config: cfg } });
    updated++;
  }
}
console.log(`Ejercicios actualizados a .mp3: ${updated}`);
await db.$disconnect();
