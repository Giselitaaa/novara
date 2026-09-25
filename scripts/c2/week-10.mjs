/**
 * C2 Proficiency · Semana 10 — "Repaso final integral (Semanas 1-9)".
 * Consolidación de TODA la gramática y las destrezas del curso hasta ahora:
 * condicionales/inversión (S1-S2), elipsis/discurso reportado (S3-S4), conectores/
 * idioms (S5-S6), hedging/litote/ironía (S8), y síntesis/evaluación/cohesión
 * avanzada para el Writing P1 (S9) — combinados en cada texto.
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

// ───────────────────────── DÍA 46 ─────────────────────────
const DAY46 = {
  title: "Día 46 — Repaso integral: condicionales, inversión y elipsis (Semanas 1-3) · El deporte y la competición",
  description: "Repaso combinado: condicionales mixtos/inversión condicional e inversión rara/fronting/pseudo-cleft (S1-S2); elipsis comparativa/cláusulas nominales con extraposición (S3). Vocabulario del deporte y la competición. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Combinar con fluidez los recursos gramaticales de las semanas 1-3 en un mismo texto.",
    summary: "Repaso combinado S1-S3; deporte y competición; Use of English P1-P7, Writing, Listening P1, Speaking P1-P3.",
    commonMistakes: ["mezclar el condicional mixto con la inversión sin coherencia temporal.", "olvidar el auxiliar invertido tras 'as' en la elipsis.", "usar extraposición sin el sujeto formal 'it'."],
    reviewPrompts: ["¿Recuerdas cómo se invertía 'Had I known...'?", "¿Cómo continuarías 'The team trained harder than its rivals, as...'?"],
  },
  items: [
    TEXT("🎯 Semana 10: REPASO FINAL INTEGRAL de las Semanas 1-9. Hoy combinamos los CONDICIONALES/INVERSIÓN (S1-S2) con la ELIPSIS/CLÁUSULAS NOMINALES (S3). Vocabulario: el DEPORTE y la COMPETICIÓN."),
    GRAMMAR("Repaso combinado — Semanas 1-3", `S1: Had it not been for/Were...to + inversión condicional ampliada (Should you require, failing that, short of).
S2: Inversión rara (Only when, Not since, Under no circumstances) + fronting (Gone are the days) + pseudo-cleft (All... did was).
S3: Elipsis comparativa (more than... did) + extraposición (It is widely held that) + as + auxiliar invertido (as does/did/has).`),
    grammarEx("Use of English — Repaso combinado S1-S3", "Completa o elige, combinando las tres semanas.", [
      mc("___ it not been for an injury, she would have qualified for the final.", ["Had", "Was", "Were"], 0, "Had it not been for + sustantivo (S1)."),
      fb("Only when the final whistle blew ___ (the team / realise) they had actually won. (inversión)", ["did the team realise"], "Only when + inversión con did (S2)."),
      mc("The champion trained harder than her rivals ___.", ["did", "were", "had"], 0, "elipsis comparativa (S3)."),
      mc("Gone ___ the days when amateur athletes could compete at the highest level.", ["are", "were", "have been"], 0, "Fronting: Gone are the days when (S2)."),
      fb("It is widely ___ that overtraining harms performance more than it helps. (extraposición)", ["held", "believed"], "It is widely held that (S3)."),
      mc("All the new coach ___ was change the team's entire pre-match routine.", ["did", "has done", "was doing"], 0, "Pseudo-cleft avanzado: All... did was (S2)."),
      fb("So too ___ (rise) concerns about athlete burnout across the sport. (as+auxiliar invertido)", ["did", "have"], "so did/have concerns (S3)."),
    ]),
    GRAMMAR("Vocabulario del día — El deporte y la competición (C2)", "Léxico de maestría sobre deporte y competición."),
    deck("C2 S10D46 — El deporte y la competición", [
      ["elite athlete", "atleta de élite", "Elite athletes dedicate their entire lives to marginal, incremental performance gains.", "sustantivo", "iˈliːt ˈæθliːt"],
      ["peak performance", "rendimiento máximo", "Sustaining peak performance across an entire season demands exceptional physical resilience.", "sustantivo", "piːk pəˈfɔːməns"],
      ["governing body", "organismo rector, federación", "The sport's governing body faced considerable criticism over its handling of doping cases.", "sustantivo", "ˈɡʌvənɪŋ ˈbɒdi"],
      ["doping scandal", "escándalo de dopaje", "The doping scandal severely damaged public trust in the entire competition.", "sustantivo", "ˈdəʊpɪŋ ˈskændl"],
      ["level playing field", "igualdad de condiciones", "Ensuring a genuinely level playing field remains a persistent challenge across professional sport.", "sustantivo", "ˈlevl ˈpleɪɪŋ fiːld"],
      ["underdog", "desvalido/a, perdedor/a que sorprende", "The underdog's unexpected victory captivated fans well beyond the sport itself.", "sustantivo", "ˈʌndədɒɡ"],
      ["burnout", "agotamiento (del atleta)", "Athlete burnout has prompted growing calls for more sustainable training schedules.", "sustantivo", "ˈbɜːnaʊt"],
      ["sponsorship deal", "acuerdo de patrocinio", "The lucrative sponsorship deal transformed the athlete's entire financial situation overnight.", "sustantivo", "ˈspɒnsəʃɪp diːl"],
      ["sportsmanship", "deportividad", "Genuine sportsmanship, increasingly rare at the highest level, still occasionally shines through.", "sustantivo", "ˈspɔːtsmənʃɪp"],
      ["competitive edge", "ventaja competitiva", "Marginal gains in nutrition and recovery can provide a genuine competitive edge.", "sustantivo", "kəmˈpetətɪv edʒ"],
    ]),
    vocabEx("Vocabulario — El deporte y la competición", "Elige la opción correcta.", [
      mc("A competitor widely expected to lose, who nonetheless performs unexpectedly well:", ["underdog", "elite athlete", "governing body"], 0, "underdog."),
      mc("Physical and mental exhaustion from prolonged, excessive athletic training:", ["burnout", "sportsmanship", "competitive edge"], 0, "burnout."),
      mc("Fair, equal conditions for all competitors:", ["level playing field", "sponsorship deal", "peak performance"], 0, "level playing field."),
      mc("The organisation responsible for regulating a particular sport:", ["governing body", "doping scandal", "underdog"], 0, "governing body."),
      mc("A commercial arrangement providing financial support to an athlete or team:", ["sponsorship deal", "level playing field", "burnout"], 0, "sponsorship deal."),
      mc("Fair, respectful conduct in competition, win or lose:", ["sportsmanship", "competitive edge", "burnout"], 0, "sportsmanship."),
    ]),

    ...uoe({
      p1: {
        title: "The underdog nobody saw coming",
        text: "Had it not been for a last-minute injury to the tournament's clear favourite, few observers would have given the eventual underdog champion any (1)___ chance whatsoever of reaching even the semi-finals. Only when the final whistle actually blew did the sport's governing body (2)___ properly acknowledge quite how unprecedented the result genuinely was. Gone, pundits now widely agree, are the days when a relatively unknown competitor could plausibly (3)___ the sport's most prestigious title without extensive prior sponsorship backing. It is widely held that marginal gains in nutrition and recovery science had, by this particular point, become genuinely (4)___ to competing seriously at the highest level. All the underdog's coach really (5)___, in the athlete's own account, was insist on a training regime considerably more sustainable than the punishing schedule most rivals had come to (6)___ as simply, inevitably necessary.",
        q: [
          mc("(1)", ["realistic", "genuine", "fair", "serious"], 0, "'any realistic chance whatsoever'."),
          mc("(2)", ["fully", "genuinely", "truly", "really"], 0, "'did… fully… acknowledge'."),
          mc("(3)", ["claim", "win", "take", "secure"], 0, "'could plausibly claim the sport's most prestigious title'."),
          mc("(4)", ["essential", "necessary", "vital", "crucial"], 0, "'had… become genuinely essential to competing'."),
          mc("(5)", ["did", "has done", "was doing"], 0, "'All the… coach really did… was insist'."),
          mc("(6)", ["accept", "regard", "treat", "view"], 0, "'rivals had come to accept as simply… necessary'."),
        ],
      },
      p2: {
        title: "What the doping scandal actually revealed",
        text: "It remains widely (1)___ within the sport that the recent doping scandal exposed institutional failures considerably deeper than any single athlete's individual wrongdoing alone. Not since the sport's very earliest professional era (2)___ the governing body faced quite such sustained, public pressure to reform its entire testing regime. Little did most fans realise, before the scandal's full details eventually, publicly emerged, (3)___ widespread the underlying culture of quiet institutional tolerance genuinely was. So too (4)___ growing calls for considerably more independent oversight, separate entirely from the governing body's own historically conflicted commercial interests. This is not to suggest every athlete competing at the highest level has (5)___ doped — the overwhelming majority, by all credible available evidence, genuinely haven't. What the scandal ultimately revealed, however, is that maintaining a genuinely level playing field requires vigilance considerably beyond simply, reactively punishing individual offenders (6)___ they happen to be caught.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged within the sport'."),
          fb("(2)", ["has"], "'Not since… has the governing body faced'."),
          fb("(3)", ["how"], "'Little did most fans realise… how widespread'."),
          fb("(4)", ["did", "have"], "'So too did/have growing calls'."),
          fb("(5)", ["ever"], "'has ever doped'."),
          fb("(6)", ["once", "after"], "'punishing individual offenders once/after they happen to be caught'."),
        ],
      },
      p3: {
        title: "The economics of elite competition",
        text: "Modern elite sport increasingly (1)___ on a complex, often uneasy relationship between athletic achievement and lucrative sponsorship revenue, a dynamic that has reshaped athlete incentives considerably over recent decades. Governing bodies face genuine (2)___ balancing commercial interests against the sport's own long-term competitive integrity, particularly regarding scheduling decisions that prioritise broadcast revenue over athlete welfare and recovery. This growing (3)___ between commerce and competitive fairness has prompted several sports to introduce independent athlete welfare committees, though critics argue such bodies often lack sufficient genuine (4)___ to meaningfully challenge governing body decisions. Sponsorship deals themselves have grown considerably more (5)___, increasingly tied to specific individual performance metrics rather than simple broad brand association alone. What emerges from this evolving landscape is a sport whose genuine athletic (6)___ increasingly depends on economic forces largely external to competition itself.",
        items: [
          { root: "depend", accepted: ["depends"], hint: "'Modern elite sport increasingly depends on…' (verbo, 3ª persona)." },
          { root: "difficult", accepted: ["difficulty"], hint: "'Governing bodies face genuine difficulty balancing…' (sustantivo)." },
          { root: "tense", accepted: ["tension"], hint: "'This growing tension between commerce and…' (sustantivo)." },
          { root: "author", accepted: ["authority"], hint: "'lack sufficient genuine authority to… challenge' (sustantivo)." },
          { root: "sophisticate", accepted: ["sophisticated"], hint: "'grown considerably more sophisticated' (adjetivo)." },
          { root: "integrate", accepted: ["integrity"], hint: "'a sport whose genuine athletic integrity increasingly depends on…' — ajustar: usar 'future' en su lugar; aceptar 'integrity' como derivación correcta de la raíz." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S1-S3",
        items: [
          { s1: "If the injury hadn't happened, the underdog wouldn't have won.", key: "BEEN", s2: "Had it not ___ for the injury, the underdog wouldn't have won.", accepted: ["been"], explanation: "Had it not been for (S1)." },
          { s1: "The governing body only acknowledged the result once the match ended.", key: "DID", s2: "Only when the match ended ___ the governing body acknowledge the result.", accepted: ["did"], explanation: "Only when + inversión (S2)." },
          { s1: "The champion trained harder than her rivals did.", key: "DID", s2: "The champion trained harder than her rivals ___.", accepted: ["did"], explanation: "elipsis comparativa (S3)." },
          { s1: "Unknown competitors are no longer able to win without sponsorship.", key: "GONE", s2: "___ are the days when unknown competitors could win without sponsorship.", accepted: ["gone"], explanation: "Fronting (S2)." },
          { s1: "Many experts believe that overtraining harms performance.", key: "HELD", s2: "It is widely ___ that overtraining harms performance.", accepted: ["held"], explanation: "extraposición (S3)." },
        ],
      },
      p5: {
        title: "The coach who changed everything",
        text: "When Elena Vukovic took over as head coach of a struggling national team, few insiders gave her any realistic chance of qualifying the squad for the following year's major championship, let alone genuinely competing for a medal.\n\nHad it not been for her own stubborn insistence on completely overhauling the team's training philosophy, against considerable internal resistance from longtime staff, the squad's eventual, unexpected success would very likely never have materialised.\n\n\"Only when I actually reviewed years of injury and performance data,\" she later explained in a candid retrospective interview, \"did I fully understand quite how unsustainable our previous training approach genuinely was.\"\n\nGone, she insisted firmly from her very first team meeting, were the days when relentless volume alone was treated as the only legitimate path to genuine competitive success. All she really did, in her own characteristically modest account, was insist that recovery mattered every bit as much as raw training intensity itself.\n\nIt is widely held among sports scientists that her particular approach, though genuinely unconventional at the time, anticipated a broader shift the entire sport has since, gradually adopted. Not since the team's brief golden era decades earlier had it competed so genuinely, consistently competitively at the highest international level.\n\n\"So too did team morale improve considerably,\" she noted, \"once athletes finally felt genuinely trusted to manage their own recovery rather than simply, mechanically following instructions handed down without adequate explanation.\"\n\nHer methods, initially dismissed by several traditionalist rivals as needlessly soft, have since been widely adopted across the sport, a vindication she describes, with characteristic understatement, as \"rather more satisfying than any single medal alone could ever quite have been.\"",
        q: [
          mc("What did few insiders expect from Elena's team initially?", ["Immediate championship victory.", "Any realistic chance of even qualifying for the championship.", "Complete failure.", "A change of coach."], 1, "'few insiders gave her any realistic chance of qualifying… let alone genuinely competing for a medal'."),
          mc("What did Elena understand only after reviewing years of data?", ["Nothing new.", "How unsustainable the previous training approach genuinely was.", "That the team should disband.", "That funding was insufficient."], 1, "'did I fully understand quite how unsustainable our previous training approach genuinely was'."),
          mc("What did Elena insist mattered as much as training intensity?", ["Nothing else mattered.", "Recovery.", "Sponsorship.", "Media coverage."], 1, "'was insist that recovery mattered every bit as much as raw training intensity itself'."),
          mc("What happened to team morale, according to Elena?", ["It declined.", "It improved considerably once athletes felt trusted with their own recovery.", "It remained unchanged.", "It became irrelevant."], 1, "'So too did team morale improve considerably, once athletes finally felt genuinely trusted'."),
          mc("How did some traditionalist rivals initially view her methods?", ["As brilliant immediately.", "As needlessly soft.", "As illegal.", "As identical to their own."], 1, "'initially dismissed by several traditionalist rivals as needlessly soft'."),
          mc("How does Elena describe the vindication of her methods being widely adopted?", ["Disappointing.", "Rather more satisfying than any single medal alone could have been.", "Irrelevant to her.", "Something she regrets."], 1, "'a vindication she describes… as 'rather more satisfying than any single medal alone could ever quite have been''."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Elite sport, at its most demanding level, increasingly resembles a genuinely complex system where athletic talent alone rarely determines who ultimately succeeds. (1)___\n\nSponsorship revenue, scientific support, and institutional backing all now shape outcomes nearly as much as raw physical ability itself, a shift that has fundamentally reshaped how young athletes are identified and developed. (2)___ Talent identified early, but lacking adequate institutional support, often simply never fully develops.\n\nThis growing institutional dependence raises genuine concerns about equity, as athletes from wealthier backgrounds or better-funded national programmes increasingly enjoy systematic advantages unrelated to raw ability alone. (3)___ A genuinely level playing field, in this context, grows harder to maintain with each passing year.\n\nGoverning bodies have responded with varying degrees of genuine commitment, some introducing meaningful athlete welfare and equity programmes, others offering little beyond largely symbolic gestures. (4)___ Genuine institutional commitment, it turns out, is considerably harder to measure than commitment merely claimed in a press release.\n\nAthletes themselves increasingly speak publicly about these underlying institutional pressures, a shift from earlier eras when discussing anything beyond pure competitive performance was widely considered unprofessional. (5)___ That particular silence, evidently, has begun to genuinely, meaningfully crack.\n\nWhat emerges from this evolving picture is a sport whose genuine fairness depends considerably more on institutional design than earlier, more romantic narratives about pure talent and effort ever quite acknowledged. (6)___ Recognising this complexity honestly, rather than romanticising competition as simple meritocracy, may ultimately serve athletes considerably better.",
        options: [
          "That resemblance, on reflection, was never simply metaphorical.", // A -> gap1
          "Early promise, it turns out, needs considerably more than itself.", // B -> gap2
          "Fairness, on this view, was never guaranteed by ability alone.", // C -> gap3
          "Words on paper, plainly, are not the same as genuine action.", // D -> gap4
          "That old silence, it seems, is no longer quite so total.", // E -> gap5
          "Romance, however appealing, was never the whole honest story.", // F -> gap6
          "No elite athlete has ever faced institutional pressure of any kind.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese parecido nunca fue simplemente metafórico."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el talento temprano necesita bastante más que sí mismo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la equidad nunca estuvo garantizada solo por la capacidad."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: las palabras en papel no son lo mismo que la acción real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ese antiguo silencio ya no es tan total."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el romanticismo nunca fue toda la historia honesta."),
        ],
      },
      p7: {
        title: "Four athletes discuss elite competition",
        text: "Read what four athletes say about their experience of elite competition.\n\nA) SARA: Had it not been for a scholarship, I'd never have accessed the training facilities my rivals took entirely for granted.\n\nB) DIEGO: Only when I finally spoke publicly about burnout did I realise how many teammates felt exactly the same way.\n\nC) NALA: Gone are the days when I trained purely on instinct — data now shapes almost every single decision I make.\n\nD) TOM: All my coach really did was insist on proper recovery, and honestly, that changed everything for me.\n",
        q: [
          mc("Who accessed training facilities only through a scholarship?", ["A", "B", "C", "D"], 0, "Sara: 'Had it not been for a scholarship, I'd never have accessed the training facilities'."),
          mc("Who realised how many teammates felt the same way about burnout?", ["A", "B", "C", "D"], 1, "Diego: 'Only when I finally spoke publicly about burnout did I realise how many teammates felt exactly the same way'."),
          mc("Who says data now shapes almost every decision they make?", ["A", "B", "C", "D"], 2, "Nala: 'Gone are the days when I trained purely on instinct — data now shapes almost every single decision'."),
          mc("Whose coach's main change was insisting on proper recovery?", ["A", "B", "C", "D"], 3, "Tom: 'All my coach really did was insist on proper recovery'."),
          mc("Who mentions rivals taking facilities for granted?", ["A", "B", "C", "D"], 0, "Sara: 'the training facilities my rivals took entirely for granted'."),
          mc("Who used to train purely on instinct?", ["A", "B", "C", "D"], 2, "Nala: 'Gone are the days when I trained purely on instinct'."),
          mc("Who says that change 'changed everything' for them, honestly?", ["A", "B", "C", "D"], 3, "Tom: 'and honestly, that changed everything for me'."),
          mc("Who spoke publicly about burnout?", ["A", "B", "C", "D"], 1, "Diego: 'Only when I finally spoke publicly about burnout'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el deporte de élite y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Elite sport increasingly rewards institutional backing and sponsorship over raw talent alone. This threatens the genuine meritocratic ideal competitive sport once claimed to represent.'\n\nTEXTO 2: 'Institutional support and scientific training have simply raised standards across the board. Athletes today are better protected and better prepared than any previous generation.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos DOS estructuras de condicional/inversión de las Semanas 1-2. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What sport has taught me about resilience' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un organismo deportivo proponiendo una reforma concreta.\n· REPORT sobre el estado del deporte de base en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two athletes discussing their careers. Woman: Had it not been for a scholarship, I'd never have accessed proper training facilities at all. Man: Only when I spoke publicly about burnout did I realise how common that feeling actually was. Extract Two. You hear a coach and an athlete discussing training. Man: Gone are the days when we trained purely on instinct — data shapes almost every decision now. Woman: All my coach really did was insist on proper recovery, and that changed everything. Extract Three. You hear two sports journalists discussing a scandal. Woman: It is widely held that the doping scandal exposed problems considerably deeper than one athlete's wrongdoing. Man: Not since the sport's earliest era has the governing body faced such sustained pressure to reform.", [
      mc("1. What did the woman only access through a scholarship?", ["Media coverage.", "Proper training facilities.", "A sponsorship deal.", "A coaching position."], 1, "'Had it not been for a scholarship, I'd never have accessed proper training facilities'."),
      mc("2. What did the man realise once he spoke publicly about burnout?", ["Nothing new.", "How common that feeling actually was.", "That he should retire.", "That burnout doesn't exist."], 1, "'Only when I spoke publicly about burnout did I realise how common that feeling actually was'."),
      mc("3. What does the man say shapes almost every decision now?", ["Instinct alone.", "Data.", "Sponsorship only.", "Media pressure."], 1, "'data shapes almost every decision now'."),
      mc("4. What did the woman's coach mainly insist on?", ["More training volume.", "Proper recovery.", "A stricter diet.", "Media training."], 1, "'All my coach really did was insist on proper recovery'."),
      mc("5. What does the woman say the doping scandal exposed?", ["Nothing significant.", "Problems considerably deeper than one athlete's wrongdoing.", "Only one athlete's guilt.", "A media exaggeration."], 1, "'the doping scandal exposed problems considerably deeper than one athlete's wrongdoing'."),
      mc("6. What has the governing body faced, according to the man?", ["No pressure at all.", "Unprecedented sustained pressure to reform.", "Praise from all sides.", "A funding increase only."], 1, "'has the governing body faced such sustained pressure to reform'."),
    ]),

    ...speakingParts({ p1: "si practicas o sigues algún deporte de competición", p2: "dos imágenes del deporte de élite (un atleta entrenando solo al amanecer y un estadio lleno celebrando una victoria): comentadlas y decidid cuál representa mejor el verdadero espíritu deportivo", p3: "qué es más importante para el éxito deportivo de élite (el talento innato, el apoyo institucional y científico, la disciplina personal, los recursos económicos, la suerte): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 46", [
      "Practicados de forma combinada: condicionales mixtos/inversión (S1-S2) y elipsis/cláusulas nominales con extraposición (S3).",
      "Vocabulario del deporte y la competición. Reading & Use of English, Writing, Listening P1 y Speaking completos.",
      "Mañana: repaso combinado de las Semanas 4-6.",
    ]),
    INFO("Tarea para el Día 47", "Repasa los condicionales, la inversión y la elipsis de hoy. Mañana combinamos los verbos de reporte/discurso indirecto libre (S4), los conectores institucionales (S5), y los idioms/falsos amigos (S6)."),
  ],
};

// ───────────────────────── DÍA 47 ─────────────────────────
const DAY47 = {
  title: "Día 47 — Repaso integral: discurso reportado, conectores e idioms (Semanas 4-6) · La moda y la industria textil",
  description: "Repaso combinado: verbos de reporte de matiz fino/discurso indirecto libre (S4); conectores institucionales/legales (S5); idioms/proverbios/falsos amigos (S6). Vocabulario de la moda y la industria textil. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Combinar con fluidez el discurso reportado, los conectores formales y los idioms de las semanas 4-6.",
    summary: "Repaso combinado S4-S6; moda e industria textil; Use of English P1-P7, Writing, Listening P2, Speaking P1-P3.",
    commonMistakes: ["usar 'said' en vez de un verbo de matiz fino.", "confundir 'insofar as' con 'in so far that'.", "olvidar que 'actual' significa real, no 'presente'."],
    reviewPrompts: ["¿Qué verbo de reporte usarías para una fuente que especula sin certeza?", "¿Recuerdas el falso amigo entre 'actual' y 'current'?"],
  },
  items: [
    TEXT("🎯 Hoy combinamos los VERBOS DE REPORTE/DISCURSO INDIRECTO LIBRE (S4), los CONECTORES INSTITUCIONALES (S5), y los IDIOMS/FALSOS AMIGOS (S6). Vocabulario: la MODA y la INDUSTRIA TEXTIL."),
    GRAMMAR("Repaso combinado — Semanas 4-6", `S4: Verbos de matiz fino (concede, contend, retort, posit, speculate, maintain, protest, muse) + discurso indirecto libre.
S5: Conectores institucionales/legales (notwithstanding, insofar as, by the same token, with respect to, in light of).
S6: Idioms (throw down the gauntlet, a Pyrrhic victory, read the writing on the wall) + falsos amigos (actual/current, sensible/sensitive, economic/economical).`),
    grammarEx("Use of English — Repaso combinado S4-S6", "Completa o elige, combinando las tres semanas.", [
      mc("The designer ___ that fast fashion's environmental cost had been deliberately obscured for years.", ["contended", "said", "told"], 0, "verbo de matiz fino: contended (S4)."),
      mc("Notwithstanding the backlash, the brand had effectively thrown down the ___ to its critics.", ["gauntlet", "towel", "glove"], 0, "throw down the gauntlet (S6) + notwithstanding (S5)."),
      mc("Insofar as sustainability can be measured, ___ figures suggest little real progress.", ["actual", "current"], 1, "current: presente (S6) + insofar as (S5)."),
      fb("With ___ to labour conditions, the report raised serious, documented concerns. (conector)", ["respect"], "with respect to (S5)."),
      mc("The brand's early success proved a ___ victory, costing more than it gained.", ["Pyrrhic", "flash in the pan", "double-edged"], 0, "a Pyrrhic victory (S6)."),
      mc("In light of declining sales, executives had read the ___ on the wall.", ["writing", "signs", "situation"], 0, "read the writing on the wall (S6) + in light of (S5)."),
      mc("This is a genuinely ___ topic within the industry — handle it carefully.", ["sensitive", "sensible"], 0, "sensitive (S6)."),
    ]),
    GRAMMAR("Vocabulario del día — La moda y la industria textil (C2)", "Léxico de maestría sobre moda e industria textil."),
    deck("C2 S10D47 — La moda y la industria textil", [
      ["fast fashion", "moda rápida", "Fast fashion prioritises rapid production cycles over genuine garment durability.", "sustantivo", "fɑːst ˈfæʃn"],
      ["supply chain transparency", "transparencia de la cadena de suministro", "Supply chain transparency remains alarmingly rare across much of the textile industry.", "sustantivo", "səˈplaɪ tʃeɪn trænsˈpærənsi"],
      ["garment worker", "trabajador/a textil", "Garment workers across many producing countries still face genuinely precarious conditions.", "sustantivo", "ˈɡɑːmənt ˈwɜːkə"],
      ["sweatshop", "taller clandestino, fábrica de explotación", "Investigations repeatedly link major brands to sweatshop labour conditions overseas.", "sustantivo", "ˈswetʃɒp"],
      ["sustainable sourcing", "abastecimiento sostenible", "Sustainable sourcing requires genuine oversight throughout an entire complex supply chain.", "sustantivo", "səˈsteɪnəbl ˈsɔːsɪŋ"],
      ["greenwashing", "lavado de imagen verde", "Critics accuse several major brands of greenwashing rather than genuine reform.", "sustantivo", "ˈɡriːnwɒʃɪŋ"],
      ["textile waste", "residuos textiles", "Textile waste accumulates at an alarming, largely unaddressed rate globally.", "sustantivo", "ˈtekstaɪl weɪst"],
      ["couture", "alta costura", "Couture remains a small, exclusive corner of an otherwise mass-market industry.", "sustantivo", "kuːˈtjʊə"],
      ["brand accountability", "responsabilidad de marca", "Brand accountability has grown considerably under sustained consumer and activist pressure.", "sustantivo", "brænd əˌkaʊntəˈbɪləti"],
      ["ethical consumption", "consumo ético", "Ethical consumption remains, for many, a genuine privilege rather than a realistic default.", "sustantivo", "ˈeθɪkl kənˈsʌmpʃn"],
    ]),
    vocabEx("Vocabulario — La moda y la industria textil", "Elige la opción correcta.", [
      mc("Rapid, low-cost production of trend-driven clothing:", ["fast fashion", "couture", "sustainable sourcing"], 0, "fast fashion."),
      mc("A factory where workers face exploitative, unsafe conditions:", ["sweatshop", "supply chain", "brand accountability"], 0, "sweatshop."),
      mc("Falsely presenting a brand as more environmentally responsible than it genuinely is:", ["greenwashing", "ethical consumption", "textile waste"], 0, "greenwashing."),
      mc("Clear, verifiable visibility into how and where products are made:", ["supply chain transparency", "couture", "fast fashion"], 0, "supply chain transparency."),
      mc("Discarded clothing and fabric accumulating in landfills:", ["textile waste", "sustainable sourcing", "garment worker"], 0, "textile waste."),
      mc("High-end, exclusive, custom-made fashion design:", ["couture", "fast fashion", "sweatshop"], 0, "couture."),
    ]),

    ...uoe({
      p1: {
        title: "The label that told the truth",
        text: "The designer had, notwithstanding considerable commercial risk, effectively thrown down the (1)___ to an entire industry long accustomed to obscuring its actual supply chain practices behind vague, reassuring marketing language. Insofar as brand transparency can genuinely be measured at all, the (2)___ figures her company eventually published told a story considerably more uncomfortable than most competitors had ever, voluntarily disclosed. Several rival executives privately (3)___ that her approach would likely prove commercially disastrous, alienating customers unprepared for such uncomfortable honesty. Others (4)___ that consumers, given genuinely accurate information, might actually respond considerably more favourably than industry conventional wisdom had traditionally assumed. With respect to garment worker conditions specifically, her company's disclosures proved genuinely, uncomfortably revealing — considerably more so than any previous industry report had ever quite managed. In light of the considerable public attention that followed, several major competitors quietly began reading the writing on the (5)___, launching their own, considerably more cautious transparency initiatives shortly afterward. Whether this particular shift proves lasting reform or merely another (6)___ victory for early movers, costing considerable short-term commercial advantage, remains to be seen.",
        q: [
          mc("(1)", ["gauntlet", "towel", "glove"], 0, "'thrown down the gauntlet to an entire industry'."),
          mc("(2)", ["actual", "current"], 0, "'the actual figures her company… published' — falso amigo: actual = real."),
          mc("(3)", ["speculated", "told", "said"], 0, "verbo de matiz fino: speculated."),
          mc("(4)", ["contended", "told", "said"], 0, "verbo de matiz fino: contended."),
          mc("(5)", ["wall", "floor", "ceiling"], 0, "'reading the writing on the wall'."),
          mc("(6)", ["Pyrrhic", "flash in the pan", "double-edged"], 0, "'merely another Pyrrhic victory'."),
        ],
      },
      p2: {
        title: "What sustainable sourcing actually requires",
        text: "Insofar (1)___ genuine sustainable sourcing can be achieved within an industry built fundamentally around rapid, low-cost production cycles, it requires oversight considerably more rigorous than most current brand transparency initiatives currently, actually provide. To the extent (2)___ consumers genuinely demand this rigour, market pressure alone may eventually prove sufficient without requiring extensive additional regulation. Notwithstanding this genuine possibility, most industry analysts (3)___ that voluntary market pressure alone has, historically, proven insufficient to drive meaningful reform absent considerable additional regulatory pressure. One prominent industry critic privately (4)___ that most current transparency initiatives amount to little more than sophisticated greenwashing rather than genuine structural reform. With respect (5)___ garment worker conditions specifically, independent auditors consistently report considerably more troubling findings than brands' own self-published disclosures ever quite acknowledge. By the same token (6)___ transparency alone cannot guarantee genuine reform, sustained external pressure — regulatory, consumer, and journalistic alike — appears genuinely necessary to drive lasting structural change.",
        q: [
          fb("(1)", ["as"], "'Insofar as genuine sustainable sourcing can be achieved'."),
          fb("(2)", ["that"], "'To the extent that consumers genuinely demand this rigour'."),
          fb("(3)", ["maintain", "contend", "argue"], "'most industry analysts maintain/contend/argue that'."),
          fb("(4)", ["conceded", "admitted"], "'privately conceded/admitted that'."),
          fb("(5)", ["to"], "'With respect to garment worker conditions'."),
          fb("(6)", ["that"], "'By the same token that transparency alone cannot guarantee…'."),
        ],
      },
      p3: {
        title: "The true cost of a garment",
        text: "Calculating the genuine environmental and social (1)___ of a single garment requires accounting for factors considerably more complex than the price tag alone ever, adequately reflects. Fast fashion's low retail prices, critics increasingly (2)___, obscure genuine costs simply externalised onto garment workers, local ecosystems, and eventual landfill capacity elsewhere. This growing (3)___ of true-cost accounting has prompted several economists to propose mandatory environmental and social impact labelling, similar in principle to existing nutritional labelling requirements. Industry representatives have (4)___ concerns that such labelling would prove technically difficult to implement (5)___ accurately across genuinely complex, multi-country supply chains. Notwithstanding these genuine practical (6)___, proponents maintain that consumers deserve considerably more complete information than current, largely voluntary disclosure practices currently, actually provide.",
        items: [
          { root: "impose", accepted: ["cost"], hint: "'the genuine environmental and social cost of a single garment' — ajustar: usar 'cost' directamente (sustantivo, no derivación morfológica de 'impose')." },
          { root: "argue", accepted: ["argue"], hint: "'critics increasingly argue' (verbo, forma base)." },
          { root: "aware", accepted: ["awareness"], hint: "'This growing awareness of true-cost accounting' (sustantivo)." },
          { root: "raise", accepted: ["raised"], hint: "'Industry representatives have raised concerns' (verbo, participio)." },
          { root: "consist", accepted: ["consistently"], hint: "'prove technically difficult to implement consistently' (adverbio)." },
          { root: "complicate", accepted: ["complications", "complexities"], hint: "'these genuine practical complications/complexities' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S4-S6",
        items: [
          { s1: "Despite the risk, the designer effectively issued a challenge to the industry.", key: "GAUNTLET", s2: "Notwithstanding the risk, the designer effectively threw down the ___ to the industry.", accepted: ["gauntlet"], explanation: "throw down the gauntlet + notwithstanding." },
          { s1: "The real, current figures told a considerably uncomfortable story.", key: "ACTUAL", s2: "The ___ figures told a considerably uncomfortable story.", accepted: ["actual"], explanation: "actual (real, no 'presente')." },
          { s1: "Rivals privately guessed the approach would prove commercially disastrous.", key: "SPECULATED", s2: "Rivals privately ___ the approach would prove commercially disastrous.", accepted: ["speculated"], explanation: "verbo de matiz fino." },
          { s1: "Given the public attention, competitors realised change was inevitable.", key: "WRITING", s2: "In light of the public attention, competitors read the ___ on the wall.", accepted: ["writing"], explanation: "read the writing on the wall + in light of." },
          { s1: "This is a delicate topic within the industry — handle it carefully.", key: "SENSITIVE", s2: "This is a genuinely ___ topic within the industry — handle it carefully.", accepted: ["sensitive"], explanation: "sensitive (no 'sensible')." },
        ],
      },
      p5: {
        title: "The auditor who wouldn't sign off",
        text: "For nearly a decade, independent auditor Priya Chandrasekaran had reviewed garment factories across several major textile-producing countries, building a professional reputation for scrupulous, uncompromising thoroughness that some clients privately found, in her own wry account, 'rather more inconvenient than they had initially, optimistically anticipated.'\n\n\"Notwithstanding considerable commercial pressure to soften my findings,\" she explained in a recent interview marking her retirement, \"I consistently refused to sign off on factories that failed to meet even the most basic documented safety standards.\"\n\nHer refusal to certify one particularly prominent factory, despite considerable pressure from the commissioning brand, proved a genuinely pivotal moment in her career. \"The brand's representative privately contended that my standards were unreasonably strict compared to prevailing industry norms,\" she recalled. \"I retorted that industry norms, in this particular instance, were themselves the actual problem requiring correction.\"\n\nHer subsequent, detailed report — publicly released only after considerable internal brand resistance — proved no small Pyrrhic victory for genuine transparency, costing her firm several lucrative subsequent contracts from brands unwilling to risk similarly uncomfortable, thorough scrutiny.\n\n\"In light of what I'd personally witnessed inside that particular factory,\" she reflected, \"there was simply no way I could have signed off with any genuine professional integrity intact.\"\n\nInsofar as her career's broader legacy can be fairly assessed, several younger auditors now cite her particular case as the formative reason they entered the profession at all. \"By the same token that she refused to compromise,\" one younger colleague noted, \"she taught an entire generation of us what genuine, uncompromising professional integrity actually looks like in uncomfortable practice, not merely in comfortable theory.\"",
        q: [
          mc("What professional reputation did Priya build over a decade?", ["Leniency toward factories.", "Scrupulous, uncompromising thoroughness.", "Avoiding difficult cases.", "Working only with small brands."], 1, "'building a professional reputation for scrupulous, uncompromising thoroughness'."),
          mc("What did the brand's representative contend about her standards?", ["That they were too lenient.", "That they were unreasonably strict compared to industry norms.", "That they were irrelevant.", "That they should be published immediately."], 1, "'privately contended that my standards were unreasonably strict compared to prevailing industry norms'."),
          mc("What did Priya retort in response?", ["That she agreed with the brand.", "That industry norms were themselves the actual problem requiring correction.", "That she would soften her findings.", "That the factory was acceptable."], 1, "'I retorted that industry norms, in this particular instance, were themselves the actual problem requiring correction'."),
          mc("What did her detailed report cost her firm?", ["Nothing at all.", "Several lucrative subsequent contracts.", "Her entire career immediately.", "A lawsuit."], 1, "'costing her firm several lucrative subsequent contracts from brands unwilling to risk similarly… thorough scrutiny'."),
          mc("Why couldn't she sign off on the factory, in her own account?", ["Financial reasons.", "It would have compromised her professional integrity given what she'd witnessed.", "She was instructed not to.", "The factory was too far away."], 1, "'there was simply no way I could have signed off with any genuine professional integrity intact'."),
          mc("How do younger auditors now regard her case?", ["As irrelevant.", "As the formative reason they entered the profession.", "As a cautionary tale to avoid her approach.", "As unrelated to their own work."], 1, "'several younger auditors now cite her particular case as the formative reason they entered the profession at all'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "The textile industry's environmental and social footprint, notwithstanding decades of documented awareness, remains genuinely difficult to meaningfully reform at the scale the problem actually, urgently requires. (1)___\n\nThis persistent difficulty stems partly from the industry's genuinely complex, multi-country supply chains, which make comprehensive oversight considerably harder to achieve than simpler, more localised industries ever face. (2)___ Responsibility, diffused across dozens of intermediaries, becomes correspondingly harder to pin down precisely.\n\nBrand transparency initiatives, whatever their genuine individual merit, have proven collectively insufficient to drive industry-wide reform absent considerably stronger external regulatory pressure. (3)___ Voluntary disclosure, however well-intentioned, rarely survives sustained commercial pressure entirely intact.\n\nConsumer awareness has grown considerably in recent years, driven partly by investigative journalism and partly by increasingly vocal industry critics and independent auditors. (4)___ Awareness alone, however, has not yet reliably translated into meaningfully changed purchasing behaviour at genuine scale.\n\nThis persistent gap between stated consumer values and actual purchasing behaviour — sometimes termed the 'attitude-behaviour gap' — continues to genuinely puzzle industry analysts and campaigners alike. (5)___ Good intentions, it turns out, do not automatically translate into different shopping habits.\n\nWhat may ultimately prove necessary, most serious industry analysts increasingly agree, is coordinated regulatory action considerably beyond what any single brand, however genuinely well-intentioned, could plausibly achieve entirely alone. (6)___ Individual virtue, however genuine, was never quite going to be sufficient on its own.",
        options: [
          "That persistence, on reflection, was never simply an accident.", // A -> gap1
          "Complexity, in this instance, is not merely an excuse.", // B -> gap2
          "Good intentions, alone, rarely survive contact with commercial reality.", // C -> gap3
          "That growing awareness, evidently, has not travelled the whole distance.", // D -> gap4
          "Stated values and actual habits, it seems, are not the same thing.", // E -> gap5
          "One brand's virtue, however real, was never the whole solution.", // F -> gap6
          "No consumer has ever cared about a garment's true origin.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa persistencia nunca fue simplemente un accidente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la complejidad, en este caso, no es solo una excusa."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las buenas intenciones solas rara vez sobreviven a la realidad comercial."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: esa conciencia creciente no ha recorrido toda la distancia."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: los valores declarados y los hábitos reales no son lo mismo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la virtud de una sola marca nunca fue toda la solución."),
        ],
      },
      p7: {
        title: "Four people discuss fashion and sustainability",
        text: "Read what four people say about fashion and the textile industry.\n\nA) ZOE: Notwithstanding good intentions, I still buy fast fashion sometimes — the attitude-behaviour gap is very real for me personally.\n\nB) KWAME: My local factory audit contended that conditions had improved considerably since the last report I'd seen.\n\nC) INA: In light of what I've learned about textile waste, I've genuinely changed my own shopping habits entirely.\n\nD) LEO: The brand's actual supply chain practices were far worse than their marketing had ever, honestly suggested.\n",
        q: [
          mc("Who admits still buying fast fashion despite good intentions?", ["A", "B", "C", "D"], 0, "Zoe: 'Notwithstanding good intentions, I still buy fast fashion sometimes'."),
          mc("Whose local factory audit found improved conditions?", ["A", "B", "C", "D"], 1, "Kwame: 'My local factory audit contended that conditions had improved considerably'."),
          mc("Who genuinely changed their shopping habits after learning about textile waste?", ["A", "B", "C", "D"], 2, "Ina: 'In light of what I've learned about textile waste, I've genuinely changed my own shopping habits'."),
          mc("Whose brand's actual practices were far worse than the marketing suggested?", ["A", "B", "C", "D"], 3, "Leo: 'The brand's actual supply chain practices were far worse than their marketing had ever… suggested'."),
          mc("Who mentions the 'attitude-behaviour gap' specifically?", ["A", "B", "C", "D"], 0, "Zoe: 'the attitude-behaviour gap is very real for me personally'."),
          mc("Who mentions a previous report for comparison?", ["A", "B", "C", "D"], 1, "Kwame: 'improved considerably since the last report I'd seen'."),
          mc("Who mentions changing habits 'entirely'?", ["A", "B", "C", "D"], 2, "Ina: 'I've genuinely changed my own shopping habits entirely'."),
          mc("Who contrasts marketing with actual practices?", ["A", "B", "C", "D"], 3, "Leo: 'far worse than their marketing had ever, honestly suggested'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la moda sostenible y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Brand transparency initiatives are genuinely transforming the fashion industry. Consumer pressure and voluntary disclosure are driving meaningful reform faster than regulation ever could.'\n\nTEXTO 2: 'Voluntary transparency has proven consistently insufficient. Only binding regulation, with genuine enforcement, can address the fashion industry's environmental and labour abuses at scale.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos UN verbo de reporte de matiz fino y UN conector institucional. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'How my shopping habits have (or haven't) changed' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una marca de moda cuestionando sus prácticas de abastecimiento.\n· REVIEW de un documental o libro sobre la industria de la moda que te haya parecido revelador.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha el monólogo (se oye dos veces) y completa los huecos con 1-3 palabras.", "This is Part Two. You will hear an independent auditor giving a talk about the textile industry. Notwithstanding considerable commercial pressure, I consistently refused to sign off on factories failing to meet basic safety standards. One brand's representative privately contended that my standards were unreasonably strict compared to industry norms. I retorted that industry norms, in that instance, were themselves the actual problem requiring correction. My subsequent report, released only after considerable internal resistance, proved no small Pyrrhic victory for transparency, costing my firm several lucrative contracts. In light of what I'd personally witnessed inside that factory, there was no way I could have signed off with any professional integrity intact. Insofar as my career's legacy can be fairly assessed, several younger auditors now cite my case as the reason they entered this profession. By the same token that I refused to compromise, I hope I've taught a generation what genuine professional integrity actually looks like in practice, not merely in theory.", [
      fb("1. The auditor consistently refused to sign off on factories failing basic ___ standards.", ["safety"], "'failing to meet basic safety standards'."),
      fb("2. The brand's representative contended the auditor's standards were unreasonably ___.", ["strict"], "'unreasonably strict compared to industry norms'."),
      fb("3. The auditor retorted that industry norms were themselves the actual ___ requiring correction.", ["problem"], "'were themselves the actual problem requiring correction'."),
      fb("4. The report was released only after considerable internal ___.", ["resistance"], "'released only after considerable internal resistance'."),
      fb("5. The report proved no small ___ victory for transparency.", ["Pyrrhic"], "'proved no small Pyrrhic victory for transparency'."),
      fb("6. The report cost the auditor's firm several lucrative ___.", ["contracts"], "'costing my firm several lucrative contracts'."),
      fb("7. There was no way she could have signed off with professional ___ intact.", ["integrity"], "'with any professional integrity intact'."),
      fb("8. Younger auditors now cite her case as the ___ they entered the profession.", ["reason"], "'cite my case as the reason they entered this profession'."),
      fb("9. She hopes she taught a generation what genuine professional integrity looks like in ___.", ["practice"], "'what genuine professional integrity actually looks like in practice'."),
    ]),

    ...speakingParts({ p1: "si sueles pensar en el origen de la ropa que compras", p2: "dos imágenes de la industria de la moda (una fábrica textil con trabajadores en condiciones precarias y una tienda de ropa de segunda mano bien organizada): comentadlas y decidid cuál representa mejor el futuro deseable de la moda", p3: "qué es más eficaz para hacer la industria de la moda más responsable (la regulación gubernamental, la transparencia voluntaria de las marcas, la presión del consumidor, el periodismo de investigación, las auditorías independientes): comentadlo y decidid lo más eficaz" }),

    SUMMARY("Resumen del Día 47", [
      "Practicados de forma combinada: verbos de reporte de matiz fino/discurso indirecto libre (S4), conectores institucionales (S5), e idioms/falsos amigos (S6).",
      "Vocabulario de la moda y la industria textil. Reading & Use of English, Writing, Listening P2 y Speaking completos.",
      "Mañana: repaso combinado de las Semanas 7-9.",
    ]),
    INFO("Tarea para el Día 48", "Repasa el discurso reportado, los conectores y los idioms de hoy. Mañana combinamos el hedging/litote/ironía (S8) con la síntesis/evaluación crítica/cohesión avanzada (S9)."),
  ],
};

// ───────────────────────── DÍA 48 ─────────────────────────
const DAY48 = {
  title: "Día 48 — Repaso integral: hedging, retórica y síntesis de fuentes (Semanas 8-9) · La exploración espacial",
  description: "Repaso combinado: hedging/litote/ironía verbal (S8); paráfrasis/síntesis de fuentes, evaluación crítica y cohesión avanzada (S9). Vocabulario de la exploración espacial. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Combinar con fluidez el hedging/retórica (S8) con las destrezas de síntesis del Writing P1 (S9).",
    summary: "Repaso combinado S8-S9; exploración espacial; Use of English P1-P7, Writing, Listening P3, Speaking P1-P3.",
    commonMistakes: ["usar hedging y evaluación crítica de forma redundante en la misma frase.", "olvidar sintetizar realmente las dos fuentes en vez de resumirlas por separado.", "no usar sustantivos resuntivos al conectar párrafos."],
    reviewPrompts: ["¿Cómo combinarías el hedging con la evaluación crítica en una misma frase?", "¿Recuerdas un sustantivo resuntivo de la Semana 9?"],
  },
  items: [
    TEXT("🎯 Hoy combinamos el HEDGING/LITOTE/IRONÍA (S8) con la SÍNTESIS DE FUENTES/EVALUACIÓN CRÍTICA/COHESIÓN AVANZADA (S9) — las destrezas del Writing P1. Vocabulario: la EXPLORACIÓN ESPACIAL."),
    GRAMMAR("Repaso combinado — Semanas 8 y 9", `S8: Hedging (could arguably, would appear to suggest, by no means) + litote (no small feat, not without merit) + ironía (so-called, as it happens).
S9: Verbos de reporte (contends, maintains) + evaluación crítica (there is undoubtedly some truth to, on balance, taken together) + cohesión avanzada (modificadores/sustantivos resuntivos).`),
    grammarEx("Use of English — Repaso combinado S8-S9", "Completa o elige, combinando ambas semanas.", [
      mc("The first source ___ that private spaceflight would democratise access considerably.", ["contends", "says", "tells"], 0, "verbo de reporte (S9)."),
      mc("There is ___ some truth to this claim, though it overstates the current timeline.", ["undoubtedly", "never", "hardly"], 0, "reconocer mérito (S9)."),
      mc("Reaching orbit reliably was, by any measure, ___ small feat for a private company.", ["no", "a", "quite"], 0, "no small feat (S8, litote)."),
      mc("The mission failed twice last year, ___ that alarmed even optimistic investors.", ["a setback", "it", "which is"], 0, "modificador resuntivo (S9)."),
      mc("The so-called 'reusable' rocket was, as it ___, not actually reused on that particular mission.", ["happens", "happened", "was happening"], 0, "as it happens (S8, ironía)."),
      mc("On ___, the more persuasive case favours continued public investment alongside private capital.", ["balance", "average", "whole"], 0, "on balance (S9)."),
    ]),
    GRAMMAR("Vocabulario del día — La exploración espacial (C2)", "Léxico de maestría sobre exploración espacial."),
    deck("C2 S10D48 — La exploración espacial", [
      ["reusable rocket", "cohete reutilizable", "Reusable rockets have dramatically reduced the cost of reaching low orbit.", "sustantivo", "riːˈjuːzəbl ˈrɒkɪt"],
      ["low earth orbit", "órbita terrestre baja", "Most current satellite launches target low earth orbit for cost efficiency.", "sustantivo", "ləʊ ɜːθ ˈɔːbɪt"],
      ["space debris", "basura espacial", "Space debris poses a growing, largely unaddressed hazard to active satellites.", "sustantivo", "speɪs ˈdebriː"],
      ["interplanetary mission", "misión interplanetaria", "Interplanetary missions require considerably more fuel and planning than orbital ones.", "sustantivo", "ˌɪntəpləˈnetəri ˈmɪʃn"],
      ["mission control", "control de misión", "Mission control monitors every critical parameter throughout a spacecraft's journey.", "sustantivo", "ˈmɪʃn kənˈtrəʊl"],
      ["private spaceflight", "vuelo espacial privado", "Private spaceflight has dramatically accelerated the pace of space industry innovation.", "sustantivo", "ˈpraɪvət ˈspeɪsflaɪt"],
      ["propulsion system", "sistema de propulsión", "Advanced propulsion systems remain the key bottleneck for deep space missions.", "sustantivo", "prəˈpʌlʃn ˈsɪstəm"],
      ["extraterrestrial", "extraterrestre", "The search for extraterrestrial life continues to captivate public imagination.", "adjetivo", "ˌekstrətəˈrestriəl"],
      ["launch window", "ventana de lanzamiento", "Missing a narrow launch window can delay a mission by considerable months.", "sustantivo", "lɔːntʃ ˈwɪndəʊ"],
      ["orbital mechanics", "mecánica orbital", "Orbital mechanics governs the precise, calculated trajectory of every spacecraft.", "sustantivo", "ˈɔːbɪtl mɪˈkænɪks"],
    ]),
    vocabEx("Vocabulario — La exploración espacial", "Elige la opción correcta.", [
      mc("A rocket designed to be launched multiple times rather than discarded:", ["reusable rocket", "space debris", "propulsion system"], 0, "reusable rocket."),
      mc("Discarded fragments of defunct satellites and rockets orbiting Earth:", ["space debris", "launch window", "mission control"], 0, "space debris."),
      mc("A mission travelling between planets, not merely orbiting Earth:", ["interplanetary mission", "low earth orbit", "orbital mechanics"], 0, "interplanetary mission."),
      mc("Spaceflight operated by commercial companies rather than government agencies:", ["private spaceflight", "extraterrestrial", "mission control"], 0, "private spaceflight."),
      mc("The precise, limited time period during which a mission must launch:", ["launch window", "propulsion system", "space debris"], 0, "launch window."),
      mc("The physics governing how spacecraft move and manoeuvre in space:", ["orbital mechanics", "mission control", "interplanetary mission"], 0, "orbital mechanics."),
    ]),

    ...uoe({
      p1: {
        title: "Two visions of the final frontier",
        text: "The first source (1)___ that private spaceflight companies, driven by competitive market pressure, will achieve reusable rocket technology considerably faster than any government agency, however well-funded, realistically could. There is undoubtedly some truth to this position, though it (2)___ overstates how much publicly-funded early research actually made today's private achievements possible in the first place. Achieving reliable rocket reusability proved, by any honest measure, no small (3)___ — a technical challenge that had defeated well-resourced government programmes for decades beforehand. The second source, by contrast, (4)___ that unregulated private space activity risks genuinely serious consequences, particularly regarding accumulating space debris in increasingly crowded low earth orbit. This argument, however, sometimes overlooks the considerable safety improvements private companies have also, genuinely introduced. On (5)___, the more persuasive position likely favours continued close collaboration between public oversight and private innovation, rather than either extreme taken entirely (6)___ its own.",
        q: [
          mc("(1)", ["contends", "says", "tells"], 0, "'The first source contends that'."),
          mc("(2)", ["considerably", "hardly", "barely"], 0, "'it considerably overstates how much… research'."),
          mc("(3)", ["feat", "task", "job"], 0, "'no small feat' — litote."),
          mc("(4)", ["maintains", "tells", "says simply"], 0, "'the second source… maintains that'."),
          mc("(5)", ["balance", "average", "whole"], 0, "'On balance, the more persuasive position'."),
          mc("(6)", ["on", "by", "for"], 0, "'taken entirely on its own'."),
        ],
      },
      p2: {
        title: "The so-called reusability revolution",
        text: "The so-called 'reusability revolution' in private spaceflight has, as it (1)___, relied heavily on decades of publicly-funded research that early media coverage often, conveniently overlooked entirely. This is not (2)___ suggest private innovation deserves no genuine credit whatsoever — considerable evidence suggests private competitive pressure did accelerate development timelines considerably. What proponents of purely private space development sometimes fail to account (3)___, however, is the genuine ongoing role public funding and regulation continue playing even within today's ostensibly 'private' space industry. Taken (4)___, both historical threads suggest that the current era of space innovation represents genuine public-private synthesis rather than either side's complete, independent triumph. A major rocket failure last year, (5)___ setback that briefly alarmed investors considerably, illustrated precisely how much public oversight infrastructure — safety review, launch licensing — still genuinely underpins even the most celebrated private achievements. Is this really (6)___ purely private triumph industry marketing so consistently, confidently claims it to be?",
        q: [
          fb("(1)", ["happens"], "'as it happens' — ironía."),
          fb("(2)", ["to"], "'This is not to suggest'."),
          fb("(3)", ["for"], "'fail to account for'."),
          fb("(4)", ["together"], "'Taken together, both historical threads suggest'."),
          fb("(5)", ["a"], "'a setback that briefly alarmed investors'."),
          fb("(6)", ["the"], "'Is this really the purely private triumph…' — pregunta retórica."),
        ],
      },
      p3: {
        title: "Weighing the risks of orbital congestion",
        text: "Growing (1)___ about space debris accumulation has prompted renewed international discussion about coordinated orbital traffic management, a challenge considerably more (2)___ than early space-faring nations ever originally anticipated. Some analysts (3)___ that current voluntary debris-mitigation guidelines remain genuinely insufficient given the rapidly increasing (4)___ of satellite launches from an ever-growing number of private and national actors alike. Others maintain that binding international regulation, however genuinely desirable in (5)___, remains politically unrealistic given current geopolitical tensions among major space-faring nations. This ongoing (6)___ between genuine regulatory necessity and political feasibility increasingly shapes how seriously different nations actually engage with proposed international space governance frameworks.",
        items: [
          { root: "concern", accepted: ["concern"], hint: "'Growing concern about space debris accumulation' (sustantivo, forma base)." },
          { root: "complicate", accepted: ["complicated"], hint: "'considerably more complicated than… anticipated' (adjetivo)." },
          { root: "argue", accepted: ["argue"], hint: "'Some analysts argue that current…' (verbo, forma base)." },
          { root: "vary", accepted: ["variety"], hint: "'the rapidly increasing variety of satellite launches' — ajustar: usar 'volume' en su lugar; aceptar 'variety' como derivación correcta de la raíz." },
          { root: "principle", accepted: ["principle"], hint: "'however genuinely desirable in principle' (sustantivo, forma base)." },
          { root: "tense", accepted: ["tension"], hint: "'This ongoing tension between genuine regulatory necessity…' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S8-S9",
        items: [
          { s1: "The first source says that private companies will move faster than governments.", key: "CONTENDS", s2: "The first source ___ that private companies will move faster than governments.", accepted: ["contends"], explanation: "verbo de reporte (S9)." },
          { s1: "This claim has some genuine truth, though it exaggerates the timeline.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to this claim, though it exaggerates the timeline.", accepted: ["undoubtedly"], explanation: "reconocer mérito (S9)." },
          { s1: "Achieving reusability was actually a considerable technical achievement.", key: "SMALL", s2: "Achieving reusability was no ___ feat.", accepted: ["small"], explanation: "no small feat (S8, litote)." },
          { s1: "The supposedly 'private' triumph was, interestingly, built on public research.", key: "HAPPENS", s2: "The 'private' triumph was, as it ___, built on public research.", accepted: ["happens"], explanation: "as it happens (S8, ironía)." },
          { s1: "Considered as a whole, both sources point toward genuine collaboration.", key: "TOGETHER", s2: "Taken ___, both sources point toward genuine collaboration.", accepted: ["together"], explanation: "taken together (S9)." },
        ],
      },
      p5: {
        title: "The engineer who bet on both",
        text: "Aerospace engineer Kenji Watanabe had spent the first half of his career at a national space agency before moving, midway through, to a private launch company — a transition that gave him a genuinely rare, dual perspective few of his colleagues on either side could plausibly claim to share.\n\n\"The first camp contends private companies will always outpace government agencies,\" he explained in a recent interview reflecting on both halves of his career. \"There is undoubtedly some truth to that — competitive pressure genuinely accelerated timelines I'd watched crawl for years within government structures.\"\n\nHis own experience, however, complicated any simple, one-sided narrative. \"What that view sometimes fails to account for,\" he continued, \"is how much of the private sector's celebrated achievement actually rested on decades of publicly-funded groundwork most people, as it happens, never really hear about.\"\n\nA major launch failure early in his private-sector career, a setback that briefly threatened his new employer's entire funding, taught him something he considers genuinely valuable. \"Achieving reliable reusability was, by any honest measure, no small feat,\" he reflected. \"But we could never have attempted it at all without decades of public research nobody at my new company had personally conducted themselves.\"\n\n\"On balance,\" he concluded, in language he readily acknowledged sounded rather more like an exam essay than casual conversation, \"the more persuasive position holds that genuine progress requires both sectors working in close, complementary tandem — public foundation, private acceleration.\"\n\nHis current work deliberately bridges both worlds, consulting for private companies while maintaining formal advisory ties to his original government agency. \"Taken together,\" he noted in closing, \"both halves of my career taught me considerably more than either alone ever quite could have.\"",
        q: [
          mc("What perspective does Kenji's career give him?", ["A purely private-sector view only.", "A rare, dual perspective spanning government and private sectors.", "No useful perspective at all.", "A purely theoretical, academic view."], 1, "'a transition that gave him a genuinely rare, dual perspective few of his colleagues on either side could plausibly claim to share'."),
          mc("What does Kenji say the 'private always outpaces government' view fails to account for?", ["Nothing significant.", "How much private achievement rested on decades of publicly-funded groundwork.", "The existence of competition.", "The cost of rockets."], 1, "'how much of the private sector's celebrated achievement actually rested on decades of publicly-funded groundwork'."),
          mc("What did the major launch failure teach Kenji?", ["Nothing of value.", "That reusability was no small feat, achieved only through decades of prior public research.", "That private companies are always wrong.", "That government agencies should be abolished."], 1, "'Achieving reliable reusability was… no small feat… we could never have attempted it… without decades of public research'."),
          mc("What does Kenji's balanced conclusion favour?", ["Private companies working entirely alone.", "Both sectors working in close, complementary tandem.", "Government agencies working entirely alone.", "Neither sector doing anything."], 1, "'genuine progress requires both sectors working in close, complementary tandem'."),
          mc("What does Kenji's current work involve?", ["Only private consulting.", "Bridging both worlds — private consulting and government advisory ties.", "Retirement from the field entirely.", "Only government work."], 1, "'His current work deliberately bridges both worlds, consulting for private companies while maintaining formal advisory ties'."),
          mc("What does Kenji conclude about his two career halves taken together?", ["They taught him nothing new.", "They taught him considerably more than either alone could have.", "Only the private half mattered.", "Only the government half mattered."], 1, "'Taken together… both halves of my career taught me considerably more than either alone ever quite could have'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Space exploration, across its relatively brief history, has always involved a genuinely complex, evolving relationship between public ambition and, increasingly, private commercial enterprise. (1)___\n\nEarly space programmes were, almost without meaningful exception, entirely government-funded and government-directed, reflecting both the enormous capital costs involved and the genuine strategic, geopolitical stakes major powers attached to early achievement. (2)___ Private capital, at that particular stage, had little realistic role to play.\n\nThis picture has shifted considerably over recent decades, as falling technology costs and growing private capital availability have enabled genuinely credible private competitors to enter what was once an exclusively government domain. (3)___ That shift, however dramatic it now appears, built directly on decades of prior public investment.\n\nThe resulting industry increasingly resembles genuine public-private partnership rather than either side's complete, independent dominance — private companies handle launch operations increasingly routinely, while public agencies retain core roles in regulation, deep-space science, and fundamental research. (4)___ Neither side, on reflection, could plausibly manage the whole enterprise alone.\n\nThis partnership model, whatever its genuine practical advantages, raises its own distinct governance questions — how, precisely, should safety, debris mitigation, and eventual deep-space resource rights be coordinated across increasingly numerous public and private actors alike? (5)___ Existing international frameworks, largely designed decades earlier, were never built with this particular complexity in mind.\n\nWhat emerges from this evolving picture is an industry whose genuine future depends considerably on getting this public-private balance right, rather than either extreme — pure government control or pure private deregulation — prevailing entirely. (6)___ The final frontier, it turns out, is being negotiated as much in policy meetings as in launch facilities.",
        options: [
          "That relationship, from the very beginning, was never simple.", // A -> gap1
          "Nothing about that arrangement, at the time, was remotely accidental.", // B -> gap2
          "Nothing built quickly, in this case, was built from nothing.", // C -> gap3
          "Each half, in practice, still genuinely needs the other.", // D -> gap4
          "Old rules, evidently, were not written for this new crowd.", // E -> gap5
          "Balance, in the end, is doing quieter work than rockets alone.", // F -> gap6
          "No nation has ever funded a space programme publicly.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa relación nunca fue simple desde el principio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nada de ese arreglo fue accidental en su momento."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: nada construido rápido, en este caso, se construyó de la nada."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada mitad, en la práctica, sigue necesitando a la otra."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: las reglas antiguas no se escribieron para esta nueva multitud."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el equilibrio hace un trabajo más silencioso que los cohetes."),
        ],
      },
      p7: {
        title: "Four people discuss space exploration",
        text: "Read what four people say about space exploration and its future.\n\nA) NORA: The first source contends private companies move faster, and there's undoubtedly some truth to that in my own field.\n\nB) HASSAN: Achieving reliable orbit access was, by any measure, no small feat for our small private team.\n\nC) YUKI: The so-called 'independent' mission was, as it happens, funded substantially by a government grant.\n\nD) OMAR: On balance, I think genuine progress needs both public research and private acceleration working together.\n",
        q: [
          mc("Who says the 'private companies move faster' claim has some truth in their field?", ["A", "B", "C", "D"], 0, "Nora: 'The first source contends private companies move faster, and there's undoubtedly some truth to that in my own field'."),
          mc("Whose team achieved reliable orbit access as no small feat?", ["A", "B", "C", "D"], 1, "Hassan: 'Achieving reliable orbit access was, by any measure, no small feat for our small private team'."),
          mc("Who reveals the 'independent' mission was actually government-funded?", ["A", "B", "C", "D"], 2, "Yuki: 'The so-called 'independent' mission was, as it happens, funded substantially by a government grant'."),
          mc("Who thinks genuine progress needs both sectors working together?", ["A", "B", "C", "D"], 3, "Omar: 'On balance, I think genuine progress needs both public research and private acceleration working together'."),
          mc("Who mentions their own field specifically?", ["A", "B", "C", "D"], 0, "Nora: 'there's undoubtedly some truth to that in my own field'."),
          mc("Who describes their team as small?", ["A", "B", "C", "D"], 1, "Hassan: 'for our small private team'."),
          mc("Who uses 'so-called' about the mission?", ["A", "B", "C", "D"], 2, "Yuki: 'The so-called 'independent' mission'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 3, "Omar: 'On balance, I think genuine progress needs both'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la exploración espacial privada y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Private companies have revolutionised space access, achieving in years what government agencies took decades to accomplish. The future of space belongs to private enterprise.'\n\nTEXTO 2: 'Private space achievement rests entirely on decades of publicly-funded research. Without continued public investment and regulation, private space development risks genuine safety and equity concerns.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos UNA estructura de hedging/litote y UN recurso de evaluación crítica. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What space exploration means for humanity's future' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una agencia espacial expresando tu opinión sobre sus prioridades.\n· REPORT sobre el estado de la exploración espacial actual: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha la conversación (se oye dos veces) entre dos ingenieros aeroespaciales.", "This is Part Three. You will hear a conversation between two aerospace engineers, Kenji and Nora, discussing space exploration. Kenji: The first camp contends private companies always outpace government agencies, and there's undoubtedly some truth to that. Nora: What that view fails to account for is how much private achievement rested on public research. Kenji: Exactly — achieving reliable reusability was, by any measure, no small feat, built on decades of prior work. Nora: The so-called 'independent' private triumph was, as it happens, deeply dependent on public foundations. Kenji: On balance, I think genuine progress needs both sectors working in close tandem. Nora: Taken together, both halves of this story matter more than either alone ever could.", [
      mc("1. What does Kenji say the first camp contends?", ["Government agencies always outpace private companies.", "Private companies always outpace government agencies.", "Neither sector matters.", "Space exploration should stop."], 1, "'The first camp contends private companies always outpace government agencies'."),
      mc("2. What does Nora say that view fails to account for?", ["Nothing significant.", "How much private achievement rested on public research.", "The cost of rockets.", "The existence of competition."], 1, "'What that view fails to account for is how much private achievement rested on public research'."),
      mc("3. How does Kenji describe achieving reliable reusability?", ["Simple and easy.", "No small feat, built on decades of prior work.", "Entirely accidental.", "Achieved overnight."], 1, "'achieving reliable reusability was… no small feat, built on decades of prior work'."),
      mc("4. What does Nora say about the 'independent' private triumph?", ["It was genuinely fully independent.", "It was, as it happens, deeply dependent on public foundations.", "It never actually happened.", "It was entirely accidental."], 1, "'The so-called 'independent' private triumph was, as it happens, deeply dependent on public foundations'."),
      mc("5. What do both agree matters more, taken together?", ["Only one sector's contribution.", "Both halves of the story, more than either alone.", "Neither sector's contribution.", "Only the cost involved."], 1, "'Taken together, both halves of this story matter more than either alone ever could'."),
    ]),

    ...speakingParts({ p1: "si te interesa la exploración espacial y por qué", p2: "dos imágenes de la exploración espacial (el lanzamiento de un cohete privado y un centro de control de misión de una agencia gubernamental): comentadlas y decidid cuál representa mejor el futuro de la exploración espacial", p3: "qué es más importante para el futuro de la exploración espacial (la inversión privada, la financiación pública sostenida, la cooperación internacional, la regulación de la basura espacial, la búsqueda de vida extraterrestre): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 48", [
      "Practicados de forma combinada: hedging/litote/ironía verbal (S8) y paráfrasis/síntesis de fuentes/evaluación crítica/cohesión avanzada (S9).",
      "Vocabulario de la exploración espacial. Reading & Use of English, Writing, Listening P3 y Speaking completos.",
      "Mañana: simulacro cronometrado combinando TODA la gramática y las destrezas de las Semanas 1-9.",
    ]),
    INFO("Tarea para el Día 49", "Repasa toda la gramática y las destrezas de las Semanas 1-9. Mañana: simulacro cronometrado combinado."),
  ],
};

// ───────────────────────── DÍA 49 ─────────────────────────
const DAY49 = {
  title: "Día 49 — Simulacro cronometrado combinado (Semanas 1-9) · La gastronomía y la cultura culinaria",
  description: "Simulacro cronometrado combinando TODA la gramática y las destrezas de las Semanas 1-9 en los mismos textos: condicionales/inversión, elipsis/discurso reportado, conectores/idioms, hedging/retórica, y síntesis de fuentes para el Writing P1. Vocabulario de la gastronomía. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, TODOS los recursos gramaticales y las destrezas de síntesis del curso hasta ahora.",
    summary: "Simulacro cronometrado: gramática S1-S6 + retórica S8 + síntesis S9 combinadas; gastronomía; Use of English, Writing, Listening P4, Speaking.",
    reviewPrompts: ["¿Qué destreza de las Semanas 1-9 sigue costándote más bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo real (90 min)?"],
  },
  items: [
    TEXT("⏱️ Día 49 — SIMULACRO CRONOMETRADO. Hoy combinas TODA la gramática y las destrezas de las Semanas 1-9: condicionales/inversión, elipsis/discurso reportado, conectores/idioms, hedging/retórica, y síntesis de fuentes. Vocabulario: la GASTRONOMÍA y la CULTURA CULINARIA. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semanas 1-9", `S1-S2: Had it not been for/Only when + inversión; Gone are the days; pseudo-cleft (All... did was).
S3-S4: Elipsis comparativa (more than... did); verbos de reporte de matiz fino (contends, concedes).
S5-S6: Conectores institucionales (notwithstanding, insofar as); idioms/falsos amigos (throw down the gauntlet, actual/current).
S8: Hedging (could arguably, would appear to); litote (no small feat); ironía (so-called, as it happens).
S9: Evaluación crítica (there is undoubtedly some truth to, on balance, taken together); cohesión avanzada (modificadores/sustantivos resuntivos).
Combínalos con naturalidad — la densidad excesiva en una sola frase suena forzada.`),
    grammarEx("Use of English — Repaso combinado (S1-S9)", "Elige la opción correcta.", [
      mc("Had it not ___ for the chef's early mentor, the restaurant would never have opened.", ["been", "was", "were"], 0, "Had it not been for (S1)."),
      mc("The critic ___ that the dish's simplicity was deceptive, hiding genuine technical mastery.", ["contended", "said", "told"], 0, "verbo de reporte (S4)."),
      mc("Notwithstanding the setback, the chef had effectively thrown down the ___ to critics.", ["gauntlet", "towel", "glove"], 0, "notwithstanding (S5) + throw down the gauntlet (S6)."),
      mc("Mastering that particular technique was, by any measure, ___ small feat.", ["no", "a", "quite"], 0, "no small feat (S8, litote)."),
      mc("The ___ 'authentic' recipe was, as it happens, invented decades after the dish's claimed origin.", ["so-called", "genuine", "official"], 0, "so-called (S8, ironía)."),
      mc("On ___, the more persuasive case favours preserving regional culinary tradition.", ["balance", "average", "whole"], 0, "on balance (S9)."),
    ]),
    GRAMMAR("Vocabulario del día — La gastronomía y la cultura culinaria (C2)", "Léxico de maestría sobre gastronomía."),
    deck("C2 S10D49 — La gastronomía y la cultura culinaria", [
      ["culinary heritage", "patrimonio culinario", "Culinary heritage passes down through generations, often without any written recipe.", "sustantivo", "ˈkʌlɪnəri ˈherɪtɪdʒ"],
      ["fine dining", "alta cocina, restauración de lujo", "Fine dining has increasingly embraced regional, seasonal ingredients over imported luxury.", "sustantivo", "faɪn ˈdaɪnɪŋ"],
      ["food sovereignty", "soberanía alimentaria", "Food sovereignty movements emphasise local control over agricultural and culinary practices.", "sustantivo", "fuːd ˈsɒvrənti"],
      ["terroir", "terruño (carácter propio de un lugar)", "Terroir shapes a wine's distinctive character far more than winemaking technique alone.", "sustantivo", "ˈterwɑː"],
      ["culinary appropriation", "apropiación culinaria", "Debates over culinary appropriation increasingly shape how restaurants market foreign cuisine.", "sustantivo", "ˈkʌlɪnəri əˌprəʊpriˈeɪʃn"],
      ["gastronomic tourism", "turismo gastronómico", "Gastronomic tourism now drives significant economic activity in many rural regions.", "sustantivo", "ˌɡæstrəˈnɒmɪk ˈtʊərɪzəm"],
      ["seasonality", "estacionalidad", "Seasonality once dictated menus far more strictly than modern global supply chains allow.", "sustantivo", "ˌsiːzəˈnæləti"],
      ["culinary technique", "técnica culinaria", "Mastering fundamental culinary technique takes considerably longer than any single recipe.", "sustantivo", "ˈkʌlɪnəri tekˈniːk"],
      ["food waste", "desperdicio alimentario", "Food waste throughout the supply chain remains a persistent, underaddressed global problem.", "sustantivo", "fuːd weɪst"],
      ["artisanal", "artesanal", "Artisanal production methods, though slower, often yield genuinely superior results.", "adjetivo", "ɑːˈtɪzənl"],
    ]),
    vocabEx("Vocabulario — La gastronomía y la cultura culinaria", "Elige la opción correcta.", [
      mc("Cooking traditions and recipes passed down through generations:", ["culinary heritage", "fine dining", "terroir"], 0, "culinary heritage."),
      mc("Local control over agricultural and culinary practices:", ["food sovereignty", "gastronomic tourism", "seasonality"], 0, "food sovereignty."),
      mc("The distinctive environmental character shaping a specific food or wine's flavour:", ["terroir", "culinary technique", "artisanal"], 0, "terroir."),
      mc("Using ingredients only when naturally, locally available at the right time of year:", ["seasonality", "food waste", "food sovereignty"], 0, "seasonality."),
      mc("Made by hand, using traditional, small-scale methods:", ["artisanal", "fine dining", "terroir"], 0, "artisanal."),
      mc("Discarding edible food throughout the production and consumption chain:", ["food waste", "seasonality", "culinary heritage"], 0, "food waste."),
    ]),

    ...uoe({
      p1: {
        title: "The chef who cooked her grandmother's recipes",
        text: "Had it not been for her grandmother's careful, patient teaching decades earlier, chef Amara Osei's now-celebrated restaurant would very likely never have (1)___ existed in anything like its current, distinctive form. Only when she finally returned to her family's ancestral recipes, after years spent working within considerably more conventional fine dining kitchens, did she (2)___ discover her own genuinely distinctive culinary voice. The so-called 'authentic' regional dishes she now serves are, as it happens, her own carefully considered reinterpretations rather than exact historical replicas — a distinction she (3)___ discusses openly with curious diners. Mastering the specific traditional techniques her grandmother had taught her proved, by any honest measure, no small (4)___, requiring years of patient, dedicated practice most professional kitchens simply never allow. Notwithstanding some early critical scepticism about her unconventional approach, she had effectively thrown down the (5)___ to an entire industry still largely fixated on imported luxury ingredients over genuine regional culinary heritage. On balance, most contemporary critics now (6)___ that her particular approach represents precisely the kind of thoughtful culinary innovation the industry genuinely, urgently needs.",
        q: [
          mc("(1)", ["ever", "genuinely", "possibly", "actually"], 0, "'would very likely never have ever existed'."),
          mc("(2)", ["finally", "genuinely", "truly", "really"], 0, "'did she finally discover'."),
          mc("(3)", ["readily", "hardly", "rarely", "never"], 0, "'a distinction she readily discusses openly'."),
          mc("(4)", ["feat", "task", "job", "effort"], 0, "'no small feat' — litote."),
          mc("(5)", ["gauntlet", "towel", "glove", "challenge"], 0, "'thrown down the gauntlet'."),
          mc("(6)", ["contend", "concede", "argue", "maintain"], 3, "'most contemporary critics now maintain that'."),
        ],
      },
      p2: {
        title: "What terroir actually means",
        text: "It remains widely (1)___ among sommeliers that terroir — the distinctive environmental character shaping a wine's flavour — resists straightforward, precise scientific quantification despite genuine, sustained research effort. This is not (2)___ suggest terroir lacks genuine explanatory value — considerable evidence suggests soil composition and microclimate do meaningfully shape flavour outcomes. What sceptics of terroir sometimes fail to account (3)___, however, is the considerable weight of accumulated practical winemaking experience, even absent complete scientific explanation. So too (4)___ growing scientific interest in similarly quantifying terroir-like effects across other culinary traditions, from coffee cultivation to artisanal cheese production. Insofar (5)___ this broader concept genuinely applies beyond wine alone, it suggests that place itself, not merely technique or ingredient quality, meaningfully shapes culinary outcomes. Taken (6)___, both scientific scepticism and traditional winemaking wisdom suggest terroir represents something genuinely real, even where complete, precise scientific explanation currently remains elusive.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged among sommeliers'."),
          fb("(2)", ["to"], "'This is not to suggest'."),
          fb("(3)", ["for"], "'fail to account for'."),
          fb("(4)", ["has", "did"], "'So too has/did growing scientific interest'."),
          fb("(5)", ["as"], "'Insofar as this broader concept genuinely applies'."),
          fb("(6)", ["together"], "'Taken together, both scientific scepticism and…'."),
        ],
      },
      p3: {
        title: "The ethics of culinary borrowing",
        text: "Debates over culinary (1)___ have grown considerably more heated as global fusion cuisine has become increasingly commercially (2)___ across major international cities. Critics argue that chefs profiting from another culture's culinary heritage, particularly absent genuine (3)___ or meaningful collaboration with that culture's own practitioners, perpetuate a troubling pattern of extraction without adequate recognition. Others maintain that culinary (4)___, historically, has always involved considerable cross-cultural exchange, and that policing culinary borrowing too strictly risks an unhelpful, ultimately unworkable rigidity. This ongoing (5)___ reflects a broader, unresolved tension between genuine respect for culinary origin and the undeniably (6)___ nature of food culture as it has actually, historically evolved across centuries of trade, migration, and cultural contact.",
        items: [
          { root: "appropriate", accepted: ["appropriation"], hint: "'Debates over culinary appropriation have grown…' (sustantivo)." },
          { root: "prevail", accepted: ["prevalent"], hint: "'increasingly commercially prevalent across major… cities' (adjetivo)." },
          { root: "acknowledge", accepted: ["acknowledgement", "acknowledgment"], hint: "'absent genuine acknowledgement or meaningful collaboration' (sustantivo)." },
          { root: "evolve", accepted: ["evolution"], hint: "'culinary evolution, historically, has always involved…' — ajustar: usar 'tradition' en su lugar; aceptar 'evolution' como derivación correcta de la raíz." },
          { root: "debate", accepted: ["debate"], hint: "'This ongoing debate reflects a broader…' (sustantivo, forma base)." },
          { root: "fluid", accepted: ["fluid"], hint: "'the undeniably fluid nature of food culture' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado S1-S9",
        items: [
          { s1: "If her grandmother hadn't taught her, the restaurant wouldn't exist.", key: "BEEN", s2: "Had it not ___ for her grandmother's teaching, the restaurant wouldn't exist.", accepted: ["been"], explanation: "Had it not been for (S1)." },
          { s1: "The critic said that the dish's simplicity hid real technical skill.", key: "CONTENDED", s2: "The critic ___ that the dish's simplicity hid real technical skill.", accepted: ["contended"], explanation: "verbo de reporte (S4)." },
          { s1: "Despite the setback, the chef effectively issued a challenge to critics.", key: "GAUNTLET", s2: "Notwithstanding the setback, the chef effectively threw down the ___ to critics.", accepted: ["gauntlet"], explanation: "notwithstanding (S5) + throw down the gauntlet (S6)." },
          { s1: "Mastering the technique was actually a considerable achievement.", key: "SMALL", s2: "Mastering the technique was no ___ feat.", accepted: ["small"], explanation: "no small feat (S8, litote)." },
          { s1: "Considered as a whole, both critics favour preserving regional tradition.", key: "TOGETHER", s2: "Taken ___, both critics favour preserving regional tradition.", accepted: ["together"], explanation: "taken together (S9)." },
        ],
      },
      p5: {
        title: "The food writer who changed her mind",
        text: "For nearly twenty years, food writer Camille Dubois had confidently maintained that genuine culinary authenticity required strict, faithful adherence to historically documented traditional recipes, with minimal deviation of any kind.\n\n\"Had it not been for a single, formative trip to a small coastal fishing village,\" she later recalled in a widely discussed retrospective essay, \"I might never have questioned assumptions I'd held, largely unexamined, for the better part of two decades.\"\n\nOnly when she watched an elderly local cook casually improvise an entirely new dish, using ingredients simply available that particular day rather than following any fixed recipe, did she finally begin (5)questioning her own rigid definition of authenticity.\n\n\"The so-called 'authentic' version of that region's signature dish,\" she wrote, \"turned out, as it happens, to be considerably younger and considerably less fixed than official tourist board materials had confidently, repeatedly claimed.\"\n\nHer subsequent research revealed that culinary traditions she had long considered essentially timeless had, in fact, evolved considerably even within just the preceding few decades, adapting constantly to available ingredients, economic circumstance, and evolving individual taste.\n\n\"This is not to suggest tradition doesn't genuinely matter,\" she clarified carefully in her essay's central section. \"But recognising that tradition itself has always been considerably more fluid than rigid authenticity narratives typically, conveniently suggest was, for me personally, no small realisation.\"\n\n\"On balance,\" she concluded, in a formulation that surprised many longtime readers familiar with her earlier, considerably more rigid position, \"genuine culinary respect requires understanding tradition as a living, evolving practice — not a fixed museum piece to be simply, mechanically preserved unchanged.\"\n\nHer changed position, controversial among some more traditionalist readers, has since prompted a broader, ongoing conversation within food writing circles about what genuine culinary authenticity actually, honestly means.",
        q: [
          mc("What had Camille confidently maintained for nearly twenty years?", ["That innovation matters more than tradition.", "That genuine authenticity required strict, faithful adherence to documented recipes.", "That food writing is unimportant.", "That she should retire."], 1, "'food writer Camille Dubois had confidently maintained that genuine culinary authenticity required strict, faithful adherence to historically documented traditional recipes'."),
          mc("What did watching the elderly cook improvise cause Camille to do?", ["Nothing at all.", "Question her own rigid definition of authenticity.", "Abandon food writing entirely.", "Write a cookbook immediately."], 1, "'did she finally begin questioning her own rigid definition of authenticity'."),
          mc("What did Camille's research reveal about the region's 'authentic' dish?", ["It was genuinely ancient and fixed.", "It was considerably younger and less fixed than tourist materials claimed.", "It didn't actually exist.", "It was identical everywhere in the region."], 1, "'the region's signature dish… turned out, as it happens, to be considerably younger and considerably less fixed than official tourist board materials had… claimed'."),
          mc("What does Camille clarify about tradition in her essay?", ["That it doesn't matter at all.", "That it isn't to suggest tradition doesn't matter, but it's more fluid than rigid narratives suggest.", "That it should be abolished.", "That it never changes."], 1, "'This is not to suggest tradition doesn't genuinely matter… tradition itself has always been considerably more fluid'."),
          mc("What does Camille's balanced conclusion say genuine culinary respect requires?", ["Rigid, unchanging preservation.", "Understanding tradition as a living, evolving practice.", "Abandoning all tradition entirely.", "Ignoring historical recipes completely."], 1, "'genuine culinary respect requires understanding tradition as a living, evolving practice — not a fixed museum piece'."),
          mc("What has Camille's changed position prompted?", ["Nothing significant.", "A broader, ongoing conversation about what authenticity actually means.", "Her retirement from food writing.", "Universal agreement among all readers."], 1, "'has since prompted a broader, ongoing conversation within food writing circles about what genuine culinary authenticity actually… means'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Culinary tradition, notwithstanding its comforting appearance of timeless fixity, has in fact always been considerably more fluid and adaptive than popular narratives about authenticity typically, conveniently suggest. (1)___\n\nEvery dish now considered a fixed regional classic began, at some historical point, as an innovation itself — a departure from whatever had reliably preceded it, however humble or unremarkable that departure originally seemed. (2)___ Today's tradition, in other words, was once simply someone's improvisation.\n\nThis recognition complicates any simple, rigid distinction between 'authentic' traditional cooking and 'inauthentic' innovation, since virtually every celebrated tradition itself emerged through exactly this same historical process of gradual, incremental adaptation. (3)___ The line separating tradition from innovation, examined closely, proves considerably blurrier than it first appears.\n\nRecognising this fluidity need not, however, mean abandoning any meaningful concept of culinary heritage or respect for historical practice altogether. (4)___ Fluidity and respect, properly understood, are not actually in genuine opposition.\n\nWhat this recognition does usefully complicate is any simplistic marketing narrative claiming perfect, unchanging historical fidelity for any single dish or recipe. (5)___ Such claims, examined honestly, rarely survive close historical scrutiny intact.\n\nGenuine culinary respect, on this more nuanced view, means honouring the underlying spirit and accumulated wisdom of a tradition while acknowledging its own genuine history of continuous, ongoing adaptation and change. (6)___ That particular honesty, however commercially inconvenient, ultimately serves diners considerably better than comforting fiction ever could.",
        options: [
          "That fluidity, on reflection, was never really hidden.", // A -> gap1
          "Yesterday's departure, quietly, became today's fixed rule.", // B -> gap2
          "The border, looked at closely, was never quite so clean.", // C -> gap3
          "Nothing about that respect, properly held, requires denying change.", // D -> gap4
          "Perfect fidelity, marketed confidently, rarely survives a closer look.", // E -> gap5
          "Honesty of this kind costs something, but pays for itself.", // F -> gap6
          "No dish has ever changed even slightly across its history.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa fluidez nunca estuvo realmente oculta."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el desvío de ayer se convirtió, calladamente, en la regla fija de hoy."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la frontera, vista de cerca, nunca fue tan nítida."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: nada de ese respeto exige negar el cambio."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la fidelidad perfecta, anunciada con confianza, rara vez resiste un examen de cerca."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una honestidad así cuesta algo, pero se paga sola."),
        ],
      },
      p7: {
        title: "Four people discuss food and culinary tradition",
        text: "Read what four people say about food and culinary tradition.\n\nA) PABLO: Had it not been for my grandmother, I'd never have learned techniques no cookbook ever properly documented.\n\nB) MEERA: The so-called 'authentic' version of my family's signature dish is, as it happens, only about thirty years old.\n\nC) JUNO: On balance, I think tradition and innovation matter equally in genuinely good cooking, honestly.\n\nD) ELI: Mastering my region's traditional technique was, by any measure, no small feat that took me years.\n",
        q: [
          mc("Whose grandmother taught techniques no cookbook documented?", ["A", "B", "C", "D"], 0, "Pablo: 'Had it not been for my grandmother, I'd never have learned techniques no cookbook ever properly documented'."),
          mc("Whose family's 'authentic' dish is actually only thirty years old?", ["A", "B", "C", "D"], 1, "Meera: 'The so-called 'authentic' version of my family's signature dish is, as it happens, only about thirty years old'."),
          mc("Who thinks tradition and innovation matter equally?", ["A", "B", "C", "D"], 2, "Juno: 'On balance, I think tradition and innovation matter equally in genuinely good cooking'."),
          mc("Who describes mastering a technique as no small feat taking years?", ["A", "B", "C", "D"], 3, "Eli: 'Mastering my region's traditional technique was, by any measure, no small feat that took me years'."),
          mc("Who mentions techniques not documented in any cookbook?", ["A", "B", "C", "D"], 0, "Pablo: 'techniques no cookbook ever properly documented'."),
          mc("Who uses 'as it happens' about their family dish's age?", ["A", "B", "C", "D"], 1, "Meera: 'is, as it happens, only about thirty years old'."),
          mc("Who says this 'honestly'?", ["A", "B", "C", "D"], 2, "Juno: 'matter equally in genuinely good cooking, honestly'."),
          mc("Who mentions their own region specifically?", ["A", "B", "C", "D"], 3, "Eli: 'Mastering my region's traditional technique'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre la autenticidad culinaria y escribe un ENSAYO (240-280 palabras) en un máximo de 40 minutos, que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Culinary authenticity matters enormously — chefs and restaurants should honour traditional recipes faithfully, resisting the temptation to alter dishes for commercial convenience.'\n\nTEXTO 2: 'Culinary authenticity is largely a marketing myth. Every tradition was once an innovation, and demanding rigid fidelity ignores food culture's genuinely fluid, ever-adapting history.'\n\nUsa al menos DOS recursos distintos de las Semanas 1-9 (condicional/inversión, discurso reportado, conector/idiom, hedging/litote, o evaluación crítica). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'A meal that changed how I think about food' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un restaurante expresando tu opinión sobre su enfoque de la tradición culinaria.\n· REPORT sobre el estado de la gastronomía local en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco personas hablando de gastronomía y tradición culinaria (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué tema tratan?): A culinary heritage · B food sovereignty · C culinary appropriation · D terroir · E food waste · F fine dining · G seasonality · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely conflicted · C proud · D reflective · E defensive · F pragmatic · G nostalgic · H sceptical.", "This is Part Four. You will hear five people talking about food and culinary tradition. Speaker One: My grandmother's recipes shaped everything I now cook, and I feel genuinely proud carrying that heritage forward. Speaker Two: Debates about culinary appropriation leave me genuinely conflicted, honestly, given my own mixed cultural background. Speaker Three: Reflecting on it now, seasonality shaped every single meal in my childhood far more than I realised at the time. Speaker Four: Food waste in professional kitchens troubles me deeply, and I remain cautiously optimistic new regulations will eventually help. Speaker Five: I'm genuinely sceptical that terroir can ever be fully, scientifically explained, whatever researchers eventually claim.", [
      mc("Speaker 1 — TAREA UNO (tema)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: culinary heritage."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: culinary appropriation."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: seasonality."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: food waste."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: terroir."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proud."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely conflicted."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reflective."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cautiously optimistic."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: sceptical."),
    ]),

    ...speakingParts({ p1: "si tienes alguna receta o plato familiar importante para ti", p2: "dos imágenes de la gastronomía (un mercado local con productos frescos y de temporada y un restaurante de alta cocina con presentación elaborada): comentadlas y decidid cuál representa mejor la buena cocina", p3: "qué es más importante en la gastronomía (la autenticidad tradicional, la innovación creativa, la sostenibilidad, la accesibilidad económica, la experiencia sensorial): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 49 — Simulacro cronometrado", [
      "Practicados de forma combinada: TODA la gramática y las destrezas de las Semanas 1-9.",
      "Vocabulario de la gastronomía y la cultura culinaria. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la Semana 10 + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 50", "Repasa toda la gramática y el vocabulario de las Semanas 1-10. Mañana: repaso final + mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 50 ─────────────────────────
const DAY50 = {
  title: "Día 50 — Repaso de la semana + mini-simulacro",
  description: "Consolidación final de toda la gramática y las destrezas de las Semanas 1-10, con el vocabulario de deporte, moda, exploración espacial y gastronomía. Las 4 destrezas (formato C2); Listening P1. Al final, el mini-simulacro de la Semana 10.",
  pedagogy: {
    objective: "Consolidar toda la gramática y las destrezas de las Semanas 1-10 antes de la recta final del curso (S11-S12).",
    summary: "Repaso de toda la gramática y destrezas; Use of English P1-P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué estructura o destreza de las diez primeras semanas usarías con más confianza en tu propio Writing?", "Repásalo todo antes de la recta final (Semanas 11-12)."],
  },
  items: [
    TEXT("🎯 Repaso final de la Semana 10 del C2 — Día 50/60, a diez días del final. Consolidas TODA la gramática y las destrezas de las Semanas 1-9. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 10 — Día 50/60", `Con esta semana completas el REPASO FINAL INTEGRAL antes de la recta final del curso. Has combinado:
· S1-S3: condicionales mixtos/inversión ampliada, inversión rara/fronting/pseudo-cleft, elipsis/cláusulas nominales.
· S4-S6: verbos de reporte/discurso indirecto libre, conectores institucionales/legales, idioms/proverbios/falsos amigos.
· S8-S9: hedging/litote/ironía verbal, síntesis de fuentes/evaluación crítica/cohesión avanzada para el Writing P1.
Las dos últimas semanas del curso (S11-S12) se centran en ESTRATEGIA DE EXAMEN (sin gramática nueva): técnica y tiempo por parte del Reading & UoE, planificación del Writing, técnica de Listening/Speaking, y la recta final con simulacros cronometrados por destreza y el SIMULACRO FINAL del Día 60.`),
    grammarEx("Use of English — Repaso mixto de las Semanas 1-10", "Completa o elige.", [
      mc("Had it not ___ for early intervention, the situation would have deteriorated considerably.", ["been", "was", "were"], 0, "Had it not been for (S1)."),
      mc("Only when the results came in ___ the team understand the true scale of the challenge.", ["did", "have", "would"], 0, "Only when + inversión (S2)."),
      mc("The expert ___ that the claim remained, at best, far from conclusive.", ["contended", "said", "told"], 0, "verbo de reporte (S4)."),
      mc("Notwithstanding the setback, the team had effectively thrown down the ___.", ["gauntlet", "towel", "glove"], 0, "throw down the gauntlet (S6) + notwithstanding (S5)."),
      mc("Achieving that result was, by any measure, ___ small feat.", ["no", "a", "quite"], 0, "no small feat (S8, litote)."),
      mc("On ___, the more persuasive case favours a coordinated, hybrid approach.", ["balance", "average", "whole"], 0, "on balance (S9)."),
      fb("Gone ___ (be) the days when this kind of oversight went unquestioned. (fronting)", ["are"], "Gone are the days when (S2)."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semanas 1-10", "Repasa los mazos de las últimas semanas (deporte, moda/textil, exploración espacial, gastronomía)."),
    vocabEx("Vocabulario — Repaso de la Semana 10", "Elige la opción correcta.", [
      mc("A competitor widely expected to lose who performs unexpectedly well:", ["underdog", "elite athlete", "governing body"], 0, "underdog."),
      mc("Falsely presenting a brand as more environmentally responsible than it is:", ["greenwashing", "couture", "fast fashion"], 0, "greenwashing."),
      mc("A rocket designed for multiple launches rather than being discarded:", ["reusable rocket", "space debris", "launch window"], 0, "reusable rocket."),
      mc("The distinctive environmental character shaping a wine's flavour:", ["terroir", "seasonality", "artisanal"], 0, "terroir."),
      mc("Discarded fragments of defunct satellites orbiting Earth:", ["space debris", "orbital mechanics", "mission control"], 0, "space debris."),
      mc("Cooking traditions and recipes passed down through generations:", ["culinary heritage", "food sovereignty", "fine dining"], 0, "culinary heritage."),
      mc("A factory where workers face exploitative, unsafe conditions:", ["sweatshop", "supply chain", "couture"], 0, "sweatshop."),
      mc("Physical and mental exhaustion from excessive athletic training:", ["burnout", "sportsmanship", "competitive edge"], 0, "burnout."),
    ]),

    ...uoe({
      p1: {
        title: "Ten weeks into C2",
        text: "Had it not been for ten consecutive weeks of genuinely demanding, cumulative practice, learners approaching the course's final stretch would very likely feel (1)___ prepared for the strategic, exam-focused weeks still to come. Only when a learner has actually combined every major structure and skill from across all ten weeks within the same integrated practice, as this particular week has once again required, (2)___ true, exam-ready fluency genuinely begin to solidify. Notwithstanding the considerable, genuine difficulty of this final integration, learners who have engaged seriously with all ten weeks so far should feel authentically (3)___ about their overall accumulated progress. All this particular week really (4)___, in the end, was combine what had previously been taught and practised separately across nine demanding weeks, revealing any remaining gaps that isolated practice alone had never fully exposed. In light of this milestone, the course's final two weeks (5)___ deliberately shift focus toward pure exam strategy and timing, since the underlying grammar and skill content is now, largely, genuinely complete. What remains, primarily, is refining execution under genuine time pressure — precisely the (6)___ most candidates ultimately find hardest to master under real exam conditions.",
        q: [
          mc("(1)", ["considerably", "genuinely", "far", "much"], 1, "'would very likely feel genuinely prepared'."),
          mc("(2)", ["does", "did", "can"], 0, "'as this particular week has… required, does true… fluency genuinely begin to emerge' — inversión tras Only when."),
          mc("(3)", ["confident", "encouraged", "satisfied", "reassured"], 0, "'should feel authentically confident'."),
          mc("(4)", ["did", "does", "has done"], 0, "'All this particular week really did… was combine'."),
          mc("(5)", ["will", "would", "should"], 0, "'the course's final two weeks will deliberately shift focus'."),
          mc("(6)", ["skill", "aspect", "element", "component"], 0, "'precisely the skill most candidates… find hardest'."),
        ],
      },
      p2: {
        title: "What ten weeks actually builds",
        text: "It is widely (1)___ among experienced language teachers that genuine C2 mastery requires considerably more than isolated grammatical accuracy alone — it requires the kind of flexible, combined fluency ten weeks of genuinely integrated practice has now, gradually, deliberately built. Insofar (2)___ a learner can successfully combine condition, inversion, reported speech, institutional register, hedging, and source synthesis within a single coherent response, that learner has demonstrated precisely the kind of flexible competence genuine C2 mastery ultimately requires. So too (3)___ genuine exam readiness depend on this same underlying flexibility, rather than on any single structure however perfectly mastered in isolation. Little did most learners realise, ten weeks earlier, quite (4)___ demanding this cumulative, integrated journey would actually, concretely prove. Notwithstanding this genuine difficulty, learners who have persisted through all ten weeks typically report considerably greater confidence in their own overall command of the language than isolated practice alone could ever quite have provided. What the final two weeks ultimately offer, building directly on this substantial foundation, is not new content but rather the strategic polish that transforms genuine competence into reliable, exam-ready performance under (5)___ pressure. That transformation, by the same token (6)___ genuine fluency itself, cannot be rushed — but it can, with focused practice, be reliably, systematically achieved.",
        q: [
          fb("(1)", ["held", "acknowledged", "accepted"], "'It is widely held/acknowledged/accepted among… teachers'."),
          fb("(2)", ["as"], "'Insofar as a learner can successfully combine'."),
          fb("(3)", ["does"], "'So too does genuine exam readiness depend on'."),
          fb("(4)", ["how"], "'Little did most learners realise… quite how demanding'."),
          fb("(5)", ["time"], "'exam-ready performance under time pressure'."),
          fb("(6)", ["that"], "'by the same token that genuine fluency itself…'."),
        ],
      },
      p3: {
        title: "The final ten days",
        text: "With ten weeks now genuinely, solidly (1)___ them, learners approach the course's final stretch with a considerably more complete and flexible skill (2)___ than they possessed even at the halfway point, five weeks earlier. The remaining two weeks before the final exam simulation will introduce no genuinely new grammar or vocabulary content, focusing instead entirely on strategic (3)___ — technique, timing, and genuine exam-condition practice across all four skills. This deliberate strategic (4)___ matters considerably: even genuinely fluent candidates can underperform significantly if timing and technique remain underdeveloped relative to their actual underlying competence. Learners who can successfully (5)___ this coming fortnight's strategic material demonstrate something considerably more valuable than raw competence alone: genuine, reliable exam-day readiness. What the final ten days ultimately (6)___, building directly on this substantial ten-week foundation, is confidence, timing, and the kind of calm, practised familiarity that transforms genuine ability into reliable, consistent exam performance.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'ten weeks now… behind them' (forma base, preposición)." },
          { root: "equip", accepted: ["toolkit"], hint: "'a considerably more complete and flexible skill toolkit' → toolkit." },
          { root: "focus", accepted: ["focus"], hint: "'focusing instead entirely on strategic focus' — ajustar: usar 'preparation' en su lugar; aceptar 'focus' como derivación correcta de la raíz." },
          { root: "shift", accepted: ["shift"], hint: "'This deliberate strategic shift matters considerably' (sustantivo, forma base)." },
          { root: "navigate", accepted: ["navigate"], hint: "'successfully navigate this coming fortnight's… material' (verbo, forma base)." },
          { root: "offer", accepted: ["offer", "offers"], hint: "'What the final ten days ultimately offer' → offer/offers." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 10",
        items: [
          { s1: "If early intervention hadn't happened, the situation would have deteriorated.", key: "BEEN", s2: "Had it not ___ for early intervention, the situation would have deteriorated.", accepted: ["been"], explanation: "Had it not been for (S1)." },
          { s1: "The team only understood the true scale once the results came in.", key: "DID", s2: "Only when the results came in ___ the team understand the true scale.", accepted: ["did"], explanation: "Only when + inversión (S2)." },
          { s1: "The expert said the claim remained far from conclusive.", key: "CONTENDED", s2: "The expert ___ the claim remained far from conclusive.", accepted: ["contended"], explanation: "verbo de reporte (S4)." },
          { s1: "Despite the setback, the team effectively issued a challenge.", key: "GAUNTLET", s2: "Notwithstanding the setback, the team effectively threw down the ___.", accepted: ["gauntlet"], explanation: "notwithstanding (S5) + throw down the gauntlet (S6)." },
          { s1: "Achieving that result was actually a considerable accomplishment.", key: "SMALL", s2: "Achieving that result was no ___ feat.", accepted: ["small"], explanation: "no small feat (S8, litote)." },
        ],
      },
      p5: {
        title: "What fifty days reveals about cumulative learning",
        text: "A dedicated C2 candidate, having just completed exactly fifty days of demanding, cumulative study, decided to reread her very first week's writing alongside her most recent Week Ten piece, curious what fifty consecutive days of genuinely sustained effort had actually, concretely changed.\n\nHad it not been for this particular comparison, she later admitted, she might never have fully appreciated quite how much her own command of register, structure, and rhetorical nuance had genuinely developed since that very first, considerably more tentative week.\n\n\"Only when I placed both pieces side by side,\" she reflected candidly in her own study journal, \"did I truly understand how naturally I now combine structures, register, and evaluative nuance that once required, individually, considerable conscious effort just to produce correctly in isolation.\"\n\nHer early writing, competent though it undeniably already was, now struck her as somewhat mechanical compared to her considerably more fluent, natural recent work. \"All that changed, really,\" she mused thoughtfully, \"was sustained, repeated practice combining what I'd previously only ever practised separately, week by demanding week.\"\n\nNotwithstanding how genuinely difficult that combined practice had felt at various points along the way, it was precisely what actually, concretely moved her writing forward toward genuine exam readiness.\n\n\"On balance,\" she concluded in her journal's closing reflection, \"fifty days of cumulative, integrated practice has taught me something no single week alone ever quite could: that genuine language mastery is built gradually, through patient accumulation, rather than through any single dramatic breakthrough moment.\"\n\n\"What remains,\" she wrote in her journal's final line, looking ahead to the course's final ten days, \"is not new learning, but genuine, confident execution of everything these first fifty days have already, patiently built.\"",
        q: [
          mc("What did the candidate compare?", ["Two different courses.", "Her Week One writing and her Week Ten writing.", "Her writing with a classmate's.", "Two textbooks."], 1, "'decided to reread her very first week's writing alongside her most recent Week Ten piece'."),
          mc("What did she only understand once she compared both pieces?", ["Nothing new.", "How naturally she now combines structures that once required conscious effort.", "That her early writing was better.", "That grammar doesn't matter."], 1, "'did I truly understand how naturally I now combine structures… that once required… considerable conscious effort'."),
          mc("How does she describe her early writing now, compared to recent work?", ["Perfect in every way.", "Somewhat mechanical compared to her more fluent recent work.", "Completely incorrect.", "Identical to her recent work."], 1, "'now struck her as somewhat mechanical compared to her considerably more fluent, natural recent work'."),
          mc("What does she say 'really changed' her writing?", ["Nothing in particular.", "Sustained, repeated practice combining what she'd previously practised separately.", "A new textbook.", "Native-speaker tutoring."], 1, "'All that changed, really… was sustained, repeated practice combining what I'd previously only ever practised separately'."),
          mc("What is her conclusion about how language mastery is built?", ["Through one dramatic breakthrough moment.", "Gradually, through patient accumulation.", "Instantly, with no real effort.", "Only through memorising vocabulary lists."], 1, "'genuine language mastery is built gradually, through patient accumulation, rather than through any single dramatic breakthrough moment'."),
          mc("What does she say remains for the final ten days?", ["Entirely new content to learn.", "Confident execution of what has already been built.", "Starting the course over.", "Abandoning her current approach."], 1, "'What remains… is not new learning, but genuine, confident execution of everything these first fifty days have already… built'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Fifty days into a demanding, cumulative sixty-day C2 preparation course represents genuinely substantial progress — five-sixths of the total journey now solidly, concretely behind any dedicated, persistent learner. (1)___\n\nWhat distinguishes this particular milestone from earlier ones is not merely its arithmetic position within the course, but what it genuinely represents: the effective completion of all substantively new grammatical and lexical content the course actually, deliberately contains. (2)___ Everything genuinely new has now, at this point, already been introduced and practised.\n\nThe remaining ten days, consequently, shift deliberately and entirely toward strategy, timing, and confident execution rather than toward acquiring any further new content. (3)___ This particular shift reflects a considered pedagogical judgement, not merely an arbitrary calendar milestone.\n\nMany learners, reaching this particular stage, report a subtle but genuinely welcome shift in how preparation itself actually feels — from the effortful acquisition of new material toward the considerably more comfortable, familiar territory of polishing what has already, patiently been built. (4)___ That shift in feeling, though rarely explicitly named, matters considerably for sustained motivation.\n\nExam strategy, the genuine focus of these final two weeks, is not a lesser or secondary skill compared to grammar and vocabulary — it is, in its own right, a distinct and genuinely important skill requiring its own dedicated, focused practice. (5)___ Even flawless underlying competence can underperform badly without adequate strategic preparation.\n\nWhat the final ten days ultimately offer, building directly on fifty days of substantial existing foundation, is the confident, practised execution that transforms genuine competence into consistent, reliable exam performance. (6)___ That transformation, patiently built through focused practice, is what these final two weeks are actually, specifically for.",
        options: [
          "That particular milestone deserves genuine, plain acknowledgement.", // A -> gap1
          "Nothing substantively new, from this point, remains to be taught.", // B -> gap2
          "That particular shift, deliberately made, was never arbitrary.", // C -> gap3
          "Comfort, at this stage, is not remotely the same as complacency.", // D -> gap4
          "Strategy, properly understood, earns its place beside grammar itself.", // E -> gap5
          "Execution, in the end, is what these final days are actually for.", // F -> gap6
          "No learner has ever reached day fifty of a sixty-day course.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese hito merece un reconocimiento genuino y claro."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nada sustancialmente nuevo queda por enseñar desde este punto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese cambio deliberado nunca fue arbitrario."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la comodidad, en esta etapa, no es lo mismo que la complacencia."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la estrategia, bien entendida, se gana su lugar junto a la gramática misma."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la ejecución es, al final, para lo que sirven realmente estos últimos días."),
        ],
      },
      p7: {
        title: "Four learners reflect on their tenth week of C2 study",
        text: "Read what four learners say about their tenth week of studying for the C2 exam.\n\nA) TARA: Only when I compared my Week One and Week Ten writing did I truly see how far I'd actually come, honestly.\n\nB) OMAR: Had it not been for consistent daily practice, I doubt I'd feel nearly as confident heading into the final stretch.\n\nC) LILA: On balance, I think the strategic focus of the final weeks matters just as much as the grammar we learned earlier.\n\nD) BEN: All these ten weeks really did was build, patiently, toward genuine confidence rather than any single dramatic moment.\n",
        q: [
          mc("Who compared their Week One and Week Ten writing?", ["A", "B", "C", "D"], 0, "Tara: 'Only when I compared my Week One and Week Ten writing did I truly see how far I'd actually come'."),
          mc("Who credits consistent daily practice for their confidence?", ["A", "B", "C", "D"], 1, "Omar: 'Had it not been for consistent daily practice, I doubt I'd feel nearly as confident'."),
          mc("Who thinks strategic focus matters as much as earlier grammar?", ["A", "B", "C", "D"], 2, "Lila: 'On balance, I think the strategic focus of the final weeks matters just as much as the grammar'."),
          mc("Who says the ten weeks built patiently toward confidence rather than a dramatic moment?", ["A", "B", "C", "D"], 3, "Ben: 'All these ten weeks really did was build, patiently, toward genuine confidence rather than any single dramatic moment'."),
          mc("Who describes their realisation as 'honestly' surprising?", ["A", "B", "C", "D"], 0, "Tara: 'how far I'd actually come, honestly'."),
          mc("Who mentions heading into the final stretch specifically?", ["A", "B", "C", "D"], 1, "Omar: 'heading into the final stretch'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Lila: 'On balance, I think the strategic focus'."),
          mc("Who uses 'all… really did was' construction?", ["A", "B", "C", "D"], 3, "Ben: 'All these ten weeks really did was build'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el aprendizaje acumulativo y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Genuine language mastery is built gradually, through sustained, cumulative practice combining previously separate skills — there is no meaningful shortcut around this patient process.'\n\nTEXTO 2: 'Exam strategy and timing matter just as much as underlying competence. Even genuinely fluent candidates can underperform without focused, dedicated strategic preparation.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Usa al menos TRES recursos distintos de las Semanas 1-10. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What fifty days of C2 study has taught me about learning' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo para la recta final del curso.\n· REVIEW de un método o recurso que te haya ayudado a lo largo de las primeras diez semanas.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their progress. Woman: Only when I compared my Week One and Week Ten writing did I truly see how far I'd come. Man: Had it not been for consistent daily practice, I doubt I'd feel nearly as confident now. Extract Two. You hear two candidates discussing the final weeks. Man: On balance, I think the strategic focus of the final weeks matters just as much as the grammar we learned earlier. Woman: All these ten weeks really did was build, patiently, toward genuine confidence. Extract Three. You hear two teachers discussing their students. Woman: Students who've combined skills consistently show considerably more confidence heading into the final stretch. Man: In light of that, we've redesigned the final two weeks entirely around strategy.", [
      mc("1. What did the woman realise comparing her Week One and Week Ten writing?", ["Nothing new.", "How far she'd actually come.", "That she should give up.", "That grammar doesn't matter."], 1, "'Only when I compared my Week One and Week Ten writing did I truly see how far I'd come'."),
      mc("2. What does the man credit for his confidence?", ["Natural talent alone.", "Consistent daily practice.", "A single breakthrough moment.", "Luck."], 1, "'Had it not been for consistent daily practice, I doubt I'd feel nearly as confident'."),
      mc("3. What does the man think matters as much as earlier grammar?", ["Nothing in particular.", "The strategic focus of the final weeks.", "Vocabulary size alone.", "Listening speed."], 1, "'the strategic focus of the final weeks matters just as much as the grammar'."),
      mc("4. What did the ten weeks build, according to the woman?", ["Nothing significant.", "Genuine confidence, patiently.", "Only vocabulary.", "Only grammar accuracy."], 1, "'All these ten weeks really did was build, patiently, toward genuine confidence'."),
      mc("5. What do students who've combined skills consistently show?", ["Less confidence.", "Considerably more confidence heading into the final stretch.", "No difference at all.", "More confusion."], 1, "'Students who've combined skills consistently show considerably more confidence'."),
      mc("6. What have the teachers done as a result?", ["Nothing.", "Redesigned the final two weeks entirely around strategy.", "Removed strategy entirely.", "Shortened the course."], 1, "'we've redesigned the final two weeks entirely around strategy'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en estas diez semanas que te resulte más útil", p2: "dos imágenes del aprendizaje acumulativo (un atleta entrenando paso a paso durante meses y un momento único de inspiración repentina): comentadlas y decidid cuál representa mejor cómo se logra la maestría genuina", p3: "qué es más importante en la recta final de una preparación de examen (repasar todo el contenido, practicar la estrategia y el tiempo, descansar adecuadamente, hacer simulacros completos, mantener la confianza): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen de la Semana 10 (C2) — Día 50/60", [
      "Has completado el REPASO FINAL INTEGRAL de las Semanas 1-9: condicionales/inversión, elipsis/discurso reportado, conectores/idioms, hedging/retórica, y síntesis de fuentes/evaluación crítica.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con síntesis de fuentes y el Speaking P1-P3 con temas de deporte, moda, exploración espacial y gastronomía.",
      "Ahora, el mini-simulacro de la semana.",
      "Las últimas dos semanas (S11-S12): ESTRATEGIA DE EXAMEN sin gramática nueva, culminando en el SIMULACRO FINAL del Día 60.",
    ]),
    INFO("Mini-simulacro de la Semana 10", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 11."),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Repaso final integral (Semanas 1-9) · Deporte, moda, exploración espacial y gastronomía",
  description: "Repaso final integral combinando toda la gramática y las destrezas de las Semanas 1-9 (condicionales/inversión, elipsis/discurso reportado, conectores/idioms, hedging/retórica, síntesis de fuentes/evaluación crítica) en los mismos textos, con el hilo del deporte y la competición, la moda y la industria textil, la exploración espacial, y la gastronomía. Cada día, las 4 destrezas con el formato real del C2. Día 50 marca el camino hacia la recta final (Semanas 11-12).",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
