/**
 * C2 Proficiency · Semana 11 — "Estrategia de examen, parte por parte · El consumismo,
 * el aprendizaje permanente, las relaciones humanas y la movilidad urbana".
 * Semana de ESTRATEGIA DE EXAMEN (sin gramática nueva): técnica y gestión del
 * tiempo para cada parte del Reading & Use of English (7 partes), el Writing
 * (con integración de fuentes), el Listening (4 partes) y el Speaking (3 partes),
 * con toda la gramática del curso ya asumida (Semanas 1-10).
 * Cada día, las 4 destrezas con el formato real del C2.
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

// ───────────────────────── DÍA 51 ─────────────────────────
const DAY51 = {
  title: "Día 51 — Estrategia: Reading & Use of English P1-P3 · El consumismo y el comportamiento del consumidor",
  description: "Técnica y gestión del tiempo para las Partes 1-3 del Reading & Use of English (multiple-choice cloze, open cloze, word formation). Vocabulario del consumismo. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Dominar la técnica y el ritmo óptimos para las Partes 1-3 del Reading & Use of English bajo presión de tiempo real.",
    summary: "Estrategia P1-P3; consumismo; Use of English P1-P7, Writing, Listening P1, Speaking P1-P3.",
    commonMistakes: ["dedicar demasiado tiempo a una sola pregunta difícil en vez de marcarla y seguir.", "no leer el texto completo antes de rellenar los huecos de P1/P2.", "en P3, olvidar comprobar si la palabra necesita un prefijo negativo además del sufijo."],
    reviewPrompts: ["¿Cuánto tiempo deberías dedicar, como máximo, a cada parte del Use of English?", "¿Qué haces si no sabes una respuesta en P1: la dejas en blanco o adivinas?"],
  },
  items: [
    TEXT("🎯 Semana 11 del C2 — ESTRATEGIA DE EXAMEN. Ya tienes TODA la gramática necesaria (Semanas 1-10); esta semana perfeccionas la TÉCNICA y el RITMO para cada parte. Hoy: Reading & Use of English PARTES 1-3. Vocabulario: el CONSUMISMO."),
    GRAMMAR("Estrategia — Reading & Use of English Partes 1-3", `GESTIÓN DEL TIEMPO: 90 minutos para 7 partes + traspaso de respuestas ≈ 12-13 min/parte. Las Partes 1-3 (léxico/gramática/formación de palabras) deberían llevarte ≈ 25-30 min en total, dejando más tiempo para las partes de lectura más densas (P5-P7).
PARTE 1 (multiple-choice cloze, 8 huecos): LEE el texto ENTERO primero (sin rellenar) para captar el registro y el sentido general. A nivel C2, las cuatro opciones suelen ser sinónimos MUY próximos — descarta las que no forman la colocación EXACTA, aunque el significado general parezca correcto.
PARTE 2 (open cloze, 8 huecos): Palabras GRAMATICALES (preposiciones, conectores muy formales tipo 'notwithstanding'/'insofar as', pronombres relativos, auxiliares en inversión). Piensa en la ESTRUCTURA de la frase, no en el vocabulario de contenido.
PARTE 3 (word formation, 8 huecos): Identifica primero la función gramatical exacta que necesita el hueco (sustantivo/adjetivo/verbo/adverbio). A nivel C2, cuidado con derivaciones poco frecuentes y con prefijos negativos combinados con sufijos (unaccountability, irreproducibility).
⚠️ Si te atascas en una pregunta, márcala mentalmente y sigue — vuelve al final si te sobra tiempo. Nunca dejes un hueco en blanco: una respuesta razonada vale más que ninguna.`),
    WARN("Errores típicos del hispanohablante (C2)", "· En P1, no elijas la opción que 'suena mejor traducida' — verifica la colocación exacta; a este nivel, dos opciones pueden significar casi lo mismo pero solo una colocar correctamente.\n· En P2, no olvides que los huecos son casi siempre palabras gramaticales, incluidos conectores muy formales (notwithstanding, whereby, insofar as).\n· En P3, revisa si necesitas AMBOS un prefijo y un sufijo en la misma palabra — es habitual a este nivel.\n· No emplees más de 12-13 minutos por parte en promedio — vigila el reloj activamente."),
    grammarEx("Use of English — Práctica de estrategia (P1-P3 combinadas)", "Aplica la estrategia de cada parte.", [
      mc("P1: Advertisers frequently ___ on consumers' emotional vulnerabilities.", ["play", "touch", "hit"], 0, "colocación fija: play on (someone's vulnerabilities)."),
      fb("P2: Consumers remain largely unaware ___ how algorithms quietly shape what they see online.", ["of"], "preposición fija: aware OF."),
      mc("P3 (word formation): The campaign's ___ (persuade) tactics drew considerable criticism.", ["persuasive", "persuasion", "persuaded"], 0, "adjetivo: persuasive (describe 'tactics')."),
      fb("P2: Notwithstanding regulatory pressure, most brands continue relying ___ subtle psychological cues.", ["on"], "colocación: rely ON."),
      mc("P3: The company's ___ (account) for its marketing practices remained genuinely limited.", ["accountability", "accountable", "accounted"], 0, "sustantivo: accountability."),
      mc("P1: The brand's new campaign ___ considerable controversy online.", ["sparked", "lit", "burned"], 0, "colocación fija: spark controversy."),
    ]),
    GRAMMAR("Vocabulario del día — El consumismo y el comportamiento del consumidor (C2)", "Léxico de maestría sobre consumismo."),
    deck("C2 S11D51 — Consumismo y comportamiento del consumidor", [
      ["conspicuous consumption", "consumo ostentoso", "Conspicuous consumption signals status through visible, often excessive spending.", "sustantivo", "kənˈspɪkjuəs kənˈsʌmpʃn"],
      ["behavioural nudge", "empujón conductual (nudge)", "Subtle behavioural nudges can shift purchasing decisions without conscious awareness.", "sustantivo", "bɪˈheɪvjərəl nʌdʒ"],
      ["planned obsolescence", "obsolescencia programada", "Critics accuse manufacturers of planned obsolescence to drive repeat purchases.", "sustantivo", "plænd ˌɒbsəˈlesəns"],
      ["disposable income", "renta disponible", "Rising disposable income has fuelled discretionary consumer spending considerably.", "sustantivo", "dɪˈspəʊzəbl ˈɪnkʌm"],
      ["impulse purchase", "compra impulsiva", "Online retailers deliberately design checkout flows to encourage impulse purchases.", "sustantivo", "ˈɪmpʌls ˈpɜːtʃəs"],
      ["brand loyalty", "fidelidad de marca", "Genuine brand loyalty has weakened considerably amid growing price sensitivity.", "sustantivo", "brænd ˈlɔɪəlti"],
      ["consumer sovereignty", "soberanía del consumidor", "Consumer sovereignty assumes rational, informed choice that behavioural science increasingly questions.", "sustantivo", "kənˈsjuːmə ˈsɒvrənti"],
      ["retail therapy", "terapia de compras", "Retail therapy offers only fleeting emotional relief, psychologists consistently note.", "sustantivo", "ˈriːteɪl ˈθerəpi"],
      ["marketing saturation", "saturación publicitaria", "Marketing saturation has made genuine consumer attention an increasingly scarce resource.", "sustantivo", "ˈmɑːkɪtɪŋ ˌsætʃəˈreɪʃn"],
      ["ethical consumerism", "consumismo ético", "Ethical consumerism remains, for many, aspirational rather than consistently practised.", "sustantivo", "ˈeθɪkl kənˈsjuːmərɪzəm"],
    ]),
    vocabEx("Vocabulario — El consumismo y el comportamiento del consumidor", "Elige la opción correcta.", [
      mc("Spending visibly and excessively to display wealth or status:", ["conspicuous consumption", "impulse purchase", "brand loyalty"], 0, "conspicuous consumption."),
      mc("A subtle design choice that shifts behaviour without restricting choice:", ["behavioural nudge", "retail therapy", "marketing saturation"], 0, "behavioural nudge."),
      mc("Designing products to become outdated deliberately:", ["planned obsolescence", "ethical consumerism", "consumer sovereignty"], 0, "planned obsolescence."),
      mc("An unplanned, spontaneous purchasing decision:", ["impulse purchase", "disposable income", "brand loyalty"], 0, "impulse purchase."),
      mc("The idea that consumers make fully rational, informed purchasing decisions:", ["consumer sovereignty", "retail therapy", "marketing saturation"], 0, "consumer sovereignty."),
      mc("Purchasing decisions made deliberately according to ethical considerations:", ["ethical consumerism", "planned obsolescence", "impulse purchase"], 0, "ethical consumerism."),
    ]),

    ...uoe({
      p1: {
        title: "The architecture of desire",
        text: "Retailers have long understood that consumers rarely make purchasing decisions through purely rational calculation, instead relying (1)___ a complex mixture of emotion, habit and subtle situational cues that marketers have grown remarkably skilled at exploiting. A carefully designed store layout can (2)___ shoppers towards higher-margin products almost entirely without their conscious awareness. Scarcity messaging — 'only three left' — deliberately plays (3)___ a deep-seated fear of missing out, prompting impulse purchases that careful reflection would likely have avoided entirely. Even seemingly neutral design choices, such as background music tempo, have been shown to measurably (4)___ how quickly, and how much, customers actually spend. None of this constitutes outright deception, exactly; it operates, rather, in a considerably greyer area where subtle influence gradually shades (5)___ something closer to manipulation, a distinction regulators have historically struggled to draw with (6)___ real precision.",
        q: [
          mc("(1)", ["on", "in", "at", "with"], 0, "'relying on a complex mixture'."),
          mc("(2)", ["steer", "guide", "direct", "lead"], 0, "'can steer shoppers towards'."),
          mc("(3)", ["on", "with", "at", "upon"], 0, "'plays on a deep-seated fear'."),
          mc("(4)", ["shape", "form", "mould", "build"], 0, "'measurably shape how quickly… customers spend'."),
          mc("(5)", ["into", "towards", "to", "onto"], 0, "'shades into something closer to manipulation'."),
          mc("(6)", ["any", "some", "much", "genuine"], 0, "'struggled to draw with any real precision'."),
        ],
      },
      p2: {
        title: "The myth of the rational shopper",
        text: "Classical economic theory has long rested (1)___ the assumption that consumers act as broadly rational agents, weighing costs and benefits before reaching purchasing decisions. Behavioural economics has, over recent decades, considerably complicated (2)___ once-tidy picture, revealing systematic biases that shape consumer choice in ways classical theory never adequately anticipated. Notwithstanding this considerable body of accumulated evidence, the assumption of rational consumer sovereignty (3)___ persists within much regulatory and legal thinking, shaping policy in ways some economists now consider genuinely outdated. Insofar (4)___ policymakers acknowledge behavioural insight at all, they have tended to focus narrowly on 'nudge' interventions rather than more fundamental regulatory reform. It remains widely (5)___ among behavioural economists that meaningful consumer protection requires considerably more than simply nudging individual choices at the margin. What emerges from this ongoing tension is a genuinely unresolved question: (6)___ far should policy go in protecting consumers from their own demonstrably predictable cognitive biases?",
        q: [
          fb("(1)", ["on", "upon"], "'has long rested on/upon the assumption'."),
          fb("(2)", ["this", "that"], "'considerably complicated this/that once-tidy picture'."),
          fb("(3)", ["still"], "'the assumption… still persists within…'."),
          fb("(4)", ["as"], "'Insofar as policymakers acknowledge'."),
          fb("(5)", ["held", "acknowledged"], "'It remains widely held/acknowledged among…'."),
          fb("(6)", ["how"], "'how far should policy go' — pregunta indirecta."),
        ],
      },
      p3: {
        title: "Manufacturing dissatisfaction",
        text: "Planned obsolescence, whether achieved through deliberate technical (1)___ or through purely aesthetic fashion cycles, represents one of consumer capitalism's most persistently (2)___ practices, generating substantial waste alongside repeat purchase revenue. Critics argue this practice reflects a fundamental (3)___ between corporate profit incentives and genuine environmental sustainability, since durable, long-lasting products inherently generate considerably less repeat revenue than deliberately short-lived alternatives. Manufacturers, for their part, frequently (4)___ that consumer demand for continuous novelty, not corporate strategy alone, genuinely drives rapid product replacement cycles. This (5)___ debate has prompted several jurisdictions to introduce 'right to repair' legislation, explicitly requiring manufacturers to support (6)___ product lifespans through accessible spare parts and repair documentation.",
        items: [
          { root: "limit", accepted: ["limitation", "limitations"], hint: "'deliberate technical limitation/limitations' (sustantivo)." },
          { root: "criticise", accepted: ["criticised"], hint: "'consumer capitalism's most persistently criticised practices' (adjetivo/participio)." },
          { root: "tense", accepted: ["tension"], hint: "'a fundamental tension between corporate profit… and…' (sustantivo)." },
          { root: "contend", accepted: ["contend"], hint: "'manufacturers… frequently contend that' (verbo, forma base)." },
          { root: "continue", accepted: ["continuing", "ongoing"], hint: "'This continuing/ongoing debate has prompted…' (adjetivo)." },
          { root: "long", accepted: ["longer"], hint: "'support longer product lifespans' (adjetivo comparativo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso general",
        items: [
          { s1: "The brand's early success proved a considerable cost, not a real gain.", key: "PYRRHIC", s2: "The brand's early success proved a ___ victory of sorts.", accepted: ["pyrrhic", "Pyrrhic"], explanation: "a Pyrrhic victory (S6, repaso)." },
          { s1: "There is some genuine truth to that claim, though it exaggerates the case.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to that claim, though it exaggerates the case.", accepted: ["undoubtedly"], explanation: "reconocer mérito (S9, repaso)." },
          { s1: "Achieving that reform was actually a considerable accomplishment.", key: "SMALL", s2: "Achieving that reform was no ___ feat.", accepted: ["small"], explanation: "no small feat (S8, litote, repaso)." },
          { s1: "The report says that regulation has failed to keep pace with the market.", key: "CONTENDS", s2: "The report ___ that regulation has failed to keep pace with the market.", accepted: ["contends"], explanation: "verbo de reporte (S4, repaso)." },
          { s1: "In general, the coordinated approach seems the wiser policy choice.", key: "BALANCE", s2: "On ___, the coordinated approach seems the wiser policy choice.", accepted: ["balance"], explanation: "on balance (S9, repaso)." },
        ],
      },
      p5: {
        title: "The minimalist who studied marketing",
        text: "Marketing researcher Julia Ferreira spent the first decade of her career designing precisely the kind of subtle behavioural nudges that had, over years of careful study, made her increasingly uneasy about her own professional contribution to what she eventually came to consider a genuinely troubling pattern.\n\n\"I had spent years,\" she reflected in a recent, widely discussed essay, \"perfecting techniques designed to prompt purchases people, on careful reflection, often genuinely didn't need or particularly want.\"\n\nHer own turning point arrived, somewhat ironically, while designing a campaign for a fast-fashion retailer explicitly built around planned obsolescence and deliberately manufactured seasonal dissatisfaction.\n\n\"I found myself unable to continue justifying work whose entire commercial logic depended on convincing people their existing, perfectly functional possessions had somehow become inadequate,\" she explained.\n\nHer subsequent career shift, toward consumer advocacy and behavioural research aimed at protecting rather than exploiting cognitive bias, was not, she readily admits, financially straightforward. \"It was no small sacrifice, professionally and financially,\" she acknowledged candidly, \"walking away from a lucrative, well-established career.\"\n\nHer current research focuses specifically on designing what she terms 'protective nudges' — interventions helping consumers pause before impulse purchases rather than encouraging them.\n\n\"There is undoubtedly some truth to the argument that individual willpower alone should suffice,\" she noted, addressing a common criticism of her current work. \"But this argument, however, overlooks just how sophisticated and pervasive commercial persuasion techniques have actually become.\"\n\n\"On balance,\" she concluded, \"I believe genuine consumer protection requires structural intervention, not merely individual discipline against an industry specifically designed, with considerable expertise, to overcome exactly that discipline.\"",
        q: [
          mc("What had Julia spent her first decade doing?", ["Studying consumer protection law.", "Designing subtle behavioural nudges to prompt purchases.", "Working in retail directly.", "Teaching marketing at university."], 1, "'spent the first decade of her career designing precisely the kind of subtle behavioural nudges'."),
          mc("What was her turning point?", ["A personal financial crisis.", "Designing a campaign built around planned obsolescence and manufactured dissatisfaction.", "Losing her job.", "A university course."], 1, "'while designing a campaign for a fast-fashion retailer explicitly built around planned obsolescence'."),
          mc("How does she describe her career shift?", ["Financially easy.", "No small sacrifice, professionally and financially.", "Something she regrets.", "Something forced upon her."], 1, "'It was no small sacrifice, professionally and financially… walking away from a lucrative… career'."),
          mc("What does her current research focus on?", ["Traditional marketing techniques.", "Designing 'protective nudges' helping consumers pause before impulse purchases.", "Increasing sales for retailers.", "Banning all advertising."], 1, "'designing what she terms 'protective nudges' — interventions helping consumers pause before impulse purchases'."),
          mc("What does she say the 'individual willpower alone' argument overlooks?", ["Nothing significant.", "How sophisticated and pervasive commercial persuasion techniques have become.", "The existence of advertising.", "Consumer rights law."], 1, "'this argument… overlooks just how sophisticated and pervasive commercial persuasion techniques have actually become'."),
          mc("What does she conclude genuine consumer protection requires?", ["Individual discipline alone.", "Structural intervention, not merely individual discipline.", "No intervention at all.", "Banning all marketing research."], 1, "'genuine consumer protection requires structural intervention, not merely individual discipline'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Consumer culture, across the past century, has grown considerably more sophisticated in how it shapes and directs human desire, moving well beyond simple, direct product advertisement alone. (1)___\n\nEarly advertising relied largely on straightforward claims about product function and quality, addressing consumers as broadly rational agents weighing genuine, comparable alternatives. (2)___ That relatively simple model has, over subsequent decades, grown considerably more psychologically sophisticated.\n\nModern marketing increasingly draws on behavioural science, targeting cognitive bias and emotional association rather than rational product comparison alone. (3)___ Consumers, as a direct result, face considerably more sophisticated persuasion than earlier generations ever encountered.\n\nThis growing sophistication has prompted renewed debate about where legitimate persuasion ends and something closer to manipulation genuinely begins. (4)___ That particular line, examined closely, resists any simple, universally satisfying definition.\n\nSome researchers argue that transparency requirements — clearly disclosing when behavioural techniques are being deliberately deployed — could meaningfully address at least part of this underlying concern. (5)___ Others doubt transparency alone can counter techniques specifically designed to bypass conscious, deliberate awareness altogether.\n\nWhat emerges from this ongoing debate is recognition that consumer protection, in an era of increasingly sophisticated behavioural marketing, requires continuous adaptation rather than any single, permanent regulatory fix. (6)___ The techniques of persuasion, after all, continue evolving considerably faster than the regulations meant to address them.",
        options: [
          "That evolution, on reflection, was never simply accidental.", // A -> gap1
          "Simplicity, at that early stage, was still the dominant approach.", // B -> gap2
          "The target, in other words, shifted from reason toward instinct.", // C -> gap3
          "No bright line, it turns out, separates the two cleanly.", // D -> gap4
          "Disclosure alone, some worry, may not be nearly enough.", // E -> gap5
          "Rules written once, in this arena, rarely stay adequate for long.", // F -> gap6
          "No consumer has ever been influenced by modern marketing techniques.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa evolución nunca fue simplemente accidental."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la simplicidad seguía dominando en esa etapa temprana."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el objetivo pasó de la razón al instinto."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ninguna línea clara separa ambas cosas limpiamente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la sola transparencia podría no bastar, temen algunos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: las reglas escritas una vez rara vez siguen siendo adecuadas."),
        ],
      },
      p7: {
        title: "Four people discuss consumer behaviour",
        text: "Read what four people say about consumerism and marketing.\n\nA) DARIO: Notwithstanding my professional training, I still fall for impulse purchases more often than I'd like to admit.\n\nB) FAY: It is widely held in my field that transparency alone won't stop sophisticated behavioural marketing.\n\nC) LEON: My grandmother always said advertising plays on fear far more than it plays on genuine need.\n\nD) RITA: On balance, I think ethical consumerism remains more aspiration than consistent daily practice for most people.\n",
        q: [
          mc("Who admits falling for impulse purchases despite professional training?", ["A", "B", "C", "D"], 0, "Dario: 'Notwithstanding my professional training, I still fall for impulse purchases more often than I'd like to admit'."),
          mc("Who holds that transparency alone won't stop sophisticated marketing?", ["A", "B", "C", "D"], 1, "Fay: 'It is widely held in my field that transparency alone won't stop sophisticated behavioural marketing'."),
          mc("Whose grandmother said advertising plays on fear more than need?", ["A", "B", "C", "D"], 2, "Leon: 'My grandmother always said advertising plays on fear far more than it plays on genuine need'."),
          mc("Who thinks ethical consumerism remains more aspiration than practice?", ["A", "B", "C", "D"], 3, "Rita: 'On balance, I think ethical consumerism remains more aspiration than consistent daily practice'."),
          mc("Who mentions their own professional training?", ["A", "B", "C", "D"], 0, "Dario: 'Notwithstanding my professional training'."),
          mc("Who mentions their own field specifically?", ["A", "B", "C", "D"], 1, "Fay: 'It is widely held in my field'."),
          mc("Who quotes their grandmother?", ["A", "B", "C", "D"], 2, "Leon: 'My grandmother always said'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 3, "Rita: 'On balance, I think ethical consumerism'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre el marketing conductual y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Behavioural marketing techniques exploit predictable cognitive biases, undermining genuine consumer autonomy. Stronger regulation is urgently needed to protect vulnerable consumers.'\n\nTEXTO 2: 'Consumers remain free agents capable of resisting marketing influence. Excessive regulation risks paternalism and unnecessarily restricts legitimate commercial communication.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS, aplicando la estrategia de gestión del tiempo de hoy. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA, cronometrando tu tiempo (30 min máximo):\n· ARTÍCULO: 'How aware am I of marketing's influence on my own choices?' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a una autoridad reguladora sobre publicidad engañosa.\n· REVIEW de un libro o documental sobre el comportamiento del consumidor.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas. Estrategia: lee las preguntas ANTES de escuchar para saber qué buscar.", "This is Part One. You will hear three different extracts. Extract One. You hear two marketing researchers discussing their work. Woman: I had spent years perfecting techniques designed to prompt purchases people didn't genuinely need. Man: That realisation must have been genuinely difficult to sit with professionally. Extract Two. You hear two consumers discussing their habits. Man: Notwithstanding my training in psychology, I still fall for impulse purchases regularly. Woman: It is widely held that transparency alone won't stop sophisticated marketing techniques. Extract Three. You hear two economists discussing regulation. Woman: On balance, I think structural intervention matters more than individual willpower alone. Man: There is undoubtedly some truth to that, though enforcement remains genuinely difficult in practice.", [
      mc("1. What had the woman spent years doing?", ["Studying consumer law.", "Perfecting techniques to prompt unnecessary purchases.", "Working in retail.", "Teaching economics."], 1, "'I had spent years perfecting techniques designed to prompt purchases people didn't genuinely need'."),
      mc("2. How does the man describe her realisation?", ["Easy and quick.", "Genuinely difficult to sit with professionally.", "Irrelevant to her career.", "Something she regrets."], 1, "'That realisation must have been genuinely difficult to sit with professionally'."),
      mc("3. What does the man admit despite his training?", ["He never makes impulse purchases.", "He still falls for impulse purchases regularly.", "He has stopped shopping entirely.", "He disagrees with psychology."], 1, "'Notwithstanding my training in psychology, I still fall for impulse purchases regularly'."),
      mc("4. What does the woman say is widely held?", ["Transparency alone will stop marketing.", "Transparency alone won't stop sophisticated marketing techniques.", "Marketing has no real effect.", "Regulation is unnecessary."], 1, "'It is widely held that transparency alone won't stop sophisticated marketing techniques'."),
      mc("5. What does the woman economist think matters more?", ["Individual willpower alone.", "Structural intervention.", "Nothing in particular.", "Advertising bans only."], 1, "'On balance, I think structural intervention matters more than individual willpower alone'."),
      mc("6. What does the man say about enforcement?", ["It's straightforward.", "It remains genuinely difficult in practice.", "It's unnecessary.", "It's already perfect."], 1, "'enforcement remains genuinely difficult in practice'."),
    ]),

    ...speakingParts({ p1: "si te consideras una persona influenciable por la publicidad", p2: "dos imágenes del consumismo (un escaparate lleno de rebajas y ofertas y una persona meditando sobre una compra antes de decidir): comentadlas y decidid cuál representa mejor un consumo responsable", p3: "qué es más eficaz para proteger a los consumidores (la regulación gubernamental estricta, la educación del consumidor, la transparencia de las marcas, la responsabilidad individual, la intervención estructural): comentadlo y decidid lo más eficaz" }),

    SUMMARY("Resumen del Día 51", [
      "Estrategia practicada: gestión del tiempo y técnica específica para las Partes 1-3 del Reading & Use of English.",
      "Vocabulario del consumismo y el comportamiento del consumidor. Reading & Use of English, Writing, Listening P1 y Speaking completos.",
      "Mañana: estrategia para las Partes 4-7 del Reading & Use of English + planificación del Writing.",
    ]),
    INFO("Tarea para el Día 52", "Repasa la estrategia de hoy (P1-P3). Mañana: Partes 4-7 (key word transformations, lectura larga, gapped text, multiple matching) + estrategia de Writing."),
  ],
};

// ───────────────────────── DÍA 52 ─────────────────────────
const DAY52 = {
  title: "Día 52 — Estrategia: Reading & UoE P4-P7 y planificación del Writing · El aprendizaje permanente",
  description: "Técnica para las Partes 4-7 del Reading & Use of English (key word transformations, lectura larga, gapped text, multiple matching) y planificación eficaz del Writing (P1 integración de fuentes, P2 elección de tarea). Vocabulario del aprendizaje permanente. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Dominar la técnica de las Partes 4-7 del Reading & UoE y planificar el Writing con eficacia bajo presión de tiempo.",
    summary: "Estrategia P4-P7 + Writing; aprendizaje permanente; Use of English P1-P7, Writing, Listening P2, Speaking P1-P3.",
    commonMistakes: ["en P4, escribir la respuesta sin contar las palabras exigidas (3-8).", "en P6, no verificar que el párrafo elegido conecta con AMBOS lados del hueco.", "no dedicar al menos 3-5 minutos a planificar el Writing P1 antes de escribir."],
    reviewPrompts: ["¿Cuántas palabras admite la Parte 4 del C2 (a diferencia del C1)?", "¿Cuánto tiempo deberías dedicar a planificar antes de escribir el Writing P1?"],
  },
  items: [
    TEXT("🎯 Hoy: estrategia para las PARTES 4-7 del Reading & Use of English y la PLANIFICACIÓN DEL WRITING. Vocabulario: el APRENDIZAJE PERMANENTE."),
    GRAMMAR("Estrategia — Reading & UoE Partes 4-7 y Writing", `PARTE 4 (key word transformations, 6 preguntas): A diferencia del C1 (3-6 palabras), el C2 admite ENTRE 3 Y 8 PALABRAS. Identifica primero la estructura gramatical necesaria (pasiva, condicional, discurso reportado, inversión, comparación) antes de escribir. Cada ítem vale hasta 2 puntos — revisa que uses la palabra clave SIN cambiarla.
PARTE 5 (lectura larga, 6 MC): Lee las preguntas ANTES del texto para saber qué buscar. Cuidado con las opciones que repiten palabras del texto pero distorsionan el significado — a C2 las trampas son muy sutiles.
PARTE 6 (gapped text, 7 párrafos): Busca conectores de referencia (pronombres, sustantivos resuntivos, conectores) ANTES y DESPUÉS de cada hueco — la cohesión es la clave, no solo el tema.
PARTE 7 (multiple matching, 10 preguntas): Subraya palabras clave en cada pregunta ANTES de leer los textos/secciones; busca paráfrasis, no repetición literal.
WRITING (90 min): dedica 3-5 min a PLANIFICAR el P1 (identifica el punto de acuerdo/desacuerdo entre las fuentes) antes de escribir; reserva 40 min para P1 y 30 min para P2, dejando 5-10 min para revisar ambos.`),
    WARN("Errores típicos del hispanohablante (C2)", "· En P4, contar mal las palabras (recuerda: 3-8, no 3-6 como en C1) — una contracción cuenta como una palabra.\n· En P6, elegir un párrafo que 'encaja temáticamente' pero no conecta gramaticalmente (pronombres, tiempos verbales).\n· En el Writing P1, resumir las dos fuentes por separado en vez de sintetizarlas — repasa la Semana 9."),
    grammarEx("Use of English — Práctica de estrategia (P4-P7)", "Aplica la estrategia de cada parte.", [
      mc("P4: 'She never expected such a dramatic outcome.' → LEAST — Such a dramatic outcome was the ___ she expected.", ["last thing", "least thing", "less thing"], 0, "'the last thing she expected' (3-8 palabras admitidas en C2)."),
      mc("P5 (lectura): si una opción repite palabras EXACTAS del texto pero cambia el matiz, ¿qué haces?", ["la descarto si distorsiona el significado", "la elijo porque coincide textualmente", "la elijo siempre que aparezca en el texto"], 0, "a C2, las trampas repiten léxico pero alteran el sentido — prioriza el significado, no la coincidencia literal."),
      mc("P6 (gapped text): ¿qué debes buscar primero al elegir un párrafo para un hueco?", ["conectores/pronombres que enlazan con el texto antes y después", "solo que el tema coincida en general", "la longitud del párrafo"], 0, "la cohesión gramatical (referencias, pronombres, tiempos) es más fiable que el tema solo."),
      mc("P7 (multiple matching): antes de leer los textos, ¿qué haces con las preguntas?", ["subrayo las palabras clave de cada pregunta", "las leo una sola vez y seguido", "las ignoro hasta el final"], 0, "subrayar palabras clave ayuda a buscar paráfrasis específicas en los textos."),
      fb("Writing: ¿cuántos minutos, como mínimo, deberías dedicar a planificar el Writing P1 antes de escribir? (número)", ["3", "4", "5"], "3-5 minutos de planificación mejoran considerablemente la coherencia del ensayo."),
    ]),
    GRAMMAR("Vocabulario del día — El aprendizaje permanente (C2)", "Léxico de maestría sobre aprendizaje permanente y reciclaje profesional."),
    deck("C2 S11D52 — El aprendizaje permanente", [
      ["lifelong learning", "aprendizaje permanente", "Lifelong learning has become increasingly essential amid rapid technological change.", "sustantivo", "ˈlaɪflɒŋ ˈlɜːnɪŋ"],
      ["upskilling", "mejora de competencias", "Upskilling programmes help workers adapt to evolving industry demands.", "sustantivo", "ˈʌpskɪlɪŋ"],
      ["professional reinvention", "reinvención profesional", "Professional reinvention increasingly characterises careers spanning several decades.", "sustantivo", "prəˈfeʃənl ˌriːɪnˈvenʃn"],
      ["credential inflation", "inflación de credenciales", "Credential inflation has raised entry requirements for jobs that arguably need less.", "sustantivo", "krɪˈdenʃl ɪnˈfleɪʃn"],
      ["adult education", "educación de adultos", "Adult education providers report growing demand from career changers.", "sustantivo", "ˈædʌlt ˌedjuˈkeɪʃn"],
      ["skills gap", "brecha de competencias", "The widening skills gap concerns employers across nearly every major sector.", "sustantivo", "skɪlz ɡæp"],
      ["self-directed learning", "aprendizaje autodirigido", "Self-directed learning demands considerably more discipline than structured classroom instruction.", "sustantivo", "self dɪˈrektɪd ˈlɜːnɪŋ"],
      ["cognitive plasticity", "plasticidad cognitiva", "Cognitive plasticity persists well into adulthood, contrary to earlier assumptions.", "sustantivo", "ˈkɒɡnətɪv plæˈstɪsəti"],
      ["obsolescent skillset", "conjunto de competencias obsoleto", "An obsolescent skillset can leave experienced workers genuinely vulnerable to displacement.", "sustantivo", "ˌɒbsəˈlesənt ˈskɪlset"],
      ["intrinsic motivation", "motivación intrínseca", "Intrinsic motivation sustains lifelong learning far better than external pressure alone.", "sustantivo", "ɪnˈtrɪnsɪk ˌməʊtɪˈveɪʃn"],
    ]),
    vocabEx("Vocabulario — El aprendizaje permanente", "Elige la opción correcta.", [
      mc("Continuing education and skill development throughout one's entire life:", ["lifelong learning", "credential inflation", "skills gap"], 0, "lifelong learning."),
      mc("Learning new skills to adapt to changing job requirements:", ["upskilling", "obsolescent skillset", "adult education"], 0, "upskilling."),
      mc("A significant career change, often involving retraining:", ["professional reinvention", "self-directed learning", "cognitive plasticity"], 0, "professional reinvention."),
      mc("The mismatch between skills workers have and skills employers need:", ["skills gap", "credential inflation", "intrinsic motivation"], 0, "skills gap."),
      mc("Learning driven by internal interest rather than external reward:", ["intrinsic motivation", "credential inflation", "obsolescent skillset"], 0, "intrinsic motivation."),
      mc("The brain's ongoing capacity to adapt and learn, even in adulthood:", ["cognitive plasticity", "skills gap", "upskilling"], 0, "cognitive plasticity."),
    ]),

    ...uoe({
      p1: {
        title: "The myth of the finished education",
        text: "The traditional notion that formal education, once completed, adequately equips someone for an entire working lifetime has grown increasingly (1)___ untenable as technological change accelerates across nearly every major industry. Workers who entered their careers even one or two decades ago now frequently confront skills gaps that (2)___ genuine, sustained retraining rather than minor, incremental adjustment alone. This shift has prompted growing interest in self-directed learning, though such an approach (3)___ considerably more discipline and intrinsic motivation than structured classroom instruction traditionally required. Employers, for their part, increasingly (4)___ upskilling programmes as essential retention tools, recognising that failing to invest in existing staff often proves considerably costlier than the investment itself. Credential inflation, meanwhile, has (5)___ complicated this picture further, as formal qualifications proliferate without necessarily reflecting genuine, practical competence. What emerges from this evolving landscape is a workforce increasingly required to treat learning as a continuous, career-long process rather than a single, front-loaded (6)___ completed early and never meaningfully revisited.",
        q: [
          mc("(1)", ["genuinely", "considerably", "increasingly", "notably"], 0, "'grown increasingly genuinely untenable' — ajustar naturalmente: 'grown genuinely untenable'."),
          mc("(2)", ["demand", "require", "need", "call for"], 1, "'skills gaps that require genuine, sustained retraining'."),
          mc("(3)", ["demands", "needs", "requires", "asks"], 0, "'such an approach demands considerably more discipline'."),
          mc("(4)", ["view", "regard", "treat", "consider"], 2, "'increasingly treat upskilling programmes as essential'."),
          mc("(5)", ["further", "additionally", "also", "moreover"], 0, "'has further complicated this picture'."),
          mc("(6)", ["phase", "stage", "period", "process"], 1, "'a single, front-loaded stage completed early'."),
        ],
      },
      p2: {
        title: "What adult learners actually need",
        text: "Adult education providers increasingly recognise (1)___ adult learners bring fundamentally different needs and constraints than traditional, full-time students, typically balancing study (2)___ existing work and family obligations. Insofar (3)___ programmes accommodate this practical reality — flexible scheduling, modular content, recognition of prior experience — completion rates tend to improve considerably. Not (4)___ every institution has adapted equally well to these particular demands, with some traditional providers still designing programmes around assumptions more suited to conventional, full-time students. This is not to (5)___ that rigour should be sacrificed for convenience — rather, genuine flexibility and genuine rigour can, and arguably should, coexist within thoughtfully designed programmes. What ultimately determines programme success, most researchers increasingly agree, is not the formal credential offered alone, but whether the learning experience itself genuinely respects adult learners' considerable existing (6)___ and practical constraints.",
        q: [
          fb("(1)", ["that"], "'increasingly recognise that adult learners bring…'."),
          fb("(2)", ["alongside", "with"], "'balancing study alongside/with existing… obligations'."),
          fb("(3)", ["as"], "'Insofar as programmes accommodate'."),
          fb("(4)", ["every"], "'Not every institution has adapted equally well'."),
          fb("(5)", ["suggest"], "'This is not to suggest that rigour should be sacrificed'."),
          fb("(6)", ["experience"], "'considerable existing experience and practical constraints'."),
        ],
      },
      p3: {
        title: "Reinventing a career at fifty",
        text: "Professional (1)___ at mid-career or later, once relatively rare, has become considerably more common as entire industries transform or decline within a single working lifetime. Workers undertaking such (2)___ transitions face genuine practical obstacles beyond the purely educational — financial constraints, caregiving responsibilities, and age-related workplace bias among them. Notwithstanding these genuine (3)___, growing evidence suggests career changers often bring valuable, transferable experience that pure new graduates genuinely lack, provided employers can be persuaded to recognise this (4)___ value fully. Some sectors facing acute skills shortages have begun actively recruiting older career changers, offering structured (5)___ pathways specifically designed to leverage existing professional experience. This growing (6)___ suggests that age-related career transition, whatever its genuine practical difficulty, need not represent simple professional decline.",
        items: [
          { root: "invent", accepted: ["reinvention"], hint: "'Professional reinvention at mid-career or later' (sustantivo)." },
          { root: "signify", accepted: ["significant"], hint: "'such significant transitions' (adjetivo)." },
          { root: "difficult", accepted: ["difficulties"], hint: "'Notwithstanding these genuine difficulties' (sustantivo, plural)." },
          { root: "add", accepted: ["added"], hint: "'recognise this added value fully' (adjetivo/participio)." },
          { root: "train", accepted: ["training"], hint: "'offering structured training pathways' (sustantivo)." },
          { root: "recognise", accepted: ["recognition"], hint: "'This growing recognition suggests that…' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso general (C2, 3-8 palabras)",
        items: [
          { s1: "She never expected such a dramatic outcome.", key: "LAST", s2: "Such a dramatic outcome was the ___ she expected.", accepted: ["last thing"], explanation: "the last thing she expected (transformación C2, 3-8 palabras)." },
          { s1: "The programme only succeeded once it became genuinely flexible.", key: "DID", s2: "Only once the programme became genuinely flexible ___ it succeed.", accepted: ["did"], explanation: "Only once + inversión (repaso S2)." },
          { s1: "It's possible to argue that retraining should start much earlier.", key: "ARGUABLY", s2: "It could ___ be argued that retraining should start much earlier.", accepted: ["arguably"], explanation: "could arguably be argued (repaso S8)." },
          { s1: "The report says that credential inflation has worsened the skills gap.", key: "CONTENDS", s2: "The report ___ that credential inflation has worsened the skills gap.", accepted: ["contends"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "Career changers bring genuinely valuable experience, many employers now admit.", key: "CONCEDE", s2: "Many employers now ___ that career changers bring genuinely valuable experience.", accepted: ["concede"], explanation: "verbo de reporte matizado (repaso S4)." },
        ],
      },
      p5: {
        title: "The accountant who became a nurse",
        text: "At forty-seven, after two decades working as a senior accountant, Marcus Webb made a decision several close colleagues initially considered genuinely baffling: he enrolled in a full-time nursing programme, effectively starting his professional life over from the very beginning.\n\n\"Had it not been for a health scare within my own family,\" he later explained, \"I doubt I would ever have seriously questioned a career that had, by every conventional measure, gone perfectly well.\"\n\nThe financial reality of his decision proved genuinely challenging — a significant pay cut, considerable student debt, and years of unfamiliar, physically demanding clinical training.\n\n\"It was no small sacrifice,\" he acknowledged candidly, \"and I won't pretend otherwise to anyone considering something similar.\"\n\nWhat surprised him most, he reflected, was discovering how much his accounting background, initially seeming entirely irrelevant, actually transferred usefully into his new profession — careful attention to detail, systematic thinking, and comfort with complex regulatory documentation.\n\n\"This is not to suggest the transition was simply easy because of that transferable experience,\" he clarified. \"But it did mean I wasn't starting from absolutely nothing, whatever my new younger colleagues sometimes assumed about me.\"\n\nHis nursing supervisors, initially somewhat sceptical about training an older career changer, now cite him as a genuinely valuable team member specifically because of the maturity and professional experience he brought to an otherwise entirely unfamiliar field.\n\n\"On balance,\" he reflected, \"I'd tell anyone considering a similar change at a similar age that the obstacles are real, but so is the value you bring that a twenty-two-year-old simply can't yet possess.\"\n\nHis story has since been featured in several publications examining mid-career transitions, prompting considerable interest from other professionals contemplating similarly dramatic professional reinvention of their own.",
        q: [
          mc("What decision did Marcus make at forty-seven?", ["To retire early.", "To enrol in a full-time nursing programme, starting over professionally.", "To become a manager.", "To start his own accounting firm."], 1, "'he enrolled in a full-time nursing programme, effectively starting his professional life over'."),
          mc("What prompted his decision?", ["A promotion offer.", "A health scare within his own family.", "Being fired from his job.", "A university advertisement."], 1, "'Had it not been for a health scare within my own family'."),
          mc("What surprised him most about the transition?", ["Nothing surprised him.", "How much his accounting background actually transferred usefully.", "That nursing was easier than expected.", "That his pay increased."], 1, "'discovering how much his accounting background… actually transferred usefully into his new profession'."),
          mc("How did his nursing supervisors initially view him?", ["Enthusiastically from the start.", "Somewhat sceptical about training an older career changer.", "Completely indifferent.", "Immediately impressed."], 1, "'His nursing supervisors, initially somewhat sceptical about training an older career changer'."),
          mc("What do his supervisors now say about him?", ["That he should have stayed in accounting.", "That he's a genuinely valuable team member due to his maturity and experience.", "That he struggles with the work.", "That he's identical to younger colleagues."], 1, "'now cite him as a genuinely valuable team member specifically because of the maturity and professional experience'."),
          mc("What would he tell others considering a similar change?", ["That it's not worth it.", "That the obstacles are real, but so is the value you bring.", "That age makes it impossible.", "That financial planning is unnecessary."], 1, "'the obstacles are real, but so is the value you bring that a twenty-two-year-old simply can't yet possess'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "The idea of education as a single, front-loaded phase of life, completed once and drawn upon indefinitely thereafter, increasingly looks like a relic of a considerably more stable, slower-changing economic era. (1)___\n\nRapid technological change has compressed the useful lifespan of many specific technical skills considerably, sometimes to a matter of years rather than the decades earlier generations could reasonably assume. (2)___ Skills once considered a durable professional foundation now require regular, active renewal.\n\nThis compressed timeline has driven growing demand for flexible, accessible adult education, though supply has not always kept pace with this rapidly evolving need. (3)___ Many traditional institutions, designed around conventional full-time students, have adapted only slowly and unevenly.\n\nEmployers, for their part, increasingly recognise that investing in existing staff's ongoing development often proves considerably more cost-effective than constant external recruitment and replacement. (4)___ Retention, viewed this way, becomes inseparable from genuine investment in continuous learning.\n\nIndividual workers, meanwhile, increasingly bear direct responsibility for their own ongoing professional development, a shift some view as empowering and others view as an unfair transfer of risk from institutions onto individuals alone. (5)___ Both readings, arguably, capture something genuinely real about this evolving dynamic.\n\nWhat emerges from these overlapping pressures is a working life increasingly organised around continuous adaptation rather than any single, stable professional identity established early and maintained largely unchanged thereafter. (6)___ Learning, in this new arrangement, becomes not a discrete life stage but an ongoing, permanent condition of working life itself.",
        options: [
          "That relic, evidently, has not aged particularly gracefully.", // A -> gap1
          "Durability, in other words, is no longer quite guaranteed.", // B -> gap2
          "Demand and supply, here, have not always moved together.", // C -> gap3
          "Loyalty, on this view, gets built through ongoing investment.", // D -> gap4
          "Neither framing, taken alone, tells the whole honest story.", // E -> gap5
          "Stability of that older kind, plainly, is not returning soon.", // F -> gap6
          "No worker has ever needed to retrain for a changing job market.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa reliquia no ha envejecido con gracia."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la durabilidad ya no está garantizada."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: oferta y demanda no siempre han avanzado juntas."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la lealtad se construye con inversión continua, según esta idea."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ninguna de las dos lecturas cuenta toda la historia honesta."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa estabilidad antigua claramente no va a volver pronto."),
        ],
      },
      p7: {
        title: "Four people discuss career transitions and learning",
        text: "Read what four people say about lifelong learning and career change.\n\nA) SOFIA: It was no small sacrifice retraining at forty, financially and emotionally, but I don't regret it at all.\n\nB) HENRI: My employer now treats upskilling as essential, a real shift from how things were a decade ago.\n\nC) AMIRA: On balance, I think intrinsic motivation matters more than any formal credential for genuine lifelong learning.\n\nD) TOBY: Had it not been for a mentor's encouragement, I'd never have considered retraining at all.\n",
        q: [
          mc("Who describes retraining at forty as no small sacrifice?", ["A", "B", "C", "D"], 0, "Sofia: 'It was no small sacrifice retraining at forty, financially and emotionally'."),
          mc("Whose employer now treats upskilling as essential?", ["A", "B", "C", "D"], 1, "Henri: 'My employer now treats upskilling as essential'."),
          mc("Who thinks intrinsic motivation matters more than formal credentials?", ["A", "B", "C", "D"], 2, "Amira: 'On balance, I think intrinsic motivation matters more than any formal credential'."),
          mc("Who credits a mentor's encouragement for their decision to retrain?", ["A", "B", "C", "D"], 3, "Toby: 'Had it not been for a mentor's encouragement, I'd never have considered retraining at all'."),
          mc("Who says they don't regret their decision at all?", ["A", "B", "C", "D"], 0, "Sofia: 'but I don't regret it at all'."),
          mc("Who mentions a shift from a decade ago?", ["A", "B", "C", "D"], 1, "Henri: 'a real shift from how things were a decade ago'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Amira: 'On balance, I think intrinsic motivation'."),
          mc("Who mentions a mentor specifically?", ["A", "B", "C", "D"], 3, "Toby: 'Had it not been for a mentor's encouragement'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras) — PLANIFICA 3-5 MIN ANTES", "Lee estos dos textos sobre el aprendizaje permanente y escribe un ENSAYO (240-280 palabras). ANTES de escribir, dedica 3-5 minutos a identificar el punto de acuerdo y desacuerdo entre las fuentes.\n\nTEXTO 1: 'Lifelong learning should be a personal responsibility. Individuals who fail to keep their skills current cannot reasonably blame employers or the economy for their own obsolescence.'\n\nTEXTO 2: 'Placing the entire burden of continuous retraining on individuals is unfair. Employers and governments must invest structurally in accessible, affordable lifelong learning opportunities.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras) — CRONOMETRA 30 MIN", "Elige UNA, cronometrando 30 minutos:\n· ARTÍCULO: 'What I've learned about learning itself' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un empleador proponiendo un programa de formación continua.\n· REPORT sobre el estado del aprendizaje permanente en tu sector: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha el monólogo (se oye dos veces) y completa los huecos con 1-3 palabras. Estrategia: lee los huecos ANTES de escuchar para anticipar qué tipo de palabra falta (sustantivo, verbo, número).", "This is Part Two. You will hear a career coach giving a talk about lifelong learning. Had it not been for a health scare within his own family, my client Marcus would never have seriously questioned a career that had gone perfectly well by every conventional measure. It was no small sacrifice retraining at forty-seven, involving a significant pay cut and considerable student debt. What surprised him most was discovering how much his accounting background actually transferred usefully into his new profession. This is not to suggest the transition was simply easy because of that transferable experience. His nursing supervisors, initially somewhat sceptical about training an older career changer, now cite him as a genuinely valuable team member. On balance, I'd tell anyone considering a similar change that the obstacles are real, but so is the value you bring. His story has since prompted considerable interest from other professionals contemplating similar career reinvention.", [
      fb("1. Marcus would never have questioned a career that had gone perfectly well by every ___ measure.", ["conventional"], "'gone perfectly well by every conventional measure'."),
      fb("2. Retraining at forty-seven was no small ___.", ["sacrifice"], "'It was no small sacrifice retraining'."),
      fb("3. The transition involved a significant pay cut and considerable student ___.", ["debt"], "'a significant pay cut and considerable student debt'."),
      fb("4. What surprised him most was how much his accounting ___ transferred usefully.", ["background"], "'his accounting background actually transferred usefully'."),
      fb("5. This is not to suggest the transition was simply ___ because of that experience.", ["easy"], "'the transition was simply easy because of that transferable experience'."),
      fb("6. His supervisors were initially somewhat ___ about training an older career changer.", ["sceptical"], "'initially somewhat sceptical about training an older career changer'."),
      fb("7. They now cite him as a genuinely valuable team ___.", ["member"], "'a genuinely valuable team member'."),
      fb("8. On balance, the coach says the obstacles are real, but so is the ___ you bring.", ["value"], "'the obstacles are real, but so is the value you bring'."),
      fb("9. His story has prompted considerable interest from others considering career ___.", ["reinvention"], "'contemplating similar career reinvention'."),
    ]),

    ...speakingParts({ p1: "si has aprendido algo nuevo recientemente fuera de un contexto académico formal", p2: "dos imágenes del aprendizaje permanente (una persona mayor estudiando en un ordenador portátil y un grupo de adultos en un aula de formación): comentadlas y decidid cuál representa mejor el aprendizaje permanente eficaz", p3: "qué es más importante para el aprendizaje permanente eficaz (la motivación intrínseca, el apoyo institucional, el tiempo disponible, los recursos económicos, la comunidad de aprendizaje): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 52", [
      "Estrategia practicada: técnica para las Partes 4-7 del Reading & Use of English y planificación eficaz del Writing.",
      "Vocabulario del aprendizaje permanente. Reading & Use of English, Writing, Listening P2 y Speaking completos.",
      "Mañana: estrategia de Listening (las 4 partes).",
    ]),
    INFO("Tarea para el Día 53", "Repasa la estrategia de hoy (P4-P7 + Writing). Mañana: técnica específica para cada parte del Listening."),
  ],
};

// ───────────────────────── DÍA 53 ─────────────────────────
const DAY53 = {
  title: "Día 53 — Estrategia: Listening (las 4 partes) · Las relaciones humanas y la inteligencia emocional",
  description: "Técnica específica para cada parte del Listening (grabaciones cortas, sentence completion, conversación interactiva, multiple matching) y gestión de las dos escuchas. Vocabulario de las relaciones humanas. Las 4 destrezas (formato C2); Listening completo (4 partes).",
  pedagogy: {
    objective: "Dominar la técnica específica para cada una de las 4 partes del Listening y aprovechar al máximo las dos escuchas.",
    summary: "Estrategia de Listening completa; relaciones humanas; Use of English P1-P7, Writing, Listening P1-P4, Speaking P1-P3.",
    commonMistakes: ["no leer las preguntas ANTES de cada audio.", "bloquearse en una respuesta perdida en vez de seguir escuchando.", "en P4, olvidar que cada monólogo se usa en DOS tareas distintas simultáneamente."],
    reviewPrompts: ["¿Qué haces en la primera escucha si te pierdes una respuesta?", "¿Cuántas preguntas tiene la Parte 4 del Listening en total?"],
  },
  items: [
    TEXT("🎯 Hoy: estrategia específica para las 4 PARTES DEL LISTENING. Vocabulario: las RELACIONES HUMANAS y la INTELIGENCIA EMOCIONAL."),
    GRAMMAR("Estrategia — Listening (las 4 partes)", `GENERAL: cada audio se oye DOS veces. Usa la PRIMERA escucha para respuestas que oigas con claridad y para orientarte; usa la SEGUNDA para confirmar y completar lo que te falte. Lee SIEMPRE las preguntas antes de cada audio.
PARTE 1 (3 grabaciones cortas, 6 preg, 3 opciones): cada extracto es independiente — si te pierdes una pregunta, sigue con la siguiente; no te quedes bloqueado.
PARTE 2 (sentence completion, 9 huecos, un monólogo largo): anticipa el TIPO de palabra que falta (sustantivo, número, adjetivo) antes de escuchar; escribe exactamente lo que oigas (1-3 palabras), sin parafrasear.
PARTE 3 (conversación con hablantes interactuando, 5 preg, 4 opciones): presta atención a CÓMO reacciona cada hablante a lo que dice el otro (acuerdo, matiz, contraste) — las respuestas dependen de la interacción, no solo del contenido.
PARTE 4 (multiple matching, 5 monólogos, DOS tareas simultáneas): cada monólogo se usa para responder a AMBAS tareas a la vez (tema + actitud) — no esperes a la segunda escucha para empezar la tarea 2.
⚠️ Nunca dejes una pregunta en blanco — una respuesta razonada, incluso con dudas, vale más que ninguna.`),
    WARN("Errores típicos del hispanohablante (C2)", "· No leer las preguntas antes del audio — llegas tarde a identificar qué se pregunta.\n· En P2, escribir una paráfrasis en vez de la palabra EXACTA que se oye.\n· En P4, centrarse solo en la Tarea 1 durante la primera escucha y dejar la Tarea 2 completamente para la segunda — mejor trabajar ambas desde el principio."),
    grammarEx("Use of English — Práctica de estrategia (Listening)", "Aplica la estrategia de cada parte.", [
      mc("En la Parte 2 (sentence completion), ¿qué debes escribir en el hueco?", ["exactamente la(s) palabra(s) que oyes, sin parafrasear", "un sinónimo que signifique lo mismo", "un resumen de la idea general"], 0, "hay que escribir literalmente lo que se oye, no parafrasear."),
      mc("En la Parte 3, las preguntas dependen sobre todo de:", ["cómo reacciona cada hablante a lo que dice el otro", "solo el contenido factual mencionado", "quién habla primero"], 0, "la interacción entre hablantes es clave en P3."),
      mc("En la Parte 4, cada monólogo responde a:", ["dos tareas simultáneamente (tema + actitud)", "solo una tarea", "ninguna tarea directamente"], 0, "P4 tiene DOS tareas que se responden con los mismos cinco monólogos."),
      mc("Si te pierdes una respuesta en la Parte 1, ¿qué deberías hacer?", ["seguir con la siguiente pregunta sin bloquearte", "detenerte y no continuar", "adivinar y dejar de escuchar el resto"], 0, "nunca te bloquees — sigue avanzando con las siguientes preguntas."),
      fb("¿Cuántas veces se oye cada audio en el examen real del Listening de C2? (número)", ["2", "dos"], "cada audio se oye DOS veces."),
    ]),
    GRAMMAR("Vocabulario del día — Las relaciones humanas y la inteligencia emocional (C2)", "Léxico de maestría sobre relaciones humanas."),
    deck("C2 S11D53 — Las relaciones humanas y la inteligencia emocional", [
      ["emotional intelligence", "inteligencia emocional", "Emotional intelligence predicts relationship success arguably better than raw intellect alone.", "sustantivo", "ɪˈməʊʃənl ɪnˈtelɪdʒəns"],
      ["attachment style", "estilo de apego", "Attachment style, formed early in life, shapes adult relationship patterns considerably.", "sustantivo", "əˈtætʃmənt staɪl"],
      ["interpersonal conflict", "conflicto interpersonal", "Unresolved interpersonal conflict often festers rather than genuinely resolving on its own.", "sustantivo", "ˌɪntəˈpɜːsənl ˈkɒnflɪkt"],
      ["empathy fatigue", "fatiga empática", "Empathy fatigue affects many caregivers who sustain emotional labour over prolonged periods.", "sustantivo", "ˈempəθi fəˈtiːɡ"],
      ["reciprocity", "reciprocidad", "Genuine reciprocity underpins healthy relationships far more than grand, sporadic gestures.", "sustantivo", "ˌresɪˈprɒsəti"],
      ["boundary-setting", "establecimiento de límites", "Healthy boundary-setting protects wellbeing without necessarily damaging genuine closeness.", "sustantivo", "ˈbaʊndri ˈsetɪŋ"],
      ["emotional labour", "trabajo emocional", "Emotional labour, though often invisible, demands genuine and sustained psychological effort.", "sustantivo", "ɪˈməʊʃənl ˈleɪbə"],
      ["conflict resolution", "resolución de conflictos", "Effective conflict resolution requires genuine listening, not merely tactical compromise alone.", "sustantivo", "ˈkɒnflɪkt ˌrezəˈluːʃn"],
      ["relational rupture", "ruptura relacional", "Relational rupture, though painful, can sometimes prompt genuinely valuable reconciliation and repair.", "sustantivo", "rɪˈleɪʃənl ˈrʌptʃə"],
      ["mutual vulnerability", "vulnerabilidad mutua", "Mutual vulnerability, though genuinely uncomfortable, often deepens authentic relational trust considerably.", "sustantivo", "ˈmjuːtʃuəl ˌvʌlnərəˈbɪləti"],
    ]),
    vocabEx("Vocabulario — Las relaciones humanas y la inteligencia emocional", "Elige la opción correcta.", [
      mc("The capacity to recognise and manage one's own and others' emotions:", ["emotional intelligence", "attachment style", "boundary-setting"], 0, "emotional intelligence."),
      mc("A pattern of relating to others, formed early and shaping adult relationships:", ["attachment style", "empathy fatigue", "reciprocity"], 0, "attachment style."),
      mc("Exhaustion resulting from sustained emotional caregiving for others:", ["empathy fatigue", "mutual vulnerability", "conflict resolution"], 0, "empathy fatigue."),
      mc("A mutual, balanced give-and-take within a relationship:", ["reciprocity", "relational rupture", "emotional labour"], 0, "reciprocity."),
      mc("Defining healthy limits to protect one's own wellbeing:", ["boundary-setting", "empathy fatigue", "interpersonal conflict"], 0, "boundary-setting."),
      mc("A significant break or breakdown in a relationship, sometimes followed by repair:", ["relational rupture", "reciprocity", "emotional intelligence"], 0, "relational rupture."),
    ]),

    ...uoe({
      p1: {
        title: "The quiet skill nobody teaches",
        text: "Emotional intelligence, notwithstanding decades of academic attention, remains a skill most educational systems (1)___ to explicitly teach, despite mounting evidence linking it directly to relationship success, career advancement, and general psychological wellbeing. Attachment style, formed largely (2)___ early childhood experience, continues shaping adult relationship patterns in ways many people never consciously recognise or examine. Interpersonal conflict, when handled skilfully, can actually strengthen relationships considerably, whereas conflict avoided or handled poorly tends to (3)___ quietly beneath the surface, resurfacing repeatedly in slightly different forms. Genuine reciprocity, rather than grand, occasional gestures, appears to (4)___ relationship satisfaction considerably more reliably over time. Boundary-setting, often mistakenly equated with coldness or rejection, actually (5)___ the kind of sustainable closeness that boundary-less relationships frequently, eventually struggle to maintain. What emerges from this accumulating body of research is recognition that relational skill, like any other genuine competence, can be deliberately (6)___ rather than simply left to chance or innate temperament alone.",
        q: [
          mc("(1)", ["fail", "neglect", "omit", "avoid"], 0, "'a skill most educational systems fail to explicitly teach'."),
          mc("(2)", ["through", "by", "from", "via"], 0, "'formed largely through early childhood experience'."),
          mc("(3)", ["fester", "linger", "remain", "persist"], 0, "'tends to fester quietly beneath the surface'."),
          mc("(4)", ["predict", "determine", "shape", "influence"], 0, "'appears to predict relationship satisfaction… reliably'."),
          mc("(5)", ["enables", "allows", "permits", "supports"], 0, "'actually enables the kind of sustainable closeness'."),
          mc("(6)", ["cultivated", "developed", "grown", "built"], 0, "'can be deliberately cultivated rather than… chance'."),
        ],
      },
      p2: {
        title: "The cost of caring too much",
        text: "It remains widely (1)___ among psychologists that sustained caregiving, whether professional or personal, carries genuine psychological cost that popular narratives about selfless caring frequently, unhelpfully overlook. Empathy fatigue, far from reflecting insufficient compassion, often results (2)___ from genuinely excessive, sustained emotional labour without adequate personal replenishment or support. This is not (3)___ suggest caregivers should simply care less — rather, sustainable caregiving requires genuine attention to caregivers' own emotional needs alongside those they support. Notwithstanding growing awareness of this genuine dynamic, many caregiving professions still lack adequate structural support (4)___ addressing this well-documented occupational risk directly. So too (5)___ concern grown regarding unpaid, informal caregivers, whose considerable emotional labour frequently goes entirely unrecognised and unsupported by any formal system whatsoever. What emerges from this growing body of research is recognition that genuine, sustainable care requires boundaries and support (6)___ much as it requires compassion itself.",
        q: [
          fb("(1)", ["held", "acknowledged"], "'It remains widely held/acknowledged among psychologists'."),
          fb("(2)", ["directly"], "'often results directly from genuinely excessive… labour'."),
          fb("(3)", ["to"], "'This is not to suggest'."),
          fb("(4)", ["for"], "'lack adequate structural support for addressing…'."),
          fb("(5)", ["has"], "'So too has concern grown regarding…'."),
          fb("(6)", ["as"], "'requires boundaries and support as much as it requires compassion'."),
        ],
      },
      p3: {
        title: "Repairing what breaks",
        text: "Relational rupture, though genuinely uncomfortable in the moment, need not signal a relationship's genuine end, provided both parties possess sufficient (1)___ and willingness to engage in honest, vulnerable repair. Conflict resolution research increasingly emphasises that HOW disagreement is handled matters considerably more for long-term relationship (2)___ than whether disagreement occurs at all — conflict itself, properly managed, proves entirely normal and even occasionally valuable. Mutual (3)___, though genuinely uncomfortable to practise, appears to deepen authentic trust considerably more reliably than either party's carefully guarded, self-protective emotional distance ever quite manages. This growing (4)___ has prompted many relationship therapists to focus specifically on repair skills, rather than solely on conflict avoidance or prevention alone. Couples and friendships that successfully navigate genuine rupture and (5)___ repair often report, somewhat counterintuitively, feeling considerably closer afterward than they did before the original conflict ever (6)___.",
        items: [
          { root: "skill", accepted: ["skill"], hint: "'sufficient skill and willingness to engage in… repair' (sustantivo, forma base)." },
          { root: "satisfy", accepted: ["satisfaction"], hint: "'long-term relationship satisfaction' (sustantivo)." },
          { root: "vulnerable", accepted: ["vulnerability"], hint: "'Mutual vulnerability, though genuinely uncomfortable' (sustantivo)." },
          { root: "recognise", accepted: ["recognition"], hint: "'This growing recognition has prompted…' (sustantivo)." },
          { root: "authentic", accepted: ["authentic"], hint: "'successfully navigate genuine rupture and authentic repair' (adjetivo, forma base)." },
          { root: "occur", accepted: ["occurred"], hint: "'before the original conflict ever occurred' (verbo, pasado)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso general",
        items: [
          { s1: "Genuine closeness rarely happens without some real vulnerability first.", key: "WITHOUT", s2: "Genuine closeness rarely happens ___ some real vulnerability first.", accepted: ["without"], explanation: "sin cambios estructurales complejos (ítem sencillo de repaso léxico)." },
          { s1: "The therapist says that unresolved conflict often festers over time.", key: "CONTENDS", s2: "The therapist ___ that unresolved conflict often festers over time.", accepted: ["contends"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "Setting boundaries was actually a considerable act of self-respect.", key: "SMALL", s2: "Setting boundaries was no ___ act of self-respect.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "There is some genuine truth to that, though it oversimplifies things.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to that, though it oversimplifies things.", accepted: ["undoubtedly"], explanation: "reconocer mérito (repaso S9)." },
          { s1: "In general, repair matters more than avoiding conflict altogether.", key: "BALANCE", s2: "On ___, repair matters more than avoiding conflict altogether.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
        ],
      },
      p5: {
        title: "The therapist who learned to rest",
        text: "For over fifteen years, family therapist Adaeze Nwosu had built a demanding practice supporting clients through some of the most emotionally difficult moments of their lives, gradually developing a reputation for seemingly limitless empathy and availability.\n\n\"I genuinely believed, for most of my career, that caring meant giving without any real limit,\" she reflected in a candid recent interview. \"It took me considerably longer than I'd like to admit to recognise the genuine cost that belief was quietly extracting.\"\n\nHer own turning point arrived during a period of what she now readily identifies as severe empathy fatigue, a condition she had, ironically, spent years helping her own clients recognise and address in themselves.\n\n\"It is genuinely difficult,\" she admitted, \"to recognise in yourself the exact pattern you've spent years teaching others to identify and address.\"\n\nHer subsequent recovery involved substantial professional restructuring — deliberately reducing her caseload, establishing considerably firmer boundaries around her availability, and, perhaps most difficult of all, accepting that sustainable care genuinely requires limits, not merely unlimited willingness alone.\n\n\"Setting those boundaries was no small act of professional courage,\" she noted, \"particularly in a field that has historically, and rather unhelpfully, glorified self-sacrifice as the genuine measure of dedication.\"\n\nHer current practice now explicitly incorporates boundary-setting and sustainable-care principles into her work with other caregivers, both professional and unpaid family members alike.\n\n\"On balance,\" she concluded, \"I now believe genuinely sustainable care requires as much attention to the caregiver's own needs as to those they're actually supporting — a lesson I had to learn the genuinely hard way myself.\"",
        q: [
          mc("What reputation had Adaeze built over fifteen years?", ["Limited availability.", "Seemingly limitless empathy and availability.", "Poor client relationships.", "Focus only on administrative work."], 1, "'gradually developing a reputation for seemingly limitless empathy and availability'."),
          mc("What did Adaeze genuinely believe for most of her career?", ["That boundaries were essential from the start.", "That caring meant giving without any real limit.", "That clients should manage themselves.", "That therapy was unnecessary."], 1, "'I genuinely believed, for most of my career, that caring meant giving without any real limit'."),
          mc("What condition did her turning point involve?", ["Financial difficulty.", "Severe empathy fatigue.", "A change of career entirely.", "A physical illness unrelated to work."], 1, "'a period of what she now readily identifies as severe empathy fatigue'."),
          mc("What did her recovery involve?", ["Doing nothing differently.", "Reducing her caseload and establishing firmer boundaries.", "Leaving the profession entirely.", "Increasing her workload."], 1, "'deliberately reducing her caseload, establishing considerably firmer boundaries around her availability'."),
          mc("How does she describe setting those boundaries?", ["Simple and easy.", "No small act of professional courage.", "Something she regrets.", "Unnecessary and unhelpful."], 1, "'Setting those boundaries was no small act of professional courage'."),
          mc("What does she now believe sustainable care requires?", ["Unlimited giving alone.", "As much attention to the caregiver's needs as to those they support.", "No attention to the caregiver at all.", "Complete emotional detachment."], 1, "'genuinely sustainable care requires as much attention to the caregiver's own needs as to those they're actually supporting'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Human relationships, for all their apparent everyday familiarity, involve considerably more genuine skill and deliberate practice than popular romantic narratives typically suggest. (1)___\n\nEmotional intelligence — recognising, understanding, and skilfully managing both one's own emotions and those of others — increasingly appears foundational to relationship success, arguably more so than compatibility of interests or background alone. (2)___ This particular skill, fortunately, can be deliberately developed rather than simply relying on innate temperament.\n\nConflict, contrary to popular assumption, does not itself predict relationship failure; how conflict gets handled, by contrast, predicts outcomes considerably more reliably. (3)___ Couples who navigate disagreement skilfully often report feeling closer afterward than before the original conflict occurred.\n\nThis finding has prompted growing therapeutic emphasis on genuine repair skills specifically, rather than on conflict avoidance or prevention as an end in itself. (4)___ Avoiding all conflict, it turns out, is neither realistic nor, evidently, particularly desirable.\n\nBoundary-setting, often mistakenly equated with coldness or emotional withdrawal, actually appears to support rather than undermine genuine closeness over time. (5)___ Sustainable intimacy, evidence increasingly suggests, requires limits as much as it requires genuine openness.\n\nWhat emerges from this accumulating body of research is a considerably more skill-based, less purely romantic view of what makes relationships genuinely succeed or fail over time. (6)___ Love, on this more grounded view, is not merely felt — it is, in significant part, actively and skilfully practised.",
        options: [
          "Familiarity, it turns out, breeds no automatic real competence.", // A -> gap1
          "Interests shared, alone, were never quite the deciding factor.", // B -> gap2
          "The manner of disagreement, evidently, is doing the real work.", // C -> gap3
          "Avoidance, whatever its appeal, was never the genuine solution.", // D -> gap4
          "Limits, properly held, are not the opposite of genuine closeness.", // E -> gap5
          "Feeling alone, on this account, was never quite the whole story.", // F -> gap6
          "No relationship has ever required any genuine emotional skill.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la familiaridad no genera competencia automática."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los intereses compartidos nunca fueron el factor decisivo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la manera de discrepar es lo que hace el trabajo real."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la evitación nunca fue la solución genuina."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: los límites bien sostenidos no son lo opuesto a la cercanía."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: sentir, en este relato, nunca fue toda la historia."),
        ],
      },
      p7: {
        title: "Four people discuss relationships and emotional intelligence",
        text: "Read what four people say about relationships and emotional intelligence.\n\nA) NINA: Setting boundaries with my family was no small act of courage, honestly, but it saved our relationship.\n\nB) PEDRO: My therapist contends that how we repair after conflict matters more than avoiding conflict itself.\n\nC) YASMIN: There is undoubtedly some truth to attachment theory, though I think it's often oversimplified in popular culture.\n\nD) CARL: On balance, I think emotional intelligence matters more than shared interests for lasting relationships.\n",
        q: [
          mc("Whose boundary-setting with family was no small act of courage?", ["A", "B", "C", "D"], 0, "Nina: 'Setting boundaries with my family was no small act of courage, honestly'."),
          mc("Whose therapist contends repair matters more than avoiding conflict?", ["A", "B", "C", "D"], 1, "Pedro: 'My therapist contends that how we repair after conflict matters more than avoiding conflict itself'."),
          mc("Who thinks attachment theory is often oversimplified in popular culture?", ["A", "B", "C", "D"], 2, "Yasmin: 'There is undoubtedly some truth to attachment theory, though I think it's often oversimplified'."),
          mc("Who thinks emotional intelligence matters more than shared interests?", ["A", "B", "C", "D"], 3, "Carl: 'On balance, I think emotional intelligence matters more than shared interests for lasting relationships'."),
          mc("Who says the boundary-setting saved their relationship?", ["A", "B", "C", "D"], 0, "Nina: 'but it saved our relationship'."),
          mc("Who mentions their own therapist specifically?", ["A", "B", "C", "D"], 1, "Pedro: 'My therapist contends that'."),
          mc("Who mentions popular culture specifically?", ["A", "B", "C", "D"], 2, "Yasmin: 'often oversimplified in popular culture'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 3, "Carl: 'On balance, I think emotional intelligence'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la inteligencia emocional y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Emotional intelligence should be taught explicitly in schools, alongside traditional academic subjects. Its absence from formal education represents a significant, damaging oversight.'\n\nTEXTO 2: 'Emotional intelligence develops best through lived experience and relationships, not formal classroom instruction. Schools risk reducing something genuinely human to a mechanical, box-ticking curriculum.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What a difficult relationship taught me' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un centro educativo proponiendo un programa de inteligencia emocional.\n· REVIEW de un libro o recurso sobre relaciones humanas que te haya resultado útil.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha la conversación (se oye dos veces) entre dos terapeutas hablando de relaciones. Estrategia: presta atención a cómo reacciona cada hablante a lo que dice el otro.", "This is Part Three. You will hear a conversation between two therapists, Adaeze and Pedro, discussing relationships. Adaeze: I genuinely believed for years that caring meant giving without any real limit. Pedro: That's a pattern I recognise in so many caregivers I've worked with, honestly. Adaeze: Setting boundaries was no small act of courage for me professionally. Pedro: I'd agree, though I'd add that clients often resist boundaries at first, before eventually appreciating them. Adaeze: On balance, I now think sustainable care requires as much attention to the caregiver as to the client. Pedro: There is undoubtedly some truth to that, though I'd stress it varies considerably by individual circumstance.", [
      mc("1. What did Adaeze genuinely believe for years?", ["That boundaries were essential from the start.", "That caring meant giving without any real limit.", "That therapy was unnecessary.", "That clients should be avoided."], 1, "'I genuinely believed for years that caring meant giving without any real limit'."),
      mc("2. How does Pedro respond to Adaeze's point?", ["He disagrees completely.", "He recognises that pattern in many caregivers he's worked with.", "He changes the subject.", "He says it's irrelevant."], 1, "'That's a pattern I recognise in so many caregivers I've worked with'."),
      mc("3. How does Adaeze describe setting boundaries?", ["Easy and simple.", "No small act of courage.", "Something she regrets.", "Unnecessary."], 1, "'Setting boundaries was no small act of courage for me professionally'."),
      mc("4. What does Pedro add to Adaeze's point about boundaries?", ["Nothing at all.", "That clients often resist boundaries at first before appreciating them.", "That boundaries never work.", "That clients always welcome boundaries immediately."], 1, "'clients often resist boundaries at first, before eventually appreciating them'."),
      mc("5. How does Pedro respond to Adaeze's final point?", ["He fully disagrees.", "He agrees there's some truth but stresses it varies by circumstance.", "He ignores it entirely.", "He says it's completely wrong."], 1, "'There is undoubtedly some truth to that, though I'd stress it varies considerably by individual circumstance'."),
    ]),

    ...speakingParts({ p1: "si crees que tienes una buena inteligencia emocional", p2: "dos imágenes de las relaciones humanas (dos amigos teniendo una conversación difícil pero honesta y una familia celebrando junta en armonía): comentadlas y decidid cuál representa mejor una relación sana", p3: "qué es más importante para relaciones humanas sanas (la inteligencia emocional, la comunicación honesta, el establecimiento de límites, la reciprocidad, el tiempo compartido): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen del Día 53", [
      "Estrategia practicada: técnica específica para las 4 partes del Listening y gestión eficaz de las dos escuchas.",
      "Vocabulario de las relaciones humanas y la inteligencia emocional. Reading & Use of English, Writing, Listening completo (P1-P4) y Speaking completos.",
      "Mañana: estrategia de Speaking (las 3 partes).",
    ]),
    INFO("Tarea para el Día 54", "Repasa la estrategia de Listening de hoy. Mañana: técnica específica para cada parte del Speaking."),
  ],
};

// ───────────────────────── DÍA 54 ─────────────────────────
const DAY54 = {
  title: "Día 54 — Estrategia: Speaking (las 3 partes) · La movilidad urbana y el transporte sostenible",
  description: "Técnica específica para las 3 partes del Speaking (entrevista, tarea colaborativa, turno largo + discusión) y gestión del tiempo en pareja. Vocabulario de la movilidad urbana. Las 4 destrezas (formato C2); Listening P4.",
  pedagogy: {
    objective: "Dominar la técnica específica para cada parte del Speaking y gestionar eficazmente el tiempo con el/la compañero/a de examen.",
    summary: "Estrategia de Speaking completa; movilidad urbana; Use of English P1-P7, Writing, Listening P4, Speaking P1-P3.",
    commonMistakes: ["monopolizar la Parte 2 sin dejar espacio a la decisión conjunta.", "no comentar la fotografía/imagen suficientemente antes de pasar a la decisión.", "en la Parte 3, hablar solo 1 minuto en vez de los 2 minutos completos del turno largo."],
    reviewPrompts: ["¿Cuánto dura el turno largo individual de la Parte 3?", "¿Qué debes hacer si tu compañero/a domina demasiado la conversación en la Parte 2?"],
  },
  items: [
    TEXT("🎯 Hoy: estrategia específica para las 3 PARTES DEL SPEAKING. Vocabulario: la MOVILIDAD URBANA y el TRANSPORTE SOSTENIBLE."),
    GRAMMAR("Estrategia — Speaking (las 3 partes)", `PARTE 1 (entrevista, 2 min): respuestas desarrolladas de 3-4 frases con razón y ejemplo — ni demasiado breves (suena poco fluido) ni excesivamente largas (parece un monólogo memorizado).
PARTE 2 (tarea colaborativa, 4 min): comenta la(s) imagen(es) primero (¿qué muestran, qué sugieren?) ANTES de pasar a la pregunta y la decisión conjunta. Deja espacio genuino a tu compañero/a — negocia, no monologues. Usa lenguaje de negociación: 'I take your point, but...', 'shall we settle on...'.
PARTE 3 (turno largo + discusión, 2 min individual + ~6 min conjunta): habla los 2 MINUTOS COMPLETOS sin parar — practica gestionar ese tiempo con ejemplos y desarrollo, no solo opinión breve. En la discusión conjunta, generaliza y evalúa críticamente, no repitas simplemente lo dicho en el turno largo.
GENERAL: da respuestas MATIZADAS con hedging/evaluación crítica (repasa S8-S9) — es lo que distingue el registro C2 del B2/C1. Si no entiendes una pregunta, pide que la repitan con naturalidad ('Could you clarify what you mean by...?') en vez de quedarte en silencio.`),
    WARN("Errores típicos del hispanohablante (C2)", "· Responder con frases demasiado cortas en la Parte 1 (falta de desarrollo).\n· No dejar hablar al compañero/a en la Parte 2 (monopolizar el turno).\n· Parar antes de los 2 minutos completos en el turno largo de la Parte 3 — practica cronometrarte en casa."),
    grammarEx("Use of English — Práctica de estrategia (Speaking)", "Aplica la estrategia de cada parte.", [
      mc("En la Parte 2, ¿qué deberías hacer ANTES de pasar a la decisión conjunta?", ["comentar la(s) imagen(es) con detalle", "pasar directamente a decidir", "esperar a que hable tu compañero/a primero y luego callar"], 0, "hay que comentar la imagen antes de decidir juntos."),
      mc("¿Cuánto dura el turno largo individual de la Parte 3?", ["2 minutos", "1 minuto", "4 minutos"], 0, "el turno largo individual dura 2 minutos."),
      mc("Si tu compañero/a domina demasiado la conversación en la Parte 2, ¿qué frase usarías?", ["'That's an interesting point — what do you think about...?'", "no decir nada y esperar", "interrumpir bruscamente"], 0, "redirigir con naturalidad, sin interrumpir bruscamente."),
      mc("¿Qué tipo de lenguaje distingue el registro C2 en el Speaking?", ["hedging y evaluación crítica matizada", "frases muy cortas y directas", "vocabulario técnico sin más"], 0, "el matiz (hedging/evaluación) es lo que distingue C2."),
      fb("¿Cuántos minutos dura el Speaking completo en pareja? (número)", ["16"], "16 minutos en pareja (24 en trío)."),
    ]),
    GRAMMAR("Vocabulario del día — La movilidad urbana y el transporte sostenible (C2)", "Léxico de maestría sobre movilidad urbana."),
    deck("C2 S11D54 — La movilidad urbana y el transporte sostenible", [
      ["urban mobility", "movilidad urbana", "Urban mobility planning increasingly prioritises pedestrians and cyclists over private vehicles.", "sustantivo", "ˈɜːbən məʊˈbɪləti"],
      ["public transit", "transporte público", "Investment in reliable public transit remains essential for reducing urban congestion.", "sustantivo", "ˈpʌblɪk ˈtrænzɪt"],
      ["car dependency", "dependencia del automóvil", "Car dependency has shaped urban sprawl across much of the twentieth century.", "sustantivo", "kɑː dɪˈpendənsi"],
      ["low-emission zone", "zona de bajas emisiones", "Low-emission zones have measurably improved air quality in several major cities.", "sustantivo", "ləʊ ɪˈmɪʃn zəʊn"],
      ["last-mile connectivity", "conectividad de última milla", "Last-mile connectivity remains the weakest link in many otherwise efficient transit systems.", "sustantivo", "lɑːst maɪl kəˌnekˈtɪvəti"],
      ["induced demand", "demanda inducida", "Induced demand means new road capacity often generates rather than relieves congestion.", "sustantivo", "ɪnˈdjuːst dɪˈmɑːnd"],
      ["active travel", "movilidad activa (a pie, bicicleta)", "Active travel infrastructure delivers substantial public health benefits alongside emissions reductions.", "sustantivo", "ˈæktɪv ˈtrævl"],
      ["transit-oriented development", "desarrollo orientado al transporte", "Transit-oriented development concentrates housing and amenities near reliable public transport.", "sustantivo", "ˈtrænzɪt ˈɔːrientɪd dɪˈveləpmənt"],
      ["congestion pricing", "peaje por congestión", "Congestion pricing has reduced traffic volumes considerably in several pioneering cities.", "sustantivo", "kənˈdʒestʃən ˈpraɪsɪŋ"],
      ["mobility justice", "justicia en la movilidad", "Mobility justice demands transport systems serve low-income communities as reliably as wealthy ones.", "sustantivo", "məʊˈbɪləti ˈdʒʌstɪs"],
    ]),
    vocabEx("Vocabulario — La movilidad urbana y el transporte sostenible", "Elige la opción correcta.", [
      mc("The phenomenon where new road capacity generates additional traffic rather than relieving it:", ["induced demand", "active travel", "congestion pricing"], 0, "induced demand."),
      mc("Charging drivers to enter congested areas at peak times:", ["congestion pricing", "last-mile connectivity", "urban mobility"], 0, "congestion pricing."),
      mc("Walking or cycling as a primary mode of transport:", ["active travel", "car dependency", "transit-oriented development"], 0, "active travel."),
      mc("An area restricting high-polluting vehicles to improve air quality:", ["low-emission zone", "public transit", "mobility justice"], 0, "low-emission zone."),
      mc("Ensuring transport systems serve all communities fairly, regardless of income:", ["mobility justice", "car dependency", "induced demand"], 0, "mobility justice."),
      mc("Building housing and amenities concentrated near reliable public transport:", ["transit-oriented development", "last-mile connectivity", "congestion pricing"], 0, "transit-oriented development."),
    ]),

    ...uoe({
      p1: {
        title: "Why wider roads make traffic worse",
        text: "Urban planners have long grappled with a genuinely counterintuitive finding: widening roads to relieve congestion frequently, paradoxically, (1)___ to worse congestion over time rather than genuine, lasting relief. This phenomenon, known as induced demand, occurs (2)___ additional road capacity encourages more total driving rather than simply accommodating existing traffic more efficiently. Cities that have instead invested heavily in public transit and active travel infrastructure have, by contrast, often achieved considerably more durable congestion (3)___ than road expansion alone ever quite managed. Congestion pricing, though frequently unpopular initially among affected drivers, has demonstrated measurable success (4)___ several pioneering cities, reducing traffic volumes while simultaneously funding further transit investment. Mobility justice advocates, meanwhile, (5)___ that transport policy must explicitly consider how different interventions affect low-income communities, who often depend disproportionately on public transit yet frequently receive the least policy attention and investment. What emerges from this accumulating evidence is a genuinely counterintuitive lesson: sometimes the most effective way to (6)___ traffic is not building more road capacity, but building considerably less of it.",
        q: [
          mc("(1)", ["leads", "results", "brings", "causes"], 0, "'frequently… leads to worse congestion'."),
          mc("(2)", ["because", "since", "as", "given"], 0, "'occurs because additional road capacity encourages'."),
          mc("(3)", ["relief", "reduction", "improvement", "solution"], 0, "'considerably more durable congestion relief'."),
          mc("(4)", ["in", "across", "within", "throughout"], 0, "'demonstrated measurable success in several… cities'."),
          mc("(5)", ["contend", "say", "tell", "state simply"], 0, "'mobility justice advocates… contend that'."),
          mc("(6)", ["reduce", "solve", "address", "manage"], 0, "'the most effective way to reduce traffic'."),
        ],
      },
      p2: {
        title: "The last mile problem",
        text: "Public transit systems, however extensive and efficient in principle, frequently fail (1)___ deliver genuinely convenient door-to-door travel, leaving what planners term the 'last mile' — the final, often inconvenient stretch between a transit stop and someone's actual destination. This is not (2)___ suggest transit investment lacks genuine value — rather, it highlights that transit alone, absent complementary last-mile solutions, often fails to attract riders who would otherwise readily, happily abandon private car use. So too (3)___ growing interest in integrating cycling infrastructure, ride-sharing, and pedestrian-friendly design directly with transit networks, addressing this persistent gap more holistically. Notwithstanding genuine progress in several pioneering cities, most urban transit systems still (4)___ considerably from inadequate last-mile connectivity, undermining otherwise genuinely well-designed core transit infrastructure. Insofar (5)___ cities successfully address this particular gap, ridership and genuine car-use reduction tend to follow considerably more reliably than transit investment alone ever quite achieves. What ultimately determines transit success, most urban planners increasingly agree, is not core infrastructure quality (6)___, but how seamlessly that core infrastructure connects to riders' actual, everyday first and last mile needs.",
        q: [
          fb("(1)", ["to"], "'frequently fail to deliver'."),
          fb("(2)", ["to"], "'This is not to suggest'."),
          fb("(3)", ["has"], "'So too has growing interest in integrating…'."),
          fb("(4)", ["suffer"], "'most urban transit systems still suffer considerably from'."),
          fb("(5)", ["as"], "'Insofar as cities successfully address'."),
          fb("(6)", ["alone"], "'not core infrastructure quality alone'."),
        ],
      },
      p3: {
        title: "Redesigning the city around people",
        text: "Transit-oriented (1)___, concentrating housing and amenities within convenient walking distance of reliable public transport, has gained considerable traction among urban planners seeking genuine alternatives to car-dependent suburban sprawl. This approach requires substantial upfront (2)___ in both transit infrastructure and supportive zoning reform, a combination many cities have historically struggled to coordinate effectively across different, often competing government departments. Critics argue such development can sometimes prove genuinely (3)___, inadvertently displacing lower-income residents as newly transit-connected neighbourhoods become increasingly desirable and correspondingly expensive. Proponents counter that thoughtfully designed affordable housing requirements can substantially mitigate this genuine (4)___, ensuring transit-oriented development benefits a genuinely broad, economically diverse population rather than primarily wealthier newcomers alone. This ongoing (5)___ between transit-oriented development's genuine environmental benefits and its potential social costs increasingly shapes how cities approach urban (6)___ policy more broadly.",
        items: [
          { root: "develop", accepted: ["development"], hint: "'Transit-oriented development, concentrating housing…' (sustantivo)." },
          { root: "invest", accepted: ["investment"], hint: "'requires substantial upfront investment' (sustantivo)." },
          { root: "exclude", accepted: ["exclusionary"], hint: "'sometimes prove genuinely exclusionary' (adjetivo)." },
          { root: "concern", accepted: ["concern"], hint: "'substantially mitigate this genuine concern' (sustantivo, forma base)." },
          { root: "tense", accepted: ["tension"], hint: "'This ongoing tension between transit-oriented development's…' (sustantivo)." },
          { root: "plan", accepted: ["planning"], hint: "'shapes how cities approach urban planning policy' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso general",
        items: [
          { s1: "Widening roads often results in worse traffic, not better.", key: "LEADS", s2: "Widening roads often ___ to worse traffic, not better.", accepted: ["leads"], explanation: "verbo de causa (repaso léxico)." },
          { s1: "The report says that congestion pricing has reduced traffic significantly.", key: "CONTENDS", s2: "The report ___ that congestion pricing has reduced traffic significantly.", accepted: ["contends"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "Achieving that reduction was actually a considerable planning success.", key: "SMALL", s2: "Achieving that reduction was no ___ planning success.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "Notwithstanding progress, most cities still lack adequate last-mile connectivity.", key: "GAP", s2: "Notwithstanding progress, most cities still face a genuine last-mile ___.", accepted: ["gap"], explanation: "sustantivo resuntivo (repaso S9)." },
          { s1: "In general, transit-oriented development benefits a broad population, if well designed.", key: "BALANCE", s2: "On ___, transit-oriented development benefits a broad population, if well designed.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
        ],
      },
      p5: {
        title: "The mayor who removed a highway",
        text: "When Mayor Elena Restrepo first proposed removing a major elevated highway running directly through her city's downtown core, replacing it with a boulevard prioritising pedestrians, cyclists, and public transit, even several of her closest political allies privately considered the proposal genuinely, politically reckless.\n\n\"Notwithstanding considerable pushback from drivers and some local businesses,\" she recalled in a retrospective interview marking the project's fifth anniversary, \"I remained genuinely convinced the evidence on induced demand pointed clearly in one particular direction.\"\n\nThe project's early months proved, by her own honest admission, genuinely difficult. \"Traffic modelling predicted considerable short-term disruption, and that prediction, as it happens, proved entirely accurate,\" she acknowledged candidly.\n\nWhat surprised even her own transportation planners, however, was how quickly traffic patterns adapted once the highway capacity genuinely disappeared. \"Within about eighteen months,\" she noted, \"overall traffic volumes had actually decreased, not merely shifted elsewhere as critics had confidently, repeatedly predicted.\"\n\n\"This is not to suggest the transition was painless,\" she clarified carefully. \"Some businesses genuinely struggled during the disruptive construction period, and we worked hard, imperfectly, to support them through it.\"\n\nOn balance, she now considers the project her administration's most significant achievement, pointing to substantial measured improvements in air quality, pedestrian safety, and genuine neighbourhood economic revitalisation along the new boulevard corridor.\n\n\"Removing that highway was no small political risk,\" she reflected. \"But five years later, I'd make precisely the same decision again, with considerably more confidence than I genuinely felt the very first time.\"",
        q: [
          mc("What did Mayor Restrepo propose?", ["Building a new highway.", "Removing an elevated highway and replacing it with a boulevard.", "Expanding parking downtown.", "Banning all public transit."], 1, "'removing a major elevated highway… replacing it with a boulevard prioritising pedestrians, cyclists, and public transit'."),
          mc("How did the project's early months go, by her own admission?", ["Perfectly smoothly.", "Genuinely difficult, with predicted short-term disruption proving accurate.", "Completely uneventful.", "Immediately celebrated by everyone."], 1, "'The project's early months proved, by her own honest admission, genuinely difficult… that prediction… proved entirely accurate'."),
          mc("What surprised even her own planners?", ["Nothing surprising happened.", "How quickly traffic patterns adapted, with volumes actually decreasing.", "That traffic got dramatically worse.", "That the project was cancelled."], 1, "'overall traffic volumes had actually decreased, not merely shifted elsewhere as critics had… predicted'."),
          mc("What does she clarify about the transition?", ["That it was completely painless.", "That it was not painless, and some businesses genuinely struggled.", "That no businesses were affected.", "That it never actually happened."], 1, "'This is not to suggest the transition was painless… Some businesses genuinely struggled'."),
          mc("How does she now view the project?", ["As a mistake.", "As her administration's most significant achievement.", "As irrelevant to her legacy.", "As something she'd never repeat."], 1, "'she now considers the project her administration's most significant achievement'."),
          mc("Would she make the same decision again?", ["No, never.", "Yes, with more confidence than she initially felt.", "She's unsure.", "Only under different circumstances."], 1, "'I'd make precisely the same decision again, with considerably more confidence than I genuinely felt the very first time'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Urban transport policy, across the past century, has largely organised cities around private vehicle movement, an assumption increasingly questioned as its genuine costs become considerably more visible and better understood. (1)___\n\nCar-centric urban design, whatever its historical convenience, has produced considerable costs rarely fully accounted for in original planning decisions — air pollution, traffic fatalities, and vast amounts of land dedicated to roads and parking rather than housing or genuine public space. (2)___ These costs, though real, proved historically easy to overlook precisely because they accumulated gradually rather than appearing all at once.\n\nAlternative approaches — public transit investment, active travel infrastructure, transit-oriented development — have gained considerable traction as these accumulated costs have become genuinely harder to ignore. (3)___ Implementation, however, remains politically genuinely difficult, given how deeply car-centric assumptions remain embedded in existing infrastructure and public expectation alike.\n\nCities that have successfully implemented alternative approaches often report initial, genuine public resistance followed by considerably broader acceptance once tangible benefits become concretely, visibly apparent. (4)___ Scepticism, it turns out, frequently yields to genuine enthusiasm once results speak clearly for themselves.\n\nThis pattern suggests that genuine transport transformation requires political courage precisely because benefits typically arrive somewhat later than the disruption change inevitably requires. (5)___ Short-term political costs, in other words, frequently precede longer-term genuine public gratitude.\n\nWhat emerges from this accumulating experience is recognition that reshaping cities around people rather than vehicles, whatever its genuine political difficulty, increasingly represents not reckless idealism but rather evidence-based, increasingly mainstream urban policy. (6)___ The question facing most cities is no longer really whether to pursue this shift, but how quickly and how skilfully they can manage its inevitable, genuine transition costs.",
        options: [
          "That assumption, it turns out, was never quite free of cost.", // A -> gap1
          "Those costs, gradual as they were, still added up considerably.", // B -> gap2
          "Momentum, evidently, has been building for some time now.", // C -> gap3
          "Doubt, early on, rarely survives visible, concrete results for long.", // D -> gap4
          "Timing, here, works against the politician who moves first.", // E -> gap5
          "Reckless idealism, on this evidence, is simply the wrong label.", // F -> gap6
          "No city has ever questioned car-centric urban design.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa suposición nunca estuvo libre de coste."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esos costes, graduales, igual se acumularon considerablemente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el impulso lleva tiempo acumulándose."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la duda rara vez sobrevive a resultados visibles y concretos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el momento juega en contra del político que se mueve primero."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: idealismo temerario es, según esta evidencia, simplemente la etiqueta equivocada."),
        ],
      },
      p7: {
        title: "Four people discuss urban mobility",
        text: "Read what four people say about urban transport and mobility.\n\nA) RUBY: Removing that highway was no small political risk for our mayor, but it genuinely paid off.\n\nB) SAM: My city's congestion pricing scheme contends it will reduce traffic, and early data supports that claim.\n\nC) NADIA: On balance, I think active travel infrastructure matters more than expanding road capacity ever will.\n\nD) FELIX: There is undoubtedly some truth to induced demand, though I still find it counterintuitive, honestly.\n",
        q: [
          mc("Whose mayor took a highway removal risk that genuinely paid off?", ["A", "B", "C", "D"], 0, "Ruby: 'Removing that highway was no small political risk for our mayor, but it genuinely paid off'."),
          mc("Whose city's congestion pricing scheme is supported by early data?", ["A", "B", "C", "D"], 1, "Sam: 'My city's congestion pricing scheme contends it will reduce traffic, and early data supports that claim'."),
          mc("Who thinks active travel infrastructure matters more than road expansion?", ["A", "B", "C", "D"], 2, "Nadia: 'On balance, I think active travel infrastructure matters more than expanding road capacity ever will'."),
          mc("Who still finds induced demand counterintuitive despite acknowledging some truth to it?", ["A", "B", "C", "D"], 3, "Felix: 'There is undoubtedly some truth to induced demand, though I still find it counterintuitive'."),
          mc("Who mentions political risk specifically?", ["A", "B", "C", "D"], 0, "Ruby: 'Removing that highway was no small political risk'."),
          mc("Who mentions early data specifically?", ["A", "B", "C", "D"], 1, "Sam: 'early data supports that claim'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Nadia: 'On balance, I think active travel infrastructure'."),
          mc("Who says this 'honestly'?", ["A", "B", "C", "D"], 3, "Felix: 'I still find it counterintuitive, honestly'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la movilidad urbana y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Cities should prioritise public transit and active travel over private vehicle infrastructure. The evidence on induced demand makes continued road expansion genuinely counterproductive.'\n\nTEXTO 2: 'Removing road capacity ignores the genuine needs of suburban and rural commuters who have no realistic public transit alternative. Transport policy must serve all residents, not just dense urban cores.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'How I get around my city, and what I'd change' — reflexiona con ejemplos.\n· CARTA/EMAIL formal a un ayuntamiento proponiendo una mejora concreta de movilidad urbana.\n· REPORT sobre el estado del transporte público en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas)", "Escucha a cinco personas hablando de movilidad urbana (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué tema tratan?): A public transit · B congestion pricing · C active travel · D induced demand · E mobility justice · F car dependency · G transit-oriented development · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely worried · C proud · D reflective · E defensive · F pragmatic · G frustrated · H sceptical.", "This is Part Four. You will hear five people talking about urban mobility. Speaker One: Our city's new congestion pricing scheme has reduced traffic considerably, and I feel genuinely proud of that result. Speaker Two: Car dependency in my suburb worries me deeply, honestly, given how few alternatives genuinely exist. Speaker Three: Reflecting on our highway removal project now, five years later, I see it very differently than I did at the time. Speaker Four: Mobility justice concerns shaped our entire transit redesign, though some critics remain frustrated by the pace of change. Speaker Five: I remain sceptical that active travel infrastructure alone can genuinely replace private car use at scale.", [
      mc("Speaker 1 — TAREA UNO (tema)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: congestion pricing."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: car dependency."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: induced demand."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: mobility justice."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: active travel."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proud."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely worried."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reflective."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 6, "G: frustrated."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: sceptical."),
    ]),

    ...speakingParts({ p1: "cómo te desplazas habitualmente en tu ciudad y qué opinas del transporte disponible", p2: "dos imágenes de la movilidad urbana (una calle congestionada de coches y un carril bici concurrido junto a una parada de autobús): comentadlas y decidid cuál representa mejor el futuro deseable de la movilidad urbana", p3: "qué es más eficaz para mejorar la movilidad urbana (invertir en transporte público, crear infraestructura ciclista, aplicar peajes por congestión, restringir el uso del coche privado, rediseñar el urbanismo): comentadlo y decidid lo más eficaz" }),

    SUMMARY("Resumen del Día 54", [
      "Estrategia practicada: técnica específica para las 3 partes del Speaking y gestión del tiempo en pareja.",
      "Vocabulario de la movilidad urbana y el transporte sostenible. Reading & Use of English, Writing, Listening P4 y Speaking completos.",
      "Mañana: repaso final de la Semana 11 + mini-simulacro estratégico.",
    ]),
    INFO("Tarea para el Día 55", "Repasa la estrategia de las 4 destrezas de esta semana. Mañana: repaso final + mini-simulacro estratégico."),
  ],
};

// ───────────────────────── DÍA 55 ─────────────────────────
const DAY55 = {
  title: "Día 55 — Repaso de la semana + mini-simulacro estratégico",
  description: "Consolidación de la estrategia de examen completa: Reading & UoE parte por parte, planificación del Writing, técnica de Listening y de Speaking. Vocabulario de consumismo, aprendizaje permanente, relaciones humanas y movilidad urbana. Las 4 destrezas (formato C2); Listening P1. Al final, el mini-simulacro estratégico de la Semana 11.",
  pedagogy: {
    objective: "Consolidar toda la estrategia de examen de la semana antes de la recta final (Semana 12) y el simulacro final.",
    summary: "Repaso de estrategia completa; Use of English P1-P7; Writing; Listening; Speaking; mini-simulacro estratégico.",
    reviewPrompts: ["¿Qué parte del examen te sigue generando más ansiedad de tiempo?", "Repásalo todo antes de la recta final (Semana 12) y el simulacro final del Día 60."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 11 del C2 — Día 55/60. Consolidas TODA LA ESTRATEGIA DE EXAMEN: Reading & UoE parte por parte, planificación del Writing, técnica de Listening y de Speaking. Al final, el mini-simulacro estratégico (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 11 — Estrategia completa", `READING & USE OF ENGLISH: P1-P3 (léxico/gramática/formación) ≈ 25-30 min; P4-P7 (transformaciones/lectura/gapped text/matching) ≈ resto de los 90 min. Lee las preguntas antes del texto en P5/P7; busca cohesión (no solo tema) en P6.
WRITING: 3-5 min de planificación antes del P1 (identifica acuerdo/desacuerdo entre fuentes); 40 min para P1, 30 min para P2, 5-10 min de revisión.
LISTENING: lee las preguntas antes de cada audio; usa la 1ª escucha para orientarte, la 2ª para confirmar; en P4, trabaja ambas tareas desde el principio.
SPEAKING: respuestas desarrolladas de 3-4 frases (P1); comenta la imagen antes de decidir (P2); habla los 2 minutos completos del turno largo (P3); usa hedging/evaluación crítica para el registro C2.
Con esto completas la semana de ESTRATEGIA. La Semana 12, la última, combina todo en simulacros cronometrados por destreza y culmina en el SIMULACRO FINAL del Día 60.`),
    grammarEx("Use of English — Repaso mixto de la Semana 11", "Completa o elige.", [
      mc("En la Parte 4 del C2, ¿cuántas palabras se admiten (a diferencia del C1)?", ["entre 3 y 8", "entre 3 y 6", "entre 2 y 5"], 0, "C2 admite 3-8 palabras (C1 admite 3-6)."),
      mc("¿Cuánto tiempo, como mínimo, deberías dedicar a planificar el Writing P1?", ["3-5 minutos", "ningún tiempo, hay que empezar a escribir ya", "15-20 minutos"], 0, "3-5 minutos de planificación mejoran la coherencia."),
      mc("En el Listening P4, ¿cuántas tareas responde cada monólogo simultáneamente?", ["dos", "una", "ninguna"], 0, "P4 tiene dos tareas simultáneas por cada tanda de monólogos."),
      mc("¿Cuánto dura el turno largo individual del Speaking P3?", ["2 minutos", "1 minuto", "4 minutos"], 0, "el turno largo individual dura 2 minutos."),
      mc("¿Qué deberías hacer si te atascas en una pregunta difícil del Use of English?", ["marcarla mentalmente y seguir, volver al final si hay tiempo", "quedarte en ella hasta resolverla sin importar el tiempo", "dejarla en blanco definitivamente"], 0, "nunca te bloquees — sigue avanzando y vuelve si hay tiempo."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 11", "Repasa los mazos (consumismo, aprendizaje permanente, relaciones humanas, movilidad urbana)."),
    vocabEx("Vocabulario — Repaso de la Semana 11", "Elige la opción correcta.", [
      mc("Spending visibly and excessively to display wealth or status:", ["conspicuous consumption", "impulse purchase", "brand loyalty"], 0, "conspicuous consumption."),
      mc("Learning new skills to adapt to changing job requirements:", ["upskilling", "obsolescent skillset", "adult education"], 0, "upskilling."),
      mc("The capacity to recognise and manage one's own and others' emotions:", ["emotional intelligence", "attachment style", "boundary-setting"], 0, "emotional intelligence."),
      mc("The phenomenon where new road capacity generates additional traffic:", ["induced demand", "active travel", "congestion pricing"], 0, "induced demand."),
      mc("A subtle design choice that shifts behaviour without restricting choice:", ["behavioural nudge", "retail therapy", "marketing saturation"], 0, "behavioural nudge."),
      mc("A significant career change, often involving retraining:", ["professional reinvention", "self-directed learning", "cognitive plasticity"], 0, "professional reinvention."),
      mc("Defining healthy limits to protect one's own wellbeing:", ["boundary-setting", "empathy fatigue", "interpersonal conflict"], 0, "boundary-setting."),
      mc("Charging drivers to enter congested areas at peak times:", ["congestion pricing", "last-mile connectivity", "urban mobility"], 0, "congestion pricing."),
    ]),

    ...uoe({
      p1: {
        title: "Eleven weeks into C2",
        text: "Reaching the end of the eleventh full week of C2 preparation (1)___ a genuinely significant milestone, since this particular week has focused entirely on strategy and technique rather than any further new content. Learners who have engaged seriously with this week's genuinely practical material should feel (2)___ more confident approaching the exam's specific timing and format demands than at any earlier point in the course. This particular confidence, however, still requires (3)___ practice under genuinely realistic, cronometrado conditions before the final exam itself. What this week ultimately (4)___ is that raw linguistic competence alone, however genuinely strong, cannot guarantee strong exam performance without adequate strategic preparation alongside it. Learners who (5)___ this particular lesson will find themselves considerably better equipped for the single remaining week before their final simulation. In light of this milestone, the course's very last week (6)___ combine everything — grammar, rhetoric, synthesis, and now strategy — into fully realistic, cronometrado practice.",
        q: [
          mc("(1)", ["represents", "marks", "shows", "proves"], 0, "'represents a genuinely significant milestone'."),
          mc("(2)", ["considerably", "hardly", "barely", "scarcely"], 0, "'should feel considerably more confident'."),
          mc("(3)", ["sustained", "continued", "further", "ongoing"], 2, "'still requires further practice under… conditions'."),
          mc("(4)", ["demonstrates", "shows", "proves", "reveals"], 3, "'What this week ultimately reveals is'."),
          mc("(5)", ["internalise", "learn", "absorb", "grasp"], 0, "'Learners who internalise this particular lesson'."),
          mc("(6)", ["will", "would", "should"], 0, "'the course's very last week will… combine everything'."),
        ],
      },
      p2: {
        title: "What strategy actually buys you",
        text: "It is widely (1)___ among experienced examiners that two candidates with genuinely similar underlying linguistic competence can achieve meaningfully different scores based largely (2)___ how effectively each manages time and technique under real exam pressure. Insofar (3)___ strategy can be taught at all, this week has deliberately focused on making implicit, intuitive good practice considerably more explicit and consciously deliberate. So too (4)___ genuine exam-day calm depend heavily on this same underlying strategic preparation, since familiar, well-practised routine considerably reduces the anxiety novel, unfamiliar pressure otherwise tends to generate. Little did many candidates realise, before deliberately practising under genuinely timed conditions, (5)___ much smoother genuinely familiar strategic routine would eventually feel compared to their earlier, less structured practice attempts. Notwithstanding this genuine value, strategy alone cannot substitute for genuine underlying competence — the two must work together, by the same token (6)___ genuine fluency itself requires both raw ability and deliberate, practised technique working in careful tandem.",
        q: [
          fb("(1)", ["held", "acknowledged", "accepted"], "'It is widely held/acknowledged/accepted among… examiners'."),
          fb("(2)", ["on", "upon"], "'based largely on/upon how effectively each manages'."),
          fb("(3)", ["as"], "'Insofar as strategy can be taught at all'."),
          fb("(4)", ["does"], "'So too does genuine exam-day calm depend on'."),
          fb("(5)", ["how"], "'Little did many candidates realise… how much smoother'."),
          fb("(6)", ["that"], "'by the same token that genuine fluency itself requires'."),
        ],
      },
      p3: {
        title: "The final week ahead",
        text: "With eleven weeks now genuinely, solidly (1)___ them, learners approach the course's absolute final stretch with a considerably more complete strategic and linguistic (2)___ than they possessed even one week earlier, before this week's explicit strategic focus. Week Twelve, the course's very last, will combine everything covered so far into fully realistic, timed simulacros — first by individual (3)___, then a complete combined simulation mirroring genuine exam-day conditions in their entirety. This deliberate final (4)___ matters considerably: nothing builds genuine exam-day confidence quite as reliably as repeated, realistic practice under authentic conditions. Learners who can successfully (5)___ this coming final week's genuinely demanding, realistic practice will approach their actual exam date with considerably more confidence than isolated preparation, however thorough, could ever quite provide alone. What the final week ultimately (6)___, building directly on eleven weeks of substantial existing foundation, is the specific, practised confidence that only genuinely realistic exam-condition rehearsal can reliably deliver.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'eleven weeks now… behind them' (forma base, preposición)." },
          { root: "equip", accepted: ["toolkit"], hint: "'a considerably more complete strategic and linguistic toolkit' → toolkit." },
          { root: "skill", accepted: ["skill"], hint: "'first by individual skill, then a complete combined simulation' (sustantivo, forma base)." },
          { root: "structure", accepted: ["structure"], hint: "'This deliberate final structure matters considerably' (sustantivo, forma base)." },
          { root: "navigate", accepted: ["navigate"], hint: "'successfully navigate this coming final week's… practice' (verbo, forma base)." },
          { root: "offer", accepted: ["offer", "offers"], hint: "'What the final week ultimately offer(s)' → offer/offers." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 11",
        items: [
          { s1: "The candidate's biggest challenge remained managing time effectively across all four skills.", key: "MANAGING", s2: "___ time effectively across all four skills remained the candidate's biggest challenge.", accepted: ["managing"], explanation: "gerundio como sujeto (repaso general)." },
          { s1: "There is some genuine truth to that concern, though preparation reduces it considerably.", key: "UNDOUBTEDLY", s2: "There is ___ some truth to that concern, though preparation reduces it considerably.", accepted: ["undoubtedly"], explanation: "reconocer mérito (repaso S9)." },
          { s1: "Mastering exam timing was actually a considerable practical achievement.", key: "SMALL", s2: "Mastering exam timing was no ___ practical achievement.", accepted: ["small"], explanation: "no small (litote, repaso S8)." },
          { s1: "The coach says that realistic practice matters more than raw ability alone.", key: "CONTENDS", s2: "The coach ___ that realistic practice matters more than raw ability alone.", accepted: ["contends"], explanation: "verbo de reporte (repaso S4)." },
          { s1: "In general, combining strategy and competence produces the strongest results.", key: "BALANCE", s2: "On ___, combining strategy and competence produces the strongest results.", accepted: ["balance"], explanation: "on balance (repaso S9)." },
        ],
      },
      p5: {
        title: "What fifty-five days reveals about exam readiness",
        text: "A dedicated C2 candidate, having just completed exactly fifty-five days of demanding, cumulative study, decided to attempt a genuinely full, timed practice exam under conditions as close to the real thing as she could realistically arrange at home.\n\n\"I'd assumed, going in,\" she later admitted candidly, \"that my main remaining weakness would be grammar or vocabulary. It turned out, rather humblingly, to be something considerably more mundane: simple time management.\"\n\nHer first attempt at the Reading and Use of English section, though grammatically strong throughout, left her with barely ten minutes for the final two parts, having spent, by her own honest calculation, nearly twice her intended time on the earlier sections.\n\n\"On balance,\" she reflected, \"I think this particular week's strategic focus mattered considerably more than I'd initially, perhaps arrogantly assumed it would.\"\n\nHer second attempt, deliberately applying the specific timing guidance from this particular week's practice, proved considerably smoother. \"It is genuinely remarkable,\" she noted, \"how much calmer the whole experience felt once I actually had a clear, practised plan for managing my time part by part.\"\n\nThe Speaking section presented its own distinct challenge. \"I kept stopping my long turn well before the full two minutes,\" she admitted, \"a habit this week's explicit timing practice specifically helped me finally, genuinely correct.\"\n\n\"There is undoubtedly some truth to the idea that raw ability matters most,\" she concluded in her own study journal. \"But this week taught me that strategy isn't some minor, optional add-on — it's genuinely, practically what determines whether that underlying ability actually shows up fully on exam day itself.\"",
        q: [
          mc("What had the candidate assumed would be her main remaining weakness?", ["Time management.", "Grammar or vocabulary.", "Listening comprehension.", "Speaking fluency."], 1, "'I'd assumed, going in, that my main remaining weakness would be grammar or vocabulary'."),
          mc("What did her first timed attempt at Reading and Use of English reveal?", ["No problems at all.", "She'd spent nearly twice her intended time on earlier sections, leaving little time for the rest.", "Grammar errors throughout.", "That she should skip the section entirely."], 1, "'left her with barely ten minutes for the final two parts, having spent… nearly twice her intended time on the earlier sections'."),
          mc("How did her second attempt go after applying the week's timing guidance?", ["Worse than the first.", "Considerably smoother and calmer.", "Identical to the first.", "She gave up entirely."], 1, "'Her second attempt, deliberately applying the specific timing guidance… proved considerably smoother'."),
          mc("What habit did the Speaking section practice help her correct?", ["Talking too much.", "Stopping her long turn well before the full two minutes.", "Speaking too quietly.", "Avoiding eye contact."], 1, "'I kept stopping my long turn well before the full two minutes, a habit this week's explicit timing practice specifically helped me… correct'."),
          mc("What does she conclude about strategy versus raw ability?", ["Strategy is unimportant.", "Strategy determines whether underlying ability actually shows up fully on exam day.", "Only raw ability matters.", "Neither matters at all."], 1, "'strategy isn't some minor, optional add-on — it's genuinely, practically what determines whether that underlying ability actually shows up fully on exam day'."),
          mc("What does she say there is 'undoubtedly some truth' to?", ["That strategy is irrelevant.", "That raw ability matters most.", "That timing doesn't matter.", "That the exam is unfair."], 1, "'There is undoubtedly some truth to the idea that raw ability matters most'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Exam strategy, whatever its genuinely practical, unglamorous character, deserves recognition as a distinct and genuinely important skill in its own right, not merely a secondary afterthought to linguistic competence alone. (1)___\n\nCandidates with genuinely strong underlying language ability can, and demonstrably sometimes do, underperform significantly when timing and technique remain underdeveloped relative to that underlying competence. (2)___ Raw ability, however considerable, does not automatically translate into strong exam performance without deliberate strategic preparation alongside it.\n\nThis particular week's explicit focus on strategy — timing, technique, familiar routine — aims specifically to close that persistent gap between underlying competence and actual, demonstrated exam performance. (3)___ Explicit strategic practice, evidence increasingly suggests, closes this gap considerably more reliably than simply hoping familiarity will somehow develop naturally on its own.\n\nMany candidates, understandably, focus overwhelmingly on grammar and vocabulary throughout their preparation, treating strategy as a minor, almost optional afterthought addressed only briefly near the very end. (4)___ This week's dedicated focus deliberately challenges that particular, common assumption directly.\n\nGenuine exam-day calm, evidence suggests, depends considerably on familiar, well-practised routine — knowing precisely how much time each section requires, precisely what each part demands, and precisely how to manage inevitable moments of genuine difficulty when they arise. (5)___ That familiarity, patiently built through deliberate practice, considerably reduces the anxiety unfamiliar pressure otherwise reliably generates.\n\nWhat remains, heading into the course's final week, is combining everything — grammar, rhetoric, synthesis, and now explicit strategy — into fully realistic, timed practice that mirrors genuine exam conditions as closely as reasonably possible. (6)___ That final combination, more than any single earlier lesson alone, is what genuinely, reliably builds authentic exam-day confidence.",
        options: [
          "That recognition, plainly, was overdue rather than excessive.", // A -> gap1
          "Ability alone, it turns out, was never quite self-sufficient.", // B -> gap2
          "Explicit practice, evidently, beats simply hoping for the best.", // C -> gap3
          "That common habit, understandable as it is, deserves real challenge.", // D -> gap4
          "Routine, patiently built, does quiet but genuine anxiety-reducing work.", // E -> gap5
          "Combination, in the end, is exactly what these final days are for.", // F -> gap6
          "No candidate has ever struggled with exam timing or technique.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese reconocimiento era necesario, no excesivo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la capacidad sola nunca fue autosuficiente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la práctica explícita supera a simplemente esperar lo mejor."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ese hábito común merece un desafío real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la rutina, construida con paciencia, reduce la ansiedad silenciosamente."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la combinación es exactamente para lo que sirven estos últimos días."),
        ],
      },
      p7: {
        title: "Four learners reflect on their eleventh week of C2 study",
        text: "Read what four learners say about their eleventh week of studying for the C2 exam.\n\nA) TARA: My biggest surprise this week was realising time management, not grammar, was my real remaining weakness.\n\nB) OMAR: Practising the full two minutes for the Speaking long turn finally felt natural by the end of this week.\n\nC) LILA: On balance, I think explicit strategy practice mattered more than I'd initially, honestly, assumed it would.\n\nD) BEN: Reading the questions before each Listening audio genuinely transformed how much I actually understood.\n",
        q: [
          mc("Who realised time management was their real remaining weakness?", ["A", "B", "C", "D"], 0, "Tara: 'My biggest surprise this week was realising time management, not grammar, was my real remaining weakness'."),
          mc("Who found the full two-minute Speaking long turn finally felt natural?", ["A", "B", "C", "D"], 1, "Omar: 'Practising the full two minutes for the Speaking long turn finally felt natural by the end of this week'."),
          mc("Who thinks strategy practice mattered more than initially assumed?", ["A", "B", "C", "D"], 2, "Lila: 'On balance, I think explicit strategy practice mattered more than I'd initially, honestly, assumed'."),
          mc("Who found reading questions before Listening audios transformed their understanding?", ["A", "B", "C", "D"], 3, "Ben: 'Reading the questions before each Listening audio genuinely transformed how much I actually understood'."),
          mc("Who describes something as their 'biggest surprise'?", ["A", "B", "C", "D"], 0, "Tara: 'My biggest surprise this week was'."),
          mc("Who mentions 'by the end of this week' specifically?", ["A", "B", "C", "D"], 1, "Omar: 'finally felt natural by the end of this week'."),
          mc("Who uses the phrase 'on balance'?", ["A", "B", "C", "D"], 2, "Lila: 'On balance, I think explicit strategy practice'."),
          mc("Who mentions Listening audios specifically?", ["A", "B", "C", "D"], 3, "Ben: 'before each Listening audio'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240-280 palabras)", "Lee estos dos textos sobre la estrategia de examen y escribe un ENSAYO (240-280 palabras) que SINTETICE y EVALÚE sus posturas.\n\nTEXTO 1: 'Exam strategy is essential — even candidates with strong underlying competence can underperform significantly without deliberate timing and technique practice.'\n\nTEXTO 2: 'Genuine language competence should be sufficient on its own. Excessive focus on exam strategy risks reducing language learning to mechanical test-taking technique.'\n\nEscribe un ensayo que sintetice y evalúe ambas posturas EN TUS PROPIAS PALABRAS. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280-320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What eleven weeks of C2 study has taught me about exam strategy' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo estratégico.\n· REVIEW de un método o recurso que te haya ayudado a gestionar el tiempo de examen.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing exam practice. Woman: My biggest surprise this week was realising time management, not grammar, was my real weakness. Man: Same here — I'd never actually timed myself properly before this week. Extract Two. You hear two candidates discussing the Speaking test. Man: Practising the full two minutes for the long turn finally felt natural by the end of this week. Woman: On balance, I think explicit strategy practice mattered more than I'd initially assumed. Extract Three. You hear two teachers discussing their students. Woman: Reading the questions before each Listening audio genuinely transforms how much students understand. Man: It is widely held among examiners that strategy closes the gap between ability and actual performance.", [
      mc("1. What was the woman's biggest surprise this week?", ["Grammar was her weakness.", "Time management, not grammar, was her real weakness.", "She had no weaknesses.", "Vocabulary was too difficult."], 1, "'My biggest surprise this week was realising time management, not grammar, was my real weakness'."),
      mc("2. What had the man never done before this week?", ["Studied grammar.", "Timed himself properly.", "Taken a practice exam.", "Read about the exam format."], 1, "'I'd never actually timed myself properly before this week'."),
      mc("3. What finally felt natural for the man by the end of the week?", ["Writing essays.", "Practising the full two minutes for the Speaking long turn.", "Reading comprehension.", "Vocabulary memorisation."], 1, "'Practising the full two minutes for the long turn finally felt natural'."),
      mc("4. What does the woman think mattered more than she'd assumed?", ["Nothing new.", "Explicit strategy practice.", "Only grammar practice.", "Only vocabulary practice."], 1, "'On balance, I think explicit strategy practice mattered more than I'd initially assumed'."),
      mc("5. What does reading questions before Listening audios do, according to the woman teacher?", ["Nothing significant.", "Genuinely transforms how much students understand.", "Makes the test harder.", "Is unnecessary."], 1, "'Reading the questions before each Listening audio genuinely transforms how much students understand'."),
      mc("6. What is widely held among examiners, according to the man?", ["Strategy is irrelevant.", "Strategy closes the gap between ability and actual performance.", "Only grammar matters.", "Timing doesn't matter."], 1, "'It is widely held among examiners that strategy closes the gap between ability and actual performance'."),
    ]),

    ...speakingParts({ p1: "cómo te sientes de preparado/a a estas alturas del curso", p2: "dos imágenes de la preparación de exámenes (alguien practicando con un cronómetro visible y otra persona relajada revisando notas tranquilamente): comentadlas y decidid cuál representa mejor una preparación eficaz para el examen", p3: "qué es más importante en la última semana antes de un examen de este nivel (practicar en condiciones reales cronometradas, descansar adecuadamente, repasar el vocabulario, mantener la calma mental, hacer un simulacro completo): comentadlo y decidid lo más importante" }),

    SUMMARY("Resumen de la Semana 11 (C2) — Día 55/60", [
      "Has completado la semana de ESTRATEGIA DE EXAMEN: técnica parte por parte del Reading & UoE, planificación del Writing, técnica de Listening y de Speaking.",
      "Has practicado las 7 partes del Reading & Use of English, el Writing y el Speaking P1-P3 con temas de consumismo, aprendizaje permanente, relaciones humanas y movilidad urbana.",
      "Ahora, el mini-simulacro estratégico de la semana.",
      "La última semana (S12): RECTA FINAL — simulacros cronometrados por destreza, guía del día del examen, y el SIMULACRO FINAL del Día 60.",
    ]),
    INFO("Mini-simulacro estratégico de la Semana 11", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana, aplicando toda la estrategia aprendida. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 12."),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Estrategia de examen, parte por parte (sin gramática nueva) · Consumismo, aprendizaje permanente, relaciones humanas y movilidad urbana",
  description: "Semana dedicada enteramente a la ESTRATEGIA DE EXAMEN: técnica y gestión del tiempo para cada parte del Reading & Use of English (7 partes), planificación eficaz del Writing con integración de fuentes, técnica específica para las 4 partes del Listening, y técnica específica para las 3 partes del Speaking. Sin gramática nueva — toda la gramática del curso ya está cubierta en las Semanas 1-10. Hilo temático: el consumismo, el aprendizaje permanente, las relaciones humanas y la movilidad urbana. Día 55 cierra la semana con un mini-simulacro estratégico, a las puertas de la recta final (Semana 12).",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
