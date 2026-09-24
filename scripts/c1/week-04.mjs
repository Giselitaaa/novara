/**
 * C1 Advanced · Semana 4 — "Las relativas avanzadas y el estilo indirecto · La justicia y el derecho".
 * Gramática: relativas reducidas (participio) y con cuantificador (some/many/none
 * of which/whom), estilo indirecto sofisticado (verbos introductores variados,
 * cambios de tiempo/lugar/persona en contextos complejos, preguntas y órdenes
 * reportadas), con el hilo temático de la justicia, el derecho, los tribunales
 * y el sistema penal.
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

// ───────────────────────── DÍA 16 ─────────────────────────
const DAY16 = {
  title: "Día 16 — Relativas reducidas y con cuantificador · La justicia y los tribunales",
  description: "Relativas reducidas con participio (-ing/-ed); relativas con cuantificador (some/many/none/most of which/whom); relativas con whose extendido. Vocabulario de justicia y tribunales. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Compactar y matizar la información con relativas reducidas y con cuantificador.",
    summary: "Relativas reducidas y con cuantificador; justicia y tribunales; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["usar relativa reducida con verbo de estado sin -ing.", "elegir mal -ing (activa) vs -ed (pasiva) en la reducción.", "olvidar 'of' en 'many of which/whom'."],
    reviewPrompts: ["¿Cómo reduces 'the witnesses who were called to testify'?", "¿Cómo dirías 'muchos de los cuales' en una relativa formal?"],
  },
  items: [
    TEXT("👋 Semana 4 del C1. Hoy las RELATIVAS REDUCIDAS y CON CUANTIFICADOR: un recurso clave para compactar información en registro formal/académico. Vocabulario: la JUSTICIA y los TRIBUNALES."),
    GRAMMAR("Relativas reducidas y con cuantificador", `RELATIVAS REDUCIDAS (participio, sin relativo ni verbo 'be' conjugado):
· -ING (activa, equivale a who/which + verbo activo): The lawyer representing the defendant… (= who is representing). Witnesses waiting to testify… (= who were waiting).
· -ED (pasiva, equivale a who/which + be + participio): The evidence presented in court… (= that was presented). The suspect arrested last night… (= who was arrested).
· NOTA: solo se reducen relativas ESPECIFICATIVAS o EXPLICATIVAS con 'be' (o que admiten esta transformación); no todas las relativas son reducibles.
RELATIVAS CON CUANTIFICADOR (registro formal, típico en Reading/Writing C1): cuantificador + OF + WHICH/WHOM.
· The jury heard forty witnesses, several of whom contradicted each other. (= and several of them contradicted…)
· The court reviewed hundreds of documents, most of which were irrelevant.
· She raised three objections, none of which the judge accepted.
· Cuantificadores habituales: some/many/most/several/none/two/both/all + of which/whom.
RELATIVA CON WHOSE EXTENDIDO: puede referirse a cosas, no solo personas: The company, whose reputation was at stake, settled quickly.
⚠️ Reducir una relativa es un recurso de ESTILO/ECONOMÍA típico de C1 en textos escritos; no siempre es obligatorio, pero es señal de registro avanzado.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ The witness knowing the truth → si es un ESTADO puntual, mejor mantener 'who knew'; -ing reducido suele venir de tiempos continuos o generales.\n· ❌ The evidence presenting in court → ✅ presented (pasiva: la evidencia ES presentada, no presenta).\n· ❌ many of who → ✅ many of WHOM (personas, con preposición).\n· No reduzcas relativas que llevan 'that' restrictivo sin 'be' fácilmente sustituible."),
    grammarEx("Use of English — Relativas reducidas y con cuantificador", "Reduce o completa con cuantificador.", [
      mc("Full: 'The lawyer who is representing the defendant…' Reduced:", ["The lawyer representing the defendant…", "The lawyer represented the defendant…", "The lawyer represents the defendant…"], 0, "reducida -ing (activa)."),
      mc("Full: 'The evidence that was presented in court…' Reduced:", ["The evidence presenting in court…", "The evidence presented in court…", "The evidence presents in court…"], 1, "reducida -ed (pasiva)."),
      fb("The jury heard forty witnesses, several ___ contradicted each other.", ["of whom"], "cuantificador + of whom (personas)."),
      fb("The court reviewed hundreds of documents, most ___ were irrelevant.", ["of which"], "cuantificador + of which (cosas)."),
      mc("She raised three objections, ___ the judge accepted.", ["none of which", "none of whom", "none which"], 0, "none of which (cosas)."),
      mc("Full: 'The suspect who was arrested last night…' Reduced:", ["The suspect arresting last night…", "The suspect arrested last night…", "The suspect arrests last night…"], 1, "reducida -ed (pasiva)."),
      fb("The company, ___ reputation was at stake, settled quickly. (whose extendido a cosas)", ["whose"], "whose (también para cosas)."),
    ]),
    GRAMMAR("Vocabulario del día — La justicia y los tribunales (C1)", "Léxico avanzado de justicia."),
    deck("C1 S4D16 — Justicia y tribunales", [
      ["testify", "testificar / declarar", "She testified against her former employer.", "verbo", "ˈtestɪfaɪ"],
      ["verdict", "veredicto", "The jury delivered a unanimous verdict.", "sustantivo", "ˈvɜːdɪkt"],
      ["prosecution", "acusación / fiscalía", "The prosecution presented new evidence.", "sustantivo", "ˌprɒsɪˈkjuːʃn"],
      ["acquit", "absolver", "The jury acquitted him of all charges.", "verbo", "əˈkwɪt"],
      ["miscarriage of justice", "error judicial", "It was a shocking miscarriage of justice.", "expresión", "ˌmɪskærɪdʒ əv ˈdʒʌstɪs"],
      ["plea bargain", "acuerdo de conformidad", "He accepted a plea bargain.", "sustantivo", "ˈpliː ˌbɑːɡɪn"],
      ["sentencing", "condena / imposición de pena", "Sentencing is due next week.", "sustantivo", "ˈsentənsɪŋ"],
      ["rehabilitation", "rehabilitación", "The programme focuses on rehabilitation.", "sustantivo", "ˌriːəˌbɪlɪˈteɪʃn"],
      ["circumstantial evidence", "prueba circunstancial", "The case relied on circumstantial evidence.", "sustantivo", "ˌsɜːkəmˈstænʃl ˈevɪdəns"],
      ["due process", "garantías procesales / debido proceso", "Everyone deserves due process.", "expresión", "djuː ˈprəʊses"],
    ]),
    vocabEx("Vocabulario — La justicia y los tribunales", "Elige la opción correcta.", [
      mc("To give evidence in court is to ___.", ["testify", "acquit", "sentence"], 0, "testify."),
      mc("A decision of guilty or not guilty is a ___.", ["verdict", "plea bargain", "prosecution"], 0, "verdict."),
      mc("To declare someone not guilty is to ___ them.", ["acquit", "testify", "sentence"], 0, "acquit."),
      mc("A wrongful conviction is a ___.", ["miscarriage of justice", "plea bargain", "due process"], 0, "miscarriage of justice."),
      mc("The legal team arguing for conviction is the ___.", ["prosecution", "verdict", "rehabilitation"], 0, "prosecution."),
      mc("The fair legal procedures everyone is entitled to are ___.", ["due process", "plea bargain", "sentencing"], 0, "due process."),
    ]),

    ...uoe({
      p1: {
        title: "The weight of a verdict",
        text: "Few moments in the entire legal process carry quite the same emotional (1)___ as the delivery of a jury's verdict. Months, sometimes years, of painstaking investigation, meticulous legal argument and often gruelling personal testimony all (2)___ down to a handful of words spoken aloud in a hushed, expectant courtroom. For the defendant, the verdict determines not merely a legal outcome but the entire shape of their (3)___ life to come — freedom or imprisonment, vindication or lasting public disgrace. For victims and their families, it can represent either a measure of genuine closure or a fresh, bitter wound, depending entirely on whether the outcome (4)___ with their own deeply held sense of what actually happened and what justice genuinely requires. Jurors themselves, ordinary citizens suddenly (5)___ with extraordinary responsibility, often describe the burden of decision as genuinely unlike anything else they have ever experienced in their entire lives. They must weigh conflicting testimony, assess witness credibility, and apply complex legal standards, all while knowing that their collective decision will irrevocably (6)___ another human being's future. It is precisely this immense weight that explains why legal systems have developed such elaborate procedural safeguards — the presumption of innocence, the requirement of proof beyond reasonable doubt, the right to a fair and (7)___ trial — designed to ensure that this awesome power is exercised as carefully, as fairly and as (8)___ as humanly possible.",
        q: [
          mc("(1)", ["weight", "burden", "gravity", "significance"], 0, "'the same emotional weight'."),
          mc("(2)", ["come", "boil", "narrow", "reduce"], 1, "'all boil down to a handful of words'."),
          mc("(3)", ["future", "coming", "subsequent", "ensuing"], 0, "'the entire shape of their future life'."),
          mc("(4)", ["aligns", "matches", "fits", "corresponds"], 0, "'whether the outcome aligns with'."),
          mc("(5)", ["entrusted", "given", "handed", "burdened"], 0, "'suddenly entrusted with… responsibility'."),
          mc("(6)", ["shape", "determine", "decide", "settle"], 1, "'will… determine another human being's future'."),
          mc("(7)", ["impartial", "unbiased", "neutral", "objective"], 0, "'a fair and impartial trial'."),
          mc("(8)", ["consistently", "reliably", "dependably", "steadily"], 0, "'as carefully… and as consistently as possible'."),
        ],
      },
      p2: {
        title: "Eyewitness on trial",
        text: "For much of legal history, eyewitness testimony was widely regarded, both by juries and by legal professionals alike, as (1)___ close to the gold standard of courtroom evidence. What could possibly be more compelling, after all, than a confident witness pointing directly (2)___ the defendant and declaring, without apparent hesitation, 'That's the man I saw'? Decades of careful psychological research have since revealed just how badly (3)___ this confidence can actually be. Human memory, it turns out, does not function anything like a video recording, faithfully preserving events exactly as they originally occurred; it is instead a genuinely reconstructive process, one highly susceptible to subtle distortion, unconscious suggestion and even outright confabulation. A witness's confident, detailed memory of a suspect's face can be substantially shaped, entirely without their own awareness, by the specific way a police line-up happens to be conducted, by media coverage subsequently viewed, or (4)___ simply by the passage of time itself. DNA exoneration cases, of which there have now been many hundreds worldwide, most (5)___ involved at least one mistaken eyewitness identification, have forced a genuinely uncomfortable reckoning with the field's own scientific findings. Some jurisdictions have responded by mandating specific jury instructions about the well-documented, empirically established unreliability of eyewitness memory; others have reformed police line-up procedures to substantially reduce (6)___ risk of unconscious suggestion. Yet eyewitness testimony, for all its now well-documented flaws, remains stubbornly persuasive to juries, who continue to find a confident, detailed personal account (7)___ compelling than dry statistical evidence about error rates, however scientifically rigorous that underlying evidence genuinely happens to be. Bridging this troubling, persistent gap between psychological science and everyday courtroom practice remains one of criminal justice's most genuinely (8)___ ongoing challenges.",
        q: [
          fb("(1)", ["something", "somewhere"], "'was regarded as something close to'."),
          fb("(2)", ["at"], "'pointing directly at the defendant'."),
          fb("(3)", ["misplaced"], "'how badly misplaced this confidence can be'."),
          fb("(4)", ["even"], "'or even simply by the passage of time'."),
          fb("(5)", ["of"], "'most of which involved'."),
          fb("(6)", ["the"], "'reduce the risk'."),
          fb("(7)", ["more"], "'find… a confident… account more compelling'."),
          fb("(8)", ["persistent", "stubborn"], "'one of… most genuinely persistent ongoing challenges'."),
        ],
      },
      p3: {
        title: "Punishment or reform?",
        text: "Every criminal justice system must eventually confront a genuinely fundamental question that no amount of clever legal drafting can ultimately avoid: what, precisely, is punishment actually meant to achieve? Several distinct, sometimes competing (1)___ have historically been offered. Retribution holds that wrongdoers simply deserve to suffer proportionately for the harm they have knowingly caused, regardless of any further practical (2)___ that suffering might or might not produce. Deterrence holds that punishing one offender visibly serves, above all, to discourage others from committing similar crimes in future. Incapacitation focuses more narrowly on simply removing dangerous individuals from society for whatever period is genuinely necessary to protect the wider public. And rehabilitation aims, more ambitiously, to fundamentally transform offenders so that they can eventually return to society considerably less likely to reoffend than when they originally entered the system. These distinct goals frequently pull uncomfortably (3)___ different directions in practice. A punishment severe enough to satisfy deep retributive impulses may actively undermine genuine rehabilitation, hardening rather than reforming the very offenders it was ostensibly designed to punish. A system focused overwhelmingly on rehabilitation may strike many victims and their families as insufficiently (4)___ of the genuine harm they have personally suffered. Different societies, and indeed different individuals within the very same society, weigh these (5)___ goals rather differently, and there is, in truth, no simple, objectively 'correct' formula for reliably balancing them against one another. What does seem reasonably clear from the accumulated international evidence, however, is that purely punitive systems, focused almost exclusively on retribution and deterrence while systematically neglecting rehabilitation, tend to produce persistently (6)___ reoffending rates than systems that meaningfully invest in genuine offender rehabilitation and eventual reintegration. This uncomfortable empirical finding challenges societies to ask themselves honestly whether their criminal justice systems are genuinely designed to reduce crime over the long term, or whether they are designed, at bottom, primarily to satisfy other deeply human, (7)___ less strictly practical impulses — impulses that, however psychologically understandable, may not always actually serve the wider society's genuine, long-term (8)___.",
        items: [
          { root: "rational", accepted: ["rationales", "rationale"], hint: "'distinct… rationales' → rationales." },
          { root: "practice", accepted: ["practical"], hint: "'any further practical benefit' → practical." },
          { root: "in", accepted: ["in"], hint: "'pull… in different directions' (preposición)." },
          { root: "respect", accepted: ["respectful"], hint: "'insufficiently respectful of' → respectful." },
          { root: "compete", accepted: ["competing"], hint: "'these competing goals' → competing." },
          { root: "low", accepted: ["lower"], hint: "'produce persistently lower reoffending rates' → lower." },
          { root: "if", accepted: ["if"], hint: "'but if less strictly practical' (conector)." },
          { root: "interest", accepted: ["interests"], hint: "'the wider society's… interests' → interests." },
        ],
      },
      p4: {
        title: "Transformaciones — relativas reducidas y con cuantificador",
        items: [
          { s1: "The witnesses who were waiting to testify grew increasingly anxious.", key: "WAITING", s2: "The witnesses ___ to testify grew increasingly anxious.", accepted: ["waiting"], explanation: "reducida -ing (activa)." },
          { s1: "The evidence that was presented in court was overwhelming.", key: "PRESENTED", s2: "The evidence ___ in court was overwhelming.", accepted: ["presented"], explanation: "reducida -ed (pasiva)." },
          { s1: "The jury heard sixty witnesses. Several of them contradicted each other.", key: "WHOM", s2: "The jury heard sixty witnesses, several ___ contradicted each other.", accepted: ["of whom"], explanation: "cuantificador + of whom." },
          { s1: "The court reviewed hundreds of documents. Most of them were irrelevant.", key: "WHICH", s2: "The court reviewed hundreds of documents, most ___ were irrelevant.", accepted: ["of which"], explanation: "cuantificador + of which." },
          { s1: "The company's reputation was at stake, and it settled quickly.", key: "WHOSE", s2: "The company, ___ reputation was at stake, settled quickly.", accepted: ["whose"], explanation: "whose extendido a cosas." },
          { s1: "The lawyer who is representing the defendant is highly experienced.", key: "REPRESENTING", s2: "The lawyer ___ the defendant is highly experienced.", accepted: ["representing"], explanation: "reducida -ing (activa)." },
        ],
      },
      p5: {
        title: "The case that changed the rules",
        text: "In the early hours of a winter morning several decades ago, a young man was arrested by local police on suspicion of a serious crime he had, in fact, not actually committed. Over the course of an exhausting, deliberately gruelling sixteen-hour interrogation, conducted without any lawyer present and with only minimal, largely perfunctory breaks, he eventually signed a detailed written confession — a confession that would later be proven, through subsequent forensic evidence, to have been entirely false, extracted through a combination of sheer physical exhaustion, psychological pressure and, as later investigation revealed, several genuinely deceptive interrogation tactics that were, at the time, considered entirely standard and unremarkable police practice.\n\nHe spent nearly seven years in prison before newly available forensic evidence, unavailable at the time of his original trial, definitively proved his innocence beyond any reasonable doubt. His case, extensively documented in subsequent legal scholarship, became a pivotal, frequently cited example in a growing, increasingly influential body of research examining precisely how and why innocent people sometimes falsely confess to crimes they never actually committed — a phenomenon that had, until relatively recently, struck many people, including experienced legal professionals, as almost inherently implausible on its face.\n\nWhat researchers studying his case, and numerous broadly similar ones that followed, eventually discovered was genuinely unsettling. Certain widely used, seemingly standard interrogation techniques, several of which had been employed for decades by police forces around the world with little serious scrutiny or challenge, turned out to be considerably more likely to produce false confessions than had previously been seriously recognised or acknowledged. Presenting fabricated evidence to suspects, falsely suggesting the interrogation would end sooner if they simply confessed, and applying sustained psychological pressure over many hours without adequate rest — all techniques he had personally experienced firsthand — were subsequently shown, through careful controlled research, to measurably increase the risk of eliciting confessions from people who were, in fact, entirely innocent of any wrongdoing.\n\nHis case, along with a small but steadily growing number of similarly well-documented wrongful convictions that followed it, ultimately contributed directly to significant, concrete reforms in police interrogation practices across several jurisdictions: mandatory recording of complete interrogations from start to finish, strict, legally enforced limits on total interrogation length, and considerably greater legal scrutiny of specific psychological tactics previously considered routine and unremarkable. Reformers, several of whom had themselves worked previously as police officers or prosecutors, argued persuasively that these particular changes would ultimately make investigations more reliable overall, not merely fairer to individual defendants, since coerced false confessions actively waste scarce investigative resources and, crucially, allow actual perpetrators to remain entirely free while an innocent person is wrongly punished in their place.\n\nHe himself, now in his later years, has spent much of his subsequent life advocating for further, continued reform, testifying repeatedly before legislative committees and speaking candidly and often painfully with law students and practising police officers alike about his own harrowing, deeply personal experience. His case stands today as a stark, enduring reminder that even seemingly rigorous, methodical, professionally-run legal and investigative systems can occasionally produce profoundly and tragically wrong outcomes, and that meaningful reform, however welcome and overdue, typically arrives only after real, often irreversible human suffering has already, quite needlessly, occurred.",
        q: [
          mc("What happened to the young man during his interrogation?", ["He was released quickly.", "He signed a false confession after sixteen hours without a lawyer present.", "He confessed immediately, truthfully.", "He was never questioned."], 1, "'he eventually signed a detailed written confession… entirely false'."),
          mc("How long did he spend in prison before being exonerated?", ["A few months.", "Nearly seven years.", "Two years.", "He was never imprisoned."], 1, "'He spent nearly seven years in prison'."),
          mc("What did researchers studying his case discover?", ["Nothing significant.", "Certain standard interrogation techniques were more likely to produce false confessions than recognised.", "His confession was true.", "Interrogations are always fair."], 1, "'certain widely used, seemingly standard interrogation techniques… turned out to be considerably more likely to produce false confessions'."),
          mc("What reforms did his case help bring about?", ["None.", "Mandatory recording, time limits, and greater scrutiny of tactics.", "Harsher sentences.", "Fewer lawyers."], 1, "'mandatory recording of complete interrogations… strict… limits on total interrogation length, and considerably greater legal scrutiny'."),
          mc("What argument did reformers make for these changes?", ["They only help defendants.", "They make investigations more reliable, since false confessions let real perpetrators go free.", "They're too expensive.", "They slow down justice unnecessarily."], 1, "'coerced false confessions actively waste scarce investigative resources… allow actual perpetrators to remain entirely free'."),
          mc("What does his case remind us of, according to the writer?", ["Systems are always fair.", "Even rigorous systems can produce tragically wrong outcomes, and reform often comes after real suffering.", "Confessions are always reliable.", "Reform is easy."], 1, "'even seemingly rigorous… systems can occasionally produce profoundly and tragically wrong outcomes… reform… typically arrives only after real… human suffering'."),
        ],
      },
      p6: {
        title: "Should juries be replaced by expert judges?",
        intro: "Cuatro personas debaten si los jurados deberían sustituirse por jueces expertos.",
        texts: {
          A: "NADIA: I have real reservations about ordinary citizens, however well-intentioned, deciding genuinely complex cases involving forensic science, financial fraud, or technical expert testimony they haven't remotely been trained to properly evaluate. A panel of experienced, legally trained judges would surely reach more consistent, more technically sound verdicts than twelve randomly selected members of the general public.",
          B: "TOM: I understand that concern, but I'd argue juries bring something genuinely valuable that expertise alone simply cannot replace: a broad, diverse community's own collective sense of fairness and reasonable doubt. Professional judges, however competent and well-trained, can become jaded or narrowly technical over time in ways that ordinary citizens, precisely because they're not professionally hardened to the process, generally don't.",
          C: "PRIYA: My concern is less about competence generally and more specifically about consistency across similar cases. Studies repeatedly show juries reaching genuinely different verdicts on broadly similar facts depending heavily on factors that arguably shouldn't matter at all — a defendant's likeability, the specific composition of that particular jury, even, troublingly, the order in which evidence happens to be presented to them.",
          D: "SAM: What I keep coming back to is the deeper question of legitimacy. A legal system's ultimate authority, in a genuine democracy, arguably rests on ordinary citizens themselves participating meaningfully in the actual administration of justice, not merely having justice quietly administered to them from above by an unaccountable professional class. Juries, whatever their genuine flaws, keep the justice system meaningfully connected to the actual community it ultimately serves.",
        },
        q: [
          mc("Who has reservations about ordinary citizens judging technically complex cases?", ["A", "B", "C", "D"], 0, "Nadia: 'ordinary citizens… deciding genuinely complex cases… they haven't remotely been trained to properly evaluate'."),
          mc("Whose view most directly CHALLENGES Nadia's preference for expert judges?", ["A", "B", "C", "D"], 1, "Tom: 'juries bring something genuinely valuable that expertise alone simply cannot replace'."),
          mc("Who focuses on inconsistency in jury verdicts across similar cases?", ["A", "B", "C", "D"], 2, "Priya: 'juries reaching genuinely different verdicts on broadly similar facts'."),
          mc("Who argues juries matter for the legitimacy of the justice system?", ["A", "B", "C", "D"], 3, "Sam: 'A legal system's ultimate authority… rests on ordinary citizens themselves participating'."),
        ],
      },
      p7: {
        title: "The problem with plea bargains",
        text: "In many modern legal systems, the vast majority of criminal cases are resolved not through a full, public trial but through a negotiated arrangement known as a plea bargain. (1)___\n\nUnder such an arrangement, a defendant formally agrees to plead guilty, often to a reduced charge or in exchange for a somewhat lighter sentence, in return for avoiding the considerable expense, delay and genuine uncertainty of a full trial. (2)___ For overburdened courts and prosecutors, this offers an obviously attractive, practical way to process an otherwise unmanageable caseload.\n\nCritics, however, point to a genuinely troubling structural problem lurking within this seemingly efficient system. (3)___ Defendants, including some who are actually entirely innocent, may reasonably calculate that pleading guilty to a lesser charge is simply safer than risking a considerably harsher sentence if they insist on a full trial and happen to lose.\n\nThis creates a perverse, genuinely uncomfortable incentive structure. (4)___ The threat of a severe potential sentence can, in effect, pressure even innocent defendants into falsely admitting guilt they don't actually bear.\n\nDefenders of the system respond that plea bargaining, whatever its genuine flaws, remains considerably preferable to the alternative of courts becoming completely overwhelmed and unable to function at all. (5)___ Without it, they argue, the entire criminal justice system would likely grind to a complete standstill under its own sheer, unmanageable weight.\n\nBoth sides, in truth, identify something genuinely real and important. (6)___ Plea bargaining may be a practical, arguably necessary accommodation to limited resources, but one that comes with real and serious costs to the basic principle that only the genuinely guilty should ever be formally punished.",
        options: [
          "This practice has become, in effect, the system's quiet default.",  // A -> gap 1
          "Both sides, on the surface, appear to gain something real.",      // B -> gap 2
          "It can make guilty pleas rational even for the genuinely innocent.", // C -> gap 3
          "Fear of a harsher trial sentence distorts the incentive entirely.", // D -> gap 4
          "The system, they insist, would otherwise simply collapse.",       // E -> gap 5
          "The honest truth here is genuinely uncomfortable and unresolved.", // F -> gap 6
          "No system has ever relied on plea bargains at all.",              // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: se ha vuelto el modo por defecto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ambos lados parecen ganar algo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: puede hacer racional declararse culpable siendo inocente."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el miedo distorsiona el incentivo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el sistema colapsaría sin ello."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la verdad es incómoda y sin resolver."),
        ],
      },
      p8: {
        title: "Four people discuss their experience with the justice system",
        text: "Read what four people say about their personal experience of the justice system.\n\nA) NADIA: I served on a jury for a genuinely complex fraud case, several months of dense financial testimony, most of which I honestly struggled to fully understand at the time. It left me with real doubts about whether twelve ordinary people, myself included, were actually the right ones to be deciding something quite that technical and specialised.\n\nB) TOM: I was wrongly accused of something I hadn't done, years ago now, and even though the charges were eventually dropped entirely, the whole experience genuinely changed how I see the system forever. I used to assume, rather naively, that if you were innocent, the truth would simply come out fine in the end. I no longer believe that quite so confidently or automatically.\n\nC) PRIYA: I work as a public defender, representing clients most of whom simply cannot afford proper private legal representation. What I see daily is how much genuine justice still quietly depends on resources — the same case, with better funded representation, often produces a measurably different, better outcome.\n\nD) SAM: I testified as an eyewitness once, and honestly, looking back now, I'm genuinely no longer sure how accurate my confident memory actually was at the time. It unsettled me deeply to later learn just how unreliable eyewitness testimony, including presumably my own, can genuinely turn out to be under real scrutiny.\n",
        q: [
          mc("Who served on a jury for a complex fraud case?", ["A", "B", "C", "D"], 0, "Nadia: 'I served on a jury for a genuinely complex fraud case'."),
          mc("Who was wrongly accused of something they hadn't done?", ["A", "B", "C", "D"], 1, "Tom: 'I was wrongly accused of something I hadn't done'."),
          mc("Who works as a public defender?", ["A", "B", "C", "D"], 2, "Priya: 'I work as a public defender'."),
          mc("Who testified as an eyewitness and now doubts their own memory?", ["A", "B", "C", "D"], 3, "Sam: 'I testified as an eyewitness once… I'm genuinely no longer sure how accurate my… memory actually was'."),
          mc("Who doubts whether ordinary jurors are right for technical cases?", ["A", "B", "C", "D"], 0, "Nadia: 'real doubts about whether twelve ordinary people… were actually the right ones'."),
          mc("Who no longer assumes truth simply comes out fine in the end?", ["A", "B", "C", "D"], 1, "Tom: 'I no longer believe that quite so confidently'."),
          mc("Who says outcomes depend heavily on the quality of legal representation?", ["A", "B", "C", "D"], 2, "Priya: 'the same case, with better funded representation, often produces a measurably different, better outcome'."),
          mc("Who was unsettled to learn how unreliable eyewitness testimony can be?", ["A", "B", "C", "D"], 3, "Sam: 'It unsettled me deeply to later learn just how unreliable eyewitness testimony… can genuinely turn out to be'."),
          mc("Who represents clients who mostly cannot afford private lawyers?", ["A", "B", "C", "D"], 2, "Priya: 'representing clients most of whom simply cannot afford proper private legal representation'."),
          mc("Whose charges were eventually dropped?", ["A", "B", "C", "D"], 1, "Tom: 'the charges were eventually dropped entirely'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la justicia penal se plantearon dos ideas:\n· the justice system should focus on punishment (el sistema debería centrarse en el castigo)\n· the justice system should focus on rehabilitation (debería centrarse en la rehabilitación)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos una relativa REDUCIDA o con CUANTIFICADOR. Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para un organismo judicial sobre cómo mejorar la fiabilidad de los testimonios oculares: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'If I served on a jury' — reflexiona sobre cómo crees que reaccionarías ante esa responsabilidad.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two lawyers discussing a case. Woman: We called twenty witnesses, several of whom gave conflicting accounts of the same evening. Man: That's exactly why circumstantial evidence alone rarely convinces a jury on its own. Extract Two. You hear a criminologist talking about rehabilitation. Woman: Programmes focusing purely on punishment, without addressing the underlying causes, tend to produce higher reoffending rates, not lower ones. Man: So rehabilitation genuinely works better, statistically speaking? Woman: The evidence, most of which is now decades old, points fairly consistently in that direction, yes. Extract Three. You hear two friends discussing jury duty. Man: I served on a jury once, and honestly, the responsibility weighed on me far more heavily than I'd ever expected beforehand. Woman: I can imagine. Deciding someone's entire future, based on evidence presented over just a few short days, must be genuinely daunting.", [
      mc("1. What happened with the twenty witnesses?", ["They all agreed.", "Several of them gave conflicting accounts.", "None testified."], 1, "'several of whom gave conflicting accounts'."),
      mc("2. Why doesn't circumstantial evidence alone usually convince a jury?", ["It's illegal.", "It's implied to be insufficient on its own, given conflicting witness accounts.", "Juries ignore it."], 1, "'circumstantial evidence alone rarely convinces a jury on its own'."),
      mc("3. What does the criminologist say about purely punitive programmes?", ["They reduce reoffending.", "They tend to produce higher reoffending rates.", "They have no effect."], 1, "'tend to produce higher reoffending rates'."),
      mc("4. How does she describe the evidence for rehabilitation?", ["New and untested.", "Mostly decades old, but fairly consistent.", "Nonexistent."], 1, "'most of which is now decades old, points fairly consistently'."),
      mc("5. How did the man feel about serving on a jury?", ["Unaffected.", "The responsibility weighed on him more heavily than expected.", "Bored."], 1, "'the responsibility weighed on me far more heavily than I'd ever expected'."),
      mc("6. What does the woman say about the jury's task?", ["It's simple.", "It must be genuinely daunting, deciding someone's future so quickly.", "It's unimportant."], 1, "'must be genuinely daunting'."),
    ]),

    ...speakingParts({ p1: "qué opinas del sistema judicial de tu país y si confías en él", p2: "dos imágenes de la justicia (un juicio con jurado y alguien esperando ansiosamente un veredicto): compáralas y especula sobre lo que sienten las personas implicadas", p3: "qué es lo más importante en un sistema de justicia (la rapidez, la equidad de recursos, la rehabilitación, la protección de las víctimas, la precisión de las pruebas): comentadlo y elegid lo esencial", p4: "la justicia y el derecho: si los jurados deberían sustituirse por expertos, si el sistema debería centrarse en el castigo o la rehabilitación y cómo evitar los errores judiciales" }),

    SUMMARY("Resumen del Día 16", [
      "Relativas reducidas: -ing (activa, equivale a who/which + verbo activo) / -ed (pasiva, equivale a who/which + be + participio).",
      "Relativas con cuantificador: some/many/most/none/several + of which/whom (registro formal). Whose también para cosas.",
      "Vocabulario de justicia. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 17", "Escribe 6 frases con relativas reducidas o con cuantificador sobre la justicia. Repasa las flashcards. Mañana: el estilo indirecto sofisticado."),
  ],
};

// ───────────────────────── DÍA 17 ─────────────────────────
const DAY17 = {
  title: "Día 17 — El estilo indirecto sofisticado · Los interrogatorios y las confesiones",
  description: "Verbos introductores variados con su estructura propia (admit/deny/insist/claim/allege/accuse); preguntas y órdenes reportadas complejas; estilo indirecto de modales y condicionales. Vocabulario de interrogatorios. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Reportar con precisión usando verbos introductores variados y sus estructuras propias.",
    summary: "Estilo indirecto sofisticado; interrogatorios y confesiones; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["usar 'say' o 'tell' para todo en vez de un verbo introductor preciso.", "estructura incorrecta tras accuse/deny/insist (gerundio vs infinitivo vs that).", "no retroceder los modales en el estilo indirecto (will→would, can→could)."],
    reviewPrompts: ["¿Qué estructura sigue 'accuse someone of'?", "¿Cómo reportas 'I didn't do it' con 'deny'?"],
  },
  items: [
    TEXT("🔁 Ayer, las relativas avanzadas. Hoy el ESTILO INDIRECTO SOFISTICADO: verbos introductores precisos, cada uno con su propia estructura. Vocabulario: los INTERROGATORIOS y las CONFESIONES."),
    GRAMMAR("El estilo indirecto sofisticado", `Más allá de 'say' y 'tell', el C1 exige VERBOS INTRODUCTORES PRECISOS, cada uno con su ESTRUCTURA propia:
· ADMIT / DENY + -ING: He admitted stealing the money. She denied knowing anything about it.
· INSIST ON + -ING / INSIST (THAT): He insisted on speaking to a lawyer. She insisted that she was innocent.
· CLAIM / ALLEGE + TO + INF. o + THAT: He claimed to be innocent. Prosecutors allege that he was involved.
· ACCUSE SOMEONE OF + -ING: They accused him of lying to the police.
· WARN SOMEONE (NOT) TO + INF.: The lawyer warned her not to say anything without counsel.
· PROMISE / THREATEN + TO + INF.: He promised to cooperate. She threatened to sue.
· SUGGEST + -ING / THAT + (SHOULD): The detective suggested reviewing the CCTV footage.
· URGE / ADVISE SOMEONE TO + INF.: The lawyer urged him to remain silent.
PREGUNTAS Y ÓRDENES REPORTADAS (repaso avanzado): sin inversión, con if/whether (sí/no) o wh- (específicas); órdenes con tell/order/instruct + sb + (not) to + inf.
· 'Did you take the money?' → The detective asked if/whether he had taken the money.
· 'Don't move.' → The officer ordered him not to move.
ESTILO INDIRECTO DE MODALES/CONDICIONALES: will→would, can→could, may→might, must→had to/must (obligación fuerte se mantiene a veces); los condicionales tipo 2/3 NO cambian.
⚠️ El verbo introductor preciso aporta MATIZ (admitir ≠ negar ≠ insistir ≠ alegar) — elegirlo bien es clave en C1.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ He denied to steal → ✅ He denied STEALING (deny + -ing, nunca infinitivo).\n· ❌ He accused her to lie → ✅ He accused her OF LYING (accuse sb OF + -ing).\n· ❌ She insisted to be innocent → ✅ She insisted THAT she was innocent / She insisted ON being innocent (raro) — mejor 'insisted she was'.\n· Los condicionales 2º/3º NO retroceden en estilo indirecto: 'If I were rich' se mantiene igual reportado."),
    grammarEx("Use of English — Estilo indirecto sofisticado", "Reporta con el verbo introductor correcto.", [
      mc("Direct: 'I didn't take the money.' Reported:", ["He denied taking the money.", "He denied to take the money.", "He denied he take the money."], 0, "deny + -ing."),
      mc("Direct: 'You're lying!' (to someone) Reported:", ["She accused him of lying.", "She accused him to lie.", "She accused that he lied."], 0, "accuse sb of + -ing."),
      fb("Direct: 'I want to speak to my lawyer.' Reported: He insisted ___ his lawyer. (insist on)", ["on speaking to"], "insist on + -ing."),
      fb("Direct: 'Don't say anything.' Reported: The lawyer warned her ___ anything. (warn sb not to)", ["not to say"], "warn sb not to + inf."),
      mc("Direct: 'Did you see the suspect?' Reported:", ["The detective asked if she had seen the suspect.", "The detective asked did she see the suspect.", "The detective asked she had seen the suspect."], 0, "pregunta reportada con if, sin inversión."),
      fb("Direct: 'I'll cooperate fully.' Reported: He promised ___ fully. (promise to)", ["to cooperate"], "promise + to + inf."),
      mc("Direct: 'He was involved,' prosecutors say. Reported:", ["Prosecutors allege that he was involved.", "Prosecutors allege he involved.", "Prosecutors allege to he was involved."], 0, "allege + that."),
    ]),
    GRAMMAR("Vocabulario del día — Los interrogatorios y las confesiones (C1)", "Léxico avanzado de interrogatorios."),
    deck("C1 S4D17 — Interrogatorios y confesiones", [
      ["interrogation", "interrogatorio", "The interrogation lasted six hours.", "sustantivo", "ɪnˌterəˈɡeɪʃn"],
      ["coerce", "coaccionar", "He claimed he was coerced into confessing.", "verbo", "kəʊˈɜːs"],
      ["custody", "custodia (policial)", "He was held in police custody.", "sustantivo", "ˈkʌstədi"],
      ["waive", "renunciar (a un derecho)", "She waived her right to silence.", "verbo", "weɪv"],
      ["interrogate", "interrogar", "Officers interrogated the suspect for hours.", "verbo", "ɪnˈterəɡeɪt"],
      ["disclose", "revelar / divulgar", "He refused to disclose his source.", "verbo", "dɪsˈkləʊz"],
      ["recant", "retractarse", "She later recanted her confession.", "verbo", "rɪˈkænt"],
      ["duress", "coacción / presión", "The confession was made under duress.", "sustantivo", "djʊˈres"],
      ["incriminate", "incriminar", "The statement incriminated his associate.", "verbo", "ɪnˈkrɪmɪneɪt"],
      ["custodial interrogation", "interrogatorio bajo custodia", "Rules govern custodial interrogation.", "expresión", "kʌˈstəʊdiəl ɪnˌterəˈɡeɪʃn"],
    ]),
    vocabEx("Vocabulario — Los interrogatorios y las confesiones", "Elige la opción correcta.", [
      mc("To force someone into doing something is to ___ them.", ["coerce", "disclose", "recant"], 0, "coerce."),
      mc("To give up a legal right voluntarily is to ___ it.", ["waive", "incriminate", "disclose"], 0, "waive."),
      mc("To reveal information, especially secret, is to ___ it.", ["disclose", "waive", "recant"], 0, "disclose."),
      mc("To withdraw a previous statement is to ___ it.", ["recant", "coerce", "waive"], 0, "recant."),
      mc("Pressure or threat used to force an action is ___.", ["duress", "custody", "interrogation"], 0, "duress."),
      mc("To provide evidence suggesting someone's guilt is to ___ them.", ["incriminate", "waive", "recant"], 0, "incriminate."),
    ]),

    ...uoe({
      p1: {
        title: "The right to remain silent",
        text: "Few legal protections are as widely known, at least in popular culture, as the right to remain silent during police questioning, and yet few are (1)___ misunderstood by the very people who theoretically benefit from them most. Surveys consistently reveal that a substantial (2)___ of the general public believes, quite mistakenly, that exercising this fundamental right will somehow make them appear guiltier in the eyes of investigators or a future jury. This deeply (3)___ belief leads countless innocent suspects to waive their rights and speak freely to police, often precisely when remaining silent would have served their own genuine interests considerably better. Legal experts have long warned that innocent people, (4)___ paradoxically than guilty ones, are frequently the most eager to talk, confident that their own manifest innocence will become perfectly obvious if they simply explain everything openly and cooperatively. This confidence, research consistently suggests, is often (5)___ misplaced. Skilled interrogators can, through entirely legal but genuinely psychologically sophisticated techniques, lead even innocent people into making statements that sound, when later presented carefully out of their original context to a jury, considerably more incriminating than they were ever actually intended to be. The right to remain silent exists, at bottom, precisely because the state possesses vastly superior investigative resources and expertise compared (6)___ any individual suspect, however innocent, confident or articulate they genuinely happen to be. Understanding this basic imbalance of power, rather than naively trusting entirely in one's own manifest innocence and eloquence, is precisely what the right is fundamentally (7)___ to protect against. Yet ensuring that ordinary people genuinely, practically understand and are willing to actually exercise this crucial right remains, even now, a persistent and (8)___ challenge for defence lawyers and legal educators alike.",
        q: [
          mc("(1)", ["more", "so", "as", "quite"], 0, "'few are more widely misunderstood'."),
          mc("(2)", ["proportion", "amount", "number", "share"], 0, "'a substantial proportion of the public'."),
          mc("(3)", ["mistaken", "flawed", "wrong", "false"], 0, "'this deeply mistaken belief'."),
          mc("(4)", ["more", "rather", "somewhat", "quite"], 0, "'more paradoxically than guilty ones'."),
          mc("(5)", ["badly", "seriously", "gravely", "deeply"], 0, "'is often badly misplaced'."),
          mc("(6)", ["to", "with", "than", "against"], 0, "'compared to any individual suspect'."),
          mc("(7)", ["designed", "meant", "intended", "built"], 0, "'the right is fundamentally designed to protect against'."),
          mc("(8)", ["ongoing", "continuing", "persistent", "enduring"], 0, "'a persistent and ongoing challenge'."),
        ],
      },
      p2: {
        title: "How to lie badly",
        text: "Interrogators have long claimed, with varying (1)___ of scientific justification, to be able to detect deception through careful observation of a suspect's body language — averted eyes, fidgeting hands, an oddly hesitant manner of speaking. Decades of careful psychological research have since revealed that most (2)___ of these popular, widely believed cues are, in fact, essentially useless as reliable indicators of actual deception. Nervous, entirely innocent people display precisely (3)___ same behaviours as genuinely guilty, deceptive ones, simply because being formally questioned by police is, for almost anyone regardless of guilt, a fundamentally stressful and unsettling experience. What research has instead found to be somewhat more reliably diagnostic, though still far from perfectly reliable in practice, is the specific linguistic content and internal structure of what a suspect actually says, rather (4)___ how nervously or fluently they happen to say it. Liars, on average, tend to provide accounts that are subtly less detailed and coherent, that contain fewer genuinely unnecessary tangential details, and that are considerably more rehearsed and internally consistent on careful repeated retelling than the accounts of people who are honestly, if imperfectly, describing something that actually, genuinely happened to them. Truthful accounts, somewhat counter-intuitively perhaps, often contain small factual inconsistencies between different retellings, precisely (5)___ genuine, imperfect human memory itself is naturally reconstructive and doesn't perfectly replicate itself identically each time. None of this constitutes anything remotely close to a foolproof lie-detection method, and serious researchers in the field are (6)___ first to insist that no reliable, universally applicable technique for definitively detecting deception through purely behavioural or linguistic means currently exists or is even remotely on the visible horizon. But the research does at least suggest that our popular cultural intuitions about lying — the shifty, averted eyes, the visibly fidgeting hands — are (7)___ than useless; they may actively, systematically mislead investigators towards wrongly suspecting entirely innocent, merely nervous people while simultaneously letting genuinely skilled, practised liars pass through official scrutiny (8)___ noticed at all.",
        q: [
          fb("(1)", ["degrees"], "'varying degrees of scientific justification'."),
          fb("(2)", ["of"], "'most of these popular… cues'."),
          fb("(3)", ["the"], "'display precisely the same behaviours'."),
          fb("(4)", ["than"], "'rather than how nervously'."),
          fb("(5)", ["because"], "'precisely because genuine… memory'."),
          fb("(6)", ["the"], "'researchers… are the first to insist'."),
          fb("(7)", ["worse", "less"], "'are worse than useless'."),
          fb("(8)", ["un"], "'pass through… unnoticed at all'."),
        ],
      },
      p3: {
        title: "The confession that wasn't true",
        text: "Perhaps the single most (1)___ finding in the entire field of criminal justice psychology, one that continues to unsettle even experienced legal professionals, is simply how (2)___ innocent people can be persuaded, under sufficiently sustained pressure, to falsely confess to serious crimes they genuinely did not commit. Popular culture has long promoted a comforting but deeply (3)___ assumption: that nobody in their right mind would ever confess to something as serious as murder or assault unless they had actually done it. Careful psychological research, alongside a steadily growing catalogue of DNA-based exonerations, has thoroughly (4)___ this comforting assumption. Prolonged, sufficiently coercive interrogation, especially when deliberately combined with genuine sleep deprivation, the presentation of fabricated evidence, and the explicit, repeated promise of a much more lenient outcome in (5)___ for cooperation, can lead even psychologically robust, entirely innocent individuals to eventually say almost anything simply to bring the immediate, overwhelming ordeal to an end. Some vulnerable populations — adolescents, whose brains are still (6)___ fully developed, and people with genuine intellectual disabilities — are especially, measurably susceptible to this particular kind of pressure. Reform advocates, several of whom are themselves exonerated former defendants, argue persuasively that recording entire interrogations from start to finish, imposing strict legal limits on interrogation length, and providing (7)___ legal representation from the very outset would substantially reduce the ongoing, persistent risk of false confessions. Whatever specific reforms are ultimately adopted in different jurisdictions, the underlying, uncomfortable lesson seems genuinely unavoidable: human psychology under sufficiently sustained pressure is considerably more (8)___ than our comforting cultural myths about confession have generally, and rather naively, assumed it to be.",
        items: [
          { root: "disturb", accepted: ["disturbing"], hint: "'the single most disturbing finding' → disturbing." },
          { root: "easy", accepted: ["easily"], hint: "'how easily innocent people can be persuaded' → easily." },
          { root: "mistake", accepted: ["mistaken"], hint: "'a comforting but deeply mistaken assumption' → mistaken." },
          { root: "mine", accepted: ["undermined"], hint: "'thoroughly undermined this… assumption' → undermined." },
          { root: "exchange", accepted: ["exchange"], hint: "'in exchange for cooperation' (sustantivo)." },
          { root: "full", accepted: ["fully"], hint: "'brains… still not fully developed' → fully." },
          { root: "immediate", accepted: ["immediate"], hint: "'providing immediate legal representation' (adjetivo)." },
          { root: "malleable", accepted: ["malleable"], hint: "'considerably more malleable' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — estilo indirecto sofisticado",
        items: [
          { s1: "'I didn't take the money,' he said.", key: "DENIED", s2: "He ___ the money.", accepted: ["denied taking"], explanation: "deny + -ing." },
          { s1: "'You're lying to the police,' she said to him.", key: "ACCUSED", s2: "She ___ lying to the police.", accepted: ["accused him of"], explanation: "accuse sb of + -ing." },
          { s1: "'I want to speak to my lawyer,' he said.", key: "INSISTED", s2: "He ___ his lawyer.", accepted: ["insisted on speaking to"], explanation: "insist on + -ing." },
          { s1: "'Don't say anything without a lawyer,' the officer said.", key: "WARNED", s2: "The officer ___ anything without a lawyer.", accepted: ["warned him not to say"], explanation: "warn sb not to + inf." },
          { s1: "'Did you see the suspect leave?' the detective asked.", key: "ASKED", s2: "The detective ___ the suspect leave.", accepted: ["asked if/whether she had seen"], explanation: "pregunta reportada con if/whether." },
          { s1: "'I was involved,' he later admitted.", key: "ADMITTED", s2: "He later ___ involved.", accepted: ["admitted being", "admitted he had been"], explanation: "admit + -ing / that." },
        ],
      },
      p5: {
        title: "The interrogation that convicted the innocent",
        text: "When a teenage boy was brought in for questioning about a serious crime that had shocked his small community, investigators were, by their own later account, already fairly confident of his guilt before the interrogation had even properly begun. What followed, over the course of nearly fourteen hours, was later described by outside experts, once the full recording was eventually reviewed, as a textbook demonstration of precisely how not to conduct a fair and reliable criminal interrogation.\n\nThe detectives repeatedly told the boy, falsely, that his fingerprints had been found at the scene, that a witness had already positively identified him, and that his own best friend had already implicated him directly. None of this was actually true; all of it was a deliberate, legally permissible interrogation tactic, since most jurisdictions allow police considerable latitude to lie to suspects about the existence of evidence during questioning. Confused, utterly exhausted, and increasingly convinced by the sheer, relentless weight of accusation that he must somehow have done something terrible he simply couldn't consciously remember doing, he eventually began to construct a confession, piece by fragmentary piece, largely by incorporating details that the detectives themselves had inadvertently or deliberately fed him throughout the lengthy interrogation.\n\nThe eventual confession, when finally typed up and formally signed, appeared genuinely damning: detailed, specific, and containing information that, on its surface, only the actual perpetrator could plausibly have known. What the jury at his subsequent trial was never properly shown, because at that time full recordings of interrogations were not yet legally required, was the actual, gradual process by which those seemingly telling details had originally entered the confession — fed to him gradually, almost imperceptibly, by his own increasingly frustrated and suggestive interrogators over many exhausting hours.\n\nHe spent over a decade in prison before newly available DNA evidence definitively proved that someone else entirely had committed the crime. His case, once it became more widely and publicly known, prompted a serious, sustained wave of research specifically into what psychologists have since termed 'contaminated confessions' — false confessions that appear genuinely persuasive and legally credible precisely because they contain specific, seemingly insider details that were, in fact, unknowingly supplied by investigators themselves during the interrogation process, rather than genuinely and independently recalled by the actual, guilty perpetrator.\n\nHis case has since become a central, frequently cited exhibit in the case for mandatory full interrogation recording, precisely because it demonstrates so clearly and vividly what a written transcript alone, however detailed, simply cannot adequately reveal: the specific, granular process by which a false confession is actually, gradually constructed, detail by suggestive detail, rather than the polished, seemingly damning final product that a jury eventually sees and is asked to judge. Reformers, several of whom cite his case explicitly and by name in their advocacy, argue that full video recording of complete interrogations should be an absolute, non-negotiable legal minimum in any case involving a serious criminal charge, precisely so that juries can meaningfully judge not merely what a suspect eventually said, but the actual, full process by which they came to say it.",
        q: [
          mc("What did investigators tell the boy during his interrogation?", ["The truth throughout.", "False claims about fingerprints, a witness, and his friend implicating him.", "Nothing at all.", "That he was free to go."], 1, "'The detectives repeatedly told the boy, falsely, that his fingerprints had been found at the scene'."),
          mc("Was lying to suspects about evidence legal?", ["No, illegal.", "Yes, most jurisdictions allow it.", "Only sometimes.", "It's unclear."], 1, "'most jurisdictions allow police considerable latitude to lie to suspects about the existence of evidence'."),
          mc("How did the confession's incriminating details actually originate?", ["From his own genuine memory.", "Fed to him gradually by the interrogators themselves.", "From a witness.", "From forensic evidence."], 1, "'fed to him gradually, almost imperceptibly, by his own increasingly frustrated and suggestive interrogators'."),
          mc("What did DNA evidence eventually prove?", ["He was guilty.", "Someone else entirely had committed the crime.", "Nothing conclusive.", "The confession was accurate."], 1, "'newly available DNA evidence definitively proved that someone else entirely had committed the crime'."),
          mc("What is a 'contaminated confession'?", ["A confession under torture.", "A false confession containing details unknowingly supplied by investigators.", "A confession later retracted.", "A confession by an accomplice."], 1, "'false confessions that appear genuinely persuasive… because they contain specific… details that were, in fact, unknowingly supplied by investigators'."),
          mc("What do reformers argue his case demonstrates the need for?", ["Harsher sentences.", "Mandatory full video recording of interrogations.", "Abolishing confessions entirely.", "More detectives."], 1, "'full video recording of complete interrogations should be an absolute, non-negotiable legal minimum'."),
        ],
      },
      p6: {
        title: "Should police be allowed to lie during interrogations?",
        intro: "Cuatro personas debaten si la policía debería poder mentir durante los interrogatorios.",
        texts: {
          A: "NADIA: I find this practice genuinely indefensible once you actually understand its documented effects. We now have overwhelming evidence that presenting fabricated evidence to suspects substantially increases the risk of false confessions, particularly among vulnerable people. A justice system built partly on state-sanctioned deception during interrogation strikes me as a real and troubling contradiction that should worry everyone.",
          B: "TOM: I take the concern seriously, but I'd point out that some deceptive tactics are genuinely useful for catching guilty people who would otherwise simply stay silent and never be caught at all. Banning deception entirely, without exception, might mean letting more actual criminals ultimately go free. I'd favour real limits and safeguards on the practice, not a blanket, total ban.",
          C: "PRIYA: What strikes me most is the sheer inconsistency here. We rightly consider it deeply unethical for a doctor or a therapist to lie to a patient in order to manipulate their behaviour, yet we somehow accept it as entirely routine practice for police officers questioning suspects. I struggle to see a genuinely principled distinction between those two clearly comparable cases.",
          D: "SAM: My honest view is that the specific type of deception used matters enormously here. Lying about physical evidence existing seems genuinely different in kind from, say, simply not revealing your full strategic hand during questioning. We probably need much more careful, nuanced rules about exactly which forms of deception are acceptable, rather than either a simplistic blanket ban or unlimited, unrestricted permission.",
        },
        q: [
          mc("Who finds the practice of deceptive interrogation 'genuinely indefensible'?", ["A", "B", "C", "D"], 0, "Nadia: 'I find this practice genuinely indefensible'."),
          mc("Whose view most directly QUALIFIES Nadia's, defending some deceptive tactics as useful?", ["A", "B", "C", "D"], 1, "Tom: 'some deceptive tactics are genuinely useful for catching guilty people'."),
          mc("Who compares police deception to a doctor lying to a patient?", ["A", "B", "C", "D"], 2, "Priya: 'unethical for a doctor or a therapist to lie to a patient'."),
          mc("Who argues the type of deception matters and calls for nuanced rules?", ["A", "B", "C", "D"], 3, "Sam: 'the specific type of deception used matters enormously… much more careful, nuanced rules'."),
        ],
      },
      p7: {
        title: "Why we trust confessions too much",
        text: "Of all forms of criminal evidence, a defendant's own confession has traditionally carried a uniquely powerful weight in the eyes of juries, judges and the wider public alike. (1)___\n\nThis makes intuitive sense at first glance. (2)___ Why, after all, would anyone freely admit to a serious crime they hadn't actually committed?\n\nAs psychological research into false confessions has steadily accumulated, however, this intuitive assumption has come under sustained and serious challenge. (3)___ Sufficiently prolonged pressure, sufficiently sophisticated deception and sufficient psychological vulnerability can, together, produce confessions from people who are, in fact, entirely innocent.\n\nWhat makes this particular problem so genuinely difficult to address is the sheer persuasive power that a confession, once obtained, subsequently exerts over everyone else involved in a case. (4)___ Investigators, having secured what they reasonably believe is a genuine confession, understandably tend to stop actively pursuing alternative suspects or theories.\n\nJuries, for their part, find confession evidence almost impossible to look past or discount, however compelling any subsequent contradicting evidence happens to be. (5)___ 'Why would they confess if they hadn't done it?' remains a remarkably persuasive, if ultimately mistaken, question in most jurors' minds.\n\nBreaking this powerful, self-reinforcing cycle requires more than simply better interrogation techniques going forward. (6)___ It requires a fundamental cultural shift in how confessions themselves are understood, tested and weighed by everyone within the wider justice system.",
        options: [
          "A confession, it is widely assumed, all but settles a case.",       // A -> gap 1
          "Confessing to something you didn't do seems deeply irrational.",   // B -> gap 2
          "The evidence now tells a considerably more troubling story.",      // C -> gap 3
          "A confession, once given, quietly reshapes everything around it.", // D -> gap 4
          "That intuitive question is more misleading than it first appears.", // E -> gap 5
          "It requires rethinking what a confession is even taken to prove.", // F -> gap 6
          "Confessions have never once been treated as important evidence.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la confesión prácticamente resuelve el caso."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: confesar sin haberlo hecho parece irracional."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la evidencia cuenta una historia inquietante."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: una confesión reconfigura todo a su alrededor."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esa pregunta intuitiva engaña."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: replantear qué demuestra realmente una confesión."),
        ],
      },
      p8: {
        title: "Four people discuss confessions and interrogation",
        text: "Read what four people say about confessions and how they should be handled.\n\nA) NADIA: I was interrogated once, entirely innocently, over a minor misunderstanding, and even I, a confident adult with nothing genuinely to hide, found the whole experience deeply disorienting and unsettling. I can only imagine how it must feel for someone genuinely vulnerable, or someone actually guilty and afraid. It gave me real, lasting sympathy for how easily things can go badly wrong.\n\nB) TOM: I trained as a detective for years, and I'll admit that I used to trust confessions almost completely, without much serious question. Learning properly about false confession research genuinely changed how I approach every single case now. I insist on corroborating evidence beyond the confession itself these days, always, no matter how convincing or detailed that confession initially seems.\n\nC) PRIYA: My brother falsely confessed under real pressure once, to something relatively minor, and it taught our whole family a hard, lasting lesson about never, ever speaking to police without a lawyer present, regardless of how innocent you genuinely believe yourself to be. It sounds excessive to people who haven't lived through it, I know, but I'd urge absolutely everyone to remember that basic advice.\n\nD) SAM: I work in wrongful conviction advocacy now, and false confessions are honestly one of the single most common threads running through the cases we investigate. People assume, quite wrongly, that only weak-willed or somehow unusual people falsely confess. The genuine truth is that, under the right combination of pressure and circumstance, it could genuinely happen to almost anyone at all.\n",
        q: [
          mc("Who was interrogated innocently and found it deeply disorienting?", ["A", "B", "C", "D"], 0, "Nadia: 'I was interrogated once, entirely innocently… found the whole experience deeply disorienting'."),
          mc("Who trained as a detective and now insists on corroborating evidence?", ["A", "B", "C", "D"], 1, "Tom: 'I trained as a detective… I insist on corroborating evidence beyond the confession itself'."),
          mc("Whose brother falsely confessed under pressure?", ["A", "B", "C", "D"], 2, "Priya: 'My brother falsely confessed under real pressure once'."),
          mc("Who works in wrongful conviction advocacy?", ["A", "B", "C", "D"], 3, "Sam: 'I work in wrongful conviction advocacy now'."),
          mc("Who used to trust confessions almost completely before learning otherwise?", ["A", "B", "C", "D"], 1, "Tom: 'I used to trust confessions almost completely… Learning properly about false confession research genuinely changed'."),
          mc("Who urges everyone never to speak to police without a lawyer?", ["A", "B", "C", "D"], 2, "Priya: 'never, ever speaking to police without a lawyer present'."),
          mc("Who says false confessions could happen to 'almost anyone'?", ["A", "B", "C", "D"], 3, "Sam: 'it could genuinely happen to almost anyone at all'."),
          mc("Who gained sympathy for how easily things can go wrong for vulnerable people?", ["A", "B", "C", "D"], 0, "Nadia: 'real, lasting sympathy for how easily things can go badly wrong'."),
          mc("Whose family learned a hard lesson from a relative's experience?", ["A", "B", "C", "D"], 2, "Priya: 'it taught our whole family a hard, lasting lesson'."),
          mc("Who says false confessions are one of the most common threads in wrongful convictions?", ["A", "B", "C", "D"], 3, "Sam: 'false confessions are honestly one of the single most common threads'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre los interrogatorios policiales se plantearon dos ideas:\n· police should be allowed to use deception during interrogations (la policía debería poder usar el engaño)\n· deceptive interrogation tactics should be banned (las tácticas engañosas deberían prohibirse)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS verbos introductores precisos (admit, deny, insist, claim, accuse…) en estilo indirecto. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· CARTA/EMAIL a una organización de derechos legales proponiendo una reforma concreta de los interrogatorios policiales: justifica tu propuesta.\n· ARTÍCULO: 'What I learned about how memory and pressure can distort the truth' — reflexiona con ejemplos.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un psicólogo forense, el doctor Reyes, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a forensic psychologist called Doctor Reyes giving a talk. Doctor Reyes: Let me begin with a claim that surprises most people: innocent suspects often talk more freely than guilty ones, not less. They insist on explaining everything, confident their innocence will simply become obvious. It rarely works out that way. My second point concerns deception. Police in many jurisdictions are legally permitted to lie about evidence during questioning — claiming fingerprints exist when they don't, for instance. This tactic, while legal, measurably increases the risk of false confessions. Third, I want to address vulnerability. Adolescents and people with intellectual disabilities are especially susceptible to pressure, precisely because they're more likely to comply with authority figures, even when doing so isn't actually in their own interest. My fourth point is about recording. Where full interrogations are recorded from start to finish, wrongful convictions based on coerced confessions drop noticeably. A transcript alone simply cannot capture the same thing; you need to see the entire process unfold. And finally, my main message to anyone listening: if you're ever questioned by police, insist on legal representation before saying anything substantive at all. That single decision protects you more than any amount of eloquence or confidence in your own innocence ever could.", [
      fb("Innocent suspects often talk more freely than ___ ones.", ["guilty"], "'more freely than guilty ones'."),
      fb("They insist on explaining everything, confident their innocence will become ___.", ["obvious"], "'confident their innocence will… become obvious'."),
      fb("Police are legally permitted to lie about ___ during questioning.", ["evidence"], "'lie about evidence during questioning'."),
      fb("This tactic measurably increases the risk of false ___.", ["confessions"], "'increases the risk of false confessions'."),
      fb("Adolescents are more likely to comply with ___ figures.", ["authority"], "'more likely to comply with authority figures'."),
      fb("Where interrogations are recorded, wrongful convictions drop ___.", ["noticeably"], "'drop noticeably'."),
      fb("A transcript alone cannot capture the entire ___.", ["process"], "'cannot capture the entire process'."),
      fb("He advises insisting on legal ___ before saying anything.", ["representation"], "'insist on legal representation'."),
    ]),

    ...speakingParts({ p1: "qué opinas de los interrogatorios policiales y si conocías el fenómeno de las confesiones falsas", p2: "dos imágenes de un interrogatorio (un sospechoso claramente nervioso siendo cuestionado y un abogado revisando documentos legales): compáralas y especula sobre la situación", p3: "cómo debería mejorarse el proceso de interrogatorio (grabar todo, limitar la duración, prohibir el engaño, exigir presencia de abogado, formar mejor a los agentes): comentadlo y elegid lo más eficaz", p4: "los interrogatorios y las confesiones: si la policía debería poder engañar a los sospechosos, por qué la gente inocente a veces confiesa falsamente y cómo protegerse mejor durante un interrogatorio" }),

    SUMMARY("Resumen del Día 17", [
      "Verbos introductores precisos: admit/deny + -ing; insist on + -ing / insist that; claim/allege + to + inf. / that; accuse sb of + -ing; warn sb (not) to; promise/threaten + to.",
      "Preguntas reportadas: if/whether (sí/no) o wh- (específicas), sin inversión. Modales/condicionales: will→would, can→could; 2º/3º condicional NO cambian.",
      "Vocabulario de interrogatorios. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 18", "Escribe 6 frases usando verbos introductores precisos (deny, insist, accuse, claim…) en estilo indirecto. Repasa las flashcards. Mañana: los gerundios e infinitivos avanzados."),
  ],
};

// ───────────────────────── DÍA 18 ─────────────────────────
const DAY18 = {
  title: "Día 18 — Gerundios e infinitivos avanzados · La migración y la identidad cultural",
  description: "Verbos con cambio de significado gerundio/infinitivo (remember, forget, regret, try, stop, mean, go on); perfect/passive gerunds e infinitivos; estructuras con preposición + gerundio. Vocabulario de migración. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Dominar los matices de significado entre gerundio e infinitivo en los verbos más sensibles del C1.",
    summary: "Gerundios/infinitivos avanzados; migración e identidad cultural; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["confundir remember/forget + -ing (memoria del pasado) con + to (recordar hacer algo, futuro).", "regret + -ing (lamentar lo hecho) vs regret to inform (fórmula formal).", "olvidar el gerundio perfecto/pasivo (having done, being done)."],
    reviewPrompts: ["¿Qué diferencia hay entre 'I remember locking the door' y 'I remembered to lock the door'?", "¿Cuándo usas 'regret to inform you'?"],
  },
  items: [
    TEXT("🔁 Ayer, el estilo indirecto. Hoy los GERUNDIOS E INFINITIVOS AVANZADOS: los verbos que cambian de significado según la forma que sigue. Vocabulario: la MIGRACIÓN y la IDENTIDAD CULTURAL."),
    GRAMMAR("Gerundios e infinitivos avanzados", `VERBOS CON CAMBIO DE SIGNIFICADO SEGÚN GERUNDIO/INFINITIVO:
· REMEMBER/FORGET + -ING (memoria de algo YA hecho) vs + TO (recordar/olvidar hacer algo, ANTES de hacerlo): I remember crossing the border as a child (recuerdo haberlo hecho). Don't forget to renew your visa (no olvides hacerlo).
· REGRET + -ING (lamentar algo ya hecho) vs REGRET TO + inf. (fórmula formal para dar malas noticias): I regret leaving my country so young. We regret to inform you that your application was rejected.
· TRY + -ING (experimentar, probar algo como solución) vs TRY TO (esforzarse por conseguir algo difícil): Try calling the embassy (pruébalo). We're trying to integrate into a new culture (esforzándonos).
· STOP + -ING (dejar de hacer algo) vs STOP TO (parar CON EL FIN DE hacer otra cosa): She stopped speaking her native language at home (dejó de). He stopped to ask for directions (paró para).
· MEAN + -ING (implicar, tener como consecuencia) vs MEAN TO (tener la intención de): Moving abroad meant leaving everything behind (implicaba). I didn't mean to offend you (no fue mi intención).
· GO ON + -ING (continuar lo mismo) vs GO ON TO (pasar a hacer algo NUEVO/siguiente): She went on speaking about her journey (siguió). He went on to become a successful entrepreneur (después llegó a ser).
GERUNDIO/INFINITIVO PERFECTO Y PASIVO (para matizar tiempo/voz):
· Perfecto: I regret not having applied earlier. She claims to have lived in five countries.
· Pasivo: Being treated fairly matters enormously to new arrivals. He deserves to be given a fair chance.
⚠️ Estos verbos son especialmente sensibles en el examen: el matiz de significado cambia completamente según la forma elegida.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ I remember to visit that country years ago → ✅ I remember VISITING (memoria de algo pasado).\n· ❌ We regret informing you → para la fórmula formal es ✅ We regret TO INFORM you.\n· ❌ He stopped to smoke (years ago, dejó el hábito) → ✅ He stopped SMOKING (dejar el hábito); 'stopped to smoke' = paró para fumar.\n· Gerundio/infinitivo perfecto para matizar ANTERIORIDAD: claims to have lived (antes), no simplemente 'to live'."),
    grammarEx("Use of English — Gerundios e infinitivos avanzados", "Elige la forma con el matiz correcto.", [
      mc("I remember ___ the border as a child — it's a vivid memory.", ["crossing", "to cross", "cross"], 0, "memoria de algo pasado → -ing."),
      mc("Don't forget ___ your visa before it expires.", ["renewing", "to renew", "renew"], 1, "recordar hacer algo (antes) → to + inf."),
      mc("We regret ___ you that your visa application has been denied. (fórmula formal)", ["informing", "to inform", "inform"], 1, "regret to inform (formal)."),
      mc("She stopped ___ her native language once she moved abroad.", ["to speak", "speaking", "speak"], 1, "dejar de hacer algo → -ing."),
      mc("He stopped ___ directions to the immigration office.", ["asking", "to ask", "ask"], 1, "parar para hacer otra cosa → to + inf."),
      fb("Moving to a new country ___ (mean / leave) everything familiar behind. (implicar)", ["meant leaving"], "mean + -ing (implicar)."),
      fb("She claims ___ (have / live) in six different countries. (gerundio/infinitivo perfecto)", ["to have lived"], "claim to have + participio."),
    ]),
    GRAMMAR("Vocabulario del día — La migración y la identidad cultural (C1)", "Léxico avanzado de migración."),
    deck("C1 S4D18 — Migración e identidad cultural", [
      ["assimilate", "asimilarse (a una cultura)", "It took years to assimilate fully.", "verbo", "əˈsɪmɪleɪt"],
      ["diaspora", "diáspora", "The diaspora maintains close ties home.", "sustantivo", "daɪˈæspərə"],
      ["displacement", "desplazamiento (forzado)", "War caused mass displacement.", "sustantivo", "dɪsˈpleɪsmənt"],
      ["uproot", "desarraigar", "The war uprooted millions of families.", "verbo", "ʌpˈruːt"],
      ["multicultural", "multicultural", "It's a vibrant, multicultural city.", "adjetivo", "ˌmʌltiˈkʌltʃərəl"],
      ["heritage", "herencia (cultural)", "She's proud of her cultural heritage.", "sustantivo", "ˈherɪtɪdʒ"],
      ["belonging", "pertenencia / sentido de pertenecer", "A sense of belonging matters deeply.", "sustantivo", "bɪˈlɒŋɪŋ"],
      ["integration", "integración", "Integration takes time and effort.", "sustantivo", "ˌɪntɪˈɡreɪʃn"],
      ["xenophobia", "xenofobia", "The rise of xenophobia is alarming.", "sustantivo", "ˌzenəˈfəʊbiə"],
      ["hybrid identity", "identidad híbrida", "Many migrants develop a hybrid identity.", "expresión", "ˈhaɪbrɪd aɪˈdentəti"],
    ]),
    vocabEx("Vocabulario — La migración y la identidad cultural", "Elige la opción correcta.", [
      mc("To gradually adopt the customs of a new culture is to ___.", ["assimilate", "displace", "uproot"], 0, "assimilate."),
      mc("A community of people living away from their original homeland is a ___.", ["diaspora", "heritage", "integration"], 0, "diaspora."),
      mc("Forced removal from one's home due to conflict or disaster is ___.", ["displacement", "belonging", "heritage"], 0, "displacement."),
      mc("Involving several different cultures is being ___.", ["multicultural", "xenophobic", "uprooted"], 0, "multicultural."),
      mc("Fear or dislike of people from other countries is ___.", ["xenophobia", "heritage", "belonging"], 0, "xenophobia."),
      mc("The feeling of being accepted as part of a group is ___.", ["belonging", "displacement", "heritage"], 0, "belonging."),
    ]),

    ...uoe({
      p1: {
        title: "Home is where the heart divides",
        text: "For anyone who has ever left one country to build a new life in (1)___, the concept of 'home' rarely remains as simple or singular as it once was. Many migrants describe, often with evident emotional complexity, a genuine sense of belonging to two places (2)___, and, paradoxically, of belonging entirely to neither. The country left behind continues to exert its (3)___ pull, present in language, food, half-remembered childhood streets and family relationships that persist despite physical distance. Yet the new country, whatever initial difficulties it presented, gradually becomes home too, woven inextricably into one's daily life, friendships and, often, one's own children's entire sense of identity. This dual belonging is not, (4)___ it might initially seem, simply a temporary, transitional stage on the way to full assimilation into one single culture. For many migrants, and especially for their children, it becomes a genuinely permanent, defining feature of who they are — a (5)___ identity that draws simultaneously on two or more distinct cultural traditions, rather than a straightforward, linear progression from one fixed identity to another. This hybrid experience is increasingly (6)___, in academic literature, not as a problem to be resolved through complete assimilation but as a genuinely valuable perspective in its own (7)___ — one that grants a uniquely broad, comparative vantage point on both cultures involved, precisely because one has never belonged entirely, unreflectively, to either one alone. Whether this dual belonging feels, on balance, like a genuine gift or a persistent burden varies enormously (8)___ individual and circumstance, but its reality, for millions of people worldwide, is simply undeniable.",
        q: [
          mc("(1)", ["another", "other", "others", "the other"], 0, "'to build a new life in another'."),
          mc("(2)", ["simultaneously", "at once", "together", "jointly"], 0, "'belonging to two places simultaneously'."),
          mc("(3)", ["gravitational", "magnetic", "emotional", "powerful"], 1, "'its magnetic pull'."),
          mc("(4)", ["as", "though", "although", "while"], 0, "'not, as it might initially seem,'."),
          mc("(5)", ["hybrid", "mixed", "blended", "combined"], 0, "'a hybrid identity'."),
          mc("(6)", ["framed", "seen", "viewed", "regarded"], 0, "'increasingly framed… as'."),
          mc("(7)", ["right", "way", "regard", "sense"], 0, "'valuable perspective in its own right'."),
          mc("(8)", ["by", "with", "according to", "depending on"], 3, "'varies enormously depending on'."),
        ],
      },
      p2: {
        title: "The children who translate their parents' world",
        text: "In countless migrant households around the world, children as young (1)___ six or seven quietly take on a role that most adults would find genuinely daunting: acting as their own parents' primary interpreter and cultural guide in an unfamiliar new country. These children, sometimes referred (2)___ by researchers as 'language brokers', translate not merely words but entire bureaucratic systems — explaining tax forms, negotiating with landlords, accompanying parents to doctor's appointments and quietly interpreting medical terminology that even fluent adult speakers often find genuinely bewildering. This responsibility, though it undoubtedly builds impressive practical skills and often a fierce, unusual maturity, also places a considerable psychological burden (3)___ children who are, after all, still children, navigating their own complex educational and social lives alongside this unusual and considerable adult responsibility. Some researchers have found that language brokering, when it becomes genuinely excessive, can subtly invert normal family power dynamics, forcing children into a position of authority over their own parents (4)___ leaves both generations feeling, at times, quietly uncomfortable and displaced. Others, however, point to real evidence that many former child language brokers, looking back as adults with the considerable benefit of hindsight, actually report feeling that the experience built genuine confidence, valuable practical competence, and an unusually deep, nuanced understanding (5)___ both cultures they were constantly, simultaneously navigating. What seems clear, whichever emphasis one prefers, is that these children carry a burden rarely (6)___ by the wider society around them, quietly bridging two entire worlds every single day, often without any specific training, formal recognition, or even much conscious awareness from the adults around them (7)___ what, precisely, is genuinely being asked of them. Their remarkable, largely invisible labour deserves (8)___ recognised considerably more widely than it currently, and rather unfairly, is.",
        q: [
          fb("(1)", ["as"], "'as young as six or seven'."),
          fb("(2)", ["to"], "'sometimes referred to… as'."),
          fb("(3)", ["on", "upon"], "'a considerable… burden on children'."),
          fb("(4)", ["that", "which"], "'over their own parents that leaves both'."),
          fb("(5)", ["of"], "'a nuanced understanding of both cultures'."),
          fb("(6)", ["recognised", "seen", "acknowledged"], "'rarely recognised by the wider society'."),
          fb("(7)", ["of"], "'much conscious awareness… of what… is being asked'."),
          fb("(8)", ["to be"], "'deserves to be recognised'."),
        ],
      },
      p3: {
        title: "The myth of the model migrant",
        text: "Public debate about migration is frequently dominated by a particular, rather narrow narrative: the story of the 'model migrant', who arrives with (1)___ resources or credentials, works with almost superhuman determination against considerable odds, and eventually achieves conventional, publicly celebrated success against the odds. This narrative, while genuinely inspiring in individual instances, carries a subtle but genuinely (2)___ implication that troubles many migration researchers and advocates alike. By implicitly celebrating only the most exceptional, most obviously (3)___ migrant success stories, it can leave the impression, however unintentionally, that migrants who struggle, who don't achieve spectacular conventional success, or who simply live quiet, unremarkable, ordinary lives somehow deserve their difficulties considerably more, or belong considerably less, than their more visibly celebrated, exceptional counterparts. The overwhelming majority of migrants, it is worth clearly remembering, do not become celebrated entrepreneurs, prize-winning scientists or star athletes; they work (4)___ jobs, raise their families as best they reasonably can, and contribute quietly, steadily and unremarkably to the societies they have chosen or been forced to join, exactly as most people, migrant or not, generally do throughout their lives. Demanding (5)___ exceptional achievement as the genuine price of belonging and acceptance sets a standard that native-born citizens are, quite tellingly, essentially never asked (6)___ meet in return. A more genuinely honest, more (7)___ way of discussing migration would make more room for precisely this kind of quiet, unremarkable ordinariness — for migrants who are simply, straightforwardly people, deserving of basic dignity and full acceptance (8)___ their achievements happen to be spectacular, modest, or entirely unremarkable by any conventional external measure.",
        items: [
          { root: "little", accepted: ["little"], hint: "'arrives with little resources' (adjetivo, algo inusual pero válido con 'little')." },
          { root: "trouble", accepted: ["troubling"], hint: "'a subtle but genuinely troubling implication' → troubling." },
          { root: "exception", accepted: ["exceptional"], hint: "'the most obviously exceptional' → exceptional." },
          { root: "ordinary", accepted: ["ordinary"], hint: "'work ordinary jobs' (adjetivo)." },
          { root: "extraordinary", accepted: ["extraordinary"], hint: "'demanding extraordinary achievement' (adjetivo)." },
          { root: "to", accepted: ["to"], hint: "'essentially never asked to meet' (preposición/partícula)." },
          { root: "honest", accepted: ["honestly"], hint: "'more honestly compassionate' — usa 'compassionate' como raíz alternativa si procede; aquí: 'more genuinely… humane' → 'humane'." },
          { root: "regard", accepted: ["regardless"], hint: "'regardless of whether their achievements' → regardless." },
        ],
      },
      p4: {
        title: "Transformaciones — gerundios e infinitivos avanzados",
        items: [
          { s1: "I have a vivid memory of crossing the border as a child.", key: "REMEMBER", s2: "I ___ the border as a child.", accepted: ["remember crossing"], explanation: "remember + -ing (memoria pasada)." },
          { s1: "Please don't forget to renew your visa before it expires.", key: "FORGET", s2: "Don't ___ your visa before it expires.", accepted: ["forget to renew"], explanation: "forget + to (recordar hacer, antes)." },
          { s1: "We're sorry to tell you that your application was rejected.", key: "REGRET", s2: "We ___ you that your application was rejected.", accepted: ["regret to inform"], explanation: "regret to inform (fórmula formal)." },
          { s1: "She no longer speaks her native language at home.", key: "STOPPED", s2: "She ___ her native language at home.", accepted: ["stopped speaking"], explanation: "stop + -ing (dejar de)." },
          { s1: "Moving abroad implied leaving her whole family behind.", key: "MEANT", s2: "Moving abroad ___ her whole family behind.", accepted: ["meant leaving"], explanation: "mean + -ing (implicar)." },
          { s1: "He says he lived in five different countries.", key: "CLAIMS", s2: "He ___ in five different countries.", accepted: ["claims to have lived"], explanation: "claim to have + participio (infinitivo perfecto)." },
        ],
      },
      p5: {
        title: "The suitcase that never got unpacked",
        text: "For nearly three decades after arriving in her new country as a young refugee, a woman kept a single small suitcase packed and ready by her bedroom door, containing a carefully curated selection of important documents, a few treasured family photographs, and a handful of small, sentimentally significant personal items. She could never quite explain, even to herself, precisely why she felt compelled to maintain this peculiar habit long after any genuine practical necessity for it had clearly passed; she simply couldn't bring herself to stop.\n\nHer own children, born and raised entirely in the new country, initially found the habit puzzling, occasionally even mildly embarrassing when friends visited and noticed the incongruous packed suitcase sitting by an interior bedroom door in an otherwise entirely ordinary, comfortably settled family home. It took them many years, well into their own adulthood, to begin to properly understand what that suitcase genuinely represented: not mere disorganisation or forgetfulness, but a deep, persistent, entirely rational psychological readiness for sudden departure that had been carved into their mother by the specific circumstances of her own original, traumatic flight from her home country decades earlier.\n\nShe had left her original homeland with almost no warning whatsoever, in the middle of the night, carrying only what she could physically manage in her own two hands, uncertain whether she would ever see her extended family, her home, or indeed her home country again. That specific, formative experience, she eventually admitted to her now-adult children after many years of gentle, patient questioning, had left her with a persistent, nagging fear that safety and stability, however genuinely secure and comfortable they currently appeared, could always, in principle, be suddenly and unexpectedly taken away again without warning.\n\nThe packed suitcase, she came to explain more openly as she grew older, was never really primarily about genuine practical readiness for an actual emergency. It was about psychological readiness — a way of preserving, unconsciously, some residual sense of control and agency in a life that had once, without any warning whatsoever, been violently and completely upended by forces entirely beyond her control. Keeping the suitcase packed and ready allowed her to feel, at some deep and largely unconscious level, that she would never again be caught quite as completely, quite as helplessly unprepared as she had been on that single, terrifying, formative night so many years before.\n\nHer story, once she began to share it more openly and honestly within her own extended family and community, resonated powerfully and immediately with other refugees and displaced people, many of whom recognised remarkably similar habits and quiet coping mechanisms in their own lives — a particular chair always kept deliberately near the front door, a small emergency stash of cash kept permanently hidden somewhere in the house, important documents habitually kept always close at hand rather than filed safely away. These small, often unconsciously maintained rituals, seemingly eccentric or even mildly irrational to outside observers unfamiliar with their origin, represented something considerably deeper and more meaningful: the lasting, persistent psychological legacy of sudden, forced displacement, quietly carried and unconsciously enacted long after the original physical danger itself had genuinely, definitively passed.",
        q: [
          mc("What habit did the woman maintain for nearly thirty years?", ["Nothing unusual.", "Keeping a small packed suitcase ready by her bedroom door.", "Writing letters home.", "Cooking traditional food only."], 1, "'kept a single small suitcase packed and ready by her bedroom door'."),
          mc("How did her children initially react to the habit?", ["They understood immediately.", "They found it puzzling, occasionally embarrassing.", "They copied it.", "They ignored it."], 1, "'initially found the habit puzzling, occasionally even mildly embarrassing'."),
          mc("How had she originally left her home country?", ["Calmly, with plenty of warning.", "With almost no warning, in the middle of the night.", "By plane, planned in advance.", "She never left."], 1, "'She had left her original homeland with almost no warning whatsoever, in the middle of the night'."),
          mc("What did the packed suitcase really represent, according to her?", ["Practical emergency readiness.", "Psychological readiness and a sense of control after being violently upended.", "Forgetfulness.", "A cultural tradition."], 1, "'a way of preserving… some residual sense of control and agency'."),
          mc("How did other refugees respond when she shared her story?", ["With confusion.", "Many recognised similar habits and coping mechanisms in their own lives.", "With disbelief.", "With indifference."], 1, "'resonated powerfully… many of whom recognised remarkably similar habits'."),
          mc("What do these small rituals represent, according to the writer?", ["Irrational eccentricity.", "The lasting psychological legacy of sudden, forced displacement.", "Cultural tradition only.", "Nothing significant."], 1, "'the lasting, persistent psychological legacy of sudden, forced displacement'."),
        ],
      },
      p6: {
        title: "Should countries do more to preserve migrants' original culture?",
        intro: "Cuatro personas debaten si los países de acogida deberían hacer más por preservar la cultura de origen de los migrantes.",
        texts: {
          A: "NADIA: I'd argue strongly that host countries have a genuine responsibility to actively support migrants in maintaining their original language and culture, not merely tolerate it passively. Losing one's mother tongue, especially across generations, represents a genuine, often irreversible loss — not just personally for the family involved, but for the wider host society's own overall cultural richness and diversity too.",
          B: "TOM: I broadly agree in principle, but I'd add an important caveat that shouldn't be overlooked. Too strong an emphasis on preserving separate original cultures can sometimes, however unintentionally, work directly against meaningful social integration and cohesion. There's a genuinely difficult, real balance to strike here between honouring cultural heritage and building one genuinely shared, common society.",
          C: "PRIYA: What I keep coming back to is that this decision genuinely isn't really the host country's to make in the first place. It should be entirely up to individual migrant families themselves how much they choose to preserve or actively let go of. What the state should reliably provide is simply the option and genuine opportunity — good, accessible heritage language classes, for instance — not any particular mandated outcome either way.",
          D: "SAM: My honest experience, from my own family, is that this preservation happens organically anyway, or it simply doesn't, largely regardless of specific official policy either way. What genuinely helped my own family most wasn't formal government programmes at all, but rather a receiving community that was broadly welcoming and curious rather than actively suspicious or hostile towards our particular differences.",
        },
        q: [
          mc("Who argues host countries have a responsibility to actively support cultural preservation?", ["A", "B", "C", "D"], 0, "Nadia: 'host countries have a genuine responsibility to actively support migrants'."),
          mc("Whose view most directly QUALIFIES Nadia's, warning about integration?", ["A", "B", "C", "D"], 1, "Tom: 'Too strong an emphasis on preserving separate original cultures can… work directly against meaningful social integration'."),
          mc("Who argues the decision should be up to migrant families, not the state?", ["A", "B", "C", "D"], 2, "Priya: 'this decision genuinely isn't really the host country's to make'."),
          mc("Who credits a welcoming receiving community over formal government programmes?", ["A", "B", "C", "D"], 3, "Sam: 'what genuinely helped my own family most… a receiving community that was broadly welcoming'."),
        ],
      },
      p7: {
        title: "What we lose when a language dies within a family",
        text: "Every migrant family, sooner or later, faces a quiet but genuinely consequential decision: how much effort, precisely, to invest in passing their original language on to the next generation. (1)___\n\nThe pressures pushing against this transmission are often considerable and largely unconscious. (2)___ Children frequently, and quite understandably, absorb the powerful implicit message that the new country's dominant language is the one that genuinely matters for success.\n\nWithin just two or three generations, in many migrant families around the world, the original ancestral language can disappear almost entirely. (3)___ Grandparents and grandchildren, in some deeply poignant cases, eventually find they can no longer converse fluently or comfortably with one another at all.\n\nWhat is lost in this process, researchers increasingly argue, is considerably more than mere vocabulary and grammar. (4)___ A language carries within it entire ways of understanding relationships, humour, emotion and the world that don't always translate cleanly or completely into another tongue.\n\nSome families, recognising this real and often underappreciated cost, make deliberate, sustained efforts to maintain the heritage language despite the considerable, ongoing practical difficulty involved. (5)___ Weekend heritage schools, careful insistence on speaking it consistently at home, regular visits to the country of origin — all represent real, sustained investment against a powerful, largely unconscious tide.\n\nOthers, for entirely understandable and often quite practical reasons, let the language go, prioritising other pressing concerns instead. (6)___ Neither choice is inherently wrong, but both carry real, lasting consequences worth genuinely understanding in advance.",
        options: [
          "That decision, though it rarely feels dramatic, carries real weight.", // A -> gap 1
          "Assimilation, in practice, often happens faster than anyone plans.", // B -> gap 2
          "The loss, once it happens, is strikingly hard to later reverse.",   // C -> gap 3
          "A whole way of seeing the world can quietly go with it.",          // D -> gap 4
          "Such efforts require real, sustained commitment over many years.", // E -> gap 5
          "That choice, too, deserves to be made with real understanding.",   // F -> gap 6
          "No migrant family has ever faced this particular question.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la decisión tiene peso real."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la asimilación ocurre más rápido de lo previsto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la pérdida es difícil de revertir."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: se va con ella una forma de ver el mundo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: exige compromiso sostenido."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa elección también merece comprensión."),
        ],
      },
      p8: {
        title: "Four people discuss their family's migration story",
        text: "Read what four people say about their own family's experience of migration.\n\nA) NADIA: I grew up translating for my parents from about age seven, explaining tax forms and hospital appointments I barely understood myself. I remember feeling proud and exhausted in almost equal measure. Looking back now as an adult, I regret not having had more of an ordinary, carefree childhood, but I also genuinely credit that early experience with making me who I am today.\n\nB) TOM: My grandmother kept a small emergency bag packed by the door for decades after we arrived, and none of us understood why until she finally explained her own original, sudden flight from her home country many years later. It completely changed how I see the small, seemingly odd habits of older relatives. There's usually a real, meaningful story quietly behind them if you just ask properly.\n\nC) PRIYA: My own parents made a deliberate, conscious decision not to teach us their native language at home, believing, quite sincerely at the time, that it would somehow genuinely help us assimilate more smoothly and successfully. I regret that decision now, honestly, though I understand completely why they made it given the pressures they were under at the time. I'm trying to relearn it properly as an adult, but it's genuinely much harder now than it would have been as a child.\n\nD) SAM: What strikes me most about my own family's specific story is how ordinary it ultimately became. My parents arrived with almost literally nothing at all, and within roughly one generation, we were, to almost any outside observer, a completely unremarkable, entirely typical local family. I sometimes worry that this very ordinariness means we've somehow quietly lost something genuinely important and irreplaceable along the way.\n",
        q: [
          mc("Who translated for their parents from about age seven?", ["A", "B", "C", "D"], 0, "Nadia: 'I grew up translating for my parents from about age seven'."),
          mc("Whose grandmother kept an emergency bag packed for decades?", ["A", "B", "C", "D"], 1, "Tom: 'My grandmother kept a small emergency bag packed by the door for decades'."),
          mc("Whose parents decided not to teach them their native language?", ["A", "B", "C", "D"], 2, "Priya: 'My own parents made a deliberate… decision not to teach us their native language'."),
          mc("Who worries that their family's ordinariness means something was lost?", ["A", "B", "C", "D"], 3, "Sam: 'this very ordinariness means we've somehow quietly lost something'."),
          mc("Who regrets not having had a more carefree childhood?", ["A", "B", "C", "D"], 0, "Nadia: 'I regret not having had more of an ordinary, carefree childhood'."),
          mc("Who says it changed how they see older relatives' small habits?", ["A", "B", "C", "D"], 1, "Tom: 'completely changed how I see the small, seemingly odd habits of older relatives'."),
          mc("Who is trying to relearn their heritage language as an adult?", ["A", "B", "C", "D"], 2, "Priya: 'I'm trying to relearn it properly as an adult'."),
          mc("Whose family became unremarkable within about one generation?", ["A", "B", "C", "D"], 3, "Sam: 'within roughly one generation, we were… a completely unremarkable, entirely typical local family'."),
          mc("Who credits their early experience with shaping who they are today?", ["A", "B", "C", "D"], 0, "Nadia: 'I also genuinely credit that early experience with making me who I am today'."),
          mc("Who understands why their parents made a difficult decision, despite regretting it?", ["A", "B", "C", "D"], 2, "Priya: 'I understand completely why they made it given the pressures they were under'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la migración se plantearon dos ideas:\n· migrants should fully assimilate into their new country's culture (deberían asimilarse plenamente)\n· migrants should preserve their original cultural identity (deberían preservar su identidad original)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS de los verbos con gerundio/infinitivo de matiz (remember, regret, stop, mean…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What home means to me' — reflexiona sobre el concepto de hogar y pertenencia.\n· CARTA a una organización de apoyo a migrantes proponiendo un programa concreto para ayudar en la integración: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Amara y Leo, sobre la identidad cultural (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Amara and Leo, discussing cultural identity. Leo: Amara, you moved here as a teenager. Do you feel more at home here now, or back where you grew up? Amara: Honestly? Neither, completely, and both, partly. I remember feeling entirely foreign here at first, and now, strangely, I feel slightly foreign when I go back to visit too. Leo: That sounds genuinely difficult. Amara: It was, for years. I used to think I'd eventually stop feeling that particular way, that I'd simply settle firmly into one identity or the other eventually. I've stopped expecting that now, if I'm honest. Leo: So how do you think about it these days instead? Amara: I've come to see it less as a problem to be solved and more as simply how things genuinely are for me now. I didn't mean to become someone who belongs to two places at once — it just happened, gradually, without me really choosing it. Leo: Do you regret leaving your original country, looking back? Amara: Not remotely, no. But I do regret not having visited more often when I was younger, before certain relationships back home quietly faded through simple distance and time. Leo: What would you tell someone just starting that same journey now? Amara: I'd tell them to stop trying so hard to choose decisively between the two places. You don't actually have to choose one over the other. You can go on belonging to both, imperfectly, for your entire life.", [
      mc("1. How does Amara feel about 'home' now?", ["Fully at home in one place.", "Neither fully, and both, partly.", "Homeless emotionally."], 1, "'Neither, completely, and both, partly'."),
      mc("2. What did she used to think would happen?", ["Nothing would change.", "She'd eventually settle into one identity or the other.", "She'd forget her home country."], 1, "'I'd simply settle firmly into one identity or the other eventually'."),
      mc("3. How does she see her situation now?", ["As a problem to be solved.", "As simply how things are for her now.", "As a mistake."], 1, "'less as a problem to be solved and more as simply how things genuinely are'."),
      mc("4. Does she regret leaving her original country?", ["Yes, deeply.", "Not remotely.", "She's unsure."], 1, "'Not remotely, no'."),
      mc("5. What does she regret instead?", ["Nothing.", "Not visiting more often when younger.", "Moving at all."], 1, "'I do regret not having visited more often when I was younger'."),
      mc("6. What advice does she give at the end?", ["Choose one place decisively.", "Stop trying to choose; you can belong to both.", "Forget your home country."], 1, "'stop trying so hard to choose decisively… You can go on belonging to both'."),
    ]),

    ...speakingParts({ p1: "si te has mudado alguna vez o conoces a alguien que lo haya hecho, y cómo fue esa experiencia", p2: "dos imágenes de la migración (una familia llegando a un nuevo país con maletas y una celebración multicultural en una ciudad): compáralas y especula sobre los sentimientos de las personas", p3: "qué ayuda más a la integración de los migrantes (aprender el idioma, mantener la cultura de origen, el apoyo de la comunidad, la educación, el empleo): comentadlo y elegid lo más importante", p4: "la migración y la identidad cultural: si es posible pertenecer a dos culturas a la vez, si los países deberían hacer más por preservar la cultura de origen y qué significa realmente 'sentirse en casa'" }),

    SUMMARY("Resumen del Día 18", [
      "Verbos con cambio de significado: remember/forget (+-ing memoria pasada / +to recordar hacer), regret (+-ing lamentar / +to fórmula formal), stop (+-ing dejar / +to parar para), mean (+-ing implicar / +to intención), try, go on.",
      "Gerundio/infinitivo perfecto (having done / to have done) y pasivo (being done / to be done) para matizar tiempo y voz.",
      "Vocabulario de migración. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 19", "Escribe 6 frases usando verbos con matiz gerundio/infinitivo (remember, regret, stop, mean…). Repasa las flashcards. Mañana: la comparación avanzada y los determinantes complejos."),
  ],
};

// ───────────────────────── DÍA 19 ─────────────────────────
const DAY19 = {
  title: "Día 19 — La comparación avanzada y los determinantes complejos · La desigualdad económica",
  description: "Comparativos e intensificadores avanzados (nowhere near, by far, increasingly, all the more); comparación proporcional (the more...the more); determinantes complejos (whatever, whichever, no matter what/how). Vocabulario de desigualdad económica. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Matizar comparaciones y usar determinantes complejos con precisión de nivel C1.",
    summary: "Comparación avanzada; determinantes complejos; desigualdad económica; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["intensificadores mal combinados con comparativos (❌ very more).", "olvidar 'the' en la comparación proporcional (the more... the better).", "confundir whatever/whichever (elección) con no matter what/how (concesión)."],
    reviewPrompts: ["¿Qué intensificador usarías para decir que algo NO se acerca ni de lejos a otra cosa?", "¿Cómo se estructura 'cuanto más... más'?"],
  },
  items: [
    TEXT("🔁 Ayer, gerundios/infinitivos. Hoy la COMPARACIÓN AVANZADA y los DETERMINANTES COMPLEJOS: matices finos para comparar y generalizar. Vocabulario: la DESIGUALDAD ECONÓMICA."),
    GRAMMAR("La comparación avanzada y los determinantes complejos", `INTENSIFICADORES DE COMPARATIVOS (más allá de 'much/a lot'):
· FAR / BY FAR (con superlativo): This is by far the most unequal society I've studied.
· NOWHERE NEAR / NOT NEARLY (negación fuerte): Wages are nowhere near enough to cover rent.
· INCREASINGLY (+ adjetivo, tendencia progresiva): The gap is becoming increasingly visible.
· ALL THE MORE (+ adjetivo, refuerza una razón): Their success is all the more remarkable given the obstacles.
· MARGINALLY / SLIGHTLY vs CONSIDERABLY / SUBSTANTIALLY (grado del cambio): Wages rose marginally; profits rose substantially.
COMPARACIÓN PROPORCIONAL: THE + comparativo…, THE + comparativo… (cuanto más/menos…, más/menos…)
· The wider the gap grows, the harder it becomes to close. The more you earn, the less visible poverty becomes to you.
DETERMINANTES COMPLEJOS (generalización/concesión):
· WHATEVER / WHICHEVER (+ sustantivo, elección abierta): Whatever policy is chosen, results will take years. Whichever party wins, inequality remains.
· NO MATTER WHAT/HOW/WHO (concesión, = whatever/however): No matter how hard they work, some families can't escape poverty. No matter what politicians promise, change is slow.
· WHOEVER (persona, elección abierta): Whoever designed this system clearly didn't consider the poorest.
⚠️ 'The more... the more' exige DOS comparativos paralelos, cada uno con 'the'; no omitas ninguno.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ It's very more unequal → ✅ FAR more unequal / BY FAR the most unequal.\n· ❌ More you earn, less you see poverty → ✅ THE more you earn, THE less you see poverty (no omitas 'the').\n· ❌ Whatever politician wins → ✅ Whichever politician wins (elección entre opciones concretas → whichever; whatever para categorías abiertas).\n· 'nowhere near' se usa con comparativo o con 'enough': nowhere near enough / nowhere near as good as."),
    grammarEx("Use of English — Comparación avanzada y determinantes complejos", "Elige o completa.", [
      mc("This is ___ the most unequal country in the region.", ["far", "by far", "nowhere near"], 1, "by far + superlativo."),
      mc("Wages are ___ enough to keep up with rising costs.", ["by far", "nowhere near", "increasingly"], 1, "nowhere near enough."),
      fb("The wider the gap grows, ___ harder it becomes to close.", ["the"], "comparación proporcional: the + comparativo."),
      mc("___ policy they choose, real change will take years to show.", ["Whatever", "However", "No matter"], 0, "whatever + sustantivo (elección abierta)."),
      fb("___ (matter) how hard they work, some families can't escape poverty.", ["No"], "no matter how + adj/adv."),
      mc("Their achievement is ___ remarkable given how few resources they had.", ["all the more", "far more", "nowhere near"], 0, "all the more (refuerza razón)."),
      mc("The gap between rich and poor has become ___ visible in recent years.", ["increasingly", "nowhere near", "by far"], 0, "increasingly + adjetivo (tendencia)."),
    ]),
    GRAMMAR("Vocabulario del día — La desigualdad económica (C1)", "Léxico avanzado de desigualdad."),
    deck("C1 S4D19 — La desigualdad económica", [
      ["wealth gap", "brecha de riqueza", "The wealth gap has widened sharply.", "sustantivo", "ˈwelθ ɡæp"],
      ["social mobility", "movilidad social", "Social mobility has stalled for decades.", "sustantivo", "ˈsəʊʃl məʊˈbɪləti"],
      ["disparity", "disparidad", "There are stark income disparities.", "sustantivo", "dɪˈspærəti"],
      ["entrenched", "arraigado/a (privilegio, desigualdad)", "Inequality is deeply entrenched.", "adjetivo", "ɪnˈtrentʃt"],
      ["redistribute", "redistribuir", "The policy aims to redistribute wealth.", "verbo", "ˌriːdɪˈstrɪbjuːt"],
      ["underprivileged", "desfavorecido/a", "The scheme supports underprivileged children.", "adjetivo", "ˌʌndəˈprɪvəlɪdʒd"],
      ["precarious", "precario/a", "Many work in precarious employment.", "adjetivo", "prɪˈkeəriəs"],
      ["exploit", "explotar (a alguien)", "Some employers exploit vulnerable workers.", "verbo", "ɪkˈsplɔɪt"],
      ["welfare state", "estado del bienestar", "The welfare state cushions hardship.", "sustantivo", "ˈwelfeə steɪt"],
      ["trickle-down", "goteo (teoría económica)", "Critics doubt trickle-down economics works.", "adjetivo", "ˈtrɪkl daʊn"],
    ]),
    vocabEx("Vocabulario — La desigualdad económica", "Elige la opción correcta.", [
      mc("The difference in wealth between the richest and poorest is the ___.", ["wealth gap", "welfare state", "trickle-down effect"], 0, "wealth gap."),
      mc("The ability to move to a different economic class is ___.", ["social mobility", "disparity", "exploitation"], 0, "social mobility."),
      mc("Deeply established and hard to change is ___.", ["entrenched", "precarious", "redistributed"], 0, "entrenched."),
      mc("To unfairly benefit from someone's labour is to ___ them.", ["exploit", "redistribute", "entrench"], 0, "exploit."),
      mc("Unstable and insecure, e.g. a job, is ___.", ["precarious", "entrenched", "redistributed"], 0, "precarious."),
      mc("Lacking the advantages others have is being ___.", ["underprivileged", "entrenched", "precarious"], 0, "underprivileged."),
    ]),

    ...uoe({
      p1: {
        title: "The wealth nobody sees",
        text: "Public debate about inequality tends to focus, understandably enough, on the most visible (1)___ of wealth — the mansions, the private jets, the eye-watering executive salaries. What receives (2)___ less attention, though it may ultimately matter considerably more for how societies actually function, is the invisible inequality of inherited advantage: the quiet, largely unremarked accumulation of connections, cultural knowledge and psychological confidence that flows silently from one privileged generation to the next. A child raised in genuine material comfort typically absorbs, almost entirely without conscious effort, an entire (3)___ of unspoken assumptions about their own future prospects, about which institutions and opportunities are realistically 'for them', about how confidently to navigate formal interviews and unfamiliar social situations. None of this shows up in any conventional measure of income or visible wealth, yet its practical effects can prove every bit as (4)___ as a substantial financial inheritance. The child from a genuinely underprivileged background may work considerably harder, in purely measurable terms, than their privileged peer, and yet find themselves nowhere near as (5)___ positioned to actually succeed, simply because they lack this largely invisible cultural and psychological capital that money alone cannot straightforwardly purchase, however wealthy one happens to be. This helps explain why simply redistributing visible financial wealth, while undoubtedly necessary and valuable, is nowhere near (6)___ on its own to genuinely level the playing field between different social classes. The far harder, more (7)___ task is addressing the invisible, largely unmeasured inequalities that persist stubbornly even after visible financial gaps have been meaningfully narrowed through policy — inequalities of confidence, connection and unspoken cultural expectation that no straightforward tax policy alone can ever fully, directly (8)___.",
        q: [
          mc("(1)", ["forms", "types", "kinds", "sorts"], 0, "'the most visible forms of wealth'."),
          mc("(2)", ["considerably", "far", "much", "somewhat"], 0, "'receives considerably less attention'."),
          mc("(3)", ["repertoire", "collection", "range", "set"], 0, "'an entire repertoire of… assumptions'."),
          mc("(4)", ["consequential", "significant", "important", "substantial"], 0, "'every bit as consequential'."),
          mc("(5)", ["favourably", "well", "advantageously", "strongly"], 1, "'nowhere near as well positioned'."),
          mc("(6)", ["sufficient", "enough", "adequate", "satisfactory"], 1, "'nowhere near enough on its own'."),
          mc("(7)", ["elusive", "difficult", "complex", "demanding"], 0, "'the far harder, more elusive task'."),
          mc("(8)", ["address", "solve", "fix", "remedy"], 0, "'no straightforward tax policy alone can… address'."),
        ],
      },
      p2: {
        title: "The ladder that keeps moving",
        text: "The promise at the very heart of the idea of social mobility is a simple, deeply appealing (1)___: that hard work, talent and genuine determination should be able to overcome the accident of one's birth into circumstances of poverty or disadvantage. In practice, however, mounting evidence suggests that this ladder has, in many societies, grown considerably harder to climb (2)___ in previous generations, however much political rhetoric continues to insist otherwise. Income that once reliably enabled a family to buy a first home, fund a decent education, and build modest but genuinely meaningful savings now frequently proves nowhere near (3)___ to achieve even one of these three basic milestones, let alone all three simultaneously. The harder people work merely to stand still financially, paradoxically, (4)___ energy and resources remain available for the kind of genuine, forward-looking advancement that social mobility fundamentally requires and depends upon. This creates a genuinely vicious, self-reinforcing cycle: precarious economic circumstances actively make climbing the ladder harder, and the resulting failure to climb then further, visibly entrenches the very precariousness that made climbing difficult in the first place. Breaking this particular cycle requires interventions considerably more ambitious (5)___ modest tweaks to existing tax policy; it likely requires addressing, more fundamentally, the widening structural gap between the returns that flow reliably to owning capital and assets and the returns that flow, considerably less reliably, to ordinary labour and hard work. Whatever specific policy mix any given society ultimately, democratically chooses, the underlying, uncomfortable mathematics remains stubbornly (6)___: the ladder cannot function as promised if its lower rungs are simultaneously, systematically being sawed steadily away even as political leaders continue, rather implausibly, to insist it remains fully intact and readily climbable for anyone genuinely willing to try.",
        q: [
          fb("(1)", ["idea", "notion"], "'a simple… idea/notion'."),
          fb("(2)", ["than"], "'harder to climb than in previous generations'."),
          fb("(3)", ["enough"], "'nowhere near enough to achieve'."),
          fb("(4)", ["the"], "'paradoxically, the less energy'."),
          fb("(5)", ["than"], "'more ambitious than modest tweaks'."),
          fb("(6)", ["the same", "unchanged"], "'remains stubbornly the same'."),
        ],
      },
      p3: {
        title: "Whoever benefits most",
        text: "Economic policy debates are frequently conducted, at least on the surface, in the (1)___ language of overall national efficiency and aggregate economic growth. Yet beneath this seemingly neutral, technical surface, a far more (2)___ question almost always lurks: whoever specifically stands to benefit most from any given policy choice, and whoever, conversely, is likely to bear its accompanying, often quietly unstated costs? Tax cuts marketed and sold to the general public as broadly beneficial for 'everyone' frequently deliver (3)___ larger gains to those already comfortably positioned near the very top of the income distribution. Deregulation genuinely promoted as reducing burdensome costs for struggling small businesses can (4)___ primarily benefit large, already-dominant corporations considerably better equipped to navigate complex regulatory environments regardless. This is not necessarily, it should be said clearly, a matter of straightforward, deliberate (5)___ on the part of policymakers; economic effects are often genuinely complex, and reasonable, well-intentioned experts frequently disagree sincerely about likely real-world outcomes. But it does suggest that citizens would do well to ask, whatever specific policy is currently under (6)___, a simple, remarkably clarifying question: who, precisely and concretely, actually benefits, compared to who bears the accompanying costs? This question, (7)___ simple though it undoubtedly sounds, cuts through an enormous amount of otherwise confusing technical noise and abstract economic jargon, and however sophisticated the accompanying economic modelling genuinely happens to be, the fundamental, underlying (8)___ question it raises remains every bit as relevant, and every bit as often conveniently avoided, as it has ever historically been.",
        items: [
          { root: "neutral", accepted: ["neutrally"], hint: "'in the neutrally-sounding language' → neutrally." },
          { root: "politics", accepted: ["political"], hint: "'a far more political question' → political." },
          { root: "proportion", accepted: ["disproportionately"], hint: "'deliver disproportionately larger gains' → disproportionately." },
          { root: "act", accepted: ["actually"], hint: "'can actually primarily benefit' → actually." },
          { root: "deceive", accepted: ["deception"], hint: "'deliberate deception' → deception." },
          { root: "discuss", accepted: ["discussion"], hint: "'currently under discussion' → discussion." },
          { root: "disarm", accepted: ["disarmingly"], hint: "'disarmingly simple though it sounds' → disarmingly." },
          { root: "distribute", accepted: ["distributional"], hint: "'the… distributional question' → distributional." },
        ],
      },
      p4: {
        title: "Transformaciones — comparación avanzada y determinantes complejos",
        items: [
          { s1: "This is much more unequal than any other country I've studied.", key: "FAR", s2: "This is ___ unequal country I've studied.", accepted: ["by far the most"], explanation: "by far + superlativo." },
          { s1: "Wages simply aren't enough to cover rent.", key: "NOWHERE", s2: "Wages are ___ enough to cover rent.", accepted: ["nowhere near"], explanation: "nowhere near enough." },
          { s1: "As the gap grows wider, it becomes harder to close.", key: "THE", s2: "___ the gap grows, ___ it becomes to close.", accepted: ["The wider", "the harder"], explanation: "comparación proporcional." },
          { s1: "It doesn't matter which policy they choose; results will take years.", key: "WHATEVER", s2: "___ policy they choose, results will take years.", accepted: ["Whatever"], explanation: "whatever + sustantivo (concesión)." },
          { s1: "However hard they work, some families can't escape poverty.", key: "MATTER", s2: "No ___ hard they work, some families can't escape poverty.", accepted: ["matter how"], explanation: "no matter how." },
          { s1: "Their success is even more remarkable considering the obstacles.", key: "ALL", s2: "Their success is ___ remarkable given the obstacles.", accepted: ["all the more"], explanation: "all the more." },
        ],
      },
      p5: {
        title: "The experiment that shocked the economists",
        text: "In a landmark, widely cited study conducted some years ago, researchers set out to test something economists had long simply assumed rather than rigorously, empirically investigated: that people at the very top of the income distribution genuinely earn their extraordinary rewards primarily through some correspondingly extraordinary combination of skill, effort and rare talent, considerably rarer than that possessed by ordinary, more modestly compensated workers. What they found instead, once they actually looked carefully and systematically at the available evidence, was nowhere near as reassuring or as comfortably meritocratic as conventional wisdom had long, confidently assumed.\n\nThe researchers compared, across many different industries and countries, executive compensation against a wide range of measurable performance indicators — company profitability, revenue growth, various other concrete, quantifiable outcomes an executive could reasonably be expected to influence directly through their own individual skill and decisions. What they discovered was that the relationship between actual measurable performance and eventual executive compensation was, in a great many well-documented cases, considerably weaker than anyone had confidently anticipated going into the study. Executives whose companies performed only modestly, by any conventional objective measure, often received compensation packages every bit as generous as those whose companies performed spectacularly well by comparison.\n\nWhat seemed to matter more than objective, measurable performance, the researchers eventually concluded after extensive further analysis, was something considerably less meritocratic: the specific social networks executives happened to belong to, the composition of the compensation committees that set their pay, and broader, largely self-reinforcing industry norms about what 'appropriate' senior executive pay should generally look like, almost entirely independent of demonstrated actual performance. Whichever specific company an executive happened to lead, membership of the right elite social and professional network seemed to matter considerably more for eventual compensation than the company's own actual, measurable results.\n\nThis finding, when it was first published and widely reported, provoked considerable and sometimes heated controversy, precisely because it directly challenged a comforting, deeply held cultural assumption underpinning much of contemporary economic and political life: that market economies reliably, efficiently reward genuine merit and productive contribution above almost everything else, and that resulting large disparities in pay therefore straightforwardly reflect large, legitimate underlying disparities in genuine value actually created for society and shareholders alike.\n\nThe researchers themselves were notably careful, in presenting their striking findings, not to claim that skill and effort simply don't matter at all in determining executive success — clearly they matter considerably, at least up to some meaningful point. But their genuinely striking findings suggested that, well beyond that initial point, other considerably less meritocratic factors — social connection, prevailing industry convention, the specific composition of a compensation committee on any given occasion — increasingly and disproportionately take over in actually determining who, specifically, gets paid how much. Whoever ultimately benefits most from any given executive compensation structure, the study strongly suggested, is nowhere near as simple or as straightforwardly meritocratic a question as most people had previously, rather comfortably, assumed it to be.",
        q: [
          mc("What assumption did the study set out to test?", ["That pay is random.", "That top earners earn extraordinary rewards mainly through extraordinary skill and effort.", "That all workers earn the same.", "That companies are profitable."], 1, "'that people at the very top… genuinely earn their extraordinary rewards primarily through… extraordinary… skill, effort and rare talent'."),
          mc("What did the researchers find about performance and pay?", ["A very strong link.", "A considerably weaker relationship than anticipated.", "No relationship at all was tested.", "Pay was always fair."], 1, "'the relationship between actual measurable performance and eventual executive compensation was… considerably weaker than anyone had confidently anticipated'."),
          mc("What seemed to matter more than measurable performance?", ["Nothing else mattered.", "Social networks, compensation committee composition, and industry norms.", "Company size only.", "Government regulation."], 1, "'the specific social networks executives happened to belong to… broader… industry norms'."),
          mc("Why did the finding provoke controversy?", ["It was boring.", "It challenged the assumption that markets reward merit fairly.", "It was too technical.", "Nobody read it."], 1, "'it directly challenged a comforting, deeply held cultural assumption… that market economies reliably… reward genuine merit'."),
          mc("Did the researchers claim skill doesn't matter at all?", ["Yes, entirely.", "No — they said it matters up to a point, then other factors take over.", "They didn't address this.", "Skill matters more than anything."], 1, "'clearly they matter considerably, at least up to some meaningful point… other… factors… increasingly… take over'."),
          mc("What does the study suggest about who benefits most from pay structures?", ["It's simple and meritocratic.", "It's nowhere near as simple or meritocratic as commonly assumed.", "It's entirely random.", "It's fully regulated."], 1, "'is nowhere near as simple or as straightforwardly meritocratic a question as most people had previously… assumed'."),
        ],
      },
      p6: {
        title: "What causes economic inequality?",
        intro: "Cuatro personas debaten las causas principales de la desigualdad económica.",
        texts: {
          A: "NADIA: For me, the single biggest driver is simply how capital and inherited wealth compound over generations, far faster than wages from ordinary labour ever realistically can. Whoever starts with meaningful assets ends up, almost automatically, considerably wealthier decades later, largely regardless of individual effort. Until we seriously address inheritance and asset concentration directly, other more marginal policy tweaks are nowhere near sufficient to meaningfully move the needle.",
          B: "TOM: I'd place far more weight on education and skills specifically. The wage gap between people with advanced, in-demand skills and those without has grown considerably wider in recent decades, largely driven by rapid technological change. Whatever we do about existing wealth and capital, we also urgently need much better, more accessible education and retraining systems for people whose particular skills technology has quietly rendered obsolete.",
          C: "PRIYA: My honest view is that we spend far too much time on individual-level explanations — skills, effort, inheritance — and nowhere near enough attention on the specific rules of the game itself: labour laws, union strength, minimum wage policy, corporate governance rules. Countries with broadly similar levels of skill and technology show startlingly different levels of inequality, purely depending on these underlying institutional choices.",
          D: "SAM: What concerns me most is how self-reinforcing all of this ultimately becomes over time. Wealthy people can afford better legal and political representation, which then shapes tax and regulatory policy considerably more in their own favour, which then further increases their wealth, and so the underlying cycle continues, largely unbroken. No matter which single specific cause you happen to prioritise, this deeper feedback loop makes meaningful, lasting reform considerably harder to achieve in practice.",
        },
        q: [
          mc("Who points to compounding capital and inherited wealth as the biggest driver?", ["A", "B", "C", "D"], 0, "Nadia: 'the single biggest driver is simply how capital and inherited wealth compound over generations'."),
          mc("Whose view most directly SHIFTS the emphasis to education and technology?", ["A", "B", "C", "D"], 1, "Tom: 'far more weight on education and skills specifically'."),
          mc("Who emphasises institutional rules over individual-level explanations?", ["A", "B", "C", "D"], 2, "Priya: 'nowhere near enough attention on the specific rules of the game itself'."),
          mc("Who focuses on the self-reinforcing feedback loop between wealth and political power?", ["A", "B", "C", "D"], 3, "Sam: 'how self-reinforcing all of this ultimately becomes'."),
        ],
      },
      p7: {
        title: "The comfort of not looking down",
        text: "Those positioned comfortably near the top of any society's income distribution often report, when asked directly and honestly, a genuine and sincere concern about growing economic inequality. (1)___\n\nAnd yet, as researchers studying actual daily behaviour rather than merely stated opinions have repeatedly found, this sincerely expressed concern rarely translates into much direct, personal contact with the specific economic hardship being discussed in the abstract. (2)___ Wealthier people increasingly live, work, and socialise almost entirely within similarly wealthy social bubbles.\n\nThis growing geographic and social separation between different economic classes matters more than it might initially seem. (3)___ Abstract statistics about inequality inspire nowhere near the same emotional response as direct, repeated personal contact with genuine hardship.\n\nSome researchers now argue that this quiet, gradual physical and social segregation may itself be a significant, underappreciated driver of growing political inaction on inequality, whatever people happen to sincerely say in opinion surveys. (4)___ It becomes considerably easier to support only modest, incremental policy change when you rarely, if ever, actually encounter its human costs directly and personally.\n\nBreaking this particular pattern would require, at minimum, considerably more genuine social mixing across class lines than most modern, increasingly segregated societies currently, comfortably manage. (5)___ Shared, genuinely mixed schools, shared public spaces, shared neighbourhoods where different economic classes still, meaningfully, interact.\n\nWhoever eventually succeeds in rebuilding these frayed, weakened social connections may find that political appetite for addressing inequality shifts considerably more than any amount of purely statistical, abstract persuasion ever realistically could. (6)___ Proximity, it turns out, may matter every bit as much as persuasion itself.",
        options: [
          "This concern, however, rarely translates into much action.",      // A -> gap 1
          "The reason lies partly in simple, everyday physical distance.",   // B -> gap 2
          "What we see daily shapes what we feel far more than numbers do.", // C -> gap 3
          "Distance, quietly, makes half-measures feel like quite enough.", // D -> gap 4
          "Rebuilding that contact would take deliberate, sustained effort.", // E -> gap 5
          "Seeing hardship up close changes people more than data ever can.", // F -> gap 6
          "Wealthy people have never once expressed any concern about inequality.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la preocupación rara vez se traduce en acción."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la razón está en la distancia física."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: lo que vemos moldea lo que sentimos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la distancia hace que lo poco parezca suficiente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: reconstruir ese contacto exigiría esfuerzo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ver la penuria de cerca cambia más que los datos."),
        ],
      },
      p8: {
        title: "Four people discuss their experience of economic inequality",
        text: "Read what four people say about their personal experience of economic inequality.\n\nA) NADIA: I grew up genuinely poor and now, by most conventional measures, am reasonably comfortable financially. What strikes me most is how differently my own children see the world compared to how I did at their exact same age. Whatever advantages I've quietly built for them, I sometimes worry they've lost some of the resourcefulness that real hardship, difficult as it undeniably was, actually taught me.\n\nB) TOM: I work in finance, and I'm nowhere near as comfortable with my own industry's pay structures as I probably should convincingly pretend to be in public. The gap between what junior support staff earn and what senior partners take home is honestly indefensible by any reasonable measure, no matter how hard senior partners try to rationalise it to themselves and others.\n\nC) PRIYA: What changed my entire perspective was volunteering regularly at a food bank. Meeting people genuinely struggling, week after week, made the statistics I'd read about for years suddenly feel completely real and immediate for the first time. I'd absolutely recommend that kind of direct, sustained contact to absolutely anyone who feels even slightly distant from the whole issue.\n\nD) SAM: I inherited a reasonable amount of money, and I'll be honest — I used to genuinely believe I'd earned my own comfortable position almost entirely through hard work alone. It took me embarrassingly long to fully recognise how much of a head start that inheritance had actually quietly given me over people who worked every bit as hard as I did, or considerably harder.\n",
        q: [
          mc("Who grew up poor and now worries their children have lost resourcefulness?", ["A", "B", "C", "D"], 0, "Nadia: 'I grew up genuinely poor… they've lost some of the resourcefulness'."),
          mc("Who works in finance and finds their industry's pay gap indefensible?", ["A", "B", "C", "D"], 1, "Tom: 'The gap between what junior support staff earn and what senior partners take home is honestly indefensible'."),
          mc("Who had their perspective changed by volunteering at a food bank?", ["A", "B", "C", "D"], 2, "Priya: 'What changed my entire perspective was volunteering regularly at a food bank'."),
          mc("Who inherited money and took a long time to recognise its advantage?", ["A", "B", "C", "D"], 3, "Sam: 'I inherited a reasonable amount of money… It took me embarrassingly long to fully recognise'."),
          mc("Who worries about the difference between how they and their children see the world?", ["A", "B", "C", "D"], 0, "Nadia: 'how differently my own children see the world'."),
          mc("Who says they're nowhere near as comfortable with pay structures as they pretend?", ["A", "B", "C", "D"], 1, "Tom: 'I'm nowhere near as comfortable with my own industry's pay structures as I probably should… pretend'."),
          mc("Who recommends direct contact with hardship to anyone who feels distant from the issue?", ["A", "B", "C", "D"], 2, "Priya: 'I'd absolutely recommend that kind of direct, sustained contact'."),
          mc("Who used to believe they'd earned their position through hard work alone?", ["A", "B", "C", "D"], 3, "Sam: 'I used to genuinely believe I'd earned my own comfortable position almost entirely through hard work alone'."),
          mc("Who found statistics suddenly felt real through personal contact?", ["A", "B", "C", "D"], 2, "Priya: 'made the statistics… suddenly feel completely real and immediate'."),
          mc("Who says the pay gap is indefensible no matter how senior partners rationalise it?", ["A", "B", "C", "D"], 1, "Tom: 'no matter how hard senior partners try to rationalise it'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la desigualdad se plantearon dos ideas:\n· economic inequality is mainly a result of individual choices and effort (resultado de decisiones individuales)\n· economic inequality is mainly a result of structural factors beyond individual control (resultado de factores estructurales)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos una estructura de COMPARACIÓN PROPORCIONAL (the more... the more) o un intensificador avanzado (nowhere near, by far). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para un gobierno local sobre cómo reducir la desigualdad económica en tu ciudad: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'What privilege I didn't notice I had' — reflexiona con honestidad sobre ventajas que quizás no has reconocido.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de su relación con la desigualdad económica (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué experiencia tuvieron?): A they grew up in poverty · B they inherited significant wealth · C they work in a high-paying industry · D they volunteer with disadvantaged people · E they lost their job unexpectedly · F they moved between social classes. TAREA DOS (¿qué actitud tienen ahora?): A gratitude mixed with guilt · B a new sense of urgency · C cautious optimism · D quiet resentment · E determination to give back · F ongoing confusion.", "This is Part Four. You will hear five people talking about their relationship with economic inequality. Speaker One: I grew up in a household where every single pound genuinely mattered, and now, decades later, I run my own reasonably successful business. I feel enormously grateful for where I've ended up, honestly, but there's also a nagging, persistent guilt about how many equally hardworking people from where I started never got anywhere near the same lucky breaks I somehow did. Speaker Two: My grandfather built a genuinely successful company from absolutely nothing, and I inherited a considerable amount when he eventually passed away. For years I quietly avoided thinking about it too deeply. Now I actively try to give a meaningful portion away every single year, and it's become one of the most personally satisfying things I regularly do. Speaker Three: I was made redundant last year, completely without warning, after fifteen loyal years at the exact same company. It fundamentally changed how secure I feel about absolutely everything financial now. I used to assume hard work alone guaranteed reasonable stability; I no longer assume that quite so confidently. Speaker Four: I've spent the last five years volunteering weekly at a shelter, and it's completely transformed how urgently I personally feel about all of this. Reading statistics about inequality never moved me nearly as much as actually meeting real people affected by it, week after week, does. Speaker Five: I moved from a working-class background into a genuinely wealthy professional world through my own career, and I still honestly don't quite know where I properly belong anymore. I don't feel fully at home in either world these days, if I'm completely honest with myself.", [
      mc("Speaker 1 — TAREA UNO (qué experiencia tuvo)", ["A", "B", "C", "D", "E", "F"], 0, "A: creció en la pobreza."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: heredó una riqueza considerable."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 4, "E: perdió su empleo inesperadamente."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 3, "D: es voluntario/a con personas desfavorecidas."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: se movió entre clases sociales."),
      mc("Speaker 1 — TAREA DOS (actitud actual)", ["A", "B", "C", "D", "E", "F"], 0, "A: gratitud mezclada con culpa."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 4, "E: determinación de devolver algo."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: resentimiento silencioso (inseguridad persistente)."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: un nuevo sentido de urgencia."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 5, "F: confusión continua sobre su lugar."),
    ]),

    ...speakingParts({ p1: "cómo ves la desigualdad económica en tu entorno y si crees que has tenido ventajas que otros no tuvieron", p2: "dos imágenes de la desigualdad (un barrio próspero con edificios modernos y un barrio con dificultades económicas): compáralas y especula sobre la vida de sus habitantes", p3: "qué ayudaría más a reducir la desigualdad (mejor educación, impuestos más altos a la riqueza, un salario mínimo más alto, más movilidad social, cambiar las leyes laborales): comentadlo y elegid lo más eficaz", p4: "la desigualdad económica: si es resultado del esfuerzo individual o de factores estructurales, si la sociedad debería redistribuir más la riqueza y cómo el contacto directo con la pobreza cambia nuestra forma de pensar" }),

    SUMMARY("Resumen del Día 19", [
      "Intensificadores: by far/far (con superlativo), nowhere near/not nearly (negación fuerte), increasingly (tendencia), all the more (refuerza razón).",
      "Comparación proporcional: THE + comparativo, THE + comparativo. Determinantes complejos: whatever/whichever (elección), no matter what/how/who (concesión).",
      "Vocabulario de desigualdad económica. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 20", "Escribe 6 frases con intensificadores avanzados o comparación proporcional sobre la desigualdad. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 20 ─────────────────────────
const DAY20 = {
  title: "Día 20 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de las relativas avanzadas, el estilo indirecto sofisticado, los gerundios/infinitivos con matiz, y la comparación avanzada/determinantes complejos. Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 4.",
  pedagogy: {
    objective: "Consolidar los recursos avanzados de cohesión y matiz del C1 antes de la Semana 5.",
    summary: "Repaso de relativas/estilo indirecto/gerundios-infinitivos/comparación; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de la semana te ha costado más dominar?", "Repásalo antes de la Semana 5 (los conectores del discurso y la cohesión avanzada)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 4 del C1. Consolidas las RELATIVAS AVANZADAS, el ESTILO INDIRECTO SOFISTICADO, los GERUNDIOS/INFINITIVOS con matiz, y la COMPARACIÓN AVANZADA/DETERMINANTES COMPLEJOS. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 4", `1) RELATIVAS: reducidas (-ing activa / -ed pasiva); con cuantificador (some/many/none + of which/whom); whose extendido a cosas.
2) ESTILO INDIRECTO: verbos introductores precisos (admit/deny + -ing; insist on + -ing; claim/allege + to/that; accuse of + -ing; warn (not) to); preguntas reportadas sin inversión.
3) GERUNDIOS/INFINITIVOS: remember/forget/regret/stop/mean/try/go on (cambio de significado); gerundio/infinitivo perfecto (having done/to have done) y pasivo.
4) COMPARACIÓN: by far, nowhere near, increasingly, all the more; the + comparativo, the + comparativo; whatever/whichever, no matter what/how.`),
    grammarEx("Use of English — Repaso mixto de la Semana 4", "Completa o elige.", [
      mc("The lawyer ___ the defendant is highly experienced.", ["representing", "represented", "represents"], 0, "reducida -ing (activa)."),
      fb("The jury heard forty witnesses, several ___ contradicted each other.", ["of whom"], "cuantificador + of whom."),
      mc("Direct: 'I didn't take it.' Reported:", ["He denied taking it.", "He denied to take it.", "He denied he take it."], 0, "deny + -ing."),
      fb("She ___ (claim / live) in five countries. (anterior)", ["claims to have lived"], "claim to have + participio."),
      mc("I remember ___ the border as a child.", ["crossing", "to cross", "cross"], 0, "memoria pasada → -ing."),
      mc("We regret ___ you that your application was rejected. (formal)", ["informing", "to inform", "inform"], 1, "regret to inform."),
      fb("The wider the gap grows, ___ harder it becomes to close.", ["the"], "comparación proporcional."),
      mc("___ policy they choose, change will take years.", ["Whatever", "However", "No matter"], 0, "whatever + sustantivo."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 4", "Repasa los mazos (justicia, interrogatorios, migración, desigualdad)."),
    vocabEx("Vocabulario — Repaso de la Semana 4", "Elige la opción correcta.", [
      mc("A wrongful conviction is a:", ["miscarriage of justice", "plea bargain", "due process"], 0, "miscarriage of justice."),
      mc("To force someone into doing something is to:", ["coerce", "disclose", "recant"], 0, "coerce."),
      mc("A community living away from their homeland is a:", ["diaspora", "heritage", "integration"], 0, "diaspora."),
      mc("The difference in wealth between rich and poor:", ["wealth gap", "welfare state", "social mobility"], 0, "wealth gap."),
      mc("To give evidence in court is to:", ["testify", "acquit", "sentence"], 0, "testify."),
      mc("To withdraw a previous statement is to:", ["recant", "coerce", "waive"], 0, "recant."),
      mc("Deeply established and hard to change:", ["entrenched", "precarious", "redistributed"], 0, "entrenched."),
      mc("To gradually adopt a new culture's customs is to:", ["assimilate", "displace", "uproot"], 0, "assimilate."),
    ]),

    ...uoe({
      p1: {
        title: "What fairness actually requires",
        text: "Every society claims, at least in its founding documents and public rhetoric, to value fairness. Far fewer societies, however, can agree on (1)___ fairness actually, concretely requires in specific practical circumstances. Does fairness mean treating everyone identically, regardless of their vastly different starting circumstances, or does it mean, on the (2)___, actively compensating for unequal starting points so that outcomes can eventually become genuinely comparable? This distinction, though it may initially sound rather (3)___ and academic, has enormous, concrete practical consequences for how we structure taxation, education and criminal justice alike. A justice system, for instance, that formally treats a wealthy defendant and a genuinely impoverished one entirely identically, providing (4)___ the same nominal legal rights to both, may in practice deliver strikingly different, unequal outcomes, since the wealthy defendant can straightforwardly afford (5)___ skilled legal representation, extensive expert testimony, and the simple luxury of considerably more time to prepare a proper defence. Whoever designed such a system with genuinely equal outcomes specifically in mind would need to look (6)___ formal, nominal equality towards something closer to genuine substantive fairness. This does not mean abandoning the important principle of equal treatment before the law entirely; it means recognising that formal equality and substantive fairness, however much they might initially appear to overlap and coincide, are (7)___ identical, and that achieving the second, considerably harder goal sometimes requires deliberately, consciously departing from the first in specific, carefully targeted ways. Whatever specific balance any given society ultimately, democratically chooses to strike between these two competing, sometimes conflicting values, the underlying tension itself is unlikely (8)___ disappear any time soon.",
        q: [
          mc("(1)", ["what", "which", "that", "how"], 0, "'agree on what fairness… requires'."),
          mc("(2)", ["contrary", "other hand", "opposite", "reverse"], 1, "'on the other hand'."),
          mc("(3)", ["abstract", "vague", "theoretical", "remote"], 0, "'rather abstract and academic'."),
          mc("(4)", ["nominally", "formally", "technically", "officially"], 0, "'nominally the same… rights'."),
          mc("(5)", ["far", "much", "considerably", "significantly"], 0, "'can straightforwardly afford far… representation' — combina con 'more skilled'."),
          mc("(6)", ["beyond", "past", "over", "above"], 0, "'need to look beyond formal, nominal equality'."),
          mc("(7)", ["not", "hardly", "scarcely", "never"], 0, "'are not identical'."),
          mc("(8)", ["to"], "'unlikely to disappear'."),
        ],
      },
      p2: {
        title: "The question nobody asks first",
        text: "When any complex, controversial policy is first proposed, public debate almost invariably rushes (1)___ towards questions of practical feasibility and likely effectiveness: will it genuinely work, and what, precisely, will it actually cost the taxpayer? A more fundamental question, one (2)___ arguably ought to come first, is frequently skipped over entirely, or addressed only briefly, in passing: whatever the policy's likely practical effects, is it actually, morally fair to those who will bear its consequences most directly and heavily? This is not merely an abstract, academic philosophical quibble; it has genuinely concrete implications for (3)___ specific policies ultimately get seriously considered and enacted at all. A policy that would prove highly effective but that concentrates its very real costs disproportionately on those who are already most vulnerable and least able to bear them may, quite reasonably, be judged unacceptable on fairness grounds alone, regardless (4)___ its impressive technical effectiveness on paper. Conversely, a policy that is scrupulously fair in its formal design but that proves nowhere near effective enough in practice to actually solve the underlying problem it targets offers only the empty, hollow comfort of fairness without any genuine, tangible progress. The genuinely hard cases — and they are, in truth, nowhere near as rare (5)___ we might comfortably like to assume — are those where effectiveness and fairness pull, quite directly, in sharply opposing directions. No matter (6)___ sophisticated our economic modelling and analysis eventually becomes, this fundamental tension between what reliably works and what is genuinely fair is unlikely ever (7)___ be fully, cleanly resolved by technical means alone. What we can reasonably hope for, at best, is a public conversation honest and mature (8)___ to acknowledge this persistent tension openly, rather than pretending, rather implausibly, that effectiveness and fairness always straightforwardly, conveniently coincide.",
        q: [
          fb("(1)", ["straight"], "'rushes straight towards'."),
          fb("(2)", ["that", "which"], "'one that… ought to come first'."),
          fb("(3)", ["which"], "'implications for which… policies'."),
          fb("(4)", ["of"], "'regardless of its… effectiveness'."),
          fb("(5)", ["as"], "'nowhere near as rare as'."),
          fb("(6)", ["how"], "'No matter how sophisticated'."),
          fb("(7)", ["to"], "'unlikely ever to be… resolved'."),
          fb("(8)", ["enough"], "'honest and mature enough to acknowledge'."),
        ],
      },
      p3: {
        title: "Whoever writes the rules",
        text: "It is a simple but genuinely underappreciated truth of political life that (1)___ actually writes the detailed, technical rules of any given economic or legal system holds a form of power every bit as (2)___ as those who occupy more visible, headline-grabbing positions of formal political authority. Tax codes, running to thousands of dense, technical pages, are (3)___ neutral, purely technical documents; they represent, in painstaking, accumulated detail, thousands upon thousands of individual decisions about whose specific interests to (4)___ and whose to disregard or deprioritise. The lobbyist who quietly, patiently secures one small, seemingly minor technical exemption, buried deep within an otherwise unremarkable, lengthy piece of legislation, may ultimately exercise (5)___ more practical influence over eventual real-world economic outcomes than a politician delivering a passionate, widely reported speech on the very same general topic. This is precisely why serious, genuine reform efforts increasingly focus not merely on headline policy announcements but on the (6)___, unglamorous mechanics of rule-writing itself: who exactly gets meaningfully consulted during the drafting process, whose specific interests are systematically represented at the table, and (7)___ transparently the entire process unfolds for public scrutiny. Whoever eventually controls these quiet, unglamorous technical processes, largely invisible to most ordinary citizens most of the time, arguably controls considerably more of a society's real, lived economic outcomes than most citizens ever fully or consciously (8)___.",
        items: [
          { root: "who", accepted: ["whoever"], hint: "'whoever actually writes the rules' → whoever." },
          { root: "real", accepted: ["real"], hint: "'a form of power every bit as real' (adjetivo)." },
          { root: "not", accepted: ["not"], hint: "'are not neutral, purely technical documents' (adverbio)." },
          { root: "advance", accepted: ["advance"], hint: "'whose interests to advance' (verbo)." },
          { root: "far", accepted: ["far"], hint: "'exercise far more practical influence' (adverbio)." },
          { root: "grand", accepted: ["ungrand", "unglamorous"], hint: "'the unglamorous mechanics' → unglamorous." },
          { root: "transparent", accepted: ["transparently"], hint: "'how transparently the process unfolds' → transparently." },
          { root: "realise", accepted: ["realise", "realize"], hint: "'most citizens ever fully… realise' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 4",
        items: [
          { s1: "The evidence that was presented in court was overwhelming.", key: "PRESENTED", s2: "The evidence ___ in court was overwhelming.", accepted: ["presented"], explanation: "reducida -ed (pasiva)." },
          { s1: "'I want to speak to my lawyer,' he said.", key: "INSISTED", s2: "He ___ his lawyer.", accepted: ["insisted on speaking to"], explanation: "insist on + -ing." },
          { s1: "Don't forget to renew your visa before it expires.", key: "FORGET", s2: "Don't ___ your visa before it expires.", accepted: ["forget to renew"], explanation: "forget + to." },
          { s1: "It doesn't matter which party wins; inequality remains.", key: "WHICHEVER", s2: "___ party wins, inequality remains.", accepted: ["Whichever"], explanation: "whichever + sustantivo." },
          { s1: "This is much more unequal than any other country I've studied.", key: "FAR", s2: "This is ___ unequal country I've studied.", accepted: ["by far the most"], explanation: "by far + superlativo." },
          { s1: "As wages fall, poverty becomes more visible.", key: "THE", s2: "___ wages fall, ___ poverty becomes.", accepted: ["The more", "the more visible"], explanation: "comparación proporcional." },
        ],
      },
      p5: {
        title: "The judge who changed her mind",
        text: "For over two decades, a respected senior judge had built a professional reputation as one of her country's most reliably tough-on-crime voices on the bench, consistently handing down sentences considerably harsher than most of her professional colleagues, and speaking publicly, on numerous occasions, in firm, unwavering favour of stern punishment as the single most effective deterrent against crime. Lawyers appearing regularly in her courtroom knew, without needing to be told twice, exactly what kind of outcome to reasonably expect whenever they were assigned a case before her specific bench.\n\nWhat gradually, almost imperceptibly changed her settled mind, over a period of roughly three years, was not any single dramatic case or sudden epiphany, but rather a slow, cumulative accumulation of specific individuals she personally sentenced, whose subsequent life trajectories she deliberately, conscientiously chose to follow considerably more closely than most of her judicial colleagues typically bothered to do. Whichever specific outcome she happened to expect in each individual case, based on her decades of considerable accumulated experience, the actual results, tracked systematically and carefully over time, frequently surprised her, and rarely in ways she found genuinely reassuring or comfortable.\n\nDefendants she had sentenced to lengthy custodial terms, confident at the time that such lengthy sentences would serve as effective deterrents, often emerged from prison, she discovered through careful follow-up, considerably more entrenched in criminal networks and behaviour than when they had originally, initially entered the system. Meanwhile, in the relatively rare cases where she had experimentally, cautiously opted for community-based rehabilitation programmes instead of straightforward custodial sentences, outcomes were, nowhere near as often as she might have initially, confidently expected, actually worse; if anything, they appeared, on balance, to be measurably better on most relevant metrics she carefully tracked over subsequent years.\n\nShe began, cautiously and gradually at first, to actively seek out the accumulating academic research on rehabilitation and reoffending rates, research she readily, honestly admitted she had previously, rather too comfortably, dismissed without close examination as naive or insufficiently serious about genuine punishment and deterrence. The far more the research consistently showed, the more she felt compelled to seriously, honestly reconsider her own settled professional assumptions, assumptions that had, after all, shaped hundreds upon hundreds of concrete individual sentencing decisions over the many preceding years of her long judicial career.\n\nHer eventual, hard-won change of professional heart, when she finally, publicly discussed it candidly in a widely read and discussed legal journal article, provoked considerable and sometimes heated professional controversy. Critics accused her of having gone dramatically, irresponsibly soft; supporters praised her for having the genuine intellectual honesty and courage to publicly change her mind based on carefully accumulated evidence, however professionally uncomfortable and reputationally costly that particular admission clearly proved to be. Whatever one ultimately makes of her specific, considered conclusions, her willingness to seriously, systematically track her own decisions' actual real-world consequences, and to honestly revise her settled views accordingly when the accumulating evidence genuinely warranted it, stands as a genuinely rare and instructive example of intellectual honesty in a professional field not always, historically, especially known for it.",
        q: [
          mc("What reputation had the judge built over two decades?", ["Lenient sentencing.", "Reliably tough-on-crime, with harsher sentences than colleagues.", "Corruption.", "Inconsistency."], 1, "'one of her country's most reliably tough-on-crime voices'."),
          mc("What gradually changed her mind?", ["A single dramatic case.", "Following the life trajectories of people she'd sentenced over time.", "Pressure from colleagues.", "Nothing changed her mind."], 1, "'a slow, cumulative accumulation of specific individuals she personally sentenced, whose… life trajectories she… chose to follow'."),
          mc("What did she find about lengthy custodial sentences?", ["They worked as deterrents.", "Defendants often emerged more entrenched in criminal behaviour.", "Nothing changed.", "They were too short."], 1, "'often emerged from prison… considerably more entrenched in criminal networks and behaviour'."),
          mc("What did she find about community-based rehabilitation programmes?", ["They were worse.", "Outcomes appeared measurably better on most metrics.", "No difference.", "They were more expensive only."], 1, "'they appeared, on balance, to be measurably better on most relevant metrics'."),
          mc("How did she respond to the research she'd previously dismissed?", ["Continued to ignore it.", "Actively sought it out and reconsidered her assumptions.", "Rejected it outright.", "Delegated it to others."], 1, "'began… to actively seek out the accumulating academic research… felt compelled to seriously, honestly reconsider her own settled professional assumptions'."),
          mc("How is her change of mind characterised by the writer?", ["A weakness.", "A genuinely rare and instructive example of intellectual honesty.", "A mistake.", "Irrelevant."], 1, "'stands as a genuinely rare and instructive example of intellectual honesty'."),
        ],
      },
      p6: {
        title: "Can the justice system ever be truly fair?",
        intro: "Cuatro personas debaten si el sistema de justicia puede llegar a ser realmente justo.",
        texts: {
          A: "NADIA: I've become considerably more sceptical over the years. Whoever has more money can simply afford better lawyers, more thorough investigation, more time — and that single structural fact alone means outcomes are nowhere near as equal as the formal principle of 'equality before the law' comfortably promises on paper. Real fairness would require addressing resource disparities directly, not just guaranteeing identical formal rights to everyone.",
          B: "TOM: I share that concern, but I'd push back gently against total scepticism. Imperfect fairness is still nowhere near the same thing as no fairness at all. Legal aid, public defenders, appeals processes — these genuinely help narrow the gap, even if they clearly don't eliminate it entirely. The question isn't whether the system is perfectly fair; it's whether it's meaningfully, measurably fairer than the realistic alternatives.",
          C: "PRIYA: What I keep coming back to is how much fairness quietly depends on who happens to be actually doing the judging in each specific case. The same case, presented to different judges or different juries, can produce startlingly different outcomes. No matter how carefully we write the formal rules on paper, human judgement remains stubbornly, irreducibly variable in how those rules actually get applied in practice.",
          D: "SAM: My honest view is that we should stop expecting perfect fairness and instead focus much more concretely on specific, measurable improvements — better forensic standards, mandatory interrogation recording, more consistent, standardised sentencing guidelines. Whatever philosophical position one ultimately holds about fairness in the abstract, these concrete, specific changes demonstrably reduce errors and improve outcomes in practice.",
        },
        q: [
          mc("Who has become considerably more sceptical about fairness, citing resource disparities?", ["A", "B", "C", "D"], 0, "Nadia: 'considerably more sceptical… resource disparities'."),
          mc("Whose view most directly QUALIFIES Nadia's scepticism, distinguishing imperfect from no fairness?", ["A", "B", "C", "D"], 1, "Tom: 'Imperfect fairness is still nowhere near the same thing as no fairness at all'."),
          mc("Who focuses on the variability of human judgement across judges and juries?", ["A", "B", "C", "D"], 2, "Priya: 'how much fairness quietly depends on who happens to be actually doing the judging'."),
          mc("Who argues for focusing on concrete, measurable improvements rather than abstract fairness?", ["A", "B", "C", "D"], 3, "Sam: 'focus much more concretely on specific, measurable improvements'."),
        ],
      },
      p7: {
        title: "The evidence we choose not to see",
        text: "Every field of human endeavour, from medicine to criminal justice to economic policy, eventually accumulates a body of evidence about what genuinely works and what, despite good intentions, reliably does not. (1)___\n\nAnd yet, remarkably consistently across many different fields, practitioners and policymakers alike frequently continue implementing approaches that accumulated evidence has already fairly clearly, and repeatedly, shown to be ineffective or actively counterproductive. (2)___ Whatever the specific field in question, this troubling pattern repeats itself with striking, almost dispiriting regularity.\n\nPart of the explanation lies in simple institutional inertia. (3)___ Changing established practice requires real effort, retraining and often considerable, uncomfortable professional humility about past approaches.\n\nPart of it, more troublingly, lies in genuine vested interests. (4)___ Whoever currently benefits from existing arrangements, whether financially, professionally or reputationally, often has little immediate personal incentive to champion inconvenient change.\n\nAnd part of it, perhaps most troublingly of all, lies in simple, deeply human psychological discomfort. (5)___ Admitting that a longstanding, deeply held professional approach was substantially mistaken can feel, to those who built entire careers around it, uncomfortably close to a form of personal failure.\n\nOvercoming this pattern requires more than simply generating yet more evidence, however methodologically rigorous. (6)___ It requires building institutional cultures genuinely willing to act on uncomfortable evidence, whatever the professional and psychological cost of doing so honestly.",
        options: [
          "Some of it, plainly, works far better than the rest.",           // A -> gap 1
          "The judge's own story is far from a rare, isolated exception.",  // B -> gap 2
          "Old habits, once entrenched, resist even good evidence.",       // C -> gap 3
          "Someone, after all, usually benefits from things staying put.", // D -> gap 4
          "Being wrong, for years, is a hard thing to fully accept.",       // E -> gap 5
          "Evidence alone rarely dislodges an entrenched way of working.", // F -> gap 6
          "Every field always immediately adopts whatever works best.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: parte funciona mejor que el resto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la historia de la jueza no es rara."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los viejos hábitos resisten la evidencia."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: alguien se beneficia de que nada cambie."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: aceptar haberse equivocado es duro."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la evidencia sola rara vez basta."),
        ],
      },
      p8: {
        title: "Four professionals discuss changing their minds based on evidence",
        text: "Read what four professionals say about revising their views based on evidence.\n\nA) NADIA: I spent years as a strong advocate for one particular teaching method, insisting on using it consistently despite mounting evidence it wasn't nearly as effective as I'd confidently claimed. Whoever first showed me the actual comparative data, I honestly don't fully remember now, but I'm genuinely grateful they persisted despite my initial, rather defensive resistance.\n\nB) TOM: I work in public health, and I've learned that admitting a policy simply isn't working is nowhere near as career-damaging as I once, rather anxiously, feared it would be. If anything, colleagues respect honest reassessment considerably more than stubborn, defensive persistence in an approach that the accumulating evidence clearly no longer supports.\n\nC) PRIYA: What I've found hardest, honestly, isn't changing my own individual mind — that part's relatively straightforward once you actually see solid evidence. It's persuading an entire institution, whatever its formal, stated official policy happens to be, to actually change established practice at scale. Individual conviction and genuine institutional change are nowhere near the same thing in practice.\n\nD) SAM: I used to believe, rather too confidently, that more data always straightforwardly leads to better decisions. I've since become considerably more sceptical of that comfortable assumption. No matter how much rigorous evidence accumulates, institutional inertia and simple vested interests can still, stubbornly, win out over what the evidence actually, clearly shows.\n",
        q: [
          mc("Who advocated for a teaching method despite mounting contrary evidence?", ["A", "B", "C", "D"], 0, "Nadia: 'I spent years as a strong advocate for one particular teaching method'."),
          mc("Who works in public health and found honesty less career-damaging than feared?", ["A", "B", "C", "D"], 1, "Tom: 'I work in public health… nowhere near as career-damaging as I once… feared'."),
          mc("Who finds institutional change harder than changing their own mind?", ["A", "B", "C", "D"], 2, "Priya: 'persuading an entire institution… to actually change established practice at scale'."),
          mc("Who has become sceptical that more data always leads to better decisions?", ["A", "B", "C", "D"], 3, "Sam: 'I've since become considerably more sceptical of that comfortable assumption'."),
          mc("Who is grateful someone persisted despite their initial resistance?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm genuinely grateful they persisted despite my initial… resistance'."),
          mc("Who says colleagues respect honest reassessment more than stubborn persistence?", ["A", "B", "C", "D"], 1, "Tom: 'colleagues respect honest reassessment considerably more than stubborn, defensive persistence'."),
          mc("Who says individual conviction and institutional change are 'nowhere near the same thing'?", ["A", "B", "C", "D"], 2, "Priya: 'Individual conviction and genuine institutional change are nowhere near the same thing'."),
          mc("Who notes that vested interests can still win out over clear evidence?", ["A", "B", "C", "D"], 3, "Sam: 'institutional inertia and simple vested interests can still… win out'."),
          mc("Who found the hardest part wasn't changing their own mind?", ["A", "B", "C", "D"], 2, "Priya: 'What I've found hardest… isn't changing my own individual mind'."),
          mc("Who no longer fears that admitting a policy failed is career-damaging?", ["A", "B", "C", "D"], 1, "Tom: 'admitting a policy simply isn't working is nowhere near as career-damaging as I once… feared'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre la equidad se plantearon dos ideas:\n· equal treatment under the law is enough to ensure fairness (el trato igualitario basta)\n· true fairness requires compensating for unequal starting points (la equidad exige compensar el punto de partida)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de la semana (relativa reducida, estilo indirecto preciso, o comparación avanzada). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'A time I changed my mind about something important' — reflexiona sobre un cambio de opinión propio basado en evidencia.\n· CARTA a una institución proponiendo un cambio concreto basado en evidencia que has observado: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two lawyers discussing a case. Woman: The defendant, whose reputation was already damaged, insisted on testifying himself despite our advice against it. Man: Whatever he says on the stand, I doubt it changes the jury's mind much at this stage. Extract Two. You hear a sociologist discussing inequality. Woman: The wealth gap here is by far the widest I've ever studied professionally. Man: Whoever designed the current tax system clearly wasn't thinking primarily about the bottom half of earners. Extract Three. You hear two friends discussing a career change. Man: I remember feeling nowhere near ready to leave my old, stable job, but I did it anyway, eventually. Woman: No matter how uncertain it felt at the time, it sounds like it worked out considerably better than you'd expected.", [
      mc("1. What did the defendant insist on doing?", ["Staying silent.", "Testifying himself, against legal advice.", "Pleading guilty."], 1, "'insisted on testifying himself despite our advice against it'."),
      mc("2. What does the man think about the defendant's testimony?", ["It will change everything.", "It probably won't change the jury's mind much.", "It's irrelevant to the case."], 1, "'I doubt it changes the jury's mind much'."),
      mc("3. How does the sociologist describe the wealth gap?", ["Average.", "By far the widest she's studied.", "Narrowing."], 1, "'by far the widest I've ever studied'."),
      mc("4. What does the man imply about the tax system's designers?", ["They favoured everyone equally.", "They weren't thinking primarily about lower earners.", "They didn't understand taxes."], 1, "'clearly wasn't thinking primarily about the bottom half of earners'."),
      mc("5. How did the man feel about leaving his old job?", ["Fully confident.", "Nowhere near ready, but did it anyway.", "Indifferent."], 1, "'nowhere near ready to leave my old, stable job'."),
      mc("6. How did it turn out, according to the woman?", ["Worse than expected.", "Considerably better than expected.", "Exactly as expected."], 1, "'considerably better than you'd expected'."),
    ]),

    ...speakingParts({ p1: "si has cambiado alguna vez de opinión sobre algo importante y qué te hizo hacerlo", p2: "dos imágenes de la toma de decisiones (un juez deliberando solo/a y un grupo debatiendo una política pública): compáralas y especula sobre la calidad de sus decisiones", p3: "qué ayuda más a tomar decisiones justas (la evidencia, la diversidad de perspectivas, la transparencia, la revisión constante, la humildad intelectual): comentadlo y elegid lo más importante", p4: "la justicia, la evidencia y el cambio de opinión: si las instituciones son capaces de aprender de sus errores, si deberíamos confiar más en la evidencia que en la intuición y qué hace falta para lograr un cambio genuino" }),

    SUMMARY("Resumen de la Semana 4 (C1)", [
      "Dominas las relativas avanzadas (reducidas, con cuantificador), el estilo indirecto sofisticado (verbos introductores precisos), los gerundios/infinitivos con matiz y la comparación avanzada/determinantes complejos.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con el tema de la justicia, la migración y la desigualdad.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los CONECTORES DEL DISCURSO y la COHESIÓN TEXTUAL avanzada.",
    ]),
    INFO("Mini-simulacro de la Semana 4", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 5."),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "Las relativas avanzadas y el estilo indirecto · La justicia y el derecho",
  description: "Relativas reducidas y con cuantificador, estilo indirecto sofisticado, gerundios/infinitivos con matiz, y comparación avanzada/determinantes complejos, con el hilo de la justicia, el derecho, los interrogatorios, la migración y la desigualdad económica. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
