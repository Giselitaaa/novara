/**
 * A2 Flyers · Semana 9 — "Medios de comunicación 📰 · Media and news".
 * TV, noticias, internet, y el pasado continuo.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY41 = {
  title: "Día 41 — La televisión 📺 · TV programmes",
  description: "Tipos de programas de televisión.",
  pedagogy: { objective: "Hablar de programas de televisión.", summary: "Programas de TV; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué tipo de programas te gustan?"] },
  items: [
    TEXT("📺 What's your favourite TV programme? — tipos de programas."),
    GRAMMAR("Programas de TV", "I love watching cartoons and documentaries.\nWhat's on TV tonight? There's a quiz show at eight."),
    deck("Flyers S9D41 — Programas de TV", [
      ["cartoon", "dibujos animados", "I love cartoons.", "programme"],
      ["documentary", "documental", "I watched a documentary about animals.", "programme"],
      ["quiz show", "concurso", "I love quiz shows.", "programme"],
      ["news", "noticias", "Watch the news at six.", "programme"],
      ["channel", "canal", "Change the channel.", "word"],
      ["remote control", "mando a distancia", "Where's the remote control?", "object"],
      ["episode", "episodio", "Did you watch the new episode?", "word"],
      ["series", "serie", "I'm watching a new series.", "word"],
    ]),
    vocabEx("Programas de TV 📺", "Elige la opción correcta.", [
      mc("I love watching ___. (dibujos animados)", ["cartoons", "news"], 0, "cartoons."),
      mc("Watch the ___ at six. (noticias)", ["news", "episode"], 0, "news."),
      mc("Where's the ___? (mando)", ["remote control", "channel"], 0, "remote control."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une el programa", [
      mc("🎧 'I love watching documentaries about animals.' ¿Qué le gusta ver?", ["documentaries", "cartoons"], 0, "'love watching documentaries'."),
      mc("🎧 'Did you watch the new episode of that series last night?' ¿Qué preguntó?", ["about an episode", "about the news"], 0, "'the new episode of that series'."),
    ]),
    listening(1, "Listening · Parte 1 — Programas de TV", "Escucha y responde.", "Listen and match. I love watching documentaries about animals. Did you watch the new episode of that series last night?", []),
    READING_HEAD,
    readDefine("Encuentra la palabra", [
      mc("Programa donde responden preguntas: ___", ["quiz show", "documentary"], 0, "quiz show."),
      mc("Objeto para cambiar de canal: ___", ["remote control", "episode"], 0, "remote control."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis programas favoritos", "Habla de tus programas de TV favoritos.", "Describe 2 tipos de programas que te gustan y por qué.", "hablar de programas de TV", "I love watching, My favourite programme is"),
    SUMMARY("Resumen del Día 41", ["Ya conoces: cartoon, documentary, quiz show, news, channel, remote control, episode, series."]),
    INFO("Tarea para el Día 42", "Mañana: el pasado continuo — qué estaba pasando."),
  ],
};

const DAY42 = {
  title: "Día 42 — Estaba viendo la tele 📼 · Past continuous",
  description: "Pasado continuo para describir acciones en curso en el pasado.",
  pedagogy: { objective: "Usar el pasado continuo.", summary: "Pasado continuo; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué estabas haciendo ayer a las ocho de la tarde?"] },
  items: [
    TEXT("📼 I was watching TV when the phone rang — el pasado continuo."),
    GRAMMAR("Pasado continuo", "was/were + verbo-ing.\nI was watching TV when the phone rang.\nWhat were you doing at seven o'clock? I was having dinner."),
    deck("Flyers S9D42 — Pasado continuo", [
      ["was watching", "estaba viendo", "I was watching TV.", "verb"],
      ["was having", "estaba teniendo/tomando", "I was having dinner.", "verb"],
      ["were playing", "estaban jugando", "They were playing outside.", "verb"],
      ["when", "cuando", "I was watching TV when the phone rang.", "word"],
      ["rang", "sonó (ring)", "The phone rang.", "verb"],
      ["at that moment", "en ese momento", "At that moment, I was sleeping.", "phrase"],
      ["suddenly", "de repente", "Suddenly, the lights went out.", "adverb"],
    ]),
    vocabEx("Pasado continuo 📼", "Elige la opción correcta.", [
      mc("I ___ watching TV when the phone rang. (estaba)", ["was", "am"], 0, "was watching."),
      mc("What ___ you doing at seven? (estabas)", ["were", "are"], 0, "were doing."),
      mc("___, the lights went out. (de repente)", ["Suddenly", "When"], 0, "Suddenly."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe qué estaba pasando", [
      fb("🎧 'I was watching TV when the phone rang.' ¿Qué estaba haciendo? Escribe: ___", ["watching TV", "watching tv"], "'was watching TV'."),
      fb("🎧 'They were playing outside when it started to rain.' ¿Qué estaban haciendo? Escribe: ___", ["playing outside", "playing"], "'were playing outside'."),
    ]),
    listening(2, "Listening · Parte 2 — Pasado continuo", "Escucha y responde.", "Listen and write. I was watching TV when the phone rang. They were playing outside when it started to rain.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("What were you doing at eight o'clock?", ["I was having dinner.", "I have dinner every day."], 0, "pasado continuo."),
      mc("What happened when you were watching TV?", ["The phone rang suddenly.", "I watch TV every day."], 0, "pasado continuo + interrupción."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Lo que estaba pasando", "Describe qué estabas haciendo en un momento del pasado.", "Describe qué estabas haciendo ayer a una hora específica.", "usar el pasado continuo", "I was watching, I was having, Suddenly"),
    SUMMARY("Resumen del Día 42", ["Puedes usar el pasado continuo: was/were + verbo-ing, especialmente con 'when' y 'suddenly'."]),
    INFO("Tarea para el Día 43", "Mañana: internet y la tecnología."),
  ],
};

const DAY43 = {
  title: "Día 43 — Internet y tecnología 💻 · The internet",
  description: "Vocabulario de internet y tecnología.",
  pedagogy: { objective: "Hablar de internet y tecnología.", summary: "Internet y tecnología; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Para qué usas internet?"] },
  items: [
    TEXT("💻 I use the internet to... — tecnología de hoy."),
    GRAMMAR("Internet y tecnología", "I use the internet to do my homework and watch videos.\nI send messages on my tablet. Be careful online."),
    deck("Flyers S9D43 — Internet", [
      ["internet", "internet", "I use the internet every day.", "word"],
      ["tablet", "tableta", "I watch videos on my tablet.", "object"],
      ["message", "mensaje", "I send messages to my friends.", "word"],
      ["website", "sitio web", "Visit this website.", "word"],
      ["download", "descargar", "I downloaded a new app.", "verb"],
      ["online", "en línea/conectado", "Be careful online.", "adjective"],
      ["password", "contraseña", "Keep your password secret.", "word"],
      ["screen", "pantalla", "Don't look at the screen too much.", "word"],
    ]),
    vocabEx("Internet 💻", "Elige la opción correcta.", [
      mc("I watch videos on my ___.", ["tablet", "password"], 0, "tablet."),
      mc("I ___ a new app yesterday. (descargué)", ["downloaded", "download"], 0, "downloaded."),
      mc("Keep your ___ secret. (contraseña)", ["password", "website"], 0, "password."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige lo correcto", [
      mc("🎧 'I downloaded a new app on my tablet yesterday.' ¿Qué hizo?", ["downloaded an app", "sent a message"], 0, "'downloaded a new app'."),
      mc("🎧 'Be careful online and keep your password secret.' ¿Qué consejo da?", ["keep password secret", "download apps"], 0, "'keep your password secret'."),
    ]),
    listening(3, "Listening · Parte 3 — Internet", "Escucha y responde.", "Listen. I downloaded a new app on my tablet yesterday. Be careful online and keep your password secret.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "I use the ___ (1) every day to do my homework. Yesterday I ___ (2) a new app on my ___ (3). I always keep my password secret.", [
      mc("(1)", ["internet", "password"], 0, "internet."),
      mc("(2)", ["downloaded", "download"], 0, "downloaded."),
      mc("(3)", ["tablet", "screen"], 0, "tablet."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Yo y la tecnología", "Habla de cómo usas internet y la tecnología.", "Describe para qué usas internet y un consejo de seguridad.", "hablar de internet y tecnología", "I use the internet to, Be careful online"),
    SUMMARY("Resumen del Día 43", ["Ya conoces: internet, tablet, message, website, download, online, password, screen."]),
    INFO("Tarea para el Día 44", "Mañana: contar una noticia con pasado simple y continuo."),
  ],
};

const DAY44 = {
  title: "Día 44 — Contando una noticia 📰 · Telling the news",
  description: "Combinar pasado simple y continuo para contar una noticia o historia.",
  pedagogy: { objective: "Combinar pasado simple y continuo en una narración.", summary: "Pasado simple + continuo combinados; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["Cuenta algo que pasó mientras hacías otra cosa."] },
  items: [
    TEXT("📰 While I was watching TV, something happened — combinamos tiempos."),
    GRAMMAR("Combinar pasado simple y continuo", "While I was watching TV, the lights went out.\nI was walking home when I saw my friend."),
    deck("Flyers S9D44 — Combinar tiempos", [
      ["while", "mientras", "While I was watching TV...", "word"],
      ["went out", "se apagó/se fue (go out)", "The lights went out.", "verb"],
      ["saw", "vio/vi (see)", "I saw my friend.", "verb"],
      ["happened", "pasó/ocurrió (happen)", "Something happened.", "verb"],
      ["story", "historia", "Tell me the story.", "word"],
      ["news report", "reportaje de noticias", "I watched a news report.", "phrase"],
    ]),
    vocabEx("Combinar tiempos 📰", "Elige la opción correcta.", [
      mc("___ I was watching TV, the lights went out. (mientras)", ["While", "When"], 0, "While."),
      mc("I was walking home ___ I saw my friend. (cuando)", ["when", "while"], 0, "when."),
      mc("The lights ___ out suddenly. (se apagaron)", ["went", "go"], 0, "went."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha la noticia", [
      mc("🎧 'While I was watching the news, the lights suddenly went out.' ¿Qué pasó mientras veía las noticias?", ["lights went out", "phone rang"], 0, "'lights... went out'."),
      mc("🎧 'I was walking home when I saw an amazing rainbow.' ¿Qué vio?", ["a rainbow", "the news"], 0, "'saw an amazing rainbow'."),
    ]),
    listening(4, "Listening · Parte 4 — Contando una noticia", "Escucha y responde.", "Listen. While I was watching the news, the lights suddenly went out. I was walking home when I saw an amazing rainbow.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "Yesterday, while I was watching TV, something strange happened — the lights went out! I was scared for a moment, but then my dad found some candles. It was actually quite fun in the end.", [
      mc("The lights went out while he was watching TV. ¿Está bien?", ["Verdadero", "Falso"], 0, "'while I was watching TV... lights went out' — Verdadero."),
      mc("It was a terrible experience. ¿Está bien?", ["Falso", "Verdadero"], 0, "'quite fun in the end', no terrible."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi historia", "Cuenta una historia combinando pasado simple y continuo.", "Cuenta algo que pasó mientras hacías otra cosa, usando 'while' o 'when'.", "combinar pasado simple y continuo", "While I was, Suddenly, I saw"),
    SUMMARY("Resumen del Día 44", ["Puedes combinar pasado simple y continuo con 'while' y 'when' para contar historias."]),
    INFO("Tarea para el Día 45", "Mañana: ¡repaso y novena prueba!"),
  ],
};

const DAY45 = {
  title: "Día 45 — Repaso de la semana + novena prueba 🌟",
  description: "Repaso de TV, pasado continuo e internet. Novena prueba.",
  pedagogy: { objective: "Repasar la Semana 9.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Cuenta una historia combinando TV, internet y el pasado continuo."] },
  items: [
    TEXT("🌟 ¡Novena semana terminada! Repasamos TV, el pasado continuo e internet."),
    GRAMMAR("Repaso de la Semana 9", "cartoon, documentary, news. was/were + -ing. internet, tablet, download. while, when."),
    deck("Flyers S9D45 — Repaso mixto", [
      ["documentary", "documental", "I watched a documentary.", "programme"],
      ["was watching", "estaba viendo", "I was watching TV.", "verb"],
      ["internet", "internet", "I use the internet.", "word"],
      ["download", "descargar", "I downloaded an app.", "verb"],
      ["while", "mientras", "While I was watching TV...", "word"],
      ["suddenly", "de repente", "Suddenly, the lights went out.", "adverb"],
      ["password", "contraseña", "Keep your password secret.", "word"],
      ["news", "noticias", "Watch the news.", "programme"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I love watching ___. (documentales)", ["documentaries", "passwords"], 0, "documentaries."),
      mc("I ___ watching TV when the phone rang. (estaba)", ["was", "am"], 0, "was."),
      mc("I use the ___ every day.", ["internet", "channel"], 0, "internet."),
      mc("___, the lights went out. (de repente)", ["Suddenly", "While"], 0, "Suddenly."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I was watching a documentary on my tablet when the internet stopped working.' ¿Qué estaba viendo?", ["a documentary", "the news"], 0, "'watching a documentary'."),
      mc("🎧 'While I was downloading an app, the lights suddenly went out.' ¿Qué estaba haciendo?", ["downloading an app", "watching TV"], 0, "'downloading an app'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 9", "Escucha y responde.", "Listen and look. I was watching a documentary on my tablet when the internet stopped working. While I was downloading an app, the lights suddenly went out.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "Yesterday, I ___ (1) watching a documentary on my tablet ___ (2) the internet suddenly stopped working. I ___ (3) a new app the day before.", [
      mc("(1)", ["was", "am"], 0, "was watching."),
      mc("(2)", ["when", "if"], 0, "when."),
      mc("(3)", ["had downloaded", "download"], 0, "had downloaded — alternativamente 'downloaded'."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina TV, pasado continuo e internet.", "Habla 1-2 minutos combinando lo repasado.", "combinar TV, pasado continuo, internet", "I love watching, I was watching when, I use the internet"),
    SUMMARY("Resumen de la Semana 9", ["¡Enhorabuena! Terminaste la Semana 9 de Flyers.", "Ahora, tu novena prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡gran repaso integral!"]),
    INFO("Prueba de la Semana 9 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Medios de comunicación · TV, internet · Past continuous",
  description: "Novena semana de A2 Flyers: programas de TV (cartoon, documentary, news), el pasado continuo (was/were + -ing), internet y tecnología, y combinar pasado simple y continuo para contar historias (while/when).",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
