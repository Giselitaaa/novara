# NOVARA — Informe del sistema de creación de contenido

Documento **vivo**: el prompt maestro define una construcción grande y
multi-iteración. Aquí se registra, con honestidad, lo auditado, lo ya hecho
y verificado, y lo que queda pendiente. Nada se marca como terminado sin
haberlo ejecutado.

## Estado global (a día de hoy)

| Fase | Estado |
|---|---|
| 0 — Auditoría | ✅ Completada |
| 1 — Errores críticos / bug de precios | ✅ Verificado (ya correcto) |
| 4 — Arquitectura de voz TTS | ✅ Completada y verificada |
| 3 — Flashcards avanzadas | ✅ Completada y verificada (e2e) |
| 2 — Lección como bloques (editor) | ✅ Núcleo completo y verificado (ver caveats) |
| 5 — Ejercicios: motores + servicios + UI profesor | ✅ Verificado (falta UI del alumno) |
| 6 — Exámenes: composición + ponderación | ✅ Verificado (falta ejecución del alumno) |
| 7 + mejoras (9.x) | ✅ 9.7 (QC) + 9.1 (vista previa) hechos; resto pendiente |

Verificación transversal en cada checkpoint: `typecheck` 0 · `lint` 0/0 ·
`vitest` 80/80 · flujos probados con navegador real contra el servidor.

## Fase 0 — Auditoría (resultado)

**Stack:** Next.js 15.3 (App Router, RSC), React 19, TypeScript estricto,
Prisma 6.3 + PostgreSQL (Neon), NextAuth v5, Tailwind + componentes shadcn/
Radix, next-intl (es/en). Arquitectura modular `src/modules/<dominio>/server`
con `queries.ts` (server-only) y `actions.ts` (`"use server"`). Patrón de
proveedor desacoplado ya presente para **IA** (`getAIProvider`) y
**almacenamiento** (`getStorageProvider`, S3/R2).

**Ya existe:**
- **Precios:** `Course.accessTypeId` (gratis/premium) + `price Decimal?` +
  `CoursePriceHistory`. Formulario `PricingForm` + acción `updateCoursePricing`.
- **Bloques de lección:** `LessonBlock` **básico** — `type` (String, no enum),
  `order`, `content`, `imageUrl`, `videoUrl`, `audioUrl`; renderer con
  TEXT/IMAGE/VIDEO/AUDIO/DIVIDER.
- **Ejercicios:** `LessonExercise` (mono-tipo) + `ExerciseSubmission`
  (con corrección IA).
- **Exámenes:** sistema completo — `Exam`, `ExamPart`, `ExamExercise`,
  `ExamQuestion`, `Question`, `QuestionType`, `QuestionOption`,
  `ExamAttempt`, `ExamAnswer`.
- **IA:** `modules/ai` (Anthropic/OpenAI) con generación de estructura de
  curso, contenido, ejercicios, SEO y corrección de ejercicios.
- **Almacenamiento:** `modules/storage` (S3/R2) con subida prefirmada.

**No existía (construcción nueva):** flashcards, capa de voz TTS, speaking
conversacional (STT + conversación + evaluación), editor de bloques rico
(galería, PDF, recurso, flashcards, ejercicio, examen, nota) con drag-drop,
autosave y plantillas, motor de tipos de pregunta de Reading/Listening como
bloques, rúbricas de Writing, y examen como composición de bloques.

## Fase 1 — Bug de precios (verificado)

**Síntoma reportado:** al convertir un curso gratuito en premium con precio,
el cambio no persiste.

**Diagnóstico (causa raíz):** en el estado actual del proyecto **no se
reproduce**. La cadena formulario → acción es correcta: el `<select
name="accessTypeId">` envía el id del tipo de acceso y el `<input
type="number" name="price">` envía el precio con punto decimal; la acción
`updateCoursePricing` hace `Number(price)` y actualiza `accessTypeId` y
`price` en una única transacción, registrando además el historial de precios.

