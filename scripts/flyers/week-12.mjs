/**
 * A2 Flyers · Semana 12 — "Recta final 🏁 · Ready for your exam".
 * Práctica final por destreza + cierre + guía para padres + simulacro final.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY56 = {
  title: "Día 56 — Día de Listening 🎧 · Full listening practice",
  description: "Práctica intensiva de las 5 partes de Listening del examen Flyers.",
  pedagogy: { objective: "Practicar las 5 partes de Listening del examen.", summary: "Listening P1-P5 completo, estilo examen real.", reviewPrompts: ["¿Qué parte de Listening te resulta más difícil?"] },
  items: [
    TEXT("🎧 Hoy practicamos las 5 partes de Listening, como en el examen real Flyers."),
    GRAMMAR("Las 5 partes de Listening Flyers", "P1: unir nombres con dibujos. P2: completar un formulario. P3: elegir el dibujo correcto. P4: marcar Verdadero/Falso. P5: colorear y escribir sobre una escena."),
    deck("Flyers S12D56 — Vocabulario de instrucciones", [
      ["listen carefully", "escucha con atención", "Listen carefully to the audio.", "phrase"],
      ["match", "unir/emparejar", "Match the names to the pictures.", "verb"],
      ["form", "formulario", "Complete the form.", "word"],
      ["true or false", "verdadero o falso", "Mark true or false.", "phrase"],
      ["scene", "escena", "Complete the scene.", "word"],
    ]),
    vocabEx("Vocabulario de instrucciones 🎧", "Elige la opción correcta.", [
      mc("'Mark true or false' significa:", ["marcar V/F", "colorear"], 0, "'true or false'."),
      mc("'Complete the form' significa:", ["completar formulario", "elegir dibujo"], 0, "'form' = formulario."),
    ]),
    LISTENING_HEAD,
    listenMatch("Parte 1 — Unir nombres con dibujos", [
      mc("🎧 'This is Lucy. She's friendly and she's good at painting.' ¿Quién es?", ["Lucy", "Sam"], 0, "'This is Lucy'."),
    ]),
    listenForm("Parte 2 — Completar formulario", [
      fb("🎧 'My name is Anna, I'm eleven years old and I live in Madrid.' Edad: ___", ["eleven"], "'eleven years old'."),
    ]),
    listenChoose("Parte 3 — Elegir el dibujo correcto", [
      mc("🎧 'The children are playing in the jungle area of the zoo, not near the desert animals.' ¿Dónde están?", ["jungle area", "desert area"], 0, "'in the jungle area'."),
    ]),
    listenTrueFalse("Parte 4 — Verdadero/Falso", [
      mc("🎧 'I've been to London twice, but I've never been to Paris.' ¿Ha estado en París?", ["Falso", "Verdadero"], 0, "'never been to Paris', Falso."),
    ]),
    listenScene("Parte 5 — Colorear y escribir sobre una escena", [
      mc("🎧 'There's a cat under the table and a dog next to the sofa, colour the cat orange.' ¿Dónde está el gato?", ["under the table", "on the sofa"], 0, "'under the table'."),
    ]),
    listening(1, "Listening · Día completo de práctica", "Escucha las 5 partes y responde.", "Full listening practice: all 5 parts as in the real Flyers exam.", []),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Reflexión sobre Listening", "Reflexiona sobre tu progreso en Listening.", "Habla sobre qué parte de Listening te resulta más fácil y por qué.", "reflexionar sobre el progreso", "I think Part 1 is easy because..."),
    SUMMARY("Resumen del Día 56", ["Practicaste las 5 partes de Listening del examen Flyers real."]),
    INFO("Tarea para el Día 57", "Mañana: día de Reading & Writing."),
  ],
};

const DAY57 = {
  title: "Día 57 — Día de Reading & Writing 📖 · Full reading & writing practice",
  description: "Práctica intensiva de las 7 partes de Reading & Writing del examen Flyers.",
  pedagogy: { objective: "Practicar las 7 partes de Reading & Writing del examen.", summary: "Reading & Writing P1-P7 completo, estilo examen real.", reviewPrompts: ["¿Qué parte de Reading & Writing te resulta más difícil?"] },
  items: [
    TEXT("📖 Hoy practicamos las 7 partes de Reading & Writing, como en el examen real Flyers."),
    GRAMMAR("Las 7 partes de Reading & Writing Flyers", "P1: definiciones. P2: diálogo → respuesta. P3: elegir en huecos. P4: V/F. P5: cloze abierto. P6: escritura guiada. P7: historia o postal corta."),
    deck("Flyers S12D57 — Vocabulario de instrucciones", [
      ["definition", "definición", "Read the definition.", "word"],
      ["dialogue", "diálogo", "Read the dialogue.", "word"],
      ["gap", "hueco", "Fill in the gap.", "word"],
      ["guided writing", "escritura guiada", "Do the guided writing.", "phrase"],
      ["short story", "historia corta", "Write a short story.", "phrase"],
    ]),
    vocabEx("Vocabulario de instrucciones 📖", "Elige la opción correcta.", [
      mc("'Fill in the gap' significa:", ["completar el hueco", "leer el diálogo"], 0, "'gap' = hueco."),
      mc("'Short story' significa:", ["historia corta", "definición"], 0, "'short story'."),
    ]),
    READING_HEAD,
    readDefine("Parte 1 — Definiciones", [
      mc("Un animal con el cuello muy largo: ___", ["giraffe", "elephant"], 0, "giraffe."),
      mc("El lugar donde se cocina: ___", ["kitchen", "bedroom"], 0, "kitchen."),
    ]),
    readDialogue("Parte 2 — Diálogo → respuesta", [
      mc("What's the matter? I've got a headache.", ["You should rest.", "I'd like the menu."], 0, "respuesta coherente a dolencia."),
      mc("Have you ever been to Paris?", ["Yes, I've been there twice.", "Yes, I'm going to the park."], 0, "respuesta coherente a presente perfecto."),
    ]),
    readGapChoice("Parte 3 — Elegir en huecos", "Yesterday I ___ (1) to the park and I ___ (2) football with my friends.", [
      mc("(1)", ["went", "go"], 0, "went."),
      mc("(2)", ["played", "play"], 0, "played."),
    ]),
    readTrueFalse("Parte 4 — Verdadero/Falso", "Last weekend I went to the beach and I saw dolphins. It was a sunny day and I ate ice cream.", [
      mc("He saw dolphins. ¿Está bien?", ["Verdadero", "Falso"], 0, "'saw dolphins' — Verdadero."),
      mc("It was raining. ¿Está bien?", ["Falso", "Verdadero"], 0, "'sunny day', no raining."),
    ]),
    readOpenCloze("Parte 5 — Cloze abierto", "I live ___ (1) a big house with my family. We've got a garden ___ (2) the back.", [
      fb("(1)", ["in"], "in a house."), fb("(2)", ["at", "in"], "at the back."),
    ]),
    writeGuided("Parte 6 — Escritura guiada", "Pistas: school trip — museum — bus — friends. Escribe 3-4 frases completas.", 20, 30),
    writeStory("Parte 7 — Historia o postal corta", "Pistas: holiday — beach — weather — activity. Escribe una postal corta.", 25, 35),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Reflexión sobre Reading & Writing", "Reflexiona sobre tu progreso.", "Habla sobre qué parte de Reading & Writing te resulta más fácil.", "reflexionar sobre el progreso", "I think Part 4 is easy because..."),
    SUMMARY("Resumen del Día 57", ["Practicaste las 7 partes de Reading & Writing del examen Flyers real."]),
    INFO("Tarea para el Día 58", "Mañana: día de Speaking."),
  ],
};

const DAY58 = {
  title: "Día 58 — Día de Speaking 🗣️ · Full speaking practice",
  description: "Práctica intensiva de las tareas de Speaking del examen Flyers.",
  pedagogy: { objective: "Practicar las tareas típicas de Speaking del examen.", summary: "Speaking: comparar dibujos, hablar de un tema, preguntas personales elaboradas.", reviewPrompts: ["¿Qué parte de Speaking te resulta más difícil?"] },
  items: [
    TEXT("🗣️ Hoy practicamos las tareas de Speaking, como en el examen real Flyers."),
    GRAMMAR("Las tareas de Speaking Flyers", "1. Comparar dos dibujos (diferencias y semejanzas). 2. Hablar sobre un dibujo o tema. 3. Responder preguntas personales elaboradas con opinión."),
    deck("Flyers S12D58 — Vocabulario para Speaking", [
      ["compare", "comparar", "Compare the two pictures.", "verb"],
      ["similarity", "semejanza", "Find a similarity.", "word"],
      ["talk about", "hablar sobre", "Talk about your favourite hobby.", "phrase"],
      ["personal question", "pregunta personal", "Answer the personal question.", "phrase"],
      ["opinion", "opinión", "Give your opinion.", "word"],
    ]),
    vocabEx("Vocabulario para Speaking 🗣️", "Elige la opción correcta.", [
      mc("'Find a similarity' significa:", ["encontrar una semejanza", "contar una historia"], 0, "'similarity'."),
      mc("'Give your opinion' significa:", ["dar tu opinión", "comparar dibujos"], 0, "'opinion'."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha ejemplos de Speaking", [
      mc("🎧 'In my picture, the boy is wearing a red cap. Both pictures show a park.' ¿Qué compara?", ["two pictures", "a story"], 0, "comparando dos dibujos."),
      mc("🎧 'In my opinion, learning English is important for the future.' ¿Qué da?", ["an opinion", "a direction"], 0, "dando una opinión."),
    ]),
    listening(1, "Listening · Ejemplos de Speaking", "Escucha los ejemplos.", "Listen. In my picture, the boy is wearing a red cap. Both pictures show a park. In my opinion, learning English is important for the future.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Cuando dos cosas son parecidas, tienen una: ___", ["similarity", "difference"], 0, "similarity."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Comparar dos dibujos", "Practica comparar dos dibujos con diferencias y semejanzas.", "Describe 2 diferencias y 1 semejanza entre dos escenas con animales.", "comparar dibujos", "In my picture..., Both pictures..."),
    speaking(2, "Speaking · Hablar sobre un tema", "Practica hablar sobre un tema con conectores.", "Habla 1 minuto sobre tu colegio usando first, then, finally.", "hablar sobre un tema con conectores", "First..., then..., finally..."),
    speaking(3, "Speaking · Preguntas personales con opinión", "Practica responder con opinión.", "Responde: ¿qué opinas de aprender inglés?, ¿cómo te sentiste la última vez que ganaste algo?", "responder con opinión", "In my opinion..., I felt..."),
    SUMMARY("Resumen del Día 58", ["Practicaste las 3 tareas típicas de Speaking del examen Flyers real."]),
    INFO("Tarea para el Día 59", "Mañana: práctica combinada de las 4 destrezas."),
  ],
};

const DAY59 = {
  title: "Día 59 — Práctica combinada 🎯 · All four skills together",
  description: "Mini-simulacro combinando Listening, Reading & Writing y Speaking.",
  pedagogy: { objective: "Combinar las 4 destrezas en una sesión completa.", summary: "Mini-simulacro final antes del Día 60.", reviewPrompts: ["¿Te sientes listo/a para tu examen Flyers?"] },
  items: [
    TEXT("🎯 Último día de práctica antes de tu gran simulacro final. ¡Combinamos todo!"),
    GRAMMAR("Repaso express de gramática clave", "Presente simple/continuo. going to/will. Presente perfecto (ever/never). must/mustn't. Pasado continuo. Condicional tipo 1."),
    deck("Flyers S12D59 — Vocabulario clave final", [
      ["friendly", "amigable", "I'm friendly.", "personality"],
      ["have you ever", "¿alguna vez?", "Have you ever been there?", "phrase"],
      ["must/mustn't", "deber/no deber", "You must wear, you mustn't run.", "modal"],
      ["was watching", "estaba viendo", "I was watching TV.", "verb"],
      ["if we recycle", "si reciclamos", "If we recycle, we'll help.", "phrase"],
      ["in my opinion", "en mi opinión", "In my opinion, it's fun.", "phrase"],
    ]),
    vocabEx("Vocabulario clave final 🎯", "Elige la opción correcta.", [
      mc("I'm ___. (amigable)", ["friendly", "boring"], 0, "friendly."),
      mc("Have you ___ been to London?", ["ever", "never"], 0, "ever."),
      mc("You ___ wear a uniform.", ["must", "mustn't"], 0, "must."),
      mc("If we ___, we'll help the planet.", ["recycle", "waste"], 0, "recycle."),
    ]),
    LISTENING_HEAD,
    listenMatch("Mini-Listening final", [
      mc("🎧 'I'm friendly, and if we recycle more, we'll help endangered animals.' ¿Qué dice de sí mismo y del planeta?", ["friendly, recycling helps", "shy, recycling doesn't help"], 0, "'friendly'... 'recycle more, we'll help'."),
    ]),
    listening(1, "Listening · Mini-práctica final", "Escucha y responde.", "Listen. I'm friendly, and if we recycle more, we'll help endangered animals.", []),
    READING_HEAD,
    readGapChoice("Mini-Reading final", "I'm ___ (1) and I think if we ___ (2) more, we'll help the planet.", [
      mc("(1)", ["friendly", "boringly"], 0, "friendly."),
      mc("(2)", ["recycle", "waste"], 0, "recycle."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Simulacro combinado", "Combina todo lo aprendido en el curso.", "Habla 1-2 minutos sobre tu personalidad, tus planes, tu ciudad y el medio ambiente.", "combinar las 4 destrezas", "I'm friendly, I'm going to, If we recycle"),
    SUMMARY("Resumen del Día 59", ["¡Último repaso completado! Estás listo/a para tu gran simulacro final."]),
    INFO("Tarea para el Día 60", "¡Mañana es el gran día! Simulacro final de A2 Flyers."),
  ],
};

const DAY60 = {
  title: "Día 60 — ¡Lo lograste! 🏁 · Final simulacro + guía para padres",
  description: "Cierre del curso, guía para padres, y disparador del simulacro final.",
  pedagogy: { objective: "Cerrar el curso y preparar el simulacro final.", summary: "Cierre; guía para padres; simulacro final del curso y de todo el ciclo YLE.", reviewPrompts: ["¿Qué es lo que más te ha gustado aprender en todo el ciclo Young Learners?"] },
  items: [
    TEXT("🏁 ¡Felicidades! Has completado las 12 semanas de A2 Flyers — ¡y todo el ciclo Cambridge Young Learners! Hoy es tu gran simulacro final."),
    GRAMMAR("Lo que has aprendido", "Personalidad, going to/will. Presente perfecto, viajes. La ciudad, superlativos, must/mustn't. Comida, cuerpo, medio ambiente. TV, pasado continuo. Escritura guiada y libre."),
    INFO("Guía para padres y familias 👨‍👩‍👧", "Tu hijo/a ha completado 60 días de inglés nivel A2 Flyers, el último escalón de Cambridge Young Learners, practicando las 4 destrezas con el formato real del examen. En el examen Flyers real no hay aprobado/suspenso — se otorgan 'shields' (escudos) de 1 a 5 por destreza. Al terminar este nivel, tu hijo/a estará preparado/a para dar el salto al siguiente ciclo de exámenes Cambridge (A2 Key / B1 Preliminary), ya con una base sólida. Anímale a seguir practicando inglés con libros, series y conversación real."),
    deck("Flyers S12D60 — Repaso de despedida", [
      ["congratulations", "felicidades", "Congratulations on finishing!", "phrase"],
      ["progress", "progreso", "Look at your progress!", "word"],
      ["shield", "escudo (premio Cambridge)", "You get shields in the real exam.", "word"],
      ["proud", "orgulloso/a", "I'm so proud of you!", "adjective"],
      ["achievement", "logro", "This is a big achievement!", "word"],
    ]),
    vocabEx("Repaso de despedida 🏁", "Elige la opción correcta.", [
      mc("'Congratulations' significa:", ["felicidades", "adiós"], 0, "felicidades."),
      mc("En el examen Flyers real, consigues... (premio)", ["shields", "points"], 0, "shields."),
      mc("'Achievement' significa:", ["logro", "error"], 0, "logro."),
    ]),
    LISTENING_HEAD,
    listenMatch("Último Listening del curso", [
      mc("🎧 'Congratulations! You've finished the whole Young Learners cycle. This is a big achievement!' ¿Qué ha terminado?", ["the whole Young Learners cycle", "just one week"], 0, "'finished the whole Young Learners cycle'."),
    ]),
    listening(1, "Listening · Mensaje final", "Escucha el mensaje de despedida.", "Listen. Congratulations! You've finished the whole Young Learners cycle. This is a big achievement!", []),
    READING_HEAD,
    readDefine("Completa las palabras de despedida", [
      mc("Algo que logras con esfuerzo: ___", ["achievement", "progress"], 0, "achievement."),
      mc("Sentimiento de alguien que te quiere y está feliz por ti: ___", ["proud", "congratulations"], 0, "proud."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi despedida", "Habla sobre todo lo que has aprendido en el ciclo Young Learners.", "Cuenta lo que más te ha gustado aprender en estos tres niveles (Pre-A1, Movers, Flyers).", "reflexionar sobre el ciclo completo", "I learned about, My favourite part was, Now I can"),
    SUMMARY("Resumen del Día 60 — ¡Curso y ciclo YLE completados! 🏁", ["Has completado las 12 semanas de A2 Flyers y todo el ciclo Cambridge Young Learners.", "Ahora, tu gran simulacro final combinando todo el curso. ¡Cuenta tus aciertos — no hay suspenso! 🌟", "¡Enhorabuena, future Cambridge star! Ya estás listo/a para el siguiente reto. 🎉"]),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "Recta final · Ready for your exam · Simulacro final",
  description: "Duodécima y última semana de A2 Flyers: día de Listening, día de Reading & Writing, día de Speaking, práctica combinada, y cierre del curso (y de todo el ciclo Young Learners) con guía para padres y el simulacro final.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
