/**
 * B2 First · Semana 7 — "Gerundios, infinitivos y verbos con partícula".
 * Gramática: patrones verbales (gerundio vs infinitivo), verbos que cambian de
 * significado (remember/stop/try/go on/regret/mean), phrasal verbs (tipos y
 * frecuentes) y preposiciones dependientes + colocaciones.
 * Cada día, las 4 destrezas con el formato real del B2.
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, I enjoy, I've always wanted to, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they seem to enjoy … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 31 ─────────────────────────
const DAY31 = {
  title: "Día 31 — Gerundio vs infinitivo · El trabajo y la carrera",
  description: "Patrones verbales: verbo + gerundio / verbo + infinitivo. Vocabulario de trabajo. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Elegir gerundio o infinitivo tras cada verbo.",
    summary: "Gerundio vs infinitivo; el trabajo; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'enjoy to work'.", "'decide going'.", "'I look forward to see you'."],
    reviewPrompts: ["¿'enjoy' + qué forma?", "¿Tras preposición, qué forma?"],
  },
  items: [
    TEXT("🔁 Semana 7. Hoy los PATRONES VERBALES: cuándo va GERUNDIO (-ing) y cuándo INFINITIVO (to). Vocabulario: el TRABAJO y la CARRERA."),
    GRAMMAR("Gerundio vs infinitivo", `+ GERUNDIO (-ing): enjoy, avoid, mind, finish, keep, suggest, recommend, practise, consider, deny, admit, risk, imagine, involve, spend time, can't help, look forward to, be used to, be worth, feel like.
· I enjoy working. She avoided answering. It's worth trying. I'm used to getting up early.
+ INFINITIVO (to): want, need, decide, hope, plan, offer, refuse, promise, manage, afford, agree, expect, learn, pretend, seem, tend, fail, arrange.
· I decided to leave. She managed to finish. They agreed to help.
+ OBJETO + INFINITIVO: want/expect/ask/tell/advise/persuade/allow/force sb to do.
Tras PREPOSICIÓN siempre -ing: good at cooking, interested in learning, before leaving, look forward to seeing.
Tras 'to' como PREPOSICIÓN (look forward to, be used to, object to) → -ing, no infinitivo.`),
    WARN("Errores típicos del hispanohablante", "· ❌ enjoy to work → ✅ enjoy working.\n· ❌ decide going → ✅ decide to go.\n· ❌ I look forward to see you → ✅ to seeing you.\n· ❌ I'm used to get up early → ✅ used to getting up early."),
    grammarEx("Use of English — Gerundio vs infinitivo", "Completa con la forma correcta.", [
      fb("I really enjoy ___ (work) with children.", ["working"], "enjoy + -ing."),
      fb("She decided ___ ___ (change) careers.", ["to change"], "decide + to."),
      fb("It's worth ___ (apply) for that job.", ["applying"], "be worth + -ing."),
      fb("They managed ___ ___ (finish) the project on time.", ["to finish"], "manage + to."),
      fb("I'm looking forward to ___ (start) my new job.", ["starting"], "look forward to + -ing."),
      mc("Choose:", ["He avoided to answer the question.", "He avoided answering the question.", "He avoided answer the question."], 1, "avoid + -ing."),
      fb("She's used to ___ (deal) with difficult clients.", ["dealing"], "be used to + -ing."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo y la carrera", "Léxico de trabajo (B2)."),
    deck("B2 S7D31 — El trabajo", [
      ["apply for", "solicitar (un empleo)", "I applied for a management role.", "phrasal verb", "əˈplaɪ fə"],
      ["promotion", "ascenso", "She's up for promotion.", "sustantivo", "prəˈməʊʃn"],
      ["workload", "carga de trabajo", "My workload is enormous.", "sustantivo", "ˈwɜːkləʊd"],
      ["deadline", "fecha límite", "We're working to a tight deadline.", "sustantivo", "ˈdedlaɪn"],
      ["colleague", "compañero/a de trabajo", "My colleagues are supportive.", "sustantivo", "ˈkɒliːɡ"],
      ["get ahead", "prosperar / progresar", "You have to work hard to get ahead.", "phrasal verb", "ɡet əˈhed"],
      ["burnout", "agotamiento (laboral)", "Long hours can lead to burnout.", "sustantivo", "ˈbɜːnaʊt"],
      ["work-life balance", "equilibrio vida-trabajo", "I value a good work-life balance.", "colocación", "ˌwɜːk laɪf ˈbæləns"],
      ["self-employed", "autónomo/a", "She's been self-employed for years.", "adjetivo", "ˌself ɪmˈplɔɪd"],
      ["redundant", "despedido/a (por reducción)", "He was made redundant.", "adjetivo", "rɪˈdʌndənt"],
    ]),
    vocabEx("Vocabulario — El trabajo", "Elige la opción correcta.", [
      mc("The amount of work you have to do is your ___.", ["workload", "deadline", "promotion"], 0, "workload."),
      mc("Exhaustion caused by too much work is ___.", ["burnout", "workload", "promotion"], 0, "burnout."),
      mc("A move to a higher position at work is a ___.", ["promotion", "deadline", "colleague"], 0, "promotion."),
      mc("Someone who works for themselves is ___.", ["self-employed", "redundant", "colleague"], 0, "self-employed."),
      mc("To lose your job because it's no longer needed is to be made ___.", ["redundant", "self-employed", "promoted"], 0, "redundant."),
      mc("A healthy split between job and personal life is a good ___.", ["work-life balance", "workload", "deadline"], 0, "work-life balance."),
    ]),

    ...uoe({
      p1: {
        title: "The dream of the four-day week",
        text: "For decades, we have been promised that technology would allow us to work (1)___ and enjoy more leisure. Instead, many of us seem to be working harder than ever, struggling to (2)___ a healthy work-life balance. Recently, however, a radical idea has begun to gain (3)___: the four-day working week. In trials around the world, companies have allowed employees to work one day less while continuing to (4)___ them the same salary. The results have surprised almost everyone. Far from falling, productivity has often (5)___ the same or even improved, as better-rested workers concentrate more and waste less time. Employees, meanwhile, report feeling happier, healthier and far less likely to suffer (6)___. Critics point out that the model cannot easily be applied to every job, and they have a (7)___. But the trials suggest something important: that the way we have organised work for the last century may not be the (8)___ way, and that we have more freedom to change it than we tend to assume.",
        q: [
          mc("(1)", ["less", "fewer", "little", "lower"], 0, "'work less'."),
          mc("(2)", ["achieve", "reach", "get", "gain"], 0, "'achieve a healthy balance'."),
          mc("(3)", ["ground", "support", "power", "way"], 0, "'gain ground'."),
          mc("(4)", ["pay", "give", "offer", "earn"], 0, "'pay them the same salary'."),
          mc("(5)", ["stayed", "kept", "remained", "held"], 0, "'stayed the same'."),
          mc("(6)", ["burnout", "burnup", "burndown", "burning"], 0, "'suffer burnout'."),
          mc("(7)", ["point", "reason", "case", "argument"], 0, "'they have a point'."),
          mc("(8)", ["only", "single", "one", "sole"], 0, "'may not be the only way'."),
        ],
      },
      p2: {
        title: "Finding meaning in work",
        text: "We spend an enormous proportion of our lives (1)___ work, and yet many people report finding little meaning in what they do. This matters, because human beings need to feel (2)___ their efforts count for something. Interestingly, research suggests that the sense of meaning we get from a job has (3)___ to do with its status or salary. Some of the most highly paid professionals feel empty, (4)___ people in modest jobs often report a deep sense of purpose. What seems to make the difference is not the job itself but (5)___ we think about it. The hospital cleaner who sees (6)___ as helping sick people recover finds meaning that the one who sees themselves as merely mopping floors does not. This is genuinely liberating, because (7)___ we cannot always choose our work, we can very often choose the story we tell ourselves about (8)___. Meaning, it turns out, is not simply found; to a surprising degree, it is created.",
        q: [
          fb("(1)", ["at"], "'at work'."),
          fb("(2)", ["that"], "'feel that their efforts count'."),
          fb("(3)", ["little"], "'has little to do with'."),
          fb("(4)", ["while", "whereas"], "'empty, while people in modest jobs…'"),
          fb("(5)", ["how"], "'how we think about it'."),
          fb("(6)", ["themselves"], "reflexivo → themselves."),
          fb("(7)", ["although", "though", "while"], "'although we cannot always choose'."),
          fb("(8)", ["it"], "'the story we tell ourselves about it'."),
        ],
      },
      p3: {
        title: "The gig economy",
        text: "The so-called 'gig economy' — in which people work not as (1)___ employees but as independent contractors, taking on individual jobs or 'gigs' — has grown with astonishing (2)___. For its supporters, it represents a new era of (3)___ and independence, allowing people to be their own boss and to work when and where they choose. For its critics, however, it is a step (4)___, stripping workers of the hard-won protections and (5)___ that traditional employment provides. Both, in truth, have a point. The gig economy has undoubtedly created (6)___ for many, and some genuinely thrive on the freedom it offers. But for others, the reality is one of insecurity, unpredictable income and a complete lack of (7)___ such as sick pay or holidays. The (8)___ facing modern societies is how to preserve the flexibility that many workers value while restoring the basic security that all of them need.",
        items: [
          { root: "permanent", accepted: ["permanent"], hint: "'permanent employees' (adjetivo)." },
          { root: "speed", accepted: ["speed"], hint: "'astonishing speed' (sustantivo)." },
          { root: "free", accepted: ["freedom"], hint: "sustantivo → freedom." },
          { root: "back", accepted: ["backwards"], hint: "'a step backwards' → backwards." },
          { root: "secure", accepted: ["security"], hint: "sustantivo → security." },
          { root: "opportune", accepted: ["opportunities"], hint: "sustantivo plural → opportunities." },
          { root: "benefit", accepted: ["benefits"], hint: "sustantivo plural → benefits." },
          { root: "challenge", accepted: ["challenge"], hint: "'The challenge facing societies' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — gerundio/infinitivo",
        items: [
          { s1: "I'm really keen to start my new job.", key: "FORWARD", s2: "I'm ___ my new job.", accepted: ["looking forward to starting"], explanation: "look forward to + -ing." },
          { s1: "She finally succeeded in getting the promotion.", key: "MANAGED", s2: "She ___ the promotion.", accepted: ["managed to get"], explanation: "manage + to." },
          { s1: "It would be a good idea to apply early.", key: "WORTH", s2: "It's ___ early.", accepted: ["worth applying"], explanation: "be worth + -ing." },
          { s1: "He said he definitely wouldn't help us.", key: "REFUSED", s2: "He ___ us.", accepted: ["refused to help"], explanation: "refuse + to." },
          { s1: "I'm no longer surprised by early starts.", key: "USED", s2: "I ___ early.", accepted: ["am used to starting", "'m used to starting"], explanation: "be used to + -ing." },
          { s1: "She recommended that I take the job.", key: "RECOMMENDED", s2: "She ___ the job.", accepted: ["recommended taking"], explanation: "recommend + -ing." },
        ],
      },
      p5: {
        title: "The engineer who became a baker",
        text: "For fifteen years, David Chen was, by every external measure, a success. A senior engineer at a prestigious firm, he earned an excellent salary, commanded the respect of his colleagues, and could look forward to a comfortable and secure future. There was only one problem, one that he had spent years trying to ignore: he was profoundly, quietly miserable, and he had absolutely no idea why.\n\nThe unhappiness had crept up on him so gradually that he had barely noticed it. He was good at his job — better than good — and he enjoyed the intellectual challenge of solving complex problems. But somewhere along the way, work had become something to be endured rather than enjoyed, a source of stress rather than satisfaction. He found himself dreading Monday mornings, watching the clock, and feeling, at the end of each day, that he had spent his time on things that did not truly matter to him. He could not, however, bring himself to give up a career he had spent so long building.\n\nWhat finally changed things was, of all things, a hobby. To relax at weekends, David had taken up baking bread, and to his surprise, he found in it a satisfaction that his high-powered career had never provided. There was something about the physical, tangible nature of the work — the kneading, the waiting, the transformation of simple ingredients into something warm and nourishing — that spoke to a part of him his engineering job left untouched. Before long, he was rising at four in the morning to bake before work, and giving away his loaves to delighted colleagues.\n\nThe decision, when it finally came, terrified him. To give up a prestigious, well-paid career in order to open a small bakery seemed, to almost everyone who knew him, like madness. He took a significant cut in salary and status, and for the first two years he struggled to make ends meet. But he has never once regretted it. 'I spent fifteen years being successful at something that was slowly killing my spirit,' he says now. 'Now I earn less, I work harder, and I am, for the first time in my adult life, genuinely happy. It turns out that success, if it makes you miserable, isn't success at all. It's just a very well-paid kind of failure.'",
        q: [
          mc("What was David Chen's problem despite his outward success?", ["Low pay.", "He was quietly miserable.", "Poor health.", "No respect."], 1, "'he was profoundly, quietly miserable'."),
          mc("How had his unhappiness developed?", ["Suddenly.", "So gradually he barely noticed it.", "After a crisis.", "Overnight."], 1, "'crept up on him so gradually that he had barely noticed'."),
          mc("Why couldn't he leave his career?", ["He loved it.", "He'd spent so long building it.", "He needed the challenge.", "His family forbade it."], 1, "'a career he had spent so long building'."),
          mc("What changed things for David?", ["A promotion.", "A baking hobby.", "A holiday.", "A new boss."], 1, "'he had taken up baking bread'."),
          mc("How did people react to his decision?", ["With support.", "As if it were madness.", "With indifference.", "With envy."], 1, "'seemed… like madness'."),
          mc("What is David's redefinition of success?", ["Money and status.", "Success that makes you miserable is just well-paid failure.", "Working less.", "Fame."], 1, "'success, if it makes you miserable, isn't success at all… a very well-paid kind of failure'."),
        ],
      },
      p6: {
        title: "The end of the job for life",
        text: "For much of the twentieth century, the pattern of a working life was clear and stable. (1)___ A person would train for a profession, join a company, and expect to remain there, climbing steadily up the ladder, until they retired with a pension and a gold watch.\n\nThat world has vanished, probably for good. (2)___ Today's young workers can expect to change not just jobs but entire careers several times over the course of their working lives.\n\nThis transformation has been driven by many forces. (3)___ Technology renders old skills obsolete and creates new ones with bewildering speed, so that the knowledge acquired in one's twenties may be useless by one's forties.\n\nFor many, this new reality is a source of profound anxiety. (4)___ The security of the old model, whatever its limitations, offered a comforting sense of stability that the modern world of constant change cannot match.\n\nBut it would be wrong to see only the losses. (5)___ The rigid career-for-life could also be a kind of prison, trapping people in a single path chosen when they were barely adults. (6)___ The challenge for both individuals and societies is to build a new kind of security — one based not on staying in the same job forever, but on the ability to keep learning, adapting and reinventing oneself throughout a lifetime.",
        options: [
          "The idea of a single career for life was the norm.",           // A -> gap 1
          "The 'job for life' is now largely a thing of the past.",       // B -> gap 2
          "Chief among them is the relentless pace of technological change.", // C -> gap 3
          "The loss of predictability can feel deeply unsettling.",       // D -> gap 4
          "The new flexibility brings genuine opportunities too.",        // E -> gap 5
          "What we need now is a different kind of stability.",           // F -> gap 6
          "Nothing about the world of work has changed at all.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: una carrera para toda la vida era la norma."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el 'trabajo para toda la vida' es cosa del pasado."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el ritmo del cambio tecnológico."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la pérdida de previsibilidad inquieta."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la flexibilidad trae oportunidades."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: necesitamos otra estabilidad."),
        ],
      },
      p7: {
        title: "Four people talk about their working lives",
        text: "Read what four people say about their relationship with work.\n\nA) NADIA: I gave up a high-flying corporate career to become self-employed, and I've never looked back. Yes, the income is unpredictable, and yes, I work harder than ever. But I answer to no one, I choose my own projects, and I finally feel that my work is mine. For me, freedom is worth any amount of insecurity.\n\nB) TOM: Honestly, I don't understand people who want to 'find meaning' in their jobs. Work, for me, is simply how I pay for the life I actually care about, which happens outside working hours. I do my job well, I get paid, and I go home. My life's meaning is my family and my hobbies, not my career.\n\nC) PRIYA: I love my work, and I make no apology for being ambitious. I want to get to the top, and I'm prepared to work incredibly hard to do it. People warn me about burnout, but I thrive on pressure. I'd be far more miserable coasting along than pushing myself to achieve something significant.\n\nD) SAM: I burned out badly in my thirties — collapsed, basically, from overwork and stress. It forced me to completely rethink my priorities. Now I guard my work-life balance fiercely. I'm probably less 'successful' by conventional standards, but I'm healthy and present for my family, and I'll take that over any promotion.",
        q: [
          mc("Who values professional freedom above security?", ["A", "B", "C", "D"], 0, "Nadia: 'freedom is worth any amount of insecurity'."),
          mc("Who sees work purely as a means to fund life outside it?", ["A", "B", "C", "D"], 1, "Tom: 'how I pay for the life I actually care about'."),
          mc("Who is unashamedly ambitious and thrives on pressure?", ["A", "B", "C", "D"], 2, "Priya: 'I thrive on pressure'."),
          mc("Who reprioritised their life after burning out?", ["A", "B", "C", "D"], 3, "Sam: 'I burned out badly… rethink my priorities'."),
          mc("Who left a corporate job to be self-employed?", ["A", "B", "C", "D"], 0, "Nadia: 'gave up a high-flying corporate career'."),
          mc("Who finds meaning in family and hobbies, not work?", ["A", "B", "C", "D"], 1, "Tom: 'My life's meaning is my family and my hobbies'."),
          mc("Who would rather push themselves than coast along?", ["A", "B", "C", "D"], 2, "Priya: 'more miserable coasting along'."),
          mc("Who now guards their work-life balance fiercely?", ["A", "B", "C", "D"], 3, "Sam: 'guard my work-life balance fiercely'."),
          mc("Who accepts unpredictable income for independence?", ["A", "B", "C", "D"], 0, "Nadia: 'the income is unpredictable… answer to no one'."),
          mc("Who prefers being healthy and present to being promoted?", ["A", "B", "C", "D"], 3, "Sam: 'I'll take that over any promotion'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'A good work-life balance is more important than a successful career.'\nComenta estos dos aspectos y añade uno propio:\n1. health (la salud)\n2. money (el dinero)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· CARTA de motivación para un empleo: explica por qué quieres el puesto y qué puedes aportar.\n· ARTÍCULO: 'What makes a job worth doing?' — analiza qué hace que un trabajo tenga sentido.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: I've decided to apply for the manager's job — wish me luck! Two. Man: I love being self-employed; I'd hate to go back to working for someone else. Three. Woman: My workload's become impossible; I'm on the verge of burnout. Four. Man: I'm really looking forward to starting my new role next month. Five. Woman: They made half the department redundant, and I was one of them. Six. Man: For me, a good work-life balance matters far more than a big salary. Seven. Woman: I've finally managed to finish that report that was due yesterday. Eight. Man: She got promoted after only a year — she thoroughly deserved it.", [
      mc("1. What has the woman decided to do?", ["Quit.", "Apply for the manager's job.", "Retire."], 1, "'apply for the manager's job'."),
      mc("2. What does the man love?", ["Working in a team.", "Being self-employed.", "His salary."], 1, "'I love being self-employed'."),
      mc("3. What is the woman close to?", ["A promotion.", "Burnout.", "A holiday."], 1, "'on the verge of burnout'."),
      mc("4. How does the man feel about his new role?", ["Nervous.", "He's looking forward to it.", "Reluctant."], 1, "'really looking forward to starting'."),
      mc("5. What happened to the woman?", ["She was promoted.", "She was made redundant.", "She resigned."], 1, "'I was one of them' (made redundant)."),
      mc("6. What matters most to the man?", ["A big salary.", "A good work-life balance.", "Status."], 1, "'work-life balance matters far more'."),
      mc("7. What has the woman finally done?", ["Started a report.", "Finished the overdue report.", "Deleted it."], 1, "'managed to finish that report'."),
      mc("8. What does the man say about her promotion?", ["It was unfair.", "She deserved it.", "It was too soon."], 1, "'she thoroughly deserved it'."),
    ]),

    ...speakingParts({ p1: "qué te gustaría hacer profesionalmente, qué valoras en un trabajo y cómo sería tu trabajo ideal", p2: "dos formas de trabajar (una oficina tradicional y trabajar desde casa como autónomo): compáralas y di sus ventajas", p3: "qué es más importante en un trabajo (buen sueldo, horario flexible, buen ambiente, sentido, seguridad): comentadlo y elegid lo prioritario", p4: "el trabajo: si el equilibrio vida-trabajo importa más que el éxito, si desaparecerá el 'trabajo para toda la vida' y qué da sentido al trabajo" }),

    SUMMARY("Resumen del Día 31", [
      "+ -ing: enjoy, avoid, mind, consider, look forward to, be used to, be worth. + to: want, decide, manage, refuse, agree.",
      "Tras preposición → siempre -ing. Objeto + to: want/tell/advise sb to do.",
      "Vocabulario de trabajo. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 32", "Escribe 6 frases: 3 con verbo + gerundio y 3 con verbo + infinitivo. Repasa las flashcards. Mañana: verbos que cambian de significado."),
  ],
};

// ───────────────────────── DÍA 32 ─────────────────────────
const DAY32 = {
  title: "Día 32 — Verbos que cambian de significado · La memoria",
  description: "remember/forget/stop/try/go on/regret/mean + gerundio o infinitivo (cambio de significado). Vocabulario de memoria. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Distinguir el significado según se use gerundio o infinitivo.",
    summary: "Verbos con cambio de significado; la memoria; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'stop to smoke' vs 'stop smoking'.", "'remember to' vs 'remember -ing'.", "'try to' vs 'try -ing'."],
    reviewPrompts: ["¿'stop smoking' o 'stop to smoke' para dejar de fumar?", "¿'remember to lock' vs 'remember locking'?"],
  },
  items: [
    TEXT("🔁 Repaso: patrones. Hoy los VERBOS QUE CAMBIAN DE SIGNIFICADO según lleven gerundio o infinitivo. Vocabulario: la MEMORIA."),
    GRAMMAR("Verbos que cambian de significado", `Algunos verbos cambian de SENTIDO según lleven -ing o to:
· REMEMBER / FORGET: + to (una obligación futura): Remember to lock the door. + -ing (un recuerdo pasado): I remember locking it.
· STOP: + -ing (dejar de): He stopped smoking. + to (parar para): He stopped to smoke.
· TRY: + to (intentar/esforzarse): I tried to open it. + -ing (probar/experimentar): Try adding more salt.
· GO ON: + -ing (seguir con lo mismo): She went on talking. + to (pasar a hacer otra cosa): She went on to become a doctor.
· REGRET: + -ing (lamentar algo pasado): I regret saying that. + to (lamentar informar): I regret to inform you…
· MEAN: + to (tener la intención): I meant to call. + -ing (suponer/implicar): This means changing everything.`),
    WARN("Errores típicos del hispanohablante", "· ❌ He stopped to smoke (= dejó de fumar) → eso es 'stopped smoking'.\n· ❌ Remember locking the door (obligación) → ✅ Remember to lock it.\n· 'try to' = esforzarse; 'try -ing' = probar como experimento.\n· 'go on -ing' = continuar; 'go on to' = pasar a otra cosa."),
    grammarEx("Use of English — Verbos con cambio de significado", "Elige o completa.", [
      fb("Please remember ___ ___ (lock) the door tonight. (obligación futura)", ["to lock"], "remember to + inf."),
      fb("I clearly remember ___ (lock) it — I did it myself. (recuerdo)", ["locking"], "remember + -ing."),
      fb("He gave up his job and stopped ___ (work) altogether. (dejar de)", ["working"], "stop + -ing."),
      fb("On the way home, we stopped ___ ___ (buy) some milk. (parar para)", ["to buy"], "stop to + inf."),
      fb("The soup's bland — try ___ (add) some spices. (probar)", ["adding"], "try + -ing."),
      mc("Choose (regret past action):", ["I regret to say that.", "I regret saying that.", "I regret said that."], 1, "regret + -ing (algo pasado)."),
      fb("She started as a nurse and went on ___ ___ (become) a surgeon. (pasar a otra cosa)", ["to become"], "go on to + inf."),
    ]),
    GRAMMAR("Vocabulario del día — La memoria", "Léxico de memoria (B2)."),
    deck("B2 S7D32 — La memoria", [
      ["recall", "recordar / rememorar", "I can't recall her name.", "verbo", "rɪˈkɔːl"],
      ["memorise", "memorizar", "I had to memorise the whole speech.", "verbo", "ˈmeməraɪz"],
      ["slip your mind", "olvidársele a uno", "Sorry, it completely slipped my mind.", "expresión", "slɪp jɔː ˈmaɪnd"],
      ["on the tip of my tongue", "en la punta de la lengua", "Her name is on the tip of my tongue.", "expresión", "ɒn ðə tɪp əv maɪ ˈtʌŋ"],
      ["absent-minded", "despistado/a", "He's terribly absent-minded.", "adjetivo", "ˌæbsənt ˈmaɪndɪd"],
      ["reminisce", "rememorar (con nostalgia)", "We reminisced about our school days.", "verbo", "ˌremɪˈnɪs"],
      ["nostalgia", "nostalgia", "The song filled me with nostalgia.", "sustantivo", "nɒsˈtældʒə"],
      ["vivid", "vívido/a / nítido", "I have a vivid memory of that day.", "adjetivo", "ˈvɪvɪd"],
      ["remind", "recordar (a alguien algo)", "Remind me to call the bank.", "verbo", "rɪˈmaɪnd"],
      ["jog someone's memory", "refrescar la memoria a alguien", "This photo might jog your memory.", "expresión", "dʒɒɡ ˈsʌmwʌnz ˈmeməri"],
    ]),
    vocabEx("Vocabulario — La memoria", "Elige la opción correcta.", [
      mc("To bring a memory back to mind is to ___ it.", ["recall", "memorise", "remind"], 0, "recall."),
      mc("When you forget something you meant to do, it ___.", ["slips your mind", "jogs your memory", "reminds you"], 0, "slips your mind."),
      mc("Someone who is forgetful and easily distracted is ___.", ["absent-minded", "vivid", "nostalgic"], 0, "absent-minded."),
      mc("A clear, detailed memory is a ___ one.", ["vivid", "absent-minded", "nostalgic"], 0, "vivid."),
      mc("To help someone remember something is to ___ their memory.", ["jog", "recall", "slip"], 0, "jog."),
      mc("A sentimental longing for the past is ___.", ["nostalgia", "recall", "reminder"], 0, "nostalgia."),
    ]),

    ...uoe({
      p1: {
        title: "How memory really works",
        text: "Most of us imagine memory as a kind of recording device, faithfully storing our experiences so that we can (1)___ them later exactly as they happened. This comforting picture is almost entirely (2)___. In reality, memory is far more creative, and far less reliable, than we like to believe. Every time we (3)___ an event, we do not simply replay a fixed recording; we actively reconstruct it, and in doing so we can unknowingly (4)___ the details. This is why two people can have completely different, and equally (5)___, memories of the same event. It is also why memories can be surprisingly easy to (6)___: studies have shown that people can be led, through suggestion, to 'remember' events that never happened at all. None of this means our memories are worthless — they are essential to who we are. But it does mean we should hold them with a certain (7)___. The past we carry in our heads is not a perfect record; it is a story we are constantly, and unconsciously, (8)___.",
        q: [
          mc("(1)", ["recall", "remind", "remember", "recognise"], 0, "'recall them later'."),
          mc("(2)", ["false", "wrong", "untrue", "mistaken"], 0, "'almost entirely false'."),
          mc("(3)", ["recall", "recollect", "remember", "retrieve"], 0, "'recall an event' (o remember)."),
          mc("(4)", ["alter", "change", "modify", "adjust"], 0, "'alter the details'."),
          mc("(5)", ["vivid", "clear", "sharp", "bright"], 0, "'equally vivid memories'."),
          mc("(6)", ["manipulate", "influence", "affect", "shape"], 0, "'easy to manipulate'."),
          mc("(7)", ["humility", "caution", "care", "doubt"], 1, "'a certain caution'."),
          mc("(8)", ["rewriting", "editing", "revising", "changing"], 0, "'constantly rewriting'."),
        ],
      },
      p2: {
        title: "The tricks of remembering",
        text: "How do memory champions manage (1)___ memorise the order of a shuffled pack of cards in under a minute? The answer will surprise many people: they do not, on the whole, have naturally (2)___ memories. Instead, they use ancient techniques (3)___ anyone can learn. The most famous is the 'memory palace', a method that (4)___ back to the ancient Greeks. It works (5)___ associating each thing you want to remember with a specific location in a familiar place, such as your own home. To recall the information, you simply take an imaginary walk through the building. The reason this works is that the human brain, though (6)___ at remembering abstract facts, is extraordinarily good at remembering places and images. By turning dull information (7)___ vivid mental pictures placed in memorable locations, we play to our brain's natural strengths. It is a powerful reminder that memory is a skill, not a fixed gift — and one that, (8)___ any skill, can be dramatically improved with practice.",
        q: [
          fb("(1)", ["to"], "'manage to memorise'."),
          fb("(2)", ["good", "brilliant", "exceptional"], "'naturally good/exceptional memories'."),
          fb("(3)", ["that", "which"], "'techniques that anyone can learn'."),
          fb("(4)", ["dates", "goes"], "'a method that dates/goes back'."),
          fb("(5)", ["by"], "'works by associating'."),
          fb("(6)", ["poor", "bad", "weak"], "'though poor at remembering abstract facts'."),
          fb("(7)", ["into"], "'turning… information into vivid pictures'."),
          fb("(8)", ["like"], "'like any skill'."),
        ],
      },
      p3: {
        title: "The gift of forgetting",
        text: "We tend to think of forgetting as a (1)___, a failure of the mind. But what if forgetting were not a bug but a (2)___ — an essential and even beneficial function? Consider the rare individuals who cannot forget, who remember every day of their lives in (3)___ detail. Far from being a blessing, this condition is often experienced as a (4)___, a mind cluttered with useless information and haunted by every painful memory, unable to fade. The truth is that a healthy mind needs to forget. Forgetting the (5)___ details allows us to see the bigger picture; forgetting old pain allows wounds to heal. Our memory is not designed to be a perfect archive but a (6)___ tool, keeping what is useful and quietly letting go of the rest. Seen this way, the gradual (7)___ of a painful memory is not a defect but a form of mercy. There is, in the end, a real (8)___ in being able to forget.",
        items: [
          { root: "weak", accepted: ["weakness"], hint: "sustantivo → weakness." },
          { root: "feature", accepted: ["feature"], hint: "'not a bug but a feature' (sustantivo)." },
          { root: "extraordinary", accepted: ["extraordinary"], hint: "'in extraordinary detail' (adjetivo)." },
          { root: "curse", accepted: ["curse"], hint: "'experienced as a curse' (sustantivo)." },
          { root: "importance", accepted: ["unimportant"], hint: "'the unimportant details' → unimportant." },
          { root: "practice", accepted: ["practical"], hint: "'a practical tool' → practical." },
          { root: "fade", accepted: ["fading"], hint: "'the gradual fading of a memory' → fading." },
          { root: "wise", accepted: ["wisdom"], hint: "sustantivo → wisdom." },
        ],
      },
      p4: {
        title: "Transformaciones — cambio de significado",
        items: [
          { s1: "Don't forget to phone the dentist.", key: "REMEMBER", s2: "___ the dentist.", accepted: ["Remember to phone"], explanation: "remember to + inf (obligación)." },
          { s1: "I have a clear memory of meeting her before.", key: "REMEMBER", s2: "I ___ her before.", accepted: ["remember meeting"], explanation: "remember + -ing (recuerdo)." },
          { s1: "He quit smoking two years ago.", key: "STOPPED", s2: "He ___ two years ago.", accepted: ["stopped smoking"], explanation: "stop + -ing (dejar de)." },
          { s1: "Why don't you experiment with a different approach?", key: "TRY", s2: "Why don't you ___ a different approach?", accepted: ["try using", "try"], explanation: "try + -ing (probar)." },
          { s1: "I intended to call you, but I forgot.", key: "MEANT", s2: "I ___ you, but I forgot.", accepted: ["meant to call"], explanation: "mean to + inf (intención)." },
          { s1: "I'm sorry that I ever doubted you.", key: "REGRET", s2: "I ___ you.", accepted: ["regret doubting"], explanation: "regret + -ing." },
        ],
      },
      p5: {
        title: "The man who couldn't forget",
        text: "Solomon Shereshevsky, a Russian journalist of the early twentieth century, possessed one of the most extraordinary memories ever recorded. He could memorise, effortlessly and permanently, lists of hundreds of random numbers, complex mathematical formulae, even poems in languages he did not speak. Tested by scientists over many years, he never once failed to reproduce, perfectly, information he had been shown decades earlier. His memory appeared to have no limit whatsoever. To most of us, such a gift sounds like a dream. For Shereshevsky, it was closer to a nightmare.\n\nThe problem was that he could not forget. The rest of us are protected by a merciful forgetting that clears away the endless trivial details of daily life, allowing us to focus on what matters. Shereshevsky had no such protection. Every face he had ever seen, every conversation he had ever had, every meaningless detail of every ordinary day, remained with him forever, in perfect, vivid clarity. His mind became impossibly cluttered, a vast, chaotic archive in which the important and the trivial were preserved with equal, overwhelming intensity.\n\nStranger still, his extraordinary memory made abstract thought almost impossible. When he read a story, each word triggered such a flood of vivid images and sensations that he could not follow the overall meaning; he was, in a sense, unable to see the wood for the trees. He struggled to recognise faces, because he remembered every tiny variation in a person's expression as a completely separate image. The very gift that allowed him to memorise anything prevented him from doing the ordinary mental work that the rest of us perform without a thought.\n\nShereshevsky's tragic story teaches us something profound and counterintuitive about the human mind. We imagine that a perfect memory would be an unqualified blessing, and we lament our own forgetfulness. But forgetting, it turns out, is not a failure of memory; it is one of its most important functions. A mind that remembers everything, Shereshevsky's life reveals, is a mind that can barely think at all. The capacity to let go of the unimportant, far from being a weakness, is essential to the very things that make us human: the ability to generalise, to understand, and to move on.",
        q: [
          mc("What was extraordinary about Shereshevsky?", ["His intelligence.", "He had an apparently limitless memory.", "His writing.", "His languages."], 1, "'one of the most extraordinary memories ever recorded'."),
          mc("What was the central problem with his memory?", ["It was unreliable.", "He could not forget.", "It faded fast.", "It was slow."], 1, "'he could not forget'."),
          mc("How does forgetting normally protect us?", ["It doesn't.", "It clears away trivial details so we can focus.", "It makes us clever.", "It stores memories."], 1, "'a merciful forgetting that clears away the endless trivial details'."),
          mc("Why was abstract thought difficult for him?", ["He was unintelligent.", "Each word triggered a flood of images so he couldn't follow the meaning.", "He couldn't read.", "He was distracted."], 1, "'he could not follow the overall meaning… see the wood for the trees'."),
          mc("What does his story teach about forgetting?", ["It's always bad.", "It's one of memory's most important functions.", "It's a failure.", "It's rare."], 1, "'forgetting… is one of its most important functions'."),
          mc("What is the capacity to forget essential to?", ["Nothing.", "Generalising, understanding and moving on.", "Memorising.", "Reading."], 1, "'to generalise, to understand, and to move on'."),
        ],
      },
      p6: {
        title: "The power of nostalgia",
        text: "For a long time, nostalgia had a bad reputation. (1)___ It was regarded as an unhealthy longing for a past that never really existed, a refusal to face the present.\n\nRecent research, however, has painted a very different picture. (2)___ Far from being harmful, nostalgia appears to be one of the mind's most valuable tools for psychological wellbeing.\n\nStudies have found that reminiscing about happy times has powerful benefits. (3)___ People who spend time recalling cherished memories report feeling more optimistic, more connected to others, and better able to cope with difficulty.\n\nThe reason seems to lie in what nostalgia does for our sense of self. (4)___ By reconnecting us with meaningful moments and important relationships, it reminds us who we are and what we value.\n\nThis has practical implications. (5)___ In difficult times, deliberately calling to mind our happiest memories is not mere escapism; it is a genuine source of comfort and strength. (6)___ Perhaps we should be less suspicious of that warm glow we feel when an old song comes on the radio. It may be doing us far more good than we realise.",
        options: [
          "Psychologists once viewed it with deep suspicion.",            // A -> gap 1
          "The old assumptions have been almost entirely reversed.",      // B -> gap 2
          "The effects on mood and outlook are consistently positive.",   // C -> gap 3
          "It strengthens our sense of who we are and where we belong.",   // D -> gap 4
          "This is a resource we can consciously draw upon.",             // E -> gap 5
          "There is real wisdom, it turns out, in looking back.",         // F -> gap 6
          "Nostalgia has no effect on our wellbeing whatsoever.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: se veía con recelo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las viejas ideas se invirtieron."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los efectos son positivos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: refuerza la identidad."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: un recurso consciente."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: hay sabiduría en mirar atrás."),
        ],
      },
      p7: {
        title: "Four people talk about memory",
        text: "Read what four people say about their memories.\n\nA) NADIA: I'm cursed with a terrible memory for names and faces. It's genuinely embarrassing — I'll meet someone three times and still not remember them. What I have instead is an almost photographic memory for places. I can recall the layout of a house I visited once, twenty years ago. Brains are strange.\n\nB) TOM: I keep a detailed diary, and I have done since I was fifteen. Some people find it odd, but I love being able to read exactly what I was thinking and feeling on any given day of my life. My memory lies to me constantly; my diary doesn't. It's the only honest record I have.\n\nC) PRIYA: The older I get, the more I find myself reminiscing about my childhood. Little things trigger it — a smell, a song — and suddenly I'm transported back decades. I used to think nostalgia was a bit sad, a sign of getting old. Now I've decided it's one of life's great pleasures.\n\nD) SAM: What fascinates me is how unreliable memory is. I once had a huge argument with my sister about a family event — we both had completely clear, completely different memories of it. One of us was wrong, but neither of us could tell which. It taught me to hold my own certainties a lot more lightly.",
        q: [
          mc("Who has a poor memory for names but a strong one for places?", ["A", "B", "C", "D"], 0, "Nadia: 'terrible memory for names… photographic memory for places'."),
          mc("Who keeps a written record they trust more than memory?", ["A", "B", "C", "D"], 1, "Tom: 'My memory lies… my diary doesn't'."),
          mc("Who has changed their mind about nostalgia?", ["A", "B", "C", "D"], 2, "Priya: 'I used to think nostalgia was… sad. Now… one of life's great pleasures'."),
          mc("Who was struck by memory's unreliability through an argument?", ["A", "B", "C", "D"], 3, "Sam: 'a huge argument… completely different memories'."),
          mc("Who can recall the layout of a house visited long ago?", ["A", "B", "C", "D"], 0, "Nadia: 'the layout of a house… twenty years ago'."),
          mc("Who has kept a diary since their teens?", ["A", "B", "C", "D"], 1, "Tom: 'since I was fifteen'."),
          mc("Who is 'transported back decades' by small triggers?", ["A", "B", "C", "D"], 2, "Priya: 'a smell, a song… back decades'."),
          mc("Who learned to hold their certainties more lightly?", ["A", "B", "C", "D"], 3, "Sam: 'hold my own certainties a lot more lightly'."),
          mc("Who finds their poor memory embarrassing?", ["A", "B", "C", "D"], 0, "Nadia: 'genuinely embarrassing'."),
          mc("Who now sees looking back as a pleasure, not a weakness?", ["A", "B", "C", "D"], 2, "Priya: 'one of life's great pleasures'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is better to focus on the future than to dwell on the past.'\nComenta estos dos aspectos y añade uno propio:\n1. learning from experience (aprender de la experiencia)\n2. moving on (seguir adelante)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A childhood memory I will never forget' — descríbelo con detalle (usa remember/forget + gerundio) y di por qué te marcó.\n· RESEÑA de un libro o película que trate sobre la memoria o el pasado: descríbelo y di si lo recomiendas.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una experta en memoria, la Dra. Lin, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a memory expert called Dr Lin giving a talk. Dr Lin: The first thing everyone should understand is that memory is not like a recording. Every time you remember something, you actually rebuild it, and you can change it without knowing. This is why eyewitness accounts are so unreliable. Now, people often ask me how to improve their memory. The single most effective technique, used by memory champions, is called the 'memory palace'. It works by linking each thing you want to remember to a place in a building you know well. The reason this is so powerful is that our brains are excellent at remembering locations and images, but poor at remembering abstract facts. My second tip is to test yourself, rather than simply re-reading. Struggling to recall information strengthens the memory far more than passively reviewing it. Third, and this surprises people, forgetting is not a flaw — it's essential. A mind that remembered everything would be unable to think clearly. And finally, the biggest enemy of memory is a lack of sleep. It's during sleep that the brain moves memories into long-term storage. So if you really want to remember something, the best thing you can do, after learning it, is to get a good night's sleep.", [
      fb("Memory is not like a ___.", ["recording"], "'not like a recording'."),
      fb("Every time you remember something, you ___ it.", ["rebuild", "change"], "'you actually rebuild it'."),
      fb("The most effective technique is called the '___ palace'.", ["memory"], "'the memory palace'."),
      fb("Our brains are excellent at remembering locations and ___.", ["images"], "'locations and images'."),
      fb("It's better to test yourself than to simply ___.", ["re-read", "reread"], "'rather than simply re-reading'."),
      fb("Surprisingly, ___ is essential, not a flaw.", ["forgetting"], "'forgetting is not a flaw — it's essential'."),
      fb("The biggest enemy of memory is a lack of ___.", ["sleep"], "'a lack of sleep'."),
      fb("The brain moves memories into long-term storage during ___.", ["sleep"], "'during sleep'."),
    ]),

    ...speakingParts({ p1: "qué recuerdas mejor, si tienes buena o mala memoria y un recuerdo vívido de tu infancia", p2: "dos formas de conservar recuerdos (fotos y un diario escrito): compáralas y di cuál prefieres", p3: "qué ayuda más a recordar información importante (repetir, asociar con imágenes, dormir bien, tomar notas, enseñárselo a otro): comentadlo y elegid lo mejor", p4: "la memoria y el pasado: si es fiable la memoria, si es bueno mirar atrás con nostalgia y si es mejor recordar u olvidar" }),

    SUMMARY("Resumen del Día 32", [
      "remember/forget to (obligación) vs -ing (recuerdo). stop -ing (dejar de) vs stop to (parar para).",
      "try to (esforzarse) vs try -ing (probar). go on -ing (seguir) vs go on to (pasar a). regret -ing / mean to.",
      "Vocabulario de memoria. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 33", "Escribe pares de frases mostrando el cambio de significado (stop/remember/try). Repasa las flashcards. Mañana: los verbos con partícula (phrasal verbs)."),
  ],
};

// ───────────────────────── DÍA 33 ─────────────────────────
const DAY33 = {
  title: "Día 33 — Verbos con partícula · La vida cotidiana",
  description: "Phrasal verbs (tipos: separables/inseparables, con dos partículas) y los más frecuentes. Vocabulario cotidiano. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Usar phrasal verbs frecuentes con la posición correcta del objeto.",
    summary: "Phrasal verbs; la vida cotidiana; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'turn on it'.", "'look it after'.", "traducir literal."],
    reviewPrompts: ["¿'turn it on' o 'turn on it'?", "¿'put up with' es separable?"],
  },
  items: [
    TEXT("🔁 Repaso: cambio de significado. Hoy los PHRASAL VERBS (tipos y los más frecuentes del examen). Vocabulario: la VIDA COTIDIANA."),
    GRAMMAR("Verbos con partícula (phrasal verbs)", `Tipos:
1) SEPARABLES (verbo + partícula, con objeto): turn on the TV / turn the TV on. Con PRONOMBRE va SIEMPRE en medio: turn it on (❌ turn on it).
2) INSEPARABLES (verbo + preposición): el objeto va detrás: look after the baby → look after it (❌ look it after).
3) CON DOS PARTÍCULAS (verbo + adverbio + preposición): siempre inseparables: put up with, look forward to, get on with, run out of, catch up with.
4) INTRANSITIVOS (sin objeto): break down, take off, grow up, turn up.
FRECUENTES B2: put up with (soportar), get by (arreglárselas), come across (encontrar por casualidad), take up (empezar), give up (dejar), turn down (rechazar), work out (resolver/hacer ejercicio), sort out (solucionar), carry on (continuar), come up with (idear), get away with (salir impune), look into (investigar), bring up (criar/sacar un tema), call off (cancelar).`),
    WARN("Errores típicos del hispanohablante", "· ❌ turn on it → ✅ turn it on (separable + pronombre en medio).\n· ❌ look it after → ✅ look after it (inseparable).\n· ❌ I can't put up it with → ✅ I can't put up with it.\n· Apréndelos como bloques con su significado, no traduzcas las partes."),
    grammarEx("Use of English — Phrasal verbs", "Completa o elige.", [
      mc("Choose (pronoun):", ["Can you turn on it?", "Can you turn it on?", "Can you turn on it off?"], 1, "pronombre en medio."),
      fb("I don't know how she ___ ___ ___ his behaviour. (soportar)", ["puts up with"], "put up with (dos partículas)."),
      fb("I ___ ___ an old photo while tidying up. (encontrar por casualidad)", ["came across"], "come across."),
      fb("They had to ___ ___ the wedding because of the storm. (cancelar)", ["call off"], "call off."),
      mc("Choose:", ["Who looks the children after?", "Who looks after the children?", "Who looks after them after?"], 1, "inseparable → look after."),
      fb("We've ___ ___ ___ milk again. (quedarse sin)", ["run out of"], "run out of."),
      fb("She ___ ___ a brilliant idea. (idear)", ["came up with"], "come up with."),
    ]),
    GRAMMAR("Vocabulario del día — La vida cotidiana", "Léxico cotidiano con phrasal verbs (B2)."),
    deck("B2 S7D33 — Vida cotidiana", [
      ["get by", "arreglárselas / apañarse", "We just about get by on one salary.", "phrasal verb", "ɡet ˈbaɪ"],
      ["put up with", "soportar / aguantar", "I won't put up with rudeness.", "phrasal verb", "pʊt ʌp ˈwɪð"],
      ["sort out", "solucionar / organizar", "I need to sort out my finances.", "phrasal verb", "sɔːt ˈaʊt"],
      ["chores", "tareas domésticas", "I hate doing household chores.", "sustantivo", "tʃɔːz"],
      ["run errands", "hacer recados", "I spent the morning running errands.", "colocación", "rʌn ˈerəndz"],
      ["settle down", "asentarse / sentar la cabeza", "They settled down and had kids.", "phrasal verb", "ˌsetl ˈdaʊn"],
      ["make do", "arreglárselas con lo que hay", "We'll have to make do with what we've got.", "expresión", "meɪk ˈduː"],
      ["catch up on", "ponerse al día con", "I need to catch up on some sleep.", "phrasal verb", "kætʃ ˈʌp ɒn"],
      ["cut down on", "reducir", "I'm trying to cut down on sugar.", "phrasal verb", "kʌt ˈdaʊn ɒn"],
      ["keep up with", "seguir el ritmo de / estar al día", "It's hard to keep up with the news.", "phrasal verb", "kiːp ˈʌp wɪð"],
    ]),
    vocabEx("Vocabulario — La vida cotidiana", "Elige la opción correcta.", [
      mc("To manage to live with limited money is to ___.", ["get by", "put up with", "sort out"], 0, "get by."),
      mc("To tolerate something annoying is to ___ it.", ["put up with", "get by", "make do"], 0, "put up with."),
      mc("To reduce the amount of something is to ___ it.", ["cut down on", "catch up on", "keep up with"], 0, "cut down on."),
      mc("To do small tasks like shopping is to ___.", ["run errands", "settle down", "get by"], 0, "run errands."),
      mc("To manage with what's available, even if not ideal, is to ___.", ["make do", "sort out", "get by"], 0, "make do."),
      mc("To stay informed and not fall behind is to ___.", ["keep up with", "cut down on", "put up with"], 0, "keep up with."),
    ]),

    ...uoe({
      p1: {
        title: "The tyranny of the to-do list",
        text: "Modern life often feels like an endless struggle to keep (1)___ with everything we are supposed to do. Between work, chores, errands and the constant demands of technology, many of us feel we can barely (2)___ by, let alone thrive. The result is a low-level, chronic stress that we have come to accept as normal. But it need not be this way. Productivity experts suggest that much of our overwhelm comes not from having too much to do, but from trying to (3)___ everything in our heads. Simply writing things down, they argue, frees the mind to (4)___ on the task at hand. It also helps to be ruthless about priorities: to work (5)___ what truly matters and to let go of the rest. Not everything on the list is equally important, and trying to do it all is a recipe for (6)___. Perhaps most importantly, we must learn to (7)___ down on the endless demands we place on ourselves. The goal is not to (8)___ up with an impossible standard, but to do what matters, and to accept that the rest can wait.",
        q: [
          mc("(1)", ["up", "on", "in", "with"], 0, "'keep up with'."),
          mc("(2)", ["get", "make", "come", "put"], 0, "'get by'."),
          mc("(3)", ["hold", "keep", "carry", "store"], 1, "'keep everything in our heads'."),
          mc("(4)", ["focus", "concentrate", "work", "settle"], 0, "'focus on the task'."),
          mc("(5)", ["out", "up", "on", "off"], 0, "'work out what truly matters'."),
          mc("(6)", ["burnout", "failure", "stress", "exhaustion"], 0, "'a recipe for burnout'."),
          mc("(7)", ["cut", "put", "get", "come"], 0, "'cut down on the demands'."),
          mc("(8)", ["keep", "put", "make", "come"], 0, "'keep up with an impossible standard'."),
        ],
      },
      p2: {
        title: "The art of doing less",
        text: "We live in a culture that worships busyness. To be constantly rushed off (1)___ feet is seen as a sign of importance and success. Ask anyone how they are, and the answer, more often (2)___ not, is 'busy'. Yet a growing number of people are beginning to question (3)___ this relentless activity is really serving us. Being busy, after all, is not the same as being productive, still less as being happy. Much of what fills our days consists of tasks that do not truly matter, which we could quite easily (4)___ without. The challenge is to learn to distinguish between the genuinely important and the merely urgent, and to have the courage to let the latter (5)___. This does not mean becoming lazy; it means being intentional, focusing our limited time and energy on what really counts and refusing to (6)___ up with a life of pointless activity. Ironically, those who master the art of doing (7)___ often achieve far more that matters than those who are perpetually busy. It seems that, when it comes to a well-lived life, less really can (8)___ more.",
        q: [
          fb("(1)", ["our", "your", "their"], "'rushed off our/your feet'."),
          fb("(2)", ["than"], "'more often than not'."),
          fb("(3)", ["whether", "if"], "'question whether this activity is serving us'."),
          fb("(4)", ["do"], "'do without them'."),
          fb("(5)", ["go"], "'let the latter go'."),
          fb("(6)", ["put"], "'refusing to put up with'."),
          fb("(7)", ["less"], "'the art of doing less'."),
          fb("(8)", ["be", "mean"], "'less really can be/mean more'."),
        ],
      },
      p3: {
        title: "The invisible work of running a home",
        text: "Running a household involves an astonishing (1)___ of work that goes largely unnoticed and unappreciated. Beyond the visible chores like cooking and cleaning lies a vast, invisible burden of (2)___: remembering birthdays, noticing when supplies are running low, keeping track of appointments, anticipating everyone's needs. This 'mental load', as it has come to be called, is a form of labour that is easily (3)___ precisely because it leaves no visible trace. Studies show that this invisible work still falls (4)___ on women, even in households where the visible chores are shared more equally. The consequences can be (5)___: the constant, low-level effort of holding a household together in one's head is genuinely (6)___, and the fact that it is neither seen nor acknowledged makes it all the more so. Recognising the mental load as real (7)___ is the first step towards sharing it more fairly. A household, after all, does not run itself, and the person who quietly keeps it running deserves far more (8)___ than they typically receive.",
        items: [
          { root: "amount", accepted: ["amount"], hint: "'an astonishing amount of work' (sustantivo)." },
          { root: "organise", accepted: ["organisation"], hint: "sustantivo → organisation." },
          { root: "overlook", accepted: ["overlooked"], hint: "'easily overlooked' (participio)." },
          { root: "proportion", accepted: ["disproportionately"], hint: "'falls disproportionately on women' → disproportionately." },
          { root: "significance", accepted: ["significant"], hint: "adjetivo → significant." },
          { root: "exhaust", accepted: ["exhausting"], hint: "'is genuinely exhausting' → exhausting." },
          { root: "labour", accepted: ["labour"], hint: "'as real labour' (sustantivo)." },
          { root: "recognise", accepted: ["recognition"], hint: "sustantivo → recognition." },
        ],
      },
      p4: {
        title: "Transformaciones — phrasal verbs",
        items: [
          { s1: "I can't tolerate his constant complaining.", key: "PUT", s2: "I can't ___ his constant complaining.", accepted: ["put up with"], explanation: "put up with." },
          { s1: "They cancelled the meeting at the last minute.", key: "CALLED", s2: "They ___ the meeting at the last minute.", accepted: ["called off"], explanation: "call off." },
          { s1: "I found this old letter by chance.", key: "CAME", s2: "I ___ this old letter by chance.", accepted: ["came across"], explanation: "come across." },
          { s1: "We need to reduce our energy consumption.", key: "CUT", s2: "We need to ___ our energy consumption.", accepted: ["cut down on"], explanation: "cut down on." },
          { s1: "I really must deal with this mess in the garage.", key: "SORT", s2: "I really must ___ this mess in the garage.", accepted: ["sort out"], explanation: "sort out." },
          { s1: "She managed to invent a clever solution.", key: "CAME", s2: "She ___ a clever solution.", accepted: ["came up with"], explanation: "come up with." },
        ],
      },
      p5: {
        title: "The simple life",
        text: "Six years ago, Maya Foster had, by conventional standards, everything: a well-paid job, a large house filled with possessions, a busy social life. She also had crippling anxiety, mounting debt, and a nagging sense that, despite her outward success, something was profoundly wrong with the way she was living. The turning point came, as such turning points often do, in a moment of quiet desperation. Standing in her cluttered home one evening, exhausted after another twelve-hour day, she looked at all the things she had worked so hard to acquire and felt, instead of satisfaction, only a suffocating weight.\n\nWhat Maya did next was, by the standards of her friends and family, close to madness. Over the following year, she systematically gave away or sold the vast majority of her possessions, moved from her large house into a tiny flat, and, most dramatically of all, left her lucrative career to work part-time doing something she actually enjoyed. Her income fell by two-thirds. Her friends were baffled, some even angry, convinced she was throwing her life away.\n\nThe reality was the opposite. Freed from the enormous cost, both financial and psychological, of maintaining her old lifestyle, Maya found she needed far less money than she had assumed. She could easily get by on her reduced income, and, crucially, she now had something she had not possessed in years: time. Time to think, to rest, to see friends properly, to pursue interests she had long neglected. The anxiety that had plagued her for years gradually faded. For the first time in her adult life, she was not exhausted.\n\nMaya is careful not to preach. She knows that her choices are not available to everyone, and that the freedom to simplify is itself a kind of privilege. But her experience challenges one of the most powerful assumptions of modern life: that more is always better, that the path to happiness lies in acquiring and achieving ever more. 'I spent years believing I needed all of it to be happy,' she says. 'It turns out that most of what I was working so hard for was actually making me miserable. The best thing I ever did was to want less.'",
        q: [
          mc("What did Maya have alongside her outward success?", ["Fame.", "Anxiety, debt and a sense something was wrong.", "Free time.", "Good health."], 1, "'crippling anxiety, mounting debt, and a nagging sense that… something was profoundly wrong'."),
          mc("What did Maya do over the following year?", ["Bought more things.", "Gave away most possessions and left her career.", "Got promoted.", "Moved abroad."], 1, "'gave away or sold the vast majority of her possessions… left her lucrative career'."),
          mc("How did her friends react?", ["With support.", "They were baffled, some angry.", "With envy.", "With indifference."], 1, "'Her friends were baffled, some even angry'."),
          mc("What did she gain that she'd lacked for years?", ["Money.", "Time.", "Status.", "Possessions."], 1, "'she now had something she had not possessed in years: time'."),
          mc("What assumption does Maya's experience challenge?", ["That less is better.", "That more is always better.", "That money is unimportant.", "That work is bad."], 1, "'that more is always better'."),
          mc("What was 'the best thing' Maya says she ever did?", ["Get a bigger house.", "Want less.", "Work harder.", "Save money."], 1, "'The best thing I ever did was to want less'."),
        ],
      },
      p6: {
        title: "The lost art of doing nothing",
        text: "There was a time, not so long ago, when moments of empty time were simply part of life. (1)___ Waiting for a bus, standing in a queue, sitting on a train — these small gaps were spent staring into space, daydreaming, or simply being.\n\nThose empty moments have now almost entirely vanished. (2)___ At the first hint of boredom, we reach for our phones, filling every spare second with a stream of information and entertainment.\n\nThis might seem like an improvement — after all, why be bored when you could be entertained? (3)___ But psychologists are increasingly convinced that we have lost something valuable.\n\nIt turns out that the mind needs empty time. (4)___ It is precisely during these unfocused moments, when we are not concentrating on anything in particular, that the brain does some of its most important work: processing experiences, making unexpected connections, and generating new ideas.\n\nBy eliminating boredom, we may have inadvertently eliminated creativity and reflection along with it. (5)___ The constant stimulation leaves the mind no room to wander, and it is in wandering that much of our best thinking is done. (6)___ Perhaps, then, we should learn to reclaim those empty moments — to put the phone away, tolerate a little boredom, and give our minds the space they so badly need.",
        options: [
          "They occurred naturally, dozens of times a day.",              // A -> gap 1
          "The smartphone has abolished boredom entirely.",              // B -> gap 2
          "The answer, it seems, is more complicated than it appears.",  // C -> gap 3
          "Empty time is not wasted time; it is essential.",             // D -> gap 4
          "The cost of our constant connection is only now becoming clear.", // E -> gap 5
          "There is real wisdom in occasionally doing nothing at all.",   // F -> gap 6
          "Nobody has ever benefited from a moment of boredom.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ocurrían de forma natural."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el móvil abolió el aburrimiento."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la respuesta es más compleja."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el tiempo vacío es esencial."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el coste de la conexión constante."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: hay sabiduría en no hacer nada."),
        ],
      },
      p7: {
        title: "Four people describe how they simplified their lives",
        text: "Read what four people say about living more simply.\n\nA) NADIA: I got rid of ninety per cent of my possessions two years ago, and I've never felt lighter. All that stuff, I realised, wasn't giving me anything except the work of looking after it and the guilt of not using it. Now I own very little, and what I do own, I actually value. Less really is more.\n\nB) TOM: For me, it was about time, not things. I was so busy I could barely keep up. So I ruthlessly cut down on my commitments — I said no to almost everything. People thought I was being antisocial, but reclaiming my time was the best decision I ever made. Now I do a few things well instead of everything badly.\n\nC) PRIYA: I deleted all my social media, which everyone told me I couldn't possibly do. Honestly, it changed my life. I no longer waste hours comparing myself to strangers or keeping up with people I barely know. I've got so much more time, and I'm far less anxious. I don't miss it at all.\n\nD) SAM: I moved from the city to a small village, swapping a big salary for a slower pace of life. We get by on much less than we used to, and we've had to make do without a lot of things we once took for granted. But we're healthier, calmer and closer as a family. I wouldn't go back for anything.",
        q: [
          mc("Who reduced their possessions dramatically?", ["A", "B", "C", "D"], 0, "Nadia: 'got rid of ninety per cent of my possessions'."),
          mc("Who simplified by cutting their commitments?", ["A", "B", "C", "D"], 1, "Tom: 'cut down on my commitments'."),
          mc("Who quit social media?", ["A", "B", "C", "D"], 2, "Priya: 'I deleted all my social media'."),
          mc("Who moved somewhere quieter and lives on less?", ["A", "B", "C", "D"], 3, "Sam: 'moved from the city to a small village… get by on much less'."),
          mc("Who says their possessions only gave them work and guilt?", ["A", "B", "C", "D"], 0, "Nadia: 'the work of looking after it and the guilt'."),
          mc("Who now does a few things well instead of everything badly?", ["A", "B", "C", "D"], 1, "Tom: 'a few things well instead of everything badly'."),
          mc("Who no longer compares themselves to strangers?", ["A", "B", "C", "D"], 2, "Priya: 'comparing myself to strangers'."),
          mc("Who has had to make do without things they took for granted?", ["A", "B", "C", "D"], 3, "Sam: 'make do without a lot of things'."),
          mc("Who was told they couldn't possibly make their change?", ["A", "B", "C", "D"], 2, "Priya: 'everyone told me I couldn't possibly do'."),
          mc("Who values the few things they still own?", ["A", "B", "C", "D"], 0, "Nadia: 'what I do own, I actually value'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'People today own too many things they do not need.'\nComenta estos dos aspectos y añade uno propio:\n1. happiness (la felicidad)\n2. the environment (el medio ambiente)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to live more simply' — da consejos prácticos a los lectores.\n· CARTA a un/a amigo/a que se siente agobiado/a por tener demasiadas cosas y compromisos: dale consejo con tacto.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de un cambio que hicieron para simplificar su vida (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué hicieron. Sobra una opción.\nA) got rid of most of their possessions\nB) quit social media\nC) reduced their working hours\nD) moved to the countryside\nE) stopped buying new things\nF) cut down on their spending", "This is Part Three. You will hear five people talking about how they simplified their lives. Speaker One: I did a huge clear-out — I gave away or sold almost everything I owned. I kept only what I genuinely use and love. My flat feels so much calmer now, and so do I. Speaker Two: I negotiated to go down to a three-day week. I earn less, obviously, but the time I've gained is priceless. I finally have space to breathe. Speaker Three: The big one for me was leaving the city. We swapped our tiny expensive flat for a cottage in a village. Life is slower, cheaper and, honestly, so much richer. Speaker Four: I made a rule: I don't buy anything new for a whole year, except food and essentials. If something breaks, I repair it or do without. It's been surprisingly liberating, and I've saved a fortune. Speaker Five: I deleted every social media account I had. No more scrolling, no more comparing myself to everyone else. The amount of time and mental energy I've got back is unbelievable.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 0, "A: 'gave away or sold almost everything I owned'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 2, "C: 'go down to a three-day week'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 3, "D: 'leaving the city… a cottage in a village'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 4, "E: 'I don't buy anything new for a whole year'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 1, "B: 'deleted every social media account'."),
    ]),

    ...speakingParts({ p1: "cómo es tu día a día, qué te agobia y qué te gustaría simplificar", p2: "dos estilos de vida (una casa llena de cosas y un espacio minimalista y despejado): compáralos y di cuál preferirías", p3: "qué ayuda más a llevar una vida más sencilla (tener menos cosas, menos compromisos, dejar las redes, gastar menos): comentadlo y elegid lo más eficaz", p4: "la vida moderna: si tenemos demasiadas cosas, si estamos siempre demasiado ocupados y si 'menos es más'" }),

    SUMMARY("Resumen del Día 33", [
      "Separables: pronombre en medio (turn it on). Inseparables: objeto detrás (look after it). Dos partículas: siempre juntas (put up with it).",
      "Frecuentes: put up with, get by, come across, sort out, cut down on, keep up with, come up with.",
      "Vocabulario cotidiano. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 34", "Escribe 6 frases con phrasal verbs frecuentes. Repasa las flashcards. Mañana: verbos con preposición y colocaciones."),
  ],
};

// ───────────────────────── DÍA 34 ─────────────────────────
const DAY34 = {
  title: "Día 34 — Preposiciones dependientes y colocaciones · La comida y la salud",
  description: "Adjetivos/verbos + preposición fija y colocaciones frecuentes. Vocabulario de comida y salud. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Usar la preposición correcta y las colocaciones naturales.",
    summary: "Preposiciones dependientes y colocaciones; comida/salud; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'depend of'.", "'good in'.", "'make a mistake' vs 'do'."],
    reviewPrompts: ["¿'depend' + qué preposición?", "¿'make' o 'do' a decision?"],
  },
  items: [
    TEXT("🔁 Repaso: phrasal verbs. Hoy las PREPOSICIONES DEPENDIENTES y las COLOCACIONES (combinaciones naturales). Vocabulario: la COMIDA y la SALUD."),
    GRAMMAR("Preposiciones dependientes y colocaciones", `PREPOSICIONES DEPENDIENTES (fijas; tras preposición → -ing):
· ADJETIVOS: good/bad at, interested in, keen on, afraid/scared of, proud of, aware of, responsible for, capable of, similar to, different from, dependent on, guilty of, tired of.
· VERBOS: depend on, rely on, believe in, consist of, insist on, apologise for, accuse of, succeed in, cope with, deal with, concentrate on, approve of, result in, refer to.
COLOCACIONES (combinaciones naturales):
· make: a decision, a mistake, an effort, progress, a difference, a suggestion.
· do: research, damage, harm, exercise, business, homework, your best.
· take: a risk, action, responsibility, advantage, a break, place.
· have: an effect, an impact, an argument, a rest, an influence.
· pay: attention, a compliment, a visit, a fine. · reach: a decision, an agreement, a conclusion.
⚠️ ❌ depend of → depend ON. ❌ make a research → do research. ❌ do a mistake → make a mistake.`),
    WARN("Errores típicos del hispanohablante", "· ❌ depend of → ✅ depend on.\n· ❌ good in maths → ✅ good at maths.\n· ❌ do a mistake → ✅ make a mistake.\n· ❌ make a research → ✅ do research. ❌ take a decision (raro) → ✅ make a decision."),
    grammarEx("Use of English — Preposiciones y colocaciones", "Completa con la preposición o el verbo correcto.", [
      fb("It all depends ___ the weather.", ["on"], "depend ON."),
      fb("She's very good ___ solving problems.", ["at"], "good AT."),
      fb("They finally reached an agreement. → They ___ an agreement. (verbo)", ["reached"], "reach an agreement."),
      fb("You should ___ a decision soon. (verbo)", ["make"], "make a decision."),
      fb("Scientists are doing ___ into the disease. (colocación)", ["research"], "do research."),
      mc("Choose:", ["I'm not capable to do it.", "I'm not capable of doing it.", "I'm not capable of do it."], 1, "capable OF + -ing."),
      fb("Smoking can ___ serious harm to your health. (verbo)", ["do", "cause"], "do harm."),
    ]),
    GRAMMAR("Vocabulario del día — La comida y la salud", "Léxico de comida y salud (B2)."),
    deck("B2 S7D34 — Comida y salud", [
      ["nutritious", "nutritivo/a", "It's a cheap but nutritious meal.", "adjetivo", "njuˈtrɪʃəs"],
      ["balanced diet", "dieta equilibrada", "A balanced diet is essential.", "colocación", "ˌbælənst ˈdaɪət"],
      ["processed food", "comida procesada", "Cut down on processed food.", "colocación", "ˈprəʊsest fuːd"],
      ["cut out", "eliminar (de la dieta)", "I've cut out sugar completely.", "phrasal verb", "kʌt ˈaʊt"],
      ["craving", "antojo", "I had a sudden craving for chocolate.", "sustantivo", "ˈkreɪvɪŋ"],
      ["binge", "atracón / darse un atracón", "I binged on crisps last night.", "sustantivo/verbo", "bɪndʒ"],
      ["portion", "ración", "The portions are enormous.", "sustantivo", "ˈpɔːʃn"],
      ["organic", "ecológico/a / orgánico", "We buy organic vegetables.", "adjetivo", "ɔːˈɡænɪk"],
      ["addictive", "adictivo/a", "Sugar is highly addictive.", "adjetivo", "əˈdɪktɪv"],
      ["moderation", "moderación", "Everything in moderation.", "sustantivo", "ˌmɒdəˈreɪʃn"],
    ]),
    vocabEx("Vocabulario — La comida y la salud", "Elige la opción correcta.", [
      mc("Food that provides the nutrients you need is ___.", ["nutritious", "processed", "addictive"], 0, "nutritious."),
      mc("Food that has been industrially prepared is ___.", ["processed food", "organic food", "a balanced diet"], 0, "processed food."),
      mc("A strong sudden desire for a particular food is a ___.", ["craving", "portion", "moderation"], 0, "craving."),
      mc("To remove a food from your diet completely is to ___ it.", ["cut out", "cut down", "binge"], 0, "cut out."),
      mc("Doing something in a sensible, limited way is doing it in ___.", ["moderation", "excess", "craving"], 0, "moderation."),
      mc("Something you feel a strong need to keep consuming is ___.", ["addictive", "nutritious", "organic"], 0, "addictive."),
    ]),

    ...uoe({
      p1: {
        title: "Why healthy eating is so hard",
        text: "We all know, more or (1)___, what we should eat: more vegetables, less sugar, more home cooking, fewer processed foods. Why, then, is healthy eating so difficult? Part of the answer lies in the food itself. Much processed food is deliberately engineered to be almost (2)___, combining sugar, salt and fat in proportions that our brains find irresistible. Faced (3)___ such food, willpower alone is often no match. But the deeper problem may be that we rely (4)___ heavily on willpower in the first place. Research suggests that lasting change comes not from resisting temptation but from removing it. It is far easier to (5)___ a craving if the tempting food is not in the house. Similarly, small changes to our environment — using smaller plates, keeping fruit visible — can make a bigger (6)___ than any amount of self-discipline. The lesson is that healthy eating is less about (7)___ heroic willpower and more about designing a life in which the healthy choice is also the easy one. In (8)___, as in so much else, everything should be done in moderation — including, perhaps, moderation itself.",
        q: [
          mc("(1)", ["less", "least", "little", "few"], 0, "'more or less'."),
          mc("(2)", ["addictive", "nutritious", "processed", "organic"], 0, "'almost addictive'."),
          mc("(3)", ["with", "by", "to", "against"], 0, "'Faced with such food'."),
          mc("(4)", ["too", "very", "so", "much"], 0, "'rely too heavily on willpower'."),
          mc("(5)", ["resist", "avoid", "reject", "refuse"], 0, "'resist a craving'."),
          mc("(6)", ["difference", "change", "effect", "impact"], 0, "'make a bigger difference'."),
          mc("(7)", ["having", "showing", "using", "possessing"], 0, "'about having heroic willpower'."),
          mc("(8)", ["eating", "diet", "food", "health"], 0, "'In eating, as in so much else'."),
        ],
      },
      p2: {
        title: "The diet industry's dirty secret",
        text: "The diet industry is worth billions, and it depends (1)___ a single, deeply uncomfortable fact: for the vast majority of people, diets do not work. Study (2)___ study has shown that while most people can lose weight in the short term, the great majority (3)___ it all back, and often more, within a few years. The industry, of course, has no interest (4)___ you knowing this. A diet that worked permanently would, after all, put it out of business. The truth, according to most nutritionists, is that there is no magic solution, no secret trick. Sustainable health comes not (5)___ dramatic short-term diets but from small, permanent changes to how we live: eating a bit (6)___ vegetables, moving a bit more, sleeping a bit better. These changes are unglamorous and slow, which is precisely why they are so hard to (7)___. But they are also the only thing that actually works. The next time you are tempted by a miracle diet, it is worth remembering that if it really worked, you would (8)___ heard of it long ago.",
        q: [
          fb("(1)", ["on"], "'depends on a single fact'."),
          fb("(2)", ["after"], "'Study after study'."),
          fb("(3)", ["put"], "'put it all back'."),
          fb("(4)", ["in"], "'no interest in you knowing'."),
          fb("(5)", ["from"], "'comes not from dramatic diets'."),
          fb("(6)", ["more"], "'a bit more vegetables'."),
          fb("(7)", ["sell"], "'so hard to sell'."),
          fb("(8)", ["have"], "'you would have heard of it'."),
        ],
      },
      p3: {
        title: "The rise of ultra-processed food",
        text: "Perhaps the most (1)___ change in the human diet over the last century has been the rise of ultra-processed food: industrially manufactured products bearing little (2)___ to anything found in nature. These foods now make up a large and growing proportion of what many people eat, and there is mounting (3)___ that they are doing us serious harm. Unlike whole foods, ultra-processed products are typically high in sugar, salt and unhealthy fats, and low in the (4)___ our bodies actually need. Worse, many are deliberately designed to be as (5)___ as possible, overriding our natural sense of fullness so that we eat far more than we should. The (6)___ have been dramatic: rates of obesity and related diseases have risen sharply in exactly the countries where these foods are most common. None of this means the occasional treat is (7)___; the problem is one of proportion. When ultra-processed products replace, rather than merely supplement, real food, the (8)___ to our health is profound.",
        items: [
          { root: "signify", accepted: ["significant"], hint: "adjetivo → significant." },
          { root: "resemble", accepted: ["resemblance"], hint: "sustantivo → resemblance." },
          { root: "evident", accepted: ["evidence"], hint: "sustantivo → evidence." },
          { root: "nutrition", accepted: ["nutrients"], hint: "'the nutrients our bodies need' → nutrients." },
          { root: "addict", accepted: ["addictive"], hint: "adjetivo → addictive." },
          { root: "consequence", accepted: ["consequences"], hint: "sustantivo plural → consequences." },
          { root: "harm", accepted: ["harmful"], hint: "'is harmful' → harmful." },
          { root: "damage", accepted: ["damage"], hint: "'the damage to our health' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — preposiciones y colocaciones",
        items: [
          { s1: "The result of the decision is up to you.", key: "DEPENDS", s2: "The decision ___ you.", accepted: ["depends on"], explanation: "depend on." },
          { s1: "She's very skilled at cooking.", key: "GOOD", s2: "She's very ___ cooking.", accepted: ["good at"], explanation: "good at + -ing." },
          { s1: "They finally came to an agreement.", key: "REACHED", s2: "They finally ___ .", accepted: ["reached an agreement"], explanation: "reach an agreement." },
          { s1: "You need to decide soon.", key: "MAKE", s2: "You need to ___ soon.", accepted: ["make a decision"], explanation: "make a decision." },
          { s1: "Eating too much sugar can harm your health.", key: "DO", s2: "Eating too much sugar can ___ your health.", accepted: ["do harm to", "harm"], explanation: "do harm to." },
          { s1: "I'm not able to solve this on my own.", key: "CAPABLE", s2: "I'm not ___ this on my own.", accepted: ["capable of solving"], explanation: "capable of + -ing." },
        ],
      },
      p5: {
        title: "The doctor who prescribed vegetables",
        text: "Dr Sarah Whitfield had been a family doctor for over twenty years, and for most of that time she had done what family doctors do: she diagnosed illnesses and prescribed medicines. Increasingly, however, she had come to feel that she was fighting a losing battle. Day after day, she saw patients suffering from conditions — type 2 diabetes, heart disease, obesity — that were, she knew, largely caused by how they ate and lived. She could prescribe pills to manage the symptoms, but the underlying cause remained, and her patients rarely got better. Something, she decided, had to change.\n\nThe experiment she began was, at the time, considered eccentric, even irresponsible, by some of her colleagues. Instead of simply prescribing medication, she began to 'prescribe' lifestyle changes: specific, practical, achievable steps towards eating better and moving more. Crucially, she did not simply tell her patients to 'eat healthily' — advice that everyone knows and almost no one follows. Instead, she worked with each patient to make small, realistic changes, and, most importantly, she followed up, checking on their progress and adjusting the plan. She even set up a scheme allowing some patients to be prescribed fresh vegetables, subsidised by the practice.\n\nThe results, over several years, were remarkable. Many of her patients, following her programme, were able to reduce or even completely come off the medication they had been taking for years. Their weight fell, their blood pressure improved, and, just as importantly, they reported feeling better than they had in decades. Dr Whitfield had discovered what a growing number of doctors now accept: that for many chronic conditions, changes to diet and lifestyle are not merely helpful additions to medical treatment, but can be more powerful than any drug.\n\nDr Whitfield is careful not to overstate her case. Medicine, she stresses, saves countless lives, and there is no question of abandoning it. But her experience points to a profound shift now taking place in how we think about health. For too long, she argues, we have treated the body like a machine to be repaired when it breaks down, reaching always for the pill or the operation. What her patients taught her is that health is not primarily something done to us by doctors, but something we largely create, or destroy, through the countless small choices of our daily lives. 'The most powerful medicine I have,' she says, 'was never in my prescription pad. It was on my patients' plates all along.'",
        q: [
          mc("What did Dr Whitfield increasingly feel she was doing?", ["Curing patients.", "Fighting a losing battle.", "Wasting money.", "Getting rich."], 1, "'she was fighting a losing battle'."),
          mc("What caused most of the conditions she saw?", ["Bad luck.", "How people ate and lived.", "Genetics.", "Infections."], 1, "'largely caused by how they ate and lived'."),
          mc("What did she begin to 'prescribe' instead of just medication?", ["More pills.", "Lifestyle changes.", "Rest.", "Surgery."], 1, "'she began to \"prescribe\" lifestyle changes'."),
          mc("What was crucial about her method?", ["It was vague.", "She made small, realistic changes and followed up.", "She told patients to 'eat healthily'.", "She used only drugs."], 1, "'small, realistic changes… she followed up'."),
          mc("What were many patients able to do?", ["Take more medication.", "Reduce or come off their medication.", "Nothing.", "Get worse."], 1, "'reduce or even completely come off the medication'."),
          mc("What does Dr Whitfield say her most powerful medicine was?", ["Pills.", "On her patients' plates.", "Surgery.", "Advice."], 1, "'It was on my patients' plates all along'."),
        ],
      },
      p6: {
        title: "The truth about breakfast",
        text: "'Breakfast is the most important meal of the day.' It is one of the most widely repeated pieces of health advice in the world. (1)___ Most of us have heard it since childhood and simply accept it as established fact.\n\nThe reality, as is so often the case, is more complicated. (2)___ When you trace this famous claim back to its origins, you find something rather surprising.\n\nMuch of the 'research' promoting the importance of breakfast, it turns out, was funded by the very companies that make breakfast cereals. (3)___ It is not hard to see why a cereal manufacturer might be keen to convince the world that skipping breakfast is dangerous.\n\nThis does not necessarily mean the advice is wrong. (4)___ For some people, particularly children and those with certain health conditions, a good breakfast may genuinely be beneficial.\n\nBut the confident, universal claim that everyone must eat breakfast is not, in fact, well supported by independent evidence. (5)___ For many healthy adults, whether or not to eat breakfast appears to make little difference, and some may even benefit from skipping it. (6)___ The wider lesson is one worth remembering: that even our most cherished 'facts' about health deserve to be questioned, and that we should always ask who is paying for the advice we are given.",
        options: [
          "It has the ring of unquestionable common sense.",              // A -> gap 1
          "The famous slogan has a distinctly commercial history.",       // B -> gap 2
          "The conflict of interest could hardly be clearer.",            // C -> gap 3
          "The picture varies enormously from person to person.",         // D -> gap 4
          "The scientific case is far weaker than the slogan suggests.",   // E -> gap 5
          "Follow the money, in other words, before you follow the advice.", // F -> gap 6
          "Everyone must eat a large breakfast every single day.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: suena a sentido común."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el eslogan tiene historia comercial."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el conflicto de interés es claro."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: varía de persona a persona."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la evidencia es más débil que el eslogan."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: sigue el dinero antes que el consejo."),
        ],
      },
      p7: {
        title: "Four people talk about their diet",
        text: "Read what four people say about how they eat.\n\nA) NADIA: I cut out sugar completely two years ago, and it was the hardest thing I've ever done — the cravings were brutal for the first month. But now I don't miss it at all, and I feel incomparably better: more energy, clearer skin, steadier moods. It genuinely changed my life. Sugar, I'm convinced, is a genuine addiction.\n\nB) TOM: Honestly, I think we've become far too obsessed with food. My grandparents ate whatever they liked, in moderation, and lived into their nineties. I refuse to treat eating as a source of anxiety. A balanced diet, mostly home-cooked, with the occasional treat — that's it. Everything in moderation, including moderation.\n\nC) PRIYA: I went vegetarian for the environment, not for my health, though it's improved that too. I couldn't square my love of animals and my concern for the planet with eating meat every day. It's a small thing, one person's choices, but I feel I have to live according to my values, even if it makes no difference to the wider world.\n\nD) SAM: I'm a firm believer in cooking from scratch. I almost never eat processed food; I'd rather spend an hour making a proper meal than two minutes microwaving something out of a packet. Yes, it takes time, but I know exactly what's in my food, it tastes far better, and honestly, cooking relaxes me. It's the best part of my day.",
        q: [
          mc("Who eliminated a specific food they consider addictive?", ["A", "B", "C", "D"], 0, "Nadia: 'cut out sugar… a genuine addiction'."),
          mc("Who thinks we worry about food too much?", ["A", "B", "C", "D"], 1, "Tom: 'become far too obsessed with food'."),
          mc("Who changed their diet mainly for ethical reasons?", ["A", "B", "C", "D"], 2, "Priya: 'for the environment… live according to my values'."),
          mc("Who prefers to cook everything from scratch?", ["A", "B", "C", "D"], 3, "Sam: 'a firm believer in cooking from scratch'."),
          mc("Who found the first month of their change very difficult?", ["A", "B", "C", "D"], 0, "Nadia: 'the cravings were brutal for the first month'."),
          mc("Who cites long-lived relatives who ate in moderation?", ["A", "B", "C", "D"], 1, "Tom: 'My grandparents… lived into their nineties'."),
          mc("Who admits their choice may not affect the wider world?", ["A", "B", "C", "D"], 2, "Priya: 'even if it makes no difference to the wider world'."),
          mc("Who finds cooking relaxing?", ["A", "B", "C", "D"], 3, "Sam: 'cooking relaxes me'."),
          mc("Who avoids treating eating as a source of anxiety?", ["A", "B", "C", "D"], 1, "Tom: 'I refuse to treat eating as a source of anxiety'."),
          mc("Who wants to know exactly what is in their food?", ["A", "B", "C", "D"], 3, "Sam: 'I know exactly what's in my food'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Governments should do more to encourage people to eat healthily.'\nComenta estos dos aspectos y añade uno propio:\n1. education (la educación)\n2. personal freedom (la libertad individual)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to eat well without giving up the food you love' — da consejos prácticos.\n· RESEÑA de un restaurante o de un producto de alimentación: descríbelo y di si lo recomiendas.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una nutricionista, la Dra. Reyes (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a nutritionist, Dr Reyes. Interviewer: Dr Reyes, what's the biggest myth about healthy eating? Dr Reyes: That it has to be complicated or expensive. It really doesn't. The basic advice fits on a postcard: eat mostly plants, not too much, and cook it yourself. Everything else is detail. Interviewer: What about all the diet trends? Dr Reyes: I'd ignore almost all of them. The fact that a new 'miracle diet' appears every year is proof that none of them works. If one did, we wouldn't need the next. Interviewer: Is willpower the key to eating well? Dr Reyes: Absolutely not, and this is crucial. Relying on willpower is a recipe for failure. The trick is to change your environment, not to fight it. Don't keep junk food in the house, and you won't have to resist it. Interviewer: What's the single worst thing in the modern diet? Dr Reyes: Ultra-processed food, without a doubt. It's engineered to be almost impossible to stop eating, and it's replacing real food in millions of homes. Interviewer: So should we never eat it? Dr Reyes: No, that's too extreme. The occasional treat is fine. The problem is proportion — when processed food becomes the main event rather than the exception. Interviewer: Any final advice? Dr Reyes: Yes: don't diet. Diets fail. Instead, make small, permanent changes you can actually stick to. Boring, I know, but it's the only thing that works. Interviewer: Thank you, Dr Reyes.", [
      mc("1. What is the biggest myth about healthy eating?", ["That it's easy.", "That it has to be complicated or expensive.", "That it's boring."], 1, "'That it has to be complicated or expensive'."),
      mc("2. What does the appearance of new diets every year prove?", ["That they work.", "That none of them works.", "That people are lazy."], 1, "'proof that none of them works'."),
      mc("3. What does she say about willpower?", ["It's the key.", "Relying on it is a recipe for failure.", "It's overrated slightly."], 1, "'Relying on willpower is a recipe for failure'."),
      mc("4. What is the single worst thing in the modern diet?", ["Sugar.", "Ultra-processed food.", "Salt."], 1, "'Ultra-processed food, without a doubt'."),
      mc("5. Should we never eat processed food?", ["Never.", "No, the occasional treat is fine.", "As much as possible."], 1, "'No, that's too extreme. The occasional treat is fine'."),
      mc("6. What is the real problem with processed food?", ["It's expensive.", "Proportion — when it becomes the main event.", "It's illegal."], 1, "'The problem is proportion'."),
      mc("7. What is her final advice?", ["Go on a strict diet.", "Make small, permanent changes.", "Eat less often."], 1, "'make small, permanent changes you can actually stick to'."),
    ]),

    ...speakingParts({ p1: "cómo comes, si intentas comer sano y qué te cuesta más cambiar", p2: "dos formas de comer (una comida rápida procesada y una comida casera equilibrada): compáralas y di qué se gana y se pierde", p3: "qué ayuda más a comer sano (cocinar en casa, no tener comida basura en casa, educación, precios más justos de la comida sana): comentadlo y elegid lo mejor", p4: "la comida y la salud: si comer sano es difícil, si los gobiernos deberían intervenir y si estamos demasiado obsesionados con la comida" }),

    SUMMARY("Resumen del Día 34", [
      "Preposiciones dependientes: depend on, good at, capable of, interested in, responsible for… (tras prep. → -ing).",
      "Colocaciones: make a decision/mistake, do research/harm, take a risk, have an effect, reach an agreement.",
      "Vocabulario de comida y salud. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 35", "Escribe 6 frases con colocaciones (make/do/take/have + sustantivo). Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 35 ─────────────────────────
const DAY35 = {
  title: "Día 35 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de gerundios/infinitivos, phrasal verbs, preposiciones y colocaciones. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 7.",
  pedagogy: {
    objective: "Consolidar los patrones verbales y el léxico funcional del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 8."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 7 del B2. Consolidas gerundios/infinitivos, verbos con cambio de significado, phrasal verbs, preposiciones dependientes y colocaciones. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 7", `1) Gerundio (+ enjoy/avoid/look forward to) vs infinitivo (+ want/decide/manage).
2) Verbos con cambio de significado: stop/remember/try/regret + -ing / to.
3) Phrasal verbs: separables, inseparables, con dos partículas (put up with).
4) Preposiciones dependientes (depend on, good at) y colocaciones (make a decision, do research).`),
    grammarEx("Use of English — Repaso mixto de la Semana 7", "Completa o elige.", [
      fb("I enjoy ___ (cook) at the weekend.", ["cooking"], "enjoy + -ing."),
      fb("She managed ___ ___ (finish) on time.", ["to finish"], "manage + to."),
      fb("Remember ___ ___ (lock) the door tonight. (obligación)", ["to lock"], "remember to + inf."),
      fb("He gave up his job and stopped ___ (work). (dejar de)", ["working"], "stop + -ing."),
      fb("I can't ___ ___ ___ his rudeness. (soportar)", ["put up with"], "put up with."),
      fb("It all depends ___ the weather.", ["on"], "depend on."),
      fb("You should ___ a decision soon.", ["make"], "make a decision."),
      mc("Choose:", ["I'm capable to do it.", "I'm capable of doing it.", "I'm capable of do it."], 1, "capable of + -ing."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 7", "Repasa los mazos (trabajo, memoria, vida cotidiana, comida/salud)."),
    vocabEx("Vocabulario — Repaso de la Semana 7", "Elige la opción correcta.", [
      mc("Exhaustion caused by too much work:", ["burnout", "workload", "promotion"], 0, "burnout."),
      mc("A clear, detailed memory:", ["vivid", "absent-minded", "nostalgic"], 0, "vivid."),
      mc("To manage to live with limited money:", ["get by", "put up with", "sort out"], 0, "get by."),
      mc("Food that provides the nutrients you need:", ["nutritious", "processed", "addictive"], 0, "nutritious."),
      mc("To lose your job because it's no longer needed:", ["be made redundant", "be self-employed", "be promoted"], 0, "redundant."),
      mc("To help someone remember something is to ___ their memory:", ["jog", "recall", "slip"], 0, "jog."),
      mc("To tolerate something annoying:", ["put up with it", "get by", "make do"], 0, "put up with."),
      mc("A strong sudden desire for a food:", ["craving", "portion", "moderation"], 0, "craving."),
    ]),

    ...uoe({
      p1: {
        title: "The pursuit of happiness",
        text: "Few things are as universally (1)___ as happiness, and yet few are so poorly understood. We spend our lives (2)___ it, often assuming that it lies just beyond the next achievement, the next purchase, the next relationship. Yet psychologists who study happiness have reached some surprising (3)___. The things we believe will make us happy — money, status, possessions — turn out to have far (4)___ effect than we imagine, at least once our basic needs are met. What genuinely matters, the research consistently shows, is not what we have but how we (5)___ our time: strong relationships, meaningful work, a sense of purpose, and the simple ability to be (6)___ in the present moment. Perhaps the greatest obstacle to happiness is the very act of (7)___ it so relentlessly. Those who chase happiness directly often find it slips through their fingers, (8)___ those who focus on living well tend to find that happiness arrives, quietly, as a by-product.",
        q: [
          mc("(1)", ["desired", "wanted", "sought", "wished"], 0, "'universally desired'."),
          mc("(2)", ["pursuing", "chasing", "seeking", "following"], 0, "'pursuing it'."),
          mc("(3)", ["conclusions", "results", "findings", "answers"], 0, "'surprising conclusions'."),
          mc("(4)", ["less", "little", "least", "lower"], 0, "'far less effect'."),
          mc("(5)", ["spend", "use", "pass", "fill"], 0, "'how we spend our time'."),
          mc("(6)", ["present", "here", "attentive", "focused"], 0, "'be present in the moment'."),
          mc("(7)", ["pursuing", "seeking", "chasing", "wanting"], 2, "'the act of chasing it'."),
          mc("(8)", ["while", "whereas", "although", "though"], 0, "'while those who focus on living well'."),
        ],
      },
      p2: {
        title: "Why we procrastinate",
        text: "Procrastination — the habit of putting (1)___ tasks we know we should do — is one of the most common of human failings, and one of the most misunderstood. We tend to think of it (2)___ a simple matter of laziness or poor time management. In fact, psychologists now believe it (3)___ far more to do with emotion. When we procrastinate, we are usually avoiding not the task itself, (4)___ the unpleasant feelings it stirs up: anxiety, boredom, self-doubt, or the fear of failing. Putting the task (5)___ provides immediate relief from these feelings, which is precisely why the habit is so hard to break. Understanding this changes how we should tackle it. Instead of simply telling ourselves to try (6)___, which rarely works, we should ask what emotion we are avoiding, and address that. It also helps to (7)___ a daunting task down into small, manageable steps, since it is usually the sheer scale of a job that triggers our avoidance. Above all, we should treat ourselves with a little kindness. Research shows, surprisingly, that people who forgive themselves for procrastinating are (8)___ likely to do it again than those who beat themselves up about it.",
        q: [
          fb("(1)", ["off"], "'putting off tasks'."),
          fb("(2)", ["as"], "'think of it as'."),
          fb("(3)", ["has"], "'it has far more to do with emotion'."),
          fb("(4)", ["but"], "'not the task itself, but the feelings'."),
          fb("(5)", ["off"], "'Putting the task off'."),
          fb("(6)", ["harder"], "'try harder'."),
          fb("(7)", ["break"], "'break a task down'."),
          fb("(8)", ["less"], "'are less likely to do it again'."),
        ],
      },
      p3: {
        title: "The science of habit change",
        text: "For anyone who has ever tried and failed to change a (1)___ habit, the latest research offers both an explanation and a solution. The reason willpower so often (2)___ us is that habits are not really decisions at all; they are automatic behaviours, stored in a part of the brain that operates below the level of (3)___ awareness. Trying to break a habit through willpower alone is like trying to stop a river with your bare hands. A far more (4)___ approach is to work with the brain rather than against it. Every habit, scientists have discovered, follows a simple loop: a cue triggers a (5)___, which is followed by a reward. To change a habit, you do not need to fight the whole loop; you simply need to keep the cue and the reward while changing the (6)___ in between. Someone who reaches for a cigarette when stressed, for example, might learn to reach for a walk instead, satisfying the same underlying (7)___ in a healthier way. It is not easy, and it takes patience. But understanding the (8)___ of a habit is the first, essential step towards changing it.",
        items: [
          { root: "persist", accepted: ["persistent"], hint: "adjetivo → persistent." },
          { root: "fail", accepted: ["fails"], hint: "'willpower fails us' (verbo)." },
          { root: "conscious", accepted: ["conscious"], hint: "'conscious awareness' (adjetivo)." },
          { root: "effect", accepted: ["effective"], hint: "adjetivo → effective." },
          { root: "route", accepted: ["routine"], hint: "'triggers a routine' → routine." },
          { root: "behave", accepted: ["behaviour"], hint: "sustantivo → behaviour." },
          { root: "need", accepted: ["need"], hint: "'the same underlying need' (sustantivo)." },
          { root: "mechanic", accepted: ["mechanics"], hint: "'the mechanics of a habit' → mechanics." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 7",
        items: [
          { s1: "I'm really keen to see you next week.", key: "FORWARD", s2: "I'm ___ you next week.", accepted: ["looking forward to seeing"], explanation: "look forward to + -ing." },
          { s1: "Please don't forget to send the email.", key: "REMEMBER", s2: "Please ___ the email.", accepted: ["remember to send"], explanation: "remember to + inf." },
          { s1: "I can't tolerate this noise any longer.", key: "PUT", s2: "I can't ___ this noise any longer.", accepted: ["put up with"], explanation: "put up with." },
          { s1: "The success of the plan is up to the weather.", key: "DEPENDS", s2: "The success of the plan ___ the weather.", accepted: ["depends on"], explanation: "depend on." },
          { s1: "We need to decide about this today.", key: "MAKE", s2: "We need to ___ about this today.", accepted: ["make a decision"], explanation: "make a decision." },
          { s1: "She quit drinking coffee last year.", key: "STOPPED", s2: "She ___ coffee last year.", accepted: ["stopped drinking"], explanation: "stop + -ing." },
        ],
      },
      p5: {
        title: "The teacher who taught herself to be brave",
        text: "Nobody who met Rebecca Adams in the classroom, where she held a room of thirty teenagers effortlessly in the palm of her hand, could ever have guessed that she was, by nature, painfully shy. Her confidence, which seemed so natural and complete, was in fact the hard-won result of years of deliberate effort, and it is a story she now shares freely with her students, because she believes it is the most important lesson she can teach them.\n\nAs a child and a young woman, Rebecca had been crippled by shyness. She would go to almost any length to avoid speaking in public, and the mere thought of walking into a room full of strangers filled her with dread. When, almost by accident, she found herself training to be a teacher, she was convinced she had made a terrible mistake. How could someone who could barely order a coffee without blushing possibly stand up and command a classroom?\n\nWhat saved her was a piece of advice from an older colleague, who had noticed her terror. 'Courage,' this woman told her, 'is not the absence of fear. It is feeling the fear and doing the thing anyway. And here is the secret nobody tells you: if you act brave, often enough and for long enough, you eventually become brave. The feeling follows the action, not the other way round.' Rebecca decided, with nothing to lose, to test this theory. Every day, she forced herself to do the very things that frightened her most. She volunteered to speak at meetings. She raised her hand. She walked into rooms full of strangers and made herself start conversations.\n\nIt was, she says, agonising at first. But the older woman had been right. Slowly, action by action, the fear began to loosen its grip. The things that had once terrified her became, through sheer repetition, first bearable, then ordinary, then, eventually, almost enjoyable. The shy young woman had not waited to feel brave before acting bravely; she had acted bravely until, one day, she realised the bravery had become real. It is this, above all, that she wants her students to understand: that we are not simply born brave or shy, confident or fearful, but that we can, through patient and repeated action, quite literally teach ourselves to become the people we wish to be.",
        q: [
          mc("What would nobody have guessed about Rebecca in the classroom?", ["That she was strict.", "That she was naturally painfully shy.", "That she was new.", "That she was old."], 1, "'she was, by nature, painfully shy'."),
          mc("How did she feel when training to be a teacher?", ["Excited.", "Convinced she'd made a terrible mistake.", "Confident.", "Bored."], 1, "'convinced she had made a terrible mistake'."),
          mc("What did the older colleague say courage is?", ["The absence of fear.", "Feeling the fear and doing the thing anyway.", "Being born brave.", "Avoiding fear."], 1, "'feeling the fear and doing the thing anyway'."),
          mc("According to the colleague, what follows what?", ["Action follows feeling.", "The feeling follows the action.", "Nothing follows.", "Fear follows courage."], 1, "'The feeling follows the action, not the other way round'."),
          mc("How did the frightening things eventually feel?", ["Worse.", "First bearable, then ordinary, then almost enjoyable.", "The same.", "Impossible."], 1, "'first bearable, then ordinary, then… almost enjoyable'."),
          mc("What does Rebecca most want her students to understand?", ["That shyness is permanent.", "That we can teach ourselves to become who we wish to be.", "That bravery is inborn.", "That fear can't be beaten."], 1, "'we can… teach ourselves to become the people we wish to be'."),
        ],
      },
      p6: {
        title: "The power of tiny changes",
        text: "We tend to believe that changing our lives requires dramatic, heroic action. (1)___ We imagine that transformation must come from a single, momentous decision — a grand resolution to become a completely different person overnight.\n\nThe reality of how people actually change is very different, and far more encouraging. (2)___ Real, lasting change almost never comes from a dramatic gesture; it comes from the patient accumulation of tiny, almost invisible improvements.\n\nConsider the mathematics of small change. (3)___ If you improve at something by just one per cent a day, you will not be one per cent better at the end of the year, but, through the power of compounding, almost forty times better.\n\nThis principle applies to almost everything. (4)___ The person who reads ten pages a day will finish a dozen books a year; the one who saves a little each week will, over decades, accumulate a fortune.\n\nThe implication is genuinely liberating. (5)___ You do not need to transform your entire life tomorrow; you simply need to get slightly better today, and then to do the same again the day after. (6)___ The mightiest of changes, it turns out, is built not from grand gestures but from small, consistent, and endlessly repeated acts.",
        options: [
          "This belief, though inspiring, is largely mistaken.",          // A -> gap 1
          "The truth is quieter, slower and far more powerful.",          // B -> gap 2
          "The numbers, when you examine them, are remarkable.",          // C -> gap 3
          "The same logic transforms every area of our lives.",          // D -> gap 4
          "Nobody is too busy or too ordinary to begin.",                // E -> gap 5
          "Greatness, in the end, is a matter of accumulation.",          // F -> gap 6
          "Only enormous, sudden efforts can ever change anything.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa creencia es errónea."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la verdad es más lenta y potente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los números son notables."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la misma lógica en todo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nadie es demasiado ocupado para empezar."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la grandeza es acumulación."),
        ],
      },
      p7: {
        title: "Four people describe a habit that changed their life",
        text: "Read what four people say about a small habit with a big impact.\n\nA) NADIA: I started writing down three things I was grateful for every night. It sounds trivial, almost embarrassingly so. But it completely rewired how I see my life. Instead of ending each day focused on what went wrong, I now look for what went right. I'm a genuinely happier person, and it cost me nothing.\n\nB) TOM: For me it was a daily walk — just twenty minutes, every morning, no matter the weather. I took it up for my physical health, but the real benefit turned out to be mental. That quiet time to think, before the day's demands begin, has become the foundation of my whole wellbeing. I'd give up almost anything before I gave that up.\n\nC) PRIYA: I decided to read for half an hour before bed instead of scrolling on my phone. The difference to my sleep, and to my mind, has been extraordinary. I fall asleep faster, I feel calmer, and I've read more books this year than in the previous ten combined. Such a small swap, such a huge effect.\n\nD) SAM: My habit was learning to say no. I used to agree to everything, and I was permanently exhausted and resentful. Now, before saying yes to anything, I pause and ask if I really want to do it. Learning to decline gracefully has given me back my time, my energy and, honestly, my life.",
        q: [
          mc("Who started a gratitude practice?", ["A", "B", "C", "D"], 0, "Nadia: 'three things I was grateful for every night'."),
          mc("Whose daily habit is a morning walk?", ["A", "B", "C", "D"], 1, "Tom: 'a daily walk — just twenty minutes'."),
          mc("Who replaced phone-scrolling with reading before bed?", ["A", "B", "C", "D"], 2, "Priya: 'read for half an hour before bed instead of scrolling'."),
          mc("Whose habit was learning to say no?", ["A", "B", "C", "D"], 3, "Sam: 'My habit was learning to say no'."),
          mc("Who now focuses on what went right, not wrong?", ["A", "B", "C", "D"], 0, "Nadia: 'I now look for what went right'."),
          mc("Who found the mental benefit greater than the physical one?", ["A", "B", "C", "D"], 1, "Tom: 'the real benefit turned out to be mental'."),
          mc("Who has read far more books as a result?", ["A", "B", "C", "D"], 2, "Priya: 'more books this year than in the previous ten combined'."),
          mc("Who used to be exhausted from agreeing to everything?", ["A", "B", "C", "D"], 3, "Sam: 'I used to agree to everything… permanently exhausted'."),
          mc("Who describes their habit as almost embarrassingly trivial?", ["A", "B", "C", "D"], 0, "Nadia: 'almost embarrassingly so'."),
          mc("Who says they'd give up almost anything before this habit?", ["A", "B", "C", "D"], 1, "Tom: 'I'd give up almost anything before I gave that up'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Small daily habits matter more than big decisions.'\nComenta estos dos aspectos y añade uno propio:\n1. health (la salud)\n2. success (el éxito)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A small habit that changed my life' — descríbelo y explica su efecto.\n· CARTA a un/a amigo/a que quiere cambiar de vida pero no sabe por dónde empezar: dale consejo sobre empezar poco a poco.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: I finally gave up trying to be perfect, and I've never been more productive. Two. Man: I can't put up with this job much longer; the workload's crushing me. Three. Woman: I remember locking the door — I'm absolutely certain of it. Four. Man: I've cut down on sugar, and honestly, I feel so much better. Five. Woman: I keep forgetting to reply to her messages; it just slips my mind. Six. Man: The whole thing depends on whether we can raise the money. Seven. Woman: I've taken up running, and I'm slowly getting fitter. Eight. Man: The best decision I ever made was learning to say no to things.", [
      mc("1. What did the woman give up?", ["Her job.", "Trying to be perfect.", "Exercise."], 1, "'gave up trying to be perfect'."),
      mc("2. What is the man's problem?", ["His colleagues.", "He can't tolerate the crushing workload.", "His salary."], 1, "'can't put up with this job… workload's crushing me'."),
      mc("3. What is the woman certain of?", ["She forgot the key.", "She remembers locking the door.", "She lost the key."], 1, "'I remember locking the door'."),
      mc("4. What has the man done?", ["Given up exercise.", "Cut down on sugar.", "Started a diet."], 1, "'cut down on sugar'."),
      mc("5. Why doesn't the woman reply?", ["She's angry.", "It slips her mind.", "She's busy."], 1, "'it just slips my mind'."),
      mc("6. What does the whole thing depend on?", ["The weather.", "Whether they can raise the money.", "The time."], 1, "'depends on whether we can raise the money'."),
      mc("7. What has the woman taken up?", ["Swimming.", "Running.", "Cycling."], 1, "'taken up running'."),
      mc("8. What was the man's best decision?", ["Saying yes to everything.", "Learning to say no.", "Working harder."], 1, "'learning to say no to things'."),
    ]),

    ...speakingParts({ p1: "un hábito bueno que tengas o quieras adquirir, y otro que te gustaría dejar", p2: "dos personas con estilos de vida distintos (una muy ocupada y estresada y otra con hábitos tranquilos y saludables): compáralas", p3: "qué pequeño hábito diario cambia más la vida (hacer ejercicio, leer, dormir bien, dar las gracias, aprender a decir que no): comentadlo y elegid el más valioso", p4: "los hábitos y el cambio: si los pequeños hábitos importan más que las grandes decisiones, por qué cuesta cambiar y cómo lograrlo" }),

    SUMMARY("Resumen de la Semana 7 (B2)", [
      "Dominas los patrones verbales (gerundio/infinitivo y cambios de significado), los phrasal verbs y las colocaciones.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los conectores del discurso, los cuantificadores y los artículos avanzados.",
    ]),
    INFO("Mini-simulacro de la Semana 7", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 8."),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "Gerundios, infinitivos y verbos con partícula",
  description: "Patrones verbales (gerundio vs infinitivo), verbos con cambio de significado, phrasal verbs y preposiciones dependientes + colocaciones. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
