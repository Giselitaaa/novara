/**
 * B1 Preliminary · Semana 2 — "El futuro y los planes".
 * Gramática: formas de futuro (will/going to/present continuous), future
 * continuous, first conditional, oraciones de tiempo (when/as soon as/unless).
 * Cada día, las 4 destrezas con el formato real del B1.
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, reading, gappedText, writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD,
  READING_P1, mc, fb,
} from "./_lib.mjs";

const readingParts = ({ p1, p2text, p2q, p3text, p3q, p4text, p4options, p4q, p5text, p5q, p6text, p6q }) => [
  READING_HEAD,
  READING_P1(p1.title, p1.items),
  reading(2, `Reading · Parte 2 — ${p2q.title}`, p2text, "Lee lo que quiere cada persona y elige el texto que le conviene (A/B/C…).", p2q.items),
  reading(3, `Reading · Parte 3 — ${p3q.title}`, p3text, "Lee el texto largo y responde (A/B/C/D).", p3q.items),
  gappedText(p4q.title, p4text, p4options, p4q.items),
  reading(5, `Reading · Parte 5 — ${p5q.title}`, p5text, "Elige la palabra correcta (A/B/C/D) para cada hueco.", p5q.items),
  reading(6, `Reading · Parte 6 — ${p6q.title}`, p6text, "Escribe UNA palabra en cada hueco (gramática).", p6q.items),
];

const speakingParts = (topic, { p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle sobre uno mismo", "I'm going to, I hope to, I usually, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}. Di qué hay, qué hacen las personas, dónde y cómo crees que se sienten`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "hacer sugerencias, dar opiniones y acordar", "how about, why don't we, I think, shall we, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa sobre el tema dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, I'd rather, for example"),
];

// ───────────────────────── DÍA 6 ─────────────────────────
const DAY6 = {
  title: "Día 6 — Formas de futuro (will / going to / present continuous) · Tecnología",
  description: "Elegir la forma de futuro correcta según la intención. Vocabulario de tecnología. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Usar will, going to y present continuous para el futuro según el contexto.",
    summary: "Formas de futuro; tecnología; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'will' para planes ya hechos.", "present simple para citas futuras.", "'I go to the doctor tomorrow'."],
    reviewPrompts: ["¿Decisión del momento: will o going to?", "¿Cita concreta mañana: qué forma?"],
  },
  items: [
    TEXT("🔁 Semana 2. Hoy repasas y afinas las FORMAS DE FUTURO: cuál usar según hables de una predicción, un plan o una cita. Vocabulario: la TECNOLOGÍA."),
    GRAMMAR("Las formas de futuro", `· WILL + base: predicciones y opiniones (I think robots will do more jobs), decisiones del momento (The phone's ringing — I'll answer it), ofrecimientos y promesas.
· BE GOING TO + base: planes e intenciones ya decididos (I'm going to study engineering), y predicciones con PRUEBAS (Look at those clouds — it's going to rain).
· PRESENT CONTINUOUS: citas y arreglos concretos con hora/día (I'm meeting Ana at six tomorrow).
Pista: plan decidido → going to; decisión ahora → will; cita organizada → present continuous.`),
    WARN("Errores típicos del hispanohablante", "· ❌ (plan) I will travel this summer → mejor ✅ I'm going to travel.\n· ❌ I go to the doctor tomorrow at 5 → ✅ I'm going to the doctor tomorrow at 5.\n· ❌ It will rain, look at the clouds → ✅ It's going to rain (pruebas).\n· ❌ I'm going to shopping → ✅ I'm going to go shopping."),
    grammarEx("Gramática — Formas de futuro", "Elige o completa.", [
      mc("Prediction/opinion:", ["I'm meeting robots take jobs.", "I think robots will take more jobs.", "Robots take jobs tomorrow."], 1, "predicción → will."),
      fb("Look at those clouds — it ___ (rain)!", ["is going to rain", "'s going to rain"], "predicción con pruebas → going to."),
      mc("Decision now: 'The phone's ringing.'", ["I'm going to answer it.", "I'll answer it.", "I answer it."], 1, "decisión del momento → will."),
      fb("I ___ (meet) Ana at six tomorrow. (arreglado)", ["am meeting", "'m meeting"], "cita → present continuous."),
      fb("Next year I ___ (study) medicine. (plan)", ["am going to study", "'m going to study"], "plan → going to."),
      mc("Choose:", ["We're going to shopping.", "We're going to go shopping.", "We go shopping tomorrow."], 1, "going to go shopping."),
      fb("I promise I ___ (not/tell) anyone.", ["won't tell", "will not tell"], "promesa → will."),
    ]),
    GRAMMAR("Vocabulario del día — Tecnología", "Léxico de tecnología (B1)."),
    deck("B1 S2D6 — Tecnología", [
      ["device", "dispositivo", "My phone is my favourite device.", "sustantivo", "dɪˈvaɪs"],
      ["download", "descargar", "I'll download the app later.", "verbo", "ˌdaʊnˈləʊd"],
      ["update", "actualizar / actualización", "You should update the software.", "verbo/sustantivo", "ˌʌpˈdeɪt"],
      ["connect", "conectar(se)", "Connect to the wifi.", "verbo", "kəˈnekt"],
      ["screen time", "tiempo de pantalla", "I'm cutting down on screen time.", "colocación", "ˈskriːn taɪm"],
      ["charge", "cargar (batería)", "I need to charge my phone.", "verbo", "tʃɑːdʒ"],
      ["social media", "redes sociales", "She spends hours on social media.", "colocación", "ˌsəʊʃl ˈmiːdiə"],
      ["reliable", "fiable", "This app isn't very reliable.", "adjetivo", "rɪˈlaɪəbl"],
      ["log in", "iniciar sesión", "Log in with your password.", "phrasal verb", "lɒɡ ˈɪn"],
      ["out of date", "anticuado / obsoleto", "My laptop is out of date.", "colocación", "ˌaʊt əv ˈdeɪt"],
    ]),
    vocabEx("Vocabulario — Tecnología", "Elige la opción correcta.", [
      mc("A phone or tablet is a ___.", ["device", "screen", "update"], 0, "device."),
      mc("To get the newest version is to ___.", ["update", "download", "connect"], 0, "update."),
      mc("To give your battery power is to ___ it.", ["charge", "log in", "connect"], 0, "charge."),
      mc("The hours you spend on screens is your ___.", ["screen time", "update", "device"], 0, "screen time."),
      mc("Old and no longer modern is ___.", ["out of date", "reliable", "connected"], 0, "out of date."),
      mc("To enter your account is to ___.", ["log in", "charge", "update"], 0, "log in."),
    ]),

    ...readingParts({
      p1: { title: "Tecnología y avisos", items: [
        mc("Message: 'Update available. Your phone will restart in 5 minutes.'", ["The phone will restart soon for an update.", "No update.", "Phone is broken."], 0, "'will restart in 5 minutes'."),
        mc("Sign: 'Free wifi — ask staff to connect.'", ["Staff will help you connect to wifi.", "No wifi.", "Wifi costs money."], 0, "'ask staff to connect'."),
        mc("Text: 'My battery's dying — I'll call you back when I've charged it.'", ["Will call back after charging.", "Won't call.", "Battery is full."], 0, "'I'll call you back when I've charged it'."),
        mc("Notice: 'Please switch devices to silent during the film.'", ["Put devices on silent.", "Use them loudly.", "No devices."], 0, "'switch devices to silent'."),
        mc("App alert: 'You've used 5 hours of screen time today.'", ["Report of screen time used.", "No screen time.", "Battery low."], 0, "'5 hours of screen time today'."),
      ] },
      p2text: "FOUR TECH GADGETS\n\nA) SmartRing — tracks your sleep and steps; great for people who want to be healthier without a big screen.\nB) E-reader — carry thousands of books; perfect for readers who travel a lot.\nC) Smart Speaker — plays music and answers questions with your voice; useful for busy homes.\nD) Wireless Earbuds — great sound for music and calls on the go; for people always on the move.",
      p2q: { title: "Emparejar personas y aparatos", items: [
        mc("Nora wants to track her health without a screen.", ["A", "B", "C", "D"], 0, "SmartRing."),
        mc("Ben loves reading and travels a lot.", ["A", "B", "C", "D"], 1, "E-reader."),
        mc("The Ruiz family want a device they can control by voice.", ["A", "B", "C", "D"], 2, "Smart Speaker."),
        mc("Leo wants good sound for music while commuting.", ["A", "B", "C", "D"], 3, "Wireless Earbuds."),
        mc("Someone who wants to carry many books easily.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "WILL TECHNOLOGY MAKE US LONELY?\n\nTechnology is changing our lives faster than ever, and many people worry about the future. Some experts believe that in twenty years, we will spend even more time looking at screens, and less time with real people. They think this will make us lonelier and less able to talk face to face.\n\nHowever, I don't completely agree. Yes, it's true that some people spend too many hours on social media. But technology also connects us in amazing ways. My grandmother, for example, lives in another country, and thanks to video calls, I'm going to see her smile every week, even though we're far apart. Without technology, that would be impossible.\n\nIn my opinion, the problem isn't the technology itself, but how we use it. If we let our devices control us, we will lose something important. But if we use them wisely, they can bring us closer together. The future isn't decided yet. It depends on the choices we make today.",
      p3q: { title: "¿Nos hará más solitarios la tecnología? (texto largo)", items: [
        mc("What do some experts believe about the future?", ["We'll use less technology.", "We'll spend more time on screens and be lonelier.", "Technology will disappear."], 1, "'more time looking at screens… lonelier'."),
        mc("Does the writer completely agree?", ["Yes.", "No.", "They have no opinion."], 1, "'I don't completely agree'."),
        mc("How does the writer see their grandmother?", ["In person weekly.", "By video call weekly.", "Never."], 1, "'thanks to video calls… every week'."),
        mc("What does the writer think the real problem is?", ["The technology itself.", "How we use it.", "The internet speed."], 1, "'not the technology itself, but how we use it'."),
        mc("What does the future depend on?", ["The experts.", "The choices we make today.", "Nothing."], 1, "'the choices we make today'."),
      ] },
      p4text: "MY DIGITAL DETOX WEEKEND\n\nLast month, my friends and I decided to try a 'digital detox'. (1)___ We agreed to switch off all our phones and computers for a whole weekend. At first, I felt strange and even a little anxious without my device.\n\nOn Saturday morning, I kept reaching for my phone out of habit. (2)___ But by the afternoon, something changed. Without notifications, I felt calmer and more focused. We went for a long walk in the countryside. (3)___ We talked for hours about things that really mattered.\n\nBy Sunday, I didn't miss my phone at all. (4)___ I read a whole book, cooked a proper meal, and slept better than I had in weeks. When I finally switched my phone back on, I had fifty messages waiting. (5)___ From now on, I'm going to have a screen-free day every week.",
      p4options: [
        "We wanted to see if we could survive without screens.",     // A -> gap 1
        "It took me a while to break the habit.",                    // B -> gap 2
        "Nobody was looking at a screen for the first time in ages.", // C -> gap 3
        "I actually enjoyed doing things I never had time for.",     // D -> gap 4
        "I spent the whole weekend online.",                         // E (extra)
        "The experience taught me an important lesson.",             // F -> gap 5
        "My phone was broken all weekend.",                          // G (extra)
        "We watched films on our tablets non-stop.",                 // H (extra)
      ],
      p4q: { title: "Un fin de semana sin pantallas (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: ver si sobrevivían sin pantallas."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: costó romper el hábito."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: nadie miraba una pantalla."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: disfrutó de cosas para las que no tenía tiempo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la experiencia le enseñó una lección."),
      ] },
      p5text: "Smartphones are amazing (1)___, but they can control our lives. Many people spend too much (2)___ time scrolling through (3)___ media. Experts say we (4)___ become more focused if we switch off our notifications. Why not try a screen-free day? You could read a book, go for a walk, or (5)___ to friends face to face. You might find that you don't (6)___ your phone as much as you think.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["devices", "screens", "updates", "batteries"], 0, "'amazing devices'."),
        mc("Hueco 2", ["screen", "device", "social", "reliable"], 0, "'screen time'."),
        mc("Hueco 3", ["social", "screen", "reliable", "wireless"], 0, "'social media'."),
        mc("Hueco 4", ["will", "would", "should", "must"], 0, "'we will become more focused'."),
        mc("Hueco 5", ["talk", "say", "tell", "speak"], 0, "'talk to friends'."),
        mc("Hueco 6", ["miss", "lose", "leave", "forget"], 0, "'you don't miss your phone'."),
      ] },
      p6text: "Hi Alex,\nGuess what — I'm going (1)___ try a digital detox this weekend! I'm going to switch (2)___ my phone for two whole days. I think it (3)___ be hard at first, because I check social media all the time. But I hope I (4)___ feel calmer without notifications. My sister did it last month (5)___ she loved it. Do you think you (6)___ ever try it?\nSpeak soon,\nSam",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["to"], "'going to try'."),
        fb("Hueco 2", ["off"], "'switch off'."),
        fb("Hueco 3", ["will", "'ll"], "'it will be hard'."),
        fb("Hueco 4", ["will", "'ll"], "'I hope I will feel'."),
        fb("Hueco 5", ["and"], "'and she loved it'."),
        fb("Hueco 6", ["will", "would", "could"], "'you would ever try it'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus hábitos con la tecnología. Responde a su email (~100 palabras):\n· cuéntale qué dispositivos usas y para qué,\n· di si vas a cambiar algún hábito (going to) y por qué,\n· pregúntale por su tecnología favorita.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is technology good or bad for young people?' con tu opinión y razones.\n· RELATO: empieza con: 'The day the internet stopped working, everything changed.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: What are you going to do this weekend? Man: I'm going to try a digital detox — no phone for two days. Two. Man: Can you help me connect to the wifi? Woman: Sure, I'll show you. Three. Woman: Why is your phone so slow? Man: It's out of date; I'm going to buy a new one. Four. Man: Do you think robots will take our jobs? Woman: Some of them, probably. Five. Woman: What's wrong with the app? Man: It's not very reliable — it keeps crashing. Six. Man: How much screen time do you have? Woman: Too much — about six hours a day. Seven. Man: Have you charged your phone? Woman: Not yet, I'll do it now.", [
      mc("1. What is the man going to do this weekend?", ["Buy a phone.", "A digital detox.", "Work."], 1, "'a digital detox'."),
      mc("2. What will the woman do?", ["Nothing.", "Help him connect to wifi.", "Buy wifi."], 1, "'I'll show you'."),
      mc("3. Why is the man's phone slow?", ["No battery.", "It's out of date.", "No wifi."], 1, "'It's out of date'."),
      mc("4. What does the woman think about robots?", ["They'll take all jobs.", "They'll take some jobs.", "No jobs."], 1, "'Some of them, probably'."),
      mc("5. What's wrong with the app?", ["Too expensive.", "Not reliable — it crashes.", "Too big."], 1, "'not very reliable'."),
      mc("6. How much screen time does the woman have?", ["Two hours.", "About six hours.", "None."], 1, "'about six hours a day'."),
      mc("7. Has the woman charged her phone?", ["Yes.", "Not yet, she'll do it now.", "It's broken."], 1, "'Not yet, I'll do it now'."),
    ]),

    ...speakingParts("la tecnología y tus planes", { p1: "qué tecnología usas, cuánto tiempo pasas con el móvil y tus planes para el finde", p2: "personas usando dispositivos (móviles, ordenadores) en distintos lugares", p3: "qué aparato tecnológico regalar a un amigo/a", p4: "la tecnología, sus ventajas y desventajas para la sociedad" }),

    SUMMARY("Resumen del Día 6", [
      "will (predicciones/decisiones), going to (planes/predicciones con pruebas), present continuous (citas).",
      "Vocabulario de tecnología.",
      "Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 7", "Escribe 3 planes tuyos (going to) y 2 predicciones (will). Repasa las flashcards. Mañana: future continuous y oraciones de tiempo."),
  ],
};

// ───────────────────────── DÍA 7 ─────────────────────────
const DAY7 = {
  title: "Día 7 — Future continuous y oraciones de tiempo · El medio ambiente",
  description: "Future continuous (will be + -ing) y oraciones de tiempo de futuro. Vocabulario del medio ambiente. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Hablar de acciones en desarrollo en el futuro y usar oraciones de tiempo.",
    summary: "Future continuous; when/as soon as + presente; medio ambiente; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'when I will arrive'.", "will tras as soon as.", "olvidar be en future continuous."],
    reviewPrompts: ["¿'When I will get home' o 'When I get home'?", "¿Cómo dices 'estaré trabajando a las 9'?"],
  },
  items: [
    TEXT("🔁 Repaso: formas de futuro. Hoy el FUTURE CONTINUOUS (lo que estarás haciendo) y las oraciones de tiempo de futuro. Vocabulario: el MEDIO AMBIENTE."),
    GRAMMAR("Future continuous y oraciones de tiempo", `FUTURE CONTINUOUS: will be + verbo-ing — una acción EN DESARROLLO en un momento futuro:
· This time tomorrow, I'll be flying to London. · At 9, they'll be having dinner.
ORACIONES DE TIEMPO (futuro): tras when, as soon as, before, after, until va PRESENTE, no 'will':
· I'll call you when I arrive. (NO 'when I will arrive')
· As soon as it stops raining, we'll go out.
La parte principal sí lleva 'will'.`),
    WARN("Errores típicos del hispanohablante", "· ❌ when I will arrive → ✅ when I arrive.\n· ❌ As soon as it will stop raining → ✅ As soon as it stops raining.\n· ❌ This time tomorrow I fly → ✅ …I'll be flying.\n· ❌ I'll be fly → ✅ I'll be flying."),
    grammarEx("Gramática — Future continuous y tiempo", "Completa o elige.", [
      fb("This time tomorrow, I ___ (fly) to Paris.", ["will be flying", "'ll be flying"], "en desarrollo → future continuous."),
      fb("I'll call you when I ___ (get) home.", ["get"], "presente tras when."),
      fb("As soon as the film ___ (finish), we'll leave.", ["finishes"], "presente tras as soon as."),
      mc("Choose:", ["At 8 they will have dinner.", "At 8 they'll be having dinner.", "At 8 they will be have dinner."], 1, "en desarrollo → will be having."),
      fb("We won't start until everyone ___ (arrive).", ["arrives"], "presente tras until."),
      mc("Choose:", ["When I will see her, I'll tell her.", "When I see her, I'll tell her.", "When I seeing her, I'll tell her."], 1, "presente tras when."),
      fb("Don't call at nine — I ___ (study).", ["will be studying", "'ll be studying"], "future continuous."),
    ]),
    GRAMMAR("Vocabulario del día — El medio ambiente", "Léxico medioambiental (B1)."),
    deck("B1 S2D7 — El medio ambiente", [
      ["climate change", "cambio climático", "Climate change is a global problem.", "colocación", "ˈklaɪmət tʃeɪndʒ"],
      ["pollution", "contaminación", "Air pollution harms our health.", "sustantivo", "pəˈluːʃn"],
      ["recycle", "reciclar", "We recycle glass and paper.", "verbo", "ˌriːˈsaɪkl"],
      ["waste", "malgastar / residuos", "Don't waste water.", "verbo/sustantivo", "weɪst"],
      ["renewable", "renovable", "Solar power is renewable energy.", "adjetivo", "rɪˈnjuːəbl"],
      ["reduce", "reducir", "We must reduce plastic.", "verbo", "rɪˈdjuːs"],
      ["endangered", "en peligro (especie)", "Pandas are an endangered species.", "adjetivo", "ɪnˈdeɪndʒəd"],
      ["carbon footprint", "huella de carbono", "Flying increases your carbon footprint.", "colocación", "ˈkɑːbən ˈfʊtprɪnt"],
      ["litter", "basura (en la calle)", "Don't drop litter in the park.", "sustantivo", "ˈlɪtə"],
      ["environmentally friendly", "respetuoso con el medio ambiente", "Choose environmentally friendly products.", "colocación", "ɪnˌvaɪrənˈmentəli ˈfrendli"],
    ]),
    vocabEx("Vocabulario — El medio ambiente", "Elige la opción correcta.", [
      mc("The warming of the planet is called ___.", ["climate change", "pollution", "litter"], 0, "climate change."),
      mc("Energy from the sun or wind is ___.", ["renewable", "endangered", "wasted"], 0, "renewable."),
      mc("To use materials again is to ___.", ["recycle", "waste", "reduce"], 0, "recycle."),
      mc("Rubbish dropped on the ground is ___.", ["litter", "pollution", "waste"], 0, "litter."),
      mc("An animal in danger of disappearing is ___.", ["endangered", "renewable", "reliable"], 0, "endangered."),
      mc("The total CO2 you produce is your ___.", ["carbon footprint", "climate change", "litter"], 0, "carbon footprint."),
    ]),

    ...readingParts({
      p1: { title: "Medio ambiente y avisos", items: [
        mc("Sign: 'Recycle here — glass, paper and plastic.'", ["Recycle these materials here.", "No recycling.", "Rubbish only."], 0, "'Recycle here'."),
        mc("Notice: 'Lights will switch off automatically to save energy.'", ["Lights turn off to save energy.", "Lights stay on.", "No lights."], 0, "'switch off automatically to save energy'."),
        mc("Poster: 'Join our beach clean-up — reduce litter, protect wildlife.'", ["Help clean the beach.", "No event.", "Beach closed."], 0, "'Join our beach clean-up'."),
        mc("Text: 'I'm going to cycle to work to lower my carbon footprint.'", ["Cycling to reduce CO2.", "Driving more.", "No change."], 0, "'lower my carbon footprint'."),
        mc("Sign: 'This shop only sells environmentally friendly products.'", ["Eco-friendly products only.", "No products.", "Cheap products."], 0, "'environmentally friendly products'."),
      ] },
      p2text: "FOUR WAYS TO HELP THE PLANET\n\nA) Cycle to Work Scheme — get a cheap bike and reduce your carbon footprint on your daily commute.\nB) Community Garden — grow your own vegetables and cut down on plastic packaging.\nC) Repair Workshop — learn to fix clothes and gadgets instead of throwing them away.\nD) Beach Guardians — join weekend clean-ups to remove litter and protect sea animals.",
      p2q: { title: "Emparejar personas y acciones", items: [
        mc("Ana wants to stop driving to work.", ["A", "B", "C", "D"], 0, "Cycle to Work."),
        mc("Ben wants to grow food and avoid plastic.", ["A", "B", "C", "D"], 1, "Community Garden."),
        mc("Sara hates throwing away broken things.", ["A", "B", "C", "D"], 2, "Repair Workshop."),
        mc("Leo loves the sea and wants to protect it.", ["A", "B", "C", "D"], 3, "Beach Guardians."),
        mc("Someone who wants to reduce their commuting emissions.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "A GREENER FUTURE\n\nWhat will life be like in fifty years? Scientists warn that if we don't act now, climate change will make our planet much harder to live on. But I'm hopeful, because I believe that by then, we'll be living in a very different — and greener — world.\n\nIn the future, I think most of our energy will come from renewable sources like the sun and wind. Instead of petrol cars, we'll be driving electric ones, and our cities will be full of trees and gardens. People will waste far less, because recycling and repairing will be normal, not unusual.\n\nOf course, none of this will happen by magic. It will only happen if governments, companies and ordinary people all work together. Every small action counts. When I recycle, cycle to school, or turn off a light, I'm doing my part. The future of the planet isn't something that will happen to us — it's something we are creating, choice by choice, right now.",
      p3q: { title: "Un futuro más verde (texto largo)", items: [
        mc("What do scientists warn about?", ["Nothing will change.", "Climate change will make Earth harder to live on.", "The sun will disappear."], 1, "'climate change will make our planet much harder to live on'."),
        mc("Where will most energy come from in the future?", ["Petrol.", "Renewable sources.", "Coal."], 1, "'renewable sources like the sun and wind'."),
        mc("What kind of cars will people drive?", ["Petrol cars.", "Electric ones.", "No cars."], 1, "'we'll be driving electric ones'."),
        mc("What will make a green future happen?", ["Magic.", "Everyone working together.", "Only governments."], 1, "'governments, companies and ordinary people all work together'."),
        mc("How does the writer see the planet's future?", ["Decided already.", "Something we are creating now.", "Hopeless."], 1, "'something we are creating, choice by choice, right now'."),
      ] },
      p4text: "OUR SCHOOL GOES GREEN\n\nLast year, our school started an exciting environmental project. (1)___ A group of students, including me, formed a 'Green Team' to make our school more environmentally friendly.\n\nFirst, we put recycling bins in every classroom. (2)___ At the beginning, some students forgot to use them, but soon it became a habit. Next, we started a vegetable garden behind the science block. (3)___ We grow tomatoes and herbs, which the canteen uses in the meals.\n\nThe biggest change has been people's attitudes. (4)___ Students who never thought about the environment now switch off lights and pick up litter. Next month, we're going to plant fifty trees in the local park. (5)___ It feels amazing to know that we are making a real difference.",
      p4options: [
        "We were tired of seeing so much waste every day.",          // A -> gap 1
        "Now we recycle almost everything we use.",                  // B -> gap 2
        "It teaches us where our food really comes from.",           // C -> gap 3
        "The whole school has become more aware.",                   // D -> gap 4
        "We decided to throw all the rubbish in one bin.",           // E (extra)
        "Little by little, we are changing our school for the better.", // F -> gap 5
        "The garden was closed for the whole year.",                 // G (extra)
        "Nobody was interested in the project at all.",              // H (extra)
      ],
      p4q: { title: "Nuestro colegio se vuelve verde (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cansados de tanto desperdicio."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: ahora reciclan casi todo."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: enseña de dónde viene la comida."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: todo el colegio más consciente."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: cambian el colegio a mejor."),
      ] },
      p5text: "We can all help to protect the planet. One simple thing is to (1)___ more and throw away less. We should also try to (2)___ our carbon footprint by walking or cycling. Choosing (3)___ energy, like solar power, makes a big difference. Never drop (4)___ in the street, and try to buy (5)___ friendly products. If we all act together, we (6)___ leave a healthier planet for the next generation.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["recycle", "waste", "pollute", "litter"], 0, "'recycle more'."),
        mc("Hueco 2", ["reduce", "increase", "waste", "grow"], 0, "'reduce our carbon footprint'."),
        mc("Hueco 3", ["renewable", "endangered", "reliable", "wireless"], 0, "'renewable energy'."),
        mc("Hueco 4", ["litter", "energy", "pollution", "waste"], 0, "'drop litter'."),
        mc("Hueco 5", ["environmentally", "climate", "carbon", "renewable"], 0, "'environmentally friendly'."),
        mc("Hueco 6", ["will", "would", "might", "should"], 0, "'we will leave a healthier planet'."),
      ] },
      p6text: "Hi Sam,\nOur school has started a green project and I'm loving it! Next month we (1)___ going to plant fifty trees in the park. This time next year, the garden (2)___ be full of vegetables! We've put recycling bins everywhere, so now we recycle almost (3)___. I've decided to cycle to school too, to reduce my carbon (4)___. As soon (5)___ I get home, I switch off all the lights. If we all help, we (6)___ make a real difference. Want to join us?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["are"], "'we are going to plant'."),
        fb("Hueco 2", ["will", "'ll"], "'the garden will be full' (future continuous)."),
        fb("Hueco 3", ["everything"], "'recycle almost everything'."),
        fb("Hueco 4", ["footprint"], "'carbon footprint'."),
        fb("Hueco 5", ["as"], "'As soon as'."),
        fb("Hueco 6", ["will", "can", "could", "'ll"], "'we will make a difference'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta qué haces por el medio ambiente. Responde a su email (~100 palabras):\n· cuéntale qué haces para ayudar,\n· di qué vas a cambiar o mejorar,\n· pregúntale por su ciudad.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How can young people help the environment?' con ideas y razones.\n· RELATO: empieza con: 'In fifty years, the world was a very different place.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Why do you cycle everywhere? Man: To reduce my carbon footprint. Two. Man: What are you going to do with these old clothes? Woman: I'll recycle them, not throw them away. Three. Woman: Is this energy renewable? Man: Yes, it comes from solar panels. Four. Man: What's the biggest problem for the planet? Woman: Climate change, without a doubt. Five. Man: Why is the beach closed? Woman: There's too much pollution in the water. Six. Woman: What will life be like in fifty years? Man: Greener, I hope.", [
      mc("1. Why does the man cycle?", ["It's fast.", "To reduce his carbon footprint.", "It's cheap."], 1, "'reduce my carbon footprint'."),
      mc("2. What will the woman do with old clothes?", ["Throw them away.", "Recycle them.", "Sell them."], 1, "'I'll recycle them'."),
      mc("3. Where does the energy come from?", ["Coal.", "Solar panels.", "Petrol."], 1, "'solar panels'."),
      mc("4. What is the biggest problem?", ["Litter.", "Climate change.", "Traffic."], 1, "'Climate change, without a doubt'."),
      mc("5. Why is the beach closed?", ["A storm.", "Pollution in the water.", "It's winter."], 1, "'too much pollution in the water'."),
      mc("6. What does the man hope life will be like?", ["Worse.", "Greener.", "The same."], 1, "'Greener, I hope'."),
    ]),

    ...speakingParts("el medio ambiente y el futuro", { p1: "qué haces para cuidar el planeta y qué te preocupa del futuro", p2: "personas reciclando o en la naturaleza", p3: "qué proyecto ecológico organizar en tu barrio", p4: "el medio ambiente, el cambio climático y qué puede hacer cada persona" }),

    SUMMARY("Resumen del Día 7", [
      "Future continuous: will be + -ing (acción en desarrollo en el futuro).",
      "Oraciones de tiempo: presente tras when/as soon as/until para el futuro.",
      "Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 8", "Escribe qué estarás haciendo mañana a las 9 (future continuous). Repasa las flashcards. Mañana: first conditional."),
  ],
};

// ───────────────────────── DÍA 8 ─────────────────────────
const DAY8 = {
  title: "Día 8 — First conditional y unless · Metas y ambiciones",
  description: "First conditional y unless. Vocabulario de metas y ambiciones. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Hablar de posibilidades reales de futuro con el first conditional y unless.",
    summary: "First conditional; unless; metas/ambiciones; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'If it will rain'.", "'unless you don't'.", "will en las dos partes."],
    reviewPrompts: ["¿Qué tiempos en el first conditional?", "¿'unless' equivale a…?"],
  },
  items: [
    TEXT("🔁 Repaso: future continuous y tiempo. Hoy el FIRST CONDITIONAL (posibilidades reales) y 'unless'. Vocabulario: METAS y AMBICIONES."),
    GRAMMAR("First conditional y unless", `FIRST CONDITIONAL: para cosas que PUEDEN pasar en el futuro:
· IF + presente simple, will + base: If you study hard, you'll pass.
· En la parte del 'if' va PRESENTE, no 'will'.
· También con may/might/can/could o imperativo: If you see her, tell her.
UNLESS = if not (a menos que): You'll fail unless you study. (= if you don't study)
· 'unless' ya es negativo: no lleva otro 'not'.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If it will rain, we'll stay → ✅ If it rains, we'll stay.\n· ❌ If you will study, you'll pass → ✅ If you study, you'll pass.\n· ❌ Unless you don't hurry → ✅ Unless you hurry.\n· ❌ If I will see her → ✅ If I see her."),
    grammarEx("Gramática — First conditional / unless", "Completa o elige.", [
      fb("If you ___ (study), you'll pass the exam.", ["study"], "if → presente."),
      fb("If it rains, we ___ (stay) at home.", ["will stay", "'ll stay"], "consecuencia → will."),
      mc("'if you don't hurry' = ___", ["unless you hurry", "unless you don't hurry", "if you hurry"], 0, "unless you hurry."),
      fb("You won't succeed ___ (a menos que) you try.", ["unless"], "unless."),
      mc("Choose:", ["If I will see her, I'll tell her.", "If I see her, I'll tell her.", "If I see her, I tell her."], 1, "if + presente, will."),
      fb("If you don't hurry, we ___ (miss) the bus.", ["will miss", "'ll miss"], "consecuencia → will."),
      fb("If you ask her nicely, she ___ (might/help) you.", ["might help"], "might en la consecuencia."),
    ]),
    GRAMMAR("Vocabulario del día — Metas y ambiciones", "Léxico de objetivos y logros (B1)."),
    deck("B1 S2D8 — Metas y ambiciones", [
      ["ambition", "ambición / aspiración", "My ambition is to be a doctor.", "sustantivo", "æmˈbɪʃn"],
      ["achieve", "lograr / conseguir", "You can achieve your goals.", "verbo", "əˈtʃiːv"],
      ["goal", "meta / objetivo", "Set yourself a clear goal.", "sustantivo", "ɡəʊl"],
      ["succeed", "tener éxito", "I hope I succeed.", "verbo", "səkˈsiːd"],
      ["opportunity", "oportunidad", "It's a great opportunity.", "sustantivo", "ˌɒpəˈtjuːnəti"],
      ["motivated", "motivado/a", "I feel very motivated.", "adjetivo", "ˈməʊtɪveɪtɪd"],
      ["confident", "seguro/a de sí", "She's confident about the future.", "adjetivo", "ˈkɒnfɪdənt"],
      ["give up", "rendirse", "Never give up on your dreams.", "phrasal verb", "ɡɪv ˈʌp"],
      ["work towards", "trabajar por (una meta)", "I'm working towards a degree.", "colocación", "wɜːk təˈwɔːdz"],
      ["make progress", "avanzar / progresar", "I've made good progress.", "colocación", "meɪk ˈprəʊɡres"],
    ]),
    vocabEx("Vocabulario — Metas y ambiciones", "Elige la opción correcta.", [
      mc("A strong desire to achieve something is an ___.", ["ambition", "opportunity", "goal"], 0, "ambition."),
      mc("To reach a goal is to ___ it.", ["achieve", "give up", "succeed"], 0, "achieve."),
      mc("The opposite of 'give up' is to keep going and ___.", ["succeed", "give up", "waste"], 0, "succeed."),
      mc("A good chance to do something is an ___.", ["opportunity", "ambition", "goal"], 0, "opportunity."),
      mc("Feeling eager to work hard is feeling ___.", ["motivated", "confident", "endangered"], 0, "motivated."),
      mc("To advance towards a goal is to make ___.", ["progress", "ambition", "opportunity"], 0, "progress."),
    ]),

    ...readingParts({
      p1: { title: "Oportunidades y avisos", items: [
        mc("Poster: 'Scholarships available — apply if you have big dreams.'", ["Money for study is available.", "No scholarships.", "Only for staff."], 0, "'Scholarships available'."),
        mc("Sign: 'You won't improve unless you practise.'", ["Practice is needed to improve.", "No practice needed.", "You can't improve."], 0, "'won't improve unless you practise'."),
        mc("Text: 'If you get the job, we'll celebrate!'", ["A promise to celebrate if he gets the job.", "No job.", "Already celebrating."], 0, "'If you get the job, we'll celebrate'."),
        mc("Notice: 'Careers fair Friday — meet employers, find opportunities.'", ["A careers event on Friday.", "No event.", "Cancelled."], 0, "'Careers fair Friday'."),
        mc("Card: 'Don't give up — you're closer than you think!'", ["Encouragement to continue.", "Give up now.", "Bad news."], 0, "'Don't give up'."),
      ] },
      p2text: "FOUR COURSES FOR YOUR FUTURE\n\nA) Coding Bootcamp — learn to build websites and apps; great opportunities in tech.\nB) Business Start-up — turn your idea into a real business, with expert advice.\nC) Language School — learn a new language to work or study abroad.\nD) Leadership Skills — build confidence and learn to lead a team.",
      p2q: { title: "Emparejar personas y cursos", items: [
        mc("Nadia dreams of creating her own company.", ["A", "B", "C", "D"], 1, "Business Start-up."),
        mc("Omar wants a career in technology.", ["A", "B", "C", "D"], 0, "Coding Bootcamp."),
        mc("Sara wants to study abroad next year.", ["A", "B", "C", "D"], 2, "Language School."),
        mc("Leo wants to become a confident team leader.", ["A", "B", "C", "D"], 3, "Leadership Skills."),
        mc("Someone who wants to build apps.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "NEVER GIVE UP\n\nWhen I was sixteen, my dream was to become a professional musician. I loved playing the guitar, but there was one big problem: I wasn't very good. My fingers were slow, and I often played the wrong notes. Many people told me I would never succeed and that I should choose a 'sensible' career instead.\n\nBut I was determined. I promised myself that I wouldn't give up unless I had truly tried my best. So I practised every single day, sometimes for hours. If I made a mistake, I didn't get angry — I just tried again. Slowly, I made progress. My teacher noticed how motivated I was and gave me extra lessons for free.\n\nFive years later, I'm now playing in a band, and last month we performed in front of five hundred people. It hasn't been easy, and I still have a lot to learn. But I've achieved something I once thought was impossible. My advice to anyone with a dream is simple: set a clear goal, work towards it every day, and don't listen to people who say you can't. If you keep trying, you'll be amazed at what you can achieve.",
      p3q: { title: "Nunca te rindas (texto largo)", items: [
        mc("What was the writer's dream?", ["To be a doctor.", "To be a professional musician.", "To be a teacher."], 1, "'become a professional musician'."),
        mc("What was the big problem?", ["No guitar.", "They weren't very good at first.", "No time."], 1, "'I wasn't very good'."),
        mc("What did the writer promise?", ["To give up soon.", "Not to give up unless they'd tried their best.", "To choose another career."], 1, "'wouldn't give up unless I had truly tried my best'."),
        mc("Why did the teacher give free lessons?", ["The writer paid.", "The writer was very motivated.", "The teacher was bored."], 1, "'noticed how motivated I was'."),
        mc("What is the writer's advice?", ["Give up if it's hard.", "Set a goal and keep trying.", "Listen to critics."], 1, "'set a clear goal, work towards it… don't listen to people who say you can't'."),
      ] },
      p4text: "MY BIGGEST CHALLENGE\n\nLast year, I decided to run a marathon. (1)___ Everyone thought I was crazy, because I had never run more than five kilometres in my life.\n\nAt first, the training was incredibly hard. (2)___ My legs hurt, and there were days when I wanted to stay in bed. But I had set myself a clear goal, and I refused to give up. Every week, I ran a little further. (3)___\n\nThe day of the marathon finally arrived. I was nervous, but also excited. (4)___ The last few kilometres were the hardest thing I have ever done, but the crowd cheered me on. When I crossed the finish line, I burst into tears of joy. (5)___ I had proved to myself that I could achieve anything if I worked hard enough.",
      p4options: [
        "It was the most ambitious goal I had ever set.",            // A -> gap 1
        "I could only run for ten minutes without stopping.",        // B -> gap 2
        "Slowly but surely, I was making real progress.",           // C -> gap 3
        "I told myself I just had to keep putting one foot forward.", // D -> gap 4
        "I had never felt so proud in my whole life.",              // F... wait order
        "I decided to give up before I even started.",              // E (extra)  -> index 4
        "I gave up after the first kilometre.",                     // G-ish extra
        "The race was cancelled because of the weather.",           // H (extra)
      ],
      p4q: { title: "Mi mayor reto (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: la meta más ambiciosa."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: solo podía correr diez minutos."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: avanzaba poco a poco."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: seguir poniendo un pie delante del otro."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "F(=idx4): nunca se sintió tan orgulloso."),
      ] },
      p5text: "Everyone has dreams, but not everyone (1)___ them. The secret is to set a clear (2)___ and work towards it every day. You won't (3)___ unless you keep trying, even when it's difficult. Don't give (4)___ when you make a mistake — just learn from it. Stay (5)___ and believe in yourself. If you never stop making (6)___, you will get there in the end.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["achieves", "gives", "wastes", "reduces"], 0, "'achieves them'."),
        mc("Hueco 2", ["goal", "ambition only", "opportunity", "device"], 0, "'a clear goal'."),
        mc("Hueco 3", ["succeed", "achieve", "give", "waste"], 0, "'won't succeed'."),
        mc("Hueco 4", ["up", "in", "on", "off"], 0, "'give up'."),
        mc("Hueco 5", ["motivated", "endangered", "reliable", "out of date"], 0, "'Stay motivated'."),
        mc("Hueco 6", ["progress", "goals", "mistakes", "chances"], 0, "'making progress'."),
      ] },
      p6text: "Hi Sam,\nI've set myself a big goal: I'm going to run a marathon! I know I won't succeed (1)___ I train hard, so I run every day. If I keep making (2)___, I'll be ready in six months. Some people say I (3)___ never do it, but I refuse to give (4)___. If you're free on race day, (5)___ come and cheer me on! I'm sure I (6)___ finish if I try my best. Wish me luck!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["unless"], "'won't succeed unless I train'."),
        fb("Hueco 2", ["progress"], "'making progress'."),
        fb("Hueco 3", ["will", "'ll", "can"], "'I will never do it'."),
        fb("Hueco 4", ["up"], "'give up'."),
        fb("Hueco 5", ["please"], "'please come and cheer'."),
        fb("Hueco 6", ["will", "'ll", "can", "could"], "'I will finish if I try'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus metas. Responde a su email (~100 palabras):\n· cuéntale una meta importante que tienes,\n· di qué vas a hacer para lograrla (first conditional/going to),\n· pregúntale por sus ambiciones.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How to achieve your goals' con 2–3 consejos y razones.\n· RELATO: empieza con: 'It was the hardest thing I had ever tried to do.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre un curso de verano y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear information about a summer skills course. Welcome to our summer course. It's designed for young people who want to achieve their goals. The course lasts four weeks and starts on the fifth of July. Classes are every morning from nine to twelve. You'll learn important skills like public speaking and teamwork. The course costs eighty pounds, but there are free places for students. To apply, you need to send an email before the twentieth of June. Don't miss this opportunity!", [
      fb("The course lasts ___ weeks.", ["four", "4"], "'lasts four weeks'."),
      fb("It starts on the ___ of July.", ["fifth", "5th", "5"], "'the fifth of July'."),
      fb("Classes are from nine to ___.", ["twelve", "12"], "'from nine to twelve'."),
      fb("The course costs ___ pounds.", ["eighty", "80"], "'eighty pounds'."),
      fb("Apply before the ___ of June.", ["twentieth", "20th", "20"], "'before the twentieth of June'."),
    ]),

    ...speakingParts("tus metas, lo que quieres lograr y tu futuro", { p1: "tus ambiciones, qué quieres estudiar o hacer y por qué", p2: "personas trabajando por una meta (deporte, música, estudios)", p3: "qué actividad organizar para motivar a un amigo/a que quiere rendirse", p4: "los sueños, el esfuerzo y qué hace falta para tener éxito" }),

    SUMMARY("Resumen del Día 8", [
      "First conditional: if + presente, will + base (posibilidades reales).",
      "unless = if not (ya negativo).",
      "Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 9", "Escribe 3 frases con first conditional sobre tus metas. Repasa las flashcards. Mañana: posibilidad (may/might/could) y predicciones."),
  ],
};

// ───────────────────────── DÍA 9 ─────────────────────────
const DAY9 = {
  title: "Día 9 — Posibilidad: may/might/could · La ciudad del futuro",
  description: "may/might/could para posibilidad y predicciones. Vocabulario de la ciudad. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Expresar posibilidad futura con may/might/could.",
    summary: "may/might/could; la ciudad; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'may to'.", "'It's possible rain'.", "'maybe' vs 'may be'."],
    reviewPrompts: ["¿Cómo dices 'quizás llueva' con un modal?", "¿'maybe' o 'may be'?"],
  },
  items: [
    TEXT("🔁 Repaso: first conditional. Hoy expresas POSIBILIDAD con may/might/could (quizás pase). Vocabulario: la CIUDAD y la vida urbana."),
    GRAMMAR("Posibilidad: may / might / could", `MAY / MIGHT / COULD + base = quizás (posibilidad en el presente o futuro):
· It might rain later. · She may be at home. · We could go to the beach if it's sunny.
· Negativa (posibilidad de que NO): It might not / may not happen.
⚠️ Sin 'to': ❌ may to rain → ✅ may rain.
'maybe' (adverbio, una palabra) = quizás: Maybe it will rain. ≠ 'may be' (verbo): It may be true.`),
    WARN("Errores típicos del hispanohablante", "· ❌ It may to rain → ✅ It may rain.\n· ❌ It's possible rain → ✅ It might rain.\n· ❌ Maybe true → ✅ It may be true / Maybe it's true.\n· ❌ She cans come → ✅ She may/might come."),
    grammarEx("Gramática — may/might/could", "Completa o elige.", [
      fb("Take an umbrella — it ___ (might/rain) later.", ["might rain"], "posibilidad → might + base."),
      fb("She isn't answering. She ___ (may/be) busy.", ["may be"], "may be."),
      mc("Choose:", ["It may to snow.", "It may snow.", "It mays snow."], 1, "may + base."),
      fb("We ___ (could/go) to the cinema if you like.", ["could go"], "posibilidad/sugerencia → could."),
      mc("Choose:", ["Maybe it will be sunny.", "May be it will be sunny.", "It maybe sunny."], 0, "maybe (adverbio) al inicio."),
      fb("I'm not sure, but I ___ (might not) come to the party.", ["might not come"], "posibilidad negativa."),
      mc("Choose:", ["It's possible that it rains.", "It might rain.", "Both A and B are OK."], 2, "ambas válidas."),
    ]),
    GRAMMAR("Vocabulario del día — La ciudad y la vida urbana", "Léxico urbano (B1)."),
    deck("B1 S2D9 — La ciudad", [
      ["public transport", "transporte público", "Public transport here is excellent.", "colocación", "ˌpʌblɪk ˈtrænspɔːt"],
      ["traffic jam", "atasco", "We were stuck in a traffic jam.", "colocación", "ˈtræfɪk dʒæm"],
      ["pedestrian", "peatón", "This street is for pedestrians only.", "sustantivo", "pəˈdestriən"],
      ["suburb", "afueras / barrio periférico", "They live in a quiet suburb.", "sustantivo", "ˈsʌbɜːb"],
      ["facilities", "instalaciones / servicios", "The town has great facilities.", "sustantivo", "fəˈsɪlətiz"],
      ["crowded", "abarrotado", "The city centre is always crowded.", "adjetivo", "ˈkraʊdɪd"],
      ["cost of living", "coste de la vida", "The cost of living is high here.", "colocación", "kɒst əv ˈlɪvɪŋ"],
      ["convenient", "cómodo / práctico", "It's convenient to live near work.", "adjetivo", "kənˈviːniənt"],
      ["green space", "zona verde", "The city needs more green spaces.", "colocación", "ɡriːn ˈspeɪs"],
      ["commuter", "persona que se desplaza al trabajo", "The train is full of commuters.", "sustantivo", "kəˈmjuːtə"],
    ]),
    vocabEx("Vocabulario — La ciudad", "Elige la opción correcta.", [
      mc("Buses and trains are ___.", ["public transport", "traffic jam", "suburb"], 0, "public transport."),
      mc("When cars can't move, there's a ___.", ["traffic jam", "green space", "pedestrian"], 0, "traffic jam."),
      mc("A person walking (not driving) is a ___.", ["pedestrian", "commuter", "suburb"], 0, "pedestrian."),
      mc("A residential area outside the centre is a ___.", ["suburb", "facility", "green space"], 0, "suburb."),
      mc("Parks and gardens in a city are ___.", ["green spaces", "traffic jams", "commuters"], 0, "green spaces."),
      mc("Easy and practical is ___.", ["convenient", "crowded", "endangered"], 0, "convenient."),
    ]),

    ...readingParts({
      p1: { title: "En la ciudad", items: [
        mc("Sign: 'Pedestrian zone — no vehicles beyond this point.'", ["No cars past here.", "Cars welcome.", "Closed."], 0, "'no vehicles beyond this point'."),
        mc("Notice: 'Bus service may be delayed due to roadworks.'", ["Buses might be late.", "Buses on time.", "No buses."], 0, "'may be delayed'."),
        mc("App alert: 'Heavy traffic — your journey could take 40 minutes.'", ["The trip might take 40 minutes.", "Fast journey.", "No traffic."], 0, "'could take 40 minutes'."),
        mc("Poster: 'New green space opening next month in the city centre.'", ["A new park is coming.", "A park is closing.", "No park."], 0, "'New green space opening'."),
        mc("Sign: 'Free public transport for students with a valid card.'", ["Students travel free with a card.", "No free transport.", "Everyone pays."], 0, "'Free public transport for students'."),
      ] },
      p2text: "FOUR PLACES TO LIVE\n\nA) City Centre Flat — small but central; walk everywhere; expensive but very convenient.\nB) Quiet Suburb — bigger house with a garden; you need a car; peaceful and family-friendly.\nC) University Area — cheap rooms, lively, close to shops and cafés; popular with students.\nD) Riverside Development — modern flats with green spaces and a gym; higher cost of living.",
      p2q: { title: "Emparejar personas y lugares", items: [
        mc("Nadia works in the centre and hates commuting.", ["A", "B", "C", "D"], 0, "City Centre Flat."),
        mc("The Ruiz family want a garden for their children.", ["A", "B", "C", "D"], 1, "Quiet Suburb."),
        mc("Omar is a student looking for a cheap, lively area.", ["A", "B", "C", "D"], 2, "University Area."),
        mc("Sara wants a modern flat with a gym and parks.", ["A", "B", "C", "D"], 3, "Riverside Development."),
        mc("Someone who wants to walk everywhere.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE CITY OF THE FUTURE\n\nMore than half of the world's population now lives in cities, and this number is growing every year. As cities become more crowded, planners are asking an important question: what will the city of the future look like?\n\nSome experts believe our cities may become 'smart cities'. Traffic lights could change automatically to reduce traffic jams, and sensors might tell you exactly where to park. Public transport may become free, encouraging people to leave their cars at home. There could also be many more green spaces, with gardens on the roofs of buildings and trees along every street.\n\nOf course, no one knows the future for certain. Cities might become cleaner and more pleasant, or they could become even more crowded and stressful. It probably depends on the choices we make now. One thing is clear, though: if we plan carefully, the cities of tomorrow could be greener, healthier and more convenient than the ones we live in today.",
      p3q: { title: "La ciudad del futuro (texto largo)", items: [
        mc("What is happening to the world's population?", ["More people live in villages.", "More people live in cities.", "It's shrinking."], 1, "'More than half… lives in cities, and this number is growing'."),
        mc("What might 'smart' traffic lights do?", ["Stay red.", "Change automatically to reduce jams.", "Turn off."], 1, "'change automatically to reduce traffic jams'."),
        mc("What may happen to public transport?", ["Become expensive.", "Become free.", "Disappear."], 1, "'Public transport may become free'."),
        mc("Where might there be gardens?", ["Underground.", "On the roofs of buildings.", "Nowhere."], 1, "'gardens on the roofs of buildings'."),
        mc("What does the future depend on?", ["Luck.", "The choices we make now.", "The weather."], 1, "'depends on the choices we make now'."),
      ] },
      p4text: "MOVING TO THE CITY\n\nSix months ago, I left my small village and moved to a big city to study. (1)___ At first, everything felt overwhelming: the noise, the crowds and the endless traffic.\n\nThe biggest challenge was getting around. (2)___ I got lost several times in my first week! But I soon learned to use the public transport, and now I can get anywhere quickly. (3)___ I don't need a car at all, which saves me a lot of money.\n\nThere are things I miss about the village, of course. (4)___ But the city has so much to offer: museums, concerts, and people from all over the world. (5)___ I've made friends from five different countries. City life isn't perfect, but for me, right now, it's exactly where I want to be.",
      p4options: [
        "It was a huge change from my quiet home.",                  // A -> gap 1
        "The metro system seemed impossibly complicated.",           // B -> gap 2
        "It's actually much more convenient than driving.",          // C -> gap 3
        "Sometimes I long for the fresh air and the silence.",       // D -> gap 4
        "I never leave my flat because of the noise.",               // E (extra)
        "Most of all, I love how diverse it is.",                    // F -> gap 5
        "There is nothing to do here at all.",                       // G (extra)
        "The village had a busy underground railway.",               // H (extra)
      ],
      p4q: { title: "Mudarse a la ciudad (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: un gran cambio."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: el metro parecía complicadísimo."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: más cómodo que conducir."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: echa de menos el aire y el silencio."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le encanta lo diversa que es."),
      ] },
      p5text: "Living in a big city has advantages and disadvantages. On one hand, there is excellent public (1)___, so you don't need a car. There are also great (2)___ like museums, cinemas and hospitals. On the other hand, the cost of (3)___ is often high, and the streets can be very (4)___. Traffic (5)___ are common at rush hour. To make cities better, we need more (6)___ spaces where people can relax.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["transport", "space", "jam", "suburb"], 0, "'public transport'."),
        mc("Hueco 2", ["facilities", "commuters", "pedestrians", "suburbs"], 0, "'great facilities'."),
        mc("Hueco 3", ["living", "life", "transport", "traffic"], 0, "'cost of living'."),
        mc("Hueco 4", ["crowded", "convenient", "renewable", "reliable"], 0, "'very crowded'."),
        mc("Hueco 5", ["jams", "lights", "spaces", "zones"], 0, "'Traffic jams'."),
        mc("Hueco 6", ["green", "public", "crowded", "convenient"], 0, "'green spaces'."),
      ] },
      p6text: "Hi Sam,\nI love living in the city, but it has its problems! Getting around is easy because the public (1)___ is great, so I don't need a car. It's very (2)___ — I can walk to work. The only problem is that the centre is always (3)___, and there are terrible traffic (4)___ at rush hour. The city (5)___ build more green spaces soon, which would be wonderful. You (6)___ come and visit me — there's so much to do!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["transport"], "'public transport'."),
        fb("Hueco 2", ["convenient"], "'very convenient'."),
        fb("Hueco 3", ["crowded"], "'always crowded'."),
        fb("Hueco 4", ["jams"], "'traffic jams'."),
        fb("Hueco 5", ["might", "may", "could", "will"], "posibilidad → might build."),
        fb("Hueco 6", ["should", "must", "could", "can"], "sugerencia."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a piensa mudarse a tu ciudad. Responde a su email (~100 palabras):\n· dile cómo es vivir en tu ciudad (ventajas y desventajas),\n· qué zona le recomiendas y por qué,\n· pregúntale qué busca.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it better to live in a city or in the countryside?' con tu opinión.\n· RELATO: empieza con: 'On my first day in the city, I got completely lost.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con un urbanista sobre las ciudades del futuro y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a city planner, Mr Ferro, about future cities. Interviewer: Mr Ferro, what will cities be like in the future? Mr Ferro: Well, I believe they'll be much greener. There may be gardens on every roof. Interviewer: And what about traffic? Mr Ferro: Public transport might become free, so fewer people will use cars. Interviewer: Will there be more people in cities? Mr Ferro: Yes, definitely. More than half the world already lives in cities, and that number is rising. Interviewer: Does that worry you? Mr Ferro: A little, but if we plan well, cities could be healthier, not worse. Interviewer: What can ordinary people do? Mr Ferro: Use public transport, walk more, and support green spaces.", [
      mc("What does Mr Ferro think future cities will be like?", ["Greyer.", "Much greener.", "Smaller."], 1, "'they'll be much greener'."),
      mc("What might happen to public transport?", ["It'll be expensive.", "It might become free.", "It'll disappear."], 1, "'might become free'."),
      mc("What is happening to city populations?", ["Falling.", "Rising.", "Staying the same."], 1, "'that number is rising'."),
      mc("How does he feel about it?", ["Very worried.", "A little worried, but hopeful if we plan well.", "Not at all."], 1, "'if we plan well, cities could be healthier'."),
      mc("What can ordinary people do?", ["Drive more.", "Use public transport and support green spaces.", "Nothing."], 1, "'Use public transport, walk more… support green spaces'."),
    ]),

    ...speakingParts("tu ciudad y cómo será en el futuro", { p1: "cómo es tu ciudad, qué te gusta y qué cambiarías", p2: "una ciudad (calles, transporte, gente)", p3: "qué mejora proponer para tu ciudad (parque, transporte, zona peatonal)", p4: "la vida en la ciudad y cómo serán las ciudades del futuro" }),

    SUMMARY("Resumen del Día 9", [
      "may/might/could + base: posibilidad (quizás pase). Negativa: might not/may not.",
      "'maybe' (adverbio) ≠ 'may be' (verbo).",
      "Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 10", "Escribe 3 predicciones sobre tu ciudad con may/might/could. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 10 ─────────────────────────
const DAY10 = {
  title: "Día 10 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del futuro, condicionales y posibilidad. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 2.",
  pedagogy: {
    objective: "Consolidar las formas de futuro, el first conditional y la posibilidad, y medir el progreso.",
    summary: "Repaso integrado del futuro; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 3."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 2 del B1. Consolidas el futuro y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 2", `1) Formas de futuro: will (predicción/decisión), going to (plan/predicción con pruebas), present continuous (cita).
2) Future continuous: will be + -ing. Oraciones de tiempo: presente tras when/as soon as/until.
3) First conditional: if + presente, will. unless = if not.
4) Posibilidad: may/might/could + base.`),
    grammarEx("Repaso mixto de gramática — Semana 2", "Completa o elige.", [
      fb("Look at the clouds — it ___ (rain)!", ["is going to rain", "'s going to rain"], "predicción con pruebas → going to."),
      mc("Decision now:", ["I'm going to answer it.", "I'll answer it.", "I answer it."], 1, "will."),
      fb("If you study, you ___ (pass).", ["will pass", "'ll pass"], "first conditional."),
      fb("I'll call you when I ___ (arrive).", ["arrive"], "presente tras when."),
      fb("It ___ (might/rain) later, take an umbrella.", ["might rain"], "posibilidad."),
      mc("'if you don't hurry' =", ["unless you hurry", "unless you don't hurry", "if you hurry"], 0, "unless you hurry."),
      fb("This time tomorrow I ___ (fly) to Rome.", ["will be flying", "'ll be flying"], "future continuous."),
      fb("Next year I ___ (study) engineering. (plan)", ["am going to study", "'m going to study"], "plan → going to."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 2", "Repasa los mazos (tecnología, medio ambiente, metas, ciudad)."),
    vocabEx("Repaso de vocabulario — Semana 2", "Elige la opción correcta.", [
      mc("To get the newest version of software:", ["update", "download", "connect"], 0, "update."),
      mc("Energy from the sun or wind:", ["renewable", "endangered", "wasted"], 0, "renewable."),
      mc("A strong desire to achieve something:", ["ambition", "opportunity", "goal"], 0, "ambition."),
      mc("Buses and trains:", ["public transport", "traffic jam", "suburb"], 0, "public transport."),
      mc("The total CO2 you produce:", ["carbon footprint", "climate change", "litter"], 0, "carbon footprint."),
      mc("To reach a goal:", ["achieve", "give up", "waste"], 0, "achieve."),
      mc("When cars can't move:", ["traffic jam", "green space", "pedestrian"], 0, "traffic jam."),
      mc("Old and no longer modern:", ["out of date", "reliable", "convenient"], 0, "out of date."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Notice: 'App will be updated tonight; service may be slow.'", ["Update tonight, maybe slow.", "No update.", "Fast service."], 0, "'may be slow'."),
        mc("Sign: 'You won't get a place unless you apply early.'", ["Apply early to get a place.", "No need to apply.", "Places for everyone."], 0, "'unless you apply early'."),
        mc("Poster: 'Plant a tree this Saturday — reduce your carbon footprint.'", ["Tree-planting event Saturday.", "No event.", "Cut down trees."], 0, "'Plant a tree… reduce your carbon footprint'."),
        mc("Alert: 'Heavy traffic — your bus could be 15 minutes late.'", ["The bus might be late.", "On time.", "No bus."], 0, "'could be 15 minutes late'."),
        mc("Text: 'If I pass the interview, I'll start next month!'", ["Will start if they pass.", "Already started.", "No interview."], 0, "'If I pass… I'll start'."),
      ] },
      p2text: "FOUR PREDICTIONS FOR THE FUTURE\n\nA) 'In the future, most cars will be electric and cities will be much cleaner.'\nB) 'I think we'll all work from home, so offices might disappear.'\nC) 'Robots may do dangerous jobs, so fewer people will get hurt at work.'\nD) 'Schools could change completely; students might learn online from anywhere.'",
      p2q: { title: "Emparejar personas y temas", items: [
        mc("Who is talking about transport and clean cities?", ["A", "B", "C", "D"], 0, "A."),
        mc("Who thinks offices might disappear?", ["A", "B", "C", "D"], 1, "B."),
        mc("Who talks about robots and safety at work?", ["A", "B", "C", "D"], 2, "C."),
        mc("Who talks about the future of education?", ["A", "B", "C", "D"], 3, "D."),
        mc("Who mentions working from home?", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "WHAT WILL WORK BE LIKE IN THE FUTURE?\n\nThe world of work is changing fast, and no one knows exactly what jobs will exist in twenty years. Some experts predict that robots and computers will do many of the tasks that humans do today. This worries a lot of people, who are afraid they will lose their jobs.\n\nHowever, history shows that when old jobs disappear, new ones are created. A hundred years ago, nobody had heard of a website designer or a social media manager. In the same way, the future will probably bring jobs that we can't even imagine yet. The important thing, experts say, is to keep learning. If we are willing to learn new skills, we'll always be able to find work.\n\nAnother big change may be where and how we work. Thanks to technology, more and more people are working from home, and this trend is likely to continue. In the future, you might work for a company on the other side of the world without ever leaving your bedroom. Work will be more flexible, but we'll need to be more organised and motivated than ever.",
      p3q: { title: "¿Cómo será el trabajo en el futuro? (texto largo)", items: [
        mc("What do some experts predict?", ["Nothing will change.", "Robots will do many human tasks.", "Everyone will stop working."], 1, "'robots and computers will do many of the tasks'."),
        mc("What does history show?", ["Jobs never change.", "New jobs are created when old ones disappear.", "All jobs disappear."], 1, "'new ones are created'."),
        mc("What do experts say is important?", ["To keep learning new skills.", "To stop studying.", "To avoid technology."], 0, "'keep learning'."),
        mc("How are more people working now?", ["From home.", "In big offices.", "Abroad only."], 0, "'working from home'."),
        mc("What will workers need to be in the future?", ["Less organised.", "More organised and motivated.", "Less flexible."], 1, "'more organised and motivated than ever'."),
      ] },
      p4text: "MY DREAM JOB\n\nEver since I was a child, I've known exactly what I want to do: I want to be a marine biologist. (1)___ I've always been fascinated by the ocean and the incredible creatures that live in it.\n\nOf course, it won't be easy. (2)___ I'll have to study hard at university for several years, and competition for jobs is tough. But I'm determined, and I know that if I work hard, I'll achieve my goal. (3)___\n\nMy dream is to work protecting endangered sea animals. (4)___ Our oceans are in danger from pollution and climate change, and I want to be part of the solution. Some people say I'm being unrealistic, but I disagree. (5)___ If you never try, you'll never know what you can achieve.",
      p4options: [
        "I used to spend hours watching nature documentaries.",       // A -> gap 1
        "I know the path ahead is long and difficult.",              // B -> gap 2
        "Nothing worth having ever comes easily.",                   // C -> gap 3
        "I believe this work really matters.",                       // D -> gap 4
        "I have decided to give up on this dream.",                  // E (extra)
        "I would rather try and fail than never try at all.",        // F -> gap 5
        "I have never been interested in the sea.",                  // G (extra)
        "The ocean is completely healthy and safe.",                 // H (extra)
      ],
      p4q: { title: "Mi trabajo soñado (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: veía documentales de naturaleza."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: el camino es largo y difícil."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: nada que valga la pena es fácil."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: este trabajo de verdad importa."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: prefiere intentarlo a no intentarlo."),
      ] },
      p5text: "Nobody knows what the future will bring, but we can make some predictions. Robots (1)___ do many jobs, so people will need to learn new (2)___. More of us will work from (3)___, using technology to connect with colleagues abroad. Cities (4)___ become greener, with electric cars and more green (5)___. The future is not decided; it depends on the (6)___ we make today.",
      p5q: { title: "Huecos con opciones (vocabulario/gramática)", items: [
        mc("Hueco 1", ["might", "must", "should", "would"], 0, "posibilidad → might do."),
        mc("Hueco 2", ["skills", "goals", "ambitions", "devices"], 0, "'learn new skills'."),
        mc("Hueco 3", ["home", "house", "office", "abroad"], 0, "'work from home'."),
        mc("Hueco 4", ["may", "must", "should", "would"], 0, "'Cities may become greener'."),
        mc("Hueco 5", ["spaces", "jams", "transport", "footprints"], 0, "'green spaces'."),
        mc("Hueco 6", ["choices", "jobs", "robots", "cities"], 0, "'the choices we make'."),
      ] },
      p6text: "Hi Sam,\nI've been thinking about my future a lot lately. I'm going (1)___ study marine biology because I want to protect the ocean. It won't be easy — I (2)___ have to study for years! But if I work hard, I'm sure I (3)___ achieve my goal. This time in ten years, I hope I (4)___ be working to save endangered animals. Some people say it's unrealistic, (5)___ I refuse to give (6)___. What do you want to do in the future?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["to"], "'going to study'."),
        fb("Hueco 2", ["will", "'ll"], "'I will have to study'."),
        fb("Hueco 3", ["will", "'ll", "can"], "'I will achieve'."),
        fb("Hueco 4", ["will", "'ll"], "'I will be working' (future continuous)."),
        fb("Hueco 5", ["but"], "contraste → but."),
        fb("Hueco 6", ["up"], "'give up'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus planes de futuro. Responde a su email (~100 palabras):\n· cuéntale qué vas a hacer o estudiar,\n· haz una predicción sobre tu futuro (will/might),\n· pregúntale por sus planes.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How will technology change our lives in the future?' con tus predicciones.\n· RELATO: empieza con: 'When I woke up, the world had completely changed.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: What are you going to study? Man: Engineering, if I get the grades. Two. Man: Do you think robots will take our jobs? Woman: Some, but new jobs will appear too. Three. Woman: Where will you work in the future? Man: From home, probably. Four. Man: What's your biggest ambition? Woman: To start my own business. Five. Man: It might rain for the marathon. Woman: I'll run anyway, rain or shine. Six. Woman: Will cities be greener in the future? Man: I hope so, with more parks.", [
      mc("1. What does the man want to study?", ["Medicine.", "Engineering.", "Law."], 1, "'Engineering, if I get the grades'."),
      mc("2. What does the woman think about robots?", ["They'll take all jobs.", "Some, but new jobs will appear.", "No jobs."], 1, "'new jobs will appear too'."),
      mc("3. Where will the man probably work?", ["In an office.", "From home.", "Abroad."], 1, "'From home, probably'."),
      mc("4. What is the woman's ambition?", ["To travel.", "To start her own business.", "To retire."], 1, "'To start my own business'."),
      mc("5. What will the woman do if it rains?", ["Stay home.", "Run anyway.", "Cancel."], 1, "'I'll run anyway'."),
      mc("6. What does the man hope for cities?", ["More traffic.", "More parks / greener.", "Fewer people."], 1, "'more parks'."),
    ]),

    ...speakingParts("tus planes, el futuro y tus ambiciones", { p1: "tus planes de futuro, qué te gustaría estudiar o hacer y por qué", p2: "personas en el futuro (tecnología, ciudad, trabajo)", p3: "qué habilidad aprender juntos para el futuro (idioma, informática…)", p4: "el futuro del trabajo, la tecnología y las ciudades" }),

    SUMMARY("Resumen de la Semana 2 (B1)", [
      "Dominas las formas de futuro, el future continuous, el first conditional y la posibilidad.",
      "Has practicado las 6 partes de Reading, Writing, Listening y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: comparación avanzada y cuantificadores.",
    ]),
    INFO("Mini-simulacro de la Semana 2", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 3."),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "El futuro y los planes",
  description: "Formas de futuro, future continuous, first conditional, unless y posibilidad (may/might/could). Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
