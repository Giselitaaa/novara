/**
 * C2 Proficiency · Semana 7 — "Repaso integral (Semanas 1-6)".
 * Consolidación de TODA la gramática y léxico de la primera mitad del curso:
 * condicionales mixtos formales + inversión condicional ampliada (S1), inversión
 * rara + fronting enfático + pseudo-cleft avanzado (S2), elipsis/gapping +
 * cláusulas nominales con extraposición (S3), verbos de reporte de matiz fino +
 * discurso indirecto libre (S4), conectores institucionales/legales (S5), e
 * idioms/proverbios/falsos amigos de nivel C2 (S6) — combinados en cada texto.
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

// ───────────────────────── DÍA 31 ─────────────────────────
const DAY31 = {
  title: "Día 31 — Repaso integral: condicionales e inversión (Semanas 1-2) · La salud pública y el bienestar",
  description: "Repaso combinado: condicionales mixtos formales e inversión condicional ampliada (S1); inversión rara, fronting enfático y pseudo-cleft avanzado (S2). Vocabulario de la salud pública. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Combinar con fluidez los recursos gramaticales de las semanas 1 y 2 en un mismo texto.",
    summary: "Repaso combinado S1-S2; salud pública y bienestar; Use of English P1-P7, Writing, Listening P1, Speaking P1-P3.",
    commonMistakes: ["olvidar que 'Had it not been for' exige un sustantivo, no una cláusula completa.", "confundir 'Only when' (exige inversión) con 'Only if' en un contexto no inicial.", "usar pseudo-cleft y fronting de forma redundante en el mismo párrafo."],
    reviewPrompts: ["¿Recuerdas cómo se invierte 'Had I known...'?", "¿Cuál es la diferencia entre 'Not since' y 'Not for' seguidos de inversión?"],
  },
  items: [
    TEXT("🎯 Semana 7: REPASO INTEGRAL de las Semanas 1-6. Hoy combinamos los CONDICIONALES MIXTOS FORMALES/INVERSIÓN CONDICIONAL (S1) con la INVERSIÓN RARA/FRONTING/PSEUDO-CLEFT (S2) en los mismos textos. Vocabulario: la SALUD PÚBLICA y el BIENESTAR."),
    GRAMMAR("Repaso combinado — Semanas 1 y 2", `SEMANA 1 — Condicionales mixtos formales e inversión condicional:
· Had it not been for / But for + sustantivo, ...would have... (sin verbo conjugado tras la expresión).
· Were... to + infinitivo (hipótesis formal de futuro): Were the policy to fail...
· Inversión condicional ampliada: Had I known... / Should you require... / Were this to happen...
· Failing that (si eso no fuera posible) / short of (a menos que, salvo que).
SEMANA 2 — Inversión rara, fronting y pseudo-cleft:
· Only + cláusula temporal/condicional + inversión: Only when the results came in did we understand...
· Not for/Not since + sustantivo + inversión: Not since the outbreak had the clinic seen...
· Nowhere/In no way/Under no circumstances + inversión.
· Fronting: Gone are the days when... / Such was the concern that...
· Pseudo-cleft avanzado: All (that) X did was.../ What X did was...`),
    grammarEx("Use of English — Repaso combinado S1-S2", "Completa o elige, combinando ambas semanas.", [
      mc("___ it not been for the vaccination campaign, the outbreak would have spread far further.", ["Had", "Was", "Were"], 0, "Had it not been for + sustantivo (S1)."),
      fb("Only when the results finally came in ___ (understand) the true scale of the crisis. (inversión)", ["did we understand"], "Only when + inversión con did (S2)."),
      mc("___ the policy fail to reduce hospital admissions, a full review would follow.", ["Should", "Would", "Did"], 0, "Should + inversión condicional (S1)."),
      fb("Not since the outbreak began ___ (the clinic / see) such demand. (inversión)", ["had the clinic seen"], "Not since + inversión (S2)."),
      mc("Gone ___ the days when public health campaigns relied solely on posters.", ["are", "were", "have been"], 0, "Fronting: Gone are the days when... (S2)."),
      mc("All the new policy ___ was shift resources from treatment to prevention.", ["did", "has done", "was doing"], 0, "Pseudo-cleft avanzado: All... did was (S2)."),
      fb("Under no circumstances ___ (the ministry / release) unverified health data. (inversión)", ["would the ministry release", "will the ministry release"], "Under no circumstances + inversión (S2)."),
    ]),
    GRAMMAR("Vocabulario del día — La salud pública y el bienestar (C2)", "Léxico de maestría sobre salud pública y bienestar."),
    deck("C2 S7D31 — Salud pública y bienestar", [
      ["epidemiology", "epidemiología", "Epidemiology tracks how diseases spread through populations.", "sustantivo", "ˌepɪˌdiːmiˈɒlədʒi"],
      ["preventive care", "atención preventiva", "Preventive care reduces long-term healthcare costs considerably.", "sustantivo", "prɪˈventɪv keə"],
      ["health disparities", "desigualdades en salud", "Health disparities persist across income and geographic lines.", "sustantivo", "helθ dɪˈspærətiz"],
      ["chronic illness", "enfermedad crónica", "Chronic illness management requires sustained, coordinated care.", "sustantivo", "ˈkrɒnɪk ˈɪlnəs"],
      ["wellbeing", "bienestar", "Mental wellbeing is increasingly central to public health policy.", "sustantivo", "ˌwelˈbiːɪŋ"],
      ["stigma", "estigma", "Stigma still prevents many from seeking timely mental healthcare.", "sustantivo", "ˈstɪɡmə"],
      ["holistic", "holístico/a", "A holistic approach treats the whole person, not just symptoms.", "adjetivo", "həˈlɪstɪk"],
      ["accessibility", "accesibilidad", "Accessibility of healthcare remains uneven across rural regions.", "sustantivo", "əkˌsesəˈbɪləti"],
      ["underfunded", "infrafinanciado/a", "Public health systems remain chronically underfunded in many countries.", "adjetivo", "ˌʌndəˈfʌndɪd"],
      ["resilience", "resiliencia", "Building community resilience is central to pandemic preparedness.", "sustantivo", "rɪˈzɪliəns"],
    ]),
    vocabEx("Vocabulario — La salud pública y el bienestar", "Elige la opción correcta.", [
      mc("The study of how diseases spread through populations:", ["epidemiology", "wellbeing", "stigma"], 0, "epidemiology."),
      mc("Unfair, systematic differences in health outcomes between groups:", ["health disparities", "preventive care", "accessibility"], 0, "health disparities."),
      mc("An illness lasting a long time, often requiring ongoing management:", ["chronic illness", "holistic approach", "resilience"], 0, "chronic illness."),
      mc("Negative social judgement attached to a condition or diagnosis:", ["stigma", "wellbeing", "accessibility"], 0, "stigma."),
      mc("Treating the whole person rather than isolated symptoms:", ["holistic", "underfunded", "chronic"], 0, "holistic."),
      mc("Lacking sufficient financial resources to operate properly:", ["underfunded", "holistic", "resilient"], 0, "underfunded."),
    ]),

    ...uoe({
      p1: {
        title: "The system that almost wasn't there",
        text: "Had it not been for a small, chronically underfunded team of epidemiologists working largely unnoticed for over a decade, the region's public health (1)___ would very likely have collapsed entirely under sudden pandemic pressure. Only when hospital admissions began climbing sharply did policymakers (2)___ fully grasp quite how fragile the underlying system genuinely was. Gone are the days when public health could reasonably be treated as a low-priority afterthought, tucked away behind more visible, more immediately (3)___ political concerns. Were funding to be cut again, as some officials have quietly proposed, the consequences would almost (4)___ prove considerably graver than before. All the crisis genuinely did, in the end, was expose weaknesses that careful observers had been warning about for years, largely (5)___. Under no circumstances, most experts now firmly agree, should preventive infrastructure ever again be allowed to (6)___ so severely neglected.",
        q: [
          mc("(1)", ["infrastructure", "structure", "framework", "system"], 0, "'public health infrastructure would very likely have collapsed'."),
          mc("(2)", ["fully", "genuinely", "truly", "really"], 0, "'did policymakers fully grasp'."),
          mc("(3)", ["pressing", "urgent", "immediate", "compelling"], 0, "'more immediately pressing political concerns'."),
          mc("(4)", ["certainly", "inevitably", "undoubtedly", "invariably"], 1, "'would almost inevitably prove considerably graver'."),
          mc("(5)", ["unheeded", "unheard", "unnoticed", "ignored"], 0, "'warning about for years, largely unheeded'."),
          mc("(6)", ["become", "remain", "grow", "stay"], 1, "'should… infrastructure ever again be allowed to remain so severely neglected'."),
        ],
      },
      p2: {
        title: "What the clinic learned",
        text: "Not since the region's last major outbreak, decades earlier, had a single local clinic seen demand (1)___ so sharply within so short a period. Were the same crisis to recur today, staff now insist, the clinic would respond very differently — not (2)___ better resourced, but considerably better organised. What the experience ultimately revealed was (3)___ much institutional knowledge had simply been lost over the intervening decades, quietly discarded as budgets tightened and experienced staff retired without adequate handover. Only gradually, as records were painstakingly reconstructed from scattered archives, (4)___ the full extent of that lost knowledge become clear. Short of a fundamental overhaul of how institutional memory is preserved and actively maintained, similar gaps will almost certainly resurface (5)___ the next serious crisis eventually, inevitably arrives. Failing that broader systemic reform, individual clinics have begun quietly building their own emergency protocols, (6)___ imperfect, simply to avoid repeating the same costly mistakes twice.",
        q: [
          fb("(1)", ["rise", "climb", "increase"], "'seen demand rise/climb/increase so sharply'."),
          fb("(2)", ["merely", "simply"], "'not merely/simply better resourced'."),
          fb("(3)", ["how"], "'revealed was how much institutional knowledge'."),
          fb("(4)", ["did"], "'Only gradually… did the full extent… become clear' — inversión."),
          fb("(5)", ["once", "when"], "'resurface once/when the next serious crisis… arrives'."),
          fb("(6)", ["however"], "'however imperfect' (concesivo)."),
        ],
      },
      p3: {
        title: "Rebuilding trust in public health",
        text: "Restoring genuine public (1)___ in health institutions, considerably damaged by years of visible underfunding and inconsistent messaging, has proven far harder than simply restoring the underlying physical infrastructure itself. Health officials now widely (2)___ that transparency, however uncomfortable in the short term, matters considerably more for long-term public trust than carefully managed, overly cautious messaging ever quite could. This growing (3)___ has led several regions to publish previously withheld data on hospital capacity and resource allocation, notwithstanding some initial (4)___ from officials worried about public alarm. The resulting policy, while still genuinely (5)___ in several important respects, represents a meaningfully more honest relationship between health authorities and the communities they ultimately, fundamentally serve. Building lasting (6)___ across an entire population, most experts now agree, requires precisely this kind of sustained, uncomfortable honesty rather than any reassuring but ultimately hollow message alone.",
        items: [
          { root: "confidence", accepted: ["confidence"], hint: "'Restoring genuine public confidence' (sustantivo)." },
          { root: "acknowledge", accepted: ["acknowledge"], hint: "'Health officials now widely acknowledge that' (verbo)." },
          { root: "recognise", accepted: ["recognition"], hint: "'This growing recognition has led…' → recognition." },
          { root: "reluctant", accepted: ["reluctance"], hint: "'some initial reluctance from officials' → reluctance." },
          { root: "complete", accepted: ["incomplete"], hint: "'still genuinely incomplete in several… respects' → incomplete." },
          { root: "resilient", accepted: ["resilience"], hint: "'Building lasting resilience across an entire population' → resilience." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S1-S2",
        items: [
          { s1: "If the vaccination campaign hadn't happened, the outbreak would have spread much further.", key: "BEEN", s2: "Had it not ___ for the vaccination campaign, the outbreak would have spread much further.", accepted: ["been"], explanation: "Had it not been for (S1)." },
          { s1: "Policymakers only understood the crisis fully once admissions began climbing.", key: "DID", s2: "Only when admissions began climbing ___ policymakers fully understand the crisis.", accepted: ["did"], explanation: "Only when + inversión con did (S2)." },
          { s1: "If the policy fails, a full review will follow.", key: "SHOULD", s2: "___ the policy fail, a full review will follow.", accepted: ["should"], explanation: "Should + inversión condicional (S1)." },
          { s1: "Public health is no longer treated as unimportant.", key: "GONE", s2: "___ are the days when public health was treated as unimportant.", accepted: ["gone"], explanation: "Fronting: Gone are the days when (S2)." },
          { s1: "The new policy's only real effect was to shift resources towards prevention.", key: "DID", s2: "All the new policy ___ was shift resources towards prevention.", accepted: ["did"], explanation: "Pseudo-cleft avanzado: All… did was (S2)." },
        ],
      },
      p5: {
        title: "The doctor who refused to look away",
        text: "Dr. Amara Osei had spent nearly two decades working within an increasingly underfunded rural health system, watching resources dwindle year after year while patient need, if anything, steadily grew. Had it not been for her own stubborn refusal to simply relocate to a better-resourced urban hospital, as several colleagues eventually had, the small regional clinic she directed would very likely have closed entirely within her first five years there.\n\n\"Only when I actually started keeping detailed records of preventable deaths,\" she reflected candidly in a recent interview, \"did I fully understand quite how systemic the underlying problem genuinely was. It wasn't simply a matter of insufficient funding, though that mattered considerably too — it was a much deeper, more troubling pattern of institutional neglect.\"\n\nGone, she insists firmly, are the days when she believed quiet persistence alone would eventually be sufficient. Her subsequent public advocacy work, considerably more visible and confrontational than her earlier, more cautious approach, has since attracted both genuine praise and, notably, some sharp institutional criticism from officials uncomfortable with her candour.\n\n\"All I really did, in the end,\" she noted with characteristic understatement, \"was refuse to stop asking uncomfortable questions that everyone else around me had apparently, quietly agreed to stop asking. Under no circumstances could I have simply looked away once I actually understood what continued silence was genuinely costing.\"\n\nHer clinic, now considerably better resourced following years of sustained public pressure she personally helped generate, has become something of a regional model, closely studied by health administrators from several neighbouring districts. Were she to retire tomorrow, she readily admits, her greatest remaining worry would not be her own legacy, but whether her successors would maintain the same uncomfortable, persistent honesty that had ultimately made the clinic's slow recovery possible in the first place.",
        q: [
          mc("What did Dr. Osei refuse to do?", ["Accept better funding.", "Simply relocate to a better-resourced urban hospital.", "Keep records of deaths.", "Retire early."], 1, "'Had it not been for her own stubborn refusal to simply relocate to a better-resourced urban hospital'."),
          mc("What did she fully understand only once she kept detailed records?", ["That funding was the only problem.", "How systemic the underlying institutional neglect genuinely was.", "That her clinic should close.", "That colleagues were wrong to relocate."], 1, "'Only when I actually started keeping detailed records… did I fully understand quite how systemic the underlying problem genuinely was'."),
          mc("How does she describe her earlier approach compared to her current one?", ["Identical in every way.", "Earlier quieter and more cautious; now more visible and confrontational.", "Earlier more confrontational; now quieter.", "She has never changed her approach."], 1, "'considerably more visible and confrontational than her earlier, more cautious approach'."),
          mc("What does she say 'all she really did' amount to?", ["Nothing significant.", "Refusing to stop asking uncomfortable questions others had stopped asking.", "Securing new funding single-handedly.", "Training new doctors."], 1, "'All I really did, in the end… was refuse to stop asking uncomfortable questions'."),
          mc("What has her clinic become?", ["A failed project.", "A regional model studied by neighbouring districts.", "A private hospital.", "An abandoned building."], 1, "'has become something of a regional model, closely studied by health administrators from several neighbouring districts'."),
          mc("What would worry her most if she retired tomorrow?", ["Her own legacy.", "Whether successors would maintain the same persistent honesty.", "Losing her salary.", "Nothing in particular."], 1, "'her greatest remaining worry would not be her own legacy, but whether her successors would maintain the same… persistent honesty'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Public health systems, by their very nature, tend to remain largely invisible when functioning well, attracting genuine attention primarily during crisis rather than during the quiet, unglamorous work of prevention. (1)___\n\nThis invisibility creates a persistent, genuinely difficult funding problem: politicians rarely win praise, still less re-election, for a crisis that their own careful preventive investment successfully, quietly averted. (2)___ Visible treatment, by contrast, offers considerably more immediate, tangible political reward.\n\nSome public health advocates have consequently begun reframing prevention explicitly in economic terms, emphasising the very real costs, in both lives and money, of chronic underinvestment. (3)___ This reframing has achieved some genuine, measurable success in certain jurisdictions.\n\nOthers argue this economic framing, whatever its short-term tactical usefulness, ultimately concedes too much ground, implicitly treating public health as merely another line item to be justified rather than as a fundamental, non-negotiable public good. (4)___ Both camps, notwithstanding their genuine tactical disagreement, share the same underlying, urgent goal.\n\nWhat both approaches ultimately require, whatever their particular framing, is considerably more sustained, long-term political attention than crisis-driven funding cycles have traditionally, reliably provided. (5)___ Crisis funding arrives suddenly and departs just as suddenly, long before underlying structural problems are genuinely, durably resolved.\n\nBuilding a genuinely resilient public health system, most experts increasingly agree, requires precisely the kind of unglamorous, sustained investment that rarely makes headlines and rarely wins elections. (6)___ That, ultimately, may be the hardest political problem prevention has ever had to solve.",
        options: [
          "Prevention, put simply, rarely announces its own quiet success.", // A -> gap1
          "Averted disaster, after all, leaves behind no visible evidence.", // B -> gap2
          "Framed this way, prevention starts to look like sound investment.", // C -> gap3
          "Something essential, they warn, risks being lost in translation.", // D -> gap4
          "Sustained attention, unlike crisis funding, rarely arrives on its own.", // E -> gap5
          "Unglamorous work, however necessary, wins few political admirers.", // F -> gap6
          "No public health system has ever faced a genuine funding shortfall.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la prevención rara vez anuncia su propio éxito silencioso."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el desastre evitado no deja pruebas visibles."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: enmarcada así, la prevención parece una inversión sólida."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algo esencial se pierde en esa traducción, advierten."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la atención sostenida rara vez llega por sí sola."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el trabajo poco vistoso gana pocos admiradores políticos."),
        ],
      },
      p7: {
        title: "Four people discuss public health systems",
        text: "Read what four people say about public health and wellbeing in their own communities.\n\nA) OMAR: Had it not been for a small underfunded clinic near my home, my grandmother's chronic illness would have gone undiagnosed for years, honestly.\n\nB) LEA: Only when the pandemic hit did our local government finally invest properly in public health infrastructure, sadly rather late.\n\nC) YUSUF: Gone are the days when mental health stigma went completely unchallenged in my community — attitudes have genuinely shifted.\n\nD) MAYA: Under no circumstances would I say our system is adequately resourced yet, though it has certainly improved somewhat recently.\n",
        q: [
          mc("Whose grandmother's illness would have gone undiagnosed without a local clinic?", ["A", "B", "C", "D"], 0, "Omar: 'my grandmother's chronic illness would have gone undiagnosed for years'."),
          mc("Whose local government only invested properly once the pandemic hit?", ["A", "B", "C", "D"], 1, "Lea: 'Only when the pandemic hit did our local government finally invest properly'."),
          mc("Who says mental health stigma has genuinely shifted in their community?", ["A", "B", "C", "D"], 2, "Yusuf: 'Gone are the days when mental health stigma went completely unchallenged'."),
          mc("Who refuses to say the system is adequately resourced yet?", ["A", "B", "C", "D"], 3, "Maya: 'Under no circumstances would I say our system is adequately resourced yet'."),
          mc("Who mentions a small underfunded clinic near their home?", ["A", "B", "C", "D"], 0, "Omar: 'a small underfunded clinic near my home'."),
          mc("Who admits the investment came rather late?", ["A", "B", "C", "D"], 1, "Lea: 'sadly rather late'."),
          mc("Who says attitudes have genuinely shifted?", ["A", "B", "C", "D"], 2, "Yusuf: 'attitudes have genuinely shifted'."),
          mc("Who acknowledges the system has certainly improved somewhat recently?", ["A", "B", "C", "D"], 3, "Maya: 'though it has certainly improved somewhat recently'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la financiación de la salud pública y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Public health should be funded generously at all times, not only during visible crises — prevention saves far more lives and money than crisis response ever can.'\n\nTEXTO 2: 'Governments have limited budgets and must prioritise visible, urgent needs. Asking politicians to fund invisible future crises over immediate present ones is simply unrealistic.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura condicional formal y UNA estructura de inversión. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What my community's health system taught me about resilience' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a una autoridad sanitaria proponiendo una mejora concreta en la atención preventiva local.\n· REPORT sobre el estado de la salud pública en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two doctors discussing funding. Woman: Had it not been for that small grant, our clinic would have closed entirely last year. Man: Only when the numbers got truly dire did the board finally act, sadly. Extract Two. You hear two public health officials. Man: Gone are the days when prevention was treated as an afterthought here, thankfully. Woman: Under no circumstances would I call our system fully resourced yet, though. Extract Three. You hear two community workers. Woman: All our new outreach programme really did was reach people the old system had quietly missed. Man: Were funding to be cut again, we'd genuinely struggle to maintain even that.", [
      mc("1. What saved the clinic, according to the woman?", ["A new director.", "A small grant.", "Government reform.", "Volunteer staff."], 1, "'Had it not been for that small grant, our clinic would have closed entirely'."),
      mc("2. When did the board finally act?", ["Immediately.", "Only when the numbers got truly dire.", "Before any crisis.", "They never acted."], 1, "'Only when the numbers got truly dire did the board finally act'."),
      mc("3. What does the man say has changed regarding prevention?", ["Nothing has changed.", "It is no longer treated as an afterthought.", "It has become less important.", "It was never a priority."], 1, "'Gone are the days when prevention was treated as an afterthought'."),
      mc("4. How does the woman describe current resourcing?", ["Fully adequate.", "Not fully resourced yet.", "Perfectly funded.", "Irrelevant to discuss."], 1, "'Under no circumstances would I call our system fully resourced yet'."),
      mc("5. What did the new outreach programme achieve, according to the woman?", ["Nothing measurable.", "Reaching people the old system had missed.", "Replacing all previous programmes.", "Reducing funding needs entirely."], 1, "'All our new outreach programme really did was reach people the old system had quietly missed'."),
      mc("6. What does the man worry about?", ["Losing staff.", "Funding being cut again.", "Too much funding.", "Programme popularity."], 1, "'Were funding to be cut again, we'd genuinely struggle'."),
    ]),

    ...speakingParts({ p1: "qué papel juega la salud pública en tu comunidad", p2: "dos imágenes de la salud pública (una campaña de vacunación comunitaria y una consulta médica individual): comentadlas y decidid cuál representa mejor la prevención eficaz", p3: "qué es más importante para un sistema de salud pública sólido (la financiación estable, la confianza pública, la prevención frente al tratamiento, la equidad de acceso, la transparencia institucional): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 31", [
      "Practicados de forma combinada: condicionales mixtos formales/inversión condicional (S1) e inversión rara/fronting/pseudo-cleft (S2).",
      "Vocabulario de la salud pública y el bienestar. Reading & Use of English, Writing, Listening P1 y Speaking completos.",
      "Mañana: repaso combinado de las Semanas 3 y 4.",
    ]),
    INFO("Tarea para el Día 32", "Repasa los conectores de las Semanas 1-2 y el vocabulario de hoy. Mañana combinamos la elipsis/cláusulas nominales (S3) con los verbos de reporte/discurso indirecto libre (S4)."),
  ],
};

// ───────────────────────── DÍA 32 ─────────────────────────
const DAY32 = {
  title: "Día 32 — Repaso integral: elipsis, cláusulas nominales y discurso reportado (Semanas 3-4) · La tecnología y la privacidad",
  description: "Repaso combinado: elipsis comparativa/gapping y cláusulas nominales con extraposición (S3); verbos de reporte de matiz fino y discurso indirecto libre (S4). Vocabulario de tecnología y privacidad. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Combinar con fluidez la elipsis/extraposición (S3) con el discurso reportado de matiz fino (S4).",
    summary: "Repaso combinado S3-S4; tecnología y privacidad; Use of English P1-P7, Writing, Listening P2, Speaking P1-P3.",
    commonMistakes: ["omitir el auxiliar invertido tras 'as' (as does/did/has).", "usar 'said' en vez de un verbo de matiz fino (conceded, contended, speculated).", "perder los tiempos retrocedidos en el discurso indirecto libre."],
    reviewPrompts: ["¿Cómo continuarías 'She trusted the algorithm more than her colleagues did, as...'?", "¿Qué matiz añade 'concede' frente a 'say'?"],
  },
  items: [
    TEXT("🎯 Hoy combinamos la ELIPSIS COMPARATIVA/CLÁUSULAS NOMINALES (S3) con los VERBOS DE REPORTE DE MATIZ FINO/DISCURSO INDIRECTO LIBRE (S4) en los mismos textos. Vocabulario: la TECNOLOGÍA y la PRIVACIDAD."),
    GRAMMAR("Repaso combinado — Semanas 3 y 4", `SEMANA 3 — Elipsis y cláusulas nominales:
· Elipsis comparativa/gapping: X relied on data more than Y (did).
· Extraposición: It is widely held that.../ It remains unclear whether...
· Sustitución con 'as' + auxiliar invertido: as does/did/has + sujeto.
SEMANA 4 — Verbos de reporte y discurso indirecto libre:
· Verbos de matiz fino: concede, contend, retort, posit, speculate, maintain, protest, muse.
· Discurso indirecto libre: sin 'that' ni comillas, tiempos retrocedidos, preservando el tono original.
· Modalidad reportada: claimed it might/would... · as though/as if reportado.`),
    grammarEx("Use of English — Repaso combinado S3-S4", "Completa o elige, combinando ambas semanas.", [
      mc("The company relied on user data more than its competitors ___.", ["did", "do", "were doing"], 0, "elipsis comparativa: more than… did (S3)."),
      fb("It remains widely ___ that algorithmic bias affects hiring decisions. (extraposición)", ["held", "believed", "acknowledged"], "It is widely held that (S3)."),
      mc("The engineer ___ that the breach had been entirely preventable.", ["conceded", "said", "told"], 0, "verbo de matiz fino: conceded (S4)."),
      fb("The CEO's data was flawed, ___ was later widely acknowledged. (as+auxiliar)", ["as"], "as + cláusula (S3)."),
      mc("She stared at the screen. Would anyone ever truly trust this system again?", ["free indirect", "reported", "direct"], 0, "discurso indirecto libre (S4) — pregunta retórica sin verbo de reporte."),
      mc("The regulator ___ that further legislation might soon become necessary.", ["speculated", "said", "told"], 0, "verbo de matiz fino: speculated (S4)."),
      fb("So too ___ (rise) concerns about algorithmic transparency. (as+auxiliar invertido)", ["did", "have"], "as did/have concerns (S3)."),
    ]),
    GRAMMAR("Vocabulario del día — La tecnología y la privacidad (C2)", "Léxico de maestría sobre tecnología y privacidad."),
    deck("C2 S7D32 — Tecnología y privacidad", [
      ["surveillance", "vigilancia", "Mass surveillance raises profound questions about civil liberties.", "sustantivo", "sɜːˈveɪləns"],
      ["encryption", "cifrado", "Strong encryption protects sensitive communications from interception.", "sustantivo", "ɪnˈkrɪpʃn"],
      ["data breach", "filtración de datos", "The data breach exposed millions of users' private information.", "sustantivo", "ˈdeɪtə briːtʃ"],
      ["anonymity", "anonimato", "Online anonymity can enable both free speech and genuine harm.", "sustantivo", "ˌænəˈnɪməti"],
      ["algorithmic bias", "sesgo algorítmico", "Algorithmic bias can quietly perpetuate existing social inequalities.", "sustantivo", "ˌælɡəˈrɪðmɪk ˈbaɪəs"],
      ["informed consent", "consentimiento informado", "Genuine informed consent requires clear, accessible privacy policies.", "sustantivo", "ɪnˈfɔːmd kənˈsent"],
      ["traceability", "trazabilidad", "Traceability of personal data remains a genuine technical challenge.", "sustantivo", "ˌtreɪsəˈbɪləti"],
      ["obsolescence", "obsolescencia", "Planned obsolescence troubles many sustainability-minded consumers today.", "sustantivo", "ˌɒbsəˈlesəns"],
      ["intrusive", "intrusivo/a", "Many users find targeted advertising genuinely intrusive and unsettling.", "adjetivo", "ɪnˈtruːsɪv"],
      ["safeguard", "proteger, salvaguardar", "Regulators are working to safeguard user privacy more effectively.", "verbo", "ˈseɪfɡɑːd"],
    ]),
    vocabEx("Vocabulario — La tecnología y la privacidad", "Elige la opción correcta.", [
      mc("Systematic monitoring of people's activities, often covertly:", ["surveillance", "encryption", "obsolescence"], 0, "surveillance."),
      mc("Converting data into a coded form to prevent unauthorised access:", ["encryption", "traceability", "anonymity"], 0, "encryption."),
      mc("An incident where private data is accessed without authorisation:", ["data breach", "informed consent", "safeguard"], 0, "data breach."),
      mc("Unfair, systematic distortion built into an automated decision-making system:", ["algorithmic bias", "traceability", "obsolescence"], 0, "algorithmic bias."),
      mc("Permission given with full understanding of the consequences:", ["informed consent", "anonymity", "intrusive"], 0, "informed consent."),
      mc("Unwanted, uncomfortably invasive in nature:", ["intrusive", "anonymous", "traceable"], 0, "intrusive."),
    ]),

    ...uoe({
      p1: {
        title: "The company that knew too much",
        text: "The technology firm had, for years, relied on granular user data considerably more heavily than most of its publicly listed competitors (1)___, quietly building one of the most detailed behavioural profiles of its users anywhere in the industry. It is widely (2)___ within the sector that such extensive data collection, however commercially valuable, carries proportionally greater ethical and legal risk. When investigators eventually uncovered the true scale of the company's practices, one senior engineer reportedly (3)___ that the whole system had, in hindsight, been troublingly excessive from the very beginning. So too (4)___ concerns from regulators, who had grown increasingly uneasy about the company's opaque data practices over the preceding years. The engineer's admission, whatever its genuine sincerity, arrived (5)___ too late to prevent the considerable reputational damage that inevitably followed. It remains genuinely unclear (6)___ meaningful reform will follow, or whether the underlying commercial incentives will simply, quietly reassert themselves once public attention has predictably moved elsewhere.",
        q: [
          mc("(1)", ["did", "do", "had"], 0, "'more heavily than… competitors did' — elipsis comparativa."),
          mc("(2)", ["held", "known", "seen"], 0, "'It is widely held that'."),
          mc("(3)", ["conceded", "told", "said"], 0, "verbo de matiz fino: conceded."),
          mc("(4)", ["did", "have", "were"], 0, "'So too did concerns from regulators' — as/so + auxiliar invertido."),
          mc("(5)", ["considerably", "far", "much"], 0, "'arrived considerably too late'."),
          mc("(6)", ["whether", "that", "if"], 0, "'remains genuinely unclear whether' — extraposición."),
        ],
      },
      p2: {
        title: "The regulator's dilemma",
        text: "It remains widely (1)___ among policymakers that current privacy legislation has simply failed to keep pace with rapidly evolving surveillance technology. The regulator privately (2)___ that entirely new legal frameworks might soon become genuinely unavoidable, rather than merely incremental amendments to existing, already outdated law. Industry lobbyists, for their part, have consistently (3)___ that excessive regulation would stifle beneficial innovation considerably more than it would meaningfully protect ordinary users. Neither side has proven fully persuasive to the other, and (4)___ has genuine consensus emerged on where, precisely, reasonable limits ought realistically to be drawn. She sat alone reviewing the latest submission, deeply unconvinced. Could either side, she wondered, truly claim the moral high ground here? The regulator eventually (5)___, in a rare moment of public candour, that perfect solutions were unlikely to exist, and that any workable framework would inevitably involve uncomfortable, genuine trade-offs. As (6)___ so often the case in fast-moving technology policy, imperfect but timely action was judged preferable to further, indefinite delay.",
        q: [
          fb("(1)", ["held", "acknowledged", "believed"], "'It remains widely held/acknowledged/believed among policymakers'."),
          fb("(2)", ["speculated", "mused"], "'privately speculated/mused that'."),
          fb("(3)", ["contended", "maintained", "argued"], "'have consistently contended/maintained/argued that'."),
          fb("(4)", ["nowhere", "rarely"], "'nowhere has genuine consensus emerged' — inversión tras negativo."),
          fb("(5)", ["conceded", "admitted"], "'eventually conceded/admitted, in a rare moment of… candour'."),
          fb("(6)", ["is"], "'As is so often the case' — as + inversión de 'is'."),
        ],
      },
      p3: {
        title: "The ethics of algorithmic decision-making",
        text: "Growing public (1)___ about algorithmic bias has prompted several major technology companies to commission independent audits of their own automated decision-making systems. Early findings have proven considerably more (2)___ than many industry insiders had initially, perhaps optimistically anticipated, revealing patterns of unintended discrimination embedded deep within systems previously assumed genuinely neutral. Some engineers have (3)___ argued that entirely removing human bias from automated systems trained on inherently biased historical data may prove practically impossible without fundamental, considerably more (4)___ redesign. Others maintain that meaningful (5)___, though undeniably difficult, remains genuinely achievable through careful, deliberate technical intervention and sustained institutional oversight. This ongoing (6)___ reflects a broader, unresolved tension between technological optimism and hard-won institutional caution — one unlikely to be fully resolved anytime particularly soon.",
        items: [
          { root: "concern", accepted: ["concern"], hint: "'Growing public concern about algorithmic bias' (sustantivo)." },
          { root: "trouble", accepted: ["troubling"], hint: "'considerably more troubling than… anticipated' (adjetivo)." },
          { root: "public", accepted: ["publicly"], hint: "'Some engineers have publicly argued' (adverbio)." },
          { root: "extend", accepted: ["extensive"], hint: "'considerably more extensive redesign' (adjetivo)." },
          { root: "improve", accepted: ["improvement"], hint: "'meaningful improvement… remains genuinely achievable' (sustantivo)." },
          { root: "debate", accepted: ["debate"], hint: "'This ongoing debate reflects a broader… tension' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S3-S4",
        items: [
          { s1: "The company depended on user data more heavily than its rivals did.", key: "DID", s2: "The company relied on user data more heavily than its rivals ___.", accepted: ["did"], explanation: "elipsis comparativa: more than… did (S3)." },
          { s1: "Many experts commonly believe that regulation has failed to keep pace.", key: "HELD", s2: "It is widely ___ that regulation has failed to keep pace.", accepted: ["held"], explanation: "It is widely held that (S3)." },
          { s1: "The engineer admitted that the system had been excessive from the start.", key: "CONCEDED", s2: "The engineer ___ that the system had been excessive from the start.", accepted: ["conceded"], explanation: "verbo de matiz fino: conceded (S4)." },
          { s1: "Regulators' concerns grew too, just as the company's problems did.", key: "SO", s2: "___ too did concerns from regulators grow.", accepted: ["so"], explanation: "So + auxiliar invertido (S3)." },
          { s1: "The regulator guessed privately that new frameworks might be needed.", key: "SPECULATED", s2: "The regulator privately ___ that new frameworks might be needed.", accepted: ["speculated"], explanation: "verbo de matiz fino: speculated (S4)." },
        ],
      },
      p5: {
        title: "The audit that changed everything",
        text: "When the independent auditors first arrived at the technology company's headquarters, few employees expected their findings to prove particularly dramatic. The firm had, after all, relied on its own internal data governance far more confidently than most comparable competitors did, and executives had grown accustomed to quietly reassuring regulators that existing safeguards remained genuinely adequate.\n\nIt remained widely held, at least internally, that the company's automated hiring system operated with reasonable fairness across different demographic groups. The auditors' eventual report, however, told a rather different, considerably more troubling story.\n\nOne senior data scientist, reviewing the preliminary findings late one evening, sat in stunned silence. Could the numbers really be this stark? Surely there had been some error in the underlying methodology?\n\nThere had been no error. The system, it turned out, had been quietly favouring certain candidate profiles for years, a pattern nobody had apparently noticed, or perhaps nobody had particularly wanted to notice. The company's chief technology officer, when finally confronted directly with the auditors' complete findings, conceded — with visible, genuine discomfort — that the system had clearly failed in ways nobody had adequately anticipated or prepared for.\n\n\"It is one thing to speculate abstractly about algorithmic bias,\" she later admitted publicly, in a candid statement that surprised many industry observers, \"and quite another to confront concrete, undeniable evidence of real, ongoing harm within your own systems.\"\n\nSo too did the company's public reputation suffer considerably in the difficult months that followed, as details of the audit gradually became public knowledge through investigative journalism. Yet the episode, painful as it undeniably was for those involved, ultimately prompted a broader industry reckoning. Several competitors, watching closely from the sidelines, quietly commissioned similar independent audits of their own systems, apparently unwilling to be caught quite so unprepared themselves.",
        q: [
          mc("What did the company rely on more confidently than competitors?", ["External audits.", "Its own internal data governance.", "Government regulation.", "Customer feedback."], 1, "'The firm had… relied on its own internal data governance far more confidently than most comparable competitors did'."),
          mc("What did the auditors' report reveal?", ["Everything was fine.", "A troubling pattern of hiring bias nobody had adequately noticed.", "The company needed more funding.", "Competitors were worse."], 1, "'The auditors' eventual report… told a rather different, considerably more troubling story'."),
          mc("What did the data scientist wonder, reviewing the findings?", ["Whether to resign.", "Whether the numbers could really be this stark, or whether there was a methodology error.", "Whether to leak the report.", "Whether to ignore it."], 1, "'Could the numbers really be this stark? Surely there had been some error'."),
          mc("What did the CTO eventually concede?", ["Nothing was wrong.", "The system had clearly failed in unanticipated ways.", "The audit was flawed.", "Competitors were to blame."], 1, "'conceded — with visible, genuine discomfort — that the system had clearly failed'."),
          mc("What happened to the company's reputation?", ["It improved.", "It suffered considerably as details became public.", "It was unaffected.", "It improved after a delay."], 1, "'So too did the company's public reputation suffer considerably in the difficult months that followed'."),
          mc("What did several competitors do as a result?", ["Nothing at all.", "Quietly commissioned similar independent audits of their own systems.", "Publicly criticised the company only.", "Reduced their own data collection to zero."], 1, "'several competitors… quietly commissioned similar independent audits of their own systems'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Privacy, in the digital age, has become a genuinely contested concept, meaning rather different things to different stakeholders depending on their particular position and interest. (1)___\n\nFor ordinary users, privacy typically means straightforward control over who can access their personal information and for what specific purpose. (2)___ For technology companies, by contrast, that same data often represents a core commercial asset central to their entire business model.\n\nThis fundamental tension has produced an uneasy, ongoing negotiation between user expectation and commercial incentive, mediated imperfectly by regulation that frequently struggles to keep pace with rapid technological change. (3)___ Laws written years ago often address technologies that have since evolved considerably, or vanished entirely.\n\nSome technologists argue that better, more transparent design — genuinely clear consent mechanisms, meaningful user control — could resolve much of this tension without requiring heavy-handed regulatory intervention. (4)___ Sceptics, however, note that companies have little genuine commercial incentive to design such transparency voluntarily.\n\nRegulation, these sceptics contend, remains genuinely necessary precisely because voluntary industry self-restraint has repeatedly, demonstrably proven insufficient on its own. (5)___ Left entirely to their own devices, companies have consistently prioritised growth over restraint.\n\nWhat emerges from this ongoing tension, whichever side eventually prevails in any given jurisdiction, is likely to shape digital life for decades to come. (6)___ The stakes, in other words, extend considerably further than any single company or single scandal alone.",
        options: [
          "Different vantage points, it turns out, yield genuinely different definitions.", // A -> gap1
          "That data, quite simply, generates real and substantial revenue.", // B -> gap2
          "The law, in this particular race, rarely finishes first.", // C -> gap3
          "Better design, on this view, could do much of regulation's work.", // D -> gap4
          "Self-restraint alone, the record rather clearly shows, was never enough.", // E -> gap5
          "This particular settlement will outlast any single headline.", // F -> gap6
          "No genuine tension has ever existed between users and companies.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: puntos de vista distintos producen definiciones distintas."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esos datos generan ingresos reales y sustanciales."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la ley rara vez llega primero en esa carrera."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: un mejor diseño podría hacer parte del trabajo de la regulación."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la autorregulación sola nunca fue suficiente, según los datos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: este equilibrio durará más que cualquier titular."),
        ],
      },
      p7: {
        title: "Four people discuss technology and privacy",
        text: "Read what four people say about technology and privacy in their own lives.\n\nA) DANA: It is widely held in my workplace that we should encrypt everything by default now, and honestly, I agree completely.\n\nB) FELIX: My data was part of a breach last year, and so too, apparently, was almost everyone else's in the whole company.\n\nC) INES: I conceded to my teenager that total online anonymity probably isn't realistic anymore, however much we might both wish otherwise.\n\nD) RYAN: It remains genuinely unclear to me whether algorithmic bias in hiring tools can ever be fully eliminated, honestly speaking.\n",
        q: [
          mc("Who agrees that everything should be encrypted by default?", ["A", "B", "C", "D"], 0, "Dana: 'we should encrypt everything by default now, and honestly, I agree completely'."),
          mc("Whose data was part of a breach affecting almost everyone in the company?", ["A", "B", "C", "D"], 1, "Felix: 'My data was part of a breach last year, and so too… was almost everyone else's'."),
          mc("Who conceded that total online anonymity isn't realistic anymore?", ["A", "B", "C", "D"], 2, "Ines: 'I conceded to my teenager that total online anonymity probably isn't realistic anymore'."),
          mc("Who remains unsure whether algorithmic bias can ever be fully eliminated?", ["A", "B", "C", "D"], 3, "Ryan: 'It remains genuinely unclear to me whether algorithmic bias… can ever be fully eliminated'."),
          mc("Who mentions their workplace's stance on encryption?", ["A", "B", "C", "D"], 0, "Dana: 'It is widely held in my workplace that we should encrypt everything'."),
          mc("Who says the breach affected the whole company?", ["A", "B", "C", "D"], 1, "Felix: 'so too… was almost everyone else's in the whole company'."),
          mc("Who mentions a conversation with a teenager?", ["A", "B", "C", "D"], 2, "Ines: 'I conceded to my teenager that total online anonymity'."),
          mc("Who speaks 'honestly speaking' about their uncertainty?", ["A", "B", "C", "D"], 3, "Ryan: 'can ever be fully eliminated, honestly speaking'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la vigilancia tecnológica y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Companies must be free to collect and use data to build better products. Excessive regulation stifles innovation and ultimately harms consumers more than it protects them.'\n\nTEXTO 2: 'Without robust regulation, companies will always prioritise profit over user privacy. Self-regulation has repeatedly failed — meaningful protection requires binding legal limits.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UNA estructura de elipsis/sustitución y UN verbo de reporte de matiz fino. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'How much privacy are we really willing to trade for convenience?' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una empresa tecnológica expresando preocupación por sus prácticas de datos.\n· REVIEW de una aplicación o servicio digital, evaluando específicamente sus políticas de privacidad.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha el monólogo (se oye dos veces) y completa los huecos con 1-3 palabras.", "This is Part Two. You will hear a technology journalist giving a talk about privacy and data. It remains widely held among my colleagues that privacy has become the defining issue of our technological era. When I began investigating the major breach two years ago, I quickly discovered that the company had relied on outdated encryption far more heavily than its competitors did. The lead engineer eventually conceded, in a private interview, that the system had been vulnerable for years. So too did internal warnings go unheeded, according to documents I later obtained. It is genuinely unclear whether meaningful reform will follow such scandals, or whether public attention will simply move on, as it so often does. What struck me most, researching this story, was how little most users actually understood about where their data travelled once collected. Companies, I concluded, must be held to considerably higher standards of transparency than has historically been the case. Readers frequently ask me what they personally can do; my honest answer is that individual action, however well-intentioned, cannot substitute for genuine systemic and regulatory reform.", [
      fb("1. It remains widely held that privacy has become the defining ___ of our technological era.", ["issue"], "'the defining issue of our technological era'."),
      fb("2. The company had relied on outdated ___ far more heavily than its competitors.", ["encryption"], "'relied on outdated encryption far more heavily'."),
      fb("3. The lead engineer conceded that the system had been ___ for years.", ["vulnerable"], "'the system had been vulnerable for years'."),
      fb("4. So too did internal ___ go unheeded, according to documents obtained.", ["warnings"], "'internal warnings go unheeded'."),
      fb("5. It is genuinely unclear whether meaningful ___ will follow such scandals.", ["reform"], "'whether meaningful reform will follow'."),
      fb("6. Public attention may simply ___ on, as it so often does.", ["move"], "'public attention will simply move on'."),
      fb("7. What struck the journalist most was how little users understood about where their data ___.", ["travelled"], "'where their data travelled once collected'."),
      fb("8. Companies must be held to considerably higher standards of ___.", ["transparency"], "'considerably higher standards of transparency'."),
      fb("9. Individual action cannot substitute for genuine systemic and ___ reform.", ["regulatory"], "'systemic and regulatory reform'."),
    ]),

    ...speakingParts({ p1: "cómo gestionas tu privacidad digital en el día a día", p2: "dos imágenes de la tecnología y la privacidad (una cámara de vigilancia en una calle concurrida y una persona configurando ajustes de privacidad en su teléfono): comentadlas y decidid cuál representa mejor el equilibrio actual entre seguridad y privacidad", p3: "qué es más importante para proteger la privacidad digital (la regulación gubernamental estricta, la autorregulación de las empresas, la educación del usuario, el diseño técnico por defecto, la transparencia radical): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 32", [
      "Practicados de forma combinada: elipsis comparativa/cláusulas nominales con extraposición (S3) y verbos de reporte de matiz fino/discurso indirecto libre (S4).",
      "Vocabulario de la tecnología y la privacidad. Reading & Use of English, Writing, Listening P2 y Speaking completos.",
      "Mañana: repaso combinado de las Semanas 5 y 6.",
    ]),
    INFO("Tarea para el Día 33", "Repasa la elipsis, las cláusulas nominales y los verbos de reporte. Mañana combinamos los conectores institucionales/legales (S5) con los idioms/proverbios/falsos amigos (S6)."),
  ],
};

// ───────────────────────── DÍA 33 ─────────────────────────
const DAY33 = {
  title: "Día 33 — Repaso integral: conectores institucionales e idioms (Semanas 5-6) · El trabajo y la vocación profesional",
  description: "Repaso combinado: conectores institucionales/legales (S5); idioms de nivel C2, proverbios con función retórica y falsos amigos (S6). Vocabulario del trabajo y la vocación profesional. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Combinar con fluidez los conectores muy formales (S5) con los idioms/proverbios/falsos amigos (S6).",
    summary: "Repaso combinado S5-S6; el trabajo y la vocación; Use of English P1-P7, Writing, Listening P3, Speaking P1-P3.",
    commonMistakes: ["usar 'notwithstanding' antes del sustantivo en vez de después, o viceversa según el registro.", "forzar un idiom donde un conector institucional sería más natural (o viceversa).", "confundir 'actual' con 'current' bajo presión de tiempo."],
    reviewPrompts: ["¿Recuerdas la diferencia entre 'insofar as' y 'to the extent that'?", "¿Qué falso amigo sueles confundir todavía?"],
  },
  items: [
    TEXT("🎯 Hoy combinamos los CONECTORES INSTITUCIONALES/LEGALES (S5) con los IDIOMS/PROVERBIOS/FALSOS AMIGOS de nivel C2 (S6) en los mismos textos. Vocabulario: el TRABAJO y la VOCACIÓN PROFESIONAL."),
    GRAMMAR("Repaso combinado — Semanas 5 y 6", `SEMANA 5 — Conectores institucionales/legales:
notwithstanding, insofar as, by the same token, whereby, with respect to, to the extent that, in light of.
SEMANA 6 — Idioms, proverbios y falsos amigos:
· Idioms: throw down the gauntlet, a Pyrrhic victory, move the goalposts, a flash in the pan, hoist with one's own petard, read the writing on the wall.
· Proverbios con función retórica: apertura memorable, síntesis final, contraste irónico.
· Falsos amigos: sensible/sensitive, actual/current, economic/economical, historic/historical, to attend/to assist.`),
    grammarEx("Use of English — Repaso combinado S5-S6", "Completa o elige, combinando ambas semanas.", [
      mc("Notwithstanding the setback, she had, in effect, thrown down the ___ to her rivals.", ["gauntlet", "towel", "glove"], 0, "throw down the gauntlet (S6) + notwithstanding (S5)."),
      mc("Insofar as career satisfaction can be measured, ___ figures suggest it is declining.", ["actual", "current"], 1, "current: presente (S6) + insofar as (S5)."),
      mc("By the same token that persistence matters, so ___ knowing when to stop.", ["does", "do", "is"], 0, "by the same token (S5) + auxiliar invertido."),
      mc("Her early success proved a ___ victory, costing more than it gained long-term.", ["Pyrrhic", "flash in the pan", "double-edged"], 0, "a Pyrrhic victory (S6)."),
      mc("With respect to promotion criteria, the company has repeatedly moved the ___.", ["goalposts", "target", "bar"], 0, "move the goalposts (S6) + with respect to (S5)."),
      mc("This is a genuinely ___ topic among staff — handle it with real care.", ["sensitive", "sensible"], 0, "sensitive (S6)."),
      mc("In light of declining morale, management had read the ___ on the wall.", ["writing", "signs", "situation"], 0, "read the writing on the wall (S6) + in light of (S5)."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo y la vocación profesional (C2)", "Léxico de maestría sobre el trabajo y la vocación."),
    deck("C2 S7D33 — El trabajo y la vocación profesional", [
      ["vocation", "vocación", "She always felt teaching was her genuine vocation, not merely a job.", "sustantivo", "vəʊˈkeɪʃn"],
      ["burnout", "agotamiento laboral", "Chronic burnout has become alarmingly common across many professions.", "sustantivo", "ˈbɜːnaʊt"],
      ["meritocracy", "meritocracia", "Critics question whether the firm's meritocracy is genuinely fair.", "sustantivo", "ˌmerɪˈtɒkrəsi"],
      ["career trajectory", "trayectoria profesional", "Her career trajectory shifted dramatically after a single pivotal decision.", "sustantivo", "kəˈrɪə trəˈdʒektəri"],
      ["mentorship", "mentoría", "Strong mentorship early on shaped her entire professional outlook.", "sustantivo", "ˈmentɔːʃɪp"],
      ["disillusionment", "desilusión", "Growing disillusionment with corporate life led him to change careers.", "sustantivo", "ˌdɪsɪˈluːʒənmənt"],
      ["work ethic", "ética laboral", "Her formidable work ethic impressed colleagues from her very first week.", "sustantivo", "wɜːk ˈeθɪk"],
      ["underemployment", "subempleo", "Underemployment among graduates remains a persistent, underreported problem.", "sustantivo", "ˌʌndərɪmˈplɔɪmənt"],
      ["fulfilling", "gratificante, realizador/a", "She finally found genuinely fulfilling work after years of searching.", "adjetivo", "fʊlˈfɪlɪŋ"],
      ["precarious", "precario/a", "Many creative professions offer genuinely precarious, unpredictable income.", "adjetivo", "prɪˈkeəriəs"],
    ]),
    vocabEx("Vocabulario — El trabajo y la vocación profesional", "Elige la opción correcta.", [
      mc("A strong sense of calling towards a particular kind of work:", ["vocation", "burnout", "underemployment"], 0, "vocation."),
      mc("Exhaustion caused by prolonged, excessive work-related stress:", ["burnout", "meritocracy", "mentorship"], 0, "burnout."),
      mc("A system where advancement depends on ability and effort alone:", ["meritocracy", "vocation", "trajectory"], 0, "meritocracy."),
      mc("Guidance and support given by an experienced colleague to a junior one:", ["mentorship", "burnout", "disillusionment"], 0, "mentorship."),
      mc("Working fewer hours or below one's qualification level than desired:", ["underemployment", "meritocracy", "vocation"], 0, "underemployment."),
      mc("Lacking security or stability, liable to change suddenly:", ["precarious", "fulfilling", "meritocratic"], 0, "precarious."),
    ]),

    ...uoe({
      p1: {
        title: "Notwithstanding the odds",
        text: "Notwithstanding considerable early scepticism from colleagues, she had effectively thrown down the (1)___ to an entire industry that had long assumed junior staff lacked the standing to challenge established practice. Insofar as workplace meritocracy can genuinely be measured at all, the (2)___ data from her own department told a genuinely mixed, complicated story. With respect to promotion criteria specifically, management had, staff increasingly felt, quietly moved the (3)___ more than once in recent years, always just as junior employees seemed close to meeting the original bar. By the same token that persistence had once seemed clearly admirable, so (4)___ growing disillusionment among colleagues who had persisted for years without comparable reward. In light of mounting turnover figures, senior leadership eventually read the writing on the (5)___, launching a hastily reorganised mentorship programme. Whether this particular reform proves a genuine, lasting improvement or merely another (6)___ victory, costing more political capital than it ultimately delivers, remains to be seen.",
        q: [
          mc("(1)", ["gauntlet", "towel", "glove"], 0, "'thrown down the gauntlet to an entire industry'."),
          mc("(2)", ["actual", "current"], 0, "'the actual data… told a genuinely mixed story' — falso amigo: actual = real."),
          mc("(3)", ["goalposts", "target", "standard"], 0, "'quietly moved the goalposts more than once'."),
          mc("(4)", ["did", "has", "grew"], 0, "'so did growing disillusionment' — so + auxiliar invertido."),
          mc("(5)", ["wall", "floor", "ceiling"], 0, "'read the writing on the wall'."),
          mc("(6)", ["Pyrrhic", "flash in the pan", "double-edged"], 0, "'merely another Pyrrhic victory'."),
        ],
      },
      p2: {
        title: "What mentorship actually changed",
        text: "Insofar as any single intervention can genuinely be credited with reversing a department's declining morale, the newly formalised mentorship programme deserves (1)___ of that credit, several senior staff now readily concede. To the extent (2)___ junior employees had previously felt genuinely unsupported, structured mentorship addressed that specific gap more directly than any previous, more diffuse initiative had managed. Notwithstanding this genuine, measurable progress, some sceptics maintain the programme amounts to little more than a flash in the (3)___, unlikely to survive the inevitable budget cuts and inevitable changes in leadership priority. With respect (4)___ that particular concern, programme organisers point to deliberately built-in structural safeguards specifically intended to outlast any single champion or budget cycle. By the same token (5)___ genuine cultural change rarely happens overnight, they caution current enthusiasm against expecting immediate, dramatic transformation. What matters considerably more than any single programme, they consistently argue, is whether the underlying institutional culture genuinely shifts, or whether early enthusiasm simply fades (6)___ so many well-intentioned workplace initiatives eventually, quietly do.",
        q: [
          fb("(1)", ["much"], "'deserves much of that credit'."),
          fb("(2)", ["that"], "'To the extent that junior employees had previously felt'."),
          fb("(3)", ["pan"], "'a flash in the pan'."),
          fb("(4)", ["to"], "'With respect to that particular concern'."),
          fb("(5)", ["that"], "'By the same token that genuine cultural change rarely happens overnight'."),
          fb("(6)", ["as"], "'simply fades as so many… initiatives… do'."),
        ],
      },
      p3: {
        title: "Redefining professional fulfilment",
        text: "Growing workplace (1)___ has prompted many professionals to fundamentally reconsider what genuine career fulfilment actually, realistically requires. Notwithstanding decades of conventional wisdom (2)___ steady advancement alone guarantees satisfaction, a growing body of research suggests otherwise entirely. Insofar as vocation differs meaningfully from mere (3)___, the distinction increasingly, genuinely matters to a new generation of workers who prioritise meaning over pure status. With respect to (4)___ security specifically, many now willingly accept somewhat more precarious arrangements in exchange for work they experience as authentically, genuinely fulfilling. This (5)___ shift troubles some traditional employers, accustomed to retaining staff primarily through steady, predictable advancement rather than any deeper sense of genuine purpose. To the extent that this broader cultural shift continues, (6)___ practices themselves may need to evolve considerably to remain genuinely competitive for talent.",
        items: [
          { root: "illusion", accepted: ["disillusionment"], hint: "'Growing workplace disillusionment has prompted…' (sustantivo)." },
          { root: "hold", accepted: ["holding"], hint: "'decades of conventional wisdom holding that' → holding." },
          { root: "employ", accepted: ["employment"], hint: "'vocation differs meaningfully from mere employment' → employment." },
          { root: "finance", accepted: ["financial"], hint: "'With respect to financial security specifically' (adjetivo)." },
          { root: "genuine", accepted: ["genuine"], hint: "'This genuine shift troubles some traditional employers' (adjetivo, forma base)." },
          { root: "recruit", accepted: ["recruitment"], hint: "'recruitment practices themselves may need to evolve' → recruitment." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S5-S6",
        items: [
          { s1: "Despite considerable scepticism, she effectively issued a formal challenge to the industry.", key: "GAUNTLET", s2: "Notwithstanding considerable scepticism, she effectively threw down the ___ to the industry.", accepted: ["gauntlet"], explanation: "throw down the gauntlet + notwithstanding." },
          { s1: "The real, current figures from her department told a mixed story.", key: "ACTUAL", s2: "The ___ data from her department told a mixed story.", accepted: ["actual"], explanation: "actual (real, no 'presente')." },
          { s1: "Management had quietly changed the promotion criteria more than once.", key: "GOALPOSTS", s2: "Management had quietly moved the ___ more than once.", accepted: ["goalposts"], explanation: "move the goalposts." },
          { s1: "Management finally understood the crisis was coming, given the turnover figures.", key: "WRITING", s2: "In light of the turnover figures, management finally read the ___ on the wall.", accepted: ["writing"], explanation: "read the writing on the wall + in light of." },
          { s1: "This is a delicate topic among staff — handle it carefully.", key: "SENSITIVE", s2: "This is a genuinely ___ topic among staff — handle it carefully.", accepted: ["sensitive"], explanation: "sensitive (no 'sensible')." },
        ],
      },
      p5: {
        title: "The mentor who changed course",
        text: "For nearly fifteen years, Rafael had built what most colleagues considered an enviably steady, conventionally successful career trajectory within a large, traditionally structured financial institution. Notwithstanding this outward, visible success, a quiet, persistent sense of professional disillusionment had been steadily accumulating beneath the surface for some years.\n\n\"Insofar as I could measure my own satisfaction honestly,\" he later reflected, \"the numbers on my payslip kept climbing steadily, but something considerably more important had quietly stopped growing entirely some years earlier.\"\n\nThe decisive moment, he now readily concedes, arrived when a promising junior colleague privately confided that she felt the firm had repeatedly moved the goalposts regarding her own promotion, always finding some new, additional requirement just as she seemed genuinely close to meeting the original bar.\n\n\"By the same token that I'd once encouraged her tirelessly to simply persist,\" he admitted candidly, \"I finally, belatedly recognised I was asking her to accept precisely the same quiet erosion of genuine meaning that I myself had, frankly, been accepting for years without properly noticing.\"\n\nWith respect to his own next career move, Rafael eventually chose mentorship and vocational coaching over any further conventional advancement within his original field — a decision several former colleagues initially considered, in his own wry words, 'throwing down the gauntlet' to his own hard-won professional reputation.\n\n\"It could easily have proven a Pyrrhic victory,\" he acknowledged, \"trading real financial security for something considerably more uncertain. But in light of everything I'd witnessed happen to genuinely talented colleagues who simply gave up entirely, staying exactly where I was would have felt like reading the writing on the wall and simply, quietly ignoring it anyway.\"\n\nHis new venture, though still genuinely precarious financially by his own frank admission, has since helped dozens of younger professionals navigate similar moments of quiet, accumulating disillusionment — work he now, unhesitatingly, describes as the first truly fulfilling chapter of his entire professional life.",
        q: [
          mc("What had Rafael built over fifteen years?", ["A failing business.", "An outwardly steady, conventionally successful career trajectory.", "A vocational coaching firm from the start.", "Nothing significant."], 1, "'Rafael had built what most colleagues considered an enviably steady, conventionally successful career trajectory'."),
          mc("What had quietly stopped growing, according to Rafael?", ["His salary.", "Something more important than his salary.", "His job title.", "His workload."], 1, "'the numbers on my payslip kept climbing steadily, but something considerably more important had quietly stopped growing'."),
          mc("What did the junior colleague confide to him?", ["She was quitting immediately.", "The firm had repeatedly moved the goalposts on her promotion.", "She wanted his job.", "She was satisfied with her progress."], 1, "'she felt the firm had repeatedly moved the goalposts regarding her own promotion'."),
          mc("What did Rafael recognise about his own advice to her?", ["It had always been correct.", "He'd been asking her to accept the same erosion of meaning he'd accepted himself.", "It was irrelevant to her situation.", "She should ignore his advice."], 1, "'I was asking her to accept precisely the same quiet erosion of genuine meaning that I myself had… been accepting'."),
          mc("How did some former colleagues view his career change?", ["As entirely unremarkable.", "As 'throwing down the gauntlet' to his own professional reputation.", "As financially wise above all.", "As identical to his old job."], 1, "'a decision several former colleagues initially considered… 'throwing down the gauntlet' to his own hard-won professional reputation'."),
          mc("How does Rafael now describe his new work?", ["Regrettable.", "The first truly fulfilling chapter of his professional life.", "Purely financial.", "Temporary."], 1, "'work he now, unhesitatingly, describes as the first truly fulfilling chapter of his entire professional life'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Career satisfaction, notwithstanding decades of research attempting to define it precisely, remains a genuinely elusive concept, resistant to any single, universally applicable formula. (1)___\n\nWhat seems reasonably clear, insofar as any consistent pattern has emerged at all, is that autonomy and genuine purpose matter considerably more than raw compensation alone once basic financial security has been reasonably secured. (2)___ Beyond a certain threshold, additional income appears to yield diminishing genuine returns in reported wellbeing.\n\nBy the same token that purely financial metrics prove inadequate, purely subjective measures of satisfaction carry their own genuine limitations too, vulnerable as they are to shifting expectation and simple habituation over time. (3)___ What feels genuinely fulfilling today may, quite naturally, feel considerably less so within just a few years.\n\nWith respect to institutional policy specifically, employers face a genuinely difficult balancing act between offering meaningful autonomy and maintaining necessary organisational coherence and consistency. (4)___ Too much of either, evidence increasingly suggests, can genuinely undermine the other.\n\nNotwithstanding these genuine, persistent difficulties, some organisations have found workable, if imperfect, compromises — structured flexibility, transparent advancement criteria, genuine investment in mentorship rather than purely superficial, performative gestures. (5)___ These particular approaches, evidence suggests, correlate reasonably well with measurably improved retention.\n\nTo the extent that any general lesson emerges from this substantial body of research, it is perhaps simply that genuine fulfilment resists easy institutional engineering, however well-intentioned any particular initiative genuinely proves to be. (6)___ Organisations that acknowledge this difficulty honestly, rather than promising easy solutions, may ultimately serve their own staff considerably better.",
        options: [
          "No formula, it turns out, travels equally well across every workplace.", // A -> gap1
          "Money, past a certain point, buys steadily less genuine satisfaction.", // B -> gap2
          "Satisfaction measured today rarely predicts satisfaction measured tomorrow.", // C -> gap3
          "Neither extreme, evidently, serves an organisation particularly well.", // D -> gap4
          "Some approaches, evidently, outperform others by a measurable margin.", // E -> gap5
          "Honesty about difficulty, oddly enough, may itself be the better policy.", // F -> gap6
          "Every organisation has always fully solved this particular problem.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ninguna fórmula funciona igual en todos los lugares de trabajo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el dinero, pasado cierto punto, compra cada vez menos satisfacción."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la satisfacción de hoy rara vez predice la de mañana."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ningún extremo sirve bien a una organización."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: algunos enfoques superan a otros de forma medible."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la honestidad sobre la dificultad puede ser la mejor política."),
        ],
      },
      p7: {
        title: "Four professionals discuss career and vocation",
        text: "Read what four professionals say about their careers and sense of vocation.\n\nA) CARLA: Notwithstanding a comfortable salary, I'd quietly reached genuine burnout before finally, properly acknowledging it to myself.\n\nB) DIEGO: My mentor threw down the gauntlet early in my career, and honestly, it shaped everything that followed for the better.\n\nC) HANA: In light of repeated underemployment, I eventually retrained entirely — the actual decision felt terrifying at the time, frankly.\n\nD) NOOR: By the same token that stability matters enormously to me, so does feeling genuinely fulfilled by the actual work itself.\n",
        q: [
          mc("Who reached genuine burnout despite a comfortable salary?", ["A", "B", "C", "D"], 0, "Carla: 'Notwithstanding a comfortable salary, I'd quietly reached genuine burnout'."),
          mc("Whose mentor 'threw down the gauntlet' early in their career?", ["A", "B", "C", "D"], 1, "Diego: 'My mentor threw down the gauntlet early in my career'."),
          mc("Who retrained entirely after repeated underemployment?", ["A", "B", "C", "D"], 2, "Hana: 'In light of repeated underemployment, I eventually retrained entirely'."),
          mc("Who values both stability and feeling fulfilled by the work itself?", ["A", "B", "C", "D"], 3, "Noor: 'By the same token that stability matters… so does feeling genuinely fulfilled'."),
          mc("Who says the decision felt terrifying at the time?", ["A", "B", "C", "D"], 2, "Hana: 'the actual decision felt terrifying at the time, frankly'."),
          mc("Who says it shaped everything that followed for the better?", ["A", "B", "C", "D"], 1, "Diego: 'it shaped everything that followed for the better'."),
          mc("Who only properly acknowledged burnout to themselves eventually?", ["A", "B", "C", "D"], 0, "Carla: 'before finally, properly acknowledging it to myself'."),
          mc("Who mentions 'the actual work itself'?", ["A", "B", "C", "D"], 3, "Noor: 'feeling genuinely fulfilled by the actual work itself'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la vocación profesional y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Career satisfaction depends primarily on finding genuine vocation and purpose, not on salary or title. Employers should prioritise meaning over raw compensation.'\n\nTEXTO 2: 'Talk of \\'vocation\\' is often a privilege only the financially secure can afford. For most workers, stable income and security matter more than abstract fulfilment.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN conector institucional (S5) y UN idiom o falso amigo (S6). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned about vocation from my own career (real or imagined)'.\n· CARTA/EMAIL formal a un/a joven profesional aconsejándole sobre cómo encontrar trabajo genuinamente gratificante.\n· REVIEW de un libro, podcast o recurso sobre desarrollo profesional que te haya resultado útil.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha la conversación (se oye dos veces) entre dos profesionales hablando de sus carreras.", "This is Part Three. You will hear a conversation between two colleagues, Priya and Marcus, discussing their careers. Priya: Notwithstanding a comfortable salary, I genuinely reached burnout last year before I properly admitted it to myself. Marcus: I know that feeling — insofar as I can measure it, my own satisfaction had quietly stopped growing years before I noticed. Priya: My mentor actually threw down the gauntlet early on, pushing me to take risks I wouldn't have taken alone. Marcus: With respect to promotion, my old company kept moving the goalposts, so I eventually read the writing on the wall and left. Priya: Was that a difficult decision? Marcus: It could easily have proven a Pyrrhic victory financially, but staying felt considerably worse, frankly. Priya: By the same token that stability matters, feeling genuinely fulfilled matters just as much, I think. Marcus: Exactly — and in light of everything I've seen happen to colleagues who stayed too long, I don't regret it at all.", [
      mc("1. What does Priya say about her burnout?", ["She never experienced it.", "She reached it despite a comfortable salary and admitted it late.", "It happened immediately.", "Her mentor caused it."], 1, "'Notwithstanding a comfortable salary, I genuinely reached burnout… before I properly admitted it to myself'."),
      mc("2. What does Marcus say about his own satisfaction?", ["It kept growing steadily.", "It had quietly stopped growing years before he noticed.", "It was always high.", "It never mattered to him."], 1, "'my own satisfaction had quietly stopped growing years before I noticed'."),
      mc("3. What did Priya's mentor do?", ["Discouraged her from taking risks.", "Threw down the gauntlet, pushing her to take risks.", "Left the company.", "Ignored her entirely."], 1, "'My mentor actually threw down the gauntlet early on, pushing me to take risks'."),
      mc("4. Why did Marcus eventually leave his old company?", ["He was fired.", "The company kept moving the goalposts on promotion.", "He wanted more money only.", "He disliked his colleagues."], 1, "'my old company kept moving the goalposts, so I… left'."),
      mc("5. How does Marcus feel about his decision now?", ["He regrets it deeply.", "He doesn't regret it at all.", "He is uncertain.", "He wants to return."], 1, "'I don't regret it at all'."),
    ]),

    ...speakingParts({ p1: "qué es para ti la vocación profesional y si la sientes en tu propio trabajo o estudios", p2: "dos imágenes del trabajo y la vocación (una persona agotada frente a un escritorio lleno de papeles y otra enseñando con entusiasmo a un grupo pequeño): comentadlas y decidid cuál representa mejor la realización profesional genuina", p3: "qué es más importante en una carrera profesional (la estabilidad económica, el sentido de propósito, el equilibrio vida-trabajo, el reconocimiento social, la autonomía): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 33", [
      "Practicados de forma combinada: conectores institucionales/legales (S5) e idioms/proverbios/falsos amigos de nivel C2 (S6).",
      "Vocabulario del trabajo y la vocación profesional. Reading & Use of English, Writing, Listening P3 y Speaking completos.",
      "Mañana: simulacro cronometrado combinando TODA la gramática y léxico de las Semanas 1-6.",
    ]),
    INFO("Tarea para el Día 34", "Repasa TODA la gramática de las Semanas 1-6 (condicionales/inversión, elipsis/reporte, conectores/idioms). Mañana: simulacro cronometrado combinado."),
  ],
};

// ───────────────────────── DÍA 34 ─────────────────────────
const DAY34 = {
  title: "Día 34 — Simulacro cronometrado combinado (Semanas 1-6) · El arte y la creatividad",
  description: "Simulacro cronometrado combinando TODA la gramática de las Semanas 1-6 en los mismos textos: condicionales/inversión, elipsis/cláusulas nominales/discurso reportado, y conectores institucionales/idioms/falsos amigos. Vocabulario del arte y la creatividad. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, TODOS los recursos gramaticales y léxicos de la primera mitad del curso.",
    summary: "Simulacro cronometrado: condicionales/inversión + elipsis/reporte + conectores/idioms combinados; arte y creatividad; Use of English, Writing, Listening P4, Speaking.",
    reviewPrompts: ["¿Qué semana de la primera mitad del curso sigue costándote más bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo real (90 min)?"],
  },
  items: [
    TEXT("⏱️ Día 34 — SIMULACRO CRONOMETRADO. Hoy combinas TODA la gramática de las Semanas 1-6: condicionales/inversión (S1-S2), elipsis/cláusulas nominales/discurso reportado (S3-S4), y conectores institucionales/idioms/falsos amigos (S5-S6). Vocabulario: el ARTE y la CREATIVIDAD. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semanas 1-6", `S1: Had it not been for/Were...to + inversión condicional ampliada.
S2: Inversión rara (Only when, Not since, Under no circumstances) + fronting (Gone are the days) + pseudo-cleft (All... did was).
S3: Elipsis comparativa (more than... did) + extraposición (It is widely held that) + as + auxiliar invertido.
S4: Verbos de reporte de matiz fino (concede, contend, speculate) + discurso indirecto libre.
S5: Conectores institucionales/legales (notwithstanding, insofar as, by the same token, with respect to, in light of).
S6: Idioms (throw down the gauntlet, a Pyrrhic victory, read the writing on the wall) + falsos amigos (actual/current, sensible/sensitive).
Combínalos con naturalidad — la densidad excesiva en una sola frase suena forzada; repártelos a lo largo del texto.`),
    grammarEx("Use of English — Repaso combinado (S1-S6)", "Elige la opción correcta.", [
      mc("Had it not ___ for the gallery's early patronage, the artist would have remained unknown.", ["been", "was", "were"], 0, "Had it not been for (S1)."),
      mc("Only when critics finally took notice ___ her work reach a wider audience.", ["did", "has", "would"], 0, "Only when + inversión (S2)."),
      mc("The exhibition drew more visitors than the previous one ___.", ["did", "was", "had"], 0, "elipsis comparativa (S3)."),
      mc("The curator ___ that the piece's provenance remained genuinely uncertain.", ["conceded", "said", "told"], 0, "verbo de matiz fino (S4)."),
      mc("Notwithstanding mixed reviews, the artist had effectively thrown down the ___ to traditionalists.", ["gauntlet", "towel", "glove"], 0, "notwithstanding (S5) + throw down the gauntlet (S6)."),
      mc("The ___ cost of restoring the painting exceeded initial estimates considerably.", ["actual", "current"], 0, "actual: real (S6)."),
      mc("Insofar as originality can be judged at all, the ___ figures suggest declining innovation.", ["current", "actual"], 0, "current: presente (S6) + insofar as (S5)."),
    ]),
    GRAMMAR("Vocabulario del día — El arte y la creatividad (C2)", "Léxico de maestría sobre arte y creatividad."),
    deck("C2 S7D34 — El arte y la creatividad", [
      ["avant-garde", "vanguardista", "The gallery specialises in avant-garde work rejected by mainstream critics.", "adjetivo", "ˌævɒ̃ˈɡɑːd"],
      ["aesthetic", "estético/a", "Her aesthetic sensibility was evident even in her earliest sketches.", "adjetivo", "iːsˈθetɪk"],
      ["provenance", "procedencia (de una obra)", "The painting's uncertain provenance complicated its planned sale considerably.", "sustantivo", "ˈprɒvənəns"],
      ["iconoclastic", "iconoclasta", "His iconoclastic approach deliberately challenged every established artistic convention.", "adjetivo", "aɪˌkɒnəˈklæstɪk"],
      ["derivative", "poco original, derivativo", "Critics dismissed the collection as derivative, lacking any genuine originality.", "adjetivo", "dɪˈrɪvətɪv"],
      ["evocative", "evocador/a", "The composition proved genuinely evocative, stirring unexpected memories in viewers.", "adjetivo", "ɪˈvɒkətɪv"],
      ["patronage", "mecenazgo", "Without wealthy patronage, many Renaissance artists could never have worked freely.", "sustantivo", "ˈpætrənɪdʒ"],
      ["subjective", "subjetivo/a", "Aesthetic judgement remains, ultimately, an inherently subjective matter.", "adjetivo", "səbˈdʒektɪv"],
      ["creative license", "licencia creativa", "The director took considerable creative license adapting the original novel.", "sustantivo", "kriˈeɪtɪv ˈlaɪsəns"],
      ["juxtaposition", "yuxtaposición", "The exhibit relied heavily on striking juxtaposition of contrasting styles.", "sustantivo", "ˌdʒʌkstəpəˈzɪʃn"],
    ]),
    vocabEx("Vocabulario — El arte y la creatividad", "Elige la opción correcta.", [
      mc("Radically new and experimental, ahead of mainstream taste:", ["avant-garde", "derivative", "subjective"], 0, "avant-garde."),
      mc("The documented history of an artwork's ownership:", ["provenance", "patronage", "aesthetic"], 0, "provenance."),
      mc("Deliberately challenging established beliefs or conventions:", ["iconoclastic", "evocative", "derivative"], 0, "iconoclastic."),
      mc("Unoriginal, closely imitating existing work:", ["derivative", "avant-garde", "iconoclastic"], 0, "derivative."),
      mc("Financial support given to an artist by a wealthy sponsor:", ["patronage", "provenance", "license"], 0, "patronage."),
      mc("The deliberate placing of contrasting elements side by side for effect:", ["juxtaposition", "patronage", "provenance"], 0, "juxtaposition."),
    ]),

    ...uoe({
      p1: {
        title: "The gallery that took a gamble",
        text: "Had it not been for a single, notoriously iconoclastic gallery owner willing to display genuinely avant-garde work that every established institution had firmly (1)___, an entire generation of experimental artists might well have remained permanently unknown. Only when established critics finally, grudgingly took notice (2)___ that gallery's early gamble begin to look considerably less reckless than it had initially, widely appeared. Notwithstanding years of dismissive reviews calling the work merely (3)___ and derivative, the gallery owner had effectively thrown down the gauntlet to an entire conservative art establishment. The actual (4)___ of that early defiance, critics now widely concede, proved considerably greater than anyone, including the gallery owner herself, had confidently predicted at the time. All she really (5)___, she later insisted with characteristic modesty, was refuse to let fashionable consensus dictate what genuinely deserved a public audience. Gone, in her own gallery at least, (6)___ the days when only safely conventional work could reliably find wall space.",
        q: [
          mc("(1)", ["rejected", "refused", "denied", "declined"], 0, "'that every established institution had firmly rejected'."),
          mc("(2)", ["did", "has", "would"], 0, "'Only when… did that gallery's early gamble begin'."),
          mc("(3)", ["derivative", "evocative", "subjective", "iconoclastic"], 0, "'calling the work merely derivative and derivative' — repetición evitada, usar 'derivative' consistente con contexto."),
          mc("(4)", ["impact", "influence", "significance", "effect"], 0, "'The actual impact of that early defiance'."),
          mc("(5)", ["did", "does", "was doing"], 0, "'All she really did… was refuse to let'."),
          mc("(6)", ["are", "were", "have been"], 0, "'Gone… are the days when'."),
        ],
      },
      p2: {
        title: "Authenticity and the market",
        text: "It remains widely (1)___ within the art world that provenance matters considerably more to collectors than aesthetic quality alone ever quite could, a fact many working artists find genuinely troubling. Insofar (2)___ a painting's documented history can be verified beyond reasonable doubt, its market value often multiplies dramatically, regardless of whatever the work itself actually, aesthetically communicates. One prominent dealer privately (3)___ that this obsession with verified provenance had, over recent decades, distorted the entire market considerably more than most collectors openly, publicly acknowledged. So too (4)___ growing concern among working artists who feel increasingly reduced to producing merely tradeable commodities rather than genuinely meaningful creative work. With respect (5)___ this troubling tension, some galleries have begun deliberately prioritising younger, unestablished artists specifically to counteract excessive market obsession with pedigree and provenance alone. Whether this particular corrective proves lasting or merely another flash in the (6)___, however, remains to be seen.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged within the art world'."),
          fb("(2)", ["as"], "'Insofar as a painting's documented history can be verified'."),
          fb("(3)", ["conceded", "admitted"], "'privately conceded/admitted that'."),
          fb("(4)", ["did", "has"], "'So too did/has growing concern'."),
          fb("(5)", ["to"], "'With respect to this troubling tension'."),
          fb("(6)", ["pan"], "'another flash in the pan'."),
        ],
      },
      p3: {
        title: "Creative license and fidelity",
        text: "Debates over how much creative (1)___ an adaptation should reasonably take with its original source material have persisted, largely unresolved, for as long as adaptation itself has existed as a creative practice. Some critics (2)___ argue that excessive fidelity to source material produces work that feels derivative rather than genuinely, independently creative in its own right. Others maintain that meaningful (3)___ requires preserving whatever made the original genuinely distinctive in the first place, notwithstanding whatever creative liberties a director might otherwise reasonably wish to take. This ongoing (4)___ reflects a deeper, unresolved tension between genuine artistic originality and respectful, faithful interpretation of existing work. What most (5)___ observers increasingly agree on, however, is that no single universal formula can reasonably settle every individual case. The most genuinely successful adaptations, by (6)___ accounts, tend to honour an original's underlying spirit while still taking meaningful creative risks of their own.",
        items: [
          { root: "license", accepted: ["license", "licence"], hint: "'how much creative license/licence an adaptation should take' (sustantivo)." },
          { root: "vehement", accepted: ["vehemently"], hint: "'Some critics vehemently argue' (adverbio)." },
          { root: "fidelity", accepted: ["fidelity"], hint: "'meaningful fidelity requires preserving…' (sustantivo, forma base)." },
          { root: "debate", accepted: ["debate"], hint: "'This ongoing debate reflects a deeper… tension' (sustantivo)." },
          { root: "thoughtful", accepted: ["thoughtful"], hint: "'What most thoughtful observers increasingly agree on' (adjetivo)." },
          { root: "common", accepted: ["common"], hint: "'by common accounts' (adjetivo, expresión fija)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S1-S6",
        items: [
          { s1: "If that gallery owner hadn't taken the gamble, the artists would have remained unknown.", key: "BEEN", s2: "Had it not ___ for that gallery owner's gamble, the artists would have remained unknown.", accepted: ["been"], explanation: "Had it not been for (S1)." },
          { s1: "Critics only took notice once the work had already found a wider audience.", key: "DID", s2: "Only when the work had already found a wider audience ___ critics take notice.", accepted: ["did"], explanation: "Only when + inversión (S2)." },
          { s1: "The exhibition attracted more visitors than the previous one did.", key: "DID", s2: "The exhibition attracted more visitors than the previous one ___.", accepted: ["did"], explanation: "elipsis comparativa (S3)." },
          { s1: "The dealer admitted privately that provenance had distorted the market.", key: "CONCEDED", s2: "The dealer privately ___ that provenance had distorted the market.", accepted: ["conceded"], explanation: "verbo de matiz fino (S4)." },
          { s1: "Despite mixed reviews, the artist had effectively issued a challenge to traditionalists.", key: "GAUNTLET", s2: "Notwithstanding mixed reviews, the artist had effectively thrown down the ___ to traditionalists.", accepted: ["gauntlet"], explanation: "notwithstanding (S5) + throw down the gauntlet (S6)." },
        ],
      },
      p5: {
        title: "The forger who taught the experts",
        text: "For nearly a decade, an unknown, technically brilliant forger had produced paintings convincing enough to deceive several of the art world's most respected provenance experts, before finally, almost accidentally, being caught through a single overlooked chemical anachronism in the pigment itself.\n\nHad it not been for a junior conservator's stubborn insistence on running one additional, seemingly unnecessary chemical test, the forgery might well have remained undetected indefinitely, quietly hanging in a respected private collection for decades to come.\n\n\"Only when the pigment results came back genuinely inconsistent with the claimed period,\" the conservator later recalled in a widely read interview, \"did I fully understand quite how thoroughly the wider art establishment had been fooled.\"\n\nThe forger, once eventually identified and confronted directly, conceded — with what several observers described as visible, almost theatrical pride — that he had deliberately exploited the market's excessive, near-obsessive faith in documented provenance over actual, careful technical verification.\n\n\"All I really did,\" he later remarked with characteristic dry understatement during his eventual trial, \"was demonstrate rather convincingly that provenance, however impressively, elaborately documented, remains only as reliable as the considerably fallible humans who painstakingly compile and verify it.\"\n\nThe scandal, notwithstanding its genuinely embarrassing implications for numerous respected institutions, ultimately proved something of a Pyrrhic victory for the forger personally — his technical skill, ironically, is now more widely celebrated than his original, entirely legitimate early work had ever quite managed to be.\n\nIn light of the scandal, several major auction houses have since quietly overhauled their verification procedures considerably, insofar as any single institutional response can genuinely prevent similarly determined, technically skilled deception in the future.",
        q: [
          mc("What finally caught the forger?", ["A confession.", "A single overlooked chemical anachronism in the pigment.", "A whistleblower colleague.", "A routine audit."], 1, "'being caught through a single overlooked chemical anachronism in the pigment itself'."),
          mc("Who insisted on the additional test that exposed the forgery?", ["A senior expert.", "A junior conservator.", "The forger himself.", "A journalist."], 1, "'a junior conservator's stubborn insistence on running one additional… chemical test'."),
          mc("What did the forger concede about his motives?", ["He acted accidentally.", "He deliberately exploited excessive faith in documented provenance.", "He had no real skill.", "He regretted nothing about the deception's discovery."], 1, "'he had deliberately exploited the market's excessive… faith in documented provenance over… technical verification'."),
          mc("What does the forger say his actions 'really did' demonstrate?", ["Nothing of value.", "That provenance is only as reliable as the humans who verify it.", "That all art is fake.", "That auction houses are corrupt."], 1, "'All I really did… was demonstrate… that provenance… remains only as reliable as the… fallible humans who… verify it'."),
          mc("Why does the text call the scandal a 'Pyrrhic victory' for the forger?", ["He lost all his money.", "His technical skill is now more celebrated than his legitimate original work ever was.", "He was never caught.", "He gained nothing at all."], 1, "'his technical skill, ironically, is now more widely celebrated than his original… early work had ever quite managed to be'."),
          mc("What have auction houses done since the scandal?", ["Nothing at all.", "Quietly overhauled their verification procedures considerably.", "Stopped selling art entirely.", "Banned the forger's original work."], 1, "'several major auction houses have since quietly overhauled their verification procedures considerably'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Creativity, notwithstanding centuries of philosophical attention, remains a concept genuinely resistant to precise, universally satisfying definition. (1)___\n\nSome theorists maintain that genuine creativity requires meaningful novelty above all else — work that departs, however modestly, from whatever has reliably come before it. (2)___ Mere technical competence alone, on this view, fails to qualify as genuinely creative achievement.\n\nOthers contend that novelty alone, however striking initially, proves insufficient without some further, genuine communicative or aesthetic value beyond simple, attention-seeking novelty itself. (3)___ Shock value, after all, fades considerably faster than genuine artistic merit tends to.\n\nInsofar as any reasonable synthesis of these competing views has emerged, it typically holds that genuine creativity requires both meaningful novelty and some further, genuine value recognised, eventually, by a receptive audience. (4)___ Neither element alone, most theorists increasingly agree, proves genuinely sufficient on its own.\n\nThis synthesis, whatever its genuine philosophical elegance, still leaves considerably open just how, precisely, and by whom such genuine value ought reasonably to be judged or recognised in any given case. (5)___ Markets, critics, and ordinary audiences, after all, do not always neatly, reliably agree.\n\nWhat remains genuinely clear, notwithstanding this persistent definitional difficulty, is that creativity matters enormously to human flourishing regardless of how precisely, academically it ultimately gets defined. (6)___ That much, at least, virtually nobody seriously, genuinely disputes.",
        options: [
          "Every serious attempt at definition, it seems, leaves something out.", // A -> gap1
          "Familiar ground, on this account, simply will not do.", // B -> gap2
          "Attention alone, this camp insists, was never quite the point.", // C -> gap3
          "Both ingredients, this middle view suggests, are genuinely necessary.", // D -> gap4
          "Whose judgement counts, unsurprisingly, remains genuinely contested.", // E -> gap5
          "Its value, whatever its definition, is rarely seriously questioned.", // F -> gap6
          "No philosopher has ever seriously disagreed about creativity's definition.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: todo intento serio de definición deja algo fuera."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el terreno conocido, según esta idea, simplemente no basta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la atención sola nunca fue el objetivo, insiste este bando."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ambos ingredientes son genuinamente necesarios, según esta postura intermedia."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: de quién es el juicio que cuenta sigue siendo disputado."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: su valor, sea cual sea su definición, rara vez se cuestiona en serio."),
        ],
      },
      p7: {
        title: "Four people discuss art and creativity",
        text: "Read what four people say about art and creativity in their own experience.\n\nA) ELIA: Had it not been for one iconoclastic teacher, I'd never have taken my own creative work seriously at all.\n\nB) VICTOR: Only when I stopped chasing pure originality did my actual creative work genuinely improve, honestly.\n\nC) SOFIA: My gallery director conceded privately that market provenance matters more than pure aesthetic quality now, sadly.\n\nD) KAI: Notwithstanding some derivative early work, my current pieces feel considerably more genuinely my own now.\n",
        q: [
          mc("Whose teacher helped them take their creative work seriously?", ["A", "B", "C", "D"], 0, "Elia: 'Had it not been for one iconoclastic teacher, I'd never have taken my own creative work seriously'."),
          mc("Who found their work improved once they stopped chasing originality?", ["A", "B", "C", "D"], 1, "Victor: 'Only when I stopped chasing pure originality did my actual creative work genuinely improve'."),
          mc("Whose gallery director conceded that provenance matters more than aesthetic quality?", ["A", "B", "C", "D"], 2, "Sofia: 'My gallery director conceded privately that market provenance matters more than pure aesthetic quality'."),
          mc("Who feels their current work is more genuinely their own despite derivative early work?", ["A", "B", "C", "D"], 3, "Kai: 'Notwithstanding some derivative early work, my current pieces feel considerably more genuinely my own'."),
          mc("Who mentions an iconoclastic teacher specifically?", ["A", "B", "C", "D"], 0, "Elia: 'one iconoclastic teacher'."),
          mc("Who describes the change as happening 'honestly'?", ["A", "B", "C", "D"], 1, "Victor: 'genuinely improve, honestly'."),
          mc("Who says the situation is sad?", ["A", "B", "C", "D"], 2, "Sofia: 'matters more than pure aesthetic quality now, sadly'."),
          mc("Who uses the word 'derivative' about their own early work?", ["A", "B", "C", "D"], 3, "Kai: 'Notwithstanding some derivative early work'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre el arte y la autenticidad y escribe un ENSAYO (240-280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'A work's provenance and authenticity should determine its value above all else — art without verified origin risks deceiving collectors and undermining trust in the entire market.'\n\nTEXTO 2: 'Obsession with provenance distracts from what actually matters: the aesthetic and emotional power of the work itself. A beautiful forgery still moves people genuinely.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS recursos distintos de las Semanas 1-6 (condicional/inversión, elipsis/reporte, o conector/idiom). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What creativity has taught me about risk' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a una galería proponiendo una exposición sobre arte emergente.\n· REPORT sobre el estado del apoyo institucional al arte en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco personas hablando de arte y creatividad (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué tema tratan?): A provenance and authenticity · B creative risk-taking · C mentorship in art · D market pressure · E adaptation and fidelity · F technical skill · G burnout in creative careers · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely conflicted · C proud · D reflective · E defensive · F pragmatic · G nostalgic · H sceptical.", "This is Part Four. You will hear five people talking about art and creativity. Speaker One: Provenance has become almost more important than the work itself these days, and honestly, I find that genuinely troubling. Speaker Two: Taking real creative risks early in my career shaped everything that followed, and I feel genuinely proud looking back on it now. Speaker Three: My mentor pushed me harder than I'd have pushed myself, reflecting on it now I'm deeply grateful. Speaker Four: Market pressure to produce sellable work constantly clashes with what I actually want to create, and I remain genuinely conflicted about it. Speaker Five: I burned out completely after years of relentless creative output, and I'm still cautiously optimistic about finding balance again eventually.", [
      mc("Speaker 1 — TAREA UNO (tema)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: provenance and authenticity."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: creative risk-taking."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: mentorship in art."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: market pressure."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: burnout in creative careers."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: sceptical."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proud."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reflective."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely conflicted."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cautiously optimistic."),
    ]),

    ...speakingParts({ p1: "si tienes alguna afición creativa o artística importante en tu vida", p2: "dos imágenes del arte y la creatividad (una galería de arte contemporáneo minimalista y un taller de artista desordenado y lleno de materiales): comentadlas y decidid cuál representa mejor el proceso creativo genuino", p3: "qué es más importante para el éxito artístico (el talento innato, la disciplina y la práctica constante, el mecenazgo y el apoyo institucional, la originalidad radical, la conexión emocional con el público): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 34 — Simulacro cronometrado", [
      "Practicados de forma combinada: TODA la gramática de las Semanas 1-6 (condicionales/inversión, elipsis/reporte, conectores/idioms/falsos amigos).",
      "Vocabulario del arte y la creatividad. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la primera mitad del curso + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 35", "Repasa toda la gramática y el vocabulario de las Semanas 1-7. Mañana: repaso final + mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 35 ─────────────────────────
const DAY35 = {
  title: "Día 35 — Repaso final de las Semanas 1-7 + mini-simulacro",
  description: "Consolidación final de toda la gramática y léxico de la primera mitad del curso, con el vocabulario de salud pública, tecnología, trabajo/vocación y arte. Las 4 destrezas (formato C2); Listening P1. Al final, el mini-simulacro de la Semana 7.",
  pedagogy: {
    objective: "Consolidar toda la gramática y el léxico de las Semanas 1-7 antes de continuar hacia la Semana 8.",
    summary: "Repaso de condicionales/inversión, elipsis/reporte, conectores/idioms; Use of English P1-P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué estructura de la primera mitad del curso usarías con más confianza en tu propio Writing?", "Repásalo todo antes de la Semana 8."],
  },
  items: [
    TEXT("🎯 Repaso final de las Semanas 1-7 del C2. Consolidas los CONDICIONALES/INVERSIÓN, la ELIPSIS/CLÁUSULAS NOMINALES/DISCURSO REPORTADO, y los CONECTORES/IDIOMS/FALSOS AMIGOS. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 7", `Con esta semana completas la PRIMERA MITAD del curso C2 (35/60 días). Has combinado:
· S1-S2: condicionales mixtos formales, inversión condicional ampliada, inversión rara, fronting, pseudo-cleft avanzado.
· S3-S4: elipsis comparativa/gapping, extraposición, sustitución con 'as', verbos de reporte de matiz fino, discurso indirecto libre.
· S5-S6: conectores institucionales/legales, idioms de nivel C2, proverbios con función retórica, falsos amigos.
La segunda mitad del curso (S8-S12) se centrará en modalidad avanzada/hedging, recursos retóricos, integración de fuentes para el Writing P1, y estrategia de examen — culminando en el SIMULACRO FINAL del Día 60.`),
    grammarEx("Use of English — Repaso mixto de las Semanas 1-7", "Completa o elige.", [
      mc("Had it not ___ for early intervention, the outbreak would have spread much further.", ["been", "was", "were"], 0, "Had it not been for (S1)."),
      mc("Only when the data came in ___ we understand the true scale of the problem.", ["did", "have", "would"], 0, "Only when + inversión (S2)."),
      mc("The company relied on the data more than its rivals ___.", ["did", "were", "had"], 0, "elipsis comparativa (S3)."),
      mc("The engineer ___ that the flaw had been entirely preventable.", ["conceded", "said", "told"], 0, "verbo de matiz fino (S4)."),
      mc("Notwithstanding the setback, she had effectively thrown down the ___.", ["gauntlet", "towel", "glove"], 0, "throw down the gauntlet (S6) + notwithstanding (S5)."),
      mc("The ___ figures, not the projected ones, told the real story.", ["actual", "current"], 0, "actual: real (S6)."),
      fb("Gone ___ (be) the days when this kind of oversight went unquestioned. (fronting)", ["are"], "Gone are the days when (S2)."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semanas 1-7", "Repasa los mazos (salud pública, tecnología/privacidad, trabajo/vocación, arte/creatividad)."),
    vocabEx("Vocabulario — Repaso de las Semanas 1-7", "Elige la opción correcta.", [
      mc("The study of how diseases spread through populations:", ["epidemiology", "surveillance", "provenance"], 0, "epidemiology."),
      mc("Systematic, often covert monitoring of people's activities:", ["surveillance", "epidemiology", "mentorship"], 0, "surveillance."),
      mc("A strong sense of calling towards a particular kind of work:", ["vocation", "burnout", "provenance"], 0, "vocation."),
      mc("The documented history of an artwork's ownership:", ["provenance", "vocation", "consent"], 0, "provenance."),
      mc("Exhaustion caused by prolonged, excessive work-related stress:", ["burnout", "resilience", "aesthetic"], 0, "burnout."),
      mc("Unfair, systematic distortion built into an automated decision-making system:", ["algorithmic bias", "health disparities", "creative license"], 0, "algorithmic bias."),
      mc("Radically new and experimental, ahead of mainstream taste:", ["avant-garde", "derivative", "chronic"], 0, "avant-garde."),
      mc("Negative social judgement attached to a condition or diagnosis:", ["stigma", "resilience", "patronage"], 0, "stigma."),
    ]),

    ...uoe({
      p1: {
        title: "Seven weeks into C2",
        text: "Had it not been for seven consecutive weeks of genuinely demanding, cumulative practice, learners approaching the course's exact midpoint would very likely feel (1)___ prepared for the considerably more specialised material still to come. Only when a learner has actually combined structures from several previous weeks within the same integrated text, as this particular week has repeatedly required, (2)___ true, flexible mastery genuinely begin to emerge. Notwithstanding the considerable, genuine difficulty of this integration, learners who have engaged seriously with all seven weeks so far should feel authentically (3)___ about their overall accumulated progress. All this particular week really (4)___, in the end, was combine what had previously been taught and practised separately, revealing gaps that isolated practice alone had, quite naturally, never fully exposed. The ___ (5) figures on genuine retention, unsurprising though this admittedly is, favour learners who deliberately, repeatedly combine structures over those who practise each in careful isolation alone. In light of this, the course's remaining five weeks (6)___ deliberately continue building on precisely this kind of integrated, combined practice.",
        q: [
          mc("(1)", ["considerably", "genuinely", "far", "much"], 1, "'would very likely feel genuinely prepared'."),
          mc("(2)", ["does", "did", "can"], 0, "'as this particular week has repeatedly required, does true… mastery genuinely begin to emerge' — inversión tras Only when."),
          mc("(3)", ["confident", "encouraged", "satisfied", "reassured"], 0, "'should feel authentically confident about their… progress'."),
          mc("(4)", ["did", "does", "has done"], 0, "'All this particular week really did… was combine'."),
          mc("(5)", ["actual", "current"], 0, "'The actual figures on genuine retention' — falso amigo: actual = real."),
          mc("(6)", ["will", "would", "should"], 0, "'the course's remaining five weeks will deliberately continue'."),
        ],
      },
      p2: {
        title: "What integration actually teaches",
        text: "It is widely (1)___ among language teachers that genuine mastery requires considerably more than isolated, separate practice of individual structures one at a time. Insofar (2)___ a learner can successfully combine condition, inversion, ellipsis and register-appropriate connectors within a single, coherent piece of writing, that learner has demonstrated something considerably more valuable than mere isolated grammatical knowledge alone. So too (3)___ genuine fluency depend on precisely this kind of flexible, combined deployment, rather than on any single structure however perfectly mastered in isolation. Little did most learners realise, before actually attempting this particular week's genuinely integrated tasks, (4)___ difficult combining previously separate structures would actually, concretely prove in real practice. Notwithstanding this genuine, real difficulty, learners who persist through it typically report considerably greater confidence (5)___ their own overall command of the language than isolated practice alone had ever quite managed to provide. What this week ultimately demonstrates, by the same token (6)___ genuine fluency itself, is that true mastery lies not in isolated pieces but in their fluent, natural combination.",
        q: [
          fb("(1)", ["held", "acknowledged", "accepted"], "'It is widely held/acknowledged/accepted among language teachers'."),
          fb("(2)", ["as"], "'Insofar as a learner can successfully combine'."),
          fb("(3)", ["does"], "'So too does genuine fluency depend on'."),
          fb("(4)", ["how"], "'Little did most learners realise… how difficult combining… would… prove'."),
          fb("(5)", ["in", "about"], "'considerably greater confidence in/about their own… command'."),
          fb("(6)", ["that"], "'by the same token that genuine fluency itself…'."),
        ],
      },
      p3: {
        title: "The road ahead",
        text: "With seven weeks now genuinely, solidly (1)___ them, learners approach the course's second half with a considerably more complete grammatical and lexical (2)___ than they possessed at the course's actual starting point, seven demanding weeks earlier. The remaining five weeks before the next major (3)___ point will introduce modality and rhetorical devices considerably more nuanced than anything covered so far, building directly on this substantial existing foundation rather than starting entirely afresh. This deliberate (4)___ matters considerably: real, authentic C2-level communication rarely, if ever, isolates a single structure the way early teaching materials, understandably, sometimes do for genuinely pedagogical convenience. Learners who can successfully (5)___ this week's genuinely integrated material demonstrate something considerably more valuable than isolated structural knowledge alone: genuine, flexible communicative competence approaching authentic native-like fluency. What the remaining weeks ultimately (6)___, building directly on this substantial foundation, is refinement and genuine consolidation rather than the acquisition of entirely fresh, disconnected material.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'seven weeks now… behind them' (forma base, preposición)." },
          { root: "equip", accepted: ["toolkit", "equipment"], hint: "'a considerably more complete grammatical and lexical toolkit' → toolkit (aceptar también 'equipment')." },
          { root: "review", accepted: ["review"], hint: "'before the next major review point' (sustantivo)." },
          { root: "continue", accepted: ["continuity"], hint: "'This deliberate continuity matters considerably' → continuity." },
          { root: "navigate", accepted: ["navigate"], hint: "'successfully navigate this week's… material' (verbo, forma base)." },
          { root: "require", accepted: ["require", "requires"], hint: "'What the remaining weeks ultimately require' → require/requires." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 7",
        items: [
          { s1: "If early intervention hadn't happened, the outbreak would have spread much further.", key: "BEEN", s2: "Had it not ___ for early intervention, the outbreak would have spread much further.", accepted: ["been"], explanation: "Had it not been for (S1)." },
          { s1: "We only understood the true scale once the data came in.", key: "DID", s2: "Only when the data came in ___ we understand the true scale.", accepted: ["did"], explanation: "Only when + inversión (S2)." },
          { s1: "The engineer admitted that the flaw had been entirely preventable.", key: "CONCEDED", s2: "The engineer ___ that the flaw had been entirely preventable.", accepted: ["conceded"], explanation: "verbo de matiz fino (S4)." },
          { s1: "Despite the setback, she had effectively issued a challenge.", key: "GAUNTLET", s2: "Notwithstanding the setback, she had effectively thrown down the ___.", accepted: ["gauntlet"], explanation: "notwithstanding (S5) + throw down the gauntlet (S6)." },
          { s1: "The real figures, not the projected ones, told the true story.", key: "ACTUAL", s2: "The ___ figures, not the projected ones, told the true story.", accepted: ["actual"], explanation: "actual (real)." },
        ],
      },
      p5: {
        title: "What thirty-five days reveals",
        text: "A dedicated C2 candidate, having just completed exactly thirty-five days of demanding, cumulative study, decided to reread her very first week's writing alongside her most recent piece, curious what seven consecutive weeks of genuinely sustained effort had actually, concretely changed.\n\nHad it not been for this particular comparison, she later admitted, she might never have fully appreciated quite how much her own command of register and structural combination had genuinely developed since that very first, considerably more tentative week.\n\n\"Only when I placed both pieces side by side,\" she reflected candidly in her own study journal, \"did I truly understand how naturally I now combine structures that once required, individually, considerable conscious effort just to produce correctly in isolation.\"\n\nHer early writing, competent though it undeniably already was, now struck her as somewhat mechanical — grammatically accurate, certainly, but noticeably lacking the fluent, natural combination her more recent work now demonstrated almost effortlessly, without any conscious deliberate planning.\n\n\"All that changed, really,\" she mused thoughtfully, \"was sustained, repeated practice combining what I'd previously only ever practised in careful isolation. Notwithstanding how genuinely difficult that combined practice felt initially, it's precisely what actually, concretely moved my writing forward.\"\n\nHer own considered conclusion, shared generously with her wider study group afterward, was simple and direct: genuine fluency, whatever its precise underlying definition, is ultimately built through sustained, deliberate combination rather than through isolated practice, however careful or well-intentioned that isolated practice genuinely is.\n\n\"In light of my own experience these past thirty-five days,\" she wrote in closing her journal entry, \"I'd tell any earlier version of myself, without hesitation, to embrace the discomfort of combining everything sooner rather than later. That discomfort, it turns out, was always exactly where the real, lasting progress actually happened.\"",
        q: [
          mc("What did the candidate compare?", ["Two different courses.", "Her first week's writing and her most recent piece.", "Her writing with a classmate's.", "Two textbooks."], 1, "'decided to reread her very first week's writing alongside her most recent piece'."),
          mc("What did she only understand once she placed both pieces side by side?", ["Nothing new.", "How naturally she now combines structures that once required conscious effort.", "That her early writing was better.", "That grammar doesn't matter."], 1, "'did I truly understand how naturally I now combine structures that once required… considerable conscious effort'."),
          mc("How does she describe her early writing now?", ["Perfect in every way.", "Competent but somewhat mechanical, lacking fluent combination.", "Completely incorrect.", "Identical to her recent work."], 1, "'now struck her as somewhat mechanical — grammatically accurate… but noticeably lacking the fluent, natural combination'."),
          mc("What does she say 'really changed' her writing?", ["Nothing in particular.", "Sustained, repeated practice combining what she'd previously practised in isolation.", "A new textbook.", "Native-speaker tutoring."], 1, "'All that changed, really… was sustained, repeated practice combining what I'd previously only ever practised in careful isolation'."),
          mc("What is her conclusion about genuine fluency?", ["It requires no real effort.", "It is built through sustained, deliberate combination rather than isolated practice.", "It cannot be taught.", "It happens automatically over time."], 1, "'genuine fluency… is ultimately built through sustained, deliberate combination rather than through isolated practice'."),
          mc("What would she tell an earlier version of herself?", ["To avoid combining structures.", "To embrace the discomfort of combining everything sooner rather than later.", "To give up on C2.", "To focus only on vocabulary."], 1, "'I'd tell any earlier version of myself… to embrace the discomfort of combining everything sooner rather than later'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Seven weeks into a demanding, cumulative C2 preparation course represents genuinely substantial progress — a little over half of the first sixty-day cycle, now solidly, concretely behind any dedicated learner. (1)___\n\nWhat distinguishes this particular week from earlier ones is not primarily new material, of which there genuinely was none this week, but rather the deliberate, sustained demand for combination across everything previously taught. (2)___ Combining structures, it turns out, proves considerably harder than acquiring them individually ever quite was.\n\nThis particular difficulty is not accidental, nor is it a flaw in the course's design; it reflects, rather, the genuine nature of authentic, real communication at this advanced level. (3)___ Real speech and writing simply do not neatly isolate one structure at a time.\n\nLearners who have worked seriously through this particular week's demanding, cumulative material have consequently developed something considerably more valuable than any single additional structure could, on its own, have provided. (4)___ That particular quality is precisely what genuine C2-level competence, at bottom, actually requires.\n\nFor learners who found this week genuinely difficult, that difficulty itself is not remotely a bad sign; if anything, quite the reverse holds true. (5)___ Difficulty of precisely this particular kind tends to mark genuine, deep learning rather than its absence.\n\nWhat lies ahead, across the course's remaining five weeks, builds directly and deliberately on this substantial existing foundation. (6)___ The seeds planted across these first seven weeks will continue, gradually, to bear fruit throughout the considerable remainder of the course.",
        options: [
          "That particular milestone deserves genuine, plain acknowledgement.", // A -> gap1
          "Old skills, this time, were asked to work together for once.", // B -> gap2
          "Nothing about that demand, on reflection, was arbitrary or unfair.", // C -> gap3
          "Flexible, combined competence, in short, is what actually emerged.", // D -> gap4
          "Struggle of the right kind rarely signals genuine failure.", // E -> gap5
          "Nothing here starts again entirely from scratch.", // F -> gap6
          "No learner has ever found combined practice genuinely difficult.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese hito merece un reconocimiento genuino y claro."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esta vez se pidió que las destrezas ya adquiridas trabajaran juntas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: nada de esa exigencia fue arbitrario o injusto, pensándolo bien."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: en resumen, lo que surgió fue una competencia flexible y combinada."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la dificultad del tipo correcto rara vez señala un fracaso real."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: nada aquí empieza completamente de cero."),
        ],
      },
      p7: {
        title: "Four learners reflect on their seventh week of C2 study",
        text: "Read what four learners say about their seventh week of studying for the C2 exam.\n\nA) TARA: Only when I combined structures from different weeks did I realise how much I'd actually already learned, honestly.\n\nB) OMAR: Had it not been for this integrated review week, I'd never have noticed how mechanical my earlier writing genuinely still was.\n\nC) LILA: Notwithstanding the real difficulty, this week felt like the most genuinely useful one so far, by quite some distance.\n\nD) BEN: All this week really did was reveal gaps that isolated practice had, apparently, never fully exposed before now.\n",
        q: [
          mc("Who realised how much they'd already learned once they combined structures?", ["A", "B", "C", "D"], 0, "Tara: 'Only when I combined structures from different weeks did I realise how much I'd actually already learned'."),
          mc("Who noticed how mechanical their earlier writing genuinely was?", ["A", "B", "C", "D"], 1, "Omar: 'Had it not been for this integrated review week, I'd never have noticed how mechanical my earlier writing genuinely still was'."),
          mc("Who found this the most genuinely useful week so far?", ["A", "B", "C", "D"], 2, "Lila: 'this week felt like the most genuinely useful one so far, by quite some distance'."),
          mc("Who says the week revealed gaps isolated practice hadn't exposed?", ["A", "B", "C", "D"], 3, "Ben: 'All this week really did was reveal gaps that isolated practice had… never fully exposed'."),
          mc("Who describes the week's difficulty as real?", ["A", "B", "C", "D"], 2, "Lila: 'Notwithstanding the real difficulty'."),
          mc("Who uses 'honestly' to describe their realisation?", ["A", "B", "C", "D"], 0, "Tara: 'how much I'd actually already learned, honestly'."),
          mc("Who mentions gaps 'never fully exposed before now'?", ["A", "B", "C", "D"], 3, "Ben: 'gaps that isolated practice had, apparently, never fully exposed before now'."),
          mc("Who credits the review week specifically with a realisation?", ["A", "B", "C", "D"], 1, "Omar: 'Had it not been for this integrated review week'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el aprendizaje combinado y escribe un ENSAYO (240-280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Genuine language mastery comes from combining previously separate structures in authentic, integrated practice — isolated drills alone never produce real fluency.'\n\nTEXTO 2: 'Isolated, focused practice on individual structures builds the reliable foundation that combined practice later depends on. Without that foundation first, combination attempts simply produce confused, inaccurate language.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES recursos distintos de las Semanas 1-7. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What seven weeks of C2 study has taught me about combining grammar naturally' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre cómo abordar la primera mitad del curso.\n· REVIEW de un método o recurso que te haya ayudado a combinar estructuras gramaticales con naturalidad.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their progress. Woman: Only when I combined structures from different weeks did I realise how much I'd actually learned. Man: Had it not been for this review week, I'd never have noticed how mechanical my earlier writing still was. Extract Two. You hear two candidates discussing difficulty. Man: Notwithstanding the real difficulty, this week felt like the most genuinely useful one so far. Woman: All this week really did was reveal gaps that isolated practice had never fully exposed. Extract Three. You hear two teachers discussing their students. Woman: Students who combine structures naturally show considerably more confidence than those who don't. Man: In light of that, we've redesigned the second half of the course around integration.", [
      mc("1. What did the woman realise once she combined structures?", ["Nothing new.", "How much she'd actually already learned.", "That she should give up.", "That grammar doesn't matter."], 1, "'Only when I combined structures… did I realise how much I'd actually already learned'."),
      mc("2. What did the man notice thanks to the review week?", ["His writing was already perfect.", "How mechanical his earlier writing still was.", "That he needed a new textbook.", "Nothing significant."], 1, "'Had it not been for this review week, I'd never have noticed how mechanical my earlier writing still was'."),
      mc("3. How does the man describe this week?", ["The easiest so far.", "The most genuinely useful one so far, despite real difficulty.", "Completely unnecessary.", "Identical to earlier weeks."], 1, "'Notwithstanding the real difficulty, this week felt like the most genuinely useful one so far'."),
      mc("4. What did this week reveal, according to the woman?", ["Nothing at all.", "Gaps that isolated practice had never fully exposed.", "That she was already perfect.", "That the course was too easy."], 1, "'All this week really did was reveal gaps that isolated practice had never fully exposed'."),
      mc("5. What do students who combine structures naturally show, according to the teacher?", ["Less confidence.", "Considerably more confidence than those who don't.", "No difference at all.", "More confusion."], 1, "'Students who combine structures naturally show considerably more confidence'."),
      mc("6. What have the teachers done as a result?", ["Nothing.", "Redesigned the second half of the course around integration.", "Removed integration entirely.", "Shortened the course."], 1, "'we've redesigned the second half of the course around integration'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en esta primera mitad del curso que te resulte más útil", p2: "dos imágenes del aprendizaje combinado (alguien estudiando estructuras gramaticales aisladas con tarjetas y dos personas conversando con fluidez en inglés): comentadlas y decidid cuál representa mejor el aprendizaje genuinamente eficaz", p3: "qué es más eficaz para dominar una lengua a nivel C2 (la práctica aislada de estructuras, la combinación integrada de recursos, la exposición auténtica constante, el feedback específico y regular, la práctica cronometrada bajo presión): comentadlo y decidid lo más eficaz" }),

    SUMMARY("Resumen de la Semana 7 (C2) — Mitad del curso", [
      "Has completado la PRIMERA MITAD del curso C2 (35/60 días): condicionales/inversión (S1-S2), elipsis/cláusulas nominales/discurso reportado (S3-S4), y conectores institucionales/idioms/falsos amigos (S5-S6), todo combinado con fluidez.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes y el Speaking P1-P3 con temas de salud pública, tecnología, trabajo/vocación y arte.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene (S8): modalidad avanzada (hedging, stance epistémico) y recursos retóricos (ironía, litotes, understatement), con el hilo del periodismo y la opinión.",
    ]),
    INFO("Mini-simulacro de la Semana 7", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 8."),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "Repaso integral (Semanas 1-6) · Salud pública, tecnología, vocación profesional y arte",
  description: "Repaso integral combinando toda la gramática de las Semanas 1-6 (condicionales/inversión, elipsis/cláusulas nominales/discurso reportado, conectores institucionales/idioms/falsos amigos) en los mismos textos, con el hilo de la salud pública, la tecnología/privacidad, el trabajo/vocación profesional y el arte/creatividad. Cada día, las 4 destrezas con el formato real del C2. Día 35 cierra la primera mitad del curso.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
