/**
 * A1 Movers · Semana 12 — "Recta final 🏁 · Ready for your exam".
 * Práctica final por destreza + cierre + guía para padres + simulacro final.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY56 = {
  title: "Día 56 — Día de Listening 🎧 · Full listening practice",
  description: "Práctica intensiva de las 5 partes de Listening del examen Movers.",
  pedagogy: { objective: "Practicar las 5 partes de Listening del examen.", summary: "Listening P1-P5 completo, estilo examen real.", reviewPrompts: ["¿Qué parte de Listening te resulta más difícil?"] },
  items: [
    TEXT("🎧 Hoy practicamos las 5 partes de Listening, como en el examen real Movers."),
    GRAMMAR("Las 5 partes de Listening Movers", "P1: unir nombres con dibujos. P2: completar un formulario. P3: colorear y escribir. P4: elegir la imagen correcta. P5: completar una escena."),
    deck("Movers S12D56 — Repaso de vocabulario para Listening", [
      ["listen carefully", "escucha con atención", "Listen carefully to the audio.", "phrase"],
      ["match", "unir/emparejar", "Match the names to the pictures.", "verb"],
      ["form", "formulario", "Complete the form.", "word"],
      ["colour", "colorear", "Colour the picture.", "verb"],
      ["choose", "elegir", "Choose the correct picture.", "verb"],
      ["scene", "escena", "Complete the scene.", "word"],
    ]),
    vocabEx("Vocabulario de instrucciones 🎧", "Elige la opción correcta.", [
      mc("'Match the names' significa:", ["unir nombres", "colorear"], 0, "'match' = unir."),
      mc("'Complete the form' significa:", ["completar formulario", "elegir imagen"], 0, "'form' = formulario."),
    ]),
    LISTENING_HEAD,
    listenMatch("Parte 1 — Unir nombres con dibujos", [
      mc("🎧 'This is Lucy. She's got long hair and she's wearing a red dress.' ¿Quién es?", ["Lucy", "Sam"], 0, "'This is Lucy'."),
      mc("🎧 'This is Sam. He's wearing a blue cap.' ¿Quién es?", ["Sam", "Lucy"], 0, "'This is Sam'."),
    ]),
    listenForm("Parte 2 — Completar formulario", [
      fb("🎧 'My name is Anna, I'm nine years old and I live in London.' Edad: ___", ["nine"], "'nine years old'."),
    ]),
    listenColourWrite("Parte 3 — Colorear y escribir", [
      fb("🎧 'Colour the big balloon red and write the number five next to it.' Número: ___", ["five"], "'the number five'."),
    ]),
    listenChoose("Parte 4 — Elegir la imagen correcta", [
      mc("🎧 'The children are playing in the garden, not in the park.' ¿Dónde están?", ["garden", "park"], 0, "'in the garden'."),
    ]),
    listenScene("Parte 5 — Completar la escena", [
      mc("🎧 'There's a cat under the table and a dog next to the sofa.' ¿Dónde está el gato?", ["under the table", "on the sofa"], 0, "'under the table'."),
    ]),
    listening(1, "Listening · Día completo de práctica", "Escucha las 5 partes y responde.", "Full listening practice: all 5 parts as in the real Movers exam.", []),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Reflexión sobre Listening", "Reflexiona sobre tu progreso en Listening.", "Habla sobre qué parte de Listening te resulta más fácil y por qué.", "reflexionar sobre el progreso", "I think Part 1 is easy because..."),
    SUMMARY("Resumen del Día 56", ["Practicaste las 5 partes de Listening del examen Movers real."]),
    INFO("Tarea para el Día 57", "Mañana: día de Reading & Writing."),
  ],
};

const DAY57 = {
  title: "Día 57 — Día de Reading & Writing 📖 · Full reading & writing practice",
  description: "Práctica intensiva de las 6 partes de Reading & Writing del examen Movers.",
  pedagogy: { objective: "Practicar las 6 partes de Reading & Writing del examen.", summary: "Reading & Writing P1-P6 completo, estilo examen real.", reviewPrompts: ["¿Qué parte de Reading & Writing te resulta más difícil?"] },
  items: [
    TEXT("📖 Hoy practicamos las 6 partes de Reading & Writing, como en el examen real Movers."),
    GRAMMAR("Las 6 partes de Reading & Writing Movers", "P1: definiciones. P2: historia con Sí/No. P3: elegir en huecos. P4: cloze abierto. P5: caja de palabras. P6: completar palabras."),
    deck("Movers S12D57 — Repaso de vocabulario para Reading", [
      ["definition", "definición", "Read the definition.", "word"],
      ["story", "historia", "Read the story.", "word"],
      ["gap", "hueco", "Fill in the gap.", "word"],
      ["word box", "caja de palabras", "Choose from the word box.", "phrase"],
      ["complete", "completar", "Complete the word.", "verb"],
      ["correct", "correcto/a", "Choose the correct answer.", "adjective"],
    ]),
    vocabEx("Vocabulario de instrucciones 📖", "Elige la opción correcta.", [
      mc("'Fill in the gap' significa:", ["completar el hueco", "leer la historia"], 0, "'gap' = hueco."),
      mc("'Word box' significa:", ["caja de palabras", "definición"], 0, "'word box'."),
    ]),
    READING_HEAD,
    readDefine("Parte 1 — Definiciones", [
      mc("Un animal con una trompa larga: ___", ["elephant", "giraffe"], 0, "elephant."),
      mc("La habitación donde duermes: ___", ["bedroom", "kitchen"], 0, "bedroom."),
    ]),
    readStory("Parte 2 — Historia con Sí/No", "Last Saturday, Emma went to the park with her brother. They played football and had a picnic. It was sunny and they had a great time.", [
      mc("Emma went alone. ¿Está bien?", ["Sí", "No"], 1, "'with her brother', no alone."),
      mc("It was sunny. ¿Está bien?", ["Sí", "No"], 0, "'It was sunny' — Sí."),
    ]),
    readGapChoice("Parte 3 — Elegir en huecos", "Yesterday I ___ (1) to my friend's house. We ___ (2) games all afternoon.", [
      mc("(1)", ["went", "go"], 0, "went."),
      mc("(2)", ["played", "play"], 0, "played."),
    ]),
    readOpenCloze("Parte 4 — Cloze abierto", "I live ___ (1) a big house with my family. We've got a garden ___ (2) the back.", [
      fb("(1)", ["in"], "in a house."), fb("(2)", ["at", "in"], "at the back."),
    ]),
    readWordBox("Parte 5 — Caja de palabras", "Caja: basketball, headache, can, should\n\nI play ___ (1) every day. I've got a ___ (2), so I ___ (3) rest, but I ___ (4) still read.", [
      fb("(1)", ["basketball"], "basketball."), fb("(2)", ["headache"], "headache."), fb("(3)", ["should"], "should."), fb("(4)", ["can"], "can."),
    ]),
    readWrite("Parte 6 — Completar palabras", [fb("el_ph_nt (elefante)", ["elephant"], "elephant."), fb("b_sk_tb_ll (baloncesto)", ["basketball"], "basketball.")]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Reflexión sobre Reading & Writing", "Reflexiona sobre tu progreso.", "Habla sobre qué parte de Reading & Writing te resulta más fácil.", "reflexionar sobre el progreso", "I think Part 2 is easy because..."),
    SUMMARY("Resumen del Día 57", ["Practicaste las 6 partes de Reading & Writing del examen Movers real."]),
    INFO("Tarea para el Día 58", "Mañana: día de Speaking."),
  ],
};

const DAY58 = {
  title: "Día 58 — Día de Speaking 🗣️ · Full speaking practice",
  description: "Práctica intensiva de las tareas de Speaking del examen Movers.",
  pedagogy: { objective: "Practicar las tareas típicas de Speaking del examen.", summary: "Speaking: diferencias, historia con imágenes, preguntas personales.", reviewPrompts: ["¿Qué parte de Speaking te resulta más difícil?"] },
  items: [
    TEXT("🗣️ Hoy practicamos las tareas de Speaking, como en el examen real Movers."),
    GRAMMAR("Las tareas de Speaking Movers", "1. Encontrar diferencias entre dos imágenes. 2. Contar una historia a partir de 4 imágenes. 3. Responder preguntas personales."),
    deck("Movers S12D58 — Vocabulario para Speaking", [
      ["difference", "diferencia", "Find the difference.", "word"],
      ["similar", "parecido/a", "The pictures are similar.", "adjective"],
      ["tell a story", "contar una historia", "Tell a story about the pictures.", "phrase"],
      ["first/then/after that/finally", "primero/luego/después/finalmente", "First he woke up, then he had breakfast.", "connector"],
      ["personal questions", "preguntas personales", "Answer the personal questions.", "phrase"],
    ]),
    vocabEx("Vocabulario para Speaking 🗣️", "Elige la opción correcta.", [
      mc("'Find the difference' significa:", ["encontrar la diferencia", "contar una historia"], 0, "'difference'."),
      mc("Para ordenar una historia usamos: first, then, ___, finally.", ["after that", "similar"], 0, "after that."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha ejemplos de Speaking", [
      mc("🎧 'In my picture, the boy is wearing a red cap. In your picture, is he wearing a cap?' ¿Qué busca?", ["a difference", "a story"], 0, "buscar una diferencia."),
      mc("🎧 'First, she woke up. Then, she had breakfast.' ¿Qué está haciendo?", ["telling a story", "finding differences"], 0, "contando una historia."),
    ]),
    listening(1, "Listening · Ejemplos de Speaking", "Escucha los ejemplos.", "Listen. In my picture, the boy is wearing a red cap. First, she woke up, then she had breakfast.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Cuando dos imágenes no son iguales, buscas una: ___", ["difference", "story"], 0, "difference."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Encuentra las diferencias", "Practica encontrar diferencias entre dos imágenes.", "Describe 3 diferencias imaginarias entre dos escenas con animales.", "encontrar diferencias", "In my picture... but in your picture..."),
    speaking(2, "Speaking · Cuenta una historia", "Practica contar una historia con conectores.", "Cuenta una historia corta usando first, then, after that, finally.", "contar una historia ordenada", "First... then... after that... finally..."),
    speaking(3, "Speaking · Preguntas personales", "Practica responder preguntas personales.", "Responde: ¿cómo te llamas?, ¿cuántos años tienes?, ¿qué te gusta hacer?", "responder preguntas personales", "My name is..., I'm... years old, I like..."),
    SUMMARY("Resumen del Día 58", ["Practicaste las 3 tareas típicas de Speaking del examen Movers real."]),
    INFO("Tarea para el Día 59", "Mañana: práctica combinada de las 4 destrezas."),
  ],
};

const DAY59 = {
  title: "Día 59 — Práctica combinada 🎯 · All four skills together",
  description: "Mini-simulacro combinando Listening, Reading & Writing y Speaking.",
  pedagogy: { objective: "Combinar las 4 destrezas en una sesión completa.", summary: "Mini-simulacro final antes del Día 60.", reviewPrompts: ["¿Te sientes listo/a para tu examen Movers?"] },
  items: [
    TEXT("🎯 Último día de práctica antes de tu gran simulacro final. ¡Combinamos todo!"),
    GRAMMAR("Repaso express de gramática clave", "Presente simple y continuo. some/any. Pasado simple (regular e irregular). can/could, should/shouldn't."),
    deck("Movers S12D59 — Vocabulario clave final", [
      ["basketball", "baloncesto", "I play basketball.", "sport"],
      ["headache", "dolor de cabeza", "I've got a headache.", "health"],
      ["went", "fue/fui", "I went to the park.", "verb"],
      ["can/could", "poder (presente/pasado)", "I can swim, I could read at four.", "modal"],
      ["wearing", "llevando puesto", "I'm wearing a jacket.", "word"],
      ["should", "deberías", "You should rest.", "modal"],
    ]),
    vocabEx("Vocabulario clave final 🎯", "Elige la opción correcta.", [
      mc("I ___ to the park yesterday.", ["went", "go"], 0, "went."),
      mc("I ___ a headache. (tengo)", ["have got", "has got"], 0, "have got."),
      mc("You should ___ if you feel ill.", ["rest", "run"], 0, "rest."),
    ]),
    LISTENING_HEAD,
    listenMatch("Mini-Listening final", [
      mc("🎧 'Yesterday I played basketball and then I went home.' ¿Qué hizo primero?", ["played basketball", "went home"], 0, "'played basketball' primero."),
    ]),
    listening(1, "Listening · Mini-práctica final", "Escucha y responde.", "Listen. Yesterday I played basketball and then I went home.", []),
    READING_HEAD,
    readGapChoice("Mini-Reading final", "Yesterday I ___ (1) to the park and I ___ (2) football with my friends.", [
      mc("(1)", ["went", "go"], 0, "went."),
      mc("(2)", ["played", "play"], 0, "played."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Simulacro combinado", "Combina todo lo aprendido en el curso.", "Habla 1-2 minutos sobre tu semana, usando pasado, ropa, deportes y salud.", "combinar las 4 destrezas", "Yesterday I went, I played basketball, I'm wearing"),
    SUMMARY("Resumen del Día 59", ["¡Último repaso completado! Estás listo/a para tu gran simulacro final."]),
    INFO("Tarea para el Día 60", "¡Mañana es el gran día! Simulacro final de A1 Movers."),
  ],
};

const DAY60 = {
  title: "Día 60 — ¡Lo lograste! 🏁 · Final simulacro + guía para padres",
  description: "Cierre del curso, guía para padres, y disparador del simulacro final.",
  pedagogy: { objective: "Cerrar el curso y preparar el simulacro final.", summary: "Cierre; guía para padres; simulacro final del curso.", reviewPrompts: ["¿Qué es lo que más te ha gustado aprender?"] },
  items: [
    TEXT("🏁 ¡Felicidades! Has completado las 12 semanas de A1 Movers. Hoy es tu gran simulacro final."),
    GRAMMAR("Lo que has aprendido", "Familia, casa, rutina diaria. Comida y ropa. Animales salvajes. Presente continuo. Pasado simple. Deportes y salud. can/could, should/shouldn't."),
    INFO("Guía para padres y familias 👨‍👩‍👧", "Tu hijo/a ha completado 60 días de inglés nivel A1 Movers, practicando las 4 destrezas (Listening, Reading & Writing, Speaking) con el formato real del examen Cambridge. En el examen Movers real no hay aprobado/suspenso — se otorgan 'shields' (escudos) de 1 a 5 por destreza, celebrando el progreso. Anímale a seguir practicando inglés con canciones, series y libros en inglés."),
    deck("Movers S12D60 — Repaso de despedida", [
      ["congratulations", "felicidades", "Congratulations on finishing!", "phrase"],
      ["progress", "progreso", "Look at your progress!", "word"],
      ["shield", "escudo (premio Cambridge)", "You get shields in the real exam.", "word"],
      ["proud", "orgulloso/a", "I'm so proud of you!", "adjective"],
    ]),
    vocabEx("Repaso de despedida 🏁", "Elige la opción correcta.", [
      mc("'Congratulations' significa:", ["felicidades", "adiós"], 0, "felicidades."),
      mc("En el examen Movers real, consigues... (premio)", ["shields", "points"], 0, "shields."),
    ]),
    LISTENING_HEAD,
    listenMatch("Último Listening del curso", [
      mc("🎧 'Congratulations! You've finished the course. I'm so proud of you!' ¿Cómo se siente?", ["proud", "angry"], 0, "'so proud'."),
    ]),
    listening(1, "Listening · Mensaje final", "Escucha el mensaje de despedida.", "Listen. Congratulations! You've finished the course. I'm so proud of you!", []),
    READING_HEAD,
    readWrite("Completa las palabras de despedida", [fb("c_ngr_t_l_ti_ns (felicidades)", ["congratulations"], "congratulations."), fb("pr__d (orgulloso/a)", ["proud"], "proud.")]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi despedida", "Habla sobre lo que has aprendido en el curso.", "Cuenta lo que más te ha gustado aprender en estas 12 semanas.", "reflexionar sobre el curso completo", "I learned about, My favourite part was"),
    SUMMARY("Resumen del Día 60 — ¡Curso completado! 🏁", ["Has completado las 12 semanas de A1 Movers.", "Ahora, tu gran simulacro final combinando todo el curso. ¡Cuenta tus aciertos — no hay suspenso! 🌟", "¡Enhorabuena, future Cambridge star! 🎉"]),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "Recta final · Ready for your exam · Simulacro final",
  description: "Duodécima y última semana de A1 Movers: día de Listening, día de Reading & Writing, día de Speaking, práctica combinada, y cierre del curso con guía para padres y el simulacro final.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
