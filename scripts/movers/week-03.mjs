/**
 * A1 Movers · Semana 3 — "Mi casa y mi ciudad 🏠 · Prepositions of place".
 * Las habitaciones de la casa con más detalle, preposiciones de lugar, y
 * lugares de la ciudad.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 11 ─────────────────────────
const DAY11 = {
  title: "Día 11 — Mi casa 🏠 · next to, between, behind",
  description: "Habitaciones y muebles de la casa, con preposiciones de lugar más avanzadas.",
  pedagogy: {
    objective: "Describir la casa con preposiciones de lugar precisas.",
    summary: "Casa y muebles; next to/between/behind; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Puedes describir dónde está un mueble en tu casa con precisión?"],
  },
  items: [
    TEXT("🏠 Hoy describimos la casa con más detalle: next to, between, behind..."),
    GRAMMAR("Preposiciones avanzadas", "next to = al lado de. between = entre. behind = detrás de. in front of = delante de.\nThe lamp is next to the bed. The chair is between the table and the door."),
    deck("Movers S3D11 — Preposiciones de lugar", [
      ["next to", "al lado de", "The lamp is next to the bed.", "preposition"],
      ["between", "entre", "The chair is between the tables.", "preposition"],
      ["behind", "detrás de", "The cat is behind the sofa.", "preposition"],
      ["in front of", "delante de", "The car is in front of the house.", "preposition"],
      ["sofa", "sofá", "There is a sofa in the living room.", "furniture"],
      ["lamp", "lámpara", "There is a lamp on the table.", "furniture"],
      ["wardrobe", "armario", "My clothes are in the wardrobe.", "furniture"],
      ["mirror", "espejo", "There is a mirror on the wall.", "furniture"],
      ["fridge", "frigorífico", "The milk is in the fridge.", "furniture"],
      ["carpet", "alfombra", "There is a carpet on the floor.", "furniture"],
    ]),
    vocabEx("Preposiciones de lugar 🏠", "Elige la preposición correcta.", [
      mc("(al lado) The lamp is ___ the bed.", ["next to", "between"], 0, "next to."),
      mc("(entre) The chair is ___ the two tables.", ["between", "behind"], 0, "between."),
      mc("(detrás) The cat is ___ the sofa.", ["behind", "in front of"], 0, "behind."),
      mc("(delante) The car is ___ the house.", ["in front of", "behind"], 0, "in front of."),
      mc("🛋️ = ___", ["sofa", "lamp"], 0, "sofa."),
      mc("🪞 = ___", ["mirror", "carpet"], 0, "mirror."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y encuentra el mueble", [
      mc("🎧 'The lamp is next to the bed.' ¿Dónde está la lámpara?", ["al lado de la cama", "detrás de la cama"], 0, "'next to the bed'."),
      mc("🎧 'The cat is behind the sofa.' ¿Dónde está el gato?", ["detrás del sofá", "delante del sofá"], 0, "'behind the sofa'."),
      mc("🎧 'The mirror is between the two windows.' ¿Dónde está el espejo?", ["entre las dos ventanas", "al lado de una ventana"], 0, "'between the two windows'."),
      mc("🎧 'The car is in front of the house.' ¿Dónde está el coche?", ["delante de la casa", "detrás de la casa"], 0, "'in front of the house'."),
      mc("🎧 'My clothes are in the wardrobe.' ¿Dónde está la ropa?", ["en el armario", "en el frigorífico"], 0, "'in the wardrobe'."),
    ]),
    listening(1, "Listening · Parte 1 — Mi casa", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and match. The lamp is next to the bed. The cat is behind the sofa. The mirror is between the two windows. The car is in front of the house. My clothes are in the wardrobe.", []),

    READING_HEAD,
    readDefine("Encuentra la palabra correcta", [
      mc("Está en la sala y te sientas en él: ___", ["sofa", "wardrobe", "fridge"], 0, "sofa."),
      mc("Guarda la comida fría: ___", ["fridge", "wardrobe", "mirror"], 0, "fridge."),
      mc("Te ves en él: ___", ["mirror", "carpet", "lamp"], 0, "mirror."),
      mc("Está en el suelo, es suave: ___", ["carpet", "lamp", "sofa"], 0, "carpet."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi casa con detalle", "Describe tu casa con precisión usando next to, between, behind, in front of.", "Describe 4 muebles de tu casa con preposiciones.", "describir la casa con precisión", "The lamp is next to my bed, The sofa is in front of the TV"),

    SUMMARY("Resumen del Día 11", [
      "Ya conoces: next to, between, behind, in front of.",
      "Puedes describir la casa con precisión.",
    ]),
    INFO("Tarea para el Día 12", "Practica describir tu casa. Mañana: mi ciudad."),
  ],
};

// ───────────────────────── DÍA 12 ─────────────────────────
const DAY12 = {
  title: "Día 12 — Mi ciudad 🏙️ · Places in town",
  description: "Lugares de la ciudad con más detalle.",
  pedagogy: {
    objective: "Nombrar más lugares de la ciudad.",
    summary: "Lugares de la ciudad; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Qué lugares importantes hay en tu ciudad?"],
  },
  items: [
    TEXT("🏙️ ¡Hoy exploramos la ciudad! Let's explore the town."),
    GRAMMAR("Lugares de la ciudad", "There's a library in my town. (Hay una biblioteca en mi pueblo)\nThe hospital is next to the police station."),
    deck("Movers S3D12 — Mi ciudad", [
      ["library", "biblioteca", "There's a library in my town.", "place"],
      ["hospital", "hospital", "The hospital is big.", "place"],
      ["police station", "comisaría", "The police station helps people.", "place"],
      ["supermarket", "supermercado", "I go to the supermarket.", "place"],
      ["restaurant", "restaurante", "We eat at a restaurant.", "place"],
      ["cinema", "cine", "Let's go to the cinema!", "place"],
      ["swimming pool", "piscina", "There's a swimming pool.", "place"],
      ["bus stop", "parada de autobús", "Wait at the bus stop.", "place"],
      ["museum", "museo", "The museum is interesting.", "place"],
      ["bakery", "panadería", "Fresh bread at the bakery.", "place"],
    ]),
    vocabEx("Lugares de la ciudad 🏙️", "Elige el lugar correcto.", [
      mc("Aquí puedes leer libros: ___", ["library", "cinema", "bakery"], 0, "library."),
      mc("Aquí te curan si estás enfermo: ___", ["hospital", "museum", "restaurant"], 0, "hospital."),
      mc("Aquí compras comida: ___", ["supermarket", "cinema", "museum"], 0, "supermarket."),
      mc("Aquí ves películas: ___", ["cinema", "library", "hospital"], 0, "cinema."),
      mc("Aquí nadas: ___", ["swimming pool", "bakery", "museum"], 0, "swimming pool."),
      mc("Esperas el autobús aquí: ___", ["bus stop", "library", "hospital"], 0, "bus stop."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha y completa", [
      fb("🎧 'There's a big library in my town.' Escribe el lugar: ___", ["library"], "library."),
      fb("🎧 'The hospital is next to the school.' Escribe el lugar: ___", ["hospital"], "hospital."),
      fb("🎧 'We're going to the cinema tonight.' Escribe el lugar: ___", ["cinema"], "cinema."),
      fb("🎧 'I love the bakery — fresh bread every day!' Escribe el lugar: ___", ["bakery"], "bakery."),
    ]),
    listening(2, "Listening · Parte 2 — Mi ciudad", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. There's a big library in my town. The hospital is next to the school. We're going to the cinema tonight. I love the bakery — fresh bread every day!", []),

    READING_HEAD,
    readStory("Lee la historia y responde Sí/No", "My town has got a lot of interesting places. There's a big library next to the school, and a museum in the town centre. My favourite place is the swimming pool — I go there every Saturday. There's also a supermarket and a bakery near my house.", [
      mc("The library is next to the school. ¿Está bien?", ["Sí", "No"], 0, "'a big library next to the school' — Sí."),
      mc("The museum is in the town centre. ¿Está bien?", ["Sí", "No"], 0, "'a museum in the town centre' — Sí."),
      mc("The favourite place is the cinema. ¿Está bien?", ["Sí", "No"], 1, "'My favourite place is the swimming pool' — No."),
      mc("There's a bakery near the house. ¿Está bien?", ["Sí", "No"], 0, "'a bakery near my house' — Sí."),
        ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi ciudad", "Describe los lugares importantes de tu ciudad.", "Nombra 5 lugares de tu ciudad en inglés.", "nombrar lugares de la ciudad", "There's a library, There's a supermarket, There's a swimming pool"),

    SUMMARY("Resumen del Día 12", [
      "Ya conoces: library, hospital, police station, supermarket, restaurant, cinema, swimming pool, bus stop, museum, bakery.",
      "Puedes describir los lugares de tu ciudad.",
    ]),
    INFO("Tarea para el Día 13", "Practica los lugares de la ciudad. Mañana: cómo llegar a un lugar."),
  ],
};

// ───────────────────────── DÍA 13 ─────────────────────────
const DAY13 = {
  title: "Día 13 — ¿Cómo llego? 🗺️ · Turn left, go straight on",
  description: "Indicaciones básicas para llegar a un lugar.",
  pedagogy: {
    objective: "Entender y dar indicaciones básicas.",
    summary: "Indicaciones; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Sabes decir cómo llegar de tu casa al cole en inglés?"],
  },
  items: [
    TEXT("🗺️ ¿Cómo llego al parque? Let's learn directions!"),
    GRAMMAR("Indicaciones", "Turn left. (Gira a la izquierda) Turn right. (Gira a la derecha)\nGo straight on. (Sigue recto) It's on the corner. (Está en la esquina)"),
    deck("Movers S3D13 — Indicaciones", [
      ["turn left", "gira a la izquierda", "Turn left at the corner.", "phrase"],
      ["turn right", "gira a la derecha", "Turn right here.", "phrase"],
      ["go straight on", "sigue recto", "Go straight on.", "phrase"],
      ["corner", "esquina", "It's on the corner.", "place"],
      ["opposite", "enfrente de", "The shop is opposite the park.", "preposition"],
      ["map", "mapa", "Look at the map.", "object"],
      ["excuse me", "disculpa", "Excuse me, where's the library?", "phrase"],
      ["how do I get to", "cómo llego a", "How do I get to the park?", "phrase"],
      ["cross the road", "cruzar la calle", "Cross the road carefully.", "phrase"],
      ["stop", "parar", "Stop at the crossing.", "verb"],
    ]),
    vocabEx("Indicaciones 🗺️", "Elige la opción correcta.", [
      mc("(izquierda) Turn ___ at the corner.", ["left", "right"], 0, "left."),
      mc("(recto) Go ___ on.", ["straight", "left"], 0, "straight."),
      mc("(disculpa) ___ me, where's the park?", ["Excuse", "Turn"], 0, "Excuse."),
      mc("(enfrente) The shop is ___ the park.", ["opposite", "behind"], 0, "opposite."),
      mc("It's on the ___. (esquina)", ["corner", "map"], 0, "corner."),
    ]),

    LISTENING_HEAD,
    listenColourWrite("Escucha las indicaciones", [
      fb("🎧 'Turn left at the corner, then go straight on.' ¿Hacia dónde giras primero? Escribe: ___", ["left"], "left."),
      fb("🎧 'Excuse me, how do I get to the library? Turn right.' ¿Hacia dónde giras? Escribe: ___", ["right"], "right."),
      fb("🎧 'The bakery is opposite the school.' ¿Dónde está la panadería? Escribe: ___", ["opposite"], "opposite."),
    ]),
    listening(3, "Listening · Parte 3 — Indicaciones", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. Turn left at the corner, then go straight on. Excuse me, how do I get to the library? Turn right. The bakery is opposite the school.", []),

    READING_HEAD,
    readGapChoice("Elige la opción correcta", "___ (1) me, how do I get to the museum? Turn ___ (2) at the corner, then go ___ (3) on. The museum is ___ (4) the library.", [
      mc("(1)", ["Excuse", "Turn", "Cross"], 0, "Excuse me."),
      mc("(2)", ["left", "corner", "straight"], 0, "Turn left."),
      mc("(3)", ["straight", "left", "opposite"], 0, "go straight on."),
      mc("(4)", ["opposite", "turn", "excuse"], 0, "opposite the library."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Da indicaciones", "Practica dar indicaciones desde tu casa a un lugar cercano.", "Da indicaciones para llegar a un lugar en 3-4 pasos.", "dar indicaciones", "Turn left, go straight on, turn right, it's on the corner"),

    SUMMARY("Resumen del Día 13", [
      "Ya conoces: turn left/right, go straight on, corner, opposite.",
      "Puedes pedir y dar indicaciones básicas.",
    ]),
    INFO("Tarea para el Día 14", "Practica dar indicaciones. Mañana: comparar mi casa con la de un amigo."),
  ],
};

// ───────────────────────── DÍA 14 ─────────────────────────
const DAY14 = {
  title: "Día 14 — Comparaciones 📏 · bigger than, smaller than",
  description: "Adjetivos comparativos: bigger, smaller, older, newer.",
  pedagogy: {
    objective: "Usar comparativos sencillos para comparar cosas.",
    summary: "Comparativos; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Puedes comparar tu casa con la de un amigo?"],
  },
  items: [
    TEXT("📏 Hoy comparamos: bigger than, smaller than..."),
    GRAMMAR("Comparativos con -er", "adjetivo + er + than.\nMy house is bigger than your house. (Mi casa es más grande que la tuya)\nHer garden is smaller than mine."),
    deck("Movers S3D14 — Comparativos", [
      ["bigger", "más grande", "My house is bigger than yours.", "adjective"],
      ["smaller", "más pequeño", "Her garden is smaller.", "adjective"],
      ["older", "más antiguo/mayor", "This building is older.", "adjective"],
      ["newer", "más nuevo", "My bike is newer than his.", "adjective"],
      ["taller", "más alto", "The tower is taller than the house.", "adjective"],
      ["shorter", "más bajo/corto", "This street is shorter.", "adjective"],
      ["than", "que (comparación)", "Bigger than my house.", "word"],
      ["more expensive", "más caro", "This is more expensive.", "adjective"],
      ["cheaper", "más barato", "That one is cheaper.", "adjective"],
      ["different", "diferente", "Our houses are different.", "adjective"],
    ]),
    vocabEx("Comparativos 📏", "Elige la opción correcta.", [
      mc("My house is ___ than yours. (más grande)", ["bigger", "smaller"], 0, "bigger."),
      mc("Her garden is ___ than mine. (más pequeño)", ["smaller", "bigger"], 0, "smaller."),
      mc("This building is ___ than my house. (más antiguo)", ["older", "newer"], 0, "older."),
      mc("The tower is ___ than the house. (más alto)", ["taller", "shorter"], 0, "taller."),
      mc("This bike is ___ than that one. (más nuevo)", ["newer", "older"], 0, "newer."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y compara", [
      mc("🎧 'My house is bigger than my cousin's house.' ¿Cuál es más grande?", ["su casa", "la casa de su primo"], 0, "'My house is bigger'."),
      mc("🎧 'This building is older than the school.' ¿Cuál es más antiguo?", ["el edificio", "el cole"], 0, "'This building is older'."),
      mc("🎧 'The tower is taller than the museum.' ¿Cuál es más alto?", ["la torre", "el museo"], 0, "'The tower is taller'."),
      mc("🎧 'My new bike is cheaper than my old one.' ¿Cuál es más barato?", ["la bici nueva", "la bici vieja"], 0, "'My new bike is cheaper'."),
    ]),
    listening(4, "Listening · Parte 4 — Comparativos", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. My house is bigger than my cousin's house. This building is older than the school. The tower is taller than the museum. My new bike is cheaper than my old one.", []),

    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: bigger, smaller, older, taller\n\nMy house is ___ (1) than my cousin's house — it's got more rooms! But her garden is ___ (2) than mine. The old library is ___ (3) than the new one. The tower is ___ (4) than all the buildings in town.", [
      fb("(1)", ["bigger"], "bigger."),
      fb("(2)", ["smaller"], "smaller."),
      fb("(3)", ["older"], "older."),
      fb("(4)", ["taller"], "taller."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Comparaciones", "Compara tu casa, tu cole o tus cosas con las de un amigo o familiar.", "Haz 4 comparaciones usando -er than.", "usar comparativos", "My house is bigger than my friend's house, My bike is newer than his"),

    SUMMARY("Resumen del Día 14", [
      "Ya conoces: bigger, smaller, older, newer, taller, shorter, more expensive, cheaper.",
      "Puedes comparar cosas: 'adjetivo + er + than'.",
    ]),
    INFO("Tarea para el Día 15", "Repasa mi casa, mi ciudad, indicaciones y comparativos. Mañana: ¡repaso y tercera prueba!"),
  ],
};

// ───────────────────────── DÍA 15 ─────────────────────────
const DAY15 = {
  title: "Día 15 — Repaso de la semana + tercera prueba 🌟",
  description: "Repaso de la casa, la ciudad, indicaciones y comparativos. Tercera prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 3 antes de la prueba.",
    summary: "Repaso de casa, ciudad, indicaciones y comparativos; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Puedes describir tu casa y tu ciudad con detalle ahora?"],
  },
  items: [
    TEXT("🌟 ¡Tercera semana de Movers terminada! Hoy repasamos: casa, ciudad, indicaciones y comparativos."),
    GRAMMAR("Repaso de la Semana 3", "· Casa: next to, between, behind, in front of. sofa, lamp, wardrobe.\n· Ciudad: library, hospital, supermarket, cinema, museum.\n· Indicaciones: turn left/right, go straight on, opposite.\n· Comparativos: bigger, smaller, older, taller + than."),
    deck("Movers S3D15 — Repaso mixto", [
      ["next to", "al lado de", "The lamp is next to the bed.", "preposition"],
      ["behind", "detrás de", "The cat is behind the sofa.", "preposition"],
      ["library", "biblioteca", "There's a library.", "place"],
      ["hospital", "hospital", "The hospital is big.", "place"],
      ["turn left", "gira a la izquierda", "Turn left.", "phrase"],
      ["opposite", "enfrente de", "Opposite the park.", "preposition"],
      ["bigger", "más grande", "Bigger than yours.", "adjective"],
      ["taller", "más alto", "Taller than the house.", "adjective"],
      ["than", "que (comparación)", "Bigger than mine.", "word"],
      ["corner", "esquina", "On the corner.", "place"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("(al lado) The lamp is ___ the bed.", ["next to", "between"], 0, "next to."),
      mc("Aquí puedes leer libros: ___", ["library", "cinema"], 0, "library."),
      mc("(izquierda) Turn ___.", ["left", "right"], 0, "left."),
      mc("My house is ___ than yours. (más grande)", ["bigger", "smaller"], 0, "bigger."),
      mc("The shop is ___ the park. (enfrente)", ["opposite", "behind"], 0, "opposite."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'The lamp is next to my bed. My house is bigger than my cousin's.' ¿Qué compara?", ["las casas", "las lámparas"], 0, "'My house is bigger'."),
      mc("🎧 'Excuse me, how do I get to the library? Turn left at the corner.' ¿Adónde quiere ir?", ["a la biblioteca", "al hospital"], 0, "'to the library'."),
      mc("🎧 'The museum is opposite the swimming pool.' ¿Dónde está el museo?", ["enfrente de la piscina", "al lado de la piscina"], 0, "'opposite the swimming pool'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 3", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. The lamp is next to my bed. My house is bigger than my cousin's. Excuse me, how do I get to the library? Turn left at the corner. The museum is opposite the swimming pool.", []),

    READING_HEAD,
    readWrite("Completa las palabras — repaso", [
      fb("n_xt t_ (al lado de)", ["next to"], "next to."),
      fb("l_br_ry (biblioteca)", ["library"], "library."),
      fb("t_rn l_ft (girar a la izquierda)", ["turn left"], "turn left."),
      fb("b_gg_r (más grande)", ["bigger"], "bigger."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina la casa, la ciudad, las indicaciones y los comparativos.", "Habla 1-2 minutos combinando lo repasado.", "combinar casa, ciudad, indicaciones, comparativos", "The lamp is next to my bed, There's a library, Turn left, My house is bigger than yours"),

    SUMMARY("Resumen de la Semana 3", [
      "¡Enhorabuena! Terminaste la Semana 3: mi casa, mi ciudad, indicaciones y comparativos.",
      "Ahora, tu tercera prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡el cole y mi rutina diaria!",
    ]),
    INFO("Prueba de la Semana 3 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Mi casa · Mi ciudad · Indicaciones · Comparativos",
  description: "Tercera semana de A1 Movers: la casa con preposiciones avanzadas (next to, between, behind), lugares de la ciudad, indicaciones básicas (turn left, go straight on), y adjetivos comparativos (bigger than, smaller than). Cada día, las 4 destrezas con el formato real de Movers.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
