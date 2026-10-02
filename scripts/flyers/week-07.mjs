/**
 * A2 Flyers · Semana 7 — "Cuerpo y deporte 🏃 · Body and sport".
 * El cuerpo humano, lesiones, y deportes con reglas.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY31 = {
  title: "Día 31 — El cuerpo humano 🦴 · Parts of the body",
  description: "Partes del cuerpo ampliadas.",
  pedagogy: { objective: "Nombrar más partes del cuerpo.", summary: "Partes del cuerpo; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué partes del cuerpo usas para jugar al fútbol?"] },
  items: [
    TEXT("🦴 Let's learn more parts of the body!"),
    GRAMMAR("Partes del cuerpo", "I hurt my knee playing football. You use your elbow to throw a ball."),
    deck("Flyers S7D31 — Partes del cuerpo", [
      ["knee", "rodilla", "I hurt my knee.", "body"],
      ["elbow", "codo", "I hurt my elbow.", "body"],
      ["shoulder", "hombro", "My shoulder hurts.", "body"],
      ["neck", "cuello", "My neck is sore.", "body"],
      ["ankle", "tobillo", "I twisted my ankle.", "body"],
      ["wrist", "muñeca", "I hurt my wrist.", "body"],
      ["chest", "pecho", "My chest hurts.", "body"],
      ["muscle", "músculo", "I have strong muscles.", "body"],
    ]),
    vocabEx("Partes del cuerpo 🦴", "Elige la opción correcta.", [
      mc("🦵 (parte entre pierna y pie) = ___", ["knee", "elbow"], 0, "knee."),
      mc("Lo usas para doblar el brazo: ___", ["elbow", "ankle"], 0, "elbow."),
      mc("Lo tienes entre la cabeza y los hombros: ___", ["neck", "wrist"], 0, "neck."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la parte del cuerpo", [
      mc("🎧 'I hurt my knee playing football yesterday.' ¿Qué se lastimó?", ["knee", "elbow"], 0, "'hurt my knee'."),
      mc("🎧 'I twisted my ankle when I was running.' ¿Qué se torció?", ["ankle", "wrist"], 0, "'twisted my ankle'."),
    ]),
    listening(1, "Listening · Parte 1 — El cuerpo", "Escucha y responde.", "Listen and match. I hurt my knee playing football yesterday. I twisted my ankle when I was running.", []),
    READING_HEAD,
    readDefine("Encuentra la parte del cuerpo", [
      mc("La usas para escribir con la mano, está antes de la mano: ___", ["wrist", "ankle"], 0, "wrist."),
      mc("Está en medio del cuerpo, delante: ___", ["chest", "shoulder"], 0, "chest."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi cuerpo y el deporte", "Describe partes del cuerpo que usas en deporte.", "Di qué partes del cuerpo usas para 3 deportes diferentes.", "describir partes del cuerpo", "I use my knee, I use my elbow"),
    SUMMARY("Resumen del Día 31", ["Ya conoces: knee, elbow, shoulder, neck, ankle, wrist, chest, muscle."]),
    INFO("Tarea para el Día 32", "Mañana: lesiones y accidentes en el pasado."),
  ],
};

const DAY32 = {
  title: "Día 32 — ¡Ay! 🤕 · I fell over and hurt my arm",
  description: "Describir accidentes y lesiones en pasado.",
  pedagogy: { objective: "Describir accidentes en pasado.", summary: "Accidentes en pasado; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Alguna vez te has hecho daño jugando?"] },
  items: [
    TEXT("🤕 I fell over and hurt my arm — contamos accidentes."),
    GRAMMAR("Accidentes en pasado", "I fell over and hurt my knee. I broke my arm last year.\nWhat happened? I fell off my bike."),
    deck("Flyers S7D32 — Accidentes", [
      ["fell over", "se cayó (fall over)", "I fell over in the park.", "verb"],
      ["hurt", "lastimó/se hizo daño", "I hurt my arm.", "verb"],
      ["broke", "rompió (break)", "I broke my arm.", "verb"],
      ["fell off", "se cayó de (fall off)", "I fell off my bike.", "verb"],
      ["accident", "accidente", "It was an accident.", "word"],
      ["bandage", "venda", "Put a bandage on it.", "object"],
      ["hospital", "hospital", "We went to the hospital.", "place"],
      ["cast", "escayola/yeso", "I wore a cast for a month.", "object"],
    ]),
    vocabEx("Accidentes 🤕", "Elige la opción correcta.", [
      mc("I ___ over and hurt my knee. (me caí)", ["fell", "fall"], 0, "fell over."),
      mc("I ___ my arm last year. (rompí)", ["broke", "break"], 0, "broke."),
      mc("We went to the ___. (hospital)", ["hospital", "museum"], 0, "hospital."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe lo que pasó", [
      fb("🎧 'I fell off my bike and broke my arm.' ¿Qué se rompió? Escribe: ___", ["arm"], "'broke my arm'."),
      fb("🎧 'It was an accident, I fell over in the park.' ¿Dónde se cayó? Escribe: ___", ["park"], "'fell over in the park'."),
    ]),
    listening(2, "Listening · Parte 2 — Accidentes", "Escucha y responde.", "Listen and write. I fell off my bike and broke my arm. It was an accident, I fell over in the park.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("What happened to your arm?", ["I fell off my bike and broke it.", "I'm going to the park."], 0, "respuesta a accidente."),
      mc("Did you hurt yourself?", ["Yes, I fell over and hurt my knee.", "Yes, I'm playing football."], 0, "respuesta a lesión."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi accidente", "Cuenta un accidente (real o imaginario).", "Cuenta qué pasó, qué te hiciste y qué pasó después.", "describir accidentes en pasado", "I fell over, I hurt my, I broke my"),
    SUMMARY("Resumen del Día 32", ["Puedes describir accidentes: fell over, hurt, broke, fell off, accident, hospital."]),
    INFO("Tarea para el Día 33", "Mañana: reglas de los deportes."),
  ],
};

const DAY33 = {
  title: "Día 33 — Reglas del deporte ⚽ · Sports rules",
  description: "Reglas básicas de deportes comunes.",
  pedagogy: { objective: "Hablar de reglas de deportes.", summary: "Reglas de deporte; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Cuáles son las reglas de tu deporte favorito?"] },
  items: [
    TEXT("⚽ You mustn't touch the ball with your hands — reglas del fútbol."),
    GRAMMAR("Reglas de deportes", "In football, you mustn't touch the ball with your hands.\nIn basketball, you must bounce the ball. The referee makes the decisions."),
    deck("Flyers S7D33 — Reglas del deporte", [
      ["referee", "árbitro", "The referee blew the whistle.", "word"],
      ["whistle", "silbato", "Blow the whistle!", "object"],
      ["bounce", "botar (pelota)", "You must bounce the ball.", "verb"],
      ["goal", "gol/portería", "She scored a goal!", "word"],
      ["score", "marcar/puntuación", "What's the score?", "word"],
      ["foul", "falta", "That was a foul!", "word"],
      ["team captain", "capitán del equipo", "I'm the team captain.", "phrase"],
      ["opponent", "oponente/rival", "Our opponent played well.", "word"],
    ]),
    vocabEx("Reglas del deporte ⚽", "Elige la opción correcta.", [
      mc("The ___ blew the whistle. (árbitro)", ["referee", "opponent"], 0, "referee."),
      mc("She scored a ___! (gol)", ["goal", "foul"], 0, "goal."),
      mc("In basketball, you must ___ the ball.", ["bounce", "kick"], 0, "bounce."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la regla", [
      mc("🎧 'In football, you mustn't touch the ball with your hands.' ¿Qué no puedes hacer?", ["touch the ball with hands", "kick the ball"], 0, "'mustn't touch the ball with your hands'."),
      mc("🎧 'The referee blew the whistle because it was a foul.' ¿Por qué pitó?", ["it was a foul", "it was a goal"], 0, "'because it was a foul'."),
    ]),
    listening(3, "Listening · Parte 3 — Reglas del deporte", "Escucha y responde.", "Listen. In football, you mustn't touch the ball with your hands. The referee blew the whistle because it was a foul.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "In football, you ___ (1) touch the ball with your hands, only your feet. The ___ (2) makes all the important decisions. If a player breaks a rule, it's a ___ (3).", [
      mc("(1)", ["mustn't", "must"], 0, "mustn't touch."),
      mc("(2)", ["referee", "captain"], 0, "referee."),
      mc("(3)", ["foul", "goal"], 0, "foul."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Las reglas de mi deporte", "Explica las reglas de un deporte.", "Explica 3 reglas de tu deporte favorito.", "explicar reglas de deportes", "You mustn't, You must, The referee"),
    SUMMARY("Resumen del Día 33", ["Ya conoces: referee, whistle, bounce, goal, score, foul, team captain, opponent."]),
    INFO("Tarea para el Día 34", "Mañana: deportes de equipo vs individuales."),
  ],
};

const DAY34 = {
  title: "Día 34 — Equipo o individual 🏓 · Team vs individual sports",
  description: "Comparar deportes de equipo e individuales.",
  pedagogy: { objective: "Comparar deportes de equipo e individuales.", summary: "Deportes de equipo/individuales; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Prefieres deportes de equipo o individuales?"] },
  items: [
    TEXT("🏓 Team sports or individual sports — ¿cuál prefieres?"),
    GRAMMAR("Comparar tipos de deporte", "Football is a team sport. Tennis can be an individual sport.\nI prefer team sports because I like playing with friends."),
    deck("Flyers S7D34 — Tipos de deporte", [
      ["team sport", "deporte de equipo", "Football is a team sport.", "phrase"],
      ["individual sport", "deporte individual", "Swimming is often individual.", "phrase"],
      ["table tennis", "tenis de mesa/ping pong", "I play table tennis.", "sport"],
      ["badminton", "bádminton", "We play badminton together.", "sport"],
      ["cooperate", "cooperar", "In team sports, you cooperate.", "verb"],
      ["compete", "competir", "I like to compete.", "verb"],
      ["prefer", "preferir", "I prefer team sports.", "verb"],
    ]),
    vocabEx("Tipos de deporte 🏓", "Elige la opción correcta.", [
      mc("Football is a ___ sport.", ["team", "individual"], 0, "team."),
      mc("I ___ team sports. (prefiero)", ["prefer", "cooperate"], 0, "prefer."),
      mc("🏓 = ___", ["table tennis", "badminton"], 0, "table tennis."),
    ]),
    LISTENING_HEAD,
    listenTrueFalse("Escucha y marca Verdadero/Falso", [
      mc("🎧 'I prefer team sports because I like cooperating with my friends.' ¿Prefiere deportes de equipo?", ["Verdadero", "Falso"], 0, "'prefer team sports'."),
      mc("🎧 'Table tennis is always a team sport.' ¿Es siempre de equipo el tenis de mesa?", ["Falso", "Verdadero"], 0, "el tenis de mesa suele ser individual."),
    ]),
    listening(4, "Listening · Parte 4 — Tipos de deporte", "Escucha y responde.", "Listen. I prefer team sports because I like cooperating with my friends. Table tennis isn't always a team sport, it can be individual.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "I love team sports like football because you have to cooperate with your teammates. My brother prefers individual sports like swimming and table tennis because he likes to compete alone.", [
      mc("The writer prefers individual sports. ¿Está bien?", ["Falso", "Verdadero"], 0, "'I love team sports', no individual."),
      mc("His brother likes swimming. ¿Está bien?", ["Verdadero", "Falso"], 0, "'brother prefers individual sports like swimming' — Verdadero."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Equipo o individual", "Habla sobre tus preferencias de deporte.", "Di si prefieres deportes de equipo o individuales y por qué.", "comparar tipos de deporte", "I prefer team sports because, I like individual sports because"),
    SUMMARY("Resumen del Día 34", ["Puedes comparar deportes de equipo e individuales con cooperate, compete, prefer."]),
    INFO("Tarea para el Día 35", "Mañana: ¡repaso y séptima prueba!"),
  ],
};

const DAY35 = {
  title: "Día 35 — Repaso de la semana + séptima prueba 🌟",
  description: "Repaso del cuerpo, accidentes y deportes. Séptima prueba.",
  pedagogy: { objective: "Repasar la Semana 7.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Cuenta un accidente deportivo combinando el cuerpo y las reglas."] },
  items: [
    TEXT("🌟 ¡Séptima semana terminada! Repasamos el cuerpo, accidentes y deportes."),
    GRAMMAR("Repaso de la Semana 7", "knee, elbow, ankle. fell over, broke, hurt. referee, goal, foul. team sport, prefer."),
    deck("Flyers S7D35 — Repaso mixto", [
      ["knee", "rodilla", "I hurt my knee.", "body"],
      ["broke", "rompió", "I broke my arm.", "verb"],
      ["fell over", "se cayó", "I fell over.", "verb"],
      ["referee", "árbitro", "The referee blew the whistle.", "word"],
      ["goal", "gol", "She scored a goal.", "word"],
      ["foul", "falta", "That was a foul.", "word"],
      ["team sport", "deporte de equipo", "Football is a team sport.", "phrase"],
      ["prefer", "preferir", "I prefer team sports.", "verb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I hurt my ___. (rodilla)", ["knee", "elbow"], 0, "knee."),
      mc("I ___ my arm last year. (rompí)", ["broke", "break"], 0, "broke."),
      mc("The ___ blew the whistle.", ["referee", "opponent"], 0, "referee."),
      mc("Football is a ___ sport.", ["team", "individual"], 0, "team."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I fell over playing football and hurt my knee.' ¿Qué se lastimó?", ["knee", "elbow"], 0, "'hurt my knee'."),
      mc("🎧 'I prefer team sports, I love playing football with my friends.' ¿Qué prefiere?", ["team sports", "individual sports"], 0, "'prefer team sports'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 7", "Escucha y responde.", "Listen and look. I fell over playing football and hurt my knee. I prefer team sports, I love playing football with my friends.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "Yesterday I ___ (1) over playing football and hurt my ___ (2). The ___ (3) said it wasn't a foul, so we continued playing.", [
      mc("(1)", ["fell", "fall"], 0, "fell over."),
      mc("(2)", ["knee", "chest"], 0, "knee."),
      mc("(3)", ["referee", "captain"], 0, "referee."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina cuerpo, accidentes y deportes.", "Habla 1-2 minutos combinando lo repasado.", "combinar cuerpo, accidentes, deportes", "I hurt my, I fell over, I prefer team sports"),
    SUMMARY("Resumen de la Semana 7", ["¡Enhorabuena! Terminaste la Semana 7 de Flyers.", "Ahora, tu séptima prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡el medio ambiente y reciclar!"]),
    INFO("Prueba de la Semana 7 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "Cuerpo y deporte · Body and sport · Reglas",
  description: "Séptima semana de A2 Flyers: partes del cuerpo (knee, elbow, ankle), accidentes en pasado (fell over, broke, hurt), reglas de deportes (referee, foul, goal), y comparar deportes de equipo e individuales.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
