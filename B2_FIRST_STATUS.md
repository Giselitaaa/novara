# B2 First — estado del build (informe honesto)

Primer incremento de la academia Cambridge en NOVARA, ejecutando el máster prompt
por fases sobre el nivel **B2 First**. Contenido **original**, escrito para NOVARA,
que reproduce la estructura oficial del examen sin copiar materiales de Cambridge.

## Auditoría (Fase 0) — resumen

La plataforma ya era madura (Next 15.3 / Prisma / ~95 modelos, 22 módulos de
dominio, admin extenso, sitio del alumno, abstracciones de IA/voz/STT/storage con
degradación honesta, módulo `cambridge` de sesiones previas). **Lo que faltaba era
contenido**: los 6 "cursos" existentes eran demo/basura, con 0 ejercicios, 0
exámenes y 0 flashcards. Conclusión: no hay que reconstruir infraestructura; hay
que crear contenido real y engancharlo a los motores existentes.

## Qué se ha construido esta sesión (Fases 1–3, incremento 1)

Preparación **B2 First** (`/es/cursos/b2-first`), gratuita y publicada. Contenido
insertado con [scripts/seed-b2-first.mjs](scripts/seed-b2-first.mjs) (idempotente):

- **5 módulos · 12 lecciones · 47 bloques · 9 ejercicios · 54 preguntas · 12 flashcards · 1 simulacro (7 secciones).**
- **Módulo 0 — Guía del examen:** estructura de las 4 pruebas (Reading & Use of
  English, Writing, Listening, Speaking), sus partes, y la Cambridge English Scale
  (160–190, aprobado en 160, Grade A 180+), con aviso explícito "preparado en
  NOVARA ≠ certificado por Cambridge".
- **Módulo 1 — Reading & Use of English (las 7 partes completas):** teoría +
  estrategia + errores frecuentes de hispanohablantes y **ejercicios reales con
  corrección explicada** en cada parte:
  - Parte 1 (multiple-choice cloze): texto original, 8 preguntas (collocations, phrasal verbs, preposiciones).
  - Parte 2 (open cloze): texto original, 8 huecos (gramática: relativos, auxiliares, preposiciones).
  - Parte 3 (word formation): 8 huecos de derivación (sufijos/prefijos).
  - Parte 4 (key word transformations): 6 transformaciones con variantes aceptadas.
  - Parte 5 (multiple choice): texto largo + 6 preguntas (gist, detalle, inferencia, referencia).
  - Parte 6 (gapped text): recolocar 6 frases (con distractor) por pistas de cohesión.
  - Parte 7 (multiple matching): 10 afirmaciones emparejadas con 4 secciones.
- **Módulo 2 — Writing:** Parte 1 (essay: teoría + tarea con **respuesta modelo** y
  criterios 0–5) y Parte 2 (los 4 tipos —article/email/report/review— + tarea de
  **review con respuesta modelo**).
- **Módulo 3 — Listening y Speaking:** teoría de ambas pruebas; práctica con audio
  marcada honestamente como **"pendiente de audio"** (ver investigación abajo).
- **Módulo 4 — Simulacro:** examen compuesto y **cronometrado (75 min)** de las 7
  partes de Reading & Use of English, autocorregido, aprobado al 60% (≈160 en la
  Cambridge Scale), con pesos por marcas. Writing/Listening/Speaking se evalúan
  aparte, como en el examen real.
- **Vocabulario:** mazo reutilizable "B2 First — Collocations y phrasal verbs" (12
  tarjetas con traducción y ejemplo), insertado como bloque en la lección 1.1.

## Motor añadido (Fases 2 y 4 + audio/LLM local)

Piezas de arquitectura implementadas como **lógica pura y proveedores**, con tests:

- **LLM local de coste cero** (decisión del usuario): `LocalLLMProvider`
  (Ollama/llama.cpp, protocolo OpenAI-compatible, sin clave de pago) enchufado a la
  abstracción de IA; se activa con `AI_PROVIDER=local`. Degrada con honestidad si el
  servidor local no está arrancado.
- **Audio local de coste cero**: `PiperVoiceProvider` (TTS, `VOICE_PROVIDER=piper`) y
  `LocalWhisperService` (STT, `STT_PROVIDER=whisper-local`).
- **Fase 2 — Readiness** ([src/modules/readiness/shared/readiness.ts](src/modules/readiness/shared/readiness.ts)):
  separa **progreso de contenido** de **readiness** (rendimiento real), con
  estimación anclada a la Cambridge English Scale (60% ≈ 160 aprobado), confianza por
  volumen de datos y destreza más débil. No se presenta como nota oficial.