**Verificación empírica:** se ejecutó el flujo real gratis→premium con
precio 29,99 contra la base de datos y se releyó: `accessType.key ===
"premium"` y `price === 29.99`, con su fila en `CoursePriceHistory`. Persiste
correctamente. El proyecto además arranca limpio (typecheck 0, lint 0/0,
build OK), por lo que los "cinco errores" de arranque descritos en el prompt
ya estaban saneados en iteraciones previas.

## Fase 4 — Arquitectura de voz (Text-to-Speech) — COMPLETA

Capa de voz **desacoplada del proveedor**, misma filosofía que IA y
almacenamiento.

**Piezas:**
- `src/modules/voice/server/provider.ts` — interfaz `VoiceProvider`
  (`isConfigured()`, `synthesize({ text, language, accent?, voice? })`),
  `VoiceError` (`not_configured` | `request_failed`) y `getVoiceProvider()`
  (selección por `VOICE_PROVIDER`, por defecto "openai"). Añadir ElevenLabs/
  Azure/Polly es una implementación más y un `case`, sin tocar el resto.
- `src/modules/voice/server/providers/openai-tts-provider.ts` — proveedor
  **real** OpenAI TTS (`/v1/audio/speech`, `fetch` directo), configurable por
  `OPENAI_API_KEY`, `VOICE_MODEL` (def. `tts-1`), `VOICE_DEFAULT_VOICE`
  (def. `alloy`).
- `src/modules/voice/server/synthesize.ts` — servicio de alto nivel con
  **caché por hash** del contenido: mismo texto+idioma+voz ⇒ misma clave de
  almacenamiento ⇒ no se regenera (ni se re-factura). Si hay almacenamiento,
  persiste y devuelve URL; si no, devuelve los bytes para streaming.
- `src/modules/storage/server/*` — se extendió el contrato de almacenamiento
  con `putObject` (subida server-side), `objectExists` (caché) y
  `publicUrlFor`, implementados en el proveedor S3/R2.
