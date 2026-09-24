/**
 * C1 Advanced · Semana 2 — "La inversión y el énfasis · Los medios de comunicación".
 * Gramática: inversión tras adverbios negativos/limitativos, oraciones hendidas
 * (cleft sentences), do/did enfático, so/such...that e intensificadores, y el
 * fronting, con el hilo temático de los medios, el periodismo, la desinformación
 * y la libertad de expresión.
 * Cada día, las 4 destrezas con el formato real del C1 (Reading & UoE de 8 partes).
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, useCloze, openCloze, wordFormation, keyword, readingMC, crossTextMatching, gappedText, multipleMatching,
  writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const uoe = ({ p1, p2, p3, p4, p5, p6, p7, p8 }) => [
  READING_HEAD,
  useCloze(p1.title, p1.text, p1.q),
  openCloze(p2.title, p2.text, p2.q),
  wordFormation(p3.title, p3.text, p3.items),
  keyword(p4.title, p4.items),
  readingMC(p5.title, p5.text, p5.q),
  crossTextMatching(p6.title, p6.intro, p6.texts, p6.q),
  gappedText(p7.title, p7.text, p7.options, p7.q),
  multipleMatching(p8.title, p8.text, p8.q),
];

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas y matizadas (3–4 frases con razones y ejemplos).", `Parte 1 del C1: preguntas personales (${p1})`, "responder con detalle, matices y ejemplos", "personally, to a large extent, what strikes me is, the main reason being"),
  speaking(2, "Speaking · Parte 2 — Turno largo (comparar fotos)", "Compara DOS de las tres fotos ~1 minuto, especula y responde a la pregunta.", `Parte 2 del C1: comparar dos fotografías sobre ${p2}`, "comparar, especular y evaluar", "whereas, this one seems to, it could well be that, presumably, what they have in common"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones a fondo y llegad a una decisión conjunta.", `Parte 3 del C1: comentar juntos ${p3} y decidir`, "evaluar, negociar y matizar", "there's a strong case for, on balance, I take your point, that said, shall we settle on"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas y desarrolladas.", `Parte 4 del C1: discusión sobre ${p4}`, "argumentar, matizar y generalizar", "it largely depends on, it's often argued that, up to a point, conversely, in the grand scheme of things"),
];

// ───────────────────────── DÍA 6 ─────────────────────────
const DAY6 = {
  title: "Día 6 — Inversión tras adverbios negativos/limitativos · Los medios y la desinformación",
  description: "Inversión obligatoria tras Never, Rarely, Seldom, Not only, Only when/after, No sooner, Little, Hardly/Scarcely. Vocabulario de medios y desinformación. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Usar la inversión tras adverbios negativos/limitativos para dar énfasis, en registro formal/escrito.",
    summary: "Inversión negativa/limitativa; medios y desinformación; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["olvidar invertir sujeto-auxiliar tras el adverbio anteposicionado.", "usar 'do' con verbos que ya tienen auxiliar.", "anteponer el adverbio sin necesidad (registro neutro no lo exige)."],
    reviewPrompts: ["¿Cómo inviertes 'I have never seen such chaos'?", "¿Qué estructura sigue a 'No sooner… than'?"],
  },
  items: [
    TEXT("👋 Semana 2 del C1. Hoy la INVERSIÓN tras adverbios negativos y limitativos: un recurso de registro formal y escrito para dar énfasis. Vocabulario: los MEDIOS DE COMUNICACIÓN y la DESINFORMACIÓN."),
    GRAMMAR("La inversión tras adverbios negativos y limitativos", `Cuando un adverbio o expresión NEGATIVA/LIMITATIVA se coloca al principio de la frase (por énfasis, en registro formal o escrito), el orden sujeto-verbo se INVIERTE como en una pregunta.
ESTRUCTURA: Adverbio + auxiliar + sujeto + verbo. Si no hay auxiliar, se añade do/does/did.
· NEVER / RARELY / SELDOM: Never have I seen such chaos. Rarely does she complain.
· NOT ONLY… (BUT ALSO): Not only did he apologise, but he also offered compensation.
· ONLY WHEN / ONLY AFTER / ONLY BY / ONLY THEN: Only when the results came in did we realise the scale of the problem.
· NO SOONER… THAN / HARDLY/SCARCELY… WHEN: No sooner had she sat down than the phone rang. Hardly had he finished when the applause began.
· LITTLE (= apenas, en absoluto): Little did they know what awaited them.
· UNDER NO CIRCUMSTANCES / ON NO ACCOUNT / IN NO WAY / NOT UNTIL: Under no circumstances should you reveal your source. Not until later did the truth emerge.
⚠️ La inversión es un recurso de ÉNFASIS y REGISTRO FORMAL/ESCRITO; no es obligatoria en el habla neutra, pero SÍ lo es gramaticalmente si antepones el adverbio.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ Never I have seen → ✅ Never have I seen (invierte sujeto y auxiliar).\n· ❌ No sooner she had arrived than… → ✅ No sooner had she arrived than… (había).\n· 'Not only… but also' exige inversión SOLO en la primera cláusula: Not only did he lie, but he also got caught.\n· No confundas 'hardly… when' con 'hardly… than' (es WHEN, no than)."),
    grammarEx("Use of English — Inversión negativa/limitativa", "Reescribe o completa con inversión.", [
      mc("Rarely ___ such a compelling report.", ["we have read", "have we read", "we read"], 1, "Rarely + inversión → have we read."),
      fb("Not only ___ (the article / contain) errors, but it also misquoted the minister.", ["did the article contain"], "Not only + inversión con did."),
      mc("Only when the story broke ___ the truth.", ["people realised", "did people realise", "people did realise"], 1, "Only when + inversión → did people realise."),
      fb("No sooner ___ (the news / break) than the shares collapsed.", ["had the news broken"], "No sooner + inversión con had."),
      mc("Little ___ how much damage the rumour would cause.", ["they knew", "did they know", "they did know"], 1, "Little + inversión → did they know."),
      fb("Under no circumstances ___ (you / should / share) unverified information.", ["should you share"], "Under no circumstances + inversión."),
      mc("Hardly had the story been published ___ it was retracted.", ["than", "when", "that"], 1, "Hardly… WHEN (no than)."),
    ]),
    GRAMMAR("Vocabulario del día — Los medios y la desinformación (C1)", "Léxico avanzado de medios de comunicación."),
    deck("C1 S2D6 — Medios y desinformación", [
      ["outlet", "medio (de comunicación)", "It was reported by several news outlets.", "sustantivo", "ˈaʊtlet"],
      ["misinformation", "desinformación (sin intención)", "Misinformation spreads fast online.", "sustantivo", "ˌmɪsɪnfəˈmeɪʃn"],
      ["disinformation", "desinformación (deliberada)", "The campaign was pure disinformation.", "sustantivo", "ˌdɪsɪnfəˈmeɪʃn"],
      ["credible", "creíble / fidedigno/a", "Cite a credible source.", "adjetivo", "ˈkredəbl"],
      ["retract", "retractarse / retirar (una afirmación)", "The paper retracted the story.", "verbo", "rɪˈtrækt"],
      ["scrutiny", "escrutinio", "The claim came under intense scrutiny.", "sustantivo", "ˈskruːtəni"],
      ["fact-check", "verificar (datos)", "Always fact-check before sharing.", "verbo", "ˈfækt tʃek"],
      ["sensationalise", "sensacionalizar", "Some outlets sensationalise every story.", "verbo", "senˈseɪʃənəlaɪz"],
      ["echo chamber", "cámara de eco", "Social media creates echo chambers.", "sustantivo", "ˈekəʊ ˌtʃeɪmbə"],
      ["whistleblower", "informante / alertador/a", "The whistleblower exposed the scandal.", "sustantivo", "ˈwɪslˌbləʊə"],
    ]),
    vocabEx("Vocabulario — Los medios y la desinformación", "Elige la opción correcta.", [
      mc("A news organisation or publication is a news ___.", ["outlet", "scrutiny", "chamber"], 0, "outlet."),
      mc("False information spread WITHOUT intent to deceive is ___.", ["misinformation", "disinformation", "scrutiny"], 0, "misinformation."),
      mc("False information spread DELIBERATELY is ___.", ["disinformation", "misinformation", "credibility"], 0, "disinformation."),
      mc("To officially withdraw a statement is to ___ it.", ["retract", "sensationalise", "scrutinise"], 0, "retract."),
      mc("To check whether claims are true is to ___ them.", ["fact-check", "retract", "sensationalise"], 0, "fact-check."),
      mc("An online environment where you only hear views like your own is an ___.", ["echo chamber", "outlet", "scrutiny"], 0, "echo chamber."),
    ]),

    ...uoe({
      p1: {
        title: "The age of information overload",
        text: "Never in human history have ordinary people had (1)___ to so much information, and never, perhaps, have they been so poorly equipped to make sense of it. The internet has (2)___ down the old gatekeepers — the editors, the broadcasters — who once decided what counted as news. In their place has emerged an unfiltered torrent, in which a rigorously fact-checked investigation sits (3)___ alongside a baseless rumour, both competing equally for our attention. The result is what some researchers have called an 'infodemic': not a shortage of information but a catastrophic (4)___ of it, in which the genuinely important is drowned out by the merely loud. Readers, faced with this deluge, often (5)___ back on cognitive shortcuts — trusting what confirms their existing views, what is shared by friends, what is presented with the most confidence — rather than what is actually most (6)___. Media literacy, the ability to evaluate sources critically, has become, almost overnight, one of the most essential and least (7)___ skills of modern citizenship. Without it, we are all, to some degree, at the (8)___ of whoever shouts loudest or manipulates most skilfully.",
        q: [
          mc("(1)", ["access", "reach", "entry", "way"], 0, "'have… access to so much information'."),
          mc("(2)", ["torn", "brought", "cut", "knocked"], 1, "'has brought down the old gatekeepers'."),
          mc("(3)", ["indistinguishably", "equally", "similarly", "identically"], 0, "'sits indistinguishably alongside'."),
          mc("(4)", ["glut", "flood", "surplus", "excess"], 0, "'a catastrophic glut of it'."),
          mc("(5)", ["fall", "fold", "lean", "sink"], 0, "'often fall back on'."),
          mc("(6)", ["reliable", "trustworthy", "believable", "dependable"], 0, "'most reliable'."),
          mc("(7)", ["taught", "practised", "developed", "trained"], 0, "'least taught skills'."),
          mc("(8)", ["mercy", "hands", "grip", "will"], 0, "'at the mercy of'."),
        ],
      },
      p2: {
        title: "Who watches the watchmen?",
        text: "A free press is often described (1)___ a pillar of democracy, and rightly so: without independent journalists willing to hold power to account, corruption and abuse flourish unchecked. Yet the press, precisely (2)___ it wields such influence, must itself be subject to scrutiny. Who, after all, watches the watchmen? This is not merely (3)___ academic question. A media outlet with a political agenda, a financial conflict of interest, or simply a hunger for clicks can distort public understanding just (4)___ effectively as any government censor. The reader, therefore, cannot afford to trust blindly; critical engagement is required (5)___ matter the source. This does not mean treating every outlet as equally unreliable — some genuinely do maintain far higher standards than others — but it does mean asking, of any report, who wrote it, why, and (6)___ evidence supports it. Not only (7)___ this healthy scepticism protect us from manipulation, but it also, paradoxically, strengthens good journalism, by rewarding rigour and punishing sloppiness. A citizenry (8)___ demands evidence is, in the long run, the press's best safeguard against its own worst tendencies.",
        q: [
          fb("(1)", ["as"], "'described as a pillar'."),
          fb("(2)", ["because"], "'precisely because it wields'."),
          fb("(3)", ["an"], "'not merely an academic question'."),
          fb("(4)", ["as"], "'just as effectively'."),
          fb("(5)", ["no"], "'required no matter the source'."),
          fb("(6)", ["what"], "'what evidence supports it'."),
          fb("(7)", ["does"], "'Not only does this… protect'."),
          fb("(8)", ["that", "which"], "'A citizenry that demands evidence'."),
        ],
      },
      p3: {
        title: "The economics of outrage",
        text: "Modern media does not merely report the world; it is shaped, increasingly, by a business model that rewards (1)___ over accuracy. Outlets are paid, in effect, by the click, and nothing generates clicks quite so reliably as outrage. A calm, nuanced, (2)___ report struggles to compete with a sensational headline engineered to provoke fury or fear. This creates a perverse (3)___: journalists and platforms alike are financially rewarded not for informing the public well, but for inflaming them effectively. The consequences of this (4)___ are considerable. Public discourse grows steadily coarser and more polarised, as the calm middle ground is starved of the attention on which media outlets depend, while the shrill extremes (5)___ ever more airtime. Readers, meanwhile, are left more (6)___ than informed, their emotions manipulated by a system optimised not for truth but for engagement. Reversing this trend will require more than good intentions from individual (7)___; it will require rethinking the fundamental economic incentives that currently reward the (8)___ of calm, careful reporting.",
        items: [
          { root: "engage", accepted: ["engagement"], hint: "'rewards engagement over accuracy' → engagement." },
          { root: "measure", accepted: ["measured"], hint: "'a calm, nuanced, measured report' → measured." },
          { root: "incentive", accepted: ["incentive"], hint: "'a perverse incentive' (sustantivo)." },
          { root: "align", accepted: ["misalignment"], hint: "'this misalignment' → misalignment." },
          { root: "command", accepted: ["command"], hint: "'command ever more airtime' (verbo)." },
          { root: "inflame", accepted: ["inflamed"], hint: "'more inflamed than informed' → inflamed." },
          { root: "journal", accepted: ["journalists"], hint: "'from individual journalists' → journalists." },
          { root: "sacrifice", accepted: ["sacrifice"], hint: "'the sacrifice of calm reporting' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — inversión y medios",
        items: [
          { s1: "I have never read such a biased report.", key: "NEVER", s2: "Never ___ such a biased report.", accepted: ["have I read"], explanation: "Never + inversión." },
          { s1: "The story caused controversy, and it was also retracted.", key: "ONLY", s2: "Not only did the story cause controversy, but it ___ retracted.", accepted: ["was also"], explanation: "not only… but also." },
          { s1: "People only understood the scale after the report was published.", key: "AFTER", s2: "Only ___ the report was published did people understand the scale.", accepted: ["after"], explanation: "Only after + inversión." },
          { s1: "The news broke, and immediately the shares fell.", key: "SOONER", s2: "No sooner ___ than the shares fell.", accepted: ["had the news broken"], explanation: "No sooner + inversión con had." },
          { s1: "You must not reveal your source under any circumstances.", key: "CIRCUMSTANCES", s2: "Under no ___ your source.", accepted: ["circumstances should you reveal"], explanation: "Under no circumstances + inversión." },
          { s1: "They didn't know how much damage the rumour would cause.", key: "LITTLE", s2: "Little ___ the rumour would cause.", accepted: ["did they know how much damage"], explanation: "Little + inversión." },
        ],
      },
      p5: {
        title: "The reporter who checked twice",
        text: "In an industry increasingly defined by speed, where being first to publish is often prized above being right, one veteran investigative journalist built an entire career on the unfashionable principle of checking everything twice — and, where possible, three times. Colleagues who worked alongside her over four decades describe a near-legendary caution: a refusal to file a single sentence until every fact within it had been independently verified by at least two separate sources, regardless of how obviously true it seemed or how much pressure she faced from editors anxious not to be scooped by a rival publication.\n\nThis approach, in an era of instant online publishing, made her something of an anomaly. While competitors raced to break stories within minutes of a tip arriving, she would frequently sit on material for days, sometimes weeks, quietly verifying and re-verifying before publishing a single word. More than once, this caution meant she lost a scoop to a faster, less careful rival — a rival who occasionally turned out, days later, to have got the story wrong. She never seemed to mind losing such races. What she could not tolerate, she often said, was the far greater risk of getting something wrong in print, where a correction, however prompt, could never fully undo the damage of a false claim already believed by millions.\n\nHer reputation for accuracy, built up slowly over the decades, eventually became her greatest professional asset. Sources who might have hesitated to speak to a more sensational outlet came to trust that she would handle their information with scrupulous care, verify it properly, and report it fairly, without either sensationalising it for effect or burying it for lack of courage. This trust, hard-won and carefully guarded, gave her access to stories that eluded reporters with flashier reputations but shakier credibility, and it was this access, more than any single scoop, that produced the investigative work for which she eventually became celebrated.\n\nWhat made her especially unusual, colleagues recall, was her attitude towards being wrong. Journalists, like everyone else, hate admitting error; the temptation to quietly bury a mistake, or to explain it away, is powerful and near-universal. She did the opposite. On the rare occasions when something she had published turned out, despite her caution, to be inaccurate, she insisted on correcting it prominently, promptly and without excuse, treating the error not as a humiliation to be minimised but as a debt to her readers that had to be paid in full and in public.\n\nHer career, viewed as a whole, poses an uncomfortable question to an industry under mounting commercial pressure to publish first and verify later. In a media landscape where speed is so often rewarded and accuracy so often assumed rather than earned, her decades of painstaking, unglamorous verification stand as a quiet rebuke — a reminder that the most valuable thing a journalist ultimately offers the public is not speed but trust, and that trust, once squandered through carelessness, is a currency that takes a lifetime to rebuild and can be destroyed in a single careless sentence.",
        q: [
          mc("What was the journalist's defining professional principle?", ["Publishing first.", "Checking every fact with at least two independent sources.", "Writing quickly.", "Avoiding controversy."], 1, "'a refusal to file a single sentence until every fact… had been independently verified by at least two separate sources'."),
          mc("What sometimes happened because of her caution?", ["She never missed a story.", "She lost scoops to faster, less careful rivals.", "She was fired.", "She was never wrong."], 1, "'this caution meant she lost a scoop to a faster, less careful rival'."),
          mc("What became her greatest professional asset?", ["Her speed.", "Her reputation for accuracy, which won sources' trust.", "Her salary.", "Her connections."], 1, "'Her reputation for accuracy… eventually became her greatest professional asset'."),
          mc("How did she treat her own mistakes?", ["She hid them.", "She corrected them prominently and without excuse.", "She denied them.", "She blamed others."], 1, "'insisted on correcting it prominently, promptly and without excuse'."),
          mc("What did she see an error as?", ["A humiliation to minimise.", "A debt to her readers to be paid in full.", "Unimportant.", "Someone else's fault."], 1, "'a debt to her readers that had to be paid in full and in public'."),
          mc("What question does her career pose to the industry?", ["Whether speed matters.", "Whether trust, not speed, is a journalist's most valuable offering.", "Whether journalism is dying.", "Whether readers care."], 1, "'the most valuable thing a journalist ultimately offers the public is not speed but trust'."),
        ],
      },
      p6: {
        title: "Can social media be trusted as a news source?",
        intro: "Cuatro personas opinan sobre si las redes sociales son fiables como fuente de noticias.",
        texts: {
          A: "NADIA: I get virtually all my news from social media now, and I don't see the problem. Traditional media has its own biases and agendas; at least online I can follow a range of sources and compare perspectives myself. The old gatekeepers weren't neutral either — they just pretended to be. Social media is messier, but at least the mess is visible.",
          B: "TOM: I find this view alarmingly naive. Social media algorithms are engineered to maximise engagement, not accuracy — they'll happily feed you outrage and falsehood if it keeps you scrolling. 'Comparing perspectives' sounds sensible in theory, but in practice most people just end up in echo chambers, consuming whatever confirms what they already believe. It's a terrible way to be informed.",
          C: "PRIYA: I think the real issue isn't the platform but the habits of the user. Social media can be a legitimate news source if you actively seek out credible outlets, fact-check claims, and resist the pull of your own biases. The technology isn't inherently good or bad; what matters is whether people bring critical thinking to it, which, frankly, most don't.",
          D: "SAM: What worries me most isn't individual gullibility but scale. Even if most people are reasonably careful, a single piece of disinformation can now reach millions within hours, faster than any fact-check can catch up. The problem isn't really about trusting or distrusting social media as an individual — it's a structural one, about how fast falsehood can now travel compared to truth.",
        },
        q: [
          mc("Who sees no problem in getting news mainly from social media?", ["A", "B", "C", "D"], 0, "Nadia: 'I don't see the problem'."),
          mc("Whose view most directly CONTRADICTS Nadia's confidence in comparing sources online?", ["A", "B", "C", "D"], 1, "Tom: 'alarmingly naive'."),
          mc("Who argues that what matters is the user's critical habits, not the platform?", ["A", "B", "C", "D"], 2, "Priya: 'the real issue isn't the platform but the habits of the user'."),
          mc("Who focuses on the structural speed problem rather than individual behaviour?", ["A", "B", "C", "D"], 3, "Sam: 'a structural one, about how fast falsehood can… travel'."),
        ],
      },
      p7: {
        title: "The birth of fact-checking",
        text: "For most of the history of journalism, the accuracy of a published claim rested largely on the judgement and integrity of the individual reporter. (1)___\n\nThis began to change, gradually, over the course of the twentieth century, as newsrooms started to formalise the process of verification. (2)___ Dedicated fact-checkers emerged as a distinct professional role, tasked specifically with confirming that every claim in a piece could withstand scrutiny before publication.\n\nThe arrival of the internet, and later of social media, transformed the landscape once again — and not, on the whole, for the better. (3)___ The speed of online publishing simply outpaced the careful, time-consuming work that thorough fact-checking requires.\n\nIn response, a new kind of institution emerged: the independent, public-facing fact-checking organisation. (4)___ Rather than working quietly behind the scenes of a single newsroom, these organisations investigate and publicly rate claims made by anyone, from politicians to viral social media posts.\n\nThe effectiveness of this new model remains hotly debated. (5)___ Critics point out that a correction rarely reaches as many people as the original false claim, and that determined believers often dismiss fact-checks as biased.\n\nWhatever its limitations, the rise of public fact-checking reflects something important about our current moment. (6)___ It is, in a sense, an admission that verification can no longer be left to journalists alone, but has become everyone's shared responsibility.",
        options: [
          "There was, in effect, no independent system of verification.",   // A -> gap 1
          "Large publications began building internal verification teams.", // B -> gap 2
          "The old, slower model of careful checking was placed under strain.", // C -> gap 3
          "Its mission is to check claims wherever they appear, not just in print.", // D -> gap 4
          "Some studies suggest it barely dents belief in falsehoods.",     // E -> gap 5
          "We have collectively realised that trust can no longer be assumed.", // F -> gap 6
          "Fact-checking has always been a formal, institutional process.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: no había sistema independiente de verificación."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las publicaciones crearon equipos internos."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el modelo lento quedó bajo presión."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: su misión es verificar donde sea."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: apenas reduce la creencia en falsedades."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la confianza ya no puede darse por hecha."),
        ],
      },
      p8: {
        title: "Four people discuss how they consume news",
        text: "Read what four people say about how they get and evaluate their news.\n\nA) NADIA: I deliberately follow outlets with opposing political leanings, on purpose, to see how differently the same event gets reported. It's genuinely unsettling sometimes how two 'factual' accounts of the same story can feel like they're describing different events entirely. It's taught me to read everything, even from sources I trust, with a degree of scepticism.\n\nB) TOM: I've basically given up trying to follow the news closely — it was making me anxious and I wasn't sure I trusted any of it anyway. Now I check in with a single weekly summary from a source known for careful, sober reporting. I probably miss some things, but I'd rather be calmly under-informed than constantly agitated by a stream I can't properly evaluate.\n\nC) PRIYA: My rule is simple: if a headline makes me feel a strong emotion, I stop and check it before believing or sharing it. Outrage and fear are exactly the feelings that badly reported or deliberately misleading stories are designed to trigger. That one habit alone has saved me from sharing several things that turned out to be false or badly distorted.\n\nD) SAM: I pay for two newspapers with a strong reputation for accuracy, on the theory that quality journalism costs money and free content is often free precisely because it isn't held to the same standard. I know that's not proof either is infallible, but the incentive structure of paid subscription journalism seems, to me, healthier than one built purely on clicks and advertising.\n",
        q: [
          mc("Who deliberately follows outlets with opposing political views?", ["A", "B", "C", "D"], 0, "Nadia: 'I deliberately follow outlets with opposing political leanings'."),
          mc("Who has largely given up following the news closely?", ["A", "B", "C", "D"], 1, "Tom: 'I've basically given up trying to follow the news closely'."),
          mc("Who stops to check anything that triggers a strong emotion?", ["A", "B", "C", "D"], 2, "Priya: 'if a headline makes me feel a strong emotion, I stop and check it'."),
          mc("Who pays for subscriptions on the theory that this creates better incentives?", ["A", "B", "C", "D"], 3, "Sam: 'quality journalism costs money'."),
          mc("Who found it unsettling how differently the same event can be reported?", ["A", "B", "C", "D"], 0, "Nadia: 'unsettling… how differently the same event gets reported'."),
          mc("Who prefers being 'calmly under-informed' to constantly agitated?", ["A", "B", "C", "D"], 1, "Tom: 'calmly under-informed'."),
          mc("Who says outrage and fear are deliberately triggered by misleading stories?", ["A", "B", "C", "D"], 2, "Priya: 'exactly the feelings that badly reported… stories are designed to trigger'."),
          mc("Who distrusts free content because of how it's funded?", ["A", "B", "C", "D"], 3, "Sam: 'free content is often free precisely because it isn't held to the same standard'."),
          mc("Who now reads everything with a degree of scepticism, even trusted sources?", ["A", "B", "C", "D"], 0, "Nadia: 'read everything, even from sources I trust, with a degree of scepticism'."),
          mc("Who relies on a single weekly summary rather than constant updates?", ["A", "B", "C", "D"], 1, "Tom: 'a single weekly summary'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre los medios se plantearon dos ideas:\n· social media has made us better informed (las redes nos informan mejor)\n· social media has made public debate worse (las redes empeoran el debate público)\nEscribe un ensayo comentando AMBAS ideas y explicando cuál pesa más, con razones y ejemplos. Usa al menos una estructura de INVERSIÓN. Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· CARTA/EMAIL a un periódico respondiendo a un artículo que consideras sesgado o inexacto: argumenta con firmeza y educación.\n· PROPUESTA para tu instituto/empresa sobre cómo enseñar alfabetización mediática: justifica y recomienda medidas.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two colleagues discussing a news story. Woman: Did you see how differently the two papers covered that story? Same facts, completely different framing. Man: Exactly, and neither one is technically lying. It's all in what they choose to emphasise, and what they leave out entirely. Woman: Which is almost more dangerous than outright lying, in a way — it's harder to fact-check a slant than a falsehood. Man: Right, you can't exactly correct someone's emphasis. Extract Two. You hear a media literacy teacher talking to students. Woman: The single most useful habit I can teach you is this: before you share anything, pause. Ask who wrote it, why, and what evidence backs it up. That three-second pause would prevent most of the misinformation that spreads online. Extract Three. You hear two friends discussing trust in journalism. Man: I honestly don't know who to believe anymore. Woman: I don't think it's about finding one perfectly trustworthy source — that doesn't exist. It's about triangulating: checking a claim against several outlets with different biases and seeing where they overlap. Man: That sounds exhausting. Woman: A bit, yes. But less exhausting than being manipulated.", [
      mc("1. What do the colleagues agree about the two papers?", ["One is lying.", "Same facts, different framing — neither technically lies.", "Both are accurate."], 1, "'neither one is technically lying… all in what they choose to emphasise'."),
      mc("2. Why might slant be more dangerous than outright lying?", ["It's illegal.", "It's harder to fact-check.", "It's rarer."], 1, "'harder to fact-check a slant than a falsehood'."),
      mc("3. What habit does the teacher recommend?", ["Reading more.", "A three-second pause before sharing to check who/why/evidence.", "Ignoring the news."], 1, "'pause. Ask who wrote it, why, and what evidence backs it up'."),
      mc("4. What would this pause prevent?", ["Nothing.", "Most of the misinformation that spreads online.", "All news."], 1, "'would prevent most of the misinformation'."),
      mc("5. What does the woman suggest instead of finding one trustworthy source?", ["Trusting no one.", "Triangulating across several outlets with different biases.", "Reading only official news."], 1, "'triangulating: checking a claim against several outlets'."),
      mc("6. How does she feel about this approach?", ["It's easy.", "A bit exhausting, but less so than being manipulated.", "Pointless."], 1, "'less exhausting than being manipulated'."),
    ]),

    ...speakingParts({ p1: "de dónde sacas las noticias y cuánto confías en los medios de comunicación", p2: "dos formas de informarse (alguien leyendo un periódico tradicional y alguien mirando el móvil lleno de notificaciones): compáralas y especula sobre cuál informa mejor", p3: "qué ayuda más a distinguir información fiable de desinformación (verificar fuentes, leer varios medios, desconfiar de titulares emocionales, pagar por periodismo de calidad, la educación mediática): comentadlo y elegid lo más eficaz", p4: "los medios de comunicación: si las redes sociales han empeorado el debate público, si podemos confiar en el periodismo actual y qué papel debería tener la censura frente a la desinformación" }),

    SUMMARY("Resumen del Día 6", [
      "Inversión tras Never/Rarely/Seldom, Not only… but also, Only when/after, No sooner… than / Hardly… when, Little, Under no circumstances.",
      "Estructura: adverbio + auxiliar + sujeto + verbo (añade do/does/did si no hay auxiliar).",
      "Vocabulario de medios y desinformación. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 7", "Escribe 6 frases con inversión tras adverbios negativos/limitativos. Repasa las flashcards. Mañana: las oraciones hendidas (cleft sentences)."),
  ],
};

// ───────────────────────── DÍA 7 ─────────────────────────
const DAY7 = {
  title: "Día 7 — Las oraciones hendidas (cleft sentences) · El periodismo y la verdad",
  description: "It-cleft y what-cleft para dar énfasis; all-cleft; the thing/reason/place-cleft. Vocabulario de periodismo. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Usar las oraciones hendidas para enfatizar el elemento que interesa destacar.",
    summary: "Cleft sentences; periodismo y verdad; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["olvidar 'that/who' tras el elemento enfatizado en it-cleft.", "usar 'what' con sentido de 'that which' incorrectamente.", "no ajustar el verbo ser (is/was) al tiempo original."],
    reviewPrompts: ["¿Cómo enfatizas 'I need more time' con un it-cleft?", "¿Y con un what-cleft?"],
  },
  items: [
    TEXT("🔁 Ayer, la inversión. Hoy las ORACIONES HENDIDAS (cleft sentences): 'partimos' la frase para destacar un elemento concreto. Vocabulario: el PERIODISMO y la VERDAD."),
    GRAMMAR("Las oraciones hendidas (cleft sentences)", `Las cleft sentences 'parten' una frase simple en dos para dar ÉNFASIS a un elemento concreto.
IT-CLEFT: It + be + elemento enfatizado + that/who + resto.
· Frase simple: The editor rejected the article because of its tone.
· Énfasis en el sujeto: It was the editor who rejected the article.
· Énfasis en el motivo: It was because of its tone that the editor rejected the article.
WHAT-CLEFT (pseudo-cleft): What + resto + be + elemento enfatizado.
· Frase simple: I need more evidence.
· What I need is more evidence. / What worries me is the lack of transparency.
· Con ACCIÓN: What the journalist did was (to) expose the scandal.
ALL-CLEFT: All + resto + be + elemento (= "lo único que…"): All I want is the truth.
THE THING/REASON/PLACE-CLEFT: The thing that surprised me was his honesty. The reason (why) she resigned was the pressure. The place where it happened was the newsroom.
⚠️ El it-cleft enfatiza CUALQUIER elemento (sujeto, objeto, circunstancia); el what-cleft normalmente enfatiza el objeto/complemento o una acción.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ It was the editor rejected the article → ✅ It was the editor WHO/THAT rejected the article (no omitas el conector).\n· ❌ What I need it's more time → ✅ What I need IS more time (sin 'it').\n· Ajusta el tiempo del verbo 'be': It IS… (presente) vs It WAS… (pasado), según el original.\n· What-cleft con verbo de acción: 'What she did was TO resign' o 'What she did was resign' (ambos válidos)."),
    grammarEx("Use of English — Oraciones hendidas", "Transforma con cleft sentences.", [
      mc("Simple: 'The reporter uncovered the scandal.' It-cleft (énfasis en el sujeto):", ["It was the reporter who uncovered the scandal.", "It was the reporter uncovered the scandal.", "The reporter it was who uncovered."], 0, "it + be + sujeto + who."),
      fb("Simple: 'I want the truth.' What-cleft:", ["What I want is the truth"], "What + resto + be + elemento."),
      mc("Simple: 'She resigned because of the pressure.' It-cleft (énfasis en la causa):", ["It was because of the pressure that she resigned.", "It was the pressure she resigned.", "Because of the pressure it was she resigned."], 0, "it + be + causa + that."),
      fb("Simple: 'He apologised.' What-cleft (con acción):", ["What he did was apologise", "What he did was to apologise"], "What… did was (to) + infinitivo."),
      mc("Simple: 'Only the evidence convinced the jury.' All-cleft:", ["All that convinced the jury was the evidence.", "All the evidence it convinced.", "It all was the evidence."], 0, "All + resto + be + elemento."),
      fb("Simple: 'The pressure surprised me most.' The thing-cleft:", ["The thing that surprised me most was the pressure"], "The thing that + verbo + was + elemento."),
    ]),
    GRAMMAR("Vocabulario del día — El periodismo y la verdad (C1)", "Léxico avanzado de periodismo."),
    deck("C1 S2D7 — Periodismo y verdad", [
      ["investigative journalism", "periodismo de investigación", "Investigative journalism exposed the fraud.", "sustantivo", "ɪnˈvestɪɡətɪv ˈdʒɜːnəlɪzəm"],
      ["source", "fuente (de información)", "She protected her source's identity.", "sustantivo", "sɔːs"],
      ["exposé", "reportaje de denuncia", "The exposé caused a huge scandal.", "sustantivo", "ekˈspəʊzeɪ"],
      ["impartial", "imparcial", "Good journalism strives to be impartial.", "adjetivo", "ɪmˈpɑːʃl"],
      ["accountable", "responsable / rendir cuentas", "The press holds power accountable.", "adjetivo", "əˈkaʊntəbl"],
      ["leak", "filtración / filtrar", "The documents were leaked to the press.", "sustantivo/verbo", "liːk"],
      ["integrity", "integridad", "She never compromised her integrity.", "sustantivo", "ɪnˈteɡrəti"],
      ["defamation", "difamación", "He was sued for defamation.", "sustantivo", "ˌdefəˈmeɪʃn"],
      ["corroborate", "corroborar", "Two witnesses corroborated the account.", "verbo", "kəˈrɒbəreɪt"],
      ["muckraking", "periodismo escandaloso / sensacionalista", "It read more like muckraking than news.", "sustantivo", "ˈmʌkreɪkɪŋ"],
    ]),
    vocabEx("Vocabulario — El periodismo y la verdad", "Elige la opción correcta.", [
      mc("A person who gives information to a journalist, often anonymously, is a ___.", ["source", "exposé", "leak"], 0, "source."),
      mc("A detailed report revealing wrongdoing is an ___.", ["exposé", "source", "leak"], 0, "exposé."),
      mc("Not favouring one side is being ___.", ["impartial", "accountable", "corroborated"], 0, "impartial."),
      mc("To confirm a claim with further evidence is to ___ it.", ["corroborate", "leak", "defame"], 0, "corroborate."),
      mc("To be answerable for one's actions is to be ___.", ["accountable", "impartial", "corroborated"], 0, "accountable."),
      mc("Publishing false statements that damage someone's reputation is ___.", ["defamation", "integrity", "muckraking"], 0, "defamation."),
    ]),

    ...uoe({
      p1: {
        title: "What journalism owes the public",
        text: "What journalism ultimately owes the public is not comfort but truth, however (1)___ that truth may be. This is a principle easily stated and, in practice, exceptionally difficult to honour. Every news organisation faces (2)___ pressures — commercial, political, social — that push, subtly or otherwise, towards telling audiences what they wish to hear rather than what they need to know. The journalist who reports (3)___ that a popular cause has been overstated, or that a beloved public figure has behaved badly, can expect fury from precisely the audience they are trying to serve. It takes a particular kind of (4)___ to publish an inconvenient truth, knowing it will alienate readers, invite abuse, and perhaps even threaten one's career. And yet this is precisely what distinguishes serious journalism from mere flattery or propaganda. A press that only ever confirms what its audience already believes has (5)___ its fundamental purpose, becoming a mirror rather than a window. What separates the journalist worth (6)___ from the mere entertainer is a willingness to report the truth even, and especially, when it is unwelcome — to accept that their job is not to be liked but to be (7)___. In an age of increasingly polarised and partisan media, this old-fashioned commitment to inconvenient truth may be journalism's most (8)___ virtue, and its rarest.",
        q: [
          mc("(1)", ["uncomfortable", "unwelcome", "unpleasant", "unfortunate"], 0, "'however uncomfortable that truth may be'."),
          mc("(2)", ["conflicting", "competing", "opposing", "contrary"], 1, "'competing pressures'."),
          mc("(3)", ["truthfully", "honestly", "accurately", "faithfully"], 2, "'reports accurately that…'."),
          mc("(4)", ["courage", "bravery", "nerve", "boldness"], 0, "'a particular kind of courage'."),
          mc("(5)", ["abandoned", "betrayed", "forsaken", "forgone"], 0, "'has abandoned its fundamental purpose'."),
          mc("(6)", ["trusting", "believing", "relying", "following"], 0, "'the journalist worth trusting'."),
          mc("(7)", ["trusted", "believed", "credible", "reliable"], 0, "'their job is not to be liked but to be trusted'."),
          mc("(8)", ["essential", "vital", "crucial", "important"], 0, "'journalism's most essential virtue'."),
        ],
      },
      p2: {
        title: "The reporter's dilemma",
        text: "Every investigative journalist eventually confronts a version of the same difficult question: what, exactly, does one owe (1)___ a source who has confided damaging information in confidence? The promise of anonymity is often the only thing that persuades a frightened whistleblower to come forward at (2)___, and a journalist who breaks that promise, even under legal pressure, betrays not only an individual source but the entire profession's credibility for years to come. It is (3)___ wonder, then, that reporters have gone to prison rather than reveal a source's identity, treating the promise of confidentiality as close to sacred. And yet this same commitment can be exploited. A source with an axe to grind can hide (4)___ the cloak of anonymity while feeding a journalist convenient half-truths, using the reporter's professional ethics as a shield for their own agenda. The responsible journalist must therefore walk a genuinely difficult line: protecting sources fiercely enough to maintain the trust on (5)___ investigative journalism depends, while remaining sufficiently sceptical of any single source that they do not become an unwitting mouthpiece for someone else's manipulation. There is no formula that resolves this tension neatly; it must be negotiated, case (6)___ case, through judgement, experience and a healthy dose of professional paranoia. What separates the great investigative reporter from the merely competent (7)___ is precisely this capacity to hold both commitments — loyalty to sources and scepticism (8)___ them — simultaneously, without letting either one collapse into the other.",
        q: [
          fb("(1)", ["to"], "'owe to a source'."),
          fb("(2)", ["all"], "'come forward at all'."),
          fb("(3)", ["little"], "'It is little wonder'."),
          fb("(4)", ["behind"], "'hide behind the cloak'."),
          fb("(5)", ["which"], "'the trust on which… depends'."),
          fb("(6)", ["by"], "'case by case'."),
          fb("(7)", ["one"], "'the merely competent one'."),
          fb("(8)", ["of", "towards"], "'scepticism of/towards them'."),
        ],
      },
      p3: {
        title: "The vanishing local newsroom",
        text: "The steady (1)___ of local newspapers across much of the developed world has proceeded, for years, with remarkably little public outcry, and the consequences of this quiet decline are only now becoming (2)___. It is tempting to assume that the loss of a small-town newspaper matters little in an age of instant, global information — that residents can simply turn to national outlets or social media instead. This assumption, research increasingly suggests, is badly (3)___. National media, for all its resources, rarely covers the workings of a local council, a school board dispute, or a regional court case with the sustained attention a dedicated local reporter once provided. When local newsrooms close, studies have found, local corruption tends to (4)___ unchecked, civic engagement declines, and even municipal borrowing costs rise, as the absence of scrutiny reduces (5)___ in local government's financial competence. The disappearance of the local reporter, in other words, is not merely a cultural (6)___ but a measurable threat to good governance at precisely the level where citizens have the most direct power to effect change. Rebuilding this lost (7)___ will not be easy, given the collapsed advertising revenues that once sustained it, but a growing number of non-profit and reader-funded models are attempting exactly that, betting that citizens, once they understand what has been (8)___, will be willing to pay to get it back.",
        items: [
          { root: "appear", accepted: ["disappearance"], hint: "'the steady disappearance' → disappearance." },
          { root: "apparent", accepted: ["apparent"], hint: "'only now becoming apparent' (adjetivo)." },
          { root: "found", accepted: ["unfounded"], hint: "'badly unfounded' → unfounded." },
          { root: "flourish", accepted: ["flourish"], hint: "'tends to flourish unchecked' (verbo)." },
          { root: "confide", accepted: ["confidence"], hint: "'reduces confidence' → confidence." },
          { root: "loss", accepted: ["loss"], hint: "'not merely a cultural loss' (sustantivo)." },
          { root: "infrastructure", accepted: ["infrastructure"], hint: "'this lost infrastructure' (sustantivo)." },
          { root: "lose", accepted: ["lost"], hint: "'what has been lost' → lost." },
        ],
      },
      p4: {
        title: "Transformaciones — cleft sentences",
        items: [
          { s1: "The editor rejected the story, not the journalist.", key: "WAS", s2: "It ___ the editor, not the journalist, who rejected the story.", accepted: ["was"], explanation: "it-cleft: sujeto enfatizado." },
          { s1: "I need more time to verify the claim.", key: "WHAT", s2: "___ is more time to verify the claim.", accepted: ["What I need"], explanation: "what-cleft." },
          { s1: "She resigned because of the pressure, not because of guilt.", key: "WAS", s2: "It ___ because of the pressure, not guilt, that she resigned.", accepted: ["was"], explanation: "it-cleft: causa enfatizada." },
          { s1: "The journalist decided to publish the leaked documents.", key: "DID", s2: "What the journalist ___ was to publish the leaked documents.", accepted: ["did"], explanation: "what-cleft con acción." },
          { s1: "Only the corroborating evidence convinced the editor.", key: "ALL", s2: "___ convinced the editor was the corroborating evidence.", accepted: ["All that"], explanation: "all-cleft." },
          { s1: "His integrity surprised me most.", key: "THING", s2: "The ___ that surprised me most was his integrity.", accepted: ["thing"], explanation: "the thing-cleft." },
        ],
      },
      p5: {
        title: "The correction nobody read",
        text: "In the spring of a year now largely forgotten, a respected national newspaper published a front-page investigation alleging serious financial misconduct by a prominent public official. The story, built on documents that later proved to have been partially forged by a source with a personal grudge, spread with extraordinary speed, reprinted within hours by outlets around the world and shared millions of times across social media by readers eager to believe the worst of a figure many already distrusted. Within days, the official's career, built over three decades of otherwise unblemished public service, lay in ruins.\n\nIt took the newspaper's own investigative team almost six weeks of painstaking work to unravel what had actually happened: that the central documents underpinning the story had been doctored, and that the official had, in fact, done nothing wrong. When the correction finally ran, the newspaper handled it, by the standards of the industry, admirably. It was not buried in small print on an inside page, as corrections so often are, but placed prominently, accompanied by a lengthy explanation of exactly how the error had occurred and a personal apology from the editor.\n\nBut the damage, by then, was essentially permanent. The original false story had been read, shared and absorbed into public consciousness by an audience numbering in the tens of millions; the correction, however honourably presented, reached perhaps a tenth of that number. Search engines, for years afterwards, continued to surface the original, discredited allegations more prominently than the correction that had thoroughly debunked them. The official, though legally and professionally exonerated, found that a significant portion of the public had simply never heard the second half of the story, and continued, for years, to regard them with suspicion.\n\nThis case has since become a staple of journalism ethics courses, cited repeatedly as a stark illustration of what researchers term the 'asymmetry of correction': the well-documented tendency for false information to travel far more widely, and to be remembered far more durably, than any subsequent retraction, however conscientiously issued. A lie, as the old and now scientifically well-supported saying has it, can travel halfway around the world before the truth has even got its shoes on — and, crucially, a disproportionate number of the people who heard the lie will never hear that it was corrected at all.\n\nWhat makes this asymmetry so troubling is that it cannot easily be fixed by good journalistic practice alone. The newspaper in this case did, by most measures, almost everything right once its error came to light: it investigated its own mistake thoroughly, corrected it prominently, and apologised sincerely and without evasion. And still the damage endured, largely undone, for years. The episode suggests that responsible journalism, however necessary, is not by itself sufficient to protect the public from the corrosive effects of misinformation; something more — perhaps in how platforms surface corrections, perhaps in how readers are trained to seek out updates to stories they have already absorbed — is evidently also required if the asymmetry between lie and correction is ever to be meaningfully narrowed.",
        q: [
          mc("What did the original investigation allege?", ["Nothing significant.", "Serious financial misconduct by a public official.", "A minor administrative error.", "A resignation."], 1, "'a front-page investigation alleging serious financial misconduct'."),
          mc("What was later discovered about the central documents?", ["They were genuine.", "They had been partially forged by a source with a grudge.", "They were lost.", "They were never checked."], 1, "'the central documents… had been partially forged by a source with a personal grudge'."),
          mc("How did the newspaper handle the correction, by industry standards?", ["Poorly, buried in small print.", "Admirably — prominent, with explanation and apology.", "It refused to correct it.", "It blamed the official."], 1, "'placed prominently, accompanied by a lengthy explanation… and a personal apology'."),
          mc("What happened despite the prominent correction?", ["Full recovery.", "The damage was essentially permanent; the correction reached far fewer people.", "Nothing changed.", "The official was never affected."], 1, "'the correction… reached perhaps a tenth of that number'."),
          mc("What do researchers call this phenomenon?", ["Media bias.", "The 'asymmetry of correction'.", "Fact-checking.", "Confirmation bias."], 1, "'what researchers term the \"asymmetry of correction\"'."),
          mc("What does the episode suggest about responsible journalism alone?", ["It's always sufficient.", "It is necessary but not by itself sufficient to undo misinformation's damage.", "It's irrelevant.", "It guarantees no harm."], 1, "'responsible journalism, however necessary, is not by itself sufficient to protect the public'."),
        ],
      },
      p6: {
        title: "Should journalists ever remain neutral?",
        intro: "Cuatro personas debaten si el periodismo debe ser siempre neutral.",
        texts: {
          A: "NADIA: Journalistic neutrality is, I think, mostly a comforting fiction. Every choice — which story to cover, which quote to use, which fact to lead with — involves judgement, and judgement is never entirely neutral. I'd rather journalists were transparent about their perspective than pretend to a false objectivity that doesn't really exist.",
          B: "TOM: I strongly disagree. Yes, perfect neutrality is unattainable, but that's an argument for striving harder towards it, not abandoning it altogether. The moment journalists openly take sides, readers lose any independent check on power — you just get two tribes shouting past each other, each with their own 'facts'. Impartiality remains the right aspiration, even if imperfectly achieved.",
          C: "PRIYA: I'd distinguish between reporting facts and covering moral questions. On factual matters — did this event happen, is this document genuine — neutrality between truth and falsehood makes no sense at all. But on genuinely contested value questions, restraint seems wiser. The line isn't always obvious, but I think it exists.",
          D: "SAM: What concerns me is treating 'neutrality' as automatically virtuous. Giving equal weight to a well-supported scientific consensus and a fringe conspiracy theory, in the name of balance, isn't neutral at all — it actively distorts the truth by making a marginal view look equally credible. Sometimes real accuracy requires journalists to clearly say one side is simply right.",
        },
        q: [
          mc("Who calls journalistic neutrality 'mostly a comforting fiction'?", ["A", "B", "C", "D"], 0, "Nadia: 'mostly a comforting fiction'."),
          mc("Whose view most DIRECTLY opposes Nadia's, defending impartiality as an aspiration?", ["A", "B", "C", "D"], 1, "Tom: 'Impartiality remains the right aspiration'."),
          mc("Who distinguishes between factual reporting and contested value questions?", ["A", "B", "C", "D"], 2, "Priya: 'distinguish between reporting facts and covering moral questions'."),
          mc("Who argues that false balance can itself distort the truth?", ["A", "B", "C", "D"], 3, "Sam: 'making a marginal view look equally credible'."),
        ],
      },
      p7: {
        title: "Why we believe what confirms our beliefs",
        text: "It has long been observed that people are far more likely to accept a claim, however weak the evidence behind it, if it confirms what they already believe. (1)___\n\nPsychologists have a name for this tendency: motivated reasoning. (2)___ Rather than evaluating evidence impartially, we unconsciously apply far stricter standards to claims we dislike than to those we welcome.\n\nThis helps explain a puzzling feature of misinformation: why corrections so often fail to change minds, even among intelligent, well-educated people. (3)___ A correction that threatens a cherished belief is scrutinised fiercely, while the original, comfortable falsehood was accepted almost without question.\n\nWhat makes this bias so insidious is that it operates below conscious awareness. (4)___ We genuinely believe we are reasoning objectively, even as our conclusions are quietly steered by what we want to be true.\n\nThe implications for journalism and public discourse are considerable. (5)___ No amount of careful, accurate reporting can fully overcome a reader's motivated resistance to an unwelcome truth.\n\nUnderstanding this does not, unfortunately, provide an easy fix. (6)___ But it does suggest that changing minds requires more than simply presenting better evidence; it requires understanding, and gently working with, the emotional stakes that make certain truths so hard to accept.",
        options: [
          "This is not new, but it has rarely mattered more than today.",    // A -> gap 1
          "It describes our tendency to reason towards a preferred conclusion.", // B -> gap 2
          "Intelligence, it turns out, offers little protection against it.", // C -> gap 3
          "Nobody experiences this bias as bias; it simply feels like thinking.", // D -> gap 4
          "Facts alone, it seems, are rarely enough to change a mind.",       // E -> gap 5
          "Knowing about a bias does not automatically dissolve it.",         // F -> gap 6
          "People always evaluate evidence with perfect impartiality.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: no es nuevo, pero nunca importó tanto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: describe razonar hacia lo que queremos."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la inteligencia apenas protege."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: nadie lo siente como sesgo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: los hechos solos rara vez bastan."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: saberlo no lo disuelve automáticamente."),
        ],
      },
      p8: {
        title: "Four journalists discuss the hardest part of their job",
        text: "Read what four journalists say about the most difficult aspect of their work.\n\nA) NADIA: For me it's the loneliness of an unpopular truth. I once reported something my own readers, and even some colleagues, deeply didn't want to hear. The backlash was ferocious. What got me through was reminding myself, over and over, that being liked and being right are entirely different things, and that my job was the second one, not the first.\n\nB) TOM: The hardest part, honestly, is knowing when to stop digging. You can always find one more source, verify one more detail — but readers need the story eventually, and a competitor might publish first. Learning to judge 'enough evidence' rather than 'perfect certainty' without compromising accuracy took me years, and I still get it wrong sometimes.\n\nC) PRIYA: What I find hardest is protecting a source while the story causes them real harm anyway — losing their job, their relationships, even facing threats — despite my best efforts at anonymity. You carry a real weight of responsibility for someone who trusted you, and no amount of professional distance fully removes that.\n\nD) SAM: For me it's resisting the pull towards outrage. The stories that get the most attention, that keep my editors happiest, are the angriest ones. Writing the calm, nuanced version instead, the one that doesn't inflame anyone, feels like professional self-sabotage some days, even though I believe it's the more honest kind of journalism.\n",
        q: [
          mc("Who finds the loneliness of reporting unpopular truths hardest?", ["A", "B", "C", "D"], 0, "Nadia: 'the loneliness of an unpopular truth'."),
          mc("Who struggles most with knowing when to stop investigating?", ["A", "B", "C", "D"], 1, "Tom: 'the hardest part… is knowing when to stop digging'."),
          mc("Who feels responsible when a protected source is harmed anyway?", ["A", "B", "C", "D"], 2, "Priya: 'protecting a source while the story causes them real harm anyway'."),
          mc("Who resists the pull towards writing outrage-generating stories?", ["A", "B", "C", "D"], 3, "Sam: 'resisting the pull towards outrage'."),
          mc("Who reminds themselves that being liked and being right differ?", ["A", "B", "C", "D"], 0, "Nadia: 'being liked and being right are entirely different things'."),
          mc("Who took years to learn to judge 'enough evidence' vs 'perfect certainty'?", ["A", "B", "C", "D"], 1, "Tom: 'took me years'."),
          mc("Who says no professional distance fully removes the weight of responsibility?", ["A", "B", "C", "D"], 2, "Priya: 'no amount of professional distance fully removes that'."),
          mc("Who feels writing the calm version sometimes feels like 'self-sabotage'?", ["A", "B", "C", "D"], 3, "Sam: 'feels like professional self-sabotage'."),
          mc("Who faced ferocious backlash from readers and colleagues?", ["A", "B", "C", "D"], 0, "Nadia: 'The backlash was ferocious'."),
          mc("Who worries a competitor might publish first?", ["A", "B", "C", "D"], 1, "Tom: 'a competitor might publish first'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el periodismo se plantearon dos ideas:\n· journalists should always remain neutral (los periodistas deben ser siempre neutrales)\n· sometimes journalism requires taking a clear stand (a veces el periodismo exige tomar postura)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos una oración HENDIDA (cleft sentence). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· RESEÑA de un documental o libro de periodismo de investigación que hayas visto/leído: descríbelo y valóralo.\n· INFORME sobre cómo mejorar la confianza del público en los medios de tu país: Introduction / Findings / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una periodista de investigación, Clara Nowak, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear an investigative journalist called Clara Nowak giving a talk. Clara Nowak: What I want to talk about today is trust — how hard it is to earn and how easy it is to lose. Early in my career, I learned the hard way that a single unverified claim can undo years of credibility. Since then, my rule has been simple: never publish anything backed by only one source, no matter how convincing they seem. My second point concerns anonymity. Protecting a source isn't just professional courtesy; it's often the only thing standing between a whistleblower and real danger. I've gone to considerable lengths, including legal risk, to protect sources I've promised confidentiality. Third, I want to address speed. The pressure to publish first is enormous, but being first and being wrong is far worse than being second and being right. I'd rather lose a scoop than run a false story. My fourth point is about corrections. When I get something wrong, and it has happened, I correct it as prominently as the original error. Burying a correction is, to me, a form of dishonesty in itself. And finally, the thing I most want young journalists to understand: your job isn't to be popular. It's to be accurate, and sometimes those two things pull in completely opposite directions.", [
      fb("Clara's rule is never to publish a claim backed by only one ___.", ["source"], "'only one source'."),
      fb("Protecting a source is often the only thing standing between a whistleblower and real ___.", ["danger"], "'real danger'."),
      fb("She has gone to considerable ___ to protect sources.", ["lengths"], "'gone to considerable lengths'."),
      fb("Being first and wrong is far worse than being second and ___.", ["right"], "'being second and being right'."),
      fb("She would rather lose a ___ than run a false story.", ["scoop"], "'lose a scoop'."),
      fb("She corrects errors as ___ as the original mistake.", ["prominently"], "'as prominently as the original error'."),
      fb("Burying a correction is a form of ___ in itself.", ["dishonesty"], "'a form of dishonesty in itself'."),
      fb("A journalist's job is to be accurate, not ___.", ["popular"], "'not to be popular'."),
    ]),

    ...speakingParts({ p1: "si confías en el periodismo de tu país y qué buscas en una buena fuente de noticias", p2: "dos imágenes del periodismo (un reportero investigando en archivos y alguien grabando en directo para redes): compáralas y especula sobre cuál produce mejor información", p3: "qué hace fiable a un medio de comunicación (verificación rigurosa, transparencia sobre errores, independencia económica, diversidad de fuentes, corrección pública de errores): comentadlo y elegid lo más importante", p4: "el periodismo y la verdad: si los periodistas deben ser siempre neutrales, si la prensa local importa y cómo debería la sociedad recompensar el buen periodismo" }),

    SUMMARY("Resumen del Día 7", [
      "It-cleft: It + be + elemento + that/who + resto (enfatiza cualquier elemento).",
      "What-cleft: What + resto + be + elemento (objeto/acción). All-cleft ('lo único que…'); the thing/reason-cleft.",
      "Vocabulario de periodismo. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 8", "Reescribe 6 frases con it-cleft o what-cleft para dar énfasis. Repasa las flashcards. Mañana: do/did enfático, so/such...that e intensificadores."),
  ],
};

// ───────────────────────── DÍA 8 ─────────────────────────
const DAY8 = {
  title: "Día 8 — Do/did enfático, so/such…that e intensificadores · Las redes sociales y la opinión pública",
  description: "Do/did enfático; so + adj/adv…that y such (a) + sustantivo…that; intensificadores (absolutely, utterly, downright, remarkably) con gradables/no gradables. Vocabulario de redes sociales. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Intensificar y enfatizar con precisión usando do/did, so/such y los intensificadores correctos.",
    summary: "Do/did enfático; so/such…that; intensificadores; redes sociales; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'such' con adjetivo solo, sin sustantivo (❌ such interesting).", "usar 'very' con adjetivos no gradables (❌ very furious).", "olvidar 'a/an' en 'such a + adjetivo + sustantivo singular'."],
    reviewPrompts: ["¿'so' o 'such' con 'a difficult problem'?", "¿Qué intensificador va con 'exhausted' (no gradable)?"],
  },
  items: [
    TEXT("🔁 Ayer, las cleft sentences. Hoy el DO/DID ENFÁTICO, SO/SUCH…THAT y los INTENSIFICADORES: recursos para dar fuerza a lo que dices. Vocabulario: las REDES SOCIALES y la OPINIÓN PÚBLICA."),
    GRAMMAR("Do/did enfático, so/such…that e intensificadores", `DO/DID ENFÁTICO: añade do/does/did antes del verbo en afirmativa para dar énfasis (contradecir, insistir, confirmar): I DO understand your concern. She DID warn us, but we didn't listen. He DOES care, even if he doesn't show it.
SO / SUCH…THAT (consecutivas):
· SO + adjetivo/adverbio (+ that): The report was so biased (that) nobody trusted it.
· SUCH (+ a/an) + (adjetivo) + sustantivo (+ that): It was such a compelling argument (that) everyone was convinced. / They are such good journalists (that)…
· SO MANY/MUCH + sustantivo…that: There was so much misinformation that fact-checkers couldn't keep up.
⚠️ 'such' necesita SUSTANTIVO; 'so' no lo admite (❌ so interesting article → ✅ such an interesting article / so interesting an article, formal).
INTENSIFICADORES — GRADABLES vs NO GRADABLES:
· Adjetivos GRADABLES (admiten grados): very, really, extremely, remarkably, incredibly + good/difficult/interesting.
· Adjetivos NO GRADABLES (ya extremos: furious, exhausted, brilliant, terrified, impossible): absolutely, utterly, completely, totally, downright + furious/exhausted/impossible.
⚠️ ❌ very exhausted → ✅ absolutely/utterly exhausted (ya es un extremo).`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ It was so good article → ✅ It was such a good article.\n· ❌ very furious → ✅ absolutely/utterly furious (no gradable).\n· Do enfático solo en AFIRMATIVA (no en negativa/interrogativa estándar): I DO agree (no 'I do not agree' con este matiz especial).\n· 'such a + adj + sustantivo singular' lleva artículo; 'such + adj + sustantivo plural' NO: such interesting people (sin 'a')."),
    grammarEx("Use of English — Do enfático, so/such, intensificadores", "Elige o completa.", [
      mc("I know you doubt me, but I ___ care about this cause.", ["do", "did", "am"], 0, "do enfático (presente)."),
      mc("It was ___ compelling argument that the jury was convinced.", ["so", "such a", "such"], 1, "such a + adj + sustantivo singular."),
      fb("There was ___ much noise online that the real story got lost.", ["so"], "so much + sustantivo."),
      mc("She was ___ exhausted after the investigation that she slept for two days.", ["very", "absolutely", "quite"], 1, "no gradable → absolutely."),
      mc("He ___ warn us about the risks, but nobody listened.", ["did", "does", "was"], 0, "did enfático (pasado)."),
      fb("It was ___ a scandal that the minister had to resign. (such/so)", ["such"], "such + a + sustantivo."),
      mc("The claim was ___ impossible to verify that they abandoned the story.", ["very", "so", "such"], 1, "so + adjetivo…that."),
    ]),
    GRAMMAR("Vocabulario del día — Las redes sociales y la opinión pública (C1)", "Léxico avanzado de redes sociales."),
    deck("C1 S2D8 — Redes sociales y opinión pública", [
      ["viral", "viral (que se difunde masivamente)", "The video went viral overnight.", "adjetivo", "ˈvaɪrəl"],
      ["backlash", "reacción adversa / contragolpe", "The comment sparked a huge backlash.", "sustantivo", "ˈbæklæʃ"],
      ["troll", "trol (provocador online)", "She was targeted by online trolls.", "sustantivo", "trəʊl"],
      ["cancel culture", "cultura de la cancelación", "Cancel culture is fiercely debated.", "sustantivo", "ˈkænsl ˈkʌltʃə"],
      ["polarise", "polarizar", "The issue has polarised public opinion.", "verbo", "ˈpəʊləraɪz"],
      ["influencer", "influencer / creador/a de opinión", "Influencers shape consumer habits.", "sustantivo", "ˈɪnfluənsə"],
      ["mob mentality", "mentalidad de masa / de turba", "Social media can fuel mob mentality.", "sustantivo", "ˈmɒb menˈtæləti"],
      ["outrage", "indignación / indignar", "The decision provoked public outrage.", "sustantivo/verbo", "ˈaʊtreɪdʒ"],
      ["algorithm", "algoritmo", "The algorithm favours divisive content.", "sustantivo", "ˈælɡərɪðəm"],
      ["discourse", "discurso (público)", "Public discourse has grown coarser.", "sustantivo", "ˈdɪskɔːs"],
    ]),
    vocabEx("Vocabulario — Las redes sociales y la opinión pública", "Elige la opción correcta.", [
      mc("Content that spreads extremely fast online is ___.", ["viral", "polarised", "trolled"], 0, "viral."),
      mc("A strong, often angry, reaction against something is a ___.", ["backlash", "algorithm", "discourse"], 0, "backlash."),
      mc("Someone who posts online to provoke or upset others is a ___.", ["troll", "influencer", "algorithm"], 0, "troll."),
      mc("The set of automated rules that decide what content you see is the ___.", ["algorithm", "backlash", "outrage"], 0, "algorithm."),
      mc("To divide opinion sharply into opposing camps is to ___.", ["polarise", "trend", "trend"], 0, "polarise."),
      mc("Widespread public anger at something is public ___.", ["outrage", "discourse", "backlash"], 0, "outrage."),
    ]),

    ...uoe({
      p1: {
        title: "The mob has a memory",
        text: "There was a time when a foolish remark, made in the heat of the moment, would simply vanish into the air, remembered only by those (1)___ earshot. That world is gone. Today, a single ill-judged comment can be captured, screenshotted and broadcast to millions within minutes, long (2)___ the speaker has any chance to explain, apologise or provide context. The mob that assembles online moves with astonishing speed and, all too often, astonishingly little patience for nuance. Complex situations get flattened into simple villains and victims; a moment of poor judgement gets treated as definitive proof of (3)___ character. And once the digital mob has formed, reasoning with it becomes almost impossible; algorithms, (4)___ favour engagement over accuracy, ensure that the most outraged reactions are seen by the (5)___ number of people, drowning out calmer, more measured voices. This is not an argument (6)___ accountability, which remains essential; genuinely harmful behaviour deserves genuine consequences. But there is a real difference (7)___ accountability and the kind of permanent, disproportionate punishment that a viral pile-on can inflict for a single, out-of-context remark. Navigating this distinction — distinguishing serious wrongdoing from a momentary lapse blown wildly out of (8)___ — may be one of the great unresolved challenges of our digitally connected age.",
        q: [
          mc("(1)", ["within", "in", "at", "into"], 0, "'within earshot'."),
          mc("(2)", ["before", "until", "by", "when"], 0, "'long before the speaker has any chance'."),
          mc("(3)", ["their", "his", "her", "one's"], 0, "'proof of their character'."),
          mc("(4)", ["which", "that", "who", "these"], 0, "'algorithms, which favour engagement'."),
          mc("(5)", ["greatest", "biggest", "widest", "largest"], 3, "'the largest number of people'."),
          mc("(6)", ["against", "for", "about", "over"], 0, "'an argument against accountability'."),
          mc("(7)", ["between", "among", "amid", "within"], 0, "'a real difference between'."),
          mc("(8)", ["proportion", "context", "scale", "measure"], 0, "'blown wildly out of proportion'."),
        ],
      },
      p2: {
        title: "The dopamine machine",
        text: "It is no accident that social media platforms are so difficult to put (1)___. They are designed, quite deliberately, by teams of engineers and psychologists working together, to exploit the same neural reward circuits (2)___ once helped our ancestors survive by making food, sex and social approval feel pleasurable. Every notification, every like, every share triggers a small burst of dopamine, the brain's chemical of anticipation and reward, keeping us compulsively (3)___ back for the next hit. This is why simply telling users to 'use social media in moderation' rarely works particularly well; it is (4)___ telling a hungry person to eat only in moderation while sitting them in front of an all-you-can-eat buffet engineered specifically to bypass their willpower. What makes this especially troubling is (5)___ subtle the manipulation is. Users rarely feel manipulated; they simply feel, in the moment, a mild urge to check their phone once more, an urge that seems entirely their own free choice rather than the product of careful design. Only when they step (6)___ from the platform, sometimes for days at a stretch, do many people report noticing how (7)___ calmer, and how much more present, they feel — direct evidence, however anecdotal, of just how much of their attention had quietly been (8)___ captured by systems engineered precisely for that purpose.",
        q: [
          fb("(1)", ["down"], "'so difficult to put down'."),
          fb("(2)", ["that", "which"], "'reward circuits that once helped'."),
          fb("(3)", ["coming"], "'compulsively coming back'."),
          fb("(4)", ["like"], "'it is like telling a hungry person'."),
          fb("(5)", ["how"], "'is how subtle the manipulation is'."),
          fb("(6)", ["away"], "'step away from the platform'."),
          fb("(7)", ["much"], "'how much calmer'."),
          fb("(8)", ["being"], "'had quietly been captured'."),
        ],
      },
      p3: {
        title: "The performance of outrage",
        text: "A curious feature of online outrage, once you begin to notice it, is how often it seems (1)___ to be experienced as it is to be performed. Publicly expressing fury at some transgression — real or perceived — has become, for many, a way of signalling one's own values to a watching audience, a form of moral (2)___ conducted in full view of one's followers. This is not necessarily insincere; the underlying feeling may well be genuine. But the (3)___ of an audience unmistakably changes the character of the emotion, pushing it towards (4)___, more extreme forms of expression than the same person might privately feel, precisely because visible outrage, unlike quiet private disapproval, earns social rewards in the form of likes, shares and approving replies. The result is what some researchers have called an 'outrage economy', in which the currency is moral (5)___ and the most successful participants are those who express the most vivid, uncompromising fury. This dynamic helps explain why online discourse so often feels (6)___ than the private conversations most people actually have; the incentive structure systematically rewards the loudest, angriest voices while (7)___ nuance, doubt and moderation, none of which perform nearly as well. Understanding this economy does not, by itself, fix it, but it does suggest that much online anger may be less spontaneous, and more strategically (8)___, than it first appears.",
        items: [
          { root: "much", accepted: ["much"], hint: "'as much to be experienced' (adverbio de cantidad)." },
          { root: "signal", accepted: ["signalling"], hint: "'a form of moral signalling' → signalling." },
          { root: "present", accepted: ["presence"], hint: "'the presence of an audience' → presence." },
          { root: "louder", accepted: ["louder"], hint: "'towards louder, more extreme forms' (comparativo)." },
          { root: "visible", accepted: ["visibility"], hint: "'the currency is moral visibility' → visibility." },
          { root: "polarise", accepted: ["more polarised"], hint: "'feels more polarised' → polarised." },
          { root: "punish", accepted: ["punishing"], hint: "'punishing nuance, doubt' → punishing." },
          { root: "perform", accepted: ["performed"], hint: "'strategically performed' → performed." },
        ],
      },
      p4: {
        title: "Transformaciones — do enfático, so/such, intensificadores",
        items: [
          { s1: "I really do care about privacy, even though I use social media.", key: "DO", s2: "I ___ about privacy, even though I use social media.", accepted: ["do care"], explanation: "do enfático." },
          { s1: "The post was extremely offensive, so it was removed.", key: "SUCH", s2: "It was ___ offensive post that it was removed.", accepted: ["such an"], explanation: "such an + adjetivo + sustantivo." },
          { s1: "She warned everyone about the scam, but they ignored her.", key: "DID", s2: "She ___ everyone about the scam, but they ignored her.", accepted: ["did warn"], explanation: "did enfático." },
          { s1: "The backlash was completely unexpected.", key: "UTTERLY", s2: "The backlash was ___ unexpected.", accepted: ["utterly"], explanation: "utterly (no gradable)." },
          { s1: "There was so much anger online that the company apologised.", key: "SUCH", s2: "There was ___ online that the company apologised.", accepted: ["such anger"], explanation: "such + sustantivo (sin a, incontable)." },
          { s1: "The algorithm is extremely powerful in shaping opinion.", key: "REMARKABLY", s2: "The algorithm is ___ powerful in shaping opinion.", accepted: ["remarkably"], explanation: "remarkably (gradable)." },
        ],
      },
      p5: {
        title: "The apology that wasn't enough",
        text: "When the young executive posted an off-hand joke on her personal social media account late one evening, she could not have predicted that, by the following morning, it would have been viewed several million times, shared by strangers around the world, and would have already ended her career at the company she had worked for over the preceding decade. The joke, in isolation, was tasteless rather than malicious; taken in the context of her broader life and character, colleagues who knew her insisted, it was wholly unrepresentative. None of this context, however, survived the journey from her personal account to a viral screenshot, stripped of any surrounding detail, presented to an audience of strangers with no prior knowledge of her at all.\n\nBy the time she woke the following morning, unaware of what had unfolded overnight, her name was already trending internationally, and her employer's social media accounts had been flooded with demands for her immediate dismissal. She posted an apology within hours of learning what had happened — a genuine, evidently distressed apology, acknowledging the offence caused and expressing sincere regret. It made almost no difference whatsoever. The apology received a fraction of the attention the original post had generated; algorithms, tuned to reward engagement rather than resolution, had little interest in amplifying contrition once the more emotionally charged controversy had already run its course and moved on to its next target.\n\nHer employer, facing an intensifying public relations crisis and evident pressure from advertisers threatening to withdraw their business, terminated her employment within forty-eight hours, citing the need to protect the company's reputation. She subsequently struggled for over a year to find comparable work, discovering that prospective employers, upon searching her name online, invariably encountered the viral controversy long before they encountered anything resembling the fuller context of her career, her competence or her character.\n\nWhat makes cases of this kind so genuinely difficult to resolve is that they rarely involve anyone behaving with obvious, uncomplicated malice. The original poster typically errs, sometimes seriously, sometimes trivially; the online crowd that responds is typically composed of individuals each expressing what feels, to them, like entirely justified moral outrage; and the employer, caught in the middle, typically acts from genuine and reasonable fear of serious commercial and reputational damage. Yet the cumulative, structural effect of all these individually defensible reactions can be a punishment spectacularly disproportionate to the original transgression — a permanent digital scarlet letter attached to a single unwise remark, one that continues to define a person's public reputation for years, sometimes permanently, long after any reasonable period of accountability might be thought to have passed.\n\nHer case, since widely discussed in academic circles studying online behaviour, has become something of a touchstone for researchers examining what some now term 'context collapse' — the way a remark intended for one small, familiar audience gets stripped entirely of its original context and reinterpreted by an audience of millions who share none of that context, and who consequently judge the remark, and the person who made it, far more harshly and permanently than anyone who actually knew her ever would or reasonably could.",
        q: [
          mc("What happened to the executive's joke?", ["Nothing.", "It went viral and ended her career within a day.", "It was ignored.", "It was praised."], 1, "'it would have been viewed several million times… would have already ended her career'."),
          mc("How did colleagues describe the joke in the context of her character?", ["Typical of her.", "Wholly unrepresentative of who she really was.", "Deliberate.", "Malicious."], 1, "'it was wholly unrepresentative'."),
          mc("What effect did her apology have?", ["It resolved everything.", "Almost no difference — it received far less attention than the original post.", "It made things worse only slightly.", "It went viral too."], 1, "'It made almost no difference whatsoever'."),
          mc("Why did algorithms not amplify her apology?", ["They were broken.", "They're tuned to reward engagement, not resolution, and the crowd had moved on.", "Apologies are banned.", "She deleted it."], 1, "'little interest in amplifying contrition once the… controversy had already run its course'."),
          mc("What did she discover when job-hunting afterwards?", ["Nothing changed.", "Employers found the viral controversy before anything about her actual career.", "She was hired instantly.", "No one remembered."], 1, "'invariably encountered the viral controversy long before… anything resembling the fuller context'."),
          mc("What is 'context collapse'?", ["A technical bug.", "A remark for one audience getting stripped of context and judged by millions who share none of it.", "A type of algorithm.", "A legal term."], 1, "'the way a remark intended for one small, familiar audience gets stripped entirely of its original context'."),
        ],
      },
      p6: {
        title: "Is cancel culture a form of justice?",
        intro: "Cuatro personas opinan sobre la 'cultura de la cancelación'.",
        texts: {
          A: "NADIA: What people dismissively call 'cancel culture' is often just ordinary accountability finally reaching people who used to be shielded from it by their power or status. For decades, plenty of wealthy and influential people behaved badly with total impunity because nobody with a platform would challenge them. Now ordinary people collectively can. I see that mostly as progress, however messy it sometimes looks.",
          B: "TOM: I'd distinguish sharply between genuine accountability for serious, well-established wrongdoing and the pile-on dynamic that punishes a single clumsy remark, sometimes years old, with total disproportionate ferocity. The first is healthy; the second is closer to a digital mob with no due process, no room for context, and often no path back for the person involved, however genuine their remorse.",
          C: "PRIYA: My concern is less philosophical and more practical: it just doesn't seem to work very well as a deterrent. People who get 'cancelled' rarely seem to actually reflect and change; mostly they get defensive, double down, or simply relocate their following elsewhere. If the goal is genuinely to change behaviour rather than just to punish, public shaming seems like a remarkably blunt and ineffective instrument for achieving it.",
          D: "SAM: What strikes me most is how unevenly it's applied. The powerful and wealthy usually weather these storms just fine — lawyers, publicists, a few months of quiet, and then a comeback. It's ordinary people, without those resources, who suffer genuinely permanent consequences from a single viral mistake. Whatever this phenomenon is, it isn't holding the powerful to account nearly as consistently as its defenders claim.",
        },
        q: [
          mc("Who sees 'cancel culture' mostly as overdue accountability for the powerful?", ["A", "B", "C", "D"], 0, "Nadia: 'ordinary accountability finally reaching people who used to be shielded'."),
          mc("Whose view most directly QUALIFIES Nadia's by distinguishing genuine accountability from disproportionate pile-ons?", ["A", "B", "C", "D"], 1, "Tom: 'distinguish sharply between genuine accountability… and the pile-on dynamic'."),
          mc("Who questions whether public shaming actually works as a deterrent?", ["A", "B", "C", "D"], 2, "Priya: 'it just doesn't seem to work very well as a deterrent'."),
          mc("Who argues it falls hardest on ordinary people, not the powerful?", ["A", "B", "C", "D"], 3, "Sam: 'It's ordinary people… who suffer genuinely permanent consequences'."),
        ],
      },
      p7: {
        title: "The algorithm that knows you",
        text: "Every time you scroll through a social media feed, an invisible process is unfolding behind the screen. (1)___\n\nAn algorithm, trained on vast quantities of data about your past behaviour, is quietly deciding, moment by moment, exactly what you will see next. (2)___ Its single overriding goal is not to inform you, or even necessarily to please you, but to keep you scrolling for as long as possible.\n\nThis creates a subtle but profound distortion in what we come to believe is normal or widely held opinion. (3)___ Content that provokes strong emotion, especially anger, tends to be shown disproportionately often, because it reliably generates engagement.\n\nThe result is that many users, without realising it, come to overestimate how extreme, divided or outraged public opinion actually is. (4)___ The feed feels like a representative window onto society, when it is, in fact, a carefully curated hall of mirrors.\n\nWhat makes this especially difficult to counter is that the process is almost entirely invisible to the user. (5)___ Nobody sees the algorithm making its choices; they simply experience an endless, seemingly spontaneous stream of content that feels like their own discovery.\n\nUnderstanding this mechanism will not, by itself, dissolve its effects. (6)___ But it is, at least, a necessary first step towards treating one's own feed with the healthy scepticism it deserves.",
        options: [
          "It is invisible, automatic, and astonishingly consequential.",       // A -> gap 1
          "It has no loyalty to truth, balance or your wellbeing.",           // B -> gap 2
          "Outrage, quite simply, is good for engagement.",                  // C -> gap 3
          "What feels like a fair sample is, in reality, sharply skewed.",    // D -> gap 4
          "There is no dial, no visible switch, no moment of obvious choice.", // E -> gap 5
          "Awareness alone rarely defeats a well-engineered system.",         // F -> gap 6
          "Algorithms exist purely to inform users accurately.",              // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: invisible, automático y consecuente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: sin lealtad a la verdad ni al bienestar."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la indignación beneficia al engagement."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: lo que parece justo está sesgado."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: no hay interruptor visible."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: saberlo no basta para vencerlo."),
        ],
      },
      p8: {
        title: "Four people discuss their relationship with social media",
        text: "Read what four people say about how social media has affected them.\n\nA) NADIA: I deleted every platform two years ago and it genuinely transformed my mental health. I hadn't realised how much low-level anxiety I was carrying until it was suddenly gone. I do miss staying easily in touch with distant friends, but honestly, that trade-off has been overwhelmingly worth it for me.\n\nB) TOM: I went viral once, for something fairly minor, and it was one of the worst experiences of my life. Thousands of strangers, who knew absolutely nothing about me, felt entitled to judge my entire character from one clip stripped of all context. I still use social media, but I post far, far more cautiously now.\n\nC) PRIYA: What troubles me most is watching my own thinking change. I've caught myself starting to compose an opinion not because I actually believe it but because I can already picture exactly how it would perform, how many likes it would get. That's a deeply unsettling thing to notice happening inside your own head.\n\nD) SAM: I actually built a career through social media, so I'm reluctant to condemn it wholesale. It's given me opportunities I'd never have had otherwise. But I'm honestly under no illusions about what it's doing to my attention span, or how carefully engineered it is to keep me endlessly scrolling well past the point where I meant to stop.\n",
        q: [
          mc("Who deleted all platforms and saw their mental health transform?", ["A", "B", "C", "D"], 0, "Nadia: 'I deleted every platform… it genuinely transformed my mental health'."),
          mc("Who had a personal experience of going viral for something minor?", ["A", "B", "C", "D"], 1, "Tom: 'I went viral once, for something fairly minor'."),
          mc("Who noticed their own opinions being shaped by anticipated engagement?", ["A", "B", "C", "D"], 2, "Priya: 'composing an opinion… because I can already picture exactly how it would perform'."),
          mc("Who built a career through social media despite its downsides?", ["A", "B", "C", "D"], 3, "Sam: 'I actually built a career through social media'."),
          mc("Who hadn't realised how much anxiety they were carrying until it stopped?", ["A", "B", "C", "D"], 0, "Nadia: 'I hadn't realised how much low-level anxiety I was carrying'."),
          mc("Who now posts far more cautiously than before?", ["A", "B", "C", "D"], 1, "Tom: 'I post far, far more cautiously now'."),
          mc("Who finds it 'deeply unsettling' to notice this change in themselves?", ["A", "B", "C", "D"], 2, "Priya: 'a deeply unsettling thing to notice'."),
          mc("Who is 'under no illusions' about the platform's effect on attention span?", ["A", "B", "C", "D"], 3, "Sam: 'under no illusions about what it's doing to my attention span'."),
          mc("Who misses staying easily in touch with distant friends?", ["A", "B", "C", "D"], 0, "Nadia: 'I do miss staying easily in touch with distant friends'."),
          mc("Who was judged by strangers who knew nothing about their real character?", ["A", "B", "C", "D"], 1, "Tom: 'strangers, who knew absolutely nothing about me, felt entitled to judge my entire character'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre las redes sociales se plantearon dos ideas:\n· social media gives ordinary people a voice against the powerful (dan voz a la gente frente al poder)\n· social media enables disproportionate and permanent punishment for minor mistakes (permiten castigos desproporcionados)\nEscribe un ensayo comentando AMBAS ideas y explicando cuál pesa más, con razones y ejemplos. Usa al menos un DO enfático o una estructura so/such...that. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I wish I'd known before posting online' — reflexiona con humor o seriedad sobre las redes.\n· CARTA/EMAIL a una plataforma de redes sociales proponiendo un cambio concreto para mejorar el debate público: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Ryan y Nadia, sobre las redes sociales (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Ryan and Nadia, discussing social media. Nadia: Ryan, you work in tech — do you actually use the platforms you help build? Ryan: Honestly, less and less. I know exactly how they're engineered, which makes it harder, not easier, to use them innocently. Once you understand the mechanics of the dopamine loop, you can't quite unsee it. Nadia: That's a slightly chilling thing to hear from someone who builds them. Ryan: It is, and I don't say it lightly. We genuinely do design for engagement, and engagement and wellbeing aren't always the same target — sometimes they actively pull in opposite directions. Nadia: So what would you actually change, if you could? Ryan: I'd want far more transparency about how the algorithm works, and real, meaningful control handed back to users over what they see, rather than everything being optimised purely for time spent on the app. Nadia: Do you think platforms would ever willingly do that? Ryan: Not without real regulatory pressure, no. The business model runs directly counter to it. Attention is the product being sold to advertisers; giving users more control tends to mean less attention captured, which means less revenue. Nadia: That's a fairly bleak picture. Ryan: It is, but I'm not entirely without hope. Public awareness is rising fast, and younger users, in particular, seem noticeably more sceptical than my generation was at their age. That shift in attitude does eventually translate into real pressure on lawmakers.", [
      mc("1. How much does Ryan personally use the platforms he helps build?", ["More than ever.", "Less and less, the more he understands them.", "Not at all, ever.", "The same as always."], 1, "'Honestly, less and less'."),
      mc("2. What does understanding the mechanics do to his ability to use them innocently?", ["Makes it easier.", "Makes it harder.", "No effect.", "Makes him addicted."], 1, "'makes it harder, not easier, to use them innocently'."),
      mc("3. What does Ryan say about engagement and wellbeing?", ["They're always the same.", "They sometimes actively pull in opposite directions.", "Wellbeing always wins.", "Engagement doesn't matter."], 1, "'sometimes actively pull in opposite directions'."),
      mc("4. What change would Ryan want?", ["More adverts.", "More transparency and real control handed back to users.", "Faster algorithms.", "No changes."], 1, "'far more transparency… real, meaningful control handed back to users'."),
      mc("5. Why won't platforms make this change willingly?", ["It's illegal.", "The business model runs counter to it — attention is the product sold to advertisers.", "It's too expensive.", "Users don't want it."], 1, "'Attention is the product being sold to advertisers'."),
      mc("6. What gives Ryan some hope?", ["Nothing.", "Rising public awareness and younger users' scepticism, which pressures lawmakers.", "New technology.", "Government funding."], 1, "'younger users… seem noticeably more sceptical… That shift… translate into real pressure on lawmakers'."),
    ]),

    ...speakingParts({ p1: "cuánto usas las redes sociales y cómo crees que afectan a tu estado de ánimo", p2: "dos imágenes de redes sociales (alguien mirando su móvil ansiosamente y un grupo de amigos charlando cara a cara): compáralas y especula sobre su bienestar", p3: "qué podría mejorar el debate público en redes (regular los algoritmos, educar en pensamiento crítico, moderar el contenido, limitar el anonimato, premiar la calma): comentadlo y elegid lo más eficaz", p4: "las redes sociales y la opinión pública: si dan voz a la gente corriente o solo polarizan, si la 'cultura de la cancelación' es justicia y cómo deberíamos usarlas con responsabilidad" }),

    SUMMARY("Resumen del Día 8", [
      "Do/did enfático: añade énfasis en afirmativa (I DO care, She DID warn us).",
      "So + adj/adv…that vs such (a) + sustantivo…that. Intensificadores: very/really (gradables) vs absolutely/utterly (no gradables: extremos).",
      "Vocabulario de redes sociales. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 9", "Escribe 6 frases usando do/did enfático, so/such...that o un intensificador. Repasa las flashcards. Mañana: el fronting y las relativas con preposición."),
  ],
};

// ───────────────────────── DÍA 9 ─────────────────────────
const DAY9 = {
  title: "Día 9 — El fronting y las relativas con preposición · La libertad de expresión",
  description: "Fronting (anteponer complementos/adjetivos/participios por énfasis); relativas formales con preposición + which/whom; participle clauses para economía. Vocabulario de libertad de expresión y censura. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Anteponer elementos y usar relativas formales/participiales para un registro C1 más elegante y compacto.",
    summary: "Fronting; relativas con preposición; participle clauses; libertad de expresión; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["dejar la preposición al final en registro formal (posible pero menos formal).", "confundir 'whom' (objeto) con 'who' (sujeto) en registro formal.", "mal uso de -ing/-ed en participle clauses (voz activa/pasiva)."],
    reviewPrompts: ["¿Cómo reformulas 'the topic we talked about' de forma más formal?", "¿Cuándo usas 'Having done X, …' en vez de 'After I did X, …'?"],
  },
  items: [
    TEXT("🔁 Ayer, el énfasis con do/so/such. Hoy el FRONTING, las RELATIVAS CON PREPOSICIÓN y las PARTICIPLE CLAUSES: recursos de registro formal y estilo compacto. Vocabulario: la LIBERTAD DE EXPRESIÓN y la CENSURA."),
    GRAMMAR("Fronting, relativas con preposición y participle clauses", `FRONTING: anteponer un elemento (no el sujeto) al principio de la frase para dar énfasis o cohesión con lo anterior.
· Complemento/objeto: Such behaviour I have never witnessed. Freedom of speech, many argue, is the cornerstone of democracy.
· Adjetivo/participio + as/though: Controversial as/though it was, the article was accurate. Exhausted though she was, she kept writing.
· Locativo (con inversión): Down the street came the protesters. On the wall hung a portrait of the editor.
RELATIVAS FORMALES CON PREPOSICIÓN + WHICH/WHOM: en registro formal/escrito, la preposición se coloca ANTES del relativo (which/whom), no al final.
· Neutro: the issue we talked about → Formal: the issue about which we talked.
· Neutro: the journalist I spoke to → Formal: the journalist to whom I spoke.
PARTICIPLE CLAUSES (para economía y estilo): sustituyen a una cláusula con conector + sujeto + verbo.
· -ING (activa/simultánea): Having published the article, she braced for the backlash. Knowing the risks, he published anyway.
· -ED (pasiva): Faced with censorship, many journalists emigrate. Published without consent, the leak caused outrage.
⚠️ El fronting y las relativas con preposición anteposicionada son marcas de registro FORMAL/ESCRITO, típicas del C1 en Writing y en textos de Reading.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ the topic which we talked about it → ✅ the topic about which we talked (sin 'it' redundante).\n· ❌ Whom spoke to the minister? → ✅ Who spoke to the minister? (whom solo como objeto, nunca sujeto).\n· Participle -ING para voz activa (Having read…) / -ED para voz pasiva (Read by millions…).\n· El fronting NO es obligatorio; es un recurso de estilo/énfasis en registro formal."),
    grammarEx("Use of English — Fronting, relativas formales, participle clauses", "Reescribe o completa en registro formal.", [
      mc("Neutro: 'the country she was writing about.' Formal:", ["the country about which she was writing", "the country which about she was writing", "the country she about was writing"], 0, "preposición + which."),
      mc("Neutro: 'the editor I spoke to.' Formal:", ["the editor to whom I spoke", "the editor whom to I spoke", "the editor to who I spoke"], 0, "preposición + whom (objeto)."),
      fb("___ (know) the risks, she published the story anyway. (participle -ing, activa)", ["Knowing"], "participle -ing (activa)."),
      fb("___ (face) censorship, many journalists choose to emigrate. (participle -ed, pasiva)", ["Faced with"], "participle -ed (pasiva)."),
      mc("Fronting: 'I have never witnessed such courage.'", ["Such courage I have never witnessed.", "Never such courage I have witnessed.", "I such courage have never witnessed."], 0, "objeto anteposicionado."),
      mc("Controversial ___ it was, the decision proved correct.", ["as", "so", "such"], 0, "adjetivo + as (concesivo)."),
      fb("___ (publish) the article, she braced for the backlash. (participle -ing, activa)", ["Having published"], "having + participio (acción anterior completada)."),
    ]),
    GRAMMAR("Vocabulario del día — La libertad de expresión y la censura (C1)", "Léxico avanzado de libertad de expresión."),
    deck("C1 S2D9 — Libertad de expresión y censura", [
      ["censorship", "censura", "The regime imposed strict censorship.", "sustantivo", "ˈsensəʃɪp"],
      ["suppress", "reprimir / suprimir", "The government suppressed dissent.", "verbo", "səˈpres"],
      ["dissent", "disidencia", "Dissent was harshly punished.", "sustantivo", "dɪˈsent"],
      ["curtail", "restringir / recortar", "New laws curtail free speech.", "verbo", "kɜːˈteɪl"],
      ["hate speech", "discurso de odio", "The law targets hate speech online.", "sustantivo", "ˈheɪt spiːtʃ"],
      ["backlash", "reacción adversa", "The policy triggered a backlash.", "sustantivo", "ˈbæklæʃ"],
      ["dissident", "disidente", "The dissident was arrested.", "sustantivo", "ˈdɪsɪdənt"],
      ["safeguard", "salvaguardar / garantía", "The law safeguards press freedom.", "verbo/sustantivo", "ˈseɪfɡɑːd"],
      ["contentious", "polémico/a / controvertido/a", "It's a highly contentious issue.", "adjetivo", "kənˈtenʃəs"],
      ["defamatory", "difamatorio/a", "The claim was ruled defamatory.", "adjetivo", "dɪˈfæmətəri"],
    ]),
    vocabEx("Vocabulario — La libertad de expresión y la censura", "Elige la opción correcta.", [
      mc("The control or suppression of speech by authorities is ___.", ["censorship", "safeguard", "backlash"], 0, "censorship."),
      mc("To forcibly hold back opposition or dissent is to ___ it.", ["suppress", "safeguard", "contend"], 0, "suppress."),
      mc("Public disagreement with official views is ___.", ["dissent", "backlash", "safeguard"], 0, "dissent."),
      mc("To reduce or limit something, e.g. rights, is to ___ it.", ["curtail", "safeguard", "suppress"], 0, "curtail."),
      mc("A statement that damages someone's reputation falsely is ___.", ["defamatory", "contentious", "curtailed"], 0, "defamatory."),
      mc("Causing controversy or disagreement is being ___.", ["contentious", "defamatory", "suppressed"], 0, "contentious."),
    ]),

    ...uoe({
      p1: {
        title: "The paradox of free speech",
        text: "Few principles are as widely (1)___ in theory, and as fiercely contested in practice, as freedom of speech. Almost everyone claims to support it; almost no one, when pressed, supports it (2)___. The paradox lies in the fact that speech, unlike most other freedoms, inevitably (3)___ with other values we also hold dear — dignity, safety, social harmony — creating conflicts that no simple formula can resolve. Should a society tolerate speech that incites violence? Speech that spreads dangerous falsehoods? Speech that (4)___ humiliates a vulnerable minority? Reasonable people, all equally committed to the (5)___ of free expression, disagree profoundly about where the necessary limits should lie. What makes the debate so intractable is that both extremes carry genuine dangers. A society with no limits (6)___ becomes vulnerable to demagogues who exploit unrestricted speech to spread hatred and incite harm. A society with too many limits risks (7)___ into the hands of censors who suppress not genuine harm but merely inconvenient dissent. Navigating between these dangers requires constant, uncomfortable judgement rather than any fixed rule, which is precisely why free speech remains, centuries after it was first (8)___, one of the most persistently contested principles in political life.",
        q: [
          mc("(1)", ["endorsed", "supported", "agreed", "accepted"], 0, "'as widely endorsed in theory'."),
          mc("(2)", ["absolutely", "unconditionally", "entirely", "completely"], 1, "'supports it unconditionally'."),
          mc("(3)", ["clashes", "conflicts", "collides", "competes"], 0, "'inevitably clashes with other values'."),
          mc("(4)", ["deliberately", "intentionally", "purposely", "knowingly"], 0, "'deliberately humiliates'."),
          mc("(5)", ["principle", "value", "ideal", "notion"], 0, "'the principle of free expression'."),
          mc("(6)", ["whatsoever", "at all", "whatever", "any"], 0, "'no limits whatsoever'."),
          mc("(7)", ["falling", "sliding", "slipping", "tipping"], 0, "'risks falling into the hands of censors'."),
          mc("(8)", ["articulated", "stated", "formulated", "expressed"], 0, "'first articulated'."),
        ],
      },
      p2: {
        title: "Who decides what counts as harmful?",
        text: "Every debate about the limits of free speech eventually collides with the same intractable question: (1)___ decides what counts as genuinely harmful, as opposed to merely offensive or unwelcome? Governments, (2)___ own interests are rarely neutral, have an obvious motive to define 'harmful' speech conveniently broadly, sweeping up legitimate criticism of themselves (3)___ with genuinely dangerous incitement. Private platforms, meanwhile, face commercial pressures that pull in their own directions — sometimes towards excessive caution, for fear of alienating advertisers, sometimes towards excessive permissiveness, since controversy reliably drives engagement and, therefore, revenue. Neither governments (4)___ platforms, in other words, can be assumed to be disinterested arbiters of where exactly the line should fall. This does not mean that no line can reasonably be drawn, only that (5)___ ever draws it deserves ongoing scrutiny rather than automatic trust. Some societies have experimented with independent judicial oversight, attempting to remove such decisions (6)___ the immediate control of either governments or corporations. Others rely more heavily on the slow, messy correction of public debate itself. None of these mechanisms works (7)___, and all remain imperfect and contested. But the underlying insight — that the power to decide what may or may not be said is itself a form of power requiring careful, continuous checks — is one that any society serious (8)___ genuine free expression cannot afford to lose sight of.",
        q: [
          fb("(1)", ["who"], "'who decides'."),
          fb("(2)", ["whose"], "'governments, whose own interests'."),
          fb("(3)", ["together", "up"], "'sweeping up… together'."),
          fb("(4)", ["nor"], "'Neither governments nor platforms'."),
          fb("(5)", ["whoever"], "'whoever ever draws it'."),
          fb("(6)", ["from"], "'remove such decisions from'."),
          fb("(7)", ["perfectly", "flawlessly"], "'works perfectly'."),
          fb("(8)", ["about"], "'serious about genuine free expression'."),
        ],
      },
      p3: {
        title: "The chilling effect",
        text: "Direct censorship — an outright ban, an arrest, a shuttered newspaper — is the most (1)___ threat to free expression, but far from the only one. Equally corrosive, and considerably harder to detect, is what legal scholars call the 'chilling effect': the tendency of vague laws, aggressive legal threats, or simply an atmosphere of social hostility to make people (2)___ censor themselves, not because any authority has formally forbidden them from speaking, but because the perceived risks of doing so have come to seem, to a reasonable person, prohibitively (3)___. A journalist who fears an expensive, career-ruining lawsuit may quietly abandon an important but (4)___ story rather than risk the consequences, even if the story would ultimately have been ruled entirely legal. An academic who fears professional (5)___ may avoid a controversial but genuinely important line of research altogether. Nobody is formally silenced in either case; both have simply calculated, entirely (6)___, that discretion serves their interests better than courage. What makes the chilling effect so genuinely insidious is precisely its (7)___: unlike a book ban or a shuttered newspaper, which draw immediate outrage and public attention, self-censorship of this quiet kind leaves no visible trace, no obvious victim, no headline. We can never fully know, and can only estimate with real uncertainty, how much valuable speech never gets uttered at all — how many important books never get published, how many uncomfortable investigations never get pursued — simply because the (8)___ of speaking seemed, to those who might otherwise have spoken, simply too high.",
        items: [
          { root: "vision", accepted: ["visible"], hint: "'the most visible threat' → visible." },
          { root: "wise", accepted: ["wisely"], hint: "'wisely' es incorrecto; usa 'quietly' → 'quietly self-censor'." },
          { root: "high", accepted: ["high"], hint: "'prohibitively high' (adjetivo)." },
          { root: "convene", accepted: ["inconvenient"], hint: "'an important but inconvenient story' → inconvenient." },
          { root: "ostracise", accepted: ["ostracism"], hint: "'professional ostracism' → ostracism." },
          { root: "rational", accepted: ["rationally"], hint: "'entirely rationally' → rationally." },
          { root: "visible", accepted: ["invisibility"], hint: "'precisely its invisibility' → invisibility." },
          { root: "cost", accepted: ["cost"], hint: "'the cost of speaking' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — fronting, relativas y participios",
        items: [
          { s1: "The topic we were discussing was highly contentious.", key: "ABOUT", s2: "The topic ___ was highly contentious.", accepted: ["about which we were discussing"], explanation: "preposición + which (formal)." },
          { s1: "The editor I complained to apologised.", key: "WHOM", s2: "The editor ___ apologised.", accepted: ["to whom I complained"], explanation: "preposición + whom (objeto)." },
          { s1: "I have rarely seen such blatant censorship.", key: "SUCH", s2: "___ I have rarely seen.", accepted: ["Such blatant censorship"], explanation: "fronting (objeto anteposicionado)." },
          { s1: "Although the article was controversial, it was accurate.", key: "AS", s2: "Controversial ___ it was, the article was accurate.", accepted: ["as"], explanation: "adjetivo + as (concesivo)." },
          { s1: "Because she knew the risks, she published anyway.", key: "KNOWING", s2: "___, she published anyway.", accepted: ["Knowing the risks"], explanation: "participle -ing (activa)." },
          { s1: "Because they were faced with censorship, many journalists left.", key: "FACED", s2: "___, many journalists left.", accepted: ["Faced with censorship"], explanation: "participle -ed (pasiva)." },
        ],
      },
      p5: {
        title: "The playwright who wouldn't be silenced",
        text: "For nearly two decades under one of the more repressive governments of the twentieth century, a celebrated playwright continued, doggedly and at very considerable personal risk, to write plays that the authorities found deeply unwelcome, despite knowing full well the mounting professional and personal consequences that each new work seemed guaranteed to invite. Her early plays, produced when she was still in her twenties, had been performed to considerable acclaim both at home and internationally, establishing her as one of the country's most promising theatrical voices. As her work grew steadily more pointed in its political criticism, however, the state's tolerance for it diminished correspondingly, until eventually her plays were banned outright from public performance within her own country's borders.\n\nRather than abandoning her craft, as many in her position might reasonably have chosen to do, she adapted with quiet, stubborn resourcefulness to her drastically changed circumstances. Unable to have her work staged legally, she began, at real and escalating personal risk, organising secret performances in private apartments for small, carefully vetted audiences of trusted friends and sympathisers, actors and spectators alike fully aware that discovery could mean lengthy imprisonment for everyone involved. Her manuscripts, too dangerous to keep in any single obvious location, were smuggled abroad through a shifting network of sympathetic diplomats and foreign journalists, ensuring that her work would survive and reach an audience even if she herself were eventually imprisoned, as for some years she in fact was.\n\nWhat distinguished her from many other dissident artists of her turbulent era was not merely her evident courage, considerable though that undoubtedly was, but her unusual and quite deliberate refusal to write explicit, direct political manifestos. Her plays worked instead through allegory, metaphor and carefully coded indirection, addressing the abuses of the regime obliquely enough that literal, provable censorship became genuinely difficult, while nonetheless remaining perfectly, unmistakably legible to any audience member willing to read even slightly between the lines. This indirect approach frustrated the authorities considerably, precisely because banning a play about, say, a fictional kingdom's corrupt and paranoid rulers proved far harder to justify publicly than banning an explicit political pamphlet naming names.\n\nHer eventual arrest, when it finally came after years of surveillance, was based not on anything she had explicitly written but on testimony from an informer present at one of her clandestine apartment performances. She served four years in prison before an international campaign, led by fellow writers and prominent human rights organisations abroad, eventually secured her release. Remarkably, and to the evident continued frustration of the authorities, she resumed writing again almost immediately upon her release, apparently entirely undeterred by everything she had already endured.\n\nHer story, since told and retold many times in the decades since, has become something of a touchstone for discussions of artistic resistance under authoritarian rule. What it illustrates, perhaps more vividly and memorably than any abstract theoretical argument could, is the sheer, stubborn resourcefulness of the creative human spirit under determined attempts at suppression, and the genuinely striking difficulty, even for a powerful and highly motivated state apparatus, of fully silencing a voice that refuses, against every material incentive to do otherwise, to be silent.",
        q: [
          mc("What did the playwright continue doing under the repressive government?", ["Stopped writing.", "Continued writing politically unwelcome plays at great personal risk.", "Wrote only comedies.", "Left the country immediately."], 1, "'continued… to write plays that the authorities found deeply unwelcome… at very considerable personal risk'."),
          mc("What happened when her plays were banned?", ["She gave up.", "She organised secret performances in private apartments.", "She fled immediately.", "She stopped writing plays."], 1, "'organising secret performances in private apartments'."),
          mc("What happened to her manuscripts?", ["They were destroyed.", "They were smuggled abroad through diplomats and journalists.", "They were published openly.", "Nothing."], 1, "'smuggled abroad through a shifting network of sympathetic diplomats and foreign journalists'."),
          mc("What distinguished her approach from other dissident artists?", ["Explicit manifestos.", "Working through allegory and indirection rather than direct political statements.", "Silence.", "Public speeches."], 1, "'her unusual… refusal to write explicit, direct political manifestos… through allegory, metaphor and carefully coded indirection'."),
          mc("What led to her arrest?", ["A published pamphlet.", "Testimony from an informer at a secret performance.", "A public speech.", "A newspaper article."], 1, "'testimony from an informer present at one of her clandestine apartment performances'."),
          mc("What does her story illustrate, according to the writer?", ["Censorship always succeeds.", "The resourcefulness of the creative spirit and the difficulty of fully silencing a determined voice.", "Art is powerless.", "Prison ends careers."], 1, "'the sheer, stubborn resourcefulness of the creative human spirit… the genuinely striking difficulty… of fully silencing a voice'."),
        ],
      },
      p6: {
        title: "Should hate speech be banned by law?",
        intro: "Cuatro personas debaten si el discurso de odio debería ser ilegal.",
        texts: {
          A: "NADIA: I support strong legal limits on hate speech without much hesitation. Words genuinely can and do incite real violence and cause serious, measurable psychological harm to vulnerable groups. The 'free speech absolutist' position conveniently ignores who actually bears the real cost of unlimited speech — it's rarely the powerful people making that argument so confidently.",
          B: "TOM: I understand the impulse, but I worry enormously about who gets to define 'hate speech' in practice, and how conveniently elastic that definition tends to become over time. History is full of governments using exactly this kind of law to suppress legitimate political dissent, simply relabelling it as 'hateful' or 'dangerous'. I'd rather tolerate some genuinely ugly speech than hand governments that particular, very tempting power.",
          C: "PRIYA: My view is that the real distinction that matters isn't between offensive and inoffensive speech, but between speech and direct incitement to imminent violence. The first category should be almost entirely protected, however distasteful some of it undeniably is; the second, which is genuinely narrow and specific, is where the law should focus its limited and carefully targeted attention.",
          D: "SAM: What concerns me most is that this entire debate treats law as the only meaningful tool available, when social and cultural pressure — platforms choosing not to amplify hateful content, communities visibly rejecting it — can be at least as effective as legislation, and without any of the attendant risks of governmental overreach or unintended political abuse.",
        },
        q: [
          mc("Who supports strong legal limits on hate speech, citing real harm?", ["A", "B", "C", "D"], 0, "Nadia: 'I support strong legal limits on hate speech'."),
          mc("Whose view most directly WARNS against Nadia's position, citing government abuse?", ["A", "B", "C", "D"], 1, "Tom: 'governments using exactly this kind of law to suppress legitimate political dissent'."),
          mc("Who draws the key line at direct incitement to imminent violence, not offensiveness?", ["A", "B", "C", "D"], 2, "Priya: 'the real distinction… speech and direct incitement to imminent violence'."),
          mc("Who prefers social/cultural pressure over legal solutions?", ["A", "B", "C", "D"], 3, "Sam: 'social and cultural pressure… can be at least as effective as legislation'."),
        ],
      },
      p7: {
        title: "The internet and the new censors",
        text: "For most of the twentieth century, censorship was primarily the business of states: governments banning books, jamming broadcasts, imprisoning dissident writers. (1)___\n\nThe internet was supposed to change this fundamentally, and in important respects it genuinely has. (2)___ A determined government now finds it far harder than before to prevent information from crossing borders entirely.\n\nBut a new and less obvious set of gatekeepers has quietly emerged to take on much of this old censoring function. (3)___ Private technology companies, answerable chiefly to shareholders rather than voters, now make daily decisions about what billions of people worldwide may see, hear or say.\n\nThese decisions are rarely made by any transparent, publicly accountable legal process. (4)___ Content moderation policies are set largely behind closed doors, adjusted frequently, and applied with a consistency that even careful outside observers often struggle fully to discern.\n\nThis creates an unusual and largely unprecedented situation. (5)___ We have not so much eliminated censorship as quietly outsourced it to institutions with a fundamentally different set of accountabilities, and arguably a different, less democratic set of incentives, altogether.\n\nUnderstanding this shift matters enormously for how we think about protecting free expression going forward. (6)___ The old battles over state censorship have not disappeared entirely, but they have been substantially supplemented by newer, subtler and less visible ones.",
        options: [
          "Free expression's chief enemy was, overwhelmingly, government power.", // A -> gap 1
          "Information now flows with a freedom no state fully controls.",     // B -> gap 2
          "Private platforms have stepped quietly into much of that old role.", // C -> gap 3
          "Instead, they are governed largely by private terms of service.",   // D -> gap 4
          "Enormous, largely unelected power now sits with a handful of companies.", // E -> gap 5
          "The fight for free speech now runs through corporate boardrooms too.", // F -> gap 6
          "The internet has completely eliminated every form of censorship.",    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el enemigo era el poder estatal."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la información fluye con libertad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: plataformas privadas ocuparon ese papel."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: se rigen por términos de servicio."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: un poder enorme y no electo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la lucha pasa también por las empresas."),
        ],
      },
      p8: {
        title: "Four people discuss the limits of free speech",
        text: "Read what four people say about where they think free speech should have limits.\n\nA) NADIA: I lived for years under a government that jailed people for criticising it, so forgive me if I'm instinctively wary of anyone, of any political persuasion, who wants broader powers to restrict speech, even with entirely good intentions. Once you build the machinery for silencing people, it rarely stays confined to only the targets its original architects had in mind.\n\nB) TOM: I run a small online community, and I've had to draw genuinely hard lines myself, in practice rather than in theory. Complete free-for-alls reliably become unusable, dominated entirely by the loudest and most aggressive voices, while the majority of people simply leave in frustration. Some moderation, done carefully and consistently, isn't censorship — it's what actually makes real conversation possible at all.\n\nC) PRIYA: What I keep coming back to is how deeply culturally specific this whole debate really is. What counts as acceptable speech varies enormously between societies, and I'm sceptical of anyone claiming a single universal standard should simply apply everywhere. Context, history and specific circumstances matter here far more than abstract, one-size-fits-all principles ever could.\n\nD) SAM: My worry is less about where exactly the legal line should sit and more about the broader climate we're collectively creating. Even without any formal restrictions at all, a culture of intense, disproportionate outrage at every minor misstep can silence people just as effectively as any actual law could. We need to protect not just the legal right to speak, but people's genuine willingness to use it without excessive fear.\n",
        q: [
          mc("Who is wary of restrictions based on personal experience of an oppressive government?", ["A", "B", "C", "D"], 0, "Nadia: 'I lived for years under a government that jailed people for criticising it'."),
          mc("Who runs an online community and has had to moderate it in practice?", ["A", "B", "C", "D"], 1, "Tom: 'I run a small online community'."),
          mc("Who emphasises that acceptable speech varies culturally between societies?", ["A", "B", "C", "D"], 2, "Priya: 'how deeply culturally specific this whole debate really is'."),
          mc("Who worries about a climate of outrage silencing people without formal laws?", ["A", "B", "C", "D"], 3, "Sam: 'a culture of intense, disproportionate outrage… can silence people just as effectively as any actual law'."),
          mc("Who says moderation done well 'is what makes real conversation possible'?", ["A", "B", "C", "D"], 1, "Tom: 'it's what actually makes real conversation possible at all'."),
          mc("Who is sceptical of a single universal standard applying everywhere?", ["A", "B", "C", "D"], 2, "Priya: 'sceptical of anyone claiming a single universal standard should simply apply everywhere'."),
          mc("Who says machinery for silencing people rarely stays confined to its original targets?", ["A", "B", "C", "D"], 0, "Nadia: 'rarely stays confined to only the targets its original architects had in mind'."),
          mc("Who wants to protect people's willingness to speak, not just their legal right?", ["A", "B", "C", "D"], 3, "Sam: 'protect not just the legal right to speak, but people's genuine willingness to use it'."),
          mc("Who says complete free-for-alls become dominated by the loudest voices?", ["A", "B", "C", "D"], 1, "Tom: 'dominated entirely by the loudest and most aggressive voices'."),
          mc("Who says context and history matter more than abstract universal principles?", ["A", "B", "C", "D"], 2, "Priya: 'Context, history and specific circumstances matter here far more'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la libertad de expresión se plantearon dos ideas:\n· free speech should have almost no limits (la libertad de expresión no debería tener casi límites)\n· some speech is harmful enough to justify restriction (algunos discursos justifican restricciones)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos una estructura de FRONTING o una relativa formal con preposición. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para una plataforma online sobre cómo moderar el contenido sin restringir excesivamente la libertad de expresión: justifica y recomienda.\n· ARTÍCULO: 'Where should the line be drawn?' — reflexiona sobre los límites razonables de la libertad de expresión hoy.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de una experiencia relacionada con la libertad de expresión (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué les pasó?): A they were censored by a government · B they self-censored out of fear · C they were 'cancelled' online · D they lost their job for something they said · E they successfully challenged a restriction · F they moderated content professionally. TAREA DOS (¿cómo se sintieron después?): A vindicated · B afraid · C regretful · D relieved · E angry · F conflicted.", "This is Part Four. You will hear five people talking about an experience related to free expression. Speaker One: I wrote an article critical of a powerful local official, and within days I was arrested on trumped-up charges. I spent three months in prison before international pressure got me released. When I finally walked free, I didn't feel triumphant — mostly I just felt an enormous wave of relief that it was actually over. Speaker Two: I used to write quite openly about political topics, but after a colleague faced serious professional consequences for a similar piece, I quietly stopped. Nobody forced me directly; I made the calculation myself, entirely rationally. I still feel a bit ashamed about it, if I'm honest, even though I completely understand why I did it. Speaker Three: A comment I made years ago, taken completely out of its original context, resurfaced online and I was suddenly the target of a furious, coordinated pile-on from total strangers. It was genuinely terrifying at the time. Looking back now, though, I've made a kind of uneasy peace with it — I understand why people reacted as they did, even though the punishment still felt wildly disproportionate. Speaker Four: I sued a newspaper for publishing something defamatory about me, and after a very long, gruelling process, I actually won. It felt like genuine vindication after two exhausting years, though I'll admit the whole ordeal cost me far more, in money and in stress, than I ever expected going in. Speaker Five: I worked for years reviewing flagged content for a major platform. It left me feeling deeply conflicted, honestly — some decisions genuinely protected people from real, serious harm, while others felt like pure overreach, silencing views I personally disagreed with but that clearly didn't deserve removal.", [
      mc("Speaker 1 — TAREA UNO (qué le pasó)", ["A", "B", "C", "D", "E", "F"], 0, "A: 'arrested on trumped-up charges' — censurado por el gobierno."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: 'I quietly stopped' — autocensura por miedo."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 2, "C: 'a furious, coordinated pile-on' — cancelado online."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 4, "E: 'I sued… I actually won' — impugnó con éxito una restricción."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: 'reviewing flagged content for a major platform' — moderó contenido profesionalmente."),
      mc("Speaker 1 — TAREA DOS (cómo se sintió)", ["A", "B", "C", "D", "E", "F"], 3, "D: 'an enormous wave of relief'."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 2, "C: 'I still feel a bit ashamed'."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 5, "F: 'uneasy peace… still felt wildly disproportionate' — conflictuado."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 0, "A: 'genuine vindication'."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 5, "F: 'left me feeling deeply conflicted'."),
    ]),

    ...speakingParts({ p1: "qué opinas de los límites de la libertad de expresión y si alguna vez te has autocensurado", p2: "dos imágenes relacionadas con la libertad de expresión (una manifestación con pancartas y alguien escribiendo solo/a en un ordenador): compáralas y especula sobre su mensaje", p3: "cómo debería gestionarse el discurso de odio online (leyes estrictas, moderación de las plataformas, educación, presión social, dejarlo sin regular): comentadlo y elegid el mejor enfoque", p4: "la libertad de expresión: si debería tener límites legales, quién debería decidir esos límites y si las plataformas privadas tienen demasiado poder sobre el debate público" }),

    SUMMARY("Resumen del Día 9", [
      "Fronting: anteponer objeto/complemento/adjetivo (+ as/though) por énfasis o cohesión.",
      "Relativas formales: preposición + which/whom (the topic about which…, the editor to whom…). Participle clauses: -ing (activa) / -ed (pasiva) para economía.",
      "Vocabulario de libertad de expresión. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 10", "Escribe 6 frases usando fronting, relativas formales o participle clauses. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 10 ─────────────────────────
const DAY10 = {
  title: "Día 10 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de la inversión, las cleft sentences, el énfasis (do/so/such/intensificadores), el fronting y las relativas/participle clauses. Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 2.",
  pedagogy: {
    objective: "Consolidar los recursos de énfasis y registro formal del C1 antes de la Semana 3.",
    summary: "Repaso de inversión/énfasis/fronting; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de énfasis te resulta más natural? ¿Cuál más difícil?", "Repásalo antes de la Semana 3 (condicionales avanzados y estructuras hipotéticas)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 2 del C1. Consolidas la INVERSIÓN, las CLEFT SENTENCES, el ÉNFASIS (do/so/such/intensificadores), el FRONTING y las RELATIVAS/PARTICIPLE CLAUSES. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 2", `1) INVERSIÓN: Never/Rarely/Seldom, Not only… but also, Only when/after, No sooner… than, Hardly… when, Little, Under no circumstances + inversión sujeto-auxiliar.
2) CLEFT SENTENCES: it-cleft (It was X that/who…) y what-cleft (What… is/was X).
3) ÉNFASIS: do/did enfático; so + adj/adv…that vs such (a) + sustantivo…that; intensificadores gradables (very/really) vs no gradables (absolutely/utterly).
4) FRONTING y RELATIVAS FORMALES: anteponer objeto/adjetivo+as; preposición + which/whom; participle clauses -ing/-ed.`),
    grammarEx("Use of English — Repaso mixto de la Semana 2", "Completa o elige.", [
      mc("Rarely ___ such a compelling investigation.", ["we have read", "have we read", "we read"], 1, "Rarely + inversión."),
      fb("What the journalist ___ was expose the scandal. (what-cleft con acción)", ["did"], "what-cleft."),
      mc("It was ___ scandal that the minister resigned.", ["so", "such a", "such"], 1, "such a + sustantivo."),
      fb("She ___ (do) warn us about the risks, but we ignored her. (enfático)", ["did"], "did enfático."),
      mc("The topic ___ we were arguing was highly contentious.", ["about which", "which about", "about who"], 0, "preposición + which (formal)."),
      fb("___ (know) the risks, she published anyway. (participle -ing)", ["Knowing"], "participle -ing activa."),
      mc("Such courage ___ .", ["I have never witnessed", "never I have witnessed", "I never have witnessed"], 0, "fronting (objeto anteposicionado)."),
      fb("No sooner ___ (the story / break) than the shares collapsed.", ["had the story broken"], "No sooner + inversión con had."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 2", "Repasa los mazos (medios/desinformación, periodismo, redes sociales, libertad de expresión)."),
    vocabEx("Vocabulario — Repaso de la Semana 2", "Elige la opción correcta.", [
      mc("False information spread deliberately:", ["disinformation", "misinformation", "scrutiny"], 0, "disinformation."),
      mc("A person who gives information to a journalist:", ["source", "outlet", "leak"], 0, "source."),
      mc("Content that spreads extremely fast online:", ["viral", "polarised", "credible"], 0, "viral."),
      mc("The control or suppression of speech by authorities:", ["censorship", "backlash", "dissent"], 0, "censorship."),
      mc("To officially withdraw a statement:", ["retract", "sensationalise", "corroborate"], 0, "retract."),
      mc("An online environment where you only hear views like your own:", ["echo chamber", "outlet", "safeguard"], 0, "echo chamber."),
      mc("To reduce or limit rights or freedoms:", ["curtail", "safeguard", "corroborate"], 0, "curtail."),
      mc("A strong, often angry, public reaction:", ["backlash", "algorithm", "discourse"], 0, "backlash."),
    ]),

    ...uoe({
      p1: {
        title: "The right to be wrong",
        text: "A free society must, paradoxically, protect the right of its citizens to be (1)___. Not only is this uncomfortable, but it is also, on reflection, indispensable to the whole (2)___ of open inquiry. A society that only permits the expression of views later proven correct would, in practice, permit almost nothing at all, since we can rarely (3)___ in advance which currently unpopular idea will eventually be vindicated by evidence and which will simply prove mistaken. History is littered with examples of views once confidently dismissed as dangerous nonsense that later turned (4)___ to be entirely correct, and, equally, of views once confidently held that later turned out to be catastrophically wrong. The only reliable mechanism we possess for sorting the former from the latter is open debate, conducted (5)___ time, in which bad ideas can be freely challenged, tested and, where genuinely deficient, ultimately discarded. Suppressing an idea prematurely, however wrong it may currently seem, forecloses (6)___ possibility of ever discovering it was right after all — and, just as importantly, denies us the opportunity to sharpen and strengthen our own correct beliefs through the demanding discipline of having to defend them. It is (7)___ this reasoning, more than any romantic attachment to speech for its own sake, that grounds the strongest and most durable case for tolerating views we ourselves find genuinely mistaken, or even, on occasion, actively (8)___.",
        q: [
          mc("(1)", ["wrong", "mistaken", "incorrect", "false"], 0, "'the right… to be wrong'."),
          mc("(2)", ["project", "process", "enterprise", "business"], 2, "'the whole enterprise of open inquiry'."),
          mc("(3)", ["tell", "say", "know", "predict"], 2, "'we can rarely know in advance'."),
          mc("(4)", ["up", "out", "over", "in"], 1, "'later turned out to be'."),
          mc("(5)", ["over", "through", "during", "across"], 0, "'conducted over time'."),
          mc("(6)", ["the", "any", "all", "every"], 1, "'forecloses any possibility'."),
          mc("(7)", ["on", "in", "with", "by"], 0, "'It is on this reasoning'."),
          mc("(8)", ["objectionable", "unpleasant", "disagreeable", "offensive"], 0, "'actively objectionable'."),
        ],
      },
      p2: {
        title: "The last word on truth",
        text: "There will never come a day (1)___ humanity finally agrees, once and for all, on every contested question. This is not a temporary failure to be someday overcome (2)___ enough patience and better arguments; it is, rather, a permanent feature of any society genuinely composed of free-thinking individuals. What we can reasonably hope for is not final, universal agreement but a healthier process for handling our (3)___ enduring disagreements — one grounded in evidence, conducted with reasonable civility, and genuinely open to revision when better evidence eventually emerges. Such a process requires, above all, a shared and fairly demanding commitment: that we argue (4)___ ideas rather than against the people who happen to hold them, and that we remain willing, at least in principle, to update our own views when confronted (5)___ a genuinely compelling counter-argument. This is a far harder discipline than it sounds, requiring us to resist the powerful and near-universal temptation to treat disagreement as a species of moral failing rather than a normal, healthy feature of honest intellectual life. A society (6)___ has lost this capacity — in which disagreement is treated as evidence of malice, and compromise as evidence of weakness — has lost something considerably more valuable than any single specific debate it might subsequently win. What ultimately matters, in (7)___ end, is not that we all agree, which we manifestly never will, but that we retain the shared capacity to disagree productively, without that ordinary disagreement curdling into open contempt or, worse, outright violence. That capacity, (8)___ than any particular settled conclusion, may be democracy's single most fragile and precious achievement.",
        q: [
          fb("(1)", ["when"], "'a day when humanity finally agrees'."),
          fb("(2)", ["with"], "'overcome with enough patience'."),
          fb("(3)", ["many", "numerous"], "'our many enduring disagreements'."),
          fb("(4)", ["about"], "'argue about ideas'."),
          fb("(5)", ["with"], "'confronted with a counter-argument'."),
          fb("(6)", ["that", "which"], "'A society that has lost'."),
          fb("(7)", ["the"], "'in the end'."),
          fb("(8)", ["more"], "'more than any particular… conclusion'."),
        ],
      },
      p3: {
        title: "The courage to publish",
        text: "Every editor who has ever run a genuinely (1)___ story knows the particular, distinctive fear that precedes publication: the sleepless night spent wondering whether every fact has truly been checked (2)___, whether every source can be adequately protected, whether the coming storm of backlash can realistically be weathered. This fear is not, in itself, a (3)___ sign; a story that provokes no anxiety whatsoever in its editor is probably not doing anything especially (4)___ or consequential. What separates responsible courage from mere (5)___, however, is precisely the presence of that fear alongside the decision to publish anyway, once every reasonable precaution has genuinely been taken. The editor who publishes without any anxiety at all has likely failed to grasp the real stakes involved; the editor who lets that entirely understandable anxiety (6)___ them into silence has failed their readers, and arguably the public more broadly, in a different but equally serious way. Genuine editorial courage lies in the difficult, narrow space between these two failures: taking the fear with full and appropriate seriousness, checking everything with real (7)___, and then, having done everything reasonably possible, publishing regardless. It is a demanding, high-wire discipline that cannot be taught from any manual alone, but must be (8)___ through hard-won experience, the painful example of past mistakes, and a genuine, deeply internalised commitment to the public's fundamental right to know.",
        items: [
          { root: "convene", accepted: ["controversial"], hint: "'a genuinely controversial story' → controversial." },
          { root: "thorough", accepted: ["thoroughly"], hint: "'checked thoroughly' → thoroughly." },
          { root: "health", accepted: ["healthy"], hint: "'not, in itself, a healthy sign' → healthy." },
          { root: "important", accepted: ["important"], hint: "'especially important' (adjetivo)." },
          { root: "reckless", accepted: ["recklessness"], hint: "'mere recklessness' → recklessness." },
          { root: "frighten", accepted: ["frightens"], hint: "'lets that anxiety frighten them' → frightens." },
          { root: "rigour", accepted: ["rigour"], hint: "'checking everything with real rigour' (sustantivo)." },
          { root: "learn", accepted: ["learned", "learnt"], hint: "'must be learned' → learned." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 2",
        items: [
          { s1: "I have never read such a compelling report.", key: "NEVER", s2: "Never ___ such a compelling report.", accepted: ["have I read"], explanation: "Never + inversión." },
          { s1: "The reporter uncovered the scandal, not the editor.", key: "WAS", s2: "It ___ the reporter, not the editor, who uncovered the scandal.", accepted: ["was"], explanation: "it-cleft." },
          { s1: "It was extremely compelling, so everyone was convinced.", key: "SUCH", s2: "It was ___ argument that everyone was convinced.", accepted: ["such a compelling"], explanation: "such a + adj + sustantivo." },
          { s1: "She really does care about press freedom.", key: "DOES", s2: "She ___ about press freedom.", accepted: ["does care"], explanation: "do enfático." },
          { s1: "The issue we argued about was contentious.", key: "ABOUT", s2: "The issue ___ was contentious.", accepted: ["about which we argued"], explanation: "preposición + which (formal)." },
          { s1: "Because she knew the risks, she published the story.", key: "KNOWING", s2: "___, she published the story.", accepted: ["Knowing the risks"], explanation: "participle -ing." },
        ],
      },
      p5: {
        title: "The archive that outlived the empire",
        text: "When the government finally fell, after decades of iron censorship during which independent journalism had been effectively criminalised, historians and journalists alike assumed that a genuine, uncensored record of what had actually happened during those long, dark years would simply be impossible to reconstruct with any real confidence. State archives, it was widely and reasonably assumed, would have been thoroughly purged of anything remotely incriminating; independent records, meanwhile, would surely have been destroyed decades earlier by authorities determined, at almost any cost, to control the historical narrative that future generations would eventually inherit.\n\nWhat nobody had anticipated was the sheer scale and audacity of a clandestine documentation project that had, in fact, been operating quietly throughout the entire period, hidden in plain sight. A loose, ever-shifting and deliberately decentralised network of ordinary citizens — teachers, retired civil servants, university students, even a handful of sympathetic minor officials working from within the regime itself — had spent years secretly collecting, copying and meticulously preserving documents, photographs, testimonies and government directives that the authorities had explicitly and repeatedly tried to suppress or destroy entirely.\n\nWorking under conditions of extraordinary risk, in which discovery would almost certainly have meant lengthy imprisonment or considerably worse for those involved, this dispersed network developed elaborate and often ingenious protocols to protect both themselves and, crucially, the precious materials they had collectively gathered. Documents were painstakingly copied by hand, in an era before photocopiers were widely accessible or affordable, and physically distributed across dozens of separate, deliberately unconnected hiding places, so that no single raid, however successful, could ever destroy more than a small fraction of the total, carefully compartmentalised archive.\n\nWhen the regime finally collapsed, this hidden archive, carefully reassembled piece by piece over the following years from its many scattered and long-forgotten hiding places, proved genuinely invaluable. It provided crucial, hard evidence for numerous subsequent human rights prosecutions, allowed historians to reconstruct events the state had systematically and deliberately tried to erase from the official record, and gave surviving victims something that had previously seemed permanently and irretrievably beyond reach: an acknowledged, documented, undeniable record of what had actually happened to them.\n\nThe story of this remarkable clandestine archive has since become a powerful and much-cited symbol, invoked whenever the apparent, seemingly overwhelming power of state censorship is discussed. It stands as a striking demonstration that even the most determined, best-resourced and seemingly all-powerful efforts to control historical memory can ultimately fail, provided enough ordinary individuals are willing to take extraordinary personal risks in the patient, unglamorous, and often thankless service of preserving the plain, simple truth for future generations who would otherwise never have known it at all.",
        q: [
          mc("What did historians initially assume after the government fell?", ["Full records survived intact.", "A genuine, uncensored record would be impossible to reconstruct.", "Nothing had been censored.", "The archives were public."], 1, "'a genuine, uncensored record… would simply be impossible to reconstruct'."),
          mc("What had nobody anticipated?", ["The government's collapse.", "A clandestine documentation project operating throughout the period.", "Foreign intervention.", "A quick recovery."], 1, "'the sheer scale and audacity of a clandestine documentation project'."),
          mc("Who was involved in the network?", ["Only professional journalists.", "Ordinary citizens: teachers, civil servants, students, even some officials.", "Foreign spies.", "The military only."], 1, "'teachers, retired civil servants, university students, even a handful of sympathetic minor officials'."),
          mc("How were documents protected from destruction?", ["Kept in one safe location.", "Copied by hand and distributed across many unconnected hiding places.", "Digitised.", "Published immediately."], 1, "'physically distributed across dozens of separate, deliberately unconnected hiding places'."),
          mc("What did the archive provide once reassembled?", ["Nothing useful.", "Crucial evidence for human rights prosecutions and historical reconstruction.", "Only photographs.", "Propaganda."], 1, "'crucial, hard evidence for numerous subsequent human rights prosecutions'."),
          mc("What does the story demonstrate, according to the writer?", ["Censorship always succeeds.", "Even powerful efforts to control memory can fail given enough determined individuals.", "Archives are useless.", "History cannot be recovered."], 1, "'even the most determined… efforts to control historical memory can ultimately fail'."),
        ],
      },
      p6: {
        title: "Is complete transparency always good?",
        intro: "Cuatro personas debaten si la transparencia total es siempre deseable.",
        texts: {
          A: "NADIA: I'm firmly in the 'more transparency, always' camp. Secrecy is where corruption, abuse and incompetence quietly thrive, protected from scrutiny. Every argument for keeping something hidden 'for good reasons' has, historically, also been used to hide something genuinely indefensible. Sunlight really is the best disinfectant, and I don't think that principle has any meaningful exceptions.",
          B: "TOM: I used to believe that too, but I've become considerably more cautious. Some information — ongoing sensitive negotiations, certain security matters, private medical details — genuinely needs protected space to function properly at all. Blanket transparency sounds appealingly principled, but it can also be recklessly naive about how the world, and human institutions, actually work.",
          C: "PRIYA: What interests me is the gap between transparency and comprehension. Just dumping raw, unfiltered data on the public doesn't automatically create genuine accountability if nobody has the time, expertise or resources to actually make sense of it. Real transparency, I'd argue, requires not just openness but active, honest interpretation — otherwise it's mostly performative, a comforting gesture rather than a genuine safeguard.",
          D: "SAM: I'd focus less on the information itself and more squarely on power. Radical transparency applied consistently to the powerful — governments, large corporations, institutions — seems clearly good to me; the same standard applied indiscriminately to ordinary private individuals seems considerably more troubling. The principle shouldn't be 'expose everything equally'; it should be 'hold power specifically accountable'.",
        },
        q: [
          mc("Who firmly supports maximal transparency with essentially no exceptions?", ["A", "B", "C", "D"], 0, "Nadia: 'more transparency, always'."),
          mc("Whose view most directly QUALIFIES Nadia's position, citing legitimate needs for secrecy?", ["A", "B", "C", "D"], 1, "Tom: 'Some information… genuinely needs protected space'."),
          mc("Who distinguishes transparency from genuine comprehension/interpretation?", ["A", "B", "C", "D"], 2, "Priya: 'the gap between transparency and comprehension'."),
          mc("Who argues transparency should target power specifically, not everyone equally?", ["A", "B", "C", "D"], 3, "Sam: 'hold power specifically accountable'."),
        ],
      },
      p7: {
        title: "The price of a free press",
        text: "A genuinely free and independent press does not come cheap, in any sense of that word. (1)___\n\nInvestigative journalism, in particular, is slow, expensive and often produces no immediate financial return at all for the considerable resources it consumes. (2)___ A months-long investigation may ultimately yield only a single published story, if indeed it yields anything publishable at all.\n\nThis economic reality creates a genuine and largely underappreciated tension at the very heart of the news industry. (3)___ The kind of journalism democracy most urgently needs is rarely the kind that most reliably generates the most revenue.\n\nAs advertising income has migrated overwhelmingly towards a handful of dominant technology platforms in recent decades, traditional news organisations have found this tension becoming steadily more acute and financially unsustainable. (4)___ Many have responded by cutting precisely the expensive, resource-intensive investigative work that serves the public interest most directly.\n\nSome newer models are attempting, with mixed success, to address this widening gap. (5)___ Reader-funded subscriptions, philanthropic grants and non-profit structures all represent genuine attempts to fund journalism without relying primarily on the fickle, unpredictable and often perverse incentives of advertising.\n\nWhatever the eventual solution turns out to be, one uncomfortable truth seems unavoidable. (6)___ A healthy, functioning democracy needs a press willing and able to pursue expensive, difficult truths that offer no guaranteed commercial payoff at all.",
        options: [
          "It requires sustained investment with no guaranteed return.",       // A -> gap 1
          "Months of costly work can produce remarkably little to show for it.", // B -> gap 2
          "What serves democracy and what turns a profit often diverge sharply.", // C -> gap 3
          "Budgets for this kind of work have been squeezed hard as a result.", // D -> gap 4
          "New funding models are being tried, with genuinely mixed results.",  // E -> gap 5
          "Someone, somehow, has to keep paying for uncomfortable truths.",    // F -> gap 6
          "Investigative journalism has always been highly profitable.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: exige inversión sin retorno garantizado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: meses de trabajo caro dan poco fruto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: democracia y beneficio a menudo divergen."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los presupuestos se han recortado."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nuevos modelos, con resultados mixtos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: alguien tiene que pagar la verdad incómoda."),
        ],
      },
      p8: {
        title: "Four people discuss paying for journalism",
        text: "Read what four people say about whether and how they pay for news.\n\nA) NADIA: I pay for three separate news subscriptions, which some friends think is excessive. But I've come to see it as roughly equivalent to voting: each subscription is a small, tangible vote for the kind of careful, well-resourced journalism I actually want to exist in the world, rather than the algorithm-optimised outrage content that otherwise dominates.\n\nB) TOM: Honestly, I've never paid for news in my life and don't feel especially guilty about it. There's still an enormous amount of quality free journalism out there if you know where to look for it. I'm sceptical that a paywall is really the only viable answer to journalism's genuine and serious funding problems.\n\nC) PRIYA: What changed my mind was realising, quite suddenly, how much free content is essentially engineered to enrage rather than to inform. Once I started paying, the quality difference became genuinely, noticeably obvious almost immediately — calmer, more careful, less openly desperate for my constant attention and clicks.\n\nD) SAM: I can't personally afford multiple subscriptions, and that troubles me more than people who can easily afford them tend to realise. Good, careful journalism increasingly risks becoming a luxury good, available mainly to those who can pay for it, while everyone else is left with whatever free, ad-supported and often much lower-quality content remains.\n",
        q: [
          mc("Who pays for three subscriptions and compares it to voting?", ["A", "B", "C", "D"], 0, "Nadia: 'roughly equivalent to voting'."),
          mc("Who has never paid for news and doesn't feel guilty?", ["A", "B", "C", "D"], 1, "Tom: 'never paid for news in my life and don't feel especially guilty'."),
          mc("Who noticed a clear quality difference after starting to pay?", ["A", "B", "C", "D"], 2, "Priya: 'the quality difference became genuinely, noticeably obvious'."),
          mc("Who worries good journalism is becoming a luxury only the wealthy can access?", ["A", "B", "C", "D"], 3, "Sam: 'increasingly risks becoming a luxury good'."),
          mc("Who is sceptical that paywalls are the only answer to journalism's funding problem?", ["A", "B", "C", "D"], 1, "Tom: 'sceptical that a paywall is really the only viable answer'."),
          mc("Who realised free content is 'engineered to enrage rather than to inform'?", ["A", "B", "C", "D"], 2, "Priya: 'engineered to enrage rather than to inform'."),
          mc("Who can't personally afford multiple subscriptions?", ["A", "B", "C", "D"], 3, "Sam: 'I can't personally afford multiple subscriptions'."),
          mc("Who says quality free journalism still exists if you know where to look?", ["A", "B", "C", "D"], 1, "Tom: 'an enormous amount of quality free journalism out there if you know where to look'."),
          mc("Who sees each subscription as a vote for the journalism they want to exist?", ["A", "B", "C", "D"], 0, "Nadia: 'a small, tangible vote for the kind of… journalism I actually want to exist'."),
          mc("Who worries this creates unequal access to reliable information?", ["A", "B", "C", "D"], 3, "Sam: 'everyone else is left with whatever free… and often much lower-quality content remains'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre los medios se plantearon dos ideas:\n· quality journalism should be free for everyone (el periodismo de calidad debería ser gratis)\n· readers should pay for the journalism they value (los lectores deberían pagar por el periodismo que valoran)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de énfasis de la semana (inversión, cleft sentence, do enfático, so/such, fronting). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'Why I pay (or don't pay) for news' — argumenta tu postura personal.\n· CARTA a un periódico proponiendo cómo podría financiar mejor el periodismo de investigación: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two colleagues discussing a controversial story. Woman: Not only did the story cause a huge backlash, but it also led to a lawsuit. Man: I know, but it was such an important story that I still think we were right to publish it. Woman: Rarely have I seen an editor stand by a decision that firmly under that much pressure. Man: What choice did we have? The evidence was solid. Extract Two. You hear a media lawyer talking about defamation. Woman: What people often don't realise is that truth is an absolute defence. If what you published is factually true, no amount of hurt feelings makes it defamatory. Man: So the real risk is publishing something you can't actually prove? Woman: Exactly. It's not about being unkind; it's about being unable to substantiate the claim if challenged in court. Extract Three. You hear two friends discussing censorship. Man: Little did I know, when I moved abroad, how much I'd taken free speech for granted back home. Woman: It really does change how you see things, doesn't it? Man: Completely. Under no circumstances would I now dismiss press freedom as something minor or trivial.", [
      mc("1. What happened to the controversial story?", ["Nothing.", "It caused a backlash and led to a lawsuit.", "It was ignored."], 1, "'Not only did the story cause a huge backlash, but it also led to a lawsuit'."),
      mc("2. How does the woman describe the man's stance?", ["Weak.", "Rarely seen — standing firm under pressure.", "Cowardly."], 1, "'Rarely have I seen an editor stand by a decision that firmly'."),
      mc("3. What is an 'absolute defence' against defamation?", ["Apology.", "Truth.", "Silence."], 1, "'truth is an absolute defence'."),
      mc("4. What is the real risk, according to the lawyer?", ["Being unkind.", "Publishing something you can't substantiate.", "Being too honest."], 1, "'It's about being unable to substantiate the claim'."),
      mc("5. What did the man not realise before moving abroad?", ["How expensive life was.", "How much he'd taken free speech for granted.", "How to speak English."], 1, "'Little did I know… how much I'd taken free speech for granted'."),
      mc("6. How does the man now view press freedom?", ["As trivial.", "As something he'd never dismiss as minor.", "As unimportant."], 1, "'Under no circumstances would I now dismiss press freedom'."),
    ]),

    ...speakingParts({ p1: "qué opinas sobre pagar por el periodismo de calidad y cuánto confías en los medios que consumes", p2: "dos escenas de acceso a la información (alguien pagando una suscripción a un periódico serio y alguien viendo titulares gratuitos en el móvil): compáralas y especula sobre la calidad de la información", p3: "cómo debería financiarse el buen periodismo (suscripciones, publicidad, filantropía, financiación pública, modelos sin ánimo de lucro): comentadlo y elegid el más sostenible", p4: "los medios y la libertad de expresión: si el periodismo de calidad debería ser accesible para todos, si las plataformas tienen demasiado poder y qué papel debe tener el Estado" }),

    SUMMARY("Resumen de la Semana 2 (C1)", [
      "Dominas la inversión, las cleft sentences, el énfasis (do/so/such/intensificadores), el fronting y las relativas formales/participle clauses.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con el tema de los medios de comunicación.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los CONDICIONALES AVANZADOS y las ESTRUCTURAS HIPOTÉTICAS de nivel C1.",
    ]),
    INFO("Mini-simulacro de la Semana 2", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 3."),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "La inversión y el énfasis · Los medios de comunicación",
  description: "Inversión tras adverbios negativos/limitativos, oraciones hendidas, do/did enfático, so/such...that e intensificadores, y fronting, con el hilo de los medios, el periodismo, la desinformación y la libertad de expresión. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
