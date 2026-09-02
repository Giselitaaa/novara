# Listening y Speaking: investigación de audio local/gratuito (TTS y STT)

Antes de asumir que hacen falta APIs de pago para el audio de **Listening** (voz
sintética, TTS) y **Speaking** (reconocimiento de voz del alumno, STT), aquí está
la investigación de alternativas locales/gratuitas con licencia apta para uso
comercial, tal como se pidió.

**Conclusión rápida:** sí hay alternativas locales viables y gratuitas para TTS y
STT; **no hace falta ninguna API de pago** para generar los audios de Listening ni
para transcribir el Speaking. El único punto que sí requiere una decisión aparte
es el *tutor conversacional* del Speaking (un LLM que responde y evalúa), que no es
ni TTS ni STT — ver más abajo.

## Cómo encaja en lo que ya existe

El proyecto ya tiene la abstracción correcta:
- Voz (TTS): `getVoiceProvider()` en [src/modules/voice/server/provider.ts](src/modules/voice/server/provider.ts), seleccionable por `VOICE_PROVIDER`. Hoy solo hay `OpenAITTSProvider` (cloud, de pago) y degrada con `not_configured`.
- STT: [src/modules/exercises/server/speaking/stt.ts](src/modules/exercises/server/speaking/stt.ts), seleccionable por `STT_PROVIDER`. Hoy solo `OpenAIWhisperService` (cloud) y degrada con `not_configured`.

Añadir un proveedor **local** es implementar una clase nueva que cumpla la misma
interfaz y activarla por env (`VOICE_PROVIDER=piper`, `STT_PROVIDER=whisper-local`).
Nada más de la app cambia.

## TTS para Listening — opciones

| Herramienta | Licencia motor | ¿Uso comercial? | Calidad | Local | Coste |
|---|---|---|---|---|---|
| **Piper** (rhasspy/piper) | MIT | Sí (motor) — **cada voz tiene su propia licencia, hay que vetarla** | Buena, natural | Sí (CPU) | 0 € |
| Coqui TTS / XTTS v2 | Lib MPL-2.0; **modelo XTTS = licencia NO comercial** | ❌ para XTTS | Muy alta (clona voz) | Sí (mejor GPU) | 0 € pero licencia bloquea |
| eSpeak NG | GPL | Sí | Robótica (insuficiente para examen) | Sí | 0 € |
| edge-tts (voces de Microsoft) | — (API no documentada) | ⚠️ ToS ambiguos, no es local | Muy alta | No | 0 € pero riesgo legal |
| Cloud (Azure / Google / Polly / ElevenLabs) | Comercial de pago | Sí | Muy alta | No | € por carácter |

**Recomendación TTS: Piper.** Motor MIT, corre local en CPU, calidad suficiente
para prácticas de Listening y soporta varias voces (útil para diálogos con varios
hablantes en las Partes 1/3/4). **Aviso de licencia clave:** el motor es MIT, pero
cada *modelo de voz* se entrena con un dataset propio y su licencia varía; hay que
elegir voces cuya licencia permita uso comercial explícitamente (p. ej. voces
basadas en datasets tipo LJSpeech/CC0 o marcadas como permisivas) y registrar la
licencia de cada voz usada. No dar por hecho que "incluida en Piper" = "uso
comercial permitido".

## STT para Speaking — opciones

| Herramienta | Licencia | ¿Uso comercial? | Calidad | Local | Coste |
|---|---|---|---|---|---|
| **whisper.cpp** | MIT | Sí | Alta (incl. acento no nativo) | Sí (CPU) | 0 € |
| **faster-whisper** (CTranslate2) | MIT | Sí | Alta, más rápida | Sí (CPU/GPU) | 0 € |
| Vosk | Apache-2.0 | Sí | Media | Sí | 0 € |
| OpenAI Whisper API / Google / Azure | Pago | Sí | Alta | No | € por minuto |

**Recomendación STT: whisper.cpp o faster-whisper** (pesos Whisper con licencia
MIT). Local, gratis, buena precisión con hablantes hispanohablantes. Modelo
`small`/`medium` es un buen equilibrio calidad/velocidad.

## El punto que sí necesita tu decisión: el tutor conversacional del Speaking

El Speaking no es solo STT: para practicar de verdad, el sistema tiene que
**responder** al alumno y **evaluarlo** (Grammar & Vocabulary, Discourse
Management, Pronunciation, Interactive Communication). Eso lo hace un **LLM**, no
un motor de voz. Opciones:
1. **LLM local** (p. ej. Llama u otro modelo abierto con licencia comercial): 0 € de
   API, pero pesa (RAM/GPU) y hay que montar la inferencia local.
2. **Reusar la abstracción de IA ya existente** (`getAIProvider`) con una clave:
   más simple, pero depende de una API (que dijiste no querer solo para texto).

Esto es lo único de Listening/Speaking que puede requerir algo de tu parte. Para
TTS y STT no necesito ninguna clave ni gasto; para el tutor conversacional, dime si
prefieres LLM local o usar el proveedor de IA, y lo monto en consecuencia.

## Estado de implementación (ya hecho en el código)

Los tres proveedores locales de coste cero **ya están implementados** en la
abstracción existente, con degradación honesta y tests:

- ✅ `PiperVoiceProvider` — [src/modules/voice/server/providers/piper-provider.ts](src/modules/voice/server/providers/piper-provider.ts). Activar con `VOICE_PROVIDER=piper` + `PIPER_URL`.
- ✅ `LocalWhisperService` — en [src/modules/exercises/server/speaking/stt.ts](src/modules/exercises/server/speaking/stt.ts). Activar con `STT_PROVIDER=whisper-local` + `WHISPER_URL`.
- ✅ `LocalLLMProvider` (tutor conversacional del Speaking y generación de texto) — [src/modules/ai/server/providers/local-provider.ts](src/modules/ai/server/providers/local-provider.ts). Activar con `AI_PROVIDER=local` + `LOCAL_AI_BASE_URL` (Ollama/llama.cpp). **Decisión del usuario: LLM local, coste cero.**

Sin el servicio local arrancado, cada uno degrada con honestidad (`not_configured`
o `request_failed` con un mensaje que dice qué arrancar); nunca se finge audio ni
texto. Cubierto por `tests/unit/local-providers.test.ts`.

## Qué queda (trabajo, sin coste de API)

1. Arrancar los servicios locales en la máquina de despliegue: Ollama (`ollama serve`
   + `ollama pull`), un sidecar HTTP de Piper y uno de whisper.cpp/faster-whisper.
   Este entorno de desarrollo no puede descargar/ejecutar esos binarios y modelos,
   por eso los proveedores existen pero se prueban por su degradación honesta.
2. Generar los WAV de Listening con Piper offline y guardarlos con la abstracción de
   almacenamiento, rellenando `audioUrl` en los bloques `AUDIO`/ejercicios de listening.
3. Vetar y documentar la licencia de cada voz de Piper usada (uso comercial).

Mientras tanto, el contenido de Listening/Speaking de B2 First queda marcado
honestamente como **"pendiente de audio"** en la plataforma (nunca se simula audio
que no existe).
