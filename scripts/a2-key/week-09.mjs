/**
 * A2 Key · Semana 9 — "Definir y describir con precisión".
 * Gramática: oraciones de relativo (who/which/that/where/whose), pronombres
 * indefinidos (something/anywhere/no one), orden de adjetivos y artículos.
 * Vocabulario: materiales y formas, el restaurante, la tienda, el trabajo.
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

const DAY41 = {
  title: "Día 41 — Oraciones de relativo (who/which/that) · El trabajo y los oficios",
  description: "Oraciones de relativo con who, which y that. Vocabulario: oficios y lugares de trabajo. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Definir personas y cosas con who/which/that.",
    summary: "who/which/that; oficios; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'who' para cosas.", "'which' para personas.", "doble sujeto ('the man who he')."],
    reviewPrompts: ["¿who o which para una persona?", "¿'that' sirve para personas y cosas?"],
  },
  items: [
    TEXT("🔁 Semana 9. Hoy aprendes a DEFINIR personas y cosas con oraciones de relativo (who/which/that). Vocabulario: OFICIOS y lugares de trabajo."),
    GRAMMAR("Oraciones de relativo: who / which / that", `Sirven para dar información sobre un sustantivo (definirlo):
· WHO → para PERSONAS: The man who lives next door is a doctor.
· WHICH → para COSAS/animales: The book which I bought is great.
· THAT → para PERSONAS y COSAS (más informal): The film that we saw was funny.

⚠️ No se repite el sujeto: ❌ The man who he lives next door → ✅ The man who lives next door.

Estas frases DEFINEN (dicen de qué persona/cosa hablamos), así que no llevan comas.`),
    WARN("Errores típicos del hispanohablante", "· ❌ The woman which works here → ✅ The woman who/that works here.\n· ❌ The car who I bought → ✅ The car which/that I bought.\n· ❌ The man who he lives here → ✅ The man who lives here (sin 'he').\n· 'that' vale para ambos."),
    grammarEx("Gramática — who / which / that", "Completa con who, which o that.", [
      fb("A doctor is a person ___ helps sick people.", ["who", "that"], "persona → who/that."),
      fb("A kitchen is a room ___ you cook in.", ["which", "that"], "cosa → which/that."),
      fb("The woman ___ lives next door is a teacher.", ["who", "that"], "persona → who/that."),
      mc("Choose:", ["The book who I read.", "The book which I read.", "The book what I read."], 1, "cosa → which."),
      fb("A dentist is someone ___ looks after your teeth.", ["who", "that"], "persona → who/that."),
      mc("Choose (no double subject):", ["The man who he works here.", "The man who works here.", "The man works who here."], 1, "sin 'he'."),
      fb("An umbrella is a thing ___ you use in the rain.", ["which", "that"], "cosa → which/that."),
    ]),
    GRAMMAR("Vocabulario del día — Oficios", "Profesiones y sus lugares de trabajo."),
    deck("A2 Key S9D41 — Oficios", [
      ["nurse", "enfermero/a", "The nurse works at the hospital.", "sustantivo", "nɜːs"],
      ["engineer", "ingeniero/a", "She's an engineer.", "sustantivo", "ˌendʒɪˈnɪə"],
      ["waiter", "camarero", "The waiter brought the menu.", "sustantivo", "ˈweɪtə"],
      ["mechanic", "mecánico/a", "The mechanic fixed my car.", "sustantivo", "məˈkænɪk"],
      ["chef", "cocinero/a (chef)", "The chef made a great meal.", "sustantivo", "ʃef"],
      ["firefighter", "bombero/a", "The firefighter was very brave.", "sustantivo", "ˈfaɪəfaɪtə"],
      ["hairdresser", "peluquero/a", "The hairdresser cut my hair.", "sustantivo", "ˈheədresə"],
      ["lawyer", "abogado/a", "She's a good lawyer.", "sustantivo", "ˈlɔːjə"],
      ["farmer", "agricultor/a", "The farmer grows vegetables.", "sustantivo", "ˈfɑːmə"],
      ["scientist", "científico/a", "The scientist did an experiment.", "sustantivo", "ˈsaɪəntɪst"],
    ]),
    vocabEx("Vocabulario — Oficios", "Elige la opción correcta.", [
      mc("A person who looks after sick people is a ___.", ["nurse", "waiter", "farmer"], 0, "nurse."),
      mc("A person who cooks in a restaurant is a ___.", ["chef", "lawyer", "mechanic"], 0, "chef."),
      mc("A person who fixes cars is a ___.", ["mechanic", "nurse", "waiter"], 0, "mechanic."),
      mc("A person who cuts hair is a ___.", ["hairdresser", "firefighter", "engineer"], 0, "hairdresser."),
      mc("A person who grows food on a farm is a ___.", ["farmer", "lawyer", "scientist"], 0, "farmer."),
      mc("A person who helps you with the law is a ___.", ["lawyer", "waiter", "chef"], 0, "lawyer."),
    ]),

    READING_HEAD,
    READING_P1("El trabajo y avisos", [
      mc("Job ad: 'Wanted: a nurse who can work nights.'", ["They need a nurse for night shifts.", "No nurses.", "Day work only."], 0, "'a nurse who can work nights'."),
      mc("Sign: 'The person who left a bag, please collect it.'", ["Someone should collect their bag.", "No bags.", "Bag for sale."], 0, "'The person who left a bag'."),
      mc("Notice: 'Cars which are not moved will be towed.'", ["Move your car or it's towed.", "Cars are safe.", "Free parking."], 0, "'Cars which are not moved will be towed'."),
      mc("Ad: 'Looking for a chef who loves Italian food.'", ["A chef job, Italian food.", "No chef.", "Waiter job."], 0, "'a chef who loves Italian food'."),
      mc("Text: 'The mechanic who fixed my car was great!'", ["Praise for the mechanic.", "The car is broken.", "No mechanic."], 0, "'The mechanic who fixed my car was great'."),
      mc("Sign: 'This is the door which staff use.'", ["A staff door.", "A public door.", "No door."], 0, "'the door which staff use'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y trabajos", "THREE JOB DESCRIPTIONS\n\nA) A job for someone who loves helping people and doesn't mind working at night — in a hospital.\n\nB) A job for a person who is good with their hands and enjoys fixing engines — in a garage.\n\nC) A job for someone who is creative and loves food — in a busy restaurant kitchen.", "Empareja cada persona con el trabajo ideal (A/B/C).", [
      mc("Ana wants to help people and can work nights.", ["A", "B", "C"], 0, "A: hospital."),
      mc("Leo is good with his hands and likes engines.", ["A", "B", "C"], 1, "B: garage."),
      mc("Sara is creative and loves cooking.", ["A", "B", "C"], 2, "C: kitchen."),
      mc("Someone who would be a good nurse.", ["A", "B", "C"], 0, "A."),
      mc("Someone who would be a good mechanic.", ["A", "B", "C"], 1, "B."),
      mc("Someone who would be a good chef.", ["A", "B", "C"], 2, "C."),
      mc("A person who doesn't mind working at night.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "THE PERSON I ADMIRE MOST\n\nThe person who I admire most is my aunt, Clara. She's a doctor who works in a small hospital in the mountains. It's a job which is very hard, but she loves it, because she helps people who really need her.\n\nWhen I was younger, I broke my arm while I was playing football. My aunt was the person who looked after me. She's someone who is always calm, even in difficult situations. She told me a story which made me laugh, so I forgot about the pain!\n\nClara says that being a doctor isn't just about medicine; it's about kindness. She's the reason I want to study medicine too. One day, I hope I'll be a doctor who helps people, just like the aunt who I love and admire so much.", "Lee el texto y responde (A/B/C).", [
      mc("Who does the writer admire most?", ["Their mother.", "Their aunt Clara.", "Their teacher."], 1, "'my aunt, Clara'."),
      mc("What is Clara's job?", ["A nurse.", "A doctor.", "A teacher."], 1, "'a doctor who works in a small hospital'."),
      mc("What happened to the writer when they were younger?", ["They broke their arm.", "They got ill.", "They got lost."], 0, "'I broke my arm'."),
      mc("What is Clara always like?", ["Nervous.", "Calm.", "Angry."], 1, "'always calm'."),
      mc("What does the writer want to study?", ["Law.", "Medicine.", "Engineering."], 1, "'I want to study medicine too'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "The person (1)___ I admire most is my aunt. She's a (2)___ who works in a mountain hospital. It's a job (3)___ is very hard, but she loves helping people. When I broke my arm, she was the person (4)___ looked after me. She's someone who is always (5)___. She's the reason I want to study (6)___ too.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["who", "which", "where"], 0, "persona → who."),
      mc("Hueco 2", ["doctor", "waiter", "farmer"], 0, "'a doctor'."),
      mc("Hueco 3", ["which", "who", "where"], 0, "cosa/trabajo → which."),
      mc("Hueco 4", ["who", "which", "where"], 0, "persona → who."),
      mc("Hueco 5", ["calm", "angry", "nervous"], 0, "'always calm'."),
      mc("Hueco 6", ["medicine", "law", "art"], 0, "'study medicine'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Dana,\nYou asked about the person I admire most. It's my aunt, (1)___ is a doctor. She works in a small hospital (2)___ the mountains. It's a job (3)___ is very hard, but she loves helping people. When I broke my arm, she was the person (4)___ looked after me. She's always calm. She's the reason (5)___ I want to study medicine. One day I hope I'll be a doctor (6)___ helps people, like her!\nLove,\nSky", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["who"], "persona → who."),
      fb("Hueco 2", ["in"], "'in the mountains'."),
      fb("Hueco 3", ["which", "that"], "cosa → which/that."),
      fb("Hueco 4", ["who", "that"], "persona → who/that."),
      fb("Hueco 5", ["why", "that"], "'the reason why'."),
      fb("Hueco 6", ["who", "that"], "persona → who/that."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Una persona que admiras", "Cuéntale a tu amigo/a inglés/a sobre una persona que admiras. Escríbele un email (25 palabras o más) con:\n· quién es y qué hace,\n· por qué la admiras,\n· usa 'who' o 'that' al menos una vez.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un niño se cae y se hace daño en el parque.\n2) Una enfermera (o médico) lo atiende.\n3) El niño se recupera y le da las gracias.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: What does your sister do? Man: She's a nurse who works in a big hospital. Two. Man: Who fixed your car? Woman: A mechanic that my brother knows. Three. Woman: What's the best restaurant here? Man: The one that has the Italian chef. Four. Man: Who's your favourite teacher? Woman: The one who teaches science — she's so kind. Five. Woman: Where did you buy that jacket? Man: In the shop which is next to the bank.", [
      mc("1. What is the man's sister's job?", ["A doctor.", "A nurse.", "A teacher."], 1, "'She's a nurse'."),
      mc("2. Who fixed the woman's car?", ["Her brother.", "A mechanic her brother knows.", "Nobody."], 1, "'A mechanic that my brother knows'."),
      mc("3. Which restaurant is the best?", ["The one with the Italian chef.", "The one by the bank.", "The cheap one."], 0, "'the one that has the Italian chef'."),
      mc("4. Who is the woman's favourite teacher?", ["The maths teacher.", "The science teacher.", "The English teacher."], 1, "'The one who teaches science'."),
      mc("5. Where did the man buy the jacket?", ["Next to the bank.", "In the city centre.", "Online."], 0, "'the shop which is next to the bank'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (trabajo)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre el trabajo — qué trabajo te gustaría, qué trabajos hay en tu familia, describe a alguien de tu trabajo o clase", "describir personas y trabajos con oraciones de relativo", "a person who, a job which, my … is a, I'd like to be"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (trabajos)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre trabajos que ayudan a la gente o trabajos creativos; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I'd prefer, I like jobs that, because, help people, creative"),

    SUMMARY("Resumen del Día 41", [
      "who (personas), which (cosas), that (ambos) para definir.",
      "No se repite el sujeto (the man who lives, no 'who he lives').",
      "Vocabulario de oficios. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 42", "Define 3 oficios con 'A … is a person who…'. Repasa las flashcards. Mañana: where / whose para lugares y posesión."),
  ],
};

const DAY42 = {
  title: "Día 42 — Relativos: where / whose · Materiales y objetos",
  description: "Oraciones de relativo con where (lugares) y whose (posesión). Vocabulario: materiales y objetos. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Definir lugares con 'where' y posesión con 'whose'.",
    summary: "where/whose; materiales; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'where' + preposición doble.", "'whose' vs 'who's'.", "'which' para lugares definidos."],
    reviewPrompts: ["¿'where' o 'which' para 'the place ___ I live'?", "¿'whose' o 'who's'?"],
  },
  items: [
    TEXT("🔁 Repaso: who/which/that. Hoy 'where' (para lugares) y 'whose' (posesión). Vocabulario: MATERIALES y objetos, útil para las definiciones del examen."),
    GRAMMAR("Relativos: where / whose", `WHERE → para LUGARES (= in/at which):
· This is the house where I was born. · The café where we met is closed.

WHOSE → para POSESIÓN (de quién es algo):
· That's the girl whose brother is a footballer. · A widow is a woman whose husband has died.

⚠️ 'whose' (de quién) NO es lo mismo que 'who's' (= who is): Whose bag is this? / Who's coming?`),
    WARN("Errores típicos del hispanohablante", "· ❌ The place which I live → ✅ The place where I live.\n· ❌ The man which his car is red → ✅ The man whose car is red.\n· ❌ Who's book is this? → ✅ Whose book is this?\n· 'whose' = posesión; 'who's' = who is."),
    grammarEx("Gramática — where / whose", "Completa con where o whose.", [
      fb("This is the house ___ I grew up.", ["where"], "lugar → where."),
      fb("That's the boy ___ father is a doctor.", ["whose"], "posesión → whose."),
      fb("The café ___ we first met is now a shop.", ["where"], "lugar → where."),
      mc("Choose:", ["Who's bag is this?", "Whose bag is this?", "Whom bag is this?"], 1, "posesión → Whose."),
      fb("A hospital is a place ___ doctors work.", ["where"], "lugar → where."),
      fb("She's the woman ___ dog won the prize.", ["whose"], "posesión → whose."),
      mc("Choose:", ["The town which I was born.", "The town where I was born.", "The town who I was born."], 1, "lugar → where."),
    ]),
    GRAMMAR("Vocabulario del día — Materiales y objetos", "De qué están hechas las cosas."),
    deck("A2 Key S9D42 — Materiales", [
      ["wood", "madera", "The table is made of wood.", "sustantivo", "wʊd"],
      ["metal", "metal", "It's made of metal.", "sustantivo", "ˈmetl"],
      ["glass", "vidrio / cristal", "The bottle is made of glass.", "sustantivo", "ɡlɑːs"],
      ["plastic", "plástico", "The toy is plastic.", "sustantivo", "ˈplæstɪk"],
      ["leather", "cuero / piel", "I bought a leather bag.", "sustantivo", "ˈleðə"],
      ["paper", "papel", "It's a paper bag.", "sustantivo", "ˈpeɪpə"],
      ["cotton", "algodón", "This T-shirt is cotton.", "sustantivo", "ˈkɒtn"],
      ["round", "redondo", "The table is round.", "adjetivo", "raʊnd"],
      ["square", "cuadrado", "It's a square box.", "adjetivo", "skweə"],
      ["heavy", "pesado", "The box is very heavy.", "adjetivo", "ˈhevi"],
    ]),
    vocabEx("Vocabulario — Materiales", "Elige la opción correcta.", [
      mc("A table can be made of ___.", ["wood", "cotton", "leather"], 0, "wood."),
      mc("Windows are made of ___.", ["glass", "paper", "cotton"], 0, "glass."),
      mc("A T-shirt is often made of ___.", ["cotton", "metal", "wood"], 0, "cotton."),
      mc("The opposite of 'light' is ___.", ["heavy", "round", "square"], 0, "heavy."),
      mc("A ball is ___.", ["round", "square", "heavy"], 0, "round."),
      mc("Shoes and bags are often made of ___.", ["leather", "glass", "paper"], 0, "leather."),
    ]),

    READING_HEAD,
    READING_P1("Objetos y lugares", [
      mc("Museum sign: 'This is the room where the king used to sleep.'", ["The king's bedroom.", "A modern room.", "No room."], 0, "'the room where the king used to sleep'."),
      mc("Label: 'Made of 100% cotton. Wash at 30°.'", ["A cotton item, wash cool.", "Made of metal.", "Do not wash."], 0, "'Made of 100% cotton'."),
      mc("Notice: 'Lost: a leather wallet whose owner should collect it.'", ["A lost leather wallet.", "A found metal box.", "No wallet."], 0, "'a leather wallet whose owner'."),
      mc("Sign: 'Glass recycling — bottles and jars only.'", ["Recycle glass here.", "No recycling.", "Paper only."], 0, "'Glass recycling'."),
      mc("Warning: 'Heavy box — lift with care.'", ["Be careful, it's heavy.", "It's light.", "Don't lift."], 0, "'Heavy box'."),
      mc("Sign: 'The café where you can bring your dog.'", ["Dogs allowed in this café.", "No dogs.", "No café."], 0, "'the café where you can bring your dog'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y tiendas", "THREE SPECIALIST SHOPS\n\nA) The Wood Workshop — handmade wooden furniture and toys. Everything is made by local craftspeople.\n\nB) Leather & Co — bags, belts and shoes, all made of real leather. High quality, not cheap.\n\nC) Green Bottle — glass bottles, jars and cups, perfect for people who want to avoid plastic.", "Empareja cada persona con la tienda ideal (A/B/C).", [
      mc("Someone who wants a handmade wooden toy.", ["A", "B", "C"], 0, "Wood Workshop."),
      mc("A person who wants a real leather bag.", ["A", "B", "C"], 1, "Leather & Co."),
      mc("Someone who wants to avoid plastic and buy glass.", ["A", "B", "C"], 2, "Green Bottle."),
      mc("A person who likes handmade furniture.", ["A", "B", "C"], 0, "A."),
      mc("Someone looking for a quality leather belt.", ["A", "B", "C"], 1, "B."),
      mc("Someone who wants glass jars.", ["A", "B", "C"], 2, "C."),
      mc("A person who supports local craftspeople.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY GRANDFATHER'S WORKSHOP\n\nMy grandfather was a carpenter, which means he made things out of wood. My favourite place in the world was his workshop, where he spent most of his time. It was a small room behind his house, full of tools and the wonderful smell of wood.\n\nHe was a man whose hands could make anything. He made a wooden horse for me when I was little, which I still keep today. Sometimes, he let me help him, and he taught me the name of every tool. 'Always respect the wood,' he used to say. 'It's a material which was once alive.'\n\nMy grandfather isn't with us any more, but his workshop is now a place where I feel close to him. When I go in and smell the wood, I remember the kind man whose lessons I'll never forget.", "Lee el texto y responde (A/B/C).", [
      mc("What was the grandfather's job?", ["A farmer.", "A carpenter.", "A mechanic."], 1, "'a carpenter, which means he made things out of wood'."),
      mc("What was the writer's favourite place?", ["The garden.", "The workshop.", "The kitchen."], 1, "'his workshop, where he spent most of his time'."),
      mc("What did he make for the writer?", ["A metal car.", "A wooden horse.", "A leather bag."], 1, "'a wooden horse'."),
      mc("What did he teach the writer?", ["To cook.", "The name of every tool.", "To drive."], 1, "'the name of every tool'."),
      mc("How does the writer feel in the workshop now?", ["Sad and angry.", "Close to the grandfather.", "Bored."], 1, "'a place where I feel close to him'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My grandfather was a carpenter, (1)___ means he worked with wood. My favourite place was his workshop, (2)___ he spent most of his time. He was a man (3)___ hands could make anything. He made a wooden (4)___ for me. He taught me the name of every (5)___. His workshop is now a place (6)___ I feel close to him.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["which", "who", "where"], 0, "'which means'."),
      mc("Hueco 2", ["where", "which", "who"], 0, "lugar → where."),
      mc("Hueco 3", ["whose", "who", "which"], 0, "posesión → whose."),
      mc("Hueco 4", ["horse", "wood", "tool"], 0, "'a wooden horse'."),
      mc("Hueco 5", ["tool", "material", "leather"], 0, "'name of every tool'."),
      mc("Hueco 6", ["where", "which", "who"], 0, "lugar → where."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wren,\nI want to tell you about my grandfather. He was a carpenter, (1)___ means he worked with wood. My favourite place was his workshop, (2)___ he spent all his time. He was a man (3)___ hands could make anything. He made a wooden horse for me (4)___ I still keep. He isn't with us any more, but his workshop is a place (5)___ I feel close to him. I'll never forget the lessons (6)___ he taught me.\nLove,\nRy", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["which"], "'which means'."),
      fb("Hueco 2", ["where"], "lugar → where."),
      fb("Hueco 3", ["whose"], "posesión → whose."),
      fb("Hueco 4", ["which", "that"], "cosa → which/that."),
      fb("Hueco 5", ["where"], "lugar → where."),
      fb("Hueco 6", ["which", "that"], "cosa → which/that."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un lugar especial", "Cuéntale a tu amigo/a inglés/a de un lugar especial para ti. Escríbele un email (25 palabras o más) con:\n· qué lugar es,\n· por qué es especial,\n· usa 'where' al menos una vez.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un abuelo hace un juguete de madera en su taller.\n2) Se lo regala a su nieto/a.\n3) Años después, la persona guarda el juguete con cariño.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a woman describing a craft workshop she wants to book. Hi, I'd like to book a place at the pottery workshop. My name is Emma Clark. The workshop is on Saturday at two o'clock. I understand it lasts three hours. Could you tell me if I need to bring anything? Also, the price online said thirty pounds — is that correct? You can call me back on oh-seven-seven-double-one, three-four-five. Thanks!", [
      fb("Name: Emma ___", ["Clark"], "'Emma Clark'."),
      fb("Workshop: ___ (type)", ["pottery"], "'the pottery workshop'."),
      fb("Day: ___", ["Saturday"], "'on Saturday'."),
      fb("Starts at ___ o'clock.", ["two", "2"], "'at two o'clock'."),
      fb("Price: ___ pounds", ["thirty", "30"], "'thirty pounds'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (lugares especiales)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre lugares — un lugar donde te sientes bien, el sitio donde naciste, un lugar que te gustaría visitar", "definir lugares con where", "the place where, I was born in, a place where I feel, I'd like to visit"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (objetos)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre objetos hechos a mano o de fábrica, materiales; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, made of, because, quality, handmade"),

    SUMMARY("Resumen del Día 42", [
      "where (lugares) y whose (posesión) para definir.",
      "'whose' (de quién) ≠ 'who's' (who is).",
      "Vocabulario de materiales. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 43", "Define 2 lugares con 'where' y 1 persona con 'whose'. Repasa las flashcards. Mañana: something/anywhere/no one (pronombres indefinidos)."),
  ],
};

const DAY43 = {
  title: "Día 43 — some-/any-/no-/every- · Comer fuera",
  description: "Pronombres indefinidos (something, anywhere, no one, everybody…). Vocabulario: el restaurante. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Usar los compuestos de some/any/no/every (thing/one/where).",
    summary: "something/anyone/nowhere/everybody; el restaurante; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'anything' en afirmativas.", "doble negación ('I don't want nothing').", "verbo plural con 'everyone'."],
    reviewPrompts: ["¿something o anything en negativas?", "¿'everyone is' o 'everyone are'?"],
  },
  items: [
    TEXT("🔁 Repaso: where/whose. Hoy los pronombres indefinidos (something, anyone, nowhere, everybody). Vocabulario: COMER FUERA (el restaurante)."),
    GRAMMAR("some- / any- / no- / every-", `Se combinan con -thing (cosas), -one/-body (personas), -where (lugares):
· SOME- (afirmativas): I have something to tell you. Someone called. Let's go somewhere nice.
· ANY- (negativas y preguntas): I don't have anything. Is there anyone here? I can't find it anywhere.
· NO- (= not any; el verbo va en afirmativo): There's nothing here. No one came. (¡una sola negación!)
· EVERY- (todo/todos): Everything is ready. Everyone is happy. (verbo en SINGULAR).

⚠️ Con 'no-' no se dobla el 'not': ❌ I don't want nothing → ✅ I want nothing / I don't want anything.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I don't have something → ✅ I don't have anything.\n· ❌ I don't know nobody → ✅ I don't know anybody / I know nobody.\n· ❌ Everyone are here → ✅ Everyone is here.\n· some- en afirmativas, any- en negativas/preguntas."),
    grammarEx("Gramática — pronombres indefinidos", "Completa o elige.", [
      fb("I have ___ (algo) to tell you.", ["something"], "afirmativa → something."),
      fb("I don't have ___ (nada) to do.", ["anything"], "negativa → anything."),
      mc("Choose:", ["Is there anyone here?", "Is there someone here?", "Is there no one here?"], 0, "pregunta → anyone."),
      mc("Choose:", ["I don't know nobody.", "I don't know anybody.", "I know nobody body."], 1, "una negación → anybody."),
      fb("___ (todos) is ready to start.", ["Everyone", "Everybody"], "verbo singular → is."),
      fb("I looked ___ (por todas partes) but I couldn't find it.", ["everywhere"], "everywhere."),
      mc("Choose:", ["There's nothing in the box.", "There isn't nothing in the box.", "There's not nothing."], 0, "una negación → nothing."),
    ]),
    GRAMMAR("Vocabulario del día — Comer fuera", "En el restaurante."),
    deck("A2 Key S9D43 — Comer fuera", [
      ["menu", "carta / menú", "Can I see the menu, please?", "sustantivo", "ˈmenjuː"],
      ["book a table", "reservar mesa", "I booked a table for four.", "colocación", "bʊk ə ˈteɪbl"],
      ["order", "pedir", "Are you ready to order?", "verbo", "ˈɔːdə"],
      ["waiter", "camarero", "The waiter took our order.", "sustantivo", "ˈweɪtə"],
      ["tip", "propina", "We left a tip for the waiter.", "sustantivo", "tɪp"],
      ["vegetarian", "vegetariano/a", "Do you have vegetarian dishes?", "adjetivo", "ˌvedʒəˈteəriən"],
      ["fresh", "fresco", "The fish is very fresh.", "adjetivo", "freʃ"],
      ["spicy", "picante", "This curry is too spicy.", "adjetivo", "ˈspaɪsi"],
      ["book", "reservar", "We booked online.", "verbo", "bʊk"],
      ["bill", "cuenta", "Can we have the bill?", "sustantivo", "bɪl"],
    ]),
    vocabEx("Vocabulario — Comer fuera", "Elige la opción correcta.", [
      mc("The list of food in a restaurant is the ___.", ["menu", "tip", "bill"], 0, "menu."),
      mc("Extra money you leave for good service is a ___.", ["tip", "bill", "menu"], 0, "tip."),
      mc("A person who doesn't eat meat is ___.", ["vegetarian", "spicy", "fresh"], 0, "vegetarian."),
      mc("Food with a lot of chilli is ___.", ["spicy", "fresh", "fried"], 0, "spicy."),
      mc("To reserve a table is to ___ it.", ["book", "order", "tip"], 0, "book."),
      mc("You ask for the ___ to pay.", ["bill", "menu", "tip"], 0, "bill."),
    ]),

    READING_HEAD,
    READING_P1("Restaurantes y avisos", [
      mc("Sign: 'Please book a table for large groups.'", ["Reserve if you're a big group.", "No booking.", "No groups."], 0, "'book a table for large groups'."),
      mc("Menu note: 'All dishes can be made vegetarian.'", ["Any dish can be vegetarian.", "No vegetarian food.", "Meat only."], 0, "'made vegetarian'."),
      mc("Notice: 'Service is not included in the bill.'", ["The tip is not in the price.", "Service is free.", "No bill."], 0, "'Service is not included'."),
      mc("Warning: 'This dish is very spicy.'", ["It's hot with chilli.", "It's sweet.", "It's cold."], 0, "'very spicy'."),
      mc("Sign: 'Fresh fish delivered every morning.'", ["The fish is fresh daily.", "Frozen fish.", "No fish."], 0, "'Fresh fish delivered every morning'."),
      mc("Text: 'I've booked a table for 8 pm. See you there!'", ["A reservation for 8 pm.", "No table.", "Cancelled."], 0, "'booked a table for 8 pm'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y restaurantes", "THREE RESTAURANTS\n\nA) Spice House — famous for hot, spicy curries. Not for people who don't like strong flavours.\n\nB) Green Garden — a vegetarian restaurant with fresh, healthy food and a quiet atmosphere.\n\nC) The Family Table — big portions, cheap prices, and a special children's menu.", "Empareja cada persona con el restaurante ideal (A/B/C).", [
      mc("Someone who loves spicy food.", ["A", "B", "C"], 0, "Spice House."),
      mc("A vegetarian who wants fresh, healthy food.", ["A", "B", "C"], 1, "Green Garden."),
      mc("A family with children who want cheap food.", ["A", "B", "C"], 2, "The Family Table."),
      mc("Someone who wants a quiet meal.", ["A", "B", "C"], 1, "B: quiet."),
      mc("A person who loves hot curries.", ["A", "B", "C"], 0, "A."),
      mc("Parents who want a children's menu.", ["A", "B", "C"], 2, "C."),
      mc("Someone who doesn't eat meat.", ["A", "B", "C"], 1, "B."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A SPECIAL DINNER\n\nLast weekend, I took my parents to a new restaurant for their wedding anniversary. I wanted everything to be perfect, so I booked a table a week before. When we arrived, the waiter, who was very friendly, showed us to a lovely table by the window.\n\nThere was something for everyone on the menu. My father, who loves spicy food, ordered a hot curry. My mother is vegetarian, so she chose a fresh vegetable dish. I couldn't decide, because everything looked delicious! In the end, I ordered some fish, which was the best I've ever had.\n\nWe didn't want anything to end the evening. We talked and laughed for hours, and nobody wanted to leave. When the bill came, I paid and left a good tip, because the service was excellent. It was a night none of us will forget.", "Lee el texto y responde (A/B/C).", [
      mc("Why did the writer take their parents to the restaurant?", ["A birthday.", "Their wedding anniversary.", "A job."], 1, "'their wedding anniversary'."),
      mc("Where did they sit?", ["By the door.", "By the window.", "At the bar."], 1, "'a lovely table by the window'."),
      mc("What did the father order?", ["A vegetable dish.", "A hot curry.", "Fish."], 1, "'ordered a hot curry'."),
      mc("What did the writer order?", ["Curry.", "Fish.", "Vegetables."], 1, "'I ordered some fish'."),
      mc("Why did the writer leave a good tip?", ["The food was cheap.", "The service was excellent.", "It was late."], 1, "'the service was excellent'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "For my parents' anniversary, I (1)___ a table at a new restaurant. The (2)___ was very friendly. There was (3)___ for everyone on the menu. My father, who loves (4)___ food, ordered a hot curry. My mother is (5)___, so she had a vegetable dish. When the bill came, I left a good (6)___ because the service was great.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["booked", "cooked", "looked"], 0, "'booked a table'."),
      mc("Hueco 2", ["waiter", "menu", "tip"], 0, "'The waiter was friendly'."),
      mc("Hueco 3", ["something", "anything", "nothing"], 0, "afirmativa → something."),
      mc("Hueco 4", ["spicy", "fresh", "sweet"], 0, "'spicy food… curry'."),
      mc("Hueco 5", ["vegetarian", "spicy", "fresh"], 0, "'vegetarian… vegetable dish'."),
      mc("Hueco 6", ["tip", "bill", "menu"], 0, "'left a good tip'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Bo,\nLast weekend I took my parents to a lovely restaurant for their anniversary. I booked a table (1)___ week before. The waiter, (2)___ was very friendly, gave us a table by the window. There was (3)___ for everyone on the menu. My mum is vegetarian, (4)___ she had a vegetable dish. Everything was delicious! Nobody wanted (5)___ leave. I left a good tip (6)___ the service was excellent.\nLove,\nRen", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["a"], "'a week before'."),
      fb("Hueco 2", ["who", "that"], "persona → who/that."),
      fb("Hueco 3", ["something"], "afirmativa → something."),
      fb("Hueco 4", ["so"], "consecuencia → so."),
      fb("Hueco 5", ["to"], "'wanted to leave'."),
      fb("Hueco 6", ["because"], "causa → because."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Invita a cenar", "Quieres invitar a tu amigo/a inglés/a a un restaurante. Escríbele un email (25 palabras o más) con:\n· a qué restaurante,\n· qué tipo de comida sirven,\n· qué día y hora has reservado.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia reserva mesa en un restaurante.\n2) Piden la comida al camarero.\n3) Disfrutan de una cena estupenda y celebran.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a un cliente y un camarero y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear a customer, Mr Lee, ordering food from a waiter. Waiter: Good evening. Are you ready to order? Mr Lee: Yes. Is there anything vegetarian? Waiter: Of course. The vegetable curry is very popular, but it's quite spicy. Mr Lee: That's fine, I love spicy food. I'll have that. Waiter: And to drink? Mr Lee: Just water, please. Waiter: Would you like a starter? Mr Lee: No, thank you, nothing to start. Waiter: Perfect. Your food will be about fifteen minutes.", [
      mc("What does Mr Lee ask for first?", ["A drink.", "Something vegetarian.", "A dessert."], 1, "'Is there anything vegetarian?'"),
      mc("What is the vegetable curry like?", ["Sweet.", "Quite spicy.", "Cold."], 1, "'it's quite spicy'."),
      mc("Does Mr Lee like spicy food?", ["No.", "Yes.", "A little."], 1, "'I love spicy food'."),
      mc("What does he want to drink?", ["Wine.", "Water.", "Juice."], 1, "'Just water'."),
      mc("Does he want a starter?", ["Yes.", "No, nothing to start.", "A salad."], 1, "'nothing to start'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (comer fuera)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre comer fuera — si te gusta ir a restaurantes, tu comida favorita, la última vez que comiste fuera", "hablar de gustos y experiencias", "I like eating out, my favourite dish, last week I went, I ordered"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (restaurantes)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre comer en casa o en restaurantes, tipos de comida; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, delicious, eating out"),

    SUMMARY("Resumen del Día 43", [
      "some- (afirm.), any- (neg./preg.), no- (una negación), every- (verbo singular).",
      "Compuestos con -thing/-one/-body/-where.",
      "Vocabulario de comer fuera. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 44", "Escribe 3 frases con something/anything/nothing. Repasa las flashcards. Mañana: orden de adjetivos y artículos."),
  ],
};

const DAY44 = {
  title: "Día 44 — Orden de adjetivos y artículos (a/an/the) · La casa y los muebles",
  description: "Orden de los adjetivos antes del sustantivo y uso de a/an/the. Vocabulario: muebles y objetos de casa. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Ordenar varios adjetivos y usar a/an/the correctamente.",
    summary: "Orden de adjetivos; a/an/the; muebles; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["orden invertido ('a red big car').", "'the' con nombres generales.", "'a' + vocal."],
    reviewPrompts: ["¿'a big red car' o 'a red big car'?", "¿'I like the music' o 'I like music' en general?"],
  },
  items: [
    TEXT("🔁 Repaso: pronombres indefinidos. Hoy el ORDEN de los adjetivos y los ARTÍCULOS (a/an/the). Vocabulario: MUEBLES y objetos de casa."),
    GRAMMAR("Orden de adjetivos y artículos", `ORDEN de los adjetivos (opinión → tamaño → edad → color → material):
· a nice big old brown leather bag.
· Lo normal en A2: opinión + tamaño + color: a beautiful small red car.

ARTÍCULOS:
· a/an (uno cualquiera): a book, an apple (an + sonido vocal).
· the (uno concreto, ya sabido): the book on the table.
· SIN artículo para hablar EN GENERAL de algo incontable o plural: I like music. Dogs are friendly. (NO 'I like the music' si es en general).`),
    WARN("Errores típicos del hispanohablante", "· ❌ a red big car → ✅ a big red car (tamaño antes que color).\n· ❌ I like the nature → ✅ I like nature (en general, sin the).\n· ❌ a apple → ✅ an apple.\n· ❌ She is teacher → ✅ She is a teacher."),
    grammarEx("Gramática — adjetivos y artículos", "Ordena o elige.", [
      fb("Order: (car / red / big / a) → ___", ["a big red car"], "tamaño + color."),
      fb("Order: (an / expensive / old / watch) → ___", ["an expensive old watch"], "opinión + edad."),
      mc("Choose (general):", ["I love the music.", "I love music.", "I love a music."], 1, "en general → sin the."),
      mc("Choose:", ["a apple", "an apple", "the a apple"], 1, "sonido vocal → an."),
      mc("Choose:", ["She is teacher.", "She is a teacher.", "She is the teacher."], 1, "profesión → a teacher."),
      fb("Order: (dress / a / beautiful / long) → ___", ["a beautiful long dress"], "opinión + tamaño."),
      mc("Choose (specific):", ["Pass me a salt.", "Pass me the salt.", "Pass me salt on table."], 1, "concreto → the salt."),
    ]),
    GRAMMAR("Vocabulario del día — Muebles y objetos de casa", "Cosas de una casa."),
    deck("A2 Key S9D44 — Muebles y objetos de casa", [
      ["cushion", "cojín", "There's a soft cushion on the sofa.", "sustantivo", "ˈkʊʃn"],
      ["shelf", "estante / balda", "The books are on the shelf.", "sustantivo", "ʃelf"],
      ["curtains", "cortinas", "Close the curtains, please.", "sustantivo", "ˈkɜːtnz"],
      ["carpet", "alfombra / moqueta", "The carpet is soft.", "sustantivo", "ˈkɑːpɪt"],
      ["cupboard", "armario (de cocina)", "The cups are in the cupboard.", "sustantivo", "ˈkʌbəd"],
      ["drawer", "cajón", "The keys are in the drawer.", "sustantivo", "drɔː"],
      ["lamp", "lámpara", "Turn on the lamp.", "sustantivo", "læmp"],
      ["pillow", "almohada", "This pillow is very soft.", "sustantivo", "ˈpɪləʊ"],
      ["blanket", "manta", "I need a warm blanket.", "sustantivo", "ˈblæŋkɪt"],
      ["towel", "toalla", "There are clean towels in the bathroom.", "sustantivo", "ˈtaʊəl"],
    ]),
    vocabEx("Vocabulario — Muebles y objetos", "Elige la opción correcta.", [
      mc("You put books on a ___.", ["shelf", "cushion", "towel"], 0, "shelf."),
      mc("You cover a window with ___.", ["curtains", "drawers", "pillows"], 0, "curtains."),
      mc("You rest your head on a ___ in bed.", ["pillow", "shelf", "lamp"], 0, "pillow."),
      mc("You dry yourself with a ___.", ["towel", "cushion", "curtain"], 0, "towel."),
      mc("You keep cups in a ___.", ["cupboard", "carpet", "lamp"], 0, "cupboard."),
      mc("A soft floor covering is a ___.", ["carpet", "shelf", "drawer"], 0, "carpet."),
    ]),

    READING_HEAD,
    READING_P1("En casa y en la tienda de muebles", [
      mc("Shop sign: 'Beautiful handmade wooden furniture.'", ["Nice handmade wooden items.", "Plastic furniture.", "No furniture."], 0, "'handmade wooden furniture'."),
      mc("Label: 'Soft cotton pillows — machine washable.'", ["Cotton pillows you can wash.", "Do not wash.", "Metal pillows."], 0, "'machine washable'."),
      mc("Notice: 'Please put cushions back on the sofa.'", ["Return the cushions.", "Take the cushions.", "No sofa."], 0, "'put cushions back'."),
      mc("Sign: 'Sale: all lamps half price this week.'", ["Cheap lamps this week.", "No lamps.", "Full price."], 0, "'all lamps half price'."),
      mc("Text: 'The keys are in the top drawer.'", ["Keys are in the drawer.", "No keys.", "Keys are lost."], 0, "'in the top drawer'."),
      mc("Label: 'Warm winter blankets now in stock.'", ["Blankets are available.", "No blankets.", "Summer only."], 0, "'now in stock'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y objetos de casa", "THREE HOME ITEMS ON SALE\n\nA) Reading Lamp — a small, modern lamp, perfect for reading in bed. Warm light.\n\nB) Soft Rug — a large, soft carpet for the living room floor. Makes any room cosy.\n\nC) Storage Shelves — tall wooden shelves for books and boxes. Great for small flats.", "Empareja cada persona con el objeto ideal (A/B/C).", [
      mc("Someone who reads in bed at night.", ["A", "B", "C"], 0, "Reading Lamp."),
      mc("A person who wants a cosy living room floor.", ["A", "B", "C"], 1, "Soft Rug."),
      mc("Someone with lots of books and little space.", ["A", "B", "C"], 2, "Storage Shelves."),
      mc("A person who wants a warm light for reading.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to make a room cosy.", ["A", "B", "C"], 1, "B."),
      mc("A person in a small flat who needs storage.", ["A", "B", "C"], 2, "C."),
      mc("Someone who wants tall wooden shelves.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY NEW ROOM\n\nLast month, I moved into a new flat, and my favourite thing has been decorating my bedroom. When I arrived, the room was empty and a bit cold, but now it feels like home.\n\nFirst, I put a big soft carpet on the floor, which makes the room much warmer. Then I bought some long blue curtains for the window and a small wooden shelf for my favourite books. On the bed, I have a comfortable pillow and a warm blanket which my grandmother made for me.\n\nMy favourite thing is the little lamp on my desk. In the evening, I turn it on, sit on my bed, and read for hours. It's not an expensive room, but everything in it is special to me. I've learned that a home isn't about money; it's about the things you love.", "Lee el texto y responde (A/B/C).", [
      mc("What has the writer enjoyed most?", ["Cooking.", "Decorating the bedroom.", "Meeting neighbours."], 1, "'decorating my bedroom'."),
      mc("What did they put on the floor?", ["A shelf.", "A big soft carpet.", "A lamp."], 1, "'a big soft carpet'."),
      mc("Who made the blanket?", ["The writer.", "The grandmother.", "A friend."], 1, "'my grandmother made for me'."),
      mc("What is the writer's favourite thing?", ["The curtains.", "The little lamp.", "The carpet."], 1, "'My favourite thing is the little lamp'."),
      mc("What has the writer learned?", ["A home is about money.", "A home is about the things you love.", "Rooms should be expensive."], 1, "'a home… is about the things you love'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last month I moved into a new flat and I've enjoyed decorating my bedroom. First I put a big soft (1)___ on the floor. Then I bought long blue (2)___ for the window and a wooden (3)___ for my books. On my bed I have a warm (4)___ which my grandmother made. My favourite thing is the little (5)___ on my desk. It's not an expensive room, but everything is (6)___ to me.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["carpet", "curtain", "shelf"], 0, "'on the floor' → carpet."),
      mc("Hueco 2", ["curtains", "cushions", "towels"], 0, "'for the window' → curtains."),
      mc("Hueco 3", ["shelf", "lamp", "drawer"], 0, "'for my books' → shelf."),
      mc("Hueco 4", ["blanket", "cupboard", "carpet"], 0, "'a warm blanket'."),
      mc("Hueco 5", ["lamp", "shelf", "towel"], 0, "'the little lamp on my desk'."),
      mc("Hueco 6", ["special", "expensive", "empty"], 0, "'special to me'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Fen,\nI love my new bedroom! When I arrived, it was empty and (1)___ bit cold. First, I put a big soft carpet (2)___ the floor. Then I bought some long blue curtains (3)___ the window. On my bed I have a warm blanket (4)___ my grandmother made. My favourite thing is (5)___ little lamp on my desk. It's not expensive, (6)___ everything is special to me!\nLove,\nAsh", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["a"], "'a bit cold'."),
      fb("Hueco 2", ["on"], "'on the floor'."),
      fb("Hueco 3", ["for"], "'curtains for the window'."),
      fb("Hueco 4", ["which", "that"], "cosa → which/that."),
      fb("Hueco 5", ["the"], "'the little lamp'."),
      fb("Hueco 6", ["but"], "contraste → but."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Describe tu habitación", "Cuéntale a tu amigo/a inglés/a cómo es tu habitación. Escríbele un email (25 palabras o más) con:\n· qué muebles y objetos hay,\n· tu cosa favorita,\n· por qué te gusta.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona llega a una habitación vacía y fría.\n2) La decora con alfombra, cortinas y una lámpara.\n3) Se sienta feliz a leer en su nueva habitación acogedora.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas describir su objeto favorito de casa y elige de qué habla cada una.", "This is Part Four. You will hear five people talking about their favourite thing at home. One. My favourite thing is the big soft carpet in my living room; it makes the room so cosy. Two. I love the little lamp on my desk, because I can read in bed at night. Three. My grandmother made me a warm blanket, and I use it every winter. Four. I keep all my books on a tall wooden shelf; I'm very proud of it. Five. The blue curtains in my bedroom are beautiful, and they keep the light out in the morning.", [
      mc("Person 1 is talking about…", ["a carpet", "a lamp", "curtains"], 0, "'the big soft carpet'."),
      mc("Person 2 is talking about…", ["a lamp", "a blanket", "a shelf"], 0, "'the little lamp'."),
      mc("Person 3 is talking about…", ["a blanket", "a carpet", "curtains"], 0, "'a warm blanket'."),
      mc("Person 4 is talking about…", ["a shelf", "a lamp", "a carpet"], 0, "'a tall wooden shelf'."),
      mc("Person 5 is talking about…", ["curtains", "a blanket", "a lamp"], 0, "'The blue curtains'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (tu casa)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre tu casa y habitación — describe tu habitación, tu objeto favorito, qué cambiarías", "describir con adjetivos y artículos", "there is a, my favourite thing, a big soft, I'd like"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (casa)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre una casa moderna o acogedora; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, cosy, comfortable"),

    SUMMARY("Resumen del Día 44", [
      "Orden de adjetivos: opinión + tamaño + edad + color + material.",
      "a/an (uno cualquiera), the (concreto), sin artículo para lo general.",
      "Vocabulario de muebles. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 45", "Escribe 3 frases con dos adjetivos en orden correcto. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY45 = {
  title: "Día 45 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de relativos, pronombres indefinidos y artículos. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 9.",
  pedagogy: {
    objective: "Consolidar las oraciones de relativo y la descripción precisa, y medir el progreso.",
    summary: "Repaso de who/which/that/where/whose, some-/any-/no-, artículos; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 10."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 9. Consolidas las oraciones de relativo y la descripción, y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 9", `1) Relativos: who (personas), which (cosas), that (ambos), where (lugares), whose (posesión).
2) some-/any-/no-/every- + thing/one/body/where.
3) Orden de adjetivos (opinión + tamaño + color…).
4) a/an/the y el uso sin artículo (general).`),
    grammarEx("Repaso mixto de gramática — Semana 9", "Completa o elige.", [
      fb("A nurse is a person ___ helps sick people.", ["who", "that"], "persona → who/that."),
      fb("This is the house ___ I was born.", ["where"], "lugar → where."),
      fb("That's the boy ___ father is a doctor.", ["whose"], "posesión → whose."),
      mc("Choose:", ["I don't have something.", "I don't have anything.", "I don't have nothing."], 1, "negativa → anything."),
      mc("Order:", ["a red big car", "a big red car", "a car big red"], 1, "tamaño + color."),
      fb("A kitchen is a room ___ you cook.", ["where"], "lugar → where."),
      mc("Choose (general):", ["I love the nature.", "I love nature.", "I love a nature."], 1, "general → sin the."),
      fb("___ (todos) is here now.", ["Everyone", "Everybody"], "verbo singular → is."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 9", "Repasa los mazos (oficios, materiales, restaurante, muebles)."),
    vocabEx("Repaso de vocabulario — Semana 9", "Elige la opción correcta.", [
      mc("A person who cooks in a restaurant:", ["chef", "lawyer", "farmer"], 0, "chef."),
      mc("Windows are made of:", ["glass", "cotton", "wood"], 0, "glass."),
      mc("The list of food in a restaurant:", ["menu", "tip", "bill"], 0, "menu."),
      mc("You put books on a:", ["shelf", "cushion", "towel"], 0, "shelf."),
      mc("A person who fixes cars:", ["mechanic", "nurse", "waiter"], 0, "mechanic."),
      mc("Food with a lot of chilli:", ["spicy", "fresh", "sweet"], 0, "spicy."),
      mc("You dry yourself with a:", ["towel", "cushion", "curtain"], 0, "towel."),
      mc("A soft floor covering:", ["carpet", "shelf", "drawer"], 0, "carpet."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'The person who found a phone, please hand it in.'", ["Return the found phone.", "No phone.", "Sell the phone."], 0, "'The person who found a phone'."),
      mc("Notice: 'This is the room where you check in.'", ["Check in here.", "No room.", "Closed."], 0, "'the room where you check in'."),
      mc("Menu: 'Vegetarian options available on request.'", ["Ask for vegetarian food.", "No vegetarian food.", "Meat only."], 0, "'Vegetarian options available'."),
      mc("Label: 'Made of soft cotton — machine washable.'", ["A cotton item you can wash.", "Do not wash.", "Metal item."], 0, "'soft cotton — machine washable'."),
      mc("Sign: 'Nothing on the shelves is for sale.'", ["Items are not for sale.", "Everything is for sale.", "Empty shelves."], 0, "'Nothing… is for sale'."),
      mc("Ad: 'A modern lamp which lights any room.'", ["A lamp for any room.", "No lamp.", "Old lamp."], 0, "'A modern lamp which lights any room'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y regalos", "THREE GIFT IDEAS\n\nA) A handmade wooden clock — perfect for someone who loves traditional, natural things.\n\nB) A soft cotton blanket — ideal for someone who feels the cold and loves being cosy at home.\n\nC) A modern reading lamp — great for someone who loves reading in bed at night.", "Empareja cada persona con el regalo ideal (A/B/C).", [
      mc("Someone who loves natural, traditional objects.", ["A", "B", "C"], 0, "wooden clock."),
      mc("A person who always feels cold at home.", ["A", "B", "C"], 1, "cotton blanket."),
      mc("Someone who reads in bed every night.", ["A", "B", "C"], 2, "reading lamp."),
      mc("A person who likes handmade wooden things.", ["A", "B", "C"], 0, "A."),
      mc("Someone who loves being cosy.", ["A", "B", "C"], 1, "B."),
      mc("A person who wants a modern light.", ["A", "B", "C"], 2, "C."),
      mc("Someone who prefers natural materials.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "THE SHOP ON THE CORNER\n\nThere's a small shop on the corner of my street which I love. It's a place where you can find almost anything — old books, wooden toys, glass bottles, and beautiful things from all over the world. The owner is a kind old man whose family has run the shop for fifty years.\n\nEvery Saturday, I go there just to look around. Last week, I found something amazing: a small metal box which plays music when you open it. The owner told me it belonged to a woman who used to be a famous singer. I didn't have enough money to buy it, but he said, 'Come back when you can. Nobody else will want it as much as you.'\n\nThat shop is special because everything there has a story. In a world where everything is new and made of plastic, it's a place where the past is still alive.", "Lee el texto y responde (A/B/C).", [
      mc("What can you find in the shop?", ["Only new things.", "Almost anything old and beautiful.", "Only books."], 1, "'find almost anything'."),
      mc("Who is the owner?", ["A young woman.", "A kind old man.", "A child."], 1, "'a kind old man'."),
      mc("What did the writer find last week?", ["A book.", "A metal box that plays music.", "A toy."], 1, "'a small metal box which plays music'."),
      mc("Who did the box belong to?", ["The owner.", "A famous singer.", "The writer."], 1, "'a woman who used to be a famous singer'."),
      mc("Why is the shop special?", ["It's cheap.", "Everything has a story.", "It's modern."], 1, "'everything there has a story'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "There's a small shop (1)___ I love. It's a place (2)___ you can find almost anything. The owner is a kind old man (3)___ family has run it for fifty years. Last week I found a metal box (4)___ plays music. It belonged to a woman (5)___ was a famous singer. That shop is special because everything has a (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["which", "who", "where"], 0, "cosa → which."),
      mc("Hueco 2", ["where", "which", "who"], 0, "lugar → where."),
      mc("Hueco 3", ["whose", "who", "which"], 0, "posesión → whose."),
      mc("Hueco 4", ["which", "who", "where"], 0, "cosa → which."),
      mc("Hueco 5", ["who", "which", "whose"], 0, "persona → who."),
      mc("Hueco 6", ["story", "shelf", "price"], 0, "'has a story'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wynn,\nThere's a wonderful little shop on my street (1)___ I love. It's a place (2)___ you can find almost anything old and beautiful. The owner is a kind old man (3)___ family has had the shop for fifty years. Last week I found a metal box (4)___ plays music! It belonged to a woman (5)___ used to be a singer. Everything in that shop has (6)___ story.\nLove,\nMar", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["which", "that"], "cosa → which/that."),
      fb("Hueco 2", ["where"], "lugar → where."),
      fb("Hueco 3", ["whose"], "posesión → whose."),
      fb("Hueco 4", ["which", "that"], "cosa → which/that."),
      fb("Hueco 5", ["who", "that"], "persona → who/that."),
      fb("Hueco 6", ["a"], "'has a story'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un lugar o tienda que te gusta", "Cuéntale a tu amigo/a inglés/a de una tienda o lugar especial. Escríbele un email (25 palabras o más) con:\n· qué es y dónde está,\n· qué puedes encontrar allí,\n· por qué te gusta (usa 'where' o 'which').", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Alguien entra en una tienda antigua llena de objetos.\n2) Encuentra un objeto especial (una caja de música).\n3) El dueño le cuenta la historia del objeto.\nUsa el PASADO y oraciones de relativo si puedes.", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Owen hablar de qué hace cada persona de su familia y empareja cada persona con su oficio (A/B/C…).", "This is Part Five. You will hear Owen talking about the jobs in his family. My mother is a nurse who works at the local hospital. My father is a chef who cooks at a big restaurant. My sister is a lawyer who helps people with problems. My brother is a mechanic who fixes cars. And my aunt is a hairdresser who has her own salon.", [
      mc("Mother", ["a nurse", "a chef", "a lawyer"], 0, "'a nurse'."),
      mc("Father", ["a chef", "a mechanic", "a hairdresser"], 0, "'a chef'."),
      mc("Sister", ["a lawyer", "a nurse", "a chef"], 0, "'a lawyer'."),
      mc("Brother", ["a mechanic", "a chef", "a lawyer"], 0, "'a mechanic'."),
      mc("Aunt", ["a hairdresser", "a nurse", "a mechanic"], 0, "'a hairdresser'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — describe a una persona que admiras, un lugar especial, tu objeto favorito", "usar oraciones de relativo y descripción", "a person who, a place where, a thing which, my favourite"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre objetos nuevos o antiguos, tiendas modernas o tradicionales; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like things that, because, traditional, modern"),

    SUMMARY("Resumen de la Semana 9", [
      "Dominas las oraciones de relativo (who/which/that/where/whose).",
      "Usas los pronombres indefinidos, el orden de adjetivos y los artículos.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: conectores avanzados y repaso general.",
    ]),
    INFO("Mini-simulacro de la Semana 9", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 10."),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Definir y describir con precisión",
  description: "Oraciones de relativo (who/which/that/where/whose), pronombres indefinidos, orden de adjetivos y artículos. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
