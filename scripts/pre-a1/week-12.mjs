/**
 * Pre-A1 Starters · Semana 12 — "¡La recta final! 🏁 (última semana)".
 * Práctica de cada prueba del examen real (Listening, Reading & Writing,
 * Speaking), una prueba completa combinada, y el último día con la guía
 * para el día del examen y el cierre del curso.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 56 ─────────────────────────
const DAY56 = {
  title: "Día 56 — Practicamos el Listening completo 🎧",
  description: "Práctica de las 4 partes del Listening, como en el examen real.",
  pedagogy: {
    objective: "Practicar las 4 partes del Listening seguidas, como en el examen.",
    summary: "Listening completo (4 partes); Reading & Writing de repaso, Speaking.",
    reviewPrompts: ["¿Qué parte del Listening te resulta más fácil?"],
  },
  items: [
    TEXT("🎧 ¡Última semana! Hoy practicamos el LISTENING completo, las 4 partes seguidas, como en el examen real."),
    GRAMMAR("Consejos para el Listening", "· Escucha con calma, cada audio se oye DOS veces.\n· Mira bien el dibujo antes de escuchar.\n· Si no entiendes una palabra, sigue escuchando — no te preocupes.\n· ¡No hay que acertar todo! Cuenta tus aciertos como estrellas."),
    deck("Pre-A1 S12D56 — Repaso para el Listening", [
      ["listen", "escuchar", "Listen carefully! 👂", "verb"],
      ["again", "otra vez", "Listen again.", "word"],
      ["picture", "dibujo", "Look at the picture.", "word"],
      ["match", "unir/emparejar", "Match the words.", "verb"],
      ["colour", "colorear", "Colour the picture.", "verb"],
      ["tick", "marcar", "Tick the box.", "verb"],
      ["write", "escribir", "Write the word.", "verb"],
      ["number", "número", "Write the number.", "word"],
      ["carefully", "con cuidado", "Listen carefully.", "adverb"],
      ["ready", "preparado/a", "Are you ready?", "adjective"],
    ]),
    vocabEx("Palabras del examen 🎧", "Elige la palabra correcta.", [
      mc("👂 ___ carefully!", ["Listen", "Write", "Colour"], 0, "Listen."),
      mc("🖍️ ___ the picture.", ["Colour", "Listen", "Match"], 0, "Colour."),
      mc("✏️ ___ the word.", ["Write", "Colour", "Tick"], 0, "Write."),
      mc("✔️ ___ the box.", ["Tick", "Write", "Listen"], 0, "Tick."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha — repaso combinado", [
      mc("🎧 'This is my family. My mum is wearing a red dress.' ¿De qué color es el vestido?", ["red", "blue"], 0, "'a red dress'."),
      mc("🎧 'I've got a small cat and a big dog.' ¿Cuál es grande?", ["cat", "dog"], 1, "'a big dog'."),
      mc("🎧 'It's Monday. I'm going to school.' ¿Qué día es?", ["Monday", "Sunday"], 0, "'Monday'."),
      mc("🎧 'I'm happy because it's my birthday!' ¿Por qué está feliz?", ["birthday", "school"], 0, "'birthday'."),
      mc("🎧 'It's sunny. I can play in the park.' ¿Qué tiempo hace?", ["sunny", "rainy"], 0, "'sunny'."),
    ]),
    listening(1, "Listening · Práctica combinada", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. This is my family. My mum is wearing a red dress. I've got a small cat and a big dog. It's Monday. I'm going to school. I'm happy because it's my birthday! It's sunny. I can play in the park.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No — repaso", [
      mc("👂 = 'listen'. ¿Está bien?", ["Sí", "No"], 0, "Sí."),
      mc("🖍️ = 'write'. ¿Está bien?", ["Sí", "No"], 1, "No, 🖍️ es colour."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Practica hablar sobre el Listening", "Cuenta a un adulto qué escuchaste hoy, usando tus propias palabras.", "Cuenta lo que escuchaste hoy en 2-3 frases.", "practicar comprensión oral", "This is my family, I've got a dog, It's sunny"),

    SUMMARY("Resumen del Día 56", [
      "Practicaste el Listening completo con las 4 partes reales.",
      "Recuerda: ¡no hay que acertar todo! Cuenta tus estrellas.",
    ]),
    INFO("Tarea para el Día 57", "Descansa bien. Mañana: practicamos el Reading & Writing completo."),
  ],
};

// ───────────────────────── DÍA 57 ─────────────────────────
const DAY57 = {
  title: "Día 57 — Practicamos el Reading & Writing completo 📖",
  description: "Práctica de las 4 partes del Reading & Writing, como en el examen real.",
  pedagogy: {
    objective: "Practicar las 4 partes del Reading & Writing seguidas.",
    summary: "Reading & Writing completo (4 partes); Listening de repaso, Speaking.",
    reviewPrompts: ["¿Qué parte del Reading & Writing te resulta más fácil?"],
  },
  items: [
    TEXT("📖 Hoy practicamos el READING & WRITING completo, las 4 partes seguidas."),
    GRAMMAR("Consejos para el Reading & Writing", "· Mira bien el dibujo antes de leer.\n· Lee la frase con calma.\n· Si no sabes una palabra, sigue con la siguiente.\n· Comprueba que has escrito bien las letras."),
    deck("Pre-A1 S12D57 — Repaso para el Reading & Writing", [
      ["look", "mirar", "Look and read.", "verb"],
      ["read", "leer", "Read the sentence.", "verb"],
      ["yes", "sí", "Yes, that's right!", "word"],
      ["no", "no", "No, that's wrong.", "word"],
      ["answer", "respuesta", "Write your answer.", "word"],
      ["choose", "elegir", "Choose the word.", "verb"],
      ["complete", "completar", "Complete the word.", "verb"],
      ["letters", "letras", "Write the missing letters.", "word"],
      ["question", "pregunta", "Read the question.", "word"],
      ["correct", "correcto", "That's correct! ✔️", "adjective"],
    ]),
    vocabEx("Palabras del examen 📖", "Elige la palabra correcta.", [
      mc("👀 ___ and read.", ["Look", "Write", "Choose"], 0, "Look."),
      mc("✔️ = ___", ["correct", "wrong"], 0, "correct."),
      mc("___ the word. (elegir)", ["Choose", "Look", "Read"], 0, "Choose."),
      mc("___ the missing letters. (completar)", ["Complete", "Choose", "Look"], 0, "Complete."),
    ]),

    READING_HEAD,
    readWrite("Práctica de Reading & Writing — repaso combinado", [
      fb("h_ppy (feliz)", ["happy"], "happy."),
      fb("f_m_ly (familia)", ["family"], "family."),
      fb("_ppl_ (manzana)", ["apple"], "apple."),
      fb("s_nny (soleado)", ["sunny"], "sunny."),
      fb("b_rthd_y (cumpleaños)", ["birthday"], "birthday."),
    ]),
    readChoose("Elige la palabra correcta — repaso", [
      mc("🍎 = ___", ["apple", "banana"], 0, "apple."),
      mc("😊 = ___", ["happy", "sad"], 0, "happy."),
      mc("☀️ = ___", ["sunny", "rainy"], 0, "sunny."),
      mc("🎂 = ___", ["cake", "present"], 0, "cake."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe — repaso", [
      fb("🎧 'I'm happy today.' Escribe: ___", ["happy"], "happy."),
      fb("🎧 'It's sunny outside.' Escribe: ___", ["sunny"], "sunny."),
      fb("🎧 'I want an apple.' Escribe: ___", ["apple"], "apple."),
    ]),
    listening(4, "Listening · Repaso final", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I'm happy today. It's sunny outside. I want an apple.", []),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Practica leer en voz alta", "Lee en voz alta 5 palabras que has aprendido este curso.", "Lee 5 palabras en voz alta con buena pronunciación.", "practicar la lectura en voz alta", "happy, family, apple, sunny, birthday"),

    SUMMARY("Resumen del Día 57", [
      "Practicaste el Reading & Writing completo con las 4 partes reales.",
      "¡Muy bien leyendo y escribiendo en inglés!",
    ]),
    INFO("Tarea para el Día 58", "Descansa bien. Mañana: practicamos el Speaking."),
  ],
};

// ───────────────────────── DÍA 58 ─────────────────────────
const DAY58 = {
  title: "Día 58 — Practicamos el Speaking 🗣️",
  description: "Práctica del Speaking: presentarte, describir dibujos, responder preguntas personales.",
  pedagogy: {
    objective: "Practicar hablar con confianza, como en el examen.",
    summary: "Speaking completo; Listening y Reading & Writing de repaso.",
    reviewPrompts: ["¿Te sientes nervioso/a hablando en inglés? ¡No pasa nada!"],
  },
  items: [
    TEXT("🗣️ Hoy practicamos el SPEAKING — ¡hablar con el examinador!"),
    GRAMMAR("Consejos para el Speaking", "· El examinador es muy amable — ¡no tengas miedo!\n· Si no entiendes, puedes decir: 'Can you repeat, please?'\n· Habla con frases completas: 'It's a cat', no solo 'cat'.\n· Sonríe y disfruta hablando inglés. 😊"),
    deck("Pre-A1 S12D58 — Repaso para el Speaking", [
      ["can you repeat", "puedes repetir", "Can you repeat, please?", "phrase"],
      ["please", "por favor", "Can you repeat, please?", "word"],
      ["I don't know", "no lo sé", "I don't know.", "phrase"],
      ["examiner", "examinador/a", "The examiner is nice.", "word"],
      ["smile", "sonreír", "Smile! 😊", "verb"],
      ["different", "diferente", "Find the differences.", "adjective"],
      ["same", "igual/mismo", "It's the same.", "adjective"],
      ["describe", "describir", "Describe the picture.", "verb"],
      ["question", "pregunta", "Answer the question.", "word"],
      ["nice", "agradable/simpático", "The examiner is nice.", "adjective"],
    ]),
    vocabEx("Frases útiles para el Speaking 🗣️", "Elige la frase correcta.", [
      mc("Si no entiendes, dices: 'Can you ___, please?'", ["repeat", "smile", "describe"], 0, "'Can you repeat, please?'"),
      mc("Si no sabes la respuesta, dices: 'I don't ___.'", ["know", "smile", "same"], 0, "'I don't know.'"),
      mc("El examinador es muy ___.", ["nice", "different"], 0, "nice."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha — práctica de examen", [
      mc("🎧 'Can you repeat, please?' ¿Qué está pidiendo?", ["que repitan", "que canten"], 0, "'repeat' → repetir."),
      mc("🎧 'The examiner is very nice.' ¿Cómo es el examinador?", ["nice", "scary"], 0, "'nice'."),
    ]),
    listening(3, "Listening · Frases del examen", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. Can you repeat, please? The examiner is very nice.", []),

    READING_HEAD,
    readAnswer("Practica preguntas típicas del Speaking", [
      fb("What's your name? My name's ___. (tu nombre)", ["nombre"], "Responde con tu propio nombre."),
      fb("How old are you? I'm ___ years old. (tu edad)", ["edad"], "Responde con tu propia edad."),
      fb("What's your favourite colour? It's ___. (tu color favorito)", ["color"], "Responde con tu color favorito."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Simulacro de entrevista", "Practica un mini-examen de Speaking: preséntate, describe una foto, y responde preguntas personales.", "Responde: nombre, edad, color favorito, animal favorito, y describe algo que ves ahora mismo.", "practicar una entrevista de Speaking completa", "Hello, my name's..., I'm... years old, My favourite colour is..., I can see..."),

    SUMMARY("Resumen del Día 58", [
      "Practicaste el Speaking: presentarte, frases útiles, y preguntas personales.",
      "Recuerda: puedes decir 'Can you repeat, please?' si no entiendes.",
    ]),
    INFO("Tarea para el Día 59", "Practica hablar en voz alta. Mañana: ¡una prueba completa combinando todo!"),
  ],
};

// ───────────────────────── DÍA 59 ─────────────────────────
const DAY59 = {
  title: "Día 59 — Prueba completa combinada 🌟🌟🌟",
  description: "Una prueba completa combinando Listening, Reading & Writing y Speaking, como el examen real.",
  pedagogy: {
    objective: "Completar una prueba combinada de las 3 destrezas, como práctica final.",
    summary: "Prueba combinada completa; Listening, Reading & Writing, Speaking.",
    reviewPrompts: ["¿Cómo te sientes antes del último día?"],
  },
  items: [
    TEXT("🌟🌟🌟 ¡Penúltimo día! Hoy: una prueba COMPLETA combinando todo, como el examen de verdad."),
    GRAMMAR("Antes de empezar", "Hoy vas a hacer Listening, Reading & Writing y Speaking seguidos, ¡como en el examen real! Tómate tu tiempo y recuerda: no hay aprobado ni suspenso, ¡solo cuenta tus estrellas! 🌟"),
    deck("Pre-A1 S12D59 — Repaso final combinado", [
      ["happy", "feliz", "I'm happy.", "feeling"],
      ["family", "familia", "My family.", "family"],
      ["cat", "gato", "I like cats.", "animal"],
      ["apple", "manzana", "I want an apple.", "food"],
      ["T-shirt", "camiseta", "I'm wearing a T-shirt.", "clothes"],
      ["school", "cole", "My school.", "place"],
      ["sunny", "soleado", "It's sunny.", "weather"],
      ["can", "poder/saber", "I can swim.", "word"],
      ["birthday", "cumpleaños", "Happy Birthday!", "word"],
      ["park", "parque", "It's a park.", "place"],
    ]),
    vocabEx("Repaso final combinado 🌟", "Elige la opción correcta.", [
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
      mc("🐱 I like ___.", ["cats", "dogs"], 0, "cats."),
      mc("🍎 I want an ___.", ["apple", "banana"], 0, "apple."),
      mc("👕 I'm ___ a T-shirt.", ["wearing", "can"], 0, "wearing."),
      mc("☀️ It's ___.", ["sunny", "rainy"], 0, "sunny."),
      mc("🏊 I ___ swim.", ["can", "am"], 0, "can."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha — prueba combinada", [
      mc("🎧 'This is my family. I'm happy today.' ¿Cómo se siente?", ["happy", "sad"], 0, "'happy'."),
      mc("🎧 'I'm wearing a blue T-shirt. I like cats.' ¿De qué color es la camiseta?", ["blue", "red"], 0, "'a blue T-shirt'."),
      mc("🎧 'It's sunny. I can play football at the park.' ¿Qué tiempo hace?", ["sunny", "rainy"], 0, "'sunny'."),
      mc("🎧 'It's my birthday! I've got a cake.' ¿Qué celebra?", ["birthday", "school day"], 0, "'birthday'."),
    ]),
    listening(1, "Listening · Prueba combinada", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. This is my family. I'm happy today. I'm wearing a blue T-shirt. I like cats. It's sunny. I can play football at the park. It's my birthday! I've got a cake.", []),

    READING_HEAD,
    readWrite("Reading & Writing — prueba combinada", [
      fb("h_ppy (feliz)", ["happy"], "happy."),
      fb("c_t (gato)", ["cat"], "cat."),
      fb("s_nny (soleado)", ["sunny"], "sunny."),
      fb("b_rthd_y (cumpleaños)", ["birthday"], "birthday."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Prueba combinada final", "Habla 2-3 minutos combinando presentación, familia, animales, ropa, tiempo y sentimientos.", "Completa una mini-entrevista combinando todo lo aprendido.", "practicar una prueba de Speaking completa", "Hello, my name's..., This is my family, I like cats, It's sunny, I'm happy"),

    SUMMARY("Resumen del Día 59", [
      "¡Completaste una prueba combinada completa, como el examen real!",
      "Mañana: ¡el último día del curso!",
    ]),
    INFO("Tarea para el Día 60", "Descansa bien. Mañana: ¡el último día — la gran fiesta final! 🎉"),
  ],
};

// ───────────────────────── DÍA 60 ─────────────────────────
const DAY60 = {
  title: "Día 60 — ¡Último día! Guía para el examen + fiesta final 🎉",
  description: "Guía para familias sobre el día del examen Starters, cierre del curso, y el disparador de la PRUEBA FINAL.",
  pedagogy: {
    objective: "Cerrar el curso con confianza y prepararse para el examen real.",
    summary: "Guía del examen para familias; cierre del curso; Listening, Reading & Writing, Speaking de despedida; PRUEBA FINAL.",
    reviewPrompts: ["¿Qué es lo que más te ha gustado aprender en estos 60 días?"],
  },
  items: [
    TEXT("🎉 ¡DÍA 60! ¡Has terminado el curso completo de Pre-A1 Starters! Hoy: la guía para el examen y la gran fiesta final. Al final, la PRUEBA FINAL que reúne todo lo aprendido. ¡Enhorabuena, campeón/campeona! 🏆"),
    GRAMMAR("Guía para familias — el día del examen Starters", `QUÉ LLEVAR: nada especial — solo muchas ganas de hablar inglés. Un adulto puede acompañar hasta la puerta de la sala.
CÓMO ES EL EXAMEN: Listening (~20 min), Reading & Writing (~25 min), y Speaking (~5 min, con un examinador muy amable, normalmente en pareja con otro niño/a).
CONSEJOS PARA FAMILIAS:
· Recuerda a tu hijo/a: ¡no hay aprobado ni suspenso! Solo se cuentan los aciertos con escudos (shields).
· Un examen relajado y divertido ayuda mucho más que la presión.
· Celebra el esfuerzo, no solo el resultado.
· Practicar un poco cada día, como en este curso, es la mejor preparación.`),
    GRAMMAR("Vocabulario final — repaso de todo el curso", "Repasa: colores, números, familia, casa, animales, cuerpo, comida, juguetes, ropa, tiempo, can, cole, pueblo, rutina, sentimientos, meses, estaciones y naturaleza."),
    deck("Pre-A1 S12D60 — Repaso de despedida", [
      ["finish", "terminar", "I finished the course! 🎉", "verb"],
      ["proud", "orgulloso/a", "I'm proud of you! 🏆", "adjective"],
      ["star", "estrella", "You're a star! ⭐", "word"],
      ["well done", "¡muy bien!", "Well done! 👏", "phrase"],
      ["great", "genial", "Great job! 👍", "adjective"],
      ["ready", "preparado/a", "I'm ready for the exam!", "adjective"],
      ["confident", "con confianza", "I feel confident. 💪", "adjective"],
      ["congratulations", "felicidades", "Congratulations! 🎉", "phrase"],
      ["learn", "aprender", "I learned so much!", "verb"],
      ["celebrate", "celebrar", "Let's celebrate! 🎊", "verb"],
    ]),
    vocabEx("Repaso de despedida 🎉", "Elige la opción correcta.", [
      mc("¡Terminaste el curso! You ___ the course.", ["finished", "started"], 0, "finished."),
      mc("¡Estoy orgulloso/a de ti! I'm ___ of you.", ["proud", "sad"], 0, "proud."),
      mc("⭐ You're a ___!", ["star", "cloud"], 0, "star."),
      mc("¡Felicidades! ___!", ["Congratulations", "Goodbye"], 0, "Congratulations."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha — mensaje final", [
      mc("🎧 'Congratulations! You finished the course. You're a star!' ¿Qué le dicen?", ["felicidades", "adiós"], 0, "'Congratulations!'"),
      mc("🎧 'I'm proud of you. Well done!' ¿Cómo se siente el hablante?", ["orgulloso/a", "enfadado/a"], 0, "'proud'."),
      mc("🎧 'I feel confident and ready for the exam.' ¿Cómo se siente?", ["confident", "scared"], 0, "'confident'."),
    ]),
    listening(1, "Listening · Mensaje final de despedida", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. Congratulations! You finished the course. You're a star! I'm proud of you. Well done! I feel confident and ready for the exam.", []),

    READING_HEAD,
    readWrite("Completa las palabras — despedida", [
      fb("pr__d (orgulloso)", ["proud"], "proud."),
      fb("st_r (estrella)", ["star"], "star."),
      fb("r__dy (preparado)", ["ready"], "ready."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¡Habla de tu progreso!", "Cuenta lo que has aprendido en estos 60 días y cómo te sientes.", "Habla 1-2 minutos sobre lo que aprendiste y cómo te sientes.", "reflexionar sobre el propio progreso", "I learned a lot, I can speak English, I feel happy and confident"),

    SUMMARY("Resumen final del curso Pre-A1 Starters (60 días)", [
      "¡ENHORABUENA! Has completado los 60 días del curso Pre-A1 Starters. 🎉🏆",
      "Aprendiste: colores, números, la familia, la casa, animales, tu cuerpo, comida, juguetes, ropa, el tiempo, 'can', el cole, el pueblo, tu rutina diaria, sentimientos, meses, estaciones y naturaleza.",
      "Practicaste las 3 destrezas del examen Starters (Listening, Reading & Writing, Speaking) TODOS los días con el formato real.",
      "Ahora, la PRUEBA FINAL — la más grande de todas. ¡No hay aprobado ni suspenso, solo estrellas! 🌟🌟🌟",
    ]),
    INFO("🎉 PRUEBA FINAL", "En el módulo siguiente tienes la PRUEBA FINAL del curso, reuniendo lo mejor de estos 60 días. ¡Muchísima suerte en tu examen real de Starters! Estamos muy orgullosos de ti. 🏆"),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "¡La recta final! · Práctica del examen completo",
  description: "Última semana del curso Pre-A1 Starters: práctica completa del Listening (Día 56), el Reading & Writing (Día 57), el Speaking (Día 58), una prueba combinada de las 3 destrezas (Día 59), y el Día 60 cierra con la guía del examen para familias, el repaso de despedida, y dispara la PRUEBA FINAL del curso.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
