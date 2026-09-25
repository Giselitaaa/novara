/**
 * A1 Movers · Semana 4 — "El cole y mi rutina 🏫 · Present simple routines".
 * Asignaturas del cole, la hora, y la rutina diaria con presente simple.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 16 ─────────────────────────
const DAY16 = {
  title: "Día 16 — Asignaturas del cole 📚 · My favourite subject",
  description: "Las asignaturas del cole y decir cuál es tu favorita.",
  pedagogy: {
    objective: "Nombrar asignaturas del cole y expresar preferencias.",
    summary: "Asignaturas; My favourite subject; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Cuál es tu asignatura favorita y por qué?"],
  },
  items: [
    TEXT("📚 Hoy: las asignaturas del cole. What's your favourite subject?"),
    GRAMMAR("My favourite subject is...", "My favourite subject is + asignatura.\nMy favourite subject is Maths. (Mi asignatura favorita son las Mates)"),
    deck("Movers S4D16 — Asignaturas del cole", [
      ["Maths", "matemáticas", "My favourite subject is Maths.", "subject"],
      ["English", "inglés", "I have English on Mondays.", "subject"],
      ["Science", "ciencias", "Science is interesting.", "subject"],
      ["Art", "plástica/arte", "I love Art class.", "subject"],
      ["Music", "música", "Music is fun!", "subject"],
      ["PE", "educación física", "I like PE — we play sports.", "subject"],
      ["History", "historia", "History is about the past.", "subject"],
      ["Geography", "geografía", "Geography is about the world.", "subject"],
      ["subject", "asignatura", "What's your favourite subject?", "word"],
      ["easy", "fácil", "Maths is easy for me.", "adjective"],
    ]),
    vocabEx("Asignaturas del cole 📚", "Elige la asignatura correcta.", [
      mc("2+2=4 → ___", ["Maths", "Art", "Music"], 0, "Maths."),
      mc("🎨 → ___", ["Art", "PE", "History"], 0, "Art."),
      mc("🎵 → ___", ["Music", "Science", "Geography"], 0, "Music."),
      mc("⚽ → ___", ["PE", "Maths", "Art"], 0, "PE."),
      mc("🔬 → ___", ["Science", "Music", "PE"], 0, "Science."),
      mc("🗺️ → ___", ["Geography", "History", "Art"], 0, "Geography."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y une la asignatura", [
      mc("🎧 'My favourite subject is Maths. I'm good at numbers!' ¿Cuál es su asignatura favorita?", ["Maths", "Art"], 0, "'Maths'."),
      mc("🎧 'I love Art class. We paint pictures.' ¿Qué le gusta?", ["Art", "PE"], 0, "'Art class'."),
      mc("🎧 'PE is fun. We play football and run.' ¿Qué asignatura es divertida?", ["PE", "History"], 0, "'PE'."),
      mc("🎧 'History is about the past. It's interesting!' ¿Qué asignatura menciona?", ["History", "Science"], 0, "'History'."),
      mc("🎧 'Science is my favourite. We do experiments!' ¿Cuál es su favorita?", ["Science", "Music"], 0, "'Science'."),
    ]),
    listening(1, "Listening · Parte 1 — Asignaturas del cole", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and match. My favourite subject is Maths. I'm good at numbers! I love Art class. We paint pictures. PE is fun. We play football and run. History is about the past. It's interesting! Science is my favourite. We do experiments!", []),

    READING_HEAD,
    readDefine("Encuentra la asignatura correcta", [
      mc("Estudiamos números y problemas: ___", ["Maths", "Art", "Music"], 0, "Maths."),
      mc("Pintamos y dibujamos: ___", ["Art", "PE", "Science"], 0, "Art."),
      mc("Jugamos deportes: ___", ["PE", "Maths", "History"], 0, "PE."),
      mc("Estudiamos el pasado: ___", ["History", "Science", "Music"], 0, "History."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi asignatura favorita", "Habla de tu asignatura favorita y por qué te gusta.", "Di tu asignatura favorita y explica por qué.", "hablar de asignaturas favoritas", "My favourite subject is..., I like it because it's fun/easy/interesting"),

    SUMMARY("Resumen del Día 16", [
      "Ya conoces: Maths, English, Science, Art, Music, PE, History, Geography.",
      "Puedes decir tu asignatura favorita: 'My favourite subject is...'",
    ]),
    INFO("Tarea para el Día 17", "Repasa las asignaturas. Mañana: la hora."),
  ],
};

// ───────────────────────── DÍA 17 ─────────────────────────
const DAY17 = {
  title: "Día 17 — ¿Qué hora es? ⏰ · What time is it?",
  description: "Decir la hora en inglés.",
  pedagogy: {
    objective: "Preguntar y decir la hora.",
    summary: "La hora; What time is it?; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Sabes decir qué hora es en inglés?"],
  },
  items: [
    TEXT("⏰ What time is it? ¡Hoy aprendemos a decir la hora!"),
    GRAMMAR("What time is it?", "It's + hora. It's three o'clock. (Son las tres)\nIt's half past three. (Son las tres y media)\nIt's quarter past/to three. (Y cuarto / menos cuarto)"),
    deck("Movers S4D17 — La hora", [
      ["o'clock", "en punto", "It's three o'clock.", "phrase"],
      ["half past", "y media", "It's half past four.", "phrase"],
      ["quarter past", "y cuarto", "It's quarter past five.", "phrase"],
      ["quarter to", "menos cuarto", "It's quarter to six.", "phrase"],
      ["what time", "qué hora", "What time is it?", "phrase"],
      ["clock", "reloj", "Look at the clock.", "object"],
      ["morning", "mañana", "Nine o'clock in the morning.", "word"],
      ["afternoon", "tarde", "Three o'clock in the afternoon.", "word"],
      ["late", "tarde (adjetivo)", "I'm late!", "adjective"],
      ["early", "temprano", "I wake up early.", "adjective"],
    ]),
    vocabEx("¿Qué hora es? ⏰", "Elige la hora correcta.", [
      mc("3:00 = It's three ___.", ["o'clock", "half past"], 0, "o'clock."),
      mc("4:30 = It's ___ four.", ["half past", "quarter past"], 0, "half past."),
      mc("5:15 = It's ___ five.", ["quarter past", "quarter to"], 0, "quarter past."),
      mc("5:45 = It's ___ six.", ["quarter to", "half past"], 0, "quarter to."),
      mc("What ___ is it?", ["time", "hour"], 0, "time."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha la hora y escribe", [
      fb("🎧 'What time is it? It's three o'clock.' Escribe la hora: ___:00", ["3"], "3:00."),
      fb("🎧 'It's half past four.' Escribe la hora: ___:30", ["4"], "4:30."),
      fb("🎧 'It's quarter past five.' Escribe la hora: ___:15", ["5"], "5:15."),
      fb("🎧 'It's quarter to six.' Escribe la hora: ___:45", ["5"], "5:45 = quarter to SIX, hora anterior = 5."),
    ]),
    listening(2, "Listening · Parte 2 — La hora", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. What time is it? It's three o'clock. It's half past four. It's quarter past five. It's quarter to six.", []),

    READING_HEAD,
    readStory("Lee la historia y responde Sí/No", "I get up at seven o'clock. I have breakfast at quarter past seven. School starts at half past eight. I have lunch at quarter to one. School finishes at three o'clock. I go to bed at half past eight in the evening.", [
      mc("School starts at half past eight. ¿Está bien?", ["Sí", "No"], 0, "'School starts at half past eight' — Sí."),
      mc("Lunch is at three o'clock. ¿Está bien?", ["Sí", "No"], 1, "'lunch at quarter to one' — No."),
      mc("School finishes at three o'clock. ¿Está bien?", ["Sí", "No"], 0, "'School finishes at three o'clock' — Sí."),
      mc("Bedtime is at seven o'clock. ¿Está bien?", ["Sí", "No"], 1, "'bed at half past eight' — No."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · La hora", "Practica preguntar y decir la hora, y di a qué hora haces cosas.", "Di 4 horas diferentes y qué haces a esa hora.", "decir la hora", "It's three o'clock, School starts at half past eight"),

    SUMMARY("Resumen del Día 17", [
      "Ya sabes decir la hora: o'clock, half past, quarter past, quarter to.",
      "Puedes preguntar: 'What time is it?'",
    ]),
    INFO("Tarea para el Día 18", "Practica decir la hora. Mañana: mi horario del cole."),
  ],
};

// ───────────────────────── DÍA 18 ─────────────────────────
const DAY18 = {
  title: "Día 18 — Mi horario 📆 · School timetable",
  description: "El horario escolar combinando asignaturas y horas.",
  pedagogy: {
    objective: "Describir un horario escolar completo.",
    summary: "Horario escolar; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿A qué hora tienes cada asignatura?"],
  },
  items: [
    TEXT("📆 Hoy combinamos asignaturas y horas: mi horario del cole."),
    GRAMMAR("Repaso combinado", "I have Maths at nine o'clock. (Tengo Mates a las nueve)\nOn Mondays, I have English at half past ten."),
    deck("Movers S4D18 — Mi horario", [
      ["timetable", "horario", "Look at my timetable.", "word"],
      ["lesson", "clase/lección", "My Maths lesson.", "word"],
      ["break", "recreo", "We play at break time.", "word"],
      ["lunchtime", "hora de comer", "Lunchtime is at one.", "word"],
      ["starts", "empieza", "School starts at nine.", "verb"],
      ["finishes", "termina", "School finishes at three.", "verb"],
      ["first", "primero", "Maths is my first lesson.", "word"],
      ["last", "último", "PE is my last lesson.", "word"],
      ["next", "siguiente", "What's next?", "word"],
      ["classroom", "aula", "We're in the classroom.", "place"],
    ]),
    vocabEx("Mi horario 📆", "Elige la palabra correcta.", [
      mc("Look at my ___. (horario)", ["timetable", "clock"], 0, "timetable."),
      mc("We play at ___ time. (recreo)", ["break", "lesson"], 0, "break."),
      mc("School ___ at nine. (empieza)", ["starts", "finishes"], 0, "starts."),
      mc("School ___ at three. (termina)", ["finishes", "starts"], 0, "finishes."),
      mc("Maths is my ___ lesson. (primera)", ["first", "last"], 0, "first."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha el horario", [
      mc("🎧 'My first lesson is Maths at nine o'clock.' ¿Cuál es su primera clase?", ["Maths", "Art"], 0, "'first lesson is Maths'."),
      mc("🎧 'We have break at half past ten.' ¿A qué hora es el recreo?", ["half past ten", "nine o'clock"], 0, "'break at half past ten'."),
      mc("🎧 'My last lesson is PE, and school finishes at three.' ¿Cuál es su última clase?", ["PE", "Maths"], 0, "'last lesson is PE'."),
      mc("🎧 'Lunchtime is at quarter to one.' ¿A qué hora comen?", ["quarter to one", "half past ten"], 0, "'Lunchtime is at quarter to one'."),
    ]),
    listening(3, "Listening · Parte 3 — Mi horario", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. My first lesson is Maths at nine o'clock. We have break at half past ten. My last lesson is PE, and school finishes at three. Lunchtime is at quarter to one.", []),

    READING_HEAD,
    readGapChoice("Elige la opción correcta", "My ___ (1) lesson is Maths, at nine o'clock. Then I have English. At half past ten, we have ___ (2). At quarter to one, it's ___ (3). My ___ (4) lesson is PE, and school finishes at three.", [
      mc("(1)", ["first", "last", "next"], 0, "first lesson."),
      mc("(2)", ["break", "lunchtime", "timetable"], 0, "break."),
      mc("(3)", ["lunchtime", "break", "classroom"], 0, "lunchtime."),
      mc("(4)", ["last", "first", "break"], 0, "last lesson."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi horario del cole", "Describe tu horario del cole completo: primera clase, recreo, comida, última clase.", "Describe tu horario escolar con horas y asignaturas.", "describir el horario escolar", "My first lesson is Maths at nine, We have break at half past ten"),

    SUMMARY("Resumen del Día 18", [
      "Ya conoces: timetable, lesson, break, lunchtime, starts, finishes, first, last.",
      "Puedes describir tu horario completo.",
    ]),
    INFO("Tarea para el Día 19", "Practica tu horario. Mañana: mi rutina diaria completa."),
  ],
};

// ───────────────────────── DÍA 19 ─────────────────────────
const DAY19 = {
  title: "Día 19 — Mi rutina diaria ⏰ · Present simple",
  description: "La rutina diaria completa con presente simple (3ª persona -s).",
  pedagogy: {
    objective: "Describir la rutina diaria con presente simple, incluida la 3ª persona.",
    summary: "Rutina diaria; presente simple 3ª persona; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Puedes describir la rutina de un familiar con 'he/she'?"],
  },
  items: [
    TEXT("⏰ Hoy: mi rutina diaria completa, con presente simple."),
    GRAMMAR("Presente simple — 3ª persona", "I get up. → He/She gets up. (se añade -s)\nI go to school. → He/She goes to school.\nI have breakfast. → He/She has breakfast."),
    deck("Movers S4D19 — Mi rutina diaria", [
      ["gets up", "se levanta", "She gets up at seven.", "verb"],
      ["goes", "va", "He goes to school.", "verb"],
      ["has", "tiene/toma", "She has breakfast.", "verb"],
      ["brushes", "cepilla", "He brushes his teeth.", "verb"],
      ["does homework", "hace deberes", "She does homework.", "phrase"],
      ["comes home", "vuelve a casa", "He comes home at four.", "phrase"],
      ["watches", "ve/mira", "She watches TV.", "verb"],
      ["usually", "normalmente", "I usually get up at seven.", "adverb"],
      ["then", "luego/entonces", "Then I have breakfast.", "word"],
      ["after that", "después de eso", "After that, I go to school.", "phrase"],
    ]),
    vocabEx("Mi rutina diaria ⏰", "Elige la forma correcta.", [
      mc("She ___ up at seven. (se levanta)", ["gets", "get"], 0, "gets up (3ª persona)."),
      mc("He ___ to school. (va)", ["goes", "go"], 0, "goes (3ª persona)."),
      mc("She ___ breakfast. (toma)", ["has", "have"], 0, "has (3ª persona)."),
      mc("I ___ up at seven. (yo)", ["get", "gets"], 0, "get (yo, sin -s)."),
      mc("___ that, I go to school. (después)", ["After", "Then"], 0, "After that."),
    ]),

    LISTENING_HEAD,
    listenScene("Escucha la rutina completa", [
      mc("🎧 'She usually gets up at seven and has breakfast.' ¿A qué hora se levanta?", ["seven", "eight"], 0, "'gets up at seven'."),
      mc("🎧 'He brushes his teeth, then goes to school.' ¿Qué hace primero?", ["brush teeth", "go to school"], 0, "'brushes… then goes'."),
      mc("🎧 'She comes home at four and does her homework.' ¿A qué hora vuelve a casa?", ["four", "three"], 0, "'comes home at four'."),
      mc("🎧 'After dinner, he watches TV and goes to bed.' ¿Qué hace después de cenar?", ["watches TV", "does homework"], 0, "'watches TV'."),
      mc("🎧 'I usually get up early on school days.' ¿Cuándo se levanta temprano?", ["school days", "weekends"], 0, "'on school days'."),
    ]),
    listening(4, "Listening · Parte 4 — Mi rutina diaria", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. She usually gets up at seven and has breakfast. He brushes his teeth, then goes to school. She comes home at four and does her homework. After dinner, he watches TV and goes to bed. I usually get up early on school days.", []),

    READING_HEAD,
    readOpenCloze("Completa con presente simple", "Every day, my sister ___ (1) up at seven o'clock. She ___ (2) breakfast, then she ___ (3) to school. She ___ (4) home at four o'clock and does her homework. After dinner, she ___ (5) TV before bed.", [
      fb("(1)", ["gets"], "gets up."),
      fb("(2)", ["has"], "has breakfast."),
      fb("(3)", ["goes"], "goes to school."),
      fb("(4)", ["comes"], "comes home."),
      fb("(5)", ["watches"], "watches TV."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · La rutina de otra persona", "Describe la rutina diaria de un familiar o amigo usando 'he/she'.", "Describe la rutina de otra persona con presente simple.", "usar presente simple en 3ª persona", "She gets up at seven, He goes to school, She does homework"),

    SUMMARY("Resumen del Día 19", [
      "En 3ª persona (he/she), el verbo lleva -s: gets, goes, has, brushes, watches.",
      "Puedes describir la rutina de otra persona.",
    ]),
    INFO("Tarea para el Día 20", "Repasa asignaturas, la hora, el horario y la rutina. Mañana: ¡repaso y cuarta prueba!"),
  ],
};

// ───────────────────────── DÍA 20 ─────────────────────────
const DAY20 = {
  title: "Día 20 — Repaso de la semana + cuarta prueba 🌟",
  description: "Repaso de asignaturas, la hora, el horario y la rutina diaria. Cuarta prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 4 antes de la prueba.",
    summary: "Repaso de cole, hora y rutina; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Puedes describir un día completo de cole, con horas?"],
  },
  items: [
    TEXT("🌟 ¡Cuarta semana de Movers terminada! Hoy repasamos: asignaturas, la hora, el horario y la rutina."),
    GRAMMAR("Repaso de la Semana 4", "· Asignaturas: Maths, English, Science, Art, PE, History.\n· La hora: o'clock, half past, quarter past/to.\n· Horario: timetable, first/last lesson, break, lunchtime.\n· Rutina (3ª persona): gets up, goes, has, brushes, watches."),
    deck("Movers S4D20 — Repaso mixto", [
      ["Maths", "matemáticas", "My favourite subject.", "subject"],
      ["PE", "educación física", "PE is fun.", "subject"],
      ["o'clock", "en punto", "Three o'clock.", "phrase"],
      ["half past", "y media", "Half past four.", "phrase"],
      ["timetable", "horario", "My timetable.", "word"],
      ["break", "recreo", "Break time.", "word"],
      ["gets up", "se levanta", "She gets up at seven.", "verb"],
      ["goes", "va", "He goes to school.", "verb"],
      ["usually", "normalmente", "I usually get up early.", "adverb"],
      ["starts", "empieza", "School starts at nine.", "verb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("2+2=4 → ___", ["Maths", "PE"], 0, "Maths."),
      mc("3:00 = It's three ___.", ["o'clock", "half past"], 0, "o'clock."),
      mc("Look at my ___. (horario)", ["timetable", "clock"], 0, "timetable."),
      mc("She ___ up at seven. (se levanta)", ["gets", "get"], 0, "gets."),
      mc("School ___ at nine. (empieza)", ["starts", "start"], 0, "starts."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'My first lesson is Maths at nine o'clock.' ¿Qué asignatura y hora?", ["Maths, nine", "PE, ten"], 0, "'Maths at nine'."),
      mc("🎧 'She usually gets up at seven and goes to school at half past eight.' ¿A qué hora va al cole?", ["half past eight", "seven"], 0, "'goes to school at half past eight'."),
      mc("🎧 'We have break at half past ten, then PE at eleven.' ¿Qué hay después del recreo?", ["PE", "Maths"], 0, "'then PE at eleven'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 4", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. My first lesson is Maths at nine o'clock. She usually gets up at seven and goes to school at half past eight. We have break at half past ten, then PE at eleven.", []),

    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: timetable, gets, break, o'clock, starts\n\nLook at my ___ (1)! School ___ (2) at nine ___ (3). We have ___ (4) at half past ten. My sister ___ (5) up at seven every morning.", [
      fb("(1)", ["timetable"], "timetable."),
      fb("(2)", ["starts"], "starts."),
      fb("(3)", ["o'clock"], "o'clock."),
      fb("(4)", ["break"], "break."),
      fb("(5)", ["gets"], "gets up."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina asignaturas, la hora, tu horario y tu rutina diaria.", "Habla 1-2 minutos combinando lo repasado.", "combinar cole, hora, horario, rutina", "My favourite subject is Maths, School starts at nine, I usually get up at seven"),

    SUMMARY("Resumen de la Semana 4", [
      "¡Enhorabuena! Terminaste la Semana 4: asignaturas, la hora, el horario y la rutina diaria.",
      "Ahora, tu cuarta prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡la comida y ir de compras!",
    ]),
    INFO("Prueba de la Semana 4 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "El cole · La hora · Mi horario · Mi rutina diaria",
  description: "Cuarta semana de A1 Movers: asignaturas del cole, decir la hora (o'clock, half past, quarter past/to), el horario escolar, y la rutina diaria en presente simple con 3ª persona. Cada día, las 4 destrezas con el formato real de Movers.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
