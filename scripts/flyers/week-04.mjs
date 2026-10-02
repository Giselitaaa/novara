/**
 * A2 Flyers · Semana 4 — "La ciudad 🏙️ · Around town".
 * Lugares de la ciudad, direcciones avanzadas, superlativos.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY16 = {
  title: "Día 16 — Lugares de la ciudad 🏙️ · Places in town",
  description: "Vocabulario ampliado de lugares de la ciudad.",
  pedagogy: { objective: "Nombrar más lugares de la ciudad.", summary: "Lugares de la ciudad; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué lugares hay en tu ciudad?"] },
  items: [
    TEXT("🏙️ Around town — más lugares de la ciudad."),
    GRAMMAR("Lugares de la ciudad", "There's a library near my house. The sports centre is next to the park."),
    deck("Flyers S4D16 — Lugares de la ciudad", [
      ["library", "biblioteca", "I borrow books from the library.", "place"],
      ["sports centre", "centro deportivo", "I swim at the sports centre.", "place"],
      ["car park", "aparcamiento", "Park in the car park.", "place"],
      ["bridge", "puente", "Cross the bridge.", "place"],
      ["square", "plaza", "Meet me in the square.", "place"],
      ["cinema", "cine", "Let's go to the cinema.", "place"],
      ["bookshop", "librería", "Buy a book at the bookshop.", "place"],
      ["bus station", "estación de autobuses", "Wait at the bus station.", "place"],
    ]),
    vocabEx("Lugares de la ciudad 🏙️", "Elige la opción correcta.", [
      mc("I borrow books from the ___.", ["library", "bookshop"], 0, "library."),
      mc("Cross the ___ to get to the park.", ["bridge", "square"], 0, "bridge."),
      mc("Let's meet in the ___ at noon.", ["square", "car park"], 0, "square."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une el lugar", [
      mc("🎧 'I usually go to the library to study on Saturdays.' ¿Adónde va a estudiar?", ["library", "cinema"], 0, "'go to the library to study'."),
      mc("🎧 'Let's meet near the bridge, by the square.' ¿Dónde se van a encontrar?", ["near the bridge", "at the bookshop"], 0, "'near the bridge'."),
    ]),
    listening(1, "Listening · Parte 1 — Lugares de la ciudad", "Escucha y responde.", "Listen and match. I usually go to the library to study on Saturdays. Let's meet near the bridge, by the square.", []),
    READING_HEAD,
    readDefine("Encuentra el lugar", [
      mc("Donde se dejan los coches: ___", ["car park", "bus station"], 0, "car park."),
      mc("Donde se compran libros: ___", ["bookshop", "library"], 0, "bookshop."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi ciudad", "Describe los lugares de tu ciudad.", "Describe 4 lugares de tu ciudad.", "describir la ciudad", "There's a library, There's a sports centre"),
    SUMMARY("Resumen del Día 16", ["Ya conoces: library, sports centre, car park, bridge, square, bookshop, bus station."]),
    INFO("Tarea para el Día 17", "Mañana: direcciones más avanzadas."),
  ],
};

const DAY17 = {
  title: "Día 17 — ¿Cómo llego? 🧭 · Advanced directions",
  description: "Direcciones más avanzadas: cruzar, seguir, pasar.",
  pedagogy: { objective: "Dar y seguir direcciones avanzadas.", summary: "Direcciones; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Cómo se va de tu casa al colegio?"] },
  items: [
    TEXT("🧭 Go straight on, then turn left — direcciones avanzadas."),
    GRAMMAR("Direcciones avanzadas", "Go straight on. Turn left at the corner. Cross the bridge. Go past the library. It's opposite the cinema."),
    deck("Flyers S4D17 — Direcciones avanzadas", [
      ["go straight on", "sigue recto", "Go straight on.", "phrase"],
      ["cross", "cruzar", "Cross the bridge.", "verb"],
      ["go past", "pasar por delante", "Go past the library.", "phrase"],
      ["opposite", "enfrente de", "It's opposite the cinema.", "preposition"],
      ["corner", "esquina", "Turn left at the corner.", "word"],
      ["roundabout", "rotonda", "Go round the roundabout.", "word"],
      ["take the first left", "toma la primera a la izquierda", "Take the first left.", "phrase"],
      ["on the right", "a la derecha", "It's on the right.", "phrase"],
    ]),
    vocabEx("Direcciones avanzadas 🧭", "Elige la opción correcta.", [
      mc("Go ___ the library to get to the park.", ["past", "opposite"], 0, "past."),
      mc("It's ___ the cinema. (enfrente de)", ["opposite", "past"], 0, "opposite."),
      mc("Turn left at the ___. (esquina)", ["corner", "roundabout"], 0, "corner."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe la dirección", [
      fb("🎧 'Go straight on, then cross the bridge and the library is on your right.' ¿Qué cruzar? Escribe: ___", ["bridge"], "'cross the bridge'."),
      fb("🎧 'The cinema is opposite the bookshop.' ¿Dónde está el cine? Escribe: ___", ["opposite"], "'opposite the bookshop'."),
    ]),
    listening(2, "Listening · Parte 2 — Direcciones avanzadas", "Escucha y responde.", "Listen and write. Go straight on, then cross the bridge and the library is on your right. The cinema is opposite the bookshop.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("How do I get to the library?", ["Go straight on and turn left at the corner.", "It's a book."], 0, "pregunta de direcciones."),
      mc("Where's the cinema?", ["It's opposite the bookshop.", "It's a film."], 0, "pregunta de ubicación."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Dando direcciones avanzadas", "Da direcciones avanzadas a un lugar.", "Explica cómo llegar a 2 lugares usando direcciones avanzadas.", "dar direcciones avanzadas", "Go straight on, Cross the bridge, It's opposite"),
    SUMMARY("Resumen del Día 17", ["Puedes dar direcciones avanzadas: go straight on, cross, go past, opposite, corner."]),
    INFO("Tarea para el Día 18", "Mañana: comparar lugares con superlativos."),
  ],
};

const DAY18 = {
  title: "Día 18 — El más grande 🏆 · Superlatives",
  description: "Superlativos para comparar lugares y cosas.",
  pedagogy: { objective: "Usar superlativos (-est, most).", summary: "Superlativos; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Cuál es el edificio más alto de tu ciudad?"] },
  items: [
    TEXT("🏆 The tallest building, the most beautiful park — superlativos."),
    GRAMMAR("Superlativos", "Adjetivos cortos: the + adjetivo + -est (the tallest).\nAdjetivos largos: the most + adjetivo (the most beautiful).\nIrregulares: good → the best, bad → the worst."),
    deck("Flyers S4D18 — Superlativos", [
      ["the tallest", "el más alto", "It's the tallest building.", "superlative"],
      ["the biggest", "el más grande", "It's the biggest park.", "superlative"],
      ["the most beautiful", "el más bonito", "It's the most beautiful place.", "superlative"],
      ["the most expensive", "el más caro", "It's the most expensive shop.", "superlative"],
      ["the best", "el mejor", "It's the best restaurant.", "superlative"],
      ["the worst", "el peor", "It's the worst weather.", "superlative"],
      ["the oldest", "el más antiguo", "It's the oldest building.", "superlative"],
      ["the busiest", "el más concurrido", "It's the busiest street.", "superlative"],
    ]),
    vocabEx("Superlativos 🏆", "Elige la opción correcta.", [
      mc("It's ___ building in the city. (el más alto)", ["the tallest", "taller"], 0, "the tallest."),
      mc("It's ___ park in town. (el más bonito)", ["the most beautiful", "more beautiful"], 0, "the most beautiful."),
      mc("good → ___", ["the best", "the goodest"], 0, "the best."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige el superlativo", [
      mc("🎧 'This is the tallest building in the whole city!' ¿Qué dice del edificio?", ["the tallest", "the smallest"], 0, "'the tallest building'."),
      mc("🎧 'In my opinion, this is the best restaurant in town.' ¿Qué opina del restaurante?", ["the best", "the worst"], 0, "'the best restaurant'."),
    ]),
    listening(3, "Listening · Parte 3 — Superlativos", "Escucha y responde.", "Listen. This is the tallest building in the whole city! In my opinion, this is the best restaurant in town.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "My city has ___ (1) park in the country — it's really big! It also has ___ (2) museum, which is very old and beautiful. But the traffic is ___ (3) problem here.", [
      mc("(1)", ["the biggest", "bigger"], 0, "the biggest."),
      mc("(2)", ["the most beautiful", "more beautiful"], 0, "the most beautiful."),
      mc("(3)", ["the worst", "worse"], 0, "the worst."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Lo mejor de mi ciudad", "Describe tu ciudad con superlativos.", "Describe 3 cosas de tu ciudad usando superlativos.", "usar superlativos", "It's the tallest, It's the most beautiful, It's the best"),
    SUMMARY("Resumen del Día 18", ["Puedes usar superlativos: the tallest, the biggest, the most beautiful, the best, the worst."]),
    INFO("Tarea para el Día 19", "Mañana: en la ciudad — actividades y transporte."),
  ],
};

const DAY19 = {
  title: "Día 19 — Moverse por la ciudad 🚌 · Getting around",
  description: "Transporte público y actividades en la ciudad.",
  pedagogy: { objective: "Hablar de cómo moverse por la ciudad.", summary: "Transporte; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Cómo te mueves por tu ciudad?"] },
  items: [
    TEXT("🚌 How do you get around town? — transporte y actividades."),
    GRAMMAR("Transporte en la ciudad", "I usually take the bus. I prefer walking.\nHow do you get to school? By bike, by bus, on foot."),
    deck("Flyers S4D19 — Transporte", [
      ["take the bus", "tomar el autobús", "I take the bus to school.", "phrase"],
      ["underground", "metro", "We took the underground.", "transport"],
      ["on foot", "a pie", "I go to school on foot.", "phrase"],
      ["by bike", "en bici", "I travel by bike.", "phrase"],
      ["traffic", "tráfico", "There's a lot of traffic.", "word"],
      ["crowded", "lleno/abarrotado", "The bus is crowded.", "adjective"],
      ["ticket", "billete", "Buy a ticket.", "word"],
      ["timetable", "horario", "Check the timetable.", "word"],
    ]),
    vocabEx("Transporte 🚌", "Elige la opción correcta.", [
      mc("I go to school ___. (a pie)", ["on foot", "by bike"], 0, "on foot."),
      mc("The bus is very ___ today. (lleno)", ["crowded", "quiet"], 0, "crowded."),
      mc("Check the ___ before you travel.", ["timetable", "ticket"], 0, "timetable."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha sobre el transporte", [
      mc("🎧 'I usually take the underground, it's faster than the bus.' ¿Qué transporte usa?", ["underground", "bike"], 0, "'take the underground'."),
      mc("🎧 'There's so much traffic today, the bus is really crowded.' ¿Cómo está el autobús?", ["crowded", "empty"], 0, "'really crowded'."),
    ]),
    listening(4, "Listening · Parte 4 — Transporte", "Escucha y responde.", "Listen. I usually take the underground, it's faster than the bus. There's so much traffic today, the bus is really crowded.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "I usually go to school by bike because it's faster than walking. Sometimes there's a lot of traffic, so I prefer the underground on those days. The bus is always crowded in the morning.", [
      mc("He always walks to school. ¿Está bien?", ["Falso", "Verdadero"], 0, "'goes... by bike', no walks."),
      mc("The bus is crowded in the morning. ¿Está bien?", ["Verdadero", "Falso"], 0, "'bus is always crowded in the morning' — Verdadero."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Cómo me muevo", "Habla de cómo te mueves por la ciudad.", "Describe cómo vas al colegio y cómo te mueves por la ciudad.", "hablar de transporte", "I take the bus, I go on foot, I prefer"),
    SUMMARY("Resumen del Día 19", ["Ya conoces: take the bus, underground, on foot, by bike, traffic, crowded."]),
    INFO("Tarea para el Día 20", "Mañana: ¡repaso y cuarta prueba!"),
  ],
};

const DAY20 = {
  title: "Día 20 — Repaso de la semana + cuarta prueba 🌟",
  description: "Repaso de la ciudad, direcciones y superlativos. Cuarta prueba.",
  pedagogy: { objective: "Repasar la Semana 4.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Describe tu ciudad combinando lugares, direcciones y transporte."] },
  items: [
    TEXT("🌟 ¡Cuarta semana terminada! Repasamos la ciudad, direcciones y superlativos."),
    GRAMMAR("Repaso de la Semana 4", "library, sports centre, bridge, square. go straight on, opposite. the tallest, the best. take the bus, underground."),
    deck("Flyers S4D20 — Repaso mixto", [
      ["library", "biblioteca", "I go to the library.", "place"],
      ["bridge", "puente", "Cross the bridge.", "place"],
      ["opposite", "enfrente de", "It's opposite the cinema.", "preposition"],
      ["the tallest", "el más alto", "It's the tallest building.", "superlative"],
      ["the best", "el mejor", "It's the best restaurant.", "superlative"],
      ["take the bus", "tomar el autobús", "I take the bus.", "phrase"],
      ["crowded", "lleno", "The bus is crowded.", "adjective"],
      ["go straight on", "sigue recto", "Go straight on.", "phrase"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I borrow books from the ___.", ["library", "bridge"], 0, "library."),
      mc("It's ___ the cinema. (enfrente de)", ["opposite", "past"], 0, "opposite."),
      mc("It's ___ building in the city. (el más alto)", ["the tallest", "taller"], 0, "the tallest."),
      mc("I usually ___ the bus. (tomo)", ["take", "took"], 0, "take."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'Go straight on, cross the bridge, and the library is opposite the cinema.' ¿Dónde está la biblioteca?", ["opposite the cinema", "next to the park"], 0, "'opposite the cinema'."),
      mc("🎧 'This is the tallest building in the city, and the bus stop is right next to it.' ¿Qué hay junto al edificio?", ["bus stop", "bridge"], 0, "'bus stop... next to it'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 4", "Escucha y responde.", "Listen and look. Go straight on, cross the bridge, and the library is opposite the cinema. This is the tallest building in the city, and the bus stop is right next to it.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "To get to the library, go ___ (1) on and cross the ___ (2). It's ___ (3) the cinema, and it's the ___ (4) building on the street.", [
      mc("(1)", ["straight", "past"], 0, "straight on."),
      mc("(2)", ["bridge", "square"], 0, "bridge."),
      mc("(3)", ["opposite", "past"], 0, "opposite."),
      mc("(4)", ["tallest", "taller"], 0, "tallest."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina lugares, direcciones y superlativos.", "Habla 1-2 minutos combinando lo repasado.", "combinar ciudad, direcciones, superlativos", "There's a library, Go straight on, It's the tallest"),
    SUMMARY("Resumen de la Semana 4", ["¡Enhorabuena! Terminaste la Semana 4 de Flyers.", "Ahora, tu cuarta prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡la escuela y las normas con must/mustn't!"]),
    INFO("Prueba de la Semana 4 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "La ciudad · Around town · Direcciones y superlativos",
  description: "Cuarta semana de A2 Flyers: lugares de la ciudad (library, bridge, square), direcciones avanzadas (go straight on, opposite, go past), superlativos (the tallest, the best), y transporte urbano.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
