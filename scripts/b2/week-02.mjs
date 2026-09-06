/**
 * B2 First · Semana 2 — "El futuro y las ambiciones".
 * Gramática: todas las formas de futuro (will/going to/presentes), future
 * continuous y future perfect, oraciones temporales de futuro, futuro en el
 * pasado y grados de probabilidad. Cada día, las 4 destrezas (formato B2).
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, useCloze, openCloze, wordFormation, keyword, readingMC, gappedText, multipleMatching,
  writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const uoe = ({ p1, p2, p3, p4, p5, p6, p7 }) => [
  READING_HEAD,
  useCloze(p1.title, p1.text, p1.q),
  openCloze(p2.title, p2.text, p2.q),
  wordFormation(p3.title, p3.text, p3.items),
  keyword(p4.title, p4.items),
  readingMC(p5.title, p5.text, p5.q),
  gappedText(p6.title, p6.text, p6.options, p6.q),
  multipleMatching(p7.title, p7.text, p7.q),
];

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, in the future I hope to, what I'd really like is, the reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they might be … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 6 ─────────────────────────
const DAY6 = {
  title: "Día 6 — Formas de futuro · Las ambiciones",
  description: "will, going to, present continuous y present simple para el futuro. Vocabulario de ambiciones. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Elegir la forma de futuro adecuada según la intención.",
    summary: "Formas de futuro; ambiciones; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'I will meet him tomorrow' (cita fijada).", "'I'm going to be a doctor when I grow' + will.", "presente tras 'when' de futuro."],
    reviewPrompts: ["¿'will' o 'going to' para una decisión espontánea?", "¿Cómo hablas de una cita ya fijada?"],
  },
  items: [
    TEXT("🔁 Semana 2. Hoy las FORMAS DE FUTURO: cada una expresa una intención distinta. Vocabulario: las AMBICIONES y las METAS."),
    GRAMMAR("Formas de futuro", `· WILL: decisión espontánea, predicción, oferta/promesa, hecho futuro: I'll help you. It'll rain later. I'll be 30 next year.
· GOING TO: intención/plan pensado y predicción con evidencia: I'm going to study medicine. Look at those clouds — it's going to pour.
· PRESENT CONTINUOUS: cita/arreglo fijado (con otra persona, hora/lugar): I'm meeting the director at five. We're flying to Rome on Friday.
· PRESENT SIMPLE: horarios y programaciones: The train leaves at 8. The course starts in September.
· be about to + inf: a punto de: The film is about to start.
⚠️ Tras when, as soon as, until, before, after, if (de futuro) → PRESENTE, no 'will': I'll call you when I arrive.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I will meet him at 5 (cita fijada) → ✅ I'm meeting him at 5.\n· ❌ When I will finish → ✅ When I finish.\n· ❌ It's going to be Monday tomorrow → ✅ It'll be / it's Monday tomorrow (hecho).\n· 'going to' para planes; 'will' para decisiones del momento."),
    grammarEx("Use of English — Formas de futuro", "Completa o elige.", [
      mc("The phone's ringing. — OK, ___ answer it.", ["I'll", "I'm going to", "I answer"], 0, "decisión espontánea → will."),
      fb("I ___ ___ (study) engineering — I've already applied. (plan)", ["am going to study", "'m going to study"], "intención."),
      fb("We ___ (meet) the manager at 3pm tomorrow. (cita fijada)", ["are meeting", "'re meeting"], "present continuous."),
      fb("The train ___ (leave) at 9:15. (horario)", ["leaves"], "present simple."),
      mc("Choose:", ["I'll call you when I will arrive.", "I'll call you when I arrive.", "I call you when I arrive."], 1, "presente tras 'when'."),
      mc("Look at that ladder! He ___ fall!", ["will", "'s going to", "is"], 1, "evidencia → going to."),
      fb("Hurry — the film ___ ___ ___ (be about) start!", ["is about to"], "be about to + inf."),
    ]),
    GRAMMAR("Vocabulario del día — Las ambiciones", "Léxico de metas y ambición (B2)."),
    deck("B2 S2D6 — Las ambiciones", [
      ["set a goal", "fijarse una meta", "It helps to set a clear goal.", "colocación", "set ə ɡəʊl"],
      ["aspire to", "aspirar a", "She aspires to become a surgeon.", "colocación", "əˈspaɪə tu"],
      ["determined", "decidido/a", "He's determined to succeed.", "adjetivo", "dɪˈtɜːmɪnd"],
      ["fulfil a dream", "cumplir un sueño", "She finally fulfilled her dream.", "colocación", "fʊlˈfɪl ə driːm"],
      ["ambitious", "ambicioso/a", "It's an ambitious plan.", "adjetivo", "æmˈbɪʃəs"],
      ["realistic", "realista", "Be ambitious but realistic.", "adjetivo", "ˌrɪəˈlɪstɪk"],
      ["long-term", "a largo plazo", "Think about your long-term goals.", "adjetivo", "ˌlɒŋ ˈtɜːm"],
      ["give up on", "renunciar a", "Don't give up on your dreams.", "phrasal verb", "ɡɪv ˈʌp ɒn"],
      ["work towards", "trabajar por / hacia", "I'm working towards a promotion.", "colocación", "wɜːk təˈwɔːdz"],
      ["potential", "potencial", "She has enormous potential.", "sustantivo", "pəˈtenʃl"],
    ]),
    vocabEx("Vocabulario — Las ambiciones", "Elige la opción correcta.", [
      mc("To want to achieve something important is to ___ it.", ["aspire to", "give up on", "set"], 0, "aspire to."),
      mc("To make a dream come true is to ___ it.", ["fulfil", "aspire", "give up"], 0, "fulfil a dream."),
      mc("Goals far in the future are ___ goals.", ["long-term", "realistic", "ambitious"], 0, "long-term."),
      mc("The natural ability to succeed is ___.", ["potential", "goal", "dream"], 0, "potential."),
      mc("To keep working to reach a goal is to ___ it.", ["work towards", "give up on", "set"], 0, "work towards."),
      mc("Someone who won't stop until they succeed is ___.", ["determined", "realistic", "long-term"], 0, "determined."),
    ]),

    ...uoe({
      p1: {
        title: "Setting goals that work",
        text: "Every January, millions of people (1)___ ambitious goals for the year ahead, and by February most have quietly abandoned them. Psychologists who study motivation say the problem is rarely a (2)___ of willpower. More often, it is that the goals themselves are poorly (3)___. A goal like 'get fit' is too vague to be useful; the brain simply doesn't know where to (4)___. Far more effective is a specific, measurable target, broken down into small steps you can (5)___ towards day by day. It also helps to focus on the (6)___ you want to become, rather than just the outcome. Someone who aspires to (7)___ their dream of running a marathon is more likely to succeed if they think of themselves as 'a runner', not merely as someone hoping to (8)___ up one distant morning transformed.",
        q: [
          mc("(1)", ["set", "put", "make", "do"], 0, "'set goals'."),
          mc("(2)", ["lack", "loss", "miss", "want"], 0, "'a lack of willpower'."),
          mc("(3)", ["defined", "described", "designed", "decided"], 0, "'poorly defined'."),
          mc("(4)", ["begin", "start", "open", "launch"], 1, "'where to start'."),
          mc("(5)", ["work", "walk", "move", "go"], 0, "'work towards'."),
          mc("(6)", ["person", "people", "human", "figure"], 0, "'the person you want to become'."),
          mc("(7)", ["fulfil", "complete", "finish", "achieve"], 0, "'fulfil their dream'."),
          mc("(8)", ["wake", "get", "stand", "rise"], 0, "'wake up one morning'."),
        ],
      },
      p2: {
        title: "The trouble with 'follow your passion'",
        text: "'Follow your passion' is perhaps the most common piece of career advice given to young people, and yet many experts now believe it (1)___ be doing more harm than good. The problem is (2)___ it assumes we each have a single, pre-existing passion just waiting (3)___ be discovered. In reality, most people develop their interests gradually, (4)___ doing something and getting good at it. Passion, in other words, is often the (5)___ of mastery rather than the cause. This means that if you (6)___ still searching for your one true calling, you needn't panic. A more useful approach may be to pick something promising, commit to it, and (7)___ your skills. The passion, more often (8)___ not, will follow.",
        q: [
          fb("(1)", ["may", "might", "could"], "'it may be doing more harm'."),
          fb("(2)", ["that"], "'the problem is that'."),
          fb("(3)", ["to"], "'waiting to be discovered'."),
          fb("(4)", ["by"], "'by doing something' (medio)."),
          fb("(5)", ["result", "consequence", "product"], "'the result of mastery'."),
          fb("(6)", ["are", "'re"], "'if you are still searching'."),
          fb("(7)", ["develop", "build"], "'develop your skills'."),
          fb("(8)", ["than"], "'more often than not'."),
        ],
      },
      p3: {
        title: "The myth of the overnight success",
        text: "We love stories of (1)___ success — the unknown singer who becomes a star, the young founder whose company is worth billions. But such stories are almost always (2)___. Behind nearly every 'sudden' triumph lies years of quiet, (3)___ work that no one saw. The (4)___ of talent is greatly exaggerated; what really (5)___ the difference is persistence. Those who succeed are rarely the most gifted, but rather the most (6)___. They keep going long after others have given up, treating each failure not as a (7)___ verdict on their ability but as useful feedback. The (8)___ lesson is one of patience: real achievement is a marathon, not a sprint.",
        items: [
          { root: "night", accepted: ["overnight"], hint: "'overnight success'." },
          { root: "mislead", accepted: ["misleading"], hint: "adjetivo → misleading." },
          { root: "notice", accepted: ["unnoticed"], hint: "'work that went unnoticed' → unnoticed." },
          { root: "important", accepted: ["importance"], hint: "sustantivo → importance." },
          { root: "make", accepted: ["makes"], hint: "'what really makes the difference'." },
          { root: "determine", accepted: ["determined"], hint: "adjetivo → determined." },
          { root: "final", accepted: ["final"], hint: "'a final verdict' (adjetivo)." },
          { root: "true", accepted: ["truest"], hint: "superlativo → truest." },
        ],
      },
      p4: {
        title: "Transformaciones — futuro",
        items: [
          { s1: "I have arranged to see the doctor at four.", key: "SEEING", s2: "I ___ the doctor at four.", accepted: ["am seeing", "'m seeing"], explanation: "cita fijada → present continuous." },
          { s1: "My intention is to study abroad next year.", key: "GOING", s2: "I ___ abroad next year.", accepted: ["am going to study", "'m going to study"], explanation: "intención → going to." },
          { s1: "The concert's starting time is nine o'clock.", key: "STARTS", s2: "The concert ___ at nine o'clock.", accepted: ["starts"], explanation: "horario → present simple." },
          { s1: "I'll phone you after I finish work.", key: "WHEN", s2: "I'll phone you ___ work.", accepted: ["when I finish"], explanation: "presente tras 'when'." },
          { s1: "It's very likely to rain — the sky is dark.", key: "GOING", s2: "It ___ — the sky is dark.", accepted: ["is going to rain", "'s going to rain"], explanation: "evidencia → going to." },
          { s1: "The lesson is on the point of beginning.", key: "ABOUT", s2: "The lesson ___ begin.", accepted: ["is about to"], explanation: "be about to." },
        ],
      },
      p5: {
        title: "The child prodigy who chose ordinary life",
        text: "By the age of twelve, Lena Kovač was already a name whispered with awe in the world of classical music. She had performed with major orchestras across Europe, released a bestselling recording, and been hailed by critics as one of the most gifted young pianists of her generation. Then, at nineteen, at the very moment her international career was about to take off, she walked away from it all. She has never given a public concert since.\n\nWhen I met her, twenty years later, in the small town where she now teaches music to local children, I expected to find a woman haunted by regret, or at least defensive about her decision. Instead, I found someone strikingly at peace. 'People assume I must have burned out, or lost my nerve,' she told me, smiling. 'The truth is far simpler, and far less dramatic. I realised that I was living a life that other people had chosen for me. The applause was wonderful, but it was theirs, not mine.'\n\nWhat, I asked, did she not miss? She thought for a long moment. 'The stages, the travel, the sense of being special — all of it, sometimes,' she admitted. 'But I don't miss the fear. When you are told from the age of six that you are extraordinary, you live in terror of the day you turn out to be ordinary after all. Giving up the career meant giving up that fear. For the first time in my life, I was allowed to be good at something simply because I loved it.'\n\nShe now plays every day, she told me, but only for herself and her family, and occasionally for her students. 'They don't know I was famous,' she said, 'and I'd rather they never did. To them, I'm just their teacher, the one who shows them that music is a joy, not a competition. Honestly, teaching one shy child to love the piano gives me more satisfaction than a thousand standing ovations ever did.' She said this without a trace of false modesty, and I believed every word.",
        q: [
          mc("What did Lena do at nineteen?", ["Gave her greatest concert.", "Abandoned her international career.", "Released a recording.", "Started university."], 1, "'she walked away from it all'."),
          mc("What had the writer expected to find?", ["A happy woman.", "A woman full of regret or defensive.", "A famous star.", "A wealthy retiree."], 1, "'haunted by regret, or at least defensive'."),
          mc("Why did Lena really leave, according to her?", ["She burned out.", "She was living a life others had chosen for her.", "She lost her nerve.", "She had no talent."], 1, "'a life that other people had chosen for me'."),
          mc("What does she say she does NOT miss?", ["The travel.", "The fear of turning out ordinary.", "The applause.", "Being special."], 1, "'I don't miss the fear'."),
          mc("Why doesn't she want her students to know she was famous?", ["She's ashamed.", "She wants to be seen simply as their teacher.", "It's a secret contract.", "They wouldn't believe her."], 1, "'To them, I'm just their teacher'."),
          mc("Lena's attitude to her past could best be described as:", ["bitter", "calmly content", "boastful", "anxious"], 1, "'strikingly at peace'."),
        ],
      },
      p6: {
        title: "The interview that changed my life",
        text: "At twenty-three, I was convinced I knew exactly what my future would look like. (1)___ I had it all mapped out: a career in law, a certain salary by thirty, a particular kind of life.\n\nThe plan began to unravel during a single job interview. (2)___ The interviewer, an older woman with kind but penetrating eyes, listened to my confident answers and then asked a question no one had asked me before: 'But is any of this what you actually want?'\n\nI opened my mouth to give my prepared answer, and found that I couldn't. (3)___ For the first time, I heard my own ambitions as if from the outside, and realised that almost none of them were truly mine. They were my parents', my teachers', society's — everyone's but my own.\n\nI didn't get the job, and I have never been more grateful for a rejection. (4)___ That single question sent me back to the drawing board, forcing me to ask what I genuinely valued.\n\nIt took me two more years, and several false starts, to find my way. (5)___ The path I eventually chose looks nothing like the tidy plan I once clung to. (6)___ But it is mine, and that, I have come to believe, makes all the difference.",
        options: [
          "Nothing, I believed, could possibly go wrong.",             // A -> gap 1
          "It was meant to be a formality, another box ticked.",       // B -> gap 2
          "The words simply would not come.",                          // C -> gap 3
          "It set me free from a future I had never really chosen.",   // D -> gap 4
          "Along the way, I made every mistake imaginable.",           // E -> gap 5
          "It is messier, less secure and far more uncertain.",        // F -> gap 6
          "I got the job and my plan worked out perfectly.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: nada podía salir mal."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: iba a ser una formalidad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las palabras no salían."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: le liberó de un futuro no elegido."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: cometió todos los errores."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: más incierto, pero suyo."),
        ],
      },
      p7: {
        title: "Four people talk about their ambitions",
        text: "Read what four people say about their goals for the future.\n\nA) OMAR: I've always wanted to start my own business, but I'm in no rush. I'm going to spend the next few years learning everything I can while working for other people. When I finally launch something of my own, I want to be ready, not just enthusiastic. Preparation matters more than passion.\n\nB) TESSA: My dream is to travel the world, but I refuse to wait until I'm retired to do it. As soon as I've saved enough, I'm off. People tell me I'm being irresponsible, throwing away a good career, but I'd rather regret the things I did than the things I never dared to try.\n\nC) RAJ: Honestly, I used to feel enormous pressure to be 'ambitious', to want a big career and lots of money. It made me miserable. Now my only goal is a quiet, balanced life with enough time for my family and my hobbies. I've realised that's not a lack of ambition — it's just a different kind.\n\nD) INES: I know exactly what I want: to become a doctor and work in the poorest parts of the world. It's going to take years of study and a lot of sacrifice, and I'll probably never be rich. But I can't imagine doing anything else. Some goals are worth suffering for.",
        q: [
          mc("Who values careful preparation over enthusiasm?", ["A", "B", "C", "D"], 0, "Omar: 'Preparation matters more than passion'."),
          mc("Who refuses to postpone their dream until later in life?", ["A", "B", "C", "D"], 1, "Tessa: 'refuse to wait until I'm retired'."),
          mc("Who has redefined what ambition means to them?", ["A", "B", "C", "D"], 2, "Raj: 'a different kind' of ambition."),
          mc("Who is prepared to sacrifice wealth for their goal?", ["A", "B", "C", "D"], 3, "Ines: 'I'll probably never be rich'."),
          mc("Who has been criticised by others for their choice?", ["A", "B", "C", "D"], 1, "Tessa: 'People tell me I'm being irresponsible'."),
          mc("Who feels their goal is worth great difficulty?", ["A", "B", "C", "D"], 3, "Ines: 'Some goals are worth suffering for'."),
          mc("Who used to feel pressured to be more ambitious?", ["A", "B", "C", "D"], 2, "Raj: 'enormous pressure to be ambitious'."),
          mc("Who plans to gain experience before pursuing their goal?", ["A", "B", "C", "D"], 0, "Omar: 'learning everything I can while working for other people'."),
          mc("Who would rather take risks than have regrets?", ["A", "B", "C", "D"], 1, "Tessa: 'I'd rather regret the things I did'."),
          mc("Who prioritises balance and family over career success?", ["A", "B", "C", "D"], 2, "Raj: 'a quiet, balanced life… time for my family'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Young people today are under too much pressure to be successful.'\nComenta estos dos aspectos y añade uno propio:\n1. school (los estudios)\n2. social media (las redes sociales)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'My ambition for the future' — describe tu meta y cómo piensas lograrla.\n· CARTA de motivación a un programa de becas: explica tus objetivos y por qué mereces la beca.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Man: I've decided — I'm going to hand in my notice and start my own business. Two. Woman: The train leaves at 7:45, so we need to be at the station by half past. Three. Man: Don't worry about the bags, I'll carry them for you. Four. Woman: Look at those dark clouds — it's definitely going to pour. Five. Man: I'm meeting the careers advisor at two this afternoon. Six. Woman: By this time next year, I'll have finished my degree. Seven. Man: My only real goal is to have a healthy, balanced life — money's never interested me much. Eight. Woman: She's so determined; once she sets a goal, nothing can stop her.", [
      mc("1. What has the man decided?", ["To ask for a raise.", "To start his own business.", "To retire."], 1, "'start my own business'."),
      mc("2. Why must they be at the station by half past?", ["The train leaves at 7:45.", "To buy tickets.", "To meet someone."], 0, "'The train leaves at 7:45'."),
      mc("3. What is the man doing?", ["Complaining.", "Offering to help.", "Refusing."], 1, "'I'll carry them for you'."),
      mc("4. What does the woman predict?", ["Sunshine.", "Heavy rain.", "Snow."], 1, "'it's definitely going to pour'."),
      mc("5. What is the man's arrangement?", ["A job interview.", "A meeting with a careers advisor.", "A lesson."], 1, "'meeting the careers advisor at two'."),
      mc("6. What will be true in a year?", ["She'll start her degree.", "She'll have finished her degree.", "She'll change course."], 1, "'I'll have finished my degree'."),
      mc("7. What is the man's goal?", ["To be rich.", "A healthy, balanced life.", "Fame."], 1, "'a healthy, balanced life'."),
      mc("8. How is the woman described?", ["Lazy.", "Determined.", "Reluctant."], 1, "'so determined… nothing can stop her'."),
    ]),

    ...speakingParts({ p1: "cuáles son tus metas para los próximos años, qué te gustaría estudiar o hacer y por qué", p2: "dos jóvenes persiguiendo metas distintas (uno estudiando duro y otro emprendiendo): compáralas y di qué retos tienen", p3: "qué es más importante para lograr una meta (esfuerzo, talento, apoyo, suerte, planificación): comentadlo y elegid lo más decisivo", p4: "las ambiciones: si hay demasiada presión por triunfar, si el dinero es una buena meta y qué significa 'tener éxito'" }),

    SUMMARY("Resumen del Día 6", [
      "will (decisión/predicción), going to (plan/evidencia), present continuous (cita fijada), present simple (horario).",
      "Tras when/as soon as/until/before → presente, no 'will'.",
      "Vocabulario de ambiciones. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 7", "Escribe 4 frases de futuro (una de cada tipo) sobre tus planes. Repasa las flashcards. Mañana: future continuous y future perfect."),
  ],
};

// ───────────────────────── DÍA 7 ─────────────────────────
const DAY7 = {
  title: "Día 7 — Future continuous y future perfect · La tecnología",
  description: "will be doing / will have done. Vocabulario de tecnología. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Hablar de acciones en curso o ya terminadas en un momento futuro.",
    summary: "Future continuous/perfect; tecnología; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'I will be finish'.", "'By 2030 I will finish' (→ will have finished).", "'until' con future perfect."],
    reviewPrompts: ["¿'This time tomorrow I ___'?", "¿'By next year I ___ (finish)'?"],
  },
  items: [
    TEXT("🔁 Repaso: formas de futuro. Hoy el FUTURE CONTINUOUS y el FUTURE PERFECT. Vocabulario: la TECNOLOGÍA."),
    GRAMMAR("Future continuous y future perfect", `FUTURE CONTINUOUS (will be + -ing): acción EN CURSO en un momento futuro.
· This time tomorrow, I'll be flying to New York. Don't call at eight — we'll be having dinner.
También para futuros previsibles/de cortesía: Will you be using the car tonight?
FUTURE PERFECT (will have + participio): acción TERMINADA antes de un momento futuro.
· By 2030, technology will have changed our lives completely. I'll have finished by six.
FUTURE PERFECT CONTINUOUS (will have been + -ing): duración hasta un punto futuro.
· By June, I'll have been working here for ten years.
⚠️ Se usan con marcadores: this time tomorrow (continuous), by + tiempo / by the time (perfect).`),
    WARN("Errores típicos del hispanohablante", "· ❌ This time tomorrow I will fly → ✅ I'll be flying.\n· ❌ By 2030 I will finish → ✅ I will have finished.\n· ❌ will have finish → ✅ will have finished.\n· 'by' (para un límite) no 'until' con future perfect."),
    grammarEx("Use of English — Future continuous/perfect", "Completa o elige.", [
      fb("This time next week, I ___ ___ (lie) on a beach.", ["will be lying", "'ll be lying"], "future continuous."),
      fb("By the end of the year, they ___ ___ (build) the new bridge.", ["will have built", "'ll have built"], "future perfect."),
      mc("Choose:", ["Don't call at nine — we'll have dinner.", "Don't call at nine — we'll be having dinner.", "Don't call at nine — we have dinner."], 1, "en curso → future continuous."),
      fb("By June, I ___ ___ ___ (work) here for ten years.", ["will have been working", "'ll have been working"], "future perfect continuous."),
      mc("Choose:", ["By 2040, cars will drive themselves.", "By 2040, cars will have driving themselves.", "By 2040, cars will be drive themselves."], 0, "predicción → will (o will be driving)."),
      fb("Will you ___ ___ (use) your laptop later? (cortesía)", ["be using"], "future continuous de cortesía."),
      fb("By the time you arrive, I ___ ___ (finish) cooking.", ["will have finished", "'ll have finished"], "future perfect."),
    ]),
    GRAMMAR("Vocabulario del día — La tecnología", "Léxico de tecnología (B2)."),
    deck("B2 S2D7 — La tecnología", [
      ["artificial intelligence", "inteligencia artificial", "AI is transforming many jobs.", "colocación", "ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns"],
      ["cutting-edge", "de vanguardia / puntero", "It uses cutting-edge technology.", "adjetivo", "ˌkʌtɪŋ ˈedʒ"],
      ["device", "dispositivo", "The average person owns several devices.", "sustantivo", "dɪˈvaɪs"],
      ["automate", "automatizar", "Many tasks will be automated.", "verbo", "ˈɔːtəmeɪt"],
      ["breakthrough", "avance decisivo", "It's a major breakthrough in medicine.", "sustantivo", "ˈbreɪkθruː"],
      ["obsolete", "obsoleto/a", "This model is already obsolete.", "adjetivo", "ˈɒbsəliːt"],
      ["innovation", "innovación", "The company is known for innovation.", "sustantivo", "ˌɪnəˈveɪʃn"],
      ["user-friendly", "fácil de usar", "The app is very user-friendly.", "adjetivo", "ˌjuːzə ˈfrendli"],
      ["data", "datos", "Companies collect huge amounts of data.", "sustantivo", "ˈdeɪtə"],
      ["rely on", "depender de", "We rely on technology more than ever.", "phrasal verb", "rɪˈlaɪ ɒn"],
    ]),
    vocabEx("Vocabulario — La tecnología", "Elige la opción correcta.", [
      mc("The most modern, advanced technology is ___.", ["cutting-edge", "obsolete", "user-friendly"], 0, "cutting-edge."),
      mc("Technology that is out of date is ___.", ["obsolete", "cutting-edge", "innovative"], 0, "obsolete."),
      mc("To make a process run automatically is to ___ it.", ["automate", "rely on", "innovate"], 0, "automate."),
      mc("A product that's easy to use is ___.", ["user-friendly", "obsolete", "cutting-edge"], 0, "user-friendly."),
      mc("A major new development is a ___.", ["breakthrough", "device", "data"], 0, "breakthrough."),
      mc("To depend on something is to ___ it.", ["rely on", "automate", "innovate"], 0, "rely on."),
    ]),

    ...uoe({
      p1: {
        title: "Will robots take our jobs?",
        text: "Few questions provoke as much anxiety as whether machines will eventually (1)___ over our jobs. The honest answer is that some jobs will certainly disappear, just as they always (2)___ during periods of rapid technological change. What is harder to predict is what will (3)___ their place. History offers some comfort here: every previous wave of automation, from the power loom to the computer, ultimately created more work than it (4)___. The difference this time, some argue, is the sheer (5)___ of the change. Tasks once thought to require human judgement are now being (6)___ by artificial intelligence. Optimists counter that this will simply free us to focus on the (7)___ creative and human aspects of work. Whether they are right (8)___ largely on the choices we make now.",
        q: [
          mc("(1)", ["take", "get", "hold", "put"], 0, "'take over'."),
          mc("(2)", ["have", "did", "were", "had"], 0, "'as they always have'."),
          mc("(3)", ["take", "make", "get", "hold"], 0, "'take their place'."),
          mc("(4)", ["destroyed", "ruined", "broke", "lost"], 0, "'more work than it destroyed'."),
          mc("(5)", ["speed", "quick", "fast", "hurry"], 0, "'the sheer speed'."),
          mc("(6)", ["automated", "automatic", "automation", "automate"], 0, "'being automated'."),
          mc("(7)", ["more", "most", "much", "many"], 0, "'the more creative aspects'."),
          mc("(8)", ["depends", "relies", "counts", "rests"], 0, "'depends largely on'."),
        ],
      },
      p2: {
        title: "Living with our screens",
        text: "It is now almost impossible to imagine daily life (1)___ a smartphone. In little (2)___ than a decade, these devices have gone from luxury to necessity, reshaping how we work, shop and communicate. For all their benefits, however, they (3)___ raised serious concerns. Studies suggest that the average person now checks their phone well (4)___ a hundred times a day, often without any real reason. Many of us feel a low-level anxiety (5)___ we are separated from our devices, even briefly. The technology companies (6)___ products are designed to be addictive are, of course, in no hurry to solve the problem. It is (7)___ to us, then, to set our own limits. By this time next year, those who learn to (8)___ their screens will be living calmer, more focused lives.",
        q: [
          fb("(1)", ["without"], "'life without a smartphone'."),
          fb("(2)", ["more"], "'little more than a decade'."),
          fb("(3)", ["have"], "'they have raised concerns'."),
          fb("(4)", ["over"], "'well over a hundred times'."),
          fb("(5)", ["when", "if"], "'anxiety when we are separated'."),
          fb("(6)", ["whose"], "'companies whose products'."),
          fb("(7)", ["up", "down"], "'It is up to us' (o 'down to us')."),
          fb("(8)", ["control", "manage", "limit"], "'control their screens'."),
        ],
      },
      p3: {
        title: "The promise and peril of AI",
        text: "Artificial intelligence is arguably the most (1)___ technology of our age. Its (2)___ are already visible everywhere, from the recommendations on our screens to the (3)___ of serious diseases. Enthusiasts predict a future of (4)___ prosperity, in which machines handle drudgery and humans are freed for more meaningful work. Yet the same technology raises profound (5)___ questions. Who is responsible when an AI system makes a (6)___ decision? What happens to the millions whose jobs become (7)___? These are not problems for engineers alone; they demand the (8)___ of society as a whole.",
        items: [
          { root: "transform", accepted: ["transformative"], hint: "adjetivo → transformative." },
          { root: "apply", accepted: ["applications"], hint: "sustantivo plural → applications." },
          { root: "diagnose", accepted: ["diagnosis"], hint: "sustantivo → diagnosis." },
          { root: "precede", accepted: ["unprecedented"], hint: "'unprecedented prosperity'." },
          { root: "ethic", accepted: ["ethical"], hint: "adjetivo → ethical." },
          { root: "harm", accepted: ["harmful"], hint: "adjetivo → harmful." },
          { root: "obsolete", accepted: ["obsolete"], hint: "'become obsolete' (adjetivo)." },
          { root: "involve", accepted: ["involvement"], hint: "sustantivo → involvement." },
        ],
      },
      p4: {
        title: "Transformaciones — futuro perfecto/continuo",
        items: [
          { s1: "I'll finish the report before you get back.", key: "HAVE", s2: "I ___ the report by the time you get back.", accepted: ["will have finished", "'ll have finished"], explanation: "future perfect." },
          { s1: "At ten tomorrow, my exam will be in progress.", key: "TAKING", s2: "At ten tomorrow, I ___ my exam.", accepted: ["will be taking", "'ll be taking"], explanation: "future continuous." },
          { s1: "In June it will be exactly five years since I joined.", key: "WORKING", s2: "By June, I ___ here for five years.", accepted: ["will have been working", "'ll have been working"], explanation: "future perfect continuous." },
          { s1: "Don't phone at eight; I'll be in the shower then.", key: "HAVING", s2: "Don't phone at eight; I ___ a shower.", accepted: ["will be having", "'ll be having"], explanation: "future continuous." },
          { s1: "The builders will complete the house before winter.", key: "BEEN", s2: "By winter, the house ___ completed.", accepted: ["will have been"], explanation: "future perfect pasiva." },
          { s1: "Will you need the car this evening?", key: "USING", s2: "___ the car this evening?", accepted: ["Will you be using"], explanation: "future continuous de cortesía." },
        ],
      },
      p5: {
        title: "The village that turned off the internet",
        text: "When the residents of Alderton, a small village of some four hundred people, voted to switch off the local internet mast for one month as an experiment, the story made national news. Journalists arrived expecting to document a community in crisis, cut off from the modern world. What they found instead was rather more interesting.\n\nThe idea had come from a retired teacher named Margaret Hughes, who had grown alarmed by what she saw happening around her. 'Children who used to play in the street were glued to screens,' she recalled. 'Neighbours who had known each other for decades were communicating through a village Facebook group instead of knocking on doors. We had all this technology connecting us to the world, and somehow it was disconnecting us from each other.' Her proposal was simple, if radical: for thirty days, the village would go offline.\n\nThe first week, by all accounts, was difficult. People reported feeling anxious, bored, even a little lost without the constant hum of notifications. Teenagers were, predictably, furious. But then something began to shift. The village hall, usually empty, filled up in the evenings. An informal choir formed. Children rediscovered the woods behind the school. Old people who had felt increasingly isolated found neighbours dropping in to check on them, simply because there was no other way to stay in touch.\n\nNot everyone was convinced, and the experiment was not without its costs; several people who worked from home had to relocate temporarily. When the month ended and the mast was switched back on, however, the village made a collective decision that surprised even Margaret. They agreed to keep the internet, but to switch it off, deliberately, every Sunday. 'We're not against technology,' Margaret told me. 'We just decided that we, and not our devices, should be the ones deciding how we live.' It is, when you think about it, a decision the rest of us might do well to consider.",
        q: [
          mc("What did journalists expect to find in Alderton?", ["A happy community.", "A community in crisis.", "New technology.", "A festival."], 1, "'a community in crisis'."),
          mc("What had alarmed Margaret Hughes?", ["Crime.", "Technology disconnecting people from each other.", "Poverty.", "Bad weather."], 1, "'it was disconnecting us from each other'."),
          mc("How did people feel in the first week?", ["Delighted.", "Anxious, bored and lost.", "Indifferent.", "Angry only."], 1, "'anxious, bored, even a little lost'."),
          mc("What began to happen as the month went on?", ["People left the village.", "The community came together in new ways.", "Nothing changed.", "Crime rose."], 1, "'The village hall… filled up… An informal choir formed'."),
          mc("What did the village decide at the end?", ["To ban the internet forever.", "To keep it but switch it off every Sunday.", "To move away.", "To do nothing."], 1, "'switch it off… every Sunday'."),
          mc("Margaret's overall attitude to technology is that:", ["it should be banned", "people, not devices, should decide how we live", "it is entirely harmful", "it is entirely good"], 1, "'we… should be the ones deciding how we live'."),
        ],
      },
      p6: {
        title: "A day in the life of the future",
        text: "Predicting the future is a fool's game, as the history of failed predictions richly demonstrates. (1)___ And yet the temptation to imagine how we might live in fifty years' time is irresistible.\n\nSome forecasts seem safe enough. By the middle of the century, most experts agree, our cars will be driving themselves, and many of the diseases that terrify us today will have been cured. (2)___ Artificial intelligence, already woven invisibly into our daily lives, will be more capable and more widespread than we can currently imagine.\n\nWhat is far harder to predict is how these changes will make us feel. (3)___ Every previous technological revolution has brought not only convenience but also unexpected anxieties. The people of 1900 could not have foreseen the loneliness that mass car ownership would eventually create, nor how television would reshape family life.\n\nThe truth is that technology never simply solves problems; it trades old ones for new. (4)___ A world in which machines do all the work sounds like paradise, until you ask what people will do with themselves all day.\n\nPerhaps the wisest position is one of humble curiosity. (5)___ We should neither fear the future nor blindly worship it, but rather try to shape it thoughtfully. (6)___ After all, the future is not something that simply happens to us. It is something we are building, choice by choice, right now.",
        options: [
          "Confident experts have been spectacularly wrong before.",    // A -> gap 1
          "Other developments are simply beyond our imagination.",      // B -> gap 2
          "Human nature, unlike technology, changes very slowly.",      // C -> gap 3
          "Every solution seems to create its own set of difficulties.", // D -> gap 4
          "The one certainty is that we will be surprised.",            // E -> gap 5
          "That, in the end, is the most important lesson of all.",     // F -> gap 6
          "Nothing at all is likely to change in the coming decades.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: los expertos se han equivocado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: otros avances son inimaginables."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la naturaleza humana cambia despacio."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada solución crea problemas."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la única certeza es la sorpresa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa es la lección más importante."),
        ],
      },
      p7: {
        title: "Four people discuss technology in their lives",
        text: "Read what four people say about their relationship with technology.\n\nA) NOAH: I work in tech, so it might surprise people that I'm quite strict about it at home. My kids get an hour of screen time a day, no more. I've seen where unlimited access leads, and I want them to know how to be bored, how to be creative, how to just be. The irony isn't lost on me.\n\nB) FREYA: I couldn't do my job without technology — I run an online business entirely from my laptop, wherever I am in the world. People who complain about technology tend to be those who don't rely on it for their livelihood. For me, it's pure freedom. I'll take the odd notification over a nine-to-five office any day.\n\nC) SAM: What worries me most isn't the technology itself but the data. Every click, every search, every purchase is being recorded and sold. We've handed over the most intimate details of our lives in exchange for convenience, and I don't think we've begun to understand the consequences.\n\nD) LARA: Honestly, I love it all. I know I'm supposed to feel guilty about my screen time, but my phone connects me to friends across the world, teaches me new things every day, and entertains me endlessly. This nostalgia for a 'simpler time' baffles me. The past wasn't better; it was just slower.",
        q: [
          mc("Who limits technology use despite working in the industry?", ["A", "B", "C", "D"], 0, "Noah: 'I work in tech… quite strict about it at home'."),
          mc("Who sees technology as a source of personal freedom?", ["A", "B", "C", "D"], 1, "Freya: 'For me, it's pure freedom'."),
          mc("Who is most concerned about privacy and data?", ["A", "B", "C", "D"], 2, "Sam: 'What worries me most… is the data'."),
          mc("Who rejects the idea that the past was better?", ["A", "B", "C", "D"], 3, "Lara: 'The past wasn't better; it was just slower'."),
          mc("Who wants children to learn to cope with boredom?", ["A", "B", "C", "D"], 0, "Noah: 'know how to be bored'."),
          mc("Who depends completely on technology for their income?", ["A", "B", "C", "D"], 1, "Freya: 'run an online business entirely from my laptop'."),
          mc("Who feels we don't yet grasp the consequences of our choices?", ["A", "B", "C", "D"], 2, "Sam: 'I don't think we've begun to understand the consequences'."),
          mc("Who refuses to feel guilty about their screen time?", ["A", "B", "C", "D"], 3, "Lara: 'I'm supposed to feel guilty… baffles me'."),
          mc("Who suggests critics of technology often don't rely on it?", ["A", "B", "C", "D"], 1, "Freya: 'those who don't rely on it'."),
          mc("Who admits their own position is ironic?", ["A", "B", "C", "D"], 0, "Noah: 'The irony isn't lost on me'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Technology has done more to bring people together than to separate them.'\nComenta estos dos aspectos y añade uno propio:\n1. friendships (las amistades)\n2. family life (la vida familiar)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RESEÑA de una app o dispositivo que uses mucho: descríbelo, di qué te gusta y qué no, y si lo recomiendas.\n· ARTÍCULO: 'Life in 2075' — imagina cómo será la vida diaria dentro de 50 años (usa formas de futuro).", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un experto en tecnología, Daniel, hablando del futuro del trabajo (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a technology expert called Daniel giving a talk about the future of work. Daniel: Thank you all for coming. I want to begin by challenging a common fear: the idea that robots are simply going to take all our jobs. The reality is more complex. History shows that technology destroys some jobs but creates others — usually more than it removes. What will change is the kind of work we do. Routine tasks, whether in a factory or an office, are the most likely to be automated. What machines still cannot do well is anything requiring genuine creativity, emotional intelligence or complex human judgement. So my advice to young people is this: don't compete with machines at what they do best. Instead, develop the skills that make us human. The single most valuable ability in the future economy won't be coding, as many assume, but adaptability — the willingness to keep learning throughout your life. By 2040, experts estimate that the average worker will have changed careers not jobs, but entire careers, at least five times. That may sound frightening, but I see it as liberating. The one thing I'm certain of is that the safest career strategy is no longer to specialise narrowly, but to stay curious and flexible.", [
      fb("Daniel challenges the fear that robots will take all our ___.", ["jobs"], "'take all our jobs'."),
      fb("Technology usually creates ___ jobs than it removes.", ["more"], "'more than it removes'."),
      fb("___ tasks are the most likely to be automated.", ["Routine"], "'Routine tasks… automated'."),
      fb("Machines still cannot do work requiring genuine ___.", ["creativity"], "'genuine creativity'."),
      fb("The most valuable future skill is ___.", ["adaptability"], "'the single most valuable ability… adaptability'."),
      fb("By 2040, the average worker will have changed careers at least ___ times.", ["five", "5"], "'at least five times'."),
      fb("Daniel sees this constant change as ___ rather than frightening.", ["liberating"], "'I see it as liberating'."),
      fb("The safest strategy is to stay curious and ___.", ["flexible"], "'stay curious and flexible'."),
    ]),

    ...speakingParts({ p1: "qué tecnología usas cada día, cómo crees que será tu trabajo en el futuro y si te preocupa la IA", p2: "dos escenas de tecnología en el futuro (un aula con robots y una casa automatizada): compáralas y especula sobre sus ventajas", p3: "qué habilidades serán más útiles en el futuro (creatividad, adaptabilidad, tecnología, trabajo en equipo, idiomas): comentadlo y elegid la más importante", p4: "la tecnología y el futuro: si la IA quitará empleos, si dependemos demasiado de los dispositivos y cómo será la vida dentro de 50 años" }),

    SUMMARY("Resumen del Día 7", [
      "Future continuous (will be + -ing): acción en curso en el futuro. Future perfect (will have + participio): terminada antes de un momento futuro.",
      "Marcadores: this time tomorrow (continuous), by + tiempo (perfect).",
      "Vocabulario de tecnología. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 8", "Escribe 3 frases con future continuous y 3 con future perfect. Repasa las flashcards. Mañana: oraciones temporales de futuro y futuro en el pasado."),
  ],
};

// ───────────────────────── DÍA 8 ─────────────────────────
const DAY8 = {
  title: "Día 8 — Oraciones temporales y futuro en el pasado · Los viajes",
  description: "when/as soon as/until/by the time + presente; was going to / would. Vocabulario de viajes. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Enlazar acciones futuras y contar planes pasados que cambiaron.",
    summary: "Temporales de futuro + futuro en el pasado; los viajes; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'when I will arrive'.", "'until' + will.", "'I was going to travel but…'"],
    reviewPrompts: ["¿Qué tiempo tras 'as soon as' para el futuro?", "¿Cómo dices 'iba a hacerlo pero…'?"],
  },
  items: [
    TEXT("🔁 Repaso: futuros perfectos/continuos. Hoy las ORACIONES TEMPORALES de futuro y el FUTURO EN EL PASADO. Vocabulario: los VIAJES."),
    GRAMMAR("Oraciones temporales y futuro en el pasado", `TEMPORALES DE FUTURO: tras when, as soon as, until, before, after, by the time, once → PRESENTE (o present perfect), NUNCA 'will':
· I'll call you when I arrive. As soon as I've finished, I'll leave. Wait until the rain stops.
· by the time + presente/present perfect: By the time you read this, I'll have gone.
FUTURO EN EL PASADO (planes/predicciones vistos desde el pasado):
· was/were going to + inf: I was going to call you, but I forgot. (plan que no ocurrió)
· would + inf: I knew she would be late. (predicción desde el pasado)
· was about to + inf: I was about to leave when the phone rang.
⚠️ Diferencia: 'I was going to travel' (intención pasada, quizá no cumplida) vs 'I would travel' (predicción/costumbre).`),
    WARN("Errores típicos del hispanohablante", "· ❌ when I will arrive → ✅ when I arrive.\n· ❌ until the film will finish → ✅ until the film finishes.\n· ❌ I was going to travel, but I could not (mal orden) → ✅ …but I couldn't.\n· 'by the time' + presente para el futuro."),
    grammarEx("Use of English — Temporales y futuro en el pasado", "Completa o elige.", [
      mc("Choose:", ["I'll text you when I will land.", "I'll text you when I land.", "I'll text you when I landed."], 1, "presente tras 'when'."),
      fb("Wait here until the taxi ___ (arrive).", ["arrives"], "presente tras 'until'."),
      fb("By the time we ___ (get) to the airport, the flight had left. (pasado)", ["got"], "by the time + past simple (pasado)."),
      fb("I ___ ___ (go) to call you, but I ran out of time. (plan que no ocurrió)", ["was going to"], "was going to."),
      fb("I ___ ___ ___ (be about) leave when it started to rain.", ["was about to"], "was about to."),
      mc("Choose:", ["As soon as I'll get there, I'll ring.", "As soon as I get there, I'll ring.", "As soon as I got there, I'll ring."], 1, "presente tras 'as soon as'."),
      fb("She promised she ___ (help), and she did. (futuro en el pasado)", ["would help"], "would (predicción/promesa pasada)."),
    ]),
    GRAMMAR("Vocabulario del día — Los viajes", "Léxico de viajes (B2)."),
    deck("B2 S2D8 — Los viajes", [
      ["itinerary", "itinerario", "We planned a detailed itinerary.", "sustantivo", "aɪˈtɪnərəri"],
      ["off the beaten track", "fuera de las rutas turísticas", "We prefer places off the beaten track.", "expresión", "ɒf ðə ˈbiːtn træk"],
      ["get away from it all", "desconectar del todo", "I just want to get away from it all.", "expresión", "ɡet əˈweɪ frəm ɪt ɔːl"],
      ["breathtaking", "impresionante", "The views were breathtaking.", "adjetivo", "ˈbreθteɪkɪŋ"],
      ["culture shock", "choque cultural", "I experienced real culture shock.", "colocación", "ˈkʌltʃə ʃɒk"],
      ["set off", "ponerse en camino", "We set off at dawn.", "phrasal verb", "set ˈɒf"],
      ["stopover", "escala", "We had a stopover in Dubai.", "sustantivo", "ˈstɒpəʊvə"],
      ["backpacking", "viajar de mochilero", "They went backpacking around Asia.", "sustantivo", "ˈbækpækɪŋ"],
      ["broaden your horizons", "abrir la mente / los horizontes", "Travel broadens your horizons.", "expresión", "ˈbrɔːdn jɔː həˈraɪznz"],
      ["memorable", "memorable / inolvidable", "It was a memorable trip.", "adjetivo", "ˈmemərəbl"],
    ]),
    vocabEx("Vocabulario — Los viajes", "Elige la opción correcta.", [
      mc("A plan of your trip's route and stops is an ___.", ["itinerary", "stopover", "culture shock"], 0, "itinerary."),
      mc("Places away from the usual tourist routes are ___.", ["off the beaten track", "breathtaking", "memorable"], 0, "off the beaten track."),
      mc("A short stay between flights is a ___.", ["stopover", "itinerary", "backpacking"], 0, "stopover."),
      mc("Something extremely beautiful is ___.", ["breathtaking", "memorable", "off the beaten track"], 0, "breathtaking."),
      mc("The confused feeling in a very different culture is ___.", ["culture shock", "stopover", "itinerary"], 0, "culture shock."),
      mc("To make you understand the world more widely is to ___.", ["broaden your horizons", "set off", "get away"], 0, "broaden your horizons."),
    ]),

    ...uoe({
      p1: {
        title: "Why we travel",
        text: "The reasons people give for travelling are almost as varied (1)___ travellers themselves. Some are drawn by the (2)___ of famous sights; others prefer to get off the beaten (3)___ and discover places no guidebook mentions. For many, a holiday is simply a chance to get away (4)___ it all and recharge. Yet beneath these different motives lies something (5)___ universal. Travel, at its best, jolts us out of our routines and forces us to see the world — and ourselves — with fresh eyes. Experiencing a genuinely different culture, however briefly, (6)___ our horizons in a way that nothing else quite can. We return home not only with photographs, but with a (7)___ understanding that our own way of doing things is just one of countless (8)___.",
        q: [
          mc("(1)", ["as", "than", "like", "so"], 0, "'as varied as'."),
          mc("(2)", ["appeal", "attract", "attention", "call"], 0, "'the appeal of'."),
          mc("(3)", ["track", "road", "path", "way"], 0, "'off the beaten track'."),
          mc("(4)", ["from", "of", "with", "off"], 0, "'get away from it all'."),
          mc("(5)", ["almost", "hardly", "nearly", "quite"], 0, "'something almost universal'."),
          mc("(6)", ["broadens", "widens", "opens", "expands"], 0, "'broadens our horizons'."),
          mc("(7)", ["deeper", "lower", "higher", "wider"], 0, "'a deeper understanding'."),
          mc("(8)", ["possibilities", "chances", "options", "ways"], 0, "'one of countless possibilities'."),
        ],
      },
      p2: {
        title: "The trip I never took",
        text: "For years, I planned the trip of a lifetime. I was (1)___ to spend six months travelling across South America, a dream I had nursed since I was a teenager. I saved carefully, learned Spanish, and (2)___ the time I was thirty, I had almost enough money set aside. Then life, (3)___ it so often does, intervened. My father fell seriously ill, and I knew at once that I (4)___ not go. I cancelled everything and moved home to care for him. At the time, I felt as (5)___ my one great adventure had slipped away forever. Looking back now, however, I see it differently. The months I spent with my father before he died were, in (6)___ own quiet way, the most important journey I have ever taken. I still hope to see South America one day. But I have (7)___ learned that the richest experiences are not always the ones (8)___ we plan.",
        q: [
          fb("(1)", ["going"], "'I was going to spend'."),
          fb("(2)", ["by"], "'by the time'."),
          fb("(3)", ["as"], "'as it so often does'."),
          fb("(4)", ["could"], "'I could not go'."),
          fb("(5)", ["if", "though"], "'as if my adventure had slipped away'."),
          fb("(6)", ["their", "its"], "'in its own quiet way'."),
          fb("(7)", ["also", "since"], "'I have also/since learned'."),
          fb("(8)", ["that", "which"], "'the ones that we plan'."),
        ],
      },
      p3: {
        title: "The rise of slow travel",
        text: "In reaction to the frantic, box-ticking style of modern tourism, a growing number of travellers are embracing what has become known as 'slow travel'. The (1)___ is simple: instead of racing between famous sights, you stay longer in fewer places, allowing yourself to experience them more (2)___. Rather than photographing a cathedral and rushing on, you sit in a local café and watch daily life (3)___ around you. Advocates argue that this approach is not only more (4)___ — because it involves fewer flights — but also far more (5)___. A single afternoon spent in genuine conversation with local people can be more (6)___ than a whole week of guided tours. Slow travel asks us to trade (7)___ for depth, and in doing so it recovers something that mass tourism has largely (8)___: the simple joy of being somewhere else.",
        items: [
          { root: "propose", accepted: ["proposal"], hint: "sustantivo → proposal." },
          { root: "deep", accepted: ["deeply"], hint: "adverbio → deeply." },
          { root: "fold", accepted: ["unfold"], hint: "'watch life unfold' → unfold." },
          { root: "sustain", accepted: ["sustainable"], hint: "adjetivo → sustainable." },
          { root: "reward", accepted: ["rewarding"], hint: "adjetivo → rewarding." },
          { root: "memory", accepted: ["memorable"], hint: "adjetivo → memorable." },
          { root: "quantity", accepted: ["quantity"], hint: "'trade quantity for depth' (sustantivo)." },
          { root: "lose", accepted: ["lost"], hint: "'has largely lost' (participio)." },
        ],
      },
      p4: {
        title: "Transformaciones — temporales y futuro en el pasado",
        items: [
          { s1: "I'll leave after I've packed my bags.", key: "AS", s2: "I'll leave ___ I've packed my bags.", accepted: ["as soon as"], explanation: "as soon as + present perfect." },
          { s1: "Don't move until I tell you.", key: "SAY", s2: "Don't move until I ___.", accepted: ["say so"], explanation: "presente tras 'until'." },
          { s1: "My intention was to visit Japan, but the trip was cancelled.", key: "GOING", s2: "I ___ Japan, but the trip was cancelled.", accepted: ["was going to visit"], explanation: "was going to (plan no cumplido)." },
          { s1: "The plane will have departed before we reach the gate.", key: "TIME", s2: "By the ___ the gate, the plane will have departed.", accepted: ["time we reach"], explanation: "by the time + presente." },
          { s1: "I was on the point of leaving when she called.", key: "ABOUT", s2: "I ___ leave when she called.", accepted: ["was about to"], explanation: "was about to." },
          { s1: "She was certain that the flight would be delayed.", key: "SURE", s2: "She ___ the flight would be delayed.", accepted: ["was sure"], explanation: "futuro en el pasado con 'would'." },
        ],
      },
      p5: {
        title: "The wrong turn",
        text: "Some of the best things that ever happen to us begin as mistakes. I learned this on a solo trip through northern Spain, when a wrong turn on a mountain road led me, entirely by accident, to a village that does not appear on any map I have ever seen.\n\nI had been driving for hours, following an itinerary I had planned in obsessive detail back home. By late afternoon, tired and increasingly lost, I found myself on a narrow track that wound higher and higher into the hills. I was about to turn back when the road opened suddenly onto a tiny settlement of perhaps a dozen stone houses, clinging to the hillside as if they had grown there. There was no hotel, no restaurant, not even a shop.\n\nAs I stood by my car, uncertain what to do, an elderly woman emerged from one of the houses and, without a word of English or a moment's hesitation, beckoned me inside. What followed was one of the most memorable evenings of my life. Through a combination of my broken Spanish, her patience, and a great deal of laughter, I learned that she had lived in that village her entire life, that most of the young people had long since left for the cities, and that she was, that night, the only person under seventy for several miles. She fed me, gave me a bed, and refused, absolutely, to accept any payment.\n\nI have travelled to far more famous and spectacular places since. I have seen breathtaking cathedrals and world-famous ruins. But it is that nameless village, and that generous stranger, that I remember most vividly of all. The experience taught me a lesson I have never forgotten: that the most precious moments of any journey are almost never the ones on the itinerary. They are the ones that happen when your careful plans fall apart, and you are forced, at last, simply to trust the world.",
        q: [
          mc("How did the narrator find the village?", ["It was on his itinerary.", "By taking a wrong turn.", "A guidebook.", "A friend's advice."], 1, "'a wrong turn on a mountain road led me… by accident'."),
          mc("What had the narrator planned in detail?", ["Nothing.", "An obsessively detailed itinerary.", "A hotel booking.", "A guided tour."], 1, "'an itinerary I had planned in obsessive detail'."),
          mc("What was the village like?", ["A busy resort.", "Tiny, with no hotel, restaurant or shop.", "A large town.", "Abandoned."], 1, "'no hotel, no restaurant, not even a shop'."),
          mc("What did the elderly woman do?", ["Ignored him.", "Invited him in, fed him and gave him a bed.", "Charged him a lot.", "Called the police."], 1, "'beckoned me inside… fed me, gave me a bed'."),
          mc("What did the narrator learn from the experience?", ["To plan more carefully.", "The best moments happen when plans fall apart.", "To avoid villages.", "To carry money."], 1, "'the most precious moments… are almost never the ones on the itinerary'."),
          mc("The phrase 'clinging to the hillside as if they had grown there' suggests the houses looked:", ["modern and new", "as though they were a natural part of the landscape", "about to fall", "brightly painted"], 1, "como si hubieran crecido allí = parte natural del paisaje."),
        ],
      },
      p6: {
        title: "The gap year that lasted a decade",
        text: "Like many eighteen-year-olds, I planned to take a single 'gap year' before university: twelve months of travel, and then back to the sensible path of a degree and a career. (1)___ That, at least, was the plan.\n\nI set off with a backpack, a vague route and enough money to last, I calculated, exactly one year. (2)___ What I had not budgeted for was how completely travel would change me.\n\nSomewhere around the sixth month, teaching English in a small town in Thailand, I realised that I was happier than I had ever been. (3)___ The life I had been so sure I wanted — the degree, the office, the neat career ladder — suddenly seemed like someone else's dream, not mine.\n\nSo I stayed. One year became two, then five. (4)___ I taught, I travelled, I learned languages, and slowly I built a life utterly different from the one I had planned. My worried parents were convinced I was throwing my future away.\n\nA decade later, I run a small travel company that I love, employing a dozen people. (5)___ I did eventually get a qualification, but on my own terms and in my own time. (6)___ People still ask whether I regret not following the 'normal' path. My honest answer is that I never found it — and I have never once wished I had.",
        options: [
          "Everything after that would follow a familiar pattern.",     // A -> gap 1
          "I fully intended to return home on schedule.",               // B -> gap 2
          "For the first time, my life felt entirely my own.",          // C -> gap 3
          "Each time I meant to leave, a new reason to stay appeared.",  // D -> gap 4
          "None of it was part of any plan I had ever made.",           // E -> gap 5
          "Looking back, I understand their fear completely.",           // F -> gap 6
          "Within a month, I flew home and started my degree.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: todo seguiría un patrón conocido."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: pensaba volver a tiempo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: por primera vez su vida era suya."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: siempre aparecía un motivo para quedarse."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nada estaba planeado."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: entiende el miedo de sus padres."),
        ],
      },
      p7: {
        title: "Four people describe a memorable journey",
        text: "Read what four people say about a trip that stayed with them.\n\nA) YUKI: I'd always travelled in comfort — nice hotels, planned tours. Then a friend persuaded me to go backpacking, sleeping in hostels and carrying everything on my back. I hated the first week. But by the end, I'd made friends from a dozen countries and discovered I was far tougher than I'd thought. It completely changed how I see myself.\n\nB) CARLOS: The trip that meant most to me wasn't spectacular at all. I went back to the small village my grandparents had emigrated from, seventy years ago. Standing in the church where they were married, meeting distant cousins I never knew existed — I finally understood where I came from. Some journeys are into the past, not just across the map.\n\nC) NADIA: I went to India expecting breathtaking sights, and I got them. But what I hadn't expected was the culture shock. Everything — the noise, the crowds, the poverty right next to great beauty — overwhelmed me at first. It forced me to question so many things I'd always taken for granted about my own comfortable life.\n\nD) TOM: My most memorable trip was one I nearly didn't take. I was about to cancel because of work, but at the last minute I went anyway. On that trip I met the woman who is now my wife. It's a strange thought: if I'd made the 'sensible' choice and stayed home, my whole life would have been different.",
        q: [
          mc("Who discovered they were stronger than they realised?", ["A", "B", "C", "D"], 0, "Yuki: 'far tougher than I'd thought'."),
          mc("Who travelled to understand their family history?", ["A", "B", "C", "D"], 1, "Carlos: 'where my grandparents had emigrated from'."),
          mc("Who was overwhelmed by cultural differences?", ["A", "B", "C", "D"], 2, "Nadia: 'the culture shock… overwhelmed me'."),
          mc("Who almost cancelled a life-changing trip?", ["A", "B", "C", "D"], 3, "Tom: 'I was about to cancel… went anyway'."),
          mc("Who changed their usual style of travelling?", ["A", "B", "C", "D"], 0, "Yuki: 'always travelled in comfort… went backpacking'."),
          mc("Who met their future partner while travelling?", ["A", "B", "C", "D"], 3, "Tom: 'the woman who is now my wife'."),
          mc("Who was made to question their own privileged life?", ["A", "B", "C", "D"], 2, "Nadia: 'question so many things I'd always taken for granted'."),
          mc("Who describes a journey that was emotional rather than spectacular?", ["A", "B", "C", "D"], 1, "Carlos: 'wasn't spectacular at all'."),
          mc("Who made friends from many different countries?", ["A", "B", "C", "D"], 0, "Yuki: 'friends from a dozen countries'."),
          mc("Who reflects on how a small choice changed everything?", ["A", "B", "C", "D"], 3, "Tom: 'my whole life would have been different'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Travelling is the best way to learn about the world.'\nComenta estos dos aspectos y añade uno propio:\n1. other cultures (otras culturas)\n2. personal growth (el crecimiento personal)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO para una revista de viajes: 'The most memorable journey I've ever taken' — descríbelo y di por qué te marcó.\n· INFORME para un club de viajes sobre un destino que conoces: describe el lugar, las ventajas y desventajas y recomiéndalo o no.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de un viaje (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué aspecto del viaje destaca. Sobra una opción.\nA) meeting local people\nB) escaping from stress\nC) discovering their family roots\nD) overcoming a personal fear\nE) the beauty of the scenery\nF) experiencing culture shock", "This is Part Three. You will hear five people talking about a trip they took. Speaker One: I'd been working eighty-hour weeks for months, and I was completely burnt out. I didn't care where I went, as long as it had a beach and no wifi. Two weeks of doing absolutely nothing was exactly what I needed. Speaker Two: I've always been terrified of heights, so signing up for a trekking holiday in the mountains was, frankly, insane. But I did it, one terrifying step at a time, and standing at the top, I felt like I could achieve anything. Speaker Three: The landscapes took my breath away. Every single morning I'd wake up to mountains reflected in a perfectly still lake. I've never seen anything so beautiful in my life, and I doubt I ever will again. Speaker Four: What I remember most is the people. A family I'd never met invited me into their home, cooked for me, treated me like one of their own. I still write to them, years later. Speaker Five: I went to the country my mother left as a child. Meeting relatives, seeing the house where she grew up — it gave me a sense of belonging I'd never had before.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 1, "B: 'burnt out… doing absolutely nothing'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 3, "D: 'terrified of heights… I did it'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 4, "E: 'The landscapes took my breath away'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 0, "A: 'What I remember most is the people'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 2, "C: 'Meeting relatives… a sense of belonging'."),
    ]),

    ...speakingParts({ p1: "qué viajes has hecho, adónde te gustaría ir y qué tipo de viaje prefieres", p2: "dos formas de viajar (un resort de lujo y una ruta de mochilero): compáralas y di qué se gana con cada una", p3: "qué hace memorable un viaje (el paisaje, la gente, la aventura, la cultura, la comida): comentadlo y elegid lo más importante", p4: "los viajes: si de verdad nos cambian, si el turismo masivo estropea los lugares y si es mejor viajar solo o acompañado" }),

    SUMMARY("Resumen del Día 8", [
      "Tras when/as soon as/until/by the time (futuro) → presente. Nunca 'will'.",
      "Futuro en el pasado: was going to (plan no cumplido), would (predicción), was about to.",
      "Vocabulario de viajes. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 9", "Escribe 3 frases con oraciones temporales de futuro y 2 con 'was going to'. Repasa las flashcards. Mañana: probabilidad y expectativas."),
  ],
};

// ───────────────────────── DÍA 9 ─────────────────────────
const DAY9 = {
  title: "Día 9 — Probabilidad y expectativas · El éxito",
  description: "be likely/bound to, may/might/could, expect/hope/be due to. Vocabulario de éxito. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Expresar grados de probabilidad y expectativas sobre el futuro.",
    summary: "Probabilidad y expectativas; el éxito; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'is likely that + inf'.", "'bound to' mal usado.", "'I hope to won'."],
    reviewPrompts: ["¿'be likely to' + qué forma?", "¿'bound to' significa?"],
  },
  items: [
    TEXT("🔁 Repaso: temporales y futuro en el pasado. Hoy la PROBABILIDAD y las EXPECTATIVAS sobre el futuro. Vocabulario: el ÉXITO."),
    GRAMMAR("Probabilidad y expectativas", `GRADOS DE PROBABILIDAD (de más a menos seguro):
· is bound/certain/sure to + inf: casi seguro: She's bound to pass — she's brilliant.
· is likely to + inf / It's likely (that)…: probable: Prices are likely to rise. It's likely that they'll win.
· may / might / could + inf: posible: It may rain. They might arrive late.
· is unlikely to + inf: improbable: We're unlikely to finish today.
· There's no chance / It's out of the question: imposible.
EXPECTATIVAS:
· be due to + inf: previsto/programado: The train is due to arrive at six.
· be expected to + inf: se espera que: Sales are expected to fall.
· hope to + inf / hope (that) + will: I hope to see you. I hope you'll come.
⚠️ 'be likely/bound/due to' + INFINITIVO; 'It's likely THAT' + frase.`),
    WARN("Errores típicos del hispanohablante", "· ❌ It's likely to that they win → ✅ It's likely that they'll win / They're likely to win.\n· ❌ She's bound to passing → ✅ bound to pass.\n· ❌ I hope to will come → ✅ I hope to come / I hope I'll come.\n· 'be due to' = previsto para una hora concreta."),
    grammarEx("Use of English — Probabilidad y expectativas", "Completa o elige.", [
      fb("She studies so hard — she's ___ ___ (bound) pass.", ["bound to"], "bound to + inf."),
      fb("Prices are ___ ___ (likely) rise next year.", ["likely to"], "likely to + inf."),
      mc("Choose:", ["It's likely that they win.", "It's likely that they'll win.", "It's likely to that they win."], 1, "It's likely THAT + will."),
      fb("The train is ___ ___ (due) arrive at 6:15.", ["due to"], "be due to."),
      fb("We're ___ ___ (unlikely) finish this today.", ["unlikely to"], "unlikely to + inf."),
      mc("Choose:", ["I hope to see you soon.", "I hope to seeing you soon.", "I hope to will see you soon."], 0, "hope to + inf."),
      fb("Sales are ___ ___ (expect) fall this quarter.", ["expected to"], "be expected to."),
    ]),
    GRAMMAR("Vocabulario del día — El éxito", "Léxico de éxito y logro (B2)."),
    deck("B2 S2D9 — El éxito", [
      ["achieve", "lograr / conseguir", "She achieved all her goals.", "verbo", "əˈtʃiːv"],
      ["accomplishment", "logro", "It was a great accomplishment.", "sustantivo", "əˈkʌmplɪʃmənt"],
      ["thrive", "prosperar / crecer", "Some people thrive under pressure.", "verbo", "θraɪv"],
      ["overcome", "superar", "She overcame many obstacles.", "verbo", "ˌəʊvəˈkʌm"],
      ["setback", "revés / contratiempo", "Every setback taught me something.", "sustantivo", "ˈsetbæk"],
      ["resilient", "resiliente / con temple", "You need to be resilient to succeed.", "adjetivo", "rɪˈzɪliənt"],
      ["milestone", "hito", "Passing the exam was a milestone.", "sustantivo", "ˈmaɪlstəʊn"],
      ["pay off", "dar sus frutos", "All that effort finally paid off.", "phrasal verb", "peɪ ˈɒf"],
      ["outstanding", "sobresaliente", "Her results were outstanding.", "adjetivo", "aʊtˈstændɪŋ"],
      ["against the odds", "contra todo pronóstico", "They won against the odds.", "expresión", "əˈɡenst ði ˈɒdz"],
    ]),
    vocabEx("Vocabulario — El éxito", "Elige la opción correcta.", [
      mc("A temporary problem that stops progress is a ___.", ["setback", "milestone", "accomplishment"], 0, "setback."),
      mc("Able to recover quickly from difficulties is being ___.", ["resilient", "outstanding", "resilient"], 0, "resilient."),
      mc("When hard work finally succeeds, it ___.", ["pays off", "thrives", "overcomes"], 0, "pays off."),
      mc("An important point marking progress is a ___.", ["milestone", "setback", "odds"], 0, "milestone."),
      mc("Succeeding despite little chance is winning ___.", ["against the odds", "on the odds", "at the odds"], 0, "against the odds."),
      mc("To grow strong and successful is to ___.", ["thrive", "overcome", "achieve"], 0, "thrive."),
    ]),

    ...uoe({
      p1: {
        title: "What really leads to success?",
        text: "For decades, psychologists assumed that the key to (1)___ was raw talent or intelligence. More recent research paints a rather different (2)___. When scientists study people who reach the top of demanding fields, from sport to science, one quality stands (3)___ above all others: not talent, but the ability to keep going in the (4)___ of setbacks. This quality, sometimes called 'grit', combines passion with sheer persistence. Talented people who give up at the first (5)___ achieve far less than less gifted individuals who simply refuse to quit. The good news is that, unlike raw talent, resilience can be (6)___. Those who learn to treat failure not as a verdict but as feedback are far more (7)___ to succeed in the long run. In the end, it seems, success is less about the hand we are (8)___ than about how we choose to play it.",
        q: [
          mc("(1)", ["success", "succeed", "successful", "successfully"], 0, "sustantivo → success."),
          mc("(2)", ["picture", "photo", "image", "painting"], 0, "'paints a different picture'."),
          mc("(3)", ["out", "up", "off", "over"], 0, "'stands out'."),
          mc("(4)", ["face", "front", "sight", "view"], 0, "'in the face of setbacks'."),
          mc("(5)", ["setback", "backset", "downset", "offset"], 0, "'the first setback'."),
          mc("(6)", ["developed", "grown", "raised", "built"], 0, "'can be developed'."),
          mc("(7)", ["likely", "possible", "probable", "sure"], 0, "'far more likely to succeed'."),
          mc("(8)", ["dealt", "given", "handed", "offered"], 0, "'the hand we are dealt'."),
        ],
      },
      p2: {
        title: "The problem with the word 'talent'",
        text: "There is (1)___ wrong with praising a child for being 'talented' — or so it would seem. Yet research suggests that this (2)___ innocent word can do real harm. When children are told they are naturally gifted, they tend to become (3)___ of anything that might expose them as less brilliant than everyone believes. They avoid challenges, for (4)___ of failing, and give up quickly when things get hard. Children praised instead for their effort — for how hard they have worked — behave very (5)___. They embrace difficulty, because to them a challenge is not a threat but an opportunity to improve. Over time, this second group tends to achieve far (6)___. The lesson for parents and teachers is clear. If we (7)___ children to thrive, we should praise not the talent they were born (8)___, but the effort they choose to make.",
        q: [
          fb("(1)", ["nothing"], "'nothing wrong with'."),
          fb("(2)", ["seemingly"], "'this seemingly innocent word'."),
          fb("(3)", ["afraid", "frightened", "scared"], "'become afraid of'."),
          fb("(4)", ["fear"], "'for fear of failing'."),
          fb("(5)", ["differently"], "'behave very differently'."),
          fb("(6)", ["more"], "'achieve far more'."),
          fb("(7)", ["want"], "'if we want children to thrive'."),
          fb("(8)", ["with"], "'the talent they were born with'."),
        ],
      },
      p3: {
        title: "Learning from failure",
        text: "Few subjects are surrounded by as many myths as (1)___. We celebrate winners and quietly ignore the countless (2)___ that preceded their triumph. Yet almost every great (3)___, if you look closely, is built on a mountain of mistakes. The inventor Thomas Edison famously reframed his thousands of (4)___ attempts not as failures but as the (5)___ discovery of ways that did not work. What separates those who ultimately (6)___ from those who give up is not that the successful never fail; it is that they interpret failure differently. To them, a setback is not a (7)___ judgement on their worth, but simply useful (8)___ pointing the way forward. Seen like this, failure loses its terror and becomes, instead, the most valuable teacher we will ever have.",
        items: [
          { root: "succeed", accepted: ["success"], hint: "sustantivo → success." },
          { root: "fail", accepted: ["failures"], hint: "sustantivo plural → failures." },
          { root: "achieve", accepted: ["achievement"], hint: "sustantivo → achievement." },
          { root: "success", accepted: ["unsuccessful"], hint: "'unsuccessful attempts' → unsuccessful." },
          { root: "system", accepted: ["systematic"], hint: "adjetivo → systematic." },
          { root: "succeed", accepted: ["succeed"], hint: "verbo base → succeed." },
          { root: "final", accepted: ["final"], hint: "'a final judgement' (adjetivo)." },
          { root: "inform", accepted: ["information"], hint: "sustantivo → information." },
        ],
      },
      p4: {
        title: "Transformaciones — probabilidad",
        items: [
          { s1: "It's almost certain that she'll win.", key: "BOUND", s2: "She ___ win.", accepted: ["is bound to", "'s bound to"], explanation: "bound to + inf." },
          { s1: "There's a good chance that prices will rise.", key: "LIKELY", s2: "Prices ___ rise.", accepted: ["are likely to"], explanation: "likely to + inf." },
          { s1: "The plane's scheduled arrival is at nine.", key: "DUE", s2: "The plane ___ arrive at nine.", accepted: ["is due to", "'s due to"], explanation: "be due to." },
          { s1: "I don't think we'll finish on time.", key: "UNLIKELY", s2: "We ___ finish on time.", accepted: ["are unlikely to", "'re unlikely to"], explanation: "unlikely to." },
          { s1: "Perhaps he'll change his mind.", key: "MIGHT", s2: "He ___ his mind.", accepted: ["might change"], explanation: "might + inf." },
          { s1: "Experts predict that sales will fall.", key: "EXPECTED", s2: "Sales ___ fall.", accepted: ["are expected to"], explanation: "be expected to." },
        ],
      },
      p5: {
        title: "The overnight success who took twenty years",
        text: "When Ana Molina's first novel became an international bestseller, translated into thirty languages and adapted into an award-winning film, the press could not resist the story of the 'overnight success'. Here, apparently, was a woman who had come from nowhere, sat down one day, and effortlessly produced a masterpiece. Ana found the whole narrative not merely inaccurate but, as she put it, 'quietly insulting to everyone who has ever worked for anything'.\n\nThe truth was rather different. Before that celebrated novel, Ana had written four others, none of which had found a publisher. She had collected, by her own count, more than two hundred rejection letters over the course of two decades. For most of that time, she had supported herself through a series of jobs she disliked, writing in the early mornings before work and late into the night, sacrificing weekends and holidays that her friends spent relaxing. There had been long periods when she had been utterly convinced that she would never be published, and had continued writing anyway, out of a stubbornness she could not fully explain even to herself.\n\n'People love the idea of the overnight success,' she told an interviewer, 'because it lets them off the hook. If success is a matter of luck or magic, then there's no shame in not achieving it. But if it's a matter of turning up, day after day, for twenty years, when nobody is watching and nobody believes in you — well, that's a far more uncomfortable thought.' She paused. 'The most dangerous myth we tell young people is that talent is enough. It isn't. Talent is common. What is rare is the willingness to keep going long after the initial excitement has faded and the rejections have piled up.'\n\nAsked what advice she would give her younger self, Ana smiled. 'I'd tell her that every one of those rejections was necessary,' she said. 'Not one of them was wasted. The writer who wrote that bestseller could only exist because of the twenty years of apparent failure that came first. There are no shortcuts. There is only the work, and the stubborn refusal to stop.'",
        q: [
          mc("How did the press describe Ana Molina?", ["A hard worker.", "An 'overnight success' from nowhere.", "A failure.", "A lucky amateur."], 1, "'the story of the \"overnight success\"'."),
          mc("Why did Ana find this narrative insulting?", ["It was too flattering.", "It ignored everyone's hard work.", "It was about someone else.", "It was too negative."], 1, "'quietly insulting to everyone who has ever worked for anything'."),
          mc("How many rejection letters had Ana collected?", ["A dozen.", "More than two hundred, over two decades.", "None.", "A thousand."], 1, "'more than two hundred rejection letters over… two decades'."),
          mc("Why does Ana think people love the 'overnight success' idea?", ["It's true.", "It lets them off the hook if they don't succeed.", "It's inspiring.", "It's rare."], 1, "'it lets them off the hook'."),
          mc("According to Ana, what is rare?", ["Talent.", "The willingness to keep going after the excitement fades.", "Luck.", "Good ideas."], 1, "'What is rare is the willingness to keep going'."),
          mc("What would Ana tell her younger self about the rejections?", ["To give up.", "That every one was necessary and none was wasted.", "To write faster.", "To find another career."], 1, "'every one of those rejections was necessary… Not one… was wasted'."),
        ],
      },
      p6: {
        title: "The comeback",
        text: "At twenty-four, Marcus Bell was one of the most promising middle-distance runners in the country, widely tipped to compete at the highest level. (1)___ Then, in a single training session, everything changed: a torn tendon, and a doctor's verdict that he would never run competitively again.\n\nFor a long time, Marcus was lost. (2)___ Running had been not just his career but his entire identity, and without it he barely knew who he was. He fell into a deep depression, and for almost two years he did not run a single step.\n\nWhat pulled him out was, of all things, coaching. (3)___ A friend who ran a club for underprivileged children asked him, almost casually, to help out one afternoon. Marcus went reluctantly, expecting to hate it.\n\nInstead, he found a new purpose. (4)___ Watching a nervous, awkward child cross a finish line for the first time gave him a joy he had never felt even in his own greatest victories. Slowly, coaching became his life.\n\nToday, Marcus runs one of the most respected youth athletics programmes in the country. (5)___ Several of the young people he has trained have gone on to achieve exactly the success that was taken from him. (6)___ 'I lost the career I dreamed of,' he says, 'and found one I never imagined. I wouldn't change a thing.'",
        options: [
          "A glittering career seemed all but guaranteed.",             // A -> gap 1
          "The loss of his dream left a hole nothing could fill.",       // B -> gap 2
          "The suggestion came from an unexpected direction.",           // C -> gap 3
          "To his own surprise, he was completely hooked.",              // D -> gap 4
          "In a sense, he lives out his dream through them.",            // E -> gap 5
          "He has no regrets whatsoever.",                               // F -> gap 6
          "He made a full recovery and won every race.",                 // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: parecía tener el éxito garantizado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la pérdida dejó un vacío."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la propuesta vino de un lugar inesperado."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: se enganchó por completo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: vive su sueño a través de ellos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: no tiene ningún arrepentimiento."),
        ],
      },
      p7: {
        title: "Four people describe overcoming a setback",
        text: "Read what four people say about a time they overcame a difficulty.\n\nA) LEILA: I failed my final exams — completely, spectacularly. At the time it felt like the end of the world. But it forced me to ask whether I'd even chosen the right subject, and the answer was no. I retook the year studying something I actually loved, and I've never looked back. Sometimes failing at the wrong thing is the luckiest thing that can happen.\n\nB) JON: My business collapsed in my thirties, taking my savings with it. What got me through wasn't optimism — I felt anything but optimistic — it was simply refusing to stay down. I got up every morning and did one useful thing, however small. Bit by bit, I rebuilt. Resilience, I've learned, isn't a feeling; it's a decision you make each day.\n\nC) PRIYA: When I lost my job, my first instinct was shame — I didn't tell anyone for weeks. That was a mistake. The moment I finally opened up, help came from every direction. A former colleague knew of a vacancy; a friend reviewed my CV. I learned that pride is the enemy of recovery, and that asking for help is a strength, not a weakness.\n\nD) SAM: I was told at eighteen that I'd never walk properly again after my accident. The doctors were, in the end, wrong — but only because I was too stubborn to accept their verdict. I spent two years in rehabilitation, against all the odds. Every step I take now feels like a small victory that I earned.",
        q: [
          mc("Who discovered they had chosen the wrong path?", ["A", "B", "C", "D"], 0, "Leila: 'whether I'd chosen the right subject… no'."),
          mc("Who defines resilience as a daily decision, not a feeling?", ["A", "B", "C", "D"], 1, "Jon: 'Resilience… isn't a feeling; it's a decision'."),
          mc("Who learned the importance of asking for help?", ["A", "B", "C", "D"], 2, "Priya: 'asking for help is a strength'."),
          mc("Who proved a professional prediction wrong through determination?", ["A", "B", "C", "D"], 3, "Sam: 'The doctors were… wrong… too stubborn to accept'."),
          mc("Who initially felt ashamed of their setback?", ["A", "B", "C", "D"], 2, "Priya: 'my first instinct was shame'."),
          mc("Who rebuilt after losing money?", ["A", "B", "C", "D"], 1, "Jon: 'My business collapsed… I rebuilt'."),
          mc("Who now treasures small everyday achievements?", ["A", "B", "C", "D"], 3, "Sam: 'Every step… a small victory that I earned'."),
          mc("Who sees a failure as ultimately fortunate?", ["A", "B", "C", "D"], 0, "Leila: 'the luckiest thing that can happen'."),
          mc("Who got through hard times without feeling optimistic?", ["A", "B", "C", "D"], 1, "Jon: 'I felt anything but optimistic'."),
          mc("Who received unexpected support once they were open?", ["A", "B", "C", "D"], 2, "Priya: 'help came from every direction'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Failure is a more valuable teacher than success.'\nComenta estos dos aspectos y añade uno propio:\n1. learning (el aprendizaje)\n2. character (el carácter)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A time I overcame a setback' — cuenta qué pasó y qué aprendiste.\n· CARTA a un/a amigo/a que ha suspendido un examen importante y quiere rendirse: anímale y dale consejo.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una atleta paralímpica, Sara Nolan, sobre el éxito (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a Paralympic athlete, Sara Nolan. Interviewer: Sara, many people would call your career a huge success. Do you see it that way? Sara: Honestly, I try not to think in terms of success or failure at all. Those words put too much focus on results. I focus on the work, on getting a little better each day. Interviewer: You had a serious setback early in your career, didn't you? Sara: I did. I was dropped from the national team, and I was devastated. But looking back, it was the making of me. It forced me to train harder and smarter than I ever would have otherwise. Interviewer: What's the biggest myth about elite athletes? Sara: That we're born with some special gift. The truth is, talent gets you nowhere without years of boring, painful, repetitive work. Interviewer: How do you cope with pressure? Sara: I've learned to see nerves as excitement rather than fear. It's the same feeling in your body; you just choose what to call it. Interviewer: What advice would you give to young people? Sara: Don't fall in love with the medal; fall in love with the process. If you only care about winning, every setback will crush you. If you love the daily work, you'll keep going no matter what. Interviewer: And finally, what are you most proud of? Sara: Not the medals, actually. I'm most proud of the times I got up and trained when every part of me wanted to quit. Interviewer: A wonderful note to end on. Thank you, Sara.", [
      mc("1. How does Sara view her own career?", ["As a clear success.", "She avoids thinking in terms of success or failure.", "As a failure."], 1, "'I try not to think in terms of success or failure'."),
      mc("2. What does she say about her early setback?", ["It ended her career.", "It was 'the making of' her.", "It didn't matter."], 1, "'it was the making of me'."),
      mc("3. What is the biggest myth about elite athletes?", ["That they train hard.", "That they're born with a special gift.", "That they're lucky."], 1, "'That we're born with some special gift'."),
      mc("4. How does she cope with pressure?", ["She avoids it.", "She reinterprets nerves as excitement.", "She takes medication."], 1, "'see nerves as excitement rather than fear'."),
      mc("5. What advice does she give young people?", ["Only focus on winning.", "Fall in love with the process, not the medal.", "Give up if you fail."], 1, "'fall in love with the process'."),
      mc("6. What is Sara most proud of?", ["Her medals.", "Training when she wanted to quit.", "Her fame."], 1, "'the times I got up and trained when every part of me wanted to quit'."),
      mc("7. What does Sara say about talent?", ["It guarantees success.", "It gets you nowhere without years of hard work.", "It's the most important thing."], 1, "'talent gets you nowhere without years of… work'."),
    ]),

    ...speakingParts({ p1: "qué consideras un éxito en tu vida, cómo reaccionas ante los fracasos y qué meta te gustaría alcanzar", p2: "dos imágenes de éxito (alguien recibiendo un premio y alguien entrenando duro en soledad): compáralas y di cuál representa mejor el 'éxito'", p3: "qué hace falta para triunfar (esfuerzo, talento, resiliencia, apoyo, suerte): comentadlo y elegid lo más decisivo", p4: "el éxito y el fracaso: si aprendemos más de los fracasos, si el talento se sobrevalora y qué significa realmente 'tener éxito'" }),

    SUMMARY("Resumen del Día 9", [
      "Probabilidad: bound/certain to (casi seguro) > likely to > may/might/could > unlikely to.",
      "Expectativas: be due to (previsto), be expected to (se espera), hope to + inf.",
      "Vocabulario de éxito. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 10", "Escribe 4 frases con distintos grados de probabilidad. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 10 ─────────────────────────
const DAY10 = {
  title: "Día 10 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de las formas de futuro, la probabilidad y las expectativas. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 2.",
  pedagogy: {
    objective: "Consolidar el futuro y la probabilidad del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 3."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 2 del B2. Consolidas las formas de futuro, los futuros perfecto/continuo, las temporales y la probabilidad. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 2", `1) Formas de futuro: will/going to/present continuous/present simple.
2) Future continuous (will be doing) y future perfect (will have done).
3) Temporales de futuro (when/as soon as… + presente) y futuro en el pasado (was going to).
4) Probabilidad: bound/likely/unlikely to, may/might/could; be due/expected to.`),
    grammarEx("Use of English — Repaso mixto de la Semana 2", "Completa o elige.", [
      mc("The phone's ringing. — OK, ___ get it.", ["I'll", "I'm going to", "I get"], 0, "decisión → will."),
      fb("This time tomorrow, we ___ ___ (fly) to Rome.", ["will be flying", "'ll be flying"], "future continuous."),
      fb("By 2030, they ___ ___ (finish) the project.", ["will have finished", "'ll have finished"], "future perfect."),
      mc("Choose:", ["I'll call you when I will arrive.", "I'll call you when I arrive.", "I'll call you when I arrived."], 1, "presente tras 'when'."),
      fb("I ___ ___ (go) to phone you, but I forgot.", ["was going to"], "was going to."),
      fb("She's so talented — she's ___ ___ (bound) succeed.", ["bound to"], "bound to."),
      fb("Prices are ___ ___ (likely) rise.", ["likely to"], "likely to."),
      fb("The train is ___ ___ (due) leave at nine.", ["due to"], "be due to."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 2", "Repasa los mazos (ambiciones, tecnología, viajes, éxito)."),
    vocabEx("Vocabulario — Repaso de la Semana 2", "Elige la opción correcta.", [
      mc("To make a dream come true:", ["fulfil a dream", "aspire to", "give up on"], 0, "fulfil a dream."),
      mc("The most modern, advanced technology:", ["cutting-edge", "obsolete", "user-friendly"], 0, "cutting-edge."),
      mc("Places away from tourist routes:", ["off the beaten track", "breathtaking", "memorable"], 0, "off the beaten track."),
      mc("A temporary problem that stops progress:", ["setback", "milestone", "accomplishment"], 0, "setback."),
      mc("Goals far in the future:", ["long-term", "realistic", "ambitious"], 0, "long-term."),
      mc("To make a process run automatically:", ["automate", "rely on", "innovate"], 0, "automate."),
      mc("Something extremely beautiful:", ["breathtaking", "memorable", "obsolete"], 0, "breathtaking."),
      mc("When hard work finally succeeds:", ["it pays off", "it thrives", "it overcomes"], 0, "pays off."),
    ]),

    ...uoe({
      p1: {
        title: "The future of education",
        text: "Predicting how we (1)___ learn in the future is notoriously difficult, but a few trends seem (2)___ to continue. Technology is (3)___ to play an ever-larger role, with artificial intelligence increasingly able to tailor lessons to each individual student. Yet many experts caution that the human element will remain (4)___. However clever the software becomes, it is (5)___ to replace the encouragement of a good teacher who genuinely believes in a child. By the middle of the century, the traditional model — thirty children of the same age sitting in rows — may well have become (6)___. What is likely to (7)___ its place is far more flexible: learning that continues throughout life, mixing online and face-to-face, and valuing curiosity and adaptability above the mere (8)___ of facts.",
        q: [
          mc("(1)", ["will", "would", "shall", "should"], 0, "'how we will learn'."),
          mc("(2)", ["likely", "possible", "probable", "sure"], 0, "'seem likely to continue'."),
          mc("(3)", ["bound", "due", "certain", "sure"], 0, "'bound to play a larger role'."),
          mc("(4)", ["essential", "essence", "essentially", "essentials"], 0, "adjetivo → essential."),
          mc("(5)", ["unlikely", "unable", "impossible", "incapable"], 0, "'unlikely to replace'."),
          mc("(6)", ["obsolete", "outdated", "obsolete", "old"], 0, "'become obsolete'."),
          mc("(7)", ["take", "make", "get", "hold"], 0, "'take its place'."),
          mc("(8)", ["memorising", "memory", "memorisation", "remembering"], 2, "'the mere memorisation of facts'."),
        ],
      },
      p2: {
        title: "Why we fear change",
        text: "Human beings have a curious relationship (1)___ change. In the abstract, we claim to value it; in practice, we resist it fiercely. This is not, as it might seem, mere laziness. Our brains evolved (2)___ a world where the familiar was safe and the unknown potentially deadly, so a certain caution (3)___ built into us. The trouble is that this instinct, so useful to our ancestors, often holds us (4)___ today. We stay in jobs we dislike, in cities we have outgrown, simply because the (5)___ is frightening. And yet, when we look back on our lives, it is almost always the changes we were most (6)___ to make that we are most grateful for. The lesson, perhaps, is to treat the fear of change not (7)___ a stop sign but as a signpost, pointing (8)___ exactly the direction in which we most need to grow.",
        q: [
          fb("(1)", ["with"], "'relationship with change'."),
          fb("(2)", ["in", "for"], "'evolved in a world'."),
          fb("(3)", ["is"], "'a certain caution is built into us'."),
          fb("(4)", ["back"], "'holds us back'."),
          fb("(5)", ["unknown", "unfamiliar", "alternative"], "'the unknown is frightening'."),
          fb("(6)", ["reluctant", "afraid"], "'most reluctant to make'."),
          fb("(7)", ["as"], "'not as a stop sign'."),
          fb("(8)", ["towards", "to"], "'pointing towards… the direction'."),
        ],
      },
      p3: {
        title: "The generation that will change everything",
        text: "Every generation is told that it will (1)___ the world, and every generation, in its own way, does. The young people entering adulthood today face (2)___ that are genuinely new: a climate in crisis, technologies of astonishing power, and a pace of change that would have been (3)___ to their grandparents. It would be easy to be pessimistic on their (4)___. Yet there are strong (5)___ for hope. This is the best-educated, most globally connected generation in human history. They are, by every measure, more (6)___ of the world's problems and more determined to address them than those who came before. Whether they will (7)___ in solving the enormous challenges they have inherited remains, of course, uncertain. But if any generation is (8)___ to rise to the occasion, it may well be this one.",
        items: [
          { root: "change", accepted: ["change"], hint: "'will change the world' (verbo base)." },
          { root: "challenge", accepted: ["challenges"], hint: "sustantivo plural." },
          { root: "imagine", accepted: ["unimaginable"], hint: "'unimaginable to their grandparents'." },
          { root: "behalf", accepted: ["behalf"], hint: "'on their behalf' (sustantivo)." },
          { root: "reason", accepted: ["reasons"], hint: "sustantivo plural → reasons." },
          { root: "aware", accepted: ["aware"], hint: "'more aware of' (adjetivo)." },
          { root: "succeed", accepted: ["succeed"], hint: "verbo → succeed." },
          { root: "able", accepted: ["able"], hint: "'is able to rise' → able." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 2",
        items: [
          { s1: "My plan is to travel after I graduate.", key: "GOING", s2: "I ___ after I graduate.", accepted: ["am going to travel", "'m going to travel"], explanation: "intención → going to." },
          { s1: "This time next week, my exam will be in progress.", key: "SITTING", s2: "This time next week, I ___ my exam.", accepted: ["will be sitting", "'ll be sitting"], explanation: "future continuous." },
          { s1: "The report will be complete before the meeting.", key: "HAVE", s2: "I ___ the report by the time the meeting starts.", accepted: ["will have completed", "'ll have completed", "will have finished"], explanation: "future perfect." },
          { s1: "It's very probable that she'll accept the offer.", key: "LIKELY", s2: "She ___ accept the offer.", accepted: ["is likely to", "'s likely to"], explanation: "likely to." },
          { s1: "Don't leave before the guests arrive.", key: "UNTIL", s2: "Wait ___ arrive.", accepted: ["until the guests"], explanation: "presente tras 'until'." },
          { s1: "I was on the point of giving up when I succeeded.", key: "ABOUT", s2: "I ___ give up when I succeeded.", accepted: ["was about to"], explanation: "was about to." },
        ],
      },
      p5: {
        title: "The letter to my future self",
        text: "When I was seventeen, a teacher gave the class an unusual assignment: to write a letter to ourselves, to be opened in exactly ten years. I remember thinking the whole exercise was faintly ridiculous, but I wrote my letter anyway, sealed it, and promptly forgot all about it. Ten years later, almost to the day, it arrived in the post, forwarded by the school. I confess that I sat for a long time before I dared to open it.\n\nThe boy who had written that letter was, I quickly realised, both touchingly naive and startlingly wise. He had made a series of confident predictions about where he would be at twenty-seven, almost all of which had turned out to be spectacularly wrong. He was certain he would be a famous musician; in fact, I had not touched an instrument in years. He was sure he would have travelled the world; I had barely left the country. Reading these earnest forecasts, I felt a strange mixture of tenderness and embarrassment for my younger self.\n\nAnd yet, at the very end of the letter, past all the mistaken predictions, he had written something that stopped me cold. 'Whatever you end up doing,' the letter said, 'and wherever you end up living, I hope you have remembered the one thing that actually matters: to be kind, and to be honest, and not to waste your life chasing things that don't. If you have done that, then it doesn't matter if none of the rest came true.'\n\nI sat with the letter in my hands for a long while. My seventeen-year-old self had been wrong about almost every fact, and yet entirely right about the only thing that counted. It is a curious feeling, to be given wise advice by a child who happens to be yourself. I have kept the letter ever since, and on the days when I find myself measuring my life against the wrong things, I take it out and read it again.",
        q: [
          mc("What was the teacher's assignment?", ["To write a story.", "To write a letter to their future self.", "To predict the news.", "To keep a diary."], 1, "'a letter to ourselves, to be opened in exactly ten years'."),
          mc("What did the narrator think of the exercise at the time?", ["Inspiring.", "Faintly ridiculous.", "Too difficult.", "Important."], 1, "'the whole exercise was faintly ridiculous'."),
          mc("How accurate were the boy's predictions?", ["Completely accurate.", "Almost all spectacularly wrong.", "Half right.", "Deliberately false."], 1, "'almost all of which had turned out to be spectacularly wrong'."),
          mc("What did the end of the letter advise?", ["To become famous.", "To be kind and honest and not chase the wrong things.", "To travel more.", "To make money."], 1, "'to be kind, and to be honest…'"),
          mc("What was the narrator's reaction to the final message?", ["Amusement.", "It stopped him cold; he found it wise.", "Anger.", "Indifference."], 1, "'he had written something that stopped me cold'."),
          mc("What does the narrator do on difficult days?", ["Throws the letter away.", "Reads the letter again.", "Writes a new letter.", "Calls his teacher."], 1, "'I take it out and read it again'."),
        ],
      },
      p6: {
        title: "The plan that failed and the life that didn't",
        text: "For most of my twenties, I had a five-year plan, updated annually, laminated, and stuck to the fridge. (1)___ I believed, with the touching confidence of the young, that a good enough plan could guarantee a good enough life.\n\nLife, of course, had other ideas. (2)___ Within three years, not a single one of my carefully plotted milestones had been reached in the way, or the order, I had intended.\n\nAt first, each deviation from the plan felt like a failure. (3)___ I would lie awake calculating how far 'behind' I had fallen, as though life were a race with a fixed finishing line.\n\nThe change came slowly, through a series of the very detours I had once dreaded. (4)___ A job I took only out of desperation turned out to be the one I loved. A relationship I'd assumed was temporary became the centre of my life. None of it had been on the plan.\n\nI no longer make five-year plans. (5)___ I still set goals and work hard towards them, but I hold them lightly now, knowing that the best things are as likely to arrive by accident as by design. (6)___ Looking back, almost everything I am most grateful for came from a plan that failed.",
        options: [
          "It listed exactly where I would be at every stage.",         // A -> gap 1
          "Nothing unfolded remotely as I had expected.",               // B -> gap 2
          "The gap between plan and reality caused me real distress.",   // C -> gap 3
          "Each 'wrong turn' led somewhere better than the map ever could.", // D -> gap 4
          "Experience has taught me a gentler kind of ambition.",        // E -> gap 5
          "That, I've come to see, is not a tragedy but a gift.",        // F -> gap 6
          "Every part of my plan came true exactly as written.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: enumeraba cada etapa."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nada salió como esperaba."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la brecha le angustiaba."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada desvío llevaba a algo mejor."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: una ambición más suave."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: no es una tragedia sino un regalo."),
        ],
      },
      p7: {
        title: "Four people talk about their plans for the future",
        text: "Read what four people say about how they think about the future.\n\nA) DIANE: I'm a planner by nature. I have goals for one year, five years, ten years. People say I'm too rigid, but I disagree — a plan isn't a cage, it's a compass. Of course things change, and I adapt. But without a clear direction, I'd just drift. I'd rather aim and miss than never aim at all.\n\nB) FELIX: I used to plan obsessively, and it made me miserable, because reality never matched the plan. Now I've swung the other way: I make almost no long-term plans at all. I focus entirely on doing today well, and I trust that tomorrow will take care of itself. Strangely, I've achieved far more this way.\n\nC) AMARA: My approach is to have strong goals but hold them loosely. I know roughly where I'm heading, but I stay open to opportunities I couldn't have predicted. Some of the best things in my life arrived completely by chance. If I'd stuck rigidly to my original plan, I'd have missed them all.\n\nD) KOFI: Honestly, the future terrifies me, so I try not to think about it too much. There's so much I can't control — the economy, the climate, my own health. I've decided the only sensible response is to focus on what I can control: my effort, my attitude, how I treat people. The rest is out of my hands.",
        q: [
          mc("Who compares a plan to a compass rather than a cage?", ["A", "B", "C", "D"], 0, "Diane: 'a plan isn't a cage, it's a compass'."),
          mc("Who gave up long-term planning and feels better for it?", ["A", "B", "C", "D"], 1, "Felix: 'almost no long-term plans… achieved far more'."),
          mc("Who has strong goals but stays open to chance?", ["A", "B", "C", "D"], 2, "Amara: 'strong goals but hold them loosely'."),
          mc("Who copes with an uncertain future by focusing on what they can control?", ["A", "B", "C", "D"], 3, "Kofi: 'focus on what I can control'."),
          mc("Who would rather try and fail than never try?", ["A", "B", "C", "D"], 0, "Diane: 'I'd rather aim and miss than never aim at all'."),
          mc("Who found that obsessive planning made them unhappy?", ["A", "B", "C", "D"], 1, "Felix: 'it made me miserable'."),
          mc("Who values unexpected opportunities?", ["A", "B", "C", "D"], 2, "Amara: 'the best things… arrived completely by chance'."),
          mc("Who admits to being frightened by the future?", ["A", "B", "C", "D"], 3, "Kofi: 'the future terrifies me'."),
          mc("Who believes a lack of direction leads to drifting?", ["A", "B", "C", "D"], 0, "Diane: 'without a clear direction, I'd just drift'."),
          mc("Who concentrates on doing the present day well?", ["A", "B", "C", "D"], 1, "Felix: 'doing today well'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is better to plan for the future than to live for the present.'\nComenta estos dos aspectos y añade uno propio:\n1. security (la seguridad)\n2. happiness (la felicidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'My hopes and plans for the future' — describe tus metas y cómo piensas alcanzarlas.\n· RELATO que empiece con: 'I opened the letter I had written to myself ten years earlier.'", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: By the time I'm forty, I want to have started my own company — that's the plan, anyway. Two. Man: The train's due to leave at 9:15, but knowing this line, it'll probably be late. Three. Woman: I was going to apply for that job, but I missed the deadline. Four. Man: This time next month, we'll be lying on a beach in Greece. Five. Woman: She's so talented and hard-working — she's bound to get the promotion. Six. Man: I don't think we'll finish the project by Friday; it's very unlikely. Seven. Woman: I failed my driving test three times, but I refused to give up, and I passed in the end. Eight. Man: I've stopped making rigid plans. I just focus on today and trust the rest will follow.", [
      mc("1. What does the woman hope to have done by forty?", ["Retired.", "Started her own company.", "Travelled the world."], 1, "'started my own company'."),
      mc("2. What does the man expect of the train?", ["It'll be on time.", "It'll probably be late.", "It's cancelled."], 1, "'it'll probably be late'."),
      mc("3. Why didn't the woman apply for the job?", ["She didn't want it.", "She missed the deadline.", "She got another job."], 1, "'I missed the deadline'."),
      mc("4. Where will they be in a month?", ["At work.", "On a beach in Greece.", "At home."], 1, "'lying on a beach in Greece'."),
      mc("5. What does the man think will happen to her?", ["She'll be dismissed.", "She's bound to get the promotion.", "She'll leave."], 1, "'she's bound to get the promotion'."),
      mc("6. Will the project be finished by Friday?", ["Definitely.", "It's very unlikely.", "It's already done."], 1, "'it's very unlikely'."),
      mc("7. How did the woman finally pass her driving test?", ["First time.", "By refusing to give up.", "By luck."], 1, "'I refused to give up… I passed in the end'."),
      mc("8. What is the man's approach to the future?", ["Rigid planning.", "Focusing on today and trusting the rest.", "Ignoring it."], 1, "'I just focus on today'."),
    ]),

    ...speakingParts({ p1: "tus planes y esperanzas para el futuro, y si prefieres planificar o improvisar", p2: "dos actitudes ante el futuro (alguien planificando con detalle y alguien viviendo el presente): compáralas y di sus ventajas", p3: "qué es más importante para tener un buen futuro (una buena educación, ahorrar, correr riesgos, tener metas claras, adaptarse): comentadlo y elegid lo más importante", p4: "el futuro: si es mejor planificar o vivir el presente, si los jóvenes de hoy tienen razones para ser optimistas y cómo afrontar la incertidumbre" }),

    SUMMARY("Resumen de la Semana 2 (B2)", [
      "Dominas las formas de futuro, los futuros perfecto/continuo, las temporales y la probabilidad.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los condicionales (todos, incluidos los mixtos) y la inversión.",
    ]),
    INFO("Mini-simulacro de la Semana 2", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 3."),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "El futuro y las ambiciones",
  description: "Todas las formas de futuro, future perfect/continuous, oraciones temporales, futuro en el pasado y grados de probabilidad. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
