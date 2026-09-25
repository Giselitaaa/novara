/**
 * Pre-A1 Starters · Semana 10 — "Repaso grande 🌈 (Semanas 7-9)".
 * Repaso combinando pueblo, zoo, deportes, rutina, cumpleaños, sentimientos,
 * meses, estaciones y naturaleza.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 46 ─────────────────────────
const DAY46 = {
  title: "Día 46 — Repaso: pueblo, zoo y deportes 🏘️",
  description: "Repaso combinado de la Semana 7.",
  pedagogy: {
    objective: "Combinar el pueblo, el zoo y los deportes.",
    summary: "Repaso S7; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Recuerdas el vocabulario del zoo?"],
  },
  items: [
    TEXT("🏘️ Hoy repasamos: el pueblo, el zoo y los deportes."),
    GRAMMAR("Repaso: Semana 7", "Pueblo: park, shop, zoo, school. Where's the...? at/near/far.\nZoo: lion, elephant, monkey, giraffe. big/small/tall.\nDeportes: football, basketball, tennis. I play..."),
    deck("Pre-A1 S10D46 — Repaso 7", [
      ["park", "parque", "It's a park. 🌳", "place"],
      ["zoo", "zoo", "It's a zoo. 🦁", "place"],
      ["near", "cerca de", "It's near my house.", "preposition"],
      ["elephant", "elefante", "A big elephant.", "animal"],
      ["giraffe", "jirafa", "A tall giraffe.", "animal"],
      ["football", "fútbol", "I play football.", "sport"],
      ["play", "jugar", "I play tennis.", "verb"],
      ["big", "grande", "A big elephant.", "adjective"],
      ["where's", "dónde está", "Where's the park?", "word"],
      ["swimming", "natación", "I like swimming.", "sport"],
    ]),
    vocabEx("Repaso — pueblo, zoo, deportes 🏘️", "Elige la opción correcta.", [
      mc("🌳 It's a ___.", ["park", "zoo"], 0, "park."),
      mc("🐘 It's a big ___.", ["elephant", "monkey"], 0, "elephant."),
      mc("⚽ I ___ football.", ["play", "am"], 0, "play."),
      mc("Where's the park? It's ___. (cerca)", ["near", "far"], 0, "near."),
      mc("🦒 It's a tall ___.", ["giraffe", "lion"], 0, "giraffe."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'Let's go to the zoo near my house.' ¿Adónde van?", ["🦁 zoo", "🌳 parque"], 0, "'to the zoo' → 🦁."),
      mc("🎧 'I play football at the park every Saturday.' ¿A qué juega y dónde?", ["fútbol en el parque", "tenis en el zoo"], 0, "'play football at the park'."),
      mc("🎧 'The big elephant is at the zoo.' ¿Dónde está el elefante?", ["zoo", "park"], 0, "'at the zoo'."),
    ]),
    listening(1, "Listening · Repaso 7", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. Let's go to the zoo near my house. I play football at the park every Saturday. The big elephant is at the zoo.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("🌳 = 'park'. ¿Está bien?", ["Sí", "No"], 0, "Sí."),
      mc("🦁 = 'farm'. ¿Está bien?", ["Sí", "No"], 1, "No, 🦁 es zoo."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso pueblo, zoo, deportes", "Combina el pueblo, el zoo y los deportes en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar pueblo, zoo, deportes", "It's a park, It's near my house, I play football"),

    SUMMARY("Resumen del Día 46", ["Repasamos el pueblo, el zoo y los deportes."]),
    INFO("Tarea para el Día 47", "Repasa el vocabulario de hoy. Mañana: rutina y cumpleaños."),
  ],
};

// ───────────────────────── DÍA 47 ─────────────────────────
const DAY47 = {
  title: "Día 47 — Repaso: rutina y cumpleaños 🕐",
  description: "Repaso combinado de la Semana 8.",
  pedagogy: {
    objective: "Combinar la rutina diaria y el cumpleaños.",
    summary: "Repaso S8; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Puedes contar tu rutina diaria completa?"],
  },
  items: [
    TEXT("🕐 Hoy repasamos: la rutina diaria y el cumpleaños."),
    GRAMMAR("Repaso: Semana 8", "Mañana: get up, wash, breakfast. Cole: read, write, draw.\nNoche: dinner, bath, bed. Cumpleaños: birthday, cake, present, party."),
    deck("Pre-A1 S10D47 — Repaso 8", [
      ["get up", "levantarse", "I get up at seven.", "verb"],
      ["breakfast", "desayuno", "I eat breakfast.", "meal"],
      ["read", "leer", "I read a book.", "verb"],
      ["dinner", "cena", "I eat dinner.", "meal"],
      ["go to bed", "irse a la cama", "I go to bed.", "phrase"],
      ["birthday", "cumpleaños", "Happy Birthday!", "word"],
      ["cake", "pastel", "A birthday cake.", "food"],
      ["present", "regalo", "A birthday present.", "object"],
      ["party", "fiesta", "A birthday party!", "word"],
      ["draw", "dibujar", "I draw a picture.", "verb"],
    ]),
    vocabEx("Repaso — rutina, cumpleaños 🕐", "Elige la opción correcta.", [
      mc("⏰ I ___ at seven.", ["get up", "read"], 0, "get up."),
      mc("📖 I ___ a book.", ["read", "eat"], 0, "read."),
      mc("🍽️ I eat ___.", ["dinner", "party"], 0, "dinner."),
      mc("🎂 = ___", ["cake", "present"], 0, "cake."),
      mc("🛏️ I go to ___.", ["bed", "cake"], 0, "bed."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha y repasa", [
      mc("🎧 'I get up, eat breakfast, and read a book.' ¿Qué hace primero?", ["get up", "read a book"], 0, "primero: get up."),
      mc("🎧 'It's my birthday! Here's my cake and presents.' ¿Qué celebra?", ["un cumpleaños", "un día de cole"], 0, "'birthday'."),
      mc("🎧 'I eat dinner and go to bed.' ¿Qué hace por la noche?", ["dinner and bed", "get up"], 0, "'dinner… bed'."),
    ]),
    listening(2, "Listening · Repaso 8", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I get up, eat breakfast, and read a book. It's my birthday! Here's my cake and presents. I eat dinner and go to bed.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("What do you do in the morning? I get ___.", ["up"], "up."),
      fb("What do you eat at night? ___", ["dinner"], "dinner."),
      fb("What do you say on a birthday? Happy ___!", ["Birthday"], "Birthday."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso rutina, cumpleaños", "Combina la rutina diaria y el cumpleaños en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar rutina y cumpleaños", "I get up, I eat breakfast, Happy Birthday, I've got a cake"),

    SUMMARY("Resumen del Día 47", ["Repasamos la rutina diaria y el cumpleaños."]),
    INFO("Tarea para el Día 48", "Repasa el vocabulario de hoy. Mañana: sentimientos, meses, estaciones."),
  ],
};

// ───────────────────────── DÍA 48 ─────────────────────────
const DAY48 = {
  title: "Día 48 — Repaso: sentimientos, meses, estaciones 😊",
  description: "Repaso combinado de la Semana 9.",
  pedagogy: {
    objective: "Combinar sentimientos, meses, estaciones y naturaleza.",
    summary: "Repaso S9; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes decir cómo te sientes y en qué estación estamos?"],
  },
  items: [
    TEXT("😊 Hoy repasamos: sentimientos, meses, estaciones y naturaleza."),
    GRAMMAR("Repaso: Semana 9", "Sentimientos: happy, sad, tired. How are you? I'm...\nMeses: January-December. Estaciones: spring, summer, autumn, winter.\nNaturaleza: sun, moon, stars, tree, rainbow."),
    deck("Pre-A1 S10D48 — Repaso 9", [
      ["happy", "feliz", "I'm happy. 😊", "feeling"],
      ["tired", "cansado/a", "I'm tired. 😴", "feeling"],
      ["June", "junio", "My birthday is in June.", "month"],
      ["summer", "verano", "It's summer. ☀️", "season"],
      ["winter", "invierno", "It's winter. ❄️", "season"],
      ["sun", "sol", "I can see the sun.", "nature"],
      ["tree", "árbol", "A big tree.", "nature"],
      ["rainbow", "arcoíris", "A colourful rainbow!", "nature"],
      ["how", "cómo", "How are you?", "word"],
      ["favourite", "favorito", "My favourite season.", "adjective"],
    ]),
    vocabEx("Repaso — sentimientos, meses, estaciones 😊", "Elige la opción correcta.", [
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
      mc("How are you? I'm ___.", ["fine", "December"], 0, "fine."),
      mc("☀️ It's ___.", ["summer", "winter"], 0, "summer."),
      mc("🌳 It's a ___.", ["tree", "sun"], 0, "tree."),
      mc("🌈 = ___", ["rainbow", "cloud"], 0, "rainbow."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y repasa", [
      mc("🎧 'How are you? I'm happy! It's summer.' ¿Cómo está?", ["😊 feliz", "😢 triste"], 0, "'happy' → 😊."),
      mc("🎧 'I can see the sun and a rainbow in spring.' ¿Qué estación es?", ["🌸 primavera", "❄️ invierno"], 0, "'spring' → 🌸."),
      mc("🎧 'It's winter. My birthday is in December.' ¿Qué mes es?", ["December", "June"], 0, "'December'."),
    ]),
    listening(3, "Listening · Repaso 9", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. How are you? I'm happy! It's summer. I can see the sun and a rainbow in spring. It's winter. My birthday is in December.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("😊 = ___", ["happy", "sad"], 0, "happy."),
      mc("☀️ = ___", ["summer", "winter"], 0, "summer."),
      mc("🌈 = ___", ["rainbow", "sun"], 0, "rainbow."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso sentimientos, meses, estaciones", "Combina sentimientos, meses, estaciones y naturaleza en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar sentimientos, meses, estaciones, naturaleza", "I'm happy, My birthday is in June, It's summer, I can see the sun"),

    SUMMARY("Resumen del Día 48", ["Repasamos sentimientos, meses, estaciones y naturaleza."]),
    INFO("Tarea para el Día 49", "Repasa todo el vocabulario. Mañana: repaso combinado más amplio."),
  ],
};

// ───────────────────────── DÍA 49 ─────────────────────────
const DAY49 = {
  title: "Día 49 — Repaso combinado amplio 🌍",
  description: "Repaso combinando Semanas 1-9: colores, familia, cuerpo, ropa, cole, pueblo, rutina, sentimientos.",
  pedagogy: {
    objective: "Combinar vocabulario de todo el curso hasta ahora.",
    summary: "Repaso amplio S1-S9; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué palabra usarías más a menudo en tu día a día?"],
  },
  items: [
    TEXT("🌍 Hoy combinamos vocabulario de TODO el curso hasta ahora."),
    GRAMMAR("Repaso combinado", "Colores, familia, cuerpo, ropa, cole, pueblo, rutina y sentimientos — ¡todo junto!"),
    deck("Pre-A1 S10D49 — Repaso amplio", [
      ["blue", "azul", "It's blue. 🔵", "colour"],
      ["sister", "hermana", "My sister.", "family"],
      ["arm", "brazo", "I've got two arms.", "body"],
      ["shoes", "zapatos", "My blue shoes.", "clothes"],
      ["pencil", "lápiz", "It's a pencil.", "school"],
      ["park", "parque", "It's a park.", "place"],
      ["breakfast", "desayuno", "I eat breakfast.", "meal"],
      ["happy", "feliz", "I'm happy.", "feeling"],
      ["can", "poder/saber", "I can swim.", "word"],
      ["like", "gustar", "I like dogs.", "word"],
    ]),
    vocabEx("Repaso amplio 🌍", "Elige la opción correcta.", [
      mc("🔵 It's ___.", ["blue", "red"], 0, "blue."),
      mc("👧 My ___.", ["sister", "brother"], 0, "sister."),
      mc("💪 I've got two ___.", ["arms", "legs"], 0, "arms."),
      mc("✏️ It's a ___.", ["pencil", "book"], 0, "pencil."),
      mc("🍽️ I eat ___.", ["breakfast", "dinner"], 0, "breakfast."),
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y repasa TODO", [
      fb("🎧 'My sister is wearing blue shoes.' ¿De qué color son los zapatos? Escribe: ___", ["blue"], "blue."),
      fb("🎧 'I eat breakfast and then I go to the park.' ¿Adónde va? Escribe: ___", ["park"], "park."),
      fb("🎧 'I'm happy. I can swim well.' ¿Cómo se siente? Escribe: ___", ["happy"], "happy."),
    ]),
    listening(4, "Listening · Repaso combinado (Semanas 1-9)", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. My sister is wearing blue shoes. I eat breakfast and then I go to the park. I'm happy. I can swim well.", []),

    READING_HEAD,
    readWrite("Completa las palabras — repaso amplio", [
      fb("bl__ (azul)", ["blue"], "blue."),
      fb("s_st_r (hermana)", ["sister"], "sister."),
      fb("p_nc_l (lápiz)", ["pencil"], "pencil."),
      fb("h_ppy (feliz)", ["happy"], "happy."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso combinado amplio", "Habla combinando vocabulario de varias semanas distintas.", "Habla 2 minutos combinando temas variados del curso.", "combinar vocabulario amplio", "It's blue, This is my sister, It's a pencil, I'm happy"),

    SUMMARY("Resumen del Día 49", ["Repasamos vocabulario combinado de las Semanas 1-9."]),
    INFO("Tarea para el Día 50", "Repasa TODO. Mañana: ¡repaso final y décima prueba!"),
  ],
};

// ───────────────────────── DÍA 50 ─────────────────────────
const DAY50 = {
  title: "Día 50 — Repaso de la semana + décima prueba 🌟",
  description: "Repaso final de las Semanas 7-9. Décima prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 10 antes de la prueba.",
    summary: "Repaso de pueblo, rutina y sentimientos combinados; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Cuánto has aprendido en 50 días?"],
  },
  items: [
    TEXT("🌟 ¡50 días! Hoy repasamos todo lo de las Semanas 7, 8 y 9."),
    GRAMMAR("Repaso de la Semana 10", "Pueblo y zoo, deportes, rutina diaria, cumpleaños, sentimientos, meses, estaciones y naturaleza — ¡todo repasado!"),
    deck("Pre-A1 S10D50 — Repaso final S7-9", [
      ["zoo", "zoo", "It's a zoo.", "place"],
      ["football", "fútbol", "I play football.", "sport"],
      ["get up", "levantarse", "I get up at seven.", "verb"],
      ["birthday", "cumpleaños", "Happy Birthday!", "word"],
      ["happy", "feliz", "I'm happy.", "feeling"],
      ["summer", "verano", "It's summer.", "season"],
      ["sun", "sol", "I can see the sun.", "nature"],
      ["June", "junio", "My birthday is in June.", "month"],
      ["play", "jugar", "I play tennis.", "verb"],
      ["park", "parque", "It's a park.", "place"],
    ]),
    vocabEx("Repaso final de la Semana 10 🌟", "Elige la opción correcta.", [
      mc("🦁 It's a ___.", ["zoo", "park"], 0, "zoo."),
      mc("⚽ I ___ football.", ["play", "am"], 0, "play."),
      mc("⏰ I ___ at seven.", ["get up", "eat"], 0, "get up."),
      mc("🎂 Happy ___!", ["Birthday", "Sunny"], 0, "Birthday."),
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
      mc("☀️ It's ___.", ["summer", "winter"], 0, "summer."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I play football at the park, then I go home for dinner.' ¿Dónde juega?", ["park", "zoo"], 0, "'at the park'."),
      mc("🎧 'It's my birthday! I'm so happy!' ¿Cómo se siente?", ["happy", "sad"], 0, "'happy'."),
      mc("🎧 'It's summer. My birthday is in June.' ¿Qué mes es?", ["June", "December"], 0, "'June'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 10", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I play football at the park, then I go home for dinner. It's my birthday! I'm so happy! It's summer. My birthday is in June.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("z__ (zoo)", ["zoo"], "zoo."),
      fb("f__tb_ll (fútbol)", ["football"], "football."),
      fb("b_rthd_y (cumpleaños)", ["birthday"], "birthday."),
      fb("h_ppy (feliz)", ["happy"], "happy."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina el pueblo, la rutina, el cumpleaños y los sentimientos.", "Habla 1-2 minutos combinando lo repasado.", "combinar pueblo, rutina, cumpleaños, sentimientos", "It's a park, I get up, Happy Birthday, I'm happy"),

    SUMMARY("Resumen de la Semana 10 — ¡50 días! 🎉", [
      "¡Enhorabuena! Terminaste la Semana 10: repaso combinado de pueblo, rutina y sentimientos.",
      "¡Ya llevas 50 de 60 días! Casi has terminado.",
      "Ahora, tu décima prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "Las últimas dos semanas: ¡el repaso final más grande y las últimas pruebas!",
    ]),
    INFO("Prueba de la Semana 10 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Repaso grande · Semanas 7-9 combinadas",
  description: "Décima semana: repaso combinado de las Semanas 7-9 (pueblo, zoo, deportes, rutina diaria, cumpleaños, sentimientos, meses, estaciones y naturaleza), con un día final de repaso amplio combinando todo el curso. Día 50 marca el camino hacia el final.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
