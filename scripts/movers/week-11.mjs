/**
 * A1 Movers · Semana 11 — "Gran repaso final 🏆 · Everything together".
 * Repaso integral de todo el curso antes de la recta final.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY51 = {
  title: "Día 51 — Repaso: familia y casa 🏠",
  description: "Gran repaso: familia, casa, rutina diaria.",
  pedagogy: { objective: "Repasar familia, casa y rutina.", summary: "Repaso integral 1; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["Describe tu casa y tu familia."] },
  items: [
    TEXT("🏠 Gran repaso: familia, casa y rutina diaria."),
    GRAMMAR("Repaso: presente simple y rutina", "I live in a house. I've got a sister. I get up at seven o'clock."),
    deck("Movers S11D51 — Familia y casa", [
      ["cousin", "primo/a", "I've got a cousin.", "family"],
      ["living room", "salón", "We watch TV in the living room.", "house"],
      ["kitchen", "cocina", "Mum cooks in the kitchen.", "house"],
      ["get up", "levantarse", "I get up at seven.", "verb"],
      ["have breakfast", "desayunar", "I have breakfast at eight.", "phrase"],
      ["go to bed", "ir a la cama", "I go to bed at nine.", "phrase"],
      ["every day", "cada día", "I brush my teeth every day.", "phrase"],
      ["routine", "rutina", "My daily routine.", "word"],
    ]),
    vocabEx("Familia y casa 🏠", "Elige la opción correcta.", [
      mc("We watch TV in the ___.", ["living room", "kitchen"], 0, "living room."),
      mc("I ___ at seven o'clock. (me levanto)", ["get up", "go to bed"], 0, "get up."),
      mc("Mum cooks in the ___.", ["kitchen", "bedroom"], 0, "kitchen."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une", [
      mc("🎧 'I get up at seven and have breakfast in the kitchen.' ¿Dónde desayuna?", ["kitchen", "living room"], 0, "'in the kitchen'."),
      mc("🎧 'My cousin watches TV in the living room every day.' ¿Dónde ve la tele?", ["living room", "bedroom"], 0, "'in the living room'."),
    ]),
    listening(1, "Listening · Repaso — Familia y casa", "Escucha y responde.", "Listen and match. I get up at seven and have breakfast in the kitchen. My cousin watches TV in the living room every day.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("El hijo de tu tío/a: ___", ["cousin", "nephew"], 0, "cousin."),
      mc("La habitación donde se cocina: ___", ["kitchen", "living room"], 0, "kitchen."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi familia y mi casa", "Describe tu familia, casa y rutina.", "Habla 1 minuto combinando familia, casa y rutina.", "repasar familia, casa, rutina", "I live in a house, I get up at seven"),
    SUMMARY("Resumen del Día 51", ["Repaso completado: familia, casa, rutina diaria."]),
    INFO("Tarea para el Día 52", "Mañana: repaso de comida, ropa y animales."),
  ],
};

const DAY52 = {
  title: "Día 52 — Repaso: comida, ropa y animales 🍎",
  description: "Gran repaso: comida, ropa, animales salvajes.",
  pedagogy: { objective: "Repasar comida, ropa y animales.", summary: "Repaso integral 2; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué comes y qué ropa llevas en verano?"] },
  items: [
    TEXT("🍎 Gran repaso: comida, ropa y animales salvajes."),
    GRAMMAR("Repaso: some/any, presente continuo", "There's some rice. There isn't any bread.\nShe's wearing a jacket. The elephant is eating leaves."),
    deck("Movers S11D52 — Comida, ropa, animales", [
      ["some", "algo de / algunos", "There's some rice.", "grammar"],
      ["any", "ninguno/a (negativo/pregunta)", "There isn't any bread.", "grammar"],
      ["jacket", "chaqueta", "She's wearing a jacket.", "clothes"],
      ["elephant", "elefante", "The elephant is big.", "animal"],
      ["giraffe", "jirafa", "The giraffe is tall.", "animal"],
      ["wearing", "llevando puesto", "What are you wearing?", "word"],
    ]),
    vocabEx("Comida, ropa, animales 🍎", "Elige la opción correcta.", [
      mc("There's ___ rice on the table.", ["some", "any"], 0, "some."),
      mc("She's ___ a yellow jacket.", ["wearing", "wear"], 0, "wearing."),
      mc("The ___ has a long neck.", ["giraffe", "elephant"], 0, "giraffe."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe", [
      fb("🎧 'There's some rice but there isn't any bread.' ¿Qué no hay? Escribe: ___", ["bread"], "'any bread'."),
      fb("🎧 'The elephant is wearing... no wait, elephants don't wear clothes!' ¿Qué animal es? Escribe: ___", ["elephant"], "elephant."),
    ]),
    listening(2, "Listening · Repaso — Comida, ropa, animales", "Escucha y responde.", "Listen and write. There's some rice but there isn't any bread. Elephants don't wear clothes!", []),
    READING_HEAD,
    readStory("Lee y responde Sí/No", "At the zoo, we saw an elephant and a giraffe. The giraffe was eating leaves from a tall tree. I was wearing my favourite jacket because it was cold.", [
      mc("They saw a giraffe. ¿Está bien?", ["Sí", "No"], 0, "'saw... a giraffe' — Sí."),
      mc("It was hot, so he wore shorts. ¿Está bien?", ["Sí", "No"], 1, "'was cold'... 'wearing my... jacket', no shorts."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Comida, ropa, animales", "Combina comida, ropa y animales.", "Habla 1 minuto combinando los tres temas.", "repasar comida, ropa, animales", "There's some rice, I'm wearing a jacket, The elephant is big"),
    SUMMARY("Resumen del Día 52", ["Repaso completado: comida (some/any), ropa, animales salvajes."]),
    INFO("Tarea para el Día 53", "Mañana: repaso del pasado y las preguntas."),
  ],
};

const DAY53 = {
  title: "Día 53 — Repaso: el pasado y preguntas ⏳",
  description: "Gran repaso: pasado simple, preguntas con wh-words.",
  pedagogy: { objective: "Repasar pasado y preguntas.", summary: "Repaso integral 3; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Qué hiciste el fin de semana pasado?"] },
  items: [
    TEXT("⏳ Gran repaso: el pasado y las preguntas."),
    GRAMMAR("Repaso: pasado y wh-questions", "Yesterday I went to the park. Did you have fun? Yes, I did.\nWhere did you go? What did you eat?"),
    deck("Movers S11D53 — Pasado y preguntas", [
      ["went", "fue/fui", "I went to the park.", "verb"],
      ["did you", "¿hiciste...?", "Did you have fun?", "phrase"],
      ["where", "dónde", "Where did you go?", "word"],
      ["what", "qué", "What did you eat?", "word"],
      ["when", "cuándo", "When did you go?", "word"],
      ["because", "porque", "I was happy because I won.", "word"],
    ]),
    vocabEx("Pasado y preguntas ⏳", "Elige la opción correcta.", [
      mc("___ did you go? (dónde)", ["Where", "What"], 0, "Where."),
      mc("Did you have fun? Yes, I ___.", ["did", "do"], 0, "did."),
      mc("I was happy ___ I won. (porque)", ["because", "when"], 0, "because."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige", [
      mc("🎧 'Where did you go? I went to my grandma's house.' ¿Adónde fue?", ["grandma's house", "the park"], 0, "'my grandma's house'."),
      mc("🎧 'What did you eat? I ate a delicious cake.' ¿Qué comió?", ["cake", "sandwich"], 0, "'ate a... cake'."),
    ]),
    listening(3, "Listening · Repaso — Pasado y preguntas", "Escucha y responde.", "Listen. Where did you go? I went to my grandma's house. What did you eat? I ate a delicious cake.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "___ (1) did you go yesterday? I went to the park. ___ (2) did you do there? I played football with my friends ___ (3) it was sunny.", [
      mc("(1)", ["Where", "What"], 0, "Where."),
      mc("(2)", ["What", "Where"], 0, "What."),
      mc("(3)", ["because", "where"], 0, "because."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Entrevista sobre el pasado", "Responde preguntas sobre el pasado.", "Responde: ¿adónde fuiste?, ¿qué hiciste?, ¿por qué?", "responder preguntas en pasado", "I went to, I played, because it was fun"),
    SUMMARY("Resumen del Día 53", ["Repaso completado: pasado simple y preguntas con wh-words."]),
    INFO("Tarea para el Día 54", "Mañana: repaso de deportes, salud y can/could."),
  ],
};

const DAY54 = {
  title: "Día 54 — Repaso: deportes, salud y habilidades 🏆",
  description: "Gran repaso: deportes, salud, can/could, should/shouldn't.",
  pedagogy: { objective: "Repasar deportes, salud y habilidades.", summary: "Repaso integral 4; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué puedes hacer bien y qué deberías hacer si te sientes mal?"] },
  items: [
    TEXT("🏆 Gran repaso: deportes, salud y habilidades."),
    GRAMMAR("Repaso: can/could, should/shouldn't", "I can swim. I could swim when I was five.\nYou should rest if you feel ill."),
    deck("Movers S11D54 — Deportes, salud, habilidades", [
      ["basketball", "baloncesto", "I play basketball.", "sport"],
      ["headache", "dolor de cabeza", "I've got a headache.", "health"],
      ["should", "deberías", "You should rest.", "modal"],
      ["can", "poder", "I can swim.", "modal"],
      ["could", "podía", "I could read at four.", "modal"],
      ["match", "partido", "We won the match.", "word"],
    ]),
    vocabEx("Deportes, salud, habilidades 🏆", "Elige la opción correcta.", [
      mc("I ___ a headache today. (tengo)", ["have got", "has got"], 0, "have got."),
      mc("You should ___ if you feel ill.", ["rest", "run"], 0, "rest."),
      mc("I ___ ride a bike when I was six. (podía)", ["could", "can"], 0, "could."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha y repasa", [
      mc("🎧 'I can play basketball very well now.' ¿Qué puede hacer bien?", ["play basketball", "swim"], 0, "'play basketball... well'."),
      mc("🎧 'I've got a headache, so I should rest.' ¿Qué debería hacer?", ["rest", "play"], 0, "'should rest'."),
    ]),
    listening(4, "Listening · Repaso — Deportes, salud, habilidades", "Escucha y responde.", "Listen. I can play basketball very well now. I've got a headache, so I should rest.", []),
    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: can, should, headache, basketball\n\nI play ___ (1) every Saturday. Today I've got a ___ (2), so I ___ (3) rest. But I ___ (4) still watch my favourite sport on TV.", [
      fb("(1)", ["basketball"], "basketball."), fb("(2)", ["headache"], "headache."), fb("(3)", ["should"], "should."), fb("(4)", ["can"], "can."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso final de deportes y salud", "Combina deportes, salud y habilidades.", "Habla 1 minuto combinando los tres temas.", "repasar deportes, salud, habilidades", "I can play basketball, I should rest, I could swim"),
    SUMMARY("Resumen del Día 54", ["Repaso completado: deportes, salud, can/could, should/shouldn't."]),
    INFO("Tarea para el Día 55", "Mañana: ¡repaso total y undécima prueba!"),
  ],
};

const DAY55 = {
  title: "Día 55 — Gran repaso total + undécima prueba 🌟",
  description: "Repaso de todo el curso. Undécima prueba.",
  pedagogy: { objective: "Repasar todo el curso de A1 Movers.", summary: "Repaso total; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Cuenta todo lo que sabes decir en inglés ahora."] },
  items: [
    TEXT("🌟 ¡Gran repaso total! Ya casi llegamos a la recta final."),
    GRAMMAR("Repaso de todo el curso", "Familia, casa, rutina. Comida, ropa, animales. Pasado simple. Deportes, salud, can/could."),
    deck("Movers S11D55 — Repaso total", [
      ["cousin", "primo/a", "I've got a cousin.", "family"],
      ["some/any", "algo/ninguno", "There's some rice.", "grammar"],
      ["went", "fue/fui", "I went to the park.", "verb"],
      ["did you", "¿hiciste...?", "Did you have fun?", "phrase"],
      ["can", "poder", "I can swim.", "modal"],
      ["should", "deberías", "You should rest.", "modal"],
      ["wearing", "llevando puesto", "I'm wearing a jacket.", "word"],
      ["basketball", "baloncesto", "I play basketball.", "sport"],
    ]),
    vocabEx("Repaso total 🌟", "Elige la opción correcta.", [
      mc("I ___ to the park yesterday. (fui)", ["went", "go"], 0, "went."),
      mc("___ you have fun? (pregunta pasado)", ["Did", "Do"], 0, "Did."),
      mc("I ___ swim now. (puedo)", ["can", "could"], 0, "can."),
      mc("You should ___ if you feel ill.", ["rest", "run"], 0, "rest."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa todo", [
      mc("🎧 'Yesterday I went to my cousin's house and we played basketball.' ¿Qué hicieron?", ["played basketball", "watched TV"], 0, "'played basketball'."),
      mc("🎧 'I've got a headache, so I should rest, but I can still read.' ¿Qué puede hacer?", ["read", "run"], 0, "'can still read'."),
    ]),
    listening(1, "Listening · Gran repaso total", "Escucha y responde.", "Listen and look. Yesterday I went to my cousin's house and we played basketball. I've got a headache, so I should rest, but I can still read.", []),
    READING_HEAD,
    readWrite("Completa las palabras", [fb("w_nt (fue/fui)", ["went"], "went."), fb("c_n (puedo)", ["can"], "can."), fb("sh__ld (deberías)", ["should"], "should.")]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi repaso total", "Combina todos los temas del curso.", "Habla 1-2 minutos combinando familia, pasado, deportes y salud.", "combinar todo el curso", "I live in a house, I went to, I can, I should"),
    SUMMARY("Resumen de la Semana 11", ["¡Enhorabuena! Terminaste el gran repaso total.", "Ahora, tu undécima prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡la recta final hacia tu simulacro Movers!"]),
    INFO("Prueba de la Semana 11 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Gran repaso final · Everything together",
  description: "Undécima semana de A1 Movers: repaso integral de todo el curso — familia, casa, rutina, comida, ropa, animales, pasado simple, deportes, salud y can/could/should — antes de la recta final.",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
