/**
 * B2 First · Semana 4 — "La ley, el delito y los modales".
 * Gramática: modales de deducción (presente y pasado), obligación/prohibición,
 * crítica y consejo pasado (should have), y ability/permission en el pasado.
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, in my opinion, the way I see it, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they must be … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 16 ─────────────────────────
const DAY16 = {
  title: "Día 16 — Modales de deducción · El delito y el misterio",
  description: "must/can't/might/could + inf y + have + participio (deducir presente y pasado). Vocabulario de delito. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Deducir con seguridad, imposibilidad o posibilidad en presente y pasado.",
    summary: "Modales de deducción; el delito; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'must to be'.", "'mustn't be' (deducción).", "'must of been'."],
    reviewPrompts: ["¿'seguro que fue' en pasado?", "¿'imposible que sea'?"],
  },
  items: [
    TEXT("🔁 Semana 4. Hoy los MODALES DE DEDUCCIÓN (presente y pasado): sacar conclusiones lógicas. Vocabulario: el DELITO y el MISTERIO."),
    GRAMMAR("Modales de deducción", `PRESENTE (modal + infinitivo sin to):
· must (casi seguro que sí): He isn't answering — he must be busy.
· can't / couldn't (imposible): That can't be right.
· might / may / could (posible): She might be at home.
PASADO (modal + HAVE + participio):
· must have + participio: The ground's wet — it must have rained.
· can't / couldn't have + participio: She can't have finished already.
· might / may / could have + participio: He might have missed the bus.
Con acciones en curso: must be + -ing (present) / must have been + -ing (past).
⚠️ Deducción imposible → CAN'T (no 'mustn't', que es prohibición). 'must HAVE' (no 'must of').`),
    WARN("Errores típicos del hispanohablante", "· ❌ He must to be guilty → ✅ He must be guilty.\n· ❌ It mustn't be true (deducción) → ✅ It can't be true.\n· ❌ must of been → ✅ must have been.\n· ❌ must have went → ✅ must have gone."),
    grammarEx("Use of English — Modales de deducción", "Completa o elige.", [
      mc("He's not answering. He ___ busy.", ["can't be", "must be", "mustn't be"], 1, "seguro → must be."),
      mc("That ___ be the answer — it's impossible.", ["must", "can't", "might"], 1, "imposible → can't."),
      fb("The ground's wet. It ___ ___ ___ (rain). (seguro, pasado)", ["must have rained"], "must have + participio."),
      mc("She ___ finished already — she only started an hour ago.", ["mustn't have", "can't have", "might have"], 1, "imposible → can't have."),
      fb("He's not here. He ___ ___ ___ (miss) the train. (quizás)", ["might have missed", "may have missed", "could have missed"], "might/may/could have."),
      mc("Choose:", ["They must have saw it.", "They must have seen it.", "They must of seen it."], 1, "participio: seen."),
      fb("She looks exhausted. She ___ ___ ___ (work) all night. (seguro, en curso)", ["must have been working"], "must have been + -ing."),
    ]),
    GRAMMAR("Vocabulario del día — El delito", "Léxico de delito (B2)."),
    deck("B2 S4D16 — El delito", [
      ["commit a crime", "cometer un delito", "He was accused of committing a crime.", "colocación", "kəˈmɪt ə ˈkraɪm"],
      ["suspect", "sospechoso/a / sospechar", "The police questioned the suspect.", "sustantivo/verbo", "ˈsʌspekt"],
      ["witness", "testigo / presenciar", "A witness saw the whole thing.", "sustantivo/verbo", "ˈwɪtnəs"],
      ["evidence", "pruebas", "There wasn't enough evidence.", "sustantivo", "ˈevɪdəns"],
      ["burglary", "robo (en una casa)", "There's been a burglary next door.", "sustantivo", "ˈbɜːɡləri"],
      ["fraud", "fraude / estafa", "She was found guilty of fraud.", "sustantivo", "frɔːd"],
      ["get away with", "salirse con la suya / quedar impune", "He thought he'd get away with it.", "phrasal verb", "ɡet əˈweɪ wɪð"],
      ["convict", "condenar / declarar culpable", "He was convicted of theft.", "verbo", "kənˈvɪkt"],
      ["alibi", "coartada", "The suspect had a solid alibi.", "sustantivo", "ˈæləbaɪ"],
      ["clue", "pista", "The detective found a vital clue.", "sustantivo", "kluː"],
    ]),
    vocabEx("Vocabulario — El delito", "Elige la opción correcta.", [
      mc("A person the police think may be guilty is a ___.", ["suspect", "witness", "clue"], 0, "suspect."),
      mc("Someone who saw a crime happen is a ___.", ["witness", "suspect", "alibi"], 0, "witness."),
      mc("Breaking into a house to steal is ___.", ["burglary", "fraud", "an alibi"], 0, "burglary."),
      mc("Proof that you were elsewhere is an ___.", ["alibi", "evidence", "clue"], 0, "alibi."),
      mc("To escape punishment for a crime is to ___ it.", ["get away with", "commit", "convict"], 0, "get away with."),
      mc("To find someone officially guilty is to ___ them.", ["convict", "witness", "suspect"], 0, "convict."),
    ]),

    ...uoe({
      p1: {
        title: "The perfect crime",
        text: "Detective novels have long been fascinated by the idea of the 'perfect crime' — one that the criminal (1)___ away with entirely, leaving no clue behind. In reality, however, such crimes are vanishingly (2)___. The problem, as any detective will tell you, is that it is almost impossible to interact with the physical world without leaving some (3)___ of your presence: a fingerprint, a fibre, a footprint. Even the cleverest criminal is (4)___ to make a single small mistake, and a single mistake is often all the police need. Modern forensic science has made things harder still. A (5)___ that would once have gone undetected can now be linked to a suspect through the tiniest trace of DNA. Perhaps this is why the perfect crime remains largely a (6)___ of fiction. In the real world, the (7)___ of getting caught grow with every passing year, and the criminal who believes they have thought of everything has almost (8)___ overlooked something.",
        q: [
          mc("(1)", ["gets", "runs", "walks", "takes"], 0, "'gets away with'."),
          mc("(2)", ["rare", "few", "little", "scarce"], 0, "'vanishingly rare'."),
          mc("(3)", ["trace", "track", "mark", "sign"], 0, "'some trace of your presence'."),
          mc("(4)", ["bound", "likely", "sure", "certain"], 0, "'is bound to make a mistake'."),
          mc("(5)", ["crime", "criminal", "clue", "suspect"], 0, "'A crime that would once have gone undetected'."),
          mc("(6)", ["matter", "thing", "subject", "case"], 0, "'a matter of fiction'."),
          mc("(7)", ["odds", "chances", "risks", "dangers"], 1, "'the chances of getting caught'."),
          mc("(8)", ["certainly", "surely", "definitely", "clearly"], 0, "'has almost certainly overlooked'."),
        ],
      },
      p2: {
        title: "An open-and-shut case?",
        text: "The evidence against the accused man seemed overwhelming. He had been seen near the scene, he had (1)___ motive, and he could not fully account for his movements on the night in question. To the police, it looked like an open-and-shut case: he (2)___ have done it. Yet one detective was not convinced. Something, she felt, did not add (3)___. If the man really (4)___ committed the burglary, why had he made no attempt to hide the very jewellery he was accused of stealing? A guilty man, she reasoned, could not possibly (5)___ been so careless. Reopening the case, she eventually uncovered a second suspect (6)___ alibi turned out to be false. It emerged that the first man (7)___ have been telling the truth all along; he had simply been in the wrong place at the wrong time. Had the detective not trusted her instinct, an innocent man might well (8)___ spent years in prison for a crime he did not commit.",
        q: [
          fb("(1)", ["a"], "'he had a motive'."),
          fb("(2)", ["must"], "'he must have done it'."),
          fb("(3)", ["up"], "'did not add up'."),
          fb("(4)", ["had"], "'if the man really had committed'."),
          fb("(5)", ["have"], "'could not possibly have been'."),
          fb("(6)", ["whose"], "'a second suspect whose alibi'."),
          fb("(7)", ["might", "may", "could"], "'might have been telling the truth'."),
          fb("(8)", ["have"], "'might well have spent years'."),
        ],
      },
      p3: {
        title: "The rise of forensic science",
        text: "Few developments have transformed the fight against crime as (1)___ as forensic science. A century ago, a criminal (2)___ could avoid being seen by any witness had an excellent chance of escaping (3)___. Today, thanks to advances in DNA analysis, that same criminal would leave behind a (4)___ trail of evidence, invisible to the naked eye but (5)___ to the modern laboratory. This has had two profound effects. On one hand, it has made the (6)___ of the guilty far more likely, bringing justice to victims who might once have had none. On the other, it has led to the (7)___ of many people wrongly convicted in the past, whose innocence could finally be (8)___ by re-examining old evidence with new techniques.",
        items: [
          { root: "profound", accepted: ["profoundly"], hint: "adverbio → profoundly." },
          { root: "who", accepted: ["who"], hint: "'a criminal who could avoid' (relativo)." },
          { root: "punish", accepted: ["punishment"], hint: "sustantivo → punishment." },
          { root: "damn", accepted: ["damning"], hint: "'a damning trail of evidence' → damning." },
          { root: "visible", accepted: ["visible"], hint: "'visible to the laboratory' (adjetivo)." },
          { root: "convict", accepted: ["conviction"], hint: "sustantivo → conviction." },
          { root: "release", accepted: ["release"], hint: "'the release of many people' (sustantivo)." },
          { root: "prove", accepted: ["proved", "proven"], hint: "'could be proved/proven' (participio)." },
        ],
      },
      p4: {
        title: "Transformaciones — deducción",
        items: [
          { s1: "I'm sure he stole it.", key: "MUST", s2: "He ___ it.", accepted: ["must have stolen"], explanation: "must have + participio." },
          { s1: "It's impossible that she saw us.", key: "SEEN", s2: "She ___ us.", accepted: ["can't have seen", "couldn't have seen"], explanation: "can't have + participio." },
          { s1: "Perhaps they left through the window.", key: "MIGHT", s2: "They ___ through the window.", accepted: ["might have left", "may have left"], explanation: "might have + participio." },
          { s1: "I'm certain that's not the right key.", key: "BE", s2: "That ___ the right key.", accepted: ["can't be"], explanation: "can't be (deducción presente)." },
          { s1: "It's obvious he's lying.", key: "MUST", s2: "He ___.", accepted: ["must be lying"], explanation: "must be + -ing." },
          { s1: "Someone probably broke in during the night.", key: "HAVE", s2: "Someone ___ during the night.", accepted: ["must have broken in"], explanation: "must have broken in." },
        ],
      },
      p5: {
        title: "The witness who wasn't sure",
        text: "Rachel Ford had been walking home late one evening when she witnessed what she was certain was a robbery. In the dim light of the street, she saw a man in a dark jacket snatch a bag from a woman and run. When the police arrived, she gave a detailed description, and days later, at an identification parade, she confidently picked out a suspect. Her evidence was compelling, and the young man she identified was duly convicted and sentenced to four years in prison.\n\nThe trouble was that Rachel had made a mistake. She was not lying; she genuinely believed she had identified the right man. But she was wrong, and the consequences of her error were devastating for an innocent person. It was only two years later, when the real culprit confessed to a series of similar crimes, that the truth finally emerged.\n\nThe case is now used to teach an uncomfortable lesson about the nature of human memory. We tend to imagine that memory works like a video recording, faithfully capturing events exactly as they happened. In fact, decades of research have shown that memory is far more fragile and creative than that. Each time we recall an event, we do not simply replay it; we actively reconstruct it, and in doing so we can unknowingly alter the details. Rachel had glimpsed a stranger for a few seconds, in poor light, in a state of fear — conditions almost guaranteed to produce an unreliable memory. Worse, the very process of the police investigation, with its photographs and questions, may have subtly reshaped her recollection, making her more confident of a memory that was becoming less accurate.\n\nMistaken eyewitness identification, it turns out, is one of the leading causes of wrongful conviction. This does not mean that witnesses should never be believed, but it does mean that their evidence must be treated with far more caution than it traditionally has been. Rachel Ford was not a bad person; she was simply human, and human memory, for all its wonders, is a far less reliable instrument than we like to believe. The most confident witness, the case reminds us, is not always the most accurate one.",
        q: [
          mc("What did Rachel witness?", ["A fire.", "What she was certain was a robbery.", "A car accident.", "Nothing."], 1, "'what she was certain was a robbery'."),
          mc("What was the result of her identification?", ["The right man was caught.", "An innocent young man was convicted.", "No one was arrested.", "She was arrested."], 1, "'the young man she identified was… convicted'."),
          mc("How did the truth finally emerge?", ["Rachel confessed.", "The real culprit confessed to similar crimes.", "New DNA evidence.", "A new witness."], 1, "'the real culprit confessed'."),
          mc("How does the writer say memory actually works?", ["Like a video recording.", "We reconstruct events and can alter details.", "Perfectly.", "It doesn't work."], 1, "'we actively reconstruct it… can unknowingly alter the details'."),
          mc("What may have reshaped Rachel's recollection?", ["Nothing.", "The police investigation itself.", "The weather.", "Her friends."], 1, "'the very process of the police investigation… may have subtly reshaped her recollection'."),
          mc("What is the main lesson of the case?", ["Witnesses always lie.", "The most confident witness is not always the most accurate.", "Memory is perfect.", "Never trust anyone."], 1, "'The most confident witness… is not always the most accurate'."),
        ],
      },
      p6: {
        title: "The detective who trusted the details",
        text: "The greatest detectives, both real and fictional, have always shared one quality: an obsessive attention to detail. (1)___ Where the ordinary observer sees nothing remarkable, the great detective notices the small inconsistency that unravels the whole case.\n\nConsider the classic 'locked room' mystery, in which a crime appears to have been committed in a space that no one could have entered or left. (2)___ The obvious conclusion — that the impossible has happened — is, of course, never the right one.\n\nThe true detective refuses to accept the impossible. (3)___ Instead of asking 'who could have done this?', they ask 'what assumption am I making that must be false?' Perhaps the room was not as locked as it seemed; perhaps the crime was committed earlier, or later, than everyone believes.\n\nThis method, it turns out, is not confined to fiction. (4)___ Real detectives solve real crimes in exactly the same way: by noticing the detail that does not fit and refusing to explain it away.\n\nThe lesson extends far beyond crime. (5)___ In science, in business, in everyday life, the person who pays attention to the awkward detail that everyone else ignores is often the one who sees the truth. (6)___ The universe, as one great detective observed, is full of obvious things which nobody by any chance ever observes.",
        options: [
          "It is a talent that can, with practice, be learned.",         // A -> gap 1
          "Such puzzles seem, at first, to defy all logic.",             // B -> gap 2
          "There is always, they insist, a rational explanation.",       // C -> gap 3
          "The same principles govern the finest scientific minds.",      // D -> gap 4
          "Its applications are, in truth, almost limitless.",            // E -> gap 5
          "That, in the end, is the whole art of detection.",             // F -> gap 6
          "Great detectives never notice anything at all.",              // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: es un talento que se aprende."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: parecen desafiar la lógica."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: siempre hay explicación racional."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los mismos principios en la ciencia."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: sus aplicaciones son ilimitadas."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ese es el arte de la deducción."),
        ],
      },
      p7: {
        title: "Four people discuss a crime story",
        text: "Read what four people say about their interest in crime stories.\n\nA) TARA: I'm addicted to crime dramas, but what interests me isn't the violence — it's the psychology. I want to understand why someone would commit a terrible crime. Nobody is born evil. There's always a story, a chain of events, that led them there. Understanding that isn't excusing it; it's the only way we can ever hope to prevent it.\n\nB) MARCUS: For me, it's all about the puzzle. I love a good detective story where you're given all the clues and challenged to work out the solution before the detective does. It's like a game. I get genuinely annoyed when a story cheats by hiding a vital clue from the reader. That's not clever; it's just unfair.\n\nC) HELEN: What worries me is how crime stories can distort our sense of reality. If you watch enough of them, you start to believe that murder is happening on every street corner, when in fact violent crime is at historically low levels. These programmes make people frightened of a danger that, statistically, they're very unlikely ever to face.\n\nD) OMAR: I'm fascinated by real cases where the wrong person was convicted. It's terrifying to think how easily it can happen — a mistaken witness, a false confession, a rush to judgement. Every one of those stories is a reminder of why we have to be so careful, why 'innocent until proven guilty' matters so much.",
        q: [
          mc("Who is most interested in the psychology of criminals?", ["A", "B", "C", "D"], 0, "Tara: 'I want to understand why someone would commit a… crime'."),
          mc("Who enjoys crime stories as an intellectual puzzle?", ["A", "B", "C", "D"], 1, "Marcus: 'It's all about the puzzle'."),
          mc("Who worries that crime stories distort our view of reality?", ["A", "B", "C", "D"], 2, "Helen: 'distort our sense of reality'."),
          mc("Who is interested in cases of wrongful conviction?", ["A", "B", "C", "D"], 3, "Omar: 'the wrong person was convicted'."),
          mc("Who dislikes stories that hide clues from the reader?", ["A", "B", "C", "D"], 1, "Marcus: 'cheats by hiding a vital clue'."),
          mc("Who points out that violent crime is actually low?", ["A", "B", "C", "D"], 2, "Helen: 'violent crime is at historically low levels'."),
          mc("Who believes understanding crime helps prevent it?", ["A", "B", "C", "D"], 0, "Tara: 'the only way we can ever hope to prevent it'."),
          mc("Who values the principle 'innocent until proven guilty'?", ["A", "B", "C", "D"], 3, "Omar: '\"innocent until proven guilty\" matters so much'."),
          mc("Who says no one is born evil?", ["A", "B", "C", "D"], 0, "Tara: 'Nobody is born evil'."),
          mc("Who thinks people become afraid of an unlikely danger?", ["A", "B", "C", "D"], 2, "Helen: 'frightened of a danger… very unlikely ever to face'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Crime dramas and news stories make people more frightened than they need to be.'\nComenta estos dos aspectos y añade uno propio:\n1. fear (el miedo)\n2. entertainment (el entretenimiento)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RESEÑA de una serie o película de misterio/crimen que hayas visto: descríbela y di si la recomiendas.\n· RELATO que empiece con: 'The detective knew at once that something about the scene didn't add up.'", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: The window's broken and the TV's gone — someone must have broken in while we were out. Two. Man: He can't have done it; he was with me all evening. Three. Woman: There's mud on the carpet, so they might have come in through the garden. Four. Man: Look at all this evidence — the case seems open and shut. Five. Woman: The suspect had a solid alibi, so they had to let him go. Six. Man: How did the thief get away with it for so long? Seven. Woman: The detective found one tiny clue that cracked the whole case. Eight. Man: He was convicted on the strength of a single witness — I'm not sure that's enough.", [
      mc("1. What does the woman conclude?", ["Nothing happened.", "Someone must have broken in.", "They lost the TV."], 1, "'someone must have broken in'."),
      mc("2. Why is the man sure of the suspect's innocence?", ["He confessed.", "He was with him all evening.", "There's no motive."], 1, "'he was with me all evening'."),
      mc("3. How might the intruders have entered?", ["The front door.", "Through the garden.", "A window."], 1, "'they might have come in through the garden'."),
      mc("4. How does the case seem?", ["Complicated.", "Open and shut.", "Unsolvable."], 1, "'the case seems open and shut'."),
      mc("5. Why was the suspect released?", ["Lack of motive.", "He had a solid alibi.", "He confessed."], 1, "'had a solid alibi'."),
      mc("6. What does the man wonder?", ["Where the thief is.", "How the thief avoided being caught for so long.", "What was stolen."], 1, "'get away with it for so long'."),
      mc("7. What cracked the case?", ["A confession.", "One tiny clue.", "An alibi."], 1, "'one tiny clue that cracked the whole case'."),
      mc("8. What is the man doubtful about?", ["The verdict.", "Whether a single witness is enough to convict.", "The sentence."], 1, "'convicted on the strength of a single witness… not sure that's enough'."),
    ]),

    ...speakingParts({ p1: "si te gustan las historias de misterio o crimen, y si crees que la gente teme el delito más de lo necesario", p2: "dos escenas relacionadas con la seguridad (una calle vigilada por cámaras y un barrio tranquilo sin ellas): compáralas y especula sobre su seguridad", p3: "qué medidas reducen mejor la delincuencia (más policía, cámaras, mejor educación, penas más duras, reducir la pobreza): comentadlo y elegid la más eficaz", p4: "el delito y la justicia: por qué comete delitos la gente, si las cámaras invaden la intimidad y cómo debería una sociedad tratar a los delincuentes" }),

    SUMMARY("Resumen del Día 16", [
      "Deducción presente: must be / can't be / might be. Pasado: must/can't/might have + participio.",
      "Imposible → CAN'T (no 'mustn't'). must HAVE (no 'must of').",
      "Vocabulario del delito. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 17", "Escribe 4 deducciones (presente y pasado) sobre una escena misteriosa. Repasa las flashcards. Mañana: obligación, prohibición y ausencia de obligación."),
  ],
};

// ───────────────────────── DÍA 17 ─────────────────────────
const DAY17 = {
  title: "Día 17 — Obligación, prohibición y permiso · La ley y las normas",
  description: "must/have to/have got to/need to; mustn't/can't; don't have to/needn't; be allowed to. Vocabulario de ley. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Distinguir obligación, prohibición, ausencia de obligación y permiso.",
    summary: "Obligación/prohibición/permiso; la ley; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'mustn't' = no hace falta (❌).", "'needn't to'.", "'be allowed' sin to."],
    reviewPrompts: ["¿'mustn't' o 'don't have to' para 'no hace falta'?", "¿'must' tiene pasado?"],
  },
  items: [
    TEXT("🔁 Repaso: deducción. Hoy la OBLIGACIÓN, la PROHIBICIÓN, la AUSENCIA DE OBLIGACIÓN y el PERMISO. Vocabulario: la LEY y las NORMAS."),
    GRAMMAR("Obligación, prohibición y permiso", `OBLIGACIÓN: must (obligación que siente el hablante) / have to / have got to (regla externa) / need to. Solo 'have to' tiene pasado y futuro: I had to / I'll have to.
PROHIBICIÓN: mustn't / can't / be not allowed to: You mustn't park here. You're not allowed to smoke.
AUSENCIA DE OBLIGACIÓN (no hace falta): don't have to / needn't / don't need to: You don't have to come. You needn't worry.
PERMISO: can / be allowed to / be permitted to: You can leave early. Are we allowed to take photos?
⚠️ mustn't (prohibido) ≠ don't have to (opcional). 'needn't' + infinitivo sin to. 'must' no tiene pasado (→ had to).`),
    WARN("Errores típicos del hispanohablante", "· ❌ You mustn't pay (= no hace falta) → ✅ You don't have to pay.\n· ❌ You needn't to worry → ✅ You needn't worry.\n· ❌ We aren't allowed take photos → ✅ We aren't allowed to take photos.\n· Pasado de 'must' (obligación) → 'had to'."),
    grammarEx("Use of English — Obligación y permiso", "Completa o elige.", [
      mc("Sign: 'No entry'. You ___ go in.", ["don't have to", "mustn't", "needn't"], 1, "prohibido → mustn't."),
      mc("It's free, so you ___ pay.", ["mustn't", "don't have to", "can't"], 1, "no hace falta → don't have to."),
      fb("Yesterday I ___ ___ (obligación) work late. (pasado)", ["had to"], "must no tiene pasado → had to."),
      mc("Choose:", ["You needn't to worry.", "You needn't worry.", "You don't need worry."], 1, "needn't + infinitivo."),
      fb("Are we ___ ___ (allow) take photos here?", ["allowed to"], "be allowed to."),
      mc("Choose:", ["You must to wear a helmet.", "You must wear a helmet.", "You must wearing a helmet."], 1, "must + inf sin to."),
      fb("I ___ ___ (have) get up early tomorrow. (futuro)", ["will have to", "'ll have to"], "have to en futuro."),
    ]),
    GRAMMAR("Vocabulario del día — La ley y las normas", "Léxico de ley (B2)."),
    deck("B2 S4D17 — La ley y las normas", [
      ["law", "ley", "It's against the law.", "sustantivo", "lɔː"],
      ["regulation", "reglamento / normativa", "New safety regulations apply.", "sustantivo", "ˌreɡjuˈleɪʃn"],
      ["ban", "prohibir / prohibición", "They banned smoking in bars.", "verbo/sustantivo", "bæn"],
      ["enforce", "hacer cumplir", "The rules are strictly enforced.", "verbo", "ɪnˈfɔːs"],
      ["fine", "multa / multar", "You'll get a fine for that.", "sustantivo/verbo", "faɪn"],
      ["obey", "obedecer / cumplir", "Everyone must obey the law.", "verbo", "əˈbeɪ"],
      ["strict", "estricto/a", "The regulations are very strict.", "adjetivo", "strɪkt"],
      ["legal", "legal", "It's perfectly legal.", "adjetivo", "ˈliːɡl"],
      ["breach", "incumplir / infracción", "That's a breach of contract.", "verbo/sustantivo", "briːtʃ"],
      ["compulsory", "obligatorio/a", "Wearing a seatbelt is compulsory.", "adjetivo", "kəmˈpʌlsəri"],
    ]),
    vocabEx("Vocabulario — La ley y las normas", "Elige la opción correcta.", [
      mc("Something you are required to do by law is ___.", ["compulsory", "legal", "strict"], 0, "compulsory."),
      mc("To officially forbid something is to ___ it.", ["ban", "obey", "enforce"], 0, "ban."),
      mc("To make sure a law is followed is to ___ it.", ["enforce", "breach", "obey"], 0, "enforce."),
      mc("Money you must pay as a punishment is a ___.", ["fine", "law", "regulation"], 0, "fine."),
      mc("To break a rule or agreement is to ___ it.", ["breach", "obey", "enforce"], 0, "breach."),
      mc("Rules that are firmly applied are ___.", ["strict", "legal", "compulsory"], 0, "strict."),
    ]),

    ...uoe({
      p1: {
        title: "Do we have too many laws?",
        text: "Every year, governments around the world pass thousands of new laws and (1)___, and a familiar complaint resurfaces: are we drowning in red tape? Critics argue that ordinary citizens can no longer possibly (2)___ everything they are required to do, and that many regulations are pointless, contradictory or impossible to (3)___. There is something in this. A law that cannot be enforced, or that almost no one obeys, does more harm than good, because it (4)___ respect for the law in general. Yet the opposite view also has merit. Most regulations exist for a genuine reason, even if that reason is not always (5)___. The rules that seem most irritating — the safety regulation, the (6)___ seatbelt — are often the very ones that quietly save thousands of lives. The real challenge for any society is to strike a (7)___: enough regulation to protect people from genuine harm, but not so much that it (8)___ ordinary life impossible.",
        q: [
          mc("(1)", ["regulations", "regulation", "regulate", "regular"], 0, "sustantivo plural."),
          mc("(2)", ["know", "obey", "follow", "keep"], 0, "'obey everything' (o follow/know)."),
          mc("(3)", ["enforce", "force", "reinforce", "impose"], 0, "'impossible to enforce'."),
          mc("(4)", ["undermines", "weakens", "reduces", "lowers"], 0, "'undermines respect'."),
          mc("(5)", ["obvious", "clear", "visible", "evident"], 0, "'not always obvious'."),
          mc("(6)", ["compulsory", "obligatory", "forced", "required"], 0, "'the compulsory seatbelt'."),
          mc("(7)", ["balance", "deal", "middle", "agreement"], 0, "'strike a balance'."),
          mc("(8)", ["makes", "leaves", "keeps", "turns"], 0, "'makes ordinary life impossible'."),
        ],
      },
      p2: {
        title: "The unwritten rules of society",
        text: "Not all the rules we live (1)___ are written down in law. Every society is governed just (2)___ powerfully by unwritten rules of behaviour that we absorb without ever being formally taught them. You don't have (3)___ read a law to know that you shouldn't jump a queue or speak loudly in a library; you simply learn, through countless small social signals, what is and (4)___ acceptable. These informal rules are enforced not by police or fines (5)___ by the disapproval of those around us — a raised eyebrow, an awkward silence, a cold shoulder. In many ways, they regulate our daily conduct far more effectively (6)___ any written law could. Interestingly, they also vary enormously from one culture to (7)___, which is why travellers so often cause offence without meaning to. What is perfectly polite in one country may be deeply rude in the next. The visitor who takes the trouble to learn these unwritten rules will get (8)___ far more smoothly than the one who assumes their own way is the only way.",
        q: [
          fb("(1)", ["by"], "'the rules we live by'."),
          fb("(2)", ["as"], "'just as powerfully'."),
          fb("(3)", ["to"], "'You don't have to read'."),
          fb("(4)", ["isn't", "is not"], "'what is and isn't acceptable'."),
          fb("(5)", ["but"], "'not by police… but by disapproval'."),
          fb("(6)", ["than"], "'more effectively than'."),
          fb("(7)", ["another"], "'from one culture to another'."),
          fb("(8)", ["on"], "'get on far more smoothly'."),
        ],
      },
      p3: {
        title: "When breaking the law is right",
        text: "Is it ever right to break the law? Most of us would instinctively say that we have a (1)___ to obey the laws of the society we live in. And yet history is full of people we now regard as heroes precisely because they (2)___ to obey unjust laws. From those who hid the persecuted to those who sat (3)___ in protest at discrimination, some of the greatest moral (4)___ of our age have come from a willingness to break the law. This is the idea of 'civil disobedience': the (5)___ breaking of an unjust law, openly and non-violently, in order to draw attention to its injustice. Crucially, the true practitioner of civil disobedience does not try to (6)___ punishment; on the contrary, they accept it, precisely to demonstrate the (7)___ of the law they are challenging. It is a difficult and dangerous path, and one open to abuse. But it reminds us of an uncomfortable truth: that legality and (8)___ are not always the same thing, and that a law, however official, can itself be wrong.",
        items: [
          { root: "oblige", accepted: ["obligation"], hint: "sustantivo → obligation." },
          { root: "fuse", accepted: ["refused"], hint: "'they refused to obey' → refused." },
          { root: "peace", accepted: ["peacefully"], hint: "adverbio → peacefully." },
          { root: "advance", accepted: ["advances"], hint: "sustantivo plural → advances." },
          { root: "deliberate", accepted: ["deliberate"], hint: "'the deliberate breaking' (adjetivo)." },
          { root: "escape", accepted: ["escape"], hint: "'to escape punishment' (verbo)." },
          { root: "just", accepted: ["injustice"], hint: "sustantivo → injustice." },
          { root: "moral", accepted: ["morality"], hint: "sustantivo → morality." },
        ],
      },
      p4: {
        title: "Transformaciones — obligación y permiso",
        items: [
          { s1: "It isn't necessary for you to come.", key: "HAVE", s2: "You ___ come.", accepted: ["don't have to"], explanation: "no hace falta → don't have to." },
          { s1: "Smoking is forbidden in here.", key: "ALLOWED", s2: "You ___ smoke in here.", accepted: ["aren't allowed to", "are not allowed to"], explanation: "prohibido → not allowed to." },
          { s1: "It was necessary for me to work late yesterday.", key: "HAD", s2: "I ___ late yesterday.", accepted: ["had to work"], explanation: "pasado de 'must' → had to." },
          { s1: "It's compulsory to wear a helmet.", key: "MUST", s2: "You ___ a helmet.", accepted: ["must wear"], explanation: "obligación → must." },
          { s1: "There's no need for you to worry.", key: "NEEDN'T", s2: "You ___.", accepted: ["needn't worry"], explanation: "needn't + inf." },
          { s1: "Is it OK if we take photographs?", key: "ALLOWED", s2: "Are we ___ photographs?", accepted: ["allowed to take"], explanation: "be allowed to." },
        ],
      },
      p5: {
        title: "The man who wouldn't move",
        text: "History sometimes turns on the smallest of acts. On a December evening in 1955, in Montgomery, Alabama, a tired seamstress named Rosa Parks boarded a bus to go home from work. Under the laws of the time, the seats at the front were reserved for white passengers, and Black passengers like Parks were required to give up their seats if a white person had none. When the driver ordered her to move, Rosa Parks, quietly and without drama, refused.\n\nIt is important to understand that Parks was not, as is sometimes said, simply too tired to move. She was tired, certainly, but her refusal was a conscious act of resistance against a law she knew to be deeply unjust. 'The only tired I was,' she later explained, 'was tired of giving in.' By breaking the law, openly and non-violently, and by accepting arrest as a consequence, she was practising exactly the kind of civil disobedience that would come to define the American civil rights movement.\n\nHer arrest sparked a boycott of the Montgomery bus system that lasted for over a year. Tens of thousands of Black citizens simply refused to use the buses, walking miles to work in all weathers rather than submit to a system they considered unjust. The economic pressure was enormous, and eventually the Supreme Court ruled that the segregation laws were unconstitutional. A single woman's refusal to give up her seat had helped to change the law of the land.\n\nWhat makes the story so powerful is precisely its ordinariness. Rosa Parks was not a politician or a general; she was an ordinary working woman who, on one particular evening, decided that she had had enough. She reminds us that the great movements of history are not made only by famous leaders, but also by countless ordinary people who, in some small moment, quietly refuse to accept what they know to be wrong. Sometimes, the most powerful thing a person can do is simply to stay seated.",
        q: [
          mc("What did the law require of Rosa Parks?", ["To sit at the front.", "To give up her seat to a white passenger.", "To leave the bus.", "To pay a fine."], 1, "'required to give up their seats if a white person had none'."),
          mc("Why did Parks really refuse, according to the passage?", ["She was simply too tired.", "It was a conscious act against an unjust law.", "She was confused.", "She was ill."], 1, "'a conscious act of resistance against a law she knew to be deeply unjust'."),
          mc("What did her arrest spark?", ["A riot.", "A year-long bus boycott.", "A new law.", "Nothing."], 1, "'a boycott of the Montgomery bus system that lasted for over a year'."),
          mc("What did the Supreme Court eventually rule?", ["That Parks was guilty.", "That the segregation laws were unconstitutional.", "That the buses were safe.", "Nothing."], 1, "'the segregation laws were unconstitutional'."),
          mc("What makes the story so powerful, according to the writer?", ["Parks was famous.", "Its ordinariness — she was an ordinary working woman.", "It was violent.", "It was quick."], 1, "'precisely its ordinariness'."),
          mc("What is the writer's broader point about historical change?", ["Only leaders matter.", "Ordinary people who refuse to accept wrong also make history.", "Change is impossible.", "Laws never change."], 1, "'countless ordinary people who… quietly refuse to accept what they know to be wrong'."),
        ],
      },
      p6: {
        title: "The trouble with rules",
        text: "Rules exist to make life fairer and more predictable, and for the most part they succeed. (1)___ Without them, society would descend into chaos, and the strong would simply prey on the weak.\n\nYet rules have a curious tendency to take on a life of their own. (2)___ Over time, we can come to follow a rule not because it serves any useful purpose, but simply because it is the rule.\n\nThe classic illustration is the story, possibly apocryphal, of the office where a particular pointless procedure was followed for years. (3)___ When someone finally asked why, no one could remember; the person who had introduced the rule, for reasons long since irrelevant, had retired a decade earlier.\n\nThis is why every organisation, and every society, needs people willing to ask the awkward question: why do we do it this way? (4)___ Such people are often unpopular, because questioning a rule can feel like a challenge to authority itself.\n\nBut the willingness to distinguish between rules that serve a purpose and rules that have simply outlived their usefulness is essential to any healthy society. (5)___ A good rule protects us; a bad one merely restricts us for no reason. (6)___ The wise society, like the wise person, knows the difference — and has the courage to act on it.",
        options: [
          "A world with no rules at all is not freedom but anarchy.",     // A -> gap 1
          "Long after their original purpose has vanished, they persist.", // B -> gap 2
          "Everyone assumed it must be necessary, so no one questioned it.", // C -> gap 3
          "Progress depends on those brave enough to challenge the pointless.", // D -> gap 4
          "The task is to keep the former and discard the latter.",        // E -> gap 5
          "That knowledge is the beginning of real wisdom.",               // F -> gap 6
          "Rules are always perfectly designed and never need changing.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: un mundo sin reglas es anarquía."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: persisten sin propósito."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: todos la creían necesaria."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el progreso depende de quien cuestiona."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: conservar las buenas, descartar las malas."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ese saber es sabiduría."),
        ],
      },
      p7: {
        title: "Four people discuss rules and laws",
        text: "Read what four people say about rules.\n\nA) NINA: I'm a great believer in rules. People complain about them, but most rules exist for a good reason — usually to protect someone. The people who moan about 'red tape' are often the ones who'd cut safety corners if they could. I'd rather live in an over-regulated society than a dangerous one.\n\nB) TOM: My problem isn't with rules as such, but with rules that no one can explain. I always ask 'why?' If there's a good answer, fine, I'll follow it happily. But 'because those are the rules' isn't a reason — it's the absence of one. Half the rules we follow are just habit, long after their purpose has gone.\n\nC) SARA: I think the most important rules are the unwritten ones — the everyday courtesies that no law could ever enforce. Holding a door, not being cruel, keeping your word. These matter far more than most actual laws, and yet we never talk about them. A society held together only by law is already in trouble.\n\nD) OMAR: History shows that laws aren't always right. Some of the worst crimes ever committed were perfectly legal at the time, and some of the greatest heroes were criminals under the laws of their day. So while I obey the law in general, I refuse to believe that 'legal' and 'right' are the same thing. Sometimes the two point in opposite directions.",
        q: [
          mc("Who believes most rules exist to protect people?", ["A", "B", "C", "D"], 0, "Nina: 'most rules exist for a good reason — usually to protect someone'."),
          mc("Who objects to rules that cannot be justified?", ["A", "B", "C", "D"], 1, "Tom: 'rules that no one can explain'."),
          mc("Who values unwritten social courtesies most?", ["A", "B", "C", "D"], 2, "Sara: 'the most important rules are the unwritten ones'."),
          mc("Who distinguishes between what is legal and what is right?", ["A", "B", "C", "D"], 3, "Omar: '\"legal\" and \"right\" are not the same thing'."),
          mc("Who would prefer over-regulation to danger?", ["A", "B", "C", "D"], 0, "Nina: 'rather live in an over-regulated society than a dangerous one'."),
          mc("Who thinks many rules survive only as habit?", ["A", "B", "C", "D"], 1, "Tom: 'just habit, long after their purpose has gone'."),
          mc("Who points out that some legal acts have been terrible crimes?", ["A", "B", "C", "D"], 3, "Omar: 'some of the worst crimes… were perfectly legal'."),
          mc("Who suspects rule-complainers of wanting to cut corners?", ["A", "B", "C", "D"], 0, "Nina: 'the ones who'd cut safety corners if they could'."),
          mc("Who says 'because those are the rules' is not a real reason?", ["A", "B", "C", "D"], 1, "Tom: '\"because those are the rules\" isn't a reason'."),
          mc("Who warns that a society held together only by law is in trouble?", ["A", "B", "C", "D"], 2, "Sara: 'A society held together only by law is already in trouble'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'People should always obey the law, no matter what.'\nComenta estos dos aspectos y añade uno propio:\n1. social order (el orden social)\n2. injustice (la injusticia)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A rule I would change' — explica qué norma cambiarías y por qué.\n· CARTA a las autoridades de tu ciudad proponiendo una nueva norma o la derogación de una existente: argumenta tu propuesta.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una abogada, Clara, hablando sobre las leyes y la sociedad (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a lawyer called Clara giving a talk about laws and society. Clara: Good evening. People often assume that laws are fixed, permanent things, but nothing could be further from the truth. Laws are constantly changing, because society's values change. Something that was a serious crime a century ago may be perfectly legal today, and vice versa. The first thing I want to stress is that the purpose of most laws is protection — protecting the weak from the strong, protecting us from harm we can't see. The second point is that a law is only as good as our willingness to enforce it fairly. A law that is applied to some people but not others isn't justice; it's just power. Now, people often ask me whether we have too many laws. My honest answer is that the number matters far less than the quality. One clear, fair, well-enforced law is worth a hundred confusing ones. Finally, I always remind people that obeying the law and doing the right thing are usually, but not always, the same. Every citizen has a duty to obey the law, but also, I believe, a deeper duty to work peacefully to change laws that are unjust. That balance — respecting the law while never worshipping it — is, to me, the mark of a mature society.", [
      fb("People wrongly assume that laws are ___ things.", ["fixed", "permanent"], "'fixed, permanent things'."),
      fb("Laws change because society's ___ change.", ["values"], "'society's values change'."),
      fb("The purpose of most laws is ___.", ["protection"], "'the purpose of most laws is protection'."),
      fb("A law applied unequally is just ___, not justice.", ["power"], "'it's just power'."),
      fb("The ___ of a law matters more than the number.", ["quality"], "'the number matters far less than the quality'."),
      fb("Every citizen has a duty to ___ the law.", ["obey"], "'a duty to obey the law'."),
      fb("We also have a duty to peacefully change ___ laws.", ["unjust"], "'change laws that are unjust'."),
      fb("Respecting the law without ___ it marks a mature society.", ["worshipping"], "'never worshipping it'."),
    ]),

    ...speakingParts({ p1: "si crees que hay que obedecer siempre la ley, y qué norma de tu país cambiarías", p2: "dos formas de mantener el orden (un guardia vigilando y una comunidad que se autorregula): compáralas y di cuál funciona mejor", p3: "qué normas debería tener un instituto o un lugar de trabajo (móviles, horarios, uniforme, comportamiento): comentadlo y elegid las más necesarias", p4: "la ley y las normas: si tenemos demasiadas leyes, si a veces está justificado desobedecer y qué diferencia hay entre 'legal' y 'justo'" }),

    SUMMARY("Resumen del Día 17", [
      "Obligación: must/have to/need to (pasado: had to). Prohibición: mustn't/can't/not allowed to.",
      "No hace falta: don't have to/needn't. Permiso: can/be allowed to. ¡mustn't ≠ don't have to!",
      "Vocabulario de ley. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 18", "Escribe frases con must/mustn't/don't have to/be allowed to. Repasa las flashcards. Mañana: crítica y consejo sobre el pasado (should have)."),
  ],
};

// ───────────────────────── DÍA 18 ─────────────────────────
const DAY18 = {
  title: "Día 18 — Crítica y consejo sobre el pasado · Los errores",
  description: "should/ought to have + participio; could/might have; needn't have vs didn't need to. Vocabulario de errores. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Criticar o aconsejar sobre el pasado y expresar reproches.",
    summary: "Crítica sobre el pasado; los errores; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'should of'.", "'needn't have' vs 'didn't need to'.", "'must have to'."],
    reviewPrompts: ["¿'debería haber hecho' cómo se dice?", "¿'needn't have' vs 'didn't need to'?"],
  },
  items: [
    TEXT("🔁 Repaso: obligación. Hoy la CRÍTICA y el CONSEJO sobre el PASADO (should have) y los reproches. Vocabulario: los ERRORES."),
    GRAMMAR("Crítica y consejo sobre el pasado", `· should/ought to have + participio = lo correcto habría sido (crítica/arrepentimiento): You should have told me. I ought to have studied harder.
· shouldn't have + participio = fue un error hacerlo: You shouldn't have said that.
· could have + participio = habría sido posible (no se hizo): You could have helped, but you didn't.
· might have + participio = reproche suave: You might have warned me!
· needn't have + participio = lo hiciste pero no hacía falta: You needn't have cooked — we'd already eaten.
· didn't need to + inf = no hacía falta (y quizá no se hizo): I didn't need to buy milk, so I didn't.
⚠️ 'should HAVE' (no 'should of'). Diferencia clave: needn't have (sí lo hizo, en vano) vs didn't need to (no era necesario).`),
    WARN("Errores típicos del hispanohablante", "· ❌ should of gone → ✅ should have gone.\n· ❌ You should told me → ✅ You should have told me.\n· needn't have cooked (cocinaste en vano) ≠ didn't need to cook (no hacía falta).\n· 'could have' = era posible, pero no ocurrió."),
    grammarEx("Use of English — Crítica sobre el pasado", "Completa o elige.", [
      fb("You ___ ___ ___ (should/tell) me earlier. (crítica)", ["should have told"], "should have + participio."),
      mc("Choose:", ["You shouldn't have said that.", "You shouldn't of said that.", "You shouldn't say that."], 0, "shouldn't have + participio."),
      fb("You ___ ___ ___ (could/help), but you didn't.", ["could have helped"], "could have + participio."),
      fb("You ___ ___ ___ (needn't/cook) — we'd already eaten. (en vano)", ["needn't have cooked"], "needn't have (lo hizo en vano)."),
      mc("Choose:", ["You might have warned me!", "You might warned me!", "You might of warned me!"], 0, "might have (reproche)."),
      fb("I ___ ___ (not/need) buy milk, so I didn't. (no hacía falta)", ["didn't need to"], "didn't need to."),
      mc("Choose:", ["I ought to have studied harder.", "I ought have studied harder.", "I ought to studied harder."], 0, "ought to have + participio."),
    ]),
    GRAMMAR("Vocabulario del día — Los errores", "Léxico de errores (B2)."),
    deck("B2 S4D18 — Los errores", [
      ["make a mistake", "cometer un error", "Everyone makes mistakes.", "colocación", "meɪk ə mɪˈsteɪk"],
      ["own up to", "reconocer / confesar", "He owned up to breaking it.", "phrasal verb", "əʊn ˈʌp tu"],
      ["blame", "culpar / echar la culpa", "Don't blame yourself.", "verbo", "bleɪm"],
      ["apologise", "disculparse", "You should apologise to her.", "verbo", "əˈpɒlədʒaɪz"],
      ["learn from", "aprender de", "Learn from your mistakes.", "colocación", "lɜːn frɒm"],
      ["let someone down", "defraudar / fallar a", "I don't want to let you down.", "phrasal verb", "let ˈsʌmwʌn daʊn"],
      ["cover up", "encubrir / tapar", "They tried to cover up the error.", "phrasal verb", "kʌvə ˈʌp"],
      ["get away with", "salir impune", "You won't get away with lying.", "phrasal verb", "ɡet əˈweɪ wɪð"],
      ["take responsibility", "asumir la responsabilidad", "A leader must take responsibility.", "colocación", "teɪk rɪˌspɒnsəˈbɪləti"],
      ["slip up", "meter la pata", "Anyone can slip up occasionally.", "phrasal verb", "slɪp ˈʌp"],
    ]),
    vocabEx("Vocabulario — Los errores", "Elige la opción correcta.", [
      mc("To admit that you did something wrong is to ___.", ["own up to it", "cover it up", "blame it"], 0, "own up to it."),
      mc("To hide a mistake so no one finds out is to ___.", ["cover it up", "own up", "apologise"], 0, "cover it up."),
      mc("To disappoint someone who relied on you is to ___ them.", ["let down", "own up", "slip up"], 0, "let down."),
      mc("To say someone is responsible for something bad is to ___ them.", ["blame", "apologise", "own up"], 0, "blame."),
      mc("To accept that a problem is yours to deal with is to ___.", ["take responsibility", "cover up", "get away with"], 0, "take responsibility."),
      mc("To make a small careless mistake is to ___.", ["slip up", "cover up", "own up"], 0, "slip up."),
    ]),

    ...uoe({
      p1: {
        title: "The art of the apology",
        text: "Saying sorry sounds simple, but a genuine apology is surprisingly (1)___ to get right. Most of the apologies we hear are, in fact, no apologies at all. 'I'm sorry if you were offended' shifts the (2)___ onto the other person, as though their being upset were the real problem. 'Mistakes were made' cleverly avoids admitting that anyone actually (3)___ them. A true apology, by contrast, requires us to do something we find deeply uncomfortable: to own (4)___ to our error, without excuse or qualification. It means saying, clearly, 'I was wrong, I take (5)___, and I'm sorry.' Research shows that people are remarkably willing to forgive those who apologise properly, and remarkably (6)___ to forgive those who don't. The person who tries to cover (7)___ a mistake, or to shift the blame, almost always makes things worse. Paradoxically, then, the fastest way to (8)___ a relationship after a mistake is also the hardest: simply to admit, honestly and completely, that you got it wrong.",
        q: [
          mc("(1)", ["hard", "difficult", "tricky", "tough"], 2, "'surprisingly tricky to get right'."),
          mc("(2)", ["blame", "fault", "guilt", "responsibility"], 0, "'shifts the blame'."),
          mc("(3)", ["made", "did", "committed", "caused"], 0, "'anyone actually made them'."),
          mc("(4)", ["up", "in", "on", "over"], 0, "'own up to our error'."),
          mc("(5)", ["responsibility", "blame", "fault", "guilt"], 0, "'I take responsibility'."),
          mc("(6)", ["reluctant", "unwilling", "slow", "unable"], 2, "'remarkably slow to forgive'."),
          mc("(7)", ["up", "over", "in", "on"], 0, "'cover up a mistake'."),
          mc("(8)", ["repair", "fix", "mend", "heal"], 0, "'repair a relationship'."),
        ],
      },
      p2: {
        title: "In praise of mistakes",
        text: "We live in a culture that treats mistakes (1)___ shameful, something to be hidden and avoided at all costs. This is not only unpleasant; it is actively harmful. A person who is terrified of making mistakes will never take the risks (2)___ which nothing valuable is ever achieved. Worse, a culture in which people are punished for honest errors is one in which they (3)___ up learning to cover them up, which is far more dangerous. In the airline industry, this insight has been taken (4)___ heart. Pilots are actively encouraged to report their own mistakes and near-misses, without fear of punishment, precisely (5)___ that everyone can learn from them. As a result, flying has become extraordinarily safe. Contrast this (6)___ organisations where mistakes are hidden out of fear, and where the same errors are therefore repeated again and again. The lesson is clear. We (7)___ not celebrate carelessness, of course. But we should recognise that honest mistakes, openly admitted and (8)___ from, are one of the most powerful engines of progress we possess.",
        q: [
          fb("(1)", ["as"], "'treats mistakes as shameful'."),
          fb("(2)", ["without"], "'the risks without which…'"),
          fb("(3)", ["end"], "'they end up learning'."),
          fb("(4)", ["to"], "'taken to heart'."),
          fb("(5)", ["so"], "'precisely so that'."),
          fb("(6)", ["with"], "'Contrast this with'."),
          fb("(7)", ["should", "must"], "'We should not celebrate carelessness'."),
          fb("(8)", ["learned", "learnt"], "'openly admitted and learned from'."),
        ],
      },
      p3: {
        title: "Why leaders must own their mistakes",
        text: "There is no surer sign of a poor leader than an (1)___ to admit mistakes. When things go wrong, the weak leader looks for someone else to (2)___, hiding behind excuses and shifting responsibility downwards. This behaviour is not only (3)___; it is deeply counterproductive. A team quickly loses respect for a boss who never takes (4)___ for failure, and, more damagingly, it learns that honesty is dangerous. If admitting a mistake gets you (5)___, people will simply stop admitting them. The truly (6)___ leader does the opposite. They own up to their errors openly, take the blame that is rightly theirs, and in doing so create a culture of psychological safety in which everyone feels able to be honest. Far from (7)___ their authority, this actually strengthens it, because nothing earns loyalty like a leader who protects their team and (8)___ the responsibility on their own shoulders.",
        items: [
          { root: "able", accepted: ["inability"], hint: "sustantivo negativo → inability." },
          { root: "blame", accepted: ["blame"], hint: "'someone to blame' (verbo)." },
          { root: "attract", accepted: ["unattractive"], hint: "'deeply unattractive' → unattractive." },
          { root: "response", accepted: ["responsibility"], hint: "sustantivo → responsibility." },
          { root: "punish", accepted: ["punished"], hint: "'gets you punished' (participio)." },
          { root: "effect", accepted: ["effective"], hint: "adjetivo → effective." },
          { root: "weak", accepted: ["weakening"], hint: "'Far from weakening their authority' → weakening." },
          { root: "take", accepted: ["takes"], hint: "'takes the responsibility' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — crítica sobre el pasado",
        items: [
          { s1: "It was a mistake not to tell you.", key: "SHOULD", s2: "I ___ you.", accepted: ["should have told"], explanation: "should have + participio." },
          { s1: "It was wrong of you to shout at her.", key: "HAVE", s2: "You ___ at her.", accepted: ["shouldn't have shouted"], explanation: "shouldn't have." },
          { s1: "You cooked, but it wasn't necessary — we'd eaten.", key: "NEEDN'T", s2: "You ___ — we'd already eaten.", accepted: ["needn't have cooked"], explanation: "needn't have (en vano)." },
          { s1: "It would have been possible for you to help, but you didn't.", key: "COULD", s2: "You ___, but you didn't.", accepted: ["could have helped"], explanation: "could have + participio." },
          { s1: "I'm annoyed you didn't warn me about the delay.", key: "MIGHT", s2: "You ___ me about the delay!", accepted: ["might have warned"], explanation: "might have (reproche)." },
          { s1: "It wasn't necessary to pay, so I didn't.", key: "NEED", s2: "I ___ pay, so I didn't.", accepted: ["didn't need to"], explanation: "didn't need to." },
        ],
      },
      p5: {
        title: "The mistake that made me a better teacher",
        text: "In my first year of teaching, I made a mistake I have never forgotten, and never repeated. There was a boy in my class — I will call him Daniel — who never did his homework, never paid attention, and never seemed to care. In my inexperience and frustration, I concluded that he was simply lazy, and I treated him accordingly. One day, exasperated by yet another missing assignment, I criticised him in front of the whole class. I told him, in effect, that he would never amount to anything if he didn't start making an effort. I can still see his face.\n\nI should have known better. I should have asked myself why a twelve-year-old boy might be behaving that way, instead of assuming the worst. What I did not know — what I had never bothered to find out — was that Daniel's mother was seriously ill, that he was effectively caring for two younger siblings, and that he was coming to school each day exhausted and terrified, having done far more before nine in the morning than most adults do all day. He was not lazy. He was a child carrying an impossible burden, and I had just humiliated him for it.\n\nI found all this out later that week, from another teacher, and the shame I felt was overwhelming. I had let him down badly, at the very moment he most needed an adult to be kind. I could have made his life a little easier; instead, I had made it harder. The following morning, I asked to speak to him alone, and I did the only thing I could: I apologised, completely and without excuse. I told him I had been wrong, that I was sorry, and that from now on I was on his side.\n\nDaniel is an adult now, with a family of his own, and we are still in touch. He tells me, generously, that my apology meant more to him than my criticism had hurt. I am not sure I believe him, but I am grateful. That mistake taught me the single most important lesson of my career: that behind every 'difficult' child there is almost always a story we know nothing about, and that our first duty, before judgement, is simply to find out what it is.",
        q: [
          mc("What did the teacher wrongly conclude about Daniel?", ["That he was ill.", "That he was simply lazy.", "That he was clever.", "That he was rich."], 1, "'he was simply lazy'."),
          mc("What was really happening in Daniel's life?", ["Nothing unusual.", "His mother was ill and he cared for his siblings.", "He hated school.", "He was on holiday."], 1, "'his mother was seriously ill… caring for two younger siblings'."),
          mc("How did the teacher feel on learning the truth?", ["Proud.", "Overwhelmed with shame.", "Amused.", "Angry."], 1, "'the shame I felt was overwhelming'."),
          mc("What did the teacher do the next morning?", ["Ignored Daniel.", "Apologised completely, without excuse.", "Criticised him again.", "Reported him."], 1, "'I apologised, completely and without excuse'."),
          mc("What does Daniel now say about the apology?", ["It meant nothing.", "It meant more than the criticism had hurt.", "He doesn't remember.", "He is still angry."], 1, "'my apology meant more to him than my criticism had hurt'."),
          mc("What is the main lesson the teacher learned?", ["Never apologise.", "Behind every 'difficult' child is a story we don't know.", "Children are lazy.", "Teaching is easy."], 1, "'behind every \"difficult\" child there is almost always a story we know nothing about'."),
        ],
      },
      p6: {
        title: "The cover-up that made everything worse",
        text: "It is one of the oldest lessons in public life, and yet it is forgotten again and again: the cover-up is almost always worse than the crime. (1)___ A minor error, honestly admitted, is quickly forgiven and forgotten. The same error, denied and concealed, can destroy a career, a company, or a government.\n\nThe reasons are not hard to understand. (2)___ When people discover that they have been lied to, they feel not only disappointed but betrayed, and betrayal is far harder to forgive than a simple mistake.\n\nThere is also the practical problem that one lie almost always requires another. (3)___ To maintain a cover-up, you must keep track of what you have said to whom, and a single slip can bring the whole edifice crashing down.\n\nHistory offers countless examples of leaders who could have survived a mistake but were destroyed by the attempt to hide it. (4)___ The original error, in almost every case, would have been forgotten within weeks had it simply been admitted.\n\nThe lesson, then, is as clear as it is difficult to follow. (5)___ When you have made a mistake, the wisest course — practically as well as morally — is almost always to own up to it at once, take the consequences, and move on. (6)___ The truth, however painful, is nearly always less damaging than the lie told to conceal it.",
        options: [
          "This is a truth that experience confirms with dreary regularity.", // A -> gap 1
          "People can forgive a mistake far more easily than a deception.",   // B -> gap 2
          "Deception, once begun, tends to grow of its own accord.",          // C -> gap 3
          "It was the concealment, not the deed, that finished them.",        // D -> gap 4
          "Yet it is a lesson that each generation seems to relearn painfully.", // E -> gap 5
          "Honesty, in the end, is not just right but shrewd.",               // F -> gap 6
          "Covering up a mistake is always the safest option.",               // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la experiencia lo confirma."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: se perdona el error, no el engaño."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el engaño crece solo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los hundió el encubrimiento."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: cada generación lo reaprende."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la honestidad es astuta."),
        ],
      },
      p7: {
        title: "Four people describe learning from a mistake",
        text: "Read what four people say about a mistake they made.\n\nA) LENA: I once sent an email criticising my boss — to my boss, by accident. I wanted the ground to swallow me. But instead of trying to cover it up or make excuses, I walked straight into her office and owned up. To my amazement, she respected me for it. It taught me that honesty, even when it's mortifying, is always the best policy.\n\nB) RAJ: My biggest mistake was blaming a colleague for an error that was actually mine. I let him take the fall to protect myself. It worked, in the short term, but I couldn't live with it. A week later I confessed to the manager. I lost some credibility, but I gained something more important: the ability to look myself in the mirror.\n\nC) SOFIA: I used to be a perfectionist who was terrified of making mistakes, which meant I never took any risks. Ironically, my biggest mistake was playing it too safe for years. When I finally allowed myself to fail, I started to grow. Now I see a mistake not as a disaster but as a sign that I'm actually trying.\n\nD) TOM: When I was young, I let a good friend down badly at a moment when he really needed me. I've never quite forgiven myself. But it changed me. Ever since, I've made a point of showing up for people, no matter how inconvenient. That one failure taught me the kind of friend I never wanted to be again.",
        q: [
          mc("Who owned up immediately to an embarrassing error?", ["A", "B", "C", "D"], 0, "Lena: 'I walked straight into her office and owned up'."),
          mc("Who initially blamed someone else for their mistake?", ["A", "B", "C", "D"], 1, "Raj: 'blaming a colleague for an error that was actually mine'."),
          mc("Who realised that avoiding all risk was itself a mistake?", ["A", "B", "C", "D"], 2, "Sofia: 'playing it too safe for years'."),
          mc("Who regrets letting a friend down in a time of need?", ["A", "B", "C", "D"], 3, "Tom: 'let a good friend down badly'."),
          mc("Who was respected by their boss for their honesty?", ["A", "B", "C", "D"], 0, "Lena: 'she respected me for it'."),
          mc("Who confessed even though it cost them credibility?", ["A", "B", "C", "D"], 1, "Raj: 'I lost some credibility, but I gained…'"),
          mc("Who now sees mistakes as a sign of trying?", ["A", "B", "C", "D"], 2, "Sofia: 'a sign that I'm actually trying'."),
          mc("Who changed their behaviour towards others as a result?", ["A", "B", "C", "D"], 3, "Tom: 'I've made a point of showing up for people'."),
          mc("Who valued being able to 'look themselves in the mirror'?", ["A", "B", "C", "D"], 1, "Raj: 'the ability to look myself in the mirror'."),
          mc("Who believes honesty is best even when humiliating?", ["A", "B", "C", "D"], 0, "Lena: 'honesty, even when it's mortifying, is always the best policy'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is always better to admit a mistake than to hide it.'\nComenta estos dos aspectos y añade uno propio:\n1. trust (la confianza)\n2. consequences (las consecuencias)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A mistake that taught me something' — cuenta el error y la lección.\n· CARTA de disculpa a un/a amigo/a al que fallaste: reconoce tu error y explica qué has aprendido (usa should have…).", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de un error que cometieron (se oye dos veces). Para cada hablante, elige de la lista (A–F) cómo reaccionaron. Sobra una opción.\nA) They blamed someone else at first.\nB) They admitted it straight away.\nC) They tried to hide it.\nD) They learned to take more risks afterwards.\nE) They were forgiven immediately.\nF) They never forgave themselves.", "This is Part Three. You will hear five people talking about a mistake they made. Speaker One: The moment I realised what I'd done, I went straight to my manager and told her everything. No excuses. I think that honesty is the only reason I kept my job. Speaker Two: I'm ashamed to say my first instinct was to point the finger at a colleague. I let him take the criticism for something that was entirely my fault. I did confess eventually, but not before doing real damage. Speaker Three: I deleted the files by accident and, in a panic, I said nothing, hoping no one would notice. Of course they did, and by then it looked like I'd been trying to cover it up, which made everything ten times worse. Speaker Four: I hurt someone I cared about deeply, through pure thoughtlessness. It's years ago now, and they've long since moved on, but I still can't quite let it go. Some mistakes stay with you. Speaker Five: Failing that exam was the best thing that ever happened to me. Before that, I was so afraid of getting anything wrong that I never pushed myself. After it, I thought, well, the worst has happened and I survived — so now I try things.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 1, "B: 'I went straight to my manager and told her everything'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 0, "A: 'point the finger at a colleague'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'I said nothing, hoping no one would notice'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 5, "F: 'I still can't quite let it go'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 3, "D: 'now I try things'."),
    ]),

    ...speakingParts({ p1: "cómo reaccionas cuando cometes un error, si te disculpas fácilmente y qué aprendiste de un error tuyo", p2: "dos personas ante un error (una que lo reconoce y otra que echa la culpa a alguien): compáralas y di qué actitud es mejor", p3: "qué debería hacer alguien que ha cometido un error grave en el trabajo (confesarlo, arreglarlo en secreto, culpar a otro, disculparse): comentadlo y elegid lo mejor", p4: "los errores: si es mejor reconocerlos o esconderlos, si aprendemos más de los fracasos y por qué a la gente le cuesta pedir perdón" }),

    SUMMARY("Resumen del Día 18", [
      "should/ought to have + participio (lo correcto); shouldn't have (fue un error); could/might have (posible/reproche).",
      "needn't have + participio (lo hiciste en vano) ≠ didn't need to (no hacía falta). 'should HAVE', no 'should of'.",
      "Vocabulario de errores. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 19", "Escribe 4 frases de crítica sobre el pasado (should/could/might have). Repasa las flashcards. Mañana: ability, permiso y hábitos en el pasado."),
  ],
};

// ───────────────────────── DÍA 19 ─────────────────────────
const DAY19 = {
  title: "Día 19 — Capacidad, permiso y hábitos pasados · Los derechos",
  description: "can/could/be able to/manage to; permiso en el pasado; would/used to. Vocabulario de derechos. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Expresar capacidad (con matices), permiso pasado y hábitos pasados.",
    summary: "Capacidad/permiso/hábitos pasados; los derechos; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'could' para un logro puntual.", "'was able to' vs 'could'.", "'would' con estados."],
    reviewPrompts: ["¿'could' o 'managed to' para un logro concreto?", "¿'would' para estados pasados?"],
  },
  items: [
    TEXT("🔁 Repaso: crítica pasada. Hoy la CAPACIDAD (con matices), el PERMISO y los HÁBITOS en el pasado. Vocabulario: los DERECHOS."),
    GRAMMAR("Capacidad, permiso y hábitos pasados", `CAPACIDAD:
· can (presente) / could (pasado general, habilidad): I can swim. She could read at three.
· be able to (posibilidad concreta, y en tiempos sin 'can'): I'll be able to help. I've been able to…
· LOGRO PUNTUAL en el pasado → was/were able to / managed to / succeeded in + -ing (NO 'could'):
  ✅ I managed to open the door. ✅ We were able to escape. ❌ I could open the door (para un logro concreto).
  En negativa sí vale 'couldn't': I couldn't open it.
PERMISO PASADO: was/were allowed to (no 'could' para un permiso concreto).
HÁBITOS PASADOS: used to (estados y acciones) / would (solo acciones repetidas): We used to live there. Every day he would walk to work.
⚠️ 'could' = habilidad general; para un éxito concreto → managed to / was able to.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Yesterday I could finish the race → ✅ I managed to / was able to finish.\n· ❌ I would have a dog (estado) → ✅ I used to have a dog.\n· ✅ 'couldn't' sí vale para un fallo concreto: I couldn't find it.\n· Permiso concreto pasado → was allowed to."),
    grammarEx("Use of English — Capacidad y hábitos pasados", "Completa o elige.", [
      mc("Choose (specific achievement):", ["Yesterday I could pass the exam.", "Yesterday I managed to pass the exam.", "Yesterday I can pass the exam."], 1, "logro puntual → managed to."),
      fb("The fire spread, but everyone ___ ___ (be able) escape.", ["was able to"], "logro puntual → was able to."),
      fb("She ___ (can) read when she was three. (habilidad general)", ["could"], "could (habilidad general)."),
      fb("When I was young, I ___ ___ (used) live by the sea. (estado)", ["used to"], "estado pasado → used to."),
      mc("Choose:", ["Every summer we would go to the coast.", "Every summer we would have a big house.", "Every summer we used go to the coast."], 0, "would para acciones."),
      fb("As a child, I ___ ___ (not/be able) swim.", ["wasn't able to", "couldn't"], "negativa → couldn't/wasn't able to."),
      fb("We ___ ___ (be allow) stay up late on Fridays. (permiso pasado)", ["were allowed to"], "was/were allowed to."),
    ]),
    GRAMMAR("Vocabulario del día — Los derechos", "Léxico de derechos y libertades (B2)."),
    deck("B2 S4D19 — Los derechos", [
      ["rights", "derechos", "Everyone has basic human rights.", "sustantivo", "raɪts"],
      ["freedom", "libertad", "Freedom of speech is essential.", "sustantivo", "ˈfriːdəm"],
      ["equality", "igualdad", "They fought for equality.", "sustantivo", "ɪˈkwɒləti"],
      ["discrimination", "discriminación", "Discrimination is illegal.", "sustantivo", "dɪˌskrɪmɪˈneɪʃn"],
      ["protest", "protestar / protesta", "Thousands joined the protest.", "verbo/sustantivo", "ˈprəʊtest"],
      ["campaign", "campaña / hacer campaña", "She led a campaign for change.", "sustantivo/verbo", "kæmˈpeɪn"],
      ["oppression", "opresión", "They rose up against oppression.", "sustantivo", "əˈpreʃn"],
      ["entitled to", "con derecho a", "Everyone is entitled to a fair trial.", "colocación", "ɪnˈtaɪtld tu"],
      ["stand up for", "defender / dar la cara por", "You should stand up for your rights.", "phrasal verb", "stænd ˈʌp fɔː"],
      ["injustice", "injusticia", "He couldn't ignore such injustice.", "sustantivo", "ɪnˈdʒʌstɪs"],
    ]),
    vocabEx("Vocabulario — Los derechos", "Elige la opción correcta.", [
      mc("Treating people unfairly because of who they are is ___.", ["discrimination", "equality", "freedom"], 0, "discrimination."),
      mc("The state of being treated the same as everyone else is ___.", ["equality", "oppression", "protest"], 0, "equality."),
      mc("To publicly show you disagree with something is to ___.", ["protest", "campaign", "entitle"], 0, "protest (o campaign)."),
      mc("If you have the right to something, you are ___ it.", ["entitled to", "campaigning for", "standing up for"], 0, "entitled to."),
      mc("To defend your rights or someone else's is to ___ them.", ["stand up for", "protest", "campaign"], 0, "stand up for."),
      mc("Cruel and unjust treatment by those in power is ___.", ["oppression", "equality", "freedom"], 0, "oppression."),
    ]),

    ...uoe({
      p1: {
        title: "The long road to rights",
        text: "It is easy to take our rights for (1)___, but almost every freedom we now enjoy was won only after a long and often bitter struggle. The right to vote, to a fair trial, to speak freely, to be treated (2)___ regardless of background — none of these was simply handed down by the powerful. Each was (3)___ for, sometimes over generations, by ordinary people who refused to accept injustice. It is worth remembering this, because rights that were hard to win can be easy to (4)___. Freedoms that one generation fought and even died for can be quietly eroded by the next, (5)___ takes them for granted. History teaches us that rights are never permanently (6)___; they must be defended, in every generation, against those who would (7)___ them away. The price of freedom, as the old saying goes, is eternal vigilance. We honour those who (8)___ up for their rights in the past best by continuing to stand up for them today.",
        q: [
          mc("(1)", ["granted", "given", "allowed", "taken"], 0, "'take our rights for granted'."),
          mc("(2)", ["equally", "equal", "equality", "even"], 0, "adverbio → equally."),
          mc("(3)", ["fought", "won", "struggled", "battled"], 0, "'was fought for'."),
          mc("(4)", ["lose", "loss", "drop", "miss"], 0, "'easy to lose'."),
          mc("(5)", ["which", "who", "that", "what"], 0, "'the next, which takes them for granted'."),
          mc("(6)", ["secure", "safe", "sure", "certain"], 0, "'never permanently secure'."),
          mc("(7)", ["take", "put", "give", "throw"], 0, "'take them away'."),
          mc("(8)", ["stood", "stand", "stands", "standing"], 0, "'those who stood up for their rights'."),
        ],
      },
      p2: {
        title: "The freedom we forget",
        text: "Of (1)___ the freedoms we enjoy, perhaps the most easily forgotten is the freedom to fail. In earlier, harsher times, a person who could not (2)___ to make a living had few options and little mercy. Today, in wealthy societies at least, we (3)___ the extraordinary luxury of being able to try things, fail, and try again. A young person can start a business, watch (4)___ collapse, and start another, without facing destitution. This freedom to fail, though we rarely think of it (5)___ a freedom at all, is one of the great engines of progress. Where people are terrified of failure, they take no risks, and where no (6)___ takes risks, nothing new is ever created. It is no coincidence that the most innovative societies tend to be (7)___ where failure carries the least stigma. We (8)___ do well to remember that the right to fail, and to be given another chance, is a precious freedom, and one worth protecting.",
        q: [
          fb("(1)", ["all"], "'Of all the freedoms'."),
          fb("(2)", ["manage"], "'could not manage to make a living'."),
          fb("(3)", ["have", "enjoy"], "'we have/enjoy the luxury'."),
          fb("(4)", ["it"], "'watch it collapse'."),
          fb("(5)", ["as"], "'think of it as a freedom'."),
          fb("(6)", ["one"], "'where no one takes risks'."),
          fb("(7)", ["those"], "'tend to be those where'."),
          fb("(8)", ["would"], "'We would do well to remember'."),
        ],
      },
      p3: {
        title: "The power of peaceful protest",
        text: "History offers a striking (1)___: some of the most profound social changes have been achieved not through violence but through its opposite. The great movements for civil (2)___, for the vote, for independence from colonial rule, succeeded in large part because their leaders understood the extraordinary (3)___ of peaceful, disciplined protest. There is a deep (4)___ here. When protesters respond to (5)___ with dignity and non-violence, they place their opponents in an impossible position. Any brutal response only reveals the (6)___ of the system they are protesting against, winning sympathy for their cause. This is not to say that peaceful protest is easy or (7)___ successful; it requires immense courage and often terrible sacrifice. But it reminds us of a truth that the powerful consistently underestimate: that moral authority can, in the end, prove (8)___ than force.",
        items: [
          { root: "paradox", accepted: ["paradox"], hint: "'a striking paradox' (sustantivo)." },
          { root: "right", accepted: ["rights"], hint: "sustantivo plural → rights." },
          { root: "power", accepted: ["power"], hint: "'the power of protest' (sustantivo)." },
          { root: "wise", accepted: ["wisdom"], hint: "sustantivo → wisdom." },
          { root: "oppress", accepted: ["oppression"], hint: "sustantivo → oppression." },
          { root: "just", accepted: ["injustice"], hint: "sustantivo → injustice." },
          { root: "vary", accepted: ["invariably"], hint: "'not invariably successful' → invariably." },
          { root: "power", accepted: ["more powerful"], hint: "comparativo → more powerful." },
        ],
      },
      p4: {
        title: "Transformaciones — capacidad y hábitos pasados",
        items: [
          { s1: "The fire spread quickly, but they escaped.", key: "ABLE", s2: "The fire spread quickly, but they ___ escape.", accepted: ["were able to", "managed to"], explanation: "logro puntual → were able to/managed to." },
          { s1: "When I was a child, I lived in the countryside.", key: "USED", s2: "I ___ in the countryside as a child.", accepted: ["used to live"], explanation: "estado pasado → used to." },
          { s1: "We finally succeeded in solving the problem.", key: "MANAGED", s2: "We ___ the problem.", accepted: ["managed to solve"], explanation: "managed to + inf." },
          { s1: "She had the ability to read at the age of three.", key: "COULD", s2: "She ___ at the age of three.", accepted: ["could read"], explanation: "habilidad general → could." },
          { s1: "As children, we had permission to stay up late on Fridays.", key: "ALLOWED", s2: "As children, we ___ up late on Fridays.", accepted: ["were allowed to stay"], explanation: "were allowed to." },
          { s1: "Every summer, my grandfather told us the same stories.", key: "WOULD", s2: "Every summer, my grandfather ___ us the same stories.", accepted: ["would tell"], explanation: "would para acciones repetidas." },
        ],
      },
      p5: {
        title: "The woman who couldn't vote",
        text: "My great-grandmother, who died when I was a teenager, was born into a world in which she was not permitted to vote. For the first thirty years of her life, half the adult population of her country was legally barred from having any say in how it was governed, for no reason other than that they happened to be women. It is a fact so absurd that it can be genuinely difficult, from the comfort of the present, to take it seriously. And yet it was, within living memory, simply the way things were.\n\nWhat I find most humbling is not the injustice itself, terrible though it was, but the courage of those who refused to accept it. The women who campaigned for the vote were not, for the most part, radicals or troublemakers. They were ordinary women — teachers, mothers, factory workers — who had simply concluded that they could no longer tolerate being treated as less than full citizens. They were mocked, insulted, and in many cases imprisoned. Some endured brutal treatment; a few died. And they kept going, year after year, decade after decade, for a right that many of them would not live to exercise.\n\nMy great-grandmother was not, as far as I know, one of the famous campaigners. She was an ordinary woman who lived an ordinary life. But she was among the first generation of women in her country able to cast a vote, and I am told she never, in the remaining fifty years of her life, missed a single election. She understood, in a way that those of us who have never been denied the right can perhaps never fully grasp, exactly what it was worth.\n\nI think of her every time I vote, and every time I am tempted, out of laziness or cynicism, not to bother. The right I exercise so casually was, for her, the hard-won prize of a struggle that consumed lifetimes. To fail to use it would be, it seems to me, a kind of betrayal — not only of her, but of everyone who fought, and suffered, and in some cases died, so that people like me would never have to.",
        q: [
          mc("What was the narrator's great-grandmother not permitted to do for the first 30 years of her life?", ["Work.", "Vote.", "Travel.", "Marry."], 1, "'she was not permitted to vote'."),
          mc("Who were the women who campaigned for the vote, mostly?", ["Radicals.", "Ordinary women — teachers, mothers, workers.", "Rich women.", "Politicians."], 1, "'ordinary women — teachers, mothers, factory workers'."),
          mc("What did many campaigners face?", ["Praise.", "Mockery, insults and imprisonment.", "Wealth.", "Nothing."], 1, "'mocked, insulted, and… imprisoned'."),
          mc("What did the great-grandmother do after gaining the vote?", ["Never voted.", "Never missed a single election in fifty years.", "Emigrated.", "Campaigned."], 1, "'never… missed a single election'."),
          mc("How does the narrator feel about not voting?", ["It's fine.", "It would be a kind of betrayal.", "It's clever.", "It's normal."], 1, "'To fail to use it would be… a kind of betrayal'."),
          mc("What does the narrator suggest we cannot fully grasp?", ["How to vote.", "What the right to vote was worth to those denied it.", "History.", "Politics."], 1, "'exactly what it was worth'."),
        ],
      },
      p6: {
        title: "The freedoms we don't notice",
        text: "We are, on the whole, extraordinarily bad at appreciating the freedoms we possess. (1)___ Like fish who cannot perceive the water they swim in, we simply do not notice the rights that surround us, precisely because they are always there.\n\nAsk most people to list their freedoms, and they will struggle. (2)___ The freedom to walk down the street without fear, to say what we think, to worship as we choose or not at all, to marry whom we love — these are so woven into the fabric of daily life that we forget they are freedoms at all.\n\nIt usually takes their absence to make us notice them. (3)___ People who have lived under oppression, or who have visited places where these freedoms do not exist, often describe a kind of shock on returning home.\n\nThis blindness to our own good fortune has a serious consequence. (4)___ Because we do not value what we have, we are careless in defending it, and freedoms can be lost through simple neglect.\n\nThe remedy is not complicated, though it requires a conscious effort. (5)___ Every so often, it is worth pausing to consider, quite deliberately, the countless freedoms we exercise without a second thought. (6)___ Gratitude, it turns out, is not merely a pleasant feeling; it is the beginning of the vigilance on which all our freedoms ultimately depend.",
        options: [
          "The very security of our rights makes them invisible.",       // A -> gap 1
          "The most important ones have become almost invisible.",       // B -> gap 2
          "Only when a freedom is taken away do we feel its weight.",     // C -> gap 3
          "A right we fail to value is a right we fail to protect.",      // D -> gap 4
          "We must learn, in short, to see the water we swim in.",        // E -> gap 5
          "To notice a freedom is the first step to defending it.",       // F -> gap 6
          "Nobody has ever had any freedoms worth protecting.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la seguridad los hace invisibles."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los más importantes son invisibles."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: solo al perderlos los sentimos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: no proteger lo que no se valora."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ver el agua en que nadamos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: notar una libertad es defenderla."),
        ],
      },
      p7: {
        title: "Four people talk about a cause they believe in",
        text: "Read what four people say about a cause they support.\n\nA) AMARA: I campaign for equal access to education. Where I grew up, girls were quietly discouraged from staying in school. I was one of the lucky ones — my parents fought for me. Now I fight for the millions who don't have parents like mine. Nothing changes a life, or a country, faster than educating a girl.\n\nB) DANIEL: For me, it's freedom of speech. I've seen, in other countries, what happens when people can be imprisoned simply for expressing an opinion. We take this freedom for granted here, and I don't think we should. The moment we start deciding that some opinions are too dangerous to be heard, we're on a very slippery slope.\n\nC) PRIYA: My cause is the environment, and I make no apology for being a nuisance about it. Future generations will have rights too — the right to a liveable planet — and they can't defend those rights themselves, because they don't exist yet. So someone has to speak for them. That someone might as well be me.\n\nD) TOM: I work with prisoners' rights, which is deeply unfashionable — nobody wins votes defending criminals. But I believe you can judge a society by how it treats its least popular members. A country that treats even its prisoners with basic dignity is a country that takes human rights seriously. The easy cases don't test our principles; the hard ones do.",
        q: [
          mc("Who campaigns for the education of girls?", ["A", "B", "C", "D"], 0, "Amara: 'equal access to education… educating a girl'."),
          mc("Who defends freedom of speech?", ["A", "B", "C", "D"], 1, "Daniel: 'For me, it's freedom of speech'."),
          mc("Who speaks on behalf of future generations?", ["A", "B", "C", "D"], 2, "Priya: 'Future generations will have rights too'."),
          mc("Who works on an unpopular cause?", ["A", "B", "C", "D"], 3, "Tom: 'deeply unfashionable… defending criminals'."),
          mc("Who was personally helped by supportive parents?", ["A", "B", "C", "D"], 0, "Amara: 'my parents fought for me'."),
          mc("Who warns about deciding which opinions can be heard?", ["A", "B", "C", "D"], 1, "Daniel: 'some opinions are too dangerous to be heard… slippery slope'."),
          mc("Who argues that those they defend cannot defend themselves?", ["A", "B", "C", "D"], 2, "Priya: 'they can't defend those rights themselves'."),
          mc("Who judges a society by how it treats unpopular people?", ["A", "B", "C", "D"], 3, "Tom: 'judge a society by how it treats its least popular members'."),
          mc("Who was one of the 'lucky ones'?", ["A", "B", "C", "D"], 0, "Amara: 'I was one of the lucky ones'."),
          mc("Who believes hard cases are what test our principles?", ["A", "B", "C", "D"], 3, "Tom: 'the hard ones do'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Young people today do not appreciate the rights and freedoms they have.'\nComenta estos dos aspectos y añade uno propio:\n1. history (la historia)\n2. responsibility (la responsabilidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A cause worth fighting for' — describe una causa en la que crees y por qué.\n· CARTA a un periódico defendiendo un derecho o libertad que consideras amenazado: argumenta tu postura.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una activista de derechos humanos, Sara Okonkwo (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a human rights activist, Sara Okonkwo. Interviewer: Sara, what first drew you to human rights work? Sara: Honestly, it was a sense of injustice I couldn't ignore. As a child, I saw people treated as less than human simply because of who they were. I couldn't understand it, and I still can't. Interviewer: Is it discouraging work? Sara: It can be, of course. Change is agonisingly slow. But I've learned to measure progress in decades, not days. If you look at the long view of history, the direction of travel is clear, even if it's slow. Interviewer: What's the biggest misconception about your work? Sara: That we're naive idealists. In fact, we're the realists. It's the people who think injustice can simply be ignored who are living in a fantasy. Sooner or later, oppression always produces resistance. Interviewer: You've faced real personal risk. Was it ever tempting to give up? Sara: Every single day. But then I remember that the rights I'm defending were won for me by people who faced far greater risks and never gave up. I owe them a debt I can only repay by carrying it forward. Interviewer: What gives you hope? Sara: Young people. This generation is more aware of injustice, and less willing to accept it, than any before it. Interviewer: And your message to them? Sara: Never believe that you're too small to make a difference. Every right you now enjoy exists because ordinary people once refused to accept things as they were. Interviewer: Thank you, Sara.", [
      mc("1. What first drew Sara to this work?", ["Money.", "A sense of injustice she couldn't ignore.", "Family tradition."], 1, "'a sense of injustice I couldn't ignore'."),
      mc("2. How has she learned to measure progress?", ["In days.", "In decades, not days.", "In money."], 1, "'in decades, not days'."),
      mc("3. What is the biggest misconception about her work?", ["That it's dangerous.", "That activists are naive idealists.", "That it's easy."], 1, "'That we're naive idealists'."),
      mc("4. Does she ever feel tempted to give up?", ["Never.", "Every single day.", "Rarely."], 1, "'Every single day'."),
      mc("5. What stops her giving up?", ["Money.", "A debt to those who won her rights.", "Fame."], 1, "'a debt I can only repay by carrying it forward'."),
      mc("6. What gives her hope?", ["The government.", "Young people.", "The law."], 1, "'Young people'."),
      mc("7. What is her message to young people?", ["Wait for change.", "Never believe you're too small to make a difference.", "Trust the powerful."], 1, "'Never believe that you're too small to make a difference'."),
    ]),

    ...speakingParts({ p1: "qué derechos o libertades valoras más, y una causa en la que creas", p2: "dos escenas de acción social (una manifestación pacífica y una campaña en redes): compáralas y di cuál es más eficaz", p3: "qué causa merece más apoyo hoy (el medio ambiente, la igualdad, la educación, la libertad de expresión, los derechos de los animales): comentadlo y elegid la más urgente", p4: "los derechos y las libertades: si los jóvenes los valoran, si la protesta pacífica funciona y cómo se logran los cambios sociales" }),

    SUMMARY("Resumen del Día 19", [
      "Capacidad: could (habilidad general); managed to / was able to (logro puntual); couldn't (fallo puntual).",
      "Hábitos pasados: used to (estados y acciones) / would (solo acciones). Permiso pasado: was allowed to.",
      "Vocabulario de derechos. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 20", "Escribe frases con managed to / used to / would sobre tu pasado. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 20 ─────────────────────────
const DAY20 = {
  title: "Día 20 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los modales (deducción, obligación, crítica, capacidad). Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 4.",
  pedagogy: {
    objective: "Consolidar todos los usos de los modales del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 5."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 4 del B2. Consolidas los modales: deducción (must/can't have), obligación/permiso, crítica pasada (should have) y capacidad (managed to). Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 4", `1) Deducción: must/can't/might be; must/can't/might have + participio.
2) Obligación/prohibición/permiso: must, mustn't, don't have to, be allowed to.
3) Crítica pasada: should/could/might have + participio; needn't have vs didn't need to.
4) Capacidad y hábitos: could/managed to/was able to; used to/would.`),
    grammarEx("Use of English — Repaso mixto de la Semana 4", "Completa o elige.", [
      mc("He's not here. He ___ have left already.", ["can't", "must", "mustn't"], 1, "seguro → must have."),
      mc("It's free, so you ___ pay.", ["mustn't", "don't have to", "can't"], 1, "no hace falta → don't have to."),
      fb("You ___ ___ ___ (should/tell) me earlier. (crítica)", ["should have told"], "should have + participio."),
      fb("The fire spread, but they ___ ___ (be able) escape. (logro)", ["were able to", "managed to"], "logro puntual."),
      fb("You ___ ___ ___ (needn't/cook) — we'd eaten. (en vano)", ["needn't have cooked"], "needn't have."),
      mc("Choose:", ["You mustn't smoke here.", "You don't have to smoke here.", "You needn't smoke here."], 0, "prohibido → mustn't."),
      fb("As a child, I ___ ___ (used) live abroad. (estado)", ["used to"], "used to."),
      mc("Choose:", ["She can't have finished so quickly.", "She mustn't have finished so quickly.", "She can't finished so quickly."], 0, "imposible → can't have."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 4", "Repasa los mazos (delito, ley, errores, derechos)."),
    vocabEx("Vocabulario — Repaso de la Semana 4", "Elige la opción correcta.", [
      mc("A person the police think may be guilty:", ["suspect", "witness", "clue"], 0, "suspect."),
      mc("Required to do by law:", ["compulsory", "legal", "strict"], 0, "compulsory."),
      mc("To admit you did something wrong:", ["own up to it", "cover it up", "blame it"], 0, "own up to it."),
      mc("Treating people unfairly because of who they are:", ["discrimination", "equality", "freedom"], 0, "discrimination."),
      mc("To escape punishment for a crime:", ["get away with it", "commit it", "convict it"], 0, "get away with it."),
      mc("To officially forbid something:", ["ban", "obey", "enforce"], 0, "ban."),
      mc("To disappoint someone who relied on you:", ["let them down", "own up", "slip up"], 0, "let down."),
      mc("If you have the right to something, you are ___ it:", ["entitled to", "campaigning for", "banned from"], 0, "entitled to."),
    ]),

    ...uoe({
      p1: {
        title: "The surveillance society",
        text: "We live, increasingly, under the gaze of the camera. In many cities, it is now almost impossible to walk down a street without being (1)___ dozens of times. Supporters argue that this surveillance makes us safer, and there is (2)___ to the claim: cameras undoubtedly help to solve crimes and may (3)___ some criminals from acting in the first place. Yet critics raise a troubling question: what is the (4)___ we pay for this security? A society in which every citizen is constantly watched is one in which privacy, that quiet but precious freedom, has effectively (5)___ to exist. Once, we assumed we (6)___ walk through public space unobserved. Today, we must assume the opposite. Perhaps the most worrying aspect is how (7)___ we have accepted this transformation, sleepwalking into a world our grandparents would have found deeply alarming. The question we (8)___ to ask ourselves is not merely whether surveillance works, but what kind of society we wish to live in.",
        q: [
          mc("(1)", ["filmed", "photographed", "watched", "recorded"], 2, "'being watched dozens of times'."),
          mc("(2)", ["something", "anything", "nothing", "everything"], 0, "'there is something to the claim'."),
          mc("(3)", ["deter", "stop", "prevent", "discourage"], 0, "'deter some criminals'."),
          mc("(4)", ["price", "cost", "charge", "fee"], 0, "'the price we pay'."),
          mc("(5)", ["ceased", "stopped", "ended", "finished"], 0, "'ceased to exist'."),
          mc("(6)", ["could", "can", "would", "might"], 0, "'we could walk… unobserved'."),
          mc("(7)", ["readily", "easily", "willingly", "quickly"], 0, "'how readily we have accepted'."),
          mc("(8)", ["need", "ought", "should", "have"], 0, "'the question we need to ask'."),
        ],
      },
      p2: {
        title: "Should everything be legal that is not harmful?",
        text: "There is a principle, popular among some thinkers, that the law should only forbid actions that cause harm (1)___ others. Anything I do that harms only myself, the argument (2)___, is my own business, and the state has no right to interfere. It is an attractive idea, and it (3)___ us well against the tyranny of those who would control every aspect of our lives. Yet on closer inspection, the principle turns out to be far (4)___ simple than it first appears. Very few of our actions affect only (5)___. The person who ruins their own health, for example, may (6)___ up needing expensive care that others must pay for. The line between harming (7)___ and harming others is, in practice, almost impossible to draw. This does not mean the principle is worthless — far from it. But it reminds us that (8)___ in a society, we are never quite as separate from one another as we like to imagine.",
        q: [
          fb("(1)", ["to"], "'cause harm to others'."),
          fb("(2)", ["goes", "runs"], "'the argument goes'."),
          fb("(3)", ["protects", "defends"], "'it protects us well'."),
          fb("(4)", ["less"], "'far less simple'."),
          fb("(5)", ["ourselves"], "reflexivo → ourselves."),
          fb("(6)", ["end"], "'may end up needing care'."),
          fb("(7)", ["yourself", "oneself"], "'harming yourself/oneself'."),
          fb("(8)", ["living"], "'living in a society'."),
        ],
      },
      p3: {
        title: "Justice and mercy",
        text: "At the heart of every legal system lies a difficult (1)___ between two values that often pull in opposite directions: justice and mercy. Justice demands that wrongdoing be (2)___; mercy asks us to temper punishment with compassion. A system that offers justice without mercy quickly becomes (3)___, punishing the desperate as harshly as the wicked. But a system that offers mercy without justice fails the victims of crime and (4)___ the law itself. The (5)___ of a mature legal system is that it holds these two values in balance. It insists that the guilty be (6)___ to account, while recognising that human beings are complicated, that circumstances matter, and that the (7)___ of punishment is not merely to inflict suffering but, where possible, to allow for (8)___ and reform. Getting this balance right is one of the oldest and hardest challenges any society faces.",
        items: [
          { root: "tense", accepted: ["tension"], hint: "sustantivo → tension." },
          { root: "punish", accepted: ["punished"], hint: "'wrongdoing be punished' (participio)." },
          { root: "cruel", accepted: ["cruel"], hint: "'becomes cruel' (adjetivo)." },
          { root: "mine", accepted: ["undermines"], hint: "'undermines the law' → undermines." },
          { root: "mark", accepted: ["mark"], hint: "'The mark of a mature system' (sustantivo)." },
          { root: "hold", accepted: ["held"], hint: "'be held to account' (participio)." },
          { root: "pure", accepted: ["purpose"], hint: "sustantivo → purpose." },
          { root: "redeem", accepted: ["redemption"], hint: "sustantivo → redemption." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 4",
        items: [
          { s1: "I'm certain he took the money.", key: "MUST", s2: "He ___ the money.", accepted: ["must have taken"], explanation: "must have + participio." },
          { s1: "It isn't necessary for you to apologise.", key: "HAVE", s2: "You ___ apologise.", accepted: ["don't have to"], explanation: "no hace falta." },
          { s1: "It was wrong of me not to warn you.", key: "SHOULD", s2: "I ___ you.", accepted: ["should have warned"], explanation: "should have + participio." },
          { s1: "The door was locked, but somehow they got out.", key: "MANAGED", s2: "The door was locked, but they ___ out.", accepted: ["managed to get"], explanation: "logro puntual → managed to." },
          { s1: "Smoking is forbidden in the building.", key: "ALLOWED", s2: "You ___ smoke in the building.", accepted: ["aren't allowed to", "are not allowed to"], explanation: "not allowed to." },
          { s1: "It's impossible that she knew about it.", key: "KNOWN", s2: "She ___ about it.", accepted: ["can't have known", "couldn't have known"], explanation: "can't have + participio." },
        ],
      },
      p5: {
        title: "The judge who chose mercy",
        text: "It was, by any measure, a straightforward case. A young man, barely eighteen, had been caught stealing food from a supermarket. He had no defence; the security footage was clear, and he did not deny it. Under the strict interpretation of the law, and given a previous minor offence, the judge would have been fully entitled to impose a custodial sentence. Everyone in the courtroom expected her to do so. What happened instead has become, in that small town, something of a legend.\n\nBefore passing sentence, the judge did something unusual: she asked the young man why he had done it. There was a long silence. Then, haltingly, he explained. He had lost his job three weeks earlier. His mother was ill and unable to work. There was a younger sister at home. The food he had stolen — bread, milk, some tins — was not for himself but for them. He had tried everything else first, he said; the theft had been a last resort, an act not of greed but of desperation.\n\nThe judge listened in silence. When he had finished, she spoke. She acknowledged that a crime had been committed, and that the law could not simply be ignored. But she also observed that the purpose of justice was not merely to punish, but to serve the wider good of society, and that no good whatsoever would be served by sending a desperate young man to prison for trying to feed his family. She imposed the smallest possible penalty, and then, to the astonishment of the court, announced that she would pay it herself. Furthermore, she instructed a court official to help the young man find work and access the support he was clearly entitled to but had never known how to claim.\n\nThe case caused a certain amount of controversy. Some argued that the judge had overstepped her role, that mercy of this kind undermines the equal application of the law. It is a serious objection, and not without merit. But others saw in her decision something we too often forget: that behind every case is a human being, that the letter of the law and the spirit of justice are not always the same thing, and that a society is judged, in the end, not by how it treats the powerful, but by how it treats the desperate. The young man, it is reported, found work within the month. He has never been in trouble since.",
        q: [
          mc("What had the young man done?", ["Assault.", "Stolen food from a supermarket.", "Fraud.", "Nothing."], 1, "'caught stealing food from a supermarket'."),
          mc("What unusual thing did the judge do before sentencing?", ["Left the court.", "Asked him why he had done it.", "Called the police.", "Consulted a lawyer."], 1, "'she asked the young man why he had done it'."),
          mc("Why had he stolen the food?", ["Greed.", "Desperation, to feed his ill mother and sister.", "A dare.", "By accident."], 1, "'an act not of greed but of desperation'."),
          mc("What did the judge do about the penalty?", ["Doubled it.", "Imposed the smallest penalty and paid it herself.", "Sent him to prison.", "Cancelled the case."], 1, "'the smallest possible penalty… she would pay it herself'."),
          mc("What objection did some people raise?", ["The sentence was too harsh.", "That such mercy undermines the equal application of the law.", "That he was innocent.", "That she was too slow."], 1, "'mercy of this kind undermines the equal application of the law'."),
          mc("According to the writer, how is a society ultimately judged?", ["By how it treats the powerful.", "By how it treats the desperate.", "By its wealth.", "By its laws."], 1, "'not by how it treats the powerful, but by how it treats the desperate'."),
        ],
      },
      p6: {
        title: "The right to be forgotten",
        text: "In the age of the internet, a new and unexpected question about our rights has arisen. (1)___ It concerns not our right to know, but our right, in a sense, to be forgotten.\n\nBefore the internet, human memory was mercifully imperfect. (2)___ A youthful mistake, an embarrassing episode, a foolish remark — these would fade, in time, from the memories of all but a few, allowing people to move on and remake themselves.\n\nThe internet has changed this completely. (3)___ Today, a single ill-judged photograph or comment can follow a person for the rest of their life, endlessly searchable, never forgotten. A mistake made at seventeen can still be haunting someone at seventy.\n\nThis has led to calls for a legal 'right to be forgotten' — the right to have certain information about oneself removed from search results. (4)___ Supporters argue that without it, we lose something essential to human dignity: the ability to grow, change and leave our past behind.\n\nCritics, however, raise a serious objection. (5)___ The right to be forgotten, they warn, could easily become a tool for the powerful to erase inconvenient truths about themselves. (6)___ Where, exactly, does one person's right to privacy end and another's right to know begin? It is a question our societies have only just begun to grapple with, and one that will define the coming decades.",
        options: [
          "It is a question that no previous generation ever had to face.", // A -> gap 1
          "The things we did in the past did not follow us forever.",       // B -> gap 2
          "Nothing, it seems, is ever truly deleted.",                      // C -> gap 3
          "Several countries have now recognised exactly such a right.",     // D -> gap 4
          "One person's forgetting may be another's dangerous ignorance.",   // E -> gap 5
          "The balance is extraordinarily difficult to strike.",            // F -> gap 6
          "The internet has never stored any personal information.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ninguna generación lo enfrentó."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el pasado no nos seguía siempre."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: nada se borra de verdad."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algunos países lo reconocen."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: olvidar puede ser ignorancia peligrosa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el equilibrio es dificilísimo."),
        ],
      },
      p7: {
        title: "Four people discuss justice and punishment",
        text: "Read what four people say about crime and punishment.\n\nA) NADIA: I believe firmly in second chances. People, especially young people, make terrible mistakes, but they can change. A system that simply locks people up and throws away the key isn't protecting society; it's just creating more damaged, angry people who'll offend again. Rehabilitation isn't soft — it's smart.\n\nB) VICTOR: I have some sympathy with that, but I think we forget the victims. When we talk endlessly about the criminal's difficult childhood, we can lose sight of the person whose life they destroyed. Justice has to mean something. A society that doesn't punish wrongdoing properly fails the people who were wronged.\n\nC) SANA: What strikes me is how unequally the law is applied. The same crime gets a wildly different response depending on who you are, where you live, how much money you have for a lawyer. Until we fix that, all our fine talk about 'justice' is frankly hollow. Equal justice or no justice.\n\nD) TOM: I think we lock far too many people up, and it does very little good. Prison is astronomically expensive and, for many crimes, achieves almost nothing except making things worse. For non-violent offences especially, there are far cheaper and more effective alternatives. We keep doing what doesn't work simply because it feels tough.",
        q: [
          mc("Who most strongly emphasises rehabilitation and second chances?", ["A", "B", "C", "D"], 0, "Nadia: 'I believe firmly in second chances… Rehabilitation… is smart'."),
          mc("Who worries that we forget the victims of crime?", ["A", "B", "C", "D"], 1, "Victor: 'we forget the victims'."),
          mc("Who is most concerned about inequality in the justice system?", ["A", "B", "C", "D"], 2, "Sana: 'how unequally the law is applied'."),
          mc("Who argues that prison is expensive and often ineffective?", ["A", "B", "C", "D"], 3, "Tom: 'Prison is astronomically expensive… achieves almost nothing'."),
          mc("Who believes locking people up creates more offenders?", ["A", "B", "C", "D"], 0, "Nadia: 'creating more damaged, angry people who'll offend again'."),
          mc("Who insists that wrongdoing must be properly punished?", ["A", "B", "C", "D"], 1, "Victor: 'A society that doesn't punish wrongdoing properly fails…'"),
          mc("Who says talk of justice is hollow while it's applied unequally?", ["A", "B", "C", "D"], 2, "Sana: 'all our fine talk about \"justice\" is frankly hollow'."),
          mc("Who favours cheaper alternatives for non-violent crimes?", ["A", "B", "C", "D"], 3, "Tom: 'cheaper and more effective alternatives'."),
          mc("Who thinks we continue harsh policies because they feel tough?", ["A", "B", "C", "D"], 3, "Tom: 'because it feels tough'."),
          mc("Who reminds us that criminals can genuinely change?", ["A", "B", "C", "D"], 0, "Nadia: 'they can change'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The main purpose of prison should be to rehabilitate criminals, not to punish them.'\nComenta estos dos aspectos y añade uno propio:\n1. society (la sociedad)\n2. the victims (las víctimas)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'Do we have too much surveillance?' — analiza las ventajas y desventajas de las cámaras de vigilancia.\n· INFORME para las autoridades sobre la seguridad en tu barrio: describe la situación y propón mejoras.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: The lights are off and the car's gone — they must have left already. Two. Man: You needn't have paid; it was on the house. Three. Woman: Honestly, you should have told me the truth from the start. Four. Man: The alarm was going off, but somehow we managed to sleep through it. Five. Woman: When I was young, we weren't allowed to speak at the dinner table. Six. Man: He can't have committed the crime — he was abroad at the time. Seven. Woman: You really ought to apologise to her, you know. Eight. Man: Everyone's entitled to their opinion, even if I completely disagree with it.", [
      mc("1. What does the woman conclude?", ["They're home.", "They must have left already.", "They're asleep."], 1, "'they must have left already'."),
      mc("2. What does the man tell the woman?", ["She should pay.", "She needn't have paid.", "She paid too little."], 1, "'You needn't have paid'."),
      mc("3. What is the woman's criticism?", ["He was late.", "He should have told the truth.", "He was rude."], 1, "'you should have told me the truth'."),
      mc("4. What did they manage to do?", ["Wake up.", "Sleep through the alarm.", "Turn it off."], 1, "'managed to sleep through it'."),
      mc("5. What weren't they allowed to do as children?", ["Eat.", "Speak at the dinner table.", "Leave."], 1, "'weren't allowed to speak at the dinner table'."),
      mc("6. Why is the man sure of his innocence?", ["He confessed.", "He was abroad at the time.", "He has an alibi witness."], 1, "'he was abroad at the time'."),
      mc("7. What does the woman advise?", ["To stay silent.", "To apologise to her.", "To leave."], 1, "'you ought to apologise to her'."),
      mc("8. What is the man's view?", ["Only his opinion counts.", "Everyone is entitled to their opinion.", "No one should have opinions."], 1, "'Everyone's entitled to their opinion'."),
    ]),

    ...speakingParts({ p1: "tu opinión sobre la justicia y el castigo, y si crees que la gente valora sus derechos", p2: "dos formas de responder al delito (una cárcel y un programa de reinserción): compáralas y di cuál es mejor para la sociedad", p3: "qué debería priorizar el sistema de justicia (castigar, reinsertar, proteger a las víctimas, prevenir, tratar a todos por igual): comentadlo y elegid lo más importante", p4: "la justicia, el delito y los derechos: si la cárcel funciona, si tenemos demasiada vigilancia y cómo equilibrar seguridad y libertad" }),

    SUMMARY("Resumen de la Semana 4 (B2)", [
      "Dominas los modales: deducción, obligación/permiso, crítica pasada (should have) y capacidad (managed to).",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: la voz pasiva (todas sus formas) y el estilo indirecto avanzado.",
    ]),
    INFO("Mini-simulacro de la Semana 4", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 5."),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "La ley, el delito y los modales",
  description: "Modales de deducción, obligación, prohibición, crítica del pasado (should have) y capacidad (managed to). Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
