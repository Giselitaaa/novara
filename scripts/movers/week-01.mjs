/**
 * A1 Movers · Semana 1 — "Todo sobre mí 🙋 · Where do you live?".
 * Presentarse con más detalle, la familia extendida, números hasta 100,
 * y "there is/are". Primera semana, sirve de puente desde Starters.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose,
  readDefine, readStory, readGapChoice, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 1 ─────────────────────────
const DAY1 = {
  title: "Día 1 — ¡Hola de nuevo! 🙋 · Where do you live?",
  description: "Presentarte con más detalle: nombre, edad, dónde vives.",
  pedagogy: {
    objective: "Presentarse con detalle, incluyendo dónde se vive.",
    summary: "Presentación extendida; Where do you live?; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Puedes decir tu nombre, edad y dónde vives en inglés?"],
  },
  items: [
    TEXT("🙋 ¡Bienvenido/a a Movers! Ya sabes mucho inglés — ¡hoy aprendemos aún más!"),
    GRAMMAR("Where do you live?", "Where do you live? (¿Dónde vives?)\nI live in Madrid. (Vivo en Madrid)\nWhat's your favourite...? (¿Cuál es tu... favorito?)"),
    deck("Movers S1D1 — Presentarte", [
      ["live", "vivir", "I live in Madrid. 🏠", "verb"],
      ["city", "ciudad", "Madrid is a big city.", "place"],
      ["country", "país", "Spain is my country.", "place"],
      ["street", "calle", "I live on Main Street.", "place"],
      ["favourite", "favorito", "My favourite colour is blue.", "adjective"],
      ["also", "también", "I also like dogs.", "word"],
      ["nice to meet you", "encantado/a de conocerte", "Nice to meet you!", "phrase"],
      ["too", "también", "I'm happy too!", "word"],
      ["from", "de (procedencia)", "I'm from Spain.", "word"],
      ["about", "sobre/acerca de", "Tell me about you.", "word"],
    ]),
    vocabEx("Presentarte con detalle 🙋", "Elige la opción correcta.", [
      mc("Where do you ___? I live in Madrid.", ["live", "from", "city"], 0, "Where do you live?"),
      mc("I'm ___ Spain. (procedencia)", ["from", "live", "also"], 0, "I'm from Spain."),
      mc("Nice to meet you! Nice to meet you, ___!", ["too", "from", "live"], 0, "Nice to meet you too!"),
      mc("My ___ colour is blue.", ["favourite", "live", "country"], 0, "favourite colour."),
      mc("Madrid is a big ___.", ["city", "street", "favourite"], 0, "city."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y une cada persona con su información", [
      mc("🎧 'My name's Sara. I live in London.' ¿Dónde vive Sara?", ["London", "Madrid", "Paris"], 0, "'I live in London'."),
      mc("🎧 'I'm from Italy. My favourite colour is green.' ¿De dónde es?", ["Italy", "Spain", "France"], 0, "'I'm from Italy'."),
      mc("🎧 'Nice to meet you! I'm nine years old.' ¿Cuántos años tiene?", ["eight", "nine", "ten"], 1, "'nine years old'."),
      mc("🎧 'I live on Green Street with my family.' ¿En qué calle vive?", ["Green Street", "Main Street"], 0, "'Green Street'."),
      mc("🎧 'My favourite animal is a horse.' ¿Cuál es su animal favorito?", ["horse", "cat", "dog"], 0, "'a horse'."),
    ]),
    listening(1, "Listening · Parte 1 — Todo sobre mí", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and match. My name's Sara. I live in London. I'm from Italy. My favourite colour is green. Nice to meet you! I'm nine years old. I live on Green Street with my family. My favourite animal is a horse.", []),

    READING_HEAD,
    readDefine("Encuentra la palabra correcta", [
      mc("Es donde vives, con calles y edificios: ___", ["city", "family", "favourite"], 0, "city."),
      mc("Es de donde eres: ___", ["country", "street", "live"], 0, "country."),
      mc("Lo dices cuando conoces a alguien nuevo: 'Nice to ___ you!'", ["meet", "live", "from"], 0, "meet."),
      mc("El que más te gusta: ___", ["favourite", "country", "also"], 0, "favourite."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Preséntate con detalle", "Preséntate con más información: nombre, edad, dónde vives, tu color favorito.", "Habla 1-2 minutos presentándote con detalle.", "presentarse con detalle", "My name's..., I'm... years old, I live in..., My favourite colour is..."),

    SUMMARY("Resumen del Día 1", [
      "Ya sabes preguntar y responder: 'Where do you live?' → 'I live in...'",
      "Puedes decir tu país y tu color favorito.",
    ]),
    INFO("Tarea para el Día 2", "Practica presentarte con detalle. Mañana: mi familia extendida."),
  ],
};

// ───────────────────────── DÍA 2 ─────────────────────────
const DAY2 = {
  title: "Día 2 — Mi familia extendida 👨‍👩‍👧‍👦 · has got",
  description: "Familia extendida (primos, tíos) y 'has got' para hablar de otras personas.",
  pedagogy: {
    objective: "Nombrar familiares extendidos y usar 'has got'.",
    summary: "Familia extendida; has got; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Cuántos primos tienes? Dilo en inglés."],
  },
  items: [
    TEXT("👨‍👩‍👧‍👦 Hoy ampliamos la familia: cousins, aunts, uncles!"),
    GRAMMAR("has got (para otras personas)", "I've got = tengo (yo). She/He has got = tiene (ella/él).\nMy cousin has got a bike. (Mi primo tiene una bici)"),
    deck("Movers S1D2 — Familia extendida", [
      ["cousin", "primo/a", "My cousin is called Leo.", "family"],
      ["aunt", "tía", "My aunt lives in Paris.", "family"],
      ["uncle", "tío", "My uncle has got a dog.", "family"],
      ["parents", "padres", "My parents work hard.", "family"],
      ["children", "niños/hijos", "They've got three children.", "family"],
      ["has got", "tiene (él/ella)", "She has got a cat.", "word"],
      ["called", "llamado/a", "My cousin is called Leo.", "word"],
      ["lives", "vive (él/ella)", "My aunt lives in Paris.", "word"],
      ["works", "trabaja (él/ella)", "My uncle works at a school.", "word"],
      ["relatives", "familiares", "I've got many relatives.", "family"],
    ]),
    vocabEx("Mi familia extendida 👨‍👩‍👧‍👦", "Elige la palabra correcta.", [
      mc("El hijo de mi tío es mi ___.", ["cousin", "uncle", "aunt"], 0, "cousin."),
      mc("La hermana de mi papá es mi ___.", ["aunt", "cousin", "parents"], 0, "aunt."),
      mc("El hermano de mi mamá es mi ___.", ["uncle", "cousin", "children"], 0, "uncle."),
      mc("My cousin ___ got a bike. (tiene)", ["has", "have"], 0, "has got (para él/ella)."),
      mc("My aunt ___ in Paris. (vive)", ["lives", "live"], 0, "lives (3ª persona)."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha y completa el formulario", [
      fb("🎧 'My cousin is called Leo.' Nombre del primo: ___", ["Leo"], "Leo."),
      fb("🎧 'My aunt lives in Paris.' Ciudad de la tía: ___", ["Paris"], "Paris."),
      fb("🎧 'My uncle has got a dog.' Mascota del tío: ___", ["dog"], "dog."),
      fb("🎧 'They've got three children.' Número de hijos: ___", ["three", "3"], "three."),
      fb("🎧 'My uncle works at a school.' Lugar de trabajo: ___", ["school"], "school."),
    ]),
    listening(2, "Listening · Parte 2 — Mi familia extendida", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. My cousin is called Leo. My aunt lives in Paris. My uncle has got a dog. They've got three children. My uncle works at a school.", []),

    READING_HEAD,
    readStory("Lee la historia y responde Sí/No", "My name's Emma. I've got a big family. My aunt Clara lives in London. My uncle Tom has got two children — my cousins, Max and Lily. Max is seven years old and Lily is five. We visit them every summer.", [
      mc("Emma's aunt is called Clara. ¿Está bien?", ["Sí", "No"], 0, "'My aunt Clara' — Sí."),
      mc("Uncle Tom has got three children. ¿Está bien?", ["Sí", "No"], 1, "'two children' — No, son dos."),
      mc("Max is seven years old. ¿Está bien?", ["Sí", "No"], 0, "'Max is seven years old' — Sí."),
      mc("They visit in winter. ¿Está bien?", ["Sí", "No"], 1, "'every summer' — No, es en verano."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi familia extendida", "Habla de tu familia extendida: primos, tíos. Usa 'has got'.", "Describe 3 familiares extendidos usando 'has got'.", "describir la familia extendida", "My cousin has got a bike, My aunt lives in..., My uncle works at..."),

    SUMMARY("Resumen del Día 2", [
      "Ya conoces: cousin, aunt, uncle, parents, children, relatives.",
      "Puedes usar 'has got' para hablar de otras personas.",
    ]),
    INFO("Tarea para el Día 3", "Practica hablar de tu familia extendida. Mañana: números hasta 100."),
  ],
};

// ───────────────────────── DÍA 3 ─────────────────────────
const DAY3 = {
  title: "Día 3 — Números hasta 100 🔢 · How old are you?",
  description: "Los números de 10 en 10 hasta 100 y preguntar la edad.",
  pedagogy: {
    objective: "Contar de 10 en 10 hasta 100 y preguntar sobre edad.",
    summary: "Números hasta 100; How old are you?; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes contar de 10 en 10 hasta 100 en inglés?"],
  },
  items: [
    TEXT("🔢 ¡Números grandes! De 10 en 10 hasta 100."),
    GRAMMAR("Números de 10 en 10", "ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.\nHow old are you? I'm nine years old."),
    deck("Movers S1D3 — Números hasta 100", [
      ["twenty", "veinte", "Twenty students.", "number"],
      ["thirty", "treinta", "Thirty books.", "number"],
      ["forty", "cuarenta", "Forty minutes.", "number"],
      ["fifty", "cincuenta", "Fifty stars.", "number"],
      ["sixty", "sesenta", "Sixty seconds.", "number"],
      ["seventy", "setenta", "Seventy years.", "number"],
      ["eighty", "ochenta", "Eighty pages.", "number"],
      ["ninety", "noventa", "Ninety cars.", "number"],
      ["one hundred", "cien", "One hundred children.", "number"],
      ["how old", "qué edad", "How old are you?", "phrase"],
    ]),
    vocabEx("Números grandes 🔢", "Elige el número correcto.", [
      fb("20 = ___", ["twenty"], "20 = twenty."),
      fb("50 = ___", ["fifty"], "50 = fifty."),
      fb("100 = ___", ["one hundred"], "100 = one hundred."),
      fb("70 = ___", ["seventy"], "70 = seventy."),
      fb("90 = ___", ["ninety"], "90 = ninety."),
      fb("40 = ___", ["forty"], "40 = forty."),
    ]),

    LISTENING_HEAD,
    listenColourWrite("Escucha y escribe el número", [
      fb("🎧 'There are thirty students in my class.' Escribe el número: ___", ["30"], "thirty = 30."),
      fb("🎧 'My grandpa is seventy years old.' Escribe el número: ___", ["70"], "seventy = 70."),
      fb("🎧 'The book has got one hundred pages.' Escribe el número: ___", ["100"], "one hundred = 100."),
      fb("🎧 'I counted eighty stars in the sky.' Escribe el número: ___", ["80"], "eighty = 80."),
    ]),
    listening(3, "Listening · Parte 3 — Números hasta 100", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. There are thirty students in my class. My grandpa is seventy years old. The book has got one hundred pages. I counted eighty stars in the sky.", []),

    READING_HEAD,
    readGapChoice("Elige el número correcto", "My school has got ___ (1) students in my class. My grandma is ___ (2) years old, and she's very active! My favourite book has got ___ (3) pages. I've got ___ (4) stickers in my collection.", [
      mc("(1)", ["thirty", "three", "thirteen"], 0, "thirty students."),
      mc("(2)", ["seventy", "seven", "seventeen"], 0, "seventy years old."),
      mc("(3)", ["one hundred", "one", "eleven"], 0, "one hundred pages."),
      mc("(4)", ["fifty", "five", "fifteen"], 0, "fifty stickers."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Cuenta hasta 100", "Cuenta de 10 en 10 hasta 100, y di la edad de 3 familiares.", "Cuenta de 10 en 10 hasta 100 y di edades.", "contar hasta 100 y hablar de edades", "twenty, thirty, forty... one hundred, My grandma is seventy years old"),

    SUMMARY("Resumen del Día 3", [
      "Ya sabes contar de 10 en 10 hasta 100.",
      "Puedes preguntar y responder sobre la edad: 'How old are you?'",
    ]),
    INFO("Tarea para el Día 4", "Practica contar hasta 100. Mañana: there is / there are."),
  ],
};

// ───────────────────────── DÍA 4 ─────────────────────────
const DAY4 = {
  title: "Día 4 — There is / there are 🏠 · Hay...",
  description: "La estructura 'there is/there are' para describir lo que hay en un lugar.",
  pedagogy: {
    objective: "Usar 'there is' y 'there are' correctamente.",
    summary: "There is/are; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué hay en tu habitación? Dilo con 'there is/are'."],
  },
  items: [
    TEXT("🏠 Hoy: There is... / There are... ¿Qué hay en tu casa?"),
    GRAMMAR("There is / there are", "There is + singular. (Hay - uno)\nThere are + plural. (Hay - varios)\nThere is a cat in the garden. There are two dogs in the house."),
    deck("Movers S1D4 — There is/are", [
      ["there is", "hay (singular)", "There is a cat.", "phrase"],
      ["there are", "hay (plural)", "There are two dogs.", "phrase"],
      ["some", "algunos/algo de", "There are some books.", "word"],
      ["a lot of", "muchos/muchas", "There are a lot of toys.", "phrase"],
      ["garden", "jardín", "There is a tree in the garden.", "place"],
      ["room", "habitación", "There is a bed in my room.", "place"],
      ["table", "mesa", "There is a table.", "object"],
      ["shelf", "estante", "There are books on the shelf.", "object"],
      ["window", "ventana", "There is a window.", "object"],
      ["how many", "cuántos", "How many books are there?", "phrase"],
    ]),
    vocabEx("There is / there are 🏠", "Elige la opción correcta.", [
      mc("(un gato) ___ a cat in the garden.", ["There is", "There are"], 0, "There is (singular)."),
      mc("(dos perros) ___ two dogs in the house.", ["There is", "There are"], 1, "There are (plural)."),
      mc("(muchos juguetes) ___ a lot of toys in my room.", ["There is", "There are"], 1, "There are (plural)."),
      mc("(una mesa) ___ a table in the kitchen.", ["There is", "There are"], 0, "There is (singular)."),
      mc("(algunos libros) ___ some books on the shelf.", ["There is", "There are"], 1, "There are (plural)."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y elige", [
      mc("🎧 'There is a cat in the garden.' ¿Cuántos gatos hay?", ["one", "two", "three"], 0, "'a cat' → one."),
      mc("🎧 'There are three books on the table.' ¿Cuántos libros hay?", ["one", "two", "three"], 2, "'three books'."),
      mc("🎧 'There's a lot of toys in my room.' ¿Cuántos juguetes hay?", ["one", "a lot"], 1, "'a lot of toys'."),
      mc("🎧 'How many windows are there? There are two.' ¿Cuántas ventanas hay?", ["one", "two"], 1, "'There are two'."),
    ]),
    listening(4, "Listening · Parte 4 — There is/are", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. There is a cat in the garden. There are three books on the table. There's a lot of toys in my room. How many windows are there? There are two.", []),

    READING_HEAD,
    readWrite("Mira y escribe con there is/are", [
      fb("🐱 (un gato) ___ a cat.", ["There is", "there is"], "There is a cat."),
      fb("📚📚📚 (tres libros) ___ three books.", ["There are", "there are"], "There are three books."),
      fb("🪟 (una ventana) ___ a window.", ["There is", "there is"], "There is a window."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Qué hay?", "Describe tu habitación o casa usando 'there is/there are'.", "Describe 4 cosas de tu casa con there is/are.", "usar there is/are", "There is a bed, There are two windows, There is a table"),

    SUMMARY("Resumen del Día 4", [
      "There is + singular. There are + plural.",
      "Puedes describir lo que hay en un lugar.",
    ]),
    INFO("Tarea para el Día 5", "Repasa presentarte, familia, números y there is/are. Mañana: ¡repaso y primera prueba!"),
  ],
};

// ───────────────────────── DÍA 5 ─────────────────────────
const DAY5 = {
  title: "Día 5 — Repaso de la semana + primera prueba 🌟",
  description: "Repaso de presentarte, familia extendida, números y there is/are. Primera prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 1 antes de la prueba.",
    summary: "Repaso de presentación, familia, números y there is/are; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué has aprendido esta semana que no sabías en Starters?"],
  },
  items: [
    TEXT("🌟 ¡Primera semana de Movers completada! Hoy repasamos todo."),
    GRAMMAR("Repaso de la Semana 1", "· Presentarte: Where do you live? I live in...\n· Familia: cousin, aunt, uncle. has got.\n· Números: twenty, thirty... one hundred. How old are you?\n· There is/There are."),
    deck("Movers S1D5 — Repaso mixto", [
      ["live", "vivir", "I live in Madrid.", "verb"],
      ["cousin", "primo/a", "My cousin.", "family"],
      ["has got", "tiene (él/ella)", "She has got a cat.", "word"],
      ["thirty", "treinta", "Thirty books.", "number"],
      ["how old", "qué edad", "How old are you?", "phrase"],
      ["there is", "hay (singular)", "There is a cat.", "phrase"],
      ["there are", "hay (plural)", "There are two dogs.", "phrase"],
      ["favourite", "favorito", "My favourite colour.", "adjective"],
      ["aunt", "tía", "My aunt.", "family"],
      ["room", "habitación", "My room.", "place"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("Where do you ___? I live in Madrid.", ["live", "has got"], 0, "live."),
      mc("My cousin ___ got a bike.", ["has", "have"], 0, "has got."),
      mc("30 = ___", ["thirty", "thirteen"], 0, "thirty."),
      mc("(un gato) ___ a cat.", ["There is", "There are"], 0, "There is."),
      mc("(dos perros) ___ two dogs.", ["There is", "There are"], 1, "There are."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I live in Madrid with my family.' ¿Dónde vive?", ["Madrid", "London"], 0, "'I live in Madrid'."),
      mc("🎧 'My cousin has got a new bike.' ¿Qué tiene el primo?", ["a bike", "a dog"], 0, "'a new bike'."),
      mc("🎧 'There are thirty students in my class.' ¿Cuántos estudiantes hay?", ["thirty", "thirteen"], 0, "'thirty'."),
      mc("🎧 'There is a big tree in the garden.' ¿Cuántos árboles hay?", ["one", "two"], 0, "'a big tree' → one."),
    ]),
    listening(1, "Listening · Repaso de la Semana 1", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I live in Madrid with my family. My cousin has got a new bike. There are thirty students in my class. There is a big tree in the garden.", []),

    READING_HEAD,
    readStory("Lee y responde Sí/No — repaso", "My name's Alex. I live in Barcelona. I've got a big family: my mum, my dad, and my cousin Marco. Marco has got a dog called Rex. There are thirty students in my class, and there is a park near my house.", [
      mc("Alex lives in Madrid. ¿Está bien?", ["Sí", "No"], 1, "'I live in Barcelona' — No."),
      mc("Marco has got a dog. ¿Está bien?", ["Sí", "No"], 0, "'Marco has got a dog' — Sí."),
      mc("There are thirty students in Alex's class. ¿Está bien?", ["Sí", "No"], 0, "'thirty students' — Sí."),
      mc("There is no park near Alex's house. ¿Está bien?", ["Sí", "No"], 1, "'there is a park near' — No, sí hay."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: preséntate, habla de tu familia extendida, cuenta hasta 100, y describe tu casa con there is/are.", "Habla 1-2 minutos combinando lo aprendido.", "combinar presentación, familia, números, there is/are", "I live in..., My cousin has got..., thirty, There is a bed"),

    SUMMARY("Resumen de la Semana 1", [
      "¡Enhorabuena! Terminaste la primera semana de Movers.",
      "Ahora, tu primera prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡mi tiempo libre y mis aficiones!",
    ]),
    INFO("Prueba de la Semana 1 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Todo sobre mí · Familia extendida · Números hasta 100 · There is/are",
  description: "Primera semana de A1 Movers: presentarte con más detalle (Where do you live?), la familia extendida con 'has got', los números hasta 100, y 'there is/there are'. Cada día, las 4 destrezas con el formato real de Movers.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
