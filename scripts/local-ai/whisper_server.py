#!/usr/bin/env python3
"""
Wrapper HTTP para Whisper (STT) con faster-whisper, alineado EXACTAMENTE con el
contrato que espera `LocalWhisperService` de NOVARA
(src/modules/exercises/server/speaking/stt.ts):

    POST /v1/audio/transcriptions   multipart: file, model, language
    ->  200 { "text": "..." }        (endpoint compatible OpenAI)

En la app: STT_PROVIDER=whisper-local y WHISPER_URL=http://localhost:8000/v1
(el provider añade "/audio/transcriptions" a WHISPER_URL).

------------------------------------------------------------------------------
REQUISITOS (los instalas tú, ver scripts/local-ai/README.md):
    pip install faster-whisper fastapi uvicorn python-multipart
    Python 3.9+

MODELO: faster-whisper descarga los pesos de Hugging Face la primera vez.
    WHISPER_MODEL = tiny | base | small | medium | large-v3   (por defecto small)
El campo 'model' que manda la app (STT_MODEL, p. ej. "whisper-1") se IGNORA:
el modelo real lo fija este servidor con WHISPER_MODEL.

ARRANQUE:
    python whisper_server.py          # escucha en 127.0.0.1:8000

VARIABLES (opcionales):
    WHISPER_MODEL     tamaño del modelo (por defecto "small")
    WHISPER_DEVICE    "cpu" (por defecto) o "cuda"
    WHISPER_COMPUTE   tipo de cómputo (por defecto "int8"; en GPU "float16")
    WHISPER_PORT      puerto (por defecto 8000)
"""
import os
import tempfile
from typing import Optional

import uvicorn
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from faster_whisper import WhisperModel

MODEL_SIZE = os.environ.get("WHISPER_MODEL", "small")
DEVICE = os.environ.get("WHISPER_DEVICE", "cpu")
COMPUTE = os.environ.get("WHISPER_COMPUTE", "int8")
PORT = int(os.environ.get("WHISPER_PORT", "8000"))

print(f"Cargando faster-whisper '{MODEL_SIZE}' (device={DEVICE}, compute={COMPUTE})…")
whisper_model = WhisperModel(MODEL_SIZE, device=DEVICE, compute_type=COMPUTE)

app = FastAPI(title="NOVARA Whisper STT wrapper")


@app.get("/health")
def health():
    return {"ok": True, "model": MODEL_SIZE, "device": DEVICE}


@app.post("/v1/audio/transcriptions")
async def transcribe(
    file: UploadFile = File(...),
    model: Optional[str] = Form(None),  # ignorado (compat OpenAI)
    language: Optional[str] = Form(None),
):
    data = await file.read()
    if not data:
        raise HTTPException(status_code=400, detail="Audio vacío.")

    suffix = os.path.splitext(file.filename or "audio.webm")[1] or ".webm"
    fd, path = tempfile.mkstemp(suffix=suffix)
    os.close(fd)
    try:
        with open(path, "wb") as f:
            f.write(data)
        segments, _info = whisper_model.transcribe(path, language=language or None)
        text = "".join(seg.text for seg in segments).strip()
    finally:
        try:
            os.unlink(path)
        except OSError:
            pass

    return {"text": text}


if __name__ == "__main__":
    print(f"Whisper STT wrapper en http://127.0.0.1:{PORT}  (POST /v1/audio/transcriptions)")
    uvicorn.run(app, host="127.0.0.1", port=PORT)
