/**
 * A2 Flyers · Semana 10 — "Gran repaso integral 🏆 · Everything together".
 * Repaso de todo el curso antes de la recta final.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY46 = {
  title: "Día 46 — Repaso: personalidad y futuro 🌟",
  description: "Gran repaso: personalidad, going to, will.",
  pedagogy: { objective: "Repasar personalidad y el futuro.", summary: "Repaso integral 1; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["Describe tu personalidad y tus planes futuros."] },
  items: [
    TEXT("🌟 Gran repaso: personalidad, going to y will."),
    GRAMMAR("Repaso: personalidad y futuro", "I'm friendly and clever. I'm going to visit my grandma. I think it will be sunny."),
    deck("Flyers S10D46 — Personalidad y futuro", [
      ["friendly", "amigable", "I'm friendly.", "personality"],
      ["clever", "listo/a", "She's clever.", "personality"],
      ["going to", "ir a (planes)", "I'm going to visit.", "grammar"],
      ["will", "predicción futura", "I think it will rain.", "modal"],
      ["habitat", "hábitat", "Monkeys live in the jungle.", "word"],
    ]),
    vocabEx("Personalidad y futuro 🌟", "Elige la opción correcta.", [
      mc("I'm ___. (amigable)", ["friendly", "boring"], 0, "friendly."),
      mc("I'm ___ visit my grandma. (voy a)", ["going to", "will"], 0, "going to."),
      mc("I think it ___ rain. (predicción)", ["will", "going to"], 0, "will."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une", [
      mc("🎧 'I'm friendly and clever, and I'm going to visit my cousin this weekend.' ¿Qué va a hacer?", ["visit her cousin", "stay home"], 0, "'going to visit my cousin'."),
      mc("🎧 'I think it will be sunny for our trip to the jungle.' ¿Qué predice?", ["sunny weather", "rainy weather"], 0, "'will be sunny'."),
    ]),
    listening(1, "Listening · Repaso — Personalidad y futuro", "Escucha y responde.", "Listen and match. I'm friendly and clever, and I'm going to visit my cousin this weekend. I think it will be sunny for our trip to the jungle.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Una persona muy inteligente: ___", ["clever", "shy"], 0, "clever."),
      mc("Donde viven los monos: ___", ["jungle", "desert"], 0, "jungle."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi personalidad y mis planes", "Combina personalidad y planes futuros.", "Habla 1 minuto combinando personalidad, going to y will.", "repasar personalidad y futuro", "I'm friendly, I'm going to, I think it will"),
    SUMMARY("Resumen del Día 46", ["Repaso completado: personalidad, going to, will, hábitats."]),
    INFO("Tarea para el Día 47", "Mañana: repaso de experiencias y viajes."),
  ],
};

const DAY47 = {
  title: "Día 47 — Repaso: experiencias y viajes 🗺️",
  description: "Gran repaso: presente perfecto, experiencias, viajes.",
  pedagogy: { objective: "Repasar presente perfecto y viajes.", summary: "Repaso integral 2; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué experiencias has tenido viajando?"] },
  items: [
    TEXT("🗺️ Gran repaso: experiencias con presente perfecto y viajes."),
    GRAMMAR("Repaso: presente perfecto y viajes", "Have you ever been to Paris? I've eaten snails twice. I've travelled abroad many times."),
    deck("Flyers S10D47 — Experiencias y viajes", [
      ["have you ever", "¿alguna vez has...?", "Have you ever been there?", "phrase"],
      ["been", "estado/ido", "I've been to Paris.", "verb"],
      ["eaten", "comido", "I've eaten snails.", "verb"],
      ["twice", "dos veces", "I've seen it twice.", "adverb"],
      ["abroad", "al extranjero", "I've travelled abroad.", "word"],
      ["passport", "pasaporte", "Don't forget your passport.", "object"],
    ]),
    vocabEx("Experiencias y viajes 🗺️", "Elige la opción correcta.", [
      mc("Have you ___ been to London?", ["ever", "never"], 0, "ever."),
      mc("I've ___ snails once. (comido)", ["eaten", "eat"], 0, "eaten."),
      mc("I've travelled ___ many times.", ["abroad", "passport"], 0, "abroad."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe", [
      fb("🎧 'I've been to Paris twice and I've eaten snails there.' ¿Cuántas veces ha estado en París? Escribe: ___", ["twice"], "'been to Paris twice'."),
      fb("🎧 'I've travelled abroad many times, don't forget your passport!' ¿Qué no debe olvidar? Escribe: ___", ["passport"], "'don't forget your passport'."),
    ]),
    listening(2, "Listening · Repaso — Experiencias y viajes", "Escucha y responde.", "Listen and write. I've been to Paris twice and I've eaten snails there. I've travelled abroad many times, don't forget your passport!", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("Have you ever eaten snails?", ["Yes, I've eaten them twice.", "Yes, I'm going to eat them."], 0, "presente perfecto."),
      mc("Have you got your passport?", ["Yes, I've got it in my bag.", "Yes, I will have it."], 0, "presente simple con got."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis experiencias de viaje", "Combina experiencias y viajes.", "Habla 1 minuto combinando presente perfecto y vocabulario de viajes.", "repasar experiencias y viajes", "I've been to, I've eaten, I've travelled abroad"),
    SUMMARY("Resumen del Día 47", ["Repaso completado: presente perfecto (ever/never), participios, viajes."]),
    INFO("Tarea para el Día 48", "Mañana: repaso de la ciudad y las normas."),
  ],
};

const DAY48 = {
  title: "Día 48 — Repaso: la ciudad y las normas 📏",
  description: "Gran repaso: lugares, direcciones, superlativos, must/mustn't.",
  pedagogy: { objective: "Repasar la ciudad y las normas.", summary: "Repaso integral 3; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["Describe tu ciudad y las normas de tu colegio."] },
  items: [
    TEXT("📏 Gran repaso: la ciudad, direcciones, superlativos y las normas."),
    GRAMMAR("Repaso: ciudad y normas", "Go straight on, it's opposite the library. It's the tallest building. You must wear a uniform. You mustn't run."),
    deck("Flyers S10D48 — Ciudad y normas", [
      ["library", "biblioteca", "Go to the library.", "place"],
      ["opposite", "enfrente de", "It's opposite the cinema.", "preposition"],
      ["the tallest", "el más alto", "It's the tallest building.", "superlative"],
      ["must", "deber", "You must wear a uniform.", "modal"],
      ["mustn't", "no deber", "You mustn't run.", "modal"],
    ]),
    vocabEx("Ciudad y normas 📏", "Elige la opción correcta.", [
      mc("It's ___ the cinema. (enfrente)", ["opposite", "past"], 0, "opposite."),
      mc("It's ___ building. (el más alto)", ["the tallest", "taller"], 0, "the tallest."),
      mc("You ___ run in the corridor.", ["mustn't", "must"], 0, "mustn't."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y repasa", [
      mc("🎧 'The library is opposite the tallest building in town.' ¿Dónde está la biblioteca?", ["opposite the tallest building", "next to the park"], 0, "'opposite the tallest building'."),
      mc("🎧 'At school, you must wear a uniform and you mustn't run in the corridor.' ¿Qué normas hay?", ["uniform, no running", "no uniform, running allowed"], 0, "'must wear a uniform'... 'mustn't run'."),
    ]),
    listening(3, "Listening · Repaso — Ciudad y normas", "Escucha y responde.", "Listen. The library is opposite the tallest building in town. At school, you must wear a uniform and you mustn't run in the corridor.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "The library is ___ (1) the tallest building in town. At school, we ___ (2) wear a uniform, but we ___ (3) run in the corridor.", [
      mc("(1)", ["opposite", "past"], 0, "opposite."),
      mc("(2)", ["must", "mustn't"], 0, "must wear."),
      mc("(3)", ["mustn't", "must"], 0, "mustn't run."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi ciudad y mi colegio", "Combina la ciudad y las normas.", "Habla 1 minuto combinando lugares, direcciones y normas.", "repasar ciudad y normas", "There's a library, It's opposite, You must, You mustn't"),
    SUMMARY("Resumen del Día 48", ["Repaso completado: lugares de la ciudad, direcciones, superlativos, must/mustn't."]),
    INFO("Tarea para el Día 49", "Mañana: repaso de comida, cuerpo y medio ambiente."),
  ],
};

const DAY49 = {
  title: "Día 49 — Repaso: comida, cuerpo y planeta 🌍",
  description: "Gran repaso: restaurante, cantidades, cuerpo, accidentes, reciclaje.",
  pedagogy: { objective: "Repasar comida, cuerpo y medio ambiente.", summary: "Repaso integral 4; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué puedes hacer para cuidar tu cuerpo y el planeta?"] },
  items: [
    TEXT("🌍 Gran repaso: comida, el cuerpo, accidentes y cuidar el planeta."),
    GRAMMAR("Repaso: comida, cuerpo, planeta", "I'd like the curry, please. I hurt my knee. If we recycle, we'll help the planet."),
    deck("Flyers S10D49 — Comida, cuerpo, planeta", [
      ["I'd like", "me gustaría", "I'd like the chicken.", "phrase"],
      ["healthy", "saludable", "Vegetables are healthy.", "adjective"],
      ["knee", "rodilla", "I hurt my knee.", "body"],
      ["broke", "rompió", "I broke my arm.", "verb"],
      ["recycle", "reciclar", "We recycle paper.", "verb"],
      ["endangered", "en peligro", "Pandas are endangered.", "adjective"],
    ]),
    vocabEx("Comida, cuerpo, planeta 🌍", "Elige la opción correcta.", [
      mc("I'd ___ the curry, please.", ["like", "would"], 0, "like."),
      mc("I hurt my ___. (rodilla)", ["knee", "elbow"], 0, "knee."),
      mc("If we ___, we'll help the planet.", ["recycle", "waste"], 0, "recycle."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha y repasa", [
      mc("🎧 'I'd like the curry, please, but first I hurt my knee playing football.' ¿Qué pasó primero?", ["hurt his knee", "ordered curry"], 0, "orden: primero se lastimó, luego pide."),
      mc("🎧 'If we recycle more, we'll help endangered animals too.' ¿Qué ayudará a los animales?", ["recycling more", "eating junk food"], 0, "'recycle more'."),
    ]),
    listening(4, "Listening · Repaso — Comida, cuerpo, planeta", "Escucha y responde.", "Listen. I'd like the curry, please, but first I hurt my knee playing football. If we recycle more, we'll help endangered animals too.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "Yesterday I hurt my knee playing football, so I went home early. For dinner, I'd like something healthy, not junk food. I also recycle at home to help endangered animals and protect the planet.", [
      mc("He wanted junk food for dinner. ¿Está bien?", ["Falso", "Verdadero"], 0, "'something healthy, not junk food', no junk food."),
      mc("He recycles at home. ¿Está bien?", ["Verdadero", "Falso"], 0, "'I also recycle at home' — Verdadero."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso final de comida, cuerpo, planeta", "Combina comida, cuerpo y medio ambiente.", "Habla 1 minuto combinando los tres temas.", "repasar comida, cuerpo, planeta", "I'd like, I hurt my, If we recycle"),
    SUMMARY("Resumen del Día 49", ["Repaso completado: restaurante, cantidades, cuerpo, accidentes, reciclaje, condicional tipo 1."]),
    INFO("Tarea para el Día 50", "Mañana: ¡repaso total y décima prueba!"),
  ],
};

const DAY50 = {
  title: "Día 50 — Gran repaso total + décima prueba 🌟",
  description: "Repaso de todo el curso. Décima prueba.",
  pedagogy: { objective: "Repasar todo el curso de A2 Flyers.", summary: "Repaso total; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Cuenta todo lo que sabes decir en inglés ahora."] },
  items: [
    TEXT("🌟 ¡Gran repaso total! Ya casi llegamos a la recta final de Flyers."),
    GRAMMAR("Repaso de todo el curso", "Personalidad, going to/will. Presente perfecto, viajes. Ciudad, must/mustn't. Comida, cuerpo, medio ambiente, TV, pasado continuo."),
    deck("Flyers S10D50 — Repaso total", [
      ["friendly", "amigable", "I'm friendly.", "personality"],
      ["have you ever", "¿alguna vez?", "Have you ever been there?", "phrase"],
      ["opposite", "enfrente de", "It's opposite the cinema.", "preposition"],
      ["must/mustn't", "deber/no deber", "You must wear, you mustn't run.", "modal"],
      ["I'd like", "me gustaría", "I'd like the chicken.", "phrase"],
      ["recycle", "reciclar", "We recycle paper.", "verb"],
      ["was watching", "estaba viendo", "I was watching TV.", "verb"],
      ["endangered", "en peligro", "Pandas are endangered.", "adjective"],
    ]),
    vocabEx("Repaso total 🌟", "Elige la opción correcta.", [
      mc("I'm ___. (amigable)", ["friendly", "boring"], 0, "friendly."),
      mc("Have you ___ been to London?", ["ever", "never"], 0, "ever."),
      mc("You ___ wear a uniform.", ["must", "mustn't"], 0, "must."),
      mc("If we ___, we'll help the planet.", ["recycle", "waste"], 0, "recycle."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa todo", [
      mc("🎧 'I'm friendly and I've been to Paris twice.' ¿Qué dos cosas dice de sí mismo?", ["friendly, been to Paris", "shy, never travelled"], 0, "'friendly'... 'been to Paris twice'."),
      mc("🎧 'I was watching TV when I remembered we must recycle more to help endangered animals.' ¿Qué recordó?", ["to recycle more", "to watch more TV"], 0, "'must recycle more'."),
    ]),
    listening(1, "Listening · Gran repaso total", "Escucha y responde.", "Listen and look. I'm friendly and I've been to Paris twice. I was watching TV when I remembered we must recycle more to help endangered animals.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "I'm ___ (1) and I've ___ (2) to Paris twice. If we ___ (3) more, we'll help endangered animals.", [
      mc("(1)", ["friendly", "boringly"], 0, "friendly."),
      mc("(2)", ["been", "go"], 0, "been."),
      mc("(3)", ["recycle", "waste"], 0, "recycle."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi repaso total", "Combina todos los temas del curso.", "Habla 1-2 minutos combinando personalidad, viajes, ciudad, comida y medio ambiente.", "combinar todo el curso", "I'm friendly, I've been to, I'd like, If we recycle"),
    SUMMARY("Resumen de la Semana 10", ["¡Enhorabuena! Terminaste el gran repaso total.", "Ahora, tu décima prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡la recta final hacia tu simulacro Flyers!"]),
    INFO("Prueba de la Semana 10 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Gran repaso integral · Everything together",
  description: "Décima semana de A2 Flyers: repaso integral de todo el curso — personalidad, going to/will, presente perfecto, viajes, la ciudad, must/mustn't, comida, cuerpo, medio ambiente, TV y pasado continuo — antes de la recta final.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
