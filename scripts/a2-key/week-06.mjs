/**
 * A2 Key · Semana 6 — "Gustos, sentimientos y cómo hacemos las cosas".
 * Gramática: verbo + -ing (like/love/hate doing), verbo + to (want/need/would
 * like to), adverbios de modo, so/because. Vocabulario: sentimientos, aficiones,
 * comunicación, transporte y direcciones. Las 4 destrezas, formato Cambridge.
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

const DAY26 = {
  title: "Día 26 — Verbo + -ing (like/love/hate doing) · Los sentimientos",
  description: "Verbos de gusto + gerundio. Vocabulario: sentimientos y emociones. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Expresar gustos con verbo + -ing y hablar de sentimientos.",
    summary: "like/love/hate/enjoy + -ing; sentimientos; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'I like to swimming'.", "'I enjoy to read'.", "'I'm boring' por 'I'm bored'."],
    reviewPrompts: ["¿'I like' + qué forma?", "¿'bored' o 'boring' para cómo te sientes?"],
  },
  items: [
    TEXT("🔁 Semana 6, empezamos la segunda mitad. Hoy aprendes a expresar gustos con verbo + -ing y a hablar de SENTIMIENTOS."),
    GRAMMAR("Verbo + -ing (gerundio)", `Tras estos verbos de gusto/afición, el segundo verbo va en -ing:
like, love, enjoy, hate, don't mind, prefer, start, finish + verbo-ing.
· I like swimming. · She loves cooking. · I don't mind waiting. · He enjoys reading.

⚠️ 'enjoy' SIEMPRE con -ing (nunca 'enjoy to').

ADJETIVOS -ed vs -ing (sentimientos):
· -ed = cómo te SIENTES: I'm bored, I'm interested, I'm tired.
· -ing = cómo ES la cosa: The film is boring, The book is interesting.
Cuidado: 'I'm boring' = soy aburrido (yo aburro); 'I'm bored' = estoy aburrido.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I like to swimming → ✅ I like swimming.\n· ❌ I enjoy to read → ✅ I enjoy reading.\n· ❌ I'm boring (si quieres decir 'estoy aburrido') → ✅ I'm bored.\n· ❌ The film is interested → ✅ The film is interesting."),
    grammarEx("Gramática — Verbo + -ing y sentimientos", "Completa o elige.", [
      fb("I love ___ (cook) for my friends.", ["cooking"], "love + -ing."),
      fb("She enjoys ___ (read) in the evening.", ["reading"], "enjoy + -ing."),
      fb("I don't mind ___ (wait) for you.", ["waiting"], "don't mind + -ing."),
      mc("Choose:", ["I like to swimming.", "I like swimming.", "I like swim."], 1, "like + -ing."),
      mc("How do you feel? 'This class is long. I'm ___.'", ["boring", "bored", "bore"], 1, "cómo te sientes → bored."),
      mc("Describe the thing: 'The film was really ___.'", ["excited", "exciting", "excite"], 1, "cómo es → exciting."),
      fb("He hates ___ (get) up early.", ["getting"], "hate + -ing (doble t)."),
    ]),
    GRAMMAR("Vocabulario del día — Los sentimientos", "Emociones y estados de ánimo."),
    deck("A2 Key S6D26 — Los sentimientos", [
      ["happy", "feliz / contento", "I feel happy today.", "adjetivo", "ˈhæpi"],
      ["sad", "triste", "She looks sad.", "adjetivo", "sæd"],
      ["tired", "cansado", "I'm tired after work.", "adjetivo", "ˈtaɪəd"],
      ["worried", "preocupado", "He's worried about the exam.", "adjetivo", "ˈwʌrid"],
      ["excited", "emocionado / ilusionado", "I'm excited about the trip.", "adjetivo", "ɪkˈsaɪtɪd"],
      ["scared", "asustado", "The dog is scared of storms.", "adjetivo", "skeəd"],
      ["angry", "enfadado", "Don't be angry with me.", "adjetivo", "ˈæŋɡri"],
      ["surprised", "sorprendido", "I was surprised by the news.", "adjetivo", "səˈpraɪzd"],
      ["nervous", "nervioso", "I'm nervous before exams.", "adjetivo", "ˈnɜːvəs"],
      ["proud", "orgulloso", "My parents are proud of me.", "adjetivo", "praʊd"],
    ]),
    vocabEx("Vocabulario — Los sentimientos", "Elige la opción correcta.", [
      mc("The opposite of 'happy' is ___.", ["sad", "tired", "proud"], 0, "sad."),
      mc("Before an exam, many students feel ___.", ["nervous", "proud", "surprised"], 0, "nervous."),
      mc("When something bad might happen, you feel ___.", ["worried", "excited", "happy"], 0, "worried."),
      mc("When you get an unexpected gift, you feel ___.", ["surprised", "tired", "angry"], 0, "surprised."),
      mc("After a long day of work, you feel ___.", ["tired", "excited", "proud"], 0, "tired."),
      mc("When someone is very afraid, they are ___.", ["scared", "happy", "proud"], 0, "scared."),
    ]),

    READING_HEAD,
    READING_P1("Sentimientos y mensajes", [
      mc("Text: 'I'm so excited about the trip! Can't wait!'", ["The person is looking forward to the trip.", "The person is worried.", "No trip."], 0, "'so excited… Can't wait'."),
      mc("Note: 'Sorry I was angry earlier. Let's talk.'", ["An apology.", "Still angry.", "A goodbye."], 0, "'Sorry I was angry'."),
      mc("Message: 'Don't be nervous — you'll do great in the interview!'", ["Encouragement.", "Bad news.", "A warning."], 0, "'Don't be nervous… you'll do great'."),
      mc("Card: 'We're so proud of you! Congratulations!'", ["They are proud.", "They are angry.", "They are sad."], 0, "'so proud of you'."),
      mc("Text: 'Feeling tired today, I'll stay home.'", ["Too tired to go out.", "Feeling great.", "Going out."], 0, "'Feeling tired… stay home'."),
      mc("Note: 'Are you OK? You looked worried this morning.'", ["Asking if someone is alright.", "Saying goodbye.", "An invitation."], 0, "'You looked worried'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y aficiones", "THREE HOBBY CLUBS\n\nA) Reading Group — meet once a month to talk about a book. For people who love reading and chatting.\n\nB) Cooking Club — learn to cook new dishes together. For people who enjoy cooking and eating.\n\nC) Dance Class — learn different dance styles. Fun and active, for people who love moving to music.", "Empareja cada persona con el club ideal (A/B/C).", [
      mc("Someone who loves reading and discussing books.", ["A", "B", "C"], 0, "Reading Group."),
      mc("A person who enjoys cooking new food.", ["A", "B", "C"], 1, "Cooking Club."),
      mc("Someone who loves dancing to music.", ["A", "B", "C"], 2, "Dance Class."),
      mc("A person who likes talking about stories.", ["A", "B", "C"], 0, "A."),
      mc("Someone active who enjoys moving.", ["A", "B", "C"], 2, "C."),
      mc("A person who enjoys eating what they make.", ["A", "B", "C"], 1, "B."),
      mc("Someone who wants to meet monthly to chat.", ["A", "B", "C"], 0, "A: once a month."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "FINDING A HOBBY\n\nLast year, I felt tired and a bit sad. I worked a lot, but in my free time I just watched TV, and I was often bored. My friend Lucía said, 'You need a hobby! Come to my dance class.' At first I was nervous, because I've never been good at dancing.\n\nThe first class was difficult, and I felt embarrassed when I made mistakes. But everyone was friendly, and soon I started enjoying it. Now I love dancing, and I go every week. I don't mind making mistakes any more — it's part of learning.\n\nDancing has changed my life. I feel happier and more confident, and I've made lots of new friends. If you feel bored or tired, my advice is simple: find something you enjoy doing, and do it!", "Lee el texto y responde (A/B/C).", [
      mc("How did the writer feel last year?", ["Happy.", "Tired and sad.", "Excited."], 1, "'tired and a bit sad'."),
      mc("What did Lucía suggest?", ["Watch more TV.", "Come to a dance class.", "Work less."], 1, "'Come to my dance class'."),
      mc("How did the writer feel in the first class?", ["Confident.", "Nervous and embarrassed.", "Bored."], 1, "'nervous… embarrassed when I made mistakes'."),
      mc("How does the writer feel about dancing now?", ["They hate it.", "They love it.", "They don't mind it."], 1, "'Now I love dancing'."),
      mc("What is the writer's advice?", ["Watch TV.", "Find something you enjoy doing.", "Work harder."], 1, "'find something you enjoy doing'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last year I was often (1)___ in my free time. My friend said I needed a (2)___, so I tried a dance class. At first I was (3)___ and I hated (4)___ mistakes. But soon I started (5)___ it. Now I feel much (6)___ and I've made new friends.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["bored", "boring", "bore"], 0, "cómo te sientes → bored."),
      mc("Hueco 2", ["hobby", "job", "feeling"], 0, "'a hobby'."),
      mc("Hueco 3", ["nervous", "proud", "surprised"], 0, "'I was nervous'."),
      mc("Hueco 4", ["making", "make", "to make"], 0, "hate + -ing → making."),
      mc("Hueco 5", ["enjoying", "enjoy", "to enjoy"], 0, "start + -ing → enjoying."),
      mc("Hueco 6", ["happier", "sadder", "more tired"], 0, "'much happier'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ross,\nI've found a new hobby and I love (1)___! Last month I started (2)___ a dance class. At first I was really (3)___ because I'm not good at dancing. But now I don't (4)___ making mistakes, and I feel so (5)___ when I dance. You should try it (6)___! It's the best thing I've done this year.\nLove,\nEla", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["it"], "'I love it'."),
      fb("Hueco 2", ["going"], "'started going' (start + -ing)."),
      fb("Hueco 3", ["nervous", "scared", "worried"], "sentimiento."),
      fb("Hueco 4", ["mind"], "'don't mind making' (verbo + -ing)."),
      fb("Hueco 5", ["happy", "proud", "excited"], "sentimiento positivo."),
      fb("Hueco 6", ["too"], "'try it too'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Habla de tu afición", "Tu amigo/a inglés/a quiere saber qué te gusta hacer en tu tiempo libre. Escríbele un email (25 palabras o más) con:\n· qué afición tienes,\n· con qué frecuencia la haces,\n· cómo te sientes cuando la haces.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una chica aburrida en casa mirando el móvil.\n2) Una amiga la lleva a una clase (baile, música…).\n3) Al final sonríe, feliz con su nueva afición.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: What do you like doing at the weekend? Man: I love cooking, especially Italian food. Two. Woman: Are you OK? You look worried. Man: I'm just nervous about my driving test tomorrow. Three. Man: Did you enjoy the film? Woman: Not really, I found it a bit boring. Four. Woman: How do you feel about the trip? Man: I'm so excited — I can't wait! Five. Man: Why is Tom sad? Woman: His football team lost the match.", [
      mc("1. What does the man love doing?", ["Reading.", "Cooking.", "Dancing."], 1, "'I love cooking'."),
      mc("2. Why is the man nervous?", ["An exam.", "A driving test.", "A trip."], 1, "'nervous about my driving test'."),
      mc("3. What did the woman think of the film?", ["Exciting.", "A bit boring.", "Funny."], 1, "'a bit boring'."),
      mc("4. How does the man feel about the trip?", ["Worried.", "Excited.", "Sad."], 1, "'so excited'."),
      mc("5. Why is Tom sad?", ["He lost his keys.", "His team lost.", "He's ill."], 1, "'His football team lost'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (aficiones)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre aficiones y sentimientos — qué te gusta hacer, cómo te sientes al hacerlo, qué no te gusta", "hablar de gustos con verbo + -ing y de sentimientos", "I love … -ing, I enjoy, I feel, I don't like, my favourite"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (tiempo libre)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre aficiones tranquilas o activas; el examinador pregunta qué prefieres hacer y por qué", "expresar gustos y dar razones", "I prefer, I enjoy, because, relaxing, fun"),

    SUMMARY("Resumen del Día 26", [
      "Tras like/love/enjoy/hate/don't mind → verbo + -ing.",
      "Sentimientos: -ed (cómo te sientes: bored) vs -ing (cómo es: boring).",
      "Vocabulario de sentimientos. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 27", "Escribe 3 cosas que te gusta hacer (like + -ing) y cómo te hacen sentir. Repasa las flashcards. Mañana: want/need/would like + to."),
  ],
};

const DAY27 = {
  title: "Día 27 — Verbo + to (want/need/would like) · La comunicación",
  description: "Verbos seguidos de infinitivo con 'to'. Vocabulario: comunicación y teléfono. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Usar want/need/would like/hope/decide + to + verbo.",
    summary: "verbo + to; would like to; comunicación; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'I want go'.", "'I would like going'.", "'I need that you come'."],
    reviewPrompts: ["¿'want' + qué forma?", "¿'would like' + -ing o + to?"],
  },
  items: [
    TEXT("🔁 Repaso: like/enjoy + -ing. Hoy los verbos que van con 'to' + infinitivo (want, need, would like…). Vocabulario: la COMUNICACIÓN."),
    GRAMMAR("Verbo + to (infinitivo)", `Tras estos verbos, el segundo verbo va con 'to':
want, need, would like, hope, decide, try, learn, plan, forget, promise + to + verbo.
· I want to travel. · She needs to study. · I'd like to help. · They decided to leave.

'WOULD LIKE' (me gustaría) = petición/deseo educado + to:
· I'd like to book a table. · Would you like to come?
Ojo: 'would like' + to (NO 'would like doing').

Compara: 'I like swimming' (gusto general, -ing) vs 'I'd like to swim now' (deseo concreto, to).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I want go → ✅ I want to go.\n· ❌ I would like going → ✅ I would like to go.\n· ❌ I need that you help → ✅ I need you to help.\n· ❌ She decided leaving → ✅ She decided to leave."),
    grammarEx("Gramática — Verbo + to", "Completa o elige.", [
      fb("I want ___ (travel) around the world.", ["to travel"], "want + to."),
      fb("She needs ___ (study) harder.", ["to study"], "need + to."),
      fb("I'd like ___ (book) a table for two.", ["to book"], "would like + to."),
      mc("Choose:", ["I want go home.", "I want to go home.", "I want going home."], 1, "want to go."),
      mc("Choose:", ["Would you like to come?", "Would you like coming?", "Would you like come?"], 0, "would like to."),
      fb("They decided ___ (buy) a new car.", ["to buy"], "decide + to."),
      fb("Don't forget ___ (call) your mum!", ["to call"], "forget + to."),
    ]),
    GRAMMAR("Vocabulario del día — La comunicación", "Cómo nos comunicamos."),
    deck("A2 Key S6D27 — La comunicación", [
      ["call", "llamar / llamada", "I'll call you later.", "verbo/sustantivo", "kɔːl"],
      ["text", "mensaje de texto / enviar", "She sent me a text.", "sustantivo/verbo", "tekst"],
      ["email", "correo electrónico", "I'll send you an email.", "sustantivo/verbo", "ˈiːmeɪl"],
      ["reply", "responder / respuesta", "Please reply soon.", "verbo/sustantivo", "rɪˈplaɪ"],
      ["contact", "contactar / contacto", "How can I contact you?", "verbo/sustantivo", "ˈkɒntækt"],
      ["conversation", "conversación", "We had a long conversation.", "sustantivo", "ˌkɒnvəˈseɪʃn"],
      ["speak up", "hablar más alto", "Can you speak up, please?", "phrasal verb", "spiːk ˈʌp"],
      ["hang up", "colgar (teléfono)", "Don't hang up!", "phrasal verb", "hæŋ ˈʌp"],
      ["message", "mensaje", "Leave a message after the beep.", "sustantivo", "ˈmesɪdʒ"],
      ["chat", "charlar", "We chatted for hours.", "verbo", "tʃæt"],
    ]),
    vocabEx("Vocabulario — La comunicación", "Elige la opción correcta.", [
      mc("To phone someone is to ___ them.", ["call", "reply", "hang up"], 0, "call."),
      mc("A short written message on a phone is a ___.", ["text", "call", "conversation"], 0, "text."),
      mc("To answer a message is to ___.", ["reply", "contact", "chat"], 0, "reply."),
      mc("To end a phone call is to ___.", ["hang up", "speak up", "call"], 0, "hang up."),
      mc("If someone can't hear you, they ask you to ___.", ["speak up", "hang up", "reply"], 0, "speak up."),
      mc("A message sent to an email address is an ___.", ["email", "text", "call"], 0, "email."),
    ]),

    READING_HEAD,
    READING_P1("Comunicación y mensajes", [
      mc("Voicemail: 'Please leave a message after the beep.'", ["Leave a message.", "Hang up now.", "No messages."], 0, "'leave a message'."),
      mc("Text: 'Can't talk now, I'll call you back later.'", ["I'll phone you later.", "Call me now.", "Don't call."], 0, "'call you back later'."),
      mc("Email note: 'Please reply by the end of the day.'", ["Answer today.", "No reply needed.", "Reply next week."], 0, "'reply by the end of the day'."),
      mc("Sign: 'No phone calls in the quiet carriage.'", ["Don't make calls here.", "Calls allowed.", "No trains."], 0, "'No phone calls'."),
      mc("Message: 'Sorry, wrong number!'", ["Called the wrong person.", "Right number.", "No call."], 0, "'wrong number'."),
      mc("Note: 'Contact us on the number below for help.'", ["Call this number for help.", "No help.", "Email only."], 0, "'Contact us on the number'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y necesidades", "THREE SERVICES\n\nA) Language Exchange — chat online with people from other countries to practise languages. Free and friendly.\n\nB) Phone Repair Shop — fix broken screens and batteries quickly. Most repairs in one hour.\n\nC) Tech Help Line — call for help with computers, email and apps. Patient staff for beginners.", "Empareja cada persona con el servicio ideal (A/B/C).", [
      mc("Someone who wants to practise speaking English with foreigners.", ["A", "B", "C"], 0, "Language Exchange."),
      mc("A person whose phone screen is broken.", ["A", "B", "C"], 1, "Phone Repair Shop."),
      mc("An older person who needs help with email.", ["A", "B", "C"], 2, "Tech Help Line."),
      mc("Someone who wants to chat with people abroad.", ["A", "B", "C"], 0, "A."),
      mc("A person who needs a quick phone repair.", ["A", "B", "C"], 1, "B: one hour."),
      mc("A beginner who needs patient tech help.", ["A", "B", "C"], 2, "C: patient staff."),
      mc("Someone learning a new language for free.", ["A", "B", "C"], 0, "A: free."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "STAYING IN TOUCH\n\nMy best friend, Marco, moved to Canada last year to study, and I was worried we would lose contact. But thanks to technology, we speak more than ever! We decided to have a video call every Sunday, and we never miss it.\n\nDuring the week, we send each other texts and funny photos. Sometimes, when I want to tell him something important, I write a long email. He always replies quickly. It's strange — he lives thousands of kilometres away, but I feel like he's still here.\n\nOf course, it isn't the same as being together. I'd like to visit him next summer, and I'm already saving money for the flight. But until then, our Sunday calls make me happy. Good friends find a way to stay in touch, wherever they are.", "Lee el texto y responde (A/B/C).", [
      mc("Where did Marco move?", ["Australia.", "Canada.", "France."], 1, "'moved to Canada'."),
      mc("What did they decide to do every Sunday?", ["Send a text.", "Have a video call.", "Write a letter."], 1, "'a video call every Sunday'."),
      mc("How does Marco reply to emails?", ["Slowly.", "Quickly.", "Never."], 1, "'He always replies quickly'."),
      mc("What would the writer like to do next summer?", ["Move to Canada.", "Visit Marco.", "Stop calling."], 1, "'I'd like to visit him next summer'."),
      mc("What is the writer saving money for?", ["A phone.", "The flight.", "A computer."], 1, "'saving money for the flight'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My friend moved abroad, but we still (1)___ every week. We decided (2)___ have a video call every Sunday. During the week, we send (3)___ and photos. When I want (4)___ tell him something important, I write an (5)___. He always (6)___ quickly.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["chat", "hang", "reply"], 0, "'we still chat'."),
      mc("Hueco 2", ["to", "for", "at"], 0, "decided to have."),
      mc("Hueco 3", ["texts", "calls", "emails"], 0, "'send texts and photos'."),
      mc("Hueco 4", ["to", "for", "at"], 0, "want to tell."),
      mc("Hueco 5", ["email", "call", "text"], 0, "'write an email'."),
      mc("Hueco 6", ["replies", "hangs", "speaks"], 0, "'replies quickly'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Bea,\nI want (1)___ tell you about my friend Marco. He moved to Canada, but we still speak a lot! We decided (2)___ have a video call every Sunday. During the week we send (3)___ other funny photos. I'd (4)___ to visit him next summer, so I'm saving money (5)___ the flight. Good friends always find a way (6)___ stay in touch!\nLove,\nAmy", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'want to tell'."),
      fb("Hueco 2", ["to"], "'decided to have'."),
      fb("Hueco 3", ["each"], "'send each other'."),
      fb("Hueco 4", ["like"], "'I'd like to visit'."),
      fb("Hueco 5", ["for"], "'saving money for'."),
      fb("Hueco 6", ["to"], "'a way to stay'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Organiza una videollamada", "Quieres hacer una videollamada con tu amigo/a inglés/a. Escríbele un email (25 palabras o más) con:\n· propón un día y una hora,\n· di de qué quieres hablar,\n· pídele que te confirme.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Dos amigos se despiden en un aeropuerto.\n2) Uno de ellos hace una videollamada desde otro país.\n3) Los dos ríen y charlan por la pantalla.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a woman leaving a phone message for her friend. Hi Kate, it's Nina. I'm calling to organise our video call. Are you free on Thursday at seven o'clock? I want to talk about our holiday plans. My internet is a bit slow, so we should use the phone app, not the computer. If Thursday doesn't work, send me a text. Talk soon, bye!", [
      fb("Message from ___", ["Nina"], "'it's Nina'."),
      fb("Video call on ___", ["Thursday"], "'on Thursday'."),
      fb("At ___ o'clock.", ["seven", "7"], "'at seven o'clock'."),
      fb("Talk about ___ plans.", ["holiday"], "'our holiday plans'."),
      fb("Use the phone ___, not the computer.", ["app"], "'use the phone app'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (comunicación)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre comunicación — cómo hablas con tus amigos, si prefieres llamar o escribir, con quién hablas más", "hablar de hábitos de comunicación", "I usually text, I prefer to call, I'd like to, my friends, every day"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (comunicación)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre llamar, escribir o videollamar; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, faster, easier"),

    SUMMARY("Resumen del Día 27", [
      "Tras want/need/would like/hope/decide/try/learn → to + verbo.",
      "'would like to' (deseo concreto) vs 'like + -ing' (gusto general).",
      "Vocabulario de comunicación. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 28", "Escribe 3 cosas que quieres/te gustaría hacer (want/would like to). Repasa las flashcards. Mañana: adverbios de modo."),
  ],
};

const DAY28 = {
  title: "Día 28 — Adverbios de modo · El transporte",
  description: "Adverbios de modo (-ly) y su posición. Vocabulario: transporte y direcciones. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Describir CÓMO se hacen las acciones con adverbios de modo.",
    summary: "Adverbios de modo (-ly), irregulares (well/fast/hard); transporte; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["adjetivo por adverbio ('he drives careful').", "'goodly'.", "posición del adverbio."],
    reviewPrompts: ["Adverbio de 'careful', 'good', 'fast'.", "¿Dónde va el adverbio de modo?"],
  },
  items: [
    TEXT("🔁 Repaso: want/would like + to. Hoy los ADVERBIOS DE MODO (cómo hacemos las cosas). Vocabulario: el TRANSPORTE."),
    GRAMMAR("Adverbios de modo", `Describen CÓMO se hace una acción. Se forman con adjetivo + -ly:
· slow → slowly, careful → carefully, quick → quickly, quiet → quietly, happy → happily (y → i).

IRREGULARES:
· good → well (She sings well, NO 'goodly').
· fast → fast (igual), hard → hard (igual): He works hard.
⚠️ 'hardly' significa 'apenas', no 'duramente': I hardly ever go out.

POSICIÓN: normalmente al final o justo después del verbo/objeto:
· She speaks English fluently. · He drove carefully.`),
    WARN("Errores típicos del hispanohablante", "· ❌ He drives careful → ✅ He drives carefully.\n· ❌ She sings very good → ✅ She sings very well.\n· ❌ goodly, fastly → ✅ well, fast.\n· 'hard' (duramente) ≠ 'hardly' (apenas)."),
    grammarEx("Gramática — Adverbios de modo", "Forma o elige el adverbio correcto.", [
      fb("Adverb of 'careful': ___", ["carefully"], "+ -ly."),
      fb("Adverb of 'good': ___", ["well"], "irregular → well."),
      fb("Adverb of 'happy': ___", ["happily"], "y → -ily."),
      mc("Choose:", ["She sings good.", "She sings well.", "She sings goodly."], 1, "sing well."),
      mc("Choose:", ["He drives careful.", "He drives carefully.", "He drives carefuly."], 1, "drive carefully."),
      fb("The bus arrived ___ (quick).", ["quickly"], "quick → quickly."),
      mc("Choose:", ["He runs fastly.", "He runs fast.", "He runs fastily."], 1, "fast (irregular)."),
    ]),
    GRAMMAR("Vocabulario del día — El transporte", "Medios de transporte y direcciones."),
    deck("A2 Key S6D28 — El transporte", [
      ["underground", "metro", "I take the underground to work.", "sustantivo", "ˈʌndəɡraʊnd"],
      ["platform", "andén", "The train leaves from platform 4.", "sustantivo", "ˈplætfɔːm"],
      ["timetable", "horario", "Check the timetable online.", "sustantivo", "ˈtaɪmteɪbl"],
      ["single", "billete de ida", "A single to London, please.", "sustantivo", "ˈsɪŋɡl"],
      ["return", "billete de ida y vuelta", "A return ticket is cheaper.", "sustantivo", "rɪˈtɜːn"],
      ["traffic", "tráfico", "There's a lot of traffic today.", "sustantivo", "ˈtræfɪk"],
      ["turn left", "girar a la izquierda", "Turn left at the corner.", "colocación", "tɜːn ˈleft"],
      ["straight on", "todo recto", "Go straight on for 200 metres.", "colocación", "streɪt ˈɒn"],
      ["get off", "bajarse (de un transporte)", "Get off at the next stop.", "phrasal verb", "ɡet ˈɒf"],
      ["on foot", "a pie", "I usually go on foot.", "colocación", "ɒn ˈfʊt"],
    ]),
    vocabEx("Vocabulario — El transporte", "Elige la opción correcta.", [
      mc("The train underground in a city is the ___.", ["underground", "platform", "traffic"], 0, "underground."),
      mc("You wait for the train on the ___.", ["platform", "timetable", "single"], 0, "platform."),
      mc("A ticket to go and come back is a ___.", ["single", "return", "platform"], 1, "return."),
      mc("A list of train times is a ___.", ["timetable", "traffic", "platform"], 0, "timetable."),
      mc("To leave the bus is to ___.", ["get off", "turn left", "on foot"], 0, "get off."),
      mc("To walk somewhere is to go ___.", ["on foot", "straight on", "by car"], 0, "on foot."),
    ]),

    READING_HEAD,
    READING_P1("Transporte y avisos", [
      mc("Station sign: 'Trains to London — Platform 2.'", ["London trains at Platform 2.", "No trains.", "Platform 2 closed."], 0, "'Platform 2'."),
      mc("Bus notice: 'Please have the correct money ready.'", ["Have the right money.", "No money needed.", "Free bus."], 0, "'correct money ready'."),
      mc("Sign: 'Mind the gap between train and platform.'", ["Be careful of the gap.", "No gap.", "No trains."], 0, "'Mind the gap'."),
      mc("App: 'Your bus is delayed by 10 minutes.'", ["The bus is 10 minutes late.", "Bus early.", "Bus cancelled."], 0, "'delayed by 10 minutes'."),
      mc("Sign: 'Buy a return — it's cheaper than two singles.'", ["A return costs less.", "Singles are cheaper.", "No tickets."], 0, "'cheaper than two singles'."),
      mc("Road sign: 'Turn left for the city centre.'", ["Left for the centre.", "Right for the centre.", "Straight on."], 0, "'Turn left'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y transporte", "THREE WAYS TO TRAVEL TO THE CONCERT\n\nA) By Train — fast and comfortable, but you have to walk 15 minutes from the station.\n\nB) By Bus — cheap and it stops right outside, but it's slow in traffic.\n\nC) By Bike — free and healthy, with a special bike path all the way. Takes 30 minutes.", "Empareja cada persona con la opción ideal (A/B/C).", [
      mc("Someone who wants the fastest, most comfortable option.", ["A", "B", "C"], 0, "By Train: fast, comfortable."),
      mc("A person with little money who wants to stop near the door.", ["A", "B", "C"], 1, "By Bus: cheap, stops outside."),
      mc("Someone who wants free, healthy exercise.", ["A", "B", "C"], 2, "By Bike: free, healthy."),
      mc("A person who doesn't mind walking 15 minutes.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to avoid walking far.", ["A", "B", "C"], 1, "B: stops outside."),
      mc("A person who enjoys cycling on bike paths.", ["A", "B", "C"], 2, "C."),
      mc("Someone worried about traffic delays.", ["A", "B", "C"], 0, "A: train avoids traffic."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY JOURNEY TO WORK\n\nI live quite far from my office, so my journey to work takes almost an hour. First, I walk quickly to the bus stop, which is five minutes away. The bus is usually on time, but if there's a lot of traffic, it moves very slowly.\n\nAfter twenty minutes, I get off the bus and take the underground. I like the underground because it's fast and it never gets stuck in traffic. I have to change trains once, at a busy station, so I always walk carefully — the platforms are crowded in the morning.\n\nFinally, I arrive at work and walk the last part on foot. It's a long journey, but I don't mind. I read a book on the bus, listen to music on the train, and it gives me time to wake up slowly before a busy day.", "Lee el texto y responde (A/B/C).", [
      mc("How long is the journey to work?", ["Ten minutes.", "Almost an hour.", "Two hours."], 1, "'almost an hour'."),
      mc("What makes the bus slow?", ["Rain.", "Traffic.", "Passengers."], 1, "'if there's a lot of traffic'."),
      mc("Why does the writer like the underground?", ["It's cheap.", "It's fast and avoids traffic.", "It's quiet."], 1, "'fast and it never gets stuck in traffic'."),
      mc("Why does the writer walk carefully at the station?", ["It's dark.", "The platforms are crowded.", "It's far."], 1, "'the platforms are crowded'."),
      mc("How does the writer feel about the long journey?", ["Angry.", "Doesn't mind it.", "Hates it."], 1, "'I don't mind'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My journey to work is long. First I walk (1)___ to the bus stop. If there's traffic, the bus moves (2)___. Then I take the (3)___, which is fast. I have to change trains at a busy station, so I walk (4)___. I usually buy a (5)___ ticket because it's cheaper. Finally, I go the last part (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["quickly", "quick", "quiet"], 0, "adverbio → quickly."),
      mc("Hueco 2", ["slowly", "slow", "slowfully"], 0, "adverbio → slowly."),
      mc("Hueco 3", ["underground", "platform", "single"], 0, "'the underground'."),
      mc("Hueco 4", ["carefully", "careful", "carefuly"], 0, "adverbio → carefully."),
      mc("Hueco 5", ["return", "single", "timetable"], 0, "'a return ticket… cheaper'."),
      mc("Hueco 6", ["on foot", "by foot", "in foot"], 0, "'on foot'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Theo,\nMy journey to work is quite long! First I walk quickly (1)___ the bus stop. The bus moves slowly (2)___ there's a lot of traffic. Then I take the underground, (3)___ is much faster. I have (4)___ change trains once. I always walk (5)___ because the platforms are crowded. But I don't (6)___ — I read on the bus. How do you get to work?\nBye,\nRoy", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'walk to the bus stop'."),
      fb("Hueco 2", ["if", "when"], "condición/tiempo."),
      fb("Hueco 3", ["which"], "'the underground, which is faster'."),
      fb("Hueco 4", ["to"], "'have to change'."),
      fb("Hueco 5", ["carefully"], "adverbio de modo."),
      fb("Hueco 6", ["mind"], "'I don't mind'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Explica cómo llegar", "Tu amigo/a inglés/a va a visitarte. Escríbele un email (25 palabras o más) con:\n· cómo llegar a tu casa desde la estación,\n· qué transporte tomar,\n· cuánto tiempo tarda.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona corre para coger el autobús.\n2) Se sube justo a tiempo.\n3) Llega al trabajo puntual y contenta.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos personas hablando de un viaje y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear a tourist, Sara, asking a local man, Paul, for directions. Sara: Excuse me, how do I get to the museum? Paul: It's easy. Go straight on for about five minutes, then turn left at the bank. Sara: Turn left at the bank, OK. Is it far? Paul: No, it's just after the park, on your right. Sara: Great. Can I walk, or should I take the bus? Paul: You can easily walk — it only takes ten minutes. Sara: Perfect, thank you so much! Paul: You're welcome. Enjoy the museum!", [
      mc("Where does Sara want to go?", ["The bank.", "The museum.", "The park."], 1, "'how do I get to the museum'."),
      mc("Where does she turn left?", ["At the park.", "At the bank.", "At the museum."], 1, "'turn left at the bank'."),
      mc("Where is the museum?", ["Before the park.", "After the park, on the right.", "Next to the bank."], 1, "'just after the park, on your right'."),
      mc("How does Paul say she can go?", ["By bus.", "On foot.", "By taxi."], 1, "'You can easily walk'."),
      mc("How long does it take to walk?", ["Five minutes.", "Ten minutes.", "Twenty minutes."], 1, "'only takes ten minutes'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (transporte)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre transporte — cómo vas al trabajo o al colegio, qué transporte prefieres, cuánto tardas", "hablar de transporte y rutina", "I take the, I go on foot, it takes, I prefer, every day"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (transporte)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre medios de transporte (bici, autobús, coche); el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, faster, cheaper, healthy"),

    SUMMARY("Resumen del Día 28", [
      "Adverbios de modo: adjetivo + -ly (carefully, quickly); irregulares (well, fast, hard).",
      "'hard' (duramente) ≠ 'hardly' (apenas).",
      "Vocabulario de transporte. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 29", "Escribe 3 frases sobre cómo haces cosas (adverbios de modo). Repasa las flashcards. Mañana: so / because para dar razones."),
  ],
};

const DAY29 = {
  title: "Día 29 — so / because (dar razones) · El dinero y las compras",
  description: "Conectores so y because para causa y consecuencia. Vocabulario: dinero y compras. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Unir ideas con so (consecuencia) y because (causa).",
    summary: "so/because; dinero; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["confundir so y because.", "'because of' + verbo.", "empezar frase con 'Because' suelto."],
    reviewPrompts: ["¿'so' o 'because' para la causa?", "Une: 'It was late. I went home.'"],
  },
  items: [
    TEXT("🔁 Repaso: adverbios de modo. Hoy conectas ideas con SO y BECAUSE (razones). Vocabulario: DINERO y compras."),
    GRAMMAR("so / because", `BECAUSE introduce la CAUSA (por qué):
· I stayed at home because it was raining.
SO introduce la CONSECUENCIA (el resultado):
· It was raining, so I stayed at home.

Misma idea, distinto orden: causa + because · o · causa, so + resultado.

Otros conectores útiles:
· and (y), but (pero), or (o), also (también).
· 'because of' + SUSTANTIVO (no verbo): because of the rain (NO 'because of it was raining').`),
    WARN("Errores típicos del hispanohablante", "· ❌ It was raining because I stayed home → ✅ …, so I stayed home / I stayed home because it was raining.\n· ❌ because of it rained → ✅ because it rained / because of the rain.\n· ❌ Because it was late. (frase suelta) → ✅ I left because it was late.\n· 'so' = por eso; 'because' = porque."),
    grammarEx("Gramática — so / because", "Completa con so o because.", [
      fb("I was tired, ___ I went to bed.", ["so"], "consecuencia → so."),
      fb("She was happy ___ she passed the exam.", ["because"], "causa → because."),
      fb("It was cold, ___ I wore a coat.", ["so"], "consecuencia → so."),
      fb("We stayed inside ___ it was raining.", ["because"], "causa → because."),
      mc("Choose:", ["I'm hungry so I ate.", "I'm hungry because I ate.", "I ate so I'm hungry."], 0, "hungry → so I ate."),
      fb("The train was late ___ of the snow.", ["because"], "'because of' + sustantivo."),
      mc("Join: 'It was expensive. I didn't buy it.'", ["It was expensive, so I didn't buy it.", "It was expensive because I didn't buy it.", "I didn't buy it so it was expensive."], 0, "expensive → so I didn't buy it."),
    ]),
    GRAMMAR("Vocabulario del día — El dinero y las compras", "Comprar, pagar y precios."),
    deck("A2 Key S6D29 — El dinero y las compras", [
      ["cash", "efectivo", "I paid in cash.", "sustantivo", "kæʃ"],
      ["change", "cambio (vuelta)", "Here's your change.", "sustantivo", "tʃeɪndʒ"],
      ["cost", "costar", "How much does it cost?", "verbo", "kɒst"],
      ["spend", "gastar", "I spent all my money.", "verbo", "spend"],
      ["save", "ahorrar", "I'm saving for a holiday.", "verbo", "seɪv"],
      ["afford", "permitirse (pagar)", "I can't afford it.", "verbo", "əˈfɔːd"],
      ["discount", "descuento", "There's a 20% discount.", "sustantivo", "ˈdɪskaʊnt"],
      ["receipt", "recibo / tique", "Keep your receipt.", "sustantivo", "rɪˈsiːt"],
      ["cheap", "barato", "It was really cheap.", "adjetivo", "tʃiːp"],
      ["expensive", "caro", "That shop is expensive.", "adjetivo", "ɪkˈspensɪv"],
    ]),
    vocabEx("Vocabulario — El dinero y las compras", "Elige la opción correcta.", [
      mc("Notes and coins are ___.", ["cash", "receipt", "discount"], 0, "cash."),
      mc("The money you get back is your ___.", ["change", "discount", "cost"], 0, "change."),
      mc("To keep money for the future is to ___.", ["save", "spend", "cost"], 0, "save."),
      mc("If you can't ___ something, it's too expensive for you.", ["afford", "save", "cost"], 0, "afford."),
      mc("A lower price in a sale is a ___.", ["discount", "receipt", "change"], 0, "discount."),
      mc("The paper that proves you paid is a ___.", ["receipt", "cash", "discount"], 0, "receipt."),
    ]),

    READING_HEAD,
    READING_P1("Dinero y tiendas", [
      mc("Shop sign: 'Card payments only — no cash.'", ["Pay by card, not cash.", "Cash only.", "Free."], 0, "'Card payments only'."),
      mc("Notice: 'Keep your receipt for returns.'", ["Save the receipt to return items.", "No receipts.", "No returns."], 0, "'Keep your receipt for returns'."),
      mc("Sign: 'Student discount — 15% off with ID.'", ["Students get 15% off.", "No discount.", "Everyone pays more."], 0, "'Student discount'."),
      mc("Text: 'This jacket is too expensive, I can't afford it.'", ["Can't buy the jacket, too dear.", "The jacket is cheap.", "Bought the jacket."], 0, "'too expensive… can't afford it'."),
      mc("Note: 'Sorry, no change for the machine.'", ["No coins available.", "Free machine.", "Machine broken."], 0, "'no change'."),
      mc("Ad: 'Save money — buy two, get one free.'", ["A special offer to save money.", "No offers.", "Everything free."], 0, "'buy two, get one free'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y ofertas", "THREE SHOPPING OFFERS\n\nA) Book Sale — all books half price this weekend. Cash or card accepted.\n\nB) Clothes Discount — 30% off with a student card. Great for young people on a budget.\n\nC) Electronics Deal — buy a laptop and get free headphones. Pay in monthly instalments.", "Empareja cada persona con la oferta ideal (A/B/C).", [
      mc("A student who wants cheap clothes.", ["A", "B", "C"], 1, "Clothes Discount: student card."),
      mc("A book lover looking for a bargain.", ["A", "B", "C"], 0, "Book Sale: half price."),
      mc("Someone buying a laptop who wants a free gift.", ["A", "B", "C"], 2, "Electronics Deal."),
      mc("A person who can't pay all at once.", ["A", "B", "C"], 2, "C: monthly instalments."),
      mc("Someone with a student card.", ["A", "B", "C"], 1, "B."),
      mc("A reader who wants to spend less.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants free headphones.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "SAVING FOR SOMETHING SPECIAL\n\nSix months ago, I saw a beautiful guitar in a shop, but it was very expensive and I couldn't afford it. I really wanted it, so I decided to save my money carefully. I stopped buying coffee every day and I didn't spend money on things I didn't need.\n\nEvery week, I put some cash in a jar at home. At first it was hard, because I love shopping. But slowly the money grew, and I felt proud of myself. My friends thought I was crazy, but I didn't mind.\n\nLast Saturday, I finally had enough money. I went to the shop with all my savings and bought the guitar! The shop assistant even gave me a small discount because I paid in cash. Now I play every day. Saving up taught me an important lesson: if you really want something, be patient.", "Lee el texto y responde (A/B/C).", [
      mc("Why couldn't the writer buy the guitar at first?", ["It was sold.", "It was too expensive.", "The shop was closed."], 1, "'very expensive and I couldn't afford it'."),
      mc("What did the writer stop buying?", ["Books.", "Coffee.", "Clothes."], 1, "'stopped buying coffee every day'."),
      mc("Where did the writer put the money?", ["In a bank.", "In a jar at home.", "In a shop."], 1, "'cash in a jar at home'."),
      mc("Why did the assistant give a discount?", ["A sale.", "The writer paid in cash.", "A student card."], 1, "'because I paid in cash'."),
      mc("What lesson did the writer learn?", ["Spend more.", "Be patient.", "Don't save."], 1, "'be patient'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I wanted a guitar, but it was too (1)___, so I decided to (2)___ my money. I stopped buying coffee and I didn't (3)___ money on unnecessary things. Every week I put some (4)___ in a jar. Finally I had enough and bought it. The assistant gave me a (5)___ because I paid in cash. He gave me my (6)___ and a receipt.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["expensive", "cheap", "free"], 0, "'too expensive'."),
      mc("Hueco 2", ["save", "spend", "cost"], 0, "'save my money'."),
      mc("Hueco 3", ["spend", "save", "afford"], 0, "'didn't spend money'."),
      mc("Hueco 4", ["cash", "discount", "receipt"], 0, "'some cash'."),
      mc("Hueco 5", ["discount", "receipt", "change"], 0, "'gave me a discount'."),
      mc("Hueco 6", ["change", "cost", "save"], 0, "'my change and a receipt'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Faye,\nGreat news! I finally bought the guitar I wanted. It was really expensive, (1)___ I saved my money for six months. I stopped buying coffee (2)___ I didn't spend money on things I didn't need. Last Saturday I had (3)___ money at last! The shop assistant gave me a discount (4)___ I paid in cash. I'm so (5)___ of myself. If you really want something, you (6)___ be patient!\nLove,\nKai", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["so"], "consecuencia → so."),
      fb("Hueco 2", ["and"], "unión → and."),
      fb("Hueco 3", ["enough"], "'enough money'."),
      fb("Hueco 4", ["because"], "causa → because."),
      fb("Hueco 5", ["proud"], "'proud of myself'."),
      fb("Hueco 6", ["should", "must"], "consejo/necesidad."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un email sobre ahorrar", "Estás ahorrando para algo especial. Escríbele un email a tu amigo/a inglés/a (25 palabras o más) con:\n· para qué estás ahorrando,\n· qué haces para gastar menos,\n· cuándo crees que lo tendrás.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona ve algo caro en una tienda y no puede comprarlo.\n2) Ahorra dinero en un bote durante semanas.\n3) Vuelve feliz a la tienda y lo compra.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. I always keep my receipts, in case I need to return something. Two. I'm saving money every month because I want to buy a car next year. Three. I never carry cash any more; I pay for everything with my card. Four. I love shopping in the sales, because you can get great discounts. Five. I try not to spend too much, so I make a list before I go shopping.", [
      mc("Person 1 is talking about…", ["keeping receipts", "saving", "cash"], 0, "'I always keep my receipts'."),
      mc("Person 2 is talking about…", ["saving for a car", "receipts", "sales"], 0, "'saving money… buy a car'."),
      mc("Person 3 is talking about…", ["paying by card", "saving", "sales"], 0, "'pay… with my card'."),
      mc("Person 4 is talking about…", ["sales and discounts", "cash", "receipts"], 0, "'shopping in the sales… discounts'."),
      mc("Person 5 is talking about…", ["not overspending", "receipts", "cash"], 0, "'try not to spend too much… a list'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (dinero y compras)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre dinero y compras — si prefieres ahorrar o gastar, cómo pagas, algo que ahorraste para comprar", "hablar de hábitos con dinero y usar so/because", "I save, I spend, I prefer, because, I paid"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (compras)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre ahorrar o gastar, comprar en tiendas o rebajas; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, cheaper, save"),

    SUMMARY("Resumen del Día 29", [
      "because = causa; so = consecuencia (mismo hecho, distinto orden).",
      "'because of' + sustantivo (no verbo).",
      "Vocabulario de dinero. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 30", "Une 3 pares de frases con so/because. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY30 = {
  title: "Día 30 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de verbos + -ing/to, adverbios y conectores, y del vocabulario de la semana. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 6.",
  pedagogy: {
    objective: "Consolidar los patrones verbales, adverbios y conectores, y medir el progreso.",
    summary: "Repaso de verbo + -ing/to, adverbios de modo, so/because; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 7."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 6 — ¡mitad del curso completada! Consolidas patrones verbales, adverbios y conectores. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 6", `1) like/love/enjoy/hate + -ing; sentimientos (-ed/-ing).
2) want/need/would like/decide + to + verbo.
3) Adverbios de modo: adjetivo + -ly; irregulares (well, fast, hard).
4) because (causa) / so (consecuencia); because of + sustantivo.`),
    grammarEx("Repaso mixto de gramática — Semana 6", "Completa o elige.", [
      fb("I love ___ (dance) at parties.", ["dancing"], "love + -ing."),
      fb("She wants ___ (learn) English.", ["to learn"], "want + to."),
      fb("Adverb of 'careful': ___", ["carefully"], "+ -ly."),
      fb("It was raining, ___ we stayed home.", ["so"], "consecuencia → so."),
      mc("How you feel:", ["I'm boring.", "I'm bored.", "I'm bore."], 1, "bored."),
      fb("He plays the guitar very ___ (good).", ["well"], "irregular → well."),
      fb("I'd ___ to visit you next week.", ["like"], "would like to."),
      fb("We stayed inside ___ it was cold.", ["because"], "causa → because."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 6", "Repasa los mazos (sentimientos, comunicación, transporte, dinero)."),
    vocabEx("Repaso de vocabulario — Semana 6", "Elige la opción correcta.", [
      mc("Before an exam, you feel:", ["nervous", "proud", "surprised"], 0, "nervous."),
      mc("To answer a message:", ["reply", "hang up", "contact"], 0, "reply."),
      mc("You wait for a train on the:", ["platform", "timetable", "single"], 0, "platform."),
      mc("Notes and coins:", ["cash", "receipt", "discount"], 0, "cash."),
      mc("To keep money for later:", ["save", "spend", "cost"], 0, "save."),
      mc("The opposite of 'happy':", ["sad", "tired", "proud"], 0, "sad."),
      mc("To leave a bus:", ["get off", "turn left", "on foot"], 0, "get off."),
      mc("A lower price in a sale:", ["discount", "change", "receipt"], 0, "discount."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Please pay at the machine before returning to your car.'", ["Pay before you leave.", "No payment.", "Free parking."], 0, "'pay… before returning'."),
      mc("Text: 'I'd love to come, but I have to work. Sorry!'", ["Can't come because of work.", "Coming for sure.", "No work."], 0, "'have to work'."),
      mc("Notice: 'Buses run every 15 minutes.'", ["A bus every quarter hour.", "One bus a day.", "No buses."], 0, "'every 15 minutes'."),
      mc("Card sign: 'Contactless payments accepted.'", ["You can pay by tapping your card.", "Cash only.", "No payment."], 0, "'Contactless payments'."),
      mc("Sign: 'Speak quietly in the library.'", ["Be quiet.", "Speak loudly.", "No talking at all."], 0, "'Speak quietly'."),
      mc("Note: 'Feeling nervous? Take a deep breath before your test.'", ["Advice for nervous people.", "A test result.", "A goodbye."], 0, "'Feeling nervous? Take a deep breath'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y consejos", "THREE PIECES OF ADVICE\n\nA) For feeling stressed — do some exercise or a hobby you enjoy, and talk to a friend.\n\nB) For saving money — make a shopping list and don't buy things you don't need.\n\nC) For a long journey — take a book or music, and get comfortable.", "Empareja cada persona con el consejo ideal (A/B/C).", [
      mc("Someone who feels stressed and worried.", ["A", "B", "C"], 0, "A: stress."),
      mc("A person who spends too much money.", ["A", "B", "C"], 1, "B: saving."),
      mc("Someone about to travel for many hours.", ["A", "B", "C"], 2, "C: long journey."),
      mc("A person who wants to relax with a hobby.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to control their shopping.", ["A", "B", "C"], 1, "B."),
      mc("A traveller who gets bored on trains.", ["A", "B", "C"], 2, "C."),
      mc("Someone who needs to talk to a friend.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A LESSON IN PATIENCE\n\nMy little brother, Leo, wanted to learn to ride a bike, but at first he found it really difficult. He kept falling off, and he got angry and upset. 'I can't do it!' he shouted, and he wanted to give up.\n\nOur dad was very patient. 'Everyone falls off at the start,' he said calmly. 'You have to practise slowly, and you'll get better.' So every evening after work, Dad went to the park with Leo. Leo practised carefully, and Dad ran beside him, holding the bike.\n\nAfter two weeks, something amazing happened: Leo rode all the way across the park by himself! He was so happy and proud. Now he rides everywhere. I learned something too: if you want to do something well, you have to be patient and keep trying.", "Lee el texto y responde (A/B/C).", [
      mc("What did Leo want to learn?", ["To swim.", "To ride a bike.", "To dance."], 1, "'learn to ride a bike'."),
      mc("How did Leo feel at first?", ["Happy.", "Angry and upset.", "Bored."], 1, "'got angry and upset'."),
      mc("What did Dad say?", ["'Give up.'", "'Everyone falls off at the start.'", "'Stop trying.'"], 1, "'Everyone falls off at the start'."),
      mc("When did they practise?", ["In the morning.", "Every evening after work.", "At weekends only."], 1, "'every evening after work'."),
      mc("What happened after two weeks?", ["Leo gave up.", "Leo rode across the park alone.", "Leo fell off again."], 1, "'rode all the way across the park by himself'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My brother wanted (1)___ learn to ride a bike, but he found it hard and got (2)___. He wanted to give up. But our dad was patient and told him to practise (3)___. Every evening they went to the park (4)___ he could practise. After two weeks, Leo rode across the park alone! He was so (5)___. If you want to do something well, you have to be (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["to", "for", "at"], 0, "want to learn."),
      mc("Hueco 2", ["upset", "excited", "proud"], 0, "'got upset'."),
      mc("Hueco 3", ["carefully", "careful", "carefuly"], 0, "adverbio → carefully."),
      mc("Hueco 4", ["so", "because", "but"], 0, "'so he could practise'."),
      mc("Hueco 5", ["proud", "sad", "bored"], 0, "'so proud'."),
      mc("Hueco 6", ["patient", "angry", "tired"], 0, "'be patient'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Rae,\nMy little brother just learned (1)___ ride a bike! At first he found it really hard and got upset (2)___ he kept falling off. He wanted (3)___ give up, but our dad was patient. Every evening they went to the park (4)___ he could practise carefully. After two weeks he rode across the park alone! He was (5)___ proud. It taught me that if you want something, you (6)___ be patient.\nLove,\nJo", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'learned to ride'."),
      fb("Hueco 2", ["because"], "causa → because."),
      fb("Hueco 3", ["to"], "'wanted to give up'."),
      fb("Hueco 4", ["so"], "'so he could practise'."),
      fb("Hueco 5", ["so", "really", "very"], "intensificador."),
      fb("Hueco 6", ["must", "should"], "necesidad/consejo."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un consejo a un amigo/a", "Tu amigo/a inglés/a quiere aprender algo nuevo pero se rinde fácilmente. Escríbele un email (25 palabras o más) con:\n· anímale a no rendirse,\n· dale un consejo (should),\n· cuéntale algo que tú aprendiste con paciencia.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un niño se cae de la bici y se enfada.\n2) Su padre le ayuda con paciencia en el parque.\n3) Al final el niño monta solo, feliz.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Max hablar de cómo se siente cada persona de su familia hoy y empareja cada persona con su sentimiento (A/B/C…).", "This is Part Five. You will hear Max talking about how his family feels today. My mother is really excited, because she's going to a concert tonight. My father is a bit worried, because he has a big meeting at work. My sister is nervous, because she has a driving test this afternoon. My brother is proud, because he won a football match yesterday. And my grandmother is tired, because she didn't sleep well.", [
      mc("Mother", ["excited", "worried", "tired"], 0, "'really excited… concert'."),
      mc("Father", ["worried", "proud", "nervous"], 0, "'a bit worried… meeting'."),
      mc("Sister", ["nervous", "excited", "tired"], 0, "'nervous… driving test'."),
      mc("Brother", ["proud", "worried", "tired"], 0, "'proud… won a match'."),
      mc("Grandmother", ["tired", "excited", "nervous"], 0, "'tired… didn't sleep well'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — habla de tus aficiones, de cómo te comunicas, de cómo vas a los sitios y de cómo gestionas el dinero", "usar patrones verbales, adverbios y conectores", "I enjoy … -ing, I'd like to, because, so, carefully"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre pasar el tiempo libre de forma activa o tranquila; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I enjoy, because, relaxing, fun"),

    SUMMARY("Resumen de la Semana 6", [
      "Dominas verbo + -ing y verbo + to, adverbios de modo y so/because.",
      "Sabes hablar de sentimientos, comunicación, transporte y dinero.",
      "Has completado la MITAD del curso. Ahora, el mini-simulacro.",
      "La semana que viene: condicionales (if/when + will).",
    ]),
    INFO("Mini-simulacro de la Semana 6", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. ¡Vas por la mitad del A2 Key!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Gustos, sentimientos y cómo hacemos las cosas",
  description: "Verbo + -ing (like/love/hate), verbo + to (want/would like), adverbios de modo y so/because. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
