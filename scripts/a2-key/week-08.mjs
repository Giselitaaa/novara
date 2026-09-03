/**
 * A2 Key · Semana 8 — "Recuerdos y hábitos del pasado".
 * Gramática: used to, past continuous, past simple vs past continuous
 * (when/while), adverbios de grado (quite/very/really/too), so/such.
 * Vocabulario: infancia, el campo, objetos antiguos, describir el pasado.
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

const DAY36 = {
  title: "Día 36 — used to (hábitos del pasado) · La infancia",
  description: "used to para hábitos y estados del pasado que ya no ocurren. Vocabulario: la infancia. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Hablar de hábitos y estados del pasado que ya no son ciertos con used to.",
    summary: "used to / didn't use to; la infancia; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'I use to' (afirmativa sin -d).", "'didn't used to'.", "'used to' + -ing."],
    reviewPrompts: ["¿'used to' + qué forma del verbo?", "Negativa de 'used to'."],
  },
  items: [
    TEXT("🔁 Semana 8. Hoy aprendes 'used to' — para hábitos y cosas del pasado que YA NO pasan. Vocabulario: la INFANCIA."),
    GRAMMAR("used to (hábitos del pasado)", `'USED TO' + verbo base habla de hábitos o estados del pasado que ya NO son verdad:
· I used to play in the street when I was a child. (antes sí, ahora no)
· She used to have long hair. · We used to live in a village.

NEGATIVA: didn't use to (¡sin -d en 'use'!): I didn't use to like coffee.
PREGUNTA: Did you use to…? → Did you use to play football?

⚠️ 'used to' + verbo BASE (NO -ing). Es solo para el PASADO (no existe 'use to' en presente; para hábitos actuales usa 'usually').`),
    WARN("Errores típicos del hispanohablante", "· ❌ I use to live there (pasado) → ✅ I used to live there.\n· ❌ I didn't used to → ✅ I didn't use to.\n· ❌ I used to playing → ✅ I used to play.\n· para hábitos de AHORA: 'I usually…', no 'I use to…'."),
    grammarEx("Gramática — used to", "Completa o elige.", [
      fb("When I was young, I ___ (used to / play) outside.", ["used to play"], "used to + base."),
      fb("She ___ (used to / have) short hair.", ["used to have"], "used to have."),
      mc("Negative:", ["I didn't used to like it.", "I didn't use to like it.", "I don't used to like it."], 1, "didn't use to."),
      mc("Question:", ["Did you used to play football?", "Did you use to play football?", "Do you used to play?"], 1, "Did you use to…?"),
      fb("We ___ (used to / live) in a small village.", ["used to live"], "used to live."),
      mc("Choose:", ["I used to playing tennis.", "I used to play tennis.", "I use to play tennis."], 1, "used to + base."),
      fb("There ___ (used to / be) a cinema here.", ["used to be"], "used to be."),
    ]),
    GRAMMAR("Vocabulario del día — La infancia", "Palabras sobre crecer y la niñez."),
    deck("A2 Key S8D36 — La infancia", [
      ["childhood", "infancia", "I had a happy childhood.", "sustantivo", "ˈtʃaɪldhʊd"],
      ["grow up", "crecer / criarse", "I grew up in the countryside.", "phrasal verb", "ɡrəʊ ˈʌp"],
      ["toy", "juguete", "My favourite toy was a teddy bear.", "sustantivo", "tɔɪ"],
      ["playground", "parque infantil / patio", "We played in the playground.", "sustantivo", "ˈpleɪɡraʊnd"],
      ["memory", "recuerdo", "I have good memories of school.", "sustantivo", "ˈmeməri"],
      ["primary school", "colegio (primaria)", "I went to primary school here.", "colocación", "ˈpraɪməri skuːl"],
      ["neighbour", "vecino/a", "Our neighbours were very kind.", "sustantivo", "ˈneɪbə"],
      ["strict", "estricto/a", "My teacher was very strict.", "adjetivo", "strɪkt"],
      ["climb", "trepar / escalar", "We used to climb trees.", "verbo", "klaɪm"],
      ["imagination", "imaginación", "Children have great imagination.", "sustantivo", "ɪˌmædʒɪˈneɪʃn"],
    ]),
    vocabEx("Vocabulario — La infancia", "Elige la opción correcta.", [
      mc("The time when you are a child is your ___.", ["childhood", "memory", "toy"], 0, "childhood."),
      mc("To become an adult is to ___.", ["grow up", "climb", "imagine"], 0, "grow up."),
      mc("Children play with a ___.", ["toy", "playground", "neighbour"], 0, "toy."),
      mc("A place where children play outside is a ___.", ["playground", "childhood", "memory"], 0, "playground."),
      mc("A teacher who has strong rules is ___.", ["strict", "kind", "shy"], 0, "strict."),
      mc("Something you remember is a ___.", ["memory", "toy", "neighbour"], 0, "memory."),
    ]),

    READING_HEAD,
    READING_P1("Infancia y recuerdos", [
      mc("Museum sign: 'Toys from the past — see how children used to play.'", ["An exhibition of old toys.", "New toys for sale.", "No toys."], 0, "'Toys from the past'."),
      mc("Note: 'Old school photos wanted for the reunion.'", ["They want old photos.", "No photos.", "New photos only."], 0, "'Old school photos wanted'."),
      mc("Text: 'Do you remember when we used to climb that tree?'", ["A childhood memory.", "A new plan.", "A warning."], 0, "'we used to climb that tree'."),
      mc("Poster: 'Bring your children to the new playground!'", ["A playground for kids.", "No children.", "Closed."], 0, "'new playground'."),
      mc("Sign: 'Primary school open day this Saturday.'", ["Visit the primary school Saturday.", "School closed.", "No open day."], 0, "'open day this Saturday'."),
      mc("Card: 'Happy childhood memories — from your old teacher.'", ["A message from a teacher.", "A shop advert.", "A warning."], 0, "'from your old teacher'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y recuerdos", "THREE PEOPLE'S CHILDHOODS\n\nA) Tom — grew up in a big city; used to play video games and go to the cinema a lot.\n\nB) Nadia — grew up in a small village; used to climb trees and swim in the river.\n\nC) Leo — grew up by the sea; used to build sandcastles and collect shells on the beach.", "Empareja cada persona con su infancia (A/B/C).", [
      mc("Someone who spent their childhood in the countryside near a river.", ["A", "B", "C"], 1, "Nadia."),
      mc("A person who grew up in a city with cinemas.", ["A", "B", "C"], 0, "Tom."),
      mc("Someone who played on the beach as a child.", ["A", "B", "C"], 2, "Leo."),
      mc("A person who used to play video games.", ["A", "B", "C"], 0, "A."),
      mc("Someone who used to climb trees.", ["A", "B", "C"], 1, "B."),
      mc("A person who collected shells.", ["A", "B", "C"], 2, "C."),
      mc("Someone who grew up by the sea.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "GROWING UP IN A VILLAGE\n\nI grew up in a small village in the mountains, and my childhood was very different from children's lives today. We didn't use to have computers or mobile phones. Instead, we used to spend all day outside, whatever the weather.\n\nIn summer, my friends and I used to climb trees and swim in the river. In winter, we used to make snowmen and slide down the hills. Our parents didn't use to worry, because everyone knew everyone in the village. My grandmother used to make hot soup for us when we came home cold and hungry.\n\nLife was simpler then. Of course, we didn't have many things, but we had imagination and freedom. Sometimes I miss those days. Now I live in the city, and although it's exciting, I want my own children to know the joy of playing outside, like I used to.", "Lee el texto y responde (A/B/C).", [
      mc("Where did the writer grow up?", ["By the sea.", "In a mountain village.", "In a big city."], 1, "'a small village in the mountains'."),
      mc("What didn't they use to have?", ["Friends.", "Computers or mobile phones.", "A river."], 1, "'didn't use to have computers or mobile phones'."),
      mc("What did they do in summer?", ["Watch TV.", "Climb trees and swim.", "Make snowmen."], 1, "'climb trees and swim in the river'."),
      mc("Why didn't the parents worry?", ["Children stayed inside.", "Everyone knew everyone.", "There were police."], 1, "'everyone knew everyone'."),
      mc("What does the writer want for their own children?", ["More computers.", "To play outside like they used to.", "To live in the city."], 1, "'know the joy of playing outside'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I grew (1)___ in a small village. We didn't use (2)___ have computers, so we spent all day outside. In summer we used to (3)___ trees and swim in the river. My grandmother used to make hot soup for us. Life was (4)___ then. We didn't have many things, but we had (5)___ and freedom. Sometimes I (6)___ those days.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["up", "on", "in"], 0, "'grew up'."),
      mc("Hueco 2", ["to", "for", "at"], 0, "didn't use to have."),
      mc("Hueco 3", ["climb", "climbing", "climbed"], 0, "used to climb."),
      mc("Hueco 4", ["simpler", "harder", "worse"], 0, "'simpler then'."),
      mc("Hueco 5", ["imagination", "memory", "childhood"], 0, "'imagination and freedom'."),
      mc("Hueco 6", ["miss", "grow", "climb"], 0, "'I miss those days'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ren,\nI was thinking about my childhood today. I grew (1)___ in a small village, and life was so different! We didn't (2)___ to have computers or phones. We used (3)___ spend all day outside — climbing trees and swimming. My grandmother used to make soup for (4)___ when we came home cold. Life was simpler (5)___. Sometimes I really miss (6)___ days. Did you have a happy childhood too?\nLove,\nAsh", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["up"], "'grew up'."),
      fb("Hueco 2", ["use"], "'didn't use to have'."),
      fb("Hueco 3", ["to"], "'used to spend'."),
      fb("Hueco 4", ["us"], "'soup for us'."),
      fb("Hueco 5", ["then"], "'simpler then'."),
      fb("Hueco 6", ["those"], "'those days'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu infancia", "Tu amigo/a inglés/a quiere saber cómo era tu infancia. Escríbele un email (25 palabras o más) con:\n· dónde te criaste,\n· a qué jugabas (used to),\n· un recuerdo bonito.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unos niños juegan en un pueblo, trepando árboles.\n2) Nadan en un río en verano.\n3) Vuelven a casa cansados y su abuela les da sopa.\nUsa el PASADO (y used to) y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Did you use to play a sport as a child? Man: Yes, I used to play football every day. Two. Man: Where did you grow up? Woman: In a small village by the sea. Three. Woman: What was your favourite toy? Man: A red toy car — I loved it. Four. Man: Was your teacher strict? Woman: Very! We had to be silent all the time. Five. Woman: Do you have good memories of school? Man: Yes, especially the playground at break time.", [
      mc("1. What did the man use to play?", ["Tennis.", "Football.", "Basketball."], 1, "'I used to play football'."),
      mc("2. Where did the woman grow up?", ["In a city.", "In a village by the sea.", "In the mountains."], 1, "'a small village by the sea'."),
      mc("3. What was the man's favourite toy?", ["A teddy bear.", "A red toy car.", "A ball."], 1, "'A red toy car'."),
      mc("4. What was the teacher like?", ["Kind.", "Strict.", "Funny."], 1, "'Very! … silent all the time'."),
      mc("5. What does the man remember best about school?", ["The lessons.", "The playground.", "The teachers."], 1, "'the playground at break time'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (infancia)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre la infancia — dónde te criaste, a qué jugabas, cómo eran tus profesores", "hablar del pasado con used to y past simple", "I grew up, I used to, when I was a child, my favourite"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (recuerdos)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre la infancia de antes y de ahora; el examinador pregunta qué era mejor y por qué", "comparar pasado y presente y dar razones", "I think, children used to, now, because, better"),

    SUMMARY("Resumen del Día 36", [
      "used to + base: hábitos y estados del pasado que ya no pasan.",
      "Negativa: didn't use to; pregunta: Did you use to…? (sin -d).",
      "Vocabulario de la infancia. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 37", "Escribe 3 cosas que hacías de niño/a con 'used to'. Repasa las flashcards. Mañana: past continuous (acciones en desarrollo)."),
  ],
};

const DAY37 = {
  title: "Día 37 — Past continuous · El campo y la naturaleza",
  description: "Past continuous (was/were + -ing) para acciones en desarrollo. Vocabulario: el campo. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Describir acciones en desarrollo en el pasado con el past continuous.",
    summary: "Past continuous; el campo; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'was' con plural.", "olvidar -ing.", "usar past continuous para acciones cortas terminadas."],
    reviewPrompts: ["¿was o were con 'they'?", "¿Cómo describes lo que hacías a las 8 de anoche?"],
  },
  items: [
    TEXT("🔁 Repaso: used to. Hoy el PAST CONTINUOUS — para describir acciones que estaban en desarrollo en un momento del pasado. Vocabulario: el CAMPO."),
    GRAMMAR("Past continuous (acciones en desarrollo)", `FORMA: was/were + verbo-ing.
· was: I/he/she/it → I was reading. · were: you/we/they → They were playing.
· Negativa: wasn't/weren't + -ing. Pregunta: What were you doing?

USO: describe una acción EN DESARROLLO en un momento del pasado (una foto de ese momento):
· At eight o'clock last night, I was watching TV.
· This time yesterday, we were flying to Rome.

También pone el ESCENARIO de una historia: The sun was shining and the birds were singing.`),
    WARN("Errores típicos del hispanohablante", "· ❌ They was playing → ✅ They were playing.\n· ❌ I was watch TV → ✅ I was watching TV.\n· ❌ At 8 I watched TV (si describes el momento) → ✅ At 8 I was watching TV.\n· recuerda was (sing.) / were (plural)."),
    grammarEx("Gramática — Past continuous", "Completa con el past continuous.", [
      fb("At eight last night, I ___ (watch) TV.", ["was watching"], "was + -ing."),
      fb("They ___ (play) football when it started to rain.", ["were playing"], "plural → were."),
      fb("What ___ you ___ (do) at ten o'clock?", ["were", "doing"], "What were you doing?"),
      mc("Choose:", ["They was sleeping.", "They were sleeping.", "They were sleep."], 1, "were + -ing."),
      fb("The sun ___ (shine) and the birds ___ (sing).", ["was shining", "were singing"], "escenario de historia."),
      fb("She ___ (not/listen); she was reading.", ["wasn't listening", "was not listening"], "negativa."),
      fb("This time yesterday, we ___ (fly) to Paris.", ["were flying"], "were + -ing."),
    ]),
    GRAMMAR("Vocabulario del día — El campo y la naturaleza", "El entorno rural."),
    deck("A2 Key S8D37 — El campo", [
      ["countryside", "campo (zona rural)", "I love the countryside.", "sustantivo", "ˈkʌntrisaɪd"],
      ["field", "campo (prado)", "The cows are in the field.", "sustantivo", "fiːld"],
      ["hill", "colina", "We walked up the hill.", "sustantivo", "hɪl"],
      ["path", "sendero / camino", "Follow the path to the lake.", "sustantivo", "pɑːθ"],
      ["lake", "lago", "We swam in the lake.", "sustantivo", "leɪk"],
      ["farm", "granja", "My uncle has a farm.", "sustantivo", "fɑːm"],
      ["wood", "bosque (pequeño)", "There's a wood behind the house.", "sustantivo", "wʊd"],
      ["view", "vista / paisaje", "The view from the hill is amazing.", "sustantivo", "vjuː"],
      ["peaceful", "tranquilo / apacible", "The countryside is peaceful.", "adjetivo", "ˈpiːsfl"],
      ["fresh air", "aire fresco / puro", "I love the fresh air here.", "colocación", "freʃ ˈeə"],
    ]),
    vocabEx("Vocabulario — El campo", "Elige la opción correcta.", [
      mc("Rural land outside the city is the ___.", ["countryside", "farm", "path"], 0, "countryside."),
      mc("A place where animals and crops are grown is a ___.", ["farm", "lake", "hill"], 0, "farm."),
      mc("A small mountain is a ___.", ["hill", "field", "wood"], 0, "hill."),
      mc("A large area of water in nature is a ___.", ["lake", "path", "view"], 0, "lake."),
      mc("A narrow way to walk is a ___.", ["path", "farm", "field"], 0, "path."),
      mc("Calm and quiet is ___.", ["peaceful", "crowded", "noisy"], 0, "peaceful."),
    ]),

    READING_HEAD,
    READING_P1("El campo y avisos", [
      mc("Sign: 'Footpath to the lake — 2 km.'", ["A walking path to the lake.", "No path.", "The lake is closed."], 0, "'Footpath to the lake'."),
      mc("Notice: 'Please close the gate — animals in the field.'", ["Shut the gate, animals inside.", "Leave the gate open.", "No animals."], 0, "'close the gate — animals in the field'."),
      mc("Sign: 'Farm shop — fresh eggs and vegetables.'", ["Buy fresh food at the farm.", "No shop.", "Closed."], 0, "'Farm shop — fresh eggs'."),
      mc("Warning: 'Path may be muddy after rain.'", ["The path can be muddy.", "The path is dry.", "No path."], 0, "'may be muddy after rain'."),
      mc("Notice: 'Beautiful views from the top of the hill.'", ["Nice views up the hill.", "No views.", "Hill closed."], 0, "'views from the top of the hill'."),
      mc("Sign: 'Fishing in the lake — permit needed.'", ["You need a permit to fish.", "Free fishing.", "No fishing ever."], 0, "'permit needed'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y lugares rurales", "THREE COUNTRYSIDE PLACES\n\nA) Hilltop Walk — a climb up a hill with amazing views. Best for people who like exercise and photos.\n\nB) Lake Café — a quiet café by a lake, perfect for relaxing with a coffee and watching the ducks.\n\nC) Adventure Farm — feed animals and go on a tractor ride. Great fun for families with children.", "Empareja cada persona con el lugar ideal (A/B/C).", [
      mc("Someone who loves hiking and taking photos.", ["A", "B", "C"], 0, "Hilltop Walk."),
      mc("A person who wants to relax quietly by water.", ["A", "B", "C"], 1, "Lake Café."),
      mc("A family with children who want to feed animals.", ["A", "B", "C"], 2, "Adventure Farm."),
      mc("Someone who wants amazing views from the top.", ["A", "B", "C"], 0, "A."),
      mc("A person who enjoys watching ducks with a coffee.", ["A", "B", "C"], 1, "B."),
      mc("Children who want a tractor ride.", ["A", "B", "C"], 2, "C."),
      mc("Someone who likes exercise in nature.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A WALK IN THE COUNTRYSIDE\n\nLast Sunday, my family and I went for a long walk in the countryside. When we started, the weather was beautiful. The sun was shining, the birds were singing, and a gentle wind was blowing. We followed a path across some green fields, past a small farm.\n\nWhile we were walking up a hill, my little sister found a family of rabbits. We stopped to watch them for a while. At the top of the hill, the view was amazing — we could see a lake, a wood, and the whole valley below.\n\nWe were having a lovely picnic by the lake when it suddenly started to rain. We ran to a big tree and waited. Luckily, it didn't rain for long, and we walked home in the fresh air. It was a peaceful, perfect day, and I felt very happy.", "Lee el texto y responde (A/B/C).", [
      mc("What was the weather like at the start?", ["Rainy.", "Beautiful and sunny.", "Windy and cold."], 1, "'The sun was shining'."),
      mc("What did the little sister find?", ["A farm.", "A family of rabbits.", "A lake."], 1, "'found a family of rabbits'."),
      mc("What could they see from the top of the hill?", ["Only fields.", "A lake, a wood and the valley.", "The city."], 1, "'a lake, a wood, and the whole valley'."),
      mc("What were they doing when it started to rain?", ["Walking.", "Having a picnic.", "Feeding animals."], 1, "'We were having a lovely picnic'."),
      mc("How did the writer feel?", ["Bored.", "Very happy.", "Tired and angry."], 1, "'I felt very happy'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last Sunday we went for a walk in the (1)___. The sun was (2)___ and the birds were singing. We followed a (3)___ across the fields. While we were walking up a (4)___, my sister found some rabbits. We were having a picnic by the (5)___ when it started to rain. We ran to a tree. It was a (6)___ day.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["countryside", "city", "farm"], 0, "'in the countryside'."),
      mc("Hueco 2", ["shining", "shine", "shined"], 0, "was shining."),
      mc("Hueco 3", ["path", "hill", "lake"], 0, "'followed a path'."),
      mc("Hueco 4", ["hill", "path", "field"], 0, "'up a hill'."),
      mc("Hueco 5", ["lake", "hill", "farm"], 0, "'picnic by the lake'."),
      mc("Hueco 6", ["peaceful", "noisy", "boring"], 0, "'a peaceful day'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wren,\nLast Sunday we went for a walk in the countryside. When we started, the sun (1)___ shining and the birds were singing. We followed a path (2)___ the fields. (3)___ we were walking up a hill, my sister found some rabbits! We (4)___ having a picnic by the lake when it started to rain. We ran (5)___ a tree and waited. It was (6)___ a peaceful day!\nLove,\nMo", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["was"], "'the sun was shining'."),
      fb("Hueco 2", ["across", "through"], "'across the fields'."),
      fb("Hueco 3", ["While", "As"], "'While we were walking'."),
      fb("Hueco 4", ["were"], "'We were having a picnic'."),
      fb("Hueco 5", ["to"], "'ran to a tree'."),
      fb("Hueco 6", ["such"], "'such a peaceful day'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un día en el campo", "Tu amigo/a inglés/a quiere saber de un día que pasaste en el campo. Escríbele un email (25 palabras o más) con:\n· adónde fuiste,\n· qué estabas haciendo cuando pasó algo,\n· si te gustó y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia pasea por el campo con sol.\n2) Hacen un picnic junto a un lago.\n3) Empieza a llover y corren a refugiarse bajo un árbol.\nUsa el PASADO (past continuous + past simple) y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a woman leaving a message about a countryside trip. Hi, it's Grace. I'm calling about our walking trip on Saturday. We'll meet at the farm car park at nine o'clock. The walk is about eight kilometres, so wear good boots. We'll have a picnic by the lake at lunchtime, so bring some food. And don't forget your camera — the views from the hill are beautiful! See you Saturday.", [
      fb("Trip day: ___", ["Saturday"], "'on Saturday'."),
      fb("Meet at the farm car park at ___ o'clock.", ["nine", "9"], "'at nine o'clock'."),
      fb("The walk is about ___ kilometres.", ["eight", "8"], "'about eight kilometres'."),
      fb("Picnic by the ___ at lunchtime.", ["lake"], "'picnic by the lake'."),
      fb("Don't forget your ___.", ["camera"], "'don't forget your camera'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (el campo)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre el campo y la naturaleza — si prefieres el campo o la ciudad, un día que pasaste en la naturaleza, qué hacías", "hablar del pasado con past continuous", "I was walking, last weekend, I prefer, the countryside, peaceful"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (campo/ciudad)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre vivir en el campo o la ciudad; el examinador pregunta qué prefieres y por qué", "comparar y dar razones", "I prefer, the countryside, the city, because, peaceful, exciting"),

    SUMMARY("Resumen del Día 37", [
      "Past continuous: was/were + -ing (acciones en desarrollo en el pasado).",
      "Describe el escenario de una historia.",
      "Vocabulario del campo. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 38", "Describe qué estabas haciendo ayer a las 8 (past continuous). Repasa las flashcards. Mañana: past simple vs past continuous (when/while)."),
  ],
};

const DAY38 = {
  title: "Día 38 — Past simple vs past continuous · Objetos y cosas",
  description: "Contraste past simple / past continuous con when y while. Vocabulario: objetos cotidianos. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Combinar una acción larga (past continuous) con una corta que la interrumpe (past simple).",
    summary: "when/while; past simple vs continuous; objetos; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'while' + acción corta.", "'when' + acción larga.", "tiempos cambiados."],
    reviewPrompts: ["¿'when' o 'while' con la acción larga?", "¿Qué tiempo interrumpe?"],
  },
  items: [
    TEXT("🔁 Repaso: past continuous. Hoy lo combinas con el past simple: una acción larga se interrumpe por una corta. Vocabulario: OBJETOS cotidianos."),
    GRAMMAR("Past simple vs past continuous (when / while)", `Contamos una historia con dos acciones:
· PAST CONTINUOUS = acción LARGA de fondo (was/were + -ing).
· PAST SIMPLE = acción CORTA que la interrumpe.

· I was watching TV when the phone rang. (larga: watching; corta que interrumpe: rang)
· While I was cooking, I cut my finger.

WHEN + past simple (acción corta): …when the phone rang.
WHILE + past continuous (acción larga): While I was cooking…

Dos acciones largas a la vez → while + past continuous en las dos: While she was reading, he was cooking.`),
    WARN("Errores típicos del hispanohablante", "· ❌ While I cut my finger, I was cooking → ✅ While I was cooking, I cut my finger.\n· ❌ I watched TV when the phone was ringing → ✅ I was watching TV when the phone rang.\n· 'while' + acción larga (-ing); 'when' + acción corta (past simple)."),
    grammarEx("Gramática — when / while", "Completa con el tiempo correcto.", [
      fb("I ___ (watch) TV when the phone rang.", ["was watching"], "acción larga → past continuous."),
      fb("While she ___ (cook), she cut her finger.", ["was cooking"], "while + larga."),
      fb("They were playing when it ___ (start) to rain.", ["started"], "acción corta → past simple."),
      mc("Choose:", ["While I fell, I was running.", "While I was running, I fell.", "While I ran, I was falling."], 1, "while + larga; corta interrumpe."),
      fb("What ___ you ___ (do) when I called?", ["were", "doing"], "past continuous."),
      fb("He broke his leg while he ___ (ski).", ["was skiing"], "while + larga."),
      mc("Choose:", ["I was seeing an accident.", "I saw an accident while I was walking.", "I was seeing an accident when I walked."], 1, "corta (saw) + larga (walking)."),
    ]),
    GRAMMAR("Vocabulario del día — Objetos cotidianos", "Cosas de casa y del día a día."),
    deck("A2 Key S8D38 — Objetos cotidianos", [
      ["key", "llave", "I lost my keys.", "sustantivo", "kiː"],
      ["wallet", "cartera / billetera", "My wallet is in my bag.", "sustantivo", "ˈwɒlɪt"],
      ["umbrella", "paraguas", "Take an umbrella, it's raining.", "sustantivo", "ʌmˈbrelə"],
      ["glasses", "gafas", "I can't find my glasses.", "sustantivo", "ˈɡlɑːsɪz"],
      ["torch", "linterna", "Use a torch in the dark.", "sustantivo", "tɔːtʃ"],
      ["clock", "reloj (de pared)", "The clock on the wall stopped.", "sustantivo", "klɒk"],
      ["candle", "vela", "We lit a candle.", "sustantivo", "ˈkændl"],
      ["blanket", "manta", "I need a warm blanket.", "sustantivo", "ˈblæŋkɪt"],
      ["mirror", "espejo", "She looked in the mirror.", "sustantivo", "ˈmɪrə"],
      ["scissors", "tijeras", "Pass me the scissors, please.", "sustantivo", "ˈsɪzəz"],
    ]),
    vocabEx("Vocabulario — Objetos cotidianos", "Elige la opción correcta.", [
      mc("You use this to open a door: a ___.", ["key", "wallet", "clock"], 0, "key."),
      mc("You keep money and cards in a ___.", ["wallet", "umbrella", "torch"], 0, "wallet."),
      mc("You use this when it rains: an ___.", ["umbrella", "torch", "mirror"], 0, "umbrella."),
      mc("You use this to see in the dark: a ___.", ["torch", "candle", "clock"], 0, "torch."),
      mc("You look at yourself in a ___.", ["mirror", "blanket", "wallet"], 0, "mirror."),
      mc("You use these to cut paper: ___.", ["scissors", "keys", "glasses"], 0, "scissors."),
    ]),

    READING_HEAD,
    READING_P1("Objetos perdidos y avisos", [
      mc("Notice: 'Lost: black wallet with cards inside. Reward!'", ["A lost wallet, reward offered.", "A found wallet.", "A wallet for sale."], 0, "'Lost: black wallet… Reward'."),
      mc("Sign: 'Please take an umbrella from the box by the door.'", ["Free umbrellas by the door.", "Buy an umbrella.", "No umbrellas."], 0, "'take an umbrella from the box'."),
      mc("Text: 'Have you seen my glasses? I can't find them.'", ["Looking for lost glasses.", "Selling glasses.", "Found glasses."], 0, "'Have you seen my glasses?'"),
      mc("Notice: 'Power cut tonight — keep a torch and candles ready.'", ["No electricity, prepare a torch.", "Power is fine.", "No torch needed."], 0, "'Power cut… keep a torch and candles ready'."),
      mc("Sign: 'Keys cut here while you wait.'", ["Get keys made quickly.", "No keys.", "Closed."], 0, "'Keys cut here while you wait'."),
      mc("Label: 'Keep scissors away from young children.'", ["Scissors are dangerous for kids.", "Give scissors to kids.", "No scissors."], 0, "'Keep scissors away from young children'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y objetos", "THREE USEFUL ITEMS\n\nA) Travel Umbrella — small and light, fits in any bag. Perfect for people who travel a lot.\n\nB) Head Torch — a torch you wear on your head, so your hands are free. Great for camping.\n\nC) Warm Blanket — soft and cosy, perfect for cold evenings on the sofa or in the garden.", "Empareja cada persona con el objeto ideal (A/B/C).", [
      mc("Someone who travels and wants protection from rain.", ["A", "B", "C"], 0, "Travel Umbrella."),
      mc("A camper who needs light with free hands.", ["A", "B", "C"], 1, "Head Torch."),
      mc("Someone who feels cold on the sofa in the evening.", ["A", "B", "C"], 2, "Warm Blanket."),
      mc("A person who wants something small for their bag.", ["A", "B", "C"], 0, "A."),
      mc("Someone going camping who needs a light.", ["A", "B", "C"], 1, "B."),
      mc("A person who wants to stay warm outside.", ["A", "B", "C"], 2, "C."),
      mc("A frequent traveller.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "THE NIGHT OF THE STORM\n\nLast winter, there was a big storm in our town. I remember it well. I was doing my homework in my room when suddenly all the lights went out. It was completely dark, and the wind was blowing loudly outside.\n\nAt first, I was a bit scared, but then I heard my mum calling. She was looking for candles and a torch in the kitchen. While she was lighting the candles, my little brother found an old blanket, and we all sat together in the living room. It felt cosy, like an adventure.\n\nWe couldn't watch TV or use our phones, so we told stories and played games by candlelight. When the electricity finally came back an hour later, we were almost disappointed! Sometimes, the best moments happen when things go wrong.", "Lee el texto y responde (A/B/C).", [
      mc("What was the writer doing when the lights went out?", ["Watching TV.", "Doing homework.", "Sleeping."], 1, "'I was doing my homework'."),
      mc("What was the mum looking for?", ["Food.", "Candles and a torch.", "Her keys."], 1, "'candles and a torch'."),
      mc("What did the little brother find?", ["A candle.", "An old blanket.", "A torch."], 1, "'found an old blanket'."),
      mc("What did they do by candlelight?", ["Watched TV.", "Told stories and played games.", "Slept."], 1, "'told stories and played games'."),
      mc("How did they feel when the electricity came back?", ["Happy.", "Almost disappointed.", "Angry."], 1, "'almost disappointed'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last winter there was a big storm. I was doing my homework (1)___ the lights went out. It was dark and the wind (2)___ blowing loudly. My mum was looking for (3)___ and a torch. While she (4)___ lighting them, my brother found a (5)___. We told stories by candlelight. (6)___ the electricity came back, we were almost disappointed!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["when", "while", "during"], 0, "acción corta → when."),
      mc("Hueco 2", ["was", "were", "is"], 0, "'the wind was blowing'."),
      mc("Hueco 3", ["candles", "keys", "glasses"], 0, "'candles and a torch'."),
      mc("Hueco 4", ["was", "were", "is"], 0, "'she was lighting'."),
      mc("Hueco 5", ["blanket", "wallet", "mirror"], 0, "'an old blanket'."),
      mc("Hueco 6", ["When", "While", "During"], 0, "acción corta → When."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Nell,\nLast winter there was a huge storm! I (1)___ doing my homework when the lights suddenly went (2)___. The wind was blowing loudly. My mum was looking (3)___ candles, and (4)___ she was lighting them, my brother found a blanket. We couldn't use our phones, (5)___ we told stories by candlelight. (6)___ the electricity came back an hour later, we were almost disappointed! It was a fun night.\nLove,\nKit", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["was"], "'I was doing my homework'."),
      fb("Hueco 2", ["out"], "'went out'."),
      fb("Hueco 3", ["for"], "'looking for candles'."),
      fb("Hueco 4", ["while"], "'while she was lighting'."),
      fb("Hueco 5", ["so"], "consecuencia → so."),
      fb("Hueco 6", ["When"], "'When the electricity came back'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta algo que pasó de repente", "Cuéntale a tu amigo/a inglés/a algo inesperado que te pasó. Escríbele un email (25 palabras o más) con:\n· qué estabas haciendo,\n· qué pasó de repente,\n· cómo terminó.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia cena tranquila cuando se va la luz.\n2) Buscan velas y una linterna.\n3) Pasan una velada divertida contando historias a la luz de las velas.\nUsa el PASADO (past continuous + past simple) y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigos hablando de un accidente pequeño y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Lily and Ben, talking about Ben's weekend. Lily: What happened to your arm, Ben? Ben: Oh, I fell off my bike. Lily: Oh no! How? Ben: I was cycling in the park when a dog ran in front of me. I stopped quickly and fell. Lily: Poor you! Were you going fast? Ben: No, luckily I was going quite slowly. Lily: Did you go to the doctor? Ben: Yes, my mum took me. It's not broken, just bruised. Lily: That's good. You should be more careful! Ben: I know. Next time I'll ride more slowly near dogs!", [
      mc("What happened to Ben?", ["He hurt his leg.", "He fell off his bike.", "He lost his bike."], 1, "'I fell off my bike'."),
      mc("What was Ben doing when it happened?", ["Walking.", "Cycling in the park.", "Running."], 1, "'I was cycling in the park'."),
      mc("Why did he fall?", ["A car.", "A dog ran in front of him.", "It was raining."], 1, "'a dog ran in front of me'."),
      mc("Was Ben's arm broken?", ["Yes.", "No, just bruised.", "The doctor didn't say."], 1, "'not broken, just bruised'."),
      mc("What will Ben do next time?", ["Ride faster.", "Ride more slowly near dogs.", "Stop cycling."], 1, "'ride more slowly near dogs'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (un suceso)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre algo que te pasó — un pequeño accidente o sorpresa, qué estabas haciendo, cómo terminó", "contar sucesos con past continuous + past simple", "I was … -ing when, suddenly, then, in the end"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (objetos útiles)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre objetos útiles que siempre llevas; el examinador pregunta cuál es más importante y por qué", "expresar preferencias y dar razones", "I always carry, I prefer, because, useful, important"),

    SUMMARY("Resumen del Día 38", [
      "Past continuous (acción larga) + past simple (acción corta que interrumpe).",
      "while + acción larga (-ing); when + acción corta (past simple).",
      "Vocabulario de objetos. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 39", "Escribe 2 frases con when/while combinando los dos pasados. Repasa las flashcards. Mañana: adverbios de grado (quite/very/too) y so/such."),
  ],
};

const DAY39 = {
  title: "Día 39 — quite/very/really/too y so/such · Describir con intensidad",
  description: "Adverbios de grado (quite, very, really, too) y so/such. Vocabulario: adjetivos para describir. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Graduar la intensidad de los adjetivos con quite/very/really/too y so/such.",
    summary: "Adverbios de grado; so/such; adjetivos; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["confundir 'too' (demasiado) y 'very' (muy).", "'so' + sustantivo.", "'such nice' sin a/an."],
    reviewPrompts: ["¿'too big' o 'very big' si aún sirve?", "¿'so' o 'such' antes de un sustantivo?"],
  },
  items: [
    TEXT("🔁 Repaso: when/while. Hoy graduas la INTENSIDAD de los adjetivos (quite, very, really, too) y usas so/such para enfatizar. Vocabulario: ADJETIVOS para describir."),
    GRAMMAR("quite / very / really / too · so / such", `GRADO del adjetivo (de menos a más): a bit < quite < very < really < extremely.
· It's quite cold. · It's very cold. · It's really cold.
· 'too' = DEMASIADO (negativo, un problema): It's too cold to swim.

SO / SUCH (para enfatizar):
· SO + adjetivo/adverbio: It was so cold! She sang so well.
· SUCH + (a/an) + adjetivo + sustantivo: It was such a cold day! They are such nice people.

Recuerda: so + adjetivo solo; such + adjetivo + sustantivo.`),
    WARN("Errores típicos del hispanohablante", "· ❌ It's too nice (si es positivo) → ✅ It's very/really nice.\n· ❌ It was so a nice day → ✅ It was such a nice day.\n· ❌ such nice → ✅ such a nice (day) / such nice (people).\n· 'too' siempre es un problema (demasiado)."),
    grammarEx("Gramática — grado y so/such", "Completa o elige.", [
      mc("It's ___ hot to go out. I'll stay in.", ["very", "too", "quite"], 1, "problema → too."),
      mc("The film was ___ good! I loved it.", ["so", "such", "too"], 0, "so + adjetivo."),
      mc("It was ___ a boring lesson.", ["so", "such", "very"], 1, "such + a + adj + sustantivo."),
      fb("She sings ___ (so/very) beautifully.", ["so"], "so + adverbio."),
      mc("Choose:", ["They are such nice people.", "They are so nice people.", "They are such a nice people."], 0, "such + adj + sustantivo plural."),
      mc("It's ___ cold, but I can still walk.", ["too", "very", "such"], 1, "aún sirve → very."),
      fb("It was ___ (so/such) a lovely surprise!", ["such"], "such + a + adj + sustantivo."),
    ]),
    GRAMMAR("Vocabulario del día — Adjetivos para describir", "Adjetivos útiles y sus contrarios."),
    deck("A2 Key S8D39 — Adjetivos para describir", [
      ["amazing", "increíble / asombroso", "The view was amazing.", "adjetivo", "əˈmeɪzɪŋ"],
      ["terrible", "terrible / horrible", "The weather was terrible.", "adjetivo", "ˈterəbl"],
      ["comfortable", "cómodo", "This chair is comfortable.", "adjetivo", "ˈkʌmftəbl"],
      ["crowded", "abarrotado", "The train was crowded.", "adjetivo", "ˈkraʊdɪd"],
      ["modern", "moderno", "It's a modern building.", "adjetivo", "ˈmɒdn"],
      ["ancient", "antiguo (muy viejo)", "We saw ancient ruins.", "adjetivo", "ˈeɪnʃənt"],
      ["dangerous", "peligroso", "It's a dangerous road.", "adjetivo", "ˈdeɪndʒərəs"],
      ["safe", "seguro", "This area is safe.", "adjetivo", "seɪf"],
      ["delicious", "delicioso", "The food was delicious.", "adjetivo", "dɪˈlɪʃəs"],
      ["unusual", "poco común / raro", "It's an unusual name.", "adjetivo", "ʌnˈjuːʒuəl"],
    ]),
    vocabEx("Vocabulario — Adjetivos para describir", "Elige la opción correcta.", [
      mc("Something wonderful and surprising is ___.", ["amazing", "terrible", "crowded"], 0, "amazing."),
      mc("The opposite of 'dangerous' is ___.", ["safe", "modern", "ancient"], 0, "safe."),
      mc("Food that tastes wonderful is ___.", ["delicious", "terrible", "crowded"], 0, "delicious."),
      mc("A place full of people is ___.", ["crowded", "safe", "comfortable"], 0, "crowded."),
      mc("Something very, very old is ___.", ["ancient", "modern", "unusual"], 0, "ancient."),
      mc("A soft chair you sit in easily is ___.", ["comfortable", "dangerous", "terrible"], 0, "comfortable."),
    ]),

    READING_HEAD,
    READING_P1("Descripciones y opiniones", [
      mc("Review: 'Amazing food and lovely staff. Highly recommend!'", ["A very positive review.", "A bad review.", "No review."], 0, "'Amazing food… recommend'."),
      mc("Sign: 'Warning: dangerous road, drive slowly.'", ["The road is dangerous.", "The road is safe.", "No road."], 0, "'dangerous road'."),
      mc("Text: 'The concert was so good! Best night ever!'", ["The concert was great.", "The concert was bad.", "No concert."], 0, "'so good! Best night ever'."),
      mc("Notice: 'It's too crowded — please wait outside.'", ["Wait outside, it's full.", "Come in.", "Empty."], 0, "'too crowded — wait outside'."),
      mc("Ad: 'Comfortable rooms in a modern hotel.'", ["The hotel is modern and comfy.", "Old hotel.", "No rooms."], 0, "'Comfortable rooms… modern hotel'."),
      mc("Review: 'Terrible service and cold food. Never again.'", ["A very negative review.", "A good review.", "No opinion."], 0, "'Terrible service… Never again'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y opiniones de hoteles", "THREE HOTEL REVIEWS\n\nA) 'Amazing! The rooms were so comfortable and the food was delicious. We'll come back!' — Maria.\n\nB) 'Too expensive and quite noisy. The room was small and not very clean.' — Jon.\n\nC) 'A modern hotel in a safe area, but the pool was too crowded and there was a long queue for breakfast.' — Ella.", "Empareja cada afirmación con la persona (A/B/C).", [
      mc("Who loved the comfortable rooms and delicious food?", ["Maria", "Jon", "Ella"], 0, "A: Maria."),
      mc("Who thought it was too expensive and noisy?", ["Maria", "Jon", "Ella"], 1, "B: Jon."),
      mc("Who complained about a crowded pool?", ["Maria", "Jon", "Ella"], 2, "C: Ella."),
      mc("Who wants to return?", ["Maria", "Jon", "Ella"], 0, "A."),
      mc("Who said the room was small and not clean?", ["Maria", "Jon", "Ella"], 1, "B."),
      mc("Who mentioned a long queue for breakfast?", ["Maria", "Jon", "Ella"], 2, "C."),
      mc("Who described the food as delicious?", ["Maria", "Jon", "Ella"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "AN UNUSUAL HOLIDAY\n\nLast year, my family had such an unusual holiday! Instead of a hotel, we stayed in an ancient castle in the countryside. It was so exciting, but also a little strange.\n\nThe castle was beautiful, with thick stone walls and amazing views of the hills. However, it was quite cold at night, even in summer, and the rooms were very big and a bit dark. On the first night, I was too scared to sleep, because the old building made strange noises!\n\nBut soon I loved it. During the day, we explored the towers and gardens. The owner was such a friendly man, and he told us wonderful stories about the castle's history. The food was delicious too. It wasn't a comfortable, modern holiday, but it was an experience I'll never forget. Sometimes, unusual is better than perfect.", "Lee el texto y responde (A/B/C).", [
      mc("Where did the family stay?", ["A modern hotel.", "An ancient castle.", "A tent."], 1, "'an ancient castle'."),
      mc("What was a problem at night?", ["It was too hot.", "It was quite cold.", "It was noisy."], 1, "'quite cold at night'."),
      mc("Why couldn't the writer sleep on the first night?", ["Too excited.", "Too scared of strange noises.", "Too hot."], 1, "'too scared… strange noises'."),
      mc("What was the owner like?", ["Rude.", "Such a friendly man.", "Boring."], 1, "'such a friendly man'."),
      mc("What is the writer's opinion of the holiday?", ["It was terrible.", "Unusual but unforgettable.", "Too comfortable."], 1, "'an experience I'll never forget'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last year we had (1)___ an unusual holiday! We stayed in an (2)___ castle. It was (3)___ exciting, but at night it was (4)___ cold. On the first night I was (5)___ scared to sleep because of strange noises. But the owner was such a friendly man and the food was (6)___. I'll never forget it!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["such", "so", "very"], 0, "such + a + adj + sustantivo."),
      mc("Hueco 2", ["ancient", "modern", "safe"], 0, "'an ancient castle'."),
      mc("Hueco 3", ["so", "such", "too"], 0, "so + adjetivo."),
      mc("Hueco 4", ["quite", "such", "so a"], 0, "'quite cold'."),
      mc("Hueco 5", ["too", "very", "such"], 0, "'too scared to sleep' (problema)."),
      mc("Hueco 6", ["delicious", "terrible", "crowded"], 0, "'the food was delicious'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wynn,\nWe had (1)___ an amazing holiday! We stayed in an ancient castle. It was (2)___ exciting! At night it was quite cold and the old building made strange noises, so on the first night I was (3)___ scared to sleep. But soon I loved it. The owner was (4)___ a friendly man, and the food was (5)___ delicious. It wasn't a comfortable holiday, (6)___ I'll never forget it!\nLove,\nRee", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["such"], "such + a + adj."),
      fb("Hueco 2", ["so"], "so + adjetivo."),
      fb("Hueco 3", ["too"], "'too scared to sleep'."),
      fb("Hueco 4", ["such"], "such + a + adj + sustantivo."),
      fb("Hueco 5", ["so", "really", "very"], "intensificador + adjetivo."),
      fb("Hueco 6", ["but"], "contraste → but."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Describe un lugar donde te alojaste", "Cuéntale a tu amigo/a inglés/a de un hotel o lugar donde te alojaste. Escríbele un email (25 palabras o más) con:\n· cómo era el lugar,\n· qué te gustó y qué no,\n· si lo recomiendas.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia llega a un castillo antiguo para pasar la noche.\n2) De noche, oyen ruidos extraños y se asustan.\n3) Al día siguiente exploran el castillo y se lo pasan genial.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas describir algo y elige de qué habla cada una.", "This is Part Four. You will hear five people describing something. Choose what each person is talking about. One. It was such a delicious meal — the best I've ever had! Two. The hotel room was too small and quite dirty, so we complained. Three. The view from the top was so amazing that I took a hundred photos. Four. The road was really dangerous, with lots of sharp bends. Five. The old town was full of ancient buildings and narrow streets — beautiful!", [
      mc("Person 1 is talking about…", ["a meal", "a hotel", "a view"], 0, "'such a delicious meal'."),
      mc("Person 2 is talking about…", ["a hotel room", "a meal", "a road"], 0, "'The hotel room was too small'."),
      mc("Person 3 is talking about…", ["a view", "a meal", "a town"], 0, "'The view from the top was so amazing'."),
      mc("Person 4 is talking about…", ["a road", "a hotel", "a view"], 0, "'The road was really dangerous'."),
      mc("Person 5 is talking about…", ["an old town", "a road", "a meal"], 0, "'the old town… ancient buildings'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (describir)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas para describir cosas — describe un lugar increíble que has visitado, una comida deliciosa, tu habitación", "usar adjetivos y adverbios de grado", "it was amazing, so, really, such a, very"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (lugares)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre alojamientos (hotel moderno o casa antigua); el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, comfortable, unusual"),

    SUMMARY("Resumen del Día 39", [
      "Grado: a bit < quite < very < really; too = demasiado (problema).",
      "so + adjetivo/adverbio; such + (a/an) + adjetivo + sustantivo.",
      "Vocabulario de adjetivos. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 40", "Escribe 2 frases con so y 2 con such. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY40 = {
  title: "Día 40 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del pasado (used to, past continuous) y de la descripción. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 8.",
  pedagogy: {
    objective: "Consolidar used to, past continuous y los adverbios de grado, y medir el progreso.",
    summary: "Repaso de used to, past continuous, when/while, so/such; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 9."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 8. Consolidas el pasado y la descripción, y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 8", `1) used to + base: hábitos del pasado (didn't use to / Did you use to?).
2) Past continuous: was/were + -ing (acción en desarrollo).
3) Past simple + past continuous: when (corta) / while (larga).
4) Grado: quite/very/really/too; so + adj, such + (a) + adj + sustantivo.`),
    grammarEx("Repaso mixto de gramática — Semana 8", "Completa o elige.", [
      fb("When I was young, I ___ (used to / live) in a village.", ["used to live"], "used to + base."),
      fb("At eight last night, I ___ (watch) a film.", ["was watching"], "past continuous."),
      fb("While she ___ (cook), the phone rang.", ["was cooking"], "while + larga."),
      mc("Choose:", ["It was so a nice day.", "It was such a nice day.", "It was such nice day."], 1, "such + a + adj + sustantivo."),
      mc("Negative of 'used to':", ["I didn't used to", "I didn't use to", "I don't used to"], 1, "didn't use to."),
      fb("They ___ (play) when it started to rain.", ["were playing"], "past continuous interrumpido."),
      mc("It's ___ hot to go out.", ["very", "too", "quite"], 1, "problema → too."),
      fb("The concert was ___ (so/such) good!", ["so"], "so + adjetivo."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 8", "Repasa los mazos (infancia, campo, objetos, adjetivos)."),
    vocabEx("Repaso de vocabulario — Semana 8", "Elige la opción correcta.", [
      mc("The time when you are a child:", ["childhood", "memory", "toy"], 0, "childhood."),
      mc("Rural land outside the city:", ["countryside", "farm", "path"], 0, "countryside."),
      mc("You use this to open a door:", ["key", "wallet", "clock"], 0, "key."),
      mc("Something wonderful and surprising:", ["amazing", "terrible", "crowded"], 0, "amazing."),
      mc("To become an adult:", ["grow up", "climb", "imagine"], 0, "grow up."),
      mc("A large area of water in nature:", ["lake", "path", "view"], 0, "lake."),
      mc("Food that tastes wonderful:", ["delicious", "terrible", "safe"], 0, "delicious."),
      mc("You use this when it rains:", ["umbrella", "torch", "mirror"], 0, "umbrella."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Museum sign: 'Ancient objects — please do not touch.'", ["Don't touch the old items.", "Touch them.", "No objects."], 0, "'do not touch'."),
      mc("Notice: 'Path closed — too dangerous after the storm.'", ["The path is shut, it's dangerous.", "The path is safe.", "No storm."], 0, "'too dangerous'."),
      mc("Text: 'The countryside was so peaceful. I loved it!'", ["Enjoyed the peaceful countryside.", "Hated it.", "No countryside."], 0, "'so peaceful… loved it'."),
      mc("Sign: 'Lost property — collect keys and wallets here.'", ["Get lost keys and wallets here.", "No lost property.", "Sell items."], 0, "'collect keys and wallets'."),
      mc("Review: 'Such a comfortable hotel and delicious food!'", ["A very positive review.", "A bad review.", "No opinion."], 0, "'Such a comfortable hotel… delicious'."),
      mc("Notice: 'Old toys wanted for the children's charity.'", ["They want old toys.", "New toys only.", "No toys."], 0, "'Old toys wanted'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y experiencias", "THREE MEMORABLE TRIPS\n\nA) A weekend in an ancient castle — beautiful but cold, with amazing history and strange noises at night.\n\nB) A camping trip in the countryside — peaceful, with a lake for swimming and lots of fresh air.\n\nC) A city break in a modern hotel — comfortable rooms, delicious food, but quite expensive and crowded.", "Empareja cada persona con el viaje ideal (A/B/C).", [
      mc("Someone who loves history and doesn't mind the cold.", ["A", "B", "C"], 0, "Castle."),
      mc("A person who wants peace, nature and a lake.", ["A", "B", "C"], 1, "Camping."),
      mc("Someone who wants comfort and good food in a city.", ["A", "B", "C"], 2, "City hotel."),
      mc("A person who enjoys fresh air and swimming.", ["A", "B", "C"], 1, "B."),
      mc("Someone interested in old buildings.", ["A", "B", "C"], 0, "A."),
      mc("A person who doesn't mind spending more for comfort.", ["A", "B", "C"], 2, "C."),
      mc("Someone who likes peaceful places.", ["A", "B", "C"], 1, "B."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "HOW LIFE HAS CHANGED\n\nMy grandmother is 85, and she loves telling me how life used to be. When she was young, she lived on a farm in the countryside. There was no electricity, so in the evenings the family used to sit around candles. She used to walk five kilometres to school every day, even in winter!\n\nShe says children used to play outside all the time. They didn't have toys from shops; they used to make their own games with sticks and stones. One day, while she was walking home, she found an injured bird, and she looked after it for weeks until it could fly again.\n\nLife was hard, but she says people were happy because they helped each other. 'We didn't have much,' she told me, 'but we had time, and we had each other.' I love her stories. They remind me that the best things in life aren't things at all.", "Lee el texto y responde (A/B/C).", [
      mc("Where did the grandmother live when she was young?", ["In a city.", "On a farm.", "By the sea."], 1, "'lived on a farm'."),
      mc("What did the family use in the evenings?", ["Electricity.", "Candles.", "Torches."], 1, "'sit around candles'."),
      mc("How did she get to school?", ["By bus.", "She walked five kilometres.", "By bike."], 1, "'walk five kilometres to school'."),
      mc("What did she find while walking home one day?", ["A toy.", "An injured bird.", "Some money."], 1, "'she found an injured bird'."),
      mc("Why does she say people were happy?", ["They were rich.", "They helped each other.", "They had toys."], 1, "'people were happy because they helped each other'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My grandmother loves telling me how life (1)___ to be. She grew up on a (2)___ with no electricity, so they used candles. She used to (3)___ five kilometres to school! Children used to make their own (4)___ with sticks. One day, (5)___ she was walking home, she found an injured bird. Life was hard, (6)___ people were happy because they helped each other.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["used", "use", "uses"], 0, "'used to be'."),
      mc("Hueco 2", ["farm", "city", "lake"], 0, "'on a farm'."),
      mc("Hueco 3", ["walk", "walking", "walked"], 0, "used to walk."),
      mc("Hueco 4", ["games", "toys", "keys"], 0, "'make their own games'."),
      mc("Hueco 5", ["while", "when", "during"], 0, "acción larga → while."),
      mc("Hueco 6", ["but", "so", "and"], 0, "contraste → but."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nMy grandmother tells me amazing stories about the past. When she was young, she lived (1)___ a farm with no electricity, so they (2)___ to sit around candles. She used to (3)___ five kilometres to school! Children (4)___ to make their own games. One day, (5)___ she was walking home, she found an injured bird and looked after it. Life was hard, (6)___ people were happy.\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["on"], "'on a farm'."),
      fb("Hueco 2", ["used"], "'used to sit'."),
      fb("Hueco 3", ["walk"], "'used to walk'."),
      fb("Hueco 4", ["used"], "'used to make'."),
      fb("Hueco 5", ["while"], "'while she was walking'."),
      fb("Hueco 6", ["but"], "contraste → but."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cómo ha cambiado la vida", "Tu amigo/a inglés/a quiere saber cómo era la vida de tus abuelos. Escríbele un email (25 palabras o más) con:\n· cómo vivían antes (used to),\n· una diferencia con ahora,\n· qué te parece.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una niña de antaño camina al colegio por el campo.\n2) De camino, encuentra un pájaro herido.\n3) Lo cuida en casa hasta que puede volar.\nUsa el PASADO (used to + past continuous) y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Iris hablar de cómo era cada miembro de su familia de joven y empareja cada persona con lo que solía hacer (A/B/C…).", "This is Part Five. You will hear Iris talking about what her family members used to do when they were young. My mother used to play the piano and gave concerts. My father used to ride horses on his grandparents' farm. My aunt used to paint pictures of the countryside. My uncle used to climb mountains every summer. And my grandmother used to grow vegetables in a big garden.", [
      mc("Mother", ["played the piano", "rode horses", "painted"], 0, "'used to play the piano'."),
      mc("Father", ["rode horses", "climbed mountains", "painted"], 0, "'ride horses'."),
      mc("Aunt", ["painted", "played piano", "grew vegetables"], 0, "'used to paint'."),
      mc("Uncle", ["climbed mountains", "rode horses", "painted"], 0, "'climb mountains'."),
      mc("Grandmother", ["grew vegetables", "painted", "played piano"], 0, "'grow vegetables'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — cómo era tu infancia, un día en el campo, algo que te pasó de repente", "usar used to y los dos pasados", "I used to, I was … -ing when, it was so, such a"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: opiniones sobre si la vida era mejor antes o ahora; el examinador pregunta qué opinas y por qué", "comparar y dar opiniones", "I think, life used to, now, because, better, easier"),

    SUMMARY("Resumen de la Semana 8", [
      "Dominas used to, el past continuous y su contraste con el past simple.",
      "Graduas adjetivos (quite/very/too) y enfatizas con so/such.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: oraciones de relativo (who/which/that/where).",
    ]),
    INFO("Mini-simulacro de la Semana 8", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 9."),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "Recuerdos y hábitos del pasado",
  description: "used to, past continuous, past simple vs past continuous (when/while) y adverbios de grado (so/such). Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
