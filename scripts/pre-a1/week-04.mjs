/**
 * Pre-A1 Starters · Semana 4 — "La ropa 👕 · I'm wearing...".
 * La ropa básica y la estructura "I'm wearing..." (llevo puesto).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 16 ─────────────────────────
const DAY16 = {
  title: "Día 16 — La ropa 👕 · I'm wearing...",
  description: "Las prendas de ropa básicas y 'I'm wearing...'.",
  pedagogy: {
    objective: "Nombrar prendas de ropa y usar 'I'm wearing'.",
    summary: "Ropa; I'm wearing...; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Puedes decir qué ropa llevas hoy en inglés?"],
  },
  items: [
    TEXT("👕 ¡Hoy nos vestimos! What are you wearing today?"),
    GRAMMAR("I'm wearing...", "I'm wearing = Llevo puesto.\nI'm wearing a red T-shirt. 👕 (Llevo una camiseta roja)"),
    deck("Pre-A1 S4D16 — La ropa", [
      ["T-shirt", "camiseta", "I'm wearing a T-shirt. 👕", "clothes"],
      ["trousers", "pantalones", "I'm wearing trousers. 👖", "clothes"],
      ["dress", "vestido", "I'm wearing a dress. 👗", "clothes"],
      ["shoes", "zapatos", "I'm wearing shoes. 👟", "clothes"],
      ["socks", "calcetines", "I'm wearing socks. 🧦", "clothes"],
      ["hat", "sombrero/gorro", "I'm wearing a hat. 🧢", "clothes"],
      ["jumper", "jersey", "I'm wearing a jumper. 🧥", "clothes"],
      ["wearing", "llevando puesto", "I'm wearing a hat.", "word"],
      ["today", "hoy", "Today I'm wearing shoes.", "word"],
      ["cold", "frío", "It's cold. I need a jumper. 🥶", "adjective"],
    ]),
    vocabEx("¿Qué ropa es? 👕", "Elige la prenda correcta.", [
      mc("👕 I'm wearing a ___.", ["T-shirt", "hat", "shoes"], 0, "👕 = T-shirt."),
      mc("👖 I'm wearing ___.", ["trousers", "socks", "a dress"], 0, "👖 = trousers."),
      mc("👗 I'm wearing a ___.", ["hat", "dress", "jumper"], 1, "👗 = dress."),
      mc("👟 I'm wearing ___.", ["shoes", "socks", "trousers"], 0, "👟 = shoes."),
      mc("🧦 I'm wearing ___.", ["shoes", "socks", "a hat"], 1, "🧦 = socks."),
      mc("🧢 I'm wearing a ___.", ["hat", "T-shirt", "dress"], 0, "🧢 = hat."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y viste al niño/a", [
      mc("🎧 'I'm wearing a red T-shirt.' ¿Qué lleva?", ["👕 camiseta roja", "👗 vestido rojo", "🧢 gorro rojo"], 0, "'a red T-shirt' → 👕."),
      mc("🎧 'I'm wearing blue trousers.' ¿Qué lleva?", ["👖 pantalones azules", "🧦 calcetines azules", "👟 zapatos azules"], 0, "'blue trousers' → 👖."),
      mc("🎧 'I'm wearing a yellow dress.' ¿Qué lleva?", ["👗 vestido amarillo", "👕 camiseta amarilla", "🧥 jersey amarillo"], 0, "'a yellow dress' → 👗."),
      mc("🎧 'I'm wearing green shoes.' ¿Qué lleva?", ["👟 zapatos verdes", "🧦 calcetines verdes", "👖 pantalones verdes"], 0, "'green shoes' → 👟."),
      mc("🎧 'It's cold. I'm wearing a jumper.' ¿Por qué lleva jersey?", ["hace frío", "hace calor", "está jugando"], 0, "'It's cold' → hace frío."),
    ]),
    listening(1, "Listening · Parte 1 — La ropa", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I'm wearing a red T-shirt. I'm wearing blue trousers. I'm wearing a yellow dress. I'm wearing green shoes. It's cold. I'm wearing a jumper.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("👕 = 'T-shirt'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 👕 es T-shirt."),
      mc("👟 = 'socks'. ¿Está bien?", ["Sí", "No"], 1, "No: 👟 es shoes, no socks."),
      mc("'I'm wearing a hat' significa 'Llevo un sombrero'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
      mc("👗 = 'trousers'. ¿Está bien?", ["Sí", "No"], 1, "No: 👗 es dress, no trousers."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi ropa", "Mira tu ropa de hoy y descríbela: 'I'm wearing...'.", "Describe 4 prendas que llevas puestas hoy.", "describir la ropa", "I'm wearing a T-shirt, I'm wearing trousers, I'm wearing shoes"),

    SUMMARY("Resumen del Día 16", [
      "Ya conoces: T-shirt, trousers, dress, shoes, socks, hat, jumper.",
      "Puedes decir qué ropa llevas: 'I'm wearing...'",
    ]),
    INFO("Tarea para el Día 17", "Practica describir tu ropa. Mañana: más colores y ropa combinados."),
  ],
};

// ───────────────────────── DÍA 17 ─────────────────────────
const DAY17 = {
  title: "Día 17 — Ropa y colores 🌈 · My blue shoes",
  description: "Combinar colores y ropa: 'my blue shoes', 'a green hat'.",
  pedagogy: {
    objective: "Combinar adjetivos de color con prendas de ropa.",
    summary: "Colores + ropa; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Puedes describir la ropa de un amigo usando colores?"],
  },
  items: [
    TEXT("🌈 Hoy combinamos colores y ropa: my blue shoes, a green hat..."),
    GRAMMAR("Color + ropa", "El color va ANTES de la prenda: color + ropa.\nMy blue shoes. 👟 (Mis zapatos azules)\nA green hat. 🧢 (Un gorro verde)"),
    deck("Pre-A1 S4D17 — Ropa y colores", [
      ["blue shoes", "zapatos azules", "My blue shoes. 👟", "clothes"],
      ["red dress", "vestido rojo", "Her red dress. 👗", "clothes"],
      ["green hat", "gorro verde", "His green hat. 🧢", "clothes"],
      ["yellow T-shirt", "camiseta amarilla", "My yellow T-shirt. 👕", "clothes"],
      ["white socks", "calcetines blancos", "My white socks. 🧦", "clothes"],
      ["his", "su (de él)", "His hat is green.", "word"],
      ["her", "su (de ella)", "Her dress is red.", "word"],
      ["wear", "llevar (puesto)", "I wear my hat.", "verb"],
      ["new", "nuevo", "My new shoes! 👟", "adjective"],
      ["old", "viejo", "My old T-shirt.", "adjective"],
    ]),
    vocabEx("Ropa y colores 🌈", "Elige la combinación correcta.", [
      mc("👟 (azules) = my ___ shoes", ["blue", "red", "green"], 0, "blue shoes."),
      mc("👗 (rojo) = her ___ dress", ["blue", "red", "yellow"], 1, "red dress."),
      mc("🧢 (verde) = his ___ hat", ["green", "white", "yellow"], 0, "green hat."),
      mc("His hat is green. ¿De quién es?", ["de él", "de ella"], 0, "his = de él."),
      mc("Her dress is red. ¿De quién es?", ["de él", "de ella"], 1, "her = de ella."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha ropa y color", [
      mc("🎧 'My blue shoes are new.' ¿De qué color son los zapatos?", ["azules", "rojos", "verdes"], 0, "'blue shoes' → azules."),
      mc("🎧 'Her red dress is nice.' ¿De qué color es el vestido?", ["azul", "rojo", "amarillo"], 1, "'red dress' → rojo."),
      mc("🎧 'His green hat is big.' ¿De qué color es el gorro?", ["verde", "blanco", "negro"], 0, "'green hat' → verde."),
      mc("🎧 'My yellow T-shirt is old.' ¿Cómo es la camiseta?", ["nueva", "vieja"], 1, "'is old' → vieja."),
      mc("🎧 'My white socks are new.' ¿Cómo son los calcetines?", ["nuevos", "viejos"], 0, "'are new' → nuevos."),
    ]),
    listening(2, "Listening · Parte 2 — Ropa y colores", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. My blue shoes are new. Her red dress is nice. His green hat is big. My yellow T-shirt is old. My white socks are new.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("👟 (azules, nuevos) My ___ shoes are new.", ["blue"], "blue shoes."),
      fb("👗 (roja) Her ___ dress.", ["red"], "red dress."),
      fb("🧢 (verde) His ___ hat.", ["green"], "green hat."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Describe la ropa", "Describe la ropa de una persona (o dibujo) combinando color y prenda.", "Describe 3 prendas combinando color y ropa.", "combinar color y ropa", "My blue shoes, Her red dress, His green hat"),

    SUMMARY("Resumen del Día 17", [
      "Ya combinas color + ropa: 'my blue shoes', 'a green hat'.",
      "Conoces 'his' (de él) y 'her' (de ella).",
    ]),
    INFO("Tarea para el Día 18", "Practica combinar colores y ropa. Mañana: el tiempo (weather)."),
  ],
};

// ───────────────────────── DÍA 18 ─────────────────────────
const DAY18 = {
  title: "Día 18 — El tiempo ☀️ · It's sunny",
  description: "El tiempo atmosférico básico: sunny, rainy, cold, hot.",
  pedagogy: {
    objective: "Describir el tiempo atmosférico con frases sencillas.",
    summary: "El tiempo; It's + weather; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Qué tiempo hace hoy? Dilo en inglés."],
  },
  items: [
    TEXT("☀️ ¿Qué tiempo hace hoy? Let's look outside!"),
    GRAMMAR("It's + weather", "It's + tiempo. (Hace/Está...)\nIt's sunny. ☀️ (Hace sol)\nIt's rainy. 🌧️ (Está lloviendo)"),
    deck("Pre-A1 S4D18 — El tiempo", [
      ["sunny", "soleado", "It's sunny. ☀️", "weather"],
      ["rainy", "lluvioso", "It's rainy. 🌧️", "weather"],
      ["cloudy", "nublado", "It's cloudy. ☁️", "weather"],
      ["windy", "ventoso", "It's windy. 🌬️", "weather"],
      ["snowy", "nevado", "It's snowy. ❄️", "weather"],
      ["hot", "caluroso", "It's hot. 🥵", "weather"],
      ["cold", "frío", "It's cold. 🥶", "weather"],
      ["today", "hoy", "It's sunny today.", "word"],
      ["umbrella", "paraguas", "I need my umbrella. ☂️", "object"],
      ["outside", "fuera/afuera", "Let's play outside! 🏃", "word"],
    ]),
    vocabEx("¿Qué tiempo hace? ☀️", "Elige la palabra correcta.", [
      mc("☀️ It's ___.", ["sunny", "rainy", "snowy"], 0, "☀️ = sunny."),
      mc("🌧️ It's ___.", ["sunny", "rainy", "windy"], 1, "🌧️ = rainy."),
      mc("☁️ It's ___.", ["cloudy", "hot", "cold"], 0, "☁️ = cloudy."),
      mc("❄️ It's ___.", ["hot", "snowy", "sunny"], 1, "❄️ = snowy."),
      mc("🥵 It's ___.", ["hot", "cold", "windy"], 0, "🥵 = hot."),
      mc("🥶 It's ___.", ["hot", "cold", "sunny"], 1, "🥶 = cold."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha el tiempo", [
      mc("🎧 'It's sunny today!' ¿Qué tiempo hace?", ["☀️ sol", "🌧️ lluvia", "❄️ nieve"], 0, "'sunny' → ☀️."),
      mc("🎧 'It's rainy. I need my umbrella.' ¿Qué tiempo hace?", ["🌧️ lluvia", "☀️ sol", "🌬️ viento"], 0, "'rainy' → 🌧️."),
      mc("🎧 'It's cold today. I'm wearing a jumper.' ¿Qué tiempo hace?", ["🥶 frío", "🥵 calor", "☀️ sol"], 0, "'cold' → 🥶."),
      mc("🎧 'It's windy!' ¿Qué tiempo hace?", ["🌬️ viento", "☁️ nublado", "❄️ nieve"], 0, "'windy' → 🌬️."),
      mc("🎧 'It's hot. Let's drink water.' ¿Qué tiempo hace?", ["🥵 calor", "🥶 frío", "🌧️ lluvia"], 0, "'hot' → 🥵."),
    ]),
    listening(3, "Listening · Parte 3 — El tiempo", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. It's sunny today! It's rainy. I need my umbrella. It's cold today. I'm wearing a jumper. It's windy! It's hot. Let's drink water.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("☀️ = ___", ["sunny", "rainy", "cold"], 0, "☀️ = sunny."),
      mc("☂️ = ___", ["umbrella", "hat", "jumper"], 0, "☂️ = umbrella."),
      mc("It's ___. I'm cold. (frío)", ["cold", "hot", "sunny"], 0, "It's cold."),
      mc("❄️ = ___", ["snowy", "sunny", "windy"], 0, "❄️ = snowy."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · El tiempo hoy", "Mira por la ventana (o imagina) y di qué tiempo hace hoy.", "Describe el tiempo de hoy y de 2 días más.", "describir el tiempo", "It's sunny today, It's rainy, It's cold"),

    SUMMARY("Resumen del Día 18", [
      "Ya conoces: sunny, rainy, cloudy, windy, snowy, hot, cold.",
      "Puedes describir el tiempo: 'It's + weather'",
    ]),
    INFO("Tarea para el Día 19", "Practica describir el tiempo cada día. Mañana: puedo hacer cosas (can)."),
  ],
};

// ───────────────────────── DÍA 19 ─────────────────────────
const DAY19 = {
  title: "Día 19 — I can... 🏃 · Puedo hacer cosas",
  description: "Verbos de acción y la estructura 'I can...' / 'I can't...'.",
  pedagogy: {
    objective: "Expresar habilidades sencillas con 'can' y 'can't'.",
    summary: "Verbos de acción; can/can't; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué cosas puedes hacer? Dilo en inglés con 'I can...'"],
  },
  items: [
    TEXT("🏃 ¡Hoy nos movemos! I can run, I can jump..."),
    GRAMMAR("I can / I can't", "I can + verbo. (Puedo...)\nI can swim. 🏊 (Sé nadar)\nI can't fly. 🙅 (No puedo volar)"),
    deck("Pre-A1 S4D19 — I can...", [
      ["run", "correr", "I can run. 🏃", "verb"],
      ["jump", "saltar", "I can jump. 🤸", "verb"],
      ["swim", "nadar", "I can swim. 🏊", "verb"],
      ["sing", "cantar", "I can sing. 🎤", "verb"],
      ["dance", "bailar", "I can dance. 💃", "verb"],
      ["read", "leer", "I can read. 📖", "verb"],
      ["fly", "volar", "I can't fly. 🙅", "verb"],
      ["can", "poder/saber (habilidad)", "I can swim.", "word"],
      ["can't", "no poder/saber", "I can't fly.", "word"],
      ["well", "bien", "I can sing well! 🎤", "adverb"],
    ]),
    vocabEx("¿Qué puedo hacer? 🏃", "Elige el verbo correcto.", [
      mc("🏃 I can ___.", ["run", "swim", "sing"], 0, "🏃 = run."),
      mc("🏊 I can ___.", ["run", "swim", "jump"], 1, "🏊 = swim."),
      mc("🎤 I can ___.", ["sing", "dance", "read"], 0, "🎤 = sing."),
      mc("💃 I can ___.", ["read", "dance", "run"], 1, "💃 = dance."),
      mc("📖 I can ___.", ["read", "fly", "jump"], 0, "📖 = read."),
      mc("🙅 I ___ fly.", ["can", "can't"], 1, "'I can't fly' — los humanos no pueden volar."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe el verbo", [
      fb("🎧 'I can run fast!' Escribe el verbo: ___", ["run"], "run."),
      fb("🎧 'I can swim in the pool.' Escribe el verbo: ___", ["swim"], "swim."),
      fb("🎧 'I can sing a song.' Escribe el verbo: ___", ["sing"], "sing."),
      fb("🎧 'I can't fly, but I can jump!' Escribe el verbo que SÍ puede hacer: ___", ["jump"], "jump."),
      fb("🎧 'I can dance well.' Escribe el verbo: ___", ["dance"], "dance."),
    ]),
    listening(4, "Listening · Parte 4 — I can...", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I can run fast! I can swim in the pool. I can sing a song. I can't fly, but I can jump! I can dance well.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("r_n (correr)", ["run"], "run."),
      fb("sw_m (nadar)", ["swim"], "swim."),
      fb("s_ng (cantar)", ["sing"], "sing."),
      fb("d_nc_ (bailar)", ["dance"], "dance."),
      fb("j_mp (saltar)", ["jump"], "jump."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Lo que puedo hacer", "Muévete y di lo que puedes hacer: 'I can run', 'I can jump'...", "Di 4 cosas que puedes hacer y 1 que no puedes.", "expresar habilidades", "I can run, I can swim, I can sing, I can't fly"),

    SUMMARY("Resumen del Día 19", [
      "Ya conoces: run, jump, swim, sing, dance, read, fly.",
      "Puedes decir lo que sabes hacer: 'I can...' y lo que no: 'I can't...'",
    ]),
    INFO("Tarea para el Día 20", "Repasa la ropa, el tiempo y 'I can'. Mañana: ¡repaso y cuarta prueba!"),
  ],
};

// ───────────────────────── DÍA 20 ─────────────────────────
const DAY20 = {
  title: "Día 20 — Repaso de la semana + cuarta prueba 🌟",
  description: "Repaso de la ropa, el tiempo y 'I can'. Cuarta prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 4 antes de la prueba.",
    summary: "Repaso de ropa, tiempo y verbos de acción; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué palabra fue la más difícil esta semana?"],
  },
  items: [
    TEXT("🌟 ¡Cuarta semana terminada! Hoy repasamos: ropa, tiempo y 'I can'."),
    GRAMMAR("Repaso de la Semana 4", "· Ropa: T-shirt, trousers, dress, shoes, socks, hat, jumper. 'I'm wearing...'\n· Color + ropa: my blue shoes, her red dress, his green hat.\n· Tiempo: sunny, rainy, cloudy, windy, snowy, hot, cold. 'It's...'\n· Verbos: run, jump, swim, sing, dance, read, fly. 'I can... / I can't...'"),
    deck("Pre-A1 S4D20 — Repaso mixto", [
      ["T-shirt", "camiseta", "I'm wearing a T-shirt. 👕", "clothes"],
      ["shoes", "zapatos", "My blue shoes. 👟", "clothes"],
      ["sunny", "soleado", "It's sunny. ☀️", "weather"],
      ["rainy", "lluvioso", "It's rainy. 🌧️", "weather"],
      ["run", "correr", "I can run. 🏃", "verb"],
      ["swim", "nadar", "I can swim. 🏊", "verb"],
      ["can", "poder/saber", "I can sing.", "word"],
      ["can't", "no poder/saber", "I can't fly.", "word"],
      ["wearing", "llevando puesto", "I'm wearing a hat.", "word"],
      ["cold", "frío", "It's cold. 🥶", "weather"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("👕 I'm ___ a T-shirt.", ["wearing", "can", "sunny"], 0, "I'm wearing a T-shirt."),
      mc("☀️ It's ___.", ["sunny", "shoes", "run"], 0, "It's sunny."),
      mc("🏃 I ___ run.", ["can", "wearing", "rainy"], 0, "I can run."),
      mc("🙅 I ___ fly.", ["can", "can't"], 1, "I can't fly."),
      mc("👟 (azules) My ___ shoes.", ["blue", "sunny", "run"], 0, "My blue shoes."),
      mc("🥶 It's ___.", ["cold", "hot", "sunny"], 0, "It's cold."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I'm wearing my blue shoes. It's sunny today.' ¿Qué tiempo hace?", ["☀️ sol", "🌧️ lluvia", "❄️ nieve"], 0, "'sunny' → ☀️."),
      mc("🎧 'It's cold. I'm wearing a jumper.' ¿Por qué lleva jersey?", ["hace frío", "hace calor"], 0, "'cold' → hace frío."),
      mc("🎧 'I can swim, but I can't fly.' ¿Qué SÍ puede hacer?", ["swim", "fly"], 0, "'I can swim' → sí puede."),
      mc("🎧 'Her red dress is new.' ¿De qué color es el vestido?", ["rojo", "azul", "verde"], 0, "'red dress' → rojo."),
      mc("🎧 'It's windy. I can't fly my kite.' ¿Qué tiempo hace?", ["🌬️ viento", "☀️ sol"], 0, "'windy' → 🌬️."),
    ]),
    listening(1, "Listening · Repaso de la Semana 4", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I'm wearing my blue shoes. It's sunny today. It's cold. I'm wearing a jumper. I can swim, but I can't fly. Her red dress is new. It's windy. I can't fly my kite.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("w_ _r_ng (llevando puesto)", ["wearing"], "wearing."),
      fb("s_nny (soleado)", ["sunny"], "sunny."),
      fb("sw_m (nadar)", ["swim"], "swim."),
      fb("c_ld (frío)", ["cold"], "cold."),
      fb("sh_ _s (zapatos)", ["shoes"], "shoes."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: describe tu ropa, el tiempo de hoy y algo que sabes hacer.", "Habla 1-2 minutos combinando ropa, tiempo y habilidades.", "combinar ropa, tiempo y can", "I'm wearing a T-shirt, It's sunny, I can run"),

    SUMMARY("Resumen de la Semana 4", [
      "¡Enhorabuena! Terminaste la Semana 4: la ropa, el tiempo y 'I can'.",
      "Ahora, tu cuarta prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡el cole (school)!",
    ]),
    INFO("Prueba de la Semana 4 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "La ropa · I'm wearing... · El tiempo · I can...",
  description: "Cuarta semana: la ropa con 'I'm wearing...', combinar color y ropa, el tiempo atmosférico con 'It's...', y verbos de acción con 'I can/I can't'. Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
