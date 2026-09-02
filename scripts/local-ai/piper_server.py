#!/usr/bin/env python3
"""
Wrapper HTTP mínimo para Piper (TTS), alineado EXACTAMENTE con el contrato que
espera `PiperVoiceProvider` de NOVARA (src/modules/voice/server/providers/piper-provider.ts):

    POST /            JSON { "text": "...", "voice": "en_US-lessac-medium" }
    ->  200 audio/wav (bytes del audio)

En la app: VOICE_PROVIDER=piper y PIPER_URL=http://localhost:5001

------------------------------------------------------------------------------
REQUISITOS (ya instalados en tu venv ~/novara-ai):
    piper-tts (1.7.0), fastapi, uvicorn      Python 3.9+ (tu venv usa 3.12)

MODELO (NO se descarga; se usa el que ya tienes):
    ~/novara-ai/models/piper/en_US-lessac-medium.onnx  (+ .onnx.json)

ARRANQUE (con el venv activado):
    python scripts/local-ai/piper_server.py     # escucha en 127.0.0.1:5001

VARIABLES (opcionales):
    PIPER_MODEL          ruta COMPLETA a un .onnx (si se define, se usa siempre)
    PIPER_VOICES_DIR     carpeta con los .onnx (por defecto ~/novara-ai/models/piper)
    VOICE_DEFAULT_VOICE  voz por defecto (por defecto "en_US-lessac-medium")
    PIPER_BIN            comando de Piper (por defecto: el intérprete actual con -m piper)
    PIPER_PORT           puerto (por defecto 5001)

PRIVACIDAD: no se guardan de forma permanente ni el texto ni el audio. El WAV se
escribe en un archivo temporal y se borra tras responder; el texto no se registra.
"""
import os
import subprocess
import sys
import tempfile
from typing import List, Optional

import uvicorn
from fastapi import FastAPI, HTTPException, Response
from pydantic import BaseModel

DEFAULT_VOICES_DIR = os.path.expanduser("~/novara-ai/models/piper")
VOICES_DIR = os.environ.get("PIPER_VOICES_DIR", DEFAULT_VOICES_DIR)
MODEL_OVERRIDE = os.environ.get("PIPER_MODEL")  # ruta completa a un .onnx (opcional)
DEFAULT_VOICE = os.environ.get("VOICE_DEFAULT_VOICE", "en_US-lessac-medium")
PIPER_BIN = os.environ.get("PIPER_BIN")  # si no se define, se usa `python -m piper`
PORT = int(os.environ.get("PIPER_PORT", "5001"))

app = FastAPI(title="NOVARA Piper TTS wrapper")


class SynthReq(BaseModel):
    text: str
    voice: Optional[str] = None


def piper_command(model_path: str, out_path: str) -> List[str]:
    """Comando para invocar Piper. Por defecto usa el intérprete actual (el del
    venv que arranca este server) con `-m piper`, así no depende del PATH."""
    base = [PIPER_BIN] if PIPER_BIN else [sys.executable, "-m", "piper"]
    return base + ["--model", model_path, "--output_file", out_path]


def resolve_model(voice: str) -> str:
    if MODEL_OVERRIDE:
        return MODEL_OVERRIDE
    return os.path.join(VOICES_DIR, f"{voice}.onnx")


@app.get("/health")
def health():
    voice_path = resolve_model(DEFAULT_VOICE)
    return {"ok": True, "model": voice_path, "exists": os.path.exists(voice_path)}


@app.post("/")
def synthesize(req: SynthReq):
    text = (req.text or "").strip()
    if not text:
        raise HTTPException(status_code=400, detail="Falta 'text'.")

    voice = req.voice or DEFAULT_VOICE
    model_path = resolve_model(voice)
    if not os.path.exists(model_path):
        raise HTTPException(status_code=400, detail=f"Modelo de voz no encontrado: {model_path}")

    out_fd, out_path = tempfile.mkstemp(suffix=".wav")
    os.close(out_fd)
    try:
        subprocess.run(
            piper_command(model_path, out_path),
            input=text.encode("utf-8"),
            check=True,
            capture_output=True,
        )
        with open(out_path, "rb") as f:
            audio = f.read()
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail="No se pudo ejecutar Piper (¿venv activado?).")
    except subprocess.CalledProcessError as e:
        stderr = e.stderr.decode("utf-8", "ignore") if e.stderr else ""
        raise HTTPException(status_code=500, detail=f"Piper falló: {stderr[:300]}")
    finally:
        try:
            os.unlink(out_path)  # no se conserva el audio
        except OSError:
            pass

    if not audio:
        raise HTTPException(status_code=500, detail="Piper devolvió un audio vacío.")
    return Response(content=audio, media_type="audio/wav")


if __name__ == "__main__":
    print(f"Piper TTS wrapper en http://127.0.0.1:{PORT}  (modelo por defecto: {resolve_model(DEFAULT_VOICE)})")
    uvicorn.run(app, host="127.0.0.1", port=PORT)
