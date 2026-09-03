/**
 * A2 Key · Semana 4 — "El futuro y los planes".
 * Gramática: going to, present continuous de futuro, will, modales
 * (can/could/might, must/have to/should). Vocabulario: trabajo, salud, deporte,
 * educación. Cada día, las 4 destrezas con formato Cambridge.
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, reading, writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD,
  mc, fb,
} from "./_lib.mjs";

const READING_P1 = (title, items) => {
  const text = "Lee estos seis mensajes:\n\n" + items.map((q, i) => `${i + 1}.  ${q.data.prompt}`).join("\n\n");
  const questions = items.map((q, i) => ({ ...q, data: { ...q.data, prompt: `Mensaje ${i + 1}: ¿qué significa?` } }));
  return reading(1, `Reading · Parte 1 — ${title}`, text, "Lee los seis textos cortos del recuadro y elige qué significa cada uno (A/B/C).", questions);
};

const DAY16 = {
  title: "Día 16 — Futuro con 'going to' · El trabajo",
  description: "going to (planes e intenciones) y present continuous de futuro. Vocabulario: el trabajo. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Hablar de planes e intenciones con going to y de citas con present continuous.",
    summary: "going to; present continuous de futuro; el trabajo; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'I'm going to shopping'.", "olvidar 'be' (I going to).", "usar present simple para planes."],
    reviewPrompts: ["¿'going to' + qué forma del verbo?", "¿Cómo dices una cita concreta de mañana?"],
  },
  items: [
    TEXT("🔁 Semana 4. Ya manejas presente, pasado y comparación; ahora hablas del FUTURO. Hoy: planes con 'going to'. Practicarás las 4 destrezas."),
    GRAMMAR("Futuro: 'going to' y present continuous", `'GOING TO' — planes e intenciones (decididos antes de hablar):
· be (am/is/are) + going to + verbo BASE.
· I'm going to study medicine. · She's going to travel this summer. · Are you going to come?
· También para predicciones con pruebas: Look at those clouds — it's going to rain.

PRESENT CONTINUOUS de futuro — citas y arreglos concretos (con hora/día):
· I'm meeting Ana at six tomorrow. · We're flying to Rome on Friday.

Diferencia sencilla: 'going to' = intención; present continuous = ya organizado (con fecha/hora).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I going to work → ✅ I'm going to work (falta 'be').\n· ❌ I'm going to shopping → ✅ I'm going to go shopping.\n· ❌ I go to the doctor tomorrow at 5 → ✅ I'm going to the doctor tomorrow at 5.\n· ❌ She's going to studies → ✅ She's going to study (base)."),
    grammarEx("Gramática — going to / present continuous", "Completa con la forma correcta.", [
      fb("I ___ (going to / study) medicine next year.", ["am going to study", "'m going to study"], "be + going to + base."),
      fb("She ___ (going to / travel) around Europe.", ["is going to travel", "'s going to travel"], "is going to travel."),
      fb("Look at the sky! It ___ (going to / rain).", ["is going to rain", "'s going to rain"], "predicción con pruebas."),
      mc("Choose (arranged for tomorrow):", ["I meet Ana at six.", "I'm meeting Ana at six tomorrow.", "I going to meet Ana."], 1, "present continuous de futuro."),
      fb("___ you ___ (going to / watch) the match?", ["Are", "going to watch"], "Are you going to watch?"),
      mc("Choose the correct one:", ["We're going to shopping.", "We're going to go shopping.", "We going to shop."], 1, "going to go shopping."),
      fb("They ___ (fly) to Paris on Monday. (arreglado)", ["are flying", "'re flying"], "present continuous de futuro."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo", "Profesiones y palabras del mundo laboral."),
    deck("A2 Key S4D16 — El trabajo", [
      ["job", "trabajo (empleo)", "She has a great job.", "sustantivo", "dʒɒb"],
      ["boss", "jefe/a", "My boss is very fair.", "sustantivo", "bɒs"],
      ["salary", "sueldo", "The salary is good.", "sustantivo", "ˈsæləri"],
      ["colleague", "compañero/a de trabajo", "My colleagues are friendly.", "sustantivo", "ˈkɒliːɡ"],
      ["interview", "entrevista", "I have a job interview tomorrow.", "sustantivo", "ˈɪntəvjuː"],
      ["earn", "ganar (dinero)", "He earns a lot of money.", "verbo", "ɜːn"],
      ["employee", "empleado/a", "The company has 50 employees.", "sustantivo", "ɪmˈplɔɪiː"],
      ["office", "oficina", "I work in an office.", "sustantivo", "ˈɒfɪs"],
      ["retire", "jubilarse", "My father will retire next year.", "verbo", "rɪˈtaɪə"],
      ["apply for", "solicitar (un empleo)", "I applied for a new job.", "phrasal verb", "əˈplaɪ fə"],
    ]),
    vocabEx("Vocabulario — El trabajo", "Elige la opción correcta.", [
      mc("The money you get for working is your ___.", ["salary", "boss", "office"], 0, "salary."),
      mc("The person in charge of you at work is your ___.", ["boss", "colleague", "employee"], 0, "boss."),
      mc("A meeting to get a job is an ___.", ["office", "interview", "employee"], 1, "interview."),
      mc("People you work with are your ___.", ["bosses", "colleagues", "salaries"], 1, "colleagues."),
      mc("To ask for a job officially is to ___ it.", ["apply for", "earn", "retire"], 0, "apply for."),
      mc("To stop working because of your age is to ___.", ["earn", "retire", "apply"], 1, "retire."),
    ]),

    READING_HEAD,
    READING_P1("El trabajo y avisos", [
      mc("Job ad: 'Now hiring — no experience needed. Apply online.'", ["A job for beginners, apply online.", "Experience required.", "No jobs."], 0, "'no experience needed. Apply online'."),
      mc("Email: 'Your interview is on Tuesday at 10 am.'", ["An interview on Tuesday.", "No interview.", "Interview cancelled."], 0, "'interview is on Tuesday'."),
      mc("Office note: 'Meeting moved to Room 3.'", ["The meeting is in Room 3.", "No meeting.", "Meeting cancelled."], 0, "'moved to Room 3'."),
      mc("Sign: 'Staff only beyond this point.'", ["Only workers can enter.", "Everyone can enter.", "Closed."], 0, "'Staff only'."),
      mc("Message: 'Boss wants the report by Friday.'", ["Finish the report before Friday.", "No report needed.", "The report is done."], 0, "'wants the report by Friday'."),
      mc("Note: 'Please clock in before 9 am.'", ["Arrive and register before 9.", "Start at 10.", "No need to arrive early."], 0, "'clock in before 9 am'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y trabajos", "THREE JOB ADVERTS\n\nA) Café Assistant — friendly person to serve coffee and cakes. Weekends only. Good for students.\n\nB) Office Manager — organised person to run a busy office. Full-time, good salary, experience needed.\n\nC) Dog Walker — active person to walk dogs in the park every morning. Flexible hours.", "Empareja cada persona con el trabajo ideal (A/B/C).", [
      mc("A student who is only free at weekends.", ["A", "B", "C"], 0, "Café Assistant: weekends."),
      mc("An experienced person who wants a full-time job.", ["A", "B", "C"], 1, "Office Manager."),
      mc("An active person who loves animals and mornings.", ["A", "B", "C"], 2, "Dog Walker."),
      mc("Someone who wants a good salary and works full-time.", ["A", "B", "C"], 1, "B: good salary, full-time."),
      mc("Someone who wants flexible hours outdoors.", ["A", "B", "C"], 2, "C: flexible, park."),
      mc("A friendly person who likes serving customers.", ["A", "B", "C"], 0, "A: serve coffee."),
      mc("A person with office experience.", ["A", "B", "C"], 1, "B: experience needed."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY PLANS FOR THE FUTURE\n\nNext month, I'm going to finish school, and I'm really excited about my plans. First, I'm going to take a year off to travel. I'm flying to Australia in September with my best friend, and we're going to work in cafés and on farms to earn some money.\n\nAfter that, I'm going to start university. I want to study engineering, because I'm good at maths and I'd like a job that pays well. My parents think it's a great idea, although my mother is a little worried about the long flight.\n\nIn ten years, I hope I'm going to have an interesting job and maybe my own company. But right now, I just want to enjoy my trip and see the world. The future is exciting!", "Lee el texto y responde (A/B/C).", [
      mc("What is the writer going to do first?", ["Start university.", "Travel for a year.", "Get an office job."], 1, "'take a year off to travel'."),
      mc("How will they earn money in Australia?", ["Working in cafés and farms.", "Teaching.", "Selling things."], 0, "'work in cafés and on farms'."),
      mc("What does the writer want to study?", ["Medicine.", "Engineering.", "Art."], 1, "'study engineering'."),
      mc("Why does the mother worry?", ["The cost.", "The long flight.", "The job."], 1, "'worried about the long flight'."),
      mc("What does the writer hope for in ten years?", ["To travel again.", "An interesting job / own company.", "To stay at home."], 1, "'an interesting job and maybe my own company'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Next year I'm going to (1)___ for a new job. I want a better (2)___ because I need to earn more money. First, I'm going to write a good CV. Then I hope I'll get an (3)___ with the manager. My current (4)___ is nice, but the (5)___ is quite low. If I get the job, I'm going to (6)___ in a bigger office.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["apply", "retire", "earn"], 0, "'apply for a new job'."),
      mc("Hueco 2", ["job", "boss", "office"], 0, "'a better job'."),
      mc("Hueco 3", ["interview", "employee", "salary"], 0, "'an interview'."),
      mc("Hueco 4", ["boss", "salary", "interview"], 0, "'My current boss is nice'."),
      mc("Hueco 5", ["salary", "office", "colleague"], 0, "'the salary is quite low'."),
      mc("Hueco 6", ["work", "earn", "apply"], 0, "'work in a bigger office'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sam,\nBig news! I'm going (1)___ leave my job next month. I've decided to (2)___ for a new one in a different company. The salary (3)___ be much better, and the office is nearer my house. I'm (4)___ an interview next Tuesday, so wish me luck! I'm a bit nervous, (5)___ also very excited. I'll tell you (6)___ it goes!\nSpeak soon,\nJo", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'going to leave'."),
      fb("Hueco 2", ["apply"], "'apply for a new one'."),
      fb("Hueco 3", ["will", "'ll"], "'will be much better'."),
      fb("Hueco 4", ["having"], "'having an interview' (arreglo futuro)."),
      fb("Hueco 5", ["but"], "contraste → but."),
      fb("Hueco 6", ["how"], "'how it goes'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tus planes de futuro", "Tu amigo/a inglés/a quiere saber tus planes. Escríbele un email (25 palabras o más) con:\n· qué vas a hacer el año que viene,\n· qué trabajo te gustaría,\n· por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona lee un anuncio de trabajo.\n2) Va a una entrevista, nerviosa.\n3) Recibe una llamada con buenas noticias y celebra.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: What are you going to do after school? Man: I'm going to travel for a year before university. Two. Woman: Have you got the job? Man: I don't know yet — my interview is on Friday. Three. Man: What time are we meeting tomorrow? Woman: At half past ten, outside the office. Four. Woman: Is it going to rain later? Man: I think so — look at those dark clouds. Five. Man: What are you doing this weekend? Woman: I'm visiting my grandmother on Saturday.", [
      mc("1. What is the man going to do after school?", ["Start university.", "Travel for a year.", "Get a job."], 1, "'travel for a year'."),
      mc("2. When is the man's interview?", ["Today.", "Friday.", "Monday."], 1, "'my interview is on Friday'."),
      mc("3. What time are they meeting tomorrow?", ["Ten.", "Half past ten.", "Eleven."], 1, "'At half past ten'."),
      mc("4. What does the man think about the weather?", ["It will be sunny.", "It's going to rain.", "It will snow."], 1, "'look at those dark clouds'."),
      mc("5. What is the woman doing on Saturday?", ["Working.", "Visiting her grandmother.", "Travelling."], 1, "'visiting my grandmother'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (planes)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre planes — qué vas a hacer este fin de semana, tus planes para las vacaciones, tu trabajo ideal", "hablar de planes con going to y present continuous", "I'm going to, I'm meeting, next weekend, I'd like to"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (trabajo)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre trabajos y profesiones; el examinador pregunta qué trabajo te gustaría y por qué", "expresar preferencias y dar razones", "I'd like to be, I prefer, because, a good salary, interesting"),

    SUMMARY("Resumen del Día 16", [
      "going to + base: planes e intenciones (y predicciones con pruebas).",
      "Present continuous de futuro: citas concretas (con hora/día).",
      "Vocabulario del trabajo. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 17", "Escribe 3 planes tuyos con 'going to'. Repasa las flashcards. Mañana: 'will' (predicciones y decisiones)."),
  ],
};

const DAY17 = {
  title: "Día 17 — Futuro con 'will' · La salud",
  description: "will (predicciones, decisiones del momento, ofrecimientos, promesas) vs going to. Vocabulario: la salud y el cuerpo. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Usar 'will' para predicciones y decisiones espontáneas, y distinguirlo de going to.",
    summary: "will/won't; will vs going to; salud y cuerpo; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'will to go'.", "'I will' para un plan ya decidido (mejor going to).", "olvidar la base tras will."],
    reviewPrompts: ["¿'will' + qué forma?", "¿Decisión del momento: will o going to?"],
  },
  items: [
    TEXT("🔁 Repaso: 'going to' para planes. Hoy 'will' — para predicciones, decisiones espontáneas, ofrecimientos y promesas. Vocabulario: la SALUD."),
    GRAMMAR("Futuro con 'will'", `will + verbo BASE (igual para todas las personas). Contracción: 'll. Negativa: won't (will not).
USOS de 'will':
· PREDICCIONES/opiniones sobre el futuro: I think it will rain. She'll pass the exam.
· DECISIONES del momento (justo al hablar): The phone's ringing — I'll answer it.
· OFRECIMIENTOS: I'll help you. · PROMESAS: I won't tell anyone.

WILL vs GOING TO:
· plan ya decidido → going to: I'm going to visit my aunt (lo decidí antes).
· decisión en el momento → will: 'We need milk.' 'OK, I'll buy some.'`),
    WARN("Errores típicos del hispanohablante", "· ❌ I will to go → ✅ I will go.\n· ❌ She will goes → ✅ She will go.\n· ❌ (plan ya hecho) I will travel this summer → mejor ✅ I'm going to travel.\n· ❌ I no will come → ✅ I won't come."),
    grammarEx("Gramática — will / won't", "Completa o elige.", [
      fb("I think it ___ (rain) tomorrow.", ["will rain", "'ll rain"], "predicción → will."),
      fb("Don't worry, I ___ (help) you.", ["will help", "'ll help"], "ofrecimiento → will."),
      fb("I promise I ___ (not/tell) anyone.", ["won't tell", "will not tell"], "promesa negativa."),
      mc("The phone is ringing. — 'OK, ___'", ["I'm going to answer it.", "I'll answer it.", "I answer it."], 1, "decisión del momento → will."),
      mc("I've already decided: ___ my aunt this weekend.", ["I'll visit", "I'm going to visit", "I visit"], 1, "plan decidido → going to."),
      fb("She ___ (be) a great doctor one day.", ["will be", "'ll be"], "predicción."),
      mc("Choose:", ["I will to call you.", "I will call you.", "I will calling you."], 1, "will + base."),
    ]),
    GRAMMAR("Vocabulario del día — La salud y el cuerpo", "Partes del cuerpo, problemas de salud y remedios."),
    deck("A2 Key S4D17 — La salud", [
      ["headache", "dolor de cabeza", "I've got a headache.", "sustantivo", "ˈhedeɪk"],
      ["stomachache", "dolor de estómago", "She has a stomachache.", "sustantivo", "ˈstʌmək eɪk"],
      ["cough", "tos", "He has a bad cough.", "sustantivo", "kɒf"],
      ["temperature", "fiebre / temperatura", "I've got a high temperature.", "sustantivo", "ˈtemprətʃə"],
      ["medicine", "medicina", "Take this medicine twice a day.", "sustantivo", "ˈmedsn"],
      ["chemist", "farmacia", "Buy it at the chemist.", "sustantivo", "ˈkemɪst"],
      ["ill", "enfermo/a", "I feel ill today.", "adjetivo", "ɪl"],
      ["hurt", "doler / hacer daño", "My back hurts.", "verbo", "hɜːt"],
      ["healthy", "sano/a", "Eat healthy food.", "adjetivo", "ˈhelθi"],
      ["rest", "descansar / descanso", "You need to rest.", "verbo/sustantivo", "rest"],
    ]),
    vocabEx("Vocabulario — La salud", "Elige la opción correcta.", [
      mc("A pain in your head is a ___.", ["headache", "cough", "medicine"], 0, "headache."),
      mc("When you're not well, you feel ___.", ["healthy", "ill", "tasty"], 1, "ill."),
      mc("You buy medicine at the ___.", ["chemist", "office", "market"], 0, "chemist."),
      mc("Good food and exercise keep you ___.", ["ill", "healthy", "tired"], 1, "healthy."),
      mc("When you're sick, you should ___.", ["rest", "run", "work"], 0, "rest."),
      mc("If you have a high ___, you might have a fever.", ["temperature", "cough", "headache"], 0, "temperature."),
    ]),

    READING_HEAD,
    READING_P1("Salud y farmacia", [
      mc("Chemist sign: 'Open 24 hours for emergencies.'", ["Always open for emergencies.", "Closed at night.", "No emergencies."], 0, "'Open 24 hours'."),
      mc("Label: 'Take one tablet after meals.'", ["One tablet after eating.", "Two tablets before meals.", "No tablets."], 0, "'one tablet after meals'."),
      mc("Note: 'Doctor's appointment on Monday at 9.'", ["See the doctor Monday at 9.", "No appointment.", "Appointment cancelled."], 0, "'appointment on Monday at 9'."),
      mc("Sign: 'Wash your hands to stop germs.'", ["Clean your hands.", "No washing.", "Germs are good."], 0, "'Wash your hands'."),
      mc("Text: 'Feeling ill, I won't come to work today.'", ["Not coming to work.", "Coming to work.", "Working from home."], 0, "'won't come to work'."),
      mc("Poster: 'Free flu jabs for over-65s this week.'", ["Free vaccines for older people.", "Vaccines cost money.", "No vaccines."], 0, "'Free flu jabs for over-65s'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y consejos de salud", "THREE HEALTH TIPS FROM A NURSE\n\nA) For a headache — rest in a dark, quiet room and drink plenty of water.\n\nB) For a cough or a cold — drink warm honey and lemon, and stay warm at home.\n\nC) To stay healthy — do exercise three times a week and eat lots of fruit and vegetables.", "Empareja cada persona con el consejo ideal (A/B/C).", [
      mc("Ana has a bad headache after work.", ["A", "B", "C"], 0, "A: headache."),
      mc("Leo has a cough and a runny nose.", ["A", "B", "C"], 1, "B: cough/cold."),
      mc("Sara wants to stay fit and healthy.", ["A", "B", "C"], 2, "C: exercise, fruit."),
      mc("Someone who needs a quiet, dark place.", ["A", "B", "C"], 0, "A."),
      mc("Someone who should do regular exercise.", ["A", "B", "C"], 2, "C."),
      mc("Someone who should drink honey and lemon.", ["A", "B", "C"], 1, "B."),
      mc("A person who wants to eat more fruit.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "GETTING HEALTHIER\n\nLast year, I wasn't very healthy. I ate a lot of fast food, I never did any exercise, and I often felt tired and ill. My doctor said, 'If you don't change, you'll have problems.' So I decided to change my life.\n\nNow I feel much better. Every morning, I go for a run before work, and I eat lots of fruit and vegetables. I don't buy fast food any more. At first it was difficult, but now I enjoy it. I've got more energy, and I hardly ever get a cold.\n\nMy advice is simple: don't wait until you're ill. Start with small changes — walk more, drink water, and sleep well. I promise you'll feel great. Next month, I'm going to run my first 10-kilometre race!", "Lee el texto y responde (A/B/C).", [
      mc("How did the writer feel last year?", ["Healthy.", "Tired and ill.", "Very fit."], 1, "'often felt tired and ill'."),
      mc("What did the doctor warn about?", ["Losing weight.", "Having problems.", "Getting a cold."], 1, "'you'll have problems'."),
      mc("What does the writer do every morning now?", ["Eats fast food.", "Goes for a run.", "Sleeps late."], 1, "'I go for a run before work'."),
      mc("How does the writer feel now?", ["Worse.", "The same.", "Much better."], 2, "'I feel much better'."),
      mc("What is the writer going to do next month?", ["Stop exercising.", "Run a 10 km race.", "See the doctor."], 1, "'run my first 10-kilometre race'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Yesterday I felt really (1)___, so I stayed at home. I had a bad (2)___ and a high temperature. My mum said, 'You should (3)___ and drink lots of water.' She went to the (4)___ to buy some (5)___ for me. Today I feel a bit better, but my throat still (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["ill", "healthy", "happy"], 0, "'felt really ill'."),
      mc("Hueco 2", ["headache", "medicine", "chemist"], 0, "'a bad headache'."),
      mc("Hueco 3", ["rest", "run", "work"], 0, "'you should rest'."),
      mc("Hueco 4", ["chemist", "office", "gym"], 0, "'went to the chemist'."),
      mc("Hueco 5", ["medicine", "headache", "temperature"], 0, "'buy some medicine'."),
      mc("Hueco 6", ["hurts", "helps", "rests"], 0, "'my throat still hurts'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Kim,\nI'm sorry, but I (1)___ come to the party tonight. I'm feeling really ill — I've (2)___ a headache and a high temperature. My mum thinks I (3)___ have the flu. She says I (4)___ rest and drink lots of water. I'm going to see the doctor (5)___ tomorrow. I promise I (6)___ come to the next one!\nGet well soon,\nMe\nLove, Alex", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["won't", "can't"], "'won't/can't come'."),
      fb("Hueco 2", ["got", "had"], "'I've got a headache'."),
      fb("Hueco 3", ["might", "may", "could"], "posibilidad."),
      fb("Hueco 4", ["should", "must"], "consejo/obligación."),
      fb("Hueco 5", ["in"], "'in the morning'."),
      fb("Hueco 6", ["will", "'ll"], "promesa → will."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un email cancelando un plan", "No puedes ir a un plan con tu amigo/a inglés/a porque estás enfermo/a. Escríbele un email (25 palabras o más) con:\n· di que no puedes ir,\n· explica por qué (tu problema de salud),\n· propón otro día.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un chico se despierta sintiéndose mal.\n2) Su madre le lleva medicina de la farmacia.\n3) Al día siguiente está mejor y sonríe.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a doctor's assistant leaving a message for a patient. Hello, this is a message for Mr Brown from the health centre. Your appointment with Doctor Lee is on Thursday the ninth at eleven o'clock. Please bring a list of your medicines. The health centre is on Park Road, next to the library. If you can't come, please call us on oh-one-two, three-four-five, six-seven-eight. Thank you.", [
      fb("Appointment with Doctor ___", ["Lee"], "'Doctor Lee'."),
      fb("Day: ___", ["Thursday"], "'on Thursday'."),
      fb("Time: ___ o'clock", ["eleven", "11"], "'at eleven o'clock'."),
      fb("Health centre on ___ Road", ["Park"], "'on Park Road'."),
      fb("Bring a list of your ___.", ["medicines", "medicine"], "'a list of your medicines'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (salud y hábitos)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre salud y hábitos — si haces ejercicio, qué comes, qué haces cuando estás enfermo", "hablar de hábitos saludables", "I do exercise, I eat, when I'm ill, I usually, healthy"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (vida sana)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre deporte y comida sana; el examinador pregunta qué haces para estar sano y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, healthy, exercise"),

    SUMMARY("Resumen del Día 17", [
      "will + base: predicciones, decisiones del momento, ofrecimientos, promesas. Negativa: won't.",
      "will (decisión ahora) vs going to (plan ya decidido).",
      "Vocabulario de la salud. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 18", "Escribe 2 predicciones (will) y 2 planes (going to). Repasa las flashcards. Mañana: modales de posibilidad (can/could/might)."),
  ],
};

const DAY18 = {
  title: "Día 18 — Modales: can/could/might · El deporte",
  description: "Habilidad y posibilidad (can/could, may/might). Vocabulario: deporte y tiempo libre. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Expresar habilidad y posibilidad con can/could/may/might.",
    summary: "can/could (habilidad, permiso, peticiones), may/might (posibilidad); deporte; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'can to swim'.", "'I can swimming'.", "'more possible' en vez de might."],
    reviewPrompts: ["¿'can' + qué forma?", "¿Cómo dices 'quizás llueva'?"],
  },
  items: [
    TEXT("🔁 Repaso: will vs going to. Hoy los MODALES de habilidad y posibilidad (can, could, may, might). Vocabulario: DEPORTE."),
    GRAMMAR("can / could · may / might", `Los modales van con el verbo BASE (sin 'to', sin -s): can go, might rain.

HABILIDAD: can (presente) / could (pasado): I can swim. When I was five, I couldn't ride a bike.
PERMISO y PETICIONES: Can/Could I open the window? Could you help me? (could = más educado).
POSIBILIDAD (quizás): may / might + base: It might rain later. She may be at home.
· Negativa: might not / may not.

Recuerda: NUNCA 'to' después del modal → ✅ I can swim (NO 'I can to swim').`),
    WARN("Errores típicos del hispanohablante", "· ❌ I can to swim → ✅ I can swim.\n· ❌ I can swimming → ✅ I can swim.\n· ❌ She cans → ✅ She can.\n· ❌ It's possible rain → ✅ It might rain."),
    grammarEx("Gramática — can/could/may/might", "Completa o elige.", [
      fb("I ___ (swim) very well.", ["can swim"], "habilidad → can + base."),
      fb("When I was young, I ___ (not/ride) a bike.", ["couldn't ride", "could not ride"], "pasado negativo → couldn't."),
      mc("Polite request:", ["Can you helping me?", "Could you help me?", "Could you to help me?"], 1, "Could you help me?"),
      fb("Take an umbrella — it ___ (rain) later.", ["might rain", "may rain"], "posibilidad → might/may."),
      mc("Choose:", ["I can to play tennis.", "I can play tennis.", "I can playing tennis."], 1, "can + base."),
      fb("She isn't here. She ___ (be) at the gym.", ["might be", "may be", "could be"], "posibilidad."),
      mc("Ability in the past:", ["I can swim at 4.", "I could swim at 4.", "I could to swim at 4."], 1, "could swim."),
    ]),
    GRAMMAR("Vocabulario del día — El deporte", "Deportes y tiempo libre activo."),
    deck("A2 Key S4D18 — El deporte", [
      ["team", "equipo", "I play for a football team.", "sustantivo", "tiːm"],
      ["match", "partido", "The match starts at eight.", "sustantivo", "mætʃ"],
      ["win", "ganar", "Our team won the game.", "verbo", "wɪn"],
      ["lose", "perder", "We lost 2–1.", "verbo", "luːz"],
      ["score", "marcar / puntuación", "He scored a goal.", "verbo/sustantivo", "skɔː"],
      ["coach", "entrenador/a", "The coach is very strict.", "sustantivo", "kəʊtʃ"],
      ["practise", "entrenar / practicar", "We practise twice a week.", "verbo", "ˈpræktɪs"],
      ["fit", "en forma", "Running keeps me fit.", "adjetivo", "fɪt"],
      ["competition", "competición", "She won the competition.", "sustantivo", "ˌkɒmpəˈtɪʃn"],
      ["training", "entrenamiento", "Training is at six.", "sustantivo", "ˈtreɪnɪŋ"],
    ]),
    vocabEx("Vocabulario — El deporte", "Elige la opción correcta.", [
      mc("A group of players is a ___.", ["team", "match", "coach"], 0, "team."),
      mc("The opposite of 'win' is ___.", ["lose", "score", "practise"], 0, "lose."),
      mc("The person who trains a team is the ___.", ["coach", "team", "match"], 0, "coach."),
      mc("To get a goal or a point is to ___.", ["score", "lose", "fit"], 0, "score."),
      mc("Regular exercise keeps you ___.", ["fit", "ill", "tired"], 0, "fit."),
      mc("A game between two teams is a ___.", ["match", "coach", "training"], 0, "match."),
    ]),

    READING_HEAD,
    READING_P1("Deporte y actividades", [
      mc("Sports centre: 'Pool closed for cleaning until 2 pm.'", ["No swimming until 2.", "Pool open.", "Pool closed forever."], 0, "'closed… until 2 pm'."),
      mc("Notice: 'Football training cancelled — heavy rain.'", ["No training today.", "Training as normal.", "Training tomorrow."], 0, "'training cancelled'."),
      mc("Sign: 'Members can use the gym free before 9 am.'", ["Free gym before 9 for members.", "Gym costs extra.", "No gym."], 0, "'free before 9 am'."),
      mc("Text: 'Match moved to Sunday. Same time.'", ["The match is on Sunday.", "No match.", "Match cancelled."], 0, "'moved to Sunday'."),
      mc("Poster: 'Beginners welcome — no experience needed.'", ["Beginners can join.", "Experts only.", "Closed."], 0, "'Beginners welcome'."),
      mc("Sign: 'Wear trainers on the sports court.'", ["Trainers required.", "No trainers.", "Any shoes."], 0, "'Wear trainers'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y deportes", "THREE SPORTS CLUBS\n\nA) Swimming Club — lessons for all levels, indoor pool, open all year. Good for fitness.\n\nB) Football Team — training twice a week, matches on Saturdays. For people who like team sports.\n\nC) Yoga Group — gentle exercise and relaxation, small classes, morning and evening.", "Empareja cada persona con el club ideal (A/B/C).", [
      mc("Someone who wants to get fit in the water.", ["A", "B", "C"], 0, "Swimming Club."),
      mc("A person who enjoys team sports and matches.", ["A", "B", "C"], 1, "Football Team."),
      mc("Someone who wants gentle exercise and to relax.", ["A", "B", "C"], 2, "Yoga Group."),
      mc("A beginner who wants swimming lessons.", ["A", "B", "C"], 0, "A: all levels."),
      mc("Someone free on Saturdays for matches.", ["A", "B", "C"], 1, "B: matches on Saturdays."),
      mc("A person who prefers small, calm classes.", ["A", "B", "C"], 2, "C: small classes."),
      mc("Someone who likes training with a team.", ["A", "B", "C"], 1, "B: team."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY LIFE AS A SWIMMER\n\nI've loved swimming since I was a child. When I was six, I couldn't even float, but now I swim for my city's team. It takes a lot of hard work — I practise every morning before school, and I train with my coach four times a week.\n\nLast month, there was an important competition. I was very nervous, but my coach said, 'You can do it. Just stay calm.' In the final race, I swam faster than ever and I won! It was the best moment of my life.\n\nNext year, I might try to join the national team. It won't be easy, and I may not be good enough yet, but I'm going to keep training. If you work hard, anything is possible.", "Lee el texto y responde (A/B/C).", [
      mc("What couldn't the writer do at six?", ["Run.", "Float.", "Read."], 1, "'I couldn't even float'."),
      mc("How often does the writer train with the coach?", ["Every day.", "Four times a week.", "Once a week."], 1, "'four times a week'."),
      mc("What did the coach say before the competition?", ["'You'll lose.'", "'You can do it.'", "'Stop swimming.'"], 1, "'You can do it. Just stay calm'."),
      mc("What happened in the final race?", ["The writer lost.", "The writer won.", "The race was cancelled."], 1, "'I won!'"),
      mc("What might the writer do next year?", ["Stop swimming.", "Join the national team.", "Change sport."], 1, "'might try to join the national team'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I play for a basketball (1)___. We (2)___ twice a week with our (3)___, who is very good. Last Saturday we had an important (4)___ against another school. It was close, but in the end we (5)___ by two points! Next month there's a big (6)___, and we might win it.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["team", "match", "coach"], 0, "'a basketball team'."),
      mc("Hueco 2", ["practise", "win", "lose"], 0, "'practise twice a week'."),
      mc("Hueco 3", ["coach", "team", "score"], 0, "'with our coach'."),
      mc("Hueco 4", ["match", "team", "training"], 0, "'an important match'."),
      mc("Hueco 5", ["won", "lost", "scored"], 0, "'we won by two points'."),
      mc("Hueco 6", ["competition", "coach", "team"], 0, "'a big competition'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Leo,\nGuess what — my team won the match yesterday! It (1)___ a close game, but we scored in the last minute. Our coach said we (2)___ win the whole competition this year if we keep training. I (3)___ practise really hard now! There (4)___ a big final next month. Do you want to (5)___ and watch? It (6)___ be an amazing game!\nCheers,\nDan", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["was"], "'It was a close game'."),
      fb("Hueco 2", ["could", "might", "may", "can"], "posibilidad."),
      fb("Hueco 3", ["will", "'ll"], "'I'll practise'."),
      fb("Hueco 4", ["is"], "'There is a big final'."),
      fb("Hueco 5", ["come"], "'come and watch'."),
      fb("Hueco 6", ["will", "might", "could", "may"], "predicción/posibilidad."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Invita a un partido o actividad", "Quieres invitar a tu amigo/a inglés/a a hacer deporte o ver un partido. Escríbele un email (25 palabras o más) con:\n· qué actividad propones,\n· cuándo y dónde,\n· qué debe llevar.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un equipo entrena duro en un campo.\n2) Juegan un partido muy reñido.\n3) Ganan y celebran con la copa.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigos hablando de deporte y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Zoe and Ryan, talking about sport. Zoe: Do you do any sport, Ryan? Ryan: Yes, I play tennis twice a week. What about you? Zoe: I go swimming every morning before work. Ryan: Wow, that's early! Are you any good? Zoe: Not really, but I love it — it keeps me fit. Ryan: I want to get fitter too. Maybe I could come swimming with you? Zoe: Sure! But you'll have to get up at six. Ryan: Six?! Hmm, maybe I'll just play more tennis!", [
      mc("How often does Ryan play tennis?", ["Every day.", "Twice a week.", "Once a month."], 1, "'twice a week'."),
      mc("When does Zoe go swimming?", ["In the evening.", "Every morning.", "At weekends."], 1, "'every morning before work'."),
      mc("Why does Zoe like swimming?", ["She's very good.", "It keeps her fit.", "It's cheap."], 1, "'it keeps me fit'."),
      mc("What time would Ryan have to get up to swim?", ["Five.", "Six.", "Seven."], 1, "'get up at six'."),
      mc("What does Ryan decide?", ["To go swimming.", "To play more tennis.", "To stop sport."], 1, "'maybe I'll just play more tennis'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (deporte)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre deporte — qué deporte haces, qué deporte se te da bien, si prefieres verlo o practicarlo", "hablar de habilidades con can y de gustos", "I can, I play, I'm good at, I prefer, my favourite sport"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (deporte)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre deportes de equipo o individuales; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, team sports, because, fit, fun"),

    SUMMARY("Resumen del Día 18", [
      "Modales + base (sin 'to'): can/could (habilidad, permiso, peticiones), may/might (posibilidad).",
      "could = habilidad pasada y peticiones educadas.",
      "Vocabulario del deporte. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 19", "Escribe 3 cosas que sabes hacer (can) y 2 posibilidades para el finde (might). Repasa las flashcards. Mañana: obligación y consejo (must/have to/should)."),
  ],
};

const DAY19 = {
  title: "Día 19 — Modales: must/have to/should · Los estudios",
  description: "Obligación, prohibición y consejo (must, have to, mustn't, don't have to, should). Vocabulario: la educación. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Expresar obligación, prohibición y consejo con los modales adecuados.",
    summary: "must/have to/mustn't/don't have to/should; educación; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["'mustn't' = prohibición ≠ 'don't have to' = no necesario.", "'must to'.", "'should to'."],
    reviewPrompts: ["¿Diferencia entre mustn't y don't have to?", "¿'should' + qué forma?"],
  },
  items: [
    TEXT("🔁 Repaso: can/could/might. Hoy los modales de OBLIGACIÓN y CONSEJO (must, have to, should). Vocabulario: los ESTUDIOS."),
    GRAMMAR("must / have to / should", `OBLIGACIÓN: must / have to + base → You must wear a seatbelt. I have to work tomorrow.
· 'have to' cambia con la persona (has to) y en pasado es 'had to'.

PROHIBICIÓN: mustn't + base → You mustn't smoke here (¡está prohibido!).
NO NECESARIO: don't have to + base → You don't have to come (puedes, pero no es obligatorio).
⚠️ mustn't (prohibido) ≠ don't have to (no es necesario).

CONSEJO: should / shouldn't + base → You should study more. You shouldn't eat so much sugar.

Ninguno lleva 'to' extra: ❌ must to, ❌ should to.`),
    WARN("Errores típicos del hispanohablante", "· ❌ You mustn't come (si quieres decir 'no hace falta') → ✅ You don't have to come.\n· ❌ I must to go → ✅ I must go.\n· ❌ You should to rest → ✅ You should rest.\n· ❌ She have to work → ✅ She has to work."),
    grammarEx("Gramática — must/have to/should", "Completa o elige.", [
      fb("You ___ (must / wear) a helmet on a bike.", ["must wear"], "obligación → must + base."),
      fb("She ___ (have to) get up early for work.", ["has to"], "3ª persona → has to."),
      mc("It's prohibited: 'You ___ use your phone in the exam.'", ["don't have to", "mustn't", "should"], 1, "prohibición → mustn't."),
      mc("Not necessary: 'You ___ pay, it's free.'", ["mustn't", "don't have to", "must"], 1, "no necesario → don't have to."),
      fb("You look tired. You ___ (should) go to bed.", ["should go"], "consejo → should + base."),
      mc("Choose:", ["I must to study.", "I must study.", "I musting study."], 1, "must + base."),
      fb("Yesterday I ___ (have to) work late.", ["had to"], "pasado → had to."),
    ]),
    GRAMMAR("Vocabulario del día — Los estudios", "El mundo de la educación."),
    deck("A2 Key S4D19 — Los estudios", [
      ["subject", "asignatura", "My favourite subject is science.", "sustantivo", "ˈsʌbdʒɪkt"],
      ["homework", "deberes", "I've got a lot of homework.", "sustantivo", "ˈhəʊmwɜːk"],
      ["exam", "examen", "The exam is next week.", "sustantivo", "ɪɡˈzæm"],
      ["pass", "aprobar", "I hope I pass the test.", "verbo", "pɑːs"],
      ["fail", "suspender", "He failed the exam.", "verbo", "feɪl"],
      ["revise", "repasar", "I need to revise for the test.", "verbo", "rɪˈvaɪz"],
      ["degree", "carrera / título", "She has a degree in law.", "sustantivo", "dɪˈɡriː"],
      ["notes", "apuntes", "Take good notes in class.", "sustantivo", "nəʊts"],
      ["term", "trimestre", "The new term starts in September.", "sustantivo", "tɜːm"],
      ["deadline", "fecha límite", "The deadline is on Friday.", "sustantivo", "ˈdedlaɪn"],
    ]),
    vocabEx("Vocabulario — Los estudios", "Elige la opción correcta.", [
      mc("Maths and history are school ___.", ["subjects", "exams", "notes"], 0, "subjects."),
      mc("The opposite of 'pass' an exam is to ___.", ["fail", "revise", "study"], 0, "fail."),
      mc("To study again before a test is to ___.", ["revise", "pass", "fail"], 0, "revise."),
      mc("Work you do at home for school is ___.", ["homework", "term", "degree"], 0, "homework."),
      mc("The last day to hand in your work is the ___.", ["deadline", "term", "note"], 0, "deadline."),
      mc("A university qualification is a ___.", ["degree", "subject", "exam"], 0, "degree."),
    ]),

    READING_HEAD,
    READING_P1("En el colegio y la universidad", [
      mc("Notice: 'Exams start Monday. Silence in the library.'", ["Be quiet, exams are near.", "No exams.", "The library is closed."], 0, "'Silence in the library'."),
      mc("Sign: 'Mobile phones must be switched off in class.'", ["Turn off phones in class.", "Use phones freely.", "No class."], 0, "'must be switched off'."),
      mc("Email: 'Deadline for homework: Friday 5 pm.'", ["Hand in homework by Friday 5.", "No homework.", "Deadline is Monday."], 0, "'Deadline… Friday 5 pm'."),
      mc("Note: 'You don't have to bring a dictionary.'", ["A dictionary is not necessary.", "Bring a dictionary.", "No exam."], 0, "'don't have to bring'."),
      mc("Poster: 'Free study help every afternoon in Room 5.'", ["Free help in the afternoons.", "Help costs money.", "No help."], 0, "'Free study help'."),
      mc("Sign: 'Students must show their ID card.'", ["Show your ID.", "No ID needed.", "Closed."], 0, "'must show their ID'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y cursos", "THREE EVENING COURSES\n\nA) Study Skills — learn to take notes, revise and prepare for exams. For students who want better results.\n\nB) Computer Basics — learn to use a computer, email and the internet. For complete beginners.\n\nC) Business English — improve your English for work: meetings, emails and interviews.", "Empareja cada persona con el curso ideal (A/B/C).", [
      mc("A student who wants to pass exams more easily.", ["A", "B", "C"], 0, "Study Skills."),
      mc("An older person who has never used a computer.", ["A", "B", "C"], 1, "Computer Basics."),
      mc("A worker who needs English for meetings.", ["A", "B", "C"], 2, "Business English."),
      mc("Someone who wants to learn to revise better.", ["A", "B", "C"], 0, "A."),
      mc("A beginner with technology.", ["A", "B", "C"], 1, "B."),
      mc("Someone preparing for job interviews in English.", ["A", "B", "C"], 2, "C: interviews."),
      mc("A student who wants better results.", ["A", "B", "C"], 0, "A: better results."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "EXAM WEEK\n\nNext week is exam week, and I'm a bit nervous. I have four exams: maths, science, history and English. My favourite subject is science, so I'm not worried about that one, but I have to revise a lot for history because I'm not very good at remembering dates.\n\nMy teacher gave us some good advice. She said, 'You should make a study plan and revise a little every day. You mustn't leave everything until the last night!' She also said we don't have to study for more than two hours at a time — short breaks help your brain.\n\nSo this week, I'm going to follow her advice. I'll revise my notes every afternoon and go to bed early. I really want to pass all my exams. Wish me luck!", "Lee el texto y responde (A/B/C).", [
      mc("How many exams does the writer have?", ["Two.", "Three.", "Four."], 2, "'I have four exams'."),
      mc("Which subject is the writer not worried about?", ["History.", "Science.", "Maths."], 1, "'not worried about that one' (science)."),
      mc("Why does the writer have to revise a lot for history?", ["It's boring.", "Bad at remembering dates.", "No notes."], 1, "'not very good at remembering dates'."),
      mc("What does the teacher say they mustn't do?", ["Make a plan.", "Leave everything until the last night.", "Take breaks."], 1, "'You mustn't leave everything until the last night'."),
      mc("What is the writer going to do this week?", ["Study all night.", "Follow the teacher's advice.", "Not revise."], 1, "'follow her advice'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Next week I have an important (1)___. My teacher says I (2)___ revise a little every day. I (3)___ leave it until the last minute! I'm going to make good (4)___ in class and read them at home. I really want to (5)___, not fail. The (6)___ for our project is also on Friday, so it's a busy week.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["exam", "degree", "term"], 0, "'an important exam'."),
      mc("Hueco 2", ["should", "shouldn't", "mustn't"], 0, "'should revise'."),
      mc("Hueco 3", ["mustn't", "must", "have to"], 0, "'mustn't leave it'."),
      mc("Hueco 4", ["notes", "subjects", "deadlines"], 0, "'make good notes'."),
      mc("Hueco 5", ["pass", "fail", "revise"], 0, "'want to pass'."),
      mc("Hueco 6", ["deadline", "subject", "term"], 0, "'the deadline… on Friday'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ella,\nHow's your revision going? I'm really busy this week because I (1)___ study for three exams! My teacher said we (2)___ make a study plan and not leave everything until the end. I (3)___ have to study tonight, though, because I finished early. Do you want to (4)___ together tomorrow? We (5)___ help each other. I really hope we both (6)___!\nGood luck,\nTom", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["have", "must"], "'I have to study' / 'must'."),
      fb("Hueco 2", ["should", "must"], "consejo/obligación."),
      fb("Hueco 3", ["don't", "do not"], "'don't have to study tonight'."),
      fb("Hueco 4", ["study", "revise"], "'study/revise together'."),
      fb("Hueco 5", ["can", "could"], "'can help each other'."),
      fb("Hueco 6", ["pass"], "'we both pass'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Pide consejo de estudio", "Tienes exámenes y le pides consejo a tu amigo/a inglés/a que estudia mucho. Escríbele un email (25 palabras o más) con:\n· qué exámenes tienes,\n· cuál te preocupa más,\n· pregúntale cómo estudia él/ella.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una estudiante hace un plan de estudio en su mesa.\n2) Estudia cada día con sus apuntes.\n3) Recibe las notas del examen y salta de alegría.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. My favourite subject at school is science, because I love doing experiments. Two. I have to hand in my project by Friday, so I'm very busy this week. Three. I always take good notes in class; they really help me before exams. Four. I failed my driving test twice, but last week I finally passed! Five. Next year I'm going to start a degree in engineering at university.", [
      mc("Person 1 is talking about…", ["a favourite subject", "an exam", "a degree"], 0, "'favourite subject… science'."),
      mc("Person 2 is talking about…", ["a deadline", "notes", "a subject"], 0, "'hand in my project by Friday'."),
      mc("Person 3 is talking about…", ["taking notes", "a deadline", "a degree"], 0, "'I take good notes'."),
      mc("Person 4 is talking about…", ["passing a test", "a subject", "homework"], 0, "'I finally passed'."),
      mc("Person 5 is talking about…", ["a university degree", "an exam", "notes"], 0, "'start a degree… at university'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (estudios)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre estudios — qué estudias, tu asignatura favorita, cómo estudias para los exámenes", "hablar de estudios y obligaciones con have to/should", "I study, my favourite subject, I have to, I should, before exams"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (estudios)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre estudiar solo o en grupo, asignaturas; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, easier, subjects"),

    SUMMARY("Resumen del Día 19", [
      "must / have to = obligación; mustn't = prohibido; don't have to = no necesario.",
      "should / shouldn't = consejo. Todos con verbo base, sin 'to'.",
      "Vocabulario de los estudios. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 20", "Escribe 2 reglas de tu casa/colegio (must/mustn't) y un consejo (should). Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY20 = {
  title: "Día 20 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del futuro y los modales, y del vocabulario de la semana. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 4.",
  pedagogy: {
    objective: "Consolidar going to/will y los modales, y medir el progreso.",
    summary: "Repaso de futuro y modales; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 5."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 4. Consolidas el futuro y los modales, y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 4", `1) going to (planes) y present continuous de futuro (citas).
2) will/won't (predicciones, decisiones del momento, ofrecimientos, promesas).
3) can/could (habilidad, permiso), may/might (posibilidad).
4) must/have to (obligación), mustn't (prohibido), don't have to (no necesario), should (consejo).`),
    grammarEx("Repaso mixto de gramática — Semana 4", "Completa o elige.", [
      fb("Next year I ___ (going to / travel) to Japan.", ["am going to travel", "'m going to travel"], "plan → going to."),
      fb("I think it ___ (rain) tomorrow.", ["will rain", "'ll rain"], "predicción → will."),
      fb("When I was six, I ___ (not/swim).", ["couldn't swim", "could not swim"], "habilidad pasada."),
      mc("Prohibition:", ["You don't have to smoke here.", "You mustn't smoke here.", "You should smoke here."], 1, "mustn't = prohibido."),
      fb("You look ill. You ___ (should) see a doctor.", ["should see"], "consejo."),
      mc("Decision now: 'The phone's ringing.' '___'", ["I'm going to answer.", "I'll answer it.", "I answer."], 1, "will."),
      fb("She ___ (have to) work this weekend.", ["has to"], "3ª persona."),
      fb("It's cloudy — it ___ (might) rain.", ["might rain"], "posibilidad."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 4", "Repasa los mazos (trabajo, salud, deporte, estudios)."),
    vocabEx("Repaso de vocabulario — Semana 4", "Elige la opción correcta.", [
      mc("The money you get for working:", ["salary", "boss", "office"], 0, "salary."),
      mc("A pain in your head:", ["headache", "cough", "medicine"], 0, "headache."),
      mc("The opposite of 'win':", ["lose", "score", "fit"], 0, "lose."),
      mc("The opposite of 'pass' an exam:", ["fail", "revise", "pass"], 0, "fail."),
      mc("A meeting to get a job:", ["interview", "office", "salary"], 0, "interview."),
      mc("To study again before a test:", ["revise", "fail", "score"], 0, "revise."),
      mc("Regular exercise keeps you:", ["fit", "ill", "tired"], 0, "fit."),
      mc("You buy medicine at the:", ["chemist", "office", "gym"], 0, "chemist."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Job fair this Saturday — bring your CV.'", ["Bring your CV to the job fair.", "No jobs.", "Fair cancelled."], 0, "'bring your CV'."),
      mc("Notice: 'Gym members must wear trainers.'", ["Trainers required in the gym.", "No trainers.", "No members."], 0, "'must wear trainers'."),
      mc("Label: 'Take twice a day after food.'", ["Take it after eating, twice daily.", "Once a day.", "Before food."], 0, "'twice a day after food'."),
      mc("Email: 'Your exam results are ready online.'", ["Check results online.", "No results.", "Exam cancelled."], 0, "'results are ready online'."),
      mc("Sign: 'You don't have to book — just come in.'", ["Booking not necessary.", "You must book.", "Closed."], 0, "'don't have to book'."),
      mc("Poster: 'Match tickets on sale from Monday.'", ["Buy tickets from Monday.", "No tickets.", "Match cancelled."], 0, "'on sale from Monday'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes", "THREE PLANS FOR NEXT MONTH\n\nA) Job Skills Workshop — learn to write a CV and prepare for interviews. Free for young people.\n\nB) Charity Fun Run — a 5 km run to help sick children. All levels welcome, medals for everyone.\n\nC) Exam Revision Camp — three days of study help before the summer exams. Small groups.", "Empareja cada persona con el plan ideal (A/B/C).", [
      mc("Someone looking for their first job.", ["A", "B", "C"], 0, "Job Skills Workshop."),
      mc("A person who wants to run and help others.", ["A", "B", "C"], 1, "Charity Fun Run."),
      mc("A student who needs help before exams.", ["A", "B", "C"], 2, "Revision Camp."),
      mc("A young person who needs interview practice.", ["A", "B", "C"], 0, "A: interviews."),
      mc("Someone who wants a medal and to do sport.", ["A", "B", "C"], 1, "B: medals, run."),
      mc("A student who prefers small study groups.", ["A", "B", "C"], 2, "C: small groups."),
      mc("Someone who wants help writing a CV.", ["A", "B", "C"], 0, "A: CV."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A BIG DECISION\n\nMy older sister, Julia, has just finished university with a degree in medicine. Now she has to decide what to do next. She has two choices, and both are exciting.\n\nFirst, she could work in a hospital in our city. The salary is good, and she would be near the family. But the work is very hard, and she will have to do long night shifts. Second, she might travel abroad to help in a small clinic in Africa for a year. She won't earn much money there, but she says it will be an amazing experience.\n\nOur parents think she should stay here, but Julia isn't sure. 'I'm going to think about it carefully,' she says. Whatever she decides, I know she'll be a wonderful doctor. I'm very proud of her.", "Lee el texto y responde (A/B/C).", [
      mc("What did Julia study?", ["Law.", "Medicine.", "Engineering."], 1, "'a degree in medicine'."),
      mc("What is the problem with the hospital job?", ["Low salary.", "Hard work and night shifts.", "It's far away."], 1, "'very hard… long night shifts'."),
      mc("What might Julia do abroad?", ["Study more.", "Help in a clinic in Africa.", "Open a hospital."], 1, "'help in a small clinic in Africa'."),
      mc("What do the parents think?", ["She should go abroad.", "She should stay here.", "She should stop."], 1, "'she should stay here'."),
      mc("How does the writer feel about Julia?", ["Worried.", "Proud.", "Angry."], 1, "'I'm very proud of her'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My sister just finished her (1)___ in medicine. Now she (2)___ decide what to do. She (3)___ work in a hospital here, or she (4)___ travel abroad to help people. The hospital pays a good (5)___, but she'll have to do night shifts. Whatever she chooses, I think she (6)___ be a great doctor.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["degree", "exam", "term"], 0, "'her degree in medicine'."),
      mc("Hueco 2", ["has to", "should", "might"], 0, "'has to decide'."),
      mc("Hueco 3", ["could", "must", "should"], 0, "'could work' (posibilidad)."),
      mc("Hueco 4", ["might", "must", "have to"], 0, "'might travel'."),
      mc("Hueco 5", ["salary", "boss", "office"], 0, "'a good salary'."),
      mc("Hueco 6", ["will", "won't", "should"], 0, "'she will be a great doctor'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Nina,\nMy sister has a big decision to make! She just finished her degree and now she (1)___ choose a job. She (2)___ work in a hospital here, or she might go abroad. Our parents think she (3)___ stay near home. She's going (4)___ think about it carefully. I'm sure she (5)___ be a great doctor, (6)___ she decides!\nBye,\nAlex", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["has", "must"], "'has to choose'."),
      fb("Hueco 2", ["could", "might", "can", "may"], "posibilidad."),
      fb("Hueco 3", ["should"], "consejo → should."),
      fb("Hueco 4", ["to"], "'going to think'."),
      fb("Hueco 5", ["will", "'ll"], "predicción → will."),
      fb("Hueco 6", ["whatever", "wherever"], "'whatever she decides'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un consejo a un amigo/a", "Tu amigo/a inglés/a no sabe qué estudiar o en qué trabajar. Escríbele un email (25 palabras o más) con:\n· pregúntale qué le gusta,\n· dale un consejo (should),\n· dile qué vas a hacer tú.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una joven termina la universidad con su diploma.\n2) Duda entre dos ofertas de trabajo.\n3) Empieza feliz en su nuevo trabajo.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Ben hablar de los planes de futuro de sus amigos y empareja cada persona con su plan (A/B/C…).", "This is Part Five. You will hear Ben talking about what his friends are going to do after school. Anna is going to study medicine, because she wants to help people. Tom is going to travel around the world for a year before university. Lucy is going to work in her family's restaurant to earn money. Sam is going to do a sports degree, because he loves football. And Kate is going to learn to be a nurse at the local hospital.", [
      mc("Anna", ["study medicine", "travel", "work in a restaurant"], 0, "'study medicine'."),
      mc("Tom", ["travel the world", "study", "work"], 0, "'travel around the world'."),
      mc("Lucy", ["work in a restaurant", "study medicine", "travel"], 0, "'work in her family's restaurant'."),
      mc("Sam", ["a sports degree", "travel", "nursing"], 0, "'a sports degree'."),
      mc("Kate", ["become a nurse", "travel", "study medicine"], 0, "'learn to be a nurse'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — tus planes de futuro, un trabajo que te gustaría, un consejo que darías", "usar el futuro y los modales con soltura", "I'm going to, I'll, I'd like to, you should, I have to"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre trabajar pronto o seguir estudiando; el examinador pregunta qué prefieres y por qué", "comparar opciones y dar razones", "I prefer, I'd rather, because, a good job, study"),

    SUMMARY("Resumen de la Semana 4", [
      "Sabes hablar del futuro (going to, will) y usar los modales (can/could, may/might, must/have to/should).",
      "Distingues obligación, prohibición, no-necesidad y consejo.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: present perfect (experiencias).",
    ]),
    INFO("Mini-simulacro de la Semana 4", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 5."),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "El futuro y los planes",
  description: "going to, will, present continuous de futuro y modales (can/could/might, must/have to/should). Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
