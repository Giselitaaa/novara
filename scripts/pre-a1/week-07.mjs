/**
 * Pre-A1 Starters · Semana 7 — "El pueblo 🏘️ · Where's the...?".
 * Lugares del pueblo/ciudad y preguntar dónde está algo.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 31 ─────────────────────────
const DAY31 = {
  title: "Día 31 — El pueblo 🏘️ · It's a...",
  description: "Los lugares básicos del pueblo/ciudad.",
  pedagogy: {
    objective: "Nombrar lugares del pueblo.",
    summary: "Lugares del pueblo; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Qué lugares hay cerca de tu casa?"],
  },
  items: [
    TEXT("🏘️ ¡Hoy salimos! Let's go to the park!"),
    GRAMMAR("Repaso: It's a...", "It's a + lugar.\nIt's a park. 🌳 (Es un parque)\nIt's a shop. 🏪 (Es una tienda)"),
    deck("Pre-A1 S7D31 — El pueblo", [
      ["park", "parque", "It's a park. 🌳", "place"],
      ["shop", "tienda", "It's a shop. 🏪", "place"],
      ["zoo", "zoo", "It's a zoo. 🦁", "place"],
      ["playground", "parque infantil", "It's a playground. 🛝", "place"],
      ["street", "calle", "It's a street. 🛣️", "place"],
      ["school", "cole", "It's my school. 🏫", "place"],
      ["farm", "granja", "It's a farm. 🐄", "place"],
      ["town", "pueblo/ciudad", "This is my town. 🏘️", "word"],
      ["big", "grande", "A big park. 🌳", "adjective"],
      ["small", "pequeño", "A small shop. 🏪", "adjective"],
    ]),
    vocabEx("¿Qué lugar es? 🏘️", "Elige la palabra correcta.", [
      mc("🌳 It's a ___.", ["park", "shop", "zoo"], 0, "🌳 = park."),
      mc("🏪 It's a ___.", ["park", "shop", "farm"], 1, "🏪 = shop."),
      mc("🦁 It's a ___.", ["zoo", "school", "street"], 0, "🦁 = zoo."),
      mc("🛝 It's a ___.", ["playground", "shop", "farm"], 0, "🛝 = playground."),
      mc("🐄 It's a ___.", ["farm", "zoo", "park"], 0, "🐄 = farm."),
      mc("🏫 It's my ___.", ["school", "shop", "park"], 0, "🏫 = school."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y encuentra el lugar", [
      mc("🎧 'Let's go to the park!' ¿Adónde van?", ["🌳 parque", "🏪 tienda", "🦁 zoo"], 0, "'the park' → 🌳."),
      mc("🎧 'I can see lions at the zoo.' ¿Dónde está?", ["🦁 zoo", "🌳 parque", "🐄 granja"], 0, "'at the zoo' → 🦁."),
      mc("🎧 'I'm playing at the playground.' ¿Dónde está?", ["🛝 parque infantil", "🏫 cole", "🏪 tienda"], 0, "'at the playground' → 🛝."),
      mc("🎧 'There are cows at the farm.' ¿Dónde está?", ["🐄 granja", "🦁 zoo", "🌳 parque"], 0, "'at the farm' → 🐄."),
      mc("🎧 'I'm going to the shop.' ¿Adónde va?", ["🏪 tienda", "🏫 cole", "🛝 parque infantil"], 0, "'to the shop' → 🏪."),
    ]),
    listening(1, "Listening · Parte 1 — El pueblo", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. Let's go to the park! I can see lions at the zoo. I'm playing at the playground. There are cows at the farm. I'm going to the shop.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("🌳 = 'park'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 🌳 es park."),
      mc("🦁 = 'farm'. ¿Está bien?", ["Sí", "No"], 1, "No: 🦁 es zoo, no farm."),
      mc("🛝 = 'playground'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi pueblo", "Habla de los lugares de tu pueblo o ciudad: 'It's a...'.", "Nombra 4 lugares de tu pueblo en inglés.", "nombrar lugares del pueblo", "It's a park, It's a shop, It's a school"),

    SUMMARY("Resumen del Día 31", [
      "Ya conoces: park, shop, zoo, playground, street, school, farm, town.",
      "Puedes nombrar lugares: 'It's a...'",
    ]),
    INFO("Tarea para el Día 32", "Repasa los lugares del pueblo. Mañana: ¿dónde está? (at/near)"),
  ],
};

// ───────────────────────── DÍA 32 ─────────────────────────
const DAY32 = {
  title: "Día 32 — Where's the...? 🗺️ · at / near",
  description: "Preguntar dónde está un lugar: 'Where's the...?' y 'at/near'.",
  pedagogy: {
    objective: "Preguntar y responder sobre la ubicación de lugares.",
    summary: "Where's the...?; at/near; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Sabes preguntar dónde está algo en inglés?"],
  },
  items: [
    TEXT("🗺️ Where's the park? ¡Hoy preguntamos dónde están las cosas!"),
    GRAMMAR("Where's the...? at / near", "Where's the + lugar? (¿Dónde está...?)\nIt's at the park. (Está en el parque)\nIt's near my house. (Está cerca de mi casa)"),
    deck("Pre-A1 S7D32 — Where's / at / near", [
      ["where's", "dónde está (contracción)", "Where's the park?", "word"],
      ["at", "en (un lugar)", "I'm at the park.", "preposition"],
      ["near", "cerca de", "It's near my house.", "preposition"],
      ["far", "lejos", "The zoo is far.", "preposition"],
      ["next to", "al lado de", "The shop is next to the school.", "preposition"],
      ["house", "casa", "It's near my house.", "word"],
      ["there", "allí", "It's over there!", "word"],
      ["here", "aquí", "Come here!", "word"],
      ["go", "ir", "Let's go!", "verb"],
      ["walk", "caminar", "We can walk there.", "verb"],
    ]),
    vocabEx("¿Dónde está? 🗺️", "Elige la preposición correcta.", [
      mc("Where's the park? It's ___ the corner.", ["at", "far"], 0, "at the corner."),
      mc("The shop is ___ my house. (cerca)", ["near", "far"], 0, "near my house."),
      mc("The zoo is ___ — we need the car! (lejos)", ["near", "far"], 1, "far."),
      mc("The playground is ___ to the school. (al lado)", ["next", "near"], 0, "next to."),
      mc("Come ___! (aquí)", ["here", "there"], 0, "here."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha y localiza", [
      mc("🎧 'Where's the park? It's near my house.' ¿Está cerca o lejos?", ["cerca", "lejos"], 0, "'near' → cerca."),
      mc("🎧 'The zoo is far. We need the car.' ¿Está cerca o lejos?", ["cerca", "lejos"], 1, "'far' → lejos."),
      mc("🎧 'The shop is next to the school.' ¿Dónde está la tienda?", ["al lado del cole", "lejos del cole"], 0, "'next to the school'."),
      mc("🎧 'Come here! I'm at the playground.' ¿Dónde está?", ["🛝 parque infantil", "🏪 tienda"], 0, "'at the playground'."),
    ]),
    listening(2, "Listening · Parte 2 — Where's / at / near", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. Where's the park? It's near my house. The zoo is far. We need the car. The shop is next to the school. Come here! I'm at the playground.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("Where's the park? It's ___ my house. (cerca)", ["near"], "near my house."),
      fb("I'm ___ the park. (en)", ["at"], "at the park."),
      fb("The shop is ___ to the school. (al lado)", ["next"], "next to."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Dónde está?", "Practica preguntar y responder: 'Where's the...?' → 'It's near/at/next to...'.", "Practica 3 preguntas y respuestas sobre ubicación.", "preguntar y responder ubicación", "Where's the park? It's near my house."),

    SUMMARY("Resumen del Día 32", [
      "Ya sabes preguntar: 'Where's the...?'",
      "Puedes responder: at (en), near (cerca), far (lejos), next to (al lado de).",
    ]),
    INFO("Tarea para el Día 33", "Practica preguntar dónde están las cosas. Mañana: los animales del zoo."),
  ],
};

// ───────────────────────── DÍA 33 ─────────────────────────
const DAY33 = {
  title: "Día 33 — Animales del zoo 🦁 · Big and small",
  description: "Animales del zoo y adjetivos big/small.",
  pedagogy: {
    objective: "Nombrar animales del zoo y describir su tamaño.",
    summary: "Animales del zoo; big/small; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Cuál es tu animal del zoo favorito?"],
  },
  items: [
    TEXT("🦁 ¡Vamos al zoo! Let's see the animals."),
    GRAMMAR("big / small", "big = grande. small = pequeño.\nIt's a big elephant. 🐘 (Es un elefante grande)\nIt's a small monkey. 🐒 (Es un mono pequeño)"),
    deck("Pre-A1 S7D33 — Animales del zoo", [
      ["lion", "león", "It's a lion. 🦁", "animal"],
      ["elephant", "elefante", "It's a big elephant. 🐘", "animal"],
      ["monkey", "mono", "It's a monkey. 🐒", "animal"],
      ["tiger", "tigre", "It's a tiger. 🐯", "animal"],
      ["giraffe", "jirafa", "It's a giraffe. 🦒", "animal"],
      ["snake", "serpiente", "It's a snake. 🐍", "animal"],
      ["bear", "oso", "It's a bear. 🐻", "animal"],
      ["zebra", "cebra", "It's a zebra. 🦓", "animal"],
      ["tall", "alto", "A tall giraffe. 🦒", "adjective"],
      ["scary", "que da miedo", "A scary snake! 🐍", "adjective"],
    ]),
    vocabEx("¿Qué animal del zoo es? 🦁", "Elige el animal correcto.", [
      mc("🦁 It's a ___.", ["lion", "tiger", "bear"], 0, "🦁 = lion."),
      mc("🐘 It's a big ___.", ["elephant", "monkey", "snake"], 0, "🐘 = elephant."),
      mc("🐒 It's a small ___.", ["monkey", "giraffe", "elephant"], 0, "🐒 = monkey."),
      mc("🦒 It's a tall ___.", ["giraffe", "snake", "zebra"], 0, "🦒 = giraffe."),
      mc("🐍 It's a ___.", ["snake", "tiger", "bear"], 0, "🐍 = snake."),
      mc("🦓 It's a ___.", ["zebra", "lion", "monkey"], 0, "🦓 = zebra."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y encuentra el animal", [
      mc("🎧 'It's a big elephant.' ¿Qué animal es?", ["🐘 elefante", "🐒 mono", "🦁 león"], 0, "'a big elephant' → 🐘."),
      mc("🎧 'It's a small monkey.' ¿Qué animal es?", ["🐒 mono", "🦒 jirafa", "🐻 oso"], 0, "'a small monkey' → 🐒."),
      mc("🎧 'It's a tall giraffe.' ¿Qué animal es?", ["🦒 jirafa", "🦓 cebra", "🐯 tigre"], 0, "'a tall giraffe' → 🦒."),
      mc("🎧 'It's a scary snake!' ¿Qué animal es?", ["🐍 serpiente", "🦁 león", "🐻 oso"], 0, "'a scary snake' → 🐍."),
      mc("🎧 'It's a tiger.' ¿Qué animal es?", ["🐯 tigre", "🦓 cebra", "🐘 elefante"], 0, "'a tiger' → 🐯."),
    ]),
    listening(3, "Listening · Parte 3 — Animales del zoo", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. It's a big elephant. It's a small monkey. It's a tall giraffe. It's a scary snake! It's a tiger.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("🦁 = ___", ["lion", "tiger"], 0, "lion."),
      mc("🐘 = ___", ["elephant", "monkey"], 0, "elephant."),
      mc("🦒 = ___", ["giraffe", "zebra"], 0, "giraffe."),
      mc("🐍 = ___", ["snake", "bear"], 0, "snake."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Animales del zoo", "Describe animales del zoo usando big/small/tall.", "Describe 4 animales del zoo en inglés.", "describir animales del zoo", "It's a big elephant, It's a small monkey, It's a tall giraffe"),

    SUMMARY("Resumen del Día 33", [
      "Ya conoces: lion, elephant, monkey, tiger, giraffe, snake, bear, zebra.",
      "Puedes describir su tamaño: big, small, tall.",
    ]),
    INFO("Tarea para el Día 34", "Repasa los animales del zoo. Mañana: deportes y aficiones."),
  ],
};

// ───────────────────────── DÍA 34 ─────────────────────────
const DAY34 = {
  title: "Día 34 — Deportes 🏀 · I play...",
  description: "Deportes y aficiones básicas con 'I play...'.",
  pedagogy: {
    objective: "Nombrar deportes y usar 'I play'.",
    summary: "Deportes; I play...; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿A qué deporte juegas? Dilo en inglés."],
  },
  items: [
    TEXT("🏀 ¡Hoy jugamos! Let's play sports!"),
    GRAMMAR("I play...", "I play + deporte. (Juego a...)\nI play football. ⚽ (Juego al fútbol)"),
    deck("Pre-A1 S7D34 — Los deportes", [
      ["football", "fútbol", "I play football. ⚽", "sport"],
      ["basketball", "baloncesto", "I play basketball. 🏀", "sport"],
      ["tennis", "tenis", "I play tennis. 🎾", "sport"],
      ["swimming", "natación", "I like swimming. 🏊", "sport"],
      ["cycling", "ciclismo", "I like cycling. 🚴", "sport"],
      ["skateboard", "monopatín", "I've got a skateboard. 🛹", "sport"],
      ["ball", "pelota/balón", "I've got a ball. ⚽", "object"],
      ["play", "jugar", "I play football.", "verb"],
      ["team", "equipo", "My team is good! 👥", "word"],
      ["win", "ganar", "We can win! 🏆", "verb"],
    ]),
    vocabEx("¿Qué deporte es? 🏀", "Elige el deporte correcto.", [
      mc("⚽ I play ___.", ["football", "tennis", "basketball"], 0, "⚽ = football."),
      mc("🏀 I play ___.", ["football", "basketball", "tennis"], 1, "🏀 = basketball."),
      mc("🎾 I play ___.", ["tennis", "football", "basketball"], 0, "🎾 = tennis."),
      mc("🏊 I like ___.", ["swimming", "cycling", "football"], 0, "🏊 = swimming."),
      mc("🚴 I like ___.", ["cycling", "swimming", "tennis"], 0, "🚴 = cycling."),
      mc("🛹 I've got a ___.", ["skateboard", "ball", "team"], 0, "🛹 = skateboard."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe el deporte", [
      fb("🎧 'I play football with my friends.' Escribe: ___", ["football"], "football."),
      fb("🎧 'I like swimming in summer.' Escribe: ___", ["swimming"], "swimming."),
      fb("🎧 'I play tennis on Saturdays.' Escribe: ___", ["tennis"], "tennis."),
      fb("🎧 'I've got a new skateboard!' Escribe: ___", ["skateboard"], "skateboard."),
      fb("🎧 'I play basketball at school.' Escribe: ___", ["basketball"], "basketball."),
    ]),
    listening(4, "Listening · Parte 4 — Los deportes", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I play football with my friends. I like swimming in summer. I play tennis on Saturdays. I've got a new skateboard! I play basketball at school.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("f__tb_ll (fútbol)", ["football"], "football."),
      fb("t_nn_s (tenis)", ["tennis"], "tennis."),
      fb("sw_mm_ng (natación)", ["swimming"], "swimming."),
      fb("t__m (equipo)", ["team"], "team."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi deporte favorito", "Habla de tus deportes favoritos: 'I play... / I like...'.", "Di 3 deportes que practicas o te gustan.", "hablar de deportes", "I play football, I like swimming, I play basketball"),

    SUMMARY("Resumen del Día 34", [
      "Ya conoces: football, basketball, tennis, swimming, cycling, skateboard.",
      "Puedes decir a qué juegas: 'I play...'",
    ]),
    INFO("Tarea para el Día 35", "Repasa el pueblo, ubicaciones, zoo y deportes. Mañana: ¡repaso y séptima prueba!"),
  ],
};

// ───────────────────────── DÍA 35 ─────────────────────────
const DAY35 = {
  title: "Día 35 — Repaso de la semana + séptima prueba 🌟",
  description: "Repaso del pueblo, ubicaciones, animales del zoo y deportes. Séptima prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 7 antes de la prueba.",
    summary: "Repaso de pueblo, ubicaciones, zoo y deportes; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué te gustó más de esta semana: el zoo o los deportes?"],
  },
  items: [
    TEXT("🌟 ¡Séptima semana terminada! Hoy repasamos: pueblo, ubicaciones, zoo y deportes."),
    GRAMMAR("Repaso de la Semana 7", "· Pueblo: park, shop, zoo, playground, school, farm. 'It's a...'\n· Ubicación: Where's the...? at/near/far/next to.\n· Zoo: lion, elephant, monkey, giraffe, snake, tiger. big/small/tall.\n· Deportes: football, basketball, tennis, swimming. 'I play...'"),
    deck("Pre-A1 S7D35 — Repaso mixto", [
      ["park", "parque", "It's a park. 🌳", "place"],
      ["zoo", "zoo", "It's a zoo. 🦁", "place"],
      ["near", "cerca de", "It's near my house.", "preposition"],
      ["far", "lejos", "The zoo is far.", "preposition"],
      ["elephant", "elefante", "A big elephant. 🐘", "animal"],
      ["monkey", "mono", "A small monkey. 🐒", "animal"],
      ["football", "fútbol", "I play football. ⚽", "sport"],
      ["swimming", "natación", "I like swimming. 🏊", "sport"],
      ["where's", "dónde está", "Where's the park?", "word"],
      ["play", "jugar", "I play tennis.", "verb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("🌳 It's a ___.", ["park", "shop"], 0, "park."),
      mc("Where's the park? It's ___ my house. (cerca)", ["near", "far"], 0, "near."),
      mc("🐘 It's a big ___.", ["elephant", "monkey"], 0, "elephant."),
      mc("⚽ I ___ football.", ["play", "am"], 0, "I play football."),
      mc("🦒 It's a tall ___.", ["giraffe", "lion"], 0, "giraffe."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'Let's go to the zoo. I want to see the big elephant.' ¿Adónde van?", ["🦁 zoo", "🌳 parque"], 0, "'to the zoo' → 🦁."),
      mc("🎧 'The park is near my house.' ¿Está cerca o lejos?", ["cerca", "lejos"], 0, "'near' → cerca."),
      mc("🎧 'I play football every Saturday.' ¿A qué juega?", ["⚽ fútbol", "🎾 tenis"], 0, "'football' → ⚽."),
      mc("🎧 'It's a small monkey.' ¿Qué tamaño tiene?", ["pequeño", "grande"], 0, "'small' → pequeño."),
      mc("🎧 'I like swimming in the summer.' ¿Qué le gusta?", ["🏊 nadar", "🚴 ciclismo"], 0, "'swimming' → 🏊."),
    ]),
    listening(1, "Listening · Repaso de la Semana 7", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. Let's go to the zoo. I want to see the big elephant. The park is near my house. I play football every Saturday. It's a small monkey. I like swimming in the summer.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("p_rk (parque)", ["park"], "park."),
      fb("z__ (zoo)", ["zoo"], "zoo."),
      fb("n__r (cerca)", ["near"], "near."),
      fb("f__tb_ll (fútbol)", ["football"], "football."),
      fb("_l_ph_nt (elefante)", ["elephant"], "elephant."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: nombra lugares del pueblo, di dónde están, describe animales del zoo, y habla de deportes.", "Habla 1-2 minutos combinando pueblo, zoo y deportes.", "combinar pueblo, zoo y deportes", "It's a park, It's near my house, It's a big elephant, I play football"),

    SUMMARY("Resumen de la Semana 7", [
      "¡Enhorabuena! Terminaste la Semana 7: el pueblo, ubicaciones, el zoo y los deportes.",
      "Ahora, tu séptima prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡mi rutina diaria!",
    ]),
    INFO("Prueba de la Semana 7 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "El pueblo · Where's the...? · Animales del zoo · Deportes",
  description: "Séptima semana: lugares del pueblo, preguntar y responder sobre ubicación (Where's the...? at/near/far), animales del zoo con big/small/tall, y deportes con 'I play...'. Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
