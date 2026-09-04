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

// ───────────────────────── DÍA 2 ─────────────────────────
const DAY2 = {
  title: "Día 2 — Present perfect vs past simple · Present perfect continuous",
  description: "Contraste present perfect / past simple y present perfect continuous. Vocabulario de trabajo y estudios. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Distinguir present perfect y past simple, y usar el present perfect continuous.",
    summary: "Present perfect vs past simple; present perfect continuous; trabajo/estudios; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["present perfect con tiempo pasado.", "usar simple donde va continuous (duración de actividad).", "'How long are you working here?'"],
    reviewPrompts: ["¿'I've worked' o 'I worked' con 'in 2020'?", "¿Cuándo present perfect continuous?"],
  },
  items: [
    TEXT("🔁 Repaso: for/since, just/already/yet. Hoy afinas cuándo usar present perfect y cuándo past simple, y aprendes el present perfect continuous (para la duración de una actividad)."),
    GRAMMAR("Present perfect vs past simple", `PRESENT PERFECT: conecta con el presente — experiencias sin cuándo, resultados, acciones que continúan (for/since).
· I've worked here for years (sigo aquí). Have you ever been to Rome?
PAST SIMPLE: acción TERMINADA con tiempo pasado concreto (yesterday, last year, in 2020, ago, when I was…).
· I worked in Rome in 2020. When did you arrive?
Pista: si dices o preguntas CUÁNDO exacto → past simple.`),
    GRAMMAR("Present perfect continuous", `have/has + been + verbo-ing. Para una ACTIVIDAD que empezó en el pasado y sigue (o acaba de terminar), enfatizando la DURACIÓN:
· I've been studying English for three years. (y sigo)
· She's tired because she's been running.
Con How long…?: How long have you been learning English?
Diferencia: present perfect (resultado: I've written three emails) vs continuous (actividad/duración: I've been writing emails all morning).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I've seen him yesterday → ✅ I saw him yesterday.\n· ❌ How long are you living here? → ✅ How long have you been living here?\n· ❌ I'm studying English for years → ✅ I've been studying English for years.\n· ❌ When have you arrived? → ✅ When did you arrive?"),
    grammarEx("Gramática — Perfect vs simple y continuous", "Completa o elige.", [
      mc("Choose:", ["I've finished it yesterday.", "I finished it yesterday.", "I finish it yesterday."], 1, "yesterday → past simple."),
      fb("How long ___ you ___ (study) English?", ["have", "been studying"], "duración → present perfect continuous."),
      fb("She's tired because she ___ (run).", ["has been running", "'s been running"], "actividad reciente → continuous."),
      fb("I ___ (work) here since 2019.", ["have worked", "'ve worked", "have been working", "'ve been working"], "for/since → perfect(o continuous)."),
      mc("Choose:", ["I've written three emails this morning.", "I've been written three emails.", "I written three emails."], 0, "resultado contable → present perfect."),
      fb("We ___ (go) to Paris in 2021.", ["went"], "in 2021 → past simple."),
      fb("They ___ (wait) for an hour and they're still waiting.", ["have been waiting", "'ve been waiting"], "duración que sigue → continuous."),
    ]),
    GRAMMAR("Vocabulario del día — Trabajo y estudios", "Léxico de trabajo y estudios (B1)."),
    deck("B1 S1D2 — Trabajo y estudios", [
      ["apply for", "solicitar (empleo)", "I've applied for three jobs.", "phrasal verb", "əˈplaɪ fə"],
      ["deadline", "fecha límite", "The deadline is on Friday.", "sustantivo", "ˈdedlaɪn"],
      ["experience", "experiencia", "She has a lot of experience.", "sustantivo", "ɪkˈspɪəriəns"],
      ["skill", "habilidad / destreza", "Communication is a key skill.", "sustantivo", "skɪl"],
      ["degree", "carrera / título", "He has a degree in law.", "sustantivo", "dɪˈɡriː"],
      ["part-time", "a tiempo parcial", "I have a part-time job.", "adjetivo", "ˌpɑːt ˈtaɪm"],
      ["colleague", "compañero/a de trabajo", "My colleagues are helpful.", "sustantivo", "ˈkɒliːɡ"],
      ["get on with", "avanzar con / llevarse bien", "I need to get on with my work.", "phrasal verb", "ɡet ˈɒn wɪð"],
      ["hand in", "entregar", "Hand in your project by Friday.", "phrasal verb", "hænd ˈɪn"],
      ["qualification", "titulación / cualificación", "You need a qualification for this.", "sustantivo", "ˌkwɒlɪfɪˈkeɪʃn"],
    ]),
    vocabEx("Vocabulario — Trabajo y estudios", "Elige la opción correcta.", [
      mc("To ask for a job officially is to ___ it.", ["apply for", "hand in", "get on"], 0, "apply for."),
      mc("The last day to submit work is the ___.", ["deadline", "degree", "skill"], 0, "deadline."),
      mc("To submit your work is to ___ it.", ["hand in", "apply for", "get on"], 0, "hand in."),
      mc("A university qualification is a ___.", ["degree", "skill", "deadline"], 0, "degree."),
      mc("A job of a few hours a day is ___.", ["part-time", "full-time", "deadline"], 0, "part-time."),
      mc("An ability you have is a ___.", ["skill", "degree", "colleague"], 0, "skill."),
    ]),

    ...readingParts({
      p1: { title: "En el trabajo y los estudios", items: [
        mc("Email: 'Please hand in your reports by 5 pm Friday.'", ["Submit reports by Friday 5 pm.", "No reports.", "Reports due Monday."], 0, "'hand in… by 5 pm Friday'."),
        mc("Job ad: 'Experience preferred but not essential.'", ["Experience helps but isn't required.", "Experience required.", "No experience allowed."], 0, "'preferred but not essential'."),
        mc("Notice: 'Library closes early during exam week.'", ["Earlier closing in exam week.", "Open later.", "Closed all week."], 0, "'closes early during exam week'."),
        mc("Text: 'I've applied for the manager job. Wish me luck!'", ["Applied for a job.", "Got the job.", "No job."], 0, "'I've applied for the manager job'."),
        mc("Sign: 'Staff meeting moved to Thursday.'", ["The meeting is now Thursday.", "No meeting.", "Cancelled."], 0, "'moved to Thursday'."),
      ] },
      p2text: "FOUR PART-TIME JOBS FOR STUDENTS\n\nA) Café Assistant — weekends only; friendly and quick; good for meeting people.\nB) Online Tutor — teach school subjects from home; flexible hours; need good knowledge.\nC) Shop Assistant — evenings; must be organised and polite with customers.\nD) Delivery Rider — active outdoor job; choose your own hours; a bike is needed.",
      p2q: { title: "Emparejar personas y trabajos", items: [
        mc("Nadia is only free at weekends and likes people.", ["A", "B", "C", "D"], 0, "Café: weekends, people."),
        mc("Omar wants to work from home teaching maths.", ["A", "B", "C", "D"], 1, "Online Tutor."),
        mc("Lucía is free in the evenings and is very organised.", ["A", "B", "C", "D"], 2, "Shop Assistant: evenings."),
        mc("Marco loves being outdoors and has a bike.", ["A", "B", "C", "D"], 3, "Delivery Rider."),
        mc("Someone who wants flexible hours and knows school subjects.", ["A", "B", "C", "D"], 1, "B: flexible, knowledge."),
      ] },
      p3text: "MY FIRST YEAR AT UNIVERSITY\n\nI've just finished my first year at university, and it has been the most challenging — and rewarding — year of my life. When I arrived last September, I felt nervous and a bit lonely. I didn't know anyone, and the workload was much heavier than at school.\n\nAt first, I struggled to manage my time. I missed a couple of deadlines because I left everything until the last minute. But I've learned a lot since then. Now I plan my week carefully, and I always hand in my work on time. I've also joined a study group, which has helped me understand difficult subjects.\n\nThe best part, though, has been the people. I've made friends from all over the world, and my flatmates have become like a second family. I've been working part-time in the university café too, which has improved my confidence and given me some extra money. Looking back, I'm proud of how much I've grown. I can't wait for next year.",
      p3q: { title: "Mi primer año en la universidad (texto largo)", items: [
        mc("How did the writer feel when they arrived?", ["Confident.", "Nervous and lonely.", "Bored."], 1, "'nervous and a bit lonely'."),
        mc("What problem did the writer have at first?", ["No money.", "Managing time / missing deadlines.", "No friends."], 1, "'struggled to manage my time… missed… deadlines'."),
        mc("What does the writer do now?", ["Leaves work late.", "Plans carefully and hands in work on time.", "Skips classes."], 1, "'plan my week… hand in my work on time'."),
        mc("What has helped with difficult subjects?", ["A tutor.", "A study group.", "The café."], 1, "'joined a study group'."),
        mc("How does the writer feel looking back?", ["Regretful.", "Proud.", "Angry."], 1, "'I'm proud of how much I've grown'."),
      ] },
      p4text: "STARTING A NEW JOB\n\nLast month I started a new job at a marketing company. (1)___ On my first day, I was so nervous that I arrived half an hour early. Everyone was very welcoming, though, and my new colleagues introduced themselves straight away. (2)___\n\nThe first week was a lot to take in. There were so many new names, systems and tasks to learn. (3)___ My manager told me not to worry and to ask questions whenever I needed to. That advice really helped me relax.\n\nNow, a month later, I feel much more confident. (4)___ I've already finished my first big project, and my boss was pleased with it. (5)___ I'm really glad I applied for this job.",
      p4options: [
        "They even took me out for lunch to make me feel part of the team.", // A -> gap 2
        "I had applied for it after months of searching.",                   // B -> gap 1
        "At times, I felt completely overwhelmed.",                          // C -> gap 3
        "I know where everything is and who to ask for help.",               // D -> gap 4
        "I decided to leave the company immediately.",                       // E (extra)
        "It has been a great start, and I'm learning something new every day.", // F -> gap 5
        "I have never used a computer before.",                              // G (extra)
        "The office was closed for the whole month.",                        // H (extra)
      ],
      p4q: { title: "Empezar un trabajo nuevo (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: había solicitado el puesto."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: le invitaron a comer (bienvenida)."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: se sintió abrumado."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: ya sabe dónde está todo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: buen comienzo, aprende cada día."),
      ] },
      p5text: "Finding a good job is not easy. First, you should write a clear CV that lists your (1)___ and experience. Then, when you see a job you like, you (2)___ for it online. If they invite you to an (3)___, arrive early and be polite. Show that you have the right (4)___ for the job. After the interview, it's normal to (5)___ nervous while you wait for an answer. Don't give up — the right job will come with (6)___.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["skills", "deadlines", "colleagues", "degrees"], 0, "'your skills and experience'."),
        mc("Hueco 2", ["apply", "hand", "get", "take"], 0, "'apply for it'."),
        mc("Hueco 3", ["interview", "exam", "deadline", "office"], 0, "'invite you to an interview'."),
        mc("Hueco 4", ["qualifications", "deadlines", "salaries", "hours"], 0, "'the right qualifications'."),
        mc("Hueco 5", ["feel", "make", "do", "have"], 0, "'feel nervous'."),
        mc("Hueco 6", ["patience", "money", "luck only", "experience"], 0, "'with patience'."),
      ] },
      p6text: "Hi Jo,\nGreat news — I've just got a new job! I've been looking (1)___ months, so I'm really happy. I applied (2)___ it online and had an interview last week. I've (3)___ started, and my colleagues are lovely. The only problem is the (4)___ — I have to hand in a big report by Friday! I've (5)___ been working really hard this week. How (6)___ things with you?\nSpeak soon,\nSam",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["for"], "'looking for months'."),
        fb("Hueco 2", ["for"], "'applied for it'."),
        fb("Hueco 3", ["just", "already"], "'I've just/already started'."),
        fb("Hueco 4", ["deadline"], "'the deadline'."),
        fb("Hueco 5", ["been"], "'I've been working'."),
        fb("Hueco 6", ["are"], "'How are things?'"),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus estudios o tu trabajo. Responde a su email (~100 palabras):\n· cuéntale qué estudias o en qué trabajas,\n· dile algo que te resulte difícil y cómo lo gestionas,\n· pregúntale por sus planes.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'The best way to study for exams' para la web del colegio, con consejos y razones.\n· RELATO: empieza con: 'It was the day of the interview, and Tom was very nervous.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. Choose the correct answer for each. One. Woman: Have you handed in your project? Man: Not yet, but I'll finish it tonight. Two. Woman: How's the new job? Man: Great, my colleagues are really friendly. Three. Man: Why are you so tired? Woman: I've been studying all night for my exam. Four. Woman: Did you get the job? Man: Yes! I start on Monday. Five. Man: What do you find hardest about university? Woman: Managing my time, definitely. Six. Woman: Have you ever worked part-time? Man: Yes, in a café last summer.", [
      mc("1. Has the man handed in his project?", ["Yes.", "Not yet.", "He won't do it."], 1, "'Not yet, but I'll finish it tonight'."),
      mc("2. What does the man say about his new job?", ["Boring.", "The colleagues are friendly.", "Too hard."], 1, "'my colleagues are really friendly'."),
      mc("3. Why is the woman tired?", ["She's ill.", "She's been studying all night.", "She worked late."], 1, "'studying all night'."),
      mc("4. Did the man get the job?", ["No.", "Yes, starts Monday.", "Interview pending."], 1, "'Yes! I start on Monday'."),
      mc("5. What does the woman find hardest?", ["Exams.", "Managing time.", "Making friends."], 1, "'Managing my time'."),
      mc("6. Where did the man work part-time?", ["A shop.", "A café.", "An office."], 1, "'in a café last summer'."),
    ]),

    ...speakingParts("tus estudios/trabajo, lo que se te da bien y tus planes", { p1: "qué estudias o en qué trabajas, qué se te da bien y tus planes de futuro", p2: "personas trabajando o estudiando (una oficina, una biblioteca)", p3: "qué trabajo a tiempo parcial elegir para un estudiante", p4: "el trabajo, los estudios y equilibrar las responsabilidades" }),

    SUMMARY("Resumen del Día 2", [
      "Present perfect (conexión con el presente) vs past simple (tiempo pasado concreto).",
      "Present perfect continuous: duración de una actividad (How long have you been…?).",
      "Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 3", "Escribe 2 frases con present perfect continuous (How long…?). Repasa las flashcards. Mañana: narración en pasado (past simple + past continuous + past perfect)."),
  ],
};

// ───────────────────────── DÍA 3 ─────────────────────────
const DAY3 = {
  title: "Día 3 — Narrar en pasado: past simple, continuous y past perfect",
  description: "Tiempos del pasado para contar historias (past simple/continuous/past perfect). Vocabulario de viajes. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Narrar una historia combinando past simple, past continuous y past perfect.",
    summary: "Narrative tenses; viajes; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["no usar past perfect para lo anterior.", "when/while con el tiempo equivocado.", "past perfect = 'había' + participio."],
    reviewPrompts: ["¿Qué tiempo para la acción anterior a otra pasada?", "when + ¿qué tiempo? / while + ¿qué tiempo?"],
  },
  items: [
    TEXT("🔁 Repaso: perfect vs simple. Hoy aprendes a NARRAR: combinar past simple (acciones), past continuous (fondo) y past perfect (lo anterior). Clave para el relato del Writing."),
    GRAMMAR("Los tiempos de la narración", `PAST SIMPLE: acciones terminadas y en secuencia (I arrived, I opened the door, I saw…).
PAST CONTINUOUS: acción de fondo en desarrollo (was/were + -ing): It was raining when I left.
· when + past simple (acción corta); while + past continuous (acción larga).
PAST PERFECT: had + participio — algo que ocurrió ANTES de otro momento pasado:
· When I arrived, the film had already started. (primero empezó, luego llegué)
Úsalos juntos para contar bien una historia: pon el fondo (continuous), lo previo (past perfect) y la secuencia (simple).`),
    WARN("Errores típicos del hispanohablante", "· ❌ When I arrived, the film already started → ✅ …had already started.\n· ❌ While I was cook, the phone rang → ✅ While I was cooking…\n· ❌ I have arrived late yesterday → ✅ I arrived late yesterday.\n· past perfect = 'había' + participio (had eaten = había comido)."),
    grammarEx("Gramática — Narrar en pasado", "Completa con el tiempo correcto.", [
      fb("When we arrived, the train ___ (already/leave).", ["had already left"], "anterior → past perfect."),
      fb("While she ___ (read), the lights went out.", ["was reading"], "fondo → past continuous."),
      fb("I ___ (open) the door and ___ (see) a letter.", ["opened", "saw"], "secuencia → past simple."),
      fb("He was tired because he ___ (not/sleep) well.", ["hadn't slept", "had not slept"], "causa anterior → past perfect."),
      mc("Choose:", ["When I arrived, they finished dinner.", "When I arrived, they had finished dinner.", "When I arrived, they were finish dinner."], 1, "anterior → had finished."),
      fb("It ___ (rain) when we left the house.", ["was raining"], "fondo → past continuous."),
      fb("She realised she ___ (forget) her keys.", ["had forgotten"], "anterior → past perfect."),
    ]),
    GRAMMAR("Vocabulario del día — Viajes", "Léxico de viajes (B1)."),
    deck("B1 S1D3 — Viajes", [
      ["journey", "trayecto / viaje", "The journey took ten hours.", "sustantivo", "ˈdʒɜːni"],
      ["abroad", "al extranjero", "I've never travelled abroad.", "adverbio", "əˈbrɔːd"],
      ["accommodation", "alojamiento", "The accommodation was excellent.", "sustantivo", "əˌkɒməˈdeɪʃn"],
      ["book in advance", "reservar con antelación", "We booked the hotel in advance.", "colocación", "bʊk ɪn ədˈvɑːns"],
      ["get lost", "perderse", "We got lost in the old town.", "phrasal verb", "ɡet ˈlɒst"],
      ["sightseeing", "hacer turismo", "We spent the day sightseeing.", "sustantivo", "ˈsaɪtsiːɪŋ"],
      ["delayed", "retrasado", "Our flight was delayed.", "adjetivo", "dɪˈleɪd"],
      ["luggage", "equipaje", "I lost my luggage at the airport.", "sustantivo", "ˈlʌɡɪdʒ"],
      ["set off", "ponerse en camino", "We set off early in the morning.", "phrasal verb", "set ˈɒf"],
      ["unforgettable", "inolvidable", "It was an unforgettable trip.", "adjetivo", "ˌʌnfəˈɡetəbl"],
    ]),
    vocabEx("Vocabulario — Viajes", "Elige la opción correcta.", [
      mc("To reserve early is to book ___.", ["in advance", "abroad", "lost"], 0, "in advance."),
      mc("To lose your way is to ___.", ["get lost", "set off", "book"], 0, "get lost."),
      mc("Where you stay on a trip is the ___.", ["accommodation", "journey", "luggage"], 0, "accommodation."),
      mc("To start a journey is to ___.", ["set off", "get lost", "book"], 0, "set off."),
      mc("When a flight is late, it's ___.", ["delayed", "abroad", "lost"], 0, "delayed."),
      mc("A trip you'll never forget is ___.", ["unforgettable", "delayed", "abroad"], 0, "unforgettable."),
    ]),

    ...readingParts({
      p1: { title: "Viajes y transporte", items: [
        mc("Airport screen: 'Flight BA210 delayed by 2 hours.'", ["The flight is two hours late.", "On time.", "Cancelled."], 0, "'delayed by 2 hours'."),
        mc("Hotel note: 'Breakfast included; check-out by 11 am.'", ["Free breakfast; leave by 11.", "No breakfast.", "Check-out at 1."], 0, "'included; check-out by 11 am'."),
        mc("Sign: 'Please keep your luggage with you at all times.'", ["Watch your bags.", "Leave your bags.", "No luggage."], 0, "'keep your luggage with you'."),
        mc("Text: 'We've booked the hotel in advance, so relax!'", ["The hotel is already booked.", "No hotel.", "Book it now."], 0, "'booked… in advance'."),
        mc("Notice: 'Free walking tours start at 10 from the square.'", ["Free tours at 10.", "No tours.", "Tours cost money."], 0, "'Free walking tours start at 10'."),
      ] },
      p2text: "FOUR HOLIDAY DESTINATIONS\n\nA) Rome — history, museums and amazing food; great for culture lovers who don't mind crowds.\nB) The Alps — hiking in summer, skiing in winter; perfect for active people who love nature.\nC) A Greek Island — quiet beaches and clear sea; ideal for relaxing and doing nothing.\nD) London — theatres, shopping and nightlife; exciting for young people who love cities.",
      p2q: { title: "Emparejar personas y destinos", items: [
        mc("Marta loves ancient history and great food.", ["A", "B", "C", "D"], 0, "Rome."),
        mc("Leo is very active and loves the mountains.", ["A", "B", "C", "D"], 1, "The Alps."),
        mc("Ana just wants to relax on a quiet beach.", ["A", "B", "C", "D"], 2, "Greek Island."),
        mc("Sam is young and loves theatres and nightlife.", ["A", "B", "C", "D"], 3, "London."),
        mc("Someone who wants nature and outdoor sport.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE TRIP THAT WENT WRONG\n\nLast summer, my sister and I went on a trip to Italy. We had planned it for months and had booked everything in advance, so we thought nothing could go wrong. We were mistaken!\n\nOur problems started at the airport. When we arrived, we discovered that our flight had been delayed by four hours. We waited and waited, tired and bored. Finally, we set off, but when we landed in Rome, my sister realised that the airline had lost her luggage. She had packed all her nice clothes for the trip, and now she had nothing!\n\nDespite everything, the holiday turned out wonderfully. While we were waiting for news about the luggage, we explored the city on foot. We got lost several times, but that's how we found the most beautiful little streets and cafés. My sister bought some new clothes, which she loved even more than her old ones. In the end, it was an unforgettable trip — not because everything was perfect, but because we learned to enjoy the surprises.",
      p3q: { title: "El viaje que salió mal (texto largo)", items: [
        mc("How had they prepared for the trip?", ["Badly.", "They'd planned and booked in advance.", "At the last minute."], 1, "'planned it for months and had booked everything in advance'."),
        mc("What happened at the airport?", ["They missed the flight.", "The flight was delayed four hours.", "Nothing."], 1, "'flight had been delayed by four hours'."),
        mc("What did the airline do?", ["Upgraded them.", "Lost the sister's luggage.", "Cancelled the flight."], 1, "'the airline had lost her luggage'."),
        mc("What did they do while waiting for the luggage?", ["Stayed at the hotel.", "Explored the city on foot.", "Went home."], 1, "'we explored the city on foot'."),
        mc("Why was it an unforgettable trip?", ["Everything was perfect.", "They learned to enjoy the surprises.", "It was cheap."], 1, "'we learned to enjoy the surprises'."),
      ] },
      p4text: "A NIGHT UNDER THE STARS\n\nLast year, I went camping in the mountains with two friends. (1)___ We had chosen a quiet spot next to a small lake, far from any town. After we had put up our tent, we made a fire and cooked dinner. (2)___\n\nAs the sun went down, the sky slowly filled with thousands of stars. (3)___ We lay on our backs and watched them for hours, talking quietly. I had never seen anything so beautiful in my life.\n\nSuddenly, we heard a noise in the bushes. (4)___ We were terrified! But when we shone our torch, we saw that it was only a small deer. We laughed with relief. (5)___ It was one of the best nights I have ever had.",
      p4options: [
        "It was the first time I had ever slept outdoors.",          // A -> gap 1
        "The food tasted amazing after our long walk.",             // B -> gap 2
        "There were no city lights to hide them.",                  // C -> gap 3
        "We all jumped up, our hearts beating fast.",               // D -> gap 4
        "We had forgotten to bring any food at all.",               // E (extra)
        "After that, we sat by the fire until we felt sleepy.",     // F -> gap 5
        "The hotel room was very comfortable.",                     // G (extra)
        "It rained heavily for the whole week.",                    // H (extra)
      ],
      p4q: { title: "Una noche bajo las estrellas (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: primera vez durmiendo fuera."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: la comida sabía genial."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: sin luces de ciudad."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: se levantaron asustados."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: se sentaron junto al fuego."),
      ] },
      p5text: "Travelling is one of the best ways to learn about the world. Before you go, it's a good idea to (1)___ your accommodation in advance. When you arrive, don't be afraid to (2)___ the city on foot — sometimes getting (3)___ leads to the best discoveries. Try the local food and go (4)___ to see the famous places. Even if your flight is (5)___ or you lose your (6)___, try to stay positive: the surprises often become the best stories.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["book", "get", "set", "take"], 0, "'book your accommodation'."),
        mc("Hueco 2", ["explore", "book", "delay", "pack"], 0, "'explore the city'."),
        mc("Hueco 3", ["lost", "delayed", "abroad", "unforgettable"], 0, "'getting lost'."),
        mc("Hueco 4", ["sightseeing", "shopping", "camping", "swimming"], 0, "'go sightseeing… famous places'."),
        mc("Hueco 5", ["delayed", "lost", "booked", "abroad"], 0, "'flight is delayed'."),
        mc("Hueco 6", ["luggage", "journey", "accommodation", "tent"], 0, "'lose your luggage'."),
      ] },
      p6text: "Hi Kim,\nI'm back from Italy! The trip didn't start well: our flight (1)___ delayed by four hours, and the airline lost my sister's luggage. She (2)___ packed all her best clothes! (3)___ everything, we had a wonderful time. (4)___ we were waiting for news, we explored Rome on foot. We got lost, (5)___ that's how we found the best cafés! It was (6)___ unforgettable trip.\nLove,\nSam",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["was"], "'was delayed'."),
        fb("Hueco 2", ["had"], "'She had packed' (anterior → past perfect)."),
        fb("Hueco 3", ["Despite"], "'Despite everything'."),
        fb("Hueco 4", ["While"], "'While we were waiting'."),
        fb("Hueco 5", ["but"], "contraste → but."),
        fb("Hueco 6", ["an"], "'an unforgettable trip'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por un viaje reciente. Responde a su email (~100 palabras):\n· cuéntale adónde fuiste y con quién,\n· describe algo que salió mal o una sorpresa,\n· pregúntale por sus vacaciones.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Tips for travelling on a budget' con 2–3 consejos y razones.\n· RELATO: empieza con: 'When we arrived at the airport, we knew something was wrong.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre una excursión y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear a tour guide giving information about a day trip. Good morning, everyone. Welcome to our day trip to the mountains. The coach will leave at eight o'clock sharp, so please don't be late. The journey takes about two hours. We'll stop for lunch in a village called Greenford. Remember to bring comfortable shoes and a raincoat, because the weather can change quickly. The trip costs thirty-five pounds, which includes lunch. We'll be back in the city by six o'clock in the evening.", [
      fb("The coach leaves at ___ o'clock.", ["eight", "8"], "'leave at eight o'clock'."),
      fb("The journey takes about ___ hours.", ["two", "2"], "'about two hours'."),
      fb("Lunch stop in a village called ___.", ["Greenford"], "'a village called Greenford'."),
      fb("Bring comfortable shoes and a ___.", ["raincoat"], "'a raincoat'."),
      fb("The trip costs ___ pounds.", ["thirty-five", "35"], "'thirty-five pounds'."),
    ]),

    ...speakingParts("un viaje que hiciste, adónde te gusta ir y por qué", { p1: "un viaje reciente, adónde te gusta viajar y cómo prefieres hacerlo", p2: "personas de vacaciones (una playa, una ciudad, la montaña)", p3: "qué destino elegir para un viaje de fin de curso con la clase", p4: "los viajes, sus ventajas y aprender de otras culturas" }),

    SUMMARY("Resumen del Día 3", [
      "Narrar: past simple (secuencia), past continuous (fondo), past perfect (lo anterior).",
      "when + past simple; while + past continuous.",
      "Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 4", "Escribe una mini-historia (5 frases) usando los tres tiempos del pasado. Repasa las flashcards. Mañana: used to / would (hábitos del pasado)."),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Estilo de vida y experiencias",
  description: "Presentes, present perfect y su contraste con el pasado; narración. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY1, DAY2, DAY3],
};
