/**
 * Pre-A1 Starters · Semana 1 — "Colores y números 1-10 · ¡Hola, English!".
 * Primera semana: colores, "It's + colour", números 1-10, "How many?".
 * Cada día, las 4 destrezas con el formato real de Starters (Listening,
 * Reading & Writing, Speaking).
 */
import {
  TEXT, GRAMMAR, TIP, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 1 ─────────────────────────
const DAY1 = {
  title: "Día 1 — Los colores 🎨 · It's + colour",
  description: "Los colores en inglés y la estructura 'It's + colour'. Primer contacto con las 4 destrezas del examen Starters.",
  pedagogy: {
    objective: "Reconocer y nombrar los 10 colores básicos en inglés.",
    summary: "Colores; It's + colour; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Sabes decir de qué color es tu juguete favorito en inglés?"],
  },
  items: [
    TEXT("🎨 ¡Hola! Bienvenido/a a tu primer día de inglés. Hoy aprendemos los COLORES."),
    GRAMMAR("It's + color", "Para decir de qué color es algo, decimos: It's + color.\nIt's red. 🍎 (Es rojo)\nIt's blue. 🔵 (Es azul)"),
    deck("Pre-A1 S1D1 — Los colores", [
      ["red", "rojo", "It's red. 🍎", "colour"],
      ["blue", "azul", "It's blue. 🔵", "colour"],
      ["green", "verde", "It's green. 🐸", "colour"],
      ["yellow", "amarillo", "It's yellow. ☀️", "colour"],
      ["orange", "naranja", "It's orange. 🟠", "colour"],
      ["purple", "morado", "It's purple. 🟣", "colour"],
      ["black", "negro", "It's black. ⚫", "colour"],
      ["white", "blanco", "It's white. ⚪", "colour"],
      ["pink", "rosa", "It's pink. 🌸", "colour"],
      ["brown", "marrón", "It's brown. 🟤", "colour"],
    ]),
    vocabEx("¿De qué color es? 🎨", "Mira el emoji y elige el color correcto.", [
      mc("🍎 It's ___.", ["red", "blue", "green"], 0, "The apple is red. 🍎"),
      mc("☀️ It's ___.", ["yellow", "black", "pink"], 0, "The sun is yellow. ☀️"),
      mc("🐸 It's ___.", ["orange", "green", "white"], 1, "The frog is green. 🐸"),
      mc("🔵 It's ___.", ["blue", "red", "brown"], 0, "It's blue. 🔵"),
      mc("⚫ It's ___.", ["black", "white", "purple"], 0, "It's black. ⚫"),
      mc("🌸 It's ___.", ["pink", "purple", "green"], 0, "It's pink. 🌸"),
    ]),

    LISTENING_HEAD,
    listenMatch("¿Qué color escuchas?", [
      mc("🎧 Escucha: 'It's red.' ¿Qué dibujo es?", ["🍎 rojo", "🔵 azul", "🟢 verde"], 0, "'It's red.' → 🍎 rojo."),
      mc("🎧 Escucha: 'It's blue.' ¿Qué dibujo es?", ["🔴 rojo", "🔵 azul", "🟡 amarillo"], 1, "'It's blue.' → 🔵 azul."),
      mc("🎧 Escucha: 'It's yellow.' ¿Qué dibujo es?", ["🟢 verde", "🟣 morado", "🟡 amarillo"], 2, "'It's yellow.' → 🟡 amarillo."),
      mc("🎧 Escucha: 'It's green.' ¿Qué dibujo es?", ["🟢 verde", "⚫ negro", "🟠 naranja"], 0, "'It's green.' → 🟢 verde."),
      mc("🎧 Escucha: 'It's pink.' ¿Qué dibujo es?", ["🟤 marrón", "🌸 rosa", "⚪ blanco"], 1, "'It's pink.' → 🌸 rosa."),
    ]),
    listening(1, "Listening · Parte 1 — Los colores", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. Number one. It's red. Number two. It's blue. Number three. It's yellow. Number four. It's green. Number five. It's pink.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("🔴 = 'red'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 🔴 es red."),
      mc("🟢 = 'blue'. ¿Está bien?", ["Sí", "No"], 1, "No: 🟢 es green, no blue."),
      mc("☀️ = 'yellow'. ¿Está bien?", ["Sí", "No"], 0, "Sí, el sol es yellow."),
      mc("⚫ = 'white'. ¿Está bien?", ["Sí", "No"], 1, "No: ⚫ es black, no white."),
      mc("🍎 = 'red'. ¿Está bien?", ["Sí", "No"], 0, "Sí, la manzana es red."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Colores", "Mira objetos de colores a tu alrededor y di de qué color son en inglés, usando 'It's + colour'.", "Habla con un adulto o practica solo/a: señala 5 objetos de tu casa y di su color en inglés.", "decir el color de 5 objetos", "It's red, It's blue, It's yellow, It's green, It's black"),

    SUMMARY("Resumen del Día 1", [
      "¡Aprendiste 10 colores en inglés! red, blue, green, yellow, orange, purple, black, white, pink, brown.",
      "Puedes decir de qué color es algo: 'It's + colour'.",
    ]),
    INFO("Tarea para el Día 2", "Repasa los 10 colores. Mañana: ¡los números del 1 al 10!"),
  ],
};

// ───────────────────────── DÍA 2 ─────────────────────────
const DAY2 = {
  title: "Día 2 — Los números 1-10 🔢 · How many?",
  description: "Los números del 1 al 10 y la pregunta 'How many?'.",
  pedagogy: {
    objective: "Contar del 1 al 10 en inglés y responder a 'How many?'.",
    summary: "Números 1-10; How many?; Listening P1, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Puedes contar del 1 al 10 en inglés sin mirar?"],
  },
  items: [
    TEXT("🔢 ¡Hoy contamos! Los números del 1 al 10 en inglés."),
    GRAMMAR("How many? + número", "Para preguntar cuántos hay: How many?\nHow many cats? 🐱🐱 → Two cats. (Dos gatos)\n1 one · 2 two · 3 three · 4 four · 5 five · 6 six · 7 seven · 8 eight · 9 nine · 10 ten"),
    deck("Pre-A1 S1D2 — Los números 1-10", [
      ["one", "uno", "One apple. 🍎", "number"],
      ["two", "dos", "Two cats. 🐱🐱", "number"],
      ["three", "tres", "Three balls. ⚽⚽⚽", "number"],
      ["four", "cuatro", "Four books. 📕📗📘📙", "number"],
      ["five", "cinco", "Five stars. ⭐⭐⭐⭐⭐", "number"],
      ["six", "seis", "Six eggs. 🥚🥚🥚🥚🥚🥚", "number"],
      ["seven", "siete", "Seven days. 📅", "number"],
      ["eight", "ocho", "Eight legs. 🕷️", "number"],
      ["nine", "nueve", "Nine balloons. 🎈", "number"],
      ["ten", "diez", "Ten fingers. 🖐️🖐️", "number"],
    ]),
    vocabEx("¿Cuántos hay? 🔢", "Cuenta y elige el número correcto.", [
      mc("🍎 How many? = ___", ["one", "two", "three"], 0, "🍎 = one."),
      mc("🐱🐱 How many? = ___", ["one", "two", "three"], 1, "🐱🐱 = two."),
      mc("⚽⚽⚽ How many? = ___", ["two", "three", "four"], 1, "⚽⚽⚽ = three."),
      mc("⭐⭐⭐⭐⭐ How many? = ___", ["four", "five", "six"], 1, "⭐⭐⭐⭐⭐ = five."),
      mc("🎈🎈🎈🎈🎈🎈🎈🎈🎈 How many? = ___", ["eight", "nine", "ten"], 1, "🎈×9 = nine."),
      mc("🖐️🖐️ How many? = ___", ["nine", "ten", "eight"], 1, "🖐️🖐️ = ten fingers."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe el número", [
      fb("🎧 Escucha: 'Three balls.' Escribe el número (en cifra): ___", ["3"], "'Three' = 3."),
      fb("🎧 Escucha: 'Five stars.' Escribe el número: ___", ["5"], "'Five' = 5."),
      fb("🎧 Escucha: 'Seven days.' Escribe el número: ___", ["7"], "'Seven' = 7."),
      fb("🎧 Escucha: 'Two cats.' Escribe el número: ___", ["2"], "'Two' = 2."),
      fb("🎧 Escucha: 'Ten fingers.' Escribe el número: ___", ["10"], "'Ten' = 10."),
    ]),
    listening(1, "Listening · Parte 4 — Los números", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write the number. Three balls. Five stars. Seven days. Two cats. Ten fingers.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("⭐⭐⭐ How many stars? ___", ["three"], "⭐⭐⭐ = three."),
      fb("🐱🐱🐱🐱 How many cats? ___", ["four"], "🐱×4 = four."),
      fb("⚽ How many balls? ___", ["one"], "⚽ = one."),
      fb("🎈🎈🎈🎈🎈🎈 How many balloons? ___", ["six"], "🎈×6 = six."),
      fb("📕📗 How many books? ___", ["two"], "📕📗 = two."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Números", "Cuenta objetos a tu alrededor en inglés (dedos, juguetes, libros) usando 'How many?' y los números.", "Cuenta 5 grupos de objetos en voz alta en inglés, del 1 al 10.", "contar hasta 10", "one, two, three, four, five, six, seven, eight, nine, ten"),

    SUMMARY("Resumen del Día 2", [
      "¡Ya sabes contar del 1 al 10 en inglés!",
      "Puedes preguntar 'How many?' y responder con el número.",
    ]),
    INFO("Tarea para el Día 3", "Practica contar objetos de tu casa en inglés. Mañana: ¡saludos y presentarte!"),
  ],
};

// ───────────────────────── DÍA 3 ─────────────────────────
const DAY3 = {
  title: "Día 3 — ¡Hola! 👋 · Greetings & my name",
  description: "Saludos básicos y presentarse: 'What's your name?', 'My name's...', 'How old are you?'.",
  pedagogy: {
    objective: "Saludar, presentarse y decir la edad en inglés.",
    summary: "Saludos; What's your name?; How old are you?; Listening P3, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Sabes presentarte en inglés diciendo tu nombre y tu edad?"],
  },
  items: [
    TEXT("👋 Hello! Hoy aprendemos a saludar y a decir cómo nos llamamos."),
    GRAMMAR("Saludos y presentarse", "Hello! / Hi! (¡Hola!) · Goodbye! / Bye! (¡Adiós!)\nWhat's your name? (¿Cómo te llamas?) → My name's... (Me llamo...)\nHow old are you? (¿Cuántos años tienes?) → I'm... years old. (Tengo... años)"),
    deck("Pre-A1 S1D3 — Saludos", [
      ["hello", "hola", "Hello! 👋", "greeting"],
      ["hi", "hola (informal)", "Hi! 😊", "greeting"],
      ["goodbye", "adiós", "Goodbye! 👋", "greeting"],
      ["bye", "adiós (informal)", "Bye bye! 😊", "greeting"],
      ["name", "nombre", "My name's Tom. 🙋", "word"],
      ["my", "mi", "My name's Ana.", "word"],
      ["I'm", "yo soy / yo estoy", "I'm six years old. 🎂", "word"],
      ["old", "años (de edad)", "I'm seven years old.", "word"],
      ["please", "por favor", "Please! 🙏", "word"],
      ["thank you", "gracias", "Thank you! 😊", "phrase"],
    ]),
    vocabEx("Saludos 👋", "Elige la respuesta correcta.", [
      mc("Cuando llegas, dices: ___", ["Hello!", "Goodbye!", "Thank you!"], 0, "Hello! al llegar."),
      mc("Cuando te vas, dices: ___", ["Hello!", "Goodbye!", "Please!"], 1, "Goodbye! al irte."),
      mc("What's your name? → My ___'s Ana.", ["name", "old", "hello"], 0, "My name's Ana."),
      mc("How old are you? → I'm six years ___.", ["hello", "old", "name"], 1, "I'm six years old."),
      mc("Cuando alguien te ayuda, dices: ___", ["Thank you!", "Bye!", "Hi!"], 0, "Thank you! al agradecer."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y elige", [
      mc("🎧 Escucha: '¿Qué dice para saludar?'", ["Hello!", "Goodbye!", "Please!"], 0, "'Hello!' es un saludo de llegada."),
      mc("🎧 Escucha: 'My name's Tom.' ¿Cómo se llama?", ["Ana", "Tom", "Sam"], 1, "'My name's Tom.' → Tom."),
      mc("🎧 Escucha: 'I'm seven years old.' ¿Cuántos años tiene?", ["six", "seven", "eight"], 1, "'seven years old' → 7 años."),
      mc("🎧 Escucha: '¿Qué dice para despedirse?'", ["Hi!", "Bye!", "Thank you!"], 1, "'Bye!' es una despedida."),
      mc("🎧 Escucha: 'Thank you!' ¿Qué está diciendo la niña?", ["Hola", "Gracias", "Adiós"], 1, "'Thank you!' = Gracias."),
    ]),
    listening(3, "Listening · Parte 3 — Saludos", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. Hello! My name's Tom. I'm seven years old. Goodbye! Thank you!", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("👋 = 'Hello'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 👋 puede ser Hello."),
      mc("🙏 = 'Thank you'. ¿Está bien?", ["Sí", "No"], 1, "No: 🙏 es Please, no Thank you."),
      mc("'My name's Ana' significa 'Me llamo Ana'. ¿Está bien?", ["Sí", "No"], 0, "Sí, My name's = Me llamo."),
      mc("'How old are you?' significa '¿Cómo te llamas?'. ¿Está bien?", ["Sí", "No"], 1, "No: significa '¿Cuántos años tienes?'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Preséntate", "Practica presentarte en inglés: di 'Hello', tu nombre y tu edad.", "Di en voz alta: 'Hello! My name's [tu nombre]. I'm [tu edad] years old.'", "presentarse con nombre y edad", "Hello, My name's, I'm... years old"),

    SUMMARY("Resumen del Día 3", [
      "Ya sabes saludar (Hello, Hi) y despedirte (Goodbye, Bye).",
      "Puedes presentarte: 'My name's...' y decir tu edad: 'I'm... years old.'",
    ]),
    INFO("Tarea para el Día 4", "Practica presentarte delante de un espejo en inglés. Mañana: ¡las formas! (circle, square, triangle, star)"),
  ],
};

// ───────────────────────── DÍA 4 ─────────────────────────
const DAY4 = {
  title: "Día 4 — Las formas 🔷 · It's a + shape",
  description: "Las formas geométricas básicas y 'It's a + shape', combinando con colores y números.",
  pedagogy: {
    objective: "Reconocer las formas básicas y combinarlas con colores.",
    summary: "Formas; It's a + shape; Listening P2, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes describir un objeto por su forma y color en inglés?"],
  },
  items: [
    TEXT("🔷 Hoy aprendemos las FORMAS — ¡y las combinamos con los colores!"),
    GRAMMAR("It's a + shape", "It's a circle. ⭕ (Es un círculo)\nIt's a square. 🟦 (Es un cuadrado)\nCombinamos: It's a blue square. 🟦 (Es un cuadrado azul)"),
    deck("Pre-A1 S1D4 — Las formas", [
      ["circle", "círculo", "It's a circle. ⭕", "shape"],
      ["square", "cuadrado", "It's a square. 🟦", "shape"],
      ["triangle", "triángulo", "It's a triangle. 🔺", "shape"],
      ["star", "estrella", "It's a star. ⭐", "shape"],
      ["heart", "corazón", "It's a heart. 💛", "shape"],
      ["rectangle", "rectángulo", "It's a rectangle. 🟪", "shape"],
      ["big", "grande", "It's a big star. ⭐", "size"],
      ["small", "pequeño", "It's a small heart. 💛", "size"],
      ["and", "y", "A red circle and a blue square.", "word"],
      ["a / an", "un / una", "It's a circle. It's an orange square.", "word"],
    ]),
    vocabEx("¿Qué forma es? 🔷", "Elige la forma correcta.", [
      mc("⭕ It's a ___.", ["circle", "square", "star"], 0, "⭕ = circle."),
      mc("🟦 It's a ___.", ["triangle", "square", "heart"], 1, "🟦 = square."),
      mc("🔺 It's a ___.", ["triangle", "circle", "star"], 0, "🔺 = triangle."),
      mc("⭐ It's a ___.", ["heart", "star", "square"], 1, "⭐ = star."),
      mc("💛 It's a ___.", ["heart", "circle", "triangle"], 0, "💛 = heart."),
      mc("🟦 grande = It's a ___ square.", ["big", "small", "and"], 0, "big square."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha la forma y el color", [
      mc("🎧 Escucha: 'It's a red circle.' ¿Cuál es?", ["🔴⭕ círculo rojo", "🔵🟦 cuadrado azul", "🟡🔺 triángulo amarillo"], 0, "'red circle' → círculo rojo."),
      mc("🎧 Escucha: 'It's a blue square.' ¿Cuál es?", ["🔴⭕ círculo rojo", "🔵🟦 cuadrado azul", "🟢⭐ estrella verde"], 1, "'blue square' → cuadrado azul."),
      mc("🎧 Escucha: 'It's a yellow star.' ¿Cuál es?", ["🟡⭐ estrella amarilla", "🟣🔺 triángulo morado", "⚫💛 corazón negro"], 0, "'yellow star' → estrella amarilla."),
      mc("🎧 Escucha: 'It's a green triangle.' ¿Cuál es?", ["🟢🔺 triángulo verde", "🟤⭕ círculo marrón", "🌸🟦 cuadrado rosa"], 0, "'green triangle' → triángulo verde."),
      mc("🎧 Escucha: 'It's a big pink heart.' ¿Cuál es?", ["🌸💛 corazón rosa grande", "⚫⭕ círculo negro pequeño", "🟠🔺 triángulo naranja"], 0, "'big pink heart' → corazón rosa grande."),
    ]),
    listening(2, "Listening · Parte 2 — Formas y colores", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. It's a red circle. It's a blue square. It's a yellow star. It's a green triangle. It's a big pink heart.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("⭕ = ___", ["circle", "square", "triangle"], 0, "⭕ = circle."),
      mc("🔺 = ___", ["heart", "triangle", "star"], 1, "🔺 = triangle."),
      mc("⭐ small = a ___ star", ["big", "small", "and"], 1, "a small star."),
      mc("💛 = ___", ["heart", "circle", "square"], 0, "💛 = heart."),
      mc("🟦 big = a ___ square", ["small", "big", "a"], 1, "a big square."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Formas y colores", "Busca 3 objetos con forma clara en tu casa (una pelota, una caja, un libro) y descríbelos: forma + color.", "Describe 3 objetos usando 'It's a + colour + shape'.", "combinar forma y color", "It's a red circle, It's a blue square, It's a big star"),

    SUMMARY("Resumen del Día 4", [
      "Ya conoces las formas: circle, square, triangle, star, heart, rectangle.",
      "Puedes combinar color y forma: 'It's a blue square.'",
    ]),
    INFO("Tarea para el Día 5", "Repasa colores, números, saludos y formas. Mañana: ¡repaso y tu primera prueba!"),
  ],
};

// ───────────────────────── DÍA 5 ─────────────────────────
const DAY5 = {
  title: "Día 5 — Repaso de la semana + primera prueba 🌟",
  description: "Repaso de colores, números, saludos y formas. Primera prueba de la semana (se cuentan aciertos, sin aprobado ni suspenso).",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 1 antes de la primera prueba.",
    summary: "Repaso de colores, números 1-10, saludos y formas; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Cuántas palabras nuevas aprendiste esta semana?"],
  },
  items: [
    TEXT("🌟 ¡Muy bien! Has terminado tu primera semana de inglés. Hoy repasamos todo y hacemos la primera prueba."),
    GRAMMAR("Repaso de la Semana 1", "· Colores: It's + colour (It's red, It's blue...)\n· Números: How many? + one, two, three... ten.\n· Saludos: Hello!, Goodbye!, My name's..., I'm... years old.\n· Formas: It's a + shape (It's a circle, It's a square...)"),
    deck("Pre-A1 S1D5 — Repaso mixto", [
      ["red", "rojo", "It's red. 🍎", "colour"],
      ["blue", "azul", "It's blue. 🔵", "colour"],
      ["five", "cinco", "Five stars. ⭐⭐⭐⭐⭐", "number"],
      ["ten", "diez", "Ten fingers. 🖐️🖐️", "number"],
      ["hello", "hola", "Hello! 👋", "greeting"],
      ["name", "nombre", "My name's Ana. 🙋", "word"],
      ["circle", "círculo", "It's a circle. ⭕", "shape"],
      ["star", "estrella", "It's a star. ⭐", "shape"],
      ["big", "grande", "A big star. ⭐", "size"],
      ["small", "pequeño", "A small heart. 💛", "size"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("🍎 It's ___.", ["red", "blue", "green"], 0, "🍎 = red."),
      mc("⭐⭐⭐⭐⭐ How many? = ___", ["four", "five", "six"], 1, "⭐×5 = five."),
      mc("What's your name? → My ___'s Tom.", ["name", "old", "hello"], 0, "My name's Tom."),
      mc("⭕ It's a ___.", ["circle", "square", "star"], 0, "⭕ = circle."),
      mc("🟦 big = a ___ square", ["small", "big", "and"], 1, "a big square."),
      mc("Cuando llegas, dices: ___", ["Hello!", "Goodbye!"], 0, "Hello! al llegar."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'It's red and it's a circle.' ¿Cuál es?", ["🔴⭕", "🔵🟦", "🟡⭐"], 0, "red circle → 🔴⭕."),
      mc("🎧 'Five blue stars.' ¿Cuántas estrellas azules?", ["four", "five", "six"], 1, "Five = 5."),
      mc("🎧 'My name's Ana. I'm six years old.' ¿Cuántos años tiene?", ["five", "six", "seven"], 1, "six years old."),
      mc("🎧 'It's a big yellow square.' ¿Cuál es?", ["🟡🟦 grande", "🔴⭕ pequeño", "🟢🔺 grande"], 0, "big yellow square."),
      mc("🎧 'Goodbye!' ¿Qué está diciendo?", ["Hola", "Adiós", "Gracias"], 1, "Goodbye = Adiós."),
    ]),
    listening(1, "Listening · Repaso de la Semana 1", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. It's red and it's a circle. Five blue stars. My name's Ana. I'm six years old. It's a big yellow square. Goodbye!", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("h_ll_ (saludo)", ["hello"], "hello."),
      fb("c_rcl_ (forma redonda)", ["circle"], "circle."),
      fb("f_v_ (número 5)", ["five"], "five."),
      fb("st_r (forma con puntas)", ["star"], "star."),
      fb("bl_ (color del cielo)", ["blue"], "blue."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Habla un poco de todo: saluda, di tu nombre y edad, describe un objeto por color y forma, y cuenta hasta diez.", "Combina todo lo aprendido en un mini-diálogo hablado.", "combinar saludos, colores, números y formas", "Hello, my name's..., I'm... years old, It's a red circle, one two three..."),

    SUMMARY("Resumen de la Semana 1", [
      "¡Enhorabuena! Terminaste tu primera semana: colores, números 1-10, saludos y formas.",
      "Ahora, tu primera prueba de la semana. ¡Cuenta cuántas estrellas ⭐ consigues, no hay aprobado ni suspenso!",
      "La semana que viene: ¡la familia y el cuerpo!",
    ]),
    INFO("Prueba de la Semana 1 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡cuenta tus aciertos y sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Colores y números 1-10 · ¡Hola, English!",
  description: "Primera semana: los 10 colores básicos, los números del 1 al 10, saludos y presentarse, y las formas geométricas. Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
