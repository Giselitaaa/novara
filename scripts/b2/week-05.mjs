/**
 * B2 First · Semana 5 — "La voz pasiva y el estilo indirecto".
 * Gramática: la voz pasiva (todas sus formas, causativo, get-passive), las
 * estructuras impersonales de información (is said to / is believed to have), el
 * estilo indirecto y los verbos de reporte + sus patrones.
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
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they seem to be … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 21 ─────────────────────────
const DAY21 = {
  title: "Día 21 — La voz pasiva y el causativo · La tecnología y la industria",
  description: "Pasiva en todos los tiempos, get-passive y have/get something done. Vocabulario de industria. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Usar la pasiva en cualquier tiempo y el causativo con soltura.",
    summary: "Voz pasiva y causativo; la industria; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'has been build'.", "'I made cut my hair'.", "'is being make'."],
    reviewPrompts: ["¿Pasiva en present perfect?", "¿'Me cortaron el pelo' con el causativo?"],
  },
  items: [
    TEXT("🔁 Semana 5. Hoy la VOZ PASIVA (todos sus tiempos), el GET-PASSIVE y el CAUSATIVO. Vocabulario: la TECNOLOGÍA y la INDUSTRIA."),
    GRAMMAR("La voz pasiva y el causativo", `PASIVA = BE (en el tiempo adecuado) + PARTICIPIO:
· present: is made · past: was built · present perfect: has been done · past perfect: had been sent · future: will be built · modal: must be recycled · continuous: is being built / was being repaired · infinitive: to be done / gerund: being done.
El agente va con 'by' solo si importa. Se usa cuando el agente es desconocido, obvio o poco relevante.
GET-PASSIVE (informal, cambios/imprevistos): He got promoted. My bike got stolen.
CAUSATIVO — have/get + OBJETO + PARTICIPIO (un servicio que hace otro): I had my hair cut. We're having the house painted. She got her car repaired. (también algo malo: He had his wallet stolen.)`),
    WARN("Errores típicos del hispanohablante", "· ❌ has been build → ✅ has been built.\n· ❌ I cut my hair (si fuiste a la pelu) → ✅ I had my hair cut.\n· ❌ is being make → ✅ is being made.\n· El participio va al FINAL en el causativo: have + [cosa] + [participio]."),
    grammarEx("Use of English — Pasiva y causativo", "Completa o elige.", [
      fb("The bridge ___ ___ (build) in 1890. (pasado)", ["was built"], "was + participio."),
      fb("The report ___ ___ ___ (not/finish) yet. (present perfect)", ["hasn't been finished", "has not been finished"], "has been + participio."),
      fb("A new hospital ___ ___ ___ (build) at the moment. (presente continuo)", ["is being built"], "is being + participio."),
      mc("Choose (causative):", ["I cut my hair yesterday.", "I had my hair cut yesterday.", "I had cut my hair yesterday."], 1, "causativo → had my hair cut."),
      fb("She ___ her car ___ (get/repair) last week. (causativo)", ["got", "repaired"], "got her car repaired."),
      mc("Choose (get-passive):", ["He got promoted last month.", "He got promote last month.", "He was got promoted."], 0, "get + participio."),
      fb("Plastic bottles must ___ ___ (recycle). (modal)", ["be recycled"], "modal + be + participio."),
    ]),
    GRAMMAR("Vocabulario del día — La industria y la tecnología", "Léxico de industria (B2)."),
    deck("B2 S5D21 — Industria y tecnología", [
      ["manufacture", "fabricar", "The cars are manufactured in Germany.", "verbo", "ˌmænjuˈfæktʃə"],
      ["mass-produce", "producir en serie", "These are mass-produced.", "verbo", "ˌmæs prəˈdjuːs"],
      ["assembly line", "cadena de montaje", "They work on an assembly line.", "colocación", "əˈsembli laɪn"],
      ["outsource", "subcontratar / externalizar", "Production was outsourced abroad.", "verbo", "ˈaʊtsɔːs"],
      ["cutting-edge", "de vanguardia", "It uses cutting-edge technology.", "adjetivo", "ˌkʌtɪŋ ˈedʒ"],
      ["efficiency", "eficiencia", "The new system improved efficiency.", "sustantivo", "ɪˈfɪʃnsi"],
      ["automation", "automatización", "Automation has cut jobs.", "sustantivo", "ˌɔːtəˈmeɪʃn"],
      ["supply chain", "cadena de suministro", "The supply chain was disrupted.", "colocación", "səˈplaɪ tʃeɪn"],
      ["prototype", "prototipo", "They built a working prototype.", "sustantivo", "ˈprəʊtətaɪp"],
      ["patent", "patente / patentar", "The design was patented.", "sustantivo/verbo", "ˈpætnt"],
    ]),
    vocabEx("Vocabulario — La industria y la tecnología", "Elige la opción correcta.", [
      mc("To make goods in large quantities is to ___ them.", ["mass-produce", "outsource", "patent"], 0, "mass-produce."),
      mc("To have work done by another company is to ___ it.", ["outsource", "manufacture", "assemble"], 0, "outsource."),
      mc("The network that gets products from factory to shop is the ___.", ["supply chain", "assembly line", "prototype"], 0, "supply chain."),
      mc("A first working model of a product is a ___.", ["prototype", "patent", "efficiency"], 0, "prototype."),
      mc("Doing more with less waste of time or resources is ___.", ["efficiency", "automation", "outsourcing"], 0, "efficiency."),
      mc("A legal right protecting an invention is a ___.", ["patent", "prototype", "supply chain"], 0, "patent."),
    ]),

    ...uoe({
      p1: {
        title: "How your phone is made",
        text: "The smartphone in your pocket is one of the most complex objects ever (1)___. Its components are sourced from dozens of countries and (2)___ together in vast factories, often on highly automated assembly (3)___. The rare metals inside it may have been mined on one continent, refined on another, and (4)___ into microchips on a third, before the finished device is shipped around the world. This astonishing global (5)___ chain is a marvel of modern efficiency, yet it is also fragile: a disruption in a single factory can (6)___ production everywhere. Increasingly, the routine assembly work is being (7)___ by machines, a process that has made phones cheaper but has also cost many jobs. The next time your phone is (8)___ into your hand, it is worth pausing to consider the extraordinary journey it has already made.",
        q: [
          mc("(1)", ["manufactured", "produced", "created", "built"], 0, "'ever manufactured'."),
          mc("(2)", ["assembled", "gathered", "collected", "joined"], 0, "'assembled together'."),
          mc("(3)", ["lines", "belts", "chains", "tracks"], 0, "'assembly lines'."),
          mc("(4)", ["turned", "made", "formed", "shaped"], 0, "'turned into microchips'."),
          mc("(5)", ["supply", "delivery", "provision", "product"], 0, "'supply chain'."),
          mc("(6)", ["halt", "stop", "end", "close"], 0, "'halt production'."),
          mc("(7)", ["done", "made", "carried", "performed"], 0, "'being done by machines'."),
          mc("(8)", ["placed", "put", "set", "laid"], 0, "'placed into your hand'."),
        ],
      },
      p2: {
        title: "The hidden cost of cheap goods",
        text: "We have grown used to being able to buy almost anything cheaply, but this convenience comes (1)___ a hidden cost. To keep prices low, much production (2)___ been outsourced to countries where labour is cheap and regulations are weak. The clothes we wear may well (3)___ been made by workers earning a fraction of what we would consider a fair wage, in conditions that (4)___ never be tolerated at home. Because these workers are far away and out of sight, their suffering is easily (5)___. It is only when a disaster occurs — a factory fire, a building collapse — that the human cost of our cheap goods is briefly (6)___ to light. The uncomfortable truth is that someone, (7)___, pays the true price of a bargain. As consumers, we have more power (8)___ we realise: by choosing ethically made products, we can help ensure that the person who pays is not a distant worker with no voice.",
        q: [
          fb("(1)", ["at", "with"], "'comes at/with a hidden cost'."),
          fb("(2)", ["has"], "'much production has been outsourced'."),
          fb("(3)", ["have"], "'may well have been made'."),
          fb("(4)", ["would", "could"], "'that would never be tolerated'."),
          fb("(5)", ["ignored", "forgotten", "overlooked"], "'easily ignored'."),
          fb("(6)", ["brought"], "'brought to light'."),
          fb("(7)", ["somewhere"], "'someone, somewhere, pays'."),
          fb("(8)", ["than"], "'more power than we realise'."),
        ],
      },
      p3: {
        title: "The machine that changed the world",
        text: "Few inventions have had as profound an (1)___ as the shipping container. Before it, loading a ship was a slow, (2)___ process, done by hand, that could take days and required armies of workers. The container, a simple standardised steel box, changed everything. Because goods could now be (3)___ sealed at the factory and moved seamlessly from lorry to ship to train, the cost of transporting them (4)___ dramatically. This (5)___ development, though almost invisible to ordinary people, is one of the main reasons why globalisation was even (6)___. It allowed products to be manufactured on the far side of the world and sold cheaply everywhere. The humble container reminds us that the most (7)___ innovations are not always the most glamorous. Sometimes, the object that quietly transforms our lives is nothing more than a well-designed metal (8)___.",
        items: [
          { root: "impact", accepted: ["impact"], hint: "'a profound impact' (sustantivo)." },
          { root: "labour", accepted: ["laborious"], hint: "adjetivo → laborious." },
          { root: "secure", accepted: ["securely"], hint: "adverbio → securely." },
          { root: "fall", accepted: ["fell"], hint: "'the cost… fell dramatically' (pasado)." },
          { root: "seem", accepted: ["seemingly"], hint: "'this seemingly minor development' → seemingly." },
          { root: "possible", accepted: ["possible"], hint: "'even possible' (adjetivo)." },
          { root: "importance", accepted: ["important"], hint: "adjetivo → important." },
          { root: "contain", accepted: ["container"], hint: "sustantivo → container." },
        ],
      },
      p4: {
        title: "Transformaciones — pasiva y causativo",
        items: [
          { s1: "Someone stole my bike last night.", key: "HAD", s2: "I ___ last night.", accepted: ["had my bike stolen"], explanation: "causativo (algo malo)." },
          { s1: "They are building a new factory near here.", key: "BEING", s2: "A new factory ___ near here.", accepted: ["is being built"], explanation: "presente continuo pasiva." },
          { s1: "A mechanic is going to repair my car.", key: "GET", s2: "I'm going to ___ .", accepted: ["get my car repaired"], explanation: "causativo con get." },
          { s1: "They have already sent the parcel.", key: "BEEN", s2: "The parcel ___ already.", accepted: ["has already been sent", "has been sent"], explanation: "present perfect pasiva." },
          { s1: "The company promoted her last month.", key: "GOT", s2: "She ___ last month.", accepted: ["got promoted"], explanation: "get-passive." },
          { s1: "You must recycle these bottles.", key: "BE", s2: "These bottles must ___ .", accepted: ["be recycled"], explanation: "modal + be + participio." },
        ],
      },
      p5: {
        title: "The return of the makers",
        text: "For most of the last century, the story of manufacturing in the wealthy nations of the West was one of steady decline. As companies outsourced production to countries where labour was cheaper, once-mighty industrial towns fell silent, their factories closed, their skilled workers left with nothing. It seemed an unstoppable trend, and for a long time it was. Yet in recent years, something unexpected has begun to happen: in a modest but significant way, manufacturing has started to come home.\n\nSeveral factors lie behind this reversal. The wage gap between rich and poor countries, though still large, has narrowed considerably. The cost and complexity of managing supply chains stretched across the entire globe have become increasingly apparent, especially when a single disruption on the far side of the world can halt production everywhere. And, crucially, the nature of manufacturing itself has changed. As factories become ever more automated, the cost of the human labour that once drove companies abroad matters less and less. A highly automated factory can now be located almost anywhere, and there are real advantages to placing it close to your customers and your designers.\n\nThis trend, sometimes called 'reshoring', is far from a complete solution to the problems of the old industrial regions. The new factories, being so heavily automated, employ far fewer people than the ones they replace. A plant that once provided work for two thousand might now need only two hundred. The jobs that do return tend to require different, more technical skills than the ones that were lost, leaving many former factory workers unable to benefit.\n\nStill, the return of even some manufacturing offers a glimmer of hope, and a lesson. The relentless outsourcing of recent decades came to be seen as an unchangeable law of economics, as inevitable as the tide. It was nothing of the sort. It was the result of particular circumstances, and as those circumstances change, so too does the outcome. The future of industry, it turns out, was never written in stone. It is being shaped, right now, by decisions we are only beginning to understand.",
        q: [
          mc("What was the story of Western manufacturing for most of the last century?", ["Steady growth.", "Steady decline.", "No change.", "Sudden collapse."], 1, "'one of steady decline'."),
          mc("What has recently begun to happen?", ["More outsourcing.", "Manufacturing has started to come home.", "Factories closing faster.", "Nothing."], 1, "'manufacturing has started to come home'."),
          mc("Why does the cost of human labour matter less now?", ["Wages fell.", "Because factories are increasingly automated.", "Fewer products.", "Cheaper materials."], 1, "'As factories become ever more automated'."),
          mc("What is a major limitation of 'reshoring'?", ["It's illegal.", "The new factories employ far fewer people.", "It's too expensive.", "It doesn't work."], 1, "'employ far fewer people'."),
          mc("What kind of jobs tend to return?", ["The same as before.", "More technical ones the old workers may lack.", "Unskilled ones.", "None."], 1, "'require different, more technical skills'."),
          mc("What is the writer's broader lesson?", ["Economics is fixed.", "Trends seen as inevitable can change as circumstances change.", "Nothing changes.", "Outsourcing is permanent."], 1, "'It was nothing of the sort… as those circumstances change, so too does the outcome'."),
        ],
      },
      p6: {
        title: "The rise and fall of a factory town",
        text: "The town of Harlow had grown up around a single great factory. (1)___ For three generations, almost everyone in the town had been employed there, and the rhythms of the whole community were set by its shifts and its hooter.\n\nWhen the factory was finally closed, in a distant boardroom, the effect on Harlow was devastating. (2)___ Within a few years, a third of the shops on the high street had shut, and many of the younger residents had left to seek work elsewhere.\n\nFor a long time, it seemed that Harlow's story was simply over. (3)___ Then, slowly, the town began to reinvent itself. The vast, empty factory buildings, once symbols of loss, turned out to be a hidden asset.\n\nWith their cheap space and industrial character, the old buildings began to attract a new kind of tenant. (4)___ Artists moved into the former workshops; small technology firms, drawn by the low rents, set up in the old offices. A brewery opened in the boiler house.\n\nHarlow today is not the town it was, and the well-paid, secure jobs of the factory era have not returned. (5)___ But the town is alive again, in a new and different way, built on many small enterprises rather than one giant employer. (6)___ Its story is a reminder that even the deepest wound can, with time and imagination, begin to heal.",
        options: [
          "Everything in the town depended on that one employer.",       // A -> gap 1
          "Overnight, the community lost its very reason for existing.",  // B -> gap 2
          "The population fell, and a sense of hopelessness set in.",     // C -> gap 3
          "What no one had foreseen was their second life.",             // D -> gap 4
          "Nothing about its recovery has been quick or easy.",          // E -> gap 5
          "Harlow, against the odds, has found a future.",               // F -> gap 6
          "The factory reopened and everyone got their jobs back.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: todo dependía de un empleador."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: perdió su razón de existir."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: cayó la población y la esperanza."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: nadie previó su segunda vida."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nada fue rápido ni fácil."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: Harlow halló un futuro."),
        ],
      },
      p7: {
        title: "Four people talk about how things are made",
        text: "Read what four people say about manufacturing and consumption.\n\nA) NADIA: I only ever buy things that are built to last. It costs more upfront, but I'd rather have one well-made item than ten cheap ones that fall apart. We've been trained to see everything as disposable, and it's a disaster — for our wallets and for the planet. Quality is the real economy.\n\nB) TOM: I find modern manufacturing genuinely miraculous. The fact that I can buy a device containing materials from thirty countries, assembled with incredible precision, for the price of a meal out — that's an astonishing human achievement. People are far too quick to complain about a system that has lifted billions out of poverty.\n\nC) PRIYA: What worries me is how far removed we've become from how things are made. We buy without any thought for the workers who made our clothes, often in terrible conditions on the other side of the world. If we had to watch our goods being produced, I think we'd shop very differently.\n\nD) SAM: I'm fascinated by the return of small-scale, local production — people making furniture, brewing beer, growing food, right in their own communities. After decades of everything being mass-produced far away, there's a real hunger for things that are made by hand, by someone you can actually meet. I think it's the future.",
        q: [
          mc("Who prefers a few well-made items to many cheap ones?", ["A", "B", "C", "D"], 0, "Nadia: 'one well-made item than ten cheap ones'."),
          mc("Who admires modern manufacturing as a human achievement?", ["A", "B", "C", "D"], 1, "Tom: 'an astonishing human achievement'."),
          mc("Who is troubled by our distance from how goods are made?", ["A", "B", "C", "D"], 2, "Priya: 'how far removed we've become'."),
          mc("Who is excited by the return of local, hand-made production?", ["A", "B", "C", "D"], 3, "Sam: 'small-scale, local production'."),
          mc("Who criticises the culture of disposable goods?", ["A", "B", "C", "D"], 0, "Nadia: 'see everything as disposable'."),
          mc("Who defends a system that has reduced poverty?", ["A", "B", "C", "D"], 1, "Tom: 'lifted billions out of poverty'."),
          mc("Who thinks we'd shop differently if we saw production?", ["A", "B", "C", "D"], 2, "Priya: 'if we had to watch our goods being produced'."),
          mc("Who values things made by someone you can meet?", ["A", "B", "C", "D"], 3, "Sam: 'made by hand, by someone you can actually meet'."),
          mc("Who mentions the workers who make our clothes?", ["A", "B", "C", "D"], 2, "Priya: 'the workers who made our clothes'."),
          mc("Who believes quality is the real economy?", ["A", "B", "C", "D"], 0, "Nadia: 'Quality is the real economy'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'We should always buy quality goods that last, even if they cost more.'\nComenta estos dos aspectos y añade uno propio:\n1. money (el dinero)\n2. the environment (el medio ambiente)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'Are we too dependent on cheap, mass-produced goods?' — analiza el tema.\n· RESEÑA de un producto tecnológico bien hecho que poseas: descríbelo y di si merece su precio.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: These trainers are made by hand — that's why they cost so much. Two. Man: My phone got stolen on the train yesterday. Three. Woman: We're having the kitchen redecorated next week. Four. Man: The whole factory has been automated; there are hardly any workers left. Five. Woman: This design has just been patented, so no one else can copy it. Six. Man: I got my watch repaired, and it's as good as new. Seven. Woman: Production's being moved abroad to cut costs. Eight. Man: A new bridge is going to be built across the river.", [
      mc("1. Why are the trainers expensive?", ["They're imported.", "They're made by hand.", "They're branded."], 1, "'made by hand'."),
      mc("2. What happened to the man's phone?", ["He lost it.", "It got stolen.", "It broke."], 1, "'got stolen'."),
      mc("3. What is happening to the kitchen?", ["It's being sold.", "It's being redecorated.", "It's being cleaned."], 1, "'having the kitchen redecorated'."),
      mc("4. What has happened to the factory?", ["It closed.", "It's been automated.", "It expanded."], 1, "'has been automated'."),
      mc("5. What has happened to the design?", ["It's been copied.", "It's been patented.", "It's been sold."], 1, "'just been patented'."),
      mc("6. What did the man do with his watch?", ["Sold it.", "Got it repaired.", "Threw it away."], 1, "'got my watch repaired'."),
      mc("7. Why is production being moved abroad?", ["Better quality.", "To cut costs.", "New market."], 1, "'to cut costs'."),
      mc("8. What is going to be built?", ["A factory.", "A bridge.", "A road."], 1, "'a new bridge… built across the river'."),
    ]),

    ...speakingParts({ p1: "qué aparatos usas, si prefieres calidad o precio y si te importa cómo se fabrican las cosas", p2: "dos formas de fabricar (una fábrica automatizada y un taller artesanal): compáralas y di qué se gana y se pierde con cada una", p3: "qué debería tener en cuenta una empresa al fabricar un producto (precio, calidad, condiciones de los trabajadores, medio ambiente, rapidez): comentadlo y elegid lo más importante", p4: "la industria y el consumo: si compramos demasiado, si la automatización es buena o mala y de dónde vienen nuestras cosas" }),

    SUMMARY("Resumen del Día 21", [
      "Pasiva = BE + participio en cualquier tiempo (is made, was built, has been done, is being built, must be recycled).",
      "get-passive (got stolen). Causativo: have/get + objeto + participio (had my hair cut).",
      "Vocabulario de industria. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 22", "Escribe 4 frases pasivas en distintos tiempos y 2 con el causativo. Repasa las flashcards. Mañana: estructuras impersonales de información."),
  ],
};

// ───────────────────────── DÍA 22 ─────────────────────────
const DAY22 = {
  title: "Día 22 — Estructuras impersonales de información · La ciencia y los medios",
  description: "It is said that… / is believed to (have) …. Vocabulario de medios. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Informar de creencias generales con estructuras impersonales.",
    summary: "Estructuras impersonales; ciencia/medios; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'It is said to X is…'.", "'is believed to be' con pasado mal.", "'people says'."],
    reviewPrompts: ["¿'se cree que fue…' con to + have?", "¿'It is thought that…' + qué?"],
  },
  items: [
    TEXT("🔁 Repaso: pasiva. Hoy las ESTRUCTURAS IMPERSONALES de información (se dice que…, se cree que…). Vocabulario: la CIENCIA y los MEDIOS."),
    GRAMMAR("Estructuras impersonales de información", `Para informar de lo que se dice/cree en general, sin decir quién:
1) IT + is/was + participio + THAT + frase:
· It is said that the painting is a fake. It was believed that the earth was flat. It is thought that…
2) Sujeto + is/was + participio + TO + infinitivo:
· The painting is said to be a fake. He is believed to be abroad.
· Pasado (algo anterior) → to HAVE + participio: He is believed to have left the country. She is said to have been a spy.
Verbos: say, believe, think, know, expect, report, consider, allege, claim, understand.
⚠️ 'is said to BE' (presente) vs 'is said to HAVE been' (pasado). Muy frecuentes en noticias.`),
    WARN("Errores típicos del hispanohablante", "· ❌ It is said to the painting is fake → ✅ It is said that the painting is fake / The painting is said to be fake.\n· ❌ He is believed to left → ✅ He is believed to have left.\n· ❌ People says → ✅ People say / It is said.\n· 'to have + participio' para lo anterior."),
    grammarEx("Use of English — Estructuras impersonales", "Transforma o completa.", [
      fb("People say the house is haunted. → It is ___ that the house is haunted.", ["said"], "It is said that."),
      fb("They believe he is a genius. → He is ___ to be a genius.", ["believed"], "is believed to be."),
      fb("People think she left the country. → She is thought to ___ ___ the country. (pasado)", ["have left"], "to have + participio."),
      mc("Choose:", ["It is said to the water is clean.", "It is said that the water is clean.", "It is said the water clean."], 1, "It is said THAT + frase."),
      fb("They say the painting was stolen. → The painting is said to ___ ___ ___. (pasado, pasiva)", ["have been stolen"], "to have been + participio."),
      fb("Experts expect prices to rise. → Prices are ___ to rise.", ["expected"], "are expected to."),
      fb("People claim he is the richest man alive. → He is ___ to be the richest man alive.", ["claimed"], "is claimed to be."),
    ]),
    GRAMMAR("Vocabulario del día — La ciencia y los medios", "Léxico de ciencia y medios (B2)."),
    deck("B2 S5D22 — Ciencia y medios", [
      ["research", "investigación", "The research was published today.", "sustantivo", "rɪˈsɜːtʃ"],
      ["evidence", "pruebas / evidencia", "There's strong evidence for it.", "sustantivo", "ˈevɪdəns"],
      ["breakthrough", "avance decisivo", "It was a major breakthrough.", "sustantivo", "ˈbreɪkθruː"],
      ["headline", "titular", "It made the front-page headline.", "sustantivo", "ˈhedlaɪn"],
      ["coverage", "cobertura (informativa)", "The story got huge coverage.", "sustantivo", "ˈkʌvərɪdʒ"],
      ["bias", "sesgo / parcialidad", "The report showed clear bias.", "sustantivo", "ˈbaɪəs"],
      ["misleading", "engañoso/a", "The headline was misleading.", "adjetivo", "mɪsˈliːdɪŋ"],
      ["source", "fuente", "Always check your sources.", "sustantivo", "sɔːs"],
      ["allegedly", "presuntamente", "He allegedly took the money.", "adverbio", "əˈledʒɪdli"],
      ["debunk", "desmentir / refutar", "The myth has been debunked.", "verbo", "diːˈbʌŋk"],
    ]),
    vocabEx("Vocabulario — La ciencia y los medios", "Elige la opción correcta.", [
      mc("Facts that support a claim are ___.", ["evidence", "bias", "coverage"], 0, "evidence."),
      mc("An unfair preference that distorts reporting is ___.", ["bias", "coverage", "source"], 0, "bias."),
      mc("Information that gives a false impression is ___.", ["misleading", "reliable", "objective"], 0, "misleading."),
      mc("Where a piece of information comes from is its ___.", ["source", "headline", "coverage"], 0, "source."),
      mc("To prove that a claim or myth is false is to ___ it.", ["debunk", "cover", "source"], 0, "debunk."),
      mc("A word meaning 'supposedly, but not proven' is ___.", ["allegedly", "clearly", "reportedly"], 0, "allegedly."),
    ]),

    ...uoe({
      p1: {
        title: "How to spot bad science",
        text: "Barely a week goes by without a dramatic health headline: this food is said to (1)___ cancer, that habit is believed to add years to your life. Most of these claims deserve to be treated with (2)___ scepticism. Genuine scientific findings are rarely as simple, or as certain, as the headlines (3)___ them appear. A single study, however exciting, proves very little; real knowledge is built up (4)___ over many studies, by many teams, over many years. Worse, science stories are often reported by journalists under (5)___ to make dull findings sound thrilling. A cautious 'may possibly be linked to' in the original research becomes a bold 'causes' in the headline. The (6)___ reader learns to ask a few simple questions. Who funded the study? How many people took part? Has the finding been (7)___ by other researchers? Above all, if a claim sounds too good, or too alarming, to be true, it very probably (8)___.",
        q: [
          mc("(1)", ["cause", "make", "give", "produce"], 0, "'said to cause cancer'."),
          mc("(2)", ["healthy", "genuine", "serious", "deep"], 0, "'healthy scepticism'."),
          mc("(3)", ["make", "let", "have", "get"], 0, "'the headlines make them appear'."),
          mc("(4)", ["gradually", "slowly", "steadily", "carefully"], 0, "'built up gradually'."),
          mc("(5)", ["pressure", "stress", "strain", "force"], 0, "'under pressure'."),
          mc("(6)", ["wise", "clever", "smart", "sharp"], 0, "'The wise reader'."),
          mc("(7)", ["confirmed", "proved", "shown", "checked"], 0, "'confirmed by other researchers'."),
          mc("(8)", ["is", "isn't", "does", "will"], 1, "'too good… to be true, it very probably isn't'."),
        ],
      },
      p2: {
        title: "The problem with 'fake news'",
        text: "The phrase 'fake news' has become so common that it (1)___ almost lost its meaning. Originally, it referred to entirely fabricated stories, deliberately created (2)___ deceive. Now it is thrown at any report that someone (3)___ happens to dislike, which is itself a dangerous development. The real problem is subtler than outright lies. Much misleading information is (4)___ believed to be false; it is simply presented in a way (5)___ creates a false impression. A true fact can mislead if it is stripped of context, or if it is given far (6)___ prominence than it deserves. It is said (7)___ a lie can travel halfway around the world before the truth has got its boots on, and social media has made this truer than ever. The only real defence is an educated, sceptical public, willing to check sources and to resist the powerful pull of stories that simply confirm (8)___ they already believe.",
        q: [
          fb("(1)", ["has"], "'it has almost lost its meaning'."),
          fb("(2)", ["to"], "'created to deceive'."),
          fb("(3)", ["just"], "'someone just happens to dislike'."),
          fb("(4)", ["not"], "'is not believed to be false'."),
          fb("(5)", ["that", "which"], "'a way that creates a false impression'."),
          fb("(6)", ["more"], "'far more prominence'."),
          fb("(7)", ["that"], "'It is said that a lie…'"),
          fb("(8)", ["what"], "'confirm what they already believe'."),
        ],
      },
      p3: {
        title: "The reproducibility crisis",
        text: "Science's greatest (1)___ is that its findings can, in principle, be checked: a genuine result should be (2)___ by other researchers repeating the experiment. Alarmingly, however, it has recently emerged that a large proportion of published studies cannot be reproduced. This so-called 'reproducibility crisis' has forced a painful (3)___ within science itself. Several factors are (4)___ to be responsible. There is intense pressure on researchers to produce (5)___, publishable results, which can tempt them, consciously or not, to overstate their findings. There is also a (6)___ towards publishing exciting positive results while quietly ignoring the unglamorous negative ones. None of this means that science is (7)___; on the contrary, the very fact that the crisis was identified, by scientists, is a sign of the system's health. Science remains the most (8)___ method we have for understanding the world — precisely because, unlike other belief systems, it is willing to question and correct itself.",
        items: [
          { root: "strong", accepted: ["strength"], hint: "sustantivo → strength." },
          { root: "confirm", accepted: ["confirmed"], hint: "'be confirmed' (participio)." },
          { root: "examine", accepted: ["examination"], hint: "sustantivo → examination." },
          { root: "believe", accepted: ["believed"], hint: "'are believed to be responsible' (participio)." },
          { root: "strike", accepted: ["striking"], hint: "'striking, publishable results' → striking." },
          { root: "bias", accepted: ["bias"], hint: "'a bias towards publishing' (sustantivo)." },
          { root: "worth", accepted: ["worthless"], hint: "'science is worthless' → worthless." },
          { root: "rely", accepted: ["reliable"], hint: "adjetivo → reliable." },
        ],
      },
      p4: {
        title: "Transformaciones — impersonales",
        items: [
          { s1: "People believe the castle is over 800 years old.", key: "BELIEVED", s2: "The castle ___ over 800 years old.", accepted: ["is believed to be"], explanation: "is believed to be." },
          { s1: "They say he made his fortune very young.", key: "SAID", s2: "He ___ his fortune very young.", accepted: ["is said to have made"], explanation: "to have + participio." },
          { s1: "Experts expect the economy to recover.", key: "EXPECTED", s2: "The economy ___ recover.", accepted: ["is expected to"], explanation: "is expected to." },
          { s1: "People think the painting was stolen years ago.", key: "THOUGHT", s2: "The painting ___ years ago.", accepted: ["is thought to have been stolen"], explanation: "to have been + participio (pasiva)." },
          { s1: "Everyone knows that exercise reduces stress.", key: "KNOWN", s2: "It ___ that exercise reduces stress.", accepted: ["is well known", "is known"], explanation: "It is known that." },
          { s1: "They allege that the company hid the truth.", key: "ALLEGED", s2: "The company ___ the truth.", accepted: ["is alleged to have hidden"], explanation: "is alleged to have + participio." },
        ],
      },
      p5: {
        title: "The scientist the world ignored",
        text: "In 1847, a young doctor named Ignaz Semmelweis made a discovery that should have saved millions of lives. Working in a Vienna maternity hospital, he was tormented by the terrible death rate among new mothers, who were dying in appalling numbers from what was then called 'childbed fever'. What made it stranger still was that the death rate in the ward run by doctors was far higher than in the one run by midwives. Semmelweis was determined to understand why.\n\nAfter painstaking investigation, he arrived at a conclusion that was, for its time, revolutionary. The doctors, unlike the midwives, routinely moved straight from performing autopsies on the dead to examining living patients, without washing their hands. Semmelweis proposed that they were, in effect, carrying some invisible agent of death from the corpses to the mothers. When he insisted that doctors wash their hands in a disinfecting solution, the death rate in his ward plummeted almost overnight.\n\nToday, this seems like obvious common sense, and Semmelweis is regarded as a hero, a pioneer of the germ theory of disease. At the time, however, his findings were furiously rejected. The idea that respected doctors might themselves be the cause of their patients' deaths was deeply offensive to the medical establishment. His theory was said to lack a proper scientific explanation — which was true, since the existence of germs had not yet been proven — and he was mocked, ignored and eventually driven from his post. He died, broken and forgotten, in an asylum, at the age of just forty-seven.\n\nThe tragedy of Semmelweis is often told as a simple story of a genius rejected by fools. The truth is more uncomfortable. His critics were not stupid; they were, by the standards of their time, being properly cautious, demanding a mechanism he could not provide. The real lesson is a hard one: that being right is not always enough, that evidence can be resisted when it threatens what we would prefer to believe, and that the price of this resistance is sometimes paid in human lives. It is a lesson, sadly, that every generation seems doomed to learn anew.",
        q: [
          mc("What problem tormented Semmelweis?", ["Low pay.", "The high death rate among new mothers.", "Overcrowding.", "Lack of doctors."], 1, "'the terrible death rate among new mothers'."),
          mc("What did he discover was the cause?", ["Bad food.", "Doctors moving from autopsies to patients without washing hands.", "The weather.", "The midwives."], 1, "'without washing their hands… carrying some invisible agent of death'."),
          mc("What happened when doctors washed their hands?", ["Nothing.", "The death rate plummeted.", "It rose.", "They refused."], 1, "'the death rate… plummeted almost overnight'."),
          mc("How were his findings received at the time?", ["With praise.", "Furiously rejected.", "With indifference.", "Immediately adopted."], 1, "'his findings were furiously rejected'."),
          mc("Why, according to the passage, were his critics not simply stupid?", ["They were jealous.", "They were being cautious, demanding a mechanism he couldn't provide.", "They hated him.", "They were paid to reject it."], 1, "'demanding a mechanism he could not provide'."),
          mc("What is the 'hard lesson' of the story?", ["Doctors are foolish.", "Being right is not always enough; evidence can be resisted.", "Germs don't exist.", "Never trust science."], 1, "'being right is not always enough… evidence can be resisted'."),
        ],
      },
      p6: {
        title: "The myth that wouldn't die",
        text: "Some false beliefs are astonishingly difficult to kill. (1)___ No matter how thoroughly they are debunked by the evidence, they rise again, as persistent as weeds.\n\nConsider the widespread belief that we use only ten per cent of our brains. (2)___ It is completely false; brain scans show that we use virtually all of our brain, though not all at once. And yet the myth persists, repeated endlessly in films, articles and casual conversation.\n\nWhy are such myths so hard to eradicate? (3)___ Part of the answer is that they are often more appealing than the truth. The ten-per-cent myth is attractive because it flatters us with the promise of untapped potential.\n\nWorse still, research suggests that simply repeating a myth in order to debunk it can actually reinforce it. (4)___ People remember the vivid claim long after they have forgotten the boring correction that accompanied it.\n\nThis presents a real challenge for anyone trying to combat misinformation. (5)___ Merely stating that something is false is often not enough, and may even do harm. (6)___ The most effective approach, experts now believe, is not to repeat the myth at all, but to replace it with an equally memorable, and true, alternative.",
        options: [
          "They seem to survive every attempt to disprove them.",         // A -> gap 1
          "It has been repeated so often that most people accept it.",    // B -> gap 2
          "The reasons are more psychological than you might expect.",    // C -> gap 3
          "The lie, endlessly restated, becomes ever more familiar.",     // D -> gap 4
          "Fighting misinformation is harder than it sounds.",            // E -> gap 5
          "You must give people a better story, not just a correction.",  // F -> gap 6
          "Such myths are always quickly and easily forgotten.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: sobreviven a todo intento."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: se repite tanto que se acepta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: razones psicológicas."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la mentira repetida se vuelve familiar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: combatir la desinformación es difícil."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: hay que dar una historia mejor."),
        ],
      },
      p7: {
        title: "Four people discuss how they get their news",
        text: "Read what four people say about news and information.\n\nA) HELEN: I've stopped watching the news almost entirely, and I feel much better for it. It's relentlessly negative, designed to frighten and outrage, because that's what keeps us watching. I still read a serious weekly paper to stay informed, but the constant drip of breaking news was making me anxious and achieving nothing.\n\nB) RAJ: I make a point of reading news sources I disagree with. It's uncomfortable, but if I only ever read things that confirm what I already think, I'm not informing myself — I'm just being flattered. The most dangerous bias is the one you can't see, which is usually your own.\n\nC) MAYA: What worries me most is how impossible it's become to tell what's true. Anyone can publish anything, and a convincing lie now spreads faster than a boring fact. I check every surprising story against several reliable sources before I believe it, let alone share it. Everyone should.\n\nD) TOM: Honestly, I get most of my news from social media, and I know that's supposed to be terrible. But it's also how I hear about things the mainstream media ignores. Yes, you have to be careful, and yes, there's a lot of rubbish. But dismissing all of it as 'fake news' is just as lazy as believing all of it.",
        q: [
          mc("Who has largely given up watching the news?", ["A", "B", "C", "D"], 0, "Helen: 'I've stopped watching the news almost entirely'."),
          mc("Who deliberately reads views they disagree with?", ["A", "B", "C", "D"], 1, "Raj: 'reading news sources I disagree with'."),
          mc("Who checks surprising stories against several sources?", ["A", "B", "C", "D"], 2, "Maya: 'check every surprising story against several reliable sources'."),
          mc("Who values social media for stories others ignore?", ["A", "B", "C", "D"], 3, "Tom: 'things the mainstream media ignores'."),
          mc("Who says the news is designed to frighten and outrage?", ["A", "B", "C", "D"], 0, "Helen: 'designed to frighten and outrage'."),
          mc("Who warns about the bias you can't see in yourself?", ["A", "B", "C", "D"], 1, "Raj: 'The most dangerous bias is… your own'."),
          mc("Who worries it's become impossible to tell what's true?", ["A", "B", "C", "D"], 2, "Maya: 'how impossible it's become to tell what's true'."),
          mc("Who thinks dismissing everything as 'fake news' is lazy?", ["A", "B", "C", "D"], 3, "Tom: 'just as lazy as believing all of it'."),
          mc("Who found constant news made them anxious?", ["A", "B", "C", "D"], 0, "Helen: 'making me anxious'."),
          mc("Who believes only reading agreeable news is mere flattery?", ["A", "B", "C", "D"], 1, "Raj: 'just being flattered'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'People can no longer tell the difference between true and false information.'\nComenta estos dos aspectos y añade uno propio:\n1. social media (las redes sociales)\n2. education (la educación)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to spot fake news' — da consejos prácticos a los lectores.\n· CARTA a un periódico respondiendo a un artículo engañoso: señala el error y explica por qué importa.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una periodista científica, Emma, hablando sobre cómo leer las noticias de ciencia (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a science journalist called Emma giving advice on reading science news. Emma: My job is to translate complicated research into stories people can understand, and I want to share what I've learned. The first thing to know is that a single study proves very little. Real scientific knowledge is built up gradually, over many studies. So be suspicious of any headline based on just one piece of research. Second, always ask who paid for the study. If research into a sugary drink was funded by the company that sells it, treat the results with extreme caution. Third, watch out for the difference between correlation and causation. Just because two things happen together doesn't mean one causes the other. Journalists, and headlines especially, constantly confuse the two. My fourth tip is to check whether the finding has been confirmed by other teams — that's what really matters. And finally, remember that the most sensational headlines are usually the least reliable. If a claim sounds too amazing to be true, it almost certainly is. Good science is usually modest, careful and, frankly, a little boring. And that's exactly why you can trust it.", [
      fb("A single study proves very ___.", ["little"], "'proves very little'."),
      fb("Scientific knowledge is built up ___.", ["gradually"], "'built up gradually'."),
      fb("Always ask who ___ for the study.", ["paid"], "'who paid for the study'."),
      fb("Don't confuse correlation with ___.", ["causation"], "'correlation and causation'."),
      fb("Check whether a finding has been ___ by other teams.", ["confirmed"], "'confirmed by other teams'."),
      fb("The most ___ headlines are usually the least reliable.", ["sensational"], "'the most sensational headlines'."),
      fb("If a claim sounds too amazing to be ___, it probably is.", ["true"], "'too amazing to be true'."),
      fb("Good science is usually modest, careful and a little ___.", ["boring"], "'a little boring'."),
    ]),

    ...speakingParts({ p1: "cómo te informas, si confías en las noticias y cómo distingues lo verdadero de lo falso", p2: "dos formas de consumir noticias (leyendo un periódico y mirando el móvil): compáralas y di sus ventajas e inconvenientes", p3: "qué debería enseñarse en la escuela para combatir la desinformación (pensamiento crítico, comprobar fuentes, ciencia, historia): comentadlo y elegid lo más útil", p4: "los medios y la información: si podemos fiarnos de las noticias, por qué se difunden bulos y cómo pensar de forma crítica" }),

    SUMMARY("Resumen del Día 22", [
      "It is said/believed/thought THAT + frase. Sujeto + is said/believed TO + infinitivo (o to have + participio para el pasado).",
      "Muy frecuentes en noticias y ciencia. 'is said to be' (presente) vs 'is said to have been' (pasado).",
      "Vocabulario de ciencia y medios. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 23", "Escribe 3 frases impersonales (is said to / is believed to have). Repasa las flashcards. Mañana: el estilo indirecto."),
  ],
};

// ───────────────────────── DÍA 23 ─────────────────────────
const DAY23 = {
  title: "Día 23 — El estilo indirecto · La comunicación",
  description: "Reported speech (afirmaciones, preguntas, backshift) y cambios de tiempo/lugar. Vocabulario de comunicación. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Contar con precisión lo que otros dijeron y preguntaron.",
    summary: "Estilo indirecto; la comunicación; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["no hacer el backshift.", "'He said me'.", "'asked where do you live'."],
    reviewPrompts: ["¿Present perfect pasa a…?", "¿Orden en la pregunta indirecta?"],
  },
  items: [
    TEXT("🔁 Repaso: impersonales. Hoy el ESTILO INDIRECTO (reported speech). Vocabulario: la COMUNICACIÓN."),
    GRAMMAR("El estilo indirecto", `BACKSHIFT (el verbo retrocede un tiempo):
· present → past: "I'm tired" → She said she was tired.
· past simple / present perfect → past perfect: "I saw it" → He said he had seen it.
· will → would; can → could; must → had to; may → might.
CAMBIOS: I→he/she, now→then, today→that day, tomorrow→the next day, here→there, this→that.
PREGUNTAS INDIRECTAS: orden AFIRMATIVO, sin do/does/did, sin '?'. Sí/No → if/whether.
· "Where do you live?" → She asked where I lived. "Are you coming?" → He asked if I was coming.
SAY vs TELL: say (sin objeto) / tell + objeto (told me). ⚠️ No 'said me'.
No se hace backshift si sigue siendo verdad general (opcional).`),
    WARN("Errores típicos del hispanohablante", "· ❌ He said me → ✅ He told me / He said (to me).\n· ❌ She asked where do I live → ✅ where I lived.\n· ❌ He said he is tired → ✅ he was tired.\n· ❌ She asked was I coming → ✅ if I was coming."),
    grammarEx("Use of English — Estilo indirecto", "Transforma o elige.", [
      fb("\"I'm exhausted.\" → She said she ___ exhausted.", ["was"], "present → past."),
      fb("\"I've finished.\" → He said he ___ ___ (finish).", ["had finished"], "present perfect → past perfect."),
      fb("\"Where do you work?\" → She asked me where I ___.", ["worked"], "orden afirmativo + backshift."),
      fb("\"Are you coming?\" → He asked ___ I was coming.", ["if", "whether"], "sí/no → if/whether."),
      mc("Choose:", ["He said me he was busy.", "He told me he was busy.", "He told he was busy."], 1, "tell + objeto."),
      fb("\"I'll help you.\" → She said she ___ help me.", ["would"], "will → would."),
      fb("\"I saw her yesterday.\" → He said he ___ ___ her the day before.", ["had seen"], "past → past perfect + yesterday→the day before."),
    ]),
    GRAMMAR("Vocabulario del día — La comunicación", "Léxico de comunicación (B2)."),
    deck("B2 S5D23 — La comunicación", [
      ["get across", "transmitir / hacer entender", "It's hard to get my point across.", "phrasal verb", "ɡet əˈkrɒs"],
      ["misunderstanding", "malentendido", "It was all a misunderstanding.", "sustantivo", "ˌmɪsʌndəˈstændɪŋ"],
      ["fluent", "fluido/a (en un idioma)", "She's fluent in three languages.", "adjetivo", "ˈfluːənt"],
      ["articulate", "que se expresa bien", "He's a very articulate speaker.", "adjetivo", "ɑːˈtɪkjulət"],
      ["body language", "lenguaje corporal", "Body language says a lot.", "colocación", "ˈbɒdi læŋɡwɪdʒ"],
      ["small talk", "conversación trivial", "I'm not good at small talk.", "colocación", "ˌsmɔːl ˈtɔːk"],
      ["get the wrong end of the stick", "malinterpretar", "You've got the wrong end of the stick.", "expresión", "ɡet ðə rɒŋ end əv ðə stɪk"],
      ["put it bluntly", "decirlo sin rodeos", "To put it bluntly, it failed.", "expresión", "pʊt ɪt ˈblʌntli"],
      ["read between the lines", "leer entre líneas", "You have to read between the lines.", "expresión", "riːd bɪˌtwiːn ðə ˈlaɪnz"],
      ["long-winded", "farragoso / que se enrolla", "His speech was long-winded.", "adjetivo", "ˌlɒŋ ˈwɪndɪd"],
    ]),
    vocabEx("Vocabulario — La comunicación", "Elige la opción correcta.", [
      mc("To succeed in making people understand your idea is to ___ it ___.", ["get / across", "read / between", "put / bluntly"], 0, "get it across."),
      mc("Someone who expresses ideas clearly and well is ___.", ["articulate", "long-winded", "fluent"], 0, "articulate."),
      mc("To understand a hidden meaning is to ___.", ["read between the lines", "get across", "make small talk"], 0, "read between the lines."),
      mc("A speech that is too long and boring is ___.", ["long-winded", "articulate", "fluent"], 0, "long-winded."),
      mc("Casual conversation about unimportant things is ___.", ["small talk", "body language", "a misunderstanding"], 0, "small talk."),
      mc("To completely misunderstand a situation is to get ___.", ["the wrong end of the stick", "across", "fluent"], 0, "the wrong end of the stick."),
    ]),

    ...uoe({
      p1: {
        title: "The art of really listening",
        text: "We tend to think of communication as being about how well we (1)___, but the best communicators are often those who have mastered the far rarer art of listening. Most people, when another person is speaking, are not really listening at all; they are simply (2)___ for their turn to talk, mentally rehearsing what they will say next. True listening requires us to (3)___ aside our own thoughts entirely and give the other person our complete attention. When we do this, something remarkable happens: people open up, and misunderstandings, which so often (4)___ from half-hearted attention, simply melt away. It also helps to read (5)___ the lines. Much of what people really mean is communicated not by their words but by their tone and their body (6)___. A good listener attends to all of these signals. Paradoxically, then, the way to become a better communicator may have less to do with learning to (7)___ your point across, and more to do with the humble, difficult and deeply generous act of truly (8)___ to someone else.",
        q: [
          mc("(1)", ["speak", "talk", "say", "tell"], 0, "'how well we speak'."),
          mc("(2)", ["waiting", "hoping", "looking", "wishing"], 0, "'waiting for their turn'."),
          mc("(3)", ["set", "put", "lay", "leave"], 0, "'set aside our own thoughts'."),
          mc("(4)", ["arise", "come", "appear", "result"], 0, "'misunderstandings… arise from'."),
          mc("(5)", ["between", "among", "through", "across"], 0, "'read between the lines'."),
          mc("(6)", ["language", "movement", "signal", "gesture"], 0, "'body language'."),
          mc("(7)", ["get", "put", "make", "bring"], 0, "'get your point across'."),
          mc("(8)", ["listening", "hearing", "attending", "understanding"], 0, "'truly listening'."),
        ],
      },
      p2: {
        title: "Lost in translation",
        text: "Anyone who has tried to master a foreign language knows (1)___ humbling it can be. You may become perfectly fluent in grammar and vocabulary and still find (2)___ constantly getting the wrong end of the stick. This is because so much of communication has (3)___ to do with the words themselves. Humour, irony, politeness — these are conveyed by countless subtle signals that differ enormously from one culture to (4)___. A remark that is friendly teasing in one country may be a deadly insult in the next. Even silence carries meaning: in some cultures, a long pause is a sign of respect, (5)___ in others it signals awkwardness or disagreement. This is why a phrasebook, though useful, will never be (6)___. To communicate truly, you must learn not just a language but a whole way of seeing the world. It is difficult, occasionally embarrassing, and (7)___ deeply rewarding. For in learning to understand how another culture communicates, you come to understand something profound about (8)___ own.",
        q: [
          fb("(1)", ["how"], "'knows how humbling it can be'."),
          fb("(2)", ["yourself"], "reflexivo → yourself."),
          fb("(3)", ["little"], "'has little to do with the words'."),
          fb("(4)", ["another"], "'from one culture to another'."),
          fb("(5)", ["while", "whereas"], "'while/whereas in others…'"),
          fb("(6)", ["enough"], "'will never be enough'."),
          fb("(7)", ["yet", "but"], "'and yet deeply rewarding'."),
          fb("(8)", ["your"], "'about your own'."),
        ],
      },
      p3: {
        title: "Why we misunderstand each other",
        text: "Given how much we communicate, it is remarkable how often we (1)___ one another. Part of the problem is that we vastly overestimate how (2)___ we are getting our message across. Studies show that speakers routinely believe they have been perfectly (3)___, when in fact their listeners have understood something quite different. This 'illusion of (4)___' is made worse by the fact that we interpret everything we hear through the filter of our own (5)___ and expectations. Two people can hear exactly the same words and come away with completely opposite (6)___ of what was meant. The lesson, communication experts suggest, is a humbling one: we should be far less confident that we have been understood, and far more willing to check. A simple question — 'Just to be sure, what did you (7)___ from that?' — can prevent a world of misunderstanding. Good communication, it turns out, is not a matter of (8)___ transmission, but of patient, mutual checking.",
        items: [
          { root: "understand", accepted: ["misunderstand"], hint: "'we misunderstand one another' → misunderstand." },
          { root: "success", accepted: ["successfully"], hint: "adverbio → successfully." },
          { root: "clear", accepted: ["clear"], hint: "'been perfectly clear' (adjetivo)." },
          { root: "communicate", accepted: ["communication"], hint: "'illusion of communication' (sustantivo)." },
          { root: "assume", accepted: ["assumptions"], hint: "sustantivo plural → assumptions." },
          { root: "impress", accepted: ["impressions"], hint: "sustantivo plural → impressions." },
          { root: "understand", accepted: ["understand"], hint: "'what did you understand' (verbo)." },
          { root: "perfect", accepted: ["perfect"], hint: "'perfect transmission' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — estilo indirecto",
        items: [
          { s1: "\"I'll call you tomorrow,\" she said.", key: "TOLD", s2: "She ___ call me the next day.", accepted: ["told me she would"], explanation: "will→would, tell + objeto." },
          { s1: "\"Do you speak French?\" he asked.", key: "WHETHER", s2: "He asked ___ French.", accepted: ["whether I spoke", "me whether I spoke"], explanation: "sí/no → whether + orden afirmativo." },
          { s1: "\"I've never been to Rome,\" he said.", key: "HAD", s2: "He said he ___ to Rome.", accepted: ["had never been"], explanation: "present perfect → past perfect." },
          { s1: "\"Where are you going?\" she asked me.", key: "WAS", s2: "She asked me where I ___.", accepted: ["was going"], explanation: "orden afirmativo + backshift." },
          { s1: "\"You must finish it today,\" the boss said.", key: "HAD", s2: "The boss said I ___ finish it that day.", accepted: ["had to"], explanation: "must → had to; today → that day." },
          { s1: "\"I can't help you,\" he said.", key: "COULDN'T", s2: "He said he ___ me.", accepted: ["couldn't help"], explanation: "can → could." },
        ],
      },
      p5: {
        title: "The interpreter",
        text: "For thirty years, Maria Delgado worked as a conference interpreter, one of that small, extraordinary band of people who make it possible for the leaders of the world to understand one another. Sitting in a soundproof booth, listening to a speech in one language and rendering it, almost instantly, into another, she was present at some of the most important meetings of her generation, though her name appears in no history book.\n\nThe work, she once explained, is far harder than most people imagine. It is not, as many assume, a simple matter of swapping one word for another. Languages do not map neatly onto one another; a phrase that is perfectly natural in one may be meaningless, or even offensive, in another. The interpreter must grasp not merely the words but the intention behind them, and convey that intention faithfully, all in the space of a few seconds, with no time to stop and think. A single mistake, in her line of work, could in theory alter the course of history.\n\nWhat fascinated Maria most, however, was not the mechanics of the job but what it revealed about human communication itself. She came to believe that the greatest barriers between people are rarely linguistic. Time and again, she watched delegates who shared no common language reach genuine understanding, while others who spoke the same tongue talked entirely past one another. 'Language,' she used to say, 'is the easy part. I can translate your words in an instant. What I cannot do is make you willing to understand.'\n\nIt is a profound observation, and one that extends far beyond the conference hall. Most of the misunderstandings that poison our relationships, our workplaces and our politics are not, at bottom, failures of language. They are failures of goodwill, of patience, of the simple willingness to imagine that the other person might have a point. Maria spent her career bridging the gaps between languages, only to conclude that the gaps that really matter lie somewhere else entirely — not between our words, but between our hearts.",
        q: [
          mc("What did Maria Delgado do for a living?", ["Write history.", "Work as a conference interpreter.", "Teach languages.", "Lead meetings."], 1, "'worked as a conference interpreter'."),
          mc("Why is interpreting harder than people assume?", ["It's boring.", "Languages don't map neatly; you must convey intention instantly.", "The booths are small.", "The pay is low."], 1, "'must grasp not merely the words but the intention… in a few seconds'."),
          mc("What fascinated Maria most about the job?", ["The travel.", "What it revealed about human communication.", "The money.", "The fame."], 1, "'what it revealed about human communication itself'."),
          mc("What did she observe about people who shared no language?", ["They always failed.", "They often reached genuine understanding.", "They gave up.", "They fought."], 1, "'delegates who shared no common language reach genuine understanding'."),
          mc("According to Maria, what is 'the easy part'?", ["Understanding.", "Language.", "Goodwill.", "Patience."], 1, "'\"Language,\" she used to say, \"is the easy part\"'."),
          mc("What is the deeper conclusion of the passage?", ["Language is everything.", "The gaps that matter are between our hearts, not our words.", "Interpreting is pointless.", "People can't communicate."], 1, "'not between our words, but between our hearts'."),
        ],
      },
      p6: {
        title: "The power of a difficult conversation",
        text: "Most of us will do almost anything to avoid a difficult conversation. (1)___ We put off telling a friend a hard truth, or raising a problem with a colleague, hoping it will somehow resolve itself.\n\nIt rarely does. (2)___ Instead, the unspoken issue tends to grow, poisoning the relationship far more than any honest conversation could.\n\nThe fear that holds us back is almost always exaggerated. (3)___ We imagine an explosive confrontation, when in fact most people respond to honest, respectful directness with relief and gratitude.\n\nThere is, of course, a right way and a wrong way to go about it. (4)___ The goal is not to win or to wound, but to understand and to be understood. It helps to focus on the specific issue rather than attacking the person, and to listen at least as much as you speak.\n\nMastering this skill is one of the most valuable things a person can do. (5)___ Relationships, whether personal or professional, are not damaged by the difficult conversations we have. (6)___ They are damaged, slowly and silently, by the ones we never dare to have.",
        options: [
          "The discomfort feels almost physical, and so we retreat.",     // A -> gap 1
          "Avoidance, it turns out, is rarely the easy option it seems.",  // B -> gap 2
          "The reality is almost never as bad as we fear.",               // C -> gap 3
          "How you say something matters as much as what you say.",       // D -> gap 4
          "The rewards, in every area of life, are enormous.",            // E -> gap 5
          "This is the truth we so often get exactly backwards.",         // F -> gap 6
          "Difficult conversations always make everything much worse.",    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la incomodidad nos hace retroceder."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: evitar no es la opción fácil."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la realidad no es tan mala."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cómo lo dices importa tanto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: las recompensas son enormes."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: nos equivocamos al revés."),
        ],
      },
      p7: {
        title: "Four people talk about communication",
        text: "Read what four people say about how they communicate.\n\nA) LENA: I'm learning my fourth language, and honestly, it's addictive. Each new language is like being given a new pair of eyes; you see the world slightly differently. There are ideas you can express perfectly in one language that are almost impossible in another. It's changed how I think about everything.\n\nB) JON: I used to be terrified of public speaking — I'd go bright red and forget every word. What cured me wasn't confidence, it was preparation. I now know that the fear never fully goes away; you just learn to act despite it. The audience wants you to succeed, not fail. Once I understood that, everything changed.\n\nC) PRIYA: In my experience, most workplace problems are really communication problems in disguise. People don't say what they mean, or they don't listen, and small misunderstandings snowball into major conflicts. I've come to believe that being able to have a calm, honest conversation is the single most useful skill you can have at work.\n\nD) SAM: I find small talk excruciating — all that chatter about the weather and the weekend. But I've reluctantly accepted that it serves a purpose. It's not really about the content; it's a way of signalling friendliness, of building trust before the serious conversation begins. So now I grit my teeth and do it.",
        q: [
          mc("Who says each language offers a new way of seeing the world?", ["A", "B", "C", "D"], 0, "Lena: 'a new pair of eyes'."),
          mc("Who overcame a fear through preparation?", ["A", "B", "C", "D"], 1, "Jon: 'What cured me… was preparation'."),
          mc("Who believes most workplace problems are really about communication?", ["A", "B", "C", "D"], 2, "Priya: 'communication problems in disguise'."),
          mc("Who dislikes small talk but recognises its value?", ["A", "B", "C", "D"], 3, "Sam: 'I find small talk excruciating… it serves a purpose'."),
          mc("Who mentions ideas that can't be translated?", ["A", "B", "C", "D"], 0, "Lena: 'ideas you can express… in one language… impossible in another'."),
          mc("Who learned that the audience wants the speaker to succeed?", ["A", "B", "C", "D"], 1, "Jon: 'The audience wants you to succeed'."),
          mc("Who says small misunderstandings can snowball into conflicts?", ["A", "B", "C", "D"], 2, "Priya: 'small misunderstandings snowball into major conflicts'."),
          mc("Who sees small talk as a way of building trust?", ["A", "B", "C", "D"], 3, "Sam: 'a way of… building trust'."),
          mc("Who describes learning a language as addictive?", ["A", "B", "C", "D"], 0, "Lena: 'it's addictive'."),
          mc("Who accepts that a fear never fully disappears?", ["A", "B", "C", "D"], 1, "Jon: 'the fear never fully goes away'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Learning a foreign language is the best way to understand another culture.'\nComenta estos dos aspectos y añade uno propio:\n1. communication (la comunicación)\n2. travel (los viajes)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to become a better communicator' — da consejos prácticos.\n· RELATO que empiece con: 'It was all just a terrible misunderstanding.'", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de aprender un idioma (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué les ayudó más. Sobra una opción.\nA) living in the country\nB) watching films and TV\nC) a patient, encouraging teacher\nD) making lots of mistakes\nE) speaking with native friends\nF) not being afraid to look foolish", "This is Part Three. You will hear five people talking about how they learned a foreign language. Speaker One: For me, nothing worked until I actually moved there. Six months surrounded by the language, forced to use it every single day, taught me more than six years of classes. Speaker Two: What really helped me was a teacher I had at fifteen. She never once laughed at my errors; she made me feel that getting things wrong was just part of learning. I owe my fluency to her. Speaker Three: I made a breakthrough when I stopped caring about sounding perfect. Once I accepted that I was going to make a fool of myself and just plunged in anyway, my speaking improved almost overnight. Speaker Four: Honestly, I learned most of my English from watching TV series with subtitles. Hearing how people really speak, the slang, the rhythm — you don't get that from a textbook. Speaker Five: The turning point for me was making a couple of friends who spoke the language. Chatting with them every day, in a relaxed way, did more for me than any formal study.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 0, "A: 'until I actually moved there'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 2, "C: 'a teacher… never once laughed at my errors'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 5, "F: 'make a fool of myself and just plunged in'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 1, "B: 'watching TV series with subtitles'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 4, "E: 'friends who spoke the language'."),
    ]),

    ...speakingParts({ p1: "qué idiomas hablas o aprendes, qué te resulta más difícil y cómo mejoras", p2: "dos formas de comunicarse (una conversación cara a cara y una por videollamada): compáralas y di qué se gana y se pierde", p3: "qué ayuda más a aprender un idioma (vivir en el país, un buen profesor, ver series, hablar con nativos, no tener miedo a equivocarse): comentadlo y elegid lo más eficaz", p4: "la comunicación y los idiomas: por qué nos malinterpretamos, si aprender idiomas cambia la forma de pensar y cómo comunicarnos mejor" }),

    SUMMARY("Resumen del Día 23", [
      "Estilo indirecto: backshift (is→was, will→would, present perfect→past perfect). SAY vs TELL (+ objeto).",
      "Preguntas indirectas: orden afirmativo, sin do/does, sí/no → if/whether.",
      "Vocabulario de comunicación. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 24", "Convierte 4 frases directas en indirectas (2 afirmaciones, 2 preguntas). Repasa las flashcards. Mañana: los verbos de reporte y sus patrones."),
  ],
};

// ───────────────────────── DÍA 24 ─────────────────────────
const DAY24 = {
  title: "Día 24 — Verbos de reporte y sus patrones · Acuerdos y conflictos",
  description: "Reporting verbs + patrones (admit doing, refuse to, accuse sb of, suggest that…). Vocabulario de acuerdo/conflicto. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Reportar con verbos precisos y sus estructuras correctas.",
    summary: "Verbos de reporte; acuerdos/conflictos; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'suggested me to'.", "'accused of to'.", "'denied to do'."],
    reviewPrompts: ["¿'suggest' + qué patrón?", "¿'accuse' + qué preposición?"],
  },
  items: [
    TEXT("🔁 Repaso: estilo indirecto. Hoy los VERBOS DE REPORTE y sus PATRONES (más precisos que 'say/tell'). Vocabulario: ACUERDOS y CONFLICTOS."),
    GRAMMAR("Verbos de reporte y sus patrones", `Usar el verbo preciso hace el reporte más rico. Patrones frecuentes:
· verbo + to + inf: agree, offer, promise, refuse, threaten, claim → He refused to help. She promised to come.
· verbo + -ing: admit, deny, suggest, recommend, mention, regret → He admitted taking it. She suggested going.
· verbo + objeto + to + inf: advise, ask, tell, warn, remind, encourage, persuade, invite → She warned me to be careful.
· verbo + preposición + -ing: accuse sb OF, apologise FOR, insist ON, congratulate sb ON, blame sb FOR → He accused me of lying. She apologised for being late.
· verbo + (that) + frase: admit, suggest, insist, deny, claim, explain, complain → He insisted (that) he was right.
⚠️ ❌ suggest me to go → ✅ suggest (that) I go / suggest going. ❌ accuse of to lie → ✅ accuse of lying.`),
    WARN("Errores típicos del hispanohablante", "· ❌ He suggested me to come → ✅ He suggested that I come / suggested coming.\n· ❌ She accused me of to steal → ✅ accused me of stealing.\n· ❌ He denied to do it → ✅ He denied doing it.\n· ❌ apologised of → ✅ apologised for."),
    grammarEx("Use of English — Verbos de reporte", "Completa con el patrón correcto.", [
      fb("He refused ___ ___ (help) us.", ["to help"], "refuse + to + inf."),
      fb("She admitted ___ (take) the money.", ["taking"], "admit + -ing."),
      fb("They accused him ___ ___ (of/cheat).", ["of cheating"], "accuse sb of + -ing."),
      mc("Choose:", ["She suggested me to leave.", "She suggested that I leave.", "She suggested me leaving."], 1, "suggest (that) + frase."),
      fb("He apologised ___ ___ (for/be) late.", ["for being"], "apologise for + -ing."),
      fb("The doctor advised me ___ ___ (rest) more.", ["to rest"], "advise + obj + to + inf."),
      fb("She denied ___ (break) the window.", ["breaking"], "deny + -ing."),
    ]),
    GRAMMAR("Vocabulario del día — Acuerdos y conflictos", "Léxico de acuerdo y conflicto (B2)."),
    deck("B2 S5D24 — Acuerdos y conflictos", [
      ["compromise", "acuerdo / transigir", "We reached a compromise.", "sustantivo/verbo", "ˈkɒmprəmaɪz"],
      ["negotiate", "negociar", "They negotiated a deal.", "verbo", "nɪˈɡəʊʃieɪt"],
      ["dispute", "disputa / conflicto", "It settled a long-running dispute.", "sustantivo", "dɪˈspjuːt"],
      ["resolve", "resolver", "They resolved their differences.", "verbo", "rɪˈzɒlv"],
      ["give in", "ceder / rendirse", "Neither side would give in.", "phrasal verb", "ɡɪv ˈɪn"],
      ["stand your ground", "mantenerse firme", "She stood her ground in the argument.", "expresión", "stænd jɔː ˈɡraʊnd"],
      ["meet halfway", "llegar a un punto medio", "Let's meet halfway.", "expresión", "miːt ˌhɑːfˈweɪ"],
      ["tension", "tensión", "There was real tension between them.", "sustantivo", "ˈtenʃn"],
      ["make peace", "hacer las paces", "They finally made peace.", "colocación", "meɪk ˈpiːs"],
      ["bring up", "sacar (un tema)", "Don't bring up politics at dinner.", "phrasal verb", "brɪŋ ˈʌp"],
    ]),
    vocabEx("Vocabulario — Acuerdos y conflictos", "Elige la opción correcta.", [
      mc("An agreement where both sides accept less than they wanted is a ___.", ["compromise", "dispute", "tension"], 0, "compromise."),
      mc("To discuss in order to reach an agreement is to ___.", ["negotiate", "give in", "resolve"], 0, "negotiate."),
      mc("To refuse to change your position is to ___.", ["stand your ground", "give in", "meet halfway"], 0, "stand your ground."),
      mc("To finally accept the other side's demand is to ___.", ["give in", "stand your ground", "negotiate"], 0, "give in."),
      mc("To raise a topic in conversation is to ___ it.", ["bring up", "give in", "resolve"], 0, "bring up."),
      mc("To find a solution to a disagreement is to ___ it.", ["resolve", "bring up", "give in"], 0, "resolve."),
    ]),

    ...uoe({
      p1: {
        title: "The art of compromise",
        text: "In a world of strong opinions, the ability to compromise is often (1)___ as a weakness — a shameful surrender of one's principles. In fact, it is one of the most important skills a person, or a society, can possess. Almost every relationship, from a marriage to an international treaty, (2)___ on the willingness of both sides to give a little in order to gain a great deal. This does not mean abandoning your beliefs; it means recognising that the other person's needs are as (3)___ to them as yours are to you. The alternative — where each side refuses to (4)___ an inch and insists on total victory — usually ends in total (5)___, with both sides worse off than if they had simply met (6)___. History is littered with disputes that could have been (7)___ with a little goodwill, but which dragged on for years because neither side was willing to make the first move. The truly strong, it turns out, are not those who never (8)___ down, but those who know when, and how, to do so.",
        q: [
          mc("(1)", ["seen", "viewed", "regarded", "considered"], 2, "'regarded as a weakness' (o seen/viewed)."),
          mc("(2)", ["depends", "relies", "rests", "counts"], 0, "'depends on the willingness'."),
          mc("(3)", ["important", "vital", "essential", "crucial"], 0, "'as important to them'."),
          mc("(4)", ["give", "move", "budge", "yield"], 0, "'refuses to give an inch'."),
          mc("(5)", ["failure", "defeat", "collapse", "loss"], 0, "'ends in total failure'."),
          mc("(6)", ["halfway", "midway", "middle", "centre"], 0, "'met halfway'."),
          mc("(7)", ["resolved", "solved", "settled", "fixed"], 0, "'could have been resolved'."),
          mc("(8)", ["back", "down", "off", "up"], 0, "'never back down'."),
        ],
      },
      p2: {
        title: "How to disagree without falling out",
        text: "Disagreement is an unavoidable part of any close relationship, whether (1)___ friends, family or colleagues. What separates healthy relationships from unhealthy (2)___ is not the absence of conflict, but the way conflict is handled. The first rule is to attack the problem, not the person. There is a world of difference (3)___ saying 'I think that idea is mistaken' and 'you're an idiot'. The first invites a conversation; the (4)___ invites a war. Second, it helps to assume good faith — to imagine that the other person, (5)___ mistaken, is acting from reasonable motives rather (6)___ malice. Third, and most difficult, we must be genuinely willing to change our minds if the other person makes a good point. A disagreement in which neither side is prepared to (7)___ an inch is not a discussion but a battle. Handled well, disagreement can actually strengthen a relationship, deepening understanding and mutual respect. Handled badly, it can destroy in an afternoon (8)___ took years to build.",
        q: [
          fb("(1)", ["between", "among"], "'between friends, family or colleagues'."),
          fb("(2)", ["ones"], "'unhealthy ones'."),
          fb("(3)", ["between"], "'a world of difference between… and…'."),
          fb("(4)", ["second", "latter"], "'the first invites… the second invites'."),
          fb("(5)", ["though", "although", "if"], "'though mistaken'."),
          fb("(6)", ["than"], "'rather than malice'."),
          fb("(7)", ["give"], "'give an inch'."),
          fb("(8)", ["what"], "'destroy… what took years to build'."),
        ],
      },
      p3: {
        title: "The negotiator's secret",
        text: "The very best negotiators, it turns out, share a surprising (1)___: they spend far more time listening than talking. The amateur negotiator arrives with a list of (2)___ and a determination to win. The professional arrives with questions, seeking above all to understand what the other side truly (3)___. This is not mere politeness; it is deeply (4)___. Very often, the thing your opponent appears to be demanding is not what they really want at all. Behind a seemingly (5)___ position may lie a completely different underlying need, and once you understand that need, a solution that satisfies (6)___ sides frequently becomes possible. The goal of a skilled negotiator, therefore, is not victory but agreement — an outcome both parties can (7)___ with. Approached this way, negotiation ceases to be a battle to be won and becomes a problem to be (8)___ together. It is a shift in mindset that transforms not only business deals, but every relationship in which we must reconcile our needs with those of another.",
        items: [
          { root: "characterise", accepted: ["characteristic"], hint: "sustantivo → characteristic." },
          { root: "demand", accepted: ["demands"], hint: "sustantivo plural → demands." },
          { root: "want", accepted: ["wants"], hint: "'what the other side truly wants' (verbo, 3ª persona)." },
          { root: "strategy", accepted: ["strategic"], hint: "adjetivo → strategic." },
          { root: "flex", accepted: ["inflexible"], hint: "'a seemingly inflexible position' → inflexible." },
          { root: "both", accepted: ["both"], hint: "'satisfies both sides' (determinante)." },
          { root: "live", accepted: ["live"], hint: "'can live with' (verbo)." },
          { root: "solve", accepted: ["solved"], hint: "'to be solved together' (participio)." },
        ],
      },
      p4: {
        title: "Transformaciones — verbos de reporte",
        items: [
          { s1: "\"It was me. I broke it,\" he said.", key: "ADMITTED", s2: "He ___ the vase.", accepted: ["admitted breaking"], explanation: "admit + -ing." },
          { s1: "\"You stole my idea!\" she said to him.", key: "ACCUSED", s2: "She ___ her idea.", accepted: ["accused him of stealing"], explanation: "accuse sb of + -ing." },
          { s1: "\"No, I won't do it,\" he said.", key: "REFUSED", s2: "He ___ it.", accepted: ["refused to do"], explanation: "refuse + to + inf." },
          { s1: "\"Why don't we meet halfway?\" she said.", key: "SUGGESTED", s2: "She ___ halfway.", accepted: ["suggested meeting"], explanation: "suggest + -ing." },
          { s1: "\"I'm sorry I shouted,\" he said.", key: "APOLOGISED", s2: "He ___ .", accepted: ["apologised for shouting"], explanation: "apologise for + -ing." },
          { s1: "\"You should rest,\" the doctor told me.", key: "ADVISED", s2: "The doctor ___ .", accepted: ["advised me to rest"], explanation: "advise + obj + to + inf." },
        ],
      },
      p5: {
        title: "The strike that no one won",
        text: "The dispute at the Riverside factory had begun over something almost trivial: a change to the shift patterns that the management considered minor and the workers considered an insult. Neither side, however, was willing to back down, and what might have been resolved in an afternoon of honest conversation instead escalated, over the following weeks, into a full-blown strike that would eventually destroy the very thing both sides were fighting over.\n\nThe management, convinced of their right to run the factory as they saw fit, refused even to discuss the matter, dismissing the workers' concerns as unreasonable. The workers, feeling disrespected and unheard, dug in their heels and walked out. Each side accused the other of acting in bad faith. Each insisted that the other should make the first move. Positions hardened; personal insults were exchanged; the original, minor disagreement was soon forgotten beneath a mountain of accumulated resentment.\n\nThe strike lasted for four months. The workers, receiving no wages, fell into debt and hardship. The company, unable to fulfil its orders, lost its most important customers to a competitor. By the time an exhausted compromise was finally reached — a compromise, it should be noted, almost identical to the one that could have been agreed on the very first day — the damage was done. Within a year, the factory, its finances ruined and its reputation destroyed, closed for good. Everyone lost their jobs. The management lost their business. The very shift patterns they had all been fighting over ceased, in the most final way possible, to matter at all.\n\nThe story of the Riverside factory is, sadly, far from unique. It is a textbook example of how a failure to compromise, driven by pride on both sides, can lead to an outcome in which everyone loses. Had either side been willing, early on, to listen, to assume good faith, and to give a little, the whole catastrophe could have been avoided. Instead, both chose the satisfaction of being right over the wisdom of reaching agreement. It is a satisfaction that, in the end, cost them everything.",
        q: [
          mc("What had the dispute originally been about?", ["Pay.", "A minor change to shift patterns.", "Safety.", "The factory closing."], 1, "'a change to the shift patterns'."),
          mc("How did the management respond at first?", ["They negotiated.", "They refused even to discuss it.", "They gave in.", "They apologised."], 1, "'refused even to discuss the matter'."),
          mc("What happened to the original disagreement over time?", ["It was resolved.", "It was forgotten beneath accumulated resentment.", "It grew smaller.", "It was written down."], 1, "'soon forgotten beneath a mountain of… resentment'."),
          mc("What was notable about the final compromise?", ["It was generous.", "It was almost identical to what was possible on day one.", "It favoured the workers.", "It came quickly."], 1, "'almost identical to the one that could have been agreed on the very first day'."),
          mc("What was the ultimate outcome for everyone?", ["Everyone won.", "Everyone lost — the factory closed.", "The workers won.", "The managers won."], 1, "'the factory… closed for good. Everyone lost their jobs.'"),
          mc("What does the writer identify as the cause of the catastrophe?", ["Bad luck.", "A failure to compromise, driven by pride.", "The economy.", "The customers."], 1, "'a failure to compromise, driven by pride on both sides'."),
        ],
      },
      p6: {
        title: "The peacemaker",
        text: "Every family, every workplace, every community seems to have one: the person who, without any official role, quietly keeps the peace. (1)___ They are rarely the loudest or the most powerful, and their work usually goes unnoticed.\n\nYet remove them, and the difference is immediately felt. (2)___ Suddenly, small disagreements that would once have been smoothed over begin to fester and grow.\n\nWhat exactly do these natural peacemakers do? (3)___ Above all, they listen. When two people are in conflict, each usually feels unheard, and the simple act of being truly listened to can dissolve a surprising amount of anger.\n\nThey are also skilled at reframing. (4)___ Where each party sees only the other's stubbornness, the peacemaker helps each to see the reasonable need behind it, and so opens a path to compromise.\n\nPerhaps most importantly, they refuse to take sides. (5)___ Their loyalty is not to one person or the other, but to the relationship itself, and to the possibility of peace between them. (6)___ It is a quiet, thankless and utterly essential form of leadership, and the people who practise it are among the most valuable, and least appreciated, members of any group.",
        options: [
          "It is a role that is never advertised and rarely rewarded.",   // A -> gap 1
          "Tensions that were once contained begin to spread.",          // B -> gap 2
          "Their methods, though instinctive, are remarkably consistent.", // C -> gap 3
          "They help each side to understand the other's point of view.",  // D -> gap 4
          "This impartiality is the source of their authority.",          // E -> gap 5
          "We would all do well to notice, and to thank, such people.",    // F -> gap 6
          "Peacemakers usually make every conflict far worse.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: un papel no anunciado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las tensiones se extienden."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: sus métodos son consistentes."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ayudan a entender al otro."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la imparcialidad es su autoridad."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: deberíamos agradecérselo."),
        ],
      },
      p7: {
        title: "Four people describe how they handle conflict",
        text: "Read what four people say about dealing with disagreements.\n\nA) NADIA: I hate conflict, and I used to avoid it at all costs — I'd agree to anything just to keep the peace. But I've learned that suppressing your feelings doesn't make them go away; it just makes them come out later, worse. Now I force myself to speak up calmly at the time. It's uncomfortable, but far healthier.\n\nB) TOM: In any disagreement, I try to find the compromise as quickly as possible. Being right matters far less to me than getting along. Some people call that weakness, but I've saved a lot of relationships that others have destroyed over principles that, honestly, weren't worth the fight.\n\nC) PRIYA: I believe in standing my ground. If I know I'm right, I won't give in just to avoid unpleasantness. I've been called stubborn, but there's a difference between compromise and simply surrendering. Some things are worth arguing for, and I refuse to abandon them for the sake of a quiet life.\n\nD) SAM: What I've learned is to focus on the problem, never the person. The moment a disagreement becomes personal, it's lost. I never say 'you always' or 'you never'; I talk about the specific issue, calmly. Nine times out of ten, that keeps a disagreement from turning into a full-blown argument.",
        q: [
          mc("Who used to avoid conflict but has learned to speak up?", ["A", "B", "C", "D"], 0, "Nadia: 'I used to avoid it… Now I force myself to speak up'."),
          mc("Who seeks compromise quickly and values getting along?", ["A", "B", "C", "D"], 1, "Tom: 'find the compromise as quickly as possible'."),
          mc("Who believes in standing firm when they're right?", ["A", "B", "C", "D"], 2, "Priya: 'I believe in standing my ground'."),
          mc("Who focuses on the problem rather than the person?", ["A", "B", "C", "D"], 3, "Sam: 'focus on the problem, never the person'."),
          mc("Who learned that suppressed feelings resurface later?", ["A", "B", "C", "D"], 0, "Nadia: 'they just come out later, worse'."),
          mc("Who thinks being right matters less than harmony?", ["A", "B", "C", "D"], 1, "Tom: 'Being right matters far less… than getting along'."),
          mc("Who distinguishes compromise from surrender?", ["A", "B", "C", "D"], 2, "Priya: 'a difference between compromise and… surrendering'."),
          mc("Who avoids saying 'you always' or 'you never'?", ["A", "B", "C", "D"], 3, "Sam: 'I never say \"you always\" or \"you never\"'."),
          mc("Who has been called stubborn?", ["A", "B", "C", "D"], 2, "Priya: 'I've been called stubborn'."),
          mc("Who has saved relationships others destroyed over principle?", ["A", "B", "C", "D"], 1, "Tom: 'saved a lot of relationships…'"),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is always better to compromise than to insist on being right.'\nComenta estos dos aspectos y añade uno propio:\n1. relationships (las relaciones)\n2. principles (los principios)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to resolve a disagreement' — da consejos prácticos.\n· RELATO que empiece con: 'Neither of them was willing to be the first to give in.'", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una mediadora profesional, Julia Marsh, sobre cómo resolver conflictos (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a professional mediator, Julia Marsh. Interviewer: Julia, what exactly does a mediator do? Julia: We help people in conflict to reach an agreement themselves. We don't judge or decide; we simply create the conditions in which a solution becomes possible. Interviewer: What's the most common cause of the disputes you see? Julia: Honestly? Failure to listen. In almost every case, both sides are so busy defending their own position that neither has ever really heard the other. Interviewer: So listening is the key? Julia: It's the beginning. The single most powerful thing I do is get each side to explain the other's point of view. It's astonishing how that changes things. Interviewer: Is compromise always the goal? Julia: Not exactly. The goal is a solution both sides can live with. Sometimes that's a compromise; sometimes it's a completely new option neither had thought of. Interviewer: What's the biggest mistake people make in an argument? Julia: Making it personal. The moment you attack the person instead of the problem, agreement becomes almost impossible. Interviewer: And what gives you hope in your work? Julia: How often it works. People arrive as enemies and leave, if not as friends, then at least as human beings who understand each other. That never stops moving me. Interviewer: Finally, one tip for our listeners? Julia: When you're in a conflict, ask yourself: do I want to be right, or do I want to solve this? You usually can't have both. Interviewer: Thank you, Julia.", [
      mc("1. What does a mediator do?", ["Judge the dispute.", "Help people reach an agreement themselves.", "Decide who's right."], 1, "'help people… to reach an agreement themselves'."),
      mc("2. What is the most common cause of disputes?", ["Money.", "Failure to listen.", "Bad luck."], 1, "'Failure to listen'."),
      mc("3. What is the single most powerful thing Julia does?", ["Decides the outcome.", "Gets each side to explain the other's viewpoint.", "Takes sides."], 1, "'get each side to explain the other's point of view'."),
      mc("4. Is compromise always the goal?", ["Yes, always.", "No — a solution both sides can live with, sometimes a new option.", "Never."], 1, "'a solution both sides can live with… sometimes a completely new option'."),
      mc("5. What is the biggest mistake in an argument?", ["Being quiet.", "Making it personal.", "Compromising."], 1, "'Making it personal'."),
      mc("6. What gives Julia hope?", ["The money.", "How often mediation works.", "Winning."], 1, "'How often it works'."),
      mc("7. What is her final tip?", ["Always win.", "Ask: do I want to be right, or to solve this?", "Never argue."], 1, "'do I want to be right, or do I want to solve this?'"),
    ]),

    ...speakingParts({ p1: "cómo reaccionas ante los desacuerdos, si cedes fácilmente o te mantienes firme, y por qué", p2: "dos formas de resolver un conflicto (una negociación tranquila y una discusión acalorada): compáralas y di cuál funciona mejor", p3: "qué ayuda más a resolver un conflicto (escuchar, ceder un poco, buscar un punto medio, pedir ayuda a un mediador, mantenerse firme): comentadlo y elegid lo más eficaz", p4: "los conflictos y los acuerdos: si es mejor ceder o defender los principios, cómo discrepar sin romper una relación y por qué la gente no se escucha" }),

    SUMMARY("Resumen del Día 24", [
      "Verbos de reporte + patrones: refuse/promise + to inf; admit/deny/suggest + -ing; advise/warn + obj + to; accuse of/apologise for + -ing.",
      "Más precisos que say/tell. ❌ suggest me to; ❌ accuse of to.",
      "Vocabulario de acuerdos/conflictos. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 25", "Reporta 5 frases usando 5 verbos de reporte distintos. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 25 ─────────────────────────
const DAY25 = {
  title: "Día 25 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de la pasiva, las impersonales, el estilo indirecto y los verbos de reporte. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 5.",
  pedagogy: {
    objective: "Consolidar la pasiva y el estilo indirecto del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 6."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 5 del B2. Consolidas la voz pasiva, el causativo, las estructuras impersonales, el estilo indirecto y los verbos de reporte. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 5", `1) Pasiva (todos los tiempos) + get-passive + causativo (have/get sth done).
2) Impersonales: It is said that…; Sujeto + is believed to (have) …
3) Estilo indirecto: backshift; say vs tell; preguntas indirectas (if/whether).
4) Verbos de reporte + patrones: admit/deny + -ing; refuse/promise + to; accuse of/apologise for + -ing; advise/warn + obj + to.`),
    grammarEx("Use of English — Repaso mixto de la Semana 5", "Completa o elige.", [
      fb("The bridge ___ ___ (build) in 1890. (pasiva pasado)", ["was built"], "was + participio."),
      mc("Choose (causative):", ["I cut my hair yesterday.", "I had my hair cut yesterday.", "I had cut my hair yesterday."], 1, "causativo."),
      fb("People say he is a genius. → He is ___ to be a genius.", ["said"], "is said to be."),
      fb("\"I've finished,\" she said. → She said she ___ ___ (finish).", ["had finished"], "present perfect → past perfect."),
      fb("He admitted ___ (take) the money.", ["taking"], "admit + -ing."),
      fb("She refused ___ ___ (help) us.", ["to help"], "refuse + to + inf."),
      fb("They accused him ___ ___ (of/lie).", ["of lying"], "accuse of + -ing."),
      mc("Choose:", ["She suggested me to go.", "She suggested that I go.", "She suggested me going."], 1, "suggest (that)."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 5", "Repasa los mazos (industria, ciencia/medios, comunicación, acuerdos/conflictos)."),
    vocabEx("Vocabulario — Repaso de la Semana 5", "Elige la opción correcta.", [
      mc("To make goods in large quantities:", ["mass-produce", "outsource", "patent"], 0, "mass-produce."),
      mc("Information that gives a false impression:", ["misleading", "reliable", "objective"], 0, "misleading."),
      mc("To succeed in making people understand your idea:", ["get it across", "read between", "put bluntly"], 0, "get it across."),
      mc("An agreement where both sides accept less:", ["compromise", "dispute", "tension"], 0, "compromise."),
      mc("To have work done by another company:", ["outsource", "manufacture", "assemble"], 0, "outsource."),
      mc("To prove that a myth is false:", ["debunk", "cover", "source"], 0, "debunk."),
      mc("To refuse to change your position:", ["stand your ground", "give in", "meet halfway"], 0, "stand your ground."),
      mc("A speech that is too long and boring:", ["long-winded", "articulate", "fluent"], 0, "long-winded."),
    ]),

    ...uoe({
      p1: {
        title: "The truth about persuasion",
        text: "We tend to imagine that people are persuaded by facts and logical (1)___. The reality, as anyone who has ever tried to change someone's mind will know, is rather different. When people are presented with evidence that contradicts a (2)___ belief, they very often cling to that belief even more (3)___ than before. This is because our opinions are rarely (4)___ purely on reason; they are bound up with our identity, our emotions and our sense of belonging. To attack someone's belief can feel, to them, like an attack on who they (5)___. This is why simply telling someone they are wrong almost never works, and often makes matters (6)___. The people who are genuinely good at changing minds understand this. They begin not by arguing but by listening, seeking first to understand the other person's position and the needs that (7)___ behind it. Only once a person feels truly heard and respected do they become (8)___ to consider a different point of view. Persuasion, it turns out, is far more a matter of the heart than of the head.",
        q: [
          mc("(1)", ["argument", "arguments", "reasons", "reasoning"], 1, "'logical arguments'."),
          mc("(2)", ["deeply", "deep", "strong", "firmly"], 2, "'a strongly-held belief' → strong (o 'deeply-held')."),
          mc("(3)", ["firmly", "hard", "strong", "tight"], 0, "'cling… more firmly'."),
          mc("(4)", ["based", "founded", "built", "rested"], 0, "'based purely on reason'."),
          mc("(5)", ["are", "were", "have", "do"], 0, "'who they are'."),
          mc("(6)", ["worse", "bad", "worst", "badly"], 0, "'makes matters worse'."),
          mc("(7)", ["lie", "sit", "stay", "rest"], 0, "'the needs that lie behind it'."),
          mc("(8)", ["willing", "wanting", "ready", "keen"], 0, "'become willing to consider'."),
        ],
      },
      p2: {
        title: "The confidence trap",
        text: "There is a strange and dangerous relationship (1)___ confidence and competence. We naturally assume that the (2)___ confident a person is, the more they must know. In fact, research has repeatedly shown the (3)___ to be true. The genuine expert, aware of the vast complexity of their subject, is often cautious and full of qualifications. The person who knows (4)___ about a topic, by contrast, frequently has no idea how much they do not know, and speaks (5)___ total, unwarranted confidence. This is why the loudest voice in the room is so (6)___ the least worth listening to. It also explains why confident charlatans so often triumph (7)___ modest experts. The lesson is a valuable one: we should learn to distrust our instinctive respect for confidence, and to value instead the humble, careful, qualified voice — the voice that says 'it's complicated', and 'I might be wrong'. That voice, (8)___ far less impressive, is usually the one telling the truth.",
        q: [
          fb("(1)", ["between"], "'relationship between confidence and competence'."),
          fb("(2)", ["more"], "'the more confident… the more they know'."),
          fb("(3)", ["opposite"], "'the opposite to be true'."),
          fb("(4)", ["least", "little"], "'the person who knows least'."),
          fb("(5)", ["with"], "'speaks with total confidence'."),
          fb("(6)", ["often"], "'so often the least worth listening to'."),
          fb("(7)", ["over"], "'triumph over modest experts'."),
          fb("(8)", ["though", "although"], "'that voice, though far less impressive'."),
        ],
      },
      p3: {
        title: "Why experts are so often ignored",
        text: "One of the great puzzles of our age is why, in a world with more (1)___ knowledge than ever before, expert advice is so frequently ignored or (2)___. Part of the answer lies in a widespread and growing (3)___ of experts, fuelled by a sense that ordinary people's views are just as (4)___ as those of the specialist. There is a grain of truth in this: experts can be wrong, and they should never be beyond (5)___. But the wholesale rejection of expertise is deeply (6)___. When we are ill, most of us still want a qualified doctor, not the loudest voice online. The challenge for experts themselves is one of (7)___: they must learn to explain their knowledge clearly and humbly, and to earn trust rather than simply (8)___ it. A society that loses its respect for genuine knowledge, hard-won through years of study, is a society in serious trouble.",
        items: [
          { root: "science", accepted: ["scientific"], hint: "adjetivo → scientific." },
          { root: "reject", accepted: ["rejected"], hint: "'ignored or rejected' (participio)." },
          { root: "distrust", accepted: ["distrust"], hint: "'a growing distrust' (sustantivo)." },
          { root: "value", accepted: ["valid", "valuable"], hint: "'just as valid as' → valid." },
          { root: "question", accepted: ["question"], hint: "'beyond question' (sustantivo)." },
          { root: "danger", accepted: ["dangerous"], hint: "adjetivo → dangerous." },
          { root: "communicate", accepted: ["communication"], hint: "sustantivo → communication." },
          { root: "demand", accepted: ["demanding"], hint: "'rather than simply demanding it' → demanding." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 5",
        items: [
          { s1: "Someone has repaired my computer.", key: "HAD", s2: "I ___ .", accepted: ["have had my computer repaired"], explanation: "causativo present perfect." },
          { s1: "People believe the manuscript is priceless.", key: "BELIEVED", s2: "The manuscript ___ priceless.", accepted: ["is believed to be"], explanation: "is believed to be." },
          { s1: "\"I didn't do it,\" he said.", key: "DENIED", s2: "He ___ it.", accepted: ["denied doing"], explanation: "deny + -ing." },
          { s1: "\"Where have you been?\" she asked me.", key: "HAD", s2: "She asked me where I ___.", accepted: ["had been"], explanation: "present perfect → past perfect, orden afirmativo." },
          { s1: "\"Congratulations on passing!\" she said to me.", key: "CONGRATULATED", s2: "She ___ .", accepted: ["congratulated me on passing"], explanation: "congratulate sb on + -ing." },
          { s1: "They are going to build a stadium here.", key: "BUILT", s2: "A stadium ___ here.", accepted: ["is going to be built"], explanation: "going to pasiva." },
        ],
      },
      p5: {
        title: "The expert who admitted he was wrong",
        text: "Professor Alan Reeves had built his entire career on a single, celebrated theory. For over twenty years, it had been taught in universities across the world, described in the textbooks he himself had written, and defended by him in countless lectures and debates. His reputation, his identity, his very sense of who he was, were all bound up with the theory being correct. So when a young researcher published a study that appeared to disprove it, the world of his field waited to see how the great professor would respond.\n\nThe expected response, in such cases, is depressingly predictable. The established expert typically dismisses the challenge, questions the newcomer's competence, and defends the old theory ever more fiercely. Careers, after all, are not easily abandoned, and few things are harder for any human being than to admit, publicly, that they have been wrong about the thing that has defined their life. Reeves, everyone assumed, would do the same.\n\nHe did not. After studying the young researcher's work carefully for several months, Professor Reeves did something almost unheard of. He called a conference, stood before an audience of his peers, and announced that the newcomer was right and that he, Reeves, had been mistaken. His famous theory, he explained, could not be reconciled with the new evidence, and must therefore be abandoned. He then publicly thanked the young researcher for advancing the field, and added that being proved wrong, though painful, was a form of progress, and that a scientist who could not admit error had no business calling themselves a scientist at all.\n\nThe episode caused a sensation, and it is still spoken of, years later, with something close to reverence. In an age when so many public figures cling to discredited positions rather than lose face, Reeves's simple honesty seemed almost heroic. Yet he himself was baffled by the praise. 'I was merely doing my job,' he said, when asked about it. 'The whole point of science is that we follow the evidence, wherever it leads, even when it leads away from everything we hoped was true. I don't deserve credit for that. I would have deserved contempt for doing anything else.' It is, perhaps, the truest definition of integrity there is: to value the truth more than you value being right.",
        q: [
          mc("What had Professor Reeves built his career on?", ["Many theories.", "A single celebrated theory.", "Teaching.", "Textbooks."], 1, "'a single, celebrated theory'."),
          mc("What is the 'expected response' when an expert is challenged?", ["To admit error.", "To dismiss the challenge and defend the old theory.", "To retire.", "To celebrate."], 1, "'dismisses the challenge… defends the old theory ever more fiercely'."),
          mc("What did Reeves actually do?", ["Defended his theory.", "Publicly announced the newcomer was right.", "Ignored it.", "Sued the researcher."], 1, "'announced that the newcomer was right and that he… had been mistaken'."),
          mc("What did Reeves say about a scientist who can't admit error?", ["They are wise.", "They have no business being a scientist.", "They are common.", "They are lucky."], 1, "'no business calling themselves a scientist at all'."),
          mc("How did Reeves react to the praise?", ["Proudly.", "He was baffled; he felt he was just doing his job.", "Angrily.", "He ignored it."], 1, "'he himself was baffled by the praise… \"merely doing my job\"'."),
          mc("What does the writer offer as a definition of integrity?", ["Never being wrong.", "Valuing the truth more than being right.", "Winning debates.", "Defending your career."], 1, "'to value the truth more than you value being right'."),
        ],
      },
      p6: {
        title: "The wisdom of changing your mind",
        text: "We live in a culture that treats consistency as a virtue and changing one's mind as a weakness. (1)___ A politician who alters their position is accused of flip-flopping; a person who admits they were wrong is seen as having lost an argument.\n\nThis is precisely backwards. (2)___ The ability to change one's mind in the light of new evidence is not a weakness but the very foundation of wisdom and progress.\n\nConsider how we learn anything at all. (3)___ As children, we believe countless things that turn out to be false, and growing up is largely the process of gradually correcting them. This process should never stop.\n\nThe truly intelligent person, therefore, holds their beliefs in a particular way. (4)___ They believe things firmly enough to act on them, but loosely enough to abandon them when the facts change.\n\nImagine how much better our public life would be if this were understood. (5)___ Instead of clinging to discredited positions for fear of looking weak, our leaders could say, simply and honestly, 'I've thought about it further, and I've changed my mind.' (6)___ Far from being a confession of failure, it would be a demonstration of exactly the quality we should most want in those who lead us.",
        options: [
          "To reverse a decision is regarded as almost shameful.",        // A -> gap 1
          "In truth, the opposite is the case.",                          // B -> gap 2
          "It happens only by discarding what we wrongly believed.",       // C -> gap 3
          "This is the delicate balance that wisdom requires.",           // D -> gap 4
          "Such honesty would transform the way we are governed.",        // E -> gap 5
          "It would be a sign of strength, not weakness.",                // F -> gap 6
          "Nobody has ever benefited from changing their mind.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: revertir se ve como vergonzoso."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: lo contrario es cierto."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: aprender es descartar lo falso."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el equilibrio de la sabiduría."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: transformaría el gobierno."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: sería fuerza, no debilidad."),
        ],
      },
      p7: {
        title: "Four people discuss trust and information",
        text: "Read what four people say about whom they trust.\n\nA) HELEN: I've become very sceptical of anyone who sounds too certain. In my experience, real experts are full of doubts and qualifications; it's the people who know the least who are always absolutely sure. I've learned to trust the person who says 'it's complicated' far more than the one with all the easy answers.\n\nB) RAJ: I trust evidence, not people. It doesn't matter to me how impressive or confident someone is; what matters is whether they can show me the data, and whether that data has been checked by others. Authority means nothing on its own. Show me the proof, and I'll believe you.\n\nC) PRIYA: What I've come to value most is intellectual honesty — the willingness to say 'I was wrong' or 'I don't know'. Anyone can be confident when things are going their way. The real test of a person's trustworthiness is how they behave when the evidence goes against them. Do they follow it, or do they cling to their position?\n\nD) SAM: Honestly, I think we've become too cynical. Yes, question things, but if you distrust absolutely everyone and every institution, you end up believing nothing and no one, which is its own kind of foolishness. There are still people and organisations that have earned our trust, and refusing to give it to anyone is just laziness dressed up as wisdom.",
        q: [
          mc("Who distrusts people who sound too certain?", ["A", "B", "C", "D"], 0, "Helen: 'sceptical of anyone who sounds too certain'."),
          mc("Who trusts evidence and data rather than people?", ["A", "B", "C", "D"], 1, "Raj: 'I trust evidence, not people'."),
          mc("Who most values the willingness to admit being wrong?", ["A", "B", "C", "D"], 2, "Priya: 'intellectual honesty… \"I was wrong\"'."),
          mc("Who warns against being too cynical about everything?", ["A", "B", "C", "D"], 3, "Sam: 'we've become too cynical'."),
          mc("Who says the least knowledgeable are often the most sure?", ["A", "B", "C", "D"], 0, "Helen: 'the people who know the least… always absolutely sure'."),
          mc("Who says authority means nothing without proof?", ["A", "B", "C", "D"], 1, "Raj: 'Authority means nothing on its own'."),
          mc("Who says the real test is how people react to contrary evidence?", ["A", "B", "C", "D"], 2, "Priya: 'how they behave when the evidence goes against them'."),
          mc("Who thinks distrusting everyone is a kind of foolishness?", ["A", "B", "C", "D"], 3, "Sam: 'its own kind of foolishness'."),
          mc("Who trusts the person who says 'it's complicated'?", ["A", "B", "C", "D"], 0, "Helen: 'trust the person who says \"it's complicated\"'."),
          mc("Who believes some institutions have earned our trust?", ["A", "B", "C", "D"], 3, "Sam: 'people and organisations that have earned our trust'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'People today trust confident opinions more than careful experts.'\nComenta estos dos aspectos y añade uno propio:\n1. the media (los medios)\n2. education (la educación)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'Is it a strength or a weakness to change your mind?' — argumenta tu postura.\n· CARTA a una revista respondiendo a un artículo que decía que 'ya no se puede confiar en los expertos': da tu opinión.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: The whole thing is said to be worth over a million pounds. Two. Man: I'm having my flat redecorated, so it's chaos at the moment. Three. Woman: He denied taking the money, but nobody believed him. Four. Man: She apologised for being late and offered to buy the coffees. Five. Woman: The report is believed to have been leaked deliberately. Six. Man: I trust her completely — she always admits when she's wrong. Seven. Woman: They finally reached a compromise after hours of talks. Eight. Man: Don't believe that headline; it's completely misleading.", [
      mc("1. What is said about the item?", ["It's fake.", "It's worth over a million pounds.", "It's for sale."], 1, "'said to be worth over a million pounds'."),
      mc("2. What is happening to the man's flat?", ["It's being sold.", "It's being redecorated.", "It's being cleaned."], 1, "'having my flat redecorated'."),
      mc("3. What did the man do about the money?", ["Admitted it.", "Denied taking it.", "Returned it."], 1, "'denied taking the money'."),
      mc("4. What did the woman do?", ["Complained.", "Apologised and offered to buy the coffees.", "Left."], 1, "'apologised for being late and offered…'"),
      mc("5. What is believed about the report?", ["It was lost.", "It was leaked deliberately.", "It was fake."], 1, "'believed to have been leaked deliberately'."),
      mc("6. Why does the man trust her?", ["She's confident.", "She admits when she's wrong.", "She's an expert."], 1, "'she always admits when she's wrong'."),
      mc("7. What did they reach?", ["A dead end.", "A compromise.", "A decision to fight."], 1, "'reached a compromise'."),
      mc("8. What does the man say about the headline?", ["It's true.", "It's completely misleading.", "It's important."], 1, "'completely misleading'."),
    ]),

    ...speakingParts({ p1: "en quién confías para informarte, si crees todo lo que lees y si cambias de opinión con facilidad", p2: "dos formas de presentar información (un experto explicando con cautela y alguien muy seguro dando opiniones simples): compáralas", p3: "qué hace fiable una fuente de información (pruebas, expertos, que otros la confirmen, honestidad, transparencia): comentadlo y elegid lo más importante", p4: "la información y la confianza: por qué se ignora a los expertos, si cambiar de opinión es fuerza o debilidad y cómo saber en qué creer" }),

    SUMMARY("Resumen de la Semana 5 (B2)", [
      "Dominas la voz pasiva (todos los tiempos), el causativo, las impersonales, el estilo indirecto y los verbos de reporte.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: las oraciones de relativo, las cláusulas de participio y la inversión enfática.",
    ]),
    INFO("Mini-simulacro de la Semana 5", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 6."),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "La voz pasiva y el estilo indirecto",
  description: "La voz pasiva (todas sus formas y el causativo), las estructuras impersonales de información, el estilo indirecto y los verbos de reporte. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
