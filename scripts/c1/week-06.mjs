/**
 * C1 Advanced · Semana 6 — "Las colocaciones e idioms de registro avanzado · La gastronomía y la cultura alimentaria".
 * Gramática/léxico: colocaciones de verbo+sustantivo formales (draw a conclusion,
 * pose a threat, exercise caution), idioms de registro académico/periodístico
 * (a far cry from, in the same vein, a double-edged sword), phrasal verbs de
 * registro formal (account for, stem from, give rise to), y binomios fijos
 * (by and large, part and parcel, first and foremost).
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

// ───────────────────────── DÍA 26 ─────────────────────────
const DAY26 = {
  title: "Día 26 — Colocaciones de verbo+sustantivo formales · La gastronomía y la globalización",
  description: "Colocaciones académicas/periodísticas (draw a conclusion, pose a threat, exercise caution, bear in mind, draw attention to). Vocabulario de gastronomía. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Usar colocaciones de verbo+sustantivo propias del registro formal/periodístico C1.",
    summary: "Colocaciones formales verbo+sustantivo; gastronomía y globalización; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["usar 'make' o 'do' genéricos en vez de la colocación precisa (make a conclusion ❌ → draw a conclusion ✅).", "olvidar el artículo en colocaciones fijas (pose A threat, exercise NO artículo con incontables).", "traducir literalmente del español en vez de usar la colocación inglesa естablecida."],
    reviewPrompts: ["¿Qué verbo va con 'a conclusion'? ¿Y con 'a threat'?", "¿'Exercise' + qué tipo de sustantivo (contable/incontable)?"],
  },
  items: [
    TEXT("👋 Semana 6 del C1. Hoy las COLOCACIONES DE VERBO+SUSTANTIVO formales: el vocabulario que distingue un nivel C1 auténtico de uno simplemente correcto. Vocabulario: la GASTRONOMÍA y la GLOBALIZACIÓN."),
    GRAMMAR("Colocaciones de verbo+sustantivo formales", `Las colocaciones son combinaciones FIJAS que un hablante nativo usa automáticamente; el error más común de nivel C1 es usar 'make/do/have' genéricos donde el inglés exige un verbo específico.
· DRAW: draw a conclusion, draw attention to, draw a comparison, draw a distinction.
· POSE: pose a threat, pose a question, pose a challenge, pose a risk.
· EXERCISE: exercise caution, exercise restraint, exercise judgement, exercise control.
· BEAR: bear in mind, bear responsibility, bear the cost, bear witness to.
· RAISE: raise a concern, raise awareness, raise the issue, raise doubts.
· STRIKE: strike a balance, strike a chord, strike a deal.
· REACH: reach a conclusion, reach a consensus, reach an agreement, reach a verdict.
· ADDRESS: address a problem, address a concern, address an issue (nunca 'solve a concern').
⚠️ Estas colocaciones son intercambiables SOLO parcialmente: 'draw a conclusion' y 'reach a conclusion' son ambas correctas y casi sinónimas, pero 'make a conclusion' suena claramente no nativo.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ make a conclusion → ✅ draw/reach a conclusion.\n· ❌ do a threat → ✅ pose a threat.\n· ❌ have caution → ✅ exercise caution.\n· ❌ solve a concern → ✅ address a concern.\n· Memoriza estas colocaciones como BLOQUES; no las construyas palabra por palabra desde el español."),
    grammarEx("Use of English — Colocaciones formales verbo+sustantivo", "Elige el verbo correcto para cada colocación.", [
      mc("The study allows us to ___ some tentative conclusions.", ["make", "draw", "do"], 1, "draw a conclusion."),
      mc("Climate change ___ a serious threat to coastal cities.", ["does", "poses", "makes"], 1, "pose a threat."),
      mc("Regulators must ___ caution when approving new drugs.", ["exercise", "make", "do"], 0, "exercise caution."),
      mc("Please ___ in mind that the deadline is tomorrow.", ["have", "keep", "bear"], 2, "bear in mind (también válido keep in mind, pero bear es más formal)."),
      mc("The report aims to ___ awareness of the issue.", ["do", "raise", "make"], 1, "raise awareness."),
      mc("Negotiators finally managed to ___ a deal after months of talks.", ["strike", "make", "do"], 0, "strike a deal."),
      mc("The committee needs to ___ this concern before proceeding.", ["solve", "address", "fix"], 1, "address a concern."),
    ]),
    GRAMMAR("Vocabulario del día — La gastronomía y la globalización (C1)", "Léxico avanzado de gastronomía."),
    deck("C1 S6D26 — Gastronomía y globalización", [
      ["culinary", "culinario/a", "It's a rich culinary tradition.", "adjetivo", "ˈkʌlɪnəri"],
      ["fusion cuisine", "cocina de fusión", "Fusion cuisine blends distinct traditions.", "sustantivo", "ˈfjuːʒn kwɪˈziːn"],
      ["authenticity", "autenticidad", "Diners often prize authenticity.", "sustantivo", "ˌɔːθenˈtɪsəti"],
      ["homogenise", "homogeneizar", "Globalisation can homogenise diets.", "verbo", "həˈmɒdʒənaɪz"],
      ["staple", "alimento básico", "Rice is a staple in many countries.", "sustantivo", "ˈsteɪpl"],
      ["palate", "paladar", "Her palate is remarkably refined.", "sustantivo", "ˈpælət"],
      ["indigenous", "indígena / autóctono/a", "They use indigenous ingredients.", "adjetivo", "ɪnˈdɪdʒənəs"],
      ["appropriation", "apropiación (cultural)", "Chefs are accused of appropriation.", "sustantivo", "əˌprəʊpriˈeɪʃn"],
      ["artisanal", "artesanal", "They sell artisanal bread.", "adjetivo", "ɑːˈtɪzənl"],
      ["provenance", "procedencia / origen", "Diners increasingly ask about provenance.", "sustantivo", "ˈprɒvənəns"],
    ]),
    vocabEx("Vocabulario — La gastronomía y la globalización", "Elige la opción correcta.", [
      mc("Relating to cooking and food is ___.", ["culinary", "indigenous", "artisanal"], 0, "culinary."),
      mc("Cooking that blends different culinary traditions is ___ cuisine.", ["fusion", "artisanal", "indigenous"], 0, "fusion."),
      mc("To make something more uniform, losing distinct differences, is to ___ it.", ["homogenise", "appropriate", "provenance"], 0, "homogenise."),
      mc("A basic, frequently eaten food is a ___.", ["staple", "palate", "provenance"], 0, "staple."),
      mc("The origin or source of something, e.g. food, is its ___.", ["provenance", "palate", "staple"], 0, "provenance."),
      mc("Made in a traditional, small-scale, skilled way is ___.", ["artisanal", "homogenised", "indigenous"], 0, "artisanal."),
    ]),

    ...uoe({
      p1: {
        title: "The last authentic meal",
        text: "Few debates within contemporary food culture generate quite as much (1)___ as the question of culinary 'authenticity'. Critics and diners alike routinely (2)___ a distinction between a dish prepared 'authentically', according to some presumed original recipe, and one that has been adapted, simplified or fused with other traditions to suit local tastes or available ingredients. This distinction, however intuitively appealing it may initially seem, poses a considerable (3)___ once examined closely: virtually every dish now considered a national 'classic' was itself, at some earlier point in its own long history, an adaptation, a fusion, or a response to whatever ingredients happened to be locally, practically available. Tomatoes, now central to countless supposedly 'traditional' Italian dishes, were entirely unknown in Europe before their introduction from the Americas centuries ago. To (4)___ a rigid line between 'authentic' and 'inauthentic' cuisine is therefore to freeze, quite arbitrarily, a single moment in an otherwise continuous, ever-evolving process of culinary adaptation and exchange. This is not to suggest that questions of cultural respect and proper attribution don't genuinely matter; they clearly do, and chefs who profit from another culture's culinary heritage while showing scant regard for its actual origins or originators deserve legitimate (5)___. But the underlying assumption that any cuisine possesses one single, fixed, 'authentic' form, rather than a living, constantly evolving tradition, deserves considerably more (6)___ than it typically receives in popular food writing and restaurant reviews. Food, like language itself, has never (7)___ still; demanding that it somehow should, in the name of an imagined authenticity, may (8)___ more about our own contemporary anxieties than about the actual, historically messy nature of culinary tradition itself.",
        q: [
          mc("(1)", ["controversy", "argument", "dispute", "debate"], 0, "'quite as much controversy'."),
          mc("(2)", ["make", "draw", "do", "have"], 1, "'routinely draw a distinction'."),
          mc("(3)", ["problem", "issue", "difficulty", "challenge"], 3, "'poses a considerable challenge'."),
          mc("(4)", ["draw", "make", "set", "put"], 0, "'To draw a rigid line'."),
          mc("(5)", ["criticism", "blame", "censure", "condemnation"], 0, "'deserve legitimate criticism'."),
          mc("(6)", ["scrutiny", "attention", "examination", "consideration"], 0, "'deserves considerably more scrutiny'."),
          mc("(7)", ["stood", "stayed", "remained", "kept"], 1, "'has never stayed still'."),
          mc("(8)", ["reveal", "show", "tell", "say"], 0, "'may reveal more about our own… anxieties'."),
        ],
      },
      p2: {
        title: "The homogenised palate",
        text: "Globalisation has brought (1)___ an unprecedented, genuinely remarkable proliferation of culinary choice within many wealthy cities: a single street may now offer Thai, Ethiopian, Peruvian and Korean food within a few short steps of (2)___ another. And yet, paradoxically, this same process of globalisation has arguably narrowed, rather than expanded, the diversity of what most people around the world actually, routinely eat on any given ordinary day. A relatively small handful of globally dominant crops — wheat, rice, maize, soybean — now account (3)___ the overwhelming majority of calories consumed worldwide, displacing thousands of traditional, regionally adapted crop varieties that had, over many centuries, been carefully bred for local growing conditions and distinctive local tastes. This homogenisation poses a genuine (4)___ that extends considerably beyond mere culinary variety. Relying so heavily on such a narrow genetic base of staple crops leaves global food systems more vulnerable (5)___ disease, pest outbreaks and the increasingly unpredictable effects of climate change than a more genuinely diverse agricultural system would reasonably be. Some agricultural researchers have accordingly begun raising (6)___ about this narrowing genetic base, urging renewed investment in preserving and actively cultivating traditional, locally adapted crop varieties before they disappear entirely, taking with them genetic diversity that might, one day, prove genuinely essential for adapting our fragile global food system (7)___ future, currently unforeseeable challenges. Bearing this genuine risk (8)___ mind, some countries have already begun establishing seed banks specifically designed to preserve agricultural biodiversity for future generations, treating it, quite rightly, as a genuinely irreplaceable global resource.",
        q: [
          fb("(1)", ["about"], "'brought about an unprecedented… proliferation'."),
          fb("(2)", ["one"], "'a few short steps of one another'."),
          fb("(3)", ["for"], "'account for the overwhelming majority'."),
          fb("(4)", ["risk", "danger"], "'poses a genuine risk'."),
          fb("(5)", ["to"], "'more vulnerable to disease'."),
          fb("(6)", ["concerns"], "'raising concerns about this'."),
          fb("(7)", ["to"], "'adapting… food system to future… challenges'."),
          fb("(8)", ["in"], "'Bearing this genuine risk in mind'."),
        ],
      },
      p3: {
        title: "Who owns a recipe?",
        text: "Questions of culinary ownership have grown increasingly (1)___ in an age of global media, viral social content and international restaurant chains that freely borrow, adapt and repackage dishes from cultures often quite (2)___ removed from their own commercial origins. When a chef from a wealthy country 'discovers' and subsequently profits handsomely from a dish that has, in fact, been prepared by a marginalised community for many generations, without any meaningful (3)___ or, still less, financial benefit flowing back to that original community, legitimate questions of exploitation and cultural appropriation quite reasonably arise. Defenders of culinary borrowing and adaptation counter that food, historically, has always travelled and (4)___ freely across cultures, and that treating recipes as though they were somehow rigidly 'owned' by any single culture risks freezing a naturally, inherently fluid, ever-evolving tradition into something artificially static and proprietary. Both positions, on close (5)___, contain genuine merit. Cultural exchange has indeed always shaped and enriched cuisine, throughout the whole of human history; but exchange conducted on such a wildly (6)___ playing field — where one party profits handsomely while the other receives essentially nothing — looks considerably less like genuine, mutual exchange and rather more like straightforward extraction. Navigating this genuinely difficult (7)___ requires more nuance than either simple, blanket condemnation of all culinary borrowing or, conversely, uncritical celebration of it as simply 'fusion' can adequately, honestly provide. What seems reasonably clear is that proper (8)___ — naming a dish's actual origins, crediting the specific communities and cultures that originally developed it — costs a chef genuinely very little, while meaning, quite possibly, a very great deal to those communities.",
        items: [
          { root: "contend", accepted: ["contentious"], hint: "'increasingly contentious' → contentious." },
          { root: "culture", accepted: ["culturally"], hint: "'quite culturally removed' → culturally." },
          { root: "acknowledge", accepted: ["acknowledgement"], hint: "'any meaningful acknowledgement' → acknowledgement." },
          { root: "adapt", accepted: ["adapted"], hint: "'has always travelled and adapted' → adapted." },
          { root: "examine", accepted: ["examination"], hint: "'on close examination' → examination." },
          { root: "equal", accepted: ["unequal"], hint: "'such a wildly unequal playing field' → unequal." },
          { root: "terrain", accepted: ["terrain"], hint: "'this genuinely difficult terrain' (sustantivo, algo metafórico)." },
          { root: "attribute", accepted: ["attribution"], hint: "'proper attribution' → attribution." },
        ],
      },
      p4: {
        title: "Transformaciones — colocaciones formales",
        items: [
          { s1: "The study allowed researchers to make a tentative conclusion.", key: "DRAW", s2: "The study allowed researchers to ___ a tentative conclusion.", accepted: ["draw"], explanation: "draw a conclusion." },
          { s1: "Climate change is a serious threat to food security.", key: "POSES", s2: "Climate change ___ a serious threat to food security.", accepted: ["poses"], explanation: "pose a threat." },
          { s1: "Chefs must be careful when using another culture's dishes.", key: "EXERCISE", s2: "Chefs must ___ caution when using another culture's dishes.", accepted: ["exercise"], explanation: "exercise caution." },
          { s1: "Remember that provenance matters to many diners.", key: "BEAR", s2: "___ in mind that provenance matters to many diners.", accepted: ["Bear"], explanation: "bear in mind." },
          { s1: "The article drew people's attention to unfair labour practices.", key: "ATTENTION", s2: "The article drew ___ to unfair labour practices.", accepted: ["attention"], explanation: "draw attention to." },
          { s1: "Negotiators finally reached an agreement on trade terms.", key: "REACHED", s2: "Negotiators finally ___ an agreement on trade terms.", accepted: ["reached"], explanation: "reach an agreement." },
        ],
      },
      p5: {
        title: "The chef who gave the recipe back",
        text: "When a celebrated chef first encountered a distinctive fermented condiment during an extended trip through a remote rural region, he recognised immediately, with the trained instincts of someone who had spent decades professionally refining his own palate, that he had stumbled upon something genuinely remarkable: a complex, deeply savoury flavour unlike anything he had previously encountered anywhere in his considerable international culinary experience. He spent several subsequent weeks with the local family who had taught him their traditional preparation method, painstakingly learning every detailed step of a process that had, he later discovered, been passed down carefully through countless generations within that same family alone.\n\nReturning to his own acclaimed restaurant, he began serving an adapted version of the condiment, crediting it prominently on his menu simply as inspired by 'traditional techniques' encountered during his travels abroad, without specifically naming the particular family, village or even the specific country where he had actually learned the recipe. The dish proved an immediate, considerable commercial success, drawing enthusiastic praise from critics and diners alike, and the chef, riding this wave of genuine acclaim, opened an entire subsequent restaurant chain substantially built around this single condiment and several closely related dishes.\n\nIt was only when a food writer, doing considerably more thorough background research than most restaurant reviewers typically bother to undertake, traced the condiment's actual specific origins that the chef's vague, deliberately unspecific attribution came under genuinely serious, sustained public scrutiny. The original family, it turned out, had received no acknowledgement whatsoever beyond the chef's characteristically vague reference to unspecified 'traditional techniques', and certainly no financial benefit at all from what had, by this point, become a genuinely lucrative international restaurant chain built substantially on their own carefully guarded family recipe.\n\nFaced with this considerable, mounting public pressure once the story eventually, inevitably broke more widely, the chef made a decision that surprised many in an industry not always particularly renowned for this kind of public accountability. Rather than simply issuing a brief, defensive public statement and hoping the whole uncomfortable controversy would quietly, eventually pass, he travelled back personally to the original village, publicly and specifically acknowledged the family's crucial contribution, and established an ongoing royalty arrangement that would direct a meaningful, agreed percentage of profits from every dish based on their traditional recipe back to the family and, more broadly, to their wider local community.\n\nHe also, notably, began the considerably more difficult, sustained practice of specifically naming, crediting and financially compensating other communities and specific individuals whose traditional culinary techniques he drew upon extensively in his subsequent professional work, rather than continuing to rely on the vague, deliberately unspecific language of general 'inspiration' that had previously allowed him, whether consciously or not, to avoid any meaningful accountability at all.\n\nHis eventual, public change of practice has since become something of a genuinely influential reference point in ongoing industry debates about culinary appropriation and proper attribution, cited by food writers, culinary ethicists and other chefs alike as one concrete, workable model for how culinary exchange might be conducted considerably more equitably in practice — acknowledging honestly that cuisines have always genuinely borrowed and adapted from one another, while ensuring that those who actually originated and carefully preserved specific traditions receive, at minimum, proper acknowledgement and, ideally, some fair, meaningful share of any resulting commercial and financial benefit.",
        q: [
          mc("What did the chef discover during his trip?", ["A new restaurant.", "A distinctive fermented condiment made by a local family.", "A cooking school.", "A food shortage."], 1, "'he had stumbled upon something genuinely remarkable: a complex, deeply savoury… condiment'."),
          mc("How did he initially credit the recipe on his menu?", ["By naming the family specifically.", "Vaguely, as 'traditional techniques' from his travels.", "He didn't mention it at all.", "He claimed he invented it."], 1, "'crediting it prominently on his menu simply as inspired by \"traditional techniques\"'."),
          mc("What did a food writer's research eventually reveal?", ["Nothing new.", "The original family had received no acknowledgement or financial benefit.", "The chef had invented the dish himself.", "The family had been well compensated."], 1, "'The original family… had received no acknowledgement whatsoever… and certainly no financial benefit at all'."),
          mc("What did the chef eventually do in response to the controversy?", ["Ignored it.", "Travelled back to the village and established a royalty arrangement.", "Closed his restaurants.", "Sued the food writer."], 1, "'he travelled back personally to the original village… established an ongoing royalty arrangement'."),
          mc("What broader practice did he adopt afterwards?", ["Nothing changed.", "Specifically naming and compensating communities whose techniques he used.", "He stopped using traditional recipes entirely.", "He kept crediting things vaguely."], 1, "'began the considerably more difficult, sustained practice of specifically naming, crediting and financially compensating other communities'."),
          mc("How is his eventual change of practice regarded now, according to the writer?", ["As insincere.", "As an influential model for more equitable culinary exchange.", "As irrelevant.", "As a failure."], 1, "'one concrete, workable model for how culinary exchange might be conducted considerably more equitably in practice'."),
        ],
      },
      p6: {
        title: "Is fusion cuisine a form of disrespect?",
        intro: "Cuatro personas debaten si la cocina de fusión es una forma de falta de respeto cultural.",
        texts: {
          A: "NADIA: I think fusion cuisine, done thoughtlessly, can genuinely trivialise deep culinary traditions, reducing centuries of careful, meaningful development to a trendy marketing gimmick. When a chef combines elements from two cultures purely for novelty's sake, with no real understanding of either underlying tradition, that strikes me as showing scant respect for both.",
          B: "TOM: I'd push back fairly strongly on that. Virtually every celebrated national cuisine we now consider 'classic' emerged historically through exactly this kind of fusion and adaptation over time. Condemning fusion outright, in principle, seems to misunderstand how food has always genuinely, historically evolved. The real question, surely, is whether it's done skilfully and respectfully, not whether fusion itself is inherently problematic.",
          C: "PRIYA: What matters most to me is whether the chef doing the fusing has actually taken the time to genuinely understand what they're borrowing and adapting. There's a real, meaningful difference between a chef who has spent years properly studying a tradition before thoughtfully reinterpreting it, and one who simply borrows a trendy ingredient with no deeper understanding whatsoever of its cultural context or significance.",
          D: "SAM: My honest concern is more structural than about individual chefs' intentions specifically. Fusion dishes created by chefs from wealthy, dominant cultures routinely get celebrated and command premium prices, while the same or very similar techniques, practised for generations by immigrant communities in their own home kitchens, get dismissed as merely 'ethnic food'. That double standard, to me, matters rather more than any single chef's individual, personal motives.",
        },
        q: [
          mc("Who thinks thoughtless fusion can trivialise deep culinary traditions?", ["A", "B", "C", "D"], 0, "Nadia: 'fusion cuisine, done thoughtlessly, can genuinely trivialise deep culinary traditions'."),
          mc("Whose view most directly CHALLENGES Nadia's, citing how cuisines historically evolved?", ["A", "B", "C", "D"], 1, "Tom: 'Virtually every celebrated national cuisine… emerged historically through exactly this kind of fusion'."),
          mc("Who focuses on whether the chef genuinely understands what they're borrowing?", ["A", "B", "C", "D"], 2, "Priya: 'whether the chef doing the fusing has actually taken the time to genuinely understand'."),
          mc("Who focuses on the structural double standard between chefs and immigrant communities?", ["A", "B", "C", "D"], 3, "Sam: 'Fusion dishes created by chefs from wealthy, dominant cultures routinely get celebrated… while the same… techniques… get dismissed'."),
        ],
      },
      p7: {
        title: "The vanishing local market",
        text: "For centuries, in cities and towns across the world, the local food market served as far more than a mere place of commerce. (1)___\n\nIt was, in practice, a genuine social institution: a place where neighbours met regularly, where local growers and producers could speak directly to the people who would actually eat their food, where recipes and cooking knowledge passed informally between generations and strangers alike. (2)___ That informal, largely unplanned social function mattered every bit as much as the produce itself.\n\nIn recent decades, this once-central institution has, in many places, quietly declined, gradually replaced by supermarkets offering greater convenience, wider selection and generally lower prices. (3)___ Few would seriously argue this transition brought no genuine benefits at all; it plainly did, for many ordinary shoppers.\n\nBut something has also, quietly and rather easily overlooked, been lost along the way. (4)___ The anonymous supermarket transaction, however efficient in narrow economic terms, replaces a relationship between producer and consumer with a considerably more impersonal, transactional exchange.\n\nSome cities have begun deliberately, consciously trying to revive traditional markets, recognising belatedly what had been allowed to quietly disappear. (5)___ Whether these deliberate revivals can genuinely recapture the market's full original social function, rather than merely its narrower commercial one, remains a matter of real, ongoing debate.\n\nWhat seems reasonably clear, whatever the eventual outcome, is that food has never been merely about efficient nutrition alone. (6)___ It has always, in every culture studied, been deeply, inextricably social too.",
        options: [
          "It functioned, in effect, as a hub of daily community life.",     // A -> gap 1
          "Conversation and commerce were never really separate there.",    // B -> gap 2
          "Convenience, though, came with its own quiet trade-offs.",       // C -> gap 3
          "A certain human connection has quietly slipped away too.",       // D -> gap 4
          "Some of these efforts have proved genuinely successful.",        // E -> gap 5
          "Eating has always carried a meaning beyond mere calories.",      // F -> gap 6
          "Local markets have never once served any social function.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: era un centro de vida comunitaria diaria."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: conversación y comercio no se separaban."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la conveniencia tuvo su propio coste."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: se perdió también una conexión humana."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: algunos esfuerzos han tenido éxito."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: comer siempre ha significado más que calorías."),
        ],
      },
      p8: {
        title: "Four people discuss their relationship with food and tradition",
        text: "Read what four people say about their relationship with food, tradition and cooking.\n\nA) NADIA: My grandmother taught me our family's traditional recipes before she passed away, and I've made it something of a personal mission to teach them properly to my own children now. Bearing in mind how much of my own cultural identity is genuinely bound up in these specific dishes, I refuse to let them simply disappear with my own generation.\n\nB) TOM: I run a small restaurant, and I regularly draw inspiration from cuisines quite different from my own cultural background. I try hard to research properly, credit sources honestly wherever I reasonably can, and pay fair prices to my suppliers, but I'll be honest — I still sometimes genuinely worry about whether I'm getting the whole complicated balance right.\n\nC) PRIYA: I grew up eating quite different food at home compared with what my friends at school ate, and for years, frankly, I felt embarrassed by it rather than proud. It took me a long time, well into adulthood, to properly appreciate what I'd actually been given, and I now cook those exact same dishes for my own friends with real, genuine pride.\n\nD) SAM: I've become increasingly fascinated by food that's genuinely disappearing — traditional crop varieties, regional dishes that only a handful of elderly people in remote areas still even remember how to properly prepare. I've started documenting recipes before they're lost entirely, bearing in mind that once that knowledge is truly gone, it's essentially gone for good.\n",
        q: [
          mc("Who was taught family recipes by their grandmother before she passed away?", ["A", "B", "C", "D"], 0, "Nadia: 'My grandmother taught me our family's traditional recipes before she passed away'."),
          mc("Who runs a restaurant and worries about getting cultural balance right?", ["A", "B", "C", "D"], 1, "Tom: 'I still sometimes genuinely worry about whether I'm getting the whole complicated balance right'."),
          mc("Who used to feel embarrassed by the food they ate at home?", ["A", "B", "C", "D"], 2, "Priya: 'for years, frankly, I felt embarrassed by it rather than proud'."),
          mc("Who documents disappearing recipes before the knowledge is lost?", ["A", "B", "C", "D"], 3, "Sam: 'I've started documenting recipes before they're lost entirely'."),
          mc("Who refuses to let family dishes disappear with their own generation?", ["A", "B", "C", "D"], 0, "Nadia: 'I refuse to let them simply disappear with my own generation'."),
          mc("Who tries to research and credit sources honestly?", ["A", "B", "C", "D"], 1, "Tom: 'I try hard to research properly, credit sources honestly'."),
          mc("Who now cooks their traditional dishes for friends with genuine pride?", ["A", "B", "C", "D"], 2, "Priya: 'I now cook those exact same dishes for my own friends with real, genuine pride'."),
          mc("Who is fascinated by traditional crop varieties and regional dishes?", ["A", "B", "C", "D"], 3, "Sam: 'I've become increasingly fascinated by food that's genuinely disappearing'."),
          mc("Who feels their cultural identity is bound up in specific dishes?", ["A", "B", "C", "D"], 0, "Nadia: 'how much of my own cultural identity is genuinely bound up in these specific dishes'."),
          mc("Who says once traditional knowledge is gone, it's gone for good?", ["A", "B", "C", "D"], 3, "Sam: 'once that knowledge is truly gone, it's essentially gone for good'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la gastronomía se plantearon dos ideas:\n· chefs should be free to reinterpret any cuisine creatively (los chefs deberían poder reinterpretar cualquier cocina)\n· using another culture's food without credit is a form of exploitation (usarla sin reconocimiento es explotación)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS colocaciones formales de verbo+sustantivo (draw a conclusion, pose a threat, exercise caution…). Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· RESEÑA de un restaurante o plato que combine tradiciones culinarias: descríbelo y valóralo.\n· ARTÍCULO: 'A dish that means something to me' — cuenta la historia de un plato importante en tu vida o cultura.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two chefs discussing a menu. Woman: The critics drew a clear distinction between our fusion dishes and the more traditional ones. Man: Fair enough, but I think we struck a decent balance overall. Extract Two. You hear a food writer talking about globalisation. Woman: Global supply chains have raised real concerns about how few crop varieties we now actually rely on. Man: It does pose a genuine risk, doesn't it, if one crop fails everywhere at once. Extract Three. You hear two friends discussing a family recipe. Man: My grandmother always exercised real care over the exact proportions — she'd never write them down. Woman: That's such a shame, in a way. Bearing that in mind, have you tried to document it properly yourself?", [
      mc("1. What did critics do regarding the menu?", ["Praised everything equally.", "Drew a clear distinction between fusion and traditional dishes.", "Ignored the fusion dishes."], 1, "'drew a clear distinction between our fusion dishes and the more traditional ones'."),
      mc("2. How does the man feel about the overall balance?", ["Unhappy.", "They struck a decent balance.", "It needs more fusion."], 1, "'I think we struck a decent balance overall'."),
      mc("3. What has global supply chains raised concerns about?", ["Prices only.", "How few crop varieties we now rely on.", "Transport speed."], 1, "'raised real concerns about how few crop varieties we now actually rely on'."),
      mc("4. What risk does the man mention?", ["No risk.", "A crop failing everywhere at once.", "Rising prices only."], 1, "'if one crop fails everywhere at once'."),
      mc("5. What did the grandmother exercise care over?", ["Nothing specific.", "The exact proportions of the recipe.", "The cooking time only."], 1, "'exercised real care over the exact proportions'."),
      mc("6. What does the woman suggest?", ["Forgetting the recipe.", "Documenting the recipe properly.", "Changing the recipe."], 1, "'have you tried to document it properly yourself?'"),
    ]),

    ...speakingParts({ p1: "qué papel tiene la comida en tu cultura y si te gusta probar cocinas de otros países", p2: "dos imágenes de la gastronomía (un mercado local tradicional y un restaurante de comida rápida internacional): compáralas y especula sobre lo que representan", p3: "qué debería guiar la cocina de fusión (el respeto cultural, la creatividad, el reconocimiento de los orígenes, el beneficio justo para las comunidades, la calidad): comentadlo y elegid lo más importante", p4: "la gastronomía y la globalización: si existe una cocina 'auténtica', si la fusión culinaria es una forma de falta de respeto y cómo debería tratarse la propiedad de las recetas tradicionales" }),

    SUMMARY("Resumen del Día 26", [
      "Colocaciones formales de verbo+sustantivo: draw a conclusion/attention/distinction, pose a threat/question/risk, exercise caution/restraint, bear in mind/responsibility, raise a concern/awareness, strike a balance/deal, reach a conclusion/agreement, address a concern.",
      "Nunca 'make/do' genéricos donde el inglés formal exige la colocación precisa.",
      "Vocabulario de gastronomía. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 27", "Escribe 8 frases usando colocaciones formales de verbo+sustantivo. Repasa las flashcards. Mañana: idioms de registro académico/periodístico."),
  ],
};

// ───────────────────────── DÍA 27 ─────────────────────────
const DAY27 = {
  title: "Día 27 — Idioms de registro académico y periodístico · El deporte y la competición",
  description: "Idioms formales/periodísticos (a far cry from, a double-edged sword, in the same vein, the tip of the iceberg, a far cry, an uphill battle). Vocabulario de deporte y competición. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Usar idioms propios del registro periodístico/académico para dar color y precisión al discurso formal.",
    summary: "Idioms de registro académico/periodístico; deporte y competición; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["usar idioms coloquiales (piece of cake) en un ensayo formal en vez de estos idioms 'elevados'.", "mal uso de la estructura fija (a far cry FROM, no 'a far cry OF').", "sobreusar idioms hasta sonar artificial — un par por texto basta."],
    reviewPrompts: ["¿Qué significa 'a double-edged sword'?", "¿Cómo usarías 'the tip of the iceberg' en un ensayo?"],
  },
  items: [
    TEXT("🔁 Ayer, las colocaciones formales. Hoy los IDIOMS DE REGISTRO ACADÉMICO Y PERIODÍSTICO: expresiones 'elevadas' que dan color sin sonar coloquiales. Vocabulario: el DEPORTE y la COMPETICIÓN."),
    GRAMMAR("Idioms de registro académico y periodístico", `Estos idioms son frecuentes en Reading (P5-P8) y aportan MATIZ y color al Writing/Speaking sin sonar coloquiales, a diferencia de idioms como 'piece of cake' (más informal).
· A DOUBLE-EDGED SWORD (ventajas y desventajas a la vez): Social media is a double-edged sword for young athletes.
· A FAR CRY FROM (muy diferente de, decepcionante comparado con): The reality was a far cry from what was promised.
· IN THE SAME VEIN (de forma similar, siguiendo la misma idea): In the same vein, critics have questioned the funding model.
· THE TIP OF THE ICEBERG (solo una pequeña parte visible de un problema mayor): These scandals are merely the tip of the iceberg.
· AN UPHILL BATTLE/STRUGGLE (una lucha muy difícil): Reforming the system remains an uphill battle.
· A WATERSHED MOMENT (un momento decisivo/de cambio radical): The scandal marked a watershed moment for the sport.
· TO ADD FUEL TO THE FIRE (empeorar una situación ya tensa): The comments only added fuel to the fire.
· A SILVER LINING (un aspecto positivo dentro de algo negativo): Every cloud has a silver lining, as the saying goes.
⚠️ Estos idioms funcionan mejor con MODERACIÓN: uno o dos por texto dan color; usar demasiados suena artificial y forzado.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ a far cry OF → ✅ a far cry FROM.\n· ❌ the tip of an iceberg (sin 'the') → ✅ THE tip of THE iceberg.\n· No mezcles idioms coloquiales (piece of cake) con estos de registro elevado en el mismo texto formal.\n· 'a double-edged sword' se usa para algo con ventajas Y desventajas simultáneas, no simplemente 'malo'."),
    grammarEx("Use of English — Idioms de registro académico/periodístico", "Elige el idiom correcto para cada contexto.", [
      mc("Social media fame can be ___ for young athletes — visibility, but also relentless pressure.", ["a piece of cake", "a double-edged sword", "a far cry"], 1, "a double-edged sword (ventajas y desventajas)."),
      mc("The team's actual performance was ___ what fans had been promised.", ["a far cry from", "the tip of the iceberg", "a watershed moment"], 0, "a far cry from (muy diferente, decepcionante)."),
      mc("These doping cases are merely ___ of a much larger problem.", ["a double-edged sword", "the tip of the iceberg", "an uphill battle"], 1, "the tip of the iceberg."),
      mc("Reforming the sport's governance remains ___ .", ["an uphill battle", "a silver lining", "in the same vein"], 0, "an uphill battle (lucha difícil)."),
      mc("The scandal marked ___ for the entire sport's reputation.", ["a watershed moment", "a piece of cake", "the tip of the iceberg"], 0, "a watershed moment (momento decisivo)."),
      mc("His careless comments only ___ to an already tense situation.", ["added fuel", "struck a balance", "drew attention"], 0, "added fuel to the fire."),
      mc("There is, at least, ___ to this disappointing season: the young players gained valuable experience.", ["a silver lining", "an uphill battle", "a far cry"], 0, "a silver lining."),
    ]),
    GRAMMAR("Vocabulario del día — El deporte y la competición (C1)", "Léxico avanzado de deporte."),
    deck("C1 S6D27 — Deporte y competición", [
      ["underdog", "el/la que parte como perdedor/a (deportivamente)", "The underdog won against all odds.", "sustantivo", "ˈʌndədɒɡ"],
      ["doping", "dopaje", "The doping scandal shocked fans.", "sustantivo", "ˈdəʊpɪŋ"],
      ["endorsement", "patrocinio / respaldo publicitario", "She signed a lucrative endorsement deal.", "sustantivo", "ɪnˈdɔːsmənt"],
      ["resilience", "resiliencia (deportiva)", "His resilience after injury was remarkable.", "sustantivo", "rɪˈzɪliəns"],
      ["governing body", "organismo rector (deportivo)", "The governing body launched an inquiry.", "sustantivo", "ˈɡʌvənɪŋ ˈbɒdi"],
      ["commercialisation", "comercialización", "Commercialisation has transformed the sport.", "sustantivo", "kəˌmɜːʃəlaɪˈzeɪʃn"],
      ["meritocratic", "meritocrático/a", "Sport is often praised as meritocratic.", "adjetivo", "ˌmerɪtəˈkrætɪk"],
      ["stamina", "resistencia (física)", "Marathon running demands real stamina.", "sustantivo", "ˈstæmɪnə"],
      ["scrutiny", "escrutinio", "Athletes face intense public scrutiny.", "sustantivo", "ˈskruːtəni"],
      ["burnout", "agotamiento (por sobreentrenamiento)", "Young athletes risk early burnout.", "sustantivo", "ˈbɜːnaʊt"],
    ]),
    vocabEx("Vocabulario — El deporte y la competición", "Elige la opción correcta.", [
      mc("A competitor not expected to win is the ___.", ["underdog", "governing body", "endorsement"], 0, "underdog."),
      mc("Using banned substances to enhance performance is ___.", ["doping", "resilience", "scrutiny"], 0, "doping."),
      mc("A paid promotional agreement with an athlete is an ___.", ["endorsement", "underdog", "governing body"], 0, "endorsement."),
      mc("The official organisation that regulates a sport is its ___.", ["governing body", "endorsement", "stamina"], 0, "governing body."),
      mc("The ability to recover quickly from setbacks is ___.", ["resilience", "commercialisation", "burnout"], 0, "resilience."),
      mc("Exhaustion from excessive training or competition pressure is ___.", ["burnout", "resilience", "scrutiny"], 0, "burnout."),
    ]),

    ...uoe({
      p1: {
        title: "The myth of the level playing field",
        text: "Sport is frequently (1)___ up as one of society's last genuinely meritocratic arenas — a domain where talent and hard work, and little else, supposedly determine who ultimately succeeds. This appealing image, however, is a far cry (2)___ the actual reality faced by most aspiring athletes. Behind every celebrated underdog story lies a far less visible, far less romantic truth: access to elite coaching, specialised equipment, and years of unpaid, financially supported training time is (3)___ available to those from wealthier backgrounds, creating advantages that talent alone, however considerable, frequently cannot fully overcome. The doping scandals that periodically (4)___ headlines are, in this sense, merely the tip of the iceberg — visible symptoms of a much broader, structurally embedded system of inequality that shapes who even gets the genuine opportunity to compete at the highest level in the first (5)___. This is not to suggest that talent and dedication don't matter; they plainly, obviously do. But treating sport as a simple, straightforward meritocracy, stripped entirely of its considerable structural inequalities, does a genuine disservice to those athletes who overcome (6)___ odds specifically because of, rather than despite, their more privileged starting circumstances. Reforming access to elite sport remains, by most honest accounts, a genuine uphill (7)___, given how deeply entrenched existing advantages have already become across most competitive disciplines. Nevertheless, incremental progress — scholarship programmes, more accessible grassroots facilities, subsidised equipment schemes — offers at least some (8)___ lining amid an otherwise sobering picture.",
        q: [
          mc("(1)", ["held", "put", "set", "brought"], 1, "'frequently put up as'."),
          mc("(2)", ["from", "of", "to", "off"], 0, "'a far cry from the actual reality'."),
          mc("(3)", ["far more", "considerably more", "much more", "significantly more"], 1, "'considerably more available'."),
          mc("(4)", ["make", "hit", "grab", "seize"], 1, "'periodically hit headlines'."),
          mc("(5)", ["place", "instance", "point", "case"], 0, "'in the first place'."),
          mc("(6)", ["lower", "lesser", "smaller", "easier"], 0, "'overcome lower odds' — 'lower odds' es la colocación natural."),
          mc("(7)", ["battle", "fight", "struggle", "task"], 0, "'a genuine uphill battle'."),
          mc("(8)", ["silver", "golden", "bright", "hopeful"], 0, "'some silver lining'."),
        ],
      },
      p2: {
        title: "The commercialisation dilemma",
        text: "The relationship between sport and commercial money is, by most honest accounts, a genuinely double-edged (1)___. On the one hand, the enormous sums now flowing (2)___ broadcasting rights, sponsorship and merchandising have funded improvements in facilities, coaching quality and, crucially, athlete welfare that earlier, less commercially developed eras of sport could scarcely have imagined. On the other hand, this same commercial logic has arguably distorted sport's original, purer competitive spirit, transforming athletes into brands and competitions into content optimised primarily (3)___ television scheduling and advertising revenue rather than sporting merit alone. Critics argue this shift has, in the same (4)___, eroded genuine fan connection to clubs and competitions increasingly owned and operated by distant, profit-focused corporate entities with comparatively little authentic attachment to any particular sport's actual history or tradition. Defenders counter that romanticising some imagined, purer amateur past ignores the very real financial precarity many athletes once genuinely faced before commercialisation arrived, and that today's professional structures, whatever their real flaws, at least allow talented athletes (5)___ modest backgrounds to actually earn a genuine, sustainable living from their sport. Neither position, on balance, captures the full, considerably more complicated picture. Commercialisation has brought real, tangible benefits alongside real, equally tangible costs, and pretending otherwise, in (6)___ direction, flattens a genuinely complex reality (7)___ a comfortingly simple narrative that neither honestly nor accurately reflects how professional sport actually, messily works today.",
        q: [
          fb("(1)", ["sword"], "'a genuinely double-edged sword'."),
          fb("(2)", ["from"], "'money now flowing from… rights'."),
          fb("(3)", ["for"], "'optimised primarily for television scheduling'."),
          fb("(4)", ["vein"], "'in the same vein'."),
          fb("(5)", ["from"], "'allow talented athletes from modest backgrounds'."),
          fb("(6)", ["either"], "'in either direction'."),
          fb("(7)", ["into"], "'flattens a… reality into a… narrative'."),
        ],
      },
      p3: {
        title: "The making of a champion",
        text: "What separates the athletes who reach the very (1)___ of their sport from the many thousands of similarly talented competitors who never quite make it? Sports scientists have spent decades attempting to (2)___ this question, and the accumulating answer proves considerably more (3)___ than most popular narratives about raw natural talent alone would suggest. Genetics undoubtedly play some role, providing certain physiological (4)___ that cannot easily be trained or acquired later. But the research increasingly points to psychological (5)___ — the capacity to recover from setback, to maintain sustained motivation across years of often gruelling, repetitive practice, to perform reliably under intense public pressure — as every bit as (6)___ as raw physical ability. Perhaps most (7)___ of all, researchers have found that the specific quality and timing of early coaching, rather than merely its sheer quantity, often proves genuinely decisive. Young athletes exposed too early to intense, results-focused specialised training frequently burn out well before reaching full physical maturity, while those permitted a more varied, playful early sporting (8)___ across multiple disciplines often go on to achieve considerably greater long-term success. Champions, in short, are made through a genuinely complex, still only partially understood interaction of genetics, psychology and circumstance — a far cry from the simple, comfortingly linear story of pure natural talent that popular sporting narratives so often, and rather misleadingly, prefer to tell.",
        items: [
          { root: "summit", accepted: ["summit"], hint: "'the very summit of their sport' (sustantivo)." },
          { root: "answer", accepted: ["answer"], hint: "'attempting to answer this question' (verbo)." },
          { root: "complex", accepted: ["complex"], hint: "'considerably more complex' (adjetivo)." },
          { root: "advantage", accepted: ["advantages"], hint: "'certain physiological advantages' → advantages." },
          { root: "resilient", accepted: ["resilience"], hint: "'psychological resilience' → resilience." },
          { root: "important", accepted: ["important"], hint: "'every bit as important' (adjetivo)." },
          { root: "surprise", accepted: ["surprisingly"], hint: "'perhaps most surprisingly of all' → surprisingly." },
          { root: "experience", accepted: ["experience"], hint: "'a more varied… sporting experience' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — idioms de registro académico",
        items: [
          { s1: "Fame brings both visibility and pressure at the same time.", key: "SWORD", s2: "Fame is ___ .", accepted: ["a double-edged sword"], explanation: "a double-edged sword." },
          { s1: "The team's performance was very different from what was promised.", key: "CRY", s2: "The team's performance was ___ what was promised.", accepted: ["a far cry from"], explanation: "a far cry from." },
          { s1: "These scandals reveal only a small part of a much bigger problem.", key: "TIP", s2: "These scandals are merely ___ of a much bigger problem.", accepted: ["the tip of the iceberg"], explanation: "the tip of the iceberg." },
          { s1: "Reforming the system will be extremely difficult.", key: "UPHILL", s2: "Reforming the system will be ___ .", accepted: ["an uphill battle"], explanation: "an uphill battle." },
          { s1: "The scandal marked a decisive turning point for the sport.", key: "WATERSHED", s2: "The scandal marked ___ for the sport.", accepted: ["a watershed moment"], explanation: "a watershed moment." },
          { s1: "There is one positive aspect to an otherwise disappointing season.", key: "SILVER", s2: "There is ___ to an otherwise disappointing season.", accepted: ["a silver lining"], explanation: "a silver lining." },
        ],
      },
      p5: {
        title: "The athlete who refused to quit",
        text: "After a catastrophic injury during competition that doctors initially warned might end her career permanently, and possibly even her ability to walk without assistance entirely, a decorated professional athlete faced a recovery process that her own medical team candidly described, without any attempt at false reassurance, as a genuine uphill battle from the very outset. The injury itself, sustained during what should have been a routine competitive event, was a far cry from anything she or her coaching team had ever previously encountered in her long, otherwise remarkably injury-free career.\n\nThe following eighteen months proved genuinely gruelling in ways that tested not merely her considerable physical resilience but her psychological fortitude every bit as thoroughly. Daily physiotherapy sessions that left her frequently in tears; repeated, demoralising setbacks that seemed, at several particularly difficult points, to add fuel to the fire of her own mounting private doubts about whether a genuine return to elite competition was actually realistic at all; and the ever-present, gnawing fear that her identity, so thoroughly and completely bound up for over a decade in her sporting career, might simply, permanently disappear alongside her physical capability.\n\nWhat kept her going, she later explained in candid interviews once her eventual comeback had become public knowledge, was not blind, unrealistic optimism but something closer to stubborn, clear-eyed determination combined with a willingness to genuinely, honestly reassess her own goals as circumstances stubbornly, repeatedly evolved. Early in her recovery, she had assumed, perhaps naively, that success would mean returning to exactly the same competitive level she had previously, effortlessly enjoyed. As recovery proved considerably slower and more genuinely uncertain than anyone had initially hoped, she gradually, deliberately redefined what a meaningful, personally satisfying comeback might actually, realistically look like for her specifically.\n\nHer eventual return to competition, when it finally came, was watched by an unusually large, emotionally invested audience, many of whom had followed her difficult, well-documented recovery journey closely through social media over the preceding many months. She did not win that particular comeback competition — she finished, by her own account, a solidly respectable but hardly spectacular seventh place — but the achievement of competing at all, at the elite level, after what her own doctors had initially warned might be a career-ending, permanently disabling injury, was itself, by any reasonable measure, extraordinary.\n\nHer story has since become something of a watershed moment in broader public conversations about athlete mental health and the genuine psychological cost of serious injury — a topic that professional sport, historically, has been notably reluctant to discuss with anything approaching the same seriousness and openness routinely, unhesitatingly afforded to purely physical injuries and their treatment. In the same vein, several other athletes, drawing directly on her own considerable public example, have since spoken more openly about their own private struggles with injury, self-doubt and the very real, often unspoken psychological burden of sustained, high-level competition. Her comeback, whatever its precise, modest final competitive placing, achieved something considerably more lasting and significant than any single medal or trophy plausibly ever could.",
        q: [
          mc("What did doctors initially warn about her injury?", ["It was minor.", "It might end her career permanently, or her ability to walk."], 1, "'doctors initially warned might end her career permanently, and possibly even her ability to walk'."),
          mc("What did the recovery process test?", ["Only physical resilience.", "Both her physical resilience and psychological fortitude.", "Neither.", "Only her finances."], 1, "'tested not merely her considerable physical resilience but her psychological fortitude every bit as thoroughly'."),
          mc("What kept her going through recovery?", ["Blind optimism.", "Stubborn determination combined with willingness to reassess her goals.", "Financial pressure.", "Her coach's orders."], 1, "'not blind, unrealistic optimism but something closer to stubborn, clear-eyed determination combined with a willingness to genuinely… reassess her own goals'."),
          mc("How did her comeback competition go?", ["She won.", "She finished a respectable but unspectacular seventh place.", "She failed to compete.", "She was disqualified."], 1, "'she finished, by her own account, a solidly respectable but hardly spectacular seventh place'."),
          mc("What has her story become a watershed moment for?", ["Nothing significant.", "Public conversations about athlete mental health and psychological cost of injury.", "Changes in competition rules.", "New training methods."], 1, "'a watershed moment in broader public conversations about athlete mental health'."),
          mc("What did her comeback ultimately achieve, according to the writer?", ["Nothing beyond the result.", "Something more lasting than any medal, by opening up conversation about mental health.", "A world record.", "Financial success only."], 1, "'achieved something considerably more lasting and significant than any single medal or trophy plausibly ever could'."),
        ],
      },
      p6: {
        title: "Should elite sport be more openly commercialised?",
        intro: "Cuatro personas debaten si el deporte de élite debería comercializarse más abiertamente.",
        texts: {
          A: "NADIA: I think commercialisation, on the whole, has been a genuine force for good. The money now flowing into sport has professionalised training, improved athlete safety standards, and allowed far more people to actually earn a real, sustainable living from sport than in any previous era. Nostalgia for some supposedly purer amateur past conveniently ignores how financially precarious that earlier era genuinely was for most athletes.",
          B: "TOM: I'd draw a sharper distinction than that between different types of commercial money. Sponsorship that funds genuine athlete development seems clearly beneficial to me; broadcasting deals that reshape entire competition schedules purely around advertising slots, at real cost to athlete welfare and recovery time, strike me as a far cry from anything resembling a healthy, sustainable relationship between sport and commerce.",
          C: "PRIYA: My concern is less about the money itself and more about who actually, ultimately controls it. When ownership sits with distant investment funds with essentially no real connection to a sport's history or its actual fan base, decisions get made that prioritise short-term commercial return over the sport's own long-term health and integrity. That, to me, poses the real underlying risk here, not commercial money as such.",
          D: "SAM: What I keep coming back to is that fans themselves are, in practice, deeply and genuinely divided on this whole question, and sports organisations mostly just follow whichever revenue stream proves most lucrative at any given moment, largely regardless of fan sentiment either way. Real change would require fans organising collectively and effectively, not simply hoping governing bodies will act against their own considerable financial self-interest.",
        },
        q: [
          mc("Who sees commercialisation as a genuine force for good overall?", ["A", "B", "C", "D"], 0, "Nadia: 'commercialisation, on the whole, has been a genuine force for good'."),
          mc("Whose view most directly QUALIFIES Nadia's, distinguishing beneficial from harmful commercial money?", ["A", "B", "C", "D"], 1, "Tom: 'I'd draw a sharper distinction… between different types of commercial money'."),
          mc("Who focuses on who ultimately controls the commercial money, not the money itself?", ["A", "B", "C", "D"], 2, "Priya: 'less about the money itself and more about who actually… controls it'."),
          mc("Who argues real change requires fans organising collectively?", ["A", "B", "C", "D"], 3, "Sam: 'Real change would require fans organising collectively and effectively'."),
        ],
      },
      p7: {
        title: "The price of watching your child compete",
        text: "Parents of promising young athletes face a genuinely difficult, often financially punishing set of choices long before their children ever reach anything resembling elite competition. (1)___\n\nSpecialised coaching, equipment, travel to competitions and, in many sports, membership fees for elite training programmes can easily run into many thousands of pounds annually, well before a young athlete has any realistic prospect of turning genuine talent into paid, sustainable employment. (2)___ This upfront financial burden falls disproportionately, and rather predictably, on families who can least easily afford it.\n\nThe result, researchers studying athletic talent pipelines have increasingly found, is a system that quietly filters out promising athletes based substantially on family wealth rather than raw ability alone. (3)___ Genuinely talented children from less affluent backgrounds frequently drop out, not from any lack of talent or dedication, but simply because their families cannot sustain the considerable ongoing financial investment required to continue.\n\nThis matters for reasons that extend well beyond individual fairness alone. (4)___ Sports lose access to a considerable portion of their potential talent pool, quietly narrowing rather than genuinely widening the field of eventual elite competitors.\n\nSome sporting organisations have begun introducing means-tested scholarship programmes specifically designed to address this structural imbalance. (5)___ Early evidence suggests these programmes can meaningfully help, though funding typically remains far too limited relative to the sheer, considerable scale of the underlying problem.\n\nWhatever the eventual, practical solution, the uncomfortable underlying reality deserves considerably more honest, sustained public acknowledgement than it typically receives. (6)___ Talent, on its own, has never once been sufficient; it has always required money behind it too.",
        options: [
          "The costs involved start accumulating remarkably early.",        // A -> gap 1
          "Costs, in other words, arrive well before any income does.",     // B -> gap 2
          "Wealth, quietly, becomes its own hidden selection criterion.",   // C -> gap 3
          "The whole sport is arguably poorer for the resulting loss.",     // D -> gap 4
          "Some of these initiatives show real, if modest, promise.",      // E -> gap 5
          "Money has always shaped who gets to compete at all.",           // F -> gap 6
          "No sport has ever required any financial investment at all.",    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: los costes empiezan pronto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los costes llegan antes que el ingreso."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la riqueza se vuelve criterio oculto."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el deporte es más pobre por esa pérdida."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: algunas iniciativas muestran promesa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el dinero siempre ha moldeado quién compite."),
        ],
      },
      p8: {
        title: "Four people discuss competition and sport",
        text: "Read what four people say about their own experience with competitive sport.\n\nA) NADIA: I competed at a genuinely high level as a teenager, and looking back now, I think the pressure was, in retrospect, a double-edged sword. It taught me real discipline that has genuinely served me well throughout my whole life since. But it also cost me a fairly normal, relaxed adolescence, and I'm honestly still not entirely sure the trade was worth it.\n\nB) TOM: I coach young athletes now, and my absolute priority is ensuring none of them burn out the way I once did myself. Early specialisation might produce short-term results, sure, but I've watched it become, quite consistently, an uphill battle for a young athlete's genuine long-term love of their sport, which matters more to me, honestly, than any early trophy.\n\nC) PRIYA: My own family genuinely couldn't afford the specialised coaching my talent, everyone agreed, clearly warranted. It's a far cry from complaining about it now, but I do sometimes wonder, honestly, what might have happened with better, more genuine financial support at the right critical time.\n\nD) SAM: I was always the underdog, and there's a particular, distinct satisfaction in that specific role I've genuinely never forgotten since. Nobody ever expected much of me at all, which somehow, paradoxically, took the pressure off completely and let me actually enjoy competing purely for its own sake, without the crushing weight of expectation.\n",
        q: [
          mc("Who competed at a high level as a teenager and calls the pressure a double-edged sword?", ["A", "B", "C", "D"], 0, "Nadia: 'the pressure was, in retrospect, a double-edged sword'."),
          mc("Who coaches young athletes and prioritises avoiding burnout?", ["A", "B", "C", "D"], 1, "Tom: 'I coach young athletes now, and my absolute priority is ensuring none of them burn out'."),
          mc("Whose family couldn't afford the specialised coaching their talent warranted?", ["A", "B", "C", "D"], 2, "Priya: 'My own family genuinely couldn't afford the specialised coaching my talent… warranted'."),
          mc("Who was always the underdog and found satisfaction in that role?", ["A", "B", "C", "D"], 3, "Sam: 'I was always the underdog, and there's a particular, distinct satisfaction in that'."),
          mc("Who says the pressure cost them a normal adolescence?", ["A", "B", "C", "D"], 0, "Nadia: 'it also cost me a fairly normal, relaxed adolescence'."),
          mc("Who sees early specialisation as an uphill battle against a young athlete's love of the sport?", ["A", "B", "C", "D"], 1, "Tom: 'it become, quite consistently, an uphill battle for a young athlete's genuine long-term love of their sport'."),
          mc("Who wonders what might have happened with better financial support?", ["A", "B", "C", "D"], 2, "Priya: 'I do sometimes wonder… what might have happened with better… financial support'."),
          mc("Who says low expectations took the pressure off and let them enjoy competing?", ["A", "B", "C", "D"], 3, "Sam: 'that… took the pressure off completely and let me actually enjoy competing purely for its own sake'."),
          mc("Who isn't entirely sure the trade-off of intense early training was worth it?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm honestly still not entirely sure the trade was worth it'."),
          mc("Who values a young athlete's long-term love of sport over early trophies?", ["A", "B", "C", "D"], 1, "Tom: 'which matters more to me, honestly, than any early trophy'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el deporte se plantearon dos ideas:\n· early specialisation is necessary to produce elite athletes (la especialización temprana es necesaria)\n· early specialisation harms young athletes' wellbeing (perjudica el bienestar de los jóvenes atletas)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS idioms de registro académico de la semana (a double-edged sword, an uphill battle, the tip of the iceberg…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What sport taught me' — reflexiona sobre una experiencia deportiva personal significativa.\n· INFORME para un club deportivo sobre cómo mejorar el acceso de niños de familias con pocos recursos: Introduction / Findings / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una psicóloga deportiva, la doctora Fenwick, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a sports psychologist called Doctor Fenwick giving a talk. Doctor Fenwick: Elite sport, for young athletes, is genuinely a double-edged sword. It builds extraordinary discipline and resilience, but the pressure can also be genuinely damaging if it isn't carefully, thoughtfully managed. My first point concerns identity: athletes whose entire sense of self is bound up purely in results are far more vulnerable to serious psychological crisis when injury or defeat inevitably comes, as it eventually does for absolutely everyone. Second, on burnout: pushing children too hard, too early, is a far cry from sound long-term athletic development; it produces short-term results at a very real long-term cost. Third, I want to address access. Talent alone has never been enough; money has always quietly shaped who actually gets to compete at the highest level, and that uncomfortable fact deserves more honest, open acknowledgement. My fourth point concerns comebacks after serious injury: the athletes who recover best psychologically are typically those who allow themselves to genuinely redefine success, rather than clinging rigidly to their previous exact standard. And finally, my main message: we need to talk about athlete mental health with the very same seriousness we already, quite rightly, afford to physical injury.", [
      fb("Elite sport for young athletes is genuinely a ___ sword.", ["double-edged"], "'a double-edged sword'."),
      fb("Athletes whose identity is bound up in results are more vulnerable to psychological ___.", ["crisis"], "'psychological crisis'."),
      fb("Pushing children too hard is a far cry from sound long-term ___.", ["development"], "'sound long-term… development'."),
      fb("This produces short-term results at a real long-term ___.", ["cost"], "'at a very real long-term cost'."),
      fb("___ alone has never been enough.", ["Talent"], "'Talent alone has never been enough'."),
      fb("Money has always quietly shaped who gets to ___.", ["compete"], "'who actually gets to compete'."),
      fb("Athletes who recover best allow themselves to redefine ___.", ["success"], "'genuinely redefine success'."),
      fb("We need to talk about athlete mental ___ with real seriousness.", ["health"], "'athlete mental health'."),
    ]),

    ...speakingParts({ p1: "qué papel tiene el deporte en tu vida y si has competido alguna vez", p2: "dos imágenes del deporte (un/a atleta joven entrenando intensamente en solitario y un equipo celebrando una victoria juntos): compáralas y especula sobre lo que sienten", p3: "qué debería priorizarse en el deporte juvenil (el bienestar psicológico, el desarrollo del talento, la diversión, la igualdad de acceso, la competitividad): comentadlo y elegid lo más importante", p4: "el deporte y la competición: si el deporte de élite es realmente meritocrático, si la comercialización ha perjudicado al deporte y cómo debería gestionarse la presión sobre los jóvenes atletas" }),

    SUMMARY("Resumen del Día 27", [
      "Idioms de registro académico/periodístico: a double-edged sword, a far cry from, in the same vein, the tip of the iceberg, an uphill battle, a watershed moment, add fuel to the fire, a silver lining.",
      "Úsalos con moderación (1-2 por texto) para dar color sin sonar artificial.",
      "Vocabulario de deporte y competición. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 28", "Escribe 6 frases usando idioms de registro académico. Repasa las flashcards. Mañana: phrasal verbs de registro formal."),
  ],
};

// ───────────────────────── DÍA 28 ─────────────────────────
const DAY28 = {
  title: "Día 28 — Phrasal verbs de registro formal · La música y la industria creativa",
  description: "Phrasal verbs formales/académicos (account for, stem from, give rise to, set out to, bring about, embark on). Vocabulario de música e industria creativa. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Usar phrasal verbs de registro formal/académico, distintos de los coloquiales de niveles anteriores.",
    summary: "Phrasal verbs formales; música e industria creativa; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["confundir 'account for' (explicar/representar un porcentaje) con 'account of' (relato).", "'give rise to' + sustantivo abstracto, no un objeto concreto cualquiera.", "usar phrasal verbs coloquiales (find out, get on) en un ensayo donde procede el formal."],
    reviewPrompts: ["¿Qué significa 'stem from'?", "¿Cómo usarías 'embark on' en una frase formal sobre un proyecto?"],
  },
  items: [
    TEXT("🔁 Ayer, los idioms académicos. Hoy los PHRASAL VERBS DE REGISTRO FORMAL: versiones 'elevadas' de phrasal verbs comunes, propias de Reading y Writing académico. Vocabulario: la MÚSICA y la INDUSTRIA CREATIVA."),
    GRAMMAR("Phrasal verbs de registro formal", `Muchos phrasal verbs tienen un equivalente de registro MÁS FORMAL, frecuente en Reading (P5-P8) y en el Writing académico del C1.
· ACCOUNT FOR (explicar la causa de algo / representar un porcentaje): Streaming now accounts for most music revenue. What accounts for this trend?
· STEM FROM (= derivar de, tener su origen en): The controversy stemmed from a single leaked email.
· GIVE RISE TO (= causar, dar lugar a, con sustantivo abstracto): The policy gave rise to widespread criticism.
· BRING ABOUT (= causar/provocar un cambio): The scandal brought about significant reforms.
· EMBARK ON/UPON (= emprender, iniciar algo ambicioso): The band embarked on an ambitious world tour.
· SET OUT TO (+ inf., = proponerse hacer algo con un objetivo claro): The documentary sets out to expose industry exploitation.
· HINGE ON (= depender crucialmente de): Success hinges on genuine audience engagement.
· CULMINATE IN (= terminar/desembocar en, como punto culminante): Years of work culminated in a sold-out world tour.
⚠️ Estos phrasal verbs formales son intercambiables con sus versiones informales SOLO en registro coloquial (stem from ≈ come from, pero 'come from' es más neutro/informal).`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ The problem stems of poor planning → ✅ stems FROM.\n· ❌ It gave rise a debate → ✅ gave rise TO a debate.\n· ❌ account of (para explicar causa) → ✅ account FOR.\n· 'embark on' es para proyectos AMBICIOSOS/nuevos; no lo uses para tareas triviales."),
    grammarEx("Use of English — Phrasal verbs de registro formal", "Elige el phrasal verb correcto.", [
      mc("Streaming now ___ over eighty percent of music industry revenue.", ["accounts for", "stems from", "gives rise to"], 0, "account for (representar un porcentaje)."),
      mc("The controversy ___ a single leaked internal email.", ["stemmed from", "embarked on", "hinged on"], 0, "stem from (origen)."),
      mc("The new streaming model has ___ serious concerns about fair artist pay.", ["given rise to", "accounted for", "culminated in"], 0, "give rise to + sustantivo abstracto."),
      mc("The scandal eventually ___ significant industry-wide reforms.", ["brought about", "stemmed from", "set out to"], 0, "bring about (causar un cambio)."),
      mc("The band ___ an ambitious, genuinely experimental new album.", ["embarked on", "accounted for", "hinged on"], 0, "embark on (emprender algo ambicioso)."),
      mc("The documentary ___ expose exploitative industry practices.", ["sets out to", "gives rise to", "accounts for"], 0, "set out to + inf."),
      mc("The project's ultimate success ___ genuine, sustained audience engagement.", ["hinges on", "stems from", "brings about"], 0, "hinge on (depender crucialmente de)."),
    ]),
    GRAMMAR("Vocabulario del día — La música y la industria creativa (C1)", "Léxico avanzado de música."),
    deck("C1 S6D28 — Música e industria creativa", [
      ["royalties", "regalías / derechos de autor", "Artists earn royalties from streams.", "sustantivo", "ˈrɔɪəltiz"],
      ["streaming", "streaming (reproducción en línea)", "Streaming has transformed the industry.", "sustantivo", "ˈstriːmɪŋ"],
      ["exploitative", "explotador/a (abusivo)", "Critics call the contracts exploitative.", "adjetivo", "ɪkˈsplɔɪtətɪv"],
      ["mainstream", "corriente principal / convencional", "The genre finally went mainstream.", "adjetivo/sustantivo", "ˈmeɪnstriːm"],
      ["niche", "nicho (mercado reducido)", "It appeals to a niche audience.", "sustantivo", "niːʃ"],
      ["curate", "curar / seleccionar (contenido)", "Playlists are algorithmically curated.", "verbo", "kjʊˈreɪt"],
      ["saturation", "saturación (de mercado)", "Market saturation makes success harder.", "sustantivo", "ˌsætʃəˈreɪʃn"],
      ["gatekeeper", "guardián/a (de acceso a una industria)", "Labels were once the only gatekeepers.", "sustantivo", "ˈɡeɪtkiːpə"],
      ["viral", "viral (contenido)", "The song went viral overnight.", "adjetivo", "ˈvaɪrəl"],
      ["monetise", "monetizar", "Artists struggle to monetise their work.", "verbo", "ˈmʌnətaɪz"],
    ]),
    vocabEx("Vocabulario — La música y la industria creativa", "Elige la opción correcta.", [
      mc("Payments made to creators for use of their work are ___.", ["royalties", "saturation", "mainstream"], 0, "royalties."),
      mc("Unfairly benefiting from someone's work is ___.", ["exploitative", "niche", "curated"], 0, "exploitative."),
      mc("A small, specialised market segment is a ___.", ["niche", "mainstream", "gatekeeper"], 0, "niche."),
      mc("A person or institution controlling access to an industry is a ___.", ["gatekeeper", "niche", "royalty"], 0, "gatekeeper."),
      mc("To carefully select and organise content is to ___ it.", ["curate", "monetise", "saturate"], 0, "curate."),
      mc("To turn something into a source of income is to ___ it.", ["monetise", "curate", "account for"], 0, "monetise."),
    ]),

    ...uoe({
      p1: {
        title: "Who really profits from a stream",
        text: "The shift from physical album sales to streaming has fundamentally transformed how musicians actually earn a living, and not, for the vast majority of working artists, (1)___ the better. Streaming now accounts (2)___ the overwhelming majority of recorded music revenue worldwide, yet the actual payment an individual artist receives per stream is often (3)___ small that it takes many hundreds of thousands of plays merely to earn what a single physical album sale once reliably provided. This troubling situation stems (4)___ a fundamental structural feature of how streaming royalties get calculated and subsequently distributed: rather than an artist receiving a fixed amount per play of their own specific music, the entire pool of subscriber revenue gets divided proportionally according to overall stream share, meaning the handful of globally dominant superstars capture a genuinely disproportionate (5)___ of total payouts, while the vast majority of working musicians receive payments too small to meaningfully sustain a career. This arrangement has given rise (6)___ growing, increasingly organised calls for royalty reform, with some artists and advocacy groups proposing alternative payment models that might more fairly distribute revenue according to which specific artists individual listeners actually, personally listen to, rather than simply pooling everything together. Whether streaming platforms, having built such (7)___ profitable businesses on the current arrangement, will ever willingly embark (8)___ meaningful reform without sustained external regulatory pressure remains, at this stage, a genuinely open question.",
        q: [
          mc("(1)", ["for", "to", "at", "in"], 0, "'not… for the better'."),
          mc("(2)", ["for", "to", "of", "in"], 0, "'accounts for the… majority'."),
          mc("(3)", ["so", "such", "very", "too"], 0, "'often so small that'."),
          mc("(4)", ["from", "of", "in", "to"], 0, "'stems from a fundamental… feature'."),
          mc("(5)", ["share", "part", "portion", "amount"], 0, "'a genuinely disproportionate share'."),
          mc("(6)", ["to", "for", "in", "of"], 0, "'given rise to growing… calls'."),
          mc("(7)", ["such", "so", "very", "quite"], 0, "'having built such… profitable businesses'."),
          mc("(8)", ["on", "in", "for", "at"], 0, "'embark on meaningful reform'."),
        ],
      },
      p2: {
        title: "The algorithm as gatekeeper",
        text: "For much of the twentieth century, record labels functioned (1)___ the primary gatekeepers of the music industry, deciding which artists received investment, promotion and, crucially, access to a wider public audience at all. This arrangement, whatever its real, well-documented flaws, at least involved (2)___ some degree of identifiable human judgement, however commercially self-interested that judgement frequently proved to be. Today, this gatekeeping function has shifted substantially (3)___ record label executives towards recommendation algorithms operated by streaming platforms — automated systems that determine, largely invisibly, which songs get promoted to listeners and which languish, essentially unheard, in relative obscurity despite their own considerable artistic merit. This shift has given rise (4)___ a new set of concerns rather different from the old ones. Algorithms, unlike human executives, cannot straightforwardly be persuaded, negotiated with, or held publicly accountable for their specific recommendation decisions, and the precise commercial and technical criteria that determine algorithmic promotion often remain entirely opaque even (5)___ artists themselves, let alone ordinary listeners. Some musicians have reported deliberately altering their own creative choices — shortening songs, front-loading choruses — specifically in order to perform more favourably within algorithmic systems they only partially, imperfectly understand, raising uncomfortable questions about whether art is now being subtly reshaped to (6)___ machines rather than genuinely move human audiences. Whether this algorithmic gatekeeping ultimately proves more or less democratic than the old, human-controlled system it has substantially replaced remains hotly (7)___, with reasonable people continuing to disagree considerably about which specific system, on balance, better serves genuine artistic diversity and the interests of working musicians (8)___ large.",
        q: [
          fb("(1)", ["as"], "'functioned as the primary gatekeepers'."),
          fb("(2)", ["at", "on"], "'involved at least some degree'."),
          fb("(3)", ["from"], "'shifted substantially from… towards'."),
          fb("(4)", ["to"], "'given rise to a new set of concerns'."),
          fb("(5)", ["to"], "'remain entirely opaque even to artists'."),
          fb("(6)", ["please", "satisfy"], "'reshaped to please machines'."),
          fb("(7)", ["debated", "contested"], "'remains hotly debated'."),
          fb("(8)", ["at"], "'musicians at large'."),
        ],
      },
      p3: {
        title: "The cost of creative saturation",
        text: "Streaming platforms have (1)___ possible, for the first time in music history, the release of literally millions of new songs every single year, a genuinely unprecedented explosion in sheer creative output made (2)___ by dramatically lowered barriers to recording and distributing music independently, without requiring any traditional record label involvement whatsoever. This democratisation carries real, celebrated (3)___: artists who might once have been rejected entirely by conservative, risk-averse label gatekeepers can now reach audiences directly, on their own terms. But this same explosion in raw output has also produced a genuinely severe problem of market (4)___ — so much new music competing simultaneously for listener attention that even genuinely excellent work frequently goes almost entirely unnoticed, buried within an overwhelming, ever-expanding flood of competing new releases. Listeners, faced with (5)___ overwhelming choice, increasingly rely on algorithmic curation and existing popularity signals simply to navigate this flood at all, which paradoxically tends to further (6)___ attention towards already-popular artists rather than genuinely spreading it more evenly across the vast pool of available new talent. The democratisation of music production, in other words, has not straightforwardly translated into a genuine democratisation of actual listener attention, which remains, if anything, (7)___ concentrated than ever among a relatively small handful of already-successful artists. Navigating this genuine tension — between the real, celebrated value of open access and the practical, unavoidable reality of severely limited human attention — represents one of the (8)___ challenges facing the contemporary creative economy more broadly.",
        items: [
          { root: "make", accepted: ["made"], hint: "'have made possible' (participio)." },
          { root: "possible", accepted: ["possible"], hint: "'made possible by' (adjetivo)." },
          { root: "benefit", accepted: ["benefits"], hint: "'real, celebrated benefits' → benefits." },
          { root: "saturate", accepted: ["saturation"], hint: "'a problem of market saturation' → saturation." },
          { root: "whelm", accepted: ["overwhelming"], hint: "'faced with… overwhelming choice' → overwhelming." },
          { root: "concentrate", accepted: ["concentrate"], hint: "'tends to further concentrate attention' (verbo)." },
          { root: "concentrate", accepted: ["more concentrated"], hint: "'if anything, more concentrated' → concentrated." },
          { root: "define", accepted: ["defining"], hint: "'one of the defining challenges' → defining." },
        ],
      },
      p4: {
        title: "Transformaciones — phrasal verbs formales",
        items: [
          { s1: "Streaming represents most of the industry's revenue.", key: "ACCOUNTS", s2: "Streaming ___ for most of the industry's revenue.", accepted: ["accounts"], explanation: "account for." },
          { s1: "The controversy originated from a single leaked email.", key: "STEMMED", s2: "The controversy ___ from a single leaked email.", accepted: ["stemmed"], explanation: "stem from." },
          { s1: "The new policy caused widespread criticism.", key: "RISE", s2: "The new policy gave ___ to widespread criticism.", accepted: ["rise"], explanation: "give rise to." },
          { s1: "The scandal eventually caused significant reforms.", key: "ABOUT", s2: "The scandal eventually brought ___ significant reforms.", accepted: ["about"], explanation: "bring about." },
          { s1: "The band began an ambitious world tour.", key: "EMBARKED", s2: "The band ___ on an ambitious world tour.", accepted: ["embarked"], explanation: "embark on." },
          { s1: "The project's success depends crucially on audience engagement.", key: "HINGES", s2: "The project's success ___ on audience engagement.", accepted: ["hinges"], explanation: "hinge on." },
        ],
      },
      p5: {
        title: "The band that gave their music away",
        text: "When an internationally successful rock band found themselves, somewhat unexpectedly, free of their long-standing recording contract following a protracted, genuinely bitter dispute with their record label, they faced a decision that would ultimately reshape, in ways nobody quite anticipated at the time, how a considerable portion of the wider music industry subsequently thought about the fundamental relationship between artists, their work and the actual paying public.\n\nRather than signing immediately with another traditional label, as industry convention and virtually all professional advice at the time strongly suggested they should, the band instead embarked on a genuinely radical experiment: releasing their next album directly to fans online, and inviting listeners to pay whatever amount they personally felt the music was actually worth to them — including, if they so chose, precisely nothing at all.\n\nIndustry executives, almost universally, predicted the scheme would prove an unmitigated commercial disaster. Conventional industry wisdom held, with something approaching complete certainty, that given a genuine free choice, the overwhelming majority of listeners would simply choose to pay nothing whatsoever, effectively collapsing any realistic revenue stream from recorded music entirely and definitively.\n\nWhat actually happened confounded nearly every one of these confident, expert predictions. While a very considerable number of listeners did indeed choose to pay nothing at all, a genuinely significant proportion voluntarily paid a meaningful, sometimes surprisingly substantial amount — enough, in total, that the band reportedly earned considerably more from this single unconventional release than they had from any of their previous albums released through entirely conventional record label channels.\n\nThe experiment's eventual, considerable success stemmed, according to those who subsequently studied it carefully and in detail, from several distinct, mutually reinforcing factors. The band's already substantial, deeply loyal existing fan base felt a genuine, direct sense of personal connection to musicians who had taken a real, visible commercial risk specifically on their behalf. The novelty and boldness of the whole approach itself generated an enormous amount of free media coverage and public discussion that no conventional advertising campaign, however well-funded, could plausibly have purchased outright. And the underlying psychological principle at work — that people, given genuine trust and real agency, frequently rise to meet it rather than simply, cynically exploiting it for personal gain — proved, in this particular case at least, considerably more robust and reliable than conventional industry wisdom had ever seriously allowed for.\n\nThe experiment did not, it should be said clearly, single-handedly transform the entire music industry's business model overnight; most artists, quite reasonably, continued relying on more conventional, predictable revenue streams. But it gave rise to a broader, more sustained conversation about alternative models for fairly, sustainably compensating creative work, and it demonstrated, rather more convincingly than most theoretical industry arguments ever could, that direct, unmediated trust between artists and their audience could sometimes prove commercially viable in ways that conventional industry gatekeepers had confidently, and as it turned out wrongly, assumed impossible.",
        q: [
          mc("What situation did the band find themselves in?", ["Signing a new contract immediately.", "Free of their recording contract after a bitter dispute.", "Bankrupt.", "Retiring."], 1, "'found themselves… free of their long-standing recording contract following a protracted, genuinely bitter dispute'."),
          mc("What did the band decide to do?", ["Sign with another label.", "Release the album directly to fans, letting them pay what they wanted.", "Stop making music.", "Sue the label."], 1, "'inviting listeners to pay whatever amount they personally felt the music was actually worth'."),
          mc("What did industry executives predict?", ["Huge success.", "An unmitigated commercial disaster.", "No change.", "A lawsuit."], 1, "'predicted the scheme would prove an unmitigated commercial disaster'."),
          mc("What actually happened?", ["Everyone paid nothing.", "A significant proportion paid a meaningful amount, exceeding previous albums' revenue.", "The band lost money.", "Nobody downloaded it."], 1, "'the band reportedly earned considerably more from this single unconventional release than… any of their previous albums'."),
          mc("What factors explained the experiment's success?", ["Luck alone.", "Fan loyalty, free media coverage, and trust reciprocated by fans.", "Government funding.", "A big advertising budget."], 1, "'The band's already substantial… fan base… The novelty… generated an enormous amount of free media coverage… the underlying psychological principle'."),
          mc("What did the experiment demonstrate, according to the writer?", ["Nothing significant.", "Direct trust between artists and audience could be commercially viable.", "Record labels are always necessary.", "Music should always be free."], 1, "'direct, unmediated trust between artists and their audience could sometimes prove commercially viable'."),
        ],
      },
      p6: {
        title: "Should streaming platforms pay artists more?",
        intro: "Cuatro personas debaten si las plataformas de streaming deberían pagar más a los artistas.",
        texts: {
          A: "NADIA: Absolutely, without question. The current model, where a handful of superstars capture almost everything while working musicians earn fractions of a penny per stream, is fundamentally exploitative. Platforms generate enormous, genuinely staggering profits while the actual creators of the content driving those profits often can't earn a sustainable living from their own work at all.",
          B: "TOM: I agree the outcome is troubling, but I'd push back on where exactly the blame properly lies. Platforms themselves typically pay out a very large majority of subscriber revenue; the real problem lies more in how that pool then gets distributed among artists, and in what record labels themselves take before any money ever actually reaches the artist directly.",
          C: "PRIYA: What I keep coming back to is that 'streaming platforms' aren't really one single, unified thing making one single decision. Some genuinely smaller, artist-friendly platforms already pay considerably better than the dominant major players. Consumers who genuinely care about this issue have more actual power and choice here than the simplified framing of this debate typically suggests or acknowledges.",
          D: "SAM: My honest concern is that focusing narrowly on streaming payment rates specifically distracts from a bigger, more structural problem: musicians have arguably never, in any era, been fairly compensated relative to the actual value they demonstrably create. Streaming didn't invent this given problem; it just made an already old, longstanding injustice considerably more visible and quantifiable to ordinary listeners.",
        },
        q: [
          mc("Who calls the current streaming payment model 'fundamentally exploitative'?", ["A", "B", "C", "D"], 0, "Nadia: 'is fundamentally exploitative'."),
          mc("Whose view most directly QUALIFIES Nadia's, questioning where the blame lies?", ["A", "B", "C", "D"], 1, "Tom: 'I'd push back on where exactly the blame properly lies'."),
          mc("Who points out that not all platforms behave the same way?", ["A", "B", "C", "D"], 2, "Priya: '\"streaming platforms\" aren't really one single, unified thing'."),
          mc("Who argues this is an old, longstanding problem that streaming merely made visible?", ["A", "B", "C", "D"], 3, "Sam: 'Streaming didn't invent this… problem; it just made an already old… injustice considerably more visible'."),
        ],
      },
      p7: {
        title: "The song that wrote itself",
        text: "Ask most successful songwriters how a particular hit song actually came about, and you will rarely, if ever, hear a story of careful, methodical, step-by-step planning. (1)___\n\nMore often, the account that emerges is considerably stranger and less controllable: a melody that simply arrived, seemingly from nowhere in particular, during an unrelated activity; lyrics that surfaced in a rush during a single sleepless night. (2)___ The conscious, deliberate mind, many songwriters report, often seems curiously absent from the moments of their own greatest creative breakthroughs.\n\nThis has led some researchers studying creativity to argue that our conventional cultural picture of creative work — a solitary genius consciously, deliberately crafting a masterpiece through sheer effort and skill — is, in important respects, seriously misleading. (3)___ Much of what feels, from the inside, like sudden inspiration is now understood to stem from extended, often unconscious processing that occurs well before the moment of apparent breakthrough.\n\nThis does not mean that skill, craft and years of accumulated practice don't genuinely matter. (4)___ They plainly, demonstrably do; the unconscious mind, whatever its considerable creative contributions, still needs raw, well-developed material to meaningfully work with in the first place.\n\nBut it does suggest that the popular image of creativity as pure, effortful, fully conscious control is a far cry from how the creative process actually, messily seems to function for many working artists. (5)___ Inspiration, on this more accurate view, arrives considerably less through sheer deliberate willpower than through patient, sustained cultivation of the right underlying conditions.\n\nFor aspiring artists hoping to produce their own best creative work, this carries a genuinely useful, practical lesson. (6)___ Sometimes the most productive thing to actually do is, paradoxically, to stop consciously trying quite so hard.",
        options: [
          "Instead, something considerably stranger tends to get described.", // A -> gap 1
          "The details, oddly, often feel like they arrived unbidden.",      // B -> gap 2
          "The lone, fully conscious genius is largely a comforting myth.",  // C -> gap 3
          "Craft and instinct, it turns out, work together, not apart.",    // D -> gap 4
          "Control, in other words, is only ever part of the real story.",  // E -> gap 5
          "Sometimes stepping back helps more than pushing forward.",       // F -> gap 6
          "Every hit song has always been planned meticulously in advance.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: se describe algo más extraño."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los detalles llegan sin ser llamados."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el genio consciente es un mito."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: oficio e instinto trabajan juntos."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el control es solo parte de la historia."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: a veces dar un paso atrás ayuda más."),
        ],
      },
      p8: {
        title: "Four people discuss the creative industries",
        text: "Read what four people say about working in music and the creative industries.\n\nA) NADIA: I make a modest but genuinely sustainable living from a fairly niche musical genre, and streaming has honestly been transformative for me personally. It's true the per-stream rate is tiny, but it's also given me direct access to a global, dedicated audience I never could have reached through any traditional label. My income actually stems mostly from touring and merchandise now, not streaming itself.\n\nB) TOM: I work at a record label, and I'll be honest — the industry's economics genuinely worry me too, not just critics from outside it. We've set out, internally, to develop fairer contract terms, but it hinges considerably on getting streaming platforms themselves to also change how they calculate and distribute payouts. We can't fix this problem entirely alone from our end.\n\nC) PRIYA: I gave up trying to make music my full-time career about three years ago now, honestly. The saturation is genuinely overwhelming — I was putting in real, serious work and getting almost nothing back for it, not even the modest recognition I'd hoped for. I still make music purely for myself now, but I no longer set out to make it my primary income at all.\n\nD) SAM: What's changed everything for me is realising I don't need to reach a truly mainstream audience to actually sustain a real career. A genuinely dedicated niche following, if it's loyal enough and engaged enough, can support a modest but real, sustainable living. That shift in my own thinking gave rise to a completely different, far more realistic and sustainable approach to my whole career.\n",
        q: [
          mc("Who makes a sustainable living from a niche genre thanks to streaming's global reach?", ["A", "B", "C", "D"], 0, "Nadia: 'streaming has honestly been transformative for me… global, dedicated audience'."),
          mc("Who works at a record label and shares concerns about industry economics?", ["A", "B", "C", "D"], 1, "Tom: 'I work at a record label, and I'll be honest — the industry's economics genuinely worry me'."),
          mc("Who gave up trying to make music a full-time career?", ["A", "B", "C", "D"], 2, "Priya: 'I gave up trying to make music my full-time career about three years ago'."),
          mc("Who realised they don't need a mainstream audience to sustain a career?", ["A", "B", "C", "D"], 3, "Sam: 'I don't need to reach a truly mainstream audience to actually sustain a real career'."),
          mc("Whose income stems mostly from touring and merchandise now?", ["A", "B", "C", "D"], 0, "Nadia: 'My income actually stems mostly from touring and merchandise now'."),
          mc("Who says reform hinges on streaming platforms changing payout calculations?", ["A", "B", "C", "D"], 1, "Tom: 'it hinges considerably on getting streaming platforms themselves to also change'."),
          mc("Who found the market saturation genuinely overwhelming?", ["A", "B", "C", "D"], 2, "Priya: 'The saturation is genuinely overwhelming'."),
          mc("Whose shift in thinking gave rise to a more sustainable career approach?", ["A", "B", "C", "D"], 3, "Sam: 'That shift in my own thinking gave rise to a completely different… approach'."),
          mc("Who still makes music purely for themselves without expecting income?", ["A", "B", "C", "D"], 2, "Priya: 'I still make music purely for myself now, but I no longer set out to make it my primary income'."),
          mc("Who says the label can't fix industry problems entirely alone?", ["A", "B", "C", "D"], 1, "Tom: 'We can't fix this problem entirely alone from our end'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la industria musical se plantearon dos ideas:\n· streaming has democratised access to music for artists and listeners alike (el streaming ha democratizado el acceso)\n· streaming has made it harder for musicians to earn a fair living (ha dificultado ganarse la vida dignamente)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS phrasal verbs formales de la semana (account for, stem from, give rise to…). Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· RESEÑA de un álbum, concierto o artista que te haya impresionado: descríbelo y valóralo.\n· ARTÍCULO: 'How I discover new music' — reflexiona sobre cómo ha cambiado tu forma de descubrir música.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Marcus y Zara, sobre la industria musical (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Marcus and Zara, discussing the music industry. Zara: Marcus, you've been a working musician for over fifteen years now. How has streaming actually changed things for you personally? Marcus: Enormously, and honestly in ways I'm still working out. My income now stems almost entirely from touring rather than recorded music itself, which wasn't remotely true fifteen years ago. Zara: Do you think that shift accounts for the growing pressure on artists to tour constantly? Marcus: Absolutely, yes. It's given rise to real, serious burnout across the industry. Artists who'd rather focus purely on writing and recording now feel they have to tour relentlessly just to survive financially at all. Zara: Is there a solution you can actually see working? Marcus: I set out years ago hoping the industry would simply reform itself from within. Honestly, I no longer think that's likely without real external pressure. Zara: What kind of pressure, specifically? Marcus: Regulation, probably, or perhaps enough public pressure from listeners themselves who actually care about this. It hinges largely on whether ordinary people genuinely see this as their problem too, not just an issue for musicians alone to worry about.", [
      mc("1. What does Marcus's income now stem from mostly?", ["Recorded music.", "Touring.", "Merchandise sales only."], 1, "'My income now stems almost entirely from touring'."),
      mc("2. What does this shift account for, according to Zara?", ["Nothing significant.", "The growing pressure on artists to tour constantly.", "Falling ticket prices."], 1, "'the growing pressure on artists to tour constantly'."),
      mc("3. What has this given rise to?", ["More free time.", "Real, serious burnout across the industry.", "Higher streaming rates."], 1, "'given rise to real, serious burnout'."),
      mc("4. What did Marcus originally hope for?", ["Government funding.", "The industry reforming itself from within.", "Higher touring income."], 1, "'I set out years ago hoping the industry would simply reform itself from within'."),
      mc("5. Does he still believe that's likely?", ["Yes, fully.", "No, not without external pressure.", "He's unsure."], 1, "'I no longer think that's likely without real external pressure'."),
      mc("6. What does the solution hinge on, according to Marcus?", ["Nothing.", "Whether ordinary people see this as their problem too.", "New streaming technology."], 1, "'It hinges largely on whether ordinary people genuinely see this as their problem too'."),
    ]),

    ...speakingParts({ p1: "cómo descubres música nueva y si te preocupa cómo se paga a los artistas", p2: "dos imágenes de la industria musical (un músico grabando en un pequeño estudio casero y un gran concierto en un estadio): compáralas y especula sobre las diferencias en sus carreras", p3: "qué ayudaría más a los músicos a ganarse la vida dignamente (reformar el streaming, apoyar giras, diversificar ingresos, regular las plataformas, apoyo público): comentadlo y elegid lo más eficaz", p4: "la música y la industria creativa: si el streaming ha democratizado o perjudicado a los artistas, si los algoritmos deberían decidir qué música escuchamos y qué papel tiene el público en cambiar el sistema" }),

    SUMMARY("Resumen del Día 28", [
      "Phrasal verbs formales: account for (explicar/representar %), stem from (originarse en), give rise to (causar), bring about (provocar cambio), embark on (emprender), set out to (proponerse), hinge on (depender de), culminate in (desembocar en).",
      "Registro más elevado que sus equivalentes coloquiales (come from, cause, start).",
      "Vocabulario de música e industria creativa. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 29", "Escribe 6 frases usando phrasal verbs formales. Repasa las flashcards. Mañana: binomios fijos y colocaciones adjetivo+sustantivo."),
  ],
};

// ───────────────────────── DÍA 29 ─────────────────────────
const DAY29 = {
  title: "Día 29 — Binomios fijos y colocaciones adjetivo+sustantivo · La educación superior",
  description: "Binomios fijos (by and large, part and parcel, first and foremost, null and void, safe and sound); colocaciones adjetivo+sustantivo formales (a stark contrast, a compelling argument, a marked increase). Vocabulario de educación superior. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Usar binomios fijos y colocaciones adjetivo+sustantivo propias del registro académico/formal escrito.",
    summary: "Binomios fijos; colocaciones adjetivo+sustantivo; educación superior; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["invertir el orden fijo de un binomio (safe and sound, nunca sound and safe).", "usar 'big/small' genéricos en vez de la colocación adjetivo+sustantivo precisa (a marked increase, no a big increase).", "olvidar que los binomios son fijos y no admiten sinónimos en su interior."],
    reviewPrompts: ["¿Cuál es el orden correcto de 'part and parcel'? ¿Se puede invertir?", "¿Qué adjetivo formal usarías en vez de 'big' para 'a big increase'?"],
  },
  items: [
    TEXT("🔁 Ayer, phrasal verbs formales. Hoy los BINOMIOS FIJOS y las COLOCACIONES ADJETIVO+SUSTANTIVO: los últimos bloques léxicos que distinguen un C1 pulido. Vocabulario: la EDUCACIÓN SUPERIOR."),
    GRAMMAR("Binomios fijos y colocaciones adjetivo+sustantivo", `BINOMIOS FIJOS (dos palabras unidas por 'and', en un ORDEN que NUNCA se invierte):
· BY AND LARGE (= en general): By and large, the reforms have been successful.
· PART AND PARCEL (= parte inherente de algo): Criticism is part and parcel of public life.
· FIRST AND FOREMOST (= antes que nada, principalmente): First and foremost, the policy must be fair.
· NULL AND VOID (= nulo, sin validez legal): The contract was declared null and void.
· SAFE AND SOUND (= sano y salvo): The hikers returned safe and sound.
· TRIAL AND ERROR (= ensayo y error): The method was developed through trial and error.
· CUT AND DRIED (= decidido de antemano, sin ambigüedad): The outcome was far from cut and dried.
COLOCACIONES ADJETIVO+SUSTANTIVO (más precisas que big/small/good/bad):
· A STARK CONTRAST (contraste muy marcado): a stark contrast between rich and poor universities.
· A COMPELLING ARGUMENT (argumento convincente): She made a compelling argument for reform.
· A MARKED INCREASE/DECLINE (aumento/descenso notable): a marked increase in tuition fees.
· A GROWING CONSENSUS (consenso creciente): a growing consensus among economists.
· A DAUNTING TASK/PROSPECT (tarea/perspectiva intimidante): Funding a degree is a daunting prospect.
⚠️ Los binomios NUNCA cambian de orden (❌ large and by, ❌ sound and safe); memorízalos como bloques fijos.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ large and by → ✅ by and large (orden fijo).\n· ❌ parcel and part → ✅ part and parcel.\n· ❌ a big increase → mejor ✅ a marked/sharp/significant increase (más preciso en C1).\n· ❌ a good argument → mejor ✅ a compelling/persuasive argument."),
    grammarEx("Use of English — Binomios fijos y colocaciones adjetivo+sustantivo", "Elige la opción correcta.", [
      mc("___ , the university's reforms have been well received.", ["By and large", "Large and by", "Part and parcel"], 0, "by and large (orden fijo)."),
      mc("Rising tuition fees have become ___ of student life.", ["part and parcel", "by and large", "safe and sound"], 0, "part and parcel."),
      mc("___ , the policy must ensure genuine equal access to education.", ["First and foremost", "Trial and error", "Cut and dried"], 0, "first and foremost."),
      mc("The court declared the agreement ___ .", ["null and void", "safe and sound", "by and large"], 0, "null and void."),
      mc("There was ___ between the two universities' funding levels.", ["a stark contrast", "a big difference", "a large gap"], 0, "a stark contrast (colocación precisa)."),
      mc("Researchers presented ___ for increasing public funding.", ["a compelling argument", "a good argument", "a nice argument"], 0, "a compelling argument."),
      mc("There has been ___ in student debt over the past decade.", ["a marked increase", "a big increase", "a large rise"], 0, "a marked increase (colocación precisa)."),
    ]),
    GRAMMAR("Vocabulario del día — La educación superior (C1)", "Léxico avanzado de educación superior."),
    deck("C1 S6D29 — La educación superior", [
      ["tuition fees", "tasas académicas / matrícula", "Tuition fees have risen sharply.", "sustantivo", "tjuˈɪʃn fiːz"],
      ["academia", "el mundo académico", "She spent her career in academia.", "sustantivo", "ˌækəˈdiːmiə"],
      ["credential", "credencial / titulación", "A degree is now a basic credential.", "sustantivo", "krɪˈdenʃl"],
      ["meritocracy", "meritocracia", "Universities claim to be meritocracies.", "sustantivo", "ˌmerɪˈtɒkrəsi"],
      ["accreditation", "acreditación (académica)", "The course lost its accreditation.", "sustantivo", "əˌkredɪˈteɪʃn"],
      ["underfunded", "infrafinanciado/a", "Many public universities are underfunded.", "adjetivo", "ˌʌndəˈfʌndɪd"],
      ["vocational", "vocacional / de formación profesional", "Vocational training is often undervalued.", "adjetivo", "vəʊˈkeɪʃənl"],
      ["dropout rate", "tasa de abandono", "The dropout rate concerns administrators.", "sustantivo", "ˈdrɒpaʊt reɪt"],
      ["endowment", "fondo patrimonial (universitario)", "The university has a huge endowment.", "sustantivo", "ɪnˈdaʊmənt"],
      ["stratified", "estratificado/a", "Higher education remains highly stratified.", "adjetivo", "ˈstrætɪfaɪd"],
    ]),
    vocabEx("Vocabulario — La educación superior", "Elige la opción correcta.", [
      mc("Money charged for a course of study is ___.", ["tuition fees", "accreditation", "endowment"], 0, "tuition fees."),
      mc("A qualification proving competence is a ___.", ["credential", "dropout rate", "endowment"], 0, "credential."),
      mc("A system where success depends on ability and effort is a ___.", ["meritocracy", "credential", "accreditation"], 0, "meritocracy."),
      mc("Not receiving enough money to operate properly is being ___.", ["underfunded", "stratified", "vocational"], 0, "underfunded."),
      mc("Relating to practical job training is ___.", ["vocational", "meritocratic", "underfunded"], 0, "vocational."),
      mc("Divided into distinct levels or classes is ___.", ["stratified", "underfunded", "vocational"], 0, "stratified."),
    ]),

    ...uoe({
      p1: {
        title: "The credential arms race",
        text: "A university degree, once a relatively (1)___ marker distinguishing a small, genuinely privileged minority from the wider population, has become, for a very large share of today's workforce, simply the basic minimum credential required to compete meaningfully for even entry-level professional employment. This shift stems largely from what economists have termed 'credential inflation': as more people acquire degrees, employers, faced with an ever-larger applicant pool, simply raise the minimum credential bar required, regardless of whether the actual job itself genuinely requires the specific skills a degree supposedly certifies. The result is what some critics have (2)___ a 'credential arms race' — individuals rationally, understandably pursuing ever more advanced qualifications not necessarily because the work itself genuinely demands them, but simply to remain minimally competitive against similarly credentialed rivals for a limited pool of available jobs. This dynamic gives rise (3)___ a stark, uncomfortable paradox: education, widely championed as society's great meritocratic equaliser, can instead perpetuate and even actively deepen existing inequality, since wealthier families can (4)___ afford the additional years of costly education increasingly required to remain competitive, while less affluent families, facing precisely the same escalating credential requirements, frequently cannot. First and (5)___, this raises a fundamental, largely unaddressed policy question: if a degree's primary function has increasingly become mere costly signalling to employers rather than genuinely essential skill acquisition, might there be more efficient, considerably less expensive ways of achieving broadly the same necessary signalling function? By and (6)___, policymakers have been slow to seriously grapple with this uncomfortable possibility, in part because doing so would (7)___ into question the very economic value proposition on which an enormous, politically influential higher education sector currently, substantially rests.",
        q: [
          mc("(1)", ["rare", "scarce", "uncommon", "infrequent"], 0, "'a relatively rare marker'."),
          mc("(2)", ["termed", "named", "called", "labelled"], 0, "'critics have termed'."),
          mc("(3)", ["to", "for", "in", "with"], 0, "'gives rise to a stark… paradox'."),
          mc("(4)", ["more easily", "far more", "considerably more", "much more"], 0, "'can more easily afford'."),
          mc("(5)", ["foremost", "first", "mainly", "importantly"], 0, "'First and foremost'."),
          mc("(6)", ["large", "broad", "wide", "vast"], 0, "'By and large'."),
          mc("(7)", ["call", "bring", "draw", "put"], 2, "'draw into question'."),
        ],
      },
      p2: {
        title: "The vocational stigma",
        text: "In many countries, vocational and technical education carries a persistent, well-documented social stigma that academic education, however similarly demanding or economically valuable, largely does not (1)___ carry. Parents, guidance counsellors and society more broadly frequently steer capable students towards traditional academic degree programmes, even when a specific student's own genuine interests, aptitudes and long-term career prospects might arguably be considerably better (2)___ by rigorous, well-designed vocational training instead. This stigma persists (3)___ mounting evidence that many skilled trades offer genuinely excellent, stable earning prospects, often considerably exceeding what many humanities and social science graduates can realistically expect to earn, at least in the years immediately following graduation. The stark contrast between actual labour market outcomes and persistent social perception represents, by (4)___ accounts, a genuine, significant policy failure. Countries that have most successfully addressed and reduced this stigma typically share several common features: genuinely well-funded, high-quality vocational programmes; smooth, clearly signposted pathways allowing movement between vocational and academic tracks as circumstances change; and sustained, deliberate public messaging that actively challenges the persistent assumption that vocational training represents some sort of inferior consolation choice for students who couldn't quite manage traditional academic study. Addressing this deeply entrenched stigma remains, by (5)___ accounts, a genuinely daunting task, given how deeply such cultural assumptions about the relative worth of different educational and career pathways have become embedded across multiple generations.",
        q: [
          fb("(1)", ["itself"], "'largely does not itself carry'."),
          fb("(2)", ["served"], "'better served by… training'."),
          fb("(3)", ["despite"], "'persists despite mounting evidence'."),
          fb("(4)", ["most"], "'by most accounts'."),
          fb("(5)", ["most"], "'by most accounts, a genuinely daunting task'."),
        ],
      },
      p3: {
        title: "The endowment divide",
        text: "The financial (1)___ between the wealthiest and least well-resourced universities has grown, by most careful measures, considerably starker in recent decades. A relatively small handful of elite institutions now command (2)___ that dwarf the entire annual budgets of many other public universities combined, allowing them to offer generous scholarships, cutting-edge facilities and remarkably low staff-to-student ratios that chronically (3)___ institutions can simply never realistically hope to match. This growing divide has real, tangible consequences that extend well beyond mere institutional prestige or reputation alone. Students at wealthy, well-resourced institutions typically enjoy smaller classes, considerably more individual attention from senior faculty, and (4)___ better career support and networking opportunities, advantages that compound over an entire career and contribute, in aggregate, to persistent, measurable outcome (5)___ between graduates of differently resourced institutions that plausibly have relatively little to do with genuine differences in individual student ability or effort. Some policymakers have accordingly proposed redistributive measures — taxing the very largest university endowments, for instance, to help (6)___ fund less well-resourced public institutions — though such proposals typically face fierce, well-organised (7)___ from wealthy institutions themselves, which argue their own considerable financial resources fund genuinely valuable research with broad, diffuse societal (8)___ that extends well beyond their own specific student body alone.",
        items: [
          { root: "divide", accepted: ["divide"], hint: "'The financial divide' (sustantivo)." },
          { root: "endow", accepted: ["endowments"], hint: "'command endowments' → endowments." },
          { root: "fund", accepted: ["underfunded"], hint: "'chronically underfunded institutions' → underfunded." },
          { root: "consider", accepted: ["considerably"], hint: "'considerably better career support' → considerably." },
          { root: "differ", accepted: ["differences", "differentials"], hint: "'outcome differences/differentials' → differences." },
          { root: "help", accepted: ["help"], hint: "'help fund less well-resourced institutions' (verbo)." },
          { root: "oppose", accepted: ["opposition"], hint: "'fierce… opposition' → opposition." },
          { root: "benefit", accepted: ["benefits"], hint: "'broad, diffuse societal benefits' → benefits." },
        ],
      },
      p4: {
        title: "Transformaciones — binomios fijos y colocaciones",
        items: [
          { s1: "In general, the university's reforms have been well received.", key: "LARGE", s2: "By and ___, the reforms have been well received.", accepted: ["large"], explanation: "by and large." },
          { s1: "Rising debt has become an inherent part of student life.", key: "PARCEL", s2: "Rising debt has become part and ___ of student life.", accepted: ["parcel"], explanation: "part and parcel." },
          { s1: "Above all, the policy must ensure fair access.", key: "FOREMOST", s2: "First and ___, the policy must ensure fair access.", accepted: ["foremost"], explanation: "first and foremost." },
          { s1: "The contract was ruled to have no legal validity.", key: "VOID", s2: "The contract was declared null and ___.", accepted: ["void"], explanation: "null and void." },
          { s1: "There was a very marked difference between the two universities' funding.", key: "STARK", s2: "There was ___ between the two universities' funding.", accepted: ["a stark contrast"], explanation: "a stark contrast." },
          { s1: "Researchers made a very convincing argument for reform.", key: "COMPELLING", s2: "Researchers made ___ for reform.", accepted: ["a compelling argument"], explanation: "a compelling argument." },
        ],
      },
      p5: {
        title: "The university that abolished tuition",
        text: "When a mid-sized public university, facing plummeting enrolment numbers and mounting criticism over the crushing debt burden its own graduates routinely carried, announced it would abolish tuition fees entirely for all students from low- and middle-income families, the decision was met, first and foremost, with sheer disbelief from other university administrators across the country, several of whom privately predicted the institution would face severe, quite possibly existential financial difficulty within a very few years.\n\nThe university's own leadership, by contrast, framed the decision as a matter of basic institutional survival rather than pure, uncosted idealism. Enrolment had already fallen sharply as prospective students, faced with genuinely stark financial trade-offs, increasingly opted for cheaper alternatives or, in a growing number of troubling cases, decided against pursuing any higher education at all. The university's leadership calculated, after careful and detailed financial modelling, that a significant, sustained increase in enrolment following the tuition change might plausibly offset the direct, obvious loss in per-student tuition revenue.\n\nThe policy's actual funding mechanism relied on a combination of measures developed through a period of genuine institutional trial and error: a modest increase in state government funding secured through sustained political advocacy, a targeted, intensive fundraising campaign specifically aimed at wealthy alumni, and meaningful administrative cost reductions achieved by significantly streamlining several previously bloated, inefficient university departments.\n\nThe results, once the policy had been fully implemented and had a few full years to properly play out, proved considerably more positive than even the university's own initially cautious internal projections had suggested. Enrolment rose sharply, reversing years of steady, worrying decline; the student body itself became noticeably more socioeconomically diverse, with students from low-income families enrolling in genuinely far greater numbers than in any previous year on record; and, perhaps most strikingly of all to outside observers, graduation rates actually improved measurably, as students freed from crushing, ever-present financial anxiety could focus their attention and energy more fully and consistently on their actual studies rather than juggling multiple part-time jobs merely to survive financially while also studying.\n\nCritics, it should be said clearly, remained genuinely unconvinced that the specific model was easily replicable elsewhere, pointing reasonably to the university's own particular, somewhat unusual combination of circumstances: a supportive, unusually engaged state government, a relatively affluent and generous alumni base, and administrative leadership genuinely willing to make politically difficult, sometimes unpopular internal cuts. Whether other, less fortunately positioned institutions could successfully replicate this particular funding model remained, by most honest accounts, a genuinely open and unresolved question.\n\nWhat the case did demonstrate rather more convincingly, however, was that the widespread, pervasive assumption that high tuition fees were simply an unavoidable, cut-and-dried economic necessity for institutional financial survival was, at the very least, considerably more negotiable and less inevitable than most university administrators, across the wider higher education sector, had generally, comfortably assumed. Part and parcel of the university's eventual, hard-won success was a genuine, sustained willingness to question long-unquestioned institutional assumptions rather than simply, passively accepting them as fixed, unchangeable financial facts of life.",
        q: [
          mc("What did the university announce?", ["Higher fees.", "Abolishing tuition fees for low- and middle-income families.", "Closing down.", "Merging with another university."], 1, "'it would abolish tuition fees entirely for all students from low- and middle-income families'."),
          mc("How did other administrators initially react?", ["With enthusiasm.", "With disbelief and predictions of financial difficulty.", "With indifference.", "With immediate imitation."], 1, "'the decision was met… with sheer disbelief… predicted the institution would face severe… financial difficulty'."),
          mc("How did the university fund the policy?", ["By raising fees elsewhere.", "State funding, alumni fundraising, and administrative cost reductions.", "By closing departments entirely.", "Through student loans."], 1, "'a modest increase in state government funding… a targeted, intensive fundraising campaign… meaningful administrative cost reductions'."),
          mc("What happened to enrolment after the policy?", ["It fell further.", "It rose sharply.", "It stayed the same.", "It became less diverse."], 1, "'Enrolment rose sharply, reversing years of steady… decline'."),
          mc("What happened to graduation rates?", ["They fell.", "They improved measurably.", "No change.", "They became irrelevant."], 1, "'graduation rates actually improved measurably'."),
          mc("What did the case demonstrate, according to the writer?", ["High fees are always necessary.", "High tuition fees were more negotiable than commonly assumed.", "The model is easily replicated everywhere.", "Nothing significant."], 1, "'the widespread… assumption that high tuition fees were simply an unavoidable… economic necessity… was… considerably more negotiable and less inevitable'."),
        ],
      },
      p6: {
        title: "Should higher education be free for everyone?",
        intro: "Cuatro personas debaten si la educación superior debería ser gratuita para todos.",
        texts: {
          A: "NADIA: I firmly believe it should be, first and foremost because education is a public good that benefits society as a whole, not just the individual graduate. Countries that have made higher education free report, by and large, higher social mobility and a more genuinely educated, engaged citizenry overall. The investment pays for itself many times over across a generation.",
          B: "TOM: I share the underlying goal, but I'd question whether 'free for everyone' is actually the most efficient way to achieve it. Free tuition for wealthy families who could easily afford to pay seems, to me, a poor and rather wasteful use of scarce public money. I'd favour means-tested support that concentrates limited resources specifically where the actual need is genuinely greatest.",
          C: "PRIYA: What concerns me most is that 'free tuition' alone doesn't address the other very real barriers facing low-income students — living costs, the lost income from not working full-time, and inadequate academic preparation from underfunded schools. Free tuition, while genuinely helpful, is far from a complete cut-and-dried solution to educational inequality on its own.",
          D: "SAM: My honest view is that we're having the wrong debate entirely. The deeper, more fundamental question is whether a traditional four-year degree should remain the default, near-universal pathway at all, given how many well-paying jobs genuinely don't require one. Making an increasingly questionable model free doesn't necessarily fix its more fundamental, underlying problems.",
        },
        q: [
          mc("Who firmly believes education should be free, citing it as a public good?", ["A", "B", "C", "D"], 0, "Nadia: 'education is a public good that benefits society as a whole'."),
          mc("Whose view most directly QUALIFIES Nadia's, questioning efficiency of universal free tuition?", ["A", "B", "C", "D"], 1, "Tom: 'I'd question whether \"free for everyone\" is actually the most efficient way'."),
          mc("Who argues free tuition alone doesn't address other real barriers?", ["A", "B", "C", "D"], 2, "Priya: '\"free tuition\" alone doesn't address the other very real barriers'."),
          mc("Who questions whether the traditional degree pathway should remain the default at all?", ["A", "B", "C", "D"], 3, "Sam: 'whether a traditional four-year degree should remain the default… pathway at all'."),
        ],
      },
      p7: {
        title: "What a degree is actually worth",
        text: "For decades, the economic case for pursuing a university degree seemed, to most reasonable observers, remarkably close to cut and dried. (1)___\n\nGraduates, on average, earned significantly more over their working lives than non-graduates, and this substantial wage premium appeared to justify, quite straightforwardly, even a very considerable upfront investment in tuition and living costs. (2)___ The maths, for most families considering the decision, seemed reassuringly, comfortingly simple.\n\nIn recent years, however, this once-confident calculation has grown considerably murkier and more contested. (3)___ Rising tuition costs, mounting student debt burdens, and a growing number of graduates working in jobs that don't actually, genuinely require a degree at all have combined to complicate what once looked like a straightforward, reliable investment.\n\nThe picture, moreover, varies enormously depending on specific field of study, individual institution attended, and broader prevailing economic conditions at the time of graduation. (4)___ A degree in a field with genuinely strong graduate employment prospects, from a well-regarded institution, still typically delivers a robust, reliable financial return; other combinations of field and institution deliver returns that are considerably weaker, or in some documented cases, essentially negative.\n\nThis growing variation matters enormously for how prospective students, and their families, should reasonably approach the decision. (5)___ Blanket, one-size-fits-all advice — 'always go to university', or, at the opposite extreme, 'never bother' — increasingly misses the genuinely crucial, often decisive details.\n\nWhat seems clear, whatever the eventual policy response, is that the old, simple, comfortingly reassuring story about the value of a degree deserves considerably more careful scrutiny than it has traditionally received. (6)___ The right answer, for any given individual, increasingly depends on precisely which degree, from which specific institution, under which particular circumstances.",
        options: [
          "The basic arithmetic seemed to favour a degree overwhelmingly.",  // A -> gap 1
          "Go, the reasoning ran, and the numbers would work out fine.",    // B -> gap 2
          "That old, tidy story no longer holds together quite so neatly.", // C -> gap 3
          "Averages, in other words, conceal considerable variation.",     // D -> gap 4
          "Generic advice fits this decision increasingly poorly.",        // E -> gap 5
          "The details, it turns out, matter more than the headline.",     // F -> gap 6
          "A degree has never once carried any real economic value.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la aritmética básica favorecía el título."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los números cuadraban bien."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa vieja historia ya no encaja."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: las medias ocultan mucha variación."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el consejo genérico encaja cada vez peor."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: los detalles importan más que el titular."),
        ],
      },
      p8: {
        title: "Four people discuss their experience of higher education",
        text: "Read what four people say about their own experience of higher education.\n\nA) NADIA: I racked up considerable debt for a degree that, by and large, hasn't proven especially useful in my actual career. I don't entirely regret it — university genuinely shaped who I am in ways beyond the purely economic — but I'd advise anyone considering it now to think a great deal more carefully about the specific, likely financial trade-offs involved.\n\nB) TOM: I dropped out after two years, which felt, first and foremost, like a genuine personal failure at the time. Looking back now, it was actually the single best decision I ever made. I learned my actual trade through hands-on apprenticeship instead, and I now earn considerably more than most of my old university friends who stayed and finished their degrees.\n\nC) PRIYA: I went to a genuinely elite, well-resourced university on a full scholarship, and the stark contrast with my old friends who attended less well-funded institutions has been fairly striking to watch over the years. The connections and opportunities I got access to were, frankly, part and parcel of the whole experience there, not something I could easily have found or replicated elsewhere.\n\nD) SAM: I went back to university properly in my forties, after fifteen years in an entirely different career, and it was honestly one of the most rewarding, transformative things I've ever done. Everyone assumed I was there purely and narrowly for career advancement, but by and large, it was genuinely, simply about learning for its own sake at that later stage of my life.\n",
        q: [
          mc("Who racked up debt for a degree that hasn't proven especially useful?", ["A", "B", "C", "D"], 0, "Nadia: 'I racked up considerable debt for a degree that… hasn't proven especially useful in my actual career'."),
          mc("Who dropped out and now earns more than university-finishing friends?", ["A", "B", "C", "D"], 1, "Tom: 'I dropped out after two years… I now earn considerably more than most of my old university friends'."),
          mc("Who attended an elite university on a full scholarship?", ["A", "B", "C", "D"], 2, "Priya: 'I went to a genuinely elite, well-resourced university on a full scholarship'."),
          mc("Who returned to university in their forties?", ["A", "B", "C", "D"], 3, "Sam: 'I went back to university properly in my forties'."),
          mc("Who felt dropping out was a genuine personal failure at first?", ["A", "B", "C", "D"], 1, "Tom: 'which felt, first and foremost, like a genuine personal failure at the time'."),
          mc("Who says connections were part and parcel of their university experience?", ["A", "B", "C", "D"], 2, "Priya: 'were, frankly, part and parcel of the whole experience there'."),
          mc("Who says university genuinely shaped who they are beyond economics?", ["A", "B", "C", "D"], 0, "Nadia: 'university genuinely shaped who I am in ways beyond the purely economic'."),
          mc("Who says it was genuinely about learning for its own sake, not career advancement?", ["A", "B", "C", "D"], 3, "Sam: 'it was genuinely, simply about learning for its own sake'."),
          mc("Who learned their trade through hands-on apprenticeship instead?", ["A", "B", "C", "D"], 1, "Tom: 'I learned my actual trade through hands-on apprenticeship instead'."),
          mc("Who advises thinking more carefully about financial trade-offs?", ["A", "B", "C", "D"], 0, "Nadia: 'I'd advise anyone considering it now to think a great deal more carefully about the specific… financial trade-offs'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la educación se plantearon dos ideas:\n· a university degree is essential for career success (un título universitario es esencial)\n· vocational training is undervalued compared to academic education (la formación profesional está infravalorada)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS binomios fijos o colocaciones adjetivo+sustantivo de la semana. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para un gobierno sobre cómo hacer la educación superior más asequible: justifica y recomienda medidas.\n· ARTÍCULO: 'What I wish I'd known before choosing my path' — reflexiona sobre tus propias decisiones educativas o profesionales.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de su trayectoria educativa (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué camino siguieron?): A a traditional university degree · B vocational/apprenticeship training · C dropping out early · D returning to education later in life · E an elite, well-funded institution · F self-directed learning. TAREA DOS (¿cómo valoran esa decisión ahora?): A no regrets at all · B mixed feelings · C genuine regret · D pleasantly surprised · E validated by outcomes · F still uncertain.", "This is Part Four. You will hear five people talking about their educational path. Speaker One: I went straight into a trade apprenticeship rather than university, which felt like a daring, slightly risky choice at the time. Looking back now, by and large, it's worked out better than I could have reasonably hoped — stable, well-paid work, and I avoided the crushing debt most of my old school friends are still carrying. Speaker Two: I finished my degree at a well-funded, genuinely prestigious institution, but I sometimes wonder, honestly, whether the connections mattered more than what I actually, properly learned there. It's part and parcel of how that whole system seems to work, I've come to realise. Speaker Three: I dropped out in my second year, and for a long time afterwards I genuinely regretted it deeply. It's taken me years to properly make peace with that specific decision, and I'm honestly still not entirely sure it was the right call. Speaker Four: I taught myself to code entirely online, no formal qualification at all, and I now have a genuinely solid, stable career in software. First and foremost, I'd tell young people that there's more than one single valid path to a good, sustainable career. Speaker Five: I went back to study properly in my fifties, after my children had finally grown up and left home. It was daunting at first, genuinely, but by and large it's been one of the most quietly rewarding things I've ever done in my whole life.", [
      mc("Speaker 1 — TAREA UNO (qué camino siguió)", ["A", "B", "C", "D", "E", "F"], 1, "B: aprendizaje/formación profesional."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 4, "E: institución de élite bien financiada."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 2, "C: abandonó los estudios pronto."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: aprendizaje autodidacta."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 3, "D: volvió a estudiar más tarde en la vida."),
      mc("Speaker 1 — TAREA DOS (cómo lo valora)", ["A", "B", "C", "D", "E", "F"], 4, "E: validado por los resultados."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: sentimientos encontrados."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 2, "C: arrepentimiento genuino."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 0, "A: sin ningún arrepentimiento."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: gratamente sorprendido/a."),
    ]),

    ...speakingParts({ p1: "qué opinas de la educación superior y qué camino educativo has seguido o te gustaría seguir", p2: "dos imágenes de la educación (una universidad de prestigio con instalaciones modernas y un taller de formación profesional): compáralas y especula sobre las oportunidades de cada camino", p3: "qué debería priorizarse en la educación superior (la asequibilidad, la calidad de la enseñanza, la preparación laboral, el desarrollo personal, la igualdad de acceso): comentadlo y elegid lo más importante", p4: "la educación superior: si un título universitario sigue mereciendo la pena, si la formación profesional está infravalorada y cómo debería financiarse la educación de forma más justa" }),

    SUMMARY("Resumen del Día 29", [
      "Binomios fijos (orden NUNCA se invierte): by and large, part and parcel, first and foremost, null and void, safe and sound, trial and error, cut and dried.",
      "Colocaciones adjetivo+sustantivo precisas: a stark contrast, a compelling argument, a marked increase/decline, a growing consensus, a daunting task.",
      "Vocabulario de educación superior. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 30", "Escribe 6 frases usando binomios fijos o colocaciones adjetivo+sustantivo. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 30 ─────────────────────────
const DAY30 = {
  title: "Día 30 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de las colocaciones formales de verbo+sustantivo, idioms académicos, phrasal verbs formales, y binomios fijos/colocaciones adjetivo+sustantivo. Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 6 — MITAD DEL CURSO.",
  pedagogy: {
    objective: "Consolidar todo el léxico avanzado de la semana antes de la segunda mitad del curso C1.",
    summary: "Repaso de colocaciones/idioms/phrasal verbs/binomios; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué colocación o idiom te ha costado más recordar?", "Repásalos: llevas ya 30 días, MITAD del curso C1."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 6 del C1 — ¡MITAD DEL CURSO! Consolidas las COLOCACIONES FORMALES, los IDIOMS ACADÉMICOS, los PHRASAL VERBS FORMALES, y los BINOMIOS FIJOS/COLOCACIONES ADJETIVO+SUSTANTIVO. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 6", `1) COLOCACIONES V+SUST: draw a conclusion, pose a threat, exercise caution, bear in mind, raise a concern, strike a balance, reach an agreement, address a concern.
2) IDIOMS ACADÉMICOS: a double-edged sword, a far cry from, the tip of the iceberg, an uphill battle, a watershed moment, a silver lining.
3) PHRASAL VERBS FORMALES: account for, stem from, give rise to, bring about, embark on, set out to, hinge on.
4) BINOMIOS Y COLOCACIONES ADJ+SUST: by and large, part and parcel, first and foremost, null and void; a stark contrast, a compelling argument, a marked increase.`),
    grammarEx("Use of English — Repaso mixto de la Semana 6", "Completa o elige.", [
      mc("The study allows us to ___ some tentative conclusions.", ["make", "draw", "do"], 1, "draw a conclusion."),
      mc("Climate change ___ a serious threat to coastal cities.", ["does", "poses", "makes"], 1, "pose a threat."),
      mc("Social media fame can be ___ for young athletes.", ["a piece of cake", "a double-edged sword", "a far cry"], 1, "a double-edged sword."),
      mc("Streaming now ___ over eighty percent of music revenue.", ["accounts for", "stems from", "gives rise to"], 0, "account for."),
      mc("The controversy ___ a single leaked email.", ["stemmed from", "embarked on", "hinged on"], 0, "stem from."),
      mc("___ , the reforms have been well received.", ["By and large", "Large and by", "Part and parcel"], 0, "by and large."),
      mc("There was ___ between the two universities' funding.", ["a stark contrast", "a big difference", "a large gap"], 0, "a stark contrast."),
      mc("Reforming the system remains ___ .", ["an uphill battle", "a silver lining", "in the same vein"], 0, "an uphill battle."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 6", "Repasa los mazos (gastronomía, deporte, música, educación superior)."),
    vocabEx("Vocabulario — Repaso de la Semana 6", "Elige la opción correcta.", [
      mc("The origin or source of something, e.g. food:", ["provenance", "palate", "staple"], 0, "provenance."),
      mc("A competitor not expected to win:", ["underdog", "governing body", "endorsement"], 0, "underdog."),
      mc("Payments made to creators for use of their work:", ["royalties", "saturation", "mainstream"], 0, "royalties."),
      mc("Money charged for a course of study:", ["tuition fees", "accreditation", "endowment"], 0, "tuition fees."),
      mc("Made in a traditional, small-scale, skilled way:", ["artisanal", "homogenised", "indigenous"], 0, "artisanal."),
      mc("Using banned substances to enhance performance:", ["doping", "resilience", "scrutiny"], 0, "doping."),
      mc("A small, specialised market segment:", ["niche", "mainstream", "gatekeeper"], 0, "niche."),
      mc("Not receiving enough money to operate properly:", ["underfunded", "stratified", "vocational"], 0, "underfunded."),
    ]),

    ...uoe({
      p1: {
        title: "Halfway there",
        text: "Reaching the midpoint of any sufficiently demanding, sustained undertaking (1)___ a particular kind of reflection that the earlier, more exhilarating stages of enthusiastic beginning rarely, if ever, genuinely prompt. The initial excitement of embarking (2)___ something new and ambitious has, by this point, typically given way to something rather more sober: an honest, clear-eyed reckoning with how much genuinely remains still to be done, and whether the considerable effort invested so far has actually, demonstrably brought about the kind of progress one might reasonably have hoped for at the outset. This is, by and (3)___, a healthy and genuinely useful moment for such reflection, rather than a cause for any particular discouragement. Learning any sufficiently complex skill is rarely, if ever, a matter of smooth, cut-and-dried linear progress; it typically proceeds instead through a distinctly uneven process of trial and (4)___, of periods of rapid, exhilarating advance punctuated by frustrating plateaus that can, at the time, feel discouragingly like a complete lack of any genuine progress whatsoever. First and (5)___, what matters at the genuine midpoint of any long undertaking is not whether one has already achieved full, complete mastery — that would, after all, rather defeat the whole considerable point of continuing to study at all — but whether one can look back honestly at the distance genuinely covered and draw a fair, honest (6)___ between where one actually started and where one currently, demonstrably stands. For most learners who persist seriously with a demanding language to this particular point, that honest comparison typically reveals considerably more solid progress than the learner's own, often rather harsh, internal self-assessment tends to readily, comfortably acknowledge.",
        q: [
          mc("(1)", ["invites", "provokes", "prompts", "demands"], 0, "'invites a particular kind of reflection'."),
          mc("(2)", ["on", "in", "at", "to"], 0, "'embarking on something new'."),
          mc("(3)", ["large", "wide", "broad", "vast"], 0, "'By and large'."),
          mc("(4)", ["error", "mistake", "fault", "flaw"], 0, "'trial and error'."),
          mc("(5)", ["foremost", "first", "mainly", "chiefly"], 0, "'First and foremost'."),
          mc("(6)", ["comparison", "contrast", "distinction", "difference"], 0, "'draw a fair, honest comparison'."),
        ],
      },
      p2: {
        title: "What fluency actually costs",
        text: "Genuine fluency in a second language does not come cheap, in any real sense (1)___ that phrase. It requires, first and foremost, an enormous, sustained investment of time — typically many hundreds, often several thousand, cumulative hours of dedicated, deliberate practice spread (2)___ months and, more usually, several years of sustained effort. This uncomfortable reality stands (3)___ a stark, rather sobering contrast to the breezy, effortless-sounding promises of certain popular language-learning applications, which frequently give rise (4)___ unrealistic learner expectations about achievable timelines. Learning stems, in the end, not primarily (5)___ any particular method or technology, however cleverly designed or marketed, but from sustained, consistent effort applied patiently over a genuinely considerable period of time. This is not, it should be stressed clearly, an argument against using such tools, which can genuinely, meaningfully help; it is rather an argument for approaching language learning with (6)___ realistic expectations than marketing copy typically, and rather cynically, encourages. Bearing this sobering reality (7)___ mind from the very outset can help learners avoid the profound discouragement that so often, and so needlessly, accompanies the realistic, inevitable gap between marketed promise and lived, everyday learning reality.",
        q: [
          fb("(1)", ["of"], "'in any real sense of that phrase'."),
          fb("(2)", ["over", "across"], "'spread over/across months'."),
          fb("(3)", ["in"], "'stands in… contrast'."),
          fb("(4)", ["to"], "'give rise to unrealistic… expectations'."),
          fb("(5)", ["from"], "'not primarily from any… method'."),
          fb("(6)", ["more"], "'with more realistic expectations'."),
          fb("(7)", ["in"], "'Bearing this… reality in mind'."),
        ],
      },
      p3: {
        title: "The plateau nobody warns you about",
        text: "Every language learner eventually encounters what teachers commonly, and rather grimly, call the 'intermediate plateau' — a genuinely frustrating stretch, often lasting many months, during which progress seems to (1)___ almost to a complete standstill, despite continued, diligent effort. This plateau stems, researchers suggest, from a fundamental, largely unavoidable shift in what actually needs to be learned at this particular stage. Early progress in any language feels rapid and genuinely (2)___ because beginners are acquiring high-frequency, immediately useful vocabulary and elementary grammatical structures that yield immediate, tangible, satisfying results in everyday communication. Intermediate and advanced learners, by (3)___, must instead master considerably subtler distinctions — precise collocations, nuanced idiom, the fine-grained register distinctions this very course has spent considerable time addressing — that individually contribute far less (4)___ improvement to overall comprehensibility, even though their cumulative, combined effect over time is genuinely substantial and significant. This explains why intermediate learners so often report feeling, rather (5)___, that they are working just as hard as ever yet somehow, mysteriously, getting nowhere in particular. The honest, useful answer is that they are, in fact, still making genuine, real progress — it has simply become considerably less immediately (6)___ than the dramatic early gains that first, so encouragingly, motivated them to seriously begin studying in the first place.",
        items: [
          { root: "come", accepted: ["come"], hint: "'seems to come almost to a standstill' (verbo)." },
          { root: "satisfy", accepted: ["satisfying"], hint: "'genuinely satisfying' (adjetivo)." },
          { root: "contrast", accepted: ["contrast"], hint: "'by contrast' (sustantivo con 'by')." },
          { root: "visible", accepted: ["visibly"], hint: "'contribute far less visibly' → visibly." },
          { root: "confuse", accepted: ["confusingly"], hint: "'rather confusingly' → confusingly." },
          { root: "vision", accepted: ["visible"], hint: "'considerably less immediately visible' → visible." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 6",
        items: [
          { s1: "The study allowed researchers to make a conclusion.", key: "DRAW", s2: "The study allowed researchers to ___ a conclusion.", accepted: ["draw"], explanation: "draw a conclusion." },
          { s1: "Fame brings both visibility and pressure at once.", key: "SWORD", s2: "Fame is ___ .", accepted: ["a double-edged sword"], explanation: "a double-edged sword." },
          { s1: "The controversy originated from a leaked email.", key: "STEMMED", s2: "The controversy ___ from a leaked email.", accepted: ["stemmed"], explanation: "stem from." },
          { s1: "In general, the reforms have been well received.", key: "LARGE", s2: "By and ___, the reforms have been well received.", accepted: ["large"], explanation: "by and large." },
          { s1: "Rising debt has become an inherent part of student life.", key: "PARCEL", s2: "Rising debt has become part and ___ of student life.", accepted: ["parcel"], explanation: "part and parcel." },
          { s1: "There was a very marked difference between the two funding levels.", key: "STARK", s2: "There was ___ between the two funding levels.", accepted: ["a stark contrast"], explanation: "a stark contrast." },
        ],
      },
      p5: {
        title: "The teacher who counted the hours",
        text: "After nearly thirty years teaching languages to adult learners, a veteran language instructor had grown increasingly frustrated by what she considered a pervasive, damaging myth within her own profession: the comforting, marketable idea that fluency could realistically be achieved quickly, through the right method, the right app, or sufficient raw natural talent, without the unglamorous, unavoidable necessity of sustained, patient, cumulative effort over a genuinely considerable period of time.\n\nDetermined to address this persistent misconception with hard, systematic evidence rather than mere personal opinion, she began, somewhat unusually for a working classroom teacher, systematically tracking detailed data on her own students over many subsequent years: total hours of study logged, specific methods and materials used, and eventual, carefully assessed proficiency outcomes measured through standardised, externally validated testing.\n\nWhat her accumulated, carefully compiled data revealed, once she had gathered a genuinely sufficient sample size to draw reasonably confident conclusions, both confirmed and meaningfully complicated the conventional wisdom she had set out, from the very beginning, specifically to examine. Total accumulated hours of study did indeed prove, as she had broadly expected from her own long professional experience, the single strongest overall predictor of eventual proficiency — a finding entirely consistent with decades of prior academic research on the subject. But the relationship, she discovered rather to her own surprise, was considerably more complex and interesting than a simple, straightforward linear one.\n\nStudents who distributed their total study hours consistently over a longer, more sustained period, rather than concentrating the same total number of hours into brief, intensive bursts, achieved measurably, significantly better outcomes for exactly the same overall total time invested. In the same vein, students who actively, deliberately incorporated regular real-world communicative practice — actually speaking with native speakers, rather than passively relying solely on textbook exercises and drills — progressed measurably, significantly faster than those who didn't, even when holding total study hours constant across the comparison.\n\nPerhaps her single most striking, if somewhat sobering, finding concerned the intermediate plateau that so many of her own students had long, and rather despairingly, reported experiencing. Her own data showed clearly that this widely reported subjective plateau did not, in fact, straightforwardly correspond to any genuine, measurable stalling in actual underlying proficiency gains at all; students continued making steady, measurable progress throughout the reported plateau period, even though they themselves, subjectively, felt they weren't. The plateau, her careful data strongly suggested, was primarily psychological rather than genuinely, objectively real — a perceptual artefact stemming directly from the fact that gains at the intermediate stage become considerably less immediately visible and satisfying than the dramatic, highly noticeable early gains that first attract and motivate most new learners.\n\nHer eventual, carefully compiled findings, once properly published and disseminated more widely within language-teaching circles, gave rise to a modest but genuinely meaningful shift in how she and several of her own professional colleagues subsequently approached teaching. Rather than promising unrealistic, quick results that would only foster later discouragement when they predictably failed to fully materialise, they began instead explicitly, honestly preparing students for the genuine plateau from the very outset — explaining candidly that it represented continued, real progress rather than any actual failure, and that persisting patiently through it, trusting the accumulating evidence rather than one's own often misleading subjective feelings, remained, by and large, the single most reliable path towards eventual, genuine fluency.",
        q: [
          mc("What myth did the instructor want to address?", ["That languages are easy.", "That fluency can be achieved quickly without sustained effort.", "That apps don't work at all.", "That talent doesn't matter."], 1, "'the comforting, marketable idea that fluency could realistically be achieved quickly… without… sustained, patient, cumulative effort'."),
          mc("What did she do to investigate this?", ["Nothing systematic.", "Systematically tracked data on her students' hours, methods and outcomes.", "Read only theoretical papers.", "Asked other teachers' opinions only."], 1, "'systematically tracking detailed data on her own students… total hours of study logged… eventual… proficiency outcomes'."),
          mc("What did she find about distributing study hours?", ["Concentrated bursts were better.", "Consistent distribution over time produced better outcomes for the same total hours.", "No difference at all.", "Total hours didn't matter."], 1, "'Students who distributed their total study hours consistently over a longer… period… achieved measurably… better outcomes'."),
          mc("What did she find about the 'intermediate plateau'?", ["It represented a genuine stall in progress.", "It was primarily psychological; students kept progressing despite feeling stuck.", "It didn't exist at all.", "It only affected weak students."], 1, "'this widely reported subjective plateau did not… correspond to any genuine, measurable stalling… students continued making steady, measurable progress'."),
          mc("How did her findings change her teaching approach?", ["No change.", "She began explicitly preparing students for the plateau as a sign of real progress.", "She stopped teaching entirely.", "She only taught advanced students."], 1, "'they began instead explicitly, honestly preparing students for the genuine plateau… explaining candidly that it represented continued, real progress'."),
          mc("What does she conclude is the most reliable path to fluency?", ["Talent alone.", "Persisting patiently and trusting accumulating evidence over subjective feelings.", "Using only apps.", "Avoiding real-world practice."], 1, "'persisting patiently through it, trusting the accumulating evidence… remained, by and large, the single most reliable path towards eventual, genuine fluency'."),
        ],
      },
      p6: {
        title: "Is intensive or gradual language learning better?",
        intro: "Cuatro personas debaten si es mejor aprender un idioma de forma intensiva o gradual.",
        texts: {
          A: "NADIA: I did an intensive immersion course, full-time for three months, and by and large it worked brilliantly for me. Total immersion forced my brain to adapt quickly out of sheer necessity. I wouldn't have had the patience for years of gradual, part-time study; the intensity itself was, for me personally, part of what actually made it work so effectively.",
          B: "TOM: I'd push back on generalising too broadly from any one person's individual experience. The research I've read suggests distributed, gradual practice over time generally beats intensive cramming for genuine long-term retention. Intensive courses might feel more dramatic and satisfying in the moment, but the gains don't always, reliably stick long-term in quite the same way.",
          C: "PRIYA: What matters most, surely, is what's actually realistically sustainable for a given person's specific life circumstances. Most working adults simply can't take three months off entirely for intensive immersion, however genuinely effective it might theoretically be for those who actually can. The 'best' method, in practice, is really whichever one a person can actually, realistically sustain consistently over time.",
          D: "SAM: My honest view is that this whole debate somewhat misses a more important point. What matters far more than intensive versus gradual, as such, is whether the learning genuinely involves real, authentic communicative practice rather than passive, purely receptive study. Get that crucial element right, and the specific pacing question becomes, frankly, considerably less important than people generally, mistakenly assume it to be.",
        },
        q: [
          mc("Who found intensive immersion worked brilliantly for them personally?", ["A", "B", "C", "D"], 0, "Nadia: 'I did an intensive immersion course… by and large it worked brilliantly for me'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing research on distributed practice?", ["A", "B", "C", "D"], 1, "Tom: 'distributed, gradual practice over time generally beats intensive cramming for genuine long-term retention'."),
          mc("Who argues the best method is whichever is realistically sustainable?", ["A", "B", "C", "D"], 2, "Priya: 'The \"best\" method, in practice, is really whichever one a person can actually, realistically sustain'."),
          mc("Who thinks the intensive-vs-gradual debate misses the point about authentic practice?", ["A", "B", "C", "D"], 3, "Sam: 'whether the learning genuinely involves real, authentic communicative practice'."),
        ],
      },
      p7: {
        title: "What thirty days actually builds",
        text: "Thirty consecutive days of any sustained, deliberate practice rarely feels, from the inside, like a particularly dramatic accomplishment. (1)___\n\nEach individual day, taken entirely on its own, typically involves fairly modest, unremarkable effort — an hour or two of focused, deliberate study, a handful of new collocations and structures properly learned, perhaps one further small stretch of accumulated fluency and confidence gained. (2)___ None of this, considered in isolation, day by single day, looks like much of anything at all.\n\nYet accumulated consistently, day after day, over a full thirty days, something genuinely substantial has quietly, almost imperceptibly been built. (3)___ Hundreds of individual collocations, dozens of grammatical structures, an entire accumulated vocabulary of specialised, topic-specific terms — all steadily, cumulatively absorbed through sustained, patient daily practice rather than any single dramatic breakthrough moment.\n\nThis is, in fact, precisely how genuine expertise in almost any sufficiently complex domain actually gets built. (4)___ Not through occasional, dramatic leaps of sudden inspired insight, however satisfying those occasional moments genuinely are when they do arrive, but through the patient, unglamorous, cumulative compounding of countless small, individually modest daily efforts.\n\nThe learner at the genuine thirty-day mark, looking back honestly rather than through the often rather harsh lens of daily self-assessment, has good, solid reason for genuine, well-earned satisfaction. (5)___ The distance actually covered, viewed properly in full, typically exceeds by a considerable margin what daily, close-up self-assessment alone would ever readily, comfortably suggest.\n\nWhat lies ahead remains, of course, considerable — this is honestly the halfway point of a demanding course, not remotely its end. (6)___ But the solid, genuine foundation now firmly in place makes everything that follows, from this point forward, considerably more achievable than it might otherwise, without it, ever have been.",
        options: [
          "Day to day, the whole process can feel almost invisible.",       // A -> gap 1
          "Small, unremarkable gains rarely announce themselves loudly.",   // B -> gap 2
          "The cumulative total, though, is genuinely considerable.",      // C -> gap 3
          "Expertise compounds; it is almost never simply granted.",       // D -> gap 4
          "Zoomed out, the picture looks considerably more impressive.",   // E -> gap 5
          "Plenty of demanding ground still lies ahead of any learner.",   // F -> gap 6
          "Thirty days of practice have never once produced any real change.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: día a día, el proceso es casi invisible."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las ganancias pequeñas no se anuncian."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el total acumulado es considerable."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la pericia se acumula, no se regala."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: visto de lejos, el cuadro impresiona más."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: queda terreno exigente por delante."),
        ],
      },
      p8: {
        title: "Four learners reflect on their first month of the C1 course",
        text: "Read what four learners say about their experience of the first thirty days of an advanced English course.\n\nA) NADIA: I'll be honest, the first week felt genuinely overwhelming — eight parts of Use of English every single day felt like a daunting, almost impossible task. By and large, though, it's become considerably more manageable now, and I've started noticing, almost without trying, collocations and idioms I'd never have caught before in my normal, everyday reading.\n\nB) TOM: What surprised me most was the vocabulary load specifically. Ten new words a day, across thirty days, is three hundred words — and bearing that in mind, I really do feel my reading has become noticeably richer and more precise as a direct result. First and foremost, though, it's the collocations that have genuinely, properly stuck with me, more than the individual words themselves.\n\nC) PRIYA: I struggled considerably with the cross-text matching exercises at first — comparing four different opinions felt like a genuinely daunting task early on. It's part and parcel of C1-level reading, I've come to firmly accept, and by and large I've gradually gotten better at it, week by week, through sheer repeated practice.\n\nD) SAM: The speaking practice has been, for me personally, by far the most valuable single part of this whole course. Structuring my own opinions clearly, using proper discourse markers instead of just basic, simple connectors — that shift alone has given rise to a genuinely marked improvement in how I now communicate more generally, well beyond just English specifically.\n",
        q: [
          mc("Who found the first week overwhelming but has since found it manageable?", ["A", "B", "C", "D"], 0, "Nadia: 'the first week felt genuinely overwhelming… By and large, though, it's become considerably more manageable'."),
          mc("Who was surprised by the vocabulary load specifically?", ["A", "B", "C", "D"], 1, "Tom: 'What surprised me most was the vocabulary load specifically'."),
          mc("Who struggled with cross-text matching exercises at first?", ["A", "B", "C", "D"], 2, "Priya: 'I struggled considerably with the cross-text matching exercises at first'."),
          mc("Who found speaking practice the most valuable part of the course?", ["A", "B", "C", "D"], 3, "Sam: 'The speaking practice has been, for me personally, by far the most valuable single part'."),
          mc("Who now notices collocations and idioms in everyday reading?", ["A", "B", "C", "D"], 0, "Nadia: 'I've started noticing… collocations and idioms I'd never have caught before'."),
          mc("Who says collocations, more than individual words, have genuinely stuck?", ["A", "B", "C", "D"], 1, "Tom: 'it's the collocations that have genuinely, properly stuck with me'."),
          mc("Who has come to accept difficulty as part and parcel of C1-level reading?", ["A", "B", "C", "D"], 2, "Priya: 'It's part and parcel of C1-level reading, I've come to firmly accept'."),
          mc("Who says discourse markers gave rise to a marked improvement in communication generally?", ["A", "B", "C", "D"], 3, "Sam: 'that shift alone has given rise to a genuinely marked improvement in how I now communicate'."),
          mc("Who calculated that ten words a day over thirty days is three hundred words?", ["A", "B", "C", "D"], 1, "Tom: 'Ten new words a day, across thirty days, is three hundred words'."),
          mc("Who has gradually improved week by week through repeated practice?", ["A", "B", "C", "D"], 2, "Priya: 'by and large I've gradually gotten better at it, week by week'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre el aprendizaje se plantearon dos ideas:\n· intensive, immersive learning produces the fastest results (el aprendizaje intensivo es el más rápido)\n· gradual, consistent daily practice produces the most lasting results (la práctica gradual y constante es más duradera)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos léxicos de la semana (colocaciones, idioms, phrasal verbs formales o binomios). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned about learning' — reflexiona sobre tu propio proceso de aprendizaje del inglés hasta ahora.\n· CARTA a un/a amigo/a que quiere empezar un curso de inglés avanzado: anímale y comparte lo que has aprendido en tu primer mes.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two language teachers discussing student progress. Woman: By and large, students who study consistently every day outperform those who cram intensively, then stop. Man: That's exactly what the research seems to bear out, in my experience too. Extract Two. You hear two students discussing an advanced course. Woman: The first two weeks felt like an uphill battle, honestly, but it's become part and parcel of my daily routine now. Man: Same here. First and foremost, I've noticed my reading has genuinely improved the most. Extract Three. You hear a linguist talking about vocabulary acquisition. Woman: Vocabulary growth stems largely from repeated, varied exposure, not from simply memorising isolated word lists. Man: So context accounts for most of the actual learning, then, rather than rote memorisation alone?", [
      mc("1. What does the woman say about consistent daily study?", ["It's worse than cramming.", "Students who study consistently outperform those who cram then stop.", "It makes no difference."], 1, "'students who study consistently every day outperform those who cram intensively'."),
      mc("2. What does the man say about the research?", ["It contradicts her.", "It bears out what she said.", "It's inconclusive."], 1, "'That's exactly what the research seems to bear out'."),
      mc("3. How did the woman describe the first two weeks?", ["Easy.", "An uphill battle, now part of her routine.", "Boring."], 1, "'felt like an uphill battle, honestly, but it's become part and parcel of my daily routine now'."),
      mc("4. What has the man noticed has improved most?", ["Nothing.", "His reading.", "His writing."], 1, "'my reading has genuinely improved the most'."),
      mc("5. What does the linguist say vocabulary growth stems from?", ["Memorising word lists.", "Repeated, varied exposure.", "Grammar study."], 1, "'stems largely from repeated, varied exposure'."),
      mc("6. What does the man suggest accounts for most learning?", ["Rote memorisation.", "Context.", "Nothing in particular."], 1, "'context accounts for most of the actual learning'."),
    ]),

    ...speakingParts({ p1: "cómo llevas tu propio proceso de aprendizaje del inglés y qué te ha resultado más difícil hasta ahora", p2: "dos imágenes del aprendizaje (alguien estudiando intensamente rodeado de libros y alguien practicando conversación relajadamente con otra persona): compáralas y especula sobre cuál aprende mejor", p3: "qué es lo más importante para dominar un idioma (la constancia, la práctica real, el vocabulario, la gramática, la paciencia): comentadlo y elegid lo esencial", p4: "el aprendizaje de idiomas: si es mejor el estudio intensivo o gradual, si el 'estancamiento intermedio' es real y qué consejo darías a alguien que empieza este mismo curso" }),

    SUMMARY("¡Mitad del curso C1 completada! (Día 30)", [
      "Dominas las colocaciones formales de verbo+sustantivo, los idioms académicos/periodísticos, los phrasal verbs formales y los binomios fijos/colocaciones adjetivo+sustantivo.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con temas de gastronomía, deporte, música y educación superior.",
      "Llevas 6 de 12 semanas: ¡la mitad exacta del curso C1 Advanced! Ahora, el mini-simulacro de la semana.",
      "La semana que viene: repaso INTEGRAL de todo lo visto hasta ahora (semanas 1-6) antes de continuar con la segunda mitad del curso.",
    ]),
    INFO("Mini-simulacro de la Semana 6 — Mitad del curso", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 7. ¡Enhorabuena por llegar a la mitad del C1 Advanced!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Las colocaciones e idioms de registro avanzado · La gastronomía y la cultura alimentaria",
  description: "Colocaciones formales de verbo+sustantivo, idioms de registro académico/periodístico, phrasal verbs formales, y binomios fijos/colocaciones adjetivo+sustantivo, con el hilo de la gastronomía, la globalización, el deporte, la música y la educación superior. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
