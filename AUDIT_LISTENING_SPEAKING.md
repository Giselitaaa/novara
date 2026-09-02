# Auditoría técnica — Listening + Speaking con audio real

Auditoría del código REAL del proyecto (no genérica). Distingo siempre lo
**[GROUNDED]** (verificado leyendo el código de NOVARA) de lo **[EXTERNO]**
(documentación de las herramientas / conocimiento general que debes verificar
en su README oficial antes de ejecutar). No se ha cambiado ni instalado nada.

Tecnologías que se MANTIENEN (no se sustituyen): **Piper** (TTS), **Whisper**
(STT), **LLM local vía Ollama** (conversación/evaluación).

---

## Resumen en una frase

La arquitectura y el "cableado" de software **ya están** (proveedores, rutas API,
degradación honesta, evaluación); lo que falta es (a) **3 servidores locales**
que el proyecto NO incluye (Ollama, Piper HTTP, Whisper HTTP), (b) un **almacén
para los audios** (hoy solo S3/R2; conviene añadir uno local), y (c) **rematar 2
enganches de UI** (reproducir la voz de la IA en Speaking; generar/adjuntar audio
de Listening desde el admin).

---

## 1. Qué está ya implementado [GROUNDED]

**Capa de proveedores (abstracción + degradación honesta):**
- `src/modules/ai/server/provider.ts` — `getAIProvider()` por `AI_PROVIDER` (anthropic|openai|**local**).
- `src/modules/ai/server/providers/local-provider.ts` — `LocalLLMProvider` (OpenAI-compatible → Ollama/llama.cpp).
- `src/modules/voice/server/provider.ts` — `getVoiceProvider()` por `VOICE_PROVIDER` (openai|**piper**).
- `src/modules/voice/server/providers/piper-provider.ts` — `PiperVoiceProvider`.
- `src/modules/voice/server/synthesize.ts` — orquesta TTS + **caché en almacenamiento** por hash (sha256) del texto/voz.
- `src/modules/exercises/server/speaking/stt.ts` — `getSTTService()` por `STT_PROVIDER` (openai|**whisper-local**) + `LocalWhisperService`.

**Speaking (conversación + evaluación):**
- `src/modules/exercises/server/speaking/conversation.ts` — `nextConversationTurn()` (LLM, adaptado al nivel MCER).
- `src/modules/exercises/shared/speaking-prompt.ts` — `buildSpeakingSystemPrompt()` (reglas A1–C2), función pura testeada.
- `src/modules/exercises/server/speaking/evaluation.ts` — `evaluateSpeaking()` → 6 ejes (fluency, pronunciation, grammar, vocabulary, comprehension, naturalness) + feedback, validado con Zod.
- Rutas API (sesión + rate-limit + 503 `not_configured`): `POST /api/speaking/turn`, `POST /api/speaking/transcribe`, `POST /api/speaking/evaluate`, `POST /api/voice/synthesize` (solo admin).
- UI: `src/components/learning/speaking-conversation.tsx` — graba micrófono (MediaRecorder→webm) → `/transcribe` → `/turn` → muestra los turnos; "Finalizar y evaluar" → `/evaluate`.

**Listening:**
- No hay módulo propio. Un Listening es un ejercicio con `category === "listening"` y `config.audioUrl`, que `exercise-player.tsx` y `composed-exam-player.tsx` pintan con `<audio controls src={cfg.audioUrl}>`.

**Estado real de ejecución:** todo esto degrada con honestidad (503/`not_configured`) porque **ningún servicio local está arrancado**. La lógica pura (prompts, evaluación, readiness) está probada por unidad.

## 2. Qué modelos necesita Piper

- **[GROUNDED]** El provider usa la voz de `VOICE_DEFAULT_VOICE`, por defecto **`en_US-lessac-medium`**. Ese es el único nombre de voz que el proyecto asume hoy.
- **[EXTERNO]** Piper usa modelos de voz en formato **ONNX**: cada voz son 2 archivos — `<voz>.onnx` + `<voz>.onnx.json`. Para inglés B2/A2 sirve una voz US o GB de calidad media/alta (p. ej. `en_US-lessac-medium`, `en_GB-alba-medium`). Cada voz pesa ~20–60 MB.

