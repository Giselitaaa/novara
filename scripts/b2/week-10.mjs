/**
 * B2 First · Semana 10 — "Repaso de estructuras clave · El medio ambiente".
 * Consolidación de los tiempos verbales, condicionales, modales, voz pasiva,
 * estilo indirecto, relativas y gerundios/infinitivos, con el hilo temático del
 * medio ambiente, el clima, la naturaleza y la sostenibilidad.
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, to be honest, in my view, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they appear to, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a fair point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 46 ─────────────────────────
const DAY46 = {
  title: "Día 46 — Repaso de los tiempos verbales · El medio ambiente",
  description: "Repaso integrado de presente, pasado, perfectos, continuos y formas de futuro. Vocabulario del medio ambiente. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Elegir el tiempo verbal correcto con seguridad en cualquier contexto.",
    summary: "Repaso de tiempos verbales; medio ambiente; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["present simple donde va present perfect (since/for).", "past simple donde va present perfect.", "'will' donde va present continuous/going to."],
    reviewPrompts: ["¿'I live here since 2010' o 'I have lived here since 2010'?", "¿Cómo expresas un plan ya organizado para mañana?"],
  },
  items: [
    TEXT("🔁 Semana 10: el gran REPASO antes del examen. Hoy consolidas los TIEMPOS VERBALES (presente, pasado, perfectos, continuos y futuro). Vocabulario: el MEDIO AMBIENTE."),
    GRAMMAR("Repaso de los tiempos verbales", `PRESENTE: present simple (rutinas, hechos, horarios) vs present continuous (ahora, temporal, planes cercanos).
PASADO: past simple (acción terminada con tiempo pasado) vs past continuous (acción en curso en el pasado) vs used to (hábitos pasados).
PERFECTOS: present perfect (experiencia, resultado presente, since/for, just/already/yet) vs past simple (momento concreto). Present perfect continuous (duración de una acción reciente). Past perfect (una acción antes de otra en el pasado).
FUTURO: will (predicción/decisión espontánea), be going to (intención/evidencia), present continuous (plan organizado), present simple (horarios), future continuous (will be doing), future perfect (will have done).
⚠️ Reglas clave: since/for → present perfect; When I arrived, they had already left → past perfect; This time tomorrow I'll be flying → future continuous.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I live here since 2015 → ✅ I have lived here since 2015 (present perfect con since/for).\n· ❌ I have seen him yesterday → ✅ I saw him yesterday (tiempo concreto = past simple).\n· ❌ Tomorrow I go to the beach (plan) → ✅ I'm going to the beach tomorrow.\n· ❌ When I have arrived, they left → ✅ When I arrived, they had (already) left."),
    grammarEx("Use of English — Repaso de tiempos verbales", "Elige o completa con el tiempo correcto.", [
      mc("We ___ in this town since 2010.", ["live", "have lived", "are living"], 1, "since → present perfect."),
      mc("Look at the sky — it ___ rain.", ["will", "is going to", "rains"], 1, "evidencia → be going to."),
      mc("By the time we arrived, the film ___ .", ["already started", "had already started", "has already started"], 1, "antes de otra pasada → past perfect."),
      fb("I can't meet you at 8 — I ___ (have) dinner then. (acción en curso en el futuro)", ["will be having", "'ll be having"], "future continuous."),
      fb("She ___ (work) here for ten years and still loves it. (duración reciente/actual)", ["has been working"], "present perfect continuous."),
      mc("This time next year, I ___ in another country.", ["will live", "will be living", "live"], 1, "future continuous."),
      fb("When I was a child, we ___ (spend) every summer by the sea. (hábito pasado)", ["used to spend", "spent"], "used to / past simple."),
    ]),
    GRAMMAR("Vocabulario del día — El medio ambiente", "Léxico del medio ambiente (B2)."),
    deck("B2 S10D46 — El medio ambiente", [
      ["environment", "medio ambiente", "We must protect the environment.", "sustantivo", "ɪnˈvaɪrənmənt"],
      ["pollution", "contaminación", "Air pollution is a serious problem.", "sustantivo", "pəˈluːʃn"],
      ["greenhouse gases", "gases de efecto invernadero", "Greenhouse gases trap heat.", "sustantivo", "ˈɡriːnhaʊs ˌɡæsɪz"],
      ["recycle", "reciclar", "We recycle paper and glass.", "verbo", "ˌriːˈsaɪkl"],
      ["waste", "residuos / desperdiciar", "Reduce the waste you produce.", "sustantivo/verbo", "weɪst"],
      ["renewable", "renovable", "Renewable energy is growing fast.", "adjetivo", "rɪˈnjuːəbl"],
      ["endangered", "en peligro (de extinción)", "Pandas are an endangered species.", "adjetivo", "ɪnˈdeɪndʒəd"],
      ["carbon footprint", "huella de carbono", "Flying increases your carbon footprint.", "sustantivo", "ˌkɑːbən ˈfʊtprɪnt"],
      ["deforestation", "deforestación", "Deforestation destroys habitats.", "sustantivo", "ˌdiːˌfɒrɪˈsteɪʃn"],
      ["sustainable", "sostenible", "We need sustainable solutions.", "adjetivo", "səˈsteɪnəbl"],
    ]),
    vocabEx("Vocabulario — El medio ambiente", "Elige la opción correcta.", [
      mc("The natural world around us is the ___.", ["environment", "waste", "footprint"], 0, "environment."),
      mc("Energy from the sun or wind that never runs out is ___.", ["renewable", "endangered", "sustainable"], 0, "renewable (energy)."),
      mc("Cutting down large areas of forest is ___.", ["deforestation", "pollution", "recycling"], 0, "deforestation."),
      mc("An animal at risk of dying out completely is ___.", ["endangered", "renewable", "sustainable"], 0, "endangered."),
      mc("The total amount of CO₂ your lifestyle produces is your ___.", ["carbon footprint", "greenhouse gas", "waste"], 0, "carbon footprint."),
      mc("Turning used materials into new products is to ___ them.", ["recycle", "pollute", "waste"], 0, "recycle."),
    ]),

    ...uoe({
      p1: {
        title: "The warning signs",
        text: "For decades, scientists have been warning us about the damage we are (1)___ to the planet, and for decades, on the whole, we have failed to listen. Only now, as the consequences (2)___ to make themselves felt in our daily lives, are we finally beginning to pay attention. Around the world, the signs are becoming (3)___ to ignore. Summers are growing hotter, storms more violent, and once-reliable seasons less predictable than ever (4)___. Coral reefs are dying, glaciers are melting, and species are disappearing at a rate not (5)___ since the age of the dinosaurs. What makes all this so alarming is not any single event but the (6)___ pattern behind them. The scientists tell us, with growing confidence, that these changes are not natural fluctuations but the direct (7)___ of human activity, above all our burning of fossil fuels. The good news, if there is any, is that because the problem is of our own making, the solution lies in our hands (8)___. We know what is causing the crisis, and we know, broadly, what must be done. The only real question that remains is whether we will find the collective will to do it in time.",
        q: [
          mc("(1)", ["doing", "making", "causing", "having"], 0, "'the damage we are doing'."),
          mc("(2)", ["begin", "start", "come", "get"], 1, "'as the consequences start to make'."),
          mc("(3)", ["impossible", "hard", "difficult", "unable"], 0, "'becoming impossible to ignore'."),
          mc("(4)", ["before", "after", "then", "since"], 0, "'less predictable than ever before'."),
          mc("(5)", ["seen", "known", "watched", "viewed"], 0, "'a rate not seen since'."),
          mc("(6)", ["overall", "total", "whole", "complete"], 0, "'the overall pattern'."),
          mc("(7)", ["result", "effect", "cause", "outcome"], 0, "'the direct result of human activity'."),
          mc("(8)", ["too", "also", "as well", "either"], 0, "'lies in our hands too'."),
        ],
      },
      p2: {
        title: "A small change, a big difference",
        text: "It is easy to feel that, faced (1)___ a problem as vast as climate change, there is nothing a single person can do. The problem is global; our own actions seem laughably small. But this feeling, understandable (2)___ it is, is both mistaken and dangerous. It is mistaken because small actions, multiplied across billions of people, add (3)___ to an enormous impact. And it is dangerous because it becomes an excuse to do nothing at all. In truth, there is a great deal that each of us can do. We can waste less, consume less, and think more carefully about the impact of (4)___ we buy and how we travel. We can eat less meat, fly less often, and switch to renewable energy where we can. None of these actions, on (5)___ own, will save the planet. But together they matter, both directly, by reducing our collective footprint, (6)___ indirectly, by sending a signal to governments and companies that people care. Perhaps most importantly of all, when we change our own behaviour, we make (7)___ easier for others to do the same. Change spreads. The person who insists that individual action is pointless has, in a sense, already given (8)___. Those who act, however small their actions, are keeping hope alive.",
        q: [
          fb("(1)", ["with"], "'faced with a problem'."),
          fb("(2)", ["as", "though"], "'understandable as it is'."),
          fb("(3)", ["up"], "'add up to an enormous impact'."),
          fb("(4)", ["what"], "'the impact of what we buy'."),
          fb("(5)", ["their"], "'on their own'."),
          fb("(6)", ["and"], "'both directly… and indirectly'."),
          fb("(7)", ["it"], "'we make it easier'."),
          fb("(8)", ["up"], "'has already given up'."),
        ],
      },
      p3: {
        title: "The green revolution",
        text: "For most of the industrial age, economic growth and environmental (1)___ went hand in hand: to get richer, it seemed, a country had to burn ever more fossil fuels and pump ever more pollution into the air. In recent years, however, this gloomy (2)___ has begun, at last, to change. A quiet revolution in (3)___ energy has transformed what once seemed a hopeless situation. The cost of solar and wind power, which not long ago was (4)___ expensive, has fallen so dramatically that renewables are now, in many places, the cheapest source of electricity ever known. This is a development of (5)___ importance. For the first time, the clean choice is also, increasingly, the cheap choice — which means that the shift away from fossil fuels is being driven not only by (6)___ concern but by simple economics. Enormous challenges, of course, remain. The transition must happen far faster than it currently is, and powerful interests continue to resist it. But the direction of travel is now (7)___. The age of fossil fuels, which powered two centuries of extraordinary progress at a terrible environmental cost, is finally drawing towards its (8)___. What comes next will determine the future of the planet.",
        items: [
          { root: "destroy", accepted: ["destruction"], hint: "'environmental destruction' → destruction." },
          { root: "assume", accepted: ["assumption"], hint: "'this gloomy assumption' → assumption." },
          { root: "renew", accepted: ["renewable"], hint: "'renewable energy' → renewable." },
          { root: "prohibit", accepted: ["prohibitively"], hint: "'prohibitively expensive' → prohibitively." },
          { root: "history", accepted: ["historic"], hint: "'of historic importance' → historic." },
          { root: "environment", accepted: ["environmental"], hint: "'environmental concern' → environmental." },
          { root: "mistake", accepted: ["unmistakable"], hint: "'now unmistakable' → unmistakable." },
          { root: "end", accepted: ["end"], hint: "'towards its end' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — el medio ambiente",
        items: [
          { s1: "We started recycling ten years ago.", key: "BEEN", s2: "We ___ for ten years.", accepted: ["have been recycling"], explanation: "present perfect continuous (duración)." },
          { s1: "It is not necessary to fly so often.", key: "NEED", s2: "You ___ so often.", accepted: ["don't need to fly", "needn't fly"], explanation: "don't need to / needn't." },
          { s1: "They will finish the wind farm by June.", key: "HAVE", s2: "By June, they ___ the wind farm.", accepted: ["will have finished"], explanation: "future perfect." },
          { s1: "People pollute the rivers with plastic.", key: "POLLUTED", s2: "The rivers ___ with plastic.", accepted: ["are polluted"], explanation: "voz pasiva presente." },
          { s1: "Cutting down forests is destroying habitats.", key: "BEING", s2: "Habitats ___ by the cutting down of forests.", accepted: ["are being destroyed"], explanation: "pasiva continua." },
          { s1: "I regret not acting on climate change sooner.", key: "WISH", s2: "I ___ on climate change sooner.", accepted: ["wish I had acted"], explanation: "wish + past perfect (arrepentimiento)." },
        ],
      },
      p5: {
        title: "The town that changed its mind",
        text: "Fifteen years ago, the small coastal town of Marisburgh was, by any measure, one of the most polluted places in the country. Its economy depended almost entirely on a single, ageing coal-fired power station, which employed a third of the town's working population and belched thick smoke over its rooftops day and night. The air was among the dirtiest in the region; rates of asthma and other lung conditions were alarmingly high; and the surrounding countryside, once famous for its beauty, had been dulled by decades of grime. Yet the town clung to its power station, for a simple and understandable reason: without it, most of Marisburgh would have no work at all.\n\nWhen the government finally announced that the ageing station would be closed on environmental grounds, the news was met not with relief but with fear and anger. The people of Marisburgh saw not a chance for cleaner air but the death of their town. Protests were held; petitions were signed; local politicians promised to fight the decision. To the outside world, obsessed with the abstract dangers of pollution, the closure seemed obviously right. To the people whose livelihoods depended on the station, it seemed like a catastrophe imposed by distant officials who would never have to live with the consequences.\n\nWhat happened next surprised everyone. Rather than simply closing the station and abandoning the town, as had happened in so many places before, the government and a group of private investors chose Marisburgh as the site of an ambitious experiment. The old power station would be demolished, but in its place would rise something new: a large factory manufacturing components for wind turbines, together with a training centre to retrain the station's workers for the new industry. It was a gamble, and by no means a certain one. But it was infinitely better than the alternative of managed decline.\n\nToday, Marisburgh is a different place. The air is clean; the countryside has recovered its former beauty; and rates of lung disease have fallen sharply. More importantly, from the point of view of its residents, the town still has work. The wind turbine factory now employs more people than the old power station ever did, and Marisburgh has become, improbably, a symbol of what a green transition can look like when it is done well. Its story is far from typical, and it would be foolish to pretend that every struggling industrial town can be so easily transformed. But it stands as a powerful reminder of a crucial truth: that protecting the environment and protecting people's livelihoods need not be opposing goals. Done thoughtlessly, the green transition can devastate communities. Done well, as in Marisburgh, it can renew them.",
        q: [
          mc("What was Marisburgh's situation fifteen years ago?", ["Wealthy and clean.", "Heavily polluted and dependent on a coal power station.", "Abandoned.", "A tourist resort."], 1, "'one of the most polluted places… depended almost entirely on a single… coal-fired power station'."),
          mc("How did the town react to the news of the closure?", ["With relief.", "With fear and anger.", "With indifference.", "With celebration."], 1, "'met not with relief but with fear and anger'."),
          mc("Why did the townspeople oppose the closure?", ["They loved pollution.", "Their livelihoods depended on the station.", "They disliked change.", "They wanted more smoke."], 1, "'most of Marisburgh would have no work at all'."),
          mc("What did the government and investors decide to build?", ["A new coal station.", "A wind turbine factory and a training centre.", "Housing.", "A shopping mall."], 1, "'a large factory manufacturing components for wind turbines, together with a training centre'."),
          mc("What is Marisburgh like today?", ["Still polluted.", "Clean, recovered, and still employing people.", "Abandoned.", "Poorer than before."], 1, "'The air is clean… the town still has work'."),
          mc("What is the 'crucial truth' the story illustrates?", ["The environment doesn't matter.", "Protecting the environment and livelihoods need not be opposing goals.", "Power stations are good.", "Change is impossible."], 1, "'protecting the environment and protecting people's livelihoods need not be opposing goals'."),
        ],
      },
      p6: {
        title: "The psychology of climate inaction",
        text: "If the dangers of climate change are so clear, and the science so overwhelming, why have we been so slow to act? (1)___ The answer, psychologists suggest, lies less in the facts than in the peculiar way the human mind is wired.\n\nOur brains evolved to respond to immediate, visible, personal threats. (2)___ A charging tiger or a rival tribe triggers instant action; a slow, invisible, statistical danger unfolding over decades does not.\n\nClimate change, unfortunately, is almost perfectly designed to slip past our psychological defences. (3)___ It is gradual, abstract, global and distant, the very opposite of the sudden, concrete, local dangers our instincts are tuned to fear.\n\nThere is also the problem of what psychologists call 'diffusion of responsibility'. (4)___ When a problem belongs to everyone, it can easily end up being tackled by no one, each of us assuming that someone else will act.\n\nUnderstanding these mental blind spots is not merely an academic exercise. (5)___ If we know why we are inclined to ignore the crisis, we are better placed to overcome that inclination. (6)___ The first step in solving any problem is understanding why we have failed to solve it so far.",
        options: [
          "It is one of the great puzzles of our age.",                   // A -> gap 1
          "Danger, to our ancestors, meant something you could see.",      // B -> gap 2
          "Almost every feature of it works against our instincts.",      // C -> gap 3
          "A threat that is everyone's is, in practice, nobody's.",        // D -> gap 4
          "This knowledge is, in fact, a genuine source of hope.",         // E -> gap 5
          "Self-understanding is where any real solution must begin.",     // F -> gap 6
          "Human beings always respond quickly to distant dangers.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: uno de los grandes enigmas."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el peligro era lo que se veía."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: casi todo va contra nuestros instintos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: lo de todos no es de nadie."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ese conocimiento da esperanza."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la autocomprensión es el comienzo."),
        ],
      },
      p7: {
        title: "Four people talk about living greener",
        text: "Read what four people say about trying to live in a more environmentally friendly way.\n\nA) NADIA: For me, it started with food. I stopped eating meat three years ago, and honestly it's been the single biggest thing I've done for the planet — far bigger than recycling or turning off lights. People underestimate how much of our footprint is on our plate. Once I understood that, changing what I ate felt like the obvious place to start.\n\nB) TOM: I'll be honest: I'm sceptical about individual action. I recycle, I cycle to work, but I don't kid myself it's saving the planet. The real problem is a hundred giant companies producing most of the emissions, and no amount of me refusing plastic straws will change that. What we need is proper regulation, not guilt-tripping individuals.\n\nC) PRIYA: What changed everything for me was having children. Suddenly the future stopped being an abstraction — it became my kids' actual lives. I've become almost obsessive: solar panels, an electric car, growing our own vegetables. Some people find it exhausting, but for me it's simply what being a responsible parent now means.\n\nD) SAM: I try to focus on the things that actually make a difference, rather than the ones that just make me feel good. I looked into it properly, and it turns out flying and driving are what really matter, not whether I remember my cloth bag. So I've stopped flying and sold my car. It's a bigger sacrifice, but it's an honest one.",
        q: [
          mc("Who says changing their diet was their biggest single action?", ["A", "B", "C", "D"], 0, "Nadia: 'I stopped eating meat… the single biggest thing'."),
          mc("Who is sceptical about the impact of individual action?", ["A", "B", "C", "D"], 1, "Tom: 'I'm sceptical about individual action'."),
          mc("Who became greener after having children?", ["A", "B", "C", "D"], 2, "Priya: 'What changed everything… was having children'."),
          mc("Who focuses on the actions that genuinely make a difference?", ["A", "B", "C", "D"], 3, "Sam: 'the things that actually make a difference'."),
          mc("Who thinks regulation matters more than personal guilt?", ["A", "B", "C", "D"], 1, "Tom: 'What we need is proper regulation'."),
          mc("Who has installed solar panels and grows vegetables?", ["A", "B", "C", "D"], 2, "Priya: 'solar panels… growing our own vegetables'."),
          mc("Who says most of our footprint is 'on our plate'?", ["A", "B", "C", "D"], 0, "Nadia: 'how much of our footprint is on our plate'."),
          mc("Who has stopped flying and sold their car?", ["A", "B", "C", "D"], 3, "Sam: 'I've stopped flying and sold my car'."),
          mc("Who blames a hundred giant companies for most emissions?", ["A", "B", "C", "D"], 1, "Tom: 'a hundred giant companies producing most of the emissions'."),
          mc("Who sees green living as part of being a responsible parent?", ["A", "B", "C", "D"], 2, "Priya: 'what being a responsible parent now means'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Individuals, not governments, are mainly responsible for protecting the environment.'\nComenta estos dos aspectos y añade uno propio:\n1. daily habits (los hábitos diarios)\n2. laws and taxes (las leyes y los impuestos)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'One thing everyone could do to help the planet' — convence a tus lectores.\n· INFORME sobre cómo tu instituto o empresa podría ser más ecológico: analiza y recomienda mejoras.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: We've been recycling everything for years now, and it's just second nature. Two. Man: I'm going to cycle to work from now on — I've finally decided. Three. Woman: By 2030, they say, this whole valley will have been replanted with native trees. Four. Man: When I was young, the river here was full of fish; now there's almost nothing. Five. Woman: The air quality has improved noticeably since they closed the old factory. Six. Man: If everyone flew a little less, the difference would be enormous. Seven. Woman: I wish I'd started composting years ago — it's so easy. Eight. Man: This time next year, we'll be generating all our own electricity from solar.", [
      mc("1. What does the woman say about recycling?", ["It's difficult.", "It's become second nature.", "She's just started."], 1, "'it's just second nature'."),
      mc("2. What has the man decided to do?", ["Drive more.", "Cycle to work.", "Work from home."], 1, "'I'm going to cycle to work'."),
      mc("3. What will happen to the valley by 2030?", ["It will be built on.", "It will have been replanted with native trees.", "It will flood."], 1, "'will have been replanted'."),
      mc("4. How has the river changed?", ["More fish.", "It used to have fish; now almost none.", "It's cleaner."], 1, "'was full of fish; now there's almost nothing'."),
      mc("5. Why has the air quality improved?", ["More cars.", "They closed the old factory.", "It rained."], 1, "'since they closed the old factory'."),
      mc("6. What does the man say about flying less?", ["It's pointless.", "The difference would be enormous.", "It's impossible."], 1, "'the difference would be enormous'."),
      mc("7. What does the woman regret?", ["Composting.", "Not starting composting sooner.", "Recycling."], 1, "'I wish I'd started composting years ago'."),
      mc("8. What will the man be doing next year?", ["Using the grid.", "Generating his own solar electricity.", "Moving house."], 1, "'generating all our own electricity from solar'."),
    ]),

    ...speakingParts({ p1: "qué haces por el medio ambiente en tu día a día y qué te gustaría cambiar", p2: "dos escenas del medio ambiente (una ciudad contaminada con tráfico y un paisaje natural con paneles solares): compáralas y especula", p3: "qué es lo más eficaz para proteger el planeta (reciclar, comer menos carne, usar energías renovables, volar menos, leyes más estrictas): comentadlo y elegid lo mejor", p4: "el medio ambiente: si la responsabilidad es de las personas o de los gobiernos, si somos optimistas sobre el clima y qué sacrificios estamos dispuestos a hacer" }),

    SUMMARY("Resumen del Día 46", [
      "Present perfect con since/for; past simple con tiempo concreto; past perfect para lo anterior a otra pasada.",
      "Futuro: will (predicción/decisión), going to (intención/evidencia), present continuous (plan), future continuous/perfect.",
      "Vocabulario del medio ambiente. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 47", "Escribe 8 frases usando 8 tiempos verbales distintos sobre el medio ambiente. Repasa las flashcards. Mañana: repaso de condicionales, wishes y modales."),
  ],
};

// ───────────────────────── DÍA 47 ─────────────────────────
const DAY47 = {
  title: "Día 47 — Repaso de condicionales, wishes y modales · El cambio climático",
  description: "Repaso integrado de los cuatro condicionales, wish/if only y los verbos modales (incl. de deducción y de pasado). Vocabulario del cambio climático. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Manejar hipótesis, deseos y grados de certeza/obligación con precisión.",
    summary: "Repaso de condicionales/wishes/modales; cambio climático; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'would' en la cláusula if.", "'if only I would have' → if only I had.", "must have vs can't have vs might have (deducción)."],
    reviewPrompts: ["¿'If I would have known…' es correcto? ¿Por qué no?", "¿Cómo expresas una deducción segura sobre el pasado?"],
  },
  items: [
    TEXT("🔁 Repaso: tiempos verbales. Hoy los CONDICIONALES, los WISHES y los MODALES: la hipótesis y el grado de certeza/obligación. Vocabulario: el CAMBIO CLIMÁTICO."),
    GRAMMAR("Repaso de condicionales, wishes y modales", `CONDICIONALES:
· Zero (verdad general): If you heat ice, it melts.
· First (probable, futuro): If we act now, we will avoid the worst.
· Second (hipotético, presente/futuro): If governments acted, we would solve it. (If + past; would + inf.)
· Third (pasado imposible): If we had acted earlier, we would have avoided this. (If + past perfect; would have + participle.)
· Mixed: If we had acted then, we wouldn't be in this mess now.
WISHES: wish + past simple (deseo presente); wish + past perfect (arrepentimiento pasado); wish + would (queja sobre otro). If only = wish (más enfático).
MODALES DE DEDUCCIÓN: must (seguro que sí), can't (seguro que no), might/may/could (posible). En pasado: must have + participle, can't have + participle, might have + participle.
MODALES DE OBLIGACIÓN: must/have to (obligación), should/ought to (consejo), needn't/don't have to (no necesario), mustn't (prohibido).
⚠️ Nunca 'would' ni 'will' en la cláusula IF. ❌ If I would know → ✅ If I knew.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If I would have money → ✅ If I had money (2º condicional).\n· ❌ If only I would have known → ✅ If only I had known (arrepentimiento).\n· ❌ I wish I would be taller → ✅ I wish I were taller.\n· Deducción pasada: 'She must have left' (seguro), 'He can't have seen it' (imposible), 'They might have forgotten' (posible)."),
    grammarEx("Use of English — Condicionales, wishes y modales", "Elige o completa.", [
      mc("If we ___ now, we would avoid the worst effects.", ["act", "acted", "would act"], 1, "2º condicional: if + past."),
      mc("If they had listened to scientists, we ___ in this crisis now.", ["won't be", "wouldn't be", "wouldn't have been"], 1, "mixto: wouldn't be (presente)."),
      fb("I wish governments ___ (take) the crisis more seriously. (deseo presente)", ["took", "would take"], "wish + past / would."),
      fb("She's not answering — she ___ (leave) already. (deducción segura, pasado)", ["must have left"], "must have + participle."),
      mc("The lights are off, so they ___ be at home.", ["must", "can't", "should"], 1, "deducción: can't be (imposible)."),
      mc("You ___ worry — the report isn't due until Friday.", ["mustn't", "don't have to", "needn't have"], 1, "no obligación → don't have to / needn't."),
      fb("If only I ___ (start) recycling sooner! (arrepentimiento)", ["had started"], "if only + past perfect."),
    ]),
    GRAMMAR("Vocabulario del día — El cambio climático", "Léxico del cambio climático (B2)."),
    deck("B2 S10D47 — El cambio climático", [
      ["climate change", "cambio climático", "Climate change threatens us all.", "sustantivo", "ˈklaɪmət ˌtʃeɪndʒ"],
      ["global warming", "calentamiento global", "Global warming is accelerating.", "sustantivo", "ˌɡləʊbl ˈwɔːmɪŋ"],
      ["emissions", "emisiones", "We must cut carbon emissions.", "sustantivo", "ɪˈmɪʃnz"],
      ["fossil fuels", "combustibles fósiles", "Fossil fuels cause most emissions.", "sustantivo", "ˌfɒsl ˈfjuːəlz"],
      ["drought", "sequía", "The region suffered a severe drought.", "sustantivo", "draʊt"],
      ["flood", "inundación / inundar", "Rising seas cause coastal floods.", "sustantivo/verbo", "flʌd"],
      ["extreme weather", "clima extremo", "Extreme weather is now more common.", "sustantivo", "ɪkˈstriːm ˈweðə"],
      ["sea level", "nivel del mar", "Sea levels are rising steadily.", "sustantivo", "ˈsiː ˌlevl"],
      ["irreversible", "irreversible", "Some damage may be irreversible.", "adjetivo", "ˌɪrɪˈvɜːsəbl"],
      ["tackle", "abordar / hacer frente a", "We must tackle the crisis now.", "verbo", "ˈtækl"],
    ]),
    vocabEx("Vocabulario — El cambio climático", "Elige la opción correcta.", [
      mc("A long period with no rain is a ___.", ["drought", "flood", "sea level"], 0, "drought."),
      mc("Gases released into the air, such as CO₂, are ___.", ["emissions", "fossil fuels", "droughts"], 0, "emissions."),
      mc("Coal, oil and gas are ___.", ["fossil fuels", "emissions", "floods"], 0, "fossil fuels."),
      mc("Damage that cannot be undone is ___.", ["irreversible", "extreme", "renewable"], 0, "irreversible."),
      mc("To deal actively with a problem is to ___ it.", ["tackle", "flood", "emit"], 0, "tackle."),
      mc("The gradual rise in the Earth's temperature is ___.", ["global warming", "drought", "sea level"], 0, "global warming."),
    ]),

    ...uoe({
      p1: {
        title: "The point of no return",
        text: "Scientists who study the climate often speak of 'tipping points' — thresholds (1)___ which change becomes self-sustaining and, in some cases, irreversible. Beyond such a point, the climate would continue to warm even if humanity (2)___ to stop all its emissions overnight. This is what makes the crisis so urgent, and so different (3)___ most of the problems humanity has faced before. With an ordinary problem, if we delay, we simply solve it later. With climate change, delay may (4)___ the problem impossible to solve at all. If we cross certain thresholds — the melting of vast ice sheets, the collapse of major ocean currents, the release of gases frozen for millennia beneath the permafrost — we may set (5)___ motion changes that no future action, however drastic, could reverse. Nobody knows exactly where these tipping points lie, which is precisely what makes the gamble so reckless. We are, in effect, conducting an uncontrolled experiment on the only planet we (6)___, without knowing how close we are to disaster. The lesson the scientists draw from this uncertainty is not complacency but caution. When you cannot see the edge of the cliff, the wise course is not to keep (7)___ towards it, but to stop, and step back, while you still (8)___.",
        q: [
          mc("(1)", ["beyond", "after", "over", "past"], 0, "'thresholds beyond which'."),
          mc("(2)", ["were", "was", "is", "had"], 0, "'if humanity were to stop'."),
          mc("(3)", ["from", "to", "than", "of"], 0, "'different from most problems'."),
          mc("(4)", ["make", "leave", "turn", "keep"], 0, "'delay may make the problem impossible'."),
          mc("(5)", ["in", "into", "on", "to"], 0, "'set in motion'."),
          mc("(6)", ["have", "own", "hold", "keep"], 0, "'the only planet we have'."),
          mc("(7)", ["walking", "going", "moving", "heading"], 0, "'keep walking towards it'."),
          mc("(8)", ["can", "may", "could", "will"], 0, "'while you still can'."),
        ],
      },
      p2: {
        title: "The debate we should be having",
        text: "For many years, the public debate about climate change was stuck (1)___ a question that, among scientists, had long since been settled: whether it was happening at all, and whether human beings were the cause. That debate, thankfully, is largely (2)___. The overwhelming majority of people now accept the basic science. But this hard-won agreement has, in a sense, only brought us to the (3)___ of a far more difficult set of questions. Accepting that the problem is real is one thing; agreeing (4)___ to do about it is quite another. How fast should we move? Who should bear the costs — rich countries, which caused most of the problem, or poor ones, which are growing fastest? How do we balance the needs of the present (5)___ those of the future? These are not scientific questions but political and moral ones, and on these there is (6)___ from consensus. This, in truth, is the debate we should now be having: not whether to act, which is beyond serious dispute, but how, how fast, and at (7)___ cost. It is a debate that touches on our deepest values, and one that will (8)___ the world our children inherit.",
        q: [
          fb("(1)", ["on", "at"], "'stuck on a question'."),
          fb("(2)", ["over", "settled", "won"], "'is largely over'."),
          fb("(3)", ["start", "beginning", "edge"], "'to the beginning of'."),
          fb("(4)", ["what"], "'agreeing what to do'."),
          fb("(5)", ["against", "with", "and"], "'the present against those of the future'."),
          fb("(6)", ["far"], "'there is far from consensus'."),
          fb("(7)", ["what"], "'at what cost'."),
          fb("(8)", ["shape", "determine", "decide"], "'will shape the world'."),
        ],
      },
      p3: {
        title: "The role of hope",
        text: "There is a real danger, in talking about climate change, of frightening people into (1)___ rather than action. Faced with a relentless stream of catastrophic predictions, many people react not by (2)___ their behaviour but by shutting down altogether, concluding that the situation is (3)___ and that nothing they do can make any difference. This 'doom-mongering', however well-intentioned, can be deeply (4)___. Fear is a powerful motivator in the short term, but sustained fear, with no sense that action is (5)___, tends to produce despair, and despair produces passivity. This is why many who study the psychology of the crisis now argue for a different approach — one that is honest about the dangers but also emphasises the very real (6)___ for hope. And there is, genuinely, cause for hope. The solutions largely exist; the cost of clean energy is (7)___; public awareness has never been higher. The task, enormous though it is, is not impossible. Communicating this — being truthful about the scale of the challenge while insisting that it can still be met — may be the single most (8)___ thing that anyone concerned about the climate can do.",
        items: [
          { root: "paralyse", accepted: ["paralysis"], hint: "'into paralysis' → paralysis." },
          { root: "change", accepted: ["changing"], hint: "'by changing their behaviour' → changing." },
          { root: "hope", accepted: ["hopeless"], hint: "'the situation is hopeless' → hopeless." },
          { root: "produce", accepted: ["counterproductive"], hint: "'can be counterproductive' → counterproductive." },
          { root: "worth", accepted: ["worthwhile"], hint: "'action is worthwhile' → worthwhile." },
          { root: "ground", accepted: ["grounds"], hint: "'grounds for hope' → grounds." },
          { root: "fall", accepted: ["falling"], hint: "'the cost… is falling' → falling." },
          { root: "use", accepted: ["useful"], hint: "'the most useful thing' → useful." },
        ],
      },
      p4: {
        title: "Transformaciones — condicionales y modales",
        items: [
          { s1: "We didn't act early, so we now face a crisis.", key: "HAD", s2: "If we ___ early, we wouldn't face a crisis now.", accepted: ["had acted"], explanation: "mixto: if + past perfect." },
          { s1: "I'm sure she has already read the report.", key: "MUST", s2: "She ___ the report already.", accepted: ["must have read"], explanation: "must have + participle (deducción)." },
          { s1: "It's a pity I don't understand the science better.", key: "WISH", s2: "I ___ the science better.", accepted: ["wish I understood"], explanation: "wish + past simple." },
          { s1: "It isn't necessary for you to come to the meeting.", key: "HAVE", s2: "You ___ to the meeting.", accepted: ["don't have to come"], explanation: "don't have to (no obligación)." },
          { s1: "Perhaps they forgot to switch it off.", key: "MIGHT", s2: "They ___ to switch it off.", accepted: ["might have forgotten"], explanation: "might have + participle (posibilidad pasada)." },
          { s1: "Cutting emissions now is the only way to avoid disaster.", key: "UNLESS", s2: "___ we cut emissions now, we won't avoid disaster.", accepted: ["Unless"], explanation: "unless = if… not." },
        ],
      },
      p5: {
        title: "The girl who would not be quiet",
        text: "In August 2018, a fifteen-year-old girl did something that, on the face of it, seemed almost pointless. Instead of going to school, she sat down alone outside her country's parliament with a hand-painted sign that read, in her own language, 'School Strike for Climate'. She had no organisation behind her, no funding, and no obvious reason to think that anyone would pay the slightest attention. She was, by her own account, a shy and awkward teenager who found social situations difficult. And yet, within little more than a year, this one girl's solitary protest had grown into a global movement involving millions of young people across every continent, and she herself had become one of the most recognisable figures on the planet.\n\nWhat made her so effective was not eloquence or charisma in the ordinary sense. It was, paradoxically, her refusal to behave as public figures are supposed to behave. Where politicians spoke in careful, hedged, reassuring language, she spoke with a blunt, uncompromising directness that many found startling. She told world leaders, to their faces, that they had failed; she refused to offer the comforting reassurances that audiences expected; she insisted, again and again, on simply repeating what the science said, however unwelcome. Her message was, in essence, devastatingly simple: the adults in charge were not doing nearly enough, they knew it, and history would judge them for it.\n\nInevitably, she attracted fierce criticism as well as admiration. She was mocked for her youth, her manner and her lack of expertise; she was accused of being naive, of being manipulated by others, of spreading alarm. Some of this criticism was, no doubt, sincere; much of it, it was hard not to feel, came from people who were simply uncomfortable at being challenged by a teenager. What none of her critics could plausibly deny, however, was her impact. Whatever one thought of her, she had done something that decades of patient reports and careful diplomacy had failed to do: she had made the climate crisis impossible to ignore.\n\nWhether her movement will ultimately succeed in changing the course of events remains, of course, an open question. Movements rise and fall; public attention is fickle; the forces resisting change are powerful and well-funded. But her story stands, regardless of what follows, as a striking reminder of an old and easily forgotten truth: that history is often changed not by the powerful, acting from the centre, but by the apparently powerless, acting from the margins. A single determined individual, saying something true that others were afraid to say, turned out to be capable of shifting the conversation of the entire world.",
        q: [
          mc("What did the girl do in August 2018?", ["Gave a speech.", "Sat outside parliament with a protest sign instead of going to school.", "Started a company.", "Joined a party."], 1, "'she sat down alone outside her country's parliament with a hand-painted sign'."),
          mc("How is she described as a person?", ["Confident and outgoing.", "A shy, awkward teenager.", "An experienced activist.", "A politician."], 1, "'a shy and awkward teenager'."),
          mc("What made her so effective?", ["Her eloquence.", "Her blunt refusal to behave as public figures usually do.", "Her funding.", "Her fame."], 1, "'her refusal to behave as public figures are supposed to behave'."),
          mc("What was the essence of her message?", ["Everything is fine.", "The adults in charge were not doing enough and knew it.", "Science is uncertain.", "Change is impossible."], 1, "'the adults in charge were not doing nearly enough, they knew it'."),
          mc("What could her critics NOT deny?", ["Her age.", "Her impact.", "Her manner.", "Her inexperience."], 1, "'What none of her critics could plausibly deny… was her impact'."),
          mc("What 'old truth' does her story illustrate?", ["The powerful always win.", "History is often changed by the apparently powerless.", "Protest is useless.", "Teenagers should be quiet."], 1, "'history is often changed… by the apparently powerless, acting from the margins'."),
        ],
      },
      p6: {
        title: "The trouble with predictions",
        text: "Predicting the future has always been a hazardous business, and nowhere more so than with the climate. (1)___ The Earth's climate is a system of almost unimaginable complexity, and forecasting its behaviour decades ahead is fraught with uncertainty.\n\nThis uncertainty is sometimes seized upon by those who wish to avoid action. (2)___ If the scientists cannot tell us exactly what will happen, they argue, why should we take costly steps based on their guesses?\n\nBut this argument, superficially reasonable, rests on a basic misunderstanding of what uncertainty means. (3)___ Uncertainty about the precise details is not the same as doubt about the overall picture, which is alarmingly clear.\n\nConsider an analogy. (4)___ A doctor may be unable to tell a heavy smoker exactly when they will fall ill, or precisely which disease will strike, yet be entirely certain that the smoking is dangerous.\n\nThe uncertainty in climate science works in much the same way. (5)___ We cannot say exactly how bad things will get, or precisely when, but we can be confident that, without action, they will get bad. (6)___ To demand certainty before acting is, in this context, not caution but recklessness dressed up as prudence.",
        options: [
          "No system on Earth is harder to forecast with precision.",       // A -> gap 1
          "Doubt about the details becomes an excuse for inaction.",        // B -> gap 2
          "The broad direction of change is not in serious question.",      // C -> gap 3
          "Medicine offers a useful and familiar parallel.",               // D -> gap 4
          "The general danger is clear even where the specifics are not.",  // E -> gap 5
          "Waiting for perfect knowledge would be a fatal mistake.",        // F -> gap 6
          "Climate scientists can predict the weather years in advance.",    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ningún sistema es más difícil de prever."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la duda se vuelve excusa."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la dirección general no está en duda."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la medicina ofrece un paralelo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el peligro general es claro."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esperar certeza sería fatal."),
        ],
      },
      p7: {
        title: "Four people discuss the climate crisis",
        text: "Read what four people say about how they feel about climate change.\n\nA) NADIA: I try to stay hopeful, because despair helps no one. Yes, the situation is serious, but the solutions largely exist — clean energy, better farming, protecting forests. What's missing is the will, not the technology. If we choose to, we can still fix this. I refuse to give up on that.\n\nB) TOM: Honestly? I'm frightened, especially for my children. I read the science, and it terrifies me. I sometimes lie awake wondering what kind of world they'll grow up in. I don't think people my age fully grasp what's coming. We're stealing our kids' future, and mostly we're not even talking about it.\n\nC) PRIYA: My frustration is with the constant focus on individuals. Every article tells me to recycle and take shorter showers. Meanwhile, governments approve new oil fields and airports. It's a distraction. The real decisions are made far above our heads, and until that changes, my recycling is basically theatre.\n\nD) SAM: I've come to think the whole thing is fundamentally about fairness. The countries that caused the problem aren't the ones suffering most; the generation that benefited isn't the one that'll pay. Any solution that ignores that injustice will fail, and deserves to. This isn't just a scientific problem — it's a moral one.",
        q: [
          mc("Who deliberately tries to stay hopeful?", ["A", "B", "C", "D"], 0, "Nadia: 'I try to stay hopeful'."),
          mc("Who is frightened, especially for their children?", ["A", "B", "C", "D"], 1, "Tom: 'I'm frightened, especially for my children'."),
          mc("Who is frustrated by the focus on individual action?", ["A", "B", "C", "D"], 2, "Priya: 'My frustration is with the constant focus on individuals'."),
          mc("Who sees the crisis mainly as a question of fairness?", ["A", "B", "C", "D"], 3, "Sam: 'fundamentally about fairness'."),
          mc("Who says the will, not the technology, is what's missing?", ["A", "B", "C", "D"], 0, "Nadia: 'What's missing is the will, not the technology'."),
          mc("Who lies awake worrying about the future?", ["A", "B", "C", "D"], 1, "Tom: 'I sometimes lie awake'."),
          mc("Who calls their own recycling 'theatre'?", ["A", "B", "C", "D"], 2, "Priya: 'my recycling is basically theatre'."),
          mc("Who says any solution ignoring injustice will fail?", ["A", "B", "C", "D"], 3, "Sam: 'Any solution that ignores that injustice will fail'."),
          mc("Who feels their generation is 'stealing' their kids' future?", ["A", "B", "C", "D"], 1, "Tom: 'We're stealing our kids' future'."),
          mc("Who insists the solutions largely already exist?", ["A", "B", "C", "D"], 0, "Nadia: 'the solutions largely exist'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is already too late to stop climate change, so we should focus on adapting to it.'\nComenta estos dos aspectos y añade uno propio:\n1. reducing emissions (reducir las emisiones)\n2. protecting people from extreme weather (proteger a la gente)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· CARTA a un periódico local respondiendo a un artículo que niega el cambio climático: argumenta con firmeza y educación.\n· ARTÍCULO: 'What my generation must do about the climate' — motiva a otros jóvenes.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una climatóloga, la doctora Reeves, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a climate scientist called Doctor Reeves giving a talk. Doctor Reeves: Let me begin by clearing up a common confusion. Weather is what happens on a given day; climate is the pattern over many years. A cold winter tells us nothing about the climate. What matters is the long-term trend, and that trend is unmistakably upward. Now, the main driver of this warming is well understood: it is the burning of fossil fuels, which releases carbon dioxide and traps heat. This is not a theory in the loose sense; it is basic physics, understood for over a century. People often ask me about tipping points. These are thresholds beyond which change becomes self-sustaining and, crucially, irreversible. We do not know exactly where they lie, and that uncertainty is precisely what makes the situation so dangerous. My third point concerns fairness. The countries that have emitted the most are not, by and large, the ones suffering the worst effects. That injustice lies at the heart of the international deadlock. But I want to end on a note of realism, not despair. The solutions largely exist, and the cost of clean energy has collapsed. What we lack is not the means but the will. The single most important thing you can do is not to change a light bulb, but to use your voice, and your vote, to demand action.", [
      fb("Weather is a given day; climate is the pattern over many ___.", ["years"], "'the pattern over many years'."),
      fb("The main driver of warming is the burning of ___ fuels.", ["fossil"], "'the burning of fossil fuels'."),
      fb("Climate science is based on basic ___, understood for over a century.", ["physics"], "'it is basic physics'."),
      fb("Beyond tipping points, change becomes self-sustaining and ___.", ["irreversible"], "'self-sustaining and… irreversible'."),
      fb("The countries that emitted most are not suffering the worst ___.", ["effects"], "'suffering the worst effects'."),
      fb("That ___ lies at the heart of the international deadlock.", ["injustice"], "'That injustice lies at the heart'."),
      fb("The cost of clean energy has ___.", ["collapsed"], "'the cost of clean energy has collapsed'."),
      fb("The most important thing is to use your voice and your ___.", ["vote"], "'use your voice, and your vote'."),
    ]),

    ...speakingParts({ p1: "cómo te afecta el cambio climático en tu zona y qué te preocupa más del futuro", p2: "dos imágenes del clima (una sequía con la tierra agrietada y una inundación en una ciudad): compáralas y especula sobre sus causas", p3: "qué deberían hacer los gobiernos frente al clima (subir impuestos a la contaminación, invertir en renovables, prohibir combustibles fósiles, plantar árboles, educar): comentadlo y elegid lo más urgente", p4: "el cambio climático: si es demasiado tarde para actuar, quién debería pagar la transición y si eres optimista o pesimista sobre el futuro" }),

    SUMMARY("Resumen del Día 47", [
      "Condicionales: zero/first/second/third y mixto. Nunca 'would'/'will' en la cláusula IF.",
      "Wishes: wish + past (presente), wish + past perfect (arrepentimiento). Modales de deducción: must/can't/might (+ have + participle en pasado).",
      "Vocabulario del cambio climático. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 48", "Escribe 4 frases con condicionales (2º y 3º) y 3 con modales de deducción sobre el clima. Repasa las flashcards. Mañana: repaso de la pasiva y el estilo indirecto."),
  ],
};

// ───────────────────────── DÍA 48 ─────────────────────────
const DAY48 = {
  title: "Día 48 — Repaso de la voz pasiva y el estilo indirecto · La naturaleza y los animales",
  description: "Repaso integrado de la voz pasiva (todos los tiempos, causativo have something done) y el estilo indirecto (reported speech, verbos introductores). Vocabulario de naturaleza y animales. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Transformar entre activa/pasiva y estilo directo/indirecto con seguridad.",
    summary: "Repaso de pasiva y estilo indirecto; naturaleza/animales; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["olvidar el cambio de tiempo en reported speech.", "'have something done' (causativo).", "verbos introductores (suggest/admit/deny + estructura)."],
    reviewPrompts: ["¿Cómo pasas 'They are building a dam' a pasiva?", "¿'He said me' o 'He told me'?"],
  },
  items: [
    TEXT("🔁 Repaso: condicionales y modales. Hoy la VOZ PASIVA y el ESTILO INDIRECTO: enfoque impersonal y reportar palabras. Vocabulario: la NATURALEZA y los ANIMALES."),
    GRAMMAR("Repaso de la voz pasiva y el estilo indirecto", `VOZ PASIVA (be + participio): The forest is protected / was destroyed / has been cleared / is being replanted / will be saved / must be protected. Agente con 'by' solo si es relevante.
· CAUSATIVO: have/get something done (encargar): We had the trees planted. I'm getting my roof insulated.
· PASIVA IMPERSONAL: It is said that…; She is thought to be…; He is believed to have left.
ESTILO INDIRECTO (reported speech): al reportar, el tiempo "retrocede" un paso (present→past, will→would, can→could, must→had to). Cambian pronombres y expresiones de tiempo (now→then, tomorrow→the next day, this→that).
· say vs tell: say (something) / tell someone (something). ❌ He said me → ✅ He told me / He said to me.
· PREGUNTAS reportadas: sin inversión, con if/whether o wh-: She asked if I was ready. (❌ asked was I ready)
· VERBOS INTRODUCTORES: suggest doing, admit doing, deny doing, offer to do, promise to do, warn (someone) not to do, remind someone to do, accuse someone of doing.
⚠️ Estructura correcta de cada verbo introductor.`),
    WARN("Errores típicos del hispanohablante", "· ❌ He said me the truth → ✅ He told me the truth.\n· ❌ She asked me where do I live → ✅ She asked me where I lived (sin inversión).\n· ❌ He suggested me to go → ✅ He suggested (that I) going / He suggested going.\n· Causativo: 'I cut my hair' (yo mismo) vs 'I had my hair cut' (me lo cortaron)."),
    grammarEx("Use of English — Pasiva y estilo indirecto", "Transforma o completa.", [
      mc("Active: 'They are building a new dam.' Passive:", ["A new dam is built.", "A new dam is being built.", "A new dam has built."], 1, "presente continuo pasivo."),
      fb("Direct: 'I will help you.' → He promised ___ help me.", ["to"], "promise to do."),
      mc("Reported: She asked ___ .", ["where did I live", "where I lived", "where do I live"], 1, "sin inversión: where I lived."),
      fb("We didn't paint the house ourselves; we ___ (have) it painted.", ["had"], "causativo: had it painted."),
      fb("Direct: 'It was me, I broke it.' → He ___ (admit) breaking it.", ["admitted"], "admit + -ing."),
      mc("It ___ that the tiger is nearly extinct in the wild.", ["is said", "says", "is saying"], 0, "pasiva impersonal: It is said."),
      fb("Direct: 'Don't touch the plants!' → The guide warned us ___ touch the plants.", ["not to"], "warn (sb) not to do."),
    ]),
    GRAMMAR("Vocabulario del día — La naturaleza y los animales", "Léxico de naturaleza y fauna (B2)."),
    deck("B2 S10D48 — Naturaleza y animales", [
      ["wildlife", "fauna / vida salvaje", "The reserve protects local wildlife.", "sustantivo", "ˈwaɪldlaɪf"],
      ["species", "especie", "Thousands of species are at risk.", "sustantivo", "ˈspiːʃiːz"],
      ["habitat", "hábitat", "Their natural habitat is shrinking.", "sustantivo", "ˈhæbɪtæt"],
      ["extinct", "extinto/a", "The dodo became extinct long ago.", "adjetivo", "ɪkˈstɪŋkt"],
      ["ecosystem", "ecosistema", "A forest is a complex ecosystem.", "sustantivo", "ˈiːkəʊsɪstəm"],
      ["preserve", "preservar / conservar", "We must preserve these forests.", "verbo", "prɪˈzɜːv"],
      ["biodiversity", "biodiversidad", "Rainforests have huge biodiversity.", "sustantivo", "ˌbaɪəʊdaɪˈvɜːsəti"],
      ["predator", "depredador", "Wolves are top predators.", "sustantivo", "ˈpredətə"],
      ["thrive", "prosperar / florecer", "Wildlife thrives in the reserve.", "verbo", "θraɪv"],
      ["rewilding", "renaturalización", "Rewilding brings species back.", "sustantivo", "ˌriːˈwaɪldɪŋ"],
    ]),
    vocabEx("Vocabulario — La naturaleza y los animales", "Elige la opción correcta.", [
      mc("The natural home of an animal is its ___.", ["habitat", "predator", "species"], 0, "habitat."),
      mc("A community of living things and their environment is an ___.", ["ecosystem", "extinct", "wildlife"], 0, "ecosystem."),
      mc("The variety of living things in an area is its ___.", ["biodiversity", "predator", "habitat"], 0, "biodiversity."),
      mc("An animal that hunts others for food is a ___.", ["predator", "species", "habitat"], 0, "predator."),
      mc("To grow strongly and do well is to ___.", ["thrive", "preserve", "prey"], 0, "thrive."),
      mc("When no members of a species are left alive, it is ___.", ["extinct", "endangered", "wild"], 0, "extinct."),
    ]),

    ...uoe({
      p1: {
        title: "Bringing the wild back",
        text: "For most of the last century, conservation meant, above all, protection: fencing off wild places and keeping human beings (1)___. In recent years, however, a bolder and more hopeful idea has begun to take (2)___. Known as 'rewilding', it aims not merely to preserve what remains but to restore what has been lost — to let nature, given (3)___ chance and the space, heal itself. The results, in places where it has been tried, have been (4)___ remarkable. When key species, especially large predators, are reintroduced, they can transform an entire landscape. The most famous example is the return of wolves to a great national park, where their presence, by controlling the numbers of grazing animals, allowed forests to regrow, rivers to change their course, and (5)___ of other species to return. What such experiments reveal is how deeply interconnected nature is: remove one species, and the effects ripple out in ways no one (6)___ have predicted; restore it, and the whole system can slowly come back to life. Rewilding is not without its critics or its difficulties, and it is (7)___ means a solution to every problem. But it offers something that conventional conservation, for all its value, often lacks: not just the prevention of further loss, but the genuine possibility of (8)___ what was thought to be gone forever.",
        q: [
          mc("(1)", ["out", "away", "off", "back"], 0, "'keeping human beings out'."),
          mc("(2)", ["hold", "root", "shape", "place"], 0, "'begun to take hold'."),
          mc("(3)", ["a", "the", "some", "one"], 0, "'given a chance'."),
          mc("(4)", ["often", "usually", "sometimes", "mostly"], 0, "'have often been remarkable'."),
          mc("(5)", ["dozens", "many", "lots", "plenty"], 0, "'dozens of other species'."),
          mc("(6)", ["could", "would", "should", "might"], 0, "'no one could have predicted'."),
          mc("(7)", ["by no", "not", "in no", "by any"], 0, "'by no means a solution'."),
          mc("(8)", ["recovering", "restoring", "returning", "renewing"], 0, "'recovering what was thought to be gone'."),
        ],
      },
      p2: {
        title: "The silence of the forests",
        text: "Anyone who has spent time in a tropical rainforest will tell you that the first thing that strikes you is the noise. The forest is (1)___ alive with sound: the calls of birds, the buzz of insects, the cries of unseen creatures in the canopy. This wall of sound is (2)___ more than mere background; it is, in effect, the sound of biodiversity itself, of countless species going about their lives. Which is why scientists have recently begun to (3)___ use of it in a surprising way. By placing recording devices deep in the forest and analysing the sounds they capture, researchers can now measure the health of an ecosystem (4)___ ever setting eyes on the creatures within it. A healthy forest is a noisy one, rich in a vast variety of different sounds. A damaged or dying forest, (5)___ contrast, grows quieter, its chorus of life thinning out as species disappear. The most disturbing findings come from forests that (6)___ been logged or degraded. To the casual visitor they may still look green and lush, but their soundscapes tell a different, sadder story. The birds and animals that once filled them with sound have gone, leaving a green but strangely silent shell. It is a haunting thought: that a forest can die (7)___ the inside while still appearing, to the untrained eye, perfectly (8)___.",
        q: [
          fb("(1)", ["utterly", "completely", "totally"], "'utterly alive with sound'."),
          fb("(2)", ["much", "far"], "'much more than mere background'."),
          fb("(3)", ["make"], "'to make use of it'."),
          fb("(4)", ["without"], "'without ever setting eyes on'."),
          fb("(5)", ["by"], "'by contrast'."),
          fb("(6)", ["have"], "'forests that have been logged'."),
          fb("(7)", ["from"], "'die from the inside'."),
          fb("(8)", ["alive", "healthy", "fine"], "'perfectly alive/healthy'."),
        ],
      },
      p3: {
        title: "The importance of the unloved",
        text: "When we think of endangered wildlife, we tend to picture the (1)___ and the beautiful: the tiger, the panda, the elephant. These 'charismatic' animals dominate conservation campaigns for an obvious (2)___ — they move us, and move us to give money. Yet this focus on a handful of appealing creatures conceals an important and uncomfortable truth. The species most (3)___ to the health of an ecosystem are very often not the large and lovable ones at all, but the small, the humble and the frankly unattractive. Insects, in particular, though few people find them (4)___, are absolutely essential. They pollinate our crops, recycle waste, enrich the soil and form the (5)___ foundation of the food chains on which everything else, including us, depends. Their catastrophic recent decline, largely unnoticed by a public transfixed by more glamorous animals, may prove far more (6)___ than the loss of any tiger. The lesson is a humbling one. In nature, importance and appeal are quite (7)___ things. A world could, at a push, survive the loss of its pandas; it could not, for very long, survive the loss of its insects. If we are to protect the natural world (8)___, we must learn to value not only the beautiful, but the essential.",
        items: [
          { root: "drama", accepted: ["dramatic"], hint: "'the dramatic and the beautiful' → dramatic." },
          { root: "reason", accepted: ["reason"], hint: "'an obvious reason' (sustantivo)." },
          { root: "vital", accepted: ["vital"], hint: "'most vital to the health' (adjetivo)." },
          { root: "appeal", accepted: ["appealing"], hint: "'find them appealing' → appealing." },
          { root: "base", accepted: ["basic"], hint: "'the basic foundation' → basic." },
          { root: "consequence", accepted: ["consequential"], hint: "'far more consequential' → consequential." },
          { root: "differ", accepted: ["different"], hint: "'quite different things' → different." },
          { root: "effect", accepted: ["effectively"], hint: "'protect… effectively' → effectively." },
        ],
      },
      p4: {
        title: "Transformaciones — pasiva y estilo indirecto",
        items: [
          { s1: "Someone has cleared this ancient forest.", key: "BEEN", s2: "This ancient forest ___ .", accepted: ["has been cleared"], explanation: "present perfect pasivo." },
          { s1: "'I saw a wolf yesterday,' she said.", key: "SEEN", s2: "She said she ___ a wolf the day before.", accepted: ["had seen"], explanation: "reported: past→past perfect." },
          { s1: "A local firm is going to build the reserve.", key: "BUILT", s2: "The reserve ___ by a local firm.", accepted: ["is going to be built"], explanation: "going to pasivo." },
          { s1: "'Don't feed the animals,' the ranger told us.", key: "NOT", s2: "The ranger told us ___ the animals.", accepted: ["not to feed"], explanation: "tell sb not to do." },
          { s1: "We paid a company to plant the trees for us.", key: "HAD", s2: "We ___ the trees planted.", accepted: ["had"], explanation: "causativo: had the trees planted." },
          { s1: "People believe the species is extinct.", key: "BELIEVED", s2: "The species ___ extinct.", accepted: ["is believed to be"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The beavers that came home",
        text: "For four hundred years, there were no beavers in Britain. Hunted to extinction for their fur and for a substance from their bodies once prized in medicine, the last of them had vanished from the country's rivers by the sixteenth century. For most people, if they thought about beavers at all, they were creatures of storybooks and foreign lands, not part of the British landscape. So when, a few years ago, beavers began mysteriously to reappear on a river in the west of England, the discovery caused a considerable stir.\n\nNobody was entirely sure how they had got there. The most likely explanation was that they had either escaped from a private collection or been released illegally by enthusiasts impatient with the slow pace of official reintroduction schemes. The authorities' first instinct, predictably, was to remove them. Beavers, some feared, would damage farmland, block rivers, and cause flooding; they were, in the strict legal sense, an unauthorised presence. Plans were drawn up to trap the animals and take them into captivity.\n\nWhat followed was a remarkable public campaign to let them stay. Local people, who had grown fond of their new neighbours, protested; scientists argued that the beavers should be studied rather than removed; and eventually, in an unusual decision, the authorities agreed to a compromise. The beavers would be allowed to remain, at least for a trial period, while researchers monitored their effect on the surrounding landscape. It was, in effect, an accidental experiment in rewilding, and its results would be watched closely.\n\nThose results, when they came, astonished even the beavers' supporters. Far from causing the feared damage, the animals transformed their stretch of river for the better in ways nobody had fully anticipated. The dams they built slowed the flow of water, which, contrary to expectation, actually reduced flooding downstream by holding back water during heavy rain. The pools that formed behind their dams filled with fish, insects and birds; water quality improved as the dams trapped sediment and pollution; and a once-ordinary river became a thriving haven for wildlife. The beavers, it turned out, were not a problem to be managed but, in the words of one scientist, 'ecosystem engineers' whose activities benefited countless other species.\n\nThe story of the returning beavers has since become something of a symbol. It is a reminder that nature, given the chance, has an extraordinary capacity to repair itself, and often knows better than we do how a healthy landscape should work. For centuries, we assumed that managing the natural world meant controlling it, imposing our own order upon it. The beavers suggest a humbler and perhaps wiser approach: that sometimes the best thing we can do for nature is simply to step back, let it return, and allow it to get on with the work it has been doing, without our help, for millions of years.",
        q: [
          mc("Why had beavers disappeared from Britain?", ["Disease.", "They were hunted to extinction for fur and medicine.", "Climate change.", "They migrated."], 1, "'Hunted to extinction for their fur and for a substance… once prized in medicine'."),
          mc("How did the beavers probably return?", ["Natural migration.", "They escaped or were released illegally.", "An official scheme.", "Nobody cared."], 1, "'either escaped from a private collection or been released illegally'."),
          mc("What was the authorities' first instinct?", ["To protect them.", "To remove them.", "To study them.", "To ignore them."], 1, "'The authorities' first instinct… was to remove them'."),
          mc("What effect did the beavers' dams have on flooding?", ["They increased it.", "They reduced it by holding back water.", "No effect.", "They caused droughts."], 1, "'actually reduced flooding downstream by holding back water'."),
          mc("What did one scientist call the beavers?", ["Pests.", "'Ecosystem engineers'.", "Tourists.", "Predators."], 1, "'in the words of one scientist, \"ecosystem engineers\"'."),
          mc("What wider lesson does the story suggest?", ["We must control nature.", "Sometimes the best thing is to step back and let nature return.", "Beavers are dangerous.", "Rewilding always fails."], 1, "'the best thing we can do for nature is simply to step back'."),
        ],
      },
      p6: {
        title: "Why we need wild places",
        text: "In an age when most of humanity lives in cities, the wild can seem an irrelevance, a luxury for the privileged few who can afford to visit it. (1)___ Yet a growing body of research suggests that our need for wild nature is not a luxury at all, but something close to a biological necessity.\n\nHuman beings, after all, evolved over millions of years in natural surroundings. (2)___ Our minds and bodies were shaped by forests, rivers and open skies, not by concrete, screens and artificial light.\n\nIt should perhaps not surprise us, then, that contact with nature appears to be genuinely good for us. (3)___ Study after study has found that time spent in green spaces reduces stress, lifts mood, and even speeds recovery from illness.\n\nThe implications of this go well beyond individual wellbeing. (4)___ If nature is a genuine human need, then access to it becomes not a private pleasure but a question of public health, and even of justice.\n\nThere is a deeper point here too. (5)___ Perhaps we protect wild places not only for the sake of the creatures that live in them, but for the sake of something essential in ourselves. (6)___ A world without wilderness would be poorer not only in wildlife, but in the human spirit.",
        options: [
          "It is easy to dismiss nature as something we have outgrown.",     // A -> gap 1
          "We are, in a very real sense, creatures of the wild.",          // B -> gap 2
          "The evidence for nature's benefits is now overwhelming.",        // C -> gap 3
          "This turns a personal matter into a social one.",               // D -> gap 4
          "What we save out there, we may also be saving within.",         // E -> gap 5
          "Something in us would be diminished by its loss.",              // F -> gap 6
          "Human beings have no real need for the natural world.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: es fácil descartar la naturaleza."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: somos criaturas de lo salvaje."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la evidencia es abrumadora."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: lo personal se vuelve social."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: lo que salvamos fuera lo salvamos dentro."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: algo en nosotros se empobrecería."),
        ],
      },
      p7: {
        title: "Four people talk about their connection to nature",
        text: "Read what four people say about nature and wildlife.\n\nA) NADIA: I volunteer with a local rewilding project, and it's changed how I see everything. We've reintroduced species, let the river run wild, and watched the whole valley come back to life. The lesson I've learned is humility: nature knows how to heal itself far better than we do. Our job is mostly just to get out of the way.\n\nB) TOM: I worry that we only care about the cute animals. Everyone wants to save pandas and tigers, but nobody gives a thought to the insects, which are actually collapsing and which everything else depends on. If we lose them, no amount of saving pandas will matter. We're protecting the wrong things for the wrong reasons.\n\nC) PRIYA: For me it's personal, about mental health. When I'm anxious or low, an hour in the woods does more for me than anything else. I genuinely believe we're not built for a life of concrete and screens, and that a lot of modern unhappiness comes from being cut off from the natural world we evolved in.\n\nD) SAM: I'm a farmer, so I see this differently from most environmentalists. I love wildlife, but I also have to make a living from the land, and the two don't always sit easily together. I get frustrated by people who romanticise nature from the city and have no idea what it costs those of us who actually work with it.",
        q: [
          mc("Who volunteers with a rewilding project?", ["A", "B", "C", "D"], 0, "Nadia: 'I volunteer with a local rewilding project'."),
          mc("Who worries we only care about 'cute' animals?", ["A", "B", "C", "D"], 1, "Tom: 'we only care about the cute animals'."),
          mc("Who values nature mainly for mental health?", ["A", "B", "C", "D"], 2, "Priya: 'it's personal, about mental health'."),
          mc("Who sees the issue from a farmer's point of view?", ["A", "B", "C", "D"], 3, "Sam: 'I'm a farmer'."),
          mc("Who says our main job is to 'get out of the way'?", ["A", "B", "C", "D"], 0, "Nadia: 'get out of the way'."),
          mc("Who warns that insects are collapsing?", ["A", "B", "C", "D"], 1, "Tom: 'the insects… are actually collapsing'."),
          mc("Who thinks modern unhappiness comes from being cut off from nature?", ["A", "B", "C", "D"], 2, "Priya: 'cut off from the natural world we evolved in'."),
          mc("Who is frustrated by people who 'romanticise nature from the city'?", ["A", "B", "C", "D"], 3, "Sam: 'romanticise nature from the city'."),
          mc("Who has learned 'humility' from nature?", ["A", "B", "C", "D"], 0, "Nadia: 'The lesson I've learned is humility'."),
          mc("Who says we're 'protecting the wrong things for the wrong reasons'?", ["A", "B", "C", "D"], 1, "Tom: 'protecting the wrong things for the wrong reasons'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Protecting endangered animals should be a top priority for governments.'\nComenta estos dos aspectos y añade uno propio:\n1. the cost (el coste)\n2. the loss of species forever (la pérdida de especies)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RESEÑA de un documental sobre la naturaleza que hayas visto: descríbelo y di si lo recomiendas.\n· ARTÍCULO: 'The animal I would most want to save' — explica por qué y cómo.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de una experiencia con la naturaleza (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué aprendió. Sobra una opción.\nA) that small, unglamorous creatures are the most important\nB) that nature can heal itself if left alone\nC) that being in nature improved their wellbeing\nD) that human activity had done more damage than they realised\nE) that protecting nature and making a living can conflict\nF) that a single species can transform a whole landscape", "This is Part Three. You will hear five people talking about an experience with nature. Speaker One: I spent a summer helping on a rewilding project. We basically did nothing — just took down the fences and let it be. Within two years the valley was unrecognisable, full of life. It taught me that nature doesn't need us to manage it; it needs us to leave it alone. Speaker Two: I used to think saving wildlife meant saving big animals. Then I read about the collapse of insect populations, and it hit me: these tiny things I'd always ignored are what everything else depends on. The unglamorous ones are the ones that really matter. Speaker Three: After a hard year, my doctor suggested walking in the countryside every day. I was sceptical, but honestly, it did more for my anxiety than anything else I'd tried. I feel calmer and happier just from being among trees. Speaker Four: I run a small farm, and I really do care about wildlife. But there's a tension people don't understand. Leaving land wild sounds lovely until it's your income. Loving nature and living off the land don't always fit together neatly. Speaker Five: We reintroduced beavers to our river, almost as an experiment. The change was incredible — one species, and suddenly there were fish, birds, cleaner water, less flooding. I'd never realised how much a single animal could reshape an entire place.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 1, "B: 'let it be… nature doesn't need us to manage it'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 0, "A: 'The unglamorous ones… really matter'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'did more for my anxiety… calmer and happier'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 4, "E: 'Loving nature and living off the land don't always fit'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 5, "F: 'one species… reshape an entire place'."),
    ]),

    ...speakingParts({ p1: "qué animal o lugar natural te gusta más y si pasas tiempo en la naturaleza", p2: "dos escenas de naturaleza (un bosque protegido lleno de vida y un hábitat destruido por la tala): compáralas y especula", p3: "cómo proteger mejor la fauna (crear reservas, prohibir la caza, reintroducir especies, educar, apoyar a los agricultores): comentadlo y elegid lo más eficaz", p4: "la naturaleza: si deberíamos priorizar salvar animales, si valoramos las especies equivocadas y qué nos aporta el contacto con lo salvaje" }),

    SUMMARY("Resumen del Día 48", [
      "Pasiva: be + participio en todos los tiempos; causativo have/get sth done; pasiva impersonal (It is said that…).",
      "Estilo indirecto: retroceso de tiempos, say/tell, preguntas sin inversión, verbos introductores (suggest/admit/warn…).",
      "Vocabulario de naturaleza y animales. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 49", "Convierte 5 frases activas en pasivas y reporta 3 frases en estilo indirecto. Repasa las flashcards. Mañana: repaso de relativas, gerundios/infinitivos y conectores."),
  ],
};

// ───────────────────────── DÍA 49 ─────────────────────────
const DAY49 = {
  title: "Día 49 — Repaso de relativas, gerundios/infinitivos y conectores · La energía y la sostenibilidad",
  description: "Repaso integrado de oraciones de relativo (defining/non-defining), gerundios e infinitivos y conectores del discurso. Vocabulario de energía y sostenibilidad. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Unir ideas con relativas, patrones verbales y conectores con fluidez.",
    summary: "Repaso de relativas/gerundios-infinitivos/conectores; energía/sostenibilidad; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["coma en relativas especificativas.", "gerundio vs infinitivo (stop/remember/try).", "conectores mal (despite + verbo)."],
    reviewPrompts: ["¿'The house, which I bought, is old' es especificativa? ¿Lleva coma?", "¿'stop to smoke' o 'stop smoking'?"],
  },
  items: [
    TEXT("🔁 Repaso: pasiva y estilo indirecto. Hoy las RELATIVAS, los GERUNDIOS/INFINITIVOS y los CONECTORES: cómo unir y matizar ideas. Vocabulario: la ENERGÍA y la SOSTENIBILIDAD."),
    GRAMMAR("Repaso de relativas, gerundios/infinitivos y conectores", `RELATIVAS:
· ESPECIFICATIVAS (definen; sin comas): The man who lives here… / The book that I read… (puedes omitir el relativo si es objeto: The book I read).
· EXPLICATIVAS (info extra; con comas; NO 'that'): My father, who is 70, still works. London, which is huge, …
· Relativos: who (personas), which (cosas), that (ambas, solo especificativas), whose (posesión), where (lugar), when (tiempo).
GERUNDIO vs INFINITIVO:
· + gerundio: enjoy, avoid, mind, suggest, finish, keep, imagine, can't stand, look forward to.
· + infinitivo: want, hope, decide, offer, promise, refuse, manage, afford, agree.
· CAMBIAN de significado: stop doing (dejar de) vs stop to do (parar para); remember doing (recordar algo hecho) vs remember to do (acordarse de hacer); try doing (probar) vs try to do (intentar).
CONECTORES: although/though/even though + frase; despite/in spite of + -ing/sustantivo; however/nevertheless (punto y coma); because vs because of; so that (finalidad); therefore/consequently (resultado).
⚠️ ❌ Despite of the rain → ✅ Despite the rain / In spite of the rain. ❌ Although the rain → ✅ Although it rained.`),
    WARN("Errores típicos del hispanohablante", "· ❌ My mother that is a doctor… → ✅ My mother, who is a doctor,… (explicativa: coma + who).\n· ❌ Despite of / In spite → ✅ Despite / In spite of.\n· ❌ I enjoy to read → ✅ I enjoy reading.\n· 'stop to rest' (parar para descansar) ≠ 'stop resting' (dejar de descansar)."),
    grammarEx("Use of English — Relativas, gerundios/infinitivos y conectores", "Elige o completa.", [
      mc("The scientist ___ discovered it won a prize.", ["what", "who", "which"], 1, "personas → who."),
      mc("My home town, ___ is by the sea, relies on tourism.", ["that", "which", "who"], 1, "explicativa → which (nunca that)."),
      fb("We can't afford ___ (waste) energy. (patrón verbal)", ["to waste"], "afford + to."),
      fb("I really enjoy ___ (learn) about renewable energy. (patrón verbal)", ["learning"], "enjoy + -ing."),
      mc("___ the high cost, they installed solar panels.", ["Although", "Despite", "However"], 1, "Despite + sustantivo."),
      mc("It was cloudy; ___, the solar panels still worked.", ["despite", "although", "nevertheless"], 2, "nevertheless (punto y coma)."),
      fb("Remember ___ (switch) off the lights when you leave. (acordarse de hacer)", ["to switch"], "remember to do (futuro)."),
    ]),
    GRAMMAR("Vocabulario del día — La energía y la sostenibilidad", "Léxico de energía (B2)."),
    deck("B2 S10D49 — Energía y sostenibilidad", [
      ["solar power", "energía solar", "Solar power is now very cheap.", "sustantivo", "ˈsəʊlə ˌpaʊə"],
      ["wind farm", "parque eólico", "A new wind farm opened offshore.", "sustantivo", "ˈwɪnd fɑːm"],
      ["grid", "red eléctrica", "The wind farm feeds the national grid.", "sustantivo", "ɡrɪd"],
      ["energy-efficient", "eficiente energéticamente", "We bought energy-efficient bulbs.", "adjetivo", "ˈenədʒi ɪˌfɪʃnt"],
      ["insulation", "aislamiento", "Good insulation cuts heating bills.", "sustantivo", "ˌɪnsjuˈleɪʃn"],
      ["consumption", "consumo", "We must cut energy consumption.", "sustantivo", "kənˈsʌmpʃn"],
      ["fossil-free", "sin combustibles fósiles", "They aim for a fossil-free future.", "adjetivo", "ˈfɒsl friː"],
      ["off-grid", "desconectado de la red", "Their cabin is completely off-grid.", "adjetivo", "ˌɒf ˈɡrɪd"],
      ["retrofit", "reacondicionar", "They retrofitted the old house.", "verbo", "ˈretrəʊfɪt"],
      ["nuclear", "nuclear", "Nuclear power is low-carbon but divisive.", "adjetivo", "ˈnjuːkliə"],
    ]),
    vocabEx("Vocabulario — La energía y la sostenibilidad", "Elige la opción correcta.", [
      mc("Electricity generated from the sun is ___.", ["solar power", "insulation", "the grid"], 0, "solar power."),
      mc("The network that carries electricity to homes is the ___.", ["grid", "wind farm", "consumption"], 0, "grid."),
      mc("Material that stops heat escaping from a building is ___.", ["insulation", "consumption", "the grid"], 0, "insulation."),
      mc("The amount of energy you use is your energy ___.", ["consumption", "insulation", "grid"], 0, "consumption."),
      mc("A house not connected to the electricity network is ___.", ["off-grid", "energy-efficient", "fossil-free"], 0, "off-grid."),
      mc("A device that uses little energy for its output is ___.", ["energy-efficient", "off-grid", "nuclear"], 0, "energy-efficient."),
    ]),

    ...uoe({
      p1: {
        title: "The cheapest power in history",
        text: "Something remarkable has happened to the cost of clean energy, and its consequences are only beginning to be understood. A decade ago, electricity generated from the sun and the wind was expensive — a worthy but costly choice for those (1)___ could afford to pay a premium for their principles. Today, in much of the world, it is the (2)___ way to generate electricity ever devised, cheaper than coal, cheaper than gas, cheaper than anything that has come (3)___ it. This transformation, largely unnoticed by the general public, may prove to be one of the most (4)___ developments of our time. It changes the entire economics of the energy transition. For decades, the argument against clean energy was that, (5)___ desirable, it was simply too expensive to adopt at scale. That argument has now collapsed. The clean choice has become the cheap choice, which means that the shift away from fossil fuels is being driven not by (6)___ alone but by hard economic logic. Money, in this case, is flowing in the same direction as the planet's interests — a rare and hopeful alignment. Enormous obstacles remain, and the transition is still far too (7)___. But for the first time, the fundamental economics are working (8)___ us rather than against us. That, in the long struggle to save the climate, may turn out to have been the decisive turning point.",
        q: [
          mc("(1)", ["who", "which", "that", "whom"], 0, "'those who could afford'."),
          mc("(2)", ["cheapest", "cheaper", "cheap", "low"], 0, "'the cheapest way… ever devised'."),
          mc("(3)", ["before", "after", "past", "since"], 0, "'anything that has come before it'."),
          mc("(4)", ["significant", "important", "major", "big"], 0, "'the most significant developments'."),
          mc("(5)", ["however", "although", "despite", "while"], 0, "'however desirable'."),
          mc("(6)", ["idealism", "principle", "hope", "belief"], 0, "'not by idealism alone'."),
          mc("(7)", ["slow", "late", "small", "weak"], 0, "'still far too slow'."),
          mc("(8)", ["for", "with", "by", "to"], 0, "'working for us'."),
        ],
      },
      p2: {
        title: "The house that needs no heating",
        text: "In a quiet street in northern Europe stands a house that, (1)___ the freezing winters of its region, requires almost no heating at all. It contains no boiler, no radiators, no fireplace. And yet, even (2)___ the coldest nights, its rooms remain perfectly warm and comfortable. Its secret lies not in any exotic technology but in the (3)___ care with which it has been designed and built. The walls are extraordinarily thick and superbly insulated; the windows are triple-glazed; and the whole structure is sealed so tightly that almost no heat can escape. The little warmth that is needed comes (4)___ from the sun, from the appliances, and even from the bodies of the people living inside. Houses built to this exacting standard, known as 'passive houses', use as little as a tenth of the energy of a conventional home. The implications are considerable. Heating our buildings accounts for a huge (5)___ of global energy use and emissions. If all our homes were built, or retrofitted, to such standards, the savings (6)___ be enormous. The technology, remarkably, already exists; there is nothing to be invented. What is lacking is (7)___ the will and the regulation to make such building the norm rather than the rare exception. The passive house stands as a quiet reproach — a demonstration that a comfortable, low-energy future is not a distant dream but something we could (8)___ build today, if only we chose to.",
        q: [
          fb("(1)", ["despite"], "'despite the freezing winters'."),
          fb("(2)", ["on"], "'even on the coldest nights'."),
          fb("(3)", ["extraordinary", "great", "meticulous"], "'the extraordinary/meticulous care'."),
          fb("(4)", ["from"], "'comes from the sun'."),
          fb("(5)", ["proportion", "amount", "share"], "'a huge proportion of energy use'."),
          fb("(6)", ["would"], "'the savings would be enormous'."),
          fb("(7)", ["simply", "merely", "only"], "'lacking is simply the will'."),
          fb("(8)", ["easily"], "'we could easily build today'."),
        ],
      },
      p3: {
        title: "The nuclear question",
        text: "Few subjects divide environmentalists as (1)___ as nuclear power. To its supporters, it is an obvious and essential part of the solution to climate change: a source of vast amounts of low-carbon electricity, (2)___ available day and night, regardless of whether the sun shines or the wind blows. To its opponents, it is a dangerous (3)___ — expensive, slow to build, and burdened with the twin problems of catastrophic accidents and radioactive waste that remains (4)___ for thousands of years. Both sides, it must be said, make (5)___ arguments. Nuclear power is indeed low-carbon, and the historical death toll from its accidents, contrary to popular (6)___, is remarkably low compared with the pollution from fossil fuels. Yet its opponents are right that new plants are ruinously expensive and take a decade or more to build — time the climate may not have. The (7)___ truth is that there is no perfect source of energy, only a series of difficult trade-offs. Every choice carries costs. The (8)___ debate, then, is not about finding a flawless solution, which does not exist, but about weighing imperfect options against one another, honestly and without illusion, in the race to leave fossil fuels behind.",
        items: [
          { root: "sharp", accepted: ["sharply"], hint: "'divide… as sharply' → sharply." },
          { root: "reliable", accepted: ["reliably"], hint: "'reliably available' → reliably." },
          { root: "distract", accepted: ["distraction"], hint: "'a dangerous distraction' → distraction." },
          { root: "danger", accepted: ["dangerous"], hint: "'remains dangerous' → dangerous." },
          { root: "power", accepted: ["powerful"], hint: "'make powerful arguments' → powerful." },
          { root: "believe", accepted: ["belief"], hint: "'contrary to popular belief' → belief." },
          { root: "comfort", accepted: ["uncomfortable"], hint: "'The uncomfortable truth' → uncomfortable." },
          { root: "real", accepted: ["real"], hint: "'The real debate' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — relativas, patrones y conectores",
        items: [
          { s1: "It rained heavily, but we still installed the panels.", key: "DESPITE", s2: "___ the heavy rain, we installed the panels.", accepted: ["Despite"], explanation: "Despite + sustantivo." },
          { s1: "The engineer designed our house. She won an award.", key: "WHO", s2: "The engineer, ___ our house, won an award.", accepted: ["who designed"], explanation: "relativa explicativa con who." },
          { s1: "I don't want to waste any more energy.", key: "AVOID", s2: "I want to ___ any more energy.", accepted: ["avoid wasting"], explanation: "avoid + -ing." },
          { s1: "We reduced our bills by insulating the roof. That was our goal.", key: "SO", s2: "We insulated the roof ___ reduce our bills.", accepted: ["so as to", "in order to"], explanation: "finalidad: so as to / in order to." },
          { s1: "She managed to cut her consumption in half.", key: "SUCCEEDED", s2: "She ___ her consumption in half.", accepted: ["succeeded in cutting"], explanation: "succeed in + -ing." },
          { s1: "Please don't forget to turn off the heating.", key: "REMEMBER", s2: "Please ___ the heating.", accepted: ["remember to turn off"], explanation: "remember to do." },
        ],
      },
      p5: {
        title: "The island that runs on wind",
        text: "In the far north, battered by the storms of the Atlantic, lies a small and remote island that has become, quite unexpectedly, a symbol of the world's energy future. For most of its history, the island's few hundred inhabitants depended entirely on diesel fuel, shipped in at great cost and expense across rough and often dangerous seas. Electricity was unreliable and eye-wateringly expensive; a single storm could cut the island off from its fuel supply for days. The islanders lived, in effect, at the mercy of the weather and the shipping companies, with little control over the power on which their modern lives depended.\n\nThen, a group of the islanders, tired of this dependence, had an idea that many at first dismissed as fanciful. Their island, they pointed out, might be poor in most things, but it was extraordinarily rich in one resource above all others: wind. Battered by the elements it certainly was, but that very wind, which made life there so hard, could perhaps be turned to their advantage. Why not, they asked, harness it to generate their own electricity, and free themselves, once and for all, from their costly and unreliable dependence on imported diesel?\n\nThe project that followed was not an easy one. Raising the money was a struggle; the technical challenges, on so exposed a site, were formidable; and there was no shortage of sceptics predicting failure. But the islanders, who had formed a community-owned cooperative to run the scheme, proved determined. In time, a cluster of sturdy wind turbines rose on the island's windswept hills, feeding electricity into a local grid, with batteries to store power for the calmer days. The effect was transformative. The island now generates almost all of its own electricity from the wind, at a fraction of the old cost.\n\nWhat makes the island's story so widely admired, however, is not merely the technology, which is unremarkable enough, but the way in which it was done. Because the wind farm is owned by the community rather than by a distant corporation, the profits stay on the island, funding local projects and services that would otherwise be unaffordable. The islanders are no longer passive consumers of expensive, imported power, but the active owners and beneficiaries of their own clean energy. Their story has since attracted visitors from around the world, all eager to learn how a small, remote and unremarkable community achieved what so many larger and richer places have failed to do. The lesson they take away is a hopeful one: that the transition to clean energy, so often presented as a burden and a sacrifice, can also be a source of independence, prosperity and pride.",
        q: [
          mc("What did the island depend on for most of its history?", ["Wind.", "Imported diesel fuel.", "Solar power.", "Coal."], 1, "'depended entirely on diesel fuel, shipped in at great cost'."),
          mc("What resource was the island rich in?", ["Oil.", "Wind.", "Sunshine.", "Coal."], 1, "'extraordinarily rich in one resource above all others: wind'."),
          mc("How did the islanders organise the project?", ["A government scheme.", "A community-owned cooperative.", "A foreign corporation.", "A private investor."], 1, "'formed a community-owned cooperative'."),
          mc("What was the effect of the wind farm?", ["Little change.", "The island now generates almost all its own electricity cheaply.", "Higher bills.", "It failed."], 1, "'generates almost all of its own electricity from the wind, at a fraction of the old cost'."),
          mc("Why is the story especially admired?", ["The advanced technology.", "The community owns it, so profits stay on the island.", "It was cheap to build.", "It was government-funded."], 1, "'the profits stay on the island'."),
          mc("What hopeful lesson does the story offer?", ["Clean energy is a burden.", "The transition can bring independence, prosperity and pride.", "Small places can't change.", "Wind is unreliable."], 1, "'a source of independence, prosperity and pride'."),
        ],
      },
      p6: {
        title: "The myth of sacrifice",
        text: "One of the most persistent and damaging ideas about the shift to a sustainable society is that it must involve sacrifice — a grim return to colder homes, smaller lives and general hardship. (1)___ This assumption, that a green future means a poorer one, lies behind much of the resistance to change.\n\nBut is it actually true? (2)___ On closer inspection, the idea that sustainability requires sacrifice turns out to be largely a myth.\n\nConsider what a genuinely sustainable life might look like. (3)___ A well-insulated home is not colder but warmer and cheaper to run; an electric car is not slower but quieter and smoother; a diet with less meat is not merely virtuous but, by most accounts, healthier.\n\nMany of the changes we need to make, in other words, would improve our lives even if climate change did not exist. (4)___ Cleaner air, quieter streets, warmer homes, better health — these are not sacrifices but benefits.\n\nThis is not to pretend that the transition will be painless or that no one will lose out. (5)___ Some industries will shrink, some jobs will vanish, and managing that fairly is a real challenge. (6)___ But the overall picture is far more hopeful than the myth of sacrifice suggests: a sustainable future need not be a poorer one, and could well be richer.",
        options: [
          "The fear of hardship shapes how people vote and behave.",        // A -> gap 1
          "The evidence points in a surprisingly encouraging direction.",   // B -> gap 2
          "Much of it would simply be more pleasant than what we have.",    // C -> gap 3
          "The green choice is often the better choice in every way.",      // D -> gap 4
          "There will be real costs, and they must be faced honestly.",     // E -> gap 5
          "Handled well, the change need not impoverish us at all.",        // F -> gap 6
          "A sustainable society must always mean a harder life.",          // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el miedo a la penuria moldea el voto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la evidencia alienta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: sería más agradable."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: lo verde suele ser mejor."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: habrá costes reales."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: bien gestionado, no nos empobrece."),
        ],
      },
      p7: {
        title: "Four people discuss energy",
        text: "Read what four people say about energy and how we should power our future.\n\nA) NADIA: I'm completely sold on renewables. The cost has collapsed, the technology works, and it's now simply the cheapest option. People who still argue against solar and wind on cost grounds are living in the past. The economics have already won the argument; the rest is just politics catching up.\n\nB) TOM: I think we're kidding ourselves if we rule out nuclear. Renewables are great when the sun shines and the wind blows, but we need reliable, round-the-clock, low-carbon power too, and nuclear provides exactly that. The anti-nuclear instinct is emotional, not rational, and it's costing us dearly in the fight against climate change.\n\nC) PRIYA: For me, the real answer isn't producing more energy at all — it's using far less. We waste staggering amounts. Insulate homes properly, build efficient appliances, design cities people can walk around, and you cut demand enormously. The cleanest, cheapest energy is the energy you never need to use in the first place.\n\nD) SAM: What excites me most is community ownership. Where I live, we set up a local cooperative that owns the wind turbines, and the profits stay here, funding local projects. It's not just about clean power; it's about who controls it and who benefits. Energy can be a tool for local independence, not just a commodity.",
        q: [
          mc("Who argues the economics have already settled the case for renewables?", ["A", "B", "C", "D"], 0, "Nadia: 'The economics have already won the argument'."),
          mc("Who defends the need for nuclear power?", ["A", "B", "C", "D"], 1, "Tom: 'we're kidding ourselves if we rule out nuclear'."),
          mc("Who says the real answer is using far less energy?", ["A", "B", "C", "D"], 2, "Priya: 'the real answer… is using far less'."),
          mc("Who is most excited about community ownership?", ["A", "B", "C", "D"], 3, "Sam: 'What excites me most is community ownership'."),
          mc("Who says the cleanest energy is the energy you never use?", ["A", "B", "C", "D"], 2, "Priya: 'the energy you never need to use'."),
          mc("Who calls the anti-nuclear instinct 'emotional, not rational'?", ["A", "B", "C", "D"], 1, "Tom: 'emotional, not rational'."),
          mc("Who says people arguing against renewables 'live in the past'?", ["A", "B", "C", "D"], 0, "Nadia: 'living in the past'."),
          mc("Who stresses who controls and benefits from energy?", ["A", "B", "C", "D"], 3, "Sam: 'who controls it and who benefits'."),
          mc("Who thinks we waste 'staggering amounts' of energy?", ["A", "B", "C", "D"], 2, "Priya: 'We waste staggering amounts'."),
          mc("Who says renewables need backing up for round-the-clock power?", ["A", "B", "C", "D"], 1, "Tom: 'reliable, round-the-clock, low-carbon power'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Switching to renewable energy should be the world's top priority.'\nComenta estos dos aspectos y añade uno propio:\n1. cost (el coste)\n2. reliability (la fiabilidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· INFORME sobre cómo tu edificio o barrio podría ahorrar energía: analiza y recomienda medidas.\n· ARTÍCULO: 'The energy of the future' — describe cómo crees que produciremos electricidad en 2050.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una ingeniera de energía, Laura Kent (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with an energy engineer called Laura Kent. Interviewer: Laura, what's the single biggest change in energy in your career? Laura: Without question, the collapse in the cost of renewables. When I started, solar was a niche, expensive thing. Now it's the cheapest electricity humanity has ever produced. That one fact has changed everything. Interviewer: So is the transition basically solved? Laura: Far from it. Generating cheap clean power is only half the battle. The hard part now is storage and the grid — how you keep the lights on when the sun sets and the wind drops. That's where the real engineering challenge lies. Interviewer: What about nuclear? Laura: I'm pragmatic. It's low-carbon and reliable, which we need, but it's also slow and expensive to build. I don't think it's the villain some claim, nor the saviour others do. It's one imperfect tool among several. Interviewer: Many people fear renewables can't provide reliable power. Laura: It's a fair concern, but it's increasingly outdated. With better batteries, smarter grids and a good mix of sources, reliability is a solvable problem. It's engineering, not magic. Interviewer: What's the most underrated solution? Laura: Efficiency, easily. The cleanest unit of energy is the one you never use. Insulation, efficient design — unglamorous, but it cuts demand hugely, and nobody gets excited about it. Interviewer: Finally, are you optimistic? Laura: Cautiously, yes. The technology is ready and the economics now help us. What worries me isn't whether we can do it, but whether we'll do it fast enough. Interviewer: Thank you, Laura.", [
      mc("1. What does Laura call the biggest change in her career?", ["Nuclear power.", "The collapse in the cost of renewables.", "Better cars."], 1, "'the collapse in the cost of renewables'."),
      mc("2. Is the transition basically solved?", ["Yes.", "No — storage and the grid are the hard part now.", "Almost."], 1, "'Far from it… storage and the grid'."),
      mc("3. What is her view of nuclear power?", ["The villain.", "One imperfect tool, neither villain nor saviour.", "The saviour."], 1, "'one imperfect tool among several'."),
      mc("4. What does she say about renewables' reliability?", ["It's impossible.", "It's a solvable engineering problem.", "It needs magic."], 1, "'reliability is a solvable problem… engineering, not magic'."),
      mc("5. What is the most underrated solution?", ["Nuclear.", "Efficiency.", "Solar."], 1, "'Efficiency, easily'."),
      mc("6. Why does nobody get excited about efficiency?", ["It's expensive.", "It's unglamorous.", "It doesn't work."], 1, "'unglamorous, but it cuts demand hugely'."),
      mc("7. What worries Laura most?", ["Whether we can do it.", "Whether we'll do it fast enough.", "The cost."], 1, "'whether we'll do it fast enough'."),
    ]),

    ...speakingParts({ p1: "cómo ahorras energía en casa y si tu país usa suficientes energías renovables", p2: "dos formas de producir electricidad (un gran parque eólico y una central de combustibles fósiles): compáralas y especula sobre su impacto", p3: "cómo lograr una energía más limpia (invertir en renovables, usar energía nuclear, aislar edificios, consumir menos, apoyar cooperativas locales): comentadlo y elegid lo mejor", p4: "la energía: si las renovables bastan por sí solas, qué papel debería tener la energía nuclear y si un futuro sostenible significa vivir peor" }),

    SUMMARY("Resumen del Día 49", [
      "Relativas: especificativas (sin comas, admiten that) vs explicativas (con comas, nunca that).",
      "Gerundio vs infinitivo según el verbo; stop/remember/try cambian de significado. Conectores: despite + sustantivo, although + frase.",
      "Vocabulario de energía y sostenibilidad. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 50", "Escribe 4 frases con relativas, 3 con gerundio/infinitivo y 3 con conectores. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 50 ─────────────────────────
const DAY50 = {
  title: "Día 50 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de todas las estructuras clave (tiempos, condicionales, modales, pasiva, estilo indirecto, relativas, patrones verbales, conectores). Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 10.",
  pedagogy: {
    objective: "Consolidar toda la gramática nuclear del B2 antes de la recta final.",
    summary: "Repaso integrado de estructuras; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué estructura te cuesta más?", "Repásala antes de la Semana 11 (estrategias de examen)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 10 del B2. Consolidas TODA la gramática nuclear: tiempos verbales, condicionales, modales, pasiva, estilo indirecto, relativas, gerundios/infinitivos y conectores. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 10", `1) Tiempos: present perfect (since/for) vs past simple; past perfect; futuros (will/going to/present continuous/future continuous/perfect).
2) Condicionales (1º/2º/3º/mixto), wishes (+past / +past perfect), modales de deducción (must/can't/might + have + participle) y de obligación.
3) Pasiva (todos los tiempos, causativo, impersonal) y estilo indirecto (retroceso, say/tell, preguntas, verbos introductores).
4) Relativas (defining/non-defining), gerundio vs infinitivo (stop/remember/try) y conectores (despite/although/however).`),
    grammarEx("Use of English — Repaso mixto de la Semana 10", "Completa o elige.", [
      mc("We ___ here since 2018.", ["live", "have lived", "are living"], 1, "since → present perfect."),
      mc("If we ___ acted sooner, we wouldn't face this now.", ["have", "had", "would have"], 1, "3º/mixto: if + past perfect."),
      fb("The lights are off, so nobody ___ (be) home. (deducción negativa)", ["can be"], "can't be (deducción)."),
      mc("Active→Passive: 'They are cutting the forest.'", ["The forest is cut.", "The forest is being cut.", "The forest has cut."], 1, "presente continuo pasivo."),
      mc("Reported: She asked me ___ .", ["where did I live", "where I lived", "where do I live"], 1, "sin inversión."),
      mc("My mother, ___ is a teacher, loves her job.", ["that", "who", "which"], 1, "explicativa → who."),
      fb("I can't afford ___ (waste) energy. (patrón)", ["to waste"], "afford + to."),
      mc("___ the rain, they finished the wind farm.", ["Although", "Despite", "However"], 1, "Despite + sustantivo."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 10", "Repasa los mazos (medio ambiente, clima, naturaleza/animales, energía)."),
    vocabEx("Vocabulario — Repaso de la Semana 10", "Elige la opción correcta.", [
      mc("Energy that never runs out, like sun or wind:", ["renewable", "endangered", "extinct"], 0, "renewable."),
      mc("A long period with no rain:", ["drought", "flood", "emission"], 0, "drought."),
      mc("The natural home of an animal:", ["habitat", "predator", "grid"], 0, "habitat."),
      mc("The network that delivers electricity:", ["grid", "insulation", "consumption"], 0, "grid."),
      mc("Damage that cannot be undone:", ["irreversible", "renewable", "off-grid"], 0, "irreversible."),
      mc("The variety of living things in an area:", ["biodiversity", "predator", "emission"], 0, "biodiversity."),
      mc("Material that stops heat escaping:", ["insulation", "grid", "consumption"], 0, "insulation."),
      mc("To grow strongly and do well:", ["thrive", "tackle", "emit"], 0, "thrive."),
    ]),

    ...uoe({
      p1: {
        title: "One planet, one chance",
        text: "For as long as human beings have existed, we have treated the Earth as if its resources were (1)___ — as if we could take whatever we wanted, dump whatever we liked, and the planet would simply absorb it all without complaint. For most of history, this assumption did little harm, (2)___ our numbers and our powers were small. But those days are gone. There are now eight billion of us, armed with technologies of a power our ancestors could scarcely have imagined, and the old assumption has become dangerous. We are, for the first time, bumping (3)___ against the limits of what our planet can provide and absorb. The atmosphere, the oceans, the forests and the soil — the great systems on which all life depends — are showing unmistakable signs of strain. What makes this moment so critical is that, (4)___ other species, we cannot simply move on when we have exhausted one home. There is no second Earth waiting for us, no planet B to which we might escape. This one world is all we (5)___, and we are, whether we like it (6)___ not, entirely dependent on its continued health. The challenge of our century, then, is to learn, at last, to live (7)___ our means — to build a civilisation that can thrive not by consuming the planet but by protecting it. It is the hardest task humanity has ever faced, and (8)___ the most important. On its outcome, quite literally, everything depends.",
        q: [
          mc("(1)", ["endless", "infinite", "limitless", "unlimited"], 3, "'as if its resources were unlimited'."),
          mc("(2)", ["because", "as", "since", "for"], 1, "'as our numbers… were small'."),
          mc("(3)", ["up", "into", "against", "on"], 0, "'bumping up against the limits'."),
          mc("(4)", ["unlike", "like", "despite", "beside"], 0, "'unlike other species'."),
          mc("(5)", ["have", "own", "hold", "keep"], 0, "'all we have'."),
          mc("(6)", ["and", "or", "nor", "but"], 1, "'whether we like it or not'."),
          mc("(7)", ["within", "inside", "under", "below"], 0, "'live within our means'."),
          mc("(8)", ["also", "too", "as well", "either"], 0, "'and also the most important'."),
        ],
      },
      p2: {
        title: "The problem with 'someone else'",
        text: "There is a story, often told, about a task that needed doing. Everybody was sure that Somebody would do it. Anybody could have done it, (1)___ in the end Nobody did it, and the task was left undone. It is a silly little tale, but it captures (2)___ a profound truth about why big, shared problems so often go unsolved. When a problem belongs to everyone, it can easily end (3)___ being tackled by no one, each person assuming, quite reasonably, that others will act. Psychologists call this the 'diffusion of responsibility', and it is one of the great obstacles (4)___ collective action. It explains why a crowd can watch an emergency and do nothing, each individual waiting for someone else to step forward. And it explains, in part, our long paralysis in the face of global problems like climate change, (5)___ everyone agrees is serious but for which no one feels personally responsible. The remedy, such as it is, lies in refusing to think this way. The person who says 'it's not my job', however reasonable they sound, is part of the problem. The person who acts, (6)___ though their contribution is small, and (7)___ though others do nothing, breaks the spell. Real change, in the end, begins (8)___ someone decides to stop waiting for somebody else.",
        q: [
          fb("(1)", ["but"], "'Anybody could… but in the end'."),
          fb("(2)", ["perfectly", "exactly", "precisely"], "'captures perfectly a truth'."),
          fb("(3)", ["up"], "'end up being tackled'."),
          fb("(4)", ["to"], "'obstacles to collective action'."),
          fb("(5)", ["which"], "'a problem which everyone agrees is serious'."),
          fb("(6)", ["even"], "'even though their contribution is small'."),
          fb("(7)", ["even"], "'even though others do nothing'."),
          fb("(8)", ["when"], "'begins when someone decides'."),
        ],
      },
      p3: {
        title: "A question of generations",
        text: "There is a (1)___ uncomfortable feature of the climate crisis that is too rarely discussed openly: it is, to a striking degree, a conflict between generations. The people who have (2)___ most from the burning of fossil fuels — the older generations, in the wealthy nations — are, by and large, not the ones who will bear the worst of the (3)___. That burden will fall on the young, and on generations not yet born, who did nothing to cause the problem and had no say in the decisions that created it. There is something deeply (4)___ about this. We are, in effect, borrowing from our children — enjoying the benefits now and passing the bill to those who will come after us, and who cannot (5)___. No previous generation has ever knowingly done such a thing on such a scale. It is little (6)___, then, that it is the young who have led the recent surge of climate activism. They are, quite literally, fighting for their own futures, against decisions made by people who will not live to see the (7)___. Whether the older generations, who still hold most of the power, will find the (8)___ to act decisively on behalf of the young is, perhaps, the deepest moral test of our time.",
        items: [
          { root: "deep", accepted: ["deeply"], hint: "'a deeply uncomfortable feature' → deeply." },
          { root: "benefit", accepted: ["benefited", "benefitted"], hint: "'have benefited most' → benefited." },
          { root: "consequence", accepted: ["consequences"], hint: "'the worst of the consequences' → consequences." },
          { root: "just", accepted: ["unjust"], hint: "'something deeply unjust' → unjust." },
          { root: "object", accepted: ["object"], hint: "'who cannot object' (verbo)." },
          { root: "wonder", accepted: ["wonder"], hint: "'It is little wonder' (sustantivo)." },
          { root: "consequence", accepted: ["consequences"], hint: "'will not live to see the consequences' → consequences." },
          { root: "generous", accepted: ["generosity"], hint: "'find the generosity to act' → generosity." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 10",
        items: [
          { s1: "We started using solar power five years ago.", key: "BEEN", s2: "We ___ solar power for five years.", accepted: ["have been using"], explanation: "present perfect continuous." },
          { s1: "If we don't act now, we will regret it.", key: "UNLESS", s2: "___ we act now, we will regret it.", accepted: ["Unless"], explanation: "unless = if… not." },
          { s1: "People say the reserve is thriving.", key: "SAID", s2: "The reserve ___ thriving.", accepted: ["is said to be"], explanation: "pasiva impersonal." },
          { s1: "'I'll switch to renewables,' she said.", key: "WOULD", s2: "She said she ___ to renewables.", accepted: ["would switch"], explanation: "reported: will→would." },
          { s1: "It rained hard, but the panels still worked.", key: "SPITE", s2: "The panels worked in ___ the heavy rain.", accepted: ["spite of"], explanation: "in spite of + sustantivo." },
          { s1: "The engineer designed it. She won a prize.", key: "WHO", s2: "The engineer, ___ it, won a prize.", accepted: ["who designed"], explanation: "relativa explicativa." },
        ],
      },
      p5: {
        title: "The optimist and the pessimist",
        text: "When it comes to the future of the planet, people tend to fall into two broad camps, which we might call the pessimists and the optimists. The pessimists look at the scale of the crisis, the slowness of our response, and the power of the interests resisting change, and conclude that we are almost certainly doomed. The optimists look at the astonishing progress in clean technology, the growing public awareness, and humanity's long record of solving seemingly impossible problems, and conclude that we will, in the end, pull through. Both camps can marshal impressive evidence, and both, in their different ways, can be dangerous.\n\nThe danger of pessimism is obvious. If we believe the situation is hopeless, we will not bother to act, and our inaction will help to bring about the very catastrophe we fear. Despair, in this sense, is a self-fulfilling prophecy. A person convinced that nothing can be done becomes, however unwillingly, part of the reason that nothing is done. For this reason, unremitting doom-mongering, however well-intentioned, can be as harmful as outright denial. Both lead to the same fatal conclusion: that there is no point in trying.\n\nThe danger of optimism is subtler, but no less real. If we are too confident that everything will work out — that clever people will invent some magical solution, or that things will somehow sort themselves out — we may relax, and fail to make the enormous efforts that are actually required. Complacency, like despair, leads to inaction, though it arrives there by a different road. The optimist who assumes we will be saved may be just as passive as the pessimist who assumes we are doomed.\n\nWhat is needed, then, is neither blind despair nor complacent hope, but something harder and more useful: a clear-eyed determination that holds both the seriousness of the danger and the genuine possibility of success firmly in view at the same time. This attitude has sometimes been called 'active hope' or 'stubborn optimism'. It refuses to pretend the situation is anything other than grave, but equally refuses to give up. It is grounded not in a comfortable belief that everything will be fine, but in a determination to do everything possible to make it so. Whether or not we ultimately succeed, this is surely the only attitude worth having. The pessimist and the optimist, in their different ways, both have an excuse to do nothing. Only the person of active hope has a reason to act.",
        q: [
          mc("What do the pessimists conclude?", ["We will succeed.", "We are almost certainly doomed.", "Nothing is happening.", "The crisis is fake."], 1, "'conclude that we are almost certainly doomed'."),
          mc("Why is despair described as a 'self-fulfilling prophecy'?", ["It's always right.", "Believing it's hopeless makes us not act, causing the catastrophe.", "It never happens.", "It cheers people up."], 1, "'our inaction will help to bring about the very catastrophe we fear'."),
          mc("What is the danger of optimism?", ["It causes panic.", "Complacency leads us to relax and not make the needed efforts.", "It's too sad.", "It denies the science."], 1, "'Complacency, like despair, leads to inaction'."),
          mc("What attitude does the writer recommend?", ["Blind despair.", "Clear-eyed determination that holds both danger and possibility in view.", "Complacent hope.", "Denial."], 1, "'a clear-eyed determination that holds both… firmly in view'."),
          mc("What is 'active hope' grounded in?", ["A belief everything will be fine.", "A determination to do everything possible.", "Luck.", "Fear."], 1, "'a determination to do everything possible to make it so'."),
          mc("Why is active hope 'the only attitude worth having'?", ["It's comfortable.", "Only it gives a reason to act; the others excuse inaction.", "It's popular.", "It's easy."], 1, "'Only the person of active hope has a reason to act'."),
        ],
      },
      p6: {
        title: "The long view",
        text: "It is easy, amid the daily headlines of disaster, to lose all sense of perspective on the environmental crisis. (1)___ We lurch from one alarming story to the next, feeling by turns panicked, guilty and numb.\n\nYet sometimes it helps to step back and take the longest possible view. (2)___ Seen across the whole span of human history, our current predicament is both more serious and, paradoxically, more hopeful than it appears day to day.\n\nMore serious, because we are altering the planet in ways that will echo for thousands of years. (3)___ The choices made in this single century will shape the Earth long after everyone now alive is gone.\n\nBut also more hopeful, because human beings have repeatedly proved capable of extraordinary change. (4)___ We have abolished slavery, cured diseases, and transformed our societies in ways that once seemed utterly impossible.\n\nThere is no law of nature that says we must fail. (5)___ The outcome is not fixed; it depends entirely on what we choose to do. (6)___ And that, in the end, is the most important thing to understand about the crisis: that its ending has not yet been written, and the pen is in our hands.",
        options: [
          "Our attention is pulled from crisis to crisis without rest.",    // A -> gap 1
          "The scale of history puts our moment in a clearer light.",       // B -> gap 2
          "This generation's decisions will outlast it by millennia.",      // C -> gap 3
          "History is full of transformations no one saw coming.",          // D -> gap 4
          "Nothing about our future is written in advance.",                // E -> gap 5
          "How this story ends is still ours to decide.",                   // F -> gap 6
          "Human beings have never once changed their ways.",               // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la atención salta de crisis en crisis."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la historia aclara el momento."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las decisiones durarán milenios."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la historia está llena de cambios inesperados."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nada está escrito."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: cómo acaba lo decidimos nosotros."),
        ],
      },
      p7: {
        title: "Four people on hope and the future",
        text: "Read what four people say about how they feel about the environmental future.\n\nA) NADIA: I choose hope deliberately, as a discipline. Not because I'm sure we'll succeed — I'm not — but because despair guarantees we won't. If I give up, I become part of the problem. So I act as though it matters, because it does, and because that's the only stance that leaves any room for a good outcome.\n\nB) TOM: I'll be honest, I struggle with pessimism. When I look at how slowly we're moving and how powerful the resistance is, it's hard not to feel we've already lost. I keep going, but more out of stubbornness than genuine hope. Some days I wonder whether we're just rearranging the furniture on a sinking ship.\n\nC) PRIYA: What frustrates me is complacency — people who assume technology will magically save us so they needn't change anything. That relaxed optimism is as dangerous as despair. It makes people passive. Yes, the solutions exist, but they won't deploy themselves. Assuming we'll be fine is a good way to guarantee we won't.\n\nD) SAM: I try to take the long view. Humans have done impossible things before — ended slavery, cured diseases nobody thought curable. Nothing says we're bound to fail this time. The future isn't fixed; it depends on us. I find that thought more motivating than any prediction, good or bad. The story isn't over yet.",
        q: [
          mc("Who treats hope as a deliberate discipline?", ["A", "B", "C", "D"], 0, "Nadia: 'I choose hope deliberately, as a discipline'."),
          mc("Who struggles with feelings of pessimism?", ["A", "B", "C", "D"], 1, "Tom: 'I struggle with pessimism'."),
          mc("Who is most frustrated by complacency?", ["A", "B", "C", "D"], 2, "Priya: 'What frustrates me is complacency'."),
          mc("Who takes 'the long view' of human history?", ["A", "B", "C", "D"], 3, "Sam: 'I try to take the long view'."),
          mc("Who says despair guarantees failure?", ["A", "B", "C", "D"], 0, "Nadia: 'despair guarantees we won't'."),
          mc("Who compares their efforts to 'rearranging furniture on a sinking ship'?", ["A", "B", "C", "D"], 1, "Tom: 'rearranging the furniture on a sinking ship'."),
          mc("Who says relaxed optimism makes people passive?", ["A", "B", "C", "D"], 2, "Priya: 'It makes people passive'."),
          mc("Who points to abolishing slavery and curing diseases?", ["A", "B", "C", "D"], 3, "Sam: 'ended slavery, cured diseases'."),
          mc("Who keeps going 'more out of stubbornness than genuine hope'?", ["A", "B", "C", "D"], 1, "Tom: 'more out of stubbornness than genuine hope'."),
          mc("Who says 'the future isn't fixed; it depends on us'?", ["A", "B", "C", "D"], 3, "Sam: 'The future isn't fixed; it depends on us'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'We should feel hopeful, not fearful, about the future of the planet.'\nComenta estos dos aspectos y añade uno propio:\n1. technology (la tecnología)\n2. human behaviour (el comportamiento humano)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'The world I want to leave behind' — describe el futuro por el que merece la pena luchar.\n· CARTA a tu 'yo' del futuro contándole qué estás haciendo hoy por el planeta: usa un registro personal.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: If we'd started twenty years ago, this would all be so much easier now. Two. Man: The whole valley has been replanted — it's unrecognisable. Three. Woman: I choose to stay hopeful; despair just guarantees we fail. Four. Man: They say the species is thought to be extinct, but I saw one last week. Five. Woman: Despite the cost, we insulated the whole house, and the bills halved. Six. Man: I wish I'd switched to renewables years ago. Seven. Woman: By 2040, they claim, the country will have gone completely fossil-free. Eight. Man: It's not the technology I doubt — it's whether we'll move fast enough.", [
      mc("1. What does the woman say about starting earlier?", ["It's too late.", "It would be much easier now.", "It made no difference."], 1, "'this would all be so much easier now'."),
      mc("2. What has happened to the valley?", ["It was built on.", "It has been replanted.", "It flooded."], 1, "'has been replanted'."),
      mc("3. Why does the woman choose hope?", ["She's sure they'll win.", "Despair guarantees failure.", "She's naive."], 1, "'despair just guarantees we fail'."),
      mc("4. What does the man say about the species?", ["It's common.", "It's thought extinct, but he saw one.", "It's dangerous."], 1, "'thought to be extinct, but I saw one'."),
      mc("5. What was the result of insulating the house?", ["Higher bills.", "The bills halved.", "No change."], 1, "'the bills halved'."),
      mc("6. What does the man regret?", ["Switching to renewables.", "Not switching to renewables sooner.", "Buying a car."], 1, "'I wish I'd switched… years ago'."),
      mc("7. What will the country do by 2040?", ["Use more coal.", "Go completely fossil-free.", "Build oil fields."], 1, "'will have gone completely fossil-free'."),
      mc("8. What does the man doubt?", ["The technology.", "Whether we'll move fast enough.", "The science."], 1, "'whether we'll move fast enough'."),
    ]),

    ...speakingParts({ p1: "si eres optimista o pesimista sobre el futuro del planeta y qué te da esperanza", p2: "dos actitudes ante el futuro (una persona activista y esperanzada y otra resignada): compáralas y di cuál es más útil", p3: "qué actitud ayuda más a afrontar la crisis (la esperanza activa, el realismo, la urgencia, la cooperación, la responsabilidad personal): comentadlo y elegid la mejor", p4: "el futuro del planeta: si el miedo o la esperanza motivan más, si confías en la tecnología o en el cambio de comportamiento y qué mundo quieres dejar" }),

    SUMMARY("Resumen de la Semana 10 (B2)", [
      "Has consolidado TODA la gramática nuclear del B2: tiempos, condicionales, modales, pasiva, estilo indirecto, relativas, patrones verbales y conectores.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 con el tema del medio ambiente.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: ESTRATEGIAS DE EXAMEN parte por parte + el mundo del trabajo.",
    ]),
    INFO("Mini-simulacro de la Semana 10", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 11."),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Repaso de estructuras clave · El medio ambiente",
  description: "Consolidación de tiempos verbales, condicionales, modales, voz pasiva, estilo indirecto, relativas, gerundios/infinitivos y conectores, con el hilo del medio ambiente, el clima, la naturaleza y la energía. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
