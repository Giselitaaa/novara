/**
 * A2 Key · Semana 11 — "Repaso general y estrategia de examen".
 * Se repasa TODA la gramática del curso, organizada por bloques, y se dan
 * estrategias detalladas para cada destreza del examen. Vocabulario: repaso de
 * alta frecuencia (phrasal verbs, colocaciones, false friends).
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

const DAY51 = {
  title: "Día 51 — Repaso de tiempos verbales + estrategia de Reading",
  description: "Repaso de todos los tiempos (presente, pasado, present perfect, futuro) y estrategia de las partes de Reading. Vocabulario: phrasal verbs. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Repasar todos los tiempos verbales y afianzar la estrategia de Reading.",
    summary: "Repaso de tiempos; estrategia de Reading; phrasal verbs; Reading P1–P5, Writing, Listening P1, Speaking.",
    reviewPrompts: ["¿Cuándo present perfect y cuándo past simple?", "¿Cómo abordas la Parte 3 del Reading?"],
  },
  items: [
    TEXT("🔁 Semana 11: REPASO GENERAL. Faltan 2 semanas para el examen. Hoy repasas todos los tiempos verbales y aprendes a atacar cada parte del Reading."),
    GRAMMAR("Repaso de tiempos verbales", `PRESENTE:
· Present simple: rutinas y hechos (I work). · Present continuous: ahora/temporal (I'm working).
PASADO:
· Past simple: acción terminada con tiempo (I worked yesterday). · Past continuous: en desarrollo (I was working).
· used to: hábitos del pasado (I used to work).
PRESENT PERFECT: experiencia/resultado sin cuándo (I've worked here for years).
FUTURO:
· going to (planes), will (predicciones/decisiones), present continuous (citas).
Palabras clave que te ayudan a elegir: now/at the moment → continuous; yesterday/ago → past simple; ever/never/just/yet/for/since → present perfect.`),
    TIP("Estrategia — Reading (Partes 1–5)", `· P1 (mensajes): lee TODO el texto, no una palabra. Cuidado con las trampas.
· P2 (emparejar): subraya 2–3 datos de cada persona y busca la opción que los cumple TODOS.
· P3 (texto largo): lee las preguntas primero, luego busca la respuesta en el texto (van en orden).
· P4 (huecos con opciones): mira la palabra ANTES y DESPUÉS del hueco; suele ser colocación o phrasal verb.
· P5 (open cloze): una palabra, casi siempre gramática (auxiliar, preposición, artículo, conector).`),
    grammarEx("Repaso — Tiempos verbales", "Elige o completa el tiempo correcto.", [
      fb("I ___ (live) here since 2019.", ["have lived", "'ve lived"], "since → present perfect."),
      fb("Yesterday she ___ (go) to the doctor.", ["went"], "yesterday → past simple."),
      fb("Look! It ___ (rain).", ["is raining", "'s raining"], "Look! → present continuous."),
      fb("Next year I ___ (going to / start) university.", ["am going to start", "'m going to start"], "plan → going to."),
      fb("When I was a child, I ___ (used to / play) outside.", ["used to play"], "used to."),
      mc("Choose:", ["I've seen it yesterday.", "I saw it yesterday.", "I seen it yesterday."], 1, "yesterday → past simple."),
      fb("They ___ (watch) TV when I called.", ["were watching"], "past continuous interrumpido."),
    ]),
    GRAMMAR("Vocabulario del día — Phrasal verbs frecuentes", "Los phrasal verbs más útiles del A2."),
    deck("A2 Key S11D51 — Phrasal verbs", [
      ["get up", "levantarse", "I get up at seven.", "phrasal verb", "ɡet ˈʌp"],
      ["look for", "buscar", "I'm looking for my keys.", "phrasal verb", "ˈlʊk fə"],
      ["turn on", "encender", "Turn on the light.", "phrasal verb", "tɜːn ˈɒn"],
      ["turn off", "apagar", "Turn off the TV.", "phrasal verb", "tɜːn ˈɒf"],
      ["find out", "averiguar / descubrir", "I found out the truth.", "phrasal verb", "faɪnd ˈaʊt"],
      ["give up", "rendirse / dejar de", "Don't give up!", "phrasal verb", "ɡɪv ˈʌp"],
      ["put on", "ponerse (ropa)", "Put on your coat.", "phrasal verb", "pʊt ˈɒn"],
      ["take off", "quitarse / despegar", "Take off your shoes.", "phrasal verb", "teɪk ˈɒf"],
      ["look after", "cuidar de", "She looks after her sister.", "phrasal verb", "lʊk ˈɑːftə"],
      ["run out of", "quedarse sin", "We ran out of milk.", "phrasal verb", "rʌn ˈaʊt əv"],
    ]),
    vocabEx("Vocabulario — Phrasal verbs", "Elige la opción correcta.", [
      mc("To search for something is to ___ it.", ["look for", "look after", "turn on"], 0, "look for."),
      mc("To stop trying is to ___.", ["give up", "find out", "put on"], 0, "give up."),
      mc("To take care of someone is to ___ them.", ["look after", "look for", "run out"], 0, "look after."),
      mc("To discover information is to ___.", ["find out", "turn off", "take off"], 0, "find out."),
      mc("To have none left is to ___ something.", ["run out of", "put on", "turn on"], 0, "run out of."),
      mc("To dress in your coat is to ___ it.", ["put on", "take off", "look for"], 0, "put on."),
    ]),

    READING_HEAD,
    READING_P1("Mensajes variados (repaso)", [
      mc("Text: 'I've looked for my keys everywhere but can't find them!'", ["Lost keys.", "Found keys.", "New keys."], 0, "'looked for my keys… can't find them'."),
      mc("Sign: 'Please turn off your phone during the show.'", ["Switch off your phone.", "Use your phone.", "No show."], 0, "'turn off your phone'."),
      mc("Note: 'We've run out of milk — can you buy some?'", ["No milk, please buy some.", "Lots of milk.", "No shopping."], 0, "'run out of milk'."),
      mc("Message: 'Don't give up — you're nearly there!'", ["Encouragement to continue.", "Stop now.", "A warning."], 0, "'Don't give up'."),
      mc("Sign: 'Please take off wet shoes at the door.'", ["Remove wet shoes.", "Keep shoes on.", "No shoes."], 0, "'take off wet shoes'."),
      mc("Text: 'Can you look after the dog this weekend?'", ["Asking to care for the dog.", "Selling a dog.", "No dog."], 0, "'look after the dog'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y consejos de examen", "THREE STUDY TIPS\n\nA) 'Make a plan and revise a little every day — don't leave it until the last night.'\n\nB) 'Practise past papers with a timer, so you get used to the time limit.'\n\nC) 'Read the questions before the text, so you know what to look for.'", "Empareja cada estudiante con el consejo ideal (A/B/C).", [
      mc("Someone who always studies everything the night before.", ["A", "B", "C"], 0, "A: plan, don't leave it."),
      mc("A person who runs out of time in exams.", ["A", "B", "C"], 1, "B: timer."),
      mc("Someone who reads slowly and misses answers.", ["A", "B", "C"], 2, "C: read questions first."),
      mc("A student who needs to manage their time better.", ["A", "B", "C"], 1, "B."),
      mc("Someone who needs a revision routine.", ["A", "B", "C"], 0, "A."),
      mc("A person who wants a better reading technique.", ["A", "B", "C"], 2, "C."),
      mc("Someone preparing with past papers.", ["A", "B", "C"], 1, "B."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "GETTING READY FOR THE EXAM\n\nMy A2 Key exam is in two weeks, and I've been preparing for months. At the beginning, I was quite nervous, because my English wasn't very good. But I've worked hard, and now I feel much more confident.\n\nEvery day, I do a little studying. In the mornings, I revise grammar and learn ten new words. In the evenings, I practise reading and listening. At the weekend, I write a short email or story, and my teacher checks it. I've also started speaking English with a friend online, which has helped a lot.\n\nOf course, I still make mistakes, but I've learned not to give up. My teacher says the most important thing is to stay calm and read the instructions carefully. In two weeks, I'll take the exam, and although I'm still a little nervous, I know I've done everything I can. Wish me luck!", "Lee el texto y responde (A/B/C).", [
      mc("When is the exam?", ["Tomorrow.", "In two weeks.", "Next month."], 1, "'in two weeks'."),
      mc("How did the writer feel at the beginning?", ["Confident.", "Nervous.", "Bored."], 1, "'quite nervous'."),
      mc("What does the writer do in the mornings?", ["Practise speaking.", "Revise grammar and learn words.", "Write emails."], 1, "'revise grammar and learn ten new words'."),
      mc("What has helped a lot?", ["Watching TV.", "Speaking English with a friend online.", "Sleeping."], 1, "'speaking English with a friend online'."),
      mc("What does the teacher say is most important?", ["To study all night.", "To stay calm and read carefully.", "To memorise everything."], 1, "'stay calm and read the instructions carefully'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My exam is in two weeks and I've been preparing for months. At first I was nervous, but I've (1)___ hard. Every day I (2)___ up early and revise grammar. I also (3)___ ten new words. In the evenings I practise reading. I've started speaking with a friend online, which has (4)___ a lot. I still make mistakes, but I don't (5)___ up. My teacher says the most important thing is to stay (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["worked", "played", "looked"], 0, "'worked hard'."),
      mc("Hueco 2", ["get", "give", "run"], 0, "'get up early'."),
      mc("Hueco 3", ["learn", "look", "turn"], 0, "'learn ten new words'."),
      mc("Hueco 4", ["helped", "given", "found"], 0, "'has helped a lot'."),
      mc("Hueco 5", ["give", "get", "put"], 0, "'don't give up'."),
      mc("Hueco 6", ["calm", "nervous", "angry"], 0, "'stay calm'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nMy A2 Key exam is in two weeks and I've (1)___ preparing for months! At first I was nervous, (2)___ now I feel more confident. Every day I revise grammar and learn ten new words. I've (3)___ started speaking English with a friend online, (4)___ has helped a lot. I still make mistakes, but I don't give (5)___. My teacher says the most important thing is (6)___ stay calm. Wish me luck!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["been"], "'I've been preparing'."),
      fb("Hueco 2", ["but"], "contraste → but."),
      fb("Hueco 3", ["also"], "'I've also started'."),
      fb("Hueco 4", ["which"], "'which has helped'."),
      fb("Hueco 5", ["up"], "'give up'."),
      fb("Hueco 6", ["to"], "'important thing is to stay calm'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cómo te preparas para el examen", "Cuéntale a tu amigo/a inglés/a cómo te preparas para tu examen. Escríbele un email (25 palabras o más) con:\n· qué haces cada día,\n· qué parte te cuesta más,\n· cómo te sientes.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una estudiante estudia mucho cada día.\n2) Hace el examen concentrada.\n3) Recibe una buena nota y celebra.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Have you finished revising? Man: Not yet, I've still got two topics to do. Two. Man: What time is your exam? Woman: At half past nine, so I mustn't be late. Three. Woman: Are you nervous? Man: A little, but I've studied hard, so I feel ready. Four. Man: Did you find your dictionary? Woman: Yes, it was under my bed! Five. Woman: What should I bring to the exam? Man: Just your ID and a pen.", [
      mc("1. Has the man finished revising?", ["Yes.", "No, two topics left.", "He hasn't started."], 1, "'two topics to do'."),
      mc("2. What time is the woman's exam?", ["Nine.", "Half past nine.", "Ten."], 1, "'At half past nine'."),
      mc("3. How does the man feel?", ["Very nervous.", "Ready.", "Bored."], 1, "'I feel ready'."),
      mc("4. Where was the dictionary?", ["On the desk.", "Under the bed.", "In a bag."], 1, "'under my bed'."),
      mc("5. What should the woman bring?", ["A book.", "ID and a pen.", "A dictionary."], 1, "'your ID and a pen'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (repaso)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso general — háblame de ti, tu rutina, tus estudios, tus planes", "usar todos los tiempos con soltura", "I usually, I've, last week, I'm going to, I used to"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (estudiar)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre estudiar solo o en grupo, por la mañana o por la noche; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, easier, concentrate"),

    SUMMARY("Resumen del Día 51", [
      "Repasados todos los tiempos: usa las palabras clave para elegir el correcto.",
      "Estrategia de Reading: lee bien, busca datos, cuidado con las trampas.",
      "Vocabulario de phrasal verbs. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 52", "Escribe una frase con cada tiempo verbal. Repasa las flashcards. Mañana: repaso de modales y condicionales + estrategia de Listening."),
  ],
};

const DAY52 = {
  title: "Día 52 — Repaso de modales y condicionales + estrategia de Listening",
  description: "Repaso de modales y condicionales, y estrategia de las partes de Listening. Vocabulario: colocaciones frecuentes. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Repasar modales y condicionales y afianzar la estrategia de Listening.",
    summary: "Repaso de modales/condicionales; estrategia de Listening; colocaciones; Reading P1–P5, Writing, Listening P2, Speaking.",
    reviewPrompts: ["¿Diferencia mustn't / don't have to?", "¿Cómo aprovechas la 2ª escucha?"],
  },
  items: [
    TEXT("🔁 Repaso de MODALES y CONDICIONALES, y hoy aprendes a sacar el máximo al Listening (¡se oye dos veces!). Vocabulario: COLOCACIONES frecuentes."),
    GRAMMAR("Repaso de modales y condicionales", `MODALES:
· can/could (habilidad, permiso, peticiones), may/might (posibilidad).
· must/have to (obligación), mustn't (prohibido), don't have to (no necesario), should (consejo).
· Todos + verbo BASE (sin 'to').
CONDICIONALES:
· Zero: if + presente, presente (verdades). · First: if + presente, will (posibilidades).
· Oraciones de tiempo: when/as soon as/until + PRESENTE para el futuro. · unless = if not.`),
    TIP("Estrategia — Listening (Partes 1–5)", `· Cada audio se oye DOS veces: la 1ª capta la idea general, la 2ª confirma el detalle.
· ANTES de escuchar, lee las preguntas y subraya las palabras clave.
· P1 (5 conversaciones): una pregunta por diálogo; ojo, se mencionan las 3 opciones.
· P2 (completar notas): escribe UNA palabra o número; fíjate en nombres, horas, precios.
· P3 (conversación): sigue el hilo; las respuestas van en orden.
· P4 (5 monólogos): capta el TEMA general de cada persona.
· P5 (emparejar): escucha qué se dice de cada persona/cosa.`),
    grammarEx("Repaso — Modales y condicionales", "Completa o elige.", [
      mc("Prohibition:", ["You don't have to smoke here.", "You mustn't smoke here.", "You should smoke here."], 1, "mustn't."),
      fb("If it rains, we ___ (stay) at home.", ["will stay", "'ll stay"], "first conditional."),
      fb("You look tired. You ___ (should) rest.", ["should rest"], "consejo → should."),
      fb("I'll call you when I ___ (arrive).", ["arrive"], "presente tras when."),
      mc("Not necessary:", ["You mustn't pay.", "You don't have to pay.", "You should pay."], 1, "don't have to."),
      fb("She ___ (might) come later.", ["might come"], "posibilidad."),
      fb("You'll be late ___ (a menos que) you hurry.", ["unless"], "unless."),
    ]),
    GRAMMAR("Vocabulario del día — Colocaciones frecuentes", "Palabras que van juntas (make/do/have/take/get)."),
    deck("A2 Key S11D52 — Colocaciones", [
      ["make a mistake", "cometer un error", "Everyone makes mistakes.", "colocación", "meɪk ə mɪˈsteɪk"],
      ["do homework", "hacer los deberes", "I do my homework at night.", "colocación", "duː ˈhəʊmwɜːk"],
      ["have a shower", "ducharse", "I have a shower every morning.", "colocación", "hæv ə ˈʃaʊə"],
      ["take a photo", "hacer una foto", "Let's take a photo!", "colocación", "teɪk ə ˈfəʊtəʊ"],
      ["get a job", "conseguir un trabajo", "She got a new job.", "colocación", "ɡet ə ˈdʒɒb"],
      ["make friends", "hacer amigos", "I made friends at school.", "colocación", "meɪk ˈfrendz"],
      ["do exercise", "hacer ejercicio", "I do exercise three times a week.", "colocación", "duː ˈeksəsaɪz"],
      ["have fun", "divertirse", "We had a lot of fun.", "colocación", "hæv ˈfʌn"],
      ["take care", "tener cuidado / cuidarse", "Take care on the road.", "colocación", "teɪk ˈkeə"],
      ["get better", "mejorar / recuperarse", "I hope you get better soon.", "colocación", "ɡet ˈbetə"],
    ]),
    vocabEx("Vocabulario — Colocaciones", "Elige el verbo correcto (make/do/have/take/get).", [
      mc("___ a mistake", ["make", "do", "take"], 0, "make a mistake."),
      mc("___ homework", ["make", "do", "have"], 1, "do homework."),
      mc("___ a shower", ["make", "have", "take"], 1, "have a shower."),
      mc("___ a photo", ["do", "make", "take"], 2, "take a photo."),
      mc("___ a job", ["get", "make", "do"], 0, "get a job."),
      mc("___ fun", ["do", "have", "make"], 1, "have fun."),
    ]),

    READING_HEAD,
    READING_P1("Consejos y avisos (repaso)", [
      mc("Sign: 'You must show your ticket to enter.'", ["Ticket required.", "Free entry.", "No ticket."], 0, "'must show your ticket'."),
      mc("Notice: 'You don't have to book — just walk in.'", ["Booking not necessary.", "You must book.", "Closed."], 0, "'don't have to book'."),
      mc("Text: 'If you're free, let's meet at six.'", ["A plan if you're free.", "No plan.", "Cancelled."], 0, "'If you're free, let's meet'."),
      mc("Warning: 'You mustn't touch the wet paint.'", ["Don't touch the paint.", "Touch the paint.", "No paint."], 0, "'mustn't touch'."),
      mc("Note: 'Take care — the floor is slippery.'", ["Be careful, slippery floor.", "The floor is dry.", "No floor."], 0, "'Take care'."),
      mc("Message: 'Get better soon! We miss you.'", ["Wishing a quick recovery.", "Goodbye.", "A complaint."], 0, "'Get better soon'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y cursos", "THREE EXAM COURSES\n\nA) Grammar Boost — for students who make lots of grammar mistakes and need extra practice.\n\nB) Listening Lab — for students who find the listening paper difficult; lots of audio practice.\n\nC) Speaking Club — for students who feel nervous speaking and want more confidence.", "Empareja cada estudiante con el curso ideal (A/B/C).", [
      mc("Someone who often gets the grammar wrong.", ["A", "B", "C"], 0, "Grammar Boost."),
      mc("A student who struggles to understand the listening.", ["A", "B", "C"], 1, "Listening Lab."),
      mc("Someone who is shy and nervous when speaking.", ["A", "B", "C"], 2, "Speaking Club."),
      mc("A person who needs more audio practice.", ["A", "B", "C"], 1, "B."),
      mc("Someone who wants confidence in the speaking test.", ["A", "B", "C"], 2, "C."),
      mc("A student who needs to fix grammar errors.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to speak more fluently.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY LISTENING PROBLEM\n\nFor a long time, listening was my biggest problem in English. When people spoke quickly, I couldn't understand anything, and I felt like giving up. But my teacher gave me some great advice, which really helped.\n\nFirst, she told me not to worry about understanding every word. 'You don't have to understand everything,' she said. 'Just listen for the important information.' Second, she said I should listen to English every day, even for ten minutes. So now I listen to podcasts and songs, and I watch films with subtitles.\n\nAfter a few months, I could see a big difference. Now, if I don't understand something the first time, I stay calm and listen again. My advice to other students is simple: don't give up, practise every day, and you will get better. It worked for me, and it can work for you too!", "Lee el texto y responde (A/B/C).", [
      mc("What was the writer's biggest problem?", ["Grammar.", "Listening.", "Speaking."], 1, "'listening was my biggest problem'."),
      mc("What did the teacher say about understanding?", ["Understand every word.", "You don't have to understand everything.", "Give up."], 1, "'You don't have to understand everything'."),
      mc("How often did the teacher say to listen?", ["Once a week.", "Every day.", "Never."], 1, "'listen to English every day'."),
      mc("What does the writer do now with films?", ["Watches without sound.", "Watches with subtitles.", "Doesn't watch."], 1, "'watch films with subtitles'."),
      mc("What is the writer's advice?", ["Give up.", "Don't give up, practise every day.", "Only study grammar."], 1, "'don't give up, practise every day'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Listening was my biggest problem. When people spoke fast, I couldn't understand and felt like (1)___ up. But my teacher said I don't (2)___ to understand every word — just listen for the important (3)___. She also said I (4)___ listen every day. So now I listen to podcasts and (5)___ films with subtitles. Now, if I don't understand, I stay (6)___ and listen again.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["giving", "give", "gave"], 0, "'giving up'."),
      mc("Hueco 2", ["have", "must", "should"], 0, "'don't have to'."),
      mc("Hueco 3", ["information", "mistake", "photo"], 0, "'important information'."),
      mc("Hueco 4", ["should", "mustn't", "don't"], 0, "'I should listen'."),
      mc("Hueco 5", ["watch", "make", "do"], 0, "'watch films'."),
      mc("Hueco 6", ["calm", "nervous", "angry"], 0, "'stay calm'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nListening used to be my biggest problem. When people spoke fast, I couldn't understand and felt like giving (1)___. But my teacher said I don't have (2)___ understand every word — just listen (3)___ the important information. She said I (4)___ listen every day, (5)___ now I listen to podcasts and watch films with subtitles. Now, if I don't understand, I stay calm (6)___ listen again. Don't give up!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["up"], "'giving up'."),
      fb("Hueco 2", ["to"], "'have to understand'."),
      fb("Hueco 3", ["for"], "'listen for the information'."),
      fb("Hueco 4", ["should"], "'I should listen'."),
      fb("Hueco 5", ["so"], "consecuencia → so."),
      fb("Hueco 6", ["and"], "'stay calm and listen'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un consejo para aprender inglés", "Tu amigo/a inglés/a quiere mejorar en un idioma. Escríbele un email (25 palabras o más) con:\n· qué destreza te costaba más,\n· qué haces para mejorar,\n· un consejo (should).", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona no entiende el inglés hablado y se frustra.\n2) Empieza a escuchar podcasts y ver series a diario.\n3) Meses después, entiende una conversación y sonríe.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a teacher giving information about the exam. Hello, class. Here's the information for your exam. It's on Monday the fifteenth, in Room twelve. It starts at ten o'clock, so please arrive by quarter to ten. Bring your ID card and two pens. You don't need a dictionary. The exam lasts two hours. Good luck, everyone!", [
      fb("Exam day: Monday the ___", ["fifteenth", "15th", "15"], "'the fifteenth'."),
      fb("Room ___", ["twelve", "12"], "'Room twelve'."),
      fb("Starts at ___ o'clock.", ["ten", "10"], "'at ten o'clock'."),
      fb("Bring your ID card and two ___.", ["pens"], "'two pens'."),
      fb("The exam lasts ___ hours.", ["two", "2"], "'lasts two hours'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (aprender)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre aprender inglés — por qué estudias inglés, qué te cuesta más, qué haces para mejorar", "hablar de tu aprendizaje con modales", "I study English because, I find … difficult, I should, I have to, I can"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (aprender)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre formas de aprender (apps, clases, series); el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, useful, fun"),

    SUMMARY("Resumen del Día 52", [
      "Repasados modales y condicionales: verbo base; presente en la parte del 'if'/tiempo.",
      "Estrategia de Listening: dos escuchas; lee las preguntas antes; capta lo importante.",
      "Vocabulario de colocaciones. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 53", "Repasa la diferencia mustn't / don't have to con 3 ejemplos. Repasa las flashcards. Mañana: repaso de comparación y relativos + estrategia de Writing."),
  ],
};

const DAY53 = {
  title: "Día 53 — Repaso de comparación y relativos + estrategia de Writing",
  description: "Repaso de comparativos, cuantificadores y relativos, y estrategia detallada del Writing (Partes 6 y 7). Vocabulario: false friends. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Repasar la comparación y los relativos y dominar la estrategia del Writing.",
    summary: "Repaso de comparación/relativos; estrategia de Writing; false friends; Reading P1–P5, Writing, Listening P3, Speaking.",
    reviewPrompts: ["¿Cuántas palabras mínimo en P6 y P7?", "¿Qué 3 puntos debes incluir en P6?"],
  },
  items: [
    TEXT("🔁 Repaso de COMPARACIÓN y RELATIVOS, y hoy dominas el WRITING (email de la P6 y relato de la P7). Vocabulario: FALSE FRIENDS (palabras que engañan al hispanohablante)."),
    GRAMMAR("Repaso de comparación y relativos", `COMPARACIÓN:
· Comparativos: -er/more … than; as … as. Superlativos: the -est / the most.
· Cuantificadores: much/many/a lot of; a few/a little; too/enough.
RELATIVOS:
· who (personas), which (cosas), that (ambos), where (lugares), whose (posesión).`),
    TIP("Estrategia — Writing (Partes 6 y 7)", `PARTE 6 — email/nota (25+ palabras):
· Incluye los TRES puntos que te piden (si falta uno, pierdes nota).
· Empieza con un saludo (Hi Alex,) y termina con tu nombre.
· Usa conectores sencillos (and, but, because, so).

PARTE 7 — relato (35+ palabras) a partir de 3 imágenes:
· Cuenta las 3 imágenes EN ORDEN.
· Usa el PASADO y conectores de secuencia (first, then, after that, finally).
· No copies frases; usa tus palabras. Cuenta las palabras (35 mínimo).
· Revisa: la -s de 3ª persona, los verbos irregulares, las mayúsculas y los puntos.`),
    grammarEx("Repaso — Comparación y relativos", "Completa o elige.", [
      fb("My house is ___ (big) than yours.", ["bigger"], "comparativo."),
      fb("This is the ___ (good) café in town.", ["best"], "superlativo irregular."),
      fb("A teacher is a person ___ helps students.", ["who", "that"], "persona → who/that."),
      fb("This is the town ___ I was born.", ["where"], "lugar → where."),
      mc("Choose:", ["There is many people.", "There are many people.", "There are much people."], 1, "plural → are many."),
      fb("It's too cold ___ (para) go out.", ["to"], "too … to."),
      fb("The book ___ I read was great.", ["which", "that"], "cosa → which/that."),
    ]),
    GRAMMAR("Vocabulario del día — False friends", "Palabras que parecen españolas pero significan otra cosa."),
    deck("A2 Key S11D53 — False friends", [
      ["actually", "en realidad (NO 'actualmente')", "Actually, I don't agree.", "false friend", "ˈæktʃuəli"],
      ["library", "biblioteca (NO 'librería')", "I study at the library.", "false friend", "ˈlaɪbrəri"],
      ["embarrassed", "avergonzado (NO 'embarazada')", "I was so embarrassed!", "false friend", "ɪmˈbærəst"],
      ["sensible", "sensato (NO 'sensible')", "That's a sensible idea.", "false friend", "ˈsensəbl"],
      ["exit", "salida (NO 'éxito')", "Use the emergency exit.", "false friend", "ˈeksɪt"],
      ["carpet", "alfombra (NO 'carpeta')", "The carpet is soft.", "false friend", "ˈkɑːpɪt"],
      ["fabric", "tela (NO 'fábrica')", "This fabric is soft.", "false friend", "ˈfæbrɪk"],
      ["assist", "ayudar (NO 'asistir a')", "She assisted the doctor.", "false friend", "əˈsɪst"],
      ["realise", "darse cuenta (NO 'realizar')", "I didn't realise the time.", "false friend", "ˈrɪəlaɪz"],
      ["rope", "cuerda (NO 'ropa')", "Pull the rope.", "false friend", "rəʊp"],
    ]),
    vocabEx("Vocabulario — False friends", "Elige el significado correcto.", [
      mc("'actually' means…", ["en realidad", "actualmente", "casualmente"], 0, "en realidad."),
      mc("'library' means…", ["librería", "biblioteca", "libertad"], 1, "biblioteca."),
      mc("'embarrassed' means…", ["embarazada", "avergonzado", "aburrido"], 1, "avergonzado."),
      mc("'exit' means…", ["éxito", "salida", "excusa"], 1, "salida."),
      mc("'carpet' means…", ["carpeta", "alfombra", "carne"], 1, "alfombra."),
      mc("'realise' means…", ["realizar", "darse cuenta", "regalar"], 1, "darse cuenta."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — false friends y avisos", [
      mc("Sign: 'Emergency exit — keep clear.'", ["An emergency way out.", "A success.", "An entrance."], 0, "'exit' = salida."),
      mc("Notice: 'Silence, please — this is the library.'", ["A place to study quietly.", "A bookshop.", "A shop."], 0, "'library' = biblioteca."),
      mc("Label: 'Made of soft fabric — wash by hand.'", ["Made of cloth, hand wash.", "A factory.", "Metal item."], 0, "'fabric' = tela."),
      mc("Text: 'Actually, I can't come tonight.'", ["In reality, can't come.", "Currently coming.", "Coming soon."], 0, "'actually' = en realidad."),
      mc("Note: 'Please don't put shoes on the carpet.'", ["No shoes on the rug.", "No folder.", "No shoes at all."], 0, "'carpet' = alfombra."),
      mc("Sign: 'Staff will assist you at the desk.'", ["Staff will help you.", "Staff will attend.", "No staff."], 0, "'assist' = ayudar."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y consejos de escritura", "THREE WRITING TIPS\n\nA) 'Always include all three points in the email — don't miss any!'\n\nB) 'Tell the story in order and use first, then, finally.'\n\nC) 'Check your spelling and the -s on he/she/it before you finish.'", "Empareja cada estudiante con el consejo ideal (A/B/C).", [
      mc("Someone who forgets to answer part of the email question.", ["A", "B", "C"], 0, "A: include all points."),
      mc("A person whose stories are confusing and out of order.", ["A", "B", "C"], 1, "B: tell in order."),
      mc("Someone who makes small grammar and spelling mistakes.", ["A", "B", "C"], 2, "C: check spelling."),
      mc("A student who needs to use sequence words.", ["A", "B", "C"], 1, "B."),
      mc("Someone who must cover all three content points.", ["A", "B", "C"], 0, "A."),
      mc("A person who forgets the -s on verbs.", ["A", "B", "C"], 2, "C."),
      mc("Someone whose story jumps around.", ["A", "B", "C"], 1, "B."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "LEARNING TO WRITE\n\nWhen I started learning English, writing was actually my favourite part, but I made a lot of mistakes. In my first story, I forgot to use the past tense, and I mixed up some 'false friends'. For example, I wrote 'I went to the library to buy a book' when I meant a bookshop!\n\nMy teacher was very patient. She told me that everyone makes mistakes, and that's how we learn. She gave me two important tips. First, always plan before you write. Second, check your work carefully at the end, especially the verbs and the spelling.\n\nNow, before I finish any piece of writing, I read it again slowly. I check that I've answered all the points, used the past tense correctly, and counted my words. My writing has improved a lot, and I'm not embarrassed by my mistakes any more — I just learn from them.", "Lee el texto y responde (A/B/C).", [
      mc("What was the writer's favourite part?", ["Speaking.", "Writing.", "Listening."], 1, "'writing was actually my favourite part'."),
      mc("What did they confuse in their first story?", ["Numbers.", "'False friends' (library/bookshop).", "Names."], 1, "'library… when I meant a bookshop'."),
      mc("What was the teacher's first tip?", ["Write fast.", "Always plan before you write.", "Use a dictionary."], 1, "'always plan before you write'."),
      mc("What does the writer check at the end?", ["Only the length.", "Points, past tense, spelling, word count.", "Nothing."], 1, "'answered all the points… past tense… counted my words'."),
      mc("How does the writer feel about mistakes now?", ["Embarrassed.", "They learn from them.", "Angry."], 1, "'I just learn from them'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "When I started English, I made a lot of writing (1)___. I mixed up 'false friends' — I wrote 'library' when I (2)___ 'bookshop'. My teacher said everyone makes mistakes. She gave me two tips: (3)___, plan before you write; second, (4)___ your work at the end. Now I read my writing again slowly, check the (5)___ tense, and count my words. I'm not (6)___ by my mistakes any more.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["mistakes", "photos", "friends"], 0, "'writing mistakes'."),
      mc("Hueco 2", ["meant", "made", "took"], 0, "'when I meant bookshop'."),
      mc("Hueco 3", ["first", "then", "finally"], 0, "'first, plan'."),
      mc("Hueco 4", ["check", "make", "do"], 0, "'check your work'."),
      mc("Hueco 5", ["past", "present", "future"], 0, "'the past tense'."),
      mc("Hueco 6", ["embarrassed", "excited", "proud"], 0, "'not embarrassed'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nWhen I started English, writing was actually my favourite part, (1)___ I made lots of mistakes. In my first story I forgot (2)___ use the past tense! My teacher said everyone makes mistakes, (3)___ that's how we learn. She told me to plan (4)___ I write and to check my work at the end. Now I always read it (5)___ slowly and count my words. I'm not embarrassed by my mistakes any (6)___.\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["but"], "contraste → but."),
      fb("Hueco 2", ["to"], "'forgot to use'."),
      fb("Hueco 3", ["and"], "'and that's how'."),
      fb("Hueco 4", ["before"], "'plan before I write'."),
      fb("Hueco 5", ["again"], "'read it again slowly'."),
      fb("Hueco 6", ["more"], "'any more'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Practica el email (con los 3 puntos)", "Tu amigo/a inglés/a te ha invitado a su casa. Escríbele un email (25 palabras o más) con estos 3 puntos:\n· dale las gracias por la invitación,\n· pregúntale a qué hora vas,\n· dile qué puedes llevar.\nEmpieza con 'Hi' y firma con tu nombre.", 25, 80),
    writing(7, "Writing · Parte 7 — Practica el relato (en orden, en pasado)", "Escribe un relato (35 palabras o más) con estas TRES imágenes, EN ORDEN y en pasado:\n1) Un estudiante escribe una historia con errores.\n2) El profesor le da consejos.\n3) El estudiante escribe mejor y está contento.\nUsa first, then, finally.", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a una estudiante y su profesor y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear a student, Mia, talking to her teacher, Mr Ross, about her writing. Mr Ross: Mia, your story was good, but you forgot the past tense in some sentences. Mia: Oh, actually I always forget that! Mr Ross: Don't worry, it's common. Also, remember to include all three points in the email. Mia: I only wrote two, didn't I? Mr Ross: Yes, you missed one. But your ideas are excellent. Mia: Thank you. What should I practise most? Mr Ross: Just check your verbs at the end, and count your words.", [
      mc("What did Mia forget in some sentences?", ["The spelling.", "The past tense.", "The names."], 1, "'you forgot the past tense'."),
      mc("How many points did Mia include in the email?", ["One.", "Two.", "Three."], 1, "'I only wrote two'."),
      mc("What does Mr Ross say about her ideas?", ["They're bad.", "They're excellent.", "They're boring."], 1, "'your ideas are excellent'."),
      mc("What should Mia check at the end?", ["Her spelling only.", "Her verbs and word count.", "Nothing."], 1, "'check your verbs… count your words'."),
      mc("How does Mr Ross treat Mia's mistakes?", ["He's angry.", "He's kind and patient.", "He ignores her."], 1, "'Don't worry, it's common'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (escribir)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre escribir — si te gusta escribir, en qué idioma escribes, qué sueles escribir (mensajes, correos)", "hablar de hábitos de escritura", "I like/don't like writing, I usually write, in Spanish, messages"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (comunicarse)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre escribir o hablar para comunicarse; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, easier, faster"),

    SUMMARY("Resumen del Día 53", [
      "Repaso de comparación (comparativos/superlativos/cuantificadores) y relativos.",
      "Estrategia de Writing: P6 los 3 puntos (25+); P7 en orden y en pasado (35+); revisa verbos y palabras.",
      "Cuidado con los false friends. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 54", "Escribe un email de 25+ palabras con 3 puntos y cuéntalos. Repasa las flashcards. Mañana: repaso del lenguaje funcional + estrategia de Speaking."),
  ],
};

const DAY54 = {
  title: "Día 54 — Repaso funcional + estrategia de Speaking",
  description: "Repaso del lenguaje funcional (opiniones, sugerencias) y estrategia detallada del Speaking (Partes 1 y 2). Vocabulario: conectores y frases de examen. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Repasar el lenguaje funcional y dominar la estrategia del Speaking.",
    summary: "Repaso funcional; estrategia de Speaking; frases útiles; Reading P1–P5, Writing, Listening P4, Speaking.",
    reviewPrompts: ["¿Qué haces en la Parte 1 del Speaking?", "¿Cómo das tu opinión con una razón?"],
  },
  items: [
    TEXT("🔁 Repaso del lenguaje FUNCIONAL (opinar, sugerir, conectar), y hoy dominas el SPEAKING. Vocabulario: FRASES útiles para el examen oral."),
    GRAMMAR("Repaso del lenguaje funcional", `OPINAR: I think… / In my opinion… / I agree / I don't agree.
SUGERIR: Let's… / Why don't we…? / How about + -ing? / We could…
CONECTAR: and, but, because, so, although, however, also.
DAR RAZONES: …because… (¡siempre da una razón!).`),
    TIP("Estrategia — Speaking (Partes 1 y 2)", `El Speaking dura 8–10 min, con otro candidato y dos examinadores.
PARTE 1 (preguntas personales):
· Responde con una FRASE COMPLETA + un detalle: no digas solo 'Yes'.
· Si no entiendes: 'Sorry, can you repeat that, please?'
PARTE 2 (gustos/decidir juntos):
· Da tu opinión Y una razón: 'I prefer the beach because I love swimming.'
· Haz sugerencias y reacciona a las del otro: 'How about…? — Good idea!'
CONSEJOS GENERALES:
· Habla claro y no muy rápido. Es mejor una frase sencilla y correcta que una complicada con errores.
· Sonríe y mira al examinador. ¡La comunicación cuenta más que la perfección!`),
    grammarEx("Repaso — Lenguaje funcional", "Completa o elige.", [
      mc("Give an opinion:", ["In my opinion, it's good.", "In my opinion is good.", "In mine opinion good."], 0, "In my opinion, it's good."),
      fb("How about ___ (go) to the park?", ["going"], "How about + -ing."),
      mc("Agree:", ["I am agree.", "I agree.", "I agreeing."], 1, "I agree."),
      fb("Let's ___ (meet) at six.", ["meet"], "Let's + base."),
      mc("Give a reason:", ["I prefer tea.", "I prefer tea because it's healthy.", "I prefer because tea."], 1, "opinión + razón."),
      fb("Why don't we ___ (try) that café?", ["try"], "Why don't we + base."),
      mc("Ask to repeat:", ["Repeat!", "Sorry, can you repeat that, please?", "What you say?"], 1, "petición educada."),
    ]),
    GRAMMAR("Vocabulario del día — Frases útiles para el examen oral", "Expresiones para el Speaking."),
    deck("A2 Key S11D54 — Frases para el Speaking", [
      ["I think that…", "creo que…", "I think that films are fun.", "expresión", "aɪ ˈθɪŋk ðət"],
      ["In my opinion…", "en mi opinión…", "In my opinion, it's better.", "expresión", "ɪn maɪ əˈpɪnjən"],
      ["I'm not sure", "no estoy seguro/a", "I'm not sure about that.", "expresión", "aɪm nɒt ˈʃɔː"],
      ["What about you?", "¿y tú?", "I like tea. What about you?", "expresión", "wɒt əˈbaʊt juː"],
      ["That's a good idea", "es buena idea", "Yes, that's a good idea!", "expresión", "ðæts ə ɡʊd aɪˈdɪə"],
      ["I'd rather…", "preferiría…", "I'd rather stay home.", "expresión", "aɪd ˈrɑːðə"],
      ["Let me think", "déjame pensar", "Let me think for a second.", "expresión", "let mi ˈθɪŋk"],
      ["Can you repeat that?", "¿puedes repetir?", "Sorry, can you repeat that?", "expresión", "kən ju rɪˈpiːt ðæt"],
      ["for example", "por ejemplo", "I like sports, for example football.", "expresión", "fər ɪɡˈzɑːmpl"],
      ["on the other hand", "por otro lado", "On the other hand, it's cheap.", "expresión", "ɒn ði ˈʌðə hænd"],
    ]),
    vocabEx("Vocabulario — Frases para el Speaking", "Elige la mejor frase.", [
      mc("To give your opinion:", ["In my opinion…", "Give me…", "I have…"], 0, "In my opinion…"),
      mc("To ask the other person:", ["What about you?", "What you?", "And you have?"], 0, "What about you?"),
      mc("To say you prefer something:", ["I'd rather…", "I rather…", "I'm rather…"], 0, "I'd rather…"),
      mc("If you didn't understand:", ["Repeat now.", "Can you repeat that?", "What?"], 1, "Can you repeat that?"),
      mc("To give an example:", ["for example", "for the example", "by example"], 0, "for example."),
      mc("To show the other side:", ["on the other hand", "in the other hand", "at other hand"], 0, "on the other hand."),
    ]),

    READING_HEAD,
    READING_P1("Conversaciones (repaso)", [
      mc("Text: 'How about meeting at six? — Good idea!'", ["A plan agreed for six.", "No plan.", "Cancelled."], 0, "'How about six? — Good idea'."),
      mc("Reply: 'I'm not sure about that, actually.'", ["Polite disagreement.", "Full agreement.", "A question."], 0, "'I'm not sure about that'."),
      mc("Message: 'I'd rather go to the cinema than the park.'", ["Prefers the cinema.", "Prefers the park.", "Prefers home."], 0, "'I'd rather go to the cinema'."),
      mc("Note: 'What about you? Are you free on Sunday?'", ["Asking about the other person.", "A goodbye.", "A complaint."], 0, "'What about you?'"),
      mc("Text: 'In my opinion, it's the best show this year.'", ["A strong positive opinion.", "A negative opinion.", "No opinion."], 0, "'the best show this year'."),
      mc("Reply: 'Sorry, can you repeat that, please?'", ["Asking to say it again.", "Agreeing.", "Refusing."], 0, "'can you repeat that'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar estudiantes y consejos de Speaking", "THREE SPEAKING TIPS\n\nA) 'Don't just say yes or no — always add a detail or a reason.'\n\nB) 'If you don't understand, ask the examiner to repeat, don't panic.'\n\nC) 'Speak clearly and not too fast — a simple correct sentence is best.'", "Empareja cada estudiante con el consejo ideal (A/B/C).", [
      mc("Someone who gives very short answers.", ["A", "B", "C"], 0, "A: add detail."),
      mc("A student who panics when they don't understand.", ["A", "B", "C"], 1, "B: ask to repeat."),
      mc("Someone who speaks too fast and makes mistakes.", ["A", "B", "C"], 2, "C: speak clearly, simply."),
      mc("A person who only says 'yes' or 'no'.", ["A", "B", "C"], 0, "A."),
      mc("Someone who needs to stay calm.", ["A", "B", "C"], 1, "B."),
      mc("A student who tries too-difficult sentences.", ["A", "B", "C"], 2, "C."),
      mc("Someone who should give reasons.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY SPEAKING TEST\n\nI was most nervous about the speaking test, because I'm quite shy. But actually, it was much better than I expected. There was another candidate, a girl called Lucía, and two examiners who were very friendly and smiled a lot.\n\nIn the first part, the examiner asked us simple questions about ourselves. I remembered my teacher's advice: 'Don't just say yes or no — add a detail.' So when she asked if I liked sport, I said, 'Yes, I love football because I play with my friends every weekend.'\n\nIn the second part, Lucía and I had to decide something together. At first I didn't understand the task, so I said, 'Sorry, can you repeat that, please?' The examiner repeated it, and then it was easy. We made suggestions and agreed on a plan. When it finished, I felt so proud. My advice? Stay calm, and remember: they want you to do well!", "Lee el texto y responde (A/B/C).", [
      mc("Why was the writer nervous?", ["They were ill.", "They're quite shy.", "They didn't study."], 1, "'I'm quite shy'."),
      mc("What were the examiners like?", ["Strict.", "Friendly.", "Bored."], 1, "'very friendly and smiled a lot'."),
      mc("What did the writer add when asked about sport?", ["Nothing.", "A detail and a reason.", "A question."], 1, "'add a detail… because I play…'"),
      mc("What did the writer do when they didn't understand?", ["Panicked.", "Asked the examiner to repeat.", "Said nothing."], 1, "'Sorry, can you repeat that?'"),
      mc("What is the writer's advice?", ["Don't take the test.", "Stay calm; they want you to do well.", "Speak very fast."], 1, "'Stay calm… they want you to do well'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I was nervous about the speaking test because I'm quite (1)___. But it was better than I expected. The examiners were very (2)___. In part one, I remembered to add a (3)___ to my answers. In part two, I didn't understand the task, so I asked the examiner to (4)___ it. Then we made (5)___ and agreed on a plan. My advice is to stay (6)___ — they want you to do well!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["shy", "proud", "excited"], 0, "'quite shy'."),
      mc("Hueco 2", ["friendly", "strict", "boring"], 0, "'very friendly'."),
      mc("Hueco 3", ["detail", "mistake", "photo"], 0, "'add a detail'."),
      mc("Hueco 4", ["repeat", "cancel", "give"], 0, "'repeat it'."),
      mc("Hueco 5", ["suggestions", "mistakes", "exits"], 0, "'made suggestions'."),
      mc("Hueco 6", ["calm", "nervous", "fast"], 0, "'stay calm'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nI've just done my speaking test! I was nervous because I'm quite shy, (1)___ it was better than I expected. There was another candidate (2)___ two friendly examiners. In part one, I remembered (3)___ add a detail to my answers. In part two, I didn't understand the task, (4)___ I asked the examiner to repeat it. Then we made suggestions (5)___ agreed on a plan. My advice? Stay calm — they want you (6)___ do well!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["but"], "contraste → but."),
      fb("Hueco 2", ["and"], "'and two examiners'."),
      fb("Hueco 3", ["to"], "'remembered to add'."),
      fb("Hueco 4", ["so"], "consecuencia → so."),
      fb("Hueco 5", ["and"], "'suggestions and agreed'."),
      fb("Hueco 6", ["to"], "'want you to do well'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Anima a alguien antes del examen oral", "Tu amigo/a inglés/a está nervioso/a por su examen oral. Escríbele un email (25 palabras o más) con:\n· anímale,\n· dale un consejo para el Speaking,\n· deséale suerte.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona está muy nerviosa antes de un examen oral.\n2) Habla con calma con los examinadores.\n3) Sale contenta y aliviada.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas hablando de su examen oral y elige de qué habla cada una.", "This is Part Four. You will hear five people talking about their speaking exam. One. I was so nervous, but the examiners smiled and made me feel calm. Two. My advice is always to add a reason when you answer a question. Three. When I didn't understand, I just asked the examiner to repeat it. Four. In the second part, we had to make suggestions and agree on a plan. Five. I spoke slowly and clearly, and I think that really helped.", [
      mc("Person 1 is talking about…", ["feeling calm with the examiners", "adding reasons", "asking to repeat"], 0, "'made me feel calm'."),
      mc("Person 2 is talking about…", ["adding a reason", "speaking slowly", "the second part"], 0, "'add a reason'."),
      mc("Person 3 is talking about…", ["asking to repeat", "making suggestions", "being nervous"], 0, "'asked the examiner to repeat'."),
      mc("Person 4 is talking about…", ["the collaborative task", "being nervous", "speaking slowly"], 0, "'make suggestions and agree'."),
      mc("Person 5 is talking about…", ["speaking clearly", "asking to repeat", "adding reasons"], 0, "'spoke slowly and clearly'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Simulación completa (preguntas personales)", "Responde a TODAS las preguntas con frases completas y un detalle. Es como el examen real.", "Parte 1 del A2 Key (simulación): el examinador te hace varias preguntas personales seguidas — nombre, ciudad, familia, estudios/trabajo, tiempo libre y planes", "responder con frases completas y detalles, como en el examen", "My name is, I live in, I've got, I usually, I'm going to, because"),
    speaking(2, "Speaking · Parte 2 — Simulación completa (gustos y decidir)", "Da opiniones, razones y sugerencias, como en el examen real.", "Parte 2 del A2 Key (simulación): habla de tus gustos y decide un plan con el examinador (p. ej., organizar una fiesta), dando razones y haciendo sugerencias", "opinar, sugerir y dar razones con fluidez", "I think, how about, why don't we, because, I'd rather"),

    SUMMARY("Resumen del Día 54", [
      "Repaso funcional: opinar, sugerir, conectar y SIEMPRE dar una razón.",
      "Estrategia de Speaking: frases completas + detalle; pide repetir si hace falta; habla claro y tranquilo.",
      "Vocabulario de frases para el oral. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 55", "Practica en voz alta 5 respuestas de la Parte 1 con un detalle cada una. Repasa TODO el vocabulario de la semana. Mañana: repaso final de la semana y mini-simulacro."),
  ],
};

const DAY55 = {
  title: "Día 55 — Repaso general + mini-simulacro",
  description: "Repaso integrado de toda la gramática y las estrategias. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 11.",
  pedagogy: {
    objective: "Integrar toda la gramática y las estrategias antes de la última semana.",
    summary: "Repaso integrado; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué destreza necesitas repasar más?", "Céntrate en ella esta semana."],
  },
  items: [
    TEXT("🎯 Repaso general de la Semana 11. Integras toda la gramática y las estrategias, y practicas las 4 destrezas. Al final, el mini-simulacro. ¡La próxima semana es la última!"),
    GRAMMAR("Repaso integrado", `TIEMPOS: presente (simple/continuous), pasado (simple/continuous, used to), present perfect, futuro (going to/will).
ESTRUCTURAS: modales, condicionales, comparación, relativos, pronombres indefinidos.
FUNCIONES: opinar, sugerir, conectar, dar razones.
Si dominas esto, estás listo para el A2 Key. ¡Repasa lo que más te cueste!`),
    grammarEx("Repaso integrado — Gramática", "Completa o elige (todo el curso).", [
      fb("I ___ (live) here for five years.", ["have lived", "'ve lived"], "for → present perfect."),
      fb("If it rains, we ___ (stay) home.", ["will stay", "'ll stay"], "first conditional."),
      fb("She's the woman ___ helped me.", ["who", "that"], "persona → who/that."),
      mc("Prohibition:", ["You don't have to smoke.", "You mustn't smoke.", "You should smoke."], 1, "mustn't."),
      fb("This café is ___ (good) than that one.", ["better"], "comparativo irregular."),
      fb("I ___ (used to / play) football as a child.", ["used to play"], "used to."),
      mc("Choose:", ["I saw it yesterday.", "I've seen it yesterday.", "I seen it yesterday."], 0, "yesterday → past simple."),
      fb("How about ___ (go) out tonight?", ["going"], "How about + -ing."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 11", "Repasa los mazos (phrasal verbs, colocaciones, false friends, frases del oral)."),
    vocabEx("Repaso de vocabulario — Semana 11", "Elige la opción correcta.", [
      mc("To search for something:", ["look for", "look after", "turn on"], 0, "look for."),
      mc("'___ a mistake':", ["make", "do", "take"], 0, "make."),
      mc("'library' means:", ["librería", "biblioteca", "libertad"], 1, "biblioteca."),
      mc("To give your opinion:", ["In my opinion…", "Give me…", "I have…"], 0, "In my opinion…"),
      mc("To stop trying:", ["give up", "find out", "put on"], 0, "give up."),
      mc("'___ homework':", ["make", "do", "have"], 1, "do."),
      mc("'exit' means:", ["éxito", "salida", "excusa"], 1, "salida."),
      mc("To care for someone:", ["look after", "look for", "run out"], 0, "look after."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'You must show ID to collect your exam results.'", ["ID needed for results.", "No ID.", "No results."], 0, "'must show ID'."),
      mc("Notice: 'If you finish early, please check your answers.'", ["Check answers if you finish early.", "Leave early.", "No checking."], 0, "'check your answers'."),
      mc("Text: 'Good luck tomorrow — you've worked so hard!'", ["Wishing luck for hard work.", "Bad news.", "A complaint."], 0, "'Good luck… worked so hard'."),
      mc("Poster: 'Free revision classes every afternoon this week.'", ["Free revision this week.", "No classes.", "Paid classes."], 0, "'Free revision classes'."),
      mc("Sign: 'Silence — exam in progress.'", ["Be quiet, an exam is on.", "Talk freely.", "No exam."], 0, "'exam in progress'."),
      mc("Note: 'Don't forget to write your name on every page.'", ["Write your name on all pages.", "No name.", "One page only."], 0, "'write your name on every page'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes de repaso", "THREE REVISION PLANS\n\nA) Focus on Reading — extra reading practice with past papers for people who read slowly.\n\nB) Focus on Speaking — pair practice and confidence building for nervous speakers.\n\nC) Focus on Writing — email and story practice with feedback for people who make grammar mistakes.", "Empareja cada estudiante con el plan ideal (A/B/C).", [
      mc("Someone who reads slowly and needs more practice.", ["A", "B", "C"], 0, "A."),
      mc("A nervous speaker who wants confidence.", ["A", "B", "C"], 1, "B."),
      mc("Someone who makes grammar mistakes in writing.", ["A", "B", "C"], 2, "C."),
      mc("A person who wants pair speaking practice.", ["A", "B", "C"], 1, "B."),
      mc("Someone who wants feedback on their emails.", ["A", "B", "C"], 2, "C."),
      mc("A student who wants past reading papers.", ["A", "B", "C"], 0, "A."),
      mc("A shy student who needs confidence.", ["A", "B", "C"], 1, "B."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "ALMOST READY\n\nMy A2 Key exam is next week, and I can't believe how much I've improved. Twelve weeks ago, I could hardly write a sentence, and now I can talk about my life, my past, and my future plans in English!\n\nThis week, I'm doing my final revision. I've made a list of the things I still find difficult, and I'm focusing on them. For example, I sometimes forget the past tense, so I'm practising it every day. I'm also doing a full practice test at the weekend, with a timer, so I get used to the exam conditions.\n\nAlthough I'm still a bit nervous, I feel proud of my progress. My teacher says the most important thing now is to rest well before the exam and stay calm. Whatever happens, I know that learning English has already changed my life. Next week, I'll do my best — and that's all anyone can do.", "Lee el texto y responde (A/B/C).", [
      mc("When is the exam?", ["Tomorrow.", "Next week.", "Next month."], 1, "'next week'."),
      mc("What could the writer hardly do twelve weeks ago?", ["Speak.", "Write a sentence.", "Read."], 1, "'could hardly write a sentence'."),
      mc("What is the writer focusing on this week?", ["Everything.", "The things they find difficult.", "Nothing."], 1, "'focusing on them' (difficult things)."),
      mc("Why is the writer doing a test with a timer?", ["For fun.", "To get used to exam conditions.", "Because the teacher said so."], 1, "'get used to the exam conditions'."),
      mc("What does the teacher say is most important now?", ["Study all night.", "Rest well and stay calm.", "Learn more grammar."], 1, "'rest well… and stay calm'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My exam is next week and I can't believe how much I've (1)___. Twelve weeks ago, I could (2)___ write a sentence! This week I'm doing my final (3)___. I've made a list of difficult things and I'm (4)___ on them. I'm also doing a full practice test with a (5)___. Although I'm nervous, I feel (6)___ of my progress.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["improved", "worked", "given"], 0, "'how much I've improved'."),
      mc("Hueco 2", ["hardly", "hard", "harder"], 0, "'could hardly write'."),
      mc("Hueco 3", ["revision", "mistake", "exit"], 0, "'final revision'."),
      mc("Hueco 4", ["focusing", "looking", "giving"], 0, "'focusing on them'."),
      mc("Hueco 5", ["timer", "photo", "friend"], 0, "'with a timer'."),
      mc("Hueco 6", ["proud", "nervous", "sad"], 0, "'proud of my progress'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nMy A2 Key exam is next week and I can't believe how much I've improved! Twelve weeks (1)___, I could hardly write a sentence. This week I'm doing my final revision. I've made a list (2)___ the difficult things and I'm focusing (3)___ them. I'm also doing a practice test (4)___ a timer. Although I'm nervous, I feel proud (5)___ my progress. My teacher says the most important thing is (6)___ stay calm. Wish me luck!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["ago"], "'Twelve weeks ago'."),
      fb("Hueco 2", ["of"], "'a list of the difficult things'."),
      fb("Hueco 3", ["on"], "'focusing on them'."),
      fb("Hueco 4", ["with"], "'with a timer'."),
      fb("Hueco 5", ["of"], "'proud of my progress'."),
      fb("Hueco 6", ["to"], "'important thing is to stay calm'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu progreso", "Cuéntale a tu amigo/a inglés/a tu progreso este curso. Escríbele un email (25 palabras o más) con:\n· qué has aprendido,\n· qué te ha costado más,\n· cómo te sientes antes del examen.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona empieza un curso sin saber inglés.\n2) Estudia con esfuerzo durante meses.\n3) Aprueba el examen y celebra su logro.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Zoe hablar de en qué se centra cada compañero para el examen y empareja cada persona con su destreza (A/B/C…).", "This is Part Five. You will hear Zoe talking about what her classmates are practising for the exam. Anna is focusing on reading, because she reads too slowly. Ben is practising his listening, because he finds fast speech difficult. Carla is working on her writing, because she makes grammar mistakes. David is doing speaking practice, because he gets nervous. And Emma is revising her vocabulary, because she forgets words.", [
      mc("Anna", ["reading", "listening", "writing"], 0, "'focusing on reading'."),
      mc("Ben", ["listening", "reading", "speaking"], 0, "'practising his listening'."),
      mc("Carla", ["writing", "reading", "vocabulary"], 0, "'working on her writing'."),
      mc("David", ["speaking", "writing", "listening"], 0, "'speaking practice'."),
      mc("Emma", ["vocabulary", "reading", "speaking"], 0, "'revising her vocabulary'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Simulación (preguntas personales)", "Responde a todas las preguntas con frases completas y un detalle.", "Parte 1 del A2 Key (simulación): preguntas personales variadas sobre tu vida, tu pasado y tus planes, como en el examen", "responder con soltura usando todos los tiempos", "My name is, I live in, last year, I'm going to, because"),
    speaking(2, "Speaking · Parte 2 — Simulación (gustos y decidir)", "Da opiniones, razones y sugerencias.", "Parte 2 del A2 Key (simulación): decidir juntos un plan (p. ej., un regalo para un amigo) dando razones y haciendo sugerencias", "opinar, sugerir y razonar con fluidez", "I think, how about, why don't we, because, I'd rather"),

    SUMMARY("Resumen de la Semana 11", [
      "Has repasado TODA la gramática y las estrategias de las 4 destrezas.",
      "Sabes cómo atacar cada parte del examen.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: la ÚLTIMA — práctica de examen completo y el simulacro final.",
    ]),
    INFO("Mini-simulacro de la Semana 11", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. La semana que viene harás el SIMULACRO FINAL completo. ¡Ya casi estás!"),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Repaso general y estrategia de examen",
  description: "Repaso de toda la gramática del curso y estrategias detalladas para las 4 destrezas. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
