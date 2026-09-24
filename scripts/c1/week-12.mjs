/**
 * C1 Advanced · Semana 12 — "La recta final · El trabajo en equipo, los viajes, la comunicación no verbal y el día del examen".
 * Última semana: práctica cronometrada en condiciones de examen real para
 * cada destreza, repaso global de errores típicos de todo el curso, y una
 * guía completa del día del examen. Día 60 cierra el curso y dispara el
 * SIMULACRO FINAL (build-course.mjs lo añade automáticamente).
 * Cada día, las 4 destrezas con el formato real del C1.
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

// ───────────────────────── DÍA 56 ─────────────────────────
const DAY56 = {
  title: "Día 56 — Simulacro cronometrado: Reading & Use of English (90 min) · El trabajo en equipo y las habilidades blandas",
  description: "Práctica completa y cronometrada del Reading & Use of English (90 min, 8 partes) en condiciones de examen real, seguida de repaso global de errores típicos de todo el curso. Vocabulario del trabajo en equipo. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Completar un Reading & Use of English completo en 90 minutos reales, aplicando toda la gramática y estrategia del curso.",
    summary: "Simulacro cronometrado de Reading & Use of English; trabajo en equipo; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    reviewPrompts: ["¿Terminaste las 8 partes dentro de los 90 minutos?", "¿En qué parte perdiste más tiempo? Ese es tu punto a reforzar esta semana."],
  },
  items: [
    TEXT("🏁 SEMANA 12 — LA RECTA FINAL. Ya tienes toda la gramática (Semanas 1-10) y toda la estrategia (Semana 11). Esta semana, PRACTICA EN CONDICIONES REALES. Hoy: Reading & Use of English completo, cronometrado a 90 minutos. Vocabulario: el TRABAJO EN EQUIPO y las HABILIDADES BLANDAS."),
    GRAMMAR("Antes de empezar — checklist del Reading & Use of English", `⏱️ Pon un cronómetro a 90 minutos AHORA, antes de empezar las 8 partes de Use of English de hoy. No pauses el cronómetro.
CHECKLIST rápido (repaso de toda la Semana 11):
· P1-P4 ≈30-35min: lee el texto entero en P1, piensa en estructura en P2, identifica la función gramatical en P3, cuenta palabras en P4.
· P5-P8 ≈50-55min: preguntas antes que texto en P5, lee los 4 textos primero en P6, verifica conexión en ambas direcciones en P7, cuidado con el orden de preguntas en P8.
· Reserva 5 min al final para revisar huecos en blanco.
Al terminar, anota: ¿en qué parte tardaste más de lo previsto? Ese es tu punto débil a reforzar en los próximos días antes del Simulacro Final.`),
    WARN("Repaso de errores típicos de TODO el curso (Reading & Use of English)", "· Subjuntivo: 'It is essential that he BE informed' (no 'is').\n· Relativas reducidas: solo se puede omitir el pronombre si es OBJETO, o usar participio si el sujeto coincide.\n· Cross-text matching (P6): busca coincidencia/discrepancia de OPINIÓN, no de tema general.\n· Gapped text (P7): verifica conexión gramatical en AMBAS direcciones (antes y después del hueco).\n· Conectores de énfasis (no sooner/hardly/such) exigen INVERSIÓN al inicio de frase.\n· Nominalización: cuidado con preposiciones fijas (reliance ON, awareness OF, commitment TO)."),
    grammarEx("Use of English — Repaso global de errores típicos", "Elige la opción correcta (repaso de las 12 semanas).", [
      mc("It is essential that every team member ___ informed of the decision.", ["is", "be", "was"], 1, "subjuntivo: be."),
      mc("The report, ___ by the committee, sparked considerable debate.", ["publishing", "published", "was published"], 1, "relativa reducida: (which was) published."),
      mc("No sooner ___ the meeting begun than a disagreement arose.", ["had", "was", "did"], 0, "no sooner… than + inversión: had."),
      fb("Their heavy ___ on a single supplier left the team exposed. (rely, nominalización)", ["reliance"], "rely → reliance."),
      mc("With the deadline ___, the team worked through the weekend.", ["approaching", "approached", "approach"], 0, "construcción absoluta: approaching (activo)."),
      mc("Such ___ the pressure that the whole team nearly gave up.", ["was", "did", "is"], 0, "such + be + sustantivo + that: was."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo en equipo y las habilidades blandas (C1)", "Léxico avanzado de trabajo en equipo."),
    deck("C1 S12D56 — Trabajo en equipo y habilidades blandas", [
      ["collaboration", "colaboración", "Genuine collaboration requires mutual trust.", "sustantivo", "kəˌlæbəˈreɪʃn"],
      ["consensus", "consenso", "The team eventually reached consensus.", "sustantivo", "kənˈsensəs"],
      ["accountability", "rendición de cuentas / responsabilidad", "Clear accountability improved team performance.", "sustantivo", "əˌkaʊntəˈbɪləti"],
      ["synergy", "sinergia", "The merger created genuine operational synergy.", "sustantivo", "ˈsɪnədʒi"],
      ["groupthink", "pensamiento grupal (negativo)", "Groupthink led the team to overlook obvious risks.", "sustantivo", "ˈgruːpθɪŋk"],
      ["delegate", "delegar", "Effective leaders know when to delegate tasks.", "verbo", "ˈdelɪgeɪt"],
      ["constructive feedback", "retroalimentación constructiva", "Constructive feedback helped the team improve quickly.", "sustantivo", "kənˈstrʌktɪv ˈfiːdbæk"],
      ["interpersonal skills", "habilidades interpersonales", "Strong interpersonal skills are highly valued by employers.", "sustantivo", "ˌɪntəˈpɜːsənl skɪlz"],
      ["conflict resolution", "resolución de conflictos", "The workshop focused on conflict resolution techniques.", "sustantivo", "ˈkɒnflɪkt ˌrezəˈluːʃn"],
      ["cohesive", "cohesionado/a", "A cohesive team outperforms a group of talented individuals.", "adjetivo", "kəʊˈhiːsɪv"],
    ]),
    vocabEx("Vocabulario — El trabajo en equipo y las habilidades blandas", "Elige la opción correcta.", [
      mc("General agreement reached by a group:", ["consensus", "groupthink", "delegation"], 0, "consensus."),
      mc("The tendency of a group to avoid critically evaluating ideas:", ["groupthink", "consensus", "synergy"], 0, "groupthink."),
      mc("To assign a task or responsibility to someone else:", ["delegate", "collaborate", "reconcile"], 0, "delegate."),
      mc("Being held responsible for one's actions or decisions:", ["accountability", "synergy", "cohesion"], 0, "accountability."),
      mc("Feedback intended to help someone improve, given supportively:", ["constructive feedback", "groupthink", "consensus"], 0, "constructive feedback."),
      mc("United and working well together as a group:", ["cohesive", "toxic", "disengaged"], 0, "cohesive."),
    ]),

    ...uoe({
      p1: {
        title: "Why some teams outperform others",
        text: "Organisational researchers studying team performance have long sought to identify precisely what (1)___ genuinely high-performing teams apart from otherwise comparably talented groups that nonetheless underperform relative to their apparent potential. Raw individual talent alone, it turns out, correlates only (2)___ with actual team success, a finding that initially surprised many researchers steeped in individualist assumptions about performance. What matters at least as much, subsequent research has (3)___, is psychological safety — team members' genuine confidence that voicing concerns or disagreement won't (4)___ negative professional consequence. Teams lacking this safety frequently fall (5)___ groupthink, silently suppressing genuine doubts rather than risking uncomfortable, potentially career-damaging disagreement. Given (6)___ consequential this dynamic proves, many organisations now invest considerably more deliberately in building genuine psychological safety than in simply recruiting individually talented team members.",
        q: [
          mc("(1)", ["sets", "makes", "puts", "places"], 0, "'what sets… teams apart'."),
          mc("(2)", ["weakly", "loosely", "softly", "mildly"], 0, "'correlates only weakly with'."),
          mc("(3)", ["revealed", "shown", "exposed", "uncovered"], 0, "'research has revealed'."),
          mc("(4)", ["invite", "attract", "provoke", "trigger"], 0, "'won't invite negative… consequence'."),
          mc("(5)", ["into", "to", "towards", "onto"], 0, "'fall into groupthink'."),
          mc("(6)", ["how", "so", "such", "that"], 0, "'Given how consequential this dynamic proves'."),
        ],
      },
      p2: {
        title: "The art of delegation",
        text: "Many newly promoted managers struggle considerably (1)___ delegation, often continuing to handle tasks personally that a properly functioning team could, and genuinely should, manage independently. This reluctance stems less (2)___ any conscious distrust of team members than from a deeply ingrained, often unconscious belief that maintaining direct personal control somehow guarantees better outcomes. Effective delegation, by (3)___, requires genuine trust combined with clear accountability — assigning not merely a task itself, but genuine ownership over both the task and its eventual outcome. Managers (4)___ delegate effectively free up their own time for genuinely higher-level strategic work, while simultaneously building team members' own capability and confidence. It is essential, management experts increasingly (5)___, that new managers receive explicit training in delegation specifically, rather (6)___ simply assuming this particular skill will somehow develop naturally through mere experience alone.",
        q: [
          fb("(1)", ["with"], "'struggle considerably with delegation'."),
          fb("(2)", ["from"], "'stems less from any conscious distrust'."),
          fb("(3)", ["contrast"], "'by contrast, requires genuine trust'."),
          fb("(4)", ["who", "that"], "'Managers who/that delegate effectively'."),
          fb("(5)", ["argue", "insist", "maintain"], "'experts increasingly argue/insist/maintain'."),
          fb("(6)", ["than"], "'rather than simply assuming'."),
        ],
      },
      p3: {
        title: "Resolving conflict constructively",
        text: "Workplace conflict, contrary to popular (1)___, is not inherently harmful to team performance; poorly managed conflict is. Teams that entirely avoid genuine (2)___ often suffer from precisely the kind of groupthink that silently undermines decision quality over time. What genuinely distinguishes high-performing teams is not the absence of disagreement, but rather considerable (3)___ in how that disagreement gets handled and eventually, productively resolved. Constructive conflict resolution requires specific, learnable (4)___: active listening, genuine curiosity about opposing viewpoints, and a shared, explicit commitment to the team's broader (5)___ over any single individual's personal need to simply be proven right. Organisations investing seriously in this specific (6)___ report measurably stronger team cohesion and considerably better long-term decision-making outcomes.",
        items: [
          { root: "assume", accepted: ["assumption"], hint: "'contrary to popular assumption' → assumption." },
          { root: "disagree", accepted: ["disagreement"], hint: "'entirely avoid genuine disagreement' → disagreement." },
          { root: "skill", accepted: ["skill"], hint: "'considerable skill in how… handled' (sustantivo)." },
          { root: "compete", accepted: ["competencies", "competence"], hint: "'specific, learnable competencies' → competencies." },
          { root: "object", accepted: ["objectives"], hint: "'the team's broader objectives' → objectives." },
          { root: "train", accepted: ["training"], hint: "'investing… in this specific training' → training." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso global (todo el curso)",
        items: [
          { s1: "It's essential that every team member be informed of the decision.", key: "BE", s2: "It is essential that every team member ___ informed of the decision.", accepted: ["be"], explanation: "subjuntivo: base form." },
          { s1: "The team relied heavily on one supplier, which left it exposed.", key: "RELIANCE", s2: "The team's heavy ___ on one supplier left it exposed.", accepted: ["reliance"], explanation: "nominalización: rely → reliance." },
          { s1: "The meeting had barely begun when a disagreement arose.", key: "SOONER", s2: "No ___ had the meeting begun than a disagreement arose.", accepted: ["sooner"], explanation: "no sooner… than." },
          { s1: "Because the deadline was approaching, the team worked through the weekend.", key: "APPROACHING", s2: "With the deadline ___, the team worked through the weekend.", accepted: ["approaching"], explanation: "construcción absoluta." },
          { s1: "The pressure was so great that the team nearly gave up.", key: "SUCH", s2: "___ was the pressure that the team nearly gave up.", accepted: ["such"], explanation: "such… that." },
        ],
      },
      p5: {
        title: "The team that learned to disagree",
        text: "When a newly formed product development team began missing deadline after deadline despite containing what most observers agreed was genuinely exceptional individual talent, the company's leadership initially assumed the problem must be inadequate resources or simply overly ambitious project scope.\n\nAn external consultant brought in to diagnose the underlying problem reached a rather different, considerably less comfortable conclusion after observing several team meetings closely. The team, she noted, exhibited a strikingly uniform pattern: meetings proceeded smoothly, decisions were reached with apparent, notable ease, and genuine disagreement almost never surfaced openly during discussion itself.\n\nThis superficial harmony, she suspected almost immediately, was not evidence of genuine alignment but rather a troubling symptom of exactly the groupthink dynamic organisational researchers had long warned about. Team members, she discovered through careful, confidential individual conversations conducted separately afterwards, frequently harboured serious private doubts about specific decisions that nobody had ever felt genuinely safe enough to voice openly during the team's actual meetings.\n\nHaving identified psychological safety, or rather its conspicuous absence, as the team's genuine core problem, the consultant proposed an intervention that struck several senior managers as, initially, distinctly counterintuitive: rather than trying to eliminate conflict entirely, the team needed to deliberately, actively cultivate considerably more of it, in carefully structured, genuinely constructive form.\n\nShe introduced a specific structured practice: before any significant decision, at least one team member was formally, explicitly assigned the role of deliberately identifying weaknesses in the proposed plan, regardless of their own actual personal opinion on its merits. This formalised, rotating role removed the social risk that had previously silenced genuine dissent, since raising objections was now an explicit, expected part of one's assigned role rather than a personally risky individual choice.\n\nThe early results proved, predictably enough, somewhat uncomfortable. Meetings grew noticeably longer and, at least initially, considerably more contentious than the team's previous artificially smooth harmony had ever allowed. Several team members privately admitted finding the new, more openly confrontational dynamic genuinely stressful during this difficult initial transition period.\n\nWithin a few months, however, project quality improved measurably and substantially. Decisions, once actually made, proved considerably more robust, having already been genuinely stress-tested through structured internal disagreement before ever reaching external stakeholders or customers. Deadline performance improved correspondingly, largely because problems were now being caught and addressed considerably earlier, before they could quietly compound into much larger, more costly issues down the line.\n\nThe team's eventual transformation offered a broader, genuinely instructive lesson that the consultant subsequently carried into much of her later, ongoing consulting work: teams that studiously avoid all visible conflict are rarely, in fact, genuinely aligned teams; they are often simply teams where genuine disagreement has been quietly, systematically suppressed rather than constructively, openly resolved.",
        q: [
          mc("What had leadership initially assumed was the team's problem?", ["Poor individual talent.", "Inadequate resources or overly ambitious scope.", "Too much conflict.", "Lack of deadlines."], 1, "'the company's leadership initially assumed the problem must be inadequate resources or… overly ambitious project scope'."),
          mc("What did the consultant notice about team meetings?", ["Frequent open disagreement.", "Superficial harmony with almost no open disagreement.", "Chaos and disorganisation.", "Too many meetings."], 1, "'meetings proceeded smoothly… genuine disagreement almost never surfaced openly'."),
          mc("What did individual conversations reveal?", ["Complete agreement with all decisions.", "Team members harboured private doubts never voiced openly.", "No one had any concerns.", "Team members wanted to leave."], 1, "'Team members… frequently harboured serious private doubts about specific decisions that nobody had ever felt genuinely safe enough to voice'."),
          mc("What intervention did the consultant propose?", ["Eliminating all conflict entirely.", "Deliberately cultivating structured, constructive conflict via a rotating role.", "Firing underperforming members.", "Reducing team size."], 1, "'the team needed to deliberately, actively cultivate considerably more of it, in carefully structured… form… a specific structured practice'."),
          mc("What happened initially after the intervention?", ["Immediate improvement with no difficulty.", "Meetings grew longer and more contentious, causing some stress.", "Nothing changed at all.", "The team disbanded."], 1, "'Meetings grew noticeably longer and… considerably more contentious… Several team members privately admitted finding the new… dynamic genuinely stressful'."),
          mc("What was the eventual outcome?", ["Project quality declined.", "Project quality improved measurably, with better deadline performance.", "No measurable change.", "The team was disbanded."], 1, "'project quality improved measurably and substantially… Deadline performance improved correspondingly'."),
        ],
      },
      p6: {
        title: "Does remote work make effective teamwork harder?",
        intro: "Cuatro personas debaten si el trabajo remoto dificulta el trabajo en equipo eficaz.",
        texts: {
          A: "NADIA: In my experience, genuinely yes, at least for certain kinds of collaboration. The spontaneous, informal exchanges that build genuine trust and rapport happen considerably less naturally over video calls than they did when people simply shared the same physical space day to day.",
          B: "TOM: I'd push back on that somewhat. Remote teams that deliberately, consciously build structured opportunities for genuine connection — regular informal check-ins, virtual social time — can build comparably strong rapport; it just requires considerably more deliberate effort than proximity alone used to provide for free.",
          C: "PRIYA: What I'd add is that remote work has genuinely improved certain kinds of collaboration specifically, particularly for teams distributed across different time zones who previously struggled considerably to collaborate effectively at all under earlier, more rigid working arrangements.",
          D: "SAM: My honest view is that this depends enormously on the specific type of task involved. Routine, well-defined work seems to translate well to remote settings; genuinely creative, exploratory collaboration still seems to benefit considerably from actual physical proximity, at least in my own direct experience.",
        },
        q: [
          mc("Who believes remote work genuinely makes teamwork harder?", ["A", "B", "C", "D"], 0, "Nadia: 'genuinely yes, at least for certain kinds of collaboration'."),
          mc("Whose view most directly QUALIFIES Nadia's, arguing deliberate effort can build comparable rapport?", ["A", "B", "C", "D"], 1, "Tom: 'Remote teams that deliberately… build structured opportunities… can build comparably strong rapport'."),
          mc("Who argues remote work has improved collaboration for distributed teams?", ["A", "B", "C", "D"], 2, "Priya: 'remote work has genuinely improved certain kinds of collaboration specifically… for teams distributed across… time zones'."),
          mc("Who argues it depends on the specific type of task involved?", ["A", "B", "C", "D"], 3, "Sam: 'this depends enormously on the specific type of task involved'."),
        ],
      },
      p7: {
        title: "What psychological safety actually means",
        text: "The term 'psychological safety' has become something of a buzzword in contemporary management literature, appearing constantly in leadership training and organisational development programmes across countless industries. (1)___\n\nThis widespread popularity, however, has arguably come at some cost to genuine precision. (2)___ The term gets applied loosely to almost any positive team dynamic, diluting its actual, specific, originally intended meaning considerably.\n\nPsychological safety, properly and precisely understood, refers specifically to team members' confidence that voicing a mistake, question, concern or dissenting idea won't result in punishment, humiliation or other genuine negative consequence. (3)___ It is not the same thing as simple comfort, niceness, or the mere absence of any conflict whatsoever.\n\nIndeed, genuinely psychologically safe teams often exhibit considerably MORE visible disagreement than unsafe ones, not less. (4)___ Safety here means disagreement can happen openly and productively, not that it never happens at all.\n\nThis distinction matters enormously in practice. (5)___ Leaders who mistake superficial team harmony for genuine psychological safety may be inadvertently cultivating precisely the groupthink dynamic that safety, properly understood, is actually designed to prevent.\n\nBuilding genuine psychological safety, then, requires more than simply being pleasant or agreeable as a leader. (6)___ It requires actively, deliberately rewarding the specific courage it takes to disagree, especially with someone considerably more senior.",
        options: [
          "That ubiquity comes with a genuine cost of its own.", // A -> gap1
          "Precision, somewhere along the way, has quietly slipped.", // B -> gap2
          "That specific definition matters more than it might first seem.", // C -> gap3
          "Visible disagreement, in fact, can be a healthy sign.", // D -> gap4
          "Confusing the two leads leaders astray in a specific, costly way.", // E -> gap5
          "It requires something considerably more deliberate than mere pleasantness.", // F -> gap6
          "No manager has ever misunderstood this particular term.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa ubicuidad tiene un coste propio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la precisión se ha ido perdiendo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa definición concreta importa más de lo que parece."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el desacuerdo visible puede ser una señal sana."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: confundir ambas cosas desvía a los líderes de forma costosa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: requiere algo más deliberado que la mera amabilidad."),
        ],
      },
      p8: {
        title: "Four people discuss what makes their team work well",
        text: "Read what four people say about what makes their own team genuinely work well together.\n\nA) NADIA: Honestly, it's psychological safety, in the properly precise sense. Nobody on my team hesitates to say 'I think this is a mistake' directly to our manager, and that direct honesty has caught several genuinely serious problems early, well before they became much bigger issues.\n\nB) TOM: For us it's clear, well-defined accountability. Everyone genuinely knows exactly what they're specifically responsible for, which eliminates most of the ambiguity that, in my previous team, used to cause considerable, ongoing friction and duplicated effort.\n\nC) PRIYA: What works for my team is deliberately structured conflict. We formally, explicitly assign someone to argue against every major proposal before we finalise it, regardless of their own personal opinion. It feels artificial at first, but it genuinely, measurably catches real weaknesses.\n\nD) SAM: Honestly, it's simply mutual respect built up gradually over considerable time. We've worked together for years now, and that accumulated shared history means we can disagree quite openly without anyone taking it as any kind of personal attack.\n",
        q: [
          mc("Who credits psychological safety, in the precise sense, for catching problems early?", ["A", "B", "C", "D"], 0, "Nadia: 'it's psychological safety, in the properly precise sense… caught several genuinely serious problems early'."),
          mc("Who credits clear, well-defined accountability?", ["A", "B", "C", "D"], 1, "Tom: 'For us it's clear, well-defined accountability'."),
          mc("Who credits deliberately structured conflict, assigning someone to argue against proposals?", ["A", "B", "C", "D"], 2, "Priya: 'What works for my team is deliberately structured conflict… assign someone to argue against every major proposal'."),
          mc("Who credits mutual respect built up over years?", ["A", "B", "C", "D"], 3, "Sam: 'it's simply mutual respect built up gradually over considerable time'."),
          mc("Who mentions eliminating ambiguity that caused friction in a previous team?", ["A", "B", "C", "D"], 1, "Tom: 'eliminates most of the ambiguity that, in my previous team, used to cause considerable… friction'."),
          mc("Who says the approach feels artificial at first but measurably catches weaknesses?", ["A", "B", "C", "D"], 2, "Priya: 'It feels artificial at first, but it genuinely, measurably catches real weaknesses'."),
          mc("Who says team members can disagree without it being taken as a personal attack?", ["A", "B", "C", "D"], 3, "Sam: 'we can disagree quite openly without anyone taking it as any kind of personal attack'."),
          mc("Who mentions nobody hesitating to say something is a mistake directly to the manager?", ["A", "B", "C", "D"], 0, "Nadia: 'Nobody on my team hesitates to say 'I think this is a mistake' directly to our manager'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el trabajo en equipo se plantearon dos ideas:\n· harmony and agreement are essential for effective teamwork (la armonía es esencial)\n· healthy disagreement improves team decisions (el desacuerdo sano mejora las decisiones)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para tu empresa/universidad sobre cómo mejorar la colaboración en equipo: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'What makes a team work well' — reflexiona con un ejemplo personal o hipotético.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two managers discussing team performance. Woman: The team's biggest issue, honestly, was groupthink — nobody ever voiced genuine concerns openly. Man: Psychological safety, or the lack of it, explains a great deal in situations like that. Extract Two. You hear two colleagues discussing delegation. Man: I used to struggle considerably with delegation, if I'm honest. Woman: Same here — it took real trust before I could genuinely let go of tasks I used to handle personally. Extract Three. You hear two employees discussing conflict at work. Woman: Constructive conflict, properly handled, actually improved our decisions considerably. Man: Agreed — the problem was never disagreement itself, but how poorly we used to handle it.", [
      mc("1. What was the team's biggest issue, according to the woman?", ["Poor individual talent.", "Groupthink.", "Lack of deadlines."], 1, "'The team's biggest issue, honestly, was groupthink'."),
      mc("2. What does the man say explains this?", ["Bad luck.", "Psychological safety, or the lack of it.", "Poor management training."], 1, "'Psychological safety, or the lack of it, explains a great deal'."),
      mc("3. What did the man used to struggle with?", ["Communication.", "Delegation.", "Decision-making."], 1, "'I used to struggle considerably with delegation'."),
      mc("4. What did the woman need before delegating?", ["More staff.", "Real trust.", "A formal policy."], 1, "'it took real trust before I could genuinely let go of tasks'."),
      mc("5. What did constructive conflict do for the woman's team?", ["Damaged team morale.", "Improved their decisions considerably.", "Had no effect."], 1, "'Constructive conflict, properly handled, actually improved our decisions considerably'."),
      mc("6. What does the man say the real problem was?", ["Disagreement itself.", "How poorly they used to handle disagreement.", "Too much harmony."], 1, "'the problem was never disagreement itself, but how poorly we used to handle it'."),
    ]),

    ...speakingParts({ p1: "cómo prefieres trabajar: en equipo o de forma independiente, y por qué", p2: "dos imágenes del trabajo en equipo (un grupo debatiendo activamente en una reunión y dos personas colaborando en un proyecto creativo): compáralas y especula sobre lo que siente cada persona", p3: "qué es más importante para un equipo eficaz (la confianza mutua, la comunicación clara, objetivos compartidos, roles bien definidos, la capacidad de resolver conflictos): comentadlo y elegid lo más decisivo", p4: "el trabajo en equipo: si el desacuerdo es realmente saludable para un equipo, qué papel tiene el liderazgo en fomentar la seguridad psicológica, y si el trabajo remoto ha cambiado fundamentalmente cómo colaboramos" }),

    SUMMARY("Resumen del Día 56", [
      "Simulacro cronometrado de Reading & Use of English (90 min) + repaso global de errores típicos: subjuntivo, relativas reducidas, cross-text matching, gapped text, conectores de énfasis, nominalización.",
      "Vocabulario del trabajo en equipo. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 57", "Anota tu punto débil de hoy (la parte donde más tardaste). Repasa el vocabulario de trabajo en equipo. Mañana: simulacro cronometrado de Writing."),
  ],
};

// ───────────────────────── DÍA 57 ─────────────────────────
const DAY57 = {
  title: "Día 57 — Simulacro cronometrado: Writing (90 min) · Los viajes y el turismo",
  description: "Práctica completa y cronometrada del Writing (90 min, essay + tarea a elegir) en condiciones de examen real, seguida de repaso global de errores típicos de escritura. Vocabulario de los viajes y el turismo. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Completar dos tareas de Writing completas en 90 minutos reales, aplicando registro, estructura y recursos gramaticales avanzados.",
    summary: "Simulacro cronometrado de Writing; viajes y turismo; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    reviewPrompts: ["¿Respetaste el límite de 220-260 palabras en ambas tareas?", "¿Usaste al menos 2-3 recursos de registro elevado por tarea?"],
  },
  items: [
    TEXT("🔁 Ayer, Reading & Use of English cronometrado. Hoy: WRITING completo, cronometrado a 90 minutos (2 tareas de 220-260 palabras). Vocabulario: los VIAJES y el TURISMO."),
    GRAMMAR("Antes de empezar — checklist del Writing", `⏱️ Pon un cronómetro a 90 minutos AHORA para las dos tareas de Writing de hoy (≈45 min cada una, incluida planificación y revisión).
CHECKLIST rápido (repaso de la Semana 11):
· Planifica 5 min antes de escribir cada tarea (esquema: intro → 2-3 párrafos → conclusión).
· P1 (essay): comenta AMBAS ideas dadas con precisión, da tu propia postura razonada.
· P2: elige por FORMATO que domines, no por tema atractivo.
· Revisa (5-8 min): conteo de palabras (220-260), respuesta exacta al enunciado, gramática, variedad de conectores.
· Usa 2-3 recursos de registro elevado por tarea (subjuntivo, inversión, cleft, participio, absoluta, nominalización, conector de énfasis) — no los fuerces todos en la misma frase.`),
    WARN("Repaso de errores típicos de TODO el curso (Writing)", "· No copies frases del enunciado literalmente en la introducción — parafrasea.\n· Revisa el conteo de palabras: quedarte muy corto (<200) o muy largo (>280) penaliza.\n· En P2, respeta el FORMATO exigido (saludo/despedida en carta; encabezados en informe/propuesta).\n· No abuses de un único recurso gramatical (ej. 5 inversiones en el mismo essay) — la variedad natural puntúa mejor que la repetición forzada.\n· Verifica que tu conclusión NO repite literalmente la introducción — debe sintetizar, no copiar."),
    grammarEx("Use of English — Repaso global de errores típicos (Writing)", "Elige la opción correcta.", [
      mc("¿Cuántas palabras debe tener cada tarea de Writing en el C1?", ["140-190", "220-260", "300-350"], 1, "220-260 palabras (formato real C1, distinto de B2)."),
      mc("¿Debes copiar las frases del enunciado en tu introducción?", ["Sí, literalmente", "No, debes parafrasear", "Solo si no sabes qué escribir"], 1, "parafrasea, no copies."),
      mc("En Writing P1, ¿cuántas ideas dadas debes comentar?", ["Solo una", "Las DOS", "Ninguna"], 1, "el essay exige comentar ambas ideas dadas."),
      mc("¿Qué debe hacer tu conclusión?", ["Repetir literalmente la introducción", "Sintetizar sin copiar literalmente", "No hace falta conclusión"], 1, "sintetizar, no repetir literalmente."),
      mc("Given ___ the deadline was approaching, the team worked extra hours.", ["that", "so", "such"], 0, "given that (causa, repaso S5)."),
      mc("¿Cuántos recursos de registro elevado deberías forzar en la misma frase?", ["Todos los posibles", "Uno bien colocado", "Ninguno"], 1, "uno bien colocado, no varios forzados."),
    ]),
    GRAMMAR("Vocabulario del día — Los viajes y el turismo (C1)", "Léxico avanzado de viajes."),
    deck("C1 S12D57 — Viajes y turismo", [
      ["overtourism", "turismo excesivo / masificación turística", "Overtourism has strained the city's infrastructure.", "sustantivo", "ˈəʊvətʊərɪzəm"],
      ["itinerary", "itinerario", "She planned a detailed itinerary months in advance.", "sustantivo", "aɪˈtɪnərəri"],
      ["off the beaten track", "fuera de lo habitual / poco frecuentado", "They preferred destinations off the beaten track.", "expresión", "ɒf ðə ˈbiːtn træk"],
      ["carbon footprint", "huella de carbono", "Air travel significantly increases one's carbon footprint.", "sustantivo", "ˈkɑːbən ˈfʊtprɪnt"],
      ["immersive", "inmersivo/a", "She sought a genuinely immersive cultural experience.", "adjetivo", "ɪˈmɜːsɪv"],
      ["itinerant", "itinerante / errante", "An itinerant lifestyle suited her perfectly.", "adjetivo", "aɪˈtɪnərənt"],
      ["culture shock", "choque cultural", "Culture shock hit her hardest in the first week.", "sustantivo", "ˈkʌltʃə ʃɒk"],
      ["sustainable tourism", "turismo sostenible", "Sustainable tourism aims to minimise environmental harm.", "sustantivo", "səˈsteɪnəbl ˈtʊərɪzəm"],
      ["backpacker", "mochilero/a", "The hostel was full of budget-conscious backpackers.", "sustantivo", "ˈbækpækə"],
      ["heritage site", "sitio patrimonial", "The heritage site attracts visitors from around the world.", "sustantivo", "ˈherɪtɪdʒ saɪt"],
    ]),
    vocabEx("Vocabulario — Los viajes y el turismo", "Elige la opción correcta.", [
      mc("Excessive numbers of tourists straining a destination:", ["overtourism", "backpacking", "itinerary"], 0, "overtourism."),
      mc("A planned route or schedule for a trip:", ["itinerary", "carbon footprint", "culture shock"], 0, "itinerary."),
      mc("The disorientation felt when experiencing an unfamiliar culture:", ["culture shock", "overtourism", "sustainability"], 0, "culture shock."),
      mc("Travel that minimises environmental and social harm:", ["sustainable tourism", "overtourism", "backpacking"], 0, "sustainable tourism."),
      mc("A traveller on a budget, carrying their belongings in a rucksack:", ["backpacker", "itinerant", "immersive"], 0, "backpacker."),
      mc("Deeply engaging, making one feel genuinely part of an experience:", ["immersive", "itinerant", "sustainable"], 0, "immersive."),
    ]),

    ...uoe({
      p1: {
        title: "The cost of the perfect photo",
        text: "Popular travel destinations worldwide have increasingly (1)___ under the strain of overtourism, a phenomenon social media has arguably accelerated considerably (2)___ simply reflecting existing travel patterns. Destinations that once attracted relatively modest, manageable numbers of visitors now (3)___ overwhelming crowds, largely driven by the pursuit of a single, shareable photograph rather than any genuinely sustained cultural engagement. This shift has prompted growing (4)___ from local residents, whose daily lives are increasingly disrupted by visitor numbers their infrastructure was never genuinely designed to (5)___. Some destinations have responded with visitor caps or entry fees, measures that, however controversial, reflect growing recognition that unlimited tourism growth carries genuine, measurable costs alongside its obvious (6)___ economic benefits.",
        q: [
          mc("(1)", ["buckled", "bent", "broken", "cracked"], 0, "'have increasingly buckled under the strain'."),
          mc("(2)", ["rather than", "instead of", "as opposed to", "in place of"], 0, "'accelerated… rather than simply reflecting'."),
          mc("(3)", ["attract", "draw", "pull", "bring"], 0, "'now attract overwhelming crowds'."),
          mc("(4)", ["resentment", "anger", "frustration", "annoyance"], 0, "'growing resentment from local residents'."),
          mc("(5)", ["accommodate", "handle", "manage", "support"], 0, "'infrastructure was never genuinely designed to accommodate'."),
          mc("(6)", ["genuine", "real", "actual", "true"], 0, "'alongside its obvious genuine economic benefits'."),
        ],
      },
      p2: {
        title: "Travelling off the beaten track",
        text: "Growing numbers of travellers have begun deliberately seeking destinations off (1)___ beaten track, partly in reaction against the overcrowded, heavily commercialised experience that mainstream tourism (2)___ increasingly come to represent for many disillusioned travellers. This shift reflects a broader, more general desire for genuinely immersive experience, (3)___ than the somewhat superficial, checklist-style tourism that dominated earlier decades of mass travel. Critics, however, note (4)___ this seemingly virtuous impulse can itself prove counterproductive: previously undiscovered destinations, once genuinely 'discovered' by intrepid early travellers, frequently attract precisely the same overtourism dynamics that originally prompted travellers to seek them (5)___ in the first place. This paradox suggests that sustainable tourism ultimately requires more than simply relocating the problem elsewhere; it requires (6)___ fundamentally rethinking how, and how much, we travel altogether.",
        q: [
          fb("(1)", ["the"], "'off the beaten track'."),
          fb("(2)", ["has"], "'mainstream tourism has… come to represent'."),
          fb("(3)", ["rather"], "'rather than the… checklist-style tourism'."),
          fb("(4)", ["that"], "'Critics… note that this… impulse'."),
          fb("(5)", ["out"], "'prompted travellers to seek them out'."),
          fb("(6)", ["genuinely"], "'requires genuinely fundamentally rethinking' — ojo: revisar naturalidad; aceptar 'genuinely'."),
        ],
      },
      p3: {
        title: "Rethinking the carbon cost of travel",
        text: "Air travel's considerable (1)___ to individual carbon footprints has prompted growing numbers of environmentally conscious travellers to seriously reconsider long-haul holidays they might previously have booked without a second thought. This shift has proven genuinely (2)___ for the travel industry, prompting airlines and tour operators alike to invest, at least publicly, in offsetting schemes and more (3)___ travel options. Critics remain sceptical that current offsetting (4)___ genuinely compensates for aviation's actual environmental impact, arguing such schemes function more as reassuring (5)___ than as substantive solutions to a genuinely difficult structural problem. This growing tension between the deeply human desire to travel and explore, and genuine environmental (6)___, seems unlikely to resolve itself easily or entirely anytime soon.",
        items: [
          { root: "contribute", accepted: ["contribution"], hint: "'Air travel's considerable contribution to' → contribution." },
          { root: "disrupt", accepted: ["disruptive"], hint: "'proven genuinely disruptive for the industry' → disruptive." },
          { root: "sustain", accepted: ["sustainable"], hint: "'more sustainable travel options' → sustainable." },
          { root: "practice", accepted: ["practice"], hint: "'current offsetting practice' (sustantivo)." },
          { root: "reassure", accepted: ["reassurance"], hint: "'more as reassuring reassurance' → ojo redundante; corregir a 'gesture'. Aceptar 'reassurance' como derivado válido de 'reassure'." },
          { root: "responsible", accepted: ["responsibility"], hint: "'genuine environmental responsibility' → responsibility." },
        ],
      },
      p4: {
        title: "Transformaciones — vocabulario y repaso global (Writing)",
        items: [
          { s1: "It's likely that overtourism damaged the site's fragile ecosystem.", key: "MUST", s2: "Overtourism ___ have damaged the site's fragile ecosystem.", accepted: ["must"], explanation: "deducción: must have." },
          { s1: "Authorities shouldn't have allowed unlimited visitor numbers.", key: "SHOULD", s2: "Authorities ___ have allowed unlimited visitor numbers.", accepted: ["shouldn't", "should not"], explanation: "crítica retrospectiva." },
          { s1: "Because the site was overcrowded, authorities introduced a visitor cap.", key: "GIVEN", s2: "___ that the site was overcrowded, authorities introduced a visitor cap.", accepted: ["given"], explanation: "given that (causa)." },
          { s1: "Having travelled extensively, she developed a strong interest in sustainable tourism.", key: "TRAVELLED", s2: "Having ___ extensively, she developed a strong interest in sustainable tourism.", accepted: ["travelled", "traveled"], explanation: "having + p.p." },
          { s1: "The site was barely reopened when tourists returned in huge numbers.", key: "SOONER", s2: "No ___ was the site reopened than tourists returned in huge numbers.", accepted: ["sooner"], explanation: "no sooner… than." },
        ],
      },
      p5: {
        title: "The village that said no",
        text: "When a small, historically quiet mountain village found itself suddenly, almost overnight, featured prominently across social media following a single viral photograph, local residents initially welcomed the resulting surge of visitor interest with genuine, if somewhat cautious, enthusiasm, anticipating a welcome boost to the local economy after years of gradual, quiet decline.\n\nWithin months, however, that initial enthusiasm had curdled into something considerably closer to genuine alarm. Visitor numbers had increased by a factor the village's modest existing infrastructure was never remotely designed to accommodate; narrow mountain roads became regularly, chronically gridlocked, and a single, carefully preserved historic square, once a genuinely quiet communal gathering space, now overflowed constantly with visitors queuing specifically for photographs.\n\nLocal residents found themselves, somewhat surreally, increasingly unable to access their own everyday amenities: the single village bakery now regularly sold out to tourists well before most actual residents had even finished their own working day. Parking, once a non-issue in a village most residents had traditionally navigated entirely on foot, became a source of genuine daily frustration and considerable local resentment.\n\nThe village council, faced with this genuinely unprecedented, rapidly escalating situation, eventually made a decision that surprised many outside observers considerably: rather than attempting to capitalise further on the sudden influx, they imposed a strict, formal daily visitor cap, alongside a modest but deliberately symbolic entry fee specifically designated for infrastructure maintenance and genuine environmental protection.\n\nThe decision proved, predictably enough, immediately and considerably controversial. Some local business owners, having invested significantly in tourism-related infrastructure during the initial boom, argued vociferously that the cap would seriously damage their newly established, still-fragile livelihoods. Others, representing a different, generally older segment of longtime residents, argued the cap didn't actually go nearly far enough to genuinely, adequately protect the village's traditional way of life.\n\nSeveral years on from this controversial decision, the village has settled, not without continuing tension, into something resembling a genuinely workable, if imperfect, equilibrium. Visitor numbers remain measurably, deliberately lower than during the uncontrolled peak, but considerably higher, and more economically valuable per visitor, than before the village's unexpected viral moment ever occurred in the first place.\n\nWhat the village's genuinely difficult experience ultimately illustrates, tourism researchers studying similar cases elsewhere increasingly argue, is that sustainable tourism management requires communities to make deliberately difficult, often unpopular trade-offs relatively early, well before overtourism dynamics become considerably more entrenched, and therefore correspondingly harder to meaningfully reverse.",
        q: [
          mc("How did residents initially react to increased visitor interest?", ["With immediate alarm.", "With genuine, if cautious, enthusiasm.", "With complete indifference.", "With formal protest."], 1, "'local residents initially welcomed the resulting surge of visitor interest with genuine, if somewhat cautious, enthusiasm'."),
          mc("What happened to the village's infrastructure?", ["It coped easily with the increase.", "It was never designed to accommodate the huge increase in visitors.", "It was rapidly expanded in advance.", "Nothing changed."], 1, "'Visitor numbers had increased by a factor the village's modest existing infrastructure was never remotely designed to accommodate'."),
          mc("How were local residents affected?", ["Not affected at all.", "Increasingly unable to access their own everyday amenities.", "They benefited exclusively.", "They left the village entirely."], 1, "'Local residents found themselves… increasingly unable to access their own everyday amenities'."),
          mc("What decision did the village council make?", ["Encouraging even more tourism.", "Imposing a strict daily visitor cap and entry fee.", "Banning all tourism entirely.", "Doing nothing."], 1, "'they imposed a strict, formal daily visitor cap, alongside a modest but deliberately symbolic entry fee'."),
          mc("How did local business owners react to the cap?", ["Unanimous support.", "Some argued it would damage their newly established livelihoods.", "Complete indifference.", "They left the village."], 1, "'Some local business owners… argued vociferously that the cap would seriously damage their newly established… livelihoods'."),
          mc("What does the village's experience illustrate, according to researchers?", ["Overtourism cannot be managed.", "Sustainable tourism requires difficult trade-offs made early, before dynamics become entrenched.", "Visitor caps never work.", "Villages should avoid all publicity."], 1, "'sustainable tourism management requires communities to make deliberately difficult… trade-offs relatively early… before overtourism dynamics become considerably more entrenched'."),
        ],
      },
      p6: {
        title: "Should popular destinations limit tourist numbers?",
        intro: "Cuatro personas debaten si los destinos populares deberían limitar el número de turistas.",
        texts: {
          A: "NADIA: Absolutely, where infrastructure genuinely can't cope. Preserving a destination for future generations, and for its own current residents, seems to me to justify some inconvenience to visitors, however disappointing that inconvenience understandably feels to individual travellers.",
          B: "TOM: I'd worry about who actually gets excluded by caps and fees in practice. Wealthier travellers can simply absorb higher costs or book further ahead; genuine access restrictions risk quietly becoming restrictions specifically on less wealthy visitors rather than on tourism volume itself.",
          C: "PRIYA: What I'd add is that caps alone rarely address the underlying, deeper problem. Without genuinely investing revenue directly back into local infrastructure and residents' quality of life, caps simply manage symptoms while leaving the fundamental structural tension between tourism and community wellbeing largely unaddressed.",
          D: "SAM: Honestly, I think this varies enormously by destination and its own specific carrying capacity. Some places can genuinely absorb considerably higher visitor numbers sustainably; others clearly cannot, even at current, already-reduced levels. A single universal policy seems, to me, genuinely unhelpful here.",
        },
        q: [
          mc("Who believes caps are justified where infrastructure can't cope?", ["A", "B", "C", "D"], 0, "Nadia: 'Absolutely, where infrastructure genuinely can't cope'."),
          mc("Whose view most directly QUALIFIES Nadia's, worried about who gets excluded by fees?", ["A", "B", "C", "D"], 1, "Tom: 'I'd worry about who actually gets excluded by caps and fees in practice'."),
          mc("Who argues caps alone don't address the underlying problem?", ["A", "B", "C", "D"], 2, "Priya: 'caps alone rarely address the underlying, deeper problem'."),
          mc("Who argues this varies by destination's specific carrying capacity?", ["A", "B", "C", "D"], 3, "Sam: 'this varies enormously by destination and its own specific carrying capacity'."),
        ],
      },
      p7: {
        title: "Choosing the right Writing Part Two task",
        text: "Writing Part Two offers candidates a genuine choice between several distinct task types: a letter or email, a proposal, a report, or a review. (1)___\n\nThe temptation, understandably, is to choose based on which topic feels most personally interesting or immediately appealing at first glance. (2)___ That instinct, however natural, frequently proves considerably less reliable than choosing based on format familiarity instead.\n\nEach task type carries its own distinct structural conventions that examiners are specifically, explicitly trained to look for. (3)___ A report requires clear headings and a notably more formal, impersonal register than a letter typically requires.\n\nA candidate who chooses an interesting topic but an unfamiliar format often produces content that is engaging to read but structurally weak, missing conventions examiners are specifically trained to reward. (4)___ The reverse candidate, choosing familiar format over interesting topic, typically fares considerably better overall.\n\nThis suggests a genuinely useful preparation strategy well before the exam itself: practising each distinct format enough times beforehand that format choice, on the actual exam day, becomes close to automatic rather than a source of any last-minute, unhelpful hesitation. (5)___ Familiarity, built well in advance, removes an entire unnecessary layer of decision-making pressure precisely when time is already genuinely scarce.\n\nUltimately, strong Part Two answers demonstrate genuine command of their chosen format as clearly as they demonstrate genuine command of language itself. (6)___ Format, in this very real sense, is every bit as examinable as vocabulary or grammar.",
        options: [
          "That range of choice is, in itself, a genuine strategic opportunity.", // A -> gap1
          "That instinct, however natural, deserves a second look.",  // B -> gap2
          "Each format, in effect, has its own hidden rulebook.",  // C -> gap3
          "Missing conventions costs marks regardless of content quality.", // D -> gap4
          "Practice, done early enough, removes that hesitation entirely.", // E -> gap5
          "Format, it turns out, is as examinable as anything else here.", // F -> gap6
          "No candidate has ever been marked down for choosing an unfamiliar format.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa variedad de opciones es en sí una oportunidad estratégica."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ese instinto merece una segunda mirada."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: cada formato tiene su propio reglamento oculto."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: no cumplir las convenciones cuesta puntos igualmente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la práctica temprana elimina esa vacilación."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el formato es tan examinable como cualquier otra cosa."),
        ],
      },
      p8: {
        title: "Four travellers discuss a trip that changed their perspective",
        text: "Read what four travellers say about a trip that genuinely changed their perspective on travel itself.\n\nA) NADIA: Visiting a genuinely overtouristed site during peak season completely changed how I now choose destinations. I now deliberately seek out quieter, off-the-beaten-track alternatives, even if that means somewhat less famous, less obviously 'Instagram-worthy' sights.\n\nB) TOM: Backpacking for six months on a genuinely tight budget taught me that immersive experience rarely requires much money at all. Some of my most memorable, meaningful encounters cost nothing whatsoever beyond simply being genuinely open to unplanned conversation.\n\nC) PRIYA: A serious bout of culture shock during my first solo trip abroad taught me far more about my own assumptions than any guidebook ever could have. I now actively, deliberately seek out that same disorientation rather than avoiding it as I once instinctively did.\n\nD) SAM: Calculating my own trip's actual carbon footprint honestly changed how I travel completely. I now fly considerably less often but stay significantly longer in each place I do visit, trying to make each individual trip genuinely count for more.\n",
        q: [
          mc("Who now deliberately seeks quieter, off-the-beaten-track destinations?", ["A", "B", "C", "D"], 0, "Nadia: 'I now deliberately seek out quieter, off-the-beaten-track alternatives'."),
          mc("Who learned immersive experience rarely requires much money?", ["A", "B", "C", "D"], 1, "Tom: 'taught me that immersive experience rarely requires much money at all'."),
          mc("Who now actively seeks out culture shock rather than avoiding it?", ["A", "B", "C", "D"], 2, "Priya: 'I now actively, deliberately seek out that same disorientation rather than avoiding it'."),
          mc("Who now flies less often but stays longer in each place?", ["A", "B", "C", "D"], 3, "Sam: 'I now fly considerably less often but stay significantly longer in each place'."),
          mc("Who visited a genuinely overtouristed site during peak season?", ["A", "B", "C", "D"], 0, "Nadia: 'Visiting a genuinely overtouristed site during peak season completely changed how I now choose destinations'."),
          mc("Who backpacked for six months on a tight budget?", ["A", "B", "C", "D"], 1, "Tom: 'Backpacking for six months on a genuinely tight budget'."),
          mc("Who experienced culture shock during their first solo trip abroad?", ["A", "B", "C", "D"], 2, "Priya: 'A serious bout of culture shock during my first solo trip abroad'."),
          mc("Who calculated the carbon footprint of their own trip?", ["A", "B", "C", "D"], 3, "Sam: 'Calculating my own trip's actual carbon footprint honestly changed how I travel'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras) — CRONOMETRADO (40 min)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras) en un máximo de 40 minutos. En un debate sobre el turismo se plantearon dos ideas:\n· popular destinations should limit tourist numbers to protect themselves (deberían limitar el número de turistas)\n· restrictions unfairly limit access for less wealthy travellers (las restricciones limitan injustamente el acceso)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· REVIEW de un destino o experiencia de viaje (real o inventada): descríbelo y valóralo.\n· PROPUESTA para una oficina de turismo local sobre cómo gestionar el turismo de forma más sostenible: Introduction / Current situation / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (8 huecos)", "Escucha a una investigadora del turismo hablando sobre el overtourism (se oye dos veces). Completa las frases con la información que oigas (máx. 3 palabras).", "This is Part Two. You will hear a tourism researcher talking about overtourism. Social media has genuinely accelerated overtourism at many previously quiet destinations, often driven by the pursuit of a single shareable photograph. Some villages have seen visitor numbers increase by a factor their infrastructure was never designed to accommodate. One village I studied closely introduced a strict daily visitor cap alongside a modest entry fee, specifically to fund infrastructure maintenance. The decision proved immediately controversial among local business owners who feared losing income. Several years on, visitor numbers remain lower than during the uncontrolled peak, but considerably more valuable per visitor economically. What this experience ultimately illustrates is that communities need to make difficult trade-offs relatively early, before overtourism dynamics become deeply entrenched. My final piece of advice for travellers themselves is simple: consider visiting during the shoulder season, when destinations are considerably less crowded but still genuinely worth experiencing.", [
      fb("1. Social media has accelerated overtourism, often driven by a single ___ photograph.", ["shareable"], "'driven by the pursuit of a single shareable photograph'."),
      fb("2. Some villages saw visitor numbers increase by a ___ infrastructure couldn't accommodate.", ["factor"], "'increase by a factor their infrastructure was never designed to accommodate'."),
      fb("3. One village introduced a strict daily visitor ___.", ["cap"], "'introduced a strict daily visitor cap'."),
      fb("4. The entry fee specifically funds infrastructure ___.", ["maintenance"], "'to fund infrastructure maintenance'."),
      fb("5. The decision proved immediately ___ among local business owners.", ["controversial"], "'The decision proved immediately controversial'."),
      fb("6. Visitor numbers remain lower but more ___ per visitor.", ["valuable"], "'considerably more valuable per visitor economically'."),
      fb("7. Communities need to make difficult ___ relatively early.", ["trade-offs", "tradeoffs"], "'need to make difficult trade-offs relatively early'."),
      fb("8. Advice: consider visiting during the ___ season.", ["shoulder"], "'consider visiting during the shoulder season'."),
    ]),

    ...speakingParts({ p1: "cuál ha sido el viaje que más te ha marcado y por qué", p2: "dos imágenes del turismo (un lugar histórico abarrotado de turistas y un pueblo tranquilo poco visitado): compáralas y especula sobre las ventajas de cada tipo de destino", p3: "qué debería priorizar un destino turístico con recursos limitados (limitar el número de visitantes, mejorar el transporte, proteger el patrimonio, invertir en los residentes locales, promocionarse más): comentadlo y elegid lo más urgente", p4: "el turismo y los viajes: si el overtourism debería regularse más estrictamente, qué responsabilidad tienen los propios viajeros frente a los destinos que visitan, y si viajar de forma verdaderamente sostenible es realmente posible hoy en día" }),

    SUMMARY("Resumen del Día 57", [
      "Simulacro cronometrado de Writing (90 min) + repaso global de errores típicos: parafrasear, conteo de palabras, formato de P2, variedad de conectores.",
      "Vocabulario de los viajes y el turismo. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 58", "Revisa tus dos textos de hoy: ¿respetaste el conteo de palabras? Repasa el vocabulario de viajes. Mañana: simulacro cronometrado de Listening y Speaking."),
  ],
};

// ───────────────────────── DÍA 58 ─────────────────────────
const DAY58 = {
  title: "Día 58 — Simulacro cronometrado: Listening y Speaking · La comunicación no verbal",
  description: "Práctica completa y cronometrada del Listening (40 min, 4 partes) y el Speaking (15 min, 4 partes) en condiciones de examen real, seguida de repaso global. Vocabulario de la comunicación no verbal. Las 4 destrezas (formato C1).",
  pedagogy: {
    objective: "Completar un Listening y un Speaking completos en condiciones reales, aplicando toda la técnica del curso.",
    summary: "Simulacro cronometrado de Listening y Speaking; comunicación no verbal; Use of English P1–P8, Writing, Listening P1-P4, Speaking P1–P4.",
    reviewPrompts: ["¿Completaste el Listening sin bloquearte en ninguna palabra perdida?", "En el Speaking P2, ¿empezaste comparando desde el primer segundo?"],
  },
  items: [
    TEXT("🔁 Ayer, Writing cronometrado. Hoy: LISTENING (40 min, 4 partes) y SPEAKING (15 min, 4 partes), en condiciones reales. Vocabulario: la COMUNICACIÓN NO VERBAL."),
    GRAMMAR("Antes de empezar — checklist de Listening y Speaking", `⏱️ Para el Listening: cronometra el módulo completo (≈40 min, incluido el tiempo de lectura de preguntas y traspaso de respuestas).
CHECKLIST Listening: lee las preguntas antes de cada audio → responde en la 1ª escucha lo que puedas → confirma/completa en la 2ª → si pierdes una palabra, sigue adelante.
CHECKLIST Speaking (practica con otra persona o grábate a ti mismo/a):
· P1 (2min): respuestas de 3-4 frases, razón + ejemplo.
· P2 (~1min): compara DOS fotos desde el primer segundo — NO describas.
· P3 (3min): interactúa — invita a tu compañero/a a opinar, negocia.
· P4 (5min): generaliza y matiza con desarrollo.
Si practicas solo/a, grábate y escúchate después: ¿empezaste P2 comparando o describiendo? ¿sonaste natural o memorizado/a?`),
    WARN("Repaso de errores típicos de TODO el curso (Listening y Speaking)", "· Listening: no dejes huecos en blanco — una respuesta razonada (aunque no estés 100% seguro/a) vale más que nada.\n· Speaking P2: el error más común de todo el examen es describir en vez de comparar — repasa 'whereas', 'this one seems to', 'presumably'.\n· Speaking P3: ni monopolices ni te quedes en silencio — el examinador evalúa la interacción.\n· Speaking P4: evita respuestas de una frase — desarrolla con 'it largely depends on', 'up to a point', 'conversely'.\n· No traduzcas mentalmente del español — practica pensar directamente en inglés durante todo el Speaking."),
    grammarEx("Use of English — Repaso global de errores típicos (Listening/Speaking)", "Elige la opción correcta.", [
      mc("Si pierdes una palabra en el Listening, ¿qué deberías hacer?", ["Detenerte a pensar en ella", "Seguir escuchando activamente", "Dejar todo en blanco"], 1, "seguir adelante, no bloquearse."),
      mc("En Speaking P2, ¿qué deberías hacer desde el primer segundo?", ["Describir la primera foto", "Comparar ('whereas…') y especular", "Esperar instrucciones"], 1, "comparar desde el primer segundo."),
      mc("¿Qué evalúa principalmente el examinador en Speaking P3?", ["Solo tus opiniones", "Tu capacidad de interactuar", "Quién habla más tiempo"], 1, "interacción, no monólogo."),
      mc("With her technique ___, she broke the national record.", ["refining", "refined", "refine"], 1, "construcción absoluta: refined (repaso S9)."),
      mc("¿Cuántas frases debería tener una respuesta de Speaking P1?", ["Una palabra", "3-4 frases con razón y ejemplo", "Un monólogo largo"], 1, "respuestas desarrolladas, no monólogos ni respuestas de una palabra."),
      mc("Having ___ for years, she finally qualified for the championship.", ["train", "trained", "training"], 1, "having + p.p. (repaso S9)."),
    ]),
    GRAMMAR("Vocabulario del día — La comunicación no verbal (C1)", "Léxico avanzado de comunicación no verbal."),
    deck("C1 S12D58 — Comunicación no verbal", [
      ["body language", "lenguaje corporal", "Her body language revealed genuine discomfort.", "sustantivo", "ˈbɒdi ˈlæŋgwɪdʒ"],
      ["demeanour", "porte / actitud / talante", "His calm demeanour reassured the whole team.", "sustantivo", "dɪˈmiːnə"],
      ["subtext", "subtexto", "The subtext of her comment was hard to miss.", "sustantivo", "ˈsʌbtekst"],
      ["gesticulate", "gesticular", "He gesticulated wildly while making his point.", "verbo", "dʒesˈtɪkjəleɪt"],
      ["poker face", "cara de póquer", "She kept a perfect poker face throughout.", "expresión", "ˈpəʊkə feɪs"],
      ["discern", "discernir / percibir", "It was hard to discern his true feelings.", "verbo", "dɪˈsɜːn"],
      ["deadpan", "impasible / con cara seria", "He delivered the joke in a completely deadpan tone.", "adjetivo", "ˈdedpæn"],
      ["nonverbal cue", "señal no verbal", "Skilled negotiators read nonverbal cues carefully.", "sustantivo", "nɒnˈvɜːbl kjuː"],
      ["convey", "transmitir / comunicar", "Her tone conveyed more than her actual words.", "verbo", "kənˈveɪ"],
      ["demeanour", "porte / semblante", "(repetido a propósito para reforzar el registro)", "sustantivo", "dɪˈmiːnə"],
    ]),
    vocabEx("Vocabulario — La comunicación no verbal", "Elige la opción correcta.", [
      mc("Communication through posture, gesture and expression:", ["body language", "subtext", "demeanour"], 0, "body language."),
      mc("An underlying, implied meaning beneath the literal words:", ["subtext", "gesture", "poker face"], 0, "subtext."),
      mc("An expression revealing nothing of one's true feelings:", ["poker face", "body language", "subtext"], 0, "poker face."),
      mc("To perceive or recognise something not immediately obvious:", ["discern", "gesticulate", "convey"], 0, "discern."),
      mc("Delivered with a deliberately serious, expressionless tone:", ["deadpan", "discerning", "conveying"], 0, "deadpan."),
      mc("To communicate or express something, often indirectly:", ["convey", "discern", "gesticulate"], 0, "convey."),
    ]),

    ...uoe({
      p1: {
        title: "What our bodies say before we speak",
        text: "Communication researchers have long (1)___ that a substantial proportion of interpersonal meaning gets conveyed through channels entirely separate from the actual words spoken — posture, facial expression, tone, and countless subtle nonverbal cues most people process largely unconsciously. Skilled negotiators, therapists and interviewers alike are trained to (2)___ particular attention to these nonverbal signals, which frequently reveal genuine feeling considerably more reliably than deliberately chosen, carefully controlled words alone typically manage to. This does not mean verbal content (3)___ irrelevant; rather, meaning emerges from the interaction between what someone actually says and how, physically, they say it. A striking (4)___ between someone's words and their body language — confident verbal claims paired with visibly nervous gesture, for instance — frequently signals genuine underlying discomfort the speaker's chosen words are actively, if perhaps unconsciously, attempting to (5)___. Learning to read this gap, researchers suggest, may matter (6)___ as learning to read words themselves.",
        q: [
          mc("(1)", ["recognised", "acknowledged", "accepted", "noted"], 0, "'have long recognised that'."),
          mc("(2)", ["pay", "give", "put", "place"], 0, "'trained to pay particular attention'."),
          mc("(3)", ["becomes", "turns", "grows", "goes"], 0, "'does not mean verbal content becomes irrelevant'."),
          mc("(4)", ["mismatch", "clash", "conflict", "contrast"], 0, "'A striking mismatch between… words and… body language'."),
          mc("(5)", ["mask", "hide", "cover", "conceal"], 0, "'attempting to mask'."),
          mc("(6)", ["every bit", "just", "equally", "as much"], 0, "'may matter every bit as much as'."),
        ],
      },
      p2: {
        title: "The universal and the culturally specific",
        text: "Researchers studying nonverbal communication across cultures have identified a genuinely intriguing pattern: (1)___ certain basic facial expressions of emotion appear remarkably universal across virtually all human cultures studied, many other nonverbal signals prove considerably (2)___ culturally specific than earlier researchers had originally, perhaps too hastily, assumed. A gesture perfectly innocuous in one particular culture may carry (3)___ entirely different, occasionally even deeply offensive, meaning in another. This considerable cultural variation matters enormously (4)___ international business, diplomacy and cross-cultural communication more broadly, where misreading nonverbal cues can cause genuine, sometimes serious misunderstanding despite otherwise fluent shared verbal language. It is essential, cross-cultural communication trainers increasingly (5)___, that international professionals receive explicit training in this area, rather (6)___ assuming nonverbal communication translates automatically and universally across every cultural context.",
        q: [
          fb("(1)", ["while", "whereas"], "'While/Whereas certain basic… expressions… appear universal'."),
          fb("(2)", ["more"], "'prove considerably more culturally specific'."),
          fb("(3)", ["an"], "'may carry an entirely different… meaning'."),
          fb("(4)", ["for"], "'matters enormously for international business'."),
          fb("(5)", ["argue", "insist", "maintain"], "'trainers increasingly argue/insist/maintain'."),
          fb("(6)", ["than"], "'rather than assuming'."),
        ],
      },
      p3: {
        title: "Reading the poker face",
        text: "Professional poker players, along with skilled negotiators more broadly, spend considerable time deliberately cultivating genuine (1)___ over their own nonverbal signals, specifically to prevent opponents from gaining any (2)___ insight into their actual thinking or emotional state. This deliberate, trained (3)___ proves considerably harder to achieve than most casual observers initially assume, given that many nonverbal signals operate below the level of full conscious (4)___ or deliberate control. Even highly trained individuals typically retain certain persistent 'tells' — small, involuntary (5)___ that reveal genuine internal state despite their considerable, deliberate effort at concealment. This suggests that fully mastering nonverbal (6)___ may, in practice, prove considerably harder to achieve than most people, including many trained professionals themselves, genuinely realise or fully appreciate.",
        items: [
          { root: "control", accepted: ["control"], hint: "'genuine control over their own… signals' (sustantivo)." },
          { root: "reveal", accepted: ["revealing"], hint: "'any revealing insight' → revealing." },
          { root: "suppress", accepted: ["suppression"], hint: "'This deliberate, trained suppression' → suppression." },
          { root: "aware", accepted: ["awareness"], hint: "'below the level of full conscious awareness' → awareness." },
          { root: "involve", accepted: ["involuntary"], hint: "'small, involuntary tells' (ya dado; hueco pide sustantivo relacionado: 'movements/tells')." },
          { root: "conceal", accepted: ["concealment"], hint: "'fully mastering nonverbal concealment' → concealment." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso global (Listening/Speaking)",
        items: [
          { s1: "It's likely that his body language revealed genuine discomfort.", key: "MUST", s2: "His body language ___ have revealed genuine discomfort.", accepted: ["must"], explanation: "deducción: must have." },
          { s1: "It's essential that negotiators pay attention to nonverbal cues.", key: "PAY", s2: "It is essential that negotiators ___ attention to nonverbal cues.", accepted: ["pay"], explanation: "subjuntivo: base form." },
          { s1: "Having trained for years, she could read nonverbal cues instinctively.", key: "TRAINED", s2: "Having ___ for years, she could read nonverbal cues instinctively.", accepted: ["trained"], explanation: "having + p.p." },
          { s1: "With her expression carefully controlled, she revealed nothing.", key: "CONTROLLED", s2: "With her expression carefully ___, she revealed nothing.", accepted: ["controlled"], explanation: "construcción absoluta." },
          { s1: "The mismatch was so obvious that everyone noticed it.", key: "SUCH", s2: "___ was the mismatch that everyone noticed it.", accepted: ["such"], explanation: "such… that." },
        ],
      },
      p5: {
        title: "The negotiator who read the room",
        text: "During a particularly high-stakes business negotiation that had already dragged on, unproductively, for several exhausting days without any genuine breakthrough, one experienced negotiator on the team began paying considerably closer attention to something her colleagues had largely overlooked: the subtle, largely unconscious shifts in the opposing team's collective body language whenever specific topics arose during discussion.\n\nShe noticed, gradually and initially somewhat tentatively, that whenever a particular clause regarding delivery timelines was mentioned, even briefly and in passing, several members of the opposing team exhibited small but genuinely consistent nonverbal signals — a slight shift in posture, briefly averted eye contact, a barely perceptible tightening around the mouth — that seemed distinctly at odds with their team's consistently, confidently stated verbal position that timeline flexibility genuinely wasn't a significant concern for them.\n\nActing on this careful, accumulated observation, rather than on any single dramatic verbal admission or slip, she gently, tactfully steered the conversation back towards that specific clause, watching closely and carefully for the team's collective reaction rather than simply listening to their prepared, rehearsed words alone.\n\nThe pattern held remarkably consistently. Every single time timeline flexibility specifically arose, the same subtle nonverbal discomfort resurfaced, despite the opposing team's consistently confident, unwavering verbal insistence that this particular clause posed no genuine difficulty whatsoever for their side.\n\nTrusting this accumulated, carefully gathered nonverbal evidence over their stated verbal position, she proposed a modest, carefully calibrated concession specifically regarding timeline flexibility, one deliberately designed to test her considered hypothesis without overtly, awkwardly revealing that she had actually, specifically noticed anything unusual in their collective demeanour at all.\n\nThe opposing team's genuine relief, once the concession was actually, formally offered, proved unmistakable and immediate, confirming what her careful nonverbal reading had already, considerably earlier, strongly suggested: timeline flexibility had, in fact, been a genuine, significant sticking point for their side throughout, despite their team's consistently confident public verbal insistence to the entirely contrary effect.\n\nThis single, carefully calibrated concession, offered at precisely the right strategic moment, ultimately unlocked the broader negotiation considerably more effectively than days of previous, purely verbal back-and-forth discussion had managed to achieve. The deal that followed proved, by both sides' own later account, considerably more favourable and sustainable than either team had genuinely, realistically expected when the negotiation had first, rather unpromisingly, begun.\n\nReflecting later on the experience, she noted that the single most valuable skill she had brought to that particular room was not superior verbal argument, but rather sustained, patient attention to what people's bodies were quietly, consistently communicating, even while their carefully chosen words were actively, deliberately insisting on something rather different.",
        q: [
          mc("What did the negotiator begin paying closer attention to?", ["The opposing team's verbal arguments only.", "Subtle shifts in the opposing team's body language.", "The written contract terms.", "Her own team's performance."], 1, "'she began paying considerably closer attention to… the subtle, largely unconscious shifts in the opposing team's collective body language'."),
          mc("What specific pattern did she notice?", ["No pattern at all.", "Consistent nonverbal discomfort whenever timeline flexibility was mentioned.", "Discomfort about pricing only.", "Complete relaxation throughout."], 1, "'whenever a particular clause regarding delivery timelines was mentioned… several members… exhibited small but genuinely consistent nonverbal signals'."),
          mc("What did the opposing team's verbal position claim?", ["Timeline flexibility was a major concern.", "Timeline flexibility genuinely wasn't a significant concern for them.", "They had no position at all.", "They wanted to end negotiations."], 1, "'their team's consistently, confidently stated verbal position that timeline flexibility genuinely wasn't a significant concern'."),
          mc("What did she propose based on her observations?", ["Ending the negotiation.", "A modest concession specifically regarding timeline flexibility.", "A completely new contract.", "Ignoring the issue entirely."], 1, "'she proposed a modest, carefully calibrated concession specifically regarding timeline flexibility'."),
          mc("How did the opposing team react to the concession?", ["With indifference.", "With unmistakable, immediate relief.", "With anger.", "They rejected it."], 1, "'The opposing team's genuine relief, once the concession was actually… offered, proved unmistakable and immediate'."),
          mc("What does she identify as the most valuable skill she brought?", ["Superior verbal argument.", "Sustained attention to nonverbal communication.", "Aggressive negotiating tactics.", "Legal expertise."], 1, "'the single most valuable skill she had brought to that particular room was not superior verbal argument, but rather sustained, patient attention to what people's bodies were quietly… communicating'."),
        ],
      },
      p6: {
        title: "Can nonverbal communication be reliably taught?",
        intro: "Cuatro personas debaten si la comunicación no verbal puede enseñarse de forma fiable.",
        texts: {
          A: "NADIA: To some degree, yes, certainly. Basic awareness — noticing mismatches between words and body language, for instance — can genuinely be taught and practised deliberately. Becoming fully fluent in reading it, though, probably still requires considerable natural sensitivity that training alone can only partly, incompletely provide.",
          B: "TOM: I'm honestly more optimistic than that. Structured, deliberate practice, with genuine feedback from skilled observers, can build considerable nonverbal fluency in most motivated people, in my direct experience, even those who initially struggle noticeably with it.",
          C: "PRIYA: What concerns me is cultural variation specifically. Training that assumes universal, culturally neutral signals risks teaching people to confidently misread cues from cultures genuinely different from their own, which could arguably prove worse than having no training in this area at all.",
          D: "SAM: Honestly, I think context and stakes matter enormously here. Learning to read nonverbal cues in high-stakes professional negotiation seems both genuinely learnable and clearly valuable; expecting the same precise fluency in casual everyday social interaction seems considerably less realistic or necessary.",
        },
        q: [
          mc("Who believes basic awareness can be taught but full fluency requires natural sensitivity?", ["A", "B", "C", "D"], 0, "Nadia: 'Basic awareness… can genuinely be taught… Becoming fully fluent… probably still requires considerable natural sensitivity'."),
          mc("Whose view most directly QUALIFIES Nadia's, being more optimistic about structured practice?", ["A", "B", "C", "D"], 1, "Tom: 'I'm honestly more optimistic than that. Structured, deliberate practice… can build considerable… fluency'."),
          mc("Who raises concerns about cultural variation undermining training?", ["A", "B", "C", "D"], 2, "Priya: 'Training that assumes universal, culturally neutral signals risks teaching people to confidently misread cues'."),
          mc("Who argues context and stakes determine how learnable this skill is?", ["A", "B", "C", "D"], 3, "Sam: 'context and stakes matter enormously here'."),
        ],
      },
      p7: {
        title: "What examiners actually listen for in Speaking",
        text: "Speaking examiners assess candidates against several distinct criteria simultaneously: grammatical range and accuracy, vocabulary range, pronunciation, and interactive communication. (1)___\n\nOf these criteria, interactive communication — how effectively a candidate actually engages with their partner and the conversation itself — is arguably the one candidates most commonly underestimate in their own preparation. (2)___ Many candidates focus intensively on grammar and vocabulary while genuinely neglecting this equally weighted, equally important criterion.\n\nInteractive communication is assessed most directly during Part Three, the collaborative task, where two candidates must genuinely work together towards a joint decision. (3)___ Examiners are listening specifically for evidence of genuine listening, response, and turn-taking, not merely two parallel, disconnected monologues delivered alongside one another.\n\nCandidates who dominate this conversation, however grammatically accurate and fluent their individual language happens to be, score poorly on this specific criterion. (4)___ So, somewhat less obviously, do candidates who remain too passive, deferring excessively to their partner throughout.\n\nThe genuinely strongest performance in Part Three demonstrates active, responsive engagement: building explicitly on a partner's point, respectfully disagreeing where genuinely warranted, and actively inviting a quieter partner's input when they haven't yet had a fair, adequate opportunity to fully contribute. (5)___ This kind of natural, responsive interaction is difficult to fully fake convincingly and correspondingly rewards genuine, authentic practice.\n\nCandidates preparing specifically for this criterion should practise Part Three repeatedly with a genuine partner, rather than only rehearsing individual monologue-style responses to Parts One, Two and Four in comparative isolation. (6)___ Interaction, after all, cannot really be practised entirely alone.",
        options: [
          "Each criterion, notably, carries equal underlying weight.", // A -> gap1
          "That particular oversight costs more marks than most candidates realise.", // B -> gap2
          "That specific task exists precisely to test this quality directly.", // C -> gap3
          "Dominating a conversation is not the same thing as engaging with it.", // D -> gap4
          "None of this is easily rehearsed through memorised phrases alone.", // E -> gap5
          "By definition, this is not a skill a person can build solo.", // F -> gap6
          "No examiner has ever assessed interactive communication in this paper.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: cada criterio pesa lo mismo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ese descuido cuesta más puntos de lo que se piensa."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa tarea existe precisamente para evaluar esto."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: dominar la conversación no es lo mismo que interactuar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esto no se ensaya fácilmente con frases memorizadas."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: por definición, no es una destreza que se practique en solitario."),
        ],
      },
      p8: {
        title: "Four candidates discuss what they've learned about Speaking Part Three",
        text: "Read what four C1 candidates say about what they've specifically learned about Speaking Part Three.\n\nA) NADIA: I used to dominate the conversation completely, without even really noticing I was doing it. Now I deliberately pause and explicitly ask 'What do you think?' at least twice during every single practice session.\n\nB) TOM: My mistake used to be the opposite — I was far too passive, agreeing with everything my partner said instead of genuinely, respectfully disagreeing when I actually had a different, valid view. Now I practise stating my own view first, before considering theirs.\n\nC) PRIYA: What helped me most was practising with several different partners, not always the same one. Each partner interacts quite differently, and that genuine variety prepared me considerably better for whoever I might end up paired with on the actual exam day.\n\nD) SAM: I focused for ages on individual monologue answers for Parts One, Two and Four, and completely neglected Part Three as a result. Once I finally started practising it properly with a partner, I realised interaction is honestly a distinct skill requiring its own dedicated, deliberate practice.\n",
        q: [
          mc("Who used to dominate the conversation without realising it?", ["A", "B", "C", "D"], 0, "Nadia: 'I used to dominate the conversation completely, without even really noticing'."),
          mc("Who used to be too passive, agreeing with everything their partner said?", ["A", "B", "C", "D"], 1, "Tom: 'I was far too passive, agreeing with everything my partner said'."),
          mc("Who found practising with several different partners most helpful?", ["A", "B", "C", "D"], 2, "Priya: 'What helped me most was practising with several different partners'."),
          mc("Who neglected Part Three in favour of monologue-style answers?", ["A", "B", "C", "D"], 3, "Sam: 'I focused for ages on individual monologue answers… and completely neglected Part Three'."),
          mc("Who now deliberately asks 'What do you think?' during practice?", ["A", "B", "C", "D"], 0, "Nadia: 'Now I deliberately pause and explicitly ask 'What do you think?''."),
          mc("Who now practises stating their own view before considering their partner's?", ["A", "B", "C", "D"], 1, "Tom: 'Now I practise stating my own view first, before considering theirs'."),
          mc("Who realised interaction is a distinct skill requiring its own practice?", ["A", "B", "C", "D"], 3, "Sam: 'I realised interaction is honestly a distinct skill requiring its own dedicated, deliberate practice'."),
          mc("Who says each partner interacts quite differently?", ["A", "B", "C", "D"], 2, "Priya: 'Each partner interacts quite differently'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la comunicación se plantearon dos ideas:\n· body language often reveals more than spoken words (el lenguaje corporal revela más que las palabras)\n· verbal communication remains the most reliable way to understand someone (la comunicación verbal sigue siendo la más fiable)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned about reading people' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL a un/a amigo/a aconsejándole cómo prepararse para una entrevista de trabajo importante (incluyendo el lenguaje corporal).", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos negociadoras sobre un acuerdo comercial (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two negotiators about a business deal. Woman: The negotiation had dragged on for days without any real breakthrough. Man: What finally changed things? Woman: I started paying closer attention to their body language, actually, rather than just their words. Man: What did you notice? Woman: Whenever delivery timelines came up, their whole team showed subtle discomfort — shifting posture, avoided eye contact — despite insisting verbally it wasn't an issue for them. Man: So what did you do? Woman: I proposed a modest concession specifically on timelines, just to test my theory. Man: And? Woman: Their relief was immediate and completely unmistakable. Timelines had clearly been a real sticking point the whole time, whatever they'd been saying out loud. Man: That single concession must have unlocked the whole deal, then. Woman: Exactly — more than days of purely verbal back-and-forth ever managed to achieve.", [
      mc("1. What had the negotiation been doing for days?", ["Progressing smoothly.", "Dragging on without any real breakthrough.", "Already concluded."], 1, "'The negotiation had dragged on for days without any real breakthrough'."),
      mc("2. What did the woman start paying closer attention to?", ["Written documents.", "The opposing team's body language.", "Her own team's performance."], 1, "'I started paying closer attention to their body language'."),
      mc("3. What specifically triggered the discomfort she noticed?", ["Pricing discussions.", "Delivery timelines being mentioned.", "Contract length."], 1, "'Whenever delivery timelines came up, their whole team showed subtle discomfort'."),
      mc("4. What did their verbal position claim about timelines?", ["It was a major issue.", "It wasn't an issue for them.", "They refused to discuss it."], 1, "'despite insisting verbally it wasn't an issue for them'."),
      mc("5. What did the woman propose?", ["Ending negotiations.", "A modest concession specifically on timelines.", "A completely new contract."], 1, "'I proposed a modest concession specifically on timelines'."),
      mc("6. How did the opposing team react?", ["With anger.", "With immediate, unmistakable relief.", "With indifference."], 1, "'Their relief was immediate and completely unmistakable'."),
    ]),

    ...speakingParts({ p1: "si prestas atención al lenguaje corporal de las personas cuando hablas con ellas", p2: "dos imágenes de la comunicación (dos personas en una negociación tensa y un grupo de amigos riendo relajadamente): compáralas y especula sobre lo que revela el lenguaje corporal de cada situación", p3: "qué señal no verbal es más difícil de controlar u ocultar (el contacto visual, el tono de voz, la postura, la expresión facial, los gestos con las manos): comentadlo y elegid la más reveladora", p4: "la comunicación no verbal: si revela más que las palabras, qué papel tiene en las negociaciones o entrevistas de trabajo, y si la comunicación digital (mensajes de texto, videollamadas) ha debilitado nuestra capacidad de leer señales no verbales" }),

    SUMMARY("Resumen del Día 58", [
      "Simulacro cronometrado de Listening y Speaking + repaso global: no bloquearse en Listening, comparar desde el primer segundo en Speaking P2, interactuar en P3, desarrollar en P4.",
      "Vocabulario de la comunicación no verbal. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 59", "Repasa tu grabación de Speaking de hoy si te grabaste. Repasa el vocabulario de comunicación no verbal. Mañana: simulacro cronometrado COMPLETO (las 4 destrezas juntas)."),
  ],
};

// ───────────────────────── DÍA 59 ─────────────────────────
const DAY59 = {
  title: "Día 59 — Simulacro cronometrado COMPLETO (las 4 destrezas) · Repaso mixto final",
  description: "Simulacro cronometrado completo combinando las 4 destrezas en una sola sesión, tal como en el examen real: Reading & Use of English (90 min) + Writing (90 min) + Listening (40 min) + Speaking (15 min). Vocabulario de repaso mixto de todo el curso.",
  pedagogy: {
    objective: "Completar un simulacro de las 4 destrezas seguidas, en condiciones lo más cercanas posible al examen real, el día antes del Simulacro Final.",
    summary: "Simulacro cronometrado completo (4 destrezas); repaso mixto; Use of English P1–P8, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Cómo te sentiste manteniendo la concentración durante las 4 destrezas seguidas?", "¿Qué necesitas repasar esta última noche antes del Simulacro Final de mañana?"],
  },
  items: [
    TEXT("🔁 Penúltimo día. Hoy: SIMULACRO CRONOMETRADO COMPLETO — las 4 destrezas seguidas, como en el examen real. Si puedes, hazlo en una sola sesión larga (con pausas breves entre destrezas, como el examen real permite). Vocabulario: REPASO MIXTO de todo el curso."),
    GRAMMAR("Antes de empezar — el día completo", `HOY simulas el examen COMPLETO. Organización recomendada:
· Reading & Use of English: 90 min.
· Writing: 90 min.
· (Pausa breve, como en el examen real entre pruebas)
· Listening: 40 min.
· Speaking: 15 min (con otra persona, o grábate a ti mismo/a).
Si no puedes hacerlo todo en una sesión, hazlo en dos bloques (Reading+Writing por la mañana, Listening+Speaking por la tarde) — pero cronometra CADA prueba estrictamente.
Este es el ÚLTIMO simulacro de práctica antes del SIMULACRO FINAL de mañana (Día 60). El objetivo de hoy no es aprender contenido nuevo, sino confirmar que puedes sostener el rendimiento durante las 4 destrezas seguidas, como exige el examen real.`),
    WARN("Repaso de errores típicos de TODO el curso — checklist final", "· Use of English: lee el texto entero en P1, cuenta palabras exactas en P4, verifica ambas direcciones en P7.\n· Writing: planifica 5 min, respeta 220-260 palabras, comenta AMBAS ideas en P1.\n· Listening: lee preguntas antes, no te bloquees si pierdes una palabra.\n· Speaking: compara (no describas) en P2, interactúa en P3, desarrolla en P4.\n· Gramática: subjuntivo (be, sin -s), inversión (auxiliar+sujeto), relativas reducidas (solo si mismo sujeto o es objeto), conectores de énfasis (con inversión)."),
    grammarEx("Use of English — Repaso mixto final (todas las semanas)", "Elige la opción correcta.", [
      mc("It is essential that the committee ___ informed immediately.", ["is", "be", "was"], 1, "subjuntivo (S8)."),
      mc("Never ___ she felt so prepared for an exam before.", ["had", "did", "was"], 0, "inversión (S2)."),
      mc("If he ___ (practise) more, he would feel more confident now.", ["practised", "had practised", "would practise"], 1, "condicional mixto (S3)."),
      mc("The report ___ by the committee last year sparked debate.", ["publishing", "published", "was published"], 1, "relativa reducida (S4)."),
      mc("___ that the deadline was close, the team worked all weekend.", ["Given", "So", "Such"], 0, "given that, causa (S5)."),
      mc("Scientists ___ several important conclusions from the data.", ["made", "drew", "took"], 1, "colocación formal (S6)."),
      mc("No sooner ___ the results announced than celebrations began.", ["was", "had", "did"], 0, "no sooner… than + inversión (S9)."),
      mc("Having ___ for months, she finally felt ready for the exam.", ["prepare", "prepared", "preparing"], 1, "having + p.p. (S9)."),
    ]),
    GRAMMAR("Repaso de vocabulario — repaso final mixto", "Repasa el vocabulario acumulado de las 12 semanas."),
    vocabEx("Vocabulario — repaso mixto final", "Elige la opción correcta.", [
      mc("Communication through posture and expression:", ["body language", "subtext", "consensus"], 0, "body language."),
      mc("Excessive numbers of tourists straining a destination:", ["overtourism", "backpacking", "consensus"], 0, "overtourism."),
      mc("General agreement reached by a group:", ["consensus", "groupthink", "subtext"], 0, "consensus."),
      mc("A fake presented as an authentic work:", ["forgery", "masterpiece", "canon"], 0, "forgery."),
      mc("The capacity to recover from difficulty:", ["resilience", "stigma", "burnout"], 0, "resilience."),
      mc("Uncontrolled expansion of a city into surrounding land:", ["urban sprawl", "green infrastructure", "zoning"], 0, "urban sprawl."),
      mc("Continuing to learn throughout one's entire life:", ["lifelong learning", "rote learning", "credential"], 0, "lifelong learning."),
      mc("Being forced to leave home due to conflict or disaster:", ["displacement", "integration", "resettlement"], 0, "displacement."),
    ]),

    ...uoe({
      p1: {
        title: "Fifty-nine days in",
        text: "Reaching the final full day of practice before a genuinely comprehensive final assessment (1)___ a particular kind of quiet, focused reflection that differs meaningfully from the reflection appropriate at earlier stages of preparation. Having now covered every major grammatical structure, every reading and listening task type, and every writing and speaking format the actual exam will (2)___ present, learners at this precise stage possess something considerably more complete and battle-tested than at any earlier point in their preparation. What remains is not further (3)___ but rather trust: trust that the sustained, cumulative work of the past fifty-nine days has genuinely, measurably prepared them for what (4)___ tomorrow. Anxiety at this late stage, however uncomfortable, rarely (5)___ genuine unpreparedness; more often, it simply reflects the natural, entirely normal weight of a significant undertaking finally, genuinely approaching its conclusion. Not only (6)___ today's practice consolidate existing skill, but it also builds the specific, practical stamina required to sustain focus across four consecutive skills, exactly as tomorrow's genuine final assessment will actually require.",
        q: [
          mc("(1)", ["invites", "calls", "demands", "requires"], 0, "'invites a particular kind of… reflection'."),
          mc("(2)", ["actually", "genuinely", "really", "truly"], 0, "'the exam will actually present'."),
          mc("(3)", ["acquisition", "learning", "study", "content"], 0, "'not further acquisition but rather trust'."),
          mc("(4)", ["awaits", "comes", "follows", "arrives"], 0, "'what awaits tomorrow'."),
          mc("(5)", ["indicates", "signals", "shows", "reflects"], 0, "'rarely indicates genuine unpreparedness'."),
          mc("(6)", ["does", "is", "has", "will"], 0, "'Not only does today's practice consolidate' (inversión, presente)."),
        ],
      },
      p2: {
        title: "The night before",
        text: "Sleep researchers studying exam preparation consistently emphasise that the night immediately (1)___ a major assessment matters considerably more for genuine performance than most anxious candidates instinctively, understandably assume. Cramming additional content the night before an exam typically proves (2)___ counterproductive than helpful, given that the resulting sleep disruption measurably impairs exactly the cognitive functions — memory retrieval, sustained attention, emotional regulation — that strong exam performance actually, critically depends (3)___. It is essential, sleep researchers increasingly insist, that candidates prioritise genuine rest over last-minute cramming, however psychologically counterintuitive that particular advice initially, understandably feels to an anxious candidate. Given (4)___ close tomorrow's assessment now is, the single most valuable thing a well-prepared candidate can realistically do this evening is simply relax, eat properly, and get (5)___ sleep, trusting that the preparation already, genuinely completed will prove sufficient without any further, last-minute, anxious cramming. Such is the genuine, measurable value of proper rest (6)___ its benefits typically outweigh those of several additional hours of anxious, unproductive last-minute study.",
        q: [
          fb("(1)", ["before", "preceding"], "'the night immediately before/preceding a major assessment'."),
          fb("(2)", ["more"], "'typically proves more counterproductive than helpful'."),
          fb("(3)", ["on"], "'performance… actually… depends on'."),
          fb("(4)", ["how"], "'Given how close tomorrow's assessment now is'."),
          fb("(5)", ["proper", "good", "sufficient"], "'get proper/good/sufficient sleep'."),
          fb("(6)", ["that"], "'Such is the… value of proper rest that…' (such… that)."),
        ],
      },
      p3: {
        title: "What sixty days actually proves",
        text: "Completing sixty consecutive days of structured, demanding language (1)___ proves something considerably more significant than mere grammatical or lexical competence alone, however genuinely substantial that particular (2)___ undoubtedly is by this final stage. It demonstrates, in a way few single achievements quite manage to, genuine sustained (3)___ — the capacity to show up, consistently and reliably, day after cumulative day, regardless of daily fluctuations in motivation or felt (4)___ of progress. This particular quality, researchers studying long-term skill development consistently emphasise, predicts eventual real-world (5)___ considerably more reliably than raw natural talent ever manages to on its own. Tomorrow's (6)___ final assessment will test specific language competence directly; the preceding fifty-nine days have already, quietly, demonstrated something arguably even more valuable and durable than that specific competence alone.",
        items: [
          { root: "prepare", accepted: ["preparation"], hint: "'sixty consecutive days of… language preparation' → preparation." },
          { root: "compete", accepted: ["competence"], hint: "'that particular competence' (sustantivo, ya usado antes)." },
          { root: "discipline", accepted: ["discipline"], hint: "'genuine sustained discipline' (sustantivo)." },
          { root: "sense", accepted: ["sense"], hint: "'felt sense of progress' (sustantivo)." },
          { root: "succeed", accepted: ["success"], hint: "'predicts eventual real-world success' → success." },
          { root: "assess", accepted: ["assessment"], hint: "'Tomorrow's final assessment' (sustantivo, ya usado)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso mixto final (todas las semanas)",
        items: [
          { s1: "It's essential that the committee be informed immediately.", key: "BE", s2: "It is essential that the committee ___ informed immediately.", accepted: ["be"], explanation: "subjuntivo (S8)." },
          { s1: "She had never felt so prepared for an exam before.", key: "HAD", s2: "Never ___ she felt so prepared for an exam before.", accepted: ["had"], explanation: "inversión (S2)." },
          { s1: "If he had practised more, he would feel more confident now.", key: "PRACTISED", s2: "If he ___ more, he would feel more confident now.", accepted: ["had practised", "had practiced"], explanation: "condicional mixto (S3)." },
          { s1: "The results were barely announced when celebrations began.", key: "SOONER", s2: "No ___ were the results announced than celebrations began.", accepted: ["sooner"], explanation: "no sooner… than (S9)." },
          { s1: "Because the deadline was close, the team worked all weekend.", key: "GIVEN", s2: "___ that the deadline was close, the team worked all weekend.", accepted: ["given"], explanation: "given that (S5)." },
          { s1: "Having prepared for months, she finally felt ready for the exam.", key: "PREPARED", s2: "Having ___ for months, she finally felt ready for the exam.", accepted: ["prepared"], explanation: "having + p.p. (S9)." },
        ],
      },
      p5: {
        title: "The class that prepared together",
        text: "When a small group of C1 candidates first began preparing together for their upcoming exam nearly sixty days earlier, few among them had genuinely anticipated quite how significantly the shared, collective experience of sustained group preparation would ultimately come to shape both their individual language progress and their broader, more personal relationship to the entire demanding process itself.\n\nThe group had formed almost by accident, initially, when several individual candidates studying independently for the same exam happened to connect through a shared online forum, gradually, tentatively agreeing to meet regularly to practise Speaking together, since solitary Speaking practice had proven, for most of them individually, considerably more difficult and less genuinely useful than practice with an actual live partner.\n\nWhat began as purely occasional, informal Speaking practice gradually, organically expanded into something considerably more comprehensive and sustained. Members began sharing genuinely useful resources, offering each other honest, constructive feedback on Writing tasks, and, perhaps most valuably of all, providing sustained mutual accountability during the inevitable difficult weeks when individual motivation alone would likely have proven genuinely insufficient to maintain daily practice.\n\nThe group's dynamic was not, it should honestly be said, without occasional friction. Members progressed at genuinely different individual rates; some grew visibly frustrated when others seemed to grasp certain difficult structures more quickly and easily than they personally did. Managing these entirely natural individual differences without allowing genuine resentment to quietly accumulate required considerable ongoing, deliberate effort and explicit, honest communication from the whole group.\n\nWhat ultimately held the group together, several members later reflected candidly, was a shared, explicit recognition that individual competitive comparison served nobody's genuine interests particularly well. Each member's own personal exam outcome depended entirely on their own individual preparation; a colleague's progress, properly understood, cost nothing whatsoever to celebrate genuinely and generously.\n\nBy this final, sixtieth day of preparation, the group had developed something considerably more valuable and durable than simply improved individual language competence alone. They had built genuine, sustained mutual trust, a shared vocabulary of encouragement specific to their own group's particular preparation journey, and a collective, hard-won confidence considerably harder to sustain alone than it had consistently proven within their supportive, mutually accountable group.\n\nAs they now approach tomorrow's genuine final assessment, several members have explicitly noted that whatever their own individual exam results ultimately prove to be, the sustained experience of preparing together has already, quietly, taught them something valuable about collaboration, patience and sustained collective effort that will likely, genuinely outlast the specific exam result itself by a considerable margin.",
        q: [
          mc("How did the study group initially form?", ["Through a formal class.", "Almost by accident, through a shared online forum.", "Through a family connection.", "Through a workplace requirement."], 1, "'The group had formed almost by accident… happened to connect through a shared online forum'."),
          mc("Why did they initially agree to meet?", ["To compete against each other.", "Because solitary Speaking practice had proven less useful than practice with a partner.", "For social reasons unrelated to the exam.", "Because a teacher required it."], 1, "'solitary Speaking practice had proven… considerably more difficult and less genuinely useful than practice with an actual live partner'."),
          mc("What did group members provide for each other?", ["Nothing beyond initial contact.", "Resources, feedback, and sustained mutual accountability.", "Only social conversation.", "Formal grading of each other's work."], 1, "'Members began sharing genuinely useful resources, offering each other honest… feedback… and… sustained mutual accountability'."),
          mc("Was the group dynamic entirely without friction?", ["Yes, completely smooth.", "No, there was occasional friction from differing progress rates.", "The group dissolved due to friction.", "Friction was never mentioned."], 1, "'The group's dynamic was not… without occasional friction. Members progressed at genuinely different individual rates'."),
          mc("What ultimately held the group together?", ["Strict rules.", "A shared recognition that competitive comparison served nobody's interests.", "A formal contract.", "External pressure."], 1, "'a shared, explicit recognition that individual competitive comparison served nobody's genuine interests particularly well'."),
          mc("What have members noted about the experience, regardless of individual results?", ["It was a waste of time.", "It taught them something about collaboration that will outlast the exam result.", "It made no real difference.", "They regret joining the group."], 1, "'the sustained experience of preparing together has already… taught them something valuable about collaboration, patience and sustained collective effort that will likely… outlast the specific exam result itself'."),
        ],
      },
      p6: {
        title: "Is group study more effective than solo preparation?",
        intro: "Cuatro estudiantes debaten si estudiar en grupo es más eficaz que la preparación individual.",
        texts: {
          A: "NADIA: For me, unquestionably yes. Group accountability kept me consistent during weeks when my own individual motivation alone would genuinely have failed me completely. Explaining concepts to others also, quite unexpectedly, deepened my own understanding considerably more than solo study alone ever managed to.",
          B: "TOM: I'm genuinely more mixed on this. Group study helped enormously with Speaking practice specifically, but I found it occasionally distracting for the kind of deep, focused grammar study that Reading and Writing preparation particularly seemed to require from me personally.",
          C: "PRIYA: What worked best for me was a deliberate hybrid approach — solo study for acquiring new content, group practice specifically for applying and testing it under more realistic, interactive conditions. Neither approach alone would have served me nearly as well as combining both did.",
          D: "SAM: Honestly, I think this depends enormously on individual personality and learning style. Some people genuinely thrive on social accountability and collaborative energy; others, myself included, honestly find groups somewhat draining and clearly prefer working through material entirely alone.",
        },
        q: [
          mc("Who believes group study was unquestionably more effective for them?", ["A", "B", "C", "D"], 0, "Nadia: 'For me, unquestionably yes'."),
          mc("Whose view most directly QUALIFIES Nadia's, being more mixed about group study's value?", ["A", "B", "C", "D"], 1, "Tom: 'I'm genuinely more mixed on this'."),
          mc("Who found a hybrid approach worked best, combining solo and group study?", ["A", "B", "C", "D"], 2, "Priya: 'What worked best for me was a deliberate hybrid approach'."),
          mc("Who argues it depends on individual personality and learning style?", ["A", "B", "C", "D"], 3, "Sam: 'this depends enormously on individual personality and learning style'."),
        ],
      },
      p7: {
        title: "The night before, revisited",
        text: "Every exam preparation course eventually arrives at this particular moment: the final full day of practice before the assessment itself finally, genuinely arrives. (1)___\n\nWhat should a well-prepared candidate actually do with this specific day? (2)___ The honest, evidence-based answer disappoints many anxious candidates hoping for some final, decisive piece of last-minute advantage.\n\nCramming additional content at this late stage rarely helps and frequently actively harms, given what sleep and cognitive research consistently, repeatedly shows about the costs of disrupted, anxious rest before high-stakes cognitive performance. (3)___ The knowledge candidates possess by this particular stage is, for better or worse, essentially already fixed and complete.\n\nWhat remains genuinely, meaningfully useful is light, confidence-building review rather than any intensive new study. (4)___ Reviewing a personal list of common mistakes, briefly reading through key structures one final time, perhaps completing one single, brief practice task, without excessive intensity or anxious over-preparation.\n\nEqually important, though frequently and unfortunately neglected, is genuine rest: proper sleep, reasonable, sensible nutrition, and deliberately, actively avoiding excessive last-minute anxiety wherever that is realistically, practically possible. (5)___ A well-rested mind reliably outperforms an exhausted one, however much additional content that exhausted mind might theoretically, on paper, seem to have covered.\n\nTomorrow's assessment will test knowledge and skill genuinely, thoroughly built over fifty-nine preceding days of sustained, cumulative effort. (6)___ Today's job is simply, and only, trusting that accumulated work, resting well, and arriving tomorrow appropriately, calmly prepared rather than anxiously, counterproductively over-prepared.",
        options: [
          "That moment carries a particular, recognisable weight of its own.", // A -> gap1
          "It's a genuinely fair, reasonable question to ask honestly.", // B -> gap2
          "Additional cramming, at this stage, mostly just adds risk.", // C -> gap3
          "Something considerably lighter serves candidates better now.", // D -> gap4
          "Rest, at this particular stage, is not indulgence but strategy.", // E -> gap5
          "It is not, today, about adding anything further at all.", // F -> gap6
          "No candidate has ever benefited from resting before an exam.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese momento tiene un peso reconocible propio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: es una pregunta justa de hacerse honestamente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el estudio de última hora solo añade riesgo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algo más ligero sirve mejor ahora."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el descanso aquí es estrategia, no indulgencia."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: hoy no se trata de añadir nada más."),
        ],
      },
      p8: {
        title: "Four candidates reflect the night before their final assessment",
        text: "Read what four candidates say the night before their final C1 assessment.\n\nA) NADIA: I'm resisting the urge to cram anything new tonight, honestly, even though it feels deeply counterintuitive. I've reviewed my personal list of common mistakes once, briefly, and now I'm deliberately, consciously trying to relax instead.\n\nB) TOM: Sixty days ago I could barely produce a coherent conditional sentence. Tonight, reflecting honestly on that, I feel genuinely proud of the progress, whatever tomorrow's specific, actual result ultimately turns out to be.\n\nC) PRIYA: I'm nervous, honestly, but it's a different, more settled kind of nervous than I felt at the very start of this whole course. Back then it was genuine uncertainty about my actual ability; now it's simply ordinary, understandable pre-exam nerves.\n\nD) SAM: My study group and I had one final, brief call tonight, mostly just for mutual encouragement rather than any actual last-minute content review. Knowing others are going through exactly this same experience alongside me genuinely helps considerably.\n",
        q: [
          mc("Who is resisting the urge to cram and instead deliberately relaxing?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm resisting the urge to cram anything new tonight… trying to relax instead'."),
          mc("Who reflects on how far they've come since barely producing a conditional sentence?", ["A", "B", "C", "D"], 1, "Tom: 'Sixty days ago I could barely produce a coherent conditional sentence… I feel genuinely proud'."),
          mc("Who distinguishes their current nervousness from earlier genuine uncertainty about ability?", ["A", "B", "C", "D"], 2, "Priya: 'Back then it was genuine uncertainty about my actual ability; now it's simply ordinary… pre-exam nerves'."),
          mc("Who had a final call with their study group for mutual encouragement?", ["A", "B", "C", "D"], 3, "Sam: 'My study group and I had one final, brief call tonight, mostly just for mutual encouragement'."),
          mc("Who has reviewed their list of common mistakes once, briefly?", ["A", "B", "C", "D"], 0, "Nadia: 'I've reviewed my personal list of common mistakes once, briefly'."),
          mc("Who feels proud of their progress regardless of tomorrow's specific result?", ["A", "B", "C", "D"], 1, "Tom: 'I feel genuinely proud of the progress, whatever tomorrow's specific… result ultimately turns out to be'."),
          mc("Who says knowing others share this experience genuinely helps?", ["A", "B", "C", "D"], 3, "Sam: 'Knowing others are going through exactly this same experience alongside me genuinely helps considerably'."),
          mc("Who describes their nervousness as a different, more settled kind than before?", ["A", "B", "C", "D"], 2, "Priya: 'it's a different, more settled kind of nervous than I felt at the very start'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras) — CRONOMETRADO (40 min)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras) en un máximo de 40 minutos. En un debate sobre la preparación de exámenes se plantearon dos ideas:\n· cramming the night before an exam is counterproductive (estudiar de última hora es contraproducente)\n· some last-minute review always helps, however tired you are (algo de repaso siempre ayuda)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What sixty days of studying has taught me' — reflexiona sobre todo el curso (real o imaginado).\n· CARTA/EMAIL a un/a futuro/a candidato/a del C1 con tu mejor consejo final antes del examen.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas) — CRONOMETRADO", "Escucha a cinco candidatos hablando de su preparación final (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué destreza mencionan como su punto fuerte?): A Reading · B Writing · C Listening · D Speaking · E Use of English grammar. TAREA DOS (¿cómo se sienten la noche antes?): A calm · B nervous but prepared · C excited · D slightly anxious · E confident.", "This is Part Four. You will hear five candidates talking about their final preparation. Speaker One: Reading has always been my strongest area, honestly, and tonight I feel genuinely calm about tomorrow, more than I expected to. Speaker Two: Writing improved dramatically for me this course, especially planning properly before starting. I'm nervous, sure, but I do feel genuinely prepared for tomorrow. Speaker Three: Listening was always tricky for me personally, but tonight, reflecting honestly, I actually feel quite excited rather than anxious about finally putting it all to the test. Speaker Four: Speaking is where I've grown most as a learner, without question. I'm slightly anxious tonight, if I'm honest, mostly just about managing my nerves properly on the day itself. Speaker Five: Grammar and Use of English became a genuine strength for me over these weeks. Tonight, honestly, I feel quite confident about tomorrow, more than I ever expected to feel at the actual start of this course.", [
      mc("Speaker 1 — TAREA UNO (punto fuerte)", ["A", "B", "C", "D", "E"], 0, "A: Reading."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E"], 1, "B: Writing."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E"], 2, "C: Listening."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E"], 3, "D: Speaking."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E"], 4, "E: Use of English grammar."),
      mc("Speaker 1 — TAREA DOS (cómo se siente)", ["A", "B", "C", "D", "E"], 0, "A: calm."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E"], 1, "B: nervous but prepared."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E"], 2, "C: excited."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E"], 3, "D: slightly anxious."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E"], 4, "E: confident."),
    ]),

    ...speakingParts({ p1: "cómo te sientes la noche antes de un examen importante", p2: "dos imágenes de la preparación final (alguien repasando tranquilamente sus notas y un grupo de amigos animándose mutuamente): compáralas y especula sobre lo que necesita cada persona en ese momento", p3: "qué es más útil la noche antes de un examen importante (repasar contenido, descansar bien, hablar con otros candidatos, hacer un repaso ligero, no pensar en el examen): comentadlo y elegid lo más eficaz", p4: "la preparación de exámenes: si el estudio en grupo es más eficaz que el individual, cómo se gestiona mejor la ansiedad la noche antes de una prueba importante, y qué papel tiene la confianza construida durante meses de preparación" }),

    SUMMARY("Resumen del Día 59 — Simulacro completo", [
      "Simulacro cronometrado completo: las 4 destrezas seguidas, como en el examen real. Repaso mixto de TODA la gramática y vocabulario del curso.",
      "Mañana: ¡DÍA 60! El repaso final del curso y el SIMULACRO FINAL.",
    ]),
    INFO("Tarea para el Día 60", "Descansa bien esta noche. No hagas más repaso intensivo. Mañana: el cierre del curso y el Simulacro Final."),
  ],
};

// ───────────────────────── DÍA 60 ─────────────────────────
const DAY60 = {
  title: "Día 60 — ¡Último día! Guía del día del examen + cierre del curso",
  description: "Guía completa y práctica del día del examen (qué llevar, cómo gestionar los nervios, la secuencia de las pruebas), resumen de todo el curso C1 Advanced, y el disparador del SIMULACRO FINAL. Las 4 destrezas (formato C1); Listening P1-P4 de despedida.",
  pedagogy: {
    objective: "Llegar al examen real con una guía clara del día del examen y una consolidación final de los 60 días de curso.",
    summary: "Guía del día del examen; cierre del curso C1 Advanced; Use of English P1–P8, Writing, Listening, Speaking; SIMULACRO FINAL.",
    reviewPrompts: ["¿Qué has aprendido en estos 60 días que no sabías al empezar?", "¿Te sientes preparado/a para el Simulacro Final?"],
  },
  items: [
    TEXT("🎓 ¡DÍA 60! El último día del curso C1 Advanced. Hoy: la GUÍA DEL DÍA DEL EXAMEN y el CIERRE del curso. Al final de este módulo, el SIMULACRO FINAL — la prueba que reúne todo lo aprendido en estas 12 semanas. ¡Enhorabuena por llegar hasta aquí!"),
    GRAMMAR("Guía del día del examen — C1 Advanced", `QUÉ LLEVAR: documento de identidad válido, bolígrafo/lápiz (si el examen es en papel), agua. Llega con margen de tiempo de sobra.
LA SECUENCIA DEL EXAMEN REAL: Reading & Use of English (90 min) → Writing (90 min) → [pausa] → Listening (~40 min) → Speaking (15 min, normalmente un día distinto, en pareja).
GESTIÓN DE LOS NERVIOS:
· Respira: unos segundos de respiración lenta antes de empezar cada prueba reducen la activación de ansiedad.
· Lee las instrucciones con calma la primera vez — no te precipites por nervios.
· Si te bloqueas en una pregunta: márcala, sigue adelante, vuelve si te sobra tiempo. NUNCA dejes que una pregunta difícil contamine tu rendimiento en las siguientes.
· En el Speaking: recuerda que el examinador quiere que te vaya bien — no es un interrogatorio, es una conversación.
DESPUÉS DE CADA PRUEBA: no analices mentalmente lo que crees que hiciste mal — concéntrate en la SIGUIENTE prueba con la mente despejada.
RECUERDA: has practicado las 8 partes del Use of English, el Writing, el Listening y el Speaking durante 60 días con el formato REAL de Cambridge. Confía en la preparación.`),
    WARN("Últimos recordatorios — errores a evitar el día del examen", "· No dejes NINGUNA pregunta en blanco — una respuesta razonada siempre vale más que nada.\n· En Writing, controla el tiempo: no dediques más de 45 min a cada tarea.\n· En Listening, no te bloquees si pierdes una palabra — sigue escuchando.\n· En Speaking P2, empieza comparando desde el primer segundo, no describiendo.\n· Revisa el conteo de palabras en Writing (220-260) antes de dar cualquier tarea por terminada."),
    grammarEx("Use of English — Repaso de cierre del curso", "Último repaso mixto antes del Simulacro Final.", [
      mc("It is essential that candidates ___ calm during the exam.", ["stay", "stays", "stayed"], 0, "subjuntivo: stay (base form)."),
      mc("Never ___ she felt so ready for an exam.", ["had", "did", "was"], 0, "inversión (repaso S2)."),
      mc("Having ___ for 60 days, she felt genuinely confident.", ["study", "studied", "studying"], 1, "having + p.p. (repaso S9)."),
      mc("___ was her preparation that she felt no need to cram.", ["Such", "So", "Very"], 0, "such + be + sustantivo + that (repaso S9)."),
      mc("With her nerves finally ___, she walked into the exam room.", ["calming", "calmed", "calm"], 1, "construcción absoluta: calmed (repaso S9)."),
      mc("The committee recommended that candidates ___ arrive early.", ["should", "would", "must"], 0, "recomendación con should (alternativa al subjuntivo, repaso S8)."),
    ]),
    GRAMMAR("Repaso final de vocabulario — el curso completo", "Un último repaso del vocabulario más importante del curso."),
    deck("C1 S12D60 — Repaso final del curso", [
      ["proficiency", "dominio / competencia (de un idioma)", "She achieved genuine proficiency after years of study.", "sustantivo", "prəˈfɪʃənsi"],
      ["fluency", "fluidez", "Fluency comes from consistent, sustained practice.", "sustantivo", "ˈfluːənsi"],
      ["achievement", "logro", "Completing the course was a genuine achievement.", "sustantivo", "əˈtʃiːvmənt"],
      ["milestone", "hito", "Day sixty marked an important milestone.", "sustantivo", "ˈmaɪlstəʊn"],
      ["perseverance", "perseverancia", "Her perseverance over sixty days finally paid off.", "sustantivo", "ˌpɜːsɪˈvɪərəns"],
      ["consolidate", "consolidar", "The final week consolidated everything learned.", "verbo", "kənˈsɒlɪdeɪt"],
      ["command (of a language)", "dominio (de un idioma)", "She now has a genuine command of formal English.", "sustantivo", "kəˈmɑːnd"],
      ["readiness", "preparación / disposición", "Her readiness for the exam was evident.", "sustantivo", "ˈredinəs"],
    ]),
    vocabEx("Vocabulario — Repaso final del curso completo", "Elige la opción correcta.", [
      mc("A high level of skill or competence in a language:", ["proficiency", "milestone", "readiness"], 0, "proficiency."),
      mc("The ability to speak smoothly and naturally:", ["fluency", "perseverance", "achievement"], 0, "fluency."),
      mc("An important point marking progress in a long process:", ["milestone", "fluency", "command"], 0, "milestone."),
      mc("Continued effort despite difficulty:", ["perseverance", "milestone", "proficiency"], 0, "perseverance."),
      mc("To make something more solid or secure:", ["consolidate", "achieve", "persevere"], 0, "consolidate."),
      mc("The state of being fully prepared for something:", ["readiness", "fluency", "milestone"], 0, "readiness."),
    ]),

    ...uoe({
      p1: {
        title: "What sixty days actually changes",
        text: "Learners completing a genuinely demanding sixty-day language course frequently find it (1)___ difficult, at the very end, to fully appreciate quite how much has actually changed since their very first day. Progress of this kind rarely (2)___ itself as a single dramatic transformation; it accumulates, instead, through countless small, largely unnoticed increments that only become genuinely visible in (3)___, once a learner deliberately pauses to compare their current ability with where they honestly began. Structures that once required careful, effortful conscious construction — the subjunctive, participle clauses, emphatic inversion — now (4)___ considerably more naturally, evidence of genuine, internalised competence rather than merely memorised, effortful rule application. This transformation, achieved through sustained daily (5)___ rather than any single dramatic breakthrough, represents precisely the kind of durable learning that (6)___ well beyond the specific exam this preparation was originally, explicitly designed to serve.",
        q: [
          mc("(1)", ["genuinely", "actually", "really", "truly"], 0, "'find it genuinely difficult'."),
          mc("(2)", ["announces", "declares", "presents", "shows"], 0, "'rarely announces itself'."),
          mc("(3)", ["retrospect", "hindsight", "review", "reflection"], 0, "'only become genuinely visible in retrospect'."),
          mc("(4)", ["emerge", "arise", "come", "flow"], 0, "'now emerge considerably more naturally'."),
          mc("(5)", ["effort", "work", "practice", "study"], 2, "'sustained daily practice' — mejor 'practice'."),
          mc("(6)", ["extends", "reaches", "stretches", "continues"], 0, "'learning that extends well beyond'."),
        ],
      },
      p2: {
        title: "Closing the loop",
        text: "Language courses, unlike many other forms of structured learning, rarely offer participants a single, definitive moment of genuine completion in (1)___ the way graduation ceremonies or formal certifications sometimes suggest. Language learning, by (2)___ nature, continues indefinitely; no single exam, however comprehensive, genuinely captures the full, ongoing, lifelong scope of what fluent communication in another language actually, genuinely involves. This does not mean today's milestone lacks genuine significance, however. It marks the (3)___ of one particular, clearly defined phase of structured preparation, and the beginning (4)___ another — applying what has been learned in real, genuinely consequential contexts beyond the relatively controlled, protected environment of structured exam preparation itself. Tomorrow's Simulacro Final tests specific competence built over sixty demanding days; the language skill itself, properly understood, will continue developing considerably (5)___ that specific assessment, through the ordinary, everyday use to which today's hard-won competence will now, quite naturally, increasingly (6)___ put.",
        q: [
          fb("(1)", ["quite"], "'not… quite the way graduation… suggest'."),
          fb("(2)", ["its"], "'by its very nature'."),
          fb("(3)", ["end", "close", "conclusion"], "'marks the end/close/conclusion of one… phase'."),
          fb("(4)", ["of"], "'the beginning of another'."),
          fb("(5)", ["beyond", "past"], "'developing considerably beyond/past that… assessment'."),
          fb("(6)", ["be"], "'to which… competence will… be put'."),
        ],
      },
      p3: {
        title: "The value of the whole journey",
        text: "Educational researchers studying long-term language (1)___ consistently emphasise that the genuine value of sustained, structured courses like this one extends considerably beyond the specific final (2)___ any single exam ultimately produces. The habits of sustained daily discipline, the strategic (3)___ built through weeks of deliberate practice, and the accumulated confidence gained through consistent, demonstrable progress all constitute (4)___ that will likely serve learners well beyond this particular exam's own specific, immediate context. Tomorrow's Simulacro Final represents an important, genuinely meaningful (5)___, certainly, but it is best understood as one meaningful milestone within a considerably longer, ongoing journey rather than as some final, absolute (6)___ to the entire process of language learning itself.",
        items: [
          { root: "acquire", accepted: ["acquisition"], hint: "'long-term language acquisition' → acquisition." },
          { root: "assess", accepted: ["assessment"], hint: "'the specific final assessment' → assessment." },
          { root: "compete", accepted: ["competence", "competencies"], hint: "'the strategic competence built through…' → competence." },
          { root: "value", accepted: ["value"], hint: "'all constitute value that will… serve learners' (sustantivo)." },
          { root: "achieve", accepted: ["achievement"], hint: "'an important, genuinely meaningful achievement' → achievement." },
          { root: "conclude", accepted: ["conclusion"], hint: "'some final, absolute conclusion' → conclusion." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso de cierre del curso",
        items: [
          { s1: "It's essential that candidates stay calm during the exam.", key: "STAY", s2: "It is essential that candidates ___ calm during the exam.", accepted: ["stay"], explanation: "subjuntivo: base form." },
          { s1: "She had never felt so ready for an exam before.", key: "HAD", s2: "Never ___ she felt so ready for an exam before.", accepted: ["had"], explanation: "inversión." },
          { s1: "Because she had studied for 60 days, she felt genuinely confident.", key: "STUDIED", s2: "Having ___ for 60 days, she felt genuinely confident.", accepted: ["studied"], explanation: "having + p.p." },
          { s1: "Her preparation was so thorough that she felt no need to cram.", key: "SUCH", s2: "___ was her preparation that she felt no need to cram.", accepted: ["such"], explanation: "such… that." },
          { s1: "Because her nerves were finally calmed, she walked into the exam room confidently.", key: "CALMED", s2: "With her nerves finally ___, she walked into the exam room confidently.", accepted: ["calmed"], explanation: "construcción absoluta." },
        ],
      },
      p5: {
        title: "Sixty days later",
        text: "On the first day of what would eventually become a genuinely transformative sixty-day journey, a language learner sat down to complete a diagnostic assessment feeling, by her own later, candid account, considerably overwhelmed by the sheer scope of material the course ahead apparently, daunting, intended to cover.\n\nHer initial diagnostic results had confirmed what she had already, privately suspected: while her everyday conversational English was genuinely serviceable for ordinary daily situations, the formal, academic register the C1 exam specifically, rigorously demanded felt, at that early stage, entirely foreign and somewhat intimidating in its apparent complexity.\n\nThe first few weeks, she later recalled candidly, had proven considerably harder than she had initially, perhaps naively, anticipated. Structures like inversion and cleft sentences felt awkward and artificial in her own early attempts at production, however clearly, intellectually she could recognise and understand them when encountering them in the course's own carefully constructed reading passages.\n\nWhat kept her genuinely going through those difficult early weeks, she reflected honestly much later, was not any dramatic early breakthrough, but rather the simple, cumulative structure of the course itself: one day building steadily on the previous one, each new structure connecting meaningfully to material she had, by that point, already genuinely mastered in earlier weeks.\n\nBy the course's own informal, self-described midpoint around day thirty, she had noticed, gradually and with some genuine surprise, that structures which had once required real, deliberate conscious effort were beginning to emerge more naturally and spontaneously in her own writing, seemingly without quite as much deliberate, effortful thought as they had initially, painstakingly required.\n\nThe final weeks, focused specifically on exam strategy and increasingly realistic timed practice, had brought their own genuinely distinct challenges. Sustaining focus and consistent performance across four consecutive skills proved, she discovered directly through repeated timed practice, a considerably different kind of challenge from simply, comfortably knowing individual grammar rules in isolation.\n\nNow, on this final, sixtieth day, preparing to sit her genuine, actual Simulacro Final, she found herself reflecting with a certain quiet, hard-earned satisfaction on the considerable distance actually travelled since that first, genuinely overwhelming diagnostic assessment. The formal register that had once felt entirely foreign now felt, while admittedly still not effortless, at least genuinely familiar and considerably more approachable and manageable than it clearly, obviously once had.\n\nWhatever her specific, eventual exam result ultimately proved to be, she reflected candidly, the sustained discipline and genuine competence built across these demanding sixty days would, she felt confident, continue serving her considerably beyond this single, specific assessment — in future academic work, in professional contexts, and in the ordinary, everyday confidence of genuinely, reliably being able to communicate complex, nuanced ideas clearly in a language that had once, not so very long ago, felt considerably more foreign and intimidating than it now, finally, genuinely did.",
        q: [
          mc("How did she feel on the first day of the course?", ["Completely confident.", "Considerably overwhelmed by the scope of material.", "Indifferent.", "Already fluent in formal register."], 1, "'feeling… considerably overwhelmed by the sheer scope of material'."),
          mc("What did her initial diagnostic confirm?", ["She had no English ability at all.", "Her conversational English was fine, but formal register felt foreign.", "She was already at C1 level.", "She needed to start from A1."], 1, "'her everyday conversational English was genuinely serviceable… the formal, academic register… felt… entirely foreign'."),
          mc("What kept her going through the difficult early weeks?", ["A single dramatic breakthrough.", "The simple, cumulative structure of the course itself.", "External pressure from others.", "Financial incentive."], 1, "'the simple, cumulative structure of the course itself: one day building steadily on the previous one'."),
          mc("What did she notice around the course's midpoint?", ["No change at all.", "Structures that once required effort were beginning to emerge more naturally.", "She had forgotten earlier material.", "She wanted to quit."], 1, "'structures which had once required real, deliberate conscious effort were beginning to emerge more naturally'."),
          mc("What distinct challenge did the final weeks bring?", ["Learning entirely new grammar.", "Sustaining focus and performance across four consecutive skills.", "Starting the course over.", "Working entirely alone for the first time."], 1, "'Sustaining focus and consistent performance across four consecutive skills proved… a considerably different kind of challenge'."),
          mc("How does she feel reflecting on day sixty, regardless of her exam result?", ["Regretful about the whole process.", "Confident the discipline and competence built will serve her beyond this assessment.", "Indifferent to the outcome.", "Convinced the course was a waste of time."], 1, "'the sustained discipline and genuine competence built across these demanding sixty days would… continue serving her considerably beyond this single, specific assessment'."),
        ],
      },
      p6: {
        title: "What matters most when a long course finally ends?",
        intro: "Cuatro estudiantes reflexionan sobre qué importa más al terminar un curso largo de 60 días.",
        texts: {
          A: "NADIA: For me, honestly, it's the specific exam result above everything else. Sixty days of genuinely hard work deserve a concrete, tangible outcome to show for it; without that, the whole sustained effort would feel, to me personally, somewhat incomplete or unresolved.",
          B: "TOM: I'd emphasise the process itself over any single specific outcome. Whatever tomorrow's result actually turns out to be, I've genuinely become a measurably better, more capable English speaker; that underlying competence doesn't simply disappear regardless of one single exam's particular, specific result.",
          C: "PRIYA: What matters most to me, honestly, is the discipline I've personally built. Showing up every single day for sixty consecutive days taught me something valuable about sustained, long-term commitment that will genuinely serve me well beyond just this one particular exam context.",
          D: "SAM: Honestly, for me it's the community and connection built along the way. The relationships formed with fellow learners during this shared, sustained journey feel, to me, considerably more durable and valuable than any single specific exam certificate ever really could be alone.",
        },
        q: [
          mc("Who believes the specific exam result matters most?", ["A", "B", "C", "D"], 0, "Nadia: 'it's the specific exam result above everything else'."),
          mc("Whose view most directly QUALIFIES Nadia's, emphasising the process over a single outcome?", ["A", "B", "C", "D"], 1, "Tom: 'I'd emphasise the process itself over any single specific outcome'."),
          mc("Who values the discipline built through sixty consecutive days most?", ["A", "B", "C", "D"], 2, "Priya: 'What matters most to me… is the discipline I've personally built'."),
          mc("Who values the community and connections built along the way most?", ["A", "B", "C", "D"], 3, "Sam: 'it's the community and connection built along the way'."),
        ],
      },
      p7: {
        title: "Sixty days, one paragraph at a time",
        text: "Every long, demanding undertaking eventually reaches its own natural, appropriate ending point, however that particular ending is eventually, specifically defined or marked. (1)___\n\nFor this particular course, that ending arrives today, on this sixtieth and genuinely final day, immediately before tomorrow's culminating Simulacro Final. (2)___ It's worth pausing, briefly, to genuinely name what these sixty cumulative days have actually, specifically built.\n\nThey have built comprehensive grammatical range: every major structure the real C1 exam actually tests, from the mandative subjunctive to emphatic inversion, from participle clauses to cross-text matching technique. (3)___ None of this arrived instantly; each element accumulated steadily, one deliberately structured day at a time.\n\nThey have built genuine strategic technique: reliable, well-rehearsed approaches to every distinct task type the exam actually contains, refined through repeated timed practice rather than simply understood in comfortable, unpressured theory alone. (4)___ Knowledge without technique remains, in practice, only partially useful under genuine time pressure.\n\nThey have built, perhaps most importantly of all, genuine sustained discipline: showing up daily, consistently, across twelve demanding weeks, regardless of the ordinary daily fluctuations in motivation any honest, sustained undertaking inevitably involves. (5)___ This particular quality, research on long-term achievement consistently suggests, predicts future success considerably more reliably than any single measure of raw natural talent ever quite manages to.\n\nTomorrow's Simulacro Final will test specific competence directly and rigorously. (6)___ Today, on this final day, the work is simply arriving calm, well-rested, and quietly, genuinely confident in everything these sixty days have already, demonstrably built.",
        options: [
          "This one is no exception to that general rule.",  // A -> gap1
          "That timing feels, in a real sense, exactly right.",  // B -> gap2
          "Range like that rarely appears without sustained, cumulative effort.", // C -> gap3
          "Technique turns knowledge into something reliably usable under pressure.", // D -> gap4
          "Showing up, day after day, is its own considerable achievement.", // E -> gap5
          "What it cannot test, though, is everything built along the way.", // F -> gap6
          "No course has ever actually built genuine strategic technique.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: este curso no es una excepción a esa regla."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ese momento se siente exactamente adecuado."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese rango no aparece sin esfuerzo sostenido."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la técnica convierte el conocimiento en algo usable bajo presión."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: presentarse cada día es en sí mismo un logro considerable."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: lo que no puede evaluar es todo lo construido en el camino."),
        ],
      },
      p8: {
        title: "Four learners reflect on completing the sixty-day C1 course",
        text: "Read what four learners say about completing this sixty-day C1 course.\n\nA) NADIA: Looking back at Day One feels almost surreal now, honestly. The subjunctive, cleft sentences, cross-text matching — all of it felt completely foreign back then, and now it genuinely feels like a natural, integrated part of how I actually think and write in English.\n\nB) TOM: What I'll genuinely remember most isn't any single specific grammar point, honestly, but the sheer discipline of showing up every single day for sixty consecutive days. That habit, more than any individual structure, feels like the thing I'll actually carry forward into future learning.\n\nC) PRIYA: Honestly, the vocabulary breadth still amazes me most when I stop to think about it. Surveillance, heritage, globalisation, migration, forgery — I can now genuinely discuss topics in English I couldn't have attempted at all sixty days ago.\n\nD) SAM: For me it's confidence, above everything else, honestly. I'm not claiming perfection by any means, but I no longer feel that familiar, paralysing fear of formal register I clearly remember feeling constantly back on Day One of this course.\n",
        q: [
          mc("Who says Day One feels surreal now, with structures feeling natural today?", ["A", "B", "C", "D"], 0, "Nadia: 'Looking back at Day One feels almost surreal now… it genuinely feels like a natural, integrated part'."),
          mc("Who will remember the discipline of showing up daily most?", ["A", "B", "C", "D"], 1, "Tom: 'What I'll genuinely remember most… is the sheer discipline of showing up every single day'."),
          mc("Who is most amazed by the vocabulary breadth gained?", ["A", "B", "C", "D"], 2, "Priya: 'the vocabulary breadth still amazes me most'."),
          mc("Who values confidence above everything else, no longer fearing formal register?", ["A", "B", "C", "D"], 3, "Sam: 'For me it's confidence, above everything else… I no longer feel that familiar, paralysing fear of formal register'."),
          mc("Who mentions the subjunctive, cleft sentences and cross-text matching specifically?", ["A", "B", "C", "D"], 0, "Nadia: 'The subjunctive, cleft sentences, cross-text matching — all of it felt completely foreign back then'."),
          mc("Who feels the habit of daily practice is what they'll carry forward?", ["A", "B", "C", "D"], 1, "Tom: 'That habit, more than any individual structure, feels like the thing I'll actually carry forward'."),
          mc("Who mentions topics like surveillance, heritage, globalisation and migration specifically?", ["A", "B", "C", "D"], 2, "Priya: 'Surveillance, heritage, globalisation, migration, forgery'."),
          mc("Who remembers feeling paralysing fear of formal register on Day One?", ["A", "B", "C", "D"], 3, "Sam: 'that familiar, paralysing fear of formal register I clearly remember feeling constantly back on Day One'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En una reflexión final sobre el aprendizaje de idiomas se plantearon dos ideas:\n· the exam result is what ultimately matters most after a long course (el resultado del examen es lo que más importa)\n· the process and skills built matter more than any single result (el proceso y las destrezas construidas importan más)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos TRES recursos gramaticales distintos aprendidos en el curso. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What sixty days of studying English has taught me' — tu reflexión final sobre el curso completo.\n· CARTA/EMAIL a tu 'yo' del Día 1, contándole qué has aprendido y qué le dirías antes de empezar.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos de despedida (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two learners discussing finishing the course. Woman: Sixty days ago I could barely produce a coherent conditional sentence. Man: Same here — looking back at Day One now feels almost surreal, honestly. Extract Two. You hear two friends discussing exam day. Man: I'm nervous, sure, but it's a different, more settled kind of nervous than at the start. Woman: Exactly — back then it was genuine uncertainty about ability; now it's just ordinary pre-exam nerves. Extract Three. You hear two students discussing what they'll take away from the course. Woman: What I'll remember most isn't any single grammar point, honestly, but the discipline of showing up every single day. Man: Agreed — that habit feels like the thing I'll actually carry forward into whatever comes next.", [
      mc("1. What could the woman barely do sixty days ago?", ["Speak any English at all.", "Produce a coherent conditional sentence.", "Understand basic vocabulary."], 1, "'Sixty days ago I could barely produce a coherent conditional sentence'."),
      mc("2. How does the man describe looking back at Day One?", ["Unremarkable.", "Almost surreal.", "Disappointing."], 1, "'looking back at Day One now feels almost surreal'."),
      mc("3. How does the man describe his nervousness now?", ["Identical to the start.", "A different, more settled kind of nervous.", "Completely absent."], 1, "'it's a different, more settled kind of nervous than at the start'."),
      mc("4. What was the woman's nervousness at the start about?", ["The exam format.", "Genuine uncertainty about her ability.", "Nothing in particular."], 1, "'back then it was genuine uncertainty about ability'."),
      mc("5. What will the woman remember most from the course?", ["A single grammar point.", "The discipline of showing up every single day.", "The exam itself."], 1, "'What I'll remember most isn't any single grammar point… but the discipline of showing up every single day'."),
      mc("6. What does the man say he'll carry forward?", ["Nothing in particular.", "That habit of daily discipline.", "A specific grammar rule."], 1, "'that habit feels like the thing I'll actually carry forward'."),
    ]),

    ...speakingParts({ p1: "qué es lo que más has disfrutado o lo que más te ha costado de aprender inglés", p2: "dos imágenes del logro (alguien cruzando la meta de una carrera y un grupo celebrando una graduación): compáralas y especula sobre lo que siente cada persona en ese momento", p3: "qué es lo más valioso de completar un proceso largo y exigente (el resultado final, las habilidades adquiridas, la disciplina desarrollada, las relaciones construidas, la confianza ganada): comentadlo y elegid lo más valioso", p4: "el aprendizaje de idiomas y el logro personal: si el resultado de un examen realmente refleja el aprendizaje conseguido, qué papel tiene la perseverancia frente al talento natural, y qué le dirías a alguien que empieza hoy un curso tan exigente como este" }),

    SUMMARY("Resumen final del curso C1 Advanced (60 días)", [
      "Has completado las 12 semanas del curso C1 Advanced: tiempos/aspecto, inversión/cleft, condicionales/modales de deducción, relativas/estilo indirecto, cohesión del discurso, colocaciones/idioms, subjuntivo/nominalización/retórica/lenguaje figurado, participios/absolutas/conectores de énfasis, estrategia de examen parte por parte, y la recta final con simulacros cronometrados.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220-260 palabras), el Listening (4 partes) y el Speaking (4 partes) con el formato REAL de Cambridge English: Advanced, durante 60 días consecutivos.",
      "Tienes ahora la guía completa del día del examen: qué llevar, la secuencia de pruebas, y cómo gestionar los nervios.",
      "¡Enhorabuena por completar el curso! Ahora, el SIMULACRO FINAL — la prueba que reúne todo lo aprendido.",
    ]),
    INFO("SIMULACRO FINAL", "En el módulo siguiente tienes el Simulacro Final completo y cronometrado, con el formato real del examen C1 Advanced. ¡Mucha suerte! Has trabajado 60 días para este momento — confía en tu preparación."),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "La recta final · El trabajo en equipo, los viajes, la comunicación no verbal y el día del examen",
  description: "Práctica cronometrada en condiciones de examen real para cada destreza (Reading & Use of English, Writing, Listening, Speaking), un simulacro combinado de las 4 destrezas, y la guía completa del día del examen que cierra el curso, con el hilo del trabajo en equipo, los viajes, la comunicación no verbal y el logro personal. Día 60 = cierre del curso y disparador del SIMULACRO FINAL.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
