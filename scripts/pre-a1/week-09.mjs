/**
 * Pre-A1 Starters · Semana 9 — "¿Cómo te sientes? 😊 · I'm happy".
 * Los sentimientos básicos y 'How are you?'.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 41 ─────────────────────────
const DAY41 = {
  title: "Día 41 — ¿Cómo te sientes? 😊 · I'm happy",
  description: "Sentimientos básicos y 'How are you?'.",
  pedagogy: {
    objective: "Expresar sentimientos básicos en inglés.",
    summary: "Sentimientos; How are you?; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Cómo te sientes hoy? Dilo en inglés."],
  },
  items: [
    TEXT("😊 How are you today? ¡Hoy hablamos de sentimientos!"),
    GRAMMAR("How are you? I'm...", "How are you? (¿Cómo estás?)\nI'm happy. 😊 (Estoy feliz)\nI'm sad. 😢 (Estoy triste)"),
    deck("Pre-A1 S9D41 — Los sentimientos", [
      ["happy", "feliz/contento", "I'm happy. 😊", "feeling"],
      ["sad", "triste", "I'm sad. 😢", "feeling"],
      ["angry", "enfadado/a", "I'm angry. 😠", "feeling"],
      ["scared", "asustado/a", "I'm scared! 😱", "feeling"],
      ["excited", "emocionado/a", "I'm excited! 🤩", "feeling"],
      ["tired", "cansado/a", "I'm tired. 😴", "feeling"],
      ["surprised", "sorprendido/a", "I'm surprised! 😲", "feeling"],
      ["how", "cómo", "How are you?", "word"],
      ["fine", "bien", "I'm fine, thank you.", "word"],
      ["ok", "vale/bien", "I'm OK.", "word"],
    ]),
    vocabEx("¿Cómo te sientes? 😊", "Elige el sentimiento correcto.", [
      mc("😊 I'm ___.", ["happy", "sad", "angry"], 0, "😊 = happy."),
      mc("😢 I'm ___.", ["happy", "sad", "excited"], 1, "😢 = sad."),
      mc("😠 I'm ___.", ["angry", "tired", "scared"], 0, "😠 = angry."),
      mc("😱 I'm ___!", ["scared", "happy", "fine"], 0, "😱 = scared."),
      mc("🤩 I'm ___!", ["excited", "sad", "tired"], 0, "🤩 = excited."),
      mc("😴 I'm ___.", ["tired", "happy", "angry"], 0, "😴 = tired."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha el sentimiento", [
      mc("🎧 'How are you? I'm happy!' ¿Cómo está?", ["😊 feliz", "😢 triste"], 0, "'I'm happy' → 😊."),
      mc("🎧 'I'm sad. I miss my dog.' ¿Cómo está?", ["😊 feliz", "😢 triste"], 1, "'I'm sad' → 😢."),
      mc("🎧 'I'm tired. I want to sleep.' ¿Cómo está?", ["😴 cansado", "🤩 emocionado"], 0, "'I'm tired' → 😴."),
      mc("🎧 'I'm excited! It's my birthday!' ¿Cómo está?", ["🤩 emocionado", "😠 enfadado"], 0, "'I'm excited' → 🤩."),
      mc("🎧 'I'm scared of the dark.' ¿Cómo está?", ["😱 asustado", "😊 feliz"], 0, "'I'm scared' → 😱."),
    ]),
    listening(1, "Listening · Parte 1 — Los sentimientos", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. How are you? I'm happy! I'm sad. I miss my dog. I'm tired. I want to sleep. I'm excited! It's my birthday! I'm scared of the dark.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("😊 = 'happy'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
      mc("😢 = 'angry'. ¿Está bien?", ["Sí", "No"], 1, "No: 😢 es sad, no angry."),
      mc("'How are you?' significa '¿Cómo estás?'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis sentimientos", "Practica preguntar y responder: 'How are you?' → 'I'm happy/sad/tired...'.", "Practica 3 preguntas y respuestas sobre sentimientos.", "expresar sentimientos", "How are you? I'm happy. I'm tired."),

    SUMMARY("Resumen del Día 41", [
      "Ya conoces: happy, sad, angry, scared, excited, tired, surprised.",
      "Puedes preguntar y responder: 'How are you?' → 'I'm...'",
    ]),
    INFO("Tarea para el Día 42", "Practica expresar tus sentimientos. Mañana: los meses del año."),
  ],
};

// ───────────────────────── DÍA 42 ─────────────────────────
const DAY42 = {
  title: "Día 42 — Los meses del año 📆 · My birthday is in...",
  description: "Los meses del año y decir cuándo es tu cumpleaños.",
  pedagogy: {
    objective: "Nombrar meses y decir el mes de tu cumpleaños.",
    summary: "Meses del año; My birthday is in...; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿En qué mes es tu cumpleaños?"],
  },
  items: [
    TEXT("📆 Hoy aprendemos los MESES del año."),
    GRAMMAR("My birthday is in...", "January, February, March, April, May, June, July, August, September, October, November, December.\nMy birthday is in June. (Mi cumpleaños es en junio)"),
    deck("Pre-A1 S9D42 — Los meses", [
      ["January", "enero", "My birthday is in January.", "month"],
      ["March", "marzo", "It's March.", "month"],
      ["June", "junio", "Summer starts in June.", "month"],
      ["August", "agosto", "It's hot in August.", "month"],
      ["October", "octubre", "Halloween is in October.", "month"],
      ["December", "diciembre", "Christmas is in December.", "month"],
      ["month", "mes", "Twelve months in a year.", "word"],
      ["year", "año", "A happy new year!", "word"],
      ["birthday", "cumpleaños", "My birthday is in June.", "word"],
      ["summer", "verano", "It's summer in June!", "season"],
    ]),
    vocabEx("¿Qué mes es? 📆", "Elige el mes correcto.", [
      mc("Primer mes del año: ___", ["January", "December", "June"], 0, "January."),
      mc("Mes de Halloween: ___", ["October", "March", "August"], 0, "October."),
      mc("Mes de Navidad: ___", ["December", "January", "June"], 0, "December."),
      mc("How many months in a year? ___", ["ten", "twelve"], 1, "twelve months."),
      mc("Mes de verano: ___", ["August", "January", "March"], 0, "August."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha el mes", [
      mc("🎧 'My birthday is in June.' ¿En qué mes es su cumpleaños?", ["June", "January", "October"], 0, "'in June' → June."),
      mc("🎧 'Christmas is in December.' ¿Cuándo es Navidad?", ["December", "August"], 0, "'in December'."),
      mc("🎧 'It's hot in August.' ¿Cuándo hace calor?", ["August", "January"], 0, "'in August'."),
      mc("🎧 'There are twelve months in a year.' ¿Cuántos meses hay?", ["ten", "twelve"], 1, "'twelve months'."),
    ]),
    listening(2, "Listening · Parte 2 — Los meses", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. My birthday is in June. Christmas is in December. It's hot in August. There are twelve months in a year.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("When is Christmas? In ___.", ["December"], "December."),
      fb("How many months in a year? ___", ["twelve"], "twelve."),
      fb("My birthday is in ___. (junio)", ["June"], "June."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi cumpleaños", "Di en qué mes es tu cumpleaños y el de tu familia.", "Di el mes de tu cumpleaños y el de 2 familiares.", "hablar de meses y cumpleaños", "My birthday is in June, My mum's birthday is in March"),

    SUMMARY("Resumen del Día 42", [
      "Ya conoces los 12 meses del año: January a December.",
      "Puedes decir cuándo es tu cumpleaños: 'My birthday is in...'",
    ]),
    INFO("Tarea para el Día 43", "Practica los meses del año. Mañana: las estaciones."),
  ],
};

// ───────────────────────── DÍA 43 ─────────────────────────
const DAY43 = {
  title: "Día 43 — Las estaciones 🍂 · Spring, summer, autumn, winter",
  description: "Las cuatro estaciones del año.",
  pedagogy: {
    objective: "Nombrar las 4 estaciones y asociarlas con el tiempo.",
    summary: "Las estaciones; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Cuál es tu estación favorita?"],
  },
  items: [
    TEXT("🍂 ¡Las cuatro estaciones! Spring, summer, autumn, winter."),
    GRAMMAR("Las estaciones", "spring 🌸 (primavera), summer ☀️ (verano), autumn 🍂 (otoño), winter ❄️ (invierno).\nIt's warm in spring. It's hot in summer."),
    deck("Pre-A1 S9D43 — Las estaciones", [
      ["spring", "primavera", "It's spring. 🌸", "season"],
      ["summer", "verano", "It's summer. ☀️", "season"],
      ["autumn", "otoño", "It's autumn. 🍂", "season"],
      ["winter", "invierno", "It's winter. ❄️", "season"],
      ["warm", "templado/cálido", "It's warm in spring.", "weather"],
      ["leaves", "hojas", "The leaves are falling. 🍂", "nature"],
      ["flowers", "flores", "Flowers in spring! 🌸", "nature"],
      ["snowman", "muñeco de nieve", "Let's build a snowman! ⛄", "word"],
      ["favourite", "favorito", "My favourite season.", "adjective"],
      ["season", "estación (del año)", "Four seasons.", "word"],
    ]),
    vocabEx("¿Qué estación es? 🍂", "Elige la estación correcta.", [
      mc("🌸 = ___", ["spring", "summer", "winter"], 0, "🌸 = spring."),
      mc("☀️ = ___", ["summer", "spring", "autumn"], 0, "☀️ = summer."),
      mc("🍂 = ___", ["autumn", "winter", "spring"], 0, "🍂 = autumn."),
      mc("❄️ = ___", ["winter", "summer", "autumn"], 0, "❄️ = winter."),
      mc("⛄ ¿En qué estación construimos un muñeco de nieve?", ["winter", "summer"], 0, "winter."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha la estación", [
      mc("🎧 'It's spring. I can see flowers.' ¿Qué estación es?", ["🌸 primavera", "❄️ invierno"], 0, "'spring' → 🌸."),
      mc("🎧 'It's summer. It's hot!' ¿Qué estación es?", ["☀️ verano", "🍂 otoño"], 0, "'summer' → ☀️."),
      mc("🎧 'It's autumn. The leaves are falling.' ¿Qué estación es?", ["🍂 otoño", "🌸 primavera"], 0, "'autumn' → 🍂."),
      mc("🎧 'It's winter. Let's build a snowman!' ¿Qué estación es?", ["❄️ invierno", "☀️ verano"], 0, "'winter' → ❄️."),
    ]),
    listening(3, "Listening · Parte 3 — Las estaciones", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. It's spring. I can see flowers. It's summer. It's hot! It's autumn. The leaves are falling. It's winter. Let's build a snowman!", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("🌸 = ___", ["spring", "winter"], 0, "spring."),
      mc("❄️ = ___", ["winter", "summer"], 0, "winter."),
      mc("How many seasons? ___", ["three", "four"], 1, "four."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi estación favorita", "Describe las 4 estaciones y di cuál es tu favorita.", "Nombra las 4 estaciones y di tu favorita.", "hablar de las estaciones", "spring, summer, autumn, winter, My favourite season is summer"),

    SUMMARY("Resumen del Día 43", [
      "Ya conoces las 4 estaciones: spring, summer, autumn, winter.",
      "Puedes decir tu estación favorita.",
    ]),
    INFO("Tarea para el Día 44", "Repasa sentimientos, meses y estaciones. Mañana: la naturaleza."),
  ],
};

// ───────────────────────── DÍA 44 ─────────────────────────
const DAY44 = {
  title: "Día 44 — La naturaleza 🌳 · Sun, moon, stars",
  description: "Vocabulario básico de la naturaleza: sol, luna, estrellas, árboles, flores.",
  pedagogy: {
    objective: "Nombrar elementos básicos de la naturaleza.",
    summary: "Naturaleza; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué ves en el cielo de noche?"],
  },
  items: [
    TEXT("🌳 ¡Hoy miramos la naturaleza! Look up at the sky!"),
    GRAMMAR("Repaso: It's a/the...", "I can see the sun. ☀️ (Puedo ver el sol)\nI can see the moon. 🌙 (Puedo ver la luna)"),
    deck("Pre-A1 S9D44 — La naturaleza", [
      ["sun", "sol", "I can see the sun. ☀️", "nature"],
      ["moon", "luna", "I can see the moon. 🌙", "nature"],
      ["stars", "estrellas", "I can see the stars. ⭐", "nature"],
      ["sky", "cielo", "Look at the sky! 🌌", "nature"],
      ["tree", "árbol", "It's a big tree. 🌳", "nature"],
      ["flower", "flor", "A pretty flower. 🌸", "nature"],
      ["grass", "hierba", "Green grass. 🌱", "nature"],
      ["cloud", "nube", "A white cloud. ☁️", "nature"],
      ["rainbow", "arcoíris", "A colourful rainbow! 🌈", "nature"],
      ["sea", "mar", "The blue sea. 🌊", "nature"],
    ]),
    vocabEx("La naturaleza 🌳", "Elige la palabra correcta.", [
      mc("☀️ I can see the ___.", ["sun", "moon", "stars"], 0, "☀️ = sun."),
      mc("🌙 I can see the ___.", ["sun", "moon", "sky"], 1, "🌙 = moon."),
      mc("⭐ I can see the ___.", ["stars", "sun", "tree"], 0, "⭐ = stars."),
      mc("🌳 It's a big ___.", ["tree", "flower", "cloud"], 0, "🌳 = tree."),
      mc("🌈 = ___", ["rainbow", "sun", "sea"], 0, "🌈 = rainbow."),
      mc("🌊 = ___", ["sea", "sky", "grass"], 0, "🌊 = sea."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe", [
      fb("🎧 'I can see the sun in the sky.' Escribe: ___", ["sun"], "sun."),
      fb("🎧 'Look! A beautiful rainbow!' Escribe: ___", ["rainbow"], "rainbow."),
      fb("🎧 'I can see the moon and the stars.' Escribe: ___", ["moon"], "moon."),
      fb("🎧 'There's a big tree in the park.' Escribe: ___", ["tree"], "tree."),
    ]),
    listening(4, "Listening · Parte 4 — La naturaleza", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I can see the sun in the sky. Look! A beautiful rainbow! I can see the moon and the stars. There's a big tree in the park.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("s_n (sol)", ["sun"], "sun."),
      fb("m__n (luna)", ["moon"], "moon."),
      fb("tr__ (árbol)", ["tree"], "tree."),
      fb("r__nb_w (arcoíris)", ["rainbow"], "rainbow."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · La naturaleza", "Describe lo que ves en el cielo y en la naturaleza a tu alrededor.", "Describe 4 elementos de la naturaleza en inglés.", "describir la naturaleza", "I can see the sun, I can see a tree, I can see flowers"),

    SUMMARY("Resumen del Día 44", [
      "Ya conoces: sun, moon, stars, sky, tree, flower, grass, cloud, rainbow, sea.",
      "Puedes describir lo que ves en la naturaleza.",
    ]),
    INFO("Tarea para el Día 45", "Repasa sentimientos, meses, estaciones y naturaleza. Mañana: ¡repaso y novena prueba!"),
  ],
};

// ───────────────────────── DÍA 45 ─────────────────────────
const DAY45 = {
  title: "Día 45 — Repaso de la semana + novena prueba 🌟",
  description: "Repaso de sentimientos, meses, estaciones y naturaleza. Novena prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 9 antes de la prueba.",
    summary: "Repaso de sentimientos, meses, estaciones y naturaleza; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué mes prefieres y por qué?"],
  },
  items: [
    TEXT("🌟 ¡Novena semana terminada! Hoy repasamos: sentimientos, meses, estaciones y naturaleza."),
    GRAMMAR("Repaso de la Semana 9", "· Sentimientos: happy, sad, angry, scared, excited, tired. 'How are you? I'm...'\n· Meses: January-December. 'My birthday is in...'\n· Estaciones: spring, summer, autumn, winter.\n· Naturaleza: sun, moon, stars, tree, flower, rainbow."),
    deck("Pre-A1 S9D45 — Repaso mixto", [
      ["happy", "feliz", "I'm happy. 😊", "feeling"],
      ["tired", "cansado/a", "I'm tired. 😴", "feeling"],
      ["June", "junio", "My birthday is in June.", "month"],
      ["December", "diciembre", "Christmas is in December.", "month"],
      ["summer", "verano", "It's summer. ☀️", "season"],
      ["winter", "invierno", "It's winter. ❄️", "season"],
      ["sun", "sol", "I can see the sun.", "nature"],
      ["tree", "árbol", "A big tree.", "nature"],
      ["how", "cómo", "How are you?", "word"],
      ["favourite", "favorito", "My favourite season.", "adjective"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("😊 I'm ___.", ["happy", "sad"], 0, "happy."),
      mc("How are you? I'm ___.", ["fine", "December"], 0, "fine."),
      mc("Christmas is in ___.", ["December", "June"], 0, "December."),
      mc("☀️ It's ___.", ["summer", "winter"], 0, "summer."),
      mc("🌳 It's a ___.", ["tree", "sun"], 0, "tree."),
      mc("🌈 = ___", ["rainbow", "cloud"], 0, "rainbow."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'How are you? I'm happy! My birthday is in June.' ¿Cómo está?", ["😊 feliz", "😢 triste"], 0, "'happy' → 😊."),
      mc("🎧 'It's summer. I can see the sun.' ¿Qué estación es?", ["☀️ verano", "❄️ invierno"], 0, "'summer' → ☀️."),
      mc("🎧 'It's winter. Christmas is in December.' ¿Qué mes menciona?", ["December", "June"], 0, "'December'."),
      mc("🎧 'I can see a rainbow and flowers in spring.' ¿Qué estación es?", ["🌸 primavera", "🍂 otoño"], 0, "'spring' → 🌸."),
    ]),
    listening(1, "Listening · Repaso de la Semana 9", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. How are you? I'm happy! My birthday is in June. It's summer. I can see the sun. It's winter. Christmas is in December. I can see a rainbow and flowers in spring.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("h_ppy (feliz)", ["happy"], "happy."),
      fb("s_mm_r (verano)", ["summer"], "summer."),
      fb("D_c_mb_r (diciembre)", ["December"], "December."),
      fb("s_n (sol)", ["sun"], "sun."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: di cómo te sientes, cuándo es tu cumpleaños, tu estación favorita, y algo de la naturaleza.", "Habla 1-2 minutos combinando sentimientos, meses, estaciones y naturaleza.", "combinar sentimientos, meses, estaciones, naturaleza", "I'm happy, My birthday is in June, My favourite season is summer, I can see the sun"),

    SUMMARY("Resumen de la Semana 9", [
      "¡Enhorabuena! Terminaste la Semana 9: sentimientos, meses, estaciones y naturaleza.",
      "Ahora, tu novena prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡repaso grande de todo lo aprendido!",
    ]),
    INFO("Prueba de la Semana 9 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Sentimientos · Meses del año · Estaciones · Naturaleza",
  description: "Novena semana: sentimientos básicos con 'How are you? I'm...', los meses del año y 'My birthday is in...', las cuatro estaciones, y vocabulario de naturaleza (sol, luna, estrellas, árboles). Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
