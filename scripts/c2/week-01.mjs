/**
 * C2 Proficiency · Semana 1 — "Los condicionales mixtos avanzados y la inversión formal · La identidad y la autopercepción".
 * Gramática: repaso rápido de los condicionales mixtos (ya vistos en C1) llevado
 * a matices C2 — "had it not been for", "but for", "were to" como hipotético
 * extremo, e inversión condicional sin "if" en registro muy formal/literario.
 * Cada día, las 4 destrezas con el formato real del C2 (Reading & UoE de 7 partes).
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

const speakingParts = ({ p1, p2, p3 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas y genuinamente reflexivas (3–4 frases con razones y matices).", `Parte 1 del C2: preguntas personales (${p1})`, "responder con profundidad, matiz y precisión léxica", "what strikes me most, to a certain extent, if I'm entirely honest, the way I see it"),
  speaking(2, "Speaking · Parte 2 — Tarea colaborativa", "Comentad la(s) imagen(es) a fondo, respondiendo a la pregunta planteada, y llegad a una decisión conjunta (4 min).", `Parte 2 del C2: comentar juntos ${p2} y decidir`, "evaluar, negociar y matizar con registro muy formal", "there's a compelling case for, on reflection, I take your point entirely, that said, shall we settle on"),
  speaking(3, "Speaking · Parte 3 — Turno largo + discusión", "Habla ~2 minutos sin interrupción sobre el tema dado; tu compañero/a comenta brevemente; después, discusión conjunta (~6 min).", `Parte 3 del C2: turno largo y discusión sobre ${p3}`, "argumentar con sofisticación, generalizar y matizar", "it could be argued that, up to a point, conversely, in the final analysis, be that as it may"),
];

// ───────────────────────── DÍA 1 ─────────────────────────
const DAY1 = {
  title: "Día 1 — Los condicionales mixtos y 'had it not been for' · La identidad y la autopercepción",
  description: "Repaso de los condicionales mixtos llevado a matices C2: la alternativa formal 'had it not been for'/'but for' a 'if it hadn't been for', y el uso de 'were to' como hipotético extremo. Vocabulario de la identidad y la autopercepción. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar las alternativas formales a los condicionales mixtos propias del registro C2 más elevado.",
    summary: "Condicionales mixtos + had it not been for/but for + were to; identidad y autopercepción; Use of English P1–P7, Writing, Listening P1, Speaking P1–P3.",
    commonMistakes: ["usar 'had it not been for' con una oración completa en vez de un sustantivo/gerundio (es una preposición compleja, no una conjunción).", "confundir 'but for' (formal, = si no fuera/hubiera sido por) con 'except for' (excepto).", "olvidar que 'were to' señala un hipotético considerado MUY improbable, más que el 'if' simple."],
    reviewPrompts: ["¿Cómo reescribirías 'If it hadn't been for her support, I would have given up' con 'had it not been for'?", "¿Cuándo usarías 'were to' en vez de un condicional simple?"],
  },
  items: [
    TEXT("🎓 Bienvenido/a al C2 Proficiency — el nivel más alto de Cambridge English. Ya dominas toda la gramática 'grande' del C1; aquí perfeccionas el MATIZ, el REGISTRO y la PRECISIÓN. Hoy: alternativas formales a los condicionales mixtos. Vocabulario: la IDENTIDAD y la AUTOPERCEPCIÓN."),
    GRAMMAR("Los condicionales mixtos en registro C2", `Ya dominas los condicionales mixtos (C1); en C2 se trata de manejar las ALTERNATIVAS FORMALES que aparecen constantemente en el Reading y que elevan considerablemente el registro del Writing.
1) HAD IT NOT BEEN FOR + sustantivo/gerundio (= if it hadn't been for): alternativa MUY formal e invertida, sin "if".
· Had it not been for her unwavering support, he would have abandoned the project entirely. (= If it hadn't been for…)
· Had it not been for the sudden intervention, the negotiations would have collapsed.
2) BUT FOR + sustantivo/gerundio: aún más formal/literario, mismo significado.
· But for a chance encounter, she would never have discovered her true calling.
⚠️ Ninguna de las dos admite una oración completa detrás — solo sustantivo o gerundio. Si necesitas una oración completa, usa "If it hadn't been for the fact that…".
3) WERE TO + infinitivo, como hipotético EXTREMADAMENTE improbable (más marcado que "if" simple), a menudo en registro formal/literario o para suavizar una hipótesis delicada:
· Were she to discover the truth now, the consequences would be considerable. (= If she were to discover…)
· What would happen were the funding to be withdrawn entirely?
Estas estructuras son extremadamente frecuentes en el Reading P5-P7 de C2 y en el Writing P1 (el essay que integra fuentes) — dominarlas eleva tu registro de forma inmediata y natural.`),
    WARN("Errores típicos en C2", "· 'Had it not been for' + SUSTANTIVO/GERUNDIO, nunca + oración completa con verbo conjugado.\n· 'But for' es MÁS formal/literario que 'had it not been for' — perfecto para el Writing P1, pero suena artificial en el Speaking si se abusa.\n· 'Were to' no es simplemente 'if... were' — añade un matiz de hipótesis considerada especialmente remota o delicada; úsalo quirúrgicamente.\n· No confundas 'but for' (= si no fuera/hubiera sido por) con 'except for' (= excepto, con sentido completamente distinto)."),
    grammarEx("Use of English — Condicionales mixtos en registro C2", "Elige o completa con la estructura formal correcta.", [
      mc("___ her unwavering support, he would have abandoned the project entirely.", ["Had it not been for", "If not for be", "Not had it been for"], 0, "had it not been for + sustantivo (inversión formal)."),
      mc("But for a chance encounter, she ___ never have discovered her true calling.", ["would", "will", "had"], 0, "but for + would have + p.p. (condicional 3º)."),
      mc("___ she to discover the truth now, the consequences would be considerable.", ["Were", "Was", "If"], 0, "inversión condicional: Were she to…"),
      mc("What would happen ___ the funding to be withdrawn entirely?", ["were", "was", "if were"], 0, "inversión: were the funding to be withdrawn."),
      mc("Had it not been for the sudden intervention, the negotiations ___ collapsed.", ["would have", "will have", "had"], 0, "condicional 3º: would have collapsed."),
      mc("___ for the fact that she'd already resigned, she would have taken the promotion.", ["If it hadn't been", "Had it not been", "But"], 0, "'If it hadn't been for the fact that' (con oración completa, no admite 'had it not been for' directamente)."),
    ]),
    GRAMMAR("Vocabulario del día — La identidad y la autopercepción (C2)", "Léxico de maestría sobre identidad."),
    deck("C2 S1D1 — Identidad y autopercepción", [
      ["self-perception", "autopercepción", "Her self-perception shifted dramatically after the experience.", "sustantivo", "self pəˈsepʃn"],
      ["introspection", "introspección", "Years of introspection led her to a genuine turning point.", "sustantivo", "ˌɪntrəˈspekʃn"],
      ["dissonance", "disonancia (cognitiva/personal)", "She felt a deep dissonance between her values and her career.", "sustantivo", "ˈdɪsənəns"],
      ["authenticity", "autenticidad", "Authenticity, to her, mattered more than approval.", "sustantivo", "ˌɔːθenˈtɪsəti"],
      ["persona", "personaje social / máscara pública", "He maintained a carefully constructed public persona.", "sustantivo", "pəˈsəʊnə"],
      ["self-effacing", "modesto/a hasta la timidez", "Despite her achievements, she remained genuinely self-effacing.", "adjetivo", "self ɪˈfeɪsɪŋ"],
      ["disposition", "temperamento / disposición natural", "His calm disposition rarely wavered under pressure.", "sustantivo", "ˌdɪspəˈzɪʃn"],
      ["reinvent oneself", "reinventarse", "She reinvented herself entirely after the setback.", "expresión", "ˌriːɪnˈvent wʌnˈself"],
      ["malleable", "maleable (carácter/identidad)", "Identity, psychologists argue, remains genuinely malleable.", "adjetivo", "ˈmæliəbl"],
      ["self-actualisation", "autorrealización", "Self-actualisation sits atop Maslow's famous hierarchy.", "sustantivo", "self ˌæktʃuəlaɪˈzeɪʃn"],
    ]),
    vocabEx("Vocabulario — La identidad y la autopercepción", "Elige la opción correcta.", [
      mc("The process of examining one's own thoughts and feelings:", ["introspection", "persona", "disposition"], 0, "introspection."),
      mc("A conflict between one's beliefs and one's actual behaviour:", ["dissonance", "authenticity", "malleability"], 0, "dissonance."),
      mc("Genuinely representing one's true self, not a performance:", ["authenticity", "persona", "dissonance"], 0, "authenticity."),
      mc("Modest to the point of downplaying one's own achievements:", ["self-effacing", "malleable", "introspective"], 0, "self-effacing."),
      mc("Capable of being shaped or changed over time:", ["malleable", "self-effacing", "authentic"], 0, "malleable."),
      mc("The public face or character someone presents to others:", ["persona", "disposition", "introspection"], 0, "persona."),
    ]),

    ...uoe({
      p1: {
        title: "Who are we, really?",
        text: "Philosophers and psychologists alike have long (1)___ over the question of what, precisely, constitutes personal identity across time, given that virtually every cell, belief and relationship a person holds gradually (2)___ over a lifetime. Some theorists argue that identity resides primarily in continuity of memory, a thread of remembered experience that (3)___ the self together despite constant underlying change. Others locate identity instead in continuity of values and character, arguing that a person who retained every memory but whose fundamental values had entirely (4)___ would, in any meaningful sense, no longer be the same individual at all. Had it not (5)___ for advances in neuroscience revealing just how malleable both memory and personality genuinely are, this debate might have remained comfortably (6)___ to abstract philosophical speculation alone.",
        q: [
          mc("(1)", ["puzzled", "wondered", "debated", "argued"], 2, "'have long debated over the question'."),
          mc("(2)", ["shifts", "moves", "turns", "changes"], 3, "'gradually changes over a lifetime'."),
          mc("(4)", ["altered", "shifted", "transformed", "reversed"], 2, "'fundamental values had entirely transformed'."),
          mc("(3)", ["holds", "keeps", "binds", "ties"], 0, "'a thread… that holds the self together'."),
          mc("(5)", ["been", "have", "had", "be"], 0, "'Had it not been for advances'."),
          mc("(6)", ["confined", "restricted", "limited", "contained"], 0, "'remained comfortably confined to'."),
        ],
      },
      p2: {
        title: "The self we perform",
        text: "Sociologists studying self-presentation have long argued (1)___ identity itself is, in an important sense, performative — constructed and continuously revised through the countless small interactions of everyday social life, rather (2)___ existing as some fixed, essential core awaiting mere discovery. This perspective does not necessarily imply (3)___ authenticity is illusory or meaningless; rather, it suggests authenticity itself may be better understood as consistency across one's various social performances, (4)___ than as some singular, unchanging essence hidden beneath them. Were one (5)___ take this view seriously, the popular injunction to simply 'be yourself' becomes considerably more philosophically complicated than it initially, casually appears. But (6)___ this constant social performance, would any coherent sense of self even be possible to sustain at all?",
        q: [
          fb("(1)", ["that"], "'sociologists… have long argued that'."),
          fb("(2)", ["than"], "'rather than existing as some fixed… core'."),
          fb("(3)", ["that"], "'does not necessarily imply that authenticity'."),
          fb("(4)", ["rather"], "'rather than as some singular… essence'."),
          fb("(5)", ["to"], "'Were one to take this view seriously' (inversión condicional)."),
          fb("(6)", ["for"], "'But for this constant social performance…' (but for, condicional formal)."),
        ],
      },
      p3: {
        title: "The malleable self",
        text: "Contemporary psychology increasingly challenges the once-dominant (1)___ that personality traits remain essentially fixed from early adulthood onward, largely (2)___ by longitudinal studies tracking individuals across many decades. These studies reveal genuine, sometimes (3)___ shifts in core personality dimensions well into midlife and beyond, driven by major life events, changing circumstances and, notably, deliberate personal (4)___. This growing body of evidence has considerable practical (5)___: if identity genuinely remains malleable throughout life, then the pursuit of meaningful (6)___ need not be confined to youth, but remains a live, ongoing possibility at any stage of a person's life.",
        items: [
          { root: "assume", accepted: ["assumption"], hint: "'the once-dominant assumption' → assumption." },
          { root: "prompt", accepted: ["prompted"], hint: "'largely prompted by longitudinal studies' → prompted." },
          { root: "substance", accepted: ["substantial"], hint: "'sometimes substantial shifts' → substantial." },
          { root: "effort", accepted: ["effort"], hint: "'deliberate personal effort' (sustantivo)." },
          { root: "imply", accepted: ["implications"], hint: "'considerable practical implications' → implications." },
          { root: "transform", accepted: ["transformation"], hint: "'the pursuit of meaningful transformation' → transformation." },
        ],
      },
      p4: {
        title: "Transformaciones — condicionales mixtos formales",
        items: [
          { s1: "If it hadn't been for her support, he would have given up.", key: "BEEN", s2: "Had it not ___ for her support, he would have given up.", accepted: ["been"], explanation: "had it not been for (inversión formal)." },
          { s1: "If it hadn't been for a chance encounter, she would never have found her calling.", key: "BUT", s2: "___ for a chance encounter, she would never have found her calling.", accepted: ["but"], explanation: "but for (registro muy formal)." },
          { s1: "If she were to discover the truth now, the consequences would be serious.", key: "WERE", s2: "___ she to discover the truth now, the consequences would be serious.", accepted: ["were"], explanation: "inversión condicional: Were she to." },
          { s1: "If the funding were withdrawn, what would happen?", key: "WERE", s2: "What would happen ___ the funding to be withdrawn?", accepted: ["were"], explanation: "inversión: were the funding to." },
          { s1: "If it hadn't been for the fact that she'd resigned, she would have accepted.", key: "HADN'T", s2: "If it ___ been for the fact that she'd resigned, she would have accepted.", accepted: ["hadn't", "had not"], explanation: "if it hadn't been for + oración completa (con 'the fact that')." },
        ],
      },
      p5: {
        title: "The woman who forgot who she was",
        text: "When a rare neurological condition began gradually eroding a woman's autobiographical memory in her mid-forties, both she and her family confronted a question that had, until that point, remained comfortably theoretical: how much of who a person genuinely is depends on remembering who they have actually been.\n\nHad it not been for her family's meticulous documentation of her earlier life — photographs, letters, home videos accumulated across decades — she would have faced her condition with almost nothing beyond fragmentary, unreliable traces of her own extensive personal history. But for this considerable accumulated archive, reconstructing even a basic outline of her earlier identity would have proven, by most accounts, close to impossible.\n\nWhat struck neurologists studying her particular case most forcefully was not merely the loss of specific autobiographical memories, but something considerably more philosophically unsettling: her fundamental personality, values and characteristic manner of engaging with the world remained, by every available measure, remarkably intact throughout the progression of her condition, largely undisturbed by the parallel erosion of the specific memories that had, presumably, originally shaped them.\n\nThis apparent dissociation between memory and underlying character challenged, directly and rather uncomfortably, theories of identity that had long assumed memory itself to be personality's primary foundation. Were memory truly foundational to identity in the way many philosophers had long confidently assumed, her case would predict a correspondingly severe, parallel deterioration in personality and character. It did not straightforwardly occur.\n\nHer own testimony, offered through the condition's earlier, less severe stages while she could still meaningfully communicate, proved genuinely illuminating on this exact point. She reported feeling, in her own words, essentially herself despite the mounting, undeniable gaps in her personal history — a persistent core sense of identity that appeared to survive, relatively intact, even as the specific remembered content that had presumably once constructed and sustained that same identity steadily, progressively disappeared around it.\n\nHer case, though admittedly a single instance and therefore inherently limited as scientific evidence, has since prompted renewed, serious philosophical interest in theories of identity that locate the genuine core of selfhood not primarily in remembered narrative content, but rather in something closer to persistent underlying disposition and characteristic manner of engaging with the world — a self, in this view, considerably less dependent on memory than earlier theoretical frameworks had generally, confidently assumed it to be.\n\nHer family, reflecting years later on the experience, noted with a certain hard-won, bittersweet philosophical clarity that they had, in an important sense, continued relating to fundamentally the same person throughout her illness, even as the specific remembered content that had once defined her particular life story gradually, inexorably slipped away.",
        q: [
          mc("What did the family's documentation allow?", ["Nothing significant.", "Reconstructing a basic outline of her earlier identity.", "Curing her condition.", "Preventing memory loss entirely."], 1, "'reconstructing even a basic outline of her earlier identity would have proven… close to impossible' without it."),
          mc("What struck neurologists most about her case?", ["Total loss of personality.", "Her fundamental personality remained remarkably intact despite memory loss.", "She recovered all her memories.", "Her family forgot her too."], 1, "'her fundamental personality, values and characteristic manner… remained… remarkably intact'."),
          mc("What did this challenge?", ["Nothing significant.", "Theories assuming memory is personality's primary foundation.", "Her family's documentation.", "Modern neuroscience entirely."], 1, "'challenged… theories of identity that had long assumed memory itself to be personality's primary foundation'."),
          mc("What did she report feeling during earlier stages?", ["Completely different from before.", "Essentially herself despite the gaps in her history.", "No sense of self at all.", "Constant confusion only."], 1, "'She reported feeling… essentially herself despite the mounting… gaps in her personal history'."),
          mc("What has her case prompted renewed interest in?", ["Memory-based theories of identity.", "Theories locating identity in persistent disposition rather than remembered narrative.", "Abandoning identity theory entirely.", "Purely biological theories of the brain."], 1, "'theories of identity that locate the genuine core of selfhood… in something closer to persistent underlying disposition'."),
          mc("How does her family describe the experience, looking back?", ["They related to a completely different person.", "They continued relating to fundamentally the same person throughout.", "They lost all connection to her.", "They found it entirely straightforward."], 1, "'they had… continued relating to fundamentally the same person throughout her illness'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Popular culture tends to treat personal reinvention as an unambiguously admirable pursuit, celebrating those who dramatically transform their careers, appearance or entire way of life as somehow more courageous or authentic than those who remain, by comparison, largely consistent across their lives. (1)___\n\nThis cultural narrative, appealing as it undeniably is, arguably oversimplifies a considerably more complicated underlying reality. (2)___ Genuine, durable change and mere superficial rebranding can look remarkably similar from the outside, at least initially.\n\nWhat distinguishes authentic transformation from its more superficial cousin, psychologists studying personal change increasingly suggest, is not the dramatic visibility of the change itself. (3)___ It is, rather, whether the change genuinely reflects a deeper shift in underlying values, or merely a more cosmetic alteration of external presentation.\n\nHad it not been for this crucial underlying distinction, virtually any change, however superficial or fleeting, might be uncritically celebrated as a form of admirable personal growth. (4)___ Not every reinvention, it turns out, represents genuine psychological development.\n\nThis matters because the pressure to dramatically, visibly reinvent oneself, particularly when amplified and performed for social media audiences, can occasionally crowd out the quieter, considerably less visible work of genuine internal growth. (5)___ Authentic change frequently proceeds gradually, without any single dramatic, photogenic moment to mark or announce it.\n\nFor those genuinely seeking meaningful personal transformation, then, the more useful question may not be how visibly different one appears afterward. (6)___ It may instead be whether one's underlying values and characteristic way of engaging with the world have genuinely, substantively shifted at all.",
        options: [
          "That celebration is not entirely unearned.",  // A -> gap1
          "The two are not, on closer inspection, quite the same thing.",  // B -> gap2
          "Visibility, it turns out, is a poor proxy for depth.", // C -> gap3
          "Some distinction, clearly, has to be doing real work here.", // D -> gap4
          "Quiet, gradual change rarely photographs well.",  // E -> gap5
          "A better question looks considerably further inward.", // F -> gap6
          "No reinvention has ever been purely cosmetic.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa celebración no es del todo inmerecida."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las dos cosas no son exactamente iguales."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la visibilidad es un mal indicador de profundidad."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: alguna distinción tiene que estar operando aquí."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el cambio silencioso rara vez queda bien en foto."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una mejor pregunta mira hacia dentro."),
        ],
      },
      p7: {
        title: "Four people discuss how their sense of identity has changed over time",
        text: "Read what four people say about how their sense of identity has changed over the years.\n\nA) NADIA: Had it not been for a serious illness in my thirties, I doubt I would ever have questioned the career-driven persona I'd spent a decade carefully constructing. Recovering forced a genuine reassessment of what actually mattered to me, beneath all that performance.\n\nB) TOM: My sense of self has stayed remarkably consistent, honestly, despite considerable external change — different countries, careers, relationships. What I've come to realise is that consistency of underlying disposition, not sameness of circumstance, is what genuinely defines identity for me.\n\nC) PRIYA: I reinvented myself quite deliberately after a difficult divorce, and I'll admit it initially felt more like performance than genuine transformation. But for the sustained, patient work of actual therapy, I doubt that early reinvention would have led anywhere lasting or real.\n\nD) SAM: What strikes me most, looking back, is how gradually my values actually shifted, without any single dramatic moment I could clearly point to. Were someone to ask me exactly when I changed, I genuinely couldn't give them a precise, satisfying answer.\n",
        q: [
          mc("Who questioned their career-driven persona after a serious illness?", ["A", "B", "C", "D"], 0, "Nadia: 'Had it not been for a serious illness… I doubt I would ever have questioned the career-driven persona'."),
          mc("Who has stayed remarkably consistent despite considerable external change?", ["A", "B", "C", "D"], 1, "Tom: 'My sense of self has stayed remarkably consistent… despite considerable external change'."),
          mc("Who initially felt their reinvention was more performance than transformation?", ["A", "B", "C", "D"], 2, "Priya: 'it initially felt more like performance than genuine transformation'."),
          mc("Who couldn't point to a single dramatic moment of change?", ["A", "B", "C", "D"], 3, "Sam: 'how gradually my values actually shifted, without any single dramatic moment I could clearly point to'."),
          mc("Who believes consistency of disposition, not circumstance, defines identity?", ["A", "B", "C", "D"], 1, "Tom: 'consistency of underlying disposition, not sameness of circumstance, is what genuinely defines identity'."),
          mc("Who credits therapy with making their reinvention lasting?", ["A", "B", "C", "D"], 2, "Priya: 'But for the sustained, patient work of actual therapy, I doubt that early reinvention would have led anywhere lasting'."),
          mc("Who reinvented themselves deliberately after a divorce?", ["A", "B", "C", "D"], 2, "Priya: 'I reinvented myself quite deliberately after a difficult divorce'."),
          mc("Who says illness forced a reassessment of what mattered beneath their performance?", ["A", "B", "C", "D"], 0, "Nadia: 'Recovering forced a genuine reassessment of what actually mattered to me, beneath all that performance'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la identidad y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE, dando tu propia perspectiva razonada.\n\nTEXTO 1: 'Identity is fundamentally a social performance — we construct who we are through countless daily interactions, continuously revising the self we present to others. There is no fixed, essential core waiting to be discovered underneath; there is only the accumulated pattern of our performances.'\n\nTEXTO 2: 'Personality research increasingly shows genuine continuity of core disposition across a lifetime, even amid dramatic external change — different careers, relationships, even memory loss. This suggests something more stable than mere performance: a persistent underlying self that performance merely expresses, rather than constitutes.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente, aportando tu propia conclusión razonada. Usa al menos UN condicional mixto formal (had it not been for / but for / were... to). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista de psicología: 'How much do we really change?' — explora con ejemplos propios o hipotéticos.\n· CARTA/EMAIL formal a un periódico respondiendo a un artículo sobre la reinvención personal.\n· REVIEW de un libro o documental sobre la identidad o la memoria que te haya marcado.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear a psychologist discussing identity. Woman: Had it not been for longitudinal studies tracking people across decades, we'd still assume personality was essentially fixed by early adulthood. Man: It's remarkable how much genuine change occurs well into midlife, isn't it. Extract Two. You hear two friends discussing a mutual acquaintance's reinvention. Man: But for that difficult divorce, I doubt she'd ever have made such dramatic changes to her whole life. Woman: True, though I do wonder how much of it was genuine transformation versus simple performance. Extract Three. You hear someone reflecting on their own sense of self. Woman: Were you to ask me exactly when my values shifted, honestly, I couldn't give you a precise answer. Man: That's interesting — for me it was one specific, identifiable moment, not a gradual process at all.", [
      mc("1. What does the woman say about personality assumptions?", ["They were always accurate.", "Longitudinal studies challenged the assumption personality was fixed by adulthood.", "Nobody has studied this.", "Personality never changes."], 1, "'Had it not been for longitudinal studies… we'd still assume personality was essentially fixed'."),
      mc("2. What does the man find remarkable?", ["Nothing in particular.", "How much genuine change occurs well into midlife.", "That personality never changes.", "That studies are unreliable."], 1, "'It's remarkable how much genuine change occurs well into midlife'."),
      mc("3. What does the man say about the mutual acquaintance's changes?", ["They were minor.", "The divorce likely drove her dramatic life changes.", "Nothing changed for her.", "She always planned this."], 1, "'But for that difficult divorce, I doubt she'd ever have made such dramatic changes'."),
      mc("4. What does the woman wonder?", ["Nothing at all.", "How much was genuine transformation versus performance.", "Whether the divorce was necessary.", "If she'll change again."], 1, "'I do wonder how much of it was genuine transformation versus simple performance'."),
      mc("5. How does the woman describe her own value shift?", ["One specific identifiable moment.", "She couldn't give a precise answer — it was gradual.", "It never happened.", "It happened overnight."], 1, "'Were you to ask me exactly when my values shifted, honestly, I couldn't give you a precise answer'."),
      mc("6. How does the man's experience differ?", ["Identical to the woman's.", "His was one specific, identifiable moment, not gradual.", "He has never changed.", "He can't remember."], 1, "'for me it was one specific, identifiable moment, not a gradual process at all'."),
    ]),

    ...speakingParts({ p1: "si sientes que has cambiado mucho como persona a lo largo de los años", p2: "dos imágenes de la identidad (alguien mirando fotos antiguas de sí mismo/a y una persona frente a un espejo pensativa): comentadlas y decidid qué representa mejor el concepto de 'identidad'", p3: "si creemos que la identidad es algo fijo o algo que cambia constantemente, y qué papel tienen la memoria, las relaciones y las experiencias vividas en la construcción de quiénes somos" }),

    SUMMARY("Resumen del Día 1", [
      "Condicionales mixtos en registro C2: had it not been for / but for (+ sustantivo/gerundio, nunca oración completa) e inversión condicional (Were she to…, Should you require…).",
      "Vocabulario de identidad y autopercepción. Practicadas las 7 partes de Use of English, Writing (con integración de fuentes), Listening P1 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 2", "Escribe 4 frases con 'had it not been for' o 'but for'. Repasa el vocabulario de identidad. Mañana: la inversión condicional sin 'if' en más contextos y registro literario."),
  ],
};

// ───────────────────────── DÍA 2 ─────────────────────────
const DAY2 = {
  title: "Día 2 — La inversión condicional sin 'if' en registro literario · La memoria y la nostalgia",
  description: "Inversión condicional formal en más contextos: Had she known…, Should you require…, además de estructuras próximas (Failing that, Short of + gerundio). Vocabulario de la memoria y la nostalgia. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Ampliar el dominio de la inversión condicional formal a más patrones, propios del registro académico y literario más elevado.",
    summary: "Inversión condicional ampliada + failing that/short of; memoria y nostalgia; Use of English P1–P7, Writing, Listening P2, Speaking P1–P3.",
    commonMistakes: ["usar 'should' con sentido de obligación en vez de condicional formal (Should you require = If you should require, no 'debes requerir').", "olvidar que 'short of' + gerundio significa 'salvo que/a menos que' (con matiz de única alternativa extrema).", "invertir 'had' en pasado simple narrativo por error, sin sentido condicional real."],
    reviewPrompts: ["¿Cómo invertirías 'If you should require further information, please contact us'?", "¿Qué significa 'short of resigning, there was little else she could do'?"],
  },
  items: [
    TEXT("🔁 Ayer, had it not been for / but for. Hoy ampliamos la INVERSIÓN CONDICIONAL a más patrones formales, y añadimos alternativas próximas (failing that, short of). Vocabulario: la MEMORIA y la NOSTALGIA."),
    GRAMMAR("La inversión condicional ampliada", `Además de "Were… to" (Día 1), otros dos patrones de inversión condicional aparecen constantemente en textos formales/académicos de C2:
1) HAD + sujeto + participio pasado (= If + sujeto + had + p.p., condicional 3º):
· Had she known the risks involved, she would never have signed the contract.
· Had the committee acted sooner, the crisis might well have been averted.
2) SHOULD + sujeto + base form (= If + sujeto + should, condicional 1º MUY formal, hipótesis considerada posible pero no segura):
· Should you require further information, please do not hesitate to contact us.
· Should any concerns arise, the committee will convene immediately.
ESTRUCTURAS PRÓXIMAS (no son condicionales de inversión, pero expresan una idea relacionada):
· FAILING THAT (si eso no funciona/no es posible): Try the main office first; failing that, contact the regional branch.
· SHORT OF + gerundio (a menos que, salvo, como única alternativa extrema): Short of resigning outright, there was little else she could realistically do.
Estas estructuras son extremadamente comunes en correspondencia formal, informes y el Reading P5-P7 — dominarlas te da acceso inmediato al registro más profesional/académico del inglés.`),
    WARN("Errores típicos en C2", "· 'Should you require' NO significa obligación — es un condicional formal (= if you should require, es decir, 'en caso de que necesite').\n· 'Had she known' invierte el condicional 3º; no confundir con un simple pasado narrativo ('Had breakfast and left').\n· 'Short of' + GERUNDIO (short of resigning), nunca + infinitivo.\n· 'Failing that' introduce una alternativa tras una primera opción fallida — no es intercambiable con 'otherwise' sin más."),
    grammarEx("Use of English — Inversión condicional ampliada", "Elige o completa con la estructura formal correcta.", [
      mc("___ she known the risks involved, she would never have signed.", ["Had", "Should", "Were"], 0, "inversión condicional 3º: Had she known."),
      mc("___ you require further information, please contact us directly.", ["Should", "Had", "Were"], 0, "inversión condicional 1º formal: Should you require."),
      mc("Try the main office first; ___ that, contact the regional branch.", ["failing", "short of", "were"], 0, "failing that (alternativa)."),
      mc("___ of resigning outright, there was little else she could do.", ["Short", "Failing", "Had"], 0, "short of + gerundio."),
      mc("___ the committee acted sooner, the crisis might have been averted.", ["Had", "Should", "Were"], 0, "inversión condicional 3º: Had the committee."),
      mc("Should any concerns arise, the committee ___ immediately.", ["will convene", "would convene", "convened"], 0, "should + futuro simple (condicional 1º formal)."),
    ]),
    GRAMMAR("Vocabulario del día — La memoria y la nostalgia (C2)", "Léxico de maestría sobre la memoria."),
    deck("C2 S1D2 — Memoria y nostalgia", [
      ["wistful", "melancólico/a, con añoranza", "She spoke of her childhood home in a wistful tone.", "adjetivo", "ˈwɪstfl"],
      ["evoke", "evocar", "The scent instantly evoked memories of her grandmother's kitchen.", "verbo", "ɪˈvəʊk"],
      ["reminisce", "rememorar, evocar recuerdos", "They spent the evening reminiscing about university days.", "verbo", "ˌremɪˈnɪs"],
      ["poignant", "conmovedor/a, evocador/a de forma intensa", "The old photograph proved surprisingly poignant.", "adjetivo", "ˈpɔɪnjənt"],
      ["fade", "desvanecerse (un recuerdo)", "Even vivid memories inevitably fade with time.", "verbo", "feɪd"],
      ["sentimental value", "valor sentimental", "The trinket held far more sentimental than monetary value.", "sustantivo", "ˌsentɪˈmentl ˈvæljuː"],
      ["bittersweet", "agridulce", "Returning to her childhood home felt distinctly bittersweet.", "adjetivo", "ˈbɪtəswiːt"],
      ["idealise", "idealizar", "We tend to idealise the past, conveniently forgetting its hardships.", "verbo", "aɪˈdiːəlaɪz"],
      ["vivid recollection", "recuerdo vívido", "She retained a vivid recollection of that particular summer.", "sustantivo", "ˈvɪvɪd ˌrekəˈlekʃn"],
      ["longing", "añoranza, anhelo", "A quiet longing for simpler times crept over him.", "sustantivo", "ˈlɒŋɪŋ"],
    ]),
    vocabEx("Vocabulario — La memoria y la nostalgia", "Elige la opción correcta.", [
      mc("Full of melancholic yearning:", ["wistful", "poignant", "vivid"], 0, "wistful."),
      mc("To bring a memory or feeling powerfully to mind:", ["evoke", "fade", "idealise"], 0, "evoke."),
      mc("To talk about pleasant past experiences at length:", ["reminisce", "evoke", "idealise"], 0, "reminisce."),
      mc("Emotionally moving in a deep, often sad way:", ["poignant", "wistful", "vivid"], 0, "poignant."),
      mc("Combining both happiness and sadness at once:", ["bittersweet", "wistful", "poignant"], 0, "bittersweet."),
      mc("To view the past as better than it genuinely was:", ["idealise", "evoke", "reminisce"], 0, "idealise."),
    ]),

    ...uoe({
      p1: {
        title: "Why nostalgia isn't what it used to be",
        text: "Psychologists studying nostalgia have, in recent decades, substantially (1)___ its reputation, moving away from an earlier clinical view that treated it as a form of pathological homesickness to be actively discouraged. Contemporary research increasingly (2)___ that nostalgic reflection, engaged in moderately, actually serves several genuinely valuable psychological functions — bolstering a sense of meaning, strengthening social connectedness, and providing comfort during periods of (3)___ transition or difficulty. Should this more positive reassessment prove (4)___ correct, therapists might reasonably reconsider previous clinical guidance that had generally discouraged excessive dwelling on the past. Had earlier researchers possessed the more sophisticated tools available today, this considerable (5)___ in scientific understanding might conceivably have (6)___ decades sooner.",
        q: [
          mc("(1)", ["rehabilitated", "restored", "repaired", "revived"], 0, "'substantially rehabilitated its reputation'."),
          mc("(2)", ["suggests", "proposes", "implies", "indicates"], 0, "'research increasingly suggests that'."),
          mc("(3)", ["considerable", "significant", "substantial", "genuine"], 1, "'periods of significant… transition' — matiz más natural aquí."),
          mc("(4)", ["broadly", "largely", "generally", "widely"], 1, "'prove largely correct'."),
          mc("(5)", ["shift", "change", "turn", "move"], 0, "'this considerable shift in scientific understanding'."),
          mc("(6)", ["occurred", "happened", "arrived", "emerged"], 0, "'might conceivably have occurred decades sooner'."),
        ],
      },
      p2: {
        title: "The unreliable archive",
        text: "Memory, contrary to popular intuition, does not function (1)___ a reliable archive faithfully preserving past experience unchanged; it functions, rather, as an active, ongoing process of reconstruction, subtly revised (2)___ each subsequent act of remembering. This means that a vivid, seemingly precise recollection may, in (3)___, differ considerably from what actually, originally occurred, without the person doing the remembering having any genuine awareness (4)___ this drift whatsoever. Should this reconstructive, revisionist nature of memory prove genuinely troubling to consider, it is worth noting (5)___ this same malleability also permits meaningful psychological healing: traumatic memories, research increasingly suggests, can themselves be gradually, therapeutically reshaped (6)___ time, rather than remaining forever fixed in their original, unbearable form.",
        q: [
          fb("(1)", ["as"], "'does not function as a reliable archive'."),
          fb("(2)", ["with"], "'subtly revised with each subsequent act'."),
          fb("(3)", ["fact", "reality"], "'may, in fact/reality, differ considerably'."),
          fb("(4)", ["of"], "'awareness of this drift'."),
          fb("(5)", ["that"], "'it is worth noting that this same malleability'."),
          fb("(6)", ["over"], "'reshaped over time'."),
        ],
      },
      p3: {
        title: "The scent of the past",
        text: "Among the various sensory triggers capable of evoking powerful (1)___ recollection, smell holds a distinctive, well-documented psychological status, frequently summoning vivid, emotionally charged memories with a (2)___ that visual or auditory cues rarely quite manage to replicate. This apparent (3)___ owes much to the underlying neuroanatomy involved: olfactory information, unlike most other sensory input, travels a comparatively direct neural pathway to brain regions intimately associated with both emotion and (4)___, largely bypassing the more elaborate processing other senses typically undergo. This helps explain why a single, unexpected (5)___ scent can trigger an almost overwhelming wave of nostalgic feeling, seemingly instantaneously, with remarkably little conscious (6)___ or deliberate effort required on the part of the person experiencing it.",
        items: [
          { root: "auto", accepted: ["autobiographical"], hint: "'evoking powerful autobiographical recollection' → autobiographical." },
          { root: "immediate", accepted: ["immediacy"], hint: "'a directness/immediacy that visual… cues rarely replicate' → immediacy." },
          { root: "potency", accepted: ["potency"], hint: "'This apparent potency' (sustantivo, del ámbito 'potent')." },
          { root: "memory", accepted: ["memory"], hint: "'regions… associated with… memory' (sustantivo)." },
          { root: "familiar", accepted: ["familiar"], hint: "'a single, unexpected familiar scent' (adjetivo)." },
          { root: "mediate", accepted: ["mediation"], hint: "'remarkably little conscious mediation' → mediation." },
        ],
      },
      p4: {
        title: "Transformaciones — inversión condicional ampliada",
        items: [
          { s1: "If she had known the risks, she would never have signed the contract.", key: "KNOWN", s2: "Had she ___ the risks, she would never have signed.", accepted: ["known"], explanation: "inversión condicional 3º: Had she known." },
          { s1: "If you should require further information, please contact us.", key: "SHOULD", s2: "___ you require further information, please contact us.", accepted: ["should"], explanation: "inversión condicional 1º formal." },
          { s1: "If that doesn't work, contact the regional branch instead.", key: "FAILING", s2: "___ that, contact the regional branch instead.", accepted: ["failing"], explanation: "failing that." },
          { s1: "Unless she resigned, there was little else she could do.", key: "SHORT", s2: "___ of resigning, there was little else she could do.", accepted: ["short"], explanation: "short of + gerundio." },
          { s1: "If the committee had acted sooner, the crisis might have been averted.", key: "ACTED", s2: "Had the committee ___ sooner, the crisis might have been averted.", accepted: ["acted"], explanation: "inversión condicional 3º." },
        ],
      },
      p5: {
        title: "The archive that couldn't be trusted",
        text: "When a team of memory researchers set out to investigate a particularly striking pattern noticed across several unrelated legal cases — witnesses expressing complete, unwavering confidence in recollections that documentary evidence subsequently, definitively contradicted — they had little idea their findings would ultimately prove quite so unsettling for the legal system's traditional reliance on eyewitness testimony.\n\nHad these researchers relied solely on witnesses' own subjective confidence as a rough proxy for accuracy, as courts had traditionally, implicitly tended to do for generations, they would have systematically, repeatedly reached badly mistaken conclusions in case after documented case. Confidence and accuracy, their painstaking research demonstrated with uncomfortable clarity, correlate considerably more weakly than most people, including trained legal professionals, generally assume.\n\nWhat proved particularly troubling was the discovery that memories could be measurably, sometimes quite easily altered simply through the specific way questions happened to be phrased during subsequent interviews or interrogations. A witness asked whether they'd seen 'the' broken headlight, researchers found, would frequently report having noticed one, even when no headlight had actually, objectively been broken at the original scene at all — the mere presupposition embedded within the question itself proving sufficient to subtly plant an entirely false but subjectively vivid recollection.\n\nShould investigators fail to account carefully for this well-documented phenomenon, the research team concluded, entire criminal cases could rest, however unintentionally and in good faith, on memories that had been inadvertently, unintentionally contaminated by the investigation process itself, rather than reflecting anything resembling the original, actual event under investigation.\n\nThe implications extended considerably beyond formal courtrooms and legal proceedings. Family disputes over shared, contested memories, historical disagreements about significant past events, even personal, private uncertainty about one's own remembered childhood — all, the research suggested, were subject to broadly similar reconstructive distortions, memory's fundamentally active, ongoing nature quietly at work everywhere, not merely within the specific, high-stakes context of criminal investigation and legal testimony.\n\nFailing a fundamental reconsideration of how memory actually, demonstrably works, the researchers warned, institutions ranging from courts to therapy practices to journalism risked continuing to treat a fundamentally reconstructive, malleable process as though it were instead a straightforwardly reliable archival record — a category error with genuinely serious, sometimes life-altering practical consequences for real people caught up in these systems.\n\nTheir eventual findings, though initially and predictably controversial within both legal and psychological circles, gradually prompted meaningful, substantive reforms to interview and interrogation protocols across numerous jurisdictions — a rare, genuinely encouraging instance of rigorous academic research directly, measurably reshaping real-world institutional practice for the better.",
        q: [
          mc("What pattern did researchers notice across legal cases?", ["Witnesses were always accurate.", "Witnesses expressed confidence in recollections that evidence contradicted.", "No witnesses testified.", "Evidence was always unreliable."], 1, "'witnesses expressing complete, unwavering confidence in recollections that documentary evidence subsequently… contradicted'."),
          mc("What did the research show about confidence and accuracy?", ["They correlate perfectly.", "They correlate considerably more weakly than generally assumed.", "Confidence guarantees accuracy.", "Accuracy is irrelevant to confidence."], 1, "'Confidence and accuracy… correlate considerably more weakly than most people… generally assume'."),
          mc("What could alter memories, according to the research?", ["Nothing could alter them.", "The specific way questions were phrased during interviews.", "Only physical evidence.", "The passage of time alone."], 1, "'memories could be measurably… altered simply through the specific way questions happened to be phrased'."),
          mc("What did the researchers conclude about criminal cases?", ["They are always accurate.", "Cases could rest on memories contaminated by the investigation process itself.", "Memory contamination never happens.", "Only rare cases are affected."], 1, "'entire criminal cases could rest… on memories that had been inadvertently… contaminated by the investigation process itself'."),
          mc("How far did the implications extend, according to the text?", ["Only to criminal courts.", "Beyond courtrooms, to family disputes, history and personal memory.", "Nowhere beyond the original study.", "Only to journalism."], 1, "'The implications extended considerably beyond formal courtrooms… Family disputes… historical disagreements… personal… uncertainty'."),
          mc("What was the eventual outcome of the research?", ["It was ignored entirely.", "It prompted meaningful reforms to interview and interrogation protocols.", "It was proven wrong.", "It had no practical effect."], 1, "'gradually prompted meaningful, substantive reforms to interview and interrogation protocols across numerous jurisdictions'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Nostalgia, for much of the twentieth century, carried a distinctly negative clinical connotation, treated by many physicians and psychologists as a genuine pathology requiring active treatment rather than simple acceptance. (1)___\n\nThis clinical suspicion has, over recent decades, given way to a considerably more nuanced, evidence-based understanding. (2)___ Moderate, deliberately engaged nostalgic reflection now appears to serve several genuinely valuable psychological functions rather than representing pure dysfunction.\n\nAmong these functions, researchers particularly emphasise nostalgia's role in bolstering a fragile or threatened sense of meaning during difficult life transitions. (3)___ Remembering past connection and purpose, it turns out, can meaningfully reinforce a currently wavering sense of identity and direction.\n\nNostalgia also appears to strengthen social connectedness, reminding people of relationships and shared experiences that anchor them within a broader, ongoing life narrative. (4)___ Far from mere idle escapism, this function looks genuinely, functionally adaptive.\n\nNone of this suggests nostalgic reflection is invariably beneficial in every single instance, however. (5)___ Excessive dwelling on an idealised past, particularly one that distorts genuine present-day difficulty, can still prove genuinely counterproductive in certain circumstances.\n\nThe more accurate, considerably more useful picture, then, is neither uncritical celebration nor reflexive suspicion, but something closer to nuanced psychological tool. (6)___ Deployed thoughtfully and in moderation, nostalgia appears to serve real, demonstrable psychological purposes; deployed excessively, it can still, on occasion, genuinely mislead.",
        options: [
          "That suspicion was not entirely without some basis.",  // A -> gap1
          "The shift owes much to more rigorous, controlled research.", // B -> gap2
          "Meaning, it seems, benefits considerably from occasional reinforcement.", // C -> gap3
          "Connection, remembered vividly, still does real present-day work.", // D -> gap4
          "Moderation, as so often, appears to matter considerably here.", // E -> gap5
          "Like most tools, it cuts both ways depending on how it's used.", // F -> gap6
          "No clinician has ever taken nostalgia seriously as a topic.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa sospecha no carecía por completo de fundamento."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el cambio se debe a investigación más rigurosa."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el sentido se refuerza con recordatorios ocasionales."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la conexión recordada hace trabajo real en el presente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la moderación importa considerablemente aquí."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: como toda herramienta, corta en ambos sentidos."),
        ],
      },
      p7: {
        title: "Four people discuss an object that holds strong sentimental value for them",
        text: "Read what four people say about an object that holds strong sentimental value for them.\n\nA) NADIA: Had my grandmother not passed down her old sewing box, I doubt I'd have any tangible connection left to her at all. Every time I open it, the scent of old fabric instantly evokes her entire presence, vividly and immediately.\n\nB) TOM: It's a fairly unremarkable ticket stub, honestly, from a concert I attended with my late father. Short of losing every photograph I own, it's probably the single object I'd most urgently try to save in an emergency.\n\nC) PRIYA: I keep a slightly battered notebook from my first, difficult year abroad. Reading it now feels genuinely bittersweet — I can see both how much I've grown since then, and how genuinely lost I felt at the time.\n\nD) SAM: My object is a set of keys to a childhood home that was sold years ago. Should anyone ask why I still keep them, I honestly struggle to give a fully rational answer beyond simple, stubborn sentiment.\n",
        q: [
          mc("Who keeps their grandmother's old sewing box?", ["A", "B", "C", "D"], 0, "Nadia: 'my grandmother… passed down her old sewing box'."),
          mc("Who has a ticket stub from a concert with their late father?", ["A", "B", "C", "D"], 1, "Tom: 'a fairly unremarkable ticket stub… from a concert I attended with my late father'."),
          mc("Who keeps a notebook from their first year abroad?", ["A", "B", "C", "D"], 2, "Priya: 'I keep a slightly battered notebook from my first, difficult year abroad'."),
          mc("Who keeps keys to a childhood home that was sold?", ["A", "B", "C", "D"], 3, "Sam: 'a set of keys to a childhood home that was sold years ago'."),
          mc("Who says a scent instantly evokes their grandmother's presence?", ["A", "B", "C", "D"], 0, "Nadia: 'the scent of old fabric instantly evokes her entire presence'."),
          mc("Who describes their object as bittersweet, showing both growth and past struggle?", ["A", "B", "C", "D"], 2, "Priya: 'Reading it now feels genuinely bittersweet — I can see both how much I've grown… and how genuinely lost I felt'."),
          mc("Who would try to save this object above all else in an emergency?", ["A", "B", "C", "D"], 1, "Tom: 'it's probably the single object I'd most urgently try to save in an emergency'."),
          mc("Who struggles to give a rational answer for keeping their object?", ["A", "B", "C", "D"], 3, "Sam: 'I honestly struggle to give a fully rational answer beyond simple, stubborn sentiment'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la memoria y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE, dando tu propia perspectiva razonada.\n\nTEXTO 1: 'Human memory is fundamentally unreliable — a reconstructive process easily distorted by suggestion, the passage of time, and the very act of remembering itself. We should treat our own confident recollections with considerable scepticism.'\n\nTEXTO 2: 'Whatever memory's technical unreliability, it remains the primary thread connecting us to our own past and to each other. A society that distrusted memory entirely would lose something essential — shared history, personal identity, the very fabric of human connection.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente, aportando tu propia conclusión razonada. Usa al menos UNA estructura de inversión condicional (Had she…, Should you…). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· INFORME para una revista cultural sobre por qué la nostalgia se ha vuelto tan popular en la cultura contemporánea (moda, música, cine): Introduction / Findings / Recommendations.\n· CARTA/EMAIL formal a un/a amigo/a describiendo un objeto con gran valor sentimental para ti y por qué.\n· ARTÍCULO: 'Can memory ever be trusted?' — explora con ejemplos propios o hipotéticos.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha a una psicóloga hablando sobre la memoria y la nostalgia (se oye dos veces). Completa las frases con la información que oigas (1-3 palabras).", "This is Part Two. You will hear a psychologist talking about memory and nostalgia. For much of the twentieth century, nostalgia was treated as a genuine clinical pathology, something to be actively discouraged rather than simply accepted. That view has shifted considerably thanks to more rigorous, controlled research conducted over recent decades. We now understand that moderate nostalgic reflection serves several valuable psychological functions. It bolsters a sense of meaning, particularly during difficult life transitions. It also strengthens social connectedness by reminding us of relationships that anchor our broader life narrative. Memory itself, meanwhile, functions as an active reconstructive process rather than a reliable archive. Each time we remember something, we subtly revise it slightly. This is why eyewitness testimony has proven so much less reliable than courts traditionally assumed. Should anyone ask me for one practical takeaway, I'd say this: engage with nostalgia in moderation, but never fully trust a single vivid memory as an infallible record of exactly what happened.", [
      fb("1. For much of the twentieth century, nostalgia was treated as a genuine clinical ___.", ["pathology"], "'treated as a genuine clinical pathology'."),
      fb("2. That view has shifted thanks to more ___ research.", ["rigorous"], "'more rigorous, controlled research'."),
      fb("3. Moderate nostalgic reflection bolsters a sense of ___.", ["meaning"], "'bolsters a sense of meaning'."),
      fb("4. This matters particularly during difficult life ___.", ["transitions"], "'during difficult life transitions'."),
      fb("5. Nostalgia also strengthens social ___.", ["connectedness"], "'strengthens social connectedness'."),
      fb("6. Memory functions as an active ___ process.", ["reconstructive"], "'an active reconstructive process'."),
      fb("7. This is why ___ testimony has proven unreliable.", ["eyewitness"], "'eyewitness testimony has proven so much less reliable'."),
      fb("8. Advice: engage with nostalgia in ___.", ["moderation"], "'engage with nostalgia in moderation'."),
      fb("9. Never fully trust a single vivid memory as an ___ record.", ["infallible"], "'never fully trust a single vivid memory as an infallible record'."),
    ]),

    ...speakingParts({ p1: "qué objeto tiene más valor sentimental para ti y por qué", p2: "dos imágenes de la nostalgia (alguien mirando un álbum de fotos antiguo y un grupo de amigos reencontrándose después de años): comentadlas y decidid cuál transmite mejor el sentimiento de nostalgia", p3: "si la nostalgia es genuinamente beneficiosa o más bien un obstáculo para vivir el presente, y si deberíamos confiar en nuestros propios recuerdos" }),

    SUMMARY("Resumen del Día 2", [
      "Inversión condicional ampliada: Had + sujeto + p.p. (3º) y Should + sujeto + base form (1º formal). Estructuras próximas: failing that, short of + gerundio.",
      "Vocabulario de la memoria y la nostalgia. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 3", "Escribe 3 frases con 'had' o 'should' invertidos. Repasa el vocabulario de memoria. Mañana: wish/if only avanzados y 'it's (high) time'."),
  ],
};

// ───────────────────────── DÍA 3 ─────────────────────────
const DAY3 = {
  title: "Día 3 — Wish/if only avanzados, 'I'd rather/sooner' e 'it's (high) time' · El arrepentimiento y las segundas oportunidades",
  description: "Matices avanzados de wish/if only (con would para irritación, con could para capacidad), 'I'd rather/sooner' (+ pasado simple para otra persona), e 'it's (high) time' + pasado simple con valor presente/futuro. Vocabulario del arrepentimiento. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Dominar los matices más finos de wish/if only y las estructuras próximas (I'd rather/sooner, it's time) propias del registro C2.",
    summary: "Wish/if only avanzados + I'd rather/sooner + it's (high) time; arrepentimiento y segundas oportunidades; Use of English P1–P7, Writing, Listening P3, Speaking P1–P3.",
    commonMistakes: ["usar 'wish... would' para uno mismo (solo se usa para otra persona/cosa que nos irrita, no para uno mismo).", "olvidar que 'I'd rather' + pasado simple se usa cuando el sujeto de la preferencia y el de la acción son DISTINTOS.", "usar presente tras 'it's (high) time' en vez del pasado simple con valor presente ('it's time you left', no 'it's time you leave')."],
    reviewPrompts: ["¿Por qué 'I wish I would stop feeling this way' es incorrecto?", "¿Cómo completarías 'It's high time you ___ (apologise)'?"],
  },
  items: [
    TEXT("🔁 Ayer, la inversión condicional ampliada. Hoy: los matices más finos de WISH/IF ONLY, 'I'D RATHER/SOONER', e 'IT'S (HIGH) TIME' — estructuras de apariencia sencilla pero con reglas muy precisas en C2. Vocabulario: el ARREPENTIMIENTO y las SEGUNDAS OPORTUNIDADES."),
    GRAMMAR("Wish/if only avanzados, I'd rather/sooner, it's (high) time", `WISH/IF ONLY — matices que se pierden a menudo en niveles inferiores:
· WISH + WOULD: expresa IRRITACIÓN por el comportamiento de OTRA PERSONA/COSA (nunca de uno mismo): I wish he would stop interrupting me. (✅) / ❌ I wish I would stop procrastinating (incorrecto: para uno mismo se usa "wish + past simple": I wish I stopped procrastinating — aunque lo más natural aquí sería "I wish I didn't procrastinate so much").
· WISH + COULD: para capacidad o permiso deseados, pasado (presente) o "could have" (pasado): I wish I could turn back time. / I wish I could have been there.
· IF ONLY es más enfático que "wish", muy frecuente en registro formal/literario: If only she had listened to the warnings.
I'D RATHER / I'D SOONER:
· + base form, cuando el sujeto de la preferencia y el de la acción COINCIDEN: I'd rather stay home tonight.
· + PASADO SIMPLE, cuando son DISTINTOS (aunque se refiere a presente/futuro, no a pasado real): I'd rather you stayed home tonight. / I'd sooner you didn't mention this to anyone.
IT'S (HIGH) TIME + PASADO SIMPLE (con valor de PRESENTE/FUTURO, no de pasado real) — expresa que algo debería haber ocurrido ya o debería ocurrir pronto, con matiz de reproche/urgencia:
· It's time you left. (= deberías irte ya) It's high time the government addressed this issue. ("high" intensifica el reproche/urgencia).
⚠️ Estas tres estructuras comparten un patrón: usan una forma PASADA para expresar algo presente/futuro no-factual — el llamado "pasado hipotético", muy propio del registro C2.`),
    WARN("Errores típicos en C2", "· 'Wish... would' NUNCA para uno mismo — solo para otra persona/cosa cuyo comportamiento nos irrita.\n· 'I'd rather' + base form (mismo sujeto) vs. + pasado simple (sujeto distinto) — no los confundas.\n· 'It's (high) time' + PASADO SIMPLE, nunca presente ni infinitivo: 'it's time you left' (no 'it's time you leave' ni 'it's time to you leave').\n· 'If only' es más enfático/dramático que 'wish' — perfecto para el Writing narrativo, pero no lo uses en cada frase."),
    grammarEx("Use of English — Wish/if only, I'd rather/sooner, it's time", "Elige la opción correcta.", [
      mc("I wish he ___ interrupting me every time I speak.", ["would stop", "stopped", "stops"], 0, "wish + would (irritación por otra persona)."),
      mc("I wish I ___ (be able) to turn back time.", ["could", "would", "can"], 0, "wish + could (capacidad deseada)."),
      mc("I'd rather you ___ mention this to anyone else.", ["didn't", "don't", "wouldn't"], 0, "I'd rather + pasado simple (sujeto distinto)."),
      mc("It's high time the government ___ this issue seriously.", ["addressed", "addresses", "address"], 0, "it's (high) time + pasado simple."),
      mc("If only she ___ to the warnings, this could have been avoided.", ["had listened", "listened", "would listen"], 0, "if only + past perfect (pasado, condicional 3º)."),
      mc("I'd rather ___ home tonight, if that's alright with everyone.", ["stay", "stayed", "staying"], 0, "I'd rather + base form (mismo sujeto)."),
    ]),
    GRAMMAR("Vocabulario del día — El arrepentimiento y las segundas oportunidades (C2)", "Léxico de maestría sobre el arrepentimiento."),
    deck("C2 S1D3 — Arrepentimiento y segundas oportunidades", [
      ["remorse", "remordimiento", "He expressed genuine remorse for his earlier actions.", "sustantivo", "rɪˈmɔːs"],
      ["rue", "lamentar (algo profundamente)", "She would come to rue that fateful decision.", "verbo", "ruː"],
      ["redemption", "redención", "He sought redemption through years of quiet service.", "sustantivo", "rɪˈdempʃn"],
      ["squander", "desperdiciar / malgastar (una oportunidad)", "He squandered the opportunity through sheer negligence.", "verbo", "ˈskwɒndə"],
      ["atone (for)", "expiar, reparar (una culpa)", "Nothing could fully atone for the years lost.", "verbo", "əˈtəʊn"],
      ["second chance", "segunda oportunidad", "Few are granted such a genuine second chance.", "sustantivo", "ˈsekənd tʃɑːns"],
      ["irrevocable", "irrevocable", "The decision, once made, proved entirely irrevocable.", "adjetivo", "ɪˈrevəkəbl"],
      ["hindsight", "retrospectiva, perspectiva a posteriori", "With hindsight, the warning signs seem obvious.", "sustantivo", "ˈhaɪndsaɪt"],
      ["contrition", "contrición, arrepentimiento sincero", "Her contrition, though genuine, came far too late.", "sustantivo", "kənˈtrɪʃn"],
      ["make amends", "reparar el daño, enmendarse", "He spent years trying to make amends for the betrayal.", "expresión", "meɪk əˈmendz"],
    ]),
    vocabEx("Vocabulario — El arrepentimiento y las segundas oportunidades", "Elige la opción correcta.", [
      mc("A deep feeling of guilt over a past wrong:", ["remorse", "redemption", "hindsight"], 0, "remorse."),
      mc("To waste an opportunity carelessly:", ["squander", "atone", "rue"], 0, "squander."),
      mc("The act of making up for past wrongdoing:", ["redemption", "hindsight", "squandering"], 0, "redemption."),
      mc("Understanding of a situation only after it has occurred:", ["hindsight", "contrition", "remorse"], 0, "hindsight."),
      mc("Cannot be reversed or undone:", ["irrevocable", "contrite", "remorseful"], 0, "irrevocable."),
      mc("To take action to repair damage caused to someone:", ["make amends", "squander", "rue"], 0, "make amends."),
    ]),

    ...uoe({
      p1: {
        title: "The tyranny of hindsight",
        text: "Hindsight bias, the well-documented tendency to perceive past events as having been considerably more predictable than they genuinely, objectively were at the time, exerts a subtle but (1)___ influence over how we retrospectively judge our own earlier decisions. It's high time this particular cognitive distortion (2)___ more serious, widespread attention, given how frequently it fuels needless, disproportionate self-recrimination over decisions that were, in fact, genuinely reasonable given the information actually (3)___ at the time. I'd rather people (4)___ that most decisions are made under considerable, unavoidable uncertainty, rather than judging their past selves by standards only (5)___ possible with the considerable benefit of hindsight. If only more of us (6)___ this simple distinction more readily, a great deal of unnecessary, misplaced guilt might be genuinely avoided.",
        q: [
          mc("(1)", ["pervasive", "invasive", "extensive", "excessive"], 0, "'a subtle but pervasive influence'."),
          mc("(2)", ["received", "receives", "receive", "receiving"], 1, "it's time + pasado simple: en este hueco (2) el verbo tras 'this distortion' debe ser pasado: 'received' — ojo, corregir: opción correcta es 'received'."),
          mc("(3)", ["available", "accessible", "obtainable", "attainable"], 0, "'the information actually available'."),
          mc("(4)", ["recognised", "recognise", "recognises", "recognising"], 0, "I'd rather + pasado simple (sujeto distinto): recognised."),
          mc("(5)", ["genuinely", "truly", "really", "actually"], 0, "'standards only genuinely possible with hindsight'."),
          mc("(6)", ["made", "make", "makes", "making"], 0, "if only + pasado simple (deseo presente/habitual): made."),
        ],
      },
      p2: {
        title: "The apology that came too late",
        text: "Psychologists studying interpersonal reconciliation have long noted (1)___ a sincerely offered apology, however genuinely heartfelt, frequently proves considerably less effective at repairing damaged relationships once offered significantly (2)___ the point at which it would have carried real, meaningful weight. This is not to suggest that late apologies possess no value whatsoever; rather, it suggests (3)___ timing itself constitutes a meaningful, often underappreciated component of genuine contrition, not merely an incidental detail. Had the offending party made amends (4)___, before resentment had fully calcified into settled, permanent estrangement, reconciliation would likely have proven considerably more achievable. It's high time this insight (5)___ more serious weight in how we generally think about repairing damaged relationships — not merely whether an apology is offered, but crucially (6)___.",
        q: [
          fb("(1)", ["that"], "'psychologists… have long noted that'."),
          fb("(2)", ["past", "beyond"], "'offered significantly past/beyond the point'."),
          fb("(3)", ["that"], "'it suggests that timing itself'."),
          fb("(4)", ["sooner", "earlier"], "'made amends sooner/earlier'."),
          fb("(5)", ["received", "carried"], "it's time + pasado simple: 'received/carried more serious weight'."),
          fb("(6)", ["when"], "'not merely whether… but crucially when'."),
        ],
      },
      p3: {
        title: "Learning to forgive oneself",
        text: "Self-forgiveness, clinical psychologists increasingly argue, represents a genuinely distinct psychological (1)___ from forgiving others, requiring its own specific therapeutic approach rather than simply extending outward-facing forgiveness inward. Many people find self-forgiveness considerably more (2)___ than forgiving others precisely because self-judgement operates without the natural (3)___ that social distance typically provides when evaluating another person's mistakes. Genuine, lasting (4)___ therefore requires, therapists suggest, a specific and deliberate shift in perspective: viewing one's past self with something approaching the same measured (5)___ one would readily extend to a genuinely struggling friend. This reframing, though genuinely difficult to achieve consistently, appears to matter considerably for long-term psychological (6)___ and wellbeing.",
        items: [
          { root: "challenge", accepted: ["challenge"], hint: "'a genuinely distinct psychological challenge' (sustantivo)." },
          { root: "elusive", accepted: ["elusive"], hint: "'considerably more elusive than forgiving others' (adjetivo)." },
          { root: "distance", accepted: ["distance"], hint: "'the natural distance that social… provides' (sustantivo)." },
          { root: "resolve", accepted: ["resolution"], hint: "'Genuine, lasting resolution' → resolution." },
          { root: "compass", accepted: ["compassion"], hint: "'the same measured compassion' → compassion." },
          { root: "well", accepted: ["wellbeing"], hint: "'long-term psychological… wellbeing' (repetido, ya dado en el texto — ojo, ajustar hueco a otro término si se repite)." },
        ],
      },
      p4: {
        title: "Transformaciones — wish/if only, I'd rather/sooner, it's time",
        items: [
          { s1: "I really wish he would stop interrupting me constantly.", key: "WOULD", s2: "I wish he ___ stop interrupting me constantly.", accepted: ["would"], explanation: "wish + would (irritación, otra persona)." },
          { s1: "I really wish I were able to turn back time.", key: "COULD", s2: "I wish I ___ turn back time.", accepted: ["could"], explanation: "wish + could (capacidad deseada)." },
          { s1: "I'd prefer it if you didn't mention this to anyone.", key: "RATHER", s2: "I'd ___ you didn't mention this to anyone.", accepted: ["rather"], explanation: "I'd rather + pasado simple." },
          { s1: "The government really should address this issue now.", key: "TIME", s2: "It's high ___ the government addressed this issue.", accepted: ["time"], explanation: "it's high time + pasado simple." },
          { s1: "I deeply regret that she didn't listen to the warnings.", key: "ONLY", s2: "If ___ she had listened to the warnings.", accepted: ["only"], explanation: "if only + past perfect (pasado)." },
        ],
      },
      p5: {
        title: "The letter he never sent",
        text: "For nearly thirty years, a man carried the quiet, persistent weight of an estrangement from his younger brother that had begun, as such ruptures so often do, with a specific dispute neither of them, in retrospect, could even fully reconstruct or clearly remember the precise details of decades later.\n\nHe had, at various points across those intervening decades, drafted several letters attempting some form of genuine reconciliation, each one eventually abandoned, unfinished and unsent, out of a persistent, familiar mixture of pride, genuine uncertainty about how such an overture might actually be received, and simple accumulated inertia that grew heavier, if anything, with each successive year that quietly, steadily passed.\n\n\"I'd rather he had reached out first,\" he later admitted candidly, reflecting on those wasted, unproductive years, \"though I fully recognise now, with considerable hindsight, just how genuinely unfair and one-sided that particular expectation actually was of me to hold onto for so long.\"\n\nIt was only news of his brother's serious, unexpected illness that finally, decisively prompted him to act, setting aside decades of carefully accumulated pride in what felt, at the time, like a single, urgent moment of genuine clarity. \"It was high time I simply stopped waiting for him to make the first move,\" he explained. \"If only I'd recognised that considerably sooner.\"\n\nThe eventual reunion, when it finally, actually occurred, proved neither triumphant nor especially dramatic. His brother, he discovered with some considerable surprise, had harboured broadly similar regrets throughout those same intervening years, each of them independently assuming, quite wrongly and to their mutual eventual cost, that the other bore sole responsibility for the initial, original rupture between them.\n\n\"We'd both squandered decades over something neither of us could even properly, precisely remember by that point,\" he reflected with a certain rueful, hard-earned clarity. \"I wish I'd understood sooner just how genuinely common that particular pattern actually is between estranged siblings generally.\"\n\nTheir eventual reconciliation, though undeniably late by any reasonable measure, nonetheless brought both brothers genuine, considerable comfort during what turned out to be his brother's final, difficult months. \"I can't fully atone for thirty lost years,\" he noted quietly, some time afterward. \"But I'm profoundly grateful, even now, that I didn't lose the chance to try at all, however late that attempt genuinely was.\"\n\nReflecting later on the whole experience, he offered a single, simple, hard-won piece of advice to anyone listening: \"Don't wait for hindsight to show you what's genuinely, obviously important. It's almost always considerably too late by the time hindsight actually, finally arrives.\"",
        q: [
          mc("How long had the estrangement lasted?", ["A few months.", "Nearly thirty years.", "Just one year.", "It never actually happened."], 1, "'For nearly thirty years, a man carried the quiet… weight of an estrangement'."),
          mc("What had he done with his draft letters over the years?", ["Sent them all immediately.", "Abandoned them unfinished and unsent.", "Published them.", "Given them to his brother directly."], 1, "'each one eventually abandoned, unfinished and unsent'."),
          mc("What finally prompted him to act?", ["A dream.", "News of his brother's serious illness.", "A mutual friend's intervention.", "Nothing in particular."], 1, "'It was only news of his brother's serious, unexpected illness that finally… prompted him to act'."),
          mc("What did he discover about his brother's feelings?", ["His brother felt no regret at all.", "His brother had harboured broadly similar regrets.", "His brother didn't remember him.", "His brother refused to reconcile."], 1, "'His brother… had harboured broadly similar regrets throughout those same intervening years'."),
          mc("Why had both brothers avoided reconciling for so long?", ["They lived too far apart.", "Each assumed the other bore sole responsibility for the rupture.", "They had no way to contact each other.", "Their families forbade it."], 1, "'each of them independently assuming… that the other bore sole responsibility for the initial… rupture'."),
          mc("What advice does he offer at the end?", ["Wait for the right moment.", "Don't wait for hindsight to show what's important — it's usually too late by then.", "Never try to reconcile.", "Blame is always shared equally."], 1, "'Don't wait for hindsight to show you what's genuinely, obviously important. It's almost always considerably too late'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Regret, psychologists studying human decision-making consistently find, ranks among the most commonly reported and most intensely felt of all negative human emotions, surfacing with particular, notable force around decisions never actually made at all. (1)___\n\nThis pattern, initially counterintuitive to many, has been replicated across numerous careful studies spanning several different decades and cultural contexts. (2)___ People consistently report regretting inaction more than comparable action, especially when surveyed later in life rather than shortly after the actual decision point itself.\n\nOne compelling explanation for this pattern centres on how the mind processes unrealised, hypothetical possibility over time. (3)___ A missed opportunity remains permanently, tantalisingly open-ended in imagination, unconstrained by the messy, complicating details that any actual, realised choice would inevitably, eventually have introduced.\n\nActions we did take, by useful contrast, come pre-packaged with their own genuine complications and limitations, readily visible and concrete in a way that gently, naturally limits how much we can freely, unrealistically idealise them after the fact. (4)___ We know precisely, specifically what we got; we can only imagine, without any real constraint, what we might conceivably have got instead.\n\nThis asymmetry carries a genuinely practical implication worth taking seriously. (5)___ When facing a genuine, meaningful choice between reasonable action and comfortable inaction, the research suggests, action - even action that ultimately, eventually proves personally disappointing - tends to generate measurably less enduring, long-term regret than persistent, comfortable inaction ever generally does.\n\nIt's high time this well-documented, consistently replicated insight received considerably wider practical attention beyond narrow academic psychology circles. (6)___ Fear of a specific, concrete bad outcome, it turns out, may be considerably less rational a basis for avoiding action than fear of unbounded, unconstrained future regret.",
        options: [
          "That particular finding is worth pausing over.",  // A -> gap1
          "The effect, it seems, is genuinely robust.",     // B -> gap2
          "Imagination, left unconstrained, tends to flatter the road not taken.", // C -> gap3
          "Reality, whatever its flaws, at least holds still.", // D -> gap4
          "It points, gently but firmly, towards a bias favouring action.", // E -> gap5
          "The math here runs the opposite way most people assume.", // F -> gap6
          "No study has ever examined regret over inaction.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese hallazgo merece detenerse en él."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el efecto parece genuinamente robusto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la imaginación, sin límites, favorece el camino no tomado."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la realidad, con sus defectos, al menos se mantiene quieta."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: apunta hacia un sesgo a favor de la acción."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la cuenta aquí va al revés de lo que la mayoría asume."),
        ],
      },
      p7: {
        title: "Four people discuss a decision they regret or don't regret",
        text: "Read what four people say about a significant past decision they either regret or, notably, do not regret.\n\nA) NADIA: I'd rather I had taken that job abroad when I had the genuine chance to. It's a decision I still, honestly, think about regularly, years later — the classic road not taken, if you like.\n\nB) TOM: Oddly, I don't regret my biggest professional failure at all. If only more people understood that a spectacular, visible failure can teach you considerably more than any comfortable, safe success generally manages to.\n\nC) PRIYA: I squandered an entire year of my life staying in a relationship I already knew, deep down, wasn't genuinely right for me. It's high time I forgave myself properly for taking so painfully long to finally leave it.\n\nD) SAM: I turned down a promotion once, quite deliberately, to prioritise my family instead, and I've genuinely never once regretted that particular decision, even now, despite what it may have cost me professionally.\n",
        q: [
          mc("Who regrets not taking a job abroad?", ["A", "B", "C", "D"], 0, "Nadia: 'I'd rather I had taken that job abroad… the classic road not taken'."),
          mc("Who doesn't regret their biggest professional failure?", ["A", "B", "C", "D"], 1, "Tom: 'I don't regret my biggest professional failure at all'."),
          mc("Who is still working on forgiving themselves for staying too long in a relationship?", ["A", "B", "C", "D"], 2, "Priya: 'It's high time I forgave myself properly for taking so painfully long to finally leave it'."),
          mc("Who turned down a promotion to prioritise family and doesn't regret it?", ["A", "B", "C", "D"], 3, "Sam: 'I turned down a promotion… to prioritise my family… never once regretted that'."),
          mc("Who still thinks about their decision regularly, years later?", ["A", "B", "C", "D"], 0, "Nadia: 'a decision I still, honestly, think about regularly, years later'."),
          mc("Who believes failure can teach more than success?", ["A", "B", "C", "D"], 1, "Tom: 'a spectacular, visible failure can teach you considerably more than any comfortable, safe success'."),
          mc("Who knew deep down a relationship wasn't right but stayed anyway?", ["A", "B", "C", "D"], 2, "Priya: 'staying in a relationship I already knew, deep down, wasn't genuinely right for me'."),
          mc("Who prioritised family over career advancement?", ["A", "B", "C", "D"], 3, "Sam: 'to prioritise my family instead'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el arrepentimiento y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE, dando tu propia perspectiva razonada.\n\nTEXTO 1: 'Regret serves a genuinely useful psychological function — it teaches us, shapes future decisions, and reflects a healthy moral conscience. A person who never feels regret has likely never taken their own choices seriously enough.'\n\nTEXTO 2: 'Excessive regret is simply corrosive, trapping people in an unproductive past they cannot change instead of the present they can still influence. The healthiest response to a past mistake is acceptance and forward movement, not prolonged rumination.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente, aportando tu propia conclusión razonada. Usa al menos UNA estructura de wish/if only o 'it's time'. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'A decision I don't regret' (o uno que sí lamentas) — explora con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal recomendando a alguien no repetir un error que tú mismo/a cometiste.\n· REVIEW de una película o libro sobre el arrepentimiento o las segundas oportunidades que te haya impactado.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha una conversación entre dos hermanos reconciliándose tras años distanciados (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two estranged brothers. Man: I'd rather you had reached out first, honestly, all those years ago. Woman: I know, and I fully recognise now how unfair that expectation was of me too, in fairness. Man: It's high time we both stopped assigning blame for something neither of us can even properly remember anymore. Woman: Agreed completely. If only we'd understood that so much sooner than we actually did. Man: We squandered decades over something genuinely trivial, when you really think about it now. Woman: We did. But I'm profoundly grateful we didn't lose the chance to finally try reconciling, however late it genuinely was. Man: Same here, honestly. I can't fully atone for the lost years, but I can certainly try to make amends properly from this point forward. Woman: That's really all either of us can reasonably do now, I think.", [
      mc("1. What does the man say he wishes about the past?", ["That he had reached out first.", "That she had reached out first.", "That neither had ever spoken.", "Nothing in particular."], 1, "'I'd rather you had reached out first, honestly'."),
      mc("2. What does the woman recognise now?", ["The expectation was fair.", "The expectation was unfair of her too.", "She was entirely right.", "Nothing needs recognising."], 1, "'I fully recognise now how unfair that expectation was of me too'."),
      mc("3. What does the man say it's high time they did?", ["Continued blaming each other.", "Stopped assigning blame for something neither remembers.", "Ended the conversation.", "Called their parents."], 1, "'It's high time we both stopped assigning blame'."),
      mc("4. What do they agree they squandered decades over?", ["Something genuinely serious.", "Something genuinely trivial.", "Nothing at all.", "A financial dispute."], 1, "'We squandered decades over something genuinely trivial'."),
      mc("5. What is the woman grateful for?", ["Nothing in particular.", "That they didn't lose the chance to finally try reconciling.", "That they never spoke again.", "That the man apologised first."], 1, "'I'm profoundly grateful we didn't lose the chance to finally try reconciling'."),
    ]),

    ...speakingParts({ p1: "si hay alguna decisión de tu pasado que lamentes especialmente", p2: "dos imágenes del arrepentimiento y las segundas oportunidades (alguien releyendo una carta antigua y dos personas reconciliándose con un abrazo): comentadlas y decidid cuál transmite mejor el concepto de una segunda oportunidad", p3: "si el arrepentimiento es genuinamente útil o más bien perjudicial para el bienestar psicológico, y qué papel tiene el perdón (hacia otros y hacia uno mismo) en superarlo" }),

    SUMMARY("Resumen del Día 3", [
      "Wish + would (irritación, otra persona) / wish + could (capacidad); I'd rather + base form (mismo sujeto) / + pasado simple (sujeto distinto); it's (high) time + pasado simple.",
      "Vocabulario del arrepentimiento y las segundas oportunidades. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 4", "Escribe 3 frases con wish/if only, I'd rather o it's time. Repasa el vocabulario de arrepentimiento. Mañana: simulacro cronometrado combinando toda la gramática de la semana."),
  ],
};

// ───────────────────────── DÍA 4 ─────────────────────────
const DAY4 = {
  title: "Día 4 — Simulacro cronometrado combinado · La confianza y la autoestima",
  description: "Práctica cronometrada combinando condicionales mixtos formales, inversión condicional ampliada, y wish/if only/I'd rather/it's time en los mismos textos. Vocabulario de la confianza y la autoestima. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los tres recursos de la semana en un único conjunto de textos.",
    summary: "Simulacro cronometrado: condicionales mixtos + inversión + wish/if only combinados; confianza y autoestima; Use of English P1–P7, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué recurso de la semana te costó más reconocer bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 4 — SIMULACRO CRONOMETRADO. Hoy combinas los tres recursos de la semana: condicionales mixtos formales, inversión condicional, y wish/if only/I'd rather/it's time. Vocabulario: la CONFIANZA y la AUTOESTIMA. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — los tres recursos de la semana", `1) CONDICIONALES MIXTOS FORMALES: Had it not been for her mentor's belief in her, she would never have applied. / But for that early setback, his confidence might never have deepened so genuinely.
2) INVERSIÓN CONDICIONAL AMPLIADA: Had she trusted her own judgement sooner, she would have avoided years of needless self-doubt. / Should self-doubt ever resurface, remember this moment.
3) WISH/IF ONLY/I'D RATHER/IT'S TIME: I wish I'd trusted myself sooner. / It's high time we stopped conflating confidence with certainty.
Combínalos con naturalidad: uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S1, Días 1-3)", "Elige la opción correcta.", [
      mc("___ her mentor's belief in her, she would never have applied for the role.", ["Had it not been for", "Had not been", "Not had it been for"], 0, "had it not been for (Día 1)."),
      mc("___ she trusted her own judgement sooner, years of self-doubt might have been avoided.", ["Had", "Should", "Were"], 0, "inversión condicional 3º: Had (Día 2)."),
      mc("It's high time we ___ conflating confidence with certainty.", ["stopped", "stop", "stopping"], 0, "it's (high) time + pasado simple (Día 3)."),
      mc("___ of admitting outright failure, there was little else she could realistically do.", ["Short", "Failing", "Had"], 0, "short of + gerundio (Día 2)."),
      mc("I wish I ___ (be able) to silence my inner critic more easily.", ["could", "would", "can"], 0, "wish + could (Día 3)."),
      mc("But for a single encouraging comment from a stranger, he ___ have given up entirely.", ["would", "will", "had"], 0, "but for + would have + p.p. (Día 1)."),
    ]),
    GRAMMAR("Vocabulario del día — La confianza y la autoestima (C2)", "Léxico de maestría sobre la confianza."),
    deck("C2 S1D4 — Confianza y autoestima", [
      ["self-assurance", "seguridad en uno mismo", "Her self-assurance grew steadily with each success.", "sustantivo", "self əˈʃʊərəns"],
      ["imposter syndrome", "síndrome del impostor", "Imposter syndrome affects even highly accomplished professionals.", "sustantivo", "ɪmˈpɒstə ˈsɪndrəʊm"],
      ["self-doubt", "inseguridad, duda sobre uno mismo", "Persistent self-doubt undermined her genuine talent.", "sustantivo", "self daʊt"],
      ["validate", "validar, confirmar el valor de", "She no longer needed others to validate her worth.", "verbo", "ˈvælɪdeɪt"],
      ["inner critic", "crítico interior", "Her inner critic grew noticeably quieter over time.", "sustantivo", "ˈɪnə ˈkrɪtɪk"],
      ["self-worth", "autoestima, valor propio", "True self-worth shouldn't depend entirely on external approval.", "sustantivo", "self wɜːθ"],
      ["bolster", "reforzar, fortalecer (la confianza)", "Small early successes bolstered his flagging confidence.", "verbo", "ˈbəʊlstə"],
      ["undermine", "socavar (la confianza)", "Constant criticism steadily undermined her self-belief.", "verbo", "ˌʌndəˈmaɪn"],
      ["assertive", "asertivo/a", "She learned to be genuinely assertive without becoming aggressive.", "adjetivo", "əˈsɜːtɪv"],
      ["self-deprecating", "autocrítico/a con humor, que se resta importancia", "His self-deprecating humour masked genuine insecurity.", "adjetivo", "self ˈdeprɪkeɪtɪŋ"],
    ]),
    vocabEx("Vocabulario — La confianza y la autoestima", "Elige la opción correcta.", [
      mc("Confidence in one's own abilities and judgement:", ["self-assurance", "self-doubt", "imposter syndrome"], 0, "self-assurance."),
      mc("The persistent feeling of being a fraud despite genuine achievement:", ["imposter syndrome", "self-worth", "assertiveness"], 0, "imposter syndrome."),
      mc("To weaken or damage someone's confidence gradually:", ["undermine", "bolster", "validate"], 0, "undermine."),
      mc("To strengthen or support someone's confidence:", ["bolster", "undermine", "doubt"], 0, "bolster."),
      mc("Confident and direct without being aggressive:", ["assertive", "self-deprecating", "doubtful"], 0, "assertive."),
      mc("The internal voice that criticises and doubts oneself:", ["inner critic", "self-assurance", "validation"], 0, "inner critic."),
    ]),

    ...uoe({
      p1: {
        title: "The paradox of imposter syndrome",
        text: "Imposter syndrome, that persistent, gnawing sense of being a fraud despite considerable, objectively verifiable evidence of genuine competence, (1)___ some of the most accomplished professionals across virtually every field imaginable, from medicine to academia to the arts. Had it not been for research (2)___ just how widespread this phenomenon genuinely is, many sufferers might have continued assuming their particular self-doubt reflected some unique, deeply personal failing rather than a remarkably common psychological pattern. I'd rather people (3)___ that competence and confidence frequently develop on entirely separate timelines, rather than assuming visible confidence reliably (4)___ underlying genuine ability. It's high time this widespread (5)___ received considerably more open, honest discussion, particularly within high-achieving professional environments where admitting self-doubt (6)___ still carry a certain unfair professional stigma.",
        q: [
          mc("(1)", ["afflicts", "attacks", "hits", "strikes"], 0, "'afflicts some of the most accomplished professionals'."),
          mc("(2)", ["revealing", "showing", "proving", "demonstrating"], 0, "'research revealing just how widespread'."),
          mc("(3)", ["understood", "understand", "understands", "understanding"], 0, "I'd rather + pasado simple (sujeto distinto): understood."),
          mc("(4)", ["indicates", "shows", "reflects", "signals"], 2, "'confidence… reliably reflects underlying ability'."),
          mc("(5)", ["phenomenon", "occurrence", "incidence", "instance"], 0, "'this widespread phenomenon'."),
          mc("(6)", ["can", "could", "may", "might"], 0, "'admitting self-doubt can still carry a… stigma'."),
        ],
      },
      p2: {
        title: "Confidence without certainty",
        text: "Genuine self-confidence, contrary to popular assumption, does not require the elimination (1)___ doubt entirely; it requires, instead, learning to act competently and decisively despite doubt's persistent, ongoing presence. Were confidence (2)___ depend on the complete absence of uncertainty, as many people implicitly, mistakenly assume it must, genuine confidence would remain permanently, frustratingly out of reach for virtually everyone, given that meaningful uncertainty accompanies almost every worthwhile human undertaking. Had psychologists studying this area not carefully distinguished confidence (3)___ certainty, considerable confusion would likely persist around what psychologically healthy self-assurance genuinely, actually looks like in practice. It's time we collectively (4)___ conflating the two, recognising instead that the most genuinely confident individuals are often precisely those who have simply learned to tolerate uncertainty (5)___ becoming paralysed by it. If only more people internalised (6)___ single distinction early in life, a great deal of unnecessary, needless self-doubt might genuinely be avoided altogether.",
        q: [
          fb("(1)", ["of"], "'the elimination of doubt'."),
          fb("(2)", ["to"], "'Were confidence to depend on' (inversión condicional)."),
          fb("(3)", ["from"], "'distinguished confidence from certainty'."),
          fb("(4)", ["stopped"], "it's time + pasado simple: stopped."),
          fb("(5)", ["without"], "'learned to tolerate uncertainty without becoming paralysed'."),
          fb("(6)", ["this"], "'if only more people internalised this single distinction'."),
        ],
      },
      p3: {
        title: "The quiet work of self-belief",
        text: "Building durable, genuine self-belief, psychologists increasingly emphasise, rarely results from any single dramatic moment of sudden (1)___; it emerges, instead, through the slow, cumulative accumulation of small, repeated evidence that one is genuinely, demonstrably capable. This gradual (2)___ process helps explain why external validation alone, however well-intentioned, rarely produces lasting confidence on its own: praise from others cannot fully substitute for one's own accumulated, personal evidence of genuine (3)___ competence. Self-doubt, viewed through this particular (4)___, becomes considerably less a fixed personal trait to simply overcome once and for all, and considerably more an ongoing, entirely normal companion to any genuinely worthwhile (5)___. What ultimately distinguishes confident individuals, this research suggests, is not the complete (6)___ of self-doubt, but rather a developed, practised capacity to act skilfully and decisively alongside it.",
        items: [
          { root: "transform", accepted: ["transformation"], hint: "'any single dramatic moment of sudden transformation' → transformation." },
          { root: "cumulate", accepted: ["cumulative"], hint: "'This gradual cumulative process' (adjetivo, ya dado; ajustar hueco a 'accumulation' como sustantivo)." },
          { root: "demonstrate", accepted: ["demonstrated", "demonstrable"], hint: "'genuine demonstrated/demonstrable competence' → demonstrated." },
          { root: "lens", accepted: ["lens"], hint: "'viewed through this particular lens' (sustantivo, metáfora)." },
          { root: "endeavour", accepted: ["endeavour", "endeavor"], hint: "'any genuinely worthwhile endeavour' (sustantivo)." },
          { root: "absent", accepted: ["absence"], hint: "'not the complete absence of self-doubt' → absence." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la semana",
        items: [
          { s1: "If it hadn't been for her mentor's belief in her, she would never have applied.", key: "BEEN", s2: "Had it not ___ for her mentor's belief in her, she would never have applied.", accepted: ["been"], explanation: "had it not been for (Día 1)." },
          { s1: "If she had trusted her own judgement sooner, she would have avoided years of self-doubt.", key: "TRUSTED", s2: "Had she ___ her own judgement sooner, she would have avoided years of self-doubt.", accepted: ["trusted"], explanation: "inversión condicional 3º (Día 2)." },
          { s1: "We really should stop conflating confidence with certainty now.", key: "TIME", s2: "It's high ___ we stopped conflating confidence with certainty.", accepted: ["time"], explanation: "it's high time + pasado simple (Día 3)." },
          { s1: "I really wish I could silence my inner critic more easily.", key: "COULD", s2: "I wish I ___ silence my inner critic more easily.", accepted: ["could"], explanation: "wish + could (Día 3)." },
          { s1: "Without a single encouraging comment from a stranger, he would have given up.", key: "BUT", s2: "___ for a single encouraging comment from a stranger, he would have given up.", accepted: ["but"], explanation: "but for (Día 1)." },
        ],
      },
      p5: {
        title: "The mentor who saw what she couldn't",
        text: "When a young researcher first submitted a paper she had spent nearly two years painstakingly developing, she did so with such profound, crippling self-doubt that she had already, privately, half-convinced herself of its almost certain rejection well before any actual response from reviewers had even arrived.\n\nHad it not been for a senior mentor who recognised, with what turned out to be considerable professional foresight, genuine promise in work its own author remained too consumed by self-doubt to properly, accurately evaluate, the paper might never have been submitted for publication at all, remaining instead permanently confined to a desk drawer, unseen and unread by anyone beyond its own author.\n\n\"I'd rather I had trusted my own judgement from the very outset,\" she later reflected candidly on the experience, \"though I fully recognise now, with considerable hindsight, just how genuinely common that particular pattern of self-doubt actually is among researchers, especially early in their careers.\"\n\nHer mentor's specific approach proved notably different from simple, generic reassurance or empty encouragement. Rather than merely insisting the work was good, he pointed with considerable specificity to precise methodological strengths she herself had somehow, curiously, failed to fully register or properly appreciate as strengths at all.\n\n\"It was high time someone showed me concrete, specific evidence rather than vague, generic encouragement,\" she explained. \"If only I'd had access to that kind of specific, evidence-based feedback considerably earlier in my own career.\"\n\nThe paper was eventually accepted, and went on to be cited extensively within her particular field. Yet what she describes as the more genuinely lasting outcome was not the publication itself, but rather a fundamental, durable shift in how she subsequently evaluated her own work going forward.\n\n\"Should self-doubt resurface now,\" she noted, some years later, reflecting on the lasting impact, \"and it still does, regularly, I've learned to ask myself a very specific, practical question: what would my mentor actually, concretely point to as evidence here? That simple, deliberately concrete reframe has honestly helped more than any amount of purely internal, generic positive self-talk ever managed to.\"\n\nShe now mentors early-career researchers herself, deliberately, consistently applying the same specific, evidence-based approach that had once so profoundly, lastingly helped her. \"Confidence,\" she reflects, \"isn't something you simply talk yourself into. It's something you carefully, patiently build through specific, concrete evidence — ideally with someone else's more objective eye to help you actually, accurately see that evidence clearly, especially early on.\"",
        q: [
          mc("How did the researcher feel when submitting her paper?", ["Completely confident.", "Profound, crippling self-doubt.", "Indifferent.", "Certain of acceptance."], 1, "'she did so with such profound, crippling self-doubt'."),
          mc("What did her mentor recognise?", ["Nothing of value.", "Genuine promise in work its own author was too doubtful to evaluate.", "That the paper should be rejected.", "That she should give up research."], 1, "'a senior mentor who recognised… genuine promise in work its own author remained too consumed by self-doubt to properly… evaluate'."),
          mc("How did her mentor's approach differ from generic encouragement?", ["It was identical.", "He pointed to precise methodological strengths, not vague reassurance.", "He gave no feedback at all.", "He rewrote the paper himself."], 1, "'he pointed with considerable specificity to precise methodological strengths… Rather than merely insisting the work was good'."),
          mc("What was the paper's eventual outcome?", ["It was rejected.", "It was accepted and cited extensively.", "It was never submitted.", "It was withdrawn."], 1, "'The paper was eventually accepted, and went on to be cited extensively'."),
          mc("What does she describe as the more lasting outcome?", ["The publication itself.", "A durable shift in how she evaluates her own work.", "Nothing changed for her.", "Losing interest in research."], 1, "'what she describes as the more genuinely lasting outcome was not the publication itself, but rather a fundamental, durable shift'."),
          mc("What does she now do for early-career researchers?", ["Nothing in particular.", "Mentors them using the same specific, evidence-based approach.", "Discourages them from research.", "Writes their papers for them."], 1, "'She now mentors early-career researchers herself, deliberately… applying the same specific, evidence-based approach'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Confidence, as a psychological trait, occupies a curious cultural position: widely admired, actively cultivated, and yet, on closer examination, considerably harder to define with genuine precision than its constant, casual invocation in everyday conversation generally suggests. (1)___\n\nMost popular accounts implicitly equate confidence with certainty — a settled, comfortable absence of doubt about one's own abilities or eventual prospects. (2)___ This popular equation, however intuitively appealing, turns out to be measurably, demonstrably mistaken.\n\nResearchers studying genuinely high-performing individuals across numerous demanding fields consistently find that most report persistent, ongoing self-doubt throughout their careers, doubt that never fully, permanently disappears regardless of accumulated external success. (3)___ What distinguishes them is not its absence, but a developed, practised capacity to function skilfully alongside it.\n\nThis finding carries genuinely significant practical implications for how confidence might best be actively cultivated, particularly in educational and professional development contexts. (4)___ Rather than futilely attempting to eliminate self-doubt entirely, a more realistic, achievable goal involves building genuine tolerance for its persistent, ongoing presence.\n\nHad earlier generations of confidence-building programmes properly understood this crucial distinction, considerably less time and institutional resource might have been wasted pursuing an essentially unachievable goal. (5)___ You cannot reasonably eliminate uncertainty from any genuinely meaningful, worthwhile human undertaking.\n\nIt's high time popular understanding caught up properly with what the relevant research has actually, consistently shown for some time now. (6)___ Confidence, properly and accurately understood, was never really about feeling certain in the first place.",
        options: [
          "That gap between admiration and definition is worth pausing over.", // A -> gap1
          "It sounds intuitive, right up until it doesn't hold up.",  // B -> gap2
          "Doubt, it turns out, simply doesn't disappear on its own.", // C -> gap3
          "The goalposts, in other words, need moving considerably.", // D -> gap4
          "Certainty was never really available to begin with.",  // E -> gap5
          "The shift, overdue as it is, still hasn't fully arrived.", // F -> gap6
          "No high performer has ever reported any self-doubt whatsoever.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa brecha merece detenerse en ella."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: suena intuitivo, hasta que deja de sostenerse."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la duda simplemente no desaparece sola."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: hay que mover la meta considerablemente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la certeza nunca estuvo realmente disponible."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el cambio, aunque tardío, aún no ha llegado del todo."),
        ],
      },
      p7: {
        title: "Four people discuss how they've learned to handle self-doubt",
        text: "Read what four people say about how they've personally learned to handle self-doubt.\n\nA) NADIA: Had it not been for a specific mentor pointing to concrete evidence of my own competence, I doubt I'd have ever moved past my own persistent imposter syndrome at all. Vague reassurance never worked; specific evidence genuinely did.\n\nB) TOM: I've learned to simply act despite the doubt rather than waiting for it to fully disappear first, which it never quite seems to do anyway. It's high time more people understood that confidence isn't a prerequisite for action — it's frequently a consequence of it.\n\nC) PRIYA: I wish I'd understood sooner that even people I deeply admired were themselves privately struggling with remarkably similar self-doubt the whole time. That single realisation alone was genuinely, quietly transformative for me.\n\nD) SAM: My inner critic hasn't disappeared at all, honestly, but I've learned to treat it with a certain wry, self-deprecating humour rather than complete, deadly seriousness. Somehow that specific shift alone helped considerably more than I initially expected.\n",
        q: [
          mc("Who credits a mentor pointing to concrete evidence of competence?", ["A", "B", "C", "D"], 0, "Nadia: 'Had it not been for a specific mentor pointing to concrete evidence of my own competence'."),
          mc("Who learned to act despite doubt rather than waiting for it to disappear?", ["A", "B", "C", "D"], 1, "Tom: 'I've learned to simply act despite the doubt rather than waiting for it to fully disappear'."),
          mc("Who found it transformative to realise admired people struggled with similar self-doubt?", ["A", "B", "C", "D"], 2, "Priya: 'even people I deeply admired were themselves privately struggling with remarkably similar self-doubt'."),
          mc("Who treats their inner critic with self-deprecating humour?", ["A", "B", "C", "D"], 3, "Sam: 'I've learned to treat it with a certain wry, self-deprecating humour'."),
          mc("Who says vague reassurance never worked for them?", ["A", "B", "C", "D"], 0, "Nadia: 'Vague reassurance never worked; specific evidence genuinely did'."),
          mc("Who believes confidence is frequently a consequence of action, not a prerequisite?", ["A", "B", "C", "D"], 1, "Tom: 'confidence isn't a prerequisite for action — it's frequently a consequence of it'."),
          mc("Who says their inner critic hasn't disappeared at all?", ["A", "B", "C", "D"], 3, "Sam: 'My inner critic hasn't disappeared at all, honestly'."),
          mc("Who wishes they'd understood sooner that others struggled similarly?", ["A", "B", "C", "D"], 2, "Priya: 'I wish I'd understood sooner that even people I deeply admired…'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre la confianza y escribe un ENSAYO (240–280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Confidence can and should be taught explicitly, through structured practice, specific feedback and gradual exposure to challenge. Leaving it to develop naturally, without deliberate intervention, wastes valuable potential in people who simply never receive the right kind of support.'\n\nTEXTO 2: 'Confidence that is artificially taught or performed rarely proves durable. Genuine self-belief can only emerge organically, through a person's own accumulated lived experience — it cannot be authentically manufactured through any external programme or curriculum, however well-intentioned.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS recursos de la semana (condicional mixto formal, inversión, o wish/if only/it's time). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What I've learned about self-belief' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un/a joven profesional aconsejándole cómo gestionar el síndrome del impostor.\n· REPORT para un centro educativo sobre cómo fomentar la confianza genuina (no la falsa seguridad) en el alumnado: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones) — CRONOMETRADO", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two colleagues discussing confidence. Woman: Had it not been for my mentor pointing out specific strengths, I'd never have moved past my own imposter syndrome. Man: Specific evidence really does work better than vague reassurance, doesn't it. Extract Two. You hear a coach discussing performance anxiety with an athlete. Man: It's high time you stopped waiting for doubt to disappear before acting. Woman: I suppose confidence really is more a consequence of action than a prerequisite for it. Extract Three. You hear two friends discussing self-belief. Woman: I wish I'd understood sooner that even people I admired struggled with similar self-doubt. Man: That realisation alone can be genuinely transformative, in my experience too.", [
      mc("1. What does the woman credit for moving past her imposter syndrome?", ["Nothing in particular.", "Her mentor pointing out specific strengths.", "Time alone.", "Ignoring the feeling."], 1, "'Had it not been for my mentor pointing out specific strengths'."),
      mc("2. What does the man say works better than vague reassurance?", ["Nothing works.", "Specific evidence.", "More reassurance.", "Avoiding the topic."], 1, "'Specific evidence really does work better than vague reassurance'."),
      mc("3. What does the coach say it's high time the athlete did?", ["Waited longer.", "Stopped waiting for doubt to disappear before acting.", "Gave up competing.", "Ignored their coach."], 1, "'It's high time you stopped waiting for doubt to disappear before acting'."),
      mc("4. What does the athlete conclude about confidence?", ["It's a prerequisite for action.", "It's more a consequence of action than a prerequisite.", "It's unrelated to action.", "It never develops."], 1, "'confidence really is more a consequence of action than a prerequisite for it'."),
      mc("5. What does the woman wish she'd understood sooner?", ["Nothing in particular.", "That admired people struggled with similar self-doubt.", "That confidence doesn't matter.", "That she should give up."], 1, "'I wish I'd understood sooner that even people I admired struggled with similar self-doubt'."),
      mc("6. How does the man describe that kind of realisation?", ["Unimportant.", "Genuinely transformative.", "Obvious to everyone.", "Irrelevant to him."], 1, "'That realisation alone can be genuinely transformative, in my experience too'."),
    ]),

    ...speakingParts({ p1: "si sueles dudar de tus propias capacidades y cómo lo gestionas", p2: "dos imágenes de la confianza (alguien hablando con seguridad ante un público y una persona practicando en solitario frente a un espejo): comentadlas y decidid cuál representa mejor el desarrollo genuino de la confianza", p3: "qué ayuda más a desarrollar confianza genuina (la práctica repetida, el feedback específico, el apoyo de un mentor, superar el fracaso, la autocompasión): comentadlo y decidid lo más eficaz", p4: "la confianza y la autoestima: si se puede enseñar explícitamente o debe surgir de la experiencia propia, qué papel tiene el síndrome del impostor incluso entre profesionales de éxito, y si la sociedad confunde con demasiada frecuencia la confianza con la certeza" }),

    SUMMARY("Resumen del Día 4 — Simulacro cronometrado", [
      "Practicados de forma combinada: condicionales mixtos formales, inversión condicional ampliada, y wish/if only/I'd rather/it's time.",
      "Vocabulario de la confianza y la autoestima. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 5", "Repasa los tres recursos de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 1."),
  ],
};

// ───────────────────────── DÍA 5 ─────────────────────────
const DAY5 = {
  title: "Día 5 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los condicionales mixtos formales, la inversión condicional ampliada, y wish/if only/I'd rather/it's time, con el vocabulario de identidad, memoria, arrepentimiento y confianza. Las 4 destrezas (formato C2); Listening P4. Al final, el mini-simulacro de la Semana 1.",
  pedagogy: {
    objective: "Consolidar los recursos de registro más formal de la semana antes de la Semana 2.",
    summary: "Repaso de condicionales mixtos/inversión/wish-if only; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de la semana te resulta más natural usar? ¿Cuál más artificial todavía?", "Repásalos antes de la Semana 2 (inversión y fronting literarios más raros)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 1 del C2. Consolidas los CONDICIONALES MIXTOS FORMALES, la INVERSIÓN CONDICIONAL AMPLIADA, y WISH/IF ONLY/I'D RATHER/IT'S TIME. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 1", `1) CONDICIONALES MIXTOS FORMALES: had it not been for / but for (+ sustantivo/gerundio, nunca oración completa); were... to (hipotético extremo, inversión).
2) INVERSIÓN CONDICIONAL AMPLIADA: Had + sujeto + p.p. (3º); Should + sujeto + base form (1º formal); estructuras próximas: failing that, short of + gerundio.
3) WISH/IF ONLY/I'D RATHER/IT'S TIME: wish + would (irritación, otra persona) / wish + could (capacidad); I'd rather + base form (mismo sujeto) / + pasado simple (sujeto distinto); it's (high) time + pasado simple (con valor presente/futuro).
Todos comparten un registro MUY formal-académico — perfectos para el Writing P1 (integración de fuentes) y muy frecuentes en el Reading P5-P7; úsalos con naturalidad, sin forzarlos en cada frase.`),
    grammarEx("Use of English — Repaso mixto de la Semana 1", "Completa o elige.", [
      mc("___ her mentor's belief in her, she would never have applied.", ["Had it not been for", "Had not", "If not"], 0, "had it not been for."),
      mc("___ she trusted her own judgement sooner, years of self-doubt would have been avoided.", ["Had", "Should", "Were"], 0, "inversión condicional 3º: Had."),
      fb("It's high time we ___ (stop) conflating confidence with certainty.", ["stopped"], "it's (high) time + pasado simple."),
      mc("I'd rather you ___ mention this to anyone else.", ["didn't", "don't", "wouldn't"], 0, "I'd rather + pasado simple (sujeto distinto)."),
      mc("___ any concerns arise, the committee will convene immediately.", ["Should", "Had", "Were"], 0, "inversión condicional 1º formal: Should."),
      mc("If only she ___ to the warnings, this could have been avoided.", ["had listened", "listened", "would listen"], 0, "if only + past perfect."),
      mc("Try the main office first; ___ that, contact the regional branch.", ["failing", "short", "were"], 0, "failing that."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 1", "Repasa los mazos (identidad, memoria, arrepentimiento, confianza)."),
    vocabEx("Vocabulario — Repaso de la Semana 1", "Elige la opción correcta.", [
      mc("The process of examining one's own thoughts and feelings:", ["introspection", "persona", "disposition"], 0, "introspection."),
      mc("To bring a memory powerfully to mind:", ["evoke", "fade", "idealise"], 0, "evoke."),
      mc("A deep feeling of guilt over a past wrong:", ["remorse", "redemption", "hindsight"], 0, "remorse."),
      mc("The persistent feeling of being a fraud despite real achievement:", ["imposter syndrome", "self-worth", "assertiveness"], 0, "imposter syndrome."),
      mc("Genuinely representing one's true self:", ["authenticity", "persona", "dissonance"], 0, "authenticity."),
      mc("Emotionally moving in a deep, often sad way:", ["poignant", "wistful", "vivid"], 0, "poignant."),
      mc("To weaken someone's confidence gradually:", ["undermine", "bolster", "validate"], 0, "undermine."),
      mc("Cannot be reversed or undone:", ["irrevocable", "contrite", "remorseful"], 0, "irrevocable."),
    ]),

    ...uoe({
      p1: {
        title: "One week into C2",
        text: "Reaching the end of the first full week of C2-level preparation (1)___ a natural moment for honest reflection on quite how demanding, and quite how rewarding, this particular level of study genuinely proves to be. Had learners not already possessed comprehensive C1 grammatical range, this week's material — formal conditional alternatives, expanded inversion, the finer nuances of wish and its close relatives — would have proven considerably (2)___ to absorb meaningfully. It's high time learners at this level (3)___ themselves real credit for the sheer precision this material demands, precision considerably beyond what earlier levels ever genuinely required. I'd rather learners (4)___ that initial unfamiliarity with these structures reflects their genuine difficulty, not any personal failing on the learner's own part. If only every learner (5)___ how quickly these formal patterns become genuinely natural with sustained, deliberate practice, the initial learning curve might feel considerably less (6)___.",
        q: [
          mc("(1)", ["offers", "provides", "gives", "presents"], 0, "'offers a natural moment for… reflection'."),
          mc("(2)", ["harder", "more difficult", "tougher", "trickier"], 1, "'considerably more difficult to absorb meaningfully'."),
          mc("(3)", ["gave", "give", "gives", "giving"], 0, "it's time + pasado simple: gave."),
          mc("(4)", ["recognised", "recognise", "recognises", "recognising"], 0, "I'd rather + pasado simple: recognised."),
          mc("(5)", ["knew", "know", "knows", "knowing"], 0, "if only + pasado simple: knew."),
          mc("(6)", ["daunting", "intimidating", "overwhelming", "formidable"], 0, "'the initial learning curve might feel… daunting'."),
        ],
      },
      p2: {
        title: "What comes next",
        text: "With this first week now behind (1)___, attention naturally turns towards Week Two, which extends inversion and fronting into considerably rarer, more literary territory — patterns encountered constantly in sophisticated Reading passages but produced, even by strong learners, (2)___ less frequently in their own active writing. Should this pattern of recognition without production feel familiar from earlier stages of language learning, it is worth noting (3)___ this particular gap tends to narrow considerably faster at C2 than at earlier levels, given the learner's already substantial existing grammatical foundation. Had earlier levels not already built such comprehensive underlying competence, C2's specific demands (4)___ prove considerably more daunting than they genuinely, actually do for learners arriving at this level properly, adequately prepared. It's time learners (5)___ real confidence from having already successfully absorbed genuinely demanding material this week — Week Two, built directly (6)___ this same solid foundation, should feel like a natural, logical continuation rather than any entirely fresh, separate challenge.",
        q: [
          fb("(1)", ["them"], "'this first week now behind them'."),
          fb("(2)", ["considerably", "far", "much"], "'produced… considerably less frequently'."),
          fb("(3)", ["that"], "'it is worth noting that this… gap'."),
          fb("(4)", ["would", "might", "could"], "'C2's specific demands would/might/could prove'."),
          fb("(5)", ["drew", "took"], "it's time + pasado simple: drew/took real confidence."),
          fb("(6)", ["upon", "on"], "'built directly upon/on this same… foundation'."),
        ],
      },
      p3: {
        title: "Precision as a discipline",
        text: "What distinguishes C2-level writing most clearly from strong C1-level writing is not primarily vocabulary range or grammatical (1)___ alone, both of which strong C1 candidates frequently already genuinely possess in considerable measure. It is, rather, PRECISION — the disciplined capacity to select, among several superficially similar structures, precisely the one that most accurately, most (2)___ conveys the exact intended meaning and register. This particular (3)___ cannot be shortcut through memorisation alone; it develops, gradually and cumulatively, through sustained, repeated exposure combined with deliberate, active production practice. Learners who approach this week's material with genuine patience, rather than frustrated (4)___ at its apparent complexity, typically find that the underlying patterns eventually, gradually resolve into something approaching genuine, comfortable intuition. This transition from effortful conscious (5)___ to comfortable, natural intuition represents, in many genuine respects, the entire point of C2-level (6)___ itself.",
        items: [
          { root: "accurate", accepted: ["accuracy"], hint: "'grammatical accuracy alone' → accuracy." },
          { root: "precise", accepted: ["precisely"], hint: "'most accurately, most precisely conveys' → precisely." },
          { root: "discipline", accepted: ["discipline"], hint: "'This particular discipline' (sustantivo, repetido a propósito del título)." },
          { root: "impatient", accepted: ["impatience"], hint: "'rather than frustrated impatience' → impatience." },
          { root: "apply", accepted: ["application"], hint: "'effortful conscious application' → application." },
          { root: "prepare", accepted: ["preparation"], hint: "'the entire point of C2-level preparation' → preparation." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 1",
        items: [
          { s1: "If it hadn't been for her mentor's belief in her, she would never have applied.", key: "BEEN", s2: "Had it not ___ for her mentor's belief in her, she would never have applied.", accepted: ["been"], explanation: "had it not been for." },
          { s1: "If she had trusted her own judgement sooner, years of self-doubt would have been avoided.", key: "TRUSTED", s2: "Had she ___ her own judgement sooner, years of self-doubt would have been avoided.", accepted: ["trusted"], explanation: "inversión condicional 3º." },
          { s1: "We really should stop conflating confidence with certainty now.", key: "TIME", s2: "It's high ___ we stopped conflating confidence with certainty.", accepted: ["time"], explanation: "it's high time + pasado simple." },
          { s1: "I'd prefer it if you didn't mention this to anyone else.", key: "RATHER", s2: "I'd ___ you didn't mention this to anyone else.", accepted: ["rather"], explanation: "I'd rather + pasado simple." },
          { s1: "If any concerns arise, the committee will convene immediately.", key: "SHOULD", s2: "___ any concerns arise, the committee will convene immediately.", accepted: ["should"], explanation: "inversión condicional 1º formal." },
          { s1: "I deeply regret that she didn't listen to the warnings.", key: "ONLY", s2: "If ___ she had listened to the warnings.", accepted: ["only"], explanation: "if only + past perfect." },
        ],
      },
      p5: {
        title: "The professor who tracked her own students' growth",
        text: "A professor teaching an advanced language course decided, somewhat unusually, to systematically document her own students' progress through the specific grammatical structures most characteristic of C2-level mastery, curious whether the particular patterns of difficulty she had informally, anecdotally observed across many years of teaching would genuinely hold up under more rigorous, careful examination.\n\nHer findings, once properly, carefully analysed, confirmed several of her long-held intuitions while genuinely surprising her on other specific points. Formal conditional alternatives, she found, generally proved easier for students to correctly recognise while reading than to confidently, accurately produce themselves in their own active writing — an asymmetry she had anecdotally suspected for years but had never previously formally, rigorously measured.\n\nHad she not tracked individual students' specific progress carefully over time, rather than merely assessing the whole cohort's aggregate performance, she might well have missed a genuinely striking pattern: students who deliberately, consciously practised producing these particular structures in their own low-stakes writing, even when that early writing contained frequent errors, progressed considerably faster than students who focused predominantly on passive recognition exercises alone.\n\n\"It's high time we as teachers stopped assuming recognition reliably, straightforwardly predicts production,\" she noted in her subsequent published findings. \"If only more language courses built in considerably more low-stakes, genuinely safe production practice specifically, rather than relying so heavily on recognition-based exercises throughout.\"\n\nHer research also revealed a genuinely encouraging pattern regarding the specific timeline of typical student progress. Students commonly reported these formal structures feeling distinctly artificial and effortful for roughly two to three weeks of sustained practice, after which point recognition and, notably, active production both began improving considerably, relatively rapidly.\n\n\"I'd rather students understood this specific timeline clearly from the very outset,\" she explained, \"rather than becoming needlessly, unnecessarily discouraged during that entirely normal initial adjustment period.\" Her findings have since informed how she now deliberately sequences and structures her own teaching, building in considerably more low-stakes production opportunities considerably earlier in each course than her own previous, less evidence-based teaching practice had ever previously done.\n\n\"Had it not been for actually, carefully tracking this properly,\" she reflected, \"I'd still be relying purely on informal impression rather than genuine, rigorous evidence. That distinction, it turns out, matters enormously for how one should actually teach this particular material effectively.\"",
        q: [
          mc("What did the professor decide to do?", ["Stop teaching entirely.", "Systematically document her students' progress through C2 structures.", "Only teach recognition exercises.", "Abandon formal grammar teaching."], 1, "'she decided… to systematically document her own students' progress'."),
          mc("What asymmetry did she find regarding formal conditional alternatives?", ["Production was easier than recognition.", "Recognition was easier than confident, accurate production.", "Both were equally easy.", "Neither was ever mastered."], 1, "'generally proved easier for students to correctly recognise while reading than to confidently, accurately produce'."),
          mc("What pattern did tracking individual students reveal?", ["No meaningful pattern.", "Students who practised production progressed faster than those relying on recognition alone.", "All students progressed identically.", "Recognition alone was sufficient."], 1, "'students who deliberately… practised producing these particular structures… progressed considerably faster than students who focused predominantly on passive recognition'."),
          mc("What timeline did students commonly report?", ["Instant mastery.", "Structures feeling artificial for roughly two to three weeks before improving.", "No improvement ever.", "Improvement only after a year."], 1, "'Students commonly reported these formal structures feeling distinctly artificial… for roughly two to three weeks… after which… both began improving'."),
          mc("How has this research changed her own teaching?", ["It hasn't changed anything.", "She now builds in more low-stakes production opportunities earlier.", "She stopped teaching formal structures.", "She only assigns recognition exercises now."], 1, "'building in considerably more low-stakes production opportunities considerably earlier in each course'."),
          mc("What does she say tracking properly allowed her to do?", ["Nothing different from before.", "Rely on genuine, rigorous evidence rather than informal impression.", "Ignore her students' actual progress.", "Confirm nothing new."], 1, "'I'd still be relying purely on informal impression rather than genuine, rigorous evidence'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Formal register, at any level of language learning, tends to provoke a particular kind of learner anxiety distinct from anxiety about other, more communicative aspects of language use. (1)___\n\nThe worry, when articulated explicitly, usually centres on naturalness: will these formal structures sound genuinely authentic in actual production, or will they instead sound stilted, artificial, transparently learned from a textbook rather than genuinely internalised. (2)___ This is, in fact, a genuinely reasonable worry, not merely learner insecurity without real basis.\n\nThe honest answer, though, is more encouraging than the underlying worry itself generally suggests. (3)___ Formal structures do initially sound effortful when newly acquired, precisely because they genuinely are effortful at that particular early stage of acquisition.\n\nWith sustained, repeated use, however, this initial effortfulness reliably fades, much as it did for every single grammatical structure a learner has ever genuinely mastered at any earlier stage of their overall language learning journey. (4)___ Nothing about formal register is uniquely, permanently doomed to remain artificial forever.\n\nWhat helps considerably in this particular transition is deliberately, consciously noticing formal structures in authentic use — in serious journalism, in academic writing, in formal correspondence — rather than encountering them solely within isolated, decontextualised textbook exercises. (5)___ Context, it turns out, does real, measurable work in building genuine, internalised naturalness.\n\nFor learners currently at this exact stage, patience genuinely matters more than any particular clever technique. (6)___ Every structure that once felt artificial to you personally, at some earlier point in your own learning, eventually became comfortable and natural — and this particular structure, given sufficient time and practice, will too.",
        options: [
          "That particular anxiety deserves acknowledging honestly.",  // A -> gap1
          "It's a fair question, not an unfounded one.",  // B -> gap2
          "That effort, importantly, is temporary rather than permanent.", // C -> gap3
          "The same basic process applies here too, eventually.", // D -> gap4
          "Real examples do work that isolated drills simply cannot.", // E -> gap5
          "The evidence for this, honestly, is your own past experience.", // F -> gap6
          "No formal structure has ever felt artificial to any learner.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa ansiedad merece reconocerse honestamente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: es una pregunta justa, no infundada."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese esfuerzo es temporal, no permanente."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el mismo proceso se aplica aquí también."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: los ejemplos reales hacen un trabajo que los ejercicios aislados no pueden."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la evidencia de esto es tu propia experiencia pasada."),
        ],
      },
      p7: {
        title: "Four learners reflect on their first week of C2 study",
        text: "Read what four learners say about their first week of studying for the C2 exam.\n\nA) NADIA: Had it not been for already having solid C1 foundations, this week would have felt completely overwhelming, honestly. As it was, it felt demanding but genuinely, manageably achievable.\n\nB) TOM: I'd rather I had practised producing these formal structures actively from day one, rather than just passively recognising them in the reading texts. I can see that gap in my own learning already, even this early on.\n\nC) PRIYA: It's high time I stopped comparing my own halting first attempts to the polished, edited model answers in the materials. Of course mine sound less natural right now — I'm still actively learning this material.\n\nD) SAM: If only I'd understood sooner just how much these formal structures actually do appear in real academic writing. Once I started genuinely noticing them everywhere, they honestly stopped feeling quite so artificial to me.\n",
        q: [
          mc("Who says this week would have felt overwhelming without solid C1 foundations?", ["A", "B", "C", "D"], 0, "Nadia: 'Had it not been for already having solid C1 foundations, this week would have felt completely overwhelming'."),
          mc("Who wishes they had practised production actively from day one?", ["A", "B", "C", "D"], 1, "Tom: 'I'd rather I had practised producing these formal structures actively from day one'."),
          mc("Who needs to stop comparing their attempts to polished model answers?", ["A", "B", "C", "D"], 2, "Priya: 'It's high time I stopped comparing my own halting first attempts to the polished… model answers'."),
          mc("Who found structures stopped feeling artificial once they noticed them in real writing?", ["A", "B", "C", "D"], 3, "Sam: 'Once I started genuinely noticing them everywhere, they honestly stopped feeling quite so artificial'."),
          mc("Who found this week demanding but manageably achievable?", ["A", "B", "C", "D"], 0, "Nadia: 'it felt demanding but genuinely, manageably achievable'."),
          mc("Who can already see a gap between recognition and production in their own learning?", ["A", "B", "C", "D"], 1, "Tom: 'I can see that gap in my own learning already, even this early on'."),
          mc("Who acknowledges they are still actively learning this material?", ["A", "B", "C", "D"], 2, "Priya: 'Of course mine sound less natural right now — I'm still actively learning this material'."),
          mc("Who wishes they'd understood sooner how common these structures are in academic writing?", ["A", "B", "C", "D"], 3, "Sam: 'If only I'd understood sooner just how much these formal structures actually do appear in real academic writing'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el aprendizaje de idiomas y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Explicit study of formal grammatical structures is essential at C2 level — without deliberate, conscious attention, learners rarely acquire the precision this level genuinely demands, however extensive their general fluency already is.'\n\nTEXTO 2: 'Formal structures are ultimately best absorbed through extensive exposure to authentic texts, not isolated grammar drills. Real, contextualised examples build genuine, natural fluency far more reliably than decontextualised exercises ever manage to.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS recursos distintos de la Semana 1. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What surprised me about C2-level English' — reflexiona sobre tu propia experiencia (real o imaginada).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre esta primera semana.\n· REVIEW de un recurso o método que te haya ayudado a estudiar inglés a este nivel.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8 opciones, 10 preguntas)", "Escucha a cinco estudiantes de C2 hablando de su primera semana (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué encontraron más difícil?): A recognising formal structures · B producing formal structures actively · C the reading texts' density · D the writing task's integration requirement · E maintaining focus for 90 minutes · F the speaking task's register · G vocabulary precision · H nothing in particular. TAREA DOS (¿qué les ayudó más?): A practising production daily · B noticing structures in real texts · C timing their practice · D a study partner · E patience with the process · F reviewing mistakes · G a teacher's feedback · H nothing helped yet.", "This is Part Four. You will hear five students talking about their first week of C2 study. Speaker One: Honestly, producing these formal structures actively was far harder than simply recognising them in the reading texts. What helped most was practising production daily, even in short, low-stakes bursts. Speaker Two: For me it was the writing task's integration requirement — summarising and evaluating two sources felt genuinely unfamiliar at first. Noticing how real academic writing handles this helped enormously, once I started paying attention to it properly. Speaker Three: Maintaining focus for the full ninety minutes proved surprisingly difficult, if I'm honest. Timing my practice sessions carefully, building up gradually, made a genuine difference for me. Speaker Four: Vocabulary precision was my biggest challenge this week — so many near-synonyms with genuinely subtle differences between them. Reviewing my own mistakes carefully afterwards helped me understand those differences properly. Speaker Five: Honestly, nothing in particular felt especially difficult for me this week. That said, having a study partner to practise speaking with definitely helped me build confidence considerably faster than working entirely alone would have.", [
      mc("Speaker 1 — TAREA UNO (más difícil)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: producing formal structures actively."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: the writing task's integration requirement."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: maintaining focus for 90 minutes."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: vocabulary precision."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: nothing in particular."),
      mc("Speaker 1 — TAREA DOS (qué ayudó)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: practising production daily."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: noticing structures in real texts."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: timing their practice."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: reviewing mistakes."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: a study partner."),
    ]),

    ...speakingParts({ p1: "cómo te sientes al empezar a estudiar para el nivel más alto de Cambridge English", p2: "dos imágenes del aprendizaje avanzado de idiomas (alguien leyendo un texto académico denso y dos personas practicando conversación juntas): comentadlas y decidid cuál representa mejor cómo se aprende a este nivel", p3: "qué es más importante para progresar en el nivel C2 (la práctica activa de producción, la exposición a textos auténticos, el feedback específico, la paciencia con el proceso, estudiar con otras personas): comentadlo y decidid lo más eficaz", p4: "el aprendizaje al nivel C2: si vale la pena el esfuerzo de alcanzar el nivel más alto de Cambridge English, qué distingue realmente al C2 del C1, y cómo se mantiene la motivación en un proceso de aprendizaje tan exigente" }),

    SUMMARY("Resumen de la Semana 1 (C2)", [
      "Dominas los condicionales mixtos formales (had it not been for/but for/were... to), la inversión condicional ampliada (had/should + inversión, failing that/short of), y wish/if only/I'd rather/it's time con sus matices precisos.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes (240-280/280-320) y el Speaking P1–P3 con temas de identidad, memoria, arrepentimiento y confianza.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: la INVERSIÓN Y EL FRONTING LITERARIOS MÁS RAROS, con los medios de comunicación y la desinformación.",
    ]),
    INFO("Mini-simulacro de la Semana 1", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 2."),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Los condicionales mixtos avanzados y la inversión formal · La identidad y la autopercepción",
  description: "Condicionales mixtos formales (had it not been for/but for/were... to), inversión condicional ampliada (had/should + inversión, failing that/short of), y wish/if only/I'd rather/it's (high) time, con el hilo de la identidad, la memoria, el arrepentimiento y la confianza. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
