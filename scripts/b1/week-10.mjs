/**
 * B1 Preliminary · Semana 10 — "Salud y bienestar".
 * Gramática: make/let/allow/help + objeto, pronombres reflexivos y recíprocos,
 * y sustantivos contables/incontables con cuantificadores. Cada día, las 4
 * destrezas con el formato real del B1.
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I usually, I try to, it's important to, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, we could, why don't we, I'd rather, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 46 ─────────────────────────
const DAY46 = {
  title: "Día 46 — make / let / allow / help · La salud",
  description: "make/let + objeto + infinitivo sin to; allow/help + objeto + to. Vocabulario de salud. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Expresar obligar, permitir y ayudar con la estructura correcta.",
    summary: "make/let/allow/help; la salud; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'make me to go'.", "'let me to go'.", "'allow me go'."],
    reviewPrompts: ["¿'make/let' + con 'to' o sin 'to'?", "¿'allow' + con 'to' o sin?"],
  },
  items: [
    TEXT("🔁 Semana 10. Hoy MAKE / LET / ALLOW / HELP: obligar, permitir y ayudar. Vocabulario: la SALUD."),
    GRAMMAR("make / let / allow / help", `SIN 'to' (objeto + infinitivo sin to):
· make + obj + inf = obligar: My teacher made me stay late.
· let + obj + inf = dejar/permitir: My parents let me go out.
CON 'to' (objeto + to + infinitivo):
· allow + obj + to = permitir: They allowed me to leave early.
· help + obj + (to) = ayudar (¡admite las dos!): She helped me (to) carry it.
En PASIVA, 'make' recupera el 'to': I was made to wait.
⚠️ let → allow para pasiva/formal: I wasn't allowed to go (no 'I wasn't let go').`),
    WARN("Errores típicos del hispanohablante", "· ❌ make me to go → ✅ make me go.\n· ❌ let me to go → ✅ let me go.\n· ❌ allow me go → ✅ allow me to go.\n· Pasiva: ✅ I was made to wait (con 'to')."),
    grammarEx("Gramática — make / let / allow / help", "Completa o elige.", [
      mc("Choose:", ["My mum made me to tidy my room.", "My mum made me tidy my room.", "My mum made me tidying my room."], 1, "make + obj + inf sin to."),
      fb("My parents ___ me ___ (go) to the party. (dejar)", ["let", "go"], "let + obj + inf sin to."),
      mc("Choose:", ["They allowed me leave early.", "They allowed me to leave early.", "They allowed me leaving early."], 1, "allow + obj + to."),
      fb("She helped me ___ (carry) my bags.", ["carry", "to carry"], "help + obj + (to)."),
      mc("Choose (passive):", ["I was made wait.", "I was made to wait.", "I was make to wait."], 1, "pasiva: made TO wait."),
      fb("The doctor won't ___ me ___ (eat) sugar. (permitir → no dejar)", ["let", "eat"], "won't let me eat."),
      mc("Choose:", ["We aren't let to smoke here.", "We aren't allowed to smoke here.", "We don't allow smoke here."], 1, "pasiva → allowed to."),
    ]),
    GRAMMAR("Vocabulario del día — La salud", "Léxico de salud (B1)."),
    deck("B1 S10D46 — La salud", [
      ["healthy", "sano/a / saludable", "Try to eat a healthy diet.", "adjetivo", "ˈhelθi"],
      ["illness", "enfermedad", "It's a common illness.", "sustantivo", "ˈɪlnəs"],
      ["symptom", "síntoma", "A cough is a common symptom.", "sustantivo", "ˈsɪmptəm"],
      ["recover", "recuperarse", "It took a week to recover.", "verbo", "rɪˈkʌvə"],
      ["prescription", "receta (médica)", "The doctor gave me a prescription.", "sustantivo", "prɪˈskrɪpʃn"],
      ["treatment", "tratamiento", "The treatment worked well.", "sustantivo", "ˈtriːtmənt"],
      ["fit", "en forma", "Exercise keeps you fit.", "adjetivo", "fɪt"],
      ["diet", "dieta / alimentación", "A balanced diet is important.", "sustantivo", "ˈdaɪət"],
      ["injury", "lesión / herida", "He recovered from his injury.", "sustantivo", "ˈɪndʒəri"],
      ["stressed", "estresado/a", "I feel really stressed at exam time.", "adjetivo", "strest"],
    ]),
    vocabEx("Vocabulario — La salud", "Elige la opción correcta.", [
      mc("A sign that shows you might be ill is a ___.", ["symptom", "treatment", "prescription"], 0, "symptom."),
      mc("To get better after being ill is to ___.", ["recover", "injure", "prescribe"], 0, "recover."),
      mc("The paper a doctor gives you to get medicine is a ___.", ["prescription", "symptom", "diet"], 0, "prescription."),
      mc("If you exercise and are in good shape, you are ___.", ["fit", "stressed", "ill"], 0, "fit."),
      mc("Damage to your body, e.g. from sport, is an ___.", ["injury", "illness", "diet"], 0, "injury."),
      mc("What you eat regularly is your ___.", ["diet", "treatment", "symptom"], 0, "diet."),
    ]),

    ...readingParts({
      p1: { title: "Salud y avisos", items: [
        mc("Sign: 'Patients are not allowed to use phones in this area.'", ["No phones here.", "Phones are fine.", "Only staff phones."], 0, "'not allowed to use phones'."),
        mc("Note: 'The doctor made me rest for a week.'", ["The doctor told them to rest.", "They didn't rest.", "No doctor."], 0, "'made me rest for a week'."),
        mc("Text: 'Exercise helps you stay fit and healthy.'", ["Exercise keeps you healthy.", "Exercise is bad.", "No exercise."], 0, "'helps you stay fit and healthy'."),
        mc("Poster: 'A balanced diet lets your body recover faster.'", ["Good food speeds recovery.", "Food is unimportant.", "No diet."], 0, "'lets your body recover faster'."),
        mc("Sign: 'Please take your prescription to the pharmacy.'", ["Get your medicine at the pharmacy.", "No medicine.", "Free medicine."], 0, "'take your prescription to the pharmacy'."),
      ] },
      p2text: "FOUR WAYS TO STAY HEALTHY\n\nA) The Gym — for people who love exercise and want to build strength and fitness.\nB) The Cookery Club — learn to prepare healthy, balanced meals from fresh ingredients.\nC) The Mindfulness Group — reduce stress through breathing, relaxation and meditation.\nD) The Sleep Clinic — advice and support for people who struggle to sleep well.",
      p2q: { title: "Emparejar personas y opciones", items: [
        mc("Nadia wants to get fit and build muscle.", ["A", "B", "C", "D"], 0, "The Gym."),
        mc("Ben wants to learn to cook healthy food.", ["A", "B", "C", "D"], 1, "The Cookery Club."),
        mc("Sara feels very stressed and needs to relax.", ["A", "B", "C", "D"], 2, "The Mindfulness Group."),
        mc("Leo can never sleep and feels tired all day.", ["A", "B", "C", "D"], 3, "The Sleep Clinic."),
        mc("A group that teaches you to relax and reduce stress.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "THE HEALTH ADVICE NOBODY WANTS TO HEAR\n\nEvery week, it seems, a new 'miracle' appears that promises to make us healthier: a special diet, a magic supplement, an amazing new exercise machine. We spend enormous amounts of money chasing these promises, hoping for an easy answer. But the real secret to good health is far simpler, and, unfortunately, far less exciting.\n\nDoctors have known the truth for a long time, and it never changes. If you want to be healthy, you should eat a balanced diet with plenty of fruit and vegetables, exercise regularly, sleep well, drink water, and avoid smoking. That's it. There is no magic pill and no secret trick. The reason we don't want to hear this is that it sounds boring, and it requires effort and discipline every single day. It's far more tempting to believe that a special tea will melt away our problems while we sit on the sofa.\n\nThe good news is that these simple habits are more powerful than any expensive product. Small changes, repeated over time, make an enormous difference. You don't have to run a marathon; a brisk walk every day helps your heart and clears your mind. You don't need a complicated diet; just cooking fresh food at home instead of buying takeaways is a huge step. Nobody can make you look after yourself, and no doctor can do it for you. But if you're willing to be patient and let good habits build slowly, your body will thank you for the rest of your life.",
      p3q: { title: "El consejo de salud que nadie quiere oír (texto largo)", items: [
        mc("What appears every week?", ["A new doctor.", "A new 'miracle' health product.", "A new illness."], 1, "'a new \"miracle\" appears'."),
        mc("What is the real secret to good health?", ["A magic pill.", "Simple habits: balanced diet, exercise, sleep, water, no smoking.", "Expensive products."], 1, "'balanced diet… exercise… sleep… avoid smoking'."),
        mc("Why don't we want to hear this?", ["It's false.", "It sounds boring and needs daily effort.", "It's expensive."], 1, "'it sounds boring, and it requires effort'."),
        mc("What does the writer say about a daily walk?", ["It's useless.", "It helps your heart and clears your mind.", "It's dangerous."], 1, "'a brisk walk every day helps your heart and clears your mind'."),
        mc("Who can look after your health?", ["A doctor alone.", "Only you can.", "A special product."], 1, "'Nobody can make you look after yourself… no doctor can do it for you'."),
      ] },
      p4text: "THE YEAR I GOT HEALTHY\n\nTwo years ago, I was in terrible shape. (1)___ I ate junk food, never exercised, and felt tired all the time. My doctor warned me that I had to make some changes, but I didn't listen.\n\nThen, one morning, I couldn't climb the stairs to my flat without stopping to catch my breath. (2)___ That frightening moment finally made me take action. I didn't try any crazy diets or expensive gym memberships. (3)___ Instead, I made a few small promises to myself: to walk for thirty minutes a day, to cook fresh food, and to go to bed earlier.\n\nAt first, it was hard, and I wanted to give up many times. (4)___ But slowly, my body began to change. I had more energy, I slept better, and I even started to enjoy my daily walk. Within a year, I felt like a completely different person. (5)___ The lesson I learned is that you don't need a miracle to be healthy — you just need patience and a few good habits.",
      p4options: [
        "My health had reached its lowest point.",                  // A -> gap 1
        "It was a real wake-up call.",                              // B -> gap 2
        "I knew those never worked for me.",                        // C -> gap 3
        "The first few weeks were a real struggle.",                // D -> gap 4
        "I decided to give up on my health forever.",               // E (extra)
        "Those simple habits transformed my life.",                 // F -> gap 5
        "I had always been extremely fit and healthy.",             // G (extra)
        "The doctor told me I was perfectly fine.",                 // H (extra)
      ],
      p4q: { title: "El año que me puse sano (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: su salud tocó fondo."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: fue una llamada de atención."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: sabía que eso no le funcionaba."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: las primeras semanas costaron."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: esos hábitos transformaron su vida."),
      ] },
      p5text: "Looking after your health doesn't have to be complicated. Eat a balanced (1)___ with plenty of fruit and vegetables, and try to stay (2)___ by exercising regularly. Good habits (3)___ your body recover from illness and stress more quickly. Nobody can (4)___ you look after yourself, so you have to want it. If you feel unwell, don't ignore the (5)___ — see a doctor. Small changes, repeated every day, will (6)___ you feel much better over time.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["diet", "illness", "injury", "symptom"], 0, "'a balanced diet'."),
        mc("Hueco 2", ["fit", "ill", "stressed", "healthy"], 0, "'stay fit'."),
        mc("Hueco 3", ["help", "make", "let", "allow"], 0, "'help your body recover'."),
        mc("Hueco 4", ["make", "let", "help", "allow"], 0, "'make you look after yourself'."),
        mc("Hueco 5", ["symptoms", "diets", "prescriptions", "treatments"], 0, "'ignore the symptoms'."),
        mc("Hueco 6", ["make", "let", "allow", "help"], 0, "'make you feel much better' (o help)."),
      ] },
      p6text: "Hi Sam,\nI've decided to get healthy this year! Two years ago my doctor (1)___ me change my habits, but I didn't listen. Now I really want to. I'm not going to (2)___ myself do crazy diets. Instead, I'll walk every day and cook fresh food, which should (3)___ me feel better. My flatmate has promised to (4)___ me stay motivated. My doctor won't (5)___ me eat too much sugar, but that's fine. Small habits, repeated daily, (6)___ a big difference. Want to join me?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["told", "made", "asked"], "'my doctor told/made me change my habits'."),
        fb("Hueco 2", ["make"], "'make myself do crazy diets'."),
        fb("Hueco 3", ["help", "make"], "'help me feel better'."),
        fb("Hueco 4", ["help"], "'help me stay motivated'."),
        fb("Hueco 5", ["let"], "'won't let me eat too much sugar'."),
        fb("Hueco 6", ["make"], "'make a big difference'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere llevar una vida más sana. Responde a su email (~100 palabras):\n· dale dos consejos para estar más sano/a,\n· cuenta qué haces tú para cuidarte,\n· pregúntale qué le cuesta más cambiar.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How can young people stay healthy?' con consejos.\n· RELATO: empieza con: 'That morning, I couldn't even climb the stairs without stopping.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: Why can't you have dessert? Man: The doctor won't let me eat sugar. Two. Man: Did the treatment work? Woman: Yes, I've fully recovered now. Three. Woman: How do you stay so fit? Man: I exercise every morning. Four. Man: Why are you so tired? Woman: I've been really stressed lately. Five. Man: Can I use my phone here? Woman: No, patients aren't allowed to. Six. Woman: What did the doctor say? Man: She made me rest for a week. Seven. Man: How's your injury? Woman: Much better, thanks — nearly healed.", [
      mc("1. Why can't the man have dessert?", ["He's full.", "The doctor won't let him eat sugar.", "He dislikes it."], 1, "'won't let me eat sugar'."),
      mc("2. Did the treatment work?", ["No.", "Yes, she's fully recovered.", "A little."], 1, "'I've fully recovered now'."),
      mc("3. How does the man stay fit?", ["Diet only.", "He exercises every morning.", "He doesn't."], 1, "'I exercise every morning'."),
      mc("4. Why is the woman tired?", ["She's ill.", "She's been stressed.", "She slept badly."], 1, "'really stressed lately'."),
      mc("5. Can the man use his phone?", ["Yes.", "No, patients aren't allowed to.", "Only outside."], 1, "'patients aren't allowed to'."),
      mc("6. What did the doctor make him do?", ["Take pills.", "Rest for a week.", "Exercise."], 1, "'made me rest for a week'."),
      mc("7. How is the woman's injury?", ["Worse.", "Much better, nearly healed.", "The same."], 1, "'Much better… nearly healed'."),
    ]),

    ...speakingParts("la salud y la vida sana", { p1: "qué haces para estar sano/a y qué te gustaría mejorar", p2: "una foto de personas cuidando su salud (haciendo deporte, cocinando sano, en el médico)", p3: "qué actividad saludable empezar juntos este mes", p4: "la salud, la comida sana, el ejercicio y cómo reducir el estrés" }),

    SUMMARY("Resumen del Día 46", [
      "make/let + objeto + infinitivo SIN to. allow/help + objeto + TO (help admite ambas).",
      "Pasiva: was made TO wait; wasn't allowed TO go.",
      "Vocabulario de salud. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 47", "Escribe 4 frases con make/let/allow/help. Repasa las flashcards. Mañana: los pronombres reflexivos y recíprocos."),
  ],
};

// ───────────────────────── DÍA 47 ─────────────────────────
const DAY47 = {
  title: "Día 47 — Pronombres reflexivos y recíprocos · La independencia",
  description: "myself/yourself…; each other / one another; by myself. Vocabulario de independencia. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Usar reflexivos, recíprocos y 'by myself' correctamente.",
    summary: "Reflexivos/recíprocos; independencia; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'I feel myself tired'.", "'each other' vs 'ourselves'.", "'I did it myself' vs 'by myself'."],
    reviewPrompts: ["¿'enjoy' lleva reflexivo? ¿y 'feel'?", "¿'each other' significa…?"],
  },
  items: [
    TEXT("🔁 Repaso: make/let/allow. Hoy los PRONOMBRES REFLEXIVOS (myself…) y RECÍPROCOS (each other). Vocabulario: la INDEPENDENCIA."),
    GRAMMAR("Reflexivos y recíprocos", `REFLEXIVOS: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.
Se usan cuando el sujeto y el objeto son la MISMA persona: I hurt myself. She taught herself to paint.
· Enfático: I did it myself. (yo mismo/a)
· BY + reflexivo = solo/sin ayuda: I live by myself. (solo) I did it by myself. (yo solo)
RECÍPROCOS: each other / one another = el uno al otro (mutuamente): They love each other. We help each other.
⚠️ Algunos verbos NO llevan reflexivo en inglés (aunque en español sí): feel, relax, concentrate, meet.
❌ I feel myself tired → ✅ I feel tired. ❌ They met themselves → ✅ They met (each other).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I feel myself happy → ✅ I feel happy.\n· ❌ We help ourselves (mutuamente) → ✅ We help each other.\n· ❌ Relax yourself → ✅ Relax.\n· ✅ enjoy yourself, hurt yourself, teach yourself (sí llevan reflexivo)."),
    grammarEx("Gramática — Reflexivos y recíprocos", "Completa o elige.", [
      fb("Be careful! Don't hurt ___. (tú)", ["yourself"], "yourself."),
      fb("She taught ___ to play the guitar. (ella)", ["herself"], "herself."),
      mc("Choose:", ["I feel myself tired.", "I feel tired.", "I feel me tired."], 1, "'feel' sin reflexivo."),
      fb("They love ___ ___ very much. (el uno al otro)", ["each other"], "each other."),
      fb("I live ___ ___. (solo, sin compañía)", ["by myself"], "by + myself."),
      mc("Choose (emphatic):", ["I made the cake me.", "I made the cake myself.", "I made myself the cake me."], 1, "énfasis: myself."),
      mc("Choose:", ["We met ourselves at the café.", "We met each other at the café.", "We met us at the café."], 1, "recíproco → each other (o solo 'met')."),
    ]),
    GRAMMAR("Vocabulario del día — La independencia", "Léxico de independencia (B1)."),
    deck("B1 S10D47 — La independencia", [
      ["independent", "independiente", "She's very independent.", "adjetivo", "ˌɪndɪˈpendənt"],
      ["responsible", "responsable", "You must be responsible for your actions.", "adjetivo", "rɪˈspɒnsəbl"],
      ["look after yourself", "cuidarse", "You need to look after yourself.", "colocación", "lʊk ˈɑːftə jɔːˈself"],
      ["move out", "independizarse / irse de casa", "I moved out at eighteen.", "phrasal verb", "muːv ˈaʊt"],
      ["cope", "arreglárselas / afrontar", "She copes well under pressure.", "verbo", "kəʊp"],
      ["manage", "arreglárselas / lograr", "I can manage on my own.", "verbo", "ˈmænɪdʒ"],
      ["rely on", "depender de / contar con", "You can rely on me.", "phrasal verb", "rɪˈlaɪ ɒn"],
      ["confidence", "confianza (en uno mismo)", "Living alone gave me confidence.", "sustantivo", "ˈkɒnfɪdəns"],
      ["grown-up", "adulto/a / mayor", "She sounds very grown-up.", "adjetivo", "ˈɡrəʊn ʌp"],
      ["support", "apoyar / apoyo", "My family always support me.", "verbo/sustantivo", "səˈpɔːt"],
    ]),
    vocabEx("Vocabulario — La independencia", "Elige la opción correcta.", [
      mc("Someone who doesn't need help from others is ___.", ["independent", "responsible", "grown-up"], 0, "independent."),
      mc("To leave your family home to live alone is to ___.", ["move out", "cope", "rely on"], 0, "move out."),
      mc("To deal successfully with a difficult situation is to ___.", ["cope", "support", "rely"], 0, "cope."),
      mc("To depend on someone for help is to ___ them.", ["rely on", "move out", "cope"], 0, "rely on."),
      mc("Believing in your own abilities is ___.", ["confidence", "support", "responsibility"], 0, "confidence."),
      mc("To take care of your own needs is to ___.", ["look after yourself", "move out", "rely on"], 0, "look after yourself."),
    ]),

    ...readingParts({
      p1: { title: "Independencia y avisos", items: [
        mc("Note: 'I moved out and now I live by myself.'", ["They live alone.", "They live with family.", "They moved back."], 0, "'live by myself'."),
        mc("Text: 'Don't worry, I can manage on my own.'", ["They can cope alone.", "They need help.", "They gave up."], 0, "'I can manage on my own'."),
        mc("Message: 'We really support each other.'", ["They help one another.", "Nobody helps.", "They argue."], 0, "'support each other'."),
        mc("Sign: 'Teach yourself to cook — free online classes.'", ["Learn to cook by yourself.", "No cooking.", "Paid chef."], 0, "'Teach yourself to cook'."),
        mc("Note: 'She's grown up so much and is very responsible now.'", ["She's become mature and responsible.", "She's still a child.", "She's irresponsible."], 0, "'very responsible now'."),
      ] },
      p2text: "FOUR STEPS TO INDEPENDENCE\n\nA) Cooking for Yourself — learn to prepare simple, healthy meals instead of relying on takeaways.\nB) Managing Money — a course on budgeting, saving and paying bills on your own.\nC) Living Alone — practical advice for people about to move out for the first time.\nD) Basic Repairs — how to fix small things yourself instead of always paying an expert.",
      p2q: { title: "Emparejar personas y cursos", items: [
        mc("Nadia always orders takeaways and wants to cook.", ["A", "B", "C", "D"], 0, "Cooking for Yourself."),
        mc("Ben struggles to manage his money.", ["A", "B", "C", "D"], 1, "Managing Money."),
        mc("Sara is about to move out of her family home.", ["A", "B", "C", "D"], 2, "Living Alone."),
        mc("Leo wants to stop paying people for small repairs.", ["A", "B", "C", "D"], 3, "Basic Repairs."),
        mc("A course about budgeting and paying bills.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "LEARNING TO STAND ON MY OWN TWO FEET\n\nWhen I left home for the first time at eighteen, I thought I was completely ready to be independent. I was wrong. Looking back, I realise that I had been relying on my parents for far more than I understood, and those first few months of living by myself taught me some hard but valuable lessons.\n\nThe first shock was practical. Suddenly, there was nobody to cook for me, wake me up, or wash my clothes. I had to teach myself to do all these things, and I made plenty of mistakes along the way. I shrank my favourite jumper in the wash, burned countless meals, and once nearly forgot to pay an important bill. But slowly, I learned to look after myself, and each small success gave me a little more confidence. There is a real pride that comes from cooking your own dinner or fixing a problem all by yourself.\n\nThe deeper lesson, though, was emotional. I learned that being independent doesn't mean never needing anyone. In fact, the opposite is true. When I was struggling, I discovered how much I could rely on my friends, and how good it felt to support each other through difficult times. Real independence, I came to understand, isn't about doing everything alone. It's about being able to take care of yourself, while also being brave enough to ask for help when you need it, and generous enough to give it in return. That balance, I think, is what it really means to grow up.",
      p3q: { title: "Aprender a valerme por mí mismo (texto largo)", items: [
        mc("What did the writer wrongly think at eighteen?", ["That they'd fail.", "That they were completely ready to be independent.", "That they'd stay home."], 1, "'I thought I was completely ready… I was wrong'."),
        mc("What was the first shock?", ["Emotional.", "Practical: cooking, washing, waking up alone.", "Financial only."], 1, "'nobody to cook for me, wake me up, or wash my clothes'."),
        mc("What gave the writer confidence?", ["Money.", "Each small success at looking after themselves.", "Their parents."], 1, "'each small success gave me a little more confidence'."),
        mc("What is the deeper lesson?", ["Never need anyone.", "Being independent doesn't mean never needing anyone.", "Live alone forever."], 1, "'being independent doesn't mean never needing anyone'."),
        mc("What does real independence mean, according to the writer?", ["Doing everything alone.", "Caring for yourself but also asking for and giving help.", "Never asking for help."], 1, "'take care of yourself… ask for help… give it in return'."),
      ] },
      p4text: "THE FIRST MEAL I COOKED ALONE\n\nThe night I moved into my first flat, I decided to cook myself a proper dinner to celebrate. (1)___ I wanted to prove to myself that I could look after myself now.\n\nThe reality was a disaster. (2)___ I had never really cooked before, always relying on my parents, and I quickly discovered that I had no idea what I was doing. The pasta stuck together in a horrible lump, I burned the sauce, and I set off the smoke alarm twice. (3)___ Standing in my tiny, smoky kitchen, I suddenly felt very far from home and close to tears.\n\nBut then something in me refused to give up. (4)___ I cleaned up the mess, opened a window, and started again from the beginning, this time reading the instructions carefully. The second attempt wasn't perfect, but it was edible. As I sat down to eat the meal I had made entirely by myself, I felt a ridiculous sense of pride. (5)___ It was, without doubt, the best bad meal I have ever eaten.",
      p4options: [
        "It felt like an important first step into adult life.",     // A -> gap 1
        "Everything that could go wrong did go wrong.",             // B -> gap 2
        "For a moment, I wanted to phone my mother for help.",      // C -> gap 3
        "I was determined to prove that I could do this.",          // D -> gap 4
        "The meal turned out to be absolutely perfect.",            // E (extra)
        "That simple plate of pasta tasted like independence.",     // F -> gap 5
        "I had actually been a professional chef for years.",       // G (extra)
        "I decided never to cook again in my life.",                // H (extra)
      ],
      p4q: { title: "La primera comida que cociné solo (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: un primer paso a la vida adulta."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: todo salió mal."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: quiso llamar a su madre."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: decidido a lograrlo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: esa pasta sabía a independencia."),
      ] },
      p5text: "Becoming independent takes time and practice. When you first move (1)___, you have to learn to look after (2)___: cooking, cleaning and managing money. You'll make mistakes, but that's how you build (3)___. Being independent doesn't mean you can never (4)___ on anyone; good friends still support (5)___ other. Real independence is about being able to (6)___ on your own while knowing when to ask for help.",
      p5q: { title: "Huecos con opciones (vocabulario/reflexivos)", items: [
        mc("Hueco 1", ["out", "on", "up", "in"], 0, "'move out'."),
        mc("Hueco 2", ["yourself", "myself", "each other", "themselves"], 0, "'look after yourself'."),
        mc("Hueco 3", ["confidence", "support", "responsibility", "diet"], 0, "'build confidence'."),
        mc("Hueco 4", ["rely", "cope", "manage", "move"], 0, "'rely on anyone'."),
        mc("Hueco 5", ["each", "one", "them", "your"], 0, "'support each other'."),
        mc("Hueco 6", ["cope", "rely", "support", "move"], 0, "'cope on your own'."),
      ] },
      p6text: "Hi Sam,\nI've finally moved (1)___ and I'm living by (2)___ for the first time! It's scary but exciting. I've had to teach (3)___ to cook and clean — I even shrank a jumper in the wash! But each little success gives me more (4)___. I've learned that being independent doesn't mean doing everything alone; my friends and I still support (5)___ other. I think I can (6)___ on my own now, but it's nice to know I can ask for help. How did you feel when you moved out?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["out"], "'moved out'."),
        fb("Hueco 2", ["myself"], "'living by myself'."),
        fb("Hueco 3", ["myself"], "'teach myself to cook'."),
        fb("Hueco 4", ["confidence"], "'more confidence'."),
        fb("Hueco 5", ["each"], "'support each other'."),
        fb("Hueco 6", ["cope", "manage"], "'I can cope on my own'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a va a independizarse pronto y está nervioso/a. Responde a su email (~100 palabras):\n· dale un consejo para vivir solo/a,\n· cuenta tu experiencia (o cómo te imaginas independizarte),\n· pregúntale qué es lo que más le preocupa.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'At what age should young people become independent?' con tu opinión.\n· RELATO: empieza con: 'It was the first meal I had ever cooked entirely by myself.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Do you live with family? Man: No, I live by myself now. Two. Man: Did someone help you? Woman: No, I did it all by myself. Three. Woman: How do you two get on? Man: Great, we really support each other. Four. Man: Can you manage alone? Woman: Yes, don't worry, I can cope. Five. Man: Who taught you to cook? Woman: Nobody — I taught myself. Six. Woman: Are you nervous about moving out? Man: A bit, but I feel ready.", [
      mc("1. Does the man live with family?", ["Yes.", "No, by himself.", "With friends."], 1, "'I live by myself now'."),
      mc("2. Did someone help the woman?", ["Yes.", "No, she did it herself.", "A little."], 1, "'I did it all by myself'."),
      mc("3. How do the two get on?", ["Badly.", "Great, they support each other.", "They argue."], 1, "'we really support each other'."),
      mc("4. Can the woman manage alone?", ["No.", "Yes, she can cope.", "She needs help."], 1, "'I can cope'."),
      mc("5. Who taught the woman to cook?", ["Her mum.", "She taught herself.", "A course."], 1, "'I taught myself'."),
      mc("6. How does the man feel about moving out?", ["Terrified.", "A bit nervous but ready.", "He won't move."], 1, "'A bit, but I feel ready'."),
    ]),

    ...speakingParts("la independencia", { p1: "si vives con tu familia o solo/a, y qué cosas sabes hacer por ti mismo/a", p2: "una foto de alguien haciendo algo de forma independiente (cocinando, mudándose)", p3: "qué habilidades debería aprender un/a joven antes de independizarse", p4: "la independencia, a qué edad irse de casa y qué significa ser adulto/a" }),

    SUMMARY("Resumen del Día 47", [
      "Reflexivos: myself…themselves (mismo sujeto/objeto; enfático). by myself = solo.",
      "Recíprocos: each other / one another. Ojo: feel, relax, meet NO llevan reflexivo.",
      "Vocabulario de independencia. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 48", "Escribe 4 frases con reflexivos/recíprocos y 'by myself'. Repasa las flashcards. Mañana: contables/incontables y cuantificadores."),
  ],
};

// ───────────────────────── DÍA 48 ─────────────────────────
const DAY48 = {
  title: "Día 48 — Contables e incontables · La comida",
  description: "Sustantivos contables/incontables; some/any, much/many, a lot of, a piece of. Vocabulario de comida. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Distinguir contables e incontables y usar los cuantificadores adecuados.",
    summary: "Contables/incontables; la comida; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'an advice', 'informations'.", "'how much people'.", "'a bread' (→ a loaf/piece of)."],
    reviewPrompts: ["¿'information' es contable o incontable?", "¿'much' o 'many' con 'money'?"],
  },
  items: [
    TEXT("🔁 Repaso: reflexivos. Hoy los sustantivos CONTABLES e INCONTABLES y sus cuantificadores. Vocabulario: la COMIDA."),
    GRAMMAR("Contables e incontables", `CONTABLES: se pueden contar y tienen plural (a book / two books). Cuantificadores: many, a few, a number of, how many?
INCONTABLES: no se cuentan ni tienen plural (water, money, information, advice, bread, rice, news, furniture, work). Cuantificadores: much, a little, a great deal of, how much?
· some / any / a lot of / plenty of / no → con AMBOS.
· Para contar incontables: a piece of advice, a glass of water, a slice/loaf of bread, a bit of information, a bar of chocolate.
⚠️ Muchos incontables en inglés que en español parecen contables: information, advice, news, furniture, homework, luggage → SIN plural, con 'much/a piece of'.`),
    WARN("Errores típicos del hispanohablante", "· ❌ an advice / advices → ✅ some advice / a piece of advice.\n· ❌ informations → ✅ information.\n· ❌ how much people → ✅ how many people.\n· ❌ a bread → ✅ a loaf/slice of bread.\n· 'news' es incontable y singular: The news IS good."),
    grammarEx("Gramática — Contables/incontables", "Completa o elige.", [
      mc("Choose:", ["Can I give you an advice?", "Can I give you some advice?", "Can I give you advices?"], 1, "advice incontable → some advice."),
      mc("Choose:", ["How much people came?", "How many people came?", "How many peoples came?"], 1, "people contable → how many."),
      fb("There isn't ___ (much/many) money left.", ["much"], "money incontable → much."),
      fb("I only have a ___ (few/little) time.", ["little"], "time incontable → a little."),
      mc("Choose:", ["I bought a bread.", "I bought a loaf of bread.", "I bought two breads."], 1, "a loaf of bread."),
      fb("Let me give you a ___ of advice.", ["piece"], "a piece of advice."),
      mc("Choose:", ["The news are good.", "The news is good.", "The news were good."], 1, "news incontable singular → is."),
    ]),
    GRAMMAR("Vocabulario del día — La comida", "Léxico de comida (B1)."),
    deck("B1 S10D48 — La comida", [
      ["ingredient", "ingrediente", "Add all the ingredients.", "sustantivo", "ɪnˈɡriːdiənt"],
      ["recipe", "receta (de cocina)", "This is my grandmother's recipe.", "sustantivo", "ˈresəpi"],
      ["flavour", "sabor", "It has a delicious flavour.", "sustantivo", "ˈfleɪvə"],
      ["tasty", "sabroso/a / rico/a", "That was a tasty meal.", "adjetivo", "ˈteɪsti"],
      ["fresh", "fresco/a", "I love fresh vegetables.", "adjetivo", "freʃ"],
      ["balanced", "equilibrado/a", "Eat a balanced diet.", "adjetivo", "ˈbælənst"],
      ["portion", "ración / porción", "The portions are huge.", "sustantivo", "ˈpɔːʃn"],
      ["vegetarian", "vegetariano/a", "There are vegetarian options.", "adjetivo", "ˌvedʒəˈteəriən"],
      ["snack", "tentempié / picar", "I had a quick snack.", "sustantivo", "snæk"],
      ["homemade", "casero/a", "The soup is homemade.", "adjetivo", "ˌhəʊmˈmeɪd"],
    ]),
    vocabEx("Vocabulario — La comida", "Elige la opción correcta.", [
      mc("The instructions for making a dish are a ___.", ["recipe", "ingredient", "portion"], 0, "recipe."),
      mc("An item used to make a dish is an ___.", ["ingredient", "recipe", "flavour"], 0, "ingredient."),
      mc("The taste of food is its ___.", ["flavour", "portion", "recipe"], 0, "flavour."),
      mc("Food that tastes good is ___.", ["tasty", "fresh", "balanced"], 0, "tasty."),
      mc("The amount of food you're served is a ___.", ["portion", "recipe", "flavour"], 0, "portion."),
      mc("Food made at home, not bought, is ___.", ["homemade", "fresh", "tasty"], 0, "homemade."),
    ]),

    ...readingParts({
      p1: { title: "Comida y avisos", items: [
        mc("Menu note: 'All our bread is homemade and fresh daily.'", ["The bread is fresh and homemade.", "It's frozen.", "No bread."], 0, "'homemade and fresh daily'."),
        mc("Sign: 'Please don't waste food — take a small portion first.'", ["Start with a small portion.", "Take everything.", "No food."], 0, "'take a small portion first'."),
        mc("Text: 'This recipe only needs five ingredients.'", ["A simple recipe.", "Many ingredients.", "No recipe."], 0, "'only needs five ingredients'."),
        mc("Label: 'Suitable for vegetarians.'", ["Good for vegetarians.", "Meat only.", "Not for vegetarians."], 0, "'Suitable for vegetarians'."),
        mc("Poster: 'A balanced diet needs plenty of fresh vegetables.'", ["Eat plenty of fresh veg.", "Avoid vegetables.", "No diet."], 0, "'plenty of fresh vegetables'."),
      ] },
      p2text: "FOUR COOKING COURSES\n\nA) Quick & Easy — simple meals with just a few ingredients, ready in twenty minutes.\nB) World Flavours — learn to cook tasty dishes from different countries.\nC) Healthy Eating — how to prepare balanced, nutritious meals full of fresh vegetables.\nD) Baking Basics — make your own homemade bread, cakes and biscuits from scratch.",
      p2q: { title: "Emparejar personas y cursos", items: [
        mc("Nadia is very busy and wants fast, simple meals.", ["A", "B", "C", "D"], 0, "Quick & Easy."),
        mc("Ben loves food from around the world.", ["A", "B", "C", "D"], 1, "World Flavours."),
        mc("Sara wants to eat more healthily.", ["A", "B", "C", "D"], 2, "Healthy Eating."),
        mc("Leo dreams of baking his own bread and cakes.", ["A", "B", "C", "D"], 3, "Baking Basics."),
        mc("A course for someone with very little time.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "WHY COOKING MATTERS\n\nCooking is one of the most useful skills a person can have, yet fewer and fewer young people know how to do it. With so much fast food and so many ready meals available, it's easy to see why. Why spend an hour making dinner when you can have a pizza delivered in twenty minutes? But I believe that learning to cook is worth the effort, for reasons that go far beyond just filling your stomach.\n\nThe first reason is health. When you cook for yourself, you know exactly what goes into your food. Ready meals often contain a great deal of salt, sugar and fat, but a homemade meal can be full of fresh, healthy ingredients. The second reason is money. Cooking from scratch is almost always much cheaper than buying takeaways, and the savings quickly add up. But for me, the most important reason is something else entirely. There is a deep satisfaction in creating something with your own hands and sharing it with people you love. A homemade meal is a kind of gift.\n\nYou don't need to be a professional chef or spend a fortune on fancy equipment. You just need a few basic recipes, some fresh ingredients and a willingness to make mistakes. My advice to any young person is simple: learn to cook a handful of dishes really well. It will save you money, keep you healthy, and give you a skill that will bring you and the people around you pleasure for the rest of your life.",
      p3q: { title: "Por qué importa cocinar (texto largo)", items: [
        mc("Why do fewer young people cook?", ["It's illegal.", "Fast food and ready meals are so available.", "It's boring."], 1, "'so much fast food and so many ready meals available'."),
        mc("What is the first reason cooking is worth it?", ["Fame.", "Health — you know what's in your food.", "Speed."], 1, "'you know exactly what goes into your food'."),
        mc("What do ready meals often contain?", ["Fresh ingredients.", "A lot of salt, sugar and fat.", "Nothing."], 1, "'a great deal of salt, sugar and fat'."),
        mc("What is the writer's most important reason?", ["Money.", "The satisfaction of creating and sharing food.", "Health."], 1, "'creating something with your own hands and sharing it'."),
        mc("What is the writer's advice?", ["Become a chef.", "Learn to cook a few dishes really well.", "Only buy takeaways."], 1, "'learn to cook a handful of dishes really well'."),
      ] },
      p4text: "MY GRANDMOTHER'S RECIPE\n\nWhen my grandmother passed away, she left me something more precious than any money: a small, stained notebook full of her handwritten recipes. (1)___ For a long time, I couldn't bring myself to open it.\n\nThen, one winter evening, feeling homesick for her, I decided to cook her famous soup. (2)___ The recipe was written in her own untidy handwriting, with little notes in the margins like 'add more love here'. As I chopped the vegetables and stirred the pot, I felt as though she were in the kitchen with me. (3)___ The smell that slowly filled the flat was the exact smell of my childhood.\n\nWhen I finally tasted it, I was transported straight back to her kitchen, thirty years ago. (4)___ It wasn't quite as good as hers — it never is — but it was close enough to bring tears to my eyes. Now, I cook that soup whenever I miss her, and I've started to add my own little notes to the recipe. (5)___ One day, I hope to pass that notebook, full of love, on to someone of my own.",
      p4options: [
        "It contained a lifetime of family meals.",                 // A -> gap 1
        "It felt like the right way to remember her.",              // B -> gap 2
        "Every step brought back a happy memory.",                  // C -> gap 3
        "That first spoonful was pure magic.",                      // D -> gap 4
        "I threw the old notebook straight in the bin.",            // E (extra)
        "That little book keeps her alive for me.",                 // F -> gap 5
        "I had never met my grandmother at all.",                   // G (extra)
        "The recipe was for a simple cheese sandwich.",             // H (extra)
      ],
      p4q: { title: "La receta de mi abuela (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: toda una vida de comidas familiares."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: la mejor forma de recordarla."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: cada paso traía un recuerdo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: la primera cucharada fue mágica."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese librito la mantiene viva para él."),
      ] },
      p5text: "Cooking at home has many benefits. A homemade meal usually contains much less (1)___ and sugar than a ready meal, and it's often cheaper too. You don't need many (2)___ to make something tasty — a few (3)___ ones are enough. If you're not sure how, follow a simple (4)___. Try to eat a (5)___ diet with plenty of vegetables. And here's a piece of (6)___: cook a big portion and save some for the next day.",
      p5q: { title: "Huecos con opciones (vocabulario/incontables)", items: [
        mc("Hueco 1", ["salt", "salts", "a salt", "the salts"], 0, "salt incontable → less salt."),
        mc("Hueco 2", ["ingredients", "ingredient", "recipe", "flavour"], 0, "'many ingredients' (contable)."),
        mc("Hueco 3", ["fresh", "freshly", "freshness", "fresher"], 0, "'a few fresh ones'."),
        mc("Hueco 4", ["recipe", "ingredient", "portion", "flavour"], 0, "'follow a simple recipe'."),
        mc("Hueco 5", ["balanced", "tasty", "fresh", "homemade"], 0, "'a balanced diet'."),
        mc("Hueco 6", ["advice", "advices", "an advice", "informations"], 0, "advice incontable → 'a piece of advice'."),
      ] },
      p6text: "Hi Sam,\nI've started cooking for myself and I love it! At first I didn't have much (1)___, so I followed a simple recipe with just a few (2)___. My grandmother left me a notebook full of her (3)___, and I cooked her famous soup — it was so (4)___! Homemade food has much less salt than ready meals, and it's cheaper too. Can I give you a piece of (5)___? Cook a big (6)___ and save some for the next day. It really works!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["time", "experience"], "'much time' (incontable)."),
        fb("Hueco 2", ["ingredients"], "'a few ingredients'."),
        fb("Hueco 3", ["recipes"], "'her recipes'."),
        fb("Hueco 4", ["tasty", "good"], "'so tasty'."),
        fb("Hueco 5", ["advice"], "'a piece of advice'."),
        fb("Hueco 6", ["portion"], "'cook a big portion'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere aprender a cocinar. Responde a su email (~100 palabras):\n· recomiéndale un plato fácil y sano,\n· dale un consejo de cocina (a piece of advice),\n· pregúntale qué comida le gustaría aprender a hacer.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it important to learn to cook?' con tu opinión.\n· RELATO: empieza con: 'My grandmother left me a notebook full of her recipes.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre una clase de cocina y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear information about a cookery class. Welcome to our Healthy Cooking class. The course lasts six weeks, with one lesson every Wednesday evening. Each week you'll learn to make a different balanced meal using fresh ingredients. The class costs fifty euros in total, which includes all the food. You don't need any experience, but please bring an apron. At the end of the course, you'll receive a booklet with all the recipes. Classes are small, with a maximum of ten students, so book early.", [
      fb("The course lasts ___ weeks.", ["six", "6"], "'lasts six weeks'."),
      fb("There's one lesson every ___ evening.", ["Wednesday"], "'every Wednesday evening'."),
      fb("The class costs ___ euros in total.", ["fifty", "50"], "'fifty euros'."),
      fb("You should bring an ___.", ["apron"], "'please bring an apron'."),
      fb("There's a maximum of ___ students.", ["ten", "10"], "'maximum of ten students'."),
    ]),

    ...speakingParts("la comida y cocinar", { p1: "si te gusta cocinar, tu plato favorito y si comes sano", p2: "una foto de personas cocinando o comiendo juntas", p3: "qué plato preparar juntos para una cena con amigos", p4: "la comida, cocinar en casa vs. comprar comida hecha y la comida sana" }),

    SUMMARY("Resumen del Día 48", [
      "Contables (many, a few, how many) vs incontables (much, a little, how much).",
      "Incontables ingleses clave: information, advice, news, furniture, luggage, bread. Contar: a piece/slice/glass of…",
      "Vocabulario de comida. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 49", "Escribe 4 frases con much/many/a piece of. Repasa las flashcards. Mañana: repaso de tiempos verbales en contexto (recta final)."),
  ],
};

// ───────────────────────── DÍA 49 ─────────────────────────
const DAY49 = {
  title: "Día 49 — Repaso de tiempos verbales en contexto · El deporte",
  description: "Integración de todos los tiempos (presente, pasado, futuro, perfectos) en un texto. Vocabulario de deporte. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Elegir el tiempo verbal correcto según el contexto.",
    summary: "Repaso de tiempos en contexto; el deporte; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["mezclar pasado simple y present perfect.", "'since/for'.", "presente para el futuro con 'will'."],
    reviewPrompts: ["¿'since' o 'for' con un periodo?", "¿'yesterday' → qué tiempo?"],
  },
  items: [
    TEXT("🔁 Recta final. Hoy INTEGRAMOS todos los tiempos verbales en contexto: elegir el correcto es clave en el examen. Vocabulario: el DEPORTE."),
    GRAMMAR("Repaso de tiempos verbales en contexto", `· PRESENT SIMPLE: rutinas/hechos: I play tennis every week.
· PRESENT CONTINUOUS: ahora/planes: I'm playing now. I'm meeting her tomorrow.
· PAST SIMPLE: acción terminada con tiempo pasado: I played yesterday.
· PAST CONTINUOUS: acción en curso en el pasado: I was playing when it rained.
· PRESENT PERFECT: experiencia/resultado/sin tiempo concreto: I've played there. (since/for/just/already/yet)
· PRESENT PERFECT CONTINUOUS: duración de una acción reciente: I've been playing for hours.
· PAST PERFECT: acción anterior a otra pasada: I had played before it started.
· FUTURO: will (decisión/predicción), going to (plan/evidencia), present continuous (arreglo).
Claves: since + momento / for + periodo; ago (past simple); already/yet (present perfect).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I have played yesterday → ✅ I played yesterday (tiempo concreto → past simple).\n· ❌ since two years → ✅ for two years / since 2022.\n· ❌ I will call you when I will arrive → ✅ …when I arrive (presente tras when/if).\n· 'ago' con past simple; 'for/since' con present perfect."),
    grammarEx("Gramática — Tiempos en contexto", "Elige o completa.", [
      fb("I ___ (play) tennis yesterday. (pasado concreto)", ["played"], "past simple."),
      fb("I ___ (know) her for ten years. (desde hace)", ["have known", "'ve known"], "present perfect + for."),
      fb("While I ___ (run), I fell over. (acción en curso)", ["was running"], "past continuous."),
      fb("I'm tired because I ___ ___ (run) all morning. (duración reciente)", ["have been running", "'ve been running"], "present perfect continuous."),
      mc("Choose:", ["I'll call you when I'll arrive.", "I'll call you when I arrive.", "I call you when I'll arrive."], 1, "presente tras 'when'."),
      fb("Look at those clouds! It ___ ___ (rain). (evidencia)", ["is going to rain"], "going to (predicción con evidencia)."),
      fb("By the time we arrived, the match ___ already ___ (start).", ["had", "started"], "past perfect."),
    ]),
    GRAMMAR("Vocabulario del día — El deporte", "Léxico de deporte (B1)."),
    deck("B1 S10D49 — El deporte", [
      ["team", "equipo", "She plays for the local team.", "sustantivo", "tiːm"],
      ["match", "partido", "We won the match 2–0.", "sustantivo", "mætʃ"],
      ["score", "marcar / marcador", "He scored the winning goal.", "verbo/sustantivo", "skɔː"],
      ["coach", "entrenador/a", "The coach was very proud.", "sustantivo", "kəʊtʃ"],
      ["train", "entrenar", "We train twice a week.", "verbo", "treɪn"],
      ["fit", "en forma", "You need to be fit for this sport.", "adjetivo", "fɪt"],
      ["compete", "competir", "She competes at a high level.", "verbo", "kəmˈpiːt"],
      ["beat", "ganar a / vencer", "We beat them easily.", "verbo", "biːt"],
      ["championship", "campeonato", "They won the championship.", "sustantivo", "ˈtʃæmpiənʃɪp"],
      ["give it your all", "darlo todo", "Just give it your all!", "expresión", "ˌɡɪv ɪt jɔːr ˈɔːl"],
    ]),
    vocabEx("Vocabulario — El deporte", "Elige la opción correcta.", [
      mc("The person who trains a team is the ___.", ["coach", "score", "team"], 0, "coach."),
      mc("To get a point or goal is to ___.", ["score", "beat", "train"], 0, "score."),
      mc("To defeat another team is to ___ them.", ["beat", "score", "compete"], 0, "beat."),
      mc("To practise a sport regularly is to ___.", ["train", "beat", "score"], 0, "train."),
      mc("A big competition to find the best is a ___.", ["championship", "match", "coach"], 0, "championship."),
      mc("To take part against others is to ___.", ["compete", "train", "score"], 0, "compete."),
    ]),

    ...readingParts({
      p1: { title: "Deporte y avisos", items: [
        mc("Sign: 'The match has been cancelled due to bad weather.'", ["No match today.", "The match is on.", "It's delayed."], 0, "'match has been cancelled'."),
        mc("Note: 'We've been training hard for the championship.'", ["They've practised a lot recently.", "They never train.", "No championship."], 0, "'been training hard'."),
        mc("Text: 'We beat the other team 3–1 yesterday!'", ["They won the match.", "They lost.", "It was a draw."], 0, "'beat the other team 3–1'."),
        mc("Poster: 'New members welcome — no experience needed.'", ["Anyone can join.", "Experts only.", "No new members."], 0, "'New members welcome'."),
        mc("Reminder: 'The coach wants everyone to give it their all.'", ["Try your hardest.", "Take it easy.", "Don't play."], 0, "'give it their all'."),
      ] },
      p2text: "FOUR SPORTS CLUBS\n\nA) The Running Club — for all levels; train together and compete in local races.\nB) The Football Team — competitive matches every weekend; you must be fit and committed.\nC) The Swimming Squad — early-morning training for people who want to compete seriously.\nD) The Yoga Group — a relaxed, non-competitive way to stay fit and reduce stress.",
      p2q: { title: "Emparejar personas y clubes", items: [
        mc("Nadia loves running and wants to enter races.", ["A", "B", "C", "D"], 0, "The Running Club."),
        mc("Ben is fit and loves competitive team sport.", ["A", "B", "C", "D"], 1, "The Football Team."),
        mc("Sara is a serious swimmer who wants to compete.", ["A", "B", "C", "D"], 2, "The Swimming Squad."),
        mc("Leo wants to keep fit without any competition.", ["A", "B", "C", "D"], 3, "The Yoga Group."),
        mc("A club with no competition, just relaxation.", ["A", "B", "C", "D"], 3, "D."),
      ] },
      p3text: "MORE THAN JUST A GAME\n\nWhen I was twelve, my father signed me up for the local football team. I wasn't happy about it. I was small, shy and, frankly, terrible at football. For the first few weeks, I dreaded every training session and spent most matches sitting on the bench. I have never wanted to give up on anything as much as I wanted to give up then.\n\nBut my coach, a patient man named Mr Owen, refused to let me quit. He told me that being good at a sport doesn't matter half as much as people think, and that the real prizes are the ones you can't see. At first, I didn't believe him. Slowly, though, I began to understand what he meant. Although I never became a great player, something more important was happening. I was learning to work with others, to keep going after a defeat, and to celebrate my teammates' successes as well as my own. By the end of the season, the shy boy who had been afraid of everything had made a group of loyal friends.\n\nThat was fifteen years ago. I stopped playing football long ago, and I couldn't tell you the score of a single match we played. But I have never forgotten the lessons that team taught me. The confidence, the friendships and the discipline have stayed with me all my life. My old coach was right: the real value of sport was never about winning or losing. It was about who I became by taking part. If you have the chance to join a team, take it. You might just discover, as I did, that it gives you far more than you ever expected.",
      p3q: { title: "Más que un simple juego (texto largo)", items: [
        mc("How did the writer feel at first?", ["Excited.", "He dreaded it and wanted to give up.", "Confident."], 1, "'I dreaded every training session… wanted to give up'."),
        mc("What did Mr Owen refuse to let him do?", ["Play.", "Quit.", "Train."], 1, "'refused to let me quit'."),
        mc("What did the writer learn from the team?", ["Only football skills.", "Teamwork, resilience, celebrating others.", "Nothing."], 1, "'work with others… keep going after a defeat…'"),
        mc("What can't the writer remember?", ["His coach.", "The score of any match.", "His friends."], 1, "'couldn't tell you the score of a single match'."),
        mc("What was the real value of sport?", ["Winning.", "Who he became by taking part.", "The trophies."], 1, "'about who I became by taking part'."),
      ] },
      p4text: "THE MATCH I'LL NEVER FORGET\n\nWe had been training all season for the championship final, and at last the day had arrived. (1)___ The whole town seemed to have come to watch, and I had never felt so nervous in my life.\n\nThe match was incredibly close. (2)___ With only five minutes left, the score was one–one, and my legs were aching. Then, our best player was injured and had to leave the pitch. (3)___ Suddenly, the coach turned to me — the substitute who had barely played all year — and sent me on.\n\nMy heart was pounding as I ran onto the pitch. (4)___ Then, in the very last minute, the ball came to me, right in front of the goal. Without even thinking, I kicked it as hard as I could. When I saw it hit the back of the net, the whole world seemed to explode with noise. We had won the championship. (5)___ I will remember that single moment for the rest of my life.",
      p4options: [
        "It was the biggest game we had ever played.",             // A -> gap 1
        "Neither team could manage to score.",                     // B -> gap 2
        "Things had suddenly become desperate.",                   // C -> gap 3
        "I was terrified of making a terrible mistake.",           // D -> gap 4
        "The match was cancelled before it began.",                // E (extra)
        "I had never felt such pure joy.",                         // F -> gap 5
        "I had scored a hundred goals that season.",               // G (extra)
        "Nobody in the town cared about the game.",                // H (extra)
      ],
      p4q: { title: "El partido que nunca olvidaré (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: el partido más importante."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: ningún equipo marcaba."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: la situación se puso desesperada."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: aterrado de fallar."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: nunca sintió tanta alegría."),
      ] },
      p5text: "I (1)___ football since I was a child, and I still love it. Last weekend, my team (2)___ an important match 2–0. We (3)___ been training really hard all season, so we were delighted. The coach told us that if we (4)___ our all, we could win the championship. Next month we (5)___ playing in the final. I'm so nervous, but I know that whatever happens, I (6)___ always be grateful for what this team has given me.",
      p5q: { title: "Huecos con opciones (tiempos verbales)", items: [
        mc("Hueco 1", ["have played", "played", "play", "am playing"], 0, "since → present perfect."),
        mc("Hueco 2", ["won", "have won", "win", "was winning"], 0, "'last weekend' → past simple."),
        mc("Hueco 3", ["had", "have", "has", "were"], 0, "'had been training' (past perfect continuous)."),
        mc("Hueco 4", ["gave", "give", "will give", "given"], 0, "'if we gave our all' (2º cond.) — o 'give'."),
        mc("Hueco 5", ["are", "will", "have", "were"], 0, "'we are playing' (arreglo futuro)."),
        mc("Hueco 6", ["will", "am", "have", "was"], 0, "'I will always be grateful'."),
      ] },
      p6text: "Hi Sam,\nGuess what — my football team (1)___ the championship last weekend! We had (2)___ training all season, so we were thrilled. In the final, the score (3)___ 1–1 with five minutes left, and I (4)___ waiting on the bench. Then the coach sent me on, and I scored the winning goal! I (5)___ never forget that moment. Next season we (6)___ going to defend our title. I'm so proud of my team. Do you play any sport?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["won"], "'won the championship last weekend'."),
        fb("Hueco 2", ["been"], "'had been training all season'."),
        fb("Hueco 3", ["was"], "'the score was 1–1'."),
        fb("Hueco 4", ["was"], "'I was waiting on the bench'."),
        fb("Hueco 5", ["will", "'ll"], "'I will never forget'."),
        fb("Hueco 6", ["are"], "'we are going to defend our title'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta si haces algún deporte. Responde a su email (~100 palabras):\n· cuenta qué deporte practicas o te gustaría practicar,\n· describe una vez que ganaste o perdiste (usa varios tiempos),\n· pregúntale por su deporte favorito.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is being part of a team good for young people?' con tu opinión.\n· RELATO: empieza con: 'With only five minutes left, the score was one–one.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con un joven futbolista y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young footballer, Marco. Interviewer: Marco, how long have you been playing football? Marco: Since I was six, so about twelve years now. Interviewer: What do you enjoy most about it? Marco: Being part of a team. We support each other, on and off the pitch. Interviewer: How often do you train? Marco: Four times a week, plus a match at the weekend. Interviewer: What was your best moment? Marco: Scoring the winning goal in last year's championship final. Interviewer: What advice would you give young players? Marco: Don't give up. Even when you're on the bench, keep training and your chance will come.", [
      mc("How long has Marco been playing football?", ["Two years.", "About twelve years.", "Six months."], 1, "'Since I was six… about twelve years'."),
      mc("What does he enjoy most?", ["Winning.", "Being part of a team.", "Training alone."], 1, "'Being part of a team'."),
      mc("How often does he train?", ["Once a week.", "Four times a week plus a weekend match.", "Every day."], 1, "'Four times a week, plus a match at the weekend'."),
      mc("What was his best moment?", ["His first match.", "Scoring the winning goal in the final.", "Meeting the coach."], 1, "'Scoring the winning goal in last year's championship final'."),
      mc("What is his advice?", ["Give up if you're on the bench.", "Don't give up; keep training.", "Only play if you're a star."], 1, "'Don't give up… keep training'."),
    ]),

    ...speakingParts("el deporte", { p1: "qué deporte haces o te gusta ver, y desde cuándo", p2: "una foto de personas haciendo deporte (un partido, entrenando, corriendo)", p3: "qué deporte probar juntos o qué actividad organizar para la clase", p4: "el deporte, si es bueno jugar en equipo y por qué es importante el ejercicio" }),

    SUMMARY("Resumen del Día 49", [
      "Elegir el tiempo por el contexto: present/past simple, continuous, present perfect (since/for), past perfect, futuros.",
      "Marcadores: ago (past simple), for/since (present perfect), presente tras when/if para el futuro.",
      "Vocabulario de deporte. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 50", "Escribe un párrafo sobre un partido usando 4 tiempos distintos. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 50 ─────────────────────────
const DAY50 = {
  title: "Día 50 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de make/let/allow, reflexivos, contables/incontables y tiempos verbales. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 10.",
  pedagogy: {
    objective: "Consolidar la gramática de la salud y el bienestar y los tiempos verbales.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 11."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 10 del B1. Consolidas make/let/allow/help, los reflexivos, los contables/incontables y los tiempos verbales. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 10", `1) make/let + obj + inf (sin to); allow/help + obj + to.
2) Reflexivos (myself…), recíprocos (each other), by myself (solo).
3) Contables (many/a few) vs incontables (much/a little; a piece of advice).
4) Tiempos verbales en contexto (present/past/perfect/future; for/since, ago).`),
    grammarEx("Repaso mixto de gramática — Semana 10", "Completa o elige.", [
      mc("Choose:", ["My mum made me to study.", "My mum made me study.", "My mum made me studying."], 1, "make + inf sin to."),
      mc("Choose:", ["They allowed me leave.", "They allowed me to leave.", "They allowed me leaving."], 1, "allow + to."),
      fb("Be careful, don't hurt ___. (tú)", ["yourself"], "yourself."),
      fb("They help ___ ___ with homework. (mutuamente)", ["each other"], "each other."),
      mc("Choose:", ["Can I give you an advice?", "Can I give you some advice?", "Can I give you advices?"], 1, "advice incontable."),
      fb("I ___ (live) here since 2020. (desde)", ["have lived", "'ve lived"], "present perfect + since."),
      fb("We ___ (win) the match yesterday.", ["won"], "past simple."),
      mc("Choose:", ["How much people came?", "How many people came?", "How many peoples came?"], 1, "people contable → how many."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 10", "Repasa los mazos (salud, independencia, comida, deporte)."),
    vocabEx("Repaso de vocabulario — Semana 10", "Elige la opción correcta.", [
      mc("A sign that shows you might be ill:", ["symptom", "treatment", "prescription"], 0, "symptom."),
      mc("To leave your family home to live alone:", ["move out", "cope", "rely on"], 0, "move out."),
      mc("The instructions for making a dish:", ["recipe", "ingredient", "portion"], 0, "recipe."),
      mc("The person who trains a team:", ["coach", "score", "team"], 0, "coach."),
      mc("To get better after being ill:", ["recover", "injure", "prescribe"], 0, "recover."),
      mc("To deal successfully with a difficult situation:", ["cope", "support", "rely"], 0, "cope."),
      mc("Food made at home, not bought:", ["homemade", "fresh", "tasty"], 0, "homemade."),
      mc("To defeat another team:", ["beat", "score", "compete"], 0, "beat."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Sign: 'Patients are not allowed to use phones here.'", ["No phones.", "Phones fine.", "Staff only."], 0, "'not allowed to use phones'."),
        mc("Note: 'I've taught myself to cook healthy meals.'", ["They learned to cook alone.", "Someone taught them.", "They can't cook."], 0, "'taught myself to cook'."),
        mc("Menu: 'All bread is homemade and fresh daily.'", ["Fresh, homemade bread.", "Frozen bread.", "No bread."], 0, "'homemade and fresh daily'."),
        mc("Text: 'We've been training hard for the final.'", ["Lots of recent training.", "No training.", "No final."], 0, "'been training hard'."),
        mc("Poster: 'A balanced diet helps you stay healthy.'", ["Good food keeps you healthy.", "Food is bad.", "No diet."], 0, "'helps you stay healthy'."),
      ] },
      p2text: "FOUR WELLBEING APPS\n\nA) FitTrack — sets you daily exercise goals and lets you record your progress.\nB) CookWell — hundreds of healthy recipes using just a few fresh ingredients.\nC) CalmMind — guided relaxation to help you cope with stress and sleep better.\nD) SoloLife — practical tips for young people learning to live independently.",
      p2q: { title: "Emparejar personas y apps", items: [
        mc("Nadia wants to track her exercise and progress.", ["A", "B", "C", "D"], 0, "FitTrack."),
        mc("Ben wants easy, healthy recipes.", ["A", "B", "C", "D"], 1, "CookWell."),
        mc("Sara feels stressed and can't sleep.", ["A", "B", "C", "D"], 2, "CalmMind."),
        mc("Leo has just moved out and needs life tips.", ["A", "B", "C", "D"], 3, "SoloLife."),
        mc("An app to help you relax and sleep.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "THE HABIT THAT CHANGED MY LIFE\n\nA year ago, I was unfit, stressed and unhappy. I ate badly, never exercised, and relied on takeaways for almost every meal. My doctor told me I needed to change, but I felt too tired and too busy to do anything about it. Then a friend gave me a simple piece of advice that quietly changed everything: 'Don't try to change your whole life. Just change one small thing, and let it grow.'\n\nSo that's what I did. I decided that, every single morning, I would go for a ten-minute walk before breakfast. It was such a small goal that I couldn't really fail. On cold, dark mornings, when I wanted to stay in bed, I reminded myself that it was only ten minutes. Slowly, that tiny habit began to change me. The walk woke me up and cleared my head. After a few weeks, ten minutes naturally became twenty. Then, because I was feeling more energetic, I started to cook fresh food instead of ordering takeaways. Because I was eating better, I slept better, and because I slept better, I felt less stressed.\n\nLooking back, I'm amazed at how one small change led to so many others. I never made myself follow a strict diet or an exhausting exercise plan; I simply let good habits build on each other, one at a time. If you feel overwhelmed by everything you think you 'should' be doing, my advice is the same as my friend's. Don't try to fix everything at once. Just choose one small, easy habit, and let it grow. You might be surprised where it leads.",
      p3q: { title: "El hábito que cambió mi vida (texto largo)", items: [
        mc("What was the writer like a year ago?", ["Fit and happy.", "Unfit, stressed and unhappy.", "Wealthy."], 1, "'unfit, stressed and unhappy'."),
        mc("What advice did the friend give?", ["Change everything.", "Change one small thing and let it grow.", "See a doctor."], 1, "'Just change one small thing, and let it grow'."),
        mc("What small goal did the writer set?", ["A marathon.", "A ten-minute morning walk.", "A strict diet."], 1, "'a ten-minute walk before breakfast'."),
        mc("What happened because the writer ate better?", ["Nothing.", "They slept better and felt less stressed.", "They got ill."], 1, "'I slept better… felt less stressed'."),
        mc("What is the writer's advice?", ["Fix everything at once.", "Choose one small easy habit and let it grow.", "Do nothing."], 1, "'choose one small, easy habit, and let it grow'."),
      ] },
      p4text: "THE PROMISE I MADE TO MYSELF\n\nOn my eighteenth birthday, I made myself a promise. (1)___ I had spent my whole childhood being looked after, and now I was determined to learn to take care of myself.\n\nThe timing wasn't easy, because I was also about to move out and start college. (2)___ For the first few weeks, I felt completely overwhelmed. I didn't know how to cook, budget or even do my own washing properly. There were nights when I sat alone in my tiny room and wondered whether I had made a huge mistake. (3)___ I missed my family terribly.\n\nBut I refused to give up on my promise. (4)___ I taught myself one new skill each week: how to make a simple meal, how to manage my money, how to fix a dripping tap. Each small victory made me a little more confident. A year later, I can look after myself completely, and I've never been prouder. (5)___ Keeping that promise to myself was the best thing I have ever done.",
      p4options: [
        "I would learn to be truly independent.",                   // A -> gap 1
        "Suddenly I had to do everything by myself.",               // B -> gap 2
        "It would have been so easy to phone home and give up.",    // C -> gap 3
        "One step at a time, I slowly learned.",                    // D -> gap 4
        "I decided to move back in with my parents.",               // E (extra)
        "That difficult year made me the person I am today.",       // F -> gap 5
        "I had always known how to look after myself.",             // G (extra)
        "My family did everything for me forever.",                 // H (extra)
      ],
      p4q: { title: "La promesa que me hice (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: aprendería a ser independiente."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: de repente tenía que hacerlo todo."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: habría sido fácil rendirse."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: paso a paso, fue aprendiendo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese año difícil le formó."),
      ] },
      p5text: "Looking after yourself is a skill you have to learn. When you move out, you have to cook for (1)___ and manage your own money. Don't try to change everything at once; just pick one small habit and (2)___ it grow. Eat a balanced diet with plenty of (3)___ vegetables, and try to stay fit. If you feel stressed, take time to relax. Here's a piece of (4)___: good friends still support (5)___ other, so don't be afraid to ask for help. Small changes, repeated daily, will (6)___ you feel much better.",
      p5q: { title: "Huecos con opciones (repaso)", items: [
        mc("Hueco 1", ["yourself", "myself", "each other", "themselves"], 0, "'cook for yourself'."),
        mc("Hueco 2", ["let", "make", "allow", "help"], 0, "'let it grow'."),
        mc("Hueco 3", ["fresh", "freshly", "freshness", "fresher"], 0, "'fresh vegetables'."),
        mc("Hueco 4", ["advice", "advices", "an advice", "informations"], 0, "advice incontable."),
        mc("Hueco 5", ["each", "one", "them", "your"], 0, "'support each other'."),
        mc("Hueco 6", ["make", "let", "allow", "cope"], 0, "'make you feel much better'."),
      ] },
      p6text: "Hi Sam,\nI've completely changed my life this year! A friend gave me a piece of (1)___: change just one small thing and (2)___ it grow. So I started walking ten minutes a day. That tiny habit made (3)___ feel so much better that I began cooking (4)___ food too. I've taught (5)___ to look after myself, and I've never been prouder. My friends and I still support (6)___ other, of course. Why don't you try changing one small habit too?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["advice"], "'a piece of advice'."),
        fb("Hueco 2", ["let"], "'let it grow'."),
        fb("Hueco 3", ["me"], "'made me feel better'."),
        fb("Hueco 4", ["fresh", "healthy"], "'cooking fresh/healthy food'."),
        fb("Hueco 5", ["myself"], "'taught myself to look after myself'."),
        fb("Hueco 6", ["each"], "'support each other'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a se siente estresado/a y con malos hábitos. Responde a su email (~100 palabras):\n· dale un consejo para empezar a cambiar (un solo hábito pequeño),\n· cuenta cómo tú mejoraste algún hábito,\n· anímale a cuidarse.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'What is the best way to build a healthy habit?' con tu opinión.\n· RELATO: empieza con: 'On my eighteenth birthday, I made myself a promise.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: How do you stay healthy? Man: I walk for ten minutes every morning. Two. Man: Who taught you to cook? Woman: Nobody — I taught myself. Three. Woman: Can I have some advice? Man: Of course, ask me anything. Four. Man: Did the doctor help? Woman: Yes, she made me rest and I recovered. Five. Man: Do you live alone? Woman: Yes, I moved out last year. Six. Woman: How was the match? Man: We beat them 2–0!", [
      mc("1. How does the man stay healthy?", ["A strict diet.", "A ten-minute morning walk.", "The gym."], 1, "'walk for ten minutes every morning'."),
      mc("2. Who taught the woman to cook?", ["Her mum.", "She taught herself.", "A class."], 1, "'I taught myself'."),
      mc("3. What does the woman want?", ["Money.", "Some advice.", "Food."], 1, "'Can I have some advice?'"),
      mc("4. Did the doctor help?", ["No.", "Yes, she made her rest and she recovered.", "A little."], 1, "'made me rest and I recovered'."),
      mc("5. Does the woman live alone?", ["No.", "Yes, she moved out last year.", "With family."], 1, "'I moved out last year'."),
      mc("6. How was the match?", ["They lost.", "They won 2–0.", "A draw."], 1, "'We beat them 2–0'."),
    ]),

    ...speakingParts("la salud, la independencia y el deporte", { p1: "cómo te cuidas, qué sabes hacer por ti mismo/a y si haces deporte", p2: "una foto de personas cuidándose, cocinando o haciendo deporte", p3: "decidir juntos un plan para llevar una vida más sana este mes", p4: "los hábitos saludables, la independencia y la importancia del ejercicio" }),

    SUMMARY("Resumen de la Semana 10 (B1)", [
      "Dominas make/let/allow/help, los reflexivos/recíprocos, los contables/incontables y los tiempos en contexto.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: ciencia, naturaleza y el mundo, con repaso de relativas y estructuras de opinión.",
    ]),
    INFO("Mini-simulacro de la Semana 10", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. ¡Ya te quedan solo 2 semanas! Repasa si no llegas."),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Salud y bienestar",
  description: "make/let/allow/help, pronombres reflexivos y recíprocos, contables/incontables y repaso de tiempos verbales. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
