# Tutor Cambridge — implementación en NOVARA

Implementación en la plataforma de `Cambridge_Prompt_Implementacion.md`
(el motor) sobre `Cambridge_Contenido_Maestro.md` (la fuente de verdad).

## Qué se ha construido

Un módulo `cambridge` que conecta los dos documentos con la abstracción de IA
ya existente en NOVARA (`getAIProvider`), respetando la regla nº1 del
proyecto: **sin claves de IA no se simula nada; se declara "no disponible".**

**Datos (fuente de verdad):**
- `src/modules/cambridge/shared/levels.ts` — los **8 niveles** (tabla-selector
  0.3): Pre A1 Starters → C2 Proficiency, con examen, edad, MCER y "¿para quién es?".
- `src/modules/cambridge/shared/knowledge.ts` — la **base de conocimiento por
  nivel** extraída del documento maestro (secciones 1-8): formato oficial del
  examen, syllabus de gramática/vocabulario/funciones, estrategias por destreza,
  plan de estudio y errores comunes de hispanohablantes. Es lo que se inyecta
  en la IA como única referencia.

**Prompts (motor):**
- `src/modules/cambridge/shared/prompts.ts` — el **system prompt** (sección 1
  del prompt de implementación), los **7 modos/sub-prompts** (lección, banco de
  ejercicios, simulacro completo, corrección de writing, práctica de speaking,
  plan de estudio, diagnóstico — secciones 2-7), y el **checklist de
  autocontrol** (sección 8) inyectado en cada generación. Funciones puras, con
  test unitario (`tests/unit/cambridge.test.ts`, 7 casos).

**Servidor:**
- `server/generate.ts` — arma system + prompt (con la base del nivel) y llama a
  `getAIProvider().complete()`.
- `server/actions.ts` — `generateCambridgeContent` (solo admin, rate-limit).
  **Devuelve un resultado** (`ok` | `not_configured` | `error`) en vez de
  lanzar, para que el mensaje real llegue al profesor también en producción.

**Panel:** `/admin/cambridge` (entrada "Tutor Cambridge" en el menú admin):
selector de los **8 niveles** en tarjetas, selector de **modo**, campos
dinámicos según el modo (destreza, parte, nº de ejercicios, semana, tema,
perfil del alumno, texto a corregir), botón **Generar** y resultado en Markdown
con botón de copiar.

**Enganche a la creación de contenido:** desde el resultado, el profesor elige
una lección (selector *curso · lección*, alimentado por `listLessonsForInsert`)
y pulsa **"Insertar en la lección"**: la acción `insertContentAsBlock` crea un
**bloque de TEXTO** al final de esa lección, reutilizando el sistema de bloques
ya existente. Luego puede refinarlo o dividirlo en el editor de bloques. Queda
registrado en el audit log (`cambridge.insert_block`).

## Fidelidad a los dos documentos

- El system prompt reproduce las reglas de idioma/registro, fidelidad al
  examen, calidad pedagógica y formato de la sección 1.
- Cada modo reproduce su sub-prompt (secciones 2-7) e inyecta la base del nivel
  como **fuente de verdad obligatoria**.
- El checklist de la sección 8 se añade a cada petición como autocontrol.

## Estado y activación

- **Verificado:** `typecheck` 0 · `lint` 0/0 · `vitest` **87/87** (incluye
  cambridge) · **build de producción compila** ambas rutas nuevas en el bundle
  (`/[locale]/admin/cambridge` y `/[locale]/admin/lecciones/[lessonId]`, 98/98
  páginas, sin errores) · en el dev ambas rutas admin **guardan** (307 →
  login, sin 500) · e2e con navegador real: el panel renderiza los 8 niveles y,
  **sin clave de IA, "Generar" degrada con honestidad** ("configura
  ANTHROPIC_API_KEY / OPENAI_API_KEY"), nunca inventa contenido.
- **Inserción verificada por capas:** la query `listLessonsForInsert` devuelve
  lecciones reales en runtime; `insertContentAsBlock` crea, comprobado contra la
  BD, un bloque `TEXT` añadido al final de la lección (mismo sistema de bloques
  del editor). El clic autenticado del botón en el navegador no se re-ejecutó
  porque el clasificador de seguridad del entorno bloquea los scripts que
  embeben credenciales de login — no es un defecto de código; el efecto de la
  acción está verificado directamente contra la BD.
- **Para activarlo de verdad**, añade `ANTHROPIC_API_KEY` (o `OPENAI_API_KEY` y
  `AI_PROVIDER=openai`) en `.env`. A partir de ahí, el profesor genera
  lecciones, ejercicios, simulacros, correcciones, prácticas de speaking y
  planes de estudio para cualquiera de los 8 niveles, y puede pegar el
  resultado en un bloque de la lección.

## Siguiente paso natural (opcional)

Ya hecho el enganche a la creación de contenido como **bloque de texto** (arriba).
El siguiente paso opcional sería el enganche *estructurado*: en vez de un único
bloque de texto, parsear la salida de los modos "banco de ejercicios" / "simulacro"
para rellenar directamente un ejercicio Reading/Listening con sus preguntas y
respuestas, reutilizando el sistema de ejercicios ya construido.
