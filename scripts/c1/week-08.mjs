/**
 * C1 Advanced · Semana 8 — "El subjuntivo y las estructuras de recomendación formal · La vigilancia y la privacidad".
 * Gramática: el subjuntivo formal tras verbos/adjetivos de recomendación-necesidad
 * (suggest/insist/recommend/demand + base form; it's essential/vital/imperative
 * that), estructuras alternativas (should + base form), y el subjuntivo en
 * expresiones fijas (so be it, be that as it may, come what may).
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

// ───────────────────────── DÍA 36 ─────────────────────────
const DAY36 = {
  title: "Día 36 — El subjuntivo formal tras verbos y adjetivos de recomendación · La vigilancia y la privacidad",
  description: "El subjuntivo tras suggest/insist/recommend/demand/propose + base form; tras adjetivos de necesidad-urgencia (essential/vital/imperative/crucial that); alternativa con should. Vocabulario de vigilancia y privacidad. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Usar el subjuntivo formal tras verbos y adjetivos de recomendación, propio del registro académico y periodístico.",
    summary: "Subjuntivo formal; vigilancia y privacidad; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["conjugar el verbo en presente tras 'suggest that' (❌ suggests he goes) en vez del subjuntivo (✅ suggests he go).", "olvidar que el subjuntivo NO cambia con la persona ni el tiempo (siempre base form).", "confundir 'insist that' (subjuntivo, exigir) con 'insist on' (+-ing)."],
    reviewPrompts: ["¿Cómo conjugarías el verbo en 'It is essential that every citizen ___ (have) access to this right'?", "¿Qué verbos exigen subjuntivo en inglés formal?"],
  },
  items: [
    TEXT("👋 Semana 8 del C1 — segunda mitad del curso. Hoy el SUBJUNTIVO FORMAL: una estructura poco frecuente en el habla cotidiana pero clave en Reading académico y Writing formal C1. Vocabulario: la VIGILANCIA y la PRIVACIDAD."),
    GRAMMAR("El subjuntivo formal (mandative subjunctive)", `El inglés formal usa el SUBJUNTIVO (base form del verbo, SIN 's' en 3ª persona, SIN cambiar con el tiempo) tras ciertos verbos y adjetivos de recomendación, exigencia o necesidad.
VERBOS + THAT + SUBJUNTIVO: suggest, recommend, insist, demand, propose, request, urge, require.
· The committee recommends that the policy be reviewed. (NO 'is reviewed')
· She insisted that he apologise immediately. (NO 'apologises')
· They demanded that the report be published in full.
ADJETIVOS + THAT + SUBJUNTIVO (tras 'it is'): essential, vital, imperative, crucial, important, necessary, desirable.
· It is essential that every citizen have access to this right. (NO 'has')
· It is imperative that the data be protected.
ALTERNATIVA CON SHOULD (más frecuente en inglés británico, mismo significado): The committee recommends that the policy should be reviewed. It is essential that citizens should have access.
SUBJUNTIVO EN EXPRESIONES FIJAS (formal/literario): Be that as it may (sea como sea), Come what may (pase lo que pase), So be it (que así sea), If I were you (ya visto en condicionales), Suffice it to say (baste decir).
⚠️ El subjuntivo NO se conjuga: siempre 'be', 'have', 'go' (nunca 'is', 'has', 'goes'), independientemente del sujeto o el tiempo del verbo principal.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ suggests that he goes → ✅ suggests that he GO (subjuntivo, base form).\n· ❌ It is essential that data is protected → ✅ It is essential that data BE protected.\n· ❌ insisted that she apologises → ✅ insisted that she APOLOGISE.\n· El subjuntivo es un registro MUY formal; en el habla cotidiana se prefiere 'should' + base form o simplemente el infinitivo (suggest doing)."),
    grammarEx("Use of English — El subjuntivo formal", "Elige o completa con el subjuntivo correcto.", [
      mc("The report recommends that surveillance powers ___ strictly limited.", ["are", "be", "were"], 1, "subjuntivo: be (no 'are')."),
      mc("It is essential that citizens ___ aware of how their data is used.", ["are", "be", "were"], 1, "subjuntivo tras adjetivo de necesidad."),
      fb("The committee insisted that the agency ___ (disclose) its methods. (subjuntivo)", ["disclose"], "insist that + subjuntivo (base form, sin -s)."),
      mc("It is imperative that the law ___ updated to reflect new technology.", ["is", "be", "was"], 1, "subjuntivo: be."),
      mc("Privacy advocates demand that the government ___ more transparent.", ["is", "be", "was"], 1, "subjuntivo: be."),
      fb("It is vital that every user ___ (understand) the risks involved. (subjuntivo)", ["understand"], "it is vital that + subjuntivo."),
      mc("The judge proposed that the case ___ reviewed by an independent body.", ["is", "be", "was"], 1, "subjuntivo: be."),
    ]),
    GRAMMAR("Vocabulario del día — La vigilancia y la privacidad (C1)", "Léxico avanzado de vigilancia."),
    deck("C1 S8D36 — Vigilancia y privacidad", [
      ["surveillance", "vigilancia", "Mass surveillance raises serious concerns.", "sustantivo", "səˈveɪləns"],
      ["encryption", "cifrado / encriptación", "End-to-end encryption protects messages.", "sustantivo", "ɪnˈkrɪpʃn"],
      ["consent", "consentimiento", "Data collection requires informed consent.", "sustantivo", "kənˈsent"],
      ["breach", "brecha / filtración (de datos)", "The company suffered a major breach.", "sustantivo", "briːtʃ"],
      ["anonymity", "anonimato", "Some users value online anonymity.", "sustantivo", "ˌænəˈnɪməti"],
      ["intrusive", "intrusivo/a", "Critics call the practice intrusive.", "adjetivo", "ɪnˈtruːsɪv"],
      ["biometric", "biométrico/a", "Biometric data is highly sensitive.", "adjetivo", "ˌbaɪəʊˈmetrɪk"],
      ["oversight", "supervisión (institucional)", "Independent oversight remains weak.", "sustantivo", "ˈəʊvəsaɪt"],
      ["tracking", "rastreo / seguimiento", "Location tracking runs constantly.", "sustantivo", "ˈtrækɪŋ"],
      ["whistleblower", "informante / alertador/a", "A whistleblower exposed the programme.", "sustantivo", "ˈwɪslˌbləʊə"],
    ]),
    vocabEx("Vocabulario — La vigilancia y la privacidad", "Elige la opción correcta.", [
      mc("The monitoring of people's activities by authorities is ___.", ["surveillance", "consent", "anonymity"], 0, "surveillance."),
      mc("Converting data into a secure, unreadable code is ___.", ["encryption", "breach", "tracking"], 0, "encryption."),
      mc("Permission given knowingly for something to happen is ___.", ["consent", "oversight", "anonymity"], 0, "consent."),
      mc("An unauthorised access to private data is a ___.", ["breach", "consent", "encryption"], 0, "breach."),
      mc("The state of not being identifiable is ___.", ["anonymity", "surveillance", "tracking"], 0, "anonymity."),
      mc("Unpleasantly invasive of privacy is ___.", ["intrusive", "biometric", "anonymous"], 0, "intrusive."),
    ]),

    ...uoe({
      p1: {
        title: "The watched citizen",
        text: "Privacy advocates have long insisted that governments (1)___ far more transparent about the scale and scope of state surveillance programmes, many of which operate with remarkably little meaningful public oversight or democratic accountability. It is widely (2)___ that mass surveillance, whatever its stated security justifications, poses a genuine (3)___ to fundamental civil liberties that democratic societies have historically, and rightly, prized. Given the sheer volume of personal data now routinely (4)___ by both governments and private corporations alike, it is essential that robust legal frameworks (5)___ in place to prevent abuse, however well-intentioned the original justification for data collection genuinely was. Not only does unchecked surveillance pose risks to individual privacy, but it also, more (6)___, risks normalising a society in which citizens quietly self-censor, aware that their communications and movements might, at any given moment, be monitored. Whichever specific balance any given society ultimately strikes between security and privacy, it is imperative that this balance (7)___ struck through genuine, open democratic deliberation rather than being quietly imposed by unaccountable security agencies operating largely beyond meaningful public (8)___.",
        q: [
          mc("(1)", ["be", "are", "were", "is"], 0, "insist that + subjuntivo: be."),
          mc("(2)", ["believed", "thought", "known", "argued"], 0, "'widely believed that'."),
          mc("(3)", ["threat", "danger", "risk", "menace"], 0, "'poses a genuine threat'."),
          mc("(4)", ["collected", "gathered", "obtained", "compiled"], 0, "'personal data now routinely collected'."),
          mc("(5)", ["be", "are", "were", "is"], 0, "it's essential that + subjuntivo: be."),
          mc("(6)", ["insidiously", "subtly", "quietly", "covertly"], 0, "'more insidiously'."),
          mc("(7)", ["be", "is", "was", "were"], 0, "it's imperative that + subjuntivo: be."),
          mc("(8)", ["scrutiny", "review", "examination", "inspection"], 0, "'meaningful public scrutiny'."),
        ],
      },
      p2: {
        title: "Who watches the watchers",
        text: "It is (1)___ that any surveillance system, however well-intentioned in its original design, inevitably raises the uncomfortable question of who exactly watches the watchers themselves. Oversight bodies charged (2)___ monitoring intelligence agencies frequently lack the technical expertise, the security clearance, or simply the political independence genuinely required to hold well-resourced, secretive agencies properly accountable. Privacy campaigners have accordingly demanded that oversight mechanisms (3)___ substantially strengthened, proposing independent technical experts, meaningful judicial review, and considerably greater transparency about the general scope, if not the specific operational details, of surveillance programmes. Agencies themselves counter that excessive public transparency would (4)___ their own operational effectiveness, tipping off exactly the criminals and hostile actors such programmes are specifically designed to detect and disrupt. This tension between legitimate security needs and equally legitimate democratic accountability shows little (5)___ of being fully, definitively resolved any time soon. What seems reasonably clear, whichever position one ultimately finds more persuasive, is that the current, largely inadequate arrangements in many democracies fall considerably (6)___ of what genuine, meaningful accountability would actually require in practice.",
        q: [
          fb("(1)", ["inevitable", "true"], "'It is inevitable/true that'."),
          fb("(2)", ["with"], "'charged with monitoring'."),
          fb("(3)", ["be"], "demand that + subjuntivo: be."),
          fb("(4)", ["undermine", "compromise"], "'would undermine/compromise their effectiveness'."),
          fb("(5)", ["sign"], "'shows little sign of'."),
          fb("(6)", ["short"], "'fall considerably short of'."),
        ],
      },
      p3: {
        title: "The illusion of the private conversation",
        text: "Many people continue to believe, somewhat (1)___, that their private digital messages remain genuinely private, exchanged solely between themselves and their intended recipient. This assumption, however psychologically (2)___, does not always reflect the underlying technical reality. Unencrypted messages can, in principle, be intercepted at various points along their journey, and even encrypted messages typically leave behind considerable (3)___ — records of who communicated with whom, when, and for how long — that can reveal a great deal about a person's life even without ever accessing the specific content itself. It is (4)___ that ordinary users understand this distinction between content and metadata, since the latter, though seemingly less sensitive, can prove remarkably (5)___ when analysed at scale using modern data analysis techniques. Privacy researchers have accordingly urged that digital literacy education (6)___ this crucial distinction explicitly, rather than leaving users with a false, comforting sense of complete digital privacy that the underlying technical reality simply does not, in fact, (7)___.",
        items: [
          { root: "naive", accepted: ["naively"], hint: "'somewhat naively' → naively." },
          { root: "comfort", accepted: ["comforting"], hint: "'however psychologically comforting' → comforting." },
          { root: "trace", accepted: ["traces"], hint: "'considerable traces' → traces." },
          { root: "essence", accepted: ["essential"], hint: "'It is essential that' → essential." },
          { root: "reveal", accepted: ["revealing"], hint: "'remarkably revealing' → revealing." },
          { root: "address", accepted: ["address"], hint: "'education address this distinction' (subjuntivo, verbo base)." },
          { root: "support", accepted: ["support"], hint: "'the reality does not… support' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — el subjuntivo formal",
        items: [
          { s1: "The committee's recommendation was that surveillance powers should be limited.", key: "RECOMMENDS", s2: "The committee ___ that surveillance powers be limited.", accepted: ["recommends"], explanation: "recommend that + subjuntivo." },
          { s1: "It's essential for citizens to be aware of data use.", key: "AWARE", s2: "It is essential that citizens ___ of how their data is used.", accepted: ["be aware"], explanation: "it's essential that + subjuntivo." },
          { s1: "The judge proposed reviewing the case.", key: "PROPOSED", s2: "The judge ___ that the case be reviewed.", accepted: ["proposed"], explanation: "propose that + subjuntivo." },
          { s1: "They demanded transparency from the agency.", key: "DEMANDED", s2: "They ___ that the agency be more transparent.", accepted: ["demanded"], explanation: "demand that + subjuntivo." },
          { s1: "It's vital for the law to be updated.", key: "VITAL", s2: "It is vital that the law ___ updated.", accepted: ["be"], explanation: "it's vital that + subjuntivo." },
          { s1: "The whistleblower insisted on the agency disclosing its methods.", key: "INSISTED", s2: "The whistleblower ___ that the agency disclose its methods.", accepted: ["insisted"], explanation: "insist that + subjuntivo." },
        ],
      },
      p5: {
        title: "The whistleblower's dilemma",
        text: "When a mid-level intelligence analyst first discovered evidence of a surveillance programme that appeared to extend considerably beyond its officially stated legal authorisation, sweeping up the communications of ordinary citizens who had never been suspected of any wrongdoing whatsoever, she faced a decision that would ultimately define, and considerably complicate, the remainder of her entire professional life.\n\nHer internal attempts to raise concerns through official, sanctioned channels went, by her own later account, essentially nowhere. She had insisted, repeatedly and through every proper internal process available to her, that her supervisors formally investigate what she had discovered; each time, she was told, in various carefully worded ways, that the programme operated within its legal authority and that her concerns, however sincerely held, were ultimately misplaced.\n\nFaced with what she genuinely believed was a serious, ongoing violation of citizens' fundamental privacy rights, and having exhausted every reasonable internal avenue available to her, she made the fateful decision to leak detailed documentation of the programme to investigative journalists. She later explained that she had felt it essential that the public actually know what was being done, quietly and without their knowledge or meaningful consent, in their own name and using their own tax revenue.\n\nThe revelation, once published, provoked genuine, sustained global controversy. Some hailed her as a principled whistleblower who had performed an act of genuine public service at enormous personal cost and risk. Others condemned her as having recklessly compromised national security, arguing that whatever privacy concerns genuinely existed should have been addressed through proper, sanctioned internal channels rather than through unauthorised public disclosure.\n\nThe legal consequences she personally faced proved severe. Prosecutors demanded that she be charged under laws originally designed for espionage rather than for the kind of public-interest disclosure she had actually, demonstrably made. She was forced into a prolonged, genuinely difficult exile, unable to return to her own home country without facing near-certain lengthy imprisonment.\n\nYet the broader, longer-term consequences of her specific disclosure proved, on balance, considerably more complicated than either her fiercest critics or her most enthusiastic supporters had initially, confidently predicted. Legislative reforms followed in several countries, imposing meaningfully greater oversight requirements on surveillance programmes. Technology companies, partly in direct response to the public concern her revelations had generated, invested substantially more heavily in encryption technology specifically designed to protect ordinary users' genuine privacy.\n\nHer case has since become a genuinely central, frequently cited reference point in ongoing debates about whistleblowing, national security and the proper limits of state surveillance. It raises questions that remain, even now, entirely unresolved: when, if ever, is it justified to break the law in service of a greater public good? And who, ultimately, should genuinely decide where that difficult, contested line actually lies?",
        q: [
          mc("What did the analyst discover?", ["Nothing significant.", "A surveillance programme extending beyond its stated legal authorisation.", "A funding shortage.", "A minor technical error."], 1, "'evidence of a surveillance programme that appeared to extend considerably beyond its officially stated legal authorisation'."),
          mc("What happened when she raised concerns internally?", ["She was praised.", "Her concerns went essentially nowhere, dismissed as misplaced.", "The programme was immediately stopped.", "She was promoted."], 1, "'she was told… that the programme operated within its legal authority and that her concerns… were ultimately misplaced'."),
          mc("What did she eventually do?", ["Nothing further.", "Leaked detailed documentation to investigative journalists.", "Resigned quietly.", "Destroyed the evidence."], 1, "'she made the fateful decision to leak detailed documentation… to investigative journalists'."),
          mc("What legal consequences did she face?", ["None.", "Prosecution under espionage laws and forced exile.", "A warning only.", "A promotion."], 1, "'Prosecutors demanded that she be charged under laws originally designed for espionage… forced into a prolonged… exile'."),
          mc("What broader consequences followed her disclosure?", ["Nothing changed.", "Legislative reforms and greater investment in encryption technology.", "Increased surveillance.", "Her immediate pardon."], 1, "'Legislative reforms followed… greater oversight requirements… invested substantially more heavily in encryption technology'."),
          mc("What unresolved question does her case raise?", ["Whether surveillance exists.", "When it's justified to break the law for a greater public good, and who decides.", "Whether she was guilty.", "How encryption works."], 1, "'when… is it justified to break the law in service of a greater public good? And who… should genuinely decide'."),
        ],
      },
      p6: {
        title: "Is mass surveillance ever justified?",
        intro: "Cuatro personas debaten si la vigilancia masiva está alguna vez justificada.",
        texts: {
          A: "NADIA: I firmly believe mass surveillance can never be genuinely justified in a free society. It is essential that we resist the seductive argument that security always trumps privacy — history shows repeatedly that surveillance powers, once granted, rarely get meaningfully rolled back, and are frequently misused well beyond their original stated purpose.",
          B: "TOM: I understand that concern, but I'd argue targeted, properly overseen surveillance genuinely differs from indiscriminate mass surveillance. It is imperative that we distinguish between the two rather than treating all surveillance as equally objectionable. Properly authorised, judicially supervised monitoring of specific, genuine threats seems to me defensible in ways that bulk collection of everyone's data simply isn't.",
          C: "PRIYA: My concern is less about the principle and more about the practical reality of oversight. Even surveillance that's theoretically 'targeted' and 'properly overseen' has repeatedly, demonstrably expanded well beyond its original scope once granted. Whichever safeguards get proposed, I remain deeply sceptical they'll actually be respected once agencies have the underlying technical capability in hand.",
          D: "SAM: What I keep coming back to is that this entire debate assumes a false binary between total surveillance and none at all. It is vital that we consider more nuanced, proportionate approaches: strict time limits, mandatory judicial warrants for each individual case, genuine external audit. The real question isn't whether but precisely how surveillance should be meaningfully constrained.",
        },
        q: [
          mc("Who firmly believes mass surveillance can never be genuinely justified?", ["A", "B", "C", "D"], 0, "Nadia: 'mass surveillance can never be genuinely justified in a free society'."),
          mc("Whose view most directly QUALIFIES Nadia's, distinguishing targeted from mass surveillance?", ["A", "B", "C", "D"], 1, "Tom: 'targeted, properly overseen surveillance genuinely differs from indiscriminate mass surveillance'."),
          mc("Who is sceptical that safeguards will actually be respected in practice?", ["A", "B", "C", "D"], 2, "Priya: 'I remain deeply sceptical they'll actually be respected once agencies have the… capability'."),
          mc("Who argues the real question is how, not whether, surveillance should be constrained?", ["A", "B", "C", "D"], 3, "Sam: 'The real question isn't whether but precisely how surveillance should be meaningfully constrained'."),
        ],
      },
      p7: {
        title: "The data you didn't know you gave away",
        text: "Most people, asked directly, would say they care deeply about their own personal privacy. (1)___\n\nYet the gap between this stated concern and actual everyday behaviour is, researchers studying the phenomenon have repeatedly found, genuinely striking. (2)___ People routinely accept lengthy, unread terms of service, share considerable personal detail on social media, and carry location-tracking devices in their own pockets at almost every moment of the day.\n\nThis apparent contradiction, sometimes termed the 'privacy paradox', has several plausible explanations. (3)___ The immediate, tangible convenience of a service is psychologically vivid and present; the abstract, diffuse future privacy cost feels considerably more remote and uncertain.\n\nCompanies collecting this data understand this psychological asymmetry extremely well, and structure their own systems accordingly. (4)___ Lengthy, deliberately impenetrable privacy policies and default settings that favour maximum data collection both exploit this same well-documented gap between stated preference and actual, observed behaviour.\n\nSome researchers argue this places a genuine moral burden on companies and regulators, rather than simply on individual consumers alone. (5)___ If ordinary people cannot reasonably be expected to fully understand or meaningfully act on the true privacy implications of every single decision, then the responsibility for protecting them shifts correspondingly elsewhere.\n\nWhatever the eventual regulatory response, understanding this psychological gap matters considerably for how we think about privacy going forward. (6)___ Simply telling people to 'read the terms and conditions more carefully' addresses only a small fraction of a considerably deeper, more structural problem.",
        options: [
          "That professed concern rarely translates smoothly into practice.",  // A -> gap 1
          "Stated values and everyday habits often quietly diverge.",         // B -> gap 2
          "Immediate convenience simply outweighs a distant, abstract cost.", // C -> gap 3
          "Design choices can quietly nudge behaviour in a chosen direction.", // D -> gap 4
          "Responsibility, on this view, belongs higher up the chain.",       // E -> gap 5
          "Individual willpower alone was never going to fix this.",         // F -> gap 6
          "Nobody has ever expressed any concern about their own privacy.",   // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la preocupación no se traduce en práctica."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: valores y hábitos divergen."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la conveniencia inmediata pesa más."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el diseño empuja el comportamiento."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la responsabilidad está más arriba."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la fuerza de voluntad no basta."),
        ],
      },
      p8: {
        title: "Four people discuss their own approach to privacy",
        text: "Read what four people say about how they personally approach privacy in the digital age.\n\nA) NADIA: I've become genuinely meticulous about privacy settings, insisting that every single app I install be properly configured before I use it seriously. It's time-consuming, certainly, but given how much personal data companies collect by default, I feel it's essential that I take this level of care myself.\n\nB) TOM: I'll be honest, I've largely given up trying to manage my own digital privacy in any comprehensive way. It is, quite simply, exhausting to fully track, and I've concluded the responsibility genuinely lies more with companies and regulators than with individual users like myself trying to read endless terms and conditions.\n\nC) PRIYA: I work in data protection professionally, and what strikes me most is how few people I meet actually understand what they're routinely agreeing to. I always insist that friends and family at least read the basic summary before accepting anything significant, though I recognise that's a genuinely uphill battle against deliberately impenetrable legal language.\n\nD) SAM: I use encrypted messaging apps for anything genuinely sensitive, and I've come to believe it's imperative that ordinary people understand basic digital security, not just dedicated privacy specialists. It shouldn't require technical expertise to have a reasonable, basic expectation of genuine privacy.\n",
        q: [
          mc("Who insists every app be properly configured before use?", ["A", "B", "C", "D"], 0, "Nadia: 'insisting that every single app I install be properly configured'."),
          mc("Who has largely given up managing their own digital privacy comprehensively?", ["A", "B", "C", "D"], 1, "Tom: 'I've largely given up trying to manage my own digital privacy'."),
          mc("Who works in data protection professionally?", ["A", "B", "C", "D"], 2, "Priya: 'I work in data protection professionally'."),
          mc("Who uses encrypted messaging for anything sensitive?", ["A", "B", "C", "D"], 3, "Sam: 'I use encrypted messaging apps for anything genuinely sensitive'."),
          mc("Who believes responsibility lies more with companies and regulators?", ["A", "B", "C", "D"], 1, "Tom: 'the responsibility genuinely lies more with companies and regulators'."),
          mc("Who is struck by how few people understand what they're agreeing to?", ["A", "B", "C", "D"], 2, "Priya: 'how few people I meet actually understand what they're routinely agreeing to'."),
          mc("Who believes ordinary people should understand basic digital security?", ["A", "B", "C", "D"], 3, "Sam: 'it's imperative that ordinary people understand basic digital security'."),
          mc("Who finds managing privacy exhausting to track fully?", ["A", "B", "C", "D"], 1, "Tom: 'It is, quite simply, exhausting to fully track'."),
          mc("Who insists friends and family read at least the basic summary?", ["A", "B", "C", "D"], 2, "Priya: 'I always insist that friends and family at least read the basic summary'."),
          mc("Who believes privacy shouldn't require technical expertise?", ["A", "B", "C", "D"], 3, "Sam: 'It shouldn't require technical expertise to have a reasonable… expectation of genuine privacy'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la vigilancia se plantearon dos ideas:\n· mass surveillance is necessary for national security (la vigilancia masiva es necesaria)\n· mass surveillance poses an unacceptable threat to civil liberties (supone una amenaza inaceptable)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS estructuras de SUBJUNTIVO formal (it is essential that, the report recommends that…). Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para una organización de derechos digitales sobre cómo proteger mejor la privacidad de los usuarios: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'What I've learned about protecting my own privacy online' — reflexiona con ejemplos personales.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two privacy campaigners discussing a new law. Woman: The report insists that surveillance powers be strictly limited by independent judicial oversight. Man: It's essential that this recommendation actually be implemented, not just published and forgotten. Extract Two. You hear a security expert discussing encryption. Woman: It is vital that ordinary users understand encryption isn't just for criminals — it protects everyone's basic privacy. Man: Agreed. Companies really should ensure that encryption be enabled by default, not buried in obscure settings. Extract Three. You hear two friends discussing a data breach. Man: The company insisted that the breach be disclosed immediately once it was properly confirmed. Woman: That's reassuring, actually. Given how many companies try to quietly cover these things up instead.", [
      mc("1. What does the report insist on?", ["No oversight at all.", "Surveillance powers being strictly limited by judicial oversight.", "More surveillance powers."], 1, "'the report insists that surveillance powers be strictly limited'."),
      mc("2. What does the man say is essential?", ["Ignoring the recommendation.", "The recommendation actually being implemented.", "Publishing more reports."], 1, "'It's essential that this recommendation actually be implemented'."),
      mc("3. What does the woman say about encryption?", ["It's only for criminals.", "It protects everyone's basic privacy.", "It's unnecessary."], 1, "'encryption isn't just for criminals — it protects everyone's basic privacy'."),
      mc("4. What does the man say companies should ensure?", ["Nothing.", "Encryption being enabled by default.", "Higher prices."], 1, "'companies really should ensure that encryption be enabled by default'."),
      mc("5. What did the company insist regarding the breach?", ["Hiding it.", "Disclosing it immediately once confirmed.", "Ignoring it."], 1, "'The company insisted that the breach be disclosed immediately'."),
      mc("6. How does the woman feel about this?", ["Concerned.", "Reassured.", "Indifferent."], 1, "'That's reassuring, actually'."),
    ]),

    ...speakingParts({ p1: "cuánto te preocupa tu privacidad online y qué medidas tomas para protegerla", p2: "dos imágenes de la vigilancia (cámaras de seguridad en una calle concurrida y alguien usando una app con cifrado en su móvil): compáralas y especula sobre lo que representan para la privacidad", p3: "qué debería priorizarse en la protección de datos (leyes más estrictas, mejor educación digital, cifrado por defecto, supervisión judicial independiente, responsabilidad empresarial): comentadlo y elegid lo más eficaz", p4: "la vigilancia y la privacidad: si la vigilancia masiva está alguna vez justificada, si hemos renunciado demasiado fácilmente a nuestra privacidad y qué papel deberían tener los informantes cuando descubren abusos" }),

    SUMMARY("Resumen del Día 36", [
      "Subjuntivo formal tras verbos de recomendación/exigencia (suggest/insist/recommend/demand + base form, SIN 's' ni cambio de tiempo).",
      "Tras adjetivos de necesidad (it is essential/vital/imperative that + base form). Alternativa con should + base form (más frecuente en inglés británico).",
      "Vocabulario de vigilancia y privacidad. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 37", "Escribe 6 frases usando el subjuntivo formal tras verbos o adjetivos de recomendación. Repasa las flashcards. Mañana: la nominalización y los sustantivos abstractos complejos."),
  ],
};

// ───────────────────────── DÍA 37 ─────────────────────────
const DAY37 = {
  title: "Día 37 — La nominalización académica · El clima y la política energética",
  description: "Nominalización (convertir verbos/adjetivos en sustantivos abstractos para el registro académico); densidad léxica; sustantivos abstractos complejos con preposición fija. Vocabulario de política energética. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Convertir estructuras verbales en sustantivos abstractos para lograr un registro académico denso y formal.",
    summary: "Nominalización académica; clima y política energética; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["nominalizar en exceso hasta volver el texto ilegible.", "elegir el sufijo incorrecto al nominalizar (-tion/-sion/-ment/-ance/-ence).", "olvidar la preposición fija que acompaña a muchos sustantivos abstractos (reliance ON, not reliance IN)."],
    reviewPrompts: ["¿Cómo nominalizarías 'to reduce emissions significantly'?", "¿Qué preposición sigue a 'reliance'? ¿Y a 'commitment'?"],
  },
  items: [
    TEXT("🔁 Ayer, el subjuntivo formal. Hoy la NOMINALIZACIÓN ACADÉMICA: convertir verbos y adjetivos en sustantivos abstractos, la marca distintiva del inglés académico/periodístico denso. Vocabulario: el CLIMA y la POLÍTICA ENERGÉTICA."),
    GRAMMAR("La nominalización académica", `La NOMINALIZACIÓN convierte un VERBO o ADJETIVO en un SUSTANTIVO ABSTRACTO, característica central del registro académico/periodístico formal (mucho más denso que el habla cotidiana).
· Verbo → sustantivo: reduce → reduction, decide → decision, argue → argument, fail → failure, commit → commitment, rely → reliance, respond → response, achieve → achievement.
· Adjetivo → sustantivo: significant → significance, aware → awareness, complex → complexity, vulnerable → vulnerability, resilient → resilience.
EJEMPLO DE TRANSFORMACIÓN (de estilo verbal a nominal):
· Verbal (más informal): They decided to reduce emissions significantly, which had a big impact.
· Nominal (más formal/académico): Their decision to significantly reduce emissions had a considerable impact.
SUSTANTIVOS ABSTRACTOS CON PREPOSICIÓN FIJA (memorizar como bloque):
· reliance ON, commitment TO, awareness OF, resistance TO, insight INTO, emphasis ON, impact ON, approach TO.
⚠️ La nominalización EN EXCESO vuelve el texto denso y difícil de leer; úsala con MODERACIÓN, alternando con estructuras verbales más directas para dar ritmo.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ reliance IN fossil fuels → ✅ reliance ON fossil fuels.\n· ❌ commitment FOR reducing emissions → ✅ commitment TO reducing emissions.\n· ❌ Sufijo incorrecto: 'decideness' → ✅ decision; 'failment' → ✅ failure.\n· No nominalices CADA verbo de una frase — el resultado se vuelve ilegible; alterna estilo verbal y nominal."),
    grammarEx("Use of English — Nominalización académica", "Elige la nominalización correcta o la preposición fija.", [
      mc("Their ___ to reduce emissions proved largely symbolic. (decide)", ["decision", "decideness", "decided"], 0, "decide → decision."),
      mc("The country's heavy ___ on fossil fuels remains a serious concern. (rely)", ["reliance", "reliable", "reliably"], 0, "rely → reliance."),
      mc("Growing public ___ of the climate crisis has shifted policy. (aware)", ["awareness", "awared", "awarely"], 0, "aware → awareness."),
      fb("The policy's ___ (fail) to meet its targets drew criticism. (nominaliza)", ["failure"], "fail → failure."),
      mc("Their ___ to renewable energy remains only partial. (commit)", ["commitment", "committed", "committing"], 0, "commit → commitment."),
      fb("Reliance ___ imported oil leaves the country vulnerable. (preposición fija)", ["on"], "reliance ON."),
      fb("Their commitment ___ reducing emissions remains untested. (preposición fija)", ["to"], "commitment TO."),
    ]),
    GRAMMAR("Vocabulario del día — El clima y la política energética (C1)", "Léxico avanzado de política climática."),
    deck("C1 S8D37 — Clima y política energética", [
      ["decarbonisation", "descarbonización", "Decarbonisation requires major investment.", "sustantivo", "diːˌkɑːbənaɪˈzeɪʃn"],
      ["emissions target", "objetivo de emisiones", "The country missed its emissions target.", "sustantivo", "ɪˈmɪʃnz ˈtɑːɡɪt"],
      ["subsidy", "subvención", "Fossil fuel subsidies remain substantial.", "sustantivo", "ˈsʌbsədi"],
      ["mitigation", "mitigación (del cambio climático)", "Mitigation efforts remain insufficient.", "sustantivo", "ˌmɪtɪˈɡeɪʃn"],
      ["resilience", "resiliencia (climática)", "Cities must build climate resilience.", "sustantivo", "rɪˈzɪliəns"],
      ["offset", "compensar (emisiones) / compensación", "Companies offset emissions through planting.", "verbo/sustantivo", "ˈɒfset"],
      ["greenwashing", "lavado de imagen verde", "Critics accuse the firm of greenwashing.", "sustantivo", "ˈɡriːnwɒʃɪŋ"],
      ["transition", "transición (energética)", "The energy transition faces real obstacles.", "sustantivo", "trænˈzɪʃn"],
      ["stranded assets", "activos varados", "Fossil fuel reserves risk becoming stranded assets.", "sustantivo", "ˈstrændɪd ˈæsets"],
      ["accountability", "rendición de cuentas", "Climate accountability remains weak globally.", "sustantivo", "əˌkaʊntəˈbɪləti"],
    ]),
    vocabEx("Vocabulario — El clima y la política energética", "Elige la opción correcta.", [
      mc("The process of reducing carbon emissions to near zero is ___.", ["decarbonisation", "mitigation", "offsetting"], 0, "decarbonisation."),
      mc("Government financial support for an industry is a ___.", ["subsidy", "target", "offset"], 0, "subsidy."),
      mc("Efforts to reduce the severity of climate change are ___.", ["mitigation", "resilience", "transition"], 0, "mitigation."),
      mc("Falsely presenting a company as environmentally friendly is ___.", ["greenwashing", "decarbonisation", "mitigation"], 0, "greenwashing."),
      mc("Investments that could lose all value due to climate policy are ___.", ["stranded assets", "subsidies", "targets"], 0, "stranded assets."),
      mc("The ability to recover from climate-related shocks is ___.", ["resilience", "mitigation", "transition"], 0, "resilience."),
    ]),

    ...uoe({
      p1: {
        title: "The politics of delay",
        text: "The persistent (1)___ between what climate science demands and what actual political systems have thus far delivered represents one of the defining challenges of contemporary governance. Governments' repeated (2)___ to meet their own stated emissions targets stems not primarily from any genuine scientific (3)___ about the underlying threat, but from the considerable political difficulty of imposing short-term costs for the sake of long-term, diffuse benefits that future generations, rather than current voters, will primarily experience. This structural (4)___ between short electoral cycles and long-term climate consequences helps explain why meaningful policy action so often lags well behind scientific (5)___. Growing public (6)___ of the crisis has not, on its own, proved sufficient to overcome this deeper structural problem. What seems increasingly clear is that genuine (7)___ to decarbonisation requires institutional reforms extending well beyond any single election cycle, precisely because the underlying (8)___ between political incentives and climate reality shows little sign of resolving itself without deliberate, sustained structural change.",
        q: [
          mc("(1)", ["gap", "difference", "divide", "distance"], 0, "'the persistent gap'."),
          mc("(2)", ["failure", "failing", "fails", "failed"], 0, "'governments' repeated failure' (nominalización)."),
          mc("(3)", ["uncertainty", "doubt", "confusion", "hesitation"], 0, "'genuine scientific uncertainty'."),
          mc("(4)", ["mismatch", "gap", "conflict", "tension"], 3, "'This structural tension'."),
          mc("(5)", ["consensus", "agreement", "understanding", "opinion"], 0, "'scientific consensus'."),
          mc("(6)", ["awareness", "knowledge", "understanding", "recognition"], 0, "'Growing public awareness'."),
          mc("(7)", ["commitment", "dedication", "devotion", "pledge"], 0, "'genuine commitment to decarbonisation'."),
          mc("(8)", ["mismatch", "gap", "tension", "conflict"], 2, "'the underlying tension'."),
        ],
      },
      p2: {
        title: "Who bears the transition's cost",
        text: "The transition away from fossil fuels, however (1)___ necessary in aggregate terms, does not distribute its costs and benefits (2)___. Workers in fossil fuel industries face genuine, immediate job losses, while the broader benefits of decarbonisation accrue (3)___ diffusely, across society as a whole and across future generations not yet born. This asymmetry between concentrated costs and diffuse benefits helps explain (4)___ transition policies so often face fierce, well-organised local resistance despite their broad overall social benefit. Reliance (5)___ market mechanisms alone, without deliberate attention to this distributional problem, risks generating a political backlash that could ultimately undermine public support (6)___ climate action more broadly. Policymakers increasingly recognise that genuine commitment (7)___ a fair transition requires not merely reducing aggregate emissions but also ensuring that displaced workers receive meaningful support, rather than simply becoming collateral damage in an otherwise economically necessary and broadly beneficial transformation.",
        q: [
          fb("(1)", ["genuinely"], "'however genuinely necessary'."),
          fb("(2)", ["evenly", "equally"], "'costs and benefits… evenly'."),
          fb("(3)", ["more"], "'accrue more diffusely'."),
          fb("(4)", ["why"], "'helps explain why transition policies'."),
          fb("(5)", ["on"], "'Reliance on market mechanisms'."),
          fb("(6)", ["for"], "'public support for climate action'."),
          fb("(7)", ["to"], "'commitment to a fair transition'."),
        ],
      },
      p3: {
        title: "The greenwashing problem",
        text: "As public (1)___ of climate issues has grown, so too has the commercial incentive for companies to present themselves as environmentally responsible, regardless of whether their actual underlying practices genuinely warrant such a characterisation. This phenomenon, widely termed 'greenwashing', represents a considerable obstacle to genuine climate (2)___, since it allows companies to capture the reputational benefits of apparent environmental (3)___ without undertaking the substantive, often costly changes that authentic sustainability genuinely requires. Regulatory (4)___ to this problem has, until relatively recently, remained remarkably weak in most jurisdictions, allowing companies considerable latitude in how they characterise their own environmental credentials. Growing recognition of this (5)___ has prompted several governments to introduce stricter rules governing environmental claims, requiring genuine, verifiable evidence rather than mere aspirational (6)___. Whether such regulatory tightening will prove sufficient to meaningfully address the underlying (7)___ between corporate marketing and corporate practice remains, for the moment, a genuinely open (8)___.",
        items: [
          { root: "aware", accepted: ["awareness"], hint: "'public awareness of climate issues' → awareness." },
          { root: "progress", accepted: ["progress"], hint: "'genuine climate progress' (sustantivo)." },
          { root: "responsible", accepted: ["responsibility"], hint: "'apparent environmental responsibility' → responsibility." },
          { root: "respond", accepted: ["response"], hint: "'Regulatory response to this problem' → response." },
          { root: "problem", accepted: ["problem"], hint: "'recognition of this problem' (sustantivo)." },
          { root: "claim", accepted: ["claims"], hint: "'aspirational claims' → claims." },
          { root: "mismatch", accepted: ["mismatch"], hint: "'the underlying mismatch' (sustantivo)." },
          { root: "question", accepted: ["question"], hint: "'a genuinely open question' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — nominalización académica",
        items: [
          { s1: "They decided to reduce emissions, which had a big impact.", key: "DECISION", s2: "Their ___ to reduce emissions had a considerable impact.", accepted: ["decision"], explanation: "decide → decision (nominalización)." },
          { s1: "The country relies heavily on fossil fuels.", key: "RELIANCE", s2: "The country's heavy ___ on fossil fuels is concerning.", accepted: ["reliance"], explanation: "rely → reliance." },
          { s1: "The policy failed to meet its targets.", key: "FAILURE", s2: "The policy's ___ to meet its targets drew criticism.", accepted: ["failure"], explanation: "fail → failure." },
          { s1: "People have become increasingly aware of the climate crisis.", key: "AWARENESS", s2: "Growing ___ of the climate crisis has shifted opinion.", accepted: ["awareness"], explanation: "aware → awareness." },
          { s1: "They committed to reducing emissions.", key: "COMMITMENT", s2: "Their ___ to reducing emissions remains untested.", accepted: ["commitment"], explanation: "commit → commitment." },
          { s1: "Governments responded slowly to the crisis.", key: "RESPONSE", s2: "Governments' slow ___ to the crisis drew criticism.", accepted: ["response"], explanation: "respond → response." },
        ],
      },
      p5: {
        title: "The village that generates more than it needs",
        text: "In a remote, windswept region once known primarily for chronic economic decline and persistent, stubborn unemployment, a small rural community's transformation into a net exporter of renewable energy has become something of a celebrated case study among energy policy researchers studying successful local transitions to renewable power generation.\n\nThe community's transformation began, somewhat unexpectedly, with a modest local initiative to install a handful of wind turbines on communally owned land, motivated initially less by any grand environmental commitment than by simple economic necessity following the closure of the area's last remaining significant local employer. What began as a pragmatic response to economic hardship gradually evolved, over the following decade, into something considerably more ambitious.\n\nThe community's approach to ownership proved crucial to its eventual, considerable success. Rather than leasing land to a distant, profit-focused commercial energy company, as many comparable rural communities had done elsewhere with decidedly mixed results, residents established a community-owned cooperative that retained direct ownership of the generating assets themselves. This structural decision meant that profits from energy generation stayed substantially within the local community, rather than flowing primarily to distant shareholders with little genuine connection to the area itself.\n\nThe cooperative's revenue, once the initial substantial capital investment had been fully repaid, began funding a considerable range of local community projects: subsidised heating for elderly residents facing genuine winter fuel poverty, a renovated community centre, and a modest but meaningful local scholarship fund supporting young people from the area pursuing further education elsewhere.\n\nCritics of the community energy model more broadly have pointed to the considerable upfront capital and specialised technical expertise required, resources that many comparably situated rural communities simply lack the initial access to. The cooperative's own founders acknowledge this genuine limitation freely, while arguing that their own experience nonetheless demonstrates the model's genuine underlying viability when sufficient initial support, whether from sympathetic government programmes or patient private investors, can actually be secured at the crucial early stage.\n\nWhat the community's experience most clearly illustrates, researchers who have studied the case in detail generally agree, is that the energy transition need not inevitably mean simply replacing one set of distant, extractive corporate interests, previously focused on fossil fuels, with another set focused instead on renewables. Community ownership, they argue, offers a genuinely different model — one in which the communities hosting renewable energy infrastructure directly, substantially share in its very real economic benefits, rather than merely hosting the infrastructure itself while profits flow elsewhere entirely.\n\nThe village's story has since attracted considerable international attention, with delegations from other struggling rural communities visiting regularly to study the model directly and assess its potential broader applicability to their own, often rather different, local circumstances and resources.",
        q: [
          mc("What was the community previously known for?", ["Wealth.", "Chronic economic decline and persistent unemployment.", "Tourism.", "Industry."], 1, "'once known primarily for chronic economic decline and persistent, stubborn unemployment'."),
          mc("What motivated the initial wind turbine installation?", ["Environmental idealism alone.", "Economic necessity following the closure of the last major employer.", "Government mandate.", "Foreign investment."], 1, "'motivated initially less by any grand environmental commitment than by simple economic necessity'."),
          mc("What ownership structure did the community choose?", ["A distant commercial company.", "A community-owned cooperative retaining direct ownership.", "Government ownership.", "Foreign shareholders."], 1, "'residents established a community-owned cooperative that retained direct ownership of the generating assets themselves'."),
          mc("What did cooperative revenue eventually fund?", ["Nothing local.", "Subsidised heating, a community centre, and a scholarship fund.", "Shareholder dividends only.", "New turbines only."], 1, "'subsidised heating for elderly residents… a renovated community centre, and a modest… scholarship fund'."),
          mc("What limitation do critics point to?", ["It's illegal.", "The considerable upfront capital and technical expertise required.", "It doesn't generate enough power.", "It's environmentally harmful."], 1, "'the considerable upfront capital and specialised technical expertise required, resources that many… communities simply lack'."),
          mc("What does the case illustrate, according to researchers?", ["Renewables are always extractive.", "Community ownership offers a model where communities share directly in economic benefits.", "Rural communities can't benefit from energy transition.", "Cooperatives always fail."], 1, "'Community ownership… offers a genuinely different model — one in which the communities… directly, substantially share in its very real economic benefits'."),
        ],
      },
      p6: {
        title: "Should fossil fuel subsidies be eliminated immediately?",
        intro: "Cuatro personas debaten si las subvenciones a los combustibles fósiles deberían eliminarse de inmediato.",
        texts: {
          A: "NADIA: I firmly believe they should be eliminated immediately, without exception. It is indefensible that governments continue subsidising the very industry driving the climate crisis, effectively paying companies to accelerate the damage. Redirecting that considerable subsidy money towards renewable energy and genuine transition support would achieve far more for society overall.",
          B: "TOM: I share the underlying goal, but immediate elimination worries me given the very real, immediate impact on lower-income households who depend heavily on affordable fuel for heating and transport. A more gradual, carefully phased removal, paired with genuine, targeted compensation for those most affected, seems considerably more politically and socially sustainable to me.",
          C: "PRIYA: What concerns me most is that framing this purely as a national decision ignores genuine international competitiveness concerns. If one country removes its subsidies unilaterally while major competitors don't, its own energy-intensive industries could simply relocate elsewhere, achieving essentially nothing for global emissions while genuinely damaging the domestic economy in the process.",
          D: "SAM: My honest view is that the whole debate over subsidy removal somewhat distracts from a more fundamental point: these subsidies mostly benefit large, already-profitable corporations rather than ordinary struggling consumers, whatever the official justification claims. Removing them and directly redistributing the considerable savings to households would likely leave most ordinary people genuinely better off overall.",
        },
        q: [
          mc("Who firmly believes fossil fuel subsidies should be eliminated immediately?", ["A", "B", "C", "D"], 0, "Nadia: 'I firmly believe they should be eliminated immediately'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing impact on lower-income households?", ["A", "B", "C", "D"], 1, "Tom: 'immediate elimination worries me given the very real, immediate impact on lower-income households'."),
          mc("Who raises concerns about international competitiveness?", ["A", "B", "C", "D"], 2, "Priya: 'genuine international competitiveness concerns'."),
          mc("Who argues subsidies mostly benefit corporations, not ordinary consumers?", ["A", "B", "C", "D"], 3, "Sam: 'these subsidies mostly benefit large, already-profitable corporations rather than ordinary struggling consumers'."),
        ],
      },
      p7: {
        title: "The cost of doing nothing",
        text: "Discussions of climate policy frequently, and understandably, focus on the costs of taking action: the price of new infrastructure, the disruption to existing industries, the political difficulty of change. (1)___\n\nWhat receives considerably less sustained attention, economists studying the issue have repeatedly pointed out, is the equally real, and in many respects considerably larger, cost of continued inaction. (2)___ Climate-related damage — extreme weather, agricultural disruption, forced migration — carries a genuine economic price tag, even when that particular cost rarely, if ever, appears explicitly on any government's official balance sheet.\n\nThis asymmetry in how costs get discussed and accounted for matters considerably for public perception and, ultimately, for policy itself. (3)___ Action's costs are immediate, visible and easily, precisely quantified; inaction's costs are diffuse, delayed and, crucially, always somewhat uncertain in their exact eventual scale.\n\nSome economists have attempted to correct this systematic asymmetry by explicitly calculating and publishing the likely costs of continued inaction under various plausible future scenarios. (4)___ These calculations, while inevitably somewhat imprecise given the genuine underlying uncertainty involved, consistently suggest that inaction's true costs substantially exceed action's more immediate, visible costs over any reasonably long time horizon.\n\nMaking this less visible cost more genuinely salient in public and political debate remains, however, a considerable ongoing communication challenge. (5)___ Abstract future statistics rarely compete effectively, in terms of psychological impact, against concrete, immediate costs like today's household energy bill.\n\nOvercoming this communication challenge may prove every bit as important as the underlying economic analysis itself. (6)___ Getting the true costs right matters considerably less if that crucial calculation cannot actually be communicated in ways that genuinely, effectively shape public understanding and political decision-making.",
        options: [
          "That framing, understandable as it is, tells only half the story.", // A -> gap 1
          "Inaction, too, carries a bill — just a less visible one.",         // B -> gap 2
          "The two kinds of cost simply aren't treated symmetrically.",      // C -> gap 3
          "Some have tried to put a number on that hidden cost directly.",   // D -> gap 4
          "Vivid, present costs beat abstract, future ones almost every time.", // E -> gap 5
          "The numbers alone were never quite going to be enough.",          // F -> gap 6
          "Climate inaction has never once carried any real economic cost.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese enfoque cuenta solo la mitad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la inacción también tiene factura."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los dos costes no se tratan igual."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: han intentado cuantificar ese coste."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: lo inmediato gana casi siempre."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: los números solos no bastan."),
        ],
      },
      p8: {
        title: "Four people discuss their views on climate policy",
        text: "Read what four people say about their views on climate and energy policy.\n\nA) NADIA: I work in renewable energy, and what strikes me most is how far costs have fallen even in the past five years alone. Our reliance on the old argument that renewables are simply too expensive has become, frankly, outdated. The real remaining obstacle now is political will, not genuine economic viability.\n\nB) TOM: I farm land that's been in my family for generations, and I've had to watch increasingly unpredictable weather patterns directly threaten our livelihood year after year. My growing awareness of climate impacts isn't abstract or theoretical to me at all; it's become a very real, immediate, daily concern affecting my actual work.\n\nC) PRIYA: I lost my job when the local coal plant finally closed down, and honestly, the promised retraining support never really, adequately materialised for people like me. I support the transition in principle, but my own personal experience of it has left me genuinely sceptical about how well it's actually, practically being managed on the ground.\n\nD) SAM: I'm an economist, and what fascinates me most professionally is the sheer gap between the calculated cost of climate action and the calculated cost of continued inaction. Once you properly account for the latter, action becomes, in my professional view, overwhelmingly the more economically rational, sensible choice by a wide margin.\n",
        q: [
          mc("Who works in renewable energy and notes falling costs?", ["A", "B", "C", "D"], 0, "Nadia: 'I work in renewable energy, and… how far costs have fallen'."),
          mc("Who farms land threatened directly by unpredictable weather?", ["A", "B", "C", "D"], 1, "Tom: 'I farm land… unpredictable weather patterns directly threaten our livelihood'."),
          mc("Who lost their job when a local coal plant closed?", ["A", "B", "C", "D"], 2, "Priya: 'I lost my job when the local coal plant finally closed down'."),
          mc("Who is an economist focused on the cost gap between action and inaction?", ["A", "B", "C", "D"], 3, "Sam: 'I'm an economist… the sheer gap between the calculated cost of climate action and… inaction'."),
          mc("Who says the real obstacle is political will, not economic viability?", ["A", "B", "C", "D"], 0, "Nadia: 'The real remaining obstacle now is political will, not genuine economic viability'."),
          mc("Who says climate impacts aren't abstract but a daily concern?", ["A", "B", "C", "D"], 1, "Tom: 'isn't abstract or theoretical to me at all; it's become a very real, immediate, daily concern'."),
          mc("Who feels retraining support never adequately materialised?", ["A", "B", "C", "D"], 2, "Priya: 'the promised retraining support never really, adequately materialised for people like me'."),
          mc("Who believes action is overwhelmingly the more rational economic choice?", ["A", "B", "C", "D"], 3, "Sam: 'action becomes… overwhelmingly the more economically rational, sensible choice'."),
          mc("Who supports the transition in principle but is sceptical of its management?", ["A", "B", "C", "D"], 2, "Priya: 'I support the transition in principle, but… I'm genuinely sceptical about how well it's actually… being managed'."),
          mc("Who says the old argument about renewables being too expensive is outdated?", ["A", "B", "C", "D"], 0, "Nadia: 'the old argument that renewables are simply too expensive has become, frankly, outdated'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la política climática se plantearon dos ideas:\n· fossil fuel subsidies should be eliminated immediately (deberían eliminarse de inmediato)\n· a gradual transition better protects vulnerable households (una transición gradual protege mejor a los hogares vulnerables)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS nominalizaciones académicas (reliance, commitment, failure, awareness…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para un gobierno sobre cómo gestionar de forma más justa la transición energética: justifica y recomienda medidas.\n· ARTÍCULO: 'The climate cost nobody talks about' — reflexiona sobre un coste del cambio climático poco visible.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una economista climática, la doctora Nwosu, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a climate economist called Doctor Nwosu giving a talk. Doctor Nwosu: My first point concerns a persistent asymmetry in how we discuss climate costs. The cost of action is immediate and easily quantified; the cost of inaction is diffuse, delayed, and rarely appears on any government balance sheet. Second, on subsidies: our continued reliance on fossil fuel subsidies represents, in my professional view, one of the clearest examples of misaligned incentives in modern economic policy. Third, I want to address distribution. The transition's costs and benefits are not shared evenly; workers in fossil fuel industries face immediate job losses, while benefits accrue diffusely across society and future generations. Fourth, on greenwashing: growing public awareness of climate issues has created a commercial incentive for companies to appear environmentally responsible without genuine underlying substance. And finally, my main message: getting the economic calculations right matters far less if we cannot communicate them effectively enough to actually shape public understanding and political decision-making.", [
      fb("There is a persistent ___ in how we discuss climate costs.", ["asymmetry"], "'a persistent asymmetry'."),
      fb("The cost of action is immediate and easily ___.", ["quantified"], "'easily quantified'."),
      fb("The cost of inaction rarely appears on any government ___ sheet.", ["balance"], "'any government balance sheet'."),
      fb("Continued reliance on fossil fuel ___ represents misaligned incentives.", ["subsidies"], "'fossil fuel subsidies'."),
      fb("The transition's costs and benefits are not shared ___.", ["evenly"], "'not shared evenly'."),
      fb("Benefits accrue diffusely across society and future ___.", ["generations"], "'future generations'."),
      fb("Growing public awareness has created a commercial ___ for companies.", ["incentive"], "'a commercial incentive'."),
      fb("The calculations matter less if they can't be ___ effectively.", ["communicated"], "'communicated effectively'."),
    ]),

    ...speakingParts({ p1: "qué opinas de la política energética de tu país y si crees que se hace lo suficiente por el clima", p2: "dos imágenes de la energía (una central de combustibles fósiles y un parque eólico comunitario): compáralas y especula sobre su impacto económico y social", p3: "qué debería priorizarse en la transición energética (eliminar subvenciones a fósiles, apoyar a los trabajadores desplazados, invertir en renovables, educar al público, regular el greenwashing): comentadlo y elegid lo más urgente", p4: "el clima y la política energética: si deberíamos eliminar las subvenciones a los combustibles fósiles de inmediato, quién debería asumir el coste de la transición y si comunicamos bien el coste real de la inacción climática" }),

    SUMMARY("Resumen del Día 37", [
      "Nominalización: verbo/adjetivo → sustantivo abstracto (decide→decision, aware→awareness, fail→failure) para un registro académico denso.",
      "Sustantivos abstractos con preposición fija: reliance ON, commitment TO, awareness OF, impact ON.",
      "Vocabulario de política energética. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 38", "Reescribe 6 frases verbales en su forma nominalizada. Repasa las flashcards. Mañana: estructuras enfáticas y retóricas avanzadas."),
  ],
};

// ───────────────────────── DÍA 38 ─────────────────────────
const DAY38 = {
  title: "Día 38 — Estructuras enfáticas y retóricas avanzadas · La política y la democracia",
  description: "Preguntas retóricas en Reading/Writing; estructuras enfáticas con do/what/it (repaso avanzado); paralelismo retórico (not X but Y; neither X nor Y as emphasis); tricolon y repetición deliberada. Vocabulario de política y democracia. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Reconocer y usar recursos retóricos avanzados propios de discursos, editoriales y ensayos persuasivos.",
    summary: "Estructuras retóricas avanzadas; política y democracia; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["usar preguntas retóricas en exceso, restando fuerza al argumento.", "el paralelismo roto (not X but Y debe tener la misma estructura gramatical en ambos lados).", "confundir retórica persuasiva con argumentación real — un ensayo necesita ambas."],
    reviewPrompts: ["¿Qué efecto tiene una pregunta retórica en un ensayo persuasivo?", "¿Cómo mantienes el paralelismo en 'not only... but also'?"],
  },
  items: [
    TEXT("🔁 Ayer, la nominalización. Hoy las ESTRUCTURAS RETÓRICAS AVANZADAS: preguntas retóricas, paralelismo y repetición deliberada, propias de discursos y ensayos persuasivos de nivel C1. Vocabulario: la POLÍTICA y la DEMOCRACIA."),
    GRAMMAR("Estructuras retóricas avanzadas", `PREGUNTAS RETÓRICAS (no esperan respuesta; enfatizan un punto): Is it really surprising that trust in politics has collapsed? What choice do voters really have?
· Útiles en Writing persuasivo (P1 essay, P2 article) para enganchar al lector, pero ÚSALAS CON MODERACIÓN (1-2 por texto).
PARALELISMO RETÓRICO: estructura gramatical IDÉNTICA en ambos lados de una comparación/contraste, para dar ritmo y fuerza.
· NOT X BUT Y: The problem is not apathy but distrust. (ambos son sustantivos)
· NEITHER X NOR Y (enfático): This is neither a solution nor a genuine attempt at one.
· IT IS NOT X THAT MATTERS, BUT Y: It is not the promise that matters, but the delivery.
TRICOLON (grupo de TRES elementos paralelos, recurso retórico clásico): Government of the people, by the people, for the people. Faster, cheaper, better.
REPETICIÓN DELIBERADA (anáfora, para dar énfasis): We need reform. We need it now. We need it before trust collapses entirely.
⚠️ Estos recursos son PERSUASIVOS, no argumentativos: refuerzan un argumento ya sólido, pero no lo sustituyen. Úsalos con moderación en el essay del C1 (1-2 recursos, no en cada frase).`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ Not only apathy but also they distrust (paralelismo roto: sustantivo + cláusula) → ✅ Not only apathy but also distrust (dos sustantivos).\n· Abuso de preguntas retóricas: 3-4 en un ensayo de 250 palabras resta seriedad; 1-2 son suficientes.\n· El tricolon exige TRES elementos, no dos ni cuatro, para el efecto rítmico correcto.\n· La repetición deliberada es distinta de la repetición ACCIDENTAL (por pobreza léxica) — debe ser un recurso consciente."),
    grammarEx("Use of English — Estructuras retóricas avanzadas", "Elige la opción con el paralelismo o recurso correcto.", [
      mc("The problem is not apathy ___ distrust.", ["but", "but also", "rather"], 0, "not X but Y."),
      mc("Which is more damaging to democracy: ___ ", ["corruption or complacency?", "corruption and complacency", "corruption, complacency"], 0, "pregunta retórica bien formada."),
      mc("This policy is ___ a genuine solution ___ a serious attempt at one.", ["neither / nor", "not / but", "either / or"], 0, "neither X nor Y (enfático)."),
      mc("Government ___ the people, ___ the people, ___ the people.", ["of / by / for", "for / of / by", "by / for / of"], 0, "tricolon clásico (Lincoln)."),
      mc("It is not the promise ___ matters, but the delivery.", ["that", "which", "what"], 0, "it is not X that matters, but Y."),
      mc("We need accountability. We need it now. We need ___ before trust collapses entirely.", ["it", "them", "this"], 0, "repetición deliberada (anáfora)."),
      mc("Is it really surprising ___ public trust has collapsed?", ["that", "which", "what"], 0, "pregunta retórica: is it surprising that…?"),
    ]),
    GRAMMAR("Vocabulario del día — La política y la democracia (C1)", "Léxico avanzado de política."),
    deck("C1 S8D38 — Política y democracia", [
      ["electorate", "electorado", "The electorate demands real change.", "sustantivo", "ɪˈlektərət"],
      ["polarisation", "polarización (política)", "Political polarisation has deepened sharply.", "sustantivo", "ˌpəʊləraɪˈzeɪʃn"],
      ["accountability", "rendición de cuentas", "Voters demand genuine accountability.", "sustantivo", "əˌkaʊntəˈbɪləti"],
      ["disenfranchised", "privado/a del voto / marginado/a", "Disenfranchised communities feel ignored.", "adjetivo", "ˌdɪsɪnˈfræntʃaɪzd"],
      ["constituency", "circunscripción / electorado local", "The MP represents a rural constituency.", "sustantivo", "kənˈstɪtjuənsi"],
      ["legitimacy", "legitimidad", "The election's legitimacy was questioned.", "sustantivo", "lɪˈdʒɪtɪməsi"],
      ["populism", "populismo", "Populism thrives on public frustration.", "sustantivo", "ˈpɒpjʊlɪzəm"],
      ["gerrymandering", "manipulación de distritos electorales", "Gerrymandering distorts electoral outcomes.", "sustantivo", "ˈdʒerimændərɪŋ"],
      ["turnout", "participación electoral", "Voter turnout fell to a record low.", "sustantivo", "ˈtɜːnaʊt"],
      ["complacency", "complacencia / autosatisfacción", "Political complacency breeds public anger.", "sustantivo", "kəmˈpleɪsnsi"],
    ]),
    vocabEx("Vocabulario — La política y la democracia", "Elige la opción correcta.", [
      mc("The body of people entitled to vote is the ___.", ["electorate", "constituency", "turnout"], 0, "electorate."),
      mc("Growing division into sharply opposed political camps is ___.", ["polarisation", "legitimacy", "accountability"], 0, "polarisation."),
      mc("Excluded from meaningful political participation is being ___.", ["disenfranchised", "legitimate", "accountable"], 0, "disenfranchised."),
      mc("A political approach appealing to popular grievance against elites is ___.", ["populism", "legitimacy", "turnout"], 0, "populism."),
      mc("Manipulating electoral district boundaries for advantage is ___.", ["gerrymandering", "polarisation", "accountability"], 0, "gerrymandering."),
      mc("The number of people who actually vote is the ___.", ["turnout", "electorate", "constituency"], 0, "turnout."),
    ]),

    ...uoe({
      p1: {
        title: "What democracy actually requires",
        text: "Is it really surprising that public trust in political institutions has collapsed so dramatically across so many established democracies in recent years? The problem, on closer examination, is not apathy (1)___ distrust — not a public that has simply stopped caring, but one that has grown convinced, often with considerable justification, that political systems no longer genuinely (2)___ their interests. Neither cosmetic reform (3)___ empty rhetorical reassurance will likely restore this badly eroded trust; what is (4)___, instead, is substantive, demonstrable change that citizens can actually witness and verify directly in their own daily lives. Democracy, properly understood, requires accountability, transparency, (5)___ responsiveness — three pillars that, when genuinely present together, sustain the kind of public trust that no amount of political messaging alone can ever adequately, artificially manufacture. We need reform. We need it substantively. We need it (6)___ cynicism about democratic institutions becomes so deeply entrenched that meaningful repair grows genuinely, perhaps irreversibly, difficult.",
        q: [
          mc("(1)", ["but", "but also", "rather", "instead"], 0, "not X but Y (paralelismo)."),
          mc("(2)", ["represent", "reflect", "serve", "embody"], 2, "'no longer genuinely serve their interests'."),
          mc("(3)", ["or", "nor", "and", "but"], 1, "neither X nor Y."),
          mc("(4)", ["required", "needed", "necessary", "demanded"], 2, "'what is necessary, instead'."),
          mc("(5)", ["and", "with", "plus", "along"], 0, "tricolon: accountability, transparency, and responsiveness."),
          mc("(6)", ["before", "until", "while", "as"], 0, "'We need it before cynicism becomes…'."),
        ],
      },
      p2: {
        title: "Whose voice actually counts",
        text: "Which matters more to a functioning democracy: the formal right to vote, or the genuine, practical ability to exercise (1)___ meaningfully? This is not merely an abstract, academic question. Millions of eligible voters across established democracies remain effectively disenfranchised, not (2)___ law but by practical circumstance — inconvenient polling hours, inadequate transport, complex registration requirements that disproportionately burden the poor, the elderly, and recent (3)___. It is not the formal right to vote (4)___ ultimately matters most, but whether that right can actually, practically be exercised without unreasonable, unnecessary obstacle. Neither a technically free election (5)___ a nominally open registration process guarantees genuine democratic participation if the practical barriers to voting remain substantial and disproportionately borne by the most vulnerable. We need to look beyond formal legal rights. We need to examine practical, lived barriers. We need, above all, (6)___ ask honestly whose voice genuinely counts in practice, not merely whose voice counts on paper.",
        q: [
          fb("(1)", ["it"], "'the ability to exercise it meaningfully'."),
          fb("(2)", ["by"], "'not by law but by circumstance'."),
          fb("(3)", ["immigrants", "arrivals"], "'recent immigrants/arrivals'."),
          fb("(4)", ["that", "which"], "'the formal right… that ultimately matters most'."),
          fb("(5)", ["nor"], "'neither… nor a nominally open… process'."),
          fb("(6)", ["to"], "'We need, above all, to ask honestly'."),
        ],
      },
      p3: {
        title: "The polarisation machine",
        text: "Political (1)___ has deepened so dramatically in recent decades that many citizens now struggle to have basic, civil conversations with those who hold different political views. What explains this striking (2)___? Social media algorithms, which reward emotional engagement over careful nuance, bear considerable (3)___, amplifying precisely the content most likely to provoke outrage rather than genuine understanding. Political actors themselves, incentivised by increasingly safe electoral (4)___ that reward appealing to a narrow, committed base rather than genuinely persuading the wider, more moderate electorate, bear their own share of (5)___ too. Neither technology alone (6)___ political incentives alone fully explain the phenomenon; rather, the two combine and reinforce each other in a genuinely, deeply corrosive feedback loop. We need to understand this dynamic properly. We need to interrupt it deliberately. We need, urgently, to rebuild the shared civic (7)___ that genuine democratic deliberation ultimately requires.",
        items: [
          { root: "polar", accepted: ["polarisation"], hint: "'Political polarisation' (sustantivo)." },
          { root: "escalate", accepted: ["escalation"], hint: "'this striking escalation' → escalation." },
          { root: "responsible", accepted: ["responsibility"], hint: "'bear considerable responsibility' → responsibility." },
          { root: "constitute", accepted: ["constituencies"], hint: "'increasingly safe electoral constituencies' → constituencies." },
          { root: "blame", accepted: ["blame"], hint: "'bear their own share of blame' (sustantivo)." },
          { root: "nor", accepted: ["nor"], hint: "'Neither technology alone nor political incentives alone' (conector)." },
          { root: "infrastructure", accepted: ["infrastructure"], hint: "'the shared civic infrastructure' (sustantivo, metafórico)." },
        ],
      },
      p4: {
        title: "Transformaciones — estructuras retóricas",
        items: [
          { s1: "The problem isn't apathy; it's distrust.", key: "BUT", s2: "The problem is not apathy, ___ distrust.", accepted: ["but"], explanation: "not X but Y." },
          { s1: "This policy is not a solution, and it isn't a serious attempt either.", key: "NEITHER", s2: "This policy is ___ a solution nor a serious attempt.", accepted: ["neither"], explanation: "neither X nor Y." },
          { s1: "Isn't it surprising that trust has collapsed?", key: "SURPRISING", s2: "Is it really ___ that trust has collapsed? (pregunta retórica)", accepted: ["surprising"], explanation: "pregunta retórica." },
          { s1: "We need reform urgently and consistently, again and again.", key: "NOW", s2: "We need reform. We need it ___ .", accepted: ["now"], explanation: "repetición deliberada (anáfora)." },
          { s1: "The delivery matters, not the promise.", key: "THAT", s2: "It is not the promise ___ matters, but the delivery.", accepted: ["that"], explanation: "it is not X that matters, but Y." },
          { s1: "Democracy requires accountability, transparency, and responsiveness.", key: "AND", s2: "Democracy requires accountability, transparency, ___ responsiveness.", accepted: ["and"], explanation: "tricolon." },
        ],
      },
      p5: {
        title: "The mayor who asked instead of telling",
        text: "When a newly elected city mayor took office in a mid-sized city long characterised by low voter turnout and deep, entrenched public cynicism about local politics, she made a decision that struck many longtime political observers, both allies and critics alike, as genuinely unusual for someone who had just won a hard-fought electoral campaign: rather than immediately announcing her own detailed policy agenda, she spent her first hundred days in office almost entirely listening.\n\nHer approach involved holding public meetings in every single neighbourhood across the city, including several that previous administrations had, by most honest accounts, largely and rather conspicuously ignored. She asked residents a deceptively simple question at each of these meetings: not what specific policies they wanted implemented, but what genuine problems they actually experienced in their own daily, ordinary lives. It was not the answers she expected to hear, she later admitted candidly, but the ones she actually received that most profoundly shaped her eventual policy agenda.\n\nWhat she discovered, repeatedly and rather uncomfortably, was that residents' genuine daily priorities frequently diverged quite sharply from what political commentators and career policy professionals had confidently assumed mattered most. Abstract debates over long-term city branding and marketing strategy, favoured by many professional consultants, mattered considerably less to most ordinary residents than concrete, immediate, practical concerns: potholes, reliable rubbish collection, genuinely functioning streetlights in unlit, unsafe areas.\n\nHer resulting policy agenda, when finally, properly unveiled, focused overwhelmingly on precisely these unglamorous, practical concerns rather than the more headline-grabbing, symbolically impressive flagship projects that many of her own political advisers had initially, confidently urged her to prioritise instead. Critics, particularly among more traditional political commentators, dismissed this approach as insufficiently ambitious, lacking any genuine, inspiring political vision.\n\nWhat those critics failed to fully anticipate, however, was the depth and durability of the public trust her approach subsequently, gradually generated. Residents who had grown deeply cynical about empty political promises after decades of broken commitments began to notice, slowly but unmistakably, actual, tangible, verifiable change in their own immediate neighbourhoods. Potholes actually got properly filled. Streetlights that had remained broken for years finally, genuinely got fixed.\n\nHer approval ratings, initially modest and unremarkable, rose steadily and then dramatically throughout her subsequent term, eventually reaching levels rarely seen in the city's modern political history. Voter turnout in the following election increased substantially, particularly in precisely those previously neglected neighbourhoods where she had originally, deliberately begun her extensive initial listening tour.\n\nHer own explanation for this striking success was disarmingly, almost defiantly simple. It was not, she insisted repeatedly, that she possessed some especially brilliant, innovative policy agenda that others had somehow previously overlooked. It was, rather, that she had genuinely, seriously listened before acting, and then had reliably, consistently delivered on precisely what residents had actually, specifically told her mattered most in their own lives — a deceptively straightforward approach that, however basic and unglamorous it sounds in principle, proved remarkably, genuinely rare in actual practice.",
        q: [
          mc("What did the mayor do in her first hundred days?", ["Announced detailed policies immediately.", "Spent them almost entirely listening to residents.", "Focused on branding.", "Ignored public opinion."], 1, "'she spent her first hundred days in office almost entirely listening'."),
          mc("What question did she ask residents?", ["What policies they wanted.", "What genuine problems they experienced in daily life.", "Who they voted for.", "What her approval rating was."], 1, "'not what specific policies they wanted implemented, but what genuine problems they actually experienced'."),
          mc("What did she discover about residents' priorities?", ["They matched expert assumptions.", "They diverged sharply from what commentators had assumed mattered most.", "Nobody had any real concerns.", "They wanted flagship projects."], 1, "'residents' genuine daily priorities frequently diverged quite sharply from what… commentators… had confidently assumed'."),
          mc("What did her eventual policy agenda focus on?", ["Symbolic flagship projects.", "Unglamorous, practical concerns like potholes and streetlights.", "City branding.", "Nothing concrete."], 1, "'focused overwhelmingly on precisely these unglamorous, practical concerns'."),
          mc("What happened to her approval ratings and voter turnout?", ["Both fell.", "Both rose substantially, especially in previously neglected areas.", "No change.", "Only turnout rose."], 1, "'Her approval ratings… rose steadily and then dramatically… Voter turnout… increased substantially, particularly in… previously neglected neighbourhoods'."),
          mc("What was her own explanation for the success?", ["A brilliant unique policy agenda.", "Genuinely listening first, then reliably delivering on what mattered.", "Luck.", "Strong marketing."], 1, "'she had genuinely, seriously listened before acting, and then had reliably, consistently delivered on precisely what residents had actually… told her mattered most'."),
        ],
      },
      p6: {
        title: "Does low voter turnout threaten democratic legitimacy?",
        intro: "Cuatro personas debaten si la baja participación electoral amenaza la legitimidad democrática.",
        texts: {
          A: "NADIA: Absolutely, without question. When barely half the electorate actually votes, can we genuinely claim the resulting government represents the will of the people? Low turnout isn't a minor administrative footnote; it's a fundamental crisis of democratic legitimacy that deserves far more serious, sustained attention than it typically receives from political leaders.",
          B: "TOM: I understand the concern, but I'd push back on equating turnout directly with legitimacy as such. Some citizens abstain not from apathy but from a considered, genuine satisfaction with the status quo; others abstain as a deliberate, meaningful protest against choices they find genuinely unacceptable. Low turnout, in other words, isn't always simply a straightforward problem to be urgently solved.",
          C: "PRIYA: What concerns me most is not the raw turnout number itself, but who specifically doesn't vote. When abstention concentrates heavily among poorer, younger and minority communities, the resulting government, however technically legitimate in formal procedural terms, systematically underrepresents precisely those citizens with the most genuine reason to seek meaningful change.",
          D: "SAM: My honest view is that we focus far too heavily on turnout and far too little on genuine electoral choice. What use is high turnout if voters feel they're merely choosing between broadly similar establishment options? Real legitimacy requires genuine choice, not merely high raw participation in choosing among options that don't actually differ very much.",
        },
        q: [
          mc("Who sees low turnout as a fundamental crisis of legitimacy?", ["A", "B", "C", "D"], 0, "Nadia: 'a fundamental crisis of democratic legitimacy'."),
          mc("Whose view most directly QUALIFIES Nadia's, distinguishing types of abstention?", ["A", "B", "C", "D"], 1, "Tom: 'Some citizens abstain not from apathy but from… satisfaction… others abstain as a deliberate… protest'."),
          mc("Who focuses on who specifically doesn't vote, not the raw number?", ["A", "B", "C", "D"], 2, "Priya: 'not the raw turnout number itself, but who specifically doesn't vote'."),
          mc("Who argues genuine electoral choice matters more than turnout?", ["A", "B", "C", "D"], 3, "Sam: 'Real legitimacy requires genuine choice, not merely high raw participation'."),
        ],
      },
      p7: {
        title: "The speech that changed nothing",
        text: "Political speeches are, by their very nature, exercises in persuasion, deploying every rhetorical tool available to move an audience towards a particular conclusion. (1)___\n\nAnd yet careful research into political persuasion has repeatedly found something genuinely humbling for anyone who takes rhetoric seriously: most political speeches, however skilfully crafted and rhetorically accomplished, change remarkably few minds among their actual audience. (2)___ People overwhelmingly tend to hear confirmation of what they already believed rather than genuinely reconsidering their existing views.\n\nThis finding complicates a comforting assumption that runs through much political commentary: that better rhetoric, more skilfully deployed, could meaningfully bridge our current political divides. (3)___ The evidence suggests something rather more uncomfortable: that we mostly select which rhetoric to find persuasive based on conclusions we had already reached beforehand.\n\nThis does not mean rhetoric is entirely without genuine effect. (4)___ It can energise an already-sympathetic base, provide vocabulary and arguments for views people already privately hold, and shape how existing supporters subsequently discuss an issue with others.\n\nWhat it apparently cannot reliably do, at least not to the extent widely assumed, is genuinely convert committed opponents. (5)___ The persuasive power of political rhetoric, it turns out, operates mostly within existing camps rather than meaningfully, substantially across them.\n\nThis matters considerably for how we should reasonably think about political discourse and its actual, practical limits. (6)___ If rhetoric alone cannot bridge deep political divides, then genuine bridging, if it is to happen at all, likely requires something rather different: sustained relationship, shared experience, and time.",
        options: [
          "The craft itself is genuinely, deliberately impressive.",         // A -> gap 1
          "Audiences filter speeches through beliefs they already hold.",   // B -> gap 2
          "That comforting assumption looks increasingly shaky.",          // C -> gap 3
          "Its effects, though real, run in a narrower lane than assumed.", // D -> gap 4
          "Converting genuine opponents is a considerably rarer feat.",     // E -> gap 5
          "Rhetoric alone was probably never going to close that gap.",     // F -> gap 6
          "Every political speech ever given has changed a great many minds.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el arte retórico es impresionante."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las audiencias filtran por creencias previas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa suposición cómoda flaquea."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: su efecto es real pero limitado."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: convertir a un opositor es más raro."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la retórica sola no cerraba esa brecha."),
        ],
      },
      p8: {
        title: "Four people discuss their engagement with politics",
        text: "Read what four people say about their own relationship with politics and voting.\n\nA) NADIA: I used to skip elections entirely, genuinely convinced my single vote changed absolutely nothing. Is it really surprising, though, that things never improved while I sat out? I vote in every single election now, local ones included, and I've started actually attending town hall meetings too.\n\nB) TOM: I vote consistently, but I'll be honest — I do it more from a sense of civic duty than from any genuine belief it makes much real difference. Neither major party truly represents my own actual views particularly well. That said, I still think abstaining entirely would be considerably worse than voting reluctantly.\n\nC) PRIYA: I got properly involved in local politics after attending one town hall meeting almost by pure accident. What struck me most was discovering how few residents actually showed up regularly, and how much genuine influence that small, dedicated handful of us who did attend consistently seemed to have as a direct result.\n\nD) SAM: I've become increasingly cynical, if I'm honest, watching politicians promise one thing repeatedly and then reliably deliver something rather different once actually elected. It's not apathy driving my current disengagement; it's genuine, accumulated distrust built up carefully over many years of broken promises.\n",
        q: [
          mc("Who used to skip elections, convinced their vote changed nothing?", ["A", "B", "C", "D"], 0, "Nadia: 'I used to skip elections entirely, genuinely convinced my single vote changed absolutely nothing'."),
          mc("Who votes from civic duty rather than belief it makes a difference?", ["A", "B", "C", "D"], 1, "Tom: 'I do it more from a sense of civic duty than from any genuine belief it makes much real difference'."),
          mc("Who got involved in local politics almost by accident?", ["A", "B", "C", "D"], 2, "Priya: 'I got properly involved in local politics after attending one town hall meeting almost by pure accident'."),
          mc("Who says it's not apathy but distrust driving their disengagement?", ["A", "B", "C", "D"], 3, "Sam: 'It's not apathy driving my current disengagement; it's genuine, accumulated distrust'."),
          mc("Who now attends town hall meetings and votes in every election?", ["A", "B", "C", "D"], 0, "Nadia: 'I vote in every single election now… I've started actually attending town hall meetings too'."),
          mc("Who thinks abstaining entirely would be worse than voting reluctantly?", ["A", "B", "C", "D"], 1, "Tom: 'I still think abstaining entirely would be considerably worse than voting reluctantly'."),
          mc("Who was struck by how few residents regularly attend meetings?", ["A", "B", "C", "D"], 2, "Priya: 'how few residents actually showed up regularly'."),
          mc("Who has watched politicians promise one thing and deliver another repeatedly?", ["A", "B", "C", "D"], 3, "Sam: 'watching politicians promise one thing repeatedly and then reliably deliver something rather different'."),
          mc("Who feels neither major party truly represents their views?", ["A", "B", "C", "D"], 1, "Tom: 'Neither major party truly represents my own actual views particularly well'."),
          mc("Who discovered a small dedicated group has real influence?", ["A", "B", "C", "D"], 2, "Priya: 'how much genuine influence that small, dedicated handful of us… seemed to have'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la democracia se plantearon dos ideas:\n· voting should be made compulsory to strengthen democratic legitimacy (el voto debería ser obligatorio)\n· low turnout should be addressed by improving political choice, not compulsion (debería abordarse mejorando las opciones políticas)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UNA pregunta retórica y UNA estructura de paralelismo (not X but Y / neither X nor Y). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'Why I do (or don't) vote' — argumenta tu propia postura sobre la participación política.\n· CARTA a un representante político local proponiendo cómo aumentar la confianza pública: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Aisha y Daniel, sobre la política local (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Aisha and Daniel, discussing local politics. Daniel: Aisha, you've been involved in local politics for years now. Has anything actually genuinely changed since you started? Aisha: Honestly, more than I expected. Is it really surprising that showing up consistently makes a difference? Most people simply don't. Daniel: What made you personally start getting involved? Aisha: I went to one meeting almost by accident and discovered how few residents actually attend regularly. The problem isn't apathy exactly, I realised, but distrust that showing up even matters at all. Daniel: So what changed your own mind about that? Aisha: We asked for one small, specific, practical thing — better streetlights on our road — and we actually got it delivered within months. That's when I understood: it's not grand promises that matter, but small, delivered, verifiable results. Daniel: Would you recommend other people get involved the way you did? Aisha: Absolutely. We need more people showing up. We need it consistently. We need it before that same trust erodes completely all over again.", [
      mc("1. Has anything changed since Aisha got involved?", ["Nothing.", "More than she expected.", "Everything got worse."], 1, "'more than I expected'."),
      mc("2. How did Aisha start getting involved?", ["Deliberately planned.", "Almost by accident, attending one meeting.", "Through a political party."], 1, "'I went to one meeting almost by accident'."),
      mc("3. What did Aisha realise the problem wasn't?", ["Distrust.", "Apathy.", "Time."], 1, "'The problem isn't apathy exactly… but distrust'."),
      mc("4. What specific thing did they ask for and get?", ["A new park.", "Better streetlights on their road.", "Lower taxes."], 1, "'better streetlights on our road… we actually got it delivered'."),
      mc("5. What did Aisha come to understand mattered most?", ["Grand promises.", "Small, delivered, verifiable results.", "Political speeches."], 1, "'it's not grand promises that matter, but small, delivered, verifiable results'."),
      mc("6. What does Aisha say they need?", ["Nothing more.", "More people showing up, consistently, before trust erodes.", "Fewer meetings."], 1, "'We need more people showing up. We need it consistently'."),
    ]),

    ...speakingParts({ p1: "cuánto te interesa la política y si sueles votar o participar en decisiones locales", p2: "dos imágenes de la participación política (una manifestación multitudinaria y una sala de reunión vecinal casi vacía): compáralas y especula sobre el compromiso cívico de cada comunidad", p3: "qué ayudaría más a fortalecer la confianza en la democracia (mayor transparencia, resultados visibles y rápidos, escuchar más a los ciudadanos, reducir la polarización, mejorar el acceso al voto): comentadlo y elegid lo más eficaz", p4: "la política y la democracia: si el voto debería ser obligatorio, si la baja participación amenaza la legitimidad democrática y qué papel tiene la retórica política en cambiar realmente la opinión pública" }),

    SUMMARY("Resumen del Día 38", [
      "Preguntas retóricas (con moderación); paralelismo (not X but Y, neither X nor Y — misma estructura gramatical en ambos lados).",
      "Tricolon (tres elementos paralelos); repetición deliberada (anáfora) para dar énfasis persuasivo.",
      "Vocabulario de política y democracia. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 39", "Escribe un párrafo persuasivo usando una pregunta retórica y un paralelismo. Repasa las flashcards. Mañana: el lenguaje figurado y la metáfora en el registro académico."),
  ],
};

// ───────────────────────── DÍA 39 ─────────────────────────
const DAY39 = {
  title: "Día 39 — El lenguaje figurado y la metáfora académica · La filosofía y la ética cotidiana",
  description: "Metáforas convencionales del inglés académico/periodístico (a slippery slope, a house of cards, the elephant in the room, a minefield); símiles formales; personificación en el discurso abstracto. Vocabulario de filosofía y ética. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Reconocer y usar metáforas convencionales propias del inglés académico/periodístico para explicar ideas abstractas.",
    summary: "Lenguaje figurado académico; filosofía y ética; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["traducir metáforas literalmente del español (no siempre coinciden).", "mezclar metáforas incompatibles en la misma frase (mixed metaphor).", "sobreusar metáforas hasta volver el texto confuso en vez de claro."],
    reviewPrompts: ["¿Qué significa 'the elephant in the room'?", "¿Cuándo usarías 'a slippery slope' en un argumento?"],
  },
  items: [
    TEXT("🔁 Ayer, la retórica avanzada. Hoy el LENGUAJE FIGURADO Y LA METÁFORA ACADÉMICA: las metáforas convencionales que aparecen constantemente en Reading P5-P8 y que enriquecen el Writing/Speaking C1. Vocabulario: la FILOSOFÍA y la ÉTICA COTIDIANA."),
    GRAMMAR("El lenguaje figurado y la metáfora académica", `El inglés académico y periodístico usa METÁFORAS CONVENCIONALES constantemente para explicar ideas abstractas con claridad e impacto. Reconocerlas es CLAVE para el Reading P5-P8; usarlas (con moderación) enriquece el Writing/Speaking.
· A SLIPPERY SLOPE (pendiente resbaladiza: una acción que lleva inevitablemente a consecuencias cada vez peores): Critics warn that the policy is a slippery slope towards censorship.
· A HOUSE OF CARDS (castillo de naipes: algo frágil que puede colapsar fácilmente): The economic model proved to be a house of cards.
· THE ELEPHANT IN THE ROOM (el tema evidente que nadie menciona): Funding remained the elephant in the room throughout the debate.
· A MINEFIELD (campo minado: un tema lleno de peligros/dificultades ocultas): Immigration policy is a genuine political minefield.
· A DOUBLE-EDGED SWORD (repaso S6): ventajas y desventajas a la vez.
· TO SCRATCH THE SURFACE (apenas abordar algo, superficialmente): The report barely scratches the surface of the problem.
· A CAN OF WORMS (un tema complicado que, al abrirlo, genera más problemas): Reopening that debate would open a real can of worms.
SÍMILES FORMALES (like/as): The argument crumbled like a house of cards. As fragile as a house of cards.
⚠️ Nunca mezcles metáforas incompatibles en la misma frase (❌ 'we need to nip this house of cards in the bud'); elige UNA imagen y mantenla coherente.`),
    WARN("Errores típicos del hispanohablante (C1)", "· No traduzcas metáforas españolas literalmente: 'poner el dedo en la llaga' NO es 'the elephant in the room' (que significa algo evidente que se EVITA mencionar).\n· Evita mezclar metáforas: no combines 'slippery slope' con 'house of cards' en la misma idea.\n· Úsalas con MODERACIÓN: una o dos por texto dan color; en exceso, distraen del argumento.\n· 'A can of worms' implica que abrir un tema genera MÁS problemas de los esperados, no simplemente que es difícil."),
    grammarEx("Use of English — Lenguaje figurado académico", "Elige la metáfora correcta para cada contexto.", [
      mc("Critics warn the policy could lead to ever more restrictive measures — a genuine ___.", ["slippery slope", "house of cards", "elephant in the room"], 0, "slippery slope (consecuencias cada vez peores)."),
      mc("The company's finances, it turned out, were built on debt — a ___ waiting to collapse.", ["house of cards", "minefield", "can of worms"], 0, "house of cards (fragilidad)."),
      mc("Nobody wanted to discuss the budget shortfall — it remained the ___ throughout the meeting.", ["elephant in the room", "slippery slope", "double-edged sword"], 0, "elephant in the room (tema evidente evitado)."),
      mc("Discussing salary differences at work can be a genuine ___.", ["minefield", "house of cards", "slippery slope"], 0, "minefield (tema delicado)."),
      mc("The report only ___ of a much deeper, more complex problem.", ["scratches the surface", "opens a can of worms", "is a house of cards"], 0, "scratch the surface (abordar superficialmente)."),
      mc("Reopening the inheritance dispute would ___ nobody really wanted to deal with.", ["open a can of worms", "scratch the surface", "be a slippery slope"], 0, "open a can of worms."),
      mc("Success brings visibility, but also pressure — a genuine ___.", ["double-edged sword", "minefield", "house of cards"], 0, "double-edged sword (repaso S6)."),
    ]),
    GRAMMAR("Vocabulario del día — La filosofía y la ética cotidiana (C1)", "Léxico avanzado de filosofía."),
    deck("C1 S8D39 — Filosofía y ética cotidiana", [
      ["dilemma", "dilema", "She faced a genuine moral dilemma.", "sustantivo", "dɪˈlemə"],
      ["utilitarian", "utilitarista", "A utilitarian approach weighs outcomes.", "adjetivo", "ˌjuːtɪlɪˈteəriən"],
      ["virtue", "virtud", "Honesty is considered a core virtue.", "sustantivo", "ˈvɜːtʃuː"],
      ["integrity", "integridad", "She acted with unwavering integrity.", "sustantivo", "ɪnˈteɡrəti"],
      ["hypocrisy", "hipocresía", "Critics accused him of blatant hypocrisy.", "sustantivo", "hɪˈpɒkrəsi"],
      ["moral compass", "brújula moral", "He lost his moral compass entirely.", "expresión", "ˈmɒrəl ˈkʌmpəs"],
      ["complicit", "cómplice", "Silence can make bystanders complicit.", "adjetivo", "kəmˈplɪsɪt"],
      ["culpable", "culpable", "Who is truly culpable here?", "adjetivo", "ˈkʌlpəbl"],
      ["altruism", "altruismo", "Genuine altruism expects nothing in return.", "sustantivo", "ˈæltruɪzəm"],
      ["conscience", "conciencia (moral)", "Her conscience wouldn't let her stay silent.", "sustantivo", "ˈkɒnʃəns"],
    ]),
    vocabEx("Vocabulario — La filosofía y la ética cotidiana", "Elige la opción correcta.", [
      mc("A situation with no easy, clearly right choice is a ___.", ["dilemma", "virtue", "integrity"], 0, "dilemma."),
      mc("Claiming standards one doesn't actually follow oneself is ___.", ["hypocrisy", "integrity", "altruism"], 0, "hypocrisy."),
      mc("Acting consistently according to strong moral principles is ___.", ["integrity", "hypocrisy", "complicity"], 0, "integrity."),
      mc("Sharing responsibility for wrongdoing, even by silence, is being ___.", ["complicit", "culpable", "virtuous"], 0, "complicit."),
      mc("Selfless concern for the wellbeing of others is ___.", ["altruism", "hypocrisy", "integrity"], 0, "altruism."),
      mc("An internal sense of right and wrong is one's ___.", ["conscience", "virtue", "dilemma"], 0, "conscience."),
    ]),

    ...uoe({
      p1: {
        title: "The ethics of everyday compromise",
        text: "Moral philosophy, as taught in university lecture halls, often presents ethics as a matter of clear, well-defined dilemmas: the runaway trolley, the drowning stranger, scenarios (1)___ deliberately constructed to isolate a single moral principle for careful analysis. Real, everyday ethical life, by contrast, rarely presents itself in such (2)___ terms. Most ordinary moral compromise happens gradually, almost imperceptibly, each small step seeming reasonable in isolation even as the cumulative direction of travel leads somewhere considerably darker — a genuine slippery (3)___ that few people ever consciously, deliberately choose to descend. The colleague who stays silent about a minor dishonesty becomes, gradually and almost without noticing, complicit in something considerably larger. This is precisely why (4)___ integrity matters so much in ordinary daily life, not merely in the dramatic, headline-grabbing moral emergencies that philosophy textbooks favour for their pedagogical clarity. The elephant (5)___ the room in most discussions of everyday ethics is that genuine moral failure rarely announces itself dramatically; it creeps in quietly, one small, seemingly reasonable compromise at a (6)___.",
        q: [
          mc("(1)", ["that", "which", "who", "what"], 0, "'scenarios that are deliberately constructed'."),
          mc("(2)", ["clean", "clear", "neat", "tidy"], 1, "'such clear-cut terms' — mejor 'clear'."),
          mc("(3)", ["slope", "path", "road", "incline"], 0, "'a genuine slippery slope'."),
          mc("(4)", ["sustained", "consistent", "ongoing", "steady"], 1, "'consistent integrity'."),
          mc("(5)", ["in", "of", "at", "on"], 0, "'The elephant in the room'."),
          mc("(6)", ["time", "moment", "point", "go"], 0, "'one small… compromise at a time'."),
        ],
      },
      p2: {
        title: "Reopening the can of worms",
        text: "Philosophers studying moral responsibility have long grappled (1)___ a genuinely thorny question that most ordinary people would rather avoid entirely: how far does individual responsibility extend when harm results from collective, distributed action rather than any single, clearly identifiable decision? Climate change offers a genuine minefield (2)___ this kind of question. No single individual's carbon emissions cause catastrophic harm on their own; yet the aggregate, collective effect of billions of individual choices produces genuinely devastating consequences. Are individuals therefore culpable, or does responsibility dissolve entirely once it becomes sufficiently (3)___ across billions of separate actors? This question, once opened properly, reveals itself as a genuine can (4)___ worms, connecting to equally difficult questions about corporate responsibility, historical injustice, and the moral status of future, not-yet-born generations. Philosophers have offered various frameworks attempting to address this genuinely difficult terrain, none of them (5)___ fully, comprehensively satisfying, which perhaps explains why most people, quite understandably, prefer simply not to open this particular can of worms (6)___ all.",
        q: [
          fb("(1)", ["with"], "'grappled with a… question'."),
          fb("(2)", ["of"], "'a genuine minefield of this kind'."),
          fb("(3)", ["diffuse", "diffused", "distributed"], "'sufficiently diffuse/distributed'."),
          fb("(4)", ["of"], "'a genuine can of worms'."),
          fb("(5)", ["entirely", "fully"], "'none of them entirely… satisfying'."),
          fb("(6)", ["at"], "'not to open this… can of worms at all'."),
        ],
      },
      p3: {
        title: "The house of cards we call rational choice",
        text: "Classical economic theory long rested on an elegant but, it now increasingly appears, deeply (1)___ assumption: that human beings make decisions through careful, rational calculation of costs and benefits. Behavioural research conducted over recent decades has revealed this assumption to be something closer to a house of (2)___, collapsing under close (3)___ scrutiny once researchers actually observed how people genuinely, actually behave rather than how elegant theoretical models assumed they should behave. Real human decision-making, it turns out, is (4)___ shaped by cognitive biases, emotional impulse and social pressure as by any careful, deliberate rational calculation. This discovery has proven genuinely (5)___ for economics as a discipline, forcing a fundamental reconsideration of models that had, for generations, assumed away precisely the messy, irrational aspects of human psychology that behavioural economists now consider absolutely (6)___ to any genuinely accurate understanding of real economic behaviour.",
        items: [
          { root: "flaw", accepted: ["flawed"], hint: "'a deeply flawed assumption' → flawed." },
          { root: "card", accepted: ["cards"], hint: "'a house of cards' (sustantivo)." },
          { root: "empire", accepted: ["empirical"], hint: "'close empirical scrutiny' → empirical." },
          { root: "much", accepted: ["as much"], hint: "'is as much shaped by… as by' (estructura fija)." },
          { root: "disrupt", accepted: ["disruptive"], hint: "'genuinely disruptive for economics' → disruptive." },
          { root: "essence", accepted: ["essential"], hint: "'absolutely essential to' → essential." },
        ],
      },
      p4: {
        title: "Transformaciones — lenguaje figurado académico",
        items: [
          { s1: "The policy could lead to increasingly restrictive measures over time.", key: "SLOPE", s2: "Critics warn the policy is a slippery ___ towards restriction.", accepted: ["slope"], explanation: "slippery slope." },
          { s1: "The company's finances were fragile and collapsed suddenly.", key: "CARDS", s2: "The company's finances proved to be a house of ___.", accepted: ["cards"], explanation: "house of cards." },
          { s1: "Nobody mentioned the obvious funding problem during the meeting.", key: "ELEPHANT", s2: "The funding problem remained the ___ in the room.", accepted: ["elephant"], explanation: "elephant in the room." },
          { s1: "Discussing pay differences at work is a genuinely delicate topic.", key: "MINEFIELD", s2: "Discussing pay differences at work is a genuine ___.", accepted: ["minefield"], explanation: "minefield." },
          { s1: "The report only briefly addresses a much deeper problem.", key: "SCRATCHES", s2: "The report only ___ the surface of a much deeper problem.", accepted: ["scratches"], explanation: "scratch the surface." },
          { s1: "Reopening the debate would create far more problems than expected.", key: "WORMS", s2: "Reopening the debate would open a can of ___.", accepted: ["worms"], explanation: "a can of worms." },
        ],
      },
      p5: {
        title: "The philosopher who lived his own argument",
        text: "For most of his long academic career, a moral philosopher had built his considerable professional reputation on rigorous, technically sophisticated arguments about the ethical obligations that comparatively wealthy individuals owe to those suffering from extreme, preventable poverty elsewhere in the world. His published academic work was, by most accounts, technically impressive, carefully argued, and widely, respectfully cited throughout the field. It was also, by his own eventual admission many years later, something of a house of cards, resting on premises he had rigorously defended in print while living a personal, everyday life that scarcely reflected their actual, practical implications.\n\nThe elephant in the room, as he came to see it himself only much later in his career, was the considerable gap between his own carefully argued philosophical conclusions and his own everyday, ordinary personal conduct. He had argued, with genuine rigour and real conviction, that comparatively wealthy individuals bear a significant moral obligation to sacrifice non-essential luxuries in order to help prevent entirely preventable, needless suffering elsewhere. Yet he continued to live comfortably himself, indulging in exactly the kind of non-essential luxuries his own published arguments suggested were genuinely difficult to justify on his own stated ethical terms.\n\nWhat eventually prompted him to more seriously confront this uncomfortable, glaring inconsistency was not, as one might perhaps expect, some sudden and dramatic personal crisis, but rather a persistent, gradually mounting sense of quiet unease that built steadily over several years of continuing to teach the very same arguments to his own students while living in evident, obvious contradiction with them.\n\nHe eventually began, tentatively and rather publicly, to significantly alter his own personal spending habits, donating a considerably larger proportion of his income than before to organisations working directly to alleviate extreme global poverty. He also began writing and speaking more openly, and with unusual personal candour for an academic philosopher, about the genuine difficulty of actually living according to one's own carefully argued ethical conclusions, rather than merely defending them skilfully in the comparatively safe, abstract space of academic seminar rooms.\n\nHis eventual, more personal candour opened what he himself later described, with a certain wry self-awareness, as a genuine can of worms within his own professional field. Some colleagues praised him, sometimes quite publicly, for his unusual, admirable honesty; others suggested, rather less charitably, that his very public struggle revealed the genuine impracticality of the demanding ethical framework he had spent an entire career carefully, rigorously constructing and defending.\n\nWhat his own very public struggle ultimately illustrated, perhaps more effectively and memorably than any purely theoretical philosophical argument could, was a genuinely difficult truth that philosophy as an academic discipline does not always sufficiently, honestly acknowledge: that the considerable gap between believing something to be genuinely true and actually living consistently according to that belief is not merely a minor practical footnote to ethical theory, but may be one of the single most difficult and consequential problems in all of moral philosophy.",
        q: [
          mc("What had the philosopher built his reputation on?", ["Teaching only.", "Rigorous arguments about wealthy individuals' obligations to the extreme poor.", "Public speaking.", "Administrative work."], 1, "'rigorous… arguments about the ethical obligations that comparatively wealthy individuals owe to those suffering from extreme, preventable poverty'."),
          mc("What was the 'elephant in the room' regarding his life?", ["He had no reputation.", "The gap between his arguments and his own comfortable personal conduct.", "He was unemployed.", "He disagreed with his own arguments."], 1, "'the considerable gap between his own carefully argued philosophical conclusions and his own everyday… personal conduct'."),
          mc("What prompted him to confront this inconsistency?", ["A dramatic crisis.", "A persistent, gradually mounting sense of unease over years.", "A student's complaint.", "A financial loss."], 1, "'a persistent, gradually mounting sense of quiet unease that built steadily over several years'."),
          mc("What did he eventually do?", ["Nothing changed.", "Altered his spending habits and donated more, speaking openly about the difficulty.", "Resigned from academia.", "Stopped teaching ethics."], 1, "'began… to significantly alter his own personal spending habits, donating a considerably larger proportion of his income'."),
          mc("How did colleagues react to his public candour?", ["Universal praise only.", "Mixed — some praised his honesty, others saw it as revealing impracticality.", "Complete silence.", "Universal condemnation."], 1, "'Some colleagues praised him… others suggested… his very public struggle revealed the genuine impracticality'."),
          mc("What does his story ultimately illustrate, according to the writer?", ["Ethics is pointless.", "The gap between believing and living a belief is one of philosophy's most difficult problems.", "Philosophers should avoid personal ethics.", "Wealth is always unethical."], 1, "'the considerable gap between believing something to be genuinely true and actually living consistently according to that belief… may be one of the single most difficult and consequential problems in all of moral philosophy'."),
        ],
      },
      p6: {
        title: "Is it hypocritical to argue for ideals you don't fully live by?",
        intro: "Cuatro personas debaten si es hipócrita defender ideales que uno mismo no cumple del todo.",
        texts: {
          A: "NADIA: I think it's genuinely hypocritical, and that inconsistency undermines the argument's credibility. If you're not willing to live by your own stated principles, even imperfectly, what real moral authority do you actually have to demand that others adopt them? Walking the walk matters every bit as much as talking the talk.",
          B: "TOM: I'd push back on that fairly strongly. Demanding perfect personal consistency before anyone can advocate for an ideal sets an impossibly high bar that would silence almost every reformer in history. Nobody fully lives up to their own stated ideals; that gap doesn't automatically make the ideal itself wrong or not worth genuinely pursuing.",
          C: "PRIYA: What matters most to me is the direction of travel, not perfect, final consistency. Someone genuinely, visibly trying to improve, even while falling short, seems to me in a completely different moral category from someone who makes no genuine effort at all while still loudly proclaiming their supposed high principles.",
          D: "SAM: My honest view is that this whole debate somewhat misses the point. We should genuinely evaluate arguments on their own actual merits, not on the personal behaviour of whoever happens to be making them. A valid argument remains valid regardless of the arguer's own personal conduct; conflating the two is simply a distraction from the substance.",
        },
        q: [
          mc("Who thinks it's genuinely hypocritical and undermines credibility?", ["A", "B", "C", "D"], 0, "Nadia: 'I think it's genuinely hypocritical, and that inconsistency undermines the argument's credibility'."),
          mc("Whose view most directly QUALIFIES Nadia's, warning about an impossible standard?", ["A", "B", "C", "D"], 1, "Tom: 'Demanding perfect personal consistency… sets an impossibly high bar'."),
          mc("Who focuses on the direction of travel rather than perfect consistency?", ["A", "B", "C", "D"], 2, "Priya: 'What matters most to me is the direction of travel, not perfect, final consistency'."),
          mc("Who argues arguments should be evaluated on their merits, not the arguer's behaviour?", ["A", "B", "C", "D"], 3, "Sam: 'We should genuinely evaluate arguments on their own actual merits, not on the personal behaviour'."),
        ],
      },
      p7: {
        title: "Why good people do bad things",
        text: "One of moral psychology's most unsettling, well-documented findings is how readily ordinary, decent people can be induced to act in ways that genuinely violate their own stated ethical principles. (1)___\n\nFamous experiments conducted decades ago demonstrated that a surprisingly high proportion of otherwise entirely ordinary participants would administer what they believed to be genuinely painful, even potentially dangerous shocks to another person, simply because a figure in perceived authority instructed them to continue. (2)___ Few of these participants, researchers later confirmed, were in any meaningful sense unusually cruel or malicious individuals.\n\nWhat these findings suggest, uncomfortably, is that moral behaviour depends considerably more on situational context than most of us instinctively, comfortably prefer to believe. (3)___ We like to imagine our own good behaviour reflects a fixed, stable, unshakeable moral character; the evidence suggests circumstance plays a genuinely larger role than that comfortable self-image readily allows.\n\nThis is not, it should be stressed clearly, an argument that individual moral responsibility somehow doesn't genuinely matter. (4)___ People remain responsible for their actual choices, situational pressure notwithstanding.\n\nBut it does suggest a certain, genuinely useful humility about how we judge others' apparent moral failures, and correspondingly greater attention to the situational structures that reliably make ethical or unethical behaviour more or less likely in the first place. (5)___ Designing institutions and environments that actively support good behaviour may matter every bit as much as simply exhorting individuals to somehow try harder.\n\nThe elephant in the room here, many ethicists now increasingly argue, is our own persistent, comforting cultural preference for individual blame over structural, situational explanation. (6)___ Both genuinely matter; pretending otherwise, in either direction, distorts our understanding of how moral failure actually, typically happens.",
        options: [
          "Ordinary decency, it turns out, is more fragile than we assume.",    // A -> gap 1
          "Obedience proved unnervingly, disturbingly easy to obtain.",       // B -> gap 2
          "Character, it seems, bends more under pressure than we admit.",    // C -> gap 3
          "That claim would go considerably too far in the other direction.", // D -> gap 4
          "Structure, not just willpower, shapes how people actually behave.", // E -> gap 5
          "We prefer blaming persons to examining the systems around them.",  // F -> gap 6
          "No experiment has ever revealed anything troubling about obedience.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la decencia ordinaria es frágil."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la obediencia fue fácil de obtener."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el carácter cede bajo presión."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: esa afirmación iría demasiado lejos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la estructura moldea el comportamiento."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: preferimos culpar a personas antes que examinar sistemas."),
        ],
      },
      p8: {
        title: "Four people discuss a moral compromise they made",
        text: "Read what four people say about a time they faced an everyday ethical dilemma.\n\nA) NADIA: I stayed silent when a colleague took credit for my work, telling myself it wasn't worth the conflict. Looking back, that was my own personal slippery slope — I let it happen again, and then again, until speaking up at all felt nearly impossible. I've since learned that small compromises add up considerably faster than we like to admit.\n\nB) TOM: I once discovered a close friend was being genuinely dishonest with his own partner, and I faced a real minefield: say something and risk our friendship, or stay silent and feel complicit in the ongoing deception. I eventually spoke up. It cost me the friendship, but my conscience genuinely wouldn't let me stay quiet any longer.\n\nC) PRIYA: I work in finance, and I've watched colleagues justify ethically questionable decisions using purely utilitarian reasoning — the greater good, the bigger picture. I've come to distrust that kind of argument specifically because it's so convenient for those making genuinely self-serving decisions. It's become the elephant in the room in our entire industry, frankly.\n\nD) SAM: I once reported a safety violation at work that everyone else had quietly, tacitly ignored for years. It opened up a genuine can of worms — inspections, genuine embarrassment for management, real consequences for several people involved. I don't regret it, but I learned that doing the right thing rarely feels as clean or simple as it sounds in the abstract.\n",
        q: [
          mc("Who stayed silent about a colleague taking credit for their work?", ["A", "B", "C", "D"], 0, "Nadia: 'I stayed silent when a colleague took credit for my work'."),
          mc("Who discovered a friend being dishonest with their partner?", ["A", "B", "C", "D"], 1, "Tom: 'I once discovered a close friend was being genuinely dishonest with his own partner'."),
          mc("Who works in finance and distrusts convenient utilitarian reasoning?", ["A", "B", "C", "D"], 2, "Priya: 'I work in finance, and I've watched colleagues justify… decisions using purely utilitarian reasoning'."),
          mc("Who reported a safety violation that others had ignored for years?", ["A", "B", "C", "D"], 3, "Sam: 'I once reported a safety violation at work that everyone else had quietly… ignored for years'."),
          mc("Who describes their experience as their own personal slippery slope?", ["A", "B", "C", "D"], 0, "Nadia: 'that was my own personal slippery slope'."),
          mc("Who lost a friendship as a result of speaking up?", ["A", "B", "C", "D"], 1, "Tom: 'It cost me the friendship'."),
          mc("Who calls utilitarian justification 'the elephant in the room' in their industry?", ["A", "B", "C", "D"], 2, "Priya: 'It's become the elephant in the room in our entire industry'."),
          mc("Who says their action opened a genuine can of worms?", ["A", "B", "C", "D"], 3, "Sam: 'It opened up a genuine can of worms'."),
          mc("Who says small compromises add up faster than we admit?", ["A", "B", "C", "D"], 0, "Nadia: 'small compromises add up considerably faster than we like to admit'."),
          mc("Who says doing the right thing rarely feels as clean as it sounds?", ["A", "B", "C", "D"], 3, "Sam: 'doing the right thing rarely feels as clean or simple as it sounds in the abstract'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre la ética se plantearon dos ideas:\n· moral character is a fixed personal trait (el carácter moral es un rasgo fijo)\n· ethical behaviour depends heavily on situation and circumstance (el comportamiento ético depende de la situación)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UNA metáfora académica de la semana (a slippery slope, the elephant in the room, a house of cards…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'A moral compromise I've made (or refused to make)' — reflexiona con un ejemplo personal.\n· RESEÑA de un libro o película que trate un dilema ético de forma memorable: descríbela y valórala.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de un dilema ético que enfrentaron (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué tipo de dilema fue?): A a workplace conflict of interest · B a friend's dishonesty · C a safety concern · D a family disagreement · E a financial temptation · F a public disclosure. TAREA DOS (¿cómo se sintieron después?): A relieved · B conflicted · C no regrets · D guilty · E vindicated · F still uncertain.", "This is Part Four. You will hear five people talking about an ethical dilemma they faced. Speaker One: I discovered a genuine conflict of interest at work that nobody else seemed willing to acknowledge — the elephant in the room, essentially. I raised it formally, and though it caused real short-term tension, I have absolutely no regrets about doing so. Speaker Two: A close friend asked me to lie on their behalf to cover for something genuinely serious. I refused, which opened up a real can of worms in our friendship that we're honestly still working through even now. Speaker Three: I found a serious, genuine safety issue at my workplace that had apparently been ignored for years. Reporting it felt like the only real, honest option, though I remain genuinely uncertain whether it actually changed anything meaningful in the end. Speaker Four: I was offered a considerable, genuinely tempting bribe early in my career. I refused immediately, without much hesitation, and I still feel a quiet, lasting sense of vindication about that particular decision to this day. Speaker Five: My family disagreed sharply over how to care for an ageing relative, and I felt caught, uncomfortably, in the middle of it all. I still feel guilty, honestly, about the compromise we eventually, painfully reached.", [
      mc("Speaker 1 — TAREA UNO (tipo de dilema)", ["A", "B", "C", "D", "E", "F"], 0, "A: un conflicto de interés laboral."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: la deshonestidad de un/a amigo/a."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 2, "C: una preocupación de seguridad."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 4, "E: una tentación económica."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 3, "D: un desacuerdo familiar."),
      mc("Speaker 1 — TAREA DOS (cómo se sintió)", ["A", "B", "C", "D", "E", "F"], 2, "C: sin ningún arrepentimiento."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: conflictuado/a."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 5, "F: todavía incierto/a."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 4, "E: reivindicado/a."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: culpable."),
    ]),

    ...speakingParts({ p1: "si alguna vez has enfrentado un dilema ético y cómo lo resolviste", p2: "dos imágenes de decisiones éticas (alguien dudando ante una situación difícil y un grupo debatiendo un dilema colectivamente): compáralas y especula sobre cómo se sienten", p3: "qué ayuda más a actuar éticamente en la vida cotidiana (tener principios claros, pensar en las consecuencias, consultar con otros, seguir la propia conciencia, considerar el contexto): comentadlo y elegid lo más importante", p4: "la filosofía y la ética cotidiana: si el carácter moral es fijo o depende de la situación, si es hipócrita defender ideales que no cumplimos del todo y cómo deberíamos juzgar los fallos morales de los demás" }),

    SUMMARY("Resumen del Día 39", [
      "Metáforas académicas: a slippery slope, a house of cards, the elephant in the room, a minefield, scratch the surface, a can of worms.",
      "Úsalas con moderación (1-2 por texto); nunca mezcles imágenes incompatibles en la misma frase.",
      "Vocabulario de filosofía y ética. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 40", "Escribe 6 frases usando metáforas académicas de la semana. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 40 ─────────────────────────
const DAY40 = {
  title: "Día 40 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del subjuntivo formal, la nominalización académica, las estructuras retóricas avanzadas, y el lenguaje figurado académico. Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 8.",
  pedagogy: {
    objective: "Consolidar los recursos de registro más elevado del C1 antes de la Semana 9.",
    summary: "Repaso de subjuntivo/nominalización/retórica/metáfora; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de la semana te resulta más natural usar? ¿Cuál más artificial todavía?", "Repásalos antes de la Semana 9 (estrategia final de examen)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 8 del C1. Consolidas el SUBJUNTIVO FORMAL, la NOMINALIZACIÓN ACADÉMICA, las ESTRUCTURAS RETÓRICAS AVANZADAS, y el LENGUAJE FIGURADO ACADÉMICO. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 8", `1) SUBJUNTIVO: tras suggest/insist/recommend/demand + that + base form (sin -s); tras it's essential/vital/imperative that + base form. Alternativa: should + base form.
2) NOMINALIZACIÓN: verbo/adjetivo → sustantivo abstracto (decide→decision, aware→awareness) para registro académico denso; con preposición fija (reliance ON, commitment TO).
3) RETÓRICA: preguntas retóricas (moderación); paralelismo (not X but Y, neither X nor Y); tricolon; repetición deliberada.
4) METÁFORA ACADÉMICA: a slippery slope, a house of cards, the elephant in the room, a minefield, scratch the surface, a can of worms.`),
    grammarEx("Use of English — Repaso mixto de la Semana 8", "Completa o elige.", [
      mc("The report recommends that surveillance powers ___ strictly limited.", ["are", "be", "were"], 1, "subjuntivo: be."),
      fb("The country's heavy ___ on fossil fuels remains concerning. (rely, nominalización)", ["reliance"], "rely → reliance."),
      mc("The problem is not apathy ___ distrust.", ["but", "but also", "rather"], 0, "not X but Y."),
      mc("Critics warn the policy is a genuine ___ towards censorship.", ["slippery slope", "house of cards", "elephant in the room"], 0, "slippery slope."),
      fb("It is essential that citizens ___ (be) aware of how data is used.", ["be"], "it's essential that + subjuntivo."),
      mc("Nobody discussed the funding gap — it was the ___ throughout the meeting.", ["elephant in the room", "slippery slope", "can of worms"], 0, "elephant in the room."),
      fb("Their ___ to reduce emissions remains untested. (commit, nominalización)", ["commitment"], "commit → commitment."),
      mc("We need reform. We need it now. We need it ___ trust collapses entirely.", ["before", "after", "unless"], 0, "repetición deliberada + before."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 8", "Repasa los mazos (vigilancia/privacidad, clima/energía, política/democracia, filosofía/ética)."),
    vocabEx("Vocabulario — Repaso de la Semana 8", "Elige la opción correcta.", [
      mc("The monitoring of people's activities by authorities:", ["surveillance", "consent", "anonymity"], 0, "surveillance."),
      mc("The process of reducing carbon emissions to near zero:", ["decarbonisation", "mitigation", "offsetting"], 0, "decarbonisation."),
      mc("Growing division into sharply opposed political camps:", ["polarisation", "legitimacy", "accountability"], 0, "polarisation."),
      mc("Claiming standards one doesn't actually follow oneself:", ["hypocrisy", "integrity", "altruism"], 0, "hypocrisy."),
      mc("Converting data into a secure, unreadable code:", ["encryption", "breach", "tracking"], 0, "encryption."),
      mc("Falsely presenting a company as environmentally friendly:", ["greenwashing", "decarbonisation", "mitigation"], 0, "greenwashing."),
      mc("The body of people entitled to vote:", ["electorate", "constituency", "turnout"], 0, "electorate."),
      mc("An internal sense of right and wrong:", ["conscience", "virtue", "dilemma"], 0, "conscience."),
    ]),

    ...uoe({
      p1: {
        title: "The house of cards we call certainty",
        text: "It is essential that any genuinely mature thinker (1)___ comfortable holding beliefs with less than absolute, total certainty. Our collective preference for confident, unambiguous answers over honest, careful nuance represents something of a genuine intellectual house of (2)___, appealing in its simplicity but ultimately fragile when subjected to sustained, careful scrutiny. The elephant in the room throughout much public discourse is a widespread, largely (3)___ discomfort with genuine uncertainty — a discomfort that pushes commentators, politicians and ordinary citizens alike towards artificially confident pronouncements that (4)___ this discomfort rather than genuinely, honestly addressing whatever underlying complexity they are actually purporting to explain. It is not simplicity (5)___ genuinely serves understanding, but honest engagement with complexity, however uncomfortable that engagement inevitably proves. We need more intellectual humility. We need it in our media. We need it, urgently, ___ (6) public discourse degrades entirely into competing, oversimplified certainties.",
        q: [
          mc("(1)", ["be", "is", "was", "were"], 0, "it's essential that + subjuntivo: be."),
          mc("(2)", ["cards", "sand", "glass", "straw"], 0, "'a house of cards'."),
          mc("(3)", ["unacknowledged", "unrecognised", "unnoticed", "unadmitted"], 0, "'largely unacknowledged discomfort'."),
          mc("(4)", ["mask", "hide", "cover", "conceal"], 0, "'pronouncements that mask this discomfort'."),
          mc("(5)", ["that", "which", "what", "who"], 0, "'It is not simplicity that genuinely serves'."),
          mc("(6)", ["before", "until", "unless", "while"], 0, "'We need it, urgently, before public discourse degrades'."),
        ],
      },
      p2: {
        title: "A minefield of good intentions",
        text: "Well-intentioned policy interventions frequently (1)___ into a genuine minefield of unintended consequences, however carefully and thoughtfully designed the original policy genuinely was. It is imperative that policymakers (2)___ humble about the limits of their own predictive capacity, given how often confident policy predictions have proved, in (3)___, badly mistaken. This is not an argument against taking action; inaction carries its (4)___ very real risks and costs. Rather, it is an argument for genuine, ongoing (5)___ — careful monitoring, willingness to adjust course, honest acknowledgment when a well-intentioned policy has, in fact, produced a genuine house of cards rather than the solid, durable foundation its designers had originally, confidently intended. Neither excessive caution (6)___ reckless confidence serves the public well; what is required, instead, is the harder, less comfortable discipline of careful, humble, adaptive governance.",
        q: [
          fb("(1)", ["stumble", "wander", "run"], "'frequently stumble/run into a genuine minefield'."),
          fb("(2)", ["remain", "be"], "'imperative that policymakers remain/be humble'."),
          fb("(3)", ["practice", "reality"], "'proved, in practice, badly mistaken'."),
          fb("(4)", ["own"], "'inaction carries its own very real risks'."),
          fb("(5)", ["humility"], "'an argument for genuine, ongoing humility'."),
          fb("(6)", ["nor"], "'Neither excessive caution nor reckless confidence'."),
        ],
      },
      p3: {
        title: "Scratching the surface of understanding",
        text: "Most public discussion of complex policy issues, however (1)___ intentioned, tends to scratch only the (2)___ of genuinely difficult underlying questions, favouring simplified, accessible soundbites over the sustained, careful analysis that complex problems typically, genuinely require. This tendency towards superficial (3)___ is not primarily a failure of individual intelligence or goodwill; it stems, rather, from structural features of how modern (4)___ operates — the demand for brevity, the reward for confident simplicity over honest, nuanced complexity. Reversing this tendency requires deliberate, sustained institutional (5)___, not merely individual good intentions, however sincerely and genuinely held those particular good intentions genuinely are.",
        items: [
          { root: "well", accepted: ["well"], hint: "'however well intentioned' (adverbio ya formado, escribe 'well')." },
          { root: "surface", accepted: ["surface"], hint: "'scratch only the surface' (sustantivo)." },
          { root: "engage", accepted: ["engagement"], hint: "'superficial engagement' → engagement." },
          { root: "media", accepted: ["media"], hint: "'how modern media operates' (sustantivo)." },
          { root: "commit", accepted: ["commitment"], hint: "'deliberate, sustained institutional commitment' → commitment." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 8",
        items: [
          { s1: "The committee's recommendation was that the policy should be reviewed.", key: "RECOMMENDS", s2: "The committee ___ that the policy be reviewed.", accepted: ["recommends"], explanation: "recommend that + subjuntivo." },
          { s1: "The country relies heavily on imported oil.", key: "RELIANCE", s2: "The country's heavy ___ on imported oil is concerning.", accepted: ["reliance"], explanation: "rely → reliance." },
          { s1: "The problem isn't the policy itself; it's how it was communicated.", key: "BUT", s2: "The problem is not the policy itself, ___ how it was communicated.", accepted: ["but"], explanation: "not X but Y." },
          { s1: "The fragile system could collapse at any moment.", key: "CARDS", s2: "The system is a genuine house of ___.", accepted: ["cards"], explanation: "house of cards." },
          { s1: "It's essential that the law be updated urgently.", key: "ESSENTIAL", s2: "It is ___ that the law be updated urgently.", accepted: ["essential"], explanation: "it's essential that + subjuntivo." },
          { s1: "Nobody wanted to discuss the obvious problem.", key: "ELEPHANT", s2: "The problem remained the ___ in the room.", accepted: ["elephant"], explanation: "elephant in the room." },
        ],
      },
      p5: {
        title: "The committee that recommended honesty",
        text: "When a national commission was convened to investigate the causes of a major public institutional failure that had eroded public trust considerably, its final report broke with a longstanding institutional convention of producing carefully hedged, diplomatically vague findings designed above all to avoid causing serious offence to anyone potentially implicated.\n\nThe commission's chair, a widely respected retired judge known throughout her career for uncompromising personal directness, insisted from the very outset that the final report avoid the kind of evasive, deliberately ambiguous language that had characterised so many previous, broadly similar official inquiries. It was essential, she argued repeatedly and forcefully in commission meetings, that the report name specific institutional failures directly and plainly, rather than dissolving individual and institutional responsibility into vague, unaccountable references to unspecified 'systemic factors'.\n\nThis approach proved, predictably enough, genuinely controversial from the moment the report was finally published. Several individuals and institutions named directly and specifically in the report's findings pushed back forcefully, arguing that the commission had, in their view, unfairly singled out particular individuals for what were, they claimed, genuinely systemic, collective institutional failures that could not reasonably be attributed to any single person's individual decisions or actions.\n\nThe commission's chair remained notably unmoved by this considerable, sustained pressure. It was not vague, comforting generalities that mattered most, she insisted repeatedly in subsequent public statements and interviews, but specific, actionable, genuinely honest findings that could actually drive real institutional reform going forward. A report that scratched only the surface of what had genuinely gone wrong, she argued forcefully, would serve nobody's genuine long-term interests, however much short-term discomfort a more honest, specific report might understandably cause certain named individuals and institutions in the interim.\n\nThe report's unusually direct, specific approach did, in fact, provoke exactly the kind of institutional soul-searching that vaguer, more conventionally diplomatic reports had consistently, repeatedly failed to produce in the past. Institutions named directly in the findings faced genuine, sustained public pressure to implement specific, concrete reforms rather than issuing the kind of vague, largely symbolic commitments to unspecified future improvement that had characterised institutional responses to previous, similarly conducted inquiries.\n\nCritics, including some experienced fellow commissioners, warned that this unusually blunt, direct approach risked discouraging honest, full cooperation from witnesses in genuinely similar future inquiries, who might reasonably fear similarly direct, specific personal attribution of institutional blame if they spoke too candidly or too specifically during commission proceedings. The commission's chair acknowledged this genuine, legitimate risk but maintained firmly that the alternative — continuing the longstanding pattern of vague, ultimately toothless institutional reports that named no one specifically and consequently changed remarkably little in actual practice — represented, in her own considered view, by far the greater and more serious institutional failure.\n\nHer report has since become something of a genuinely influential model for subsequent official inquiries grappling with broadly similar institutional tensions between honest, specific, actionable findings and the diplomatic caution that institutions have traditionally, almost reflexively favoured. Whether her particular, unusually direct approach ultimately produces more effective institutional reform than the older, more conventionally cautious model remains, even now, a matter of genuine, ongoing professional debate among those who study institutional accountability and inquiry design.",
        q: [
          mc("What convention did the commission's report break with?", ["Publishing quickly.", "Producing carefully hedged, diplomatically vague findings.", "Naming no one at all, ever.", "Avoiding any recommendations."], 1, "'broke with a longstanding institutional convention of producing carefully hedged, diplomatically vague findings'."),
          mc("What did the commission's chair insist on?", ["Vague language.", "Naming specific institutional failures directly and plainly.", "Avoiding all criticism.", "Delaying the report."], 1, "'insisted… that the final report avoid… evasive, deliberately ambiguous language… name specific institutional failures directly'."),
          mc("How did named individuals and institutions react?", ["With gratitude.", "They pushed back, arguing failures were systemic, not individual.", "With indifference.", "With immediate agreement."], 1, "'pushed back forcefully, arguing… the commission had… unfairly singled out particular individuals for… systemic, collective institutional failures'."),
          mc("What did the direct approach provoke?", ["Nothing changed.", "Genuine institutional soul-searching and pressure for concrete reforms.", "More vague reports.", "Less accountability."], 1, "'provoke exactly the kind of institutional soul-searching that vaguer… reports had consistently… failed to produce'."),
          mc("What risk did critics warn about?", ["No risk at all.", "Discouraging honest cooperation from witnesses in future inquiries.", "Making the report too short.", "Costing too much money."], 1, "'this unusually blunt… approach risked discouraging honest, full cooperation from witnesses in genuinely similar future inquiries'."),
          mc("What did the chair consider the greater institutional failure?", ["Being too direct.", "Continuing the pattern of vague, toothless reports that change little.", "Publishing the report.", "Naming names."], 1, "'the alternative… vague, ultimately toothless institutional reports… represented… by far the greater and more serious institutional failure'."),
        ],
      },
      p6: {
        title: "Should official inquiries name individuals directly?",
        intro: "Cuatro personas debaten si las investigaciones oficiales deberían nombrar directamente a los individuos responsables.",
        texts: {
          A: "NADIA: Absolutely, without hesitation. Vague references to unspecified 'systemic failures' let everyone actually responsible quietly off the hook. It is essential that reports name names directly; without that specific accountability, institutions simply repeat the very same mistakes indefinitely, since nobody in particular is ever genuinely held responsible for anything specific.",
          B: "TOM: I understand that instinct, but I worry direct naming discourages honest cooperation from future witnesses who reasonably fear similarly direct personal blame. Neither approach is without genuine cost; I'd lean towards protecting the flow of honest information during the inquiry itself, even if that occasionally means somewhat less specific attribution in the eventual final report.",
          C: "PRIYA: What concerns me most is conflating individual and systemic failure, when in reality both usually operate together, reinforcing each other in complex ways. Naming individuals without also seriously addressing the systemic conditions that enabled their specific failures achieves relatively little; you simply replace one flawed individual with another operating under identical, unreformed systemic conditions.",
          D: "SAM: My honest view is that this genuinely depends heavily on context and specific severity. For minor institutional failures, systemic analysis alone probably suffices reasonably well. For genuinely serious harm, though, I think the public has a real, legitimate right to know specifically who was responsible, however uncomfortable that direct naming proves for those individuals concerned.",
        },
        q: [
          mc("Who believes reports should name names directly, without hesitation?", ["A", "B", "C", "D"], 0, "Nadia: 'It is essential that reports name names directly'."),
          mc("Whose view most directly QUALIFIES Nadia's, worried about discouraging future cooperation?", ["A", "B", "C", "D"], 1, "Tom: 'direct naming discourages honest cooperation from future witnesses'."),
          mc("Who warns against conflating individual and systemic failure?", ["A", "B", "C", "D"], 2, "Priya: 'What concerns me most is conflating individual and systemic failure'."),
          mc("Who thinks the answer depends on the severity of the harm involved?", ["A", "B", "C", "D"], 3, "Sam: 'this genuinely depends heavily on context and specific severity'."),
        ],
      },
      p7: {
        title: "What eight weeks of hard grammar actually builds",
        text: "Reaching the end of the eighth week of any sufficiently demanding, cumulative language course invites a particular kind of stocktaking. (1)___\n\nThe material covered this particular week — the formal subjunctive, academic nominalisation, rhetorical structure, figurative academic language — represents, by most reasonable measures, some of the most demanding, register-specific material in the entire course. (2)___ These are not structures most learners encounter in casual, everyday conversation; they belong squarely to formal writing and careful, considered public speech.\n\nThis matters because C1-level competence is defined, in significant part, precisely by command of exactly this kind of elevated, formal register. (3)___ A learner who can navigate casual conversation fluently but struggles with formal register has not yet, in the fullest sense, reached genuine C1 competence.\n\nMastering this particular register requires more than simple memorisation of isolated rules. (4)___ It requires developing something closer to genuine intuition — a feel for when formal structures serve a text well and when they would, instead, feel simply forced or unnatural.\n\nThis kind of intuition develops gradually, through sustained, repeated exposure and genuine, deliberate practice, rather than through any single decisive breakthrough moment. (5)___ Each essay written, each formal text carefully read and analysed, adds incrementally to this slowly developing, ultimately internalised sense of appropriate register.\n\nFor any learner who has worked seriously through this particular week's genuinely demanding material, real, well-earned progress has been made, whatever today's felt sense of difficulty or remaining uncertainty might currently suggest. (6)___ The elevated register that once felt entirely foreign and artificial is, slowly and steadily, becoming considerably more like second nature.",
        options: [
          "It's a natural moment to ask what, exactly, has been gained.", // A -> gap 1
          "Little of it comes up naturally in everyday spoken exchange.",  // B -> gap 2
          "Formal register is, in a real sense, part of what C1 actually means.", // C -> gap 3
          "Rules alone were never quite going to be sufficient here.",     // D -> gap 4
          "No single moment does the heavy lifting; repetition does.",    // E -> gap 5
          "What once felt foreign is quietly becoming familiar.",         // F -> gap 6
          "Formal register has never once appeared in any C1 examination.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: es momento de preguntar qué se ha ganado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: poco aparece en el habla cotidiana."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el registro formal es parte de lo que significa C1."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: las reglas solas no bastaban."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ningún momento único basta; la repetición sí."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: lo extraño se vuelve familiar."),
        ],
      },
      p8: {
        title: "Four learners discuss the week's demanding material",
        text: "Read what four learners say about studying the subjunctive, nominalisation and rhetorical structures this week.\n\nA) NADIA: The subjunctive felt genuinely strange at first — 'that it be reviewed' sounds almost archaic to my ear. But it is essential, I've realised, for reading serious academic and policy texts properly. I've started noticing it constantly now in the reports and articles I read for other purposes entirely.\n\nB) TOM: Nominalisation was the real house of cards for me this week — I understood each individual example perfectly well, but combining several nominalisations fluently in my own writing still feels genuinely awkward and unnatural. That said, I can see clearly why it matters for a properly formal, academic register.\n\nC) PRIYA: I loved the rhetorical structures, if I'm honest. Not only did they teach me useful new patterns, but they also, more interestingly, helped me actually recognise persuasive techniques being used on me constantly in adverts and political speeches I encounter daily.\n\nD) SAM: The academic metaphors were the real elephant in the room for me this week, if I'm honest — I'd read them countless times in news articles before without ever really registering them as a distinct, learnable pattern at all. Now I actually notice them constantly, everywhere I look.\n",
        q: [
          mc("Who found the subjunctive strange at first but now notices it constantly?", ["A", "B", "C", "D"], 0, "Nadia: 'felt genuinely strange at first… I've started noticing it constantly now'."),
          mc("Who found nominalisation the real challenge of the week?", ["A", "B", "C", "D"], 1, "Tom: 'Nominalisation was the real house of cards for me this week'."),
          mc("Who loved the rhetorical structures and now recognises persuasive techniques used on them?", ["A", "B", "C", "D"], 2, "Priya: 'I loved the rhetorical structures… helped me actually recognise persuasive techniques being used on me'."),
          mc("Who had read academic metaphors before without registering them as a pattern?", ["A", "B", "C", "D"], 3, "Sam: 'I'd read them countless times… without ever really registering them as a distinct, learnable pattern'."),
          mc("Who can understand individual nominalisation examples but struggles combining them?", ["A", "B", "C", "D"], 1, "Tom: 'I understood each individual example perfectly well, but combining several… still feels genuinely awkward'."),
          mc("Who now notices academic metaphors everywhere they look?", ["A", "B", "C", "D"], 3, "Sam: 'Now I actually notice them constantly, everywhere I look'."),
          mc("Who says the subjunctive is essential for reading serious academic texts?", ["A", "B", "C", "D"], 0, "Nadia: 'it is essential… for reading serious academic and policy texts properly'."),
          mc("Who can see why nominalisation matters for a formal register despite finding it awkward?", ["A", "B", "C", "D"], 1, "Tom: 'I can see clearly why it matters for a properly formal, academic register'."),
          mc("Who found rhetorical structures useful for both writing and recognising persuasion?", ["A", "B", "C", "D"], 2, "Priya: 'taught me useful new patterns… helped me actually recognise persuasive techniques'."),
          mc("Who describes academic metaphors using the phrase 'the elephant in the room'?", ["A", "B", "C", "D"], 3, "Sam: 'The academic metaphors were the real elephant in the room for me this week'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la rendición de cuentas institucional se plantearon dos ideas:\n· official inquiries should name individuals directly responsible (deberían nombrar directamente a los responsables)\n· focusing on individuals distracts from necessary systemic reform (centrarse en individuos distrae de la reforma sistémica)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de la semana (subjuntivo, nominalización, o metáfora académica). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'The metaphor that finally made it click' — reflexiona sobre un concepto que entendiste mejor gracias a una metáfora o comparación.\n· INFORME para un comité universitario sobre cómo mejorar la comunicación de resultados de una investigación: Introduction / Findings / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two colleagues discussing a report. Woman: The report recommends that the whole policy be reviewed by an independent panel. Man: It's essential that this recommendation actually be taken seriously this time, not just filed away and forgotten. Extract Two. You hear two students discussing their studies. Woman: The subjunctive felt like a genuine minefield at first, but by and large I've got the hang of it now. Man: Same here. It's not the grammar itself that's hard, but remembering when it's actually required. Extract Three. You hear two friends discussing a difficult topic at work. Man: Nobody wants to mention the budget shortfall — it's become the elephant in the room in every single meeting. Woman: We need to address it directly. We need to do it properly. We need to do it before it becomes an even bigger house of cards.", [
      mc("1. What does the report recommend?", ["No changes needed.", "The whole policy being reviewed by an independent panel.", "Cancelling the policy."], 1, "'the report recommends that the whole policy be reviewed'."),
      mc("2. What does the man say is essential?", ["Ignoring the report.", "The recommendation actually being taken seriously.", "Writing a new report."], 1, "'It's essential that this recommendation actually be taken seriously'."),
      mc("3. How did the woman initially find the subjunctive?", ["Easy.", "A genuine minefield at first.", "Irrelevant."], 1, "'felt like a genuine minefield at first'."),
      mc("4. What does the man say is actually hard?", ["The grammar itself.", "Remembering when it's required.", "Nothing."], 1, "'not the grammar itself that's hard, but remembering when it's actually required'."),
      mc("5. What has the budget shortfall become?", ["A minor issue.", "The elephant in the room in every meeting.", "A solved problem."], 1, "'it's become the elephant in the room in every single meeting'."),
      mc("6. What does the woman say they need to do?", ["Ignore it.", "Address it properly before it becomes a bigger house of cards.", "Wait longer."], 1, "'We need to address it directly… before it becomes an even bigger house of cards'."),
    ]),

    ...speakingParts({ p1: "qué estructura o recurso del inglés te ha resultado más difícil de dominar hasta ahora", p2: "dos imágenes del lenguaje formal (alguien escribiendo un informe académico cuidadosamente y alguien dando un discurso persuasivo ante un público): compáralas y especula sobre el registro que usa cada uno/a", p3: "qué ayuda más a dominar el registro formal de un idioma (leer textos académicos, practicar la escritura formal, memorizar estructuras, escuchar discursos, recibir corrección): comentadlo y elegid lo más eficaz", p4: "el lenguaje formal y la retórica: si el registro formal sigue siendo importante en la era digital, cómo reconocer cuándo alguien usa la retórica para persuadir en lugar de argumentar, y qué papel tiene el lenguaje figurado en la comunicación clara" }),

    SUMMARY("Resumen de la Semana 8 (C1)", [
      "Dominas el subjuntivo formal, la nominalización académica, las estructuras retóricas avanzadas y el lenguaje figurado académico.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con temas de vigilancia, clima, política y filosofía.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: ESTRATEGIA FINAL de examen, parte por parte, con todo lo aprendido hasta ahora.",
    ]),
    INFO("Mini-simulacro de la Semana 8", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 9."),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "El subjuntivo y las estructuras de recomendación formal · La vigilancia y la privacidad",
  description: "El subjuntivo formal tras verbos y adjetivos de recomendación-necesidad, nominalización académica, estructuras enfáticas/retóricas, y lenguaje figurado académico, con el hilo de la vigilancia, la privacidad, el clima, la política energética, la democracia y la ética cotidiana. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
