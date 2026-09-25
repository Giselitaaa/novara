/**
 * Pre-A1 Starters · Semana 11 — "El repaso más grande 🎊 (todo el curso)".
 * Repaso final combinando TODO el vocabulario y estructuras del curso
 * completo antes de la recta final.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 51 ─────────────────────────
const DAY51 = {
  title: "Día 51 — Repaso: yo y mi familia 👨‍👩‍👧‍👦",
  description: "Repaso de presentarte, tu familia y tu cuerpo.",
  pedagogy: {
    objective: "Repasar cómo presentarte y hablar de tu familia y cuerpo.",
    summary: "Repaso de presentación, familia y cuerpo; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Puedes presentarte completamente en inglés?"],
  },
  items: [
    TEXT("👨‍👩‍👧‍👦 Última semana antes de la recta final. Hoy: yo, mi familia y mi cuerpo."),
    GRAMMAR("Repaso: presentarte", "Hello! My name's... I'm... years old.\nThis is my mum/dad/sister/brother.\nI've got two eyes, a nose..."),
    deck("Pre-A1 S11D51 — Yo y mi familia", [
      ["name", "nombre", "My name's Ana.", "word"],
      ["old", "años (edad)", "I'm seven years old.", "word"],
      ["mum", "mamá", "This is my mum.", "family"],
      ["brother", "hermano", "This is my brother.", "family"],
      ["eyes", "ojos", "I've got two eyes.", "body"],
      ["hair", "pelo", "I've got brown hair.", "body"],
      ["got", "tengo", "I've got two legs.", "word"],
      ["family", "familia", "This is my family.", "family"],
      ["this", "este/esta", "This is my mum.", "word"],
      ["my", "mi/mis", "My name's Ana.", "word"],
    ]),
    vocabEx("Repaso: yo y mi familia 👨‍👩‍👧‍👦", "Elige la opción correcta.", [
      mc("What's your name? My ___'s Ana.", ["name", "old"], 0, "name."),
      mc("👩 This is my ___.", ["mum", "brother"], 0, "mum."),
      mc("👀 I've ___ two eyes.", ["got", "want"], 0, "got."),
      mc("I'm seven years ___.", ["old", "name"], 0, "old."),
      mc("💇 I've got brown ___.", ["hair", "eyes"], 0, "hair."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'My name's Tom. This is my mum.' ¿Cómo se llama?", ["Tom", "Ana"], 0, "'My name's Tom'."),
      mc("🎧 'I'm seven years old. I've got two eyes and brown hair.' ¿Cuántos años tiene?", ["seven", "eight"], 0, "'seven'."),
      mc("🎧 'This is my family: my mum, my dad, and my brother.' ¿Cuántas personas hay?", ["three", "four"], 1, "mum, dad, brother = 3 + él = 4."),
    ]),
    listening(1, "Listening · Repaso — Yo y mi familia", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. My name's Tom. This is my mum. I'm seven years old. I've got two eyes and brown hair. This is my family: my mum, my dad, and my brother.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("'My name's Ana' significa 'Me llamo Ana'. ¿Está bien?", ["Sí", "No"], 0, "Sí."),
      mc("👀 = 'nose'. ¿Está bien?", ["Sí", "No"], 1, "No, 👀 es eyes."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Preséntate completamente", "Preséntate: nombre, edad, familia y cuerpo.", "Habla 1-2 minutos presentándote completamente.", "presentarse completamente", "My name's..., I'm... years old, This is my mum, I've got two eyes"),

    SUMMARY("Resumen del Día 51", ["Repasamos presentarte, tu familia y tu cuerpo."]),
    INFO("Tarea para el Día 52", "Repasa presentarte. Mañana: animales, comida y ropa."),
  ],
};

// ───────────────────────── DÍA 52 ─────────────────────────
const DAY52 = {
  title: "Día 52 — Repaso: animales, comida y ropa 🐾",
  description: "Repaso de animales, comida y ropa.",
  pedagogy: {
    objective: "Repasar animales, comida y ropa.",
    summary: "Repaso de animales, comida y ropa; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Cuál es tu animal, comida y prenda de ropa favoritos?"],
  },
  items: [
    TEXT("🐾 Hoy repasamos: animales, comida y ropa."),
    GRAMMAR("Repaso: animales, comida, ropa", "I like cats. I don't like spiders.\nI'm hungry. I want an apple.\nI'm wearing a T-shirt and blue shoes."),
    deck("Pre-A1 S11D52 — Animales, comida, ropa", [
      ["cat", "gato", "I like cats.", "animal"],
      ["dog", "perro", "I like dogs.", "animal"],
      ["apple", "manzana", "I want an apple.", "food"],
      ["milk", "leche", "I want milk.", "food"],
      ["T-shirt", "camiseta", "I'm wearing a T-shirt.", "clothes"],
      ["shoes", "zapatos", "My blue shoes.", "clothes"],
      ["like", "gustar", "I like dogs.", "word"],
      ["want", "querer", "I want milk.", "word"],
      ["hungry", "hambriento/a", "I'm hungry.", "adjective"],
      ["wearing", "llevando puesto", "I'm wearing a hat.", "word"],
    ]),
    vocabEx("Repaso: animales, comida, ropa 🐾", "Elige la opción correcta.", [
      mc("🐱 I ___ cats.", ["like", "want"], 0, "like."),
      mc("🍎 I ___ an apple.", ["want", "like"], 0, "want."),
      mc("I'm ___. I want food.", ["hungry", "happy"], 0, "hungry."),
      mc("👕 I'm ___ a T-shirt.", ["wearing", "want"], 0, "wearing."),
      mc("🕷️ I don't ___ spiders.", ["like", "want"], 0, "like."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha y repasa", [
      mc("🎧 'I like cats. I don't like spiders.' ¿Qué NO le gusta?", ["cats", "spiders"], 1, "'don't like spiders'."),
      mc("🎧 'I'm hungry. I want an apple.' ¿Qué quiere?", ["apple", "milk"], 0, "'an apple'."),
      mc("🎧 'I'm wearing my blue shoes and a red T-shirt.' ¿De qué color es la camiseta?", ["blue", "red"], 1, "'a red T-shirt'."),
    ]),
    listening(2, "Listening · Repaso — Animales, comida, ropa", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I like cats. I don't like spiders. I'm hungry. I want an apple. I'm wearing my blue shoes and a red T-shirt.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("🐱 What do you like? Cats and ___.", ["dogs"], "dogs (o similar, acepta contexto)."),
      fb("🍎 What do you want? An ___.", ["apple"], "apple."),
      fb("👕 What are you wearing? A ___.", ["T-shirt"], "T-shirt."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso animales, comida, ropa", "Combina animales, comida y ropa en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar animales, comida, ropa", "I like cats, I want an apple, I'm wearing a T-shirt"),

    SUMMARY("Resumen del Día 52", ["Repasamos animales, comida y ropa."]),
    INFO("Tarea para el Día 53", "Repasa el vocabulario de hoy. Mañana: el cole y el pueblo."),
  ],
};

// ───────────────────────── DÍA 53 ─────────────────────────
const DAY53 = {
  title: "Día 53 — Repaso: el cole y el pueblo 🏫",
  description: "Repaso del material escolar, preposiciones, números, días, pueblo y deportes.",
  pedagogy: {
    objective: "Repasar el cole y el pueblo.",
    summary: "Repaso de cole y pueblo; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes contar hasta 20 y decir los días de la semana?"],
  },
  items: [
    TEXT("🏫 Hoy repasamos: el cole, in/on/under, números, días y el pueblo."),
    GRAMMAR("Repaso: cole y pueblo", "It's a pencil. It's in the bag.\nTwenty. It's Monday.\nIt's a park. I play football."),
    deck("Pre-A1 S11D53 — Cole y pueblo", [
      ["pencil", "lápiz", "It's a pencil.", "school"],
      ["in", "dentro de", "It's in the bag.", "preposition"],
      ["twenty", "veinte", "Twenty children.", "number"],
      ["Monday", "lunes", "It's Monday.", "day"],
      ["park", "parque", "It's a park.", "place"],
      ["football", "fútbol", "I play football.", "sport"],
      ["under", "debajo de", "It's under the bed.", "preposition"],
      ["where", "dónde", "Where is it?", "word"],
      ["school", "cole", "It's my school.", "place"],
      ["play", "jugar", "I play tennis.", "verb"],
    ]),
    vocabEx("Repaso: cole y pueblo 🏫", "Elige la opción correcta.", [
      mc("✏️ It's a ___.", ["pencil", "book"], 0, "pencil."),
      mc("🎒 It's ___ the bag.", ["in", "on"], 0, "in."),
      mc("20 = ___", ["twenty", "twelve"], 0, "twenty."),
      mc("Primer día de cole: ___", ["Monday", "Sunday"], 0, "Monday."),
      mc("🌳 It's a ___.", ["park", "shop"], 0, "park."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y repasa", [
      mc("🎧 'It's Monday. My pencil is in my bag.' ¿Qué día es?", ["Monday", "Friday"], 0, "'Monday'."),
      mc("🎧 'Twenty children play football at the park.' ¿Cuántos niños hay?", ["twelve", "twenty"], 1, "'twenty'."),
      mc("🎧 'My book is under the table.' ¿Dónde está?", ["under", "on"], 0, "'under'."),
    ]),
    listening(3, "Listening · Repaso — Cole y pueblo", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. It's Monday. My pencil is in my bag. Twenty children play football at the park. My book is under the table.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("✏️ = ___", ["pencil", "book"], 0, "pencil."),
      mc("Where's the pencil? It's ___ the bag.", ["in", "at"], 0, "in."),
      mc("⚽ I play ___.", ["football", "book"], 0, "football."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso cole y pueblo", "Combina el cole, preposiciones, números, días y el pueblo.", "Di 4 frases combinando lo repasado.", "combinar cole y pueblo", "It's a pencil, It's in my bag, It's Monday, I play football at the park"),

    SUMMARY("Resumen del Día 53", ["Repasamos el cole, preposiciones, números, días y el pueblo."]),
    INFO("Tarea para el Día 54", "Repasa el vocabulario de hoy. Mañana: rutina, sentimientos y naturaleza."),
  ],
};

// ───────────────────────── DÍA 54 ─────────────────────────
const DAY54 = {
  title: "Día 54 — Repaso: rutina, sentimientos y naturaleza 🌅",
  description: "Repaso de rutina diaria, sentimientos, tiempo, estaciones y naturaleza.",
  pedagogy: {
    objective: "Repasar rutina, sentimientos y naturaleza.",
    summary: "Repaso de rutina, sentimientos y naturaleza; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Puedes contar tu día y decir cómo te sientes?"],
  },
  items: [
    TEXT("🌅 Hoy repasamos: rutina, sentimientos, tiempo y naturaleza."),
    GRAMMAR("Repaso: rutina, sentimientos, naturaleza", "I get up. I eat breakfast. I go to bed.\nI'm happy. It's sunny. I can see the sun."),
    deck("Pre-A1 S11D54 — Rutina, sentimientos, naturaleza", [
      ["get up", "levantarse", "I get up at seven.", "verb"],
      ["breakfast", "desayuno", "I eat breakfast.", "meal"],
      ["happy", "feliz", "I'm happy.", "feeling"],
      ["sunny", "soleado", "It's sunny.", "weather"],
      ["sun", "sol", "I can see the sun.", "nature"],
      ["tree", "árbol", "A big tree.", "nature"],
      ["can", "poder/saber", "I can swim.", "word"],
      ["how", "cómo", "How are you?", "word"],
      ["summer", "verano", "It's summer.", "season"],
      ["go to bed", "irse a la cama", "I go to bed.", "phrase"],
    ]),
    vocabEx("Repaso: rutina, sentimientos, naturaleza 🌅", "Elige la opción correcta.", [
      mc("⏰ I ___ at seven.", ["get up", "eat"], 0, "get up."),
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
      mc("☀️ It's ___.", ["sunny", "rainy"], 0, "sunny."),
      mc("🌳 It's a ___.", ["tree", "sun"], 0, "tree."),
      mc("🏊 I ___ swim.", ["can", "am"], 0, "can."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y repasa", [
      fb("🎧 'I get up, eat breakfast, and go to school.' Escribe: get ___", ["up"], "up."),
      fb("🎧 'I'm happy. It's sunny today!' Escribe cómo se siente: ___", ["happy"], "happy."),
      fb("🎧 'I can see the sun and the trees.' Escribe: ___", ["sun"], "sun."),
    ]),
    listening(4, "Listening · Repaso — Rutina, sentimientos, naturaleza", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I get up, eat breakfast, and go to school. I'm happy. It's sunny today! I can see the sun and the trees.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("g_t _p (levantarse)", ["get up"], "get up."),
      fb("h_ppy (feliz)", ["happy"], "happy."),
      fb("s_nny (soleado)", ["sunny"], "sunny."),
      fb("s_n (sol)", ["sun"], "sun."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso rutina, sentimientos, naturaleza", "Combina la rutina, sentimientos, tiempo y naturaleza en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar rutina, sentimientos, naturaleza", "I get up, I'm happy, It's sunny, I can see the sun"),

    SUMMARY("Resumen del Día 54", ["Repasamos rutina, sentimientos, tiempo y naturaleza."]),
    INFO("Tarea para el Día 55", "Repasa TODO el curso. Mañana: ¡el repaso más grande de todos, con la undécima prueba!"),
  ],
};

// ───────────────────────── DÍA 55 ─────────────────────────
const DAY55 = {
  title: "Día 55 — ¡El repaso más grande! + undécima prueba 🎊",
  description: "El repaso más grande de todo el curso, combinando absolutamente todo. Undécima prueba de la semana.",
  pedagogy: {
    objective: "Repasar y consolidar TODO el curso antes de la recta final.",
    summary: "Repaso mega-combinado de todo el curso; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿De qué estás más orgulloso/a después de 55 días de inglés?"],
  },
  items: [
    TEXT("🎊 ¡55 días! Solo quedan 5 días. Hoy: ¡el repaso MÁS GRANDE de todo el curso!"),
    GRAMMAR("El repaso más grande — Todo el curso", "Colores, números, familia, casa, animales, cuerpo, comida, juguetes, ropa, tiempo, can, cole, preposiciones, días, pueblo, zoo, deportes, rutina, cumpleaños, sentimientos, meses, estaciones, naturaleza. ¡Lo sabes TODO!"),
    deck("Pre-A1 S11D55 — El repaso más grande", [
      ["red", "rojo", "It's red.", "colour"],
      ["family", "familia", "My family.", "family"],
      ["cat", "gato", "I like cats.", "animal"],
      ["hungry", "hambriento/a", "I'm hungry.", "adjective"],
      ["wearing", "llevando puesto", "I'm wearing a hat.", "word"],
      ["can", "poder/saber", "I can swim.", "word"],
      ["school", "cole", "My school.", "place"],
      ["happy", "feliz", "I'm happy.", "feeling"],
      ["birthday", "cumpleaños", "Happy Birthday!", "word"],
      ["sun", "sol", "I can see the sun.", "nature"],
    ]),
    vocabEx("¡El repaso más grande! 🎊", "Elige la opción correcta.", [
      mc("🍎 It's ___.", ["red", "blue"], 0, "red."),
      mc("👨‍👩‍👧‍👦 My ___.", ["family", "school"], 0, "family."),
      mc("🐱 I like ___.", ["cats", "dogs"], 0, "cats."),
      mc("I'm ___. I want food.", ["hungry", "happy"], 0, "hungry."),
      mc("🏊 I ___ swim.", ["can", "am"], 0, "can."),
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
      mc("🎂 Happy ___!", ["Birthday", "Sunny"], 0, "Birthday."),
      mc("☀️ I can see the ___.", ["sun", "moon"], 0, "sun."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa TODO", [
      mc("🎧 'This is my family. I like cats and I'm happy!' ¿Cómo se siente?", ["happy", "sad"], 0, "'happy'."),
      mc("🎧 'I'm wearing my red T-shirt. I'm hungry. I want an apple.' ¿Qué color de camiseta lleva?", ["red", "blue"], 0, "'red T-shirt'."),
      mc("🎧 'I can swim and I can sing. It's my birthday today!' ¿Qué celebra?", ["birthday", "school day"], 0, "'birthday'."),
      mc("🎧 'It's sunny. I can see the sun and the trees at the park.' ¿Dónde está?", ["park", "school"], 0, "'at the park'."),
    ]),
    listening(1, "Listening · ¡El repaso más grande!", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. This is my family. I like cats and I'm happy! I'm wearing my red T-shirt. I'm hungry. I want an apple. I can swim and I can sing. It's my birthday today! It's sunny. I can see the sun and the trees at the park.", []),

    READING_HEAD,
    readWrite("Completa las palabras — repaso final", [
      fb("r_d (rojo)", ["red"], "red."),
      fb("f_m_ly (familia)", ["family"], "family."),
      fb("c_t (gato)", ["cat"], "cat."),
      fb("h_ppy (feliz)", ["happy"], "happy."),
      fb("b_rthd_y (cumpleaños)", ["birthday"], "birthday."),
      fb("s_n (sol)", ["sun"], "sun."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¡El gran repaso hablado final!", "Habla 3 minutos combinando TODO lo aprendido en el curso: presentación, familia, animales, comida, ropa, cole, pueblo, rutina, sentimientos y naturaleza.", "Habla combinando absolutamente todo el vocabulario del curso.", "combinar todo el vocabulario y estructuras del curso completo", "Hello, my name's..., This is my family, I like cats, I'm wearing a T-shirt, I can swim, I'm happy, I can see the sun"),

    SUMMARY("Resumen de la Semana 11 — ¡55 días! 🎊", [
      "¡Impresionante! Has repasado TODO el curso: 11 semanas completas.",
      "Solo quedan 5 días para terminar.",
      "Ahora, tu undécima prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡la última semana, con las pruebas finales!",
    ]),
    INFO("Prueba de la Semana 11 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "El repaso más grande · Todo el curso combinado",
  description: "Undécima semana: repaso final combinando absolutamente todo el vocabulario y las estructuras del curso completo (presentación, familia, cuerpo, animales, comida, juguetes, ropa, tiempo, can, cole, preposiciones, números, días, pueblo, zoo, deportes, rutina, cumpleaños, sentimientos, meses, estaciones y naturaleza), antes de la última semana del curso.",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