- `src/app/api/voice/synthesize/route.ts` — endpoint **solo admin**, con
  rate-limit y límite de longitud; responde URL o audio, y **503
  `not_configured`** si no hay proveedor de voz (la UI mostrará "audio no
  disponible", nunca un audio falso).

**Configuración:** documentada en `.env.example` (bloque "Voz / TTS").

**Comportamiento sin credenciales (degradación honesta):** `isConfigured()`
es `false` y toda síntesis lanza `VoiceError("not_configured")`. Cubierto por
`tests/unit/voice-provider.test.ts` (3 tests, en verde).

**Verificado:** typecheck 0 · lint 0/0 · `voice-provider.test` 3/3 · suite
total 41/41 · build OK.

## Fase 3 — Flashcards avanzadas — COMPLETA

Mazos reutilizables (biblioteca) con tarjetas ricas y audio por IA.

**Modelo (migración aditiva `20260725120000_flashcards`):**
- `FlashcardDeck` (título, descripción, idioma, autor).
- `Flashcard` (término, traducción, explicación, ejemplo, categoría, nivel
  MCER, pronunciación, IPA, `audioUrl`, notas, orden). `onDelete: Cascade`
  del mazo. Índices por `deck_id` y `author_id`.
- Aplicada a la BD con `db execute` (aditivo; no toca datos existentes).
  De paso se detectó que `lesson_blocks` tenía una columna `position`
  redundante (idéntica a `order` en las 9 filas); se documenta pero **no se
  borró** para no arriesgar datos (drift preexistente, inofensivo).

**Servidor** (`src/modules/flashcards/server`):
- `queries.ts` — `listDecks` (con recuento y audios), `getDeck`.
- `actions.ts` — CRUD de mazo y tarjeta, `duplicateCard`, `moveCard`
  (reordenar), `importCards` (masivo), `generateCardAudio` /
  `generateDeckAudio` (usando la capa de voz de la Fase 4).
- `shared/parse.ts` — `parseFlashcardsText` (CSV/pegado, `;` o tab, cabecera
  solo en la 1ª fila), función pura con test unitario dedicado.

**Panel** (`/admin/flashcards`): lista de mazos + creación; editor de mazo
con **alta rápida en línea**, **edición** expandible por tarjeta,
**importación masiva CSV/pegado**, **reordenar / duplicar / eliminar**,
**buscador** dentro del mazo, y generación de audio **individual** y
**masiva**. Entrada añadida a la navegación del panel.

**Audio (degradación honesta en dos ejes):** sin proveedor de voz, informa
"audio no disponible"; sin almacenamiento, explica que hace falta `STORAGE_*`
para guardar una URL duradera. Nunca finge un audio.

**Verificado (navegador real contra el servidor):** login admin → crear mazo
→ alta rápida de tarjeta → **importar 3 tarjetas por CSV** (reflejadas en la
cabecera) → intento de audio sin credenciales muestra el mensaje honesto →
eliminar mazo. Persistencia del import confirmada también contra la BD.
Datos de prueba limpiados. `typecheck` 0 · `lint` 0/0 · `vitest` 46/46
(incluye `flashcards-parse.test`, 5 casos).

## Fase 2 — Lección como contenedor de bloques — NÚCLEO COMPLETO

Antes solo existía el RENDER de bloques (lado alumno, básico) y **ningún
editor** en el panel. Ahora hay un editor de bloques completo.

**Modelo (migración aditiva `20260725130000_lesson_block_rich`):**
- `LessonBlock` gana `title`, `data` (JSONB, contenido estructurado por tipo)
  y `deckId` (FK opcional a `FlashcardDeck`, `onDelete: SetNull`) + índice.
  Aditivo. *(Se conservó la columna redundante `position` para no arriesgar
  datos; el modelo usa `order`.)*

**Catálogo de tipos** (`modules/lessons/types/blocks.ts`): 16 tipos con
metadatos (label, descripción, categoría) para el selector visual: texto,
gramática/teoría, resumen, consejo, nota/aviso, imagen, galería, vídeo,
audio, pronunciación, PDF, recurso descargable, flashcards, ejercicio,
examen, separador.

**Servidor** (`modules/lessons/server/block-actions.ts`): `addBlock`,
`updateBlock` (patch por campos), `deleteBlock`, `moveBlock` (arriba/abajo),
`duplicateBlock`, y `reorderBlocks` (lista ordenada, listo para drag-drop).

**Editor** (`/admin/lecciones/[lessonId]`): selector visual de bloque
**agrupado por categoría** (icono + descripción), tarjeta por bloque con
vista previa, **formularios de edición específicos por tipo**, reordenar,
**duplicar**, **eliminar con confirmación**, **indicador de estado de
guardado** ("Guardando…/Todos los cambios guardados/Error") y botón de
**vista previa como alumno**. Enlazado desde el editor de módulos (icono de
capas en cada lección).

**Render del alumno** (`lesson-block-renderer.tsx`) ampliado a todos los
tipos nuevos (galería en cuadrícula, PDF incrustado + descarga, recurso,
nota/consejo con estilo por variante, gramática, resumen, pronunciación con
audio, referencia a mazo).

**Verificado (navegador real):** en una lección real → añadir bloque de
texto → editar y **guardar contenido** (persistido) → añadir bloque de nota
→ **reordenar** (confirmado en BD: el texto pasó a `order=1`) → indicador
"Todos los cambios guardados". Datos de prueba limpiados. `typecheck` 0 ·
`lint` 0/0 · `vitest` 46/46.

**Caveats honestos (pendiente de esta fase):**
- **Drag-and-drop — HECHO y verificado.** Además de los botones ▲▼, los bloques
  se reordenan **arrastrando** (asa de arrastre, HTML5 DnD nativo, sin
  dependencias) y el nuevo orden persiste con `reorderBlocks`. Verificado
  (navegador real): arrastrar el 1º al final deja el orden B, C, A en BD.
- **Plantillas de lección (mejora 3.5) — HECHO y verificado.** Modelo
  `LessonTemplate` (esqueleto de bloques: tipo+título, sin contenido) +
  migración. En el editor: "Guardar esta lección como plantilla" y un
  desplegable "Aplicar plantilla…" que añade los bloques del esqueleto.
  Verificado (navegador real + BD): guardar captura `[{TEXT},{DIVIDER}]`;
  aplicar una plantilla de 3 tipos a una lección con 2 bloques deja 5 bloques
  en el orden correcto.
- **Migración de datos** de las lecciones antiguas (que usan `LessonContent`)
  al modelo de bloques: no hecha. El sistema de bloques es **aditivo** y
  convive con `LessonContent`; el contenido antiguo se sigue mostrando por su
  vía. Migrarlo es una tarea aparte y con datos reales debe hacerse con
  cuidado.
- El bloque **flashcards** en el lado alumno muestra una tarjeta de
  referencia al mazo; el visor interactivo de estudio para el alumno es una
  extensión posterior.

## Fase 5 — Constructor de ejercicios: MOTORES + SERVICIOS

Se han construido y probado los **núcleos reutilizables** de los que cuelgan
las cuatro categorías; las UIs de construcción/consumo son el incremento
siguiente (CRUD mecánico sobre estos motores).

**Motor de tipos de pregunta** (`modules/exercises/shared`), compartido por
Reading, Listening y exámenes:
- `question-types.ts` — unión discriminada de 6 tipos: opción múltiple (una o
  varias correctas), verdadero/falso, completar huecos, relacionar, ordenar,
  respuesta abierta.
- `grade.ts` — **corrector PURO** con crédito parcial donde procede
  (`gradeQuestion`, `gradeExercise`). Sin efectos ⇒ testeable y ejecutable en
  cliente o servidor. **10 tests** cubren todos los tipos, el crédito parcial,
  `caseSensitive`, respuestas ausentes y el agregado con revisión manual.

**Modelo de datos** (migración aditiva `20260725140000_exercises`):
`Exercise` (categoría reading/writing/listening/speaking, título,
instrucciones, `config` JSON por categoría) + `ExerciseQuestion` (tipo +
definición completa en `data`). Relación con `Lesson`, `onDelete: Cascade`.

**Speaking conversacional (6.5) — arquitectura desacoplada, lista para
conectar proveedores** (misma filosofía que IA/voz):
- `shared/speaking-prompt.ts` — **lógica pura de adaptación al nivel** MCER
  (A1–C2): construye el `system` con vocabulario, velocidad, complejidad e
  idiomático adecuados. **Testeada** (la guía difiere entre A1 y C2, incorpora
  palabras clave, etc.).
- `server/speaking/stt.ts` — `SpeechToTextService` (Whisper/OpenAI hoy;
  preparado para Google/Azure), `not_configured` sin clave.
- `server/speaking/conversation.ts` — `nextConversationTurn` (siguiente
  intervención de la IA adaptada al nivel) sobre el proveedor de IA.
- `server/speaking/evaluation.ts` — `evaluateSpeaking`: 6 ejes (fluidez,
  pronunciación, gramática, vocabulario, comprensión, naturalidad) +
  retroalimentación, validado con Zod, `overall` promedio.
- `POST /api/speaking/turn` — turno de conversación (sesión + rate-limit),
  devuelve texto y, si la voz está configurada, audio; **503 `not_configured`**
  honesto sin IA.
- Config en `.env.example` (`STT_PROVIDER`, `STT_MODEL`).

**Degradación honesta:** sin claves de IA/voz, conversación, transcripción y
evaluación declaran `not_configured` y nunca fingen. Cubierto por
`speaking.test.ts` (**6 tests**).

**Verificado:** `typecheck` 0 · `lint` 0/0 · `vitest` **62/62** (incluye
`question-grade.test` y `speaking.test`).

**UI del profesor — CONSTRUIDA y verificada** (`/admin/lecciones/[id]/ejercicios`,
enlazada desde el editor de bloques):
- Crear ejercicio por categoría (Reading/Writing/Listening/Speaking).
- Config específica por categoría: **Reading** (texto base), **Listening**
  (URL de audio + transcripción), **Writing** (tipo de texto, mín/máx palabras,
  **rúbrica** por criterios, respuesta modelo), **Speaking** (escenario,
  objetivo, nivel MCER, palabras clave).
- Para Reading/Listening: **editor de preguntas** con los 6 tipos del motor
  (opción múltiple con correctas marcables, V/F, huecos, ordenar, relacionar,
  abierta), reordenar y eliminar.
- **Verificado (navegador real + BD):** crear ejercicio Reading → guardar
  texto base (`config.text` persistido) → añadir pregunta de opción múltiple
  (persistida). Datos de prueba limpiados.

**UI del alumno — reproductor de ejercicios CONSTRUIDO y verificado.**
- `components/learning/exercise-player.tsx` — renderiza el ejercicio en la
  lección: texto base (Reading), audio (Listening), consigna + área de texto
  con contador de palabras (Writing), escenario (Speaking); y las preguntas
  de opción múltiple, verdadero/falso, huecos y abierta.
- `submitExercise` (server action) corrige SIEMPRE en el servidor con el
  motor puro `gradeExercise` (nunca se fía del cliente) y devuelve nota,
  aciertos y explicaciones; marca revisión manual si hay abiertas.
- Integrado en el reproductor de la lección (`.../aprender/[lessonId]`):
  los ejercicios de la lección aparecen bajo el contenido.
- **Verificado (navegador real + BD):** un alumno inscrito abre la lección,
  responde una pregunta de opción múltiple correctamente y obtiene
  **"Nota: 100/100"**. Datos de prueba limpiados.

**UI conversacional de Speaking — CONSTRUIDA y verificada (degradación).**
- `components/learning/speaking-conversation.tsx` — inicia la conversación,
  graba por **micrófono** (MediaRecorder), transcribe, muestra los turnos
  (alumno/IA como burbujas) y ofrece "Finalizar y evaluar" (6 ejes + feedback).
- Endpoints `POST /api/speaking/transcribe` (STT) y `/api/speaking/evaluate`
  (evaluación), ambos con sesión + rate-limit y **503 `not_configured`**.
- Integrada en el reproductor de ejercicios: un ejercicio de speaking muestra
  la conversación con el escenario/objetivo/nivel del profesor.
- **Verificado (navegador real):** el escenario se muestra y, **sin claves**,
  "Iniciar conversación" degrada con honestidad ("no disponible"), nunca
  simula. El camino feliz (conversación real) requiere claves de IA/voz.

**Reproductor de matching/ordering — COMPLETADO y verificado.** `QuestionView`
ya renderiza los 6 tipos: relacionar (desplegable por cada izquierda, derechas
**barajadas** de forma determinista) y ordenar (subir/bajar con el orden
barajado). **Verificado (navegador real):** un alumno relaciona y ordena
correctamente y obtiene **"Nota: 100/100"** (el corrector ya los soportaba,
unit-tested). Datos limpiados.

**Persistencia de intentos — COMPLETADA y verificada.** Migración aditiva
`20260725160000_exercise_attempts`: modelo `ExerciseAttempt` (nota, aciertos,
respuestas JSON, revisión manual, alumno). `submitExercise` guarda el intento;
`submitComposedExam` guarda un `ExamAttempt` (modelo existente reutilizado) con
la nota ponderada y aprobado/no. **Verificado (navegador real + BD):** un
alumno responde un ejercicio → se persiste `ExerciseAttempt` (score 100,
respuestas guardadas); realiza un examen → se persiste `ExamAttempt` (score
100, aprobado). Datos limpiados.

**Bloque EXERCISE/EXAM ↔ contenido — CONECTADO y verificado.** En el editor
de bloques, un bloque EXERCISE ofrece un **selector de los ejercicios de la
lección** y EXAM un selector de exámenes del curso (guardan `data.exerciseId`/
`data.examId`). En el reproductor de la lección, el bloque EXERCISE pinta el
**reproductor del ejercicio EN SU POSICIÓN** dentro del flujo de bloques, y
EXAM un enlace para realizar el examen; los ejercicios no referenciados por
ningún bloque se muestran al final (sin duplicar). **Verificado (navegador
real):** bloque TEXT + bloque EXERCISE → el ejercicio aparece exactamente una
vez, en su sitio, con su pregunta. Datos limpiados.

**Pendiente (honesto):** **temporizador** de examen por sección.

## Fase 6 — Exámenes: composición + ponderación

Un examen se compone de **secciones**, cada una un `Exercise` de la Fase 5
(Reading/Writing/Listening/Speaking) con su **peso** en la nota final —
reutiliza el motor de ejercicios, no duplica lógica.

**Modelo (migración aditiva `20260725150000_exam_sections`):** `ExamSection`
(examen ↔ ejercicio, `weight`, `timeLimitMinutes`, `order`) +
`Exam.randomizeSections`. Índices y `onDelete: Cascade`.

**Puntuación PURA + testeada** (`modules/exams/shared/scoring.ts`):
`computeWeightedExamScore` (media ponderada 0..100), `isPassing`,
`sectionWeightPercentages` (reparto visible en la UI), `totalExamMinutes`
(global o suma por sección). **10 tests** cubren media ponderada, pesos
iguales, sin peso, pesos negativos, aprobado y tiempos.

**Servidor** (`modules/exams/server/composition-*`): añadir/actualizar/
quitar/reordenar secciones y editar la config del examen (título, nota
mínima, tiempo global, barajar secciones); query de composición y de
ejercicios disponibles (los del curso del examen, excluyendo los ya añadidos).

**Editor** (`/admin/examenes/[id]/composicion`, enlazado desde el examen):
config del examen, lista de secciones con **peso y % de la nota** por sección
+ tiempo, reordenar/quitar, y lista de ejercicios disponibles para añadir.

**Verificado (navegador real + BD):** crear examen → abrir composición →
**añadir un ejercicio como sección** (persistida con su peso) → guardar
config (nota mínima 60). Datos de prueba limpiados. `typecheck` 0 · `lint`
0/0 · `vitest` **72/72**.

**Ejecución por el alumno — CONSTRUIDA y verificada.**
- `components/learning/composed-exam-player.tsx` — el alumno realiza el examen
  sección a sección (texto/audio + preguntas por sección) y lo finaliza.
- `submitComposedExam` (server action) puntúa cada sección con `gradeExercise`
  y combina con la **puntuación ponderada** ya testeada; devuelve nota final,
  aprobado/no, y el desglose por sección.
- Página del alumno `/examenes/[examId]/secciones` (requiere sesión).
- **Verificado (navegador real + BD):** examen con 2 secciones (pesos 2 y 1),
  sección A correcta (100) y B incorrecta (0) → **"67/100 — Aprobado"**
  (ponderación exacta: (100·2+0·1)/3 = 67, ≥ nota mínima 60). Datos limpiados.

El sistema de exámenes anterior (`ExamPart`/`ExamQuestion`) sigue existiendo;
la composición por `ExamSection`+`Exercise` es la vía nueva.

**Temporizador de examen — HECHO y verificado.** El reproductor muestra una
cuenta atrás (mm:ss) si el examen tiene tiempo global; al llegar a 0
**autoenvía** por la misma vía ya probada. Verificado (navegador real): un
examen de 1 min muestra 01:00 y desciende a 00:58 tras 3 s.

## Fase 7 + mejoras — calidad del panel y controles

**9.7 — Control de calidad pre-publicación (COMPLETO y verificado).**
- `modules/courses/shared/quality.ts` — `runQualityChecks`, función **pura**
  que recorre curso→módulos→lecciones→bloques→ejercicios y devuelve avisos NO
  bloqueantes (curso sin descripción, premium sin precio, sin módulos, lección
  sin contenido, bloque de imagen/vídeo/audio/flashcards vacío, galería/resumen
  vacíos, reading sin texto, listening sin audio, writing sin rúbrica, speaking
  sin escenario, opción múltiple sin correcta o con <2 opciones, pregunta sin
  enunciado…). **8 tests**.
- `modules/courses/server/quality-queries.ts` reúne el contenido y ejecuta el
  checker; pestaña **«Calidad»** en el editor de curso (`/admin/cursos/[id]`)
  que muestra "Todo en orden" o la lista de avisos con su ubicación.
- **Verificado (navegador real):** la pestaña renderiza y muestra los avisos
  reales de un curso. `typecheck` 0 · `lint` 0/0 · `vitest` **80/80**.

**9.1 — Vista previa como alumno (hecho).** El editor de bloques incluye el
botón "Vista previa como alumno" que abre la lección en el reproductor real
(nueva pestaña), donde ya se renderizan todos los tipos de bloque.

**Calidad del panel (a lo largo de las fases):** migas/enlaces de retorno,
**indicadores de guardado** (editor de bloques), **confirmaciones** antes de
borrar contenido no trivial, y **estados vacíos guiados** ("añade el primer
bloque/tarjeta/ejercicio") están presentes en los editores construidos.

**Pendiente de la Fase 7 (honesto):** aviso de "cambios sin guardar" al salir,
**9.2 (borradores de curso publicado)** con versionado — el curso ya tiene
estados borrador/publicado y se puede editar publicado, pero no hay copia-
borrador aislada—, y **9.3/9.4/9.5/9.6** (corrección IA de writing en UI,
analítica de contenido, biblioteca reutilizable —los mazos ya lo son—,
subtítulos obligatorios).

## Pendiente (próximas iteraciones, en orden del prompt)

- **Fase 2 — refinamientos:** drag-and-drop visual (backend `reorderBlocks`
  ya listo), **plantillas de lección** (mejora 3.5), y la migración de datos
  de `LessonContent` antiguo al modelo de bloques.
- **Fase 5 — UIs:** editor del profesor para cada categoría (Reading/Listening
  con el editor de preguntas sobre el motor ya hecho; Writing con rúbrica;
  Speaking con escenario/objetivo/nivel) y la UI del alumno (realizar
  ejercicios; grabar y conversar por turnos). Los motores y servicios ya están.
- **Fase 5/6 — UI del alumno:** realizar ejercicios y exámenes (con el motor
  de corrección y la puntuación ponderada, ya testeados), y el speaking por
  micrófono/turnos. Enlazar los bloques EXERCISE/EXAM a su contenido.
- **Fase 7 + mejoras 9.x:** calidad del panel (breadcrumbs, validación
  cliente+servidor, feedback, aviso de cambios sin guardar, estados vacíos
  guiados), y prioritariamente 9.1 (vista previa como alumno), 9.2 (borradores
  de curso publicado) y 9.7 (control de calidad pre-publicación).

## Cómo continuar

El servidor de desarrollo queda accesible en **http://localhost:3001**
(admin `admin@novara.local` / `Admin123!`). La capa de voz se activa
añadiendo `OPENAI_API_KEY` (y opcionalmente `VOICE_*`) en `.env`; sin ella,
la generación de audio se ofrece explícitamente como no disponible.