## 3. Qué modelo necesita Whisper

- **[GROUNDED]** El provider manda `model = STT_MODEL` (por defecto **`whisper-1`**) al servidor local. Ese nombre es solo la etiqueta que espera tu servidor; el modelo real lo elige el servidor.
- **[EXTERNO]** Modelos Whisper (open-weights, MIT): `tiny`/`base`/`small`/`medium`/`large-v3`. Para hispanohablantes hablando inglés, **`small`** o **`medium`** dan buen equilibrio. Tamaños aprox.: base ~140 MB, small ~460 MB, medium ~1.5 GB.

## 4. Qué proveedor/modelo LLM está configurado [GROUNDED]

- Proveedor por defecto en el código: **`anthropic`** (necesita clave). Para coste cero se pone `AI_PROVIDER=local` → `LocalLLMProvider`.
- `LocalLLMProvider`: `LOCAL_AI_BASE_URL` por defecto **`http://localhost:11434/v1`** (Ollama), modelo `AI_MODEL` por defecto **`llama3.1`**. Endpoint que llama: `POST {base}/chat/completions` (OpenAI-compatible), `stream:false`.

## 5. Qué archivos/configuración faltan

- **[GROUNDED]** No falta código de proveedores. Faltan:
  - Un **proveedor de almacenamiento local** (hoy solo `s3-provider.ts`): sin S3/R2 el audio no se persiste, y Listening necesita URLs persistentes. → lo puede añadir Claude Code (aditivo).
  - Enganche de UI: **reproducir la voz de la IA** en `speaking-conversation.tsx` (hoy no pide `withAudio` ni reproduce `audioUrl`).
  - Enganche de UI: **botón "generar audio"** en el editor de ejercicios/bloques que llame a `/api/voice/synthesize` y guarde el `audioUrl` (hoy no lo llama nadie).
- **[EXTERNO / a instalar por ti]** Los 3 servidores locales: Ollama, un HTTP de Piper y un HTTP de Whisper (el proyecto NO los incluye).

## 6. Qué variables de entorno faltan [GROUNDED]

Ninguna variable "falta" en el código (todas están en `.env.example`), pero hay que **rellenarlas** para activar el modo local:

| Variable | Para | Valor local sugerido |
|---|---|---|
| `AI_PROVIDER` | LLM | `local` |
| `LOCAL_AI_BASE_URL` | LLM | `http://localhost:11434/v1` |
| `AI_MODEL` | LLM | `llama3.1` (o el que descargues) |
| `VOICE_PROVIDER` | TTS | `piper` |
| `PIPER_URL` | TTS | `http://localhost:5001` (el HTTP de Piper que levantes) |
| `VOICE_DEFAULT_VOICE` | TTS | `en_US-lessac-medium` |
| `STT_PROVIDER` | STT | `whisper-local` |
| `WHISPER_URL` | STT | `http://localhost:8000/v1` (el HTTP de Whisper) |
| `STT_MODEL` | STT | el nombre que espere tu servidor (p. ej. `small` o `whisper-1`) |
| `STORAGE_*` | persistir audio | opcional si añadimos almacenamiento local |

## 7. Qué comandos hay que ejecutar para levantar cada servicio

> Los comandos de Ollama son **[EXTERNO pero estables]**. Los de Piper/Whisper
> dependen del servidor exacto que elijamos; para no inventar, la vía segura es
> que **Claude Code escriba un wrapper HTTP mínimo** (Python) que exponga
> justo el contrato que el provider ya espera. Así los comandos son deterministas.

- **LLM (Ollama)** [EXTERNO, estable]:
  - `ollama serve` (o abrir la app de Ollama, que lo levanta en :11434).
  - `ollama pull llama3.1`
- **TTS (Piper)**: instalar Piper + una voz, y levantar el **wrapper HTTP** que escribirá Claude Code (`python piper_server.py`, escuchando en :5001 con el contrato `POST {text,voice} → audio/wav`).
- **STT (Whisper)**: instalar `faster-whisper` + levantar el **wrapper HTTP** que escribirá Claude Code (`python whisper_server.py`, exponiendo `POST /v1/audio/transcriptions`).

(Los comandos exactos y verificados van en las dos secciones finales.)

