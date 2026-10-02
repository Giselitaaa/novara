/**
 * A2 Flyers · Semana 11 — "Escribir e hablar mejor ✍️ · Writing & Speaking focus".
 * Práctica dedicada a las partes de escritura (P6-P7) y Speaking más complejo.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY51 = {
  title: "Día 51 — Escritura guiada ✍️ · Guided writing (Parte 6)",
  description: "Práctica de la Parte 6 de Reading & Writing: escritura guiada a partir de pistas.",
  pedagogy: { objective: "Escribir frases completas a partir de pistas (20-30 palabras).", summary: "Writing P6 — escritura guiada; conectores básicos.", reviewPrompts: ["Describe una fiesta de cumpleaños usando pistas."] },
  items: [
    TEXT("✍️ En la Parte 6, miras unas pistas o dibujos y escribes frases completas."),
    GRAMMAR("Conectores para escritura guiada", "and, but, because, so, first, then, after that, finally.\nUsa estos conectores para unir tus ideas con naturalidad."),
    deck("Flyers S11D51 — Conectores de escritura", [
      ["and", "y", "I played and I ate cake.", "connector"],
      ["but", "pero", "It was fun, but tiring.", "connector"],
      ["because", "porque", "I was happy because I won.", "connector"],
      ["so", "así que", "It was raining, so we stayed inside.", "connector"],
      ["first", "primero", "First, we had breakfast.", "connector"],
      ["after that", "después de eso", "After that, we went to the park.", "connector"],
      ["finally", "finalmente", "Finally, we went home.", "connector"],
    ]),
    vocabEx("Conectores de escritura ✍️", "Elige la opción correcta.", [
      mc("It was raining, ___ we stayed inside. (así que)", ["so", "but"], 0, "so."),
      mc("I was happy ___ I won. (porque)", ["because", "and"], 0, "because."),
      mc("___, we went home. (finalmente)", ["Finally", "First"], 0, "Finally."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une las frases", [
      mc("🎧 'First we had breakfast, then we went to the park, and finally we had ice cream.' ¿Qué hicieron al final?", ["had ice cream", "had breakfast"], 0, "'finally we had ice cream'."),
      mc("🎧 'It was raining, so we stayed inside and played games.' ¿Por qué se quedaron dentro?", ["it was raining", "they were tired"], 0, "'It was raining, so...'"),
    ]),
    listening(1, "Listening · Ejemplos con conectores", "Escucha los ejemplos.", "Listen. First we had breakfast, then we went to the park, and finally we had ice cream. It was raining, so we stayed inside and played games.", []),
    READING_HEAD,
    readDefine("Encuentra el conector", [
      mc("Para dar una razón, usamos: ___", ["because", "finally"], 0, "because."),
      mc("Para indicar el último paso, usamos: ___", ["finally", "first"], 0, "finally."),
    ]),
    writeGuided("Mi fiesta de cumpleaños", "Pistas: birthday party — balloons — cake — games — friends. Escribe 3-4 frases completas usando estas pistas y al menos un conector.", 20, 30),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Contando mi fin de semana con conectores", "Practica hablar usando conectores.", "Cuenta tu último fin de semana usando first, then, after that, finally.", "usar conectores al hablar", "First..., then..., after that..., finally..."),
    SUMMARY("Resumen del Día 51", ["Puedes usar conectores (and, but, because, so, first, finally) para escribir frases completas."]),
    INFO("Tarea para el Día 52", "Mañana: escritura libre — una historia corta."),
  ],
};

const DAY52 = {
  title: "Día 52 — Mi historia corta 📖 · Short story writing (Parte 7)",
  description: "Práctica de la Parte 7 de Reading & Writing: historia corta o postal (25-35 palabras).",
  pedagogy: { objective: "Escribir una historia corta o postal.", summary: "Writing P7 — historia o postal corta.", reviewPrompts: ["Escribe una postal contando tus vacaciones."] },
  items: [
    TEXT("📖 En la Parte 7, escribes una pequeña historia o una postal usando tu imaginación."),
    GRAMMAR("Estructura de una historia corta", "Título/saludo. Dónde estás y qué pasó (pasado simple/continuo). Cómo te sentiste. Despedida.\nDear Sam, I'm having a great time! Yesterday, I went to the beach..."),
    deck("Flyers S11D52 — Escribir una postal", [
      ["dear", "querido/a (saludo)", "Dear Sam,", "word"],
      ["having a great time", "pasándolo genial", "I'm having a great time!", "phrase"],
      ["see you soon", "hasta pronto", "See you soon!", "phrase"],
      ["love", "con cariño (despedida)", "Love, Ana", "word"],
      ["postcard", "postal", "I'm writing a postcard.", "word"],
      ["yours", "tuyo/a (despedida)", "Yours, Tom", "word"],
    ]),
    vocabEx("Escribir una postal 📖", "Elige la opción correcta.", [
      mc("___ Sam, (saludo en una carta)", ["Dear", "Love"], 0, "Dear."),
      mc("I'm having a great ___! (tiempo)", ["time", "story"], 0, "time."),
      mc("___ soon! (hasta pronto)", ["See you", "Dear you"], 0, "See you."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe", [
      fb("🎧 'Dear Sam, I'm having a great time at the beach!' ¿Dónde está? Escribe: ___", ["beach"], "'at the beach'."),
      fb("🎧 'See you soon, love Ana.' ¿Cómo se despide? Escribe: ___", ["love"], "'love Ana'."),
    ]),
    listening(2, "Listening · Ejemplo de postal", "Escucha el ejemplo.", "Listen. Dear Sam, I'm having a great time at the beach! See you soon, love Ana.", []),
    READING_HEAD,
    readDialogue("Lee y elige el final correcto", [
      mc("Dear Tom, I'm having a great holiday. ___", ["See you soon, love Ana.", "Can I have the menu?"], 0, "despedida de postal."),
      mc("Yesterday I went to the zoo and saw a panda. ___", ["It was amazing!", "Dear Tom,"], 0, "cierre de historia."),
    ]),
    writeStory("Una postal de vacaciones", "Pistas: holiday — beach or mountains — weather — one fun activity. Escribe una postal corta (saludo, 2-3 frases sobre tus vacaciones, despedida).", 25, 35),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Contando mi historia en voz alta", "Practica contar tu historia o postal en voz alta.", "Lee en voz alta tu postal de vacaciones.", "contar una historia corta", "Dear..., I'm having a great time, See you soon"),
    SUMMARY("Resumen del Día 52", ["Puedes escribir una postal corta: saludo (Dear), 2-3 frases, despedida (Love/See you soon)."]),
    INFO("Tarea para el Día 53", "Mañana: comparar dos dibujos en detalle."),
  ],
};

const DAY53 = {
  title: "Día 53 — Comparando dibujos 🔍 · Describing and comparing pictures",
  description: "Práctica de Speaking: comparar dos dibujos con diferencias y semejanzas.",
  pedagogy: { objective: "Comparar dos dibujos con detalle.", summary: "Speaking: diferencias y semejanzas más elaboradas.", reviewPrompts: ["¿Cómo comparas dos dibujos parecidos?"] },
  items: [
    TEXT("🔍 In my picture... but in your picture... — comparando con detalle."),
    GRAMMAR("Comparar dibujos", "In my picture, the girl is wearing a red dress. In your picture, she's wearing a blue one.\nBoth pictures show a park, but in mine it's sunny and in yours it's raining."),
    deck("Flyers S11D53 — Comparar dibujos", [
      ["in my picture", "en mi dibujo", "In my picture, it's sunny.", "phrase"],
      ["in your picture", "en tu dibujo", "In your picture, it's raining.", "phrase"],
      ["both pictures", "ambos dibujos", "Both pictures show a park.", "phrase"],
      ["however", "sin embargo", "However, the colours are different.", "connector"],
      ["also", "también", "There's also a dog in my picture.", "word"],
      ["as well", "también (al final)", "There's a cat too, as well.", "phrase"],
    ]),
    vocabEx("Comparar dibujos 🔍", "Elige la opción correcta.", [
      mc("___ my picture, it's sunny. (en)", ["In", "At"], 0, "In my picture."),
      mc("___ pictures show a park. (ambos)", ["Both", "Also"], 0, "Both."),
      mc("There's ___ a dog in my picture. (también)", ["also", "however"], 0, "also."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la diferencia", [
      mc("🎧 'In my picture, the boy is wearing a red cap, but in your picture he's wearing a blue one.' ¿Cuál es la diferencia?", ["cap colour", "the boy's name"], 0, "'red cap... blue one'."),
      mc("🎧 'Both pictures show a park, but in mine it's sunny and in yours it's raining.' ¿Qué tienen en común?", ["both show a park", "both show rain"], 0, "'Both pictures show a park'."),
    ]),
    listening(3, "Listening · Ejemplos de comparación", "Escucha los ejemplos.", "Listen. In my picture, the boy is wearing a red cap, but in your picture he's wearing a blue one. Both pictures show a park, but in mine it's sunny and in yours it's raining.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "___ (1) my picture, the girl is reading a book. ___ (2) pictures show a classroom, ___ (3) in mine there are more students.", [
      mc("(1)", ["In", "At"], 0, "In my picture."),
      mc("(2)", ["Both", "Also"], 0, "Both pictures."),
      mc("(3)", ["but", "so"], 0, "but."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Comparando dos dibujos", "Practica comparar dos dibujos con diferencias y semejanzas.", "Describe 2 diferencias y 1 semejanza entre dos escenas imaginarias de un parque.", "comparar dibujos con detalle", "In my picture, In your picture, Both pictures"),
    SUMMARY("Resumen del Día 53", ["Puedes comparar dibujos con detalle: in my/your picture, both pictures, however, also."]),
    INFO("Tarea para el Día 54", "Mañana: preguntas personales más elaboradas."),
  ],
};

const DAY54 = {
  title: "Día 54 — Preguntas personales 🗨️ · Deeper personal questions",
  description: "Práctica de Speaking: preguntas personales más elaboradas con opinión.",
  pedagogy: { objective: "Responder preguntas personales con más detalle y opinión.", summary: "Speaking: preguntas personales elaboradas.", reviewPrompts: ["¿Qué opinas sobre tu colegio?"] },
  items: [
    TEXT("🗨️ What do you think about...? — preguntas más elaboradas."),
    GRAMMAR("Preguntas personales elaboradas", "What do you think about your school? Why do you like your hobby?\nWhat did you do last weekend, and how did you feel?"),
    deck("Flyers S11D54 — Preguntas elaboradas", [
      ["what do you think about", "¿qué opinas sobre?", "What do you think about school?", "phrase"],
      ["why do you like", "¿por qué te gusta?", "Why do you like football?", "phrase"],
      ["how did you feel", "¿cómo te sentiste?", "How did you feel after the match?", "phrase"],
      ["in my opinion", "en mi opinión", "In my opinion, it's fun.", "phrase"],
      ["I think that", "creo que", "I think that it's important.", "phrase"],
    ]),
    vocabEx("Preguntas elaboradas 🗨️", "Elige la opción correcta.", [
      mc("What do you think ___ school?", ["about", "for"], 0, "about."),
      mc("___ my opinion, it's fun. (en)", ["In", "At"], 0, "In."),
      mc("How did you ___ after the match? (sentiste)", ["feel", "think"], 0, "feel."),
    ]),
    LISTENING_HEAD,
    listenTrueFalse("Escucha y marca Verdadero/Falso", [
      mc("🎧 'In my opinion, school is important because I learn new things every day.' ¿Piensa que el colegio es importante?", ["Verdadero", "Falso"], 0, "'school is important'."),
      mc("🎧 'I felt really happy after winning the match.' ¿Se sintió triste después del partido?", ["Falso", "Verdadero"], 0, "'felt really happy', no triste."),
    ]),
    listening(4, "Listening · Ejemplos de preguntas elaboradas", "Escucha los ejemplos.", "Listen. In my opinion, school is important because I learn new things every day. I felt really happy after winning the match.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "In my opinion, my school is great because the teachers are kind and I have lots of friends. I think learning English is important for the future. Last weekend I played football and I felt very happy because we won.", [
      mc("He thinks English isn't important. ¿Está bien?", ["Falso", "Verdadero"], 0, "'learning English is important', no es lo contrario."),
      mc("He felt happy after the match. ¿Está bien?", ["Verdadero", "Falso"], 0, "'felt very happy because we won' — Verdadero."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis opiniones", "Responde preguntas personales con opinión.", "Responde: ¿qué opinas de tu colegio?, ¿por qué te gusta tu afición?, ¿cómo te sentiste la última vez que ganaste algo?", "responder con opinión elaborada", "In my opinion, I think that, I felt"),
    SUMMARY("Resumen del Día 54", ["Puedes responder preguntas personales elaboradas dando tu opinión."]),
    INFO("Tarea para el Día 55", "Mañana: ¡repaso y undécima prueba!"),
  ],
};

const DAY55 = {
  title: "Día 55 — Repaso de la semana + undécima prueba 🌟",
  description: "Repaso de escritura y Speaking avanzado. Undécima prueba.",
  pedagogy: { objective: "Repasar la Semana 11.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Escribe y cuenta una historia corta combinando todo lo practicado."] },
  items: [
    TEXT("🌟 ¡Undécima semana terminada! Repasamos escritura y Speaking avanzado."),
    GRAMMAR("Repaso de la Semana 11", "Conectores: because, so, finally. Dear/Love en postales. In my picture/both pictures. In my opinion."),
    deck("Flyers S11D55 — Repaso mixto", [
      ["because", "porque", "I was happy because I won.", "connector"],
      ["finally", "finalmente", "Finally, we went home.", "connector"],
      ["dear", "querido/a", "Dear Sam,", "word"],
      ["in my picture", "en mi dibujo", "In my picture, it's sunny.", "phrase"],
      ["both pictures", "ambos dibujos", "Both pictures show a park.", "phrase"],
      ["in my opinion", "en mi opinión", "In my opinion, it's fun.", "phrase"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("It was raining, ___ we stayed inside.", ["so", "but"], 0, "so."),
      mc("___ Sam, I'm having a great time!", ["Dear", "Love"], 0, "Dear."),
      mc("___ my picture, it's sunny.", ["In", "At"], 0, "In."),
      mc("___ my opinion, school is fun.", ["In", "At"], 0, "In."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'Dear Sam, I'm having a great time, the weather is sunny in my picture!' ¿Qué tipo de texto es?", ["a postcard", "a story about pictures"], 0, "'Dear Sam... having a great time' es formato de postal."),
      mc("🎧 'In my opinion, both pictures show a lovely park.' ¿Qué muestra en ambos dibujos?", ["a park", "a beach"], 0, "'both pictures show a lovely park'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 11", "Escucha y responde.", "Listen and look. Dear Sam, I'm having a great time, the weather is sunny in my picture! In my opinion, both pictures show a lovely park.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "___ (1) Sam, I'm having a great time! ___ (2) my opinion, this holiday is amazing, ___ (3) I don't want it to end.", [
      mc("(1)", ["Dear", "Love"], 0, "Dear."),
      mc("(2)", ["In", "At"], 0, "In my opinion."),
      mc("(3)", ["so", "but"], 0, "so."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina escritura y Speaking avanzado.", "Habla 1-2 minutos combinando conectores, descripción de dibujos y opiniones.", "combinar escritura y Speaking avanzado", "First, In my picture, In my opinion"),
    SUMMARY("Resumen de la Semana 11", ["¡Enhorabuena! Terminaste la Semana 11 de Flyers.", "Ahora, tu undécima prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡la recta final hacia tu simulacro Flyers!"]),
    INFO("Prueba de la Semana 11 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Escribir e hablar mejor · Writing & Speaking focus",
  description: "Undécima semana de A2 Flyers: práctica dedicada a las partes de escritura del examen (Writing P6 guiada, Writing P7 historia/postal), y Speaking más complejo (comparar dibujos con detalle, preguntas personales elaboradas con opinión).",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
