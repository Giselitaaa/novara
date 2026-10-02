/**
 * A2 Flyers · Semana 1 — "¡Bienvenido a Flyers! 🚀 · My world".
 * Presentación, personalidad, presente simple vs continuo (repaso ampliado).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY1 = {
  title: "Día 1 — ¡Bienvenido a Flyers! 🚀 · Nice to meet you",
  description: "Bienvenida al nivel A2 Flyers, el último de los Young Learners.",
  pedagogy: { objective: "Presentarse con más detalle (edad, personalidad, gustos).", summary: "Presentación ampliada; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Cómo te describirías en inglés?"] },
  items: [
    TEXT("🚀 ¡Bienvenido/a a A2 Flyers! Este es el último nivel de los exámenes para niños — ¡vamos a volar alto!"),
    GRAMMAR("Presentarse con detalle", "Hello, my name's Laura. I'm eleven years old. I'm friendly and funny.\nWhat's your name? How old are you? What are you like?"),
    deck("Flyers S1D1 — Presentación", [
      ["friendly", "amigable", "I'm friendly.", "personality"],
      ["funny", "gracioso/a", "My friend is funny.", "personality"],
      ["shy", "tímido/a", "She's a bit shy.", "personality"],
      ["clever", "listo/a", "He's very clever.", "personality"],
      ["kind", "amable", "My teacher is kind.", "personality"],
      ["brave", "valiente", "The firefighter is brave.", "personality"],
      ["what are you like", "¿cómo eres?", "What are you like?", "phrase"],
      ["nice to meet you", "encantado/a de conocerte", "Nice to meet you!", "phrase"],
      ["similar", "parecido/a", "We're similar.", "adjective"],
      ["different", "diferente", "We're different.", "adjective"],
    ]),
    vocabEx("Presentación 🚀", "Elige la opción correcta.", [
      mc("'Nice to meet you' significa:", ["encantado/a de conocerte", "adiós"], 0, "'nice to meet you'."),
      mc("Lo opuesto a 'shy' es:", ["friendly", "clever"], 0, "friendly, outgoing — no shy."),
      mc("What are you ___? (¿cómo eres?)", ["like", "similar"], 0, "What are you like?"),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une las personalidades", [
      mc("🎧 'My name's Tom. I'm very funny and I love telling jokes.' ¿Cómo es Tom?", ["funny", "shy"], 0, "'very funny'."),
      mc("🎧 'My sister is quite shy, she doesn't like talking in class.' ¿Cómo es su hermana?", ["shy", "brave"], 0, "'quite shy'."),
    ]),
    listening(1, "Listening · Parte 1 — Presentaciones", "Escucha y responde.", "Listen and match. My name's Tom, I'm very funny and I love telling jokes. My sister is quite shy, she doesn't like talking in class.", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Una persona que no tiene miedo: ___", ["brave", "shy"], 0, "brave."),
      mc("Una persona muy inteligente: ___", ["clever", "funny"], 0, "clever."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi presentación", "Preséntate con detalle: nombre, edad y personalidad.", "Preséntate usando al menos 2 adjetivos de personalidad.", "presentarse con detalle", "My name's, I'm... years old, I'm friendly and"),
    SUMMARY("Resumen del Día 1", ["Ya conoces: friendly, funny, shy, clever, kind, brave.", "Puedes describir tu personalidad en inglés."]),
    INFO("Tarea para el Día 2", "Mañana: presente simple vs. presente continuo."),
  ],
};

const DAY2 = {
  title: "Día 2 — ¿Qué haces normalmente? ⏰ · Simple vs continuous",
  description: "Repaso ampliado: presente simple (hábitos) vs presente continuo (ahora).",
  pedagogy: { objective: "Diferenciar hábitos (simple) de acciones en curso (continuo).", summary: "Presente simple vs continuo; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué haces normalmente los sábados? ¿Qué estás haciendo ahora?"] },
  items: [
    TEXT("⏰ I usually play football, but right now I'm reading."),
    GRAMMAR("Simple vs continuo", "Simple (hábito): I usually/always/often + verbo.\nContinuo (ahora): I'm/She's + verbo-ing + right now/at the moment."),
    deck("Flyers S1D2 — Simple vs continuo", [
      ["usually", "normalmente", "I usually play football.", "adverb"],
      ["often", "a menudo", "I often read books.", "adverb"],
      ["sometimes", "a veces", "I sometimes watch TV.", "adverb"],
      ["right now", "ahora mismo", "I'm reading right now.", "phrase"],
      ["at the moment", "en este momento", "She's cooking at the moment.", "phrase"],
      ["habit", "hábito/costumbre", "A good habit.", "word"],
      ["normally", "normalmente", "I normally get up at seven.", "adverb"],
      ["these days", "en estos días/actualmente", "I'm learning Spanish these days.", "phrase"],
    ]),
    vocabEx("Simple vs continuo ⏰", "Elige la opción correcta.", [
      mc("I ___ play football on Saturdays. (hábito)", ["usually", "now"], 0, "usually = hábito."),
      mc("Right ___, I'm doing my homework.", ["now", "usually"], 0, "right now."),
      mc("I'm learning Spanish these ___.", ["days", "habits"], 0, "these days."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe", [
      fb("🎧 'I usually play basketball, but right now I'm doing my homework.' ¿Qué hace ahora? Escribe: ___", ["homework"], "'doing my homework'."),
      fb("🎧 'She often reads books, but at the moment she's watching TV.' ¿Qué hace ahora? Escribe: ___", ["TV", "watching tv"], "'watching TV'."),
    ]),
    listening(2, "Listening · Parte 2 — Simple vs continuo", "Escucha y responde.", "Listen and write. I usually play basketball, but right now I'm doing my homework. She often reads books, but at the moment she's watching TV.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("What do you usually do on Saturdays?", ["I usually play football.", "I'm playing now."], 0, "hábito → usually."),
      mc("What are you doing right now?", ["I'm reading a book.", "I usually read."], 0, "ahora → continuo."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Hábitos y el momento actual", "Habla de tus hábitos y de lo que haces ahora.", "Di 2 hábitos (usually/often) y algo que estás haciendo ahora.", "diferenciar simple y continuo", "I usually play, Right now I'm"),
    SUMMARY("Resumen del Día 2", ["Puedes diferenciar hábitos (usually/often) de acciones en curso (right now/at the moment)."]),
    INFO("Tarea para el Día 3", "Mañana: mis gustos y aficiones con más detalle."),
  ],
};

const DAY3 = {
  title: "Día 3 — Mis aficiones 🎨 · Hobbies and free time",
  description: "Aficiones y tiempo libre con más detalle.",
  pedagogy: { objective: "Hablar de aficiones con razones.", summary: "Aficiones; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Cuál es tu afición favorita y por qué?"] },
  items: [
    TEXT("🎨 What do you like doing in your free time?"),
    GRAMMAR("Gustos con razones", "I love painting because it's relaxing.\nI'm interested in robotics. I'm good at drawing."),
    deck("Flyers S1D3 — Aficiones", [
      ["painting", "pintura", "I love painting.", "hobby"],
      ["chess", "ajedrez", "I play chess.", "hobby"],
      ["collecting", "coleccionar", "I like collecting stickers.", "hobby"],
      ["robotics", "robótica", "I'm interested in robotics.", "hobby"],
      ["good at", "bueno/a en", "I'm good at drawing.", "phrase"],
      ["interested in", "interesado/a en", "I'm interested in science.", "phrase"],
      ["relaxing", "relajante", "Painting is relaxing.", "adjective"],
      ["exciting", "emocionante", "Robotics is exciting.", "adjective"],
      ["boring", "aburrido/a", "I think chess is boring.", "adjective"],
      ["creative", "creativo/a", "She's very creative.", "adjective"],
    ]),
    vocabEx("Aficiones 🎨", "Elige la opción correcta.", [
      mc("I'm ___ drawing. (bueno en)", ["good at", "interested in"], 0, "good at."),
      mc("I'm ___ robotics. (interesado en)", ["interested in", "good at"], 0, "interested in."),
      mc("Painting is ___. (relajante)", ["relaxing", "boring"], 0, "relaxing."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la afición", [
      mc("🎧 'I love painting because it's really relaxing for me.' ¿Por qué le gusta pintar?", ["it's relaxing", "it's exciting"], 0, "'really relaxing'."),
      mc("🎧 'I'm interested in robotics, I think it's exciting.' ¿Qué le interesa?", ["robotics", "chess"], 0, "'interested in robotics'."),
    ]),
    listening(3, "Listening · Parte 3 — Aficiones", "Escucha y responde.", "Listen. I love painting because it's really relaxing for me. I'm interested in robotics, I think it's exciting.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "My favourite hobby is ___ (1) stickers. I'm really ___ (2) at it! I think it's very ___ (3) because I always find new ones.", [
      mc("(1)", ["collecting", "painting"], 0, "collecting stickers."),
      mc("(2)", ["good", "interested"], 0, "good at it."),
      mc("(3)", ["exciting", "boring"], 0, "exciting."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi afición favorita", "Habla de tu afición favorita y por qué te gusta.", "Describe tu afición favorita usando 'because'.", "hablar de aficiones con razones", "I love... because, I'm good at, I'm interested in"),
    SUMMARY("Resumen del Día 3", ["Ya conoces: painting, chess, collecting, robotics, good at, interested in."]),
    INFO("Tarea para el Día 4", "Mañana: comparar gustos con un amigo/a."),
  ],
};

const DAY4 = {
  title: "Día 4 — Tú y yo 🤝 · Similarities and differences",
  description: "Comparar gustos y personalidad con comparativos.",
  pedagogy: { objective: "Comparar gustos y personalidad.", summary: "Comparativos aplicados a personas; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿En qué eres parecido/a y diferente a tu mejor amigo/a?"] },
  items: [
    TEXT("🤝 You and me — ¿en qué somos parecidos y diferentes?"),
    GRAMMAR("Comparar personas", "I'm taller than my brother. She's more creative than me.\nWe're both friendly. We're similar, but I'm shyer than her."),
    deck("Flyers S1D4 — Comparar personas", [
      ["both", "ambos/los dos", "We're both friendly.", "word"],
      ["same", "igual/mismo", "We like the same games.", "word"],
      ["similar to", "parecido/a a", "I'm similar to my sister.", "phrase"],
      ["more creative than", "más creativo que", "She's more creative than me.", "comparative"],
      ["taller than", "más alto que", "I'm taller than him.", "comparative"],
      ["shyer than", "más tímido que", "He's shyer than me.", "comparative"],
      ["in common", "en común", "We have a lot in common.", "phrase"],
      ["unlike", "a diferencia de", "Unlike me, she's very brave.", "word"],
    ]),
    vocabEx("Comparar personas 🤝", "Elige la opción correcta.", [
      mc("We're ___ friendly. (ambos)", ["both", "same"], 0, "both."),
      mc("She's ___ than me. (más creativa)", ["more creative", "creativer"], 0, "more creative."),
      mc("We have a lot ___ common.", ["in", "at"], 0, "in common."),
    ]),
    LISTENING_HEAD,
    listenTrueFalse("Escucha y marca Verdadero/Falso", [
      mc("🎧 'My brother and I are both really good at football, but he's taller than me.' ¿Son parecidos en fútbol?", ["Verdadero", "Falso"], 0, "'both really good at football' — Verdadero."),
      mc("🎧 'Unlike my sister, I'm quite shy.' ¿Es tímido como su hermana?", ["Falso", "Verdadero"], 0, "'Unlike my sister' → diferente, Falso."),
    ]),
    listening(4, "Listening · Parte 4 — Comparar personas", "Escucha y responde.", "Listen. My brother and I are both really good at football, but he's taller than me. Unlike my sister, I'm quite shy.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "My best friend and I have a lot in common. We're both really into drawing and we love the same TV shows. But we're also different — she's more outgoing than me, and I'm taller than her.", [
      mc("They like the same TV shows. ¿Está bien?", ["Verdadero", "Falso"], 0, "'love the same TV shows' — Verdadero."),
      mc("She is taller than her friend. ¿Está bien?", ["Falso", "Verdadero"], 0, "'I'm taller than her' — el autor es más alto, Falso."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Comparándonos", "Compara tus gustos y personalidad con un amigo/a.", "Di 2 cosas en común y 2 diferencias con un amigo/a imaginario/a.", "comparar personas", "We're both, She's more... than me, I'm taller than"),
    SUMMARY("Resumen del Día 4", ["Puedes comparar gustos y personalidad usando comparativos."]),
    INFO("Tarea para el Día 5", "Mañana: ¡repaso y primera prueba!"),
  ],
};

const DAY5 = {
  title: "Día 5 — Repaso de la semana + primera prueba 🌟",
  description: "Repaso de presentación, hábitos, aficiones y comparaciones. Primera prueba.",
  pedagogy: { objective: "Repasar la Semana 1.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Preséntate combinando todo lo aprendido esta semana."] },
  items: [
    TEXT("🌟 ¡Primera semana de Flyers terminada! Repasamos presentación, hábitos y aficiones."),
    GRAMMAR("Repaso de la Semana 1", "friendly, funny, shy, clever. usually/right now. painting, robotics, good at. more creative than, both."),
    deck("Flyers S1D5 — Repaso mixto", [
      ["friendly", "amigable", "I'm friendly.", "personality"],
      ["usually", "normalmente", "I usually play football.", "adverb"],
      ["right now", "ahora mismo", "I'm reading right now.", "phrase"],
      ["good at", "bueno/a en", "I'm good at drawing.", "phrase"],
      ["interested in", "interesado/a en", "I'm interested in robotics.", "phrase"],
      ["both", "ambos", "We're both friendly.", "word"],
      ["more creative than", "más creativo que", "She's more creative than me.", "comparative"],
      ["clever", "listo/a", "He's very clever.", "personality"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I'm ___. (amigable)", ["friendly", "boring"], 0, "friendly."),
      mc("I ___ play football. (normalmente)", ["usually", "now"], 0, "usually."),
      mc("I'm ___ drawing. (bueno en)", ["good at", "interested in"], 0, "good at."),
      mc("We're ___ friendly. (ambos)", ["both", "same"], 0, "both."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I'm friendly and I'm good at painting.' ¿Cómo es y en qué es bueno?", ["friendly, painting", "shy, chess"], 0, "'friendly'... 'good at painting'."),
      mc("🎧 'We're both interested in robotics.' ¿Qué les interesa a los dos?", ["robotics", "chess"], 0, "'both interested in robotics'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 1", "Escucha y responde.", "Listen and look. I'm friendly and I'm good at painting. We're both interested in robotics.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "My name's Ana. I'm ___ (1) and clever. I ___ (2) play chess, and right now I'm ___ (3) a new game.", [
      mc("(1)", ["friendly", "boringly"], 0, "friendly."),
      mc("(2)", ["usually", "now"], 0, "usually."),
      mc("(3)", ["learning", "learn"], 0, "learning (continuo)."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Preséntate combinando personalidad, hábitos y aficiones.", "Habla 1-2 minutos combinando lo repasado.", "combinar presentación, hábitos, aficiones", "I'm friendly, I usually, I'm good at"),
    SUMMARY("Resumen de la Semana 1", ["¡Enhorabuena! Terminaste la Semana 1 de Flyers.", "Ahora, tu primera prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡el mundo natural y el futuro!"]),
    INFO("Prueba de la Semana 1 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Bienvenida a Flyers · My world · Personalidad y aficiones",
  description: "Primera semana de A2 Flyers: presentarse con detalle (personalidad), presente simple vs continuo, aficiones con razones, y comparar gustos y personalidad entre personas.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