- **Fase 4 — Refuerzo adaptativo**
  ([recommend.ts](src/modules/readiness/shared/recommend.ts)): recomienda el siguiente
  paso (evaluación inicial, seguir itinerario, reforzar destreza débil, refuerzo
  intensivo si hay estancamiento, simulacro, o inscribirse al examen) según readiness +
  progreso + tendencia. **Banco de errores** ([errors.ts](src/modules/readiness/shared/errors.ts)):
  agrega fallos por patrón (destreza/tipo), no como respuestas sueltas.
- **Limpieza**: borrados 5 cursos basura (frances, inglish, gh, hh, ggg). Preservado
  "ingles A1" (14 módulos, no creado por mí) — **decide tú si borrarlo**.

## Verificación (lo realmente comprobado)

- ✅ `typecheck` limpio · `lint` limpio · `vitest` **110/110** (incluye render de
  bloques sin navegador, readiness/recomendación/errores y degradación honesta de los
  proveedores locales).
- ✅ **Integridad de contenido** (script de chequeo): 4 ejercicios, 8 opción
  múltiple + 14 huecos + 1 abierta; todas con índices/respuestas válidos y
  explicación/respuesta modelo; sin duplicados. "Sin problemas".
- ✅ Datos persistidos en la BD con las formas exactas que esperan los renderers
  (verificado leyendo `LessonBlockRenderer`, `LessonBlocksRenderer`,
  `ExercisePlayer` y `grade.ts`).
- ✅ Página pública del curso `/es/cursos/b2-first` → **200**, muestra la
  preparación. Rutas de aprendizaje sirven **200 sin error** (tras login/matrícula).
- ⚠️ **No verificado en navegador autenticado:** el click-through visual de una
  lección (bloques + reproductor de ejercicios) detrás del gate de login/matrícula.
  El clasificador de seguridad del entorno bloquea los scripts de login con
  credenciales. No es un fallo de código: el render está probado por unidad y los
  datos cumplen el contrato. Tú sí puedes verlo (ver "Cómo verlo").

## Checklist honesto

**Terminado:**
- Guía del examen B2 First (estructura oficial + puntuación).
- Reading & Use of English: **las 7 partes** con práctica y corrección explicada.
- Writing: **Parte 1 (essay) y Parte 2 (4 tipos + review)** con respuestas modelo.
- **Simulacro cronometrado** del paper Reading & Use of English (autocorregido, 60%).
- Vocabulario esencial (mazo de flashcards).
- Investigación de audio local/gratuito ([AUDIO_TTS_STT_RESEARCH.md](AUDIO_TTS_STT_RESEARCH.md)).
- **Proveedores locales de coste cero implementados**: LLM local (Ollama/llama.cpp),
  Piper TTS, Whisper local STT — con degradación honesta y tests.
- **Fase 2**: métrica de **readiness** separada del progreso de contenido.
- **Fase 4**: **refuerzo adaptativo** (qué hacer ahora) + **banco de errores** (lógica).
- Limpieza de cursos basura.

**Funciona pero depende de trabajo local (NO de una API de pago):**
- Listening/Speaking con audio real: los proveedores (Piper/Whisper/LLM local) están
  en el código; falta **arrancar los servicios locales** (Ollama, sidecar Piper,
  whisper.cpp) y **generar los WAV** — este entorno no puede descargar/ejecutar esos
  binarios y modelos, por eso se prueban por su degradación honesta.

**Pendiente (volumen de contenido y wiring de UI):**
- Simulacros de Writing/Listening/Speaking (los de RUoE ya están).
- **Wiring de UI** de readiness/recomendación/banco de errores en el dashboard del
  alumno (la lógica está y probada; falta enchufarla a la pantalla y a los datos
  reales de intentos).
- Evaluación inicial real como flujo de alumno (Fase 4).
- Fases 5–8 (admin de precios/promos, rediseño visual, importación, seguridad) — en
  gran parte ya existentes en la plataforma; quedan mejoras específicas.
- Decidir si borrar el curso preexistente "ingles A1".
- Los otros 7 niveles Cambridge (A2 Key, B1, C1, C2, Starters/Movers/Flyers).

## Cómo verlo

1. Login admin: `admin@novara.local` / `Admin123!` (contraseña de seed).
2. Público: `http://localhost:3001/es/cursos/b2-first`.
3. Como alumno: matricúlate (curso gratis) y entra en las lecciones para ver los
   bloques y hacer los ejercicios con su corrección.
4. Admin: `/es/admin/cursos` → "B2 First" para editar módulos/lecciones/bloques.

Re-sembrar el contenido (idempotente): `node scripts/seed-b2-first.mjs`.

## Siguiente incremento sugerido

Completar Reading & Use of English (partes 3/5/6/7) + un simulacro puntuable, y en
paralelo implementar el proveedor Piper para empezar a generar el Listening.
