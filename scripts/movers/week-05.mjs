/**
 * A1 Movers · Semana 5 — "La comida y las compras 🛒 · some/any, would like".
 * Vocabulario de comida, contables/incontables, some/any, y 'would like'.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 21 ─────────────────────────
const DAY21 = {
  title: "Día 21 — La comida 🍽️ · Countable and uncountable",
  description: "Alimentos contables e incontables.",
  pedagogy: {
    objective: "Distinguir alimentos contables e incontables.",
    summary: "Contables/incontables; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Sabes qué alimentos se cuentan y cuáles no en inglés?"],
  },
  items: [
    TEXT("🍽️ Hoy: la comida. Algunos alimentos se cuentan, ¡otros no!"),
    GRAMMAR("Contables e incontables", "CONTABLES (se pueden contar): an apple, two eggs, three bananas.\nINCONTABLES (no se cuentan): water, rice, bread, milk, cheese."),
    deck("Movers S5D21 — La comida", [
      ["rice", "arroz", "I like rice.", "food"],
      ["cheese", "queso", "I love cheese!", "food"],
      ["meat", "carne", "I don't eat meat.", "food"],
      ["vegetables", "verduras", "Eat your vegetables!", "food"],
      ["carrot", "zanahoria", "A carrot is orange.", "food"],
      ["potato", "patata", "I like potatoes.", "food"],
      ["orange", "naranja (fruta)", "An orange is sweet.", "food"],
      ["sugar", "azúcar", "Not too much sugar!", "food"],
      ["sandwich", "sándwich/bocadillo", "A cheese sandwich.", "food"],
      ["soup", "sopa", "I love vegetable soup.", "food"],
    ]),
    vocabEx("¿Contable o incontable? 🍽️", "Elige la opción correcta.", [
      mc("Can you count 'rice'? (¿se cuenta el arroz?)", ["No, it's uncountable", "Yes, it's countable"], 0, "'rice' es incontable."),
      mc("Can you count 'carrots'? (¿se cuentan las zanahorias?)", ["Yes, it's countable", "No, it's uncountable"], 0, "'carrots' es contable."),
      mc("🧀 = ___", ["cheese", "carrot", "sandwich"], 0, "cheese."),
      mc("🥕 = ___", ["carrot", "cheese", "soup"], 0, "carrot."),
      mc("🍊 = ___", ["orange", "potato", "rice"], 0, "orange."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y encuentra la comida", [
      mc("🎧 'I love cheese sandwiches!' ¿Qué le gusta?", ["cheese sandwiches", "vegetable soup"], 0, "'cheese sandwiches'."),
      mc("🎧 'Eat your vegetables, please!' ¿Qué le piden que coma?", ["vegetables", "sugar"], 0, "'vegetables'."),
      mc("🎧 'I don't eat meat. I like rice and vegetables.' ¿Qué no come?", ["meat", "rice"], 0, "'I don't eat meat'."),
      mc("🎧 'My favourite soup is vegetable soup.' ¿Cuál es su sopa favorita?", ["vegetable soup", "cheese soup"], 0, "'vegetable soup'."),
    ]),
    listening(1, "Listening · Parte 1 — La comida", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and match. I love cheese sandwiches! Eat your vegetables, please! I don't eat meat. I like rice and vegetables. My favourite soup is vegetable soup.", []),

    READING_HEAD,
    readDefine("Encuentra la palabra correcta", [
      mc("Se hace con dos rebanadas de pan: ___", ["sandwich", "soup", "rice"], 0, "sandwich."),
      mc("Es blanco, viene del arroz: ___", ["rice", "meat", "cheese"], 0, "rice."),
      mc("Es naranja, crece bajo tierra: ___", ["carrot", "orange", "soup"], 0, "carrot."),
      mc("Viene de la leche: ___", ["cheese", "meat", "rice"], 0, "cheese."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi comida favorita", "Habla de tus alimentos favoritos, distinguiendo contables e incontables.", "Di 4 alimentos que te gustan.", "hablar de comida", "I like rice, I like carrots, I love cheese sandwiches"),

    SUMMARY("Resumen del Día 21", [
      "Ya conoces: rice, cheese, meat, vegetables, carrot, potato, orange, sugar, sandwich, soup.",
      "Sabes la diferencia entre contables e incontables.",
    ]),
    INFO("Tarea para el Día 22", "Repasa la comida. Mañana: some y any."),
  ],
};

// ───────────────────────── DÍA 22 ─────────────────────────
const DAY22 = {
  title: "Día 22 — Some y any 🥕 · There's some / Is there any?",
  description: "Uso de 'some' en frases afirmativas y 'any' en negativas/preguntas.",
  pedagogy: {
    objective: "Usar 'some' y 'any' correctamente.",
    summary: "Some/any; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Sabes cuándo usar 'some' y cuándo 'any'?"],
  },
  items: [
    TEXT("🥕 Hoy: some y any. There's some milk. Is there any bread?"),
    GRAMMAR("some / any", "SOME: en frases afirmativas. There's some milk.\nANY: en negativas y preguntas. There isn't any bread. Is there any cheese?"),
    deck("Movers S5D22 — Some/any", [
      ["some", "algo de/algunos", "There's some milk.", "word"],
      ["any", "algo de (negativo/pregunta)", "Is there any bread?", "word"],
      ["there isn't any", "no hay nada de", "There isn't any milk.", "phrase"],
      ["there aren't any", "no hay ningún/a (plural)", "There aren't any apples.", "phrase"],
      ["is there any", "hay algo de", "Is there any cheese?", "phrase"],
      ["are there any", "hay algunos/as", "Are there any eggs?", "phrase"],
      ["fridge", "frigorífico", "Look in the fridge.", "place"],
      ["cupboard", "armario de cocina", "It's in the cupboard.", "place"],
      ["empty", "vacío", "The fridge is empty!", "adjective"],
      ["full", "lleno", "The cupboard is full.", "adjective"],
    ]),
    vocabEx("Some / any 🥕", "Elige la opción correcta.", [
      mc("There's ___ milk in the fridge. (afirmativa)", ["some", "any"], 0, "some (afirmativa)."),
      mc("Is there ___ bread? (pregunta)", ["any", "some"], 0, "any (pregunta)."),
      mc("There isn't ___ cheese. (negativa)", ["any", "some"], 0, "any (negativa)."),
      mc("Are there ___ eggs? (pregunta)", ["any", "some"], 0, "any."),
      mc("There are ___ apples in the basket. (afirmativa)", ["some", "any"], 0, "some."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha y completa", [
      fb("🎧 'There's some milk in the fridge.' Escribe: There's ___ milk.", ["some"], "some."),
      fb("🎧 'Is there any cheese? No, there isn't.' Escribe: Is there ___ cheese?", ["any"], "any."),
      fb("🎧 'There aren't any apples left.' Escribe: There aren't ___ apples.", ["any"], "any."),
    ]),
    listening(2, "Listening · Parte 2 — Some/any", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. There's some milk in the fridge. Is there any cheese? No, there isn't. There aren't any apples left.", []),

    READING_HEAD,
    readStory("Lee la historia y responde Sí/No", "I looked in the fridge. There's some milk and some cheese, but there isn't any meat. In the cupboard, there are some potatoes and some rice, but there aren't any carrots. We need to go shopping!", [
      mc("There's some milk in the fridge. ¿Está bien?", ["Sí", "No"], 0, "'There's some milk' — Sí."),
      mc("There's some meat in the fridge. ¿Está bien?", ["Sí", "No"], 1, "'there isn't any meat' — No."),
      mc("There are some potatoes in the cupboard. ¿Está bien?", ["Sí", "No"], 0, "'some potatoes' — Sí."),
      mc("There are some carrots. ¿Está bien?", ["Sí", "No"], 1, "'aren't any carrots' — No."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Qué hay en tu frigorífico?", "Describe lo que hay (y no hay) en tu frigorífico usando some/any.", "Di 4 frases con some y any sobre comida.", "usar some y any", "There's some milk, There isn't any cheese, Is there any bread?"),

    SUMMARY("Resumen del Día 22", [
      "SOME en frases afirmativas. ANY en negativas y preguntas.",
      "Puedes describir lo que hay en la nevera.",
    ]),
    INFO("Tarea para el Día 23", "Practica some/any. Mañana: I'd like... en la tienda."),
  ],
};

// ───────────────────────── DÍA 23 ─────────────────────────
const DAY23 = {
  title: "Día 23 — I'd like... 🛍️ · En la tienda",
  description: "Pedir cosas de forma educada con 'I'd like...' en el contexto de una tienda.",
  pedagogy: {
    objective: "Pedir cosas educadamente en una tienda.",
    summary: "I'd like...; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Sabes pedir algo educadamente en una tienda en inglés?"],
  },
  items: [
    TEXT("🛍️ ¡De compras! I'd like some apples, please."),
    GRAMMAR("I'd like...", "I'd like + cosa, please. (Me gustaría..., por favor — más educado que 'I want')\nI'd like some bread, please. How much is it?"),
    deck("Movers S5D23 — En la tienda", [
      ["I'd like", "me gustaría", "I'd like some apples, please.", "phrase"],
      ["how much", "cuánto cuesta", "How much is it?", "phrase"],
      ["money", "dinero", "I've got some money.", "word"],
      ["pounds", "libras (dinero)", "It's five pounds.", "word"],
      ["shopping list", "lista de la compra", "Here's my shopping list.", "phrase"],
      ["basket", "cesta", "Put it in the basket.", "object"],
      ["shop assistant", "dependiente/a", "Ask the shop assistant.", "word"],
      ["pay", "pagar", "I need to pay.", "verb"],
      ["receipt", "recibo", "Here's your receipt.", "word"],
      ["change", "cambio (dinero)", "Here's your change.", "word"],
    ]),
    vocabEx("En la tienda 🛍️", "Elige la opción correcta.", [
      mc("I'd ___ some apples, please. (me gustaría)", ["like", "want"], 0, "I'd like."),
      mc("___ is it? (cuánto cuesta)", ["How much", "How many"], 0, "How much."),
      mc("Here's my shopping ___. (lista)", ["list", "basket"], 0, "list."),
      mc("Put it in the ___. (cesta)", ["basket", "receipt"], 0, "basket."),
      mc("I need to ___. (pagar)", ["pay", "change"], 0, "pay."),
    ]),

    LISTENING_HEAD,
    listenColourWrite("Escucha la conversación en la tienda", [
      fb("🎧 'I'd like some apples, please.' Escribe lo que pide: ___", ["apples"], "apples."),
      fb("🎧 'How much is it? It's five pounds.' Escribe el precio: ___ pounds", ["five", "5"], "five."),
      fb("🎧 'Here's your change, thank you!' Escribe: your ___", ["change"], "change."),
    ]),
    listening(3, "Listening · Parte 3 — En la tienda", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. I'd like some apples, please. How much is it? It's five pounds. Here's your change, thank you!", []),

    READING_HEAD,
    readGapChoice("Elige la opción correcta", "Shop assistant: Hello! Can I help you? Child: Yes, please. ___ (1) like some bread and some cheese. Shop assistant: Of course! ___ (2) much is that? That's four pounds. Child: Here you are. Shop assistant: Thank you! Here's your ___ (3).", [
      mc("(1)", ["I'd", "I'm", "I've"], 0, "I'd like."),
      mc("(2)", ["How", "What", "Why"], 0, "How much."),
      mc("(3)", ["change", "basket", "list"], 0, "change."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Ir de compras", "Practica un diálogo en una tienda: pide 3 cosas con 'I'd like...' y pregunta el precio.", "Practica un diálogo completo de compra.", "practicar un diálogo de compras", "I'd like some apples please, How much is it?"),

    SUMMARY("Resumen del Día 23", [
      "'I'd like...' es más educado que 'I want...'",
      "Puedes preguntar el precio: 'How much is it?'",
    ]),
    INFO("Tarea para el Día 24", "Practica un diálogo de compras. Mañana: comidas del día (breakfast, lunch, dinner)."),
  ],
};

// ───────────────────────── DÍA 24 ─────────────────────────
const DAY24 = {
  title: "Día 24 — Las comidas del día 🍳 · Breakfast, lunch, dinner",
  description: "Las tres comidas principales y qué se come en cada una.",
  pedagogy: {
    objective: "Describir qué se come en cada comida del día.",
    summary: "Comidas del día; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué desayunas, comes y cenas normalmente?"],
  },
  items: [
    TEXT("🍳 Breakfast, lunch, dinner — ¡las comidas del día!"),
    GRAMMAR("Comidas del día", "For breakfast, I have... (Para desayunar, tomo...)\nFor lunch/dinner, I eat..."),
    deck("Movers S5D24 — Comidas del día", [
      ["breakfast", "desayuno", "For breakfast, I have toast.", "meal"],
      ["lunch", "comida (mediodía)", "For lunch, I eat a sandwich.", "meal"],
      ["dinner", "cena", "For dinner, we have soup.", "meal"],
      ["toast", "tostada", "I like toast with jam.", "food"],
      ["jam", "mermelada", "Toast with jam.", "food"],
      ["cereal", "cereales", "I eat cereal for breakfast.", "food"],
      ["snack", "aperitivo/merienda", "I have a snack after school.", "meal"],
      ["for breakfast", "de desayuno", "For breakfast, I have eggs.", "phrase"],
      ["healthy", "sano/a", "Fruit is healthy.", "adjective"],
      ["delicious", "delicioso/a", "This soup is delicious!", "adjective"],
    ]),
    vocabEx("Comidas del día 🍳", "Elige la opción correcta.", [
      mc("For ___, I have toast. (desayuno)", ["breakfast", "dinner"], 0, "breakfast."),
      mc("For ___, I eat a sandwich. (comida)", ["lunch", "breakfast"], 0, "lunch."),
      mc("For ___, we have soup. (cena)", ["dinner", "lunch"], 0, "dinner."),
      mc("Toast with ___. (mermelada)", ["jam", "cereal"], 0, "jam."),
      mc("Fruit is ___. (sano)", ["healthy", "delicious"], 0, "healthy."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha las comidas del día", [
      mc("🎧 'For breakfast, I have cereal and milk.' ¿Qué desayuna?", ["cereal and milk", "toast and jam"], 0, "'cereal and milk'."),
      mc("🎧 'For lunch, I usually eat a cheese sandwich.' ¿Qué come a mediodía?", ["cheese sandwich", "vegetable soup"], 0, "'cheese sandwich'."),
      mc("🎧 'For dinner, we have vegetable soup. It's delicious!' ¿Qué cenan?", ["vegetable soup", "toast"], 0, "'vegetable soup'."),
      mc("🎧 'I have a snack after school — usually fruit.' ¿Cuándo merienda?", ["after school", "before school"], 0, "'after school'."),
    ]),
    listening(4, "Listening · Parte 4 — Comidas del día", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. For breakfast, I have cereal and milk. For lunch, I usually eat a cheese sandwich. For dinner, we have vegetable soup. It's delicious! I have a snack after school — usually fruit.", []),

    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: breakfast, lunch, dinner, healthy, delicious\n\nFor ___ (1), I have toast and jam. For ___ (2), I eat a sandwich at school. For ___ (3), my family has soup — it's always ___ (4)! I try to eat ___ (5) food every day.", [
      fb("(1)", ["breakfast"], "breakfast."),
      fb("(2)", ["lunch"], "lunch."),
      fb("(3)", ["dinner"], "dinner."),
      fb("(4)", ["delicious"], "delicious."),
      fb("(5)", ["healthy"], "healthy."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis comidas del día", "Describe qué desayunas, comes y cenas normalmente.", "Describe tus 3 comidas principales del día.", "describir las comidas del día", "For breakfast, I have toast, For lunch, I eat a sandwich, For dinner, I have soup"),

    SUMMARY("Resumen del Día 24", [
      "Ya conoces: breakfast, lunch, dinner, toast, jam, cereal, snack, healthy, delicious.",
      "Puedes describir tus comidas del día.",
    ]),
    INFO("Tarea para el Día 25", "Repasa la comida, some/any, la tienda y las comidas del día. Mañana: ¡repaso y quinta prueba!"),
  ],
};

// ───────────────────────── DÍA 25 ─────────────────────────
const DAY25 = {
  title: "Día 25 — Repaso de la semana + quinta prueba 🌟",
  description: "Repaso de comida, some/any, la tienda y las comidas del día. Quinta prueba de la semana — ¡mitad del curso!",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 5 antes de la prueba.",
    summary: "Repaso de comida y compras; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué has aprendido sobre la comida esta semana?"],
  },
  items: [
    TEXT("🌟 ¡Quinta semana terminada — mitad del curso Movers! Hoy repasamos: comida, some/any, la tienda y las comidas del día."),
    GRAMMAR("Repaso de la Semana 5", "· Comida: rice, cheese, meat, vegetables. Contables e incontables.\n· Some/any: There's some milk. Is there any bread?\n· Tienda: I'd like..., How much is it?\n· Comidas: breakfast, lunch, dinner."),
    deck("Movers S5D25 — Repaso mixto", [
      ["rice", "arroz", "I like rice.", "food"],
      ["cheese", "queso", "I love cheese!", "food"],
      ["some", "algo de", "There's some milk.", "word"],
      ["any", "algo de (neg/preg)", "Is there any bread?", "word"],
      ["I'd like", "me gustaría", "I'd like some apples.", "phrase"],
      ["how much", "cuánto cuesta", "How much is it?", "phrase"],
      ["breakfast", "desayuno", "For breakfast.", "meal"],
      ["dinner", "cena", "For dinner.", "meal"],
      ["healthy", "sano", "Healthy food.", "adjective"],
      ["delicious", "delicioso", "It's delicious!", "adjective"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("There's ___ milk. (afirmativa)", ["some", "any"], 0, "some."),
      mc("Is there ___ cheese? (pregunta)", ["any", "some"], 0, "any."),
      mc("I'd ___ some apples, please.", ["like", "want"], 0, "like."),
      mc("For ___, I have toast.", ["breakfast", "dinner"], 0, "breakfast."),
      mc("🧀 = ___", ["cheese", "rice"], 0, "cheese."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'There's some cheese in the fridge, but there isn't any meat.' ¿Qué hay?", ["cheese", "meat"], 0, "'some cheese'."),
      mc("🎧 'I'd like some bread, please. How much is it?' ¿Qué pide?", ["bread", "cheese"], 0, "'some bread'."),
      mc("🎧 'For breakfast, I have toast. For dinner, we have soup.' ¿Qué desayuna?", ["toast", "soup"], 0, "'toast'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 5", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. There's some cheese in the fridge, but there isn't any meat. I'd like some bread, please. How much is it? For breakfast, I have toast. For dinner, we have soup.", []),

    READING_HEAD,
    readWrite("Completa las palabras — repaso", [
      fb("ch__s_ (queso)", ["cheese"], "cheese."),
      fb("br__kf_st (desayuno)", ["breakfast"], "breakfast."),
      fb("d_l_c__s (delicioso)", ["delicious"], "delicious."),
      fb("h_ w m_ch (cuánto)", ["how much"], "how much."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina comida, some/any, ir de compras y las comidas del día.", "Habla 1-2 minutos combinando lo repasado.", "combinar comida, some/any, tienda, comidas del día", "There's some cheese, I'd like some apples, For breakfast I have toast"),

    SUMMARY("Resumen de la Semana 5 — ¡Mitad del curso Movers! 🎉", [
      "¡Enhorabuena! Terminaste la Semana 5: comida, some/any, la tienda y las comidas del día.",
      "Ya vas por la mitad del curso Movers.",
      "Ahora, tu quinta prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡repaso de todo lo aprendido!",
    ]),
    INFO("Prueba de la Semana 5 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "La comida · Some/any · En la tienda · Comidas del día",
  description: "Quinta semana de A1 Movers: alimentos contables e incontables, some/any, pedir cosas educadamente con 'I'd like...' en una tienda, y las comidas del día (breakfast, lunch, dinner). Cada día, las 4 destrezas con el formato real de Movers. Día 25 marca la mitad del curso.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
