/**
 * A2 Flyers · Semana 2 — "El futuro 🔮 · Going to / Will".
 * Planes futuros (going to) y predicciones (will).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY6 = {
  title: "Día 6 — Mis planes 📅 · I'm going to...",
  description: "Planes futuros con 'going to'.",
  pedagogy: { objective: "Hablar de planes futuros con 'going to'.", summary: "going to; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué vas a hacer este fin de semana?"] },
  items: [
    TEXT("📅 I'm going to visit my grandma this weekend — hablamos de planes."),
    GRAMMAR("going to", "I'm going to visit my grandma.\nAre you going to play football? Yes, I am. / No, I'm not."),
    deck("Flyers S2D6 — going to", [
      ["going to", "ir a (planes)", "I'm going to visit my grandma.", "grammar"],
      ["plan", "plan", "What's your plan for today?", "word"],
      ["this weekend", "este fin de semana", "This weekend I'm going to relax.", "phrase"],
      ["next week", "la semana que viene", "Next week I'm going to travel.", "phrase"],
      ["tonight", "esta noche", "Tonight I'm going to study.", "word"],
      ["tomorrow", "mañana", "Tomorrow I'm going to visit the museum.", "word"],
      ["decide", "decidir", "I haven't decided yet.", "verb"],
      ["organise", "organizar", "I'm going to organise a party.", "verb"],
    ]),
    vocabEx("going to 📅", "Elige la opción correcta.", [
      mc("I'm ___ visit my grandma. (voy a)", ["going to", "go to"], 0, "going to."),
      mc("Tomorrow I'm going to ___ the museum.", ["visit", "visited"], 0, "visit."),
      mc("Are you ___ play football? (¿vas a...?)", ["going to", "go"], 0, "going to."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une el plan", [
      mc("🎧 'This weekend I'm going to visit my grandma in the countryside.' ¿Qué va a hacer?", ["visit grandma", "play football"], 0, "'going to visit my grandma'."),
      mc("🎧 'Tonight I'm going to study for my test.' ¿Qué va a hacer esta noche?", ["study", "watch TV"], 0, "'going to study'."),
    ]),
    listening(1, "Listening · Parte 1 — Planes futuros", "Escucha y responde.", "Listen and match. This weekend I'm going to visit my grandma in the countryside. Tonight I'm going to study for my test.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Pensar qué vas a hacer: ___", ["decide", "organise"], 0, "decide."),
      mc("Preparar un evento: ___", ["organise", "decide"], 0, "organise."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis planes", "Habla de tus planes futuros.", "Di 3 planes usando 'going to'.", "hablar de planes futuros", "I'm going to visit, I'm going to play"),
    SUMMARY("Resumen del Día 6", ["Puedes hablar de planes con 'going to'."]),
    INFO("Tarea para el Día 7", "Mañana: predicciones con 'will'."),
  ],
};

const DAY7 = {
  title: "Día 7 — El futuro con will 🔮 · I think it will rain",
  description: "Predicciones y opiniones sobre el futuro con 'will'.",
  pedagogy: { objective: "Hacer predicciones con 'will'.", summary: "will/won't; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué crees que pasará en el futuro?"] },
  items: [
    TEXT("🔮 I think robots will help us in the future — predicciones."),
    GRAMMAR("will / won't", "I think it will rain tomorrow.\nRobots will help us. People won't use paper maps anymore.\nWill you travel to space? I don't know."),
    deck("Flyers S2D7 — will / won't", [
      ["will", "voluntad futura/predicción", "I think it will rain.", "modal"],
      ["won't", "no (futuro)", "It won't be easy.", "modal"],
      ["I think", "creo que", "I think it will be sunny.", "phrase"],
      ["in the future", "en el futuro", "In the future, cars will fly.", "phrase"],
      ["robot", "robot", "Robots will help us.", "word"],
      ["probably", "probablemente", "It will probably rain.", "adverb"],
      ["maybe", "quizás", "Maybe we'll live on Mars.", "adverb"],
      ["space", "espacio", "We'll travel to space.", "word"],
    ]),
    vocabEx("will / won't 🔮", "Elige la opción correcta.", [
      mc("I think it ___ rain tomorrow.", ["will", "going to"], 0, "will."),
      mc("It ___ be easy. (no será)", ["won't", "isn't"], 0, "won't."),
      mc("In the ___, cars will fly.", ["future", "past"], 0, "future."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe la predicción", [
      fb("🎧 'I think robots will help us with homework in the future.' ¿Con qué ayudarán? Escribe: ___", ["homework"], "'help us with homework'."),
      fb("🎧 'Maybe we'll travel to Mars one day.' ¿Adónde viajarán? Escribe: ___", ["Mars"], "'travel to Mars'."),
    ]),
    listening(2, "Listening · Parte 2 — Predicciones", "Escucha y responde.", "Listen and write. I think robots will help us with homework in the future. Maybe we'll travel to Mars one day.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("Do you think it will rain tomorrow?", ["Yes, I think it will.", "Yes, I'm going to."], 0, "predicción → will."),
      mc("Will robots help us in the future?", ["I think so, probably.", "I'm going to visit."], 0, "predicción con will."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis predicciones", "Haz predicciones sobre el futuro.", "Di 3 predicciones sobre el futuro usando 'will'.", "hacer predicciones con will", "I think robots will, Maybe we'll"),
    SUMMARY("Resumen del Día 7", ["Puedes hacer predicciones con 'will' y 'won't'."]),
    INFO("Tarea para el Día 8", "Mañana: going to vs will, ¿cuándo usar cada uno?"),
  ],
};

const DAY8 = {
  title: "Día 8 — ¿going to o will? 🤔 · Plans vs predictions",
  description: "Diferenciar planes decididos (going to) de predicciones/opiniones (will).",
  pedagogy: { objective: "Elegir entre going to y will según el contexto.", summary: "going to vs will; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Cuál es la diferencia entre un plan y una predicción?"] },
  items: [
    TEXT("🤔 going to = plan decidido. will = predicción u opinión."),
    GRAMMAR("going to vs will", "I'm going to visit Paris next summer. (plan decidido)\nI think the weather will be nice. (predicción/opinión)"),
    deck("Flyers S2D8 — going to vs will", [
      ["decided", "decidido/a", "I've already decided.", "adjective"],
      ["opinion", "opinión", "In my opinion...", "word"],
      ["prediction", "predicción", "Make a prediction.", "word"],
      ["already", "ya", "I've already planned it.", "adverb"],
      ["not sure", "no estar seguro/a", "I'm not sure, maybe.", "phrase"],
      ["definitely", "definitivamente", "I'm definitely going to go.", "adverb"],
    ]),
    vocabEx("going to vs will 🤔", "Elige la opción correcta.", [
      mc("I've ___ decided to visit Paris. (ya)", ["already", "will"], 0, "already."),
      mc("In my ___, it will be sunny. (opinión)", ["opinion", "plan"], 0, "opinion."),
      mc("I'm ___ going to go, I've decided.", ["definitely", "maybe"], 0, "definitely."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige: ¿plan o predicción?", [
      mc("🎧 'I'm going to visit my cousin next weekend, it's already planned.' ¿Es plan o predicción?", ["plan", "prediction"], 0, "'already planned' → plan."),
      mc("🎧 'I think it will be a sunny day tomorrow.' ¿Es plan o predicción?", ["prediction", "plan"], 0, "'I think' → predicción."),
    ]),
    listening(3, "Listening · Parte 3 — going to vs will", "Escucha y responde.", "Listen. I'm going to visit my cousin next weekend, it's already planned. I think it will be a sunny day tomorrow.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "I've already decided — I ___ (1) visit my grandma next week. I'm not sure about the weather, but I think it ___ (2) be sunny.", [
      mc("(1)", ["am going to", "will"], 0, "plan decidido → going to."),
      mc("(2)", ["will", "am going to"], 0, "predicción → will."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Planes y predicciones", "Combina un plan decidido y una predicción.", "Di un plan con 'going to' y una predicción con 'will'.", "diferenciar going to y will", "I'm going to, I think it will"),
    SUMMARY("Resumen del Día 8", ["Puedes diferenciar planes decididos (going to) de predicciones (will)."]),
    INFO("Tarea para el Día 9", "Mañana: el mundo natural — animales y hábitats."),
  ],
};

const DAY9 = {
  title: "Día 9 — El mundo natural 🌍 · Animals and habitats",
  description: "Animales, hábitats y el medio ambiente.",
  pedagogy: { objective: "Describir hábitats y animales.", summary: "Hábitats; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Dónde viven los pingüinos?"] },
  items: [
    TEXT("🌍 Let's explore the natural world — animales y sus hábitats."),
    GRAMMAR("Hábitats", "Penguins live in Antarctica. Monkeys live in the jungle.\nFish live in water. Camels live in the desert."),
    deck("Flyers S2D9 — Hábitats", [
      ["habitat", "hábitat", "The jungle is a habitat.", "word"],
      ["jungle", "selva", "Monkeys live in the jungle.", "place"],
      ["desert", "desierto", "Camels live in the desert.", "place"],
      ["ocean", "océano", "Whales live in the ocean.", "place"],
      ["forest", "bosque", "Bears live in the forest.", "place"],
      ["Antarctica", "la Antártida", "Penguins live in Antarctica.", "place"],
      ["survive", "sobrevivir", "Animals survive in different habitats.", "verb"],
      ["environment", "medio ambiente", "Protect the environment.", "word"],
    ]),
    vocabEx("Hábitats 🌍", "Elige la opción correcta.", [
      mc("Monkeys live in the ___.", ["jungle", "desert"], 0, "jungle."),
      mc("Camels live in the ___.", ["desert", "ocean"], 0, "desert."),
      mc("Penguins live in ___.", ["Antarctica", "the jungle"], 0, "Antarctica."),
    ]),
    LISTENING_HEAD,
    listenTrueFalse("Escucha y marca Verdadero/Falso", [
      mc("🎧 'Penguins live in Antarctica, it's very cold there.' ¿Viven los pingüinos en la Antártida?", ["Verdadero", "Falso"], 0, "'Penguins live in Antarctica' — Verdadero."),
      mc("🎧 'Camels live in the ocean.' ¿Viven los camellos en el océano?", ["Falso", "Verdadero"], 0, "camellos viven en el desierto, Falso."),
    ]),
    listening(4, "Listening · Parte 4 — Hábitats", "Escucha y responde.", "Listen. Penguins live in Antarctica, it's very cold there. Camels don't live in the ocean, they live in the desert.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "The jungle is a habitat with lots of trees and rain. Many animals live there, like monkeys and colourful birds. It's very different from the desert, where it's hot and dry and camels live.", [
      mc("Monkeys live in the jungle. ¿Está bien?", ["Verdadero", "Falso"], 0, "'monkeys'... 'live there' — Verdadero."),
      mc("The desert is wet and cold. ¿Está bien?", ["Falso", "Verdadero"], 0, "'hot and dry', no wet and cold."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Animales y hábitats", "Describe dónde viven los animales.", "Describe 3 animales y sus hábitats.", "describir hábitats", "Penguins live in, Monkeys live in"),
    SUMMARY("Resumen del Día 9", ["Ya conoces: habitat, jungle, desert, ocean, forest, Antarctica."]),
    INFO("Tarea para el Día 10", "Mañana: ¡repaso y segunda prueba!"),
  ],
};

const DAY10 = {
  title: "Día 10 — Repaso de la semana + segunda prueba 🌟",
  description: "Repaso de planes, predicciones y hábitats. Segunda prueba.",
  pedagogy: { objective: "Repasar la Semana 2.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["¿Qué vas a hacer y qué crees que pasará este fin de semana?"] },
  items: [
    TEXT("🌟 ¡Segunda semana terminada! Repasamos going to, will y hábitats."),
    GRAMMAR("Repaso de la Semana 2", "going to (plan). will (predicción). habitat, jungle, desert, ocean."),
    deck("Flyers S2D10 — Repaso mixto", [
      ["going to", "ir a (planes)", "I'm going to visit.", "grammar"],
      ["will", "predicción futura", "I think it will rain.", "modal"],
      ["habitat", "hábitat", "The jungle is a habitat.", "word"],
      ["jungle", "selva", "Monkeys live in the jungle.", "place"],
      ["desert", "desierto", "Camels live in the desert.", "place"],
      ["already", "ya", "I've already decided.", "adverb"],
      ["probably", "probablemente", "It will probably rain.", "adverb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I'm ___ visit my grandma. (voy a)", ["going to", "will"], 0, "going to."),
      mc("I think it ___ rain. (predicción)", ["will", "going to"], 0, "will."),
      mc("Monkeys live in the ___.", ["jungle", "desert"], 0, "jungle."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'This weekend I'm going to visit the zoo and see the monkeys in the jungle area.' ¿Qué va a hacer?", ["visit the zoo", "study"], 0, "'going to visit the zoo'."),
      mc("🎧 'I think it will be sunny, perfect for the zoo.' ¿Qué predice?", ["sunny weather", "rainy weather"], 0, "'will be sunny'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 2", "Escucha y responde.", "Listen and look. This weekend I'm going to visit the zoo and see the monkeys. I think it will be sunny, perfect for the zoo.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "Next weekend I'm ___ (1) visit the zoo — it's already planned! I think the weather ___ (2) be nice. I love animals that live in the ___ (3), like monkeys.", [
      mc("(1)", ["going to", "will"], 0, "plan → going to."),
      mc("(2)", ["will", "going to"], 0, "predicción → will."),
      mc("(3)", ["jungle", "ocean"], 0, "jungle."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina planes, predicciones y hábitats.", "Habla 1-2 minutos combinando lo repasado.", "combinar going to, will, hábitats", "I'm going to, I think it will, Monkeys live in"),
    SUMMARY("Resumen de la Semana 2", ["¡Enhorabuena! Terminaste la Semana 2 de Flyers.", "Ahora, tu segunda prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡presente perfecto — have you ever...?"]),
    INFO("Prueba de la Semana 2 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "El futuro · going to / will · El mundo natural",
  description: "Segunda semana de A2 Flyers: planes futuros con 'going to', predicciones con 'will', diferenciar ambos, y hábitats de animales (jungle, desert, ocean, forest, Antarctica).",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
