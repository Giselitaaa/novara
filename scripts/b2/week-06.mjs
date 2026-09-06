/**
 * B2 First · Semana 6 — "Relativas, cláusulas y énfasis".
 * Gramática: oraciones de relativo (especificativas, explicativas, con
 * preposición y cuantificador), cláusulas de participio, oraciones enfáticas
 * (cleft: It is… that / What…) e inversión enfática.
 * Cada día, las 4 destrezas con el formato real del B2.
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

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, in my opinion, the way I see it, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they appear to be … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 26 ─────────────────────────
const DAY26 = {
  title: "Día 26 — Oraciones de relativo · Los lugares y las ciudades",
  description: "Relativas especificativas, explicativas, con preposición y con cuantificador (many of whom). Vocabulario de lugares. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Usar todos los tipos de relativa, incluidas las de preposición y cuantificador.",
    summary: "Relativas; lugares/ciudades; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'the place which I live'.", "'people which'.", "'a lot of them who'."],
    reviewPrompts: ["¿'the town in which'?", "¿'many of whom' o 'many of them who'?"],
  },
  items: [
    TEXT("🔁 Semana 6. Hoy las ORACIONES DE RELATIVO (todos los tipos, incluidas las de preposición y cuantificador). Vocabulario: los LUGARES y las CIUDADES."),
    GRAMMAR("Oraciones de relativo", `ESPECIFICATIVAS (necesarias, SIN comas): who (personas), which/that (cosas), where (lugar), whose (posesión), when (tiempo). The man who called. The town where I grew up.
· En especificativas se puede omitir el relativo si es objeto: The book (that) I read.
EXPLICATIVAS (información extra, CON comas, NO 'that'): My brother, who lives in Rome, is a chef. The book, which was a bestseller, …
RELATIVAS CON PREPOSICIÓN:
· Informal: the house (that) I live in. · Formal: the house in which I live. The people to whom I spoke.
CON CUANTIFICADOR (formal): + of whom / of which: I have many friends, most of whom are teachers. He gave three reasons, none of which convinced me.
⚠️ ❌ people which → who. ❌ many of them who → many of whom. En explicativas: comas y no 'that'.`),
    WARN("Errores típicos del hispanohablante", "· ❌ the people which live here → ✅ who live here.\n· ❌ the town which I live → ✅ where I live / in which I live.\n· ❌ my sister that is a doctor (explicativa) → ✅ my sister, who is a doctor.\n· ❌ all of them who → ✅ all of whom."),
    grammarEx("Use of English — Oraciones de relativo", "Completa con el relativo correcto.", [
      fb("The woman ___ lives next door is a lawyer. (persona, especificativa)", ["who", "that"], "who/that."),
      fb("Paris, ___ is the capital of France, is beautiful. (explicativa)", ["which"], "explicativa → which."),
      fb("That's the village ___ I was born. (lugar)", ["where"], "where."),
      fb("He's the author ___ books I love. (posesión)", ["whose"], "whose."),
      mc("Choose (formal):", ["The person who I spoke to.", "The person to whom I spoke.", "The person to who I spoke."], 1, "to whom (formal)."),
      fb("I invited ten guests, most of ___ came. (cuantificador, personas)", ["whom"], "most of whom."),
      mc("Choose:", ["He made three points, none of which were true.", "He made three points, none of them were true.", "He made three points, that none were true."], 0, "none of which."),
    ]),
    GRAMMAR("Vocabulario del día — Los lugares y las ciudades", "Léxico de lugares (B2)."),
    deck("B2 S6D26 — Lugares y ciudades", [
      ["bustling", "bullicioso/a / muy animado", "It's a bustling market town.", "adjetivo", "ˈbʌslɪŋ"],
      ["run-down", "deteriorado/a / venido a menos", "The area used to be run-down.", "adjetivo", "ˌrʌn ˈdaʊn"],
      ["outskirts", "afueras", "They live on the outskirts of the city.", "sustantivo", "ˈaʊtskɜːts"],
      ["landmark", "punto de referencia / monumento", "The tower is a famous landmark.", "sustantivo", "ˈlændmɑːk"],
      ["quaint", "pintoresco/a", "It's a quaint little fishing village.", "adjetivo", "kweɪnt"],
      ["overcrowded", "masificado/a", "The beaches get overcrowded in summer.", "adjetivo", "ˌəʊvəˈkraʊdɪd"],
      ["regenerate", "regenerar / revitalizar", "The docklands have been regenerated.", "verbo", "rɪˈdʒenəreɪt"],
      ["cosmopolitan", "cosmopolita", "It's a lively, cosmopolitan city.", "adjetivo", "ˌkɒzməˈpɒlɪtən"],
      ["residential", "residencial", "It's a quiet residential area.", "adjetivo", "ˌrezɪˈdenʃl"],
      ["thriving", "próspero/a / floreciente", "The town has a thriving arts scene.", "adjetivo", "ˈθraɪvɪŋ"],
    ]),
    vocabEx("Vocabulario — Los lugares y las ciudades", "Elige la opción correcta.", [
      mc("A place full of noise and lively activity is ___.", ["bustling", "run-down", "residential"], 0, "bustling."),
      mc("A neglected place in poor condition is ___.", ["run-down", "thriving", "quaint"], 0, "run-down."),
      mc("The areas around the edge of a city are the ___.", ["outskirts", "landmark", "outskirts"], 0, "outskirts."),
      mc("An attractively old-fashioned, charming place is ___.", ["quaint", "overcrowded", "cosmopolitan"], 0, "quaint."),
      mc("A famous building used to recognise a place is a ___.", ["landmark", "outskirts", "residential"], 0, "landmark."),
      mc("A place with people and cultures from all over the world is ___.", ["cosmopolitan", "run-down", "quaint"], 0, "cosmopolitan."),
    ]),

    ...uoe({
      p1: {
        title: "The city that reinvented itself",
        text: "Few urban stories are as remarkable as that of Bilbao, a city (1)___ was, for much of the twentieth century, a declining industrial port. Its shipyards had closed, its river was polluted, and its once-(2)___ centre had become run-down and neglected. Then, in the 1990s, the city made a bold decision that would transform its (3)___. It commissioned a spectacular new art museum, a building so striking that it became an instant (4)___, drawing visitors from all over the world. What followed is now studied by city planners everywhere. The museum, around (5)___ an entire cultural quarter grew up, sparked a wave of regeneration. The polluted river was cleaned, run-down districts were (6)___, and a new metro system was built. Today, Bilbao is a (7)___, cosmopolitan city, most of (8)___ residents can barely remember the grim industrial place it used to be. Its transformation is a powerful reminder that even the most declining of cities can, with vision and courage, be reborn.",
        q: [
          mc("(1)", ["which", "who", "where", "whose"], 0, "cosa → which."),
          mc("(2)", ["thriving", "run-down", "quaint", "residential"], 0, "'once-thriving centre'."),
          mc("(3)", ["fortunes", "luck", "chances", "wealth"], 0, "'transform its fortunes'."),
          mc("(4)", ["landmark", "outskirt", "sight", "view"], 0, "'an instant landmark'."),
          mc("(5)", ["which", "that", "whom", "where"], 0, "'around which… grew up'."),
          mc("(6)", ["regenerated", "regenerate", "regeneration", "regenerating"], 0, "'were regenerated'."),
          mc("(7)", ["thriving", "run-down", "declining", "overcrowded"], 0, "'a thriving… city'."),
          mc("(8)", ["whose", "which", "whom", "that"], 2, "'most of whom residents' → whose (posesión: whose residents)."),
        ],
      },
      p2: {
        title: "The trouble with tourism",
        text: "There is a bitter irony at the heart of modern tourism. The very places (1)___ people most want to visit are often ruined by the crowds (2)___ visit them. A quaint fishing village, (3)___ charm lies precisely in its peace and authenticity, becomes overcrowded and commercialised the moment it becomes popular. Beautiful old cities, (4)___ streets were built for a handful of residents, groan under the weight of millions of visitors. The locals, many of (5)___ can no longer afford to live in their own city centres, are pushed out to the outskirts. This does not mean tourism is (6)___ bad — it brings enormous benefits, and few of us would give up our own right to travel. But it does mean that the places we love need to be protected, sometimes even from the very people (7)___ love them. The challenge, (8)___ no city has yet fully solved, is to welcome visitors without destroying the very thing they came to see.",
        q: [
          fb("(1)", ["that", "which"], "'the places that people want to visit'."),
          fb("(2)", ["who", "that"], "'the crowds who/that visit them'."),
          fb("(3)", ["whose"], "'whose charm lies'."),
          fb("(4)", ["whose"], "'whose streets were built'."),
          fb("(5)", ["whom"], "'many of whom can no longer afford'."),
          fb("(6)", ["entirely", "wholly", "all"], "'not entirely bad'."),
          fb("(7)", ["who", "that"], "'the very people who love them'."),
          fb("(8)", ["which"], "'The challenge, which no city has solved' (explicativa)." ),
        ],
      },
      p3: {
        title: "The rise of the fifteen-minute city",
        text: "A powerful new idea is (1)___ the way we think about urban planning: the 'fifteen-minute city'. The concept is (2)___ simple. In an ideal city, the argument goes, everything a resident needs — shops, schools, work, parks, healthcare — should be reachable within a fifteen-minute walk or cycle from their home. For much of the last century, cities were designed around the car, with (3)___ consequences: sprawling suburbs, long commutes, and a crippling (4)___ on driving. The fifteen-minute city turns this thinking on its head. By bringing daily life back within easy (5)___ reach, it promises less pollution, healthier residents, and the revival of the local, (6)___ neighbourhood. Critics argue that the idea is easier to (7)___ in a dense old city than in a sprawling modern one, and that it risks becoming a luxury for the wealthy. But its growing popularity reflects a widespread (8)___ that the car-dominated city of the twentieth century may have been a mistake we are only now beginning to correct.",
        items: [
          { root: "transform", accepted: ["transforming"], hint: "'is transforming the way' → transforming." },
          { root: "deceive", accepted: ["deceptively"], hint: "'deceptively simple' → deceptively." },
          { root: "disaster", accepted: ["disastrous"], hint: "adjetivo → disastrous." },
          { root: "depend", accepted: ["dependence"], hint: "sustantivo → dependence." },
          { root: "walk", accepted: ["walking"], hint: "'walking reach' → walking." },
          { root: "thrive", accepted: ["thriving"], hint: "'the thriving neighbourhood' → thriving." },
          { root: "achieve", accepted: ["achieve"], hint: "'easier to achieve' (verbo)." },
          { root: "recognise", accepted: ["recognition"], hint: "sustantivo → recognition." },
        ],
      },
      p4: {
        title: "Transformaciones — relativas",
        items: [
          { s1: "I spoke to a man. He turned out to be the mayor.", key: "WHOM", s2: "The man ___ turned out to be the mayor.", accepted: ["to whom I spoke", "I spoke to"], explanation: "to whom (formal)." },
          { s1: "The town has changed a lot. I grew up there.", key: "WHERE", s2: "The town ___ has changed a lot.", accepted: ["where I grew up"], explanation: "where." },
          { s1: "She has three brothers. All of them are doctors.", key: "WHOM", s2: "She has three brothers, ___ are doctors.", accepted: ["all of whom"], explanation: "all of whom." },
          { s1: "This is the museum. Its architect became world-famous.", key: "WHOSE", s2: "This is the museum ___ became world-famous.", accepted: ["whose architect"], explanation: "whose." },
          { s1: "He gave several excuses. None of them was true.", key: "WHICH", s2: "He gave several excuses, ___ was true.", accepted: ["none of which"], explanation: "none of which." },
          { s1: "That's the café. We first met in it.", key: "WHICH", s2: "That's the café ___ we first met.", accepted: ["in which"], explanation: "in which." },
        ],
      },
      p5: {
        title: "The village that refused to die",
        text: "For decades, the tiny mountain village of San Pietro seemed destined for the fate that has befallen thousands of rural communities across Europe: slow, inexorable death. Its young people, seeing no future in a place with no jobs and few amenities, left for the cities. Its population, once several thousand, dwindled to a few hundred, most of them elderly. Houses stood empty and crumbling. The single school closed. It was, by any conventional measure, a community in its final stages.\n\nWhat saved San Pietro was an idea so simple that it seems, in retrospect, obvious — though at the time it was regarded as faintly absurd. The village's mayor, a determined woman who refused to preside over its extinction, hit upon the notion of selling the abandoned houses, of which there were now dozens, for the symbolic price of a single euro. There was, of course, a condition: any buyer had to commit to renovating their property within a fixed period, thereby breathing new life, and new investment, into the decaying village.\n\nThe response astonished everyone. Applications flooded in from across the world — from young couples priced out of expensive cities, from artists seeking cheap studio space, from people simply longing for a slower, more connected way of life. Within a few years, San Pietro had been transformed. The empty houses, many of which had stood derelict for a generation, were lovingly restored. Cafés and small workshops opened. Crucially, families with children arrived, and the school, against all expectation, reopened its doors.\n\nSan Pietro is not, its mayor is careful to point out, a fairy tale. The newcomers had to be genuinely integrated, not merely tolerated; old tensions and new ones had to be patiently managed. But the village lives, and its story has inspired dozens of other dying communities to attempt the same. It is a powerful reminder of something we too easily forget in an age obsessed with growth and scale: that decline is not always destiny, that even the smallest and most forgotten of places can find a future, and that all it sometimes takes is one person stubborn enough to refuse to give up.",
        q: [
          mc("What fate seemed to await San Pietro?", ["Sudden growth.", "Slow death, like many rural communities.", "A natural disaster.", "Becoming a tourist resort."], 1, "'slow, inexorable death'."),
          mc("What idea saved the village?", ["Building a factory.", "Selling abandoned houses for one euro.", "Attracting tourists.", "Government money."], 1, "'selling the abandoned houses… for… a single euro'."),
          mc("What condition came with buying a house?", ["Living there full-time.", "Renovating it within a fixed period.", "Speaking Italian.", "Paying tax."], 1, "'commit to renovating their property within a fixed period'."),
          mc("Who applied to buy the houses?", ["Only locals.", "People from across the world.", "Only the wealthy.", "No one."], 1, "'Applications flooded in from across the world'."),
          mc("What notable thing happened as a result?", ["The village closed.", "The school reopened.", "Everyone left.", "Prices rose sharply."], 1, "'the school… reopened its doors'."),
          mc("What broader lesson does the writer draw?", ["Growth is everything.", "Decline is not always destiny.", "Small places must die.", "Only cities matter."], 1, "'decline is not always destiny'."),
        ],
      },
      p6: {
        title: "The disappearing high street",
        text: "The traditional high street, once the beating heart of every town, is in crisis. (1)___ Where there were once butchers, bakers and family-run shops, there are now empty windows and charity stores.\n\nThe reasons are well known. (2)___ Online shopping, offering greater choice and lower prices, has drawn customers away from the physical shops that cannot possibly compete.\n\nMany have concluded that the high street is simply doomed, an outdated relic of a pre-internet age. (3)___ But this gloomy verdict may be premature. Across the country, some high streets are quietly reinventing themselves, and offering a glimpse of a possible future.\n\nThe key insight is that people no longer come to the high street primarily to buy things, which they can do more easily online. (4)___ They come for experiences that the internet cannot provide: a good meal, a haircut, a class, a conversation, a sense of community.\n\nThe high streets that are thriving, therefore, are those that have understood this shift. (5)___ They have replaced the shops selling goods with places offering experiences — cafés, gyms, workshops, community spaces. (6)___ The high street of the future, it seems, will survive not by competing with the internet at what the internet does best, but by offering the one thing it never can: a real, physical place for human beings to gather.",
        options: [
          "Up and down the country, the story is depressingly similar.",  // A -> gap 1
          "The convenience of the internet has proved impossible to resist.", // B -> gap 2
          "The obituaries, however, may have been written too soon.",     // C -> gap 3
          "What they want now is something quite different.",             // D -> gap 4
          "These places have grasped the fundamental change in behaviour.", // E -> gap 5
          "The result is a high street transformed but very much alive.",  // F -> gap 6
          "The high street has never faced any difficulties at all.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la historia se repite por todo el país."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la comodidad de internet es irresistible."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: quizá se escribió pronto su epitafio."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: quieren algo distinto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: han captado el cambio de conducta."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una calle transformada pero viva."),
        ],
      },
      p7: {
        title: "Four people describe where they live",
        text: "Read what four people say about the place they call home.\n\nA) NADIA: I live in a tiny, quaint village in the mountains, which most people would find impossibly remote and quiet. To me, it's paradise. Everyone knows everyone; there's a real sense of community you simply can't find in a city. Yes, I have to drive an hour for anything, but I wouldn't swap the peace for anything.\n\nB) TOM: I moved to a big, bustling, cosmopolitan city precisely because I couldn't stand the village I grew up in, where nothing ever happened and everyone knew your business. Here, I'm gloriously anonymous. There's a gallery, a concert, a new restaurant every night. The energy is addictive. I'd be bored to death anywhere else.\n\nC) PRIYA: My neighbourhood was pretty run-down when I moved here — cheap, but neglected. Over the last ten years, it's been completely regenerated. New cafés, a thriving arts scene, young families moving in. It's wonderful in many ways, but I do worry that the very people who made it interesting are now being priced out. Success has its cost.\n\nD) SAM: I live on the outskirts, in a quiet residential area that's neither city nor country. Some people find it dull — no nightlife, no drama. But it's affordable, it's green, it's safe, and it's a fifteen-minute train ride from everything the city offers. Honestly, for raising a family, I think it's the perfect compromise.",
        q: [
          mc("Who values the strong sense of community in a small place?", ["A", "B", "C", "D"], 0, "Nadia: 'a real sense of community'."),
          mc("Who loves the energy and anonymity of a big city?", ["A", "B", "C", "D"], 1, "Tom: 'gloriously anonymous… The energy is addictive'."),
          mc("Who has seen their area regenerated but worries about the cost?", ["A", "B", "C", "D"], 2, "Priya: 'completely regenerated… being priced out'."),
          mc("Who sees their location as an ideal compromise?", ["A", "B", "C", "D"], 3, "Sam: 'the perfect compromise'."),
          mc("Who left a village because nothing ever happened there?", ["A", "B", "C", "D"], 1, "Tom: 'the village I grew up in, where nothing ever happened'."),
          mc("Who accepts inconvenience for the sake of peace?", ["A", "B", "C", "D"], 0, "Nadia: 'I have to drive an hour… wouldn't swap the peace'."),
          mc("Who lives somewhere that is neither city nor country?", ["A", "B", "C", "D"], 3, "Sam: 'neither city nor country'."),
          mc("Who worries that success is displacing the original residents?", ["A", "B", "C", "D"], 2, "Priya: 'the very people who made it interesting… priced out'."),
          mc("Who describes their home as remote but paradise?", ["A", "B", "C", "D"], 0, "Nadia: 'impossibly remote… it's paradise'."),
          mc("Who prioritises a safe, green place for a family?", ["A", "B", "C", "D"], 3, "Sam: 'for raising a family… the perfect compromise'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is better to live in a big city than in a small town or village.'\nComenta estos dos aspectos y añade uno propio:\n1. opportunities (las oportunidades)\n2. quality of life (la calidad de vida)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO para una revista de viajes: describe una ciudad o pueblo que conozcas bien y explica qué lo hace especial.\n· INFORME para el ayuntamiento sobre cómo mejorar tu barrio: describe los problemas y propón soluciones.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: The area where I grew up has completely changed — it's really thriving now. Two. Man: It's a lovely, quaint little town, but honestly, it gets far too overcrowded in summer. Three. Woman: We live on the outskirts, which suits us — quiet, but close to the city. Four. Man: The old docks, which used to be run-down, have been beautifully regenerated. Five. Woman: I love the buzz of a big, cosmopolitan city; I could never live in the countryside. Six. Man: There's a famous landmark on the hill that you can see from anywhere in the city. Seven. Woman: The village, whose population had fallen to almost nothing, has come back to life. Eight. Man: It's a quiet residential neighbourhood — nothing much happens, and that's how I like it.", [
      mc("1. How has the woman's area changed?", ["It declined.", "It's now thriving.", "It's the same."], 1, "'really thriving now'."),
      mc("2. What is the man's complaint about the town?", ["It's ugly.", "It gets overcrowded in summer.", "It's expensive."], 1, "'far too overcrowded in summer'."),
      mc("3. Why does living on the outskirts suit the woman?", ["It's cheap.", "It's quiet but close to the city.", "It's lively."], 1, "'quiet, but close to the city'."),
      mc("4. What has happened to the old docks?", ["They closed.", "They've been regenerated.", "They're run-down."], 1, "'have been beautifully regenerated'."),
      mc("5. What does the woman love?", ["The countryside.", "The buzz of a big city.", "Small towns."], 1, "'the buzz of a big, cosmopolitan city'."),
      mc("6. What can be seen from anywhere in the city?", ["A park.", "A famous landmark on the hill.", "The sea."], 1, "'a famous landmark on the hill'."),
      mc("7. What has happened to the village?", ["It died.", "It's come back to life.", "It grew huge."], 1, "'has come back to life'."),
      mc("8. What does the man like about his neighbourhood?", ["The nightlife.", "That nothing much happens.", "The shops."], 1, "'nothing much happens, and that's how I like it'."),
    ]),

    ...speakingParts({ p1: "dónde vives, qué te gusta y qué cambiarías de tu ciudad o pueblo", p2: "dos lugares distintos (una gran ciudad bulliciosa y un pueblo tranquilo): compáralos y di dónde preferirías vivir", p3: "qué necesita un buen barrio (buen transporte, zonas verdes, seguridad, tiendas, sentido de comunidad): comentadlo y elegid lo más importante", p4: "los lugares y las ciudades: si es mejor la ciudad o el campo, si el turismo estropea los lugares y cómo mejorar dónde vivimos" }),

    SUMMARY("Resumen del Día 26", [
      "Relativas: who/which/that/where/whose/when. Especificativas sin comas; explicativas con comas y sin 'that'.",
      "Con preposición (in which, to whom) y con cuantificador (many of whom, none of which).",
      "Vocabulario de lugares. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 27", "Escribe 4 frases con relativas de distintos tipos sobre tu ciudad. Repasa las flashcards. Mañana: las cláusulas de participio."),
  ],
};

// ───────────────────────── DÍA 27 ─────────────────────────
const DAY27 = {
  title: "Día 27 — Cláusulas de participio · La naturaleza y el paisaje",
  description: "Cláusulas de participio (-ing/-ed) para causa, tiempo y relativa reducida. Vocabulario de paisaje. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Condensar frases con cláusulas de participio (más formales y fluidas).",
    summary: "Cláusulas de participio; el paisaje; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["participio activo/pasivo mal.", "sujeto colgante.", "'Having ate'."],
    reviewPrompts: ["¿'Feeling tired, I…' = ?", "¿Participio pasivo para relativa reducida?"],
  },
  items: [
    TEXT("🔁 Repaso: relativas. Hoy las CLÁUSULAS DE PARTICIPIO: condensar dos frases en una, más formal y fluida. Vocabulario: la NATURALEZA y el PAISAJE."),
    GRAMMAR("Cláusulas de participio", `Cuando dos frases comparten sujeto, una puede reducirse a una cláusula de participio.
· -ING (activo, simultáneo o causa): Feeling tired, I went to bed. (= Because I felt tired…) Walking home, I saw an old friend. (= While I was walking…)
· HAVING + participio (acción anterior): Having finished my work, I relaxed. (= After I had finished…)
· -ED (pasivo): Built in 1890, the bridge is still in use. (= The bridge, which was built…) Shocked by the news, she sat down.
· RELATIVAS REDUCIDAS: the people waiting outside (= who are waiting); the report written yesterday (= which was written).
⚠️ El sujeto de la cláusula y de la principal debe ser el MISMO (evita el 'sujeto colgante': ❌ Walking home, the rain started).`),
    WARN("Errores típicos del hispanohablante", "· ❌ Walking home, the rain started (sujetos distintos) → ✅ Walking home, I got caught in the rain.\n· ❌ Having ate → ✅ Having eaten.\n· Activo → -ing; pasivo → -ed (Built in 1890…).\n· 'the man sitting there' (= who is sitting)."),
    grammarEx("Use of English — Cláusulas de participio", "Completa o transforma.", [
      fb("___ (feel) tired, I decided to rest. (causa)", ["Feeling"], "-ing (causa)."),
      fb("___ (finish) my homework, I went out. (acción anterior)", ["Having finished"], "Having + participio."),
      fb("___ (build) in 1890, the bridge is still used. (pasivo)", ["Built"], "-ed (pasivo)."),
      mc("Choose (reduced relative):", ["The people who waiting outside.", "The people waiting outside.", "The people waited outside are cold."], 1, "reduced relative activa."),
      fb("The report ___ (write) last week was excellent. (pasiva reducida)", ["written"], "written (= which was written)."),
      mc("Choose (correct, no dangling subject):", ["Walking home, the rain started.", "Walking home, I got wet.", "Walking home, it rained on me."], 1, "mismo sujeto."),
      fb("___ (not/know) what to say, she remained silent. (causa negativa)", ["Not knowing"], "Not knowing (negativa)."),
    ]),
    GRAMMAR("Vocabulario del día — La naturaleza y el paisaje", "Léxico de paisaje (B2)."),
    deck("B2 S6D27 — Naturaleza y paisaje", [
      ["breathtaking", "impresionante", "The scenery was breathtaking.", "adjetivo", "ˈbreθteɪkɪŋ"],
      ["rugged", "escarpado/a / agreste", "The coast is wild and rugged.", "adjetivo", "ˈrʌɡɪd"],
      ["lush", "exuberante / frondoso", "The valley was green and lush.", "adjetivo", "lʌʃ"],
      ["barren", "árido/a / yermo", "It's a barren, rocky landscape.", "adjetivo", "ˈbærən"],
      ["remote", "remoto/a / aislado", "It's a remote wilderness.", "adjetivo", "rɪˈməʊt"],
      ["wilderness", "naturaleza salvaje", "We hiked into the wilderness.", "sustantivo", "ˈwɪldənəs"],
      ["preserve", "conservar / proteger", "We must preserve these forests.", "verbo", "prɪˈzɜːv"],
      ["habitat", "hábitat", "Pollution destroys their habitat.", "sustantivo", "ˈhæbɪtæt"],
      ["unspoilt", "virgen / sin estropear", "It's an unspoilt beach.", "adjetivo", "ˌʌnˈspɔɪlt"],
      ["scenery", "paisaje", "The mountain scenery is stunning.", "sustantivo", "ˈsiːnəri"],
    ]),
    vocabEx("Vocabulario — La naturaleza y el paisaje", "Elige la opción correcta.", [
      mc("Wild, rocky and uneven land is described as ___.", ["rugged", "lush", "barren"], 0, "rugged."),
      mc("Green land with plenty of thick vegetation is ___.", ["lush", "barren", "unspoilt"], 0, "lush."),
      mc("Dry, empty land where little grows is ___.", ["barren", "lush", "rugged"], 0, "barren."),
      mc("Natural land untouched by human activity is ___.", ["unspoilt", "remote", "rugged"], 0, "unspoilt."),
      mc("A large wild natural area far from towns is a ___.", ["wilderness", "habitat", "scenery"], 0, "wilderness."),
      mc("To protect something and keep it in its natural state is to ___ it.", ["preserve", "destroy", "remote"], 0, "preserve."),
    ]),

    ...uoe({
      p1: {
        title: "The healing power of nature",
        text: "For centuries, poets and philosophers have (1)___ that nature is good for the soul. Now, a growing body of scientific research is proving them (2)___. Studies have shown that spending even a short time in a natural setting — a park, a forest, a stretch of unspoilt coast — measurably (3)___ stress, lowers blood pressure and improves mood. Patients in hospital rooms with a view of trees, one famous study found, recover faster than those (4)___ at a brick wall. The reasons are not fully understood, but the effect is (5)___ enough that doctors in some countries now formally 'prescribe' time in nature. In our increasingly urban, screen-dominated lives, (6)___ many of us spend almost all our time indoors, this is a message worth taking (7)___ heart. You do not need a breathtaking wilderness; a nearby patch of green will do. (8)___ trapped in a stressful day, step outside for a few minutes. Your body and mind will thank you.",
        q: [
          mc("(1)", ["claimed", "said", "argued", "stated"], 2, "'have argued that nature is good' (o claimed)."),
          mc("(2)", ["right", "correct", "true", "well"], 0, "'proving them right'."),
          mc("(3)", ["reduces", "lowers", "cuts", "drops"], 0, "'reduces stress'."),
          mc("(4)", ["looking", "staring", "gazing", "watching"], 0, "'those looking at a brick wall'."),
          mc("(5)", ["strong", "powerful", "clear", "big"], 2, "'the effect is clear enough'."),
          mc("(6)", ["where", "which", "when", "that"], 0, "'lives, where many spend all their time'."),
          mc("(7)", ["to", "at", "in", "on"], 0, "'take to heart'."),
          mc("(8)", ["Feeling", "Felt", "Feel", "Having felt"], 0, "'Feeling trapped… step outside'."),
        ],
      },
      p2: {
        title: "The last wild places",
        text: "There is something in the human spirit (1)___ responds deeply to genuine wilderness — to places (2)___ have never been shaped by human hands. Standing in a truly remote landscape, far (3)___ any road or building, most people feel a mixture of awe and humility that is increasingly rare in the modern world. Yet such places are vanishing fast. (4)___ pressed on all sides by farming, mining and development, the world's last great wildernesses are shrinking every year. Some argue that this does not matter — that land is more useful (5)___ crops or houses than left empty. But this misses something profound. The wild places are not (6)___ useful; they are essential to the health of the planet and, arguably, to the health of the human soul. (7)___ preserved these irreplaceable landscapes, future generations will have something we can barely imagine: the chance to stand, as our ancestors did, in a place utterly untouched by human hands. (8)___ we allow them to disappear, that chance will be gone forever.",
        q: [
          fb("(1)", ["that", "which"], "'something… that responds'."),
          fb("(2)", ["that", "which"], "'places that have never been shaped'."),
          fb("(3)", ["from"], "'far from any road'."),
          fb("(4)", ["Being"], "'Being pressed on all sides' (pasiva participio)."),
          fb("(5)", ["as"], "'more useful as crops or houses'."),
          fb("(6)", ["just", "merely", "only", "simply"], "'not just useful'."),
          fb("(7)", ["Having"], "'Having preserved these landscapes'."),
          fb("(8)", ["If"], "'If we allow them to disappear'."),
        ],
      },
      p3: {
        title: "Why we need the countryside",
        text: "As the world's population becomes ever more (1)___, with the majority of humanity now living in cities, it is easy to imagine that the countryside no longer matters. This would be a profound (2)___. Cities, for all their (3)___, depend utterly on the rural land that surrounds them. It is there that our food is grown, our water is (4)___, and much of the oxygen we breathe is produced. A city, (5)___ from the countryside that sustains it, would perish within days. Beyond these practical necessities, the countryside offers something less (6)___ but no less vital: a connection to the natural rhythms from which urban life has largely cut us off. Studies consistently show that access to green space is essential for our psychological (7)___. The challenge for the future is not to choose between the city and the country, but to (8)___ them in a healthy balance — protecting the rural land on which all our lives, ultimately, depend.",
        items: [
          { root: "urban", accepted: ["urbanised", "urban"], hint: "'ever more urbanised' → urbanised." },
          { root: "take", accepted: ["mistake"], hint: "'a profound mistake' (sustantivo)." },
          { root: "advance", accepted: ["advantages"], hint: "'for all their advantages' → advantages." },
          { root: "pure", accepted: ["purified"], hint: "'our water is purified' (participio)." },
          { root: "cut", accepted: ["cut"], hint: "'cut off from the countryside' (participio)." },
          { root: "tangible", accepted: ["tangible"], hint: "'less tangible but vital' (adjetivo)." },
          { root: "well", accepted: ["wellbeing"], hint: "'psychological wellbeing' (sustantivo)." },
          { root: "hold", accepted: ["hold"], hint: "'to hold them in a healthy balance' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — cláusulas de participio",
        items: [
          { s1: "Because she felt exhausted, she went straight to bed.", key: "FEELING", s2: "___ , she went straight to bed.", accepted: ["Feeling exhausted"], explanation: "-ing (causa)." },
          { s1: "The house was built in the 18th century and is now a museum.", key: "BUILT", s2: "___ , the house is now a museum.", accepted: ["Built in the 18th century"], explanation: "-ed (pasivo)." },
          { s1: "After he had locked the door, he left.", key: "HAVING", s2: "___ the door, he left.", accepted: ["Having locked"], explanation: "Having + participio." },
          { s1: "The man who is standing by the window is my boss.", key: "STANDING", s2: "The man ___ by the window is my boss.", accepted: ["standing"], explanation: "relativa reducida activa." },
          { s1: "The letter that was written in French was hard to read.", key: "WRITTEN", s2: "The letter ___ in French was hard to read.", accepted: ["written"], explanation: "relativa reducida pasiva." },
          { s1: "As I didn't want to disturb her, I left quietly.", key: "WANTING", s2: "Not ___ her, I left quietly.", accepted: ["wanting to disturb"], explanation: "Not + -ing (negativa)." },
        ],
      },
      p5: {
        title: "The man who bought a forest to save it",
        text: "When Doug Tompkins, a millionaire businessman who had made his fortune in the fashion industry, first flew over the wild forests of southern Chile and Argentina in the early 1990s, he was overwhelmed by their beauty — and by the realisation that they were being destroyed. Vast tracts of ancient, unspoilt wilderness, home to countless species found nowhere else on Earth, were being cleared for farming and logging at an alarming rate. What he did next was so unusual that many people, at first, simply refused to believe it.\n\nTompkins began, quietly and without fanfare, to buy the land. Using his considerable fortune, he purchased hundreds of thousands of acres of the most threatened wilderness, not to develop it or profit from it, but for the sole purpose of preserving it forever. Over the following decades, together with his wife Kris, he assembled one of the largest privately owned conservation projects in history, protecting an area of pristine forest, wetland and mountain larger than many countries.\n\nHis motives were widely misunderstood, and at times fiercely resisted. Some locals, suspicious of a wealthy foreigner buying up their land, spread rumours about his intentions. Politicians accused him of everything from arrogance to espionage. Tompkins, undeterred, pressed on, patiently explaining that his only aim was to hold the land in trust for nature and, eventually, to give it away.\n\nAnd give it away he did. In one of the largest such acts in history, the land Tompkins had spent decades and a fortune acquiring was donated, in its entirety, to the governments of Chile and Argentina, on the sole condition that it be turned into national parks and protected forever. Millions of acres of some of the last great wilderness on Earth were thereby saved, not for one man's benefit, but for all humanity, and for all time. Doug Tompkins did not live to see the final parks created; he died in a kayaking accident in the wilderness he loved. But his legacy endures, a reminder that a single determined individual, armed with vision and a refusal to accept the destruction of something beautiful, can change the fate of an entire landscape.",
        q: [
          mc("What overwhelmed Tompkins as he flew over the forests?", ["Their size.", "Their beauty, and that they were being destroyed.", "The wildlife.", "The weather."], 1, "'overwhelmed by their beauty — and by the realisation that they were being destroyed'."),
          mc("What did he do with his fortune?", ["Built factories.", "Bought threatened wilderness to preserve it.", "Started a fashion label.", "Bought a mansion."], 1, "'purchased… wilderness… for the sole purpose of preserving it'."),
          mc("How were his motives received locally?", ["With gratitude.", "Widely misunderstood and resisted.", "With indifference.", "With praise."], 1, "'widely misunderstood, and at times fiercely resisted'."),
          mc("What did Tompkins ultimately do with the land?", ["Sold it for profit.", "Donated it to be made into national parks.", "Kept it private.", "Developed it."], 1, "'donated, in its entirety, to the governments… turned into national parks'."),
          mc("How did Doug Tompkins die?", ["Of illness.", "In a kayaking accident in the wilderness.", "Peacefully.", "Unknown."], 1, "'he died in a kayaking accident'."),
          mc("What is the lesson of his legacy, according to the writer?", ["Money is everything.", "A single determined individual can change a landscape's fate.", "Conservation is impossible.", "Nature can't be saved."], 1, "'a single determined individual… can change the fate of an entire landscape'."),
        ],
      },
      p6: {
        title: "Reconnecting children with nature",
        text: "A generation ago, children spent much of their free time outdoors, roaming fields and woods with a freedom that would astonish many parents today. (1)___ Now, childhood has moved almost entirely indoors, lived out on screens rather than in the open air.\n\nThe consequences of this shift are only beginning to be understood. (2)___ Children today can often identify hundreds of corporate logos but cannot name the common trees and birds of their own neighbourhood.\n\nExperts have coined a term for the result: 'nature-deficit disorder'. (3)___ While not a formal medical diagnosis, it captures a real and growing concern about the effects of a childhood spent disconnected from the natural world.\n\nThe evidence suggests these effects are serious. (4)___ Children who spend regular time in nature tend to be healthier, calmer, more creative and better able to concentrate than those who do not.\n\nEncouragingly, a growing movement is trying to reverse the trend. (5)___ 'Forest schools', where lessons are conducted entirely outdoors, are spreading rapidly, and many parents are making a conscious effort to get their children outside. (6)___ The goal is not to reject the modern world, but to restore a balance that has been dangerously lost — to give children back something that, until very recently, every generation of humans simply took for granted.",
        options: [
          "In a single generation, all of this has been transformed.",    // A -> gap 1
          "The change in what children know is itself revealing.",        // B -> gap 2
          "The very existence of such a phrase is telling.",              // C -> gap 3
          "Research is beginning to reveal what is being lost.",          // D -> gap 4
          "Around the world, people are taking action.",                  // E -> gap 5
          "It is, in the end, a question of balance.",                    // F -> gap 6
          "Children have always preferred to stay indoors.",             // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: en una generación todo cambió."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: lo que saben es revelador."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: que exista el término es significativo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la investigación revela lo perdido."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la gente actúa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: es cuestión de equilibrio."),
        ],
      },
      p7: {
        title: "Four people describe their relationship with nature",
        text: "Read what four people say about the natural world.\n\nA) TARIQ: I grew up in a city and barely saw a tree until I was an adult. Then a friend took me hiking in the mountains, and it changed my life. Standing in that vast, silent wilderness, I felt something I'd never felt before — a kind of peace, and a sense of my own smallness. Now I escape to the wild whenever I can.\n\nB) LENA: I'm a scientist, and what fascinates me about nature is its sheer complexity. Every ecosystem is a web of relationships so intricate that we barely understand it. When people talk about nature purely in terms of its beauty, I want to say: it's far more amazing than that. It's the most sophisticated machine in existence.\n\nC) SAM: I worry that we've become sentimental about nature while doing nothing to protect it. We post beautiful photos of unspoilt landscapes while those very places are being destroyed. Admiring nature isn't enough. If we really loved it, we'd change how we live — and most of us, myself included, simply won't.\n\nD) PRIYA: For me, nature isn't some distant wilderness you have to travel to. It's the tree outside my window, the birds in my garden, the weeds pushing up through the pavement. Wonder is everywhere, if you learn to look. I think the great mistake is imagining that 'real' nature is somewhere else, far away.",
        q: [
          mc("Who had a life-changing first experience of wild nature as an adult?", ["A", "B", "C", "D"], 0, "Tariq: 'a friend took me hiking… it changed my life'."),
          mc("Who is fascinated by the scientific complexity of nature?", ["A", "B", "C", "D"], 1, "Lena: 'its sheer complexity'."),
          mc("Who criticises admiring nature without protecting it?", ["A", "B", "C", "D"], 2, "Sam: 'Admiring nature isn't enough'."),
          mc("Who finds nature in ordinary, everyday surroundings?", ["A", "B", "C", "D"], 3, "Priya: 'the tree outside my window'."),
          mc("Who felt a sense of their own smallness in the wilderness?", ["A", "B", "C", "D"], 0, "Tariq: 'a sense of my own smallness'."),
          mc("Who compares nature to a sophisticated machine?", ["A", "B", "C", "D"], 1, "Lena: 'the most sophisticated machine in existence'."),
          mc("Who admits they won't change how they live?", ["A", "B", "C", "D"], 2, "Sam: 'most of us, myself included, simply won't'."),
          mc("Who says wonder is everywhere if you learn to look?", ["A", "B", "C", "D"], 3, "Priya: 'Wonder is everywhere, if you learn to look'."),
          mc("Who values escaping to the wild whenever possible?", ["A", "B", "C", "D"], 0, "Tariq: 'I escape to the wild whenever I can'."),
          mc("Who thinks it's a mistake to imagine nature is far away?", ["A", "B", "C", "D"], 3, "Priya: 'imagining that \"real\" nature is somewhere else'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Spending time in nature is essential for a healthy life.'\nComenta estos dos aspectos y añade uno propio:\n1. physical health (la salud física)\n2. mental wellbeing (el bienestar mental)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'The most beautiful place I have ever visited' — descríbelo (usa cláusulas de participio) y explica por qué te marcó.\n· INFORME sobre un espacio natural de tu zona amenazado: describe el lugar, el problema y propón cómo protegerlo.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un guardabosques, David, hablando de un parque nacional (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a park ranger called David talking about the national park where he works. David: I've worked in this park for over twenty years, and I still find it breathtaking every single day. The park covers an area of nearly two thousand square kilometres of almost completely unspoilt wilderness. What makes it so special is the incredible variety of habitats: rugged mountains, lush green valleys, and even a stretch of wild, dramatic coast. It's home to more than three hundred species of birds, some of which are found nowhere else on Earth. My main job, and the reason I do this work, is to preserve all of this for future generations. Sadly, that's becoming harder every year. The biggest threat we face isn't hunting or pollution, as many people assume — it's climate change, which is altering the whole ecosystem. My advice to any visitor is simple: leave no trace. Take only photographs, and leave only footprints. And please, put your phone away and just look. Standing in a place like this, truly present, is something most people never experience. It can genuinely change how you see the world.", [
      fb("David has worked in the park for over ___ years.", ["twenty", "20"], "'over twenty years'."),
      fb("The park covers nearly ___ thousand square kilometres.", ["two", "2"], "'nearly two thousand'."),
      fb("The park contains rugged mountains, lush valleys and a stretch of ___.", ["coast", "wild coast"], "'a stretch of wild… coast'."),
      fb("It is home to more than ___ species of birds.", ["three hundred", "300"], "'more than three hundred species'."),
      fb("David's main job is to ___ the park for the future.", ["preserve"], "'to preserve all of this'."),
      fb("The biggest threat to the park is ___.", ["climate change"], "'it's climate change'."),
      fb("His advice to visitors is to leave no ___.", ["trace"], "'leave no trace'."),
      fb("He suggests visitors put their ___ away and just look.", ["phone"], "'put your phone away'."),
    ]),

    ...speakingParts({ p1: "si te gusta la naturaleza, qué paisajes prefieres y qué haces al aire libre", p2: "dos paisajes distintos (una montaña agreste y una playa tranquila): compáralos y di cuál preferirías visitar", p3: "cómo animar a la gente a pasar más tiempo en la naturaleza (rutas guiadas, escuelas al aire libre, parques urbanos, campañas): comentadlo y elegid lo mejor", p4: "la naturaleza y el paisaje: si pasar tiempo en la naturaleza es esencial, si estamos perdiendo el contacto con ella y cómo protegerla" }),

    SUMMARY("Resumen del Día 27", [
      "Cláusulas de participio: -ing (activo/causa), Having + participio (anterior), -ed (pasivo).",
      "Relativas reducidas: the man sitting (= who is sitting); the report written (= which was written). ¡Mismo sujeto!",
      "Vocabulario de paisaje. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 28", "Reescribe 4 frases usando cláusulas de participio. Repasa las flashcards. Mañana: las oraciones enfáticas (cleft sentences)."),
  ],
};

// ───────────────────────── DÍA 28 ─────────────────────────
const DAY28 = {
  title: "Día 28 — Oraciones enfáticas (cleft) · Los logros",
  description: "It is/was … that …; What … is …; The thing that …; All I want is …. Vocabulario de logros. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Enfatizar una parte de la frase con estructuras hendidas (cleft).",
    summary: "Oraciones enfáticas; los logros; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'What I need is to a rest'.", "'It is because of…'.", "concordancia del verbo."],
    reviewPrompts: ["¿Cómo enfatizas 'YO rompí el jarrón'?", "¿'What I want is…' + qué?"],
  },
  items: [
    TEXT("🔁 Repaso: participios. Hoy las ORACIONES ENFÁTICAS (cleft sentences): destacar una parte de la frase. Vocabulario: los LOGROS."),
    GRAMMAR("Oraciones enfáticas (cleft)", `Sirven para poner el foco en un elemento concreto.
· IT-CLEFT: It + be + [elemento destacado] + that/who… → It was John that/who broke it. It was in Paris that we met. It's the pollution that worries me.
· WH-CLEFT (what): What + sujeto + verbo + be + [foco] → What I need is a holiday. What she said was shocking. What annoys me is his attitude.
· THE THING / ALL / THE REASON: The thing (that) I love is… All I want is peace. The reason (why) I left is…
· Con verbo de acción: What he did was (to) sell the house.
⚠️ El verbo 'be' concuerda con el sujeto de la cleft: What I need IS a holiday / What I need ARE some answers.`),
    WARN("Errores típicos del hispanohablante", "· ❌ What I need is to a rest → ✅ What I need is a rest / is to rest.\n· ❌ It is me who broke it (informal ok, formal → It was I) → 'It was me that/who broke it' es aceptable.\n· Concordancia: 'What matters is…' / 'What matter are…'.\n· 'The reason why…' o 'The reason (that)…'."),
    grammarEx("Use of English — Oraciones enfáticas", "Transforma o completa (enfatiza).", [
      fb("John broke the window. → It ___ John ___ broke the window.", ["was", "who"], "It was John who…"),
      fb("I need a holiday. → What I ___ ___ a holiday.", ["need", "is"], "What I need is…"),
      fb("Her attitude annoys me. → What ___ me is her attitude.", ["annoys"], "What annoys me is…"),
      fb("We met in Paris. → It was ___ ___ that we met.", ["in Paris"], "It was in Paris that…"),
      mc("Choose:", ["What I want is to a new car.", "What I want is a new car.", "What I want it is a new car."], 1, "What I want is + sustantivo."),
      fb("I left because I was bored. → The reason ___ I left was that I was bored.", ["why", "that"], "The reason why/that…"),
      fb("He sold the house. → What he did ___ sell the house.", ["was"], "What he did was (to) sell."),
    ]),
    GRAMMAR("Vocabulario del día — Los logros", "Léxico de logros (B2)."),
    deck("B2 S6D28 — Los logros", [
      ["accomplishment", "logro", "It was a great accomplishment.", "sustantivo", "əˈkʌmplɪʃmənt"],
      ["achieve", "lograr", "She achieved her lifelong dream.", "verbo", "əˈtʃiːv"],
      ["milestone", "hito", "It was a major milestone.", "sustantivo", "ˈmaɪlstəʊn"],
      ["overcome obstacles", "superar obstáculos", "She overcame countless obstacles.", "colocación", "ˌəʊvəˈkʌm ˈɒbstəklz"],
      ["persevere", "perseverar", "You have to persevere.", "verbo", "ˌpɜːsɪˈvɪə"],
      ["dedication", "dedicación / entrega", "It took years of dedication.", "sustantivo", "ˌdedɪˈkeɪʃn"],
      ["breakthrough", "gran avance", "It was a real breakthrough.", "sustantivo", "ˈbreɪkθruː"],
      ["rewarding", "gratificante", "It's hard but rewarding work.", "adjetivo", "rɪˈwɔːdɪŋ"],
      ["against all odds", "contra todo pronóstico", "She succeeded against all odds.", "expresión", "əˈɡenst ɔːl ˈɒdz"],
      ["sense of achievement", "sensación de logro", "It gave me a real sense of achievement.", "colocación", "sens əv əˈtʃiːvmənt"],
    ]),
    vocabEx("Vocabulario — Los logros", "Elige la opción correcta.", [
      mc("An important point that marks progress is a ___.", ["milestone", "obstacle", "dedication"], 0, "milestone."),
      mc("To keep going despite difficulties is to ___.", ["persevere", "overcome", "achieve"], 0, "persevere."),
      mc("Great commitment and hard work is ___.", ["dedication", "breakthrough", "milestone"], 0, "dedication."),
      mc("Succeeding when success seemed impossible is succeeding ___.", ["against all odds", "on all odds", "at all odds"], 0, "against all odds."),
      mc("Work that is difficult but gives satisfaction is ___.", ["rewarding", "obstacle", "milestone"], 0, "rewarding."),
      mc("A sudden important advance is a ___.", ["breakthrough", "milestone", "dedication"], 0, "breakthrough."),
    ]),

    ...uoe({
      p1: {
        title: "What success really means",
        text: "Ask most people what they mean by 'success', and they will (1)___ describe wealth, status or fame. Yet when we look closely at the lives of those who have achieved these things, we find that they are (2)___ no happier than the rest of us, and sometimes considerably less so. What this suggests is that we may have (3)___ the wrong definition of success entirely. Perhaps success is not about what we (4)___, but about who we become in the process of trying. The person who pursues a difficult goal with dedication, who perseveres through failure and (5)___ obstacles, develops qualities of character — resilience, patience, self-discipline — that are (6)___ far more valuable than any external reward. Seen this way, it is the journey, not the (7)___, that matters. And this is genuinely liberating, because while we cannot control whether we win the prize, we can always control whether we give our best. The (8)___ definition of success, then, is not a matter of trophies, but of effort honestly given.",
        q: [
          mc("(1)", ["typically", "usually", "normally", "generally"], 0, "'will typically describe'."),
          mc("(2)", ["often", "frequently", "usually", "commonly"], 0, "'they are often no happier'."),
          mc("(3)", ["adopted", "taken", "chosen", "picked"], 0, "'adopted the wrong definition'."),
          mc("(4)", ["achieve", "gain", "get", "win"], 0, "'about what we achieve'."),
          mc("(5)", ["overcomes", "beats", "defeats", "conquers"], 0, "'overcomes obstacles'."),
          mc("(6)", ["ultimately", "finally", "eventually", "lastly"], 0, "'are ultimately far more valuable'."),
          mc("(7)", ["destination", "goal", "target", "end"], 0, "'the journey, not the destination'."),
          mc("(8)", ["truest", "true", "truthful", "truly"], 0, "'The truest definition'."),
        ],
      },
      p2: {
        title: "The overnight success who wasn't",
        text: "What most people fail to (1)___ about so-called 'overnight successes' is that they almost never happen overnight. Behind (2)___ every sudden triumph lies years of unseen, unglamorous work. The musician (3)___ first album makes them famous has usually spent a decade playing to empty rooms. The scientist (4)___ celebrated breakthrough makes the news has toiled for years through countless failed experiments. It is precisely because this long, dull apprenticeship is (5)___ that we are so misled. We see only the moment of triumph, and conclude that success is a matter of luck or talent, (6)___ than of dogged persistence. This misunderstanding does real harm, for it (7)___ young people to expect quick results and to give up when they do not materialise. The truth, less exciting but far more useful, is that lasting achievement is built slowly, through the patient accumulation of small efforts. What separates those who succeed from those who don't is rarely raw ability. (8)___ is the willingness to keep going long after others have given up.",
        q: [
          fb("(1)", ["realise", "understand", "grasp"], "'fail to realise'."),
          fb("(2)", ["almost"], "'behind almost every'."),
          fb("(3)", ["whose"], "'The musician whose first album'."),
          fb("(4)", ["whose"], "'The scientist whose breakthrough'."),
          fb("(5)", ["invisible", "unseen", "hidden"], "'is invisible/hidden'."),
          fb("(6)", ["rather"], "'rather than of persistence'."),
          fb("(7)", ["leads", "causes"], "'it leads young people to expect'."),
          fb("(8)", ["It", "What"], "'It is the willingness…' (cleft)."),
        ],
      },
      p3: {
        title: "The power of small wins",
        text: "How do people find the (1)___ to pursue a huge, distant goal, one that may take years of effort to (2)___? The answer, according to psychologists who study motivation, lies in the power of 'small wins'. A goal like 'write a novel' or 'run a marathon' is so (3)___ that it can be paralysing; the gap between where we are and where we want to be feels (4)___. The trick is to break the giant goal into tiny, (5)___ steps, each of which can be completed and celebrated. Every small win releases a little burst of (6)___ and, crucially, provides evidence that progress is possible. This sense of momentum is what keeps us going through the long, difficult middle of any great undertaking, when the initial excitement has faded and the end is still far (7)___ of reach. The lesson is a practical one. Do not focus on the mountain; focus on the next step. Take enough small steps, with enough (8)___, and even the highest mountain will eventually be climbed.",
        items: [
          { root: "motivate", accepted: ["motivation"], hint: "sustantivo → motivation." },
          { root: "achieve", accepted: ["achieve"], hint: "'to achieve' (verbo)." },
          { root: "daunt", accepted: ["daunting"], hint: "'so daunting' → daunting." },
          { root: "overwhelm", accepted: ["overwhelming"], hint: "'feels overwhelming' → overwhelming." },
          { root: "manage", accepted: ["manageable"], hint: "adjetivo → manageable." },
          { root: "satisfy", accepted: ["satisfaction"], hint: "sustantivo → satisfaction." },
          { root: "out", accepted: ["out"], hint: "'far out of reach' → out." },
          { root: "persevere", accepted: ["perseverance"], hint: "sustantivo → perseverance." },
        ],
      },
      p4: {
        title: "Transformaciones — oraciones enfáticas",
        items: [
          { s1: "Her attitude really annoys me.", key: "WHAT", s2: "___ is her attitude.", accepted: ["What really annoys me"], explanation: "What… is…" },
          { s1: "We first met in Rome.", key: "WAS", s2: "It ___ we first met.", accepted: ["was in Rome that"], explanation: "It was… that…" },
          { s1: "I really need a good rest.", key: "ALL", s2: "___ a good rest.", accepted: ["All I need is"], explanation: "All I need is…" },
          { s1: "His constant lateness caused the problem.", key: "IT", s2: "___ his constant lateness that caused the problem.", accepted: ["It was"], explanation: "It was… that…" },
          { s1: "She left because she felt unappreciated.", key: "REASON", s2: "The ___ she left was that she felt unappreciated.", accepted: ["reason why", "reason"], explanation: "The reason why…" },
          { s1: "He sold everything and moved abroad.", key: "DID", s2: "What ___ sell everything and move abroad.", accepted: ["he did was"], explanation: "What he did was…" },
        ],
      },
      p5: {
        title: "The marathon that took twenty years",
        text: "When Fauja Singh crossed the finish line of the London Marathon at the age of eighty-nine, he became one of the oldest people ever to complete the gruelling 26.2-mile course. What made his achievement all the more extraordinary was that he had not taken up running until he was in his eighties, after a lifetime that had contained more than its share of hardship and grief.\n\nBorn in a small village in India, Singh had been a frail child who could not walk properly until he was five. As an adult, he had endured the deaths of his wife and, most devastatingly, of a son, killed in a farming accident before his eyes. It was grief, in the end, that led him to running. Having moved to England to live with another son, and struggling with depression after his losses, he happened to see a marathon on television, and something stirred in him. What he needed, he decided, was a challenge — something to give his remaining years shape and purpose.\n\nHe began, cautiously, to train, guided by a young coach who at first could scarcely believe that this elderly man was serious. But Singh was entirely serious, and what he lacked in youth he more than made up for in dedication and sheer, stubborn determination. He rose before dawn to train, followed a careful diet, and, against the advice of nearly everyone, entered his first marathon shortly after his eighty-ninth birthday. To the astonishment of the world, he finished it.\n\nOver the following years, Singh completed numerous marathons, becoming a global celebrity and an inspiration to millions. But it was never fame that he sought. What drove him, he always insisted, was something far simpler: the joy of the running itself, and the sense of purpose it had given a life that grief had come close to destroying. 'The secret to a long and happy life,' he once said, 'is to stay positive, to keep moving, and never to think you are too old to begin something new.' Fauja Singh finally hung up his running shoes at the age of one hundred, having proved, more powerfully than any words could, that it is never, ever too late.",
        q: [
          mc("What was remarkable about Fauja Singh's marathon achievement?", ["He was a professional.", "He took up running in his eighties.", "He was young.", "He won the race."], 1, "'he had not taken up running until he was in his eighties'."),
          mc("What led him to running?", ["Ambition.", "Grief, after losing his wife and son.", "A doctor's advice.", "A bet."], 1, "'It was grief, in the end, that led him to running'."),
          mc("How did his young coach first react?", ["With enthusiasm.", "He could scarcely believe Singh was serious.", "He refused.", "He laughed."], 1, "'could scarcely believe that this elderly man was serious'."),
          mc("What did Singh make up for his lack of youth with?", ["Money.", "Dedication and determination.", "Talent.", "Luck."], 1, "'made up for in dedication and sheer… determination'."),
          mc("What did Singh say really drove him?", ["Fame.", "The joy of running and a sense of purpose.", "Money.", "Competition."], 1, "'the joy of the running itself, and the sense of purpose'."),
          mc("At what age did Singh finally stop running?", ["Eighty-nine.", "One hundred.", "Ninety.", "Ninety-five."], 1, "'hung up his running shoes at the age of one hundred'."),
        ],
      },
      p6: {
        title: "The myth of natural talent",
        text: "We love to believe in natural talent — the idea that great achievers are simply born different, blessed with a gift the rest of us lack. (1)___ It is a comforting belief, because it lets us off the hook: if we are not gifted, then our failure to achieve is not our fault.\n\nThe research, however, tells a more challenging story. (2)___ When scientists study world-class performers in any field, from music to sport to chess, they find that what separates the best is not some mysterious inborn gift.\n\nWhat they find instead is practice — vast, deliberate, relentless quantities of it. (3)___ The finest violinists have simply practised far more, and far more purposefully, than the merely good ones.\n\nThis does not mean that talent is a complete myth. (4)___ Genetics surely plays some role, and it would be foolish to pretend that anyone can become anything with enough effort.\n\nBut the emphasis on natural talent is both mistaken and harmful. (5)___ It discourages effort, by suggesting that ability is fixed, and it robs achievement of its true glory, which lies precisely in the years of hidden work behind it. (6)___ The next time you admire a great performer, remember that what you are really seeing is not a gift, but the visible result of ten thousand invisible hours.",
        options: [
          "This flattering story, unfortunately, is largely false.",       // A -> gap 1
          "The truth is far less romantic, but far more encouraging.",     // B -> gap 2
          "The differences come down, overwhelmingly, to work.",          // C -> gap 3
          "The reality is more complicated than either extreme.",         // D -> gap 4
          "Its effects on how we live are almost entirely negative.",      // E -> gap 5
          "That, in the end, is something worth far more admiration.",     // F -> gap 6
          "Great performers are simply born with a magical gift.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa historia halagadora es falsa."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la verdad es más alentadora."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las diferencias son cuestión de trabajo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la realidad es más compleja."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: sus efectos son negativos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: eso merece más admiración."),
        ],
      },
      p7: {
        title: "Four people describe their greatest achievement",
        text: "Read what four people say about something they are proud of.\n\nA) NADIA: My proudest achievement isn't a qualification or a promotion — it's that I finally learned to swim at the age of forty. I'd been terrified of water my whole life. It took a year of lessons and a lot of humiliation, but the day I swam the length of the pool, I cried. What I'd overcome wasn't the water; it was fear itself.\n\nB) TOM: For me, it was starting a business from nothing and keeping it alive for ten years. So many fail. What I'm proudest of isn't the money — it's that I did it my own way, without compromising my values, and that I now employ fifteen people who depend on me. That responsibility is the real reward.\n\nC) PRIYA: I'm proudest of raising my two children as a single parent after my husband left. It wasn't glamorous or celebrated; nobody gives you a medal for it. But watching them grow into kind, capable adults, knowing I did that largely alone — no career success could ever come close.\n\nD) SAM: My greatest achievement was completing a PhD after being told, at school, that I 'wasn't academic'. It took eight years of part-time study while working full-time. What kept me going was pure stubbornness — a determination to prove that one careless teacher wrong. And I did.\n",
        q: [
          mc("Who overcame a lifelong fear?", ["A", "B", "C", "D"], 0, "Nadia: 'terrified of water my whole life'."),
          mc("Who is proud of building and sustaining a business?", ["A", "B", "C", "D"], 1, "Tom: 'starting a business from nothing'."),
          mc("Who values raising children alone above any career?", ["A", "B", "C", "D"], 2, "Priya: 'raising my two children as a single parent'."),
          mc("Who succeeded despite being underestimated at school?", ["A", "B", "C", "D"], 3, "Sam: 'told… I \"wasn't academic\"'."),
          mc("Who says what they really overcame was fear itself?", ["A", "B", "C", "D"], 0, "Nadia: 'it was fear itself'."),
          mc("Who is proudest of doing things their own way, keeping their values?", ["A", "B", "C", "D"], 1, "Tom: 'my own way, without compromising my values'."),
          mc("Who received no public recognition for their achievement?", ["A", "B", "C", "D"], 2, "Priya: 'nobody gives you a medal for it'."),
          mc("Who was driven by stubbornness to prove someone wrong?", ["A", "B", "C", "D"], 3, "Sam: 'pure stubbornness… prove that one careless teacher wrong'."),
          mc("Who describes their achievement taking eight years?", ["A", "B", "C", "D"], 3, "Sam: 'eight years of part-time study'."),
          mc("Who feels their real reward is responsibility to others?", ["A", "B", "C", "D"], 1, "Tom: 'That responsibility is the real reward'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Success is more about hard work than natural talent.'\nComenta estos dos aspectos y añade uno propio:\n1. effort (el esfuerzo)\n2. ability (la capacidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'My greatest achievement' — descríbelo y explica cómo lo lograste (usa oraciones enfáticas).\n· CARTA a un/a amigo/a que quiere rendirse con una meta importante: anímale y comparte lo que has aprendido sobre perseverar.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de un logro (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué lograron. Sobra una opción.\nA) overcoming a serious illness\nB) learning a difficult skill as an adult\nC) starting a successful business\nD) achieving an academic qualification\nE) completing an extreme physical challenge\nF) helping others in their community", "This is Part Three. You will hear five people talking about an achievement they are proud of. Speaker One: A year ago I could barely run for the bus. Last month, I crossed the finish line of a full marathon. Twenty-six miles. I still can't quite believe I did it. Speaker Two: I was told I'd never walk again after the accident. It took two years of the hardest work of my life, but here I am, walking. The doctors call it a miracle. I call it stubbornness. Speaker Three: Everyone thought I was mad to quit my job and open a little bakery. Five years on, we've got three shops and twenty staff. It was the best decision I ever made. Speaker Four: I always regretted leaving school with nothing. So at fifty, I enrolled in a degree course. Studying alongside people half my age was terrifying, but I graduated last summer, top of my class. Speaker Five: At the age of sixty, I decided to learn the piano. People said I was too old, that you can't teach an old dog new tricks. Well, last week I played my first proper piece all the way through. Never too late.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 4, "E: 'crossed the finish line of a full marathon'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 0, "A: 'never walk again after the accident… here I am, walking'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'open a little bakery… three shops'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 3, "D: 'enrolled in a degree course… graduated'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 1, "B: 'learn the piano… at sixty'."),
    ]),

    ...speakingParts({ p1: "un logro del que estés orgulloso/a, cómo lo conseguiste y qué te motivó", p2: "dos formas de lograr una meta (alguien con talento natural y alguien esforzándose mucho): compáralas y di qué pesa más", p3: "qué ayuda más a alcanzar una meta difícil (esfuerzo, talento, apoyo, perseverar, dividirla en pasos): comentadlo y elegid lo más decisivo", p4: "los logros y el éxito: si importa más el esfuerzo o el talento, qué significa 'éxito' y por qué mucha gente se rinde" }),

    SUMMARY("Resumen del Día 28", [
      "It-cleft: It was X that/who… (foco en X). WH-cleft: What… is… (What I need is a rest).",
      "The thing/All/The reason (why)… + be. Concordancia del verbo 'be'.",
      "Vocabulario de logros. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 29", "Enfatiza 4 frases con cleft (It is… / What…). Repasa las flashcards. Mañana: la inversión enfática."),
  ],
};

// ───────────────────────── DÍA 29 ─────────────────────────
const DAY29 = {
  title: "Día 29 — La inversión enfática · Momentos dramáticos",
  description: "Inversión con Not only, Never, Rarely, No sooner, Only, Little, Hardly. Vocabulario de sucesos dramáticos. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Usar la inversión tras adverbios negativos/restrictivos para dar énfasis.",
    summary: "Inversión enfática; momentos dramáticos; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["no invertir el auxiliar.", "'Never I have seen'.", "'No sooner I had…'"],
    reviewPrompts: ["¿'Never have I…' o 'Never I have…'?", "¿'No sooner … than' o 'when'?"],
  },
  items: [
    TEXT("🔁 Repaso: cleft. Hoy la INVERSIÓN ENFÁTICA: al empezar con un adverbio negativo/restrictivo, se invierte como en una pregunta. Vocabulario: MOMENTOS DRAMÁTICOS."),
    GRAMMAR("La inversión enfática", `Cuando una frase empieza con un adverbio NEGATIVO o RESTRICTIVO, el orden se invierte (auxiliar + sujeto), como en una pregunta. Es formal y enfático.
· Never / Rarely / Seldom / Little: Never have I seen such a mess. Rarely does he complain. Little did I know…
· Not only … but also: Not only did she win, but she also broke the record.
· No sooner … THAN / Hardly/Scarcely … WHEN: No sooner had I arrived than the phone rang. Hardly had we sat down when it started.
· Only + expresión (after/when/by/if): Only then did I understand. Only after the meeting did she speak.
· Not until: Not until I got home did I realise.
· At no time / Under no circumstances: Under no circumstances should you open this door.
⚠️ Se invierte el AUXILIAR (do/does/did, have, be, will…). Si no hay auxiliar, se usa do/does/did.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Never I have seen → ✅ Never have I seen.\n· ❌ No sooner I had arrived → ✅ No sooner had I arrived than…\n· ❌ Only then I understood → ✅ Only then did I understand.\n· Sin auxiliar → do/does/did: Rarely DOES he complain."),
    grammarEx("Use of English — Inversión enfática", "Reescribe con inversión o elige.", [
      fb("I have never seen such a thing. → Never ___ ___ seen such a thing.", ["have I"], "Never have I…"),
      fb("She not only sang but also danced. → Not only ___ ___ sing but she also danced.", ["did she"], "Not only did she…"),
      fb("As soon as I arrived, the phone rang. → No sooner ___ ___ arrived ___ the phone rang.", ["had I", "than"], "No sooner had I… than…"),
      fb("I only understood then. → Only then ___ ___ understand.", ["did I"], "Only then did I…"),
      mc("Choose:", ["Rarely he complains.", "Rarely does he complain.", "Rarely he does complain."], 1, "Rarely does he…"),
      fb("I didn't realise until I got home. → Not until I got home ___ ___ realise.", ["did I"], "Not until… did I…"),
      mc("Choose:", ["Under no circumstances you should open it.", "Under no circumstances should you open it.", "Under no circumstances open you it."], 1, "inversión con modal."),
    ]),
    GRAMMAR("Vocabulario del día — Momentos dramáticos", "Léxico de sucesos dramáticos (B2)."),
    deck("B2 S6D29 — Momentos dramáticos", [
      ["dramatic", "espectacular / dramático", "It was a dramatic rescue.", "adjetivo", "drəˈmætɪk"],
      ["unfold", "desarrollarse / suceder", "The events unfolded quickly.", "verbo", "ʌnˈfəʊld"],
      ["turning point", "punto de inflexión", "It was the turning point of my life.", "colocación", "ˈtɜːnɪŋ pɔɪnt"],
      ["out of the blue", "de repente / de golpe", "The news came out of the blue.", "expresión", "aʊt əv ðə ˈbluː"],
      ["in the nick of time", "justo a tiempo", "They arrived in the nick of time.", "expresión", "ɪn ðə nɪk əv ˈtaɪm"],
      ["catch off guard", "pillar desprevenido", "The question caught me off guard.", "colocación", "kætʃ ɒf ˈɡɑːd"],
      ["against all odds", "contra todo pronóstico", "They survived against all odds.", "expresión", "əˈɡenst ɔːl ˈɒdz"],
      ["gripping", "absorbente / trepidante", "It was a gripping story.", "adjetivo", "ˈɡrɪpɪŋ"],
      ["twist", "giro (inesperado)", "The story had a shocking twist.", "sustantivo", "twɪst"],
      ["unforgettable", "inolvidable", "It was an unforgettable moment.", "adjetivo", "ˌʌnfəˈɡetəbl"],
    ]),
    vocabEx("Vocabulario — Momentos dramáticos", "Elige la opción correcta.", [
      mc("A moment when everything changes is a ___.", ["turning point", "twist", "dramatic"], 0, "turning point."),
      mc("Happening suddenly and unexpectedly is happening ___.", ["out of the blue", "in the nick of time", "off guard"], 0, "out of the blue."),
      mc("Arriving just before it's too late is arriving ___.", ["in the nick of time", "out of the blue", "off guard"], 0, "in the nick of time."),
      mc("An unexpected development in a story is a ___.", ["twist", "turning point", "dramatic"], 0, "twist."),
      mc("A story that holds your attention completely is ___.", ["gripping", "dramatic", "unforgettable"], 0, "gripping."),
      mc("To surprise someone when they're not prepared is to catch them ___.", ["off guard", "out of the blue", "in the nick of time"], 0, "off guard."),
    ]),

    ...uoe({
      p1: {
        title: "The rescue",
        text: "It was meant to be a routine training exercise, but events quickly took a dramatic (1)___. The team of cavers had descended into the vast underground system that morning, expecting to be out by lunchtime. No sooner had they reached the deepest chamber (2)___ the rain began — a sudden, violent storm that no one had (3)___. Within minutes, water was pouring into the cave system, and their route back was cut (4)___. Trapped, with the water rising and their lights failing, the situation seemed hopeless. Little did they know that, on the surface, one of the largest rescue operations in the country's history was already (5)___ into action. For three agonising days, the trapped cavers waited in the darkness, their (6)___ fading. Only when they heard the sound of drilling directly above them did they dare to (7)___ that they might be saved. The rescue, when it finally came, was successful against all (8)___. Every one of them was brought out alive — a triumph of courage, ingenuity and sheer refusal to give up.",
        q: [
          mc("(1)", ["turn", "twist", "change", "shift"], 0, "'a dramatic turn'."),
          mc("(2)", ["than", "when", "then", "that"], 0, "No sooner… than."),
          mc("(3)", ["predicted", "foreseen", "expected", "imagined"], 2, "'no one had expected' (o foreseen)."),
          mc("(4)", ["off", "out", "up", "down"], 0, "'cut off'."),
          mc("(5)", ["swinging", "moving", "getting", "coming"], 0, "'swinging into action'."),
          mc("(6)", ["hope", "hopes", "chance", "chances"], 1, "'their hopes fading'."),
          mc("(7)", ["believe", "hope", "think", "feel"], 1, "'dare to hope'."),
          mc("(8)", ["odds", "chances", "hopes", "risks"], 0, "'against all odds'."),
        ],
      },
      p2: {
        title: "A life changed in an instant",
        text: "Some lives are changed slowly, over years; others are transformed in a single instant. For Sarah Whitman, that instant came completely out of (1)___ blue, on an ordinary Tuesday afternoon. She had been sitting in a café, reading, (2)___ a stranger approached her table and asked if she was the Sarah Whitman who had once, years earlier, saved a child from drowning. (3)___ had she expected such a question that, for a moment, she could not speak. The stranger, it turned out, was that very child, now grown up, who had spent years searching for the woman (4)___ had saved his life. Never (5)___ Sarah imagined that a single act, long forgotten, could return to her in this way. Not only (6)___ the young man thank her; he had also, he explained, dedicated his life to becoming a doctor, inspired (7)___ the second chance he had been given. It is one of life's stranger truths that we rarely know which of our actions will matter most. Only later, sometimes (8)___ years later, do we learn that a small kindness, casually offered, changed everything.",
        q: [
          fb("(1)", ["the"], "'out of the blue'."),
          fb("(2)", ["when"], "'reading, when a stranger…'"),
          fb("(3)", ["Little", "Never"], "'Little had she expected'."),
          fb("(4)", ["who", "that"], "'the woman who had saved'."),
          fb("(5)", ["had"], "'Never had Sarah imagined'."),
          fb("(6)", ["did"], "'Not only did the young man thank'."),
          fb("(7)", ["by"], "'inspired by the second chance'."),
          fb("(8)", ["many"], "'sometimes many years later'."),
        ],
      },
      p3: {
        title: "Why we love a good story",
        text: "There is something in the human mind that responds (1)___ to a well-told story. Long before writing was invented, our ancestors gathered around fires to share tales of heroes and monsters, and the (2)___ has never left us. A gripping story, whether in a book, a film or a conversation, can hold us (3)___, making us laugh, cry and hold our breath as the drama unfolds. Psychologists believe this love of stories is not (4)___; it serves a deep purpose. Through stories, we rehearse situations we may one day face, and we learn, safely, about the vast range of human (5)___. A tale of betrayal teaches us about trust; a story of courage may (6)___ our own. Crucially, a good story achieves something that a dry list of facts never can: it makes us (7)___. We do not merely learn the information; we live it, through the eyes of the characters. This is why the most memorable lessons often come not from lectures but from stories, and why the (8)___ of a great storyteller has been prized in every culture that has ever existed.",
        items: [
          { root: "power", accepted: ["powerfully"], hint: "adverbio → powerfully." },
          { root: "fascinate", accepted: ["fascination"], hint: "sustantivo → fascination." },
          { root: "spell", accepted: ["spellbound"], hint: "'hold us spellbound' → spellbound." },
          { root: "accident", accepted: ["accidental"], hint: "'is not accidental' → accidental." },
          { root: "experience", accepted: ["experience"], hint: "'human experience' (sustantivo)." },
          { root: "inspire", accepted: ["inspire"], hint: "'may inspire our own' (verbo)." },
          { root: "feel", accepted: ["feel"], hint: "'it makes us feel' (verbo)." },
          { root: "gift", accepted: ["gift"], hint: "'the gift of a great storyteller' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — inversión enfática",
        items: [
          { s1: "I have never seen anything like it.", key: "NEVER", s2: "___ anything like it.", accepted: ["Never have I seen"], explanation: "Never have I seen." },
          { s1: "She realised the danger only when it was too late.", key: "ONLY", s2: "___ she realise the danger.", accepted: ["Only when it was too late did"], explanation: "Only when… did she realise." },
          { s1: "As soon as we left, it began to rain.", key: "SOONER", s2: "No ___ it began to rain.", accepted: ["sooner had we left than"], explanation: "No sooner had we left than." },
          { s1: "He didn't just apologise; he also paid for the damage.", key: "ONLY", s2: "Not ___ , but he also paid for the damage.", accepted: ["only did he apologise"], explanation: "Not only did he apologise." },
          { s1: "You must not tell anyone under any circumstances.", key: "CIRCUMSTANCES", s2: "Under no ___ tell anyone.", accepted: ["circumstances must you"], explanation: "Under no circumstances must you." },
          { s1: "I had no idea what was about to happen.", key: "LITTLE", s2: "___ what was about to happen.", accepted: ["Little did I know"], explanation: "Little did I know." },
        ],
      },
      p5: {
        title: "The letter that arrived fifty years late",
        text: "In the summer of 2019, a woman named Eleanor Price received a letter that had been written, and posted, more than fifty years earlier. It had been lost, somehow, in the machinery of the postal system for half a century, before being discovered in a forgotten corner of a sorting office and, at last, delivered. The letter was from her mother, long since dead, and it changed everything Eleanor thought she knew about her own life.\n\nEleanor had grown up believing that her mother had been a cold, distant woman who had never truly loved her. Their relationship, throughout Eleanor's childhood, had been marked by silence and misunderstanding, and her mother had died when Eleanor was still a young woman, before the two of them had ever managed to bridge the gulf between them. For decades, Eleanor had carried the quiet grief of a daughter who believed she had never been loved.\n\nThe letter told a completely different story. In it, written when Eleanor was just a small child, her mother poured out feelings she had never been able to express in person: a fierce, overwhelming love for her daughter, a terror of somehow failing her, and a deep sadness at her own inability to show what she felt. She had been, the letter revealed, a woman crippled by her own shyness and by the emotional coldness of the times in which she had been raised, loving her daughter desperately all the while but never knowing how to say so.\n\nReading it, half a century too late, Eleanor wept — not only with grief for the years of misunderstanding, but with a strange, belated joy. For the letter did not merely reveal that she had been loved after all; it retrospectively transformed her entire childhood, casting every remembered silence in a new and gentler light. What she had taken for coldness had been, she now understood, love that could find no words. Little did her mother know, posting that letter all those years ago, that it would arrive too late to heal their relationship in life — but not, as it turned out, too late to heal her daughter's heart.",
        q: [
          mc("What was remarkable about the letter Eleanor received?", ["It was anonymous.", "It had been lost for over fifty years.", "It was a forgery.", "It was blank."], 1, "'written… more than fifty years earlier… lost… for half a century'."),
          mc("What had Eleanor always believed about her mother?", ["That she was warm.", "That she had never truly loved her.", "That she was famous.", "That she was wealthy."], 1, "'a cold, distant woman who had never truly loved her'."),
          mc("What did the letter actually reveal?", ["Anger.", "A fierce, overwhelming love for her daughter.", "A financial secret.", "Nothing."], 1, "'a fierce, overwhelming love for her daughter'."),
          mc("Why couldn't the mother show her feelings?", ["She didn't have any.", "Her shyness and the emotional coldness of her upbringing.", "She was too busy.", "She was ill."], 1, "'crippled by her own shyness and by the emotional coldness of the times'."),
          mc("How did the letter change Eleanor's view of her childhood?", ["It didn't.", "It recast every remembered silence in a gentler light.", "It made her angrier.", "It confused her."], 1, "'casting every remembered silence in a new and gentler light'."),
          mc("What is the poignant final observation?", ["The letter healed their relationship in life.", "It came too late to heal their relationship, but not too late to heal her daughter's heart.", "It was never read.", "It was thrown away."], 1, "'too late to heal their relationship in life — but not… too late to heal her daughter's heart'."),
        ],
      },
      p6: {
        title: "The night everything changed",
        text: "Some events divide our lives into 'before' and 'after'. (1)___ For me, that dividing line was a single phone call, late on an ordinary evening in October.\n\nI had been sitting at home, doing nothing in particular, when the phone rang. (2)___ Little did I know, as I reached lazily to answer it, that the voice on the other end was about to change the entire course of my life.\n\nIt was a hospital. (3)___ My father, thousands of miles away, had suffered a serious heart attack, and I needed to come at once.\n\nWhat followed was a blur of airports and hospital corridors. (4)___ Never had I felt so helpless, or so far from home. For three days, my father hovered between life and death, and for three days I sat by his bed, saying all the things I had always assumed there would be time to say later.\n\nHe survived. (5)___ Against all the doctors' expectations, he made a slow but complete recovery, and he is, I am glad to say, still with us today. But that night changed me. (6)___ No longer do I put off the important conversations, or assume that there will always be more time. That single phone call taught me, in the most frightening way possible, that everything we love can be taken from us in an instant — and that we should never wait to say what matters.",
        options: [
          "Everyone, I suspect, has such a moment in their past.",         // A -> gap 1
          "There was nothing to warn me of what was coming.",             // B -> gap 2
          "The news it delivered was the worst I had ever heard.",        // C -> gap 3
          "I remember almost none of the journey itself.",                // D -> gap 4
          "His recovery was, in the end, little short of miraculous.",     // E -> gap 5
          "Never again will I take a single day for granted.",            // F -> gap 6
          "Absolutely nothing about that evening was unusual.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: todos tienen ese momento."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nada le advertía."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la peor noticia de su vida."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: apenas recuerda el viaje."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: su recuperación fue milagrosa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: nunca más dará por hecho un día."),
        ],
      },
      p7: {
        title: "Four people describe a turning point in their lives",
        text: "Read what four people say about a moment that changed everything.\n\nA) NADIA: Mine came out of the blue — a redundancy letter, aged forty-five, from a company I'd given twenty years to. At the time it felt like the end of the world. In fact, it forced me to finally start the business I'd always dreamed of but never dared to. Losing that job was the best thing that ever happened to me.\n\nB) TOM: For me it was becoming a father. Nothing prepares you for it. The moment I held my daughter, everything I'd thought was important — money, status, winning — suddenly seemed trivial. Overnight, I became a completely different person. I sometimes barely recognise the selfish young man I used to be.\n\nC) PRIYA: My turning point was a serious illness in my thirties. Facing the possibility that my life might be cut short changed everything about how I chose to live. I stopped wasting time on things that didn't matter, and on people who drained me. I recovered, but I never went back to my old life. Illness, strangely, gave me my life.\n\nD) SAM: Mine wasn't dramatic at all — it was a single sentence from a teacher, when I was fifteen. 'You could really be something,' she said, 'if you believed in yourself.' No one had ever said anything like that to me. I've no idea if she even remembers it, but those eight words set the whole course of my life.",
        q: [
          mc("Whose turning point was losing their job?", ["A", "B", "C", "D"], 0, "Nadia: 'a redundancy letter'."),
          mc("Whose turning point was becoming a parent?", ["A", "B", "C", "D"], 1, "Tom: 'becoming a father'."),
          mc("Whose turning point was a serious illness?", ["A", "B", "C", "D"], 2, "Priya: 'a serious illness'."),
          mc("Whose turning point was a few words from a teacher?", ["A", "B", "C", "D"], 3, "Sam: 'a single sentence from a teacher'."),
          mc("Who says a bad event turned out to be the best thing?", ["A", "B", "C", "D"], 0, "Nadia: 'the best thing that ever happened to me'."),
          mc("Who feels they became a completely different person overnight?", ["A", "B", "C", "D"], 1, "Tom: 'Overnight, I became a completely different person'."),
          mc("Who stopped wasting time on things that didn't matter?", ["A", "B", "C", "D"], 2, "Priya: 'stopped wasting time on things that didn't matter'."),
          mc("Whose turning point was undramatic but life-shaping?", ["A", "B", "C", "D"], 3, "Sam: 'wasn't dramatic at all'."),
          mc("Who found the courage to pursue a long-held dream?", ["A", "B", "C", "D"], 0, "Nadia: 'start the business I'd always dreamed of'."),
          mc("Who says illness strangely gave them their life?", ["A", "B", "C", "D"], 2, "Priya: 'Illness, strangely, gave me my life'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The most important lessons in life come from difficult experiences.'\nComenta estos dos aspectos y añade uno propio:\n1. personal growth (el crecimiento personal)\n2. resilience (la resiliencia)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RELATO que empiece con: 'Little did I know that this ordinary evening was about to change my life forever.'\n· ARTÍCULO: 'A moment that changed my life' — describe un punto de inflexión y qué aprendiste (usa la inversión enfática).", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con un escritor de novelas de suspense, Mark Ellis (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a thriller writer, Mark Ellis. Interviewer: Mark, what makes a story truly gripping? Mark: Tension, above all. The reader has to desperately need to know what happens next. If they can put the book down, I've failed. Interviewer: Where do your ideas come from? Mark: From ordinary life, actually. I take a perfectly normal situation and then ask one question: what if it went horribly wrong? That single question is the engine of every story I've written. Interviewer: Do you plan your novels carefully? Mark: Not at all, which surprises people. I know how it begins and roughly how it ends, but the middle is a mystery even to me. I have to be surprised, or the reader won't be. Interviewer: What's the most common mistake new writers make? Mark: They explain too much. They don't trust the reader. The secret is to leave things out, to let the reader's imagination do the work. What you don't say is often more powerful than what you do. Interviewer: How do you deal with writer's block? Mark: I don't believe in it. Writing is a job. You sit down and you do it, whether you feel inspired or not. Inspiration is for amateurs; professionals just turn up. Interviewer: Finally, what do you hope readers take from your books? Mark: Nothing more than a few hours of complete escape. In a world this stressful, that's not a small thing. If someone misses their train because they couldn't stop reading, I've done my job. Interviewer: Thank you, Mark.", [
      mc("1. What, above all, makes a story gripping for Mark?", ["Violence.", "Tension.", "Romance."], 1, "'Tension, above all'."),
      mc("2. Where do his ideas come from?", ["Dreams.", "Ordinary life, asking 'what if it went wrong?'.", "Other books."], 1, "'From ordinary life… what if it went horribly wrong?'"),
      mc("3. How does he plan his novels?", ["In great detail.", "Loosely — the middle surprises even him.", "He doesn't write endings."], 1, "'the middle is a mystery even to me'."),
      mc("4. What is the most common mistake of new writers?", ["Too little detail.", "They explain too much.", "Bad grammar."], 1, "'They explain too much'."),
      mc("5. How does Mark deal with writer's block?", ["He rests.", "He doesn't believe in it; he just works.", "He waits for inspiration."], 1, "'I don't believe in it… professionals just turn up'."),
      mc("6. What does he say about what you don't say?", ["It's unimportant.", "It's often more powerful than what you do say.", "It confuses readers."], 1, "'What you don't say is often more powerful'."),
      mc("7. What does Mark hope readers take from his books?", ["A moral lesson.", "A few hours of complete escape.", "Facts."], 1, "'a few hours of complete escape'."),
    ]),

    ...speakingParts({ p1: "un momento dramático o un punto de inflexión de tu vida, y qué aprendiste de él", p2: "dos escenas de tensión (un rescate en la montaña y una noticia inesperada): compáralas y especula sobre lo que pasa", p3: "qué hace memorable una historia (la tensión, los personajes, los giros, el final, la ambientación): comentadlo y elegid lo más importante", p4: "los momentos dramáticos y las historias: si aprendemos más de las experiencias difíciles, por qué nos gustan las historias de suspense y cómo nos cambian los momentos clave" }),

    SUMMARY("Resumen del Día 29", [
      "Inversión tras adverbios negativos/restrictivos: Never have I…, Rarely does he…, No sooner had I… than…, Only then did I…, Little did I know…",
      "Se invierte el auxiliar (o do/does/did). Formal y muy enfático.",
      "Vocabulario de sucesos dramáticos. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 30", "Escribe 4 frases con inversión enfática. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 30 ─────────────────────────
const DAY30 = {
  title: "Día 30 — Repaso de la semana + mini-simulacro (mitad del curso)",
  description: "Consolidación de relativas, cláusulas de participio, cleft e inversión. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 6. ¡Mitad del B2!",
  pedagogy: {
    objective: "Consolidar las estructuras de relativa, participio y énfasis del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro. Mitad del curso.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 7."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 6 del B2. ¡Estás en la MITAD del curso (día 30 de 60)! Consolidas las relativas, las cláusulas de participio, las oraciones enfáticas (cleft) y la inversión. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 6", `1) Relativas: who/which/that/where/whose; con preposición (in which, to whom); con cuantificador (many of whom).
2) Cláusulas de participio: -ing (causa), Having + participio (anterior), -ed (pasivo), relativas reducidas.
3) Cleft: It was X that/who…; What… is…; The reason (why)…
4) Inversión enfática: Never have I…, No sooner had I… than…, Only then did I…, Not only… but also…`),
    grammarEx("Use of English — Repaso mixto de la Semana 6", "Completa o transforma.", [
      fb("I have three sisters, all of ___ are teachers.", ["whom"], "all of whom."),
      fb("___ (feel) tired, I went to bed early. (participio, causa)", ["Feeling"], "-ing."),
      fb("___ (build) in 1900, the house is now a museum. (participio pasivo)", ["Built"], "-ed."),
      fb("Her attitude annoys me. → What ___ me is her attitude.", ["annoys"], "What… is…"),
      fb("We met in Rome. → It ___ in Rome ___ we met.", ["was", "that"], "It was… that…"),
      fb("I have never seen such a thing. → Never ___ ___ seen such a thing.", ["have I"], "Never have I."),
      fb("As soon as I arrived, it rained. → No sooner ___ ___ arrived ___ it rained.", ["had I", "than"], "No sooner had I… than."),
      fb("The man ___ standing there is my boss. (relativa reducida)", ["standing"], "reduced relative."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 6", "Repasa los mazos (lugares, paisaje, logros, momentos dramáticos)."),
    vocabEx("Vocabulario — Repaso de la Semana 6", "Elige la opción correcta.", [
      mc("A place full of lively activity:", ["bustling", "run-down", "residential"], 0, "bustling."),
      mc("Wild, rocky and uneven land:", ["rugged", "lush", "barren"], 0, "rugged."),
      mc("An important point that marks progress:", ["milestone", "obstacle", "dedication"], 0, "milestone."),
      mc("A moment when everything changes:", ["turning point", "twist", "dramatic"], 0, "turning point."),
      mc("A neglected place in poor condition:", ["run-down", "thriving", "quaint"], 0, "run-down."),
      mc("To keep going despite difficulties:", ["persevere", "overcome", "achieve"], 0, "persevere."),
      mc("Natural land untouched by human activity:", ["unspoilt", "remote", "rugged"], 0, "unspoilt."),
      mc("Happening suddenly and unexpectedly:", ["out of the blue", "in the nick of time", "off guard"], 0, "out of the blue."),
    ]),

    ...uoe({
      p1: {
        title: "The comeback city",
        text: "Detroit, once the proud heart of the American car industry, became, in the late twentieth century, a symbol of urban (1)___. As the factories closed and the jobs vanished, the population, which had once (2)___ nearly two million, collapsed. Whole neighbourhoods, (3)___ streets had bustled with life, fell silent and empty. By the time the city formally declared bankruptcy in 2013, few (4)___ predicted anything but continued decline. And yet, in the years since, something unexpected has begun to happen. (5)___ attracted by the cheap space and the sense of possibility, artists, entrepreneurs and young families have started to move (6)___. Derelict buildings, many of (7)___ had stood empty for decades, are being renovated. It would be wrong to pretend that Detroit's problems are solved; they are deep and far from over. But the city that (8)___ symbol of decline is quietly becoming something else: a symbol of the stubborn human refusal to give up.",
        q: [
          mc("(1)", ["decline", "declining", "declined", "decay"], 0, "'urban decline'."),
          mc("(2)", ["numbered", "reached", "counted", "totalled"], 0, "'had once numbered nearly two million'."),
          mc("(3)", ["whose", "which", "that", "where"], 0, "'neighbourhoods, whose streets had bustled'."),
          mc("(4)", ["would", "had", "have", "will"], 0, "'few would predict anything but decline'."),
          mc("(5)", ["Drawn", "Drawing", "Draw", "Having drawn"], 0, "'Drawn/Attracted by the cheap space' (participio pasivo)."),
          mc("(6)", ["in", "on", "up", "out"], 0, "'move in'."),
          mc("(7)", ["which", "whom", "that", "them"], 0, "'many of which had stood empty'."),
          mc("(8)", ["was", "were", "is", "had"], 0, "'the city that was a symbol' (o 'once was')."),
        ],
      },
      p2: {
        title: "Learning to fail well",
        text: "One of the most important skills a person can learn is (1)___ to fail well. This may sound strange — surely the goal is to succeed, not to fail? But since failure is an unavoidable part of any worthwhile endeavour, how we respond (2)___ it matters enormously. Some people, meeting failure, are crushed by it; they conclude that they lack ability and give (3)___. Others, faced with exactly the same setback, treat it (4)___ useful information, learn from it, and try again. It is this second group, (5)___ whom failure is a teacher rather than a verdict, who ultimately succeed. Never (6)___ any great achievement been reached without a trail of failures behind it. What separates those who eventually triumph from those who don't is rarely the absence of failure; (7)___ is the ability to keep going in spite of it. This is why the most valuable thing we can teach young people may not be how to succeed, but (8)___ to fail — and to rise again.",
        q: [
          fb("(1)", ["how"], "'to learn is how to fail well'."),
          fb("(2)", ["to"], "'how we respond to it'."),
          fb("(3)", ["up"], "'give up'."),
          fb("(4)", ["as"], "'treat it as useful information'."),
          fb("(5)", ["for"], "'for whom failure is a teacher'."),
          fb("(6)", ["has"], "'Never has any great achievement been reached'."),
          fb("(7)", ["it"], "'it is the ability to keep going'."),
          fb("(8)", ["how"], "'but how to fail'."),
        ],
      },
      p3: {
        title: "The quiet heroes",
        text: "When we think of heroes, we tend to picture (1)___ deeds: the soldier's charge, the firefighter's rescue. But there is another kind of heroism, quieter and far more common, that goes largely (2)___. It is the heroism of the carer who spends years tending a sick relative, of the teacher who devotes their life to (3)___ children whom everyone else has given up on, of the ordinary person who, day after day, does the difficult, thankless right thing when no one is watching. This everyday heroism attracts no medals and makes no (4)___. It consists not of a single dramatic moment but of a thousand small acts of patience, kindness and (5)___, repeated over a lifetime. In some ways, it is harder than the more (6)___ kind, for it requires no burst of adrenaline, only a quiet, sustained (7)___ that must be renewed each morning. Rarely (8)___ we recognise these quiet heroes, precisely because their heroism is undramatic. But a society is held together far more by their patient goodness than by any number of spectacular deeds.",
        items: [
          { root: "drama", accepted: ["dramatic"], hint: "adjetivo → dramatic." },
          { root: "notice", accepted: ["unnoticed"], hint: "'goes largely unnoticed' → unnoticed." },
          { root: "help", accepted: ["helping"], hint: "'devotes their life to helping' → helping." },
          { root: "head", accepted: ["headlines"], hint: "'makes no headlines' → headlines." },
          { root: "determine", accepted: ["determination"], hint: "sustantivo → determination." },
          { root: "glory", accepted: ["glorious"], hint: "'the more glorious kind' → glorious." },
          { root: "commit", accepted: ["commitment"], hint: "sustantivo → commitment." },
          { root: "do", accepted: ["do"], hint: "'Rarely do we recognise' (auxiliar)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 6",
        items: [
          { s1: "The bridge was built in 1890 and is still in use.", key: "BUILT", s2: "___ , the bridge is still in use.", accepted: ["Built in 1890"], explanation: "-ed (pasivo)." },
          { s1: "I met a woman. Her son had saved my life.", key: "WHOSE", s2: "I met a woman ___ my life.", accepted: ["whose son had saved"], explanation: "whose." },
          { s1: "His attitude really worries me.", key: "WHAT", s2: "___ is his attitude.", accepted: ["What really worries me"], explanation: "What… is…" },
          { s1: "I have rarely been so surprised.", key: "RARELY", s2: "___ so surprised.", accepted: ["Rarely have I been"], explanation: "Rarely have I been." },
          { s1: "As soon as she spoke, the room fell silent.", key: "SOONER", s2: "No ___ the room fell silent.", accepted: ["sooner had she spoken than"], explanation: "No sooner had she spoken than." },
          { s1: "We only understood the truth later.", key: "ONLY", s2: "___ the truth.", accepted: ["Only later did we understand"], explanation: "Only later did we understand." },
        ],
      },
      p5: {
        title: "The teacher who never gave up on me",
        text: "I was, by any measure, a hopeless student. By the age of fourteen, I had been written off by almost every teacher who had ever taught me. I was disruptive, lazy and, I now realise, deeply unhappy at home in ways that no one at school had troubled to discover. My reports were a monotonous litany of failure and disappointment, and I had come to accept, with a kind of bitter pride, that I was simply stupid and worthless. And then, in my third year of secondary school, I was taught by Mr Okafor.\n\nWhat set Mr Okafor apart was not that he was a brilliant teacher, though he was, but that he refused, absolutely, to give up on me. Where others had seen a troublemaker to be managed, he seemed to see something else — some possibility that I myself could not see. He kept me behind after lessons, not to punish me, but to talk. He lent me books. He asked me questions and, most disconcertingly of all, actually listened to my answers, as though what I thought might matter. Never before had an adult treated me that way.\n\nIt did not happen overnight. For a long time, I tested him, half-expecting him to give up on me like all the rest. But he did not. Slowly, almost against my will, I began to work. What he had given me, I understand now, was not knowledge but something far more precious: the belief, utterly new to me, that I might be capable of something after all. And once a young person begins to believe that, everything becomes possible.\n\nI left school with qualifications that would have astonished my earlier teachers, went on to university, and eventually — the detail still amazes me — became a teacher myself. I have spent my career trying to do for other lost, angry, hopeless children what Mr Okafor did for me. I never got the chance to thank him properly; he died before I understood what I owed him. But not a week goes by that I do not think of him, and of the extraordinary, world-changing power of a single adult who simply refuses to give up on a child. It is, I have come to believe, the most powerful force in education, and perhaps in the whole of human life.",
        q: [
          mc("How did most teachers view the narrator by age fourteen?", ["As gifted.", "As hopeless and written off.", "As shy.", "As ill."], 1, "'I had been written off by almost every teacher'."),
          mc("What set Mr Okafor apart, according to the narrator?", ["His brilliance.", "That he refused to give up on the narrator.", "His strictness.", "His fame."], 1, "'he refused, absolutely, to give up on me'."),
          mc("What did Mr Okafor do that no adult had done before?", ["Punished him.", "Actually listened to his answers.", "Gave him money.", "Ignored him."], 1, "'actually listened to my answers'."),
          mc("What did Mr Okafor really give the narrator?", ["Knowledge.", "The belief that they might be capable of something.", "Qualifications.", "Discipline."], 1, "'the belief… that I might be capable of something after all'."),
          mc("What career did the narrator eventually pursue?", ["Medicine.", "Teaching.", "Law.", "Business."], 1, "'became a teacher myself'."),
          mc("What does the narrator now believe is the most powerful force in education?", ["Exams.", "An adult who refuses to give up on a child.", "Money.", "Technology."], 1, "'a single adult who simply refuses to give up on a child'."),
        ],
      },
      p6: {
        title: "The power of paying it forward",
        text: "There is a beautiful idea, sometimes called 'paying it forward', that holds that the proper response to a kindness is not to repay the person who helped you, but to help someone else in turn. (1)___ In this way, a single act of generosity can ripple outwards, touching lives the original giver will never know.\n\nThe idea has a long history, but it captures something profoundly true about how good spreads through the world. (2)___ We tend to imagine that kindness is a private transaction between two people, but in reality its effects are far wider.\n\nResearch has begun to confirm what the idea suggests. (3)___ Studies show that people who witness an act of kindness, or who are helped themselves, become significantly more likely to help others. Generosity, it turns out, is contagious.\n\nThis has a remarkable implication. (4)___ When you help a stranger, you are not merely helping that one person; you are setting in motion a chain of kindness that may continue long after you have forgotten the original act.\n\nThe reverse, sadly, is also true: cruelty, too, spreads. (5)___ Every unkind act makes further unkindness a little more likely, just as every kind one makes kindness more likely in turn. (6)___ In this quiet, invisible way, each of us, through our smallest daily choices, is helping to shape the emotional weather of the world.",
        options: [
          "The gift, in other words, is meant to keep moving.",            // A -> gap 1
          "Its consequences reach far beyond the two people involved.",    // B -> gap 2
          "The science of generosity is surprisingly encouraging.",        // C -> gap 3
          "The good you do genuinely multiplies as it travels.",          // D -> gap 4
          "We are all, for better or worse, contagious.",                 // E -> gap 5
          "That is a responsibility, but also an extraordinary power.",    // F -> gap 6
          "Kindness has no effect on anyone at all.",                     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el regalo sigue moviéndose."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: sus efectos van más allá de dos personas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la ciencia es alentadora."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el bien se multiplica."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: todos somos contagiosos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una responsabilidad y un poder."),
        ],
      },
      p7: {
        title: "Four people describe someone who changed their life",
        text: "Read what four people say about a person who had a lasting impact on them.\n\nA) NADIA: A stranger changed my life with a single sentence. I was about to give up on my dream of medical school, convinced I wasn't clever enough. A woman I met at a bus stop, hearing my story, simply said: 'The world needs doctors who doubt themselves far more than it needs ones who don't.' I never saw her again, but I became a doctor because of her.\n\nB) TOM: My grandfather taught me everything that matters, though he never lectured me once. He simply lived a good, honest, generous life in front of me, day after day, and let me draw my own conclusions. What I learned from watching him has guided me ever since. The best teaching, I've found, is example, not instruction.\n\nC) PRIYA: My old boss was the most demanding person I've ever worked for — she never let anything slide. At the time, I resented her. Only years later did I understand that her high standards were a form of respect. She believed I was capable of excellence, and refused to accept anything less. I've tried to be that person for others ever since.\n\nD) SAM: It was a coach who turned my life around. I was an angry, aimless teenager heading nowhere. He didn't try to fix me; he just gave me something to belong to, and someone to be accountable to. Never once did he give up on me, however badly I behaved. That patience, that refusal to walk away, saved me.",
        q: [
          mc("Who was changed by a stranger's single sentence?", ["A", "B", "C", "D"], 0, "Nadia: 'A stranger changed my life with a single sentence'."),
          mc("Who learned most from a relative's silent example?", ["A", "B", "C", "D"], 1, "Tom: 'The best teaching… is example, not instruction'."),
          mc("Who only later understood a demanding boss's respect?", ["A", "B", "C", "D"], 2, "Priya: 'her high standards were a form of respect'."),
          mc("Who was saved by a coach who never gave up on them?", ["A", "B", "C", "D"], 3, "Sam: 'Never once did he give up on me'."),
          mc("Who was told the world needs self-doubting doctors?", ["A", "B", "C", "D"], 0, "Nadia: '\"The world needs doctors who doubt themselves…\"'"),
          mc("Who learned that example teaches better than lecturing?", ["A", "B", "C", "D"], 1, "Tom: 'never lectured me once… let me draw my own conclusions'."),
          mc("Who resented someone at the time but later valued them?", ["A", "B", "C", "D"], 2, "Priya: 'At the time, I resented her'."),
          mc("Who was given a sense of belonging and accountability?", ["A", "B", "C", "D"], 3, "Sam: 'something to belong to, and someone to be accountable to'."),
          mc("Who has tried to hold others to high standards ever since?", ["A", "B", "C", "D"], 2, "Priya: 'I've tried to be that person for others'."),
          mc("Who became a doctor because of one encounter?", ["A", "B", "C", "D"], 0, "Nadia: 'I became a doctor because of her'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'A single person can make a real difference to someone else's life.'\nComenta estos dos aspectos y añade uno propio:\n1. teachers (los profesores)\n2. small acts of kindness (los pequeños gestos)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'The person who changed my life' — descríbelo/a y explica qué hicieron por ti.\n· RELATO que empiece con: 'Rarely have I met anyone who changed my life as much as that stranger did.'", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: The town where I grew up, which used to be run-down, is thriving now. Two. Man: Never have I been so proud as the day I graduated. Three. Woman: What I love most about the countryside is the sheer peace of it. Four. Man: No sooner had we set off than the storm hit. Five. Woman: It was my grandmother who taught me everything I know. Six. Man: Having overcome so many obstacles, she finally achieved her dream. Seven. Woman: Little did I know that one conversation would change my whole life. Eight. Man: The scenery, which was absolutely breathtaking, made the whole trip worthwhile.", [
      mc("1. How has the woman's town changed?", ["It declined.", "It went from run-down to thriving.", "It stayed the same."], 1, "'used to be run-down… thriving now'."),
      mc("2. When was the man most proud?", ["Never.", "The day he graduated.", "At his wedding."], 1, "'the day I graduated'."),
      mc("3. What does the woman love about the countryside?", ["The activities.", "The peace.", "The people."], 1, "'the sheer peace of it'."),
      mc("4. What happened as soon as they set off?", ["They arrived.", "The storm hit.", "They stopped."], 1, "'No sooner had we set off than the storm hit'."),
      mc("5. Who taught the woman everything?", ["Her teacher.", "Her grandmother.", "Her mother."], 1, "'It was my grandmother who taught me'."),
      mc("6. What did the woman finally do?", ["Give up.", "Achieve her dream after overcoming obstacles.", "Fail."], 1, "'Having overcome so many obstacles, she… achieved her dream'."),
      mc("7. What does the man say about the conversation?", ["It was boring.", "It changed his whole life.", "He forgot it."], 1, "'Little did I know that one conversation would change my whole life'."),
      mc("8. What made the trip worthwhile?", ["The food.", "The breathtaking scenery.", "The hotel."], 1, "'The scenery, which was absolutely breathtaking'."),
    ]),

    ...speakingParts({ p1: "una persona o un momento que cambió tu vida, y qué aprendiste", p2: "dos escenas que muestran a alguien ayudando a otro (un profesor con un alumno y un desconocido echando una mano): compáralas", p3: "qué puede hacer más por cambiar la vida de un/a joven (un buen profesor, una oportunidad, el apoyo familiar, un modelo a seguir, creer en uno mismo): comentadlo y elegid lo más importante", p4: "las personas que nos marcan: si una sola persona puede cambiar una vida, qué hace a alguien un buen modelo y por qué recordamos ciertos momentos toda la vida" }),

    SUMMARY("Resumen de la Semana 6 (B2) — ¡mitad del curso!", [
      "Dominas las relativas (todos los tipos), las cláusulas de participio, las oraciones enfáticas (cleft) y la inversión.",
      "Has completado 30 días: la MITAD del programa B2. 7 partes de UoE, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: gerundios e infinitivos, y los verbos con partícula (phrasal verbs).",
    ]),
    INFO("Mini-simulacro de la Semana 6", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. ¡Vas por la mitad, sigue así!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Relativas, cláusulas y énfasis",
  description: "Oraciones de relativo, cláusulas de participio, oraciones enfáticas (cleft) e inversión enfática. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
