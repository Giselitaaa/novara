# Servicios de IA locales (coste cero) para NOVARA

Tres servicios locales dan vida a Listening + Speaking sin ninguna API de pago:

| Servicio | Herramienta | Puerto | La app lo usa como |
|---|---|---|---|
| LLM (conversación/evaluación) | **Ollama** | 11434 | `AI_PROVIDER=local` |
| TTS (voz de la IA / Listening) | **Piper** (`piper_server.py`) | 5001 | `VOICE_PROVIDER=piper` |
| STT (voz del alumno) | **Whisper** (`whisper_server.py`) | 8000 | `STT_PROVIDER=whisper-local` |

Sin Docker. Tu entorno ya está instalado en `~/novara-ai` (Python 3.12) con el
modelo Piper en `~/novara-ai/models/piper/en_US-lessac-medium.onnx`.

---

## 1. Activar el entorno (en cada terminal que uses)

```bash
source ~/novara-ai/bin/activate
cd ~/Desktop/novara
```

## 2. Arrancar Piper (TTS) — terminal 1

```bash
python scripts/local-ai/piper_server.py
```
Escucha en `http://localhost:5001`. Usa por defecto el modelo ya existente en
`~/novara-ai/models/piper/en_US-lessac-medium.onnx` (NO lo descarga).

## 3. Arrancar Whisper (STT) — terminal 2

```bash
source ~/novara-ai/bin/activate
cd ~/Desktop/novara
WHISPER_MODEL=small python scripts/local-ai/whisper_server.py
```
Escucha en `http://localhost:8000`. La **primera** vez descarga el modelo `small`
(~460 MB) de Hugging Face; después arranca al instante.

## 4. Arrancar Ollama (LLM) — si no está ya corriendo

```bash
ollama serve        # o abre la app de Ollama
ollama pull llama3.1
```

---

## 5. Pruebas curl (comprobar que los 3 responden)

```bash
# Piper: salud + generar un WAV y oírlo
curl http://localhost:5001/health
curl -X POST http://localhost:5001/ \
  -H 'Content-Type: application/json' \
  -d '{"text":"Hello, welcome to Novara.","voice":"en_US-lessac-medium"}' \
  --output /tmp/piper-test.wav
afplay /tmp/piper-test.wav          # (macOS) reproducir el audio

# Whisper: salud + transcribir el WAV que acaba de generar Piper
curl http://localhost:8000/health
curl -X POST http://localhost:8000/v1/audio/transcriptions \
  -F 'file=@/tmp/piper-test.wav' -F 'model=whisper-1' -F 'language=en'
# -> {"text":" Hello, welcome to Novara."}

# Ollama
curl http://localhost:11434/api/tags
```

---

## 6. Variables en el `.env` de la app

Cuando los 3 servicios respondan, avisa (o pon tú esto en `.env`) y reinicia `npm run dev`:

```dotenv
AI_PROVIDER=local
LOCAL_AI_BASE_URL=http://localhost:11434/v1
AI_MODEL=llama3.1

VOICE_PROVIDER=piper
PIPER_URL=http://localhost:5001
VOICE_DEFAULT_VOICE=en_US-lessac-medium

STT_PROVIDER=whisper-local
WHISPER_URL=http://localhost:8000/v1
STT_MODEL=whisper-1            # se ignora en local; el modelo lo fija el wrapper

STORAGE_PROVIDER=local         # guarda los audios en public/uploads (sin bucket)
```

## 7. Detener los servicios

- En cada terminal: **Ctrl+C**.
- O por puerto:
  ```bash
  lsof -ti:5001 | xargs kill    # Piper
  lsof -ti:8000 | xargs kill    # Whisper
  ```

---

## Notas

- Los wrappers NO cambian Piper ni Whisper: solo los exponen por HTTP con el
  contrato que los proveedores de la app ya esperan.
- **Privacidad**: no se guardan de forma permanente ni los textos ni las
  grabaciones/audios; se usan archivos temporales que se borran al responder.
- Variables útiles: `PIPER_MODEL` (ruta completa a otro .onnx), `WHISPER_MODEL`
  (`tiny|base|small|medium|large-v3`), `WHISPER_DEVICE` (`cpu`/`cuda`).
