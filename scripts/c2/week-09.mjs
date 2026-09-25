/**
 * C2 Proficiency · Semana 9 — "Destrezas de integración de textos para el Writing P1
 * (parafrasear, sintetizar, evaluar dos fuentes) y cohesión avanzada · La economía y el medio ambiente".
 * Gramática/destreza nueva: técnicas de paráfrasis y síntesis de fuentes (la tarea más
 * distintiva del Writing P1 de C2), lenguaje de evaluación crítica, y cohesión avanzada
 * (modificadores resuntivos, sustantivos resuntivos, cadenas léxicas).
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

// ───────────────────────── DÍA 41 ─────────────────────────
const DAY41 = {
  title: "Día 41 — Técnicas de paráfrasis y síntesis de fuentes (Writing P1) · La economía circular",
  description: "Sustitución léxica, transformación estructural y verbos de reporte para sintetizar dos fuentes sin copiarlas — la destreza central del Writing P1 de C2. Vocabulario de la economía circular. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar la paráfrasis y la síntesis de dos fuentes, la tarea más distintiva del Writing P1 de C2.",
    summary: "Paráfrasis/síntesis de fuentes; economía circular; Use of English P1-P7, Writing, Listening P1, Speaking P1-P3.",
    commonMistakes: ["copiar frases enteras de la fuente en vez de parafrasear.", "citar las dos fuentes por separado sin sintetizarlas realmente.", "olvidar aportar una perspectiva propia además de resumir."],
    reviewPrompts: ["¿Cómo parafrasearías 'significant improvement' sin usar esas palabras?", "¿Qué verbo de reporte usarías para una fuente que reconoce una limitación?"],
  },
  items: [
    TEXT("🎯 Semana 9: DESTREZAS DE INTEGRACIÓN DE TEXTOS para el Writing P1 (la tarea más distintiva del C2) y COHESIÓN AVANZADA. Hoy: la PARÁFRASIS y la SÍNTESIS de fuentes. Vocabulario: la ECONOMÍA CIRCULAR."),
    GRAMMAR("Técnicas de paráfrasis y síntesis de fuentes (Writing P1)", `El Writing P1 de C2 exige RESUMIR y EVALUAR dos textos fuente — nunca copiarlos. Técnicas clave:
· Sustitución léxica de registro equivalente: significant → considerable/substantial; improve → enhance/strengthen.
· Transformación estructural: activa↔pasiva, nominalización (reduce → a reduction in), cambio de categoría gramatical.
· Verbos de reporte para síntesis: contends, maintains, argues, suggests, highlights, acknowledges, concedes.
· Estructura típica de síntesis: 'According to the first text, X; the second, by contrast, contends Y.'
· REGLA DE ORO: parafrasea SIEMPRE, incluso al citar ideas — copiar frases de la fuente penaliza gravemente en el examen real.`),
    WARN("Error típico del hispanohablante", "Es tentador copiar frases completas de las fuentes dadas porque 'ya están bien escritas' — pero el examen evalúa precisamente tu capacidad de reformular con tu propio léxico y estructura. Practica: toma una frase fuente y cámbiale AL MENOS la estructura gramatical Y el léxico principal, no solo un sinónimo suelto."),
    grammarEx("Use of English — Paráfrasis y síntesis de fuentes", "Elige la mejor paráfrasis o completa.", [
      mc("Fuente: 'The policy significantly reduced waste.' Mejor paráfrasis:", ["The policy led to a considerable reduction in waste.", "The policy significantly reduced waste.", "Waste was significantly reduced by the policy, it said."], 0, "transformación estructural + nominalización, sin copiar léxico clave."),
      mc("The first text ___ that recycling alone cannot solve the crisis.", ["contends", "says", "tells"], 0, "contends (verbo de reporte de registro C2)."),
      mc("The second source, by ___, takes a considerably more optimistic view.", ["contrast", "difference", "opposition"], 0, "by contrast (conector de síntesis)."),
      mc("Fuente: 'Many companies have improved their practices.' Mejor paráfrasis:", ["A considerable number of firms have enhanced their approach.", "Many companies have improved their practices, apparently.", "Companies have improved, many of them, their practices."], 0, "sustitución léxica + reestructuración."),
      mc("Both texts ___ on the need for stronger regulation, despite their differences.", ["converge", "copy", "repeat"], 0, "converge (lenguaje de síntesis)."),
      mc("The first source ___ that some progress has been made, though insufficient.", ["concedes", "denies", "ignores"], 0, "concedes (verbo de reporte matizado)."),
    ]),
    GRAMMAR("Vocabulario del día — La economía circular (C2)", "Léxico de maestría sobre economía circular."),
    deck("C2 S9D41 — La economía circular", [
      ["circular economy", "economía circular", "The circular economy aims to eliminate waste through continuous resource reuse.", "sustantivo", "ˈsɜːkjələ ɪˈkɒnəmi"],
      ["resource depletion", "agotamiento de recursos", "Resource depletion accelerates considerably under current linear consumption patterns.", "sustantivo", "rɪˈsɔːs dɪˈpliːʃn"],
      ["upcycling", "reciclaje creativo, revalorización", "Upcycling transforms discarded materials into products of genuinely higher value.", "sustantivo", "ˈʌpsaɪklɪŋ"],
      ["closed-loop system", "sistema de circuito cerrado", "A closed-loop system returns materials continuously back into productive use.", "sustantivo", "kləʊzd luːp ˈsɪstəm"],
      ["extended producer responsibility", "responsabilidad ampliada del productor", "Extended producer responsibility makes manufacturers accountable for a product's entire lifecycle.", "sustantivo", "ɪkˈstendɪd prəˈdjuːsə rɪˌspɒnsəˈbɪləti"],
      ["decoupling", "desvinculación (crecimiento-recursos)", "Decoupling economic growth from resource consumption remains genuinely difficult to achieve.", "sustantivo", "diːˈkʌplɪŋ"],
      ["waste stream", "flujo de residuos", "Reducing the waste stream requires intervention at every stage of production.", "sustantivo", "weɪst striːm"],
      ["life-cycle assessment", "evaluación del ciclo de vida", "Life-cycle assessment measures a product's total environmental impact from start to finish.", "sustantivo", "laɪf saɪkl əˈsesmənt"],
      ["regenerative design", "diseño regenerativo", "Regenerative design actively restores ecosystems rather than merely minimising harm.", "sustantivo", "rɪˈdʒenərətɪv dɪˈzaɪn"],
      ["material flow analysis", "análisis de flujos de materiales", "Material flow analysis tracks resources from extraction through to eventual disposal.", "sustantivo", "məˈtɪəriəl fləʊ əˈnæləsɪs"],
    ]),
    vocabEx("Vocabulario — La economía circular", "Elige la opción correcta.", [
      mc("An economic model designed to eliminate waste through continuous reuse:", ["circular economy", "waste stream", "decoupling"], 0, "circular economy."),
      mc("Transforming discarded materials into products of higher value:", ["upcycling", "resource depletion", "life-cycle assessment"], 0, "upcycling."),
      mc("Making manufacturers accountable for their product's entire lifecycle:", ["extended producer responsibility", "regenerative design", "material flow analysis"], 0, "extended producer responsibility."),
      mc("Separating economic growth from increasing resource consumption:", ["decoupling", "upcycling", "closed-loop system"], 0, "decoupling."),
      mc("The gradual exhaustion of natural resources through overuse:", ["resource depletion", "waste stream", "regenerative design"], 0, "resource depletion."),
      mc("A method measuring a product's total environmental impact:", ["life-cycle assessment", "closed-loop system", "decoupling"], 0, "life-cycle assessment."),
    ]),

    ...uoe({
      p1: {
        title: "Rewriting the source, not repeating it",
        text: "Successful synthesis of two given source texts requires considerably more than simple, mechanical (1)___ of key phrases from each — examiners specifically reward genuine paraphrase over any recognisable, verbatim repetition of the original wording. The first source, in a typical Writing P1 task, might (2)___ that circular economy principles offer a genuinely viable path toward decoupling growth from resource depletion. A skilled candidate would never simply (3)___ this claim directly; instead, they would restructure it entirely, perhaps noting that the source 'highlights circularity as a credible route toward growth without commensurate resource strain.' The second source, by (4)___, might raise genuine practical objections regarding implementation cost and consumer behaviour change. Genuine synthesis (5)___ both perspectives into a single, coherent evaluative paragraph, rather than simply summarising each source in isolated succession. Candidates who master this particular skill (6)___ themselves considerably from those who merely paraphrase each source separately without ever genuinely integrating them.",
        q: [
          mc("(1)", ["reproduction", "repetition", "quotation", "copying"], 1, "'mechanical repetition of key phrases'."),
          mc("(2)", ["contend", "say", "tell", "state simply"], 0, "'might contend that circular economy principles offer'."),
          mc("(3)", ["quote", "copy", "repeat", "restate"], 2, "'never simply repeat this claim directly'."),
          mc("(4)", ["contrast", "difference", "comparison", "opposition"], 0, "'by contrast, might raise genuine practical objections'."),
          mc("(5)", ["weaves", "combines", "integrates", "merges"], 2, "'Genuine synthesis integrates both perspectives'."),
          mc("(6)", ["distinguish", "separate", "differentiate", "set apart"], 0, "'candidates… distinguish themselves considerably'."),
        ],
      },
      p2: {
        title: "The art of the evaluative synthesis",
        text: "A genuinely strong Writing P1 response does (1)___ merely alternate between summarising Source A and Source B in separate, disconnected paragraphs. It weaves both perspectives together, drawing explicit, meaningful connections between where the sources agree, where they genuinely diverge, and (2)___ each falls short of fully addressing the underlying question. Candidates should aim to reference each source (3)___ their own words throughout, reserving any direct quotation for only the most essential, otherwise unparaphrasable technical terms. There is, most examiners would agree, no substitute (4)___ genuine comprehension — candidates who have not fully understood a source's argument tend to produce paraphrase that subtly, unintentionally misrepresents it. What ultimately distinguishes a top-band response is not merely accurate paraphrase, but a genuinely evaluative voice threaded (5)___ the entire response, offering the candidate's own reasoned judgement rather than simply reporting what each source separately claims. This synthesis skill, once (6)___, transfers directly to the kind of evaluative writing required across genuinely advanced academic and professional contexts.",
        q: [
          fb("(1)", ["not"], "'does not merely alternate between summarising'."),
          fb("(2)", ["where"], "'where they genuinely diverge, and where each falls short'."),
          fb("(3)", ["in"], "'reference each source in their own words'."),
          fb("(4)", ["for"], "'no substitute for genuine comprehension'."),
          fb("(5)", ["throughout", "through"], "'a genuinely evaluative voice threaded throughout/through'."),
          fb("(6)", ["mastered", "developed", "acquired"], "'once mastered/developed/acquired, transfers directly'."),
        ],
      },
      p3: {
        title: "Beyond mere summary",
        text: "The distinction between mere (1)___ and genuine synthesis lies at the very heart of what separates a competent Writing P1 response from a genuinely excellent one. Summary alone simply restates what each source says; synthesis, by contrast, actively (2)___ the two perspectives, identifying genuine points of tension and unexpected (3)___ that neither source, read separately, would fully reveal on its own. This particular skill requires considerable practice, since it demands simultaneously holding two distinct arguments in mind while actively constructing a third, genuinely original evaluative position that draws meaningfully on both. Examiners specifically reward candidates who demonstrate this kind of active, critical (4)___ rather than passive, mechanical reproduction of source content. Developing genuine (5)___ in this particular skill takes sustained, deliberate practice — precisely the kind this week's material specifically, deliberately provides. Candidates who neglect this skill in favour of memorising fixed (6)___ often find their responses feel mechanical and formulaic rather than genuinely, persuasively evaluative.",
        items: [
          { root: "summary", accepted: ["summary", "summarising"], hint: "'The distinction between mere summary and genuine synthesis' (sustantivo/gerundio)." },
          { root: "engage", accepted: ["engages"], hint: "'synthesis… actively engages the two perspectives' (verbo, 3ª persona)." },
          { root: "converge", accepted: ["convergence", "convergences"], hint: "'identifying… unexpected convergences' (sustantivo)." },
          { root: "engage", accepted: ["engagement"], hint: "'demonstrate this kind of active, critical engagement' (sustantivo)." },
          { root: "confide", accepted: ["confidence"], hint: "'Developing genuine confidence in this… skill' (sustantivo)." },
          { root: "phrase", accepted: ["phrases"], hint: "'memorising fixed phrases' (sustantivo, plural)." },
        ],
      },
      p4: {
        title: "Transformaciones — paráfrasis y síntesis",
        items: [
          { s1: "The first text says that recycling reduces waste significantly.", key: "CONTENDS", s2: "The first text ___ that recycling reduces waste significantly.", accepted: ["contends"], explanation: "verbo de reporte de registro C2." },
          { s1: "The second source disagrees, offering a more cautious view instead.", key: "CONTRAST", s2: "The second source, by ___, offers a more cautious view.", accepted: ["contrast"], explanation: "by contrast (conector de síntesis)." },
          { s1: "Both texts agree that stronger regulation is genuinely needed.", key: "CONVERGE", s2: "Both texts ___ on the need for stronger regulation.", accepted: ["converge"], explanation: "converge (lenguaje de síntesis)." },
          { s1: "The first source admits that progress has been limited so far.", key: "CONCEDES", s2: "The first source ___ that progress has been limited so far.", accepted: ["concedes"], explanation: "verbo de reporte matizado." },
          { s1: "There is a considerable reduction in waste, the policy shows.", key: "REDUCED", s2: "The policy has ___ waste considerably, it shows.", accepted: ["reduced"], explanation: "transformación estructural (nominalización → verbo)." },
        ],
      },
      p5: {
        title: "The examiner who read a thousand essays",
        text: "After more than fifteen years marking C2 Writing papers, senior examiner Robert Chen has developed an almost instant sense for which candidates have genuinely mastered source synthesis and which have merely learned to disguise simple summary with slightly rearranged vocabulary.\n\n\"The giveaway,\" he explained in a recent training session for newer examiners, \"is almost always structural. A candidate who has genuinely synthesised two sources moves fluidly between them within a single paragraph — contrasting, connecting, evaluating. A candidate who hasn't tends to produce one paragraph about Source A, then a separate, disconnected paragraph about Source B, with barely any genuine connective tissue between them at all.\"\n\nHe recalled one particularly memorable response, years earlier, that had initially impressed him with its sophisticated-sounding vocabulary before he noticed, on closer inspection, that several key phrases had been lifted almost verbatim from the source material itself.\n\n\"It's rather like spotting a poorly disguised summary wearing borrowed clothes,\" he noted dryly. \"The vocabulary looks impressive at first glance, but the underlying thinking simply isn't genuinely there — the candidate hasn't actually processed and reformulated the source's argument in their own words at all.\"\n\nBy contrast, he described another response, considerably more modest in raw vocabulary range, that nonetheless scored exceptionally well precisely because every single sentence demonstrated genuine, active engagement with both sources simultaneously.\n\n\"That candidate,\" he recalled, \"never once used a phrase I could directly trace back to either source text. Every single idea had been genuinely digested and reformulated in the candidate's own authentic voice — and crucially, the essay actually said something original about how the two perspectives related to each other.\"\n\nHis advice to future candidates, distilled from those fifteen years of careful, attentive marking, remains refreshingly simple: \"Don't try to sound impressive. Try to genuinely think, in your own words, about what these two sources are actually saying to each other — and then write that down, clearly and honestly.\"",
        q: [
          mc("What does Robert Chen say is the 'giveaway' for genuine synthesis?", ["Vocabulary range alone.", "Whether a candidate moves fluidly between sources within a single paragraph.", "Essay length.", "Handwriting quality."], 1, "'A candidate who has genuinely synthesised two sources moves fluidly between them within a single paragraph'."),
          mc("What did he notice about the impressive-sounding response he recalled?", ["It was perfectly synthesised.", "Several key phrases had been lifted almost verbatim from the source material.", "It ignored both sources entirely.", "It was too short."], 1, "'several key phrases had been lifted almost verbatim from the source material itself'."),
          mc("How does he describe that kind of disguised summary?", ["Genuinely excellent.", "Like a poorly disguised summary wearing borrowed clothes.", "Completely original.", "Impossible to detect."], 1, "'rather like spotting a poorly disguised summary wearing borrowed clothes'."),
          mc("What distinguished the more modest-vocabulary response that scored well?", ["It used more impressive words.", "Every sentence demonstrated genuine, active engagement with both sources.", "It was much longer than average.", "It quoted both sources directly."], 1, "'every single sentence demonstrated genuine, active engagement with both sources simultaneously'."),
          mc("What did that candidate's essay say, according to Chen?", ["Nothing original.", "Something original about how the two perspectives related to each other.", "Only what the sources said directly.", "Nothing about the sources at all."], 1, "'the essay actually said something original about how the two perspectives related to each other'."),
          mc("What is Chen's advice to future candidates?", ["Try to sound as impressive as possible.", "Genuinely think, in your own words, about what the sources are saying to each other.", "Memorise fixed phrases in advance.", "Quote both sources directly and extensively."], 1, "'Try to genuinely think, in your own words, about what these two sources are actually saying to each other'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "The Writing P1 essay, more than any other single task across the entire C2 examination, rewards a very particular kind of intellectual honesty: genuine engagement with someone else's argument rather than the performance of engagement through borrowed vocabulary. (1)___\n\nThis distinction matters enormously to examiners, who read hundreds of responses to identical source material within a single marking session. (2)___ Genuine paraphrase, by contrast, reveals itself through structural variety that mere synonym-swapping simply cannot convincingly fake.\n\nCandidates sometimes assume that using different individual words automatically counts as adequate paraphrase, provided the overall sentence structure stays recognisably close to the original source. (3)___ Examiners, having read the same source passages repeatedly, spot this particular pattern with practised, well-trained ease.\n\nGenuine paraphrase instead requires restructuring at the level of the whole sentence or clause, not merely substituting individual words for their nearest available synonym. (4)___ The underlying idea survives intact; its precise linguistic expression changes considerably.\n\nThis skill, demanding as it genuinely is, transfers directly beyond the examination itself into any context requiring genuine synthesis of competing viewpoints or sources. (5)___ Academic writing, policy analysis, and journalism alike all depend on precisely this same underlying skill.\n\nWhat the Writing P1 essay ultimately tests, beneath its specific formal requirements, is something considerably more fundamental: whether a candidate can genuinely think alongside a source rather than merely echo it back in slightly rearranged form. (6)___ That distinction, subtle as it may initially seem, turns out to matter enormously.",
        options: [
          "That particular honesty is not always easy to fake convincingly.", // A -> gap1
          "Familiar phrasing, recycled too closely, simply stands out immediately.", // B -> gap2
          "That assumption, however common, does not survive close scrutiny.", // C -> gap3
          "The sentence's skeleton itself, not merely its surface words, must shift.", // D -> gap4
          "This particular skill was never confined to any single exam room.", // E -> gap5
          "Thinking alongside a source, in the end, is the whole real point.", // F -> gap6
          "No candidate has ever struggled with genuine source paraphrase.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa honestidad no siempre es fácil de fingir de forma convincente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la frase reciclada, demasiado cercana, destaca de inmediato."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa suposición, aunque común, no resiste un examen atento."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el esqueleto de la frase, no solo sus palabras, debe cambiar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esta destreza nunca se limitó a una sala de examen."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: pensar junto a una fuente es, al final, todo el objetivo real."),
        ],
      },
      p7: {
        title: "Four candidates discuss the Writing P1 essay",
        text: "Read what four candidates say about practising the Writing P1 source-integration essay.\n\nA) YARA: I used to copy phrases directly from the sources, until my tutor showed me how examiners actually spot that immediately.\n\nB) LEON: Restructuring whole sentences, not just swapping words, genuinely transformed how my essays read, honestly.\n\nC) MINA: I still struggle to synthesise both sources in one paragraph rather than writing about them separately.\n\nD) KOFI: Once I stopped trying to sound impressive and just tried to think clearly, my essays actually improved considerably.\n",
        q: [
          mc("Who used to copy phrases directly from sources until being corrected?", ["A", "B", "C", "D"], 0, "Yara: 'I used to copy phrases directly from the sources, until my tutor showed me'."),
          mc("Who says restructuring whole sentences transformed their essays?", ["A", "B", "C", "D"], 1, "Leon: 'Restructuring whole sentences, not just swapping words, genuinely transformed how my essays read'."),
          mc("Who still struggles to synthesise sources in one paragraph?", ["A", "B", "C", "D"], 2, "Mina: 'I still struggle to synthesise both sources in one paragraph rather than writing about them separately'."),
          mc("Who improved once they stopped trying to sound impressive?", ["A", "B", "C", "D"], 3, "Kofi: 'Once I stopped trying to sound impressive and just tried to think clearly, my essays actually improved'."),
          mc("Whose tutor showed them that examiners spot copied phrases?", ["A", "B", "C", "D"], 0, "Yara: 'my tutor showed me how examiners actually spot that immediately'."),
          mc("Who mentions swapping words as insufficient on its own?", ["A", "B", "C", "D"], 1, "Leon: 'not just swapping words'."),
          mc("Who writes about the two sources separately rather than together?", ["A", "B", "C", "D"], 2, "Mina: 'writing about them separately'."),
          mc("Who mentions thinking clearly as the key change?", ["A", "B", "C", "D"], 3, "Kofi: 'just tried to think clearly'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la economía circular y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE, sin copiar frases de los textos.\n\nTEXTO 1: 'The circular economy offers a genuinely credible path to decoupling economic growth from resource depletion. Businesses that embrace closed-loop design will thrive as regulation tightens.'\n\nTEXTO 2: 'Circular economy principles remain, in practice, far harder to scale than their advocates suggest. Consumer behaviour, infrastructure cost, and complex supply chains all pose serious, underappreciated obstacles.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos DOS verbos de reporte distintos (contends, maintains, concedes...). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What the circular economy could mean for my community' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una empresa proponiendo una iniciativa de economía circular.\n· REPORT sobre el estado de la economía circular en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing an essay. Woman: I used to copy phrases directly from the sources, until my tutor showed me examiners spot that immediately. Man: Restructuring whole sentences genuinely transformed how my essays read too. Extract Two. You hear two colleagues discussing circular economy policy. Man: The first report contends that circular design could decouple growth from resource depletion entirely. Woman: The second, by contrast, raises real concerns about implementation cost. Extract Three. You hear two examiners discussing marking. Woman: Genuine synthesis moves fluidly between both sources within a single paragraph, in my experience. Man: Exactly — mere summary produces two disconnected paragraphs instead.", [
      mc("1. What did the woman used to do with source phrases?", ["Paraphrase them carefully.", "Copy them directly.", "Ignore them entirely.", "Translate them."], 1, "'I used to copy phrases directly from the sources'."),
      mc("2. What transformed the man's essays?", ["Using longer words.", "Restructuring whole sentences.", "Writing shorter essays.", "Ignoring the sources."], 1, "'Restructuring whole sentences genuinely transformed how my essays read'."),
      mc("3. What does the first report contend, according to the man?", ["Circular design is impossible.", "Circular design could decouple growth from resource depletion.", "Resource depletion is unavoidable.", "Growth should be abandoned."], 1, "'The first report contends that circular design could decouple growth from resource depletion'."),
      mc("4. What does the second report raise, according to the woman?", ["No concerns at all.", "Concerns about implementation cost.", "Concerns about the first report's honesty.", "Concerns unrelated to economics."], 1, "'The second, by contrast, raises real concerns about implementation cost'."),
      mc("5. What does genuine synthesis do, according to the woman?", ["Keeps sources entirely separate.", "Moves fluidly between both sources within a single paragraph.", "Ignores one source entirely.", "Quotes both sources directly."], 1, "'Genuine synthesis moves fluidly between both sources within a single paragraph'."),
      mc("6. What does mere summary produce, according to the man?", ["A single integrated paragraph.", "Two disconnected paragraphs.", "No paragraphs at all.", "A direct quotation only."], 1, "'mere summary produces two disconnected paragraphs instead'."),
    ]),

    ...speakingParts({ p1: "si haces algo en tu vida diaria relacionado con la economía circular (reciclar, reparar, reutilizar)", p2: "dos imágenes de la economía circular (una fábrica reciclando materiales industriales y un mercado de segunda mano lleno de gente): comentadlas y decidid cuál representa mejor el cambio hacia la economía circular", p3: "qué es más eficaz para impulsar la economía circular (la regulación gubernamental, los incentivos económicos, la educación del consumidor, la innovación empresarial, la responsabilidad del productor): comentadlo y decidid lo más eficaz" }),

    SUMMARY("Resumen del Día 41", [
      "Aprendido: técnicas de paráfrasis y síntesis de fuentes para el Writing P1 (sustitución léxica, transformación estructural, verbos de reporte).",
      "Vocabulario de la economía circular. Reading & Use of English, Writing, Listening P1 y Speaking completos.",
      "Mañana: el lenguaje de evaluación crítica de fuentes.",
    ]),
    INFO("Tarea para el Día 42", "Repasa las técnicas de paráfrasis de hoy. Mañana: el lenguaje de evaluación crítica (this argument overlooks..., on balance...)."),
  ],
};

// ───────────────────────── DÍA 42 ─────────────────────────
const DAY42 = {
  title: "Día 42 — El lenguaje de evaluación crítica de fuentes · El cambio climático y la política económica",
  description: "Lenguaje para reconocer mérito parcial, señalar limitaciones y matizar el propio juicio evaluativo — combinado con la síntesis de ayer. Vocabulario del cambio climático y la política económica. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Dominar el lenguaje de evaluación crítica para juzgar fuentes con matiz, combinándolo con la síntesis de ayer.",
    summary: "Lenguaje de evaluación crítica; cambio climático y política económica; Use of English P1-P7, Writing, Listening P2, Speaking P1-P3.",
    commonMistakes: ["evaluar de forma binaria (totalmente de acuerdo/en desacuerdo) en vez de con matiz.", "olvidar reconocer mérito parcial antes de señalar una limitación.", "no ofrecer una síntesis evaluativa final propia."],
    reviewPrompts: ["¿Cómo reconocerías mérito parcial en un argumento con el que en general discrepas?", "¿Qué frase usarías para tu síntesis evaluativa final?"],
  },
  items: [
    TEXT("🎯 Hoy: el LENGUAJE DE EVALUACIÓN CRÍTICA de fuentes, combinado con la paráfrasis/síntesis de ayer. Vocabulario: el CAMBIO CLIMÁTICO y la POLÍTICA ECONÓMICA."),
    GRAMMAR("El lenguaje de evaluación crítica de fuentes", `Evaluar una fuente con matiz — ni aceptación total ni rechazo total — es central para el Writing P1 de C2.
· Reconocer mérito parcial: 'There is undoubtedly some truth to this, though...', 'This view is not without merit...'
· Señalar limitaciones: 'This argument, however, overlooks...', 'What this view fails to account for is...'
· Matizar el propio juicio: 'On balance, the more persuasive case is...', 'While both have merit, X seems ultimately more compelling because...'
· Síntesis evaluativa final: 'Taken together, both perspectives suggest that...', 'What emerges from this tension is...'`),
    grammarEx("Use of English — El lenguaje de evaluación crítica", "Elige la opción correcta.", [
      mc("There is undoubtedly some truth to this argument, ___ it overstates the case considerably.", ["though", "and", "because"], 0, "though (reconocer mérito + matizar)."),
      mc("This argument, ___, overlooks the considerable cost of implementation.", ["however", "therefore", "moreover"], 0, "however (señalar limitación)."),
      mc("What this view fails to ___ for is the political difficulty of rapid change.", ["account", "answer", "response"], 0, "account for (señalar limitación)."),
      mc("On ___, the more persuasive case is made by the second source.", ["balance", "average", "whole"], 0, "on balance (matizar el propio juicio)."),
      mc("This position is not ___ merit, even if it remains ultimately unconvincing.", ["without", "with", "for"], 0, "not without merit (reconocer mérito parcial)."),
      mc("Taken ___, both perspectives suggest that a hybrid approach may prove wisest.", ["together", "separately", "individually"], 0, "taken together (síntesis evaluativa final)."),
    ]),
    GRAMMAR("Vocabulario del día — El cambio climático y la política económica (C2)", "Léxico de maestría sobre cambio climático y política económica."),
    deck("C2 S9D42 — El cambio climático y la política económica", [
      ["carbon pricing", "fijación de precios del carbono", "Carbon pricing incentivises industries to reduce their overall emissions gradually.", "sustantivo", "ˈkɑːbən ˈpraɪsɪŋ"],
      ["decarbonisation", "descarbonización", "Full decarbonisation of heavy industry remains a genuinely formidable technical challenge.", "sustantivo", "diːˌkɑːbənaɪˈzeɪʃn"],
      ["stranded assets", "activos varados", "Stranded assets pose a growing financial risk for fossil fuel investors.", "sustantivo", "ˈstrændɪd ˈæsets"],
      ["green subsidy", "subvención verde", "Green subsidies aim to accelerate investment in genuinely cleaner technology.", "sustantivo", "ɡriːn ˈsʌbsədi"],
      ["just transition", "transición justa", "A just transition ensures workers aren't left behind by decarbonisation policy.", "sustantivo", "dʒʌst trænˈzɪʃn"],
      ["emissions trading", "comercio de emisiones", "Emissions trading schemes let companies buy and sell permits to pollute.", "sustantivo", "ɪˈmɪʃnz ˈtreɪdɪŋ"],
      ["climate mitigation", "mitigación climática", "Climate mitigation efforts focus on reducing emissions rather than adapting to impacts.", "sustantivo", "ˈklaɪmət ˌmɪtɪˈɡeɪʃn"],
      ["carbon leakage", "fuga de carbono", "Carbon leakage occurs when production simply shifts to less regulated countries.", "sustantivo", "ˈkɑːbən ˈliːkɪdʒ"],
      ["fossil fuel divestment", "desinversión en combustibles fósiles", "Fossil fuel divestment campaigns have pressured major institutional investors considerably.", "sustantivo", "ˈfɒsl fjuːəl daɪˈvestmənt"],
      ["externality", "externalidad", "Carbon emissions represent a classic negative externality unpriced by the market.", "sustantivo", "ˌekstɜːˈnæləti"],
    ]),
    vocabEx("Vocabulario — El cambio climático y la política económica", "Elige la opción correcta.", [
      mc("Assigning a monetary cost to carbon emissions to discourage them:", ["carbon pricing", "just transition", "stranded assets"], 0, "carbon pricing."),
      mc("Investments that lose value due to changing climate regulation:", ["stranded assets", "green subsidy", "carbon leakage"], 0, "stranded assets."),
      mc("Ensuring workers and communities aren't harmed by decarbonisation policy:", ["just transition", "emissions trading", "decarbonisation"], 0, "just transition."),
      mc("Production shifting to countries with weaker environmental regulation:", ["carbon leakage", "climate mitigation", "externality"], 0, "carbon leakage."),
      mc("A cost or effect not reflected in a product's market price:", ["externality", "green subsidy", "stranded assets"], 0, "externality."),
      mc("The process of removing carbon-intensive processes from an economy:", ["decarbonisation", "just transition", "carbon pricing"], 0, "decarbonisation."),
    ]),

    ...uoe({
      p1: {
        title: "Two economists, one disagreement",
        text: "There is undoubtedly some truth to the claim that carbon pricing alone can (1)___ meaningful emissions reduction, though this argument, on its own, considerably overstates the policy's likely overall impact. What proponents of carbon pricing sometimes fail to (2)___ for is the very real risk of carbon leakage, whereby production simply relocates to jurisdictions with weaker environmental regulation rather than genuinely reducing global emissions overall. This is not (3)___ to suggest carbon pricing has no genuine merit whatsoever — considerable evidence suggests it does meaningfully shift corporate investment decisions over time. On (4)___, however, the more persuasive position holds that carbon pricing works best when combined with complementary policies specifically addressing carbon leakage and ensuring a genuinely just transition for affected workers. Taken (5)___, both economists' positions suggest that no single policy instrument alone, however well-designed in theory, can plausibly achieve decarbonisation without considerable additional, carefully coordinated policy support. This nuanced, considered (6)___ view, rather than either economist's original, more absolute position, likely offers the most genuinely useful guide for actual policymakers.",
        q: [
          mc("(1)", ["drive", "cause", "create", "make"], 0, "'carbon pricing alone can drive meaningful emissions reduction'."),
          mc("(2)", ["account", "answer", "allow", "argue"], 0, "'sometimes fail to account for'."),
          mc("(3)", ["to", "for", "with", "at"], 0, "'This is not to suggest'."),
          mc("(4)", ["balance", "average", "whole", "reflection"], 0, "'On balance, however'."),
          mc("(5)", ["together", "apart", "separately", "individually"], 0, "'Taken together, both economists'."),
          mc("(6)", ["synthesised", "combined", "unified", "blended"], 0, "'This nuanced, considered synthesised view'."),
        ],
      },
      p2: {
        title: "What green subsidies get right, and wrong",
        text: "Green subsidies are not (1)___ merit, having demonstrably accelerated investment in renewable technology considerably faster than market forces alone would likely have achieved on their own. What this policy instrument sometimes fails to account (2)___, however, is the genuine risk of subsidising technologies that later prove commercially unviable once support is eventually withdrawn. There is (3)___ some truth to the criticism that subsidies can distort genuine market competition, favouring politically connected firms over more genuinely innovative but less well-connected competitors. This argument, (4)___, tends to overlook the well-documented historical precedent of nearly every major energy transition having required substantial initial public investment before becoming genuinely commercially self-sustaining. Taken together, this suggests that green subsidies, (5)___ their genuine imperfections, remain a broadly justified policy tool provided they include reasonably clear, well-designed sunset provisions and rigorous accountability. What emerges from this genuinely balanced assessment is recognition that policy design details matter (6)___ more than the simple binary question of whether subsidies should exist at all.",
        q: [
          fb("(1)", ["without"], "'not without merit'."),
          fb("(2)", ["for"], "'fails to account for'."),
          fb("(3)", ["undoubtedly", "certainly"], "'There is undoubtedly/certainly some truth to'."),
          fb("(4)", ["however"], "'This argument, however, tends to overlook'."),
          fb("(5)", ["notwithstanding", "despite"], "'notwithstanding/despite their genuine imperfections'."),
          fb("(6)", ["considerably", "far"], "'matter considerably/far more than'."),
        ],
      },
      p3: {
        title: "The politics of the just transition",
        text: "Genuine climate policy (1)___ requires far more than technically sound environmental design alone — it requires equally careful attention to the political and social consequences for communities whose livelihoods depend directly on carbon-intensive industry. A just (2)___, properly designed, actively supports affected workers through retraining, relocation assistance, and genuinely meaningful economic diversification rather than simply, abstractly promising abstract, distant future benefits. Critics of decarbonisation policy sometimes (3)___ that climate action inevitably harms working communities, a claim that is not entirely without foundation but considerably overstates the case when just transition provisions are genuinely, adequately funded. This ongoing (4)___ between environmental urgency and social equity considerations has increasingly shaped how policymakers across different political traditions approach climate legislation. What (5)___ from careful analysis of successful transitions elsewhere is that genuine political durability, not merely short-term technical efficiency, ultimately determines whether ambitious climate policy survives changing electoral cycles intact. This (6)___ insight increasingly shapes how thoughtful policymakers now design climate legislation from the very outset.",
        items: [
          { root: "mitigate", accepted: ["mitigation"], hint: "'Genuine climate policy mitigation requires far more than…' — ajustar: usar 'design' en su lugar; aceptar 'mitigation' como derivación correcta de la raíz." },
          { root: "transit", accepted: ["transition"], hint: "'A just transition, properly designed…' (sustantivo)." },
          { root: "argue", accepted: ["argue"], hint: "'Critics… sometimes argue that…' (verbo, forma base)." },
          { root: "tense", accepted: ["tension"], hint: "'This ongoing tension between environmental urgency and…' (sustantivo)." },
          { root: "emerge", accepted: ["emerges"], hint: "'What emerges from careful analysis…' (verbo, 3ª persona)." },
          { root: "practise", accepted: ["practical"], hint: "'This practical insight increasingly shapes…' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — el lenguaje de evaluación crítica",
        items: [
          { s1: "The claim has some genuine truth, though it exaggerates the impact.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to this claim, though it exaggerates the impact.", accepted: ["undoubtedly"], explanation: "There is undoubtedly some truth to (reconocer mérito)." },
          { s1: "The argument ignores the real cost of implementation, though.", key: "HOWEVER", s2: "This argument, ___, overlooks the real cost of implementation.", accepted: ["however"], explanation: "señalar limitación." },
          { s1: "This position has some value, even if ultimately unconvincing.", key: "WITHOUT", s2: "This position is not ___ merit, even if ultimately unconvincing.", accepted: ["without"], explanation: "not without merit." },
          { s1: "In general, the second source makes the stronger case.", key: "BALANCE", s2: "On ___, the second source makes the stronger case.", accepted: ["balance"], explanation: "on balance." },
          { s1: "Considered as a whole, both views suggest a hybrid approach is wisest.", key: "TOGETHER", s2: "Taken ___, both views suggest a hybrid approach is wisest.", accepted: ["together"], explanation: "taken together (síntesis evaluativa final)." },
        ],
      },
      p5: {
        title: "The policy that split the department",
        text: "When the ministry's economic advisory board first reviewed the proposed carbon pricing scheme, its members found themselves genuinely, unexpectedly divided — not along the predictable lines many had initially anticipated, but across a considerably more nuanced set of overlapping concerns.\n\n\"There is undoubtedly some truth to the argument that pricing carbon effectively shifts corporate behaviour,\" board member Aisha Okafor noted during the review's opening session, \"though this argument, on its own, rather overstates how quickly that shift would actually occur without considerably stronger complementary measures.\"\n\nHer colleague, veteran economist Marcus Webb, offered a different emphasis. \"What proponents sometimes fail to account for,\" he countered, \"is the genuine risk of carbon leakage — production simply relocating elsewhere rather than emissions genuinely, globally falling.\"\n\nRather than settling into simple, opposing camps, the board's eventual recommendation reflected genuine synthesis of both concerns. \"This is not to suggest carbon pricing lacks real merit,\" the board's final report stated carefully. \"On balance, however, the more persuasive position holds that pricing works considerably better when combined with border carbon adjustments specifically designed to address leakage risk directly.\"\n\nThe board's junior analyst, tasked with drafting the final synthesis, later described the process as considerably more demanding than she had initially anticipated. \"Everyone had a partially valid point,\" she reflected afterward. \"My job wasn't to declare a winner between them — it was to genuinely show how their different, seemingly opposing concerns actually fit together into one coherent overall picture.\"\n\n\"Taken together,\" the report's memorable closing line read, \"these perspectives suggest that effective climate policy requires not a single silver-bullet instrument, but a genuinely well-coordinated portfolio of carefully complementary measures.\"\n\nThe minister, reviewing the board's carefully balanced final recommendation, reportedly remarked that it was considerably more useful than either economist's original, more absolute individual position would have been read entirely alone.",
        q: [
          mc("What did Aisha Okafor acknowledge about carbon pricing?", ["That it has no merit at all.", "That there is undoubtedly some truth to it shifting corporate behaviour, though the claim overstates speed.", "That it works instantly and perfectly.", "That it should be abandoned entirely."], 1, "'There is undoubtedly some truth to the argument that pricing carbon effectively shifts corporate behaviour, though this argument… rather overstates how quickly'."),
          mc("What concern did Marcus Webb raise?", ["That carbon pricing is too expensive.", "The genuine risk of carbon leakage.", "That the policy is illegal.", "That workers would benefit too much."], 1, "'the genuine risk of carbon leakage — production simply relocating elsewhere'."),
          mc("What did the board's final report conclude about carbon pricing?", ["It has no merit whatsoever.", "It works better combined with border carbon adjustments addressing leakage.", "It should be the only policy used.", "It should be scrapped entirely."], 1, "'the more persuasive position holds that pricing works considerably better when combined with border carbon adjustments'."),
          mc("What did the junior analyst say her job was?", ["To declare a winner between the economists.", "To show how the seemingly opposing concerns fit together into one coherent picture.", "To ignore one economist's view entirely.", "To simply summarise each view separately."], 1, "'My job wasn't to declare a winner between them — it was to genuinely show how their… concerns actually fit together'."),
          mc("What does the report's closing line suggest is needed?", ["A single silver-bullet policy instrument.", "A well-coordinated portfolio of complementary measures.", "No policy intervention at all.", "Only carbon pricing alone."], 1, "'effective climate policy requires not a single silver-bullet instrument, but a genuinely well-coordinated portfolio'."),
          mc("What did the minister reportedly say about the final recommendation?", ["It was useless.", "It was considerably more useful than either original individual position.", "It should be rejected.", "It favoured one economist entirely."], 1, "'it was considerably more useful than either economist's original, more absolute individual position'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Evaluating two competing sources well requires a particular kind of intellectual generosity, one considerably rarer than simple agreement or disagreement might initially suggest. (1)___\n\nThis generosity means genuinely acknowledging what each source gets right before addressing what it gets wrong, rather than dismissing an opposing view outright the moment its central claim seems even partially objectionable. (2)___ Few genuinely serious arguments are entirely without any merit at all.\n\nAt the same time, genuine evaluation requires real intellectual honesty about a source's actual limitations, however uncomfortable identifying them might occasionally feel. (3)___ Uncritical acceptance flatters no one, least of all the original source itself.\n\nThe skilled evaluator moves fluidly between these two responsibilities — generous acknowledgement and honest critique — without collapsing into either simple cheerleading or simple dismissal of either source. (4)___ Neither extreme serves genuine, careful evaluation particularly well.\n\nWhat distinguishes truly excellent evaluative writing from merely competent commentary is precisely this careful balance, sustained consistently across an entire response rather than achieved only in isolated, occasional moments. (5)___ That particular consistency, once achieved, tends to read as genuine intellectual maturity rather than mere calculated diplomacy.\n\nUltimately, the goal of genuine evaluation is neither to simply agree with one source nor to simply reject the other, but to construct something considerably more valuable than either alone: a genuinely synthesised, independently reasoned position. (6)___ That synthesis, carefully built, is what examiners are actually, specifically looking for.",
        options: [
          "That generosity, oddly enough, is harder than it initially sounds.", // A -> gap1
          "Blanket dismissal, tempting as it sometimes is, rarely holds up.", // B -> gap2
          "Flattery, however comfortable, was never really the honest job.", // C -> gap3
          "Neither posture, held too tightly, does the real work justice.", // D -> gap4
          "That balance, sustained, is not merely decorative politeness.", // E -> gap5
          "A third position, genuinely built, outlasts either original one.", // F -> gap6
          "No source has ever contained even a single valid point.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa generosidad es más difícil de lo que parece."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el rechazo total, tentador a veces, rara vez se sostiene."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la adulación nunca fue el trabajo honesto real."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ninguna postura, sostenida con rigidez, le hace justicia al trabajo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ese equilibrio no es mera cortesía decorativa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una tercera postura, bien construida, supera a cualquiera de las dos originales."),
        ],
      },
      p7: {
        title: "Four economists discuss carbon policy",
        text: "Read what four economists say about carbon pricing and climate policy.\n\nA) YUKI: There is undoubtedly some truth to carbon pricing's effectiveness, though I think it overstates how quickly change actually happens.\n\nB) DANIEL: What green subsidy advocates fail to account for, in my view, is the genuine risk of political capture by connected firms.\n\nC) ZARA: On balance, I find the case for a just transition considerably more persuasive than purely technical efficiency arguments alone.\n\nD) IBRAHIM: Taken together, both perspectives on decarbonisation suggest a coordinated policy portfolio works best, honestly.\n",
        q: [
          mc("Who says carbon pricing's effectiveness has some truth but overstates speed?", ["A", "B", "C", "D"], 0, "Yuki: 'There is undoubtedly some truth to carbon pricing's effectiveness, though I think it overstates how quickly change actually happens'."),
          mc("Who raises the risk of political capture by connected firms?", ["A", "B", "C", "D"], 1, "Daniel: 'What green subsidy advocates fail to account for… is the genuine risk of political capture'."),
          mc("Who finds the case for a just transition more persuasive than pure efficiency?", ["A", "B", "C", "D"], 2, "Zara: 'On balance, I find the case for a just transition considerably more persuasive'."),
          mc("Who concludes a coordinated policy portfolio works best?", ["A", "B", "C", "D"], 3, "Ibrahim: 'Taken together, both perspectives… suggest a coordinated policy portfolio works best'."),
          mc("Who mentions green subsidy advocates specifically?", ["A", "B", "C", "D"], 1, "Daniel: 'What green subsidy advocates fail to account for'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Zara: 'On balance, I find the case'."),
          mc("Who says this 'honestly'?", ["A", "B", "C", "D"], 3, "Ibrahim: 'works best, honestly'."),
          mc("Who mentions how quickly change actually happens?", ["A", "B", "C", "D"], 0, "Yuki: 'it overstates how quickly change actually happens'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la política climática y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE críticamente.\n\nTEXTO 1: 'Carbon pricing is the single most effective policy tool available to governments seeking genuine emissions reduction. It should be the centrepiece of any serious climate strategy.'\n\nTEXTO 2: 'Carbon pricing alone is insufficient and risks carbon leakage, harming domestic industry without genuinely reducing global emissions. A broader policy portfolio is essential.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos DOS estructuras de evaluación crítica (there is undoubtedly some truth to, this argument however overlooks, on balance...). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'How should my country balance economic growth and climate action?' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a un/a representante político/a sobre la política climática.\n· REVIEW de un libro, documental o recurso sobre economía climática que te haya resultado útil.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha el monólogo (se oye dos veces) y completa los huecos con 1-3 palabras.", "This is Part Two. You will hear an economist giving a talk about carbon pricing. There is undoubtedly some truth to the claim that carbon pricing shifts corporate behaviour, though this argument, on its own, overstates how quickly that shift actually occurs. What proponents sometimes fail to account for is the genuine risk of carbon leakage, whereby production simply relocates to countries with weaker regulation. This is not to suggest carbon pricing lacks real merit — considerable evidence shows it does shift investment decisions over time. On balance, however, the more persuasive position holds that pricing works best combined with complementary policies addressing leakage directly. A just transition, properly funded, ensures workers in carbon-intensive industries aren't left behind by rapid policy change. Green subsidies, notwithstanding their genuine imperfections, remain broadly justified provided they include clear sunset provisions. Taken together, these perspectives suggest that effective climate policy requires a coordinated portfolio of measures, not a single silver-bullet instrument. What ultimately matters is not which single policy wins the argument, but how different instruments work together in practice.", [
      fb("1. There is undoubtedly some truth to the claim that carbon pricing shifts corporate ___.", ["behaviour"], "'shifts corporate behaviour'."),
      fb("2. Proponents sometimes fail to account for the genuine risk of carbon ___.", ["leakage"], "'the genuine risk of carbon leakage'."),
      fb("3. Production simply relocates to countries with weaker ___.", ["regulation"], "'countries with weaker regulation'."),
      fb("4. Carbon pricing does shift ___ decisions over time.", ["investment"], "'does shift investment decisions over time'."),
      fb("5. Pricing works best combined with policies addressing leakage ___.", ["directly"], "'addressing leakage directly'."),
      fb("6. A just transition ensures workers aren't left ___ by rapid policy change.", ["behind"], "'aren't left behind by rapid policy change'."),
      fb("7. Green subsidies remain broadly justified provided they include clear ___ provisions.", ["sunset"], "'clear sunset provisions'."),
      fb("8. Effective climate policy requires a coordinated ___ of measures.", ["portfolio"], "'a coordinated portfolio of measures'."),
      fb("9. What matters is how different instruments work together in ___.", ["practice"], "'how different instruments work together in practice'."),
    ]),

    ...speakingParts({ p1: "si te preocupa el cambio climático y qué haces al respecto en tu día a día", p2: "dos imágenes de la política climática (una central de carbón en funcionamiento y un parque eólico marino): comentadlas y decidid cuál representa mejor el futuro energético deseable", p3: "qué política climática es más eficaz (la fijación de precios del carbono, las subvenciones verdes, la regulación directa, los acuerdos internacionales, el cambio de comportamiento individual): comentadlo y decidid la más eficaz" }),

    SUMMARY("Resumen del Día 42", [
      "Aprendido: el lenguaje de evaluación crítica de fuentes (there is undoubtedly some truth to, this argument however overlooks, on balance, taken together).",
      "Vocabulario del cambio climático y la política económica. Reading & Use of English, Writing, Listening P2 y Speaking completos.",
      "Mañana: la cohesión avanzada (modificadores resuntivos, sustantivos resuntivos).",
    ]),
    INFO("Tarea para el Día 43", "Repasa la paráfrasis y la evaluación crítica de estos dos días. Mañana: cohesión avanzada."),
  ],
};

// ───────────────────────── DÍA 43 ─────────────────────────
const DAY43 = {
  title: "Día 43 — La cohesión avanzada: modificadores y sustantivos resuntivos · La energía y la transición ecológica",
  description: "Modificadores resuntivos (a shift that...), sustantivos resuntivos (this trend, such concerns) y cadenas léxicas, combinados con la síntesis y evaluación de esta semana. Vocabulario de la energía y la transición ecológica. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Dominar los modificadores y sustantivos resuntivos para lograr cohesión de nivel C2 sin repetición literal.",
    summary: "Cohesión avanzada; energía y transición ecológica; Use of English P1-P7, Writing, Listening P3, Speaking P1-P3.",
    commonMistakes: ["repetir la misma palabra exacta en vez de usar un sustantivo resuntivo.", "usar un modificador resuntivo sin coma, rompiendo la estructura de la frase.", "elegir un sustantivo resuntivo que no resume con precisión la idea anterior."],
    reviewPrompts: ["¿Qué sustantivo resuntivo usarías para retomar 'growing public concern about the policy'?", "¿Recuerdas un ejemplo de modificador resuntivo de un texto anterior de esta semana?"],
  },
  items: [
    TEXT("🎯 Hoy: la COHESIÓN AVANZADA — modificadores resuntivos y sustantivos resuntivos — combinada con la síntesis/evaluación de esta semana. Vocabulario: la ENERGÍA y la TRANSICIÓN ECOLÓGICA."),
    GRAMMAR("Cohesión avanzada: modificadores y sustantivos resuntivos (C2)", `· Modificador resuntivo: cláusula final tras coma que retoma toda la frase anterior — 'The grid failed twice last winter, a development that alarmed regulators considerably.'
· Sustantivo resuntivo (summative noun): retoma una idea compleja en una sola palabra/frase — this trend, such concerns, this approach, this dynamic, this tension.
· Cadena léxica: mantener cohesión repitiendo un CAMPO semántico (no la misma palabra) — energy → power → electricity → supply → grid.
· Frase temática de enlace: la primera frase de un párrafo retoma explícitamente el final del párrafo anterior, sin repetir literalmente las mismas palabras.`),
    grammarEx("Use of English — Cohesión avanzada", "Elige la opción correcta.", [
      mc("Energy prices doubled within a year, ___ that caught most households entirely unprepared.", ["a development", "it", "which is"], 0, "modificador resuntivo (cláusula final)."),
      mc("Public concern about grid reliability has grown steadily. ___ has prompted significant new investment.", ["This concern", "It", "The concern"], 0, "sustantivo resuntivo (retoma la idea anterior)."),
      mc("The plant closed suddenly last month, ___ many local workers hadn't anticipated at all.", ["a closure", "which", "it"], 1, "which + cláusula relativa no especificativa (variante del modificador resuntivo)."),
      mc("Battery storage costs have fallen dramatically. ___ trend shows no sign of slowing.", ["This", "It", "The it"], 0, "sustantivo resuntivo con 'this' + sustantivo."),
      mc("The grid experienced three major outages, ___ regulators eventually acknowledged as a systemic failure.", ["a pattern", "it was", "which was"], 0, "modificador resuntivo (sustantivo + cláusula)."),
      mc("Renewable capacity has expanded rapidly across the region. ___ dynamic has reshaped the entire energy market.", ["This", "It", "Its"], 0, "sustantivo resuntivo (this + dynamic)."),
    ]),
    GRAMMAR("Vocabulario del día — La energía y la transición ecológica (C2)", "Léxico de maestría sobre energía y transición ecológica."),
    deck("C2 S9D43 — La energía y la transición ecológica", [
      ["renewable energy", "energía renovable", "Renewable energy capacity has expanded dramatically across most major economies.", "sustantivo", "rɪˈnjuːəbl ˈenədʒi"],
      ["grid resilience", "resiliencia de la red", "Grid resilience depends heavily on diversified, geographically distributed energy sources.", "sustantivo", "ɡrɪd rɪˈzɪliəns"],
      ["energy storage", "almacenamiento de energía", "Energy storage remains the crucial missing piece for full renewable adoption.", "sustantivo", "ˈenədʒi ˈstɔːrɪdʒ"],
      ["intermittency", "intermitencia", "Intermittency remains solar and wind power's most persistent technical challenge.", "sustantivo", "ˌɪntəˈmɪtənsi"],
      ["electrification", "electrificación", "Electrification of transport and heating drives much of current grid demand growth.", "sustantivo", "ɪˌlektrɪfɪˈkeɪʃn"],
      ["energy poverty", "pobreza energética", "Energy poverty forces many households to choose between heating and other essentials.", "sustantivo", "ˈenədʒi ˈpɒvəti"],
      ["baseload power", "energía de carga base", "Baseload power traditionally came from sources capable of constant, reliable output.", "sustantivo", "ˈbeɪsləʊd ˈpaʊə"],
      ["retrofit", "modernizar, adaptar (una instalación existente)", "Retrofitting older buildings for efficiency remains slower than new construction alone.", "verbo", "ˈretrəʊfɪt"],
      ["phase-out", "eliminación gradual", "The coal phase-out has proceeded faster than most analysts initially predicted.", "sustantivo", "feɪz aʊt"],
      ["energy security", "seguridad energética", "Energy security concerns have reshaped national policy priorities considerably in recent years.", "sustantivo", "ˈenədʒi sɪˈkjʊərəti"],
    ]),
    vocabEx("Vocabulario — La energía y la transición ecológica", "Elige la opción correcta.", [
      mc("The ability of an energy grid to withstand and recover from disruption:", ["grid resilience", "intermittency", "baseload power"], 0, "grid resilience."),
      mc("The unpredictable, variable nature of solar and wind power output:", ["intermittency", "electrification", "retrofit"], 0, "intermittency."),
      mc("Converting processes (transport, heating) from fossil fuels to electric power:", ["electrification", "phase-out", "grid resilience"], 0, "electrification."),
      mc("Inability to afford adequate home heating or electricity:", ["energy poverty", "energy storage", "baseload power"], 0, "energy poverty."),
      mc("The steady, continuous minimum power supply a grid requires:", ["baseload power", "intermittency", "phase-out"], 0, "baseload power."),
      mc("Modernising an existing building or system for improved efficiency:", ["retrofit", "phase-out", "electrification"], 0, "retrofit."),
    ]),

    ...uoe({
      p1: {
        title: "The grid under strain",
        text: "The regional power grid experienced three significant outages within a single winter, a pattern that regulators eventually (1)___ as evidence of genuine, systemic underinvestment rather than mere isolated bad luck. This particular vulnerability stems largely from growing intermittency in renewable generation, (2)___ requires considerably more sophisticated grid management than traditional baseload power ever previously demanded. Energy storage capacity has expanded considerably in response, a development that industry analysts widely (3)___ as genuinely essential for accommodating variable renewable output at meaningfully large scale. This particular trend, however, has not proceeded (4)___ evenly across different regions, leaving some communities considerably more exposed to intermittency-related disruption than others. Growing public concern about grid reliability has (5)___ significant new infrastructure investment, though critics argue this investment remains, even now, considerably insufficient given the genuine scale of the underlying challenge. What emerges from this ongoing tension is recognition that energy transition requires not merely new generation capacity, but equally substantial, (6)___ overlooked investment in grid infrastructure itself.",
        q: [
          mc("(1)", ["interpreted", "read", "understood", "saw"], 0, "'a pattern that regulators eventually interpreted as evidence'."),
          mc("(2)", ["which", "that", "it", "this"], 0, "'growing intermittency… which requires considerably more sophisticated management' — modificador resuntivo con which."),
          mc("(3)", ["regard", "view", "consider", "treat"], 0, "'a development that… analysts widely regard as genuinely essential'."),
          mc("(4)", ["entirely", "fully", "completely", "wholly"], 0, "'has not proceeded entirely evenly across… regions'."),
          mc("(5)", ["prompted", "caused", "triggered", "sparked"], 0, "'Growing public concern… has prompted significant new… investment'."),
          mc("(6)", ["often", "frequently", "commonly", "widely"], 0, "'equally substantial, often overlooked investment'."),
        ],
      },
      p2: {
        title: "The quiet transformation of home heating",
        text: "Electrification of home heating has proceeded (1)___ steadily across most developed economies, a shift that has reshaped both electricity demand patterns and household energy costs considerably. This particular trend brings genuine environmental benefit, (2)___ eliminating direct fossil fuel combustion within individual homes considerably reduces local emissions. Such benefit, however, comes with real practical complication: heat pump retrofits require substantial upfront investment, a barrier (3)___ has slowed adoption considerably among lower-income households specifically. This growing concern about equitable access has prompted several governments to introduce targeted retrofit subsidies, (4)___ measure that industry analysts broadly welcome while noting it remains, even now, insufficient at current funding levels. Energy poverty, meanwhile, complicates this transition (5)___ further still, as households already struggling with existing energy costs often cannot afford even heavily subsidised retrofit investment upfront. What this tension ultimately reveals is that genuine energy transition requires (6)___ careful attention to equity as to raw technical feasibility alone.",
        q: [
          fb("(1)", ["fairly", "reasonably"], "'has proceeded fairly/reasonably steadily'."),
          fb("(2)", ["since", "as"], "'since/as eliminating direct fossil fuel combustion… reduces… emissions'."),
          fb("(3)", ["that", "which"], "'a barrier that/which has slowed adoption considerably'."),
          fb("(4)", ["a"], "'a measure that industry analysts broadly welcome'."),
          fb("(5)", ["still"], "'complicates this transition… further still'."),
          fb("(6)", ["as much"], "'requires as much careful attention to equity as to raw technical feasibility'."),
        ],
      },
      p3: {
        title: "Baseload power in a renewable world",
        text: "The traditional (1)___ of baseload power — constant, reliable generation regardless of weather or time of day — faces genuine conceptual challenge as renewable sources, inherently more variable, come to dominate an increasing share of total electricity generation. This growing (2)___ has prompted considerable debate among energy planners about whether baseload power remains a genuinely useful planning concept at all, or whether it should instead be replaced by more flexible frameworks better suited to managing genuine intermittency. Some analysts (3)___ that abandoning baseload thinking entirely risks genuine grid instability, particularly during periods of unusually low renewable output. Others maintain that continued (4)___ on traditional baseload concepts unnecessarily constrains the kind of genuinely innovative grid management increasingly required by a renewable-dominated system. This ongoing (5)___ reflects a broader, unresolved tension between established engineering caution and genuine technological (6)___ within the energy sector more broadly.",
        items: [
          { root: "concept", accepted: ["conception", "concept"], hint: "'The traditional conception of baseload power' (sustantivo)." },
          { root: "debate", accepted: ["debate"], hint: "'This growing debate has prompted considerable…' (sustantivo, forma base)." },
          { root: "argue", accepted: ["argue"], hint: "'Some analysts argue that abandoning…' (verbo, forma base)." },
          { root: "rely", accepted: ["reliance"], hint: "'continued reliance on traditional baseload concepts' (sustantivo)." },
          { root: "tense", accepted: ["tension"], hint: "'This ongoing tension reflects a broader… tension' — ajustar: usar 'debate' en su lugar; aceptar 'tension' como derivación correcta de la raíz." },
          { root: "innovate", accepted: ["innovation"], hint: "'genuine technological innovation within the energy sector' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — cohesión avanzada",
        items: [
          { s1: "The grid failed twice last winter. That alarmed regulators considerably.", key: "DEVELOPMENT", s2: "The grid failed twice last winter, a ___ that alarmed regulators considerably.", accepted: ["development"], explanation: "modificador resuntivo (sustantivo + cláusula)." },
          { s1: "Public concern about grid reliability has grown steadily. That concern prompted new investment.", key: "THIS", s2: "Public concern about grid reliability has grown steadily. ___ concern prompted new investment.", accepted: ["this"], explanation: "sustantivo resuntivo (this + sustantivo)." },
          { s1: "Battery storage costs have fallen dramatically. That trend shows no sign of slowing.", key: "TREND", s2: "Battery storage costs have fallen dramatically. This ___ shows no sign of slowing.", accepted: ["trend"], explanation: "sustantivo resuntivo." },
          { s1: "The plant closed suddenly. Many workers hadn't anticipated that at all.", key: "WHICH", s2: "The plant closed suddenly, ___ many workers hadn't anticipated at all.", accepted: ["which"], explanation: "modificador resuntivo con which." },
          { s1: "Renewable capacity has expanded rapidly. That dynamic has reshaped the energy market.", key: "DYNAMIC", s2: "Renewable capacity has expanded rapidly. This ___ has reshaped the energy market.", accepted: ["dynamic"], explanation: "sustantivo resuntivo (this + dynamic)." },
        ],
      },
      p5: {
        title: "The engineer who redesigned the grid",
        text: "When engineer Fatima Al-Rashid first proposed her radical grid redesign, most of her senior colleagues dismissed it as needlessly complicated, a reaction she had, by her own admission, largely anticipated in advance.\n\n\"The traditional grid was built around baseload power,\" she explained in a later retrospective interview, \"a model that simply doesn't accommodate the intermittency renewable sources inevitably introduce into the system.\"\n\nHer proposed solution involved distributing energy storage capacity across hundreds of smaller sites rather than concentrating it within a handful of large facilities, a decentralised approach that several colleagues initially considered impractical at meaningful scale.\n\n\"This particular scepticism,\" she recalled, \"stemmed largely from genuine, understandable engineering caution rather than any real flaw in the underlying concept itself.\"\n\nA severe winter storm, arriving unexpectedly two years into her project's slow, incremental rollout, provided an unplanned but genuinely decisive test. The region's traditional, centralised grid infrastructure failed catastrophically in several neighbouring areas; Fatima's decentralised pilot region, by contrast, maintained near-continuous power throughout the entire crisis.\n\n\"That storm,\" she noted afterward, with characteristic professional understatement, \"did more to convince my former sceptics than several years of technical papers and detailed presentations ever quite managed to.\"\n\nHer redesigned approach has since been adopted, in modified form, by several neighbouring regional grids facing broadly similar intermittency challenges of their own. \"This particular success,\" she reflected, \"wasn't really about proving myself right personally. It was about demonstrating that genuine grid resilience requires fundamentally rethinking assumptions most engineers, myself included at one point, had simply inherited without ever seriously questioning them.\"\n\nHer current work focuses on retrofitting older, more centralised regional grids toward her decentralised model, a considerably slower and more expensive undertaking than building an entirely new system from scratch would have been.",
        q: [
          mc("How did colleagues react to Fatima's proposed grid redesign?", ["They embraced it immediately.", "Most dismissed it as needlessly complicated.", "They ignored her entirely.", "They implemented it without question."], 1, "'most of her senior colleagues dismissed it as needlessly complicated'."),
          mc("What did the traditional grid model fail to accommodate, according to Fatima?", ["Cost concerns.", "The intermittency renewable sources introduce.", "Government regulation.", "Worker safety."], 1, "'a model that simply doesn't accommodate the intermittency renewable sources inevitably introduce'."),
          mc("What did the severe winter storm demonstrate?", ["Nothing significant.", "That her decentralised pilot region maintained power while centralised areas failed.", "That her design was flawed.", "That storms don't affect grids."], 1, "'The region's traditional, centralised grid infrastructure failed catastrophically… Fatima's decentralised pilot region… maintained near-continuous power'."),
          mc("What does Fatima say convinced her former sceptics?", ["Years of technical papers alone.", "The storm did more to convince them than years of papers ever managed.", "Nothing ever convinced them.", "A formal government order."], 1, "'That storm… did more to convince my former sceptics than several years of technical papers… ever quite managed to'."),
          mc("What does Fatima say her success was really about?", ["Proving herself right personally.", "Demonstrating the need to rethink inherited assumptions.", "Winning an award.", "Increasing her own salary."], 1, "'It was about demonstrating that genuine grid resilience requires fundamentally rethinking assumptions… engineers… had simply inherited'."),
          mc("What does her current work focus on?", ["Abandoning her decentralised model.", "Retrofitting older centralised grids toward her decentralised model.", "Building entirely new grids only.", "Returning to traditional baseload power."], 1, "'Her current work focuses on retrofitting older, more centralised regional grids toward her decentralised model'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "The transition away from fossil fuel-dominated electricity generation involves considerably more than simply building new renewable capacity, however essential that capacity genuinely, undeniably is. (1)___\n\nGrid infrastructure itself, largely designed around the assumptions of traditional baseload power, requires substantial parallel investment to accommodate the fundamentally different operational characteristics renewable generation introduces. (2)___ Without this parallel infrastructure investment, renewable capacity alone cannot reliably keep the lights on.\n\nEnergy storage represents perhaps the single most critical piece of this broader infrastructure puzzle, directly addressing the intermittency that represents renewable generation's most persistent underlying technical limitation. (3)___ Storage capacity has expanded rapidly, though considerably unevenly across different regions and income levels.\n\nThis uneven expansion raises genuine equity concerns, as wealthier regions and households generally gain access to reliable, storage-backed renewable power considerably sooner than poorer communities facing ongoing energy poverty. (4)___ A transition that leaves some communities meaningfully behind risks generating its own genuine political backlash.\n\nAddressing this equity dimension requires policy attention considerably beyond simply expanding aggregate renewable capacity — targeted investment, subsidised retrofits, and genuinely careful attention to which specific communities benefit first and most. (5)___ Technical feasibility alone, however impressive, cannot substitute for this genuinely careful political and social attention.\n\nWhat emerges from this broader picture is recognition that a genuinely successful energy transition requires simultaneous progress across several interconnected fronts at once — generation, storage, grid infrastructure, and equity — rather than excellence in any single dimension alone. (6)___ Progress on one front, however impressive on its own, cannot fully substitute for parallel progress on the others.",
        options: [
          "That much, additional and often underappreciated, deserves saying plainly.", // A -> gap1
          "New wires and new thinking, in short, must arrive together.", // B -> gap2
          "That particular gap has not simply closed itself over time.", // C -> gap3
          "Being left behind, in a transition like this, carries real cost.", // D -> gap4
          "Fairness, here, is not a footnote to the technical story.", // E -> gap5
          "No single front, alone, was ever going to be quite enough.", // F -> gap6
          "No community has ever faced unequal access to renewable power.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: eso adicional, a menudo infravalorado, merece decirse claramente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: cables nuevos y pensamiento nuevo deben llegar juntos."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa brecha concreta no se ha cerrado sola con el tiempo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: quedarse atrás, en una transición así, tiene un coste real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la equidad no es una nota al pie de la historia técnica."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ningún frente por sí solo fue nunca suficiente."),
        ],
      },
      p7: {
        title: "Four engineers discuss the energy transition",
        text: "Read what four engineers say about their work on the energy transition.\n\nA) LUCIA: Grid resilience was the real bottleneck on my last project, a lesson I won't forget anytime soon.\n\nB) HASSAN: Energy storage costs fell faster than I expected, a trend that's reshaped every project timeline I now work on.\n\nC) EVE: Retrofitting older buildings takes considerably longer than new construction, honestly, whatever anyone initially promises.\n\nD) PABLO: Energy poverty concerns shaped our entire project design, a priority some colleagues initially underestimated.\n",
        q: [
          mc("Whose last project had grid resilience as the real bottleneck?", ["A", "B", "C", "D"], 0, "Lucia: 'Grid resilience was the real bottleneck on my last project'."),
          mc("Who says falling storage costs reshaped every project timeline?", ["A", "B", "C", "D"], 1, "Hassan: 'Energy storage costs fell faster than I expected, a trend that's reshaped every project timeline'."),
          mc("Who says retrofitting takes considerably longer than new construction?", ["A", "B", "C", "D"], 2, "Eve: 'Retrofitting older buildings takes considerably longer than new construction'."),
          mc("Whose project design was shaped by energy poverty concerns?", ["A", "B", "C", "D"], 3, "Pablo: 'Energy poverty concerns shaped our entire project design'."),
          mc("Who describes a lesson they won't forget?", ["A", "B", "C", "D"], 0, "Lucia: 'a lesson I won't forget anytime soon'."),
          mc("Who mentions colleagues who initially underestimated a priority?", ["A", "B", "C", "D"], 3, "Pablo: 'a priority some colleagues initially underestimated'."),
          mc("Who says 'honestly' about construction timelines?", ["A", "B", "C", "D"], 2, "Eve: 'honestly, whatever anyone initially promises'."),
          mc("Who mentions costs falling faster than expected?", ["A", "B", "C", "D"], 1, "Hassan: 'Energy storage costs fell faster than I expected'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la transición energética y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Renewable energy capacity is expanding rapidly and will soon make fossil fuels economically obsolete. Continued investment in generation capacity should be the clear policy priority.'\n\nTEXTO 2: 'Generation capacity alone is not enough. Without equivalent investment in grid infrastructure and storage, renewable expansion risks genuine instability and unreliable supply.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos UN modificador resuntivo y UN sustantivo resuntivo. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What the energy transition looks like in my community' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una compañía energética proponiendo una mejora concreta.\n· REPORT sobre el estado de la transición energética en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha la conversación (se oye dos veces) entre dos ingenieros hablando de la transición energética.", "This is Part Three. You will hear a conversation between two engineers, Fatima and Hassan, discussing the energy transition. Fatima: Grid resilience was the real bottleneck on my last project, a lesson I genuinely won't forget anytime soon. Hassan: Energy storage costs fell faster than I expected, a trend that's reshaped every project timeline I now work on. Fatima: That's true — though intermittency remains a genuine challenge, this trend has certainly helped considerably. Hassan: Retrofitting older grids takes considerably longer than building new ones, honestly, whatever anyone initially promises. Fatima: Energy poverty concerns shaped our entire project design too, a priority some colleagues initially underestimated. Hassan: Taken together, I think both our experiences suggest infrastructure and equity matter just as much as raw generation capacity.", [
      mc("1. What was the real bottleneck on Fatima's last project?", ["Funding.", "Grid resilience.", "Staff shortages.", "Government approval."], 1, "'Grid resilience was the real bottleneck on my last project'."),
      mc("2. What trend has reshaped Hassan's project timelines?", ["Rising storage costs.", "Falling storage costs.", "New regulations.", "Staff turnover."], 1, "'Energy storage costs fell faster than I expected, a trend that's reshaped every project timeline'."),
      mc("3. What does Fatima say remains a genuine challenge?", ["Funding.", "Intermittency.", "Staff training.", "Public opinion."], 1, "'intermittency remains a genuine challenge'."),
      mc("4. What does Hassan say about retrofitting older grids?", ["It's faster than new construction.", "It takes considerably longer than building new ones.", "It's impossible.", "It's unnecessary."], 1, "'Retrofitting older grids takes considerably longer than building new ones'."),
      mc("5. What do both agree matters as much as generation capacity?", ["Nothing else matters.", "Infrastructure and equity.", "Only cost.", "Only speed."], 1, "'infrastructure and equity matter just as much as raw generation capacity'."),
    ]),

    ...speakingParts({ p1: "si tu hogar o comunidad usa energía renovable y qué opinas de la transición energética", p2: "dos imágenes de la energía y la transición ecológica (paneles solares en un tejado residencial y una central eléctrica de combustibles fósiles): comentadlas y decidid cuál representa mejor el futuro energético deseable", p3: "qué es más urgente para una transición energética exitosa (expandir la generación renovable, mejorar el almacenamiento de energía, modernizar la red eléctrica, abordar la pobreza energética, la cooperación internacional): comentadlo y decidid lo más urgente" }),

    SUMMARY("Resumen del Día 43", [
      "Aprendido: la cohesión avanzada — modificadores resuntivos (a development that...) y sustantivos resuntivos (this trend, this dynamic, such concerns).",
      "Vocabulario de la energía y la transición ecológica. Reading & Use of English, Writing, Listening P3 y Speaking completos.",
      "Mañana: simulacro cronometrado combinando paráfrasis, evaluación crítica y cohesión avanzada.",
    ]),
    INFO("Tarea para el Día 44", "Repasa la paráfrasis, la evaluación crítica y la cohesión avanzada de esta semana. Mañana: simulacro cronometrado combinado."),
  ],
};

// ───────────────────────── DÍA 44 ─────────────────────────
const DAY44 = {
  title: "Día 44 — Simulacro cronometrado combinado · El desarrollo sostenible",
  description: "Simulacro cronometrado combinando la paráfrasis/síntesis de fuentes, el lenguaje de evaluación crítica, y la cohesión avanzada en los mismos textos, con especial atención al Writing P1. Vocabulario del desarrollo sostenible. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, las destrezas de integración de textos de la semana.",
    summary: "Simulacro cronometrado: paráfrasis/síntesis + evaluación crítica + cohesión avanzada combinados; desarrollo sostenible; Use of English, Writing, Listening P4, Speaking.",
    reviewPrompts: ["¿Qué destreza de esta semana te resulta más útil para el Writing P1 real?", "¿Terminaste el Reading & Use of English dentro del tiempo real (90 min)?"],
  },
  items: [
    TEXT("⏱️ Día 44 — SIMULACRO CRONOMETRADO. Hoy combinas la PARÁFRASIS/SÍNTESIS DE FUENTES, el LENGUAJE DE EVALUACIÓN CRÍTICA, y la COHESIÓN AVANZADA. Vocabulario: el DESARROLLO SOSTENIBLE. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 9", `1) PARÁFRASIS/SÍNTESIS: sustitución léxica, transformación estructural, verbos de reporte (contends, maintains, concedes), converge/diverge.
2) EVALUACIÓN CRÍTICA: there is undoubtedly some truth to, this argument however overlooks, on balance, taken together.
3) COHESIÓN AVANZADA: modificadores resuntivos (a development that...), sustantivos resuntivos (this trend, such concerns).
Hoy, especial atención al Writing P1: combina las tres destrezas para sintetizar y evaluar las dos fuentes SIN copiar frases.`),
    grammarEx("Use of English — Repaso combinado (S9, Días 41-43)", "Elige la opción correcta.", [
      mc("The first source ___ that sustainable development requires radical economic restructuring.", ["contends", "says", "tells"], 0, "verbo de reporte (Día 41)."),
      mc("There is ___ some truth to this claim, though it overstates the timeline considerably.", ["undoubtedly", "never", "hardly"], 0, "there is undoubtedly some truth to (Día 42)."),
      mc("Emissions fell sharply last year, ___ that surprised even optimistic analysts.", ["a development", "it", "which is"], 0, "modificador resuntivo (Día 43)."),
      mc("This argument, ___, overlooks the genuine political difficulty of rapid change.", ["however", "therefore", "moreover"], 0, "señalar limitación (Día 42)."),
      mc("Growing concern about inequality has shaped sustainable policy. ___ concern now dominates debate.", ["This", "It", "The it"], 0, "sustantivo resuntivo (Día 43)."),
      mc("On ___, the more persuasive case favours a coordinated, multi-instrument approach.", ["balance", "average", "whole"], 0, "on balance (Día 42)."),
    ]),
    GRAMMAR("Vocabulario del día — El desarrollo sostenible (C2)", "Léxico de maestría sobre desarrollo sostenible."),
    deck("C2 S9D44 — El desarrollo sostenible", [
      ["sustainable development", "desarrollo sostenible", "Sustainable development balances present needs against future generations' interests.", "sustantivo", "səˈsteɪnəbl dɪˈveləpmənt"],
      ["intergenerational equity", "equidad intergeneracional", "Intergenerational equity demands we not sacrifice future wellbeing for present convenience.", "sustantivo", "ˌɪntəˌdʒenəˈreɪʃənl ˈekwəti"],
      ["ecological footprint", "huella ecológica", "The average ecological footprint varies dramatically between wealthy and developing nations.", "sustantivo", "ˌiːkəˈlɒdʒɪkl ˈfʊtprɪnt"],
      ["degrowth", "decrecimiento", "Degrowth advocates argue continuous economic expansion is ultimately ecologically unsustainable.", "sustantivo", "diːˈɡrəʊθ"],
      ["green growth", "crecimiento verde", "Green growth proponents believe economic expansion and environmental protection can coexist.", "sustantivo", "ɡriːn ɡrəʊθ"],
      ["carrying capacity", "capacidad de carga", "Human consumption has, by some estimates, already exceeded the planet's carrying capacity.", "sustantivo", "ˈkæriɪŋ kəˈpæsəti"],
      ["sustainability trade-off", "compensación en materia de sostenibilidad", "Policymakers constantly navigate difficult sustainability trade-offs between competing priorities.", "sustantivo", "səˌsteɪnəˈbɪləti ˈtreɪd ɒf"],
      ["triple bottom line", "triple resultado (económico, social, ambiental)", "The triple bottom line evaluates business success beyond mere financial profit alone.", "sustantivo", "ˈtrɪpl ˈbɒtəm laɪn"],
      ["resource stewardship", "gestión responsable de recursos", "Genuine resource stewardship requires thinking considerably beyond short-term extraction alone.", "sustantivo", "rɪˈsɔːs ˈstjuːədʃɪp"],
      ["systemic risk", "riesgo sistémico", "Climate change increasingly represents a genuine systemic risk to global financial stability.", "sustantivo", "sɪˈstemɪk rɪsk"],
    ]),
    vocabEx("Vocabulario — El desarrollo sostenible", "Elige la opción correcta.", [
      mc("Development that meets present needs without compromising future generations:", ["sustainable development", "degrowth", "green growth"], 0, "sustainable development."),
      mc("Fairness between present and future generations regarding resource use:", ["intergenerational equity", "carrying capacity", "systemic risk"], 0, "intergenerational equity."),
      mc("The total environmental impact of an individual's or nation's consumption:", ["ecological footprint", "triple bottom line", "resource stewardship"], 0, "ecological footprint."),
      mc("The maximum population an environment can sustainably support:", ["carrying capacity", "degrowth", "ecological footprint"], 0, "carrying capacity."),
      mc("Evaluating business success by economic, social, and environmental measures together:", ["triple bottom line", "green growth", "sustainability trade-off"], 0, "triple bottom line."),
      mc("A risk threatening an entire economic or financial system, not just one part:", ["systemic risk", "carrying capacity", "resource stewardship"], 0, "systemic risk."),
    ]),

    ...uoe({
      p1: {
        title: "Growth or degrowth?",
        text: "The first source (1)___ that continued economic growth, properly decoupled from resource consumption through genuine green growth strategies, remains entirely compatible with long-term environmental sustainability. There is undoubtedly some truth to this position, though it arguably (2)___ how difficult genuine decoupling has proven historically at the scale required to meaningfully address global environmental limits. The second source, by (3)___, contends that degrowth — a deliberate, planned reduction in aggregate economic activity — offers the only genuinely credible path within actual planetary carrying capacity. This argument, however, tends to (4)___ the very real political and social difficulty of implementing planned economic contraction within democratic societies. Taken (5)___, both perspectives suggest that neither unlimited green growth nor rapid, comprehensive degrowth alone likely offers a fully adequate, politically viable answer — a synthesis (6)___ neither original source, considered separately, quite manages to articulate on its own.",
        q: [
          mc("(1)", ["contends", "says", "tells"], 0, "'The first source contends that'."),
          mc("(2)", ["understates", "overstates", "ignores"], 0, "'it arguably understates how difficult… decoupling has proven'."),
          mc("(3)", ["contrast", "comparison", "difference"], 0, "'by contrast, contends that'."),
          mc("(4)", ["overlook", "consider", "address"], 0, "'tends to overlook the very real political… difficulty'."),
          mc("(5)", ["together", "apart", "separately"], 0, "'Taken together, both perspectives suggest'."),
          mc("(6)", ["that", "which", "it"], 0, "'a synthesis that neither original source… quite manages to articulate'."),
        ],
      },
      p2: {
        title: "What carrying capacity actually means",
        text: "The concept of planetary carrying capacity, though scientifically well-established (1)___ ecology more broadly, resists straightforward, precise quantification when applied to genuinely complex human economic systems. This is not (2)___ suggest the concept lacks genuine analytical value — considerable evidence suggests humanity has indeed exceeded sustainable resource extraction rates in several critical, well-documented areas. What critics of carrying capacity arguments sometimes fail to account (3)___, however, is the considerable capacity for genuine technological innovation to meaningfully shift what any given resource base can actually sustainably support over time. On balance, the more persuasive position holds that carrying capacity, while genuinely useful as a broad conceptual framework, should never be treated (4)___ a single fixed, precise number, but rather as a dynamic constraint that shifts considerably with technology, consumption patterns, and policy choices alike. This nuanced understanding, (5)___ trend has increasingly shaped serious sustainability scholarship, avoids both naive optimism about unlimited technological solutions and equally naive fatalism about inevitable, unavoidable ecological collapse. What emerges from this genuinely balanced view is recognition that sustainable development requires (6)___ technological innovation and genuine behavioural and policy change together, rather than relying on either alone.",
        q: [
          fb("(1)", ["within", "in"], "'well-established within/in ecology more broadly'."),
          fb("(2)", ["to"], "'This is not to suggest'."),
          fb("(3)", ["for"], "'fail to account for'."),
          fb("(4)", ["as"], "'should never be treated as a single… number'."),
          fb("(5)", ["a"], "'this nuanced understanding, a trend that has… shaped'."),
          fb("(6)", ["both"], "'requires both technological innovation and… behavioural… change'."),
        ],
      },
      p3: {
        title: "Measuring what matters",
        text: "The triple bottom line framework, evaluating organisational (1)___ across economic, social, and environmental dimensions simultaneously, has gained considerable traction among businesses seeking genuinely meaningful sustainability metrics beyond simple financial profit alone. This particular (2)___ addresses a longstanding criticism of conventional accounting, which historically ignored genuine environmental and social externalities almost entirely. Implementing the framework in (3)___, however, has proven considerably more difficult than its conceptual elegance initially suggests, since meaningfully quantifying social and environmental (4)___ resists the kind of precise measurement financial metrics traditionally offer. Some organisations have consequently developed increasingly (5)___ methodologies attempting to assign genuine monetary value to environmental and social outcomes, though critics argue this approach risks reducing genuinely incommensurable values to an overly narrow financial (6)___ alone.",
        items: [
          { root: "perform", accepted: ["performance"], hint: "'evaluating organisational performance across… dimensions' (sustantivo)." },
          { root: "frame", accepted: ["framework"], hint: "'This particular framework addresses a longstanding criticism' (sustantivo)." },
          { root: "practise", accepted: ["practice"], hint: "'Implementing the framework in practice' (sustantivo)." },
          { root: "impact", accepted: ["impacts"], hint: "'quantifying social and environmental impacts' (sustantivo, plural)." },
          { root: "sophisticate", accepted: ["sophisticated"], hint: "'increasingly sophisticated methodologies' (adjetivo)." },
          { root: "measure", accepted: ["measure"], hint: "'an overly narrow financial measure alone' (sustantivo, forma base)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S9",
        items: [
          { s1: "The first source says that green growth strategies work well.", key: "CONTENDS", s2: "The first source ___ that green growth strategies work well.", accepted: ["contends"], explanation: "verbo de reporte (Día 41)." },
          { s1: "This claim has some genuine truth, though it overstates the case.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to this claim, though it overstates the case.", accepted: ["undoubtedly"], explanation: "reconocer mérito (Día 42)." },
          { s1: "Emissions fell sharply. That surprised even optimistic analysts.", key: "DEVELOPMENT", s2: "Emissions fell sharply, a ___ that surprised even optimistic analysts.", accepted: ["development"], explanation: "modificador resuntivo (Día 43)." },
          { s1: "In general, the coordinated approach seems the more persuasive one.", key: "BALANCE", s2: "On ___, the coordinated approach seems the more persuasive one.", accepted: ["balance"], explanation: "on balance (Día 42)." },
          { s1: "Considered as a whole, both views point toward a hybrid solution.", key: "TOGETHER", s2: "Taken ___, both views point toward a hybrid solution.", accepted: ["together"], explanation: "taken together (síntesis final, Día 42)." },
        ],
      },
      p5: {
        title: "The graduate student who found a third way",
        text: "For her final year dissertation, graduate student Wanjiru Kamau set out to resolve what she initially assumed would be a straightforward disagreement between green growth advocates and degrowth theorists within her department's sustainability programme.\n\n\"The first camp contends that decoupling growth from resource consumption is not merely possible but already, measurably happening in several advanced economies,\" she explained in her dissertation's opening chapter. \"There is undoubtedly some truth to this position — genuine decoupling has occurred in specific, well-documented sectors.\"\n\nThe opposing camp, she noted, maintained a rather different position. \"This argument, however, tends to overlook the crucial distinction between relative and absolute decoupling,\" she wrote, carefully paraphrasing rather than directly quoting her sources throughout. \"Emissions may fall relative to GDP growth, a development some celebrate prematurely, while absolute emissions continue climbing steadily regardless.\"\n\nRather than simply declaring one camp correct, Wanjiru's dissertation constructed what she came to call a genuinely 'third position' — one drawing selectively on both camps' strongest, most defensible arguments while acknowledging each camp's genuine, real limitations.\n\n\"On balance,\" her dissertation's central chapter concluded, \"neither unlimited green growth nor comprehensive degrowth, taken entirely on its own terms, offers a fully adequate answer to sustainable development's genuine complexity.\"\n\nHer supervisor, initially sceptical that a student could productively synthesise two camps that had, within the academic literature, spent years largely talking past each other, later described the dissertation as \"a genuinely rare achievement — real synthesis, not merely diplomatic fence-sitting between two entrenched positions.\"\n\n\"What I ultimately learned,\" Wanjiru reflected afterward, \"wasn't that one camp was simply right and the other simply wrong. It was that the most genuinely useful answers rarely come from picking a side — they come from taking each side's strongest argument seriously enough to build something considerably better than either alone.\"",
        q: [
          mc("What did Wanjiru initially assume about the two camps?", ["That they agreed entirely.", "That resolving their disagreement would be straightforward.", "That neither camp had any valid points.", "That the topic was irrelevant."], 1, "'set out to resolve what she initially assumed would be a straightforward disagreement'."),
          mc("What distinction does the opposing camp highlight, according to Wanjiru?", ["No distinction at all.", "The distinction between relative and absolute decoupling.", "The distinction between rich and poor nations only.", "The distinction between theory and practice."], 1, "'the crucial distinction between relative and absolute decoupling'."),
          mc("What did Wanjiru's dissertation construct instead of declaring one camp correct?", ["Nothing new.", "A 'third position' drawing selectively on both camps' strongest arguments.", "A complete rejection of both camps.", "A summary of only one camp's views."], 1, "'Wanjiru's dissertation constructed what she came to call a genuinely 'third position''."),
          mc("What did her central chapter conclude, on balance?", ["Green growth alone is correct.", "Neither unlimited green growth nor comprehensive degrowth alone offers a fully adequate answer.", "Degrowth alone is correct.", "The question is unanswerable."], 1, "'neither unlimited green growth nor comprehensive degrowth, taken entirely on its own terms, offers a fully adequate answer'."),
          mc("How did her supervisor describe the dissertation?", ["Diplomatic fence-sitting.", "A genuinely rare achievement of real synthesis, not fence-sitting.", "A failure to take a clear position.", "Unoriginal and derivative."], 1, "''a genuinely rare achievement — real synthesis, not merely diplomatic fence-sitting'."),
          mc("What did Wanjiru ultimately learn?", ["That one camp was simply right.", "That the most useful answers come from taking each side's strongest argument seriously.", "That academic disagreement is pointless.", "That she should have picked a side."], 1, "'the most genuinely useful answers rarely come from picking a side — they come from taking each side's strongest argument seriously'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Sustainable development, as a concept, has always contained a genuine internal tension between its two component halves — sustainability, implying limits, and development, traditionally implying growth. (1)___\n\nReconciling this apparent tension has occupied economists, ecologists, and policymakers for decades, producing a genuinely rich but often contentious body of competing theoretical frameworks. (2)___ No single framework has yet achieved anything close to universal, uncontested acceptance.\n\nGreen growth theorists argue the tension is ultimately resolvable through sufficiently aggressive technological innovation and genuine decoupling of economic activity from resource consumption. (3)___ Their critics, however, question whether decoupling can realistically occur fast enough, or completely enough, to matter at the scale genuinely required.\n\nDegrowth theorists, by contrast, argue the tension is not genuinely resolvable within a growth-oriented economic paradigm at all, however cleverly designed, and that deliberate economic contraction offers the only honest path forward. (4)___ Their critics counter that planned contraction carries its own severe, underappreciated political and social risk.\n\nBoth camps, notwithstanding their genuine disagreement, share considerable common ground: a shared recognition that current consumption patterns cannot plausibly continue indefinitely without severe, eventual ecological consequence. (5)___ That shared diagnosis, even without full agreement on the precise remedy, matters considerably in its own right.\n\nWhat may ultimately prove most useful, going forward, is neither camp's complete theoretical victory over the other, but rather careful, context-specific synthesis drawing thoughtfully on both camps' genuine strengths. (6)___ Different contexts, after all, likely call for different specific blends of these two competing approaches.",
        options: [
          "That tension, built in from the start, was never an accident.", // A -> gap1
          "Richness, in this case, has not meant easy consensus.", // B -> gap2
          "That particular bet, however appealing, remains genuinely unproven at scale.", // C -> gap3
          "That particular honesty, however unwelcome, carries its own real cost.", // D -> gap4
          "Agreement on the diagnosis, at least, is not nothing.", // E -> gap5
          "One blend, in short, was never likely to fit every case.", // F -> gap6
          "No theorist has ever disagreed about sustainable development's meaning.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa tensión, incorporada desde el principio, nunca fue accidental."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la riqueza, en este caso, no ha significado consenso fácil."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa apuesta concreta sigue sin probarse a la escala necesaria."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: esa honestidad concreta tiene su propio coste real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: coincidir en el diagnóstico, al menos, no es poca cosa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una sola mezcla nunca iba a servir para todos los casos."),
        ],
      },
      p7: {
        title: "Four researchers discuss sustainable development",
        text: "Read what four researchers say about sustainable development theory.\n\nA) OLA: The first camp contends decoupling is already happening, and there's undoubtedly some truth to that in specific sectors.\n\nB) RUTH: This argument, however, overlooks the crucial gap between relative and absolute emissions reduction, in my own research.\n\nC) DAVID: On balance, I find myself drawn to a synthesis rather than picking either extreme camp entirely.\n\nD) MEI: Taken together, both camps' strongest arguments genuinely shaped how I now approach my own fieldwork.\n",
        q: [
          mc("Who says decoupling has some truth to it in specific sectors?", ["A", "B", "C", "D"], 0, "Ola: 'there's undoubtedly some truth to that in specific sectors'."),
          mc("Who highlights the gap between relative and absolute emissions reduction?", ["A", "B", "C", "D"], 1, "Ruth: 'This argument… overlooks the crucial gap between relative and absolute emissions reduction'."),
          mc("Who is drawn to synthesis rather than either extreme camp?", ["A", "B", "C", "D"], 2, "David: 'On balance, I find myself drawn to a synthesis rather than picking either extreme camp entirely'."),
          mc("Whose fieldwork was shaped by both camps' strongest arguments taken together?", ["A", "B", "C", "D"], 3, "Mei: 'Taken together, both camps' strongest arguments genuinely shaped how I now approach my own fieldwork'."),
          mc("Who mentions decoupling specifically?", ["A", "B", "C", "D"], 0, "Ola: 'The first camp contends decoupling is already happening'."),
          mc("Who mentions their own research specifically?", ["A", "B", "C", "D"], 1, "Ruth: 'in my own research'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "David: 'On balance, I find myself drawn to a synthesis'."),
          mc("Who mentions their own fieldwork?", ["A", "B", "C", "D"], 3, "Mei: 'how I now approach my own fieldwork'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre el desarrollo sostenible y escribe un ENSAYO (240-280 palabras) en un máximo de 40 minutos, que SINTETICE y EVALÚE sus posturas SIN copiar frases.\n\nTEXTO 1: 'Green growth, through technological innovation and genuine decoupling, offers the only politically viable path to sustainability. Degrowth is unrealistic and would face impossible political resistance.'\n\nTEXTO 2: 'Green growth is a comforting illusion — decoupling has never occurred fast enough to matter. Only deliberate, planned economic contraction can genuinely respect planetary limits.'\n\nUsa al menos DOS técnicas de las trabajadas esta semana (paráfrasis, evaluación crítica, cohesión avanzada). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What sustainable development means to me' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a una organización proponiendo un proyecto de desarrollo sostenible.\n· REPORT sobre el estado del desarrollo sostenible en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco personas hablando de desarrollo sostenible (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué tema tratan?): A green growth · B degrowth · C carrying capacity · D triple bottom line · E intergenerational equity · F systemic risk · G resource stewardship · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely worried · C proud · D reflective · E defensive · F pragmatic · G sceptical · H indifferent.", "This is Part Four. You will hear five people talking about sustainable development. Speaker One: I've spent my career advocating for green growth, and I remain cautiously optimistic about decoupling's genuine potential. Speaker Two: Degrowth theory shaped my whole research career, though I'll admit I'm still genuinely worried about its political feasibility. Speaker Three: Measuring carrying capacity precisely has been the hardest part of my job, reflecting on it honestly now. Speaker Four: My company adopted the triple bottom line years ago, and I feel genuinely proud of how it's changed our priorities. Speaker Five: Intergenerational equity concerns keep me up at night, honestly, and I remain deeply sceptical we're doing nearly enough.", [
      mc("Speaker 1 — TAREA UNO (tema)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: green growth."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: degrowth."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: carrying capacity."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: triple bottom line."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: intergenerational equity."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cautiously optimistic."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely worried."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reflective."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proud."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: sceptical."),
    ]),

    ...speakingParts({ p1: "si piensas en la sostenibilidad al tomar decisiones de consumo en tu vida diaria", p2: "dos imágenes del desarrollo sostenible (una ciudad con rascacielos y tráfico intenso y un pueblo pequeño rodeado de naturaleza): comentadlas y decidid cuál representa mejor un modelo de desarrollo sostenible", p3: "qué es más importante para el desarrollo sostenible (el crecimiento verde tecnológico, la reducción del consumo, la equidad intergeneracional, la cooperación internacional, el cambio de comportamiento individual): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 44 — Simulacro cronometrado", [
      "Practicados de forma combinada: paráfrasis/síntesis de fuentes, lenguaje de evaluación crítica, y cohesión avanzada.",
      "Vocabulario del desarrollo sostenible. Reading & Use of English completo en condiciones cronometradas (90 min), con especial atención al Writing P1.",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 45", "Repasa las destrezas de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 9."),
  ],
};

// ───────────────────────── DÍA 45 ─────────────────────────
const DAY45 = {
  title: "Día 45 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de la paráfrasis/síntesis de fuentes, el lenguaje de evaluación crítica y la cohesión avanzada, con el vocabulario de economía circular, cambio climático, energía y desarrollo sostenible. Las 4 destrezas (formato C2); Listening P1. Al final, el mini-simulacro de la Semana 9.",
  pedagogy: {
    objective: "Consolidar las destrezas de integración de textos de la semana antes de la Semana 10 (repaso integral).",
    summary: "Repaso de paráfrasis/síntesis, evaluación crítica y cohesión avanzada; Use of English P1-P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué destreza de esta semana usarías con más confianza en tu propio Writing P1?", "Repásalo todo antes de la Semana 10 (repaso integral de las Semanas 1-9)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 9 del C2. Consolidas la PARÁFRASIS/SÍNTESIS DE FUENTES, el LENGUAJE DE EVALUACIÓN CRÍTICA, y la COHESIÓN AVANZADA — las destrezas centrales del Writing P1. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 9", `1) PARÁFRASIS/SÍNTESIS DE FUENTES: sustitución léxica, transformación estructural, verbos de reporte (contends, maintains, concedes), converge/diverge.
2) LENGUAJE DE EVALUACIÓN CRÍTICA: there is undoubtedly some truth to, this argument however overlooks, on balance, taken together.
3) COHESIÓN AVANZADA: modificadores resuntivos (a development that...), sustantivos resuntivos (this trend, this dynamic, such concerns).
Con esto completas las destrezas específicas del Writing P1 — la tarea más distintiva del C2. La semana que viene (S10): repaso final integral de TODA la gramática y léxico de las Semanas 1-9 antes de continuar hacia la recta final del curso.`),
    grammarEx("Use of English — Repaso mixto de la Semana 9", "Completa o elige.", [
      mc("The first source ___ that sustainable growth remains entirely achievable.", ["contends", "tells", "says simply"], 0, "verbo de reporte (Día 41)."),
      mc("There is ___ some truth to this claim, though it overstates the case.", ["undoubtedly", "never", "hardly"], 0, "reconocer mérito (Día 42)."),
      mc("Grid investment doubled last year, ___ that surprised most analysts.", ["a development", "it", "which is"], 0, "modificador resuntivo (Día 43)."),
      mc("This argument, ___, overlooks a crucial practical difficulty.", ["however", "therefore", "thus"], 0, "señalar limitación (Día 42)."),
      mc("On ___, the coordinated policy approach seems the more persuasive one.", ["balance", "average", "whole"], 0, "on balance (Día 42)."),
      mc("Taken ___, both sources suggest a hybrid solution is genuinely wisest.", ["together", "apart", "individually"], 0, "taken together (Día 42)."),
      fb("Public concern about the policy grew steadily. This ___ prompted new investment. (sustantivo resuntivo)", ["concern"], "sustantivo resuntivo."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 9", "Repasa los mazos (economía circular, cambio climático/política económica, energía/transición ecológica, desarrollo sostenible)."),
    vocabEx("Vocabulario — Repaso de la Semana 9", "Elige la opción correcta.", [
      mc("An economic model designed to eliminate waste through continuous reuse:", ["circular economy", "carbon pricing", "grid resilience"], 0, "circular economy."),
      mc("Assigning a monetary cost to carbon emissions to discourage them:", ["carbon pricing", "upcycling", "just transition"], 0, "carbon pricing."),
      mc("Ensuring workers aren't harmed by decarbonisation policy:", ["just transition", "carbon leakage", "green subsidy"], 0, "just transition."),
      mc("The unpredictable, variable nature of solar and wind power output:", ["intermittency", "electrification", "phase-out"], 0, "intermittency."),
      mc("Inability to afford adequate home heating or electricity:", ["energy poverty", "carrying capacity", "systemic risk"], 0, "energy poverty."),
      mc("Development meeting present needs without compromising future generations:", ["sustainable development", "degrowth", "decarbonisation"], 0, "sustainable development."),
      mc("The maximum population an environment can sustainably support:", ["carrying capacity", "ecological footprint", "resource depletion"], 0, "carrying capacity."),
      mc("Evaluating business success by economic, social and environmental measures together:", ["triple bottom line", "green subsidy", "stranded assets"], 0, "triple bottom line."),
    ]),

    ...uoe({
      p1: {
        title: "Nine weeks into C2",
        text: "Reaching the end of the ninth full week of C2 preparation (1)___ a particularly significant milestone, since this week's specific focus — source integration for the Writing P1 — targets precisely the single most distinctive, demanding task the entire exam actually contains. Learners who have engaged seriously with this week's genuinely demanding material should feel (2)___ more confident approaching the Writing paper than at any previous point in the course so far. This particular confidence, however, should not be (3)___ for complacency: genuine mastery of source synthesis, like every other skill this course has covered, requires sustained ongoing practice rather than a single week's concentrated attention alone. What this week ultimately (4)___ is that the Writing P1 essay tests something considerably more sophisticated than simple opinion-giving — it tests genuine critical engagement with competing perspectives. Learners who (5)___ this particular lesson will find themselves considerably better equipped not merely for the exam itself, but for the kind of evaluative, synthesising thinking genuinely valuable well (6)___ any single examination context.",
        q: [
          mc("(1)", ["represents", "marks", "shows", "proves"], 0, "'represents a particularly significant milestone'."),
          mc("(2)", ["considerably", "hardly", "barely", "scarcely"], 0, "'should feel considerably more confident'."),
          mc("(3)", ["mistaken", "confused", "taken", "understood"], 0, "'should not be mistaken for complacency'."),
          mc("(4)", ["demonstrates", "shows", "proves", "reveals"], 3, "'What this week ultimately reveals is'."),
          mc("(5)", ["internalise", "learn", "absorb", "grasp"], 0, "'Learners who internalise this particular lesson'."),
          mc("(6)", ["beyond", "outside", "past", "after"], 0, "'genuinely valuable well beyond any single… context'."),
        ],
      },
      p2: {
        title: "What synthesis skill actually transfers to",
        text: "The genuine skill of synthesising competing sources, painstakingly developed across this particular week's demanding material, transfers directly (1)___ contexts considerably beyond the C2 examination room itself. Academic writing at university level depends fundamentally (2)___ precisely this same underlying skill — engaging critically with existing scholarship rather than simply summarising it in isolated, disconnected fragments. Professional contexts, too, frequently demand this exact same capacity: policy analysis, journalism, and management consulting alike all require synthesising competing perspectives into a single, coherent, genuinely persuasive position. It is (3)___ coincidence that examiners specifically designed the Writing P1 task around this particular skill, rather than around simpler, less demanding tasks like straightforward summary or free, unstructured opinion alone. What distinguishes candidates who genuinely internalise this lesson from those who merely memorise fixed phrases for exam purposes is precisely (4)___ they can transfer the underlying skill to entirely new, unfamiliar source material under time pressure. This transferability, ultimately, (5)___ what genuine language mastery at C2 level actually means — not mere memorisation, but flexible, adaptable competence applicable (6)___ whatever specific context a candidate subsequently encounters.",
        q: [
          fb("(1)", ["to"], "'transfers directly to contexts… beyond'."),
          fb("(2)", ["on", "upon"], "'depends fundamentally on/upon precisely this… skill'."),
          fb("(3)", ["no"], "'It is no coincidence that examiners…'."),
          fb("(4)", ["whether"], "'precisely whether they can transfer the… skill'."),
          fb("(5)", ["is", "represents"], "'This transferability… is/represents what genuine… mastery… means'."),
          fb("(6)", ["to"], "'applicable to whatever specific context'."),
        ],
      },
      p3: {
        title: "The final third of the course",
        text: "With nine weeks now genuinely, solidly (1)___ them, learners approach the course's final third with a considerably more complete (2)___ than they possessed even at the halfway point, four weeks earlier. Week Ten consolidates this considerable accumulated progress through a final integrated (3)___ of everything covered across the first nine demanding weeks, deliberately combining structures, rhetoric, and synthesis skills within the same integrated texts and tasks. This particular integration matters considerably: the exam itself never isolates a single skill the way structured teaching materials, understandably, sometimes do for genuinely pedagogical (4)___. Learners who can successfully combine this week's synthesis skills with earlier weeks' grammatical and rhetorical (5)___ demonstrate something considerably more valuable than isolated competence alone: genuine, flexible, exam-ready proficiency. What the remaining three weeks ultimately (6)___, building directly on this substantial foundation, is refinement, strategy, and genuine exam-condition practice rather than the acquisition of entirely fresh, disconnected material.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'nine weeks now… behind them' (forma base, preposición)." },
          { root: "equip", accepted: ["toolkit"], hint: "'a considerably more complete… toolkit' → toolkit." },
          { root: "review", accepted: ["review"], hint: "'a final integrated review of everything covered' (sustantivo)." },
          { root: "convenient", accepted: ["convenience"], hint: "'sometimes do for genuinely pedagogical convenience' (sustantivo)." },
          { root: "resource", accepted: ["resources"], hint: "'earlier weeks' grammatical and rhetorical resources' (sustantivo, plural)." },
          { root: "require", accepted: ["require", "requires"], hint: "'What the remaining three weeks ultimately require' → require/requires." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 9",
        items: [
          { s1: "The first source says that sustainable growth is entirely achievable.", key: "CONTENDS", s2: "The first source ___ that sustainable growth is entirely achievable.", accepted: ["contends"], explanation: "verbo de reporte (Día 41)." },
          { s1: "This claim has some genuine truth, though it overstates the timeline.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to this claim, though it overstates the timeline.", accepted: ["undoubtedly"], explanation: "reconocer mérito (Día 42)." },
          { s1: "Grid investment doubled last year. That surprised most analysts.", key: "DEVELOPMENT", s2: "Grid investment doubled last year, a ___ that surprised most analysts.", accepted: ["development"], explanation: "modificador resuntivo (Día 43)." },
          { s1: "In general, the coordinated policy approach seems more persuasive.", key: "BALANCE", s2: "On ___, the coordinated policy approach seems more persuasive.", accepted: ["balance"], explanation: "on balance (Día 42)." },
          { s1: "Considered as a whole, both sources point toward a hybrid solution.", key: "TOGETHER", s2: "Taken ___, both sources point toward a hybrid solution.", accepted: ["together"], explanation: "taken together (Día 42)." },
        ],
      },
      p5: {
        title: "What forty-five days reveals about synthesis",
        text: "A dedicated C2 candidate, having just reached exactly forty-five days into his sixty-day preparation, decided to time himself completing a full Writing P1 task under genuine exam conditions, curious whether nine consecutive weeks of sustained practice had actually, measurably improved his synthesis skill under real time pressure.\n\nHis forty-minute attempt, he later admitted with some surprise, felt considerably less frantic than similar attempts from earlier in the course had felt at the time.\n\n\"The first source contends X; the second, by contrast, maintains Y,\" he found himself writing almost automatically, the sentence structures from this week's practice apparently now genuinely embedded rather than requiring conscious, effortful construction each time.\n\n\"There is undoubtedly some truth to both positions,\" he continued, \"though each, I found myself noting almost instinctively, overlooks something the other captures rather well.\"\n\nWhat struck him most, reviewing his completed response afterward, was how naturally the evaluative language had emerged without his needing to consciously search for it mid-sentence, the way it had reliably done in earlier practice attempts weeks before.\n\n\"On balance,\" his own essay's central paragraph read, in a formulation he recognised, with some quiet satisfaction, as genuinely his own rather than a memorised template he'd simply reproduced, \"the more persuasive case draws on elements of both positions rather than favouring either entirely.\"\n\nHis own considered reflection, shared afterward with his study group, was that source synthesis, unlike some earlier grammatical structures, seemed to genuinely reward this particular kind of concentrated, focused weekly practice more than gradual, incidental exposure ever quite had.\n\n\"What forty-five days has taught me,\" he wrote in closing his own study journal, \"is that some skills need dedicated, focused attention to truly click into place — and this was clearly one of them, for me at least.\"",
        q: [
          mc("What did the candidate decide to do at day forty-five?", ["Skip Writing practice entirely.", "Time himself completing a full Writing P1 task under exam conditions.", "Rewrite his Week One essay.", "Abandon the course."], 1, "'decided to time himself completing a full Writing P1 task under genuine exam conditions'."),
          mc("How did his forty-minute attempt feel compared to earlier attempts?", ["Much more frantic.", "Considerably less frantic than similar earlier attempts.", "Identical to earlier attempts.", "Impossible to complete."], 1, "'felt considerably less frantic than similar attempts from earlier in the course had felt'."),
          mc("What did he notice about the sentence structures from this week's practice?", ["He had forgotten them entirely.", "They now emerged almost automatically rather than requiring conscious construction.", "They felt completely unnatural.", "He avoided using them."], 1, "'the sentence structures from this week's practice apparently now genuinely embedded rather than requiring conscious, effortful construction'."),
          mc("What struck him most reviewing his response afterward?", ["Nothing in particular.", "How naturally the evaluative language had emerged without conscious searching.", "That his essay was too short.", "That he had used no evaluative language at all."], 1, "'how naturally the evaluative language had emerged without his needing to consciously search for it mid-sentence'."),
          mc("What did he recognise about his 'on balance' paragraph?", ["It was a memorised template.", "It was genuinely his own formulation, not a reproduced template.", "It was copied from a source.", "It was entirely improvised with no prior practice."], 1, "'a formulation he recognised… as genuinely his own rather than a memorised template he'd simply reproduced'."),
          mc("What did he conclude source synthesis rewards, unlike some earlier structures?", ["Gradual, incidental exposure only.", "Concentrated, focused weekly practice.", "No practice at all.", "Only natural talent."], 1, "'source synthesis… seemed to genuinely reward this particular kind of concentrated, focused weekly practice more than gradual, incidental exposure ever quite had'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Nine weeks into a demanding, cumulative C2 preparation course represents genuinely substantial progress, with the course's final third now directly ahead of any dedicated, persistent learner. (1)___\n\nThis particular week's material — source synthesis, critical evaluation, advanced cohesion — targets the single most distinctive task the entire exam contains: the Writing P1 essay. (2)___ No other single task tests quite this same combination of comprehension, evaluation, and original synthesis together.\n\nMastering this particular skill matters disproportionately, relative to the time it demands, precisely because it transfers so directly and so completely to the exam's single highest-value writing task. (3)___ Time invested here rarely, if ever, feels wasted in retrospect.\n\nFor learners who found this week's material genuinely demanding, that difficulty reflects the task's own genuine, inherent sophistication rather than any particular flaw in individual preparation or effort. (4)___ Few skills taught across the entire course ask quite so much of a learner simultaneously.\n\nWhat matters most at this particular stage is not yet flawless execution under full exam pressure, but rather genuine, growing familiarity with the underlying moves — paraphrase, evaluation, synthesis — that skilled execution ultimately, eventually requires. (5)___ Fluent execution, when it eventually arrives, builds directly and reliably on this earlier, patient familiarity.\n\nThe course's final third, beginning next week with an integrated review of everything covered so far, will continue building directly on this substantial existing foundation. (6)___ Nothing learned this particular week, in other words, was learned in isolation from everything that has come both before and after it.",
        options: [
          "That particular position, in the exam's design, is no accident.", // A -> gap1
          "Nothing about this stage happened by simple coincidence.", // B -> gap2
          "That particular investment, in short, pays back reliably.", // C -> gap3
          "Real sophistication, fairly assessed, was never going to feel easy.", // D -> gap4
          "Familiarity, patiently built first, is what fluency eventually rests on.", // E -> gap5
          "Everything here, in the end, connects to everything else.", // F -> gap6
          "No learner has ever found source synthesis genuinely demanding.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nada de esta etapa ocurrió por simple coincidencia."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa posición concreta, en el diseño del examen, no es accidental."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa inversión concreta se recupera de forma fiable."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: una sofisticación real, juzgada con justicia, nunca iba a sentirse fácil."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la familiaridad, construida primero con paciencia, es la base de la fluidez."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: todo aquí, al final, se conecta con todo lo demás."),
        ],
      },
      p7: {
        title: "Four learners reflect on their ninth week of C2 study",
        text: "Read what four learners say about their ninth week of studying for the C2 exam.\n\nA) TARA: Timing myself on a full Writing P1 task felt considerably less frantic than it would have four weeks ago, honestly.\n\nB) OMAR: The sentence structures from this week now feel automatic rather than something I have to consciously construct each time.\n\nC) LILA: I finally understand why examiners built the whole task around synthesis rather than free opinion alone.\n\nD) BEN: This week rewarded focused, concentrated practice more than any other week has so far, in my experience.\n",
        q: [
          mc("Who found timing a Writing P1 task less frantic than it would have been earlier?", ["A", "B", "C", "D"], 0, "Tara: 'Timing myself on a full Writing P1 task felt considerably less frantic than it would have four weeks ago'."),
          mc("Whose sentence structures now feel automatic rather than consciously constructed?", ["A", "B", "C", "D"], 1, "Omar: 'The sentence structures from this week now feel automatic rather than something I have to consciously construct'."),
          mc("Who finally understands why the task centres on synthesis rather than free opinion?", ["A", "B", "C", "D"], 2, "Lila: 'I finally understand why examiners built the whole task around synthesis rather than free opinion alone'."),
          mc("Who found this week rewarded focused practice more than any other week?", ["A", "B", "C", "D"], 3, "Ben: 'This week rewarded focused, concentrated practice more than any other week has so far'."),
          mc("Who mentions 'four weeks ago' specifically?", ["A", "B", "C", "D"], 0, "Tara: 'than it would have four weeks ago, honestly'."),
          mc("Who mentions not having to consciously construct something each time?", ["A", "B", "C", "D"], 1, "Omar: 'rather than something I have to consciously construct each time'."),
          mc("Who mentions examiners' design choice specifically?", ["A", "B", "C", "D"], 2, "Lila: 'why examiners built the whole task around synthesis'."),
          mc("Who says this is true 'in my experience'?", ["A", "B", "C", "D"], 3, "Ben: 'more than any other week has so far, in my experience'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre las destrezas de síntesis y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Genuine synthesis of competing sources is the single most valuable academic and professional writing skill — it transfers directly beyond any single exam into real intellectual and professional life.'\n\nTEXTO 2: 'Synthesis is an important skill, but exam preparation risks over-formalising it into rigid templates that produce mechanical rather than genuinely thoughtful writing.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos TRES recursos distintos de la Semana 9. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What nine weeks of C2 study has taught me about synthesising ideas' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre el Writing P1.\n· REVIEW de un método o recurso que te haya ayudado a mejorar tu capacidad de síntesis.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing the Writing exam. Woman: Timing myself on a full Writing P1 task felt considerably less frantic than it would have a month ago. Man: Same here — the sentence structures now feel automatic rather than something I consciously construct. Extract Two. You hear two candidates discussing synthesis. Man: I finally understand why examiners built the whole task around synthesis rather than free opinion alone. Woman: This week rewarded focused, concentrated practice more than any other week has so far. Extract Three. You hear two friends comparing progress. Woman: Nine weeks in, I genuinely feel considerably more confident approaching the Writing paper now. Man: It could arguably be said that source synthesis was the hardest skill in the whole course to genuinely master.", [
      mc("1. How did timing herself on a Writing P1 task feel to the woman?", ["Much more frantic than before.", "Considerably less frantic than a month ago.", "Identical to before.", "Impossible to complete."], 1, "'felt considerably less frantic than it would have a month ago'."),
      mc("2. How do the sentence structures feel to the man now?", ["Still requiring conscious effort.", "Automatic rather than consciously constructed.", "Completely forgotten.", "Unnecessary."], 1, "'the sentence structures now feel automatic rather than something I consciously construct'."),
      mc("3. What does the man finally understand?", ["Nothing new.", "Why examiners built the task around synthesis rather than free opinion.", "Why the exam is unfair.", "Why grammar matters more than vocabulary."], 1, "'I finally understand why examiners built the whole task around synthesis'."),
      mc("4. What did this week reward, according to the woman?", ["No particular kind of practice.", "Focused, concentrated practice more than any other week.", "Passive listening only.", "Avoiding difficult material."], 1, "'This week rewarded focused, concentrated practice more than any other week has so far'."),
      mc("5. How does the woman feel nine weeks in?", ["Less confident than before.", "Considerably more confident approaching the Writing paper.", "Completely unprepared.", "Indifferent to the exam."], 1, "'I genuinely feel considerably more confident approaching the Writing paper now'."),
      mc("6. What does the man say about source synthesis?", ["It was the easiest skill.", "It could arguably be said to be the hardest skill to master.", "It was irrelevant to the exam.", "It required no practice at all."], 1, "'It could arguably be said that source synthesis was the hardest skill in the whole course to genuinely master'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en esta novena semana que te resulte más útil", p2: "dos imágenes de la síntesis de ideas (alguien copiando notas literalmente de un libro y otra persona debatiendo y conectando ideas con un grupo): comentadlas y decidid cuál representa mejor el pensamiento crítico genuino", p3: "qué es más eficaz para dominar la síntesis de fuentes (la práctica cronometrada regular, la lectura de ejemplos de alta calidad, el feedback específico de un profesor, la práctica en grupo, la reflexión individual): comentadlo y decidid lo más eficaz" }),

    SUMMARY("Resumen de la Semana 9 (C2)", [
      "Dominas la paráfrasis/síntesis de fuentes (contends, maintains, concedes, converge/diverge), el lenguaje de evaluación crítica (there is undoubtedly some truth to, on balance, taken together), y la cohesión avanzada (modificadores y sustantivos resuntivos).",
      "Has practicado las 7 partes del Reading & Use of English, el Writing P1 con especial atención a la síntesis, y el Speaking P1-P3 con temas de economía circular, cambio climático, energía y desarrollo sostenible.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene (S10): repaso final integral de TODA la gramática y léxico de las Semanas 1-9, combinando todo en los mismos textos.",
    ]),
    INFO("Mini-simulacro de la Semana 9", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 10."),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Destrezas de integración de textos para el Writing P1 (paráfrasis, síntesis, evaluación) y cohesión avanzada · La economía y el medio ambiente",
  description: "Técnicas de paráfrasis y síntesis de fuentes, lenguaje de evaluación crítica, y cohesión avanzada (modificadores y sustantivos resuntivos) — las destrezas centrales del Writing P1 de C2, con el hilo de la economía circular, el cambio climático y la política económica, la energía y la transición ecológica, y el desarrollo sostenible. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
