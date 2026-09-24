/**
 * B2 First · Semana 9 — "Expresiones, formación de palabras y registro".
 * Gramática/léxico: expresiones idiomáticas y frases hechas, formación de
 * palabras (prefijos y sufijos), registro formal e informal, y frases
 * preposicionales + colocaciones fijas.
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, to be honest, in my view, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they appear to, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a fair point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 41 ─────────────────────────
const DAY41 = {
  title: "Día 41 — Expresiones idiomáticas · La vida diaria y las emociones",
  description: "Expresiones idiomáticas y frases hechas frecuentes. Vocabulario de emociones. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Reconocer y usar expresiones idiomáticas frecuentes.",
    summary: "Expresiones idiomáticas; emociones; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["traducir idioms literalmente.", "cambiar palabras del idiom.", "usarlos en registro muy formal."],
    reviewPrompts: ["¿Qué significa 'to be over the moon'?", "¿'once in a blue moon'?"],
  },
  items: [
    TEXT("🔁 Semana 9. Hoy las EXPRESIONES IDIOMÁTICAS: frases hechas que no se traducen literalmente. Vocabulario: la VIDA DIARIA y las EMOCIONES."),
    GRAMMAR("Expresiones idiomáticas", `Los idioms tienen un significado que no se deduce de las palabras sueltas. Se aprenden como bloques FIJOS (no cambies las palabras).
FELICIDAD/TRISTEZA: over the moon (feliz), on top of the world, down in the dumps (triste), feeling blue.
FRECUENCIA/TIEMPO: once in a blue moon (rara vez), in the nick of time (justo a tiempo), out of the blue (de repente), at the drop of a hat (sin pensarlo).
ESFUERZO/DIFICULTAD: a piece of cake (muy fácil), no picnic (nada fácil), bite off more than you can chew, cost an arm and a leg (carísimo).
RELACIONES/COMUNICACIÓN: see eye to eye (estar de acuerdo), get on like a house on fire (llevarse genial), break the ice, get cold feet (echarse atrás).
OTROS: hit the nail on the head (dar en el clavo), the last straw (la gota que colma el vaso), let the cat out of the bag (irse de la lengua), under the weather (pachucho).
⚠️ No traduzcas literalmente. Úsalos sobre todo en contexto informal/hablado.`),
    WARN("Errores típicos del hispanohablante", "· Los idioms son FIJOS: 'a piece of cake' (no 'a piece of pie').\n· No traduzcas del español: 'costar un ojo de la cara' → 'cost an arm and a leg'.\n· 'to be over the moon' = estar encantado (no 'estar en la luna' = distraído).\n· Encajan mejor en registro informal."),
    grammarEx("Use of English — Expresiones idiomáticas", "Elige el idiom correcto.", [
      mc("She passed her exam and was absolutely thrilled — she was ___.", ["over the moon", "under the weather", "down in the dumps"], 0, "over the moon = feliz."),
      mc("The exam was really easy — a total ___.", ["piece of cake", "arm and a leg", "last straw"], 0, "a piece of cake = fácil."),
      mc("We rarely go out — only ___.", ["once in a blue moon", "in the nick of time", "at the drop of a hat"], 0, "once in a blue moon = rara vez."),
      mc("The two of them agree on everything; they always ___.", ["see eye to eye", "get cold feet", "break the ice"], 0, "see eye to eye = estar de acuerdo."),
      mc("That designer bag ___ — way too expensive.", ["cost an arm and a leg", "was a piece of cake", "hit the nail on the head"], 0, "cost an arm and a leg = carísimo."),
      mc("He was going to propose but got nervous and ___.", ["got cold feet", "broke the ice", "hit the nail"], 0, "got cold feet = echarse atrás."),
      mc("His comment was exactly right — he ___.", ["hit the nail on the head", "let the cat out of the bag", "was under the weather"], 0, "hit the nail on the head = dar en el clavo."),
    ]),
    GRAMMAR("Vocabulario del día — Las emociones (avanzado)", "Léxico de emociones (B2)."),
    deck("B2 S9D41 — Emociones", [
      ["overwhelmed", "abrumado/a", "I felt completely overwhelmed.", "adjetivo", "ˌəʊvəˈwelmd"],
      ["elated", "eufórico/a", "She was elated at the news.", "adjetivo", "ɪˈleɪtɪd"],
      ["devastated", "destrozado/a", "He was devastated by the loss.", "adjetivo", "ˈdevəsteɪtɪd"],
      ["apprehensive", "aprensivo/a / inquieto", "I'm apprehensive about the interview.", "adjetivo", "ˌæprɪˈhensɪv"],
      ["content", "a gusto / satisfecho", "She seems content with her life.", "adjetivo", "kənˈtent"],
      ["frustrated", "frustrado/a", "I get frustrated by delays.", "adjetivo", "frʌˈstreɪtɪd"],
      ["indifferent", "indiferente", "He was indifferent to their opinion.", "adjetivo", "ɪnˈdɪfrənt"],
      ["resentful", "resentido/a", "She felt resentful about the decision.", "adjetivo", "rɪˈzentfl"],
      ["exhilarated", "eufórico/a / lleno de energía", "I felt exhilarated after the climb.", "adjetivo", "ɪɡˈzɪləreɪtɪd"],
      ["at ease", "cómodo/a / a gusto", "She put everyone at ease.", "expresión", "ət ˈiːz"],
    ]),
    vocabEx("Vocabulario — Las emociones", "Elige la opción correcta.", [
      mc("Feeling extremely happy and excited is being ___.", ["elated", "indifferent", "resentful"], 0, "elated."),
      mc("Feeling completely destroyed by bad news is being ___.", ["devastated", "content", "at ease"], 0, "devastated."),
      mc("Feeling worried and nervous about something ahead is being ___.", ["apprehensive", "elated", "content"], 0, "apprehensive."),
      mc("Feeling calmly satisfied is being ___.", ["content", "resentful", "overwhelmed"], 0, "content."),
      mc("Feeling bitter about unfair treatment is being ___.", ["resentful", "elated", "at ease"], 0, "resentful."),
      mc("Feeling neither interested nor caring is being ___.", ["indifferent", "apprehensive", "exhilarated"], 0, "indifferent."),
    ]),

    ...uoe({
      p1: {
        title: "The language of feelings",
        text: "English is astonishingly rich in ways of describing how we feel, and much of that richness lies in its idioms. When we are happy, we may be 'over the (1)___'; when miserable, 'down in the (2)___'. A frightening experience can leave us 'shaken up'; a boring one may 'drive us up the (3)___'. What is fascinating about these expressions is that they are almost impossible to translate. Their meaning has nothing to do with the individual words: to be 'over the moon' has, of course, nothing to do with the moon. This is precisely what makes idioms so difficult for learners, and so revealing of a culture. Every language has developed its own store of such expressions, each a tiny window (4)___ how its speakers see the world. Mastering them is one of the last and hardest (5)___ in learning a language, but it is also one of the most rewarding. The learner who can not only speak correctly but also 'hit the nail on the (6)___' with the right idiom has crossed an important threshold. They are no longer merely translating from their own language; they have begun, at (7)___, to think in the new one. And there are few more satisfying feelings, for any language learner, than that of finally feeling truly at (8)___ in another tongue.",
        q: [
          mc("(1)", ["moon", "sky", "clouds", "stars"], 0, "'over the moon'."),
          mc("(2)", ["dumps", "blues", "depths", "hole"], 0, "'down in the dumps'."),
          mc("(3)", ["wall", "roof", "ceiling", "bend"], 0, "'drive us up the wall'."),
          mc("(4)", ["onto", "into", "on", "to"], 1, "'a window into how'."),
          mc("(5)", ["hurdles", "steps", "stages", "barriers"], 0, "'one of the last… hurdles'."),
          mc("(6)", ["head", "top", "point", "mark"], 0, "'hit the nail on the head'."),
          mc("(7)", ["last", "least", "best", "most"], 0, "'at last'."),
          mc("(8)", ["ease", "home", "peace", "rest"], 0, "'at ease' / 'at home'."),
        ],
      },
      p2: {
        title: "When idioms go wrong",
        text: "Getting an idiom slightly wrong can produce comically (1)___ results. A learner who says they 'jumped the shark' when they mean 'took the plunge', or that something 'costs an arm and a foot', reveals (2)___ once that English is not their first language, however fluent they may otherwise (3)___. This is because idioms are frozen; you cannot change a single word without breaking them. Even native speakers, (4)___, sometimes mangle them, producing what are known as 'mixed metaphors' — combining two idioms into a nonsensical whole, such as 'we'll burn that bridge when we come (5)___ it'. Such errors are a rich source of humour. But they also reveal something profound (6)___ language. Idioms are not built from logic but from history, tradition and shared culture. They must simply be learned, one (7)___ one, as fixed units. There are no rules, no shortcuts. For the language learner, this is both the frustration and the joy of idioms: (8)___ can only be acquired slowly, through immersion and exposure, until one day, without quite knowing how, you find them rising naturally to your lips.",
        q: [
          fb("(1)", ["strange", "odd", "wrong"], "'comically strange/odd results'."),
          fb("(2)", ["at"], "'reveals at once'."),
          fb("(3)", ["be"], "'however fluent they may… be'."),
          fb("(4)", ["however", "though"], "'Even native speakers, however'."),
          fb("(5)", ["to"], "'when we come to it'."),
          fb("(6)", ["about"], "'something profound about language'."),
          fb("(7)", ["by"], "'one by one'."),
          fb("(8)", ["they"], "'they can only be acquired slowly'."),
        ],
      },
      p3: {
        title: "Why we talk in metaphors",
        text: "We tend to think of metaphor as a (1)___ device, the special preserve of poets. In fact, it is one of the most (2)___ features of ordinary human thought. Analyse any everyday conversation and you will find it (3)___ with metaphor. We speak of 'grasping' an idea, of 'falling' in love, of a 'warm' welcome or a 'bright' future. None of these is meant (4)___; we are using concrete, physical experiences to make sense of abstract ones. This, cognitive scientists now believe, is not merely a matter of decoration. It reflects the very (5)___ of how the human mind works. We understand the abstract by mapping it onto the (6)___, using our bodily experience of the physical world as a foundation for our understanding of everything else. Time becomes a road we travel along; an argument becomes a battle to be won or lost; ideas become objects we can hold, examine and share. Far from being a mere literary (7)___, metaphor is one of the fundamental tools with which the human mind grasps a reality that would otherwise be, quite literally, (8)___.",
        items: [
          { root: "literature", accepted: ["literary"], hint: "adjetivo → literary." },
          { root: "penetrate", accepted: ["pervasive"], hint: "'pervasive features' → pervasive." },
          { root: "saturate", accepted: ["saturated"], hint: "'saturated with metaphor' (participio)." },
          { root: "literal", accepted: ["literally"], hint: "adverbio → literally." },
          { root: "nature", accepted: ["nature"], hint: "'the very nature of how' (sustantivo)." },
          { root: "concrete", accepted: ["concrete"], hint: "'onto the concrete' (adjetivo/sustantivo)." },
          { root: "flourish", accepted: ["flourish"], hint: "'a mere literary flourish' (sustantivo)." },
          { root: "grasp", accepted: ["ungraspable"], hint: "'literally ungraspable' → ungraspable." },
        ],
      },
      p4: {
        title: "Transformaciones — expresiones idiomáticas",
        items: [
          { s1: "She was absolutely delighted with the news.", key: "MOON", s2: "She was ___ with the news.", accepted: ["over the moon"], explanation: "over the moon = encantada." },
          { s1: "The exam was extremely easy.", key: "CAKE", s2: "The exam was ___ .", accepted: ["a piece of cake"], explanation: "a piece of cake = fácil." },
          { s1: "We very rarely eat out.", key: "BLUE", s2: "We eat out ___ .", accepted: ["once in a blue moon"], explanation: "once in a blue moon = rara vez." },
          { s1: "They agree about almost everything.", key: "EYE", s2: "They ___ on almost everything.", accepted: ["see eye to eye"], explanation: "see eye to eye = estar de acuerdo." },
          { s1: "The new car was extremely expensive.", key: "ARM", s2: "The new car cost ___ .", accepted: ["an arm and a leg"], explanation: "cost an arm and a leg = carísimo." },
          { s1: "His comment was exactly right.", key: "NAIL", s2: "His comment ___ .", accepted: ["hit the nail on the head"], explanation: "hit the nail on the head." },
        ],
      },
      p5: {
        title: "The interpreter's nightmare",
        text: "Of all the challenges facing a professional interpreter, none is more feared than the idiom. Grammar and vocabulary can be studied and mastered; idioms, which by their very nature mean something entirely different from the sum of their words, present a problem of a wholly different order. When a speaker, in the middle of a delicate negotiation, suddenly declares that 'the ball is in your court' or that they 'don't want to beat around the bush', the interpreter must, in a fraction of a second, recognise the expression, understand its true meaning, and find an equivalent in the target language — which may have no similar image at all.\n\nThe consequences of getting this wrong can range from the comic to the catastrophic. There are legendary tales, some no doubt exaggerated, of diplomatic incidents caused by mistranslated idioms. A leader who tells another, through an interpreter, that a proposal 'leaves them cold' may find their words rendered literally, suggesting they are physically chilly. An expression of enthusiasm may become an insult; a joke may become a threat. In the high-stakes world of international diplomacy, where a single misplaced word can derail months of careful negotiation, the interpreter's mastery of idiom is not a mere linguistic nicety but a matter of genuine consequence.\n\nWhat makes the task so extraordinarily difficult is that idioms cannot be translated directly. They must be replaced. The skilled interpreter does not translate 'it's raining cats and dogs' word for word, which would baffle any listener, but reaches instantly for whatever expression conveys the same idea of heavy rain in the target language. This requires not merely knowing two languages, but living deeply within two cultures, absorbing the countless idioms of each until they become second nature. It is the work of a lifetime, and even the greatest interpreters are occasionally caught out.\n\nPerhaps this is why the best interpreters are so quietly valued, and so rarely famous. Their triumph, when they succeed, is invisible: the two parties simply understand one another, and never know how close they came to disaster. It is only when an interpreter fails that their existence is noticed at all. They labour, in other words, in a profession in which perfection passes unremarked and only error is ever seen. There are few harder jobs, and few in which the mastery of something as apparently trivial as an idiom can matter quite so much.",
        q: [
          mc("Why are idioms the most feared challenge for interpreters?", ["They're long.", "They mean something different from the sum of their words.", "They're rare.", "They're formal."], 1, "'mean something entirely different from the sum of their words'."),
          mc("What must the interpreter do in a fraction of a second with an idiom?", ["Ignore it.", "Recognise it, understand it and find an equivalent.", "Translate it literally.", "Ask for a repeat."], 1, "'recognise the expression, understand its true meaning, and find an equivalent'."),
          mc("What can mistranslated idioms cause in diplomacy?", ["Nothing.", "Incidents ranging from the comic to the catastrophic.", "Praise.", "Laughter only."], 1, "'from the comic to the catastrophic'."),
          mc("Why can't idioms be translated directly?", ["They're too short.", "They must be replaced with an equivalent, not translated word for word.", "They have no meaning.", "They're secret."], 1, "'They must be replaced'."),
          mc("What does mastering idioms require, besides knowing two languages?", ["Nothing.", "Living deeply within two cultures.", "A dictionary.", "A degree."], 1, "'living deeply within two cultures'."),
          mc("Why are the best interpreters rarely famous?", ["They're lazy.", "Their success is invisible; only error is noticed.", "They're new.", "They avoid attention."], 1, "'perfection passes unremarked and only error is ever seen'."),
        ],
      },
      p6: {
        title: "The joy of a well-chosen word",
        text: "There is a particular pleasure, difficult to describe but instantly recognisable, in finding exactly the right word. (1)___ It is the satisfaction of the craftsman who finds the perfect tool, the sense of a thought clicking cleanly into place.\n\nMost of the time, of course, we do not think about the words we use at all. (2)___ Language, for the fluent speaker, is so automatic that it flows without conscious effort, like breathing.\n\nBut every so often, we reach for a word and find that none of the usual ones will quite do. (3)___ The thought we are trying to express is too precise, too subtle, for our everyday vocabulary.\n\nAnd then, if we are fortunate, the perfect word arrives. (4)___ Suddenly, a thought that was vague and cloudy becomes sharp and clear, captured exactly by a single, perfectly chosen term.\n\nThis is why a rich vocabulary is far more than a matter of showing off. (5)___ The words we possess are not merely labels for thoughts we already have; to a remarkable degree, they shape the very thoughts we are able to think. (6)___ A person with a richer store of words can quite literally think richer, more precise, more nuanced thoughts. To expand your vocabulary, in other words, is to expand your mind.",
        options: [
          "It is a small but genuine delight.",                           // A -> gap 1
          "They rise to our lips of their own accord.",                   // B -> gap 2
          "We search, and search, and come up empty.",                    // C -> gap 3
          "The relief, in that moment, is real.",                         // D -> gap 4
          "It is, quite literally, a way of thinking more clearly.",      // E -> gap 5
          "In this sense, our words are the boundaries of our world.",     // F -> gap 6
          "Nobody has ever cared which words they use.",                  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: un pequeño deleite."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las palabras salen solas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: buscamos y no encontramos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el alivio es real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: es pensar con más claridad."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: las palabras son los límites de nuestro mundo."),
        ],
      },
      p7: {
        title: "Four people talk about learning English",
        text: "Read what four people say about their experience of learning English.\n\nA) NADIA: The hardest part for me was never the grammar — it was the idioms. You can be perfectly correct and still sound like a textbook. The day I first used 'to be over the moon' naturally, without thinking, I felt I'd finally crossed some invisible line. Idioms are where a language really lives.\n\nB) TOM: For me, everything changed when I stopped translating in my head. For years, I'd hear English, translate it into my language, form a reply, translate it back — exhausting and slow. Then one day I realised I was just... thinking in English. I can't tell you when it happened, but it was the moment I became genuinely fluent.\n\nC) PRIYA: My advice to any learner is: make mistakes, and make them loudly. I spent years too embarrassed to speak, terrified of getting things wrong, and I made almost no progress. The moment I gave myself permission to sound foolish, I improved faster than in all the previous years combined. Perfectionism is the enemy of fluency.\n\nD) SAM: What surprised me most was how much of a language is culture, not words. I could translate every word of a joke and still not find it funny; I could be grammatically perfect and still, somehow, get it 'wrong'. Real fluency, I've come to believe, isn't about the language at all. It's about learning to see the world the way its speakers do.",
        q: [
          mc("Who found idioms the hardest and most meaningful part?", ["A", "B", "C", "D"], 0, "Nadia: 'the hardest part… was the idioms'."),
          mc("Who became fluent when they stopped translating in their head?", ["A", "B", "C", "D"], 1, "Tom: 'I stopped translating in my head'."),
          mc("Who advises learners to make mistakes boldly?", ["A", "B", "C", "D"], 2, "Priya: 'make mistakes, and make them loudly'."),
          mc("Who says fluency is about culture, not just words?", ["A", "B", "C", "D"], 3, "Sam: 'how much of a language is culture, not words'."),
          mc("Who describes crossing 'an invisible line'?", ["A", "B", "C", "D"], 0, "Nadia: 'crossed some invisible line'."),
          mc("Who found translating in their head exhausting?", ["A", "B", "C", "D"], 1, "Tom: 'exhausting and slow'."),
          mc("Who says perfectionism is the enemy of fluency?", ["A", "B", "C", "D"], 2, "Priya: 'Perfectionism is the enemy of fluency'."),
          mc("Who could translate a joke but still not find it funny?", ["A", "B", "C", "D"], 3, "Sam: 'translate every word of a joke and still not find it funny'."),
          mc("Who made little progress while afraid to speak?", ["A", "B", "C", "D"], 2, "Priya: 'too embarrassed to speak… almost no progress'."),
          mc("Who couldn't say exactly when they became fluent?", ["A", "B", "C", "D"], 1, "Tom: 'I can't tell you when it happened'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Everyone should learn at least one foreign language.'\nComenta estos dos aspectos y añade uno propio:\n1. career opportunities (las oportunidades laborales)\n2. understanding other cultures (entender otras culturas)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'The best way to learn a language' — comparte tus consejos y experiencia.\n· CARTA a un/a amigo/a que quiere aprender tu idioma: dale consejos prácticos y anímale.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: When I passed my driving test, I was absolutely over the moon. Two. Man: Honestly, the exam was a piece of cake — I finished in half the time. Three. Woman: We hardly ever eat out — only once in a blue moon. Four. Man: My sister and I get on like a house on fire; we never argue. Five. Woman: The holiday cost an arm and a leg, but it was worth every penny. Six. Man: He was about to give a speech but got cold feet at the last minute. Seven. Woman: Losing my job was the last straw; I decided to move abroad. Eight. Man: I've been feeling a bit under the weather all week.", [
      mc("1. How did the woman feel about passing?", ["Disappointed.", "Over the moon.", "Indifferent."], 1, "'absolutely over the moon'."),
      mc("2. What does the man say about the exam?", ["It was hard.", "It was a piece of cake.", "He failed."], 1, "'a piece of cake'."),
      mc("3. How often does the woman eat out?", ["Often.", "Once in a blue moon.", "Never."], 1, "'only once in a blue moon'."),
      mc("4. How do the man and his sister get on?", ["Badly.", "Like a house on fire.", "They argue often."], 1, "'get on like a house on fire'."),
      mc("5. What does the woman say about the holiday?", ["It was cheap.", "It cost a lot but was worth it.", "It was a waste."], 1, "'cost an arm and a leg, but… worth every penny'."),
      mc("6. What did the man do at the last minute?", ["Gave the speech.", "Got cold feet.", "Left."], 1, "'got cold feet'."),
      mc("7. What was the last straw for the woman?", ["A holiday.", "Losing her job.", "An argument."], 1, "'Losing my job was the last straw'."),
      mc("8. How has the man been feeling?", ["Great.", "A bit under the weather.", "Angry."], 1, "'a bit under the weather'."),
    ]),

    ...speakingParts({ p1: "cómo te sientes al aprender inglés, qué te resulta más difícil y qué te motiva", p2: "dos formas de aprender un idioma (en una clase con libro y sumergiéndose en el país): compáralas y di cuál prefieres", p3: "qué ayuda más a sonar natural en un idioma (aprender expresiones, ver series, hablar con nativos, perder el miedo a equivocarse): comentadlo y elegid lo mejor", p4: "los idiomas: si todo el mundo debería aprender uno, por qué son tan difíciles las expresiones idiomáticas y qué significa ser 'fluido'" }),

    SUMMARY("Resumen del Día 41", [
      "Idioms = frases hechas fijas: over the moon (feliz), a piece of cake (fácil), cost an arm and a leg (carísimo), see eye to eye (de acuerdo), get cold feet (echarse atrás).",
      "No se traducen literalmente; se aprenden como bloques. Registro informal.",
      "Vocabulario de emociones. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 42", "Escribe 6 frases con expresiones idiomáticas. Repasa las flashcards. Mañana: la formación de palabras (prefijos y sufijos)."),
  ],
};

// ───────────────────────── DÍA 42 ─────────────────────────
const DAY42 = {
  title: "Día 42 — Formación de palabras · La ciencia y el progreso",
  description: "Prefijos (un-/dis-/in-/mis-/over-/under-) y sufijos (-ness/-ment/-tion/-ity/-ful/-ify). Vocabulario de progreso. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Formar palabras con prefijos y sufijos para la Parte 3 del examen.",
    summary: "Formación de palabras; ciencia/progreso; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["prefijo negativo equivocado (un-/in-/dis-).", "sufijo mal.", "olvidar cambios ortográficos."],
    reviewPrompts: ["¿Negativo de 'possible'? ¿de 'legal'? ¿de 'honest'?", "¿Sustantivo de 'happy'? ¿de 'decide'?"],
  },
  items: [
    TEXT("🔁 Repaso: idioms. Hoy la FORMACIÓN DE PALABRAS (prefijos y sufijos): clave para la Parte 3 del examen. Vocabulario: la CIENCIA y el PROGRESO."),
    GRAMMAR("Formación de palabras", `PREFIJOS NEGATIVOS: un- (unhappy, unable), in- (incorrect, invisible), im- (impossible, impatient), il- (illegal, illogical), ir- (irregular, irrelevant), dis- (dishonest, disagree), mis- (misunderstand, mislead), non- (non-stop).
OTROS PREFIJOS: over- (exceso: overcook, overestimate), under- (defecto: underpaid, underestimate), re- (otra vez: rewrite), pre- (antes: preview), post- (después: postpone), anti- (anti-social), co- (cooperate), inter- (international).
SUFIJOS DE SUSTANTIVO: -ness (happiness), -ment (achievement), -tion/-sion (decision, education), -ity (ability), -ance/-ence (importance), -ship (friendship), -hood (childhood).
SUFIJOS DE ADJETIVO: -ful (helpful), -less (careless), -able/-ible (comfortable), -ive (creative), -ous (dangerous), -al (natural), -ic (scientific), -y (noisy).
SUFIJOS DE VERBO: -ise/-ize (modernise), -ify (simplify), -en (widen).
SUFIJO DE ADVERBIO: -ly (quickly).
⚠️ Cuidado con la ortografía: happy → happiness; decide → decision; able → ability.`),
    WARN("Errores típicos del hispanohablante", "· El negativo varía: unhappy, impossible, illegal, irregular, dishonest — apréndelos.\n· ❌ happyness → ✅ happiness (y → i).\n· ❌ decidion → ✅ decision.\n· Lee el hueco: ¿hace falta sustantivo, adjetivo, verbo, adverbio? ¿Positivo o negativo?"),
    grammarEx("Use of English — Formación de palabras", "Forma la palabra correcta.", [
      fb("It's ___ (POSSIBLE) to finish in time. (negativo)", ["impossible"], "im- + possible."),
      fb("His behaviour was completely ___ (LEGAL). (negativo)", ["illegal"], "il- + legal."),
      fb("She showed great ___ (KIND) to strangers. (sustantivo)", ["kindness"], "kind + -ness."),
      fb("We reached an important ___ (DECIDE). (sustantivo)", ["decision"], "decide → decision."),
      fb("The instructions were very ___ (HELP). (adjetivo)", ["helpful"], "help + -ful."),
      fb("We need to ___ (MODERN) the system. (verbo)", ["modernise", "modernize"], "modern + -ise."),
      fb("He was ___ (PAY) for years, earning far too little. (prefijo)", ["underpaid"], "under- + paid."),
    ]),
    GRAMMAR("Vocabulario del día — La ciencia y el progreso", "Léxico de progreso (B2)."),
    deck("B2 S9D42 — Ciencia y progreso", [
      ["advance", "avance", "It was a huge scientific advance.", "sustantivo", "ədˈvɑːns"],
      ["innovation", "innovación", "The company drives innovation.", "sustantivo", "ˌɪnəˈveɪʃn"],
      ["discovery", "descubrimiento", "It was a groundbreaking discovery.", "sustantivo", "dɪˈskʌvəri"],
      ["breakthrough", "avance decisivo", "The treatment was a breakthrough.", "sustantivo", "ˈbreɪkθruː"],
      ["experiment", "experimento", "They ran a careful experiment.", "sustantivo", "ɪkˈsperɪmənt"],
      ["cutting-edge", "de vanguardia", "It uses cutting-edge research.", "adjetivo", "ˌkʌtɪŋ ˈedʒ"],
      ["revolutionise", "revolucionar", "It could revolutionise medicine.", "verbo", "ˌrevəˈluːʃənaɪz"],
      ["sustainable", "sostenible", "We need sustainable energy.", "adjetivo", "səˈsteɪnəbl"],
      ["ethical", "ético/a", "It raises difficult ethical questions.", "adjetivo", "ˈeθɪkl"],
      ["progress", "progreso / progresar", "Science has made rapid progress.", "sustantivo/verbo", "ˈprəʊɡres"],
    ]),
    vocabEx("Vocabulario — La ciencia y el progreso", "Elige la opción correcta.", [
      mc("A sudden, important new development is a ___.", ["breakthrough", "experiment", "progress"], 0, "breakthrough."),
      mc("Introducing new ideas or methods is ___.", ["innovation", "discovery", "advance"], 0, "innovation."),
      mc("The most modern and advanced technology is ___.", ["cutting-edge", "sustainable", "ethical"], 0, "cutting-edge."),
      mc("Able to continue without harming the environment is ___.", ["sustainable", "ethical", "cutting-edge"], 0, "sustainable."),
      mc("To change something completely and dramatically is to ___ it.", ["revolutionise", "progress", "discover"], 0, "revolutionise."),
      mc("Concerning what is morally right or wrong is ___.", ["ethical", "sustainable", "cutting-edge"], 0, "ethical."),
    ]),

    ...uoe({
      p1: {
        title: "The pace of progress",
        text: "It is often said that we are living through a period of unprecedented technological (1)___, and in many ways this is true. The pace at which new (2)___ are being made can seem dizzying. Yet it is worth remembering that every generation has felt (3)___ way about its own era. Our ancestors were just as astonished by the arrival of the railway, the telephone or electric light as we are by the internet. What is perhaps genuinely different this time is not the speed of change but its (4)___ nature. Where previous revolutions transformed one area of life at a time, today's changes are transforming almost everything at once, and doing so on a global scale. This brings extraordinary benefits, but also profound (5)___ challenges that we are only beginning to grapple with. Each new (6)___ seems to arrive faster than our ability to understand its consequences, let alone to regulate it wisely. The great task of our age, then, may not be to accelerate progress, which seems (7)___ enough, but to ensure that our wisdom keeps (8)___ with our cleverness. For the first time in history, humanity possesses the power to reshape, and perhaps to destroy, the world. Whether we possess the wisdom to use that power well remains, as yet, an open question.",
        q: [
          mc("(1)", ["progress", "advance", "development", "change"], 0, "'unprecedented technological progress'."),
          mc("(2)", ["breakthroughs", "advances", "discoveries", "innovations"], 0, "'new breakthroughs'."),
          mc("(3)", ["this", "the", "such", "that"], 0, "'felt this way'."),
          mc("(4)", ["comprehensive", "total", "complete", "whole"], 0, "'its comprehensive nature'."),
          mc("(5)", ["ethical", "moral", "practical", "social"], 0, "'profound ethical challenges'."),
          mc("(6)", ["innovation", "advance", "discovery", "breakthrough"], 0, "'each new innovation'."),
          mc("(7)", ["fast", "rapid", "quick", "swift"], 0, "'seems fast enough'."),
          mc("(8)", ["pace", "up", "step", "track"], 0, "'keeps pace with our cleverness'."),
        ],
      },
      p2: {
        title: "The ethics of progress",
        text: "For most of history, the question of (1)___ we could do something was far more pressing than whether we should. Human power over nature was so limited that the possibility of doing real, lasting harm hardly arose. That world has gone. Today, our scientific power has grown so vast that we can reshape the climate, edit the genes of living things, and (2)___ create new forms of life. With such power comes an entirely new kind of responsibility. The question is no longer merely (3)___ we can do something, but whether we should — and, crucially, who gets to (4)___. These are not questions that science alone can answer, (5)___ science can tell us what is possible but not what is right. They are ethical questions, requiring the (6)___ not just of scientists but of society as a whole. Unfortunately, our ethical thinking has struggled to keep (7)___ with our technological power. We have become, in a sense, gods in our capabilities while remaining all too human in our wisdom. Bridging that gap — ensuring that our moral development matches our scientific progress — may be the most important challenge (8)___ the human race.",
        q: [
          fb("(1)", ["whether", "if"], "'the question of whether we could'."),
          fb("(2)", ["even"], "'even create new forms of life'."),
          fb("(3)", ["whether", "if"], "'whether we can do something'."),
          fb("(4)", ["decide"], "'who gets to decide'."),
          fb("(5)", ["as", "since", "because"], "'as science can tell us what is possible'."),
          fb("(6)", ["involvement"], "'the involvement… of society'."),
          fb("(7)", ["pace", "up"], "'keep pace with our power'."),
          fb("(8)", ["facing"], "'the challenge facing the human race'."),
        ],
      },
      p3: {
        title: "The unintended consequences of invention",
        text: "The history of invention is, to a surprising degree, a history of (1)___ consequences. Time and again, a technology created to solve one problem has ended up creating others, often far larger, that its inventors never (2)___. The motor car brought undreamed-of freedom and mobility, but also pollution, accidents and the (3)___ redesign of our cities around the machine. Social media promised to connect us, and in some ways has, but has also fuelled anxiety, division and the (4)___ of misinformation. This is not an argument against progress or invention, which have brought (5)___ benefits. But it is a powerful argument for humility. The (6)___ truth is that we are rarely able to foresee the full consequences of our own inventions. A technology released into the world takes on a life of its own, interacting with human nature and society in ways that no one can fully predict. This should make us (7)___ — not to stop inventing, which is impossible and undesirable, but to proceed with care, to remain alert to the unexpected, and to retain the (8)___ to change course when the consequences of our cleverness turn out to be other than we hoped.",
        items: [
          { root: "intend", accepted: ["unintended"], hint: "'unintended consequences' → unintended." },
          { root: "foresee", accepted: ["foresaw"], hint: "'never foresaw' (pasado) → foresaw." },
          { root: "wire", accepted: ["wholesale"], hint: "'the wholesale redesign' → wholesale." },
          { root: "spread", accepted: ["spread"], hint: "'the spread of misinformation' (sustantivo)." },
          { root: "measure", accepted: ["immeasurable"], hint: "'immeasurable benefits' → immeasurable." },
          { root: "humble", accepted: ["humbling"], hint: "'The humbling truth' → humbling." },
          { root: "caution", accepted: ["cautious"], hint: "'make us cautious' → cautious." },
          { root: "wise", accepted: ["wisdom"], hint: "'the wisdom to change course' → wisdom." },
        ],
      },
      p4: {
        title: "Transformaciones — formación de palabras",
        items: [
          { s1: "What he said was not true.", key: "UNTRUE", s2: "What he said was ___ .", accepted: ["untrue"], explanation: "un- + true." },
          { s1: "It's not possible to please everyone.", key: "IMPOSSIBLE", s2: "It's ___ to please everyone.", accepted: ["impossible"], explanation: "im- + possible." },
          { s1: "Her generous behaviour surprised us.", key: "GENEROSITY", s2: "Her ___ surprised us.", accepted: ["generosity"], explanation: "generous → generosity." },
          { s1: "The staff are not paid enough.", key: "UNDERPAID", s2: "The staff are ___ .", accepted: ["underpaid"], explanation: "under- + paid." },
          { s1: "This new method could change everything.", key: "REVOLUTIONISE", s2: "This new method could ___ everything.", accepted: ["revolutionise", "revolutionize"], explanation: "revolution → revolutionise." },
          { s1: "The child behaves very badly.", key: "MISBEHAVES", s2: "The child ___ .", accepted: ["misbehaves"], explanation: "mis- + behaves." },
        ],
      },
      p5: {
        title: "The accidental discovery that saved millions",
        text: "In September 1928, a Scottish scientist named Alexander Fleming returned to his laboratory after a summer holiday to find, as scientists often do, that his workspace was in a state of some disorder. Among the clutter were several glass dishes in which he had been growing bacteria before he left. One of these dishes, he noticed, had become contaminated with a mould, presumably blown in through an open window. In most laboratories, on most days, such a contaminated dish would simply have been washed and thrown away, an annoying but trivial mishap. Fleming, however, paused to look more closely, and in doing so changed the course of human history.\n\nWhat caught his attention was that, in a ring around the mould, the bacteria had been killed. Something in the mould, it appeared, was destroying the bacteria. Most people, even most scientists, would have noted this curiosity and moved on. Fleming's genius lay not in the accident itself — accidents happen in every laboratory — but in his ability to recognise its significance. He understood that if a substance produced by this mould could kill dangerous bacteria, it might be turned into a medicine of almost unimaginable power. He had, in that moment of careful attention, glimpsed the possibility of the antibiotic.\n\nThe substance Fleming had discovered was penicillin, and its eventual development into a usable drug would go on to save, by conservative estimates, hundreds of millions of lives. Before antibiotics, a simple infected cut, a routine operation, or a common childhood illness could easily prove fatal. After them, whole categories of disease that had terrified humanity for millennia became, almost overnight, treatable. It is no exaggeration to say that Fleming's moment of attention in that untidy laboratory is one of the reasons that so many of us are alive today.\n\nThe story is often told as a tale of pure luck, and there was, of course, an element of chance involved. But to focus only on the accident is to miss the real lesson. Countless scientists before Fleming must have had their bacterial cultures contaminated by mould, and simply thrown them away without a second thought. What made Fleming different was not that he was lucky, but that he was paying attention, that he had the knowledge to understand what he was seeing, and the imagination to grasp its implications. 'Chance,' as the great scientist Louis Pasteur once observed, 'favours the prepared mind.' Fleming's prepared mind, alert to the significance of an accident that others would have ignored, is one of the greatest examples in history of that profound truth.",
        q: [
          mc("What did Fleming find in his laboratory after his holiday?", ["A prize.", "Dishes contaminated with mould.", "Nothing unusual.", "A new machine."], 1, "'contaminated with a mould'."),
          mc("What would most people have done with the contaminated dish?", ["Studied it.", "Washed it and thrown it away.", "Sold it.", "Photographed it."], 1, "'simply have been washed and thrown away'."),
          mc("What caught Fleming's attention?", ["The colour.", "That the bacteria had been killed around the mould.", "The smell.", "The size."], 1, "'the bacteria had been killed'."),
          mc("Where did Fleming's genius really lie?", ["In the accident itself.", "In recognising the accident's significance.", "In his luck.", "In his equipment."], 1, "'his ability to recognise its significance'."),
          mc("What was the eventual impact of penicillin?", ["Minor.", "It saved hundreds of millions of lives.", "It failed.", "It was banned."], 1, "'save… hundreds of millions of lives'."),
          mc("What is the real lesson of the story, according to the writer?", ["It was pure luck.", "Chance favours the prepared mind.", "Accidents are useless.", "Science is random."], 1, "'\"Chance… favours the prepared mind\"'."),
        ],
      },
      p6: {
        title: "The double-edged sword of technology",
        text: "Every powerful technology is a double-edged sword, capable of being used for good or for ill. (1)___ The same knowledge that allows us to cure disease could, in the wrong hands, be used to create it.\n\nThis is not a new observation, but it has taken on a new urgency. (2)___ As our technological power grows, so too does our capacity for both creation and destruction.\n\nConsider the technologies now emerging. (3)___ Artificial intelligence could help solve humanity's greatest problems, or it could concentrate power in dangerous ways and put millions out of work.\n\nWhat determines whether a technology is used for good or ill is not the technology itself. (4)___ A hammer can build a house or break a skull; the choice lies with the person wielding it, and with the society that shapes their choices.\n\nThis places an enormous responsibility on all of us. (5)___ We cannot leave these decisions to scientists and technologists alone, for they are not merely technical questions but moral and political ones that concern us all. (6)___ The future will be shaped not by what our technology makes possible, but by the wisdom, or the folly, with which we choose to use it.",
        options: [
          "The very tools that empower us can also endanger us.",         // A -> gap 1
          "The stakes have never been higher than they are now.",         // B -> gap 2
          "Each holds both extraordinary promise and genuine peril.",     // C -> gap 3
          "It is the use to which we choose to put it.",                  // D -> gap 4
          "The responsibility, in a democracy, belongs to everyone.",     // E -> gap 5
          "That choice, in the end, is ours alone to make.",             // F -> gap 6
          "Technology can only ever be used for good.",                   // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: las herramientas que nos dan poder también nos ponen en peligro."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nunca hubo tanto en juego."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: promesa y peligro a la vez."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: es el uso que le damos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la responsabilidad es de todos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la elección es nuestra."),
        ],
      },
      p7: {
        title: "Four people discuss science and progress",
        text: "Read what four people say about technological progress.\n\nA) NADIA: I'm a scientist, and I'm an optimist. Every major problem humanity faces — disease, climate change, poverty — is, at bottom, a problem that knowledge can help solve. Yes, technology creates new problems, but the solution to the problems of progress has always been more progress, more understanding, not less. I'd never want to go back.\n\nB) TOM: What frightens me isn't technology itself, but the speed of it. We're deploying world-changing tools — AI, gene editing — far faster than we can understand their consequences. We're like children playing with matches. It's not that these things are bad; it's that we're not wise enough, yet, to handle them safely.\n\nC) PRIYA: My concern is who controls it all. New technology is enormously powerful, and power tends to concentrate. A handful of companies now hold more power over our daily lives than most governments. The question I keep asking isn't 'what can this technology do?' but 'who does it serve, and who gets left behind?'\n\nD) SAM: Honestly, I think we're too gloomy about all this. People have always feared new technology — they panicked about the printing press, the railway, the television. And every time, we adapted, and life got better, not worse. I trust human ingenuity. We'll figure out the problems of the future, just as we always have.",
        q: [
          mc("Who is optimistic that knowledge can solve our problems?", ["A", "B", "C", "D"], 0, "Nadia: 'the solution to the problems of progress has always been more progress'."),
          mc("Who is most concerned about the speed of technological change?", ["A", "B", "C", "D"], 1, "Tom: 'What frightens me… is the speed of it'."),
          mc("Who worries most about who controls new technology?", ["A", "B", "C", "D"], 2, "Priya: 'My concern is who controls it all'."),
          mc("Who thinks we are too gloomy about technology?", ["A", "B", "C", "D"], 3, "Sam: 'I think we're too gloomy about all this'."),
          mc("Who compares us to children playing with matches?", ["A", "B", "C", "D"], 1, "Tom: 'like children playing with matches'."),
          mc("Who says power tends to concentrate?", ["A", "B", "C", "D"], 2, "Priya: 'power tends to concentrate'."),
          mc("Who points to past panics over the printing press and railway?", ["A", "B", "C", "D"], 3, "Sam: 'they panicked about the printing press, the railway'."),
          mc("Who says the answer to progress's problems is more progress?", ["A", "B", "C", "D"], 0, "Nadia: 'more progress… not less'."),
          mc("Who asks 'who does it serve, and who gets left behind'?", ["A", "B", "C", "D"], 2, "Priya: 'who does it serve, and who gets left behind?'"),
          mc("Who trusts human ingenuity to solve future problems?", ["A", "B", "C", "D"], 3, "Sam: 'I trust human ingenuity'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Scientific progress always does more good than harm.'\nComenta estos dos aspectos y añade uno propio:\n1. medicine (la medicina)\n2. the environment (el medio ambiente)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'The invention that changed the world' — elige un invento y explica su impacto.\n· INFORME sobre el uso de la tecnología en tu instituto o trabajo: evalúa sus ventajas y desventajas y haz recomendaciones.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un historiador de la ciencia, el profesor Hall, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a science historian called Professor Hall giving a talk. Professor Hall: One of the great myths about science is that it advances through sudden flashes of genius. In reality, most progress is slow, collaborative and, frankly, unglamorous. Behind every famous name are hundreds of forgotten researchers whose patient work made the breakthrough possible. Another myth is that discoveries are usually planned. In fact, an enormous number of the most important discoveries were accidents — penicillin being the classic example. What matters is not luck itself but a prepared mind that can recognise the significance of an accident. Now, people often ask me whether progress is speeding up. I believe it is, but I'd add an important warning: our technological power is growing faster than our wisdom. We can now do things we're not yet wise enough to handle safely. My third point is that science cannot answer every question. Science can tell us what is possible; it cannot tell us what is right. Those are moral questions for society, not laboratory questions for scientists. And finally, the lesson I most want you to remember: progress is not inevitable. It depends on choices we make, on the value we place on knowledge, and on our willingness to fund the patient, unglamorous work on which all real advances depend.", [
      fb("The myth is that science advances through sudden flashes of ___.", ["genius"], "'sudden flashes of genius'."),
      fb("Most progress is slow, collaborative and ___.", ["unglamorous"], "'frankly, unglamorous'."),
      fb("Many important discoveries were actually ___.", ["accidents"], "'the most important discoveries were accidents'."),
      fb("What matters is a ___ mind that recognises significance.", ["prepared"], "'a prepared mind'."),
      fb("Our technological power is growing faster than our ___.", ["wisdom"], "'faster than our wisdom'."),
      fb("Science can tell us what is possible but not what is ___.", ["right"], "'cannot tell us what is right'."),
      fb("Moral questions are for society, not the ___.", ["laboratory"], "'not laboratory questions'."),
      fb("Progress is not ___; it depends on our choices.", ["inevitable"], "'progress is not inevitable'."),
    ]),

    ...speakingParts({ p1: "qué avance científico te parece más importante y si eres optimista sobre la tecnología", p2: "dos escenas de progreso (un laboratorio de vanguardia y un aula con tecnología): compáralas y especula sobre sus beneficios", p3: "qué invento ha cambiado más nuestra vida (internet, el móvil, la medicina moderna, los transportes, la IA): comentadlo y elegid el más importante", p4: "la ciencia y el progreso: si la tecnología hace más bien que mal, si avanza demasiado rápido y quién debería controlarla" }),

    SUMMARY("Resumen del Día 42", [
      "Prefijos negativos: un-/in-/im-/il-/ir-/dis-/mis-. Otros: over-/under-/re-/pre-/anti-.",
      "Sufijos: -ness/-ment/-tion/-ity (sustantivo); -ful/-less/-able/-ive (adjetivo); -ise/-ify (verbo); -ly (adverbio).",
      "Vocabulario de progreso. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 43", "Forma 8 palabras con prefijos y sufijos. Repasa las flashcards. Mañana: el registro formal e informal."),
  ],
};

// ───────────────────────── DÍA 43 ─────────────────────────
const DAY43 = {
  title: "Día 43 — El registro formal e informal · La comunicación escrita",
  description: "Diferencias entre registro formal e informal (léxico, phrasal verbs vs verbos latinos, contracciones, estructuras). Vocabulario de comunicación. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Adaptar el estilo al destinatario y al tipo de texto.",
    summary: "Registro formal/informal; comunicación escrita; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["mezclar registros.", "phrasal verbs en cartas formales.", "contracciones en textos formales."],
    reviewPrompts: ["¿'get' o 'obtain' en un texto formal?", "¿Cómo terminas una carta formal?"],
  },
  items: [
    TEXT("🔁 Repaso: formación de palabras. Hoy el REGISTRO FORMAL e INFORMAL: adaptar el estilo al destinatario. Clave para el Writing. Vocabulario: la COMUNICACIÓN ESCRITA."),
    GRAMMAR("El registro formal e informal", `El REGISTRO es el nivel de formalidad. Debe encajar con el destinatario y el tipo de texto.
FORMAL (informes, cartas formales, ensayos): verbos de origen latino (obtain, require, purchase, assist, request, receive), NO contracciones (do not, cannot), estructuras impersonales/pasivas (It is recommended that…), conectores formales (furthermore, however, consequently), sin idioms ni jerga.
INFORMAL (emails a amigos, notas): phrasal verbs (get, sort out, put up with), contracciones (I'm, don't), idioms, exclamaciones, preguntas directas, léxico coloquial (kids, a bit, stuff).
En el B2 Writing:
· ESSAY: neutro-formal, objetivo, con conectores.
· EMAIL/CARTA a un amigo: informal (Hi…, Love/Best wishes).
· CARTA formal/informe/reseña: neutro-formal (Dear Sir/Madam, Yours faithfully).
⚠️ No mezcles registros. En una carta formal: 'obtain' no 'get'; 'I would be grateful if' no 'Can you'.`),
    WARN("Errores típicos del hispanohablante", "· En textos formales: obtain (no get), require (no need), assist (no help out).\n· Sin contracciones en registro formal: 'do not' no 'don't'.\n· Cierre formal: 'Yours faithfully' (Dear Sir/Madam) / 'Yours sincerely' (Dear Mr Smith).\n· Cierre informal: 'Best wishes / Love'."),
    grammarEx("Use of English — Registro formal/informal", "Elige la versión adecuada al registro indicado.", [
      mc("FORMAL: 'I need some information.'", ["I need some info.", "I require some information.", "I wanna know stuff."], 1, "require (formal)."),
      mc("FORMAL: 'Can you help me?'", ["Can you help me out?", "I would be grateful if you could assist me.", "Gimme a hand."], 1, "would be grateful… assist."),
      mc("INFORMAL (to a friend): 'I am writing to inform you…'", ["Just wanted to let you know…", "I hereby notify you…", "It is with regret that…"], 0, "informal → let you know."),
      mc("FORMAL: 'They put off the meeting.'", ["They put off the meeting.", "They postponed the meeting.", "They shelved it."], 1, "postpone (formal)."),
      mc("FORMAL closing (Dear Sir/Madam):", ["Cheers,", "Love,", "Yours faithfully,"], 2, "Yours faithfully."),
      mc("INFORMAL: 'I would like to purchase…'", ["I'd like to buy…", "I wish to acquire…", "I intend to procure…"], 0, "informal → buy."),
      mc("FORMAL: 'Sorry, but…'", ["Sorry, but…", "I regret to inform you that…", "My bad, but…"], 1, "I regret to inform you."),
    ]),
    GRAMMAR("Vocabulario del día — La comunicación escrita", "Léxico de comunicación (B2)."),
    deck("B2 S9D43 — Comunicación escrita", [
      ["formal", "formal", "The letter had a formal tone.", "adjetivo", "ˈfɔːml"],
      ["concise", "conciso/a", "Keep your writing concise.", "adjetivo", "kənˈsaɪs"],
      ["tone", "tono", "The email struck the wrong tone.", "sustantivo", "təʊn"],
      ["draft", "borrador / redactar un borrador", "I'll send you a first draft.", "sustantivo/verbo", "drɑːft"],
      ["proofread", "revisar / corregir", "Always proofread before sending.", "verbo", "ˈpruːfriːd"],
      ["recipient", "destinatario/a", "Consider your recipient.", "sustantivo", "rɪˈsɪpiənt"],
      ["ambiguous", "ambiguo/a", "The wording was ambiguous.", "adjetivo", "æmˈbɪɡjuəs"],
      ["get to the point", "ir al grano", "Just get to the point.", "expresión", "ɡet tə ðə ˈpɔɪnt"],
      ["long-winded", "farragoso", "The report was long-winded.", "adjetivo", "ˌlɒŋ ˈwɪndɪd"],
      ["convey", "transmitir", "The letter conveyed his gratitude.", "verbo", "kənˈveɪ"],
    ]),
    vocabEx("Vocabulario — La comunicación escrita", "Elige la opción correcta.", [
      mc("Writing that is short and clear, with no wasted words, is ___.", ["concise", "long-winded", "ambiguous"], 0, "concise."),
      mc("The general feeling or attitude of a piece of writing is its ___.", ["tone", "draft", "recipient"], 0, "tone."),
      mc("An early version of a text is a ___.", ["draft", "tone", "recipient"], 0, "draft."),
      mc("To check a text carefully for mistakes is to ___ it.", ["proofread", "convey", "draft"], 0, "proofread."),
      mc("Writing that could be understood in more than one way is ___.", ["ambiguous", "concise", "formal"], 0, "ambiguous."),
      mc("To communicate a meaning or feeling is to ___ it.", ["convey", "proofread", "draft"], 0, "convey."),
    ]),

    ...uoe({
      p1: {
        title: "The lost art of the letter",
        text: "There was a time, not so long ago, when the letter was the (1)___ way that people communicated across distance. Composing one was an act that (2)___ time and thought. You could not, as with a text message, dash off a few careless words in seconds. A letter had to be (3)___, considered, written out by hand, and often revised. This slowness, which we might now regard as a drawback, was in fact one of its great (4)___. Because a letter took effort, people put effort into it. They chose their words with care, expressed themselves fully, and conveyed not just information but personality, feeling and thought. The instant, effortless communication we now enjoy has brought (5)___ benefits, but it has also, arguably, cost us something. When communication becomes too easy, it can also become careless. A hastily typed message, sent in a moment and forgotten the (6)___, rarely carries the weight of a carefully composed letter. Perhaps this is why the discovery of an old bundle of letters can be so moving. In an age of the (7)___, the disposable and the instantly forgotten, they are a reminder of a slower, more thoughtful kind of communication, in which the (8)___ of writing to someone was itself a way of saying that they mattered.",
        q: [
          mc("(1)", ["principal", "main", "chief", "primary"], 1, "'the main way' (o principal)."),
          mc("(2)", ["required", "needed", "took", "demanded"], 0, "'required time and thought'."),
          mc("(3)", ["planned", "prepared", "drafted", "designed"], 2, "'drafted, considered'."),
          mc("(4)", ["strengths", "virtues", "merits", "benefits"], 0, "'its great strengths'."),
          mc("(5)", ["undeniable", "clear", "real", "genuine"], 0, "'undeniable benefits'."),
          mc("(6)", ["next", "following", "after", "later"], 0, "'forgotten the next' (moment)."),
          mc("(7)", ["instant", "immediate", "quick", "fast"], 0, "'the instant, the disposable'."),
          mc("(8)", ["act", "action", "deed", "process"], 0, "'the act of writing'."),
        ],
      },
      p2: {
        title: "How to write well",
        text: "Good writing, contrary to what many people believe, is not about using long words and complicated sentences. (1)___ fact, the opposite is usually true. The best writers use plain language, short sentences and the simplest word that will (2)___ the job. Clarity, not complexity, is the mark of a skilled writer. This is harder than it sounds. (3)___ takes real effort to express a complex idea simply; it is far easier to hide behind long words and tangled sentences. As one famous writer put it, he would have written a shorter letter (4)___ he had had more time. The first rule of good writing, then, is to keep it simple. The second is to keep it (5)___: to say what you mean in as (6)___ words as possible, cutting anything that does not earn its place. The third is to remember your reader. Good writing is not about impressing people; it is about communicating with them. Every sentence should be as easy to (7)___ as you can possibly make it. Get these things right, and you (8)___ write well. The rest is just practice.",
        q: [
          fb("(1)", ["In"], "'In fact'."),
          fb("(2)", ["do"], "'that will do the job'."),
          fb("(3)", ["It"], "'It takes real effort'."),
          fb("(4)", ["if"], "'if he had had more time'."),
          fb("(5)", ["concise", "short", "brief"], "'keep it concise/brief'."),
          fb("(6)", ["few"], "'as few words as possible'."),
          fb("(7)", ["understand", "read", "follow"], "'easy to understand/read'."),
          fb("(8)", ["will"], "'you will write well'."),
        ],
      },
      p3: {
        title: "The tyranny of jargon",
        text: "Every profession has its jargon — the specialised vocabulary that allows experts to communicate with (1)___ and precision. Used properly, jargon is genuinely (2)___: it lets a doctor or an engineer say in one word what would otherwise take a whole sentence. Too often, however, jargon is used not to communicate but to (3)___ — to make simple ideas sound complicated, to exclude outsiders, or to hide the fact that the speaker has nothing much to say. A great deal of (4)___ business and political language falls into this category. Phrases like 'going forward', 'thinking outside the box' or 'leveraging synergies' frequently mean little or nothing at all, serving mainly to make the speaker sound (5)___ while actually communicating less than plain English would. The (6)___ of jargon, when it is used to obscure rather than to clarify, is a genuine problem. It wastes time, spreads confusion, and can even be used to deceive. The best writers and speakers, in any field, are those who can explain even the most (7)___ ideas in plain, clear language that anyone can understand. Real expertise, it turns out, does not need to hide behind jargon. It is (8)___ knowledge that most often does.",
        items: [
          { root: "efficient", accepted: ["efficiency"], hint: "sustantivo → efficiency." },
          { root: "use", accepted: ["useful"], hint: "'genuinely useful' → useful." },
          { root: "impress", accepted: ["impress"], hint: "'to impress' (verbo)." },
          { root: "meaning", accepted: ["meaningless"], hint: "'meaningless business language' → meaningless." },
          { root: "intelligence", accepted: ["intelligent"], hint: "'sound intelligent' → intelligent." },
          { root: "abuse", accepted: ["abuse"], hint: "'The abuse of jargon' (sustantivo)." },
          { root: "complex", accepted: ["complex"], hint: "'the most complex ideas' (adjetivo)." },
          { root: "shallow", accepted: ["shallow"], hint: "'It is shallow knowledge' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — registro y estilo",
        items: [
          { s1: "I need to get some information about the course.", key: "OBTAIN", s2: "I need to ___ some information about the course.", accepted: ["obtain"], explanation: "obtain (formal) = get." },
          { s1: "Can you help me with this, please?", key: "GRATEFUL", s2: "I would be ___ you could help me with this.", accepted: ["grateful if"], explanation: "would be grateful if (formal)." },
          { s1: "They put the meeting off until Friday.", key: "POSTPONED", s2: "The meeting ___ until Friday.", accepted: ["was postponed"], explanation: "postpone (formal), pasiva." },
          { s1: "Sorry to tell you that your application failed.", key: "REGRET", s2: "I ___ that your application was unsuccessful.", accepted: ["regret to inform you"], explanation: "I regret to inform you." },
          { s1: "Please write back to me soon.", key: "LOOK", s2: "I ___ hearing from you soon.", accepted: ["look forward to"], explanation: "look forward to (formal-neutro)." },
          { s1: "We can't accept your request.", key: "UNABLE", s2: "We are ___ your request.", accepted: ["unable to accept"], explanation: "unable to (formal) = can't." },
        ],
      },
      p5: {
        title: "The email that ended a career",
        text: "James Morrow had, by any measure, a glittering future ahead of him. At just thirty-two, he was one of the youngest senior managers his company had ever appointed, admired for his sharp mind, his drive and his easy charm. He seemed destined for the very top. And then, one Tuesday afternoon, he pressed 'send' on an email, and his brilliant career came to an abrupt and permanent end.\n\nThe email itself was not, on the face of it, a disaster. It was a private message to a close colleague, complaining, in colourful and unguarded language, about a senior director whom James considered incompetent. It was exactly the kind of frank, unflattering assessment that colleagues share privately every day of the week, the sort of thing that would ordinarily go no further than the two people involved. James's fatal error was a single, careless keystroke: instead of sending it to his one trusted colleague, he sent it, by accident, to the entire senior management team — including the director he had just described in such unforgiving terms.\n\nThe consequences were swift and merciless. What had been intended as a private grumble was now a public insult, read by the very people who controlled James's future. His position, everyone agreed, had become untenable. Within a month, he had quietly left the company, his reputation in ruins, his glittering prospects extinguished by a moment's carelessness. He would never again hold a position of comparable seniority.\n\nThe story of James Morrow is often told, in offices around the world, as a cautionary tale, and its lesson seems obvious enough: be careful what you put in writing, and check, twice, who you are sending it to. But there is a deeper lesson too, one that the digital age has made more urgent than ever. In the past, an unguarded remark, once spoken, would simply fade into the air. Today, our careless words are captured, stored and instantly transmissible, capable of being forwarded, screenshotted and preserved forever. We have all become, in a sense, published authors, whether we like it or not, and the things we dash off in a moment of frustration can follow us for the rest of our lives. It is a sobering thought, and one worth remembering the next time our finger hovers, in anger, over the 'send' button.",
        q: [
          mc("What was James Morrow's situation before the email?", ["Struggling.", "A young senior manager destined for the top.", "Retired.", "Unemployed."], 1, "'one of the youngest senior managers… destined for the very top'."),
          mc("What was the email actually intended to be?", ["A public announcement.", "A private complaint to a close colleague.", "A resignation.", "A joke."], 1, "'a private message to a close colleague, complaining'."),
          mc("What was James's fatal error?", ["Lying.", "Sending it to the entire management team by accident.", "Deleting it.", "Printing it."], 1, "'he sent it, by accident, to the entire senior management team'."),
          mc("What were the consequences?", ["Nothing.", "He left the company within a month, his reputation ruined.", "A promotion.", "An apology."], 1, "'Within a month, he had quietly left the company'."),
          mc("What is the deeper lesson of the digital age?", ["Words fade quickly.", "Our careless words are captured and can follow us forever.", "Emails are private.", "Nothing is stored."], 1, "'captured, stored and instantly transmissible… follow us for the rest of our lives'."),
          mc("The phrase 'our finger hovers… over the \"send\" button' warns us to:", ["send faster", "pause before sending in anger", "never use email", "write more"], 1, "advertencia: pausar antes de enviar."),
        ],
      },
      p6: {
        title: "The power of plain language",
        text: "For most of history, complexity in language was regarded as a mark of intelligence and authority. (1)___ Lawyers, doctors and officials wrote in a dense, impenetrable style that ordinary people could scarcely understand.\n\nIn recent decades, however, a quiet revolution has taken place. (2)___ Governments and organisations around the world have begun to embrace what is known as 'plain language' — the radical idea that official documents should actually be comprehensible to the people who have to read them.\n\nThe results have been remarkable. (3)___ When a complex form or document is rewritten in plain language, the effects can be dramatic: fewer errors, fewer complaints, and enormous savings in time and money.\n\nYet resistance to plain language remains surprisingly strong. (4)___ Many professionals cling to their jargon, partly from habit, but partly because complexity confers a kind of power.\n\nThis is precisely why the plain language movement matters so much. (5)___ To insist that important information be expressed clearly is, in a real sense, a democratic act — a refusal to allow knowledge to be hoarded by an elite. (6)___ In an age drowning in words, the ability to communicate simply and clearly is not a minor skill but a genuine and increasingly precious form of power.",
        options: [
          "The more obscure the writing, the wiser its author seemed.",   // A -> gap 1
          "The demand for clarity has grown into a genuine movement.",    // B -> gap 2
          "The benefits, once measured, proved impossible to ignore.",    // C -> gap 3
          "Impenetrable language keeps outsiders firmly in their place.",  // D -> gap 4
          "Clear communication levels the playing field for everyone.",   // E -> gap 5
          "It is, in the end, a skill worth cultivating.",               // F -> gap 6
          "Plain language has never brought any benefits at all.",        // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: cuanto más oscuro, más sabio parecía."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la demanda de claridad es un movimiento."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los beneficios son innegables."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el lenguaje impenetrable excluye."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la claridad iguala a todos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una habilidad que vale la pena cultivar."),
        ],
      },
      p7: {
        title: "Four people discuss communication",
        text: "Read what four people say about how they communicate.\n\nA) NADIA: I'm obsessive about proofreading. I never send an important email without reading it three times, and often sleeping on it. I've seen too many careers damaged by a hasty message sent in anger. In writing, unlike in speech, you get a second chance before you commit — I always take it.\n\nB) TOM: My pet hate is jargon. I work in a world full of it — 'synergies', 'going forward', 'blue-sky thinking' — and most of it means absolutely nothing. I make a point of saying things in plain English, even when everyone around me is drowning in buzzwords. Clarity, in my experience, is a genuine competitive advantage.\n\nC) PRIYA: What I've learned is to match my register to my reader. I write completely differently to my boss, my best friend and a government office. Getting this wrong — being too casual in a formal context, or too stiff with a friend — is one of the most common mistakes people make, and it can really cost you.\n\nD) SAM: For me, the golden rule is: get to the point. Life is too short for long-winded emails that take three paragraphs to say what could be said in one sentence. I respect people who value my time enough to be brief. Rambling on isn't thoroughness; usually, it's just a failure to think clearly first.",
        q: [
          mc("Who always proofreads important messages carefully?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm obsessive about proofreading'."),
          mc("Who dislikes meaningless business jargon?", ["A", "B", "C", "D"], 1, "Tom: 'My pet hate is jargon'."),
          mc("Who stresses matching your register to your reader?", ["A", "B", "C", "D"], 2, "Priya: 'to match my register to my reader'."),
          mc("Who values getting to the point and being brief?", ["A", "B", "C", "D"], 3, "Sam: 'get to the point'."),
          mc("Who warns about hasty messages sent in anger?", ["A", "B", "C", "D"], 0, "Nadia: 'a hasty message sent in anger'."),
          mc("Who says clarity is a competitive advantage?", ["A", "B", "C", "D"], 1, "Tom: 'Clarity… is a genuine competitive advantage'."),
          mc("Who writes differently to a boss, a friend and an office?", ["A", "B", "C", "D"], 2, "Priya: 'I write completely differently to my boss, my best friend and a government office'."),
          mc("Who thinks rambling reflects unclear thinking?", ["A", "B", "C", "D"], 3, "Sam: 'a failure to think clearly first'."),
          mc("Who 'sleeps on' important emails before sending?", ["A", "B", "C", "D"], 0, "Nadia: 'sleeping on it'."),
          mc("Who says being too casual or too stiff can cost you?", ["A", "B", "C", "D"], 2, "Priya: 'Getting this wrong… can really cost you'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The way we communicate has got worse, not better, in the digital age.'\nComenta estos dos aspectos y añade uno propio:\n1. speed (la rapidez)\n2. depth (la profundidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· CARTA FORMAL a una empresa quejándote por un mal servicio: usa un registro formal y pide una solución.\n· EMAIL informal a un/a amigo/a contándole una buena noticia: usa un registro informal, expresiones y contracciones.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de un error de comunicación (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué salió mal. Sobra una opción.\nA) they sent a message to the wrong person\nB) they used the wrong register (too casual/formal)\nC) their message was misunderstood\nD) they said something in anger they regretted\nE) their jargon confused everyone\nF) they were too long-winded", "This is Part Three. You will hear five people talking about a communication mistake. Speaker One: I meant to send a rather rude complaint about my boss to a friend. I sent it to my boss. I've never lived it down, and I nearly lost my job. Speaker Two: I wrote to a very senior client the way I'd text a mate — all casual, with slang and no proper greeting. He was deeply offended, and we lost the account. I hadn't thought about how it would come across. Speaker Three: I sent a quick email saying 'that's fine' about a plan, meaning I disagreed but would go along with it. The other person read it as enthusiastic agreement. The whole project went in a direction I'd never wanted. Speaker Four: I was furious, so I fired off an email full of things I didn't really mean. By the time I calmed down, the damage was done. Now I have a rule: never send anything written in anger. Speaker Five: I gave a presentation absolutely packed with technical terms, convinced I sounded impressive. Afterwards, someone gently told me that not one person in the room had understood a word. I'd completely lost my audience.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 0, "A: 'I sent it to my boss'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 1, "B: 'the way I'd text a mate… casual'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'read it as enthusiastic agreement'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 3, "D: 'an email full of things I didn't really mean… in anger'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 4, "E: 'packed with technical terms… no one understood'."),
    ]),

    ...speakingParts({ p1: "cómo te comunicas por escrito, si cuidas el tono según el destinatario y qué error de comunicación has cometido", p2: "dos formas de comunicarse por escrito (una carta formal y un mensaje informal de móvil): compáralas y di cuándo usarías cada una", p3: "qué hace buena a una comunicación escrita (claridad, tono adecuado, ir al grano, revisar, ser educado): comentadlo y elegid lo más importante", p4: "la comunicación escrita: si el estilo digital ha empeorado nuestra forma de comunicarnos, si se pierde el arte de escribir bien y por qué importa el registro" }),

    SUMMARY("Resumen del Día 43", [
      "Formal: verbos latinos (obtain/require/assist), sin contracciones, conectores formales, sin idioms.",
      "Informal: phrasal verbs, contracciones, idioms, léxico coloquial. Adapta el registro al destinatario.",
      "Vocabulario de comunicación escrita. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 44", "Reescribe 4 frases informales en registro formal. Repasa las flashcards. Mañana: frases preposicionales y colocaciones fijas."),
  ],
};

// ───────────────────────── DÍA 44 ─────────────────────────
const DAY44 = {
  title: "Día 44 — Frases preposicionales y colocaciones fijas · El tiempo y el dinero",
  description: "Frases con preposición fija (in the end/at the end, on time/in time, at all costs) y colocaciones. Vocabulario de tiempo y dinero. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Usar frases preposicionales fijas y colocaciones con precisión.",
    summary: "Frases preposicionales; tiempo/dinero; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'in the end' vs 'at the end'.", "'on time' vs 'in time'.", "'in charge of' vs 'responsible for'."],
    reviewPrompts: ["¿'in the end' o 'at the end'?", "¿'on time' o 'in time'?"],
  },
  items: [
    TEXT("🔁 Repaso: registro. Hoy las FRASES PREPOSICIONALES FIJAS y las COLOCACIONES. Vocabulario: el TIEMPO y el DINERO."),
    GRAMMAR("Frases preposicionales y colocaciones fijas", `Pares que se confunden:
· IN THE END (finalmente, tras un proceso) vs AT THE END (of…) (al final de algo concreto): In the end, we agreed. At the end of the film…
· ON TIME (puntual) vs IN TIME (con tiempo suficiente / a tiempo para): The train left on time. We arrived in time to catch it.
· IN THE WAY (estorbando) vs ON THE WAY (de camino): You're in the way. I'll buy it on the way home.
· AT FIRST (al principio) vs FIRST (primero).
FRASES FIJAS: at all costs, in advance, on purpose, by chance, out of order, in touch, on average, by mistake, in general, at least, at last, on the whole, in the long run, out of the question.
'IN CHARGE OF' (a cargo de) / 'RESPONSIBLE FOR'.
⚠️ Se aprenden de memoria; la preposición no es negociable.`),
    WARN("Errores típicos del hispanohablante", "· ❌ At the end we agreed (finalmente) → ✅ In the end.\n· ❌ We arrived on time to catch it (a tiempo para) → ✅ in time.\n· ❌ in charge for → ✅ in charge of.\n· ❌ by purpose → ✅ on purpose."),
    grammarEx("Use of English — Frases preposicionales", "Completa con la preposición/frase correcta.", [
      mc("Choose:", ["At the end, we decided to stay.", "In the end, we decided to stay.", "On the end, we decided to stay."], 1, "in the end = finalmente."),
      fb("We got to the station just ___ time to catch the train. (con tiempo suficiente)", ["in"], "in time (para)."),
      fb("The meeting started ___ time, at exactly nine. (puntual)", ["on"], "on time = puntual."),
      fb("I'll pick up some milk ___ the way home. (de camino)", ["on"], "on the way."),
      fb("We must finish this ___ all costs. (a toda costa)", ["at"], "at all costs."),
      fb("She's ___ charge ___ the whole department. (a cargo de)", ["in", "of"], "in charge of."),
      mc("Choose:", ["He broke it by purpose.", "He broke it on purpose.", "He broke it in purpose."], 1, "on purpose."),
    ]),
    GRAMMAR("Vocabulario del día — El tiempo y el dinero", "Léxico de tiempo y dinero (B2)."),
    deck("B2 S9D44 — Tiempo y dinero", [
      ["punctual", "puntual", "She's always punctual.", "adjetivo", "ˈpʌŋktʃuəl"],
      ["deadline", "fecha límite", "We're up against a tight deadline.", "sustantivo", "ˈdedlaɪn"],
      ["waste time", "perder el tiempo", "Don't waste time on trivial things.", "colocación", "weɪst ˈtaɪm"],
      ["make ends meet", "llegar a fin de mes", "It's hard to make ends meet.", "expresión", "meɪk endz ˈmiːt"],
      ["worth it", "que vale la pena", "It was expensive, but worth it.", "colocación", "ˈwɜːθ ɪt"],
      ["budget", "presupuesto", "We're on a tight budget.", "sustantivo", "ˈbʌdʒɪt"],
      ["invest", "invertir", "It's wise to invest in your future.", "verbo", "ɪnˈvest"],
      ["broke", "sin blanca", "I'm broke until payday.", "adjetivo", "brəʊk"],
      ["put aside", "apartar / ahorrar", "I put aside some money each month.", "phrasal verb", "pʊt əˈsaɪd"],
      ["time-consuming", "que lleva mucho tiempo", "It's a time-consuming task.", "adjetivo", "ˈtaɪm kənsjuːmɪŋ"],
    ]),
    vocabEx("Vocabulario — El tiempo y el dinero", "Elige la opción correcta.", [
      mc("Someone who always arrives on time is ___.", ["punctual", "broke", "time-consuming"], 0, "punctual."),
      mc("A task that takes a lot of time is ___.", ["time-consuming", "worth it", "punctual"], 0, "time-consuming."),
      mc("To have just enough money to live on is to ___.", ["make ends meet", "waste time", "invest"], 0, "make ends meet."),
      mc("To save money regularly for the future is to ___ it.", ["put aside", "waste", "invest"], 0, "put aside."),
      mc("A plan of how much money you can spend is a ___.", ["budget", "deadline", "investment"], 0, "budget."),
      mc("The date by which something must be finished is a ___.", ["deadline", "budget", "investment"], 0, "deadline."),
    ]),

    ...uoe({
      p1: {
        title: "The value of time",
        text: "'Time is money,' the old saying goes, but in truth time is worth far more than money. Money, after all, can be earned, lost and earned (1)___; time, once spent, is gone forever. This is a truth we all know in theory, and yet how carelessly we (2)___ waste our days. We put things off, telling ourselves there will be more time later, until one day we realise, with a shock, that our time is running (3)___. Perhaps the wisest thing anyone can do is to treat their time as the precious, (4)___ resource it truly is. This does not mean filling every moment with frantic activity; some of the best uses of time are rest, reflection and simple pleasure. It means, rather, being (5)___ about how we spend it, refusing to fritter away our irreplaceable hours on things that do not truly matter. The person who is careful with their money but careless with their time has, in a sense, got their priorities exactly backwards. In the (6)___ run, we will not regret the money we did not make. We will regret the time we did not spend on the people and things we (7)___. Time is the one currency we cannot save, and the (8)___ we spend it, the more of it we truly have.",
        q: [
          mc("(1)", ["again", "back", "more", "anew"], 0, "'earned again'."),
          mc("(2)", ["still", "often", "sometimes", "usually"], 1, "'how carelessly we often waste'."),
          mc("(3)", ["out", "off", "down", "low"], 0, "'time is running out'."),
          mc("(4)", ["irreplaceable", "valuable", "precious", "limited"], 0, "'the precious, irreplaceable resource'."),
          mc("(5)", ["deliberate", "careful", "conscious", "intentional"], 2, "'being conscious about how we spend it'."),
          mc("(6)", ["long", "final", "end", "last"], 0, "'in the long run'."),
          mc("(7)", ["love", "value", "cherish", "treasure"], 0, "'the things we love'."),
          mc("(8)", ["better", "wiser", "more", "best"], 0, "'the better we spend it, the more we have'."),
        ],
      },
      p2: {
        title: "Why we're bad with money",
        text: "Human beings are, on the whole, remarkably bad with money, and psychologists have begun to understand (1)___. The root of the problem is that our brains evolved in a world utterly unlike our (2)___. For our ancestors, the future was radically uncertain, so it made perfect sense to grab whatever was available (3)___ once, rather than saving for a tomorrow that might never come. This deeply ingrained bias towards the present, so useful (4)___ our ancestors, serves us poorly in a modern world where saving and planning are essential. It is why we so often spend money we do not have on things we do not need, while failing to put (5)___ enough for the future we know is coming. Understanding this can help us. Since willpower alone is (6)___ no match for our ancient instincts, the trick is to design our finances so that saving happens automatically, without our having to decide each time. Setting up an automatic transfer to a savings account, for example, works far (7)___ than relying on good intentions. We cannot easily change our nature, but we can, with a little cleverness, arrange our lives so that our worst instincts do us (8)___ harm.",
        q: [
          fb("(1)", ["why"], "'understand why'."),
          fb("(2)", ["own"], "'unlike our own'."),
          fb("(3)", ["at"], "'available at once'."),
          fb("(4)", ["to"], "'so useful to our ancestors'."),
          fb("(5)", ["aside", "away"], "'put aside/away enough'."),
          fb("(6)", ["often", "usually", "no"], "'is often no match'."),
          fb("(7)", ["better"], "'works far better than'."),
          fb("(8)", ["less"], "'do us less harm'."),
        ],
      },
      p3: {
        title: "The forgotten art of patience",
        text: "In a world of instant gratification, patience has become an increasingly (1)___ virtue. We can order almost anything and have it delivered within hours; we can access any information in seconds; we grow (2)___ at a website that takes more than a moment to load. This ease is a genuine (3)___, but it comes at a subtle cost. By making waiting almost unnecessary, we have gradually lost the (4)___ for it, and with it something valuable. For the truth is that many of the best things in life cannot be hurried. A deep friendship, a real skill, a great work of art — all require patient (5)___ over months and years. The person who has lost the capacity for patience is, in a sense, cut off from these deeper rewards, forever chasing the quick and the immediate. Perhaps this is why the (6)___ ability to wait, to persist, to invest effort now for a reward far in the future, is one of the strongest predictors of (7)___ in life. In an age that promises us everything instantly, the willingness to be patient may be more valuable, and more (8)___, than ever before.",
        items: [
          { root: "rare", accepted: ["rare"], hint: "'an increasingly rare virtue' (adjetivo)." },
          { root: "patience", accepted: ["impatient"], hint: "'grow impatient' → impatient." },
          { root: "bless", accepted: ["blessing"], hint: "'a genuine blessing' → blessing." },
          { root: "capable", accepted: ["capacity"], hint: "'lost the capacity for it' → capacity." },
          { root: "cultivate", accepted: ["cultivation"], hint: "'patient cultivation' → cultivation." },
          { root: "simple", accepted: ["simple"], hint: "'the simple ability to wait' (adjetivo)." },
          { root: "succeed", accepted: ["success"], hint: "'predictors of success' → success." },
          { root: "power", accepted: ["powerful"], hint: "'more powerful than ever' → powerful." },
        ],
      },
      p4: {
        title: "Transformaciones — frases preposicionales",
        items: [
          { s1: "We finally decided to stay at home.", key: "END", s2: "___ , we decided to stay at home.", accepted: ["In the end"], explanation: "in the end = finalmente." },
          { s1: "We arrived early enough to catch the train.", key: "TIME", s2: "We arrived ___ to catch the train.", accepted: ["in time"], explanation: "in time (para)." },
          { s1: "She's responsible for the whole team.", key: "CHARGE", s2: "She's ___ the whole team.", accepted: ["in charge of"], explanation: "in charge of." },
          { s1: "He didn't do it deliberately.", key: "PURPOSE", s2: "He didn't do it ___ .", accepted: ["on purpose"], explanation: "on purpose." },
          { s1: "You have to book the tickets beforehand.", key: "ADVANCE", s2: "You have to book the tickets ___ .", accepted: ["in advance"], explanation: "in advance." },
          { s1: "Failing is simply not an option.", key: "QUESTION", s2: "Failing is out of ___ .", accepted: ["the question"], explanation: "out of the question." },
        ],
      },
      p5: {
        title: "The man who bought back his time",
        text: "By the time he was forty, Daniel Cross had achieved everything he had ever wanted. Through twenty years of relentless work, he had built a successful company, accumulated a substantial fortune, and could afford almost anything money could buy. There was, however, one thing his wealth could not purchase, and it was the one thing he now craved above all others: time. His days were consumed, from early morning to late at night, by the demands of the business he had created. He had, he realised with a shock one sleepless night, become the servant of his own success.\n\nThe realisation had been building for years, but it crystallised on the day he missed his daughter's school play. He had fully intended to go; it had been in his calendar for weeks. But a crisis at work had arisen, as crises always did, and he had stayed at the office, telling himself, as he always told himself, that there would be other plays, other chances. When he got home that night and saw his daughter's face, he understood, with sudden and painful clarity, exactly what his success was costing him. He was rich in everything except the one thing that mattered.\n\nWhat Daniel did next surprised everyone who knew him. Over the following two years, he deliberately and systematically dismantled the life he had spent two decades building. He sold his company, not for the maximum possible price, but to buyers who would look after his staff. He drastically simplified his lifestyle, discovering, to his surprise, how little he actually needed. And, crucially, he used his remaining wealth to buy the one thing he had always lacked: time. Time to be present. Time to be a father, a husband, a friend. Time simply to live.\n\nDaniel is candid about the fact that his solution is not available to everyone. Most people, he acknowledges, cannot simply buy back their time as he did; the freedom to do so is itself a privilege of the wealth he had accumulated. But he insists that the deeper lesson applies to all of us, rich or poor. 'I spent twenty years,' he says, 'sacrificing the present for a future that, when it finally arrived, I was too busy to enjoy. I had got the equation exactly backwards. We treat time as if it were infinite and money as if it were scarce, when the truth is precisely the opposite. Money, you can always get more of. Time, you cannot. The most important thing I ever learned was to stop spending my one truly irreplaceable resource — my time — on things that did not deserve it.'",
        q: [
          mc("What had Daniel achieved by forty?", ["Nothing.", "A successful company and a substantial fortune.", "A family only.", "Retirement."], 1, "'built a successful company, accumulated a substantial fortune'."),
          mc("What was the one thing his wealth could not buy?", ["Health.", "Time.", "Respect.", "Friends."], 1, "'the one thing his wealth could not purchase… time'."),
          mc("What event crystallised his realisation?", ["A business failure.", "Missing his daughter's school play.", "An illness.", "A holiday."], 1, "'the day he missed his daughter's school play'."),
          mc("What did Daniel do over the following two years?", ["Worked harder.", "Dismantled his old life and simplified everything.", "Bought another company.", "Nothing."], 1, "'systematically dismantled the life he had… built… simplified his lifestyle'."),
          mc("What does Daniel admit about his solution?", ["It's for everyone.", "It's a privilege not available to all.", "It failed.", "It was easy."], 1, "'his solution is not available to everyone… a privilege'."),
          mc("What 'equation' does Daniel say we get backwards?", ["Health and money.", "We treat time as infinite and money as scarce; it's the opposite.", "Work and rest.", "Love and money."], 1, "'We treat time as if it were infinite and money as if it were scarce… precisely the opposite'."),
        ],
      },
      p6: {
        title: "The illusion of busyness",
        text: "In modern culture, busyness has become a badge of honour. (1)___ To be constantly rushed, perpetually short of time, is taken as a sign of importance and success.\n\nYet there is something deeply suspicious about this cult of busyness. (2)___ Being busy, after all, is not the same as being productive, still less as living well.\n\nMuch of our busyness, if we are honest, is self-imposed and largely pointless. (3)___ We fill our days with activity partly out of genuine necessity, but partly to avoid the discomfort of stillness, and partly simply because everyone else seems to be doing the same.\n\nThe irony is that this frantic activity often prevents us from achieving what matters most. (4)___ The truly important things — deep thought, meaningful relationships, real creativity — require precisely the unhurried time that busyness destroys.\n\nPerhaps, then, we should be more suspicious of our own busyness, and braver about resisting it. (5)___ The ability to say no, to protect our time, to leave space in our lives for what really matters, may be one of the most important skills we can develop. (6)___ In a world that worships busyness, the quiet courage to be unhurried is, paradoxically, a genuinely radical act.",
        options: [
          "We wear our full schedules with a strange kind of pride.",     // A -> gap 1
          "The two are, in fact, very frequently confused.",             // B -> gap 2
          "A great deal of it serves no real purpose at all.",           // C -> gap 3
          "The most valuable activities cannot be rushed.",              // D -> gap 4
          "Guarding our time is harder, and rarer, than it sounds.",      // E -> gap 5
          "It is a form of quiet rebellion worth practising.",           // F -> gap 6
          "Everyone agrees that being busy is completely worthless.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: llevamos con orgullo la agenda llena."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: se confunden a menudo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: mucho no tiene propósito."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: lo valioso no se puede apresurar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: proteger el tiempo es difícil."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una rebelión tranquila."),
        ],
      },
      p7: {
        title: "Four people talk about time and money",
        text: "Read what four people say about how they balance time and money.\n\nA) NADIA: I deliberately earn less than I could. I turned down a big promotion because it would have meant longer hours and more stress, and I simply decided my time was worth more than the extra money. My friends thought I was mad. But I've never regretted choosing an hour with my kids over an hour at the office.\n\nB) TOM: For me, money is freedom, and I've saved obsessively my whole life. Not to buy things — I live very simply — but to buy independence. Because I have savings, I can walk away from a bad job, take a risk, say no. Money, used wisely, isn't about luxury; it's about not being trapped.\n\nC) PRIYA: I used to waste so much money on things I didn't need, trying to fill some emptiness. When I finally sorted out my finances and started living within my means, the strangest thing happened: I became happier, not poorer. It turns out that most of what I'd been buying was making me miserable.\n\nD) SAM: My philosophy is simple: spend money to save time, never the other way round. If I can pay someone to do a chore I hate, freeing up an hour to do something I love, that's the best money I'll ever spend. Time is the one thing you can't get more of, so I buy it back whenever I can.",
        q: [
          mc("Who deliberately earns less to protect their time?", ["A", "B", "C", "D"], 0, "Nadia: 'I deliberately earn less than I could'."),
          mc("Who saves money mainly to buy independence?", ["A", "B", "C", "D"], 1, "Tom: 'money is freedom… to buy independence'."),
          mc("Who became happier after living within their means?", ["A", "B", "C", "D"], 2, "Priya: 'I became happier, not poorer'."),
          mc("Who spends money specifically to save time?", ["A", "B", "C", "D"], 3, "Sam: 'spend money to save time'."),
          mc("Who turned down a promotion for the sake of family time?", ["A", "B", "C", "D"], 0, "Nadia: 'I turned down a big promotion'."),
          mc("Who says money is about not being trapped?", ["A", "B", "C", "D"], 1, "Tom: 'it's about not being trapped'."),
          mc("Who used to buy things to fill an emptiness?", ["A", "B", "C", "D"], 2, "Priya: 'trying to fill some emptiness'."),
          mc("Who pays others to do chores they hate?", ["A", "B", "C", "D"], 3, "Sam: 'pay someone to do a chore I hate'."),
          mc("Who was thought 'mad' by their friends?", ["A", "B", "C", "D"], 0, "Nadia: 'My friends thought I was mad'."),
          mc("Who lives simply despite saving obsessively?", ["A", "B", "C", "D"], 1, "Tom: 'I live very simply'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Time is more valuable than money.'\nComenta estos dos aspectos y añade uno propio:\n1. work (el trabajo)\n2. happiness (la felicidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to make the most of your time' — da consejos prácticos.\n· INFORME sobre cómo tu instituto o empresa podría usar mejor su tiempo y recursos: analiza y recomienda.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con un experto en productividad, Mark Ellis (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a productivity expert, Mark Ellis. Interviewer: Mark, what's the biggest myth about being productive? Mark: That it means being busy. In fact, they're almost opposites. Busy people are often just active; productive people are effective. The goal isn't to do more things — it's to do the right things. Interviewer: How do we tell the difference? Mark: By being ruthless about priorities. Most of what fills our days doesn't really matter. The key skill is learning to identify the few things that do, and to protect them fiercely. Interviewer: Is time management the answer? Mark: Not really. The problem is rarely a lack of time; it's a lack of clarity about what matters. You can't manage your way out of doing too much. You have to choose to do less. Interviewer: What about all the productivity apps? Mark: Honestly, I'm sceptical. Most of them just help you do unimportant things more efficiently, which is the last thing you need. A tool won't fix a priority problem. Interviewer: What's your single most useful piece of advice? Mark: Learn to say no. Every yes to something unimportant is a no to something that matters. Protecting your time is the whole game. Interviewer: And finally, what's the ultimate goal? Mark: Not to squeeze more work into your life, but to make room in your life for what you actually care about. Productivity, properly understood, isn't about doing more. It's about having time for what matters. Interviewer: Thank you, Mark.", [
      mc("1. What is the biggest myth about productivity?", ["That it's hard.", "That it means being busy.", "That it needs apps."], 1, "'That it means being busy'."),
      mc("2. What's the difference between busy and productive people?", ["Busy = effective.", "Busy people are active; productive people are effective.", "No difference."], 1, "'productive people are effective'."),
      mc("3. How do we tell what matters?", ["Do everything.", "By being ruthless about priorities.", "Use an app."], 1, "'By being ruthless about priorities'."),
      mc("4. Is the problem usually a lack of time?", ["Yes.", "No, it's a lack of clarity about what matters.", "It's money."], 1, "'a lack of clarity about what matters'."),
      mc("5. What does Mark think of productivity apps?", ["Essential.", "He's sceptical — they make unimportant things efficient.", "The answer."], 1, "'I'm sceptical'."),
      mc("6. What is his single most useful advice?", ["Work harder.", "Learn to say no.", "Buy an app."], 1, "'Learn to say no'."),
      mc("7. What is the ultimate goal of productivity?", ["Doing more work.", "Making room for what you care about.", "Being busy."], 1, "'to make room… for what you actually care about'."),
    ]),

    ...speakingParts({ p1: "cómo organizas tu tiempo, si sueles ir con prisas y qué harías con más tiempo libre", p2: "dos personas ante el tiempo (una muy ocupada y estresada y otra con un ritmo tranquilo): compáralas y di cuál vive mejor", p3: "qué ayuda más a aprovechar el tiempo (priorizar, aprender a decir que no, evitar distracciones, planificar, descansar bien): comentadlo y elegid lo más eficaz", p4: "el tiempo y el dinero: si el tiempo vale más que el dinero, si estamos demasiado ocupados y cómo aprovechar mejor la vida" }),

    SUMMARY("Resumen del Día 44", [
      "in the end (finalmente) vs at the end (of); on time (puntual) vs in time (a tiempo para); on/in the way; in charge of.",
      "Fijas: at all costs, in advance, on purpose, by chance, out of the question, in the long run.",
      "Vocabulario de tiempo y dinero. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 45", "Escribe 6 frases con frases preposicionales fijas. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 45 ─────────────────────────
const DAY45 = {
  title: "Día 45 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de idioms, formación de palabras, registro y frases preposicionales. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 9.",
  pedagogy: {
    objective: "Consolidar el léxico funcional y el registro del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 10."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 9 del B2. Consolidas las expresiones idiomáticas, la formación de palabras, el registro formal/informal y las frases preposicionales fijas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 9", `1) Idioms: over the moon, a piece of cake, see eye to eye, cost an arm and a leg, hit the nail on the head.
2) Formación de palabras: prefijos (un-/im-/dis-/over-/under-) y sufijos (-ness/-tion/-ful/-ise).
3) Registro formal (obtain, require, sin contracciones) vs informal (phrasal verbs, contracciones).
4) Frases preposicionales: in the end/at the end, on time/in time, in charge of, at all costs.`),
    grammarEx("Use of English — Repaso mixto de la Semana 9", "Completa o elige.", [
      mc("She was thrilled — absolutely ___.", ["over the moon", "under the weather", "down in the dumps"], 0, "over the moon."),
      fb("It's ___ (POSSIBLE) to please everyone. (negativo)", ["impossible"], "im- + possible."),
      fb("His great ___ (KIND) touched us all. (sustantivo)", ["kindness"], "kind + -ness."),
      mc("FORMAL: 'I need to get some information.'", ["I need info.", "I require some information.", "Gimme the details."], 1, "require (formal)."),
      mc("Choose:", ["At the end, we agreed.", "In the end, we agreed.", "On the end, we agreed."], 1, "in the end."),
      fb("We arrived just ___ time to catch the train. (a tiempo para)", ["in"], "in time."),
      fb("She's ___ charge ___ the project. (a cargo de)", ["in", "of"], "in charge of."),
      fb("The exam was ___ ___ ___ — really easy. (idiom)", ["a piece of cake"], "a piece of cake."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 9", "Repasa los mazos (emociones, ciencia/progreso, comunicación, tiempo/dinero)."),
    vocabEx("Vocabulario — Repaso de la Semana 9", "Elige la opción correcta.", [
      mc("Feeling extremely happy and excited:", ["elated", "indifferent", "resentful"], 0, "elated."),
      mc("A sudden, important new development:", ["breakthrough", "experiment", "progress"], 0, "breakthrough."),
      mc("Writing that is short and clear:", ["concise", "long-winded", "ambiguous"], 0, "concise."),
      mc("Someone who always arrives on time:", ["punctual", "broke", "time-consuming"], 0, "punctual."),
      mc("Feeling worried about something ahead:", ["apprehensive", "elated", "content"], 0, "apprehensive."),
      mc("Able to continue without harming the environment:", ["sustainable", "ethical", "cutting-edge"], 0, "sustainable."),
      mc("To communicate a meaning or feeling:", ["convey", "proofread", "draft"], 0, "convey."),
      mc("To save money regularly:", ["put aside", "waste", "invest"], 0, "put aside."),
    ]),

    ...uoe({
      p1: {
        title: "The words we live by",
        text: "Language is not merely a tool for communication; it is, in a very real sense, the medium in which we (1)___. The words available to us shape the thoughts we are able to think, and even, some researchers argue, the way we perceive the world itself. A language rich in words for a particular experience allows its speakers to (2)___ that experience with a precision that speakers of other languages may struggle to match. This does not mean, as was once believed, that we are (3)___ of thinking anything our language has no word for. But it does suggest that a richer vocabulary is more than a mere ornament; it is a genuine (4)___ of the mind. The person who possesses only a handful of words for their emotions, for example, may find their inner life correspondingly (5)___ and confused, while the person with a rich emotional vocabulary can name, and therefore understand and manage, the subtle shades of their feelings. To learn new words, in other words, is not simply to acquire new labels for things we already knew. It is, quite literally, to expand the (6)___ of what we are able to think and feel. This is why reading widely is one of the most powerful things anyone can do: every good book, in effect, (7)___ our mind by lending us, for a time, the words and thoughts of another. The (8)___ of our vocabulary, it turns out, are also, to a remarkable degree, the boundaries of our world.",
        q: [
          mc("(1)", ["think", "live", "exist", "are"], 0, "'the medium in which we think'."),
          mc("(2)", ["describe", "grasp", "capture", "express"], 0, "'describe that experience with precision'."),
          mc("(3)", ["incapable", "unable", "powerless", "helpless"], 0, "'incapable of thinking anything'."),
          mc("(4)", ["expansion", "extension", "enlargement", "widening"], 0, "'a genuine expansion of the mind'."),
          mc("(5)", ["impoverished", "poor", "limited", "reduced"], 0, "'impoverished and confused'."),
          mc("(6)", ["boundaries", "limits", "borders", "edges"], 0, "'the boundaries of what we can think'."),
          mc("(7)", ["expands", "enlarges", "widens", "grows"], 0, "'expands our mind'."),
          mc("(8)", ["limits", "boundaries", "borders", "edges"], 0, "'The limits of our vocabulary'."),
        ],
      },
      p2: {
        title: "The generation gap in language",
        text: "Every generation invents its own slang, (1)___ has always baffled and irritated the generation before. To older ears, the language of the young often sounds like a wilful corruption of 'proper' English, a sign of falling standards and intellectual (2)___. This complaint is at least as old as writing itself; ancient authors bemoaned the sloppy speech of their (3)___ young people in almost identical terms. And it is, almost entirely, mistaken. Slang is not a corruption of language but a sign of its (4)___. A living language is constantly changing, and much of that change is driven precisely by the young, who play with words, coin new expressions, and give old ones fresh meanings. Some of these innovations die (5)___ within a season; others enter the language permanently, so that yesterday's shocking slang becomes today's respectable standard. The very words the older generation defends as 'correct' were, in their (6)___, often the slang that their own grandparents deplored. There is, in short, no such thing as a fixed, 'proper' English handed down unchanged through the ages. There is only a living language, endlessly renewing (7)___, and the young, far from destroying it, are among its most creative and (8)___ guardians.",
        q: [
          fb("(1)", ["which"], "'its own slang, which has always baffled'."),
          fb("(2)", ["decline"], "'intellectual decline'."),
          fb("(3)", ["own"], "'their own young people'."),
          fb("(4)", ["vitality", "health", "life"], "'a sign of its vitality'."),
          fb("(5)", ["out", "off"], "'die out within a season'."),
          fb("(6)", ["day", "time"], "'were, in their day'."),
          fb("(7)", ["itself"], "'renewing itself'."),
          fb("(8)", ["vital", "important"], "'its most creative and vital guardians'."),
        ],
      },
      p3: {
        title: "The disappearing languages",
        text: "Of the roughly seven thousand languages currently spoken on Earth, linguists estimate that a (1)___ proportion will have vanished by the end of this century. Every couple of weeks, somewhere in the world, the last (2)___ speaker of a language dies, and with them a language that may have been spoken for thousands of years falls silent forever. This is a loss whose (3)___ we are only beginning to understand. Each language is not merely a different set of words for the same things; it is a unique way of seeing and dividing up the world, containing knowledge, poetry and wisdom that (4)___ nowhere else. When a language dies, an entire way of understanding reality is (5)___ lost. The causes of this mass extinction are complex, but the fundamental one is the (6)___ pressure on speakers of small languages to abandon them in favour of larger, more powerful ones. A child who grows up speaking a language shared by only a few hundred people faces enormous (7)___ to switch to one that offers access to education, employment and the wider world. The tragedy is that this switch, entirely rational for each individual, adds up to a (8)___ catastrophe for humanity's linguistic heritage. Efforts are now being made to record and revive endangered languages, but for many, it is already too late.",
        items: [
          { root: "signify", accepted: ["significant"], hint: "'a significant proportion' → significant." },
          { root: "flow", accepted: ["fluent"], hint: "'the last fluent speaker' → fluent." },
          { root: "signify", accepted: ["significance"], hint: "'a loss whose significance' → significance." },
          { root: "exist", accepted: ["exists"], hint: "'knowledge that exists nowhere else' → exists." },
          { root: "recover", accepted: ["irrecoverably"], hint: "'irrecoverably lost' → irrecoverably." },
          { root: "power", accepted: ["powerful"], hint: "'the powerful pressure' → powerful." },
          { root: "press", accepted: ["pressure"], hint: "'enormous pressure to switch' → pressure." },
          { root: "collect", accepted: ["collective"], hint: "'a collective catastrophe' → collective." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 9",
        items: [
          { s1: "She was absolutely delighted with the result.", key: "MOON", s2: "She was ___ with the result.", accepted: ["over the moon"], explanation: "over the moon." },
          { s1: "It's not possible to satisfy everyone.", key: "IMPOSSIBLE", s2: "It's ___ to satisfy everyone.", accepted: ["impossible"], explanation: "im- + possible." },
          { s1: "FORMAL: I want to buy tickets in advance.", key: "PURCHASE", s2: "I would like to ___ tickets in advance.", accepted: ["purchase"], explanation: "purchase (formal)." },
          { s1: "We finally decided to cancel the trip.", key: "END", s2: "___ , we decided to cancel the trip.", accepted: ["In the end"], explanation: "in the end." },
          { s1: "She is responsible for the department.", key: "CHARGE", s2: "She is ___ the department.", accepted: ["in charge of"], explanation: "in charge of." },
          { s1: "His comment was exactly right.", key: "NAIL", s2: "His comment ___ .", accepted: ["hit the nail on the head"], explanation: "hit the nail on the head." },
        ],
      },
      p5: {
        title: "The word hoard",
        text: "When the writer and lexicographer Robert MacFarlane began, some years ago, to notice that the natural world was quietly disappearing from the language of children, he was moved to do something about it. He had discovered that a well-known children's dictionary had, in a recent edition, quietly removed dozens of words for common natural things — 'acorn', 'bluebell', 'kingfisher', 'otter', 'willow' — to make room for a new vocabulary of the digital age: 'broadband', 'blog', 'chatroom', 'cut-and-paste'. The change, small and unremarked, struck him as profoundly significant. A generation of children, it seemed, was growing up with a rich vocabulary for the virtual world and a shrinking one for the living, natural world outside their windows.\n\nMacFarlane's response was to become a collector of lost and forgotten words — words for the subtle features of landscape and weather that older, more rural generations had once possessed in abundance, but which were now vanishing from common use. He travelled the country, gathering from local dialects the precise, poetic and often astonishingly specific words that people had once used to describe the world around them: words for the particular way light falls on water, for a specific kind of mist, for the sound of wind in different kinds of tree. Each word, he came to feel, was a small treasure, a tiny lens that brought a feature of the world into sharp focus.\n\nHis argument, developed over several beautiful books, was that this loss of words matters far more than we might think. We notice, he suggested, what we have words for. A person who possesses a rich vocabulary for the natural world will see it more clearly, more precisely, and more lovingly than one who does not. When we lose the words for something, we begin, subtly, to stop seeing it at all. The disappearance of nature words from children's dictionaries was, in this light, not a trivial editorial decision but a symptom, and perhaps a cause, of a deeper disconnection between the young and the living world.\n\nMacFarlane does not pretend that reviving old words will, by itself, reconnect children with nature. But his work carries a lesson that extends far beyond landscape. Our words, he reminds us, are not neutral labels stuck onto a world we would perceive identically without them. They are, rather, the very instruments with which we notice, understand and value our surroundings. To lose a word is to lose a way of seeing; to learn one is to gain an eye. In gathering his hoard of forgotten words, MacFarlane is doing far more than indulging a nostalgic love of language. He is fighting, in his quiet way, to preserve our capacity to see the richness of the world.",
        q: [
          mc("What did MacFarlane notice about a children's dictionary?", ["It was too long.", "It had removed many nature words for digital ones.", "It was out of print.", "It was too simple."], 1, "'removed dozens of words for common natural things… a new vocabulary of the digital age'."),
          mc("What did MacFarlane become?", ["A teacher.", "A collector of lost and forgotten words.", "A politician.", "A farmer."], 1, "'a collector of lost and forgotten words'."),
          mc("Where did he gather the words?", ["From books only.", "From local dialects around the country.", "From the internet.", "From children."], 1, "'gathering from local dialects'."),
          mc("What is his central argument?", ["Words don't matter.", "We notice what we have words for.", "Nature is unimportant.", "Old words are useless."], 1, "'We notice… what we have words for'."),
          mc("What does losing a word mean, according to MacFarlane?", ["Nothing.", "Losing a way of seeing.", "Saving space.", "Gaining knowledge."], 1, "'To lose a word is to lose a way of seeing'."),
          mc("What is MacFarlane really fighting to preserve?", ["Old dictionaries.", "Our capacity to see the richness of the world.", "His career.", "Nature itself."], 1, "'to preserve our capacity to see the richness of the world'."),
        ],
      },
      p6: {
        title: "The rise of emoji",
        text: "Not long ago, the idea that a tiny cartoon face could become a meaningful part of human communication would have seemed absurd. (1)___ Yet the emoji has, in the space of little more than a decade, become one of the fastest-growing forms of expression in human history.\n\nTo language purists, this is a cause for alarm. (2)___ They see in the rise of the emoji a dangerous 'dumbing down' of language, a retreat from the richness of words into a crude picture-language fit only for children.\n\nBut this reaction, tempting though it is, may be mistaken. (3)___ Emoji are not, on the whole, replacing words; they are supplementing them, adding a layer of emotional nuance that plain text often lacks.\n\nThe problem the emoji solves is a real one. (4)___ In face-to-face conversation, our words are accompanied by tone of voice, facial expression and gesture, which carry much of our real meaning; in plain text, all of this is stripped away.\n\nSeen in this light, the emoji is not a symptom of linguistic decline but an ingenious solution to a genuine problem. (5)___ It restores to written communication some of the emotional richness that the move to text had removed. (6)___ Far from dumbing us down, the humble emoji may in fact be making our digital communication a little more human.",
        options: [
          "The speed of its adoption has been genuinely staggering.",      // A -> gap 1
          "For them, it represents everything wrong with modern language.", // B -> gap 2
          "The reality is more interesting, and more hopeful.",           // C -> gap 3
          "Written text loses the emotional cues of real conversation.",   // D -> gap 4
          "It is filling a gap that plain words could not.",              // E -> gap 5
          "That, surely, is something to welcome rather than fear.",       // F -> gap 6
          "The emoji has completely replaced all human language.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: su adopción fue vertiginosa."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: para los puristas, lo peor del idioma."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la realidad es más esperanzadora."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el texto pierde las señales emocionales."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: llena un vacío."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: algo que celebrar, no temer."),
        ],
      },
      p7: {
        title: "Four people discuss language change",
        text: "Read what four people say about how language is changing.\n\nA) NADIA: As a linguist, I find the panic about 'declining standards' both tiresome and wrong. Language has always changed, and every generation thinks its own version is the 'correct' one and the next is ruining it. It's nonsense. A living language changes; only a dead one stays still. The young aren't destroying English; they're keeping it alive.\n\nB) TOM: I'll admit I'm a bit of a stickler. I wince at 'literally' used to mean 'figuratively', at apostrophes in the wrong place. I know language changes, but I can't help feeling that some precision is being lost, and that precision matters. Being able to say exactly what you mean is worth defending.\n\nC) PRIYA: What fascinates me is how technology is changing not just our words but how we communicate. Emoji, abbreviations, memes — we're inventing whole new ways to convey meaning and emotion in text. People call it a decline, but I see extraordinary creativity. We're expanding what language can do, not shrinking it.\n\nD) SAM: The thing that worries me is the loss of words, especially for nature and for subtle feelings. As our vocabulary shrinks, I fear our ability to notice and think about the world shrinks with it. We can't value what we can't name. That, to me, is a real loss, whatever we gain in slang and emoji.",
        q: [
          mc("Who dismisses the panic about declining standards?", ["A", "B", "C", "D"], 0, "Nadia: 'the panic about \"declining standards\"… wrong'."),
          mc("Who admits to being a 'stickler' who values precision?", ["A", "B", "C", "D"], 1, "Tom: 'I'm a bit of a stickler… precision matters'."),
          mc("Who sees technology-driven change as creativity?", ["A", "B", "C", "D"], 2, "Priya: 'I see extraordinary creativity'."),
          mc("Who worries about the loss of words for nature and feelings?", ["A", "B", "C", "D"], 3, "Sam: 'the loss of words, especially for nature'."),
          mc("Who says only a dead language stays still?", ["A", "B", "C", "D"], 0, "Nadia: 'only a dead one stays still'."),
          mc("Who winces at 'literally' misused?", ["A", "B", "C", "D"], 1, "Tom: '\"literally\" used to mean \"figuratively\"'."),
          mc("Who thinks we're expanding what language can do?", ["A", "B", "C", "D"], 2, "Priya: 'expanding what language can do'."),
          mc("Who says 'we can't value what we can't name'?", ["A", "B", "C", "D"], 3, "Sam: 'We can't value what we can't name'."),
          mc("Who says the young are keeping English alive?", ["A", "B", "C", "D"], 0, "Nadia: 'they're keeping it alive'."),
          mc("Who sees emoji and memes as new ways to convey emotion?", ["A", "B", "C", "D"], 2, "Priya: 'new ways to convey meaning and emotion'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The way young people use language today is damaging it.'\nComenta estos dos aspectos y añade uno propio:\n1. technology (la tecnología)\n2. creativity (la creatividad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'Is language change a good or a bad thing?' — argumenta tu postura.\n· RESEÑA de un libro o una película que te haya hecho amar el lenguaje: descríbela y di si la recomiendas.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: I was over the moon when I heard I'd got the job. Two. Man: It's impossible to please everyone, so I stopped trying. Three. Woman: Her kindness that day is something I'll never forget. Four. Man: In the end, we decided it just wasn't worth the risk. Five. Woman: We only just got there in time to catch the last train. Six. Man: The report was so long-winded that I gave up halfway through. Seven. Woman: He's in charge of the entire project now — quite a promotion. Eight. Man: Learning to say no was the most useful thing I ever did.", [
      mc("1. How did the woman feel about the job?", ["Disappointed.", "Over the moon.", "Nervous."], 1, "'over the moon'."),
      mc("2. What did the man stop trying to do?", ["Work.", "Please everyone.", "Argue."], 1, "'impossible to please everyone'."),
      mc("3. What will the woman never forget?", ["The place.", "Someone's kindness.", "The date."], 1, "'Her kindness… I'll never forget'."),
      mc("4. What did they decide in the end?", ["To take the risk.", "It wasn't worth the risk.", "To wait."], 1, "'it just wasn't worth the risk'."),
      mc("5. Did they catch the train?", ["No.", "Yes, just in time.", "It was cancelled."], 1, "'just got there in time'."),
      mc("6. Why did the man give up on the report?", ["It was wrong.", "It was too long-winded.", "It was boring."], 1, "'so long-winded'."),
      mc("7. What is the man now in charge of?", ["A team.", "The entire project.", "The budget."], 1, "'in charge of the entire project'."),
      mc("8. What was the most useful thing the man did?", ["Say yes.", "Learn to say no.", "Work harder."], 1, "'Learning to say no'."),
    ]),

    ...speakingParts({ p1: "cómo ha cambiado tu forma de hablar y escribir con la tecnología, y qué palabras o expresiones usas mucho", p2: "dos formas de comunicarse hoy (un mensaje lleno de emojis y abreviaturas, y una carta escrita a mano): compáralas", p3: "qué habría que hacer para cuidar mejor el lenguaje (leer más, enseñar buena escritura, valorar los idiomas locales, aceptar el cambio): comentadlo y elegid lo más importante", p4: "el lenguaje: si los jóvenes lo están dañando o enriqueciendo, si perdemos palabras importantes y por qué el vocabulario que tenemos moldea cómo pensamos" }),

    SUMMARY("Resumen de la Semana 9 (B2)", [
      "Dominas las expresiones idiomáticas, la formación de palabras, el registro formal/informal y las frases preposicionales.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: el medio ambiente y la naturaleza, con repaso de estructuras clave.",
    ]),
    INFO("Mini-simulacro de la Semana 9", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 10."),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Expresiones, formación de palabras y registro",
  description: "Expresiones idiomáticas, formación de palabras (prefijos y sufijos), registro formal e informal y frases preposicionales fijas. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