## 8. ¿Docker o ejecución directa?

- **[GROUNDED/EXTERNO]** **No hace falta Docker.** Todo puede correr directo en tu Mac:
  - Ollama: app nativa / binario.
  - Piper y Whisper: paquetes de Python (`pip`) + los wrappers que escribe Claude Code, ejecutados con `python`.
  - La app: `npm run dev` como ahora.
- Docker es **opcional** (existen imágenes como Speaches/faster-whisper-server), pero no es necesario y añade complejidad. Recomendación: **sin Docker**.

## 9. Qué modelos tienes que descargar

1. **LLM**: `llama3.1` (u otro que prefieras) vía `ollama pull`. ~4.7 GB (cuantización Q4, 8B).
2. **Voz Piper**: `en_US-lessac-medium` (`.onnx` + `.onnx.json`). ~60 MB.
3. **Whisper**: `small` (o `medium`). ~460 MB (small) / ~1.5 GB (medium). `faster-whisper` lo descarga solo la primera vez.

## 10. De dónde deben obtenerse los modelos [EXTERNO]

- **LLM**: `ollama pull` los baja del registro de Ollama (ollama.com/library). Sin cuenta ni pago.
- **Voz Piper**: repositorio oficial de voces **rhasspy/piper-voices** en Hugging Face (`huggingface.co/rhasspy/piper-voices`). Revisa la licencia de la voz concreta (uso comercial).
- **Whisper**: `faster-whisper` descarga los pesos de Hugging Face (`Systran/faster-whisper-*`) automáticamente. Licencia MIT.

## 11. Requisitos de RAM/CPU/GPU [EXTERNO, aproximado]

- **LLM (llama3.1 8B Q4)**: ~6–8 GB de RAM libres. En tu Mac (Apple Silicon) usa la GPU integrada (Metal) automáticamente vía Ollama → razonablemente rápido. En CPU pura va lento pero funciona. Un modelo más pequeño (`llama3.2:3b`, `qwen2.5:3b`) baja a ~3–4 GB si vas justo de RAM.
- **Whisper (`small`)**: ~1–2 GB RAM; CPU suficiente para audios cortos de Speaking (unos segundos). `medium` mejora precisión a costa de más RAM/tiempo.
- **Piper**: muy ligero (CPU, <500 MB). Genera audio más rápido que tiempo real.
- **Total recomendado**: 16 GB de RAM cómodo; 8 GB justo (usa modelos pequeños).

## 12. Qué parte puede ejecutarse en local [GROUNDED + EXTERNO]

**Todo el pipeline puede ser 100% local y de coste cero:**
- LLM (Ollama), TTS (Piper), STT (Whisper) → local.
- App Next.js → local.
- Almacenamiento de audio → local si Claude Code añade el proveedor de disco.

## 13. Qué parte necesita un servicio externo

- **[GROUNDED]** Ninguna, en modo local. El único punto que HOY necesitaría un servicio externo es el **almacenamiento** (S3/R2), y se elimina esa dependencia añadiendo el proveedor de disco local. Sin él, las URLs de audio no persisten entre reinicios.

## 14. Qué está preparado pero todavía no puede probarse [GROUNDED]

- `LocalLLMProvider`, `PiperVoiceProvider`, `LocalWhisperService`: escritos y con test de degradación, pero **sin servidor arrancado** solo se puede probar que fallan con honestidad, no una respuesta real.
- Rutas `/api/speaking/*` y `/api/voice/synthesize`: responden 503 `not_configured` hasta que haya proveedores activos.
- Evaluación de Speaking: funciona en cuanto haya LLM; **nota honesta del propio código**: pronunciación y fluidez se estiman desde la TRANSCRIPCIÓN (no del audio) — es una primera aproximación.

## 15. Qué habría que cambiar para producción [GROUNDED + EXTERNO]

