/**
 * A2 Flyers · Semana 6 — "En el restaurante 🍽️ · Food and eating out".
 * Comida ampliada, pedir en un restaurante, cantidades.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY26 = {
  title: "Día 26 — Comida del mundo 🍜 · World food",
  description: "Vocabulario ampliado de comida internacional.",
  pedagogy: { objective: "Nombrar comidas de distintos países.", summary: "Comida internacional; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué comida de otros países has probado?"] },
  items: [
    TEXT("🍜 Let's explore food from around the world!"),
    GRAMMAR("Comida internacional", "Pizza is from Italy. Sushi is from Japan.\nI love trying food from different countries."),
    deck("Flyers S6D26 — Comida internacional", [
      ["noodles", "fideos", "I love noodles.", "food"],
      ["curry", "curry", "Curry is spicy.", "food"],
      ["pasta", "pasta", "Pasta is from Italy.", "food"],
      ["spicy", "picante", "This curry is spicy.", "adjective"],
      ["delicious", "delicioso/a", "This food is delicious.", "adjective"],
      ["dessert", "postre", "What's for dessert?", "word"],
      ["flavour", "sabor", "I love the flavour.", "word"],
      ["recipe", "receta", "A traditional recipe.", "word"],
    ]),
    vocabEx("Comida internacional 🍜", "Elige la opción correcta.", [
      mc("🍜 = ___", ["noodles", "curry"], 0, "noodles."),
      mc("This food is very ___! (picante)", ["spicy", "delicious"], 0, "spicy."),
      mc("What's for ___? (postre)", ["dessert", "flavour"], 0, "dessert."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la comida", [
      mc("🎧 'I love noodles, they're my favourite food from Asia.' ¿Qué comida le gusta?", ["noodles", "pasta"], 0, "'love noodles'."),
      mc("🎧 'This curry is really spicy but delicious!' ¿Cómo es el curry?", ["spicy and delicious", "sweet and cold"], 0, "'spicy but delicious'."),
    ]),
    listening(1, "Listening · Parte 1 — Comida internacional", "Escucha y responde.", "Listen and match. I love noodles, they're my favourite food from Asia. This curry is really spicy but delicious!", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Comida con mucho picante: ___", ["spicy", "sweet"], 0, "spicy."),
      mc("Lo que comes al final de la comida: ___", ["dessert", "recipe"], 0, "dessert."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Comida del mundo", "Habla de comida de diferentes países.", "Describe 3 comidas de diferentes países.", "hablar de comida internacional", "Pizza is from, Sushi is from, I love"),
    SUMMARY("Resumen del Día 26", ["Ya conoces: noodles, curry, pasta, spicy, delicious, dessert, flavour, recipe."]),
    INFO("Tarea para el Día 27", "Mañana: pedir en un restaurante."),
  ],
};

const DAY27 = {
  title: "Día 27 — En el restaurante 🍽️ · Can I have the menu, please?",
  description: "Lenguaje para pedir en un restaurante.",
  pedagogy: { objective: "Pedir comida en un restaurante.", summary: "Lenguaje de restaurante; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué pedirías en un restaurante?"] },
  items: [
    TEXT("🍽️ Can I have the menu, please? — pedimos en un restaurante."),
    GRAMMAR("Pedir en un restaurante", "Can I have the menu, please? I'd like the chicken, please.\nWhat would you like to drink? Could I have the bill, please?"),
    deck("Flyers S6D27 — En el restaurante", [
      ["menu", "menú/carta", "Can I have the menu, please?", "word"],
      ["I'd like", "me gustaría/quiero", "I'd like the chicken, please.", "phrase"],
      ["waiter", "camarero", "The waiter took our order.", "word"],
      ["order", "pedido/pedir", "Can I take your order?", "word"],
      ["bill", "cuenta", "Could I have the bill, please?", "word"],
      ["starter", "primer plato/entrante", "I'll have the soup as a starter.", "word"],
      ["main course", "plato principal", "What's the main course?", "phrase"],
      ["would you like", "¿te gustaría?/¿quieres?", "What would you like to drink?", "phrase"],
    ]),
    vocabEx("En el restaurante 🍽️", "Elige la opción correcta.", [
      mc("Can I have the ___, please? (menú)", ["menu", "bill"], 0, "menu."),
      mc("I'd ___ the chicken, please.", ["like", "would"], 0, "like."),
      mc("Could I have the ___, please? (cuenta)", ["bill", "menu"], 0, "bill."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe el pedido", [
      fb("🎧 'I'd like the chicken with rice, please.' ¿Qué pide? Escribe: ___", ["chicken"], "'I'd like the chicken'."),
      fb("🎧 'Could I have the bill, please? The food was delicious.' ¿Qué pide? Escribe: ___", ["bill"], "'Could I have the bill'."),
    ]),
    listening(2, "Listening · Parte 2 — En el restaurante", "Escucha y responde.", "Listen and write. I'd like the chicken with rice, please. Could I have the bill, please? The food was delicious.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("What would you like to eat?", ["I'd like the pasta, please.", "I'd like the menu, please."], 0, "respuesta a pedido de comida."),
      mc("Can I take your order?", ["Yes, I'd like the chicken, please.", "Yes, here's the bill."], 0, "respuesta a tomar pedido."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Pedir en un restaurante", "Practica pedir comida en un restaurante.", "Haz un pedido completo: entrante, plato principal y postre.", "pedir en un restaurante", "I'd like, Can I have, Could I have the bill"),
    SUMMARY("Resumen del Día 27", ["Puedes pedir en un restaurante: menu, I'd like, bill, starter, main course."]),
    INFO("Tarea para el Día 28", "Mañana: cantidades — a bit of, a lot of, how much/many."),
  ],
};

const DAY28 = {
  title: "Día 28 — ¿Cuánto? 🥄 · How much / how many",
  description: "Cantidades con how much/how many, a bit of, a lot of.",
  pedagogy: { objective: "Preguntar y responder sobre cantidades.", summary: "Cantidades; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Cuánta agua bebes al día?"] },
  items: [
    TEXT("🥄 How much sugar? How many apples? — cantidades."),
    GRAMMAR("Cantidades", "How much sugar do you want? A bit, please.\nHow many apples have we got? A lot of apples.\nmuch (incontables) / many (contables)."),
    deck("Flyers S6D28 — Cantidades", [
      ["how much", "¿cuánto? (incontable)", "How much sugar?", "phrase"],
      ["how many", "¿cuántos? (contable)", "How many apples?", "phrase"],
      ["a bit of", "un poco de", "A bit of sugar, please.", "phrase"],
      ["a lot of", "mucho/muchos", "A lot of apples.", "phrase"],
      ["a little", "un poco", "Just a little, please.", "phrase"],
      ["enough", "suficiente", "That's enough, thank you.", "word"],
      ["too much", "demasiado", "That's too much sugar!", "phrase"],
    ]),
    vocabEx("Cantidades 🥄", "Elige la opción correcta.", [
      mc("___ sugar do you want? (incontable)", ["How much", "How many"], 0, "How much."),
      mc("___ apples have we got? (contable)", ["How many", "How much"], 0, "How many."),
      mc("That's ___ sugar! (demasiado)", ["too much", "a bit of"], 0, "too much."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la cantidad", [
      mc("🎧 'How much sugar do you want? Just a bit, please.' ¿Cuánto azúcar quiere?", ["a bit", "a lot"], 0, "'Just a bit'."),
      mc("🎧 'How many apples have we got? We've got a lot, about ten.' ¿Cuántas manzanas tienen?", ["a lot", "none"], 0, "'We've got a lot'."),
    ]),
    listening(3, "Listening · Parte 3 — Cantidades", "Escucha y responde.", "Listen. How much sugar do you want? Just a bit, please. How many apples have we got? We've got a lot, about ten.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "How ___ (1) milk do you want in your tea? Just a bit, thanks. How ___ (2) biscuits are there? There are a ___ (3) of biscuits in the box.", [
      mc("(1)", ["much", "many"], 0, "How much milk."),
      mc("(2)", ["many", "much"], 0, "How many biscuits."),
      mc("(3)", ["lot", "bit"], 0, "a lot."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Cantidades de comida", "Habla de cantidades de comida.", "Pregunta y responde sobre cantidades de 3 alimentos.", "preguntar sobre cantidades", "How much, How many, A lot of"),
    SUMMARY("Resumen del Día 28", ["Puedes usar how much/how many, a bit of, a lot of, enough, too much."]),
    INFO("Tarea para el Día 29", "Mañana: comida saludable vs. no saludable."),
  ],
};

const DAY29 = {
  title: "Día 29 — Comida saludable 🥗 · Healthy vs junk food",
  description: "Opiniones sobre comida saludable y no saludable.",
  pedagogy: { objective: "Dar opiniones sobre alimentación saludable.", summary: "Comida saludable; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué comida saludable te gusta?"] },
  items: [
    TEXT("🥗 Healthy food vs junk food — ¿qué opinas?"),
    GRAMMAR("Opiniones sobre comida", "I think vegetables are healthy. Junk food isn't good for you.\nYou should eat more fruit and less sugar."),
    deck("Flyers S6D29 — Comida saludable", [
      ["healthy", "saludable", "Vegetables are healthy.", "adjective"],
      ["junk food", "comida basura", "Junk food isn't healthy.", "phrase"],
      ["fizzy drink", "bebida con gas/refresco", "Don't drink too many fizzy drinks.", "food"],
      ["balanced diet", "dieta equilibrada", "Eat a balanced diet.", "phrase"],
      ["fat", "grasa", "This food has a lot of fat.", "word"],
      ["sugar", "azúcar", "Too much sugar isn't good.", "word"],
      ["vitamin", "vitamina", "Fruit has lots of vitamins.", "word"],
      ["avoid", "evitar", "You should avoid junk food.", "verb"],
    ]),
    vocabEx("Comida saludable 🥗", "Elige la opción correcta.", [
      mc("Vegetables are ___. (saludables)", ["healthy", "junk food"], 0, "healthy."),
      mc("You should eat a ___ diet. (equilibrada)", ["balanced", "fat"], 0, "balanced."),
      mc("Fruit has lots of ___. (vitaminas)", ["vitamins", "fat"], 0, "vitamins."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha opiniones sobre comida", [
      mc("🎧 'I think vegetables are really healthy, I eat them every day.' ¿Qué opina de las verduras?", ["they're healthy", "they're junk food"], 0, "'vegetables are really healthy'."),
      mc("🎧 'You should avoid junk food, it has a lot of fat and sugar.' ¿Qué debería evitar?", ["junk food", "vegetables"], 0, "'avoid junk food'."),
    ]),
    listening(4, "Listening · Parte 4 — Comida saludable", "Escucha y responde.", "Listen. I think vegetables are really healthy, I eat them every day. You should avoid junk food, it has a lot of fat and sugar.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "A balanced diet includes lots of fruit and vegetables, which have many vitamins. You should avoid eating too much junk food because it has a lot of fat and sugar. Fizzy drinks aren't healthy either.", [
      mc("Fruit and vegetables have many vitamins. ¿Está bien?", ["Verdadero", "Falso"], 0, "'have many vitamins' — Verdadero."),
      mc("Junk food is part of a balanced diet. ¿Está bien?", ["Falso", "Verdadero"], 0, "'should avoid... junk food', no es parte de una dieta equilibrada."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi opinión sobre la comida", "Da tu opinión sobre comida saludable.", "Da tu opinión sobre comida saludable y no saludable.", "dar opiniones sobre alimentación", "I think vegetables are, You should avoid"),
    SUMMARY("Resumen del Día 29", ["Ya conoces: healthy, junk food, balanced diet, fat, sugar, vitamin, avoid."]),
    INFO("Tarea para el Día 30", "Mañana: ¡repaso y sexta prueba!"),
  ],
};

const DAY30 = {
  title: "Día 30 — Repaso de la semana + sexta prueba 🌟",
  description: "Repaso de comida, restaurante y cantidades. Sexta prueba.",
  pedagogy: { objective: "Repasar la Semana 6.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Pide comida en un restaurante combinando lo aprendido."] },
  items: [
    TEXT("🌟 ¡Sexta semana terminada, la mitad del curso! Repasamos comida, restaurante y cantidades."),
    GRAMMAR("Repaso de la Semana 6", "noodles, curry, spicy. I'd like, menu, bill. How much/many, a lot of. healthy, junk food."),
    deck("Flyers S6D30 — Repaso mixto", [
      ["spicy", "picante", "This curry is spicy.", "adjective"],
      ["I'd like", "me gustaría", "I'd like the chicken.", "phrase"],
      ["menu", "menú", "Can I have the menu?", "word"],
      ["bill", "cuenta", "Could I have the bill?", "word"],
      ["how much", "¿cuánto?", "How much sugar?", "phrase"],
      ["a lot of", "mucho", "A lot of apples.", "phrase"],
      ["healthy", "saludable", "Vegetables are healthy.", "adjective"],
      ["junk food", "comida basura", "Avoid junk food.", "phrase"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("This curry is very ___. (picante)", ["spicy", "healthy"], 0, "spicy."),
      mc("I'd ___ the chicken, please.", ["like", "would"], 0, "like."),
      mc("Could I have the ___, please?", ["bill", "menu"], 0, "bill."),
      mc("Vegetables are ___. (saludables)", ["healthy", "junk food"], 0, "healthy."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I'd like the curry, please, but not too spicy.' ¿Qué pide?", ["curry", "noodles"], 0, "'I'd like the curry'."),
      mc("🎧 'I think vegetables are healthier than junk food.' ¿Qué opina?", ["vegetables are healthier", "junk food is healthier"], 0, "'vegetables are healthier'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 6", "Escucha y responde.", "Listen and look. I'd like the curry, please, but not too spicy. I think vegetables are healthier than junk food.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "At the restaurant, I ___ (1) the curry, please — not too ___ (2). I think vegetables are ___ (3) than junk food.", [
      mc("(1)", ["would like", "like"], 0, "I'd like."),
      mc("(2)", ["spicy", "healthy"], 0, "spicy."),
      mc("(3)", ["healthier", "spicier"], 0, "healthier."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina comida, restaurante y opiniones.", "Habla 1-2 minutos combinando lo repasado.", "combinar comida, restaurante, opiniones", "I'd like, How much, I think vegetables are"),
    SUMMARY("Resumen de la Semana 6", ["¡Enhorabuena! Terminaste la Semana 6 — ¡la mitad del curso!", "Ahora, tu sexta prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡el cuerpo humano y los deportes!"]),
    INFO("Prueba de la Semana 6 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "En el restaurante · Food and eating out · Cantidades",
  description: "Sexta semana de A2 Flyers: comida internacional, pedir en un restaurante (menu, I'd like, bill), cantidades (how much/many, a lot of), y opiniones sobre comida saludable.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
