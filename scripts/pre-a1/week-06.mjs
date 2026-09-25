/**
 * Pre-A1 Starters · Semana 6 — "Repaso grande 🌈 (Semanas 1-5)".
 * Semana de repaso combinando colores, números, familia, casa, animales,
 * cuerpo, comida, juguetes, ropa, tiempo, can, cole, preposiciones y días.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 26 ─────────────────────────
const DAY26 = {
  title: "Día 26 — Repaso: colores, números y familia 🌈",
  description: "Repaso combinado de las Semanas 1-2.",
  pedagogy: {
    objective: "Combinar colores, números, familia y la casa.",
    summary: "Repaso S1-S2; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Qué recuerdas mejor: los colores o los números?"],
  },
  items: [
    TEXT("🌈 Hoy repasamos: colores, números, familia, my/your y la casa."),
    GRAMMAR("Repaso: Semanas 1-2", "Colores: It's + colour. Números: How many? + number.\nFamilia: This is my... My/your.\nCasa: I'm in the + room."),
    deck("Pre-A1 S6D26 — Repaso 1-2", [
      ["red", "rojo", "It's red. 🍎", "colour"],
      ["blue", "azul", "It's blue. 🔵", "colour"],
      ["seven", "siete", "Seven stars.", "number"],
      ["ten", "diez", "Ten fingers.", "number"],
      ["mum", "mamá", "This is my mum.", "family"],
      ["brother", "hermano", "This is my brother.", "family"],
      ["kitchen", "cocina", "I'm in the kitchen.", "room"],
      ["your", "tu/tus", "Is this your bag?", "word"],
      ["circle", "círculo", "It's a circle. ⭕", "shape"],
      ["dog", "perro", "I like dogs. 🐶", "animal"],
    ]),
    vocabEx("Repaso — colores, números, familia 🌈", "Elige la opción correcta.", [
      mc("🍎 It's ___.", ["red", "blue", "green"], 0, "🍎 = red."),
      mc("⭐⭐⭐⭐⭐⭐⭐ How many? = ___", ["five", "seven", "ten"], 1, "7 estrellas = seven."),
      mc("👩 This is my ___.", ["mum", "brother", "grandpa"], 0, "👩 = mum."),
      mc("🍳 I'm in the ___.", ["kitchen", "garden", "bedroom"], 0, "🍳 = kitchen."),
      mc("Is this ___ bag? (¿tuya?)", ["my", "your"], 1, "your bag."),
      mc("🐶 I like ___.", ["cats", "dogs", "birds"], 1, "🐶 = dogs."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'It's red. It's a circle.' ¿Qué es?", ["⭕ círculo rojo", "🟦 cuadrado azul"], 0, "'red circle'."),
      mc("🎧 'This is my mum. She's in the kitchen.' ¿Dónde está mamá?", ["🍳 cocina", "🌳 jardín"], 0, "'in the kitchen'."),
      mc("🎧 'I've got seven books.' ¿Cuántos libros?", ["five", "seven"], 1, "'seven' → 7."),
      mc("🎧 'I like dogs, but I don't like spiders.' ¿Qué NO le gusta?", ["dogs", "spiders"], 1, "'don't like spiders'."),
    ]),
    listening(1, "Listening · Repaso 1-2", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. It's red. It's a circle. This is my mum. She's in the kitchen. I've got seven books. I like dogs, but I don't like spiders.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("🍎 = 'red'. ¿Está bien?", ["Sí", "No"], 0, "Sí."),
      mc("👨 = 'mum'. ¿Está bien?", ["Sí", "No"], 1, "No, 👨 es dad."),
      mc("🍳 = 'kitchen'. ¿Está bien?", ["Sí", "No"], 0, "Sí."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso 1-2", "Combina colores, números, familia y la casa en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar colores, números, familia, casa", "It's red, I've got two brothers, I'm in the kitchen"),

    SUMMARY("Resumen del Día 26", ["Repasamos colores, números, familia, my/your y la casa."]),
    INFO("Tarea para el Día 27", "Repasa el vocabulario de hoy. Mañana: cuerpo, comida y juguetes."),
  ],
};

// ───────────────────────── DÍA 27 ─────────────────────────
const DAY27 = {
  title: "Día 27 — Repaso: cuerpo, comida y juguetes 🧸",
  description: "Repaso combinado de la Semana 3.",
  pedagogy: {
    objective: "Combinar el cuerpo, la comida y los juguetes.",
    summary: "Repaso S3; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Puedes describir tu cuerpo y decir qué comida te gusta?"],
  },
  items: [
    TEXT("🧸 Hoy repasamos: el cuerpo, la comida y los juguetes."),
    GRAMMAR("Repaso: Semana 3", "Cuerpo: I've got + parte del cuerpo.\nComida: I'm hungry. I want + comida.\nJuguetes: My favourite toy is + juguete."),
    deck("Pre-A1 S6D27 — Repaso 3", [
      ["eyes", "ojos", "I've got two eyes.", "body"],
      ["arm", "brazo", "I've got two arms.", "body"],
      ["apple", "manzana", "I want an apple.", "food"],
      ["milk", "leche", "I want milk.", "food"],
      ["teddy bear", "osito", "My teddy bear.", "toy"],
      ["car", "coche", "My toy car.", "toy"],
      ["hungry", "hambriento/a", "I'm hungry.", "adjective"],
      ["favourite", "favorito", "My favourite toy.", "adjective"],
      ["got", "tengo", "I've got two legs.", "word"],
      ["want", "querer", "I want cake.", "word"],
    ]),
    vocabEx("Repaso — cuerpo, comida, juguetes 🧸", "Elige la opción correcta.", [
      mc("👀 I've ___ two eyes.", ["got", "want", "like"], 0, "I've got two eyes."),
      mc("🍎 I ___ an apple.", ["got", "want", "your"], 1, "I want an apple."),
      mc("🧸 My favourite ___ is a teddy bear.", ["toy", "food", "body"], 0, "favourite toy."),
      mc("I'm ___. I want food.", ["hungry", "happy"], 0, "hungry."),
      mc("💪 I've got two ___.", ["arms", "legs", "eyes"], 0, "💪 = arms."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha y repasa", [
      mc("🎧 'I've got two eyes and I'm hungry.' ¿Qué le pasa?", ["tiene hambre", "tiene sed"], 0, "'hungry' → hambre."),
      mc("🎧 'My favourite toy is a robot. I want an apple.' ¿Qué comida quiere?", ["🍎 manzana", "🍌 plátano"], 0, "'an apple' → 🍎."),
      mc("🎧 'I've got ten fingers.' ¿Cuántos dedos?", ["five", "ten"], 1, "'ten' → 10."),
    ]),
    listening(2, "Listening · Repaso 3", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I've got two eyes and I'm hungry. My favourite toy is a robot. I want an apple. I've got ten fingers.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("👀 How many eyes? ___", ["two"], "two eyes."),
      fb("🍎 What do you want? An ___.", ["apple"], "apple."),
      fb("🧸 What's your favourite toy? A teddy ___.", ["bear"], "teddy bear."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso cuerpo, comida, juguetes", "Combina el cuerpo, la comida y los juguetes en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar cuerpo, comida y juguetes", "I've got two eyes, I'm hungry, I want an apple, My favourite toy is a teddy bear"),

    SUMMARY("Resumen del Día 27", ["Repasamos el cuerpo, la comida y los juguetes."]),
    INFO("Tarea para el Día 28", "Repasa el vocabulario de hoy. Mañana: ropa, tiempo y can."),
  ],
};

// ───────────────────────── DÍA 28 ─────────────────────────
const DAY28 = {
  title: "Día 28 — Repaso: ropa, tiempo y can 👕",
  description: "Repaso combinado de la Semana 4.",
  pedagogy: {
    objective: "Combinar la ropa, el tiempo y 'can'.",
    summary: "Repaso S4; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes decir qué ropa llevas, qué tiempo hace y qué sabes hacer?"],
  },
  items: [
    TEXT("👕 Hoy repasamos: la ropa, el tiempo y 'can'."),
    GRAMMAR("Repaso: Semana 4", "Ropa: I'm wearing + prenda. Color + ropa.\nTiempo: It's + weather.\nCan: I can + verbo. I can't + verbo."),
    deck("Pre-A1 S6D28 — Repaso 4", [
      ["T-shirt", "camiseta", "I'm wearing a T-shirt.", "clothes"],
      ["shoes", "zapatos", "My blue shoes.", "clothes"],
      ["sunny", "soleado", "It's sunny.", "weather"],
      ["cold", "frío", "It's cold.", "weather"],
      ["run", "correr", "I can run.", "verb"],
      ["swim", "nadar", "I can swim.", "verb"],
      ["can", "poder/saber", "I can sing.", "word"],
      ["can't", "no poder", "I can't fly.", "word"],
      ["wearing", "llevando puesto", "I'm wearing a hat.", "word"],
      ["jumper", "jersey", "I'm wearing a jumper.", "clothes"],
    ]),
    vocabEx("Repaso — ropa, tiempo, can 👕", "Elige la opción correcta.", [
      mc("👕 I'm ___ a T-shirt.", ["wearing", "can"], 0, "I'm wearing."),
      mc("☀️ It's ___.", ["sunny", "shoes"], 0, "It's sunny."),
      mc("🏃 I ___ run.", ["can", "wearing"], 0, "I can run."),
      mc("🙅 I ___ fly.", ["can", "can't"], 1, "I can't fly."),
      mc("🥶 It's ___.", ["cold", "hot"], 0, "It's cold."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y repasa", [
      mc("🎧 'I'm wearing my blue shoes. It's sunny.' ¿Qué tiempo hace?", ["sol", "lluvia"], 0, "'sunny' → sol."),
      mc("🎧 'It's cold. I can't go outside without a jumper.' ¿Qué necesita?", ["jersey", "camiseta"], 0, "'a jumper' → jersey."),
      mc("🎧 'I can swim, but I can't fly.' ¿Qué sabe hacer?", ["swim", "fly"], 0, "'I can swim'."),
    ]),
    listening(3, "Listening · Repaso 4", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. I'm wearing my blue shoes. It's sunny. It's cold. I can't go outside without a jumper. I can swim, but I can't fly.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("👕 = ___", ["T-shirt", "hat"], 0, "T-shirt."),
      mc("☀️ = ___", ["sunny", "rainy"], 0, "sunny."),
      mc("🏊 I can ___.", ["swim", "fly"], 0, "swim."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso ropa, tiempo, can", "Combina ropa, tiempo y habilidades en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar ropa, tiempo y can", "I'm wearing a T-shirt, It's sunny, I can run, I can't fly"),

    SUMMARY("Resumen del Día 28", ["Repasamos la ropa, el tiempo y 'can'."]),
    INFO("Tarea para el Día 29", "Repasa el vocabulario de hoy. Mañana: cole, preposiciones, números y días."),
  ],
};

// ───────────────────────── DÍA 29 ─────────────────────────
const DAY29 = {
  title: "Día 29 — Repaso: cole, preposiciones, números y días 🎒",
  description: "Repaso combinado de la Semana 5.",
  pedagogy: {
    objective: "Combinar el cole, in/on/under, números y días.",
    summary: "Repaso S5; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Puedes decir dónde está tu lápiz y qué día es hoy?"],
  },
  items: [
    TEXT("🎒 Hoy repasamos: el cole, in/on/under, números y días."),
    GRAMMAR("Repaso: Semana 5", "Cole: It's a + objeto. Preposiciones: in/on/under.\nNúmeros: eleven-twenty. Días: Monday-Sunday."),
    deck("Pre-A1 S6D29 — Repaso 5", [
      ["pencil", "lápiz", "It's a pencil.", "school"],
      ["book", "libro", "It's a book.", "school"],
      ["in", "dentro de", "It's in the bag.", "preposition"],
      ["under", "debajo de", "It's under the bed.", "preposition"],
      ["fifteen", "quince", "Fifteen stars.", "number"],
      ["twenty", "veinte", "Twenty children.", "number"],
      ["Monday", "lunes", "It's Monday.", "day"],
      ["Friday", "viernes", "It's Friday!", "day"],
      ["where", "dónde", "Where is it?", "word"],
      ["week", "semana", "Seven days in a week.", "word"],
    ]),
    vocabEx("Repaso — cole, preposiciones, números, días 🎒", "Elige la opción correcta.", [
      mc("✏️ It's a ___.", ["pencil", "chair"], 0, "pencil."),
      mc("🎒 (dentro) It's ___ the bag.", ["in", "under"], 0, "in the bag."),
      mc("15 = ___", ["fifteen", "fifty"], 0, "fifteen."),
      mc("Primer día de cole: ___", ["Monday", "Sunday"], 0, "Monday."),
      mc("🛏️ (debajo) It's ___ the bed.", ["on", "under"], 1, "under the bed."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y repasa", [
      fb("🎧 'It's Monday. My pencil is in my bag.' Escribe el día: ___", ["Monday"], "Monday."),
      fb("🎧 'Twenty children are at school.' Escribe el número: ___", ["20"], "20."),
      fb("🎧 'My book is under the table.' ¿Dónde está? Escribe: ___", ["under"], "under."),
    ]),
    listening(4, "Listening · Repaso 5", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. It's Monday. My pencil is in my bag. Twenty children are at school. My book is under the table.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("p_nc_l (lápiz)", ["pencil"], "pencil."),
      fb("_nd_r (debajo)", ["under"], "under."),
      fb("tw_nty (veinte)", ["twenty"], "twenty."),
      fb("M_nd_y (lunes)", ["Monday"], "Monday."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso cole, preposiciones, números, días", "Combina el cole, preposiciones, números y días en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar cole, preposiciones, números, días", "It's a pencil, It's in my bag, twenty, It's Monday"),

    SUMMARY("Resumen del Día 29", ["Repasamos el cole, in/on/under, números y días."]),
    INFO("Tarea para el Día 30", "Repasa TODO lo aprendido. Mañana: ¡el gran repaso final de las primeras 6 semanas!"),
  ],
};

// ───────────────────────── DÍA 30 ─────────────────────────
const DAY30 = {
  title: "Día 30 — ¡Gran repaso! + sexta prueba 🌟🎉",
  description: "Repaso GRANDE de todo lo aprendido en las Semanas 1-6. Sexta prueba de la semana.",
  pedagogy: {
    objective: "Repasar y celebrar todo lo aprendido hasta ahora.",
    summary: "Gran repaso de las Semanas 1-6; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿De qué estás más orgulloso/a de haber aprendido?"],
  },
  items: [
    TEXT("🎉 ¡30 días! Has llegado a la mitad del curso. Hoy: ¡el gran repaso de TODO!"),
    GRAMMAR("Gran repaso — Semanas 1-6", "Colores, números, familia, my/your, casa, animales, cuerpo, comida, juguetes, ropa, tiempo, can, cole, preposiciones, números grandes, días. ¡Has aprendido muchísimo!"),
    deck("Pre-A1 S6D30 — Gran repaso", [
      ["red", "rojo", "It's red. 🍎", "colour"],
      ["ten", "diez", "Ten fingers.", "number"],
      ["mum", "mamá", "This is my mum.", "family"],
      ["cat", "gato", "I like cats.", "animal"],
      ["eyes", "ojos", "I've got two eyes.", "body"],
      ["apple", "manzana", "I want an apple.", "food"],
      ["T-shirt", "camiseta", "I'm wearing a T-shirt.", "clothes"],
      ["sunny", "soleado", "It's sunny.", "weather"],
      ["can", "poder/saber", "I can swim.", "word"],
      ["Monday", "lunes", "It's Monday.", "day"],
    ]),
    vocabEx("¡Gran repaso! 🎉", "Elige la opción correcta.", [
      mc("🍎 It's ___.", ["red", "blue"], 0, "red."),
      mc("👩 This is my ___.", ["mum", "dad"], 0, "mum."),
      mc("🐱 I like ___.", ["cats", "dogs"], 0, "cats."),
      mc("👀 I've got two ___.", ["eyes", "arms"], 0, "eyes."),
      mc("🍎 I want an ___.", ["apple", "banana"], 0, "apple."),
      mc("👕 I'm ___ a T-shirt.", ["wearing", "can"], 0, "wearing."),
      mc("☀️ It's ___.", ["sunny", "rainy"], 0, "sunny."),
      mc("🏊 I ___ swim.", ["can", "can't"], 0, "can swim."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa TODO", [
      mc("🎧 'This is my mum. She's got a red T-shirt.' ¿De qué color es la camiseta?", ["rojo", "azul"], 0, "'a red T-shirt' → rojo."),
      mc("🎧 'I like cats, and I've got two cats at home.' ¿Cuántos gatos tiene?", ["one", "two"], 1, "'two cats'."),
      mc("🎧 'It's sunny today. I can play outside.' ¿Qué tiempo hace?", ["sol", "lluvia"], 0, "'sunny' → sol."),
      mc("🎧 'It's Monday. My pencil is in my bag.' ¿Qué día es?", ["Monday", "Friday"], 0, "'Monday'."),
      mc("🎧 'I'm hungry. I want an apple.' ¿Qué quiere comer?", ["apple", "banana"], 0, "'an apple'."),
    ]),
    listening(1, "Listening · Gran repaso (Semanas 1-6)", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. This is my mum. She's got a red T-shirt. I like cats, and I've got two cats at home. It's sunny today. I can play outside. It's Monday. My pencil is in my bag. I'm hungry. I want an apple.", []),

    READING_HEAD,
    readWrite("Completa las palabras — gran repaso", [
      fb("r_d (rojo)", ["red"], "red."),
      fb("m_m (mamá)", ["mum"], "mum."),
      fb("c_t (gato)", ["cat"], "cat."),
      fb("_ppl_ (manzana)", ["apple"], "apple."),
      fb("s_nny (soleado)", ["sunny"], "sunny."),
      fb("M_nd_y (lunes)", ["Monday"], "Monday."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¡Gran repaso hablado!", "Habla 2-3 minutos combinando TODO: colores, familia, animales, cuerpo, comida, ropa, tiempo, can, cole y días.", "Habla combinando todo lo aprendido en las primeras 6 semanas.", "combinar todo el vocabulario y estructuras aprendidas", "It's red, This is my mum, I like cats, I've got two eyes, I want an apple, I'm wearing a T-shirt, It's sunny, I can swim, It's Monday"),

    SUMMARY("Resumen de la Semana 6 — ¡30 días completados! 🎉", [
      "¡Enhorabuena! Has llegado a la mitad del curso (30/60 días).",
      "Repasamos TODO: colores, números, familia, casa, animales, cuerpo, comida, juguetes, ropa, tiempo, can, cole, preposiciones y días.",
      "Ahora, tu sexta prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡vamos al pueblo! (the town)",
    ]),
    INFO("Prueba de la Semana 6 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Gran repaso · Semanas 1-5 combinadas",
  description: "Sexta semana: repaso combinado de todo lo aprendido en las Semanas 1-5 (colores, números, familia, casa, animales, cuerpo, comida, juguetes, ropa, tiempo, can, cole, preposiciones y días). Día 30 cierra la mitad del curso con el gran repaso y la sexta prueba.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
