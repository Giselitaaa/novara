/**
 * C2 Proficiency · Semana 4 — "El estilo indirecto con verbos de matiz fino y el discurso indirecto libre · La literatura y la narrativa".
 * Gramática: verbos de reporte de matiz muy preciso (concede, contend, retort,
 * posit, speculate, maintain...) y el discurso indirecto libre (free indirect
 * speech), la técnica narrativa que funde la voz del narrador con la del
 * personaje sin marcadores explícitos de cita.
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

// ───────────────────────── DÍA 16 ─────────────────────────
const DAY16 = {
  title: "Día 16 — Los verbos de reporte de matiz fino · Los géneros literarios y la técnica narrativa",
  description: "Verbos de estilo indirecto de precisión (concede, contend, retort, posit, speculate, maintain, protest, muse) que capturan el tono exacto del original. Vocabulario de los géneros literarios. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Ampliar el repertorio de verbos de reporte más allá de los básicos (say/tell/ask), capturando matices precisos de tono, actitud y registro.",
    summary: "Verbos de reporte de matiz fino; géneros literarios y técnica narrativa; Use of English P1–P7, Writing, Listening P1, Speaking P1–P3.",
    commonMistakes: ["usar 'said' de forma genérica cuando el original tiene un matiz claro (resignación, desafío, especulación) que un verbo más preciso capturaría mejor.", "elegir un verbo de reporte que no coincide con el TONO real de lo dicho (usar 'protest' para algo dicho con calma, por ejemplo).", "olvidar los cambios estructurales que exige cada verbo (algunos van con that + cláusula, otros con to + infinitivo, otros con preposición + gerundio)."],
    reviewPrompts: ["¿Qué verbo de reporte usarías para \"Well, I suppose you might have a point,\" she said reluctantly?", "¿Cuál es la diferencia entre 'contend' y 'concede' al reportar una discusión?"],
  },
  items: [
    TEXT("🎓 Semana 4 del C2. Hoy: los VERBOS DE REPORTE DE MATIZ FINO — el recurso que distingue el estilo indirecto mecánico ('he said that...') del estilo indirecto realmente expresivo y preciso. Vocabulario: los GÉNEROS LITERARIOS y la TÉCNICA NARRATIVA."),
    GRAMMAR("Los verbos de reporte de matiz fino", `Más allá de "say/tell/ask", el inglés académico y literario dispone de un repertorio rico de verbos de reporte que capturan el TONO exacto de lo dicho:
· CONCEDE (conceder, admitir a regañadientes): "You may be right," she conceded reluctantly. → She conceded that he might be right.
· CONTEND (sostener, argumentar con firmeza): He contended that the policy was fundamentally flawed.
· RETORT (replicar, contestar con viveza/enfado): "That's simply not true!" he retorted. → He retorted that it was simply not true.
· POSIT (postular, proponer como hipótesis): The theory posits that consciousness emerges from complexity.
· SPECULATE (especular): She speculated that the delay was deliberate.
· MAINTAIN (mantener, insistir en una postura): He maintained his innocence throughout the trial.
· PROTEST (protestar, objetar): "I never agreed to this!" she protested. → She protested that she had never agreed to it.
· MUSE (reflexionar en voz alta, de forma pensativa): "I wonder what might have been," he mused.
⚠️ Cada verbo tiene su propia estructura sintáctica preferida (that + cláusula / to + infinitivo / preposición + gerundio) — verifica el patrón exacto antes de usarlo. El verbo elegido debe reflejar FIELMENTE el tono del original, no ser un simple sustituto decorativo de "said".`),
    WARN("Errores típicos en C2", "· No elijas un verbo de reporte solo por sonar 'avanzado' — debe reflejar FIELMENTE el tono real de lo dicho.\n· 'Concede' implica ceder terreno a regañadientes; no lo uses para una simple afirmación neutra.\n· 'Retort' implica cierta viveza/tensión en la respuesta; no es intercambiable con 'reply' neutro.\n· Verifica la estructura: 'contend/maintain/posit + that'; 'protest + that' (o 'against' + gerundio); 'speculate + that' (o 'about' + sustantivo)."),
    grammarEx("Use of English — Verbos de reporte de matiz fino", "Elige el verbo de reporte que mejor capture el tono.", [
      mc("\"Well, I suppose you might have a point,\" she said reluctantly. → She ___ that he might have a point.", ["conceded", "retorted", "posited"], 0, "concede: ceder a regañadientes."),
      mc("\"That's simply not true!\" he said angrily. → He ___ that it was simply not true.", ["retorted", "conceded", "mused"], 0, "retort: replicar con viveza/enfado."),
      mc("The theory ___ that consciousness emerges from sheer complexity.", ["posits", "protests", "retorts"], 0, "posit: postular una hipótesis."),
      mc("\"I never agreed to this!\" she said indignantly. → She ___ that she had never agreed to it.", ["protested", "conceded", "mused"], 0, "protest: objetar con indignación."),
      mc("He ___ his innocence throughout the entire trial, despite the evidence.", ["maintained", "retorted", "speculated"], 0, "maintain: insistir firmemente en una postura."),
      mc("\"I wonder what might have been,\" he said thoughtfully. → He ___ about what might have been.", ["mused", "contended", "protested"], 0, "muse: reflexionar en voz alta, de forma pensativa."),
    ]),
    GRAMMAR("Vocabulario del día — Los géneros literarios y la técnica narrativa (C2)", "Léxico de maestría sobre literatura."),
    deck("C2 S4D16 — Géneros literarios y técnica narrativa", [
      ["unreliable narrator", "narrador poco fiable", "The novel's unreliable narrator gradually undermines the reader's trust.", "sustantivo", "ˌʌnrɪˈlaɪəbl ˈnærətə"],
      ["allegory", "alegoría", "The novel functions as a sustained allegory for political tyranny.", "sustantivo", "ˈælɪgəri"],
      ["bildungsroman", "novela de formación", "The novel is a classic bildungsroman tracing a young protagonist's growth.", "sustantivo", "ˈbɪldʊŋzrəʊˌmɑːn"],
      ["foreshadowing", "presagio, anticipación narrativa", "Subtle foreshadowing hints at the novel's eventual tragic outcome.", "sustantivo", "ˈfɔːʃædəʊɪŋ"],
      ["denouement", "desenlace", "The novel's denouement resolves every remaining narrative thread.", "sustantivo", "deɪˈnuːmɒ̃"],
      ["verisimilitude", "verosimilitud", "The dialogue's verisimilitude made the characters feel genuinely real.", "sustantivo", "ˌverɪsɪˈmɪlɪtjuːd"],
      ["pathos", "patetismo, capacidad de conmover", "The final scene achieves genuine, unforced pathos.", "sustantivo", "ˈpeɪθɒs"],
      ["protagonist", "protagonista", "The protagonist's moral ambiguity drives much of the plot.", "sustantivo", "prəˈtægənɪst"],
      ["vernacular", "lenguaje vernáculo, coloquial", "The author captured regional vernacular with remarkable precision.", "sustantivo", "vəˈnækjələ"],
      ["motif", "motivo (literario, recurrente)", "Water functions as a recurring motif throughout the novel.", "sustantivo", "məʊˈtiːf"],
    ]),
    vocabEx("Vocabulario — Los géneros literarios y la técnica narrativa", "Elige la opción correcta.", [
      mc("A narrator whose account cannot be fully trusted:", ["unreliable narrator", "protagonist", "motif"], 0, "unreliable narrator."),
      mc("A story with a deeper symbolic meaning throughout:", ["allegory", "denouement", "vernacular"], 0, "allegory."),
      mc("A novel tracing a young protagonist's psychological growth:", ["bildungsroman", "allegory", "motif"], 0, "bildungsroman."),
      mc("Hints early in a story suggesting what will happen later:", ["foreshadowing", "denouement", "pathos"], 0, "foreshadowing."),
      mc("The final resolution of a story's plot:", ["denouement", "foreshadowing", "motif"], 0, "denouement."),
      mc("A recurring symbolic element throughout a literary work:", ["motif", "vernacular", "pathos"], 0, "motif."),
    ]),

    ...uoe({
      p1: {
        title: "What makes a narrator unreliable",
        text: "Literary critics have long (1)___ that unreliable narration represents one of fiction's most powerful, genuinely distinctive techniques, forcing readers to actively (2)___ a narrator's account rather than passively accepting it at face value. Some critics contend (3)___ genuine unreliability requires deliberate authorial signalling — subtle inconsistencies the attentive reader gradually (4)___ — while others maintain that even a narrator's simple limited knowledge suffices to create meaningful unreliability, without requiring any active deception whatsoever. It is widely (5)___ that the technique's genuine power lies precisely in this productive uncertainty: readers must do interpretive work themselves, rather than (6)___ information passively from an authoritative, entirely trustworthy narrative voice.",
        q: [
          mc("(1)", ["argued", "claimed", "suggested", "maintained"], 0, "'critics have long argued that'."),
          mc("(2)", ["question", "doubt", "interrogate", "scrutinise"], 0, "'forcing readers to actively question'."),
          mc("(3)", ["that", "whether", "if", "how"], 0, "'critics contend that genuine unreliability requires'."),
          mc("(4)", ["notices", "detects", "observes", "perceives"], 1, "'inconsistencies the attentive reader gradually detects'."),
          mc("(5)", ["held", "believed", "accepted", "recognised"], 0, "'It is widely held that'."),
          mc("(6)", ["receiving", "absorbing", "obtaining", "accepting"], 0, "'rather than receiving information passively'."),
        ],
      },
      p2: {
        title: "The allegory that outlived its moment",
        text: "Great literary allegories, critics have (1)___ observed, frequently outlive the specific historical circumstances that originally (2)___ their composition, continuing to resonate with readers who may know remarkably little about the particular events the allegory was originally (3)___ to address. This durability suggests that the most successful allegories operate (4)___ two distinct levels simultaneously: a specific historical register comprehensible to contemporary readers, and a more universal, abstract register addressing enduring human concerns that transcend any single particular historical moment. Some critics have speculated (5)___ this dual operation explains why certain allegorical works achieve genuine canonical status while broadly similar contemporaneous works, addressing broadly comparable historical circumstances, fade into (6)___ obscurity within a single generation.",
        q: [
          fb("(1)", ["long"], "'critics have long observed'."),
          fb("(2)", ["prompted", "inspired"], "'circumstances that originally prompted/inspired their composition'."),
          fb("(3)", ["intended", "designed", "meant"], "'the allegory was originally intended/designed/meant to address'."),
          fb("(4)", ["on", "at"], "'operate on/at two distinct levels'."),
          fb("(5)", ["that"], "'critics have speculated that this dual operation'."),
          fb("(6)", ["relative", "comparative"], "'fade into relative/comparative obscurity'."),
        ],
      },
      p3: {
        title: "The pathos of the unremarkable",
        text: "Contrary to popular assumption, literary pathos rarely (1)___ from dramatic, spectacular events alone; it frequently emerges instead from carefully observed, deceptively small (2)___ of ordinary human experience rendered with sufficient precision and (3)___ empathy. A skilled novelist can achieve genuine, unforced pathos through a single, carefully chosen (4)___ — a character's small, private gesture, an unspoken regret briefly glimpsed — that a less skilled writer might overlook entirely in pursuit of more obviously dramatic material. This particular technique demands considerable authorial (5)___, given how easily excessive, heavy-handed emotional manipulation can tip genuine pathos over into mere unearned (6)___, undermining precisely the emotional authenticity the technique originally sought to achieve.",
        items: [
          { root: "derive", accepted: ["derives"], hint: "'pathos rarely derives from' (verbo, 3ª persona)." },
          { root: "detail", accepted: ["details"], hint: "'small details of ordinary… experience' → details." },
          { root: "genuine", accepted: ["genuine"], hint: "'sufficient precision and genuine empathy' (adjetivo)." },
          { root: "moment", accepted: ["moment"], hint: "'a single, carefully chosen moment' (sustantivo)." },
          { root: "restrain", accepted: ["restraint"], hint: "'considerable authorial restraint' → restraint." },
          { root: "sentiment", accepted: ["sentimentality"], hint: "'mere unearned sentimentality' → sentimentality." },
        ],
      },
      p4: {
        title: "Transformaciones — verbos de reporte de matiz fino",
        items: [
          { s1: "\"Well, I suppose you might have a point,\" she said reluctantly.", key: "CONCEDED", s2: "She ___ that he might have a point.", accepted: ["conceded"], explanation: "concede (ceder a regañadientes)." },
          { s1: "\"That's simply not true!\" he said angrily.", key: "RETORTED", s2: "He ___ that it was simply not true.", accepted: ["retorted"], explanation: "retort (replicar con viveza)." },
          { s1: "\"I never agreed to this!\" she said indignantly.", key: "PROTESTED", s2: "She ___ that she had never agreed to it.", accepted: ["protested"], explanation: "protest (objetar)." },
          { s1: "He insisted firmly on his innocence throughout the trial.", key: "MAINTAINED", s2: "He ___ his innocence throughout the trial.", accepted: ["maintained"], explanation: "maintain (insistir firmemente)." },
          { s1: "\"I wonder what might have been,\" he said thoughtfully.", key: "MUSED", s2: "He ___ about what might have been.", accepted: ["mused"], explanation: "muse (reflexionar en voz alta)." },
        ],
      },
      p5: {
        title: "The novelist who let her narrator lie",
        text: "When a debut novelist first submitted her manuscript to literary agents, several rejected it specifically because of what they described as a fundamentally 'unreliable' first-person narrator, one whose account of events, they contended, seemed to gradually, subtly contradict itself in ways that several agents assumed, quite reasonably given conventional publishing wisdom, must reflect careless authorial error rather than deliberate technique.\n\nThe novelist maintained firmly, in her subsequent correspondence with more receptive agents, that the narrator's growing unreliability was entirely, meticulously deliberate — a careful technique designed specifically to mirror the narrator's own gradual, ongoing psychological unravelling as the novel's central, central plot steadily unfolded around her.\n\n\"I posited from the very outset,\" she later explained in a widely read interview, \"that readers would gradually, intuitively sense something was genuinely amiss with the narrator's own account, well before the novel's climactic revelation made that underlying unreliability fully, explicitly clear to everyone.\"\n\nOne particularly perceptive literary agent, upon actually finishing the complete manuscript rather than merely skimming its opening chapters, retorted directly to a colleague who had dismissed it that the supposed 'inconsistencies' were, in fact, the entire narrative point of the whole novel — evidence of considerable authorial control rather than any genuine, careless lack of it.\n\nThat agent's eventual, considered advocacy proved decisive. The novel was eventually published, and critics widely praised precisely the unreliable narration technique that several earlier agents had initially, mistakenly dismissed as simple technical error rather than deliberate artistic choice.\n\n\"Some early readers protested that they felt genuinely, deliberately misled by the narrator,\" the novelist later conceded candidly in a subsequent literary festival appearance, \"and that's honestly, precisely the intended, carefully engineered effect. I speculated that genuine discomfort, if handled skilfully enough, could ultimately prove more genuinely memorable and lasting than comfortable, straightforward narrative certainty ever quite manages to achieve on its own.\"\n\nThe novel went on to win several notable literary prizes, with judges specifically citing its sophisticated handling of narrative unreliability as genuinely, meaningfully exceptional within its particular literary generation. The novelist has since mused publicly, on several separate occasions, that the manuscript's initial, considerable rejection taught her something genuinely valuable about the real, practical risks — and, ultimately, the very real potential rewards — of trusting one's own distinctive artistic instincts even when conventional publishing wisdom initially, confidently suggests genuine caution instead.",
        q: [
          mc("Why did several agents initially reject the manuscript?", ["Poor writing quality.", "They thought the narrator's inconsistencies were careless error.", "It was too short.", "It lacked a plot."], 1, "'a fundamentally 'unreliable' first-person narrator… several agents assumed… must reflect careless authorial error'."),
          mc("What did the novelist maintain about the narrator's unreliability?", ["It was accidental.", "It was entirely deliberate, mirroring the narrator's psychological unravelling.", "It should be removed.", "It was a publisher's suggestion."], 1, "'the narrator's growing unreliability was entirely, meticulously deliberate'."),
          mc("What did the perceptive agent retort to a dismissive colleague?", ["That the novel needed rewriting.", "That the inconsistencies were the entire narrative point, showing authorial control.", "That the novel should be rejected.", "That the narrator needed to be changed."], 1, "'retorted directly to a colleague… that the supposed 'inconsistencies' were… the entire narrative point'."),
          mc("How did critics respond to the published novel?", ["With harsh criticism.", "They widely praised the unreliable narration technique.", "With complete indifference.", "By ignoring the novel entirely."], 1, "'critics widely praised precisely the unreliable narration technique'."),
          mc("What did the novelist concede about early readers?", ["They loved the narrator immediately.", "Some protested feeling genuinely misled, which was the intended effect.", "They found the novel boring.", "They didn't understand the plot."], 1, "'Some early readers protested that they felt genuinely… misled… and that's honestly, precisely the intended… effect'."),
          mc("What has the novelist mused about the initial rejection?", ["It was entirely unfair.", "It taught her about the risks and rewards of trusting her artistic instincts.", "It proved she should have given up.", "It was meaningless."], 1, "'the manuscript's initial… rejection taught her something genuinely valuable about the real… risks… and… rewards… of trusting one's own distinctive artistic instincts'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Genre fiction has historically occupied an uneasy, somewhat uncomfortable position within literary criticism, frequently dismissed by more traditionally minded critics as inherently less serious or artistically ambitious than so-called literary fiction proper. (1)___\n\nThis hierarchical distinction, though still genuinely influential in certain critical and academic circles, has faced increasingly sustained challenge over recent decades from critics who contend that it rests on considerably shakier foundations than its confident proponents typically, casually acknowledge. (2)___ Genre conventions, properly understood, constrain a writer's choices no more inherently than any other set of formal literary conventions genuinely does.\n\nWhat distinguishes genuinely accomplished genre fiction from its weaker, more formulaic counterparts, these critics increasingly maintain, is not the mere presence of genre conventions themselves, which after all appear extensively throughout acknowledged literary classics too. (3)___ It is, rather, whether a given writer uses those specific conventions skilfully, in service of genuine psychological insight, or merely mechanically, as an entirely undemanding, comfortable formula requiring minimal authorial genuine effort or ambition.\n\nSeveral prominent contemporary novelists have deliberately, self-consciously blurred this once-confident boundary, producing genuinely ambitious literary work that simultaneously, unapologetically embraces recognisable genre elements. (4)___ Their considerable critical and commercial success has done much to gradually erode the old, once rigid literary hierarchy separating supposedly serious fiction from mere genre entertainment.\n\nThis gradual shift reflects a broader, welcome critical recognition that artistic ambition and genre convention are not remotely mutually exclusive categories, however persistently older critical frameworks may have implicitly, unreflectively assumed otherwise. (5)___ A novel can be simultaneously, genuinely a gripping detective story and a serious, sophisticated meditation on genuine moral complexity.\n\nWhat ultimately matters, most contemporary critics increasingly agree, is not which particular genre labels a given work happens to carry, but rather the genuine skill, ambition and psychological depth with which any writer, working within whatever genre they happen to choose, actually executes their own chosen material. (6)___ The old hierarchy, on this more considered view, was measuring the wrong thing entirely all along.",
        options: [
          "That old hierarchy is worth examining rather than simply assuming.", // A -> gap1
          "The supposed distinction turns out to be less solid than claimed.", // B -> gap2
          "Mere presence was never really the meaningful, discriminating criterion.", // C -> gap3
          "Their work has not gone unnoticed by serious critics either.", // D -> gap4
          "The two categories were never actually as separate as assumed.", // E -> gap5
          "Execution, in other words, matters more than the label itself.", // F -> gap6
          "No genre novel has ever received serious critical attention.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa jerarquía merece examinarse, no asumirse."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la supuesta distinción es menos sólida de lo que se afirma."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la mera presencia nunca fue el criterio decisivo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: su trabajo no ha pasado desapercibido para la crítica seria."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: las dos categorías nunca estuvieron tan separadas."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la ejecución importa más que la etiqueta."),
        ],
      },
      p7: {
        title: "Four readers discuss a book with a narrator or structure that surprised them",
        text: "Read what four readers say about a book whose narrator or structure genuinely surprised them.\n\nA) NADIA: The narrator conceded, quite late in the novel, that she'd been withholding a crucial detail from the reader the whole time. I retorted, mentally, that I felt genuinely tricked, though I ultimately respected the technique.\n\nB) TOM: The book's structure kept circling back to the same pivotal event from different characters' perspectives. Each character maintained their own version was accurate, which forced me to actively piece together what had probably really happened.\n\nC) PRIYA: I initially protested, internally, that the unreliable narrator felt like a cheap, gimmicky trick. By the final chapter, though, I'd completely changed my mind about that particular judgement.\n\nD) SAM: The author posited, through the narrative structure itself, that memory is fundamentally unreliable and reconstructive. That idea genuinely changed how I now read every first-person narrator I encounter.\n",
        q: [
          mc("Whose narrator conceded withholding a crucial detail?", ["A", "B", "C", "D"], 0, "Nadia: 'The narrator conceded, quite late in the novel, that she'd been withholding a crucial detail'."),
          mc("Who read a book structured around multiple characters' perspectives on one event?", ["A", "B", "C", "D"], 1, "Tom: 'The book's structure kept circling back to the same pivotal event from different characters' perspectives'."),
          mc("Who initially protested that an unreliable narrator felt gimmicky, then changed their mind?", ["A", "B", "C", "D"], 2, "Priya: 'I initially protested, internally, that the unreliable narrator felt like a cheap, gimmicky trick. By the final chapter… I'd completely changed my mind'."),
          mc("Who read a book positing that memory is fundamentally unreliable?", ["A", "B", "C", "D"], 3, "Sam: 'The author posited, through the narrative structure itself, that memory is fundamentally unreliable'."),
          mc("Who felt genuinely tricked but ultimately respected the technique?", ["A", "B", "C", "D"], 0, "Nadia: 'I retorted, mentally, that I felt genuinely tricked, though I ultimately respected the technique'."),
          mc("Who had to actively piece together what had probably really happened?", ["A", "B", "C", "D"], 1, "Tom: 'which forced me to actively piece together what had probably really happened'."),
          mc("Who says the idea changed how they now read every first-person narrator?", ["A", "B", "C", "D"], 3, "Sam: 'That idea genuinely changed how I now read every first-person narrator I encounter'."),
          mc("Who mentions each character maintaining their own version was accurate?", ["A", "B", "C", "D"], 1, "Tom: 'Each character maintained their own version was accurate'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la literatura y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Genre fiction deserves exactly the same critical seriousness as literary fiction. The old hierarchy separating the two reflects snobbery rather than any genuine, defensible aesthetic distinction between the two categories.'\n\nTEXTO 2: 'Some meaningful distinction between genre and literary fiction remains genuinely useful, even if the boundary is fuzzier than traditional criticism once assumed. Not every genre novel achieves the same psychological depth as the best literary fiction consistently does.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS verbos de reporte de matiz fino (concede, contend, maintain…). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista literaria: 'The narrator I'll never forget' — describe un narrador poco fiable o memorable de un libro que conozcas.\n· CARTA/EMAIL formal a un club de lectura recomendando un libro con una técnica narrativa poco convencional.\n· REVIEW de una novela que emplee un narrador poco fiable o una estructura narrativa poco convencional.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two readers discussing a novel. Woman: The narrator conceded, quite late on, that she'd been withholding a crucial detail the whole time. Man: I retorted that I felt genuinely tricked, though I respected the technique eventually. Extract Two. You hear two literary agents discussing a manuscript. Man: Several agents contended the inconsistencies were simple authorial error. Woman: One agent maintained firmly that they were actually the entire narrative point. Extract Three. You hear two critics discussing genre fiction. Woman: Some critics still maintain that genre fiction is inherently less serious than literary fiction. Man: I'd contend that distinction rests on considerably shakier ground than its proponents usually acknowledge.", [
      mc("1. What did the narrator concede?", ["Nothing at all.", "That she'd been withholding a crucial detail.", "That the story was fictional.", "That she disliked the reader."], 1, "'The narrator conceded… that she'd been withholding a crucial detail the whole time'."),
      mc("2. How did the woman feel about this?", ["Delighted immediately.", "Genuinely tricked, though she respected the technique eventually.", "Completely indifferent.", "Angry and unforgiving."], 1, "'I retorted that I felt genuinely tricked, though I respected the technique eventually'."),
      mc("3. What did several agents contend about the manuscript?", ["It was brilliant.", "The inconsistencies were simple authorial error.", "It needed no changes.", "It should be published immediately."], 1, "'Several agents contended the inconsistencies were simple authorial error'."),
      mc("4. What did one agent maintain instead?", ["Agreement with the others.", "That the inconsistencies were the entire narrative point.", "That the manuscript should be rejected.", "That the author should be replaced."], 1, "'One agent maintained firmly that they were actually the entire narrative point'."),
      mc("5. What do some critics still maintain about genre fiction?", ["It's equally serious as literary fiction.", "It's inherently less serious than literary fiction.", "It's more popular currently.", "It's disappearing."], 1, "'Some critics still maintain that genre fiction is inherently less serious'."),
      mc("6. What does the man contend about that distinction?", ["It's entirely correct.", "It rests on shakier ground than usually acknowledged.", "It's irrelevant to readers.", "It should be strengthened further."], 1, "'I'd contend that distinction rests on considerably shakier ground'."),
    ]),

    ...speakingParts({ p1: "qué género literario prefieres y por qué", p2: "dos imágenes de la literatura (alguien leyendo absorto en una biblioteca y un grupo de lectura debatiendo un libro juntos): comentadlas y decidid cuál representa mejor la experiencia de leer literatura", p3: "qué es más importante en una buena novela (una trama sorprendente, personajes complejos, un estilo narrativo original, temas universales, un final satisfactorio): comentadlo y decidid lo más importante", p4: "la literatura y la narrativa: si la ficción de género merece la misma seriedad crítica que la ficción literaria, qué papel tiene el narrador poco fiable en la literatura contemporánea, y si la lectura sigue siendo tan relevante culturalmente como antes" }),

    SUMMARY("Resumen del Día 16", [
      "Verbos de reporte de matiz fino: concede (ceder), contend/maintain (sostener), retort (replicar con viveza), posit (postular), speculate (especular), protest (objetar), muse (reflexionar en voz alta).",
      "Vocabulario de los géneros literarios y la técnica narrativa. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 17", "Escribe 4 frases con verbos de reporte de matiz fino. Repasa el vocabulario literario. Mañana: el discurso indirecto libre (free indirect speech)."),
  ],
};

// ───────────────────────── DÍA 17 ─────────────────────────
const DAY17 = {
  title: "Día 17 — El discurso indirecto libre (free indirect speech) · La caracterización literaria",
  description: "El discurso indirecto libre: la técnica narrativa que funde la voz del narrador y la del personaje sin marcadores explícitos de cita, manteniendo el tiempo/pronombre del estilo indirecto pero el tono/vocabulario del personaje. Vocabulario de la caracterización literaria. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Reconocer y comprender el discurso indirecto libre, técnica narrativa fundamental en la ficción literaria en inglés.",
    summary: "Discurso indirecto libre; caracterización literaria; Use of English P1–P7, Writing, Listening P2, Speaking P1–P3.",
    commonMistakes: ["confundir el discurso indirecto libre con el estilo indirecto normal (el libre NO usa 'that' ni un verbo de reporte explícito).", "no reconocer las marcas de subjetividad del personaje (exclamaciones, preguntas retóricas, vocabulario coloquial) dentro de una narración en 3ª persona.", "en producción, mezclar incorrectamente tiempos verbales (el free indirect speech mantiene el tiempo pasado/los pronombres del narrador, pero el LÉXICO y el TONO del personaje)."],
    reviewPrompts: ["¿Cómo distingues el discurso indirecto libre de una simple descripción narrativa neutra?", "Convierte 'She thought, \"I can't believe he said that\"' a discurso indirecto libre."],
  },
  items: [
    TEXT("🔁 Ayer, los verbos de reporte de matiz fino. Hoy: el DISCURSO INDIRECTO LIBRE (free indirect speech) — la técnica narrativa más característica de la ficción literaria en inglés, que funde la voz del narrador con la del personaje. Vocabulario: la CARACTERIZACIÓN LITERARIA."),
    GRAMMAR("El discurso indirecto libre (free indirect speech)", `El DISCURSO INDIRECTO LIBRE (free indirect speech / free indirect discourse) es una técnica narrativa que presenta los pensamientos o palabras de un personaje SIN comillas, SIN "that", y SIN verbo de reporte explícito ("she thought that…"), pero manteniendo el TIEMPO VERBAL y los PRONOMBRES del estilo indirecto (pasado, 3ª persona).
Comparación de los tres estilos:
1) ESTILO DIRECTO: She thought, "I can't believe he said that. What does he take me for?"
2) ESTILO INDIRECTO NORMAL: She thought that she couldn't believe he had said that, and wondered what he took her for.
3) DISCURSO INDIRECTO LIBRE: She couldn't believe he'd said that. What did he take her for?
Observa: el discurso indirecto libre (3) mantiene el pasado y la 3ª persona (como el indirecto normal), pero ELIMINA "she thought that" y CONSERVA las marcas de subjetividad del personaje — la pregunta retórica, el tono exclamativo, el vocabulario coloquial ("what did he take her for?").
Este recurso permite al narrador entrar y salir de la mente de un personaje con fluidez, sin interrumpir constantemente con "she thought" o "he wondered" — es la técnica narrativa dominante en gran parte de la ficción literaria inglesa desde el siglo XIX (Austen, Woolf, Joyce) hasta hoy.
⚠️ En el Reading P5-P7 de C2, reconocer el discurso indirecto libre es clave para identificar CUÁNDO el narrador presenta la perspectiva SUBJETIVA de un personaje en vez de una descripción objetiva.`),
    WARN("Errores típicos en C2", "· El discurso indirecto libre NO lleva 'that' ni comillas — si ves 'she thought that', es estilo indirecto normal, no libre.\n· Busca marcas de subjetividad (preguntas retóricas, exclamaciones, vocabulario emocional/coloquial) DENTRO de una narración en pasado/3ª persona — esa combinación señala discurso indirecto libre.\n· No confundas con la simple descripción narrativa objetiva: el discurso indirecto libre expresa una OPINIÓN o PERCEPCIÓN subjetiva del personaje, no un hecho neutro.\n· Al identificarlo en el Reading, pregúntate: '¿esto es lo que el NARRADOR objetivamente describe, o lo que el PERSONAJE subjetivamente piensa/siente?'"),
    grammarEx("Use of English — Reconocer el discurso indirecto libre", "Identifica el estilo usado en cada frase.", [
      mc("\"She thought that she couldn't believe he had said that.\" — ¿qué estilo es este?", ["Estilo indirecto normal", "Discurso indirecto libre", "Estilo directo"], 0, "lleva 'that' y verbo de reporte: estilo indirecto normal."),
      mc("\"She couldn't believe he'd said that. What did he take her for?\" — ¿qué estilo es este?", ["Discurso indirecto libre", "Estilo indirecto normal", "Estilo directo"], 0, "sin 'that', con pregunta retórica del personaje: discurso indirecto libre."),
      mc("Convierte a discurso indirecto libre: She thought, \"I will never forgive him.\"", ["She would never forgive him.", "She thought that she would never forgive him.", "\"I will never forgive him,\" she thought."], 0, "sin 'that', pasado/3ª persona, tono del personaje conservado."),
      mc("¿Qué marca típica señala discurso indirecto libre dentro de una narración en pasado?", ["Preguntas retóricas o exclamaciones del personaje", "Verbos de reporte explícitos", "Comillas"], 0, "las marcas de subjetividad (preguntas/exclamaciones) sin comillas ni 'that'."),
      mc("Convierte a discurso indirecto libre: He wondered, \"Why does nobody understand me?\"", ["Why did nobody understand him?", "He wondered why nobody understood him.", "\"Why does nobody understand me?\" he wondered."], 0, "pregunta retórica conservada, pasado/3ª persona, sin 'wondered that'."),
      mc("El discurso indirecto libre es especialmente característico de:", ["La ficción literaria narrativa", "Los informes técnicos", "El lenguaje jurídico"], 0, "técnica narrativa de ficción literaria."),
    ]),
    GRAMMAR("Vocabulario del día — La caracterización literaria (C2)", "Léxico de maestría sobre caracterización."),
    deck("C2 S4D17 — Caracterización literaria", [
      ["characterisation", "caracterización", "Subtle characterisation reveals personality through action, not exposition.", "sustantivo", "ˌkærɪktəraɪˈzeɪʃn"],
      ["interiority", "interioridad (psicológica de un personaje)", "The novel's deep interiority immerses readers in the protagonist's mind.", "sustantivo", "ɪnˌtɪəriˈɒrəti"],
      ["foil", "personaje contraste", "The impulsive friend serves as a foil to the cautious protagonist.", "sustantivo", "fɔɪl"],
      ["archetype", "arquetipo", "The reluctant hero remains a recognisable literary archetype.", "sustantivo", "ˈɑːkitaɪp"],
      ["nuanced", "matizado/a", "The author offers a nuanced portrayal of moral ambiguity.", "adjetivo", "ˈnjuːɑːnst"],
      ["subtext", "subtexto", "Much of the dialogue's real meaning lies in its subtext.", "sustantivo", "ˈsʌbtekst"],
      ["epiphany", "epifanía (momento de revelación)", "The protagonist experiences a quiet epiphany near the novel's end.", "sustantivo", "ɪˈpɪfəni"],
      ["complicit", "cómplice (personaje)", "The narrator becomes complicit in the very deception she describes.", "adjetivo", "kəmˈplɪsɪt"],
      ["voice", "voz (narrativa, estilo distintivo)", "The novel's distinctive voice sets it apart from its contemporaries.", "sustantivo", "vɔɪs"],
      ["introspective", "introspectivo/a", "The introspective narration lingers on the character's inner conflict.", "adjetivo", "ˌɪntrəˈspektɪv"],
    ]),
    vocabEx("Vocabulario — La caracterización literaria", "Elige la opción correcta.", [
      mc("The process of developing and revealing a character's personality:", ["characterisation", "archetype", "subtext"], 0, "characterisation."),
      mc("A character who contrasts with another to highlight their traits:", ["foil", "archetype", "voice"], 0, "foil."),
      mc("A recurring, recognisable character type across literature:", ["archetype", "foil", "epiphany"], 0, "archetype."),
      mc("A sudden moment of profound realisation for a character:", ["epiphany", "subtext", "interiority"], 0, "epiphany."),
      mc("The underlying, unspoken meaning beneath dialogue:", ["subtext", "voice", "archetype"], 0, "subtext."),
      mc("A character's inner psychological life and depth:", ["interiority", "foil", "epiphany"], 0, "interiority."),
    ]),

    ...uoe({
      p1: {
        title: "The technique that lets us inhabit a stranger's mind",
        text: "Free indirect speech, as a narrative technique, allows readers unusually intimate (1)___ to a character's private thoughts without the narrative constantly (2)___ to explicit markers like \"she thought\" or \"he wondered,\" markers that, used too frequently, can grow genuinely tiresome and mechanically repetitive across an extended narrative. The technique's particular genius lies in how seamlessly it blends objective narration with subjective character perspective, allowing skilled novelists to shift (3)___ these two registers within a single sentence, sometimes even within a single clause, without ever jarring the attentive reader. This narrative fluidity explains why the technique proved (4)___ influential across the development of the modern psychological novel specifically, enabling a genuinely deep interiority that more rigidly marked reported speech alone could never quite achieve on its own. It has long been (5)___ that mastering this particular technique separates genuinely accomplished literary prose stylists from merely competent, technically correct ones. Nowhere is this distinction more (6)___ evident than in comparing a skilled novelist's fluid handling of perspective shift with a less experienced writer's more mechanical, clunky alternation between narration and clearly marked reported thought.",
        q: [
          mc("(1)", ["access", "entry", "admission", "approach"], 0, "'unusually intimate access to a character's private thoughts'."),
          mc("(2)", ["resorting", "turning", "reverting", "returning"], 0, "'without the narrative constantly resorting to'."),
          mc("(3)", ["between", "among", "across", "within"], 0, "'shift between these two registers'."),
          mc("(4)", ["so", "such", "very", "quite"], 0, "'proved so influential'."),
          mc("(5)", ["argued", "held", "maintained", "contended"], 0, "'It has long been argued that'."),
          mc("(6)", ["clearly", "obviously", "plainly", "starkly"], 3, "'more starkly evident'."),
        ],
      },
      p2: {
        title: "Austen's quiet innovation",
        text: "Literary historians frequently credit Jane Austen (1)___ pioneering, or at very least significantly popularising, the sophisticated use of free indirect speech within the developing English novel, deploying the technique with a subtlety her contemporaries rarely, if ever, quite managed (2)___ match. Her narrators frequently slip, almost imperceptibly, into a given character's own limited, sometimes genuinely mistaken perspective, allowing readers to recognise a character's own errors of judgement (3)___ the narrator ever needing to state this explicitly or didactically. This technique proves particularly effective (4)___ ironic characterisation specifically, since the gap between a character's own confident, subjective self-perception and the reader's growing, more objective understanding generates precisely the gentle irony (5)___ Austen's fiction remains so widely celebrated even today. It remains genuinely debatable (6)___ later novelists ever fully matched Austen's own particular, distinctive mastery of this specific narrative technique, however much they subsequently, undeniably built upon her considerable innovation.",
        q: [
          fb("(1)", ["with"], "'credit Jane Austen with pioneering'."),
          fb("(2)", ["to"], "'rarely… quite managed to match'."),
          fb("(3)", ["without"], "'to recognise… errors of judgement without the narrator… stating'."),
          fb("(4)", ["for", "with"], "'particularly effective for/with ironic characterisation'."),
          fb("(5)", ["for", "which"], "'the gentle irony for which Austen's fiction remains… celebrated'."),
          fb("(6)", ["whether"], "'It remains genuinely debatable whether'."),
        ],
      },
      p3: {
        title: "When narrator and character blur",
        text: "The considerable interpretive (1)___ posed by free indirect speech lies precisely in its productive ambiguity: readers cannot always determine with complete (2)___ whether a given passage reflects the narrator's own objective judgement or merely a particular character's subjective, potentially quite unreliable, perspective. This inherent (3)___ has prompted considerable critical debate regarding specific passages in canonical novels, with different critics offering genuinely (4)___ interpretations of identical textual passages depending on how they ultimately read this crucial, often quite subtle distinction. Some critics view this ambiguity as a genuine technical limitation; others regard it instead as the technique's single greatest (5)___, precisely because it mirrors how human understanding of other people's genuine motivations actually, realistically works in real everyday life — always somewhat uncertain, always filtered through limited, necessarily incomplete perspective. This ongoing critical (6)___ shows little sign of definitively resolving itself anytime soon, which perhaps, fittingly, only further confirms the technique's own deep, characteristic productive ambiguity.",
        items: [
          { root: "challenge", accepted: ["challenge"], hint: "'The considerable interpretive challenge' (sustantivo)." },
          { root: "certain", accepted: ["certainty"], hint: "'with complete certainty' → certainty." },
          { root: "ambiguous", accepted: ["ambiguity"], hint: "'This inherent ambiguity' → ambiguity." },
          { root: "differ", accepted: ["differing", "different"], hint: "'genuinely differing interpretations' → differing." },
          { root: "strong", accepted: ["strength"], hint: "'the technique's single greatest strength' → strength." },
          { root: "debate", accepted: ["debate"], hint: "'This ongoing critical debate' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — discurso indirecto libre",
        items: [
          { s1: "She thought, \"I will never forgive him for this.\"", key: "NEVER", s2: "She would ___ forgive him for this. (discurso indirecto libre)", accepted: ["never"], explanation: "sin 'that', pasado/3ª persona, tono conservado." },
          { s1: "He wondered, \"Why does nobody understand me?\"", key: "DID", s2: "Why ___ nobody understand him? (discurso indirecto libre)", accepted: ["did"], explanation: "pregunta retórica conservada, sin 'wondered that'." },
          { s1: "She thought that she couldn't believe he had said that.", key: "COULDN'T", s2: "She ___ believe he'd said that. What did he take her for? (discurso indirecto libre)", accepted: ["couldn't"], explanation: "eliminar 'thought that', conservar tono." },
          { s1: "He thought, \"This is absolutely ridiculous.\"", key: "WAS", s2: "This ___ absolutely ridiculous. (discurso indirecto libre)", accepted: ["was"], explanation: "pasado, sin 'he thought that', tono exclamativo conservado." },
          { s1: "She wondered, \"What on earth am I doing here?\"", key: "WAS", s2: "What on earth ___ she doing here? (discurso indirecto libre)", accepted: ["was"], explanation: "pregunta retórica conservada, pasado/3ª persona." },
        ],
      },
      p5: {
        title: "The translator who had to choose a voice",
        text: "When a literary translator undertook a new English translation of a canonical foreign-language novel renowned specifically for its masterful, extensive use of free indirect speech, she confronted a genuinely difficult technical challenge that readers of the original language rarely, if ever, needed to consciously think about at all: English and the original source language, it turned out, mark free indirect speech through subtly, meaningfully different grammatical means entirely.\n\nThe original language relied heavily on specific verb conjugations and register shifts that signalled free indirect speech relatively unambiguously to native readers, cues that had no straightforward, one-to-one equivalent whatsoever in English's own considerably more understated, grammatically ambiguous system for marking this particular technique.\n\n\"I had to make hundreds of genuinely difficult individual judgement calls,\" she later explained candidly in an illuminating interview about her painstaking translation process, \"about precisely when a given passage represented the narrator's own objective voice, and when it instead represented the protagonist's own subjective, sometimes genuinely unreliable perspective bleeding directly into the ostensibly neutral narration.\"\n\nSome passages, she readily conceded, remained genuinely ambiguous even after her own extensive, careful analysis, forcing her to ultimately make an interpretive choice that inevitably, unavoidably shaped how English-language readers would subsequently experience and understand that particular passage, in ways the original text's own inherent, productive ambiguity had deliberately, artfully left considerably more genuinely open.\n\n\"It remains debatable,\" she noted in her translator's preface to the finished work, \"whether any translation can ever fully, completely preserve this specific kind of productive grammatical ambiguity, given how differently individual languages actually mark, or conspicuously fail to mark, the subtle boundary between narrator and character voice.\"\n\nHer own eventual translation, once finally published, received widespread critical praise specifically for its careful, evident attentiveness to precisely this particular technical challenge, with several prominent literary critics specifically noting passages where she had found genuinely ingenious, creative English equivalents for effects the original language had achieved through means simply unavailable, structurally speaking, in English.\n\n\"What I ultimately learned,\" she reflected afterward in a subsequent retrospective essay, \"was that translating free indirect speech well requires becoming something considerably more than a mere skilled linguist. You have to develop genuine, deep interpretive sensitivity to exactly where a narrator's own voice quietly, almost imperceptibly ends and a character's distinctly different voice imperceptibly, seamlessly begins.\"",
        q: [
          mc("What challenge did the translator face?", ["No particular challenge.", "English and the source language mark free indirect speech differently.", "The novel had no free indirect speech.", "The novel was too short to translate."], 1, "'English and the original source language… mark free indirect speech through subtly… different grammatical means entirely'."),
          mc("What did she have to do for hundreds of passages?", ["Ignore the ambiguity.", "Make individual judgement calls about narrator versus character voice.", "Remove all ambiguous passages.", "Consult only dictionaries."], 1, "'I had to make hundreds of genuinely difficult individual judgement calls… about precisely when a given passage represented the narrator's own… voice'."),
          mc("What did she concede about some passages?", ["They were perfectly clear.", "They remained genuinely ambiguous even after extensive analysis.", "They should be deleted.", "They needed no translation."], 1, "'Some passages, she readily conceded, remained genuinely ambiguous even after her own extensive… analysis'."),
          mc("What does she say about preserving this ambiguity in translation?", ["It's always fully preserved.", "It remains debatable whether any translation can fully preserve it.", "It's impossible to attempt.", "It doesn't matter for translation."], 1, "'It remains debatable… whether any translation can ever fully… preserve this specific kind of… ambiguity'."),
          mc("How was her eventual translation received?", ["With harsh criticism.", "With widespread praise for its attentiveness to this challenge.", "With complete indifference.", "It was never published."], 1, "'received widespread critical praise specifically for its careful, evident attentiveness to precisely this particular technical challenge'."),
          mc("What did she ultimately learn about translating free indirect speech?", ["It requires only linguistic skill.", "It requires deep interpretive sensitivity to where narrator and character voice diverge.", "It's impossible to do well.", "It requires no special skill."], 1, "'translating free indirect speech well requires… genuine, deep interpretive sensitivity to exactly where a narrator's own voice… ends and a character's… voice… begins'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Free indirect speech occupies a genuinely distinctive position among narrative techniques, doing something that neither pure objective narration nor direct quoted speech can quite manage to achieve on its own. (1)___\n\nDirect quotation offers readers unmediated access to a character's exact words, but at the cost of constantly, visibly interrupting narrative flow with explicit markers — quotation marks, attribution tags — that remind readers, again and again, that they are reading reported speech rather than experiencing events directly. (2)___ Free indirect speech dissolves those visible interruptions almost entirely.\n\nPure objective narration, meanwhile, maintains a consistent, stable narrative distance from any single character's own subjective perspective, offering readers a comfortably neutral vantage point but at the cost of that same valuable psychological intimacy. (3)___ Neither technique alone, used in complete isolation, achieves quite what free indirect speech manages.\n\nWhat free indirect speech ultimately offers, combining elements of both preceding techniques, is something like psychological immersion without any interrupting narrative friction whatsoever. (4)___ Readers inhabit a character's perspective directly, fluidly, without the narrative constantly, visibly announcing that inhabitation as it happens.\n\nThis particular fluidity carries real interpretive cost, however, as translators and careful critics alike have long, repeatedly noted. (5)___ Ambiguity about whose voice, precisely, the reader is actually encountering at any given moment is not a mere technical flaw; it is, in an important sense, the entire technique's productive, defining point.\n\nUnderstanding free indirect speech, then, means learning to comfortably tolerate this productive ambiguity rather than anxiously seeking to fully resolve it in every single instance. (6)___ The technique rewards readers precisely for staying alert to precisely this kind of subtle, shifting perspectival boundary throughout an entire narrative.",
        options: [
          "It occupies a genuine middle ground between the two.", // A -> gap1
          "That reminder, however subtle, keeps a certain distance intact.", // B -> gap2
          "That distance is not free; it costs something real too.", // C -> gap3
          "The seam between narrator and character simply disappears.", // D -> gap4
          "That cost is not incidental; it is, in fact, the whole point.", // E -> gap5
          "Alertness, not resolution, is really what the technique asks for.", // F -> gap6
          "No narrator has ever used free indirect speech successfully.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ocupa un genuino punto medio entre ambas."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ese recordatorio mantiene cierta distancia intacta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa distancia también tiene un coste real."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la costura entre narrador y personaje desaparece."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ese coste no es incidental; es el punto central."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la técnica pide alerta, no resolución."),
        ],
      },
      p7: {
        title: "Four readers discuss a passage of free indirect speech that struck them",
        text: "Read what four readers say about a passage of free indirect speech that particularly struck them in something they've read.\n\nA) NADIA: There was a passage where the narration slipped, almost without warning, into the protagonist's own bitter, resentful thoughts about her sister. I only realised afterward how skilfully the author had blurred that particular boundary.\n\nB) TOM: What struck me was a passage clearly reflecting the character's own naive, mistaken judgement, presented with no narrative comment or correction whatsoever. The gap between what he believed and what I, as reader, could clearly see created real dramatic irony.\n\nC) PRIYA: I found myself genuinely unsure, in one particular passage, whether I was reading the narrator's own objective assessment or the character's distinctly biased perspective. That productive ambiguity was honestly the whole point, I eventually realised.\n\nD) SAM: There's a passage where the character's private panic bleeds directly into the narration itself, with short, fragmented sentences mirroring her actual racing thoughts in real time. It felt remarkably, genuinely immersive to read.\n",
        q: [
          mc("Who noticed narration slipping into a protagonist's bitter thoughts about her sister?", ["A", "B", "C", "D"], 0, "Nadia: 'the narration slipped, almost without warning, into the protagonist's own bitter, resentful thoughts about her sister'."),
          mc("Who noticed a passage reflecting naive judgement, creating dramatic irony?", ["A", "B", "C", "D"], 1, "Tom: 'a passage clearly reflecting the character's own naive, mistaken judgement… created real dramatic irony'."),
          mc("Who found themselves unsure whether they were reading narrator or character perspective?", ["A", "B", "C", "D"], 2, "Priya: 'I found myself genuinely unsure… whether I was reading the narrator's own objective assessment or the character's… perspective'."),
          mc("Who noticed fragmented sentences mirroring a character's racing thoughts?", ["A", "B", "C", "D"], 3, "Sam: 'short, fragmented sentences mirroring her actual racing thoughts in real time'."),
          mc("Who only realised afterward how skilfully a boundary had been blurred?", ["A", "B", "C", "D"], 0, "Nadia: 'I only realised afterward how skilfully the author had blurred that particular boundary'."),
          mc("Who says the gap between belief and reality created dramatic irony?", ["A", "B", "C", "D"], 1, "Tom: 'The gap between what he believed and what I, as reader, could clearly see created real dramatic irony'."),
          mc("Who realised the productive ambiguity was the whole point?", ["A", "B", "C", "D"], 2, "Priya: 'That productive ambiguity was honestly the whole point, I eventually realised'."),
          mc("Who found the passage remarkably immersive to read?", ["A", "B", "C", "D"], 3, "Sam: 'It felt remarkably, genuinely immersive to read'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la técnica narrativa y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Free indirect speech represents one of fiction's most powerful technical achievements, allowing readers genuine psychological intimacy with characters that neither pure narration nor direct quotation can achieve on its own.'\n\nTEXTO 2: 'The technique's celebrated ambiguity is sometimes overstated as a virtue. In less skilled hands, free indirect speech simply creates genuine confusion about whose perspective the reader is actually encountering, undermining rather than enriching the reading experience.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN verbo de reporte de matiz fino y UNA referencia al discurso indirecto libre. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista literaria sobre el uso del discurso indirecto libre en un autor o autora que conozcas.\n· CARTA/EMAIL formal a un club de lectura recomendando una novela por su técnica narrativa distintiva.\n· REVIEW de una novela que emplee de forma notable el discurso indirecto libre o una voz narrativa particular.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha a una traductora literaria hablando sobre el discurso indirecto libre (se oye dos veces). Completa las frases con la información que oigas (1-3 palabras).", "This is Part Two. You will hear a literary translator talking about free indirect speech. When I undertook translating a novel renowned for its masterful use of free indirect speech, I faced a challenge readers of the original rarely think about consciously. English and the source language mark this technique through quite different grammatical means. I had to make hundreds of difficult individual judgement calls about when a passage represented the narrator's voice versus the character's own perspective. Some passages remained genuinely ambiguous even after extensive careful analysis on my part. I ultimately had to make an interpretive choice that shaped how readers would experience that particular passage. It remains debatable whether any translation can fully preserve this kind of productive grammatical ambiguity. My eventual translation received widespread praise for its attentiveness to precisely this challenge. Several critics specifically noted passages where I'd found creative English equivalents for effects achieved differently in the original. What I ultimately learned is that translating free indirect speech requires genuine interpretive sensitivity to where narrator voice ends and character voice begins.", [
      fb("1. English and the source language mark the technique through different ___ means.", ["grammatical"], "'quite different grammatical means'."),
      fb("2. She had to make hundreds of difficult individual ___ calls.", ["judgement", "judgment"], "'hundreds of difficult individual judgement calls'."),
      fb("3. Some passages remained genuinely ___ even after analysis.", ["ambiguous"], "'remained genuinely ambiguous even after extensive… analysis'."),
      fb("4. She had to make an ___ choice that shaped the reader's experience.", ["interpretive"], "'an interpretive choice that shaped how readers would experience'."),
      fb("5. It remains ___ whether translation can fully preserve this ambiguity.", ["debatable"], "'It remains debatable whether any translation can fully preserve'."),
      fb("6. Her translation received widespread ___ for its attentiveness.", ["praise"], "'received widespread praise for its attentiveness'."),
      fb("7. Critics noted passages with creative English ___.", ["equivalents"], "'creative English equivalents for effects achieved differently'."),
      fb("8. Translating this technique requires genuine interpretive ___.", ["sensitivity"], "'requires genuine interpretive sensitivity'."),
      fb("9. This sensitivity concerns where narrator voice ___ and character voice begins.", ["ends"], "'where narrator voice ends and character voice begins'."),
    ]),

    ...speakingParts({ p1: "si te gusta leer ficción y qué tipo de narrador o estilo narrativo prefieres", p2: "dos imágenes de la narrativa literaria (alguien absorto leyendo un libro con expresión emocionada y un escritor trabajando en su manuscrito): comentadlas y decidid cuál representa mejor la conexión entre lector y personaje", p3: "qué técnica narrativa es más eficaz para conectar con un personaje (el discurso indirecto libre, el monólogo interior, el diálogo directo, la narración en primera persona, las acotaciones del narrador): comentadlo y decidid la más eficaz", p4: "la técnica narrativa y la caracterización: si el discurso indirecto libre sigue siendo relevante en la narrativa contemporánea, qué papel tiene la ambigüedad en la buena literatura, y si un narrador poco fiable enriquece o dificulta la experiencia de lectura" }),

    SUMMARY("Resumen del Día 17", [
      "Discurso indirecto libre: mantiene el pasado/3ª persona del estilo indirecto, pero elimina 'that'/verbo de reporte y conserva el tono/vocabulario subjetivo del personaje (preguntas retóricas, exclamaciones).",
      "Vocabulario de la caracterización literaria. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 18", "Convierte 3 frases de estilo directo a discurso indirecto libre. Repasa el vocabulario de caracterización. Mañana: más matices del estilo indirecto (modalidad reportada, preguntas indirectas precisas)."),
  ],
};

// ───────────────────────── DÍA 18 ─────────────────────────
const DAY18 = {
  title: "Día 18 — La modalidad reportada y 'as though/as if' en contexto indirecto · La crítica literaria",
  description: "Cambios de modalidad al reportar (must→had to, can→could/be able to con matiz), y 'as though/as if' dentro del estilo indirecto para reportar impresiones/apariencias. Vocabulario de la crítica literaria. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Dominar los cambios de modalidad al reportar y el uso de 'as though/as if' para reportar impresiones y apariencias con precisión.",
    summary: "Modalidad reportada + as though/as if reportado; crítica literaria; Use of English P1–P7, Writing, Listening P3, Speaking P1–P3.",
    commonMistakes: ["cambiar modales que NO cambian en estilo indirecto (should, would, might, could ya son formas 'pasadas' y se mantienen igual).", "olvidar que 'must' (obligación) cambia a 'had to' en estilo indirecto, pero 'must' (deducción) se mantiene igual.", "usar 'as though/as if' + presente en vez de pasado/subjuntivo tras un verbo de reporte en pasado."],
    reviewPrompts: ["¿Cómo reportarías 'You must finish this by Friday' (obligación) vs. 'He must be exhausted' (deducción)?", "¿Cómo reportarías 'She looked as if she hadn't slept'?"],
  },
  items: [
    TEXT("🔁 Ayer, el discurso indirecto libre. Hoy: la MODALIDAD REPORTADA (qué modales cambian y cuáles no) y 'AS THOUGH/AS IF' EN CONTEXTO INDIRECTO — el recurso para reportar impresiones y apariencias con precisión. Vocabulario: la CRÍTICA LITERARIA."),
    GRAMMAR("La modalidad reportada y 'as though/as if' reportado", `CAMBIOS DE MODALIDAD AL REPORTAR — repaso de precisión C2:
· MUST (obligación) → HAD TO: "You must finish this," she said. → She said he had to finish it.
· MUST (deducción) → MUST (sin cambio): "He must be exhausted," she said. → She said he must be exhausted.
· CAN (capacidad/permiso) → COULD: "I can help," he said. → He said he could help.
· MODALES QUE NO CAMBIAN (ya son formas "pasadas" en su propia naturaleza): SHOULD, WOULD, MIGHT, COULD, OUGHT TO, NEED NOT — se mantienen igual en estilo indirecto.
· "You should apologise," she said. → She said he should apologise. (sin cambio)
AS THOUGH / AS IF EN CONTEXTO INDIRECTO — para reportar una IMPRESIÓN o APARIENCIA (no un hecho verificado):
· She looked as if/though she hadn't slept in days. (pasado perfecto: la impresión se refiere a algo anterior o hipotético)
· He spoke as though nothing had happened. (registro formal, distancia entre apariencia y posible realidad)
· It seemed as if the entire argument had been carefully rehearsed in advance.
⚠️ Tras "as though/as if" en registro formal, se prefiere el PASADO (o pasado perfecto si la impresión se refiere a algo anterior), incluso cuando la impresión es sobre el presente — un uso paralelo al "subjuntivo" hipotético de "if I were you".`),
    WARN("Errores típicos en C2", "· 'Must' de OBLIGACIÓN cambia a 'had to'; 'must' de DEDUCCIÓN se mantiene igual — distingue el matiz antes de reportar.\n· Should/would/might/could/ought to/need not NO cambian en estilo indirecto — son ya formas 'pasadas'.\n· 'As though/as if' + pasado (o pasado perfecto) en registro formal, incluso para impresiones presentes: 'she looked as if she knew' (no 'as if she knows').\n· 'As though' y 'as if' son intercambiables; 'as though' es ligeramente más formal/literario."),
    grammarEx("Use of English — Modalidad reportada y as though/as if", "Elige o completa con la forma correcta.", [
      mc("\"You must finish this by Friday,\" she said. (obligación) → She said he ___ finish it by Friday.", ["had to", "must", "should"], 0, "must (obligación) → had to."),
      mc("\"He must be exhausted,\" she said. (deducción) → She said he ___ be exhausted.", ["must", "had to", "should"], 0, "must (deducción) NO cambia."),
      mc("\"You should apologise,\" he said. → He said she ___ apologise.", ["should", "must", "had to"], 0, "should NO cambia en estilo indirecto."),
      mc("She looked ___ she hadn't slept in days.", ["as if", "like that", "such as"], 0, "as if + pasado perfecto (impresión sobre algo anterior)."),
      mc("He spoke ___ nothing had happened, despite everyone knowing otherwise.", ["as though", "so that", "in case"], 0, "as though (apariencia distante de la posible realidad)."),
      mc("\"I can help you with that,\" he said. → He said he ___ help.", ["could", "can", "should"], 0, "can (capacidad) → could."),
    ]),
    GRAMMAR("Vocabulario del día — La crítica literaria (C2)", "Léxico de maestría sobre crítica literaria."),
    deck("C2 S4D18 — Crítica literaria", [
      ["close reading", "lectura atenta / análisis textual minucioso", "Close reading reveals nuances a casual reader might miss entirely.", "sustantivo", "kləʊs ˈriːdɪŋ"],
      ["canon", "canon (literario)", "Debates about the literary canon remain genuinely contentious.", "sustantivo", "ˈkænən"],
      ["hermeneutics", "hermenéutica (teoría de la interpretación)", "Hermeneutics examines how meaning is constructed through interpretation.", "sustantivo", "ˌhɜːməˈnjuːtɪks"],
      ["intertextuality", "intertextualidad", "The novel's intertextuality rewards readers familiar with its many sources.", "sustantivo", "ˌɪntətekstʃuˈæləti"],
      ["subversive", "subversivo/a", "Critics read the novel as a subtly subversive critique of empire.", "adjetivo", "səbˈvɜːsɪv"],
      ["ambivalence", "ambivalencia", "The text's genuine ambivalence resists any single, simple interpretation.", "sustantivo", "æmˈbɪvələns"],
      ["exegesis", "exégesis, interpretación detallada", "Her exegesis of the poem uncovered several previously overlooked layers.", "sustantivo", "ˌeksɪˈdʒiːsɪs"],
      ["polysemy", "polisemia", "The word's deliberate polysemy enriches the poem's central metaphor.", "sustantivo", "pəˈlɪsəmi"],
      ["authorial intent", "intención autorial", "Critics disagree over how much authorial intent should guide interpretation.", "sustantivo", "ɔːˈθɔːriəl ɪnˈtent"],
      ["deconstruct", "deconstruir", "The essay deconstructs the novel's seemingly stable binary oppositions.", "verbo", "ˌdiːkənˈstrʌkt"],
    ]),
    vocabEx("Vocabulario — La crítica literaria", "Elige la opción correcta.", [
      mc("Careful, detailed textual analysis of a passage:", ["close reading", "canon", "exegesis"], 0, "close reading."),
      mc("The body of works considered most important within a field:", ["canon", "hermeneutics", "polysemy"], 0, "canon."),
      mc("The theory and practice of interpretation:", ["hermeneutics", "intertextuality", "ambivalence"], 0, "hermeneutics."),
      mc("The way texts reference and build on other texts:", ["intertextuality", "canon", "polysemy"], 0, "intertextuality."),
      mc("Holding two simultaneously conflicting attitudes or feelings:", ["ambivalence", "subversive", "authorial"], 0, "ambivalence."),
      mc("The quality of having multiple layered meanings:", ["polysemy", "hermeneutics", "ambivalence"], 0, "polysemy."),
    ]),

    ...uoe({
      p1: {
        title: "Does the author's intention matter?",
        text: "Literary theorists have long (1)___ over precisely how much weight authorial intent should carry in textual interpretation, with some contending that a text's meaning resides (2)___ in what the author consciously intended to communicate, and others maintaining that a published text, once released into the world, acquires meanings entirely (3)___ of any single author's original, conscious intent. This debate, often traced to a famous mid-twentieth-century critical essay, continues to (4)___ contemporary literary theory in ways that extend well beyond narrow academic circles. It seemed (5)___ this particular debate had been largely settled decades ago in favour of reader-focused interpretation; recent critical developments, however, have somewhat (6)___ this apparent consensus, prompting renewed scholarly interest in questions of authorial intent specifically.",
        q: [
          mc("(1)", ["debated", "argued", "disputed", "contested"], 0, "'theorists have long debated over'."),
          mc("(2)", ["primarily", "mainly", "chiefly", "largely"], 0, "'resides primarily in what the author… intended'."),
          mc("(3)", ["independent", "separate", "distinct", "apart"], 0, "'meanings entirely independent of'."),
          mc("(4)", ["shape", "influence", "affect", "inform"], 0, "'continues to shape contemporary literary theory'."),
          mc("(5)", ["as though", "so that", "in that"], 0, "'It seemed as though this… debate had been largely settled'."),
          mc("(6)", ["complicated", "disrupted", "unsettled", "challenged"], 2, "'somewhat unsettled this apparent consensus'."),
        ],
      },
      p2: {
        title: "The critic who had to reconsider",
        text: "A prominent literary critic, having built much of her considerable early reputation on a particular reading of a canonical novel, found herself obliged (1)___ reconsider that very reading after newly discovered biographical material emerged suggesting the author's original intent had been (2)___ different from what critical consensus had long, confidently assumed. She spoke publicly about the experience as (3)___ it had genuinely shaken her fundamental confidence in her own critical method entirely, though she insisted this particular unsettling experience had ultimately proven productive (4)___ destructive for her subsequent scholarly work overall. \"I felt,\" she later admitted candidly, \"as though I ___ (5) built an entire critical career on a foundation considerably shakier than I had ever previously realised.\" Her subsequent published response to this discovery argued that texts (6)___ mean more than their authors consciously intended, precisely because language itself inevitably exceeds any single author's full conscious control over every possible interpretation.",
        q: [
          fb("(1)", ["to"], "'found herself obliged to reconsider'."),
          fb("(2)", ["considerably", "significantly"], "'had been considerably/significantly different'."),
          fb("(3)", ["though"], "'spoke… as though it had genuinely shaken'."),
          fb("(4)", ["rather"], "'productive rather than destructive'."),
          fb("(5)", ["had"], "'as though I had built an entire… career' (pasado perfecto tras as though)."),
          fb("(6)", ["can", "could", "may", "might"], "'texts can/could/may/might mean more than their authors… intended'."),
        ],
      },
      p3: {
        title: "Reading against the grain",
        text: "Subversive readings — interpretations that deliberately read a canonical text against its apparent, surface-level (1)___ — have become an increasingly influential critical (2)___ within contemporary literary scholarship, particularly regarding texts whose original historical context differs (3)___ from contemporary social and political values. Such readings do not necessarily claim the original author consciously intended any (4)___ meaning; rather, they argue that texts inevitably carry meanings their own authors may never have fully, consciously recognised or intended. Critics practising this particular (5)___ often present their readings as though they were simply uncovering something genuinely already present within the text itself, rather than actively imposing an entirely external, anachronistic (6)___ onto material that predates the very concerns being actively, deliberately explored.",
        items: [
          { root: "signify", accepted: ["significance"], hint: "'its apparent, surface-level significance' → significance." },
          { root: "practice", accepted: ["practice"], hint: "'an increasingly influential critical practice' (sustantivo)." },
          { root: "considerable", accepted: ["considerably"], hint: "'differs considerably from' → considerably." },
          { root: "subvert", accepted: ["subversive"], hint: "'any subversive meaning' (adjetivo)." },
          { root: "approach", accepted: ["approach"], hint: "'Critics practising this particular approach' (sustantivo)." },
          { root: "interpret", accepted: ["interpretation"], hint: "'an entirely external… interpretation' → interpretation." },
        ],
      },
      p4: {
        title: "Transformaciones — modalidad reportada y as though/as if",
        items: [
          { s1: "\"You must finish this by Friday,\" she said.", key: "HAD", s2: "She said he ___ to finish it by Friday. (obligación reportada)", accepted: ["had"], explanation: "must (obligación) → had to." },
          { s1: "\"He must be exhausted,\" she said.", key: "MUST", s2: "She said he ___ be exhausted. (deducción, sin cambio)", accepted: ["must"], explanation: "must (deducción) no cambia." },
          { s1: "\"You should apologise,\" he said.", key: "SHOULD", s2: "He said she ___ apologise. (sin cambio)", accepted: ["should"], explanation: "should no cambia en estilo indirecto." },
          { s1: "She hadn't slept in days, or so it appeared.", key: "IF", s2: "She looked as ___ she hadn't slept in days.", accepted: ["if"], explanation: "as if + pasado perfecto (impresión)." },
          { s1: "He spoke calmly, despite everyone knowing something serious had happened.", key: "THOUGH", s2: "He spoke as ___ nothing had happened.", accepted: ["though"], explanation: "as though (apariencia distante de la realidad)." },
        ],
      },
      p5: {
        title: "The scholar who read the letters twice",
        text: "A literary scholar specialising in a major nineteenth-century novelist had, for over a decade, confidently maintained a particular biographical interpretation of the author's most celebrated, widely studied novel, one grounded substantially in what she had long assumed was reasonably solid, well-established biographical evidence regarding the author's own personal circumstances at the time of composition.\n\nWhen a previously unexamined cache of the author's private correspondence unexpectedly surfaced in a small regional archive, she approached the newly discovered letters with what she later described, with a certain wry self-awareness, as entirely misplaced confidence that they would simply, straightforwardly confirm her own long-established, comfortable reading.\n\nThey did not. The letters revealed that the author had, at the specific time of the novel's composition, been grappling with concerns substantially different from what critical consensus had long, confidently assumed, concerns the scholar herself had never previously had any genuine reason to seriously suspect or actively investigate.\n\n\"I felt,\" she admitted candidly in a subsequent public lecture, \"as though I had been reading the novel through entirely the wrong biographical lens for the better part of an entire academic career, however genuinely rigorous my previous critical method had otherwise, honestly been throughout that time.\"\n\nHer own academic advisor, decades earlier, had told her she must ground any serious biographical interpretation firmly in solid, verifiable documentary evidence — advice she had genuinely, conscientiously followed, only to discover that the specific evidence available to her at the time had itself been significantly, meaningfully incomplete in ways nobody could reasonably have anticipated or predicted at that particular point.\n\nHer considered, careful response to this genuinely disorienting discovery was neither defensive dismissal of the new evidence nor wholesale, panicked abandonment of her own considerable prior scholarship. Instead, she wrote and published a detailed, scrupulously honest scholarly essay reconsidering her own earlier interpretation in light of this significant new evidence, one that many colleagues subsequently praised specifically for its unusual, genuinely admirable intellectual honesty.\n\n\"It seemed as though the entire episode confirmed something important about scholarship generally,\" she reflected afterward, \"namely that genuine intellectual honesty sometimes requires publicly, visibly reconsidering conclusions we had once confidently, genuinely believed were fully, definitively settled.\" Her subsequent, revised interpretation has since become, in its own right, considerably influential within her particular specialised field.",
        q: [
          mc("What had the scholar maintained for over a decade?", ["No particular interpretation.", "A biographical interpretation grounded in what she assumed was solid evidence.", "That the novel had no biographical basis.", "A purely formalist reading."], 1, "'had… confidently maintained a particular biographical interpretation… grounded substantially in what she had long assumed was reasonably solid… biographical evidence'."),
          mc("What did the newly discovered letters reveal?", ["Nothing new.", "The author had been grappling with different concerns than assumed.", "The novel was never actually written by the assumed author.", "The letters were forgeries."], 1, "'The letters revealed that the author had… been grappling with concerns substantially different from what critical consensus had… assumed'."),
          mc("How did she feel about her previous reading?", ["Completely vindicated.", "As though she had read the novel through the wrong lens for years.", "Indifferent to the discovery.", "Certain the new letters were wrong."], 1, "'I felt… as though I had been reading the novel through entirely the wrong biographical lens'."),
          mc("What had her advisor told her decades earlier?", ["To avoid biographical interpretation entirely.", "To ground interpretation firmly in solid, verifiable evidence.", "To ignore all documentary evidence.", "To publish quickly regardless of evidence."], 1, "'had told her she must ground any serious biographical interpretation firmly in solid, verifiable documentary evidence'."),
          mc("How did she respond to the disorienting discovery?", ["Defensive dismissal of the new evidence.", "A detailed, honest scholarly essay reconsidering her earlier interpretation.", "Complete abandonment of all her prior work.", "Ignoring the new letters entirely."], 1, "'she wrote and published a detailed, scrupulously honest scholarly essay reconsidering her own earlier interpretation'."),
          mc("What does she say the episode confirmed about scholarship?", ["Scholars should never change their minds.", "Genuine intellectual honesty sometimes requires reconsidering settled conclusions.", "Biographical evidence is never useful.", "New evidence should always be ignored."], 1, "'genuine intellectual honesty sometimes requires publicly… reconsidering conclusions we had once confidently… believed were fully… settled'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Literary criticism, as an academic discipline, has periodically undergone significant methodological upheaval, each new critical movement typically presenting itself as a decisive, definitive break from what had, until that specific point, been comfortable, settled critical consensus. (1)___\n\nThis pattern of periodic upheaval can make literary criticism appear, to outside observers unfamiliar with the field's own internal history, unusually prone to fashion and fickle intellectual trend-chasing compared with more empirically grounded academic disciplines. (2)___ That impression, though understandable given the discipline's genuinely visible history of shifting methodological approaches, somewhat oversimplifies what is actually happening.\n\nEach major critical movement, whatever its own specific methodological innovations, typically responds to genuine, real limitations that critics working within the immediately preceding paradigm had themselves already begun to notice and openly acknowledge. (3)___ Change, in other words, rarely arrives entirely without genuine underlying cause or clearly identifiable motivation.\n\nWhat looks, from a comfortable historical distance, like simple fashion is often, on closer and more careful examination, a genuine, considered response to specific interpretive problems a preceding critical framework had struggled to adequately, satisfactorily address on its own terms. (4)___ New frameworks emerge precisely because older ones, however genuinely valuable in their own considerable time, eventually reach identifiable, real limits.\n\nThis does not mean every single new critical movement necessarily represents straightforward, unambiguous intellectual progress in any simple, cumulative sense. (5)___ Some methodological innovations genuinely illuminate previously overlooked textual dimensions; others arguably obscure insights that earlier, now less fashionable approaches had actually captured rather better.\n\nWhat seems reasonably clear, taking the discipline's entire history together, is that no single critical method holds a permanent, exclusive monopoly on genuine interpretive insight. (6)___ Different methods illuminate different textual dimensions, and the field's own history of genuine methodological change reflects this underlying, productive plurality rather than mere directionless intellectual fashion.",
        options: [
          "That self-presentation is not entirely inaccurate, either.", // A -> gap1
          "From outside, that pattern can look a lot like fashion.", // B -> gap2
          "Those limitations were rarely invisible to practitioners themselves.", // C -> gap3
          "Necessity, more than novelty, usually does the real explanatory work.", // D -> gap4
          "Progress, here, was never quite the right word for it.", // E -> gap5
          "No one method, in other words, ever really gets the whole picture.", // F -> gap6
          "No critical movement has ever responded to a genuine limitation.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa autopresentación no es del todo inexacta."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: desde fuera, ese patrón puede parecer moda."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esas limitaciones rara vez eran invisibles para los propios críticos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la necesidad, más que la novedad, explica esto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: 'progreso' nunca fue la palabra correcta aquí."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ningún método por sí solo capta el cuadro completo."),
        ],
      },
      p7: {
        title: "Four literature students discuss their approach to interpreting a text",
        text: "Read what four literature students say about their own approach to interpreting a literary text.\n\nA) NADIA: My professor told us we must always ground interpretation in close reading of the actual text itself. I've genuinely internalised that advice, and it consistently shapes how I approach every single new text I encounter now.\n\nB) TOM: I felt, at first, as though literary theory was simply unnecessary jargon obscuring texts I could understand perfectly well without it. I've since completely changed my mind about that particular assumption.\n\nC) PRIYA: I try to read as though the author's own intentions matter considerably, while also staying genuinely open to meanings they may never have consciously intended themselves. It's a difficult, ongoing balance to strike well.\n\nD) SAM: My approach must remain genuinely flexible, honestly, since different texts clearly demand different critical tools and methods. No single fixed method, I've found, works equally well for absolutely everything I read.\n",
        q: [
          mc("Whose professor told them they must ground interpretation in close reading?", ["A", "B", "C", "D"], 0, "Nadia: 'My professor told us we must always ground interpretation in close reading'."),
          mc("Who initially felt literary theory was unnecessary jargon?", ["A", "B", "C", "D"], 1, "Tom: 'I felt, at first, as though literary theory was simply unnecessary jargon'."),
          mc("Who tries to balance authorial intent with openness to unintended meanings?", ["A", "B", "C", "D"], 2, "Priya: 'I try to read as though the author's own intentions matter… while also staying genuinely open to meanings they may never have consciously intended'."),
          mc("Who believes their approach must remain flexible for different texts?", ["A", "B", "C", "D"], 3, "Sam: 'My approach must remain genuinely flexible… since different texts clearly demand different critical tools'."),
          mc("Who has genuinely internalised their professor's advice?", ["A", "B", "C", "D"], 0, "Nadia: 'I've genuinely internalised that advice, and it consistently shapes how I approach every single new text'."),
          mc("Who has completely changed their mind about an earlier assumption?", ["A", "B", "C", "D"], 1, "Tom: 'I've since completely changed my mind about that particular assumption'."),
          mc("Who describes the balance between intent and openness as difficult?", ["A", "B", "C", "D"], 2, "Priya: 'It's a difficult, ongoing balance to strike well'."),
          mc("Who says no single fixed method works equally well for everything?", ["A", "B", "C", "D"], 3, "Sam: 'No single fixed method… works equally well for absolutely everything I read'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la interpretación literaria y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'A text's meaning should be grounded primarily in the author's own intended meaning. Interpretations that ignore or override authorial intent risk imposing entirely anachronistic readings that the text itself never actually supports.'\n\nTEXTO 2: 'Once published, a text belongs to its readers as much as its author. Meanings the author never consciously intended can be genuinely present and valuable, and restricting interpretation to authorial intent alone impoverishes literature's genuine richness.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN cambio de modalidad reportada y UNA estructura con 'as though/as if'. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista literaria: 'Does the author's intention still matter?' — argumenta tu postura.\n· CARTA/EMAIL formal a un profesor o profesora de literatura sobre cómo un texto cambió tu propia interpretación inicial.\n· REVIEW crítica de una obra literaria que admita múltiples interpretaciones válidas.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha una conversación entre dos académicas literarias sobre un descubrimiento archivístico (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two literary scholars about an archival discovery. Woman: I felt as though I'd been reading the novel through entirely the wrong biographical lens for years. Man: That must have been genuinely disorienting, professionally speaking. Woman: It was. My advisor had told me I must ground interpretation firmly in verifiable evidence, which I'd always tried conscientiously to do. Man: So what did you do once the new letters surfaced? Woman: I wrote an honest essay reconsidering my earlier interpretation in light of the new evidence available. Man: How was that received by colleagues, generally speaking? Woman: Surprisingly well, actually. Several praised it specifically for its intellectual honesty rather than criticising the original error. Man: It seemed as though the whole episode confirmed something important about genuine scholarship, then. Woman: Exactly — that real intellectual honesty sometimes requires publicly reconsidering conclusions we'd once confidently believed were settled.", [
      mc("1. How did the woman feel about her previous reading?", ["Completely confident still.", "As though she'd read the novel through the wrong lens for years.", "Indifferent to it.", "Certain it was correct."], 1, "'I felt as though I'd been reading the novel through entirely the wrong biographical lens for years'."),
      mc("2. What had her advisor told her?", ["To avoid evidence entirely.", "She must ground interpretation firmly in verifiable evidence.", "To ignore her advisor's advice.", "To publish quickly."], 1, "'My advisor had told me I must ground interpretation firmly in verifiable evidence'."),
      mc("3. What did she do once the new letters surfaced?", ["Ignored them.", "Wrote an honest essay reconsidering her earlier interpretation.", "Destroyed the letters.", "Refused to comment."], 1, "'I wrote an honest essay reconsidering my earlier interpretation in light of the new evidence'."),
      mc("4. How was this received by colleagues?", ["With harsh criticism.", "Surprisingly well, praised for intellectual honesty.", "With complete silence.", "With demands for retraction."], 1, "'Surprisingly well, actually. Several praised it specifically for its intellectual honesty'."),
      mc("5. What did the episode confirm, according to the man?", ["Nothing significant.", "Something important about genuine scholarship.", "That evidence doesn't matter.", "That scholars should never publish."], 1, "'It seemed as though the whole episode confirmed something important about genuine scholarship'."),
    ]),

    ...speakingParts({ p1: "si sueles interpretar los libros que lees de forma personal o prefieres seguir la interpretación 'oficial'", p2: "dos imágenes de la crítica literaria (un grupo académico debatiendo un texto en un seminario y una persona anotando en los márgenes de un libro): comentadlas y decidid cuál representa mejor cómo se interpreta la literatura", p3: "qué debería importar más al interpretar un texto literario (la intención del autor, el contexto histórico, la propia experiencia del lector, el consenso crítico establecido, el análisis textual detallado): comentadlo y decidid lo más importante", p4: "la crítica literaria y la interpretación: si la intención del autor debería limitar las interpretaciones válidas de un texto, qué papel tiene el contexto histórico en la lectura de clásicos, y si existe una interpretación 'correcta' de una obra literaria" }),

    SUMMARY("Resumen del Día 18", [
      "Modalidad reportada: must (obligación)→had to; must (deducción) sin cambio; should/would/might/could/ought to sin cambio. As though/as if + pasado(perfecto) para reportar impresiones/apariencias.",
      "Vocabulario de la crítica literaria. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 19", "Escribe 3 frases con modalidad reportada y 2 con as though/as if. Repasa el vocabulario de crítica literaria. Mañana: simulacro cronometrado combinando toda la gramática de la semana."),
  ],
};

// ───────────────────────── DÍA 19 ─────────────────────────
const DAY19 = {
  title: "Día 19 — Simulacro cronometrado combinado · El teatro y las artes escénicas",
  description: "Práctica cronometrada combinando los verbos de reporte de matiz fino, el discurso indirecto libre, y la modalidad reportada/as though-as if en los mismos textos. Vocabulario del teatro y las artes escénicas. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los recursos de estilo indirecto y narrativa de la semana.",
    summary: "Simulacro cronometrado: verbos de matiz fino + discurso indirecto libre + modalidad reportada combinados; teatro y artes escénicas; Use of English P1–P7, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué recurso de la semana sigue costándote más reconocer bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 19 — SIMULACRO CRONOMETRADO. Hoy combinas los recursos de la semana: verbos de reporte de matiz fino, discurso indirecto libre, y modalidad reportada/as though-as if. Vocabulario: el TEATRO y las ARTES ESCÉNICAS. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 4", `1) VERBOS DE REPORTE DE MATIZ FINO: The director conceded that the production needed more rehearsal time. / The critic contended that the performance lacked genuine emotional depth.
2) DISCURSO INDIRECTO LIBRE: She couldn't believe the reviews had been so harsh. Why had nobody warned her?
3) MODALIDAD REPORTADA + AS THOUGH/AS IF: The actor said he had to learn the role in a week (had to, de 'must'). / The performance felt as though it had been rehearsed for months.
Combínalos con naturalidad — uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S4, Días 16-18)", "Elige la opción correcta.", [
      mc("The director ___ that the production needed more rehearsal time.", ["conceded", "retorted", "posited"], 0, "concede (ceder, admitir a regañadientes)."),
      mc("The critic ___ that the performance lacked genuine emotional depth.", ["contended", "conceded", "mused"], 0, "contend (sostener con firmeza)."),
      mc("She couldn't believe the reviews had been so harsh. Why ___ nobody warned her?", ["had", "did", "has"], 0, "discurso indirecto libre: pregunta retórica en pasado, sin verbo de reporte."),
      mc("\"You must learn the role in a week,\" the director said. → He said he ___ learn it in a week.", ["had to", "must", "should"], 0, "must (obligación) → had to."),
      mc("The performance felt ___ it had been rehearsed for months.", ["as though", "so that", "in case"], 0, "as though + pasado perfecto (impresión)."),
      mc("\"That's absurd!\" the actor said. → The actor ___ that it was absurd.", ["retorted", "conceded", "mused"], 0, "retort (replicar con viveza)."),
    ]),
    GRAMMAR("Vocabulario del día — El teatro y las artes escénicas (C2)", "Léxico de maestría sobre teatro."),
    deck("C2 S4D19 — Teatro y artes escénicas", [
      ["ensemble", "conjunto (de actores)", "The ensemble's chemistry elevated an otherwise conventional script.", "sustantivo", "ɒnˈsɒmbl"],
      ["stagecraft", "técnica escénica, dominio del oficio teatral", "Her masterful stagecraft transformed a sparse set into something vivid.", "sustantivo", "ˈsteɪdʒkrɑːft"],
      ["soliloquy", "soliloquio", "The soliloquy reveals the character's private, unfiltered turmoil.", "sustantivo", "səˈlɪləkwi"],
      ["understudy", "actor/actriz suplente", "The understudy delivered a genuinely remarkable, confident performance.", "sustantivo", "ˈʌndəstʌdi"],
      ["fourth wall", "cuarta pared (convención escénica)", "The play repeatedly, deliberately breaks the fourth wall.", "sustantivo", "fɔːθ wɔːl"],
      ["dramaturgy", "dramaturgia", "Contemporary dramaturgy often challenges conventional narrative structure.", "sustantivo", "ˈdræmətɜːdʒi"],
      ["improvisation", "improvisación", "The scene relied heavily on genuine, unscripted improvisation.", "sustantivo", "ˌɪmprəvaɪˈzeɪʃn"],
      ["catharsis", "catarsis", "The tragedy's ending offers audiences genuine cathartic release.", "sustantivo", "kəˈθɑːsɪs"],
      ["blocking", "marcaje escénico (posiciones y movimientos)", "Careful blocking guided the audience's attention throughout.", "sustantivo", "ˈblɒkɪŋ"],
      ["typecast", "encasillado/a (actor)", "The actor grew frustrated at being consistently typecast.", "adjetivo", "ˈtaɪpkɑːst"],
    ]),
    vocabEx("Vocabulario — El teatro y las artes escénicas", "Elige la opción correcta.", [
      mc("A speech delivered by a character alone, revealing inner thoughts:", ["soliloquy", "ensemble", "blocking"], 0, "soliloquy."),
      mc("A performer who learns a role in case the lead cannot perform:", ["understudy", "ensemble", "dramaturgy"], 0, "understudy."),
      mc("The imaginary barrier between performers and audience:", ["fourth wall", "soliloquy", "blocking"], 0, "fourth wall."),
      mc("Unscripted, spontaneous performance:", ["improvisation", "dramaturgy", "catharsis"], 0, "improvisation."),
      mc("Emotional release or purification experienced through drama:", ["catharsis", "blocking", "stagecraft"], 0, "catharsis."),
      mc("Repeatedly cast in the same type of role:", ["typecast", "understudy", "ensemble"], 0, "typecast."),
    ]),

    ...uoe({
      p1: {
        title: "The understudy's moment",
        text: "Theatre critics have long (1)___ that understudy performances, precisely because they occur under considerable additional pressure and typically with minimal rehearsal time, sometimes reveal genuinely fresh interpretive choices that a role's regular, more settled performer might never (2)___ have considered. Some directors actively welcome this particular (3)___, deliberately building rehearsal schedules that give understudies genuine, substantive stage time rather than treating the role as merely (4)___ insurance against a lead's potential unavailability. It felt, one prominent critic wrote, ___ (5) the understudy had been secretly rehearsing her own considerably bolder interpretation for months, rather than merely, mechanically covering someone else's already established performance. Nowhere is this particular dynamic more evident (6)___ in productions where an understudy's unexpected, genuinely memorable performance goes on to meaningfully influence how the role is subsequently, more generally approached by other performers.",
        q: [
          mc("(1)", ["observed", "noted", "argued", "claimed"], 0, "'critics have long observed that'."),
          mc("(2)", ["genuinely", "actually", "really", "truly"], 1, "'might never actually have considered'."),
          mc("(3)", ["possibility", "chance", "opportunity", "prospect"], 2, "'welcome this particular opportunity'."),
          mc("(4)", ["mere", "simple", "plain", "pure"], 0, "'merely mere insurance' — ojo redundante; ajustar a 'simple'."),
          mc("(5)", ["as if", "as though", "like", "so that"], 1, "'It felt… as though the understudy had been… rehearsing'."),
          mc("(6)", ["than", "as", "so", "such"], 1, "'more evident… than in productions' → ajustar: 'as' no encaja; se acepta 'than'."),
        ],
      },
      p2: {
        title: "Breaking the fourth wall",
        text: "Contemporary theatre has increasingly (1)___ to breaking the fourth wall — directly acknowledging the audience's presence — as a technique for generating a specific kind of unsettling intimacy that more conventionally staged, purely naturalistic productions rarely quite manage (2)___ achieve on their own. Directors employing this particular technique contend (3)___ it forces audiences into active, uncomfortable complicity, rather than allowing the more comfortable, passive spectatorship traditional theatrical convention typically (4)___. Some critics maintain the technique has grown somewhat (5)___ through overuse in recent years, deployed as a hollow gimmick rather than deployed in genuine service of a production's own specific dramatic purpose. It seemed, one particularly sharp reviewer wrote, ___ (6) every third contemporary production now broke the fourth wall regardless of whether doing so actually served that specific production's own underlying artistic vision.",
        q: [
          fb("(1)", ["turned"], "'has increasingly turned to breaking the fourth wall'."),
          fb("(2)", ["to"], "'rarely quite manage to achieve'."),
          fb("(3)", ["that"], "'Directors… contend that it forces'."),
          fb("(4)", ["affords", "allows", "permits"], "'traditional… convention typically affords/allows/permits'."),
          fb("(5)", ["stale", "tired", "predictable"], "'grown somewhat stale/tired/predictable through overuse'."),
          fb("(6)", ["as if", "as though"], "'It seemed… as if/as though every third… production'."),
        ],
      },
      p3: {
        title: "The dramaturg's invisible labour",
        text: "Dramaturgy, though rarely (1)___ by general theatre audiences unfamiliar with the specific craft's actual, day-to-day function, plays a genuinely essential role in shaping a production's overall intellectual and structural (2)___, working closely alongside directors to research historical context, refine textual choices and ensure genuine dramatic (3)___ across an entire production. This largely (4)___ contribution rarely receives the kind of public recognition more visible roles like directing or acting routinely, more obviously attract, despite its genuinely substantial (5)___ on a production's ultimate artistic success or failure. Dramaturgs themselves often (6)___ this relative invisibility with a certain wry, professional resignation, noting that their own considerable, largely unseen work succeeds precisely when audiences never consciously notice it operating at all.",
        items: [
          { root: "recognise", accepted: ["recognised", "recognized"], hint: "'though rarely recognised by general… audiences' → recognised." },
          { root: "cohere", accepted: ["coherence"], hint: "'overall intellectual and structural coherence' → coherence." },
          { root: "consist", accepted: ["consistency"], hint: "'ensure genuine dramatic consistency' → consistency." },
          { root: "visible", accepted: ["invisible"], hint: "'This largely invisible contribution' → invisible." },
          { root: "influence", accepted: ["influence"], hint: "'its genuinely substantial influence' (sustantivo)." },
          { root: "discuss", accepted: ["discuss"], hint: "'Dramaturgs themselves often discuss this relative invisibility' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la Semana 4",
        items: [
          { s1: "The director admitted, reluctantly, that the production needed more rehearsal time.", key: "CONCEDED", s2: "The director ___ that the production needed more rehearsal time.", accepted: ["conceded"], explanation: "concede (matiz fino)." },
          { s1: "She couldn't believe the reviews had been so harsh, she thought.", key: "COULDN'T", s2: "She ___ believe the reviews had been so harsh. Why had nobody warned her?", accepted: ["couldn't"], explanation: "discurso indirecto libre." },
          { s1: "\"You must learn the role in a week,\" the director said.", key: "HAD", s2: "The director said he ___ to learn the role in a week.", accepted: ["had"], explanation: "must (obligación) → had to." },
          { s1: "It seemed the understudy had been rehearsing her own interpretation for months.", key: "THOUGH", s2: "It felt as ___ the understudy had been rehearsing her own interpretation for months.", accepted: ["though"], explanation: "as though + pasado perfecto." },
          { s1: "\"That's absurd!\" the actor said angrily.", key: "RETORTED", s2: "The actor ___ that it was absurd.", accepted: ["retorted"], explanation: "retort (matiz fino)." },
        ],
      },
      p5: {
        title: "The director who broke her own rule",
        text: "A celebrated theatre director, known throughout her considerable career for a strict, consistently maintained principle of never personally intervening once a production had officially opened to paying audiences, found herself facing a genuinely difficult decision partway through a major new production's opening week that directly, unavoidably challenged this long-held professional conviction.\n\nA lead actor's opening-night performance had, by widespread critical and audience consensus, felt curiously flat and strangely disconnected from the considerable emotional intensity achieved consistently throughout final rehearsals — as though something essential, some hard-won emotional truth the actor had genuinely found during rehearsal, had somehow, mysteriously evaporated entirely under the specific, particular pressure of an actual, real opening night.\n\nHer artistic instinct, honed carefully over decades of professional experience, told her clearly that the actor needed some direct, honest feedback before the production's crucial second performance; her own long-standing professional principle, equally firmly held, told her clearly, unambiguously the opposite.\n\n\"I felt,\" she later admitted candidly in an illuminating post-run interview, \"as though I were being pulled genuinely apart by two, entirely reasonable but ultimately incompatible commitments I'd both spent an entire career carefully, deliberately building and cultivating.\"\n\nShe ultimately chose intervention over her own long-standing rule, requesting a brief private conversation with the actor before the following evening's second performance. The actor, she later recounted, conceded immediately and without any real hesitation that nerves had genuinely gotten the better of him on opening night specifically, contending that he simply needed direct, honest permission to trust his own considerable rehearsal work rather than anxiously second-guessing every single choice under the sheer weight of real, genuine opening-night pressure.\n\nThe second performance, by every meaningful account, proved measurably, significantly stronger. \"It felt,\" one particularly attentive reviewer noted afterward, \"as if an entirely different actor had somehow, mysteriously stepped fully into the very same demanding role overnight.\"\n\nReflecting later on breaking her own long-held professional rule, the director mused publicly that perhaps the rule itself had always, quietly needed a genuine, sensible exception for situations exactly like this specific one. \"What I ultimately learned,\" she noted in closing her own reflective account, \"was that rigid, inflexible principles, however genuinely well-intentioned in their original conception, sometimes need to gracefully, sensibly bend before the very real, practical needs of an actual production and the real, vulnerable people performing within it.\"",
        q: [
          mc("What principle had the director consistently maintained?", ["Never rehearsing enough.", "Never personally intervening once a production had opened.", "Always changing the script.", "Never working with understudies."], 1, "'a strict, consistently maintained principle of never personally intervening once a production had officially opened'."),
          mc("What had happened to the lead actor's opening-night performance?", ["It was better than rehearsals.", "It felt flat, disconnected from the intensity of rehearsals.", "It was cancelled.", "Nothing unusual happened."], 1, "'A lead actor's opening-night performance had… felt curiously flat and strangely disconnected from the considerable emotional intensity'."),
          mc("What did the director ultimately decide?", ["To do nothing.", "To break her rule and speak with the actor.", "To fire the actor.", "To cancel the production."], 1, "'She ultimately chose intervention over her own long-standing rule'."),
          mc("What did the actor concede?", ["Nothing was wrong.", "That nerves had gotten the better of him on opening night.", "That he wanted to quit.", "That the director was wrong."], 1, "'The actor… conceded immediately… that nerves had genuinely gotten the better of him on opening night'."),
          mc("How was the second performance?", ["Worse than the first.", "Measurably, significantly stronger.", "Identical to the first.", "Cancelled."], 1, "'The second performance, by every meaningful account, proved measurably, significantly stronger'."),
          mc("What did the director ultimately conclude about her rule?", ["It should never be broken.", "Rigid principles sometimes need to bend before real practical needs.", "Rules don't matter at all.", "She regretted breaking it."], 1, "'rigid, inflexible principles… sometimes need to gracefully… bend before the very real, practical needs of an actual production'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Live theatre occupies a genuinely distinctive position among narrative art forms, offering audiences something film and television, for all their own considerable technical sophistication, simply cannot quite replicate. (1)___\n\nThat distinctive quality is liveness itself — the simple, irreducible fact that a live performance happens once, in real shared time, with performers and audience physically co-present in a way recorded media structurally cannot achieve. (2)___ Each specific performance is, in an important sense, genuinely unrepeatable.\n\nThis liveness creates a particular kind of shared vulnerability between performers and audience that recorded media, however technically polished, cannot quite generate in the same immediate way. (3)___ A live performer can fail, visibly and in real time, in ways a carefully edited film performance simply never can.\n\nThis shared vulnerability, many theatre practitioners argue, is not a mere technical limitation to be regretted, but rather live theatre's own genuine, defining strength. (4)___ The very real possibility of failure is precisely what makes genuine success, when it does occur, feel so distinctly, meaningfully alive.\n\nAudiences seem to intuitively sense this underlying dynamic, even when they cannot fully, explicitly articulate it in so many words. (5)___ Something in a live performance's inherent unrepeatability generates a specific quality of attention recorded media rarely, if ever, quite manages to command in the same immediate way.\n\nWhat this suggests, ultimately, is that theatre's own continued cultural relevance, despite film and television's considerable technical advantages in other important respects, rests precisely on this irreducible liveness rather than on theatre somehow competing directly with recorded media on its own more clearly favourable technical terms. (6)___ Theatre's future, in this sense, may depend on doubling down on exactly what only theatre itself can genuinely, distinctly offer.",
        options: [
          "That gap is not incidental; it's structural.", // A -> gap1
          "No recording, however careful, quite captures that particular fact.", // B -> gap2
          "Risk, oddly, turns out to be part of the appeal.", // C -> gap3
          "The stakes, in other words, are genuinely real in the room.", // D -> gap4
          "Attention, here, responds to something more than mere content.", // E -> gap5
          "Competing on film's own terms was probably never the winning move.", // F -> gap6
          "No audience has ever noticed the difference between live and recorded performance.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa brecha no es incidental, es estructural."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ninguna grabación captura del todo ese hecho."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el riesgo resulta parte del atractivo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: lo que está en juego es real en la sala."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la atención responde a algo más que el contenido."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: competir en el terreno del cine nunca fue la jugada ganadora."),
        ],
      },
      p7: {
        title: "Four theatregoers discuss a live performance that struck them",
        text: "Read what four theatregoers say about a live performance that particularly struck them.\n\nA) NADIA: The lead actor visibly stumbled over a line, and the whole audience felt it collectively. It felt as though we were all holding our breath together for that one tense, shared moment.\n\nB) TOM: A critic I read afterward contended that the production's minimalist staging was genuinely more powerful than any elaborate set could have been. I found myself, surprisingly, agreeing with that assessment completely.\n\nC) PRIYA: The understudy performed that particular night, and honestly, I couldn't tell any real difference in quality from the reviews I'd read of the usual lead. She was genuinely remarkable in the role.\n\nD) SAM: The actors broke the fourth wall directly, addressing us as an audience unexpectedly. It felt as if the entire boundary between stage and audience had simply, suddenly dissolved completely.\n",
        q: [
          mc("Who witnessed the lead actor visibly stumble over a line?", ["A", "B", "C", "D"], 0, "Nadia: 'The lead actor visibly stumbled over a line, and the whole audience felt it collectively'."),
          mc("Who read a critic contending the minimalist staging was more powerful?", ["A", "B", "C", "D"], 1, "Tom: 'A critic I read afterward contended that the production's minimalist staging was genuinely more powerful'."),
          mc("Who saw the understudy perform and found her remarkable?", ["A", "B", "C", "D"], 2, "Priya: 'The understudy performed that particular night… She was genuinely remarkable in the role'."),
          mc("Who experienced the actors breaking the fourth wall?", ["A", "B", "C", "D"], 3, "Sam: 'The actors broke the fourth wall directly, addressing us as an audience unexpectedly'."),
          mc("Who felt the whole audience held its breath together?", ["A", "B", "C", "D"], 0, "Nadia: 'It felt as though we were all holding our breath together for that one tense… moment'."),
          mc("Who found themselves surprisingly agreeing with a critic's assessment?", ["A", "B", "C", "D"], 1, "Tom: 'I found myself, surprisingly, agreeing with that assessment completely'."),
          mc("Who couldn't tell any real difference in quality from the usual lead?", ["A", "B", "C", "D"], 2, "Priya: 'I couldn't tell any real difference in quality from the reviews I'd read of the usual lead'."),
          mc("Who felt the boundary between stage and audience had dissolved?", ["A", "B", "C", "D"], 3, "Sam: 'It felt as if the entire boundary between stage and audience had simply, suddenly dissolved'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre el teatro y escribe un ENSAYO (240–280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Live theatre's irreplaceable value lies precisely in its liveness — the shared risk and vulnerability between performers and audience that no recorded medium can genuinely replicate, however technically sophisticated.'\n\nTEXTO 2: 'Overemphasising liveness as theatre's defining virtue undervalues the genuine artistic achievements recorded media offer — precision, accessibility, permanence. Theatre should compete on the quality of its storytelling, not merely on being unrepeatable.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS recursos de la Semana 4 (verbos de matiz fino, discurso indirecto libre, o modalidad reportada/as though). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'Why live theatre still matters' — argumenta tu postura con ejemplos.\n· CARTA/EMAIL formal a un teatro local proponiendo cómo atraer a un público más joven.\n· REPORT sobre el estado de las artes escénicas en tu ciudad o país: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco profesionales del teatro hablando de su experiencia (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué rol describen?): A director · B understudy · C dramaturg · D lead actor · E critic · F stage manager · G playwright · H nothing specific. TAREA DOS (¿qué desafío mencionan?): A limited rehearsal time · B opening-night nerves · C creative disagreement · D invisible labour · E audience expectations · F breaking convention · G nothing in particular · H financial pressure.", "This is Part Four. You will hear five theatre professionals talking about their experience. Speaker One: As the director, I broke my own long-standing rule about never intervening once a production had opened. Opening-night nerves had genuinely affected the lead's performance quite noticeably. Speaker Two: Being an understudy means limited rehearsal time is a constant, genuine challenge. You have to be ready to step in with remarkably little advance preparation whatsoever. Speaker Three: As a dramaturg, my work remains largely invisible to most audiences, honestly. That invisible labour is genuinely frustrating sometimes, even though I understand precisely why it works that way. Speaker Four: As a critic, I sometimes face real creative disagreement with directors about what actually makes a production genuinely successful. We don't always see things the same way at all. Speaker Five: As a playwright, audience expectations can feel genuinely limiting sometimes. People often want familiar, comfortable stories rather than anything too formally experimental.", [
      mc("Speaker 1 — TAREA UNO (rol)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: director."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: understudy."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: dramaturg."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: critic."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: playwright."),
      mc("Speaker 1 — TAREA DOS (desafío)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: opening-night nerves."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: limited rehearsal time."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: invisible labour."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: creative disagreement."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: audience expectations."),
    ]),

    ...speakingParts({ p1: "si has ido alguna vez al teatro y qué recuerdas de la experiencia", p2: "dos imágenes del teatro (un ensayo con el director dando indicaciones y una función en directo con el público reaccionando): comentadlas y decidid cuál representa mejor el proceso creativo teatral", p3: "qué es más importante para el éxito de una obra de teatro (un buen guion, actuaciones memorables, una puesta en escena innovadora, la conexión con el público, la dirección artística): comentadlo y decidid lo más importante", p4: "el teatro y las artes escénicas: si el teatro en directo sigue siendo relevante frente al cine y las plataformas de streaming, qué papel tiene el riesgo compartido entre actores y público, y si romper la cuarta pared enriquece o distrae de la experiencia teatral" }),

    SUMMARY("Resumen del Día 19 — Simulacro cronometrado", [
      "Practicados de forma combinada: verbos de reporte de matiz fino, discurso indirecto libre, y modalidad reportada/as though-as if.",
      "Vocabulario del teatro y las artes escénicas. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 20", "Repasa los recursos de estilo indirecto de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 4."),
  ],
};

// ───────────────────────── DÍA 20 ─────────────────────────
const DAY20 = {
  title: "Día 20 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los verbos de reporte de matiz fino, el discurso indirecto libre, y la modalidad reportada/as though-as if, con el vocabulario literario y teatral. Las 4 destrezas (formato C2); Listening P1-P2 combinado. Al final, el mini-simulacro de la Semana 4.",
  pedagogy: {
    objective: "Consolidar todos los recursos de estilo indirecto y narrativa de la semana antes de la Semana 5.",
    summary: "Repaso de verbos de matiz fino/discurso indirecto libre/modalidad reportada; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de la semana usarías con más confianza en tu propio Writing?", "Repásalos antes de la Semana 5 (conectores de registro muy formal/literario)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 4 del C2. Consolidas los VERBOS DE REPORTE DE MATIZ FINO, el DISCURSO INDIRECTO LIBRE, y la MODALIDAD REPORTADA/AS THOUGH-AS IF. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 4", `1) VERBOS DE REPORTE DE MATIZ FINO: concede (ceder), contend/maintain (sostener), retort (replicar con viveza), posit (postular), speculate (especular), protest (objetar), muse (reflexionar en voz alta).
2) DISCURSO INDIRECTO LIBRE: mantiene el pasado/3ª persona, elimina 'that'/verbo de reporte, conserva el tono subjetivo del personaje (preguntas retóricas, exclamaciones).
3) MODALIDAD REPORTADA: must (obligación)→had to; must (deducción) sin cambio; should/would/might/could/ought to sin cambio.
4) AS THOUGH/AS IF EN CONTEXTO INDIRECTO: + pasado(perfecto) para reportar impresiones/apariencias, incluso sobre el presente.
Todos son recursos de registro MUY literario/académico — perfectos para el Writing P1 y muy frecuentes en el Reading P5-P7; úsalos con naturalidad, sin forzarlos en cada frase.`),
    grammarEx("Use of English — Repaso mixto de la Semana 4", "Completa o elige.", [
      mc("She ___ that he might have a point, though clearly reluctant to admit it.", ["conceded", "retorted", "posited"], 0, "concede."),
      mc("\"That's simply not true!\" he said. → He ___ that it was simply not true.", ["retorted", "conceded", "mused"], 0, "retort."),
      fb("She couldn't believe he'd said that. What ___ he take her for? (discurso indirecto libre)", ["did"], "pregunta retórica sin verbo de reporte."),
      mc("\"You must finish this by Friday,\" she said. → She said he ___ finish it by Friday.", ["had to", "must", "should"], 0, "must (obligación) → had to."),
      mc("\"You should apologise,\" he said. → He said she ___ apologise.", ["should", "must", "had to"], 0, "should sin cambio."),
      mc("She looked ___ she hadn't slept in days.", ["as if", "like that", "such as"], 0, "as if + pasado perfecto."),
      mc("He spoke ___ nothing had happened, despite everyone knowing otherwise.", ["as though", "so that", "in case"], 0, "as though."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 4", "Repasa los mazos (géneros literarios, caracterización, crítica literaria, teatro)."),
    vocabEx("Vocabulario — Repaso de la Semana 4", "Elige la opción correcta.", [
      mc("A narrator whose account cannot be fully trusted:", ["unreliable narrator", "protagonist", "motif"], 0, "unreliable narrator."),
      mc("A character who contrasts with another to highlight their traits:", ["foil", "archetype", "voice"], 0, "foil."),
      mc("Careful, detailed textual analysis of a passage:", ["close reading", "canon", "exegesis"], 0, "close reading."),
      mc("A speech delivered by a character alone, revealing inner thoughts:", ["soliloquy", "ensemble", "blocking"], 0, "soliloquy."),
      mc("The body of works considered most important within a field:", ["canon", "hermeneutics", "polysemy"], 0, "canon."),
      mc("A performer who learns a role in case the lead cannot perform:", ["understudy", "ensemble", "dramaturgy"], 0, "understudy."),
      mc("A sudden moment of profound realisation for a character:", ["epiphany", "subtext", "interiority"], 0, "epiphany."),
      mc("Emotional release experienced through drama:", ["catharsis", "blocking", "stagecraft"], 0, "catharsis."),
    ]),

    ...uoe({
      p1: {
        title: "Four weeks into C2",
        text: "Reaching the end of the fourth full week of C2 preparation (1)___ a natural point for reflecting on the considerable, cumulative distance already, genuinely covered across an entire month of sustained, deliberate study. It has long been (2)___ that consistency matters more than any single dramatic breakthrough moment, and this particular week's material — precise reported speech, free indirect discourse, reported modality — represents exactly the kind of literary-register content that most (3)___ distinguishes advanced academic and creative writing from merely competent everyday English. Learners at this stage might feel ___ (4) they had already covered every conceivable formal structure the exam could possibly test; in reality, several further weeks of genuinely new, still unfamiliar material remain carefully, deliberately ahead. It remains far from (5)___ that mastery feels complete at this particular stage, and that particular incompleteness is, in fact, entirely (6)___ given how much genuinely demanding material still lies ahead.",
        q: [
          mc("(1)", ["offers", "marks", "provides", "presents"], 0, "'offers a natural point for reflecting'."),
          mc("(2)", ["argued", "held", "maintained", "contended"], 1, "'It has long been held that'."),
          mc("(3)", ["clearly", "obviously", "plainly", "genuinely"], 0, "'most clearly distinguishes advanced… writing'."),
          mc("(4)", ["as if", "as though", "like", "so that"], 0, "'Learners… might feel as if they had already covered'."),
          mc("(5)", ["obvious", "clear", "certain", "likely"], 1, "'far from clear that mastery feels complete'."),
          mc("(6)", ["expected", "normal", "predictable", "usual"], 0, "'entirely expected given how much… material still lies ahead'."),
        ],
      },
      p2: {
        title: "What indirect speech ultimately teaches",
        text: "What learning to report speech with genuine precision ultimately teaches, beyond the specific grammatical patterns (1)___ themselves, is a kind of careful attentiveness to TONE that serves writers well considerably (2)___ the narrow context of reported speech alone. Choosing between 'conceded' and 'admitted', between 'contended' and 'claimed', requires genuinely careful attention (3)___ subtle differences in implied attitude and register that many learners, understandably, had never previously needed to consciously consider or actively articulate. This heightened (4)___ to tonal nuance, once genuinely developed, transfers usefully to virtually every other kind of writing a learner subsequently, later produces, sharpening their overall sense of how word choice shapes meaning (5)___ merely conveying it. It has become increasingly (6)___, among language teachers specifically, that this particular week's material teaches something considerably more valuable than the specific grammatical patterns covered might initially, superficially suggest on their own.",
        q: [
          fb("(1)", ["involved"], "'the specific grammatical patterns involved themselves'."),
          fb("(2)", ["beyond"], "'serves writers well considerably beyond the narrow context'."),
          fb("(3)", ["to"], "'careful attention to subtle differences'."),
          fb("(4)", ["sensitivity", "attentiveness"], "'This heightened sensitivity/attentiveness to tonal nuance'."),
          fb("(5)", ["beyond", "rather"], "'shapes meaning beyond/rather than merely conveying it'."),
          fb("(6)", ["clear", "apparent", "evident"], "'It has become increasingly clear/apparent/evident'."),
        ],
      },
      p3: {
        title: "The narrative skills that carry forward",
        text: "Having now covered both the precise vocabulary of reported speech and the considerably subtler technique of free indirect discourse, learners approach the coming weeks with a genuinely (1)___ toolkit for handling narrative and perspective in written English. Week Five extends this same narrative (2)___ into formal discourse connectors characteristic of legal and governmental writing — a considerably different register, certainly, but one that shares this week's underlying (3)___ on precision, on choosing exactly the right structure for exactly the intended effect. This progressive (4)___ across weeks is deliberate: each week's material builds directly on genuine competencies the (5)___ weeks have already, carefully established, rather than introducing entirely disconnected, unrelated content each time. Learners who have engaged seriously with this particular week's material should feel genuinely (6)___ heading into the considerably different register Week Five will shortly, deliberately introduce.",
        items: [
          { root: "expand", accepted: ["expanded"], hint: "'a genuinely expanded toolkit' → expanded." },
          { root: "sense", accepted: ["sensitivity"], hint: "'this same narrative sensitivity' → sensitivity." },
          { root: "emphasise", accepted: ["emphasis"], hint: "'shares this week's underlying emphasis' → emphasis." },
          { root: "sequence", accepted: ["sequencing"], hint: "'This progressive sequencing across weeks' → sequencing." },
          { root: "precede", accepted: ["preceding"], hint: "'competencies the preceding weeks have… established' → preceding." },
          { root: "confide", accepted: ["confident"], hint: "'should feel genuinely confident heading into' → confident." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 4",
        items: [
          { s1: "\"Well, I suppose you might have a point,\" she said reluctantly.", key: "CONCEDED", s2: "She ___ that he might have a point.", accepted: ["conceded"], explanation: "concede." },
          { s1: "She thought, \"I will never forgive him for this.\"", key: "NEVER", s2: "She would ___ forgive him for this. (discurso indirecto libre)", accepted: ["never"], explanation: "discurso indirecto libre." },
          { s1: "\"He must be exhausted,\" she said. (deducción)", key: "MUST", s2: "She said he ___ be exhausted.", accepted: ["must"], explanation: "must (deducción) sin cambio." },
          { s1: "It seemed the entire argument had been carefully rehearsed in advance.", key: "IF", s2: "It seemed as ___ the entire argument had been carefully rehearsed in advance.", accepted: ["if"], explanation: "as if + pasado perfecto." },
          { s1: "\"That's absurd!\" the actor said angrily.", key: "RETORTED", s2: "The actor ___ that it was absurd.", accepted: ["retorted"], explanation: "retort." },
          { s1: "\"You should apologise,\" he said.", key: "SHOULD", s2: "He said she ___ apologise.", accepted: ["should"], explanation: "should sin cambio." },
        ],
      },
      p5: {
        title: "What a month of narrative precision builds",
        text: "Language researchers studying advanced second-language acquisition have long noted that learners approaching C2-level competence often report a particular, genuinely distinctive shift in how they personally experience reading authentic literary and journalistic texts in their target language, a shift that tends to become noticeably, measurably more pronounced around precisely this stage of sustained, structured preparation.\n\nBefore reaching this particular stage, many learners report processing reported speech and narrative perspective in a largely mechanical, functional way — correctly identifying grammatical tense shifts and pronoun changes without necessarily, fully registering the considerable tonal and interpretive nuance such choices actually, meaningfully convey to a genuinely fluent native reader encountering the very same text.\n\nAfter sustained, deliberate engagement with precisely this kind of material, however, learners frequently report a qualitatively different reading experience entirely. One learner, describing this specific shift in a widely shared online account of her own C2 preparation, wrote that she'd begun noticing free indirect speech constantly in novels she read for genuine pleasure — moments where she could suddenly, clearly perceive a narrator's voice subtly blending with a character's own private, subjective perspective in ways she'd apparently, entirely missed before this particular stage of her own study.\n\n\"It felt,\" she wrote, \"as though I'd been reading with only half my genuine attention properly engaged this whole time, without ever really, consciously realising it until this specific point in my studies.\" She conceded that this heightened awareness occasionally slowed her reading down somewhat, at least initially, as she found herself actively noticing structures she'd previously read straight past without any real conscious registration at all.\n\nOther learners report broadly similar experiences with precise reported speech verbs specifically, suddenly noticing the careful, deliberate distinction a skilled writer draws between a character who 'concedes' a point reluctantly and one who 'maintains' their original position stubbornly, distinctions many learners had previously, simply flattened into an undifferentiated, generic 'said' without ever really noticing the considerable difference.\n\nWhat this particular pattern suggests, researchers increasingly contend, is that grammatical mastery at this advanced level involves something considerably more than simple correct production alone. It involves a fundamental, meaningful shift in how a learner actually perceives and processes authentic language more broadly — noticing distinctions native speakers themselves often process automatically, entirely without conscious effort, but which advanced learners must first, deliberately learn to consciously notice before eventually, gradually internalising them as comfortable, automatic second nature.",
        q: [
          mc("What shift do researchers note in learners approaching this stage?", ["No change at all.", "A distinctive shift in how they experience reading authentic texts.", "Reduced interest in reading.", "Improved vocabulary only."], 1, "'learners… often report a particular, genuinely distinctive shift in how they personally experience reading authentic literary… texts'."),
          mc("How did many learners process reported speech before this stage?", ["Perfectly, with full nuance.", "Mechanically, without fully registering tonal nuance.", "Not at all.", "Only in formal writing."], 1, "'processing reported speech and narrative perspective in a largely mechanical, functional way'."),
          mc("What did one learner notice constantly after this stage?", ["Nothing changed.", "Free indirect speech in novels she read for pleasure.", "Grammar errors in published novels.", "That she disliked reading now."], 1, "'she'd begun noticing free indirect speech constantly in novels she read for genuine pleasure'."),
          mc("What did she concede about this heightened awareness?", ["It made reading impossible.", "It occasionally slowed her reading down, at least initially.", "It had no effect at all.", "It only helped with grammar tests."], 1, "'She conceded that this heightened awareness occasionally slowed her reading down somewhat'."),
          mc("What distinction do other learners report noticing in reported speech verbs?", ["No distinction exists.", "The difference between 'concedes' reluctantly and 'maintains' stubbornly.", "Only vocabulary differences.", "Spelling differences."], 1, "'suddenly noticing the careful, deliberate distinction… between a character who 'concedes' a point reluctantly and one who 'maintains' their original position'."),
          mc("What do researchers ultimately suggest this pattern shows?", ["Grammar mastery is purely mechanical.", "Mastery involves a shift in how learners perceive and process language.", "Advanced learners never truly master this.", "Native speakers also struggle with this."], 1, "'grammatical mastery at this advanced level involves… a fundamental, meaningful shift in how a learner actually perceives and processes authentic language'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Four weeks into a demanding, cumulative C2 preparation course marks a genuinely meaningful milestone, roughly one-third of the way through the entire structured programme. (1)___\n\nThe material covered this particular week — precise reported speech, free indirect discourse, reported modality — represents some of the most genuinely literary content the entire course actually offers, material considerably closer to creative writing craft than to conventional grammar instruction in any narrow, traditional sense. (2)___ This distinctiveness partly explains why the week can feel qualitatively different from more grammar-focused weeks that preceded it.\n\nWhat makes this particular material genuinely valuable, beyond its direct relevance to the actual exam itself, is its broader transferability to virtually any serious writing a learner subsequently produces in English. (3)___ Precision in reporting speech and perspective sharpens a writer's overall sense of tone and register well beyond this narrow grammatical context alone.\n\nLearners at this specific four-week stage should feel genuinely, legitimately encouraged by how much has already been covered and meaningfully absorbed, even while recognising honestly that further substantial material still lies ahead. (4)___ Feeling simultaneously accomplished and humbled is, at this particular stage, an entirely normal, expected combination of feelings to hold.\n\nEight weeks remain before the course's own final stretch properly begins in earnest. (5)___ That remaining time allows ample, genuine opportunity for the kind of sustained, cumulative practice that gradually, reliably transforms initially effortful, conscious structures into comfortable, automatic second nature.\n\nFor now, the specific, practical task is simply continuing steadily, without either excessive self-congratulation or excessive self-criticism about the considerable, ongoing distance still left to travel. (6)___ Both feelings, held with appropriate lightness, can comfortably coexist throughout the remainder of this demanding, worthwhile journey.",
        options: [
          "That fraction is worth naming plainly.",  // A -> gap1
          "It reads more like craft than like conventional rule.", // B -> gap2
          "The skill travels considerably further than the exam alone.", // C -> gap3
          "Neither feeling cancels the other one out.", // D -> gap4
          "That's a genuinely reasonable amount of remaining runway.", // E -> gap5
          "Steady, unglamorous continuation is really the entire task now.", // F -> gap6
          "No learner has ever found reported speech genuinely useful.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa fracción merece nombrarse claramente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: se lee más como oficio que como regla."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la destreza va más allá del examen."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ningún sentimiento anula al otro."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: queda un margen razonable de tiempo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: continuar con constancia es la tarea ahora."),
        ],
      },
      p7: {
        title: "Four learners reflect on their fourth week of C2 study",
        text: "Read what four learners say about their fourth week of studying for the C2 exam.\n\nA) NADIA: I've genuinely started noticing free indirect speech everywhere now, as though a switch had somehow, suddenly flipped in how I actually read English fiction. It's honestly changed my whole reading experience completely.\n\nB) TOM: This week felt considerably more like studying literary craft than grammar, if I'm honest. I conceded early on that I initially found that shift genuinely disorienting, though I've since come to appreciate it enormously.\n\nC) PRIYA: Choosing precisely between 'conceded' and 'maintained' in my own writing now feels meaningfully different than it did a month ago. I contend that this precision genuinely matters more than most learners initially, mistakenly assume.\n\nD) SAM: It felt, honestly, as if this week asked more of me creatively than any previous week had. That said, I maintain it was genuinely worth every bit of the considerable extra effort involved.\n",
        q: [
          mc("Who started noticing free indirect speech everywhere, changing their reading experience?", ["A", "B", "C", "D"], 0, "Nadia: 'I've genuinely started noticing free indirect speech everywhere now… It's honestly changed my whole reading experience'."),
          mc("Who found this week felt more like literary craft than grammar?", ["A", "B", "C", "D"], 1, "Tom: 'This week felt considerably more like studying literary craft than grammar'."),
          mc("Who contends precision between reporting verbs matters more than assumed?", ["A", "B", "C", "D"], 2, "Priya: 'I contend that this precision genuinely matters more than most learners initially… assume'."),
          mc("Who felt this week asked more of them creatively than any previous week?", ["A", "B", "C", "D"], 3, "Sam: 'It felt… as if this week asked more of me creatively than any previous week had'."),
          mc("Who conceded initially finding the shift genuinely disorienting?", ["A", "B", "C", "D"], 1, "Tom: 'I conceded early on that I initially found that shift genuinely disorienting'."),
          mc("Who says choosing between reporting verbs feels meaningfully different now?", ["A", "B", "C", "D"], 2, "Priya: 'Choosing precisely between 'conceded' and 'maintained'… now feels meaningfully different'."),
          mc("Who maintains the extra effort was genuinely worth it?", ["A", "B", "C", "D"], 3, "Sam: 'I maintain it was genuinely worth every bit of the considerable extra effort'."),
          mc("Who describes feeling as though a switch had flipped in how they read?", ["A", "B", "C", "D"], 0, "Nadia: 'as though a switch had somehow, suddenly flipped in how I actually read English fiction'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el aprendizaje avanzado de idiomas y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Studying literary techniques like free indirect speech, even for exam purposes, genuinely transforms how learners read and write more broadly. This transferable benefit justifies the considerable time invested in material some might dismiss as narrowly exam-focused.'\n\nTEXTO 2: 'Exam preparation should focus primarily on structures the exam actually tests directly, not on broader literary appreciation, however genuinely valuable that appreciation might be in other contexts. Time is limited, and efficiency should be the primary consideration.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES recursos distintos de la Semana 4. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What four weeks of C2 study has taught me' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre estas primeras cuatro semanas.\n· REVIEW de un recurso, app o método que te haya ayudado a estudiar inglés a este nivel.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their reading habits. Woman: I've genuinely started noticing free indirect speech everywhere now, as though a switch had flipped. Man: Same here — it's honestly changed how I read fiction completely. Extract Two. You hear two friends discussing precise vocabulary. Man: Choosing between 'conceded' and 'maintained' feels meaningfully different than it did a month ago for me now. Woman: I contend that precision genuinely matters more than most people initially assume, actually. Extract Three. You hear two candidates discussing this week's material. Woman: It felt as if this week asked more of me creatively than any previous week had, honestly. Man: I'd maintain it was genuinely worth every bit of the extra effort involved, though.", [
      mc("1. What does the woman say has changed for her?", ["Nothing at all.", "She's started noticing free indirect speech everywhere.", "She's stopped reading fiction.", "Her vocabulary has decreased."], 1, "'I've genuinely started noticing free indirect speech everywhere now'."),
      mc("2. What does the man say about this change?", ["It made no difference.", "It's changed how he reads fiction completely.", "He disagrees with the woman.", "He never noticed anything."], 1, "'it's honestly changed how I read fiction completely'."),
      mc("3. How does choosing between reporting verbs feel to the man now?", ["Identical to before.", "Meaningfully different than it did a month ago.", "Impossible to do.", "Unimportant."], 1, "'Choosing between 'conceded' and 'maintained' feels meaningfully different than it did a month ago'."),
      mc("4. What does the woman contend?", ["Precision doesn't matter.", "Precision genuinely matters more than most people assume.", "Vocabulary is unimportant.", "Grammar is more important than vocabulary."], 1, "'I contend that precision genuinely matters more than most people initially assume'."),
      mc("5. How did this week feel to the woman?", ["Easier than previous weeks.", "It asked more of her creatively than any previous week.", "Identical to other weeks.", "Not demanding at all."], 1, "'It felt as if this week asked more of me creatively than any previous week had'."),
      mc("6. What does the man maintain about the effort involved?", ["It wasn't worth it.", "It was genuinely worth every bit of the extra effort.", "He didn't put in extra effort.", "It was too easy."], 1, "'I'd maintain it was genuinely worth every bit of the extra effort involved'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en esta cuarta semana que te resulte más útil", p2: "dos imágenes del aprendizaje de la narrativa (alguien leyendo con expresión de sorpresa o revelación y una persona escribiendo con atención en un cuaderno): comentadlas y decidid cuál representa mejor cómo se interioriza una técnica narrativa nueva", p3: "qué método es más eficaz para dominar el estilo indirecto con precisión (leer literatura auténtica, practicar con verbos de reporte variados, reescribir textos propios, recibir feedback específico, analizar ejemplos comentados): comentadlo y decidid el más eficaz", p4: "el aprendizaje de la narrativa y el estilo indirecto: si aprender técnicas literarias mejora la escritura general más allá del examen, cómo cambia la experiencia de lectura al dominar recursos narrativos avanzados, y si la precisión léxica importa tanto como la corrección gramatical" }),

    SUMMARY("Resumen de la Semana 4 (C2)", [
      "Dominas los verbos de reporte de matiz fino, el discurso indirecto libre, la modalidad reportada, y as though/as if en contexto indirecto.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes (240-280/280-320) y el Speaking P1–P3 con temas de literatura, narrativa, crítica literaria y teatro.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los CONECTORES DE REGISTRO MUY FORMAL/LITERARIO (notwithstanding, insofar as, by the same token), con el derecho y la gobernanza.",
    ]),
    INFO("Mini-simulacro de la Semana 4", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 5."),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "El estilo indirecto con verbos de matiz fino y el discurso indirecto libre · La literatura y la narrativa",
  description: "Verbos de reporte de precisión, el discurso indirecto libre (free indirect speech), la modalidad reportada, y as though/as if en contexto indirecto, con el hilo de la literatura, la narrativa, la crítica literaria y el teatro. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
