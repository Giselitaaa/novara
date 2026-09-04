/**
 * A2 Key · Semana 12 — "Preparación final para el examen".
 * Última semana: práctica intensiva de cada destreza en su formato real,
 * consejos del día del examen, y (lo genera el motor) el SIMULACRO FINAL
 * completo. Vocabulario: repaso de alta frecuencia por temas.
 * Las 4 destrezas, formato Cambridge.
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

const DAY56 = {
  title: "Día 56 — Práctica intensiva de Reading",
  description: "Práctica a fondo de las 5 partes de Reading, con repaso rápido y las 4 destrezas. Listening P1.",
  pedagogy: {
    objective: "Practicar las 5 partes de Reading con confianza y buen ritmo.",
    summary: "Reading intensivo (P1–P5); repaso; Writing; Listening P1; Speaking.",
    reviewPrompts: ["¿Cuánto tiempo dedicas a cada parte?", "¿Lees las preguntas antes del texto largo?"],
  },
  items: [
    TEXT("🏁 Semana 12: la ÚLTIMA. Esta semana practicas cada destreza a fondo y al final harás el SIMULACRO FINAL completo. Hoy: Reading intensivo. ¡Cronométrate como en el examen!"),
    TIP("Recuerda — el Reading & Writing dura 1 hora", "Reparte tu tiempo: no te quedes atascado en una pregunta. Si dudas, marca una respuesta y sigue; puedes volver al final. Lee siempre TODO el texto corto."),
    GRAMMAR("Repaso exprés de gramática", "Antes de practicar: recuerda las palabras clave. now/at the moment → present continuous · yesterday/ago → past simple · ever/never/just/yet/for/since → present perfect · if + presente → will (first conditional) · who/which/that para definir."),
    grammarEx("Calentamiento de gramática", "Completa rápido.", [
      fb("I ___ (see) her yesterday.", ["saw"], "past simple."),
      fb("She ___ (live) here since 2018.", ["has lived", "'s lived"], "present perfect."),
      fb("If it rains, we ___ (stay) home.", ["will stay", "'ll stay"], "first conditional."),
      fb("A doctor is a person ___ helps you.", ["who", "that"], "relativo."),
      fb("Look! It ___ (snow)!", ["is snowing", "'s snowing"], "present continuous."),
      fb("You ___ (should) rest.", ["should rest"], "consejo."),
    ]),
    GRAMMAR("Vocabulario del día — Repaso: personas y vida diaria", "Palabras de alta frecuencia (personas y rutina)."),
    deck("A2 Key S12D56 — Repaso: personas y rutina", [
      ["neighbour", "vecino/a", "My neighbour is kind.", "sustantivo", "ˈneɪbə"],
      ["colleague", "compañero/a de trabajo", "My colleagues are nice.", "sustantivo", "ˈkɒliːɡ"],
      ["get up", "levantarse", "I get up early.", "phrasal verb", "ɡet ˈʌp"],
      ["busy", "ocupado", "I'm busy today.", "adjetivo", "ˈbɪzi"],
      ["free time", "tiempo libre", "In my free time I read.", "colocación", "friː ˈtaɪm"],
      ["get on with", "llevarse bien con", "I get on with my sister.", "phrasal verb", "ɡet ˈɒn wɪð"],
      ["hard-working", "trabajador/a", "She's very hard-working.", "adjetivo", "hɑːd ˈwɜːkɪŋ"],
      ["polite", "educado/a", "He's always polite.", "adjetivo", "pəˈlaɪt"],
      ["look after", "cuidar de", "I look after my brother.", "phrasal verb", "lʊk ˈɑːftə"],
      ["retired", "jubilado/a", "My grandad is retired.", "adjetivo", "rɪˈtaɪəd"],
    ]),
    vocabEx("Vocabulario — Personas y rutina", "Elige la opción correcta.", [
      mc("A person who lives near you:", ["neighbour", "colleague", "retired"], 0, "neighbour."),
      mc("A person you work with:", ["colleague", "neighbour", "polite"], 0, "colleague."),
      mc("Someone who works a lot is ___.", ["hard-working", "busy", "free"], 0, "hard-working."),
      mc("The opposite of 'rude' is ___.", ["polite", "busy", "retired"], 0, "polite."),
      mc("To take care of someone:", ["look after", "get up", "get on"], 0, "look after."),
      mc("To have a good relationship with someone:", ["get on with", "look after", "get up"], 0, "get on with."),
    ]),

    READING_HEAD,
    READING_P1("Reading Parte 1 — práctica", [
      mc("Sign: 'Reception closed 1–2 pm for lunch.'", ["Reception shuts for lunch.", "Open all day.", "Closed all day."], 0, "'closed 1–2 pm for lunch'."),
      mc("Text: 'Meeting starts at 3, don't be late!'", ["Be on time for the 3 pm meeting.", "No meeting.", "Meeting at 2."], 0, "'starts at 3'."),
      mc("Notice: 'Lift not working — use the stairs.'", ["Use the stairs.", "Use the lift.", "Closed."], 0, "'use the stairs'."),
      mc("Message: 'Can you feed the cat while I'm away?'", ["Asking to feed the cat.", "Selling a cat.", "No cat."], 0, "'feed the cat'."),
      mc("Sign: 'Please pay before you sit down.'", ["Pay first, then sit.", "Pay later.", "No payment."], 0, "'pay before you sit down'."),
      mc("Ad: 'Cleaner wanted — 3 mornings a week.'", ["A part-time cleaning job.", "No job.", "Full-time job."], 0, "'3 mornings a week'."),
    ]),
    reading(2, "Reading · Parte 2 — práctica (emparejar)", "THREE PART-TIME JOBS\n\nA) Dog Walker — walk dogs in the park, mornings only. For active people who love animals.\n\nB) Shop Assistant — serve customers at weekends. Good for students who are friendly and polite.\n\nC) Babysitter — look after children in the evenings. For patient, responsible people.", "Empareja cada persona con el trabajo ideal (A/B/C).", [
      mc("An active animal lover free in the mornings.", ["A", "B", "C"], 0, "A."),
      mc("A friendly student free at weekends.", ["A", "B", "C"], 1, "B."),
      mc("A responsible person free in the evenings.", ["A", "B", "C"], 2, "C."),
      mc("Someone who loves dogs.", ["A", "B", "C"], 0, "A."),
      mc("A patient person who is good with children.", ["A", "B", "C"], 2, "C."),
      mc("A polite student who wants weekend work.", ["A", "B", "C"], 1, "B."),
      mc("Someone who wants morning work outdoors.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — práctica (texto largo)", "MY FIRST JOB\n\nWhen I was seventeen, I got my first job as a shop assistant in a small bakery. I worked there every Saturday, and although I was nervous at first, I quickly grew to love it. The owner, Mrs Patel, was a kind but hard-working woman who taught me a lot.\n\nMy job was to serve customers, take their money, and keep the shop tidy. At first, I made some mistakes — once I gave a customer the wrong change! But Mrs Patel was patient. 'Don't worry,' she said. 'Everyone makes mistakes when they're learning.'\n\nI worked at the bakery for two years, and it was a wonderful experience. I learned to be polite, to work hard, and to talk to all kinds of people. Now I have a different job, but I'll never forget my first one. It taught me lessons that no school ever could.", "Lee el texto y responde (A/B/C).", [
      mc("How old was the writer in their first job?", ["Fifteen.", "Seventeen.", "Twenty."], 1, "'When I was seventeen'."),
      mc("Where did they work?", ["A shop for clothes.", "A bakery.", "A restaurant."], 1, "'a small bakery'."),
      mc("What mistake did they make once?", ["Broke something.", "Gave the wrong change.", "Came late."], 1, "'the wrong change'."),
      mc("What was Mrs Patel like?", ["Rude.", "Kind but hard-working.", "Lazy."], 1, "'a kind but hard-working woman'."),
      mc("How long did the writer work there?", ["One year.", "Two years.", "Five years."], 1, "'for two years'."),
    ]),
    reading(4, "Reading · Parte 4 — práctica (huecos con opciones)", "When I was seventeen, I got my first (1)___ as a shop assistant in a bakery. At first I was (2)___, but I quickly loved it. My job was to (3)___ customers and keep the shop tidy. Once I gave the wrong (4)___, but the owner was very (5)___. I worked there for two years and learned to be (6)___ and hard-working.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["job", "boss", "salary"], 0, "'my first job'."),
      mc("Hueco 2", ["nervous", "proud", "bored"], 0, "'I was nervous'."),
      mc("Hueco 3", ["serve", "make", "do"], 0, "'serve customers'."),
      mc("Hueco 4", ["change", "money", "tip"], 0, "'the wrong change'."),
      mc("Hueco 5", ["patient", "angry", "lazy"], 0, "'very patient'."),
      mc("Hueco 6", ["polite", "rude", "busy"], 0, "'polite and hard-working'."),
    ]),
    reading(5, "Reading · Parte 5 — práctica (open cloze)", "Hi Sol,\nDo you remember my first job? When I (1)___ seventeen, I worked as a shop assistant in a bakery every Saturday. At first I was nervous, (2)___ I quickly loved it. My job was to serve customers and keep the shop tidy. Once I gave the wrong change, (3)___ the owner was patient. I worked there (4)___ two years and learned (5)___ be polite and hard-working. I'll never (6)___ my first job!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["was"], "'When I was seventeen'."),
      fb("Hueco 2", ["but"], "contraste → but."),
      fb("Hueco 3", ["but"], "'but the owner was patient'."),
      fb("Hueco 4", ["for"], "'for two years'."),
      fb("Hueco 5", ["to"], "'learned to be'."),
      fb("Hueco 6", ["forget"], "'never forget'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un trabajo o tarea", "Cuéntale a tu amigo/a inglés/a de un trabajo o tarea que has hecho. Escríbele un email (25 palabras o más) con:\n· qué hacías,\n· qué aprendiste,\n· si te gustó y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona empieza su primer día de trabajo, nerviosa.\n2) Comete un pequeño error, pero su jefe/a es amable.\n3) Con el tiempo, se convierte en muy buena en su trabajo.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — práctica (cinco conversaciones)", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: What was your first job? Man: I worked in a bakery on Saturdays. Two. Man: Are you nervous about your new job? Woman: A little, but I'm excited too. Three. Woman: What time do you start work? Man: At nine, but I have to leave home at eight. Four. Man: Do you get on with your colleagues? Woman: Yes, they're all really friendly. Five. Woman: What do you like about your job? Man: I love helping customers.", [
      mc("1. What was the man's first job?", ["A shop assistant in a bakery.", "A waiter.", "A teacher."], 0, "'I worked in a bakery'."),
      mc("2. How does the woman feel about her new job?", ["Only nervous.", "A little nervous but excited.", "Bored."], 1, "'A little, but I'm excited too'."),
      mc("3. What time does the man leave home?", ["Eight.", "Nine.", "Seven."], 0, "'leave home at eight'."),
      mc("4. What are the woman's colleagues like?", ["Rude.", "Friendly.", "Lazy."], 1, "'really friendly'."),
      mc("5. What does the man love about his job?", ["The money.", "Helping customers.", "The hours."], 1, "'I love helping customers'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — práctica (trabajo y estudios)", "Responde con frases completas y un detalle.", "Parte 1 del A2 Key: preguntas sobre trabajo y estudios — qué haces o estudias, un trabajo que te gustaría, tu rutina diaria", "responder con frases completas y detalles", "I study, I work, I'd like to, I usually, because"),
    speaking(2, "Speaking · Parte 2 — práctica (gustos y razones)", "Da opiniones, razones y sugerencias.", "Parte 2 del A2 Key: gustos sobre distintos trabajos; el examinador pregunta qué trabajo prefieres y por qué", "opinar y razonar", "I prefer, I'd like, because, interesting, help people"),

    SUMMARY("Resumen del Día 56", [
      "Reading practicado a fondo: reparte el tiempo y lee todo el texto.",
      "Repaso exprés de gramática y vocabulario de alta frecuencia.",
      "Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 57", "Cronométrate haciendo el Reading de hoy otra vez (objetivo: más rápido). Repasa las flashcards. Mañana: Listening intensivo."),
  ],
};

const DAY57 = {
  title: "Día 57 — Práctica intensiva de Listening",
  description: "Práctica a fondo del Listening con dos partes hoy y las demás destrezas. Listening P2 y P3.",
  pedagogy: {
    objective: "Practicar el Listening con confianza, usando las dos escuchas.",
    summary: "Listening intensivo (P2 y P3); Reading; Writing; Speaking.",
    reviewPrompts: ["¿Lees las preguntas antes de escuchar?", "¿Te mantienes tranquilo/a en la 1ª escucha?"],
  },
  items: [
    TEXT("🏁 Día de LISTENING intensivo. Recuerda: cada audio se oye DOS veces. Lee las preguntas antes, mantén la calma en la primera escucha y confirma en la segunda."),
    TIP("Recuerda — el Listening dura ~30 minutos", "Al final tienes tiempo para pasar las respuestas. Escribe con claridad. Si fallas una, no te bloquees: sigue con la siguiente."),
    GRAMMAR("Repaso exprés de gramática", "Números, horas y fechas son claves en el Listening: half past nine (9:30), a quarter to ten (9:45), the fifteenth of June, thirty pounds. Practícalos en voz alta."),
    grammarEx("Calentamiento — números y horas", "Elige la opción correcta.", [
      mc("'Half past nine' is…", ["9:30", "9:15", "8:30"], 0, "9:30."),
      mc("'A quarter to ten' is…", ["9:45", "10:15", "9:15"], 0, "9:45."),
      mc("'The fifteenth of June' is…", ["15 June", "5 June", "50 June"], 0, "15 June."),
      mc("'Thirty' is…", ["13", "30", "3"], 1, "30."),
      mc("'A quarter past six' is…", ["6:15", "6:45", "5:45"], 0, "6:15."),
      mc("'Thirteen' is…", ["13", "30", "3"], 0, "13."),
    ]),
    GRAMMAR("Vocabulario del día — Repaso: casa y lugares", "Alta frecuencia (casa, ciudad, lugares)."),
    deck("A2 Key S12D57 — Repaso: casa y lugares", [
      ["flat", "piso / apartamento", "I live in a small flat.", "sustantivo", "flæt"],
      ["neighbourhood", "barrio", "It's a nice neighbourhood.", "sustantivo", "ˈneɪbəhʊd"],
      ["city centre", "centro", "The shops are in the city centre.", "colocación", "ˌsɪti ˈsentə"],
      ["library", "biblioteca", "I study at the library.", "sustantivo", "ˈlaɪbrəri"],
      ["market", "mercado", "I buy fruit at the market.", "sustantivo", "ˈmɑːkɪt"],
      ["crowded", "abarrotado", "The bus was crowded.", "adjetivo", "ˈkraʊdɪd"],
      ["quiet", "tranquilo", "It's a quiet street.", "adjetivo", "ˈkwaɪət"],
      ["upstairs", "arriba (piso de arriba)", "The bathroom is upstairs.", "adverbio", "ˌʌpˈsteəz"],
      ["opposite", "enfrente de", "The bank is opposite the café.", "preposición", "ˈɒpəzɪt"],
      ["nearby", "cerca", "There's a shop nearby.", "adverbio", "ˌnɪəˈbaɪ"],
    ]),
    vocabEx("Vocabulario — Casa y lugares", "Elige la opción correcta.", [
      mc("An apartment is a ___ in British English.", ["flat", "market", "library"], 0, "flat."),
      mc("A place full of people is ___.", ["crowded", "quiet", "nearby"], 0, "crowded."),
      mc("You borrow books from the ___.", ["library", "market", "flat"], 0, "library."),
      mc("The area where you live is your ___.", ["neighbourhood", "market", "centre"], 0, "neighbourhood."),
      mc("'Facing' something means it's ___.", ["opposite", "upstairs", "nearby"], 0, "opposite."),
      mc("Not far away is ___.", ["nearby", "crowded", "quiet"], 0, "nearby."),
    ]),

    READING_HEAD,
    READING_P1("Reading Parte 1 — práctica", [
      mc("Sign: 'Library open until 8 pm on weekdays.'", ["Open late on weekdays.", "Closed weekdays.", "Open all night."], 0, "'until 8 pm on weekdays'."),
      mc("Notice: 'Market cancelled today due to rain.'", ["No market today.", "Market as normal.", "Market tomorrow."], 0, "'Market cancelled today'."),
      mc("Text: 'The bank is opposite the café, you can't miss it.'", ["Bank faces the café.", "Bank is far.", "No bank."], 0, "'opposite the café'."),
      mc("Sign: 'Quiet please — people are studying.'", ["Be quiet.", "Talk loudly.", "No studying."], 0, "'Quiet please'."),
      mc("Notice: 'Toilets upstairs, second door on the left.'", ["Toilets are upstairs.", "Toilets downstairs.", "No toilets."], 0, "'Toilets upstairs'."),
      mc("Ad: 'Nice flat to rent nearby the station.'", ["A flat near the station.", "A flat far away.", "No flat."], 0, "'nearby the station'."),
    ]),
    reading(2, "Reading · Parte 2 — práctica (emparejar)", "THREE PLACES TO STUDY\n\nA) The Library — silent, with big desks and free wifi. Open until 8 pm.\n\nB) Corner Café — quiet in the afternoons, nice coffee, and you can talk softly.\n\nC) Study Room at college — free to use, but you must book it in advance.", "Empareja cada persona con el lugar ideal (A/B/C).", [
      mc("Someone who needs complete silence and wifi.", ["A", "B", "C"], 0, "A: Library."),
      mc("A person who likes studying with a coffee.", ["A", "B", "C"], 1, "B: Café."),
      mc("Someone who wants a free room and can book ahead.", ["A", "B", "C"], 2, "C: Study Room."),
      mc("A person who wants to talk softly with a friend.", ["A", "B", "C"], 1, "B."),
      mc("Someone who studies until late.", ["A", "B", "C"], 0, "A: until 8 pm."),
      mc("A student who plans in advance.", ["A", "B", "C"], 2, "C: book in advance."),
      mc("Someone who needs total quiet.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — práctica (texto largo)", "THE QUIET PLACE\n\nWhen I have an important exam, I always study at the same place: the town library. It's a beautiful old building in the city centre, opposite the market. Although the streets outside are noisy and crowded, inside the library it's completely quiet.\n\nI usually sit at a big desk near the window, upstairs, where there's lots of light. I like to arrive early, before it gets busy, so I can choose my favourite seat. The library has free wifi and thousands of books, so if I need information, I can always find it.\n\nThe best thing is the atmosphere. Everyone is studying quietly, and it helps me concentrate. My friends prefer to study at home, but I can't — there are too many things to distract me! For me, the library is the perfect place to prepare. It's quiet, comfortable, and free.", "Lee el texto y responde (A/B/C).", [
      mc("Where does the writer study?", ["At home.", "At the town library.", "In a café."], 1, "'the town library'."),
      mc("Where is the library?", ["By the sea.", "In the city centre, opposite the market.", "Outside town."], 1, "'in the city centre, opposite the market'."),
      mc("Where does the writer usually sit?", ["Downstairs.", "Upstairs near the window.", "Near the door."], 1, "'upstairs, where there's lots of light'."),
      mc("Why does the writer arrive early?", ["To leave early.", "To choose a favourite seat.", "To meet friends."], 1, "'choose my favourite seat'."),
      mc("Why can't the writer study at home?", ["No desk.", "Too many distractions.", "No wifi."], 1, "'too many things to distract me'."),
    ]),
    reading(4, "Reading · Parte 4 — práctica (huecos con opciones)", "When I have an exam, I study at the town (1)___. It's an old building in the city centre, (2)___ the market. Outside it's crowded, but inside it's completely (3)___. I sit at a big desk (4)___, near the window. I arrive early to choose my favourite (5)___. My friends study at home, but I can't concentrate there — too many (6)___!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["library", "market", "flat"], 0, "'the town library'."),
      mc("Hueco 2", ["opposite", "upstairs", "nearby"], 0, "'opposite the market'."),
      mc("Hueco 3", ["quiet", "crowded", "noisy"], 0, "'completely quiet'."),
      mc("Hueco 4", ["upstairs", "opposite", "nearby"], 0, "'a big desk upstairs'."),
      mc("Hueco 5", ["seat", "book", "desk"], 0, "'favourite seat'."),
      mc("Hueco 6", ["distractions", "seats", "books"], 0, "'too many distractions'."),
    ]),
    reading(5, "Reading · Parte 5 — práctica (open cloze)", "Hi Sol,\nBefore an exam, I always study (1)___ the town library. It's an old building in the city centre, opposite the market. Outside it's crowded, (2)___ inside it's completely quiet. I sit upstairs, near the window, (3)___ there's lots of light. I arrive early (4)___ choose my favourite seat. My friends study at home, but I can't concentrate there because there are (5)___ many distractions. For me, the library is (6)___ perfect place!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["at", "in"], "'study at/in the library'."),
      fb("Hueco 2", ["but"], "contraste → but."),
      fb("Hueco 3", ["where"], "lugar → where."),
      fb("Hueco 4", ["to"], "'early to choose'."),
      fb("Hueco 5", ["too"], "'too many distractions'."),
      fb("Hueco 6", ["the"], "'the perfect place'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu lugar para estudiar", "Cuéntale a tu amigo/a inglés/a dónde estudias mejor. Escríbele un email (25 palabras o más) con:\n· dónde estudias,\n· por qué te gusta,\n· un consejo para concentrarse.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona intenta estudiar en casa pero hay mucho ruido.\n2) Se va a la biblioteca, tranquila.\n3) Estudia concentrada y aprueba el examen.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — práctica (completar notas)", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a woman leaving a message about a study group. Hi, it's Nina. Our study group is meeting on Wednesday at the library. We'll meet at four o'clock, upstairs in the quiet room. Please bring your grammar book and a notebook. We're going to focus on the past tense. The session lasts about ninety minutes. See you there!", [
      fb("Study group on ___", ["Wednesday"], "'on Wednesday'."),
      fb("At the ___ (place)", ["library"], "'at the library'."),
      fb("Meet at ___ o'clock.", ["four", "4"], "'at four o'clock'."),
      fb("Bring your grammar book and a ___.", ["notebook"], "'a notebook'."),
      fb("Focus on the ___ tense.", ["past"], "'the past tense'."),
    ]),
    listening(3, "Listening · Parte 3 — práctica (conversación)", "Escucha a dos amigos hablando de estudiar y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Tom and Ella, talking about revising for the exam. Tom: Where do you revise, Ella? Ella: At the library — it's much quieter than my house. Tom: Same for me. What do you find hardest? Ella: The listening, definitely. I can't understand fast speech. Tom: Have you tried watching films with subtitles? Ella: Yes, it really helps! What about you? Tom: I struggle with writing — I always forget the past tense. Ella: You should practise a little every day. Tom: Good idea. Let's revise together on Wednesday.", [
      mc("Where does Ella revise?", ["At home.", "At the library.", "In a café."], 1, "'At the library'."),
      mc("What does Ella find hardest?", ["Reading.", "Listening.", "Writing."], 1, "'The listening, definitely'."),
      mc("What helps Ella with listening?", ["Reading books.", "Films with subtitles.", "Music."], 1, "'watching films with subtitles'."),
      mc("What does Tom struggle with?", ["Speaking.", "Writing.", "Reading."], 1, "'I struggle with writing'."),
      mc("When will they revise together?", ["Monday.", "Wednesday.", "Friday."], 1, "'revise together on Wednesday'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — práctica (estudios y rutina)", "Responde con frases completas y un detalle.", "Parte 1 del A2 Key: preguntas sobre estudiar — dónde estudias, cuándo, qué te ayuda a concentrarte", "hablar de hábitos de estudio", "I study at, I usually, it helps me, because, in the evening"),
    speaking(2, "Speaking · Parte 2 — práctica (gustos y razones)", "Da opiniones, razones y sugerencias.", "Parte 2 del A2 Key: gustos sobre estudiar en casa o en la biblioteca, solo o en grupo; el examinador pregunta qué prefieres y por qué", "opinar y razonar", "I prefer, because, quieter, concentrate, with friends"),

    SUMMARY("Resumen del Día 57", [
      "Listening practicado a fondo: dos escuchas, lee las preguntas antes, capta números/horas.",
      "Repaso de vocabulario de casa y lugares.",
      "Practicadas las 4 destrezas; Listening P2 y P3.",
    ]),
    INFO("Tarea para el Día 58", "Practica escuchando un audio en inglés 10 minutos. Repasa las flashcards. Mañana: Writing intensivo con modelos."),
  ],
};

const DAY58 = {
  title: "Día 58 — Práctica intensiva de Writing",
  description: "Práctica a fondo del Writing (Partes 6 y 7) con respuestas modelo. Reading, Listening P4 y Speaking.",
  pedagogy: {
    objective: "Escribir un email (P6) y un relato (P7) siguiendo modelos y consejos.",
    summary: "Writing intensivo (P6 y P7) con modelos; Reading; Listening P4; Speaking.",
    reviewPrompts: ["¿Has incluido los 3 puntos del email?", "¿Tu relato tiene 35+ palabras y va en orden?"],
  },
  items: [
    TEXT("🏁 Día de WRITING intensivo. Hoy escribes un email (Parte 6) y un relato (Parte 7), y ves respuestas MODELO para aprender qué espera Cambridge."),
    GRAMMAR("Respuesta MODELO — Parte 6 (email de 25+ palabras)", `Tarea: Tu amigo Alex te invita a su cumpleaños. Escríbele: dale las gracias, pregunta qué puedes llevar y di a qué hora llegarás.

MODELO (≈35 palabras):
"Hi Alex,
Thank you so much for inviting me to your birthday party! I'd love to come. What can I bring — some drinks or a cake? I'll arrive at about seven o'clock. See you soon!
Marta"

Por qué funciona: saluda, incluye los TRES puntos (gracias, qué llevar, hora), usa conectores y termina con el nombre. Más de 25 palabras.`),
    GRAMMAR("Respuesta MODELO — Parte 7 (relato de 35+ palabras)", `Tarea: 3 imágenes — 1) una chica hace la maleta; 2) sube a un tren; 3) llega a la playa.

MODELO (≈45 palabras):
"First, Emma packed her bag early in the morning because she was very excited. Then she took the train to the coast and listened to music on the way. Finally, she arrived at the beach, felt the warm sun, and smiled happily."

Por qué funciona: cuenta las 3 imágenes EN ORDEN, en pasado, con conectores (first/then/finally) y más de 35 palabras.`),
    grammarEx("Calentamiento — corrige el error", "Elige la frase CORRECTA.", [
      mc("", ["She go to school every day.", "She goes to school every day.", "She going to school every day."], 1, "3ª persona → goes."),
      mc("", ["Yesterday I go to the park.", "Yesterday I went to the park.", "Yesterday I gone to the park."], 1, "past simple → went."),
      mc("", ["I have 20 years.", "I am 20 years old.", "I have 20 years old."], 1, "edad con 'be'."),
      mc("", ["Thank you for invite me.", "Thank you for inviting me.", "Thank you for to invite me."], 1, "for + -ing."),
      mc("", ["First, then, finally he arrived.", "First he arrived, then he ate, finally he slept.", "Finally he arrived first."], 1, "orden lógico."),
      mc("", ["I'd love come.", "I'd love to come.", "I'd love coming."], 1, "would love + to."),
    ]),
    GRAMMAR("Vocabulario del día — Repaso: acciones y viajes", "Alta frecuencia (verbos de acción, viajes)."),
    deck("A2 Key S12D58 — Repaso: acciones y viajes", [
      ["arrive", "llegar", "We arrived at eight.", "verbo", "əˈraɪv"],
      ["leave", "salir / dejar", "I leave home at seven.", "verbo", "liːv"],
      ["pack", "hacer la maleta", "I packed my bag.", "verbo", "pæk"],
      ["book", "reservar", "We booked a hotel.", "verbo", "bʊk"],
      ["trip", "viaje (corto)", "We went on a trip.", "sustantivo", "trɪp"],
      ["abroad", "al extranjero", "We travelled abroad.", "adverbio", "əˈbrɔːd"],
      ["luggage", "equipaje", "I packed my luggage.", "sustantivo", "ˈlʌɡɪdʒ"],
      ["ticket", "billete / entrada", "I bought a ticket.", "sustantivo", "ˈtɪkɪt"],
      ["journey", "trayecto / viaje", "The journey took two hours.", "sustantivo", "ˈdʒɜːni"],
      ["excited", "emocionado / ilusionado", "I was so excited!", "adjetivo", "ɪkˈsaɪtɪd"],
    ]),
    vocabEx("Vocabulario — Acciones y viajes", "Elige la opción correcta.", [
      mc("The opposite of 'arrive' is ___.", ["leave", "book", "pack"], 0, "leave."),
      mc("To put clothes in a suitcase is to ___.", ["pack", "book", "arrive"], 0, "pack."),
      mc("To reserve a hotel is to ___.", ["book", "leave", "arrive"], 0, "book."),
      mc("Your bags for a trip are your ___.", ["luggage", "ticket", "journey"], 0, "luggage."),
      mc("To travel to another country is to go ___.", ["abroad", "home", "away"], 0, "abroad."),
      mc("How you feel before a fun trip:", ["excited", "bored", "tired"], 0, "excited."),
    ]),

    READING_HEAD,
    READING_P1("Reading Parte 1 — práctica", [
      mc("Sign: 'Check in closes 40 minutes before departure.'", ["Arrive early to check in.", "Check in anytime.", "No check in."], 0, "'closes 40 minutes before departure'."),
      mc("Text: 'Don't forget to pack your passport!'", ["Remember your passport.", "No passport.", "Leave it home."], 0, "'pack your passport'."),
      mc("Notice: 'Left luggage office on the ground floor.'", ["Store bags on the ground floor.", "No luggage.", "Upstairs."], 0, "'Left luggage office'."),
      mc("Message: 'We've arrived safely, see you soon!'", ["They arrived safely.", "They left.", "They're lost."], 0, "'arrived safely'."),
      mc("Sign: 'Tickets must be bought before boarding.'", ["Buy tickets before you board.", "Free travel.", "No tickets."], 0, "'bought before boarding'."),
      mc("Ad: 'Cheap trips abroad this summer — book now!'", ["Cheap holidays abroad.", "No trips.", "Expensive trips."], 0, "'Cheap trips abroad'."),
    ]),
    reading(2, "Reading · Parte 2 — práctica (emparejar)", "THREE HOLIDAYS\n\nA) City Trip — museums, shops and restaurants in a famous capital. Lots to do.\n\nB) Beach Week — sun, sea and relaxing by the pool. Perfect for doing nothing.\n\nC) Adventure Tour — hiking, climbing and camping. For active, energetic people.", "Empareja cada persona con las vacaciones ideales (A/B/C).", [
      mc("Someone who loves museums and shopping.", ["A", "B", "C"], 0, "A."),
      mc("A person who just wants to relax in the sun.", ["A", "B", "C"], 1, "B."),
      mc("Someone active who enjoys hiking and camping.", ["A", "B", "C"], 2, "C."),
      mc("A person who wants lots to do in a city.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to do nothing by the pool.", ["A", "B", "C"], 1, "B."),
      mc("An energetic person who likes climbing.", ["A", "B", "C"], 2, "C."),
      mc("A person who loves capital cities.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — práctica (texto largo)", "THE PERFECT TRIP\n\nLast summer, my sister and I went on the best trip of our lives. We saved money for a year, and finally we could travel abroad together. We chose to visit three cities in two weeks — a real adventure!\n\nThe night before, we were so excited that we couldn't sleep. We packed our luggage carefully and checked our tickets three times. In the morning, we left home early and took a taxi to the airport. Although the journey was long, we didn't mind, because we were together.\n\nEach city was different and wonderful. We visited museums, tried new food, and took hundreds of photos. Of course, some things went wrong — we got lost once, and it rained a lot in the second city. But those problems became our favourite stories! When we arrived home, we were tired but so happy. We're already saving for our next trip.", "Lee el texto y responde (A/B/C).", [
      mc("How long did they save money?", ["A month.", "A year.", "A week."], 1, "'saved money for a year'."),
      mc("How many cities did they visit?", ["Two.", "Three.", "Four."], 1, "'three cities in two weeks'."),
      mc("Why couldn't they sleep the night before?", ["Too hot.", "Too excited.", "Too noisy."], 1, "'so excited that we couldn't sleep'."),
      mc("What went wrong on the trip?", ["They lost their luggage.", "They got lost and it rained.", "They missed the plane."], 1, "'we got lost… it rained a lot'."),
      mc("How did they feel when they arrived home?", ["Tired but happy.", "Angry.", "Bored."], 1, "'tired but so happy'."),
    ]),
    reading(4, "Reading · Parte 4 — práctica (huecos con opciones)", "Last summer my sister and I went on the best (1)___ of our lives. We saved money for a year to travel (2)___. The night before, we were so (3)___ we couldn't sleep. We (4)___ our luggage carefully. In the morning we (5)___ home early. Some things went wrong, but those became our favourite stories! We (6)___ home tired but happy.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["trip", "ticket", "luggage"], 0, "'the best trip'."),
      mc("Hueco 2", ["abroad", "home", "nearby"], 0, "'travel abroad'."),
      mc("Hueco 3", ["excited", "bored", "tired"], 0, "'so excited'."),
      mc("Hueco 4", ["packed", "booked", "left"], 0, "'packed our luggage'."),
      mc("Hueco 5", ["left", "arrived", "packed"], 0, "'left home early'."),
      mc("Hueco 6", ["arrived", "left", "packed"], 0, "'arrived home tired'."),
    ]),
    reading(5, "Reading · Parte 5 — práctica (open cloze)", "Hi Sol,\nLast summer my sister and I went on the best trip of our lives! We saved money (1)___ a year to travel abroad. The night before, we were so excited that we couldn't sleep. We packed our luggage (2)___ and checked our tickets. In the morning we left home early. Although the journey was long, we didn't (3)___, because we were together. Some things went wrong, (4)___ they became our favourite stories! We arrived home tired (5)___ happy. We're already saving (6)___ our next trip!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["for"], "'for a year'."),
      fb("Hueco 2", ["carefully"], "adverbio de modo."),
      fb("Hueco 3", ["mind"], "'we didn't mind'."),
      fb("Hueco 4", ["but"], "contraste → but."),
      fb("Hueco 5", ["but"], "'tired but happy'."),
      fb("Hueco 6", ["for"], "'saving for our next trip'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Escribe tu email (con modelo visto)", "Tu amigo/a inglés/a te ha invitado a ir de viaje. Escríbele un email (25 palabras o más) con estos 3 puntos:\n· dale las gracias y di que te encantaría ir,\n· pregunta qué necesitas llevar,\n· di cuándo estás libre.\nEmpieza con 'Hi' y firma con tu nombre.", 25, 80),
    writing(7, "Writing · Parte 7 — Escribe tu relato (con modelo visto)", "Escribe un relato (35 palabras o más), EN ORDEN y en pasado, con estas TRES imágenes:\n1) Dos hermanas hacen las maletas, emocionadas.\n2) Cogen un avión.\n3) Llegan a una ciudad nueva y hacen turismo felices.\nUsa first, then, finally.", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — práctica (cinco monólogos)", "Escucha a cinco personas hablar de su viaje y elige de qué habla cada una.", "This is Part Four. You will hear five people talking about their holidays. One. We spent the whole week on the beach, just relaxing in the sun. Two. I love city trips — museums, shops and restaurants everywhere. Three. Our adventure holiday was tiring but amazing; we hiked every day. Four. The best part of my trip was trying all the delicious local food. Five. I always take hundreds of photos so I never forget my holidays.", [
      mc("Person 1 is talking about…", ["a beach holiday", "a city trip", "food"], 0, "'the whole week on the beach'."),
      mc("Person 2 is talking about…", ["a city trip", "a beach holiday", "photos"], 0, "'I love city trips'."),
      mc("Person 3 is talking about…", ["an adventure holiday", "food", "photos"], 0, "'adventure holiday… hiked'."),
      mc("Person 4 is talking about…", ["food", "the beach", "photos"], 0, "'trying all the delicious local food'."),
      mc("Person 5 is talking about…", ["taking photos", "the beach", "food"], 0, "'take hundreds of photos'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — práctica (viajes)", "Responde con frases completas y un detalle.", "Parte 1 del A2 Key: preguntas sobre viajes — un viaje que hiciste, adónde te gustaría ir, cómo prefieres viajar", "hablar de viajes en pasado y con planes", "last year I went, I'd like to visit, I prefer, by plane, because"),
    speaking(2, "Speaking · Parte 2 — práctica (gustos y razones)", "Da opiniones, razones y sugerencias.", "Parte 2 del A2 Key: gustos sobre tipos de vacaciones (playa, ciudad, aventura); el examinador pregunta qué prefieres y por qué", "opinar y razonar", "I prefer, because, relaxing, exciting, I'd rather"),

    SUMMARY("Resumen del Día 58", [
      "Has visto respuestas MODELO de Writing P6 y P7.",
      "P6: saludo + 3 puntos + nombre (25+). P7: 3 imágenes en orden, en pasado (35+).",
      "Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 59", "Escribe un email y un relato completos y cuenta las palabras. Repasa las flashcards. Mañana: Speaking intensivo y consejos del día del examen."),
  ],
};

const DAY59 = {
  title: "Día 59 — Práctica intensiva de Speaking + día del examen",
  description: "Práctica a fondo del Speaking (Partes 1 y 2) y todo lo que necesitas saber para el día del examen. Reading, Listening P5.",
  pedagogy: {
    objective: "Practicar el Speaking con confianza y prepararte para el día del examen.",
    summary: "Speaking intensivo (P1 y P2); consejos del día del examen; Reading; Listening P5.",
    reviewPrompts: ["¿Qué llevas el día del examen?", "¿Cómo empiezas una respuesta en la Parte 1?"],
  },
  items: [
    TEXT("🏁 Penúltimo día. Hoy practicas el SPEAKING a fondo y repasas todo lo del día del examen. ¡Mañana, el simulacro final!"),
    INFO("El día del examen — checklist", "· Duerme bien la noche antes; no estudies hasta muy tarde.\n· Lleva tu DOCUMENTO DE IDENTIDAD y un par de bolígrafos.\n· Llega PRONTO (15–20 min antes).\n· Lee siempre las INSTRUCCIONES con calma.\n· Reparte el tiempo; si te bloqueas, marca algo y sigue.\n· En el Speaking: sonríe, habla claro y da razones. ¡La comunicación cuenta!"),
    TIP("Estrategia — Speaking, últimos consejos", "Parte 1: frase completa + un detalle. Si no entiendes: 'Sorry, can you repeat that, please?' Parte 2: da tu opinión Y una razón, haz sugerencias ('How about…?') y reacciona a las del otro ('Good idea!'). Es mejor una frase sencilla y correcta que una difícil con errores."),
    grammarEx("Calentamiento — respuestas naturales", "Elige la mejor respuesta.", [
      mc("'Do you like sport?'", ["Yes.", "Yes, I love football because I play every weekend.", "Sport."], 1, "frase + detalle + razón."),
      mc("'Where are you from?'", ["From.", "I'm from Seville, in the south of Spain.", "Spain city."], 1, "frase completa."),
      mc("You didn't understand:", ["What?", "Sorry, can you repeat that, please?", "Again."], 1, "petición educada."),
      mc("Make a suggestion:", ["We go park.", "How about going to the park?", "Park now."], 1, "How about + -ing."),
      mc("'Do you prefer tea or coffee?'", ["Coffee.", "I prefer coffee because it helps me wake up.", "Yes."], 1, "opinión + razón."),
      mc("React to a suggestion:", ["No.", "Good idea! Let's do that.", "Maybe no."], 1, "reacción positiva."),
    ]),
    GRAMMAR("Vocabulario del día — Repaso: tiempo libre y gustos", "Alta frecuencia (tiempo libre, gustos)."),
    deck("A2 Key S12D59 — Repaso: tiempo libre", [
      ["hobby", "afición", "My hobby is painting.", "sustantivo", "ˈhɒbi"],
      ["hang out", "pasar el rato", "I hang out with friends.", "phrasal verb", "hæŋ ˈaʊt"],
      ["enjoy", "disfrutar", "I enjoy reading.", "verbo", "ɪnˈdʒɔɪ"],
      ["prefer", "preferir", "I prefer tea to coffee.", "verbo", "prɪˈfɜː"],
      ["fun", "divertido / diversión", "It was so much fun.", "sustantivo/adjetivo", "fʌn"],
      ["relax", "relajarse", "I relax at the weekend.", "verbo", "rɪˈlæks"],
      ["exciting", "emocionante", "It was an exciting game.", "adjetivo", "ɪkˈsaɪtɪŋ"],
      ["boring", "aburrido", "The film was boring.", "adjetivo", "ˈbɔːrɪŋ"],
      ["favourite", "favorito/a", "It's my favourite hobby.", "adjetivo", "ˈfeɪvərɪt"],
      ["try", "probar / intentar", "I want to try surfing.", "verbo", "traɪ"],
    ]),
    vocabEx("Vocabulario — Tiempo libre", "Elige la opción correcta.", [
      mc("Something you do for fun in your free time is a ___.", ["hobby", "job", "chore"], 0, "hobby."),
      mc("The opposite of 'boring' is ___.", ["exciting", "relaxing", "favourite"], 0, "exciting."),
      mc("To like one thing more than another is to ___ it.", ["prefer", "enjoy", "try"], 0, "prefer."),
      mc("To rest and feel calm is to ___.", ["relax", "try", "hang"], 0, "relax."),
      mc("The one you like best is your ___.", ["favourite", "boring", "fun"], 0, "favourite."),
      mc("To do something for the first time is to ___ it.", ["try", "prefer", "enjoy"], 0, "try."),
    ]),

    READING_HEAD,
    READING_P1("Reading Parte 1 — práctica", [
      mc("Sign: 'Bring ID and arrive 20 minutes early.'", ["Come early with ID.", "No ID.", "Arrive late."], 0, "'Bring ID and arrive early'."),
      mc("Notice: 'Phones must be switched off during the exam.'", ["Turn off phones.", "Use phones.", "No exam."], 0, "'switched off during the exam'."),
      mc("Text: 'Good luck tomorrow — stay calm!'", ["Encouragement for tomorrow.", "Bad news.", "A complaint."], 0, "'Good luck… stay calm'."),
      mc("Sign: 'Silence — speaking test in progress.'", ["Be quiet, a test is on.", "Talk freely.", "No test."], 0, "'speaking test in progress'."),
      mc("Note: 'Water is allowed; food is not.'", ["You can bring water, not food.", "No water.", "Food is fine."], 0, "'Water is allowed; food is not'."),
      mc("Reminder: 'Read all instructions carefully.'", ["Read instructions well.", "Ignore instructions.", "No instructions."], 0, "'Read all instructions carefully'."),
    ]),
    reading(2, "Reading · Parte 2 — práctica (emparejar)", "THREE HOBBIES TO TRY\n\nA) Photography Club — learn to take great photos and go on photo walks. Creative and relaxing.\n\nB) Football Team — train twice a week and play matches. Active and fun, for team players.\n\nC) Book Club — read a new book each month and discuss it. Great for people who love reading.", "Empareja cada persona con la afición ideal (A/B/C).", [
      mc("A creative person who loves taking photos.", ["A", "B", "C"], 0, "A."),
      mc("An active person who enjoys team sports.", ["A", "B", "C"], 1, "B."),
      mc("Someone who loves reading and discussing books.", ["A", "B", "C"], 2, "C."),
      mc("A person who wants a relaxing, creative hobby.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to play matches.", ["A", "B", "C"], 1, "B."),
      mc("A person who reads a book every month.", ["A", "B", "C"], 2, "C."),
      mc("Someone who likes photo walks.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — práctica (texto largo)", "THE DAY OF THE EXAM\n\nThe day of my A2 Key exam finally arrived. I woke up early, had a good breakfast, and checked my bag twice: ID card, two pens, and a bottle of water. My mother said, 'Stay calm and do your best. That's all you can do.'\n\nI arrived at the exam centre twenty minutes early, which gave me time to relax. There were many other students, and everyone looked a little nervous. When the exam started, I remembered my teacher's advice: read the instructions carefully and manage my time.\n\nThe reading and listening went well, although the listening was fast in some parts. In the speaking test, I had a partner, and the examiners were friendly. I gave full answers and made suggestions. When it was all over, I felt a huge sense of relief — and pride. Whatever the result, I knew I had prepared well and done my best.", "Lee el texto y responde (A/B/C).", [
      mc("What did the writer check in their bag?", ["Books.", "ID, two pens, water.", "A dictionary."], 1, "'ID card, two pens, and a bottle of water'."),
      mc("What advice did the mother give?", ["Study more.", "Stay calm and do your best.", "Don't go."], 1, "'Stay calm and do your best'."),
      mc("How early did the writer arrive?", ["Five minutes.", "Twenty minutes.", "An hour."], 1, "'twenty minutes early'."),
      mc("What was fast in some parts?", ["The reading.", "The listening.", "The speaking."], 1, "'the listening was fast in some parts'."),
      mc("How did the writer feel at the end?", ["Angry.", "Relief and pride.", "Bored."], 1, "'a huge sense of relief — and pride'."),
    ]),
    reading(4, "Reading · Parte 4 — práctica (huecos con opciones)", "The day of my exam arrived. I woke up early, had a good breakfast, and checked my (1)___: ID card, two pens and water. My mother said, 'Stay (2)___ and do your best.' I arrived twenty minutes (3)___, which helped me relax. During the exam, I read the (4)___ carefully. The listening was a bit (5)___, but I stayed calm. At the end, I felt a huge sense of (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["bag", "book", "phone"], 0, "'checked my bag'."),
      mc("Hueco 2", ["calm", "nervous", "busy"], 0, "'Stay calm'."),
      mc("Hueco 3", ["early", "late", "fast"], 0, "'twenty minutes early'."),
      mc("Hueco 4", ["instructions", "photos", "friends"], 0, "'read the instructions'."),
      mc("Hueco 5", ["fast", "slow", "quiet"], 0, "'a bit fast'."),
      mc("Hueco 6", ["relief", "anger", "boredom"], 0, "'sense of relief'."),
    ]),
    reading(5, "Reading · Parte 5 — práctica (open cloze)", "Hi Sol,\nThe day of my exam finally arrived! I woke (1)___ early and had a good breakfast. I checked my bag twice: ID, two pens (2)___ water. My mother said, 'Stay calm (3)___ do your best.' I arrived twenty minutes early, (4)___ helped me relax. During the exam, I read the instructions carefully. The listening was a bit fast, (5)___ I stayed calm. At the end, I felt a huge sense (6)___ relief and pride!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["up"], "'woke up'."),
      fb("Hueco 2", ["and"], "'two pens and water'."),
      fb("Hueco 3", ["and"], "'calm and do your best'."),
      fb("Hueco 4", ["which"], "'which helped me relax'."),
      fb("Hueco 5", ["but"], "contraste → but."),
      fb("Hueco 6", ["of"], "'sense of relief'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Después del examen", "Acabas de hacer el examen y escribes a tu amigo/a inglés/a. Escríbele un email (25 palabras o más) con:\n· cómo fue el examen,\n· qué parte te resultó más fácil o difícil,\n· qué vas a hacer para celebrar.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona se prepara la mochila la mañana del examen.\n2) Hace el examen con calma.\n3) Sale aliviada y lo celebra con su familia.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — práctica (emparejar)", "Escucha a Max hablar de cómo se sintió cada compañero después del examen y empareja cada persona con su sentimiento (A/B/C…).", "This is Part Five. You will hear Max talking about how his classmates felt after the exam. Anna felt relieved, because it was finally over. Ben felt confident, because he had studied really hard. Carla felt nervous, because she wasn't sure about the listening. David felt happy, because he answered every question. And Emma felt tired, because she hadn't slept well the night before.", [
      mc("Anna", ["relieved", "confident", "nervous"], 0, "'felt relieved'."),
      mc("Ben", ["confident", "tired", "happy"], 0, "'felt confident'."),
      mc("Carla", ["nervous", "relieved", "happy"], 0, "'felt nervous'."),
      mc("David", ["happy", "tired", "nervous"], 0, "'felt happy'."),
      mc("Emma", ["tired", "confident", "relieved"], 0, "'felt tired'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — SIMULACRO (preguntas personales)", "Responde a todas las preguntas como en el examen real: frase completa + un detalle.", "Parte 1 del A2 Key (simulacro): el examinador te hace una serie completa de preguntas personales sobre tu vida, tu pasado y tus planes", "responder como en el examen real, con soltura", "My name is, I live in, last year, I'm going to, because"),
    speaking(2, "Speaking · Parte 2 — SIMULACRO (gustos y decidir)", "Da opiniones, razones y sugerencias, como en el examen real.", "Parte 2 del A2 Key (simulacro): habla de tus gustos y decide un plan con el examinador (p. ej., cómo pasar un día libre), dando razones y haciendo sugerencias", "opinar, sugerir y razonar con fluidez", "I think, how about, why don't we, because, I'd rather"),

    SUMMARY("Resumen del Día 59", [
      "Sabes qué llevar y cómo actuar el día del examen: DNI, bolis, llega pronto, lee las instrucciones, mantén la calma.",
      "Speaking: frase + detalle + razón; pide repetir si hace falta; comunica.",
      "Practicadas las 4 destrezas; Listening P5.",
    ]),
    INFO("Tarea para el Día 60", "Descansa y repasa solo un poco. Mañana: el SIMULACRO FINAL completo. ¡Confía en tu preparación!"),
  ],
};

const DAY60 = {
  title: "Día 60 — Repaso final + SIMULACRO FINAL",
  description: "Repaso final rápido y práctica completa. Al final, el SIMULACRO FINAL cronometrado que estima tu nota. ¡Estás listo/a!",
  pedagogy: {
    objective: "Hacer un último repaso y el simulacro final completo con confianza.",
    summary: "Repaso final; Reading P1–P5; Writing; Listening P5; Speaking; y el SIMULACRO FINAL.",
    reviewPrompts: ["¿Estás listo/a? Sí, lo estás.", "Confía en las 12 semanas de trabajo."],
  },
  items: [
    TEXT("🎓 ¡DÍA 60, el último! Hoy repasas por última vez y haces el SIMULACRO FINAL completo (lo verás como módulo aparte). Has trabajado 12 semanas: estás preparado/a. ¡Mucho ánimo!"),
    GRAMMAR("Repaso final — todo en una página", `TIEMPOS: present simple/continuous · past simple/continuous · used to · present perfect · going to/will.
ESTRUCTURAS: modales (can/must/should…) · condicionales (if + presente, will) · comparativos/superlativos · relativos (who/which/where) · cuantificadores.
FUNCIONES: opinar (I think), sugerir (Let's/How about), conectar (but/because/although), y SIEMPRE dar una razón.
DESTREZAS: Reading (lee todo) · Listening (dos escuchas) · Writing (P6 los 3 puntos, P7 en orden y en pasado) · Speaking (frase + detalle + razón).`),
    grammarEx("Repaso final — Gramática", "Última práctica. ¡Tú puedes!", [
      fb("I ___ (never / be) to Japan.", ["have never been", "'ve never been"], "present perfect."),
      fb("If you study, you ___ (pass).", ["will pass", "'ll pass"], "first conditional."),
      fb("She's the teacher ___ helped me.", ["who", "that"], "relativo."),
      mc("Choose:", ["I saw it yesterday.", "I've seen it yesterday.", "I seen it yesterday."], 0, "yesterday → past simple."),
      fb("This is the ___ (good) day of my life!", ["best"], "superlativo."),
      fb("How about ___ (celebrate)?", ["celebrating"], "How about + -ing."),
      fb("You ___ (should) be proud of yourself.", ["should be"], "consejo."),
      mc("Give a reason:", ["I'm happy.", "I'm happy because I did my best.", "Happy because."], 1, "opinión + razón."),
    ]),
    GRAMMAR("Vocabulario del día — Repaso: sentimientos y logros", "Alta frecuencia (sentimientos, logros)."),
    deck("A2 Key S12D60 — Repaso: sentimientos y logros", [
      ["proud", "orgulloso/a", "I'm proud of myself.", "adjetivo", "praʊd"],
      ["relieved", "aliviado/a", "I felt relieved after the exam.", "adjetivo", "rɪˈliːvd"],
      ["confident", "seguro/a de sí", "I feel confident now.", "adjetivo", "ˈkɒnfɪdənt"],
      ["achieve", "lograr / conseguir", "You can achieve your goals.", "verbo", "əˈtʃiːv"],
      ["succeed", "tener éxito", "I hope I succeed.", "verbo", "səkˈsiːd"],
      ["improve", "mejorar", "My English has improved.", "verbo", "ɪmˈpruːv"],
      ["goal", "meta / objetivo", "My goal is to pass the exam.", "sustantivo", "ɡəʊl"],
      ["result", "resultado", "I'm waiting for my result.", "sustantivo", "rɪˈzʌlt"],
      ["celebrate", "celebrar", "Let's celebrate!", "verbo", "ˈselɪbreɪt"],
      ["ready", "listo/a", "I'm ready for the exam.", "adjetivo", "ˈredi"],
    ]),
    vocabEx("Vocabulario — Sentimientos y logros", "Elige la opción correcta.", [
      mc("How you feel after finishing something stressful:", ["relieved", "nervous", "bored"], 0, "relieved."),
      mc("To reach a goal is to ___ it.", ["achieve", "improve", "celebrate"], 0, "achieve."),
      mc("To get better is to ___.", ["improve", "succeed", "achieve"], 0, "improve."),
      mc("A target you want to reach is a ___.", ["goal", "result", "success"], 0, "goal."),
      mc("Feeling sure about yourself is feeling ___.", ["confident", "nervous", "tired"], 0, "confident."),
      mc("To do well and reach your aim is to ___.", ["succeed", "improve", "celebrate"], 0, "succeed."),
    ]),

    READING_HEAD,
    READING_P1("Reading Parte 1 — última práctica", [
      mc("Text: 'Congratulations! You passed your exam!'", ["Good news about an exam.", "Bad news.", "No exam."], 0, "'You passed your exam'."),
      mc("Sign: 'Results available online from Monday.'", ["Check results online from Monday.", "No results.", "Results yesterday."], 0, "'Results available online from Monday'."),
      mc("Message: 'So proud of you! Let's celebrate!'", ["Celebrating an achievement.", "A complaint.", "Bad news."], 0, "'So proud of you! Let's celebrate'."),
      mc("Note: 'Well done — all your hard work paid off!'", ["Praise for hard work.", "A warning.", "No news."], 0, "'all your hard work paid off'."),
      mc("Sign: 'Certificate ceremony this Friday at 6 pm.'", ["A ceremony on Friday.", "No ceremony.", "Cancelled."], 0, "'ceremony this Friday'."),
      mc("Text: 'You're ready for this — good luck!'", ["Encouragement.", "Bad news.", "A complaint."], 0, "'You're ready… good luck'."),
    ]),
    reading(2, "Reading · Parte 2 — última práctica (emparejar)", "THREE WAYS TO CELEBRATE\n\nA) Dinner Out — a special meal at a nice restaurant with family.\n\nB) Day Trip — a fun day out somewhere new with friends.\n\nC) Party at Home — invite everyone over for music and food.", "Empareja cada persona con la celebración ideal (A/B/C).", [
      mc("Someone who wants a special meal with family.", ["A", "B", "C"], 0, "A."),
      mc("A person who wants to explore somewhere new with friends.", ["A", "B", "C"], 1, "B."),
      mc("Someone who loves hosting people at home.", ["A", "B", "C"], 2, "C."),
      mc("A person who wants a relaxed family celebration.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants an adventure with friends.", ["A", "B", "C"], 1, "B."),
      mc("A person who wants music and food at home.", ["A", "B", "C"], 2, "C."),
      mc("Someone who prefers a restaurant.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — última práctica (texto largo)", "I DID IT!\n\nToday, I got the result of my A2 Key exam, and I passed! I can hardly believe it. Twelve weeks ago, I could barely introduce myself in English, and now I have an official certificate. When I saw my score online, I jumped up and shouted with happiness!\n\nThis journey wasn't always easy. There were days when I felt tired, and moments when I wanted to give up. But I kept going, a little every day, and slowly I improved. My teacher and my family supported me the whole way, and I'm so grateful to them.\n\nTonight, we're going to celebrate with a special dinner. But the best thing isn't the certificate — it's knowing that if I work hard, I can achieve my goals. This is just the beginning. Next, I want to prepare for the B1 exam. If I did this, I can do anything!", "Lee el texto y responde (A/B/C).", [
      mc("What news did the writer get today?", ["A job.", "They passed the exam.", "A holiday."], 1, "'I passed!'"),
      mc("What could they barely do twelve weeks ago?", ["Read.", "Introduce themselves in English.", "Write."], 1, "'barely introduce myself in English'."),
      mc("Who supported the writer?", ["Nobody.", "Their teacher and family.", "A friend online."], 1, "'My teacher and my family supported me'."),
      mc("How will they celebrate?", ["A party.", "A special dinner.", "A trip."], 1, "'a special dinner'."),
      mc("What does the writer want to do next?", ["Stop studying.", "Prepare for the B1 exam.", "Take a break."], 1, "'prepare for the B1 exam'."),
    ]),
    reading(4, "Reading · Parte 4 — última práctica (huecos con opciones)", "Today I got my exam (1)___ — I passed! Twelve weeks ago, I could barely introduce myself, and now I have a (2)___. The journey wasn't easy; sometimes I wanted to give (3)___. But I kept going and slowly I (4)___. My family (5)___ me the whole way. Tonight we'll (6)___ with a special dinner. If I did this, I can do anything!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["result", "goal", "party"], 0, "'my exam result'."),
      mc("Hueco 2", ["certificate", "result", "goal"], 0, "'a certificate'."),
      mc("Hueco 3", ["up", "on", "in"], 0, "'give up'."),
      mc("Hueco 4", ["improved", "succeeded", "achieved"], 0, "'slowly I improved'."),
      mc("Hueco 5", ["supported", "celebrated", "achieved"], 0, "'supported me'."),
      mc("Hueco 6", ["celebrate", "improve", "achieve"], 0, "'celebrate with a dinner'."),
    ]),
    reading(5, "Reading · Parte 5 — última práctica (open cloze)", "Hi Sol,\nI DID IT — I passed my A2 Key exam! I can hardly believe (1)___. Twelve weeks ago, I could barely introduce myself in English, (2)___ now I have a certificate! The journey wasn't easy, and sometimes I wanted to give up, (3)___ I kept going. My family supported me the whole (4)___. Tonight we're going (5)___ celebrate with a special dinner. If I did this, I can do (6)___! Thank you for everything.\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["it"], "'believe it'."),
      fb("Hueco 2", ["but"], "contraste → but."),
      fb("Hueco 3", ["but"], "'but I kept going'."),
      fb("Hueco 4", ["way"], "'the whole way'."),
      fb("Hueco 5", ["to"], "'going to celebrate'."),
      fb("Hueco 6", ["anything"], "'I can do anything'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Comparte tu logro", "Acabas de aprobar y se lo cuentas a tu amigo/a inglés/a. Escríbele un email (25 palabras o más) con:\n· cuéntale la buena noticia,\n· cómo te sientes,\n· invítale a celebrarlo contigo.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona estudia mucho durante semanas.\n2) Hace el examen.\n3) Ve que ha aprobado y lo celebra con su familia.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — última práctica (emparejar)", "Escucha a Nia hablar de cómo va a celebrar cada amigo su aprobado y empareja cada persona con su plan (A/B/C…).", "This is Part Five. You will hear Nia talking about how her friends are going to celebrate passing the exam. Anna is going to have a family dinner at a restaurant. Ben is going to have a party at his house. Carla is going on a day trip to the mountains. David is going to buy himself a new phone as a reward. And Emma is going to relax at home with a good film.", [
      mc("Anna", ["a family dinner", "a party", "a day trip"], 0, "'a family dinner'."),
      mc("Ben", ["a party", "a day trip", "a film"], 0, "'a party at his house'."),
      mc("Carla", ["a day trip", "a dinner", "a new phone"], 0, "'a day trip to the mountains'."),
      mc("David", ["a new phone", "a party", "a film"], 0, "'buy himself a new phone'."),
      mc("Emma", ["relax with a film", "a party", "a day trip"], 0, "'relax at home with a good film'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — SIMULACRO FINAL (preguntas personales)", "Responde como en el examen real. ¡Es tu último ensayo!", "Parte 1 del A2 Key (simulacro final): serie completa de preguntas personales sobre tu vida, pasado y planes, exactamente como en el examen", "responder con soltura, frase completa y detalle", "My name is, I live in, last year, I'm going to, because"),
    speaking(2, "Speaking · Parte 2 — SIMULACRO FINAL (gustos y decidir)", "Da opiniones, razones y sugerencias, como en el examen real.", "Parte 2 del A2 Key (simulacro final): decidir juntos un plan para celebrar (p. ej., cómo celebrar el aprobado) con opiniones, razones y sugerencias", "opinar, sugerir y razonar con fluidez", "I think, how about, why don't we, because, I'd rather"),

    SUMMARY("¡Enhorabuena — has terminado el curso!", [
      "Has completado 12 semanas y 60 días de preparación intensiva.",
      "Dominas la gramática, el vocabulario y las 4 destrezas en formato Cambridge.",
      "Ahora, haz el SIMULACRO FINAL para estimar tu nota.",
      "Estás preparado/a para presentarte al A2 Key con opciones reales de aprobar. ¡Mucha suerte!",
    ]),
    INFO("SIMULACRO FINAL", "En el módulo siguiente tienes el SIMULACRO FINAL completo y cronometrado (Reading y Listening auto-corregibles de todo el curso). Aprueba con un 60% (≈120 en la Cambridge Scale). Es la mejor estimación de si estás listo/a para el examen real. ¡Confía en tu trabajo!"),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "Preparación final para el examen",
  description: "Práctica intensiva de cada destreza en su formato real, consejos del día del examen y el SIMULACRO FINAL completo. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
