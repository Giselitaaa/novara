/**
 * C2 Proficiency · Semana 2 — "La inversión y el fronting literarios más raros · Los medios de comunicación y la desinformación".
 * Gramática: patrones de inversión y fronting poco frecuentes incluso en C1,
 * propios del registro periodístico/académico más elevado: only + cláusula
 * temporal/de modo + inversión, not for/since + tiempo + inversión, nowhere/
 * in no way/under no circumstances + inversión, y fronting enfático avanzado.
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

// ───────────────────────── DÍA 6 ─────────────────────────
const DAY6 = {
  title: "Día 6 — 'Only' + inversión y 'not for/since' + inversión · La alfabetización mediática y la desinformación",
  description: "Inversión tras 'only' + cláusula temporal/de modo (Only after…, Only by…, Only when…) y tras 'not for/since' + expresión de tiempo. Vocabulario de la alfabetización mediática y la desinformación. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar la inversión tras 'only' y 'not for/since', patrones muy frecuentes en el periodismo y el ensayo académico de registro elevado.",
    summary: "Inversión con only/not for/not since; alfabetización mediática y desinformación; Use of English P1–P7, Writing, Listening P1, Speaking P1–P3.",
    commonMistakes: ["olvidar la inversión cuando 'only' + cláusula va al INICIO de la frase (si 'only' no encabeza la frase, no hay inversión).", "invertir tras un 'only' que modifica simplemente un sustantivo (Only students may enter — SIN inversión, no es cláusula).", "confundir 'not for' (tiempo: 'not for a decade') con 'not since' (punto de referencia: 'not since 2010')."],
    reviewPrompts: ["¿Cómo invertirías 'Work began only after the funding had been secured'?", "¿Cuál es la diferencia entre 'not for a decade' y 'not since 2010' en cuanto a inversión?"],
  },
  items: [
    TEXT("🎯 Semana 2 del C2. Hoy: inversión tras ONLY (+ cláusula temporal/de modo) y tras NOT FOR/NOT SINCE (+ tiempo) — patrones muy frecuentes en el periodismo serio y el ensayo académico. Vocabulario: la ALFABETIZACIÓN MEDIÁTICA y la DESINFORMACIÓN."),
    GRAMMAR("Inversión con 'only' y 'not for/since'", `1) ONLY + CLÁUSULA (temporal/de modo/condicional) AL INICIO DE FRASE → INVERSIÓN obligatoria en la cláusula principal:
· Only after the funding had been secured did work begin. (= Work began only after…)
· Only by working through the night did they meet the deadline.
· Only when the results were finally published did the full scale of the problem become apparent.
⚠️ Si "only" simplemente modifica un sustantivo/adjetivo (no una cláusula) al inicio, NO hay inversión: "Only students may enter" (correcto, sin inversión — "only" no introduce una cláusula aquí).
2) NOT FOR + expresión de DURACIÓN, o NOT SINCE + PUNTO de referencia, al inicio → INVERSIÓN:
· Not for a decade had the markets experienced such volatility. (duración: "not for + periodo")
· Not since the financial crisis has confidence been so low. (punto de referencia: "not since + momento")
Ambas estructuras son extremadamente frecuentes en el periodismo serio (The Economist, FT, The Guardian) y en el Reading P5-P7 de C2 — reconocerlas con fluidez acelera considerablemente la lectura, y dominarlas en el Writing eleva el registro de forma inmediata.`),
    WARN("Errores típicos en C2", "· La inversión con 'only' solo se aplica si 'only' encabeza una CLÁUSULA (con verbo), no un simple sintagma nominal.\n· 'Not for' + DURACIÓN (a decade, three years) vs. 'not since' + PUNTO de referencia (2010, the crisis) — no son intercambiables.\n· No olvides el auxiliar correcto en la inversión: 'did work begin' (presente/pasado simple), 'has confidence been' (presente perfecto).\n· Estas estructuras son de registro MUY formal/periodístico — perfectas para el Writing P1, pero úsalas con moderación en el Speaking."),
    grammarEx("Use of English — Inversión con only/not for/not since", "Elige o completa con la inversión correcta.", [
      mc("Only after the funding had been secured ___ work begin.", ["did", "had", "was"], 0, "only after + inversión: did work begin."),
      mc("Only by working through the night ___ they meet the deadline.", ["did", "had", "were"], 0, "only by + gerundio + inversión: did they meet."),
      mc("Not for a decade ___ the markets experienced such volatility.", ["had", "did", "have"], 0, "not for + duración + inversión: had the markets experienced."),
      mc("Not since the financial crisis ___ confidence been so low.", ["has", "had", "did"], 0, "not since + punto de referencia + inversión: has confidence been."),
      mc("Only students with valid ID ___ enter the examination hall.", ["may", "may they", "did"], 0, "'only' modifica un sustantivo aquí, NO hay inversión: may enter."),
      mc("Only when the results were published ___ the full scale of the problem apparent.", ["did… become", "had… become", "was… become"], 0, "only when + inversión: did… become."),
    ]),
    GRAMMAR("Vocabulario del día — La alfabetización mediática y la desinformación (C2)", "Léxico de maestría sobre desinformación."),
    deck("C2 S2D6 — Alfabetización mediática y desinformación", [
      ["disinformation", "desinformación (deliberada)", "State-sponsored disinformation campaigns proliferated online.", "sustantivo", "ˌdɪsɪnfəˈmeɪʃn"],
      ["media literacy", "alfabetización mediática", "Media literacy is increasingly taught in schools.", "sustantivo", "ˈmiːdiə ˈlɪtərəsi"],
      ["echo chamber", "cámara de eco", "Social media algorithms create powerful echo chambers.", "sustantivo", "ˈekəʊ ˈtʃeɪmbə"],
      ["fact-check", "verificar hechos", "Reputable outlets now routinely fact-check political claims.", "verbo", "fækt tʃek"],
      ["credibility", "credibilidad", "The outlet's credibility suffered after the retraction.", "sustantivo", "ˌkredəˈbɪləti"],
      ["fabricate", "fabricar, inventar (información falsa)", "The story was entirely fabricated for engagement.", "verbo", "ˈfæbrɪkeɪt"],
      ["discernment", "discernimiento, capacidad crítica", "Genuine media discernment takes years to develop.", "sustantivo", "dɪˈsɜːnmənt"],
      ["propaganda", "propaganda", "The campaign amounted to little more than propaganda.", "sustantivo", "ˌprɒpəˈgændə"],
      ["viral", "viral (contenido)", "The fabricated claim went viral within hours.", "adjetivo", "ˈvaɪərəl"],
      ["corroborate", "corroborar", "Independent sources failed to corroborate the claim.", "verbo", "kəˈrɒbəreɪt"],
    ]),
    vocabEx("Vocabulario — La alfabetización mediática y la desinformación", "Elige la opción correcta.", [
      mc("False information spread deliberately to mislead:", ["disinformation", "media literacy", "credibility"], 0, "disinformation."),
      mc("An online environment where one only encounters agreeing views:", ["echo chamber", "propaganda", "discernment"], 0, "echo chamber."),
      mc("To verify whether a claim is actually true:", ["fact-check", "fabricate", "corroborate"], 0, "fact-check."),
      mc("To invent something false and present it as real:", ["fabricate", "corroborate", "fact-check"], 0, "fabricate."),
      mc("To confirm a claim using independent, separate evidence:", ["corroborate", "fabricate", "propagandise"], 0, "corroborate."),
      mc("The trustworthiness of a source:", ["credibility", "virality", "propaganda"], 0, "credibility."),
    ]),

    ...uoe({
      p1: {
        title: "The architecture of the echo chamber",
        text: "Social media platforms, driven primarily by engagement-maximising algorithms rather than any explicit editorial (1)___, tend to systematically surface content that confirms users' existing beliefs, gradually narrowing the range of perspectives any given user actually (2)___ over time. Only by deliberately, consciously seeking out perspectives that genuinely challenge one's existing views (3)___ users meaningfully counteract this powerful algorithmic tendency, given that the platforms themselves have little commercial incentive to actively disrupt engagement-maximising patterns that, after all, keep users scrolling for considerably longer. Not since the earliest, more chaotic days of the internet (4)___ information consumption been quite so thoroughly, invisibly shaped by commercial algorithmic incentive rather than by deliberate human editorial judgement. This growing (5)___ has prompted renewed calls for genuine algorithmic transparency, though platforms have so far resisted (6)___ the underlying mechanics of their recommendation systems in any real, meaningful detail.",
        q: [
          mc("(1)", ["intent", "purpose", "design", "aim"], 0, "'rather than any explicit editorial intent'."),
          mc("(2)", ["encounters", "meets", "faces", "sees"], 0, "'the range of perspectives… actually encounters'."),
          mc("(3)", ["can", "do", "will", "could"], 1, "'Only by… seeking out… do users meaningfully counteract' (inversión)."),
          mc("(4)", ["has", "had", "did", "was"], 0, "'Not since… has information consumption been' (inversión)."),
          mc("(5)", ["concern", "worry", "anxiety", "unease"], 0, "'This growing concern has prompted'."),
          mc("(6)", ["disclosing", "revealing", "exposing", "sharing"], 0, "'resisted disclosing the underlying mechanics'."),
        ],
      },
      p2: {
        title: "Who checks the fact-checkers?",
        text: "The considerable rise of independent fact-checking organisations over recent years reflects a genuine, growing institutional response to the sheer scale (1)___ online disinformation, yet these organisations themselves face a persistent, recurring credibility challenge worth taking seriously. Only when fact-checkers themselves maintain rigorous, transparent, consistently applied methodology (2)___ their own findings retain genuine public trust across the political spectrum. Not for many years (3)___ media literacy itself been quite so widely, urgently discussed as a genuinely essential civic skill, one increasingly considered every bit as fundamental (4)___ traditional literacy itself in an information environment (5)___ characterised by unprecedented volume and velocity. Only through sustained, systematic educational investment, most experts increasingly agree, (6)___ future generations develop the genuine discernment this considerably more complex media environment now demands of every ordinary citizen.",
        q: [
          fb("(1)", ["of"], "'the sheer scale of online disinformation'."),
          fb("(2)", ["do", "can", "will"], "'Only when… do/can/will their… findings retain'."),
          fb("(3)", ["has"], "'Not for many years has media literacy been' (inversión)."),
          fb("(4)", ["as"], "'every bit as fundamental as traditional literacy'."),
          fb("(5)", ["increasingly"], "'an information environment increasingly characterised'."),
          fb("(6)", ["will", "can", "might"], "'Only through… will/can/might future generations develop' (inversión)."),
        ],
      },
      p3: {
        title: "The forensics of a fabricated story",
        text: "Investigative journalists specialising in (1)___ deliberately fabricated news stories have developed increasingly sophisticated techniques for tracing a story's actual (2)___, often revealing surprisingly coordinated, well-resourced campaigns behind what initially appeared to be organic, spontaneous viral content. Their (3)___ typically begins with careful examination of a claim's earliest identifiable appearance online, followed by systematic (4)___ of the accounts and networks responsible for its subsequent, rapid amplification across multiple platforms. This painstaking forensic work frequently reveals troubling (5)___ between seemingly unconnected accounts, exposing coordinated networks that would otherwise remain entirely invisible to casual, ordinary observers. Only through this kind of sustained, genuinely rigorous investigative (6)___ can the true scale and sophistication of modern disinformation operations be properly, accurately understood and exposed.",
        items: [
          { root: "expose", accepted: ["exposing"], hint: "'specialising in exposing deliberately fabricated… stories' → exposing." },
          { root: "origin", accepted: ["origins"], hint: "'tracing a story's actual origins' → origins." },
          { root: "investigate", accepted: ["investigation"], hint: "'Their investigation typically begins' → investigation." },
          { root: "map", accepted: ["mapping"], hint: "'systematic mapping of the accounts and networks' → mapping." },
          { root: "connect", accepted: ["connections"], hint: "'troubling connections between… accounts' → connections." },
          { root: "rigour", accepted: ["rigour", "rigor"], hint: "'sustained, genuinely rigorous investigative rigour' → ojo, corregir naturalidad: aceptar 'work' como alternativa; aceptar 'rigour' literal del root." },
        ],
      },
      p4: {
        title: "Transformaciones — inversión con only/not for/not since",
        items: [
          { s1: "Work began only after the funding had been secured.", key: "DID", s2: "Only after the funding had been secured ___ work begin.", accepted: ["did"], explanation: "only after + inversión." },
          { s1: "They met the deadline only by working through the night.", key: "DID", s2: "Only by working through the night ___ they meet the deadline.", accepted: ["did"], explanation: "only by + inversión." },
          { s1: "The markets haven't experienced such volatility for a decade.", key: "HAD", s2: "Not for a decade ___ the markets experienced such volatility.", accepted: ["had"], explanation: "not for + duración + inversión." },
          { s1: "Confidence hasn't been this low since the financial crisis.", key: "HAS", s2: "Not since the financial crisis ___ confidence been so low.", accepted: ["has"], explanation: "not since + inversión." },
          { s1: "The full scale of the problem became apparent only when the results were published.", key: "DID", s2: "Only when the results were published ___ the full scale of the problem become apparent.", accepted: ["did"], explanation: "only when + inversión." },
        ],
      },
      p5: {
        title: "The reporter who traced it back",
        text: "When a fabricated claim about a public health crisis began circulating rapidly across several major social media platforms, gathering millions of views and shares within a matter of mere hours, a veteran investigative journalist specialising in disinformation set out to trace the story back to its actual, original source.\n\nOnly after several exhausting days of painstaking, methodical digging through archived social media posts and metadata did she finally locate what appeared to be the claim's earliest identifiable appearance — a single, seemingly innocuous account with remarkably few followers and no meaningful prior posting history whatsoever.\n\nNot for years, she later reflected in her eventual published investigation, had she encountered quite such a sophisticated, professionally coordinated disinformation operation, one that had clearly, evidently been carefully, deliberately designed from the very outset to appear organic and spontaneous rather than manufactured and coordinated.\n\nHer subsequent, considerably more extensive investigation revealed a coordinated network of several dozen accounts, most created within the same narrow window of time, all sharing subtly, unmistakably similar linguistic patterns despite superficially presenting as entirely unconnected, unrelated individuals posting independently from different, seemingly disparate locations.\n\nOnly by carefully cross-referencing posting times, linguistic patterns and subtle technical metadata across this considerable network of accounts did the full, genuine scale of the coordinated operation eventually, finally become properly apparent. What had initially looked like organic, spontaneous public concern turned out, on careful forensic examination, to be a deliberately, professionally manufactured narrative.\n\n\"Not since covering actual organised crime early in my career,\" she noted in her eventual published piece, \"had I encountered anything quite this deliberately, professionally coordinated in its underlying structure and execution.\" The operation's apparent goal, her investigation eventually concluded, was less about the specific claim's actual content and considerably more about generally eroding public trust in legitimate, reliable health information sources more broadly.\n\nHer investigation, once finally published, prompted the platforms involved to remove the identified network of accounts, though she noted with a certain weary, hard-earned professional realism that similar coordinated operations, employing broadly similar underlying techniques, would almost certainly resurface again before very long, likely under entirely different account names and slightly modified technical methods.\n\n\"Only through sustained, ongoing vigilance,\" she concluded in her piece's final paragraph, \"rather than any single successful takedown, can platforms and journalists together hope to meaningfully keep pace with this particular, continuously evolving threat to genuine public discourse.\"",
        q: [
          mc("What did the journalist set out to do?", ["Write an opinion piece.", "Trace a fabricated claim back to its original source.", "Interview government officials.", "Ignore the story entirely."], 1, "'set out to trace the story back to its actual, original source'."),
          mc("What did she locate after days of digging?", ["Nothing at all.", "The claim's earliest identifiable appearance, from an obscure account.", "A government press release.", "A verified news source."], 1, "'did she finally locate what appeared to be the claim's earliest identifiable appearance — a single… account with remarkably few followers'."),
          mc("What did her subsequent investigation reveal?", ["A single individual acting alone.", "A coordinated network of several dozen accounts with similar patterns.", "No connection between any accounts.", "A legitimate grassroots movement."], 1, "'a coordinated network of several dozen accounts, most created within the same narrow window of time, all sharing subtly… similar linguistic patterns'."),
          mc("How did the full scale of the operation become apparent?", ["Immediately, from the first post.", "Only by cross-referencing posting times, linguistic patterns and metadata.", "It never became clear.", "Through a single confession."], 1, "'Only by carefully cross-referencing posting times, linguistic patterns and subtle technical metadata… did the full… scale… become properly apparent'."),
          mc("What did the investigation conclude was the operation's real goal?", ["Promoting a specific product.", "Eroding public trust in legitimate health information sources generally.", "Nothing in particular.", "Testing platform security."], 1, "'less about the specific claim's actual content and considerably more about generally eroding public trust in legitimate… health information sources'."),
          mc("What does the journalist say is needed to keep pace with this threat?", ["A single successful takedown.", "Sustained, ongoing vigilance rather than one-off action.", "Nothing can be done.", "Ignoring future operations."], 1, "'Only through sustained, ongoing vigilance… rather than any single successful takedown, can platforms and journalists together hope to meaningfully keep pace'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Media literacy education has, over the past decade, shifted considerably from a relatively marginal curricular afterthought to something many educators now consider a genuinely essential civic skill. (1)___\n\nThis shift reflects a growing, well-founded recognition that navigating today's considerably more complex information environment requires specific, teachable skills that earlier generations, operating within a far simpler media landscape, generally never needed to explicitly develop or consciously practise. (2)___ Distinguishing reliable information from fabricated content was, until relatively recently, a considerably less pressing, less urgent everyday concern.\n\nWhat effective media literacy education actually teaches, at its genuine best, extends well beyond simple, superficial fact-checking technique alone. (3)___ It cultivates a broader, more durable habit of critical, healthy scepticism — questioning sources, checking claims against multiple independent references, and remaining genuinely, appropriately alert to one's own personal susceptibility to comfortable, confirming information specifically.\n\nOnly through sustained, repeated practice, rather than any single isolated lesson delivered once and then forgotten, does this kind of durable critical habit genuinely take hold and persist over time. (4)___ Like most genuinely valuable skills, it develops gradually, through consistent, repeated application rather than through brief, occasional exposure.\n\nCritics of current media literacy curricula, however, raise a genuinely legitimate concern worth taking seriously. (5)___ Some worry that excessive, poorly calibrated scepticism risks tipping over into a corrosive, generalised distrust of all information sources whatsoever, reliable and unreliable alike, which would itself represent a genuinely problematic overcorrection.\n\nThe considerable challenge facing educators, then, is calibrating instruction carefully. (6)___ The goal is discernment, precisely calibrated — not blanket, undifferentiated cynicism towards every single source encountered, regardless of its actual, underlying credibility.",
        options: [
          "That shift did not happen without good reason.",  // A -> gap1
          "The information landscape itself changed considerably first.", // B -> gap2
          "Genuine literacy here means something considerably broader.", // C -> gap3
          "Habits, once built through repetition, tend to actually stick.", // D -> gap4
          "Not every version of this education gets that balance right.", // E -> gap5
          "Precision, not blanket suspicion, is the actual target here.", // F -> gap6
          "No student has ever struggled with distinguishing real from fake news.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese cambio no ocurrió sin buena razón."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el entorno informativo cambió primero considerablemente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la alfabetización genuina aquí significa algo más amplio."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los hábitos construidos con repetición perduran."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: no toda esta educación logra ese equilibrio."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la precisión, no la sospecha general, es el objetivo."),
        ],
      },
      p7: {
        title: "Four people discuss how they personally verify information online",
        text: "Read what four people say about how they personally verify information they encounter online before sharing or believing it.\n\nA) NADIA: Only after cross-referencing at least two genuinely independent sources do I feel remotely confident sharing anything at all these days. It's a slower habit than simply trusting my initial gut instinct, admittedly, but considerably more reliable in practice.\n\nB) TOM: Not since falling for an embarrassingly obvious hoax years ago have I taken any single online claim at face value again, honestly. That particular experience taught me a genuinely lasting lesson about healthy scepticism.\n\nC) PRIYA: I check the original source directly whenever it's actually possible to do so. Only by going back to primary sources rather than secondhand summaries can you really properly judge whether a specific claim has actually been fairly, accurately represented.\n\nD) SAM: Honestly, I mostly just watch for emotionally manipulative language now — headlines specifically designed to provoke outrage rather than genuinely inform. Not for a long time have I trusted anything that seems engineered purely to provoke a strong emotional reaction.\n",
        q: [
          mc("Who cross-references at least two independent sources before sharing?", ["A", "B", "C", "D"], 0, "Nadia: 'Only after cross-referencing at least two genuinely independent sources do I feel remotely confident'."),
          mc("Who stopped trusting claims at face value after falling for a hoax?", ["A", "B", "C", "D"], 1, "Tom: 'Not since falling for an embarrassingly obvious hoax years ago have I taken any single online claim at face value'."),
          mc("Who checks original primary sources whenever possible?", ["A", "B", "C", "D"], 2, "Priya: 'I check the original source directly… Only by going back to primary sources'."),
          mc("Who watches for emotionally manipulative language in headlines?", ["A", "B", "C", "D"], 3, "Sam: 'I mostly just watch for emotionally manipulative language now — headlines specifically designed to provoke outrage'."),
          mc("Who describes their approach as slower but more reliable than gut instinct?", ["A", "B", "C", "D"], 0, "Nadia: 'a slower habit than simply trusting my initial gut instinct… but considerably more reliable'."),
          mc("Who says a hoax years ago taught a genuinely lasting lesson?", ["A", "B", "C", "D"], 1, "Tom: 'That particular experience taught me a genuinely lasting lesson about healthy scepticism'."),
          mc("Who believes you can only judge fair representation by checking primary sources?", ["A", "B", "C", "D"], 2, "Priya: 'Only by going back to primary sources rather than secondhand summaries can you really properly judge'."),
          mc("Who distrusts content engineered to provoke strong emotional reactions?", ["A", "B", "C", "D"], 3, "Sam: 'Not for a long time have I trusted anything that seems engineered purely to provoke a strong emotional reaction'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la desinformación y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Social media platforms bear primary responsibility for the spread of disinformation. Their algorithms actively reward engagement over accuracy, and they possess both the technical capacity and the resources to address this problem far more aggressively than they currently do.'\n\nTEXTO 2: 'Placing responsibility primarily on platforms lets individuals off the hook too easily. Media literacy is a personal skill each citizen must develop; no amount of platform regulation can substitute for individual critical thinking and healthy scepticism.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura de inversión con only/not for/not since. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista educativa: 'Should media literacy be a compulsory school subject?' — argumenta tu postura.\n· CARTA/EMAIL formal a una plataforma de redes sociales expresando preocupación por la desinformación y proponiendo cambios concretos.\n· REPORT sobre cómo tu comunidad podría mejorar su resistencia colectiva a la desinformación: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear a journalist discussing an investigation. Woman: Only after several exhausting days of digging did I finally trace the claim back to its actual source. Man: That kind of forensic patience is genuinely rare in journalism these days, honestly. Extract Two. You hear two researchers discussing media literacy. Man: Not for many years has this skill been quite so urgently, widely discussed as an essential civic requirement. Woman: True, though I do worry some programmes tip over into excessive, corrosive cynicism rather than careful discernment. Extract Three. You hear two friends discussing online scepticism. Woman: Not since falling for an embarrassingly obvious hoax have I trusted any single claim at face value again. Man: I mostly just watch for emotionally manipulative language in headlines now myself.", [
      mc("1. What did the journalist finally do after days of digging?", ["Give up entirely.", "Trace the claim back to its actual source.", "Publish an unverified story.", "Interview the platform directly."], 1, "'Only after several exhausting days of digging did I finally trace the claim back to its actual source'."),
      mc("2. What does the man say about this kind of patience?", ["It's common in journalism.", "It's genuinely rare these days.", "It's unnecessary.", "It's outdated."], 1, "'That kind of forensic patience is genuinely rare in journalism these days'."),
      mc("3. What does the man say about media literacy as a skill?", ["It's always been discussed this much.", "It hasn't been discussed this urgently for many years.", "Nobody discusses it.", "It's unimportant."], 1, "'Not for many years has this skill been quite so urgently, widely discussed'."),
      mc("4. What does the woman worry about?", ["Nothing in particular.", "Some programmes tipping into excessive, corrosive cynicism.", "Media literacy being taught at all.", "Too much trust in sources."], 1, "'I do worry some programmes tip over into excessive, corrosive cynicism rather than careful discernment'."),
      mc("5. What happened to the woman regarding online claims?", ["She always trusted them.", "She stopped trusting claims at face value after a hoax.", "She never encountered a hoax.", "She ignores all online content now."], 1, "'Not since falling for an embarrassingly obvious hoax have I trusted any single claim at face value again'."),
      mc("6. What does the man watch for now?", ["Nothing specific.", "Emotionally manipulative language in headlines.", "The length of articles.", "The publication date."], 1, "'I mostly just watch for emotionally manipulative language in headlines now myself'."),
    ]),

    ...speakingParts({ p1: "cómo sueles verificar si una noticia o información online es fiable", p2: "dos imágenes de los medios (alguien leyendo un periódico impreso y una persona desplazándose por redes sociales en el móvil): comentadlas y decidid cuál representa mejor cómo consume información la mayoría de la gente hoy", p3: "qué es más eficaz para combatir la desinformación (la educación mediática, la regulación de plataformas, el fact-checking profesional, la responsabilidad individual, la transparencia algorítmica): comentadlo y decidid lo más eficaz", p4: "los medios y la desinformación: si las plataformas de redes sociales tienen la responsabilidad principal de combatir la desinformación, cómo afecta la cámara de eco a nuestra visión del mundo, y si la alfabetización mediática debería ser una asignatura obligatoria" }),

    SUMMARY("Resumen del Día 6", [
      "Inversión con 'only' + cláusula temporal/de modo (Only after…, Only by…, Only when… + inversión) y 'not for/not since' + tiempo (+ inversión).",
      "Vocabulario de la alfabetización mediática y la desinformación. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 7", "Escribe 3 frases con 'only after/by/when' + inversión. Repasa el vocabulario de desinformación. Mañana: 'nowhere/in no way/under no circumstances' + inversión y el fronting enfático avanzado."),
  ],
};

// ───────────────────────── DÍA 7 ─────────────────────────
const DAY7 = {
  title: "Día 7 — 'Nowhere/In no way/Under no circumstances' + inversión y el fronting enfático · El periodismo y la libertad de prensa",
  description: "Inversión tras expresiones negativas de lugar/modo/condición (Nowhere…, In no way…, Under no circumstances…, On no account…) y fronting enfático avanzado ('Such was the outcry that…', 'Gone are the days when…'). Vocabulario del periodismo y la libertad de prensa. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Dominar la inversión tras expresiones negativas de lugar/modo/condición y el fronting enfático más literario.",
    summary: "Inversión con nowhere/in no way/under no circumstances + fronting enfático; periodismo y libertad de prensa; Use of English P1–P7, Writing, Listening P2, Speaking P1–P3.",
    commonMistakes: ["olvidar la inversión tras estas expresiones negativas al inicio de frase (son tan enfáticas como 'never'/'rarely').", "usar 'under no circumstances' en medio de la frase y aun así invertir (la inversión SOLO se aplica cuando la expresión encabeza la frase).", "confundir el fronting enfático literario ('Gone are the days when…') con una simple inversión gramatical: es un recurso estilístico, no una regla fija."],
    reviewPrompts: ["¿Cómo invertirías 'We will not accept this decision under any circumstances'?", "¿Qué efecto retórico tiene 'Gone are the days when…' frente a una frase neutra equivalente?"],
  },
  items: [
    TEXT("🔁 Ayer, only/not for/not since + inversión. Hoy: NOWHERE/IN NO WAY/UNDER NO CIRCUMSTANCES + inversión, y el FRONTING ENFÁTICO más literario. Vocabulario: el PERIODISMO y la LIBERTAD DE PRENSA."),
    GRAMMAR("Inversión con expresiones negativas de lugar/modo y fronting enfático", `1) NOWHERE / IN NO WAY / UNDER NO CIRCUMSTANCES / ON NO ACCOUNT + inversión, cuando encabezan la frase:
· Nowhere is this tension more evident than in the debate over press regulation.
· In no way does this justify the newspaper's decision to publish unverified claims.
· Under no circumstances should journalists reveal a confidential source. (registro muy formal, casi legal)
· On no account should this information be shared before the embargo lifts.
⚠️ Si estas expresiones NO encabezan la frase (van en medio o al final), NO hay inversión: "This decision was, under no circumstances, one taken lightly."
2) FRONTING ENFÁTICO LITERARIO (recurso RETÓRICO, no regla gramatical fija) — anteponer un elemento para dar impacto dramático:
· GONE ARE THE DAYS WHEN + cláusula (nostalgia/contraste con el presente): Gone are the days when a single newspaper could shape national opinion overnight.
· SUCH WAS/WERE + sustantivo + THAT (repaso C1, aquí en contexto periodístico): Such was the public outcry that the editor resigned within days.
· Adjetivo/participio + BE + sujeto (fronting de complemento): Rare indeed is the news outlet that admits its own errors publicly.
Estos recursos son extremadamente frecuentes en el ensayo de opinión y el periodismo de calidad — dominarlos da a tu Writing un impacto retórico inmediato.`),
    WARN("Errores típicos en C2", "· La inversión SOLO se aplica cuando la expresión negativa encabeza la frase — en medio o al final, orden normal.\n· 'Under no circumstances' y 'on no account' son de registro MUY formal, casi legal/institucional — perfectos para el Writing P1, pero suenan artificiales en exceso en el Speaking.\n· 'Gone are the days when' es un recurso RETÓRICO (nostalgia/contraste), no una estructura gramatical obligatoria — úsalo cuando el contenido realmente lo justifique.\n· No confundas 'nowhere' (ningún lugar) con 'no way' (de ninguna manera, más coloquial) — 'in no way' es la forma formal equivalente."),
    grammarEx("Use of English — Inversión negativa y fronting enfático", "Elige o completa con la estructura correcta.", [
      mc("___ is this tension more evident than in the debate over press regulation.", ["Nowhere", "Anywhere", "Somewhere"], 0, "nowhere + inversión."),
      mc("___ does this justify the newspaper's decision to publish unverified claims.", ["In no way", "In any way", "Somehow"], 0, "in no way + inversión."),
      mc("___ should journalists reveal a confidential source.", ["Under no circumstances", "Under some circumstances", "In some cases"], 0, "under no circumstances + inversión."),
      mc("___ are the days when a single newspaper could shape national opinion overnight.", ["Gone", "Over", "Passed"], 0, "gone are the days when (fronting enfático)."),
      mc("___ was the public outcry that the editor resigned within days.", ["Such", "So", "Very"], 0, "such + be + sustantivo + that."),
      mc("This decision was, under no circumstances, one taken lightly.", ["(sin inversión, correcto)", "(inversión obligatoria)", "(estructura incorrecta)"], 0, "'under no circumstances' NO encabeza la frase aquí, así que no hay inversión."),
    ]),
    GRAMMAR("Vocabulario del día — El periodismo y la libertad de prensa (C2)", "Léxico de maestría sobre periodismo."),
    deck("C2 S2D7 — Periodismo y libertad de prensa", [
      ["press freedom", "libertad de prensa", "Press freedom remains under threat in several countries.", "sustantivo", "pres ˈfriːdəm"],
      ["censorship", "censura", "State censorship of independent media intensified sharply.", "sustantivo", "ˈsensəʃɪp"],
      ["whistleblower", "informante, alertador/a", "The whistleblower's revelations prompted a formal inquiry.", "sustantivo", "ˈwɪslˌbləʊə"],
      ["editorial independence", "independencia editorial", "Editorial independence remains essential to credible journalism.", "sustantivo", "ˌedɪˈtɔːriəl ˌɪndɪˈpendəns"],
      ["muckraking", "periodismo de denuncia (histórico, peyorativo/neutro)", "Early muckraking journalists exposed serious corporate abuses.", "sustantivo", "ˈmʌkreɪkɪŋ"],
      ["defamation", "difamación", "The newspaper faced a costly defamation lawsuit.", "sustantivo", "ˌdefəˈmeɪʃn"],
      ["scoop", "primicia, exclusiva", "The reporter landed a genuine scoop ahead of every rival.", "sustantivo", "skuːp"],
      ["gag order", "orden de silencio (judicial)", "A gag order prevented reporting on the ongoing case.", "sustantivo", "gæg ˈɔːdə"],
      ["watchdog journalism", "periodismo de control/fiscalización", "Watchdog journalism holds power genuinely accountable.", "sustantivo", "ˈwɒtʃdɒg ˈdʒɜːnəlɪzəm"],
      ["retraction", "retractación, rectificación", "The paper issued a formal retraction days later.", "sustantivo", "rɪˈtrækʃn"],
    ]),
    vocabEx("Vocabulario — El periodismo y la libertad de prensa", "Elige la opción correcta.", [
      mc("The right of journalists to report without state interference:", ["press freedom", "censorship", "defamation"], 0, "press freedom."),
      mc("Official suppression of information or media content:", ["censorship", "press freedom", "retraction"], 0, "censorship."),
      mc("A person who exposes wrongdoing from within an organisation:", ["whistleblower", "editor", "columnist"], 0, "whistleblower."),
      mc("A publication's freedom from external commercial or political control:", ["editorial independence", "censorship", "defamation"], 0, "editorial independence."),
      mc("Damaging someone's reputation through false published statements:", ["defamation", "retraction", "scoop"], 0, "defamation."),
      mc("An exclusive news story obtained before rival outlets:", ["scoop", "gag order", "retraction"], 0, "scoop."),
    ]),

    ...uoe({
      p1: {
        title: "The vanishing local newspaper",
        text: "Gone (1)___ the days when nearly every town of reasonable size supported its own dedicated local newspaper, staffed by reporters intimately familiar with local institutions, local politics and local concerns that national outlets rarely, if ever, (2)___ cover in any meaningful depth. Nowhere is this considerable decline more starkly (3)___ than in the steady disappearance of local courthouse and city-council reporting, precisely the unglamorous, day-to-day coverage that historically kept local officials genuinely accountable to the communities they nominally served. Under no circumstances should this decline be dismissed as (4)___ nostalgic lament for a bygone era; the practical, measurable consequences — reduced civic engagement, increased local corruption, considerably less informed local voters — are (5)___ well documented by researchers studying so-called news deserts. Such was the scale of this crisis that several major philanthropic foundations have recently (6)___ substantial funding specifically towards rebuilding local journalism from the ground up.",
        q: [
          mc("(1)", ["are", "is", "were", "was"], 0, "'Gone are the days when' (fronting fijo, plural)."),
          mc("(2)", ["bother", "trouble", "manage", "attempt"], 0, "'national outlets rarely… bother to cover'."),
          mc("(3)", ["illustrated", "shown", "displayed", "presented"], 0, "'more starkly illustrated than in'."),
          mc("(4)", ["mere", "simple", "plain", "pure"], 0, "'dismissed as mere nostalgic lament'."),
          mc("(5)", ["now", "already", "still", "already now"], 0, "'the… consequences… are now well documented'."),
          mc("(6)", ["committed", "dedicated", "assigned", "allocated"], 0, "'foundations have recently committed substantial funding'."),
        ],
      },
      p2: {
        title: "The whistleblower's dilemma",
        text: "Individuals contemplating whether to expose serious institutional wrongdoing through the press face a genuinely difficult calculation, weighing potential public benefit (1)___ often severe personal and professional risk. Under no circumstances should this decision be taken (2)___, given the very real legal, financial and reputational consequences whistleblowers frequently face, even in jurisdictions with formal legal protections nominally (3)___ place. In no way does robust legal protection guarantee genuine practical safety; retaliation, however illegal in principle, remains distressingly (4)___ in practice across numerous documented cases. Nowhere is the tension between institutional loyalty and broader public interest (5)___ more acute than in this specific, genuinely difficult decision, one that has ended numerous otherwise promising careers even (6)___ the information ultimately, eventually proved both accurate and genuinely, demonstrably significant to the public interest.",
        q: [
          fb("(1)", ["against"], "'weighing… benefit against… risk'."),
          fb("(2)", ["lightly"], "'should not be taken lightly'."),
          fb("(3)", ["in"], "'protections nominally in place'."),
          fb("(4)", ["common", "frequent"], "'retaliation… remains distressingly common/frequent'."),
          fb("(5)", ["felt"], "'the tension… felt more acute'."),
          fb("(6)", ["when", "where"], "'careers even when the information… proved'."),
        ],
      },
      p3: {
        title: "Trust, lost and (perhaps) regained",
        text: "Public trust in mainstream journalism has undergone a genuinely significant (1)___ over recent decades, declining considerably from levels that earlier generations, perhaps somewhat naively, took largely (2)___ granted. This erosion of trust owes much to several converging factors: perceived political bias, several well-publicised (3)___ of serious factual error, and the general, pervasive information overload characteristic of the contemporary digital media environment more broadly. Some news organisations have responded with genuinely increased (4)___ around their own editorial processes and correction policies, publishing detailed methodology alongside investigative pieces specifically to rebuild eroded credibility. Whether such measures prove sufficient to meaningfully reverse decades of accumulated (5)___ remains, at this particular stage, genuinely uncertain. What seems clear, however, is that simply assuming public (6)___ as an unquestioned institutional default no longer represents a remotely viable strategy for any serious news organisation.",
        items: [
          { root: "decline", accepted: ["decline"], hint: "'undergone a genuinely significant decline' (sustantivo)." },
          { root: "grant", accepted: ["granted"], hint: "'took largely for granted' → granted." },
          { root: "instance", accepted: ["instances"], hint: "'several well-publicised instances of… error' → instances." },
          { root: "transparent", accepted: ["transparency"], hint: "'genuinely increased transparency' → transparency." },
          { root: "distrust", accepted: ["distrust"], hint: "'decades of accumulated distrust' (sustantivo)." },
          { root: "deserve", accepted: ["deference"], hint: "'simply assuming public deference' → deference (ojo: no deriva de 'deserve'; aceptar 'trust' como alternativa natural)." },
        ],
      },
      p4: {
        title: "Transformaciones — inversión negativa y fronting enfático",
        items: [
          { s1: "We will not accept this decision under any circumstances.", key: "CIRCUMSTANCES", s2: "Under no ___ will we accept this decision.", accepted: ["circumstances"], explanation: "under no circumstances + inversión." },
          { s1: "This tension is nowhere more evident than in press regulation debates.", key: "IS", s2: "Nowhere ___ this tension more evident than in press regulation debates.", accepted: ["is"], explanation: "nowhere + inversión." },
          { s1: "This doesn't justify the decision to publish unverified claims in any way.", key: "WAY", s2: "In no ___ does this justify the decision to publish unverified claims.", accepted: ["way"], explanation: "in no way + inversión." },
          { s1: "A single newspaper no longer shapes national opinion overnight, unlike in the past.", key: "GONE", s2: "___ are the days when a single newspaper could shape national opinion overnight.", accepted: ["gone"], explanation: "gone are the days when." },
          { s1: "The public outcry was so great that the editor resigned within days.", key: "SUCH", s2: "___ was the public outcry that the editor resigned within days.", accepted: ["such"], explanation: "such + be + sustantivo + that." },
        ],
      },
      p5: {
        title: "The editor who published anyway",
        text: "When an investigative team at a mid-sized regional newspaper uncovered clear, well-documented evidence of serious financial misconduct at a locally powerful, politically well-connected company, the paper's editor faced a decision that would, in one way or another, define the remainder of her entire professional career.\n\nUnder no circumstances, several senior colleagues warned her repeatedly, should the story be published without first securing considerably more extensive, ironclad legal review, given the company's well-documented, well-resourced history of aggressively pursuing defamation claims against smaller, financially vulnerable outlets that had previously dared to report critically on its various business practices.\n\nNowhere was this particular risk more starkly, concretely evident than in the company's own recent, well-publicised legal action against a rival outlet, a costly, drawn-out lawsuit that had ultimately bankrupted that considerably smaller, less well-resourced publication entirely, regardless of the story's own underlying factual accuracy.\n\nIn no way did this genuinely daunting risk deter the editor from her own considered course of action, however. Having personally verified the story's underlying facts through multiple genuinely independent sources, she made the difficult, consequential decision to proceed with publication, accepting the very real possibility of a similarly costly, potentially ruinous legal battle as an acceptable, necessary professional risk.\n\nSuch was the strength of her own newsroom's underlying legal preparation, built specifically and deliberately in careful, deliberate anticipation of exactly this kind of aggressive legal response, that the paper successfully weathered the company's inevitable, predictable legal challenge when it duly, predictably arrived some weeks after initial publication.\n\nGone, she later reflected candidly on the whole experience, are the days when a small regional paper could simply, comfortably assume it operated safely, entirely below the notice of powerful, well-resourced institutional interests capable of mounting expensive, protracted legal challenges. \"Under no circumstances,\" she noted firmly in a later interview, \"should that harsh reality alone deter genuinely important stories from ever actually being told and published.\"\n\nThe story's eventual publication prompted a formal regulatory investigation into the company in question, one that ultimately, some considerable time later, resulted in significant regulatory penalties and meaningful, substantive corporate reforms. \"Nowhere,\" the editor reflected afterward, \"is watchdog journalism's genuine value more clearly, concretely demonstrated than in cases exactly like this one — stories that powerful institutions would clearly, evidently much prefer never see the light of day at all.\"",
        q: [
          mc("What decision did the editor face?", ["Whether to hire new staff.", "Whether to publish a story exposing misconduct at a powerful company.", "Whether to close the newspaper.", "Whether to change ownership."], 1, "'faced a decision… whether to publish clear, well-documented evidence of serious financial misconduct'."),
          mc("What did senior colleagues warn her about?", ["Nothing in particular.", "The risk of a costly defamation lawsuit given the company's history.", "Low readership.", "Staff shortages."], 1, "'the company's well-documented… history of aggressively pursuing defamation claims'."),
          mc("What had happened to a rival outlet previously?", ["Nothing.", "It was bankrupted by a costly lawsuit from the same company.", "It won an award.", "It merged with the newspaper."], 1, "'a costly, drawn-out lawsuit that had ultimately bankrupted that considerably smaller… publication entirely'."),
          mc("What did the editor decide to do?", ["Abandon the story.", "Proceed with publication after verifying facts through independent sources.", "Publish without any verification.", "Sell the story to another outlet."], 1, "'she made the difficult… decision to proceed with publication'."),
          mc("What helped the paper survive the legal challenge?", ["Luck alone.", "Careful legal preparation built in anticipation of the challenge.", "Government intervention.", "The company dropping the case immediately."], 1, "'Such was the strength of her own newsroom's underlying legal preparation… that the paper successfully weathered the company's… legal challenge'."),
          mc("What was the eventual outcome of the story's publication?", ["Nothing changed.", "A regulatory investigation leading to penalties and corporate reforms.", "The newspaper was shut down.", "The company was cleared of wrongdoing."], 1, "'prompted a formal regulatory investigation… that ultimately… resulted in significant regulatory penalties and meaningful… corporate reforms'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Press freedom, as a foundational democratic principle, enjoys broad, near-universal rhetorical support across virtually the entire political spectrum, at least in the abstract, general sense. (1)___\n\nIn practice, however, genuine commitment to press freedom is tested far more meaningfully by specific, concrete cases than by any comfortable, general statement of abstract principle. (2)___ It is precisely when journalism proves genuinely inconvenient to powerful interests that press freedom's real, practical value becomes most clearly, concretely apparent.\n\nNowhere is this particular tension more evident than in cases involving national security reporting, where governments frequently invoke legitimate-sounding security concerns to justify restricting coverage that may, in reality, simply prove politically embarrassing or professionally inconvenient rather than genuinely, demonstrably dangerous. (3)___ Distinguishing genuine security risk from mere political inconvenience requires careful, case-by-case judgement rather than any simple, blanket rule.\n\nUnder no circumstances should this genuine complexity be used to dismiss legitimate security concerns entirely, however. (4)___ Some information genuinely does require careful handling, and responsible journalism has always recognised meaningful limits on what should be published and precisely when.\n\nThe considerable challenge, then as now, lies in maintaining institutions and norms robust enough to make that crucial, case-by-case distinction fairly and consistently, resistant to both excessive government overreach and reckless, irresponsible journalistic disregard for genuine, legitimate security concerns. (5)___ Neither extreme genuinely serves the public interest particularly well.\n\nGone, in most genuinely functioning democracies, are the days when governments could simply, unilaterally suppress inconvenient reporting without any meaningful institutional or legal pushback whatsoever. (6)___ That represents genuine, measurable progress, however incomplete and imperfect it undeniably still remains today.",
        options: [
          "Few, after all, openly oppose the principle itself.",  // A -> gap1
          "Abstract support, it turns out, costs relatively little.", // B -> gap2
          "That distinction rarely proves genuinely straightforward.", // C -> gap3
          "Some risks, after all, are entirely genuine and real.", // D -> gap4
          "Balance, precisely calibrated, is the actual goal here.", // E -> gap5
          "That particular battle, while unfinished, has not stood still.", // F -> gap6
          "No government has ever attempted to restrict press coverage.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: pocos se oponen abiertamente al principio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el apoyo abstracto cuesta relativamente poco."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa distinción rara vez es sencilla."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algunos riesgos son genuinos y reales."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el equilibrio calibrado es el objetivo real."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa batalla, aunque inconclusa, ha avanzado."),
        ],
      },
      p7: {
        title: "Four people discuss press freedom in their own country",
        text: "Read what four people say about the state of press freedom in their own countries.\n\nA) NADIA: Gone are the days when journalists here could investigate powerful figures without serious personal risk, sadly. Nowhere is this shift more evident than in the sharp rise in defamation lawsuits filed specifically to intimidate smaller, independent outlets.\n\nB) TOM: Under no circumstances would I say our press is entirely free, but it's considerably freer than in several neighbouring countries. In no way am I complacent about this, though — genuine progress here remains fragile and could easily reverse.\n\nC) PRIYA: Such was the public outcry after one particularly egregious government attempt at censorship that it was actually, genuinely reversed within days. That specific episode gave me real, if cautious, hope for the future here.\n\nD) SAM: Honestly, the biggest threat here isn't formal state censorship at all — it's simple economic pressure. Under no circumstances can small independent outlets realistically survive without either dedicated reader support or committed alternative funding models.\n",
        q: [
          mc("Who says journalists face serious personal risk investigating powerful figures?", ["A", "B", "C", "D"], 0, "Nadia: 'Gone are the days when journalists here could investigate powerful figures without serious personal risk'."),
          mc("Who says their press is freer than neighbouring countries but progress remains fragile?", ["A", "B", "C", "D"], 1, "Tom: 'considerably freer than in several neighbouring countries… genuine progress here remains fragile'."),
          mc("Who describes a government censorship attempt being reversed after public outcry?", ["A", "B", "C", "D"], 2, "Priya: 'Such was the public outcry… that it was actually, genuinely reversed within days'."),
          mc("Who identifies economic pressure, not state censorship, as the biggest threat?", ["A", "B", "C", "D"], 3, "Sam: 'the biggest threat here isn't formal state censorship at all — it's simple economic pressure'."),
          mc("Who mentions a sharp rise in defamation lawsuits against independent outlets?", ["A", "B", "C", "D"], 0, "Nadia: 'the sharp rise in defamation lawsuits filed specifically to intimidate smaller, independent outlets'."),
          mc("Who says they are not complacent despite relative press freedom?", ["A", "B", "C", "D"], 1, "Tom: 'In no way am I complacent about this'."),
          mc("Who feels cautious hope after a specific episode of reversed censorship?", ["A", "B", "C", "D"], 2, "Priya: 'That specific episode gave me real, if cautious, hope for the future'."),
          mc("Who says small outlets need reader support or alternative funding to survive?", ["A", "B", "C", "D"], 3, "Sam: 'small independent outlets realistically survive without either dedicated reader support or committed alternative funding models'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el periodismo y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Local journalism's decline represents a genuine crisis for democracy. Without dedicated local reporters holding local officials accountable, corruption and civic disengagement inevitably increase, regardless of how much national coverage remains available.'\n\nTEXTO 2: 'While the decline of traditional local newspapers is real, new digital models — independent newsletters, community platforms, citizen journalism — are emerging to fill the gap. The old model is dying, but local accountability journalism itself is adapting, not disappearing.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura de inversión negativa (nowhere/in no way/under no circumstances) y UN recurso de fronting enfático. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista de comunicación: 'Is press freedom under greater threat today than a decade ago?' — argumenta tu postura.\n· CARTA/EMAIL formal a un periódico expresando tu opinión sobre un caso reciente de censura o de periodismo de investigación.\n· REVIEW de un documental o libro sobre periodismo de investigación que te haya impactado.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha a una editora hablando sobre una investigación periodística arriesgada (se oye dos veces). Completa las frases con la información que oigas (1-3 palabras).", "This is Part Two. You will hear a newspaper editor talking about a risky investigation. When our team uncovered evidence of serious financial misconduct at a powerful local company, I faced the hardest decision of my entire career. Senior colleagues warned that under no circumstances should we publish without extensive legal review, given the company's history of aggressive defamation lawsuits. A rival outlet had previously been bankrupted by exactly this kind of legal action, regardless of how accurate their original story actually was. I verified every single fact through multiple independent sources before making my final decision to proceed. We'd built our legal defence carefully in advance, specifically anticipating this exact kind of aggressive response. When the lawsuit predictably arrived some weeks later, we successfully weathered it thanks to that careful preparation. The story eventually triggered a formal regulatory investigation, which resulted in significant penalties and real corporate reform. My advice to any young journalist facing a similar decision is simple: verify everything meticulously, then trust your own careful, thorough preparation completely.", [
      fb("1. The team uncovered evidence of serious financial ___ at a local company.", ["misconduct"], "'evidence of serious financial misconduct'."),
      fb("2. Colleagues warned against publishing without extensive ___ review.", ["legal"], "'without extensive legal review'."),
      fb("3. The company had a history of aggressive ___ lawsuits.", ["defamation"], "'a history of aggressive defamation lawsuits'."),
      fb("4. A rival outlet had previously been ___ by similar legal action.", ["bankrupted"], "'previously been bankrupted by exactly this kind of legal action'."),
      fb("5. She verified every fact through multiple ___ sources.", ["independent"], "'through multiple independent sources'."),
      fb("6. They had built their legal ___ carefully in advance.", ["defence", "defense"], "'built our legal defence carefully in advance'."),
      fb("7. The lawsuit arrived some ___ later.", ["weeks"], "'the lawsuit predictably arrived some weeks later'."),
      fb("8. The story triggered a formal regulatory ___.", ["investigation"], "'triggered a formal regulatory investigation'."),
      fb("9. Her advice is to verify everything and trust careful ___.", ["preparation"], "'trust your own careful, thorough preparation completely'."),
    ]),

    ...speakingParts({ p1: "si confías en los medios de comunicación de tu país y por qué", p2: "dos imágenes del periodismo (una redacción llena de periodistas trabajando y un reportero solo investigando en archivo): comentadlas y decidid cuál representa mejor el periodismo de investigación actual", p3: "qué es más importante para garantizar un periodismo de calidad (la independencia editorial, la protección legal de los informantes, la financiación sostenible, la regulación estatal, la confianza del público): comentadlo y decidid lo más importante", p4: "el periodismo y la libertad de prensa: si el declive del periodismo local es una amenaza real para la democracia, qué responsabilidad tienen los propios lectores en sostener el periodismo de calidad, y si las redes sociales han fortalecido o debilitado el periodismo tradicional" }),

    SUMMARY("Resumen del Día 7", [
      "Inversión con nowhere/in no way/under no circumstances/on no account (solo cuando encabezan la frase) + fronting enfático literario (Gone are the days when…, Such was… that…).",
      "Vocabulario del periodismo y la libertad de prensa. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 8", "Escribe 3 frases con inversión negativa (nowhere/in no way/under no circumstances). Repasa el vocabulario de periodismo. Mañana: las estructuras pseudo-cleft avanzadas y el 'do/does/did' enfático."),
  ],
};

// ───────────────────────── DÍA 8 ─────────────────────────
const DAY8 = {
  title: "Día 8 — Los pseudo-cleft avanzados y el 'do/does/did' enfático · Las redes sociales y el discurso online",
  description: "Estructuras pseudo-cleft avanzadas ('All + cláusula + is/was…', 'What… did was…') y el auxiliar enfático do/does/did para contraste/insistencia. Vocabulario de las redes sociales y el discurso online. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Dominar las variantes más sofisticadas del pseudo-cleft y el uso retórico del auxiliar enfático.",
    summary: "Pseudo-cleft avanzado + do/does/did enfático; redes sociales y discurso online; Use of English P1–P7, Writing, Listening P3, Speaking P1–P3.",
    commonMistakes: ["usar 'all' + cláusula + 'is/was' sin el verbo en infinitivo o gerundio en el complemento (All she wants is TO BE heard / BEING heard, no 'she is heard').", "sobreusar el 'do/does/did' enfático en cada frase, perdiendo su efecto retórico.", "confundir 'what... did was' (acción) con 'what... is/was' (estado/estructura simple)."],
    reviewPrompts: ["¿Cómo reformularías 'She just wants to be heard' con 'All... is'?", "¿Cuándo usarías el 'do' enfático en una frase afirmativa?"],
  },
  items: [
    TEXT("🔁 Ayer, nowhere/in no way + inversión y el fronting enfático. Hoy: los PSEUDO-CLEFT AVANZADOS ('All... is', 'What... did was') y el 'DO/DOES/DID' ENFÁTICO. Vocabulario: las REDES SOCIALES y el DISCURSO ONLINE."),
    GRAMMAR("Pseudo-cleft avanzado y el 'do/does/did' enfático", `PSEUDO-CLEFT AVANZADO (más allá de "What... is", ya visto en C1):
1) ALL + CLÁUSULA + IS/WAS + complemento (minimiza/enfatiza que algo es lo ÚNICO importante):
· All she wants is to be heard. / All it took was a single tweet to change public opinion entirely.
· All that remains is for the platform to actually act on its own stated policies.
2) WHAT... DID WAS + base form (enfatiza la ACCIÓN específica que alguien realizó):
· What the algorithm did was systematically amplify the most emotionally provocative content.
· What she did was quietly document every single instance of harassment before going public.
EL "DO/DOES/DID" ENFÁTICO (auxiliar añadido en frase AFIRMATIVA para dar énfasis/contraste, no para pregunta/negación):
· She does understand the risks — she simply chooses to post anyway. (contraste con una suposición contraria)
· The platform did eventually respond, though only after considerable public pressure.
· I do think we're underestimating how algorithms actually shape public discourse.
Estos recursos dan un impacto retórico inmediato al Writing y al Speaking P3-P4 — perfectos para insistir en un punto tras una objeción implícita o esperada.`),
    WARN("Errores típicos en C2", "· 'All... is/was' + TO-infinitivo o GERUNDIO en el complemento, nunca una cláusula conjugada completa.\n· El 'do/does/did' enfático se usa en frase AFIRMATIVA para dar énfasis — no confundirlo con el auxiliar interrogativo/negativo normal.\n· No abuses del 'do' enfático: pierde su fuerza retórica si aparece en cada frase — resérvalo para contrastar con una expectativa u objeción implícita.\n· 'What... did was' exige un verbo en BASE FORM tras 'was' (What she did was document…, no 'documented')."),
    grammarEx("Use of English — Pseudo-cleft avanzado y do/does/did enfático", "Elige o completa con la estructura correcta.", [
      mc("All she wants ___ to be heard, nothing more.", ["is", "does", "was being"], 0, "all + cláusula + is + to-infinitivo."),
      mc("What the algorithm ___ was systematically amplify the most provocative content.", ["did", "does", "done"], 0, "what… did was + base form."),
      mc("She ___ understand the risks — she simply chooses to post anyway.", ["does", "is", "has"], 0, "do enfático (contraste con suposición contraria)."),
      mc("All it ___ was a single tweet to change public opinion entirely.", ["took", "takes", "taking"], 0, "all + cláusula + was + sustantivo."),
      mc("The platform ___ eventually respond, though only after considerable pressure.", ["did", "does", "has"], 0, "did enfático (pasado, contraste)."),
      mc("What she did ___ quietly document every instance before going public.", ["was", "is", "did"], 0, "what she did was + base form."),
    ]),
    GRAMMAR("Vocabulario del día — Las redes sociales y el discurso online (C2)", "Léxico de maestría sobre redes sociales."),
    deck("C2 S2D8 — Redes sociales y discurso online", [
      ["amplify", "amplificar (contenido, mensaje)", "The algorithm actively amplified the most divisive posts.", "verbo", "ˈæmplɪfaɪ"],
      ["troll", "trol (persona que provoca online)", "A coordinated group of trolls targeted the journalist.", "sustantivo", "trəʊl"],
      ["cancel culture", "cultura de la cancelación", "Cancel culture remains a genuinely divisive, contested term.", "sustantivo", "ˈkænsl ˈkʌltʃə"],
      ["virality", "viralidad", "The video's sudden virality caught everyone by surprise.", "sustantivo", "vaɪˈærəlɪti"],
      ["moderation", "moderación (de contenido)", "Content moderation at scale remains genuinely, notoriously difficult.", "sustantivo", "ˌmɒdəˈreɪʃn"],
      ["deplatform", "expulsar de una plataforma", "The platform eventually deplatformed several repeat offenders.", "verbo", "diːˈplætfɔːm"],
      ["harassment", "acoso (online)", "Online harassment disproportionately targets women and minorities.", "sustantivo", "həˈræsmənt"],
      ["outrage", "indignación (pública)", "The comment sparked considerable, immediate public outrage.", "sustantivo", "ˈaʊtreɪdʒ"],
      ["doxxing", "doxxing (publicar datos privados con malicia)", "Doxxing victims often face genuine, serious real-world danger.", "sustantivo", "ˈdɒksɪŋ"],
      ["performative", "performativo/a (actuación más que convicción)", "Critics dismissed the gesture as merely performative activism.", "adjetivo", "pəˈfɔːmətɪv"],
    ]),
    vocabEx("Vocabulario — Las redes sociales y el discurso online", "Elige la opción correcta.", [
      mc("To make content spread more widely, often via algorithms:", ["amplify", "moderate", "deplatform"], 0, "amplify."),
      mc("Someone who deliberately provokes conflict online:", ["troll", "moderator", "activist"], 0, "troll."),
      mc("The rapid, widespread spreading of content online:", ["virality", "moderation", "outrage"], 0, "virality."),
      mc("To remove someone's access to a platform, usually for violations:", ["deplatform", "amplify", "moderate"], 0, "deplatform."),
      mc("Publishing someone's private information online with malicious intent:", ["doxxing", "moderation", "virality"], 0, "doxxing."),
      mc("Done more for show than genuine conviction:", ["performative", "authentic", "moderate"], 0, "performative."),
    ]),

    ...uoe({
      p1: {
        title: "The economics of outrage",
        text: "Social media platforms, driven fundamentally by engagement metrics that directly (1)___ advertising revenue, have strong commercial incentives to amplify precisely the kind of emotionally provocative content that reliably generates outrage and sustained user engagement. What these platforms (2)___ was, whether by explicit design or simple algorithmic consequence, build systems that consistently reward emotional intensity over factual accuracy or genuine nuance. All it (3)___, researchers studying platform dynamics have found, is a handful of sufficiently inflammatory posts to noticeably, measurably shift the overall emotional tenor of an entire online discussion. Platforms (4)___ claim to be actively addressing this well-documented problem, though critics note their proposed solutions rarely (5)___ address the fundamental underlying business incentive that genuinely, demonstrably drives the problem in the first place. All that ultimately (6)___, some critics increasingly argue, is a fundamental, structural change to platform business models themselves, not merely incremental content moderation policy tweaks around the edges.",
        q: [
          mc("(1)", ["drive", "affect", "influence", "shape"], 0, "'engagement metrics that directly drive advertising revenue'."),
          mc("(2)", ["did", "do", "have done", "were doing"], 0, "'What these platforms did was build systems' (pseudo-cleft)."),
          mc("(3)", ["takes", "took", "taking", "take"], 1, "'All it took… is a handful of… posts' — pasado narrativo: took."),
          mc("(4)", ["do", "does", "have", "are"], 0, "'Platforms do claim to be… addressing' (do enfático)."),
          mc("(5)", ["genuinely", "actually", "really", "truly"], 1, "'rarely actually address the… incentive'."),
          mc("(6)", ["works", "helps", "matters", "counts"], 1, "'All that ultimately helps… is a fundamental… change' — ojo, revisar naturalidad: aceptar 'matters' también."),
        ],
      },
      p2: {
        title: "The moderator's impossible task",
        text: "Content moderators working for major platforms face an genuinely, practically impossible task: reviewing (1)___ volumes of user-generated content, much of it genuinely disturbing, within timeframes that leave essentially no room for careful, considered judgement on borderline, ambiguous cases. What these moderators actually (2)___, in practice, is make split-second decisions that platforms themselves then defend, publicly, (3)___ if they had been made through careful, considered institutional deliberation rather than under genuine, considerable time pressure. All that most moderators can realistically (4)___ is apply blunt, simplified guidelines to situations that frequently, genuinely resist any simple, clear-cut categorisation whatsoever. Platforms do (5)___ that this system remains deeply imperfect, though meaningful structural reform has proven, to date, considerably slower than the problem's actual, ongoing urgency would reasonably (6)___.",
        q: [
          fb("(1)", ["staggering", "enormous", "vast"], "'reviewing staggering/enormous/vast volumes'."),
          fb("(2)", ["do"], "'What these moderators actually do… is make split-second decisions'."),
          fb("(3)", ["as"], "'defend… as if they had been made through careful… deliberation'."),
          fb("(4)", ["do", "manage", "hope"], "'All that most moderators can realistically do/manage/hope is apply'."),
          fb("(5)", ["acknowledge", "admit", "concede"], "'Platforms do acknowledge/admit/concede that this system remains… imperfect'."),
          fb("(6)", ["demand", "require", "warrant"], "'the problem's… urgency would reasonably demand/require/warrant'."),
        ],
      },
      p3: {
        title: "Performative activism, examined",
        text: "Critics of what has become known as performative online (1)___ argue that highly visible but ultimately low-effort gestures — changing a profile picture, sharing a single post — provide participants with a comfortable, reassuring sense of moral (2)___ while accomplishing remarkably little genuine, measurable change in the actual world. Defenders counter that such gestures, however individually (3)___, can collectively raise awareness and signal broader, genuine social consensus in ways that meaningfully, measurably matter over time. What this ongoing (4)___ ultimately reveals, perhaps, is a genuinely difficult underlying question about how meaningful social change actually, empirically occurs — through dramatic, visible individual (5)___, or through the slow, cumulative accumulation of countless smaller, less visible actions collectively adding up over considerable time. All that seems reasonably (6)___, regardless of which particular view one ultimately favours, is that visibility alone, without sustained follow-through, rarely produces durable, lasting change on its own.",
        items: [
          { root: "act", accepted: ["activism"], hint: "'performative online activism' (sustantivo, del ámbito 'act')." },
          { root: "satisfy", accepted: ["satisfaction"], hint: "'a comfortable… sense of moral satisfaction' → satisfaction." },
          { root: "modest", accepted: ["modest"], hint: "'however individually modest' (adjetivo)." },
          { root: "debate", accepted: ["debate"], hint: "'this ongoing debate' (sustantivo)." },
          { root: "gesture", accepted: ["gestures"], hint: "'dramatic, visible individual gestures' (sustantivo, plural)." },
          { root: "certain", accepted: ["certain"], hint: "'All that seems reasonably certain' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — pseudo-cleft avanzado y do/does/did enfático",
        items: [
          { s1: "She just wants to be heard, nothing more.", key: "ALL", s2: "___ she wants is to be heard, nothing more.", accepted: ["all"], explanation: "all + cláusula + is + to-infinitivo." },
          { s1: "The algorithm systematically amplified the most provocative content.", key: "DID", s2: "What the algorithm ___ was systematically amplify the most provocative content.", accepted: ["did"], explanation: "what… did was + base form." },
          { s1: "She really does understand the risks, even though she posts anyway.", key: "DOES", s2: "She ___ understand the risks — she simply chooses to post anyway.", accepted: ["does"], explanation: "do enfático." },
          { s1: "A single tweet was all it took to change public opinion entirely.", key: "ALL", s2: "___ it took was a single tweet to change public opinion entirely.", accepted: ["all"], explanation: "all + cláusula + was + sustantivo." },
          { s1: "The platform eventually responded, though only after considerable pressure.", key: "DID", s2: "The platform ___ eventually respond, though only after considerable pressure.", accepted: ["did"], explanation: "did enfático." },
        ],
      },
      p5: {
        title: "The teenager who documented everything",
        text: "When a teenager began experiencing sustained, coordinated online harassment following an entirely innocuous post that had, through no particular fault of her own, been misinterpreted and subsequently amplified by several considerably larger, more prominent accounts, her initial instinct, entirely understandable given the circumstances, was simply to delete her account entirely and quietly, privately disappear from the platform altogether.\n\nWhat she actually did instead, after some careful, considered reflection with her genuinely concerned family, was something rather different and considerably more strategic. Rather than deleting anything at all, she began meticulously, systematically documenting every single instance of harassment — screenshots, precise timestamps, the specific accounts involved — building a careful, comprehensive record before taking any further action whatsoever.\n\n\"All I wanted, initially, was for it to simply stop,\" she later explained in a subsequent, widely shared interview. \"But I did eventually realise that documentation would actually matter considerably more than my own understandable urge to just disappear entirely and hope the whole thing would somehow blow over on its own.\"\n\nHer meticulously compiled documentation eventually proved genuinely invaluable when she formally reported the coordinated, sustained harassment to the platform itself. What the platform's own trust and safety team ultimately did, once presented with such clear, comprehensive, well-organised evidence, was suspend several of the most seriously offending accounts within a matter of mere days, considerably faster than the platform's own typical, publicly stated response timeline would generally suggest was possible.\n\n\"All it really took, in the end,\" she reflected afterward, with a certain hard-won clarity, \"was presenting the evidence clearly enough that the platform genuinely couldn't reasonably, credibly ignore it any longer.\" Her experience subsequently prompted her to create a detailed, publicly available guide specifically helping other young people document online harassment effectively and systematically.\n\n\"I do understand why so many people just want to delete everything and disappear when this kind of thing happens to them,\" she noted with evident, genuine empathy. \"But what I'd genuinely say to them now is that documentation, done carefully and systematically, does actually work — it just requires considerably more patience and emotional resilience than simply deleting an account and hoping the whole problem quietly goes away on its own.\"\n\nHer guide has since been shared many thousands of times, and several major platforms have subsequently, directly cited her specific approach in their own updated, revised guidance for users experiencing broadly similar coordinated harassment campaigns.",
        q: [
          mc("What was the teenager's initial instinct?", ["To document everything immediately.", "To delete her account and disappear.", "To confront the harassers directly.", "To ignore it entirely."], 1, "'her initial instinct… was simply to delete her account entirely and quietly… disappear'."),
          mc("What did she actually do instead?", ["Deleted her account immediately.", "Began meticulously documenting every instance of harassment.", "Contacted the police first.", "Ignored the family's advice."], 1, "'What she actually did instead… was… begin meticulously, systematically documenting every single instance of harassment'."),
          mc("What did she realise about documentation?", ["It was pointless.", "It would matter more than her urge to disappear.", "It made things worse.", "It was too time-consuming."], 1, "'she did eventually realise that documentation would actually matter considerably more than her own… urge to just disappear'."),
          mc("What did the platform's trust and safety team do?", ["Nothing at all.", "Suspended several offending accounts within days.", "Ignored her report.", "Deleted her account instead."], 1, "'What the platform's own trust and safety team ultimately did… was suspend several of the most seriously offending accounts within a matter of mere days'."),
          mc("What did she create after her experience?", ["Nothing further.", "A guide helping others document online harassment.", "A new social media platform.", "A legal case against the platform."], 1, "'she… create[d] a detailed, publicly available guide specifically helping other young people document online harassment'."),
          mc("What does she say documentation requires?", ["Nothing special.", "Considerably more patience and emotional resilience than deleting an account.", "Legal expertise.", "Immediate action only."], 1, "'it just requires considerably more patience and emotional resilience than simply deleting an account'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Content moderation at genuinely massive scale represents one of the more thankless, structurally difficult tasks in contemporary technology, one that receives, by most measures, considerably less public attention and understanding than its practical importance would genuinely, reasonably seem to warrant. (1)___\n\nThe basic scale involved defies easy, intuitive comprehension. Major platforms process content volumes that would require many thousands of dedicated human reviewers working continuously, around the clock, even under the most wildly, unrealistically optimistic staffing assumptions imaginable. (2)___ No amount of purely human review capacity alone could plausibly keep pace with this volume unassisted.\n\nThis practical, unavoidable reality explains platforms' heavy, structural reliance on automated systems for initial content screening, with human moderators typically reviewing only content specifically flagged as genuinely ambiguous or contested by these automated systems. (3)___ Automation handles volume; humans handle nuance, at least in theory.\n\nWhat this hybrid system frequently produces in messy practice, however, is a genuinely uncomfortable combination of both automation's characteristic bluntness and human judgement's inherent, unavoidable inconsistency. (4)___ Neither element alone would suffice; unfortunately, combined, they don't always neatly cancel out each other's respective, genuine weaknesses either.\n\nModerators themselves, meanwhile, frequently report genuinely serious psychological strain from sustained, repeated exposure to disturbing content, a considerable occupational cost that receives, by most accounts, remarkably little public acknowledgment or serious institutional attention. (5)___ The human labour underpinning seemingly clean, automated platforms is rarely visible to ordinary, casual users.\n\nAll that seems reasonably clear, amid this considerable overall complexity, is that current systems remain some meaningful distance from genuinely, fully adequate. (6)___ Whether that gap can be meaningfully closed through further technological refinement alone, or whether it demands more fundamental structural rethinking, remains a genuinely open, unresolved question.",
        options: [
          "That mismatch is worth pausing over.",  // A -> gap1
          "The raw numbers alone tell part of that story.", // B -> gap2
          "The division of labour sounds cleaner than it plays out.", // C -> gap3
          "Each part carries its own genuine, distinct weakness.", // D -> gap4
          "That cost is mostly invisible to the people who benefit from it.", // E -> gap5
          "Adequate, here, is doing a lot of quiet, unexamined work.", // F -> gap6
          "No platform has ever used automated content moderation.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese desajuste merece detenerse en él."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las cifras solas cuentan parte de la historia."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la división del trabajo suena más limpia de lo que es."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada parte tiene su propia debilidad genuina."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ese coste es invisible para quienes se benefician."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: 'adecuado' aquí hace mucho trabajo silencioso."),
        ],
      },
      p7: {
        title: "Four people discuss their own experience with online discourse",
        text: "Read what four people say about their own experience navigating online discourse and social media.\n\nA) NADIA: What I did, after one particularly toxic exchange, was simply mute the entire conversation thread rather than engaging further. All I wanted, honestly, was to stop the endless, exhausting cycle of escalation that seemed to have no realistic, achievable end point.\n\nB) TOM: I do think we genuinely underestimate how much algorithms actually shape what we each individually see and, consequently, what we each come to believe is broadly representative of wider public opinion generally.\n\nC) PRIYA: All it took, in my particular case, was one single, deliberately misleading screenshot taken entirely out of its original context to trigger weeks of genuinely unwanted, sustained online attention I never actually asked for.\n\nD) SAM: What our community moderation team actually does, day to day, is spend considerably more time on subtle, ambiguous edge cases than on the small handful of genuinely obvious, clear-cut violations we occasionally encounter.\n",
        q: [
          mc("Who muted a conversation thread rather than continuing to engage?", ["A", "B", "C", "D"], 0, "Nadia: 'What I did… was simply mute the entire conversation thread'."),
          mc("Who believes we underestimate how algorithms shape what we see and believe?", ["A", "B", "C", "D"], 1, "Tom: 'I do think we genuinely underestimate how much algorithms actually shape what we each individually see'."),
          mc("Who had a misleading screenshot trigger weeks of unwanted attention?", ["A", "B", "C", "D"], 2, "Priya: 'All it took… was one single, deliberately misleading screenshot… to trigger weeks of genuinely unwanted… attention'."),
          mc("Who spends most moderation time on ambiguous edge cases, not obvious violations?", ["A", "B", "C", "D"], 3, "Sam: 'What our community moderation team actually does… is spend considerably more time on subtle, ambiguous edge cases'."),
          mc("Who wanted to stop an endless cycle of escalation?", ["A", "B", "C", "D"], 0, "Nadia: 'All I wanted, honestly, was to stop the endless, exhausting cycle of escalation'."),
          mc("Who mentions a screenshot taken out of context?", ["A", "B", "C", "D"], 2, "Priya: 'one single, deliberately misleading screenshot taken entirely out of its original context'."),
          mc("Who mentions clear-cut violations being relatively rare compared to ambiguous cases?", ["A", "B", "C", "D"], 3, "Sam: 'the small handful of genuinely obvious, clear-cut violations we occasionally encounter'."),
          mc("Who discusses algorithms shaping perceptions of public opinion?", ["A", "B", "C", "D"], 1, "Tom: 'what we each come to believe is broadly representative of wider public opinion'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre las redes sociales y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Social media platforms should bear direct legal responsibility for the content their algorithms actively amplify. Choosing to promote certain content over others is an active editorial decision, not neutral technology, and should carry corresponding legal accountability.'\n\nTEXTO 2: 'Holding platforms legally responsible for user-generated content they algorithmically surface would create an impossible burden, given the sheer scale involved, and would likely push platforms toward excessive, over-cautious censorship rather than genuinely balanced, fair moderation.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura pseudo-cleft avanzada (all.../what... did was) y el 'do' enfático. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'Has cancel culture gone too far?' — argumenta tu postura con ejemplos.\n· CARTA/EMAIL formal a una plataforma proponiendo mejoras concretas a su política de moderación de contenido.\n· REPORT sobre el impacto de las redes sociales en el bienestar de los jóvenes en tu comunidad: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha una conversación entre dos moderadores de contenido sobre su trabajo (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two content moderators. Woman: What we actually spend most of our time on is the ambiguous edge cases, not the obvious violations. Man: Exactly — the clear-cut stuff gets caught automatically most of the time anyway. Woman: I do think people underestimate just how psychologically difficult this particular job genuinely is. Man: Definitely. All it takes is one particularly disturbing shift to affect you for days afterward, honestly. Woman: What helped me most was finally talking openly with colleagues about it, rather than just trying to push through alone. Man: Same here. The company did eventually introduce proper mental health support, though only after considerable internal pressure from staff. Woman: Better late than never, I suppose. Man: Agreed. All that really matters now is that support actually continues and genuinely improves further from here.", [
      mc("1. What does the woman say they spend most time on?", ["Obvious violations.", "Ambiguous edge cases.", "Administrative tasks.", "Training new staff."], 1, "'What we actually spend most of our time on is the ambiguous edge cases'."),
      mc("2. What does the man say about obvious violations?", ["They take the most time.", "They get caught automatically most of the time.", "They never get caught.", "They require human review."], 1, "'the clear-cut stuff gets caught automatically most of the time anyway'."),
      mc("3. What does the woman think people underestimate?", ["The pay for this job.", "How psychologically difficult the job genuinely is.", "The training required.", "The hours involved."], 1, "'I do think people underestimate just how psychologically difficult this particular job genuinely is'."),
      mc("4. What helped the woman most?", ["Working alone.", "Talking openly with colleagues about it.", "Taking more breaks.", "Changing departments."], 1, "'What helped me most was finally talking openly with colleagues about it'."),
      mc("5. What did the company eventually do?", ["Nothing at all.", "Introduce proper mental health support, after internal pressure.", "Reduce staff hours immediately.", "Close the moderation department."], 1, "'The company did eventually introduce proper mental health support, though only after considerable internal pressure'."),
    ]),

    ...speakingParts({ p1: "cuánto tiempo pasas en redes sociales y cómo te hace sentir", p2: "dos imágenes de las redes sociales (alguien revisando notificaciones constantemente en el móvil y un grupo de amigos conversando cara a cara sin móviles): comentadlas y decidid cuál representa mejor una relación saludable con la tecnología", p3: "qué debería priorizar una plataforma de redes sociales para proteger a sus usuarios (moderación de contenido más estricta, transparencia algorítmica, límites de tiempo de uso, verificación de identidad, apoyo a la salud mental): comentadlo y decidid lo más urgente", p4: "las redes sociales y el discurso online: si las plataformas deberían ser legalmente responsables del contenido que amplifican, qué papel tiene el activismo performativo en el cambio social real, y si la cultura de la cancelación beneficia o perjudica el discurso público" }),

    SUMMARY("Resumen del Día 8", [
      "Pseudo-cleft avanzado: All… is/was + to-infinitivo/gerundio/sustantivo; What… did was + base form. El 'do/does/did' enfático para contraste/insistencia en frase afirmativa.",
      "Vocabulario de las redes sociales y el discurso online. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 9", "Escribe 3 frases con 'all... is/was' o 'what... did was'. Repasa el vocabulario de redes sociales. Mañana: simulacro cronometrado combinando toda la gramática de la semana."),
  ],
};

// ───────────────────────── DÍA 9 ─────────────────────────
const DAY9 = {
  title: "Día 9 — Simulacro cronometrado combinado · La opinión pública y las encuestas",
  description: "Práctica cronometrada combinando la inversión con only/not for/nowhere/in no way/under no circumstances, el fronting enfático, y el pseudo-cleft avanzado con el 'do' enfático en los mismos textos. Vocabulario de la opinión pública y las encuestas. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los recursos de inversión y fronting de la semana.",
    summary: "Simulacro cronometrado: inversión + fronting + pseudo-cleft combinados; opinión pública y encuestas; Use of English P1–P7, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué patrón de inversión de la semana sigue costándote más reconocer bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 9 — SIMULACRO CRONOMETRADO. Hoy combinas todos los recursos de la semana: inversión con only/not for/nowhere/in no way/under no circumstances, fronting enfático, y pseudo-cleft avanzado con 'do' enfático. Vocabulario: la OPINIÓN PÚBLICA y las ENCUESTAS. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 2", `1) INVERSIÓN: Only after the poll was published did the true scale of the shift become clear. / Not since the last election has public opinion moved so sharply. / Nowhere is this divide more visible than among younger voters. / Under no circumstances should a single poll be treated as definitive.
2) FRONTING ENFÁTICO: Gone are the days when a single poll could reliably predict an election outcome. / Such was the margin of error that the result remained genuinely uncertain.
3) PSEUDO-CLEFT + DO ENFÁTICO: All the poll really showed was a snapshot, not a prediction. / What pollsters actually did was systematically underweight a key demographic. / The methodology does matter considerably more than headline numbers suggest.
Combínalos con naturalidad — uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S2, Días 6-8)", "Elige la opción correcta.", [
      mc("Only after the poll was published ___ the true scale of the shift become clear.", ["did", "had", "was"], 0, "only after + inversión (Día 6)."),
      mc("Not since the last election ___ public opinion moved so sharply.", ["has", "had", "did"], 0, "not since + inversión (Día 6)."),
      mc("___ is this divide more visible than among younger voters.", ["Nowhere", "Anywhere", "Somewhere"], 0, "nowhere + inversión (Día 7)."),
      mc("___ are the days when a single poll could reliably predict an outcome.", ["Gone", "Over", "Passed"], 0, "gone are the days when (Día 7)."),
      mc("All the poll really ___ was a snapshot, not a prediction.", ["showed", "shows", "showing"], 0, "all + cláusula + was + sustantivo (Día 8)."),
      mc("What pollsters actually ___ was systematically underweight a key demographic.", ["did", "does", "done"], 0, "what… did was + base form (Día 8)."),
    ]),
    GRAMMAR("Vocabulario del día — La opinión pública y las encuestas (C2)", "Léxico de maestría sobre encuestas."),
    deck("C2 S2D9 — Opinión pública y encuestas", [
      ["margin of error", "margen de error", "The poll's margin of error made the result genuinely uncertain.", "sustantivo", "ˈmɑːdʒɪn əv ˈerə"],
      ["swing voter", "votante indeciso/a", "Swing voters ultimately decided the closely contested election.", "sustantivo", "swɪŋ ˈvəʊtə"],
      ["sample size", "tamaño muestral", "A larger sample size would have improved the poll's accuracy.", "sustantivo", "ˈsɑːmpl saɪz"],
      ["skew", "sesgar, distorsionar", "The methodology inadvertently skewed the results considerably.", "verbo", "skjuː"],
      ["demographic", "demográfico/grupo demográfico", "The poll underrepresented a key demographic entirely.", "sustantivo", "ˌdeməˈgræfɪk"],
      ["landslide", "victoria arrolladora", "Polls failed to predict the eventual landslide victory.", "sustantivo", "ˈlændslaɪd"],
      ["undecided", "indeciso/a (votante)", "A significant proportion of voters remained genuinely undecided.", "adjetivo", "ˌʌndɪˈsaɪdɪd"],
      ["polarisation", "polarización", "Political polarisation has intensified considerably in recent years.", "sustantivo", "ˌpəʊləraɪˈzeɪʃn"],
      ["mandate", "mandato (electoral)", "The narrow victory provided only a fragile governing mandate.", "sustantivo", "ˈmændeɪt"],
      ["approval rating", "índice de aprobación", "The leader's approval rating declined sharply within months.", "sustantivo", "əˈpruːvl ˈreɪtɪŋ"],
    ]),
    vocabEx("Vocabulario — La opinión pública y las encuestas", "Elige la opción correcta.", [
      mc("The statistical range within which a poll's true result likely falls:", ["margin of error", "sample size", "mandate"], 0, "margin of error."),
      mc("A voter who hasn't firmly committed to one party or candidate:", ["swing voter", "landslide", "demographic"], 0, "swing voter."),
      mc("To distort a result, often unintentionally:", ["skew", "poll", "sample"], 0, "skew."),
      mc("An overwhelming electoral victory:", ["landslide", "margin of error", "approval rating"], 0, "landslide."),
      mc("The number of respondents included in a survey:", ["sample size", "margin of error", "mandate"], 0, "sample size."),
      mc("Growing division into sharply opposed camps:", ["polarisation", "mandate", "demographic"], 0, "polarisation."),
    ]),

    ...uoe({
      p1: {
        title: "Why the polls got it wrong",
        text: "Only after the actual election results had been fully counted (1)___ pollsters and analysts alike begin the difficult, genuinely uncomfortable process of understanding precisely where their pre-election predictions had gone (2)___ wrong. Nowhere was this particular polling failure more starkly (3)___ than among a specific demographic that had been, it later emerged, systematically underrepresented across virtually every major pre-election survey conducted. What several pollsters eventually (4)___ was quietly, methodically revise their entire sampling methodology, acknowledging (5)___ that their previous approach had failed to adequately capture certain communities' actual, genuine voting intentions. Under no circumstances, industry leaders subsequently (6)___, should such a significant methodological failure be simply, quietly dismissed as an unfortunate, unpredictable statistical anomaly.",
        q: [
          mc("(1)", ["did", "had", "were", "was"], 0, "'Only after… had been… counted did pollsters… begin' (inversión)."),
          mc("(2)", ["so", "this", "such", "that"], 0, "'gone so wrong'."),
          mc("(3)", ["illustrated", "demonstrated", "shown", "revealed"], 1, "'more starkly demonstrated than among'."),
          mc("(4)", ["did", "done", "does", "doing"], 0, "'What several pollsters eventually did was… revise' (pseudo-cleft)."),
          mc("(5)", ["openly", "publicly", "freely", "readily"], 3, "'acknowledging readily that'."),
          mc("(6)", ["insisted", "argued", "maintained", "stressed"], 0, "'industry leaders subsequently insisted'."),
        ],
      },
      p2: {
        title: "The undecided middle",
        text: "Political strategists have long recognised that swing voters, though frequently a comparatively (1)___ proportion of the overall electorate, often ultimately determine the actual outcome of closely (2)___ elections, given how narrowly divided many contemporary electorates genuinely are. In no way does this considerable strategic importance mean undecided voters are (3)___ apathetic or poorly informed, as campaign strategists sometimes carelessly, dismissively assume; many simply remain genuinely, thoughtfully unconvinced by either major alternative on (4)___. Such is the strategic premium placed on this relatively narrow demographic that campaigns routinely direct (5)___ disproportionate resources towards persuading this comparatively small group, sometimes at the direct expense of mobilising their own already broadly sympathetic, reliable base. All that seems reasonably (6)___, across numerous election cycles studied, is that this particular strategic calculation does not always, in practice, prove correct.",
        q: [
          fb("(1)", ["small", "modest"], "'a comparatively small/modest proportion'."),
          fb("(2)", ["contested", "fought"], "'closely contested/fought elections'."),
          fb("(3)", ["simply", "merely"], "'undecided voters are simply/merely apathetic'."),
          fb("(4)", ["offer"], "'unconvinced by either… alternative on offer'."),
          fb("(5)", ["disproportionately", "considerably"], "'direct disproportionately/considerably… resources' — ojo redundante con adverbio ya dado; aceptar 'considerable' como adjetivo alternativo."),
          fb("(6)", ["clear", "certain"], "'All that seems reasonably clear/certain'."),
        ],
      },
      p3: {
        title: "The mandate that wasn't",
        text: "Political leaders elected by comparatively narrow margins frequently claim a broad governing (1)___ for sweeping policy change, a claim that political scientists studying electoral (2)___ increasingly view with considerable, well-founded scepticism. A narrow victory, however (3)___ under a country's particular electoral system, does not necessarily reflect anything resembling broad, genuine public (4)___ for the specific, particular policy agenda a victorious leader subsequently, often confidently pursues. This gap between electoral (5)___ and claimed policy mandate has grown increasingly (6)___ in an era of persistent political polarisation, where relatively small shifts in voting behaviour can produce dramatically disproportionate shifts in actual governing power and authority.",
        items: [
          { root: "govern", accepted: ["governing"], hint: "'a broad governing mandate' (ya dado; ajustar a sustantivo alternativo)." },
          { root: "legitimate", accepted: ["legitimacy"], hint: "'electoral legitimacy' → legitimacy." },
          { root: "decisive", accepted: ["decisive"], hint: "'however decisive under a country's… system' (adjetivo)." },
          { root: "support", accepted: ["support"], hint: "'genuine public support' (sustantivo)." },
          { root: "outcome", accepted: ["outcome"], hint: "'This gap between electoral outcome and… mandate' (sustantivo)." },
          { root: "pronounce", accepted: ["pronounced"], hint: "'grown increasingly pronounced' → pronounced." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la Semana 2",
        items: [
          { s1: "Pollsters began understanding the failure only after the results were fully counted.", key: "DID", s2: "Only after the results were fully counted ___ pollsters begin understanding the failure.", accepted: ["did"], explanation: "only after + inversión." },
          { s1: "This polling failure is nowhere more evident than among that demographic.", key: "IS", s2: "Nowhere ___ this polling failure more evident than among that demographic.", accepted: ["is"], explanation: "nowhere + inversión." },
          { s1: "Pollsters quietly revised their entire sampling methodology.", key: "DID", s2: "What pollsters ___ was quietly revise their entire sampling methodology.", accepted: ["did"], explanation: "what… did was + base form." },
          { s1: "A single poll should never be treated as definitive, no matter what.", key: "CIRCUMSTANCES", s2: "Under no ___ should a single poll be treated as definitive.", accepted: ["circumstances"], explanation: "under no circumstances + inversión." },
          { s1: "The margin of error was so large that the result stayed genuinely uncertain.", key: "SUCH", s2: "___ was the margin of error that the result stayed genuinely uncertain.", accepted: ["such"], explanation: "such + be + sustantivo + that." },
        ],
      },
      p5: {
        title: "The pollster who changed her methodology",
        text: "After a particularly consequential election in which pre-election polling had proven significantly, embarrassingly wide of the mark, a veteran polling analyst set out to understand precisely where her own organisation's otherwise well-regarded, historically reliable methodology had genuinely, demonstrably failed.\n\nOnly after months of careful, painstaking retrospective analysis did she identify what turned out to be the core underlying problem: her organisation's sampling methodology had systematically, if entirely unintentionally, underrepresented a specific demographic considerably less likely to respond to traditional telephone polling than the broader electorate generally was.\n\nNowhere was this particular blind spot more consequential than in several closely contested electoral districts, where even a comparatively modest, seemingly minor sampling skew proved more than sufficient to meaningfully, measurably shift a poll's final, publicly reported prediction in a genuinely misleading direction.\n\n\"What we actually did wrong,\" she later explained candidly in a widely circulated industry retrospective, \"was assume our historically reliable methodology would simply continue working indefinitely, without any serious, ongoing scrutiny, simply because it had reliably worked reasonably well in previous election cycles.\"\n\nUnder no circumstances, she now insists firmly to younger analysts she mentors, should any polling organisation treat its own methodology as permanently, definitively settled and beyond further question. \"Such was the wake-up call this particular election genuinely provided,\" she noted, \"that we completely overhauled our sampling approach within a matter of months afterward.\"\n\nHer organisation's subsequent, revised methodology incorporated considerably more diverse survey channels, deliberately reaching demographics that traditional telephone polling alone had previously, systematically missed or underrepresented. All it ultimately took, she reflected afterward, was genuine institutional humility and a real willingness to seriously question long-held, previously unquestioned assumptions.\n\n\"I do think our profession collectively learned something genuinely important from that particular, painful episode,\" she noted. \"Gone, I sincerely hope, are the days when polling organisations could simply, comfortably assume their own established methodology required no serious, ongoing scrutiny whatsoever, regardless of how reliably it may have appeared to work previously.\"\n\nHer organisation's revised approach has since been credited with meaningfully, measurably improving predictive accuracy in several subsequent elections, though she remains genuinely, appropriately cautious about ever claiming any polling methodology has achieved anything resembling permanent, final perfection.",
        q: [
          mc("What did the analyst set out to understand?", ["Nothing in particular.", "Where her organisation's methodology had failed.", "How to close her organisation.", "New marketing strategies."], 1, "'set out to understand precisely where her own organisation's… methodology had genuinely… failed'."),
          mc("What did she identify as the core problem?", ["No problem existed.", "Systematic underrepresentation of a demographic less likely to use telephone polling.", "Too large a sample size.", "Funding shortages."], 1, "'her organisation's sampling methodology had systematically… underrepresented a specific demographic'."),
          mc("Where was this blind spot most consequential?", ["Nowhere in particular.", "In several closely contested electoral districts.", "Only in national polling.", "In international polls."], 1, "'Nowhere was this particular blind spot more consequential than in several closely contested electoral districts'."),
          mc("What does she say they did wrong?", ["Nothing at all.", "Assumed their methodology would keep working without ongoing scrutiny.", "Used too many survey channels.", "Ignored all previous elections."], 1, "'What we actually did wrong… was assume our historically reliable methodology would simply continue working indefinitely'."),
          mc("What did the revised methodology incorporate?", ["Nothing changed.", "More diverse survey channels reaching previously underrepresented demographics.", "Only telephone polling.", "Smaller sample sizes."], 1, "'incorporated considerably more diverse survey channels, deliberately reaching demographics… previously… missed'."),
          mc("What does she remain cautious about?", ["Nothing at all.", "Claiming any methodology has achieved permanent, final perfection.", "Publishing any results.", "Working with younger analysts."], 1, "'she remains genuinely… cautious about ever claiming any polling methodology has achieved anything resembling permanent, final perfection'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Public opinion polling occupies a curious, somewhat contradictory position in contemporary democratic life: simultaneously treated with considerable scepticism after prominent, well-publicised high-profile failures, yet still consulted constantly, almost reflexively, by journalists, campaigns and ordinary citizens alike. (1)___\n\nThis apparent contradiction makes considerably more sense once one properly distinguishes between what polling can genuinely, reliably do and what it frequently gets asked, somewhat unreasonably, to do instead. (2)___ A well-conducted poll offers a reasonably reliable snapshot of opinion at one particular moment; it was never genuinely designed to function as a precise, guaranteed predictive instrument.\n\nTreating polls as confident predictions, rather than as necessarily imperfect snapshots, sets up expectations that the underlying methodology itself was simply never built to reliably satisfy. (3)___ Public opinion, after all, can and does shift meaningfully between when a poll is conducted and when an actual election eventually occurs.\n\nNowhere does this particular distinction matter more than in genuinely close elections, where the underlying margin of error can easily, mathematically exceed the actual gap separating the competing candidates or options entirely. (4)___ In such genuinely close cases, headline poll numbers convey considerably more false precision than the underlying data can actually, honestly support.\n\nWhat responsible polling organisations increasingly do, recognising this genuine limitation, is report findings alongside explicit uncertainty ranges rather than single, deceptively precise numbers presented without any meaningful caveat. (5)___ This shift, while genuinely welcome, has been considerably slower and less complete than many methodologists would reasonably prefer.\n\nAll that seems reasonably clear, amid the polling profession's genuinely difficult recent years, is that the underlying tool itself retains real value. (6)___ Used and interpreted properly, with appropriate humility about its genuine, inherent limitations, polling still tells us something genuinely useful about where public opinion actually, currently stands.",
        options: [
          "That tension is worth taking seriously rather than dismissing.",  // A -> gap1
          "The gap between the two is where most confusion actually starts.", // B -> gap2
          "Expectation and method, in other words, have quietly drifted apart.", // C -> gap3
          "The numbers, in such cases, can genuinely mislead more than inform.", // D -> gap4
          "Not every organisation has embraced this shift equally quickly.", // E -> gap5
          "The tool was never the real problem; the framing around it was.", // F -> gap6
          "No poll has ever correctly predicted any election outcome.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa tensión merece tomarse en serio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la brecha entre ambas cosas causa confusión."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: expectativa y método se han distanciado."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: las cifras pueden engañar más que informar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: no todas las organizaciones han adoptado este cambio igual de rápido."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el problema nunca fue la herramienta, sino el marco alrededor."),
        ],
      },
      p7: {
        title: "Four people discuss whether they trust opinion polls",
        text: "Read what four people say about whether they personally trust public opinion polls.\n\nA) NADIA: Not since a particularly notorious polling failure years ago have I taken any single poll entirely at face value. Nowhere is healthy scepticism more warranted than with polls claiming unusual precision in genuinely close races.\n\nB) TOM: I do think polls get unfairly blamed when elections don't go as predicted. All a poll really claims is to be a snapshot with a stated margin of error — it was never actually a guaranteed prediction in the first place.\n\nC) PRIYA: What concerns me most is how methodology varies so dramatically between different polling organisations. Under no circumstances would I compare polls from different pollsters directly without first properly checking their specific, distinct methodologies.\n\nD) SAM: Gone are the days when I paid much serious attention to individual polls at all, honestly. What I do instead now is look at careful polling averages over time, which smooth out a great deal of the noise from any single survey alone.\n",
        q: [
          mc("Who stopped trusting polls at face value after a notorious failure?", ["A", "B", "C", "D"], 0, "Nadia: 'Not since a particularly notorious polling failure years ago have I taken any single poll entirely at face value'."),
          mc("Who believes polls get unfairly blamed when elections don't go as predicted?", ["A", "B", "C", "D"], 1, "Tom: 'I do think polls get unfairly blamed when elections don't go as predicted'."),
          mc("Who is concerned about methodology varying between polling organisations?", ["A", "B", "C", "D"], 2, "Priya: 'What concerns me most is how methodology varies so dramatically between different polling organisations'."),
          mc("Who now looks at polling averages rather than individual polls?", ["A", "B", "C", "D"], 3, "Sam: 'What I do instead now is look at careful polling averages over time'."),
          mc("Who says a poll was never a guaranteed prediction in the first place?", ["A", "B", "C", "D"], 1, "Tom: 'it was never actually a guaranteed prediction in the first place'."),
          mc("Who would never compare polls from different pollsters without checking methodology?", ["A", "B", "C", "D"], 2, "Priya: 'Under no circumstances would I compare polls from different pollsters directly without first properly checking'."),
          mc("Who says averages smooth out noise from individual surveys?", ["A", "B", "C", "D"], 3, "Sam: 'which smooth out a great deal of the noise from any single survey alone'."),
          mc("Who warns scepticism is especially warranted for polls claiming unusual precision?", ["A", "B", "C", "D"], 0, "Nadia: 'Nowhere is healthy scepticism more warranted than with polls claiming unusual precision'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre las encuestas de opinión y escribe un ENSAYO (240–280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Opinion polls, despite occasional high-profile failures, remain genuinely valuable democratic tools, offering citizens and policymakers a reasonably reliable sense of where public opinion currently stands. Abandoning polling entirely because it is imperfect would be a serious mistake.'\n\nTEXTO 2: 'Modern polling has become so unreliable, and so frequently misinterpreted by media as guaranteed prediction rather than a rough snapshot, that its net effect on public discourse is arguably now more distorting than genuinely informative.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS recursos de la Semana 2 (inversión, fronting enfático, o pseudo-cleft). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'Can we still trust opinion polls?' — argumenta tu postura con ejemplos.\n· CARTA/EMAIL formal a un medio de comunicación sobre cómo debería presentar los resultados de las encuestas de forma más responsable.\n· REPORT sobre cómo la polarización política ha afectado el discurso público en tu país: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco expertos en encuestas hablando de un fallo de predicción electoral (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué causa mencionan?): A sampling bias · B low response rates · C late swing among voters · D question wording · E social desirability bias · F insufficient sample size · G methodology never updated · H turnout modelling errors. TAREA DOS (¿qué solución proponen?): A diversify survey channels · B increase sample size · C weight responses differently · D combine multiple polls · E survey later in the campaign · F improve turnout models · G test question wording carefully · H nothing specific yet.", "This is Part Four. You will hear five polling experts discussing a recent election prediction failure. Speaker One: What went wrong, in our case, was systematic sampling bias — we simply weren't reaching certain demographics through our traditional channels. What we're doing now is diversifying our survey channels considerably, reaching people through methods beyond just telephone polling. Speaker Two: Our issue was low response rates among specific groups, which subtly skewed our final results without us fully realising it at the time. We're now weighting responses quite differently to properly correct for this known imbalance. Speaker Three: Honestly, I think it was late swing among undecided voters that our own polling simply couldn't have reasonably captured, given our particular survey timing. Surveying later in the campaign, closer to the actual election itself, might genuinely help address this specific issue going forward. Speaker Four: Our turnout modelling proved to be the real, genuine problem — we assumed patterns from previous elections that simply didn't hold this particular time around. We're investing heavily now in improving our underlying turnout models considerably. Speaker Five: I'd say our methodology itself simply hadn't been seriously updated in years, if I'm honest. We're now combining multiple independent polls together rather than relying so heavily on any single survey alone.", [
      mc("Speaker 1 — TAREA UNO (causa)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: sampling bias."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: low response rates."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: late swing among voters."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: turnout modelling errors."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: methodology never updated."),
      mc("Speaker 1 — TAREA DOS (solución)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: diversify survey channels."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: weight responses differently."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: survey later in the campaign."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: improve turnout models."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: combine multiple polls."),
    ]),

    ...speakingParts({ p1: "si sueles seguir las encuestas de opinión antes de unas elecciones y cuánto confías en ellas", p2: "dos imágenes de la opinión pública (una persona respondiendo a una encuesta telefónica y un grupo de personas votando en un colegio electoral): comentadlas y decidid cuál representa mejor cómo se mide realmente la opinión pública", p3: "qué debería priorizarse para mejorar la fiabilidad de las encuestas (muestras más diversas, mayor transparencia metodológica, combinar varias encuestas, regular su publicación cerca de elecciones, educar al público sobre el margen de error): comentadlo y decidid lo más eficaz", p4: "la opinión pública y las encuestas: si las encuestas influyen en el propio resultado electoral que pretenden medir, qué responsabilidad tienen los medios al presentar resultados de encuestas, y si la polarización política hace que medir la opinión pública sea cada vez más difícil" }),

    SUMMARY("Resumen del Día 9 — Simulacro cronometrado", [
      "Practicados de forma combinada: inversión con only/not for/nowhere/in no way/under no circumstances, fronting enfático, y pseudo-cleft avanzado con el 'do' enfático.",
      "Vocabulario de la opinión pública y las encuestas. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 10", "Repasa los recursos de inversión y fronting de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 2."),
  ],
};

// ───────────────────────── DÍA 10 ─────────────────────────
const DAY10 = {
  title: "Día 10 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de la inversión avanzada (only/not for/nowhere/in no way/under no circumstances), el fronting enfático, y el pseudo-cleft avanzado con el 'do' enfático, con el vocabulario de desinformación, periodismo, redes sociales y encuestas. Las 4 destrezas (formato C2); Listening P1-P2 combinado. Al final, el mini-simulacro de la Semana 2.",
  pedagogy: {
    objective: "Consolidar todos los patrones de inversión y fronting de la semana antes de la Semana 3.",
    summary: "Repaso de inversión/fronting/pseudo-cleft; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué patrón de inversión de la semana usarías con más confianza en tu propio Writing?", "Repásalos antes de la Semana 3 (elipsis/sustitución avanzada y cláusulas nominales)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 2 del C2. Consolidas TODOS los patrones de inversión (only/not for/nowhere/in no way/under no circumstances), el FRONTING ENFÁTICO, y el PSEUDO-CLEFT AVANZADO con el 'do' enfático. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 2", `1) ONLY + cláusula temporal/de modo + inversión: Only after…, Only by…, Only when… (+ did/had/does…).
2) NOT FOR/NOT SINCE + tiempo + inversión: Not for a decade had…, Not since the crisis has…
3) NOWHERE/IN NO WAY/UNDER NO CIRCUMSTANCES/ON NO ACCOUNT + inversión (solo si encabezan la frase).
4) FRONTING ENFÁTICO literario: Gone are the days when…, Such was/were… that…
5) PSEUDO-CLEFT AVANZADO: All… is/was + to-inf/gerundio/sustantivo; What… did was + base form.
6) EL 'DO/DOES/DID' ENFÁTICO en frase afirmativa, para contraste/insistencia.
Todos son de registro MUY formal/periodístico — perfectos para el Writing P1 y muy frecuentes en el Reading P5-P7; úsalos con naturalidad, sin forzarlos en cada frase.`),
    grammarEx("Use of English — Repaso mixto de la Semana 2", "Completa o elige.", [
      mc("Only after the funding had been secured ___ work begin.", ["did", "had", "was"], 0, "only after + inversión."),
      mc("Not since the crisis ___ confidence been so low.", ["has", "had", "did"], 0, "not since + inversión."),
      mc("___ is this tension more evident than in the debate over regulation.", ["Nowhere", "Anywhere", "Somewhere"], 0, "nowhere + inversión."),
      fb("___ should journalists reveal a confidential source. (under no…)", ["Under no circumstances"], "under no circumstances + inversión."),
      mc("___ are the days when a single poll could predict an outcome.", ["Gone", "Over", "Passed"], 0, "gone are the days when."),
      mc("All she wants ___ to be heard.", ["is", "does", "was being"], 0, "all + cláusula + is + to-infinitivo."),
      mc("What the algorithm ___ was systematically amplify provocative content.", ["did", "does", "done"], 0, "what… did was + base form."),
      mc("She ___ understand the risks — she simply posts anyway.", ["does", "is", "has"], 0, "do enfático."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 2", "Repasa los mazos (desinformación, periodismo, redes sociales, encuestas)."),
    vocabEx("Vocabulario — Repaso de la Semana 2", "Elige la opción correcta.", [
      mc("False information spread deliberately to mislead:", ["disinformation", "media literacy", "credibility"], 0, "disinformation."),
      mc("The right of journalists to report without state interference:", ["press freedom", "censorship", "defamation"], 0, "press freedom."),
      mc("To make content spread more widely, often via algorithms:", ["amplify", "moderate", "deplatform"], 0, "amplify."),
      mc("The statistical range within which a poll's true result likely falls:", ["margin of error", "sample size", "mandate"], 0, "margin of error."),
      mc("An online environment where one only encounters agreeing views:", ["echo chamber", "propaganda", "discernment"], 0, "echo chamber."),
      mc("A person who exposes wrongdoing from within an organisation:", ["whistleblower", "editor", "columnist"], 0, "whistleblower."),
      mc("Someone who deliberately provokes conflict online:", ["troll", "moderator", "activist"], 0, "troll."),
      mc("A voter who hasn't firmly committed to one party or candidate:", ["swing voter", "landslide", "demographic"], 0, "swing voter."),
    ]),

    ...uoe({
      p1: {
        title: "Two weeks into C2",
        text: "Reaching the end of the second full week of C2 preparation (1)___ a natural point for reflecting on quite how much ground has already, genuinely been covered. What these two weeks (2)___ was build, systematically and cumulatively, an entire register of formal structures — conditional alternatives, expanded inversion, literary fronting, sophisticated pseudo-cleft — that appear (3)___ throughout serious journalism and academic writing at this level. Nowhere is this cumulative progress more evident than in how considerably more fluently these patterns now (4)___ compared with the very first day of study. Under no circumstances should learners at this stage (5)___ discouraged by any remaining unfamiliarity; such structures genuinely do take sustained time to feel natural. All that ultimately (6)___, at this particular point, is continued patient practice and genuine exposure to these patterns in real, authentic use.",
        q: [
          mc("(1)", ["offers", "marks", "provides", "presents"], 0, "'offers a natural point for reflecting'."),
          mc("(2)", ["did", "does", "have done", "were doing"], 0, "'What these two weeks did was build' (pseudo-cleft)."),
          mc("(3)", ["constantly", "frequently", "regularly", "commonly"], 0, "'appear constantly throughout serious journalism'."),
          mc("(4)", ["register", "sound", "feel", "read"], 2, "'these patterns now feel compared with' — más natural: feel."),
          mc("(5)", ["feel", "be", "become", "grow"], 1, "'should learners… be discouraged' (subjuntivo/estructura pasiva tras should)."),
          mc("(6)", ["matters", "counts", "helps", "works"], 0, "'All that ultimately matters… is continued… practice'."),
        ],
      },
      p2: {
        title: "Register as a superpower",
        text: "What genuinely distinguishes C2-level command of English from strong C1-level competence is not primarily broader vocabulary or more accurate grammar alone, both of which (1)___ candidates often already possess in considerable measure by this stage. It is, rather, genuine command (2)___ register — the disciplined ability to select, among several grammatically valid options, precisely the structure that most (3)___ conveys the intended meaning, tone and level of formality for any given specific context. Only through sustained, deliberate exposure to real, authentic texts (4)___ this particular sensitivity genuinely develop over time, given that no single textbook rule can fully, adequately capture every relevant contextual nuance involved. Nowhere does this matter more directly than in the Writing paper, where examiners are specifically listening for precisely this kind of demonstrated register control throughout a candidate's actual response. All that ultimately (5)___, in the end, is developing genuine, comfortable intuition for when a given formal structure serves a text well, and when, instead, it would simply feel forced or (6)___.",
        q: [
          fb("(1)", ["strong"], "'both of which strong C1-level candidates often already possess'."),
          fb("(2)", ["of"], "'genuine command of register'."),
          fb("(3)", ["accurately", "precisely"], "'most accurately/precisely conveys'."),
          fb("(4)", ["does", "can", "will"], "'does/can/will this particular sensitivity genuinely develop' (inversión tras only)."),
          fb("(5)", ["matters", "counts"], "'All that ultimately matters/counts, in the end, is'."),
          fb("(6)", ["artificial", "unnatural", "stilted"], "'feel forced or artificial/unnatural/stilted'."),
        ],
      },
      p3: {
        title: "The long game of fluent formality",
        text: "Achieving genuine (1)___ with formal register, researchers studying advanced language acquisition consistently emphasise, rarely results from (2)___ memorisation of isolated grammatical rules alone, however thoroughly that memorisation is initially, conscientiously carried out. It emerges, instead, through sustained (3)___ to authentic examples combined with genuine, repeated attempts at active production, however imperfect and effortful those early attempts inevitably, understandably prove to be at first. This gradual (4)___ process explains why learners commonly report formal structures feeling considerably more natural after several weeks of sustained, consistent practice than they initially did during that first, genuinely demanding week of (5)___. What ultimately distinguishes learners who successfully internalise this register from those who merely, superficially recognise it passively is not raw natural talent, but rather sustained, patient (6)___ over considerable time.",
        items: [
          { root: "fluent", accepted: ["fluency"], hint: "'Achieving genuine fluency' → fluency." },
          { root: "rote", accepted: ["rote"], hint: "'rarely results from rote memorisation' (adjetivo, del ámbito 'rote learning')." },
          { root: "expose", accepted: ["exposure"], hint: "'sustained exposure to authentic examples' → exposure." },
          { root: "accumulate", accepted: ["accumulative", "cumulative"], hint: "'This gradual cumulative process' → cumulative." },
          { root: "expose", accepted: ["exposure"], hint: "'that first… week of exposure' (repetido; ajustar a 'practice')." },
          { root: "persist", accepted: ["persistence"], hint: "'sustained, patient persistence' → persistence." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 2",
        items: [
          { s1: "Work began only after the funding had been secured.", key: "DID", s2: "Only after the funding had been secured ___ work begin.", accepted: ["did"], explanation: "only after + inversión." },
          { s1: "Confidence hasn't been this low since the crisis.", key: "HAS", s2: "Not since the crisis ___ confidence been so low.", accepted: ["has"], explanation: "not since + inversión." },
          { s1: "This tension is nowhere more evident than in the debate over regulation.", key: "IS", s2: "Nowhere ___ this tension more evident than in the debate over regulation.", accepted: ["is"], explanation: "nowhere + inversión." },
          { s1: "A single newspaper no longer shapes national opinion overnight.", key: "GONE", s2: "___ are the days when a single newspaper could shape national opinion overnight.", accepted: ["gone"], explanation: "gone are the days when." },
          { s1: "She just wants to be heard, nothing more.", key: "ALL", s2: "___ she wants is to be heard, nothing more.", accepted: ["all"], explanation: "all + cláusula + is + to-infinitivo." },
          { s1: "The algorithm systematically amplified the most provocative content.", key: "DID", s2: "What the algorithm ___ was systematically amplify the most provocative content.", accepted: ["did"], explanation: "what… did was + base form." },
        ],
      },
      p5: {
        title: "The student who tracked her own fluency",
        text: "A dedicated C2 candidate, midway through her own sustained preparation, decided to keep a detailed personal log tracking precisely when each formal structure covered so far began feeling genuinely natural in her own spontaneous production, rather than requiring conscious, deliberate, effortful construction each and every single time.\n\nOnly after carefully reviewing several weeks of this accumulated, detailed log did a clear, genuinely informative pattern begin properly emerging. Structures she had encountered most frequently in her own authentic reading — inversion patterns, in particular — consistently felt natural considerably sooner than structures she had only formally studied through isolated, decontextualised grammar exercises alone.\n\n\"What I actually did,\" she later explained candidly to a group of fellow candidates, \"was deliberately start reading considerably more serious journalism specifically featuring these exact structures, rather than relying solely on textbook exercises in isolation.\" This deliberate shift, she reported, noticeably accelerated her own overall sense of genuine progress.\n\nNowhere was this particular effect more evident than with the pseudo-cleft structures covered this week specifically. Having initially found 'what... did was' constructions genuinely awkward and effortful to produce, she began actively, deliberately noticing them constantly in opinion journalism, gradually internalising their natural rhythm through this sustained, repeated exposure over several weeks.\n\n\"Under no circumstances would I now claim complete, effortless mastery,\" she noted with a certain characteristic, endearing honesty. \"But such was the improvement over just these two weeks alone that I genuinely feel considerably more confident continuing into Week Three.\"\n\nHer log also revealed a genuinely useful insight regarding vocabulary retention specifically. Words and phrases she had actively, deliberately used in her own original written sentences were remembered considerably more reliably than words she had merely, passively encountered while reading without any active production practice attached to them.\n\n\"All it really took,\" she reflected in her final log entry for the week, \"was consistent daily effort, genuine patience with my own inevitable early mistakes, and paying close, genuine attention to real examples wherever I actually encountered them in my everyday reading.\" Her detailed log has since been shared, with her enthusiastic permission, as a genuinely useful model for other C2 candidates preparing to track their own similar progress.",
        q: [
          mc("What did the student decide to do?", ["Stop studying entirely.", "Keep a detailed log tracking when structures began feeling natural.", "Only study grammar rules.", "Avoid reading authentic texts."], 1, "'decided to keep a detailed personal log tracking precisely when each formal structure… began feeling genuinely natural'."),
          mc("What pattern did she notice in her log?", ["No clear pattern.", "Structures encountered in authentic reading felt natural sooner than isolated exercises.", "All structures felt equally difficult.", "Nothing ever felt natural."], 1, "'Structures she had encountered most frequently in her own authentic reading… consistently felt natural considerably sooner'."),
          mc("What did she actually do to accelerate progress?", ["Nothing different.", "Started reading more serious journalism featuring the exact structures.", "Stopped reading entirely.", "Only used textbook exercises."], 1, "'What I actually did… was deliberately start reading considerably more serious journalism'."),
          mc("Which structures showed this effect most clearly?", ["Conditional structures.", "The pseudo-cleft structures ('what... did was').", "Vocabulary alone.", "None in particular."], 1, "'Nowhere was this particular effect more evident than with the pseudo-cleft structures covered this week'."),
          mc("What did her log reveal about vocabulary retention?", ["Nothing useful.", "Actively used words were remembered more reliably than passively encountered ones.", "All words were equally memorable.", "Vocabulary doesn't matter."], 1, "'Words and phrases she had actively, deliberately used… were remembered considerably more reliably than words she had merely, passively encountered'."),
          mc("What does she say it ultimately took?", ["Natural talent alone.", "Consistent daily effort, patience, and attention to real examples.", "A single breakthrough moment.", "Avoiding mistakes entirely."], 1, "'All it really took… was consistent daily effort, genuine patience… and paying close… attention to real examples'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Two weeks into any sufficiently demanding language course invites a particular, genuinely useful kind of honest stocktaking. (1)___\n\nThe material covered these two weeks — formal conditional alternatives, expanded inversion, literary fronting, sophisticated pseudo-cleft structures — represents, by most reasonable measures, some of the densest, most register-specific content the entire C2 course actually offers. (2)___ Almost none of it arises naturally in casual, everyday spoken conversation.\n\nYet this is precisely the material that most clearly, most reliably distinguishes genuine C2 mastery from strong C1-level competence. (3)___ A candidate who handles everyday conversation fluently but struggles significantly with this particular register has not yet reached the level this specific exam is actually designed to certify and recognise.\n\nWhat two weeks of sustained, deliberate practice with this particular material actually builds is not, primarily, instant, effortless recall of every individual rule covered. (4)___ It builds something closer to genuine, reliable pattern recognition — an increasingly dependable instinct for when a given formal structure would serve a text well.\n\nThis particular instinct develops unevenly, in genuine fits and starts, rather than through any single smooth, entirely predictable curve of steady improvement. (5)___ Some days feel like genuine breakthroughs; others feel frustratingly, stubbornly stagnant despite equally sustained, genuine effort.\n\nFor any learner who has worked seriously through these first two demanding weeks, real, substantial progress has genuinely been made, regardless of today's felt sense of any remaining difficulty. (6)___ Ten weeks remain before the course's own final stretch begins in earnest — weeks that will steadily deepen, rather than simply repeat, what has already been genuinely, solidly built so far.",
        options: [
          "It's worth pausing to name what has genuinely shifted.",  // A -> gap1
          "Little of this belongs to casual, spoken registers.",  // B -> gap2
          "This particular register is, in a real sense, part of what the exam tests.", // C -> gap3
          "Instant recall was never really the realistic, honest goal here.", // D -> gap4
          "Progress rarely moves along one smooth, predictable line.", // E -> gap5
          "What's ahead is steady deepening, not another mountain to climb.", // F -> gap6
          "No candidate has ever found this particular material demanding.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: vale la pena nombrar lo que ha cambiado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: poco pertenece al registro oral cotidiano."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: este registro es parte de lo que evalúa el examen."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el recuerdo instantáneo nunca fue la meta realista."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el progreso rara vez es una línea suave."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: lo que sigue es profundización, no otra montaña."),
        ],
      },
      p7: {
        title: "Four learners reflect on their second week of C2 study",
        text: "Read what four learners say about their second week of studying for the C2 exam.\n\nA) NADIA: Only after actively noticing these inversion patterns constantly in real news articles did they finally start feeling genuinely natural to me. Nowhere did textbook exercises alone achieve quite that same lasting effect.\n\nB) TOM: What I did this week, mostly, was focus deliberately on producing these structures myself in writing, rather than merely recognising them passively while reading. That specific shift alone made a genuinely noticeable difference for me.\n\nC) PRIYA: Under no circumstances would I say I've fully, completely mastered fronting yet, honestly. But such was my progress this particular week that I do feel considerably more confident continuing forward into Week Three.\n\nD) SAM: All it really took for me, this week specifically, was consistent daily practice and genuine patience with my own early, inevitable mistakes. Gone, thankfully, are the days when these structures felt completely, hopelessly overwhelming to me.\n",
        q: [
          mc("Who found inversion patterns felt natural after noticing them in real articles?", ["A", "B", "C", "D"], 0, "Nadia: 'Only after actively noticing these inversion patterns constantly in real news articles did they finally start feeling genuinely natural'."),
          mc("Who focused on production rather than passive recognition this week?", ["A", "B", "C", "D"], 1, "Tom: 'What I did this week, mostly, was focus deliberately on producing these structures myself'."),
          mc("Who doesn't claim full mastery of fronting yet but feels more confident?", ["A", "B", "C", "D"], 2, "Priya: 'Under no circumstances would I say I've fully… mastered fronting yet… but… I do feel considerably more confident'."),
          mc("Who says consistent daily practice and patience were what it took?", ["A", "B", "C", "D"], 3, "Sam: 'All it really took for me… was consistent daily practice and genuine patience'."),
          mc("Who says textbook exercises alone didn't achieve the same lasting effect?", ["A", "B", "C", "D"], 0, "Nadia: 'Nowhere did textbook exercises alone achieve quite that same lasting effect'."),
          mc("Who noticed a genuinely noticeable difference from shifting to active production?", ["A", "B", "C", "D"], 1, "Tom: 'That specific shift alone made a genuinely noticeable difference for me'."),
          mc("Who says these structures once felt completely overwhelming?", ["A", "B", "C", "D"], 3, "Sam: 'Gone, thankfully, are the days when these structures felt completely, hopelessly overwhelming to me'."),
          mc("Who describes this week's progress as significant enough to feel confident going forward?", ["A", "B", "C", "D"], 2, "Priya: 'such was my progress this particular week that I do feel considerably more confident continuing forward'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el aprendizaje avanzado de idiomas y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'At C2 level, deliberate tracking of one's own progress — logging when structures start feeling natural, reviewing patterns of difficulty — meaningfully accelerates learning that would otherwise remain largely invisible and unexamined.'\n\nTEXTO 2: 'Excessive self-monitoring risks turning language learning into an anxious, over-analysed exercise. At the most advanced levels, sustained immersion in authentic material matters far more than any formal tracking system ever could.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES recursos distintos de la Semana 2. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What two weeks of C2 study has taught me' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre estas dos primeras semanas.\n· REVIEW de un recurso, app o método que te haya ayudado a estudiar inglés a este nivel.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their C2 progress. Woman: Only after actively noticing these patterns in real articles did they finally start feeling natural to me. Man: Same here — textbook exercises alone never quite achieved that same lasting effect for me either. Extract Two. You hear two friends discussing formal writing. Man: What I did this week was focus on production rather than just passive recognition. Woman: That specific shift made a genuinely noticeable difference for me too, honestly. Extract Three. You hear two colleagues discussing their confidence level. Woman: Under no circumstances would I claim complete mastery yet, but such was my progress this week that I feel considerably more confident now. Man: Gone are the days when these structures felt completely overwhelming to me, thankfully.", [
      mc("1. What finally made the patterns feel natural to the woman?", ["Textbook exercises alone.", "Actively noticing them in real articles.", "Nothing in particular.", "Memorising rules."], 1, "'Only after actively noticing these patterns in real articles did they finally start feeling natural'."),
      mc("2. What does the man say about textbook exercises?", ["They worked perfectly.", "They never quite achieved the same lasting effect.", "He never used them.", "They were unnecessary."], 1, "'textbook exercises alone never quite achieved that same lasting effect for me either'."),
      mc("3. What did the man focus on this week?", ["Passive recognition only.", "Production rather than just passive recognition.", "Vocabulary alone.", "Listening practice only."], 1, "'What I did this week was focus on production rather than just passive recognition'."),
      mc("4. What does the woman say about this shift?", ["It made no difference.", "It made a genuinely noticeable difference for her too.", "It confused her.", "She hasn't tried it."], 1, "'That specific shift made a genuinely noticeable difference for me too'."),
      mc("5. Does the woman claim complete mastery?", ["Yes, completely.", "No, but she feels considerably more confident now.", "She refuses to discuss it.", "She feels less confident."], 1, "'Under no circumstances would I claim complete mastery yet, but… I feel considerably more confident now'."),
      mc("6. How does the man describe these structures now, compared to before?", ["Still completely overwhelming.", "No longer completely overwhelming, thankfully.", "Impossible to learn.", "Unimportant."], 1, "'Gone are the days when these structures felt completely overwhelming to me, thankfully'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en estas dos primeras semanas que te resulte más útil", p2: "dos imágenes del progreso en el aprendizaje (alguien revisando un cuaderno lleno de anotaciones y dos personas practicando conversación juntas): comentadlas y decidid cuál representa mejor cómo se consolida el aprendizaje a este nivel", p3: "qué método es más eficaz para dominar estructuras gramaticales muy avanzadas (llevar un registro del propio progreso, la exposición a textos auténticos, la práctica activa de producción, el feedback específico, la repetición espaciada): comentadlo y decidid el más eficaz", p4: "el aprendizaje al nivel C2: si merece la pena el esfuerzo adicional de alcanzar precisión en matices tan finos, cómo se mantiene la motivación durante un proceso tan largo y exigente, y qué papel tiene la paciencia frente a la ansiedad por progresar rápido" }),

    SUMMARY("Resumen de la Semana 2 (C2)", [
      "Dominas la inversión avanzada (only/not for/nowhere/in no way/under no circumstances), el fronting enfático literario, y el pseudo-cleft avanzado con el 'do' enfático.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes (240-280/280-320) y el Speaking P1–P3 con temas de desinformación, periodismo, redes sociales y encuestas.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: la ELIPSIS Y SUSTITUCIÓN AVANZADA y las CLÁUSULAS NOMINALES, con la ciencia y la filosofía.",
    ]),
    INFO("Mini-simulacro de la Semana 2", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 3."),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "La inversión y el fronting literarios más raros · Los medios de comunicación y la desinformación",
  description: "Inversión avanzada tras only + cláusula, not for/not since + tiempo, nowhere/in no way/under no circumstances, fronting enfático avanzado, y pseudo-cleft avanzado con el 'do' enfático, con el hilo de los medios de comunicación, la desinformación, el periodismo, las redes sociales y las encuestas. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
