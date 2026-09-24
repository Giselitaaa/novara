/**
 * C1 Advanced · Semana 7 — "Repaso integral (Semanas 1-6) · El trabajo remoto y el futuro laboral".
 * Consolidación de TODA la gramática de la primera mitad del curso: aspecto y
 * tiempos narrativos/futuro (S1), inversión/énfasis/cleft sentences (S2),
 * condicionales avanzados/modales de deducción/pasiva avanzada (S3), relativas
 * avanzadas/estilo indirecto/gerundios-infinitivos/comparación avanzada (S4),
 * conectores del discurso/cohesión textual (S5), y colocaciones/idioms/phrasal
 * verbs formales/binomios (S6) — combinados en cada texto.
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

// ───────────────────────── DÍA 31 ─────────────────────────
const DAY31 = {
  title: "Día 31 — Repaso integral: aspecto, tiempos y énfasis (Semanas 1-2) · El trabajo remoto",
  description: "Repaso combinado: aspecto perfecto/continuo, tiempos narrativos, formas de futuro (S1); inversión, cleft sentences, do enfático, so/such, fronting (S2). Vocabulario de trabajo remoto. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Combinar con fluidez los recursos gramaticales de las semanas 1 y 2 en un mismo texto.",
    summary: "Repaso combinado S1-S2; trabajo remoto; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["mezclar el aspecto correcto con estructuras de énfasis en la misma frase sin coherencia.", "olvidar que la inversión exige auxiliar, no solo anteposición.", "usar cleft sentences y fronting redundantemente en el mismo párrafo."],
    reviewPrompts: ["¿Recuerdas la diferencia entre 'I've been working' y 'I've worked'?", "¿Cómo invertías 'Never have I seen...'?"],
  },
  items: [
    TEXT("🎯 Semana 7: REPASO INTEGRAL de las Semanas 1-6. Hoy combinamos el ASPECTO/TIEMPOS/FUTURO (S1) con la INVERSIÓN/ÉNFASIS/CLEFT SENTENCES (S2) en los mismos textos. Vocabulario: el TRABAJO REMOTO."),
    GRAMMAR("Repaso combinado — Semanas 1 y 2", `SEMANA 1 — Aspecto y tiempos:
· Perfect simple (resultado) vs continuous (proceso/duración); continuous para lo temporal/cambiante/quejas (always doing).
· Tiempos narrativos: past simple + continuous + past perfect (+ continuous). Used to (hábitos/estados) vs would (solo hábitos).
· Futuro: will/going to/present continuous/simple; future continuous/perfect/perfect continuous; be about to/due to/to.
SEMANA 2 — Inversión y énfasis:
· Inversión tras Never/Rarely/Not only/Only when/No sooner/Little + auxiliar+sujeto.
· Cleft sentences: it-cleft (It was X that/who…) y what-cleft (What… is/was X).
· Do/did enfático; so+adj/adv…that vs such(a)+sust…that; intensificadores gradables/no gradables.
· Fronting; relativas formales con preposición+which/whom; participle clauses.`),
    grammarEx("Use of English — Repaso combinado S1-S2", "Completa o elige, combinando ambas semanas.", [
      mc("Never ___ such a chaotic first day working from home.", ["I have experienced", "have I experienced", "I experienced"], 1, "Never + inversión (S2)."),
      mc("By June, she ___ remotely for over three years.", ["will have been working", "will work", "works"], 0, "future perfect continuous (S1)."),
      fb("What really ___ (change) was the sudden shift to video calls. (what-cleft)", ["changed"], "what-cleft (S2)."),
      mc("I ___ constantly interrupted during video calls — it's maddening.", ["am", "am being", "have been being"], 1, "continuous temporal/queja (S1)."),
      mc("It was the lack of structure ___ made remote work hardest at first.", ["that", "who", "which"], 0, "it-cleft (S2)."),
      fb("By the time the pandemic hit, many companies ___ (already / experiment) with flexible hours.", ["had already been experimenting"], "past perfect continuous (S1)."),
      mc("Not only ___ productivity increase, but employee satisfaction also improved.", ["did", "has", "was"], 0, "Not only + inversión con did (S2)."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo remoto (C1)", "Léxico avanzado de trabajo remoto."),
    deck("C1 S7D31 — El trabajo remoto", [
      ["telecommute", "teletrabajar", "More employees telecommute now.", "verbo", "ˌtelikəˈmjuːt"],
      ["hybrid model", "modelo híbrido (de trabajo)", "The company adopted a hybrid model.", "sustantivo", "ˈhaɪbrɪd ˈmɒdl"],
      ["presenteeism", "presentismo (laboral)", "Presenteeism persists even remotely.", "sustantivo", "ˌprezənˈtiːɪzəm"],
      ["asynchronous", "asíncrono/a", "Teams increasingly work asynchronously.", "adjetivo", "eɪˈsɪŋkrənəs"],
      ["blur", "difuminar / desdibujar (límites)", "Remote work blurs work-life boundaries.", "verbo", "blɜː"],
      ["autonomy", "autonomía (laboral)", "Remote roles offer greater autonomy.", "sustantivo", "ɔːˈtɒnəmi"],
      ["disconnect", "desconectar", "It's hard to disconnect after hours.", "verbo", "ˌdɪskəˈnekt"],
      ["digital nomad", "nómada digital", "Digital nomads work from anywhere.", "sustantivo", "ˈdɪdʒɪtl ˈnəʊmæd"],
      ["onboarding", "incorporación (de un empleado)", "Remote onboarding remains challenging.", "sustantivo", "ˈɒnbɔːdɪŋ"],
      ["accountability", "rendición de cuentas / responsabilidad", "Remote work demands real accountability.", "sustantivo", "əˌkaʊntəˈbɪləti"],
    ]),
    vocabEx("Vocabulario — El trabajo remoto", "Elige la opción correcta.", [
      mc("To work from home rather than an office is to ___.", ["telecommute", "onboard", "blur"], 0, "telecommute."),
      mc("A mix of office and remote work is a ___ model.", ["hybrid", "asynchronous", "autonomous"], 0, "hybrid."),
      mc("Being physically present at work even when unwell or unproductive is ___.", ["presenteeism", "autonomy", "accountability"], 0, "presenteeism."),
      mc("Not happening at the same time is being ___.", ["asynchronous", "hybrid", "remote"], 0, "asynchronous."),
      mc("The freedom to make your own decisions at work is ___.", ["autonomy", "presenteeism", "onboarding"], 0, "autonomy."),
      mc("Someone who works while travelling constantly is a ___.", ["digital nomad", "hybrid worker", "telecommuter"], 0, "digital nomad."),
    ]),

    ...uoe({
      p1: {
        title: "The office that never quite closed",
        text: "Never in the history of modern work (1)___ so many employees been asked, almost overnight, to fundamentally rethink where and how their daily labour actually happened. What began as a temporary emergency measure has, for a great many workers, quietly become something considerably more permanent: a hybrid arrangement that few companies had seriously planned (2)___ in advance, and that continues, even now, to reshape itself in real time. By the time most organisations had properly settled on a coherent long-term policy, employees (3)___ already developed their own informal habits and expectations, making any subsequent attempt at a full, mandatory return to the office feel, to many, like an unwelcome step backward. It was this quiet, largely unplanned shift in employee expectation, more than any single corporate announcement, (4)___ ultimately forced most companies to formally acknowledge that remote and hybrid arrangements were here to stay. Not only (5)___ employees demonstrate that remote work could function effectively, but many also discovered, rather to their own surprise, a genuine preference for the autonomy it afforded. What remains genuinely unresolved, even years into this ongoing transition, is whether organisations (6)___ ever fully replicate, remotely, the informal mentorship and spontaneous collaboration that a shared physical office space had always, quietly, provided.",
        q: [
          mc("(1)", ["have", "has", "had", "having"], 0, "'so many employees been asked' — inversión: have."),
          mc("(2)", ["for", "with", "on", "of"], 0, "'planned for in advance'."),
          mc("(3)", ["had", "have", "were", "would"], 0, "'employees had already developed'."),
          mc("(4)", ["that", "which", "who", "it"], 0, "'more than any… announcement, that ultimately forced'."),
          mc("(5)", ["did", "have", "were", "had"], 0, "'Not only did employees demonstrate'."),
          mc("(6)", ["will", "would", "can", "could"], 3, "'whether organisations could ever fully replicate'."),
        ],
      },
      p2: {
        title: "What remote work actually revealed",
        text: "It was not, in the end, the technology itself (1)___ proved most revealing about remote work's rapid, largely unplanned adoption. Video calls, shared documents, instant messaging — all had existed, largely unused at scale, for years before circumstances suddenly forced their widespread deployment. What remote work genuinely revealed, rather, was (2)___ many jobs had always depended less on physical presence than corporate culture had traditionally assumed. Little did most managers realise, before being forced to find out the hard way, (3)___ much of their own instinctive reliance on visible presence had functioned as a poor, unreliable proxy for actual productivity. Not only (4)___ many employees prove just as productive working remotely, but some, freed from lengthy commutes and constant office interruption, became measurably more so. This is not to suggest remote work suits absolutely (5)___; it plainly, obviously doesn't, and many genuinely miss the spontaneous, informal connection that a shared office naturally fostered. But by and large, the pandemic-era experiment settled a question that had, until (6)___, remained largely untested at any meaningful scale: whether trust, rather than visible surveillance, could reliably sustain a functioning, productive workplace.",
        q: [
          fb("(1)", ["that", "which"], "'it was not… the technology itself that proved'."),
          fb("(2)", ["how"], "'revealed… was how many jobs'."),
          fb("(3)", ["how"], "'realise… how much of their own reliance'."),
          fb("(4)", ["did"], "'Not only did many employees prove'."),
          fb("(5)", ["everyone"], "'suits absolutely everyone'."),
          fb("(6)", ["then"], "'remained largely untested… until then'."),
        ],
      },
      p3: {
        title: "The productivity paradox",
        text: "Studies measuring remote work (1)___ have produced results considerably more nuanced than either enthusiastic advocates or sceptical critics initially, confidently predicted. Some tasks — those requiring sustained, uninterrupted focus — genuinely benefit from the reduced (2)___ that working from home typically affords, free from the constant interruption of open-plan offices. Other tasks, particularly those requiring rapid, informal (3)___ between colleagues, appear to suffer measurably when conducted entirely through scheduled video calls rather than spontaneous, unplanned hallway conversation. This (4)___ picture complicates any simple, blanket verdict on remote work's overall effectiveness. What seems increasingly clear, as accumulating research continues to refine earlier, cruder conclusions, is that the specific nature of the task itself, considerably more than any general, one-size-fits-all policy, should reasonably determine where and how any given piece of work actually gets done. Organisations that have thoughtfully embraced this more (5)___ approach — genuine flexibility calibrated to task type rather than blanket, uniform mandates — report considerably higher (6)___ than those imposing rigid, one-size-fits-all policies in either direction.",
        items: [
          { root: "interrupt", accepted: ["interruption"], hint: "'the reduced interruption' → interruption." },
          { root: "communicate", accepted: ["communication"], hint: "'rapid, informal communication' → communication." },
          { root: "nuance", accepted: ["nuanced"], hint: "'This nuanced picture' → nuanced." },
          { root: "differ", accepted: ["differentiated"], hint: "'a more differentiated approach' → differentiated." },
          { root: "satisfy", accepted: ["satisfaction"], hint: "'report considerably higher satisfaction' → satisfaction." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S1-S2",
        items: [
          { s1: "I have never seen such chaos in a first remote workday.", key: "NEVER", s2: "Never ___ such chaos in a first remote workday.", accepted: ["have I seen"], explanation: "inversión (S2)." },
          { s1: "By 2025, she will have worked remotely for five years.", key: "WILL", s2: "By 2025, she ___ remotely for five years.", accepted: ["will have been working"], explanation: "future perfect continuous (S1)." },
          { s1: "The lack of structure made remote work hardest, not the isolation.", key: "WAS", s2: "It ___ the lack of structure that made remote work hardest.", accepted: ["was"], explanation: "it-cleft (S2)." },
          { s1: "He kept interrupting during calls, and it was maddening.", key: "ALWAYS", s2: "He ___ during calls — it was maddening.", accepted: ["was always interrupting"], explanation: "continuous + always, queja (S1/S2)." },
          { s1: "Not only did productivity increase, but satisfaction also improved.", key: "ONLY", s2: "Not only ___ productivity increase, but satisfaction also improved.", accepted: ["did"], explanation: "inversión (S2)." },
          { s1: "By the time the policy changed, employees had already adapted.", key: "HAD", s2: "By the time the policy changed, employees ___ already adapted.", accepted: ["had"], explanation: "past perfect (S1)." },
        ],
      },
      p5: {
        title: "The manager who learned to let go",
        text: "For most of her fifteen-year management career, a senior operations director had built her entire professional reputation on a particular, closely observed style of oversight: walking the office floor regularly, checking in frequently and informally, and generally maintaining a constant, visible presence that she had always assumed, without much serious reflection, was simply what good, attentive management genuinely required. When her entire team was suddenly forced to work remotely, seemingly overnight, this carefully cultivated management style became, quite abruptly, entirely impossible to sustain.\n\nHer initial instinct, entirely understandable given her whole professional background, was to attempt to replicate her previous oversight remotely: frequent check-in calls, close monitoring of online activity, insistence on cameras being kept on during every single video meeting. It was this very approach, she later readily admitted, that had nearly driven several of her most talented team members to actively seek employment elsewhere within the first few genuinely difficult months.\n\nWhat changed her mind, she explained afterwards with evident and continuing embarrassment, was a frank, difficult conversation with one particularly valued team member who was, at that point, seriously and openly considering resignation. Never had she been told, quite so directly and uncomfortably, that her well-intentioned but genuinely excessive monitoring was actively undermining rather than supporting her own team's actual productivity and morale.\n\nIt was this uncomfortable but ultimately clarifying conversation that prompted a fundamental, considered rethink of her entire management approach. Rather than measuring her team's work by visible activity — how quickly someone responded to a message, how long they appeared 'active' on shared systems — she began instead, tentatively at first, to focus almost exclusively on actual, concrete outcomes: was the work genuinely getting done, and done well, regardless of precisely when or how it was actually being completed.\n\nThe shift proved, by any reasonable measure, remarkably successful. Not only did her team's measurable output improve substantially once freed from constant, anxious monitoring, but staff turnover, which had been worryingly high during those difficult, transitional early months, fell sharply and then remained consistently low for years afterwards. What she had belatedly, if somewhat reluctantly, discovered was that her previous constant, visible presence had never actually been the genuine source of her team's earlier success at all; it had, if anything, quietly constrained it.\n\nHer own, hard-won transformation has since become something of a case study within her own organisation's broader management training, cited as a genuine, instructive example of how deeply ingrained management habits, formed and reinforced over many years, can prove considerably harder to recognise and question than they initially, comfortably appear — until circumstances force a genuinely honest reckoning with whether those habits ever actually served their intended, stated purpose at all.",
        q: [
          mc("What management style had she built her reputation on?", ["Remote flexibility.", "Constant, visible presence and frequent informal check-ins.", "Strict written reports only.", "Delegation without oversight."], 1, "'walking the office floor regularly… maintaining a constant, visible presence'."),
          mc("What was her initial instinct when the team went remote?", ["To trust her team fully.", "To replicate her oversight remotely through frequent monitoring.", "To resign.", "To ignore the team entirely."], 1, "'frequent check-in calls, close monitoring… insistence on cameras being kept on'."),
          mc("What prompted her to rethink her approach?", ["A promotion.", "A frank conversation with a team member considering resignation.", "A company mandate.", "A pay cut."], 1, "'a frank, difficult conversation with one particularly valued team member who was… considering resignation'."),
          mc("What did she begin focusing on instead?", ["Visible activity.", "Actual, concrete outcomes rather than visible activity.", "Camera usage.", "Response speed."], 1, "'she began instead… to focus almost exclusively on actual, concrete outcomes'."),
          mc("What happened after the shift?", ["Nothing changed.", "Output improved and staff turnover fell sharply.", "Output declined.", "Turnover increased."], 1, "'her team's measurable output improve substantially… staff turnover… fell sharply'."),
          mc("What did she discover about her previous management style?", ["It had been essential to success.", "It had never been the genuine source of success and may have constrained it.", "It was universally effective.", "Nothing changed her view."], 1, "'her previous constant, visible presence had never actually been the genuine source of her team's earlier success at all; it had… quietly constrained it'."),
        ],
      },
      p6: {
        title: "Is remote work good for company culture?",
        intro: "Cuatro personas debaten si el trabajo remoto beneficia o perjudica la cultura de empresa.",
        texts: {
          A: "NADIA: I think remote work has, by and large, strengthened our culture rather than weakened it. Not only has it broadened who we can hire, drawing genuinely talented people regardless of location, but it's also forced us to be far more intentional about culture, rather than simply assuming it happens automatically through shared physical proximity alone.",
          B: "TOM: I'd push back fairly strongly on that. Culture, in my genuine experience, is built overwhelmingly through countless small, informal, unplanned moments — the corridor conversation, the shared lunch — that video calls simply cannot adequately replicate, however intentional and well-designed the effort. What remote teams often mistake for strong culture is really just efficient, well-organised process.",
          C: "PRIYA: My honest view is that it genuinely depends enormously on company size and specific stage. Smaller, newer companies still forming their fundamental identity probably do need more in-person time together. Larger, well-established organisations with an already clearly defined, deeply embedded culture can likely sustain that culture remotely far more easily and successfully.",
          D: "SAM: What I keep noticing is how selectively this whole debate gets applied within most organisations. Leadership itself often works remotely or hybrid with real flexibility, while simultaneously insisting more junior staff must be physically present in the office. That double standard, to me, matters rather more than the underlying, abstract question of remote work itself.",
        },
        q: [
          mc("Who thinks remote work has strengthened company culture?", ["A", "B", "C", "D"], 0, "Nadia: 'remote work has, by and large, strengthened our culture'."),
          mc("Whose view most directly CHALLENGES Nadia's, citing informal moments culture needs?", ["A", "B", "C", "D"], 1, "Tom: 'Culture… is built overwhelmingly through countless small, informal, unplanned moments'."),
          mc("Who argues it depends on company size and stage?", ["A", "B", "C", "D"], 2, "Priya: 'it genuinely depends enormously on company size and specific stage'."),
          mc("Who focuses on the double standard between leadership and junior staff?", ["A", "B", "C", "D"], 3, "Sam: 'Leadership itself often works remotely… while simultaneously insisting more junior staff must be physically present'."),
        ],
      },
      p7: {
        title: "The meeting that never needed to happen",
        text: "Ask almost any office worker, remote or otherwise, what they would most like to change about their working day, and a striking number will name the same persistent culprit. (1)___\n\nThe sheer proliferation of unnecessary meetings, many workers report, has if anything worsened rather than improved since the widespread shift towards remote and hybrid work. (2)___ What once required physically gathering in a room now takes only a few clicks to schedule, removing what had previously been a natural, self-limiting friction.\n\nThis matters more than it might initially seem. (3)___ Time spent in poorly planned, unnecessary meetings is time necessarily taken from genuinely focused, productive work, and the cumulative cost across an entire organisation can prove genuinely substantial.\n\nSome companies have begun experimenting with deliberate countermeasures. (4)___ Meeting-free days, strict default time limits, and a firm requirement that every meeting have a clear, written agenda circulated well in advance have all been tried, with genuinely mixed but often encouraging results.\n\nWhat seems to matter most, according to those who have studied this specific problem closely, is less any single specific policy than a broader, sustained cultural shift. (5)___ Employees need to feel genuinely empowered to decline meetings that don't clearly require their specific presence, without fear of appearing insufficiently engaged or committed.\n\nWhether this particular cultural shift can be sustained once the current pointed emphasis on efficiency inevitably fades remains, honestly, an open question. (6)___ Old habits, once formed, have a well-documented tendency to quietly, gradually reassert themselves.",
        options: [
          "The specific complaint is remarkably, almost universally consistent.", // A -> gap 1
          "Scheduling one now costs almost nothing at all.",                 // B -> gap 2
          "Wasted time, multiplied widely, adds up fast.",                   // C -> gap 3
          "A handful of concrete fixes have been widely tried.",             // D -> gap 4
          "Permission to say no matters as much as any formal policy.",      // E -> gap 5
          "Old patterns rarely disappear without deliberate, sustained effort.", // F -> gap 6
          "No employee has ever complained about excessive meetings.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la queja es sorprendentemente uniforme."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: programar una reunión ahora cuesta poco."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el tiempo perdido se acumula rápido."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: se han probado soluciones concretas."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el permiso para decir no importa igual."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: los viejos patrones rara vez desaparecen solos."),
        ],
      },
      p8: {
        title: "Four people discuss their experience of remote work",
        text: "Read what four people say about their own experience with remote and hybrid work.\n\nA) NADIA: Never have I felt more productive than I do working from home now. My old office was a constant stream of interruptions, and it was the sheer quiet, more than anything else, that finally let me actually focus properly. That said, I do sometimes genuinely miss the easy, casual social contact of shared physical space.\n\nB) TOM: I struggled considerably at first, if I'm honest. It was the lack of clear structure, not the isolation itself, that proved hardest for me personally. I've since built my own rigid daily routine to compensate — something I never once needed when a physical office naturally provided that structure for me automatically.\n\nC) PRIYA: My company embarked on a fully remote model three years ago now, and by and large it's worked out remarkably well for us as an organisation. Not only have we been able to hire far more broadly and diversely, but employee satisfaction scores have also risen considerably, year after year, since we made that initial change.\n\nD) SAM: What surprised me most, honestly, was discovering just how much of my old office routine had actually been pure, unnecessary presenteeism all along. I used to stay visibly late for appearances alone; now I'm judged purely on actual results, and it's been, without exception, genuinely liberating for me.\n",
        q: [
          mc("Who feels more productive at home due to fewer interruptions?", ["A", "B", "C", "D"], 0, "Nadia: 'Never have I felt more productive… it was the sheer quiet'."),
          mc("Who struggled with lack of structure rather than isolation?", ["A", "B", "C", "D"], 1, "Tom: 'It was the lack of clear structure, not the isolation itself, that proved hardest'."),
          mc("Whose company embarked on a fully remote model three years ago?", ["A", "B", "C", "D"], 2, "Priya: 'My company embarked on a fully remote model three years ago'."),
          mc("Who discovered their old office routine involved unnecessary presenteeism?", ["A", "B", "C", "D"], 3, "Sam: 'just how much of my old office routine had actually been pure, unnecessary presenteeism'."),
          mc("Who misses the easy social contact of shared physical space?", ["A", "B", "C", "D"], 0, "Nadia: 'I do sometimes genuinely miss the easy, casual social contact'."),
          mc("Who built a rigid daily routine to compensate for lost structure?", ["A", "B", "C", "D"], 1, "Tom: 'I've since built my own rigid daily routine to compensate'."),
          mc("Who says employee satisfaction has risen since going fully remote?", ["A", "B", "C", "D"], 2, "Priya: 'employee satisfaction scores have also risen considerably'."),
          mc("Who is now judged on results rather than visible presence?", ["A", "B", "C", "D"], 3, "Sam: 'now I'm judged purely on actual results'."),
          mc("Who has been able to hire more broadly and diversely?", ["A", "B", "C", "D"], 2, "Priya: 'we have been able to hire far more broadly and diversely'."),
          mc("Who used to stay visibly late purely for appearances?", ["A", "B", "C", "D"], 3, "Sam: 'I used to stay visibly late for appearances alone'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el trabajo se plantearon dos ideas:\n· remote work benefits both employees and companies (beneficia a empleados y empresas)\n· physical presence in an office remains essential for genuine collaboration (la presencia física sigue siendo esencial)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos gramaticales de las Semanas 1-2 (inversión, cleft sentence, aspecto matizado). Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para una empresa sobre cómo mejorar su política de trabajo remoto/híbrido: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'How remote work changed me' — reflexiona sobre tu propia experiencia o la de alguien cercano.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two colleagues discussing remote work. Woman: Never have I felt so productive as I do working from home now. Man: Same here, honestly. It was the constant office interruptions, not the actual work itself, that always slowed me down before. Extract Two. You hear a manager discussing her team. Woman: Not only did productivity improve once I stopped micromanaging remotely, but morale rose sharply too. Man: It sounds like letting go was exactly what your team genuinely needed all along. Extract Three. You hear two friends discussing meetings. Man: By the time our meeting finally started, we'd already lost twenty minutes to technical problems. Woman: That's exactly why I've started declining meetings that don't clearly need my presence at all now.", [
      mc("1. How does the woman feel about working from home?", ["Less productive.", "More productive than before.", "The same as before."], 1, "'Never have I felt so productive'."),
      mc("2. What did the man say used to slow him down?", ["The actual work.", "Constant office interruptions.", "Nothing."], 1, "'the constant office interruptions… that always slowed me down'."),
      mc("3. What happened when the manager stopped micromanaging?", ["Nothing changed.", "Productivity improved and morale rose.", "Productivity fell."], 1, "'productivity improve once I stopped micromanaging… morale rose sharply too'."),
      mc("4. What does the man say about her team?", ["They needed more oversight.", "Letting go was what they needed.", "They preferred micromanagement."], 1, "'letting go was exactly what your team genuinely needed'."),
      mc("5. What happened at the start of the meeting?", ["It started on time.", "Twenty minutes were lost to technical problems.", "It was cancelled."], 1, "'we'd already lost twenty minutes to technical problems'."),
      mc("6. What has the woman started doing?", ["Attending every meeting.", "Declining meetings that don't need her presence.", "Scheduling more meetings."], 1, "'I've started declining meetings that don't clearly need my presence'."),
    ]),

    ...speakingParts({ p1: "si trabajas o has trabajado de forma remota y qué ventajas o desventajas le encuentras", p2: "dos imágenes del trabajo (alguien trabajando desde casa con flexibilidad y una oficina tradicional con equipo colaborando): compáralas y especula sobre la productividad de cada una", p3: "qué es lo más importante en el futuro del trabajo (la flexibilidad, la colaboración presencial, la confianza, los resultados frente a las horas, el equilibrio vida-trabajo): comentadlo y elegid lo más importante", p4: "el trabajo remoto y el futuro laboral: si beneficia realmente a las empresas, si erosiona la cultura corporativa y cómo debería evolucionar el lugar de trabajo en los próximos años" }),

    SUMMARY("Resumen del Día 31", [
      "Repaso combinado: aspecto/tiempos/futuro (S1) + inversión/cleft sentences/énfasis/fronting (S2), aplicados juntos en los mismos textos.",
      "Practica reconocer QUÉ estructura usar según el matiz que necesitas comunicar, no de forma aislada por semana.",
      "Vocabulario de trabajo remoto. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 32", "Escribe un párrafo combinando al menos 3 estructuras de las Semanas 1-2. Repasa las flashcards. Mañana: repaso combinado de las Semanas 3-4."),
  ],
};

// ───────────────────────── DÍA 32 ─────────────────────────
const DAY32 = {
  title: "Día 32 — Repaso integral: hipótesis, modales y relativas (Semanas 3-4) · La automatización y el empleo",
  description: "Repaso combinado: condicionales mixtos, wish/as if, modales de deducción/crítica, pasiva avanzada/causativo (S3); relativas reducidas/con cuantificador, estilo indirecto preciso, gerundios-infinitivos con matiz, comparación avanzada (S4). Vocabulario de automatización. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Combinar con fluidez los recursos de hipótesis, deducción, pasiva y cohesión de las semanas 3 y 4.",
    summary: "Repaso combinado S3-S4; automatización y empleo; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["mezclar el tiempo del condicional mixto incorrectamente al combinarlo con pasiva.", "olvidar la estructura propia del verbo introductor al combinar con relativas.", "usar 'would' en la cláusula if incluso en frases complejas combinadas."],
    reviewPrompts: ["¿Recuerdas cómo se forma un condicional mixto (pasado→presente)?", "¿Qué verbos introductores llevan +of+-ing? ¿Cuáles +to+inf?"],
  },
  items: [
    TEXT("🔁 Ayer, Semanas 1-2. Hoy combinamos los CONDICIONALES/MODALES/PASIVA AVANZADA (S3) con las RELATIVAS/ESTILO INDIRECTO/COMPARACIÓN (S4). Vocabulario: la AUTOMATIZACIÓN y el EMPLEO."),
    GRAMMAR("Repaso combinado — Semanas 3 y 4", `SEMANA 3 — Hipótesis y pasiva avanzada:
· Condicionales mixtos (pasado→presente/presente→pasado); alternativas a if (unless/providing/should+inversión/but for).
· Wish/if only (+past/+past perfect/+would); as if/though; it's time; would rather.
· Modales de deducción presente/pasada; crítica retrospectiva (should have/needn't have/could have).
· Pasiva de dos objetos, pasiva de reporte (is said to…), pasiva con modales; causativo have/get sth done.
SEMANA 4 — Relativas, estilo indirecto y comparación:
· Relativas reducidas (-ing/-ed) y con cuantificador (some/many/none of which/whom).
· Estilo indirecto: verbos introductores precisos (admit/deny+-ing, insist on+-ing, accuse of+-ing…).
· Gerundios/infinitivos con matiz (remember/forget/regret/stop/mean).
· Comparación avanzada: by far, nowhere near, the+comp…the+comp; whatever/whichever, no matter what/how.`),
    grammarEx("Use of English — Repaso combinado S3-S4", "Completa o elige, combinando ambas semanas.", [
      mc("If factories ___ automation sooner, unemployment might be lower now.", ["embraced", "had embraced", "would embrace"], 1, "mixto: pasado→presente (S3)."),
      mc("The workers, ___ jobs were automated, received retraining.", ["whose", "who", "which"], 0, "relativa con whose (S4)."),
      fb("The union ___ (deny / cause) the strike unnecessarily. (verbo introductor preciso)", ["denied causing"], "deny + -ing (S4)."),
      mc("It's high time factories ___ better retraining programmes.", ["establish", "established", "will establish"], 1, "it's time + past simple (S3)."),
      mc("The report, most ___ was based on outdated data, was widely criticised.", ["of which", "of whom", "which"], 0, "cuantificador + of which (S4)."),
      fb("They ___ (should / warn) workers about the coming changes.", ["should have warned"], "crítica retrospectiva (S3)."),
      mc("We can't afford new machinery, ___ a full factory upgrade.", ["let alone", "not to mention", "whatever"], 0, "let alone (S4, tras negación)."),
    ]),
    GRAMMAR("Vocabulario del día — La automatización y el empleo (C1)", "Léxico avanzado de automatización."),
    deck("C1 S7D32 — Automatización y empleo", [
      ["displacement", "desplazamiento (laboral)", "Job displacement worries many workers.", "sustantivo", "dɪsˈpleɪsmənt"],
      ["obsolete", "obsoleto/a", "Many manual jobs risk becoming obsolete.", "adjetivo", "ˈɒbsəliːt"],
      ["upskill", "mejorar/actualizar las competencias", "Workers must upskill continuously.", "verbo", "ʌpˈskɪl"],
      ["redundancy", "despido (por reestructuración)", "The company announced mass redundancies.", "sustantivo", "rɪˈdʌndənsi"],
      ["retraining", "reciclaje profesional", "The scheme funds worker retraining.", "sustantivo", "ˌriːˈtreɪnɪŋ"],
      ["safety net", "red de seguridad (social)", "A strong safety net eases transitions.", "sustantivo", "ˈseɪfti net"],
      ["labour market", "mercado laboral", "Automation is reshaping the labour market.", "sustantivo", "ˈleɪbə ˈmɑːkɪt"],
      ["algorithmic management", "gestión algorítmica", "Algorithmic management now sets shifts.", "sustantivo", "ˌælɡəˈrɪðmɪk ˈmænɪdʒmənt"],
      ["precarity", "precariedad (laboral)", "Gig work often means precarity.", "sustantivo", "prɪˈkærəti"],
      ["transition", "transición", "The labour market transition is painful.", "sustantivo", "trænˈzɪʃn"],
    ]),
    vocabEx("Vocabulario — La automatización y el empleo", "Elige la opción correcta.", [
      mc("Being forced out of a job by technology or restructuring is ___.", ["displacement", "obsolete", "upskilling"], 0, "displacement."),
      mc("No longer useful because of new technology is ___.", ["obsolete", "precarious", "redundant"], 0, "obsolete."),
      mc("To learn new, more advanced skills is to ___.", ["upskill", "displace", "retrain"], 0, "upskill (aunque 'retrain' también aplica, 'upskill' es más preciso aquí)."),
      mc("Losing your job because your role is no longer needed is ___.", ["redundancy", "upskilling", "safety net"], 0, "redundancy."),
      mc("A system of support that protects people from hardship is a ___.", ["safety net", "labour market", "precarity"], 0, "safety net."),
      mc("Insecure, unstable employment conditions are ___.", ["precarity", "redundancy", "displacement"], 0, "precarity."),
    ]),

    ...uoe({
      p1: {
        title: "If the machines had come slower",
        text: "If automation (1)___ arrived more gradually, over several generations rather than within a single working lifetime, societies might have had considerably more time to develop adequate retraining systems and social safety nets. As it stands, however, many workers whose jobs (2)___ automated over the past decade received little meaningful warning and even less practical support in genuinely adapting to the resulting change. It's high time governments (3)___ this transition with the seriousness it clearly deserves, rather than treating displaced workers as merely regrettable but ultimately acceptable collateral damage of otherwise beneficial technological progress. Workers, whose skills (4)___ rendered obsolete almost overnight in some documented cases, cannot simply be expected to upskill instantly, without meaningful institutional support. No matter how (5)___ the case for automation's overall economic benefits genuinely is, and it frequently is considerably compelling, the human costs of a poorly managed transition deserve every bit as much serious, sustained policy attention as the aggregate economic gains that automation, on balance, undeniably brings.",
        q: [
          mc("(1)", ["had", "would have", "has", "was"], 0, "condicional mixto: had arrived (S3)."),
          mc("(2)", ["were", "have been", "had been", "are"], 2, "'whose jobs had been automated' (anterioridad, S3/S4)."),
          mc("(3)", ["treated", "treat", "will treat"], 1, "it's time + past simple (S3): 'treated'."),
          mc("(4)", ["were", "have been", "had been", "are"], 2, "'whose skills had been rendered' (relativa + pasiva avanzada, S3/S4)."),
          mc("(5)", ["compelling", "compellingly", "compel", "compels"], 0, "no matter how + adjetivo (S4)."),
        ],
      },
      p2: {
        title: "The union that changed its approach",
        text: "For years, the union had insisted (1)___ automation itself, refusing to negotiate over anything beyond outright resistance. Not only (2)___ this approach fail to prevent the automation from eventually proceeding regardless, but it also left workers considerably less prepared for the change than they might otherwise, with a different approach, have been. Whichever specific strategy the union eventually chose to adopt going forward, it was clear that simple, blanket opposition alone was nowhere near (3)___ to protect members' genuine long-term interests. Union leaders, several ___ (4) had themselves worked the factory floor for decades, eventually shifted their approach: rather than denying automation was coming at all, they began negotiating specifically for retraining guarantees, extended notice periods, and meaningful severance packages. It's a far cry (5)___ their original, purely oppositional stance, but by and large, members now report feeling considerably better protected than under the old approach.",
        q: [
          fb("(1)", ["on"], "'had insisted on automation itself' — S3: insist on + sustantivo/-ing."),
          fb("(2)", ["did"], "'Not only did this approach fail' (S2/S4 inversión)."),
          fb("(3)", ["enough", "sufficient"], "'nowhere near enough/sufficient' (S4)."),
          fb("(4)", ["of whom"], "'leaders, several of whom had… worked' (S4 cuantificador)."),
          fb("(5)", ["from"], "'a far cry from their original stance' (S6, pero repasado aquí)."),
        ],
      },
      p3: {
        title: "The algorithm that decided who worked",
        text: "Modern warehouse and delivery workers increasingly find their entire working day (1)___ not by a human manager but by an algorithm — a system that assigns shifts, tracks performance metrics and, in a growing number of well-documented cases, even determines who ultimately keeps their job. This shift towards algorithmic management has given rise to considerable (2)___ about accountability: when an algorithm makes a consequential decision affecting a worker's livelihood, who exactly bears (3)___ for ensuring that decision was fair, accurate and genuinely justified? Workers subjected to this kind of (4)___ oversight frequently report feeling that appealing an algorithmic decision is considerably harder than appealing a human manager's judgement, precisely because the underlying reasoning often remains genuinely, frustratingly opaque even to the companies deploying these systems themselves. Addressing this growing (5)___ transparency gap remains, by most honest accounts, a genuine and increasingly urgent policy challenge.",
        items: [
          { root: "shape", accepted: ["shaped"], hint: "'their entire working day shaped' → shaped." },
          { root: "concern", accepted: ["concern"], hint: "'considerable concern' (sustantivo)." },
          { root: "responsible", accepted: ["responsibility"], hint: "'bears responsibility for' → responsibility." },
          { root: "algorithm", accepted: ["algorithmic"], hint: "'this kind of algorithmic oversight' → algorithmic." },
          { root: "worry", accepted: ["worrying"], hint: "'this growing worrying transparency gap' → worrying." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S3-S4",
        items: [
          { s1: "If factories had embraced automation sooner, unemployment would be lower now.", key: "HAD", s2: "If factories ___ automation sooner, unemployment would be lower now.", accepted: ["had embraced"], explanation: "condicional mixto (S3)." },
          { s1: "The workers whose jobs got automated received retraining.", key: "WHOSE", s2: "The workers, ___ jobs were automated, received retraining.", accepted: ["whose"], explanation: "relativa con whose (S4)." },
          { s1: "The union claimed it didn't cause the strike unnecessarily.", key: "DENIED", s2: "The union ___ the strike unnecessarily.", accepted: ["denied causing"], explanation: "deny + -ing (S4)." },
          { s1: "It's essential that we establish retraining programmes now.", key: "TIME", s2: "It's high ___ we established retraining programmes.", accepted: ["time"], explanation: "it's time + past simple (S3)." },
          { s1: "They failed to warn workers about the coming changes, which was a mistake.", key: "SHOULD", s2: "They ___ workers about the coming changes.", accepted: ["should have warned"], explanation: "crítica retrospectiva (S3)." },
          { s1: "We can't afford new machinery, and certainly not a full upgrade.", key: "ALONE", s2: "We can't afford new machinery, let ___ a full upgrade.", accepted: ["alone"], explanation: "let alone (S4)." },
        ],
      },
      p5: {
        title: "The factory that retrained itself",
        text: "When automation technology finally arrived at a mid-sized manufacturing plant that had employed several hundred workers for decades, management faced a decision that countless comparable factories worldwide had already, over preceding years, confronted in broadly similar circumstances: automate aggressively and accept substantial job losses as simply an unavoidable, regrettable cost of remaining competitive, or attempt something rather more ambitious and considerably less commonly attempted.\n\nThe plant's management, several of whom had themselves risen through the ranks from the factory floor decades earlier, chose the more ambitious path. Rather than simply making the majority of the existing workforce redundant, they committed to a genuinely comprehensive retraining programme, one that would attempt to transition as many existing workers as reasonably possible into the new roles that automation itself, somewhat paradoxically, would simultaneously create: maintaining and programming the very robots that were displacing more traditional manual assembly work.\n\nCritics, both inside and outside the company, were initially deeply sceptical. Many workers, some of whom had spent their entire working lives on a single assembly line, were, quite understandably, nowhere near confident they could successfully master the genuinely different technical skills that maintaining sophisticated robotic systems would evidently require. Had management simply proceeded with straightforward, conventional redundancies instead, the process would undoubtedly have proven considerably faster and, in the short term at least, measurably cheaper.\n\nThe retraining programme that management ultimately designed proved, on reflection, considerably more successful than even its own most optimistic internal architects had initially, cautiously dared to hope. Workers were given generous, extended time to learn — considerably more than industry convention typically allowed — and were paired systematically with experienced technical mentors rather than simply being handed a manual and left to somehow, unassisted, work things out entirely for themselves.\n\nBy the programme's official conclusion, a genuinely substantial majority of the original workforce had successfully transitioned into new, more technical roles, many of which actually paid measurably better than their original positions had. Those who couldn't, or simply chose not to make the transition, received what management described, without apparent exaggeration, as considerably more generous severance and extended job-placement support than comparable companies elsewhere in the same industry had typically, conventionally provided.\n\nThe factory's approach has since become something of a widely cited reference case in ongoing policy discussions about managing automation more humanely and effectively. It demonstrated, rather more convincingly than most purely theoretical policy arguments could plausibly manage, that the sharp, seemingly inevitable trade-off between technological progress and worker welfare was, at the very least, considerably less fixed and less unavoidable than conventional industry wisdom had generally, comfortably assumed it to be — provided companies were genuinely willing to invest the necessary time, money and sustained institutional patience that a properly managed transition evidently, demonstrably requires.",
        q: [
          mc("What decision did the factory's management face?", ["Whether to close entirely.", "Whether to automate aggressively with job losses, or attempt a comprehensive retraining programme.", "Whether to relocate.", "Whether to unionise."], 1, "'automate aggressively and accept substantial job losses… or attempt something rather more ambitious'."),
          mc("What did management choose to do?", ["Simple redundancies.", "A comprehensive retraining programme to transition workers into new roles.", "Close the factory.", "Ignore automation."], 1, "'they committed to a genuinely comprehensive retraining programme'."),
          mc("How were critics initially?", ["Enthusiastic.", "Deeply sceptical.", "Indifferent.", "Supportive."], 1, "'Critics… were initially deeply sceptical'."),
          mc("What support was given to workers during retraining?", ["None.", "Generous extended time and experienced technical mentors.", "A manual only.", "Immediate dismissal."], 1, "'Workers were given generous, extended time to learn… paired systematically with experienced technical mentors'."),
          mc("What happened to most of the original workforce?", ["All were made redundant.", "A substantial majority successfully transitioned into new, often better-paid roles.", "Nobody transitioned successfully.", "They all left voluntarily."], 1, "'a genuinely substantial majority of the original workforce had successfully transitioned into new, more technical roles, many of which actually paid measurably better'."),
          mc("What did the factory's approach demonstrate, according to the writer?", ["Automation always destroys jobs.", "The trade-off between progress and worker welfare is less fixed than assumed, given sufficient investment.", "Retraining never works.", "Redundancy is always better."], 1, "'the sharp, seemingly inevitable trade-off… was… considerably less fixed and less unavoidable than conventional industry wisdom had… assumed'."),
        ],
      },
      p6: {
        title: "Who should pay for retraining displaced workers?",
        intro: "Cuatro personas debaten quién debería pagar el reciclaje de los trabajadores desplazados por la automatización.",
        texts: {
          A: "NADIA: I firmly believe companies that profit from automation should bear the primary cost of retraining the workers it displaces. Whichever company benefits most from replacing human labour with machines has, in my view, a clear moral and practical obligation to invest meaningfully in those workers' genuine future, not simply discard them once they're no longer immediately useful.",
          B: "TOM: I understand that instinct, but I'd worry it creates a perverse incentive: companies might simply automate more slowly, or relocate entirely elsewhere, rather than accept that particular financial burden. Government-funded retraining, spread broadly across all taxpayers who ultimately benefit from cheaper goods and services, seems to me a fairer, more sustainable and more economically realistic model overall.",
          C: "PRIYA: What I keep coming back to is that neither companies nor government alone reliably has the specific, granular knowledge of exactly which skills will actually prove genuinely valuable going forward. Whatever funding model we ultimately choose, workers themselves need real, meaningful input into their own retraining, rather than simply being assigned a generic, one-size-fits-all programme designed by distant others.",
          D: "SAM: My honest view is that this whole debate somewhat misses a more fundamental point. No matter who technically pays for retraining, if genuinely comparable new jobs simply don't exist locally in sufficient numbers, retraining alone accomplishes remarkably little for those workers. We need genuine regional economic development, not just individual worker retraining schemes in isolation.",
        },
        q: [
          mc("Who believes companies that profit from automation should bear the retraining cost?", ["A", "B", "C", "D"], 0, "Nadia: 'companies that profit from automation should bear the primary cost'."),
          mc("Whose view most directly QUALIFIES Nadia's, warning about perverse incentives?", ["A", "B", "C", "D"], 1, "Tom: 'it creates a perverse incentive: companies might simply automate more slowly, or relocate'."),
          mc("Who emphasises workers needing real input into their own retraining?", ["A", "B", "C", "D"], 2, "Priya: 'workers themselves need real, meaningful input into their own retraining'."),
          mc("Who argues retraining alone accomplishes little without genuine regional development?", ["A", "B", "C", "D"], 3, "Sam: 'if genuinely comparable new jobs simply don't exist locally… retraining alone accomplishes remarkably little'."),
        ],
      },
      p7: {
        title: "The jobs automation cannot easily take",
        text: "Predicting exactly which jobs automation will eventually eliminate has proved, time and again, a genuinely difficult and often embarrassingly inaccurate exercise. (1)___\n\nEarly predictions, made decades ago, confidently assumed that manual, physically repetitive work would disappear first, while more cognitively demanding professional work would remain safely, reliably human for considerably longer. (2)___ Reality, it turned out, proved considerably messier and less predictable than this tidy, intuitive assumption suggested.\n\nSome manual jobs requiring fine physical dexterity, adaptability and real-time judgement in genuinely unpredictable environments have proved surprisingly, stubbornly resistant to automation. (3)___ A skilled plumber navigating an unfamiliar, oddly configured house remains, even now, far harder to automate than many white-collar analytical tasks initially assumed comfortably safe.\n\nMeanwhile, certain cognitively demanding tasks involving pattern recognition across large, structured datasets have proved considerably easier to automate than early predictions ever confidently anticipated. (4)___ Some legal document review, once considered safely, reliably professional work, now happens substantially faster and more consistently by algorithm.\n\nWhat seems to distinguish genuinely automation-resistant work, on closer, more careful examination, is not whether it's manual or cognitive as such, but whether it requires genuine adaptability, nuanced human judgement, and authentic interpersonal connection. (5)___ Jobs combining all three tend, so far, to remain reliably, stubbornly human.\n\nThis matters enormously for how we should reasonably think about workforce preparation going forward. (6)___ Rather than simply chasing today's safest-seeming job category, cultivating genuine adaptability itself may prove the more durable, valuable skill of all.",
        options: [
          "Confident forecasts have repeatedly, embarrassingly missed the mark.", // A -> gap 1
          "That particular assumption has aged rather badly.",                // B -> gap 2
          "Unpredictable, hands-on environments resist easy automation.",     // C -> gap 3
          "Structured, rule-based cognitive work proved surprisingly exposed.", // D -> gap 4
          "That specific combination is hard for any machine to replicate.",  // E -> gap 5
          "Betting on any single fixed skill now looks genuinely risky.",     // F -> gap 6
          "Every single prediction about automation has proved entirely correct.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: los pronósticos han fallado repetidamente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa suposición ha envejecido mal."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los entornos impredecibles resisten la automatización."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el trabajo cognitivo estructurado resultó expuesto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esa combinación es difícil de replicar."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: apostar por una sola destreza es arriesgado."),
        ],
      },
      p8: {
        title: "Four people discuss automation and their own careers",
        text: "Read what four people say about how automation has affected their own careers.\n\nA) NADIA: My factory job was automated three years ago, and had the company not offered retraining, I honestly don't know what I'd have done. Whichever new skill I eventually settled on learning, I knew it had to be something machines couldn't easily replicate. I now maintain the very robots that replaced my old assembly-line role.\n\nB) TOM: I work in legal document review, and I've watched algorithms take over tasks that used to occupy junior lawyers like me for entire days at a stretch. It's a far cry from what I originally trained for, but by and large I've adapted, moving into more strategic, judgement-based work that genuinely still needs a human involved.\n\nC) PRIYA: I'm a plumber, and I honestly used to worry automation would eventually come for my trade too. It hasn't, not remotely, and I've come to realise why: no algorithm can navigate the sheer unpredictability of an actual, real house built a century ago with no proper existing plans whatsoever.\n\nD) SAM: I lost my job to automation and, unlike some of my former colleagues, received essentially no meaningful retraining support at all. It's given rise to real, lasting resentment, if I'm honest. No matter how compelling the abstract economic case for automation genuinely is, the human cost, in cases like mine, was handled genuinely badly.\n",
        q: [
          mc("Whose factory job was automated three years ago, leading to retraining?", ["A", "B", "C", "D"], 0, "Nadia: 'My factory job was automated three years ago… had the company not offered retraining'."),
          mc("Who works in legal document review and has adapted to more strategic work?", ["A", "B", "C", "D"], 1, "Tom: 'I work in legal document review… I've adapted, moving into more strategic… work'."),
          mc("Who is a plumber whose trade hasn't been automated?", ["A", "B", "C", "D"], 2, "Priya: 'I'm a plumber, and I honestly used to worry automation would eventually come for my trade too. It hasn't'."),
          mc("Who lost their job with no meaningful retraining support?", ["A", "B", "C", "D"], 3, "Sam: 'I lost my job to automation… received essentially no meaningful retraining support at all'."),
          mc("Who now maintains the robots that replaced their old role?", ["A", "B", "C", "D"], 0, "Nadia: 'I now maintain the very robots that replaced my old assembly-line role'."),
          mc("Who says work is now a far cry from what they originally trained for?", ["A", "B", "C", "D"], 1, "Tom: 'It's a far cry from what I originally trained for'."),
          mc("Who explains why their trade resists automation, citing unpredictable old houses?", ["A", "B", "C", "D"], 2, "Priya: 'no algorithm can navigate the sheer unpredictability of an actual, real house built a century ago'."),
          mc("Who feels real, lasting resentment about how they were treated?", ["A", "B", "C", "D"], 3, "Sam: 'It's given rise to real, lasting resentment'."),
          mc("Who says the economic case for automation doesn't excuse poor handling of human cost?", ["A", "B", "C", "D"], 3, "Sam: 'No matter how compelling the abstract economic case… the human cost… was handled genuinely badly'."),
          mc("Who knew their new skill had to be something machines couldn't replicate?", ["A", "B", "C", "D"], 0, "Nadia: 'Whichever new skill I eventually settled on… it had to be something machines couldn't easily replicate'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la automatización se plantearon dos ideas:\n· companies should bear the cost of retraining displaced workers (las empresas deberían pagar el reciclaje)\n· governments should fund retraining through general taxation (los gobiernos deberían financiarlo)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos gramaticales de las Semanas 3-4 (condicional mixto, relativa con cuantificador, verbo introductor preciso). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para una empresa sobre cómo gestionar humanamente una transición hacia la automatización: justifica y recomienda medidas.\n· ARTÍCULO: 'The job I don't think a machine could ever do' — reflexiona con ejemplos.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un economista laboral, el doctor Whitfield, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a labour economist called Doctor Whitfield giving a talk. Doctor Whitfield: If automation had arrived more gradually, we'd likely have had far more time to prepare adequately. As it stands, many workers received almost no meaningful warning at all. My first point concerns predictions: early forecasts assumed manual work would go first, but that assumption has aged rather badly. Some cognitive, structured tasks proved far easier to automate than anyone confidently expected. Second, on retraining: it's high time we treated this transition with real seriousness, rather than dismissing displaced workers as simply unfortunate but acceptable collateral damage. Third, I want to address accountability. When an algorithm decides who keeps their job, who exactly bears responsibility for ensuring that decision was fair? This transparency gap deserves urgent attention. Fourth, on regional development: retraining alone accomplishes little if comparable new jobs simply don't exist locally in sufficient numbers. And finally, my main message: no matter how compelling the economic case for automation is, and it frequently is compelling, the human costs of a poorly managed transition deserve equally serious policy attention.", [
      fb("If automation had arrived more gradually, we'd have had far more time to ___.", ["prepare"], "'far more time to prepare adequately'."),
      fb("Early forecasts assumed ___ work would go first.", ["manual"], "'manual work would go first'."),
      fb("That assumption has aged rather ___.", ["badly"], "'has aged rather badly'."),
      fb("Some ___, structured tasks proved easier to automate than expected.", ["cognitive"], "'cognitive, structured tasks'."),
      fb("Displaced workers shouldn't be dismissed as acceptable ___ damage.", ["collateral"], "'acceptable… collateral damage'."),
      fb("Who bears responsibility for ensuring an algorithmic decision was ___?", ["fair"], "'ensuring that decision was fair'."),
      fb("This ___ gap deserves urgent attention.", ["transparency"], "'This transparency gap'."),
      fb("Retraining alone accomplishes little without comparable new ___ locally.", ["jobs"], "'comparable new jobs simply don't exist locally'."),
    ]),

    ...speakingParts({ p1: "qué opinas de la automatización y si te preocupa que afecte a tu propio trabajo o sector", p2: "dos imágenes de la automatización (una fábrica con robots trabajando y trabajadores recibiendo formación en nuevas habilidades): compáralas y especula sobre el futuro de cada situación", p3: "qué debería hacerse para gestionar bien la transición hacia la automatización (reciclaje profesional, redes de seguridad social, desarrollo económico regional, responsabilidad empresarial, educación continua): comentadlo y elegid lo más eficaz", p4: "la automatización y el empleo: quién debería pagar el reciclaje de los trabajadores desplazados, si hay trabajos que las máquinas nunca podrán hacer y cómo debería prepararse la sociedad para este cambio" }),

    SUMMARY("Resumen del Día 32", [
      "Repaso combinado: condicionales mixtos/wish/modales de deducción-crítica/pasiva avanzada-causativo (S3) + relativas avanzadas/estilo indirecto preciso/gerundios-infinitivos con matiz/comparación avanzada (S4).",
      "Practica identificar qué estructura combinar según el matiz exacto que necesitas: hipótesis + relativa, deducción + verbo introductor, etc.",
      "Vocabulario de automatización. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 33", "Escribe un párrafo combinando al menos 3 estructuras de las Semanas 3-4. Repasa las flashcards. Mañana: repaso combinado de las Semanas 5-6."),
  ],
};

// ───────────────────────── DÍA 33 ─────────────────────────
const DAY33 = {
  title: "Día 33 — Repaso integral: cohesión y léxico avanzado (Semanas 5-6) · La vivienda y la economía urbana",
  description: "Repaso combinado: contraste/concesión matizados, causa-consecuencia formal, elipsis/sustitución/referencia, reformulación (S5); colocaciones formales, idioms académicos, phrasal verbs formales, binomios fijos (S6). Vocabulario de vivienda. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Combinar con fluidez los conectores de cohesión (S5) con el léxico avanzado formal (S6).",
    summary: "Repaso combinado S5-S6; vivienda y economía urbana; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["saturar un texto con demasiados idioms/colocaciones sin conectores naturales entre ellos.", "usar whereas y however redundantemente en la misma frase.", "olvidar variar el registro: no todo necesita ser un idiom o binomio."],
    reviewPrompts: ["¿Recuerdas la diferencia entre 'the former' y 'the latter'?", "¿Qué colocación usarías en vez de 'make a conclusion'?"],
  },
  items: [
    TEXT("🔁 Ayer, Semanas 3-4. Hoy combinamos los CONECTORES DE COHESIÓN (S5) con las COLOCACIONES/IDIOMS/PHRASAL VERBS FORMALES (S6). Vocabulario: la VIVIENDA y la ECONOMÍA URBANA."),
    GRAMMAR("Repaso combinado — Semanas 5 y 6", `SEMANA 5 — Cohesión textual:
· Contraste/concesión: whereas/while (dentro de la frase) vs however/nevertheless/that said (frase nueva); albeit+adj; notwithstanding+sust.
· Causa-consecuencia formal: given (that)/owing to (causa); as a result/consequently (frase nueva); thereby+-ing (misma frase).
· Adición: not to mention, let alone (tras negación).
· Cohesión: elipsis, sustitución (one/ones, do so, so/not), referencia (this/that/such, the former/the latter).
· Reformulación/resumen: in other words, namely, that is; in short, all in all, on the whole, by and large.
SEMANA 6 — Léxico formal avanzado:
· Colocaciones v+sust: draw a conclusion, pose a threat, exercise caution, bear in mind, raise a concern, strike a balance.
· Idioms académicos: a double-edged sword, a far cry from, the tip of the iceberg, an uphill battle, a watershed moment.
· Phrasal verbs formales: account for, stem from, give rise to, bring about, embark on, hinge on.
· Binomios fijos y colocaciones adj+sust: by and large, part and parcel, first and foremost; a stark contrast, a compelling argument.`),
    grammarEx("Use of English — Repaso combinado S5-S6", "Completa o elige, combinando ambas semanas.", [
      mc("___ house prices have risen sharply, wages have remained largely stagnant.", ["Whereas", "Given that", "Thereby"], 0, "whereas (S5, contraste equilibrado)."),
      mc("The housing shortage ___ from decades of chronic underinvestment.", ["stems", "poses", "draws"], 0, "stem from (S6)."),
      fb("___ the rising costs, many young people can no longer afford to buy. (causa formal)", ["Given"], "given + sustantivo (S5)."),
      mc("Owning a home has become part and ___ of an increasingly distant dream for many.", ["parcel", "large", "foremost"], 0, "part and parcel (S6)."),
      mc("Rents have risen; ___, so has homelessness.", ["consequently", "whereas", "let alone"], 0, "consequently (S5, frase nueva)."),
      mc("The crisis ___ a genuine threat to social cohesion.", ["poses", "stems", "accounts"], 0, "pose a threat (S6)."),
      fb("Many families can't afford rent, ___ save for a deposit. (S5, tras negación)", ["let alone"], "let alone (S5)."),
    ]),
    GRAMMAR("Vocabulario del día — La vivienda y la economía urbana (C1)", "Léxico avanzado de vivienda."),
    deck("C1 S7D33 — Vivienda y economía urbana", [
      ["affordability", "asequibilidad (económica)", "Housing affordability has collapsed.", "sustantivo", "əˌfɔːdəˈbɪləti"],
      ["landlord", "arrendador/a / propietario/a", "The landlord raised the rent sharply.", "sustantivo", "ˈlændlɔːd"],
      ["mortgage", "hipoteca", "They struggled to secure a mortgage.", "sustantivo", "ˈmɔːɡɪdʒ"],
      ["speculative", "especulativo/a", "Speculative buying inflates prices.", "adjetivo", "ˈspekjʊlətɪv"],
      ["tenant", "inquilino/a", "Tenants have few legal protections.", "sustantivo", "ˈtenənt"],
      ["negative equity", "patrimonio negativo (hipotecario)", "Falling prices left owners in negative equity.", "sustantivo", "ˈneɡətɪv ˈekwəti"],
      ["overcrowding", "hacinamiento", "Overcrowding worsens in poor areas.", "sustantivo", "ˌəʊvəˈkraʊdɪŋ"],
      ["rent control", "control de alquileres", "Cities debate the merits of rent control.", "sustantivo", "ˈrent kənˌtrəʊl"],
      ["homelessness", "situación de sin techo", "Homelessness has risen sharply.", "sustantivo", "ˈhəʊmləsnəs"],
      ["property ladder", "escalera de la propiedad (inmobiliaria)", "Many can't get onto the property ladder.", "expresión", "ˈprɒpəti ˈlædə"],
    ]),
    vocabEx("Vocabulario — La vivienda y la economía urbana", "Elige la opción correcta.", [
      mc("How easily people can pay for housing is ___.", ["affordability", "speculation", "overcrowding"], 0, "affordability."),
      mc("A person who owns and rents out property is a ___.", ["landlord", "tenant", "mortgage"], 0, "landlord."),
      mc("A loan specifically used to buy property is a ___.", ["mortgage", "tenant", "landlord"], 0, "mortgage."),
      mc("A person who rents their home is a ___.", ["tenant", "landlord", "mortgage"], 0, "tenant."),
      mc("Too many people living in too little space is ___.", ["overcrowding", "affordability", "negative equity"], 0, "overcrowding."),
      mc("The situation of not having a home is ___.", ["homelessness", "overcrowding", "negative equity"], 0, "homelessness."),
    ]),

    ...uoe({
      p1: {
        title: "Whose city is it anyway",
        text: "Whereas house prices in most major cities have risen (1)___ over the past two decades, average wages have, by and large, remained largely stagnant, giving rise (2)___ a stark, ever-widening affordability gap that shows little genuine sign of narrowing any time soon. This growing gap poses (3)___ threat considerably more serious than mere personal financial inconvenience alone; it strikes at something closer to the basic, fundamental social contract that cities have traditionally offered their residents. Given (4)___ young workers now routinely spend a genuinely daunting proportion of their income simply on rent, let alone anything approaching a realistic deposit for eventual homeownership, it's little wonder that growing numbers have simply given up on the property ladder entirely, choosing instead to rent indefinitely or leave increasingly unaffordable cities altogether. Not to mention (5)___ the knock-on effects for essential public services, which struggle increasingly to recruit teachers, nurses and other key workers who simply cannot afford to live anywhere reasonably near where they actually work. This is, in other (6)___, not merely a housing problem in isolation but a broader crisis of urban sustainability itself.",
        q: [
          mc("(1)", ["sharply", "steeply", "dramatically", "markedly"], 0, "'risen sharply' (colocación natural)."),
          mc("(2)", ["to", "for", "on", "at"], 0, "'giving rise to… gap' (S6)."),
          mc("(3)", ["a", "the", "some", "any"], 0, "'poses a threat' (S6)."),
          mc("(4)", ["that", "which", "how", "why"], 0, "'Given that young workers'."),
          mc("(5)", ["mention", "mentioning", "to mention", "of"], 2, "'Not to mention' (S5)."),
          mc("(6)", ["words", "terms", "ways", "senses"], 0, "'in other words' (S5)."),
        ],
      },
      p2: {
        title: "The landlord's dilemma",
        text: "Landlords, whatever their real or perceived faults, face a genuine dilemma that public debate frequently, and rather unfairly, oversimplifies. On the one hand, they must cover genuinely substantial costs — mortgage payments, maintenance, property taxes — that (1)___ from simply owning and maintaining a property at all. On the other hand, excessive or poorly regulated rent increases can (2)___ real hardship on tenants, some of whom simply cannot absorb sudden, sharp cost increases without genuine, serious financial distress. Rent control policies, proposed as a solution to this second, genuinely pressing concern, remain hotly (3)___ among economists. Advocates argue such policies protect vulnerable tenants from exploitative practices; critics counter that poorly designed rent control can discourage new housing construction entirely, thereby (4)___ the underlying shortage that drives prices up in the very first place. By and (5)___, most careful economic research suggests that rent control, if implemented at all, works best as one modest, carefully targeted tool among several, rather than a comprehensive, standalone solution capable of addressing a genuinely complex, multi-causal housing crisis single-handedly.",
        q: [
          fb("(1)", ["stem"], "'costs… that stem from owning'."),
          fb("(2)", ["impose", "inflict"], "'can impose real hardship'."),
          fb("(3)", ["debated", "contested"], "'remain hotly debated'."),
          fb("(4)", ["worsening"], "'thereby worsening the underlying shortage'."),
          fb("(5)", ["large"], "'By and large'."),
        ],
      },
      p3: {
        title: "The speculation problem",
        text: "A growing (1)___ of housing economists now argue that a considerable proportion of the current affordability crisis stems not primarily from genuine housing shortage alone, but from treating homes as speculative financial (2)___ rather than as places people primarily need to actually, straightforwardly live in. When property is purchased primarily as an investment vehicle — to be held largely empty, or rented out purely for maximum short-term profit — rather than genuinely occupied, it can drive prices upward without correspondingly increasing the actual, practical supply of homes genuinely available to people who need somewhere to live. This (3)___ has given rise to policy proposals specifically targeting speculative buying: taxes on vacant properties, restrictions on foreign investment purchases, and stricter (4)___ requirements for short-term rental platforms. Whether such measures can meaningfully address a crisis this deeply, structurally (5)___ remains, by most honest accounts, a genuinely open question — but the underlying diagnosis, that housing has become dangerously disconnected from its basic, original social purpose, has gained considerable (6)___ traction across the political spectrum in recent years.",
        items: [
          { root: "consense", accepted: ["consensus"], hint: "'A growing consensus' → consensus." },
          { root: "invest", accepted: ["investments"], hint: "'speculative financial investments' → investments." },
          { root: "diagnose", accepted: ["diagnosis"], hint: "'This diagnosis has given rise to' → diagnosis." },
          { root: "regulate", accepted: ["regulatory"], hint: "'stricter regulatory requirements' → regulatory." },
          { root: "entrench", accepted: ["entrenched"], hint: "'this deeply, structurally entrenched' → entrenched." },
          { root: "politics", accepted: ["political"], hint: "'considerable political traction' → political." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S5-S6",
        items: [
          { s1: "House prices have risen sharply, but wages have stayed flat.", key: "WHEREAS", s2: "___ house prices have risen sharply, wages have stayed flat.", accepted: ["Whereas"], explanation: "whereas (S5)." },
          { s1: "The housing shortage originates from decades of underinvestment.", key: "STEMS", s2: "The housing shortage ___ from decades of underinvestment.", accepted: ["stems"], explanation: "stem from (S6)." },
          { s1: "Because costs are rising, many young people can't afford to buy.", key: "GIVEN", s2: "___ the rising costs, many young people can't afford to buy.", accepted: ["Given"], explanation: "given + sustantivo (S5)." },
          { s1: "Owning a home has become an inherent part of a distant dream.", key: "PARCEL", s2: "Owning a home has become part and ___ of a distant dream.", accepted: ["parcel"], explanation: "part and parcel (S6)." },
          { s1: "Climate change is a serious threat to coastal housing.", key: "POSES", s2: "Climate change ___ a serious threat to coastal housing.", accepted: ["poses"], explanation: "pose a threat (S6)." },
          { s1: "Many families can't afford rent, and certainly not a deposit.", key: "ALONE", s2: "Many families can't afford rent, let ___ a deposit.", accepted: ["alone"], explanation: "let alone (S5)." },
        ],
      },
      p5: {
        title: "The city that taxed empty homes",
        text: "Faced with a housing affordability crisis that had, by most measures, grown considerably worse over the preceding decade, one major city's government embarked on a genuinely bold experiment: a substantial annual tax specifically targeting residential properties left vacant for more than six months of the year, an increasingly common phenomenon in a city that had become a popular destination for international property investment.\n\nCritics, particularly among property investors and real estate industry groups, warned that the tax would prove largely symbolic, easily circumvented by wealthy owners who could simply absorb the modest financial penalty without meaningfully changing their underlying behaviour. Given that the proposed tax rate was, admittedly, relatively modest compared to the substantial capital gains many speculative investors were already reliably realising, this scepticism was, on the surface at least, not entirely unreasonable.\n\nWhat actually happened, once the policy had been properly implemented and given sufficient time to genuinely take effect, surprised even some of its own original architects. Not only did a genuinely significant proportion of previously vacant properties come back onto the active rental market within the first eighteen months, but the policy's very existence appears to have discouraged a considerable amount of purely speculative purchasing that had previously, quietly inflated prices without adding to the city's actual usable housing stock at all.\n\nThe policy's success, researchers who subsequently studied it carefully concluded, stemmed less from the specific tax rate itself, which remained genuinely modest throughout, and more from the powerful signal it sent about the city's underlying priorities. Property owners, faced with even a modest ongoing cost for leaving a home genuinely empty, found themselves reassessing the whole calculation in ways that a purely symbolic, largely unenforced policy would never have plausibly achieved.\n\nOther cities, watching this experiment closely from a distance, have since begun considering broadly similar measures, though not without their own genuine, well-founded concerns about specific implementation details: how, precisely, to define 'vacant' fairly, how to avoid inadvertently penalising owners with entirely legitimate reasons for temporary absence, and how to prevent wealthy owners from simply treating the modest tax as an acceptable, easily absorbed cost of doing business rather than any genuine behavioural deterrent.\n\nWhat the case demonstrated rather more convincingly than most purely theoretical policy debates ever could was that housing markets, whatever their genuine underlying complexity, do respond measurably to well-designed price signals — and that even relatively modest policy interventions, thoughtfully targeted at the actual, specific behaviour driving a housing crisis, can achieve meaningfully more than their modest scale might initially, comfortably suggest.",
        q: [
          mc("What policy did the city implement?", ["A rent freeze.", "An annual tax on residential properties left vacant for over six months.", "A ban on foreign buyers.", "New public housing only."], 1, "'a substantial annual tax specifically targeting residential properties left vacant for more than six months'."),
          mc("What did critics predict?", ["Immediate success.", "The tax would be largely symbolic and easily absorbed by wealthy owners.", "House prices would rise further.", "Nobody would notice."], 1, "'the tax would prove largely symbolic, easily circumvented by wealthy owners who could simply absorb the modest financial penalty'."),
          mc("What actually happened to vacant properties?", ["Nothing changed.", "A significant proportion came back onto the rental market within 18 months.", "More became vacant.", "They were all sold abroad."], 1, "'a genuinely significant proportion of previously vacant properties come back onto the active rental market within the first eighteen months'."),
          mc("What did researchers conclude explained the policy's success?", ["The high tax rate.", "The powerful signal it sent about the city's priorities, more than the modest rate itself.", "Pure luck.", "Foreign investment rules."], 1, "'stemmed less from the specific tax rate itself… and more from the powerful signal it sent'."),
          mc("What concerns do other cities have about adopting similar measures?", ["None at all.", "How to fairly define 'vacant' and avoid penalising legitimate absences.", "The tax rate is too high.", "It's too expensive to administer."], 1, "'how… to define \"vacant\" fairly, how to avoid inadvertently penalising owners with entirely legitimate reasons'."),
          mc("What did the case demonstrate, according to the writer?", ["Housing markets never respond to policy.", "Even modest, well-targeted interventions can achieve more than their scale suggests.", "Taxes never work.", "Only large-scale intervention helps."], 1, "'even relatively modest policy interventions, thoughtfully targeted… can achieve meaningfully more than their modest scale might… suggest'."),
        ],
      },
      p6: {
        title: "Is homeownership overrated as a life goal?",
        intro: "Cuatro personas debaten si la propiedad de vivienda está sobrevalorada como meta vital.",
        texts: {
          A: "NADIA: I think we've been sold a myth that homeownership is essential for a good, stable life. Renting, done right, offers genuine flexibility and freedom from maintenance costs and mortgage risk. Whereas my parents' generation treated homeownership as an automatic milestone, I've come to see it as just one option among several, not inherently superior to renting.",
          B: "TOM: I understand that view, but I'd push back given the actual, practical realities most renters face. In many cities, rental protections remain genuinely weak; tenants can be evicted with little real notice, and rent increases can be sudden and severe. Owning, whatever its costs, at least offers genuine long-term security that renting, as currently regulated almost everywhere, simply doesn't reliably provide.",
          C: "PRIYA: What I keep coming back to is that this whole debate assumes a real choice exists, when for many people, given current prices, it simply doesn't in any meaningful sense. Framing it as 'renting versus owning, which is better' feels almost beside the point when the property ladder has become, for a great many people, genuinely, effectively unreachable regardless of their own personal preference.",
          D: "SAM: My honest view is that homeownership's real value has always been more financial than lifestyle-related as such. It's historically been the primary way ordinary families built any meaningful wealth at all. Devaluing homeownership as a goal, without a genuine, viable alternative wealth-building mechanism in place, risks leaving an entire generation with no realistic path to lasting financial security whatsoever.",
        },
        q: [
          mc("Who thinks homeownership has been oversold as essential for a good life?", ["A", "B", "C", "D"], 0, "Nadia: 'we've been sold a myth that homeownership is essential'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing weak rental protections?", ["A", "B", "C", "D"], 1, "Tom: 'rental protections remain genuinely weak… Owning… offers genuine long-term security'."),
          mc("Who argues the debate assumes a real choice that doesn't exist for many?", ["A", "B", "C", "D"], 2, "Priya: 'this whole debate assumes a real choice exists, when… it simply doesn't'."),
          mc("Who focuses on homeownership as historically the primary wealth-building mechanism?", ["A", "B", "C", "D"], 3, "Sam: 'It's historically been the primary way ordinary families built any meaningful wealth at all'."),
        ],
      },
      p7: {
        title: "The house that never sold",
        text: "In cities gripped by genuine housing shortages, it can seem almost paradoxical that a significant number of properties simultaneously sit entirely empty, sometimes for years at a stretch. (1)___\n\nSome of this vacancy is genuinely unavoidable: properties between tenants, homes undergoing necessary renovation, estates caught up in lengthy legal disputes over inheritance. (2)___ This kind of ordinary, transitional vacancy has always existed and likely always will.\n\nBut a growing, increasingly documented proportion of vacant housing appears to stem from something rather different: deliberate, calculated investment strategy. (3)___ Investors purchase property not primarily to live in or even actively rent out, but purely as a store of value, betting confidently on continued long-term price appreciation regardless of whether the property is ever actually, practically used by anyone at all.\n\nThis distinction matters enormously for how policymakers should reasonably respond. (4)___ Addressing ordinary, transitional vacancy requires very different tools from addressing deliberate, purely speculative hoarding.\n\nSeveral cities have begun experimenting with taxes and other targeted measures specifically designed to distinguish between these two genuinely quite different phenomena. (5)___ Early evidence, while still admittedly limited, suggests such carefully targeted measures can meaningfully shift genuinely speculative behaviour without unfairly penalising ordinary, entirely legitimate vacancy.\n\nWhatever the specific policy mix any given city ultimately, democratically chooses, the underlying, uncomfortable question deserves serious, sustained attention. (6)___ In a genuine housing crisis, can any city reasonably justify treating homes primarily as speculative financial assets rather than as places people fundamentally need to actually live?",
        options: [
          "The apparent paradox has a fairly mundane explanation.",           // A -> gap 1
          "Nobody would seriously call this kind of gap a crisis.",          // B -> gap 2
          "Here, the underlying motive looks considerably less innocent.",   // C -> gap 3
          "One size, quite clearly, does not fit both cases at all.",        // D -> gap 4
          "A handful of cities have tried to tell the two apart.",           // E -> gap 5
          "It comes down, in the end, to what housing is actually for.",     // F -> gap 6
          "No city has ever had a single vacant residential property.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la paradoja tiene una explicación mundana."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nadie llamaría crisis a ese hueco."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el motivo aquí es menos inocente."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: una talla no sirve para ambos casos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: algunas ciudades han intentado distinguir."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: se reduce a para qué sirve la vivienda."),
        ],
      },
      p8: {
        title: "Four people discuss their own housing situation",
        text: "Read what four people say about their own experience with housing.\n\nA) NADIA: I've been renting the same flat for eight years now, and by and large, it suits me fine. My landlord, whose other properties I've heard are far less well maintained, has always been fair and responsive. That said, the lack of any real long-term security does weigh on me sometimes, particularly as I get older.\n\nB) TOM: I finally bought my first home last year, after nearly a decade of saving, and it's given rise to a stability I genuinely hadn't expected to feel so strongly. That said, the mortgage payments account for a far larger share of my income than I'd initially, rather naively, budgeted for.\n\nC) PRIYA: I was priced out of my own home city entirely and had to relocate somewhere considerably cheaper, which was, first and foremost, a genuinely difficult decision given how much I loved living there. It's a far cry from the life I'd originally planned for myself, but by and large, I've come to appreciate my new, more affordable city too.\n\nD) SAM: I've chosen to rent deliberately, even though I could technically now afford to buy. The flexibility hinges largely on not being tied down to one specific place, which matters enormously to me given how often my work requires relocating. Homeownership, for people like me, poses more of a genuine constraint than a benefit.\n",
        q: [
          mc("Who has rented the same flat for eight years and finds it suits them fine?", ["A", "B", "C", "D"], 0, "Nadia: 'I've been renting the same flat for eight years now, and by and large, it suits me fine'."),
          mc("Who bought their first home last year after nearly a decade of saving?", ["A", "B", "C", "D"], 1, "Tom: 'I finally bought my first home last year, after nearly a decade of saving'."),
          mc("Who was priced out of their home city and had to relocate?", ["A", "B", "C", "D"], 2, "Priya: 'I was priced out of my own home city entirely and had to relocate'."),
          mc("Who deliberately chooses to rent despite being able to afford to buy?", ["A", "B", "C", "D"], 3, "Sam: 'I've chosen to rent deliberately, even though I could technically now afford to buy'."),
          mc("Who worries about the lack of long-term security as they age?", ["A", "B", "C", "D"], 0, "Nadia: 'the lack of any real long-term security does weigh on me sometimes'."),
          mc("Whose mortgage payments account for more of their income than budgeted?", ["A", "B", "C", "D"], 1, "Tom: 'the mortgage payments account for a far larger share of my income than I'd initially… budgeted'."),
          mc("Who has come to appreciate their new, more affordable city?", ["A", "B", "C", "D"], 2, "Priya: 'by and large, I've come to appreciate my new, more affordable city too'."),
          mc("Who values flexibility because their work requires frequent relocation?", ["A", "B", "C", "D"], 3, "Sam: 'not being tied down to one specific place, which matters enormously to me given how often my work requires relocating'."),
          mc("Who says buying gave rise to unexpected stability?", ["A", "B", "C", "D"], 1, "Tom: 'it's given rise to a stability I genuinely hadn't expected to feel so strongly'."),
          mc("Who says homeownership poses more of a constraint than a benefit for them?", ["A", "B", "C", "D"], 3, "Sam: 'Homeownership, for people like me, poses more of a genuine constraint than a benefit'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la vivienda se plantearon dos ideas:\n· homeownership should remain a central life goal (la propiedad debería seguir siendo una meta central)\n· renting can be an equally valid, permanent choice (alquilar puede ser una opción igualmente válida)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos combinados de las Semanas 5-6 (un conector de cohesión + una colocación/idiom formal). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para un gobierno local sobre cómo abordar la crisis de vivienda: justifica y recomienda medidas concretas.\n· ARTÍCULO: 'Renting or owning: my own story' — reflexiona sobre tu propia situación o decisión de vivienda.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Freya y Kwame, sobre la vivienda (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Freya and Kwame, discussing housing. Kwame: Freya, you've studied housing policy for years. What's the single biggest driver of the current crisis, in your view? Freya: Whereas most people point to simple undersupply, I'd argue speculation plays a far bigger role than commonly acknowledged. Kwame: Interesting. So building more homes wouldn't solve it alone? Freya: Not to mention that in many cities, plenty of new homes get built and simply sit empty as investments. Given that reality, supply alone is nowhere near a complete solution. Kwame: What would you actually recommend, then? Freya: First and foremost, taxing vacant and speculative property properly. That alone could bring meaningful supply back onto the market almost immediately, without waiting years for new construction. Kwame: Is that politically realistic, though? Freya: It's an uphill battle, certainly, given how much political influence property investors typically wield. But a handful of cities have tried it, and by and large, the early results look genuinely promising.", [
      mc("1. What does Freya say is a bigger driver than commonly acknowledged?", ["Undersupply alone.", "Speculation.", "Interest rates."], 1, "'speculation plays a far bigger role than commonly acknowledged'."),
      mc("2. What does she say about new homes in many cities?", ["They're all occupied.", "Plenty sit empty as investments.", "None get built."], 1, "'plenty of new homes get built and simply sit empty as investments'."),
      mc("3. What does she conclude about supply alone?", ["It's sufficient.", "It's nowhere near a complete solution.", "It's irrelevant."], 1, "'supply alone is nowhere near a complete solution'."),
      mc("4. What does she recommend first and foremost?", ["More construction.", "Taxing vacant and speculative property properly.", "Lower interest rates."], 1, "'First and foremost, taxing vacant and speculative property properly'."),
      mc("5. How does she describe the political challenge?", ["Easy.", "An uphill battle.", "Already solved."], 1, "'It's an uphill battle, certainly'."),
      mc("6. How does she describe early results where it's been tried?", ["Disappointing.", "Genuinely promising.", "Inconclusive."], 1, "'by and large, the early results look genuinely promising'."),
    ]),

    ...speakingParts({ p1: "cuál es tu situación de vivienda actual y qué opinas de comprar frente a alquilar", p2: "dos imágenes de la vivienda (un bloque de apartamentos de lujo mayormente vacío y una familia hacinada en un piso pequeño): compáralas y especula sobre la desigualdad que representan", p3: "qué medida ayudaría más a resolver la crisis de vivienda (gravar las propiedades vacías, construir más vivienda pública, controlar los alquileres, restringir la inversión especulativa, mejorar los salarios): comentadlo y elegid la más eficaz", p4: "la vivienda y la economía urbana: si la propiedad debería seguir siendo una meta vital central, si las ciudades deberían tratar la vivienda como un derecho o un activo financiero y qué papel tiene la especulación en la crisis actual" }),

    SUMMARY("Resumen del Día 33", [
      "Repaso combinado: contraste/concesión/causa-consecuencia/cohesión/reformulación (S5) + colocaciones/idioms/phrasal verbs formales/binomios (S6).",
      "Combina conectores de cohesión con léxico formal preciso para un estilo C1 fluido y natural, sin saturar el texto.",
      "Vocabulario de vivienda. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 34", "Escribe un párrafo combinando al menos 3 recursos de las Semanas 5-6. Repasa las flashcards. Mañana: repaso final integral + mini-simulacro de toda la primera mitad del curso."),
  ],
};

// ───────────────────────── DÍA 34 ─────────────────────────
const DAY34 = {
  title: "Día 34 — Simulacro en condiciones de examen (Reading & Use of English + Writing) · La desinformación y la verdad en la era digital",
  description: "Práctica cronometrada de las 8 partes de Reading & Use of English y las 2 tareas de Writing, combinando gramática y léxico de toda la primera mitad del curso. Vocabulario de desinformación digital. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Aplicar la gestión del tiempo y todos los recursos vistos en condiciones realistas de examen.",
    summary: "Simulacro cronometrado Reading & Writing; desinformación digital; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["perder demasiado tiempo en una sola parte de Use of English.", "no revisar el conteo de palabras en el Writing.", "olvidar aplicar los recursos de registro C1 en el propio Writing, no solo reconocerlos en Reading."],
    reviewPrompts: ["¿Cuánto tiempo dedicas a cada parte de Use of English en 90 minutos?", "¿Revisas tu Writing al final buscando oportunidades de usar recursos C1?"],
  },
  items: [
    TEXT("🔁 Ayer, repaso S5-S6. Hoy un SIMULACRO EN CONDICIONES DE EXAMEN de Reading & Use of English (90 min) y Writing (90 min), aplicando TODO lo visto hasta ahora. Vocabulario: la DESINFORMACIÓN y la VERDAD en la era digital."),
    GRAMMAR("Gestión del tiempo — Reading & Use of English y Writing (repaso)", `READING & USE OF ENGLISH (90 min, 8 partes, 56 preguntas): reparte aproximadamente:
· P1-P4 (Use of English): ~35 min en total (P1 ~6min, P2 ~6min, P3 ~7min, P4 ~16min — la P4 es la más lenta, 2 puntos por ítem).
· P5-P8 (Reading): ~50 min en total (P5 ~10min, P6 ~12min con cross-text, P7 ~15min con párrafos, P8 ~13min).
· Deja ~5 min para revisar todo al final.
WRITING (90 min, 2 tareas de 220-260 palabras): ~40 min por tarea (5 planificar, 28 escribir, 7 revisar), con 10 min de margen.
⚠️ En el propio Writing, busca DELIBERADAMENTE oportunidades de usar: una relativa reducida, un conector formal (given that/whereas), una colocación (pose a threat), un idiom moderado (a double-edged sword) — sin forzarlo ni saturar el texto.`),
    TIP("El día del examen — repaso a mitad de curso", "Has completado la mitad del C1. Confía en el trabajo acumulado: cuando dudes entre dos estructuras, elige la que suene más natural al leerla en voz alta, no la más 'compleja'. El C1 premia la PRECISIÓN y el MATIZ, no la complejidad por sí misma."),
    grammarEx("Use of English — Simulacro combinado (repaso general)", "Aplica cualquier recurso visto hasta ahora, bajo presión.", [
      mc("Never ___ so much false information spread so quickly.", ["has", "have", "had"], 0, "inversión (S2): has (singular: information)."),
      mc("The article, most ___ was later retracted, caused widespread panic.", ["of which", "of whom", "which"], 0, "cuantificador + of which (S4)."),
      fb("The rumour ___ (stem / from) a single, poorly sourced social media post.", ["stemmed from"], "stem from (S6)."),
      mc("It's high time platforms ___ real accountability for viral misinformation.", ["accept", "accepted", "will accept"], 1, "it's time + past simple (S3)."),
      mc("___ the platform's own policies, misinformation continues to spread rapidly.", ["Despite", "Whereas", "Given"], 0, "despite + sustantivo (S5)."),
      fb("The claim was ___ (deny / spread) deliberately by the account's owner.", ["denied spreading"], "deny + -ing (S4)."),
      mc("Fact-checkers face ___ battle against algorithmically amplified falsehood.", ["an uphill", "a double-edged", "a stark"], 0, "an uphill battle (S6)."),
    ]),
    GRAMMAR("Vocabulario del día — La desinformación digital (C1)", "Léxico avanzado de desinformación."),
    deck("C1 S7D34 — Desinformación digital", [
      ["misinformation", "desinformación (sin intención)", "Misinformation spreads faster than facts.", "sustantivo", "ˌmɪsɪnfəˈmeɪʃn"],
      ["deepfake", "vídeo/audio falsificado con IA", "Deepfakes threaten public trust.", "sustantivo", "ˈdiːpfeɪk"],
      ["echo chamber", "cámara de eco", "Algorithms create echo chambers.", "sustantivo", "ˈekəʊ ˌtʃeɪmbə"],
      ["fact-checking", "verificación de datos", "Fact-checking organisations struggle to keep up.", "sustantivo", "ˈfækt ˌtʃekɪŋ"],
      ["amplify", "amplificar", "Algorithms amplify sensational content.", "verbo", "ˈæmplɪfaɪ"],
      ["debunk", "desmentir / desacreditar", "Researchers debunked the claim swiftly.", "verbo", "diːˈbʌŋk"],
      ["credibility", "credibilidad", "The source's credibility was questioned.", "sustantivo", "ˌkredəˈbɪləti"],
      ["virality", "viralidad", "Virality often outpaces accuracy online.", "sustantivo", "ˌvaɪəˈræləti"],
      ["media literacy", "alfabetización mediática", "Media literacy is now an essential skill.", "sustantivo", "ˈmiːdiə ˈlɪtərəsi"],
      ["propaganda", "propaganda", "State propaganda spreads through bots.", "sustantivo", "ˌprɒpəˈɡændə"],
    ]),
    vocabEx("Vocabulario — La desinformación digital", "Elige la opción correcta.", [
      mc("An AI-generated fake video or audio is a ___.", ["deepfake", "echo chamber", "fact-check"], 0, "deepfake."),
      mc("To make something spread more widely or loudly is to ___ it.", ["amplify", "debunk", "verify"], 0, "amplify."),
      mc("To prove a claim false is to ___ it.", ["debunk", "amplify", "propagate"], 0, "debunk."),
      mc("How trustworthy a source appears is its ___.", ["credibility", "virality", "propaganda"], 0, "credibility."),
      mc("The skill of critically evaluating media content is ___.", ["media literacy", "virality", "amplification"], 0, "media literacy."),
      mc("Information deliberately spread to promote a biased viewpoint is ___.", ["propaganda", "fact-checking", "credibility"], 0, "propaganda."),
    ]),

    ...uoe({
      p1: {
        title: "The liar's dividend",
        text: "As deepfake technology has grown increasingly (1)___ sophisticated, a curious and genuinely troubling secondary effect has emerged: it has become progressively easier for genuinely guilty parties to dismiss authentic, damning evidence as fabricated. Researchers have termed this phenomenon the 'liar's dividend' — the growing, corrosive (2)___ that any inconvenient piece of audio or video evidence, however genuinely authentic, might plausibly be dismissed as an AI-generated fake. This poses a threat that extends (3)___ beyond any single fabricated video; it corrodes the very possibility of using authentic evidence to hold anyone genuinely accountable at all. Not only does deepfake technology enable new forms of fabrication, but its mere existence also (4)___ doubt on evidence that is, in fact, entirely genuine. Given the sheer pace at which this technology continues (5)___ improve, media literacy education has become, quite suddenly, considerably more urgent than most educators had anticipated only a few short years ago.",
        q: [
          mc("(1)", ["technically", "technologically", "digitally", "electronically"], 1, "'technologically sophisticated'."),
          mc("(2)", ["possibility", "chance", "likelihood", "suspicion"], 2, "'the growing… likelihood'."),
          mc("(3)", ["far", "much", "well", "considerably"], 2, "'extends well beyond'."),
          mc("(4)", ["casts", "throws", "puts", "raises"], 0, "'also casts doubt on'."),
          mc("(5)", ["to"], "'continues to improve'."),
        ],
      },
      p2: {
        title: "Why corrections fail",
        text: "Fact-checking organisations have grown considerably (1)___ sophisticated in recent years, yet studies consistently show that corrections, however accurate and well-researched, often fail (2)___ change minds once a false claim has taken firm hold. This is not, researchers stress, primarily a failure of the fact-checkers' own methodology; it stems (3)___ deep features of human psychology that resist correction almost regardless of how compelling the actual evidence presented genuinely is. Given (4)___ readily false claims spread compared to their subsequent corrections — studies suggest falsehood travels considerably (5)___ than truth online — fact-checkers face what amounts to an uphill battle from the very outset.",
        q: [
          fb("(1)", ["more"], "'grown considerably more sophisticated'."),
          fb("(2)", ["to"], "'fail to change minds'."),
          fb("(3)", ["from"], "'stems from deep features'."),
          fb("(4)", ["how"], "'Given how readily false claims spread'."),
          fb("(5)", ["faster"], "'travels considerably faster than truth'."),
        ],
      },
      p3: {
        title: "Teaching scepticism without cynicism",
        text: "Media literacy educators face a genuinely difficult (1)___: how to teach healthy scepticism about online content without tipping over into a corrosive, paralysing cynicism that distrusts absolutely everything equally, including genuinely (2)___ reporting. Overcorrection towards blanket distrust can prove every bit as (3)___ to informed public debate as naive, uncritical credulity. The most (4)___ programmes, researchers have found, teach specific, practical verification techniques — checking (5)___, cross-referencing claims, recognising manipulation tactics — rather than simply instilling a vague, generalised (6)___ of everything encountered online.",
        items: [
          { root: "balance", accepted: ["balance"], hint: "'a genuinely difficult balance' (sustantivo)." },
          { root: "credible", accepted: ["credible"], hint: "'genuinely credible reporting' (adjetivo)." },
          { root: "harm", accepted: ["harmful"], hint: "'every bit as harmful' → harmful." },
          { root: "effect", accepted: ["effective"], hint: "'The most effective programmes' → effective." },
          { root: "provenance", accepted: ["provenance"], hint: "'checking provenance' (sustantivo)." },
          { root: "trust", accepted: ["distrust"], hint: "'a vague… distrust of everything' → distrust." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado final",
        items: [
          { s1: "I have never seen misinformation spread this quickly.", key: "NEVER", s2: "Never ___ misinformation spread this quickly.", accepted: ["have I seen"], explanation: "inversión (S2)." },
          { s1: "The claim originated from a single unverified post.", key: "STEMMED", s2: "The claim ___ from a single unverified post.", accepted: ["stemmed"], explanation: "stem from (S6)." },
          { s1: "Fact-checkers face an extremely difficult, ongoing struggle.", key: "UPHILL", s2: "Fact-checkers face ___ struggle.", accepted: ["an uphill"], explanation: "an uphill battle/struggle (S6)." },
          { s1: "Deepfakes pose a serious risk to public trust.", key: "POSE", s2: "Deepfakes ___ a serious risk to public trust.", accepted: ["pose"], explanation: "pose a risk (S6)." },
          { s1: "It's essential that platforms take responsibility now.", key: "TIME", s2: "It's high ___ platforms took responsibility.", accepted: ["time"], explanation: "it's time + past simple (S3)." },
          { s1: "Despite the platform's policies, misinformation still spreads.", key: "WHEREAS", s2: "___ the platform has policies in place, misinformation still spreads.", accepted: ["Whereas"], explanation: "whereas (S5, alternativa a despite)." },
        ],
      },
      p5: {
        title: "The fact-checker's impossible job",
        text: "For nearly a decade, a dedicated fact-checking organisation has worked, largely thanklessly and often at considerable personal cost to its individual staff, to verify claims circulating across social media before they cause genuine, lasting real-world harm. Never has the sheer volume of content requiring verification been higher, and rarely have the organisation's own limited resources felt quite so stretched, so consistently thin, relative to the sheer scale of the challenge they collectively face.\n\nThe organisation's founder, several of whose original colleagues have since left the field entirely, exhausted by years of relentless, largely unrewarded effort, describes the work as a genuine uphill battle that grows measurably steeper with each passing year. Not only has the sheer volume of misinformation increased dramatically, but the sophistication of fabricated content — increasingly aided by accessible AI tools — has also risen sharply, making detection considerably more technically demanding than it was even five years earlier.\n\nWhat troubles her most, she explains, is not merely the practical, technical difficulty of verification itself, but a deeper, more troubling asymmetry inherent in the entire process. A fabricated claim can be constructed and posted within minutes; verifying and thoroughly debunking it properly, by contrast, often takes hours or even days of careful, painstaking work. By the time a proper correction is finally published, the original falsehood has typically already reached millions, while the correction itself frequently reaches only a small, committed fraction of that original audience.\n\nGiven this stark asymmetry, some critics have questioned whether traditional fact-checking, however well-intentioned and rigorously conducted, can ever genuinely keep pace with the sheer volume and velocity of modern misinformation. The organisation's founder, while acknowledging the genuine force of this criticism, maintains that abandoning the effort entirely would represent an even greater, more dangerous failure than continuing to fight what sometimes feels like a losing battle.\n\nHer organisation has, in recent years, shifted a significant part of its own strategy, moving beyond simply debunking individual claims after the fact towards a more preventive approach: partnering with schools and community organisations to build genuine media literacy skills before people encounter sophisticated misinformation in the first place. This shift, she believes, addresses the fundamental structural problem more directly than reactive fact-checking alone ever realistically could.\n\nWhether this preventive strategy will ultimately prove more effective than the traditional, reactive fact-checking model remains, by her own honest admission, genuinely uncertain. But given the scale and velocity of the challenge facing organisations like hers, she argues, experimenting seriously with fundamentally different approaches has become not merely advisable but genuinely, urgently necessary. The old model alone, she believes, is simply no longer, on its own, remotely sufficient to the task at hand.",
        q: [
          mc("What does the founder describe the work as?", ["An easy task.", "A genuine uphill battle that grows steeper each year.", "A solved problem.", "A temporary challenge."], 1, "'describes the work as a genuine uphill battle that grows measurably steeper with each passing year'."),
          mc("What troubles her most about the verification process?", ["The pay.", "The asymmetry between how fast falsehoods spread and how long verification takes.", "Lack of interest.", "Too much funding."], 1, "'a deeper, more troubling asymmetry inherent in the entire process'."),
          mc("What happens by the time a correction is published?", ["Nobody has seen the falsehood.", "The falsehood has already reached millions, while corrections reach far fewer.", "The falsehood is forgotten.", "Everyone believes the correction equally."], 1, "'the original falsehood has typically already reached millions, while the correction itself frequently reaches only a small… fraction'."),
          mc("What criticism do some critics raise?", ["Fact-checking is unnecessary.", "Whether fact-checking can ever keep pace with the volume and velocity of misinformation.", "Fact-checkers are biased.", "The organisation is too well-funded."], 1, "'whether traditional fact-checking… can ever genuinely keep pace with the sheer volume and velocity of modern misinformation'."),
          mc("What strategic shift has the organisation made?", ["Stopped working entirely.", "Moved towards preventive media literacy education alongside reactive fact-checking.", "Focused only on debunking.", "Reduced staff."], 1, "'partnering with schools and community organisations to build genuine media literacy skills before people encounter sophisticated misinformation'."),
          mc("What does the founder believe about the old model alone?", ["It's fully sufficient.", "It's no longer sufficient on its own for the current scale of the task.", "It should be abandoned entirely.", "It never worked."], 1, "'The old model alone, she believes, is simply no longer, on its own, remotely sufficient to the task at hand'."),
        ],
      },
      p6: {
        title: "Should social media platforms be legally liable for misinformation?",
        intro: "Cuatro personas debaten si las plataformas de redes sociales deberían ser legalmente responsables de la desinformación.",
        texts: {
          A: "NADIA: I firmly believe they should bear real legal liability. Platforms currently profit enormously from engagement, and misinformation reliably generates more engagement than measured, accurate content. Given that clear financial incentive, self-regulation alone has proved, time and again, nowhere near sufficient to address the problem seriously.",
          B: "TOM: I share the underlying concern, but full legal liability worries me given the practical realities of content moderation at genuinely massive scale. Whereas a newspaper reviews each individual article before publication, platforms host billions of daily posts; holding them fully liable for every single piece of content posted seems, to me, a genuinely daunting, perhaps impossible practical standard to meet.",
          C: "PRIYA: What matters most to me is distinguishing between hosting content and actively amplifying it algorithmically. A platform simply hosting a false claim seems different in kind from one whose own algorithm actively promotes that claim to millions of additional users specifically because it happens to generate more engagement. Liability, if it exists at all, should focus considerably more on that active amplification.",
          D: "SAM: My honest concern is that legal liability, however well-intentioned, could push platforms toward excessive, overcautious content removal to avoid genuine legal risk, thereby suppressing legitimate speech alongside actual misinformation. Given that real risk of overcorrection, I'd favour transparency requirements and independent regulatory oversight over direct legal liability specifically.",
        },
        q: [
          mc("Who firmly believes platforms should bear real legal liability?", ["A", "B", "C", "D"], 0, "Nadia: 'I firmly believe they should bear real legal liability'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing the practical scale of moderation?", ["A", "B", "C", "D"], 1, "Tom: 'full legal liability worries me given the practical realities of content moderation at genuinely massive scale'."),
          mc("Who distinguishes between hosting content and actively amplifying it?", ["A", "B", "C", "D"], 2, "Priya: 'distinguishing between hosting content and actively amplifying it algorithmically'."),
          mc("Who worries liability could push platforms towards excessive content removal?", ["A", "B", "C", "D"], 3, "Sam: 'legal liability… could push platforms toward excessive, overcautious content removal'."),
        ],
      },
      p7: {
        title: "What we lose when we stop trusting anything",
        text: "The proliferation of sophisticated misinformation has produced an understandable, entirely rational public response: growing scepticism towards online content of every kind. (1)___\n\nThis scepticism, up to a point, represents genuine progress. (2)___ A public that questions sources, checks claims, and resists sharing unverified content reflexively is, by any reasonable measure, healthier than one that believes everything it encounters without question.\n\nBut this same scepticism, taken too far, risks curdling into something considerably more corrosive: a blanket, undifferentiated cynicism that trusts nothing and nobody at all. (3)___ When every source is treated as equally, uniformly unreliable, genuinely careful, accurate journalism loses any meaningful advantage over careless fabrication.\n\nThis matters enormously for how societies function collectively. (4)___ Democratic deliberation depends on some shared, minimal baseline of facts that most participants can reasonably agree upon, however much they might disagree about their proper interpretation.\n\nSome researchers now worry that we have swung too far in the direction of blanket distrust, particularly among younger, heavily online populations. (5)___ Media literacy education, they argue, needs to teach genuine discernment rather than simply generalised, undifferentiated suspicion of absolutely everything encountered online.\n\nStriking the right balance — healthy scepticism without corrosive cynicism — may prove one of the defining civic challenges of the current information age. (6)___ Getting it wrong in either direction carries real, serious costs for how societies collectively reason and decide together.",
        options: [
          "That caution, broadly speaking, is a genuinely healthy instinct.",  // A -> gap 1
          "It marks a real, measurable improvement on naive credulity.",     // B -> gap 2
          "Total distrust flattens every source to the same flat level.",    // C -> gap 3
          "Shared facts are the quiet foundation collective decisions need.", // D -> gap 4
          "The pendulum, some fear, has swung a little too far.",           // E -> gap 5
          "Neither extreme, in the end, serves the public particularly well.", // F -> gap 6
          "Nobody has ever grown more sceptical of online content.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la cautela es un instinto sano."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: mejora respecto a la credulidad ingenua."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la desconfianza total iguala todo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los hechos compartidos son la base."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el péndulo se ha ido demasiado lejos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ningún extremo sirve bien al público."),
        ],
      },
      p8: {
        title: "Four people discuss how they navigate online information",
        text: "Read what four people say about how they personally deal with misinformation online.\n\nA) NADIA: I've become almost obsessively careful, checking sources before sharing absolutely anything now. That said, I do sometimes worry I've swung too far towards distrust — I catch myself doubting even genuinely credible outlets purely out of reflexive habit, which probably isn't especially healthy either, if I'm honest with myself.\n\nB) TOM: I work in fact-checking, and what strikes me most is how exhausting the whole thing has become, even for someone whose entire job is verification. Given how sophisticated deepfakes have become, I genuinely no longer trust my own eyes and ears the way I confidently once did, which is a strange, unsettling thing to admit as a professional.\n\nC) PRIYA: I've started teaching media literacy to my own teenage kids, given how much time they spend online daily. It's an uphill battle, honestly, competing with algorithms specifically designed to be more immediately engaging than my own careful, patient explanations of how to properly verify a genuine source.\n\nD) SAM: I stopped following breaking news altogether, waiting instead for slower, more carefully verified reporting to emerge days later. It's not to mention a small sacrifice in terms of feeling constantly, immediately informed, but by and large, I trust what I eventually do read far more as a direct result of that deliberate delay.\n",
        q: [
          mc("Who worries they've swung too far towards distrust?", ["A", "B", "C", "D"], 0, "Nadia: 'I do sometimes worry I've swung too far towards distrust'."),
          mc("Who works in fact-checking and no longer trusts their own eyes and ears?", ["A", "B", "C", "D"], 1, "Tom: 'I genuinely no longer trust my own eyes and ears the way I confidently once did'."),
          mc("Who teaches media literacy to their own teenage children?", ["A", "B", "C", "D"], 2, "Priya: 'I've started teaching media literacy to my own teenage kids'."),
          mc("Who stopped following breaking news, waiting for verified reporting instead?", ["A", "B", "C", "D"], 3, "Sam: 'I stopped following breaking news altogether, waiting instead for slower, more carefully verified reporting'."),
          mc("Who catches themselves doubting even genuinely credible outlets out of habit?", ["A", "B", "C", "D"], 0, "Nadia: 'I catch myself doubting even genuinely credible outlets purely out of reflexive habit'."),
          mc("Who finds fact-checking exhausting, even as a professional?", ["A", "B", "C", "D"], 1, "Tom: 'what strikes me most is how exhausting the whole thing has become'."),
          mc("Who competes with algorithms designed to be more engaging than their own explanations?", ["A", "B", "C", "D"], 2, "Priya: 'competing with algorithms specifically designed to be more immediately engaging'."),
          mc("Who trusts what they eventually read far more due to a deliberate delay?", ["A", "B", "C", "D"], 3, "Sam: 'I trust what I eventually do read far more as a direct result of that deliberate delay'."),
          mc("Who checks sources before sharing absolutely anything?", ["A", "B", "C", "D"], 0, "Nadia: 'checking sources before sharing absolutely anything now'."),
          mc("Who calls the ongoing challenge 'an uphill battle'?", ["A", "B", "C", "D"], 2, "Priya: 'It's an uphill battle, honestly'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "SIMULACRO CRONOMETRADO (40 min). Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la desinformación se plantearon dos ideas:\n· social media platforms should be held legally liable for misinformation (deberían ser legalmente responsables)\n· holding platforms liable risks suppressing legitimate free speech (la responsabilidad legal arriesga la libertad de expresión)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa DELIBERADAMENTE al menos TRES recursos distintos de las Semanas 1-6 (inversión, condicional, relativa reducida, colocación formal, idiom, conector de cohesión). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "SIMULACRO CRONOMETRADO (40 min). Elige UNA:\n· INFORME para un centro educativo sobre cómo enseñar alfabetización mediática a los estudiantes: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'How I learned to spot misinformation' — reflexiona con ejemplos personales sobre tu propia relación con la información online.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de una experiencia con la desinformación (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué les pasó?): A they shared something false unknowingly · B they were fooled by a deepfake · C they fact-check professionally · D they teach media literacy · E they deliberately delay consuming news · F they lost trust in a source they once relied on. TAREA DOS (¿qué actitud tienen ahora?): A more cautious · B exhausted · C determined to educate others · D philosophical acceptance · E deeply unsettled · F cautiously hopeful.", "This is Part Four. You will hear five people talking about their experience with misinformation. Speaker One: I shared a false claim without checking it properly, and it went further than I ever expected, reaching people I didn't even know. Never have I felt so embarrassed professionally. I now check absolutely everything twice, sometimes three times, before sharing anything at all. Speaker Two: I nearly believed a deepfake video of a politician saying something genuinely outrageous. It was only a small technical glitch that gave it away to me. Given how convincing it otherwise was, I find that genuinely unsettling to think about even now. Speaker Three: I've worked as a professional fact-checker for six years now, and honestly, the sheer volume has become genuinely exhausting. It's an uphill battle that seems to get measurably steeper every single year, without exception. Speaker Four: I teach media literacy in secondary schools now, having left my previous, unrelated career entirely. Given how young people encounter misinformation daily, I felt genuinely compelled to do something concrete and practical about it directly. Speaker Five: I stopped trusting a news source I'd relied on for years after discovering they'd knowingly published something false without ever properly correcting it. That loss of trust, once it happened, proved surprisingly hard to ever fully rebuild again.", [
      mc("Speaker 1 — TAREA UNO (qué le pasó)", ["A", "B", "C", "D", "E", "F"], 0, "A: compartió algo falso sin saberlo."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: casi es engañado/a por un deepfake."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 2, "C: verifica datos profesionalmente."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 3, "D: enseña alfabetización mediática."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: perdió confianza en una fuente en la que confiaba."),
      mc("Speaker 1 — TAREA DOS (actitud actual)", ["A", "B", "C", "D", "E", "F"], 0, "A: más cauteloso/a."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 4, "E: profundamente inquieto/a."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: exhausto/a."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 2, "C: decidido/a a educar a otros."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: aceptación filosófica."),
    ]),

    ...speakingParts({ p1: "cómo verificas la información que consumes online y si te ha engañado alguna vez una noticia falsa", p2: "dos imágenes de la información (alguien verificando cuidadosamente una fuente y alguien compartiendo instantáneamente sin comprobar): compáralas y especula sobre las consecuencias de cada comportamiento", p3: "qué debería hacerse frente a la desinformación (regular las plataformas, enseñar alfabetización mediática desde la escuela, financiar el fact-checking, exigir transparencia algorítmica, fomentar el pensamiento crítico): comentadlo y elegid lo más eficaz", p4: "la desinformación y la verdad digital: si las plataformas deberían ser responsables legalmente, si nos hemos vuelto demasiado desconfiados online y cómo equilibrar el escepticismo sano con la apertura a la información" }),

    SUMMARY("Resumen del Día 34", [
      "Simulacro cronometrado de Reading & Use of English (90 min) y Writing (90 min), aplicando conscientemente los recursos de las Semanas 1-6.",
      "En el Writing, busca deliberadamente oportunidades de usar inversión, condicionales, relativas reducidas, colocaciones e idioms — sin forzar ni saturar.",
      "Vocabulario de desinformación digital. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 35", "Revisa tu Writing del simulacro y marca cada recurso C1 que usaste. Repasa TODO el vocabulario de la semana. Mañana: repaso final de la Semana 7 + mini-simulacro de toda la primera mitad del curso."),
  ],
};

// ───────────────────────── DÍA 35 ─────────────────────────
const DAY35 = {
  title: "Día 35 — Repaso final de la primera mitad del curso + mini-simulacro",
  description: "Consolidación final de TODA la gramática y el léxico de las Semanas 1-7 (todo el primer semestre del C1). Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 7 — cierre de la primera mitad del curso.",
  pedagogy: {
    objective: "Consolidar la totalidad de la primera mitad del curso C1 antes de comenzar la segunda mitad.",
    summary: "Repaso final integral S1-S7; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["De toda la primera mitad del curso, ¿qué estructura dominas mejor? ¿Cuál sigue costándote?", "Repasa tu lista personal de puntos débiles antes de la Semana 8."],
  },
  items: [
    TEXT("🎯 Repaso FINAL de la primera mitad del curso C1 (Semanas 1-7). Hoy consolidamos TODO: tiempos/aspecto, inversión/énfasis, hipótesis/modales/pasiva avanzada, relativas/estilo indirecto/comparación, cohesión textual, y colocaciones/idioms/phrasal verbs formales. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Mapa completo — Semanas 1 a 7", `S1: Aspecto perfecto/continuo · tiempos narrativos · formas de futuro · verbos de estado/dinámicos.
S2: Inversión (Never/Not only/No sooner) · cleft sentences (it-/what-) · do enfático · so/such · fronting · relativas formales.
S3: Condicionales mixtos · alternativas a if · wish/as if/it's time · modales de deducción/crítica retrospectiva · pasiva avanzada · causativo.
S4: Relativas reducidas/cuantificador · estilo indirecto (verbos precisos) · gerundios/infinitivos con matiz · comparación avanzada · determinantes complejos.
S5: Contraste/concesión matizados · causa-consecuencia formal · adición enfática · elipsis/sustitución/referencia · reformulación/resumen.
S6: Colocaciones formales v+sust · idioms académicos · phrasal verbs formales · binomios fijos · colocaciones adj+sust.
S7: Repaso integral combinando todo lo anterior en los mismos textos + simulacro en condiciones de examen.`),
    grammarEx("Use of English — Repaso FINAL de toda la primera mitad", "El repaso más completo hasta ahora: identifica y aplica cualquier estructura de S1-S6.", [
      mc("Never ___ such rapid technological change in a single lifetime.", ["have we witnessed", "we have witnessed", "we witnessed"], 0, "inversión (S2)."),
      mc("If governments ___ regulation sooner, today's crisis might be less severe.", ["introduced", "had introduced", "would introduce"], 1, "condicional mixto (S3)."),
      fb("The report, most ___ was later disputed, sparked considerable debate. (cuantificador)", ["of which"], "relativa con cuantificador (S4)."),
      mc("___ the criticism, the policy proceeded largely unchanged.", ["Notwithstanding", "Given that", "Thereby"], 0, "notwithstanding + sustantivo (S5)."),
      mc("The crisis ___ a genuine threat to long-term stability.", ["poses", "stems", "accounts"], 0, "pose a threat (S6)."),
      fb("It's high time we ___ (address) this properly. (S3)", ["addressed"], "it's time + past simple (S3)."),
      mc("The scandal ___ from a single leaked document, giving rise to widespread outrage.", ["stemmed", "posed", "drew"], 0, "stem from (S6)."),
      mc("Whichever policy is ultimately adopted, ___ , real change will take years.", ["by and large", "given that", "notwithstanding"], 0, "by and large (S6, resumen)."),
    ]),
    GRAMMAR("Repaso de vocabulario — toda la primera mitad", "Repasa mentalmente los 34 mazos de las Semanas 1-7."),
    vocabEx("Vocabulario — Repaso FINAL de la primera mitad del curso", "Elige la opción correcta.", [
      mc("An ethical situation with no easy right choice:", ["dilemma", "breakthrough", "precedent"], 0, "dilemma."),
      mc("A wrongful conviction:", ["miscarriage of justice", "plea bargain", "due process"], 0, "miscarriage of justice."),
      mc("Uncontrolled outward expansion of a city:", ["urban sprawl", "zoning", "infrastructure"], 0, "urban sprawl."),
      mc("The origin or source of food, e.g.:", ["provenance", "palate", "staple"], 0, "provenance."),
      mc("Being forced out of a job by technology:", ["displacement", "obsolete", "upskilling"], 0, "displacement."),
      mc("The difference in wealth between rich and poor:", ["wealth gap", "welfare state", "social mobility"], 0, "wealth gap."),
      mc("A community living away from their homeland:", ["diaspora", "heritage", "integration"], 0, "diaspora."),
      mc("Payments made to creators for use of their work:", ["royalties", "saturation", "mainstream"], 0, "royalties."),
      mc("An AI-generated fake video:", ["deepfake", "echo chamber", "fact-check"], 0, "deepfake."),
      mc("A loan specifically used to buy property:", ["mortgage", "tenant", "landlord"], 0, "mortgage."),
    ]),

    ...uoe({
      p1: {
        title: "Halfway through, looking both ways",
        text: "Standing at the genuine midpoint of any sufficiently demanding course invites a particular, distinctive kind of reflection: half the journey lies (1)___ behind, considerably more still lies ahead, and the accumulated distance travelled so far can be difficult to properly appreciate from the inside, absorbed as one inevitably is in each day's individual, incremental challenges. Never (2)___ so much grammar, vocabulary and genuine skill been asked of a language learner in so concentrated a period. Given (3)___ demanding the material genuinely has been, it's worth pausing, briefly, to genuinely acknowledge quite how much ground has actually, demonstrably been covered. Not only (4)___ learners at this stage typically command a considerably wider range of grammatical structures than they did seven weeks earlier, but they have also, by and large, developed a genuinely more discerning ear for register, nuance and the countless small distinctions that separate competent from genuinely, authentically fluent expression. This is, in other (5)___, precisely the moment to trust the accumulated evidence of real progress made, rather than the often harsher, less reliable evidence of daily, close-up self-assessment.",
        q: [
          mc("(1)", ["already", "already", "far", "well"], 0, "'half the journey lies already behind'."),
          mc("(2)", ["has", "have", "had", "having"], 1, "inversión: 'Never have… been asked' (plural: grammar, vocabulary, skill)."),
          mc("(3)", ["how", "so", "as", "such"], 0, "'Given how demanding the material… has been'."),
          mc("(4)", ["do", "have", "are", "did"], 0, "'Not only do learners… command'."),
          mc("(5)", ["words", "terms", "ways", "ideas"], 0, "'in other words'."),
        ],
      },
      p2: {
        title: "What the second half demands",
        text: "The second half of any sufficiently ambitious course rarely proceeds (1)___ simply as an extension of the first; it typically demands a different, more integrated kind of fluency altogether. Whereas the first half necessarily introduces individual structures largely in isolation, one at a time, the second half increasingly (2)___ on combining them fluidly, naturally, and appropriately within a single, coherent piece of connected discourse. Given (3)___ this shift genuinely requires, learners at this particular stage would do well to focus less on memorising yet more isolated rules and considerably more on noticing how skilled, fluent writers and speakers actually, naturally combine the structures already, painstakingly acquired. It's not to (4)___ that further new material won't continue to matter considerably; it clearly, obviously will. But integration, from this point onward, matters every bit as much as accumulation — a lesson that this very course's own repeated combined-review days have been specifically, deliberately designed to reinforce.",
        q: [
          fb("(1)", ["merely"], "'rarely proceeds merely as an extension'."),
          fb("(2)", ["hinges", "depends"], "'increasingly hinges/depends on combining'."),
          fb("(3)", ["what"], "'Given what this shift genuinely requires'."),
          fb("(4)", ["say"], "'It's not to say that'."),
        ],
      },
      p3: {
        title: "The learner who tracked their own progress",
        text: "One particularly (1)___ former student of this very kind of intensive course kept a detailed personal journal throughout her studies, later crediting the practice with genuinely, measurably accelerating her own eventual fluency. Not only did she record new vocabulary and grammatical structures as she encountered them, but she also, crucially, tracked her own growing (2)___ to combine them naturally in extended written and spoken practice. By the genuine midpoint of her own course, her journal entries showed a marked (3)___ from single, isolated sentences demonstrating one structure at a time towards genuinely (4)___ paragraphs weaving several structures together fluidly and naturally. Her own experience, while admittedly (5)___, echoes what course designers and language researchers alike have long, consistently observed: that genuine integration, considerably more than mere accumulation, marks the crucial, decisive transition from competent intermediate learner to genuinely fluent, confident advanced speaker.",
        items: [
          { root: "discipline", accepted: ["disciplined"], hint: "'One particularly disciplined… student' → disciplined." },
          { root: "able", accepted: ["ability"], hint: "'her own growing ability' → ability." },
          { root: "shift", accepted: ["shift"], hint: "'a marked shift' (sustantivo)." },
          { root: "integrate", accepted: ["integrated"], hint: "'genuinely integrated paragraphs' → integrated." },
          { root: "anecdote", accepted: ["anecdotal"], hint: "'while admittedly anecdotal' → anecdotal." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso FINAL S1-S7",
        items: [
          { s1: "I have never seen so much progress in such a short time.", key: "NEVER", s2: "Never ___ so much progress in such a short time.", accepted: ["have I seen"], explanation: "inversión (S2)." },
          { s1: "If I had started this course knowing all this, I would find week 7 easier.", key: "HAD", s2: "If I ___ this course knowing all this, I would find week 7 easier.", accepted: ["had started"], explanation: "condicional mixto (S3)." },
          { s1: "The course, most of which I've genuinely enjoyed, has been demanding.", key: "WHICH", s2: "The course, most of ___ I've genuinely enjoyed, has been demanding.", accepted: ["which"], explanation: "cuantificador + of which (S4)." },
          { s1: "Despite the difficulty, most learners persist to the end.", key: "NOTWITHSTANDING", s2: "___ the difficulty, most learners persist to the end.", accepted: ["Notwithstanding"], explanation: "notwithstanding (S5)." },
          { s1: "This stage of the course represents a serious challenge for most learners.", key: "POSES", s2: "This stage of the course ___ a serious challenge for most learners.", accepted: ["poses"], explanation: "pose a challenge (S6)." },
          { s1: "Integration matters as much as accumulation, in general terms.", key: "LARGE", s2: "By and ___, integration matters as much as accumulation.", accepted: ["large"], explanation: "by and large (S6)." },
        ],
      },
      p5: {
        title: "What thirty-five days of study actually changes",
        text: "Cognitive scientists studying language acquisition have long been fascinated by a particular puzzle: why does progress in a second language so often feel, to the learner themselves, slower and less certain than objective measures of their actual, demonstrable ability would independently suggest? A learner who has genuinely absorbed dozens of new grammatical structures and hundreds of new lexical items over a sustained, demanding period frequently reports feeling that they have made disappointingly little real progress at all, even as external, objective testing reveals substantial, measurable gains.\n\nPart of the explanation, researchers have found, lies in what psychologists term the 'illusion of explanatory depth' applied specifically to language: learners tend to notice, and consequently remember most vividly, the gaps in their own knowledge — the word they couldn't quite recall, the structure they hesitated over — rather than the considerably larger body of knowledge they now deploy effortlessly, entirely without conscious thought or noticeable hesitation. What has genuinely, thoroughly become automatic simply stops registering consciously as 'knowledge' at all; it has, in a very real sense, disappeared from view precisely by becoming second nature.\n\nThis systematic perceptual bias has real, practical consequences for how learners should reasonably interpret their own subjective sense of progress at any given point in an extended course. A learner at the genuine midpoint of a demanding programme, struggling with the day's newest, most challenging material, may feel that recent progress has stalled entirely, even while a whole range of earlier structures — structures that once felt genuinely, seriously difficult — have quietly, imperceptibly become second nature along the way.\n\nSome language programmes have begun deliberately incorporating structured self-assessment specifically designed to counteract this systematic bias: having learners attempt, and then carefully review, material from several weeks earlier, so they can directly, concretely witness how much easier previously demanding content has genuinely, measurably become. This kind of deliberate retrospective comparison, research increasingly suggests, provides learners with considerably more accurate, reliable information about their own actual progress than in-the-moment, close-up self-assessment ever reliably can.\n\nThe broader lesson extends well beyond language learning specifically. Any sufficiently demanding, cumulative skill — a musical instrument, an athletic discipline, a complex professional competency — likely produces broadly similar systematic distortions in how practitioners perceive their own developing progress. We notice, disproportionately and almost by design, what remains genuinely difficult; we systematically fail to notice what has quietly, gradually become effortless, precisely because effortlessness, by its very nature, doesn't announce itself or draw attention to itself in the way that ongoing, felt difficulty reliably, persistently does.\n\nFor any learner reaching the genuine midpoint of a demanding course, then, the lesson is reasonably clear and genuinely actionable. Trust the accumulated evidence considerably more than the daily, felt sense of struggle. Look back deliberately, periodically, at where you actually started. The distance travelled, viewed with this kind of proper perspective, is almost invariably greater — often considerably, sometimes dramatically greater — than the view from directly inside the ongoing daily struggle could ever, on its own, comfortably or accurately suggest.",
        q: [
          mc("What puzzle have cognitive scientists studied about language learning?", ["Why learning is always easy.", "Why progress feels slower than objective measures suggest.", "Why learners give up.", "Why grammar is hard."], 1, "'why does progress… so often feel… slower and less certain than objective measures… would… suggest'."),
          mc("What explains this perceptual bias, according to researchers?", ["Learners lack talent.", "Learners notice gaps in knowledge more than what has become automatic.", "Testing is unreliable.", "Teachers are too harsh."], 1, "'learners tend to notice… the gaps in their own knowledge… rather than the considerably larger body of knowledge they now deploy effortlessly'."),
          mc("What happens to knowledge that has become automatic?", ["It's forgotten.", "It stops registering consciously as 'knowledge' at all.", "It becomes harder.", "It's tested more."], 1, "'What has genuinely, thoroughly become automatic simply stops registering consciously as \"knowledge\" at all'."),
          mc("What have some programmes begun doing to counteract this bias?", ["Nothing.", "Having learners review material from weeks earlier to see genuine progress.", "Increasing difficulty.", "Removing self-assessment entirely."], 1, "'having learners attempt, and then carefully review, material from several weeks earlier'."),
          mc("Does this perceptual bias apply beyond language learning?", ["No, only languages.", "Yes, likely to any sufficiently demanding cumulative skill.", "Only to music.", "Only to sport."], 1, "'Any sufficiently demanding, cumulative skill… likely produces broadly similar systematic distortions'."),
          mc("What is the practical lesson for a learner at the course midpoint?", ["Give up.", "Trust accumulated evidence over daily felt struggle and look back periodically.", "Ignore all progress.", "Focus only on new material."], 1, "'Trust the accumulated evidence considerably more than the daily, felt sense of struggle. Look back deliberately'."),
        ],
      },
      p6: {
        title: "Does self-assessment help or hinder language learning?",
        intro: "Cuatro personas debaten si la autoevaluación ayuda u obstaculiza el aprendizaje de idiomas.",
        texts: {
          A: "NADIA: I think regular self-assessment is essential, given how easily learners lose perspective on their own progress. Without periodically comparing where you are now to where you started, it's almost impossible to accurately judge how far you've actually come, and that distorted perception can genuinely discourage people from persisting.",
          B: "TOM: I'd push back a little, given how anxiety-inducing constant self-assessment can prove for some learners. Whereas some people find it motivating, others become so focused on measuring progress that they lose the genuine enjoyment of the process itself, which paradoxically can slow their actual learning down rather than accelerate it.",
          C: "PRIYA: What matters most, surely, is the specific type of self-assessment involved. Comparing your current work to your own earlier work seems genuinely useful and encouraging; comparing yourself constantly to other learners, by contrast, often just breeds unhelpful anxiety and discouragement without providing any genuinely useful, actionable information at all.",
          D: "SAM: My honest view is that self-assessment matters far less than external, more objective feedback from a qualified teacher. Learners are notoriously unreliable judges of their own genuine ability, given the well-documented perceptual biases involved; an outside, more objective perspective corrects for that in ways self-reflection alone, however well-intentioned, simply cannot reliably achieve.",
        },
        q: [
          mc("Who thinks regular self-assessment is essential for accurate perspective?", ["A", "B", "C", "D"], 0, "Nadia: 'regular self-assessment is essential, given how easily learners lose perspective'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing anxiety it can cause?", ["A", "B", "C", "D"], 1, "Tom: 'how anxiety-inducing constant self-assessment can prove for some learners'."),
          mc("Who distinguishes between comparing to your own past work versus comparing to others?", ["A", "B", "C", "D"], 2, "Priya: 'Comparing your current work to your own earlier work seems genuinely useful… comparing yourself constantly to other learners… breeds unhelpful anxiety'."),
          mc("Who values external teacher feedback over self-assessment?", ["A", "B", "C", "D"], 3, "Sam: 'self-assessment matters far less than external, more objective feedback from a qualified teacher'."),
        ],
      },
      p7: {
        title: "The shape of what comes next",
        text: "Having reached the genuine midpoint of this demanding course, it's worth briefly, deliberately considering what the second half will actually, concretely involve. (1)___\n\nThe grammar and vocabulary introduced so far have covered a genuinely wide, ambitious range: from the fine-grained matters of aspect and emphasis to the dense formal register of academic collocations and idiom. (2)___ The second half will continue introducing genuinely new material, certainly, but its deeper emphasis will shift increasingly towards fluent integration.\n\nThis matters because the C1 exam itself, ultimately, does not test isolated grammatical structures in isolation from one another. (3)___ It tests the ability to deploy the full, accumulated range of one's linguistic resources fluidly, appropriately and in genuinely natural combination, exactly as skilled native speakers themselves routinely, unconsciously do.\n\nThe upcoming weeks will accordingly introduce further new structures and further specialised vocabulary. (4)___ But they will increasingly ask learners to combine everything already acquired with everything still to come, in texts and tasks of gradually, deliberately increasing sophistication and complexity.\n\nThis is, in an important sense, precisely how real fluency is actually built. (5)___ Not through the simple, linear accumulation of isolated facts and rules, but through their sustained, deliberate integration into something considerably more than the sum of its individual parts.\n\nWhatever specific challenges the second half of this course ultimately, inevitably presents, the foundation built across these first seven demanding weeks provides genuinely solid ground to build confidently upon. (6)___ The hardest, most disorienting part — genuinely getting started — already, demonstrably, lies well behind.",
        options: [
          "That range has been, by design, genuinely wide.",                // A -> gap 1
          "It's a reasonable, useful moment to look forward as well as back.", // B -> gap 2
          "Isolated structures alone were never really the actual point.",  // C -> gap 3
          "New material will keep arriving, certainly, right to the end.",  // D -> gap 4
          "Fluency, in the end, is built through combination, not addition.", // E -> gap 5
          "What lies ahead is, in every genuine sense, more of the same.",   // F -> gap 6
          "The second half of the course requires no further effort at all.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: es un buen momento para mirar adelante."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese rango ha sido amplio a propósito."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las estructuras aisladas nunca fueron el objetivo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: seguirá llegando material nuevo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la fluidez se construye combinando, no sumando."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: lo más difícil ya quedó atrás."),
        ],
      },
      p8: {
        title: "Four learners reflect on reaching the midpoint of their C1 course",
        text: "Read what four learners say about reaching the halfway point of an advanced English course.\n\nA) NADIA: Never did I imagine, starting out seven weeks ago, that I'd be combining conditionals, relatives and formal vocabulary in the same sentence this comfortably. Looking back at my earliest work genuinely shocked me — I'd completely forgotten how much simpler it used to be, in ways that felt, at the time, genuinely hard.\n\nB) TOM: Given how demanding the last few weeks specifically have felt, I honestly needed this review week more than I initially realised. It's not to say I've mastered everything — far from it — but by and large, I can now see the shape of what I actually know, rather than just feeling permanently lost in the daily details.\n\nC) PRIYA: What surprised me most was the combined-review approach specifically. Studying each structure in isolation felt manageable enough at the time, but it was only when I had to combine them fluently in the same paragraph that I realised how much genuine integration still remained to properly happen for me.\n\nD) SAM: I'll admit the halfway point felt genuinely daunting at first — realising there's still an entire second half still to come. That said, knowing what the first half actually, concretely covered gives me real confidence about what's realistically, genuinely achievable in the weeks still ahead.\n",
        q: [
          mc("Who never imagined they'd combine structures this comfortably after seven weeks?", ["A", "B", "C", "D"], 0, "Nadia: 'Never did I imagine… combining conditionals, relatives and formal vocabulary… this comfortably'."),
          mc("Who needed the review week more than they initially realised?", ["A", "B", "C", "D"], 1, "Tom: 'I honestly needed this review week more than I initially realised'."),
          mc("Who realised how much integration still remained once combining structures?", ["A", "B", "C", "D"], 2, "Priya: 'it was only when I had to combine them fluently… that I realised how much genuine integration still remained'."),
          mc("Who found the halfway point daunting at first, given the second half still ahead?", ["A", "B", "C", "D"], 3, "Sam: 'the halfway point felt genuinely daunting at first… there's still an entire second half still to come'."),
          mc("Who was shocked looking back at their earliest work?", ["A", "B", "C", "D"], 0, "Nadia: 'Looking back at my earliest work genuinely shocked me'."),
          mc("Who can now see the shape of what they know, rather than feeling lost?", ["A", "B", "C", "D"], 1, "Tom: 'I can now see the shape of what I actually know, rather than just feeling permanently lost'."),
          mc("Who found studying structures in isolation manageable, but combining them harder?", ["A", "B", "C", "D"], 2, "Priya: 'Studying each structure in isolation felt manageable enough… it was only when I had to combine them… that I realised'."),
          mc("Who feels real confidence about what's achievable ahead, given what's already covered?", ["A", "B", "C", "D"], 3, "Sam: 'knowing what the first half actually… covered gives me real confidence about what's… achievable'."),
          mc("Who admits they haven't mastered everything, far from it?", ["A", "B", "C", "D"], 1, "Tom: 'It's not to say I've mastered everything — far from it'."),
          mc("Who forgot how much simpler their English used to feel?", ["A", "B", "C", "D"], 0, "Nadia: 'I'd completely forgotten how much simpler it used to be'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre el aprendizaje se plantearon dos ideas:\n· learners should focus on mastering individual structures thoroughly before combining them (dominar estructuras individuales antes de combinarlas)\n· learners benefit most from practising combined, integrated language from early on (practicar lenguaje combinado desde el principio)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa DELIBERADAMENTE recursos de al menos TRES semanas distintas del curso. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned about learning, halfway through' — reflexiona sobre tu propio proceso en las primeras 7 semanas del curso.\n· CARTA a tu propio 'yo' del Día 1 de este curso: cuéntale qué has aprendido y qué le dirías sabiendo lo que sabes ahora.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their course progress. Woman: Never have I felt this confident combining structures in the same sentence. Man: Same here, honestly. Given how demanding the first half has been, that's genuinely reassuring to hear. Extract Two. You hear a teacher discussing student progress generally. Woman: By and large, students underestimate their own progress at this exact stage. Man: That's exactly why we built in this combined review week, to help correct that particular perception. Extract Three. You hear two friends discussing the course ahead. Man: It's a bit daunting, knowing there's a whole second half still to come. Woman: True, but given what we've already covered, I feel genuinely ready for whatever comes next.", [
      mc("1. How does the woman feel about combining structures now?", ["Unconfident.", "More confident than ever before.", "The same as before."], 1, "'Never have I felt this confident'."),
      mc("2. How does the man react to this?", ["Disagrees.", "Finds it reassuring, given how demanding the first half was.", "Is indifferent."], 1, "'that's genuinely reassuring to hear'."),
      mc("3. What does the teacher say students typically do?", ["Overestimate progress.", "Underestimate their own progress at this stage.", "Accurately assess progress."], 1, "'students underestimate their own progress at this exact stage'."),
      mc("4. Why was the combined review week built in?", ["To add difficulty.", "To help correct that perception.", "By accident."], 1, "'to help correct that particular perception'."),
      mc("5. How does the man feel about the course ahead?", ["Fully confident.", "A bit daunting.", "Uninterested."], 1, "'It's a bit daunting'."),
      mc("6. How does the woman feel, given what's already been covered?", ["Unprepared.", "Genuinely ready for whatever comes next.", "Indifferent."], 1, "'I feel genuinely ready for whatever comes next'."),
    ]),

    ...speakingParts({ p1: "cómo valoras tu propio progreso a mitad de este curso y qué te ha resultado más gratificante", p2: "dos imágenes del aprendizaje (alguien mirando atrás sus primeros apuntes con sorpresa y alguien mirando adelante un camino largo por recorrer): compáralas y especula sobre lo que sienten", p3: "qué es más importante en la segunda mitad de un curso avanzado (combinar estructuras con fluidez, ampliar vocabulario, practicar bajo presión de tiempo, la confianza, la constancia): comentadlo y elegid lo más importante", p4: "el aprendizaje y el progreso: si subestimamos nuestro propio avance, si es mejor dominar cada cosa por separado o practicar todo combinado desde el principio, y qué consejo darías a alguien que empieza este curso hoy" }),

    SUMMARY("¡Primera mitad del curso C1 completada! (Día 35)", [
      "Has completado 7 de 12 semanas: TODA la gramática nuclear del C1 (aspecto/tiempos, inversión/énfasis, hipótesis/modales/pasiva avanzada, relativas/estilo indirecto/comparación, cohesión textual, colocaciones/idioms/phrasal verbs formales) y sabes combinarla con fluidez.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 en 35 días consecutivos, con un simulacro completo en condiciones de examen (Día 34).",
      "Ahora, el mini-simulacro de la semana — cierre de la primera mitad del curso.",
      "La segunda mitad del curso (Semanas 8-12) introducirá nueva gramática avanzada, seguirá combinándola con lo ya visto, y culminará en el SIMULACRO FINAL del C1 Advanced.",
    ]),
    INFO("Mini-simulacro de la Semana 7 — Cierre de la primera mitad", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. ¡Enhorabuena por completar la primera mitad del C1 Advanced! Descansa antes de empezar la Semana 8."),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "Repaso integral (Semanas 1-6) · El trabajo remoto y el futuro laboral",
  description: "Consolidación combinada de toda la gramática de la primera mitad del curso (aspecto/tiempos/futuro, inversión/énfasis, condicionales/modales/pasiva avanzada, relativas/estilo indirecto/gerundios-infinitivos/comparación, conectores del discurso, colocaciones/idioms/phrasal verbs), con el hilo del trabajo remoto, la automatización, la vivienda y la desinformación digital. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
