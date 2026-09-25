/**
 * A1 Movers · Semana 7 — "Animales y naturaleza 🦒 · Wild animals".
 * Animales salvajes, sus características, y el presente continuo.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 31 ─────────────────────────
const DAY31 = {
  title: "Día 31 — Animales salvajes 🦒 · Wild animals",
  description: "Animales salvajes y sus características.",
  pedagogy: {
    objective: "Nombrar animales salvajes y describir sus características.",
    summary: "Animales salvajes; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Cuál es tu animal salvaje favorito y por qué?"],
  },
  items: [
    TEXT("🦒 ¡Hoy exploramos la naturaleza! Wild animals — animales salvajes."),
    GRAMMAR("Describir animales", "It's got + característica. It can + habilidad.\nA giraffe has got a long neck. A monkey can climb trees."),
    deck("Movers S7D31 — Animales salvajes", [
      ["crocodile", "cocodrilo", "A crocodile has got sharp teeth.", "animal"],
      ["kangaroo", "canguro", "A kangaroo can jump high.", "animal"],
      ["panda", "panda", "A panda eats bamboo.", "animal"],
      ["penguin", "pingüino", "A penguin can swim well.", "animal"],
      ["shark", "tiburón", "A shark lives in the sea.", "animal"],
      ["wolf", "lobo", "A wolf lives in the forest.", "animal"],
      ["owl", "búho", "An owl can see at night.", "animal"],
      ["neck", "cuello", "A giraffe has got a long neck.", "body"],
      ["sharp", "afilado/a", "Sharp teeth!", "adjective"],
      ["forest", "bosque", "The wolf lives in the forest.", "place"],
    ]),
    vocabEx("Animales salvajes 🦒", "Elige el animal correcto.", [
      mc("🐊 = ___", ["crocodile", "shark", "wolf"], 0, "crocodile."),
      mc("🦘 = ___", ["kangaroo", "panda", "owl"], 0, "kangaroo."),
      mc("🐼 = ___", ["panda", "shark", "owl"], 0, "panda."),
      mc("🐧 = ___", ["penguin", "wolf", "kangaroo"], 0, "penguin."),
      mc("🦈 = ___", ["shark", "owl", "panda"], 0, "shark."),
      mc("🦉 = ___", ["owl", "wolf", "shark"], 0, "owl."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y encuentra el animal", [
      mc("🎧 'A crocodile has got sharp teeth.' ¿Qué tiene el cocodrilo?", ["sharp teeth", "a long neck"], 0, "'sharp teeth'."),
      mc("🎧 'A kangaroo can jump very high.' ¿Qué puede hacer el canguro?", ["jump high", "swim"], 0, "'jump very high'."),
      mc("🎧 'A panda eats bamboo every day.' ¿Qué come el panda?", ["bamboo", "meat"], 0, "'bamboo'."),
      mc("🎧 'An owl can see very well at night.' ¿Cuándo ve bien el búho?", ["at night", "in the morning"], 0, "'at night'."),
      mc("🎧 'A wolf lives in the forest with its family.' ¿Dónde vive el lobo?", ["in the forest", "in the sea"], 0, "'in the forest'."),
    ]),
    listening(1, "Listening · Parte 1 — Animales salvajes", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and match. A crocodile has got sharp teeth. A kangaroo can jump very high. A panda eats bamboo every day. An owl can see very well at night. A wolf lives in the forest with its family.", []),

    READING_HEAD,
    readDefine("Encuentra el animal correcto", [
      mc("Vive en el mar, tiene dientes afilados: ___", ["shark", "kangaroo", "owl"], 0, "shark."),
      mc("Puede saltar muy alto: ___", ["kangaroo", "penguin", "wolf"], 0, "kangaroo."),
      mc("Come bambú: ___", ["panda", "crocodile", "owl"], 0, "panda."),
      mc("Ve bien de noche: ___", ["owl", "penguin", "shark"], 0, "owl."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi animal salvaje favorito", "Describe tu animal salvaje favorito: qué tiene, qué puede hacer, dónde vive.", "Describe 3 animales salvajes con detalle.", "describir animales salvajes", "A giraffe has got a long neck, A kangaroo can jump high, A shark lives in the sea"),

    SUMMARY("Resumen del Día 31", [
      "Ya conoces: crocodile, kangaroo, panda, penguin, shark, wolf, owl.",
      "Puedes describir sus características y habilidades.",
    ]),
    INFO("Tarea para el Día 32", "Repasa los animales salvajes. Mañana: presente continuo — What's it doing?"),
  ],
};

// ───────────────────────── DÍA 32 ─────────────────────────
const DAY32 = {
  title: "Día 32 — ¿Qué está haciendo? 🎬 · Present continuous",
  description: "El presente continuo para describir acciones en curso.",
  pedagogy: {
    objective: "Usar el presente continuo para describir lo que ocurre ahora.",
    summary: "Presente continuo; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Qué está pasando ahora mismo a tu alrededor?"],
  },
  items: [
    TEXT("🎬 ¿Qué está pasando AHORA? Hoy: el presente continuo."),
    GRAMMAR("Presente continuo", "am/is/are + verbo-ing.\nThe monkey is eating a banana. (El mono está comiendo un plátano)\nThe birds are flying. (Los pájaros están volando)"),
    deck("Movers S7D32 — Presente continuo", [
      ["eating", "comiendo", "The monkey is eating.", "verb"],
      ["flying", "volando", "The birds are flying.", "verb"],
      ["running", "corriendo", "The lion is running.", "verb"],
      ["sleeping", "durmiendo", "The panda is sleeping.", "verb"],
      ["swimming", "nadando", "The shark is swimming.", "verb"],
      ["jumping", "saltando", "The kangaroo is jumping.", "verb"],
      ["climbing", "trepando", "The monkey is climbing.", "verb"],
      ["now", "ahora", "What's happening now?", "word"],
      ["right now", "ahora mismo", "Look right now!", "phrase"],
      ["at the moment", "en este momento", "At the moment, it's sleeping.", "phrase"],
    ]),
    vocabEx("¿Qué está haciendo? 🎬", "Elige la acción correcta.", [
      mc("The monkey is ___ a banana.", ["eating", "flying"], 0, "eating."),
      mc("The birds are ___.", ["flying", "sleeping"], 0, "flying."),
      mc("The panda is ___.", ["sleeping", "swimming"], 0, "sleeping."),
      mc("The shark is ___ in the sea.", ["swimming", "climbing"], 0, "swimming."),
      mc("The kangaroo is ___.", ["jumping", "sleeping"], 0, "jumping."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha y escribe la acción", [
      fb("🎧 'The monkey is eating a banana right now.' Escribe: ___", ["eating"], "eating."),
      fb("🎧 'Look! The birds are flying.' Escribe: ___", ["flying"], "flying."),
      fb("🎧 'At the moment, the panda is sleeping.' Escribe: ___", ["sleeping"], "sleeping."),
      fb("🎧 'The lion is running very fast!' Escribe: ___", ["running"], "running."),
    ]),
    listening(2, "Listening · Parte 2 — Presente continuo", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. The monkey is eating a banana right now. Look! The birds are flying. At the moment, the panda is sleeping. The lion is running very fast!", []),

    READING_HEAD,
    readStory("Lee la historia y responde Sí/No", "We're at the zoo today! The monkeys are climbing trees, and the birds are flying above us. The panda isn't eating — it's sleeping. The lions aren't sleeping; they're running around. It's so exciting!", [
      mc("The monkeys are climbing trees. ¿Está bien?", ["Sí", "No"], 0, "'monkeys are climbing trees' — Sí."),
      mc("The panda is eating. ¿Está bien?", ["Sí", "No"], 1, "'panda isn't eating' — No."),
      mc("The lions are sleeping. ¿Está bien?", ["Sí", "No"], 1, "'lions aren't sleeping' — No."),
      mc("The birds are flying. ¿Está bien?", ["Sí", "No"], 0, "'birds are flying' — Sí."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Qué están haciendo los animales?", "Describe qué están haciendo animales (reales o imaginados) ahora mismo.", "Describe 4 animales haciendo acciones ahora.", "usar el presente continuo con animales", "The monkey is eating, The birds are flying, The lion is running"),

    SUMMARY("Resumen del Día 32", [
      "Presente continuo: am/is/are + verbo-ing.",
      "Puedes describir acciones que están pasando ahora.",
    ]),
    INFO("Tarea para el Día 33", "Practica el presente continuo. Mañana: la naturaleza y el medio ambiente."),
  ],
};

// ───────────────────────── DÍA 33 ─────────────────────────
const DAY33 = {
  title: "Día 33 — La naturaleza 🌿 · Forest, mountain, river",
  description: "Vocabulario de la naturaleza y el paisaje.",
  pedagogy: {
    objective: "Nombrar elementos del paisaje natural.",
    summary: "Naturaleza y paisaje; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Qué elementos de la naturaleza hay cerca de donde vives?"],
  },
  items: [
    TEXT("🌿 ¡Hoy exploramos el paisaje! Forest, mountain, river..."),
    GRAMMAR("Repaso: There is/are", "There's a river near the mountain. There are a lot of trees in the forest."),
    deck("Movers S7D33 — La naturaleza", [
      ["forest", "bosque", "There's a big forest.", "nature"],
      ["mountain", "montaña", "The mountain is very tall.", "nature"],
      ["river", "río", "The river is long.", "nature"],
      ["lake", "lago", "We swim in the lake.", "nature"],
      ["island", "isla", "It's a small island.", "nature"],
      ["desert", "desierto", "The desert is hot and dry.", "nature"],
      ["waterfall", "cascada", "The waterfall is beautiful.", "nature"],
      ["jungle", "selva", "Monkeys live in the jungle.", "nature"],
      ["path", "sendero", "Follow the path.", "nature"],
      ["view", "vista", "What a beautiful view!", "word"],
    ]),
    vocabEx("La naturaleza 🌿", "Elige la palabra correcta.", [
      mc("🌳🌳🌳 = ___", ["forest", "desert", "lake"], 0, "forest."),
      mc("⛰️ = ___", ["mountain", "river", "island"], 0, "mountain."),
      mc("🏞️ (agua que fluye) = ___", ["river", "desert", "mountain"], 0, "river."),
      mc("🏝️ = ___", ["island", "forest", "waterfall"], 0, "island."),
      mc("Lugar seco y caluroso: ___", ["desert", "lake", "jungle"], 0, "desert."),
      mc("Agua que cae de una montaña: ___", ["waterfall", "path", "view"], 0, "waterfall."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y describe el paisaje", [
      mc("🎧 'There's a big forest near the mountain.' ¿Qué hay cerca de la montaña?", ["a forest", "a lake"], 0, "'a big forest'."),
      mc("🎧 'The river is very long, and there's a waterfall.' ¿Qué hay además del río?", ["a waterfall", "a desert"], 0, "'a waterfall'."),
      mc("🎧 'Monkeys live in the jungle, near the river.' ¿Dónde viven los monos?", ["in the jungle", "in the desert"], 0, "'in the jungle'."),
      mc("🎧 'The desert is very hot and dry.' ¿Cómo es el desierto?", ["hot and dry", "cold and wet"], 0, "'hot and dry'."),
    ]),
    listening(3, "Listening · Parte 3 — La naturaleza", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. There's a big forest near the mountain. The river is very long, and there's a waterfall. Monkeys live in the jungle, near the river. The desert is very hot and dry.", []),

    READING_HEAD,
    readGapChoice("Elige la opción correcta", "There's a beautiful ___ (1) near my house, with a lot of trees. Behind the forest, there's a tall ___ (2). A ___ (3) flows from the mountain, and there's even a small ___ (4) where the water falls.", [
      mc("(1)", ["forest", "desert", "island"], 0, "forest."),
      mc("(2)", ["mountain", "river", "lake"], 0, "mountain."),
      mc("(3)", ["river", "desert", "jungle"], 0, "river."),
      mc("(4)", ["waterfall", "path", "view"], 0, "waterfall."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi paisaje favorito", "Describe un paisaje natural que te guste, real o imaginado.", "Describe un paisaje natural con 4 elementos.", "describir un paisaje natural", "There's a forest, There's a river, There's a mountain"),

    SUMMARY("Resumen del Día 33", [
      "Ya conoces: forest, mountain, river, lake, island, desert, waterfall, jungle, path, view.",
      "Puedes describir un paisaje natural.",
    ]),
    INFO("Tarea para el Día 34", "Repasa la naturaleza. Mañana: proteger el medio ambiente."),
  ],
};

// ───────────────────────── DÍA 34 ─────────────────────────
const DAY34 = {
  title: "Día 34 — Cuidar el planeta 🌍 · Should / shouldn't",
  description: "Consejos para cuidar el medio ambiente con 'should/shouldn't'.",
  pedagogy: {
    objective: "Dar consejos sencillos con should/shouldn't.",
    summary: "Should/shouldn't; medio ambiente; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué deberíamos hacer para cuidar el planeta?"],
  },
  items: [
    TEXT("🌍 ¡Cuidemos el planeta! You should recycle."),
    GRAMMAR("should / shouldn't", "You should + verbo. (Deberías...)\nYou shouldn't + verbo. (No deberías...)\nYou should recycle. You shouldn't waste water."),
    deck("Movers S7D34 — Cuidar el planeta", [
      ["recycle", "reciclar", "You should recycle.", "verb"],
      ["waste", "desperdiciar", "You shouldn't waste water.", "verb"],
      ["save", "ahorrar", "Save energy!", "verb"],
      ["should", "deberías", "You should recycle.", "word"],
      ["shouldn't", "no deberías", "You shouldn't litter.", "word"],
      ["litter", "tirar basura", "You shouldn't litter.", "verb"],
      ["plant", "plantar", "We should plant trees.", "verb"],
      ["planet", "planeta", "Save our planet!", "word"],
      ["pollution", "contaminación", "Pollution is bad for animals.", "word"],
      ["environment", "medio ambiente", "Protect the environment!", "word"],
    ]),
    vocabEx("Cuidar el planeta 🌍", "Elige la opción correcta.", [
      mc("You ___ recycle. (deberías)", ["should", "shouldn't"], 0, "should."),
      mc("You ___ waste water. (no deberías)", ["shouldn't", "should"], 0, "shouldn't."),
      mc("We should ___ trees. (plantar)", ["plant", "waste"], 0, "plant."),
      mc("You shouldn't ___. (tirar basura)", ["litter", "recycle"], 0, "litter."),
      mc("Save our ___! (planeta)", ["planet", "pollution"], 0, "planet."),
    ]),

    LISTENING_HEAD,
    listenScene("Escucha los consejos", [
      mc("🎧 'You should recycle paper and plastic.' ¿Qué deberías hacer?", ["recycle", "waste"], 0, "'recycle'."),
      mc("🎧 'You shouldn't waste water — it's important!' ¿Qué no deberías hacer?", ["waste water", "recycle"], 0, "'waste water'."),
      mc("🎧 'We should plant more trees to help the environment.' ¿Qué deberíamos hacer?", ["plant trees", "litter"], 0, "'plant more trees'."),
      mc("🎧 'You shouldn't litter in the forest.' ¿Qué no deberías hacer en el bosque?", ["litter", "plant trees"], 0, "'litter'."),
    ]),
    listening(4, "Listening · Parte 4 — Cuidar el planeta", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. You should recycle paper and plastic. You shouldn't waste water — it's important! We should plant more trees to help the environment. You shouldn't litter in the forest.", []),

    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: should, shouldn't, recycle, litter, plant\n\nTo help our planet, you ___ (1) ___ (2) paper and plastic. You ___ (3) waste water. We should ___ (4) more trees. And remember — you ___ (5) never litter in nature!", [
      fb("(1)", ["should"], "should."),
      fb("(2)", ["recycle"], "recycle."),
      fb("(3)", ["shouldn't"], "shouldn't."),
      fb("(4)", ["plant"], "plant."),
      fb("(5)", ["should"], "should."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Consejos para el planeta", "Da 4 consejos para cuidar el medio ambiente usando should/shouldn't.", "Da consejos con should y shouldn't.", "dar consejos con should/shouldn't", "You should recycle, You shouldn't waste water, We should plant trees"),

    SUMMARY("Resumen del Día 34", [
      "You should + verbo. You shouldn't + verbo.",
      "Puedes dar consejos para cuidar el planeta.",
    ]),
    INFO("Tarea para el Día 35", "Repasa animales, presente continuo, naturaleza y consejos. Mañana: ¡repaso y séptima prueba!"),
  ],
};

// ───────────────────────── DÍA 35 ─────────────────────────
const DAY35 = {
  title: "Día 35 — Repaso de la semana + séptima prueba 🌟",
  description: "Repaso de animales salvajes, presente continuo, naturaleza y consejos. Séptima prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 7 antes de la prueba.",
    summary: "Repaso de animales y naturaleza; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué consejo darías para cuidar a los animales salvajes?"],
  },
  items: [
    TEXT("🌟 ¡Séptima semana terminada! Hoy repasamos: animales salvajes, presente continuo, naturaleza y consejos."),
    GRAMMAR("Repaso de la Semana 7", "· Animales: crocodile, kangaroo, panda, shark, owl. has got, can.\n· Presente continuo: is/are + -ing.\n· Naturaleza: forest, mountain, river, jungle.\n· Consejos: should/shouldn't recycle, waste, litter."),
    deck("Movers S7D35 — Repaso mixto", [
      ["kangaroo", "canguro", "A kangaroo can jump.", "animal"],
      ["shark", "tiburón", "A shark lives in the sea.", "animal"],
      ["eating", "comiendo", "The monkey is eating.", "verb"],
      ["sleeping", "durmiendo", "The panda is sleeping.", "verb"],
      ["forest", "bosque", "There's a forest.", "nature"],
      ["river", "río", "The river is long.", "nature"],
      ["should", "deberías", "You should recycle.", "word"],
      ["shouldn't", "no deberías", "You shouldn't litter.", "word"],
      ["recycle", "reciclar", "You should recycle.", "verb"],
      ["planet", "planeta", "Save our planet!", "word"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("🦘 can jump. = ___", ["kangaroo", "shark"], 0, "kangaroo."),
      mc("The monkey is ___.", ["eating", "eat"], 0, "eating."),
      mc("🌳🌳🌳 = ___", ["forest", "desert"], 0, "forest."),
      mc("You ___ recycle.", ["should", "shouldn't"], 0, "should."),
      mc("You ___ litter.", ["shouldn't", "should"], 0, "shouldn't."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'The kangaroo is jumping in the forest.' ¿Qué está haciendo el canguro?", ["jumping", "sleeping"], 0, "'is jumping'."),
      mc("🎧 'You should recycle to help the animals in the jungle.' ¿Qué deberías hacer?", ["recycle", "litter"], 0, "'should recycle'."),
      mc("🎧 'The panda is sleeping near the river.' ¿Dónde está el panda?", ["near the river", "in the desert"], 0, "'near the river'."),
      mc("🎧 'You shouldn't waste water — save our planet!' ¿Qué no deberías hacer?", ["waste water", "recycle"], 0, "'shouldn't waste water'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 7", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. The kangaroo is jumping in the forest. You should recycle to help the animals in the jungle. The panda is sleeping near the river. You shouldn't waste water — save our planet!", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("k_ng_r__ (canguro)", ["kangaroo"], "kangaroo."),
      fb("f_r_st (bosque)", ["forest"], "forest."),
      fb("r_cycl_ (reciclar)", ["recycle"], "recycle."),
      fb("pl_n_t (planeta)", ["planet"], "planet."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina animales salvajes, presente continuo, naturaleza y consejos.", "Habla 1-2 minutos combinando lo repasado.", "combinar animales, presente continuo, naturaleza, consejos", "A kangaroo can jump, The monkey is eating, There's a forest, You should recycle"),

    SUMMARY("Resumen de la Semana 7", [
      "¡Enhorabuena! Terminaste la Semana 7: animales salvajes, presente continuo, naturaleza y consejos.",
      "Ahora, tu séptima prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡mis vacaciones y el pasado!",
    ]),
    INFO("Prueba de la Semana 7 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "Animales salvajes · Presente continuo · Naturaleza · Cuidar el planeta",
  description: "Séptima semana de A1 Movers: animales salvajes con sus características (has got, can), el presente continuo (is/are + -ing) para describir acciones en curso, vocabulario de naturaleza y paisaje, y consejos para cuidar el planeta con should/shouldn't. Cada día, las 4 destrezas con el formato real de Movers.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
