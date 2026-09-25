/**
 * A1 Movers · Semana 2 — "Mi tiempo libre 🎨 · I like / I love / I hate".
 * Aficiones y el presente simple con "like/love/hate + -ing".
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 6 ─────────────────────────
const DAY6 = {
  title: "Día 6 — Mis aficiones 🎨 · I like + -ing",
  description: "Aficiones y la estructura 'I like + verbo-ing'.",
  pedagogy: {
    objective: "Hablar de aficiones usando 'like + -ing'.",
    summary: "Aficiones; like + -ing; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Cuáles son tus aficiones favoritas?"],
  },
  items: [
    TEXT("🎨 ¡Hoy hablamos de aficiones! What do you like doing?"),
    GRAMMAR("I like + verbo-ing", "I like + verbo-ing. (Me gusta...)\nI like drawing. 🎨 (Me gusta dibujar)\nI like playing football. ⚽"),
    deck("Movers S2D6 — Mis aficiones", [
      ["drawing", "dibujar", "I like drawing. 🎨", "hobby"],
      ["painting", "pintar", "I like painting.", "hobby"],
      ["dancing", "bailar", "I like dancing. 💃", "hobby"],
      ["singing", "cantar", "I like singing. 🎤", "hobby"],
      ["reading", "leer", "I like reading books.", "hobby"],
      ["riding a bike", "montar en bici", "I like riding a bike. 🚲", "hobby"],
      ["playing games", "jugar a juegos", "I like playing games. 🎮", "hobby"],
      ["watching TV", "ver la tele", "I like watching TV. 📺", "hobby"],
      ["doing", "hacer (gerundio)", "What do you like doing?", "word"],
      ["hobby", "afición", "My favourite hobby.", "word"],
    ]),
    vocabEx("Mis aficiones 🎨", "Elige la afición correcta.", [
      mc("🎨 I like ___.", ["drawing", "dancing", "singing"], 0, "drawing."),
      mc("💃 I like ___.", ["reading", "dancing", "painting"], 1, "dancing."),
      mc("🎤 I like ___.", ["singing", "riding", "watching"], 0, "singing."),
      mc("🚲 I like ___.", ["riding a bike", "reading", "drawing"], 0, "riding a bike."),
      mc("📺 I like ___.", ["watching TV", "singing", "painting"], 0, "watching TV."),
      mc("🎮 I like ___.", ["playing games", "reading", "dancing"], 0, "playing games."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y une la afición", [
      mc("🎧 'I like drawing pictures of animals.' ¿Qué le gusta hacer?", ["🎨 dibujar", "💃 bailar"], 0, "'drawing pictures' → 🎨."),
      mc("🎧 'My sister likes singing songs.' ¿Qué le gusta a su hermana?", ["🎤 cantar", "📺 ver la tele"], 0, "'singing songs' → 🎤."),
      mc("🎧 'I like riding my bike in the park.' ¿Qué le gusta hacer?", ["🚲 montar en bici", "🎮 jugar videojuegos"], 0, "'riding my bike' → 🚲."),
      mc("🎧 'My friend likes playing computer games.' ¿Qué le gusta a su amigo?", ["🎮 videojuegos", "📖 leer"], 0, "'playing computer games' → 🎮."),
      mc("🎧 'I like reading stories before bed.' ¿Qué le gusta hacer?", ["📖 leer", "🎨 dibujar"], 0, "'reading stories' → 📖."),
    ]),
    listening(1, "Listening · Parte 1 — Mis aficiones", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and match. I like drawing pictures of animals. My sister likes singing songs. I like riding my bike in the park. My friend likes playing computer games. I like reading stories before bed.", []),

    READING_HEAD,
    readDefine("Encuentra la afición correcta", [
      mc("Hacer un dibujo con lápiz o pinceles: ___", ["drawing", "singing", "reading"], 0, "drawing."),
      mc("Moverse al ritmo de la música: ___", ["dancing", "reading", "painting"], 0, "dancing."),
      mc("Mirar programas o series: ___", ["watching TV", "singing", "drawing"], 0, "watching TV."),
      mc("Ir en bicicleta: ___", ["riding a bike", "playing games", "reading"], 0, "riding a bike."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis aficiones favoritas", "Habla de tus aficiones favoritas: 'I like + -ing'.", "Di 4 aficiones que te gustan.", "hablar de aficiones", "I like drawing, I like reading, I like riding my bike"),

    SUMMARY("Resumen del Día 6", [
      "Ya conoces: drawing, painting, dancing, singing, reading, riding a bike, playing games, watching TV.",
      "Puedes hablar de tus aficiones: 'I like + -ing'.",
    ]),
    INFO("Tarea para el Día 7", "Practica hablar de tus aficiones. Mañana: I love / I hate."),
  ],
};

// ───────────────────────── DÍA 7 ─────────────────────────
const DAY7 = {
  title: "Día 7 — I love / I hate 😍😫 · Grados de gustar",
  description: "Los distintos grados: love (encantar), like (gustar), hate (odiar).",
  pedagogy: {
    objective: "Expresar distintos grados de gusto con love/like/hate.",
    summary: "Love/like/hate; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Qué te encanta hacer y qué odias hacer?"],
  },
  items: [
    TEXT("😍😫 Hoy: I love... (me encanta) y I hate... (odio)."),
    GRAMMAR("love / like / hate", "I love + -ing. (Me encanta) 😍\nI like + -ing. (Me gusta) 🙂\nI hate + -ing. (Odio) 😫"),
    deck("Movers S2D7 — Love/like/hate", [
      ["love", "encantar", "I love swimming! 😍", "verb"],
      ["hate", "odiar", "I hate cleaning my room. 😫", "verb"],
      ["really", "de verdad/mucho", "I really love music.", "adverb"],
      ["don't like", "no gustar", "I don't like spiders.", "phrase"],
      ["cleaning", "limpiar", "I hate cleaning.", "hobby"],
      ["cooking", "cocinar", "I love cooking!", "hobby"],
      ["swimming", "nadar", "I love swimming.", "hobby"],
      ["homework", "deberes", "I hate homework!", "word"],
      ["favourite", "favorito/a", "My favourite hobby.", "adjective"],
      ["boring", "aburrido", "Homework is boring.", "adjective"],
    ]),
    vocabEx("Grados de gustar 😍😫", "Elige la opción correcta.", [
      mc("😍 I ___ swimming!", ["love", "hate"], 0, "love."),
      mc("😫 I ___ homework!", ["love", "hate"], 1, "hate."),
      mc("🍳 I love ___.", ["cooking", "cleaning"], 0, "cooking."),
      mc("🧹 I hate ___.", ["cleaning", "cooking"], 0, "cleaning."),
      mc("Homework is ___.", ["boring", "favourite"], 0, "boring."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha y completa", [
      fb("🎧 'I really love swimming in summer.' Escribe la afición: ___", ["swimming"], "swimming."),
      fb("🎧 'I hate cleaning my room.' Escribe lo que odia: ___", ["cleaning"], "cleaning."),
      fb("🎧 'My brother loves cooking pasta.' Escribe lo que le encanta: ___", ["cooking"], "cooking."),
      fb("🎧 'I don't like homework. It's boring!' Escribe lo que no le gusta: ___", ["homework"], "homework."),
    ]),
    listening(2, "Listening · Parte 2 — Love/like/hate", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I really love swimming in summer. I hate cleaning my room. My brother loves cooking pasta. I don't like homework. It's boring!", []),

    READING_HEAD,
    readStory("Lee la historia y responde Sí/No", "My name's Ben. I really love swimming — it's my favourite hobby! I also like riding my bike. But I hate cleaning my room, and I don't like homework very much. My sister loves cooking, but she hates singing.", [
      mc("Ben's favourite hobby is swimming. ¿Está bien?", ["Sí", "No"], 0, "'swimming — it's my favourite hobby' — Sí."),
      mc("Ben loves cleaning his room. ¿Está bien?", ["Sí", "No"], 1, "'I hate cleaning' — No."),
      mc("Ben's sister loves cooking. ¿Está bien?", ["Sí", "No"], 0, "'My sister loves cooking' — Sí."),
      mc("Ben's sister loves singing. ¿Está bien?", ["Sí", "No"], 1, "'she hates singing' — No."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Love, like, hate", "Habla de lo que te encanta, te gusta y odias hacer.", "Di 2 cosas que te encantan, 2 que te gustan, y 1 que odias.", "expresar grados de gusto", "I love swimming, I like drawing, I hate homework"),

    SUMMARY("Resumen del Día 7", [
      "love (encantar) > like (gustar) > don't like/hate (no gustar/odiar).",
      "Puedes expresar distintos grados de gusto en inglés.",
    ]),
    INFO("Tarea para el Día 8", "Practica love/like/hate. Mañana: los días de la semana y las actividades."),
  ],
};

// ───────────────────────── DÍA 8 ─────────────────────────
const DAY8 = {
  title: "Día 8 — Mi semana 📅 · On Mondays, I...",
  description: "Actividades semanales y 'on + día'.",
  pedagogy: {
    objective: "Describir actividades semanales con 'on + día'.",
    summary: "Actividades semanales; on Mondays; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Qué haces los lunes? ¿Y los sábados?"],
  },
  items: [
    TEXT("📅 ¿Qué haces cada día de la semana? On Mondays, I...!"),
    GRAMMAR("on + día de la semana", "On Mondays, I go to school. (Los lunes, voy al cole)\nOn Saturdays, I play football. (Los sábados, juego al fútbol)"),
    deck("Movers S2D8 — Mi semana", [
      ["on Mondays", "los lunes", "On Mondays, I go to school.", "phrase"],
      ["on Saturdays", "los sábados", "On Saturdays, I play football.", "phrase"],
      ["go to school", "ir al cole", "I go to school.", "phrase"],
      ["have a music lesson", "tener clase de música", "I have a music lesson.", "phrase"],
      ["visit", "visitar", "I visit my grandma.", "verb"],
      ["weekend", "fin de semana", "I love the weekend!", "word"],
      ["every", "cada", "Every Monday.", "word"],
      ["always", "siempre", "I always play football on Saturdays.", "adverb"],
      ["sometimes", "a veces", "I sometimes watch TV.", "adverb"],
      ["never", "nunca", "I never do homework on Sundays.", "adverb"],
    ]),
    vocabEx("Mi semana 📅", "Elige la palabra correcta.", [
      mc("On ___, I go to school. (lunes)", ["Mondays", "Saturdays"], 0, "Mondays."),
      mc("On Saturdays, I ___ football.", ["play", "go"], 0, "play football."),
      mc("I ___ visit my grandma on Sundays.", ["always", "never"], 0, "always (contexto positivo)."),
      mc("I love the ___! (fin de semana)", ["weekend", "Monday"], 0, "weekend."),
      mc("I ___ do homework on Sundays. (nunca)", ["never", "always"], 0, "never."),
    ]),

    LISTENING_HEAD,
    listenColourWrite("Escucha y escribe el día", [
      fb("🎧 'On Mondays, I go to school and have a music lesson.' ¿Qué día es? Escribe: ___", ["Monday", "Mondays"], "Monday(s)."),
      fb("🎧 'On Saturdays, I always play football with my friends.' ¿Qué día es? Escribe: ___", ["Saturday", "Saturdays"], "Saturday(s)."),
      fb("🎧 'I sometimes visit my grandma on Sundays.' ¿Qué día es? Escribe: ___", ["Sunday", "Sundays"], "Sunday(s)."),
    ]),
    listening(3, "Listening · Parte 3 — Mi semana", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. On Mondays, I go to school and have a music lesson. On Saturdays, I always play football with my friends. I sometimes visit my grandma on Sundays.", []),

    READING_HEAD,
    readGapChoice("Elige la palabra correcta", "___ (1) Mondays, I go to school. I ___ (2) have a music lesson on Tuesdays. On Saturdays, I ___ (3) play football with my friends. I ___ (4) visit my grandma on Sundays — maybe once a month.", [
      mc("(1)", ["On", "At", "In"], 0, "On Mondays."),
      mc("(2)", ["always", "never", "school"], 0, "always have."),
      mc("(3)", ["always", "school", "weekend"], 0, "always play."),
      mc("(4)", ["sometimes", "always", "on"], 0, "sometimes visit."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi semana", "Cuenta lo que haces cada día de la semana, usando 'on + día' y always/sometimes/never.", "Describe tu semana completa en inglés.", "describir actividades semanales", "On Mondays, I go to school, On Saturdays, I play football, I sometimes visit my grandma"),

    SUMMARY("Resumen del Día 8", [
      "Puedes decir qué haces cada día: 'On Mondays, I...'",
      "Conoces: always, sometimes, never.",
    ]),
    INFO("Tarea para el Día 9", "Practica describir tu semana. Mañana: preguntas con 'do/does'."),
  ],
};

// ───────────────────────── DÍA 9 ─────────────────────────
const DAY9 = {
  title: "Día 9 — Do you like...? 🤔 · Preguntas con do/does",
  description: "Preguntas en presente simple con 'do/does'.",
  pedagogy: {
    objective: "Hacer y responder preguntas con 'do/does' en presente simple.",
    summary: "Do/does; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Sabes preguntar a un amigo qué aficiones tiene?"],
  },
  items: [
    TEXT("🤔 Hoy: preguntas con do/does. Do you like...?"),
    GRAMMAR("Do / Does", "Do you like...? (yo, tú, nosotros, ellos)\nDoes she/he like...? (él, ella)\nYes, I do. / No, I don't. Yes, she does. / No, she doesn't."),
    deck("Movers S2D9 — Do/does", [
      ["do you like", "te gusta", "Do you like football?", "phrase"],
      ["does she like", "le gusta (a ella)", "Does she like dancing?", "phrase"],
      ["yes, I do", "sí, me gusta", "Yes, I do!", "phrase"],
      ["no, I don't", "no, no me gusta", "No, I don't.", "phrase"],
      ["yes, she does", "sí, le gusta", "Yes, she does.", "phrase"],
      ["no, he doesn't", "no, no le gusta", "No, he doesn't.", "phrase"],
      ["what", "qué", "What do you like?", "word"],
      ["why", "por qué", "Why do you like it?", "word"],
      ["because", "porque", "Because it's fun!", "word"],
      ["fun", "divertido", "It's fun!", "adjective"],
    ]),
    vocabEx("Do / does 🤔", "Elige la opción correcta.", [
      mc("___ you like football?", ["Do", "Does"], 0, "Do you (tú)."),
      mc("___ she like dancing?", ["Do", "Does"], 1, "Does she (ella)."),
      mc("Do you like reading? Yes, I ___.", ["do", "does"], 0, "Yes, I do."),
      mc("Does he like swimming? No, he ___.", ["don't", "doesn't"], 1, "No, he doesn't."),
      mc("Why do you like it? ___ it's fun!", ["Because", "What"], 0, "Because it's fun."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha la pregunta y la respuesta", [
      mc("🎧 'Do you like football? Yes, I do!' ¿Le gusta el fútbol?", ["Sí", "No"], 0, "'Yes, I do!'"),
      mc("🎧 'Does she like dancing? No, she doesn't.' ¿Le gusta bailar a ella?", ["Sí", "No"], 1, "'No, she doesn't'."),
      mc("🎧 'Do you like homework? No, I don't. It's boring!' ¿Le gustan los deberes?", ["Sí", "No"], 1, "'No, I don't'."),
      mc("🎧 'Does he like reading? Yes, he does. It's fun!' ¿Le gusta leer a él?", ["Sí", "No"], 0, "'Yes, he does'."),
    ]),
    listening(4, "Listening · Parte 4 — Do/does", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. Do you like football? Yes, I do! Does she like dancing? No, she doesn't. Do you like homework? No, I don't. It's boring! Does he like reading? Yes, he does. It's fun!", []),

    READING_HEAD,
    readOpenCloze("Completa con do/does", "___ (1) you like football? Yes, I ___ (2)! What about your sister — ___ (3) she like sports too? No, she ___ (4). She prefers reading.", [
      fb("(1)", ["Do"], "Do you like…"),
      fb("(2)", ["do"], "Yes, I do."),
      fb("(3)", ["does"], "does she like."),
      fb("(4)", ["doesn't"], "she doesn't."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Pregunta y responde", "Practica preguntar y responder: 'Do you like...?' / 'Does he/she like...?'.", "Haz 3 preguntas con do/does y respóndelas.", "hacer preguntas con do/does", "Do you like football? Yes, I do. Does she like dancing? No, she doesn't."),

    SUMMARY("Resumen del Día 9", [
      "Do you/we/they...? Does he/she/it...?",
      "Yes, I do. / No, I don't. Yes, she does. / No, she doesn't.",
    ]),
    INFO("Tarea para el Día 10", "Repasa aficiones, love/like/hate, mi semana y do/does. Mañana: ¡repaso y segunda prueba!"),
  ],
};

// ───────────────────────── DÍA 10 ─────────────────────────
const DAY10 = {
  title: "Día 10 — Repaso de la semana + segunda prueba 🌟",
  description: "Repaso de aficiones, love/like/hate, mi semana y do/does. Segunda prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 2 antes de la prueba.",
    summary: "Repaso de aficiones y presente simple; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Puedes preguntar a alguien qué aficiones tiene y responder sobre las tuyas?"],
  },
  items: [
    TEXT("🌟 ¡Segunda semana de Movers terminada! Hoy repasamos todo."),
    GRAMMAR("Repaso de la Semana 2", "· Aficiones: drawing, dancing, reading, riding a bike. I like + -ing.\n· Grados: I love / I like / I hate.\n· Semana: on Mondays, always/sometimes/never.\n· Preguntas: Do you like...? Does she like...?"),
    deck("Movers S2D10 — Repaso mixto", [
      ["drawing", "dibujar", "I like drawing.", "hobby"],
      ["swimming", "nadar", "I love swimming!", "hobby"],
      ["hate", "odiar", "I hate homework.", "verb"],
      ["on Mondays", "los lunes", "On Mondays, I go to school.", "phrase"],
      ["always", "siempre", "I always play football.", "adverb"],
      ["do you like", "te gusta", "Do you like football?", "phrase"],
      ["yes, I do", "sí, me gusta", "Yes, I do!", "phrase"],
      ["does she like", "le gusta (ella)", "Does she like dancing?", "phrase"],
      ["boring", "aburrido", "Homework is boring.", "adjective"],
      ["fun", "divertido", "It's fun!", "adjective"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("🎨 I like ___.", ["drawing", "swimming"], 0, "drawing."),
      mc("😍 I ___ swimming!", ["love", "hate"], 0, "love."),
      mc("On ___, I go to school.", ["Mondays", "weekend"], 0, "Mondays."),
      mc("___ you like football?", ["Do", "Does"], 0, "Do."),
      mc("Does she like dancing? Yes, she ___.", ["do", "does"], 1, "does."),
    ]),

    LISTENING_HEAD,
    listenScene("Escucha la escena completa y repasa", [
      mc("🎧 'On Mondays, I like drawing at school.' ¿Qué le gusta hacer los lunes?", ["drawing", "swimming"], 0, "'I like drawing'."),
      mc("🎧 'I love swimming, but I hate homework.' ¿Qué odia?", ["swimming", "homework"], 1, "'I hate homework'."),
      mc("🎧 'Do you like football? Yes, I do! I always play on Saturdays.' ¿Cuándo juega al fútbol?", ["Saturdays", "Mondays"], 0, "'always play on Saturdays'."),
      mc("🎧 'Does she like dancing? Yes, she does. It's fun!' ¿Le gusta bailar?", ["Sí", "No"], 0, "'Yes, she does'."),
      mc("🎧 'I never do homework on Sundays — I love the weekend!' ¿Qué día no hace deberes?", ["Sunday", "Monday"], 0, "'never… on Sundays'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 2", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. On Mondays, I like drawing at school. I love swimming, but I hate homework. Do you like football? Yes, I do! I always play on Saturdays. Does she like dancing? Yes, she does. It's fun! I never do homework on Sundays — I love the weekend!", []),

    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: love, hate, always, do, does\n\nI ___ (1) swimming — it's my favourite hobby! But I ___ (2) homework, it's boring. I ___ (3) play football on Saturdays. Do you like reading? Yes, I ___ (4)! Does your sister like dancing? Yes, she ___ (5).", [
      fb("(1)", ["love"], "love swimming."),
      fb("(2)", ["hate"], "hate homework."),
      fb("(3)", ["always"], "always play."),
      fb("(4)", ["do"], "Yes, I do."),
      fb("(5)", ["does"], "Yes, she does."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina aficiones, grados de gusto, tu semana y preguntas con do/does.", "Habla 1-2 minutos combinando lo repasado.", "combinar aficiones, gustos, semana, preguntas", "I like drawing, I love swimming, On Mondays I go to school, Do you like football?"),

    SUMMARY("Resumen de la Semana 2", [
      "¡Enhorabuena! Terminaste la Semana 2: aficiones, love/like/hate, mi semana, y do/does.",
      "Ahora, tu segunda prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡mi casa y mi ciudad!",
    ]),
    INFO("Prueba de la Semana 2 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "Mis aficiones · love/like/hate · Mi semana · Preguntas con do/does",
  description: "Segunda semana de A1 Movers: aficiones con 'like + -ing', grados de gusto (love/like/hate), actividades semanales con 'on + día' y always/sometimes/never, y preguntas en presente simple con do/does. Cada día, las 4 destrezas con el formato real de Movers.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
