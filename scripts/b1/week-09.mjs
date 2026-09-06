/**
 * B1 Preliminary · Semana 9 — "Opiniones, acuerdo y matices".
 * Gramática: question tags, acuerdo (so do I / neither do I), énfasis con
 * so/such...that e intensificadores, y conectores del discurso (although,
 * however, despite, so that). Cada día, las 4 destrezas con el formato real del B1.
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I agree, in my opinion, it depends, personally"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; muestra acuerdo y desacuerdo.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "acordar y discrepar con educación", "I agree, so do I, I'm not sure, how about, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, on the other hand, that's true"),
];

// ───────────────────────── DÍA 41 ─────────────────────────
const DAY41 = {
  title: "Día 41 — Question tags · Conversar y opinar",
  description: "Coletillas interrogativas (isn't it? do you? won't we?). Vocabulario de opiniones. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Añadir question tags para confirmar o buscar acuerdo.",
    summary: "Question tags; opiniones; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["tag del mismo signo ('It's cold, is it?').", "auxiliar equivocado.", "'isn't it?' para todo."],
    reviewPrompts: ["Frase afirmativa → ¿tag positivo o negativo?", "¿Qué auxiliar en 'You like tea, ___?'"],
  },
  items: [
    TEXT("🔁 Semana 9. Hoy las QUESTION TAGS: esas coletillas (¿verdad?, ¿no?) para confirmar o buscar acuerdo. Vocabulario: OPINAR."),
    GRAMMAR("Question tags", `Una coletilla se añade al final para confirmar. Regla de ORO: frase AFIRMATIVA → tag NEGATIVO; frase NEGATIVA → tag POSITIVO.
· It's cold, isn't it? · You like tea, don't you? · She can swim, can't she?
· It isn't cold, is it? · You don't smoke, do you? · He won't come, will he?
Se usa el mismo AUXILIAR (be, do/does/did, have, will, can…) y el pronombre correspondiente.
Sin auxiliar → do/does/did: You went home, didn't you? She lives here, doesn't she?
CASOS especiales: I'm right, aren't I? · Let's go, shall we? · Open the door, will you? · Nobody came, did they?`),
    WARN("Errores típicos del hispanohablante", "· ❌ It's cold, is it? → ✅ It's cold, isn't it? (signo contrario).\n· ❌ You like tea, no? → ✅ …, don't you?\n· ❌ I'm late, amn't I? → ✅ …, aren't I?\n· El tag repite el AUXILIAR de la frase (o do/does/did)."),
    grammarEx("Gramática — Question tags", "Añade la coletilla correcta.", [
      fb("It's a lovely day, ___ ___?", ["isn't it"], "afirmativa → tag negativo."),
      fb("You like coffee, ___ ___?", ["don't you"], "sin auxiliar → don't."),
      fb("She can drive, ___ ___?", ["can't she"], "can → can't."),
      fb("They aren't here, ___ ___?", ["are they"], "negativa → tag positivo."),
      fb("You went to the party, ___ ___?", ["didn't you"], "pasado → didn't."),
      mc("Choose:", ["I'm right, amn't I?", "I'm right, aren't I?", "I'm right, isn't I?"], 1, "'I'm' → aren't I?"),
      fb("Let's go out, ___ ___?", ["shall we"], "Let's → shall we?"),
    ]),
    GRAMMAR("Vocabulario del día — Opinar", "Léxico para dar opiniones (B1)."),
    deck("B1 S9D41 — Opinar", [
      ["opinion", "opinión", "In my opinion, it's too expensive.", "sustantivo", "əˈpɪnjən"],
      ["agree", "estar de acuerdo", "I completely agree with you.", "verbo", "əˈɡriː"],
      ["disagree", "no estar de acuerdo", "I'm afraid I disagree.", "verbo", "ˌdɪsəˈɡriː"],
      ["point of view", "punto de vista", "I see your point of view.", "colocación", "ˌpɔɪnt əv ˈvjuː"],
      ["reckon", "creer / pensar (informal)", "I reckon it'll rain.", "verbo", "ˈrekən"],
      ["convince", "convencer", "You've convinced me.", "verbo", "kənˈvɪns"],
      ["obviously", "obviamente", "Obviously, safety comes first.", "adverbio", "ˈɒbviəsli"],
      ["actually", "en realidad", "Actually, I think you're right.", "adverbio", "ˈæktʃuəli"],
      ["it depends", "depende", "It depends on the weather.", "expresión", "ɪt dɪˈpendz"],
      ["strongly", "firmemente", "I strongly believe in this.", "adverbio", "ˈstrɒŋli"],
    ]),
    vocabEx("Vocabulario — Opinar", "Elige la opción correcta.", [
      mc("To have the same opinion as someone is to ___.", ["agree", "disagree", "convince"], 0, "agree."),
      mc("To have a different opinion is to ___.", ["disagree", "agree", "reckon"], 0, "disagree."),
      mc("The way you personally see a topic is your ___.", ["point of view", "opinion", "both"], 2, "point of view / opinion."),
      mc("To persuade someone that you're right is to ___ them.", ["convince", "disagree", "reckon"], 0, "convince."),
      mc("An informal way to say 'I think' is 'I ___'.", ["reckon", "agree", "depend"], 0, "reckon."),
      mc("When the answer isn't fixed, you say 'it ___'.", ["depends", "agrees", "convinces"], 0, "depends."),
    ]),

    ...readingParts({
      p1: { title: "Opiniones y avisos", items: [
        mc("Comment: 'This film is amazing, isn't it?'", ["They think the film is great.", "They dislike it.", "No opinion."], 0, "'amazing, isn't it?'"),
        mc("Note: 'I'm afraid I disagree with your idea.'", ["They have a different opinion.", "They agree.", "No opinion."], 0, "'I disagree with your idea'."),
        mc("Text: 'It depends on how much it costs.'", ["The decision depends on price.", "It's decided.", "Price doesn't matter."], 0, "'It depends on how much it costs'."),
        mc("Post: 'In my opinion, the new rule is unfair.'", ["They think the rule is unfair.", "They love the rule.", "No opinion."], 0, "'In my opinion, the new rule is unfair'."),
        mc("Reply: 'You've convinced me — let's do it!'", ["They've been persuaded.", "They refuse.", "They're unsure."], 0, "'You've convinced me'."),
      ] },
      p2text: "FOUR ONLINE DISCUSSION GROUPS\n\nA) Film Fans — friendly debates about the best and worst films of the year.\nB) Green Future — passionate discussions about the environment and how to protect it.\nC) Tech Talk — arguments about whether new technology is good or bad for society.\nD) Book Club — thoughtful conversations about the novels everyone is reading.",
      p2q: { title: "Emparejar personas y grupos", items: [
        mc("Nadia loves arguing about movies.", ["A", "B", "C", "D"], 0, "Film Fans."),
        mc("Ben feels strongly about protecting nature.", ["A", "B", "C", "D"], 1, "Green Future."),
        mc("Sara enjoys debating the effects of technology.", ["A", "B", "C", "D"], 2, "Tech Talk."),
        mc("Leo wants to discuss the books he reads.", ["A", "B", "C", "D"], 3, "Book Club."),
        mc("A group about the environment.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE ART OF DISAGREEING WELL\n\nWe live in an age of endless argument. Online, people disagree about everything, and these disagreements often turn nasty within seconds. It's easy to think that the answer is to avoid difficult topics altogether. But I believe the opposite. The problem isn't that we disagree; it's that we've forgotten how to disagree well.\n\nDisagreeing well is a real skill, and it starts with listening. When someone holds a different opinion, our instinct is to start planning our reply before they've even finished speaking. But if we truly listen, we often discover that the other person's point of view is more reasonable than we assumed. We might not end up agreeing, but at least we understand them. It also helps to attack the argument, not the person. There's a huge difference between saying 'I think that idea is mistaken' and 'You're an idiot.' The first invites a conversation; the second only invites a fight.\n\nFinally, we should be brave enough to change our minds. Somewhere along the way, we started to see this as a weakness. In fact, it's a sign of intelligence and honesty. If someone gives you a good reason to think differently, being convinced isn't losing — it's learning. Imagine how much better the world would be if, instead of shouting at each other, we listened carefully, argued kindly, and occasionally said those three powerful words: 'You're probably right.'",
      p3q: { title: "El arte de discrepar bien (texto largo)", items: [
        mc("What does the writer say the real problem is?", ["That we disagree.", "That we've forgotten how to disagree well.", "That we listen too much."], 1, "'we've forgotten how to disagree well'."),
        mc("What does disagreeing well start with?", ["Talking.", "Listening.", "Winning."], 1, "'it starts with listening'."),
        mc("What is the difference the writer highlights?", ["Loud vs quiet.", "Attacking the argument vs attacking the person.", "Long vs short."], 1, "'attack the argument, not the person'."),
        mc("How does the writer describe changing your mind?", ["A weakness.", "A sign of intelligence and honesty.", "Impossible."], 1, "'a sign of intelligence and honesty'."),
        mc("What three words does the writer suggest?", ["'I am right.'", "'You're probably right.'", "'Leave me alone.'"], 1, "'You're probably right'."),
      ] },
      p4text: "THE DEBATE THAT CHANGED MY MIND\n\nAt school, I was always the loudest voice in every argument. (1)___ I was completely convinced that I was right about everything, and I loved to win.\n\nThen, in my final year, our teacher organised a debate. (2)___ To my horror, she asked me to argue for the opposite of what I actually believed. At first, I thought it would be easy to make a weak case. (3)___ But as I researched the other side, something uncomfortable happened. I began to see that their arguments were far stronger than I had ever admitted.\n\nStanding up to defend a view I had always mocked, I felt my old certainty melting away. (4)___ For the first time, I truly understood people I had always disagreed with. I didn't completely change my beliefs that day, but I changed something more important: the way I listened. (5)___ Now, whenever I'm sure I'm right, I remember that debate, and I stop to consider that the other person might have a point too.",
      p4options: [
        "I never once imagined I could be wrong.",                  // A -> gap 1
        "The topic was one I felt very strongly about.",           // B -> gap 2
        "I was sure I could win without really trying.",           // C -> gap 3
        "It was a genuinely humbling experience.",                 // D -> gap 4
        "I refused to take part in the debate at all.",            // E (extra)
        "That lesson taught me the value of an open mind.",        // F -> gap 5
        "I had never held an opinion about anything.",             // G (extra)
        "The debate was cancelled before it began.",               // H (extra)
      ],
      p4q: { title: "El debate que me cambió la opinión (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: nunca imaginó estar equivocado."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: un tema que le importaba mucho."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: seguro de ganar sin esfuerzo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: una experiencia que le bajó los humos."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le enseñó el valor de la mente abierta."),
      ] },
      p5text: "Discussing ideas is healthy, but it's important to do it kindly. When you (1)___ with someone, listen to their (2)___ of view before you reply. You don't have to (3)___ if you're not persuaded, but stay polite. In my (4)___, attacking a person's argument is fine, but attacking the person is not. And if someone (5)___ you with a good reason, don't be afraid to change your mind — that's not a weakness, it's (6)___ a strength.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["disagree", "agree", "reckon", "convince"], 0, "'when you disagree with someone'."),
        mc("Hueco 2", ["point", "opinion", "idea", "view"], 0, "'their point of view'."),
        mc("Hueco 3", ["agree", "disagree", "convince", "reckon"], 0, "'don't have to agree'."),
        mc("Hueco 4", ["opinion", "view", "point", "idea"], 0, "'In my opinion'."),
        mc("Hueco 5", ["convinces", "agrees", "disagrees", "reckons"], 0, "'convinces you with a good reason'."),
        mc("Hueco 6", ["actually", "obviously", "strongly", "hardly"], 0, "'it's actually a strength'."),
      ] },
      p6text: "Hi Sam,\nWe had a great debate in class today about technology, (1)___ we? At first I completely disagreed (2)___ my friend Ana, but she made some really good points. She almost (3)___ me that phones do more harm than good! I still don't fully agree, but I can see her (4)___ of view now. In my (5)___, the important thing is to listen and stay polite. You're good at debating too, (6)___ you? We should have a discussion sometime!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["didn't"], "'we had a debate, didn't we?'"),
        fb("Hueco 2", ["with"], "'disagreed with my friend'."),
        fb("Hueco 3", ["convinced"], "'almost convinced me'."),
        fb("Hueco 4", ["point"], "'her point of view'."),
        fb("Hueco 5", ["opinion"], "'In my opinion'."),
        fb("Hueco 6", ["aren't"], "'You're good at debating, aren't you?'"),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pide tu opinión sobre un tema polémico (por ejemplo, los móviles en clase). Responde a su email (~100 palabras):\n· da tu opinión y una razón,\n· di si estás de acuerdo o no con él/ella,\n· pregúntale qué piensa sobre otro tema.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How can we disagree with people without arguing?' con tu opinión.\n· RELATO: empieza con: 'I was completely sure I was right — until she spoke.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: It's a great film, isn't it? Man: Yes, I loved it. Two. Man: You don't like spicy food, do you? Woman: No, I really don't. Three. Woman: What do you reckon about the plan? Man: I think it's a good idea. Four. Man: Do you agree with her? Woman: Actually, I disagree completely. Five. Man: Shall we go out tonight? Woman: It depends on the weather. Six. Woman: She's convinced you, hasn't she? Man: Yes, she made a good point. Seven. Man: In your opinion, is it worth it? Woman: Definitely, I'd recommend it.", [
      mc("1. What does the man think of the film?", ["He hated it.", "He loved it.", "It was okay."], 1, "'Yes, I loved it'."),
      mc("2. Does the woman like spicy food?", ["Yes.", "No, she really doesn't.", "Sometimes."], 1, "'No, I really don't'."),
      mc("3. What does the man think of the plan?", ["It's bad.", "It's a good idea.", "He's unsure."], 1, "'I think it's a good idea'."),
      mc("4. Does the woman agree with her?", ["Yes.", "No, she disagrees completely.", "Partly."], 1, "'I disagree completely'."),
      mc("5. What does going out depend on?", ["Money.", "The weather.", "Time."], 1, "'It depends on the weather'."),
      mc("6. Has she convinced the man?", ["No.", "Yes, she made a good point.", "Not yet."], 1, "'she made a good point'."),
      mc("7. Does the woman recommend it?", ["No.", "Yes, definitely.", "Maybe."], 1, "'Definitely, I'd recommend it'."),
    ]),

    ...speakingParts("las opiniones", { p1: "sobre qué temas tienes opiniones fuertes y si te gusta debatir", p2: "una foto de personas conversando o debatiendo", p3: "poneros de acuerdo sobre un tema polémico para un debate de clase", p4: "las opiniones, cómo discrepar con respeto y si es bueno cambiar de opinión" }),

    SUMMARY("Resumen del Día 41", [
      "Question tags: afirmativa → tag negativo (isn't it?); negativa → tag positivo (are they?).",
      "Mismo auxiliar (o do/does/did). Especiales: aren't I?, shall we?, will you?",
      "Vocabulario de opinar. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 42", "Escribe 5 frases con question tags. Repasa las flashcards. Mañana: mostrar acuerdo (so do I / neither do I)."),
  ],
};

// ───────────────────────── DÍA 42 ─────────────────────────
const DAY42 = {
  title: "Día 42 — Acuerdo y respuestas cortas · Gustos y preferencias",
  description: "so do I / neither do I / me too / me neither; respuestas cortas. Vocabulario de gustos. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Mostrar acuerdo con 'so/neither + auxiliar + sujeto' y respuestas cortas.",
    summary: "Acuerdo/respuestas cortas; gustos; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'So do I' con verbo negativo.", "'Me neither' mal.", "'Yes, I do too'."],
    reviewPrompts: ["'I like tea.' → ¿cómo dices 'yo también'?", "'I don't smoke.' → ¿'yo tampoco'?"],
  },
  items: [
    TEXT("🔁 Repaso: question tags. Hoy cómo mostrar ACUERDO (yo también / yo tampoco) y las RESPUESTAS CORTAS. Vocabulario: GUSTOS y PREFERENCIAS."),
    GRAMMAR("Acuerdo y respuestas cortas", `ACUERDO CON UNA FRASE AFIRMATIVA ('yo también'): SO + auxiliar + sujeto.
· "I like tea." → So do I. · "I'm tired." → So am I. · "She can swim." → So can he.
ACUERDO CON UNA FRASE NEGATIVA ('yo tampoco'): NEITHER/NOR + auxiliar + sujeto.
· "I don't smoke." → Neither do I. · "I can't drive." → Neither can I.
Informal: Me too (afirmativo), Me neither (negativo).
DESACUERDO: "I like it." → Oh, I don't. / "I'm not hungry." → I am!
RESPUESTAS CORTAS: repiten el auxiliar: Do you like it? → Yes, I do / No, I don't. Can you swim? → Yes, I can.
⚠️ El auxiliar debe COINCIDIR con el de la frase (do/am/can/have…).`),
    WARN("Errores típicos del hispanohablante", "· ❌ 'I don't like it.' → 'So do I' → ✅ Neither do I.\n· ❌ 'I like it.' → 'Yes, I like too' → ✅ So do I / Me too.\n· ❌ Me neither para afirmativo → ✅ Me too.\n· El auxiliar cambia según la frase: So AM I / So CAN I / So DO I."),
    grammarEx("Gramática — Acuerdo y respuestas cortas", "Completa con el acuerdo o la respuesta corta.", [
      fb("\"I love pizza.\" → \"___ ___ I.\" (yo también)", ["So do"], "So do I."),
      fb("\"I'm really tired.\" → \"___ ___ I.\" (yo también)", ["So am"], "So am I."),
      fb("\"I don't like horror films.\" → \"___ ___ I.\" (yo tampoco)", ["Neither do", "Nor do"], "Neither do I."),
      fb("\"I can't swim.\" → \"___ ___ I.\" (yo tampoco)", ["Neither can", "Nor can"], "Neither can I."),
      mc("\"Do you like coffee?\" Short answer (yes):", ["Yes, I like.", "Yes, I do.", "Yes, I am."], 1, "do → Yes, I do."),
      mc("\"She's been to Paris.\" (yo también):", ["So have I.", "So did I.", "So do I."], 0, "has been → So have I."),
      mc("\"I'm not hungry.\" (yo sí, desacuerdo):", ["Neither am I.", "I am!", "So am I."], 1, "desacuerdo → I am!"),
    ]),
    GRAMMAR("Vocabulario del día — Gustos y preferencias", "Léxico de gustos (B1)."),
    deck("B1 S9D42 — Gustos y preferencias", [
      ["be keen on", "gustarle / entusiasmarle", "I'm keen on jazz.", "colocación", "biː kiːn ɒn"],
      ["can't stand", "no soportar", "I can't stand queuing.", "colocación", "kɑːnt ˈstænd"],
      ["be fond of", "tenerle cariño / gustarle", "I'm fond of old films.", "colocación", "biː fɒnd əv"],
      ["prefer", "preferir", "I prefer walking to driving.", "verbo", "prɪˈfɜː"],
      ["fancy", "apetecer / gustar", "Do you fancy a coffee?", "verbo", "ˈfænsi"],
      ["mind", "importar / molestar", "I don't mind waiting.", "verbo", "maɪnd"],
      ["enjoy", "disfrutar", "I enjoy reading before bed.", "verbo", "ɪnˈdʒɔɪ"],
      ["dislike", "no gustar / desagradar", "I dislike loud places.", "verbo", "dɪsˈlaɪk"],
      ["favourite", "favorito/a", "This is my favourite song.", "adjetivo", "ˈfeɪvərɪt"],
      ["taste", "gusto / gustos", "We have similar tastes in music.", "sustantivo", "teɪst"],
    ]),
    vocabEx("Vocabulario — Gustos y preferencias", "Elige la opción correcta.", [
      mc("To really dislike something is to ___ it.", ["can't stand", "be keen on", "fancy"], 0, "can't stand."),
      mc("An informal way to say 'would like' is to ___.", ["fancy", "dislike", "mind"], 0, "fancy."),
      mc("If something doesn't bother you, you don't ___.", ["mind", "fancy", "prefer"], 0, "mind."),
      mc("To like one thing more than another is to ___.", ["prefer", "dislike", "mind"], 0, "prefer."),
      mc("The things you like are your ___.", ["tastes", "minds", "favourites"], 0, "tastes."),
      mc("To be enthusiastic about something is to be ___ it.", ["keen on", "fond", "stand"], 0, "keen on."),
    ]),

    ...readingParts({
      p1: { title: "Gustos y avisos", items: [
        mc("Text: 'I love this song!' 'So do I!'", ["Both like the song.", "They disagree.", "Nobody likes it."], 0, "'So do I' = agreement."),
        mc("Message: 'I can't stand waiting in queues.'", ["They hate queuing.", "They love queuing.", "No opinion."], 0, "'can't stand waiting in queues'."),
        mc("Note: 'Do you fancy going to the cinema?'", ["An invitation to the cinema.", "A refusal.", "No cinema."], 0, "'fancy going to the cinema'."),
        mc("Reply: 'I don't mind — you choose.'", ["They have no strong preference.", "They strongly prefer one.", "They refuse."], 0, "'I don't mind — you choose'."),
        mc("Text: 'We have similar tastes in music.'", ["They like the same music.", "Different tastes.", "No music."], 0, "'similar tastes in music'."),
      ] },
      p2text: "FOUR FRIENDS, FOUR TASTES\n\nA) Maya — loves loud concerts and dancing; can't stand quiet evenings in.\nB) Tom — is fond of cosy nights at home with a good film; dislikes crowds.\nC) Priya — is keen on the outdoors and prefers hiking to shopping.\nD) Leo — enjoys trying new restaurants and doesn't mind spending money on food.",
      p2q: { title: "Emparejar personas y planes", items: [
        mc("Nadia wants a friend to go to a music festival with.", ["A", "B", "C", "D"], 0, "Maya."),
        mc("Ben is looking for someone to watch films with at home.", ["A", "B", "C", "D"], 1, "Tom."),
        mc("Sara wants a companion for a mountain walk.", ["A", "B", "C", "D"], 2, "Priya."),
        mc("Omar is looking for someone to try a new restaurant with.", ["A", "B", "C", "D"], 3, "Leo."),
        mc("Someone who dislikes crowds.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "WHY WE LIKE WHAT WE LIKE\n\nHave you ever wondered why you love a certain kind of music, while your best friend can't stand it? Our tastes feel deeply personal, as if they were simply part of who we are. But scientists who study this question have found that our likes and dislikes are shaped by all sorts of surprising influences.\n\nThe first is simple familiarity. Generally speaking, the more we are exposed to something, the more we tend to like it. A song we dislike on first hearing can become a favourite after we've heard it ten times. This is why advertisers play the same tunes again and again. Our childhood also plays a huge role. The foods, smells and sounds we grew up with often stay with us for life, which is why so many people are fond of the dishes their grandmother used to make. Even our friends shape our tastes: we naturally start to enjoy the things the people around us enjoy.\n\nDoes this mean our tastes aren't really 'ours' at all? Not exactly. Two people can grow up in the same house, listen to the same music and eat the same food, yet end up with completely different preferences. The truth is that taste is a fascinating mixture of our biology, our experiences and something uniquely personal that no scientist can fully explain. So the next time a friend says they can't stand your favourite band, don't take it personally. Their brain has simply been shaped by a different life. And isn't it wonderful that we're all so different?",
      p3q: { title: "Por qué nos gusta lo que nos gusta (texto largo)", items: [
        mc("How do our tastes feel to us?", ["Unimportant.", "Deeply personal.", "Shared."], 1, "'as if they were simply part of who we are'."),
        mc("What happens the more we hear a song?", ["We hate it more.", "We tend to like it more.", "Nothing."], 1, "'the more we are exposed to something, the more we tend to like it'."),
        mc("Why are people fond of their grandmother's dishes?", ["They're cheap.", "Childhood foods stay with us for life.", "They're healthy."], 1, "'foods… we grew up with often stay with us for life'."),
        mc("Can two people from the same home have different tastes?", ["No, never.", "Yes, completely different.", "Only twins."], 1, "'end up with completely different preferences'."),
        mc("What does the writer say taste is a mixture of?", ["Only biology.", "Biology, experiences and something uniquely personal.", "Only friends."], 1, "'biology, our experiences and something uniquely personal'."),
      ] },
      p4text: "THE FRIEND WHO CHANGED MY TASTE\n\nWhen I met my friend Layla, we couldn't have been more different. (1)___ I loved pop music; she was passionate about jazz, which I found boring. I preferred action films; she adored slow, thoughtful dramas.\n\nAt first, our differences caused little arguments. (2)___ I couldn't understand how she could enjoy such 'strange' things, and, to be fair, she felt the same about mine. But because we were friends, we started to share. (3)___ She would play me her favourite jazz records, patiently explaining what to listen for. I took her to see the kind of films I loved.\n\nSomething unexpected happened. (4)___ Slowly, I found myself actually enjoying jazz, and she discovered she quite liked a good action film after all. Neither of us completely changed, but our worlds grew bigger. (5)___ These days, when someone tells me they can't stand something I love, I don't argue. I just offer to show them why I like it. You never know — like me, they might be surprised.",
      p4options: [
        "Our tastes were almost completely opposite.",             // A -> gap 1
        "Each of us was sure our own taste was better.",           // B -> gap 2
        "Instead of arguing, we decided to teach each other.",     // C -> gap 3
        "Our stubborn opinions began to soften.",                  // D -> gap 4
        "We stopped being friends immediately.",                   // E (extra)
        "Layla taught me that taste can always grow.",             // F -> gap 5
        "We had exactly the same taste in everything.",            // G (extra)
        "Neither of us liked any music at all.",                   // H (extra)
      ],
      p4q: { title: "La amiga que cambió mis gustos (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: gustos casi opuestos."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: cada uno creía tener mejor gusto."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: decidieron enseñarse."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: sus opiniones se ablandaron."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: los gustos pueden crecer."),
      ] },
      p5text: "It's normal for friends to have different (1)___. You might love a band that your friend (2)___ stand. That's fine! You don't have to (3)___ about everything. If a friend suggests something new, don't say no straight away — you might (4)___ it more than you expect. Personally, I don't (5)___ trying new things. After all, our (6)___ can always grow if we keep an open mind.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["tastes", "opinions", "minds", "views"], 0, "'different tastes'."),
        mc("Hueco 2", ["can't", "doesn't", "won't", "isn't"], 0, "'can't stand'."),
        mc("Hueco 3", ["agree", "disagree", "prefer", "mind"], 0, "'don't have to agree'."),
        mc("Hueco 4", ["enjoy", "dislike", "mind", "prefer"], 0, "'enjoy it more than you expect'."),
        mc("Hueco 5", ["mind", "fancy", "prefer", "enjoy"], 0, "'I don't mind trying new things'."),
        mc("Hueco 6", ["tastes", "minds", "opinions", "views"], 0, "'our tastes can grow'."),
      ] },
      p6text: "Hi Sam,\nMy friend Layla and I have totally different tastes. She loves jazz, but I can't (1)___ it! I prefer pop. \"I love action films,\" I said, and she replied, \"Well, I (2)___!\" — she hates them! But we've started sharing. She played me jazz, and now I quite (3)___ it. I took her to an action film, and she didn't (4)___ it either! Neither of us has completely changed, but I don't (5)___ trying new things now. It turns out our (6)___ can grow. Do you fancy trying something new too?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["stand"], "'can't stand it'."),
        fb("Hueco 2", ["don't"], "'Well, I don't!' (desacuerdo)."),
        fb("Hueco 3", ["enjoy", "like"], "'I quite enjoy it'."),
        fb("Hueco 4", ["mind"], "'she didn't mind it'."),
        fb("Hueco 5", ["mind"], "'I don't mind trying new things'."),
        fb("Hueco 6", ["tastes"], "'our tastes can grow'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te cuenta sus gustos (música, películas, comida). Responde a su email (~100 palabras):\n· di en qué coincidís y en qué no (usa So do I / Neither do I),\n· cuenta tus gustos,\n· propón un plan que os guste a los dos.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it good to have friends with different tastes?' con tu opinión.\n· RELATO: empieza con: 'My best friend and I couldn't have been more different.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: I love this band. Man: So do I! Two. Man: I can't stand horror films. Woman: Neither can I. Three. Woman: Do you fancy pizza tonight? Man: Yes, good idea. Four. Man: I don't really like jazz. Woman: Oh, I do! Five. Man: I'm keen on hiking. Woman: So am I, we should go together. Six. Woman: I don't mind where we go. Man: Me neither, you choose.", [
      mc("1. Does the man like the band?", ["No.", "Yes, so does he.", "He's unsure."], 1, "'So do I!'"),
      mc("2. Does the woman like horror films?", ["Yes.", "No, neither can she.", "Sometimes."], 1, "'Neither can I'."),
      mc("3. What will they eat?", ["Pasta.", "Pizza.", "Nothing."], 1, "'fancy pizza… good idea'."),
      mc("4. Does the woman like jazz?", ["No, like the man.", "Yes, she disagrees with him.", "She's unsure."], 1, "'Oh, I do!' (desacuerdo)."),
      mc("5. Do they both like hiking?", ["No.", "Yes, so does she.", "Only the man."], 1, "'So am I'."),
      mc("6. Who will choose where to go?", ["The woman.", "Neither minds, so the woman chooses.", "Nobody."], 1, "'Me neither, you choose'."),
    ]),

    ...speakingParts("los gustos y las preferencias", { p1: "qué música, películas y comida te gustan y cuáles no soportas", p2: "una foto de personas disfrutando de una afición o un plan", p3: "elegir un plan que os guste a los dos usando acuerdos (so do I)", p4: "los gustos, por qué son distintos y si es bueno tener amigos diferentes a ti" }),

    SUMMARY("Resumen del Día 42", [
      "Acuerdo afirmativo: So + auxiliar + sujeto (So do I). Negativo: Neither/Nor + auxiliar + sujeto (Neither do I).",
      "Informal: Me too / Me neither. Desacuerdo: Oh, I don't / I am!",
      "Vocabulario de gustos. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 43", "Reacciona a 5 frases con So do I / Neither do I. Repasa las flashcards. Mañana: énfasis con so/such...that e intensificadores."),
  ],
};

// ───────────────────────── DÍA 43 ─────────────────────────
const DAY43 = {
  title: "Día 43 — Énfasis: so/such…that e intensificadores · Experiencias",
  description: "so + adjetivo + that / such (a) + sustantivo + that; intensificadores (really, absolutely, quite, a bit). Vocabulario de experiencias. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Enfatizar con so/such...that y graduar adjetivos con intensificadores.",
    summary: "Énfasis so/such; experiencias; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'so a good film'.", "'such expensive' (sin sustantivo).", "'absolutely good' (→ great)."],
    reviewPrompts: ["¿'so' o 'such' con un adjetivo solo?", "¿'absolutely' va con adjetivos normales o extremos?"],
  },
  items: [
    TEXT("🔁 Repaso: acuerdo. Hoy el ÉNFASIS con so/such...that y los INTENSIFICADORES para graduar adjetivos. Vocabulario: EXPERIENCIAS."),
    GRAMMAR("Énfasis: so/such…that e intensificadores", `SO + adjetivo/adverbio (+ that + consecuencia): It was so cold that we stayed in.
SUCH + (a/an) + (adjetivo) + sustantivo (+ that): It was such a good film that I watched it twice. They were such kind people.
· so + adjetivo SOLO: so tired, so expensive. · such + SUSTANTIVO: such a mess, such nice weather.
INTENSIFICADORES (graduar):
· Adjetivos NORMALES (gradables): very / really / quite / a bit + adjetivo: very tired, quite good, a bit cold.
· Adjetivos EXTREMOS (no gradables): absolutely / completely + adjetivo: absolutely amazing, completely exhausted. (❌ very amazing)
· amazing = very good; freezing = very cold; enormous = very big; tiny = very small.`),
    WARN("Errores típicos del hispanohablante", "· ❌ so a good film → ✅ such a good film.\n· ❌ such expensive (sin sustantivo) → ✅ so expensive.\n· ❌ very amazing → ✅ absolutely amazing.\n· ❌ absolutely good → ✅ really/very good (o absolutely great)."),
    grammarEx("Gramática — so/such e intensificadores", "Completa o elige.", [
      fb("It was ___ cold that we stayed inside. (so/such)", ["so"], "so + adjetivo."),
      fb("It was ___ a good film that I saw it twice. (so/such)", ["such"], "such + a + adj + sustantivo."),
      fb("They were ___ kind people! (so/such)", ["such"], "such + sustantivo (plural)."),
      mc("Choose:", ["The view was absolutely amazing.", "The view was very amazing.", "The view was so amazing a."], 0, "extremo → absolutely."),
      mc("Choose:", ["I'm a bit tired.", "I'm a bit exhausted.", "I'm absolutely tired."], 0, "gradable → a bit tired."),
      fb("The weather was ___ nice that we had a picnic. (so/such)", ["so"], "so + adjetivo."),
      mc("Choose:", ["It was completely freezing.", "It was very freezing.", "It was quite freezing."], 0, "extremo → completely."),
    ]),
    GRAMMAR("Vocabulario del día — Experiencias", "Léxico de experiencias y reacciones (B1)."),
    deck("B1 S9D43 — Experiencias", [
      ["amazing", "increíble / asombroso", "The concert was amazing.", "adjetivo", "əˈmeɪzɪŋ"],
      ["awful", "horrible / espantoso", "The food was awful.", "adjetivo", "ˈɔːfl"],
      ["unforgettable", "inolvidable", "It was an unforgettable trip.", "adjetivo", "ˌʌnfəˈɡetəbl"],
      ["disappointing", "decepcionante", "The film was disappointing.", "adjetivo", "ˌdɪsəˈpɔɪntɪŋ"],
      ["exciting", "emocionante", "It was an exciting match.", "adjetivo", "ɪkˈsaɪtɪŋ"],
      ["boring", "aburrido/a", "The lecture was boring.", "adjetivo", "ˈbɔːrɪŋ"],
      ["scary", "que da miedo", "The ride was a bit scary.", "adjetivo", "ˈskeəri"],
      ["impressive", "impresionante", "The building is very impressive.", "adjetivo", "ɪmˈpresɪv"],
      ["worth it", "que vale la pena", "The wait was worth it.", "colocación", "ˈwɜːθ ɪt"],
      ["once-in-a-lifetime", "único en la vida", "It was a once-in-a-lifetime experience.", "adjetivo", "ˌwʌns ɪn ə ˈlaɪftaɪm"],
    ]),
    vocabEx("Vocabulario — Experiencias", "Elige la opción correcta.", [
      mc("Something so good you'll never forget it is ___.", ["unforgettable", "boring", "awful"], 0, "unforgettable."),
      mc("Something that fails to meet your hopes is ___.", ["disappointing", "amazing", "exciting"], 0, "disappointing."),
      mc("Something extremely bad is ___.", ["awful", "impressive", "exciting"], 0, "awful."),
      mc("Something that makes you feel fear is ___.", ["scary", "boring", "worth it"], 0, "scary."),
      mc("If an experience is worth the effort, it's ___.", ["worth it", "boring", "awful"], 0, "worth it."),
      mc("Something that strongly impresses you is ___.", ["impressive", "boring", "disappointing"], 0, "impressive."),
    ]),

    ...readingParts({
      p1: { title: "Experiencias y avisos", items: [
        mc("Review: 'It was such an amazing show that I cried!'", ["The show was wonderful.", "It was boring.", "They left early."], 0, "'such an amazing show'."),
        mc("Note: 'The queue was so long that we gave up.'", ["They left because of the queue.", "No queue.", "They waited happily."], 0, "'so long that we gave up'."),
        mc("Text: 'Honestly, the film was really disappointing.'", ["They didn't enjoy the film.", "They loved it.", "No opinion."], 0, "'really disappointing'."),
        mc("Comment: 'The view was absolutely breathtaking.'", ["The view was stunning.", "It was dull.", "No view."], 0, "'absolutely breathtaking'."),
        mc("Review: 'Expensive, but completely worth it.'", ["It was worth the money.", "A waste.", "It was free."], 0, "'completely worth it'."),
      ] },
      p2text: "FOUR UNFORGETTABLE EXPERIENCES\n\nA) Skydiving — terrifying and thrilling; you fall through the sky, then float gently down.\nB) A Night at the Opera — such beautiful music that many people are moved to tears.\nC) A Safari — seeing wild animals so close that you'll never forget it.\nD) A Cooking Class Abroad — learning to make local dishes with a real chef.",
      p2q: { title: "Emparejar personas y experiencias", items: [
        mc("Nadia wants a terrifying, thrilling adventure.", ["A", "B", "C", "D"], 0, "Skydiving."),
        mc("Ben loves classical music.", ["A", "B", "C", "D"], 1, "A Night at the Opera."),
        mc("Sara dreams of seeing wild animals up close.", ["A", "B", "C", "D"], 2, "A Safari."),
        mc("Leo wants to learn to cook while travelling.", ["A", "B", "C", "D"], 3, "A Cooking Class Abroad."),
        mc("An experience that can move people to tears.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE BEST WORST HOLIDAY OF MY LIFE\n\nWhen people ask me about my favourite holiday, I always tell them about the trip where absolutely everything went wrong. It sounds strange, but that disastrous week was so full of surprises that it became completely unforgettable.\n\nIt started badly. Our flight was delayed for eight hours, and when we finally arrived, the hotel had lost our booking. The room we eventually got was so small that we could barely open our suitcases, and it rained for the first three days. On paper, it was awful. And yet, something wonderful happened. Because our plans kept falling apart, we were forced to be spontaneous. When the rain trapped us indoors, we ended up in a tiny local café, where the owner, a warm and funny man, taught us to play a local card game. When a tour was cancelled, we explored the back streets on our own and discovered the most amazing little restaurant, hidden away where no tourist would ever find it.\n\nBy the end, we had laughed more, met more interesting people and had more genuine adventures than on any 'perfect' holiday. I've thought about why this was ever since. I think it's because when everything goes to plan, we simply tick off the sights and go home. But when things go wrong, we have to be present, resourceful and open to whatever comes next. The lesson has stayed with me: sometimes the best experiences are the ones you never planned, and a little bit of disaster can be the beginning of something magical.",
      p3q: { title: "Las mejores peores vacaciones (texto largo)", items: [
        mc("Why was the holiday unforgettable?", ["Everything was perfect.", "It was so full of surprises.", "It was boring."], 1, "'so full of surprises that it became completely unforgettable'."),
        mc("What was the hotel room like?", ["Huge.", "So small they could barely open their suitcases.", "Perfect."], 1, "'so small that we could barely open our suitcases'."),
        mc("What did the café owner do?", ["Ignored them.", "Taught them a local card game.", "Charged too much."], 1, "'taught us to play a local card game'."),
        mc("What did they find when a tour was cancelled?", ["Nothing.", "An amazing hidden restaurant.", "A museum."], 1, "'the most amazing little restaurant, hidden away'."),
        mc("What is the writer's lesson?", ["Plan everything.", "The best experiences are the ones you never planned.", "Never travel."], 1, "'the best experiences are the ones you never planned'."),
      ] },
      p4text: "THE CONCERT I ALMOST MISSED\n\nI had waited months to see my favourite band, and the night had finally arrived. (1)___ I was so excited that I could hardly eat all day.\n\nThen, an hour before the concert, everything went wrong. (2)___ The trains were cancelled because of a storm, and I had no way of getting to the stadium. I sat on my bed, close to tears. It seemed like such a cruel piece of bad luck that I almost gave up completely. (3)___ But then my neighbour, hearing what had happened, offered to drive me.\n\nThe journey was terrifying — the rain was so heavy that we could barely see the road. (4)___ We arrived just as the band walked on stage. When the first song began, I forgot all about the stress of getting there. It was absolutely magical, one of the best nights of my life. (5)___ I've never forgotten the kindness of a neighbour I had barely spoken to before.",
      p4options: [
        "I had dreamed about this evening for so long.",           // A -> gap 1
        "A huge storm had hit the whole region.",                  // B -> gap 2
        "It felt like the end of all my hopes.",                   // C -> gap 3
        "But somehow, we made it just in time.",                   // D -> gap 4
        "I decided to stay at home and forget the concert.",       // E (extra)
        "That night taught me how kind strangers can be.",         // F -> gap 5
        "I had never actually liked the band.",                    // G (extra)
        "The concert was cancelled and never happened.",           // H (extra)
      ],
      p4q: { title: "El concierto que casi me pierdo (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: llevaba mucho soñando con esa noche."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: una gran tormenta golpeó la región."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: parecía el fin de sus esperanzas."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: llegaron justo a tiempo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le enseñó lo amables que son los desconocidos."),
      ] },
      p5text: "Some experiences are (1)___ good that you never forget them. Last summer, I went to a concert that was absolutely (2)___ — the best night of my life! The atmosphere was (3)___ exciting that I danced for hours. Of course, not every experience is great; last week I saw a film that was really (4)___, and I nearly fell asleep. But even when things go wrong, they can become (5)___ stories. In my opinion, a trip full of surprises is often more (6)___ it than a perfect one.",
      p5q: { title: "Huecos con opciones (énfasis/vocabulario)", items: [
        mc("Hueco 1", ["so", "such", "very", "too"], 0, "'so good that'."),
        mc("Hueco 2", ["amazing", "good", "nice", "fine"], 0, "'absolutely amazing'."),
        mc("Hueco 3", ["so", "such", "very", "too"], 0, "'so exciting that'."),
        mc("Hueco 4", ["disappointing", "amazing", "exciting", "impressive"], 0, "'really disappointing'."),
        mc("Hueco 5", ["great", "boring", "awful", "sad"], 0, "'great stories'."),
        mc("Hueco 6", ["worth", "worthy", "value", "worthwhile"], 0, "'worth it'."),
      ] },
      p6text: "Hi Sam,\nI had (1)___ an amazing weekend! I went to a concert and it was (2)___ good that I didn't want it to end. The atmosphere was absolutely (3)___! Getting there was hard, though — there was (4)___ a big storm that the trains were cancelled. Luckily my neighbour drove me. The rain was (5)___ heavy that we could barely see! But it was completely (6)___ it. It was one of the best nights of my life. Have you been to any good concerts lately?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["such"], "'such an amazing weekend'."),
        fb("Hueco 2", ["so"], "'so good that'."),
        fb("Hueco 3", ["amazing", "incredible", "magical"], "'absolutely amazing'."),
        fb("Hueco 4", ["such"], "'such a big storm that'."),
        fb("Hueco 5", ["so"], "'so heavy that'."),
        fb("Hueco 6", ["worth"], "'completely worth it'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por una experiencia inolvidable que tuviste. Responde a su email (~100 palabras):\n· cuenta qué fue y por qué fue especial (usa so/such...that),\n· describe cómo te sentiste,\n· pregúntale por su mejor experiencia.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Are the best experiences the ones we plan or the ones that surprise us?' con tu opinión.\n· RELATO: empieza con: 'It was the best worst holiday of my life.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre una experiencia de aventura y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear information about an adventure activity centre. Welcome to Cloud Nine Adventures. Our most popular activity is skydiving, which lasts about three hours in total. You must be at least eighteen years old to take part. The price is one hundred and twenty euros, which includes all your equipment and a video of your jump. We're open every day except Monday. It's an absolutely unforgettable experience, and most people say it's completely worth it. Please arrive thirty minutes early and wear comfortable clothes.", [
      fb("The most popular activity is ___.", ["skydiving"], "'most popular activity is skydiving'."),
      fb("It lasts about ___ hours in total.", ["three", "3"], "'about three hours'."),
      fb("You must be at least ___ years old.", ["eighteen", "18"], "'at least eighteen years old'."),
      fb("The price is ___ euros.", ["120", "one hundred and twenty"], "'one hundred and twenty euros'."),
      fb("They are open every day except ___.", ["Monday"], "'except Monday'."),
    ]),

    ...speakingParts("las experiencias inolvidables", { p1: "una experiencia inolvidable que tuviste y cómo te sentiste", p2: "una foto de una experiencia emocionante (un concierto, una aventura, un viaje)", p3: "elegir juntos una experiencia especial para celebrar el fin de curso", p4: "las experiencias, si merecen la pena las aventuras arriesgadas y qué recuerdos duran" }),

    SUMMARY("Resumen del Día 43", [
      "so + adjetivo (+ that); such + (a) + sustantivo (+ that).",
      "Gradables: very/quite/a bit. Extremos: absolutely/completely (amazing, freezing).",
      "Vocabulario de experiencias. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 44", "Escribe 4 frases con so/such...that. Repasa las flashcards. Mañana: los conectores del discurso (although, however, despite, so that)."),
  ],
};

// ───────────────────────── DÍA 44 ─────────────────────────
const DAY44 = {
  title: "Día 44 — Conectores del discurso · Argumentar",
  description: "although / even though, however, despite / in spite of, because of, so that, in order to. Vocabulario de argumentación. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Enlazar ideas con contraste, causa, resultado y propósito.",
    summary: "Conectores del discurso; argumentar; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'although' + sustantivo.", "'despite of'.", "'because' vs 'because of'."],
    reviewPrompts: ["¿'although' + frase o + sustantivo?", "¿'despite' + qué? ¿'because of' + qué?"],
  },
  items: [
    TEXT("🔁 Repaso: énfasis. Hoy los CONECTORES del discurso: para argumentar y enlazar ideas con contraste, causa, resultado y propósito. Vocabulario: ARGUMENTAR."),
    GRAMMAR("Conectores del discurso", `CONTRASTE:
· although / even though / though + FRASE (sujeto + verbo): Although it was raining, we went out.
· however (con coma, entre frases): It was raining. However, we went out.
· despite / in spite of + SUSTANTIVO o -ing (¡NO frase!): Despite the rain, / Despite being tired, …
CAUSA:
· because + FRASE: We stayed in because it was cold.
· because of / due to + SUSTANTIVO: We stayed in because of the cold.
RESULTADO: so + FRASE: It was cold, so we stayed in.
PROPÓSITO: to / in order to + infinitivo; so that + FRASE: I left early to catch the train / so that I could catch the train.
⚠️ despite OF ❌ → despite / in spite OF ✅. although + frase; despite + sustantivo.`),
    WARN("Errores típicos del hispanohablante", "· ❌ despite of the rain → ✅ despite the rain / in spite of the rain.\n· ❌ although the rain → ✅ although it rained / despite the rain.\n· ❌ because the cold → ✅ because of the cold / because it was cold.\n· ❌ for to catch → ✅ to catch / in order to catch."),
    grammarEx("Gramática — Conectores", "Completa o elige.", [
      fb("___ it was raining, we went for a walk. (aunque + frase)", ["Although", "Even though", "Though"], "although + frase."),
      fb("___ the rain, we went for a walk. (a pesar de + sustantivo)", ["Despite", "In spite of"], "despite + sustantivo."),
      mc("Choose:", ["Despite of the cost, we went.", "Despite the cost, we went.", "Despite that the cost, we went."], 1, "despite + sustantivo (sin 'of')."),
      fb("We stayed in ___ ___ the cold. (a causa de + sustantivo)", ["because of"], "because of + sustantivo."),
      fb("It was late, ___ we went home. (resultado)", ["so"], "so + resultado."),
      mc("Choose (purpose):", ["I left early for to catch the bus.", "I left early to catch the bus.", "I left early for catch the bus."], 1, "to + infinitivo (propósito)."),
      fb("I saved money ___ ___ ___ I could travel. (para que)", ["so that"], "so that + frase."),
    ]),
    GRAMMAR("Vocabulario del día — Argumentar", "Léxico de argumentación (B1)."),
    deck("B1 S9D44 — Argumentar", [
      ["advantage", "ventaja", "One advantage is the low cost.", "sustantivo", "ədˈvɑːntɪdʒ"],
      ["disadvantage", "desventaja", "The main disadvantage is time.", "sustantivo", "ˌdɪsədˈvɑːntɪdʒ"],
      ["on the other hand", "por otro lado", "On the other hand, it's expensive.", "expresión", "ɒn ðɪ ˈʌðə hænd"],
      ["for example", "por ejemplo", "For example, buses are cheap.", "expresión", "fɔːr ɪɡˈzɑːmpl"],
      ["in addition", "además", "In addition, it saves time.", "expresión", "ɪn əˈdɪʃn"],
      ["therefore", "por lo tanto", "It's cheaper; therefore, I chose it.", "adverbio", "ˈðeəfɔː"],
      ["furthermore", "es más / además", "Furthermore, it's better for you.", "adverbio", "ˈfɜːðəmɔː"],
      ["conclusion", "conclusión", "In conclusion, I agree.", "sustantivo", "kənˈkluːʒn"],
      ["argument", "argumento", "That's a strong argument.", "sustantivo", "ˈɑːɡjumənt"],
      ["overall", "en general / en conjunto", "Overall, it was a success.", "adverbio", "ˌəʊvərˈɔːl"],
    ]),
    vocabEx("Vocabulario — Argumentar", "Elige la opción correcta.", [
      mc("A good point in favour of something is an ___.", ["advantage", "disadvantage", "argument"], 0, "advantage."),
      mc("A phrase to introduce the opposite side is 'on the ___'.", ["other hand", "example", "conclusion"], 0, "other hand."),
      mc("To add more information you can say '___'.", ["in addition", "on the other hand", "for example"], 0, "in addition."),
      mc("A formal way to say 'so/for this reason' is ___.", ["therefore", "for example", "overall"], 0, "therefore."),
      mc("The final part of an argument is the ___.", ["conclusion", "advantage", "example"], 0, "conclusion."),
      mc("Considering everything together, you say ___.", ["overall", "for example", "therefore"], 0, "overall."),
    ]),

    ...readingParts({
      p1: { title: "Argumentos y avisos", items: [
        mc("Note: 'Although it's expensive, it's worth it.'", ["It's worth it despite the cost.", "It's cheap.", "It's not worth it."], 0, "'Although it's expensive, it's worth it'."),
        mc("Sign: 'Closed due to bad weather.'", ["Closed because of the weather.", "Open.", "No reason."], 0, "'due to bad weather'."),
        mc("Text: 'We left early to avoid the traffic.'", ["Leaving early avoided traffic.", "They arrived late.", "No traffic."], 0, "'to avoid the traffic'."),
        mc("Poster: 'Cycling is cheap. Furthermore, it's healthy.'", ["Two points in favour of cycling.", "Cycling is bad.", "No cycling."], 0, "'cheap. Furthermore, it's healthy'."),
        mc("Review: 'Overall, a great product despite the price.'", ["Good overall, even though pricey.", "A bad product.", "It's free."], 0, "'great… despite the price'."),
      ] },
      p2text: "FOUR DEBATE TOPICS FOR STUDENTS\n\nA) Should homework be banned? — Consider the advantages and disadvantages of studying at home.\nB) Are cities better than the countryside? — Weigh up convenience against peace and nature.\nC) Should we all be vegetarian? — Explore the arguments about health and the environment.\nD) Is social media good for young people? — Discuss the benefits and dangers of being online.",
      p2q: { title: "Emparejar personas y temas", items: [
        mc("Nadia wants to debate whether schoolwork at home helps.", ["A", "B", "C", "D"], 0, "Should homework be banned?"),
        mc("Ben is interested in city versus country life.", ["A", "B", "C", "D"], 1, "Are cities better than the countryside?"),
        mc("Sara cares about food, health and the planet.", ["A", "B", "C", "D"], 2, "Should we all be vegetarian?"),
        mc("Leo wants to discuss the effects of being online.", ["A", "B", "C", "D"], 3, "Is social media good for young people?"),
        mc("A topic about the benefits and dangers of the internet.", ["A", "B", "C", "D"], 3, "D."),
      ] },
      p3text: "SHOULD STUDENTS HAVE A PART-TIME JOB?\n\nMany teenagers dream of having a part-time job, mainly for the money and the independence it brings. But is working while you study really a good idea? Like most questions, it has two sides, and the honest answer depends on getting the balance right.\n\nThere are certainly clear advantages. First and most obviously, a part-time job provides money, which allows young people to buy things for themselves and learn to manage a budget. In addition, work teaches skills that school cannot, such as dealing with customers, being reliable and working in a team. A student who has held down a Saturday job often seems more mature and confident. Furthermore, it can look good on a CV and help young people discover what kind of career they might enjoy.\n\nOn the other hand, there are real disadvantages. The most serious is time. A teenager who spends every weekend working may have no energy left for studying, and their schoolwork can suffer as a result. In addition, they miss out on rest and time with friends, which are important too. Some students become so focused on earning money that they lose sight of their education, which should be the priority at this stage of life. Overall, then, my view is that a part-time job can be an excellent thing, but only in moderation. A few hours a week can teach valuable lessons; too many can do real harm. As with so many things in life, the key is balance.",
      p3q: { title: "¿Deberían los estudiantes tener un trabajo? (texto largo)", items: [
        mc("What is the first advantage mentioned?", ["Free time.", "Money and managing a budget.", "Sleep."], 1, "'provides money… learn to manage a budget'."),
        mc("What skills can work teach that school can't?", ["Maths.", "Dealing with customers, being reliable, teamwork.", "Nothing."], 1, "'dealing with customers, being reliable and working in a team'."),
        mc("What is the most serious disadvantage?", ["Money.", "Time.", "Boredom."], 1, "'The most serious is time'."),
        mc("What can suffer if a teenager works too much?", ["Their job.", "Their schoolwork.", "Their pay."], 1, "'their schoolwork can suffer'."),
        mc("What is the writer's overall view?", ["Never work.", "A part-time job is good, but only in moderation.", "Work full-time."], 1, "'an excellent thing, but only in moderation'."),
      ] },
      p4text: "THE JOB THAT TAUGHT ME EVERYTHING\n\nAt sixteen, against my parents' advice, I took a Saturday job in a busy café. (1)___ They worried that it would harm my studies, but I was determined to earn my own money.\n\nThe first few weeks were exhausting. (2)___ Despite my tiredness, however, I slowly began to enjoy it. I learned to stay calm when the café was full and customers were impatient. I discovered that, although some people can be rude, most are kind if you treat them well. (3)___ In addition, for the first time in my life, I had money that I had earned myself, which felt wonderful.\n\nMy parents had been right to worry about one thing: I did have to work hard to keep up with my schoolwork. (4)___ But I managed it, and the job taught me lessons no classroom ever could. It gave me confidence, responsibility and a real understanding of the value of money. (5)___ Overall, that little Saturday job was one of the best decisions I ever made.",
      p4options: [
        "It was the first real job I had ever had.",               // A -> gap 1
        "My feet ached and I dropped things constantly.",          // B -> gap 2
        "Every day, I felt myself becoming more confident.",       // C -> gap 3
        "I had to organise my time far more carefully.",           // D -> gap 4
        "I quit the job after a single day.",                      // E (extra)
        "That experience shaped the person I became.",             // F -> gap 5
        "I had never wanted to earn any money.",                   // G (extra)
        "The café closed down the following week.",                // H (extra)
      ],
      p4q: { title: "El trabajo que me lo enseñó todo (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: su primer trabajo de verdad."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: le dolían los pies y se le caían cosas."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: se volvía más seguro cada día."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: tuvo que organizar mejor su tiempo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: esa experiencia le formó."),
      ] },
      p5text: "There are strong arguments on both sides of this debate. On one hand, a part-time job has many (1)___: it teaches skills and provides money. (2)___ example, students learn to be reliable. (3)___ addition, it looks good on a CV. On the (4)___ hand, there are disadvantages too. The main one is time: (5)___ students work too much, their studies suffer. (6)___, my view is that a job is a good idea, but only a few hours a week.",
      p5q: { title: "Huecos con opciones (conectores)", items: [
        mc("Hueco 1", ["advantages", "disadvantages", "arguments", "conclusions"], 0, "'many advantages'."),
        mc("Hueco 2", ["For", "In", "On", "By"], 0, "'For example'."),
        mc("Hueco 3", ["In", "For", "On", "By"], 0, "'In addition'."),
        mc("Hueco 4", ["other", "another", "second", "next"], 0, "'On the other hand'."),
        mc("Hueco 5", ["if", "so", "although", "despite"], 0, "'if students work too much'."),
        mc("Hueco 6", ["Overall", "However", "Because", "Despite"], 0, "'Overall, my view is'."),
      ] },
      p6text: "Hi Sam,\nWe're having a class debate about part-time jobs. In my opinion, they're a good idea. (1)___ example, they teach you to be responsible. (2)___ addition, you earn your own money. (3)___ it can be tiring, I think the advantages are greater. (4)___ of course, if you work too much, your studies might suffer. So my (5)___ is that a few hours a week is perfect. (6)___, I think everyone should try one. What do you reckon?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["For"], "'For example'."),
        fb("Hueco 2", ["In"], "'In addition'."),
        fb("Hueco 3", ["Although", "Though"], "'Although it can be tiring'."),
        fb("Hueco 4", ["However"], "'However, of course'."),
        fb("Hueco 5", ["conclusion", "opinion", "view"], "'my conclusion is'."),
        fb("Hueco 6", ["Overall"], "'Overall, I think'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a está pensando en buscar un trabajo a tiempo parcial. Responde a su email (~100 palabras):\n· dale una ventaja y una desventaja (usa conectores),\n· di qué harías tú,\n· pregúntale qué tipo de trabajo le gustaría.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Should students have a part-time job?' con ventajas y desventajas.\n· RELATO: empieza con: 'Against my parents' advice, I took the job.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con una joven que tiene un trabajo a tiempo parcial y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a student, Emma, about her part-time job. Interviewer: Emma, what's your part-time job? Emma: I work in a café on Saturdays. Interviewer: What's the best thing about it? Emma: The money, obviously, but also I've become much more confident. Interviewer: Is it difficult with your studies? Emma: It can be. I have to organise my time carefully so that my schoolwork doesn't suffer. Interviewer: Would you recommend it? Emma: Yes, but only a few hours a week. If you work too much, your grades will drop. Interviewer: What have you learned? Emma: To be reliable, and the real value of money.", [
      mc("What is Emma's part-time job?", ["In a shop.", "In a café on Saturdays.", "Babysitting."], 1, "'I work in a café on Saturdays'."),
      mc("What's the best thing about it?", ["Only money.", "Money and becoming more confident.", "Free food."], 1, "'The money… also I've become much more confident'."),
      mc("How does she stop it harming her studies?", ["She doesn't study.", "She organises her time carefully.", "She works more."], 1, "'organise my time carefully so that my schoolwork doesn't suffer'."),
      mc("What does she recommend?", ["Working full-time.", "Only a few hours a week.", "Not working."], 1, "'only a few hours a week'."),
      mc("What has she learned?", ["Nothing.", "To be reliable and the value of money.", "To spend a lot."], 1, "'To be reliable, and the real value of money'."),
    ]),

    ...speakingParts("el trabajo y los estudios", { p1: "si te gustaría tener un trabajo a tiempo parcial y por qué", p2: "una foto de un/a joven trabajando (en una tienda, café o repartiendo)", p3: "decidir juntos si un/a estudiante debería trabajar los fines de semana", p4: "el trabajo de los estudiantes, sus ventajas y desventajas y el equilibrio con los estudios" }),

    SUMMARY("Resumen del Día 44", [
      "Contraste: although/even though + frase; despite/in spite of + sustantivo; however (entre frases).",
      "Causa: because + frase / because of + sustantivo. Resultado: so. Propósito: to / so that.",
      "Vocabulario de argumentar. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 45", "Escribe un mini-párrafo de opinión con 4 conectores distintos. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 45 ─────────────────────────
const DAY45 = {
  title: "Día 45 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de question tags, acuerdo, énfasis y conectores. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 9.",
  pedagogy: {
    objective: "Consolidar las herramientas para opinar, matizar y argumentar.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 10."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 9 del B1. Consolidas question tags, acuerdo (so/neither do I), énfasis (so/such) y los conectores del discurso. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 9", `1) Question tags: afirmativa → tag negativo (isn't it?); negativa → tag positivo (are they?).
2) Acuerdo: So + aux + sujeto / Neither + aux + sujeto. Respuestas cortas.
3) Énfasis: so + adjetivo (+ that); such + (a) sustantivo (+ that); intensificadores.
4) Conectores: although/despite (contraste), because/because of (causa), so (resultado), to/so that (propósito).`),
    grammarEx("Repaso mixto de gramática — Semana 9", "Completa o elige.", [
      fb("It's cold today, ___ ___?", ["isn't it"], "afirmativa → tag negativo."),
      fb("\"I love this song.\" → \"___ ___ I.\" (yo también)", ["So do"], "So do I."),
      fb("\"I don't like tea.\" → \"___ ___ I.\" (yo tampoco)", ["Neither do", "Nor do"], "Neither do I."),
      fb("It was ___ a good film that I saw it twice. (so/such)", ["such"], "such + a + adj + sustantivo."),
      fb("It was ___ cold that we stayed in. (so/such)", ["so"], "so + adjetivo."),
      fb("___ the rain, we went out. (a pesar de + sustantivo)", ["Despite", "In spite of"], "despite + sustantivo."),
      fb("___ it was raining, we went out. (aunque + frase)", ["Although", "Even though", "Though"], "although + frase."),
      fb("I left early ___ ___ ___ I could catch the bus. (para que)", ["so that"], "so that + frase."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 9", "Repasa los mazos (opinar, gustos, experiencias, argumentar)."),
    vocabEx("Repaso de vocabulario — Semana 9", "Elige la opción correcta.", [
      mc("To have the same opinion as someone:", ["agree", "disagree", "convince"], 0, "agree."),
      mc("To really dislike something:", ["can't stand", "be keen on", "fancy"], 0, "can't stand."),
      mc("Something so good you'll never forget it:", ["unforgettable", "boring", "awful"], 0, "unforgettable."),
      mc("A good point in favour of something:", ["advantage", "disadvantage", "argument"], 0, "advantage."),
      mc("To persuade someone you're right:", ["convince", "disagree", "reckon"], 0, "convince."),
      mc("An informal way to say 'would like':", ["fancy", "dislike", "mind"], 0, "fancy."),
      mc("Something that fails to meet your hopes:", ["disappointing", "amazing", "exciting"], 0, "disappointing."),
      mc("Considering everything together:", ["overall", "for example", "therefore"], 0, "overall."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Comment: 'Great concert, wasn't it?'", ["They enjoyed the concert.", "It was bad.", "No concert."], 0, "'Great concert, wasn't it?'"),
        mc("Text: 'I love this book!' 'So do I!'", ["Both like the book.", "They disagree.", "Nobody likes it."], 0, "'So do I'."),
        mc("Review: 'It was such a good trip that I cried at the end.'", ["A wonderful trip.", "A boring trip.", "No trip."], 0, "'such a good trip'."),
        mc("Sign: 'Closed due to bad weather.'", ["Closed because of weather.", "Open.", "No reason."], 0, "'due to bad weather'."),
        mc("Note: 'Although it's expensive, it's worth it.'", ["Worth it despite the price.", "It's cheap.", "Not worth it."], 0, "'Although it's expensive, it's worth it'."),
      ] },
      p2text: "FOUR OPINION COLUMNS\n\nA) You Decide — presents both sides of a big issue and lets readers make up their own minds.\nB) Strong Words — bold, passionate arguments from writers who aren't afraid to disagree.\nC) Small Joys — gentle articles about the simple pleasures that make life worth living.\nD) The Big Debate — readers vote on a controversial question and share their reasons.",
      p2q: { title: "Emparejar personas y columnas", items: [
        mc("Nadia likes to see both sides before deciding.", ["A", "B", "C", "D"], 0, "You Decide."),
        mc("Ben enjoys passionate, opinionated writing.", ["A", "B", "C", "D"], 1, "Strong Words."),
        mc("Sara loves reading about life's simple pleasures.", ["A", "B", "C", "D"], 2, "Small Joys."),
        mc("Leo likes voting and sharing his reasons.", ["A", "B", "C", "D"], 3, "The Big Debate."),
        mc("A column that presents both sides of an issue.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "IN PRAISE OF CHANGING YOUR MIND\n\nWe live in a world that seems to admire people who never change their minds. A politician who alters their position is accused of weakness, and online, admitting you were wrong can feel like a public defeat. But I want to argue for something unfashionable: the enormous value of being willing to change your mind.\n\nConsider how we actually learn anything. As children, we believe all sorts of things that later turn out to be false. Growing up is really just the long process of changing our minds as we discover new information. This doesn't stop when we become adults, or at least it shouldn't. The scientist who refuses to accept new evidence isn't being strong; they're simply being stubborn. The truly intelligent person holds their opinions firmly enough to act on them, but loosely enough to change them when the facts change. As one famous thinker supposedly said, 'When the facts change, I change my mind. What do you do?'\n\nOf course, this doesn't mean we should have no firm beliefs at all, changing our views with every passing breeze. That would be just as foolish. The skill lies in knowing the difference between a good reason to change and mere pressure from others. But overall, I believe we would all be wiser, and a great deal kinder, if we treated changing our minds not as a shameful defeat, but as what it truly is: a sign that we are still learning, still growing, and still paying attention to the world around us.",
      p3q: { title: "En defensa de cambiar de opinión (texto largo)", items: [
        mc("What does the world seem to admire?", ["Flexible people.", "People who never change their minds.", "Quiet people."], 1, "'admire people who never change their minds'."),
        mc("What is growing up, really?", ["Getting taller.", "The process of changing our minds with new information.", "Getting a job."], 1, "'changing our minds as we discover new information'."),
        mc("What is a scientist who refuses new evidence being?", ["Strong.", "Stubborn.", "Clever."], 1, "'they're simply being stubborn'."),
        mc("How should the intelligent person hold their opinions?", ["Never firmly.", "Firmly enough to act, loosely enough to change.", "Always loosely."], 1, "'firmly enough to act on them, but loosely enough to change them'."),
        mc("How does the writer say we should treat changing our minds?", ["As a defeat.", "As a sign we're still learning.", "As weakness."], 1, "'a sign that we are still learning'."),
      ] },
      p4text: "THE OPINION I WAS AFRAID TO SHARE\n\nFor years, I kept quiet in group discussions, even when I disagreed. (1)___ I was so afraid of looking stupid that I simply nodded along with whatever the loudest person said.\n\nEverything changed at university, in a seminar about the environment. (2)___ Everyone in the room seemed to agree on a particular point, but something about it didn't feel right to me. My heart was pounding, but I forced myself to raise my hand. (3)___ In a shaky voice, I explained why I saw things differently.\n\nTo my astonishment, the room didn't laugh. (4)___ In fact, several people said they had been thinking the same thing but hadn't dared to say it. Our teacher smiled and said that a good discussion needs different voices. That day, I learned a lesson worth more than any grade. (5)___ Now, although I'm still nervous sometimes, I always share my honest opinion, because I know that a quiet voice can still say something worth hearing.",
      p4options: [
        "I hated any kind of disagreement.",                        // A -> gap 1
        "For once, I decided I couldn't stay silent.",             // B -> gap 2
        "It was the bravest thing I had ever done.",               // C -> gap 3
        "People actually listened to what I had to say.",          // D -> gap 4
        "I never spoke in public again.",                          // E (extra)
        "Finding my voice changed everything for me.",             // F -> gap 5
        "I had always loved being the centre of attention.",       // G (extra)
        "The seminar was cancelled at the last minute.",           // H (extra)
      ],
      p4q: { title: "La opinión que temía compartir (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: odiaba cualquier desacuerdo."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: decidió no quedarse callada."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: lo más valiente que había hecho."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: la gente la escuchó."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: encontrar su voz lo cambió todo."),
      ] },
      p5text: "It's healthy to share your opinions, (1)___ it? Many people stay quiet because they're afraid of disagreement. But (2)___ you might feel nervous, your voice matters. If you have a good (3)___, don't be afraid to make it. And if someone (4)___ you with better reasons, changing your mind isn't weakness — it's a sign you're still learning. (5)___, I believe a good discussion needs different voices. (6)___ example, some of the best ideas come from people who were once too shy to speak.",
      p5q: { title: "Huecos con opciones (question tags/conectores)", items: [
        mc("Hueco 1", ["isn't", "doesn't", "won't", "hasn't"], 0, "'it's healthy, isn't it?'"),
        mc("Hueco 2", ["although", "despite", "because", "so"], 0, "'although you might feel nervous'."),
        mc("Hueco 3", ["argument", "advantage", "conclusion", "opinion"], 0, "'a good argument' (o point)."),
        mc("Hueco 4", ["convinces", "agrees", "disagrees", "reckons"], 0, "'convinces you with better reasons'."),
        mc("Hueco 5", ["Overall", "However", "Despite", "Because"], 0, "'Overall, I believe'."),
        mc("Hueco 6", ["For", "In", "On", "By"], 0, "'For example'."),
      ] },
      p6text: "Hi Sam,\nI did something brave today! In class, everyone agreed on one point, but I disagreed, (1)___ I decided to speak up. (2)___ I was really nervous, I raised my hand and gave my opinion. To my surprise, people listened! (3)___ example, two others said they agreed with me. Our teacher said a good discussion needs different voices, (4)___ she? (5)___ it was scary, it was completely worth it. (6)___, I've learned that my voice matters. You should always share your opinion too!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["so"], "'I disagreed, so I decided to speak up'."),
        fb("Hueco 2", ["Although", "Though"], "'Although I was really nervous'."),
        fb("Hueco 3", ["For"], "'For example'."),
        fb("Hueco 4", ["didn't"], "'a good discussion needs different voices, didn't she?' (she said…)"),
        fb("Hueco 5", ["Although", "Though"], "'Although it was scary'."),
        fb("Hueco 6", ["Overall"], "'Overall, I've learned'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a nunca se atreve a dar su opinión en grupo. Responde a su email (~100 palabras):\n· anímale a compartir sus ideas,\n· cuenta una vez que tú te atreviste a hablar,\n· dale un consejo para tener más confianza.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it good to change your mind?' con tu opinión y razones.\n· RELATO: empieza con: 'For years, I had been too afraid to share my opinion.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: It's a beautiful day, isn't it? Man: Yes, absolutely gorgeous. Two. Man: I love this restaurant. Woman: So do I, the food is amazing. Three. Woman: I can't stand long meetings. Man: Neither can I. Four. Man: Was the film good? Woman: Honestly, it was really disappointing. Five. Man: Why did you leave early? Woman: To avoid the traffic. Six. Woman: Do you agree with the new rule? Man: Although I see the point, I don't really agree.", [
      mc("1. What does the man think of the day?", ["Cold.", "Absolutely gorgeous.", "Average."], 1, "'absolutely gorgeous'."),
      mc("2. Does the woman like the restaurant?", ["No.", "Yes, so does she.", "It's okay."], 1, "'So do I, the food is amazing'."),
      mc("3. Does the man like long meetings?", ["Yes.", "No, neither can he.", "Sometimes."], 1, "'Neither can I'."),
      mc("4. Was the film good?", ["Yes.", "No, really disappointing.", "Amazing."], 1, "'really disappointing'."),
      mc("5. Why did the woman leave early?", ["She was tired.", "To avoid the traffic.", "It was boring."], 1, "'To avoid the traffic'."),
      mc("6. Does the man agree with the new rule?", ["Yes, completely.", "Although he sees the point, he doesn't really agree.", "He loves it."], 1, "'Although I see the point, I don't really agree'."),
    ]),

    ...speakingParts("las opiniones, los gustos y las experiencias", { p1: "sobre qué temas opinas, qué te gusta y una experiencia inolvidable", p2: "una foto de personas conversando, disfrutando o debatiendo", p3: "poneros de acuerdo sobre un tema polémico mostrando acuerdo y desacuerdo", p4: "las opiniones, cambiar de idea, los gustos distintos y las experiencias que nos marcan" }),

    SUMMARY("Resumen de la Semana 9 (B1)", [
      "Dominas las question tags, el acuerdo (so/neither do I), el énfasis (so/such) y los conectores del discurso.",
      "Ya tienes las herramientas clave para el Writing y el Speaking del B1.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: repaso general de tiempos verbales y práctica intensiva de examen (recta final).",
    ]),
    INFO("Mini-simulacro de la Semana 9", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 10."),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Opiniones, acuerdo y matices",
  description: "Question tags, acuerdo (so/neither do I), énfasis (so/such...that) y conectores del discurso. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
