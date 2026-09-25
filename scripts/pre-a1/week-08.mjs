/**
 * Pre-A1 Starters · Semana 8 — "Mi rutina 🕐 · get up, eat, sleep".
 * La rutina diaria y verbos de acción cotidianos.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 36 ─────────────────────────
const DAY36 = {
  title: "Día 36 — Por la mañana ☀️ · I get up",
  description: "La rutina de la mañana: get up, wash, brush teeth, eat breakfast.",
  pedagogy: {
    objective: "Describir la rutina matutina en inglés.",
    summary: "Rutina de mañana; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Qué haces cada mañana? Dilo en inglés."],
  },
  items: [
    TEXT("☀️ ¡Buenos días! Good morning! ¿Qué haces cada mañana?"),
    GRAMMAR("Mi rutina de mañana", "I get up. (Me levanto)\nI wash my face. (Me lavo la cara)\nI brush my teeth. (Me cepillo los dientes)\nI eat breakfast. (Desayuno)"),
    deck("Pre-A1 S8D36 — Por la mañana", [
      ["get up", "levantarse", "I get up at seven. ⏰", "verb"],
      ["wash", "lavar(se)", "I wash my face. 🧼", "verb"],
      ["brush my teeth", "cepillarme los dientes", "I brush my teeth. 🦷", "verb"],
      ["breakfast", "desayuno", "I eat breakfast. 🥣", "meal"],
      ["get dressed", "vestirse", "I get dressed. 👕", "verb"],
      ["morning", "mañana", "Good morning! ☀️", "word"],
      ["clock", "reloj", "Look at the clock. ⏰", "object"],
      ["seven", "siete", "I get up at seven.", "number"],
      ["face", "cara", "I wash my face.", "body"],
      ["every day", "cada día", "I get up every day.", "phrase"],
    ]),
    vocabEx("Mi rutina de mañana ☀️", "Elige la palabra correcta.", [
      mc("⏰ I ___ at seven.", ["get up", "wash", "brush"], 0, "get up = levantarse."),
      mc("🧼 I ___ my face.", ["wash", "get up", "eat"], 0, "wash my face."),
      mc("🦷 I ___ my teeth.", ["brush", "wash", "get"], 0, "brush my teeth."),
      mc("🥣 I eat ___.", ["breakfast", "dinner", "lunch"], 0, "eat breakfast."),
      mc("👕 I get ___.", ["dressed", "up", "wash"], 0, "get dressed."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha la rutina de mañana", [
      mc("🎧 'I get up at seven.' ¿A qué hora se levanta?", ["seven", "eight", "six"], 0, "'at seven' → 7."),
      mc("🎧 'I wash my face and brush my teeth.' ¿Qué hace primero?", ["🧼 lavarse la cara", "🦷 cepillarse los dientes"], 0, "'wash my face and brush' — primero lavarse."),
      mc("🎧 'I eat breakfast every day.' ¿Qué hace cada día?", ["🥣 desayunar", "vestirse"], 0, "'eat breakfast' → 🥣."),
      mc("🎧 'I get dressed after breakfast.' ¿Cuándo se viste?", ["antes del desayuno", "después del desayuno"], 1, "'after breakfast' → después."),
    ]),
    listening(1, "Listening · Parte 1 — Por la mañana", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I get up at seven. I wash my face and brush my teeth. I eat breakfast every day. I get dressed after breakfast.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("'I get up' significa 'Me levanto'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
      mc("'Breakfast' significa 'cena'. ¿Está bien?", ["Sí", "No"], 1, "No: breakfast es desayuno, no cena."),
      mc("🦷 = 'brush my teeth'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi rutina de mañana", "Cuenta tu rutina de mañana en orden: get up, wash, brush teeth, eat breakfast, get dressed.", "Describe tu rutina de mañana en 5 pasos.", "describir la rutina matutina", "I get up, I wash my face, I brush my teeth, I eat breakfast, I get dressed"),

    SUMMARY("Resumen del Día 36", [
      "Ya conoces: get up, wash, brush my teeth, eat breakfast, get dressed.",
      "Puedes contar tu rutina de mañana en orden.",
    ]),
    INFO("Tarea para el Día 37", "Practica contar tu rutina de mañana. Mañana: la rutina del cole."),
  ],
};

// ───────────────────────── DÍA 37 ─────────────────────────
const DAY37 = {
  title: "Día 37 — En el cole 🏫 · Reading, writing, drawing",
  description: "Actividades del cole.",
  pedagogy: {
    objective: "Describir actividades típicas del cole.",
    summary: "Actividades del cole; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Qué te gusta hacer en el cole?"],
  },
  items: [
    TEXT("🏫 ¡En el cole! Let's read, write and draw!"),
    GRAMMAR("Actividades del cole", "I read a book. 📖 (Leo un libro)\nI write my name. ✏️ (Escribo mi nombre)\nI draw a picture. 🎨 (Dibujo)"),
    deck("Pre-A1 S8D37 — En el cole", [
      ["read", "leer", "I read a book. 📖", "verb"],
      ["write", "escribir", "I write my name. ✏️", "verb"],
      ["draw", "dibujar", "I draw a picture. 🎨", "verb"],
      ["listen", "escuchar", "I listen to my teacher. 👂", "verb"],
      ["colour", "colorear", "I colour the picture. 🖍️", "verb"],
      ["count", "contar", "I count to ten. 🔢", "verb"],
      ["sing a song", "cantar una canción", "We sing a song. 🎵", "phrase"],
      ["picture", "dibujo", "It's a nice picture. 🎨", "object"],
      ["lesson", "clase/lección", "My English lesson. 📚", "word"],
      ["learn", "aprender", "I learn English! 🇬🇧", "verb"],
    ]),
    vocabEx("¿Qué haces en el cole? 🏫", "Elige el verbo correcto.", [
      mc("📖 I ___ a book.", ["read", "write", "draw"], 0, "read a book."),
      mc("✏️ I ___ my name.", ["write", "read", "colour"], 0, "write my name."),
      mc("🎨 I ___ a picture.", ["draw", "listen", "count"], 0, "draw a picture."),
      mc("🖍️ I ___ the picture.", ["colour", "write", "read"], 0, "colour the picture."),
      mc("🔢 I ___ to ten.", ["count", "sing", "draw"], 0, "count to ten."),
      mc("🎵 We ___ a song.", ["sing", "write", "read"], 0, "sing a song."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha las actividades", [
      mc("🎧 'I read a book at school.' ¿Qué hace?", ["📖 leer", "✏️ escribir"], 0, "'read a book' → 📖."),
      mc("🎧 'I draw a picture of my family.' ¿Qué hace?", ["🎨 dibujar", "🔢 contar"], 0, "'draw a picture' → 🎨."),
      mc("🎧 'We sing a song in class.' ¿Qué hacen?", ["🎵 cantar", "👂 escuchar"], 0, "'sing a song' → 🎵."),
      mc("🎧 'I count to twenty.' ¿Qué hace?", ["🔢 contar", "🖍️ colorear"], 0, "'count' → 🔢."),
    ]),
    listening(2, "Listening · Parte 2 — En el cole", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I read a book at school. I draw a picture of my family. We sing a song in class. I count to twenty.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("📖 What do you do? I ___ a book.", ["read"], "read."),
      fb("🎨 What do you do? I ___ a picture.", ["draw"], "draw."),
      fb("🔢 What do you do? I ___ to ten.", ["count"], "count."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · En el cole", "Cuenta qué haces en el cole: read, write, draw, colour, count, sing.", "Di 4 actividades que haces en el cole.", "describir actividades del cole", "I read a book, I draw a picture, I count to ten"),

    SUMMARY("Resumen del Día 37", [
      "Ya conoces: read, write, draw, listen, colour, count, sing a song.",
      "Puedes describir lo que haces en el cole.",
    ]),
    INFO("Tarea para el Día 38", "Practica las actividades del cole. Mañana: por la tarde y por la noche."),
  ],
};

// ───────────────────────── DÍA 38 ─────────────────────────
const DAY38 = {
  title: "Día 38 — Por la tarde y la noche 🌙 · dinner, bath, bed",
  description: "La rutina de tarde y noche: eat dinner, have a bath, go to bed.",
  pedagogy: {
    objective: "Describir la rutina de tarde y noche.",
    summary: "Rutina de tarde/noche; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Qué haces antes de dormir? Dilo en inglés."],
  },
  items: [
    TEXT("🌙 Good evening! ¿Qué haces por la tarde y la noche?"),
    GRAMMAR("Por la tarde y la noche", "I eat dinner. 🍽️ (Ceno)\nI have a bath. 🛁 (Me baño)\nI go to bed. 🛏️ (Me voy a la cama)\nGoodnight! 🌙 (¡Buenas noches!)"),
    deck("Pre-A1 S8D38 — Tarde y noche", [
      ["dinner", "cena", "I eat dinner. 🍽️", "meal"],
      ["bath", "baño", "I have a bath. 🛁", "word"],
      ["go to bed", "irse a la cama", "I go to bed at eight. 🛏️", "phrase"],
      ["sleep", "dormir", "I sleep well. 😴", "verb"],
      ["story", "cuento", "My mum reads a story. 📖", "word"],
      ["pyjamas", "pijama", "I'm wearing pyjamas. 👘", "clothes"],
      ["evening", "tarde/noche", "Good evening! 🌆", "word"],
      ["goodnight", "buenas noches", "Goodnight! 🌙", "phrase"],
      ["eight", "ocho", "I go to bed at eight.", "number"],
      ["tired", "cansado/a", "I'm tired. 😴", "adjective"],
    ]),
    vocabEx("Mi rutina de noche 🌙", "Elige la palabra correcta.", [
      mc("🍽️ I eat ___.", ["dinner", "breakfast", "bath"], 0, "eat dinner."),
      mc("🛁 I have a ___.", ["bath", "story", "dinner"], 0, "have a bath."),
      mc("🛏️ I go to ___.", ["bed", "school", "bath"], 0, "go to bed."),
      mc("😴 I'm ___. Goodnight!", ["tired", "hungry", "happy"], 0, "I'm tired."),
      mc("📖 My mum reads a ___.", ["story", "dinner", "bath"], 0, "reads a story."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha la rutina de noche", [
      mc("🎧 'I eat dinner at six.' ¿Qué hace a las seis?", ["🍽️ cenar", "🛁 bañarse"], 0, "'eat dinner' → 🍽️."),
      mc("🎧 'I have a bath before bed.' ¿Cuándo se baña?", ["antes de la cama", "después de la cama"], 0, "'before bed' → antes."),
      mc("🎧 'I go to bed at eight.' ¿A qué hora se va a la cama?", ["eight", "seven", "nine"], 0, "'at eight' → 8."),
      mc("🎧 'My mum reads a story. Goodnight!' ¿Qué hace su mamá?", ["📖 leer un cuento", "🍽️ cocinar"], 0, "'reads a story' → 📖."),
    ]),
    listening(3, "Listening · Parte 3 — Tarde y noche", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. I eat dinner at six. I have a bath before bed. I go to bed at eight. My mum reads a story. Goodnight!", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("🍽️ = ___", ["dinner", "breakfast"], 0, "dinner."),
      mc("🛏️ I go to ___.", ["bed", "school"], 0, "bed."),
      mc("😴 = ___", ["tired", "hungry"], 0, "tired."),
      mc("🌙 = ___", ["Goodnight", "Good morning"], 0, "Goodnight."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi rutina de noche", "Cuenta tu rutina de noche: dinner, bath, story, bed.", "Describe tu rutina de noche en 4 pasos.", "describir la rutina de noche", "I eat dinner, I have a bath, I go to bed, Goodnight!"),

    SUMMARY("Resumen del Día 38", [
      "Ya conoces: dinner, bath, go to bed, sleep, story, pyjamas, goodnight.",
      "Puedes contar tu rutina de noche.",
    ]),
    INFO("Tarea para el Día 39", "Practica tu rutina completa: mañana, cole, tarde y noche. Mañana: los días especiales."),
  ],
};

// ───────────────────────── DÍA 39 ─────────────────────────
const DAY39 = {
  title: "Día 39 — Días especiales 🎂 · Birthday party!",
  description: "Vocabulario de cumpleaños y fiestas.",
  pedagogy: {
    objective: "Nombrar elementos de una fiesta de cumpleaños.",
    summary: "Cumpleaños; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Cuándo es tu cumpleaños? Dilo en inglés."],
  },
  items: [
    TEXT("🎂 Happy Birthday! ¡Hoy es fiesta! Let's celebrate!"),
    GRAMMAR("Happy Birthday!", "Happy Birthday! (¡Feliz cumpleaños!)\nIt's my birthday! (¡Es mi cumpleaños!)"),
    deck("Pre-A1 S8D39 — El cumpleaños", [
      ["birthday", "cumpleaños", "Happy Birthday! 🎂", "word"],
      ["cake", "pastel", "A birthday cake. 🎂", "food"],
      ["present", "regalo", "A birthday present! 🎁", "object"],
      ["balloon", "globo", "A red balloon. 🎈", "object"],
      ["party", "fiesta", "A birthday party! 🎉", "word"],
      ["candle", "vela", "Blow out the candles! 🕯️", "object"],
      ["friends", "amigos/as", "My friends are here! 👫", "word"],
      ["happy", "feliz", "I'm happy! 😄", "adjective"],
      ["song", "canción", "Sing the birthday song! 🎵", "word"],
      ["celebrate", "celebrar", "Let's celebrate! 🎉", "verb"],
    ]),
    vocabEx("La fiesta de cumpleaños 🎂", "Elige la palabra correcta.", [
      mc("🎂 = ___", ["cake", "present", "balloon"], 0, "🎂 = cake."),
      mc("🎁 = ___", ["present", "cake", "candle"], 0, "🎁 = present."),
      mc("🎈 = ___", ["balloon", "cake", "friends"], 0, "🎈 = balloon."),
      mc("🕯️ = ___", ["candle", "present", "party"], 0, "🕯️ = candle."),
      mc("🎉 = ___", ["party", "birthday", "cake"], 0, "🎉 = party."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe", [
      fb("🎧 'Happy Birthday! Here's your cake.' Escribe: ___", ["cake"], "cake."),
      fb("🎧 'Here's a present for you!' Escribe: ___", ["present"], "present."),
      fb("🎧 'Look at the red balloons!' Escribe: ___", ["balloons", "balloon"], "balloons."),
      fb("🎧 'Blow out the candles!' Escribe: ___", ["candles", "candle"], "candles."),
    ]),
    listening(4, "Listening · Parte 4 — El cumpleaños", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. Happy Birthday! Here's your cake. Here's a present for you! Look at the red balloons! Blow out the candles!", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("c_k_ (pastel)", ["cake"], "cake."),
      fb("pr_s_nt (regalo)", ["present"], "present."),
      fb("b_ll__n (globo)", ["balloon"], "balloon."),
      fb("p_rty (fiesta)", ["party"], "party."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¡Fiesta de cumpleaños!", "Describe una fiesta de cumpleaños: cake, presents, balloons, friends.", "Describe una fiesta de cumpleaños con 4 palabras nuevas.", "describir una fiesta de cumpleaños", "Happy Birthday! It's a party, I've got a cake, balloons and presents"),

    SUMMARY("Resumen del Día 39", [
      "Ya conoces: birthday, cake, present, balloon, party, candle, friends.",
      "Puedes decir: 'Happy Birthday!' y describir una fiesta.",
    ]),
    INFO("Tarea para el Día 40", "Repasa la rutina y el cumpleaños. Mañana: ¡repaso y octava prueba!"),
  ],
};

// ───────────────────────── DÍA 40 ─────────────────────────
const DAY40 = {
  title: "Día 40 — Repaso de la semana + octava prueba 🌟",
  description: "Repaso de la rutina diaria y el cumpleaños. Octava prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 8 antes de la prueba.",
    summary: "Repaso de rutina y cumpleaños; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Puedes contar tu día entero en inglés, de la mañana a la noche?"],
  },
  items: [
    TEXT("🌟 ¡Octava semana terminada! Hoy repasamos: la rutina diaria y el cumpleaños."),
    GRAMMAR("Repaso de la Semana 8", "· Mañana: get up, wash, brush my teeth, eat breakfast, get dressed.\n· Cole: read, write, draw, colour, count, sing a song.\n· Noche: eat dinner, have a bath, go to bed, goodnight.\n· Cumpleaños: birthday, cake, present, balloon, party."),
    deck("Pre-A1 S8D40 — Repaso mixto", [
      ["get up", "levantarse", "I get up at seven.", "verb"],
      ["breakfast", "desayuno", "I eat breakfast.", "meal"],
      ["read", "leer", "I read a book.", "verb"],
      ["draw", "dibujar", "I draw a picture.", "verb"],
      ["dinner", "cena", "I eat dinner.", "meal"],
      ["go to bed", "irse a la cama", "I go to bed.", "phrase"],
      ["birthday", "cumpleaños", "Happy Birthday!", "word"],
      ["cake", "pastel", "A birthday cake.", "food"],
      ["party", "fiesta", "A birthday party!", "word"],
      ["happy", "feliz", "I'm happy!", "adjective"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("⏰ I ___ at seven.", ["get up", "read"], 0, "get up."),
      mc("📖 I ___ a book.", ["read", "eat"], 0, "read."),
      mc("🍽️ I eat ___.", ["dinner", "party"], 0, "dinner."),
      mc("🎂 = ___", ["cake", "present"], 0, "cake."),
      mc("🛏️ I go to ___.", ["bed", "cake"], 0, "bed."),
      mc("🎁 = ___", ["present", "balloon"], 0, "present."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I get up at seven, wash my face, and eat breakfast.' ¿Qué hace primero?", ["get up", "eat breakfast"], 0, "primero: get up."),
      mc("🎧 'At school, I read a book and draw a picture.' ¿Qué hace en el cole?", ["read and draw", "get up"], 0, "'read a book and draw a picture'."),
      mc("🎧 'I eat dinner, have a bath, and go to bed.' ¿Qué hace por la noche?", ["dinner, bath, bed", "get up, wash, breakfast"], 0, "rutina de noche."),
      mc("🎧 'Happy Birthday! Here's your cake and presents.' ¿Qué celebran?", ["un cumpleaños", "un día de cole"], 0, "'Happy Birthday' → cumpleaños."),
    ]),
    listening(1, "Listening · Repaso de la Semana 8", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I get up at seven, wash my face, and eat breakfast. At school, I read a book and draw a picture. I eat dinner, have a bath, and go to bed. Happy Birthday! Here's your cake and presents.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("br_ _kf_st (desayuno)", ["breakfast"], "breakfast."),
      fb("r__d (leer)", ["read"], "read."),
      fb("d_nn_r (cena)", ["dinner"], "dinner."),
      fb("c_k_ (pastel)", ["cake"], "cake."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi día completo", "Cuenta tu día entero: de la mañana a la noche, y describe un cumpleaños.", "Habla 1-2 minutos combinando toda tu rutina diaria.", "combinar la rutina diaria completa", "I get up, I eat breakfast, I read a book, I eat dinner, I go to bed"),

    SUMMARY("Resumen de la Semana 8", [
      "¡Enhorabuena! Terminaste la Semana 8: la rutina diaria completa y el cumpleaños.",
      "Ahora, tu octava prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡repaso grande de todo el curso!",
    ]),
    INFO("Prueba de la Semana 8 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "Mi rutina diaria · Mañana, cole, noche · El cumpleaños",
  description: "Octava semana: la rutina de la mañana (get up, wash, breakfast), las actividades del cole (read, write, draw), la rutina de noche (dinner, bath, bed), y el vocabulario del cumpleaños. Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
