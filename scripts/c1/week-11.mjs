/**
 * C1 Advanced · Semana 11 — "Estrategias de examen parte por parte · El consumismo, el aprendizaje permanente, las relaciones y la ciudad sostenible".
 * Semana de ESTRATEGIA DE EXAMEN (no gramática nueva): técnica y gestión del
 * tiempo para cada parte del Reading & Use of English (8 partes), el Writing,
 * el Listening y el Speaking, con toda la gramática del curso ya asumida.
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

// ───────────────────────── DÍA 51 ─────────────────────────
const DAY51 = {
  title: "Día 51 — Estrategia: Reading & Use of English P1-P4 · El consumismo y la publicidad",
  description: "Técnica y gestión del tiempo para las Partes 1-4 del Reading & Use of English (multiple-choice cloze, open cloze, word formation, key word transformations). Vocabulario del consumismo y la publicidad. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Dominar la técnica y el ritmo óptimos para las Partes 1-4 del Reading & Use of English bajo presión de tiempo real.",
    summary: "Estrategia P1-P4; consumismo y publicidad; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["dedicar demasiado tiempo a una sola pregunta difícil en vez de marcarla y seguir.", "no leer el texto completo antes de rellenar los huecos de P1/P2.", "en P4, no verificar el número de palabras exigido (3-6) antes de dar la respuesta por buena."],
    reviewPrompts: ["¿Cuánto tiempo deberías dedicar, como máximo, a cada parte del Use of English?", "¿Qué haces si no sabes una respuesta en P1: la dejas en blanco o adivinas?"],
  },
  items: [
    TEXT("🎯 Semana 11 del C1 — ESTRATEGIA DE EXAMEN. Ya tienes TODA la gramática necesaria; esta semana perfeccionas la TÉCNICA y el RITMO para cada parte. Hoy: Reading & Use of English PARTES 1-4. Vocabulario: el CONSUMISMO y la PUBLICIDAD."),
    GRAMMAR("Estrategia — Reading & Use of English Partes 1-4", `GESTIÓN DEL TIEMPO: 90 minutos para 8 partes + traspaso de respuestas ≈ 10-11 min/parte. Las Partes 1-4 (léxico/gramática) deberían llevarte ≈ 30-35 min en total, dejando más tiempo para las Partes 5-8 (lectura, más densas).
PARTE 1 (multiple-choice cloze, 8 huecos): LEE el texto ENTERO primero (sin rellenar) para captar el sentido general. Los huecos suelen ser léxicos (colocaciones, phrasal verbs, preposiciones fijas) — descarta las opciones que "suenan bien" pero no forman la colocación exacta.
PARTE 2 (open cloze, 8 huecos): Palabras GRAMATICALES (preposiciones, artículos, pronombres, conectores, auxiliares). Piensa en la ESTRUCTURA de la frase, no en el vocabulario.
PARTE 3 (word formation, 8 huecos): Identifica primero si necesitas sustantivo/adjetivo/verbo/adverbio según la función gramatical del hueco. Cuidado con prefijos negativos (un-, in-, dis-) y sufijos que cambian el significado.
PARTE 4 (key word transformations, 6 preguntas): Cuenta las palabras exigidas (3-6, incluida la palabra clave). Busca primero la ESTRUCTURA gramatical que transformará la frase (pasiva, condicional, estilo indirecto, comparativo, inversión...) antes de escribir.
⚠️ Si te atascas en una pregunta, márcala mentalmente y sigue — vuelve al final si te sobra tiempo. Nunca dejes un hueco en blanco: una respuesta razonada vale más que ninguna.`),
    WARN("Errores típicos del hispanohablante (C1)", "· En P1, no elijas la opción que 'suena mejor en español traducido' — verifica la colocación EXACTA en inglés.\n· En P2, no olvides que los huecos son casi siempre palabras GRAMATICALES, no de contenido.\n· En P4, cuenta las palabras con cuidado: contracciones (don't) cuentan como UNA palabra; el número de palabras es estricto.\n· No emplees más de 10-11 minutos por parte en promedio — vigila el reloj activamente."),
    grammarEx("Use of English — Práctica de estrategia (P1-P4 combinadas)", "Aplica la estrategia de cada parte.", [
      mc("P1: Advertisers frequently ___ on consumers' emotional vulnerabilities.", ["play", "touch", "hit"], 0, "colocación fija: play on (someone's vulnerabilities)."),
      fb("P2: Consumers are increasingly aware ___ how algorithms shape what they see online.", ["of"], "preposición fija: aware OF."),
      mc("P3 (word formation): The campaign's ___ (persuade) tactics drew criticism.", ["persuasive", "persuasion", "persuaded"], 0, "adjetivo: persuasive (describe 'tactics')."),
      mc("P4: 'The advert was so misleading that regulators banned it.' → SUCH: ___ the advert's dishonesty that regulators banned it.", ["Such was", "So was", "Such"], 0, "such + be + sustantivo + that: Such was the advert's dishonesty that…"),
      mc("P1: The brand's new campaign ___ considerable controversy online.", ["sparked", "lit", "burned"], 0, "colocación fija: spark controversy."),
      fb("P2: Few consumers stop to consider ___ their purchasing habits actually reveal about them.", ["what"], "pronombre interrogativo/relativo: what."),
    ]),
    GRAMMAR("Vocabulario del día — El consumismo y la publicidad (C1)", "Léxico avanzado de consumo y publicidad."),
    deck("C1 S11D51 — Consumismo y publicidad", [
      ["consumerism", "consumismo", "Rampant consumerism worries environmentalists.", "sustantivo", "kənˈsjuːmərɪzəm"],
      ["subliminal", "subliminal", "The advert used subliminal messaging techniques.", "adjetivo", "ˌsʌblɪˈmɪnl"],
      ["brand loyalty", "fidelidad de marca", "The company relies heavily on brand loyalty.", "sustantivo", "brænd ˈlɔɪəlti"],
      ["impulse buy", "compra impulsiva", "Online shopping encourages impulse buys.", "sustantivo", "ˈɪmpʌls baɪ"],
      ["planned obsolescence", "obsolescencia programada", "Critics accuse manufacturers of planned obsolescence.", "sustantivo", "plænd ˌɒbsəˈlesns"],
      ["target audience", "público objetivo", "The campaign was tailored to a young target audience.", "sustantivo", "ˈtɑːgɪt ˈɔːdiəns"],
      ["gullible", "crédulo/a", "Advertisers rarely admit consumers can be gullible.", "adjetivo", "ˈgʌləbl"],
      ["disposable income", "renta disponible", "Rising disposable income fuelled consumer spending.", "sustantivo", "dɪˈspəʊzəbl ˈɪnkʌm"],
      ["endorsement", "aval / respaldo (publicitario)", "Celebrity endorsements boost sales significantly.", "sustantivo", "ɪnˈdɔːsmənt"],
      ["backlash", "reacción adversa / contragolpe", "The campaign triggered a considerable public backlash.", "sustantivo", "ˈbæklæʃ"],
    ]),
    vocabEx("Vocabulario — El consumismo y la publicidad", "Elige la opción correcta.", [
      mc("An unplanned, spontaneous purchase:", ["impulse buy", "brand loyalty", "endorsement"], 0, "impulse buy."),
      mc("Designing products to become outdated deliberately:", ["planned obsolescence", "target audience", "backlash"], 0, "planned obsolescence."),
      mc("Easily deceived or persuaded:", ["gullible", "loyal", "disposable"], 0, "gullible."),
      mc("A strong negative public reaction:", ["backlash", "endorsement", "loyalty"], 0, "backlash."),
      mc("A celebrity's public support for a product:", ["endorsement", "backlash", "consumerism"], 0, "endorsement."),
      mc("Money left after essential expenses, available to spend freely:", ["disposable income", "brand loyalty", "target audience"], 0, "disposable income."),
    ]),

    ...uoe({
      p1: {
        title: "The psychology of the sale",
        text: "Retailers have long understood that consumers rarely make purchasing decisions through purely rational calculation, instead relying (1)___ a complex mixture of emotion, habit and subtle situational cues that marketers have grown remarkably skilled at exploiting. A carefully designed store layout, for instance, can (2)___ shoppers towards higher-margin products almost without their conscious awareness. Scarcity messaging — 'only three left in stock' — deliberately (3)___ on a deep-seated fear of missing out, prompting impulse purchases that careful reflection would likely have avoided entirely. Even seemingly neutral design choices, such as background music tempo, have been shown to measurably (4)___ how quickly, and how much, customers actually spend. None of this constitutes outright deception, exactly; it operates, rather, in a considerably greyer area where influence gradually shades (5)___ manipulation, a distinction regulators have historically struggled to draw (6)___ any real precision.",
        q: [
          mc("(1)", ["on", "in", "at", "with"], 0, "'relying on a complex mixture'."),
          mc("(2)", ["steer", "guide", "direct", "lead"], 0, "'can steer shoppers towards'."),
          mc("(3)", ["plays", "touches", "hits", "presses"], 0, "'deliberately plays on a… fear'."),
          mc("(4)", ["affect", "effect", "impact", "influence"], 0, "'measurably affect how quickly… customers spend' (verbo)."),
          mc("(5)", ["into", "towards", "to", "onto"], 0, "'gradually shades into manipulation'."),
          mc("(6)", ["with", "in", "by", "at"], 0, "'struggled to draw with any real precision'."),
        ],
      },
      p2: {
        title: "Why we buy what we don't need",
        text: "Modern advertising rarely sells products (1)___ their own straightforward merits alone; it sells identity, belonging and aspiration, positioning a given purchase as a route towards becoming (2)___ kind of person the consumer secretly wishes to be. This strategy proves remarkably effective precisely (3)___ it bypasses purely rational cost-benefit evaluation entirely, appealing instead to considerably deeper, less consciously examined psychological needs. Few consumers, if asked directly, (4)___ admit that a particular purchase was driven primarily by status anxiety rather than genuine practical need. Yet market researchers who study consumer behaviour closely consistently find precisely this pattern operating beneath the surface of countless everyday purchasing decisions. Given (5)___ pervasive this dynamic actually is, some critics argue that genuinely informed consumer choice may be, in an important sense, considerably rarer than free-market ideology generally likes (6)___ suggest.",
        q: [
          fb("(1)", ["on"], "'sells products on their own… merits'."),
          fb("(2)", ["the"], "'becoming the kind of person'."),
          fb("(3)", ["because"], "'proves effective precisely because it bypasses'."),
          fb("(4)", ["would"], "'few consumers… would admit'."),
          fb("(5)", ["how"], "'Given how pervasive this dynamic… is'."),
          fb("(6)", ["to"], "'free-market ideology generally likes to suggest'."),
        ],
      },
      p3: {
        title: "The ethics of persuasion",
        text: "Advertising regulators face a genuinely difficult (1)___ challenge: distinguishing legitimate persuasion, which most reasonable observers accept as a normal feature of competitive markets, from manipulation that exploits (2)___ biases in ways consumers cannot reasonably be expected to recognise or resist. This distinction proves considerably harder to draw in (3)___ than in theory, given that virtually all advertising relies, to some degree, on psychological technique rather than pure informational (4)___ alone. Some jurisdictions have responded by banning specific, particularly (5)___ practices — subliminal messaging, deliberately exploitative advertising aimed at children — while leaving broader, more ambiguous grey areas largely (6)___ to industry self-regulation, an approach critics consider considerably too permissive given the genuine stakes involved.",
        items: [
          { root: "ethic", accepted: ["ethical"], hint: "'a genuinely difficult ethical challenge' → ethical." },
          { root: "cognition", accepted: ["cognitive"], hint: "'exploits cognitive biases' → cognitive." },
          { root: "practice", accepted: ["practice"], hint: "'harder to draw in practice than in theory' (sustantivo)." },
          { root: "inform", accepted: ["information"], hint: "'pure informational content' → wait, ojo: 'informational' ya está dado; el hueco pide sustantivo relacionado: 'pure information provision' → aceptar 'information'." },
          { root: "exploit", accepted: ["exploitative"], hint: "'particularly exploitative practices' → exploitative." },
          { root: "regulate", accepted: ["unregulated"], hint: "'largely unregulated, left to industry self-regulation' → unregulated." },
        ],
      },
      p4: {
        title: "Transformaciones — vocabulario y estructuras de la semana (práctica de estrategia)",
        items: [
          { s1: "The advert was so misleading that regulators eventually banned it.", key: "SUCH", s2: "___ was the advert's dishonesty that regulators eventually banned it.", accepted: ["such"], explanation: "such + be + sustantivo + that." },
          { s1: "Consumers are becoming more aware that algorithms shape what they see online.", key: "OF", s2: "Consumers are increasingly aware ___ how algorithms shape what they see online.", accepted: ["of"], explanation: "aware OF (preposición fija)." },
          { s1: "It's likely that the campaign deliberately targeted vulnerable consumers.", key: "MUST", s2: "The campaign ___ have deliberately targeted vulnerable consumers.", accepted: ["must"], explanation: "deducción: must have (repaso S3)." },
          { s1: "The company shouldn't have used such misleading claims.", key: "SHOULD", s2: "The company ___ have used such misleading claims.", accepted: ["shouldn't", "should not"], explanation: "crítica retrospectiva negativa: shouldn't have." },
          { s1: "Not only did the campaign fail, but it also triggered a backlash.", key: "DID", s2: "Not only ___ the campaign fail, but it also triggered a backlash.", accepted: ["did"], explanation: "inversión: not only + did + sujeto." },
        ],
      },
      p5: {
        title: "The ad that backfired",
        text: "When a well-established consumer brand launched what its marketing team had confidently expected would prove a genuinely successful advertising campaign, few within the company anticipated quite how dramatically, and how quickly, public reaction would instead turn hostile.\n\nThe campaign, built around a supposedly humorous premise poking gentle fun at a common consumer frustration, had tested reasonably well in internal focus groups, though those groups, critics later noted, had been drawn from a demographic considerably narrower and less diverse than the brand's actual broader customer base.\n\nWithin hours of the campaign's public launch, social media reaction proved swift, considerably more negative, and far more widespread than anyone at the company had seriously anticipated. Many viewers found the supposedly humorous premise not amusing but genuinely offensive, interpreting it as mocking precisely the kind of consumer vulnerability the brand's marketing team had apparently assumed audiences would simply find relatable rather than actually hurtful.\n\nThe company's initial response, unfortunately, compounded rather than resolved the growing controversy. A defensive statement suggesting critics had 'misunderstood' the campaign's obviously good-natured intent only intensified public frustration, widely perceived as dismissive of genuine, legitimate concern rather than as any kind of meaningful, good-faith engagement with it.\n\nIt was only after nearly forty-eight hours of steadily mounting public pressure, and a noticeable, measurable dip in the company's own share price, that senior leadership finally issued a considerably more genuine, less defensive apology, withdrawing the campaign entirely and publicly committing to more rigorous, more genuinely diverse testing procedures for all future advertising.\n\nMarketing analysts who studied the case afterwards drew several instructive lessons from what had clearly become something of a cautionary industry tale. Chief among them: internal testing groups must genuinely, meaningfully reflect the full diversity of an intended target audience, not merely a convenient, readily available subset of it that happens to share the marketing team's own particular cultural assumptions and blind spots.\n\nThe episode also highlighted a broader, considerably more uncomfortable truth about contemporary advertising: what once might have remained a relatively contained, quietly forgotten local marketing misstep can now, in an age of instant global social media amplification, escalate into genuine, costly reputational crisis within a matter of mere hours, leaving companies with dramatically less time to respond thoughtfully than earlier advertising eras generally afforded them.",
        q: [
          mc("What had the marketing team expected?", ["Public controversy.", "A genuinely successful campaign.", "Government intervention.", "No public reaction at all."], 1, "'its marketing team had confidently expected would prove a genuinely successful advertising campaign'."),
          mc("What was a key weakness in the campaign's testing?", ["It wasn't tested at all.", "Focus groups were narrower and less diverse than the actual customer base.", "It was tested for too long.", "It was tested only overseas."], 1, "'those groups… had been drawn from a demographic considerably narrower and less diverse than the brand's actual broader customer base'."),
          mc("How did the company's initial response affect the situation?", ["It resolved the controversy quickly.", "It compounded the controversy by seeming dismissive.", "It had no effect either way.", "It was praised for its honesty."], 1, "'A defensive statement… only intensified public frustration, widely perceived as dismissive'."),
          mc("What finally prompted a genuine apology?", ["Immediate internal decision.", "Nearly 48 hours of pressure and a dip in share price.", "A government order.", "A competitor's complaint."], 1, "'It was only after nearly forty-eight hours of steadily mounting public pressure, and a noticeable… dip in the company's own share price'."),
          mc("What lesson did analysts draw about testing groups?", ["Testing isn't necessary.", "Testing groups must genuinely reflect the full diversity of the target audience.", "Larger groups are always better.", "Testing should be outsourced."], 1, "'internal testing groups must genuinely, meaningfully reflect the full diversity of an intended target audience'."),
          mc("What broader truth did the episode highlight about modern advertising?", ["Nothing has really changed.", "Missteps can escalate into crises within hours due to social media.", "Advertising is less risky than before.", "Companies now have more time to respond."], 1, "'what once might have remained a relatively contained… misstep can now… escalate into genuine, costly reputational crisis within a matter of mere hours'."),
        ],
      },
      p6: {
        title: "Should advertising to children be banned entirely?",
        intro: "Cuatro personas debaten si la publicidad dirigida a menores debería prohibirse por completo.",
        texts: {
          A: "NADIA: Yes, unequivocally. Children lack the cognitive tools to critically evaluate persuasive messaging the way adults, at least in principle, generally can. Marketing that specifically exploits this vulnerability for commercial gain seems to me straightforwardly, genuinely exploitative, regardless of how cleverly it's dressed up.",
          B: "TOM: I'd favour strict regulation over an outright ban. A complete ban seems both impractical to enforce, particularly online, and arguably excessive; clear, well-enforced limits on manipulative techniques specifically seem a more proportionate, achievable response.",
          C: "PRIYA: What concerns me most is parental responsibility getting quietly displaced by regulation. I support meaningful limits, certainly, but I worry that banning advertising entirely lets parents off the hook for teaching genuine media literacy, which children will need regardless of whatever specific regulations happen to be in place.",
          D: "SAM: Honestly, I think the online dimension changes this whole debate considerably. Traditional broadcast advertising is one thing; algorithmically targeted, highly personalised advertising aimed specifically at individual children online is a genuinely different, arguably far more concerning problem requiring its own distinct regulatory approach.",
        },
        q: [
          mc("Who believes advertising to children should be banned unequivocally?", ["A", "B", "C", "D"], 0, "Nadia: 'Yes, unequivocally… straightforwardly, genuinely exploitative'."),
          mc("Whose view most directly QUALIFIES Nadia's, favouring regulation over an outright ban?", ["A", "B", "C", "D"], 1, "Tom: 'I'd favour strict regulation over an outright ban'."),
          mc("Who worries regulation might displace parental responsibility?", ["A", "B", "C", "D"], 2, "Priya: 'I worry that banning advertising entirely lets parents off the hook'."),
          mc("Who argues the online dimension requires its own distinct approach?", ["A", "B", "C", "D"], 3, "Sam: 'algorithmically targeted… advertising… is a genuinely different… problem requiring its own distinct regulatory approach'."),
        ],
      },
      p7: {
        title: "Reading the Use of English clock",
        text: "Candidates sitting the Reading and Use of English paper face a genuinely demanding constraint that has nothing to do with grammar or vocabulary knowledge at all: time. (1)___\n\nNinety minutes across eight distinct parts sounds, on paper, reasonably generous. (2)___ In practice, candidates who fail to manage that time deliberately and strategically frequently run out well before reaching the paper's final, often most time-consuming parts.\n\nThe most common, costly mistake is spending disproportionate time on Parts 1 to 4, the shorter, more discrete language-focused sections. (3)___ These parts feel deceptively manageable individually, tempting candidates towards excessive, unnecessary perfectionism on any single tricky item.\n\nA more strategic approach allocates roughly proportional time based on each part's actual length and cognitive demand, rather than simply working through the paper in strict sequential order without any real time awareness. (4)___ Parts 5 to 8 generally require more sustained reading and should be budgeted for accordingly, in advance.\n\nPractising under genuinely timed conditions, repeatedly, well before the actual exam, builds a reliable internal sense of pacing that conscious, moment-to-moment clock-watching alone simply cannot replicate under real pressure. (5)___ This internalised rhythm matters enormously on exam day itself, when anxiety already competes for genuinely limited cognitive resources.\n\nUltimately, strong grammar and vocabulary knowledge alone rarely guarantees a strong overall score if time management genuinely fails. (6)___ Technique, in this very real sense, is every bit as examinable as knowledge itself.",
        options: [
          "That constraint deserves as much preparation as grammar itself.", // A -> gap1
          "That impression, in practice, doesn't always hold up.",  // B -> gap2
          "Perfectionism here quietly steals time from parts that need it more.", // C -> gap3
          "Later parts simply demand a different budget of time.", // D -> gap4
          "Rhythm, once built, survives pressure better than conscious counting does.", // E -> gap5
          "Knowledge alone was never quite the whole picture here.", // F -> gap6
          "No candidate has ever run out of time on this particular paper.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa restricción merece tanta preparación como la gramática."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa impresión no siempre se sostiene."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el perfeccionismo roba tiempo a lo que más lo necesita."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: las partes finales exigen otro presupuesto de tiempo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el ritmo interiorizado sobrevive mejor a la presión."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el conocimiento solo nunca fue todo el cuadro."),
        ],
      },
      p8: {
        title: "Four candidates discuss their Use of English exam strategy",
        text: "Read what four C1 candidates say about their strategy for the Reading and Use of English paper.\n\nA) NADIA: I always do Part 2 first, honestly — the open cloze. It's usually the quickest for me, and getting an early, confident win settles my nerves considerably before tackling the longer reading parts later on.\n\nB) TOM: My strategy is strictly sequential, start to finish, but with a hard time cap on each part. If I haven't finished Part 3 within roughly ten minutes, I move on regardless, marking uncertain answers to revisit later if time genuinely permits.\n\nC) PRIYA: I read the whole text first in every single part before answering anything, even in the shorter language-focused parts. It costs me a little extra time upfront, but it dramatically cuts down on careless errors from misreading isolated, out-of-context sentences.\n\nD) SAM: Honestly, I save the gapped text part for last, deliberately. It typically takes me the longest to work through carefully, and I'd rather run slightly short on time there than on an earlier, generally quicker part.\n",
        q: [
          mc("Who does Part 2 first to build early confidence?", ["A", "B", "C", "D"], 0, "Nadia: 'I always do Part 2 first… getting an early, confident win settles my nerves'."),
          mc("Who works strictly sequentially with a hard time cap per part?", ["A", "B", "C", "D"], 1, "Tom: 'My strategy is strictly sequential… but with a hard time cap on each part'."),
          mc("Who always reads the whole text before answering, even in shorter parts?", ["A", "B", "C", "D"], 2, "Priya: 'I read the whole text first in every single part before answering anything'."),
          mc("Who deliberately saves the gapped text part for last?", ["A", "B", "C", "D"], 3, "Sam: 'I save the gapped text part for last, deliberately'."),
          mc("Who marks uncertain answers to revisit later if time allows?", ["A", "B", "C", "D"], 1, "Tom: 'marking uncertain answers to revisit later if time genuinely permits'."),
          mc("Who accepts costing extra time upfront to reduce careless errors?", ["A", "B", "C", "D"], 2, "Priya: 'It costs me a little extra time upfront, but it dramatically cuts down on careless errors'."),
          mc("Who would rather run short on time on the gapped text than an earlier part?", ["A", "B", "C", "D"], 3, "Sam: 'I'd rather run slightly short on time there than on an earlier, generally quicker part'."),
          mc("Who considers Part 2 usually the quickest part for them?", ["A", "B", "C", "D"], 0, "Nadia: 'It's usually the quickest for me'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la publicidad se plantearon dos ideas:\n· advertising to children should be banned entirely (debería prohibirse dirigirse a menores)\n· strict regulation is more practical and proportionate than an outright ban (una regulación estricta es más práctica y proporcionada)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· REVIEW de una campaña publicitaria (real o inventada) que te haya llamado la atención, positiva o negativamente.\n· CARTA/EMAIL a una revista de consumo expresando tu opinión sobre una práctica publicitaria concreta.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two marketing professionals discussing a campaign. Woman: The campaign sparked considerable backlash almost immediately after launch. Man: It must have been the tone — it clearly misjudged how the target audience would actually react. Extract Two. You hear two friends discussing online shopping. Man: I've become genuinely aware of how algorithms shape what I see and buy online. Woman: Same here — I've started deliberately avoiding impulse buys triggered by scarcity messaging. Extract Three. You hear two students discussing exam strategy. Woman: I always do the open cloze first — it settles my nerves before the longer reading parts. Man: Interesting, I prefer strict sequential order with a hard time cap on each part instead.", [
      mc("1. What happened to the campaign?", ["It was widely praised.", "It sparked considerable backlash.", "It had no public reaction."], 1, "'The campaign sparked considerable backlash almost immediately'."),
      mc("2. What does the man say likely caused this?", ["The pricing.", "The tone misjudging the target audience.", "A technical error."], 1, "'It must have been the tone — it clearly misjudged how the target audience would… react'."),
      mc("3. What has the man become aware of?", ["Nothing new.", "How algorithms shape what he sees and buys online.", "A new product launch."], 1, "'I've become genuinely aware of how algorithms shape what I see and buy online'."),
      mc("4. What has the woman started doing?", ["Buying more impulsively.", "Avoiding impulse buys triggered by scarcity messaging.", "Ignoring all advertising."], 1, "'I've started deliberately avoiding impulse buys triggered by scarcity messaging'."),
      mc("5. What does the woman do first in the exam?", ["The gapped text.", "The open cloze.", "The essay."], 1, "'I always do the open cloze first'."),
      mc("6. What strategy does the man prefer instead?", ["Random order.", "Strict sequential order with a hard time cap per part.", "Skipping difficult parts entirely."], 1, "'I prefer strict sequential order with a hard time cap on each part'."),
    ]),

    ...speakingParts({ p1: "si sueles dejarte llevar por la publicidad al comprar algo", p2: "dos imágenes del consumo (un escaparate lleno de rebajas y alguien comprando online desde el móvil): compáralas y especula sobre lo que siente cada persona", p3: "qué estrategia es más eficaz para gestionar el tiempo en un examen largo (leer todo primero, ir en orden estricto, hacer primero lo más fácil, dejar lo difícil para el final, marcar y seguir): comentadlo y elegid la más eficaz", p4: "el consumismo y la publicidad: si la publicidad manipula más de lo que informa, qué responsabilidad tienen los consumidores frente a las marcas, y si debería regularse más estrictamente la publicidad dirigida a menores" }),

    SUMMARY("Resumen del Día 51", [
      "Estrategia P1-P4: leer el texto entero (P1), pensar en estructura gramatical (P2), identificar la función gramatical (P3), contar palabras y buscar la estructura (P4). ≈30-35 min en total.",
      "Vocabulario del consumismo y la publicidad. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 52", "Cronometra tú mismo/a las Partes 1-4 de un texto cualquiera: ¿cuánto tardas? Repasa el vocabulario de publicidad. Mañana: estrategia para las Partes 5-8 (lectura)."),
  ],
};

// ───────────────────────── DÍA 52 ─────────────────────────
const DAY52 = {
  title: "Día 52 — Estrategia: Reading & Use of English P5-P8 · El aprendizaje permanente y la educación",
  description: "Técnica y gestión del tiempo para las Partes 5-8 del Reading & Use of English (reading MC, cross-text matching, gapped text, multiple matching). Vocabulario del aprendizaje permanente. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Dominar la técnica óptima para las Partes 5-8 del Reading & Use of English, las más densas en lectura.",
    summary: "Estrategia P5-P8; aprendizaje permanente y educación; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["leer las preguntas de P5 DESPUÉS del texto en vez de antes (pierde tiempo).", "en P7 (gapped text), no verificar que el párrafo elegido conecta gramaticalmente Y temáticamente con lo anterior y lo siguiente.", "en P8, subrayar solo la primera coincidencia aparente sin verificar las demás opciones."],
    reviewPrompts: ["¿En qué orden deberías leer preguntas y texto en la Parte 5?", "¿Qué dos tipos de pista debes buscar en la Parte 7 (gapped text)?"],
  },
  items: [
    TEXT("🔁 Ayer, estrategia P1-P4. Hoy: Reading & Use of English PARTES 5-8 — las más densas en lectura. Vocabulario: el APRENDIZAJE PERMANENTE y la EDUCACIÓN."),
    GRAMMAR("Estrategia — Reading & Use of English Partes 5-8", `PARTE 5 (reading MC, 6 preguntas, 2 puntos c/u): LEE las preguntas ANTES del texto para saber qué buscar. Las preguntas siguen el ORDEN del texto (salvo la última, que suele ser global). Busca justificación TEXTUAL exacta, no solo "parece razonable".
PARTE 6 (cross-text matching, 4 textos A-D + 4 preguntas): Lee los 4 textos primero para entender las posturas generales. Las preguntas piden comparar (quién coincide/discrepa con quién) — subraya frases clave de cada postura antes de responder.
PARTE 7 (gapped text, 6 párrafos quitados + 7 opciones): Busca conectores/referencias (pronombres, 'this', 'such', nombres propios) que enlacen el párrafo candidato con el texto ANTES y DESPUÉS del hueco — dos direcciones, no solo una.
PARTE 8 (multiple matching, 10 preguntas sobre 4 textos cortos): Subraya la palabra clave de cada pregunta y busca su idea equivalente (no la misma palabra) en cada texto — cuidado con los distractores (texto que menciona el tema pero no responde exactamente la pregunta).
⏱️ Presupuesto orientativo: P5 ≈12min, P6 ≈10min, P7 ≈13min, P8 ≈15min (más denso). Deja 5 min al final para revisar huecos en blanco.`),
    WARN("Errores típicos del hispanohablante (C1)", "· En P5, no elijas la opción 'casi correcta' — el examen busca la ÚNICA opción totalmente justificada por el texto.\n· En P7, un párrafo puede encajar temáticamente pero NO gramaticalmente (pronombres que no concuerdan) — verifica ambas cosas.\n· En P8, el orden de las preguntas NO sigue el orden del texto — no asumas que la pregunta 3 está antes que la 2 en el texto.\n· No dejes P8 para el final si te queda poco tiempo: tiene el mayor número de preguntas (10) del Reading."),
    grammarEx("Use of English — Práctica de estrategia (P5-P8)", "Aplica la estrategia de cada parte.", [
      mc("P5: ¿Cuándo debes leer las preguntas de la Parte 5?", ["Después del texto", "Antes del texto", "No hace falta leerlas"], 1, "antes del texto, para saber qué buscar."),
      mc("P6: ¿Qué debes hacer primero con los 4 textos A-D?", ["Leerlos todos para entender las posturas", "Leer solo el primero", "Ir directo a las preguntas"], 0, "leer los 4 textos primero."),
      mc("P7: ¿Qué debes verificar en un párrafo candidato?", ["Solo que encaje temáticamente", "Que encaje gramatical Y temáticamente con antes y después", "Solo la longitud del párrafo"], 1, "conexión gramatical y temática en ambas direcciones."),
      mc("P8: ¿Sigue el orden de las preguntas el orden del texto?", ["Sí, siempre", "No, hay que revisar todo el texto para cada pregunta", "Solo a veces"], 1, "el orden de las preguntas NO sigue el del texto."),
      mc("¿Cuánto tiempo aproximado deberías dedicar a la Parte 8 (la más densa)?", ["5 minutos", "15 minutos", "25 minutos"], 1, "≈15 min (más preguntas, más denso)."),
      mc("Si te quedan 5 minutos al final del Reading, ¿qué deberías hacer?", ["Repasar huecos en blanco", "Empezar el Writing", "Revisar el Listening"], 0, "revisar huecos en blanco antes de terminar."),
    ]),
    GRAMMAR("Vocabulario del día — El aprendizaje permanente y la educación (C1)", "Léxico avanzado de educación."),
    deck("C1 S11D52 — Aprendizaje permanente y educación", [
      ["lifelong learning", "aprendizaje permanente", "Lifelong learning is increasingly valued by employers.", "sustantivo", "ˈlaɪflɒŋ ˈlɜːnɪŋ"],
      ["curriculum", "plan de estudios / currículo", "The curriculum was recently overhauled.", "sustantivo", "kəˈrɪkjələm"],
      ["rote learning", "aprendizaje memorístico", "Rote learning rarely builds genuine understanding.", "sustantivo", "rəʊt ˈlɜːnɪŋ"],
      ["credential", "credencial / título", "A formal credential doesn't guarantee real competence.", "sustantivo", "krɪˈdenʃl"],
      ["pedagogy", "pedagogía", "Modern pedagogy favours active, engaged learning.", "sustantivo", "ˈpedəgɒdʒi"],
      ["upskill", "mejorar competencias / reciclarse profesionalmente", "Many workers are upskilling to stay competitive.", "verbo", "ʌpˈskɪl"],
      ["attainment gap", "brecha de rendimiento académico", "The attainment gap widened during the pandemic.", "sustantivo", "əˈteɪnmənt gæp"],
      ["autonomous learner", "aprendiz autónomo/a", "Universities aim to produce autonomous learners.", "sustantivo", "ɔːˈtɒnəməs ˈlɜːnə"],
      ["formative assessment", "evaluación formativa", "Formative assessment guides ongoing teaching.", "sustantivo", "ˈfɔːmətɪv əˈsesmənt"],
      ["disengaged", "desmotivado/a (académicamente)", "Disengaged students often underperform significantly.", "adjetivo", "ˌdɪsɪnˈgeɪdʒd"],
    ]),
    vocabEx("Vocabulario — El aprendizaje permanente y la educación", "Elige la opción correcta.", [
      mc("Continuing to learn throughout one's entire life, beyond formal schooling:", ["lifelong learning", "rote learning", "credential"], 0, "lifelong learning."),
      mc("Learning through repetition rather than understanding:", ["rote learning", "lifelong learning", "pedagogy"], 0, "rote learning."),
      mc("A qualification or certificate proving competence:", ["credential", "curriculum", "pedagogy"], 0, "credential."),
      mc("The theory and practice of teaching:", ["pedagogy", "credential", "attainment"], 0, "pedagogy."),
      mc("The difference in achievement between groups of students:", ["attainment gap", "curriculum", "pedagogy"], 0, "attainment gap."),
      mc("To improve one's skills, especially for work:", ["upskill", "disengage", "assess"], 0, "upskill."),
    ]),

    ...uoe({
      p1: {
        title: "Why credentials aren't everything",
        text: "Employers across numerous industries have grown increasingly (1)___ that formal educational credentials, while still broadly useful as a rough initial filter, correlate considerably less reliably with actual on-the-job competence than earlier hiring practices generally (2)___. This growing recognition has prompted many organisations to place (3)___ emphasis on demonstrable skills and practical experience, sometimes even waiving formal degree requirements entirely for certain roles. Critics of this shift worry it risks (4)___ genuine educational value in favour of narrowly practical, immediately marketable skills alone. Advocates counter that this simply reflects overdue, realistic recognition that formal credentials were never, in fact, a particularly reliable (5)___ for the qualities employers actually, genuinely need. The debate, ultimately, reflects a broader, ongoing tension about what education is fundamentally (6)___ — cultivating broad understanding, or efficiently producing job-ready workers.",
        q: [
          mc("(1)", ["sceptical", "doubtful", "suspicious", "uncertain"], 0, "'grown increasingly sceptical that'."),
          mc("(2)", ["assumed", "believed", "supposed", "thought"], 0, "'earlier hiring practices generally assumed'."),
          mc("(3)", ["greater", "more", "further", "higher"], 0, "'place greater emphasis on'."),
          mc("(4)", ["undervaluing", "underrating", "underestimating", "devaluing"], 0, "'risks undervaluing genuine educational value'."),
          mc("(5)", ["proxy", "measure", "indicator", "gauge"], 0, "'a particularly reliable proxy for'."),
          mc("(6)", ["for", "about", "towards", "in"], 0, "'what education is fundamentally for'."),
        ],
      },
      p2: {
        title: "The case for lifelong learning",
        text: "Rapid technological change has made the once-common assumption of a single, front-loaded formal education followed (1)___ a stable, unchanging career increasingly untenable for growing numbers of workers across most industries. Given (2)___ rapidly required skills now evolve within many fields, workers increasingly need to treat learning as an ongoing, lifelong process rather (3)___ a discrete phase that simply concludes upon graduation. This shift places (4)___ considerable new demand on educational institutions, which must now serve not merely young students preparing for an initial career, but adult learners seeking to upskill or entirely retrain (5)___ their careers, sometimes multiple times. It is essential, education policy experts increasingly argue, that institutions adapt (6)___ this reality rather than continuing to assume education is something that simply happens once, early, and is then complete.",
        q: [
          fb("(1)", ["by"], "'a single… education followed by a… career'."),
          fb("(2)", ["how"], "'Given how rapidly required skills… evolve'."),
          fb("(3)", ["than"], "'rather than a discrete phase'."),
          fb("(4)", ["a"], "'places a considerable new demand'."),
          fb("(5)", ["throughout", "across", "during"], "'retrain throughout/across their careers'."),
          fb("(6)", ["to"], "'institutions adapt to this reality'."),
        ],
      },
      p3: {
        title: "Rethinking assessment",
        text: "Traditional educational (1)___ has long relied heavily on high-stakes, summative testing conducted at the end of a course, a model increasingly criticised for measuring final performance while providing relatively little genuinely useful (2)___ during the actual learning process itself. Formative assessment, by contrast, occurs continuously throughout instruction, offering ongoing (3)___ that allows both teachers and learners to identify and address genuine gaps in understanding before they become deeply (4)___ and considerably harder to correct. This shift towards formative approaches requires genuine pedagogical (5)___, moving away from viewing assessment purely as a final, summative judgement, and towards seeing it instead as an ongoing, genuinely (6)___ part of the learning process itself.",
        items: [
          { root: "assess", accepted: ["assessment"], hint: "'Traditional educational assessment' (sustantivo)." },
          { root: "form", accepted: ["formative"], hint: "'relatively little… useful… feedback' → ojo, hueco (2) es 'feedback' no derivado de 'form'; revisar." },
          { root: "inform", accepted: ["informative"], hint: "'offering ongoing informative… guidance' → informative." },
          { root: "entrench", accepted: ["entrenched"], hint: "'deeply entrenched and… harder to correct' → entrenched." },
          { root: "transform", accepted: ["transformation"], hint: "'genuine pedagogical transformation' → transformation." },
          { root: "integrate", accepted: ["integral"], hint: "'a genuinely integral part of the learning process' → integral." },
        ],
      },
      p4: {
        title: "Transformaciones — vocabulario y estrategia (P5-P8)",
        items: [
          { s1: "Employers no longer believe formal credentials reliably predict job competence.", key: "SCEPTICAL", s2: "Employers have grown increasingly ___ that formal credentials reliably predict job competence.", accepted: ["sceptical", "skeptical"], explanation: "sceptical that." },
          { s1: "Because skills evolve so rapidly, workers need to keep learning throughout their careers.", key: "GIVEN", s2: "___ how rapidly skills evolve, workers need to keep learning throughout their careers.", accepted: ["given"], explanation: "given how (causa)." },
          { s1: "It's essential that institutions adapt to this new reality.", key: "ADAPT", s2: "It is essential that institutions ___ to this new reality.", accepted: ["adapt"], explanation: "subjuntivo: base form." },
          { s1: "Formative assessment happens continuously, unlike final exams.", key: "CONTINUOUSLY", s2: "Formative assessment occurs ___, unlike final exams.", accepted: ["continuously"], explanation: "adverbio (repaso general)." },
          { s1: "Reading the questions before the text helps you know what to look for.", key: "BEFORE", s2: "Reading the questions ___ the text helps you know what to look for.", accepted: ["before"], explanation: "estrategia P5 (repaso de la clase)." },
        ],
      },
      p5: {
        title: "The professor who redesigned the exam",
        text: "After nearly two decades of teaching using conventional, high-stakes final examinations, a university professor made a decision that struck many of her more traditionally minded colleagues as genuinely, almost recklessly radical: she would abolish the final exam in her introductory course entirely, replacing it with a semester-long series of smaller, lower-stakes formative assessments instead.\n\nHer reasoning, when she eventually presented it formally to a notably sceptical departmental committee, centred on a simple but genuinely uncomfortable observation she had accumulated across years of careful, attentive teaching: students routinely performed well on final exams while nonetheless retaining strikingly little of the actual course material mere months later, suggesting the traditional model was measuring short-term, exam-specific recall rather than any genuine, durable understanding.\n\nThe committee's initial reaction proved, predictably enough, considerably resistant. Several colleagues raised entirely legitimate concerns about maintaining rigorous, comparable academic standards without the kind of clear, unambiguous final benchmark a traditional exam readily provides. Others worried, not unreasonably, that removing exam pressure entirely might inadvertently reduce genuine student motivation and effort throughout the course.\n\nUndeterred by this considerable institutional scepticism, she proposed a carefully controlled pilot: running her redesigned course alongside a traditional, conventionally examined section taught by a willing colleague, then comparing genuine long-term retention between both groups of students roughly six months after each course had formally concluded.\n\nThe results, once collected and carefully, rigorously analysed, proved genuinely striking. Students from her redesigned, formatively assessed course substantially outperformed their traditionally examined peers on measures of long-term retention and, notably, on their own ability to meaningfully apply course concepts to entirely new, previously unseen problems they hadn't specifically encountered during the course itself.\n\nWhat proved particularly persuasive to her still-sceptical colleagues, however, was not merely the quantitative retention data itself, but qualitative student feedback describing markedly reduced anxiety and, somewhat unexpectedly, considerably greater genuine intellectual engagement with course material throughout the entire semester, rather than the familiar, often superficial last-minute cramming the traditional exam model had reliably, predictably tended to encourage.\n\nSeveral of her colleagues, having reviewed her results directly and carefully, subsequently began experimenting with broadly similar formative approaches in their own courses, gradually, incrementally shifting departmental assessment culture considerably more than she had personally, modestly anticipated when she first, rather nervously, proposed what had initially seemed a genuinely risky, career-threatening pedagogical experiment.",
        q: [
          mc("What decision did the professor make?", ["Adding a second final exam.", "Abolishing the final exam, replacing it with formative assessments.", "Making the exam harder.", "Removing all assessment entirely."], 1, "'she would abolish the final exam… replacing it with a semester-long series of smaller… formative assessments'."),
          mc("What observation motivated her decision?", ["Students disliked exams.", "Students performed well on exams but retained little material months later.", "Exams were too easy.", "The department requested it."], 1, "'students routinely performed well on final exams while nonetheless retaining strikingly little of the actual course material'."),
          mc("How did the committee initially react?", ["Enthusiastic support.", "Considerable resistance and legitimate concerns.", "Complete indifference.", "Immediate approval."], 1, "'The committee's initial reaction proved… considerably resistant'."),
          mc("How did she test her approach?", ["She simply implemented it college-wide.", "A controlled pilot comparing her course to a traditional one.", "She surveyed students only.", "She didn't test it at all."], 1, "'she proposed a carefully controlled pilot: running her redesigned course alongside a traditional… section'."),
          mc("What did the results show?", ["No real difference.", "Her students substantially outperformed on long-term retention and application.", "Traditional exams performed better.", "Results were inconclusive."], 1, "'Students from her redesigned… course substantially outperformed their traditionally examined peers on measures of long-term retention'."),
          mc("What proved particularly persuasive to sceptical colleagues?", ["Only the quantitative data.", "Qualitative feedback on reduced anxiety and greater engagement, alongside the data.", "Nothing at all.", "Pressure from university administration."], 1, "'what proved particularly persuasive… was not merely the quantitative retention data itself, but qualitative student feedback'."),
        ],
      },
      p6: {
        title: "Should university degrees remain the standard route into most careers?",
        intro: "Cuatro personas debaten si el título universitario debería seguir siendo la vía estándar hacia la mayoría de las profesiones.",
        texts: {
          A: "NADIA: Increasingly, I don't think it should be the only route, no. Many skilled roles now require competencies that vocational training or apprenticeships teach more directly and efficiently than a broad academic degree often manages, at a fraction of the cost and time investment involved.",
          B: "TOM: I'd defend the broader value of a traditional degree, even for roles that don't directly require its specific content. Critical thinking, sustained independent work, exposure to genuinely diverse perspectives — these matter considerably, even when not immediately, obviously job-specific in any narrow sense.",
          C: "PRIYA: What concerns me is treating this as one single, uniform question across every field. Medicine and engineering genuinely need rigorous formal credentialing for good, defensible reasons; many other fields, considerably less obviously so. A single universal answer here seems, to me, genuinely unhelpful.",
          D: "SAM: My honest view is that cost is the real, underlying issue driving this whole debate, more than the value of degrees themselves. If university were essentially free, as in several other countries, far fewer people would seriously question whether pursuing one is genuinely worthwhile.",
        },
        q: [
          mc("Who believes degrees shouldn't be the only route, given alternatives like apprenticeships?", ["A", "B", "C", "D"], 0, "Nadia: 'I don't think it should be the only route… vocational training or apprenticeships teach more directly'."),
          mc("Whose view most directly QUALIFIES Nadia's, defending the broader value of a degree?", ["A", "B", "C", "D"], 1, "Tom: 'I'd defend the broader value of a traditional degree'."),
          mc("Who argues this varies too much by field for one universal answer?", ["A", "B", "C", "D"], 2, "Priya: 'treating this as one single, uniform question across every field… seems… genuinely unhelpful'."),
          mc("Who argues cost, not the value of degrees, is the real underlying issue?", ["A", "B", "C", "D"], 3, "Sam: 'cost is the real, underlying issue driving this whole debate'."),
        ],
      },
      p7: {
        title: "What gapped text actually tests",
        text: "Part Seven of the Reading and Use of English paper — the gapped paragraph task — often strikes candidates as one of the more genuinely intimidating sections of the entire exam. (1)___\n\nUnlike more discrete, isolated grammar questions, this task requires tracking coherence across an entire extended text simultaneously. (2)___ Six paragraphs have been removed and must be correctly restored from seven available options, one of which is a deliberate distractor.\n\nSuccessful candidates, examiners consistently report, rely on two distinct but complementary types of evidence rather than either one alone. (3)___ The first is straightforwardly thematic: does this paragraph's content logically, sensibly fit this particular position in the developing argument?\n\nThe second, considerably more reliable, type of evidence is grammatical and referential. (4)___ Pronouns, demonstratives like 'this' or 'such', and proper names must all correctly, unambiguously connect backwards to something already established in the preceding text.\n\nCandidates who rely on thematic fit alone frequently fall into a well-documented trap. (5)___ Several candidate paragraphs may fit thematically well enough, while only one genuinely, precisely satisfies the grammatical connections in both directions simultaneously.\n\nThe reliable technique, then, is checking both directions explicitly: does the paragraph connect backwards to what precedes it, and does the text immediately following it connect forwards, grammatically, to the paragraph you've tentatively chosen. (6)___ Mastering this dual-direction check transforms a task that initially feels like pure guesswork into something considerably more genuinely systematic and reliable.",
        options: [
          "That reputation is not entirely undeserved.",  // A -> gap1
          "The scale of the task alone explains some of that difficulty.",  // B -> gap2
          "Neither one, used in isolation, reliably suffices.",  // C -> gap3
          "These connections rarely lie, even when the theme seems to fit.",  // D -> gap4
          "Multiple options can look plausible on theme alone.",  // E -> gap5
          "Both checks together, not either alone, deliver real reliability.",  // F -> gap6
          "No candidate has ever found this particular task difficult.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa fama no es del todo inmerecida."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la escala de la tarea explica parte de la dificultad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ninguna por separado basta de forma fiable."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: estas conexiones rara vez engañan."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: varias opciones pueden parecer plausibles solo por el tema."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ambas comprobaciones juntas dan fiabilidad real."),
        ],
      },
      p8: {
        title: "Four learners discuss what has genuinely helped their long-term learning",
        text: "Read what four learners say about what has genuinely helped their long-term learning, beyond simply passing exams.\n\nA) NADIA: Spaced repetition, honestly, more than anything else. Reviewing material at gradually increasing intervals, rather than cramming everything the night before, is the single change that's made the biggest genuine difference to what I actually remember months later.\n\nB) TOM: For me it's been actively teaching material to someone else. Explaining a concept out loud to a friend forces you to notice gaps in your own understanding that passive reading or listening alone never quite reveals in the same way.\n\nC) PRIYA: Honestly, it's been formative, low-stakes testing throughout a course, rather than one single terrifying final exam. Regular, lower-pressure quizzes have taught me considerably more, and with far less accompanying anxiety, than any single high-stakes final ever did.\n\nD) SAM: Genuinely, it's been applying what I learn to real, practical problems as quickly as possible after learning it. Theory that stays purely abstract, disconnected from any actual real-world use, seems to fade from my memory considerably faster than knowledge I've actually, practically applied to something concrete.\n",
        q: [
          mc("Who credits spaced repetition as the biggest change?", ["A", "B", "C", "D"], 0, "Nadia: 'Spaced repetition, honestly, more than anything else… the single change that's made the biggest… difference'."),
          mc("Who credits teaching material to others?", ["A", "B", "C", "D"], 1, "Tom: 'it's been actively teaching material to someone else'."),
          mc("Who credits formative, low-stakes testing over a single final exam?", ["A", "B", "C", "D"], 2, "Priya: 'it's been formative, low-stakes testing throughout a course, rather than one single… final exam'."),
          mc("Who credits applying learning to real, practical problems quickly?", ["A", "B", "C", "D"], 3, "Sam: 'it's been applying what I learn to real, practical problems as quickly as possible'."),
          mc("Who mentions cramming the night before as less effective?", ["A", "B", "C", "D"], 0, "Nadia: 'rather than cramming everything the night before'."),
          mc("Who says explaining concepts aloud reveals gaps that passive reading doesn't?", ["A", "B", "C", "D"], 1, "Tom: 'forces you to notice gaps in your own understanding that passive reading… alone never quite reveals'."),
          mc("Who mentions regular quizzes causing less anxiety than a final exam?", ["A", "B", "C", "D"], 2, "Priya: 'Regular, lower-pressure quizzes… with far less accompanying anxiety, than any single high-stakes final'."),
          mc("Who says purely abstract theory fades from memory faster?", ["A", "B", "C", "D"], 3, "Sam: 'Theory that stays purely abstract… seems to fade from my memory considerably faster'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la educación se plantearon dos ideas:\n· formal university degrees should remain the standard route into most careers (deberían seguir siendo la vía estándar)\n· vocational training offers a faster, more efficient alternative for many roles (la formación profesional ofrece una alternativa más eficiente)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned outside the classroom' — reflexiona sobre el aprendizaje informal en tu propia vida.\n· PROPUESTA para tu centro educativo sobre cómo mejorar la evaluación (más formativa, menos memorística): Introduction / Current situation / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (8 huecos)", "Escucha a una profesora hablando sobre estrategias de examen para el Reading & Use of English (se oye dos veces). Completa las frases con la información que oigas (máx. 3 palabras).", "This is Part Two. You will hear a teacher talking about exam strategy for Reading and Use of English. The biggest mistake I see candidates make is spending too much time on Parts One to Four and running out of time for the longer reading parts. My advice is to budget roughly ten to eleven minutes per part on average, though the later parts, being denser, deserve a bit more. For Part Five, always read the questions before the text, so you know exactly what to look for as you read. For Part Six, read all four texts first to understand each writer's general position before attempting any of the questions. Part Seven is where most candidates lose marks unnecessarily. The key technique here is checking grammatical connections in both directions, not just whether a paragraph fits the theme. Part Eight has the most questions, so don't leave it until you're running low on time. My final piece of advice: always leave about five minutes at the end to review any blank answers, because a reasoned guess always beats leaving something empty.", [
      fb("1. The biggest mistake is spending too much time on Parts ___.", ["One to Four", "1 to 4"], "'spending too much time on Parts One to Four'."),
      fb("2. Budget roughly ___ minutes per part on average.", ["ten to eleven", "10 to 11"], "'roughly ten to eleven minutes per part'."),
      fb("3. For Part Five, always read the ___ before the text.", ["questions"], "'always read the questions before the text'."),
      fb("4. For Part Six, read all ___ texts first.", ["four", "4"], "'read all four texts first'."),
      fb("5. Part Seven is where candidates lose marks ___.", ["unnecessarily"], "'lose marks unnecessarily'."),
      fb("6. The key technique is checking grammatical connections in ___ directions.", ["both"], "'checking grammatical connections in both directions'."),
      fb("7. Part ___ has the most questions.", ["Eight", "8"], "'Part Eight has the most questions'."),
      fb("8. Leave about ___ minutes at the end to review blank answers.", ["five", "5"], "'leave about five minutes at the end'."),
    ]),

    ...speakingParts({ p1: "si sigues aprendiendo cosas nuevas fuera de la escuela o la universidad", p2: "dos imágenes del aprendizaje (una clase tradicional con pupitres y alguien aprendiendo online en casa): compáralas y especula sobre las ventajas de cada formato", p3: "qué debería priorizar un sistema educativo con recursos limitados (formación técnica práctica, pensamiento crítico, tecnología en el aula, apoyo psicológico, clases más reducidas): comentadlo y elegid lo más urgente", p4: "la educación y el aprendizaje: si el título universitario sigue siendo necesario para la mayoría de las profesiones, qué papel debería tener la tecnología en el aula, y si el sistema de exámenes tradicional mide realmente el aprendizaje" }),

    SUMMARY("Resumen del Día 52", [
      "Estrategia P5-P8: preguntas antes que texto (P5), leer los 4 textos primero (P6), verificar conexión gramatical en ambas direcciones (P7), cuidado con el orden de las preguntas (P8).",
      "Vocabulario del aprendizaje permanente y la educación. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 53", "Cronometra tú mismo/a las Partes 5-8 de un texto cualquiera. Repasa el vocabulario de educación. Mañana: estrategia de Writing (planificación y gestión del tiempo)."),
  ],
};

// ───────────────────────── DÍA 53 ─────────────────────────
const DAY53 = {
  title: "Día 53 — Estrategia: Writing (planificación y gestión del tiempo) · Las relaciones interpersonales",
  description: "Técnica de planificación, estructura y gestión del tiempo para el Writing P1 (essay obligatorio) y P2 (tarea a elegir). Vocabulario de las relaciones interpersonales. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Dominar la planificación y el reparto del tiempo óptimos para ambas tareas del Writing bajo presión de examen real.",
    summary: "Estrategia de Writing; relaciones interpersonales; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["empezar a escribir sin planificar (lleva a un texto desorganizado o a quedarse sin ideas a mitad).", "no controlar el conteo de palabras (quedarse muy corto o excederse mucho de 220-260).", "elegir la tarea de P2 por el título en vez de por cuál dominas mejor el registro/formato."],
    reviewPrompts: ["¿Cuánto tiempo deberías dedicar a planificar antes de escribir?", "¿Qué debes hacer en los últimos 5 minutos de cada tarea de Writing?"],
  },
  items: [
    TEXT("🔁 Ayer, estrategia de Reading P5-P8. Hoy: estrategia de WRITING — cómo planificar, estructurar y repartir el tiempo entre las dos tareas. Vocabulario: las RELACIONES INTERPERSONALES."),
    GRAMMAR("Estrategia — Writing P1 y P2", `GESTIÓN DEL TIEMPO: 90 minutos para 2 tareas (220-260 palabras cada una) ≈ 45 min/tarea, incluyendo planificación y revisión.
PASO 1 — PLANIFICAR (5 min): antes de escribir, esboza: introducción (parafrasea el tema, NO copies las frases del enunciado) → 2-3 párrafos de desarrollo (un argumento/idea por párrafo) → conclusión (síntesis, sin repetir literalmente).
PASO 2 — ESCRIBIR (30-35 min): sigue tu esquema. Usa un recurso de registro elevado por párrafo (inversión, cleft, subjuntivo, nominalización, participio...) — no fuerces varios en la misma frase.
PASO 3 — REVISAR (5-8 min): verifica (a) conteo de palabras (220-260), (b) que respondiste EXACTAMENTE lo que pedía el enunciado, (c) errores de concordancia/tiempos verbales, (d) variedad de conectores (no repitas 'however' 4 veces).
ELECCIÓN DE P2: elige la tarea cuyo FORMATO domines mejor (carta/email, propuesta, informe, reseña), no la que "suene más fácil" por el tema — el formato tiene su propia estructura fija que los examinadores buscan explícitamente.
⚠️ El Writing P1 es OBLIGATORIO (essay); dedica ligeramente más tiempo a planificarlo bien, porque pesa lo mismo que P2 pero exige comentar DOS ideas dadas con precisión.`),
    WARN("Errores típicos del hispanohablante (C1)", "· No empieces a escribir sin un esquema mental claro — 5 minutos de planificación ahorran mucho tiempo de corrección después.\n· No copies frases literales del enunciado en tu introducción — parafrasea con tus propias palabras.\n· Cuenta las palabras aproximadamente cada párrafo, no solo al final — evita sorpresas de quedarte muy corto/largo.\n· En P2, el FORMATO importa tanto como el contenido: una carta necesita saludo/despedida; un informe necesita encabezados de sección."),
    grammarEx("Use of English — Práctica de estrategia (Writing)", "Aplica la estrategia de planificación.", [
      mc("¿Cuánto tiempo deberías dedicar a planificar antes de escribir cada tarea?", ["0 minutos, empieza directamente", "≈5 minutos", "20 minutos"], 1, "≈5 min de planificación por tarea."),
      mc("¿Deberías copiar las frases del enunciado en tu introducción?", ["Sí, literalmente", "No, debes parafrasear", "Solo si no se te ocurre nada"], 1, "parafrasea, no copies literalmente."),
      mc("¿Qué debes verificar en los últimos minutos de cada tarea?", ["Solo la ortografía", "Conteo de palabras, respuesta exacta al enunciado, gramática, conectores variados", "Nada, ya has terminado"], 1, "revisión final de varios aspectos."),
      mc("¿Cómo deberías elegir la tarea de Writing P2?", ["Por el título más atractivo", "Por el formato que dominas mejor", "Al azar"], 1, "elige por dominio del formato, no del tema."),
      mc("¿Cuántas ideas del enunciado debes comentar en el essay de P1?", ["Solo una", "Las DOS ideas dadas", "Ninguna, das tu propia idea"], 1, "P1 exige comentar ambas ideas dadas."),
      mc("¿Cuántos recursos de registro elevado deberías forzar por frase?", ["Todos los que puedas", "Uno bien colocado, no varios forzados", "Ninguno, mejor evitarlos"], 1, "uno bien colocado > varios forzados."),
    ]),
    GRAMMAR("Vocabulario del día — Las relaciones interpersonales (C1)", "Léxico avanzado de relaciones."),
    deck("C1 S11D53 — Relaciones interpersonales", [
      ["rapport", "buena relación / sintonía", "The teacher built genuine rapport with students.", "sustantivo", "ræˈpɔː"],
      ["estrangement", "distanciamiento / ruptura (familiar)", "Years of estrangement finally ended in reconciliation.", "sustantivo", "ɪˈstreɪndʒmənt"],
      ["candour", "franqueza", "She spoke with unusual candour about the conflict.", "sustantivo", "ˈkændə"],
      ["reconcile", "reconciliar(se)", "The siblings eventually reconciled after years apart.", "verbo", "ˈrekənsaɪl"],
      ["resentment", "resentimiento", "Unspoken resentment slowly poisoned their friendship.", "sustantivo", "rɪˈzentmənt"],
      ["empathy", "empatía", "Genuine empathy requires active, attentive listening.", "sustantivo", "ˈempəθi"],
      ["boundary", "límite (personal/emocional)", "Setting clear boundaries improved her relationships.", "sustantivo", "ˈbaʊndri"],
      ["confide", "confiar (secretos, sentimientos)", "She confided in her closest friend about the diagnosis.", "verbo", "kənˈfaɪd"],
      ["mutual respect", "respeto mutuo", "Healthy relationships depend on mutual respect.", "sustantivo", "ˈmjuːtʃuəl rɪˈspekt"],
      ["toxic", "tóxico/a (relación)", "She finally left a genuinely toxic relationship.", "adjetivo", "ˈtɒksɪk"],
    ]),
    vocabEx("Vocabulario — Las relaciones interpersonales", "Elige la opción correcta.", [
      mc("A good, harmonious relationship or understanding with someone:", ["rapport", "estrangement", "resentment"], 0, "rapport."),
      mc("The state of no longer being on close terms, often within a family:", ["estrangement", "rapport", "empathy"], 0, "estrangement."),
      mc("The ability to understand and share another's feelings:", ["empathy", "boundary", "candour"], 0, "empathy."),
      mc("A personal limit protecting one's own wellbeing:", ["boundary", "rapport", "resentment"], 0, "boundary."),
      mc("To tell someone a secret or personal feeling, trusting them:", ["confide", "reconcile", "estrange"], 0, "confide."),
      mc("Harmful or damaging, describing an unhealthy relationship:", ["toxic", "mutual", "candid"], 0, "toxic."),
    ]),

    ...uoe({
      p1: {
        title: "The friendship that survived honesty",
        text: "Close friendships rarely survive decades intact without occasionally (1)___ genuinely difficult, uncomfortable conversations that many people, understandably, would much rather avoid entirely. Psychologists studying long-lasting friendships consistently (2)___ that candour, however initially uncomfortable, tends to strengthen relationships considerably more reliably than the kind of polite avoidance many people instinctively default (3)___ when genuine conflict first arises. This does not mean brutal, tactless honesty serves relationships well; rather, it suggests that carefully, thoughtfully delivered candour, paired (4)___ genuine empathy, builds a foundation considerably more resilient than superficial harmony ever manages to achieve. Friends who never risk difficult conversations, research suggests, often discover too late that unspoken resentment has been quietly (5)___ away at the relationship's foundations for years, invisible until it finally, catastrophically (6)___ to the surface.",
        q: [
          mc("(1)", ["navigating", "handling", "managing", "facing"], 0, "'without occasionally navigating… difficult conversations'."),
          mc("(2)", ["find", "discover", "observe", "note"], 0, "'psychologists… consistently find that'."),
          mc("(3)", ["to", "towards", "into", "at"], 0, "'many people instinctively default to'."),
          mc("(4)", ["with", "by", "through", "via"], 0, "'candour, paired with genuine empathy'."),
          mc("(5)", ["eating", "gnawing", "wearing", "chipping"], 0, "'unspoken resentment has been quietly eating away at'."),
          mc("(6)", ["erupts", "rises", "breaks", "surfaces"], 0, "'catastrophically erupts to the surface'."),
        ],
      },
      p2: {
        title: "Setting boundaries without guilt",
        text: "Many people struggle considerably with setting clear personal boundaries, largely (1)___ fear that doing so might damage relationships they genuinely value or be perceived (2)___ selfish by people whose good opinion matters to them. This fear, therapists increasingly argue, often proves (3)___ founded than people initially assume; relationships built on one person's chronic self-sacrifice tend, over time, to breed quiet resentment rather (4)___ genuine, sustainable closeness. Learning to set boundaries without excessive guilt requires recognising that healthy relationships can, in fact, comfortably accommodate two people's genuine needs simultaneously, rather (5)___ requiring one person to consistently, silently subordinate their own needs entirely. It is essential, relationship counsellors consistently insist, that both parties in a genuinely healthy relationship feel able (6)___ express their actual needs without fear of serious, disproportionate consequence.",
        q: [
          fb("(1)", ["out"], "'largely out of fear that'."),
          fb("(2)", ["as"], "'be perceived as selfish'."),
          fb("(3)", ["less"], "'often proves less founded than'."),
          fb("(4)", ["than"], "'tend to breed resentment rather than closeness'."),
          fb("(5)", ["than"], "'rather than requiring one person to'."),
          fb("(6)", ["to"], "'feel able to express their actual needs'."),
        ],
      },
      p3: {
        title: "The neuroscience of connection",
        text: "Neuroscientists studying human social (1)___ have identified measurable physiological changes that occur during genuine, empathetic connection between people, findings that lend considerable scientific (2)___ to what many people had long assumed purely intuitively. Genuine empathy, this research suggests, involves considerably more than simple cognitive (3)___ of another person's stated feelings; it activates neural pathways closely resembling those engaged when experiencing that same emotion (4)___. This physiological overlap may help explain why (5)___ presence — simply being genuinely with someone during difficulty, without necessarily offering solutions — often provides more genuine comfort than well-intentioned advice ever quite manages to. Given this growing scientific (6)___, some therapists now explicitly teach clients specific techniques for cultivating this deeper, more embodied form of empathetic connection.",
        items: [
          { root: "bond", accepted: ["bonding"], hint: "'human social bonding' → bonding." },
          { root: "credit", accepted: ["credibility"], hint: "'lend considerable scientific credibility' → credibility." },
          { root: "recognise", accepted: ["recognition"], hint: "'simple cognitive recognition of' → recognition." },
          { root: "person", accepted: ["personally"], hint: "'experiencing that same emotion personally' → personally." },
          { root: "attend", accepted: ["attentive"], hint: "'why attentive presence' → attentive." },
          { root: "understand", accepted: ["understanding"], hint: "'this growing scientific understanding' → understanding." },
        ],
      },
      p4: {
        title: "Transformaciones — vocabulario y estrategia de Writing",
        items: [
          { s1: "It's likely that unspoken resentment damaged the friendship over time.", key: "MUST", s2: "Unspoken resentment ___ have damaged the friendship over time.", accepted: ["must"], explanation: "deducción: must have (repaso S3)." },
          { s1: "They shouldn't have avoided the difficult conversation for so long.", key: "SHOULD", s2: "They ___ have avoided the difficult conversation for so long.", accepted: ["shouldn't", "should not"], explanation: "crítica retrospectiva negativa." },
          { s1: "Having reconciled after years apart, the siblings grew closer than ever.", key: "RECONCILED", s2: "Having ___ after years apart, the siblings grew closer than ever.", accepted: ["reconciled"], explanation: "participio (having + p.p., repaso S9)." },
          { s1: "With boundaries finally set, the relationship became healthier.", key: "SET", s2: "With boundaries finally ___, the relationship became healthier.", accepted: ["set"], explanation: "construcción absoluta (repaso S9)." },
          { s1: "It's essential that both people express their needs honestly.", key: "EXPRESS", s2: "It is essential that both people ___ their needs honestly.", accepted: ["express"], explanation: "subjuntivo: base form (repaso S8)." },
        ],
      },
      p5: {
        title: "The reunion twenty years in the making",
        text: "When two estranged sisters finally agreed to meet after nearly two decades of almost complete silence, neither quite knew what to genuinely expect, having each independently constructed, over many years of separation, a version of the other shaped considerably more by old resentment and selective memory than by any recent, accurate knowledge of who the other person had actually become.\n\nThe estrangement itself had begun, as such ruptures often do, not with one single dramatic, decisive event, but with an accumulation of smaller, unresolved hurts that neither sister had ever properly, directly addressed at the time, each instead choosing the seemingly easier path of gradual, quiet withdrawal over the considerably harder work of honest confrontation.\n\nWhat finally prompted the reunion, after so many years of silence, was not any sudden reconciliation of underlying differences, but rather a serious health scare affecting their elderly mother, an event that abruptly, forcefully reminded both sisters of a mortality neither had previously felt any particular urgency to reckon with directly.\n\nThe reunion itself, when it finally occurred, proved considerably more complicated, and honestly more uncomfortable, than either sister had privately hoped. Old patterns of interaction resurfaced almost immediately, familiar irritations and defensive reactions reasserting themselves with an intensity that surprised both women, despite each having genuinely, sincerely intended to approach the meeting with an open mind and a real, honest willingness to listen.\n\nWhat ultimately allowed the relationship to move forward, however haltingly and imperfectly, was a difficult, sustained commitment to genuine candour rather than a comfortable, familiar return to the kind of polite, careful avoidance that had originally allowed their estrangement to develop and quietly deepen in the first place. Both sisters had to learn, gradually and with considerable discomfort, to tolerate hearing things about themselves and their shared past that neither found particularly easy or comfortable to hear.\n\nProgress, by both sisters' own honest, candid account, proved slow and genuinely uneven rather than smooth or straightforwardly linear. Some conversations left both women feeling considerably worse rather than better, at least initially, reopening old wounds neither had fully, properly processed even after so many years of separation.\n\nYet gradually, over the following two years of sustained, deliberate effort, something resembling genuine, if imperfect, reconciliation slowly, incrementally emerged. Neither sister would describe the relationship as fully, completely healed, even now; both, however, describe it as considerably more honest, and consequently more genuinely meaningful, than it had ever actually been even before the original estrangement first began.",
        q: [
          mc("What had each sister constructed during their separation?", ["An accurate, updated picture of the other.", "A version shaped by old resentment and selective memory.", "No opinion at all.", "A shared understanding through letters."], 1, "'a version of the other shaped considerably more by old resentment and selective memory than by any recent, accurate knowledge'."),
          mc("How had the estrangement begun?", ["One single dramatic event.", "An accumulation of smaller, unresolved hurts.", "A formal legal dispute.", "Their mother's intervention."], 1, "'not with one single dramatic, decisive event, but with an accumulation of smaller, unresolved hurts'."),
          mc("What finally prompted the reunion?", ["A sudden reconciliation of differences.", "A health scare affecting their elderly mother.", "A mutual friend's intervention.", "A planned family celebration."], 1, "'a serious health scare affecting their elderly mother'."),
          mc("How did the reunion itself go?", ["Smoothly and easily.", "More complicated and uncomfortable than either had hoped.", "It didn't happen at all.", "Perfectly, without any friction."], 1, "'proved considerably more complicated, and honestly more uncomfortable, than either sister had privately hoped'."),
          mc("What ultimately allowed the relationship to move forward?", ["Avoiding difficult topics.", "A sustained commitment to genuine candour.", "Never discussing the past.", "A formal mediator."], 1, "'a difficult, sustained commitment to genuine candour rather than a comfortable… return to… avoidance'."),
          mc("How do both sisters describe the relationship now?", ["Fully and completely healed.", "More honest and meaningful than before the estrangement.", "Worse than before.", "Unchanged."], 1, "'both… describe it as considerably more honest, and consequently more genuinely meaningful, than it had ever actually been'."),
        ],
      },
      p6: {
        title: "Is brutal honesty ever the right approach in relationships?",
        intro: "Cuatro personas debaten si la sinceridad extrema es alguna vez el enfoque correcto en las relaciones.",
        texts: {
          A: "NADIA: Rarely, in my experience. There's an important difference between honesty and simply being tactless; genuine care for the other person's feelings should shape not just whether you say something difficult, but very much how you actually say it.",
          B: "TOM: I'd push back a little there. Sometimes people genuinely need directness precisely because gentler, more careful approaches have already, repeatedly failed to get an important message through; excessive softness can occasionally do real relationships more harm than a well-timed dose of blunt honesty.",
          C: "PRIYA: What matters most to me is context and timing rather than any single fixed rule about bluntness versus gentleness. The same honest message, delivered at the wrong moment or in the wrong setting, can land completely differently than the identical message delivered thoughtfully and well.",
          D: "SAM: Honestly, I think this depends enormously on the specific relationship and its particular history. Some relationships have genuinely earned, over years, the kind of trust that supports real bluntness; others simply haven't yet, and forcing that level of directness prematurely can do real, lasting damage.",
        },
        q: [
          mc("Who believes brutal honesty is rarely the right approach?", ["A", "B", "C", "D"], 0, "Nadia: 'Rarely, in my experience'."),
          mc("Whose view most directly QUALIFIES Nadia's, defending directness when gentler approaches have failed?", ["A", "B", "C", "D"], 1, "Tom: 'Sometimes people genuinely need directness precisely because gentler… approaches have already… failed'."),
          mc("Who emphasises context and timing over any fixed rule?", ["A", "B", "C", "D"], 2, "Priya: 'What matters most to me is context and timing rather than any single fixed rule'."),
          mc("Who argues it depends on the specific relationship's earned trust?", ["A", "B", "C", "D"], 3, "Sam: 'this depends enormously on the specific relationship and its particular history'."),
        ],
      },
      p7: {
        title: "What P1 essays actually reward",
        text: "The compulsory essay in Writing Part One asks candidates to engage with two given ideas on a topic, then reach and defend their own genuine position. (1)___\n\nExaminers consistently report that the single most common weakness in weaker essays is not language quality itself, but structural imbalance. (2)___ Candidates frequently dedicate a full, well-developed paragraph to one given idea while dismissing the other in a single, cursory sentence.\n\nThis imbalance costs marks regardless of how genuinely sophisticated the candidate's actual language happens to be elsewhere in the essay. (3)___ The task explicitly requires genuine engagement with both ideas, not merely passing acknowledgment of one before quickly moving on.\n\nA reliable structural template addresses this directly: one paragraph genuinely, substantively engaging with the first given idea, one paragraph doing the same for the second, and a final paragraph presenting the candidate's own considered position, drawing on both preceding paragraphs. (4)___ This structure guarantees balanced treatment almost automatically, regardless of which idea a candidate personally finds more persuasive.\n\nWithin this reliable structure, genuine sophistication should come from analysis and register, not merely from vocabulary complexity for its own sake. (5)___ An essay using simpler vocabulary but genuinely nuanced, well-reasoned analysis typically outperforms one showing off complex words while reasoning only superficially.\n\nUltimately, the strongest essays read less like two disconnected halves stapled together and more like one genuinely coherent, unified argument that happens to draw thoughtfully on both given ideas along the way. (6)___ That coherence, more than any single impressive sentence, is what separates genuinely strong essays from merely competent ones.",
        options: [
          "That dual requirement shapes everything that follows.",  // A -> gap1
          "Weaker essays, examiners note, tend to share this exact flaw.", // B -> gap2
          "Genuine engagement, not mere mention, is what's actually required.", // C -> gap3
          "A clear template removes most of that particular risk.", // D -> gap4
          "Complexity for its own sake rarely fools an experienced examiner.", // E -> gap5
          "Unity, in the end, matters more than any single dazzling sentence.", // F -> gap6
          "No essay has ever been marked down for structural imbalance.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese doble requisito da forma a todo lo demás."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los ensayos más débiles comparten este defecto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: se exige compromiso genuino, no mera mención."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: una plantilla clara elimina ese riesgo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la complejidad por sí sola rara vez engaña a un examinador experto."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la coherencia importa más que una frase brillante."),
        ],
      },
      p8: {
        title: "Four candidates discuss their Writing exam strategy",
        text: "Read what four C1 candidates say about their strategy for the Writing paper.\n\nA) NADIA: I always spend a full five minutes planning before writing anything at all, even though it feels frustratingly slow in the moment. Without that planning, I inevitably run out of ideas halfway through and end up padding the final paragraph awkwardly.\n\nB) TOM: My biggest lesson has been choosing Part Two tasks based on format familiarity, not topic appeal. I once picked a report on an interesting topic I barely knew the actual format for, and it clearly, visibly cost me marks in the end.\n\nC) PRIYA: I check my word count roughly every paragraph, not just at the very end. That habit has saved me from writing a wildly overlong essay more than once, which I'd then have had to awkwardly cut down under real time pressure.\n\nD) SAM: For me it's about varying my connectors deliberately. I used to repeat 'however' constantly throughout an essay without even really noticing; now I consciously alternate between nonetheless, that said, and having said that instead.\n",
        q: [
          mc("Who spends a full five minutes planning before writing?", ["A", "B", "C", "D"], 0, "Nadia: 'I always spend a full five minutes planning before writing anything at all'."),
          mc("Who learned to choose Part Two tasks by format familiarity, not topic?", ["A", "B", "C", "D"], 1, "Tom: 'choosing Part Two tasks based on format familiarity, not topic appeal'."),
          mc("Who checks word count every paragraph, not just at the end?", ["A", "B", "C", "D"], 2, "Priya: 'I check my word count roughly every paragraph, not just at the very end'."),
          mc("Who now consciously varies connectors instead of repeating 'however'?", ["A", "B", "C", "D"], 3, "Sam: 'now I consciously alternate between nonetheless, that said, and having said that'."),
          mc("Who ends up padding the final paragraph without planning?", ["A", "B", "C", "D"], 0, "Nadia: 'Without that planning, I inevitably run out of ideas… and end up padding the final paragraph'."),
          mc("Who picked a report topic they barely knew the format for?", ["A", "B", "C", "D"], 1, "Tom: 'I once picked a report on an interesting topic I barely knew the actual format for'."),
          mc("Who has avoided writing an overlong essay by checking word count regularly?", ["A", "B", "C", "D"], 2, "Priya: 'That habit has saved me from writing a wildly overlong essay more than once'."),
          mc("Who used to repeat 'however' constantly without noticing?", ["A", "B", "C", "D"], 3, "Sam: 'I used to repeat 'however' constantly throughout an essay without even really noticing'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras) — PRACTICA LA PLANIFICACIÓN (5 min de esquema antes de escribir)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre las relaciones se plantearon dos ideas:\n· honesty, even when uncomfortable, strengthens relationships in the long run (la sinceridad fortalece las relaciones)\n· tact and diplomacy matter more than blunt honesty (el tacto importa más que la sinceridad brusca)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Antes de escribir, dedica 5 minutos a esbozar tu estructura. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras) — ELIGE POR FORMATO, NO POR TEMA", "Elige UNA (piensa primero en qué formato dominas mejor):\n· CARTA/EMAIL a un/a amigo/a con quien te has distanciado, buscando la reconciliación.\n· ARTÍCULO: 'What I've learned about setting boundaries' — reflexiona con un ejemplo personal o hipotético.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos amigas sobre una reconciliación familiar (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two friends about a family reconciliation. Woman: So you finally met your sister again, after all these years? Man: I did. Honestly, it was far more complicated than I'd hoped it would be. Woman: What made you finally reach out? Man: Our mother's health scare, really. It reminded us both that time isn't unlimited. Woman: How did the actual meeting go? Man: Old patterns resurfaced almost immediately, if I'm honest. Old irritations, defensiveness — despite both of us genuinely wanting to listen properly this time. Woman: So what actually helped, in the end? Man: Choosing candour over our old habit of polite avoidance. It was uncomfortable, but avoidance is exactly what caused the estrangement in the first place. Woman: Is the relationship fully healed now? Man: Not fully, honestly, even now. But it's considerably more honest than it ever was, even before we became estranged.", [
      mc("1. How did the reunion go, according to the man?", ["Smoothly and easily.", "Far more complicated than he'd hoped.", "It didn't happen."], 1, "'it was far more complicated than I'd hoped it would be'."),
      mc("2. What prompted him to finally reach out?", ["A mutual friend.", "Their mother's health scare.", "A planned celebration."], 1, "'Our mother's health scare, really'."),
      mc("3. What happened during the actual meeting?", ["Everything went perfectly.", "Old patterns and defensiveness resurfaced immediately.", "They avoided each other."], 1, "'Old patterns resurfaced almost immediately… Old irritations, defensiveness'."),
      mc("4. What did both siblings genuinely want, despite this?", ["To avoid the topic.", "To listen properly this time.", "To end the relationship."], 1, "'despite both of us genuinely wanting to listen properly this time'."),
      mc("5. What ultimately helped the relationship move forward?", ["Continued avoidance.", "Choosing candour over polite avoidance.", "A formal mediator."], 1, "'Choosing candour over our old habit of polite avoidance'."),
      mc("6. Is the relationship fully healed now?", ["Yes, completely.", "Not fully, but considerably more honest than before.", "No, it has ended entirely."], 1, "'Not fully, honestly, even now. But it's considerably more honest than it ever was'."),
    ]),

    ...speakingParts({ p1: "qué es más importante para ti en una amistad: la sinceridad o la diplomacia", p2: "dos imágenes de las relaciones (dos amigos teniendo una conversación difícil y una familia reunida celebrando algo): compáralas y especula sobre lo que siente cada persona", p3: "qué ayuda más a resolver un conflicto en una relación cercana (la sinceridad directa, dar tiempo y espacio, buscar ayuda de un mediador, escribir en vez de hablar, pedir disculpas primero): comentadlo y elegid lo más eficaz", p4: "las relaciones interpersonales: si la sinceridad brusca hace más daño que bien, qué papel tienen los límites personales en una relación sana, y si las redes sociales han cambiado cómo mantenemos las amistades" }),

    SUMMARY("Resumen del Día 53", [
      "Estrategia de Writing: planificar 5 min → escribir siguiendo el esquema → revisar (conteo de palabras, respuesta exacta, gramática, conectores variados). Elige P2 por formato, no por tema.",
      "Vocabulario de las relaciones interpersonales. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 54", "Practica planificar (solo el esquema, sin escribir) 3 essays con temas distintos, cronometrando 5 min cada uno. Repasa el vocabulario de relaciones. Mañana: estrategia de Listening y Speaking."),
  ],
};

// ───────────────────────── DÍA 54 ─────────────────────────
const DAY54 = {
  title: "Día 54 — Estrategia: Listening y Speaking · La sostenibilidad urbana y la ciudad del futuro",
  description: "Técnica para las 4 partes del Listening (predicción, primera vs. segunda escucha, gestión de la letra que no oyes) y las 4 partes del Speaking (gestión del tiempo, estrategias de interacción en P3, cómo especular en P2). Vocabulario de la ciudad sostenible. Las 4 destrezas (formato C1).",
  pedagogy: {
    objective: "Dominar las técnicas específicas de cada parte del Listening y el Speaking bajo condiciones reales de examen.",
    summary: "Estrategia de Listening y Speaking; sostenibilidad urbana; Use of English P1–P8, Writing, Listening P1-P4, Speaking P1–P4.",
    commonMistakes: ["quedarse atascado/a en una palabra que no se oyó bien, perdiendo las siguientes respuestas.", "en Speaking P2, describir la foto en vez de compararla y especular.", "en Speaking P3, no dejar hablar al compañero/a (o, al contrario, no participar lo suficiente)."],
    reviewPrompts: ["¿Qué debes hacer si no oyes bien una palabra en el Listening?", "¿Qué es más importante en el Speaking P2: describir o comparar/especular?"],
  },
  items: [
    TEXT("🔁 Ayer, estrategia de Writing. Hoy: estrategia de LISTENING y SPEAKING — las últimas dos destrezas antes del repaso final. Vocabulario: la SOSTENIBILIDAD URBANA y la CIUDAD DEL FUTURO."),
    GRAMMAR("Estrategia — Listening y Speaking", `LISTENING (4 partes, se oye DOS veces, ~40 min):
· ANTES de cada audio: lee las preguntas/opciones en el tiempo dado — predice qué tipo de información necesitas (número, nombre, actitud...).
· PRIMERA escucha: responde lo que puedas con confianza; no te bloquees en lo que no oigas.
· SEGUNDA escucha: confirma y completa lo que falta — ahora sabes qué buscar exactamente.
· Si no oyes una palabra: sigue adelante. Una respuesta en blanco pierde el punto seguro; una palabra mal oída puede aproximarse igual.
SPEAKING (4 partes, 15 min en pareja):
· P1 (entrevista, 2min): respuestas de 3-4 frases con razón + ejemplo — ni una palabra, ni un monólogo.
· P2 (turno largo, ~1min): COMPARA (no describas) dos de las tres fotos y responde a la pregunta específica — usa "whereas", "this one seems to..." desde el primer segundo.
· P3 (tarea colaborativa, 3min): habla Y escucha — invita a tu compañero/a a opinar ("What do you think?"), negocia hacia una decisión conjunta sin monopolizar.
· P4 (discusión, 5min): generaliza y matiza con el examinador — respuestas desarrolladas, no de una frase.
⚠️ En P2 y P4, el examinador valora la FLUIDEZ y el RANGO gramatical/léxico tanto como la precisión — no te detengas a autocorregirte cada error menor.`),
    WARN("Errores típicos del hispanohablante (C1)", "· En Listening, no te quedes 'atascado/a' mentalmente en una palabra perdida — sigue escuchando o pierdes las siguientes 2-3 respuestas.\n· En Speaking P2, el error más común es DESCRIBIR cada foto en detalle en vez de COMPARARLAS y responder a la pregunta — dedica el 80% del tiempo a comparar/especular.\n· En Speaking P3, ni monopolices ni te quedes callado/a: el examinador evalúa tu capacidad de INTERACCIÓN, no solo tus opiniones individuales.\n· No traduzcas mentalmente del español durante el Speaking — te hace perder fluidez; practica pensar directamente en inglés."),
    grammarEx("Use of English — Práctica de estrategia (Listening y Speaking)", "Aplica la estrategia correcta.", [
      mc("¿Cuándo deberías leer las preguntas del Listening?", ["Después de escuchar", "Antes de cada audio, en el tiempo dado", "No hace falta leerlas"], 1, "leer antes, para predecir qué buscar."),
      mc("Si no oyes bien una palabra durante el Listening, ¿qué deberías hacer?", ["Detenerte a pensar en ella", "Seguir escuchando; puede que la recuperes en la segunda escucha", "Dejar todo en blanco desde ese punto"], 1, "seguir adelante, no bloquearse."),
      mc("En Speaking P2, ¿qué es más importante: describir o comparar/especular?", ["Describir cada foto en detalle", "Comparar y especular, respondiendo a la pregunta", "Ninguna de las dos cosas"], 1, "comparar/especular es la tarea real, no describir."),
      mc("En Speaking P3, ¿qué evalúa principalmente el examinador?", ["Solo tus opiniones individuales", "Tu capacidad de interactuar (hablar Y escuchar)", "Quién habla más tiempo"], 1, "evalúa la interacción, no el monólogo."),
      mc("¿Cuántas frases debería tener una respuesta típica en Speaking P1?", ["Una palabra", "3-4 frases con razón y ejemplo", "Un monólogo de 2 minutos"], 1, "respuestas desarrolladas pero no monólogos."),
      mc("¿Qué valora el examinador tanto como la precisión gramatical en P2/P4?", ["La velocidad al hablar", "La fluidez y el rango léxico/gramatical", "El acento perfecto"], 1, "fluidez y rango, no solo precisión."),
    ]),
    GRAMMAR("Vocabulario del día — La sostenibilidad urbana (C1)", "Léxico avanzado de ciudades sostenibles."),
    deck("C1 S11D54 — Sostenibilidad urbana", [
      ["urban sprawl", "expansión urbana descontrolada", "Urban sprawl has swallowed vast areas of farmland.", "sustantivo", "ˈɜːbən sprɔːl"],
      ["green infrastructure", "infraestructura verde", "Green infrastructure includes parks and green roofs.", "sustantivo", "griːn ˈɪnfrəstrʌktʃə"],
      ["carbon-neutral", "neutro en carbono", "The city aims to become carbon-neutral by 2040.", "adjetivo", "ˈkɑːbən ˈnjuːtrəl"],
      ["gentrification", "gentrificación", "Gentrification has displaced many long-term residents.", "sustantivo", "ˌdʒentrɪfɪˈkeɪʃn"],
      ["public transit", "transporte público", "Investment in public transit reduced congestion.", "sustantivo", "ˈpʌblɪk ˈtrænzɪt"],
      ["walkability", "transitabilidad peatonal", "Walkability significantly improves residents' quality of life.", "sustantivo", "ˈwɔːkəbɪləti"],
      ["retrofit", "adaptar / modernizar (un edificio)", "Older buildings were retrofitted for energy efficiency.", "verbo", "ˈretrəʊfɪt"],
      ["food desert", "desierto alimentario", "Many low-income neighbourhoods remain food deserts.", "sustantivo", "fuːd ˈdezət"],
      ["zoning", "zonificación (urbanística)", "Restrictive zoning laws limit housing supply.", "sustantivo", "ˈzəʊnɪŋ"],
      ["resilient city", "ciudad resiliente", "Planners increasingly design for the resilient city.", "sustantivo", "rɪˈzɪliənt ˈsɪti"],
    ]),
    vocabEx("Vocabulario — La sostenibilidad urbana", "Elige la opción correcta.", [
      mc("Uncontrolled expansion of a city into surrounding land:", ["urban sprawl", "green infrastructure", "zoning"], 0, "urban sprawl."),
      mc("The process by which wealthier residents displace poorer ones in a renewed area:", ["gentrification", "walkability", "retrofit"], 0, "gentrification."),
      mc("An area with poor access to affordable, healthy food:", ["food desert", "urban sprawl", "zoning"], 0, "food desert."),
      mc("How easy and pleasant it is to walk around an area:", ["walkability", "gentrification", "zoning"], 0, "walkability."),
      mc("Legal regulation of how land in a city may be used:", ["zoning", "retrofit", "resilience"], 0, "zoning."),
      mc("To modify an older building for improved efficiency:", ["retrofit", "gentrify", "zone"], 0, "retrofit."),
    ]),

    ...uoe({
      p1: {
        title: "The fifteen-minute city",
        text: "Urban planners have increasingly (1)___ towards a model often described as the 'fifteen-minute city', in which most daily necessities — work, shops, schools, healthcare — lie within a short walk or cycle of every resident's home. Proponents (2)___ that this model considerably reduces reliance on private cars, cuts emissions, and fosters genuinely stronger local community connections. Critics, however, have (3)___ concerns that such planning, if implemented carelessly, risks accelerating gentrification in newly desirable, well-connected neighbourhoods, potentially pricing out precisely the long-term residents such planning ostensibly aims to serve. Given (4)___ contested this debate has become in several cities, planners increasingly emphasise that genuine success depends heavily on pairing physical redesign with deliberate affordable housing policy, rather than (5)___ redesign alone. What remains broadly undisputed is that car-dependent urban sprawl carries genuine, measurable costs that fifteen-minute planning at least (6)___ to seriously address.",
        q: [
          mc("(1)", ["gravitated", "moved", "shifted", "turned"], 0, "'have increasingly gravitated towards a model'."),
          mc("(2)", ["argue", "claim", "maintain", "insist"], 0, "'Proponents argue that'."),
          mc("(3)", ["raised", "lifted", "brought", "voiced"], 0, "'critics have raised concerns'."),
          mc("(4)", ["how", "so", "such", "that"], 0, "'Given how contested this debate has become'."),
          mc("(5)", ["physical", "spatial", "structural", "material"], 0, "'pairing… with… policy, rather than physical redesign alone'."),
          mc("(6)", ["attempts", "tries", "seeks", "aims"], 0, "'at least attempts to seriously address'."),
        ],
      },
      p2: {
        title: "Retrofitting the old city",
        text: "Many cities face a genuinely difficult structural challenge: (1)___ the majority of buildings that will stand in 2050 have already been built, meaningful progress towards carbon neutrality depends considerably less on new construction than (2)___ retrofitting existing older buildings for genuine energy efficiency. This retrofitting process, unfortunately, proves both expensive and logistically complicated, particularly (3)___ historic buildings whose architectural character regulations often protect from significant structural alteration. Cities that have made genuine progress typically combine targeted public subsidy (4)___ mandatory efficiency standards phased in gradually enough to avoid placing unreasonable financial burden on lower-income homeowners specifically. It is essential, urban sustainability experts increasingly (5)___, that retrofitting policy account explicitly for existing inequality, rather (6)___ simply mandating uniform standards that wealthier residents can afford considerably more easily than poorer ones.",
        q: [
          fb("(1)", ["given", "since", "because"], "'Given/Since/Because the majority of buildings… have already been built'."),
          fb("(2)", ["on"], "'depends… on retrofitting existing… buildings'."),
          fb("(3)", ["with", "for"], "'particularly with/for historic buildings'."),
          fb("(4)", ["with"], "'combine… subsidy with mandatory… standards'."),
          fb("(5)", ["argue", "insist", "maintain"], "'experts increasingly argue/insist/maintain'."),
          fb("(6)", ["than"], "'rather than simply mandating'."),
        ],
      },
      p3: {
        title: "The politics of green space",
        text: "Access to genuine green (1)___ within cities correlates strongly with measurable public health outcomes, yet remains distributed considerably more unevenly across neighbourhoods than most residents, and indeed many policymakers, generally (2)___. Wealthier neighbourhoods typically enjoy considerably more extensive parkland, tree canopy and green (3)___ than lower-income areas, a pattern researchers increasingly describe as a genuine environmental (4)___ issue rather than merely an aesthetic or recreational preference. Addressing this gap requires deliberate policy (5)___, given that market forces alone consistently direct green investment towards areas already commanding higher property values. Some cities have begun mandating minimum green space (6)___ specifically in historically underserved neighbourhoods, an approach early evidence suggests measurably improves both public health outcomes and long-term neighbourhood resilience.",
        items: [
          { root: "space", accepted: ["space"], hint: "'genuine green space' (sustantivo, no deriva)." },
          { root: "realise", accepted: ["realise", "realize"], hint: "'most residents… generally realise' (verbo)." },
          { root: "infrastructure", accepted: ["infrastructure"], hint: "'green infrastructure' (sustantivo, del mazo)." },
          { root: "just", accepted: ["justice"], hint: "'a genuine environmental justice issue' → justice." },
          { root: "intervene", accepted: ["intervention"], hint: "'requires deliberate policy intervention' → intervention." },
          { root: "provide", accepted: ["provision"], hint: "'minimum green space provision' → provision." },
        ],
      },
      p4: {
        title: "Transformaciones — vocabulario y estrategia (Listening/Speaking)",
        items: [
          { s1: "It's likely that gentrification displaced many long-term residents.", key: "MUST", s2: "Gentrification ___ have displaced many long-term residents.", accepted: ["must"], explanation: "deducción: must have (repaso S3)." },
          { s1: "The city recommended that new buildings be carbon-neutral.", key: "BE", s2: "The city recommended that new buildings ___ carbon-neutral.", accepted: ["be"], explanation: "subjuntivo: base form (repaso S8)." },
          { s1: "Because green space was unevenly distributed, health outcomes varied.", key: "GIVEN", s2: "___ that green space was unevenly distributed, health outcomes varied.", accepted: ["given"], explanation: "given that (causa, repaso S5)." },
          { s1: "Having retrofitted the building, the city cut its emissions significantly.", key: "RETROFITTED", s2: "Having ___ the building, the city cut its emissions significantly.", accepted: ["retrofitted"], explanation: "having + p.p. (repaso S9)." },
          { s1: "The impact of urban sprawl was so great that policy finally changed.", key: "SUCH", s2: "___ was the impact of urban sprawl that policy finally changed.", accepted: ["such"], explanation: "such… that (repaso S9)." },
        ],
      },
      p5: {
        title: "The neighbourhood that redesigned itself",
        text: "When residents of a struggling, traffic-choked urban neighbourhood were first invited to help redesign their own local streets, few among them genuinely expected the resulting process to change very much at all, having witnessed numerous previous municipal consultation exercises that had ultimately produced little beyond polite, well-intentioned promises and glossy planning documents that were subsequently quietly shelved.\n\nWhat made this particular initiative different, participants later reflected, was that residents were given genuine decision-making authority over a meaningful, dedicated budget, rather than merely being consulted, in the familiar, largely symbolic sense, about decisions municipal planners had already substantially made well in advance behind closed doors.\n\nThe process itself proved considerably messier, and honestly took much longer, than the tidy official timeline had originally, optimistically suggested. Residents disagreed sharply, sometimes quite heatedly, about priorities: some wanted more parking preserved for existing residents; others prioritised pedestrian space and dedicated cycling infrastructure over car access; still others focused primarily on badly needed green space and desperately overdue tree planting.\n\nRather than imposing a single top-down technical solution, as had traditionally been standard municipal practice, facilitators worked patiently through numerous rounds of genuine negotiation, gradually helping residents themselves identify workable, meaningful compromises rather than a solution simply handed down and imposed from above by outside experts.\n\nThe eventual redesign, once implemented after considerable and often difficult negotiation, reduced through-traffic substantially while preserving a genuinely reasonable, mutually acceptable amount of local parking. New, well-designed green infrastructure absorbed stormwater more effectively than before, while widened, safer pavements measurably improved walkability throughout the neighbourhood.\n\nWhat surprised planners considerably more than the specific physical outcome, however, was the durable, sustained community investment the participatory process itself had genuinely fostered. Residents who had helped design the changes proved considerably more likely to actively maintain and defend them afterwards than they would likely have been towards a comparable redesign simply imposed on them from above, however technically excellent that imposed redesign might otherwise have been.\n\nThe neighbourhood's experience has since prompted the wider city to consider adopting broadly similar genuinely participatory approaches for future infrastructure projects elsewhere, though planners readily acknowledge that the process demands considerably more time, patience and sustained facilitation than conventional top-down approaches ever typically required.",
        q: [
          mc("What did residents initially expect from the consultation?", ["Real, meaningful change.", "Little beyond polite promises, based on past experience.", "Immediate implementation.", "Financial compensation."], 1, "'few… genuinely expected the resulting process to change very much at all, having witnessed numerous previous… exercises that had… produced little'."),
          mc("What made this initiative genuinely different?", ["Nothing, really.", "Residents were given genuine decision-making authority over a real budget.", "It was faster than usual.", "Only experts were consulted."], 1, "'residents were given genuine decision-making authority over a meaningful, dedicated budget'."),
          mc("How did the process unfold?", ["Quickly and smoothly.", "Messier and longer than the official timeline suggested, with real disagreement.", "Without any disagreement.", "It was cancelled halfway through."], 1, "'The process itself proved considerably messier, and honestly took much longer… Residents disagreed sharply'."),
          mc("What role did facilitators play?", ["Imposing a single technical solution.", "Working through negotiation to help residents find workable compromises.", "Making all decisions themselves.", "Avoiding involvement entirely."], 1, "'facilitators worked patiently through numerous rounds of genuine negotiation, gradually helping residents… identify workable… compromises'."),
          mc("What surprised planners most about the outcome?", ["The physical redesign itself.", "The durable community investment the process fostered.", "How quickly it was completed.", "How little it cost."], 1, "'What surprised planners considerably more than the specific physical outcome… was the durable, sustained community investment'."),
          mc("What has the city decided to do as a result?", ["Abandon participatory approaches.", "Consider adopting similar approaches elsewhere, despite the extra time required.", "Reverse the neighbourhood's changes.", "Only use top-down approaches from now on."], 1, "'has since prompted the wider city to consider adopting broadly similar genuinely participatory approaches'."),
        ],
      },
      p6: {
        title: "Should cities restrict private car use in central areas?",
        intro: "Cuatro personas debaten si las ciudades deberían restringir el uso del coche privado en las zonas céntricas.",
        texts: {
          A: "NADIA: Absolutely, and the evidence from cities that have already done this seems genuinely compelling. Reduced congestion, cleaner air, more pedestrian space — the benefits appear to consistently outweigh the inconvenience to drivers, particularly once decent public transit alternatives are genuinely, reliably in place.",
          B: "TOM: I'd want to see much stronger public transit provision guaranteed before any serious restrictions are actually implemented. Restricting cars without genuinely adequate alternatives simply penalises people, often lower-income residents specifically, who currently have no other realistic, practical way to get around.",
          C: "PRIYA: What concerns me is the impact on small local businesses that depend on customers who currently arrive by car. Any serious restriction needs a carefully considered transition plan for affected businesses, not simply an abrupt policy change imposed with minimal advance warning.",
          D: "SAM: Honestly, I think the framing of 'restriction' misses the point somewhat. It's really about genuinely reallocating limited, valuable urban space more fairly and sensibly — space currently dominated by cars could serve considerably more people if used differently, for housing, genuine green space, or better public transit infrastructure instead.",
        },
        q: [
          mc("Who believes restrictions should happen, given compelling evidence from other cities?", ["A", "B", "C", "D"], 0, "Nadia: 'Absolutely, and the evidence from cities that have already done this seems genuinely compelling'."),
          mc("Whose view most directly QUALIFIES Nadia's, wanting transit guaranteed first?", ["A", "B", "C", "D"], 1, "Tom: 'I'd want to see much stronger public transit provision guaranteed before any serious restrictions'."),
          mc("Who worries specifically about the impact on small local businesses?", ["A", "B", "C", "D"], 2, "Priya: 'What concerns me is the impact on small local businesses'."),
          mc("Who reframes the issue as reallocating space rather than restriction?", ["A", "B", "C", "D"], 3, "Sam: 'the framing of 'restriction' misses the point somewhat. It's really about genuinely reallocating… space'."),
        ],
      },
      p7: {
        title: "What Speaking Part Two actually tests",
        text: "Speaking Part Two asks candidates to compare two of three photographs on a shared theme, then respond to a brief follow-up question, all within roughly one minute of largely uninterrupted speech. (1)___\n\nThe single most common mistake candidates make here is treating the task as pure description, carefully detailing each photograph's visible content in turn. (2)___ That approach, however fluent the actual language used, fundamentally misses what the task is genuinely designed to assess.\n\nExaminers are listening specifically for comparison and speculation, not simple description. (3)___ What genuinely matters is a candidate's ability to identify meaningful similarities and differences, then speculate thoughtfully about context, feeling or consequence beyond what the photograph literally, visibly shows.\n\nA reliable structural approach starts comparing from the very first sentence, rather than warming up with lengthy individual description before eventually, belatedly getting to genuine comparison. (4)___ Phrases like 'whereas' and 'this one seems to' should appear within the opening seconds, not arrive as an afterthought near the very end.\n\nSpeculation matters equally, and rewards genuinely tentative, hedged language over false, overconfident certainty about details a photograph cannot actually, definitively confirm. (5)___ 'It could well be that…' or 'presumably…' signal exactly the kind of thoughtful, appropriately uncertain engagement examiners are specifically listening for.\n\nCandidates who master this balance — brief orientation, sustained comparison, genuine speculation, and a clear, direct answer to the follow-up question — consistently outperform those who simply describe fluently but never quite engage with what the task is actually, specifically asking for. (6)___ Fluency alone was never really the whole point of this particular task.",
        options: [
          "That format shapes everything examiners are listening for.",  // A -> gap1
          "Description alone, however fluent, undersells what's actually required.", // B -> gap2
          "Comparison, not inventory, is the real currency of this task.", // C -> gap3
          "Comparison should open the response, not conclude it.",  // D -> gap4
          "Certainty, oddly, counts for less than thoughtful hedging here.", // E -> gap5
          "Task fulfilment, in the end, outweighs raw fluency alone.", // F -> gap6
          "No candidate has ever been asked to compare two photographs.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese formato define lo que buscan los examinadores."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la descripción sola no basta, por fluida que sea."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: comparar, no inventariar, es lo que de verdad se pide."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la comparación debe abrir la respuesta, no cerrarla."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la certeza cuenta menos que la especulación cuidada."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: cumplir la tarea pesa más que la fluidez sola."),
        ],
      },
      p8: {
        title: "Four candidates discuss their Listening and Speaking strategy",
        text: "Read what four C1 candidates say about their strategy for the Listening and Speaking papers.\n\nA) NADIA: In Listening, I always read every option during the given pause, even for parts with longer texts. That preparation lets me predict roughly what kind of word or number I'm actually listening for before the audio even starts.\n\nB) TOM: My Speaking Part Two used to be pure description, which I now realise was actually the wrong approach entirely. Now I force myself to say 'whereas' within the very first few seconds, which keeps me genuinely comparing rather than just describing each photo separately.\n\nC) PRIYA: In Speaking Part Three, I make a real, deliberate effort to invite my partner's opinion explicitly rather than just stating my own view and moving straight on. It noticeably, measurably improved my interaction score once I actually started doing this consistently.\n\nD) SAM: For Listening, I've learned not to panic when I miss a single word. I used to lose the next two or three answers completely just from dwelling on one missed word; now I simply let it go immediately and keep actively listening.\n",
        q: [
          mc("Who reads every option during the pause to predict what to listen for?", ["A", "B", "C", "D"], 0, "Nadia: 'I always read every option during the given pause… That preparation lets me predict'."),
          mc("Who now forces themselves to say 'whereas' within the first few seconds?", ["A", "B", "C", "D"], 1, "Tom: 'Now I force myself to say 'whereas' within the very first few seconds'."),
          mc("Who deliberately invites their partner's opinion in Part Three?", ["A", "B", "C", "D"], 2, "Priya: 'I make a real, deliberate effort to invite my partner's opinion explicitly'."),
          mc("Who learned not to panic when missing a single word?", ["A", "B", "C", "D"], 3, "Sam: 'I've learned not to panic when I miss a single word'."),
          mc("Who used to describe each photo separately instead of comparing?", ["A", "B", "C", "D"], 1, "Tom: 'My Speaking Part Two used to be pure description'."),
          mc("Whose interaction score improved once they started inviting their partner's opinion?", ["A", "B", "C", "D"], 2, "Priya: 'It noticeably, measurably improved my interaction score once I actually started doing this'."),
          mc("Who used to lose the next two or three answers after missing one word?", ["A", "B", "C", "D"], 3, "Sam: 'I used to lose the next two or three answers completely just from dwelling on one missed word'."),
          mc("Who predicts the kind of word or number needed before the audio starts?", ["A", "B", "C", "D"], 0, "Nadia: 'predict roughly what kind of word or number I'm actually listening for before the audio even starts'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre las ciudades se plantearon dos ideas:\n· cities should restrict private car use in central areas (deberían restringir el uso del coche)\n· restrictions unfairly penalise people without alternatives (las restricciones penalizan injustamente a quienes no tienen alternativas)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para tu ayuntamiento sobre cómo hacer tu barrio más sostenible: Introduction / Current situation / Recommendations.\n· ARTÍCULO: 'The city of the future' — describe cómo imaginas que será una ciudad sostenible dentro de 30 años.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco urbanistas hablando de un proyecto de sostenibilidad urbana (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué proyecto describen?): A a car-free zone · B a retrofitting programme · C a participatory street redesign · D a green space initiative · E an affordable housing scheme. TAREA DOS (¿cuál fue el mayor reto?): A community disagreement · B funding · C bureaucratic delay · D resistance from local businesses · E technical complexity.", "This is Part Four. You will hear five urban planners talking about a sustainability project. Speaker One: We turned the city centre into a genuine car-free zone, gradually, over about two years. The biggest challenge, honestly, was resistance from local businesses worried about losing customers who normally arrived by car. Speaker Two: Our retrofitting programme targeted older, poorly insulated buildings across the city. Funding was our biggest constraint throughout — retrofitting older buildings properly is expensive, and public budgets were genuinely limited. Speaker Three: We ran a participatory redesign of several residential streets, giving residents real decision-making power over the budget. The main challenge was community disagreement — residents had genuinely different, sometimes conflicting priorities that took considerable time to properly reconcile. Speaker Four: Our green space initiative added parks and tree cover specifically to underserved neighbourhoods. Bureaucratic delay was honestly the biggest obstacle; getting the necessary permits took far longer than anyone had originally anticipated. Speaker Five: We developed an affordable housing scheme integrated directly with public transit access. The technical complexity of the engineering involved was considerably greater than our initial planning had assumed.", [
      mc("Speaker 1 — TAREA UNO (proyecto)", ["A", "B", "C", "D", "E"], 0, "A: a car-free zone."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E"], 1, "B: a retrofitting programme."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E"], 2, "C: a participatory street redesign."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E"], 3, "D: a green space initiative."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E"], 4, "E: an affordable housing scheme."),
      mc("Speaker 1 — TAREA DOS (mayor reto)", ["A", "B", "C", "D", "E"], 3, "D: resistance from local businesses."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E"], 1, "B: funding."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E"], 0, "A: community disagreement."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E"], 2, "C: bureaucratic delay."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E"], 4, "E: technical complexity."),
    ]),

    ...speakingParts({ p1: "si tu ciudad o pueblo es sostenible y qué cambiarías", p2: "dos imágenes de la ciudad sostenible (una calle peatonal llena de vegetación y un edificio con paneles solares): compáralas y especula sobre las ventajas de cada una", p3: "qué debería priorizar tu ciudad con presupuesto limitado (transporte público, espacios verdes, vivienda asequible, edificios eficientes, calles peatonales): comentadlo y elegid lo más urgente", p4: "la sostenibilidad urbana: si las ciudades deberían restringir el coche privado, qué papel tienen los propios ciudadanos frente al gobierno local, y si la gentrificación es un precio inevitable de mejorar un barrio" }),

    SUMMARY("Resumen del Día 54", [
      "Estrategia de Listening: predecir antes, responder en la 1ª escucha, confirmar en la 2ª, seguir adelante si pierdes una palabra. Estrategia de Speaking: P1 desarrollada, P2 comparar/especular (no describir), P3 interactuar, P4 generalizar/matizar.",
      "Vocabulario de la sostenibilidad urbana. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 55", "Practica el Speaking P2 con dos fotos cualquiera, cronometrando 1 minuto: ¿comparaste desde el primer segundo? Mañana: repaso final de estrategias + mini-simulacro de la Semana 11."),
  ],
};

// ───────────────────────── DÍA 55 ─────────────────────────
const DAY55 = {
  title: "Día 55 — Repaso final de estrategias + mini-simulacro",
  description: "Consolidación de todas las estrategias de examen de la semana: gestión del tiempo en Use of English, planificación de Writing, técnica de Listening y Speaking. Las 4 destrezas (formato C1); Listening P1-P4 mixto. Al final, el mini-simulacro de la Semana 11.",
  pedagogy: {
    objective: "Consolidar en un único repaso todas las estrategias de examen practicadas esta semana, antes de la recta final.",
    summary: "Repaso final de estrategias; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué estrategia de la semana te ha resultado más útil?", "¿Con cuál necesitas más práctica antes del Simulacro Final?"],
  },
  items: [
    TEXT("🎯 Repaso final de la Semana 11 — todas las ESTRATEGIAS DE EXAMEN juntas. Ya tienes la gramática (Semanas 1-10) y ahora la TÉCNICA. Al final, el mini-simulacro. La semana que viene: LA RECTA FINAL con el Simulacro Final."),
    GRAMMAR("Repaso final de estrategias — Semana 11", `USE OF ENGLISH: P1-P4 (léxico/gramática) ≈30-35min — lee el texto entero en P1, piensa en estructura en P2, identifica la función gramatical en P3, cuenta palabras en P4. P5-P8 (lectura) ≈50min — preguntas antes que texto en P5, lee los 4 textos primero en P6, verifica conexión en ambas direcciones en P7, cuidado con el orden de preguntas en P8.
WRITING: planifica 5 min → escribe siguiendo el esquema → revisa conteo de palabras/respuesta exacta/gramática/conectores. Elige P2 por formato, no por tema.
LISTENING: lee las preguntas antes, responde en la 1ª escucha, confirma en la 2ª, no te bloquees si pierdes una palabra.
SPEAKING: P1 desarrollada (3-4 frases), P2 compara y especula desde el primer segundo (NO describas), P3 interactúa (habla Y escucha), P4 generaliza y matiza.
Con la gramática y la técnica ya dominadas, solo queda la RECTA FINAL: practicar en condiciones de examen real (Semana 12).`),
    grammarEx("Use of English — Repaso mixto de la Semana 11 (estrategia + gramática)", "Elige la opción correcta.", [
      mc("¿En qué orden deberías leer preguntas y texto en Reading P5?", ["Texto primero, preguntas después", "Preguntas primero, para saber qué buscar", "Da igual el orden"], 1, "preguntas antes que texto (estrategia P5)."),
      mc("It is essential that the report ___ published in full.", ["is", "be", "was"], 1, "subjuntivo: be (repaso S8)."),
      mc("¿Qué debes hacer en Speaking P2 desde el primer segundo?", ["Describir la primera foto en detalle", "Comparar ('whereas...') y especular", "Esperar a que hable el examinador"], 1, "comparar desde el primer segundo, no describir."),
      mc("___ decades ago, the building still attracts thousands of visitors.", ["Build", "Built", "Building"], 1, "participio pasado: Built (repaso S9)."),
      mc("Si no oyes bien una palabra en el Listening, ¿qué deberías hacer?", ["Detenerte y pensar en ella", "Seguir escuchando activamente", "Dejar todo en blanco"], 1, "seguir adelante, no bloquearse."),
      mc("Never ___ she felt so confident before an exam.", ["had", "did", "was"], 0, "inversión: had (repaso S2)."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 11", "Repasa los mazos (consumismo, educación, relaciones, sostenibilidad urbana)."),
    vocabEx("Vocabulario — Repaso de la Semana 11", "Elige la opción correcta.", [
      mc("An unplanned, spontaneous purchase:", ["impulse buy", "brand loyalty", "endorsement"], 0, "impulse buy."),
      mc("Continuing to learn throughout one's entire life:", ["lifelong learning", "rote learning", "credential"], 0, "lifelong learning."),
      mc("A good, harmonious relationship with someone:", ["rapport", "estrangement", "resentment"], 0, "rapport."),
      mc("Uncontrolled expansion of a city into surrounding land:", ["urban sprawl", "green infrastructure", "zoning"], 0, "urban sprawl."),
      mc("Easily deceived or persuaded:", ["gullible", "loyal", "disposable"], 0, "gullible."),
      mc("A qualification or certificate proving competence:", ["credential", "curriculum", "pedagogy"], 0, "credential."),
      mc("To tell someone a secret, trusting them:", ["confide", "reconcile", "estrange"], 0, "confide."),
      mc("The process by which wealthier residents displace poorer ones:", ["gentrification", "walkability", "retrofit"], 0, "gentrification."),
    ]),

    ...uoe({
      p1: {
        title: "What eleven weeks of strategy actually builds",
        text: "Grammatical knowledge alone, however comprehensive, rarely (1)___ into a strong exam performance without a corresponding, deliberately practised layer of genuine strategic technique. Having spent this particular week explicitly (2)___ on timing, planning and task-specific approach rather than acquiring further new grammatical content, learners now possess something considerably more complete than grammar knowledge (3)___. What separates strong performance from merely adequate performance, examiners consistently report, is rarely raw language knowledge (4)___; it is, just as often, the practical, well-rehearsed technique that (5)___ that knowledge to be reliably, efficiently deployed under genuine time pressure. Not only (6)___ strategic technique save valuable time, but it also measurably reduces the anxiety that so often undermines otherwise strong candidates on the actual day of their exam.",
        q: [
          mc("(1)", ["translates", "converts", "turns", "changes"], 0, "'rarely translates into a strong exam performance'."),
          mc("(2)", ["focusing", "concentrating", "centring", "working"], 0, "'explicitly focusing on timing'."),
          mc("(3)", ["alone", "only", "solely", "purely"], 0, "'considerably more complete than grammar knowledge alone'."),
          mc("(4)", ["alone", "solely", "purely", "only"], 0, "'rarely raw language knowledge alone'."),
          mc("(5)", ["allows", "lets", "enables", "permits"], 0, "'the… technique that allows that knowledge to be… deployed'."),
          mc("(6)", ["does", "is", "has", "did"], 0, "'Not only does strategic technique save… time' (inversión, presente)."),
        ],
      },
      p2: {
        title: "One week left before the final push",
        text: "With eleven weeks of intensive, structured preparation now (1)___ them, learners approaching the course's final stretch face a genuinely different kind of challenge than the one that (2)___ them at the very outset. Having already acquired both the grammatical range and the strategic technique the exam actually requires, what remains is primarily a matter of confidence and consistency under realistic, genuinely timed conditions. It is essential, at this particular stage, that practice (3)___ closely resemble actual examination conditions in every meaningful respect — timing, format, even the physical conditions (4)___ which the exam will actually be taken. Such is the value of this final, deliberately realistic simulation (5)___ many learners report a noticeable jump in genuine confidence after completing just one or two full, properly timed practice papers under conditions (6)___ closely mirror the real thing.",
        q: [
          fb("(1)", ["behind"], "'with eleven weeks… now behind them'."),
          fb("(2)", ["faced", "confronted"], "'the challenge that faced/confronted them at the outset'."),
          fb("(3)", ["closely"], "'that practice closely resemble' (ya en el hueco 3, revisar coherencia: aceptar 'closely')."),
          fb("(4)", ["under"], "'the physical conditions under which the exam… taken'."),
          fb("(5)", ["that"], "'Such is the value… that many learners report' (such… that)."),
          fb("(6)", ["that", "which"], "'conditions that/which closely mirror the real thing'."),
        ],
      },
      p3: {
        title: "From technique to instinct",
        text: "Deliberate strategic technique, when first learned, typically feels effortful and conscious, requiring active, moment-to-moment mental (1)___ that can, ironically, occasionally interfere with fluent, natural performance rather than genuinely supporting it. With sufficient repeated (2)___, however, this initially effortful technique gradually becomes something closer to genuine instinct, freeing up valuable cognitive (3)___ for the actual language task itself rather than for consciously managing strategy. This transition from effortful (4)___ to genuine automaticity represents, in many ways, the entire point of this particular week's deliberately technique-focused practice. Learners who have genuinely internalised these strategies by the course's final weeks typically report that good technique no longer feels like a separate, additional (5)___ at all; it simply becomes, quietly and almost invisibly, how they naturally approach the exam paper (6)___ any further conscious thought.",
        items: [
          { root: "effort", accepted: ["effort"], hint: "'active… mental effort' (sustantivo)." },
          { root: "practice", accepted: ["practice"], hint: "'with sufficient repeated practice' (sustantivo)." },
          { root: "capacity", accepted: ["capacity"], hint: "'freeing up valuable cognitive capacity' (sustantivo)." },
          { root: "conscious", accepted: ["conscious"], hint: "'this transition from effortful conscious… to automaticity' (adjetivo)." },
          { root: "task", accepted: ["task"], hint: "'a separate, additional task' (sustantivo)." },
          { root: "without", accepted: ["without"], hint: "'how they naturally approach the paper without any further conscious thought' (preposición)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 11",
        items: [
          { s1: "It's essential that practice closely resemble real exam conditions.", key: "RESEMBLE", s2: "It is essential that practice closely ___ real exam conditions.", accepted: ["resemble"], explanation: "subjuntivo: base form." },
          { s1: "The value of this simulation is so great that many report a jump in confidence.", key: "SUCH", s2: "___ is the value of this simulation that many report a jump in confidence.", accepted: ["such"], explanation: "such… that." },
          { s1: "Because grammar and technique are both in place, only confidence remains to build.", key: "GIVEN", s2: "___ that grammar and technique are both in place, only confidence remains to build.", accepted: ["given"], explanation: "given that (causa)." },
          { s1: "Having practised consistently, learners feel more confident under time pressure.", key: "PRACTISED", s2: "Having ___ consistently, learners feel more confident under time pressure.", accepted: ["practised", "practiced"], explanation: "having + p.p." },
          { s1: "Strategic technique not only saves time, but it also reduces anxiety.", key: "DOES", s2: "Not only ___ strategic technique save time, but it also reduces anxiety.", accepted: ["does"], explanation: "inversión: not only + does." },
        ],
      },
      p5: {
        title: "The candidate who changed her approach",
        text: "After failing to achieve her target grade on her first attempt at the exam, despite what she had genuinely believed at the time was thorough, comprehensive grammatical preparation, a candidate faced a difficult, uncomfortable question that many unsuccessful candidates confront in broadly similar circumstances: what, specifically, had actually gone wrong, given that her grammatical knowledge itself, subsequent analysis confirmed, had genuinely been more than adequate for the level required.\n\nHaving reviewed her exam performance in careful, painstaking detail with an experienced tutor afterwards, she gradually realised that her failure had stemmed considerably less from any genuine gaps in grammatical knowledge than from poor time management and inadequate task-specific strategy, precisely the kind of practical, technical issue her original preparation had almost entirely overlooked.\n\nShe had, she discovered upon honest reflection, spent nearly all her preparation time exclusively studying grammar rules and expanding vocabulary, while devoting almost no deliberate, structured time whatsoever to practising under genuinely timed conditions or developing systematic, reliable approaches to each specific task type the exam paper actually contained.\n\nHer second, considerably more strategic attempt at preparation looked notably different from her first. She began deliberately timing every single practice exercise, however brief, gradually building an accurate, reliable internal sense of pacing that pure grammar study alone had never actually provided her with previously.\n\nShe also developed, through careful trial and error over several weeks, a specific, reliable checklist for each individual task type: read questions before text in Reading Part Five, read all four texts before questions in Part Six, check grammatical connections in both directions for the gapped text task, plan for five focused minutes before writing either essay.\n\nPerhaps most significantly, she began practising exclusively under conditions that genuinely, realistically simulated the actual exam as closely as reasonably possible: same strict timing, no dictionary access whatsoever, no pausing recordings partway through, completing entire papers in one single, uninterrupted, realistic sitting rather than in the more comfortable, piecemeal fragments her original preparation had relied on almost exclusively.\n\nWhen she eventually sat the exam for a second time, several months later, she reported feeling considerably more confident, not primarily because her underlying grammatical knowledge had dramatically, fundamentally improved since her first attempt, but because she now possessed a genuinely reliable, well-rehearsed system for deploying that same existing knowledge efficiently and calmly under real, actual time pressure. She passed comfortably this second time, several points above her original required target grade.",
        q: [
          mc("What had the candidate genuinely believed about her first attempt's preparation?", ["It was clearly insufficient.", "It was thorough, comprehensive grammatical preparation.", "She hadn't prepared at all.", "She had focused only on strategy."], 1, "'despite what she had genuinely believed… was thorough, comprehensive grammatical preparation'."),
          mc("What did the review with her tutor reveal?", ["Her grammar knowledge was inadequate.", "Failure stemmed from poor time management and inadequate strategy, not grammar gaps.", "She should study even more grammar.", "The exam itself was unfair."], 1, "'her failure had stemmed considerably less from any genuine gaps in grammatical knowledge than from poor time management and inadequate task-specific strategy'."),
          mc("How had she spent her original preparation time?", ["Balanced between grammar and timed practice.", "Almost entirely on grammar and vocabulary, with little timed practice.", "Mostly on Speaking practice.", "She hadn't studied at all."], 1, "'spent nearly all her preparation time exclusively studying grammar rules and expanding vocabulary, while devoting almost no… time… to practising under… timed conditions'."),
          mc("What did she develop for her second attempt?", ["Nothing different.", "A specific checklist for each task type, built through trial and error.", "A new grammar textbook.", "A different exam board."], 1, "'she developed… a specific, reliable checklist for each individual task type'."),
          mc("How did she practise for her second attempt?", ["In comfortable, piecemeal fragments as before.", "Under conditions genuinely simulating the actual exam.", "Only theoretically, without timing.", "With a dictionary always available."], 1, "'she began practising exclusively under conditions that genuinely, realistically simulated the actual exam'."),
          mc("What was the outcome of her second attempt?", ["She failed again.", "She passed comfortably, several points above her target grade.", "She passed but only barely.", "She decided not to retake the exam."], 1, "'She passed comfortably this second time, several points above her original required target grade'."),
        ],
      },
      p6: {
        title: "Does exam technique matter as much as knowledge?",
        intro: "Cuatro estudiantes debaten si la técnica de examen importa tanto como el conocimiento del idioma.",
        texts: {
          A: "NADIA: In my direct experience, absolutely, yes. I knew the grammar reasonably well on my first attempt but still ran out of time badly; my second attempt succeeded specifically because I finally learned genuine time management, not because my actual grammar knowledge improved dramatically.",
          B: "TOM: I'm honestly a bit more sceptical about how much weight technique deserves. No amount of clever technique can genuinely compensate for real gaps in actual language knowledge; technique helps you deploy what you already know more efficiently, but it can't manufacture knowledge you simply don't yet have.",
          C: "PRIYA: What I'd say is that both matter, but at rather different stages of preparation. Early on, knowledge acquisition should clearly dominate your study time; closer to the actual exam itself, technique deserves considerably more relative attention and focused practice.",
          D: "SAM: My honest view is that technique matters most specifically for candidates whose knowledge is already genuinely borderline or close to the required standard. For candidates far below the required level, no amount of clever technique will realistically compensate for that underlying, more fundamental knowledge gap.",
        },
        q: [
          mc("Who believes technique made the crucial difference in their own experience?", ["A", "B", "C", "D"], 0, "Nadia: 'my second attempt succeeded specifically because I finally learned genuine time management'."),
          mc("Whose view most directly QUALIFIES Nadia's, sceptical technique can compensate for real knowledge gaps?", ["A", "B", "C", "D"], 1, "Tom: 'No amount of clever technique can genuinely compensate for real gaps in actual language knowledge'."),
          mc("Who argues both matter but at different stages of preparation?", ["A", "B", "C", "D"], 2, "Priya: 'both matter, but at rather different stages of preparation'."),
          mc("Who argues technique matters most for candidates near the required standard?", ["A", "B", "C", "D"], 3, "Sam: 'technique matters most specifically for candidates whose knowledge is already genuinely borderline'."),
        ],
      },
      p7: {
        title: "One week to go before the final stretch",
        text: "Having spent this past week focused specifically on strategy rather than new grammatical content, learners now stand at a genuinely distinctive point in their overall preparation. (1)___\n\nThe distinction between knowledge and technique, while genuinely useful analytically, can occasionally obscure just how closely intertwined these two things actually become in genuine, skilled exam performance. (2)___ Technique without underlying knowledge produces confident-sounding emptiness; knowledge without technique produces accurate but poorly deployed, inefficient performance.\n\nWhat this particular week has aimed to build is the connective tissue joining these two previously somewhat separate elements. (3)___ Knowing a grammatical structure and reliably, efficiently deploying it under genuine time pressure are related but meaningfully distinct skills.\n\nThe final week ahead serves a different, complementary purpose again. (4)___ Rather than introducing anything new, it consolidates everything already covered through realistic, fully timed practice under conditions that closely mirror the actual exam itself.\n\nThis final consolidation matters enormously, research on skill acquisition consistently suggests, because confidence under genuine pressure is itself a distinct, learnable skill, separate from either pure knowledge or technique considered in isolation. (5)___ Simulated pressure, repeatedly and deliberately practised, is what reliably builds that specific confidence.\n\nFor learners who have worked seriously through both the grammatical content of the first ten weeks and the strategic technique of this eleventh week, the final stretch ahead should feel considerably less daunting than it might otherwise, reasonably, have felt. (6)___ What remains is not new mountains to climb, but rather the final, careful polish on a structure that already, fundamentally, stands solid and complete.",
        options: [
          "That point deserves a moment of honest acknowledgment.",  // A -> gap1
          "In practice, the two rarely operate in genuine isolation.", // B -> gap2
          "That gap, small as it sounds, matters enormously in practice.", // C -> gap3
          "Its job is consolidation, not further acquisition.",  // D -> gap4
          "Nothing else quite substitutes for that particular kind of rehearsal.", // E -> gap5
          "The building itself is essentially already complete.",  // F -> gap6
          "No candidate has ever needed both knowledge and technique together.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese punto merece un reconocimiento honesto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: en la práctica, ambas cosas rara vez operan aisladas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa brecha importa enormemente en la práctica."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: su función es consolidar, no adquirir más."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nada sustituye ese tipo concreto de ensayo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el edificio ya está esencialmente completo."),
        ],
      },
      p8: {
        title: "Four learners reflect on the strategy week",
        text: "Read what four learners say about this week's focus on exam strategy rather than new grammar.\n\nA) NADIA: Honestly, this week felt like a genuine relief after ten weeks of new grammar. Finally applying everything I already know, rather than adding more to learn, felt considerably less overwhelming and, oddly, more genuinely productive too.\n\nB) TOM: The Use of English timing strategy was the single most useful thing for me this week, specifically. I used to run out of time on Part Eight constantly; now, with a clear time budget for every single part, I actually finish comfortably with minutes to spare.\n\nC) PRIYA: For me, honestly, it was the Writing planning technique that changed things most. I used to just start writing immediately with no clear plan and inevitably run out of ideas halfway through; now five minutes of upfront planning changes absolutely everything about how the essay turns out.\n\nD) SAM: The Speaking Part Two technique was genuinely eye-opening for me. I'd been describing photos in detail for months without even realising that wasn't actually what the task was asking for at all. Comparing from the first second feels strange still, but it clearly, measurably works better.\n",
        q: [
          mc("Who found this week a relief after ten weeks of new grammar?", ["A", "B", "C", "D"], 0, "Nadia: 'this week felt like a genuine relief after ten weeks of new grammar'."),
          mc("Who found the Use of English timing strategy most useful specifically?", ["A", "B", "C", "D"], 1, "Tom: 'The Use of English timing strategy was the single most useful thing for me this week'."),
          mc("Who found the Writing planning technique changed things most?", ["A", "B", "C", "D"], 2, "Priya: 'it was the Writing planning technique that changed things most'."),
          mc("Who found the Speaking Part Two technique genuinely eye-opening?", ["A", "B", "C", "D"], 3, "Sam: 'The Speaking Part Two technique was genuinely eye-opening for me'."),
          mc("Who used to run out of time on Part Eight constantly?", ["A", "B", "C", "D"], 1, "Tom: 'I used to run out of time on Part Eight constantly'."),
          mc("Who used to start writing with no plan and run out of ideas?", ["A", "B", "C", "D"], 2, "Priya: 'I used to just start writing immediately with no clear plan and inevitably run out of ideas halfway through'."),
          mc("Who had been describing photos in detail without realising it was wrong?", ["A", "B", "C", "D"], 3, "Sam: 'I'd been describing photos in detail for months without even realising that wasn't actually what the task was asking for'."),
          mc("Who now finishes the Use of English comfortably with minutes to spare?", ["A", "B", "C", "D"], 1, "Tom: 'now… I actually finish comfortably with minutes to spare'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la preparación de exámenes se plantearon dos ideas:\n· deep grammatical knowledge matters more than exam technique (el conocimiento gramatical importa más que la técnica)\n· strategic technique is what actually determines exam success (la técnica estratégica determina el éxito)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Aplica la estrategia de planificación (5 min) antes de escribir. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned about exam strategy' — reflexiona sobre las técnicas de esta semana.\n· CARTA/EMAIL a un/a futuro/a candidato/a del C1 dándole consejos de estrategia de examen.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing exam preparation. Woman: I used to run out of time on Part Eight constantly, honestly. Man: Same here, until I started budgeting time properly for each part individually. Extract Two. You hear two friends discussing Writing strategy. Man: Five minutes of planning changed everything for my essays. Woman: Interesting — I always just started writing immediately, without much of a plan at all. Extract Three. You hear two candidates discussing Speaking Part Two. Woman: I used to describe each photo in detail, which apparently wasn't actually what the task wanted. Man: Same mistake here — comparing from the first second felt strange initially, but it clearly works considerably better.", [
      mc("1. What did the woman used to struggle with?", ["Speaking.", "Running out of time on Part Eight.", "Writing essays."], 1, "'I used to run out of time on Part Eight constantly'."),
      mc("2. What helped the man with this issue?", ["Nothing helped.", "Budgeting time properly for each part.", "Skipping Part Eight entirely."], 1, "'until I started budgeting time properly for each part individually'."),
      mc("3. What changed everything for the man's essays?", ["Reading more books.", "Five minutes of planning.", "Writing faster."], 1, "'Five minutes of planning changed everything for my essays'."),
      mc("4. What did the woman used to do instead?", ["Plan for 10 minutes.", "Start writing immediately without much of a plan.", "Never write essays at all."], 1, "'I always just started writing immediately, without much of a plan at all'."),
      mc("5. What mistake did the woman used to make in Speaking Part Two?", ["Comparing too much.", "Describing each photo in detail.", "Speaking too quickly."], 1, "'I used to describe each photo in detail'."),
      mc("6. How does the man describe comparing from the first second?", ["Easy from the start.", "Strange initially, but works considerably better.", "Impossible to do."], 1, "'comparing from the first second felt strange initially, but it clearly works considerably better'."),
    ]),

    ...speakingParts({ p1: "qué estrategia de examen te ha resultado más útil de las que has practicado", p2: "dos imágenes de la preparación de exámenes (alguien estudiando con un cronómetro y dos personas practicando speaking juntas): compáralas y especula sobre qué está haciendo cada persona", p3: "qué es más importante en la recta final antes de un examen (repasar gramática, practicar en condiciones cronometradas, descansar bien, hacer simulacros completos, repasar vocabulario): comentadlo y elegid lo más eficaz", p4: "la preparación de exámenes: si la técnica importa tanto como el conocimiento, cómo se gestiona mejor la ansiedad antes de un examen importante, y qué papel tiene la práctica bajo presión de tiempo real" }),

    SUMMARY("Resumen de la Semana 11 (C1)", [
      "Dominas la estrategia de examen para las 8 partes del Reading & Use of English, el Writing, el Listening y el Speaking.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con temas de consumismo, educación, relaciones y sostenibilidad urbana.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: ¡LA RECTA FINAL! Práctica en condiciones de examen real y el SIMULACRO FINAL — ¡Día 60!",
    ]),
    INFO("Mini-simulacro de la Semana 11", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. ¡Última semana antes del Simulacro Final!"),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Estrategias de examen parte por parte · El consumismo, el aprendizaje permanente, las relaciones y la ciudad sostenible",
  description: "Semana de estrategia de examen (sin gramática nueva): técnica y gestión del tiempo para las Partes 1-4 y 5-8 del Reading & Use of English, planificación del Writing, y técnica de Listening y Speaking, con el hilo del consumismo, el aprendizaje permanente, las relaciones interpersonales y la sostenibilidad urbana. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
