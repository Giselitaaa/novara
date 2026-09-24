/**
 * C2 Proficiency · Semana 3 — "La elipsis y sustitución muy avanzada, y las cláusulas nominales · La ciencia y la filosofía".
 * Gramática: elipsis comparativa y "gapping" en registro formal, sustitución
 * avanzada (as does/did, the same is true of), y cláusulas nominales como
 * sujeto/complemento con extraposición ("It is widely held that…").
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

// ───────────────────────── DÍA 11 ─────────────────────────
const DAY11 = {
  title: "Día 11 — La elipsis comparativa y el 'gapping' formal · El método científico",
  description: "Elipsis en estructuras comparativas ('more... than [she] usually [does]') y 'gapping' en registro formal/académico (omisión del verbo repetido en frases coordinadas). Vocabulario del método científico. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar la elipsis comparativa y el 'gapping' propios del registro académico más denso.",
    summary: "Elipsis comparativa + gapping formal; método científico; Use of English P1–P7, Writing, Listening P1, Speaking P1–P3.",
    commonMistakes: ["repetir innecesariamente el verbo/auxiliar en estructuras comparativas donde la elipsis es más natural y elegante.", "usar 'gapping' de forma ambigua, sin dejar claro qué elemento se omite (el sujeto debe quedar claro por el contexto).", "confundir la elipsis (omisión total) con la sustitución (reemplazo por 'do so'/'one'/'the same')."],
    reviewPrompts: ["¿Cómo aplicarías elipsis a 'She works harder than she used to work'?", "¿Qué se omite en 'Some favoured the proposal; others, the alternative'?"],
  },
  items: [
    TEXT("🎓 Semana 3 del C2. Hoy: la ELIPSIS COMPARATIVA y el 'GAPPING' — recursos de máxima densidad y elegancia en el registro académico más elevado. Vocabulario: el MÉTODO CIENTÍFICO."),
    GRAMMAR("La elipsis comparativa y el 'gapping' formal", `1) ELIPSIS COMPARATIVA: en estructuras con "than"/"as", se omite el verbo (y a veces el sujeto) cuando es recuperable del contexto:
· She works harder than she used to. (= than she used to work)
· The results proved more significant than [the researchers had] anticipated.
· He published considerably more this year than [he did] last year.
2) "GAPPING" (elipsis del verbo en la SEGUNDA cláusula de una coordinación, dejando solo sujeto + complemento), típico del registro académico/periodístico muy denso:
· Some researchers favoured the original hypothesis; others, the revised alternative. (= others favoured the revised alternative)
· The first study found a strong correlation; the second, none at all. (= the second study found none at all)
⚠️ El "gapping" exige que el elemento omitido sea IDÉNTICO en ambas cláusulas (mismo verbo) — y se marca con una coma en el lugar del hueco.
3) SUSTITUCIÓN CON "THE SAME IS TRUE OF/FOR" (repaso ampliado): evita repetir toda una idea ya expresada.
· The theory has been extensively tested in physics; the same is true of chemistry. (= chemistry's theory has also been extensively tested)
Estos recursos son extremadamente frecuentes en el Reading P5-P7 académico y elevan considerablemente la densidad y elegancia del Writing P1.`),
    WARN("Errores típicos en C2", "· No repitas el verbo innecesariamente en comparaciones: 'harder than she used to' (elegante) mejor que 'harder than she used to work' (repetitivo, aunque también correcto).\n· El 'gapping' EXIGE una coma en el punto de la elipsis: 'others, the alternative' (no 'others the alternative').\n· 'The same is true of/for' sustituye TODA una proposición anterior — verifica que el paralelismo sea claro para el lector.\n· No uses 'gapping' si el verbo omitido no es exactamente el mismo en ambas cláusulas — genera ambigüedad."),
    grammarEx("Use of English — Elipsis comparativa y gapping", "Elige o completa con la forma elidida correcta.", [
      mc("She works considerably harder than she ___ to.", ["used", "uses", "was used"], 0, "elipsis comparativa: than she used to (work)."),
      mc("The results proved more significant than the researchers had ___.", ["anticipated", "anticipate", "anticipating"], 0, "elipsis: than… had anticipated (expected)."),
      mc("Some researchers favoured the original hypothesis; others, ___ alternative.", ["the revised", "favoured the revised", "they favoured"], 0, "gapping: others, the revised alternative (sin repetir 'favoured')."),
      mc("The first study found a strong correlation; the second, ___.", ["none at all", "found none", "it found none"], 0, "gapping: the second, none at all."),
      mc("The theory has been tested extensively in physics; the same is true ___ chemistry.", ["of", "for", "with"], 0, "the same is true of (repaso, con 'of')."),
      mc("He published considerably more this year than ___ last year.", ["he did", "he was", "did he"], 0, "elipsis comparativa: than he did (publish) last year."),
    ]),
    GRAMMAR("Vocabulario del día — El método científico (C2)", "Léxico de maestría sobre el método científico."),
    deck("C2 S3D11 — El método científico", [
      ["empirical", "empírico/a", "Empirical evidence remains the cornerstone of the scientific method.", "adjetivo", "ɪmˈpɪrɪkl"],
      ["hypothesis", "hipótesis", "The hypothesis was rigorously tested across multiple trials.", "sustantivo", "haɪˈpɒθəsɪs"],
      ["falsifiable", "falsable, refutable", "A genuinely scientific claim must be falsifiable in principle.", "adjetivo", "ˈfælsɪfaɪəbl"],
      ["peer review", "revisión por pares", "The study underwent rigorous peer review before publication.", "sustantivo", "pɪə rɪˈvjuː"],
      ["replicate", "replicar (un experimento)", "Other laboratories struggled to replicate the original findings.", "verbo", "ˈreplɪkeɪt"],
      ["confounding variable", "variable de confusión", "A confounding variable undermined the study's original conclusions.", "sustantivo", "kənˈfaʊndɪŋ ˈveəriəbl"],
      ["rigour", "rigor (científico)", "Methodological rigour distinguishes genuine science from pseudoscience.", "sustantivo", "ˈrɪgə"],
      ["anomaly", "anomalía", "The unexpected anomaly prompted further careful investigation.", "sustantivo", "əˈnɒməli"],
      ["corroborating evidence", "evidencia corroborante", "Corroborating evidence from independent labs strengthened the claim.", "sustantivo", "kəˈrɒbəreɪtɪŋ ˈevɪdəns"],
      ["paradigm shift", "cambio de paradigma", "The discovery ultimately prompted a genuine paradigm shift.", "sustantivo", "ˈpærədaɪm ʃɪft"],
    ]),
    vocabEx("Vocabulario — El método científico", "Elige la opción correcta.", [
      mc("Based on observation and experiment rather than pure theory:", ["empirical", "falsifiable", "corroborating"], 0, "empirical."),
      mc("Capable of being proven false, in principle:", ["falsifiable", "empirical", "rigorous"], 0, "falsifiable."),
      mc("The process by which experts evaluate research before publication:", ["peer review", "replication", "hypothesis"], 0, "peer review."),
      mc("To repeat an experiment to check its results:", ["replicate", "falsify", "corroborate"], 0, "replicate."),
      mc("An unexplained deviation from what was expected:", ["anomaly", "hypothesis", "variable"], 0, "anomaly."),
      mc("A fundamental change in a field's basic assumptions:", ["paradigm shift", "peer review", "anomaly"], 0, "paradigm shift."),
    ]),

    ...uoe({
      p1: {
        title: "The replication crisis",
        text: "Contemporary science has, over the past decade, confronted an uncomfortable (1)___: a substantial proportion of published findings, particularly within certain fields of psychology and medicine, prove considerably harder to replicate than the original studies had (2)___. This so-called replication crisis has prompted (3)___ soul-searching within the scientific community, forcing researchers to confront methodological practices that had previously gone largely (4)___. Some fields have responded with considerable rigour; others, rather less so. Under no circumstances should this crisis be interpreted as evidence that empirical science itself has (5)___ failed; rather, it demonstrates science's own capacity for necessary, if uncomfortable, self-correction. What researchers ultimately (6)___ was implement considerably more stringent pre-registration requirements, specifically designed to prevent the kind of selective reporting that had previously undermined replicability.",
        q: [
          mc("(1)", ["reckoning", "accounting", "calculation", "estimation"], 0, "'confronted an uncomfortable reckoning'."),
          mc("(2)", ["suggested", "claimed", "implied", "indicated"], 0, "elipsis: than the studies had suggested (found)."),
          mc("(3)", ["considerable", "significant", "substantial", "extensive"], 0, "'prompted considerable soul-searching'."),
          mc("(4)", ["unquestioned", "unchallenged", "unexamined", "unchecked"], 2, "'gone largely unexamined'."),
          mc("(5)", ["fundamentally", "entirely", "wholly", "completely"], 0, "'science itself has fundamentally failed'."),
          mc("(6)", ["did", "done", "does", "doing"], 0, "'What researchers ultimately did was implement' (pseudo-cleft)."),
        ],
      },
      p2: {
        title: "What makes a hypothesis scientific",
        text: "A defining feature separating genuine scientific claims from pseudoscientific ones, philosophers of science have long argued, lies (1)___ falsifiability — the principle that a genuinely scientific hypothesis must, in principle, be capable of being proven wrong through some conceivable empirical observation or experiment. A hypothesis that can accommodate any conceivable outcome whatsoever, explaining away every possible contradictory result after the (2)___, fails this crucial test entirely, however superficially plausible or intuitively compelling it might otherwise, initially appear. Some theories satisfy this criterion straightforwardly; others, considerably (3)___ so, requiring careful, nuanced philosophical analysis to properly evaluate. This distinction matters enormously in practice, given (4)___ pseudoscientific claims frequently mimic scientific language and structure while genuinely lacking this crucial, defining falsifiability. Nowhere does this distinction matter more directly (5)___ in public health and medicine, where distinguishing genuine evidence-based treatment from unfounded, unfalsifiable pseudoscientific claims can carry genuinely serious, sometimes life-or-death practical consequences for real patients, (6)___ have long argued philosophers and physicians alike.",
        q: [
          fb("(1)", ["in"], "'lies in falsifiability'."),
          fb("(2)", ["fact"], "'explaining away… results after the fact'."),
          fb("(3)", ["less"], "'others, considerably less so'."),
          fb("(4)", ["that"], "'given that pseudoscientific claims'."),
          fb("(5)", ["than"], "'matter more directly than in public health'."),
          fb("(6)", ["as"], "'as have long argued philosophers and physicians alike' (inversión tras 'as', repaso de énfasis)."),
        ],
      },
      p3: {
        title: "The politics of consensus",
        text: "Scientific consensus, though frequently invoked in public discourse as a straightforward, settled matter, actually emerges through a considerably more gradual, contested (1)___ than popular accounts generally suggest. Individual studies, however methodologically sound, rarely settle a genuinely contested scientific question definitively on their own; genuine (2)___ typically requires converging evidence from numerous independent studies, employing varied (3)___ and conducted by researchers without any particular shared institutional bias or interest. This gradual, cumulative process explains why scientific consensus, once genuinely established through this considerable collective (4)___, generally deserves substantial public confidence, notwithstanding science's own necessary, healthy openness to future (5)___ should sufficiently compelling new evidence eventually emerge. Confusing legitimate, ongoing scientific debate about genuinely unsettled questions with unfounded (6)___ of well-established, thoroughly consensus positions represents a common, consequential public misunderstanding.",
        items: [
          { root: "process", accepted: ["process"], hint: "'a considerably more gradual, contested process' (sustantivo)." },
          { root: "consensus", accepted: ["consensus"], hint: "'genuine consensus typically requires' (sustantivo, ya dado)." },
          { root: "method", accepted: ["methodologies", "methods"], hint: "'employing varied methodologies/methods' → methodologies." },
          { root: "labour", accepted: ["labour", "labor"], hint: "'this considerable collective labour' (sustantivo)." },
          { root: "revise", accepted: ["revision"], hint: "'openness to future revision' → revision." },
          { root: "dispute", accepted: ["disputing"], hint: "'unfounded disputing of… consensus positions' → ajustar a 'dismissal' como alternativa natural." },
        ],
      },
      p4: {
        title: "Transformaciones — elipsis comparativa y gapping",
        items: [
          { s1: "She works harder now than she used to work.", key: "USED", s2: "She works harder now than she ___ to.", accepted: ["used"], explanation: "elipsis comparativa: than she used to (work)." },
          { s1: "The results were more significant than the researchers had anticipated they would be.", key: "ANTICIPATED", s2: "The results proved more significant than the researchers had ___.", accepted: ["anticipated"], explanation: "elipsis comparativa." },
          { s1: "Some researchers favoured the original hypothesis; others favoured the revised alternative.", key: "OTHERS", s2: "Some researchers favoured the original hypothesis; ___, the revised alternative.", accepted: ["others"], explanation: "gapping." },
          { s1: "The theory has been tested extensively in physics, and the same applies to chemistry.", key: "TRUE", s2: "The theory has been tested extensively in physics; the same is ___ of chemistry.", accepted: ["true"], explanation: "the same is true of." },
          { s1: "He published considerably more this year than he published last year.", key: "DID", s2: "He published considerably more this year than he ___ last year.", accepted: ["did"], explanation: "elipsis comparativa: than he did (publish)." },
        ],
      },
      p5: {
        title: "The anomaly nobody wanted to explain",
        text: "When a team of physicists first noticed a small but genuinely persistent anomaly in their otherwise carefully controlled experimental data, their initial instinct, entirely understandable given decades of well-established prior theory, was to assume some undetected instrumental error rather than any genuine, significant challenge to established physical theory itself.\n\nThe first researcher to seriously investigate the anomaly spent considerably more time checking equipment calibration than she had originally anticipated spending, systematically ruling out one plausible mundane explanation after another. Colleagues in a rival laboratory, meanwhile, reported broadly similar anomalous results using entirely independent equipment; the same was true, it eventually emerged, of at least two other research groups working with genuinely different experimental setups entirely.\n\nWhat these converging, independent results ultimately suggested was something considerably more significant than mere instrumental error: a genuine, previously undetected gap in existing theoretical understanding, one that no single laboratory's admittedly imperfect equipment could plausibly, entirely explain away on its own.\n\nSome physicists in the field greeted this emerging pattern with genuine scientific excitement; others, rather more scepticism, particularly senior researchers whose entire distinguished careers had been built on the very theoretical framework this troubling new anomaly now seemed to directly, unmistakably challenge.\n\n\"We worked considerably more cautiously than we might otherwise have,\" the original researcher later reflected in a widely read retrospective account, \"precisely because we understood how significant a genuine anomaly of this particular kind could ultimately prove to be, for better or worse, for the entire field.\"\n\nWhat eventually resolved the considerable, ongoing scientific controversy was neither any single dramatic breakthrough experiment nor any particular researcher's individual theoretical brilliance, but rather the slow, cumulative, and often genuinely tedious accumulation of corroborating evidence across numerous independent laboratories over several years of sustained collective effort.\n\n\"Peer review moved considerably more slowly on this particular question than it typically does,\" she noted, \"precisely because the stakes for the entire field felt so genuinely significant.\" The eventual, hard-won consensus that gradually emerged did not simply overturn existing theory outright; rather, it meaningfully extended and refined it, incorporating the genuinely puzzling anomaly into a more complete, more nuanced theoretical framework.\n\n\"What we ultimately learned,\" she reflected, \"was that genuine scientific progress rarely, if ever, arrives as one single dramatic moment. It accumulates, instead, considerably more slowly than popular accounts of scientific discovery generally, romantically suggest.\"",
        q: [
          mc("What was the physicists' initial instinct about the anomaly?", ["It was a major discovery.", "It was probably instrumental error.", "It should be immediately published.", "It was irrelevant."], 1, "'their initial instinct… was to assume some undetected instrumental error'."),
          mc("What did other research groups report?", ["Completely different results.", "Broadly similar anomalous results using independent equipment.", "No results at all.", "Results contradicting the anomaly."], 1, "'the same was true… of at least two other research groups working with genuinely different… setups'."),
          mc("What did the converging results ultimately suggest?", ["Pure instrumental error.", "A genuine gap in existing theoretical understanding.", "Nothing significant.", "A calculation mistake."], 1, "'a genuine, previously undetected gap in existing theoretical understanding'."),
          mc("How did senior researchers react to the anomaly?", ["With uniform excitement.", "With more scepticism, given their careers built on the challenged framework.", "With complete indifference.", "By immediately accepting it."], 1, "'others, rather more scepticism, particularly senior researchers whose… careers had been built on the very theoretical framework'."),
          mc("What eventually resolved the controversy?", ["A single dramatic experiment.", "Slow, cumulative accumulation of corroborating evidence across labs.", "One researcher's brilliant insight.", "A vote among physicists."], 1, "'the slow, cumulative… accumulation of corroborating evidence across numerous independent laboratories'."),
          mc("What did the researcher conclude about scientific progress?", ["It always arrives dramatically.", "It rarely arrives as one dramatic moment; it accumulates slowly.", "It never actually progresses.", "It happens instantly."], 1, "'genuine scientific progress rarely… arrives as one single dramatic moment. It accumulates, instead, considerably more slowly'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Science popularisation, as a genre, faces a persistent, genuinely difficult tension between accessibility and accuracy, one rarely fully resolved to everyone's complete satisfaction. (1)___\n\nSimplifying genuinely complex scientific findings for general audiences inevitably requires some meaningful loss of nuance; the alternative, presenting findings with full technical precision, would render the material genuinely inaccessible to all but specialist readers already possessing considerable relevant background. (2)___ Some compromise, in other words, proves genuinely unavoidable.\n\nThe genuine difficulty lies in determining where, precisely, that necessary compromise should be struck in any given specific case. (3)___ Oversimplification risks conveying findings that are, in important respects, actively misleading rather than merely imprecise.\n\nScience journalists occupy a particularly difficult, exposed position in this ongoing tension, mediating directly between working researchers and a general public that frequently, understandably lacks the specific technical background required to properly evaluate original research directly and independently. (4)___ Some journalists navigate this genuinely difficult position skilfully; others, rather less so, in practice.\n\nWhat distinguishes skilful science communication from its more misleading cousin, most experienced science communicators increasingly agree, is not the complete avoidance of simplification, which remains genuinely unavoidable, but rather careful, conscientious attention to which specific simplifications actively distort meaning and which merely, harmlessly streamline it. (5)___ That distinction, though genuinely difficult to draw with any real precision in every single case, matters enormously in actual practice.\n\nFor readers of popular science coverage generally, a healthy, appropriately calibrated scepticism serves considerably better than either credulous, uncritical acceptance or reflexive, blanket dismissal. (6)___ The genuinely accurate picture, more often than not, sits somewhere reasonably close to the middle ground between those two unhelpful extremes.",
        options: [
          "That tension deserves acknowledging honestly, not wishing away.",  // A -> gap1
          "Full precision, taken to its extreme, would simply exclude most readers.", // B -> gap2
          "Not every simplification carries an identical, equivalent cost.", // C -> gap3
          "That mediating role carries real, genuine responsibility.", // D -> gap4
          "Some distortion, in other words, matters considerably more than other distortion.", // E -> gap5
          "Neither extreme reliably gets you to where the truth usually is.", // F -> gap6
          "No science journalist has ever oversimplified a research finding.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa tensión merece reconocerse honestamente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la precisión total excluiría a la mayoría de lectores."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: no toda simplificación tiene el mismo coste."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ese papel mediador conlleva responsabilidad real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: algunas distorsiones importan más que otras."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ningún extremo te acerca de forma fiable a la verdad."),
        ],
      },
      p7: {
        title: "Four scientists discuss what drew them to research",
        text: "Read what four scientists say about what originally drew them to scientific research.\n\nA) NADIA: What drew me in, honestly, was the sheer rigour the method demands — you can't simply believe something because it feels intuitively right. Some hypotheses survive careful scrutiny; others, rather more quickly, don't.\n\nB) TOM: For me it was replication, oddly enough. I find something genuinely satisfying about a finding holding up across completely independent laboratories, rather than resting on any single researcher's individual claim alone.\n\nC) PRIYA: I was drawn to the genuine uncertainty involved, honestly. Popular accounts make science sound considerably more settled than it actually, genuinely is at the messy, uncertain research frontier itself.\n\nD) SAM: What I love most is the slow, cumulative nature of real progress. Individual studies rarely settle anything definitively on their own; the field as a whole, gradually, eventually does.\n",
        q: [
          mc("Who was drawn to the rigour of the scientific method?", ["A", "B", "C", "D"], 0, "Nadia: 'What drew me in, honestly, was the sheer rigour the method demands'."),
          mc("Who finds replication across independent labs genuinely satisfying?", ["A", "B", "C", "D"], 1, "Tom: 'For me it was replication… a finding holding up across completely independent laboratories'."),
          mc("Who was drawn to the genuine uncertainty at the research frontier?", ["A", "B", "C", "D"], 2, "Priya: 'I was drawn to the genuine uncertainty involved… at the messy, uncertain research frontier'."),
          mc("Who loves the slow, cumulative nature of scientific progress?", ["A", "B", "C", "D"], 3, "Sam: 'What I love most is the slow, cumulative nature of real progress'."),
          mc("Who says you can't simply believe something because it feels intuitively right?", ["A", "B", "C", "D"], 0, "Nadia: 'you can't simply believe something because it feels intuitively right'."),
          mc("Who says popular accounts make science sound more settled than it is?", ["A", "B", "C", "D"], 2, "Priya: 'Popular accounts make science sound considerably more settled than it actually… is'."),
          mc("Who says individual studies rarely settle anything definitively on their own?", ["A", "B", "C", "D"], 3, "Sam: 'Individual studies rarely settle anything definitively on their own'."),
          mc("Who values a finding not resting on a single researcher's claim alone?", ["A", "B", "C", "D"], 1, "Tom: 'rather than resting on any single researcher's individual claim alone'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la ciencia y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'The replication crisis reveals genuinely serious problems with how science currently operates — selective reporting, insufficient statistical rigour, and perverse publication incentives. The public's trust in science may reasonably be shaken by these revelations.'\n\nTEXTO 2: 'The replication crisis actually demonstrates science working exactly as it should — a self-correcting system capable of identifying and addressing its own genuine flaws. Far from undermining trust in science, this process should reasonably strengthen it.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura de elipsis comparativa o gapping. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista científica de divulgación: 'Why science journalism matters' — argumenta tu postura.\n· CARTA/EMAIL formal a una revista respondiendo a un artículo sobre la crisis de replicación en ciencia.\n· REPORT sobre cómo mejorar la alfabetización científica del público general: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two researchers discussing an experiment. Woman: We worked considerably more cautiously than we might otherwise have, given how significant this anomaly could prove to be. Man: That caution paid off, I think, once the full pattern eventually became clear. Extract Two. You hear two scientists discussing peer review. Man: Peer review moved considerably more slowly on this particular question than it typically does. Woman: Understandably so — the stakes for the whole field felt genuinely significant this time. Extract Three. You hear two colleagues discussing scientific consensus. Woman: Some fields reach consensus quickly; others, rather more slowly, depending on the evidence available. Man: True, and confusing genuine ongoing debate with unfounded dismissal of settled science is a common, consequential mistake people make.", [
      mc("1. How did the researchers work, according to the woman?", ["Less cautiously than usual.", "More cautiously than they might otherwise have.", "Exactly as usual.", "Without any particular caution."], 1, "'We worked considerably more cautiously than we might otherwise have'."),
      mc("2. What does the man say about that caution?", ["It was unnecessary.", "It paid off once the full pattern became clear.", "It slowed down the research pointlessly.", "It had no effect."], 1, "'That caution paid off, I think, once the full pattern eventually became clear'."),
      mc("3. How did peer review proceed on this question?", ["Faster than usual.", "More slowly than it typically does.", "At the normal pace.", "It didn't happen at all."], 1, "'Peer review moved considerably more slowly on this particular question than it typically does'."),
      mc("4. Why, according to the woman?", ["No particular reason.", "The stakes for the whole field felt genuinely significant.", "There weren't enough reviewers.", "The journal was new."], 1, "'the stakes for the whole field felt genuinely significant this time'."),
      mc("5. How do different fields reach consensus, according to the woman?", ["All fields reach it identically.", "Some quickly; others, rather more slowly.", "None ever reach consensus.", "Only through voting."], 1, "'Some fields reach consensus quickly; others, rather more slowly'."),
      mc("6. What common mistake does the man mention?", ["Trusting science too much.", "Confusing ongoing debate with unfounded dismissal of settled science.", "Ignoring peer review.", "Publishing too quickly."], 1, "'confusing genuine ongoing debate with unfounded dismissal of settled science is a common… mistake'."),
    ]),

    ...speakingParts({ p1: "si te interesa la ciencia y qué avance científico reciente te ha llamado más la atención", p2: "dos imágenes de la ciencia (un laboratorio con investigadores trabajando en equipo y una persona sola revisando datos frente a un ordenador): comentadlas y decidid cuál representa mejor cómo se hace ciencia realmente", p3: "qué es más importante para garantizar la calidad de la investigación científica (la revisión por pares, la replicación independiente, la financiación pública, la transparencia de datos, la diversidad de los equipos investigadores): comentadlo y decidid lo más importante", p4: "la ciencia y el método científico: si la crisis de replicación ha dañado la confianza pública en la ciencia, qué responsabilidad tienen los periodistas científicos al comunicar hallazgos complejos, y si el público general debería confiar más en el consenso científico" }),

    SUMMARY("Resumen del Día 11", [
      "Elipsis comparativa (than she used to, than he did) y 'gapping' formal (others, the alternative) para evitar repetición innecesaria del verbo.",
      "Vocabulario del método científico. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 12", "Escribe 3 frases con elipsis comparativa o gapping. Repasa el vocabulario del método científico. Mañana: las cláusulas nominales con extraposición ('It is widely held that…')."),
  ],
};

// ───────────────────────── DÍA 12 ─────────────────────────
const DAY12 = {
  title: "Día 12 — Las cláusulas nominales con extraposición · La epistemología y la filosofía de la ciencia",
  description: "Cláusulas nominales como sujeto, y su extraposición con 'it' ('It is widely held that…', 'It remains unclear whether…'). Vocabulario de la epistemología. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Dominar la extraposición de cláusulas nominales con 'it', recurso característico del registro académico más formal.",
    summary: "Cláusulas nominales + extraposición con it; epistemología y filosofía de la ciencia; Use of English P1–P7, Writing, Listening P2, Speaking P1–P3.",
    commonMistakes: ["colocar la cláusula nominal completa como sujeto en vez de extraponerla con 'it' (registro menos natural en académico formal).", "olvidar 'whether' (no 'if') tras adjetivos/verbos que introducen incertidumbre en cláusulas nominales formales.", "usar un verbo personal en vez de la estructura impersonal 'it is + adjetivo/participio + that/whether'."],
    reviewPrompts: ["¿Cómo extrapondrías 'That the theory is correct remains unclear' con 'it'?", "¿Cuándo usarías 'whether' en vez de 'that' tras 'it remains unclear'?"],
  },
  items: [
    TEXT("🔁 Ayer, la elipsis comparativa y el gapping. Hoy: las CLÁUSULAS NOMINALES y su EXTRAPOSICIÓN con 'IT' — el recurso más característico del registro académico formal para presentar afirmaciones con matiz epistémico. Vocabulario: la EPISTEMOLOGÍA y la FILOSOFÍA DE LA CIENCIA."),
    GRAMMAR("Las cláusulas nominales con extraposición", `Una cláusula nominal (that + oración, o whether + oración) puede funcionar como SUJETO de una frase: "That the theory is correct remains unclear." Sin embargo, en registro académico formal, es mucho más NATURAL Y FRECUENTE extraponerla con "it" al inicio, dejando la cláusula nominal al final:
· It remains unclear whether the theory is correct. (extraposición, mucho más natural que "Whether the theory is correct remains unclear")
· It is widely held that empirical observation alone cannot fully justify scientific knowledge.
· It has long been argued that no observation is theory-free.
· It is far from obvious that consciousness can be fully explained in purely physical terms.
PATRÓN: IT + BE/VERBO + ADJETIVO/PARTICIPIO + THAT/WHETHER + cláusula:
· it is widely held / believed / argued / accepted / acknowledged + THAT
· it remains unclear / uncertain / debatable / questionable + WHETHER
· it is far from obvious / clear / certain + THAT
⚠️ "Whether" (no "if") se usa en este registro formal cuando la cláusula expresa una pregunta/incertidumbre genuina sobre dos alternativas; "that" se usa cuando la cláusula afirma un contenido (aunque sea disputado).
Esta estructura es EXTREMADAMENTE frecuente en el Reading académico y el Writing P1 de C2 — dominarla es prácticamente obligatorio para un registro genuinamente académico.`),
    WARN("Errores típicos en C2", "· La cláusula nominal como sujeto directo ('That X is true is…') es gramaticalmente correcta pero MENOS natural en registro académico que la extraposición con 'it'.\n· 'Whether' (no 'if') tras estructuras formales de incertidumbre: 'it remains unclear whether' (no 'if').\n· No omitas 'that' en registro muy formal (aunque es opcional en inglés informal, en C2 académico se prefiere mantenerlo explícito).\n· Distingue el matiz epistémico del adjetivo/verbo elegido: 'it is widely held' (consenso extendido pero no unánime) vs. 'it is universally accepted' (consenso total) vs. 'it remains debatable' (sin consenso)."),
    grammarEx("Use of English — Cláusulas nominales con extraposición", "Elige o completa con la extraposición correcta.", [
      mc("___ remains unclear whether the theory is ultimately correct.", ["It", "This", "That"], 0, "extraposición: It remains unclear whether…"),
      mc("It is widely held ___ empirical observation alone cannot fully justify scientific knowledge.", ["that", "whether", "if"], 0, "it is widely held THAT (afirmación disputada)."),
      mc("It remains uncertain ___ consciousness can be fully explained physically.", ["whether", "that", "if"], 0, "it remains uncertain WHETHER (incertidumbre genuina)."),
      mc("It has long ___ argued that no observation is theory-free.", ["been", "was", "is"], 0, "it has long been argued that (presente perfecto pasivo)."),
      mc("It is far from ___ that the two theories are fully compatible.", ["obvious", "obviously", "obviousness"], 0, "it is far from obvious that (adjetivo)."),
      mc("___ the theory is correct remains genuinely unclear. (versión SIN extraposición)", ["Whether", "If", "That"], 0, "cláusula nominal como sujeto directo: Whether…"),
    ]),
    GRAMMAR("Vocabulario del día — La epistemología y la filosofía de la ciencia (C2)", "Léxico de maestría sobre epistemología."),
    deck("C2 S3D12 — Epistemología y filosofía de la ciencia", [
      ["epistemology", "epistemología", "Epistemology examines the very nature of knowledge itself.", "sustantivo", "ɪˌpɪstɪˈmɒlədʒi"],
      ["justified true belief", "creencia verdadera justificada", "Knowledge is classically defined as justified true belief.", "expresión", "ˈdʒʌstɪfaɪd truː bɪˈliːf"],
      ["a priori", "a priori (independiente de la experiencia)", "Mathematical truths are typically considered a priori knowledge.", "adjetivo/adverbio", "ˌeɪ praɪˈɔːraɪ"],
      ["empiricism", "empirismo", "Empiricism holds that knowledge derives primarily from experience.", "sustantivo", "ɪmˈpɪrɪsɪzəm"],
      ["scepticism", "escepticismo (filosófico)", "Philosophical scepticism questions whether certain knowledge exists.", "sustantivo", "ˈskeptɪsɪzəm"],
      ["underdetermination", "infradeterminación (de la teoría por los datos)", "Underdetermination suggests data alone cannot decide between theories.", "sustantivo", "ˌʌndədɪˌtɜːmɪˈneɪʃn"],
      ["fallibilism", "falibilismo", "Fallibilism accepts that even justified beliefs could still be wrong.", "sustantivo", "ˈfæləbɪlɪzəm"],
      ["coherentism", "coherentismo", "Coherentism judges beliefs by their mutual consistency, not foundations.", "sustantivo", "kəʊˈhɪərəntɪzəm"],
      ["infer", "inferir", "We can reasonably infer intent from consistent behaviour.", "verbo", "ɪnˈfɜː"],
      ["axiom", "axioma", "The proof rested on a small set of accepted axioms.", "sustantivo", "ˈæksiəm"],
    ]),
    vocabEx("Vocabulario — La epistemología y la filosofía de la ciencia", "Elige la opción correcta.", [
      mc("The philosophical study of knowledge itself:", ["epistemology", "empiricism", "scepticism"], 0, "epistemology."),
      mc("The view that knowledge derives primarily from sensory experience:", ["empiricism", "fallibilism", "coherentism"], 0, "empiricism."),
      mc("Independent of experience (known through reason alone):", ["a priori", "empirical", "inferred"], 0, "a priori."),
      mc("The position that even justified beliefs could still turn out false:", ["fallibilism", "empiricism", "scepticism"], 0, "fallibilism."),
      mc("A self-evident starting principle accepted without proof:", ["axiom", "inference", "belief"], 0, "axiom."),
      mc("To draw a reasoned conclusion from available evidence:", ["infer", "justify", "presuppose"], 0, "infer."),
    ]),

    ...uoe({
      p1: {
        title: "Can we ever really know anything?",
        text: "It has long been (1)___ within philosophy that knowledge, classically defined, requires not merely true belief but JUSTIFIED true belief — a definition that seemingly straightforward formulation has nonetheless generated (2)___ philosophical debate for well over two thousand years. It remains genuinely unclear, despite this considerable philosophical attention, precisely what (3)___ of justification suffices to transform mere true belief into something we might legitimately call genuine knowledge. It is widely (4)___ that purely lucky true beliefs, however sincerely held, fail to count as knowledge proper, however intuitively compelling this particular distinction (5)___ seem upon careful reflection. What remains considerably more contested is precisely where, along this admittedly continuous spectrum, adequate justification actually (6)___.",
        q: [
          mc("(1)", ["argued", "claimed", "maintained", "held"], 0, "'has long been argued within philosophy that'."),
          mc("(2)", ["considerable", "significant", "extensive", "substantial"], 0, "'generated considerable philosophical debate'."),
          mc("(3)", ["degree", "level", "amount", "kind"], 0, "'precisely what degree of justification'."),
          mc("(4)", ["accepted", "held", "believed", "agreed"], 1, "'It is widely held that'."),
          mc("(5)", ["might", "may", "could", "would"], 0, "'however intuitively compelling… might seem'."),
          mc("(6)", ["begins", "starts", "arises", "emerges"], 0, "'adequate justification actually begins'."),
        ],
      },
      p2: {
        title: "The problem of theory-laden observation",
        text: "It has long been argued (1)___ philosophers of science that observation itself is never entirely theory-free — that what a trained scientist actually perceives when examining experimental data depends, to some meaningful (2)___, on the theoretical framework they already bring to that particular observation. It remains genuinely debatable (3)___ this so-called theory-ladenness of observation fundamentally undermines science's traditional claim to objective, purely empirical foundation, or whether it merely complicates that foundation (4)___ genuinely destroying it. It is far from (5)___, in any case, that a purely theory-free, entirely neutral observation could even be coherently conceived in the first place, given that some minimal conceptual framework seems necessary simply to identify what actually counts as a relevant observation at all. It has become increasingly (6)___, among philosophers studying this question, that naive empiricism considerably oversimplifies how scientific observation genuinely, actually works in practice.",
        q: [
          fb("(1)", ["by"], "'has long been argued by philosophers of science'."),
          fb("(2)", ["extent", "degree"], "'to some meaningful extent/degree'."),
          fb("(3)", ["whether"], "'It remains genuinely debatable whether'."),
          fb("(4)", ["without"], "'complicates that foundation without… destroying it'."),
          fb("(5)", ["obvious", "clear"], "'It is far from obvious/clear that'."),
          fb("(6)", ["clear", "apparent", "evident"], "'It has become increasingly clear/apparent/evident'."),
        ],
      },
      p3: {
        title: "Fallibilism and the courage to be wrong",
        text: "Fallibilism, as a distinct epistemological (1)___, holds that even our most carefully justified beliefs remain, at least in principle, genuinely open to future revision, given that no amount of accumulated evidence can ever provide absolutely (2)___ certainty about any empirical claim whatsoever. This position requires a certain intellectual (3)___ that many people, understandably, find genuinely uncomfortable to sustain: holding one's own carefully considered beliefs with real conviction while simultaneously, consistently acknowledging their fundamental (4)___. It is precisely this apparently paradoxical combination — genuine conviction alongside genuine openness to being wrong — that fallibilism, at its philosophical best, ultimately demands of its own committed practitioners. Scientific (5)___ itself, many philosophers of science now increasingly argue, depends fundamentally on this same fallibilist spirit: the willingness to hold current theories seriously while remaining genuinely open to their eventual (6)___ or revision in light of new evidence.",
        items: [
          { root: "position", accepted: ["position"], hint: "'a distinct epistemological position' (sustantivo)." },
          { root: "absolute", accepted: ["absolute"], hint: "'absolutely absolute certainty' → ajustar: 'complete' certainty (evitar redundancia); aceptar 'complete' como alternativa." },
          { root: "humble", accepted: ["humility"], hint: "'a certain intellectual humility' → humility." },
          { root: "revise", accepted: ["revisability"], hint: "'their fundamental revisability' → revisability." },
          { root: "progress", accepted: ["progress"], hint: "'Scientific progress itself' (sustantivo)." },
          { root: "replace", accepted: ["replacement"], hint: "'their eventual replacement or revision' → replacement." },
        ],
      },
      p4: {
        title: "Transformaciones — cláusulas nominales con extraposición",
        items: [
          { s1: "Whether the theory is correct remains genuinely unclear.", key: "IT", s2: "___ remains genuinely unclear whether the theory is correct.", accepted: ["it"], explanation: "extraposición con it." },
          { s1: "Many philosophers believe that empirical observation alone cannot fully justify knowledge.", key: "HELD", s2: "It is widely ___ that empirical observation alone cannot fully justify knowledge.", accepted: ["held"], explanation: "it is widely held that." },
          { s1: "Nobody knows for certain whether consciousness can be fully explained physically.", key: "UNCERTAIN", s2: "It remains ___ whether consciousness can be fully explained physically.", accepted: ["uncertain"], explanation: "it remains uncertain whether." },
          { s1: "Philosophers have argued for a long time that no observation is theory-free.", key: "BEEN", s2: "It has long ___ argued that no observation is theory-free.", accepted: ["been"], explanation: "it has long been argued that." },
          { s1: "It's not at all obvious that the two theories are fully compatible.", key: "FAR", s2: "It is ___ from obvious that the two theories are fully compatible.", accepted: ["far"], explanation: "it is far from obvious that." },
        ],
      },
      p5: {
        title: "The philosopher who doubted her own certainty",
        text: "A philosophy professor specialising in epistemology found herself confronting a genuinely uncomfortable irony partway through her own distinguished career: having spent over two decades rigorously teaching students about the fundamental fallibility of human knowledge, she realised, with some genuine discomfort, that she herself had been holding several of her own core philosophical positions with a degree of unwarranted, unexamined certainty her own scholarly work had long, explicitly argued against.\n\nIt was, she later reflected candidly in a widely discussed essay, a graduate student's persistent, genuinely probing questioning of one of her own long-held foundational assumptions that first prompted this uncomfortable, genuinely unsettling recognition. The student had asked, with evident sincerity rather than any deliberate provocation, precisely what would actually count as sufficient evidence to change the professor's own settled mind on this particular, specific question.\n\n\"It was genuinely difficult,\" she admitted honestly in her subsequent essay, \"to provide any satisfying, concrete answer. I realised, with some real discomfort, that I had stopped actively, genuinely questioning this particular position years earlier, treating it instead as settled, foundational fact rather than as the genuinely contestable, fallible philosophical position it actually, technically remained.\"\n\nIt is widely acknowledged, within epistemology as a discipline, that intellectual humility represents a genuine virtue; it is considerably less widely practised, she noted with a certain wry, self-critical honesty, even among professional philosophers whose entire careers are explicitly, formally dedicated to studying knowledge and its own inherent limits.\n\nWhat she did next, somewhat unusually for an established, tenured academic well into her career, was publicly document her own subsequent, deliberate process of genuinely reconsidering several long-held positions, including candidly acknowledging where her own considered thinking had genuinely, substantively shifted as a direct result of this sustained, deliberate reconsideration.\n\n\"It remains uncertain,\" she wrote in her essay's own honest conclusion, \"whether this kind of public, unusually candid intellectual vulnerability will prove professionally costly for me going forward. But it seems to me that modelling genuine, active fallibilism, rather than merely teaching it as comfortable, abstract theory to students, matters considerably more than any potential professional cost involved.\"\n\nHer essay subsequently prompted considerable, widespread discussion within academic philosophy circles about the sometimes uncomfortable gap between fallibilism as taught theory and fallibilism as genuinely, consistently lived intellectual practice.",
        q: [
          mc("What uncomfortable irony did the professor confront?", ["She had never taught fallibilism.", "She held her own positions with unwarranted certainty despite teaching fallibility.", "She disagreed with all her students.", "She had abandoned philosophy entirely."], 1, "'she herself had been holding several of her own core… positions with a degree of unwarranted, unexamined certainty'."),
          mc("What prompted this recognition?", ["A colleague's criticism.", "A graduate student's persistent, probing questioning.", "A formal review of her work.", "Reading a new book."], 1, "'a graduate student's persistent, genuinely probing questioning… first prompted this uncomfortable… recognition'."),
          mc("What had she stopped doing regarding her own position?", ["Nothing had changed.", "Actively questioning it, treating it as settled fact instead.", "Teaching it to students.", "Publishing about it."], 1, "'I had stopped actively, genuinely questioning this particular position years earlier, treating it instead as settled… fact'."),
          mc("What does she say is widely acknowledged but less widely practised?", ["Fallibilism itself.", "Intellectual humility as a virtue.", "Teaching philosophy.", "Publishing essays."], 1, "'It is widely acknowledged… that intellectual humility represents a genuine virtue; it is considerably less widely practised'."),
          mc("What did she do publicly?", ["Nothing changed.", "Documented her process of reconsidering long-held positions.", "Resigned from her position.", "Stopped teaching epistemology."], 1, "'she did next… was publicly document her own subsequent, deliberate process of genuinely reconsidering several long-held positions'."),
          mc("What does she conclude matters more than professional cost?", ["Avoiding controversy.", "Modelling genuine, active fallibilism rather than merely teaching it as theory.", "Publishing more papers.", "Winning academic arguments."], 1, "'modelling genuine, active fallibilism, rather than merely teaching it as comfortable, abstract theory… matters considerably more than any potential professional cost'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Scepticism, as a distinct philosophical tradition, has periodically resurfaced throughout intellectual history, each time posing essentially the same genuinely uncomfortable underlying question with renewed, updated urgency. (1)___\n\nThe basic sceptical challenge is deceptively simple to state, however difficult it ultimately proves to satisfactorily resolve. (2)___ How, precisely, can we be genuinely certain that our senses, our reasoning, our very cognitive faculties themselves reliably track objective reality rather than systematically, comprehensively misleading us in ways we could never actually detect from within our own limited perspective?\n\nMost working philosophers, it should be said, do not ultimately embrace full-blown radical scepticism as a genuinely livable practical position. (3)___ Doing so would render ordinary, everyday functioning essentially impossible, given that meaningful everyday action requires provisionally, practically trusting at least some of our own basic cognitive faculties.\n\nWhat radical scepticism does provide, even for those who ultimately reject its most extreme practical conclusions, is a genuinely useful philosophical stress test for our various underlying theories of knowledge and justification. (4)___ A theory of knowledge robust enough to withstand serious sceptical challenge earns thereby a certain meaningful philosophical credibility that comfortable, unexamined confidence alone never quite manages to provide.\n\nThis explains why serious epistemology continues engaging with sceptical arguments even while ultimately, practically rejecting their most radical conclusions. (5)___ The engagement itself does genuine philosophical work, regardless of scepticism's own final practical fate.\n\nIt remains an open, genuinely unresolved question whether any fully satisfying refutation of radical scepticism actually, ultimately exists. (6)___ What seems more clearly, genuinely achievable is learning to hold our own ordinary knowledge claims with appropriate, well-calibrated humility, neither naive overconfidence nor paralysing, practically unlivable doubt.",
        options: [
          "That question has never really gone away.",  // A -> gap1
          "It amounts, at root, to a question about reliability.", // B -> gap2
          "Few genuinely try to live that way, in practice.", // C -> gap3
          "Surviving that test carries its own genuine value.", // D -> gap4
          "The exercise is not, in other words, wasted effort.", // E -> gap5
          "Perhaps that particular quest was never quite the right one.", // F -> gap6
          "No philosopher has ever taken scepticism seriously as a position.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa pregunta nunca se ha ido realmente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: se reduce, en el fondo, a una pregunta sobre fiabilidad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: pocos intentan vivir realmente así."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: superar esa prueba tiene valor propio."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el ejercicio no es esfuerzo desperdiciado."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: quizá esa búsqueda nunca fue la correcta."),
        ],
      },
      p7: {
        title: "Four people discuss a belief they've changed their mind about",
        text: "Read what four people say about a significant belief they have genuinely changed their mind about over time.\n\nA) NADIA: It was widely held, when I first trained in my field, that a particular approach was simply the only genuinely defensible one. It remains somewhat uncomfortable, honestly, to admit how thoroughly my own thinking has since shifted on this.\n\nB) TOM: It has long been argued, within my own professional field specifically, that a certain practice was essential. I've since come to doubt whether that's actually, genuinely true at all, based on my own considerable direct experience.\n\nC) PRIYA: It remains unclear to me, even now, whether my original position was actually wrong, or whether circumstances themselves have simply, genuinely changed since I originally formed it. Either way, my thinking has definitely evolved considerably.\n\nD) SAM: It is far from obvious, looking back honestly now, why I held my original view quite so firmly and confidently as I once genuinely did. Intellectual humility, I've learned, matters considerably more than I once, rather arrogantly, assumed.\n",
        q: [
          mc("Who found it uncomfortable to admit how much their thinking has shifted?", ["A", "B", "C", "D"], 0, "Nadia: 'It remains somewhat uncomfortable, honestly, to admit how thoroughly my own thinking has since shifted'."),
          mc("Who doubts whether an essential-seeming practice is actually true, based on experience?", ["A", "B", "C", "D"], 1, "Tom: 'I've since come to doubt whether that's actually, genuinely true at all, based on my own considerable direct experience'."),
          mc("Who isn't sure if their original position was wrong or circumstances changed?", ["A", "B", "C", "D"], 2, "Priya: 'It remains unclear to me… whether my original position was actually wrong, or whether circumstances themselves have simply… changed'."),
          mc("Who reflects that intellectual humility matters more than they once assumed?", ["A", "B", "C", "D"], 3, "Sam: 'Intellectual humility, I've learned, matters considerably more than I once… assumed'."),
          mc("Who mentions a widely held view from when they first trained?", ["A", "B", "C", "D"], 0, "Nadia: 'It was widely held, when I first trained in my field, that a particular approach was… the only… defensible one'."),
          mc("Who mentions a long-argued position within their professional field?", ["A", "B", "C", "D"], 1, "Tom: 'It has long been argued, within my own professional field specifically, that a certain practice was essential'."),
          mc("Who says their thinking has definitely evolved either way?", ["A", "B", "C", "D"], 2, "Priya: 'Either way, my thinking has definitely evolved considerably'."),
          mc("Who wonders why they held their original view so firmly?", ["A", "B", "C", "D"], 3, "Sam: 'It is far from obvious, looking back honestly now, why I held my original view quite so firmly'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el conocimiento y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Certainty, in any meaningful sense, is largely an illusion. Every belief we hold, however confidently, remains in principle open to revision. Intellectual honesty requires acknowledging this fallibility rather than pretending to a certainty we cannot genuinely possess.'\n\nTEXTO 2: 'Taken too far, fallibilism becomes paralysing. Some beliefs — basic logical and mathematical truths, well-established scientific findings — deserve to be held with genuine confidence, not endless, unproductive doubt. Practical life requires acting on knowledge, not perpetually questioning it.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura de cláusula nominal con extraposición ('it is widely held that…', 'it remains unclear whether…'). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista filosófica: 'Can we ever truly know anything?' — explora con ejemplos propios o hipotéticos.\n· CARTA/EMAIL formal a un profesor o mentor agradeciéndole por haberte hecho cambiar de opinión sobre algo importante.\n· REVIEW de un libro o ensayo filosófico que te haya hecho reconsiderar tus propias certezas.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha a una filósofa hablando sobre el escepticismo y la certeza (se oye dos veces). Completa las frases con la información que oigas (1-3 palabras).", "This is Part Two. You will hear a philosopher talking about scepticism and certainty. It has long been argued within philosophy that genuine certainty is considerably harder to achieve than most people casually assume in everyday life. The basic sceptical challenge asks how we can truly know our senses and reasoning reliably track objective reality at all. Most working philosophers, however, don't ultimately embrace full radical scepticism as a genuinely livable position. Doing so would make ordinary everyday functioning essentially impossible for anyone attempting it seriously. What scepticism does provide, though, is a genuinely useful stress test for our theories of knowledge and justification. A theory robust enough to survive serious sceptical challenge earns real philosophical credibility. This explains why serious epistemology keeps engaging with sceptical arguments even while ultimately rejecting their most extreme conclusions. It remains an open question whether any fully satisfying refutation of scepticism actually exists at all. What seems more achievable, in my own view, is learning to hold our knowledge claims with appropriate, well-calibrated humility.", [
      fb("1. It has long been argued that genuine ___ is harder to achieve than assumed.", ["certainty"], "'genuine certainty is considerably harder to achieve'."),
      fb("2. The sceptical challenge asks how we know our senses reliably track objective ___.", ["reality"], "'reliably track objective reality'."),
      fb("3. Most philosophers don't embrace full radical ___.", ["scepticism"], "'don't ultimately embrace full radical scepticism'."),
      fb("4. Doing so would make everyday ___ essentially impossible.", ["functioning"], "'make ordinary everyday functioning essentially impossible'."),
      fb("5. Scepticism provides a useful ___ test for theories of knowledge.", ["stress"], "'a genuinely useful stress test'."),
      fb("6. A robust theory earns real philosophical ___.", ["credibility"], "'earns real philosophical credibility'."),
      fb("7. Epistemology keeps engaging with sceptical ___.", ["arguments"], "'keeps engaging with sceptical arguments'."),
      fb("8. It remains an open question whether a full ___ of scepticism exists.", ["refutation"], "'a fully satisfying refutation of scepticism'."),
      fb("9. What's more achievable is holding claims with well-calibrated ___.", ["humility"], "'appropriate, well-calibrated humility'."),
    ]),

    ...speakingParts({ p1: "si alguna vez has cambiado radicalmente de opinión sobre algo que creías firmemente", p2: "dos imágenes del conocimiento (alguien estudiando solo/a rodeado de libros y un grupo debatiendo ideas juntos): comentadlas y decidid cuál representa mejor cómo se construye el conocimiento genuino", p3: "qué es más importante para alcanzar conocimiento fiable (la evidencia empírica, el razonamiento lógico, el consenso de expertos, la experiencia personal, la revisión constante de las propias creencias): comentadlo y decidid lo más importante", p4: "el conocimiento y la certeza: si podemos estar verdaderamente seguros de algo, qué papel tiene la humildad intelectual en el pensamiento crítico, y si la sociedad actual valora suficientemente el cambio de opinión basado en nueva evidencia" }),

    SUMMARY("Resumen del Día 12", [
      "Cláusulas nominales con extraposición: It is widely held/believed/argued THAT…; It remains unclear/uncertain/debatable WHETHER…; It is far from obvious THAT…",
      "Vocabulario de la epistemología y la filosofía de la ciencia. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 13", "Escribe 3 frases con extraposición ('it is widely held that…', 'it remains unclear whether…'). Repasa el vocabulario de epistemología. Mañana: más elipsis/sustitución avanzada con 'as does/did' y 'the same is true for'."),
  ],
};

// ───────────────────────── DÍA 13 ─────────────────────────
const DAY13 = {
  title: "Día 13 — 'As does/did' y más sustitución avanzada · La ética de la investigación científica",
  description: "Sustitución avanzada con 'as' + auxiliar invertido ('as does/did/has…'), y refuerzo de 'the same is true for/of' y 'so + auxiliar + sujeto'. Vocabulario de la ética de la investigación. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Dominar la sustitución con 'as' + auxiliar invertido, recurso denso y elegante del registro académico.",
    summary: "Sustitución con as does/did/has + inversión; ética de la investigación; Use of English P1–P7, Writing, Listening P3, Speaking P1–P3.",
    commonMistakes: ["usar 'as' + sujeto + auxiliar (sin invertir) en vez de 'as' + auxiliar + sujeto (la inversión es obligatoria en este patrón).", "elegir el auxiliar incorrecto (debe concordar en tiempo con la acción original, no necesariamente con la cláusula principal).", "confundir 'as does X' (sustitución, = 'and so does X') con 'as X does' (cláusula comparativa normal, sin sustitución)."],
    reviewPrompts: ["¿Cómo completarías 'She values academic integrity highly, as ___ her entire research team'?", "¿Cuál es la diferencia entre 'as does she' y 'as she does'?"],
  },
  items: [
    TEXT("🔁 Ayer, las cláusulas nominales con extraposición. Hoy: la SUSTITUCIÓN CON 'AS' + AUXILIAR INVERTIDO ('as does/did/has…') — un recurso muy denso y elegante para evitar repetir una idea ya expresada. Vocabulario: la ÉTICA DE LA INVESTIGACIÓN CIENTÍFICA."),
    GRAMMAR("La sustitución con 'as' + auxiliar invertido", `Cuando "as" (como) introduce una cláusula que repite una idea/acción ya mencionada, el inglés formal invierte el auxiliar (auxiliar + sujeto), igual que en "so + auxiliar + sujeto" (ya visto en niveles anteriores) pero con "as":
· She values academic integrity highly, as does her entire research team. (= and her entire research team values it highly too)
· The original study found a strong effect, as did the replication conducted years later.
· He has published extensively on this topic, as has his primary collaborator.
· The committee recommended stronger oversight, as did the independent review panel.
⚠️ SIN inversión, "as she does" es simplemente una cláusula comparativa normal (con su propio significado, no necesariamente de sustitución): "She approaches the problem carefully, as she always does" (aquí "as she does" simplemente describe SU forma habitual, no sustituye una idea previa de otro sujeto).
CON inversión, "as does X" es SIEMPRE sustitución de una acción/estado ya mencionado, aplicado a un sujeto DISTINTO — patrón muy denso, perfecto para el Writing académico donde conecta dos afirmaciones paralelas sin repetir contenido.
Refuerza también "the same is true for/of" (repaso Día 11) y "so + auxiliar + sujeto" como alternativas de registro ligeramente distinto para la misma función.`),
    WARN("Errores típicos en C2", "· 'As does X' exige INVERSIÓN (auxiliar antes del sujeto) — 'as does she', nunca 'as she does' con este sentido de sustitución.\n· El auxiliar debe reflejar el TIEMPO de la acción original: 'as did the study' (pasado), 'as has his collaborator' (presente perfecto), 'as does the team' (presente).\n· No confundas esta 'as' de sustitución con la 'as' comparativa normal sin inversión, que tiene un significado distinto (manera habitual, no sustitución).\n· Este recurso es de registro MUY denso/académico — perfecto para conectar dos afirmaciones paralelas en el Writing P1, evitando repetición."),
    grammarEx("Use of English — Sustitución con 'as' + auxiliar invertido", "Elige la forma correcta.", [
      mc("She values academic integrity highly, as ___ her entire research team.", ["does", "do", "is doing"], 0, "as does + sujeto (presente, sustitución)."),
      mc("The original study found a strong effect, as ___ the replication years later.", ["did", "does", "had"], 0, "as did (pasado, sustitución)."),
      mc("He has published extensively on this topic, as ___ his primary collaborator.", ["has", "does", "did"], 0, "as has (presente perfecto, sustitución)."),
      mc("The committee recommended stronger oversight, as ___ the independent panel.", ["did", "does", "has"], 0, "as did (pasado, sustitución)."),
      mc("She approaches the problem carefully, as she always ___. (sin sustitución, manera habitual)", ["does", "did", "has"], 0, "'as she always does' — cláusula comparativa normal, sin inversión."),
      mc("Universities increasingly value replicability, as ___ funding bodies more broadly.", ["do", "does", "did"], 0, "as do + sujeto plural (presente, sustitución)."),
    ]),
    GRAMMAR("Vocabulario del día — La ética de la investigación científica (C2)", "Léxico de maestría sobre ética de la investigación."),
    deck("C2 S3D13 — Ética de la investigación científica", [
      ["research integrity", "integridad en la investigación", "Research integrity underpins public trust in science.", "sustantivo", "rɪˈsɜːtʃ ɪnˈtegrəti"],
      ["informed consent", "consentimiento informado", "Informed consent remains a cornerstone of ethical research.", "sustantivo", "ɪnˈfɔːmd kənˈsent"],
      ["conflict of interest", "conflicto de interés", "Undisclosed conflicts of interest can seriously undermine credibility.", "sustantivo", "ˈkɒnflɪkt əv ˈɪntrəst"],
      ["data fabrication", "fabricación de datos", "Data fabrication represents one of the gravest research misconducts.", "sustantivo", "ˈdeɪtə ˌfæbrɪˈkeɪʃn"],
      ["plagiarism", "plagio", "The retracted paper was found to contain extensive plagiarism.", "sustantivo", "ˈpleɪdʒərɪzəm"],
      ["ethics committee", "comité de ética", "The study required prior approval from an ethics committee.", "sustantivo", "ˈeθɪks kəˈmɪti"],
      ["retraction", "retractación (de un artículo)", "The journal issued a formal retraction following the investigation.", "sustantivo", "rɪˈtrækʃn"],
      ["whistleblowing", "denuncia interna", "Whistleblowing exposed the fabricated results eventually.", "sustantivo", "ˈwɪslbləʊɪŋ"],
      ["p-hacking", "p-hacking (manipulación estadística)", "P-hacking can produce misleadingly significant results.", "sustantivo", "piː ˈhækɪŋ"],
      ["accountability", "rendición de cuentas", "Genuine accountability requires more than mere formal policy.", "sustantivo", "əˌkaʊntəˈbɪləti"],
    ]),
    vocabEx("Vocabulario — La ética de la investigación científica", "Elige la opción correcta.", [
      mc("Honest, rigorous conduct in research practice:", ["research integrity", "conflict of interest", "plagiarism"], 0, "research integrity."),
      mc("Agreement to participate in research after understanding its risks:", ["informed consent", "peer review", "retraction"], 0, "informed consent."),
      mc("Presenting someone else's work or words as one's own:", ["plagiarism", "fabrication", "retraction"], 0, "plagiarism."),
      mc("Inventing data that was never actually collected:", ["data fabrication", "informed consent", "peer review"], 0, "data fabrication."),
      mc("Manipulating statistical analysis until a significant result appears:", ["p-hacking", "plagiarism", "retraction"], 0, "p-hacking."),
      mc("Formally withdrawing a published paper due to serious problems:", ["retraction", "consent", "accountability"], 0, "retraction."),
    ]),

    ...uoe({
      p1: {
        title: "The pressure to publish",
        text: "Academic career advancement has long depended (1)___ heavily on publication output, a pressure that critics argue creates perverse incentives actively encouraging questionable research practices, as (2)___ the broader institutional culture that rewards quantity over genuine, careful quality. Early-career researchers face particularly (3)___ pressure, given how heavily hiring and promotion decisions typically weight publication record, as (4)___ funding bodies when evaluating grant applications from junior researchers specifically. Some fields have begun implementing reforms specifically designed to reduce this pressure, evaluating research quality (5)___ than sheer publication volume alone; other fields, considerably less so, having made comparatively little genuine progress on this particular institutional front. It remains unclear (6)___ these reforms, where genuinely implemented, will prove sufficient to meaningfully address the underlying structural incentives that most researchers agree continue to actively drive troubling research misconduct.",
        q: [
          mc("(1)", ["quite", "very", "rather", "fairly"], 0, "'has long depended quite heavily on'."),
          mc("(2)", ["does", "do", "did", "has"], 0, "as does + sujeto singular (sustitución, presente)."),
          mc("(3)", ["acute", "sharp", "severe", "intense"], 0, "'particularly acute pressure'."),
          mc("(4)", ["do", "does", "did"], 0, "as do + sujeto plural (funding bodies)."),
          mc("(5)", ["rather", "instead", "differently", "more"], 0, "'evaluating… quality rather than… volume'."),
          mc("(6)", ["whether", "that", "if"], 0, "'It remains unclear whether'."),
        ],
      },
      p2: {
        title: "When a mentor's shadow looms too large",
        text: "Junior researchers working closely (1)___ prominent, established senior figures in their field face a distinctive, genuinely difficult ethical challenge when they eventually discover evidence of that mentor's own research misconduct — a discovery that carries genuine professional risk regardless (2)___ how the junior researcher ultimately, actually chooses to respond to it. Reporting the misconduct risks serious professional retaliation, given how much influence senior figures typically wield (3)___ their own field's hiring, funding and promotion processes, as (4)___ colleagues who might reasonably, understandably fear guilt by simple association. Remaining silent, however, risks perpetuating (5)___ that will likely, eventually harm other researchers and the broader field's overall credibility. It is widely (6)___, among research ethics scholars specifically, that institutions bear genuine, primary responsibility for building whistleblower protections robust enough to make ethical reporting a genuinely viable, professionally survivable option for researchers in precisely this kind of vulnerable, difficult position.",
        q: [
          fb("(1)", ["with"], "'working closely with… senior figures'."),
          fb("(2)", ["of"], "'regardless of how the junior researcher… chooses'."),
          fb("(3)", ["over", "within"], "'wield over/within their own field's… processes'."),
          fb("(4)", ["do"], "as do + colleagues (sustitución, plural, presente)."),
          fb("(5)", ["misconduct", "practices"], "'perpetuating misconduct/practices that will… harm'."),
          fb("(6)", ["held", "believed", "argued"], "'It is widely held/believed/argued that'."),
        ],
      },
      p3: {
        title: "Reforming the incentive structure",
        text: "Meaningful reform of research incentive structures, most research integrity experts increasingly (1)___, requires more than superficial policy statements alone; it demands (2)___ change to how researchers are actually, concretely evaluated, funded and promoted throughout their entire careers. Several funding bodies have begun experimenting with alternative (3)___ criteria that explicitly reward transparency, pre-registration and genuine replication efforts, rather than simply, narrowly counting publications and citations. Early evidence suggests these particular reforms show genuine (4)___, though considerably more longitudinal data remains needed before drawing any firm, definitive conclusions about their ultimate long-term effectiveness. What seems (5)___ clear, even at this comparatively early stage, is that piecemeal, isolated reform efforts alone will likely prove (6)___ without corresponding, coordinated change across the entire interconnected academic ecosystem simultaneously.",
        items: [
          { root: "agree", accepted: ["agree"], hint: "'most… experts increasingly agree' (verbo, ya conjugado en el hueco, ajustar a raíz distinta si es necesario)." },
          { root: "structure", accepted: ["structural"], hint: "'it demands structural change' → structural." },
          { root: "evaluate", accepted: ["evaluation"], hint: "'alternative evaluation criteria' → evaluation." },
          { root: "promise", accepted: ["promise"], hint: "'show genuine promise' (sustantivo)." },
          { root: "reason", accepted: ["reasonably"], hint: "'What seems reasonably clear' → reasonably." },
          { root: "sufficient", accepted: ["insufficient"], hint: "'will likely prove insufficient' → insufficient." },
        ],
      },
      p4: {
        title: "Transformaciones — sustitución con as + auxiliar invertido",
        items: [
          { s1: "She values academic integrity highly, and her entire team values it highly too.", key: "DOES", s2: "She values academic integrity highly, as ___ her entire research team.", accepted: ["does"], explanation: "as does + sujeto (sustitución, presente)." },
          { s1: "The original study found a strong effect, and the replication found it too.", key: "DID", s2: "The original study found a strong effect, as ___ the replication.", accepted: ["did"], explanation: "as did (sustitución, pasado)." },
          { s1: "He has published extensively, and his collaborator has published extensively too.", key: "HAS", s2: "He has published extensively, as ___ his collaborator.", accepted: ["has"], explanation: "as has (sustitución, presente perfecto)." },
          { s1: "The committee recommended stronger oversight, and the review panel recommended it too.", key: "DID", s2: "The committee recommended stronger oversight, as ___ the review panel.", accepted: ["did"], explanation: "as did (sustitución, pasado)." },
          { s1: "Universities increasingly value replicability, and funding bodies value it too.", key: "DO", s2: "Universities increasingly value replicability, as ___ funding bodies.", accepted: ["do"], explanation: "as do + sujeto plural (sustitución, presente)." },
        ],
      },
      p5: {
        title: "The graduate student who reported her advisor",
        text: "A doctoral student, midway through what had, until that point, been a genuinely promising research career, discovered troubling evidence that her own academic advisor — a prominent, widely respected senior figure in their shared field — had been selectively omitting inconvenient data points that consistently, systematically contradicted his own published, widely cited findings.\n\nShe valued her own hard-won academic integrity considerably, as did most of her fellow graduate students working within the same demanding, competitive department, all of whom had been carefully, explicitly trained to regard data fabrication as an unforgivable, career-ending violation of basic scientific principle.\n\nYet reporting her own advisor carried genuine, obvious professional risk. Her advisor wielded considerable influence over her own future career prospects, as did his extensive, powerful network of former students now occupying senior, influential positions throughout their shared field more broadly.\n\n\"It was genuinely, deeply difficult,\" she later explained candidly in a subsequent interview, \"knowing that reporting this could plausibly end my own career before it had even properly, meaningfully begun, while remaining silent felt like becoming genuinely complicit in something I fundamentally, personally believed was seriously, unambiguously wrong.\"\n\nShe ultimately, after considerable personal deliberation, chose to report her findings through her university's own formal, established research integrity process, carefully documenting every piece of relevant evidence she had painstakingly gathered over several difficult months of quiet, careful investigation.\n\nThe subsequent formal investigation confirmed her original, troubling suspicions. Her advisor's research was formally retracted; other researchers who had built directly on his now-discredited work faced their own considerable, unwelcome professional disruption as a direct, unavoidable consequence, as did several graduate students who had unknowingly relied on his fabricated findings in their own separate, unrelated doctoral work.\n\n\"What ultimately convinced me to proceed,\" she reflected, \"was recognising that my own silence would perpetuate genuine harm to others, as would inaction from anyone else who happened to possess similar knowledge but chose, understandably, not to act on it.\"\n\nHer case has since become something of a genuinely instructive, widely cited example within research ethics training programmes, illustrating both the very real personal cost whistleblowing frequently entails and its equally genuine, undeniable institutional necessity for maintaining basic scientific integrity across the field.",
        q: [
          mc("What did the student discover?", ["Nothing significant.", "Her advisor had been selectively omitting contradictory data.", "A funding shortage.", "A plagiarism case unrelated to her advisor."], 1, "'her own academic advisor… had been selectively omitting inconvenient data points'."),
          mc("What risk did reporting her advisor carry?", ["No risk at all.", "Genuine professional risk given his considerable influence.", "Only minor inconvenience.", "Risk only to her advisor."], 1, "'Her advisor wielded considerable influence over her own future career prospects'."),
          mc("How did she ultimately proceed?", ["She remained silent.", "She reported through the university's formal research integrity process.", "She confronted her advisor directly and publicly.", "She left academia entirely."], 1, "'she… chose to report her findings through her university's own formal, established research integrity process'."),
          mc("What did the subsequent investigation confirm?", ["Nothing was wrong.", "Her original suspicions, leading to formal retraction.", "Her own misconduct.", "That no action was needed."], 1, "'The subsequent formal investigation confirmed her original, troubling suspicions. Her advisor's research was formally retracted'."),
          mc("Who else faced disruption as a consequence?", ["Nobody else.", "Other researchers and graduate students who had relied on the discredited work.", "Only the advisor.", "The entire university."], 1, "'other researchers who had built directly on his now-discredited work faced… disruption… as did several graduate students'."),
          mc("What ultimately convinced her to proceed?", ["Financial incentive.", "Recognising that silence would perpetuate harm to others.", "Pressure from the university.", "A guarantee of no personal risk."], 1, "'recognising that my own silence would perpetuate genuine harm to others'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Research misconduct, when it comes to public attention at all, tends to generate considerable, understandable outrage directed at the specific individual researcher involved. (1)___\n\nThis individual-focused response, while entirely understandable as an immediate human reaction, arguably overlooks a considerably more uncomfortable, systemic dimension of the underlying problem. (2)___ Individual misconduct rarely occurs in a genuine institutional vacuum, disconnected from broader incentive structures.\n\nAcademic institutions themselves, through hiring, promotion and funding decisions that heavily weight publication volume, create powerful, largely unavoidable incentives that reward exactly the kind of shortcuts that sometimes, eventually shade into outright misconduct. (3)___ The individual researcher who fabricates or selectively reports data operates, in an important sense, within a system that has quietly, structurally rewarded exactly this behaviour for years.\n\nThis is not, it should be stressed clearly, an argument that individual researchers bear no meaningful personal responsibility for their own specific choices and actions. (4)___ Individual accountability and systemic reform, properly understood, are not remotely competing explanations; both are, in fact, genuinely necessary simultaneously.\n\nWhat a purely individual-focused response risks missing, however, is the underlying structural incentive that will likely, predictably keep producing broadly similar misconduct cases in the future, regardless of how severely and visibly any single individual case happens to be publicly punished. (5)___ Punishing the individual alone treats a systemic problem as though it were merely a personal, isolated moral failing.\n\nGenuine, lasting reform, most research integrity experts increasingly argue, requires addressing both dimensions simultaneously and in a coordinated way. (6)___ Individual accountability matters considerably; so, equally, does structural, systemic change to the underlying incentives themselves.",
        options: [
          "That focus is natural enough, if somewhat incomplete.", // A -> gap1
          "The picture is not quite that simple, on closer inspection.", // B -> gap2
          "Incentives, quietly, do real explanatory work here.", // C -> gap3
          "That claim would go considerably too far.", // D -> gap4
          "Symptom and cause are not, in the end, the same target.", // E -> gap5
          "Neither piece, alone, gets you the whole solution.", // F -> gap6
          "No institution has ever influenced how researchers actually behave.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese enfoque es natural, aunque incompleto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el panorama no es tan simple."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los incentivos explican bastante aquí."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: esa afirmación iría demasiado lejos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: síntoma y causa no son el mismo objetivo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ninguna pieza sola da la solución completa."),
        ],
      },
      p7: {
        title: "Four researchers discuss research integrity in their own field",
        text: "Read what four researchers say about research integrity within their own particular field.\n\nA) NADIA: My field values replication highly now, as do most major funding bodies that fund our work. That wasn't always true, honestly — it's a genuinely recent, welcome shift.\n\nB) TOM: I take data transparency extremely seriously in my own work, as does everyone in my immediate lab specifically. Not every lab I know of shares quite that same level of rigour, unfortunately.\n\nC) PRIYA: My own field faced a serious scandal some years back, as did a closely related discipline around roughly the same period. Both fields have since implemented considerably stricter oversight as a direct result.\n\nD) SAM: I genuinely worry about publication pressure in my own field specifically, as do most of my junior colleagues I regularly talk to. It creates real, ongoing incentives to cut ethical corners that concern me.\n",
        q: [
          mc("Who says their field values replication highly, as do funding bodies?", ["A", "B", "C", "D"], 0, "Nadia: 'My field values replication highly now, as do most major funding bodies'."),
          mc("Who takes data transparency seriously, as does their whole lab?", ["A", "B", "C", "D"], 1, "Tom: 'I take data transparency extremely seriously in my own work, as does everyone in my immediate lab'."),
          mc("Whose field faced a scandal, as did a related discipline?", ["A", "B", "C", "D"], 2, "Priya: 'My own field faced a serious scandal some years back, as did a closely related discipline'."),
          mc("Who worries about publication pressure, as do junior colleagues?", ["A", "B", "C", "D"], 3, "Sam: 'I genuinely worry about publication pressure in my own field… as do most of my junior colleagues'."),
          mc("Who says not every lab shares the same level of rigour?", ["A", "B", "C", "D"], 1, "Tom: 'Not every lab I know of shares quite that same level of rigour'."),
          mc("Who mentions this is a recent, welcome shift for their field?", ["A", "B", "C", "D"], 0, "Nadia: 'That wasn't always true, honestly — it's a genuinely recent, welcome shift'."),
          mc("Who mentions both fields implementing stricter oversight afterward?", ["A", "B", "C", "D"], 2, "Priya: 'Both fields have since implemented considerably stricter oversight as a direct result'."),
          mc("Who mentions incentives to cut ethical corners?", ["A", "B", "C", "D"], 3, "Sam: 'It creates real, ongoing incentives to cut ethical corners'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la ética de la investigación y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Research misconduct is ultimately a matter of individual ethical failure. Institutions should focus primarily on identifying and severely punishing individual wrongdoers, sending a clear deterrent signal to the wider research community.'\n\nTEXTO 2: 'Focusing narrowly on individual punishment ignores the structural incentives — publication pressure, precarious career paths — that predictably produce misconduct. Genuine reform requires addressing these systemic factors, not merely punishing individuals after the fact.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura de sustitución con 'as' + auxiliar invertido. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista académica: 'Why whistleblowing in science deserves better protection' — argumenta tu postura.\n· CARTA/EMAIL formal a una universidad proponiendo mejoras concretas a su política de integridad investigadora.\n· REPORT sobre cómo la presión por publicar afecta la calidad de la investigación en tu campo: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha una conversación entre dos investigadoras sobre un caso de mala conducta científica (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two researchers about a research misconduct case. Woman: She discovered her advisor had been selectively omitting data that contradicted his own findings. Man: That must have been an incredibly difficult position to be in, professionally. Woman: She valued her own integrity highly, as did most of her fellow graduate students in that department. Man: So what did she actually do about it, in the end? Woman: She reported it through the formal research integrity process, after documenting everything carefully over several months. Man: And the investigation confirmed her suspicions, I take it? Woman: It did, yes. His research was formally retracted, and several other researchers faced disruption too, as did some graduate students who'd relied on his work. Man: What ultimately convinced her to come forward, do you know? Woman: She realised her silence would perpetuate real harm to others, as would inaction from anyone else who knew.", [
      mc("1. What had the advisor been doing?", ["Nothing improper.", "Selectively omitting contradictory data.", "Publishing too little.", "Ignoring his students."], 1, "'She discovered her advisor had been selectively omitting data that contradicted his own findings'."),
      mc("2. Who else valued integrity highly, according to the woman?", ["Nobody else.", "Most of her fellow graduate students.", "Only the advisor.", "The whole university administration."], 1, "'She valued her own integrity highly, as did most of her fellow graduate students'."),
      mc("3. What did she do about the misconduct?", ["Nothing.", "Reported it through the formal research integrity process.", "Confronted her advisor publicly.", "Left the university immediately."], 1, "'She reported it through the formal research integrity process'."),
      mc("4. What was the outcome of the investigation?", ["Nothing changed.", "His research was formally retracted, with wider disruption.", "The advisor was promoted.", "The case was dismissed."], 1, "'His research was formally retracted, and several other researchers faced disruption too'."),
      mc("5. What ultimately convinced her to come forward?", ["Financial reward.", "Realising her silence would perpetuate harm to others.", "A direct order from the university.", "Public pressure."], 1, "'She realised her silence would perpetuate real harm to others'."),
    ]),

    ...speakingParts({ p1: "qué opinas sobre la presión de publicar constantemente en el mundo académico", p2: "dos imágenes de la ética de la investigación (una investigadora revisando cuidadosamente sus datos y un comité de ética deliberando en una reunión): comentadlas y decidid cuál representa mejor cómo se garantiza la integridad científica", p3: "qué debería priorizarse para prevenir la mala conducta científica (formación ética obligatoria, protección real para los denunciantes, reducir la presión de publicar, auditorías independientes, sanciones más severas): comentadlo y decidid lo más eficaz", p4: "la ética de la investigación: si la responsabilidad de la mala conducta científica es principalmente individual o sistémica, qué protección merecen los denunciantes dentro de las instituciones, y si la presión por publicar está dañando la calidad de la ciencia actual" }),

    SUMMARY("Resumen del Día 13", [
      "Sustitución con 'as' + auxiliar invertido (as does/did/has + sujeto) para evitar repetir una acción/estado ya mencionado, aplicado a un sujeto distinto.",
      "Vocabulario de la ética de la investigación científica. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 14", "Escribe 3 frases con 'as does/did/has' + sujeto. Repasa el vocabulario de ética de la investigación. Mañana: simulacro cronometrado combinando toda la gramática de la semana."),
  ],
};

// ───────────────────────── DÍA 14 ─────────────────────────
const DAY14 = {
  title: "Día 14 — Simulacro cronometrado combinado · La inteligencia artificial y la ética de la tecnología",
  description: "Práctica cronometrada combinando la elipsis comparativa/gapping, las cláusulas nominales con extraposición, y la sustitución con 'as' + auxiliar invertido en los mismos textos. Vocabulario de la inteligencia artificial y la ética tecnológica. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los recursos de elipsis, sustitución y extraposición de la semana.",
    summary: "Simulacro cronometrado: elipsis + extraposición + sustitución combinadas; inteligencia artificial y ética tecnológica; Use of English P1–P7, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué recurso de la semana sigue costándote más reconocer bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 14 — SIMULACRO CRONOMETRADO. Hoy combinas los tres recursos de la semana: elipsis comparativa/gapping, cláusulas nominales con extraposición, y sustitución con 'as' + auxiliar invertido. Vocabulario: la INTELIGENCIA ARTIFICIAL y la ÉTICA TECNOLÓGICA. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 3", `1) ELIPSIS COMPARATIVA/GAPPING: The system performs better than it used to. / Some researchers welcomed the finding; others, considerably less so.
2) CLÁUSULAS NOMINALES CON EXTRAPOSICIÓN: It remains unclear whether the algorithm's decisions can be fully explained. / It is widely held that regulation has failed to keep pace with the technology.
3) SUSTITUCIÓN CON 'AS' + AUXILIAR INVERTIDO: The company values transparency, as does its main competitor. / Regulators raised concerns, as did several independent researchers.
Combínalos con naturalidad — uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S3, Días 11-13)", "Elige la opción correcta.", [
      mc("The system performs considerably better than it ___ to.", ["used", "uses", "was used"], 0, "elipsis comparativa: than it used to (perform)."),
      mc("Some researchers welcomed the finding; others, considerably ___ so.", ["less", "least", "lesser"], 0, "gapping: others, considerably less so."),
      mc("___ remains unclear whether the algorithm's decisions can be fully explained.", ["It", "This", "That"], 0, "extraposición: It remains unclear whether."),
      mc("It is widely ___ that regulation has failed to keep pace with the technology.", ["held", "hold", "holding"], 0, "it is widely held that."),
      mc("The company values transparency, as ___ its main competitor.", ["does", "do", "is doing"], 0, "as does + sujeto (sustitución)."),
      mc("Regulators raised concerns, as ___ several independent researchers.", ["did", "does", "had"], 0, "as did + sujeto plural (sustitución, pasado)."),
    ]),
    GRAMMAR("Vocabulario del día — La inteligencia artificial y la ética tecnológica (C2)", "Léxico de maestría sobre IA."),
    deck("C2 S3D14 — Inteligencia artificial y ética tecnológica", [
      ["algorithmic bias", "sesgo algorítmico", "Algorithmic bias can perpetuate existing social inequalities.", "sustantivo", "ˌælgəˈrɪðmɪk ˈbaɪəs"],
      ["black box", "caja negra (sistema opaco)", "Many neural networks function as genuine black boxes.", "sustantivo", "blæk bɒks"],
      ["explainability", "explicabilidad", "Explainability remains a significant technical challenge for deep learning.", "sustantivo", "ɪkˌspleɪnəˈbɪləti"],
      ["autonomous system", "sistema autónomo", "Autonomous systems raise genuinely novel questions of liability.", "sustantivo", "ɔːˈtɒnəməs ˈsɪstəm"],
      ["sentience", "sensibilidad, capacidad de sentir", "Whether machines could ever achieve genuine sentience remains contested.", "sustantivo", "ˈsenʃəns"],
      ["existential risk", "riesgo existencial", "Some researchers warn of genuine existential risk from advanced AI.", "sustantivo", "ˌegzɪˈstenʃl rɪsk"],
      ["accountability gap", "brecha de responsabilidad", "An accountability gap emerges when no clear party bears responsibility.", "sustantivo", "əˌkaʊntəˈbɪləti gæp"],
      ["displacement", "desplazamiento (laboral)", "Automation-driven job displacement concerns many economists.", "sustantivo", "dɪsˈpleɪsmənt"],
      ["surveillance capitalism", "capitalismo de vigilancia", "Surveillance capitalism monetises personal data at unprecedented scale.", "sustantivo", "səˈveɪləns ˈkæpɪtəlɪzəm"],
      ["safeguard", "salvaguarda, medida de protección", "Robust safeguards remain essential for deploying autonomous systems.", "sustantivo", "ˈseɪfgɑːd"],
    ]),
    vocabEx("Vocabulario — La inteligencia artificial y la ética tecnológica", "Elige la opción correcta.", [
      mc("Systematic unfairness embedded in an automated decision-making system:", ["algorithmic bias", "explainability", "sentience"], 0, "algorithmic bias."),
      mc("A system whose internal decision process cannot be easily understood:", ["black box", "safeguard", "autonomous system"], 0, "black box."),
      mc("The capacity to make a system's decisions understandable to humans:", ["explainability", "sentience", "displacement"], 0, "explainability."),
      mc("A serious, potentially catastrophic risk to humanity's future:", ["existential risk", "accountability gap", "algorithmic bias"], 0, "existential risk."),
      mc("A situation where no party can be clearly held responsible:", ["accountability gap", "safeguard", "sentience"], 0, "accountability gap."),
      mc("A protective measure against potential harm:", ["safeguard", "displacement", "bias"], 0, "safeguard."),
    ]),

    ...uoe({
      p1: {
        title: "The black box problem",
        text: "Modern machine learning systems, particularly deep neural networks, increasingly make decisions through processes that even their own original designers struggle to fully (1)___, a phenomenon widely known as the 'black box' problem. It remains genuinely unclear (2)___ this fundamental opacity can ever be fully resolved through purely technical means alone, or whether it represents an inherent, unavoidable trade-off (3)___ predictive accuracy and genuine human interpretability. Some researchers prioritise raw performance above (4)___ else, as do many commercial companies deploying these systems at genuine scale; others, considerably more cautious, insist explainability must remain (5)___ prerequisite for deployment in any genuinely high-stakes context. It is widely (6)___, among ethicists studying this question specifically, that decisions carrying serious real-world consequences — medical diagnosis, criminal sentencing, loan approval — demand considerably greater interpretability than currently, typically exists.",
        q: [
          mc("(1)", ["comprehend", "grasp", "fathom", "understand"], 3, "'struggle to fully understand'."),
          mc("(2)", ["whether", "that", "if", "how"], 0, "'It remains genuinely unclear whether'."),
          mc("(3)", ["between", "among", "within", "across"], 0, "'a… trade-off between… accuracy and… interpretability'."),
          mc("(4)", ["everything", "anything", "something", "nothing"], 1, "'prioritise raw performance above anything else'."),
          mc("(5)", ["a", "the", "an", "one"], 0, "'explainability must remain a prerequisite'."),
          mc("(6)", ["held", "argued", "believed", "maintained"], 0, "'It is widely held that'."),
        ],
      },
      p2: {
        title: "Who bears responsibility when the algorithm fails",
        text: "As autonomous systems increasingly make decisions that once required direct human judgement, questions of accountability have grown correspondingly (1)___ complex, particularly when an autonomous system's error causes genuine, demonstrable harm to a real person. It remains far from (2)___ precisely who should bear legal and moral responsibility in such cases: the original system designer, the deploying organisation, or (3)___ combination of both, depending on the particular circumstances involved. Legal frameworks in most jurisdictions have struggled to keep (4)___ with this rapidly evolving technological reality, as have the underlying ethical frameworks traditionally used to assign responsibility more broadly across society. Some scholars argue existing legal concepts can be reasonably adapted (5)___ addressing these novel cases adequately; others, rather less optimistic, believe entirely new legal categories may ultimately prove necessary. It has increasingly become (6)___ that this particular accountability gap represents one of the most urgent, unresolved practical challenges facing AI governance today.",
        q: [
          fb("(1)", ["more"], "'grown correspondingly more complex'."),
          fb("(2)", ["clear", "obvious"], "'It remains far from clear/obvious precisely who'."),
          fb("(3)", ["some"], "'or some combination of both'."),
          fb("(4)", ["pace"], "'struggled to keep pace with'."),
          fb("(5)", ["for"], "'can be reasonably adapted for addressing'."),
          fb("(6)", ["clear", "apparent", "evident"], "'It has increasingly become clear/apparent/evident that'."),
        ],
      },
      p3: {
        title: "Automation and the future of work",
        text: "Economists studying automation's likely labour market impact remain genuinely (1)___ regarding its ultimate net effect, with some predicting massive job (2)___ across numerous sectors, and others countering that historical precedent suggests new forms of employment will emerge to (3)___ those lost, much as occurred during previous major technological transitions. Some economies have begun investing (4)___ in retraining programmes specifically designed to help workers transition into emerging, less easily automated roles; other economies, considerably less proactively, having made comparatively (5)___ preparation for this significant, ongoing structural shift. It remains genuinely uncertain (6)___ retraining alone will prove sufficient, given how rapidly the underlying technology itself continues to evolve, potentially outpacing even well-designed retraining efforts before they can meaningfully, fully take effect.",
        items: [
          { root: "divide", accepted: ["divided"], hint: "'remain genuinely divided regarding' → divided." },
          { root: "displace", accepted: ["displacement"], hint: "'massive job displacement' → displacement." },
          { root: "place", accepted: ["replace"], hint: "'emerge to replace those lost' → replace." },
          { root: "significant", accepted: ["significantly"], hint: "'begun investing significantly' → significantly." },
          { root: "little", accepted: ["little"], hint: "'having made comparatively little preparation' (adjetivo, ya en forma base)." },
          { root: "whether", accepted: ["whether"], hint: "'It remains genuinely uncertain whether' (conjunción, no deriva)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la Semana 3",
        items: [
          { s1: "The system performs better now than it used to perform.", key: "USED", s2: "The system performs better now than it ___ to.", accepted: ["used"], explanation: "elipsis comparativa." },
          { s1: "Nobody knows for certain whether the algorithm's decisions can be fully explained.", key: "UNCLEAR", s2: "It remains ___ whether the algorithm's decisions can be fully explained.", accepted: ["unclear"], explanation: "extraposición: it remains unclear whether." },
          { s1: "Many people believe that regulation has failed to keep pace with the technology.", key: "HELD", s2: "It is widely ___ that regulation has failed to keep pace with the technology.", accepted: ["held"], explanation: "it is widely held that." },
          { s1: "The company values transparency, and its main competitor values it too.", key: "DOES", s2: "The company values transparency, as ___ its main competitor.", accepted: ["does"], explanation: "as does (sustitución)." },
          { s1: "Regulators raised concerns, and several independent researchers raised concerns too.", key: "DID", s2: "Regulators raised concerns, as ___ several independent researchers.", accepted: ["did"], explanation: "as did (sustitución, pasado)." },
        ],
      },
      p5: {
        title: "The engineer who couldn't explain her own system",
        text: "A senior machine learning engineer, having spent several years developing an increasingly sophisticated diagnostic system deployed across numerous major hospitals, found herself confronting an uncomfortable question during a routine internal review meeting that she genuinely, professionally struggled to answer satisfactorily.\n\nA colleague had asked, with entirely reasonable professional curiosity rather than any particular hostility, precisely why the system had flagged one specific, particular patient case as high-risk when several superficially similar cases had received no such warning whatsoever. She valued rigorous, honest scientific explanation highly, as did most of her immediate engineering team, yet she found herself genuinely unable to provide anything beyond a frustratingly vague, unsatisfying technical account of the system's actual underlying reasoning process.\n\n\"It was genuinely unsettling,\" she later admitted candidly in a widely read professional retrospective, \"realising that a system I had personally, carefully built now operated in ways I myself could not fully, satisfactorily explain, even to my own immediate colleagues, let alone to an anxious, worried patient directly affected by its specific, particular judgement.\"\n\nIt remains genuinely unclear, within her own specific field more broadly, whether this kind of opacity is simply an unavoidable, inherent cost of achieving genuinely superior predictive performance, or whether it instead reflects insufficient, inadequate investment in explainability research specifically, an area many researchers acknowledge has historically received considerably less funding and attention than raw performance optimisation.\n\nHer own hospital's ethics committee, once formally consulted about the specific case in question, ultimately required considerably more rigorous documentation of the system's known, empirically demonstrated limitations before permitting its continued, ongoing clinical use, as did several partner hospitals independently using broadly similar diagnostic technology from different vendors entirely.\n\n\"What we ultimately learned,\" she reflected, \"was that performance alone, however genuinely impressive in narrow statistical terms, cannot fully substitute for actual interpretability when the stakes involved are this genuinely, undeniably high for real patients.\" Her subsequent, considerably revised work now explicitly prioritises interpretability alongside raw performance, even where doing so requires accepting some genuine, honestly acknowledged reduction in the system's overall predictive accuracy.\n\n\"It is far from obvious,\" she noted in closing her retrospective piece, \"that we've yet found the genuinely right balance between these two competing values. But it seems considerably clearer to me now than it once did that pretending this fundamental, unavoidable tension simply doesn't meaningfully exist helps precisely nobody involved.\"",
        q: [
          mc("What question did the engineer struggle to answer?", ["A funding question.", "Why the system flagged one patient as high-risk when similar cases weren't flagged.", "A question about her salary.", "A question about hospital policy."], 1, "'why the system had flagged one specific… patient case as high-risk when several superficially similar cases had received no such warning'."),
          mc("What did she value highly, as did her team?", ["Fast performance only.", "Rigorous, honest scientific explanation.", "Low costs.", "Minimal documentation."], 1, "'She valued rigorous, honest scientific explanation highly, as did most of her immediate engineering team'."),
          mc("What remains genuinely unclear in her field?", ["Nothing at all.", "Whether opacity is unavoidable or reflects insufficient explainability research.", "How to build diagnostic systems.", "Whether AI should be used in hospitals."], 1, "'whether this kind of opacity is simply an unavoidable… cost… or whether it instead reflects insufficient… investment in explainability research'."),
          mc("What did the ethics committee require?", ["Nothing changed.", "More rigorous documentation of the system's known limitations.", "Immediate shutdown of the system.", "No further action."], 1, "'ultimately required considerably more rigorous documentation of the system's known, empirically demonstrated limitations'."),
          mc("What does her revised work now prioritise?", ["Only raw performance.", "Interpretability alongside performance, even at some accuracy cost.", "Cost reduction alone.", "Faster deployment only."], 1, "'now explicitly prioritises interpretability alongside raw performance, even where doing so requires accepting some… reduction in… accuracy'."),
          mc("What does she conclude about pretending the tension doesn't exist?", ["It's a reasonable approach.", "It helps nobody involved.", "It's the best solution.", "It's unavoidable."], 1, "'pretending this fundamental… tension simply doesn't meaningfully exist helps precisely nobody involved'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Artificial intelligence governance has emerged, over a remarkably short period, as one of the more urgent and genuinely contested areas of contemporary technology policy. (1)___\n\nThe underlying difficulty is not primarily technical, interestingly, though genuine technical challenges certainly exist. (2)___ It is, rather, fundamentally a question of values: what trade-offs between innovation, safety, privacy and fairness should society actually, collectively accept, and who should have genuine authority to decide.\n\nDifferent jurisdictions have adopted notably different regulatory approaches to this same underlying challenge, reflecting genuinely different underlying values and priorities. (3)___ Some prioritise innovation and rapid deployment; others, considerably more caution and precaution.\n\nNeither extreme approach is obviously, straightforwardly correct in every case. (4)___ Excessive caution risks squandering genuine benefits and ceding meaningful competitive advantage to less cautious jurisdictions; excessive permissiveness risks real, sometimes serious harm before adequate safeguards can be properly developed and implemented.\n\nWhat further complicates this already genuinely difficult picture is the technology's own inherently global, borderless nature. (5)___ A system developed in one specific jurisdiction routinely, easily operates across many others, straining regulatory frameworks designed around traditional national boundaries that no longer neatly, cleanly apply.\n\nIt remains an open, genuinely unresolved question whether meaningful international coordination on AI governance is realistically achievable at all, given how much genuine economic and strategic advantage individual nations perceive themselves as having in this specific technological domain. (6)___ What seems reasonably clear, regardless, is that purely national, uncoordinated approaches alone are unlikely to prove fully adequate to a genuinely global technological challenge.",
        options: [
          "That urgency, in this instance, is not remotely manufactured.",  // A -> gap1
          "The harder problem sits somewhere else entirely.",  // B -> gap2
          "That divergence carries real, practical consequences.", // C -> gap3
          "Each path carries genuine, distinct costs of its own.", // D -> gap4
          "Borders, in other words, were never really built for this.", // E -> gap5
          "The incentives here pull in genuinely different directions.", // F -> gap6
          "No jurisdiction has ever attempted to regulate this technology.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa urgencia no está en absoluto fabricada."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el problema más difícil está en otro lugar."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa divergencia tiene consecuencias prácticas reales."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada camino tiene sus propios costes genuinos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: las fronteras nunca se diseñaron para esto."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: los incentivos tiran en direcciones distintas."),
        ],
      },
      p7: {
        title: "Four people discuss their own attitude towards AI in their work",
        text: "Read what four people say about their own personal attitude towards using AI tools in their professional work.\n\nA) NADIA: I value transparency about AI use highly in my own work, as does everyone on my immediate team. It remains unclear to me, though, whether current disclosure norms are actually adequate for genuine, meaningful transparency.\n\nB) TOM: My field has embraced AI tools enthusiastically, as has almost every closely related field I'm aware of. That said, it's far from obvious to me that we've fully, properly grappled with all the genuine implications yet.\n\nC) PRIYA: I use these tools considerably more cautiously than I used to, honestly, having personally witnessed several genuinely concerning failures firsthand in my own direct work.\n\nD) SAM: It is widely held in my particular industry that AI adoption is simply inevitable at this point. I'm considerably less certain myself that inevitability alone justifies uncritical, unquestioning enthusiasm about it.\n",
        q: [
          mc("Who values transparency about AI use, as does their team?", ["A", "B", "C", "D"], 0, "Nadia: 'I value transparency about AI use highly in my own work, as does everyone on my immediate team'."),
          mc("Whose field has embraced AI enthusiastically, as has a related field?", ["A", "B", "C", "D"], 1, "Tom: 'My field has embraced AI tools enthusiastically, as has almost every closely related field'."),
          mc("Who uses AI tools more cautiously than they used to?", ["A", "B", "C", "D"], 2, "Priya: 'I use these tools considerably more cautiously than I used to'."),
          mc("Who questions whether inevitability alone justifies uncritical enthusiasm?", ["A", "B", "C", "D"], 3, "Sam: 'I'm considerably less certain myself that inevitability alone justifies uncritical… enthusiasm'."),
          mc("Who is unsure whether current disclosure norms are adequate?", ["A", "B", "C", "D"], 0, "Nadia: 'It remains unclear to me… whether current disclosure norms are actually adequate'."),
          mc("Who says it's far from obvious the implications have been fully grappled with?", ["A", "B", "C", "D"], 1, "Tom: 'it's far from obvious to me that we've fully… grappled with all the… implications yet'."),
          mc("Who has personally witnessed concerning failures firsthand?", ["A", "B", "C", "D"], 2, "Priya: 'having personally witnessed several genuinely concerning failures firsthand'."),
          mc("Who mentions it is widely held that adoption is inevitable in their industry?", ["A", "B", "C", "D"], 3, "Sam: 'It is widely held in my particular industry that AI adoption is simply inevitable'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre la inteligencia artificial y escribe un ENSAYO (240–280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'AI systems making high-stakes decisions — medical, legal, financial — must be genuinely explainable to the humans affected by them. Deploying opaque black-box systems in such contexts is fundamentally irresponsible, regardless of their statistical performance.'\n\nTEXTO 2: 'Demanding full explainability sometimes means sacrificing genuinely superior performance, potentially at real human cost. In some high-stakes contexts, a highly accurate but less interpretable system may ultimately save more lives than a fully explainable but less accurate alternative.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS recursos de la Semana 3 (elipsis/gapping, extraposición, o sustitución con 'as'). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'Should AI decision-making always be explainable?' — argumenta tu postura con ejemplos.\n· CARTA/EMAIL formal a un organismo regulador proponiendo medidas concretas de gobernanza de la IA.\n· REPORT sobre el impacto de la automatización en el mercado laboral de tu sector: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco profesionales de la tecnología hablando de su experiencia con la IA (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué preocupación mencionan?): A explainability · B job displacement · C algorithmic bias · D accountability gaps · E existential risk · F data privacy · G regulatory lag · H nothing in particular. TAREA DOS (¿qué solución proponen?): A better documentation · B retraining programmes · C independent audits · D new legal frameworks · E international coordination · F more diverse teams · G nothing specific yet · H stronger encryption.", "This is Part Four. You will hear five technology professionals talking about their experience with AI. Speaker One: My biggest concern is explainability, honestly — systems making decisions nobody can fully account for afterward. We're pushing hard now for much better documentation of exactly how these systems actually reach their conclusions. Speaker Two: Job displacement worries me considerably more than most other issues in this space. What we really need is serious investment in retraining programmes, launched well before the disruption actually, fully hits workers directly. Speaker Three: Algorithmic bias is what keeps me up at night, if I'm honest. Building genuinely more diverse development teams has proven the single most effective thing we've found so far for catching bias early, before deployment. Speaker Four: Accountability gaps are the real issue in my own view — nobody's entirely sure who's actually responsible when these systems fail badly. We urgently need new legal frameworks specifically designed to properly address this. Speaker Five: Regulatory lag concerns me most, personally. The technology moves so much faster than regulation currently can. Real international coordination seems essential, though genuinely difficult to achieve in practice.", [
      mc("Speaker 1 — TAREA UNO (preocupación)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: explainability."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: job displacement."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: algorithmic bias."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: accountability gaps."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: regulatory lag."),
      mc("Speaker 1 — TAREA DOS (solución)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: better documentation."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: retraining programmes."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: more diverse teams."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: new legal frameworks."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: international coordination."),
    ]),

    ...speakingParts({ p1: "cómo usas la inteligencia artificial en tu vida diaria o en tu trabajo, si es que la usas", p2: "dos imágenes de la inteligencia artificial (un robot médico asistiendo en una operación y una persona programando código en un ordenador): comentadlas y decidid cuál representa mejor el futuro de la IA en la sociedad", p3: "qué debería priorizarse en la regulación de la inteligencia artificial (la explicabilidad, la privacidad de datos, la prevención de sesgos, la responsabilidad legal clara, la coordinación internacional): comentadlo y decidid lo más urgente", p4: "la inteligencia artificial y la ética tecnológica: si los sistemas de IA deberían ser siempre explicables aunque sacrifiquen rendimiento, qué responsabilidad tienen las empresas tecnológicas frente a los gobiernos, y si el riesgo existencial de la IA avanzada es una preocupación genuina o exagerada" }),

    SUMMARY("Resumen del Día 14 — Simulacro cronometrado", [
      "Practicados de forma combinada: elipsis comparativa/gapping, cláusulas nominales con extraposición, y sustitución con 'as' + auxiliar invertido.",
      "Vocabulario de la inteligencia artificial y la ética tecnológica. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 15", "Repasa los tres recursos de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 3."),
  ],
};

// ───────────────────────── DÍA 15 ─────────────────────────
const DAY15 = {
  title: "Día 15 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de la elipsis comparativa/gapping, las cláusulas nominales con extraposición, y la sustitución con 'as' + auxiliar invertido, con el vocabulario de ciencia, filosofía, ética de la investigación e IA. Las 4 destrezas (formato C2); Listening P4. Al final, el mini-simulacro de la Semana 3.",
  pedagogy: {
    objective: "Consolidar todos los recursos de elipsis, sustitución y extraposición de la semana antes de la Semana 4.",
    summary: "Repaso de elipsis/extraposición/sustitución; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de la semana usarías con más confianza en tu propio Writing?", "Repásalos antes de la Semana 4 (estilo indirecto con verbos de matiz fino y discurso indirecto libre)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 3 del C2. Consolidas la ELIPSIS COMPARATIVA/GAPPING, las CLÁUSULAS NOMINALES CON EXTRAPOSICIÓN, y la SUSTITUCIÓN CON 'AS' + AUXILIAR INVERTIDO. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 3", `1) ELIPSIS COMPARATIVA: than [sujeto] + auxiliar (than she used to, than he did). GAPPING: others, [complemento] (sin repetir el verbo).
2) CLÁUSULAS NOMINALES CON EXTRAPOSICIÓN: It is widely held/believed/argued THAT…; It remains unclear/uncertain/debatable WHETHER…; It is far from obvious THAT…
3) SUSTITUCIÓN CON 'AS' + AUXILIAR INVERTIDO: as does/did/has + sujeto (sustituye una acción/estado ya mencionado, aplicado a un sujeto distinto).
Todos son de registro MUY denso/académico — perfectos para el Writing P1 (integración de fuentes) y muy frecuentes en el Reading P5-P7; úsalos con naturalidad, sin forzarlos en cada frase.`),
    grammarEx("Use of English — Repaso mixto de la Semana 3", "Completa o elige.", [
      mc("She works harder now than she ___ to.", ["used", "uses", "was used"], 0, "elipsis comparativa."),
      mc("Some favoured the proposal; others, ___ alternative.", ["the", "favoured the", "they favoured"], 0, "gapping."),
      fb("___ remains unclear whether the algorithm can be fully explained. (extraposición)", ["It"], "it + remains unclear + whether."),
      mc("It is widely ___ that regulation has failed to keep pace.", ["held", "hold", "holding"], 0, "it is widely held that."),
      mc("She values integrity highly, as ___ her whole team.", ["does", "do", "is doing"], 0, "as does + sujeto (sustitución)."),
      mc("The study found a strong effect, as ___ the replication.", ["did", "does", "had"], 0, "as did (sustitución, pasado)."),
      mc("It remains uncertain ___ consciousness can be explained physically.", ["whether", "that", "if"], 0, "it remains uncertain whether."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 3", "Repasa los mazos (método científico, epistemología, ética de la investigación, IA)."),
    vocabEx("Vocabulario — Repaso de la Semana 3", "Elige la opción correcta.", [
      mc("Based on observation and experiment rather than pure theory:", ["empirical", "falsifiable", "corroborating"], 0, "empirical."),
      mc("The philosophical study of knowledge itself:", ["epistemology", "empiricism", "scepticism"], 0, "epistemology."),
      mc("Honest, rigorous conduct in research practice:", ["research integrity", "conflict of interest", "plagiarism"], 0, "research integrity."),
      mc("A system whose internal decision process cannot be easily understood:", ["black box", "safeguard", "autonomous system"], 0, "black box."),
      mc("Capable of being proven false, in principle:", ["falsifiable", "empirical", "rigorous"], 0, "falsifiable."),
      mc("Independent of experience (known through reason alone):", ["a priori", "empirical", "inferred"], 0, "a priori."),
      mc("Inventing data that was never actually collected:", ["data fabrication", "informed consent", "peer review"], 0, "data fabrication."),
      mc("Systematic unfairness embedded in an automated decision-making system:", ["algorithmic bias", "explainability", "sentience"], 0, "algorithmic bias."),
    ]),

    ...uoe({
      p1: {
        title: "Three weeks into C2",
        text: "Reaching the end of the third full week of C2 preparation (1)___ a natural point for reflecting on the considerable cumulative ground already, genuinely covered. It is widely (2)___, among learners at this advanced stage, that the material grows progressively denser each week, as (3)___ the corresponding sense of genuine, hard-won accomplishment upon actually mastering it. What these three weeks (4)___ was build an entire arsenal of formal structures — conditional alternatives, expanded inversion, sophisticated elipsis and extraposition — that together constitute much of what genuinely, functionally distinguishes advanced academic register from merely competent everyday English. It remains far from (5)___, at this comparatively early stage, that every single structure covered will feel completely natural; such complete, effortless naturalness typically requires sustained practice considerably (6)___ than three weeks alone can realistically, honestly provide.",
        q: [
          mc("(1)", ["offers", "marks", "provides", "presents"], 0, "'offers a natural point for reflecting'."),
          mc("(2)", ["acknowledged", "recognised", "accepted", "held"], 3, "'It is widely held… that'."),
          mc("(3)", ["does", "do", "did", "has"], 0, "as does + sujeto (sustitución, presente)."),
          mc("(4)", ["did", "done", "does", "doing"], 0, "'What these three weeks did was build' (pseudo-cleft)."),
          mc("(5)", ["obvious", "clear", "certain", "likely"], 1, "'It remains far from clear that'."),
          mc("(6)", ["longer", "more", "greater", "further"], 0, "'considerably longer than three weeks'."),
        ],
      },
      p2: {
        title: "Density as a destination, not a detour",
        text: "What distinguishes this particular week's material from earlier, comparatively more accessible weeks is not primarily its underlying difficulty in any absolute sense, but rather its sheer (1)___ — the sheer density of meaning these structures allow a skilled writer to compress into remarkably (2)___ words. This density explains why native academic writers rely (3)___ heavily on these particular structures: they permit genuinely sophisticated, nuanced argumentation without unnecessary, wasteful verbosity. Learners who master this particular register, as (4)___ professional academic writers themselves, gain access to a considerably more efficient, more precise form of written expression than less formal registers typically (5)___. It is worth remembering, at this specific stage, that density without genuine clarity ultimately serves nobody; the goal remains compressed MEANING, not merely compressed, needlessly obscure language for its (6)___ sake.",
        q: [
          fb("(1)", ["density", "compression"], "'its sheer density/compression'."),
          fb("(2)", ["few"], "'compress into remarkably few words'."),
          fb("(3)", ["so"], "'rely so heavily on these… structures'."),
          fb("(4)", ["do"], "as do + sujeto plural (sustitución)."),
          fb("(5)", ["allow", "permit"], "'less formal registers typically allow/permit'."),
          fb("(6)", ["own"], "'for its own sake'."),
        ],
      },
      p3: {
        title: "What comes after density",
        text: "Having now covered the densest, most (1)___-specific structures the C2 course actually offers, learners approach the coming weeks from a position of considerably greater underlying (2)___ than they possessed at the course's very outset. Week Four extends this same (3)___ foundation into precise reported speech and narrative technique — skills that depend, in important ways, on the (4)___ command of formal structure these first three weeks have deliberately, systematically built. This progressive (5)___ is not accidental; the course's overall design deliberately sequences material so that earlier weeks' hard-won competence directly (6)___ later weeks' more specialised, more nuanced demands.",
        items: [
          { root: "regist", accepted: ["register"], hint: "'the densest, most register-specific structures' → register." },
          { root: "compete", accepted: ["competence"], hint: "'considerably greater underlying competence' → competence." },
          { root: "solid", accepted: ["solid"], hint: "'this same solid foundation' (adjetivo)." },
          { root: "confide", accepted: ["confident"], hint: "'the confident command of formal structure' → confident." },
          { root: "sequence", accepted: ["sequencing"], hint: "'This progressive sequencing' → sequencing." },
          { root: "support", accepted: ["supports"], hint: "'directly supports later weeks' demands' → supports." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 3",
        items: [
          { s1: "The system performs better now than it used to perform.", key: "USED", s2: "The system performs better now than it ___ to.", accepted: ["used"], explanation: "elipsis comparativa." },
          { s1: "Some researchers favoured the original hypothesis; others favoured the alternative.", key: "OTHERS", s2: "Some researchers favoured the original hypothesis; ___, the alternative.", accepted: ["others"], explanation: "gapping." },
          { s1: "Nobody knows for certain whether the theory is ultimately correct.", key: "UNCLEAR", s2: "It remains ___ whether the theory is ultimately correct.", accepted: ["unclear"], explanation: "extraposición." },
          { s1: "She values academic integrity highly, and her team values it too.", key: "DOES", s2: "She values academic integrity highly, as ___ her team.", accepted: ["does"], explanation: "as does (sustitución)." },
          { s1: "The committee recommended stronger oversight, and the panel recommended it too.", key: "DID", s2: "The committee recommended stronger oversight, as ___ the panel.", accepted: ["did"], explanation: "as did (sustitución, pasado)." },
          { s1: "Many people believe that regulation has failed to keep pace.", key: "HELD", s2: "It is widely ___ that regulation has failed to keep pace.", accepted: ["held"], explanation: "it is widely held that." },
        ],
      },
      p5: {
        title: "The student who mapped her own density",
        text: "A C2 candidate, roughly midway through her own sustained preparation, decided to conduct a rather unusual personal experiment: systematically rewriting several of her own earlier, less formal essays using the specific dense structures covered across these first three challenging weeks, then carefully comparing word counts between the original and considerably more compressed versions.\n\nWhat she discovered surprised her considerably more than she had originally, perhaps naively anticipated. Sentences that had previously required twenty-five or thirty words to express a single, complete idea could, using elipsis, extraposition and formal substitution together, frequently be compressed into fifteen or eighteen words while losing remarkably little of their original, essential meaning.\n\n\"It was genuinely eye-opening,\" she later explained candidly to a group of fellow candidates preparing for the same demanding exam, \"to see, concretely and numerically, just how much unnecessary verbal padding I had unconsciously been including in my own earlier writing, entirely without ever really noticing it before this particular exercise.\"\n\nHer rewritten essays, once carefully completed, read noticeably differently from her originals — considerably more formal, certainly, but also, she insisted rather firmly, genuinely more precise and more confident in tone, as did several other candidates' rewrites when she later generously shared her specific exercise with them.\n\nIt remains debatable, she readily, honestly acknowledged, whether this particular density represents unambiguous improvement in every single conceivable context; certain informal writing genuinely benefits from a more relaxed, expansive style that dense formal structures would, if applied indiscriminately everywhere, actively undermine rather than enhance.\n\n\"What I ultimately learned,\" she reflected in her own concluding remarks, \"was not that dense structures are simply, straightforwardly better than simpler ones in some absolute sense, but rather that genuine registerawareness — knowing precisely when density serves a text well, and when it doesn't — matters every bit as much as knowing the underlying structures themselves in the first place.\"\n\nHer specific exercise has since been adopted, with her enthusiastic permission, by several other C2 study groups as a genuinely practical, hands-on way of directly, tangibly experiencing just how much these particular structures can meaningfully accomplish once genuinely, comfortably mastered.",
        q: [
          mc("What experiment did the candidate conduct?", ["Nothing unusual.", "Rewriting earlier essays using this week's dense structures and comparing word counts.", "Writing an entirely new essay from scratch.", "Translating her essays into another language."], 1, "'systematically rewriting several of her own earlier… essays using the specific dense structures… then carefully comparing word counts'."),
          mc("What did she discover about her original sentences?", ["They were already maximally compressed.", "They could often be compressed significantly while losing little meaning.", "They couldn't be shortened at all.", "They needed to be longer."], 1, "'Sentences that had previously required twenty-five or thirty words… could… frequently be compressed into fifteen or eighteen words'."),
          mc("How did her rewritten essays read, according to her?", ["Identical to the originals.", "More formal, precise and confident.", "Less clear than before.", "Completely different in meaning."], 1, "'more formal, certainly, but also… genuinely more precise and more confident in tone'."),
          mc("What does she say remains debatable?", ["Nothing at all.", "Whether density represents improvement in every conceivable context.", "Whether the exercise was worthwhile.", "Whether formal English exists."], 1, "'It remains debatable… whether this particular density represents unambiguous improvement in every single conceivable context'."),
          mc("What did she ultimately conclude matters most?", ["Density alone.", "Register-awareness — knowing when density serves a text well.", "Simplicity alone.", "Avoiding formal structures entirely."], 1, "'genuine register-awareness… matters every bit as much as knowing the underlying structures themselves'."),
          mc("What has happened to her exercise since?", ["Nothing.", "It's been adopted by other C2 study groups.", "It was criticised heavily.", "She kept it private."], 1, "'has since been adopted… by several other C2 study groups as a genuinely practical… way'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Three weeks into a demanding, cumulative language course invites a particular, genuinely useful kind of honest stocktaking, somewhat different in character from the stocktaking appropriate at either the course's very beginning or its eventual end. (1)___\n\nThe material covered this particular week — comparative elipsis, nominal clause extraposition, formal substitution with inverted auxiliaries — represents some of the densest, most compressed language the entire course actually offers. (2)___ Density of this specific kind takes real, deliberate practice to wield skilfully rather than merely, superficially recognisably.\n\nWhat distinguishes skilful use of dense structures from merely mechanical, formulaic application is genuine judgement: knowing when compression genuinely serves clarity, and when it instead obscures meaning that plainer, more expansive language would communicate more effectively. (3)___ This particular judgement, unlike the underlying structures themselves, cannot really be taught through explicit rule alone.\n\nIt develops, instead, through the same gradual, cumulative process that has already characterised every other genuine skill built across this demanding course so far. (4)___ Exposure, deliberate practice, and patient, honest reflection on one's own developing sense of when a given structure genuinely helps.\n\nFor learners at exactly this three-week stage, the specific, practical goal is not immediate, effortless mastery of every single structure covered, however appealing that particular goal might understandably, naturally seem. (5)___ It is, rather, building genuine, growing familiarity that continued practice will steadily, reliably deepen over the considerable time still remaining.\n\nNine weeks remain before the course's own final stretch properly begins in earnest. (6)___ What has already been built these first three weeks will continue compounding steadily throughout that considerable remaining time, each subsequent week building directly, deliberately on what has already come genuinely, solidly before it.",
        options: [
          "This particular moment calls for its own kind of honesty.",  // A -> gap1
          "Recognising density is one thing; wielding it well is another.", // B -> gap2
          "That specific judgement develops slowly, not instantly.", // C -> gap3
          "The same basic ingredients that built everything else apply here too.", // D -> gap4
          "That particular goal was never really the realistic one.", // E -> gap5
          "Plenty of runway remains for that compounding to keep happening.", // F -> gap6
          "No learner has ever found comparative ellipsis genuinely difficult.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: este momento pide su propio tipo de honestidad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: reconocer densidad es una cosa; manejarla es otra."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese juicio se desarrolla lentamente, no al instante."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los mismos ingredientes que construyeron todo lo demás aplican aquí."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esa meta nunca fue realmente la realista."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: queda margen de sobra para que ese interés compuesto siga."),
        ],
      },
      p7: {
        title: "Four learners reflect on their third week of C2 study",
        text: "Read what four learners say about their third week of studying for the C2 exam.\n\nA) NADIA: It remains genuinely unclear to me, honestly, whether I'll ever produce these dense structures as naturally as I recognise them while reading. Progress feels real, though, as does my own growing confidence week by week.\n\nB) TOM: What I did this week, mostly, was rewrite some of my own earlier essays using these new structures, as did a friend I'm studying alongside. Seeing the direct comparison really helped me understand the actual value involved.\n\nC) PRIYA: It is widely held, among my own study group at least, that this week's material is genuinely the densest so far in the entire course. I'd honestly, personally agree with that particular assessment completely.\n\nD) SAM: My own confidence has grown steadily this week, as has my genuine appreciation for just how much these structures can actually accomplish once you finally, properly master them.\n",
        q: [
          mc("Who is unsure if they'll produce structures as naturally as they recognise them?", ["A", "B", "C", "D"], 0, "Nadia: 'It remains genuinely unclear to me… whether I'll ever produce these dense structures as naturally as I recognise them'."),
          mc("Who rewrote earlier essays, as did a study friend?", ["A", "B", "C", "D"], 1, "Tom: 'What I did this week… was rewrite some of my own earlier essays… as did a friend I'm studying alongside'."),
          mc("Who agrees this week's material is the densest so far?", ["A", "B", "C", "D"], 2, "Priya: 'It is widely held… that this week's material is genuinely the densest so far… I'd… agree with that'."),
          mc("Whose confidence has grown steadily, as has their appreciation for the structures?", ["A", "B", "C", "D"], 3, "Sam: 'My own confidence has grown steadily this week, as has my genuine appreciation'."),
          mc("Who says progress feels real, as does growing confidence?", ["A", "B", "C", "D"], 0, "Nadia: 'Progress feels real, though, as does my own growing confidence week by week'."),
          mc("Who found seeing a direct comparison helped understand the value involved?", ["A", "B", "C", "D"], 1, "Tom: 'Seeing the direct comparison really helped me understand the actual value involved'."),
          mc("Who mentions their own study group specifically?", ["A", "B", "C", "D"], 2, "Priya: 'among my own study group at least'."),
          mc("Who appreciates how much these structures can accomplish once mastered?", ["A", "B", "C", "D"], 3, "Sam: 'my genuine appreciation for just how much these structures can actually accomplish once you finally… master them'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el aprendizaje avanzado de idiomas y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Mastering dense, compressed structures like ellipsis and extraposition is essential at C2 level — without them, learners simply cannot produce the register academic and professional contexts genuinely demand at this most advanced level.'\n\nTEXTO 2: 'Overemphasis on dense formal structures risks producing writing that is technically impressive but genuinely unclear. Clarity should always take priority over displaying grammatical sophistication for its own sake, regardless of level.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES recursos distintos de la Semana 3. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What three weeks of C2 study has taught me' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre estas primeras tres semanas.\n· REVIEW de un recurso, app o método que te haya ayudado a estudiar inglés a este nivel.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas)", "Escucha a cinco estudiantes de C2 hablando de su tercera semana de estudio (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué encontraron más útil?): A comparing rewritten essays · B authentic reading exposure · C a study partner · D tracking their own progress · E a teacher's feedback · F timed practice · G vocabulary review · H nothing in particular. TAREA DOS (¿qué sigue costándoles?): A producing structures naturally · B remembering vocabulary · C timing themselves · D formal register generally · E listening comprehension · F nothing at this point · G speaking fluently · H writing concisely.", "This is Part Four. You will hear five students talking about their third week of C2 study. Speaker One: Comparing my rewritten essays to the originals was honestly the most useful thing I did all week. What still trips me up, though, is producing these dense structures naturally under real time pressure. Speaker Two: Reading authentic academic texts helped me most this week, seeing these structures used naturally by actual professional writers. I still struggle somewhat with formal register more generally, if I'm honest. Speaker Three: Having a study partner made a genuine difference for me this week specifically. Vocabulary retention is still what I personally find hardest, though, despite that real help. Speaker Four: Tracking my own progress carefully in a log was surprisingly motivating, actually. Writing concisely, though, using fewer words for the same complete idea, remains genuinely difficult for me. Speaker Five: Honestly, nothing in particular stood out as more useful than anything else for me this week. That said, timing myself during practice remains my biggest ongoing challenge specifically.", [
      mc("Speaker 1 — TAREA UNO (más útil)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: comparing rewritten essays."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: authentic reading exposure."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: a study partner."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: tracking their own progress."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: nothing in particular."),
      mc("Speaker 1 — TAREA DOS (les cuesta)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: producing structures naturally."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: formal register generally."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: remembering vocabulary."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: writing concisely."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: timing themselves."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en esta tercera semana que te resulte más útil", p2: "dos imágenes del progreso en el aprendizaje (alguien comparando dos versiones de un mismo texto y una persona practicando en voz alta frente a un espejo): comentadlas y decidid cuál representa mejor cómo se consolida un registro formal nuevo", p3: "qué método es más eficaz para dominar estructuras muy densas y compactas (reescribir textos propios más simples, leer textos académicos auténticos, practicar con un compañero, cronometrar la práctica, llevar un registro del propio progreso): comentadlo y decidid el más eficaz", p4: "la densidad y la claridad en el lenguaje académico: si la escritura muy densa siempre comunica mejor que la escritura más sencilla, cómo se equilibra la sofisticación gramatical con la claridad real, y qué papel tiene la audiencia a la hora de decidir el nivel de formalidad adecuado" }),

    SUMMARY("Resumen de la Semana 3 (C2)", [
      "Dominas la elipsis comparativa y el 'gapping' formal, las cláusulas nominales con extraposición (it is widely held that…, it remains unclear whether…), y la sustitución con 'as' + auxiliar invertido.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes (240-280/280-320) y el Speaking P1–P3 con temas de ciencia, filosofía, ética de la investigación e inteligencia artificial.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: el ESTILO INDIRECTO con verbos de matiz fino y el DISCURSO INDIRECTO LIBRE, con la literatura y la narrativa.",
    ]),
    INFO("Mini-simulacro de la Semana 3", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 4."),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "La elipsis y sustitución muy avanzada, y las cláusulas nominales · La ciencia y la filosofía",
  description: "Elipsis comparativa y 'gapping' formal, sustitución avanzada (the same is true of, as does/did/has + inversión), y cláusulas nominales con extraposición, con el hilo de la ciencia, la filosofía, la ética de la investigación y la inteligencia artificial. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
