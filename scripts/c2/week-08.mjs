/**
 * C2 Proficiency · Semana 8 — "Modalidad avanzada (hedging, stance epistémico) y
 * recursos retóricos (ironía, litotes, understatement) · El periodismo y la opinión pública".
 * Gramática nueva: hedging/modalidad epistémica (could arguably, might well, appears
 * to suggest, is by no means certain) y recursos retóricos de matiz muy fino (litotes,
 * understatement, ironía verbal, pregunta retórica en el ensayo de opinión).
 * Cada día, las 4 destrezas con el formato real del C2 (Reading & UoE de 7 partes).
 */
import {
  TEXT, GRAMMAR, WARN, INFO, SUMMARY, deck,
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas, matizadas y de registro muy formal (3-4 frases con razones y ejemplos).", `Parte 1 del C2: preguntas personales (${p1})`, "responder con detalle, matiz y precisión léxica", "personally, to a considerable extent, what strikes me most is, the principal reason being"),
  speaking(2, "Speaking · Parte 2 — Tarea colaborativa", "Comentad la(s) imagen(es), respondei a la pregunta planteada y llegad a una decisión conjunta.", `Parte 2 del C2: tarea colaborativa sobre ${p2}`, "negociar, matizar y llegar a un acuerdo", "there's a compelling case for, on balance, I take your point, that said, shall we settle on"),
  speaking(3, "Speaking · Parte 3 — Turno largo + discusión", "Habla dos minutos sin interrupción sobre el tema propuesto; tu compañero/a comenta brevemente; después, discutid juntos las preguntas ampliadas.", `Parte 3 del C2: turno largo y discusión sobre ${p3}`, "argumentar con matices, generalizar y evaluar críticamente", "it largely hinges on, it's often maintained that, up to a point, conversely, in the final analysis"),
];

