/**
 * A2 Flyers · Semana 8 — "Cuidar el planeta 🌱 · Environment and recycling".
 * El medio ambiente, reciclar, y condicional tipo 1 (if...).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY36 = {
  title: "Día 36 — Reciclar 🌱 · Reduce, reuse, recycle",
  description: "Vocabulario de reciclaje y medio ambiente.",
  pedagogy: { objective: "Hablar de reciclaje.", summary: "Reciclaje; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Reciclas en tu casa?"] },
  items: [
    TEXT("🌱 Reduce, reuse, recycle — cuidamos el planeta."),
    GRAMMAR("Reciclar", "We recycle paper, glass and plastic.\nDon't waste water. Turn off the lights to save energy."),
    deck("Flyers S8D36 — Reciclaje", [
      ["recycle", "reciclar", "We recycle paper.", "verb"],
      ["glass", "vidrio/cristal", "Recycle glass bottles.", "word"],
      ["plastic", "plástico", "Don't waste plastic.", "word"],
      ["rubbish", "basura", "Put the rubbish in the bin.", "word"],
      ["save energy", "ahorrar energía", "Turn off lights to save energy.", "phrase"],
      ["waste", "desperdiciar/malgastar", "Don't waste water.", "verb"],
      ["bin", "cubo de basura", "There are different bins.", "object"],
      ["pollution", "contaminación", "Pollution is bad for the planet.", "word"],
    ]),
    vocabEx("Reciclaje 🌱", "Elige la opción correcta.", [
      mc("We ___ paper and glass. (reciclamos)", ["recycle", "waste"], 0, "recycle."),
      mc("Don't ___ water! (malgastar)", ["waste", "save"], 0, "waste."),
      mc("Turn off lights to save ___.", ["energy", "rubbish"], 0, "energy."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la acción", [
      mc("🎧 'We recycle glass and plastic at home every week.' ¿Qué reciclan?", ["glass and plastic", "rubbish"], 0, "'recycle glass and plastic'."),
      mc("🎧 'Please turn off the lights to save energy.' ¿Qué deben hacer?", ["turn off lights", "waste water"], 0, "'turn off the lights'."),
    ]),
    listening(1, "Listening · Parte 1 — Reciclaje", "Escucha y responde.", "Listen and match. We recycle glass and plastic at home every week. Please turn off the lights to save energy.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Material transparente que se recicla: ___", ["glass", "plastic"], 0, "glass."),
      mc("Aire sucio que daña el planeta: ___", ["pollution", "energy"], 0, "pollution."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Cómo cuido el planeta", "Habla de cómo cuidas el medio ambiente.", "Di 3 cosas que haces para cuidar el planeta.", "hablar de reciclaje", "I recycle, I don't waste, I save energy"),
    SUMMARY("Resumen del Día 36", ["Ya conoces: recycle, glass, plastic, rubbish, save energy, waste, bin, pollution."]),
    INFO("Tarea para el Día 37", "Mañana: si cuidamos el planeta... (condicional tipo 1)."),
  ],
};

const DAY37 = {
  title: "Día 37 — Si cuidamos el planeta... 🌍 · First conditional",
  description: "Condicional tipo 1: if + presente, will + infinitivo.",
  pedagogy: { objective: "Usar el condicional tipo 1 (if...).", summary: "First conditional; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué pasará si no reciclamos?"] },
  items: [
    TEXT("🌍 If we recycle, we'll help the planet — el condicional tipo 1."),
    GRAMMAR("Condicional tipo 1", "If + presente simple, will + infinitivo.\nIf we recycle, we'll help the planet.\nIf we don't save water, there won't be enough for everyone."),
    deck("Flyers S8D37 — First conditional", [
      ["if", "si", "If we recycle, we'll help.", "word"],
      ["will help", "ayudará", "Recycling will help the planet.", "verb"],
      ["enough", "suficiente", "There won't be enough water.", "word"],
      ["planet", "planeta", "We must protect the planet.", "word"],
      ["protect", "proteger", "We must protect nature.", "verb"],
      ["damage", "dañar/daño", "Pollution will damage nature.", "verb"],
      ["future generations", "generaciones futuras", "Think about future generations.", "phrase"],
    ]),
    vocabEx("First conditional 🌍", "Elige la opción correcta.", [
      mc("___ we recycle, we'll help the planet. (si)", ["If", "Will"], 0, "If."),
      mc("If we don't save water, there ___ be enough.", ["won't", "will"], 0, "won't."),
      mc("We must ___ nature. (proteger)", ["protect", "damage"], 0, "protect."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe la consecuencia", [
      fb("🎧 'If we recycle more, we'll help the planet a lot.' ¿Qué ayudará si reciclan más? Escribe: ___", ["planet"], "'help the planet'."),
      fb("🎧 'If we don't save water, there won't be enough for future generations.' ¿Qué no habrá suficiente? Escribe: ___", ["water"], "'won't be enough' agua."),
    ]),
    listening(2, "Listening · Parte 2 — First conditional", "Escucha y responde.", "Listen and write. If we recycle more, we'll help the planet a lot. If we don't save water, there won't be enough for future generations.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("What will happen if we recycle more?", ["We'll help the planet.", "We'll waste more water."], 0, "consecuencia positiva."),
      mc("What will happen if we don't save energy?", ["We'll damage the planet.", "We'll protect nature."], 0, "consecuencia negativa."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Si cuidamos el planeta", "Habla de consecuencias con 'if'.", "Da 3 ejemplos con 'If we..., we'll...'.", "usar el condicional tipo 1", "If we recycle, If we save energy, If we don't"),
    SUMMARY("Resumen del Día 37", ["Puedes usar el condicional tipo 1: If + presente, will + infinitivo."]),
    INFO("Tarea para el Día 38", "Mañana: animales en peligro de extinción."),
  ],
};

const DAY38 = {
  title: "Día 38 — Animales en peligro 🐼 · Endangered animals",
  description: "Animales en peligro de extinción y cómo protegerlos.",
  pedagogy: { objective: "Hablar de animales en peligro de extinción.", summary: "Animales en peligro; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Qué animal en peligro de extinción conoces?"] },
  items: [
    TEXT("🐼 Pandas are endangered — animales en peligro de extinción."),
    GRAMMAR("Animales en peligro", "Pandas are endangered because their habitat is disappearing.\nIf we don't protect them, they'll disappear forever."),
    deck("Flyers S8D38 — Animales en peligro", [
      ["endangered", "en peligro de extinción", "Pandas are endangered.", "adjective"],
      ["disappear", "desaparecer", "The forest is disappearing.", "verb"],
      ["extinct", "extinto/a", "Dinosaurs are extinct.", "adjective"],
      ["protect", "proteger", "We must protect endangered animals.", "verb"],
      ["wildlife", "fauna/vida salvaje", "Protect wildlife.", "word"],
      ["rainforest", "selva tropical", "The rainforest is important.", "place"],
      ["species", "especie", "Many species are endangered.", "word"],
    ]),
    vocabEx("Animales en peligro 🐼", "Elige la opción correcta.", [
      mc("Pandas are ___. (en peligro)", ["endangered", "extinct"], 0, "endangered."),
      mc("Dinosaurs are ___. (extintos)", ["extinct", "endangered"], 0, "extinct."),
      mc("We must protect ___. (fauna)", ["wildlife", "rubbish"], 0, "wildlife."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige el dato", [
      mc("🎧 'Pandas are endangered because their habitat is disappearing.' ¿Por qué están en peligro?", ["habitat disappearing", "too much food"], 0, "'habitat is disappearing'."),
      mc("🎧 'If we don't protect the rainforest, many species will disappear.' ¿Qué protegerá a las especies?", ["protecting the rainforest", "eating more food"], 0, "'protect the rainforest'."),
    ]),
    listening(3, "Listening · Parte 3 — Animales en peligro", "Escucha y responde.", "Listen. Pandas are endangered because their habitat is disappearing. If we don't protect the rainforest, many species will disappear.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "Many animals are ___ (1) because their habitats are disappearing. If we don't ___ (2) the rainforest, many ___ (3) will become extinct.", [
      mc("(1)", ["endangered", "extinct"], 0, "endangered."),
      mc("(2)", ["protect", "waste"], 0, "protect."),
      mc("(3)", ["species", "rubbish"], 0, "species."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Animales en peligro", "Habla de animales en peligro y cómo protegerlos.", "Describe un animal en peligro y qué podemos hacer para protegerlo.", "hablar de animales en peligro", "Pandas are endangered, If we protect, they won't disappear"),
    SUMMARY("Resumen del Día 38", ["Ya conoces: endangered, disappear, extinct, protect, wildlife, rainforest, species."]),
    INFO("Tarea para el Día 39", "Mañana: lo que puedo hacer yo para ayudar."),
  ],
};

const DAY39 = {
  title: "Día 39 — Lo que puedo hacer yo 💡 · What I can do to help",
  description: "Acciones personales para cuidar el planeta.",
  pedagogy: { objective: "Proponer acciones personales ecológicas.", summary: "Acciones ecológicas; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué puedes hacer tú para ayudar al planeta?"] },
  items: [
    TEXT("💡 What can I do to help? — pequeñas acciones, gran diferencia."),
    GRAMMAR("Acciones personales", "I can walk instead of going by car. I can turn off lights when I leave a room.\nIf everyone helps a little, we'll make a big difference."),
    deck("Flyers S8D39 — Acciones personales", [
      ["instead of", "en lugar de", "I walk instead of taking the car.", "phrase"],
      ["turn off", "apagar", "Turn off the lights.", "verb"],
      ["make a difference", "marcar la diferencia", "Small actions make a difference.", "phrase"],
      ["reusable", "reutilizable", "Use a reusable bottle.", "adjective"],
      ["plant a tree", "plantar un árbol", "Let's plant a tree.", "phrase"],
      ["everyone", "todos/cada uno", "If everyone helps...", "word"],
      ["community", "comunidad", "Help your community.", "word"],
    ]),
    vocabEx("Acciones personales 💡", "Elige la opción correcta.", [
      mc("I walk ___ taking the car. (en lugar de)", ["instead of", "turn off"], 0, "instead of."),
      mc("Use a ___ bottle. (reutilizable)", ["reusable", "plastic"], 0, "reusable."),
      mc("Small actions ___ a difference.", ["make", "waste"], 0, "make."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha sobre acciones personales", [
      mc("🎧 'I walk to school instead of going by car, it helps the environment.' ¿Qué hace en lugar de ir en coche?", ["walks", "cycles"], 0, "'walk... instead of going by car'."),
      mc("🎧 'If everyone uses a reusable bottle, we'll make a big difference.' ¿Qué marcará la diferencia?", ["reusable bottles", "plastic bottles"], 0, "'reusable bottle... make a big difference'."),
    ]),
    listening(4, "Listening · Parte 4 — Acciones personales", "Escucha y responde.", "Listen. I walk to school instead of going by car, it helps the environment. If everyone uses a reusable bottle, we'll make a big difference.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "There are many small things we can do to help the planet. I always use a reusable bottle instead of plastic ones. My family plants a tree every year. If everyone does small things, we'll make a big difference together.", [
      mc("He uses plastic bottles. ¿Está bien?", ["Falso", "Verdadero"], 0, "'reusable bottle instead of plastic ones', no plastic."),
      mc("His family plants a tree every year. ¿Está bien?", ["Verdadero", "Falso"], 0, "'plants a tree every year' — Verdadero."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis acciones para el planeta", "Habla de tus acciones para cuidar el planeta.", "Di 3 acciones que haces o puedes hacer para ayudar al planeta.", "proponer acciones ecológicas", "I walk instead of, I use a reusable, If everyone"),
    SUMMARY("Resumen del Día 39", ["Ya conoces: instead of, turn off, make a difference, reusable, plant a tree, community."]),
    INFO("Tarea para el Día 40", "Mañana: ¡repaso y octava prueba!"),
  ],
};

const DAY40 = {
  title: "Día 40 — Repaso de la semana + octava prueba 🌟",
  description: "Repaso de reciclaje, condicional tipo 1 y animales en peligro. Octava prueba.",
  pedagogy: { objective: "Repasar la Semana 8.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["¿Qué podemos hacer para proteger el planeta?"] },
  items: [
    TEXT("🌟 ¡Octava semana terminada! Repasamos reciclaje, el condicional tipo 1 y animales en peligro."),
    GRAMMAR("Repaso de la Semana 8", "recycle, waste, save energy. If + presente, will. endangered, protect, wildlife."),
    deck("Flyers S8D40 — Repaso mixto", [
      ["recycle", "reciclar", "We recycle paper.", "verb"],
      ["if", "si", "If we recycle, we'll help.", "word"],
      ["will help", "ayudará", "It will help the planet.", "verb"],
      ["endangered", "en peligro", "Pandas are endangered.", "adjective"],
      ["protect", "proteger", "We must protect wildlife.", "verb"],
      ["instead of", "en lugar de", "Walk instead of driving.", "phrase"],
      ["reusable", "reutilizable", "Use a reusable bottle.", "adjective"],
      ["pollution", "contaminación", "Pollution is bad.", "word"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("We ___ paper and glass.", ["recycle", "waste"], 0, "recycle."),
      mc("___ we recycle, we'll help the planet.", ["If", "Will"], 0, "If."),
      mc("Pandas are ___. (en peligro)", ["endangered", "extinct"], 0, "endangered."),
      mc("Use a ___ bottle. (reutilizable)", ["reusable", "plastic"], 0, "reusable."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'If we recycle and protect wildlife, we'll help endangered animals.' ¿Qué ayudará a los animales?", ["recycling and protecting wildlife", "wasting water"], 0, "'recycle and protect wildlife'."),
      mc("🎧 'I use a reusable bottle instead of plastic, it helps the planet.' ¿Qué usa?", ["a reusable bottle", "a plastic bottle"], 0, "'use a reusable bottle'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 8", "Escucha y responde.", "Listen and look. If we recycle and protect wildlife, we'll help endangered animals. I use a reusable bottle instead of plastic, it helps the planet.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "If we ___ (1) more, we'll help the planet. Many animals are ___ (2) because of pollution. I use a ___ (3) bottle instead of plastic.", [
      mc("(1)", ["recycle", "waste"], 0, "recycle."),
      mc("(2)", ["endangered", "extinct"], 0, "endangered."),
      mc("(3)", ["reusable", "plastic"], 0, "reusable."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina reciclaje, condicional y animales en peligro.", "Habla 1-2 minutos combinando lo repasado.", "combinar reciclaje, condicional, animales", "If we recycle, Pandas are endangered, I use a reusable"),
    SUMMARY("Resumen de la Semana 8", ["¡Enhorabuena! Terminaste la Semana 8 de Flyers.", "Ahora, tu octava prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡noticias y medios de comunicación!"]),
    INFO("Prueba de la Semana 8 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "Cuidar el planeta · Environment and recycling · First conditional",
  description: "Octava semana de A2 Flyers: reciclaje (recycle, waste, save energy), el condicional tipo 1 (If + presente, will), animales en peligro de extinción, y acciones personales para cuidar el planeta.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
