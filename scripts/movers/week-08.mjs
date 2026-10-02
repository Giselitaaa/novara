/**
 * A1 Movers · Semana 8 — "Ropa y tiempo 👕 · What are you wearing?".
 * Ropa con presente continuo, y el tiempo con más detalle.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY36 = {
  title: "Día 36 — ¿Qué llevas puesto? 👕 · What are you wearing?",
  description: "Ropa con presente continuo.",
  pedagogy: { objective: "Describir ropa con presente continuo.", summary: "Ropa; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué llevas puesto ahora?"] },
  items: [
    TEXT("👕 What are you wearing today?"),
    GRAMMAR("What are you wearing?", "What + am/is/are + persona + wearing?\nShe's wearing a yellow jacket."),
    deck("Movers S8D36 — Ropa", [
      ["jacket", "chaqueta", "She's wearing a jacket.", "clothes"],
      ["jumper", "jersey", "He's wearing a jumper.", "clothes"],
      ["scarf", "bufanda", "A warm scarf.", "clothes"],
      ["gloves", "guantes", "Wear your gloves!", "clothes"],
      ["boots", "botas", "I'm wearing boots.", "clothes"],
      ["cap", "gorra", "A baseball cap.", "clothes"],
      ["coat", "abrigo", "A winter coat.", "clothes"],
      ["wearing", "llevando puesto", "What are you wearing?", "word"],
      ["striped", "de rayas", "A striped jumper.", "adjective"],
      ["spotted", "de lunares", "A spotted scarf.", "adjective"],
    ]),
    vocabEx("Ropa 👕", "Elige la opción correcta.", [
      mc("🧥 = ___", ["jacket", "boots"], 0, "jacket."),
      mc("🧣 = ___", ["scarf", "gloves"], 0, "scarf."),
      mc("🧤 = ___", ["gloves", "cap"], 0, "gloves."),
      mc("What are you ___?", ["wearing", "wear"], 0, "wearing."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la ropa", [
      mc("🎧 'She's wearing a striped jumper.' ¿Qué lleva?", ["striped jumper", "spotted scarf"], 0, "'striped jumper'."),
      mc("🎧 'He's wearing boots and a coat.' ¿Qué lleva?", ["boots and coat", "gloves and cap"], 0, "'boots and a coat'."),
    ]),
    listening(1, "Listening · Parte 1 — Ropa", "Escucha y responde.", "Listen and match. She's wearing a striped jumper. He's wearing boots and a coat.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Cubre las manos cuando hace frío: ___", ["gloves", "boots"], 0, "gloves."),
      mc("Cubre el cuello: ___", ["scarf", "cap"], 0, "scarf."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi ropa hoy", "Describe tu ropa hoy con presente continuo.", "Describe 4 prendas que llevas hoy.", "describir ropa con presente continuo", "I'm wearing a jacket, I'm wearing boots"),
    SUMMARY("Resumen del Día 36", ["Ya conoces: jacket, jumper, scarf, gloves, boots, cap, coat.", "Puedes preguntar 'What are you wearing?'"]),
    INFO("Tarea para el Día 37", "Mañana: el tiempo con más detalle."),
  ],
};

const DAY37 = {
  title: "Día 37 — El tiempo 🌦️ · It's windy and cold",
  description: "El tiempo atmosférico con más detalle.",
  pedagogy: { objective: "Describir el tiempo con detalle.", summary: "El tiempo; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué tiempo hace hoy?"] },
  items: [
    TEXT("🌦️ ¿Qué tiempo hace? Let's check the weather!"),
    GRAMMAR("El tiempo con detalle", "It's foggy. It's stormy. It's freezing.\nWhat's the weather like today?"),
    deck("Movers S8D37 — El tiempo", [
      ["foggy", "con niebla", "It's foggy today.", "weather"],
      ["stormy", "con tormenta", "It's stormy.", "weather"],
      ["freezing", "helado/muy frío", "It's freezing!", "weather"],
      ["mild", "templado", "It's mild today.", "weather"],
      ["thunder", "trueno", "I can hear thunder.", "weather"],
      ["lightning", "relámpago", "Look at the lightning!", "weather"],
      ["degrees", "grados", "It's twenty degrees.", "word"],
      ["weather forecast", "pronóstico del tiempo", "Check the weather forecast.", "phrase"],
      ["what's the weather like", "qué tiempo hace", "What's the weather like?", "phrase"],
      ["temperature", "temperatura", "The temperature is high.", "word"],
    ]),
    vocabEx("El tiempo 🌦️", "Elige la opción correcta.", [
      mc("🌫️ = ___", ["foggy", "stormy"], 0, "foggy."),
      mc("⛈️ = ___", ["stormy", "mild"], 0, "stormy."),
      mc("🥶 It's ___!", ["freezing", "mild"], 0, "freezing."),
      mc("What's the ___ like today?", ["weather", "temperature"], 0, "weather."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe el tiempo", [
      fb("🎧 'It's foggy, be careful driving.' Escribe: ___", ["foggy"], "foggy."),
      fb("🎧 'It's freezing! Wear your coat.' Escribe: ___", ["freezing"], "freezing."),
    ]),
    listening(2, "Listening · Parte 2 — El tiempo", "Escucha y responde.", "Listen and write. It's foggy, be careful driving. It's freezing! Wear your coat.", []),
    READING_HEAD,
    readStory("Lee y responde Sí/No", "Today the weather is strange. In the morning, it was foggy. Then it became stormy with thunder and lightning. By the afternoon, it was freezing — only two degrees!", [
      mc("It was sunny in the morning. ¿Está bien?", ["Sí", "No"], 1, "'foggy', no sunny."),
      mc("It was two degrees in the afternoon. ¿Está bien?", ["Sí", "No"], 0, "'only two degrees' — Sí."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · El tiempo de hoy", "Describe el tiempo de hoy con detalle.", "Describe el tiempo con 3 palabras nuevas.", "describir el tiempo con detalle", "It's foggy, It's freezing, It's mild"),
    SUMMARY("Resumen del Día 37", ["Ya conoces: foggy, stormy, freezing, mild, thunder, lightning, degrees.", "Puedes preguntar 'What's the weather like?'"]),
    INFO("Tarea para el Día 38", "Mañana: combinamos ropa y tiempo."),
  ],
};

const DAY38 = {
  title: "Día 38 — Ropa según el tiempo 🧥 · Dress for the weather",
  description: "Combinar ropa apropiada con el tiempo.",
  pedagogy: { objective: "Elegir ropa apropiada según el tiempo.", summary: "Ropa y tiempo combinados; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Qué ropa llevas cuando hace frío?"] },
  items: [
    TEXT("🧥 ¿Qué ropa llevas según el tiempo?"),
    GRAMMAR("Ropa según el tiempo", "When it's cold, I wear a coat. When it's hot, I wear a T-shirt."),
    deck("Movers S8D38 — Ropa y tiempo", [
      ["when", "cuando", "When it's cold, I wear a coat.", "word"],
      ["sunglasses", "gafas de sol", "I wear sunglasses when it's sunny.", "clothes"],
      ["umbrella", "paraguas", "I take an umbrella when it's rainy.", "object"],
      ["sandals", "sandalias", "I wear sandals in summer.", "clothes"],
      ["warm clothes", "ropa de abrigo", "Wear warm clothes!", "phrase"],
      ["light clothes", "ropa ligera", "Wear light clothes in summer.", "phrase"],
      ["need", "necesitar", "I need my umbrella.", "verb"],
      ["wet", "mojado/a", "I'm wet!", "adjective"],
      ["dry", "seco/a", "Stay dry!", "adjective"],
      ["appropriate", "apropiado/a", "Wear appropriate clothes.", "adjective"],
    ]),
    vocabEx("Ropa y tiempo 🧥", "Elige la opción correcta.", [
      mc("☀️ I wear ___ when it's sunny.", ["sunglasses", "boots"], 0, "sunglasses."),
      mc("🌧️ I take an ___ when it's rainy.", ["umbrella", "cap"], 0, "umbrella."),
      mc("When it's cold, I wear ___ clothes.", ["warm", "light"], 0, "warm."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la ropa", [
      mc("🎧 'When it's sunny, I always wear sunglasses.' ¿Qué lleva?", ["sunglasses", "umbrella"], 0, "'sunglasses'."),
      mc("🎧 'It's rainy, so I need my umbrella.' ¿Qué necesita?", ["umbrella", "sandals"], 0, "'umbrella'."),
    ]),
    listening(3, "Listening · Parte 3 — Ropa y tiempo", "Escucha y responde.", "Listen. When it's sunny, I always wear sunglasses. It's rainy, so I need my umbrella.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "When it's cold, I wear ___ (1) clothes like a coat and gloves. When it's sunny, I wear ___ (2). When it's rainy, I take my ___ (3).", [
      mc("(1)", ["warm", "light"], 0, "warm clothes."),
      mc("(2)", ["sunglasses", "gloves"], 0, "sunglasses."),
      mc("(3)", ["umbrella", "sandals"], 0, "umbrella."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Ropa según el tiempo", "Describe qué ropa llevas en diferentes tiempos.", "Di 3 frases combinando tiempo y ropa.", "combinar ropa y tiempo", "When it's cold, I wear a coat, When it's sunny, I wear sunglasses"),
    SUMMARY("Resumen del Día 38", ["Puedes elegir ropa apropiada según el tiempo."]),
    INFO("Tarea para el Día 39", "Mañana: mis vacaciones de verano."),
  ],
};

const DAY39 = {
  title: "Día 39 — Vacaciones de verano 🏖️ · Holiday clothes and activities",
  description: "Vocabulario de vacaciones de verano.",
  pedagogy: { objective: "Hablar de actividades y ropa de vacaciones.", summary: "Vacaciones; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué te gusta hacer en vacaciones?"] },
  items: [
    TEXT("🏖️ ¡Vacaciones de verano! Let's go to the beach."),
    GRAMMAR("De vacaciones", "I'm going on holiday. I'm going to the beach.\nI'm packing my swimsuit."),
    deck("Movers S8D39 — Vacaciones", [
      ["holiday", "vacaciones", "I'm going on holiday!", "word"],
      ["beach", "playa", "Let's go to the beach.", "place"],
      ["swimsuit", "bañador", "I'm packing my swimsuit.", "clothes"],
      ["sunscreen", "protector solar", "Don't forget sunscreen!", "object"],
      ["suitcase", "maleta", "Pack your suitcase.", "object"],
      ["sandcastle", "castillo de arena", "Build a sandcastle!", "word"],
      ["pack", "hacer la maleta", "I'm packing my bag.", "verb"],
      ["relax", "relajarse", "I like to relax on holiday.", "verb"],
      ["abroad", "al extranjero", "We're going abroad.", "word"],
      ["postcard", "postal", "Send me a postcard!", "object"],
    ]),
    vocabEx("Vacaciones 🏖️", "Elige la opción correcta.", [
      mc("🏖️ = ___", ["beach", "suitcase"], 0, "beach."),
      mc("🩱 = ___", ["swimsuit", "sunscreen"], 0, "swimsuit."),
      mc("🧳 = ___", ["suitcase", "postcard"], 0, "suitcase."),
      mc("I'm ___ my bag. (haciendo la maleta)", ["packing", "relaxing"], 0, "packing."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha sobre las vacaciones", [
      mc("🎧 'I'm packing my swimsuit and sunscreen for the beach.' ¿Adónde va?", ["beach", "mountain"], 0, "'for the beach'."),
      mc("🎧 'We're going abroad this summer!' ¿Adónde van?", ["abroad", "home"], 0, "'going abroad'."),
    ]),
    listening(4, "Listening · Parte 4 — Vacaciones", "Escucha y responde.", "Listen. I'm packing my swimsuit and sunscreen for the beach. We're going abroad this summer!", []),
    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: beach, swimsuit, sunscreen, suitcase\n\nI'm packing my ___ (1) for the ___ (2). Don't forget the ___ (3)! My ___ (4) is almost full.", [
      fb("(1)", ["swimsuit"], "swimsuit."), fb("(2)", ["beach"], "beach."), fb("(3)", ["sunscreen"], "sunscreen."), fb("(4)", ["suitcase"], "suitcase."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis vacaciones", "Describe tus vacaciones ideales.", "Describe tus vacaciones ideales con 4 palabras nuevas.", "hablar de vacaciones", "I'm going to the beach, I'm packing my swimsuit"),
    SUMMARY("Resumen del Día 39", ["Ya conoces: holiday, beach, swimsuit, sunscreen, suitcase, pack, relax."]),
    INFO("Tarea para el Día 40", "Mañana: ¡repaso y octava prueba!"),
  ],
};

const DAY40 = {
  title: "Día 40 — Repaso de la semana + octava prueba 🌟",
  description: "Repaso de ropa, tiempo y vacaciones. Octava prueba.",
  pedagogy: { objective: "Repasar la Semana 8.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["¿Qué ropa necesitas para tus vacaciones?"] },
  items: [
    TEXT("🌟 ¡Octava semana terminada! Repasamos: ropa, tiempo y vacaciones."),
    GRAMMAR("Repaso de la Semana 8", "jacket, boots, scarf. foggy, stormy, freezing. holiday, beach, swimsuit, packing."),
    deck("Movers S8D40 — Repaso mixto", [
      ["jacket", "chaqueta", "She's wearing a jacket.", "clothes"],
      ["freezing", "helado", "It's freezing!", "weather"],
      ["umbrella", "paraguas", "I need my umbrella.", "object"],
      ["beach", "playa", "Let's go to the beach.", "place"],
      ["swimsuit", "bañador", "My swimsuit.", "clothes"],
      ["packing", "haciendo la maleta", "I'm packing.", "verb"],
      ["wearing", "llevando puesto", "What are you wearing?", "word"],
      ["holiday", "vacaciones", "On holiday.", "word"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("🧥 = ___", ["jacket", "boots"], 0, "jacket."),
      mc("🥶 It's ___!", ["freezing", "mild"], 0, "freezing."),
      mc("🏖️ = ___", ["beach", "suitcase"], 0, "beach."),
      mc("I'm ___ my bag.", ["packing", "relaxing"], 0, "packing."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'It's freezing, so I'm wearing a jacket and boots.' ¿Qué tiempo hace?", ["freezing", "sunny"], 0, "'freezing'."),
      mc("🎧 'I'm packing my swimsuit for the beach.' ¿Adónde va?", ["beach", "mountain"], 0, "'for the beach'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 8", "Escucha y responde.", "Listen and look. It's freezing, so I'm wearing a jacket and boots. I'm packing my swimsuit for the beach.", []),
    READING_HEAD,
    readWrite("Completa las palabras", [fb("j_ck_t (chaqueta)", ["jacket"], "jacket."), fb("fr__z_ng (helado)", ["freezing"], "freezing."), fb("b__ch (playa)", ["beach"], "beach.")]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina ropa, tiempo y vacaciones.", "Habla 1-2 minutos combinando lo repasado.", "combinar ropa, tiempo, vacaciones", "I'm wearing a jacket, It's freezing, I'm going to the beach"),
    SUMMARY("Resumen de la Semana 8", ["¡Enhorabuena! Terminaste la Semana 8.", "Ahora, tu octava prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡el pasado — mis aventuras!"]),
    INFO("Prueba de la Semana 8 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "Ropa y tiempo · What are you wearing? · Vacaciones",
  description: "Octava semana de A1 Movers: ropa con presente continuo, el tiempo con más detalle, combinar ropa según el tiempo, y vocabulario de vacaciones de verano.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
