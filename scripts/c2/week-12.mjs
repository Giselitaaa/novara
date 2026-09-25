/**
 * C2 Proficiency · Semana 12 — "Recta final: simulacros cronometrados por destreza,
 * simulacro completo, y el día del examen · Legado cultural, viajes, comunicación no verbal".
 * Última semana del curso (sin gramática nueva): simulacros cronometrados en
 * condiciones reales, culminando en la guía del día del examen y el cierre del
 * curso. El Día 60 dispara automáticamente el SIMULACRO FINAL.
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

// ───────────────────────── DÍA 56 ─────────────────────────
const DAY56 = {
  title: "Día 56 — Simulacro cronometrado: Reading & Use of English (90 min) · El legado cultural y la memoria colectiva",
  description: "Simulacro completo y cronometrado del Reading & Use of English (7 partes, 90 min) en condiciones reales de examen. Vocabulario del legado cultural y la memoria colectiva. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Completar el Reading & Use of English completo dentro de 90 minutos, aplicando toda la estrategia de la Semana 11.",
    summary: "Simulacro cronometrado Reading & UoE; legado cultural; Use of English P1-P7 (90 min), Writing, Listening P1, Speaking P1-P3.",
    reviewPrompts: ["¿Terminaste las 7 partes dentro de los 90 minutos?", "¿Qué parte te llevó más tiempo del previsto?"],
  },
  items: [
    TEXT("🎯 Semana 12 — RECTA FINAL. Hoy: SIMULACRO CRONOMETRADO del Reading & Use of English completo (90 minutos, 7 partes) en condiciones reales de examen. Cronometra tu tiempo con un reloj visible. Vocabulario: el LEGADO CULTURAL y la MEMORIA COLECTIVA."),
    GRAMMAR("Antes de empezar — checklist del Reading & Use of English", `⏱️ Pon el cronómetro en 90 minutos AHORA, antes de empezar.
· P1-P3 (léxico/gramática/formación): ≈ 25-30 min.
· P4 (key word transformations, 3-8 palabras): ≈ 12-15 min.
· P5-P7 (lectura larga/gapped text/multiple matching): ≈ resto del tiempo.
· Deja 3-5 min al final para revisar respuestas en blanco.
No consultes las explicaciones hasta terminar las 7 partes completas. Este es tu simulacro — trátalo como el examen real.`),
    grammarEx("Use of English — Repaso mixto antes del simulacro", "Último calentamiento antes del simulacro cronometrado.", [
      mc("Had it not ___ for careful archival work, much of this cultural record would have been lost.", ["been", "was", "were"], 0, "Had it not been for (repaso S1)."),
      mc("The historian ___ that collective memory is always, to some extent, selectively constructed.", ["contends", "says", "tells"], 0, "verbo de reporte (repaso S4)."),
      mc("Notwithstanding careful preservation efforts, much oral history has been effectively ___.", ["lost", "losing", "lose"], 0, "participio pasado tras 'has been' (repaso general)."),
      mc("Preserving that archive intact was, by any measure, ___ small feat.", ["no", "a", "quite"], 0, "no small feat (repaso S8, litote)."),
      mc("On ___, the more persuasive case favours community-led heritage preservation.", ["balance", "average", "whole"], 0, "on balance (repaso S9)."),
    ]),
    GRAMMAR("Vocabulario del día — El legado cultural y la memoria colectiva (C2)", "Léxico de maestría sobre legado cultural y memoria colectiva."),
    deck("C2 S12D56 — El legado cultural y la memoria colectiva", [
      ["collective memory", "memoria colectiva", "Collective memory shapes how a society understands its own shared past.", "sustantivo", "kəˈlektɪv ˈmeməri"],
      ["intangible heritage", "patrimonio inmaterial", "Intangible heritage includes oral traditions, rituals, and traditional craftsmanship alike.", "sustantivo", "ɪnˈtændʒəbl ˈherɪtɪdʒ"],
      ["archival preservation", "conservación archivística", "Archival preservation requires specialised expertise and considerable sustained funding.", "sustantivo", "ɑːˈkaɪvl ˌprezəˈveɪʃn"],
      ["oral testimony", "testimonio oral", "Oral testimony often preserves details official written records entirely omit.", "sustantivo", "ˈɔːrəl ˈtestɪməni"],
      ["cultural erasure", "borrado cultural", "Cultural erasure can occur gradually, through neglect, rather than deliberate destruction alone.", "sustantivo", "ˈkʌltʃərəl ɪˈreɪʒə"],
      ["commemorative practice", "práctica conmemorativa", "Commemorative practices evolve considerably as a community's own priorities genuinely shift.", "sustantivo", "kəˈmemərətɪv ˈpræktɪs"],
      ["contested history", "historia disputada", "Contested history reveals how differently communities can interpret shared past events.", "sustantivo", "kənˈtestɪd ˈhɪstəri"],
      ["custodianship", "custodia (de un patrimonio)", "Genuine custodianship of cultural heritage requires humility alongside real expertise.", "sustantivo", "kʌˈstəʊdiənʃɪp"],
      ["living tradition", "tradición viva", "A living tradition continues evolving rather than remaining frozen at some fixed historical point.", "sustantivo", "ˈlɪvɪŋ trəˈdɪʃn"],
      ["restitution", "restitución (de bienes culturales)", "Restitution debates increasingly shape how major museums approach their own colonial-era collections.", "sustantivo", "ˌrestɪˈtjuːʃn"],
    ]),
    vocabEx("Vocabulario — El legado cultural y la memoria colectiva", "Elige la opción correcta.", [
      mc("A society's shared, collectively constructed understanding of its own past:", ["collective memory", "oral testimony", "restitution"], 0, "collective memory."),
      mc("Non-physical cultural heritage such as rituals, oral traditions, or craftsmanship:", ["intangible heritage", "archival preservation", "custodianship"], 0, "intangible heritage."),
      mc("The gradual disappearance of a culture's distinct practices or memory:", ["cultural erasure", "commemorative practice", "contested history"], 0, "cultural erasure."),
      mc("A historical account or interpretation actively disputed by different groups:", ["contested history", "living tradition", "oral testimony"], 0, "contested history."),
      mc("Responsible stewardship of cultural heritage on behalf of a wider community:", ["custodianship", "restitution", "erasure"], 0, "custodianship."),
      mc("Returning cultural artefacts to their community or nation of origin:", ["restitution", "custodianship", "commemorative practice"], 0, "restitution."),
    ]),

    ...uoe({
      p1: {
        title: "Whose memory counts?",
        text: "Collective memory, far from representing a neutral, straightforward record of shared past events, is invariably shaped by whose particular voices happened to be recorded, preserved, and subsequently (1)___ across successive generations. Communities whose oral testimony was historically dismissed as insufficiently authoritative have often found their own experience effectively (2)___ from official historical record, notwithstanding its genuine, lived significance to those who actually experienced it directly. Intangible heritage — ritual, craft, oral tradition — proves particularly vulnerable to this kind of erasure, since it (3)___ living practitioners to survive, rather than physical objects that can, at least in principle, simply be archived and preserved. Museums and archives increasingly (4)___ their own historical role in either preserving or, in some documented cases, actively contributing to such cultural erasure. Restitution debates, whatever their genuine legal and practical complexity, ultimately (5)___ a broader, ongoing reckoning with whose cultural memory institutions have historically chosen to preserve, and whose they have simply, quietly allowed to (6)___.",
        q: [
          mc("(1)", ["amplified", "increased", "raised", "boosted"], 0, "'preserved, and subsequently amplified across successive generations'."),
          mc("(2)", ["excluded", "removed", "taken", "cut"], 0, "'effectively excluded from official historical record'."),
          mc("(3)", ["requires", "needs", "demands", "asks"], 0, "'it requires living practitioners to survive'."),
          mc("(4)", ["acknowledge", "admit", "confess", "recognise"], 0, "'increasingly acknowledge their own historical role'."),
          mc("(5)", ["reflect", "represent", "signal", "indicate"], 0, "'ultimately reflect a broader… reckoning'."),
          mc("(6)", ["fade", "disappear", "vanish", "lapse"], 0, "'they have simply, quietly allowed to fade'."),
        ],
      },
      p2: {
        title: "The archivist's dilemma",
        text: "Archival preservation, however technically sophisticated, cannot by (1)___ guarantee that preserved material will actually be meaningfully accessed, understood, or genuinely valued by future generations. It remains widely (2)___ among archivists that physical preservation represents only the first, relatively straightforward step in a considerably longer, more difficult process of genuine cultural transmission. Communities whose living traditions depend (3)___ active practice, rather than passive archival storage, face a distinctive challenge archivists alone cannot adequately address without genuine, sustained community partnership. This is not (4)___ suggest archival institutions lack genuine value — rather, it highlights that preservation and genuine transmission, while related, are by no means (5)___ same thing. So too (6)___ growing recognition that communities themselves, not external institutions alone, should retain meaningful decision-making authority over how their own cultural heritage gets preserved, presented, and shared.",
        q: [
          fb("(1)", ["itself"], "'cannot by itself guarantee'."),
          fb("(2)", ["held", "acknowledged"], "'It remains widely held/acknowledged among archivists'."),
          fb("(3)", ["on", "upon"], "'depend on/upon active practice'."),
          fb("(4)", ["to"], "'This is not to suggest'."),
          fb("(5)", ["the"], "'by no means the same thing'."),
          fb("(6)", ["has"], "'So too has growing recognition…'."),
        ],
      },
      p3: {
        title: "Living traditions in a changing world",
        text: "A living tradition, by (1)___, continues to evolve and adapt rather than remaining permanently frozen at some fixed, idealised historical moment that outside observers often, mistakenly assume represents genuine authenticity. This ongoing (2)___ sometimes troubles cultural preservationists more accustomed to protecting fixed physical artefacts than dynamically evolving living practices. Practitioners themselves, however, frequently insist that genuine (3)___ to a tradition means precisely this ongoing evolution, not rigid, unchanging replication of some imagined historical original. Outside recognition and (4)___, whether through UNESCO listing or academic documentation, can sometimes inadvertently pressure practitioners toward a more fixed, 'museum' version of their own living tradition, ironically undermining the very (5)___ that recognition originally intended genuinely to protect. Navigating this genuine tension — between valuable outside recognition and preserving authentic (6)___ — increasingly occupies cultural policy specifically designed around intangible heritage protection.",
        items: [
          { root: "define", accepted: ["definition"], hint: "'A living tradition, by definition, continues to evolve' (sustantivo)." },
          { root: "evolve", accepted: ["evolution"], hint: "'This ongoing evolution sometimes troubles…' (sustantivo)." },
          { root: "fidelity", accepted: ["fidelity"], hint: "'genuine fidelity to a tradition means…' (sustantivo, forma base)." },
          { root: "document", accepted: ["documentation"], hint: "'through UNESCO listing or academic documentation' (sustantivo)." },
          { root: "vital", accepted: ["vitality"], hint: "'undermining the very vitality that recognition… intended to protect' (sustantivo)." },
          { root: "adapt", accepted: ["adaptability", "adaptiveness"], hint: "'preserving authentic adaptability' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso mixto",
        items: [
          { s1: "If careful archival work hadn't happened, much of this record would have been lost.", key: "BEEN", s2: "Had it not ___ for careful archival work, much of this record would have been lost.", accepted: ["been"], explanation: "Had it not been for (repaso S1)." },
          { s1: "The historian says that collective memory is always somewhat constructed.", key: "CONTENDS", s2: "The historian ___ that collective memory is always somewhat constructed.", accepted: ["contends"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "Preserving that archive was actually a considerable achievement.", key: "SMALL", s2: "Preserving that archive was no ___ feat.", accepted: ["small"], explanation: "no small feat (repaso S8, litote)." },
          { s1: "In general, community-led preservation seems the wiser approach.", key: "BALANCE", s2: "On ___, community-led preservation seems the wiser approach.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
          { s1: "This is a delicate subject within the community — handle it carefully.", key: "SENSITIVE", s2: "This is a genuinely ___ subject within the community — handle it carefully.", accepted: ["sensitive"], explanation: "sensitive (repaso S6, falso amigo)." },
        ],
      },
      p5: {
        title: "The keeper of the songs",
        text: "For over four decades, Rosalind Achebe had served as her community's recognised custodian of a centuries-old oral song tradition, a role she had inherited from her own grandmother and would, in time, pass on to a carefully chosen successor of her own.\n\n\"Had it not been for my grandmother's stubborn insistence on teaching me properly, despite my own youthful impatience,\" she reflected in a recent interview marking her tradition's formal UNESCO recognition, \"this entire tradition might well have quietly ended with her generation.\"\n\nThe recent outside recognition, though genuinely welcome in many respects, brought its own complicated challenges. \"Suddenly,\" she explained, \"academics and archivists wanted to record and document everything precisely, fixing it in a form that felt, to me, rather too rigid and unchanging.\"\n\n\"This is not to suggest documentation lacks genuine value,\" she clarified carefully. \"But a living tradition, by definition, continues evolving — and I worried that excessive fixing might, ironically, kill the very thing everyone was trying so hard to protect.\"\n\nHer eventual compromise involved permitting extensive audio-visual documentation while firmly insisting that her chosen successor continue learning through direct oral transmission alone, exactly as she herself had originally learned.\n\n\"On balance,\" she concluded, \"I think outside recognition and genuine living practice can coexist, provided the community itself retains real, meaningful decision-making authority over how that recognition actually gets used and by whom.\"\n\nHer successor, a younger relative she had been quietly training for nearly a decade, recently performed publicly for the first time, a moment Rosalind describes as considerably more meaningful to her personally than any formal outside recognition ever quite managed to be.\n\n\"What matters most,\" she reflected in closing, \"isn't whether some outside institution recognises us. It's whether the actual songs themselves keep genuinely, actively being sung.\"",
        q: [
          mc("What role had Rosalind served for over four decades?", ["Museum curator.", "Her community's recognised custodian of an oral song tradition.", "A government official.", "An academic researcher."], 1, "'had served as her community's recognised custodian of a centuries-old oral song tradition'."),
          mc("What does Rosalind say might have happened without her grandmother's insistence?", ["Nothing would have changed.", "The tradition might well have quietly ended with her grandmother's generation.", "The tradition would have become more popular.", "She would have become an academic instead."], 1, "'this entire tradition might well have quietly ended with her generation'."),
          mc("What challenge did the recent outside recognition bring?", ["No challenges at all.", "Pressure toward fixing the tradition in a rigid, unchanging documented form.", "Financial difficulties only.", "Loss of community interest."], 1, "'wanted to record and document everything precisely, fixing it in a form that felt… rather too rigid'."),
          mc("What was Rosalind's eventual compromise?", ["Refusing all documentation.", "Permitting audio-visual documentation while insisting her successor learn through oral transmission alone.", "Abandoning the tradition entirely.", "Allowing anyone to learn it from recordings."], 1, "'permitting extensive audio-visual documentation while firmly insisting that her chosen successor continue learning through direct oral transmission alone'."),
          mc("What does Rosalind say matters most, in closing?", ["Outside institutional recognition.", "Whether the actual songs themselves keep genuinely being sung.", "Financial compensation.", "Media coverage."], 1, "'It's whether the actual songs themselves keep genuinely, actively being sung'."),
          mc("What does Rosalind say about her successor's first public performance?", ["It was disappointing.", "It was considerably more meaningful to her than any formal outside recognition.", "It was irrelevant to her.", "It never actually happened."], 1, "'a moment Rosalind describes as considerably more meaningful to her personally than any formal outside recognition ever quite managed to be'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Cultural heritage, whether tangible or intangible, exists in a genuinely uneasy relationship with the passage of time, simultaneously valued precisely because it endures and vulnerable precisely because enduring, unchanged, is rarely how living culture actually, genuinely works. (1)___\n\nPhysical artefacts can, at least in principle, be preserved largely unchanged across considerable time, protected from decay through careful archival technique and controlled environmental conditions. (2)___ Intangible heritage — ritual, craft, oral tradition — resists this particular kind of straightforward preservation entirely.\n\nLiving practices require living practitioners, and living practitioners inevitably, naturally adapt their practice to changing circumstance, available resource, and evolving individual interpretation over successive generations. (3)___ Freezing such practice artificially, whatever the genuine preservationist intention behind doing so, risks producing something more resembling reenactment than genuine, continued living tradition.\n\nThis distinction between preservation and continuation creates real, practical tension for institutions and communities alike, genuinely committed to protecting cultural heritage for future generations. (4)___ Neither approach alone, pursued to its logical extreme, serves heritage particularly well.\n\nSome communities have found workable, if imperfect, compromises — extensive documentation alongside genuinely continued living practice, treating archival record as supplement rather than substitute for active, ongoing transmission. (5)___ This particular balance, difficult as it genuinely is to strike and maintain, appears to serve both preservation and genuine continuity reasonably well.\n\nWhat ultimately emerges from these accumulated efforts is recognition that genuine cultural preservation requires humility about what outside institutions can, and cannot, meaningfully accomplish alone. (6)___ The communities who actually live a tradition remain, in the end, its most genuinely essential custodians.",
        options: [
          "That tension, on reflection, was never going to resolve itself easily.", // A -> gap1
          "Living heritage, plainly, does not hold nearly so still.", // B -> gap2
          "Change of this kind, in other words, was never really optional.", // C -> gap3
          "Extremes, on either side, ask too much of heritage alone.", // D -> gap4
          "Balance struck this way, imperfect as it is, still holds up.", // E -> gap5
          "Outside help, however welcome, was never quite the whole answer.", // F -> gap6
          "No cultural tradition has ever changed even slightly over time.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa tensión nunca iba a resolverse fácilmente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el patrimonio vivo no se queda tan quieto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese cambio nunca fue realmente opcional."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los extremos piden demasiado al patrimonio."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: un equilibrio así, imperfecto, sigue funcionando."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la ayuda externa nunca fue toda la respuesta."),
        ],
      },
      p7: {
        title: "Four people discuss cultural heritage and memory",
        text: "Read what four people say about cultural heritage and collective memory.\n\nA) TARIQ: Had it not been for my grandfather's insistence, our family's oral history would have simply disappeared.\n\nB) ELVIRA: On balance, I think community-led preservation works better than purely institutional approaches, honestly.\n\nC) KOJO: This is not to suggest documentation lacks value, but a living tradition needs to keep evolving too.\n\nD) SUMI: Restitution debates in my field remain genuinely contested, with no easy consensus in sight.\n",
        q: [
          mc("Whose family oral history would have disappeared without a grandfather's insistence?", ["A", "B", "C", "D"], 0, "Tariq: 'Had it not been for my grandfather's insistence, our family's oral history would have simply disappeared'."),
          mc("Who thinks community-led preservation works better than purely institutional approaches?", ["A", "B", "C", "D"], 1, "Elvira: 'On balance, I think community-led preservation works better than purely institutional approaches'."),
          mc("Who says documentation has value but tradition needs to keep evolving?", ["A", "B", "C", "D"], 2, "Kojo: 'This is not to suggest documentation lacks value, but a living tradition needs to keep evolving too'."),
          mc("Who says restitution debates in their field remain genuinely contested?", ["A", "B", "C", "D"], 3, "Sumi: 'Restitution debates in my field remain genuinely contested, with no easy consensus in sight'."),
          mc("Who mentions their grandfather specifically?", ["A", "B", "C", "D"], 0, "Tariq: 'my grandfather's insistence'."),
          mc("Who says this 'honestly'?", ["A", "B", "C", "D"], 1, "Elvira: 'works better… honestly'."),
          mc("Who mentions a living tradition specifically?", ["A", "B", "C", "D"], 2, "Kojo: 'a living tradition needs to keep evolving too'."),
          mc("Who mentions their own field specifically?", ["A", "B", "C", "D"], 3, "Sumi: 'Restitution debates in my field'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la restitución cultural y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Museums holding cultural artefacts acquired under colonial-era circumstances have a clear moral obligation to return them to their communities of origin, regardless of practical complications involved.'\n\nTEXTO 2: 'Restitution is far more complicated than moral simplicity suggests — questions of preservation capacity, rightful ownership among competing claimants, and genuine public access all complicate any blanket restitution policy.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'A tradition or memory that matters to my family or community' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a un museo o institución cultural expresando tu opinión sobre la restitución.\n· REVIEW de un libro, documental o exposición sobre patrimonio cultural que te haya resultado revelador.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two historians discussing collective memory. Woman: Had it not been for careful oral history work, much of this record would have been permanently lost. Man: That's precisely why community-led archives matter so genuinely much. Extract Two. You hear two museum curators discussing restitution. Man: On balance, I think community-led preservation works better than purely institutional approaches. Woman: I'd agree, though implementation remains genuinely complicated in practice. Extract Three. You hear two cultural practitioners discussing tradition. Woman: This is not to suggest documentation lacks value, but living tradition needs to keep evolving too. Man: Exactly — freezing a tradition risks turning it into mere reenactment.", [
      mc("1. What does the woman say about oral history work?", ["It's unnecessary.", "Had it not happened, much of this record would have been permanently lost.", "It's less important than written records.", "It has no real value."], 1, "'Had it not been for careful oral history work, much of this record would have been permanently lost'."),
      mc("2. Why does the man say community-led archives matter?", ["They're cheaper.", "Because of what the woman just said about oral history.", "They're irrelevant.", "They replace museums entirely."], 1, "'That's precisely why community-led archives matter so genuinely much'."),
      mc("3. What does the man think works better?", ["Purely institutional approaches.", "Community-led preservation.", "No preservation at all.", "Only academic approaches."], 1, "'On balance, I think community-led preservation works better than purely institutional approaches'."),
      mc("4. What does the woman say about implementation?", ["It's simple.", "It remains genuinely complicated in practice.", "It's already solved.", "It's irrelevant to discuss."], 1, "'implementation remains genuinely complicated in practice'."),
      mc("5. What does the woman say documentation lacks?", ["All value.", "Nothing — but tradition needs to keep evolving too.", "Any usefulness.", "Community support."], 1, "'This is not to suggest documentation lacks value, but living tradition needs to keep evolving too'."),
      mc("6. What does freezing a tradition risk, according to the man?", ["Nothing significant.", "Turning it into mere reenactment.", "Making it more popular.", "Improving its accuracy."], 1, "'freezing a tradition risks turning it into mere reenactment'."),
    ]),

    ...speakingParts({ p1: "si tu familia o comunidad tiene alguna tradición o memoria cultural importante", p2: "dos imágenes del legado cultural (un archivo con documentos históricos cuidadosamente conservados y una celebración comunitaria con música y baile tradicional en vivo): comentadlas y decidid cuál representa mejor la preservación cultural genuina", p3: "qué es más importante para preservar el patrimonio cultural (la documentación archivística, la práctica viva continuada, el reconocimiento institucional, la transmisión intergeneracional directa, la restitución de bienes culturales): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 56 — Simulacro cronometrado", [
      "Simulacro completo del Reading & Use of English (7 partes, 90 min) completado en condiciones reales.",
      "Vocabulario del legado cultural y la memoria colectiva. Writing, Listening P1 y Speaking completos.",
      "Mañana: simulacro cronometrado del Writing (90 min).",
    ]),
    INFO("Tarea para el Día 57", "Revisa tu rendimiento de hoy en el Reading & UoE. Mañana: simulacro cronometrado del Writing completo (P1 + P2, 90 min)."),
  ],
};

// ───────────────────────── DÍA 57 ─────────────────────────
const DAY57 = {
  title: "Día 57 — Simulacro cronometrado: Writing (90 min) · Los viajes y el turismo responsable",
  description: "Simulacro completo y cronometrado del Writing (P1 integración de fuentes + P2 elección de tarea, 90 min) en condiciones reales de examen. Vocabulario de los viajes y el turismo responsable. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Completar el Writing completo (P1 + P2) dentro de 90 minutos, aplicando la síntesis de fuentes y la planificación de la Semana 11.",
    summary: "Simulacro cronometrado Writing; viajes y turismo responsable; Use of English P1-P7, Writing (90 min), Listening P2, Speaking P1-P3.",
    reviewPrompts: ["¿Respetaste el conteo de palabras exigido en ambas partes (240-280 / 280-320)?", "¿Dedicaste tiempo a planificar antes de escribir?"],
  },
  items: [
    TEXT("🎯 Hoy: SIMULACRO CRONOMETRADO del Writing completo (90 minutos: P1 + P2). Planifica 3-5 min antes de escribir. Vocabulario: los VIAJES y el TURISMO RESPONSABLE."),
    GRAMMAR("Antes de empezar — checklist del Writing", `⏱️ Pon el cronómetro en 90 minutos AHORA.
· P1 (essay obligatorio, integración de fuentes, 240-280 palabras): ≈ 40 min (incluye 3-5 min de planificación).
· P2 (elige 1 de 3: article/letter/report/review, 280-320 palabras): ≈ 30 min.
· Revisión final: ≈ 10-15 min — cuenta las palabras, revisa la cohesión, corrige errores evidentes.
En el P1, recuerda: SINTETIZA y EVALÚA las dos fuentes con tus propias palabras — nunca copies frases. Usa verbos de reporte, lenguaje de evaluación crítica y cohesión avanzada (Semana 9).`),
    grammarEx("Use of English — Repaso mixto antes del simulacro", "Último calentamiento antes del simulacro cronometrado.", [
      mc("The first source ___ that responsible tourism can genuinely benefit local economies.", ["contends", "says", "tells"], 0, "verbo de reporte (repaso S4)."),
      mc("There is ___ some truth to that claim, though it understates the environmental cost.", ["undoubtedly", "never", "hardly"], 0, "reconocer mérito (repaso S9)."),
      mc("Overtourism has ___ small impact on fragile local ecosystems.", ["no", "a", "some"], 0, "no small (litote, repaso S8)."),
      mc("On ___, the more persuasive case favours strict visitor caps in fragile destinations.", ["balance", "average", "whole"], 0, "on balance (repaso S9)."),
      mc("Notwithstanding genuine economic benefits, mass tourism has ___ considerable environmental cost.", ["a", "no", "some"], 0, "estructura simple de repaso (mass tourism has a considerable… cost)."),
    ]),
    GRAMMAR("Vocabulario del día — Los viajes y el turismo responsable (C2)", "Léxico de maestría sobre viajes y turismo responsable."),
    deck("C2 S12D57 — Los viajes y el turismo responsable", [
      ["overtourism", "turistificación, exceso de turismo", "Overtourism has strained infrastructure and eroded quality of life in several popular destinations.", "sustantivo", "ˈəʊvətʊərɪzəm"],
      ["carrying capacity", "capacidad de carga (turística)", "A destination's carrying capacity determines how many visitors it can sustainably absorb.", "sustantivo", "ˈkæriɪŋ kəˈpæsəti"],
      ["ecotourism", "ecoturismo", "Genuine ecotourism directs revenue toward conservation rather than merely marketing itself as green.", "sustantivo", "ˈiːkəʊˌtʊərɪzəm"],
      ["cultural commodification", "mercantilización cultural", "Cultural commodification can reduce living traditions to mere tourist spectacle for outside consumption.", "sustantivo", "ˈkʌltʃərəl kəˌmɒdɪfɪˈkeɪʃn"],
      ["responsible travel", "viaje responsable", "Responsible travel considers a destination's environmental and social impact deliberately.", "sustantivo", "rɪˈspɒnsəbl ˈtrævl"],
      ["displacement", "desplazamiento (de residentes)", "Tourism-driven housing costs have caused displacement of long-term local residents.", "sustantivo", "dɪsˈpleɪsmənt"],
      ["visitor economy", "economía del visitante", "The visitor economy now dominates employment across several previously diverse local economies.", "sustantivo", "ˈvɪzɪtə ɪˈkɒnəmi"],
      ["seasonal dependency", "dependencia estacional", "Seasonal dependency leaves many tourism-reliant communities economically vulnerable off-season.", "sustantivo", "ˈsiːzənl dɪˈpendənsi"],
      ["heritage tourism", "turismo patrimonial", "Heritage tourism can fund preservation while simultaneously straining fragile historic sites.", "sustantivo", "ˈherɪtɪdʒ ˈtʊərɪzəm"],
      ["visitor cap", "límite de visitantes", "Several popular destinations have introduced strict visitor caps to protect fragile sites.", "sustantivo", "ˈvɪzɪtə kæp"],
    ]),
    vocabEx("Vocabulario — Los viajes y el turismo responsable", "Elige la opción correcta.", [
      mc("An excessive volume of tourists straining a destination's infrastructure and quality of life:", ["overtourism", "ecotourism", "heritage tourism"], 0, "overtourism."),
      mc("Tourism specifically designed to fund conservation and minimise environmental impact:", ["ecotourism", "cultural commodification", "seasonal dependency"], 0, "ecotourism."),
      mc("Reducing a living culture to mere spectacle for outside consumption:", ["cultural commodification", "visitor economy", "carrying capacity"], 0, "cultural commodification."),
      mc("The maximum number of visitors a destination can sustainably support:", ["carrying capacity", "displacement", "visitor cap"], 0, "carrying capacity."),
      mc("Long-term residents forced out, often by tourism-driven housing costs:", ["displacement", "seasonal dependency", "responsible travel"], 0, "displacement."),
      mc("A formal limit on visitor numbers to a fragile or popular site:", ["visitor cap", "carrying capacity", "visitor economy"], 0, "visitor cap."),
    ]),

    ...uoe({
      p1: {
        title: "The city that said enough",
        text: "Notwithstanding considerable pushback from segments of its own tourism industry, the historic city had effectively thrown down the (1)___ to an entire sector long accustomed to unlimited visitor growth, introducing strict daily caps on tourist numbers within its most fragile historic core. Insofar as overtourism can genuinely be (2)___ at all, the city's own carefully collected data told a genuinely troubling story: pollution, displacement, and steadily eroding quality of life for long-term residents. Local business owners were, understandably, (3)___ divided — some welcomed reduced congestion, while others worried openly about genuine revenue loss during the transition period. The policy's early results proved, by any honest measure, no small (4)___: resident satisfaction rose considerably, even as some tourism-dependent businesses reported genuine short-term financial strain. On balance, city officials now widely (5)___ that the policy, whatever its genuine short-term cost, represents a genuinely necessary correction after decades of largely unmanaged visitor growth. Whether other historic destinations facing similarly acute overtourism pressure will (6)___ this particular example remains, for now, an open and genuinely significant question.",
        q: [
          mc("(1)", ["gauntlet", "towel", "glove"], 0, "'thrown down the gauntlet to an entire sector'."),
          mc("(2)", ["measured", "counted", "recorded", "tracked"], 0, "'overtourism can genuinely be measured at all'."),
          mc("(3)", ["genuinely", "considerably", "notably", "visibly"], 1, "'were… considerably divided'."),
          mc("(4)", ["achievement", "success", "feat", "accomplishment"], 2, "'no small feat' — litote."),
          mc("(5)", ["maintain", "say", "tell", "state simply"], 0, "'officials now widely maintain that'."),
          mc("(6)", ["follow", "copy", "replicate", "adopt"], 2, "'will replicate this particular example'."),
        ],
      },
      p2: {
        title: "Who really benefits from tourism revenue?",
        text: "It remains widely (1)___ among development economists that tourism revenue, however substantial in aggregate, does not automatically translate into broadly shared local prosperity absent deliberate policy intervention. Insofar (2)___ tourism jobs remain concentrated in low-wage, seasonal service roles, local communities may host considerable visitor numbers while capturing surprisingly little genuine economic benefit themselves. This is not (3)___ suggest tourism lacks genuine economic value — rather, it highlights that raw visitor numbers alone provide a genuinely poor proxy for meaningful local economic benefit. So too (4)___ growing recognition that heritage tourism specifically requires careful management, since revenue generated can either fund genuine preservation or, mismanaged, actually accelerate the degradation of the very heritage sites attracting visitors in the first place. What ultimately determines whether tourism benefits a destination or merely extracts (5)___ it, most researchers increasingly agree, is not visitor volume alone but the specific policy choices governing how that revenue actually, concretely gets distributed and (6)___.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged among… economists'."),
          fb("(2)", ["as"], "'Insofar as tourism jobs remain concentrated'."),
          fb("(3)", ["to"], "'This is not to suggest'."),
          fb("(4)", ["has"], "'So too has growing recognition that…'."),
          fb("(5)", ["from"], "'merely extracts from it'."),
          fb("(6)", ["reinvested", "used", "spent"], "'how that revenue… gets distributed and reinvested/used/spent'."),
        ],
      },
      p3: {
        title: "Beyond the postcard",
        text: "Responsible travel, whatever its genuine (1)___ appeal, requires considerably more of individual travellers than simply choosing eco-certified accommodation or offsetting carbon emissions alone. Genuine cultural (2)___ — engaging respectfully with local communities rather than merely photographing them as scenic backdrop — demands a kind of deliberate, sustained effort many travellers, however well-intentioned, ultimately find genuinely inconvenient to actually practise. Tour operators marketing themselves as 'responsible' or 'sustainable' face growing (3)___ that such labelling amounts to little more than sophisticated greenwashing, absent genuine, independently verified accountability standards. This growing (4)___ has prompted several destinations to develop their own certification frameworks, though critics note enforcement often remains genuinely (5)___, particularly across smaller, less well-resourced tourism operators. What emerges from this ongoing tension is recognition that genuinely responsible travel requires structural industry (6)___, not merely individual traveller goodwill alone, however genuine that goodwill might otherwise be.",
        items: [
          { root: "moral", accepted: ["moral"], hint: "'whatever its genuine moral appeal' (adjetivo, forma base)." },
          { root: "engage", accepted: ["engagement"], hint: "'Genuine cultural engagement — engaging respectfully…' (sustantivo)." },
          { root: "criticise", accepted: ["criticism"], hint: "'face growing criticism that such labelling…' (sustantivo)." },
          { root: "scrutinise", accepted: ["scrutiny"], hint: "'This growing scrutiny has prompted…' (sustantivo)." },
          { root: "consist", accepted: ["inconsistent"], hint: "'enforcement often remains genuinely inconsistent' (adjetivo)." },
          { root: "reform", accepted: ["reform"], hint: "'requires structural industry reform' (sustantivo, forma base)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso mixto",
        items: [
          { s1: "The city effectively issued a challenge to its own tourism industry.", key: "GAUNTLET", s2: "The city effectively threw down the ___ to its own tourism industry.", accepted: ["gauntlet"], explanation: "throw down the gauntlet (repaso S6)." },
          { s1: "Reducing visitor numbers was actually a considerable achievement.", key: "SMALL", s2: "Reducing visitor numbers was no ___ achievement.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "Officials now say that the policy was genuinely necessary.", key: "MAINTAIN", s2: "Officials now widely ___ that the policy was genuinely necessary.", accepted: ["maintain"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "There is some genuine truth to that concern, though it's often overstated.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to that concern, though it's often overstated.", accepted: ["undoubtedly"], explanation: "reconocer mérito (repaso S9)." },
          { s1: "In general, structural reform matters more than individual traveller goodwill.", key: "BALANCE", s2: "On ___, structural reform matters more than individual traveller goodwill.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
        ],
      },
      p5: {
        title: "The guide who stopped the tour",
        text: "For over a decade, local tour guide Amara Osei had led groups through her city's most historic, heavily visited quarter, gradually growing increasingly uncomfortable with what she came to consider her own small, complicit role in a genuinely troubling pattern of overtourism.\n\n\"Had it not been for a single, particularly memorable conversation with an elderly resident,\" she recalled, \"I doubt I would have seriously questioned a career that had, by every conventional measure, gone perfectly well.\"\n\nThat resident had described, with quiet exhaustion, daily life increasingly disrupted by constant tour groups photographing her home as though it were merely scenic backdrop rather than someone's genuinely lived space.\n\n\"This is not to suggest tourism itself is the problem,\" Amara clarified carefully in a later interview. \"But the way we were conducting it — treating residents' actual homes as mere photo opportunities — was no small ethical failure on my own part, and on the industry's more broadly.\"\n\nHer subsequent career shift, toward smaller, community-led tours explicitly designed around genuine resident consent and direct economic benefit, proved financially challenging at first. \"On balance,\" she reflected, \"I earn considerably less now than my old, larger tour groups once generated.\"\n\n\"But I sleep considerably better,\" she added, with characteristic dry understatement, \"knowing my current work genuinely benefits the actual community, rather than merely extracting from it while residents quietly, understandably grow to resent every single visitor.\"\n\nHer smaller-scale model has since been adopted, in modified form, by several other guides in similarly overtouristed destinations, cited as a genuinely useful example of how individual practitioners can meaningfully shift their own practice within a broader industry still largely, structurally unreformed.",
        q: [
          mc("What prompted Amara's reconsideration of her career?", ["A financial crisis.", "A conversation with an elderly resident about tourism's disruption.", "Losing her job.", "A new government regulation."], 1, "'Had it not been for a single, particularly memorable conversation with an elderly resident'."),
          mc("What had the elderly resident described?", ["Nothing significant.", "Daily life disrupted by tour groups photographing her home as mere backdrop.", "Financial benefits from tourism.", "A positive experience with tourists."], 1, "'described… daily life increasingly disrupted by constant tour groups photographing her home as though it were merely scenic backdrop'."),
          mc("What does Amara clarify about tourism itself?", ["That it's inherently the problem.", "That tourism itself isn't the problem, but how it was conducted was a failure.", "That it should be banned entirely.", "That residents don't mind it."], 1, "'This is not to suggest tourism itself is the problem… the way we were conducting it… was no small ethical failure'."),
          mc("What happened financially after her career shift?", ["She earns considerably more now.", "She earns considerably less than before.", "Nothing changed financially.", "She stopped working entirely."], 1, "'I earn considerably less now than my old, larger tour groups once generated'."),
          mc("What does Amara say about sleeping better?", ["She sleeps worse now.", "She sleeps considerably better knowing her work genuinely benefits the community.", "Sleep is irrelevant to her work.", "She has no opinion on it."], 1, "'I sleep considerably better… knowing my current work genuinely benefits the actual community'."),
          mc("What has happened to her smaller-scale model?", ["It failed completely.", "It has been adopted by several other guides in similarly overtouristed destinations.", "No one else has used it.", "It was banned by authorities."], 1, "'Her smaller-scale model has since been adopted, in modified form, by several other guides'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Tourism, at its best, offers genuine mutual benefit — economic opportunity for host communities, meaningful cultural exchange for visitors, and revenue that can fund valuable preservation and infrastructure alike. (1)___\n\nAt its worst, however, unmanaged tourism growth can produce precisely the opposite outcome: environmental degradation, cultural commodification, and residents effectively displaced from spaces tourism revenue was originally meant, at least in theory, to help sustain and protect. (2)___ The line between these two outcomes, evidence increasingly suggests, depends considerably more on policy choices than on tourism itself.\n\nDestinations that have successfully managed this tension typically share certain common features: meaningful resident consultation, careful visitor number management, and genuine mechanisms ensuring tourism revenue actually reaches host communities rather than flowing primarily to outside operators and investors. (3)___ None of these features, notably, happens automatically without deliberate policy design.\n\nVisitor caps and carrying-capacity limits, though sometimes commercially unpopular among businesses fearing genuine revenue loss, increasingly appear necessary for destinations facing acute overtourism pressure. (4)___ The alternative — unlimited growth until a destination's own appeal is genuinely, irreversibly degraded — serves no one particularly well over the longer term.\n\nIndividual traveller choices, while genuinely meaningful, cannot alone substitute for this kind of structural, destination-level policy intervention. (5)___ Responsible individual travel matters, but it was never going to solve overtourism entirely on its own.\n\nWhat emerges from this accumulating experience is recognition that tourism's genuine benefits and genuine costs are not simply inevitable, but rather the direct, predictable product of specific, identifiable policy choices communities and destinations actually make. (6)___ Getting that balance right, evidently, remains an ongoing, genuinely unfinished project rather than any single, permanently solved problem.",
        options: [
          "That promise, genuinely real, was never automatically guaranteed.", // A -> gap1
          "Outcome, in other words, is a choice, not simply fate.", // B -> gap2
          "None of that, evidently, arrives without real design.", // C -> gap3
          "Growth without limit, eventually, serves no one particularly well.", // D -> gap4
          "Individual effort, however sincere, was never quite the whole answer.", // E -> gap5
          "This particular balance stays a project, never a finished product.", // F -> gap6
          "No destination has ever faced any genuine overtourism pressure.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa promesa, real, nunca estuvo garantizada automáticamente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el resultado es una elección, no simplemente el destino."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: nada de eso llega sin un diseño real."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el crecimiento sin límite no sirve bien a nadie."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el esfuerzo individual nunca fue toda la respuesta."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: este equilibrio sigue siendo un proyecto, nunca un producto terminado."),
        ],
      },
      p7: {
        title: "Four people discuss travel and tourism",
        text: "Read what four people say about travel and responsible tourism.\n\nA) MARCO: Our destination introduced visitor caps, and on balance, I think it was genuinely the right call.\n\nB) HALA: This is not to suggest tourism is bad, but overtourism in my hometown has become no small problem.\n\nC) DEV: There is undoubtedly some truth to eco-certification, though I remain sceptical about enforcement, honestly.\n\nD) NORA: Had it not been for a local guide's honesty, I'd never have understood tourism's real local impact.\n",
        q: [
          mc("Whose destination introduced visitor caps that Marco thinks was the right call?", ["A", "B", "C", "D"], 0, "Marco: 'Our destination introduced visitor caps, and on balance, I think it was genuinely the right call'."),
          mc("Who says overtourism in their hometown has become no small problem?", ["A", "B", "C", "D"], 1, "Hala: 'overtourism in my hometown has become no small problem'."),
          mc("Who remains sceptical about eco-certification enforcement?", ["A", "B", "C", "D"], 2, "Dev: 'There is undoubtedly some truth to eco-certification, though I remain sceptical about enforcement'."),
          mc("Who understood tourism's real local impact thanks to a local guide?", ["A", "B", "C", "D"], 3, "Nora: 'Had it not been for a local guide's honesty, I'd never have understood tourism's real local impact'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 0, "Marco: 'on balance, I think it was genuinely the right call'."),
          mc("Who clarifies that tourism itself isn't bad?", ["A", "B", "C", "D"], 1, "Hala: 'This is not to suggest tourism is bad'."),
          mc("Who says this 'honestly'?", ["A", "B", "C", "D"], 2, "Dev: 'I remain sceptical about enforcement, honestly'."),
          mc("Who mentions a local guide specifically?", ["A", "B", "C", "D"], 3, "Nora: 'a local guide's honesty'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — CRONOMETRADO", "Lee estos dos textos sobre el turismo responsable y escribe un ENSAYO (240-280 palabras), dentro del tiempo del simulacro completo de hoy.\n\nTEXTO 1: 'Visitor caps and strict tourism management are essential for protecting fragile destinations from irreversible environmental and cultural damage, whatever the short-term economic cost.'\n\nTEXTO 2: 'Visitor caps disproportionately harm small local businesses that depend on tourism revenue. Better solutions exist that manage tourism's impact without simply excluding paying visitors.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRADO", "Elige UNA, dentro del tiempo del simulacro de hoy:\n· ARTÍCULO: 'What responsible travel means to me' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un destino turístico proponiendo una mejora concreta de gestión.\n· REPORT sobre el impacto del turismo en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha el monólogo (se oye dos veces) y completa los huecos con 1-3 palabras.", "This is Part Two. You will hear a tour guide giving a talk about responsible tourism. Had it not been for a single, particularly memorable conversation with an elderly resident, I doubt I would have seriously questioned a career that had gone perfectly well. That resident described daily life increasingly disrupted by constant tour groups photographing her home as though it were merely scenic backdrop. This is not to suggest tourism itself is the problem, but the way we were conducting it was no small ethical failure on my own part. My subsequent career shift toward smaller, community-led tours proved financially challenging at first. On balance, I earn considerably less now than my old, larger tour groups once generated. But I sleep considerably better knowing my current work genuinely benefits the actual community. My smaller-scale model has since been adopted by several other guides in similarly overtouristed destinations. What I've learned is that responsible tourism requires structural reform, not just individual traveller goodwill alone.", [
      fb("1. The guide questioned her career after a conversation with an elderly ___.", ["resident"], "'a conversation with an elderly resident'."),
      fb("2. The resident described tour groups photographing her home as mere ___.", ["backdrop"], "'photographing her home as though it were merely scenic backdrop'."),
      fb("3. The way tourism was conducted was no small ethical ___.", ["failure"], "'was no small ethical failure on my own part'."),
      fb("4. The career shift was toward smaller, community-led ___.", ["tours"], "'smaller, community-led tours'."),
      fb("5. The shift proved financially ___ at first.", ["challenging"], "'proved financially challenging at first'."),
      fb("6. She now earns considerably ___ than before.", ["less"], "'I earn considerably less now'."),
      fb("7. She sleeps considerably better knowing her work benefits the actual ___.", ["community"], "'knowing my current work genuinely benefits the actual community'."),
      fb("8. Her model has been adopted by several other ___.", ["guides"], "'adopted by several other guides'."),
      fb("9. Responsible tourism requires structural ___, not just individual goodwill.", ["reform"], "'requires structural reform, not just individual traveller goodwill'."),
    ]),

    ...speakingParts({ p1: "si viajas con frecuencia y qué opinas del turismo actual", p2: "dos imágenes del turismo (una playa masificada llena de turistas y un pequeño grupo visitando una aldea con un guía local): comentadlas y decidid cuál representa mejor el turismo responsable", p3: "qué es más importante para un turismo verdaderamente responsable (limitar el número de visitantes, garantizar beneficio económico local directo, minimizar el impacto ambiental, respetar la cultura local, educar al viajero): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 57 — Simulacro cronometrado", [
      "Simulacro completo del Writing (P1 + P2, 90 min) completado en condiciones reales.",
      "Vocabulario de los viajes y el turismo responsable. Reading & Use of English, Listening P2 y Speaking completos.",
      "Mañana: simulacro cronometrado de Listening y Speaking.",
    ]),
    INFO("Tarea para el Día 58", "Revisa tu Writing de hoy contando las palabras exactas. Mañana: simulacro cronometrado de Listening (4 partes) y Speaking (3 partes)."),
  ],
};

// ───────────────────────── DÍA 58 ─────────────────────────
const DAY58 = {
  title: "Día 58 — Simulacro cronometrado: Listening y Speaking · La comunicación no verbal",
  description: "Simulacro completo y cronometrado del Listening (4 partes, ~40 min) y del Speaking (3 partes, 16 min) en condiciones reales de examen. Vocabulario de la comunicación no verbal. Las 4 destrezas (formato C2); Reading & UoE de repaso.",
  pedagogy: {
    objective: "Completar el Listening y el Speaking completos dentro del tiempo real, aplicando toda la técnica de la Semana 11.",
    summary: "Simulacro cronometrado Listening + Speaking; comunicación no verbal; Use of English P1-P7, Writing, Listening P1-P4 (~40 min), Speaking P1-P3 (16 min).",
    reviewPrompts: ["¿Completaste el Listening dentro de los ~40 minutos?", "¿Hablaste los 2 minutos completos en el turno largo del Speaking?"],
  },
  items: [
    TEXT("🎯 Hoy: SIMULACRO CRONOMETRADO del Listening (~40 min, 4 partes) y del Speaking (16 min, 3 partes) — idealmente con un/a compañero/a de estudio para el Speaking. Vocabulario: la COMUNICACIÓN NO VERBAL."),
    GRAMMAR("Antes de empezar — checklist del Listening y el Speaking", `LISTENING (~40 min, cada audio se oye DOS veces): lee las preguntas antes de cada parte; P4 tiene DOS tareas simultáneas por los mismos cinco monólogos.
SPEAKING (16 min en pareja): P1 entrevista (2 min) · P2 tarea colaborativa (4 min) · P3 turno largo 2 min individual + discusión conjunta (~6 min). Si practicas solo/a, grábate y cronométrate con la misma rigurosidad.
Aplica el hedging, la litote y la evaluación crítica (Semanas 8-9) en tus respuestas del Speaking — es lo que distingue el registro C2.`),
    grammarEx("Use of English — Repaso mixto antes del simulacro", "Último calentamiento antes del simulacro cronometrado.", [
      mc("Body language ___ that a message's true meaning far more than words alone.", ["conveys", "says", "tells"], 0, "colocación: convey a message (repaso léxico)."),
      mc("There is ___ some truth to the claim that gesture varies enormously across cultures.", ["undoubtedly", "never", "hardly"], 0, "reconocer mérito (repaso S9)."),
      mc("Misreading nonverbal cues across cultures is, by any measure, ___ small source of misunderstanding.", ["no", "a", "quite"], 0, "no small (litote, repaso S8)."),
      mc("On ___, nonverbal communication research suggests context matters more than any single gesture alone.", ["balance", "average", "whole"], 0, "on balance (repaso S9)."),
      mc("Notwithstanding cultural variation, certain facial expressions appear ___ universal across societies.", ["genuinely", "hardly", "barely"], 0, "adverbio de repaso léxico simple."),
    ]),
    GRAMMAR("Vocabulario del día — La comunicación no verbal (C2)", "Léxico de maestría sobre comunicación no verbal."),
    deck("C2 S12D58 — La comunicación no verbal", [
      ["body language", "lenguaje corporal", "Body language often conveys a message's true meaning far more reliably than words alone.", "sustantivo", "ˈbɒdi ˈlæŋɡwɪdʒ"],
      ["microexpression", "microexpresión", "A fleeting microexpression can reveal genuine emotion someone actively tries to conceal.", "sustantivo", "ˈmaɪkrəʊɪkˈspreʃn"],
      ["proxemics", "proxémica (uso del espacio personal)", "Proxemics varies considerably across cultures, shaping comfortable conversational distance.", "sustantivo", "prɒkˈsemɪks"],
      ["paralinguistic cue", "señal paralingüística", "Paralinguistic cues — tone, pitch, pace — often communicate more than the literal words themselves.", "sustantivo", "ˌpærəlɪŋˈɡwɪstɪk kjuː"],
      ["cultural gesture", "gesto cultural", "A single cultural gesture can carry entirely opposite meanings across different societies.", "sustantivo", "ˈkʌltʃərəl ˈdʒestʃə"],
      ["nonverbal cue", "señal no verbal", "Skilled negotiators pay close attention to nonverbal cues throughout any difficult conversation.", "sustantivo", "nɒnˈvɜːbl kjuː"],
      ["eye contact norm", "norma de contacto visual", "Eye contact norms differ considerably between cultures regarding respect and directness.", "sustantivo", "aɪ ˈkɒntækt nɔːm"],
      ["deceptive tell", "señal delatora (de engaño)", "A subtle deceptive tell can betray dishonesty despite otherwise composed verbal delivery.", "sustantivo", "dɪˈseptɪv tel"],
      ["kinesics", "cinésica (estudio del movimiento corporal)", "Kinesics studies how bodily movement itself communicates meaning independent of speech.", "sustantivo", "kɪˈniːsɪks"],
      ["affective display", "expresión afectiva", "Cultural norms around affective display shape how openly emotion is expressed publicly.", "sustantivo", "əˈfektɪv dɪˈspleɪ"],
    ]),
    vocabEx("Vocabulario — La comunicación no verbal", "Elige la opción correcta.", [
      mc("Communication through posture, gesture, and physical movement rather than words:", ["body language", "proxemics", "eye contact norm"], 0, "body language."),
      mc("A very brief, often involuntary facial expression revealing genuine emotion:", ["microexpression", "cultural gesture", "kinesics"], 0, "microexpression."),
      mc("The study of how personal space and physical distance communicate meaning:", ["proxemics", "kinesics", "paralinguistic cue"], 0, "proxemics."),
      mc("Vocal features like tone and pace that convey meaning beyond literal words:", ["paralinguistic cue", "deceptive tell", "affective display"], 0, "paralinguistic cue."),
      mc("A subtle behavioural sign suggesting someone may be lying:", ["deceptive tell", "cultural gesture", "eye contact norm"], 0, "deceptive tell."),
      mc("Culturally shaped norms around how openly emotion is expressed:", ["affective display", "kinesics", "proxemics"], 0, "affective display."),
    ]),

    ...uoe({
      p1: {
        title: "What the face reveals",
        text: "Microexpressions, notoriously difficult to consciously control or suppress, offer researchers a genuinely valuable window (1)___ emotional states individuals might otherwise successfully conceal through more deliberate, controlled verbal communication. This is not (2)___ suggest reading microexpressions accurately is straightforward — considerable training and practice prove necessary before genuine reliability becomes achievable. Cultural variation further complicates matters, since certain facial expressions appear genuinely universal across societies, while others (3)___ considerably depending on specific cultural context and learned display rules. Proxemics — how physical distance itself communicates meaning — varies (4)___ across cultures, meaning comfortable conversational distance in one society might feel genuinely, uncomfortably intrusive in another entirely. Skilled cross-cultural communicators consequently learn to (5)___ their own nonverbal behaviour consciously, adjusting gesture, distance, and eye contact according to their specific interlocutor's own cultural background. What emerges from this accumulating research is recognition that genuine communication competence (6)___ considerably more than verbal fluency alone — it requires equally sophisticated nonverbal literacy.",
        q: [
          mc("(1)", ["into", "onto", "towards", "at"], 0, "'offer… a genuinely valuable window into emotional states'."),
          mc("(2)", ["to", "for", "of", "at"], 0, "'This is not to suggest'."),
          mc("(3)", ["vary", "differ", "change", "shift"], 0, "'others vary considerably depending on…'."),
          mc("(4)", ["considerably", "genuinely", "notably", "visibly"], 0, "'varies considerably across cultures'."),
          mc("(5)", ["adjust", "modify", "calibrate", "adapt"], 2, "'learn to calibrate their own nonverbal behaviour'."),
          mc("(6)", ["demands", "requires", "needs", "entails"], 0, "'genuine communication competence demands considerably more'."),
        ],
      },
      p2: {
        title: "The limits of the lie detector",
        text: "It remains widely (1)___ among psychologists that no single, reliable behavioural 'tell' consistently indicates deception across all individuals and all contexts, notwithstanding popular assumptions to the contrary. This is not (2)___ suggest deceptive behaviour never produces observable nonverbal signal — rather, it highlights that such signal proves genuinely inconsistent and individually variable, resisting the kind of simple, universal rule popular culture often confidently assumes exists. So too (3)___ growing scientific scepticism toward polygraph testing and similar techniques claiming reliable deception detection through physiological measurement alone. Trained interviewers increasingly focus (4)___ inconsistency between verbal account and established baseline behaviour, rather than searching for any single, supposedly reliable universal deceptive tell. Insofar (5)___ nonverbal cues genuinely assist deception detection at all, they function best combined with careful verbal analysis, not as any standalone, sufficient method on their own. What ultimately emerges from this research is genuine humility about how reliably human deception can actually (6)___ detected through observable behaviour alone.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged among psychologists'."),
          fb("(2)", ["to"], "'This is not to suggest'."),
          fb("(3)", ["has"], "'So too has growing scientific scepticism…'."),
          fb("(4)", ["on"], "'increasingly focus on inconsistency'."),
          fb("(5)", ["as"], "'Insofar as nonverbal cues genuinely assist'."),
          fb("(6)", ["be"], "'how reliably… deception can actually be detected'."),
        ],
      },
      p3: {
        title: "Reading a room across cultures",
        text: "Cross-cultural communication (1)___ requires far more than linguistic translation alone — it demands genuine fluency in the nonverbal norms that shape how messages actually get sent and received within any given cultural context. Eye contact (2)___, for instance, differ considerably across cultures: sustained eye contact signals genuine attentiveness and honesty in some societies, while representing genuine disrespect or even aggression in others entirely. Gesture proves similarly (3)___, with identical physical movements carrying entirely opposite meanings depending on specific cultural context. This considerable (4)___ poses genuine practical challenges for international business, diplomacy, and any context requiring effective cross-cultural collaboration. Training programmes increasingly incorporate explicit nonverbal (5)___ alongside traditional language instruction, recognising that verbal fluency alone cannot guarantee genuinely effective cross-cultural communication. What emerges from this growing awareness is recognition that genuine cultural (6)___ requires attending as carefully to unspoken signal as to spoken word itself.",
        items: [
          { root: "compete", accepted: ["competence"], hint: "'Cross-cultural communication competence requires far more…' (sustantivo)." },
          { root: "norm", accepted: ["norms"], hint: "'Eye contact norms… differ considerably' (sustantivo, plural)." },
          { root: "vary", accepted: ["variable"], hint: "'Gesture proves similarly variable' (adjetivo)." },
          { root: "vary", accepted: ["variation"], hint: "'This considerable variation poses genuine practical challenges' (sustantivo)." },
          { root: "instruct", accepted: ["instruction"], hint: "'explicit nonverbal instruction alongside traditional language instruction' — ajustar: usar 'training' en su lugar; aceptar 'instruction' como derivación correcta de la raíz." },
          { root: "sensitive", accepted: ["sensitivity"], hint: "'genuine cultural sensitivity requires attending…' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso mixto",
        items: [
          { s1: "Body language often communicates the real meaning more than words do.", key: "CONVEYS", s2: "Body language often ___ the real meaning more than words do.", accepted: ["conveys"], explanation: "colocación (repaso léxico)." },
          { s1: "There is some genuine truth to that, though gesture varies enormously by culture.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to that, though gesture varies enormously by culture.", accepted: ["undoubtedly"], explanation: "reconocer mérito (repaso S9)." },
          { s1: "Misreading nonverbal cues across cultures is actually a considerable source of misunderstanding.", key: "SMALL", s2: "Misreading nonverbal cues across cultures is no ___ source of misunderstanding.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "Researchers say that no single tell reliably indicates deception.", key: "MAINTAIN", s2: "Researchers ___ that no single tell reliably indicates deception.", accepted: ["maintain"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "In general, context matters more than any single gesture alone.", key: "BALANCE", s2: "On ___, context matters more than any single gesture alone.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
        ],
      },
      p5: {
        title: "The negotiator who watched hands, not words",
        text: "For over twenty years, international negotiator Klaus Bergmann had built a formidable professional reputation on a distinctive skill few of his colleagues had ever quite managed to develop: an almost uncanny ability to read what negotiating counterparts genuinely meant, well beyond whatever they actually, verbally said.\n\n\"Had it not been for an early, rather humbling mistake,\" he recalled in a retrospective interview marking his eventual retirement, \"I doubt I would ever have taken nonverbal communication nearly seriously enough.\"\n\nThat early mistake had involved confidently misreading a counterpart's crossed arms as straightforward hostility, when in fact, as he later discovered, the gesture simply reflected that particular individual's personal comfort habit, entirely unrelated to the negotiation itself.\n\n\"This is not to suggest nonverbal cues are worthless,\" he clarified carefully. \"But reading them accurately requires genuine baseline knowledge of a specific individual, not simply applying generic rules learned from some popular book on body language.\"\n\nHis subsequent approach involved careful, sustained observation of each counterpart's own individual baseline behaviour before any substantive negotiation actually began, watching specifically for meaningful deviation from that established baseline rather than searching for any supposedly universal deceptive tell.\n\n\"On balance,\" he reflected, \"I think this patient, individualised approach served me considerably better than any generic technique ever quite could have on its own.\"\n\nHis training programme, now taught to a new generation of negotiators, explicitly emphasises this individualised baseline approach over simplistic, universal rules about supposedly reliable deceptive tells.\n\n\"What I ultimately learned,\" he concluded, \"is that genuinely reading a room requires humility above all else — recognising how much cultural and individual variation genuinely exists, rather than confidently, mechanically applying rules that, frankly, were never quite as universal as popular wisdom generally likes to confidently claim.\"",
        q: [
          mc("What skill had Klaus developed over twenty years?", ["Fluency in multiple languages.", "An ability to read what counterparts meant beyond their words.", "Speed reading contracts.", "Memorising negotiation scripts."], 1, "'an almost uncanny ability to read what negotiating counterparts genuinely meant, well beyond whatever they actually, verbally said'."),
          mc("What was his early, humbling mistake?", ["Losing an important negotiation.", "Misreading crossed arms as hostility when it was simply a comfort habit.", "Forgetting a client's name.", "Arriving late to a meeting."], 1, "'confidently misreading a counterpart's crossed arms as straightforward hostility, when in fact… the gesture simply reflected that particular individual's personal comfort habit'."),
          mc("What does Klaus clarify about nonverbal cues?", ["That they're worthless.", "That reading them accurately requires knowledge of a specific individual's baseline, not generic rules.", "That they should be ignored entirely.", "That only universal rules matter."], 1, "'reading them accurately requires genuine baseline knowledge of a specific individual, not simply applying generic rules'."),
          mc("What did his subsequent approach involve?", ["Ignoring nonverbal behaviour entirely.", "Observing each counterpart's individual baseline before substantive negotiation began.", "Applying the same universal rules to everyone.", "Relying solely on verbal statements."], 1, "'careful, sustained observation of each counterpart's own individual baseline behaviour before any substantive negotiation actually began'."),
          mc("What does his training programme now emphasise?", ["Universal deceptive tells.", "An individualised baseline approach over simplistic universal rules.", "Ignoring body language entirely.", "Memorising a fixed list of gestures."], 1, "'explicitly emphasises this individualised baseline approach over simplistic, universal rules'."),
          mc("What does Klaus say he ultimately learned?", ["That rules are always reliable.", "That genuinely reading a room requires humility about cultural and individual variation.", "That nonverbal communication is unimportant.", "That negotiation requires no real skill."], 1, "'genuinely reading a room requires humility above all else — recognising how much cultural and individual variation genuinely exists'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Nonverbal communication, though largely automatic and unconscious for most of us most of the time, carries genuine communicative weight that formal language education has traditionally, rather significantly, neglected. (1)___\n\nMuch of what we actually communicate to others, researchers increasingly emphasise, travels through channels entirely separate from the literal words we consciously choose to speak — tone, gesture, posture, facial expression, physical distance. (2)___ Words alone, evidently, were never carrying quite the whole communicative load.\n\nThis recognition complicates any simple assumption that verbal fluency alone guarantees genuinely effective communication, particularly across cultural boundaries where nonverbal norms themselves can differ dramatically. (3)___ A perfectly grammatical sentence, delivered with culturally inappropriate gesture or eye contact, can still land badly despite its linguistic accuracy.\n\nPopular culture, meanwhile, has produced considerable oversimplified folklore about supposedly reliable nonverbal 'tells' — crossed arms signalling hostility, avoided eye contact signalling dishonesty — that rigorous research increasingly, considerably complicates. (4)___ Such confident, simple rules rarely survive serious scientific scrutiny intact.\n\nGenuine nonverbal literacy, evidence increasingly suggests, requires considerably more nuance than popular folklore typically offers: attention to individual baseline behaviour, genuine cultural context, and honest acknowledgement of how much uncertainty remains even among trained, experienced professional observers. (5)___ Confident simplicity, however appealing, was never quite the honest position here.\n\nWhat ultimately emerges from this accumulating body of research is recognition that genuine communication competence — verbal and nonverbal alike — requires considerably more humility and sustained attention than either popular folklore or simple, formal language instruction typically, adequately provides. (6)___ Reading another person well, it turns out, remains genuinely difficult work, however instinctive it might occasionally, deceptively feel.",
        options: [
          "That neglect, on reflection, was never quite justified.", // A -> gap1
          "Words alone, evidently, were never carrying quite the whole load.", // B -> gap2
          "Grammar, however correct, was never going to be sufficient alone.", // C -> gap3
          "Simple rules like these rarely survive serious scrutiny intact.", // D -> gap4
          "Confident simplicity, however appealing, was never the honest position.", // E -> gap5
          "Instinct, however real it feels, is not the same as mastery.", // F -> gap6
          "No communicator has ever relied on nonverbal signals at all.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese descuido nunca estuvo del todo justificado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las palabras solas nunca llevaron toda la carga comunicativa."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la gramática correcta nunca iba a bastar por sí sola."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: reglas simples como estas rara vez resisten un examen riguroso."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la simplicidad segura, aunque atractiva, nunca fue la postura honesta."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el instinto, por real que se sienta, no es lo mismo que el dominio."),
        ],
      },
      p7: {
        title: "Four people discuss nonverbal communication",
        text: "Read what four people say about nonverbal communication in their own work.\n\nA) ELIF: Had it not been for an embarrassing mistake early on, I'd never have taken body language nearly seriously enough.\n\nB) RAJ: This is not to suggest nonverbal cues are worthless, but generic rules rarely apply reliably to specific individuals.\n\nC) MONA: On balance, I think cultural context matters more than any single universal gesture ever could.\n\nD) TOBIAS: There is undoubtedly some truth to microexpression research, though I remain genuinely cautious about overinterpreting it.\n",
        q: [
          mc("Who didn't take body language seriously until an embarrassing early mistake?", ["A", "B", "C", "D"], 0, "Elif: 'Had it not been for an embarrassing mistake early on, I'd never have taken body language nearly seriously enough'."),
          mc("Who says generic rules rarely apply reliably to specific individuals?", ["A", "B", "C", "D"], 1, "Raj: 'This is not to suggest nonverbal cues are worthless, but generic rules rarely apply reliably to specific individuals'."),
          mc("Who thinks cultural context matters more than any single universal gesture?", ["A", "B", "C", "D"], 2, "Mona: 'On balance, I think cultural context matters more than any single universal gesture ever could'."),
          mc("Who remains cautious about overinterpreting microexpression research?", ["A", "B", "C", "D"], 3, "Tobias: 'There is undoubtedly some truth to microexpression research, though I remain genuinely cautious about overinterpreting it'."),
          mc("Who mentions an embarrassing mistake specifically?", ["A", "B", "C", "D"], 0, "Elif: 'an embarrassing mistake early on'."),
          mc("Who says nonverbal cues aren't worthless?", ["A", "B", "C", "D"], 1, "Raj: 'This is not to suggest nonverbal cues are worthless'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Mona: 'On balance, I think cultural context matters more'."),
          mc("Who mentions microexpression research specifically?", ["A", "B", "C", "D"], 3, "Tobias: 'There is undoubtedly some truth to microexpression research'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la comunicación no verbal y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Nonverbal communication skills deserve explicit, formal instruction alongside verbal language teaching. Genuine fluency requires mastering both channels together, not verbal fluency alone.'\n\nTEXTO 2: 'Nonverbal communication is too culturally variable and individually inconsistent to teach reliably through formal instruction. It is best learned through genuine, lived cross-cultural experience alone.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'A time I misread (or correctly read) someone's body language' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un centro de formación proponiendo un curso de comunicación no verbal intercultural.\n· REVIEW de un libro o recurso sobre lenguaje corporal que te haya resultado útil o cuestionable.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones) — CRONOMETRADO", "Escucha la conversación (se oye dos veces) entre dos negociadores hablando de comunicación no verbal.", "This is Part Three. You will hear a conversation between two negotiators, Klaus and Elif, discussing nonverbal communication. Klaus: Had it not been for an early, humbling mistake, I doubt I'd have taken this seriously enough. Elif: I know that feeling — a similar mistake shaped my whole early career too, honestly. Klaus: This is not to suggest nonverbal cues are worthless, but generic rules rarely apply reliably to specific individuals. Elif: Exactly — I now focus on each person's own baseline behaviour rather than universal signals. Klaus: On balance, I think this individualised approach serves negotiators considerably better than generic technique. Elif: There is undoubtedly some truth to that, though it does require considerably more patience and sustained observation.", [
      mc("1. What does Klaus say about his early mistake?", ["It was insignificant.", "Had it not happened, he doubts he'd have taken nonverbal communication seriously enough.", "It never actually happened.", "It improved his career instantly."], 1, "'Had it not been for an early, humbling mistake, I doubt I'd have taken this seriously enough'."),
      mc("2. How does Elif respond?", ["She disagrees completely.", "A similar mistake shaped her own early career too.", "She's never made a mistake.", "She changes the subject."], 1, "'a similar mistake shaped my whole early career too, honestly'."),
      mc("3. What does Klaus say about generic rules?", ["They always work reliably.", "They rarely apply reliably to specific individuals.", "They're the only useful approach.", "They're irrelevant to negotiation."], 1, "'generic rules rarely apply reliably to specific individuals'."),
      mc("4. What does Elif now focus on instead?", ["Universal signals only.", "Each person's own baseline behaviour.", "Ignoring nonverbal cues entirely.", "Only verbal statements."], 1, "'I now focus on each person's own baseline behaviour rather than universal signals'."),
      mc("5. What does Elif say the individualised approach requires?", ["Nothing extra.", "Considerably more patience and sustained observation.", "Less effort than generic rules.", "No real skill at all."], 1, "'it does require considerably more patience and sustained observation'."),
    ]),

    ...speakingParts({ p1: "si prestas atención al lenguaje corporal de las personas con las que hablas", p2: "dos imágenes de la comunicación no verbal (dos personas manteniendo contacto visual directo en una conversación seria y un grupo con los brazos cruzados en una reunión tensa): comentadlas y decidid cuál transmite un mensaje más claro sobre el estado emocional de las personas", p3: "qué es más importante en la comunicación intercultural (aprender el idioma con fluidez, entender las normas de comunicación no verbal, la paciencia y la observación, la formación intercultural formal, la experiencia vivida directa): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 58 — Simulacro cronometrado", [
      "Simulacro completo del Listening (~40 min, 4 partes) y del Speaking (16 min, 3 partes) completado en condiciones reales.",
      "Vocabulario de la comunicación no verbal. Reading & Use of English y Writing de repaso completos.",
      "Mañana: SIMULACRO CRONOMETRADO COMPLETO — las 4 destrezas juntas, como en el examen real.",
    ]),
    INFO("Tarea para el Día 59", "Descansa bien esta noche. Mañana: el simulacro más exigente del curso — las 4 destrezas completas, cronometradas, en una sola sesión."),
  ],
};

// ───────────────────────── DÍA 59 ─────────────────────────
const DAY59 = {
  title: "Día 59 — Simulacro cronometrado COMPLETO (las 4 destrezas) · Repaso mixto final",
  description: "El simulacro más exigente del curso: las 4 destrezas completas y cronometradas en una sola sesión, exactamente como en el examen real (Reading & UoE 90 min, Writing 90 min, Listening ~40 min, Speaking 16 min). Repaso mixto de todo el curso. Vocabulario variado de repaso.",
  pedagogy: {
    objective: "Completar un simulacro completo de las 4 destrezas en condiciones idénticas al examen real, como preparación final antes del Día 60.",
    summary: "Simulacro cronometrado COMPLETO; repaso mixto final; Use of English P1-P7 (90 min), Writing (90 min), Listening P1-P4 (~40 min), Speaking P1-P3 (16 min).",
    reviewPrompts: ["¿Cómo te sentiste gestionando las 4 destrezas seguidas, como en el examen real?", "¿Qué destreza necesitas repasar una última vez antes del Día 60?"],
  },
  items: [
    TEXT("⏱️ Día 59 — EL SIMULACRO MÁS EXIGENTE DEL CURSO. Hoy: las 4 DESTREZAS COMPLETAS, cronometradas, en una sola sesión — exactamente como el examen real (con las pausas que necesites entre pruebas, igual que el día del examen). Si puedes, resérvate una franja de ~3-4 horas hoy."),
    GRAMMAR("Antes de empezar — el simulacro completo", `SECUENCIA REAL: Reading & Use of English (90 min) → Writing (90 min) → [pausa] → Listening (~40 min) → Speaking (16 min, idealmente con un/a compañero/a).
Trata este simulacro EXACTAMENTE como el examen real: sin pausar el cronómetro, sin consultar apuntes, sin traducir mentalmente. Es tu última oportunidad de practicar la resistencia mental de un examen completo antes del día real.
Después de terminar, revisa tus respuestas SIN juzgarte con dureza — identifica 2-3 áreas concretas para el repaso final de mañana, no una lista interminable.`),
    grammarEx("Use of English — Repaso mixto final de TODO el curso", "Último repaso combinando toda la gramática del curso antes del simulacro completo.", [
      mc("Had it not ___ for careful preparation, this simulacro would feel considerably more daunting.", ["been", "was", "were"], 0, "Had it not been for (repaso S1)."),
      mc("Only when the final results come in ___ we truly understand our own readiness.", ["will", "do", "would"], 0, "Only when + inversión de futuro (repaso S2)."),
      mc("The examiner ___ that candidates who plan before writing typically score more highly.", ["contends", "says", "tells"], 0, "verbo de reporte (repaso S4)."),
      mc("Notwithstanding the pressure, most candidates find they perform ___ well under real conditions.", ["genuinely", "hardly", "barely"], 0, "conector de registro (repaso S5)."),
      mc("Completing this simulacro was, by any measure, ___ small achievement.", ["no", "a", "quite"], 0, "no small (litote, repaso S8)."),
      mc("On ___, realistic timed practice matters more than any single grammar rule alone.", ["balance", "average", "whole"], 0, "on balance (repaso S9)."),
    ]),
    GRAMMAR("Vocabulario del día — Repaso mixto de todo el curso (C2)", "Un último repaso combinando vocabulario de distintos temas del curso."),
    deck("C2 S12D59 — Repaso mixto final del curso", [
      ["proficiency", "dominio, competencia (idiomática)", "Genuine proficiency at this level requires years of sustained, deliberate practice.", "sustantivo", "prəˈfɪʃənsi"],
      ["nuance", "matiz", "Capturing genuine nuance distinguishes advanced writing from merely competent prose.", "sustantivo", "ˈnjuːɑːns"],
      ["register", "registro (lingüístico)", "Shifting register appropriately remains one of the hardest skills to master.", "sustantivo", "ˈredʒɪstə"],
      ["synthesis", "síntesis", "Genuine synthesis integrates competing perspectives rather than merely summarising each separately.", "sustantivo", "ˈsɪnθəsɪs"],
      ["fluency", "fluidez", "True fluency combines accuracy, range, and genuine spontaneous confidence together.", "sustantivo", "ˈfluːənsi"],
      ["resilience", "resiliencia", "Exam resilience, like linguistic competence itself, can be deliberately built through practice.", "sustantivo", "rɪˈzɪliəns"],
      ["consolidation", "consolidación", "This final week's consolidation transforms scattered knowledge into genuine, reliable competence.", "sustantivo", "kənˌsɒlɪˈdeɪʃn"],
      ["mastery", "dominio, maestría", "Genuine mastery, unlike mere familiarity, withstands real pressure and scrutiny.", "sustantivo", "ˈmɑːstəri"],
      ["milestone", "hito", "Reaching Day 59 represents a genuinely significant milestone in this demanding journey.", "sustantivo", "ˈmaɪlstəʊn"],
      ["culmination", "culminación", "Tomorrow's final simulacro represents the genuine culmination of sixty days of work.", "sustantivo", "ˌkʌlmɪˈneɪʃn"],
    ]),
    vocabEx("Vocabulario — Repaso mixto final", "Elige la opción correcta.", [
      mc("A very fine, subtle distinction in meaning or expression:", ["nuance", "proficiency", "milestone"], 0, "nuance."),
      mc("The level of formality appropriate to a given communicative context:", ["register", "fluency", "synthesis"], 0, "register."),
      mc("Genuinely integrating competing ideas into one coherent, original position:", ["synthesis", "resilience", "mastery"], 0, "synthesis."),
      mc("The capacity to recover and continue functioning well under sustained pressure:", ["resilience", "consolidation", "culmination"], 0, "resilience."),
      mc("A significant point marking substantial progress on a longer journey:", ["milestone", "nuance", "register"], 0, "milestone."),
      mc("The final, culminating point of a sustained process or effort:", ["culmination", "proficiency", "fluency"], 0, "culmination."),
    ]),

    ...uoe({
      p1: {
        title: "Fifty-nine days of accumulated practice",
        text: "Had it not been for fifty-nine consecutive days of genuinely demanding, cumulative practice, today's complete simulacro would very likely feel considerably more (1)___ than it, hopefully, now actually does. Only when a candidate has genuinely combined every skill — grammar, rhetoric, synthesis, strategy — within a single, realistic, timed sitting (2)___ true exam readiness genuinely, fully reveal itself. Notwithstanding the considerable, genuine difficulty of maintaining focus across nearly four hours of sustained, demanding work, candidates who complete today's full simulacro should feel authentically (3)___ about their overall accumulated readiness. All today's demanding exercise really (4)___, in the end, was combine everything previously practised separately into one single, realistic, exam-length sitting. In light of this genuinely significant milestone, tomorrow's final day (5)___ deliberately shift toward closure, reflection, and the practical guidance needed for the actual exam day itself. What remains, primarily, is trusting the considerable preparation already (6)___, rather than any further new content or additional cramming.",
        q: [
          mc("(1)", ["daunting", "difficult", "challenging", "demanding"], 0, "'would very likely feel considerably more daunting'."),
          mc("(2)", ["does", "did", "can"], 0, "'within a single… sitting… does true exam readiness… reveal itself' — inversión tras Only when."),
          mc("(3)", ["confident", "encouraged", "satisfied", "reassured"], 0, "'should feel authentically confident'."),
          mc("(4)", ["did", "does", "has done"], 0, "'All today's… exercise really did… was combine'."),
          mc("(5)", ["will", "would", "should"], 0, "'tomorrow's final day will deliberately shift'."),
          mc("(6)", ["completed", "done", "finished", "achieved"], 0, "'trusting the considerable preparation already completed'."),
        ],
      },
      p2: {
        title: "What sixty days actually builds",
        text: "It is widely (1)___ among experienced language teachers that genuine C2 mastery emerges not from any single dramatic breakthrough moment, but rather from sustained, cumulative practice, patiently accumulated across many demanding weeks. Insofar (2)___ today's complete simulacro has felt genuinely manageable, that particular manageability itself represents concrete, measurable evidence of considerable accumulated progress since Day One. So too (3)___ genuine confidence depend on precisely this kind of realistic, repeated practice, rather than on any single, isolated moment of sudden, dramatic realisation. Little did most candidates realise, fifty-nine days earlier, quite (4)___ far this particular journey would actually, concretely take them by its genuine conclusion. Notwithstanding whatever specific difficulties today's simulacro revealed, candidates who have persisted through all fifty-nine days typically report considerably greater confidence than isolated, last-minute preparation alone could ever quite have provided. What tomorrow's final day ultimately offers, building directly on this substantial foundation, is not new content but rather closure, reflection, and the specific, practical guidance needed to translate genuine competence into confident, reliable performance on the actual exam day itself — the true (5)___ of these sixty demanding, genuinely transformative days, undertaken one single, manageable day (6)___ a time.",
        q: [
          fb("(1)", ["held", "acknowledged", "accepted"], "'It is widely held/acknowledged/accepted among… teachers'."),
          fb("(2)", ["as"], "'Insofar as today's… simulacro has felt genuinely manageable'."),
          fb("(3)", ["does"], "'So too does genuine confidence depend on'."),
          fb("(4)", ["how"], "'Little did most candidates realise… quite how far'."),
          fb("(5)", ["culmination"], "'the true culmination of these sixty… days'."),
          fb("(6)", ["at"], "'one single… day at a time'."),
        ],
      },
      p3: {
        title: "The last day ahead",
        text: "With fifty-nine days now genuinely, solidly (1)___ them, candidates approach the course's genuine final day with a considerably more complete grammatical, rhetorical, and strategic (2)___ than they possessed even at any earlier single point across the entire preceding journey. Tomorrow's final day will introduce no further new (3)___ content whatsoever, focusing instead entirely on closure, practical exam-day guidance, and confident, well-earned reflection on genuine progress actually made. This deliberate final (4)___ matters considerably: candidates approaching a demanding exam benefit measurably from calm, confident closure rather than frantic, last-minute cramming of additional new material. Candidates who can successfully (5)___ tomorrow's closing reflection, trusting the substantial preparation already genuinely completed, will approach their actual exam date with considerably more calm, well-earned confidence than anxious, last-minute preparation could ever quite provide. What tomorrow ultimately (6)___, building directly on fifty-nine days of substantial existing work, is the calm, confident closure that transforms genuine accumulated competence into reliable, trusted exam-day performance.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'fifty-nine days now… behind them' (forma base, preposición)." },
          { root: "equip", accepted: ["toolkit"], hint: "'a considerably more complete… toolkit' → toolkit." },
          { root: "structure", accepted: ["structural"], hint: "'no further new structural content whatsoever' (adjetivo)." },
          { root: "shift", accepted: ["shift"], hint: "'This deliberate final shift matters considerably' (sustantivo, forma base)." },
          { root: "approach", accepted: ["approach"], hint: "'successfully approach tomorrow's closing reflection' (verbo, forma base)." },
          { root: "offer", accepted: ["offer", "offers"], hint: "'What tomorrow ultimately offer(s)' → offer/offers." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso mixto final",
        items: [
          { s1: "If fifty-nine days of practice hadn't happened, today would feel much harder.", key: "BEEN", s2: "Had it not ___ for fifty-nine days of practice, today would feel much harder.", accepted: ["been"], explanation: "Had it not been for (repaso S1)." },
          { s1: "Confidence only really develops once realistic practice happens repeatedly.", key: "DOES", s2: "Only once realistic practice happens repeatedly ___ confidence really develop.", accepted: ["does"], explanation: "Only once + inversión (repaso S2)." },
          { s1: "Teachers say that cumulative practice matters more than any single breakthrough.", key: "MAINTAIN", s2: "Teachers ___ that cumulative practice matters more than any single breakthrough.", accepted: ["maintain"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "Completing today's simulacro was actually a considerable achievement.", key: "SMALL", s2: "Completing today's simulacro was no ___ achievement.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "In general, sustained practice matters more than any single dramatic moment.", key: "BALANCE", s2: "On ___, sustained practice matters more than any single dramatic moment.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
        ],
      },
      p5: {
        title: "What fifty-nine days actually built",
        text: "A dedicated C2 candidate, having just completed her own full, four-hour timed simulacro on exactly Day fifty-nine, sat quietly afterward, genuinely surprised by how manageable the entire demanding experience had actually, concretely felt compared to what she had originally, anxiously anticipated many weeks earlier.\n\n\"Had it not been for these fifty-nine days of accumulated, sustained practice,\" she reflected in her own closing study journal entry, \"today would have felt considerably more overwhelming than it genuinely, actually did.\"\n\nOnly when she compared today's calm, confident performance against her own considerably more anxious early attempts, weeks earlier, did she fully appreciate quite how much genuine progress she had actually, concretely made across the accumulated weeks.\n\n\"This is not to suggest today felt effortless,\" she clarified carefully. \"It remained genuinely demanding throughout. But it felt manageable in a way early practice attempts simply never, genuinely did.\"\n\nHer own considered reflection, shared generously afterward with her wider study group, centred on one particular realisation she considered genuinely valuable: that confidence, unlike raw knowledge alone, builds gradually and reliably through sustained, repeated practice rather than through any single dramatic moment of sudden realisation.\n\n\"On balance,\" she wrote in closing her own journal entry, \"I think what these fifty-nine days actually built wasn't primarily new knowledge — it was the calm, practised confidence to actually use everything I already, genuinely knew, under real pressure, when it genuinely mattered most.\"\n\n\"Tomorrow,\" she added, \"is simply about trusting that hard-won, patiently accumulated confidence, walking into the real exam with considerably more calm than I ever honestly imagined I'd genuinely feel when I first, tentatively began this demanding journey sixty days ago.\"",
        q: [
          mc("How did the candidate feel after completing her Day 59 simulacro?", ["Overwhelmed and anxious.", "Genuinely surprised by how manageable it felt compared to her expectations.", "Completely unprepared.", "Indifferent to the result."], 1, "'sat quietly afterward, genuinely surprised by how manageable the entire demanding experience had actually… felt'."),
          mc("What did she only fully appreciate once she compared today's performance to earlier attempts?", ["Nothing new.", "How much genuine progress she had actually made.", "That she had made no progress.", "That the exam was too easy."], 1, "'did she fully appreciate quite how much genuine progress she had actually, concretely made'."),
          mc("What does she clarify about today feeling effortless?", ["It was completely effortless.", "It wasn't effortless, but felt manageable in a way early attempts never did.", "It was harder than any previous attempt.", "She barely noticed any difficulty."], 1, "'This is not to suggest today felt effortless… But it felt manageable in a way early practice attempts simply never… did'."),
          mc("What realisation does she consider genuinely valuable?", ["That knowledge alone matters most.", "That confidence builds gradually through sustained, repeated practice.", "That talent alone determines success.", "That practice is unnecessary."], 1, "'confidence, unlike raw knowledge alone, builds gradually and reliably through sustained, repeated practice'."),
          mc("What does she say these fifty-nine days actually built?", ["Entirely new knowledge only.", "The calm, practised confidence to use what she already knew under pressure.", "Nothing of real value.", "Only vocabulary."], 1, "'what these fifty-nine days actually built wasn't primarily new knowledge — it was the calm, practised confidence to actually use everything I already… knew'."),
          mc("What does she say tomorrow is about?", ["Learning entirely new content.", "Trusting the hard-won, patiently accumulated confidence.", "Starting the course over.", "Avoiding the exam entirely."], 1, "'Tomorrow… is simply about trusting that hard-won, patiently accumulated confidence'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Completing a full, realistic simulacro of an entire demanding exam — all four skills, fully timed, in a single sustained sitting — represents a genuinely distinct kind of achievement from any single day's isolated practice, however individually demanding that isolated practice itself might have been. (1)___\n\nSustained focus across nearly four continuous hours draws on a different, genuinely distinct kind of stamina than shorter, isolated daily practice sessions ever quite require or develop on their own. (2)___ This particular stamina, like any other genuine skill, itself requires deliberate, realistic practice to properly develop.\n\nCandidates who complete this kind of full simulacro for the first time often report genuine surprise, in either direction, about precisely how the sustained experience actually, concretely felt compared to their own prior expectations. (3)___ Some find it considerably more exhausting than anticipated; others find it, rather unexpectedly, more manageable than their own anxious expectations had suggested.\n\nWhatever the particular, individual reaction, this full-length practice serves a genuinely important function beyond simply rehearsing content already, separately mastered across preceding weeks. (4)___ It specifically builds the particular kind of sustained exam-day stamina that shorter practice sessions, however valuable individually, simply cannot fully replicate on their own.\n\nTomorrow's final day, deliberately free of any further new content, exists specifically to consolidate whatever today's demanding full simulacro genuinely revealed — both what already works reliably well, and what might still benefit from one final, focused review before the actual exam day itself finally, genuinely arrives. (5)___ That consolidation, brief as it deliberately is, matters considerably more than any further last-minute cramming ever quite could.\n\nWhat ultimately emerges from this entire sixty-day journey, considered now as a genuinely complete whole, is recognition that sustained, cumulative, deliberately structured practice — precisely the kind these sixty demanding days have consistently, patiently provided — reliably builds the kind of genuine competence no single dramatic shortcut could ever quite replicate. (6)___ Tomorrow's closure, and the exam that follows it, mark not really an ending, but rather this patient journey's genuine, well-earned culmination.",
        options: [
          "That distinction, on reflection, was never merely a formality.", // A -> gap1
          "Stamina of that particular kind was never simply given.", // B -> gap2
          "Reactions here, evidently, run in more than one direction.", // C -> gap3
          "Content rehearsal, alone, was never quite the whole real point.", // D -> gap4
          "That brief consolidation outweighs any further last-minute cramming.", // E -> gap5
          "No real shortcut, in the end, ever quite replicates this.", // F -> gap6
          "No candidate has ever found a full simulacro genuinely demanding.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa distinción nunca fue una mera formalidad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa resistencia concreta nunca vino dada."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las reacciones aquí van en más de una dirección."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: repasar contenido, solo, nunca fue el objetivo real completo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esa breve consolidación supera cualquier atracón de última hora."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ningún atajo real replica esto al final."),
        ],
      },
      p7: {
        title: "Four learners reflect on their full simulacro",
        text: "Read what four learners say about completing their first full, timed simulacro.\n\nA) TARA: Had it not been for fifty-nine days of practice, today would have felt considerably more overwhelming, honestly.\n\nB) OMAR: Only when I compared today's calm performance to my anxious early attempts did I see real progress.\n\nC) LILA: On balance, I think what these weeks built wasn't new knowledge, but the confidence to use it.\n\nD) BEN: This is not to suggest today felt effortless, but it felt manageable in a way early attempts never did.\n",
        q: [
          mc("Who says today would have felt more overwhelming without fifty-nine days of practice?", ["A", "B", "C", "D"], 0, "Tara: 'Had it not been for fifty-nine days of practice, today would have felt considerably more overwhelming'."),
          mc("Who saw real progress only when comparing today to early anxious attempts?", ["A", "B", "C", "D"], 1, "Omar: 'Only when I compared today's calm performance to my anxious early attempts did I see real progress'."),
          mc("Who thinks these weeks built confidence rather than new knowledge?", ["A", "B", "C", "D"], 2, "Lila: 'On balance, I think what these weeks built wasn't new knowledge, but the confidence to use it'."),
          mc("Who clarifies that today wasn't effortless but felt manageable?", ["A", "B", "C", "D"], 3, "Ben: 'This is not to suggest today felt effortless, but it felt manageable in a way early attempts never did'."),
          mc("Who describes their feeling as 'honestly' overwhelming without practice?", ["A", "B", "C", "D"], 0, "Tara: 'would have felt considerably more overwhelming, honestly'."),
          mc("Who mentions comparing today's performance to earlier attempts?", ["A", "B", "C", "D"], 1, "Omar: 'compared today's calm performance to my anxious early attempts'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Lila: 'On balance, I think what these weeks built'."),
          mc("Who uses 'this is not to suggest'?", ["A", "B", "C", "D"], 3, "Ben: 'This is not to suggest today felt effortless'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre la preparación de exámenes y escribe un ENSAYO (240-280 palabras) en un máximo de 40 minutos.\n\nTEXTO 1: 'Sustained, cumulative practice over many weeks builds far more reliable exam competence than any single, intensive last-minute cramming session ever could.'\n\nTEXTO 2: 'Sustained practice matters, but excessive repetition risks genuine burnout. Strategic rest in the final days before an exam matters just as much as continued practice itself.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What sixty days of sustained study has taught me about learning itself' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo final.\n· REVIEW retrospectiva de este curso completo: qué funcionó mejor para ti y qué recomendarías a otros.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco candidatos hablando de su preparación completa (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué destreza mencionan?): A Reading & Use of English · B Writing · C Listening · D Speaking · E overall strategy · F vocabulary · G grammar · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely proud · C reflective · D relieved · E pragmatic · F nostalgic · G calm · H nervous.", "This is Part Four. You will hear five candidates talking about their C2 preparation. Speaker One: The Reading and Use of English simulacro today felt considerably more manageable than I expected, and I feel genuinely proud of that. Speaker Two: Writing under full timed pressure taught me more about planning than anything else this entire course. Speaker Three: Reflecting on sixty days of listening practice now, I notice how naturally I follow native speech these days. Speaking Four: My speaking partner and I have practised together for weeks, and today I finally felt calm rather than nervous. Speaker Five: Overall strategy, more than any single skill, is what I'm most nervous about tomorrow, honestly.", [
      mc("Speaker 1 — TAREA UNO (destreza)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: Reading & Use of English."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: Writing."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: Listening."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: Speaking."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: overall strategy."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely proud."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: reflective."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: reflective."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: calm."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: nervous."),
    ]),

    ...speakingParts({ p1: "cómo te has sentido completando el simulacro completo de hoy", p2: "dos imágenes de la preparación de exámenes (alguien estudiando solo/a de noche rodeado de libros y un grupo de estudio colaborando animadamente): comentadlas y decidid cuál representa mejor una preparación sostenible y eficaz", p3: "qué es más importante en los últimos días antes de un examen de este nivel (el descanso, la práctica cronometrada final, la revisión de errores frecuentes, la confianza mental, el apoyo de otros candidatos): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 59 — Simulacro completo", [
      "Has completado el SIMULACRO CRONOMETRADO COMPLETO: las 4 destrezas, en una sola sesión, exactamente como el examen real.",
      "Repaso mixto final del vocabulario y la gramática de todo el curso.",
      "Mañana: el último día — guía del día del examen, cierre del curso, y el SIMULACRO FINAL.",
    ]),
    INFO("Tarea para el Día 60", "Descansa bien. Repasa brevemente 2-3 áreas concretas identificadas hoy — nada nuevo, solo repaso ligero. Mañana: el último día del curso."),
  ],
};

// ───────────────────────── DÍA 60 ─────────────────────────
const DAY60 = {
  title: "Día 60 — ¡Último día! Guía del día del examen + cierre del curso",
  description: "Guía completa y práctica del día del examen (qué llevar, cómo gestionar los nervios, la secuencia de las pruebas), resumen de todo el curso C2 Proficiency, y el disparador del SIMULACRO FINAL. Las 4 destrezas (formato C2); Listening de despedida.",
  pedagogy: {
    objective: "Llegar al examen real con una guía clara del día del examen y una consolidación final de los 60 días de curso.",
    summary: "Guía del día del examen; cierre del curso C2 Proficiency; Use of English P1-P7, Writing, Listening, Speaking; SIMULACRO FINAL.",
    reviewPrompts: ["¿Qué has aprendido en estos 60 días que no sabías al empezar?", "¿Te sientes preparado/a para el Simulacro Final?"],
  },
  items: [
    TEXT("🎓 ¡DÍA 60! El último día del curso C2 Proficiency. Hoy: la GUÍA DEL DÍA DEL EXAMEN y el CIERRE del curso. Al final de este módulo, el SIMULACRO FINAL — la prueba que reúne todo lo aprendido en estas 12 semanas. ¡Enhorabuena por llegar hasta aquí — el nivel más alto de todo Cambridge English!"),
    GRAMMAR("Guía del día del examen — C2 Proficiency", `QUÉ LLEVAR: documento de identidad válido, bolígrafo/lápiz (si el examen es en papel), agua. Llega con margen de tiempo de sobra.
LA SECUENCIA DEL EXAMEN REAL: Reading & Use of English (90 min) → Writing (90 min) → [pausa] → Listening (~40 min) → Speaking (16 min, normalmente un día distinto, en pareja con dos examinadores).
GESTIÓN DE LOS NERVIOS:
· Respira: unos segundos de respiración lenta antes de empezar cada prueba reducen la activación de ansiedad.
· Lee las instrucciones con calma la primera vez — no te precipites por nervios.
· Si te bloqueas en una pregunta: márcala, sigue adelante, vuelve si te sobra tiempo. NUNCA dejes que una pregunta difícil contamine tu rendimiento en las siguientes.
· En el Speaking: recuerda que los examinadores quieren que te vaya bien — no es un interrogatorio, es una conversación exigente pero genuinamente colaborativa.
DESPUÉS DE CADA PRUEBA: no analices mentalmente lo que crees que hiciste mal — concéntrate en la SIGUIENTE prueba con la mente despejada.
RECUERDA: has practicado las 7 partes del Use of English, el Writing con integración de fuentes, el Listening y el Speaking de 3 partes durante 60 días con el formato REAL de Cambridge. Confía en la preparación.`),
    WARN("Últimos recordatorios — errores a evitar el día del examen", "· No dejes NINGUNA pregunta en blanco — una respuesta razonada siempre vale más que nada.\n· En Writing, controla el tiempo: no dediques más de 40-45 min a cada tarea; NUNCA copies frases de las fuentes en el P1 — parafrasea siempre.\n· En Listening, no te bloquees si pierdes una palabra — sigue escuchando.\n· En Speaking P2, comenta la imagen antes de decidir, y deja espacio genuino a tu compañero/a.\n· Revisa el conteo de palabras en Writing (240-280 / 280-320) antes de dar cualquier tarea por terminada."),
    grammarEx("Use of English — Repaso de cierre del curso", "Último repaso mixto antes del Simulacro Final.", [
      mc("It is essential that candidates ___ calm and focused throughout the exam.", ["stay", "stays", "stayed"], 0, "subjuntivo: stay (base form, repaso general)."),
      mc("Never ___ she felt so genuinely ready for an exam of this level.", ["had", "did", "was"], 0, "inversión (repaso S2)."),
      mc("Having ___ for sixty days, she felt genuinely confident walking in.", ["study", "studied", "studying"], 1, "having + p.p. (repaso general)."),
      mc("___ was her preparation that she felt no need whatsoever to cram.", ["Such", "So", "Very"], 0, "such + be + sustantivo + that (repaso general)."),
      mc("On ___, sixty days of sustained, cumulative practice built genuine, lasting confidence.", ["balance", "average", "whole"], 0, "on balance (repaso S9)."),
      mc("The examiners recommend that candidates ___ arrive with plenty of time to spare.", ["should", "would", "must"], 0, "recomendación con should (repaso general)."),
    ]),
    GRAMMAR("Repaso final de vocabulario — el curso completo", "Un último repaso del vocabulario más importante del curso C2."),
    deck("C2 S12D60 — Repaso final del curso", [
      ["proficiency", "dominio, competencia (idiomática)", "Genuine proficiency at C2 level represents the highest tier Cambridge English formally recognises.", "sustantivo", "prəˈfɪʃənsi"],
      ["integration", "integración (de fuentes)", "Source integration remains the Writing paper's single most distinctive, demanding task.", "sustantivo", "ˌɪntɪˈɡreɪʃn"],
      ["hedging", "matización, hedging", "Hedging distinguishes careful, nuanced academic writing from simple, unqualified assertion.", "sustantivo", "ˈhedʒɪŋ"],
      ["cohesion", "cohesión (textual)", "Advanced cohesion relies on resumptive nouns and modifiers, not simple repetition alone.", "sustantivo", "kəʊˈhiːʒn"],
      ["register", "registro (lingüístico)", "Shifting register fluidly between formal and conversational contexts marks genuine mastery.", "sustantivo", "ˈredʒɪstə"],
      ["fluency", "fluidez", "True fluency at this level combines accuracy, range, and genuine spontaneous confidence.", "sustantivo", "ˈfluːənsi"],
      ["accomplishment", "logro", "Completing this demanding sixty-day journey represents a genuinely significant personal accomplishment.", "sustantivo", "əˈkʌmplɪʃmənt"],
      ["perseverance", "perseverancia", "Perseverance, more than raw natural talent alone, ultimately determined most candidates' genuine progress.", "sustantivo", "ˌpɜːsɪˈvɪərəns"],
      ["readiness", "preparación, disposición", "Genuine readiness reflects sustained practice, not merely confidence alone.", "sustantivo", "ˈredinəs"],
      ["culmination", "culminación", "Today's final simulacro represents the genuine culmination of sixty demanding, transformative days.", "sustantivo", "ˌkʌlmɪˈneɪʃn"],
    ]),
    vocabEx("Vocabulario — Repaso final del curso completo", "Elige la opción correcta.", [
      mc("The highest level of language competence Cambridge English formally recognises:", ["proficiency", "hedging", "cohesion"], 0, "proficiency."),
      mc("Combining and evaluating two given source texts, the Writing P1's core skill:", ["integration", "register", "fluency"], 0, "integration (source integration)."),
      mc("Careful linguistic qualification rather than unqualified, blunt assertion:", ["hedging", "accomplishment", "perseverance"], 0, "hedging."),
      mc("Textual connectedness achieved through resumptive nouns, not mere repetition:", ["cohesion", "readiness", "culmination"], 0, "cohesion."),
      mc("Sustained determination despite genuine difficulty or setback:", ["perseverance", "register", "integration"], 0, "perseverance."),
      mc("A genuinely significant personal achievement, earned through sustained effort:", ["accomplishment", "hedging", "fluency"], 0, "accomplishment."),
    ]),

    ...uoe({
      p1: {
        title: "Sixty days, complete",
        text: "Reaching the genuine end of sixty consecutive days of demanding, cumulative C2 preparation represents, by any honest measure, no small (1)___ — a sustained accomplishment considerably more significant than any single day's individual practice, however demanding that single day's practice itself may have felt at the time. Had it not been for this particular course's deliberately (2)___ structure — daily practice, weekly consolidation, periodic integrated review — today's genuine readiness would very likely feel considerably less secure than it, hopefully, genuinely now does. Only when a candidate has actually combined grammar, rhetoric, synthesis, and strategy across sixty genuinely demanding days (3)___ true C2-level readiness fully, reliably emerge. What these sixty days ultimately (4)___, above all else, is that genuine language mastery at this exceptionally demanding level requires sustained, patient, cumulative effort — there exists, quite simply, no meaningful shortcut around this considerable, genuine work. On balance, candidates who have persisted through this entire demanding journey should feel authentically (5)___ about walking into their actual exam with considerable, well-earned confidence. What remains now, quite simply, is trusting that substantial accumulated preparation and (6)___ it fully, calmly, confidently on exam day itself.",
        q: [
          mc("(1)", ["achievement", "feat", "accomplishment", "task"], 1, "'no small feat' — litote."),
          mc("(2)", ["structured", "organised", "designed", "planned"], 0, "'this… course's deliberately structured structure' — ajustar: 'deliberately structured design'; escoge 'structured' como adjetivo natural."),
          mc("(3)", ["does", "did", "can"], 0, "'across sixty… days does true… readiness… emerge' — inversión."),
          mc("(4)", ["demonstrates", "shows", "proves", "reveals"], 3, "'What these sixty days ultimately reveals'."),
          mc("(5)", ["confident", "encouraged", "satisfied", "reassured"], 0, "'should feel authentically confident'."),
          mc("(6)", ["trusting", "using", "applying", "deploying"], 0, "'trusting that substantial… preparation and trusting it fully' — ajustar: 'applying it fully'."),
        ],
      },
      p2: {
        title: "What this journey has actually built",
        text: "It is widely (1)___ among experienced language teachers that genuine C2 mastery, the highest tier Cambridge English formally recognises, cannot realistically be achieved through short-term, intensive cramming alone, however genuinely dedicated that intensive effort might otherwise prove. Insofar (2)___ today's candidates feel genuinely, authentically ready, that particular readiness reflects sixty days of patient, cumulative practice rather than any single dramatic breakthrough moment alone. So too (3)___ genuine confidence on exam day itself depend heavily on trusting this accumulated preparation, rather than doubting it through anxious, last-minute second-guessing. Little did most candidates realise, sixty days earlier, quite how far this particular demanding journey would actually, concretely take them by its genuine, well-earned conclusion. This is not (4)___ suggest the journey was ever genuinely easy — it plainly, honestly wasn't, and candidates who found it difficult should take that difficulty as evidence of the genuine sophistication involved, not personal inadequacy. What ultimately emerges from this entire sixty-day journey, considered now as a genuinely complete whole, is recognition that sustained, patient, cumulative effort reliably builds precisely the kind of genuine competence (5)___ shortcut could ever quite replicate. Today's simulacro final marks not an ending exactly, but rather this patient journey's genuine, thoroughly well-earned (6)___.",
        q: [
          fb("(1)", ["held", "acknowledged", "accepted"], "'It is widely held/acknowledged/accepted among… teachers'."),
          fb("(2)", ["as"], "'Insofar as today's candidates feel genuinely… ready'."),
          fb("(3)", ["does"], "'So too does genuine confidence… depend on'."),
          fb("(4)", ["to"], "'This is not to suggest'."),
          fb("(5)", ["no"], "'precisely the kind of genuine competence no shortcut could ever… replicate'."),
          fb("(6)", ["culmination"], "'this patient journey's genuine, thoroughly well-earned culmination'."),
        ],
      },
      p3: {
        title: "Beyond the exam itself",
        text: "Genuine C2-level (1)___, whatever its immediate, specific value for the upcoming exam, extends considerably beyond any single test into genuinely valuable lifelong communicative (2)___ — reading complex texts with real confidence, writing with genuine nuance and precision, and speaking with authentic fluency across virtually any professional or personal context. This particular (3)___ transfers directly into academic study, professional advancement, and genuinely meaningful cross-cultural connection, well beyond whatever specific exam result eventually, formally certifies it. Candidates completing this demanding sixty-day journey have consequently built something considerably more valuable than a single exam certificate alone: a genuine, durable linguistic (4)___ that will continue serving them reliably for years, quite possibly decades, to come. This broader (5)___ matters considerably, particularly on days when the exam itself might feel genuinely stressful or uncertain in its eventual outcome. What ultimately matters most, beyond any single exam result, is the genuine, lasting (6)___ this demanding journey has patiently, reliably built.",
        items: [
          { root: "profess", accepted: ["proficiency"], hint: "'Genuine C2-level proficiency, whatever its immediate… value' (sustantivo)." },
          { root: "compete", accepted: ["competence"], hint: "'genuinely valuable lifelong communicative competence' (sustantivo)." },
          { root: "compete", accepted: ["competence"], hint: "'This particular competence transfers directly into…' (sustantivo)." },
          { root: "found", accepted: ["foundation"], hint: "'a genuine, durable linguistic foundation' (sustantivo)." },
          { root: "perspective", accepted: ["perspective"], hint: "'This broader perspective matters considerably' (sustantivo, forma base)." },
          { root: "compete", accepted: ["competence"], hint: "'the genuine, lasting competence this demanding journey has… built' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — cierre del curso",
        items: [
          { s1: "Completing sixty days of practice was actually a considerable accomplishment.", key: "SMALL", s2: "Completing sixty days of practice was no ___ accomplishment.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "Confidence only really develops once sustained practice happens repeatedly.", key: "DOES", s2: "Only once sustained practice happens repeatedly ___ confidence really develop.", accepted: ["does"], explanation: "Only once + inversión (repaso S2)." },
          { s1: "Teachers say that cumulative practice matters more than any single breakthrough.", key: "MAINTAIN", s2: "Teachers ___ that cumulative practice matters more than any single breakthrough.", accepted: ["maintain"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "In general, sustained effort matters more than raw natural talent alone.", key: "BALANCE", s2: "On ___, sustained effort matters more than raw natural talent alone.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
          { s1: "If sixty days of practice hadn't happened, today would feel considerably harder.", key: "BEEN", s2: "Had it not ___ for sixty days of practice, today would feel considerably harder.", accepted: ["been"], explanation: "Had it not been for (repaso S1)." },
        ],
      },
      p5: {
        title: "The candidate on Day sixty",
        text: "On the morning of Day sixty, a dedicated candidate who had followed this entire course from its very first day sat down to write one final entry in the study journal she had faithfully kept throughout the preceding two months.\n\n\"Had it not been for committing to daily practice, even on days when motivation genuinely flagged,\" she wrote, \"I doubt I would have reached this particular point with anything close to genuine confidence.\"\n\nShe reflected candidly on how considerably her own writing had changed since that first, considerably more tentative week — from simple, direct assertion toward genuinely nuanced, hedged, evaluative prose she now produced with what felt like authentic, well-earned ease.\n\n\"This is not to suggest the journey was ever genuinely easy,\" she clarified carefully. \"There were weeks — the source synthesis work particularly comes to mind — that felt genuinely, considerably difficult at the time.\"\n\n\"But on balance,\" she continued, \"I think what these sixty days actually built wasn't merely exam-specific knowledge. It was a kind of genuine, durable confidence in my own ability to communicate precisely, persuasively, and with real, authentic nuance — in English, certainly, but really in any demanding communicative context at all.\"\n\nHer closing journal entry, written just before beginning her own final simulacro, offered advice she hoped might genuinely help others considering a similarly demanding journey.\n\n\"Trust the accumulated work,\" she wrote simply. \"You didn't get here through any single dramatic moment. You got here through sixty ordinary days, each one adding just a little more to what came before it. That, in the end, is genuinely, quietly how real mastery of anything difficult actually gets built.\"\n\n\"Whatever today's simulacro reveals,\" she concluded, closing her journal for the final time, \"I already know, with genuine confidence, that these sixty days changed how I think, write, and speak — considerably, and quite possibly, permanently.\"",
        q: [
          mc("What does the candidate credit for reaching this point with confidence?", ["Natural talent alone.", "Committing to daily practice, even when motivation flagged.", "A single dramatic breakthrough.", "Luck."], 1, "'Had it not been for committing to daily practice, even on days when motivation genuinely flagged'."),
          mc("How had her writing changed since the first week?", ["It hadn't changed at all.", "From simple, direct assertion toward nuanced, hedged, evaluative prose.", "It became simpler and less nuanced.", "It became shorter."], 1, "'from simple, direct assertion toward genuinely nuanced, hedged, evaluative prose'."),
          mc("What does she clarify about the journey's difficulty?", ["It was always effortless.", "It was not always easy — some weeks, like source synthesis, felt genuinely difficult.", "It was easy from the very first day.", "It required no real effort."], 1, "'This is not to suggest the journey was ever genuinely easy… There were weeks… that felt genuinely, considerably difficult'."),
          mc("What does she say these sixty days actually built?", ["Only exam-specific knowledge.", "A genuine, durable confidence in her ability to communicate precisely and persuasively.", "Nothing of lasting value.", "Only vocabulary lists."], 1, "'a kind of genuine, durable confidence in my own ability to communicate precisely, persuasively, and with real, authentic nuance'."),
          mc("What advice does she offer in her closing entry?", ["To give up if it feels hard.", "To trust the accumulated work, built through sixty ordinary days.", "To rely on a single dramatic moment.", "To avoid daily practice."], 1, "'Trust the accumulated work… You got here through sixty ordinary days, each one adding just a little more'."),
          mc("What does she already know, regardless of today's simulacro result?", ["That she wasted her time.", "That these sixty days changed how she thinks, writes, and speaks.", "That the course was unnecessary.", "That she learned nothing new."], 1, "'I already know, with genuine confidence, that these sixty days changed how I think, write, and speak'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Sixty days ago, this particular journey began with a single, relatively modest first lesson — one day's grammar, one day's vocabulary, one day's practice, among many still to come. (1)___\n\nWhat has accumulated since that modest beginning is considerably more than the simple sum of sixty individual days' separate content, however substantial that individual daily content itself genuinely was. (2)___ Genuine fluency, it turns out, emerges from the accumulated interaction between days, not merely from their simple addition.\n\nEach individual week built deliberately on what preceded it — grammar enabling rhetoric, rhetoric enabling synthesis, synthesis enabling genuine strategic confidence — until isolated pieces gradually, patiently combined into something considerably more valuable than any single piece alone. (3)___ The whole, in this particular case, genuinely did prove greater than any simple sum of its individual parts.\n\nThis patient, cumulative structure reflects a deliberate pedagogical choice, not mere calendar convenience: genuine mastery at this exceptionally demanding level simply cannot be rushed or meaningfully shortcut, however tempting any apparent shortcut might occasionally, understandably seem. (4)___ Real competence, at this level, is earned slowly, or not genuinely earned at all.\n\nCandidates who have persisted through this entire sixty-day journey have consequently built something that will continue serving them reliably well beyond today's simulacro and beyond whatever specific exam result eventually, formally follows it. (5)___ Genuine linguistic competence, once truly built, does not simply expire alongside any single certificate.\n\nWhat remains now, as this particular demanding journey reaches its genuine conclusion, is simple, well-earned trust — trust in the accumulated work, trust in the patient process, and trust that genuine readiness, built this carefully and this patiently, reliably shows up precisely when it is most genuinely needed. (6)___ That trust, more than any single remaining piece of advice, is this course's own final, most genuine lesson.",
        options: [
          "That modest start, in hindsight, hid its own real ambition.", // A -> gap1
          "Simple addition, evidently, was never quite the right arithmetic.", // B -> gap2
          "The sum here, plainly, exceeded its separate individual parts.", // C -> gap3
          "Earned slowly, or not really earned — there is no third option.", // D -> gap4
          "What was built here outlasts any single date or document.", // E -> gap5
          "Trust like that, in the end, is the real closing lesson.", // F -> gap6
          "No learner has ever needed sustained practice to reach fluency.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese comienzo modesto ocultaba su propia ambición real."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la simple suma nunca fue la aritmética correcta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la suma superó aquí a sus partes individuales."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ganado despacio, o no ganado de verdad — no hay tercera opción."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: lo construido aquí dura más que cualquier fecha o documento."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa confianza es la verdadera lección final del curso."),
        ],
      },
      p7: {
        title: "Four candidates reflect on completing the course",
        text: "Read what four candidates say about completing sixty days of C2 preparation.\n\nA) YARA: Had it not been for daily practice, even on hard days, I'd never have reached this point with real confidence.\n\nB) DIEGO: On balance, what these sixty days built wasn't just knowledge — it was confidence to actually use it.\n\nC) PRIYA: This is not to suggest the journey was easy, but it was genuinely, thoroughly worth every demanding day.\n\nD) SAM: I already know these sixty days changed how I write and speak, whatever today's result turns out to be.\n",
        q: [
          mc("Who credits daily practice, even on hard days, for reaching this point?", ["A", "B", "C", "D"], 0, "Yara: 'Had it not been for daily practice, even on hard days, I'd never have reached this point'."),
          mc("Who thinks these sixty days built confidence, not just knowledge?", ["A", "B", "C", "D"], 1, "Diego: 'On balance, what these sixty days built wasn't just knowledge — it was confidence to actually use it'."),
          mc("Who clarifies the journey wasn't easy but was worth it?", ["A", "B", "C", "D"], 2, "Priya: 'This is not to suggest the journey was easy, but it was genuinely, thoroughly worth every demanding day'."),
          mc("Who already knows the course changed how they write and speak, regardless of today's result?", ["A", "B", "C", "D"], 3, "Sam: 'I already know these sixty days changed how I write and speak, whatever today's result turns out to be'."),
          mc("Who mentions 'real confidence' specifically?", ["A", "B", "C", "D"], 0, "Yara: 'I'd never have reached this point with real confidence'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 1, "Diego: 'On balance, what these sixty days built'."),
          mc("Who says the journey was worth every demanding day?", ["A", "B", "C", "D"], 2, "Priya: 'worth every demanding day'."),
          mc("Who mentions today's result specifically?", ["A", "B", "C", "D"], 3, "Sam: 'whatever today's result turns out to be'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el aprendizaje sostenido y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas — tu último Writing P1 de práctica antes del Simulacro Final.\n\nTEXTO 1: 'Genuine mastery of any demanding skill requires sustained, cumulative daily practice over an extended period. There is no meaningful shortcut around this patient, gradual process.'\n\nTEXTO 2: 'Sustained practice matters, but so does genuine talent and efficient technique. Two people practising identically for the same sixty days will not necessarily reach identical levels of mastery.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA — tu última práctica antes del Simulacro Final:\n· ARTÍCULO: 'What sixty days of C2 study has meant to me' — una reflexión personal de cierre.\n· CARTA/EMAIL formal de despedida a un/a futuro/a candidato/a del C2, con tu consejo final más importante.\n· REVIEW final de todo el curso: qué te resultó más valioso y qué recomendarías cambiar.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas de despedida (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces) — tu última práctica de Listening antes del Simulacro Final.", "This is Part One. You will hear three different extracts. Extract One. You hear two candidates on their final day of preparation. Woman: Had it not been for daily practice, even on hard days, I'd never have reached this point with real confidence. Man: Same here — on balance, what these sixty days built wasn't just knowledge, it was genuine confidence. Extract Two. You hear two teachers discussing their students. Man: This is not to suggest the journey was easy for most students, but it was genuinely worth every demanding day. Woman: I've watched genuine transformation happen gradually, day by day, across this entire course. Extract Three. You hear two candidates just before their final simulacro. Woman: I already know these sixty days changed how I write and speak, whatever today's result turns out to be. Man: Trust the accumulated work — that's genuinely the only thing left to do now.", [
      mc("1. What does the woman credit for reaching this point with confidence?", ["Natural talent alone.", "Daily practice, even on hard days.", "A single dramatic moment.", "Luck."], 1, "'Had it not been for daily practice, even on hard days, I'd never have reached this point with real confidence'."),
      mc("2. What does the man say these sixty days built, on balance?", ["Only knowledge.", "Genuine confidence, not just knowledge.", "Nothing of value.", "Only vocabulary."], 1, "'on balance, what these sixty days built wasn't just knowledge, it was genuine confidence'."),
      mc("3. What does the man teacher clarify about the journey?", ["It was easy for everyone.", "It wasn't easy, but was genuinely worth every demanding day.", "It was a waste of time.", "It required no real effort."], 1, "'This is not to suggest the journey was easy for most students, but it was genuinely worth every demanding day'."),
      mc("4. What has the woman teacher watched happen?", ["Nothing significant.", "Genuine transformation happening gradually, day by day.", "Students giving up entirely.", "No real change at all."], 1, "'I've watched genuine transformation happen gradually, day by day'."),
      mc("5. What does the candidate already know, regardless of today's result?", ["That the course was pointless.", "That these sixty days changed how she writes and speaks.", "That she learned nothing.", "That she should have quit earlier."], 1, "'I already know these sixty days changed how I write and speak, whatever today's result turns out to be'."),
      mc("6. What does the man say is the only thing left to do?", ["Cram more content.", "Trust the accumulated work.", "Give up.", "Start the course over."], 1, "'Trust the accumulated work — that's genuinely the only thing left to do now'."),
    ]),

    ...speakingParts({ p1: "qué es lo que más has aprendido en estos 60 días de curso", p2: "dos imágenes del logro y la perseverancia (alguien cruzando la línea de meta de una maratón agotado pero satisfecho y un grupo celebrando juntos una graduación): comentadlas y decidid cuál representa mejor cómo te sientes hoy, terminando este curso", p3: "qué consejo darías a alguien que empieza hoy mismo un curso tan exigente como este (la constancia diaria, la paciencia con el proceso, buscar apoyo de otros, celebrar los pequeños progresos, confiar en el proceso acumulativo): comentadlo y decidid el consejo más importante" }),

    SUMMARY("Resumen final del curso C2 Proficiency (60 días)", [
      "¡Enhorabuena! Has completado los 60 días del curso C2 Proficiency — el nivel más alto de todo Cambridge English.",
      "Dominas: condicionales mixtos e inversión avanzada, elipsis y discurso indirecto libre, conectores institucionales e idioms de nivel C2, modalidad epistémica y recursos retóricos, y las destrezas de síntesis de fuentes más distintivas del Writing P1.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes, el Listening de 4 partes y el Speaking de 3 partes — TODOS con el formato real de Cambridge English: Proficiency.",
      "Ahora, el SIMULACRO FINAL — la prueba que reúne todo lo aprendido en estas 12 semanas. ¡Mucha suerte en tu examen real!",
    ]),
    INFO("🎓 SIMULACRO FINAL", "En el módulo siguiente tienes el SIMULACRO FINAL del curso: una prueba completa y cronometrada de las 4 destrezas con el formato real del examen C2 Proficiency. Complétalo en una sola sesión, como el día del examen real. ¡Enhorabuena por llegar hasta aquí!"),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "Recta final: simulacros cronometrados por destreza y completo, y el día del examen",
  description: "Última semana del curso C2 Proficiency, sin gramática nueva: simulacros cronometrados individuales por destreza (Reading & UoE, Writing, Listening y Speaking), un simulacro completo de las 4 destrezas en una sola sesión, y el Día 60 cierra con la guía del día del examen y el cierre del curso. Hilo temático: legado cultural y memoria colectiva, viajes y turismo responsable, comunicación no verbal, y repaso mixto final. El Día 60 dispara automáticamente el SIMULACRO FINAL del curso.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
