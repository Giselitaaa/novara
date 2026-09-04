/**
 * B1 Preliminary · Semana 1 — "Estilo de vida y experiencias".
 * Gramática: repaso de presentes, present perfect vs past simple, present perfect
 * continuous, narración en pasado, used to/would. Cada día, las 4 destrezas con
 * el formato real del B1 (Reading P1–P6 incl. gapped text; Writing ~100 palabras;
 * Listening; Speaking P1–P4).
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, reading, gappedText, writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD,
  READING_P1, mc, fb,
} from "./_lib.mjs";

// Bloques comunes de Reading para B1 (mismo formato, distinto texto cada día).
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle sobre uno mismo", "I'm from, I've been … -ing, I usually, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto (qué ves, qué hace la gente, dónde están).", `Parte 2 del B1: describir una fotografía sobre ${p2}. Di qué hay, qué hacen las personas, dónde y cómo crees que se sienten`, "describir una imagen con detalle usando present continuous y there is/are", "there is, there are, in the picture, they're … -ing, it looks"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}, comentando las opciones`, "hacer sugerencias, dar opiniones y llegar a un acuerdo", "how about, why don't we, I think, shall we, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa sobre el tema dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4} (gustos, experiencias, opiniones)`, "dar opiniones y razones sobre el tema", "in my opinion, I prefer, because, I think, for example"),
];

// ───────────────────────── DÍA 1 ─────────────────────────
const DAY1 = {
  title: "Día 1 — Presentes y present perfect · Estilo de vida",
  description: "Repaso de present simple/continuous y present perfect. Vocabulario de estilo de vida. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Repasar los presentes y el present perfect y hablar de tu estilo de vida.",
    summary: "Presentes; present perfect; estilo de vida; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'since' con periodo (since two years).", "present perfect con tiempo pasado.", "verbos de estado en continuous."],
    reviewPrompts: ["¿for o since con '2019'?", "¿present perfect o past simple con 'yesterday'?"],
  },
  items: [
    TEXT("👋 Bienvenido/a al B1. Cada día es una clase completa (~1½ h): gramática y vocabulario, y práctica de las CUATRO destrezas con el formato real del examen. Hoy repasamos los presentes y el present perfect."),
    GRAMMAR("Repaso de presentes", `PRESENT SIMPLE: rutinas, hechos, horarios (I work from home). Verbos de estado (like, know, want) van en simple, no en continuous.
PRESENT CONTINUOUS: acciones de ahora o temporales (I'm working on a project this month), y tendencias que cambian (Prices are rising).
Señales: usually/every day → simple; now/at the moment/these days → continuous.`),
    GRAMMAR("Present perfect (repaso) — for/since, just/already/yet", `have/has + participio. Une el pasado con el presente:
· Experiencias sin decir cuándo: I've visited London twice.
· Acciones que continúan: I've lived here for five years / since 2019.
  · for + periodo (for five years); since + inicio (since 2019).
· just (acabar de), already (ya), yet (todavía/ya, en neg./preg.): I've just finished. Have you eaten yet?
Con un tiempo pasado concreto (yesterday, in 2019) → PAST SIMPLE, no present perfect.`),
    WARN("Errores típicos del hispanohablante", "· ❌ since two years → ✅ for two years.\n· ❌ I've seen it yesterday → ✅ I saw it yesterday.\n· ❌ I'm knowing / wanting → ✅ I know / I want.\n· ❌ I have finished yet → ✅ I've already finished / I haven't finished yet."),
    grammarEx("Gramática — Presentes y present perfect", "Completa o elige.", [
      fb("I ___ (live) in Madrid since 2018.", ["have lived", "'ve lived"], "since → present perfect."),
      fb("At the moment I ___ (study) for an exam.", ["am studying", "'m studying"], "at the moment → continuous."),
      fb("She ___ (know) the answer.", ["knows"], "verbo de estado → simple."),
      mc("Choose:", ["I've seen that film yesterday.", "I saw that film yesterday.", "I seen that film yesterday."], 1, "yesterday → past simple."),
      fb("We've been friends ___ ten years.", ["for"], "periodo → for."),
      fb("Have you finished your homework ___?", ["yet"], "pregunta → yet."),
      fb("Prices ___ (rise) fast these days.", ["are rising"], "tendencia temporal → continuous."),
      mc("Choose:", ["I've just arrive.", "I've just arrived.", "I just arrive."], 1, "just + participio."),
    ]),
    GRAMMAR("Vocabulario del día — Estilo de vida", "Hábitos y estilo de vida (nivel B1)."),
    deck("B1 S1D1 — Estilo de vida", [
      ["routine", "rutina", "I have a busy morning routine.", "sustantivo", "ruːˈtiːn"],
      ["commute", "desplazarse al trabajo", "I commute by train every day.", "verbo", "kəˈmjuːt"],
      ["work-life balance", "conciliación", "A good work-life balance is important.", "colocación", "ˌwɜːk laɪf ˈbæləns"],
      ["healthy", "saludable", "I try to have a healthy lifestyle.", "adjetivo", "ˈhelθi"],
      ["stressful", "estresante", "My job can be stressful.", "adjetivo", "ˈstresfl"],
      ["cut down on", "reducir (consumo)", "I've cut down on coffee.", "phrasal verb", "kʌt ˈdaʊn ɒn"],
      ["take up", "empezar (una afición)", "I've taken up yoga.", "phrasal verb", "teɪk ˈʌp"],
      ["get into shape", "ponerse en forma", "I want to get into shape.", "colocación", "ɡet ɪntə ˈʃeɪp"],
      ["spare time", "tiempo libre", "In my spare time I paint.", "colocación", "speə ˈtaɪm"],
      ["habit", "hábito / costumbre", "Reading is a good habit.", "sustantivo", "ˈhæbɪt"],
    ]),
    vocabEx("Vocabulario — Estilo de vida", "Elige la opción correcta.", [
      mc("To travel to work every day is to ___.", ["commute", "cut down", "take up"], 0, "commute."),
      mc("To reduce how much of something you consume is to ___ it.", ["cut down on", "take up", "get into"], 0, "cut down on."),
      mc("To start a new hobby is to ___ it.", ["take up", "commute", "cut down"], 0, "take up."),
      mc("A balance between work and personal life is ___.", ["work-life balance", "routine", "habit"], 0, "work-life balance."),
      mc("A job with a lot of pressure is ___.", ["stressful", "healthy", "spare"], 0, "stressful."),
      mc("Free time is your ___.", ["spare time", "routine", "commute"], 0, "spare time."),
    ]),

    ...readingParts({
      p1: { title: "Avisos y mensajes", items: [
        mc("Gym notice: 'New members: first fitness class free this week.'", ["A free class for new members.", "All classes are free.", "No classes."], 0, "'first fitness class free'."),
        mc("Text: 'I've taken up running to reduce stress. Want to join?'", ["An invitation to run together.", "Giving up running.", "No running."], 0, "'taken up running… Want to join?'"),
        mc("Sign: 'Please switch off machines after use.'", ["Turn machines off when done.", "Leave them on.", "No machines."], 0, "'switch off… after use'."),
        mc("Email: 'Your yoga class has moved to Thursdays.'", ["Yoga is now on Thursdays.", "Yoga cancelled.", "Same day."], 0, "'moved to Thursdays'."),
        mc("Note: 'Healthy lunches now served in the canteen.'", ["Healthy food is available.", "No food.", "Only snacks."], 0, "'Healthy lunches now served'."),
      ] },
      p2text: "FOUR EVENING CLASSES\n\nA) Mindful Yoga — relax and reduce stress; perfect after a busy day. Beginners welcome.\nB) HIIT Fitness — a hard, fast workout to get into shape quickly. For people with some experience.\nC) Healthy Cooking — learn to prepare quick, healthy meals for the week.\nD) Running Club — group runs at different levels, with a friendly coach.",
      p2q: { title: "Emparejar personas y clases", items: [
        mc("Ana feels very stressed and wants to relax.", ["A", "B", "C", "D"], 0, "Mindful Yoga."),
        mc("Ben wants an intense workout to get fit fast.", ["A", "B", "C", "D"], 1, "HIIT Fitness."),
        mc("Sara wants to eat better during her busy week.", ["A", "B", "C", "D"], 2, "Healthy Cooking."),
        mc("Leo enjoys running with others and wants a coach.", ["A", "B", "C", "D"], 3, "Running Club."),
        mc("Someone new to exercise who wants to de-stress.", ["A", "B", "C", "D"], 0, "A: beginners, stress."),
      ] },
      p3text: "CHANGING MY LIFESTYLE\n\nA year ago, my life was very unhealthy. I worked long hours, I never did any exercise, and I ate fast food almost every day. I often felt tired and stressed, and I knew something had to change.\n\nSo I made some small decisions. First, I cut down on fast food and started cooking simple meals at home. Then I took up cycling to work instead of driving. At first, the twenty-minute ride was hard, but now I really enjoy it — it wakes me up and saves money too.\n\nThe biggest change has been my free time. I used to spend every evening watching TV, but now I go to a running club twice a week. I've made new friends there, and I feel much more energetic. I've lost some weight, but more importantly, I feel happier. My advice to anyone who feels stuck is simple: don't try to change everything at once. Start with one small habit, and the rest will follow.",
      p3q: { title: "Un cambio de vida (texto largo)", items: [
        mc("How was the writer's life a year ago?", ["Healthy.", "Unhealthy and stressful.", "Relaxed."], 1, "'very unhealthy… tired and stressed'."),
        mc("What did the writer do about food?", ["Ate more fast food.", "Cut down on fast food and cooked at home.", "Stopped eating."], 1, "'cut down on fast food… cooking… at home'."),
        mc("How does the writer travel to work now?", ["By car.", "By bike.", "By bus."], 1, "'took up cycling to work'."),
        mc("What does the writer do twice a week?", ["Watch TV.", "Go to a running club.", "Work late."], 1, "'a running club twice a week'."),
        mc("What is the writer's main advice?", ["Change everything at once.", "Start with one small habit.", "Don't change."], 1, "'Start with one small habit'."),
      ] },
      p4text: "A NEW MORNING ROUTINE\n\nSix months ago, I decided to change my mornings. (1)___ Now, I wake up an hour earlier than before. The first thing I do is drink a glass of water and stretch for five minutes. (2)___ After that, I go for a short walk around my neighbourhood.\n\nWhen I get home, I make a healthy breakfast and plan my day. (3)___ I used to check my phone immediately, but now I wait until after breakfast. This small change has made me feel calmer. (4)___ My friends say I seem more relaxed and focused.\n\nOf course, it isn't always easy, especially in winter. (5)___ But on those days, I remind myself how good I feel afterwards, and I get up anyway.",
      p4options: [
        "It helps me wake up my body gently.",           // A -> gap 2
        "Some mornings, it's very hard to leave my warm bed.", // B -> gap 5
        "I was tired of feeling rushed and stressed every day.", // C -> gap 1
        "This gives my day a clear structure.",           // D -> gap 3
        "I have completely stopped exercising.",          // E (extra)
        "I even have more energy at work.",               // F -> gap 4
        "I never eat breakfast at all.",                  // G (extra)
        "My boss gave me a new project.",                 // H (extra)
      ],
      p4q: { title: "Una nueva rutina matinal (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: por qué decidió cambiar."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: el estiramiento despierta el cuerpo."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: planificar da estructura."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: más energía en el trabajo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: mañanas difíciles."),
      ] },
      p5text: "Many people want to live a (1)___ life, but they don't know where to start. The secret is not to make huge changes, but to build small (2)___. For example, you could (3)___ down on sugar, or (4)___ up a new sport. Cycling to work is a great way to (5)___ into shape, and it also reduces (6)___.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["healthy", "healthily", "health", "healthier"], 0, "adjetivo + noun → healthy life."),
        mc("Hueco 2", ["habits", "routines", "hobbies", "rules"], 0, "'build small habits'."),
        mc("Hueco 3", ["cut", "take", "get", "put"], 0, "'cut down on sugar'."),
        mc("Hueco 4", ["take", "cut", "get", "give"], 0, "'take up a new sport'."),
        mc("Hueco 5", ["get", "make", "do", "have"], 0, "'get into shape'."),
        mc("Hueco 6", ["stress", "stressful", "stressed", "stressing"], 0, "sustantivo → stress."),
      ] },
      p6text: "Hi Sam,\nThank you (1)___ your message! You asked about my new lifestyle. I've been much healthier (2)___ January. I've cut (3)___ on fast food and I cycle to work every day. At first it (4)___ hard, but now I love it. I've (5)___ made lots of new friends at my running club. Why don't you (6)___ up a sport too?\nBest wishes,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["for"], "'Thank you for'."),
        fb("Hueco 2", ["since"], "'since January'."),
        fb("Hueco 3", ["down"], "'cut down on'."),
        fb("Hueco 4", ["was"], "'it was hard'."),
        fb("Hueco 5", ["also"], "'I've also made'."),
        fb("Hueco 6", ["take"], "'take up a sport'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te ha escrito preguntando por tus hábitos saludables. Responde a su email (unas 100 palabras). En tu respuesta:\n· cuéntale qué haces para estar sano/a,\n· dile qué hábito has cambiado y por qué,\n· pregúntale por sus hábitos.\nEmpieza 'Hi …,' y usa párrafos.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (unas 100 palabras):\n· ARTÍCULO: 'How to have a healthy lifestyle' para la revista del colegio. Da 2–3 consejos con razones.\n· RELATO: empieza con esta frase: 'When Maria woke up that morning, she decided to change her life.' Cuenta qué pasó.", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta (aquí, la descripción correcta).", "This is Part One. You will hear people talking in seven different situations. For each question, choose the correct answer. One. Woman: How do you get to work? Man: I used to drive, but now I cycle — it's healthier. Two. Woman: What time do you get up? Man: At six, so I can go for a run before work. Three. Man: What did you have for lunch? Woman: Just a salad; I'm cutting down on fast food. Four. Woman: What have you taken up recently? Man: Yoga — it really helps me relax. Five. Man: How long have you lived here? Woman: For about five years now. Six. Woman: Why do you look so tired? Man: I've been working late all week. Seven. Man: What do you do in your spare time? Woman: I paint; it's very relaxing.", [
      mc("1. How does the man get to work now?", ["He drives.", "He cycles.", "He walks."], 1, "'now I cycle'."),
      mc("2. Why does the man get up at six?", ["To go to work early.", "To go for a run.", "To have breakfast."], 1, "'go for a run before work'."),
      mc("3. What did the woman have for lunch?", ["Fast food.", "A salad.", "Nothing."], 1, "'Just a salad'."),
      mc("4. What has the man taken up?", ["Running.", "Yoga.", "Cycling."], 1, "'Yoga'."),
      mc("5. How long has the woman lived there?", ["Five months.", "About five years.", "Ten years."], 1, "'about five years'."),
      mc("6. Why is the man tired?", ["He's ill.", "He's been working late.", "He didn't sleep."], 1, "'working late all week'."),
      mc("7. What does the woman do in her spare time?", ["She runs.", "She paints.", "She cooks."], 1, "'I paint'."),
    ]),

    ...speakingParts("tu rutina, tu trabajo/estudios y tu tiempo libre", { p1: "tu rutina diaria, cómo te mantienes sano/a y tu tiempo libre", p2: "personas haciendo deporte o actividades al aire libre", p3: "qué actividad saludable organizar para un grupo de amigos", p4: "la vida sana y cómo la gente equilibra trabajo y ocio" }),

    SUMMARY("Resumen del Día 1", [
      "Presentes: simple (rutinas/estado) vs continuous (ahora/temporal).",
      "Present perfect: for/since, just/already/yet; con tiempo pasado → past simple.",
      "Has practicado las 6 partes de Reading, Writing P1–P2, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 2", "Escribe 3 frases sobre cambios recientes en tu vida (present perfect). Repasa las flashcards. Mañana: present perfect vs past simple y present perfect continuous."),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Estilo de vida y experiencias",
  description: "Presentes, present perfect y su contraste con el pasado. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY1],
};