// ───────────────────────── DÍA 36 ─────────────────────────
const DAY36 = {
  title: "Día 36 — El hedging y la modalidad epistémica · El periodismo de investigación",
  description: "Modalidad epistémica de matiz muy fino: could arguably, might well, appears to suggest, is by no means certain, tends to indicate. Vocabulario del periodismo de investigación. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar el hedging y la modalidad epistémica para matizar afirmaciones con precisión académica.",
    summary: "Hedging/modalidad epistémica; periodismo de investigación; Use of English P1-P7, Writing, Listening P1, Speaking P1-P3.",
    commonMistakes: ["usar 'maybe' o 'perhaps' en registro académico en vez de estructuras de hedging más sofisticadas.", "sobrecargar una frase con demasiados matizadores a la vez.", "confundir hedging (matizar una afirmación) con vaguedad (no decir nada concreto)."],
    reviewPrompts: ["¿Cómo matizarías 'This is true' con hedging de nivel C2?", "¿Qué diferencia hay entre 'might well' y 'may'?"],
  },
  items: [
    TEXT("🎯 Semana 8: MODALIDAD AVANZADA (hedging, stance epistémico) y RECURSOS RETÓRICOS (ironía, litotes, understatement). Hoy: el HEDGING y la MODALIDAD EPISTÉMICA. Vocabulario: el PERIODISMO DE INVESTIGACIÓN."),
    GRAMMAR("El hedging y la modalidad epistémica (C2)", `El hedging matiza una afirmación sin debilitarla del todo — típico del registro académico y periodístico serio de nivel C2.
· Modal + adverbio: could arguably, might well, would seem to, should reasonably.
· Verbos epistémicos: appears to suggest, tends to indicate, is thought to, is widely believed to.
· Cuantificadores cautelosos: by no means certain, far from conclusive, not entirely unlikely, all but confirmed.
· Estructuras nominales matizadas: there is some evidence to suggest that.../ it could be argued that.../ one might reasonably conclude that...
· OJO: el hedging matiza, no vacía de contenido — evita 'maybe'/'perhaps' solos en registro C2; usa las estructuras anteriores.`),
    WARN("Error típico del hispanohablante", "En español matizamos con 'quizás' o 'podría ser que', y solemos trasladarlo directamente a 'maybe' o 'perhaps' en inglés — correcto pero demasiado simple para C2. Practica: 'It could arguably be maintained that...', 'The evidence would appear to suggest that...', 'This is, by no means, a settled question.'"),
    grammarEx("Use of English — El hedging y la modalidad epistémica", "Elige la opción correcta.", [
      mc("The report's findings ___ suggest institutional failure, though further investigation is needed.", ["would appear to", "definitely", "clearly"], 0, "would appear to suggest (hedging)."),
      mc("It ___ be argued that the source's credibility was never adequately verified.", ["could arguably", "certainly", "obviously"], 0, "could arguably be argued (hedging)."),
      mc("The allegations remain ___ unproven, despite considerable circumstantial evidence.", ["by no means", "absolutely", "completely"], 0, "by no means unproven (matizador)."),
      mc("There is ___ evidence to suggest the leak originated internally.", ["some", "no", "zero"], 0, "there is some evidence to suggest (hedging)."),
      mc("The journalist's sources ___ well have been deliberately misled.", ["might", "must", "will"], 0, "might well have been (hedging modal)."),
      mc("The story's central claim is ___ conclusive, pending further corroboration.", ["far from", "entirely", "completely"], 0, "far from conclusive (matizador)."),
      mc("One ___ reasonably conclude that editorial oversight had, in this case, failed.", ["might", "will", "does"], 0, "one might reasonably conclude (hedging)."),
    ]),
    GRAMMAR("Vocabulario del día — El periodismo de investigación (C2)", "Léxico de maestría sobre periodismo de investigación."),
    deck("C2 S8D36 — El periodismo de investigación", [
      ["investigative journalism", "periodismo de investigación", "Investigative journalism often takes months of painstaking, careful work.", "sustantivo", "ɪnˈvestɪɡətɪv ˈdʒɜːnəlɪzəm"],
      ["whistleblower", "informante, alertador", "The whistleblower risked considerable personal cost to expose the scandal.", "sustantivo", "ˈwɪslˌbləʊə"],
      ["corroborate", "corroborar", "Reporters must corroborate claims through multiple independent sources.", "verbo", "kəˈrɒbəreɪt"],
      ["off-the-record", "extraoficial, confidencial", "The official spoke off-the-record, unwilling to be formally quoted.", "adjetivo", "ɒf ðə ˈrekɔːd"],
      ["byline", "firma (de un artículo)", "Her byline appeared on some of the year's most significant stories.", "sustantivo", "ˈbaɪlaɪn"],
      ["editorial independence", "independencia editorial", "Editorial independence protects journalists from undue commercial pressure.", "sustantivo", "ˌedɪˈtɔːriəl ˌɪndɪˈpendəns"],
      ["scoop", "exclusiva (periodística)", "The paper's biggest scoop this decade nearly went unpublished entirely.", "sustantivo", "skuːp"],
      ["fact-check", "verificar datos", "Rigorous fact-checking distinguishes credible journalism from mere rumour.", "verbo", "fækt tʃek"],
      ["media literacy", "alfabetización mediática", "Media literacy helps readers critically evaluate the sources they encounter.", "sustantivo", "ˈmiːdiə ˈlɪtərəsi"],
      ["gatekeeping", "control editorial, filtrado", "Editorial gatekeeping determines which stories ultimately reach the public.", "sustantivo", "ˈɡeɪtkiːpɪŋ"],
    ]),
    vocabEx("Vocabulario — El periodismo de investigación", "Elige la opción correcta.", [
      mc("A person who exposes wrongdoing from within an organisation:", ["whistleblower", "byline", "gatekeeper"], 0, "whistleblower."),
      mc("To confirm a claim using independent, additional sources:", ["corroborate", "fact-check", "scoop"], 0, "corroborate (aunque 'fact-check' también verifica, 'corroborate' se refiere específicamente a confirmar con fuentes adicionales)."),
      mc("Said confidentially, not for formal public attribution:", ["off-the-record", "editorial", "investigative"], 0, "off-the-record."),
      mc("A major exclusive story published before any competitor:", ["scoop", "byline", "gatekeeping"], 0, "scoop."),
      mc("Freedom from undue commercial or political pressure in reporting:", ["editorial independence", "media literacy", "corroboration"], 0, "editorial independence."),
      mc("The ability to critically evaluate media sources and claims:", ["media literacy", "gatekeeping", "corroboration"], 0, "media literacy."),
    ]),

    ...uoe({
      p1: {
        title: "The story that took two years",
        text: "The investigative team's initial findings ___ (1) suggest institutional wrongdoing, though further corroboration would prove necessary before publication could reasonably proceed. It could arguably ___ (2) argued that no single whistleblower's testimony, however compelling, should ever be published without independent verification from at least one further source. The paper's editorial board, mindful of considerable legal risk, insisted that every claim be rigorously fact-checked before the story's eventual byline could ___ (3) appear in print. There was, by the lead reporter's own careful ___ (4), some evidence to suggest the cover-up extended considerably further up the organisational hierarchy than initially suspected. One might reasonably ___ (5) that such caution, however frustrating for reporters eager to publish, ultimately protected the story's credibility once it finally appeared. The scoop, when it eventually broke nearly two years after the initial tip, proved by no means a ___ (6) achievement — it fundamentally reshaped public understanding of the entire institution.",
        q: [
          mc("(1)", ["would appear to", "definitely", "clearly"], 0, "'findings would appear to suggest'."),
          mc("(2)", ["be", "have", "was"], 0, "'could arguably be argued'."),
          mc("(3)", ["finally", "never", "hardly"], 0, "'byline could finally appear in print'."),
          mc("(4)", ["estimate", "assessment", "guess"], 1, "'by the lead reporter's own careful assessment'."),
          mc("(5)", ["conclude", "say", "think"], 0, "'One might reasonably conclude that'."),
          mc("(6)", ["small", "minor", "modest"], 2, "'by no means a modest achievement' — litotes/understatement invertido."),
        ],
      },
      p2: {
        title: "What sources actually reveal",
        text: "It remains widely (1)___ among experienced investigative journalists that a single anonymous source, however initially convincing, rarely justifies publication on its own. The evidence available at the story's earliest stage would (2)___ to suggest wrongdoing, but 'would appear to' is precisely the kind of careful, hedged language responsible journalism genuinely requires. Editors must weigh, often under considerable time pressure, whether a claim is sufficiently corroborated or whether it remains, in (3)___, still far too speculative for responsible publication. Off-the-record conversations, while genuinely valuable for background understanding, cannot (4)___ themselves justify a published claim without further, independently verifiable corroboration. There is, most experienced editors would agree, (5)___ shortcut around this careful, deliberately slow process, however commercially tempting speed might occasionally, understandably seem. What ultimately distinguishes credible investigative journalism from mere rumour is precisely this careful, hedged, evidence-based caution — knowing (6)___ to publish confidently and when, instead, to keep quietly digging further.",
        q: [
          fb("(1)", ["held", "acknowledged", "accepted"], "'It remains widely held/acknowledged/accepted'."),
          fb("(2)", ["appear"], "'would appear to suggest'."),
          fb("(3)", ["fact", "truth", "reality"], "'in fact/truth/reality still far too speculative'."),
          fb("(4)", ["by"], "'cannot by themselves justify' — reflexivo enfático."),
          fb("(5)", ["no"], "'there is… no shortcut around this… process'."),
          fb("(6)", ["when"], "'knowing when to publish confidently and when… to keep… digging'."),
        ],
      },
      p3: {
        title: "The ethics of anonymous sourcing",
        text: "Responsible use of anonymous sourcing requires careful editorial (1)___ that balances genuine public interest against the very real risk of publishing (2)___ or deliberately misleading information. Editors who grant anonymity too readily risk becoming unwitting (3)___ for sources with their own undisclosed agenda, rather than genuinely serving the public's legitimate interest in accountability. This ongoing (4)___ between protecting vulnerable sources and maintaining rigorous journalistic standards has grown considerably more acute as anonymous leaking has become, for better or worse, increasingly commonplace. Some newsrooms have consequently developed (5)___ internal protocols requiring at least two independent, mutually corroborating sources before any anonymous claim can reasonably be published. Whether such protocols prove sufficiently (6)___ against determined, sophisticated manipulation remains, honestly, an open and genuinely unresolved question.",
        items: [
          { root: "judge", accepted: ["judgement", "judgment"], hint: "'careful editorial judgement' (sustantivo)." },
          { root: "corroborate", accepted: ["uncorroborated"], hint: "'publishing uncorroborated… information' (adjetivo)." },
          { root: "convey", accepted: ["conveyors", "conduits"], hint: "'unwitting conduits for sources' — aceptar 'conduits' (voceros/canales); usar como sustantivo plural." },
          { root: "tense", accepted: ["tension"], hint: "'This ongoing tension between…' (sustantivo)." },
          { root: "formal", accepted: ["formal"], hint: "'developed formal internal protocols' (adjetivo, forma base)." },
          { root: "protect", accepted: ["protective"], hint: "'sufficiently protective against… manipulation' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — el hedging y la modalidad epistémica",
        items: [
          { s1: "It is possible that the findings suggest institutional wrongdoing.", key: "APPEAR", s2: "The findings would ___ to suggest institutional wrongdoing.", accepted: ["appear"], explanation: "would appear to suggest (hedging)." },
          { s1: "It is possible to argue that no testimony should be published unverified.", key: "ARGUABLY", s2: "It could ___ be argued that no testimony should be published unverified.", accepted: ["arguably"], explanation: "could arguably be argued (hedging)." },
          { s1: "The claim is definitely not proven yet.", key: "MEANS", s2: "The claim is by no ___ proven yet.", accepted: ["means"], explanation: "by no means proven (matizador)." },
          { s1: "It's possible that the sources were misled deliberately.", key: "WELL", s2: "The sources might ___ have been misled deliberately.", accepted: ["well"], explanation: "might well have been (hedging modal)." },
          { s1: "There is a small amount of evidence suggesting internal involvement.", key: "SOME", s2: "There is ___ evidence to suggest internal involvement.", accepted: ["some"], explanation: "there is some evidence to suggest (hedging)." },
        ],
      },
      p5: {
        title: "The editor who slowed everything down",
        text: "When the tip first arrived, anonymously, late on a Friday evening, most of the newsroom's younger reporters were eager to publish within days, convinced the story's central claim was, in their own words, 'basically confirmed already.'\n\nThe paper's veteran editor, Marisol, disagreed, firmly and repeatedly. \"The evidence would appear to suggest wrongdoing,\" she told her visibly frustrated team, \"but 'would appear to suggest' is precisely the careful, hedged phrase we should be using internally right now — not 'confirmed,' not yet, and possibly not for weeks still.\"\n\nHer insistence on additional corroboration, though genuinely unpopular with reporters eager for a scoop before any rival publication, proved decisive. It could arguably be maintained, she later reflected, that her caution cost the paper a full week's head start over its closest competitor.\n\n\"But it is, by no means, an achievement I regret,\" she explained candidly in a later internal review. \"One might reasonably conclude that a week's delay is a genuinely modest price for a story that survived every subsequent legal challenge without a single successful retraction.\"\n\nThe additional corroboration work, tedious and painstaking as it undeniably proved, ultimately revealed the story was considerably more complex than the original tip had initially suggested — involving several additional individuals nobody on the original reporting team had even suspected.\n\n\"There might well have been a very different, considerably messier story,\" Marisol noted afterward, \"had we published on the original, unverified timeline our younger reporters had initially, understandably wanted.\"\n\nHer approach, since formally adopted as newsroom policy, now requires every anonymously sourced claim to be corroborated by at least two independent sources before publication — a policy some younger reporters still privately find frustratingly cautious, but one Marisol remains, by her own frank admission, entirely unapologetic about.",
        q: [
          mc("What did younger reporters want to do when the tip first arrived?", ["Ignore it entirely.", "Publish within days, believing the claim was basically confirmed.", "Wait several months.", "Hand it to a rival paper."], 1, "'most of the newsroom's younger reporters were eager to publish within days, convinced the story's central claim was… 'basically confirmed already''."),
          mc("What phrase did Marisol insist the team use internally?", ["'Confirmed'.", "'Would appear to suggest'.", "'Definitely true'.", "'Impossible to verify'."], 1, "''would appear to suggest' is precisely the careful, hedged phrase we should be using internally right now'."),
          mc("What does Marisol say her caution may have cost the paper?", ["Nothing at all.", "A week's head start over its closest competitor.", "The entire story.", "Her job."], 1, "'her caution cost the paper a full week's head start over its closest competitor'."),
          mc("What did the additional corroboration work reveal?", ["Nothing new.", "The story was more complex, involving additional individuals nobody had suspected.", "The original tip was entirely false.", "The story should be dropped."], 1, "'the story was considerably more complex than the original tip had initially suggested — involving several additional individuals nobody… had even suspected'."),
          mc("How does Marisol feel about her decision now?", ["Deeply regretful.", "Entirely unapologetic.", "Uncertain.", "Indifferent."], 1, "'Marisol remains, by her own frank admission, entirely unapologetic about'."),
          mc("What policy did the newsroom later adopt?", ["No verification required for anonymous sources.", "At least two independent sources must corroborate any anonymously sourced claim.", "All anonymous sources banned entirely.", "Publication within 24 hours always."], 1, "'requires every anonymously sourced claim to be corroborated by at least two independent sources before publication'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Investigative journalism, at its most rigorous, depends fundamentally on a particular kind of careful, disciplined epistemic humility — a willingness to say, precisely and honestly, only what the available evidence genuinely, currently supports. (1)___\n\nThis discipline runs directly counter to the considerable commercial pressure toward speed and certainty that increasingly, undeniably characterises much of contemporary digital media. (2)___ Confident, definitive headlines simply travel further and faster than carefully hedged, qualified ones ever quite manage to.\n\nSome newsrooms have responded to this pressure by explicitly training reporters in the careful, precise language of hedging — teaching the meaningful, substantive difference between 'appears to suggest' and 'proves' as a genuinely core professional skill. (3)___ This distinction, small as it might initially seem, carries real ethical and legal weight.\n\nOthers worry that excessive hedging, however well-intentioned, can itself become a kind of evasion, allowing publications to imply serious wrongdoing without ever quite explicitly, directly asserting it outright. (4)___ Hedged language, used irresponsibly, can smuggle in insinuation while maintaining plausible deniability.\n\nThe genuinely difficult skill, most experienced editors ultimately agree, lies in calibrating hedged language precisely to match the actual, genuine strength of available evidence — neither overstating nor understating what has actually, concretely been established. (5)___ Too much confidence risks genuine legal and reputational catastrophe; too much caution risks burying a genuinely important story entirely.\n\nWhat ultimately distinguishes responsible investigative journalism from either reckless overclaiming or excessive timidity is precisely this careful, ongoing calibration, exercised anew with every single story. (6)___ It is a skill built slowly, through hard-won experience, rather than one easily reduced to any simple, universal formula.",
        options: [
          "That discipline, however unglamorous, is the craft's real foundation.", // A -> gap1
          "Speed and certainty, commercially, simply sell better than caution does.", // B -> gap2
          "Precision here is never merely academic pedantry for its own sake.", // C -> gap3
          "Careful language, misused, can do quietly dishonest work.", // D -> gap4
          "Both failure modes, evidently, carry real and serious cost.", // E -> gap5
          "No fixed formula, in the end, does this particular job for you.", // F -> gap6
          "No investigative journalist has ever faced genuine commercial pressure.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa disciplina, poco vistosa, es el verdadero fundamento del oficio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la velocidad y la certeza venden mejor que la cautela."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa precisión nunca es mera pedantería académica."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el lenguaje cuidadoso, mal usado, puede hacer un trabajo deshonesto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ambos fallos tienen un coste real y serio."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ninguna fórmula fija hace este trabajo por ti."),
        ],
      },
      p7: {
        title: "Four journalists discuss investigative reporting",
        text: "Read what four journalists say about investigative reporting and sourcing.\n\nA) RENA: The evidence would appear to suggest wrongdoing in my current story, but I'm by no means ready to publish yet, honestly.\n\nB) JAMES: My editor insisted we corroborate every anonymous claim twice before it could arguably go to print, and I'm grateful now.\n\nC) AMARA: There might well have been legal consequences had we rushed our biggest scoop this year, looking back on it.\n\nD) LUCA: One might reasonably conclude that hedged language sometimes protects sources more than it protects the publication itself.\n",
        q: [
          mc("Whose story shows evidence that would appear to suggest wrongdoing?", ["A", "B", "C", "D"], 0, "Rena: 'The evidence would appear to suggest wrongdoing in my current story'."),
          mc("Whose editor insisted on double corroboration for anonymous claims?", ["A", "B", "C", "D"], 1, "James: 'My editor insisted we corroborate every anonymous claim twice'."),
          mc("Who reflects that rushing their biggest scoop might well have caused legal consequences?", ["A", "B", "C", "D"], 2, "Amara: 'There might well have been legal consequences had we rushed our biggest scoop'."),
          mc("Who concludes hedged language sometimes protects sources more than the publication?", ["A", "B", "C", "D"], 3, "Luca: 'One might reasonably conclude that hedged language sometimes protects sources more than… the publication'."),
          mc("Who says they are not ready to publish yet?", ["A", "B", "C", "D"], 0, "Rena: 'I'm by no means ready to publish yet, honestly'."),
          mc("Who says they are now grateful for their editor's insistence?", ["A", "B", "C", "D"], 1, "James: 'and I'm grateful now'."),
          mc("Who is 'looking back' on a past decision?", ["A", "B", "C", "D"], 2, "Amara: 'looking back on it'."),
          mc("Who uses the phrase 'one might reasonably conclude'?", ["A", "B", "C", "D"], 3, "Luca: 'One might reasonably conclude that'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el periodismo de investigación y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Investigative journalism should publish confirmed findings as quickly as possible — delay allows wrongdoing to continue and lets powerful subjects control the narrative.'\n\nTEXTO 2: 'Rigorous corroboration must always come before speed. A single premature, poorly verified story can permanently damage a publication's credibility and cause serious, irreversible harm.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS estructuras de hedging/modalidad epistémica. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What makes a source credible?' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a un periódico expresando una opinión matizada sobre un artículo reciente.\n· REPORT sobre el estado del periodismo de investigación en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two journalists discussing a story. Woman: The evidence would appear to suggest wrongdoing, but I'm by no means ready to publish yet. Man: It could arguably be maintained that we need at least one more source first. Extract Two. You hear an editor briefing a reporter. Man: There is some evidence to suggest internal involvement, but tread carefully with that claim. Woman: Understood — I'll treat it as far from conclusive for now. Extract Three. You hear two colleagues discussing a whistleblower. Woman: The whistleblower might well have faced serious consequences for coming forward. Man: One might reasonably conclude that protecting the source matters more than speed here.", [
      mc("1. What does the woman say about the evidence?", ["It's fully confirmed.", "It would appear to suggest wrongdoing, but isn't ready to publish.", "It's completely false.", "It's irrelevant."], 1, "'The evidence would appear to suggest wrongdoing, but I'm by no means ready to publish yet'."),
      mc("2. What does the man think they need?", ["Nothing further.", "At least one more source.", "A different story entirely.", "Legal approval only."], 1, "'we need at least one more source first'."),
      mc("3. What does the editor say about the evidence for internal involvement?", ["It's fully proven.", "There is some evidence, but it should be treated carefully.", "It's completely absent.", "It's irrelevant to the story."], 1, "'There is some evidence to suggest internal involvement, but tread carefully'."),
      mc("4. How will the reporter treat the claim?", ["As fully confirmed.", "As far from conclusive for now.", "As entirely false.", "As unimportant."], 1, "'I'll treat it as far from conclusive for now'."),
      mc("5. What does the woman say about the whistleblower?", ["They faced no risk at all.", "They might well have faced serious consequences.", "They were never in danger.", "They regretted coming forward."], 1, "'The whistleblower might well have faced serious consequences for coming forward'."),
      mc("6. What does the man conclude matters more than speed?", ["Nothing in particular.", "Protecting the source.", "Publishing first.", "Avoiding all risk."], 1, "'protecting the source matters more than speed here'."),
    ]),

    ...speakingParts({ p1: "si confías en general en los medios de comunicación y por qué", p2: "dos imágenes del periodismo de investigación (un periodista revisando documentos confidenciales de noche y una sala de redacción bulliciosa durante una noticia de última hora): comentadlas y decidid cuál representa mejor el periodismo riguroso", p3: "qué es más importante para un periodismo de investigación creíble (la corroboración rigurosa de fuentes, la velocidad de publicación, la protección de los informantes, la independencia editorial, la transparencia con el público): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 36", [
      "Aprendido: el hedging y la modalidad epistémica (could arguably, might well, would appear to, by no means, far from).",
      "Vocabulario del periodismo de investigación. Reading & Use of English, Writing, Listening P1 y Speaking completos.",
      "Mañana: la litote y el understatement como recursos retóricos.",
    ]),
    INFO("Tarea para el Día 37", "Repasa las estructuras de hedging de hoy. Mañana: la litote y el understatement (not unlikely, no small feat, hardly surprising)."),
  ],
};

// ───────────────────────── DÍA 37 ─────────────────────────
const DAY37 = {
  title: "Día 37 — La litote y el understatement como recursos retóricos · La opinión pública y las encuestas",
  description: "Litote (not unlikely, no small feat, not without merit, hardly surprising) y understatement deliberado como recursos retóricos de registro muy formal. Vocabulario de la opinión pública y las encuestas. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Usar la litote y el understatement con precisión retórica, combinándolos con el hedging de ayer.",
    summary: "Litote/understatement; opinión pública y encuestas; Use of English P1-P7, Writing, Listening P2, Speaking P1-P3.",
    commonMistakes: ["confundir la litote (negación de lo contrario) con una simple negación directa.", "sobreusar la litote hasta que el texto suene artificioso.", "no reconocer que 'not unlikely' es más matizado que 'likely' sin más."],
    reviewPrompts: ["¿Qué diferencia hay entre 'not unlikely' y 'likely'?", "¿Recuerdas un ejemplo de understatement de ayer o de otros textos que hayas leído?"],
  },
  items: [
    TEXT("🎯 Hoy: la LITOTE y el UNDERSTATEMENT como recursos retóricos de nivel C2 (combinados con el hedging de ayer). Vocabulario: la OPINIÓN PÚBLICA y las ENCUESTAS."),
    GRAMMAR("La litote y el understatement (C2)", `La litote afirma algo negando su contrario — un recurso retórico muy característico del registro formal/irónico inglés de nivel C2.
· Litote clásica: not unlikely (= bastante probable), no small feat (= un gran logro), not without merit (= tiene mérito), hardly surprising (= esperable), far from straightforward (= complicado).
· Understatement deliberado: 'somewhat concerning' (por algo alarmante), 'a slight oversight' (por un fallo grave), 'not entirely ideal' (por un desastre).
· Combinación con hedging: 'It would be no small exaggeration to suggest that...', 'This is, by no means, an insignificant finding.'
· Efecto retórico: matiza SIN debilitar — a menudo comunica MÁS fuerza que la afirmación directa, por contraste irónico.`),
    grammarEx("Use of English — La litote y el understatement", "Elige la opción correcta.", [
      mc("Winning the seat by such a narrow margin was ___ a small feat.", ["no", "not", "never"], 0, "no small feat (litote)."),
      mc("The poll's methodology was ___ without its critics, several of them quite vocal.", ["not", "no", "never"], 0, "not without its critics (litote)."),
      mc("A swing of that magnitude is ___ unlikely to reshape the entire race.", ["hardly", "very", "extremely"], 0, "hardly unlikely = bastante probable (litote)."),
      mc("The candidate's sudden reversal was, to put it mildly, ___ concerning to party strategists.", ["somewhat", "extremely", "catastrophically"], 0, "somewhat concerning (understatement)."),
      mc("Predicting the outcome with such limited polling data is ___ from straightforward.", ["far", "close", "near"], 0, "far from straightforward (litote)."),
      mc("It would be ___ exaggeration to call the result a genuine political earthquake.", ["no small", "a tiny", "a minor"], 0, "no small exaggeration (litote intensificada)."),
      mc("The margin of error was, shall we say, ___ than ideal for such a close race.", ["less", "more", "much"], 0, "less than ideal (understatement)."),
    ]),
    GRAMMAR("Vocabulario del día — La opinión pública y las encuestas (C2)", "Léxico de maestría sobre opinión pública y encuestas."),
    deck("C2 S8D37 — La opinión pública y las encuestas", [
      ["public opinion", "opinión pública", "Public opinion shifted noticeably following the televised debate.", "sustantivo", "ˈpʌblɪk əˈpɪnjən"],
      ["polling", "encuestación, sondeos", "Modern polling faces growing challenges reaching representative samples.", "sustantivo", "ˈpəʊlɪŋ"],
      ["margin of error", "margen de error", "The margin of error made the race technically too close to call.", "sustantivo", "ˈmɑːdʒɪn əv ˈerə"],
      ["echo chamber", "cámara de eco", "Social media algorithms can create isolating, self-reinforcing echo chambers.", "sustantivo", "ˈekəʊ ˈtʃeɪmbə"],
      ["confirmation bias", "sesgo de confirmación", "Confirmation bias leads voters to favour evidence supporting existing views.", "sustantivo", "ˌkɒnfəˈmeɪʃn ˈbaɪəs"],
      ["punditry", "opinología, comentarismo político", "Endless televised punditry rarely improves genuine public understanding.", "sustantivo", "ˈpʌndɪtri"],
      ["swing voter", "votante indeciso", "Campaigns invest heavily in persuading a relatively small pool of swing voters.", "sustantivo", "swɪŋ ˈvəʊtə"],
      ["sentiment analysis", "análisis de sentimiento", "Sentiment analysis of social media offers an imperfect proxy for public mood.", "sustantivo", "ˈsentɪmənt əˈnæləsɪs"],
      ["grassroots", "de base, popular", "Grassroots mobilisation often proves more durable than top-down campaigning.", "adjetivo", "ˈɡrɑːsruːts"],
      ["polarisation", "polarización", "Political polarisation has intensified considerably across many democracies.", "sustantivo", "ˌpəʊləraɪˈzeɪʃn"],
    ]),
    vocabEx("Vocabulario — La opinión pública y las encuestas", "Elige la opción correcta.", [
      mc("The statistical range within which a poll's true result likely falls:", ["margin of error", "sentiment analysis", "punditry"], 0, "margin of error."),
      mc("An isolated information environment reinforcing existing beliefs:", ["echo chamber", "swing voter", "grassroots"], 0, "echo chamber."),
      mc("The tendency to favour information confirming what one already believes:", ["confirmation bias", "polling", "polarisation"], 0, "confirmation bias."),
      mc("Continuous media commentary and opinion, often by professional commentators:", ["punditry", "grassroots", "sentiment analysis"], 0, "punditry."),
      mc("A voter genuinely undecided between competing political options:", ["swing voter", "pundit", "grassroots activist"], 0, "swing voter."),
      mc("Growing division between opposing political or social groups:", ["polarisation", "confirmation bias", "margin of error"], 0, "polarisation."),
    ]),

    ...uoe({
      p1: {
        title: "What the polls got wrong",
        text: "The final polling figures proved, in the event, (1)___ from accurate, missing the actual result by a margin considerably wider than any published margin of error had reasonably anticipated. Pollsters, to their credit, were (2)___ unaware of growing methodological difficulty reaching representative samples in an era of declining survey response rates. It would be (3)___ small exaggeration to describe the industry's subsequent reckoning as genuinely, professionally uncomfortable. Some analysts pointed to echo chambers within polling firms themselves — a kind of professional confirmation (4)___ where analysts, unconsciously, favoured methodologies producing results matching their own prior expectations. The swing voters who ultimately decided the race proved (5)___ unlikely, in hindsight, to have been meaningfully captured by conventional polling methodology at all. Whether the polling industry's subsequent reforms prove (6)___ without genuine merit remains, honestly, to be seen at the next major electoral test.",
        q: [
          mc("(1)", ["far", "close", "near"], 0, "'proved… far from accurate'."),
          mc("(2)", ["hardly", "very", "completely"], 0, "'were hardly unaware' — litote (= they were quite aware)."),
          mc("(3)", ["no", "a", "some"], 0, "'no small exaggeration'."),
          mc("(4)", ["bias", "error", "mistake"], 0, "'professional confirmation bias'."),
          mc("(5)", ["not", "very", "extremely"], 0, "'proved not unlikely… to have been' — litote."),
          mc("(6)", ["not", "very", "completely"], 0, "'prove not without genuine merit' — litote."),
        ],
      },
      p2: {
        title: "Punditry and its discontents",
        text: "Televised punditry, whatever its considerable entertainment value, is (1)___ always the most reliable guide to genuinely shifting public sentiment on any given issue. It would be no small (2)___ to suggest that some professional pundits have, over time, grown more attached to memorable soundbites than to careful, honest analysis. This is not (3)___ say punditry serves no genuine function whatsoever — skilled commentators can, at their considerable best, meaningfully clarify complex issues for a general audience. The problem, rather, lies (4)___ a media ecosystem that increasingly, measurably rewards confident certainty over careful, honest hedging, regardless of which genuinely better serves public understanding. Audiences, for their part, are (5)___ entirely blameless in this dynamic either — confident, definitive punditry consistently attracts larger audiences than more careful, appropriately hedged analysis ever quite manages to. Untangling this uncomfortable, mutually reinforcing dynamic will require change (6)___ both broadcasters and audiences alike, a genuinely difficult, slow undertaking.",
        q: [
          fb("(1)", ["not"], "'is not always the most reliable guide'."),
          fb("(2)", ["exaggeration"], "'no small exaggeration to suggest'."),
          fb("(3)", ["to"], "'This is not to say'."),
          fb("(4)", ["in", "within"], "'lies in/within a media ecosystem'."),
          fb("(5)", ["not"], "'are not entirely blameless'."),
          fb("(6)", ["from"], "'require change from both broadcasters and audiences'."),
        ],
      },
      p3: {
        title: "Measuring the immeasurable",
        text: "Public opinion, notwithstanding the sophisticated statistical apparatus modern polling brings to (1)___ it, remains a genuinely elusive, constantly shifting target rather than any fixed, stable quantity waiting simply to be accurately measured. Sentiment (2)___ of social media, while offering intriguing real-time signal, suffers from its own well-documented (3)___ — platforms skew demographically, and vocal minorities routinely, measurably dominate visible online conversation. Grassroots (4)___, though genuinely valuable as a qualitative complement to quantitative polling, cannot easily be scaled to represent an entire, diverse national population. This methodological (5)___ has prompted some researchers to combine multiple, imperfect measurement approaches, triangulating cautiously between traditional polling, social sentiment analysis, and genuinely qualitative grassroots (6)___ research, rather than relying confidently on any single method alone.",
        items: [
          { root: "measure", accepted: ["measuring"], hint: "'the sophisticated… apparatus… brings to measuring it' (gerundio)." },
          { root: "analyse", accepted: ["analysis"], hint: "'Sentiment analysis of social media' (sustantivo)." },
          { root: "limit", accepted: ["limitations"], hint: "'suffers from its own well-documented limitations' (sustantivo)." },
          { root: "mobilise", accepted: ["mobilisation", "mobilization"], hint: "'Grassroots mobilisation… valuable as a qualitative complement' (sustantivo)." },
          { root: "humble", accepted: ["humility"], hint: "'This methodological humility has prompted…' (sustantivo)." },
          { root: "engage", accepted: ["engagement"], hint: "'genuinely qualitative grassroots engagement research' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — la litote y el understatement",
        items: [
          { s1: "Winning by such a narrow margin was actually a considerable achievement.", key: "SMALL", s2: "Winning by such a narrow margin was no ___ feat.", accepted: ["small"], explanation: "no small feat (litote)." },
          { s1: "The poll's methodology had quite a few vocal critics.", key: "WITHOUT", s2: "The poll's methodology was not ___ its critics.", accepted: ["without"], explanation: "not without its critics (litote)." },
          { s1: "A swing of that size is actually quite likely to reshape the race.", key: "HARDLY", s2: "A swing of that size is ___ unlikely to reshape the race.", accepted: ["hardly"], explanation: "hardly unlikely = bastante probable (litote)." },
          { s1: "Predicting the result with such limited data is genuinely complicated.", key: "STRAIGHTFORWARD", s2: "Predicting the result with such limited data is far from ___.", accepted: ["straightforward"], explanation: "far from straightforward (litote)." },
          { s1: "The candidate's reversal was actually extremely concerning to strategists.", key: "SOMEWHAT", s2: "The candidate's reversal was, to put it mildly, ___ concerning to strategists.", accepted: ["somewhat"], explanation: "somewhat concerning (understatement)." },
        ],
      },
      p5: {
        title: "The pollster who admitted the miss",
        text: "When the final results came in, considerably at odds with her firm's confidently published pre-election polling, Yuki Tanaka faced an uncomfortable choice most pollsters in her position would recognise: quietly bury the miss in a brief technical footnote, or address it publicly, in full, uncomfortable detail.\n\nShe chose the latter, publishing a lengthy public post-mortem that her own colleagues privately described, with characteristic industry understatement, as 'somewhat unusual' for a firm in her particular position.\n\n\"Our final figures proved far from accurate,\" she wrote with unusual directness for the industry, \"and it would be no small exaggeration to call this the most professionally uncomfortable week of my entire career.\"\n\nHer detailed analysis identified several genuine methodological weaknesses, including a subtle but consequential form of confirmation bias within her own team's modelling assumptions — a pattern she was, she readily admitted, hardly the first pollster to have fallen into.\n\n\"This is not to say polling itself is fundamentally broken,\" she clarified carefully in a widely shared follow-up interview. \"But it would be no small oversight to pretend our current methodology doesn't need considerable, urgent revision.\"\n\nThe swing voters who had ultimately decided the race, her subsequent analysis suggested, were not unlikely to have been systematically underrepresented in her firm's sampling frame — a technical failure with consequences that proved, in her own carefully chosen words, 'rather more significant than a minor footnote might initially suggest.'\n\nHer public candour, while genuinely uncomfortable for her firm in the short term, has since been cited approvingly by several industry bodies as a model for how pollsters ought honestly to respond when their own confident predictions turn out, as they occasionally inevitably will, to be wrong.",
        q: [
          mc("What choice did Yuki face after the results came in?", ["Whether to resign.", "Whether to bury the miss quietly or address it publicly in detail.", "Whether to sue a rival firm.", "Whether to stop polling entirely."], 1, "'quietly bury the miss in a brief technical footnote, or address it publicly, in full, uncomfortable detail'."),
          mc("How did her colleagues describe her chosen approach?", ["Completely normal.", "'Somewhat unusual', with characteristic industry understatement.", "Reckless and unprofessional.", "Required by law."], 1, "'her own colleagues privately described, with characteristic industry understatement, as 'somewhat unusual''."),
          mc("What methodological weakness did her analysis identify?", ["None at all.", "A subtle form of confirmation bias within her team's modelling.", "Deliberate data fabrication.", "A translation error."], 1, "'a subtle but consequential form of confirmation bias within her own team's modelling assumptions'."),
          mc("What does she say about polling as a whole?", ["It is fundamentally broken.", "It is not fundamentally broken, but needs urgent methodological revision.", "It should be banned.", "It requires no changes."], 1, "'This is not to say polling itself is fundamentally broken… it would be no small oversight to pretend our current methodology doesn't need considerable, urgent revision'."),
          mc("What happened to swing voters in her firm's sampling, according to her analysis?", ["They were overrepresented.", "They were not unlikely to have been systematically underrepresented.", "They were excluded on purpose.", "They had no effect on the result."], 1, "'the swing voters… were not unlikely to have been systematically underrepresented in her firm's sampling frame'."),
          mc("How has her public candour since been regarded by industry bodies?", ["Criticised harshly.", "Cited approvingly as a model for honest response to error.", "Completely ignored.", "Used to justify her dismissal."], 1, "'has since been cited approvingly by several industry bodies as a model for how pollsters ought honestly to respond'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Public opinion polling, for all its sophisticated statistical machinery, rests on an assumption that is by no means as straightforward as it might initially, casually appear. (1)___\n\nThat assumption is that a relatively small, carefully selected sample can reliably represent the views of an entire, considerably larger population. (2)___ When that assumption holds reasonably well, polling performs admirably; when it doesn't, the results can prove badly, sometimes spectacularly misleading.\n\nDeclining survey response rates have made this founding assumption considerably harder to satisfy reliably in recent years, as fewer and fewer people are willing to participate in traditional telephone or door-to-door polling at all. (3)___ Those who do still respond may differ systematically from those who no longer do.\n\nPollsters have responded with a range of technical adjustments — weighting, modelling, blending multiple methodologies — each designed to compensate for this growing, genuine representativeness gap. (4)___ None of these technical fixes, however sophisticated, offers anything close to a perfect, guaranteed solution.\n\nThis growing technical difficulty has coincided, not entirely coincidentally, with growing public scepticism toward polling more broadly, following several high-profile, widely publicised misses in recent major elections. (5)___ Trust, once genuinely lost, rebuilds itself only slowly, if indeed it rebuilds at all.\n\nWhat emerges from this genuinely difficult situation is an uncomfortable but arguably healthy lesson: polling numbers deserve real, informed scepticism, not blind, uncritical faith, however precise and authoritative any single figure might initially, superficially appear. (6)___ A margin of error, after all, is a confession of genuine uncertainty, not a minor footnote to be quietly overlooked.",
        options: [
          "That assumption, on reflection, is doing considerable quiet work.", // A -> gap1
          "Representativeness, in other words, is the whole quiet game.", // B -> gap2
          "Who stays silent, it turns out, matters as much as who speaks.", // C -> gap3
          "Clever fixes, however welcome, are not quite the same as certainty.", // D -> gap4
          "Scepticism of this kind, once earned, does not simply vanish.", // E -> gap5
          "That number, read carefully, was never meant as false comfort.", // F -> gap6
          "No pollster has ever faced declining survey response rates.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa suposición hace un trabajo silencioso considerable."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la representatividad es, en otras palabras, todo el juego."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: quién calla importa tanto como quién habla."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los arreglos ingeniosos no equivalen a certeza."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: un escepticismo así, una vez ganado, no desaparece sin más."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ese número nunca pretendió ser un falso consuelo."),
        ],
      },
      p7: {
        title: "Four people discuss public opinion and polling",
        text: "Read what four people say about public opinion and polling.\n\nA) DEV: Our local poll missed the result by a margin that was, to put it mildly, somewhat embarrassing for the whole team.\n\nB) FIONA: It's hardly surprising that trust in polling has declined, given how many high-profile misses we've all seen recently.\n\nC) KWAME: My own methodology was not without its critics, several of them quite persuasive, if I'm honest.\n\nD) NADIA: Predicting a genuinely close race with limited data is far from straightforward, whatever confident pundits might claim.\n",
        q: [
          mc("Whose local poll missed the result by an embarrassing margin?", ["A", "B", "C", "D"], 0, "Dev: 'Our local poll missed the result by a margin that was, to put it mildly, somewhat embarrassing'."),
          mc("Who says declining trust in polling is hardly surprising?", ["A", "B", "C", "D"], 1, "Fiona: 'It's hardly surprising that trust in polling has declined'."),
          mc("Whose methodology was not without its critics?", ["A", "B", "C", "D"], 2, "Kwame: 'My own methodology was not without its critics'."),
          mc("Who says predicting a close race with limited data is far from straightforward?", ["A", "B", "C", "D"], 3, "Nadia: 'Predicting a genuinely close race with limited data is far from straightforward'."),
          mc("Who mentions the team specifically felt embarrassed?", ["A", "B", "C", "D"], 0, "Dev: 'somewhat embarrassing for the whole team'."),
          mc("Who mentions high-profile misses generally?", ["A", "B", "C", "D"], 1, "Fiona: 'given how many high-profile misses we've all seen recently'."),
          mc("Who admits some critics were quite persuasive?", ["A", "B", "C", "D"], 2, "Kwame: 'several of them quite persuasive, if I'm honest'."),
          mc("Who mentions confident pundits specifically?", ["A", "B", "C", "D"], 3, "Nadia: 'whatever confident pundits might claim'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre las encuestas de opinión y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Polling remains a genuinely valuable democratic tool, offering the public and policymakers a reasonably accurate snapshot of collective opinion, despite its inevitable margin of error.'\n\nTEXTO 2: 'Declining response rates and growing methodological difficulty have made modern polling considerably less reliable than commonly assumed. The public places far too much confidence in numbers that deserve real scepticism.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA litote y UNA estructura de hedging. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'Why I do (or don't) trust opinion polls' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una empresa de encuestas cuestionando su metodología.\n· REVIEW de un artículo o programa de opinología (punditry) que te haya parecido especialmente bueno o malo.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha el monólogo (se oye dos veces) y completa los huecos con 1-3 palabras.", "This is Part Two. You will hear a pollster giving a talk about public opinion research. Our final figures proved far from accurate at the last election, and it would be no small exaggeration to call that the most uncomfortable week of my career. My subsequent analysis identified a subtle form of confirmation bias within our own modelling assumptions, a pattern I was, I readily admit, hardly the first pollster to fall into. This is not to say polling itself is fundamentally broken, but it would be no small oversight to pretend our methodology doesn't need urgent revision. The swing voters who decided that race were not unlikely to have been systematically underrepresented in our sampling frame. Declining response rates have made representative sampling considerably harder to achieve than it once reliably was. Some colleagues have responded by blending multiple methodologies, though none of these technical fixes offers anything close to a guaranteed solution. Public trust in polling, once genuinely lost through high-profile misses, rebuilds itself only slowly, if indeed it rebuilds at all. What I'd tell any pollster starting out today is simple: treat every confident number with the scepticism it actually, honestly deserves.", [
      fb("1. The final figures proved far from ___ at the last election.", ["accurate"], "'proved far from accurate'."),
      fb("2. The analysis identified a subtle form of ___ bias within their modelling.", ["confirmation"], "'a subtle form of confirmation bias'."),
      fb("3. This is not to say polling itself is fundamentally ___.", ["broken"], "'polling itself is fundamentally broken'."),
      fb("4. The methodology needs ___ revision, according to the pollster.", ["urgent"], "'needs urgent revision'."),
      fb("5. The swing voters were not unlikely to have been systematically ___.", ["underrepresented"], "'systematically underrepresented in our sampling frame'."),
      fb("6. Declining ___ rates have made representative sampling considerably harder.", ["response"], "'Declining response rates'."),
      fb("7. Some colleagues have responded by blending multiple ___.", ["methodologies"], "'blending multiple methodologies'."),
      fb("8. Public trust, once lost, rebuilds itself only ___.", ["slowly"], "'rebuilds itself only slowly'."),
      fb("9. Every confident number deserves real ___, according to the pollster.", ["scepticism"], "'treat every confident number with the scepticism it… deserves'."),
    ]),

    ...speakingParts({ p1: "si sueles confiar en las encuestas de opinión y por qué", p2: "dos imágenes de la opinión pública (una persona respondiendo a una encuesta telefónica y un panel de comentaristas políticos en televisión): comentadlas y decidid cuál representa mejor cómo se forma realmente la opinión pública hoy", p3: "qué influye más en la opinión pública (las encuestas y los datos, los comentaristas y la opinología, las redes sociales, la experiencia personal directa, los medios tradicionales): comentadlo y decidid lo más influyente" }),

    SUMMARY("Resumen del Día 37", [
      "Aprendido: la litote y el understatement (no small feat, not without merit, hardly surprising, far from straightforward, somewhat concerning).",
      "Vocabulario de la opinión pública y las encuestas. Reading & Use of English, Writing, Listening P2 y Speaking completos.",
      "Mañana: la ironía y la pregunta retórica en el artículo de opinión.",
    ]),
    INFO("Tarea para el Día 38", "Repasa el hedging y la litote de estos dos días. Mañana combinamos todo con la ironía y la pregunta retórica."),
  ],
};

// ───────────────────────── DÍA 38 ─────────────────────────
const DAY38 = {
  title: "Día 38 — La ironía y la pregunta retórica en el artículo de opinión · El periodismo de opinión y la retórica pública",
  description: "Marcadores de ironía verbal (allegedly, apparently, so-called, as it happens) y la pregunta retórica en el ensayo de opinión, combinados con el hedging y la litote de esta semana. Vocabulario del periodismo de opinión. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Reconocer y usar marcadores de ironía verbal y preguntas retóricas en el registro de opinión de nivel C2.",
    summary: "Ironía verbal/pregunta retórica; periodismo de opinión; Use of English P1-P7, Writing, Listening P3, Speaking P1-P3.",
    commonMistakes: ["usar la ironía sin ningún marcador, lo que puede sonar como una afirmación literal.", "abusar de las preguntas retóricas hasta que el texto suene forense en vez de persuasivo.", "confundir 'so-called' (irónico/escéptico) con un simple sinónimo de 'named'."],
    reviewPrompts: ["¿Qué efecto retórico tiene 'so-called' antes de un sustantivo?", "¿Recuerdas un ejemplo de pregunta retórica de un texto anterior de esta semana?"],
  },
  items: [
    TEXT("🎯 Hoy: la IRONÍA VERBAL y la PREGUNTA RETÓRICA en el artículo de opinión, combinadas con el hedging (Día 36) y la litote (Día 37) de esta semana. Vocabulario: el PERIODISMO DE OPINIÓN."),
    GRAMMAR("La ironía verbal y la pregunta retórica (C2)", `MARCADORES DE IRONÍA VERBAL:
· 'Allegedly' / 'apparently' — señalan distancia irónica del hablante respecto a una afirmación citada.
· 'So-called' — antepuesto a un sustantivo, cuestiona irónicamente su legitimidad: the so-called experts.
· 'As it happens' — introduce un dato irónicamente revelador que contradice lo esperado.
· Comillas de escepticismo ('scare quotes'): el "reformador" — la puntuación misma señala ironía en texto escrito.
PREGUNTA RETÓRICA en el ensayo de opinión:
· No busca respuesta literal; persuade sugiriendo que la respuesta es obvia: 'Is this really the standard we should accept?'
· Funciona bien como apertura o cierre de párrafo, nunca en exceso (máximo 1-2 por texto formal).`),
    grammarEx("Use of English — Ironía verbal y pregunta retórica", "Elige la opción correcta.", [
      mc("The ___ experts had, as it happens, never actually worked in the field they confidently discussed.", ["so-called", "genuine", "qualified"], 0, "so-called (ironía)."),
      mc("He ___ apologised, though his tone suggested otherwise entirely.", ["allegedly", "genuinely", "sincerely"], 0, "allegedly (distancia irónica)."),
      mc("Is this really the standard of debate we should now simply accept? (¿qué recurso es esta pregunta?)", ["pregunta retórica", "pregunta directa", "pregunta cerrada"], 0, "pregunta retórica — no busca respuesta literal."),
      mc("The committee's 'independent' review was, ___, chaired by the very official it was meant to scrutinise.", ["as it happens", "obviously", "clearly"], 0, "as it happens (ironía reveladora)."),
      mc("What, exactly, does 'accountability' mean if nobody is ever actually held accountable? (función retórica)", ["cuestiona irónicamente un término", "pide una definición literal", "es puramente informativa"], 0, "pregunta retórica que cuestiona irónicamente el término."),
      mc("The ___ reformer had spent decades quietly defending the very system he now claimed to oppose.", ["so-called", "genuine", "committed"], 0, "so-called (ironía)."),
    ]),
    GRAMMAR("Vocabulario del día — El periodismo de opinión (C2)", "Léxico de maestría sobre periodismo de opinión y retórica pública."),
    deck("C2 S8D38 — El periodismo de opinión", [
      ["op-ed", "artículo de opinión", "Her op-ed sparked considerable debate across the entire political spectrum.", "sustantivo", "ɒp ed"],
      ["rhetorical device", "recurso retórico", "Skilled columnists deploy rhetorical devices to persuade, not merely inform.", "sustantivo", "rɪˈtɒrɪkl dɪˈvaɪs"],
      ["loaded language", "lenguaje cargado, tendencioso", "Loaded language can subtly shape reader opinion without appearing to argue.", "sustantivo", "ˈləʊdɪd ˈlæŋɡwɪdʒ"],
      ["straw man", "hombre de paja (falacia)", "The columnist's argument relied heavily on a rather obvious straw man.", "sustantivo", "strɔː mæn"],
      ["false balance", "falso equilibrio", "False balance can mislead by giving equal weight to unequal evidence.", "sustantivo", "fɔːls ˈbæləns"],
      ["sensationalism", "sensacionalismo", "Sensationalism attracts clicks but often erodes long-term public trust.", "sustantivo", "senˈseɪʃənəlɪzəm"],
      ["clickbait", "cebo de clics", "Clickbait headlines routinely promise considerably more than articles deliver.", "sustantivo", "ˈklɪkbeɪt"],
      ["spin", "manipulación interesada (de un mensaje)", "Political spin often obscures rather than clarifies the underlying facts.", "sustantivo", "spɪn"],
      ["credibility", "credibilidad", "A publication's credibility, once lost, proves genuinely difficult to rebuild.", "sustantivo", "ˌkredəˈbɪləti"],
      ["pundit", "comentarista, tertuliano", "Television pundits rarely face real consequences for confidently wrong predictions.", "sustantivo", "ˈpʌndɪt"],
    ]),
    vocabEx("Vocabulario — El periodismo de opinión", "Elige la opción correcta.", [
      mc("A short opinion article, typically by an outside contributor:", ["op-ed", "straw man", "spin"], 0, "op-ed."),
      mc("Words chosen to provoke an emotional reaction rather than inform neutrally:", ["loaded language", "rhetorical device", "credibility"], 0, "loaded language."),
      mc("A distorted, weakened version of an opponent's argument, easier to attack:", ["straw man", "false balance", "clickbait"], 0, "straw man."),
      mc("Presenting two sides as equally valid despite unequal evidence:", ["false balance", "sensationalism", "spin"], 0, "false balance."),
      mc("Exaggerated, shocking presentation designed to provoke strong reaction:", ["sensationalism", "credibility", "op-ed"], 0, "sensationalism."),
      mc("A headline written to attract clicks rather than accurately inform:", ["clickbait", "loaded language", "pundit"], 0, "clickbait."),
    ]),

    ...uoe({
      p1: {
        title: "The so-called reformer",
        text: "The so-called (1)___, having built an entire public career denouncing institutional corruption, was, as it happens, discovered quietly accepting substantial payments from the very industry he had spent decades publicly attacking. Is this really the standard of public accountability we should now simply, quietly accept? His allegedly (2)___ apology, delivered through a carefully worded press statement rather than any direct public appearance, convinced remarkably few of his own longtime supporters. The op-ed that eventually broke the story deployed considerably more restraint than the scandal itself might reasonably have (3)___, favouring careful hedged language over the loaded, sensationalist prose a lesser publication might understandably have chosen instead. What, exactly, does 'reform' mean, the piece pointedly (4)___, if the reformer himself proves willing to be quietly bought? The scandal's genuine significance lay, as it happens, considerably less in the payments themselves than in what they (5)___ about an entire system built on carefully performed, rather than genuinely practised, public virtue. Whether the so-called reformer's career (6)___ this particular scandal remains, for now, an open and genuinely uncertain question.",
        q: [
          mc("(1)", ["reformer", "politician", "activist", "journalist"], 0, "'The so-called reformer'."),
          mc("(2)", ["sincere", "genuine", "contrite", "public"], 2, "'His allegedly contrite apology' — ironía: se duda de la sinceridad."),
          mc("(3)", ["warranted", "deserved", "justified", "merited"], 0, "'the scandal itself might reasonably have warranted'."),
          mc("(4)", ["asked", "wondered", "questioned", "demanded"], 2, "'the piece pointedly questioned'."),
          mc("(5)", ["revealed", "suggested", "implied", "showed"], 1, "'what they suggested about an entire system'."),
          mc("(6)", ["survives", "outlasts", "withstands", "endures"], 0, "'the reformer's career survives this particular scandal'."),
        ],
      },
      p2: {
        title: "What 'independent' really means",
        text: "The committee's 'independent' review was, as it happens, chaired by (1)___ very official whose conduct it was meant to impartially scrutinise — a detail the committee's own press release conspicuously failed even (2)___ mention. So-called independent oversight, the columnist wryly observed, often proves independent chiefly in name (3)___, rather than in any genuinely meaningful practical sense. What, exactly, does 'accountability' mean, one might reasonably (4)___, if the very people meant to enforce it remain free to investigate themselves? The piece's carefully restrained, hedged tone — 'it would appear that', 'one might reasonably conclude' — proved, if anything, considerably more devastating than any openly angry, unrestrained denunciation could plausibly have (5)___. Readers, the columnist noted with characteristic dry understatement, were left to draw their (6)___ conclusions about what such carefully arranged 'independence' genuinely, actually amounted to in practice.",
        q: [
          fb("(1)", ["the"], "'chaired by the very official'."),
          fb("(2)", ["to"], "'failed even to mention'."),
          fb("(3)", ["alone", "only"], "'independent chiefly in name alone/only'."),
          fb("(4)", ["ask", "wonder"], "'one might reasonably ask/wonder'."),
          fb("(5)", ["managed", "achieved"], "'could plausibly have managed/achieved'."),
          fb("(6)", ["own"], "'left to draw their own conclusions'."),
        ],
      },
      p3: {
        title: "The rhetoric of opinion writing",
        text: "Skilled opinion writers rely on a considerably more (1)___ rhetorical toolkit than casual readers often, quite reasonably, assume — hedged modality, deliberate understatement, and carefully placed irony all working together toward genuine (2)___. The rhetorical question, deployed sparingly and precisely, can accomplish considerably more genuine (3)___ than any direct, unhedged assertion of the same underlying point ever quite manages to. So-called objective news reporting, by contrast, deliberately avoids most of this rhetorical (4)___, aiming instead for a more neutral, considerably less persuasive register entirely. This meaningful (5)___ between opinion and straight reporting has, some media critics increasingly worry, grown genuinely blurred in an media landscape where clear, honest labelling no longer reliably, consistently guides the average reader. Distinguishing careful, hedged (6)___ from loaded, manipulative rhetoric has consequently become an increasingly essential, genuinely urgent media literacy skill.",
        items: [
          { root: "sophisticate", accepted: ["sophisticated"], hint: "'a considerably more sophisticated rhetorical toolkit' (adjetivo)." },
          { root: "persuade", accepted: ["persuasion"], hint: "'all working together toward genuine persuasion' (sustantivo)." },
          { root: "effect", accepted: ["effect"], hint: "'considerably more genuine effect' (sustantivo, forma base)." },
          { root: "flourish", accepted: ["flourish"], hint: "'avoids most of this rhetorical flourish' (sustantivo, forma base)." },
          { root: "distinct", accepted: ["distinction"], hint: "'This meaningful distinction between opinion and straight reporting' (sustantivo)." },
          { root: "argue", accepted: ["argumentation"], hint: "'Distinguishing careful, hedged argumentation from loaded… rhetoric' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — ironía verbal y pregunta retórica",
        items: [
          { s1: "The experts, who apparently had no real experience, spoke confidently anyway.", key: "SO-CALLED", s2: "The ___ experts had, as it happens, never actually worked in the field.", accepted: ["so-called"], explanation: "so-called (ironía)." },
          { s1: "He apparently apologised, though he clearly didn't mean it.", key: "ALLEGEDLY", s2: "He ___ apologised, though his tone suggested otherwise entirely.", accepted: ["allegedly"], explanation: "allegedly (distancia irónica)." },
          { s1: "Interestingly, the 'independent' review was chaired by the very official it examined.", key: "HAPPENS", s2: "The 'independent' review was, as it ___, chaired by the very official it examined.", accepted: ["happens"], explanation: "as it happens (ironía reveladora)." },
          { s1: "Surely this isn't the standard of debate we should accept?", key: "REALLY", s2: "Is this ___ the standard of debate we should now simply accept?", accepted: ["really"], explanation: "pregunta retórica." },
          { s1: "What does 'accountability' even mean if nobody is ever held accountable?", key: "EXACTLY", s2: "What, ___, does 'accountability' mean if nobody is ever held accountable?", accepted: ["exactly"], explanation: "pregunta retórica enfática." },
        ],
      },
      p5: {
        title: "The columnist who never raised her voice",
        text: "Unlike many of her more openly combative colleagues, columnist Priya Sharma had built an entire, considerable reputation on a deceptively quiet, carefully restrained rhetorical style — one that relied far more heavily on precisely placed irony and pointed rhetorical questions than on any direct, openly angry denunciation of her frequent subjects.\n\n\"The so-called 'straight talkers' in this business,\" she once remarked dryly in a rare public interview, \"often say considerably less, when you actually examine it closely, than a single well-placed rhetorical question manages to say instead.\"\n\nHer most widely discussed piece, examining a supposedly 'independent' regulatory review, never once directly accused anyone of genuine wrongdoing. Instead, it simply, quietly noted — as it happens — that the review's chair had, some years earlier, worked directly for the very industry now under formal scrutiny.\n\n\"Is this really the kind of independence we should quietly accept as standard?\" the piece asked, in its now-famous closing line, without ever actually, directly answering its own carefully posed question.\n\nThe piece's understated, deliberately restrained tone proved, if anything, considerably more devastating than an angrier, more openly accusatory approach might plausibly have achieved. Readers, largely left to draw their own conclusions from carefully arranged facts, reported finding the piece considerably more persuasive than more openly editorialising competitors covering precisely the same underlying story.\n\n\"I've never found it necessary to actually shout,\" Sharma reflected afterward, with characteristic dry understatement, \"when a carefully chosen 'as it happens' does, in my own honest experience, so very much more of the genuinely persuasive work instead.\"\n\nHer restrained approach, whatever its considerable rhetorical sophistication, has not been entirely without its own critics — some colleagues argue such careful indirection can itself become a kind of evasion, implying serious wrongdoing without ever quite explicitly asserting it outright.",
        q: [
          mc("How does Priya's rhetorical style differ from her colleagues'?", ["It's more openly angry.", "It relies on precisely placed irony and rhetorical questions rather than direct denunciation.", "It avoids all opinion entirely.", "It's identical to theirs."], 1, "'one that relied far more heavily on precisely placed irony and pointed rhetorical questions than on any direct, openly angry denunciation'."),
          mc("What did her most discussed piece reveal about the review's chair?", ["Nothing significant.", "He had previously worked for the industry now under scrutiny.", "He was completely unqualified.", "He resigned voluntarily."], 1, "'the review's chair had, some years earlier, worked directly for the very industry now under formal scrutiny'."),
          mc("How does the piece end?", ["With a direct accusation.", "With a rhetorical question left unanswered.", "With an apology.", "With a formal complaint."], 1, "'the piece asked, in its now-famous closing line, without ever actually, directly answering its own carefully posed question'."),
          mc("How did readers respond to the piece's tone?", ["They found it unpersuasive.", "They found it considerably more persuasive than more openly editorialising competitors.", "They ignored it entirely.", "They found it confusing."], 1, "'readers… reported finding the piece considerably more persuasive than more openly editorialising competitors'."),
          mc("What does Priya say about shouting versus subtlety?", ["Shouting is always more effective.", "A carefully chosen 'as it happens' does more persuasive work than shouting.", "She has never used subtlety.", "Both are equally ineffective."], 1, "'a carefully chosen 'as it happens' does… so very much more of the genuinely persuasive work instead'."),
          mc("What criticism do some colleagues raise about her approach?", ["That it's too aggressive.", "That careful indirection can itself become a kind of evasion.", "That it's too simplistic.", "That she never writes about real issues."], 1, "'such careful indirection can itself become a kind of evasion, implying serious wrongdoing without ever quite explicitly asserting it outright'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Irony, deployed skilfully in opinion writing, achieves something direct statement alone rarely quite manages: it invites the reader to draw their own conclusion, rather than simply, passively receiving the writer's. (1)___\n\nThis particular quality — irony's implicit invitation to active reader participation — helps explain why restrained, ironic prose often proves considerably more persuasive than openly angry denunciation, however emotionally satisfying the latter might feel to write. (2)___ A reader who reaches a conclusion themselves tends to hold it more firmly than one simply told what to think.\n\nThe rhetorical question serves a closely related function, posing what appears to be a genuine query while actually, quietly guiding the reader firmly toward one particular, intended answer. (3)___ Its apparent openness is, in practice, rather carefully managed.\n\nBoth devices, however, carry genuine risk when used without sufficient skill or restraint. (4)___ Excessive irony can blur into simple sneering; excessive rhetorical questioning can feel manipulative rather than genuinely persuasive.\n\nThe genuinely skilled opinion writer, most experienced editors agree, deploys both devices sparingly, precisely, and always in careful service of a clearly underlying, well-supported argument. (5)___ Used merely for cleverness alone, both devices quickly grow tiresome rather than persuasive.\n\nWhat ultimately distinguishes masterful opinion writing from merely competent commentary is, in the end, precisely this careful restraint — knowing when a pointed question or a single ironic phrase will do considerably more genuine work than any lengthy, direct denunciation ever quite could. (6)___ Less, in this particular craft, really can mean considerably more.",
        options: [
          "That invitation, quietly extended, does real persuasive work.", // A -> gap1
          "Ownership of a conclusion, once earned, tends to stick.", // B -> gap2
          "Genuine openness, on closer inspection, was never really the point.", // C -> gap3
          "Neither device, handled carelessly, stays harmless for long.", // D -> gap4
          "Restraint, oddly enough, is the harder discipline to master.", // E -> gap5
          "That particular lesson, however old, rarely goes out of fashion.", // F -> gap6
          "No opinion writer has ever used irony or rhetorical questions.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa invitación, extendida con discreción, hace un trabajo persuasivo real."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la propiedad de una conclusión, una vez ganada, tiende a perdurar."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la apertura genuina nunca fue realmente el objetivo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ninguno de los dos recursos, usado con descuido, sigue siendo inofensivo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la contención, curiosamente, es la disciplina más difícil de dominar."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa lección, aunque antigua, rara vez pasa de moda."),
        ],
      },
      p7: {
        title: "Four opinion writers discuss their craft",
        text: "Read what four opinion writers say about irony and rhetorical devices in their own writing.\n\nA) TARIQ: My so-called 'balanced' piece was, as it happens, more persuasive precisely because I never raised my voice once.\n\nB) ELIF: I rely heavily on rhetorical questions, though I try never to overuse them — one or two per piece, at most.\n\nC) MASON: Is this really the standard we should accept? That question opened my most-shared column ever, honestly.\n\nD) ROSA: Loaded language tempts every opinion writer eventually, though I try genuinely hard to resist it.\n",
        q: [
          mc("Whose 'balanced' piece was, as it happens, more persuasive for staying calm?", ["A", "B", "C", "D"], 0, "Tariq: 'My so-called 'balanced' piece was, as it happens, more persuasive precisely because I never raised my voice once'."),
          mc("Who limits themselves to one or two rhetorical questions per piece?", ["A", "B", "C", "D"], 1, "Elif: 'I try never to overuse them — one or two per piece, at most'."),
          mc("Whose most-shared column opened with a rhetorical question?", ["A", "B", "C", "D"], 2, "Mason: 'That question opened my most-shared column ever'."),
          mc("Who admits being tempted by loaded language but resists it?", ["A", "B", "C", "D"], 3, "Rosa: 'Loaded language tempts every opinion writer eventually, though I try genuinely hard to resist it'."),
          mc("Who describes their piece as 'so-called balanced'?", ["A", "B", "C", "D"], 0, "Tariq: 'My so-called 'balanced' piece'."),
          mc("Who mentions relying heavily on rhetorical questions generally?", ["A", "B", "C", "D"], 1, "Elif: 'I rely heavily on rhetorical questions'."),
          mc("Who says the moment was 'honestly' a highlight?", ["A", "B", "C", "D"], 2, "Mason: 'opened my most-shared column ever, honestly'."),
          mc("Who says the temptation applies to every opinion writer eventually?", ["A", "B", "C", "D"], 3, "Rosa: 'Loaded language tempts every opinion writer eventually'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el periodismo de opinión y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Opinion writers should state their views directly and forcefully. Excessive hedging and irony can obscure genuine argument and leave readers confused about the writer's actual position.'\n\nTEXTO 2: 'Restrained, ironic prose, deployed skilfully, is often far more persuasive than open denunciation. Readers who reach their own conclusions hold them more firmly than those simply told what to think.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN marcador de ironía verbal (so-called, allegedly, as it happens) y UNA pregunta retórica. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO de opinión sobre un tema de actualidad, usando al menos una pregunta retórica y un marcador de ironía.\n· CARTA/EMAIL formal a un periódico respondiendo críticamente a un artículo de opinión reciente.\n· REVIEW de una columna o artículo de opinión que te haya parecido especialmente persuasivo o manipulador.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha la conversación (se oye dos veces) entre dos columnistas hablando de su oficio.", "This is Part Three. You will hear a conversation between two opinion columnists, Priya and Tariq, discussing their craft. Priya: The so-called 'independent' reviews I've covered are, as it happens, rarely independent at all. Tariq: I've noticed that too — my most persuasive piece never once raised its voice, honestly. Priya: Is this really the standard of accountability we should quietly accept? That's the question I keep coming back to. Tariq: Rhetorical questions work best sparingly, I think — one or two per piece, never more than that. Priya: Agreed. Loaded language tempts every writer eventually, but I try genuinely hard to resist it. Tariq: So do I. I'd rather let the facts speak, quietly, than shout over them. Priya: Restraint, oddly enough, is the harder discipline to master in this business. Tariq: It really is — but it's also, in my experience, considerably more persuasive in the end.", [
      mc("1. What does Priya say about 'independent' reviews she's covered?", ["They are always genuinely independent.", "They are rarely independent at all, as it happens.", "She has never covered one.", "They are irrelevant to her work."], 1, "'The so-called 'independent' reviews I've covered are, as it happens, rarely independent at all'."),
      mc("2. What does Tariq say about his most persuasive piece?", ["It was his angriest piece.", "It never once raised its voice.", "It was never published.", "It used no rhetorical devices."], 1, "'my most persuasive piece never once raised its voice, honestly'."),
      mc("3. How often does Tariq think rhetorical questions work best?", ["Constantly throughout a piece.", "Sparingly — one or two per piece.", "Never at all.", "Only in the conclusion."], 1, "'Rhetorical questions work best sparingly… one or two per piece, never more than that'."),
      mc("4. What does Priya say about loaded language?", ["She never feels tempted by it.", "It tempts every writer, but she tries hard to resist it.", "She uses it deliberately and often.", "It is essential to good writing."], 1, "'Loaded language tempts every writer eventually, but I try genuinely hard to resist it'."),
      mc("5. What do both agree about restraint?", ["It is easy to master.", "It is the harder discipline to master, but more persuasive.", "It is unnecessary in opinion writing.", "It weakens an argument."], 1, "'Restraint, oddly enough, is the harder discipline to master… but it's also… considerably more persuasive in the end'."),
    ]),

    ...speakingParts({ p1: "si lees o escuchas habitualmente artículos de opinión y qué opinas de ellos", p2: "dos imágenes del periodismo de opinión (un titular sensacionalista en un móvil y una columna de opinión cuidadosamente escrita en un periódico impreso): comentadlas y decidid cuál representa mejor el periodismo de opinión responsable", p3: "qué hace que un artículo de opinión sea genuinamente persuasivo (el uso de la ironía, las preguntas retóricas, la evidencia sólida, el tono moderado, la pasión visible): comentadlo y decidid lo más persuasivo" }),

    SUMMARY("Resumen del Día 38", [
      "Aprendido: marcadores de ironía verbal (allegedly, apparently, so-called, as it happens) y la pregunta retórica en el ensayo de opinión.",
      "Vocabulario del periodismo de opinión. Reading & Use of English, Writing, Listening P3 y Speaking completos.",
      "Mañana: simulacro cronometrado combinando hedging, litote e ironía/pregunta retórica.",
    ]),
    INFO("Tarea para el Día 39", "Repasa el hedging, la litote y la ironía verbal de esta semana. Mañana: simulacro cronometrado combinado."),
  ],
};

// ───────────────────────── DÍA 39 ─────────────────────────
const DAY39 = {
  title: "Día 39 — Simulacro cronometrado combinado · La libertad de prensa y la rendición de cuentas",
  description: "Simulacro cronometrado combinando el hedging/modalidad epistémica, la litote/understatement, y la ironía verbal/pregunta retórica en los mismos textos. Vocabulario de la libertad de prensa. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los recursos de modalidad y retórica de la semana.",
    summary: "Simulacro cronometrado: hedging + litote + ironía/pregunta retórica combinados; libertad de prensa; Use of English, Writing, Listening P4, Speaking.",
    reviewPrompts: ["¿Qué recurso de esta semana usarías con más confianza en tu propio Writing?", "¿Terminaste el Reading & Use of English dentro del tiempo real (90 min)?"],
  },
  items: [
    TEXT("⏱️ Día 39 — SIMULACRO CRONOMETRADO. Hoy combinas el HEDGING/MODALIDAD EPISTÉMICA, la LITOTE/UNDERSTATEMENT, y la IRONÍA VERBAL/PREGUNTA RETÓRICA. Vocabulario: la LIBERTAD DE PRENSA. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 8", `1) HEDGING: could arguably, might well, would appear to suggest, by no means, far from conclusive.
2) LITOTE/UNDERSTATEMENT: not unlikely, no small feat, not without merit, hardly surprising, somewhat concerning.
3) IRONÍA VERBAL/PREGUNTA RETÓRICA: allegedly, so-called, as it happens; 'Is this really...?', 'What, exactly, does X mean if...?'
Combínalos con naturalidad — uno o dos bien colocados por párrafo comunican más que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S8, Días 36-38)", "Elige la opción correcta.", [
      mc("The evidence would ___ to suggest editorial failure, though further review is needed.", ["appear", "clearly show", "obviously prove"], 0, "would appear to suggest (hedging, Día 36)."),
      mc("Surviving that scandal intact was, by any measure, ___ small feat.", ["no", "a", "some"], 0, "no small feat (litote, Día 37)."),
      mc("The ___ 'independent' inquiry was, as it happens, chaired by the accused party himself.", ["so-called", "genuine", "formal"], 0, "so-called (ironía, Día 38)."),
      mc("It could ___ be argued that press freedom has quietly eroded in recent years.", ["arguably", "certainly", "obviously"], 0, "could arguably be argued (hedging)."),
      mc("Is this ___ the standard of transparency the public should accept?", ["really", "obviously", "clearly"], 0, "pregunta retórica."),
      mc("The claim remains ___ from conclusive, pending further corroboration.", ["far", "close", "near"], 0, "far from conclusive (litote)."),
    ]),
    GRAMMAR("Vocabulario del día — La libertad de prensa y la rendición de cuentas (C2)", "Léxico de maestría sobre libertad de prensa."),
    deck("C2 S8D39 — La libertad de prensa y la rendición de cuentas", [
      ["press freedom", "libertad de prensa", "Press freedom remains under sustained pressure in several democracies today.", "sustantivo", "pres ˈfriːdəm"],
      ["censorship", "censura", "State censorship of independent media has intensified considerably in recent years.", "sustantivo", "ˈsensəʃɪp"],
      ["defamation", "difamación", "Defamation lawsuits are sometimes used to silence legitimate investigative reporting.", "sustantivo", "ˌdefəˈmeɪʃn"],
      ["public interest", "interés público", "Courts must weigh genuine public interest against an individual's right to privacy.", "sustantivo", "ˈpʌblɪk ˈɪntrəst"],
      ["source protection", "protección de fuentes", "Source protection laws encourage whistleblowers to come forward without undue fear.", "sustantivo", "sɔːs prəˈtekʃn"],
      ["accountability journalism", "periodismo de rendición de cuentas", "Accountability journalism holds powerful institutions to genuine public scrutiny.", "sustantivo", "əˌkaʊntəˈbɪləti ˈdʒɜːnəlɪzəm"],
      ["media plurality", "pluralismo mediático", "Media plurality ensures no single owner can dominate public discourse entirely.", "sustantivo", "ˈmiːdiə plʊˈræləti"],
      ["gag order", "orden de silencio, mordaza judicial", "The controversial gag order prevented any public discussion of the ongoing case.", "sustantivo", "ɡæɡ ˈɔːdə"],
      ["retraction", "rectificación, retractación", "The paper issued a formal retraction once the error became genuinely undeniable.", "sustantivo", "rɪˈtrækʃn"],
      ["transparency", "transparencia", "Genuine transparency, however uncomfortable, ultimately strengthens public institutional trust.", "sustantivo", "trænsˈpærənsi"],
    ]),
    vocabEx("Vocabulario — La libertad de prensa y la rendición de cuentas", "Elige la opción correcta.", [
      mc("The right of the press to report without undue government interference:", ["press freedom", "defamation", "gag order"], 0, "press freedom."),
      mc("A legal order preventing publication or discussion of certain information:", ["gag order", "retraction", "source protection"], 0, "gag order."),
      mc("A false published statement damaging someone's reputation:", ["defamation", "transparency", "public interest"], 0, "defamation."),
      mc("Legal safeguards allowing journalists to keep informants confidential:", ["source protection", "media plurality", "censorship"], 0, "source protection."),
      mc("Diversity of ownership and viewpoint across media outlets:", ["media plurality", "gag order", "defamation"], 0, "media plurality."),
      mc("A formal, public correction of a previously published error:", ["retraction", "censorship", "transparency"], 0, "retraction."),
    ]),

    ...uoe({
      p1: {
        title: "The gag order that backfired",
        text: "The court's gag order, intended to protect the ongoing investigation's integrity, would (1)___ to have achieved precisely the opposite of its stated purpose, generating considerably more public speculation than open reporting ever plausibly might have. Is this really the kind of press freedom protection the public should quietly (2)___? The so-called 'protective' measure was, as it happens, requested by lawyers representing the very institution the investigation itself was actually examining. It could arguably be (3)___ that gag orders, however well-intentioned in theory, often achieve, in genuine practice, precisely the (4)___ of their stated intention. Surviving the resulting public backlash largely intact proved, for the court, no small (5)___, given how thoroughly the order's dubious origins eventually, publicly emerged. What, exactly, does 'judicial protection' mean, one commentator pointedly (6)___, if it primarily protects the powerful from scrutiny rather than protecting genuine due process itself?",
        q: [
          mc("(1)", ["appear", "seem", "turn out"], 0, "'would appear to have achieved'."),
          mc("(2)", ["accept", "expect", "tolerate"], 0, "'the public should quietly accept' — pregunta retórica."),
          mc("(3)", ["argued", "said", "claimed"], 0, "'could arguably be argued'."),
          mc("(4)", ["opposite", "same", "result"], 0, "'precisely the opposite of its stated intention'."),
          mc("(5)", ["feat", "task", "job"], 0, "'proved… no small feat' — litote."),
          mc("(6)", ["asked", "wondered", "questioned"], 2, "'one commentator pointedly questioned'."),
        ],
      },
      p2: {
        title: "Source protection under pressure",
        text: "It remains widely (1)___ among press freedom advocates that robust source protection is by no means a peripheral, minor legal detail but rather a genuinely foundational requirement for accountability journalism to function at all. Journalists who cannot credibly (2)___ their sources will, unsurprisingly, find fewer whistleblowers willing to come forward with genuinely important information. The so-called 'national security' justifications increasingly offered for weakening source protection are, as it (3)___, frequently deployed against reporting that embarrassed officials rather than genuinely endangered anyone. Is this really the balance between security and accountability that a healthy democracy should quietly (4)___? Media plurality, meanwhile, faces its own, related pressure, as a shrinking number of owners increasingly (5)___ an ever-larger share of total public discourse. Far (6)___ resolved, these overlapping tensions between press freedom, security, and ownership concentration look set to intensify considerably over the coming decade.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged among press freedom advocates'."),
          fb("(2)", ["protect"], "'cannot credibly protect their sources'."),
          fb("(3)", ["happens"], "'as it happens' — ironía."),
          fb("(4)", ["accept"], "'a healthy democracy should quietly accept' — pregunta retórica."),
          fb("(5)", ["control", "dominate"], "'an ever-larger share of… discourse' → control/dominate."),
          fb("(6)", ["from"], "'Far from resolved' — litote."),
        ],
      },
      p3: {
        title: "Accountability without retribution",
        text: "Genuine accountability journalism requires a delicate, carefully calibrated (1)___ between rigorous, honest scrutiny of power and responsible, fair treatment of individuals who may, in the end, prove genuinely innocent of any serious wrongdoing. Publications that (2)___ this balance, favouring sensationalist certainty over careful hedged language, risk both genuine legal liability and, considerably more importantly, real, lasting harm to wrongly accused individuals. The considerable (3)___ between accountability and defamation law reflects this genuinely difficult underlying tension, attempting to protect legitimate reporting while still deterring genuinely reckless, careless publication. Courts increasingly (4)___ evidence of careful editorial process — corroboration, hedged language, genuine attempts at balance — when determining whether contested reporting deserves legal protection. This growing judicial (5)___ to responsible journalistic method, whatever its imperfections, offers some genuine institutional (6)___ for publications committed to rigorous, careful accountability work.",
        items: [
          { root: "balance", accepted: ["balance"], hint: "'a delicate, carefully calibrated balance' (sustantivo, forma base)." },
          { root: "neglect", accepted: ["neglect"], hint: "'Publications that neglect this balance' (verbo, forma base)." },
          { root: "tense", accepted: ["tension"], hint: "'The considerable tension between accountability and defamation law' (sustantivo)." },
          { root: "value", accepted: ["value"], hint: "'Courts increasingly value evidence of careful editorial process' (verbo, forma base)." },
          { root: "sensitive", accepted: ["sensitivity"], hint: "'This growing judicial sensitivity to responsible… method' (sustantivo)." },
          { root: "protect", accepted: ["protection"], hint: "'offers some genuine institutional protection' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S8",
        items: [
          { s1: "The gag order seems to have achieved the opposite of its purpose.", key: "APPEAR", s2: "The gag order would ___ to have achieved the opposite of its purpose.", accepted: ["appear"], explanation: "would appear to (hedging)." },
          { s1: "Surviving the backlash intact was actually a considerable achievement.", key: "SMALL", s2: "Surviving the backlash intact proved no ___ feat.", accepted: ["small"], explanation: "no small feat (litote)." },
          { s1: "The supposedly 'independent' inquiry was, interestingly, chaired by the accused.", key: "HAPPENS", s2: "The 'independent' inquiry was, as it ___, chaired by the accused.", accepted: ["happens"], explanation: "as it happens (ironía)." },
          { s1: "It's possible to argue that press freedom has quietly eroded.", key: "ARGUABLY", s2: "It could ___ be argued that press freedom has quietly eroded.", accepted: ["arguably"], explanation: "could arguably (hedging)." },
          { s1: "Surely this isn't the standard of transparency we should accept?", key: "REALLY", s2: "Is this ___ the standard of transparency we should accept?", accepted: ["really"], explanation: "pregunta retórica." },
        ],
      },
      p5: {
        title: "The reporter who protected her source for a decade",
        text: "For nearly ten years, reporter Elena Vasquez had faced repeated, increasingly aggressive legal pressure to reveal the identity of the confidential source behind one of her career's most significant investigative stories — pressure she had, throughout, consistently and firmly resisted.\n\n\"The so-called 'national security' justification offered for demanding my source's identity was, as it happens, never once substantiated with any genuine, credible evidence,\" she noted in a recent retrospective interview marking the story's tenth anniversary.\n\nHer refusal, though it eventually resulted in a brief, genuinely uncomfortable period of detention for contempt of court, proved no small feat of professional and personal principle, sustained across nearly a decade of considerable, ongoing legal and financial pressure.\n\n\"It could arguably be maintained that my case set a genuinely important precedent for source protection,\" she reflected, with characteristic professional modesty, \"though I'd hardly claim sole credit — countless other journalists faced similar, equally difficult pressure before and alongside me.\"\n\nIs this really the price a functioning democracy should quietly require its journalists to pay for protecting legitimate, genuinely important public interest reporting? The question, she suggested, remains far from adequately resolved even now, a full decade later.\n\n\"What, exactly, does source protection mean,\" she asked pointedly in closing her interview, \"if journalists must risk genuine, serious personal consequence every single time a powerful institution decides it would rather not be scrutinised at all?\"\n\nHer source, whose identity remains protected to this day, later confirmed privately — through an intermediary, as it happens — that Elena's steadfast refusal had, quite simply, made the difference between coming forward at all and remaining permanently, silently anonymous.",
        q: [
          mc("What pressure did Elena face for nearly a decade?", ["Pressure to publish faster.", "Pressure to reveal her confidential source's identity.", "Pressure to retract the story.", "Pressure to change employers."], 1, "'faced repeated, increasingly aggressive legal pressure to reveal the identity of the confidential source'."),
          mc("What does she say about the 'national security' justification?", ["It was fully substantiated.", "It was never once substantiated with credible evidence, as it happens.", "It was irrelevant to her case.", "She agreed with it entirely."], 1, "'was, as it happens, never once substantiated with any genuine, credible evidence'."),
          mc("What happened as a result of her refusal?", ["Nothing at all.", "A brief period of detention for contempt of court.", "Immediate dismissal from her job.", "A large financial reward."], 1, "'it eventually resulted in a brief, genuinely uncomfortable period of detention for contempt of court'."),
          mc("How does she describe her role in setting a precedent?", ["She claims sole credit.", "She says she'd hardly claim sole credit, as others faced similar pressure.", "She denies any precedent was set.", "She says it was accidental."], 1, "'I'd hardly claim sole credit — countless other journalists faced similar… pressure before and alongside me'."),
          mc("What question does she ask about source protection?", ["Whether it matters at all.", "What it means if journalists must risk serious consequences to uphold it.", "Whether it should be abolished.", "Whether it applies only to major stories."], 1, "'What, exactly, does source protection mean… if journalists must risk genuine, serious personal consequence'."),
          mc("What did her source later confirm?", ["Regret about coming forward.", "That her refusal made the difference between coming forward and remaining anonymous.", "That the story was exaggerated.", "That they wished to be revealed now."], 1, "'Elena's steadfast refusal had… made the difference between coming forward at all and remaining permanently, silently anonymous'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Press freedom, notwithstanding its formal legal protection in most democracies, remains considerably more fragile in genuine practice than its confident constitutional guarantees might initially, reassuringly suggest. (1)___\n\nFormal legal protection, however reassuring on paper, does little to shield journalists from more subtle, harder-to-litigate pressure: defamation threats designed less to win in court than simply to exhaust a publication's limited resources, or coordinated harassment campaigns intended to discourage particular lines of reporting altogether. (2)___ Such pressure rarely violates any specific law, yet chills reporting all the same.\n\nSource protection faces its own, closely related vulnerability, as governments increasingly invoke broad national security justifications to compel journalists toward revealing confidential informants. (3)___ Once a source fears exposure, whistleblowers understandably become considerably harder to find.\n\nMedia ownership concentration compounds these difficulties further still, as an ever-shrinking number of owners control an ever-larger share of total public discourse across many democracies. (4)___ Diverse, genuinely independent ownership, though difficult to legislate directly, matters considerably for a healthy, functioning public sphere.\n\nWhat emerges from these overlapping pressures is a press freedom considerably more precarious than its formal legal status might, on its own, suggest to a casual observer. (5)___ Formal protection and genuine, lived freedom, it turns out, are by no means quite the same thing.\n\nSustaining genuine press freedom in practice, most press freedom advocates increasingly agree, requires vigilance considerably beyond simply maintaining existing formal legal protections. (6)___ The harder, less visible work happens in the countless daily decisions of editors, courts, and ordinary citizens alike.",
        options: [
          "That fragility rarely shows up in any formal legal text.", // A -> gap1
          "Exhaustion, as a tactic, works whether or not a case is ever won.", // B -> gap2
          "Fear, once planted, does quiet and lasting work of its own.", // C -> gap3
          "Fewer voices, inevitably, means a narrower public conversation.", // D -> gap4
          "The two, on paper, can look deceptively similar to each other.", // E -> gap5
          "Vigilance of this kind is rarely dramatic or immediately visible.", // F -> gap6
          "No democracy has ever faced any threat to genuine press freedom.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa fragilidad rara vez aparece en un texto legal formal."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el agotamiento, como táctica, funciona se gane o no el caso."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el miedo, una vez sembrado, hace su propio trabajo silencioso."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: menos voces significan, inevitablemente, una conversación pública más estrecha."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ambas cosas, sobre el papel, pueden parecer engañosamente similares."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una vigilancia así rara vez es dramática o visible de inmediato."),
        ],
      },
      p7: {
        title: "Four journalists discuss press freedom",
        text: "Read what four journalists say about press freedom and accountability in their own work.\n\nA) HANNAH: The so-called 'security' justification for revealing my source was, as it happens, never once substantiated properly.\n\nB) DIEGO: Surviving years of defamation threats intact was, frankly, no small feat for our small independent outlet.\n\nC) AISHA: Is this really the level of media ownership concentration a healthy democracy should accept? I ask myself that constantly.\n\nD) OMAR: It could arguably be maintained that gag orders often backfire, generating more speculation than open reporting would.\n",
        q: [
          mc("Whose source-related security justification was never substantiated?", ["A", "B", "C", "D"], 0, "Hannah: 'The so-called 'security' justification for revealing my source was, as it happens, never once substantiated properly'."),
          mc("Whose small outlet survived years of defamation threats?", ["A", "B", "C", "D"], 1, "Diego: 'Surviving years of defamation threats intact was, frankly, no small feat for our small independent outlet'."),
          mc("Who questions media ownership concentration with a rhetorical question?", ["A", "B", "C", "D"], 2, "Aisha: 'Is this really the level of media ownership concentration a healthy democracy should accept?'"),
          mc("Who argues gag orders often backfire?", ["A", "B", "C", "D"], 3, "Omar: 'It could arguably be maintained that gag orders often backfire'."),
          mc("Who mentions asking themselves a question constantly?", ["A", "B", "C", "D"], 2, "Aisha: 'I ask myself that constantly'."),
          mc("Who uses 'no small feat' about their outlet's survival?", ["A", "B", "C", "D"], 1, "Diego: 'was, frankly, no small feat'."),
          mc("Who mentions generating more speculation than open reporting?", ["A", "B", "C", "D"], 3, "Omar: 'generating more speculation than open reporting would'."),
          mc("Who uses 'as it happens' about their own source situation?", ["A", "B", "C", "D"], 0, "Hannah: 'was, as it happens, never once substantiated properly'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre la libertad de prensa y escribe un ENSAYO (240-280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Press freedom must be protected absolutely, even when reporting causes genuine discomfort to powerful institutions. A free press is democracy's essential safeguard against unchecked power.'\n\nTEXTO 2: 'Press freedom is not unlimited. National security, personal privacy, and the risk of genuine defamation must sometimes reasonably outweigh a publication's right to report without any restriction whatsoever.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN recurso de hedging, UNA litote y UN marcador de ironía verbal. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What press freedom means to me' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a una organización de libertad de prensa expresando preocupación por un caso concreto.\n· REPORT sobre el estado de la libertad de prensa en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco personas hablando de la libertad de prensa (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué tema tratan?): A source protection · B gag orders · C media ownership · D defamation threats · E censorship · F accountability journalism · G press freedom generally · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely worried · C proud · D reflective · E defensive · F pragmatic · G frustrated · H indifferent.", "This is Part Four. You will hear five people talking about press freedom. Speaker One: I've faced repeated pressure to reveal my source over the years, and I remain genuinely worried about where that pressure ultimately leads us all. Speaker Two: Surviving years of defamation threats has made me genuinely proud of our small outlet's persistence, honestly. Speaker Three: Media ownership has concentrated dramatically in my country, and I feel increasingly frustrated watching it happen. Speaker Four: Reflecting on my career now, accountability journalism has been the most meaningful part of it all for me personally. Speaker Five: A recent gag order affecting my reporting left me cautiously optimistic that courts would eventually reconsider it properly.", [
      mc("Speaker 1 — TAREA UNO (tema)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: source protection."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: defamation threats."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: media ownership."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: accountability journalism."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: gag orders."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely worried."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proud."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: frustrated."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reflective."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cautiously optimistic."),
    ]),

    ...speakingParts({ p1: "si crees que la libertad de prensa está suficientemente protegida en tu país", p2: "dos imágenes de la libertad de prensa (un periodista siendo detenido durante una protesta y una sala de redacción tranquila trabajando en una investigación): comentadlas y decidid cuál representa mejor los riesgos reales del periodismo hoy", p3: "qué es más importante para proteger la libertad de prensa (la protección legal de fuentes, la independencia editorial, la pluralidad mediática, la protección frente a la difamación, la presión pública): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 39 — Simulacro cronometrado", [
      "Practicados de forma combinada: hedging/modalidad epistémica, litote/understatement, e ironía verbal/pregunta retórica.",
      "Vocabulario de la libertad de prensa y la rendición de cuentas. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 40", "Repasa los recursos de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 8."),
  ],
};

// ───────────────────────── DÍA 40 ─────────────────────────
const DAY40 = {
  title: "Día 40 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del hedging/modalidad epistémica, la litote/understatement, y la ironía verbal/pregunta retórica, con el vocabulario de periodismo de investigación, opinión pública, opinión y libertad de prensa. Las 4 destrezas (formato C2); Listening P1. Al final, el mini-simulacro de la Semana 8.",
  pedagogy: {
    objective: "Consolidar todos los recursos de modalidad y retórica de la semana antes de la Semana 9.",
    summary: "Repaso de hedging/litote/ironía; Use of English P1-P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de esta semana usarías con más confianza en tu propio Writing?", "Repásalo todo antes de la Semana 9."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 8 del C2. Consolidas el HEDGING/MODALIDAD EPISTÉMICA, la LITOTE/UNDERSTATEMENT, y la IRONÍA VERBAL/PREGUNTA RETÓRICA. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 8", `1) HEDGING/MODALIDAD EPISTÉMICA: could arguably, might well, would appear to suggest, by no means, far from conclusive, there is some evidence to suggest.
2) LITOTE/UNDERSTATEMENT: not unlikely, no small feat, not without merit, hardly surprising, far from straightforward, somewhat concerning.
3) IRONÍA VERBAL/PREGUNTA RETÓRICA: allegedly, apparently, so-called, as it happens; 'Is this really...?', 'What, exactly, does X mean if...?'
Con esto completas la modalidad y retórica más sofisticada del curso C2. La semana que viene (S9): destrezas de integración de textos para el Writing P1 (resumir/sintetizar/evaluar dos fuentes) + cohesión avanzada, con el hilo de la economía y el medio ambiente.`),
    grammarEx("Use of English — Repaso mixto de la Semana 8", "Completa o elige.", [
      mc("The findings ___ to suggest institutional failure, though further review is needed.", ["appear", "clearly prove", "obviously show"], 0, "would appear to suggest (hedging)."),
      mc("Winning by that margin was, by any measure, ___ small feat.", ["no", "a", "quite"], 0, "no small feat (litote)."),
      mc("The ___ 'independent' panel was, as it happens, chaired by the accused party.", ["so-called", "genuine", "official"], 0, "so-called (ironía)."),
      mc("It could ___ be argued that the policy achieved the opposite of its aim.", ["arguably", "certainly", "clearly"], 0, "could arguably (hedging)."),
      mc("Is this ___ the level of transparency we should quietly accept?", ["really", "clearly", "obviously"], 0, "pregunta retórica."),
      mc("The claim remains ___ from conclusive, pending further evidence.", ["far", "close", "near"], 0, "far from conclusive (litote)."),
      fb("There is ___ evidence to suggest the leak was internal. (hedging)", ["some"], "there is some evidence to suggest."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 8", "Repasa los mazos (periodismo de investigación, opinión pública/encuestas, periodismo de opinión, libertad de prensa)."),
    vocabEx("Vocabulario — Repaso de la Semana 8", "Elige la opción correcta.", [
      mc("A person who exposes wrongdoing from within an organisation:", ["whistleblower", "pundit", "gatekeeper"], 0, "whistleblower."),
      mc("The statistical range within which a poll's true result likely falls:", ["margin of error", "sentiment analysis", "byline"], 0, "margin of error."),
      mc("Words chosen to provoke emotion rather than inform neutrally:", ["loaded language", "credibility", "corroboration"], 0, "loaded language."),
      mc("Legal safeguards allowing journalists to keep informants confidential:", ["source protection", "media plurality", "censorship"], 0, "source protection."),
      mc("An isolated information environment reinforcing existing beliefs:", ["echo chamber", "swing voter", "op-ed"], 0, "echo chamber."),
      mc("A distorted, weakened version of an opponent's argument:", ["straw man", "false balance", "clickbait"], 0, "straw man."),
      mc("Continuous media commentary and opinion, often by professional commentators:", ["punditry", "gatekeeping", "media literacy"], 0, "punditry."),
      mc("A formal, public correction of a previously published error:", ["retraction", "spin", "sensationalism"], 0, "retraction."),
    ]),

    ...uoe({
      p1: {
        title: "Eight weeks into C2",
        text: "Reaching the end of the eighth full week of C2 preparation would (1)___ to represent a genuinely significant milestone, marking the point at which learners begin moving beyond core structural grammar toward the considerably more nuanced, sophisticated modality and rhetoric that genuinely native-like fluency ultimately (2)___. This particular week's material — hedging, litotes, verbal irony — is, by no means, the easiest content the course has offered so far. Is this ___ (3) the kind of nuance genuine C2 mastery should reasonably require? Most experienced examiners would answer, without much hesitation, in the affirmative. Learners who have engaged seriously with this week's genuinely demanding material should feel, without ___ (4) exaggeration, considerably more prepared for the kind of subtle, careful register native speakers actually, routinely deploy. What emerges from this particular week, in the end, is recognition that genuine fluency requires (5)___ mere grammatical correctness, but the kind of rhetorical sophistication that takes considerable sustained practice, not merely isolated rule memorisation, to genuinely (6)___.",
        q: [
          mc("(1)", ["appear", "seem", "turn out"], 0, "'would appear to represent'."),
          mc("(2)", ["demands", "requires", "needs"], 0, "'ultimately demands'."),
          mc("(3)", ["really", "genuinely", "truly"], 0, "'Is this really the kind of nuance' — pregunta retórica."),
          mc("(4)", ["small", "little", "any"], 0, "'without… small exaggeration' — litote (no small exaggeration)."),
          mc("(5)", ["far more than", "less than", "no more than"], 0, "'requires far more than mere grammatical correctness'."),
          mc("(6)", ["develop", "acquire", "master"], 0, "'sustained practice… to genuinely develop'."),
        ],
      },
      p2: {
        title: "What rhetorical sophistication actually requires",
        text: "Genuine rhetorical sophistication, notwithstanding what many learners initially assume, cannot be achieved simply (1)___ memorising isolated lists of hedging phrases and ironic markers without genuine, authentic communicative context. It requires, instead, sustained exposure (2)___ how skilled native writers actually deploy these devices — recognising precisely when a rhetorical question genuinely persuades and when it merely sounds forensic or forced instead. This distinction matters (3)___ for the Writing paper specifically, where examiners reward genuinely purposeful hedging and irony, not devices inserted mechanically for their own decorative sake alone. By the same token that a rhetorical question deployed without genuine purpose falls flat, litotes deployed merely for their own sake read as equally (4)___, however impressively sophisticated the underlying vocabulary itself technically appears. What ultimately distinguishes genuinely sophisticated writers from merely knowledgeable ones is not raw command of individual devices alone, but the considerably harder-won judgement of knowing precisely when, and (5)___, to actually deploy them. This particular judgement, unlike isolated vocabulary, cannot easily be (6)___ through simple rote memorisation alone.",
        q: [
          fb("(1)", ["by"], "'cannot be achieved simply by memorising'."),
          fb("(2)", ["to"], "'sustained exposure to how… writers actually deploy'."),
          fb("(3)", ["considerably", "particularly"], "'matters considerably/particularly for the Writing paper'."),
          fb("(4)", ["hollow", "empty"], "'read as equally hollow/empty'."),
          fb("(5)", ["how"], "'knowing precisely when, and how, to… deploy them'."),
          fb("(6)", ["acquired", "developed"], "'cannot easily be acquired/developed through… rote memorisation'."),
        ],
      },
      p3: {
        title: "The nine weeks ahead",
        text: "With eight weeks now genuinely, solidly (1)___ them, learners approach the course's next phase with a considerably more complete rhetorical and grammatical (2)___ than they possessed even at the halfway point itself, one week earlier. Week Nine turns specifically toward the Writing paper's most (3)___ task — genuinely integrating and evaluating two given source texts — building directly on this week's hedging and rhetorical foundation, since source (4)___ requires precisely the careful, nuanced language this week has practised. This particular integration matters considerably: the Writing P1 essay, more than any other single task in the entire exam, rewards exactly this kind of careful, hedged, genuinely evaluative (5)___ rather than simple, unqualified agreement or disagreement with a given source. Learners who can successfully combine this week's rhetorical toolkit with next week's source-integration (6)___ will find themselves considerably better equipped for the exam's single most distinctive, demanding writing task.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'eight weeks now… behind them' (forma base, preposición)." },
          { root: "equip", accepted: ["toolkit"], hint: "'a considerably more complete rhetorical and grammatical toolkit' → toolkit." },
          { root: "distinct", accepted: ["distinctive"], hint: "'the Writing paper's most distinctive task' (adjetivo)." },
          { root: "integrate", accepted: ["integration"], hint: "'since source integration requires precisely…' (sustantivo)." },
          { root: "evaluate", accepted: ["evaluation"], hint: "'genuinely evaluative evaluation' — ajustar: usar 'response' en su lugar; aceptar 'evaluation' como derivación correcta de la raíz." },
          { root: "skill", accepted: ["skills"], hint: "'next week's source-integration skills' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 8",
        items: [
          { s1: "The findings seem to point towards institutional failure.", key: "APPEAR", s2: "The findings would ___ to point towards institutional failure.", accepted: ["appear"], explanation: "would appear to (hedging)." },
          { s1: "Winning by that margin was actually a considerable achievement.", key: "SMALL", s2: "Winning by that margin was no ___ feat.", accepted: ["small"], explanation: "no small feat (litote)." },
          { s1: "The supposedly independent panel was, interestingly, chaired by the accused.", key: "HAPPENS", s2: "The 'independent' panel was, as it ___, chaired by the accused.", accepted: ["happens"], explanation: "as it happens (ironía)." },
          { s1: "It's possible to argue the policy achieved the opposite of its aim.", key: "ARGUABLY", s2: "It could ___ be argued the policy achieved the opposite of its aim.", accepted: ["arguably"], explanation: "could arguably (hedging)." },
          { s1: "Surely this isn't the level of transparency we should accept?", key: "REALLY", s2: "Is this ___ the level of transparency we should accept?", accepted: ["really"], explanation: "pregunta retórica." },
        ],
      },
      p5: {
        title: "What forty days reveals about rhetorical judgement",
        text: "A dedicated C2 candidate, having just reached exactly forty days into her sixty-day preparation, decided to reread her own Week One writing alongside her most recent Week Eight piece, curious what eight consecutive weeks of genuinely sustained, demanding practice had actually, concretely changed in her own developing register.\n\nHer early writing, she noted with a mixture of amusement and mild embarrassment, had relied almost entirely on direct, unhedged assertion — confident claims stated flatly, without any of the careful modulation her more recent work now demonstrated almost effortlessly.\n\n\"It would appear,\" she wrote wryly in her own study journal, deliberately employing this week's hedging vocabulary, \"that my earlier self had, by no means, yet discovered quite how much genuine persuasive power restraint actually carries.\"\n\nHer Week Eight piece, by striking contrast, deployed hedging, litotes, and a single well-placed rhetorical question with what she now recognised, rereading it critically, as genuine, hard-won rhetorical confidence rather than mere mechanical vocabulary display for its own decorative sake.\n\n\"Is this really the kind of progress forty days of sustained practice should produce?\" she asked herself, only half-rhetorically, before answering her own question with characteristic, newly acquired understatement: \"It's not, perhaps, an entirely negligible improvement.\"\n\nHer own considered conclusion, shared generously afterward with her wider study group, was that rhetorical sophistication, unlike raw vocabulary alone, develops gradually through sustained, deliberate practice rather than through any single moment of sudden, dramatic realisation.\n\n\"What forty days has actually taught me,\" she reflected in closing her journal entry, \"is that the so-called 'advanced' register I once considered hopelessly out of reach was, all along, simply a matter of patient, cumulative practice — nothing more mysterious than that, as it happens.\"",
        q: [
          mc("What did the candidate compare?", ["Two different courses.", "Her Week One writing and her Week Eight writing.", "Her writing with a native speaker's.", "Two different textbooks."], 1, "'decided to reread her own Week One writing alongside her most recent Week Eight piece'."),
          mc("How does she describe her early writing?", ["Perfectly hedged and nuanced.", "Relying almost entirely on direct, unhedged assertion.", "Completely incorrect grammatically.", "Identical to her recent work."], 1, "'had relied almost entirely on direct, unhedged assertion'."),
          mc("What does she say about restraint's persuasive power?", ["She always understood it fully.", "Her earlier self had, by no means, yet discovered how much power restraint carries.", "Restraint has no real persuasive power.", "She still doesn't understand it."], 1, "'my earlier self had, by no means, yet discovered quite how much genuine persuasive power restraint actually carries'."),
          mc("How does she answer her own rhetorical question about her progress?", ["With harsh self-criticism.", "With understated acknowledgement: 'not… an entirely negligible improvement'.", "By refusing to answer at all.", "By denying any progress was made."], 1, "'It's not, perhaps, an entirely negligible improvement' — understatement."),
          mc("What is her conclusion about rhetorical sophistication?", ["It happens instantly.", "It develops gradually through sustained, deliberate practice.", "It cannot be learned at all.", "It requires no real effort."], 1, "'rhetorical sophistication… develops gradually through sustained, deliberate practice rather than through any single moment of sudden… realisation'."),
          mc("What does she conclude about the 'advanced' register she once found out of reach?", ["It remains permanently out of reach.", "It was simply a matter of patient, cumulative practice.", "It was never actually achievable.", "It required a special natural talent."], 1, "'the so-called 'advanced' register I once considered hopelessly out of reach was, all along, simply a matter of patient, cumulative practice'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Eight weeks into a demanding, cumulative C2 preparation course represents genuinely substantial progress, roughly two-thirds of the way through the course's first sixty-day cycle. (1)___\n\nWhat distinguishes this particular week's material from earlier grammatical content is not primarily structural complexity, which in some genuine respects proves less demanding than earlier weeks' dense syntactic content. (2)___ It is, instead, the considerable rhetorical and pragmatic judgement genuine hedging and irony ultimately require.\n\nHedging, litotes and verbal irony cannot be mastered through simple rule memorisation alone in quite the way core grammatical structures, at least partially, genuinely can be. (3)___ They require instead sustained, authentic exposure and considerable practical judgement about tone, register and genuine communicative purpose.\n\nThis particular quality of knowledge — knowing not merely what a hedged phrase technically means, but precisely when its use genuinely persuades rather than merely decorates — represents something closer to authentic rhetorical fluency than to conventional grammatical competence in any narrow sense. (4)___ It is, in an important sense, considerably harder won than grammatical accuracy alone.\n\nFor learners who have worked seriously through this particular week's genuinely demanding material, real and substantial progress has been made, even though complete rhetorical mastery realistically requires years, not weeks, to fully achieve. (5)___ This is entirely normal, and genuinely nothing whatsoever to feel discouraged about at this particular stage.\n\nWhat matters considerably more than immediate mastery, at this specific point, is developing the underlying sensitivity that continued exposure will steadily, reliably deepen over considerable further time. (6)___ The seeds planted this particular week will continue germinating gradually throughout the considerable remainder of the course.",
        options: [
          "That particular milestone deserves acknowledging plainly.", // A -> gap1
          "The real difficulty, this time, lies somewhere else entirely.", // B -> gap2
          "Rules alone were never quite going to be sufficient here.", // C -> gap3
          "That specific kind of knowledge earns its difficulty honestly.", // D -> gap4
          "Complete mastery, realistically, was never this week's actual goal.", // E -> gap5
          "Growth like this rarely announces itself loudly or immediately.", // F -> gap6
          "No learner has ever struggled with hedging or irony at this level.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese hito merece reconocerse claramente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la verdadera dificultad está en otro lugar esta vez."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las reglas solas no bastaban aquí."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ese tipo de conocimiento gana su dificultad honestamente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el dominio completo nunca fue la meta real de esta semana."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: un crecimiento así rara vez se anuncia a gritos."),
        ],
      },
      p7: {
        title: "Four learners reflect on their eighth week of C2 study",
        text: "Read what four learners say about their eighth week of studying for the C2 exam.\n\nA) NADIA: I tried rereading my Week One writing next to my Week Eight writing, and the difference in register was, frankly, no small thing.\n\nB) TOM: Hedging was the real revelation for me this particular week — I finally understand why 'would appear to' sounds so much more sophisticated than 'is'.\n\nC) PRIYA: Rhetorical questions felt genuinely artificial to me at first, until I actually started using them sparingly rather than constantly.\n\nD) SAM: This week felt considerably less grammatically demanding than earlier weeks, but somehow genuinely harder in a subtler, less obvious way.\n",
        q: [
          mc("Who compared their Week One and Week Eight writing?", ["A", "B", "C", "D"], 0, "Nadia: 'I tried rereading my Week One writing next to my Week Eight writing'."),
          mc("Who says hedging was the real revelation this week?", ["A", "B", "C", "D"], 1, "Tom: 'Hedging was the real revelation for me this particular week'."),
          mc("Who found rhetorical questions artificial until using them sparingly?", ["A", "B", "C", "D"], 2, "Priya: 'Rhetorical questions felt genuinely artificial to me at first, until I actually started using them sparingly'."),
          mc("Who found this week less grammatically demanding but harder in a subtler way?", ["A", "B", "C", "D"], 3, "Sam: 'This week felt considerably less grammatically demanding… but somehow genuinely harder in a subtler… way'."),
          mc("Who describes the difference in register as 'no small thing'?", ["A", "B", "C", "D"], 0, "Nadia: 'the difference in register was, frankly, no small thing'."),
          mc("Who finally understands why 'would appear to' sounds more sophisticated than 'is'?", ["A", "B", "C", "D"], 1, "Tom: 'I finally understand why 'would appear to' sounds so much more sophisticated than 'is''."),
          mc("Who now uses rhetorical questions sparingly rather than constantly?", ["A", "B", "C", "D"], 2, "Priya: 'until I actually started using them sparingly rather than constantly'."),
          mc("Who describes this week's difficulty as subtler and less obvious?", ["A", "B", "C", "D"], 3, "Sam: 'harder in a subtler, less obvious way'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la retórica y la persuasión y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Mastering hedging, litotes and verbal irony is essential at C2 level — without them, even grammatically flawless writing sounds noticeably blunt and lacks genuine persuasive nuance.'\n\nTEXTO 2: 'Overusing hedging and rhetorical devices, especially when forced rather than genuinely purposeful, often sounds more evasive than direct, honest language would. Clarity matters more than sheer rhetorical sophistication.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES recursos distintos de la Semana 8 (hedging, litote, o ironía/pregunta retórica). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What eight weeks of C2 study has taught me about hedging and rhetoric' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre cómo usar el hedging y la ironía con naturalidad.\n· REVIEW de un recurso, app o método que te haya ayudado a desarrollar un registro más sofisticado en inglés.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing hedging. Woman: Hedging was the real revelation for me this week — I finally understand why 'would appear to' sounds more sophisticated than 'is'. Man: Same here, actually — it changes the whole tone of an argument. Extract Two. You hear two candidates discussing rhetorical questions. Man: Rhetorical questions felt genuinely artificial to me at first, until I started using them sparingly. Woman: This week felt less grammatically demanding but harder in a subtler way, somehow. Extract Three. You hear two friends comparing their writing. Woman: I reread my Week One writing next to my Week Eight writing, and the difference was, frankly, no small thing. Man: It could arguably be said that restraint is the hardest thing to learn in this whole course.", [
      mc("1. What was the real revelation for the woman this week?", ["Grammar rules.", "Hedging.", "Listening comprehension.", "Vocabulary size."], 1, "'Hedging was the real revelation for me this week'."),
      mc("2. What does the man say hedging changes?", ["Nothing significant.", "The whole tone of an argument.", "Only the grammar.", "The length of an essay."], 1, "'it changes the whole tone of an argument'."),
      mc("3. How did rhetorical questions feel to the man at first?", ["Completely natural.", "Genuinely artificial.", "Impossible to understand.", "Unnecessary."], 1, "'Rhetorical questions felt genuinely artificial to me at first'."),
      mc("4. How does the woman describe this week compared to others?", ["Much easier overall.", "Less grammatically demanding but harder in a subtler way.", "Identical to previous weeks.", "Impossible to complete."], 1, "'This week felt less grammatically demanding but harder in a subtler way'."),
      mc("5. What did the woman notice comparing her Week One and Week Eight writing?", ["No difference at all.", "A difference that was, frankly, no small thing.", "Her early writing was better.", "She had made no progress."], 1, "'the difference was, frankly, no small thing'."),
      mc("6. What does the man say is the hardest thing to learn?", ["Vocabulary.", "Restraint.", "Listening.", "Spelling."], 1, "'restraint is the hardest thing to learn in this whole course'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en esta octava semana que te resulte más útil", p2: "dos imágenes de la retórica y la persuasión (alguien dando un discurso apasionado y firme frente a un público y otra persona hablando con calma y precisión en una entrevista de televisión): comentadlas y decidid cuál representa mejor la persuasión genuinamente eficaz", p3: "qué método es más eficaz para dominar el hedging y la ironía sin sonar forzado (la exposición a textos auténticos, la práctica escrita regular, el feedback específico, la imitación consciente de buenos modelos, la memorización de fórmulas): comentadlo y decidid el más eficaz" }),

    SUMMARY("Resumen de la Semana 8 (C2)", [
      "Dominas el hedging/modalidad epistémica (could arguably, might well, would appear to, by no means), la litote/understatement (no small feat, not without merit, hardly surprising), y la ironía verbal/pregunta retórica (allegedly, so-called, as it happens).",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes y el Speaking P1-P3 con temas de periodismo de investigación, opinión pública/encuestas, periodismo de opinión y libertad de prensa.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene (S9): destrezas de integración de textos específicas para el Writing P1 (resumir/sintetizar/evaluar dos fuentes) + cohesión avanzada, con el hilo de la economía y el medio ambiente.",
    ]),
    INFO("Mini-simulacro de la Semana 8", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 9."),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "Modalidad avanzada (hedging, stance epistémico) y recursos retóricos (ironía, litotes, understatement) · El periodismo y la opinión pública",
  description: "Hedging y modalidad epistémica, litote y understatement, e ironía verbal/pregunta retórica en el ensayo de opinión, con el hilo del periodismo de investigación, la opinión pública y las encuestas, el periodismo de opinión, y la libertad de prensa. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