- **Almacenamiento**: en prod, S3/R2 real (o el disco local si el server es persistente) para servir los audios con URL estables y CDN.
- **Servidores de IA/voz**: los 3 procesos (Ollama/Piper/Whisper) deben correr como **servicios gestionados** (systemd / pm2 / contenedores) junto a la app, no a mano; y `*_URL` apuntando a ellos.
- **Concurrencia**: un solo Ollama sirve peticiones en serie; para varios alumnos a la vez hay que dimensionar (cola o varias instancias/GPU).
- **Detalle menor** [GROUNDED]: `synthesize.ts` usa extensión `.mp3` en la clave de caché aunque Piper devuelve WAV; conviene alinear la extensión al `contentType` real. No rompe nada, pero es más limpio.
- **Privacidad** (Fase 8): las grabaciones de voz del alumno se transcriben y **no se almacenan** en el flujo actual; mantener esa política y documentarla.

---

# LO QUE TENGO QUE HACER YO

Instrucciones concretas, una a una. (Los comandos de Ollama son oficiales; los de
Piper/Whisper usan los wrappers que te dejará Claude Code, así que serán exactos.)

1. **Instalar Ollama** (LLM): descarga la app desde `https://ollama.com/download`
   (macOS) o `brew install ollama`. Ábrela (deja el servicio en `:11434`).
2. **Descargar el modelo LLM**: en una terminal, `ollama pull llama3.1`
   (o `ollama pull llama3.2:3b` si vas justo de RAM).
3. **Instalar Python 3** (si no lo tienes) y crear un entorno:
   `python3 -m venv ~/novara-ai && source ~/novara-ai/bin/activate`.
4. **Instalar Piper y Whisper** en ese entorno:
   `pip install piper-tts faster-whisper fastapi uvicorn python-multipart`.
5. **Descargar una voz de Piper**: bájate `en_US-lessac-medium.onnx` y
   `en_US-lessac-medium.onnx.json` de `huggingface.co/rhasspy/piper-voices`
   (carpeta `en/en_US/lessac/medium/`) y guárdalos donde te indique el wrapper.
6. **Arrancar los 3 servicios** (Claude Code te dejará los 2 scripts y un README
   con la línea EXACTA para cada uno): Ollama ya corre; luego
   `python piper_server.py` y `python whisper_server.py`.
7. **Decirme cuándo estén arrancados** para que yo rellene el `.env`, active los
   proveedores y probemos Listening + Speaking de extremo a extremo.
8. (Opcional prod) Decidir si quieres almacenamiento **local en disco** (cero
   coste, te lo monto) o **S3/R2** (te paso las variables).

# LO QUE HARÁ CLAUDE CODE

Todo esto lo puedo hacer yo directamente en el proyecto, sin coste y sin tocar
Piper/Whisper como tecnologías:

1. **Escribir los 2 wrappers HTTP** (deterministas, alineados EXACTAMENTE con el
   contrato que los providers ya esperan):
   - `scripts/local-ai/piper_server.py` — `POST /` `{text,voice}` → `audio/wav`
     (llama a Piper). Coincide con `PiperVoiceProvider`.
   - `scripts/local-ai/whisper_server.py` — `POST /v1/audio/transcriptions`
     (multipart) → `{text}` con faster-whisper. Coincide con `LocalWhisperService`.
   - `scripts/local-ai/README.md` con las líneas de arranque exactas.
2. **Añadir un proveedor de almacenamiento local en disco** (aditivo, sin quitar
   S3): guarda los audios en `public/…` y devuelve su URL. Elimina la dependencia
   de S3/R2 para el modo local.
3. **Enganchar la voz de salida en Speaking**: que `speaking-conversation.tsx`
   pida `withAudio` y reproduzca el `audioUrl` (con *fallback* al TTS del
   navegador si no hay Piper), para que la IA "hable".
4. **Añadir el botón "generar audio"** en el editor (admin) que llame a
   `/api/voice/synthesize` y guarde el `audioUrl` en los ejercicios de Listening /
   bloques `AUDIO`.
5. **Alinear la extensión de caché** de `synthesize.ts` al `contentType` real (wav/mp3).
6. **Crear ejercicios de Listening reales** (con su `audioUrl`) una vez el TTS
   esté activo, y activar el `withAudio` del Speaking.
7. **Rellenar el `.env`** y verificar de extremo a extremo cuando me confirmes que
   los servicios están arrancados.

**Orden propuesto:** Claude Code hace 1–5 ya (no necesita que instales nada) →
tú haces 1–6 de tu lista → me confirmas → Claude Code hace 6–7 y verificamos.
