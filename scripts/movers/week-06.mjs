/**
 * A1 Movers · Semana 6 — "Repaso grande 🌈 (Semanas 1-5)".
 * Repaso combinando presentación, familia, aficiones, casa, ciudad, cole,
 * hora, rutina, comida y compras.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 26 ─────────────────────────
const DAY26 = {
  title: "Día 26 — Repaso: presentación, familia, números 🙋",
  description: "Repaso combinado de la Semana 1.",
  pedagogy: {
    objective: "Combinar presentación, familia extendida y números.",
    summary: "Repaso S1; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Recuerdas cómo preguntar dónde vive alguien?"],
  },
  items: [
    TEXT("🙋 Hoy repasamos: presentación, familia extendida, números y there is/are."),
    GRAMMAR("Repaso: Semana 1", "Where do you live? I live in... My cousin has got... twenty, thirty... There is/There are."),
    deck("Movers S6D26 — Repaso 1", [
      ["live", "vivir", "I live in Madrid.", "verb"],
      ["cousin", "primo/a", "My cousin has got a bike.", "family"],
      ["has got", "tiene (él/ella)", "She has got a cat.", "word"],
      ["fifty", "cincuenta", "Fifty books.", "number"],
      ["there is", "hay (sing.)", "There is a cat.", "phrase"],
      ["there are", "hay (pl.)", "There are two dogs.", "phrase"],
      ["how old", "qué edad", "How old are you?", "phrase"],
      ["favourite", "favorito", "My favourite colour.", "adjective"],
      ["aunt", "tía", "My aunt lives in Paris.", "family"],
      ["room", "habitación", "My room.", "place"],
    ]),
    vocabEx("Repaso — presentación, familia, números 🙋", "Elige la opción correcta.", [
      mc("Where do you ___? I live in Madrid.", ["live", "has got"], 0, "live."),
      mc("My cousin ___ got a bike.", ["has", "have"], 0, "has got."),
      mc("50 = ___", ["fifty", "fifteen"], 0, "fifty."),
      mc("(un gato) ___ a cat.", ["There is", "There are"], 0, "There is."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I live in Barcelona. My cousin has got a dog.' ¿Dónde vive?", ["Barcelona", "Madrid"], 0, "'I live in Barcelona'."),
      mc("🎧 'There are fifty students at my school.' ¿Cuántos estudiantes hay?", ["fifty", "fifteen"], 0, "'fifty'."),
    ]),
    listening(1, "Listening · Repaso 1", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I live in Barcelona. My cousin has got a dog. There are fifty students at my school.", []),

    READING_HEAD,
    readWrite("Completa — repaso", [
      fb("l_v_ (vivir)", ["live"], "live."),
      fb("c__s_n (primo)", ["cousin"], "cousin."),
      fb("f_fty (cincuenta)", ["fifty"], "fifty."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso presentación, familia, números", "Combina presentación, familia y números en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar presentación, familia, números", "I live in..., My cousin has got..., fifty, There is a cat"),

    SUMMARY("Resumen del Día 26", ["Repasamos presentación, familia extendida y números."]),
    INFO("Tarea para el Día 27", "Repasa el vocabulario de hoy. Mañana: aficiones y mi semana."),
  ],
};

// ───────────────────────── DÍA 27 ─────────────────────────
const DAY27 = {
  title: "Día 27 — Repaso: aficiones y mi semana 🎨",
  description: "Repaso combinado de la Semana 2.",
  pedagogy: {
    objective: "Combinar aficiones, love/like/hate y mi semana.",
    summary: "Repaso S2; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Qué haces cada día de la semana?"],
  },
  items: [
    TEXT("🎨 Hoy repasamos: aficiones, love/like/hate, mi semana y do/does."),
    GRAMMAR("Repaso: Semana 2", "I like + -ing. I love / I hate. On Mondays, I... Do you like...? Does she like...?"),
    deck("Movers S6D27 — Repaso 2", [
      ["drawing", "dibujar", "I like drawing.", "hobby"],
      ["love", "encantar", "I love swimming!", "verb"],
      ["hate", "odiar", "I hate homework.", "verb"],
      ["on Mondays", "los lunes", "On Mondays, I go to school.", "phrase"],
      ["always", "siempre", "I always play football.", "adverb"],
      ["do you like", "te gusta", "Do you like football?", "phrase"],
      ["does she like", "le gusta (ella)", "Does she like dancing?", "phrase"],
      ["boring", "aburrido", "Homework is boring.", "adjective"],
      ["fun", "divertido", "It's fun!", "adjective"],
      ["reading", "leer", "I like reading.", "hobby"],
    ]),
    vocabEx("Repaso — aficiones, mi semana 🎨", "Elige la opción correcta.", [
      mc("🎨 I like ___.", ["drawing", "swimming"], 0, "drawing."),
      mc("😍 I ___ swimming!", ["love", "hate"], 0, "love."),
      mc("On ___, I go to school.", ["Mondays", "weekend"], 0, "Mondays."),
      mc("___ you like football?", ["Do", "Does"], 0, "Do."),
    ]),

    LISTENING_HEAD,
    listenForm("Escucha y repasa", [
      fb("🎧 'I like drawing, but I hate homework.' Escribe lo que odia: ___", ["homework"], "homework."),
      fb("🎧 'On Mondays, I always play football.' ¿Qué día? Escribe: ___", ["Monday", "Mondays"], "Monday(s)."),
    ]),
    listening(2, "Listening · Repaso 2", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I like drawing, but I hate homework. On Mondays, I always play football.", []),

    READING_HEAD,
    readStory("Lee y responde Sí/No", "I like drawing and reading. I love swimming, but I hate homework — it's boring! On Mondays, I always go to school. Does my sister like dancing? Yes, she does!", [
      mc("He likes drawing. ¿Está bien?", ["Sí", "No"], 0, "'I like drawing' — Sí."),
      mc("He loves homework. ¿Está bien?", ["Sí", "No"], 1, "'I hate homework' — No."),
      mc("His sister likes dancing. ¿Está bien?", ["Sí", "No"], 0, "'Yes, she does' — Sí."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso aficiones, mi semana", "Combina aficiones, gustos y tu semana en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar aficiones, semana, gustos", "I like drawing, I love swimming, On Mondays I go to school"),

    SUMMARY("Resumen del Día 27", ["Repasamos aficiones, love/like/hate, mi semana y do/does."]),
    INFO("Tarea para el Día 28", "Repasa el vocabulario de hoy. Mañana: mi casa y mi ciudad."),
  ],
};

// ───────────────────────── DÍA 28 ─────────────────────────
const DAY28 = {
  title: "Día 28 — Repaso: casa, ciudad, comparativos 🏙️",
  description: "Repaso combinado de la Semana 3.",
  pedagogy: {
    objective: "Combinar la casa, la ciudad, indicaciones y comparativos.",
    summary: "Repaso S3; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes comparar tu casa con la de un amigo?"],
  },
  items: [
    TEXT("🏙️ Hoy repasamos: mi casa, mi ciudad, indicaciones y comparativos."),
    GRAMMAR("Repaso: Semana 3", "next to, between, behind. library, hospital, cinema. Turn left, go straight on. bigger than, smaller than."),
    deck("Movers S6D28 — Repaso 3", [
      ["next to", "al lado de", "The lamp is next to the bed.", "preposition"],
      ["library", "biblioteca", "There's a library.", "place"],
      ["turn left", "gira a la izquierda", "Turn left.", "phrase"],
      ["opposite", "enfrente de", "Opposite the park.", "preposition"],
      ["bigger", "más grande", "Bigger than yours.", "adjective"],
      ["taller", "más alto", "Taller than the house.", "adjective"],
      ["than", "que (comparación)", "Bigger than mine.", "word"],
      ["corner", "esquina", "On the corner.", "place"],
      ["behind", "detrás de", "Behind the sofa.", "preposition"],
      ["hospital", "hospital", "The hospital is big.", "place"],
    ]),
    vocabEx("Repaso — casa, ciudad, comparativos 🏙️", "Elige la opción correcta.", [
      mc("(al lado) The lamp is ___ the bed.", ["next to", "between"], 0, "next to."),
      mc("(izquierda) Turn ___.", ["left", "right"], 0, "left."),
      mc("My house is ___ than yours.", ["bigger", "smaller"], 0, "bigger."),
      mc("Aquí puedes leer libros: ___", ["library", "cinema"], 0, "library."),
    ]),

    LISTENING_HEAD,
    listenColourWrite("Escucha y repasa", [
      fb("🎧 'My house is bigger than my cousin's. Turn left at the library.' ¿Qué hace en la biblioteca? Escribe: turn ___", ["left"], "left."),
      fb("🎧 'The museum is opposite the hospital.' ¿Dónde está el museo? Escribe: ___ the hospital", ["opposite"], "opposite."),
    ]),
    listening(3, "Listening · Repaso 3", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. My house is bigger than my cousin's. Turn left at the library. The museum is opposite the hospital.", []),

    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: next to, bigger, turn, library\n\nThe lamp is ___ (1) my bed. My house is ___ (2) than my cousin's. ___ (3) left at the corner. There's a big ___ (4) in my town.", [
      fb("(1)", ["next to"], "next to."),
      fb("(2)", ["bigger"], "bigger."),
      fb("(3)", ["Turn"], "Turn."),
      fb("(4)", ["library"], "library."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso casa, ciudad, comparativos", "Combina la casa, la ciudad, indicaciones y comparativos en frases habladas.", "Di 4 frases combinando lo repasado.", "combinar casa, ciudad, indicaciones, comparativos", "The lamp is next to my bed, There's a library, Turn left, My house is bigger"),

    SUMMARY("Resumen del Día 28", ["Repasamos la casa, la ciudad, indicaciones y comparativos."]),
    INFO("Tarea para el Día 29", "Repasa el vocabulario de hoy. Mañana: el cole, la hora y la rutina."),
  ],
};

// ───────────────────────── DÍA 29 ─────────────────────────
const DAY29 = {
  title: "Día 29 — Repaso: cole, hora, rutina, comida 🏫",
  description: "Repaso combinado de las Semanas 4 y 5.",
  pedagogy: {
    objective: "Combinar el cole, la hora, la rutina y la comida.",
    summary: "Repaso S4-S5; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Puedes describir tu día entero, con horas y comidas?"],
  },
  items: [
    TEXT("🏫 Hoy repasamos: asignaturas, la hora, la rutina, la comida y las compras."),
    GRAMMAR("Repaso: Semanas 4-5", "Maths, PE, o'clock, half past. gets up, goes, has (3ª persona).\nsome/any. I'd like... For breakfast/lunch/dinner."),
    deck("Movers S6D29 — Repaso 4-5", [
      ["Maths", "matemáticas", "My favourite subject.", "subject"],
      ["o'clock", "en punto", "Three o'clock.", "phrase"],
      ["gets up", "se levanta", "She gets up at seven.", "verb"],
      ["timetable", "horario", "My timetable.", "word"],
      ["some", "algo de", "There's some milk.", "word"],
      ["any", "algo de (neg/preg)", "Is there any bread?", "word"],
      ["I'd like", "me gustaría", "I'd like some apples.", "phrase"],
      ["breakfast", "desayuno", "For breakfast.", "meal"],
      ["dinner", "cena", "For dinner.", "meal"],
      ["healthy", "sano", "Healthy food.", "adjective"],
    ]),
    vocabEx("Repaso — cole, hora, rutina, comida 🏫", "Elige la opción correcta.", [
      mc("2+2=4 → ___", ["Maths", "PE"], 0, "Maths."),
      mc("3:00 = It's three ___.", ["o'clock", "half past"], 0, "o'clock."),
      mc("She ___ up at seven.", ["gets", "get"], 0, "gets."),
      mc("There's ___ milk.", ["some", "any"], 0, "some."),
      mc("I'd ___ some apples, please.", ["like", "want"], 0, "like."),
    ]),

    LISTENING_HEAD,
    listenScene("Escucha la escena completa y repasa", [
      mc("🎧 'My first lesson is Maths at nine. I get up at seven.' ¿A qué hora se levanta?", ["seven", "nine"], 0, "'get up at seven'."),
      mc("🎧 'There's some cheese, but there isn't any meat.' ¿Qué hay?", ["cheese", "meat"], 0, "'some cheese'."),
      mc("🎧 'For breakfast, I have toast. School starts at half past eight.' ¿A qué hora empieza el cole?", ["half past eight", "nine"], 0, "'starts at half past eight'."),
      mc("🎧 'I'd like some bread, please. How much is it?' ¿Qué pide?", ["bread", "cheese"], 0, "'some bread'."),
      mc("🎧 'She usually gets up early and has a healthy breakfast.' ¿Qué tipo de desayuno tiene?", ["healthy", "unhealthy"], 0, "'healthy breakfast'."),
    ]),
    listening(1, "Listening · Repaso 4-5", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. My first lesson is Maths at nine. I get up at seven. There's some cheese, but there isn't any meat. For breakfast, I have toast. School starts at half past eight. I'd like some bread, please. How much is it? She usually gets up early and has a healthy breakfast.", []),

    READING_HEAD,
    readWrite("Completa las palabras — repaso amplio", [
      fb("M_ths (matemáticas)", ["Maths"], "Maths."),
      fb("g_ts _p (se levanta)", ["gets up"], "gets up."),
      fb("br__kf_st (desayuno)", ["breakfast"], "breakfast."),
      fb("h_ w m_ch (cuánto)", ["how much"], "how much."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso cole, hora, rutina, comida", "Combina el cole, la hora, la rutina y la comida en frases habladas.", "Habla 2 minutos combinando temas variados.", "combinar cole, hora, rutina, comida", "My favourite subject is Maths, School starts at nine, I usually get up at seven, For breakfast I have toast"),

    SUMMARY("Resumen del Día 29", ["Repasamos el cole, la hora, la rutina y la comida."]),
    INFO("Tarea para el Día 30", "Repasa TODO. Mañana: ¡el gran repaso final de las primeras 6 semanas!"),
  ],
};

// ───────────────────────── DÍA 30 ─────────────────────────
const DAY30 = {
  title: "Día 30 — ¡Gran repaso! + sexta prueba 🌟🎉",
  description: "El repaso más grande de las Semanas 1-6. Sexta prueba de la semana.",
  pedagogy: {
    objective: "Repasar y consolidar toda la primera mitad del curso.",
    summary: "Gran repaso de las Semanas 1-6; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿De qué estás más orgulloso/a de haber aprendido en Movers hasta ahora?"],
  },
  items: [
    TEXT("🎉 ¡30 días de Movers! Has llegado a la mitad del curso. Hoy: ¡el gran repaso de TODO!"),
    GRAMMAR("Gran repaso — Semanas 1-6", "Presentación, familia, números, there is/are, aficiones, love/like/hate, mi semana, do/does, casa, ciudad, indicaciones, comparativos, cole, hora, rutina, comida, some/any y compras. ¡Has aprendido muchísimo!"),
    deck("Movers S6D30 — Gran repaso", [
      ["live", "vivir", "I live in Madrid.", "verb"],
      ["cousin", "primo/a", "My cousin.", "family"],
      ["love", "encantar", "I love swimming!", "verb"],
      ["bigger", "más grande", "Bigger than yours.", "adjective"],
      ["Maths", "matemáticas", "My favourite subject.", "subject"],
      ["o'clock", "en punto", "Three o'clock.", "phrase"],
      ["gets up", "se levanta", "She gets up early.", "verb"],
      ["some", "algo de", "There's some milk.", "word"],
      ["I'd like", "me gustaría", "I'd like some apples.", "phrase"],
      ["healthy", "sano", "Healthy food.", "adjective"],
    ]),
    vocabEx("¡Gran repaso! 🎉", "Elige la opción correcta.", [
      mc("Where do you ___? I live in Madrid.", ["live", "has got"], 0, "live."),
      mc("😍 I ___ swimming!", ["love", "hate"], 0, "love."),
      mc("My house is ___ than yours.", ["bigger", "smaller"], 0, "bigger."),
      mc("2+2=4 → ___", ["Maths", "PE"], 0, "Maths."),
      mc("She ___ up at seven.", ["gets", "get"], 0, "gets."),
      mc("There's ___ milk.", ["some", "any"], 0, "some."),
      mc("I'd ___ some apples, please.", ["like", "want"], 0, "like."),
      mc("For breakfast, I have ___.", ["toast", "soup"], 0, "toast."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa TODO", [
      mc("🎧 'I live in Madrid. My house is bigger than my cousin's.' ¿Qué compara?", ["las casas", "los primos"], 0, "'My house is bigger'."),
      mc("🎧 'I love swimming, but I hate homework — it's boring!' ¿Qué odia?", ["swimming", "homework"], 1, "'I hate homework'."),
      mc("🎧 'My first lesson is Maths, at nine o'clock.' ¿Qué asignatura y hora?", ["Maths, nine", "PE, ten"], 0, "'Maths… nine o'clock'."),
      mc("🎧 'There's some cheese, but I'd like some bread too.' ¿Qué pide además?", ["bread", "meat"], 0, "'I'd like some bread'."),
    ]),
    listening(1, "Listening · ¡El gran repaso!", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I live in Madrid. My house is bigger than my cousin's. I love swimming, but I hate homework — it's boring! My first lesson is Maths, at nine o'clock. There's some cheese, but I'd like some bread too.", []),

    READING_HEAD,
    readWrite("Completa las palabras — repaso final", [
      fb("l_v_ (vivir)", ["live"], "live."),
      fb("b_gg_r (más grande)", ["bigger"], "bigger."),
      fb("M_ths (matemáticas)", ["Maths"], "Maths."),
      fb("s_m_ (algo de)", ["some"], "some."),
      fb("I'd l_k_ (me gustaría)", ["like"], "like."),
      fb("h__lthy (sano)", ["healthy"], "healthy."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¡El gran repaso hablado final!", "Habla 3 minutos combinando TODO lo aprendido en Movers hasta ahora: presentación, familia, aficiones, casa, ciudad, cole, hora, rutina y comida.", "Habla combinando absolutamente todo el vocabulario del curso hasta ahora.", "combinar todo el vocabulario y estructuras del curso", "I live in..., My cousin has got..., I love swimming, My house is bigger than..., My favourite subject is Maths, I'd like some apples"),

    SUMMARY("Resumen de la Semana 6 — ¡30 días! 🎉", [
      "¡Impresionante! Has repasado TODO lo aprendido en las primeras 6 semanas de Movers.",
      "Ya vas por la mitad del curso.",
      "Ahora, tu sexta prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡los animales y la naturaleza!",
    ]),
    INFO("Prueba de la Semana 6 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Gran repaso · Semanas 1-5 combinadas",
  description: "Sexta semana de A1 Movers: repaso combinado de todo lo aprendido en las Semanas 1-5 (presentación, familia extendida, números, there is/are, aficiones, love/like/hate, mi semana, do/does, casa, ciudad, indicaciones, comparativos, cole, hora, rutina diaria, comida, some/any y compras). Día 30 cierra la mitad del curso con el gran repaso y la sexta prueba.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
