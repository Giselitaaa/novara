import type { CambridgeLevelId } from "./levels";

/**
 * Base de conocimiento por nivel — la FUENTE DE VERDAD extraída del documento
 * maestro (`Cambridge_Contenido_Maestro.md`, secciones 1-8). Es el contexto
 * que se inyecta en la IA para cada generación: formato oficial del examen,
 * syllabus (gramática/vocabulario/funciones), estrategias por destreza, plan
 * de estudio y errores comunes de hispanohablantes de ESE nivel.
 *
 * Mantener sincronizado con el documento maestro si este cambia.
 */
export const LEVEL_KNOWLEDGE: Record<CambridgeLevelId, string> = {
  "pre-a1-starters": `PRE A1 STARTERS (YLE Starters). Niños 6-8 años, primer contacto. NO hay aprobado/suspenso.
FORMATO OFICIAL:
- Parte 1 Listening (~20 min): 4 partes (escuchar y colorear, unir con líneas, marcar, rellenar). Cada audio se oye DOS veces.
- Parte 2 Reading & Writing (20 min): relacionar palabras con imágenes, etiquetar dibujos, leer y completar, escribir palabras/frases muy simples.
- Parte 3 Speaking (3-5 min): describir una lámina, responder preguntas personales sencillas (nombre, edad, familia, colores, animales).
PUNTUACIÓN: escudos (shields) 1-5 por cada una de las 3 partes. No hay suspenso.
SYLLABUS Vocabulario (temas): colores, números 1-20, familia, animales, cuerpo, ropa, comida y bebida, casa y habitaciones, juguetes, escuela, clima, días de la semana.
SYLLABUS Gramática: to be (am/is/are), have got, artículos a/an, plural regular, pronombres personales sujeto, posesivos my/your/his/her, this/that, preposiciones de lugar (in, on, under), imperativos (stand up, sit down), can de habilidad (I can swim).
FUNCIONES: saludar/despedirse, decir nombre y edad, describir por color y tamaño, contar, seguir instrucciones sencillas.
ESTRATEGIAS: Listening — primero contexto general, luego detalle; el audio se repite dos veces. Reading & Writing — asociar palabra-imagen, deletreo; tarjetas con palabras parecidas (cat/cot/cap). Speaking — láminas con "What can you see?"; frases: I can see..., It's a..., I like..., My favourite is...
PLAN DE ESTUDIO: 8-12 semanas, 2 sesiones/semana de 45-60 min, muy lúdico, repaso en la penúltima semana.
ERRORES COMUNES (ES): confundir he/she, olvidar la "s" del plural, aspirar la "h" muda, orden calcado del español ("the ball red" en vez de "the red ball").`,

  "a1-movers": `A1 MOVERS (YLE Movers). Niños 8-10 años tras Starters. Sin suspenso.
FORMATO OFICIAL:
- Parte 1 Listening (~25 min): 5 partes (unir, colorear y dibujar, completar formularios, elegir imagen, completar espacios).
- Parte 2 Reading & Writing (30 min): 6 partes (V/F sobre imágenes, elegir palabra, respuestas cortas, completar historia con palabras dadas, escribir frases sobre una imagen).
- Parte 3 Speaking (5-7 min): encontrar diferencias entre dos láminas, preguntas personales, hablar sobre una lámina.
PUNTUACIÓN: escudos 1-5 por parte. Sin suspenso.
SYLLABUS Vocabulario (además de Starters): profesiones, transporte, lugares de la ciudad, deportes, partes del día, comida más específica, adjetivos de sentimiento (happy, sad, tired, hungry), fechas y meses, hobbies.
SYLLABUS Gramática: presente simple (afirm/neg/interr) para rutinas, presente continuo, there is/there are, comparativos simples (bigger, smaller), preposiciones de tiempo (at, in, on), have to, must/mustn't básico, pasado simple de verbos comunes (was/were, went, saw, had).
FUNCIONES: rutinas diarias, dar direcciones sencillas, comparar objetos, contar una experiencia pasada simple.
ESTRATEGIAS: Listening — anticipación (leer opciones antes de escuchar); completar horario semanal. Reading & Writing — palabras clave en V/F; mini-historia con 5 huecos. Speaking "Find the differences" — frases fijas: In my picture there is/are..., In your picture...
PLAN DE ESTUDIO: 10-14 semanas, 2 sesiones/semana de 60 min.
ERRORES COMUNES (ES): confundir presente simple/continuo ("I am liking"), omitir la "s" de 3ª persona, orden adjetivo-sustantivo, "do" redundante en preguntas con otro auxiliar.`,

  "a2-flyers": `A2 FLYERS (YLE Flyers). Niños 10-12 años, puente hacia A2 Key.
FORMATO OFICIAL:
- Parte 1 Listening (~25-30 min): 5 partes (emparejar información, completar notas, elegir imagen, completar formulario, colorear/etiquetar).
- Parte 2 Reading & Writing (40 min): 7 partes (textos más largos, elección múltiple, completar con banco de palabras, escribir una historia corta a partir de viñetas).
- Parte 3 Speaking (7-9 min): describir diferencias, ordenar y contar una historia con viñetas, preguntas personales más elaboradas.
PUNTUACIÓN: escudos 1-5 por parte. Último nivel YLE antes de exámenes con aprobado/suspenso.
SYLLABUS Vocabulario nuevo: naturaleza y animales salvajes, ciencia básica, tecnología cotidiana, sentimientos matizados, comparativos/superlativos, geografía elemental, tiempo libre y planes de futuro.
SYLLABUS Gramática: pasado simple regular e irregular consolidado, futuro con going to y will, comparativos/superlativos irregulares, adverbios de frecuencia, should/shouldn't, primer condicional simplificado (if + presente + will), pronombres posesivos (mine, yours), preposiciones de movimiento.
FUNCIONES: narrar secuencia de eventos pasados, dar consejos simples, hacer planes de futuro, describir procesos cortos.
ESTRATEGIAS: Listening — tomar notas (nombres, números, lugares), números complejos (horas, precios, fechas). Story writing — plantilla: Introducción (quién/dónde) → Problema/evento → Resolución, con conectores first, then, after that, finally. Speaking storytelling con viñetas — conectores temporales y verbos de acción en pasado.
PLAN DE ESTUDIO: 12-16 semanas, 2 sesiones/semana de 60-75 min, con 1-2 simulacros cronometrados al final.
ERRORES COMUNES (ES): mezclar going to/will, dificultad para narrar en pasado con coherencia, abuso de "and then... and then...".`,

  "a2-key": `A2 KEY (KET / A2 Key for Schools). Adolescentes/adultos, primera certificación oficial. Hay aprobado/suspenso.
FORMATO OFICIAL (3 papeles):
- Papel 1 Reading & Writing (60 min): 7 partes / 32 preguntas — emparejar señales/textos con significado, elección múltiple sobre textos cortos, texto largo, completar texto con opción múltiple, transformación/completar frases, email/carta guiada de 25 palabras.
- Papel 2 Listening (~24 min audio + 6 min transferencia): 5 partes — elegir imagen, completar información (notas/formulario), emparejar, elección múltiple. Cada audio se oye DOS veces.
- Papel 3 Speaking en pareja (8-10 min): Parte 1 preguntas personales; Parte 2 conversación entre candidatos con láminas (pedir/dar información).
PUNTUACIÓN: Cambridge English Scale 120-150. Aprobado desde 120 (A2); 140+ = "A2 con distinción" y B1 parcial.
SYLLABUS Vocabulario (A2 Key Vocabulary List oficial): todo Flyers + vida adulta diaria: trabajo/estudios básicos, salud y cuerpo, compras y dinero, vivienda, viajes y transporte, tecnología cotidiana, servicios.
SYLLABUS Gramática (A2 + entrada a B1): presente simple/continuo, pasado simple/continuo, present perfect (introducción: have you ever...?, I've never...), futuro (going to, will, presente continuo con valor de futuro), comparativos/superlativos, cuantificadores (some/any/much/many/a lot of/a few/a little), modales (can, could, must, have to, should), primer condicional, preposiciones, both/all/none, phrasal verbs frecuentes.
FUNCIONES: pedir/dar información personal, sugerencias e invitaciones, acuerdo/desacuerdo simple, pedir en tienda/restaurante, email/nota informal.
ESTRATEGIAS: Reading&Writing — Parte 1 (señales) eliminar distractores por significado literal vs contextual; Parte 5 colocaciones (make a decision) y preposiciones dependientes; Parte 6-7 email 25 palabras: PLANTILLA saludo + 3 puntos obligatorios (responder SIEMPRE a los 3) + despedida; contar palabras y no pasarse; penalizan más no cumplir los 3 puntos que errores menores. Listening — leer opciones antes; cuidado con distractores que corrigen después ("actually, no..."). Speaking — Parte 1 respuestas en frase completa; Parte 2 frases de interacción (Excuse me, could you tell me...? / Sure, it's...); hablar con iniciativa.
PLAN DE ESTUDIO: 10-14 semanas, 2-3 sesiones/semana de 60-90 min: 40% gramática/vocab, 30% receptivas, 30% productivas + 2 simulacros.
ERRORES COMUNES (ES): omitir sujeto ("Is raining"), doble negación ("I don't have nothing"), orden de adjetivos, make/do, preposiciones ("depend of" por "depend on"), falsos amigos (actually, library, embarrassed, sensible).`,

  "b1-preliminary": `B1 PRELIMINARY (PET / B1 Preliminary for Schools). Nivel intermedio, primer examen "serio" para muchos. Total 140 min.
FORMATO OFICIAL (4 papeles):
- Papel 1 Reading (45 min, 6 partes): emparejar textos cortos con descripciones, elección múltiple, texto con huecos de opción múltiple, texto largo (V/F o multiple matching), completar texto con banco de palabras.
- Papel 2 Writing (45 min, 2 partes): Parte 1 transformación de frases (mantener significado). Parte 2 elegir carta/email informal o narración corta a partir de título/frase dada, ~100 palabras.
- Papel 3 Listening (30 min, 4 partes): elección múltiple sobre conversaciones cortas, completar información/notas, emparejar (hablante/opinión), elección múltiple sobre conversación larga.
- Papel 4 Speaking en pareja (12-17 min, 4 partes): entrevista personal, describir una foto, tarea colaborativa (planificar/decidir juntos), discusión final de opinión.
PUNTUACIÓN: Cambridge English Scale 140-170. Aprobado desde 140 (B1); 160+ = "B1 con distinción" / B2 parcial.
SYLLABUS Vocabulario (B1 Preliminary Vocabulary List oficial): entretenimiento y medios, relaciones personales, medio ambiente, educación y trabajo, viajes y alojamiento, tecnología y redes, salud y estilo de vida, opiniones y sentimientos matizados.
SYLLABUS Gramática (B1): present perfect simple vs pasado simple (contrastivo), present perfect continuous, segundo condicional, voz pasiva en presente/pasado, estilo indirecto, modales de deducción (must/might/can't + be), oraciones de relativo (defining/non-defining básico), used to, cuantificadores avanzados, gerundio vs infinitivo tras verbos comunes.
FUNCIONES: narrar con matices temporales, opiniones justificadas, hipótesis simples, describir procesos/planes, negociar/acordar (clave Speaking parte 3).
ESTRATEGIAS: Reading — Parte 1 escanear por keywords; Parte 5 gramática funcional (preposiciones, conectores, tiempos); no más de 8 min por parte. Writing — Parte 1 estructuras paralelas (activa/pasiva, directo/indirecto, as...as, condicionales); Parte 2 PLANTILLA carta informal (saludo, referencia, 2-3 puntos, despedida) o narración (situación, complicación, resolución) con tiempos consistentes; criterios reales: Contenido, Logro comunicativo, Organización, Lenguaje. Listening — escuchar el "giro" (but, although, actually) que suele contener la respuesta. Speaking — Parte 3 banco de negociación (What do you think about...? / I agree, but... / Shall we choose...? / Maybe it's better to...); Parte 4 justificar (I think... because...).
PLAN DE ESTUDIO: 12-16 semanas, 2-3 sesiones/semana de 90 min, writing semanal con feedback, speaking en pareja cada 2 semanas, 2-3 simulacros al final.
ERRORES COMUNES (ES): present perfect vs pasado simple (ever/never/already/yet mal ubicados), pasiva mal formada, registro inconsistente, estilo indirecto sin retroceder el tiempo, calcos ("married with", "depend of").`,

  "b2-first": `B2 FIRST (FCE / B2 First for Schools). El más solicitado globalmente. Total 209 min, 4 papeles, cada uno 20% de la nota.
FORMATO OFICIAL:
- Papel 1 Reading & Use of English (75 min, 7 partes / 52 preguntas, 40% nota): P1 cloze opción múltiple (8 huecos); P2 cloze abierto (8); P3 formación de palabras (8, raíz dada); P4 transformación con palabra clave (6 ítems, 2 pts c/u); P5 texto largo opción múltiple (6); P6 gapped text (frases/párrafos); P7 multiple matching (10 ítems).
- Papel 2 Writing (80 min, 2 partes, 20% nota): P1 OBLIGATORIA ensayo de opinión 140-190 palabras (2 ideas dadas + 1 propia); P2 a elegir entre 3: artículo, email/carta, informe o reseña, 140-190 palabras.
- Papel 3 Listening (40 min, 4 partes / 30 preguntas, 20% nota): P1 8 audios cortos opción múltiple; P2 audio largo sentence completion; P3 5 audios cortos multiple matching; P4 audio largo opción múltiple sobre opiniones/actitudes. Cada audio DOS veces.
- Papel 4 Speaking en pareja (14 min, 4 partes, 20% nota): P1 entrevista (2 min); P2 long turn (1 min sobre 2 fotos comparándolas + pregunta); P3 tarea colaborativa con láminas (decisión conjunta); P4 discusión de opinión con el examinador.
PUNTUACIÓN: Cambridge English Scale 160-190. Aprobado desde 160 (B2); 180+ = "B2 con distinción" / C1 parcial.
SYLLABUS Vocabulario (English Vocabulary Profile B2): temas abstractos (medio ambiente, tecnología y sociedad, educación superior, mundo laboral, salud mental, cultura y medios), colocaciones, phrasal verbs habituales, lenguaje de opinión/argumentación, prefijos/sufijos (Reading P3).
SYLLABUS Gramática (B2): todos los tiempos contrastivos, tercer condicional y mixtos, voz pasiva en todas las formas (have something done), estilo indirecto avanzado (suggest, deny, admit, insist), relativas (whose, which sobre toda una cláusula), participios como adjetivos y cláusulas de participio, wish/if only, inversión básica (Never have I..., Not only...), estructuras enfáticas (It is/was... that...), modales de especulación pasada (must have, might have, can't have).
FUNCIONES: argumentar/contraargumentar, comparar/contrastar, especular, cambiar de registro, resumir/sintetizar.
ESTRATEGIAS: R&UoE — P1-P3 colocaciones y familias de palabras (lista semanal 15-20 con formas); P4 banco de 30+ estructuras equivalentes; P6 referencias (pronombres, conectores, tiempo); P7 escanear por sinónimos/parafraseo. Writing — PLANTILLA ensayo: intro parafraseando + idea 1 + idea 2 + idea propia + conclusión, con conectores B2 (moreover, however, as a result, on the other hand, furthermore); plantillas por tipo (artículo, informe, reseña, email/carta formal e informal); criterios: Contenido, Logro comunicativo, Organización, Lenguaje. Listening — P2 palabra exacta (ortografía/número); P4 marcadores de actitud (surprisingly, unfortunately). Speaking — P2 plantilla comparación (Both pictures show..., but in the first... whereas in the second...) + responder la pregunta; P3 interacción real (What do you think about this one? / I see your point, but... / Shall we agree on...?); P4 ampliar con ejemplos.
PLAN DE ESTUDIO: 14-20 semanas, 3 sesiones/semana de 90 min: 25% cada destreza + 3-4 simulacros en las últimas 6 semanas.
ERRORES COMUNES (ES): "people is" (concordancia), make/do, registro inconsistente, "actually" mal usado (por "actualmente"), preposiciones fijas ("good in" por "good at"), abuso de "very".`,

  "c1-advanced": `C1 ADVANCED (CAE). Alto dominio: universidades exigentes, empleo cualificado, posgrado. 4 papeles.
FORMATO OFICIAL:
- Papel 1 Reading & Use of English (90 min, 8 partes / 56 preguntas): P1 cloze opción múltiple; P2 cloze abierto; P3 formación de palabras; P4 transformación con palabra clave; P5 texto largo opción múltiple (actitud/opinión/implicación); P6 multiple matching (varios textos con opiniones contrastadas); P7 gapped text (párrafos eliminados); P8 multiple matching (localizar información).
- Papel 2 Writing (90 min, 2 partes, 40 puntos): P1 OBLIGATORIA ensayo basado en dos textos breves, resumiendo y evaluando con opinión propia (220-260 palabras); P2 a elegir: email/carta, informe, reseña o propuesta (220-260). Corrección 1-5 en Contenido, Logro comunicativo, Organización, Lenguaje.
- Papel 3 Listening (~40 min, 4 partes / 30 preguntas): P1 4 audios cortos opción múltiple; P2 audio largo sentence completion; P3 audio largo opción múltiple 4 opciones; P4 5 audios cortos, DOS tareas de multiple matching simultáneas.
- Papel 4 Speaking en pareja (~15 min, 4 partes, 6 criterios): P1 entrevista; P2 long turn con foto; P3 tarea colaborativa (decisión); P4 discusión de opinión.
PUNTUACIÓN: Cambridge English Scale 180-210. Aprobado desde 180 (C1); 200+ = C2 parcial.
SYLLABUS Vocabulario (EVP C1): registro formal/académico, colocaciones sofisticadas, expresiones idiomáticas y phrasal verbs menos frecuentes, matices de sinónimos (vital/crucial/essential/fundamental), lenguaje de debate, nominalización.
SYLLABUS Gramática (C1): inversión y condicionales sin "if" (Were I to..., Had I known...), oraciones hendidas (What really matters is..., It was only after... that...), subjuntivo formal (It is essential that he be...), elipsis y sustitución, matices modales avanzados, participios/gerundios en cláusulas complejas, conectores académicos (nonetheless, notwithstanding, in view of, given that), voz pasiva impersonal (It is believed that...).
FUNCIONES: sintetizar y evaluar críticamente varias fuentes, argumentar con matices/concesiones, registro muy formal, persuadir y proponer soluciones.
ESTRATEGIAS: R&UoE — P5-P8 diferenciar "lo que dice" de "lo que implica" (inferencia); subrayar el propósito de cada párrafo; P4 banco C1 (inversión, cleft, deny doing, regret to inform, insist on). Writing — P1 PLANTILLA síntesis de 2 textos: intro parafraseando el tema común + síntesis texto A + síntesis/contraste texto B + evaluación propia con matices + conclusión; NO copiar frases (penalizan el "lifting"); P2 plantillas para informe, propuesta (persuasiva), reseña analítica. Listening — P4 doble tarea (1ª pasada tarea 1, 2ª tarea 2). Speaking — entrenar los 6 criterios (gramática y vocab, coherencia y cohesión, pronunciación, interacción, logro global); P2 gestión del minuto (descripción → comparación → respuesta directa).
PLAN DE ESTUDIO: 16-24 semanas, 3 sesiones/semana de 90-120 min, lectura extensiva de textos periodísticos/académicos, escritura semanal con corrección, 4-5 simulacros en las últimas 8 semanas.
ERRORES COMUNES (ES): registro inconsistente (contracciones/coloquialismos en formal), pobre variedad de conectores C1, "do a mistake" por "make a mistake", calcos en subordinadas largas, "lifting" de frases literales en Writing P1.`,

  "c2-proficiency": `C2 PROFICIENCY (CPE). Nivel más alto, dominio casi nativo. ~236 min, 4 papeles.
FORMATO OFICIAL:
- Papel 1 Reading & Use of English (90 min, 7 partes / 53 preguntas; P1-4 Use of English, P5-7 Reading): P1 cloze opción múltiple con matices léxicos finos; P2 cloze abierto; P3 formación de palabras con matices semánticos; P4 transformación con palabra clave (muy avanzada); P5 texto largo opción múltiple (6, 2 pts c/u), implicación/tono/intención; P6 multiple matching entre 4 textos con posturas distintas; P7 gapped text de alta complejidad.
- Papel 2 Writing (90 min, 2 partes): P1 OBLIGATORIA 2 textos cortos + ensayo que resuma ambos y aporte evaluación propia (240-280 palabras); P2 a elegir entre 5: artículo, carta, informe, reseña o ensayo sobre una obra literaria (exige haber leído una lectura recomendada de la convocatoria).
- Papel 3 Listening (40 min, 4 partes / 30 preguntas): P1 3 audios cortos opción múltiple; P2 audio largo sentence completion con precisión léxica alta; P3 audio largo opción múltiple 4 opciones (matices de actitud); P4 6 audios cortos, doble multiple matching.
- Papel 4 Speaking en pareja (16 min, 3 partes): P1 entrevista breve; P2 long turn con foto + pregunta abstracta; P3 tarea colaborativa (discusión abstracta y decisión) + discusión final ampliada.
PUNTUACIÓN: Cambridge English Scale 200-230. Aprobado desde 200 (C2); 220+ = "C2 con distinción". C2 es el techo, sin reconocimiento parcial superior.
SYLLABUS Vocabulario (EVP C2): registros muy diversos (literario, periodístico, académico, coloquial culto), ironía y humor sutil, modismos de baja frecuencia, matices connotativos entre cuasi-sinónimos, lenguaje figurado y metáforas, colocaciones de alta especificidad.
SYLLABUS Gramática (C2): dominio completo y flexible (condicionales mixtos complejos, inversión avanzada, subjuntivo, cleft sentences, elipsis y sustitución sofisticadas), uso estilístico deliberado para efecto retórico, manejo de ambigüedad y matices pragmáticos.
FUNCIONES: analizar críticamente textos literarios/de opinión, sintetizar posturas divergentes con precisión, adaptar el discurso a la intención (persuadir, ironizar, matizar), argumentación sofisticada.
ESTRATEGIAS: R&UoE — matices léxicos (grupos de casi sinónimos y sus diferencias de uso/connotación/registro); P6-P7 tono, postura implícita, estructura retórica. Writing — P1 PLANTILLA síntesis crítica: intro con tesis propia + desarrollo que integra y contrasta ambos textos con voz propia + conclusión con juicio; variedad léxica/estructural muy alta, cero repetición de frases fuente; P2 opción literaria requiere trabajar la obra recomendada. Listening — audios de acento variado (británico, americano, australiano, no nativos) y registros distintos. Speaking — P2 preguntas de reflexión abstracta (tesis + matización + ejemplo); P3-P4 argumentación sofisticada, concesiones (While it's true that..., I'd argue that...), desacuerdo respetuoso.
PLAN DE ESTUDIO: 20-30 semanas, 3 sesiones/semana de 120 min, lectura extensiva obligatoria, diario de vocabulario connotativo, writing quincenal con corrección exhaustiva, 4-5 simulacros en las últimas 10 semanas.
ERRORES COMUNES (incluso altos): sobreuso de vocabulario "de manual", errores de matiz connotativo (sinónimo correcto pero registro inadecuado), estructuras perfectas pero poco naturales, dificultad para lograr "tono propio" en Writing P1.`,
};
