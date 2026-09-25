/**
 * C2 Proficiency · Semana 5 — "Los conectores de registro muy formal y literario · El derecho y la gobernanza".
 * Gramática: conectores característicos del registro jurídico/institucional
 * más elevado (notwithstanding, insofar as, by the same token, whereby,
 * with respect to, to the extent that) — el vocabulario funcional que
 * distingue el inglés legal/gubernamental del inglés académico general.
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

// ───────────────────────── DÍA 21 ─────────────────────────
const DAY21 = {
  title: "Día 21 — 'Notwithstanding' e 'insofar as' · El derecho constitucional y los sistemas jurídicos",
  description: "Conectores de registro jurídico/institucional: 'notwithstanding' (pese a, no obstante) e 'insofar as' (en la medida en que). Vocabulario del derecho constitucional. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar 'notwithstanding' e 'insofar as', conectores característicos del registro legal/institucional más formal.",
    summary: "Notwithstanding + insofar as; derecho constitucional y sistemas jurídicos; Use of English P1–P7, Writing, Listening P1, Speaking P1–P3.",
    commonMistakes: ["usar 'notwithstanding' como conjunción con 'that' cuando en realidad funciona como preposición (+ sustantivo/gerundio) o puede ir POSPUESTO tras el sustantivo.", "confundir 'insofar as' (en la medida en que, con matiz de limitación) con 'as far as' (en lo que respecta a, más neutro).", "olvidar que 'notwithstanding' puede colocarse ANTES o DESPUÉS del sustantivo al que modifica, un rasgo único de este conector."],
    reviewPrompts: ["¿Cómo usarías 'notwithstanding' para decir 'a pesar de las objeciones'?", "¿Cuál es la diferencia de matiz entre 'insofar as' y 'as far as'?"],
  },
  items: [
    TEXT("🎓 Semana 5 del C2. Hoy: 'NOTWITHSTANDING' e 'INSOFAR AS' — dos conectores del registro jurídico/institucional más elevado, extremadamente frecuentes en textos legales, informes gubernamentales y ensayo académico formal. Vocabulario: el DERECHO CONSTITUCIONAL y los SISTEMAS JURÍDICOS."),
    GRAMMAR("'Notwithstanding' e 'insofar as'", `NOTWITHSTANDING (pese a, no obstante) — funciona como PREPOSICIÓN, y de forma única puede ir ANTES o DESPUÉS del sustantivo:
· Notwithstanding these objections, the bill was passed. (antepuesto, más común)
· These objections notwithstanding, the bill was passed. (pospuesto, registro aún más formal/legal)
· The court ruled in her favour, notwithstanding the defendant's strong objections.
También funciona como CONJUNCIÓN + cláusula, con "the fact that": Notwithstanding the fact that the evidence was circumstantial, the jury reached a unanimous verdict.
⚠️ NO se usa "notwithstanding that" solo (sin "the fact") en registro formal estándar — o bien + sustantivo/gerundio, o bien + "the fact that" + cláusula.
INSOFAR AS (en la medida en que, con matiz de LIMITACIÓN — "solo hasta el punto en que"):
· The policy is effective insofar as it addresses the immediate problem, though it fails to tackle root causes. (limita el alcance de la afirmación)
· Insofar as the law applies to this specific case, the court has clear jurisdiction.
Diferencia con "as far as": "as far as" es más neutro/general (en lo que respecta a); "insofar as" tiene un matiz más preciso de LÍMITE o CONDICIÓN de aplicabilidad — típico del lenguaje legal y académico riguroso.
Ambos conectores son extremadamente frecuentes en textos legales, informes institucionales y el Reading P5-P7 de C2 — dominarlos es señal inequívoca de registro genuinamente avanzado.`),
    WARN("Errores típicos en C2", "· 'Notwithstanding' + sustantivo/gerundio (antes O después) o + 'the fact that' + cláusula — nunca 'notwithstanding that' solo.\n· 'Insofar as' señala un LÍMITE de aplicabilidad, no es simplemente 'because' o 'since' — verifica que el matiz de limitación encaja.\n· No confundas con 'nonetheless'/'nevertheless' (adverbios de contraste general) — 'notwithstanding' es más específicamente legal/formal y funciona de forma distinta sintácticamente.\n· En el registro más formal, la posposición ('these objections notwithstanding') suena aún más legal/institucional que la anteposición."),
    grammarEx("Use of English — Notwithstanding e insofar as", "Elige o completa con la estructura correcta.", [
      mc("___ these objections, the bill was passed by a narrow majority.", ["Notwithstanding", "Insofar as", "Provided that"], 0, "notwithstanding (pese a) + sustantivo antepuesto."),
      mc("These objections ___, the bill was passed by a narrow majority. (pospuesto)", ["notwithstanding", "insofar as", "provided"], 0, "notwithstanding pospuesto (registro muy formal)."),
      mc("The policy is effective ___ it addresses the immediate problem, though it fails to tackle root causes.", ["insofar as", "notwithstanding", "provided that"], 0, "insofar as (limita el alcance de la afirmación)."),
      mc("Notwithstanding ___ the evidence was circumstantial, the jury reached a unanimous verdict.", ["the fact that", "that", "of"], 0, "notwithstanding + the fact that + cláusula."),
      mc("___ the law applies to this specific case, the court has clear jurisdiction.", ["Insofar as", "Notwithstanding", "Provided"], 0, "insofar as (en la medida en que)."),
      mc("The court ruled in her favour, ___ the defendant's strong objections.", ["notwithstanding", "insofar as", "in that"], 0, "notwithstanding (pese a) pospuesto tras la cláusula principal."),
    ]),
    GRAMMAR("Vocabulario del día — El derecho constitucional y los sistemas jurídicos (C2)", "Léxico de maestría sobre derecho constitucional."),
    deck("C2 S5D21 — Derecho constitucional y sistemas jurídicos", [
      ["jurisdiction", "jurisdicción", "The court lacked jurisdiction to hear the case.", "sustantivo", "ˌdʒʊərɪsˈdɪkʃn"],
      ["judicial review", "control judicial (de constitucionalidad)", "Judicial review allows courts to strike down unconstitutional laws.", "sustantivo", "dʒuːˈdɪʃl rɪˈvjuː"],
      ["separation of powers", "separación de poderes", "Separation of powers prevents any single branch from dominating.", "sustantivo", "ˌsepəˈreɪʃn əv ˈpaʊəz"],
      ["precedent", "precedente (jurídico)", "The ruling set an important legal precedent for future cases.", "sustantivo", "ˈpresɪdənt"],
      ["statute", "estatuto, ley (escrita)", "The statute explicitly prohibits this specific practice.", "sustantivo", "ˈstætʃuːt"],
      ["due process", "debido proceso", "Due process guarantees fair treatment under the law.", "sustantivo", "djuː ˈprəʊses"],
      ["constitutionality", "constitucionalidad", "The court examined the law's constitutionality carefully.", "sustantivo", "ˌkɒnstɪˌtjuːʃəˈnæləti"],
      ["litigation", "litigio, proceso judicial", "Prolonged litigation delayed the policy's implementation significantly.", "sustantivo", "ˌlɪtɪˈgeɪʃn"],
      ["jurisprudence", "jurisprudencia", "This body of jurisprudence shapes how future cases are decided.", "sustantivo", "ˌdʒʊərɪsˈpruːdəns"],
      ["ultra vires", "ultra vires (más allá de la competencia legal)", "The regulation was struck down as ultra vires.", "expresión", "ˌʌltrə ˈvaɪriːz"],
    ]),
    vocabEx("Vocabulario — El derecho constitucional y los sistemas jurídicos", "Elige la opción correcta.", [
      mc("The official authority to hear and decide legal cases:", ["jurisdiction", "precedent", "statute"], 0, "jurisdiction."),
      mc("The process by which courts assess a law's constitutionality:", ["judicial review", "litigation", "due process"], 0, "judicial review."),
      mc("A previous ruling that guides future similar cases:", ["precedent", "statute", "jurisdiction"], 0, "precedent."),
      mc("Fair legal treatment guaranteed to every individual:", ["due process", "precedent", "jurisdiction"], 0, "due process."),
      mc("A formally written and enacted law:", ["statute", "precedent", "jurisprudence"], 0, "statute."),
      mc("The body of court decisions that shapes legal interpretation:", ["jurisprudence", "statute", "due process"], 0, "jurisprudence."),
    ]),

    ...uoe({
      p1: {
        title: "The court that checked itself",
        text: "Judicial review, as a constitutional mechanism, allows courts to (1)___ laws passed by democratically elected legislatures, striking down those found to (2)___ with a country's foundational constitutional principles. Notwithstanding considerable ongoing debate (3)___ how much power unelected judges should legitimately wield over decisions made by elected representatives, most constitutional democracies have concluded that some mechanism for judicial oversight remains genuinely essential to preventing legislative (4)___. Insofar as judicial review protects fundamental rights from erosion by transient political majorities, it serves a genuinely valuable democratic function; insofar as it allows unelected judges to override considered legislative judgement, it raises legitimate concerns about democratic (5)___. This tension has never been fully, definitively (6)___, and continues to shape ongoing constitutional debate in democracies worldwide.",
        q: [
          mc("(1)", ["strike down", "overturn", "invalidate", "review"], 3, "'allows courts to review laws'."),
          mc("(2)", ["conflict", "clash", "collide", "contradict"], 0, "'found to conflict with… principles'."),
          mc("(3)", ["over", "about", "regarding", "concerning"], 1, "'debate about how much power'."),
          mc("(4)", ["overreach", "excess", "abuse", "misuse"], 0, "'preventing legislative overreach'."),
          mc("(5)", ["legitimacy", "authority", "validity", "credibility"], 0, "'concerns about democratic legitimacy'."),
          mc("(6)", ["resolved", "settled", "concluded", "decided"], 1, "'never been fully… settled'."),
        ],
      },
      p2: {
        title: "Separation of powers under strain",
        text: "The principle of separation of powers, notwithstanding its considerable theoretical elegance, faces persistent practical strain (1)___ modern governance, given how frequently the executive, legislative and judicial branches must actually cooperate to address genuinely complex contemporary challenges. Insofar (2)___ this cooperation remains genuinely voluntary and each branch retains meaningful independent authority, the underlying constitutional principle arguably survives intact despite considerable practical blurring at the edges. Some constitutional scholars have expressed genuine concern, (3)___, that executive power specifically has expanded considerably beyond what the original constitutional framework's drafters ever plausibly (4)___, particularly during periods of genuine national emergency when swift, decisive executive action often seems most practically urgent. Notwithstanding these legitimate, ongoing concerns, most established democracies have thus far avoided the kind of complete executive dominance (5)___ separation of powers was originally, specifically designed to prevent. Whether this favourable pattern will genuinely hold indefinitely remains, (6)___ many constitutional scholars, a genuinely open question.",
        q: [
          fb("(1)", ["in", "within"], "'faces persistent practical strain in/within modern governance'."),
          fb("(2)", ["as"], "'Insofar as this cooperation remains'."),
          fb("(3)", ["however"], "'expressed genuine concern, however, that'."),
          fb("(4)", ["envisaged", "intended", "anticipated"], "'ever plausibly envisaged/intended/anticipated'."),
          fb("(5)", ["that", "which"], "'the kind of… dominance that/which separation of powers was… designed to prevent'."),
          fb("(6)", ["for", "among"], "'remains, for/among many constitutional scholars, a genuinely open question'."),
        ],
      },
      p3: {
        title: "How precedent binds and frees",
        text: "Legal (1)___ operates on the foundational principle that similar cases should generally receive similar treatment, a principle that provides genuine predictability and (2)___ within legal systems while simultaneously constraining judicial discretion in individual, specific cases. Notwithstanding this valuable (3)___, precedent is rarely absolutely binding; courts retain some genuine capacity to distinguish current cases from apparently similar prior ones, or, in more (4)___ circumstances, to explicitly overturn precedent that later courts eventually deem to have been wrongly decided from the outset. Insofar as this flexibility allows legal systems to genuinely evolve alongside changing social values, it represents a valuable, necessary corrective to potential legal rigidity. Insofar as it introduces genuine (5)___ into how future cases might actually be decided, it complicates the very predictability precedent is otherwise specifically designed to provide. This inherent (6)___ between stability and adaptability characterises common law systems specifically, distinguishing them from more purely codified civil law traditions.",
        items: [
          { root: "predict", accepted: ["predictability"], hint: "'provides genuine predictability' (ya dado; ajustar hueco 1 a 'precedent' como sustantivo distinto)." },
          { root: "consist", accepted: ["consistency"], hint: "'genuine predictability and consistency' → consistency." },
          { root: "constrain", accepted: ["constraint"], hint: "'this valuable constraint' → constraint." },
          { root: "exception", accepted: ["exceptional"], hint: "'in more exceptional circumstances' → exceptional." },
          { root: "certain", accepted: ["uncertainty"], hint: "'genuine uncertainty into how future cases' → uncertainty." },
          { root: "tense", accepted: ["tension"], hint: "'This inherent tension between stability and adaptability' → tension." },
        ],
      },
      p4: {
        title: "Transformaciones — notwithstanding e insofar as",
        items: [
          { s1: "Despite these objections, the bill was passed by a narrow majority.", key: "NOTWITHSTANDING", s2: "___ these objections, the bill was passed by a narrow majority.", accepted: ["notwithstanding"], explanation: "notwithstanding (pese a)." },
          { s1: "The policy works to the extent that it addresses the immediate problem, but no further.", key: "INSOFAR", s2: "The policy is effective ___ as it addresses the immediate problem, though it fails to tackle root causes.", accepted: ["insofar"], explanation: "insofar as (limita el alcance)." },
          { s1: "Despite the fact that the evidence was circumstantial, the jury reached a unanimous verdict.", key: "NOTWITHSTANDING", s2: "___ the fact that the evidence was circumstantial, the jury reached a unanimous verdict.", accepted: ["notwithstanding"], explanation: "notwithstanding + the fact that." },
          { s1: "The court ruled in her favour, despite the defendant's strong objections.", key: "NOTWITHSTANDING", s2: "The court ruled in her favour, the defendant's strong objections ___. (pospuesto)", accepted: ["notwithstanding"], explanation: "notwithstanding pospuesto." },
          { s1: "To the extent that the law applies to this case, the court has clear jurisdiction.", key: "INSOFAR", s2: "___ as the law applies to this specific case, the court has clear jurisdiction.", accepted: ["insofar"], explanation: "insofar as." },
        ],
      },
      p5: {
        title: "The judge who wrote a dissent nobody expected",
        text: "When a constitutional court delivered a closely divided ruling on a case with genuinely significant implications for the separation of powers within the country's own particular constitutional system, most legal observers expected the dissenting opinion, if any single dissent emerged at all, to focus narrowly on technical questions of statutory interpretation rather than on anything approaching broader constitutional principle.\n\nOne senior judge, notwithstanding considerable institutional pressure to simply join the majority's carefully reasoned opinion and thereby preserve an appearance of judicial unanimity on a genuinely sensitive constitutional matter, chose instead to write a lengthy, carefully argued dissent that directly, explicitly challenged the majority's fundamental underlying reasoning.\n\n\"Insofar as the majority's opinion protects genuine, immediate practical efficiency,\" the judge wrote in the dissent's own opening paragraph, \"it achieves a real and defensible good. Insofar as it does so by quietly eroding constitutional constraints our founding framework specifically, deliberately established to prevent exactly this kind of executive overreach, it achieves that particular good at a cost I personally cannot, in good conscience, accept as constitutionally acceptable.\"\n\nThe dissent proved immediately, considerably controversial. Several colleagues privately expressed concern that publishing such a forceful dissent risked visibly undermining public confidence in the court's own institutional authority, particularly on a matter of such considerable, genuine public significance and attention.\n\nThe dissenting judge, notwithstanding this considerable, sustained institutional pressure, maintained firmly that judicial dissent, properly exercised and carefully, rigorously reasoned, actually strengthens rather than genuinely undermines judicial legitimacy over time, by demonstrating that the court's own reasoning process itself remains genuinely open, rigorous and not merely predetermined by simple institutional consensus alone.\n\n\"Notwithstanding the undeniable, real discomfort institutional disagreement inevitably, genuinely creates,\" the judge later explained in a separate public lecture delivered some years afterward, \"I remain firmly convinced that judicial unanimity achieved merely for its own comfortable sake, rather than through genuine, rigorous underlying agreement, ultimately serves nobody's genuine long-term interest at all.\"\n\nThe dissent, though it did not prevail at the time it was originally written, was cited extensively in subsequent legal scholarship, and several years later, a differently constituted court explicitly cited it approvingly when meaningfully narrowing the original majority ruling's own practical scope and application.\n\n\"Insofar as any single dissenting opinion can genuinely shape a legal system's own longer-term trajectory,\" a prominent legal scholar later observed in a widely cited retrospective analysis, \"this particular one arguably did precisely that, notwithstanding its own original, immediate defeat within the specific case it was actually, formally written to address.\"",
        q: [
          mc("What did most legal observers expect the dissent to focus on?", ["Broader constitutional principle.", "Narrow technical questions of statutory interpretation.", "The judge's personal opinions.", "Nothing significant."], 1, "'most legal observers expected the dissenting opinion… to focus narrowly on technical questions of statutory interpretation'."),
          mc("What did the judge choose to do instead?", ["Join the majority silently.", "Write a lengthy dissent challenging the majority's fundamental reasoning.", "Resign from the court.", "Refuse to participate in the case."], 1, "'chose instead to write a lengthy, carefully argued dissent that directly… challenged the majority's fundamental underlying reasoning'."),
          mc("What did colleagues privately worry about?", ["Nothing in particular.", "That the dissent risked undermining public confidence in the court.", "That the judge would be fired.", "That the case would be reopened."], 1, "'Several colleagues privately expressed concern that publishing such a forceful dissent risked visibly undermining public confidence'."),
          mc("What does the judge believe about dissent and legitimacy?", ["Dissent always weakens legitimacy.", "Dissent, properly exercised, actually strengthens judicial legitimacy over time.", "Dissent is never appropriate.", "Legitimacy doesn't depend on reasoning."], 1, "'judicial dissent, properly exercised and carefully… reasoned, actually strengthens rather than genuinely undermines judicial legitimacy'."),
          mc("What eventually happened to the dissent's influence?", ["It was completely forgotten.", "It was cited approvingly by a later court narrowing the original ruling.", "It caused the judge to resign.", "It had no lasting impact."], 1, "'a differently constituted court explicitly cited it approvingly when meaningfully narrowing the original majority ruling's own practical scope'."),
          mc("What does the legal scholar conclude about the dissent's significance?", ["It was entirely irrelevant.", "It arguably shaped the legal system's longer-term trajectory despite its original defeat.", "It should never have been written.", "It proved the majority was always right."], 1, "'this particular one arguably did precisely that, notwithstanding its own original, immediate defeat'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Constitutional systems around the world handle the relationship between written constitutional text and evolving social values in notably different ways, reflecting genuinely different underlying theories about what a constitution is actually, fundamentally for. (1)___\n\nSome systems favour a strictly originalist approach, interpreting constitutional text according to its meaning at the specific time of original drafting, notwithstanding however considerably social values and circumstances may have subsequently, genuinely shifted since that particular founding moment. (2)___ Proponents argue this approach provides valuable stability and appropriately constrains judicial discretion within clearly defined, predictable limits.\n\nOther systems favour a more explicitly evolving, so-called 'living constitution' approach, interpreting foundational text in light of contemporary values and circumstances rather than rigidly fixed original meaning alone. (3)___ Proponents of this alternative approach argue that constitutions must genuinely adapt to remain meaningfully relevant across changing social circumstances over considerable time.\n\nNeither approach, insofar as either is applied with genuine philosophical consistency, proves entirely without real practical difficulty. (4)___ Strict originalism can struggle to meaningfully address genuinely novel circumstances original drafters could never plausibly have anticipated or foreseen.\n\nLiving constitutionalism, meanwhile, risks the opposite genuine difficulty: excessive judicial discretion that potentially allows judges to effectively rewrite constitutional meaning according to their own personal contemporary preferences rather than genuinely, faithfully interpreting existing text. (5)___ Critics worry this risks undermining the very stability written constitutions are specifically designed to provide in the first place.\n\nMost actual constitutional systems, notwithstanding their own official, declared theoretical commitments, tend in genuine practice to blend elements of both approaches, applying strict textual fidelity in certain contexts while permitting more genuinely flexible interpretation in others depending on specific, particular circumstances. (6)___ Pure theoretical consistency, it turns out, rarely survives sustained, genuine contact with the messy, practical business of actually governing real societies.",
        options: [
          "That disagreement runs deeper than mere legal technicality.", // A -> gap1
          "New situations, on this view, get handled through formal amendment instead.", // B -> gap2
          "Text, on this view, is a living document rather than a fixed one.", // C -> gap3
          "Each side has a genuine cost attached to it.", // D -> gap4
          "That risk cuts in the opposite direction from originalism's own weakness.", // E -> gap5
          "Practice, in other words, rarely stays as tidy as theory.", // F -> gap6
          "No constitutional system has ever faced this particular dilemma.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese desacuerdo va más allá de lo técnico."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las situaciones nuevas se resuelven por enmienda formal."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el texto es un documento vivo, no fijo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada postura tiene un coste genuino."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ese riesgo va en la dirección opuesta al del originalismo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la práctica rara vez es tan ordenada como la teoría."),
        ],
      },
      p7: {
        title: "Four people discuss how they feel about their own country's legal system",
        text: "Read what four people say about how they personally feel about their own country's legal system.\n\nA) NADIA: Notwithstanding some genuine, ongoing frustration with how slowly litigation actually moves, I broadly trust our judicial system to reach fair, considered outcomes eventually, given enough time.\n\nB) TOM: Insofar as judicial review protects fundamental rights from erosion, I strongly support it. I do worry, though, about unelected judges wielding quite so much practical power over democratically decided policy.\n\nC) PRIYA: Our system relies heavily on precedent, notwithstanding occasional, genuine calls for reform when precedent starts feeling clearly outdated or unjust. I actually value that particular stability considerably, on balance.\n\nD) SAM: I have real reservations about how our constitution gets interpreted in practice, honestly. Insofar as interpretation reflects genuinely evolving social values, I support it; insofar as it seems to reflect individual judges' personal politics instead, I worry considerably more.\n",
        q: [
          mc("Who broadly trusts the judicial system despite frustration with slow litigation?", ["A", "B", "C", "D"], 0, "Nadia: 'Notwithstanding some genuine… frustration with how slowly litigation actually moves, I broadly trust our judicial system'."),
          mc("Who supports judicial review but worries about unelected judges' power?", ["A", "B", "C", "D"], 1, "Tom: 'Insofar as judicial review protects fundamental rights… I strongly support it. I do worry, though, about unelected judges'."),
          mc("Who values the stability that precedent provides, despite calls for reform?", ["A", "B", "C", "D"], 2, "Priya: 'Our system relies heavily on precedent, notwithstanding occasional… calls for reform… I actually value that particular stability'."),
          mc("Who has reservations depending on whether interpretation reflects values or personal politics?", ["A", "B", "C", "D"], 3, "Sam: 'Insofar as interpretation reflects genuinely evolving social values, I support it; insofar as it seems to reflect individual judges' personal politics… I worry'."),
          mc("Who mentions frustration with slow litigation specifically?", ["A", "B", "C", "D"], 0, "Nadia: 'frustration with how slowly litigation actually moves'."),
          mc("Who worries about judicial power over democratically decided policy?", ["A", "B", "C", "D"], 1, "Tom: 'unelected judges wielding quite so much practical power over democratically decided policy'."),
          mc("Who mentions precedent starting to feel outdated or unjust?", ["A", "B", "C", "D"], 2, "Priya: 'when precedent starts feeling clearly outdated or unjust'."),
          mc("Who has real reservations about how the constitution is interpreted in practice?", ["A", "B", "C", "D"], 3, "Sam: 'I have real reservations about how our constitution gets interpreted in practice'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el poder judicial y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Judicial review is an essential democratic safeguard, protecting fundamental rights and constitutional principles from erosion by transient political majorities, however popular or well-intentioned those majorities might genuinely be.'\n\nTEXTO 2: 'Extensive judicial review risks undermining democratic legitimacy, allowing unelected judges to override decisions made by accountable, elected representatives. Courts should exercise considerably more restraint, deferring to elected branches except in genuinely extreme cases.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura con 'notwithstanding' y UNA con 'insofar as'. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista jurídica: 'Does judicial review threaten or protect democracy?' — argumenta tu postura.\n· CARTA/EMAIL formal a un representante político proponiendo una reforma concreta al sistema judicial.\n· REPORT sobre el funcionamiento del sistema judicial en tu país: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two law students discussing judicial review. Woman: Notwithstanding some genuine concerns about judicial power, I broadly support judicial review as a safeguard. Man: Insofar as it protects fundamental rights, I agree completely with you there. Extract Two. You hear two lawyers discussing precedent. Man: Our system relies heavily on precedent, notwithstanding occasional calls for reform when it feels outdated. Woman: I value that stability considerably, on balance, even with its genuine limitations. Extract Three. You hear two citizens discussing constitutional interpretation. Woman: Insofar as interpretation reflects evolving social values, I support it fully. Man: I worry more when it seems to reflect individual judges' personal politics instead, notwithstanding their genuine legal expertise.", [
      mc("1. What does the woman say about judicial review?", ["She opposes it entirely.", "She broadly supports it despite some concerns.", "She has no opinion.", "She wants it abolished."], 1, "'Notwithstanding some genuine concerns about judicial power, I broadly support judicial review'."),
      mc("2. What does the man agree with?", ["Nothing the woman said.", "That it protects fundamental rights.", "That judges have too much power.", "That review should be abolished."], 1, "'Insofar as it protects fundamental rights, I agree completely'."),
      mc("3. What does the man say about precedent in their system?", ["It's rarely used.", "The system relies heavily on it, despite calls for reform.", "It's being abolished.", "It's irrelevant."], 1, "'Our system relies heavily on precedent, notwithstanding occasional calls for reform'."),
      mc("4. How does the woman feel about this stability?", ["She dislikes it.", "She values it considerably, on balance.", "She's indifferent.", "She wants more change."], 1, "'I value that stability considerably, on balance'."),
      mc("5. When does the woman support constitutional interpretation?", ["Never.", "When it reflects evolving social values.", "Only when unchanged.", "Only in extreme cases."], 1, "'Insofar as interpretation reflects evolving social values, I support it fully'."),
      mc("6. When does the man worry more?", ["When values evolve.", "When interpretation seems to reflect judges' personal politics.", "Never.", "When judges have expertise."], 1, "'I worry more when it seems to reflect individual judges' personal politics'."),
    ]),

    ...speakingParts({ p1: "si confías en el sistema judicial de tu país y por qué", p2: "dos imágenes del derecho (una sala de tribunal durante un juicio y un grupo de abogados revisando documentos legales): comentadlas y decidid cuál representa mejor cómo funciona realmente el sistema legal", p3: "qué es más importante para un sistema judicial justo (la independencia judicial, el acceso equitativo a la justicia, procesos rápidos, transparencia en las decisiones, la protección de derechos fundamentales): comentadlo y decidid lo más importante", p4: "el derecho constitucional y la gobernanza: si el control judicial fortalece o debilita la democracia, qué papel debería tener el precedente frente a la evolución social, y si los jueces deberían interpretar la constitución literalmente o de forma evolutiva" }),

    SUMMARY("Resumen del Día 21", [
      "Notwithstanding (pese a, ante/pospuesto + sustantivo/gerundio, o + the fact that + cláusula) e insofar as (en la medida en que, con matiz de límite).",
      "Vocabulario del derecho constitucional y los sistemas jurídicos. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 22", "Escribe 3 frases con 'notwithstanding' y 2 con 'insofar as'. Repasa el vocabulario jurídico. Mañana: 'by the same token' y más conectores de gobernanza institucional."),
  ],
};

// ───────────────────────── DÍA 22 ─────────────────────────
const DAY22 = {
  title: "Día 22 — 'By the same token' y los conectores de gobernanza institucional · La administración pública",
  description: "'By the same token' (por la misma razón, en paralelo), 'whereby' (mediante el cual), 'with respect to'/'in respect of' (con respecto a). Vocabulario de la administración pública. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Dominar 'by the same token', 'whereby' y los conectores de precisión referencial propios de documentos institucionales.",
    summary: "By the same token + whereby + with respect to; administración pública; Use of English P1–P7, Writing, Listening P2, Speaking P1–P3.",
    commonMistakes: ["usar 'by the same token' para una simple adición (no es 'and also') — señala un paralelismo lógico específico, no cualquier idea adicional.", "confundir 'whereby' (mediante el cual/por el cual, relativo de modo/mecanismo) con 'wherein' (en el cual, relativo de lugar/contenido).", "usar 'with respect to' de forma redundante cuando el contexto ya deja claro el tema — reservarlo para introducir un nuevo punto de referencia con precisión."],
    reviewPrompts: ["¿Cómo usarías 'by the same token' para conectar dos ideas paralelas?", "¿Cuál es la diferencia entre 'whereby' y 'wherein'?"],
  },
  items: [
    TEXT("🔁 Ayer, notwithstanding e insofar as. Hoy: 'BY THE SAME TOKEN', 'WHEREBY' y 'WITH RESPECT TO' — los conectores de precisión referencial más característicos de la gobernanza institucional y los documentos oficiales. Vocabulario: la ADMINISTRACIÓN PÚBLICA."),
    GRAMMAR("'By the same token', 'whereby' y 'with respect to'", `BY THE SAME TOKEN (por la misma razón, en paralelo lógico) — introduce una segunda afirmación que se sigue de la MISMA lógica que la primera, sin ser una simple adición:
· Citizens have a right to participate in governance; by the same token, they bear a responsibility to stay informed. (la responsabilidad se sigue del MISMO principio que el derecho)
· The agency cannot demand transparency from others while operating opaquely itself; by the same token, it cannot credibly criticise corruption elsewhere.
WHEREBY (mediante el cual/por el cual) — relativo formal que introduce el MECANISMO o PROCESO por el que algo ocurre:
· The government introduced a scheme whereby small businesses could access emergency funding directly.
· A new system was established whereby citizens could report corruption anonymously.
⚠️ No confundir con WHEREIN (en el cual/donde, relativo de lugar/contenido): "the report, wherein several failures were documented…"
WITH RESPECT TO / IN RESPECT OF (con respecto a, en relación con) — introduce con precisión un punto de referencia específico, más formal que "regarding" o "about":
· With respect to the proposed reforms, the committee remains divided. / The agency has made little progress in respect of its stated transparency goals.
Estos tres conectores son extremadamente frecuentes en informes gubernamentales, documentos legales y el Reading P5-P7 de C2 — dominarlos da acceso inmediato al registro institucional/burocrático más formal.`),
    WARN("Errores típicos en C2", "· 'By the same token' NO es simplemente 'also' o 'and' — exige que la segunda idea se derive de la MISMA lógica/principio que la primera.\n· 'Whereby' (mecanismo/proceso) vs. 'wherein' (lugar/contenido) — no son intercambiables.\n· 'With respect to' es más formal que 'regarding'/'about'; resérvalo para introducir un punto de referencia con precisión institucional, no en cada frase.\n· 'In respect of' es una variante británica-formal equivalente a 'with respect to', común en textos legales/gubernamentales."),
    grammarEx("Use of English — By the same token, whereby, with respect to", "Elige la opción correcta.", [
      mc("Citizens have a right to participate in governance; ___, they bear a responsibility to stay informed.", ["by the same token", "in addition", "however"], 0, "by the same token (paralelismo lógico)."),
      mc("The government introduced a scheme ___ small businesses could access emergency funding directly.", ["whereby", "wherein", "whereas"], 0, "whereby (mecanismo/proceso)."),
      mc("The report, ___ several serious failures were documented, prompted immediate reform.", ["wherein", "whereby", "whereas"], 0, "wherein (contenido/lugar, no mecanismo)."),
      mc("___ the proposed reforms, the committee remains genuinely divided.", ["With respect to", "By the same token", "Notwithstanding"], 0, "with respect to (punto de referencia preciso)."),
      mc("The agency cannot demand transparency from others while operating opaquely itself; ___, it cannot credibly criticise corruption elsewhere.", ["by the same token", "in contrast", "meanwhile"], 0, "by the same token (misma lógica)."),
      mc("A new system was established ___ citizens could report corruption anonymously.", ["whereby", "wherein", "whereupon"], 0, "whereby (mecanismo)."),
    ]),
    GRAMMAR("Vocabulario del día — La administración pública (C2)", "Léxico de maestría sobre administración pública."),
    deck("C2 S5D22 — Administración pública", [
      ["bureaucracy", "burocracia", "Excessive bureaucracy can significantly slow essential public services.", "sustantivo", "bjʊəˈrɒkrəsi"],
      ["civil servant", "funcionario/a público/a", "Career civil servants provide institutional continuity across administrations.", "sustantivo", "ˈsɪvl ˈsɜːvənt"],
      ["red tape", "burocracia excesiva, trámites engorrosos", "Excessive red tape delayed the permit by several months.", "sustantivo", "red teɪp"],
      ["accountability mechanism", "mecanismo de rendición de cuentas", "Robust accountability mechanisms deter potential official misconduct.", "sustantivo", "əˌkaʊntəˈbɪləti ˈmekənɪzəm"],
      ["public procurement", "contratación pública", "Public procurement rules aim to ensure fair, transparent competition.", "sustantivo", "ˈpʌblɪk prəˈkjʊəmənt"],
      ["devolution", "devolución de competencias, descentralización", "Devolution transferred significant powers to regional governments.", "sustantivo", "ˌdiːvəˈluːʃn"],
      ["nepotism", "nepotismo", "Allegations of nepotism undermined public trust in the appointment.", "sustantivo", "ˈnepətɪzəm"],
      ["stakeholder consultation", "consulta a las partes interesadas", "Genuine stakeholder consultation shaped the final policy considerably.", "sustantivo", "ˈsteɪkhəʊldə ˌkɒnsʌlˈteɪʃn"],
      ["mandate", "mandato (institucional, competencia)", "The agency's mandate was expanded considerably last year.", "sustantivo", "ˈmændeɪt"],
      ["oversight body", "organismo de supervisión", "An independent oversight body monitors the agency's compliance.", "sustantivo", "ˈəʊvəsaɪt ˈbɒdi"],
    ]),
    vocabEx("Vocabulario — La administración pública", "Elige la opción correcta.", [
      mc("Excessive, inefficient administrative procedure:", ["bureaucracy", "devolution", "mandate"], 0, "bureaucracy."),
      mc("Favouritism shown to relatives in appointments:", ["nepotism", "devolution", "accountability"], 0, "nepotism."),
      mc("The transfer of powers to regional or local government:", ["devolution", "nepotism", "procurement"], 0, "devolution."),
      mc("The formal process by which government acquires goods/services:", ["public procurement", "red tape", "oversight"], 0, "public procurement."),
      mc("A process seeking input from affected groups before a decision:", ["stakeholder consultation", "red tape", "nepotism"], 0, "stakeholder consultation."),
      mc("An independent institution that monitors compliance and conduct:", ["oversight body", "civil servant", "bureaucracy"], 0, "oversight body."),
    ]),

    ...uoe({
      p1: {
        title: "The paradox of red tape",
        text: "Bureaucratic procedure, though frequently (1)___ as an unnecessary obstacle to efficient governance, actually serves several genuinely important functions that purely streamlined, minimal-procedure systems would likely, genuinely struggle to replicate. By the same token that procedural safeguards protect citizens from arbitrary official (2)___, they also inevitably slow decision-making, creating a persistent, genuine tension between efficiency and accountability that no governance system has ever fully, definitively (3)___. With respect to procurement specifically, rigorous procedural requirements exist precisely to prevent favouritism and (4)___, even though these same requirements undeniably slow the acquisition of genuinely needed goods and services. Reform efforts that focus narrowly on cutting red tape without preserving essential accountability mechanisms risk (5)___ genuine protections along with genuine inefficiency, a mechanism whereby well-intentioned reform inadvertently (6)___ the very abuses procedure was originally designed to prevent.",
        q: [
          mc("(1)", ["dismissed", "regarded", "viewed", "seen"], 0, "'frequently dismissed as an unnecessary obstacle'."),
          mc("(2)", ["decision", "action", "power", "authority"], 1, "'protect citizens from arbitrary official action'."),
          mc("(3)", ["resolved", "settled", "solved", "eliminated"], 0, "'no governance system has ever fully… resolved'."),
          mc("(4)", ["favouritism", "corruption", "bias", "nepotism"], 1, "'requirements exist precisely to prevent favouritism and corruption'."),
          mc("(5)", ["discarding", "removing", "eliminating", "losing"], 2, "'risk eliminating genuine protections along with… inefficiency'."),
          mc("(6)", ["enables", "permits", "facilitates", "allows"], 0, "'inadvertently enables the very abuses'."),
        ],
      },
      p2: {
        title: "A scheme whereby transparency became mandatory",
        text: "Several governments have recently introduced formal accountability schemes (1)___ public officials must disclose specific financial interests that could plausibly (2)___ with their official duties, a mechanism specifically designed to detect and deter potential conflicts before they can genuinely, seriously compromise public decision-making. With respect (3)___ implementation, however, these schemes vary considerably in their actual practical effectiveness, given how much genuine enforcement ultimately depends on adequate institutional resourcing and real political will to actively pursue violations once genuinely, properly detected. By the same (4)___ that disclosure requirements alone cannot guarantee genuine integrity without meaningful enforcement, robust oversight bodies cannot function effectively without adequate independent resourcing and genuine institutional protection from political interference. It remains an open question (5)___ these schemes will prove sufficient to meaningfully address public concern about official conduct, or whether more (6)___ structural reform will ultimately prove genuinely necessary.",
        q: [
          fb("(1)", ["whereby"], "'schemes whereby public officials must disclose'."),
          fb("(2)", ["conflict", "interfere"], "'could plausibly conflict/interfere with their official duties'."),
          fb("(3)", ["to"], "'With respect to implementation'."),
          fb("(4)", ["token"], "'By the same token that disclosure requirements'."),
          fb("(5)", ["whether"], "'remains an open question whether these schemes'."),
          fb("(6)", ["fundamental", "far-reaching"], "'more fundamental/far-reaching structural reform'."),
        ],
      },
      p3: {
        title: "Devolution and its discontents",
        text: "Devolution, as a governance strategy, transfers meaningful decision-making (1)___ from central government to regional or local authorities, premised on the reasonable assumption that local officials possess genuinely superior (2)___ of local needs and circumstances than distant central administrators typically can. With respect to actual (3)___, however, devolved arrangements introduce their own genuine complications, particularly regarding how responsibility gets allocated when policy failures span multiple levels of government simultaneously. By the same token that devolution empowers local (4)___, it can also create genuine coordination challenges when regional authorities pursue divergent, sometimes conflicting policy priorities that complicate coherent national-level (5)___. Whether devolution's genuine benefits ultimately outweigh these real coordination costs likely depends considerably on specific institutional (6)___ that vary considerably across different national and regional contexts.",
        items: [
          { root: "author", accepted: ["authority"], hint: "'transfers meaningful decision-making authority' → authority." },
          { root: "understand", accepted: ["understanding"], hint: "'genuinely superior understanding of local needs' → understanding." },
          { root: "implement", accepted: ["implementation"], hint: "'With respect to actual implementation' → implementation." },
          { root: "govern", accepted: ["governance"], hint: "'empowers local governance' → governance." },
          { root: "coordinate", accepted: ["coordination"], hint: "'complicate coherent national-level coordination' → coordination." },
          { root: "design", accepted: ["design", "designs"], hint: "'specific institutional design(s)' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — by the same token, whereby, with respect to",
        items: [
          { s1: "Citizens have a right to participate; for the same reason, they bear a responsibility to stay informed.", key: "TOKEN", s2: "Citizens have a right to participate; by the same ___, they bear a responsibility to stay informed.", accepted: ["token"], explanation: "by the same token." },
          { s1: "The government introduced a scheme through which small businesses could access funding directly.", key: "WHEREBY", s2: "The government introduced a scheme ___ small businesses could access funding directly.", accepted: ["whereby"], explanation: "whereby (mecanismo)." },
          { s1: "Regarding the proposed reforms, the committee remains genuinely divided.", key: "RESPECT", s2: "With ___ to the proposed reforms, the committee remains genuinely divided.", accepted: ["respect"], explanation: "with respect to." },
          { s1: "A new system was established through which citizens could report corruption anonymously.", key: "WHEREBY", s2: "A new system was established ___ citizens could report corruption anonymously.", accepted: ["whereby"], explanation: "whereby." },
          { s1: "The agency cannot demand transparency from others while operating opaquely; for the same reason, it cannot criticise corruption elsewhere.", key: "TOKEN", s2: "The agency cannot demand transparency from others while operating opaquely; by the same ___, it cannot criticise corruption elsewhere.", accepted: ["token"], explanation: "by the same token." },
        ],
      },
      p5: {
        title: "The civil servant who designed her own undoing",
        text: "A senior civil servant, tasked with designing a new accountability scheme whereby government contracts above a certain financial threshold would require independent, mandatory review before final approval, faced an unexpected, genuinely ironic professional dilemma partway through the scheme's careful, deliberate design process.\n\nWith respect to her own department's existing contracting practices, she discovered, through her own careful preliminary research, several arrangements that would themselves fail to meet the very accountability standards she was personally, professionally tasked with formally establishing for the entire government going forward.\n\n\"By the same token that I was designing a scheme to catch precisely this kind of practice elsewhere in government,\" she later explained candidly in a revealing internal memo that subsequently became public, \"I recognised I couldn't, in good conscience, simply exempt my own department from that same exact scrutiny once the scheme was actually, formally implemented.\"\n\nHer resulting recommendation, submitted through the appropriate formal institutional channels, called for her own department's practices to be reviewed under precisely the same new standards being proposed for the rest of government, notwithstanding the genuine, obvious professional awkwardness this particular recommendation would clearly, predictably create for colleagues she worked alongside daily.\n\nThe subsequent review, once formally initiated, indeed identified several genuine problems within her own department's prior contracting practices, findings that proved considerably more institutionally embarrassing than she had perhaps initially, fully anticipated when she first raised the underlying issue.\n\n\"With respect to my own professional position specifically,\" she noted afterward, reflecting on the whole experience, \"raising this internally rather than waiting for external discovery by a journalist or opposition politician was clearly, obviously the right call, notwithstanding the real short-term institutional discomfort it genuinely, predictably created at the time.\"\n\nHer department subsequently implemented meaningful reforms addressing the specific problems identified, and the broader accountability scheme she had originally designed was ultimately implemented across government more widely, with her own department's prior issues frequently cited, by the same token, as a genuinely persuasive, concrete illustration of precisely why such rigorous, universal accountability mechanisms mattered in the first place.\n\n\"What I ultimately learned,\" she reflected in a later public address to fellow civil servants, \"was that genuine institutional integrity means applying the exact same rigorous standards to yourself and your own department that you would insist on applying rigorously to absolutely everyone else across government.\"",
        q: [
          mc("What was the civil servant tasked with designing?", ["A new tax policy.", "An accountability scheme requiring independent review of large contracts.", "A staff training programme.", "A public relations campaign."], 1, "'tasked with designing a new accountability scheme whereby government contracts above a certain financial threshold would require independent, mandatory review'."),
          mc("What did she discover about her own department?", ["Nothing of concern.", "Practices that would themselves fail the accountability standards being designed.", "That it was the most compliant department.", "That it needed more funding."], 1, "'she discovered… several arrangements that would themselves fail to meet the very accountability standards she was personally… tasked with… establishing'."),
          mc("What did her resulting recommendation call for?", ["Exempting her own department.", "Her own department's practices being reviewed under the same new standards.", "Cancelling the entire scheme.", "Firing her colleagues."], 1, "'called for her own department's practices to be reviewed under precisely the same new standards being proposed for the rest of government'."),
          mc("What did the subsequent review find?", ["Nothing of concern.", "Several genuine problems within her own department's practices.", "That her department was exemplary.", "That the scheme was unnecessary."], 1, "'the subsequent review… indeed identified several genuine problems within her own department's prior contracting practices'."),
          mc("Why does she say raising this internally was the right call?", ["It avoided any consequences.", "It was better than waiting for external discovery by a journalist.", "It made her more popular.", "It was required by law."], 1, "'raising this internally rather than waiting for external discovery by a journalist or opposition politician was clearly… the right call'."),
          mc("What did she ultimately learn about institutional integrity?", ["Rules apply only to others.", "It means applying the same rigorous standards to yourself as to everyone else.", "Integrity doesn't matter in practice.", "Self-review should be avoided."], 1, "'genuine institutional integrity means applying the exact same rigorous standards to yourself… that you would insist on applying… to absolutely everyone else'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Public administration scholars have long debated the genuinely difficult trade-off between administrative efficiency and democratic accountability, a tension that shapes nearly every meaningful decision about how government institutions should actually, practically be structured and organised. (1)___\n\nHighly centralised administrative systems can, in principle, act swiftly and with considerable coordinated coherence, avoiding the delays and genuine coordination costs that more devolved, decentralised arrangements frequently, predictably introduce. (2)___ This apparent efficiency, however, often comes at a genuine cost to local responsiveness and meaningful democratic participation.\n\nDevolved systems, by the same token, distribute decision-making authority closer to the citizens most directly, immediately affected by specific policy choices, potentially improving both responsiveness and genuine democratic legitimacy. (3)___ This same distribution, however, can introduce genuine coordination challenges and meaningful inconsistency across different regions or jurisdictions.\n\nNeither pure model, applied with complete theoretical consistency, proves entirely satisfactory in genuine, sustained practice. (4)___ Most functioning governance systems, whatever their own official theoretical commitments, blend centralised and devolved elements depending on the specific policy domain actually under consideration.\n\nWith respect to which specific functions should be centralised versus devolved, no single, universal formula reliably applies across every different context and policy area. (5)___ What works well for infrastructure planning may prove genuinely poorly suited to healthcare delivery, and vice versa entirely.\n\nThis suggests that genuinely effective governance design requires careful, case-by-case judgement rather than rigid, doctrinaire commitment to either centralisation or devolution as some kind of universal, one-size-fits-all governing principle. (6)___ The genuinely right balance, whereby efficiency and accountability are both reasonably served, likely differs meaningfully across different specific policy domains and national contexts.",
        options: [
          "That tension shows up almost everywhere you look.", // A -> gap1
          "Speed, in other words, is not free of cost.", // B -> gap2
          "Proximity carries its own genuine value here.", // C -> gap3
          "Both models, in short, trade one cost for another.", // D -> gap4
          "Context, not ideology, should really be doing the deciding.", // E -> gap5
          "One size, evidently, does not comfortably fit every case.", // F -> gap6
          "No administrative system has ever faced this particular trade-off.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa tensión aparece por todas partes."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la velocidad no es gratuita."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la proximidad tiene su propio valor genuino."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ambos modelos cambian un coste por otro."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el contexto, no la ideología, debería decidir."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ningún tamaño único sirve para todos los casos."),
        ],
      },
      p7: {
        title: "Four people discuss their experience dealing with public administration",
        text: "Read what four people say about their own personal experience dealing with public administration or bureaucracy.\n\nA) NADIA: I once dealt with genuinely excessive red tape trying to register a small business. With respect to that specific experience, I'd say the process desperately needs meaningful simplification.\n\nB) TOM: I actually work as a civil servant myself, and by the same token that I understand public frustration with bureaucracy, I also see firsthand why certain procedures genuinely exist and matter.\n\nC) PRIYA: My local council introduced a scheme whereby residents could report issues directly through a mobile app. It's honestly made local governance feel considerably more responsive and accessible to me.\n\nD) SAM: With respect to public procurement specifically, I think transparency requirements, notwithstanding the genuine delays they sometimes cause, remain absolutely essential for preventing corruption.\n",
        q: [
          mc("Who dealt with excessive red tape registering a small business?", ["A", "B", "C", "D"], 0, "Nadia: 'I once dealt with genuinely excessive red tape trying to register a small business'."),
          mc("Who works as a civil servant and understands both sides?", ["A", "B", "C", "D"], 1, "Tom: 'I actually work as a civil servant myself, and… I understand public frustration… I also see firsthand why certain procedures… exist'."),
          mc("Whose local council introduced an app-based reporting scheme?", ["A", "B", "C", "D"], 2, "Priya: 'My local council introduced a scheme whereby residents could report issues directly through a mobile app'."),
          mc("Who believes procurement transparency remains essential despite delays?", ["A", "B", "C", "D"], 3, "Sam: 'transparency requirements, notwithstanding the genuine delays they sometimes cause, remain absolutely essential'."),
          mc("Who says the process desperately needs meaningful simplification?", ["A", "B", "C", "D"], 0, "Nadia: 'the process desperately needs meaningful simplification'."),
          mc("Who sees firsthand why certain procedures genuinely exist?", ["A", "B", "C", "D"], 1, "Tom: 'I also see firsthand why certain procedures genuinely exist and matter'."),
          mc("Who says local governance feels more responsive and accessible now?", ["A", "B", "C", "D"], 2, "Priya: 'It's honestly made local governance feel considerably more responsive and accessible'."),
          mc("Who mentions preventing corruption specifically?", ["A", "B", "C", "D"], 3, "Sam: 'remain absolutely essential for preventing corruption'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la administración pública y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Bureaucratic procedure exists for good reason — preventing corruption, ensuring fairness, protecting citizens from arbitrary official action. Efforts to cut red tape risk discarding essential accountability safeguards along with genuine inefficiency.'\n\nTEXTO 2: 'Excessive bureaucracy imposes real costs on citizens and businesses, delaying essential services and discouraging economic activity. Governments should prioritise radical simplification, trusting officials with greater discretion rather than rigid procedural constraint.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura con 'by the same token' y UNA con 'whereby'. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista de administración pública: 'Cutting red tape: reform or risk?' — argumenta tu postura.\n· CARTA/EMAIL formal a una administración pública proponiendo cómo simplificar un trámite concreto.\n· REPORT sobre la eficacia de un servicio público en tu localidad: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha a una funcionaria pública hablando sobre una reforma de transparencia (se oye dos veces). Completa las frases con la información que oigas (1-3 palabras).", "This is Part Two. You will hear a civil servant talking about a transparency reform. I was tasked with designing a scheme whereby government contracts above a certain threshold would require independent review before approval. During my research, I discovered my own department's existing practices wouldn't meet the very standards I was designing. By the same token that I was creating a scheme to catch this elsewhere, I couldn't exempt my own department from that scrutiny. My recommendation called for my department to be reviewed under the same new standards proposed for the rest of government. The subsequent review identified several genuine problems within our prior contracting practices. With respect to my own professional position, raising this internally was clearly the right call, rather than waiting for external discovery. My department subsequently implemented meaningful reforms addressing the problems identified. The broader scheme was eventually implemented across government more widely. What I ultimately learned was that genuine institutional integrity means applying the same rigorous standards to yourself that you'd insist on for everyone else.", [
      fb("1. She was tasked with designing a scheme for contracts above a certain ___.", ["threshold"], "'contracts above a certain threshold'."),
      fb("2. Her own department's practices wouldn't meet the same ___.", ["standards"], "'wouldn't meet the very standards I was designing'."),
      fb("3. She couldn't ___ her own department from the scrutiny.", ["exempt"], "'I couldn't exempt my own department from that scrutiny'."),
      fb("4. Her recommendation called for review under the same new ___.", ["standards"], "'reviewed under the same new standards'."),
      fb("5. The review identified several genuine ___ in prior practices.", ["problems"], "'identified several genuine problems within our prior… practices'."),
      fb("6. Raising it internally was clearly the right ___.", ["call"], "'was clearly the right call'."),
      fb("7. Her department implemented meaningful ___ afterward.", ["reforms"], "'implemented meaningful reforms addressing the problems'."),
      fb("8. The broader scheme was implemented across ___ more widely.", ["government"], "'implemented across government more widely'."),
      fb("9. Institutional integrity means applying the same rigorous ___ to yourself.", ["standards"], "'applying the same rigorous standards to yourself'."),
    ]),

    ...speakingParts({ p1: "si has tenido alguna experiencia con trámites burocráticos y cómo fue", p2: "dos imágenes de la administración pública (una oficina gubernamental con largas colas y una persona haciendo un trámite fácilmente desde su móvil): comentadlas y decidid cuál representa mejor el futuro de los servicios públicos", p3: "qué debería priorizarse para mejorar la administración pública (digitalizar trámites, reducir la burocracia, mejorar la transparencia, formar mejor a los funcionarios, aumentar la rendición de cuentas): comentadlo y decidid lo más urgente", p4: "la administración pública y la gobernanza: si la burocracia excesiva perjudica más de lo que protege, qué papel tiene la descentralización en mejorar los servicios públicos, y si la digitalización de trámites mejora realmente el acceso ciudadano a la administración" }),

    SUMMARY("Resumen del Día 22", [
      "By the same token (paralelismo lógico, no simple adición), whereby (mecanismo/proceso, vs. wherein: lugar/contenido), with respect to/in respect of (punto de referencia preciso).",
      "Vocabulario de la administración pública. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 23", "Escribe 3 frases con 'by the same token' y 2 con 'whereby'. Repasa el vocabulario de administración pública. Mañana: más conectores formales (to the extent that, in light of) y las relaciones internacionales."),
  ],
};

// ───────────────────────── DÍA 23 ─────────────────────────
const DAY23 = {
  title: "Día 23 — 'To the extent that' e 'in light of' · Las relaciones internacionales y la diplomacia",
  description: "'To the extent that' (en la medida en que, matiz condicional/de grado) e 'in light of' (a la luz de, en vista de). Vocabulario de las relaciones internacionales y la diplomacia. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Dominar 'to the extent that' e 'in light of', conectores de precisión condicional y causal propios del registro diplomático/analítico más formal.",
    summary: "To the extent that + in light of; relaciones internacionales y diplomacia; Use of English P1–P7, Writing, Listening P3, Speaking P1–P3.",
    commonMistakes: ["confundir 'to the extent that' (matiz de GRADO/condición: 'solo en la medida en que') con 'given that' (causa simple, sin matiz de grado).", "usar 'in light of' con sentido de simple adición en vez de causal/evaluativo (reconsiderar algo A LA LUZ de nueva información).", "sobreusar estos conectores en cada frase — pierden impacto retórico si no se reservan para puntos genuinamente importantes."],
    reviewPrompts: ["¿Cómo usarías 'to the extent that' para matizar una afirmación general?", "¿Cuál es la diferencia entre 'in light of' y 'because of'?"],
  },
  items: [
    TEXT("🔁 Ayer, by the same token/whereby/with respect to. Hoy: 'TO THE EXTENT THAT' E 'IN LIGHT OF' — los conectores de precisión condicional y evaluativa más característicos del análisis diplomático y político. Vocabulario: las RELACIONES INTERNACIONALES y la DIPLOMACIA."),
    GRAMMAR("'To the extent that' e 'in light of'", `TO THE EXTENT THAT (en la medida en que, con matiz de GRADO/CONDICIÓN — limita o condiciona una afirmación general):
· The treaty succeeds to the extent that all signatories genuinely comply with its terms. (el éxito depende del GRADO de cumplimiento)
· To the extent that diplomatic pressure alone can resolve the conflict, negotiations should continue; beyond that point, other measures may become necessary.
Diferencia con "given that"/"since" (causa simple, sin matiz de grado): "to the extent that" señala una relación de GRADO O CONDICIÓN, no una causa directa y completa.
IN LIGHT OF (a la luz de, en vista de) — introduce nueva información o circunstancias que llevan a RECONSIDERAR o EVALUAR algo de forma distinta:
· In light of recent developments, the government has revised its diplomatic strategy considerably.
· In light of the treaty's repeated violations, further sanctions now seem genuinely warranted.
⚠️ "In light of" implica una EVALUACIÓN o RECONSIDERACIÓN basada en nueva información — no es simplemente "because of" (causa neutra); sugiere que la nueva información cambia cómo se percibe o se actúa sobre algo.
Ambos conectores son extremadamente frecuentes en el análisis de política internacional, informes diplomáticos y el Reading P5-P7 de C2 — combinados con los conectores de los días anteriores (notwithstanding, insofar as, by the same token, whereby), completan el repertorio de registro institucional más formal del inglés.`),
    WARN("Errores típicos en C2", "· 'To the extent that' señala GRADO/CONDICIÓN, no causa simple — no lo uses como sinónimo directo de 'because'.\n· 'In light of' implica RECONSIDERACIÓN basada en nueva información — más específico que 'because of'.\n· No abuses de estos conectores tan formales en cada frase — resérvalos para puntos genuinamente importantes del argumento, especialmente en el Writing P1.\n· 'In light of' + sustantivo/gerundio, nunca + cláusula completa con verbo conjugado directamente (usa 'given that' para eso)."),
    grammarEx("Use of English — To the extent that e in light of", "Elige o completa con la estructura correcta.", [
      mc("The treaty succeeds ___ all signatories genuinely comply with its terms.", ["to the extent that", "in light of", "given"], 0, "to the extent that (matiz de grado/condición)."),
      mc("___ recent developments, the government has revised its diplomatic strategy considerably.", ["In light of", "To the extent that", "Insofar"], 0, "in light of (reconsideración basada en nueva información)."),
      mc("___ the treaty's repeated violations, further sanctions now seem genuinely warranted.", ["In light of", "To the extent that", "Notwithstanding"], 0, "in light of (evaluación basada en hechos)."),
      mc("Diplomatic pressure alone can resolve this ___ both parties genuinely wish to negotiate in good faith.", ["to the extent that", "in light of", "whereby"], 0, "to the extent that (condición de grado)."),
      mc("___ this new evidence, the committee must reconsider its earlier conclusions.", ["In light of", "To the extent that", "By the same token"], 0, "in light of (nueva información que lleva a reconsiderar)."),
      mc("The agreement is meaningful only ___ both sides actually honour its specific terms.", ["to the extent that", "in light of", "with respect to"], 0, "to the extent that (grado de cumplimiento)."),
    ]),
    GRAMMAR("Vocabulario del día — Las relaciones internacionales y la diplomacia (C2)", "Léxico de maestría sobre relaciones internacionales."),
    deck("C2 S5D23 — Relaciones internacionales y diplomacia", [
      ["bilateral", "bilateral", "The two countries signed a new bilateral trade agreement.", "adjetivo", "ˌbaɪˈlætərəl"],
      ["multilateralism", "multilateralismo", "Multilateralism remains essential for addressing genuinely global challenges.", "sustantivo", "ˌmʌltiˈlætərəlɪzəm"],
      ["sovereignty", "soberanía", "The dispute raised difficult questions about national sovereignty.", "sustantivo", "ˈsɒvrənti"],
      ["sanctions", "sanciones", "The international community imposed severe economic sanctions.", "sustantivo", "ˈsæŋkʃnz"],
      ["ratify", "ratificar", "Several member states have yet to ratify the treaty.", "verbo", "ˈrætɪfaɪ"],
      ["envoy", "enviado/a (diplomático)", "The special envoy negotiated directly with both parties.", "sustantivo", "ˈenvɔɪ"],
      ["ceasefire", "alto el fuego", "The fragile ceasefire held for barely a few weeks.", "sustantivo", "ˈsiːsfaɪə"],
      ["hegemony", "hegemonía", "Debates continue over the future of regional hegemony.", "sustantivo", "hɪˈgeməni"],
      ["non-proliferation", "no proliferación", "Non-proliferation agreements aim to limit weapons development.", "sustantivo", "nɒn prəˌlɪfəˈreɪʃn"],
      ["realpolitik", "realpolitik (política pragmática de intereses)", "Critics accused the administration of pure, cynical realpolitik.", "sustantivo", "reɪˈɑːlpɒlɪtiːk"],
    ]),
    vocabEx("Vocabulario — Las relaciones internacionales y la diplomacia", "Elige la opción correcta.", [
      mc("Involving exactly two countries or parties:", ["bilateral", "multilateralism", "hegemony"], 0, "bilateral."),
      mc("A country's independent authority over its own affairs:", ["sovereignty", "sanctions", "envoy"], 0, "sovereignty."),
      mc("Punitive economic or political measures against a country:", ["sanctions", "ratification", "ceasefire"], 0, "sanctions."),
      mc("To formally approve and adopt a treaty:", ["ratify", "sanction", "envoy"], 0, "ratify."),
      mc("A temporary halt to fighting, often preceding negotiation:", ["ceasefire", "sanctions", "sovereignty"], 0, "ceasefire."),
      mc("Dominant power or influence held by one state over others:", ["hegemony", "multilateralism", "sovereignty"], 0, "hegemony."),
    ]),

    ...uoe({
      p1: {
        title: "The limits of diplomatic pressure",
        text: "Diplomatic pressure, as a foreign policy instrument, proves genuinely effective (1)___ the extent that the targeted government values its own international standing and depends meaningfully (2)___ continued diplomatic and economic engagement with the broader international community. In light of numerous historical cases where sustained diplomatic pressure ultimately failed to (3)___ meaningful policy change, some analysts have grown increasingly sceptical about its genuine practical effectiveness as a primary tool of statecraft. To the extent that a targeted regime genuinely believes it can (4)___ international isolation while maintaining domestic political control, diplomatic pressure alone is unlikely to prove sufficient on its own. In light of this genuine limitation, many foreign policy analysts now (5)___ diplomatic pressure be combined with other measures — economic incentives, security guarantees, or, in more (6)___ cases, more forceful intervention — rather than relied upon as a genuinely sufficient, standalone strategy.",
        q: [
          mc("(1)", ["to", "in", "at", "for"], 0, "'proves genuinely effective to the extent that'."),
          mc("(2)", ["on", "in", "at", "for"], 0, "'depends meaningfully on continued… engagement'."),
          mc("(3)", ["produce", "generate", "create", "yield"], 0, "'failed to produce meaningful policy change'."),
          mc("(4)", ["weather", "survive", "endure", "withstand"], 3, "'can withstand international isolation'."),
          mc("(5)", ["recommend", "suggest", "propose", "advocate"], 0, "'analysts now recommend diplomatic pressure be combined'."),
          mc("(6)", ["extreme", "severe", "serious", "drastic"], 0, "'in more extreme cases'."),
        ],
      },
      p2: {
        title: "Sovereignty in an interconnected world",
        text: "Traditional conceptions of national sovereignty face genuine, sustained strain in an increasingly interconnected global economy, where decisions made within one country's borders routinely produce consequences (1)___ extend well beyond that country's own formal jurisdiction. To the extent (2)___ genuinely global challenges — climate change, pandemic disease, financial instability — require coordinated international response, purely sovereign, unilateral national action often proves demonstrably insufficient on its own. In light of this considerable tension, some scholars have proposed reconceiving sovereignty (3)___ absolute, unlimited national authority towards something closer to conditional legitimacy, contingent (4)___ a state genuinely fulfilling certain basic obligations to both its own citizens and the broader international community. Critics of this particular reconception worry it could provide powerful states convenient cover (5)___ interfering in weaker states' internal affairs under the comfortable guise of protecting supposedly universal values. This debate remains, in light of recent international developments, (6)___ far from any genuine, definitive resolution.",
        q: [
          fb("(1)", ["that", "which"], "'consequences that/which extend well beyond'."),
          fb("(2)", ["that"], "'To the extent that genuinely global challenges'."),
          fb("(3)", ["from"], "'reconceiving sovereignty from absolute… authority'."),
          fb("(4)", ["on", "upon"], "'contingent on/upon a state genuinely fulfilling'."),
          fb("(5)", ["for"], "'convenient cover for interfering'."),
          fb("(6)", ["genuinely"], "'remains… genuinely far from… resolution'."),
        ],
      },
      p3: {
        title: "The quiet work of envoys",
        text: "Diplomatic envoys, despite operating largely outside public (1)___, frequently accomplish considerably more substantive progress through patient, sustained private negotiation than more visible, publicly announced diplomatic initiatives typically manage to achieve. In light of numerous documented historical cases where quiet, behind-the-scenes diplomacy successfully resolved disputes public negotiations had previously failed to meaningfully (2)___, this less visible dimension of international relations arguably deserves considerably more scholarly (3)___ than it conventionally, typically receives. To the extent that public diplomatic posturing often serves primarily domestic political (4)___ rather than genuine conflict resolution, private diplomatic channels may actually offer negotiators considerably greater genuine (5)___ to make the kind of substantive concessions public political pressure would otherwise render politically impossible or prohibitively costly. This suggests that effective diplomacy often requires a careful, deliberate (6)___ between public statement and private negotiation, rather than treating the two as straightforwardly interchangeable or equivalent.",
        items: [
          { root: "scrutiny", accepted: ["scrutiny"], hint: "'operating largely outside public scrutiny' (sustantivo)." },
          { root: "advance", accepted: ["advance"], hint: "'negotiations had previously failed to meaningfully advance' (verbo)." },
          { root: "attend", accepted: ["attention"], hint: "'considerably more scholarly attention' → attention." },
          { root: "consume", accepted: ["consumption"], hint: "'serves primarily domestic political consumption' → consumption." },
          { root: "flex", accepted: ["flexibility"], hint: "'considerably greater genuine flexibility' → flexibility." },
          { root: "balance", accepted: ["balance"], hint: "'a careful, deliberate balance between' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — to the extent that e in light of",
        items: [
          { s1: "The treaty succeeds only if all signatories genuinely comply with its terms.", key: "EXTENT", s2: "The treaty succeeds to the ___ that all signatories genuinely comply with its terms.", accepted: ["extent"], explanation: "to the extent that." },
          { s1: "Because of recent developments, the government has revised its strategy.", key: "LIGHT", s2: "In ___ of recent developments, the government has revised its strategy.", accepted: ["light"], explanation: "in light of." },
          { s1: "Given the treaty's repeated violations, further sanctions now seem warranted.", key: "LIGHT", s2: "In ___ of the treaty's repeated violations, further sanctions now seem warranted.", accepted: ["light"], explanation: "in light of." },
          { s1: "Diplomatic pressure works only if both parties genuinely wish to negotiate.", key: "EXTENT", s2: "Diplomatic pressure works to the ___ that both parties genuinely wish to negotiate.", accepted: ["extent"], explanation: "to the extent that." },
          { s1: "Because of this new evidence, the committee must reconsider its conclusions.", key: "LIGHT", s2: "In ___ of this new evidence, the committee must reconsider its conclusions.", accepted: ["light"], explanation: "in light of." },
        ],
      },
      p5: {
        title: "The envoy who negotiated in silence",
        text: "A veteran diplomatic envoy, tasked with facilitating negotiations between two long-estranged governments whose formal relations had remained severed for well over a decade, made an early strategic decision that struck several of her own government colleagues as genuinely, considerably risky at the time: she would conduct the entire initial phase of negotiations in complete, deliberate public silence, without any public statement whatsoever regarding progress, setbacks, or even the basic fact that meaningful negotiations were actually, genuinely underway at all.\n\n\"To the extent that public statements create genuine political pressure and expectation,\" she later explained in a rare, subsequent public interview once negotiations had concluded, \"they can also, just as easily, make it considerably harder for either side to make the kind of meaningful concessions genuine resolution actually requires, without appearing weak to their own respective domestic audiences back home.\"\n\nIn light of previous, well-documented failed negotiation attempts between these same two governments, attempts that had been conducted with considerable public fanfare and correspondingly high, difficult-to-manage public expectation, she deliberately, consciously chose an almost entirely opposite, considerably quieter approach this particular time around.\n\nHer own government's political leadership, in light of her extensive, well-established prior diplomatic track record and considerable relevant professional experience, ultimately granted her the unusual latitude to proceed largely on her own professional judgement, notwithstanding some genuine, ongoing internal institutional pressure for more regular, visible progress updates and public reassurance.\n\nThe negotiations, conducted almost entirely away from any sustained public or media scrutiny, proceeded slowly but steadily over the better part of eighteen months. To the extent that both delegations could genuinely trust the process would remain confidential throughout, they proved willing to explore compromise positions neither side could plausibly, realistically have proposed publicly without facing immediate, severe domestic political backlash.\n\nWhen a framework agreement was finally reached and formally announced, it arrived, from the general public's own perspective, with remarkably little prior warning or advance media speculation. \"In light of how the negotiations actually unfolded,\" she reflected afterward in her subsequent interview, \"I remain genuinely convinced that public silence, rather than being some kind of diplomatic failure or evasion, was precisely what ultimately made the eventual agreement itself possible in the first place.\"\n\nHer particular approach has since been studied extensively by other diplomats and international relations scholars alike, though she herself cautions that its genuine applicability depends considerably on specific circumstances. \"To the extent that public accountability genuinely matters in a functioning democracy,\" she noted carefully, \"there are real, legitimate limits to how much can reasonably be conducted in complete silence, however tactically, strategically useful that particular silence sometimes genuinely proves in specific negotiating circumstances.\"",
        q: [
          mc("What strategic decision did the envoy make?", ["To negotiate publicly with constant updates.", "To conduct negotiations in complete public silence.", "To refuse the assignment entirely.", "To involve the media directly."], 1, "'she would conduct the entire initial phase of negotiations in complete, deliberate public silence'."),
          mc("Why does she say public statements can be counterproductive?", ["They're always helpful.", "They create pressure that makes meaningful concessions harder without appearing weak.", "They speed up negotiations.", "They have no real effect."], 1, "'they can also… make it considerably harder for either side to make the kind of meaningful concessions… without appearing weak'."),
          mc("What prompted her to choose this quieter approach?", ["Random chance.", "Previous failed attempts conducted with public fanfare and high expectations.", "A direct government order.", "Lack of funding for public campaigns."], 1, "'In light of previous, well-documented failed negotiation attempts… conducted with considerable public fanfare… she deliberately… chose an almost entirely opposite… approach'."),
          mc("Why was she granted latitude to proceed on her own judgement?", ["Random selection.", "Her extensive prior diplomatic track record and experience.", "She threatened to resign.", "No one else was available."], 1, "'in light of her extensive, well-established prior diplomatic track record… ultimately granted her the unusual latitude'."),
          mc("How long did the negotiations take?", ["A few weeks.", "The better part of eighteen months.", "Several days.", "Over a decade."], 1, "'proceeded slowly but steadily over the better part of eighteen months'."),
          mc("What does she caution about her approach's applicability?", ["It should always be used.", "Public accountability has real limits on how much can be conducted in silence.", "It never actually worked.", "It should be banned in democracies."], 1, "'To the extent that public accountability genuinely matters in a functioning democracy… there are real, legitimate limits to how much can reasonably be conducted in complete silence'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "International relations scholars have long debated whether multilateralism or bilateral engagement offers the more effective, reliable framework for addressing genuinely complex global challenges that no single nation can plausibly resolve entirely on its own. (1)___\n\nMultilateral institutions, to the extent that they successfully coordinate action across numerous participating states, can address challenges whose genuinely global scope simply exceeds what any single bilateral relationship, however strong, could plausibly manage entirely alone. (2)___ Climate change offers perhaps the clearest, most obvious illustration of this particular dynamic.\n\nMultilateralism, however, frequently struggles with the genuine coordination costs that inevitably arise when numerous sovereign states, each pursuing their own distinct national interests, must somehow reach meaningful, binding collective agreement. (3)___ Unanimous or near-unanimous consent requirements can reduce ambitious multilateral proposals to their lowest common denominator, satisfying nobody entirely.\n\nBilateral engagement, by contrast, generally allows for more genuinely tailored, specific agreements between two particular parties, unconstrained by the need to simultaneously satisfy numerous other participating states with potentially quite different, competing priorities and interests. (4)___ This flexibility, though, comes at an obvious cost: bilateral agreements alone cannot meaningfully address challenges whose scope is inherently, unavoidably global in nature.\n\nIn light of this genuine underlying tension, most sophisticated foreign policy actually pursues both approaches simultaneously, deploying multilateral engagement where genuinely global coordination proves essential while reserving bilateral channels for more specific, tailored objectives that particular relationship-specific engagement serves considerably better. (5)___ Neither approach, pursued in isolation, adequately addresses the full genuine range of challenges contemporary international relations actually presents.\n\nWhat this suggests, ultimately, is that effective foreign policy requires genuine strategic flexibility rather than rigid, doctrinaire commitment to either multilateralism or bilateralism as some kind of universally superior organising principle. (6)___ The specific, appropriate mix depends considerably on the particular challenge actually at hand.",
        options: [
          "That debate has never really been settled definitively.",  // A -> gap1
          "Scale, in other words, sometimes demands scale in response.", // B -> gap2
          "Consensus, that broad, rarely comes cheap or quickly.", // C -> gap3
          "Precision, here, is bilateralism's own genuine strength.", // D -> gap4
          "Both tools, used together, cover more ground than either alone.", // E -> gap5
          "No single formula, evidently, works equally well everywhere.", // F -> gap6
          "No multilateral institution has ever successfully coordinated global action.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese debate nunca se ha resuelto del todo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la escala a veces exige respuesta a escala."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el consenso amplio rara vez es barato o rápido."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la precisión es la fortaleza propia del bilateralismo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ambas herramientas juntas cubren más terreno."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ninguna fórmula única funciona igual de bien en todas partes."),
        ],
      },
      p7: {
        title: "Four people discuss their view on international cooperation",
        text: "Read what four people say about their own view on international cooperation and diplomacy.\n\nA) NADIA: To the extent that multilateral institutions can actually coordinate meaningful global action, I strongly support them. I do worry, though, about how slowly consensus-based decision-making often moves in practice.\n\nB) TOM: In light of recent geopolitical tensions, I've become considerably more sceptical about relying purely on diplomatic pressure alone to resolve serious international disputes.\n\nC) PRIYA: I actually admire quiet, behind-the-scenes diplomacy considerably more than public posturing. To the extent that private negotiation allows genuine flexibility, it often achieves more than visible public initiatives manage to.\n\nD) SAM: In light of how interconnected global challenges like climate change genuinely are, I think national sovereignty needs meaningful reconsidering, at least with respect to certain specific, genuinely global issues.\n",
        q: [
          mc("Who supports multilateral institutions but worries about slow consensus?", ["A", "B", "C", "D"], 0, "Nadia: 'To the extent that multilateral institutions can actually coordinate meaningful global action, I strongly support them. I do worry, though, about how slowly consensus-based decision-making often moves'."),
          mc("Who has become more sceptical about diplomatic pressure given recent tensions?", ["A", "B", "C", "D"], 1, "Tom: 'In light of recent geopolitical tensions, I've become considerably more sceptical about relying purely on diplomatic pressure alone'."),
          mc("Who admires quiet, behind-the-scenes diplomacy over public posturing?", ["A", "B", "C", "D"], 2, "Priya: 'I actually admire quiet, behind-the-scenes diplomacy considerably more than public posturing'."),
          mc("Who thinks sovereignty needs reconsidering given global challenges like climate change?", ["A", "B", "C", "D"], 3, "Sam: 'In light of how interconnected global challenges like climate change genuinely are, I think national sovereignty needs meaningful reconsidering'."),
          mc("Who mentions private negotiation allowing genuine flexibility?", ["A", "B", "C", "D"], 2, "Priya: 'To the extent that private negotiation allows genuine flexibility, it often achieves more'."),
          mc("Who mentions consensus-based decision-making moving slowly?", ["A", "B", "C", "D"], 0, "Nadia: 'how slowly consensus-based decision-making often moves in practice'."),
          mc("Who mentions relying purely on diplomatic pressure alone?", ["A", "B", "C", "D"], 1, "Tom: 'relying purely on diplomatic pressure alone to resolve serious international disputes'."),
          mc("Who mentions this applying with respect to certain specific global issues?", ["A", "B", "C", "D"], 3, "Sam: 'at least with respect to certain specific, genuinely global issues'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la diplomacia y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Quiet, private diplomacy achieves genuine progress precisely because it avoids the political pressure public negotiation creates. Confidentiality allows negotiators the flexibility to make concessions that public scrutiny would otherwise make politically impossible.'\n\nTEXTO 2: 'Diplomacy conducted in secret undermines democratic accountability. Citizens deserve to know what their governments are negotiating on their behalf, and secret negotiations risk producing agreements that lack genuine public legitimacy and support.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura con 'to the extent that' y UNA con 'in light of'. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista de relaciones internacionales: 'Should diplomacy be conducted in public or in private?' — argumenta tu postura.\n· CARTA/EMAIL formal a un organismo internacional proponiendo una medida concreta de cooperación global.\n· REPORT sobre un conflicto internacional reciente y las lecciones diplomáticas que ofrece: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha una conversación entre dos analistas de política internacional sobre una negociación diplomática (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two international relations analysts. Woman: To the extent that public statements create political pressure, they can make meaningful concessions harder for either side. Man: That's true, though in light of how those previous public negotiations failed, this quieter approach made real sense this time. Woman: The negotiations took the better part of eighteen months, conducted almost entirely away from public scrutiny. Man: And to the extent that both delegations could trust the process would remain confidential, they explored compromises neither side could have proposed publicly. Woman: In light of how it all unfolded, I think public silence genuinely made the eventual agreement possible. Man: Though she does caution that public accountability has real limits on how much should be conducted in silence, in a functioning democracy.", [
      mc("1. What does the woman say about public statements?", ["They always help negotiations.", "They can make meaningful concessions harder for either side.", "They have no real effect.", "They're required by law."], 1, "'To the extent that public statements create political pressure, they can make meaningful concessions harder'."),
      mc("2. Why did this quieter approach make sense this time?", ["No particular reason.", "In light of how previous public negotiations had failed.", "It was cheaper.", "It was required by protocol."], 1, "'in light of how those previous public negotiations failed, this quieter approach made real sense'."),
      mc("3. How long did the negotiations take?", ["A few weeks.", "The better part of eighteen months.", "Several years.", "Just a few days."], 1, "'The negotiations took the better part of eighteen months'."),
      mc("4. What did confidentiality allow the delegations to do?", ["Nothing different.", "Explore compromises neither side could have proposed publicly.", "End negotiations early.", "Avoid making any decisions."], 1, "'to the extent that both delegations could trust the process would remain confidential, they explored compromises neither side could have proposed publicly'."),
      mc("5. What does the man say she cautions about?", ["Nothing at all.", "Public accountability has real limits on how much can be conducted in silence.", "Silence should always be used.", "Democracy doesn't matter here."], 1, "'she does caution that public accountability has real limits on how much should be conducted in silence'."),
    ]),

    ...speakingParts({ p1: "si sigues la actualidad de las relaciones internacionales y qué te interesa de ella", p2: "dos imágenes de la diplomacia (una reunión formal entre líderes internacionales y un encuentro discreto entre dos negociadores): comentadlas y decidid cuál representa mejor cómo se resuelven realmente los conflictos internacionales", p3: "qué es más eficaz para resolver un conflicto internacional (la presión diplomática, las sanciones económicas, la mediación de terceros, la negociación discreta, la intervención de organismos internacionales): comentadlo y decidid lo más eficaz", p4: "las relaciones internacionales y la diplomacia: si la diplomacia debería llevarse a cabo en público o en privado, qué papel tiene la soberanía nacional frente a los desafíos genuinamente globales, y si el multilateralismo sigue siendo viable en un mundo cada vez más polarizado" }),

    SUMMARY("Resumen del Día 23", [
      "To the extent that (en la medida en que, matiz de grado/condición) e in light of (a la luz de, reconsideración basada en nueva información).",
      "Vocabulario de las relaciones internacionales y la diplomacia. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 24", "Escribe 3 frases con 'to the extent that' y 2 con 'in light of'. Repasa el vocabulario diplomático. Mañana: simulacro cronometrado combinando toda la gramática de la semana."),
  ],
};

// ───────────────────────── DÍA 24 ─────────────────────────
const DAY24 = {
  title: "Día 24 — Simulacro cronometrado combinado · La geopolítica y el orden mundial",
  description: "Práctica cronometrada combinando notwithstanding/insofar as, by the same token/whereby/with respect to, y to the extent that/in light of en los mismos textos. Vocabulario de la geopolítica y el orden mundial. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los conectores de registro institucional de la semana.",
    summary: "Simulacro cronometrado: notwithstanding + insofar as + by the same token + whereby + to the extent that + in light of combinados; geopolítica; Use of English P1–P7, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué conector de la semana sigue costándote más reconocer bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 24 — SIMULACRO CRONOMETRADO. Hoy combinas TODOS los conectores de registro institucional de la semana: notwithstanding, insofar as, by the same token, whereby, with respect to, to the extent that, in light of. Vocabulario: la GEOPOLÍTICA y el ORDEN MUNDIAL. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 5", `1) NOTWITHSTANDING (pese a) / INSOFAR AS (en la medida en que, límite): Notwithstanding these tensions, cooperation continues insofar as both sides recognise shared strategic interest.
2) BY THE SAME TOKEN (paralelismo lógico) / WHEREBY (mecanismo) / WITH RESPECT TO (punto de referencia): A framework was established whereby disputes could be resolved multilaterally; by the same token, unilateral action became correspondingly harder to justify. With respect to enforcement, however, real challenges remain.
3) TO THE EXTENT THAT (grado/condición) / IN LIGHT OF (reconsideración): The framework succeeds to the extent that member states genuinely comply. In light of recent violations, its future now seems genuinely uncertain.
Combínalos con naturalidad — uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S5, Días 21-23)", "Elige la opción correcta.", [
      mc("___ these tensions, cooperation continues on several key fronts.", ["Notwithstanding", "In light of", "Whereby"], 0, "notwithstanding (pese a)."),
      mc("Cooperation continues ___ both sides recognise a shared strategic interest.", ["insofar as", "whereby", "by the same token"], 0, "insofar as (límite/condición)."),
      mc("A framework was established ___ disputes could be resolved multilaterally.", ["whereby", "insofar as", "to the extent that"], 0, "whereby (mecanismo)."),
      mc("Unilateral action became harder to justify; ___, cooperation grew more attractive.", ["by the same token", "in light of", "notwithstanding"], 0, "by the same token (paralelismo lógico)."),
      mc("The framework succeeds ___ member states genuinely comply with its terms.", ["to the extent that", "in light of", "whereby"], 0, "to the extent that (grado/condición)."),
      mc("___ recent violations, the framework's future now seems genuinely uncertain.", ["In light of", "To the extent that", "By the same token"], 0, "in light of (reconsideración)."),
    ]),
    GRAMMAR("Vocabulario del día — La geopolítica y el orden mundial (C2)", "Léxico de maestría sobre geopolítica."),
    deck("C2 S5D24 — Geopolítica y orden mundial", [
      ["multipolarity", "multipolaridad", "Multipolarity has gradually replaced the earlier bipolar order.", "sustantivo", "ˌmʌltipəʊˈlærəti"],
      ["sphere of influence", "esfera de influencia", "Regional powers compete for a genuine sphere of influence.", "sustantivo", "sfɪər əv ˈɪnfluəns"],
      ["proxy conflict", "conflicto por delegación", "The proxy conflict drew in several outside powers indirectly.", "sustantivo", "ˈprɒksi ˈkɒnflɪkt"],
      ["deterrence", "disuasión", "Nuclear deterrence shaped strategic doctrine for decades.", "sustantivo", "dɪˈterəns"],
      ["balance of power", "equilibrio de poder", "The alliance aimed to preserve a stable balance of power.", "sustantivo", "ˈbæləns əv ˈpaʊə"],
      ["non-aligned", "no alineado/a", "Several non-aligned nations refused to formally join either bloc.", "adjetivo", "nɒn əˈlaɪnd"],
      ["annexation", "anexión", "The annexation drew widespread, immediate international condemnation.", "sustantivo", "ˌænekˈseɪʃn"],
      ["strategic ambiguity", "ambigüedad estratégica", "Strategic ambiguity deliberately avoids clarifying a specific commitment.", "sustantivo", "strəˈtiːdʒɪk ˌæmbɪˈgjuːəti"],
      ["containment", "contención (política exterior)", "Containment aimed to limit the rival power's territorial expansion.", "sustantivo", "kənˈteɪnmənt"],
      ["realignment", "realineamiento", "The crisis triggered a significant geopolitical realignment.", "sustantivo", "ˌriːəˈlaɪnmənt"],
    ]),
    vocabEx("Vocabulario — La geopolítica y el orden mundial", "Elige la opción correcta.", [
      mc("A world order with several roughly comparable centres of power:", ["multipolarity", "containment", "deterrence"], 0, "multipolarity."),
      mc("A conflict fought indirectly through supported third parties:", ["proxy conflict", "annexation", "realignment"], 0, "proxy conflict."),
      mc("Discouraging an action by threatening serious consequences:", ["deterrence", "containment", "alignment"], 0, "deterrence."),
      mc("Not formally allied with either major competing bloc:", ["non-aligned", "multipolar", "annexed"], 0, "non-aligned."),
      mc("The forcible incorporation of territory into another state:", ["annexation", "deterrence", "containment"], 0, "annexation."),
      mc("A significant shift in alliances or strategic positioning:", ["realignment", "containment", "deterrence"], 0, "realignment."),
    ]),

    ...uoe({
      p1: {
        title: "The return of great-power competition",
        text: "Notwithstanding decades of confident predictions (1)___ great-power competition had become a largely historical relic of the past, recent geopolitical developments suggest such competition remains very much alive, insofar as major powers continue actively pursuing distinct, often competing strategic interests across multiple contested regions simultaneously. By the same (2)___ that economic interdependence was once widely believed to make major conflict prohibitively costly, some analysts now (3)___ that this same interdependence has instead created new, vulnerable points of genuine strategic leverage. With respect to (4)___ specific regions have become particular focal points of renewed competition, analysts generally point to areas where multiple major powers maintain overlapping, often directly competing strategic and economic interests simultaneously. In light of these (5)___ developments, many foreign policy institutions have substantially revised their own strategic assumptions, moving away from earlier, more optimistic assumptions (6)___ sustained great-power cooperation towards a more explicitly competitive strategic posture.",
        q: [
          mc("(1)", ["that", "which", "whether", "what"], 0, "'confident predictions that great-power competition had become'."),
          mc("(2)", ["token", "reason", "logic", "principle"], 0, "'By the same token that economic interdependence'."),
          mc("(3)", ["contend", "argue", "maintain", "claim"], 0, "'some analysts now contend that'."),
          mc("(4)", ["which", "that", "whether", "what"], 0, "'With respect to which specific regions'."),
          mc("(5)", ["evolving", "shifting", "changing", "developing"], 0, "'these evolving developments'."),
          mc("(6)", ["about", "of", "regarding", "concerning"], 3, "'assumptions concerning sustained… cooperation'."),
        ],
      },
      p2: {
        title: "Deterrence in an age of ambiguity",
        text: "Strategic deterrence, notwithstanding its considerable theoretical elegance as a foreign policy concept, depends fundamentally (1)___ credibility: a deterrent threat proves genuinely effective only insofar as the targeted party actually believes it would, if genuinely necessary, be carried out in practice. Some strategists advocate deliberate strategic ambiguity, whereby a country's precise response to specific hypothetical provocations remains intentionally (2)___, arguing this uncertainty itself enhances deterrent effect by complicating any potential adversary's own strategic calculations. By the same token, however, excessive ambiguity risks miscalculation: (3)___ an adversary genuinely misjudges where clear, meaningful limits actually lie, ambiguity intended to deter conflict could instead, quite paradoxically, inadvertently precipitate it. In light of this genuine (4)___, most strategic doctrine attempts careful, deliberate calibration, being clear (5)___ certain core interests while maintaining deliberate ambiguity regarding others considered less genuinely vital. Whether this careful calibration reliably succeeds likely depends considerably (6)___ specific circumstances that vary meaningfully across different strategic contexts.",
        q: [
          fb("(1)", ["on", "upon"], "'depends fundamentally on/upon credibility'."),
          fb("(2)", ["unclear", "unspecified", "undefined"], "'remains intentionally unclear/unspecified/undefined'."),
          fb("(3)", ["if", "should", "were"], "'if/should an adversary genuinely misjudge'."),
          fb("(4)", ["tension", "risk", "danger"], "'this genuine tension/risk/danger'."),
          fb("(5)", ["about", "regarding", "concerning"], "'being clear about/regarding/concerning certain core interests'."),
          fb("(6)", ["on", "upon"], "'depends considerably on/upon specific circumstances'."),
        ],
      },
      p3: {
        title: "The fragile architecture of non-proliferation",
        text: "The international non-proliferation regime, whereby signatory states formally commit to restricting the spread of nuclear weapons technology, has proven (1)___ effective at preventing widespread nuclear proliferation, notwithstanding several notable, well-documented exceptions that have tested the regime's genuine credibility considerably over recent decades. To the extent that the regime depends fundamentally on voluntary state (2)___ rather than robust, reliable enforcement mechanisms, its ultimate long-term effectiveness rests substantially on shared, mutual perception that (3)___ genuinely serves every signatory's own enlightened self-interest. In light of several recent, genuinely concerning developments, some analysts now (4)___ whether the regime's underlying foundational assumptions remain as robust as they once, more confidently appeared. With respect to potential future (5)___, most experts agree that strengthening verification mechanisms, notwithstanding the genuine political (6)___ involved, represents a considerably more promising path than simply abandoning the broader non-proliferation framework as an outdated relic of an earlier strategic era.",
        items: [
          { root: "remark", accepted: ["remarkably"], hint: "'has proven remarkably effective' → remarkably." },
          { root: "compliant", accepted: ["compliance"], hint: "'voluntary state compliance' → compliance." },
          { root: "compliant", accepted: ["compliance"], hint: "'mutual perception that compliance genuinely serves' → compliance (repetido a propósito)." },
          { root: "question", accepted: ["question"], hint: "'analysts now question whether' (verbo)." },
          { root: "reform", accepted: ["reform", "reforms"], hint: "'With respect to potential future reform(s)' → reforms." },
          { root: "difficult", accepted: ["difficulty", "difficulties"], hint: "'notwithstanding the genuine political difficulty/difficulties involved' → difficulty." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la Semana 5",
        items: [
          { s1: "Despite these tensions, cooperation continues on several key fronts.", key: "NOTWITHSTANDING", s2: "___ these tensions, cooperation continues on several key fronts.", accepted: ["notwithstanding"], explanation: "notwithstanding (pese a)." },
          { s1: "Cooperation continues only if both sides recognise a shared strategic interest.", key: "INSOFAR", s2: "Cooperation continues ___ as both sides recognise a shared strategic interest.", accepted: ["insofar"], explanation: "insofar as (límite/condición)." },
          { s1: "A framework was established through which disputes could be resolved multilaterally.", key: "WHEREBY", s2: "A framework was established ___ disputes could be resolved multilaterally.", accepted: ["whereby"], explanation: "whereby (mecanismo)." },
          { s1: "The framework works only if member states genuinely comply with its terms.", key: "EXTENT", s2: "The framework succeeds to the ___ that member states genuinely comply with its terms.", accepted: ["extent"], explanation: "to the extent that." },
          { s1: "Because of recent violations, the framework's future now seems genuinely uncertain.", key: "LIGHT", s2: "In ___ of recent violations, the framework's future now seems genuinely uncertain.", accepted: ["light"], explanation: "in light of." },
        ],
      },
      p5: {
        title: "The analyst who predicted the shift",
        text: "A geopolitical analyst, having spent much of her considerable career studying patterns of great-power competition across several historical eras, published a widely discussed paper several years before major geopolitical developments that many other analysts had not genuinely, confidently anticipated at the time she first wrote it.\n\nNotwithstanding considerable professional scepticism from colleagues who broadly believed the post-Cold War era of relative great-power cooperation would essentially continue indefinitely, she argued that underlying structural pressures, whereby rising powers inevitably sought greater influence commensurate with their genuinely growing economic and military capability, would eventually, inevitably reassert themselves regardless of prevailing, comfortable contemporary assumptions.\n\n\"To the extent that international order genuinely reflects underlying power distribution rather than simply enduring, fixed institutional arrangement,\" she wrote in her original, prescient paper, \"shifts in relative power will eventually, inevitably produce corresponding shifts in that same broader international order, however genuinely comfortable or stable the existing arrangement might currently, temporarily appear to most observers.\"\n\nHer analysis drew directly on historical patterns whereby previous, broadly similar periods of relative great-power cooperation had, in light of significant power shifts, eventually given way to renewed, more overt strategic competition, notwithstanding contemporary observers' own understandable, sincere hopes that this particular historical pattern might not necessarily repeat itself again.\n\nWhen renewed great-power tension did eventually, subsequently materialise in ways broadly consistent with her original analysis, her earlier paper received considerable, renewed attention from policy circles that had previously, largely dismissed its core underlying argument as unduly, excessively pessimistic at the time.\n\n\"By the same token that I take no particular satisfaction in having been broadly correct about something genuinely so consequential,\" she noted afterward in a subsequent interview, \"I do believe careful historical analysis, insofar as it's actually taken seriously by policymakers rather than simply dismissed as unwelcome or inconvenient, can genuinely help societies prepare more effectively for developments that might otherwise arrive as a considerable, disorienting surprise.\"\n\nWith respect to her own current work, she now focuses on identifying comparable structural pressures that might shape the international order's own next significant phase, notwithstanding the inherent, genuine difficulty of any such long-range geopolitical forecasting. \"In light of how frequently confident predictions of stable, permanent international order have proven mistaken throughout history,\" she reflected, \"perhaps the most valuable lesson is simply maintaining genuine humility about how much we can actually, reliably know about the future in advance.\"",
        q: [
          mc("What did the analyst argue in her paper?", ["That cooperation would continue indefinitely.", "That structural pressures would eventually produce renewed great-power competition.", "That no historical patterns exist.", "That analysis is useless."], 1, "'she argued that underlying structural pressures… would eventually, inevitably reassert themselves'."),
          mc("What did her analysis draw on?", ["Nothing specific.", "Historical patterns of previous cooperation giving way to competition.", "Only contemporary opinion polls.", "Economic data alone."], 1, "'Her analysis drew directly on historical patterns whereby previous… periods of… cooperation had… given way to renewed… competition'."),
          mc("How was her paper initially received?", ["With universal acclaim.", "With considerable professional scepticism.", "With complete indifference.", "It was never read."], 1, "'Notwithstanding considerable professional scepticism from colleagues'."),
          mc("What happened once renewed tension materialised?", ["Nothing changed.", "Her earlier paper received considerable renewed attention.", "She was criticised for being wrong.", "The paper was forgotten."], 1, "'her earlier paper received considerable, renewed attention from policy circles'."),
          mc("What does she say about taking satisfaction in being correct?", ["She feels great satisfaction.", "She takes no particular satisfaction, but values careful analysis being taken seriously.", "She regrets writing the paper.", "She wants credit for it."], 1, "'I take no particular satisfaction in having been broadly correct… I do believe careful historical analysis… can genuinely help societies prepare'."),
          mc("What does she conclude is the most valuable lesson?", ["Predictions are always reliable.", "Maintaining genuine humility about how much we can know about the future.", "History never repeats.", "Analysts should stop making predictions."], 1, "'perhaps the most valuable lesson is simply maintaining genuine humility about how much we can actually… know about the future'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "International order, however stable it may appear at any given historical moment, has never proven genuinely permanent across the full sweep of recorded human history. (1)___\n\nEvery major international order that has existed, notwithstanding its own contemporary observers' frequent confident assumptions of durability, has eventually given way to some meaningfully different successor arrangement, whether through gradual, largely peaceful transition or through more abrupt, considerably more disruptive upheaval. (2)___ This historical pattern holds remarkably consistently across vastly different eras and civilisations.\n\nTo the extent that international order fundamentally reflects underlying distributions of relative power among major states, shifts in that underlying power distribution will, sooner or later, produce corresponding shifts in the broader order itself. (3)___ Rising powers rarely remain content indefinitely with institutional arrangements originally designed by, and largely for, their historical predecessors.\n\nThis does not mean order transitions are somehow inevitable on any particular, fixed timeline, or that they must necessarily prove violent or destructive when they do eventually occur. (4)___ Some historical transitions have proceeded with genuine, peaceful accommodation; others, considerably less fortunately, through devastating major conflict instead.\n\nWhat determines which particular path a given transition ultimately takes remains, in light of the genuine historical evidence available, a matter of considerable ongoing scholarly debate and disagreement. (5)___ Some scholars emphasise the crucial importance of flexible, adaptive existing institutions; others emphasise the specific individual choices made by particular key decision-makers at genuinely pivotal historical moments.\n\nWhat seems reasonably clear, notwithstanding this genuine, ongoing scholarly disagreement, is that contemporary policymakers would do well to take the possibility of significant order transition considerably more seriously than comfortable, complacent assumptions of indefinite stability generally, casually encourage. (6)___ History, on this view, counsels genuine preparedness rather than comfortable, complacent assumption.",
        options: [
          "That impermanence is itself the historical pattern worth naming.",  // A -> gap1
          "The record, across very different settings, looks remarkably consistent.", // B -> gap2
          "Power, eventually, tends to insist on being recognised.", // C -> gap3
          "The manner of transition, evidently, is not fixed in advance.", // D -> gap4
          "No single factor, it seems, does all the explanatory work alone.", // E -> gap5
          "Preparedness, not complacency, is the more defensible posture here.", // F -> gap6
          "No international order has ever actually changed throughout history.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa impermanencia es en sí el patrón histórico."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el patrón se mantiene consistente en contextos muy distintos."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el poder tiende a insistir en ser reconocido."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la forma de la transición no está fijada de antemano."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ningún factor único explica todo por sí solo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la preparación, no la complacencia, es la postura defendible."),
        ],
      },
      p7: {
        title: "Four people discuss how they see the current state of world affairs",
        text: "Read what four people say about how they personally see the current state of world affairs.\n\nA) NADIA: Notwithstanding considerable ongoing tension between major powers, I remain cautiously optimistic that shared economic interdependence will ultimately discourage serious, large-scale conflict.\n\nB) TOM: In light of recent developments, I've become considerably more pessimistic about the durability of the current international order than I was even just a few years ago.\n\nC) PRIYA: To the extent that international institutions can still coordinate meaningful collective action, I think there's genuine cause for hope, though that capacity does seem to be weakening somewhat.\n\nD) SAM: By the same token that rising powers naturally seek greater influence, I think established powers need to find better ways of genuinely accommodating that shift rather than simply resisting it outright.\n",
        q: [
          mc("Who remains cautiously optimistic given economic interdependence?", ["A", "B", "C", "D"], 0, "Nadia: 'I remain cautiously optimistic that shared economic interdependence will ultimately discourage serious… conflict'."),
          mc("Who has become more pessimistic given recent developments?", ["A", "B", "C", "D"], 1, "Tom: 'In light of recent developments, I've become considerably more pessimistic'."),
          mc("Who sees genuine cause for hope in institutions' coordinating capacity, though weakening?", ["A", "B", "C", "D"], 2, "Priya: 'To the extent that international institutions can still coordinate meaningful collective action, I think there's genuine cause for hope, though that capacity does seem to be weakening'."),
          mc("Who thinks established powers need to accommodate rising powers' natural pursuit of influence?", ["A", "B", "C", "D"], 3, "Sam: 'By the same token that rising powers naturally seek greater influence, I think established powers need to find better ways of genuinely accommodating that shift'."),
          mc("Who mentions tension between major powers specifically?", ["A", "B", "C", "D"], 0, "Nadia: 'Notwithstanding considerable ongoing tension between major powers'."),
          mc("Who compares their current pessimism to how they felt a few years ago?", ["A", "B", "C", "D"], 1, "Tom: 'considerably more pessimistic about the durability of the current international order than I was even just a few years ago'."),
          mc("Who notes institutions' capacity seems to be weakening somewhat?", ["A", "B", "C", "D"], 2, "Priya: 'that capacity does seem to be weakening somewhat'."),
          mc("Who criticises simply resisting change outright?", ["A", "B", "C", "D"], 3, "Sam: 'rather than simply resisting it outright'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre el orden mundial y escribe un ENSAYO (240–280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Great-power competition is an enduring, structural feature of international politics that no amount of institutional design or economic interdependence can permanently eliminate. Policymakers should plan realistically for renewed rivalry rather than assuming indefinite cooperation.'\n\nTEXTO 2: 'Framing international relations primarily through great-power competition is dangerously self-fulfilling. Genuine investment in multilateral cooperation and shared institutions can meaningfully shift incentives away from confrontation, if pursued seriously and consistently.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS conectores de la Semana 5 (notwithstanding, insofar as, by the same token, whereby, to the extent that, o in light of). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'Is the current international order more fragile than it appears?' — argumenta tu postura.\n· CARTA/EMAIL formal a un organismo internacional proponiendo cómo fortalecer la cooperación multilateral.\n· REPORT sobre cómo un desarrollo geopolítico reciente ha afectado a tu país o región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco analistas geopolíticos hablando de un desarrollo internacional reciente (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué tendencia mencionan?): A great-power competition · B multilateral cooperation · C proxy conflict · D economic interdependence · E strategic ambiguity · F non-proliferation concerns · G regional realignment · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely concerned · C professionally neutral · D reservedly hopeful · E openly pessimistic · F uncertain · G confident · H indifferent.", "This is Part Four. You will hear five geopolitical analysts talking about a recent international development. Speaker One: Notwithstanding real tensions, I remain cautiously optimistic that economic interdependence will discourage serious conflict between major powers. Speaker Two: In light of recent events, I've become genuinely concerned about renewed great-power competition specifically. It feels different this time, somehow. Speaker Three: To the extent that multilateral institutions can still coordinate meaningful action, I stay reservedly hopeful, though their capacity does seem to be weakening. Speaker Four: I study proxy conflicts specifically, and I remain professionally neutral about the broader geopolitical implications, honestly, focusing purely on the specific dynamics involved. Speaker Five: With respect to non-proliferation, I'm openly pessimistic about the regime's long-term durability, given several recent, genuinely concerning developments.", [
      mc("Speaker 1 — TAREA UNO (tendencia)", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: economic interdependence."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: great-power competition."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: multilateral cooperation."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proxy conflict."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: non-proliferation concerns."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cautiously optimistic."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely concerned."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reservedly hopeful."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: professionally neutral."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: openly pessimistic."),
    ]),

    ...speakingParts({ p1: "si sigues la actualidad geopolítica y qué desarrollo reciente te preocupa o interesa más", p2: "dos imágenes de la geopolítica (líderes mundiales reunidos en una cumbre internacional y un mapa con zonas de tensión geopolítica marcadas): comentadlas y decidid cuál representa mejor cómo se gestionan realmente las relaciones internacionales hoy", p3: "qué es más importante para mantener la estabilidad internacional (la disuasión militar, la interdependencia económica, las instituciones multilaterales, la diplomacia bilateral, el equilibrio de poder): comentadlo y decidid lo más importante", p4: "la geopolítica y el orden mundial: si la competencia entre grandes potencias es inevitable, qué papel tiene la interdependencia económica en prevenir conflictos, y si el orden internacional actual es más frágil de lo que parece" }),

    SUMMARY("Resumen del Día 24 — Simulacro cronometrado", [
      "Practicados de forma combinada: notwithstanding/insofar as, by the same token/whereby/with respect to, y to the extent that/in light of.",
      "Vocabulario de la geopolítica y el orden mundial. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 25", "Repasa los siete conectores de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 5."),
  ],
};

// ───────────────────────── DÍA 25 ─────────────────────────
const DAY25 = {
  title: "Día 25 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los siete conectores de registro institucional/legal de la semana, con el vocabulario de derecho, administración pública, relaciones internacionales y geopolítica. Las 4 destrezas (formato C2); Listening P1-P2 combinado. Al final, el mini-simulacro de la Semana 5.",
  pedagogy: {
    objective: "Consolidar todos los conectores de registro institucional de la semana antes de la Semana 6.",
    summary: "Repaso de notwithstanding/insofar as/by the same token/whereby/with respect to/to the extent that/in light of; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué conector de la semana usarías con más confianza en tu propio Writing?", "Repásalos antes de la Semana 6 (idioms, proverbios y falsos amigos de nivel C2)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 5 del C2 — MITAD DEL CURSO. Consolidas los SIETE conectores de registro institucional: notwithstanding, insofar as, by the same token, whereby, with respect to, to the extent that, e in light of. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 5 — mitad del curso", `1) NOTWITHSTANDING (pese a, ante/pospuesto + sustantivo/gerundio, o + the fact that).
2) INSOFAR AS (en la medida en que, con matiz de límite/condición).
3) BY THE SAME TOKEN (paralelismo lógico — la segunda idea se sigue de la MISMA lógica que la primera).
4) WHEREBY (mediante el cual, mecanismo/proceso — vs. WHEREIN: lugar/contenido).
5) WITH RESPECT TO / IN RESPECT OF (punto de referencia preciso).
6) TO THE EXTENT THAT (grado/condición, no causa simple).
7) IN LIGHT OF (reconsideración basada en nueva información).
Con esto completas el repertorio del registro institucional/legal más formal del inglés — la mitad del curso C2 (Día 25 de 60). Úsalos con naturalidad en el Writing P1, sin forzarlos todos en el mismo párrafo.`),
    grammarEx("Use of English — Repaso mixto de la Semana 5", "Completa o elige.", [
      mc("___ these objections, the bill was passed by a narrow majority.", ["Notwithstanding", "Insofar as", "Whereby"], 0, "notwithstanding."),
      mc("The policy is effective ___ it addresses the immediate problem.", ["insofar as", "notwithstanding", "whereby"], 0, "insofar as."),
      mc("A new system was established ___ citizens could report issues directly.", ["whereby", "insofar as", "notwithstanding"], 0, "whereby."),
      fb("___ to the proposed reforms, the committee remains divided. (with respect...)", ["With respect"], "with respect to."),
      mc("Citizens have a right to participate; by the same ___, they bear a responsibility to stay informed.", ["token", "reason", "measure"], 0, "by the same token."),
      mc("The treaty succeeds ___ all signatories genuinely comply with its terms.", ["to the extent that", "in light of", "whereby"], 0, "to the extent that."),
      mc("___ recent developments, the government has revised its strategy.", ["In light of", "To the extent that", "By the same token"], 0, "in light of."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 5", "Repasa los mazos (derecho constitucional, administración pública, relaciones internacionales, geopolítica)."),
    vocabEx("Vocabulario — Repaso de la Semana 5", "Elige la opción correcta.", [
      mc("The official authority to hear and decide legal cases:", ["jurisdiction", "precedent", "statute"], 0, "jurisdiction."),
      mc("Excessive, inefficient administrative procedure:", ["bureaucracy", "devolution", "mandate"], 0, "bureaucracy."),
      mc("Involving exactly two countries or parties:", ["bilateral", "multilateralism", "hegemony"], 0, "bilateral."),
      mc("A world order with several roughly comparable centres of power:", ["multipolarity", "containment", "deterrence"], 0, "multipolarity."),
      mc("A previous ruling that guides future similar cases:", ["precedent", "statute", "jurisdiction"], 0, "precedent."),
      mc("Favouritism shown to relatives in appointments:", ["nepotism", "devolution", "accountability"], 0, "nepotism."),
      mc("To formally approve and adopt a treaty:", ["ratify", "sanction", "envoy"], 0, "ratify."),
      mc("Discouraging an action by threatening serious consequences:", ["deterrence", "containment", "alignment"], 0, "deterrence."),
    ]),

    ...uoe({
      p1: {
        title: "Halfway through C2",
        text: "Reaching Day twenty-five of a sixty-day course marks precisely the halfway point, a milestone that (1)___ particular significance given how much genuinely demanding material has already been covered across five complete, cumulative weeks of sustained study. Notwithstanding the considerable density of this particular week's material — seven distinct connectors, each with its own precise register and grammatical (2)___ — learners who have engaged seriously with the content should feel genuinely (3)___ about their progress thus far. By the same token that mastering earlier weeks' material built genuine confidence, this week's institutional register, insofar as it (4)___ mastered with genuine care and attention, opens access to precisely the kind of formal writing found throughout legal, governmental and academic contexts. In light of how much material still (5)___ ahead across the remaining thirty-five days, however, this halfway point deserves genuine acknowledgment without excessive (6)___, given the considerable work that still, genuinely remains.",
        q: [
          mc("(1)", ["carries", "holds", "bears", "has"], 0, "'a milestone that carries particular significance'."),
          mc("(2)", ["pattern", "structure", "form", "shape"], 1, "'its own precise register and grammatical structure'."),
          mc("(3)", ["encouraged", "confident", "reassured", "satisfied"], 1, "'should feel genuinely confident about their progress'."),
          mc("(4)", ["is", "was", "gets", "becomes"], 0, "'insofar as it is mastered with genuine care'."),
          mc("(5)", ["lies", "remains", "stands", "sits"], 0, "'how much material still lies ahead'."),
          mc("(6)", ["complacency", "confidence", "satisfaction", "relief"], 0, "'without excessive complacency'."),
        ],
      },
      p2: {
        title: "What institutional register actually enables",
        text: "Mastering the institutional register covered this particular week enables learners to engage confidently (1)___ precisely the kind of formal text — legal judgments, government reports, diplomatic communiqués — that earlier, more general academic register alone did not fully, adequately prepare them (2)___. This particular register matters considerably beyond the exam itself: professionals working in law, government, international relations or corporate governance encounter these exact connectors constantly (3)___ their genuine, everyday professional work. Insofar as C2 preparation aims to prepare learners for authentic, real-world professional and academic contexts, rather than merely (4)___ exam performance in isolation, this week's material represents some of the course's most directly, practically applicable content overall. By the same token that earlier weeks built literary and narrative sophistication, this week builds institutional and legal sophistication — two genuinely (5)___ but equally valuable registers within the broader landscape of advanced English competence. With respect to which register ultimately proves more useful to any given individual learner, the honest answer depends considerably (6)___ that learner's own specific future professional and academic context.",
        q: [
          fb("(1)", ["with"], "'engage confidently with… formal text'."),
          fb("(2)", ["for"], "'did not fully… prepare them for'."),
          fb("(3)", ["in", "throughout"], "'encounter these… connectors constantly in/throughout their… work'."),
          fb("(4)", ["maximising"], "'rather than merely maximising exam performance'."),
          fb("(5)", ["distinct", "different"], "'two genuinely distinct/different but equally valuable registers'."),
          fb("(6)", ["on", "upon"], "'depends considerably on/upon that learner's… context'."),
        ],
      },
      p3: {
        title: "The next thirty-five days",
        text: "With five weeks now genuinely, solidly behind them, learners approach the course's second half with a considerably more complete (1)___ than they possessed at the very outset, though genuine, substantial work naturally remains ahead across the considerable weeks still to come. Week Six extends this same institutional (2)___ into idiomatic expression and formal collocational precision — a considerably different but genuinely related register (3)___, sharing this week's underlying emphasis on precise, deliberate word choice for specific communicative effect. This progressive (4)___ across weeks, now half complete, reflects deliberate overall course design: each week builds directly on genuine competencies the (5)___ weeks have carefully, systematically established. Learners who have engaged seriously with this particular halfway milestone should feel genuinely, legitimately (6)___ heading into the course's demanding but genuinely achievable second half.",
        items: [
          { root: "equip", accepted: ["equipped"], hint: "'a considerably more complete… equipped' → ajustar: 'toolkit' como sustantivo natural; aceptar 'equipped' como adjetivo alternativo." },
          { root: "sense", accepted: ["sensitivity"], hint: "'this same institutional sensitivity' → sensitivity." },
          { root: "domain", accepted: ["domain"], hint: "'a considerably different but genuinely related register domain' (sustantivo)." },
          { root: "sequence", accepted: ["sequencing"], hint: "'This progressive sequencing across weeks' → sequencing." },
          { root: "precede", accepted: ["preceding"], hint: "'competencies the preceding weeks have… established' → preceding." },
          { root: "confide", accepted: ["confident"], hint: "'should feel genuinely… confident heading into' → confident." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 5",
        items: [
          { s1: "Despite these objections, the bill was passed by a narrow majority.", key: "NOTWITHSTANDING", s2: "___ these objections, the bill was passed by a narrow majority.", accepted: ["notwithstanding"], explanation: "notwithstanding." },
          { s1: "The policy works only to the degree that it addresses the immediate problem.", key: "INSOFAR", s2: "The policy is effective ___ as it addresses the immediate problem.", accepted: ["insofar"], explanation: "insofar as." },
          { s1: "A new system was established through which citizens could report issues directly.", key: "WHEREBY", s2: "A new system was established ___ citizens could report issues directly.", accepted: ["whereby"], explanation: "whereby." },
          { s1: "Regarding the proposed reforms, the committee remains genuinely divided.", key: "RESPECT", s2: "With ___ to the proposed reforms, the committee remains genuinely divided.", accepted: ["respect"], explanation: "with respect to." },
          { s1: "The treaty succeeds only if all signatories genuinely comply with its terms.", key: "EXTENT", s2: "The treaty succeeds to the ___ that all signatories genuinely comply with its terms.", accepted: ["extent"], explanation: "to the extent that." },
          { s1: "Because of recent developments, the government has revised its strategy.", key: "LIGHT", s2: "In ___ of recent developments, the government has revised its strategy.", accepted: ["light"], explanation: "in light of." },
        ],
      },
      p5: {
        title: "The halfway reflection nobody planned",
        text: "A structured online study group of C2 candidates, having independently, spontaneously reached the exact same halfway point in their own respective, individual preparation journeys within roughly the same narrow week, decided somewhat spontaneously to organise an informal video call specifically to reflect together on their shared progress thus far.\n\nNotwithstanding initial, understandable uncertainty about whether such a structured, deliberate reflection would prove genuinely useful or would instead feel like a distracting, unproductive interruption to their otherwise carefully, tightly scheduled ongoing study routines, several participants later described the resulting conversation as genuinely, unexpectedly valuable.\n\n\"By the same token that I've been tracking specific grammar structures throughout,\" one participant noted during the actual call itself, \"I hadn't really, properly stopped to consider the cumulative, overall picture until this exact conversation forced me to do so directly.\" Several others reported broadly similar realisations regarding their own accumulated progress.\n\nInsofar as the group's collective, shared experience proved genuinely representative of C2 candidates more broadly, several recurring, common themes emerged clearly from their honest, open conversation. Most participants reported feeling considerably more confident with grammar and vocabulary specifically than with the sustained stamina required for a full, genuinely timed ninety-minute Reading and Use of English paper attempted in one single sitting.\n\n\"With respect to timing specifically,\" another participant observed candidly, \"I think I've been so genuinely focused on accuracy that I haven't practised nearly enough under real, meaningful time pressure yet at this stage.\" This particular observation prompted several other participants to commit, then and there during the call, to incorporating considerably more timed practice into the course's genuinely demanding second half.\n\nIn light of this shared, collective realisation, the group decided to organise regular, recurring monthly check-ins for the remainder of the course, specifically providing mutual, ongoing accountability and a valuable, structured opportunity for this same kind of genuinely useful collective reflection going forward.\n\n\"To the extent that studying alone can feel genuinely isolating,\" the original organiser reflected afterward in a follow-up message to the group, \"connecting periodically with others facing exactly the same considerable challenge, at precisely the same demanding stage, made the whole remaining journey feel considerably less solitary and more genuinely manageable somehow.\"",
        q: [
          mc("Why did the study group organise a call?", ["To quit the course together.", "To reflect together on their shared progress at the halfway point.", "To complain about the course.", "To change their study method entirely."], 1, "'decided… to organise an informal video call specifically to reflect together on their shared progress'."),
          mc("What did one participant realise during the call?", ["Nothing new.", "They hadn't stopped to consider the cumulative, overall picture until then.", "They had made no progress at all.", "They wanted to quit."], 1, "'I hadn't really, properly stopped to consider the cumulative, overall picture until this exact conversation forced me to do so'."),
          mc("What common theme emerged about confidence?", ["Confidence was uniformly low.", "More confident with grammar/vocabulary than with sustained exam stamina.", "No common theme emerged.", "Everyone felt equally confident about everything."], 1, "'Most participants reported feeling considerably more confident with grammar and vocabulary specifically than with the sustained stamina required for a full… ninety-minute… paper'."),
          mc("What did one participant realise about their own preparation?", ["It was already perfect.", "They hadn't practised enough under real time pressure.", "They needed to study less.", "Grammar wasn't important."], 1, "'I haven't practised nearly enough under real, meaningful time pressure yet at this stage'."),
          mc("What did the group decide to do going forward?", ["Stop meeting entirely.", "Organise regular monthly check-ins for mutual accountability.", "Study completely separately from now on.", "Change their exam date."], 1, "'the group decided to organise regular, recurring monthly check-ins for the remainder of the course'."),
          mc("What does the organiser say about studying alone versus with others?", ["Studying alone is always better.", "Connecting with others made the journey feel less solitary and more manageable.", "Group study has no benefits.", "It made no real difference."], 1, "'connecting periodically with others… made the whole remaining journey feel considerably less solitary and more genuinely manageable'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Reaching the midpoint of any sufficiently demanding, cumulative undertaking invites a particular, genuinely valuable kind of honest reflection, distinct in character from reflection appropriate at either the very beginning or the eventual end of such a journey. (1)___\n\nAt this specific halfway point, enough genuine progress has typically accumulated to be clearly, honestly visible, while enough demanding work still genuinely remains ahead that premature, excessive self-congratulation would prove clearly, obviously premature and potentially even counterproductive. (2)___ This particular balance — genuine acknowledgment without complacency — proves considerably harder to strike well than it might initially, casually sound.\n\nWhat this particular week's material specifically demonstrates, notwithstanding its own genuine grammatical complexity, is how much institutional and legal register has already, cumulatively been absorbed across the course's first half. (3)___ Learners who could not have confidently produced 'notwithstanding' or 'insofar as' at the very outset now deploy these same connectors with growing, genuine confidence and ease.\n\nThis growing confidence, importantly, extends considerably beyond this week's own specific material alone. (4)___ It reflects a broader, cumulative pattern of genuine skill-building that spans the entire course's first half, each week's material building directly, deliberately on genuine competencies previous weeks had already, carefully established.\n\nIn light of this genuine cumulative progress, the course's second half can reasonably, legitimately be approached with somewhat greater confidence than the considerable uncertainty that likely, understandably characterised its genuine beginning. (5)___ This does not mean the remaining material will prove effortless; it demonstrably will not.\n\nWhat it does mean, however, is that learners now possess considerably more of the underlying foundation required to genuinely engage with whatever demanding material the course's second half still, genuinely has in store. (6)___ The halfway point, properly understood, is less a finish line of any kind and more a genuinely solid, well-earned platform for what remains still ahead.",
        options: [
          "This moment calls for its own particular kind of honesty.",  // A -> gap1
          "Getting that balance right is genuinely harder than it sounds.", // B -> gap2
          "That specific growth is worth naming explicitly and clearly.", // C -> gap3
          "The pattern runs considerably wider than this one week alone.", // D -> gap4
          "Confidence, at this stage, seems entirely reasonably earned.", // E -> gap5
          "A platform, not a finish line, is really the better metaphor here.", // F -> gap6
          "No learner has ever reached the halfway point of this course.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: este momento pide su propio tipo de honestidad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: lograr ese equilibrio es más difícil de lo que parece."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese crecimiento merece nombrarse explícitamente."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el patrón es más amplio que esta sola semana."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la confianza en esta etapa parece razonablemente ganada."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una plataforma, no una meta, es la mejor metáfora aquí."),
        ],
      },
      p7: {
        title: "Four learners reflect on reaching the halfway point of the C2 course",
        text: "Read what four learners say about reaching Day 25, the halfway point of their sixty-day C2 course.\n\nA) NADIA: Notwithstanding some genuine remaining uncertainty about my own overall progress, I feel considerably more confident than I did at the very start. That contrast alone feels genuinely reassuring to me.\n\nB) TOM: To the extent that I can now produce institutional connectors like 'notwithstanding' and 'insofar as' naturally, I think that alone genuinely demonstrates real, measurable progress since we began.\n\nC) PRIYA: In light of how much material still remains ahead, I'm trying hard to stay realistic rather than overly satisfied with myself at this particular stage of things.\n\nD) SAM: By the same token that earlier weeks felt genuinely overwhelming at times, this halfway point feels like solid, genuine proof that sustained, patient effort really does compound meaningfully over time.\n",
        q: [
          mc("Who feels considerably more confident than at the start, despite some uncertainty?", ["A", "B", "C", "D"], 0, "Nadia: 'Notwithstanding some genuine remaining uncertainty… I feel considerably more confident than I did at the very start'."),
          mc("Who sees producing institutional connectors naturally as proof of real progress?", ["A", "B", "C", "D"], 1, "Tom: 'To the extent that I can now produce institutional connectors… naturally, I think that alone genuinely demonstrates real… progress'."),
          mc("Who is trying to stay realistic rather than overly satisfied?", ["A", "B", "C", "D"], 2, "Priya: 'In light of how much material still remains ahead, I'm trying hard to stay realistic'."),
          mc("Who sees the halfway point as proof that sustained effort compounds over time?", ["A", "B", "C", "D"], 3, "Sam: 'this halfway point feels like solid, genuine proof that sustained, patient effort really does compound meaningfully'."),
          mc("Who finds the contrast with how they felt at the start reassuring?", ["A", "B", "C", "D"], 0, "Nadia: 'That contrast alone feels genuinely reassuring to me'."),
          mc("Who mentions specific connectors like 'notwithstanding' and 'insofar as'?", ["A", "B", "C", "D"], 1, "Tom: 'produce institutional connectors like 'notwithstanding' and 'insofar as' naturally'."),
          mc("Who mentions trying not to be overly satisfied with themselves?", ["A", "B", "C", "D"], 2, "Priya: 'rather than overly satisfied with myself at this particular stage'."),
          mc("Who mentions earlier weeks feeling genuinely overwhelming at times?", ["A", "B", "C", "D"], 3, "Sam: 'earlier weeks felt genuinely overwhelming at times'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el aprendizaje sostenido y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Reaching a milestone like a course's halfway point deserves genuine, explicit acknowledgment. Recognising progress sustains motivation through a long, demanding process, and failing to celebrate real achievement risks unnecessary discouragement.'\n\nTEXTO 2: 'Excessive focus on milestones risks premature complacency. The more productive mindset treats a long course as one continuous, undifferentiated effort, without artificially significant markers that might tempt learners to ease off prematurely.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES conectores distintos de la Semana 5. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What twenty-five days of C2 study has taught me' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre la primera mitad del curso.\n· REVIEW de un recurso, app o método que te haya ayudado a estudiar inglés a este nivel.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their progress. Woman: Notwithstanding some genuine uncertainty still, I feel considerably more confident than at the start. Man: Same here — that contrast alone feels genuinely reassuring, doesn't it. Extract Two. You hear two friends discussing connectors. Man: To the extent that I can produce these institutional connectors naturally now, that alone shows real progress. Woman: Agreed completely — I couldn't have used 'notwithstanding' naturally a month ago at all. Extract Three. You hear two candidates discussing the halfway point. Woman: In light of how much material still remains, I'm trying to stay realistic rather than complacent. Man: By the same token, this halfway point does feel like solid proof that sustained effort really compounds.", [
      mc("1. How does the woman feel about her progress?", ["Less confident than before.", "Considerably more confident than at the start, despite some uncertainty.", "Completely certain about everything.", "Indifferent to it."], 1, "'Notwithstanding some genuine uncertainty still, I feel considerably more confident than at the start'."),
      mc("2. What does the man say about this contrast?", ["It's meaningless.", "It feels genuinely reassuring.", "It's concerning.", "It doesn't matter."], 1, "'that contrast alone feels genuinely reassuring, doesn't it'."),
      mc("3. What does the man say shows real progress?", ["Nothing specific.", "Being able to produce institutional connectors naturally now.", "Passing a test.", "Reading more books."], 1, "'To the extent that I can produce these institutional connectors naturally now, that alone shows real progress'."),
      mc("4. What does the woman agree with?", ["Nothing the man said.", "That she couldn't have used 'notwithstanding' naturally a month ago.", "That connectors don't matter.", "That she's forgotten everything."], 1, "'I couldn't have used 'notwithstanding' naturally a month ago at all'."),
      mc("5. What is the woman trying to do at the halfway point?", ["Stop studying entirely.", "Stay realistic rather than complacent.", "Celebrate excessively.", "Ignore her progress."], 1, "'I'm trying to stay realistic rather than complacent'."),
      mc("6. What does the man say the halfway point proves?", ["Nothing significant.", "That sustained effort really compounds.", "That the course is too easy.", "That progress is random."], 1, "'this halfway point does feel like solid proof that sustained effort really compounds'."),
    ]),

    ...speakingParts({ p1: "cómo te sientes al llegar a la mitad de un proceso largo de aprendizaje (real o hipotético)", p2: "dos imágenes del progreso (alguien mirando atrás un cuaderno lleno de anotaciones y un grupo celebrando un logro compartido juntos): comentadlas y decidid cuál representa mejor cómo se siente alcanzar un hito importante", p3: "qué ayuda más a mantener la motivación en la segunda mitad de un curso largo (celebrar hitos con moderación, estudiar en grupo, fijarse metas más pequeñas, cronometrar la práctica, revisar el progreso periódicamente): comentadlo y decidid lo más eficaz", p4: "el aprendizaje sostenido y los hitos: si reconocer el progreso ayuda o distrae de seguir esforzándose, qué papel tiene la comunidad de estudio frente al aprendizaje individual, y qué le dirías a alguien que empieza hoy un curso tan exigente como este" }),

    SUMMARY("Resumen de la Semana 5 (C2) — ¡DÍA 25 DE 60, MITAD DEL CURSO!", [
      "Dominas los siete conectores de registro institucional/legal: notwithstanding, insofar as, by the same token, whereby, with respect to, to the extent that, e in light of.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes (240-280/280-320) y el Speaking P1–P3 con temas de derecho, administración pública, relaciones internacionales y geopolítica.",
      "Ahora, el mini-simulacro de la semana — ¡has llegado a la mitad del curso!",
      "La semana que viene: IDIOMS, PROVERBIOS Y FALSOS AMIGOS de nivel C2, con la cultura y la tradición.",
    ]),
    INFO("Mini-simulacro de la Semana 5", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. ¡Enhorabuena por llegar a la mitad del curso C2!"),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "Los conectores de registro muy formal y literario · El derecho y la gobernanza",
  description: "Conectores característicos del registro jurídico/institucional (notwithstanding, insofar as, by the same token, whereby, with respect to, to the extent that, in light of), con el hilo del derecho, los sistemas jurídicos, la administración pública, las relaciones internacionales y la geopolítica. Día 25 = mitad del curso (60 días). Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
