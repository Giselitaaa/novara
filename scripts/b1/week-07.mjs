/**
 * B1 Preliminary · Semana 7 — "La vida diaria y los verbos con partícula".
 * Gramática: phrasal verbs (cotidianos y de movimiento), colocaciones con
 * make/do/have/take, y preposiciones dependientes (interested in, good at…).
 * Cada día, las 4 destrezas con el formato real del B1.
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I usually, every day, at the weekend, it depends"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, we could, why don't we, I'd rather, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 31 ─────────────────────────
const DAY31 = {
  title: "Día 31 — Verbos con partícula (cotidianos) · La rutina diaria",
  description: "Phrasal verbs de uso diario (get up, turn on/off, look after, find out…). Vocabulario de la rutina. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Entender y usar phrasal verbs frecuentes de la vida diaria.",
    summary: "Phrasal verbs cotidianos; la rutina; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["separar mal el objeto ('turn it on' ✓ / 'turn on it' ✗).", "traducir literal.", "olvidar la partícula."],
    reviewPrompts: ["¿'turn on the TV' o 'turn the TV on'? ¿y con pronombre?", "¿Qué significa 'find out'?"],
  },
  items: [
    TEXT("🔁 Semana 7. Hoy los PHRASAL VERBS cotidianos: verbo + partícula que cambia el significado. Vocabulario: la RUTINA DIARIA."),
    GRAMMAR("Verbos con partícula (phrasal verbs)", `Un phrasal verb = verbo + partícula (on/off/up/out…) con significado propio:
· get up (levantarse), wake up (despertarse), turn on/off (encender/apagar), put on / take off (ponerse/quitarse la ropa), look after (cuidar), find out (averiguar), give up (dejar), run out of (quedarse sin), throw away (tirar), tidy up (ordenar).
SEPARABLES: el objeto puede ir en medio o al final: Turn on the TV / Turn the TV on. Pero con PRONOMBRE va SIEMPRE en medio: Turn it on. ❌ Turn on it.
INSEPARABLES (con preposición): el objeto va detrás: look after the baby → look after it (no 'look it after').`),
    WARN("Errores típicos del hispanohablante", "· ❌ turn on it → ✅ turn it on (pronombre en medio).\n· ❌ look it after → ✅ look after it (inseparable).\n· ❌ 'I get up up at 7' → ✅ I get up at 7.\n· Aprende cada phrasal verb como una palabra nueva."),
    grammarEx("Gramática — Phrasal verbs cotidianos", "Completa o elige.", [
      fb("I ___ ___ at seven o'clock every morning. (me levanto)", ["get up"], "get up = levantarse."),
      fb("Please ___ ___ the light when you leave. (apagar)", ["turn off"], "turn off = apagar."),
      mc("Choose (pronoun):", ["Turn on it.", "Turn it on.", "Turn on it off."], 1, "pronombre en medio."),
      fb("Can you ___ ___ my dog while I'm away? (cuidar)", ["look after"], "look after = cuidar."),
      fb("I need to ___ ___ what time the train leaves. (averiguar)", ["find out"], "find out = averiguar."),
      mc("Choose:", ["We've run out milk.", "We've run out of milk.", "We've run of out milk."], 1, "run out OF."),
      fb("I always ___ ___ my room before school. (ordenar)", ["tidy up"], "tidy up = ordenar."),
    ]),
    GRAMMAR("Vocabulario del día — La rutina diaria", "Léxico de rutinas (B1)."),
    deck("B1 S7D31 — La rutina diaria", [
      ["get up", "levantarse", "I get up at seven.", "phrasal verb", "ɡet ˈʌp"],
      ["have a lie-in", "quedarse en la cama hasta tarde", "On Sundays I have a lie-in.", "colocación", "hæv ə ˈlaɪ ɪn"],
      ["get ready", "prepararse / arreglarse", "It takes me ten minutes to get ready.", "colocación", "ɡet ˈredi"],
      ["chores", "tareas domésticas", "I hate doing chores.", "sustantivo", "tʃɔːz"],
      ["commute", "desplazarse al trabajo", "I commute by train.", "verbo", "kəˈmjuːt"],
      ["routine", "rutina", "I have a fixed morning routine.", "sustantivo", "ruːˈtiːn"],
      ["run out of", "quedarse sin", "We've run out of coffee.", "phrasal verb", "rʌn ˈaʊt əv"],
      ["look after", "cuidar", "I look after my little brother.", "phrasal verb", "lʊk ˈɑːftə"],
      ["tidy up", "ordenar / recoger", "Please tidy up your desk.", "phrasal verb", "ˌtaɪdi ˈʌp"],
      ["nap", "siesta", "I sometimes take a short nap.", "sustantivo", "næp"],
    ]),
    vocabEx("Vocabulario — La rutina diaria", "Elige la opción correcta.", [
      mc("Jobs like cleaning and washing at home are ___.", ["chores", "routine", "nap"], 0, "chores."),
      mc("To travel to work regularly is to ___.", ["commute", "get up", "tidy up"], 0, "commute."),
      mc("Staying in bed late at the weekend is having a ___.", ["lie-in", "nap", "routine"], 0, "lie-in."),
      mc("When there's none left of something, you've ___ it.", ["run out of", "looked after", "tidied up"], 0, "run out of."),
      mc("To take care of a person or pet is to ___ them.", ["look after", "get up", "run out of"], 0, "look after."),
      mc("A short daytime sleep is a ___.", ["nap", "chore", "commute"], 0, "nap."),
    ]),

    ...readingParts({
      p1: { title: "Rutinas y avisos", items: [
        mc("Note: 'Please turn off all lights before you leave.'", ["Switch off the lights.", "Leave them on.", "No lights."], 0, "'turn off all lights'."),
        mc("Text: 'Can you look after the cat this weekend?'", ["A request to care for the cat.", "Give away the cat.", "No cat."], 0, "'look after the cat'."),
        mc("Message: 'We've run out of bread — can you buy some?'", ["Buy bread; there's none left.", "Bread is fine.", "Don't buy bread."], 0, "'run out of bread'."),
        mc("Sign: 'Staff must tidy up their area before closing.'", ["Clean your area before closing.", "Leave it messy.", "No cleaning."], 0, "'tidy up their area'."),
        mc("Note: 'I'll find out the times and let you know.'", ["They'll check the times.", "They know already.", "No times."], 0, "'find out the times'."),
      ] },
      p2text: "FOUR MORNING ROUTINES\n\nA) The Early Bird — gets up at 5am, exercises and enjoys a quiet start before everyone wakes up.\nB) The Snoozer — hits the alarm five times and always ends up rushing to get ready.\nC) The Multitasker — eats breakfast while checking emails and looking after the kids.\nD) The Planner — tidies up, makes a to-do list and never leaves the house unprepared.",
      p2q: { title: "Emparejar personas y rutinas", items: [
        mc("Nadia loves peaceful early mornings and exercise.", ["A", "B", "C", "D"], 0, "The Early Bird."),
        mc("Ben can never get out of bed and is always late.", ["A", "B", "C", "D"], 1, "The Snoozer."),
        mc("Sara does several things at once every morning.", ["A", "B", "C", "D"], 2, "The Multitasker."),
        mc("Leo always writes a to-do list and prepares carefully.", ["A", "B", "C", "D"], 3, "The Planner."),
        mc("Someone who rushes because they wake up late.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE POWER OF ROUTINE\n\nMany people think that having a daily routine sounds boring. They imagine a dull life where every day is exactly the same. But over the years, I've come to believe the opposite: a good routine doesn't limit your freedom — it actually creates it.\n\nWhen I was a student, my life was chaos. I would stay up late, get up at different times, and waste hours deciding what to do first. I was always tired and I never seemed to get anything done. Then a friend suggested I try building a simple morning routine. At first I found it hard, but slowly it became a habit. Now I get up at the same time, do a little exercise, and plan my day before I check my phone. The difference has been amazing. Because I don't waste energy on small decisions, I have far more energy for the things that really matter.\n\nOf course, a routine shouldn't become a prison. It's important to be flexible and to leave room for spontaneity and rest. But having a few fixed habits, especially at the start and end of the day, gives your life a comforting structure. Far from being boring, a good routine is what frees you to be creative, calm and productive. If your days feel out of control, my advice is simple: don't try to change everything at once. Just choose one small habit, and start tomorrow morning.",
      p3q: { title: "El poder de la rutina (texto largo)", items: [
        mc("What do many people think about routines?", ["They're freeing.", "They sound boring.", "They're impossible."], 1, "'having a daily routine sounds boring'."),
        mc("What was the writer's life like as a student?", ["Organised.", "Chaos, always tired.", "Boring."], 1, "'my life was chaos… always tired'."),
        mc("What did a friend suggest?", ["Sleeping more.", "Building a simple morning routine.", "Studying harder."], 1, "'try building a simple morning routine'."),
        mc("Why does the writer have more energy now?", ["More sleep.", "Not wasting energy on small decisions.", "Less work."], 1, "'I don't waste energy on small decisions'."),
        mc("What is the writer's advice?", ["Change everything at once.", "Choose one small habit and start tomorrow.", "Avoid routines."], 1, "'choose one small habit, and start tomorrow morning'."),
      ] },
      p4text: "THE MORNING THAT CHANGED MY DAYS\n\nA year ago, my mornings were a disaster. (1)___ I would wake up late, rush around the house, and leave without breakfast, already stressed before the day had even begun.\n\nEverything changed when I read an article about morning habits. (2)___ It suggested getting up just fifteen minutes earlier and using that time calmly. I was doubtful, but I decided to give it a try. The first few days were hard, because I love my sleep. (3)___ But by the end of the first week, something had shifted. Instead of rushing, I had time to make coffee, tidy up and plan my day.\n\nThose fifteen minutes have made an enormous difference. (4)___ I arrive at work feeling calm instead of frazzled, and I get far more done. My friends can't believe I've become a 'morning person'. (5)___ Sometimes the smallest change can transform your whole day.",
      p4options: [
        "I would hit the snooze button again and again.",           // A -> gap 1
        "The idea was surprisingly simple.",                        // B -> gap 2
        "Getting out of bed felt almost impossible.",               // C -> gap 3
        "The effect on the rest of my day was incredible.",         // D -> gap 4
        "I decided to stop sleeping altogether.",                   // E (extra)
        "That tiny new habit changed everything.",                  // F -> gap 5
        "I have never owned an alarm clock.",                       // G (extra)
        "Mornings had always been my favourite time.",             // H (extra)
      ],
      p4q: { title: "La mañana que cambió mis días (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: pulsaba el botón una y otra vez."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: la idea era muy sencilla."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: salir de la cama era imposible."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: el efecto en el día fue increíble."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese hábito lo cambió todo."),
      ] },
      p5text: "A good daily (1)___ can make life easier. Try to (2)___ up at the same time each day, even at weekends. Before you leave, remember to (3)___ off the lights and check you haven't (4)___ out of anything you need. If you live with others, share the (5)___ so nobody does all the cleaning. And don't forget to (6)___ up your space — a tidy room really does help you think clearly.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["routine", "chore", "nap", "commute"], 0, "'a good daily routine'."),
        mc("Hueco 2", ["get", "wake", "look", "run"], 0, "'get up at the same time'."),
        mc("Hueco 3", ["turn", "get", "look", "tidy"], 0, "'turn off the lights'."),
        mc("Hueco 4", ["run", "got", "looked", "tidied"], 0, "'haven't run out of anything'."),
        mc("Hueco 5", ["chores", "routines", "naps", "commutes"], 0, "'share the chores'."),
        mc("Hueco 6", ["tidy", "get", "run", "look"], 0, "'tidy up your space'."),
      ] },
      p6text: "Hi Sam,\nI've completely changed my mornings and I feel great! I used to (1)___ up late and rush everywhere. Now I (2)___ up fifteen minutes earlier and have time to (3)___ ready calmly. I always (4)___ off my phone the night before so I sleep better. This morning I nearly (5)___ out of coffee, but luckily I'd bought some! Honestly, a good (6)___ has changed my whole day. You should try it!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["get", "wake"], "'get up late'."),
        fb("Hueco 2", ["get", "wake"], "'get up fifteen minutes earlier'."),
        fb("Hueco 3", ["get"], "'get ready calmly'."),
        fb("Hueco 4", ["turn", "switch"], "'turn off my phone'."),
        fb("Hueco 5", ["ran"], "'nearly ran out of coffee'."),
        fb("Hueco 6", ["routine"], "'a good routine'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta cómo es un día normal para ti. Responde a su email (~100 palabras):\n· describe tu rutina diaria (usa phrasal verbs),\n· di qué parte del día te gusta más y por qué,\n· pregúntale por su rutina.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it better to be a morning person or a night owl?' con tu opinión.\n· RELATO: empieza con: 'The alarm went off, but I couldn't get out of bed.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: What time do you get up? Man: At half past six on weekdays. Two. Man: Can you turn off the TV? Woman: Sure, nobody's watching it. Three. Woman: Who looks after your dog? Man: My neighbour, when I'm at work. Four. Man: Have we got any milk? Woman: No, we've run out. Five. Man: Do you have a lie-in on Sundays? Woman: Yes, I stay in bed till ten. Six. Woman: How do you commute? Man: I cycle to work every day. Seven. Man: What are you doing? Woman: Just tidying up my room.", [
      mc("1. What time does the man get up on weekdays?", ["Six.", "Half past six.", "Seven."], 1, "'At half past six'."),
      mc("2. What does the woman do?", ["Turns the TV up.", "Turns the TV off.", "Watches TV."], 1, "'nobody's watching it' → turns it off."),
      mc("3. Who looks after the dog?", ["His mother.", "His neighbour.", "Nobody."], 1, "'My neighbour'."),
      mc("4. Have they got milk?", ["Yes.", "No, they've run out.", "A little."], 1, "'we've run out'."),
      mc("5. What does the woman do on Sundays?", ["Gets up early.", "Has a lie-in until ten.", "Works."], 1, "'I stay in bed till ten'."),
      mc("6. How does the man commute?", ["By bus.", "By bike.", "By car."], 1, "'I cycle to work'."),
      mc("7. What is the woman doing?", ["Cooking.", "Tidying her room.", "Sleeping."], 1, "'tidying up my room'."),
    ]),

    ...speakingParts("la rutina diaria", { p1: "cómo es un día normal para ti, a qué hora te levantas y qué haces", p2: "personas en su rutina diaria (desayunando, yendo al trabajo, haciendo tareas)", p3: "cómo repartir las tareas de casa entre varias personas", p4: "las rutinas, si son útiles o aburridas y cómo organizar bien el día" }),

    SUMMARY("Resumen del Día 31", [
      "Phrasal verbs cotidianos: get up, turn on/off, look after, find out, run out of, tidy up.",
      "Separables: pronombre SIEMPRE en medio (turn it on). Inseparables: objeto detrás (look after it).",
      "Vocabulario de la rutina. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 32", "Escribe tu rutina diaria con 5 phrasal verbs. Repasa las flashcards. Mañana: colocaciones con make/do/have/take."),
  ],
};

// ───────────────────────── DÍA 32 ─────────────────────────
const DAY32 = {
  title: "Día 32 — Colocaciones con make/do/have/take · El tiempo libre",
  description: "make/do/have/take + sustantivo (make a decision, do homework, have a shower, take a break). Vocabulario del tiempo libre. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Elegir el verbo correcto en colocaciones frecuentes.",
    summary: "Colocaciones make/do/have/take; tiempo libre; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'do a decision'.", "'make homework'.", "'take a shower' vs 'have a shower' (ambos)."],
    reviewPrompts: ["¿'make' o 'do' a decision?", "¿'make' o 'do' the housework?"],
  },
  items: [
    TEXT("🔁 Repaso: phrasal verbs. Hoy las COLOCACIONES con make/do/have/take: combinaciones fijas que hay que memorizar. Vocabulario: el TIEMPO LIBRE."),
    GRAMMAR("Colocaciones con make / do / have / take", `MAKE (crear/producir): make a decision, make a mistake, make friends, make a noise, make an effort, make plans, make dinner, make money.
DO (actividades/trabajo): do homework, do the housework, do the shopping, do exercise, do your best, do a course, do research.
HAVE (experimentar): have breakfast, have a shower, have a rest, have fun, have a party, have a look, have a good time.
TAKE (acciones): take a break, take a photo, take a taxi, take an exam, take part, take care, take your time.
⚠️ Se aprenden de memoria: 'make a decision' (no 'do'), 'do homework' (no 'make').`),
    WARN("Errores típicos del hispanohablante", "· ❌ do a decision → ✅ make a decision.\n· ❌ make homework → ✅ do homework.\n· ❌ make a party → ✅ have a party.\n· ❌ make sport → ✅ do exercise / play sport."),
    grammarEx("Gramática — Colocaciones", "Completa con make/do/have/take.", [
      fb("I need to ___ a decision soon.", ["make"], "make a decision."),
      fb("Have you ___ your homework yet?", ["done"], "do homework."),
      fb("I usually ___ a shower in the morning.", ["have"], "have a shower."),
      fb("Let's ___ a break for ten minutes.", ["take"], "take a break."),
      mc("Choose:", ["I made a mistake.", "I did a mistake.", "I took a mistake."], 0, "make a mistake."),
      fb("We're going to ___ a party on Saturday.", ["have"], "have a party."),
      fb("Can you ___ a photo of us?", ["take"], "take a photo."),
    ]),
    GRAMMAR("Vocabulario del día — El tiempo libre", "Léxico de ocio (B1)."),
    deck("B1 S7D32 — El tiempo libre", [
      ["hang out", "pasar el rato", "We hang out at the park.", "phrasal verb", "hæŋ ˈaʊt"],
      ["get together", "reunirse / quedar", "Let's get together on Friday.", "phrasal verb", "ɡet təˈɡeðə"],
      ["board game", "juego de mesa", "We played a board game.", "colocación", "ˈbɔːd ɡeɪm"],
      ["catch up", "ponerse al día", "We met to catch up.", "phrasal verb", "kætʃ ˈʌp"],
      ["take up", "empezar (afición)", "I took up chess last year.", "phrasal verb", "teɪk ˈʌp"],
      ["day off", "día libre", "I've got a day off tomorrow.", "colocación", "ˌdeɪ ˈɒf"],
      ["relax", "relajarse", "I relax by reading.", "verbo", "rɪˈlæks"],
      ["socialise", "socializar / hacer vida social", "I love socialising with friends.", "verbo", "ˈsəʊʃəlaɪz"],
      ["chill out", "descansar / relajarse", "I just want to chill out tonight.", "phrasal verb", "tʃɪl ˈaʊt"],
      ["get-together", "reunión / quedada", "We're having a small get-together.", "sustantivo", "ˈɡet təˌɡeðə"],
    ]),
    vocabEx("Vocabulario — El tiempo libre", "Elige la opción correcta.", [
      mc("To spend relaxed time with friends is to ___.", ["hang out", "take up", "commute"], 0, "hang out."),
      mc("To meet a friend and share your news is to ___.", ["catch up", "get up", "run out"], 0, "catch up."),
      mc("A day when you don't work is a ___.", ["day off", "board game", "routine"], 0, "day off."),
      mc("To relax and do nothing stressful is to ___.", ["chill out", "get up", "take part"], 0, "chill out."),
      mc("To spend time with other people socially is to ___.", ["socialise", "commute", "tidy up"], 0, "socialise."),
      mc("To start a new hobby is to ___.", ["take up", "run out", "hang out"], 0, "take up."),
    ]),

    ...readingParts({
      p1: { title: "Tiempo libre y avisos", items: [
        mc("Message: 'Let's get together on Saturday and catch up.'", ["Meet on Saturday to chat.", "No meeting.", "Cancel Saturday."], 0, "'get together… and catch up'."),
        mc("Poster: 'Board game night — every Friday, all welcome.'", ["A weekly board game event.", "No games.", "Only members."], 0, "'Board game night — every Friday'."),
        mc("Note: 'I've got a day off — fancy hanging out?'", ["An invitation to spend time together.", "They're working.", "A goodbye."], 0, "'day off — fancy hanging out?'"),
        mc("Sign: 'Please make no noise after 10pm.'", ["Be quiet after 10pm.", "Be loud.", "No rules."], 0, "'make no noise after 10pm'."),
        mc("Text: 'I just want to chill out this weekend.'", ["They want to relax.", "They want to work.", "They're busy."], 0, "'chill out this weekend'."),
      ] },
      p2text: "FOUR WAYS TO SPEND A DAY OFF\n\nA) The Adventurer's Day — hiking, cycling and exploring somewhere new and exciting.\nB) The Social Day — a get-together with friends, board games and good food.\nC) The Lazy Day — staying in, watching films and doing absolutely nothing.\nD) The Productive Day — finally doing all the chores and jobs you've been putting off.",
      p2q: { title: "Emparejar personas y días libres", items: [
        mc("Nadia loves being active and exploring new places.", ["A", "B", "C", "D"], 0, "The Adventurer's Day."),
        mc("Ben wants to relax with friends and games.", ["A", "B", "C", "D"], 1, "The Social Day."),
        mc("Sara just wants to do nothing at home.", ["A", "B", "C", "D"], 2, "The Lazy Day."),
        mc("Leo wants to catch up on jobs he's been avoiding.", ["A", "B", "C", "D"], 3, "The Productive Day."),
        mc("A day of doing nothing at all.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "THE ART OF DOING NOTHING\n\nIn our busy world, we are constantly told to be productive. From a young age, we learn that free time should be filled with useful activities: sports, clubs, courses and hobbies. But I want to make a case for something we've almost forgotten how to do — the simple art of doing nothing at all.\n\nWhen was the last time you sat quietly, with no phone, no music, and no task to complete? For most of us, the honest answer is 'I can't remember.' We feel guilty if we're not busy, as though rest were a waste of time. Yet doctors and psychologists increasingly tell us that our brains need these empty moments. It is often when we are relaxing, not concentrating, that our best ideas suddenly appear. Some of the world's greatest thinkers had their finest ideas while walking, resting or simply daydreaming.\n\nOf course, I'm not suggesting we should be lazy or never make an effort. Hard work has its place. But we should stop treating rest as something to feel guilty about. Taking a proper break isn't a reward you have to earn — it's a basic human need. So the next time you have a free afternoon, resist the urge to fill it. Do nothing, and do it well. You might be surprised by how much good it does you.",
      p3q: { title: "El arte de no hacer nada (texto largo)", items: [
        mc("What are we told from a young age?", ["To rest more.", "That free time should be filled with useful activities.", "To do nothing."], 1, "'free time should be filled with useful activities'."),
        mc("How do most people feel if they're not busy?", ["Happy.", "Guilty.", "Relaxed."], 1, "'We feel guilty if we're not busy'."),
        mc("When do our best ideas often appear?", ["When concentrating hard.", "When relaxing, not concentrating.", "Never."], 1, "'when we are relaxing, not concentrating'."),
        mc("What does the writer say about hard work?", ["It's useless.", "It has its place.", "It's the only thing."], 1, "'Hard work has its place'."),
        mc("What is the writer's advice for a free afternoon?", ["Fill it with tasks.", "Resist the urge to fill it; do nothing well.", "Work more."], 1, "'resist the urge to fill it. Do nothing'."),
      ] },
      p4text: "THE WEEKEND WITH NO PLANS\n\nFor years, every weekend of mine was completely full. (1)___ I made plans for Saturday, plans for Sunday, and even plans for the gaps in between. If I ever had a free hour, I felt anxious and unproductive.\n\nThen, one Friday, I was so exhausted that I cancelled everything. (2)___ For the first time in months, I had a whole weekend with absolutely nothing to do. At first, I didn't know what to do with myself. (3)___ I kept picking up my phone, looking for something to fill the time.\n\nBut slowly, something wonderful happened. I made a proper breakfast, went for a long walk, and read a book from start to finish. (4)___ By Sunday evening, I felt more rested than I had in years. That empty weekend taught me an important lesson. (5)___ Now I always leave one part of my weekend completely free, on purpose.",
      p4options: [
        "I was addicted to being busy.",                            // A -> gap 1
        "I decided not to organise a single thing.",                // B -> gap 2
        "The silence felt strange and uncomfortable.",              // C -> gap 3
        "I had forgotten how good it felt to simply relax.",        // D -> gap 4
        "I filled every minute with new activities.",               // E (extra)
        "Doing nothing, it turns out, is time well spent.",         // F -> gap 5
        "I have never been a busy person.",                         // G (extra)
        "The weekend was cancelled by bad weather.",                // H (extra)
      ],
      p4q: { title: "El fin de semana sin planes (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: era adicto a estar ocupado."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: decidió no organizar nada."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: el silencio era incómodo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: olvidó lo bien que sienta relajarse."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: no hacer nada es tiempo bien usado."),
      ] },
      p5text: "Free time is precious, so use it well. Some people like to (1)___ up a new hobby, while others prefer to (2)___ out with friends. It's also good to (3)___ a proper break and just relax. Don't feel guilty about doing nothing — everyone needs to (4)___ out sometimes. Whatever you choose, try to (5)___ an effort to switch off your phone. You'll (6)___ a much better time if you're really present.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["take", "make", "have", "do"], 0, "'take up a new hobby'."),
        mc("Hueco 2", ["hang", "take", "get", "make"], 0, "'hang out with friends'."),
        mc("Hueco 3", ["have", "make", "do", "get"], 0, "'have a proper break' (o take)."),
        mc("Hueco 4", ["chill", "hang", "catch", "take"], 0, "'chill out sometimes'."),
        mc("Hueco 5", ["make", "do", "have", "take"], 0, "'make an effort'."),
        mc("Hueco 6", ["have", "make", "do", "take"], 0, "'have a better time'."),
      ] },
      p6text: "Hi Sam,\nWhat are you up to this weekend? I've decided to (1)___ nothing for once! Usually I (2)___ so many plans that I never relax. But I'm exhausted, so this Saturday I just want to (3)___ out at home. Maybe I'll read a book or (4)___ a long walk. On Sunday, do you fancy getting (5)___ for a coffee to catch (6)___? It's been ages! Let me know.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["do"], "'do nothing'."),
        fb("Hueco 2", ["make", "have"], "'make so many plans'."),
        fb("Hueco 3", ["chill", "hang"], "'chill out at home'."),
        fb("Hueco 4", ["take", "have", "go"], "'take a long walk' (o go for)."),
        fb("Hueco 5", ["together"], "'getting together for a coffee'."),
        fb("Hueco 6", ["up"], "'catch up'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te propone quedar el fin de semana. Responde a su email (~100 palabras):\n· dile qué te apetece hacer y por qué,\n· propón un día y una hora,\n· pregúntale qué suele hacer en su tiempo libre.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How should we spend our free time?' con tu opinión.\n· RELATO: empieza con: 'For once, I had a whole weekend with no plans at all.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: What shall we do at the weekend? Man: Let's have a board game night. Two. Man: Have you made a decision? Woman: Not yet, it's really hard. Three. Woman: Are you free tomorrow? Man: Yes, I've got a day off. Four. Man: What do you do to relax? Woman: I just chill out and watch films. Five. Man: Did you do your homework? Woman: Yes, I finished it last night. Six. Woman: Shall we take a break? Man: Good idea, I'm exhausted.", [
      mc("1. What does the man suggest for the weekend?", ["A walk.", "A board game night.", "Shopping."], 1, "'a board game night'."),
      mc("2. Has the woman made a decision?", ["Yes.", "No, it's hard.", "She refuses."], 1, "'Not yet, it's really hard'."),
      mc("3. Is the man free tomorrow?", ["No.", "Yes, he has a day off.", "Only the morning."], 1, "'I've got a day off'."),
      mc("4. How does the woman relax?", ["Exercise.", "Chilling out and watching films.", "Cleaning."], 1, "'chill out and watch films'."),
      mc("5. Did the woman do her homework?", ["No.", "Yes, last night.", "She forgot."], 1, "'I finished it last night'."),
      mc("6. What do they decide to do?", ["Keep working.", "Take a break.", "Go home."], 1, "'take a break… I'm exhausted'."),
    ]),

    ...speakingParts("el tiempo libre", { p1: "qué haces en tu tiempo libre, con quién y con qué frecuencia", p2: "personas disfrutando del tiempo libre (jugando, relajándose, con amigos)", p3: "qué hacer juntos en un día libre: un plan activo o uno tranquilo", p4: "el tiempo libre, cómo desconectar y si estamos siempre demasiado ocupados" }),

    SUMMARY("Resumen del Día 32", [
      "make (una decisión, un error, planes), do (deberes, ejercicio, tareas), have (ducha, fiesta, descanso), take (descanso, foto, examen).",
      "Se memorizan como bloques fijos.",
      "Vocabulario del tiempo libre. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 33", "Escribe 6 frases, una con cada colocación (make/do/have/take + 2 cada uno... o 1). Repasa las flashcards. Mañana: phrasal verbs de viaje y movimiento."),
  ],
};

// ───────────────────────── DÍA 33 ─────────────────────────
const DAY33 = {
  title: "Día 33 — Verbos con partícula (viaje y movimiento) · Los viajes",
  description: "Phrasal verbs de viaje (set off, get on/off, check in, look forward to…). Vocabulario de viajes. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Usar phrasal verbs relacionados con viajar y moverse.",
    summary: "Phrasal verbs de viaje; los viajes; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'get in the bus' (→ get on).", "'look forward to go' (→ to going).", "'set off' vs 'set up'."],
    reviewPrompts: ["¿'get on' o 'get in' para un autobús?", "¿'look forward to' + qué forma?"],
  },
  items: [
    TEXT("🔁 Repaso: colocaciones. Hoy los PHRASAL VERBS de VIAJE y MOVIMIENTO. Vocabulario: los VIAJES."),
    GRAMMAR("Phrasal verbs de viaje y movimiento", `· set off / set out = ponerse en camino: We set off at dawn.
· get on / get off = subir/bajar de (bus, train, plane, bike): Get on the bus. Get off at the next stop.
· get in / get out of = subir/bajar de (car, taxi): Get in the car. Get out of the taxi.
· check in / check out = registrarse/dejar el hotel: We checked in at 3pm.
· take off / land = despegar/aterrizar: The plane took off late.
· look forward to + -ing = esperar con ilusión: I'm looking forward to seeing you.
· pick up / drop off = recoger/dejar (a alguien): I'll pick you up at eight.
· get away = escaparse (de vacaciones): We need to get away for a few days.`),
    WARN("Errores típicos del hispanohablante", "· ❌ get in the bus → ✅ get ON the bus (transporte público).\n· ❌ look forward to go → ✅ look forward to GOING (to + -ing).\n· ❌ The plane took up → ✅ The plane took off.\n· get in/out OF a car; get on/off a bus."),
    grammarEx("Gramática — Phrasal verbs de viaje", "Completa o elige.", [
      fb("We ___ ___ early to avoid the traffic. (nos pusimos en camino)", ["set off", "set out"], "set off/out."),
      mc("Choose:", ["Get in the bus.", "Get on the bus.", "Get up the bus."], 1, "get ON a bus."),
      fb("We need to ___ ___ at the hotel before 3pm. (registrarnos)", ["check in"], "check in."),
      fb("The plane ___ ___ on time. (despegó)", ["took off"], "take off."),
      mc("Choose:", ["I'm looking forward to see you.", "I'm looking forward to seeing you.", "I'm looking forward see you."], 1, "look forward to + -ing."),
      fb("I'll ___ you ___ from the airport at nine. (recoger)", ["pick", "up"], "pick up."),
      fb("Let's get ___ for the weekend — I need a break! (escaparnos)", ["away"], "get away."),
    ]),
    GRAMMAR("Vocabulario del día — Los viajes", "Léxico de viajes (B1)."),
    deck("B1 S7D33 — Los viajes", [
      ["luggage", "equipaje", "I only took hand luggage.", "sustantivo", "ˈlʌɡɪdʒ"],
      ["destination", "destino", "Our final destination was Rome.", "sustantivo", "ˌdestɪˈneɪʃn"],
      ["book", "reservar", "I booked the flights online.", "verbo", "bʊk"],
      ["delay", "retraso", "There was a two-hour delay.", "sustantivo", "dɪˈleɪ"],
      ["journey", "viaje / trayecto", "It was a long journey.", "sustantivo", "ˈdʒɜːni"],
      ["abroad", "en el extranjero", "I've never been abroad.", "adverbio", "əˈbrɔːd"],
      ["sightseeing", "turismo / visitar lugares", "We did a lot of sightseeing.", "sustantivo", "ˈsaɪtsiːɪŋ"],
      ["accommodation", "alojamiento", "The accommodation was excellent.", "sustantivo", "əˌkɒməˈdeɪʃn"],
      ["get away", "escaparse (de vacaciones)", "We got away for the weekend.", "phrasal verb", "ɡet əˈweɪ"],
      ["book in advance", "reservar con antelación", "Book in advance to save money.", "colocación", "bʊk ɪn ədˈvɑːns"],
    ]),
    vocabEx("Vocabulario — Los viajes", "Elige la opción correcta.", [
      mc("The bags you take on a trip are your ___.", ["luggage", "journey", "delay"], 0, "luggage."),
      mc("The place you're travelling to is your ___.", ["destination", "luggage", "delay"], 0, "destination."),
      mc("When your flight is late, there's a ___.", ["delay", "journey", "destination"], 0, "delay."),
      mc("Visiting interesting places as a tourist is ___.", ["sightseeing", "luggage", "delay"], 0, "sightseeing."),
      mc("Travelling to another country means going ___.", ["abroad", "away", "in advance"], 0, "abroad."),
      mc("The place where you stay on holiday is the ___.", ["accommodation", "destination", "luggage"], 0, "accommodation."),
    ]),

    ...readingParts({
      p1: { title: "Viajes y avisos", items: [
        mc("Sign: 'Passengers must check in two hours before the flight.'", ["Check in two hours early.", "No check-in.", "One hour before."], 0, "'check in two hours before'."),
        mc("Notice: 'Flight delayed by 90 minutes — we apologise.'", ["The flight is late.", "The flight is early.", "No flight."], 0, "'Flight delayed by 90 minutes'."),
        mc("Note: 'Book in advance for the best prices.'", ["Booking early is cheaper.", "Book late.", "No booking."], 0, "'Book in advance for the best prices'."),
        mc("Sign: 'Please get off the bus at the front.'", ["Leave the bus at the front.", "Get on at the back.", "Stay on."], 0, "'get off the bus at the front'."),
        mc("Text: 'I'm really looking forward to our trip!'", ["They're excited about the trip.", "They don't want to go.", "The trip is cancelled."], 0, "'looking forward to our trip'."),
      ] },
      p2text: "FOUR TYPES OF HOLIDAY\n\nA) The City Break — a short trip full of sightseeing, museums and great restaurants.\nB) The Beach Escape — relax by the sea with nothing to do but swim and read.\nC) The Adventure Trip — hiking, climbing and exploring wild, remote places.\nD) The Cultural Tour — travel between historic towns and learn about local history and food.",
      p2q: { title: "Emparejar personas y vacaciones", items: [
        mc("Nadia loves museums and exploring cities.", ["A", "B", "C", "D"], 0, "The City Break."),
        mc("Ben just wants to relax by the sea.", ["A", "B", "C", "D"], 1, "The Beach Escape."),
        mc("Sara loves hiking and wild landscapes.", ["A", "B", "C", "D"], 2, "The Adventure Trip."),
        mc("Leo is fascinated by history and local food.", ["A", "B", "C", "D"], 3, "The Cultural Tour."),
        mc("A holiday with nothing to do but swim and read.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "WHY TRAVEL CHANGES US\n\nThere is an old saying that travel is the only thing you can buy that makes you richer. I didn't understand what it meant until I took my first trip abroad alone, at the age of nineteen. That journey changed me more than any lesson I ever learned in a classroom.\n\nBefore I set off, I was quite a nervous person who rarely left my home town. Everything about the trip frightened me a little: getting on the wrong train, not speaking the language, staying in unfamiliar accommodation. And, of course, some things did go wrong. My flight was delayed, I lost my luggage for two days, and once I got completely lost in a huge, noisy city. But here's the surprising thing: solving those problems, all by myself, made me feel capable and confident in a way I never had before.\n\nMore importantly, travelling opened my eyes. I met people whose lives were completely different from mine, ate food I had never imagined, and saw with my own eyes places I had only read about. I came home with the same suitcase, but I was not the same person. I understood, for the first time, how big and varied the world really is, and how small my own worries had been. That, I think, is the true value of travel. It doesn't just show you new places; it shows you a new version of yourself.",
      p3q: { title: "Por qué viajar nos cambia (texto largo)", items: [
        mc("What was the writer like before the trip?", ["Confident.", "Nervous, rarely left home.", "Experienced."], 1, "'quite a nervous person who rarely left my home town'."),
        mc("What went wrong on the trip?", ["Nothing.", "Delayed flight, lost luggage, got lost.", "The trip was cancelled."], 1, "'flight was delayed… lost my luggage… got completely lost'."),
        mc("How did solving the problems make the writer feel?", ["Worse.", "Capable and confident.", "Angry."], 1, "'made me feel capable and confident'."),
        mc("What did travelling do to the writer's view of the world?", ["Nothing.", "Showed how big and varied the world is.", "Made it smaller."], 1, "'how big and varied the world really is'."),
        mc("What is the true value of travel, according to the writer?", ["New places only.", "It shows you a new version of yourself.", "Cheap holidays."], 1, "'it shows you a new version of yourself'."),
      ] },
      p4text: "THE TRIP THAT ALMOST DIDN'T HAPPEN\n\nMy best friend and I had been planning our first trip abroad for a whole year. (1)___ We had booked everything in advance and were counting down the days.\n\nThen, the night before, disaster struck. (2)___ When we arrived at the airport, exhausted and excited, we were told that our flight had been cancelled because of a strike. For a moment, we just stared at each other in shock. (3)___ It seemed that our long-awaited adventure was over before it had even begun.\n\nBut we refused to give up. (4)___ After hours of queuing and phone calls, we managed to book seats on a different flight, leaving the next morning. We slept on the airport floor, but we didn't care. When our plane finally took off, we cheered out loud. (5)___ Looking back, that difficult start became one of the best stories of the whole trip.",
      p4options: [
        "We were both looking forward to it more than anything.",    // A -> gap 1
        "Everything that could go wrong seemed to go wrong.",       // B -> gap 2
        "All our careful plans had fallen apart.",                  // C -> gap 3
        "We were determined to find another way.",                  // D -> gap 4
        "We decided to cancel the whole holiday.",                  // E (extra)
        "Sometimes the worst moments make the best memories.",      // F -> gap 5
        "Neither of us had ever wanted to travel.",                 // G (extra)
        "The flight left exactly on time as planned.",              // H (extra)
      ],
      p4q: { title: "El viaje que casi no ocurre (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: lo esperaban con muchas ganas."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: todo lo que podía salir mal, salió mal."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: sus planes se deshicieron."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: decididos a encontrar otra forma."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: los peores momentos dan los mejores recuerdos."),
      ] },
      p5text: "Travelling can be wonderful, but it helps to be prepared. Always (1)___ in advance to get the best prices, especially for your (2)___. Arrive early so you have time to (3)___ in for your flight. Pack light — you don't want too much (4)___ to carry. And remember that (5)___ like cancelled flights can happen, so stay calm. Most of all, (6)___ forward to the adventure: travel is one of life's greatest pleasures.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["book", "get", "set", "take"], 0, "'book in advance'."),
        mc("Hueco 2", ["accommodation", "luggage", "delay", "journey"], 0, "'your accommodation'."),
        mc("Hueco 3", ["check", "get", "set", "take"], 0, "'check in for your flight'."),
        mc("Hueco 4", ["luggage", "destination", "delay", "sightseeing"], 0, "'too much luggage'."),
        mc("Hueco 5", ["delays", "journeys", "destinations", "routes"], 0, "'delays like cancelled flights'."),
        mc("Hueco 6", ["look", "get", "set", "take"], 0, "'look forward to the adventure'."),
      ] },
      p6text: "Hi Sam,\nI'm so excited — I'm going abroad next month! I've already (1)___ the flights and the accommodation in advance. We're going to (2)___ off really early to catch the first plane. I just hope there aren't any (3)___! I'm really looking (4)___ to all the sightseeing. My cousin is going to (5)___ us up from the airport when we (6)___ off the plane. I can't wait! Have you been anywhere nice recently?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["booked"], "'booked the flights in advance'."),
        fb("Hueco 2", ["set"], "'set off really early'."),
        fb("Hueco 3", ["delays"], "'any delays'."),
        fb("Hueco 4", ["forward"], "'looking forward to'."),
        fb("Hueco 5", ["pick"], "'pick us up'."),
        fb("Hueco 6", ["get"], "'when we get off the plane'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por un viaje que hiciste. Responde a su email (~100 palabras):\n· cuenta adónde fuiste y cómo (usa phrasal verbs de viaje),\n· di qué fue lo mejor y si algo salió mal,\n· pregúntale por sus vacaciones favoritas.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why is travelling good for young people?' con tu opinión.\n· RELATO: empieza con: 'We arrived at the airport to find our flight had been cancelled.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha un anuncio en un aeropuerto y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear an announcement at an airport. Good afternoon, passengers. This is an announcement for flight BA245 to Madrid. Unfortunately, the flight has been delayed by forty minutes due to bad weather. Boarding will now begin at four thirty from gate number nine. Passengers are reminded that only one item of hand luggage is allowed on board. Please have your passport and boarding pass ready. We apologise for the delay and thank you for your patience.", [
      fb("The flight is going to ___.", ["Madrid"], "'flight BA245 to Madrid'."),
      fb("It has been delayed by ___ minutes.", ["forty", "40"], "'delayed by forty minutes'."),
      fb("Boarding will begin at ___.", ["four thirty", "4:30", "4.30"], "'boarding… at four thirty'."),
      fb("Departure is from gate number ___.", ["nine", "9"], "'from gate number nine'."),
      fb("Only ___ item of hand luggage is allowed.", ["one", "1"], "'only one item of hand luggage'."),
    ]),

    ...speakingParts("los viajes", { p1: "si te gusta viajar, adónde has ido y adónde te gustaría ir", p2: "personas viajando (en un aeropuerto, haciendo turismo, en la playa)", p3: "qué tipo de vacaciones elegir juntos: ciudad, playa o aventura", p4: "los viajes, por qué nos cambian y si es mejor viajar solo o acompañado" }),

    SUMMARY("Resumen del Día 33", [
      "Phrasal verbs de viaje: set off, get on/off (bus), get in/out of (car), check in, take off, look forward to + -ing, pick up, get away.",
      "get ON a bus, get IN a car. look forward to + gerundio.",
      "Vocabulario de viajes. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 34", "Escribe 5 frases con phrasal verbs de viaje. Repasa las flashcards. Mañana: preposiciones dependientes (interested in, good at, afraid of…)."),
  ],
};

// ───────────────────────── DÍA 34 ─────────────────────────
const DAY34 = {
  title: "Día 34 — Preposiciones dependientes · La personalidad y los gustos",
  description: "Adjetivos y verbos + preposición fija (interested in, good at, afraid of, depend on…). Vocabulario de gustos. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Usar la preposición correcta tras adjetivos y verbos frecuentes.",
    summary: "Preposiciones dependientes; personalidad/gustos; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'good in' (→ at).", "'depend of' (→ on).", "'interested for' (→ in)."],
    reviewPrompts: ["¿'good' + qué preposición?", "¿'afraid' + qué preposición?"],
  },
  items: [
    TEXT("🔁 Repaso: phrasal verbs de viaje. Hoy las PREPOSICIONES DEPENDIENTES: adjetivos y verbos que llevan SIEMPRE una preposición fija. Vocabulario: PERSONALIDAD y GUSTOS."),
    GRAMMAR("Preposiciones dependientes", `Muchos adjetivos y verbos van con una preposición fija. Tras preposición → verbo en -ing.
ADJETIVOS: good at, bad at, interested in, keen on, afraid/scared of, proud of, fond of, worried about, excited about, similar to, different from, responsible for, famous for.
VERBOS: depend on, rely on, believe in, belong to, apologise for, complain about, agree with, wait for, think about/of, listen to, look at, worry about, dream of/about.
· I'm interested in learning Chinese. She's good at drawing. It depends on the weather.
⚠️ Se memorizan. No traduzcas la preposición del español.`),
    WARN("Errores típicos del hispanohablante", "· ❌ good in maths → ✅ good AT maths.\n· ❌ depend of → ✅ depend ON.\n· ❌ interested for → ✅ interested IN.\n· ❌ afraid to spiders → ✅ afraid OF spiders.\n· ❌ listen music → ✅ listen TO music."),
    grammarEx("Gramática — Preposiciones dependientes", "Completa con la preposición correcta.", [
      fb("She's really good ___ maths.", ["at"], "good AT."),
      fb("I'm interested ___ learning to cook.", ["in"], "interested IN (+ -ing)."),
      fb("Are you afraid ___ spiders?", ["of"], "afraid OF."),
      fb("It depends ___ the weather.", ["on"], "depend ON."),
      fb("I'm really excited ___ the trip.", ["about"], "excited ABOUT."),
      mc("Choose:", ["I listen music.", "I listen to music.", "I listen at music."], 1, "listen TO."),
      fb("He apologised ___ being late.", ["for"], "apologise FOR."),
    ]),
    GRAMMAR("Vocabulario del día — Personalidad y gustos", "Léxico de carácter y aficiones (B1)."),
    deck("B1 S7D34 — Personalidad y gustos", [
      ["be into", "gustarle mucho", "I'm really into photography.", "colocación", "biː ˈɪntuː"],
      ["keen on", "aficionado a", "She's keen on hiking.", "colocación", "kiːn ɒn"],
      ["fond of", "aficionado a / al que le gusta", "I'm very fond of animals.", "colocación", "fɒnd əv"],
      ["can't stand", "no soportar", "I can't stand loud music.", "colocación", "kɑːnt ˈstænd"],
      ["prefer", "preferir", "I prefer tea to coffee.", "verbo", "prɪˈfɜː"],
      ["hobby", "afición", "Reading is my favourite hobby.", "sustantivo", "ˈhɒbi"],
      ["talented", "con talento", "She's a talented musician.", "adjetivo", "ˈtæləntɪd"],
      ["curious", "curioso/a", "I'm curious about everything.", "adjetivo", "ˈkjʊəriəs"],
      ["patient", "paciente", "You need to be patient with children.", "adjetivo", "ˈpeɪʃnt"],
      ["easy-going", "tranquilo/a / de trato fácil", "He's very easy-going.", "adjetivo", "ˌiːzi ˈɡəʊɪŋ"],
    ]),
    vocabEx("Vocabulario — Personalidad y gustos", "Elige la opción correcta.", [
      mc("If you like something a lot, you're ___ it.", ["keen on", "afraid of", "responsible for"], 0, "keen on."),
      mc("If you really dislike something, you ___ it.", ["can't stand", "are fond of", "are into"], 0, "can't stand."),
      mc("Someone who stays calm and relaxed is ___.", ["easy-going", "curious", "talented"], 0, "easy-going."),
      mc("Someone who wants to know about everything is ___.", ["curious", "patient", "keen"], 0, "curious."),
      mc("Someone with natural ability is ___.", ["talented", "easy-going", "fond"], 0, "talented."),
      mc("Someone who can wait calmly without getting angry is ___.", ["patient", "curious", "talented"], 0, "patient."),
    ]),

    ...readingParts({
      p1: { title: "Gustos y anuncios", items: [
        mc("Ad: 'Keen on photography? Join our club!'", ["An invitation for photography fans.", "No club.", "Experts only."], 0, "'Keen on photography? Join our club'."),
        mc("Note: 'It depends on the weather, so check before you come.'", ["It's weather-dependent.", "It never changes.", "No weather."], 0, "'It depends on the weather'."),
        mc("Text: 'I'm really into cooking these days.'", ["They enjoy cooking a lot.", "They hate cooking.", "They never cook."], 0, "'really into cooking'."),
        mc("Sign: 'Volunteers needed — must be good with children.'", ["They want people good with kids.", "No volunteers.", "Adults only."], 0, "'good with children'."),
        mc("Poster: 'Curious about the stars? Astronomy talk tonight.'", ["A talk for those curious about stars.", "No talk.", "For experts only."], 0, "'Curious about the stars?'"),
      ] },
      p2text: "FOUR CLUBS FOR EVERY PERSONALITY\n\nA) Debate Society — for confident people who are interested in ideas and love a good argument.\nB) Nature Group — for those who are fond of the outdoors and keen on protecting the environment.\nC) Art Studio — for creative, patient people who are into painting and design.\nD) Chess Club — for logical thinkers who are good at solving problems and enjoy a challenge.",
      p2q: { title: "Emparejar personas y clubes", items: [
        mc("Nadia is confident and loves discussing ideas.", ["A", "B", "C", "D"], 0, "Debate Society."),
        mc("Ben is fond of nature and cares about the planet.", ["A", "B", "C", "D"], 1, "Nature Group."),
        mc("Sara is creative and into painting.", ["A", "B", "C", "D"], 2, "Art Studio."),
        mc("Leo is logical and good at solving problems.", ["A", "B", "C", "D"], 3, "Chess Club."),
        mc("A club for people who love arguing about ideas.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "FINDING WHAT YOU'RE GOOD AT\n\nWhen I was young, I was convinced I wasn't good at anything. My brother was brilliant at sport, my sister was talented at music, but I seemed to be average at everything. I remember feeling worried about my future and jealous of people who clearly had a special gift. It took me years to understand something important: everyone is good at something, but not everyone has discovered what it is yet.\n\nThe mistake I made was to compare myself with others and to give up on anything I couldn't do immediately. I was interested in writing, for example, but my first attempts were terrible, so I stopped. What I didn't realise was that being good at something usually comes from being interested in it and practising, not from magic talent. The people I admired hadn't been born brilliant; they had simply started earlier and kept going.\n\nEverything changed when I stopped worrying about being the best and focused instead on what I actually enjoyed. I went back to writing, not to impress anyone, but because I was curious and it made me happy. Slowly, without even noticing, I improved. Today, writing is the thing I'm most proud of. My advice to any young person is this: don't wait to feel talented before you start. Choose something you're genuinely interested in, be patient with yourself, and give it time. Your ability will grow with your effort.",
      p3q: { title: "Descubrir en qué eres bueno (texto largo)", items: [
        mc("What was the writer convinced of as a child?", ["That they were gifted.", "That they weren't good at anything.", "That talent was magic."], 1, "'I wasn't good at anything'."),
        mc("What mistake did the writer make?", ["Practising too much.", "Comparing themselves and giving up quickly.", "Choosing writing."], 1, "'compare myself with others and… give up'."),
        mc("Where does being good at something usually come from?", ["Magic talent.", "Interest and practice.", "Being born brilliant."], 1, "'being interested in it and practising, not from magic talent'."),
        mc("What changed everything for the writer?", ["More comparing.", "Focusing on what they enjoyed.", "Giving up writing."], 1, "'focused instead on what I actually enjoyed'."),
        mc("What is the writer's advice?", ["Wait to feel talented.", "Choose something you like, be patient, give it time.", "Only do easy things."], 1, "'Choose something you're genuinely interested in, be patient… give it time'."),
      ] },
      p4text: "THE HOBBY I ALMOST GAVE UP\n\nThree years ago, I decided to learn the guitar. (1)___ I had always been fond of music, and I dreamed of playing my favourite songs.\n\nThe reality, however, was painful. (2)___ My fingers hurt, the sounds I made were awful, and after a month I still couldn't play a single proper tune. I began to think I simply wasn't good at it. (3)___ The guitar sat in the corner of my room, gathering dust, and I felt like a failure.\n\nThen, one day, I watched an interview with a famous musician. She said that when she started, she had been terrible too, and that the only difference between people who succeed and people who quit is that the successful ones keep going. (4)___ Her words gave me the push I needed. I picked up the guitar again and promised to practise just ten minutes a day. (5)___ Three years later, I can play dozens of songs. I'm so glad I didn't give up on something I love.",
      p4options: [
        "I was really excited about my new hobby.",                 // A -> gap 1
        "Learning was far harder than I had expected.",             // B -> gap 2
        "I was ready to give up completely.",                       // C -> gap 3
        "Suddenly, I saw my failures differently.",                 // D -> gap 4
        "I sold the guitar the very next day.",                     // E (extra)
        "That small, daily habit made all the difference.",         // F -> gap 5
        "I had never been interested in music at all.",             // G (extra)
        "I could play perfectly within a week.",                    // H (extra)
      ],
      p4q: { title: "La afición que casi abandono (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: ilusionado con su nueva afición."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: aprender fue más difícil de lo esperado."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: a punto de rendirse."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: vio sus fracasos de otra forma."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese hábito diario marcó la diferencia."),
      ] },
      p5text: "Everyone is good (1)___ something, but you have to find out what. Don't be afraid (2)___ trying new things. If you're interested (3)___ music, take up an instrument; if you're keen (4)___ sport, join a team. Success doesn't depend (5)___ magic talent — it depends on practice and patience. Choose a hobby you're really (6)___ into, and stick with it. Your ability will grow with time.",
      p5q: { title: "Huecos con opciones (preposiciones)", items: [
        mc("Hueco 1", ["at", "in", "on", "for"], 0, "'good at something'."),
        mc("Hueco 2", ["of", "for", "about", "to"], 0, "'afraid of trying'."),
        mc("Hueco 3", ["in", "on", "at", "for"], 0, "'interested in music'."),
        mc("Hueco 4", ["on", "in", "at", "of"], 0, "'keen on sport'."),
        mc("Hueco 5", ["on", "of", "in", "at"], 0, "'depend on magic talent'."),
        mc("Hueco 6", ["into", "on", "at", "for"], 0, "'really into'."),
      ] },
      p6text: "Hi Sam,\nI've finally found a hobby I'm really into — playing the guitar! At first I was terrible and afraid (1)___ giving up, but I've learned that being good (2)___ something depends (3)___ practice, not magic talent. I'm not naturally (4)___ at music, but I'm so keen (5)___ it that I practise ten minutes every day. I'm really proud (6)___ how much I've improved. What are you interested in these days?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["of"], "'afraid of giving up'."),
        fb("Hueco 2", ["at"], "'good at something'."),
        fb("Hueco 3", ["on"], "'depends on practice'."),
        fb("Hueco 4", ["talented", "good"], "'naturally talented at music' (o good)."),
        fb("Hueco 5", ["on"], "'keen on it'."),
        fb("Hueco 6", ["of"], "'proud of how much I've improved'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus gustos y tu carácter. Responde a su email (~100 palabras):\n· di en qué eres bueno/a y qué te interesa (usa preposiciones),\n· describe tu personalidad,\n· pregúntale por sus aficiones.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is talent more important than hard work?' con tu opinión.\n· RELATO: empieza con: 'I was sure I would never be good at it.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con una joven artista y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young artist, Ella. Interviewer: Ella, when did you get interested in art? Interviewer... Ella: When I was about ten. I was always curious about how things were made. Interviewer: Were you talented from the start? Ella: Not at all! My early drawings were terrible. Being good at art depends on practice, not luck. Interviewer: What are you most proud of? Ella: A painting I did last year that won a prize. Interviewer: What advice would you give? Ella: Don't be afraid of making mistakes. That's how you learn. Interviewer: What are you working on now? Ella: I'm really into painting portraits at the moment.", [
      mc("When did Ella get interested in art?", ["At twenty.", "At about ten.", "As a baby."], 1, "'about ten'."),
      mc("Was she talented from the start?", ["Yes.", "No, her early drawings were terrible.", "She never drew."], 1, "'Not at all! My early drawings were terrible'."),
      mc("What does being good at art depend on?", ["Luck.", "Practice.", "Money."], 1, "'depends on practice, not luck'."),
      mc("What is she most proud of?", ["A prize-winning painting.", "A drawing from childhood.", "Nothing."], 1, "'A painting… that won a prize'."),
      mc("What is her advice?", ["Avoid mistakes.", "Don't be afraid of making mistakes.", "Give up early."], 1, "'Don't be afraid of making mistakes'."),
    ]),

    ...speakingParts("la personalidad y los gustos", { p1: "cómo eres, en qué eres bueno/a y qué te interesa", p2: "personas con distintas aficiones y personalidades", p3: "qué actividad nueva probar según vuestros gustos y personalidad", p4: "el talento y el esfuerzo, descubrir en qué somos buenos y probar cosas nuevas" }),

    SUMMARY("Resumen del Día 34", [
      "Preposiciones dependientes: good at, interested in, afraid of, keen on, depend on, apologise for, listen to…",
      "Tras preposición → verbo en -ing. Se memorizan.",
      "Vocabulario de personalidad y gustos. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 35", "Escribe 6 frases con adjetivo/verbo + preposición sobre ti. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 35 ─────────────────────────
const DAY35 = {
  title: "Día 35 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de phrasal verbs, colocaciones y preposiciones. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 7.",
  pedagogy: {
    objective: "Consolidar phrasal verbs, colocaciones y preposiciones dependientes.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 8."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 7 del B1. Consolidas phrasal verbs, colocaciones (make/do/have/take) y preposiciones dependientes. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 7", `1) Phrasal verbs cotidianos (get up, turn off, look after) y de viaje (set off, get on/off, check in, look forward to + -ing).
2) Colocaciones: make (decision/mistake), do (homework/exercise), have (shower/break), take (break/photo).
3) Preposiciones dependientes: good at, interested in, afraid of, depend on, listen to.`),
    grammarEx("Repaso mixto de gramática — Semana 7", "Completa o elige.", [
      fb("I ___ ___ at seven every day. (me levanto)", ["get up"], "get up."),
      mc("Choose (pronoun):", ["Turn on it.", "Turn it on.", "Turn on it."], 1, "pronombre en medio."),
      fb("I need to ___ a decision.", ["make"], "make a decision."),
      fb("Have you ___ your homework?", ["done"], "do homework."),
      fb("We ___ ___ early to catch the plane. (nos pusimos en camino)", ["set off", "set out"], "set off."),
      mc("Choose:", ["I'm looking forward to see you.", "I'm looking forward to seeing you.", "I look forward see you."], 1, "look forward to + -ing."),
      fb("She's very good ___ maths.", ["at"], "good AT."),
      fb("It depends ___ the weather.", ["on"], "depend ON."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 7", "Repasa los mazos (rutina, tiempo libre, viajes, personalidad)."),
    vocabEx("Repaso de vocabulario — Semana 7", "Elige la opción correcta.", [
      mc("Jobs like cleaning at home:", ["chores", "routine", "nap"], 0, "chores."),
      mc("To relax and do nothing stressful:", ["chill out", "get up", "take part"], 0, "chill out."),
      mc("The bags you take on a trip:", ["luggage", "journey", "delay"], 0, "luggage."),
      mc("Someone who stays calm and relaxed:", ["easy-going", "curious", "talented"], 0, "easy-going."),
      mc("To travel to work regularly:", ["commute", "get up", "tidy up"], 0, "commute."),
      mc("When your flight is late:", ["delay", "journey", "destination"], 0, "delay."),
      mc("To meet a friend and share your news:", ["catch up", "get up", "run out"], 0, "catch up."),
      mc("If you really dislike something, you ___ it:", ["can't stand", "are fond of", "are into"], 0, "can't stand."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Note: 'Please turn off the lights and tidy up before you leave.'", ["Switch off lights and clean up.", "Leave a mess.", "No rules."], 0, "'turn off… and tidy up'."),
        mc("Message: 'Let's get together and catch up soon!'", ["Meet and share news.", "No meeting.", "Cancel plans."], 0, "'get together and catch up'."),
        mc("Sign: 'Check in two hours before your flight.'", ["Check in two hours early.", "No check-in.", "One hour."], 0, "'Check in two hours before'."),
        mc("Ad: 'Keen on nature? Join our weekend walks.'", ["For people who love nature.", "No walks.", "Experts only."], 0, "'Keen on nature? Join our… walks'."),
        mc("Text: 'It depends on the weather, so bring a coat.'", ["It's weather-dependent.", "It never rains.", "No coat."], 0, "'It depends on the weather'."),
      ] },
      p2text: "FOUR APPS TO ORGANISE YOUR LIFE\n\nA) RiseUp — a gentle alarm that helps you get up and start a calm morning routine.\nB) TripSorted — keeps all your travel bookings, so you never miss a check-in again.\nC) ChoreShare — helps families share the housework fairly, so nobody does it all.\nD) FreeTime — reminds you to take breaks and actually relax during a busy day.",
      p2q: { title: "Emparejar personas y apps", items: [
        mc("Nadia struggles to get out of bed calmly.", ["A", "B", "C", "D"], 0, "RiseUp."),
        mc("Ben always forgets his flight and hotel details.", ["A", "B", "C", "D"], 1, "TripSorted."),
        mc("Sara feels she does all the housework at home.", ["A", "B", "C", "D"], 2, "ChoreShare."),
        mc("Leo never takes a break and feels burnt out.", ["A", "B", "C", "D"], 3, "FreeTime."),
        mc("An app to share the chores fairly.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "THE MYTH OF THE PERFECT MORNING\n\nOpen any magazine or watch any video about success, and you'll be told the same thing: successful people have the perfect morning routine. They get up at five o'clock, do an hour of exercise, meditate, write in a journal, eat a healthy breakfast and read a book — all before most of us have even turned off our alarm. For years, I felt like a failure because I couldn't do any of this.\n\nThe truth, which took me a long time to learn, is that there is no single perfect routine. What works brilliantly for one person can be a disaster for another. My friend Marco is a natural early bird; he loves getting up before dawn. But I am the opposite. When I forced myself to get up at five, I was so tired by the afternoon that I got nothing done. I had copied someone else's routine instead of finding my own.\n\nSo I stopped following other people's rules and started paying attention to myself. I discovered that I think most clearly late in the evening, so that's when I now do my most important work. I still have a simple morning routine, but it starts at a reasonable hour and suits me. The lesson is this: by all means, learn from others, but don't copy them blindly. The best routine isn't the one in the magazine — it's the one that actually works for you.",
      p3q: { title: "El mito de la mañana perfecta (texto largo)", items: [
        mc("What are we often told about successful people?", ["They sleep late.", "They have a perfect morning routine.", "They don't work."], 1, "'successful people have the perfect morning routine'."),
        mc("Why did the writer feel like a failure?", ["They were lazy.", "They couldn't do the 'perfect' routine.", "They got up at five."], 1, "'I felt like a failure because I couldn't do any of this'."),
        mc("What is the truth the writer learned?", ["There's one perfect routine.", "There is no single perfect routine.", "Early rising is best."], 1, "'there is no single perfect routine'."),
        mc("When does the writer think most clearly?", ["At five am.", "Late in the evening.", "At noon."], 1, "'I think most clearly late in the evening'."),
        mc("What is the writer's advice?", ["Copy others blindly.", "Learn from others but find what works for you.", "Never have a routine."], 1, "'don't copy them blindly… the one that actually works for you'."),
      ] },
      p4text: "THE TRIP THAT TAUGHT ME TO SLOW DOWN\n\nLast summer, I planned the busiest holiday of my life. (1)___ I wanted to see everything, so I filled every single day with sightseeing, tours and activities.\n\nBy the third day, I was exhausted. (2)___ Instead of enjoying the beautiful places I'd travelled so far to see, I was rushing through them, already worrying about the next thing on my list. I was so busy taking photos that I wasn't really looking at anything. (3)___ My holiday had become more stressful than my normal life.\n\nOn the fourth morning, something changed. (4)___ I cancelled all my plans, sat in a small café, and simply watched the world go by for two hours. It was the best morning of the whole trip. For the first time, I actually felt like I was on holiday. (5)___ Now, whenever I travel, I always leave plenty of free time. The best moments, I've learned, can't be planned.",
      p4options: [
        "I was determined not to waste a single minute.",           // A -> gap 1
        "I had no energy left to enjoy anything.",                  // B -> gap 2
        "I realised I was missing the whole point of travelling.",  // C -> gap 3
        "I decided to do the opposite of everything I'd planned.",  // D -> gap 4
        "I added ten more activities to my list.",                  // E (extra)
        "Slowing down turned out to be the best decision of all.",  // F -> gap 5
        "I had never wanted to go on holiday.",                     // G (extra)
        "The trip was cancelled before it began.",                  // H (extra)
      ],
      p4q: { title: "El viaje que me enseñó a ir despacio (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: no quería perder ni un minuto."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: sin energía para disfrutar."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: se perdía el sentido de viajar."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: hizo lo contrario de lo planeado."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ir despacio fue la mejor decisión."),
      ] },
      p5text: "A balanced life is about more than being busy. Have a morning (1)___ that suits you, but don't copy other people (2)___. Make time to (3)___ out with friends and (4)___ up on their news. When you travel, don't try to (5)___ everything — leave time to relax. And remember to (6)___ breaks during a busy day. The happiest people know when to slow down.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["routine", "chore", "delay", "nap"], 0, "'a morning routine'."),
        mc("Hueco 2", ["blindly", "carefully", "slowly", "quietly"], 0, "'copy others blindly'."),
        mc("Hueco 3", ["hang", "get", "take", "make"], 0, "'hang out with friends'."),
        mc("Hueco 4", ["catch", "get", "take", "look"], 0, "'catch up on their news'."),
        mc("Hueco 5", ["see", "do", "make", "get"], 0, "'try to see everything'."),
        mc("Hueco 6", ["take", "make", "do", "have"], 0, "'take breaks' (o have)."),
      ] },
      p6text: "Hi Sam,\nI've learned an important lesson about holidays! Last summer I (1)___ off every day with a huge list of things to do. But by day three I had (2)___ out of energy and wasn't enjoying anything. So I cancelled my plans and just (3)___ out in a café for two hours. It was the best morning of the trip! Now I always leave free time when I travel. I'm really looking (4)___ to my next trip — I'm going to (5)___ it slowly this time. It all depends (6)___ finding a balance!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["set"], "'set off every day'."),
        fb("Hueco 2", ["run"], "'run out of energy'."),
        fb("Hueco 3", ["chilled", "hung"], "'chilled out in a café'."),
        fb("Hueco 4", ["forward"], "'looking forward to'."),
        fb("Hueco 5", ["take"], "'take it slowly'."),
        fb("Hueco 6", ["on"], "'depends on finding a balance'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a está siempre demasiado ocupado/a. Responde a su email (~100 palabras):\n· dale un consejo para equilibrar su vida,\n· cuenta cómo organizas tú tu tiempo,\n· pregúntale qué hace para relajarse.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Are we all too busy these days?' con tu opinión.\n· RELATO: empieza con: 'I had planned every single minute of my holiday.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: What time do you get up? Man: Early — I love a calm morning. Two. Man: Have you made a decision about the trip? Woman: Yes, we're going to the coast. Three. Woman: What are you into these days? Man: I'm really keen on photography. Four. Man: Did you check in online? Woman: Yes, so we can go straight to the gate. Five. Man: Fancy hanging out later? Woman: Sure, let's catch up over coffee. Six. Woman: Are you good at cooking? Man: Not really, but I'm learning.", [
      mc("1. Why does the man get up early?", ["For work.", "He loves a calm morning.", "No reason."], 1, "'I love a calm morning'."),
      mc("2. Where are they going?", ["The mountains.", "The coast.", "The city."], 1, "'we're going to the coast'."),
      mc("3. What is the man keen on?", ["Cooking.", "Photography.", "Sport."], 1, "'really keen on photography'."),
      mc("4. Why did they check in online?", ["To save money.", "To go straight to the gate.", "For a better seat."], 1, "'so we can go straight to the gate'."),
      mc("5. What will they do later?", ["Work.", "Hang out and catch up over coffee.", "Nothing."], 1, "'catch up over coffee'."),
      mc("6. Is the man good at cooking?", ["Yes, very.", "Not really, but he's learning.", "He hates it."], 1, "'Not really, but I'm learning'."),
    ]),

    ...speakingParts("la rutina, el tiempo libre y los viajes", { p1: "cómo es tu día, qué haces en tu tiempo libre y si te gusta viajar", p2: "personas en su día a día, relajándose o viajando", p3: "cómo organizar un fin de semana perfecto que combine actividad y descanso", p4: "el equilibrio entre estar ocupado y descansar, y cómo aprovechar el tiempo libre" }),

    SUMMARY("Resumen de la Semana 7 (B1)", [
      "Dominas los phrasal verbs cotidianos y de viaje, las colocaciones make/do/have/take y las preposiciones dependientes.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: modales de deducción (must be/can't be/might be) y el causativo (have something done).",
    ]),
    INFO("Mini-simulacro de la Semana 7", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 8."),
  ],
};

export const WEEK7 = {
  n: 7,
  theme: "La vida diaria y los verbos con partícula",
  description: "Phrasal verbs (cotidianos y de viaje), colocaciones con make/do/have/take y preposiciones dependientes. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY31, DAY32, DAY33, DAY34, DAY35],
};
