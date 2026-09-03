/**
 * A2 Key · Semana 7 — "Condiciones y consecuencias".
 * Gramática: zero conditional, first conditional, when/as soon as/unless,
 * might/could en condicionales. Vocabulario: medio ambiente, internet y redes,
 * problemas cotidianos, normas y avisos. Las 4 destrezas, formato Cambridge.
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

const DAY31 = {
  title: "Día 31 — Zero conditional · El medio ambiente",
  description: "Zero conditional (if + presente, presente) para verdades y normas. Vocabulario: el medio ambiente. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Expresar verdades generales y normas con el zero conditional.",
    summary: "Zero conditional; medio ambiente; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'if' + will en el zero conditional.", "olvidar la -s de 3ª persona.", "coma cuando 'if' va al final."],
    reviewPrompts: ["¿Qué tiempos van en el zero conditional?", "¿Lleva coma 'Ice melts if it gets hot'?"],
  },
  items: [
    TEXT("🔁 Semana 7. Hoy aprendes el ZERO CONDITIONAL — para verdades generales y normas. Vocabulario: el MEDIO AMBIENTE, tema frecuente en el examen."),
    GRAMMAR("Zero conditional (verdades y normas)", `Para cosas que SIEMPRE son verdad (ciencia, reglas, hábitos):
· IF + presente simple, presente simple.
· If you heat ice, it melts. · Plants die if you don't water them.
· If the light is red, you stop.

'if' y 'when' son casi iguales aquí (siempre pasa): When/If it rains, the ground gets wet.

PUNTUACIÓN: si 'if' va DELANTE, se pone coma: If it's cold, I wear a coat.
Si va DETRÁS, sin coma: I wear a coat if it's cold.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If you will heat ice, it melts → ✅ If you heat ice, it melts.\n· ❌ If it rains, the ground get wet → ✅ …gets wet (3ª persona).\n· ❌ Water boils if you will heat it → ✅ …if you heat it.\n· recuerda la coma solo si 'if' va delante."),
    grammarEx("Gramática — Zero conditional", "Completa con el presente correcto.", [
      fb("If you heat ice, it ___ (melt).", ["melts"], "3ª persona → melts."),
      fb("Plants ___ (die) if you don't water them.", ["die"], "plural → die."),
      fb("If the light ___ (be) red, you stop.", ["is"], "'the light is red'."),
      mc("Choose (zero conditional):", ["If you will drop it, it breaks.", "If you drop it, it breaks.", "If you dropping it, it breaks."], 1, "if + presente."),
      fb("Water ___ (boil) if you heat it to 100°.", ["boils"], "verdad → boils."),
      fb("If it ___ (rain), the streets get wet.", ["rains"], "3ª persona → rains."),
      mc("Choose:", ["When you mix blue and yellow, you get green.", "When you will mix blue and yellow, you get green.", "When you mixing blue and yellow, you get green."], 0, "when + presente."),
    ]),
    GRAMMAR("Vocabulario del día — El medio ambiente", "Naturaleza y ecología."),
    deck("A2 Key S7D31 — El medio ambiente", [
      ["environment", "medio ambiente", "We must protect the environment.", "sustantivo", "ɪnˈvaɪrənmənt"],
      ["recycle", "reciclar", "We recycle paper and glass.", "verbo", "ˌriːˈsaɪkl"],
      ["rubbish", "basura", "Put the rubbish in the bin.", "sustantivo", "ˈrʌbɪʃ"],
      ["pollution", "contaminación", "Cars cause a lot of pollution.", "sustantivo", "pəˈluːʃn"],
      ["plastic", "plástico", "We use too much plastic.", "sustantivo", "ˈplæstɪk"],
      ["waste", "malgastar / desperdicio", "Don't waste water.", "verbo/sustantivo", "weɪst"],
      ["save energy", "ahorrar energía", "Switch off lights to save energy.", "colocación", "seɪv ˈenədʒi"],
      ["climate", "clima", "The climate is changing.", "sustantivo", "ˈklaɪmət"],
      ["planet", "planeta", "We must look after our planet.", "sustantivo", "ˈplænɪt"],
      ["bin", "cubo de basura / papelera", "The bin is full.", "sustantivo", "bɪn"],
    ]),
    vocabEx("Vocabulario — El medio ambiente", "Elige la opción correcta.", [
      mc("To use materials again is to ___.", ["recycle", "waste", "pollute"], 0, "recycle."),
      mc("Dirty air from cars is ___.", ["pollution", "recycle", "bin"], 0, "pollution."),
      mc("The nature around us is the ___.", ["environment", "rubbish", "plastic"], 0, "environment."),
      mc("To use too much of something for no reason is to ___ it.", ["waste", "save", "recycle"], 0, "waste."),
      mc("You put your rubbish in the ___.", ["bin", "planet", "climate"], 0, "bin."),
      mc("Turning off lights helps to ___.", ["save energy", "waste water", "pollute"], 0, "save energy."),
    ]),

    READING_HEAD,
    READING_P1("Medio ambiente y avisos", [
      mc("Sign: 'Recycle bottles and cans in the green bin.'", ["Put bottles in the green bin.", "No recycling.", "Bins are full."], 0, "'Recycle… in the green bin'."),
      mc("Notice: 'Switch off lights to save energy.'", ["Turn off lights.", "Leave lights on.", "No lights."], 0, "'Switch off lights'."),
      mc("Poster: 'Bring your own bag — say no to plastic!'", ["Use your own bag, avoid plastic.", "Buy plastic bags.", "No bags."], 0, "'Bring your own bag'."),
      mc("Sign: 'Please do not drop litter in the park.'", ["Don't throw rubbish here.", "Litter is fine.", "Park closed."], 0, "'do not drop litter'."),
      mc("Note: 'Turn off the tap while brushing your teeth.'", ["Save water.", "Waste water.", "No water."], 0, "'Turn off the tap'."),
      mc("Ad: 'Join our beach clean-up this Saturday!'", ["Help clean the beach Saturday.", "No event.", "Beach closed."], 0, "'beach clean-up this Saturday'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y acciones verdes", "THREE GREEN GROUPS\n\nA) Recycling Team — sorts and recycles rubbish in the neighbourhood. Meets Saturday mornings.\n\nB) Tree Planters — plants new trees in parks and forests. Good exercise, outdoors.\n\nC) Energy Savers — teaches families how to use less electricity and water at home.", "Empareja cada persona con el grupo ideal (A/B/C).", [
      mc("Someone who wants to help recycle rubbish.", ["A", "B", "C"], 0, "Recycling Team."),
      mc("A person who loves being outdoors and planting.", ["A", "B", "C"], 1, "Tree Planters."),
      mc("A family who wants to reduce their bills and save energy.", ["A", "B", "C"], 2, "Energy Savers."),
      mc("Someone free on Saturday mornings to sort rubbish.", ["A", "B", "C"], 0, "A: Saturday mornings."),
      mc("A person who enjoys exercise in nature.", ["A", "B", "C"], 1, "B: outdoors."),
      mc("Someone who wants to use less electricity at home.", ["A", "B", "C"], 2, "C."),
      mc("A person who wants to plant trees.", ["A", "B", "C"], 1, "B."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "OUR GREEN SCHOOL\n\nLast year, my school decided to become greener, and it has changed a lot. Now, if you walk around, you see recycling bins everywhere — for paper, plastic and glass. If students drop litter, the teachers ask them to pick it up. It works well: the school is much cleaner now.\n\nWe also try to save energy. If a classroom is empty, the last person switches off the lights. In winter, we wear warm jumpers instead of using too much heating. My favourite project is the school garden. We grow vegetables, and if there are too many, we give them to families in need.\n\nI've learned that small actions make a big difference. If everyone does a little, we can protect the environment together. I'm proud of my green school, and I try to be greener at home too.", "Lee el texto y responde (A/B/C).", [
      mc("What can you see around the school now?", ["Rubbish.", "Recycling bins.", "Cars."], 1, "'recycling bins everywhere'."),
      mc("What happens if students drop litter?", ["Nothing.", "Teachers ask them to pick it up.", "They pay money."], 1, "'the teachers ask them to pick it up'."),
      mc("What do they do if a classroom is empty?", ["Leave the lights on.", "Switch off the lights.", "Close the door."], 1, "'switches off the lights'."),
      mc("What is the writer's favourite project?", ["Recycling.", "The school garden.", "Saving water."], 1, "'My favourite project is the school garden'."),
      mc("What does the writer believe?", ["Only big actions matter.", "Small actions make a big difference.", "Nothing helps."], 1, "'small actions make a big difference'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Our school is greener now. There are (1)___ bins for paper and plastic. If students drop (2)___, they have to pick it up. We save (3)___ by switching off lights in empty rooms. We don't (4)___ water either. My favourite project is the school garden, where we grow (5)___. If everyone does a little, we can protect the (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["recycling", "rubbish", "plastic"], 0, "'recycling bins'."),
      mc("Hueco 2", ["litter", "energy", "climate"], 0, "'drop litter'."),
      mc("Hueco 3", ["energy", "rubbish", "plastic"], 0, "'save energy'."),
      mc("Hueco 4", ["waste", "recycle", "save"], 0, "'don't waste water'."),
      mc("Hueco 5", ["vegetables", "bins", "cars"], 0, "'grow vegetables'."),
      mc("Hueco 6", ["environment", "rubbish", "pollution"], 0, "'protect the environment'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sky,\nMy school has become much greener! Now, (1)___ you drop litter, you have to pick it up. There are recycling bins (2)___ paper and plastic. We save energy (3)___ switching off the lights in empty rooms. My favourite project (4)___ the school garden. If everyone does a (5)___, we can protect the planet. You (6)___ start a green group at your school too!\nLove,\nMar", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["if", "when"], "condición → if/when."),
      fb("Hueco 2", ["for"], "'bins for paper'."),
      fb("Hueco 3", ["by"], "'save energy by switching'."),
      fb("Hueco 4", ["is"], "'is the school garden'."),
      fb("Hueco 5", ["little"], "'does a little'."),
      fb("Hueco 6", ["should", "could", "can", "must"], "sugerencia."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cómo cuidas el medio ambiente", "Tu amigo/a inglés/a quiere saber qué haces por el medio ambiente. Escríbele un email (25 palabras o más) con:\n· qué haces para ayudar (reciclar, ahorrar…),\n· por qué es importante,\n· un consejo para él/ella.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unos jóvenes ven una playa llena de basura.\n2) Recogen la basura con bolsas.\n3) La playa queda limpia y están contentos.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Where do the glass bottles go? Man: In the green bin, over there. Two. Man: Why do you always switch off the lights? Woman: To save energy, of course. Three. Woman: Are you coming to the beach clean-up? Man: Yes, on Saturday morning. Four. Man: What do you do with old paper? Woman: I recycle it. Five. Woman: How do you get to work? Man: I cycle, because it doesn't pollute.", [
      mc("1. Where do the glass bottles go?", ["The green bin.", "The black bin.", "The bag."], 0, "'In the green bin'."),
      mc("2. Why does the woman switch off the lights?", ["To sleep.", "To save energy.", "It's bright."], 1, "'To save energy'."),
      mc("3. When is the beach clean-up?", ["Sunday.", "Saturday morning.", "Friday."], 1, "'on Saturday morning'."),
      mc("4. What does the woman do with old paper?", ["Throws it away.", "Recycles it.", "Burns it."], 1, "'I recycle it'."),
      mc("5. Why does the man cycle to work?", ["It's fast.", "It doesn't pollute.", "It's cheap."], 1, "'it doesn't pollute'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (medio ambiente)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre el medio ambiente — si reciclas, qué haces para ahorrar energía, cómo vas a los sitios", "hablar de hábitos ecológicos", "I recycle, I save, I don't waste, I usually, at home"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (medio ambiente)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre cómo cuidar el planeta; el examinador pregunta qué es más importante hacer y por qué", "dar opiniones y razones", "I think, we should, because, important, the planet"),

    SUMMARY("Resumen del Día 31", [
      "Zero conditional: if/when + presente, presente (verdades y normas).",
      "Coma si 'if' va delante.",
      "Vocabulario del medio ambiente. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 32", "Escribe 3 verdades con el zero conditional (If you…, …). Repasa las flashcards. Mañana: first conditional (planes reales de futuro)."),
  ],
};

const DAY32 = {
  title: "Día 32 — First conditional · Internet y redes sociales",
  description: "First conditional (if + presente, will) para posibilidades reales de futuro. Vocabulario: internet y redes sociales. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Hablar de posibilidades reales de futuro con el first conditional.",
    summary: "First conditional; internet; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'If it will rain'.", "'will' en las dos partes.", "olvidar 'will' en la consecuencia."],
    reviewPrompts: ["¿Qué tiempos van en el first conditional?", "'If it rains, …' ¿qué sigue?"],
  },
  items: [
    TEXT("🔁 Repaso: zero conditional. Hoy el FIRST CONDITIONAL — para posibilidades reales de futuro. Vocabulario: INTERNET y REDES SOCIALES."),
    GRAMMAR("First conditional (posibilidades reales)", `Para cosas que PUEDEN pasar en el futuro (si se cumple la condición):
· IF + presente simple, will + verbo base.
· If it rains, I'll stay at home. · If you study, you'll pass.
· Negativa: If you don't hurry, we'll be late.

⚠️ En la parte del 'if' va PRESENTE, no 'will': ❌ If it will rain → ✅ If it rains.
En la consecuencia va 'will' (o won't).

También se usan may/might/can en la consecuencia: If you ask her, she might say yes.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If it will rain, I'll stay → ✅ If it rains, I'll stay.\n· ❌ If you will study, you'll pass → ✅ If you study, you'll pass.\n· ❌ If I see her, I tell her → ✅ …I'll tell her.\n· recuerda: presente en 'if', will en el resultado."),
    grammarEx("Gramática — First conditional", "Completa con la forma correcta.", [
      fb("If it rains, I ___ (stay) at home.", ["will stay", "'ll stay"], "consecuencia → will."),
      fb("If you ___ (study), you'll pass.", ["study"], "'if' → presente."),
      fb("She'll be angry if you ___ (be) late.", ["are"], "'if' → presente."),
      mc("Choose:", ["If it will rain, we'll cancel.", "If it rains, we'll cancel.", "If it rains, we cancel."], 1, "if + presente, will."),
      fb("If you don't hurry, we ___ (miss) the bus.", ["will miss", "'ll miss"], "consecuencia → will."),
      fb("If you ask her, she ___ (might/help) you.", ["might help"], "might en la consecuencia."),
      mc("Choose:", ["If I see him, I tell him.", "If I see him, I'll tell him.", "If I'll see him, I tell him."], 1, "if presente, will."),
    ]),
    GRAMMAR("Vocabulario del día — Internet y redes sociales", "El mundo digital."),
    deck("A2 Key S7D32 — Internet y redes", [
      ["website", "sitio web", "Check the school website.", "sustantivo", "ˈwebsaɪt"],
      ["post", "publicar / publicación", "She posted a photo online.", "verbo/sustantivo", "pəʊst"],
      ["follow", "seguir (en redes)", "I follow him on social media.", "verbo", "ˈfɒləʊ"],
      ["upload", "subir (un archivo)", "I uploaded the video.", "verbo", "ˌʌpˈləʊd"],
      ["profile", "perfil", "Update your profile picture.", "sustantivo", "ˈprəʊfaɪl"],
      ["comment", "comentario / comentar", "She left a nice comment.", "sustantivo/verbo", "ˈkɒment"],
      ["share", "compartir", "I shared the link with you.", "verbo", "ʃeə"],
      ["account", "cuenta", "I have a new account.", "sustantivo", "əˈkaʊnt"],
      ["online", "en línea", "I'm always online.", "adverbio", "ˌɒnˈlaɪn"],
      ["log in", "iniciar sesión", "Log in with your password.", "phrasal verb", "lɒɡ ˈɪn"],
    ]),
    vocabEx("Vocabulario — Internet y redes", "Elige la opción correcta.", [
      mc("To put a photo on social media is to ___ it.", ["post", "follow", "log in"], 0, "post."),
      mc("To see someone's updates, you ___ them.", ["follow", "upload", "share"], 0, "follow."),
      mc("Your personal page on social media is your ___.", ["profile", "website", "comment"], 0, "profile."),
      mc("To send a file to the internet is to ___ it.", ["upload", "log in", "follow"], 0, "upload."),
      mc("To enter your account, you ___.", ["log in", "post", "share"], 0, "log in."),
      mc("To send something to your friends online is to ___ it.", ["share", "follow", "log in"], 0, "share."),
    ]),

    READING_HEAD,
    READING_P1("Internet y avisos", [
      mc("Website message: 'Log in to see your account.'", ["Sign in to view your account.", "No account.", "Log out."], 0, "'Log in to see your account'."),
      mc("Note: 'If you share your password, your account isn't safe.'", ["Keep your password secret.", "Share your password.", "No password."], 0, "'If you share your password, your account isn't safe'."),
      mc("Alert: 'You have 3 new comments on your post.'", ["Three people commented.", "No comments.", "Post deleted."], 0, "'3 new comments'."),
      mc("Sign: 'Free wifi — ask staff for the password.'", ["Get the wifi password from staff.", "No wifi.", "Wifi costs money."], 0, "'ask staff for the password'."),
      mc("Message: 'Upload finished. Your video is now online.'", ["The video is uploaded.", "Upload failed.", "No video."], 0, "'Upload finished… now online'."),
      mc("Reminder: 'Update your profile picture in settings.'", ["Change your profile picture.", "Delete your account.", "Log out."], 0, "'Update your profile picture'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y apps", "THREE APPS\n\nA) PhotoShare — post and share your best photos, and follow your friends. Very popular with teenagers.\n\nB) StudyHelp — an app for students to organise homework and revise for exams.\n\nC) FitLife — tracks your exercise and helps you get fit, with daily challenges.", "Empareja cada persona con la app ideal (A/B/C).", [
      mc("A teenager who loves posting photos.", ["A", "B", "C"], 0, "PhotoShare."),
      mc("A student who wants to organise homework.", ["A", "B", "C"], 1, "StudyHelp."),
      mc("Someone who wants to get fit.", ["A", "B", "C"], 2, "FitLife."),
      mc("A person who likes following friends online.", ["A", "B", "C"], 0, "A."),
      mc("Someone preparing for exams.", ["A", "B", "C"], 1, "B."),
      mc("A person who likes daily exercise challenges.", ["A", "B", "C"], 2, "C."),
      mc("A teenager who wants to share pictures.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "SOCIAL MEDIA: GOOD AND BAD\n\nI love social media, but I've learned to use it carefully. When I post a photo, I always think first: if I share too much personal information, it isn't safe. My parents told me, 'If you don't know someone, don't follow them.' I think that's good advice.\n\nSocial media can be great. If I want to talk to my cousin in Australia, I just send her a message, and we chat for free. I also follow accounts about my hobbies, and I've learned a lot from them.\n\nBut there are problems too. Sometimes I spend too much time online, and if I read too many comments, I feel tired. So now I have a rule: if it's after nine o'clock, I switch off my phone. If you use social media wisely, it's a wonderful tool. If you don't, it can control your life.", "Lee el texto y responde (A/B/C).", [
      mc("What does the writer think before posting?", ["Nothing.", "If they share too much, it isn't safe.", "How many likes."], 1, "'if I share too much personal information, it isn't safe'."),
      mc("What advice did the parents give?", ["Follow everyone.", "Don't follow people you don't know.", "Post more."], 1, "'if you don't know someone, don't follow them'."),
      mc("How does the writer talk to their cousin in Australia?", ["By phone.", "By sending messages online.", "By letter."], 1, "'I just send her a message'."),
      mc("What is the writer's rule after nine o'clock?", ["Post photos.", "Switch off the phone.", "Read comments."], 1, "'if it's after nine o'clock, I switch off my phone'."),
      mc("What is the writer's opinion of social media?", ["Always bad.", "Good if you use it wisely.", "Boring."], 1, "'If you use social media wisely, it's a wonderful tool'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I use social media carefully. Before I (1)___ a photo, I think about safety. My parents say if I don't know someone, I shouldn't (2)___ them. Social media is great: if I want to talk to my cousin abroad, I just (3)___ her a message. But if I spend too much time (4)___, I feel tired. So I have a (5)___: after nine, I switch off my phone. If you use it (6)___, it's a great tool.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["post", "follow", "log"], 0, "'post a photo'."),
      mc("Hueco 2", ["follow", "share", "upload"], 0, "'shouldn't follow them'."),
      mc("Hueco 3", ["send", "post", "log"], 0, "'send her a message'."),
      mc("Hueco 4", ["online", "profile", "account"], 0, "'time online'."),
      mc("Hueco 5", ["rule", "comment", "profile"], 0, "'I have a rule'."),
      mc("Hueco 6", ["carefully", "careful", "carefuly"], 0, "adverbio → carefully."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Jo,\nI love social media, but I try to use it (1)___. Before I post a photo, I think about safety. My parents say (2)___ I don't know someone, I shouldn't follow them. If I want (3)___ talk to my cousin in Australia, I just send (4)___ a message. But if I spend too (5)___ time online, I feel tired. So after nine o'clock, I switch (6)___ my phone!\nBye,\nSami", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["carefully"], "adverbio de modo."),
      fb("Hueco 2", ["if"], "condición → if."),
      fb("Hueco 3", ["to"], "'want to talk'."),
      fb("Hueco 4", ["her"], "'send her a message'."),
      fb("Hueco 5", ["much"], "'too much time'."),
      fb("Hueco 6", ["off"], "'switch off'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu uso de las redes", "Tu amigo/a inglés/a quiere saber cómo usas las redes sociales. Escríbele un email (25 palabras o más) con:\n· qué red usas más,\n· para qué la usas,\n· un consejo para usarla con seguridad.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un chico pasa horas mirando el móvil, cansado.\n2) Decide dejarlo y salir con amigos.\n3) Se lo pasa genial al aire libre, sin móvil.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a teacher explaining a school project. Hello everyone. For this project, you'll make a video about the environment. You need to work in groups of three. The video must be about five minutes long. When it's ready, upload it to the school website by Friday. Don't forget to add your names. The best video will win a prize of twenty pounds. Good luck!", [
      fb("Make a video about the ___.", ["environment"], "'about the environment'."),
      fb("Work in groups of ___.", ["three", "3"], "'groups of three'."),
      fb("The video must be about ___ minutes.", ["five", "5"], "'about five minutes'."),
      fb("Upload it to the school ___.", ["website"], "'to the school website'."),
      fb("The prize is ___ pounds.", ["twenty", "20"], "'a prize of twenty pounds'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (internet)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre internet — qué redes usas, para qué usas internet, cuánto tiempo pasas online", "hablar de hábitos digitales", "I use, I post, I follow, I spend, every day"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (tecnología)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre las redes sociales, sus ventajas y desventajas; el examinador pregunta qué opinas y por qué", "dar opiniones y razones", "I think, I like, because, useful, too much time"),

    SUMMARY("Resumen del Día 32", [
      "First conditional: if + presente, will + base (posibilidades reales de futuro).",
      "En 'if' va presente, nunca 'will'.",
      "Vocabulario de internet. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 33", "Escribe 3 planes con first conditional (If…, I'll…). Repasa las flashcards. Mañana: when/before/after/as soon as."),
  ],
};

const DAY33 = {
  title: "Día 33 — when / before / after / as soon as · Problemas cotidianos",
  description: "Oraciones de tiempo de futuro (con presente tras when/before/after/as soon as). Vocabulario: problemas cotidianos. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Hablar de secuencias futuras con when/before/after/as soon as + presente.",
    summary: "Time clauses de futuro; problemas cotidianos; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'when I will arrive'.", "'will' tras as soon as.", "orden de before/after."],
    reviewPrompts: ["¿'When I will get home' o 'When I get home'?", "¿Qué tiempo tras 'as soon as' para futuro?"],
  },
  items: [
    TEXT("🔁 Repaso: first conditional. Hoy, oraciones de tiempo de futuro: tras when/before/after/as soon as va PRESENTE (aunque hablemos del futuro). Vocabulario: PROBLEMAS COTIDIANOS."),
    GRAMMAR("Oraciones de tiempo de futuro", `Cuando hablamos del futuro, tras estas palabras va PRESENTE, no 'will':
when, before, after, as soon as, until.
· I'll call you when I arrive. (NO 'when I will arrive')
· As soon as the film finishes, we'll go home.
· I won't leave until you come back.
· Before you go out, close the window.

La parte principal SÍ lleva 'will' (o un imperativo).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I'll call you when I will arrive → ✅ …when I arrive.\n· ❌ As soon as it will stop raining → ✅ As soon as it stops raining.\n· ❌ I'll wait until you will come → ✅ …until you come.\n· recuerda: presente tras when/before/after/as soon as/until (para futuro)."),
    grammarEx("Gramática — Oraciones de tiempo", "Completa con el tiempo correcto.", [
      fb("I'll call you when I ___ (arrive).", ["arrive"], "presente tras 'when'."),
      fb("As soon as the film ___ (finish), we'll go.", ["finishes"], "presente tras 'as soon as'."),
      fb("Before you ___ (leave), turn off the lights.", ["leave"], "presente tras 'before'."),
      mc("Choose:", ["I'll wait until you will come.", "I'll wait until you come.", "I'll wait until you came."], 1, "presente tras until."),
      fb("After I ___ (finish) work, I'll meet you.", ["finish"], "presente tras 'after'."),
      mc("Choose:", ["When I will get home, I'll call.", "When I get home, I'll call.", "When I getting home, I'll call."], 1, "presente tras 'when'."),
      fb("We'll stay here until it ___ (stop) raining.", ["stops"], "presente tras 'until'."),
    ]),
    GRAMMAR("Vocabulario del día — Problemas cotidianos", "Pequeños problemas del día a día."),
    deck("A2 Key S7D33 — Problemas cotidianos", [
      ["break down", "averiarse", "My car broke down.", "phrasal verb", "breɪk ˈdaʊn"],
      ["lost", "perdido", "I got lost in the city.", "adjetivo", "lɒst"],
      ["broken", "roto / estropeado", "The heating is broken.", "adjetivo", "ˈbrəʊkən"],
      ["forget", "olvidar", "I forgot my keys.", "verbo", "fəˈɡet"],
      ["mistake", "error", "I made a mistake.", "sustantivo", "mɪˈsteɪk"],
      ["fix", "arreglar", "Can you fix it?", "verbo", "fɪks"],
      ["queue", "cola (fila)", "There was a long queue.", "sustantivo", "kjuː"],
      ["delay", "retraso", "There was a long delay.", "sustantivo", "dɪˈleɪ"],
      ["complain", "quejarse", "I want to complain about the service.", "verbo", "kəmˈpleɪn"],
      ["solve", "resolver", "We solved the problem.", "verbo", "sɒlv"],
    ]),
    vocabEx("Vocabulario — Problemas cotidianos", "Elige la opción correcta.", [
      mc("If your car stops working, it has ___.", ["broken down", "queued", "solved"], 0, "broken down."),
      mc("To repair something is to ___ it.", ["fix", "forget", "complain"], 0, "fix."),
      mc("A line of people waiting is a ___.", ["queue", "delay", "mistake"], 0, "queue."),
      mc("When a train is late, there's a ___.", ["delay", "queue", "mistake"], 0, "delay."),
      mc("To find an answer to a problem is to ___ it.", ["solve", "forget", "break"], 0, "solve."),
      mc("To say you're not happy about something is to ___.", ["complain", "fix", "queue"], 0, "complain."),
    ]),

    READING_HEAD,
    READING_P1("Problemas y avisos", [
      mc("Sign: 'Lift out of order — engineers coming soon.'", ["The lift is broken.", "The lift works.", "No lift."], 0, "'out of order'."),
      mc("Notice: 'We apologise for the delay to your train.'", ["Sorry the train is late.", "Train on time.", "No train."], 0, "'apologise for the delay'."),
      mc("Text: 'I've lost my phone! Have you seen it?'", ["Asking about a lost phone.", "Found a phone.", "Selling a phone."], 0, "'I've lost my phone'."),
      mc("Sign: 'Please form a queue at the entrance.'", ["Make a line here.", "No queue.", "Closed."], 0, "'form a queue'."),
      mc("Note: 'The heating is broken — please wear a jumper.'", ["No heating, dress warmly.", "Heating works.", "It's hot."], 0, "'The heating is broken'."),
      mc("Message: 'To complain, please speak to the manager.'", ["Talk to the manager to complain.", "No complaints.", "Manager is out."], 0, "'To complain… speak to the manager'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y soluciones", "THREE HELP SERVICES\n\nA) Repair Café — bring broken things (toasters, lamps) and volunteers help you fix them for free.\n\nB) Lost and Found — a place to report and collect lost items like phones, keys and bags.\n\nC) Complaints Desk — talk to staff if you're not happy with a product or service.", "Empareja cada persona con el servicio ideal (A/B/C).", [
      mc("Someone whose lamp is broken and wants to fix it.", ["A", "B", "C"], 0, "Repair Café."),
      mc("A person who lost their keys.", ["A", "B", "C"], 1, "Lost and Found."),
      mc("Someone unhappy about a product.", ["A", "B", "C"], 2, "Complaints Desk."),
      mc("A person who wants free help repairing things.", ["A", "B", "C"], 0, "A: free."),
      mc("Someone who wants to report a lost bag.", ["A", "B", "C"], 1, "B."),
      mc("A person who wants to complain about bad service.", ["A", "B", "C"], 2, "C."),
      mc("Someone with a broken toaster.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A DIFFICULT JOURNEY\n\nLast Friday, I had one of those days when everything goes wrong! I was going to an important interview in another city, so I took the early train. But after twenty minutes, the train stopped: there was a problem with the engine, and we had a long delay.\n\nI started to worry. 'If I'm late, they won't give me the job,' I thought. As soon as the train started again, I called the company to explain. Luckily, the woman was very kind. 'Don't worry,' she said. 'When you arrive, just come straight to the office.'\n\nI finally got there an hour late, but the interview went well. The manager said, 'These things happen. What matters is that you called and stayed calm.' The next week, they offered me the job! I learned that when you have a problem, the best thing is to stay calm and communicate.", "Lee el texto y responde (A/B/C).", [
      mc("Where was the writer going?", ["A holiday.", "An interview.", "A wedding."], 1, "'an important interview'."),
      mc("What was the problem with the train?", ["It was full.", "A problem with the engine.", "Wrong platform."], 1, "'a problem with the engine… delay'."),
      mc("What did the writer do when the train started again?", ["Slept.", "Called the company.", "Complained."], 1, "'I called the company to explain'."),
      mc("How late was the writer?", ["An hour.", "Ten minutes.", "Two hours."], 0, "'an hour late'."),
      mc("What did the writer learn?", ["Never travel by train.", "Stay calm and communicate.", "Always be early."], 1, "'stay calm and communicate'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last Friday everything went wrong! I was going to an interview when my train had a long (1)___. I was worried I'd be late. As soon as the train (2)___ again, I called the company to explain. The woman said, 'When you (3)___, come straight to the office.' I arrived an hour late, but the interview went well. The manager said what mattered was that I stayed (4)___. I didn't (5)___ — I just explained the problem. The next week, they offered me the (6)___!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["delay", "queue", "mistake"], 0, "'a long delay'."),
      mc("Hueco 2", ["started", "will start", "starting"], 0, "'the train started again'."),
      mc("Hueco 3", ["arrive", "will arrive", "arrived"], 0, "presente tras 'when' → arrive."),
      mc("Hueco 4", ["calm", "angry", "lost"], 0, "'stayed calm'."),
      mc("Hueco 5", ["complain", "fix", "solve"], 0, "'didn't complain'."),
      mc("Hueco 6", ["job", "queue", "delay"], 0, "'offered me the job'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Kai,\nWhat a day! I was going to an interview (1)___ my train had a long delay. I was worried I'd be late. As soon (2)___ the train started again, I called to explain. The woman was kind and said, 'When you (3)___, just come to the office.' I arrived an hour late, (4)___ the interview went well! The manager said what mattered was that I stayed (5)___. The next week, they (6)___ me the job!\nCheers,\nRo", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["when"], "'when my train had a delay'."),
      fb("Hueco 2", ["as"], "'as soon as'."),
      fb("Hueco 3", ["arrive"], "presente tras 'when'."),
      fb("Hueco 4", ["but"], "contraste → but."),
      fb("Hueco 5", ["calm"], "'stayed calm'."),
      fb("Hueco 6", ["offered", "gave"], "'offered me the job'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta un problema y cómo lo resolviste", "Tuviste un problema (un retraso, algo roto…) y quieres contárselo a tu amigo/a inglés/a. Escríbele un email (25 palabras o más) con:\n· qué problema tuviste,\n· cómo te sentiste,\n· cómo lo resolviste.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) A una persona se le avería el coche en la carretera.\n2) Llama por teléfono para pedir ayuda.\n3) Un mecánico lo arregla y sigue su viaje.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos personas hablando de un problema y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear a customer, Mrs Green, talking to a shop assistant, Tom, about a problem. Mrs Green: Excuse me, I bought this kettle yesterday, but it doesn't work. Tom: Oh, I'm sorry. What exactly is the problem? Mrs Green: When I switch it on, nothing happens. Tom: Do you have the receipt? Mrs Green: Yes, here it is. Tom: Thank you. Would you like a new one or your money back? Mrs Green: A new one, please, if you have it. Tom: Of course. As soon as I find one in the storeroom, I'll bring it to you. It'll only take a minute.", [
      mc("What did Mrs Green buy?", ["A toaster.", "A kettle.", "A lamp."], 1, "'I bought this kettle'."),
      mc("What is the problem?", ["It's too big.", "It doesn't work.", "Wrong colour."], 1, "'it doesn't work'."),
      mc("What does Tom ask for?", ["Her name.", "The receipt.", "Her phone."], 1, "'Do you have the receipt?'"),
      mc("What does Mrs Green want?", ["Her money back.", "A new one.", "Nothing."], 1, "'A new one, please'."),
      mc("When will Tom bring the new kettle?", ["Tomorrow.", "As soon as he finds one.", "Next week."], 1, "'As soon as I find one… I'll bring it'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (problemas)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre problemas cotidianos — un problema que tuviste, qué haces cuando algo se rompe, si te quejas cuando algo va mal", "hablar de problemas y soluciones en pasado", "last week, my … broke down, I called, I fixed, I complained"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (soluciones)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre cómo resolver problemas (arreglar tú mismo o pedir ayuda); el examinador pregunta qué prefieres y por qué", "dar opiniones y razones", "I prefer, I usually, because, easier, ask for help"),

    SUMMARY("Resumen del Día 33", [
      "Tras when/before/after/as soon as/until (futuro) → PRESENTE, no 'will'.",
      "La parte principal lleva 'will' o imperativo.",
      "Vocabulario de problemas cotidianos. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 34", "Escribe 3 planes con when/as soon as + presente. Repasa las flashcards. Mañana: unless y repaso de condicionales."),
  ],
};

const DAY34 = {
  title: "Día 34 — unless y repaso de condicionales · Las normas",
  description: "unless (= if not) y consolidación de condicionales. Vocabulario: normas y lugares públicos. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Usar 'unless' y afianzar los condicionales.",
    summary: "unless; repaso de condicionales; normas; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["'unless' + not (doble negación).", "'unless you don't'.", "confundir unless con if."],
    reviewPrompts: ["¿'unless' equivale a…?", "Reescribe 'if you don't hurry' con unless."],
  },
  items: [
    TEXT("🔁 Repaso: when/as soon as + presente. Hoy 'unless' (= if not) y repaso de condicionales. Vocabulario: NORMAS y lugares públicos."),
    GRAMMAR("unless (= if not)", `'UNLESS' significa 'a menos que' / 'si no':
· You'll be late unless you hurry. (= if you don't hurry)
· I won't go unless you come with me. (= if you don't come)

⚠️ 'unless' YA es negativo: no se pone otro 'not' con él.
· ❌ unless you don't hurry → ✅ unless you hurry.

Repaso: zero conditional (verdades: if + presente, presente), first conditional (posibilidades: if + presente, will), time clauses (when/as soon as + presente para futuro).`),
    WARN("Errores típicos del hispanohablante", "· ❌ Unless you don't study, you'll fail → ✅ Unless you study, you'll fail.\n· ❌ You'll pass unless you don't work → ✅ You'll fail unless you work.\n· recuerda: unless = if not (ya negativo).\n· ❌ If it will rain → ✅ If it rains."),
    grammarEx("Gramática — unless y condicionales", "Completa o elige.", [
      fb("You'll be late ___ (a menos que) you hurry.", ["unless"], "unless = if not."),
      mc("'if you don't study' = ___", ["unless you study", "unless you don't study", "if you study"], 0, "unless you study."),
      fb("If it ___ (rain), we'll stay in.", ["rains"], "first conditional."),
      fb("I'll call you as soon as I ___ (get) home.", ["get"], "presente tras 'as soon as'."),
      mc("Choose:", ["Unless you don't hurry, we'll miss it.", "Unless you hurry, we'll miss it.", "If you hurry, we'll miss it."], 1, "unless you hurry."),
      fb("Plants die if you ___ (not/water) them.", ["don't water", "do not water"], "zero conditional."),
      fb("We won't leave ___ (a menos que) everyone is ready.", ["unless"], "unless."),
    ]),
    GRAMMAR("Vocabulario del día — Las normas y lugares públicos", "Reglas y sitios."),
    deck("A2 Key S7D34 — Normas y lugares", [
      ["rule", "norma / regla", "You must follow the rules.", "sustantivo", "ruːl"],
      ["allowed", "permitido", "Dogs aren't allowed here.", "adjetivo", "əˈlaʊd"],
      ["forbidden", "prohibido", "Smoking is forbidden.", "adjetivo", "fəˈbɪdn"],
      ["entrance", "entrada", "The entrance is over there.", "sustantivo", "ˈentrəns"],
      ["exit", "salida", "Use the emergency exit.", "sustantivo", "ˈeksɪt"],
      ["queue up", "hacer cola", "Please queue up here.", "phrasal verb", "kjuː ˈʌp"],
      ["security", "seguridad", "Security checked our bags.", "sustantivo", "sɪˈkjʊərəti"],
      ["ticket office", "taquilla", "Buy tickets at the ticket office.", "colocación", "ˈtɪkɪt ˌɒfɪs"],
      ["notice", "aviso / cartel", "There's a notice on the door.", "sustantivo", "ˈnəʊtɪs"],
      ["permission", "permiso", "You need permission to enter.", "sustantivo", "pəˈmɪʃn"],
    ]),
    vocabEx("Vocabulario — Normas y lugares", "Elige la opción correcta.", [
      mc("A rule you must follow is a ___.", ["rule", "exit", "notice"], 0, "rule."),
      mc("The opposite of 'allowed' is ___.", ["forbidden", "entrance", "security"], 0, "forbidden."),
      mc("The way out of a building is the ___.", ["exit", "entrance", "ticket office"], 0, "exit."),
      mc("Where you buy tickets is the ___.", ["ticket office", "exit", "notice"], 0, "ticket office."),
      mc("To wait in a line is to ___.", ["queue up", "forbid", "allow"], 0, "queue up."),
      mc("A sign that gives information is a ___.", ["notice", "rule", "exit"], 0, "notice."),
    ]),

    READING_HEAD,
    READING_P1("Normas y avisos", [
      mc("Sign: 'No entry unless you have a ticket.'", ["You need a ticket to enter.", "Free entry.", "No tickets."], 0, "'No entry unless you have a ticket'."),
      mc("Notice: 'Photography is forbidden in this area.'", ["No photos here.", "Photos allowed.", "No area."], 0, "'Photography is forbidden'."),
      mc("Sign: 'Please queue up at the ticket office.'", ["Wait in line for tickets.", "No queue.", "No tickets."], 0, "'queue up at the ticket office'."),
      mc("Notice: 'Emergency exit — keep clear.'", ["Don't block this exit.", "Main entrance.", "Closed."], 0, "'keep clear'."),
      mc("Sign: 'Bags will be checked by security.'", ["Security checks bags.", "No bags.", "No security."], 0, "'checked by security'."),
      mc("Notice: 'You need permission to park here.'", ["Get permission to park.", "Free parking.", "No parking ever."], 0, "'need permission to park'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y lugares con normas", "THREE PLACES AND THEIR RULES\n\nA) Swimming Pool — no running, no diving in the shallow end, shower before you swim.\n\nB) Library — silence at all times, no food or drink, phones on silent.\n\nC) Museum — no touching the art, no flash photography, no large bags.", "Empareja cada persona con el lugar por su norma (A/B/C).", [
      mc("Someone told to be silent and turn off their phone.", ["A", "B", "C"], 1, "Library."),
      mc("Someone told not to run or dive.", ["A", "B", "C"], 0, "Swimming Pool."),
      mc("Someone told not to touch the exhibits.", ["A", "B", "C"], 2, "Museum."),
      mc("A person who can't bring a large bag inside.", ["A", "B", "C"], 2, "C."),
      mc("Someone who must shower before entering the water.", ["A", "B", "C"], 0, "A."),
      mc("A person who can't eat or drink there.", ["A", "B", "C"], 1, "B."),
      mc("Someone who can't use a flash for photos.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "RULES AT THE CONCERT\n\nLast month, I went to my first big concert, and I learned that there are lots of rules to keep everyone safe. When I arrived, there was a long queue at the entrance. Security checked all the bags, and they told us that large bags weren't allowed inside.\n\nOnce I was in, I saw notices everywhere. One said, 'No filming during the show.' Another said, 'Please stay in your seat area unless there's an emergency.' At first I thought there were too many rules, but then I understood: with thousands of people, you need rules, or it isn't safe.\n\nThe concert was amazing, and everything went smoothly. As I left, I saw the emergency exits clearly marked. I realised that good organisation and clear rules made the night better for everyone. Now, when I go to events, I always read the notices carefully.", "Lee el texto y responde (A/B/C).", [
      mc("What was at the entrance?", ["A shop.", "A long queue.", "A café."], 1, "'a long queue at the entrance'."),
      mc("What did security do?", ["Sold tickets.", "Checked bags.", "Sang songs."], 1, "'Security checked all the bags'."),
      mc("What weren't allowed inside?", ["Phones.", "Large bags.", "Tickets."], 1, "'large bags weren't allowed'."),
      mc("What did one notice say?", ["'No filming during the show.'", "'Free drinks.'", "'Dance here.'"], 0, "'No filming during the show'."),
      mc("What did the writer realise?", ["Rules are bad.", "Clear rules made the night better.", "Concerts are boring."], 1, "'clear rules made the night better'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "At the concert there were many (1)___ to keep us safe. When I arrived, there was a long (2)___ at the entrance, and (3)___ checked our bags. Large bags weren't (4)___ inside. There were (5)___ everywhere, like 'No filming'. At first I thought there were too many rules, but you need them, (6)___ it isn't safe with so many people.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["rules", "exits", "tickets"], 0, "'many rules'."),
      mc("Hueco 2", ["queue", "notice", "rule"], 0, "'a long queue'."),
      mc("Hueco 3", ["security", "exit", "notice"], 0, "'security checked'."),
      mc("Hueco 4", ["allowed", "forbidden", "open"], 0, "'weren't allowed'."),
      mc("Hueco 5", ["notices", "queues", "exits"], 0, "'notices everywhere'."),
      mc("Hueco 6", ["or", "so", "but"], 0, "'or it isn't safe'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wren,\nI went to my first big concert and there were so many rules! When I arrived, there was a long queue and security checked our bags. Large bags weren't (1)___ inside. There were notices everywhere, like 'No filming'. At first I thought there were too (2)___ rules, (3)___ then I understood: (4)___ so many people, you need rules, (5)___ it isn't safe. The concert was amazing! You (6)___ come with me next time.\nBye,\nEd", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["allowed"], "'weren't allowed'."),
      fb("Hueco 2", ["many"], "'too many rules'."),
      fb("Hueco 3", ["but"], "contraste → but."),
      fb("Hueco 4", ["with"], "'with so many people'."),
      fb("Hueco 5", ["or"], "'or it isn't safe'."),
      fb("Hueco 6", ["should", "must", "could", "can"], "sugerencia."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Las normas de un lugar", "Tu amigo/a inglés/a va a visitar un lugar de tu ciudad (piscina, museo…). Escríbele un email (25 palabras o más) con:\n· qué lugar es,\n· dos normas importantes,\n· un consejo para disfrutarlo.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unas personas hacen cola en la entrada de un concierto.\n2) La seguridad revisa las bolsas.\n3) Disfrutan del concierto de forma segura.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. In our library, you have to be completely silent, or people can't study. Two. At the pool, you're not allowed to run, because the floor is wet and dangerous. Three. In the museum, you mustn't touch anything, so the art stays safe. Four. At the airport, security checks every bag before you can go to your flight. Five. In the cinema, you should switch off your phone so you don't disturb others.", [
      mc("Person 1 is talking about…", ["a library rule", "a pool rule", "an airport rule"], 0, "'library… be silent'."),
      mc("Person 2 is talking about…", ["a pool rule", "a museum rule", "a cinema rule"], 0, "'At the pool… not allowed to run'."),
      mc("Person 3 is talking about…", ["a museum rule", "a library rule", "an airport rule"], 0, "'museum… mustn't touch'."),
      mc("Person 4 is talking about…", ["airport security", "a pool rule", "a cinema rule"], 0, "'airport, security checks'."),
      mc("Person 5 is talking about…", ["a cinema rule", "a library rule", "a museum rule"], 0, "'cinema… switch off your phone'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (normas)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre normas — normas de tu casa o colegio, un lugar con muchas reglas, si te parecen bien las normas", "hablar de normas con must/have to/allowed", "you have to, you mustn't, you're allowed to, at home, at school"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (normas)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre las normas en lugares públicos; el examinador pregunta si son necesarias y por qué", "dar opiniones y razones", "I think, we need rules, because, safe, important"),

    SUMMARY("Resumen del Día 34", [
      "unless = if not (ya es negativo, no se dobla).",
      "Repaso de condicionales: zero (verdades), first (posibilidades), time clauses (presente para futuro).",
      "Vocabulario de normas. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 35", "Escribe 2 frases con unless. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY35 = {
  title: "Día 35 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los condicionales y del vocabulario de la semana. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 7.",
  pedagogy: {
    objective: "Consolidar los condicionales y las oraciones de tiempo, y medir el progreso.",
    summary: "Repaso de condicionales (zero/first), when/as soon as/unless; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 8."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 7. Consolidas los condicionales y las oraciones de tiempo, y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 7", `1) Zero conditional: if/when + presente, presente (verdades y normas).
2) First conditional: if + presente, will + base (posibilidades reales).
3) Time clauses: when/before/after/as soon as/until + PRESENTE para el futuro.
4) unless = if not (ya negativo).`),
    grammarEx("Repaso mixto de gramática — Semana 7", "Completa o elige.", [
      fb("If you heat ice, it ___ (melt).", ["melts"], "zero conditional."),
      fb("If it rains tomorrow, we ___ (stay) at home.", ["will stay", "'ll stay"], "first conditional."),
      fb("I'll call you when I ___ (arrive).", ["arrive"], "presente tras 'when'."),
      mc("'if you don't hurry' = ___", ["unless you hurry", "unless you don't hurry", "if you hurry"], 0, "unless you hurry."),
      fb("Plants die if you ___ (not/water) them.", ["don't water", "do not water"], "zero conditional."),
      mc("Choose:", ["If it will rain, we'll cancel.", "If it rains, we'll cancel.", "If it rains, we cancel."], 1, "if + presente, will."),
      fb("As soon as the film ___ (finish), we'll leave.", ["finishes"], "presente tras 'as soon as'."),
      fb("You'll be late ___ you hurry.", ["unless"], "unless."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 7", "Repasa los mazos (medio ambiente, internet, problemas, normas)."),
    vocabEx("Repaso de vocabulario — Semana 7", "Elige la opción correcta.", [
      mc("To use materials again:", ["recycle", "waste", "pollute"], 0, "recycle."),
      mc("To put a photo on social media:", ["post", "follow", "log in"], 0, "post."),
      mc("If your car stops working:", ["breaks down", "queues", "solves"], 0, "breaks down."),
      mc("The opposite of 'allowed':", ["forbidden", "entrance", "notice"], 0, "forbidden."),
      mc("Dirty air from cars:", ["pollution", "rubbish", "bin"], 0, "pollution."),
      mc("A line of people waiting:", ["queue", "delay", "mistake"], 0, "queue."),
      mc("To enter your online account:", ["log in", "post", "share"], 0, "log in."),
      mc("The way out of a building:", ["exit", "entrance", "notice"], 0, "exit."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Recycling point — glass, paper and cans.'", ["Recycle these materials here.", "No recycling.", "Rubbish only."], 0, "'Recycling point'."),
      mc("Notice: 'Website down for maintenance until 6 pm.'", ["The website will work after 6.", "Website fine.", "Website deleted."], 0, "'down… until 6 pm'."),
      mc("Sign: 'No entry unless staff.'", ["Only staff can enter.", "Everyone enters.", "Closed."], 0, "'No entry unless staff'."),
      mc("Text: 'My phone broke, so I'll call you from my sister's.'", ["Phone broken, using sister's.", "New phone.", "No call."], 0, "'My phone broke, so…'."),
      mc("Notice: 'Please switch off lights when you leave.'", ["Turn off lights on leaving.", "Leave lights on.", "No lights."], 0, "'switch off lights when you leave'."),
      mc("App: 'If you don't reply by 5, we'll cancel your booking.'", ["Reply by 5 or lose the booking.", "No booking.", "Booking confirmed."], 0, "'If you don't reply by 5, we'll cancel'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y campañas", "THREE COMMUNITY CAMPAIGNS\n\nA) Clean Streets — volunteers pick up litter and plant flowers in the neighbourhood.\n\nB) Safe Online — free workshops teaching young people to use the internet safely.\n\nC) Fix It Free — volunteers repair broken bikes and small electronics for free.", "Empareja cada persona con la campaña ideal (A/B/C).", [
      mc("Someone who wants to help clean the neighbourhood.", ["A", "B", "C"], 0, "Clean Streets."),
      mc("A parent worried about their child online.", ["A", "B", "C"], 1, "Safe Online."),
      mc("Someone with a broken bike.", ["A", "B", "C"], 2, "Fix It Free."),
      mc("A person who wants to plant flowers.", ["A", "B", "C"], 0, "A."),
      mc("A teenager who wants to learn internet safety.", ["A", "B", "C"], 1, "B."),
      mc("Someone with a broken radio to repair.", ["A", "B", "C"], 2, "C."),
      mc("A volunteer who likes fixing things.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A GREENER FUTURE\n\nOur town has started an exciting project to become greener, and I'm one of the volunteers. Every Saturday, if the weather is good, we meet in the main square. We pick up litter, plant trees, and teach people how to recycle.\n\nAt first, not many people came. But as soon as others saw our clean streets and new flowers, more volunteers joined. Now there are over a hundred of us! We've also started an online group. If someone finds a problem, like a broken bin, they post a photo, and we fix it.\n\nWe still have a lot to do. Unless everyone helps, we can't solve big problems like pollution. But I'm hopeful. When people work together, amazing things happen. If you want a greener future, don't wait — start today, in your own street.", "Lee el texto y responde (A/B/C).", [
      mc("Where do the volunteers meet?", ["The park.", "The main square.", "The school."], 1, "'we meet in the main square'."),
      mc("What do they do?", ["Only plant trees.", "Pick up litter, plant trees, teach recycling.", "Nothing."], 1, "'pick up litter, plant trees… recycle'."),
      mc("Why did more volunteers join?", ["Money.", "They saw the clean streets and flowers.", "It was easy."], 1, "'as soon as others saw our clean streets and new flowers'."),
      mc("How many volunteers are there now?", ["Ten.", "Over a hundred.", "Fifty."], 1, "'over a hundred of us'."),
      mc("What does the writer say we need to solve big problems?", ["Money.", "Everyone to help.", "New laws."], 1, "'Unless everyone helps, we can't solve big problems'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Our town has a green project and I'm a (1)___. Every Saturday, if the weather is good, we (2)___ litter and plant trees. As soon as people (3)___ our clean streets, more volunteers joined. We also have an online group: if someone finds a (4)___, they post a photo and we fix it. (5)___ everyone helps, we can't solve big problems like (6)___. But I'm hopeful!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["volunteer", "notice", "rule"], 0, "'I'm a volunteer'."),
      mc("Hueco 2", ["pick up", "throw", "waste"], 0, "'pick up litter'."),
      mc("Hueco 3", ["saw", "will see", "seeing"], 0, "'people saw our clean streets'."),
      mc("Hueco 4", ["problem", "queue", "exit"], 0, "'finds a problem'."),
      mc("Hueco 5", ["Unless", "If", "When"], 0, "'Unless everyone helps'."),
      mc("Hueco 6", ["pollution", "recycling", "energy"], 0, "'problems like pollution'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Fern,\nI've joined a green project in my town! Every Saturday, (1)___ the weather is good, we meet and pick (2)___ litter. As soon as people saw the clean streets, more volunteers (3)___. We also have an online group: (4)___ someone finds a broken bin, they post a photo. Unless everyone (5)___, we can't solve big problems. (6)___ you want a greener future, start today!\nLove,\nSage", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["if", "when"], "condición → if/when."),
      fb("Hueco 2", ["up"], "'pick up litter'."),
      fb("Hueco 3", ["joined", "came"], "'more volunteers joined'."),
      fb("Hueco 4", ["if"], "condición → if."),
      fb("Hueco 5", ["helps"], "'unless everyone helps'."),
      fb("Hueco 6", ["If"], "'If you want a greener future'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Anima a una acción verde", "Quieres que tu amigo/a inglés/a se una a una campaña ecológica. Escríbele un email (25 palabras o más) con:\n· qué campaña es,\n· qué haríais,\n· por qué debería unirse.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un grupo pequeño empieza a limpiar una calle sucia.\n2) Más vecinos se unen al ver el resultado.\n3) La calle queda limpia y con flores, todos contentos.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Rosa hablar de lo que hará cada miembro de su familia en el proyecto verde y empareja cada persona con su tarea (A/B/C…).", "This is Part Five. You will hear Rosa talking about what her family will do in the green project. My mother will plant flowers in the park, because she loves gardening. My father will collect the rubbish, because he wants clean streets. My brother will make a video for social media, because he's good with technology. My sister will teach children to recycle, because she's a teacher. And my grandmother will make sandwiches for all the volunteers.", [
      mc("Mother", ["plant flowers", "collect rubbish", "make a video"], 0, "'plant flowers'."),
      mc("Father", ["collect rubbish", "make a video", "make sandwiches"], 0, "'collect the rubbish'."),
      mc("Brother", ["make a video", "plant flowers", "teach recycling"], 0, "'make a video'."),
      mc("Sister", ["teach children to recycle", "collect rubbish", "plant flowers"], 0, "'teach children to recycle'."),
      mc("Grandmother", ["make sandwiches", "plant flowers", "make a video"], 0, "'make sandwiches'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — qué harás si hace buen tiempo el finde, qué haces por el medio ambiente, cómo usas internet", "usar condicionales y oraciones de tiempo", "if it's sunny, I'll, when I get home, I recycle, unless"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre cómo mejorar tu ciudad o cuidar el planeta; el examinador pregunta qué es más importante y por qué", "dar opiniones y razones", "I think, we should, because, important, if"),

    SUMMARY("Resumen de la Semana 7", [
      "Dominas los condicionales (zero y first) y las oraciones de tiempo de futuro.",
      "Usas 'unless' (= if not) correctamente.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: 'used to' y recuerdos del pasado.",
    ]),
    INFO("Mini-simulacro de la Semana 7", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 8."),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "Condiciones y consecuencias",
  description: "Zero y first conditional, oraciones de tiempo (when/as soon as/until) y unless. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
