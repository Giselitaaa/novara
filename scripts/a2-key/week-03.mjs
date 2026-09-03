/**
 * A2 Key · Semana 3 — "Comparar y describir".
 * Gramática: comparativos, superlativos, as...as, cuantificadores
 * (much/many/a lot of/a few/a little), too/enough. Vocabulario: describir
 * personas, la ciudad, animales y naturaleza, tecnología.
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

const DAY11 = {
  title: "Día 11 — Comparativos · Describir personas",
  description: "Comparativos (-er / more … than) y as … as. Vocabulario: describir personas. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Comparar dos cosas o personas con comparativos y as … as.",
    summary: "Comparativos; as…as; describir personas; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'more big' en vez de 'bigger'.", "'more better'.", "'that' en vez de 'than'."],
    reviewPrompts: ["¿Comparativo de 'big', 'good', 'expensive'?", "¿Cómo se dice 'tan alto como'?"],
  },
  items: [
    TEXT("🔁 Semana 3. Ya hablas del presente y del pasado; ahora aprendes a COMPARAR y DESCRIBIR. Hoy: comparativos. Practicarás las 4 destrezas."),
    GRAMMAR("Comparativos", `Para comparar DOS cosas usamos el comparativo + than:
· Adjetivos CORTOS (1 sílaba) → + er: big → bigger, old → older, cheap → cheaper.
  (ortografía: big → bigger dobla; nice → nicer solo +r; happy → happier, y → i).
· Adjetivos LARGOS (2+ sílabas) → more + adjetivo: expensive → more expensive, beautiful → more beautiful.
· IRREGULARES: good → better, bad → worse, far → further.

Estructura: My brother is taller than me. This book is more interesting than that one.

IGUALDAD: as + adjetivo + as → She is as tall as her sister. (tan… como)
Negativo: not as … as → It isn't as cold as yesterday.`),
    WARN("Errores típicos del hispanohablante", "· ❌ more big → ✅ bigger.\n· ❌ more better → ✅ better.\n· ❌ taller that me → ✅ taller than me.\n· ❌ as tall than → ✅ as tall as."),
    grammarEx("Gramática — Comparativos", "Completa con el comparativo correcto.", [
      fb("My sister is ___ (tall) than me.", ["taller"], "corto → taller."),
      fb("This phone is ___ (expensive) than that one.", ["more expensive"], "largo → more expensive."),
      fb("Today is ___ (good) than yesterday.", ["better"], "irregular → better."),
      fb("A car is ___ (fast) than a bike.", ["faster"], "corto → faster."),
      mc("Choose:", ["more cheap", "cheaper", "cheapest"], 1, "corto → cheaper."),
      fb("She is as ___ (clever) as her brother.", ["clever"], "as + adjetivo + as."),
      fb("This film is ___ (bad) than the book.", ["worse"], "irregular → worse."),
    ]),
    GRAMMAR("Vocabulario del día — Describir personas", "Aspecto físico y personalidad."),
    deck("A2 Key S3D11 — Describir personas", [
      ["tall", "alto", "He is very tall.", "adjetivo", "tɔːl"],
      ["short", "bajo / corto", "She has short hair.", "adjetivo", "ʃɔːt"],
      ["curly", "rizado", "My sister has curly hair.", "adjetivo", "ˈkɜːli"],
      ["straight", "liso (pelo)", "He has straight black hair.", "adjetivo", "streɪt"],
      ["friendly", "simpático/a", "Our neighbours are friendly.", "adjetivo", "ˈfrendli"],
      ["shy", "tímido/a", "She's a bit shy.", "adjetivo", "ʃaɪ"],
      ["kind", "amable", "He's very kind to everyone.", "adjetivo", "kaɪnd"],
      ["clever", "listo/a", "She's clever and hard-working.", "adjetivo", "ˈklevə"],
      ["good-looking", "guapo/a", "He's tall and good-looking.", "adjetivo", "ɡʊdˈlʊkɪŋ"],
      ["beard", "barba", "My uncle has a beard.", "sustantivo", "bɪəd"],
    ]),
    vocabEx("Vocabulario — Describir personas", "Elige la opción correcta.", [
      mc("The opposite of 'tall' is ___.", ["short", "curly", "kind"], 0, "short."),
      mc("Hair that is not straight is ___.", ["curly", "shy", "tall"], 0, "curly."),
      mc("A person who is nice to others is ___.", ["friendly", "short", "straight"], 0, "friendly."),
      mc("Someone who is quiet with new people is ___.", ["clever", "shy", "tall"], 1, "shy."),
      mc("An intelligent person is ___.", ["clever", "kind", "short"], 0, "clever."),
      mc("Hair on a man's face is a ___.", ["beard", "curly", "straight"], 0, "beard."),
    ]),

    READING_HEAD,
    READING_P1("Descripciones y avisos", [
      mc("Lost notice: 'Lost: small brown dog, very friendly. Please call.'", ["A friendly small dog is lost.", "A big dog is for sale.", "A cat is lost."], 0, "'Lost: small brown dog, very friendly'."),
      mc("Dating app: 'Tall, kind man looking for someone to talk to.'", ["He wants to meet someone.", "He is selling something.", "He is lost."], 0, "'looking for someone'."),
      mc("Sign: 'Staff wanted — friendly people only.'", ["They want friendly staff.", "No staff needed.", "Only tall people."], 0, "'friendly people only'."),
      mc("Text: 'Your teacher is the man with the beard and glasses.'", ["The teacher has a beard.", "The teacher is a woman.", "No teacher today."], 0, "'the man with the beard'."),
      mc("Note: 'The new student is shy, please be kind to her.'", ["Be nice to the new student.", "The student is rude.", "No new student."], 0, "'please be kind to her'."),
      mc("Ad: 'Actors wanted — must be good-looking and confident.'", ["They want attractive, confident actors.", "Actors must be shy.", "No actors needed."], 0, "'good-looking and confident'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y amigos ideales", "THREE PEOPLE LOOKING FOR A FLATMATE\n\nA) Marco — quiet and tidy, studies a lot, needs a calm flatmate who doesn't make noise.\n\nB) Lena — friendly and sociable, loves cooking for others and having friends over.\n\nC) Sam — sporty and active, gets up early to run, wants a flatmate who likes exercise.", "Empareja cada persona con el compañero de piso ideal (A/B/C).", [
      mc("A quiet student who hates noise wants to live with…", ["A", "B", "C"], 0, "Marco: calm, tidy."),
      mc("A sociable cook who loves parties matches…", ["A", "B", "C"], 1, "Lena: friendly, cooking."),
      mc("A runner who exercises every morning matches…", ["A", "B", "C"], 2, "Sam: sporty, active."),
      mc("Someone who wants a tidy, calm home.", ["A", "B", "C"], 0, "A."),
      mc("Someone who enjoys sport and early mornings.", ["A", "B", "C"], 2, "C."),
      mc("Someone who likes having friends over for dinner.", ["A", "B", "C"], 1, "B."),
      mc("A person who studies a lot and needs quiet.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY TWO BEST FRIENDS\n\nI have two best friends, Nora and Ali, but they are very different. Nora is taller than me and has long, curly hair. She is quite shy when you first meet her, but she is one of the kindest people I know. She loves reading and is cleverer than anyone in our class.\n\nAli is shorter and has straight dark hair and a small beard. He is much more sociable than Nora — he talks to everyone and makes friends easily. He isn't as quiet as Nora, but he is just as kind.\n\nEven though they are so different, they get on really well. I'm lucky to have both of them. Nora helps me study, and Ali makes me laugh when I'm sad.", "Lee el texto y responde (A/B/C).", [
      mc("Who is taller?", ["The writer.", "Nora.", "Ali."], 1, "'Nora is taller than me'."),
      mc("What is Nora like when you first meet her?", ["Sociable.", "Shy.", "Rude."], 1, "'quite shy when you first meet her'."),
      mc("What does Ali look like?", ["Tall with curly hair.", "Short with a small beard.", "Tall with a beard."], 1, "'shorter… straight dark hair and a small beard'."),
      mc("Who is more sociable?", ["Nora.", "Ali.", "Neither."], 1, "'Ali is much more sociable'."),
      mc("How does Ali help the writer?", ["Helps them study.", "Makes them laugh.", "Cooks for them."], 1, "'Ali makes me laugh'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My brother and I are quite different. He is (1)___ than me — he's almost two metres! He has (2)___ hair, but mine is straight. People say he is more (3)___ than me because he talks to everyone. I'm a bit (4)___ with new people. But we are (5)___ as clever as each other at school, and he is just as (6)___ to our parents as I am.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["taller", "more tall", "tallest"], 0, "corto → taller."),
      mc("Hueco 2", ["curly", "curlier", "curliest"], 0, "'curly hair'."),
      mc("Hueco 3", ["sociable", "friendly than", "shy"], 0, "more sociable."),
      mc("Hueco 4", ["shy", "clever", "tall"], 0, "'a bit shy with new people'."),
      mc("Hueco 5", ["just", "more", "most"], 0, "'just as clever as'."),
      mc("Hueco 6", ["kind", "kinder", "kindest"], 0, "'as kind as'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Pam,\nYou asked about my new classmate, Tom. He's really nice! He's taller (1)___ me and has short curly hair. He's not (2)___ shy as I thought — he's actually very (3)___ and talks to everyone. He's also (4)___ intelligent than most people in the class. I think he (5)___ become a good friend. Do you (6)___ any new classmates too?\nBye,\nJan", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["than"], "'taller than me'."),
      fb("Hueco 2", ["as"], "'not as shy as'."),
      fb("Hueco 3", ["friendly", "sociable", "kind"], "adjetivo positivo."),
      fb("Hueco 4", ["more"], "'more intelligent than'."),
      fb("Hueco 5", ["will", "could", "might"], "futuro/posibilidad."),
      fb("Hueco 6", ["have"], "'Do you have…?'"),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Describe a un amigo/a", "Tu amigo/a inglés/a quiere conocer a alguien de tu grupo. Escríbele un email (25 palabras o más) con:\n· cómo es físicamente,\n· cómo es su personalidad,\n· por qué te cae bien.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una chica nueva llega a clase, tímida.\n2) Otra alumna se acerca y le habla.\n3) Las dos se ríen y se hacen amigas.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Which one is your brother? Man: The tall one with the beard, next to the door. Two. Woman: Is Anna taller than you? Man: No, we're the same height, actually. Three. Man: What's your new teacher like? Woman: She's really kind, but her classes are harder than before. Four. Woman: Do you prefer the red bag or the blue one? Man: The blue one — it's cheaper and nicer. Five. Man: Is the new café better than the old one? Woman: Yes, much better, and it's not as expensive.", [
      mc("1. Which one is the man's brother?", ["The short one.", "The tall one with the beard.", "The one with glasses."], 1, "'The tall one with the beard'."),
      mc("2. Is Anna taller than the man?", ["Yes.", "No, same height.", "She's shorter."], 1, "'we're the same height'."),
      mc("3. What are the new teacher's classes like?", ["Easier.", "Harder.", "The same."], 1, "'harder than before'."),
      mc("4. Which bag does the man prefer?", ["Red.", "Blue.", "Neither."], 1, "'The blue one — cheaper and nicer'."),
      mc("5. What does the woman say about the new café?", ["Worse.", "Much better and cheaper.", "More expensive."], 1, "'much better… not as expensive'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (tu familia y amigos)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre las personas cercanas — cómo es tu mejor amigo/a, en qué os parecéis o diferenciáis", "describir personas y compararlas", "my best friend, he/she is, taller than, more … than, as … as"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (personas)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre cualidades en la gente; el examinador pregunta qué cualidad valoras más y por qué", "expresar preferencias y dar razones", "I prefer, I like people who, because, kind, friendly"),

    SUMMARY("Resumen del Día 11", [
      "Comparativos: corto + er (taller), largo → more (more expensive), irregulares (better/worse).",
      "Estructura con 'than'; igualdad con as … as.",
      "Vocabulario para describir personas. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 12", "Compara a dos personas de tu familia (3 frases). Repasa las flashcards. Mañana: superlativos."),
  ],
};

const DAY12 = {
  title: "Día 12 — Superlativos · La ciudad",
  description: "Superlativos (the -est / the most). Vocabulario: la ciudad y los lugares. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Usar superlativos para destacar lo máximo/mínimo de un grupo.",
    summary: "Superlativos; the … in/of; la ciudad; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'the most big'.", "olvidar 'the'.", "'the best of the world' (→ in)."],
    reviewPrompts: ["¿Superlativo de 'big', 'good', 'expensive'?", "¿'in' o 'of' con lugares?"],
  },
  items: [
    TEXT("🔁 Repaso: comparativo de tall, expensive, good (taller, more expensive, better). Hoy el SUPERLATIVO (el más/el menos) y el vocabulario de la CIUDAD."),
    GRAMMAR("Superlativos", `Para destacar lo MÁXIMO de un grupo usamos the + superlativo:
· Adjetivos CORTOS → the + -est: the tallest, the biggest, the cheapest, the happiest.
· Adjetivos LARGOS → the most + adjetivo: the most expensive, the most beautiful.
· IRREGULARES: good → the best, bad → the worst, far → the furthest.

Estructura: It's the tallest building in the city. She's the best student in the class.
Con lugares se usa 'in': the biggest city in Spain (NO 'of Spain').
Con grupos/tiempo se usa 'of': the best day of my life.`),
    WARN("Errores típicos del hispanohablante", "· ❌ the most big → ✅ the biggest.\n· ❌ the more expensive (para superlativo) → ✅ the most expensive.\n· ❌ tallest building (sin the) → ✅ the tallest building.\n· ❌ the best of the world → ✅ the best in the world."),
    grammarEx("Gramática — Superlativos", "Completa con el superlativo correcto.", [
      fb("Everest is the ___ (high) mountain in the world.", ["highest"], "corto → highest."),
      fb("This is the ___ (expensive) hotel in town.", ["most expensive"], "largo → most expensive."),
      fb("He's the ___ (good) player in the team.", ["best"], "irregular → best."),
      fb("It was the ___ (bad) day of my life.", ["worst"], "irregular → worst."),
      mc("Choose:", ["the most cheap", "the cheapest", "cheaper"], 1, "corto → the cheapest."),
      fb("She's the ___ (clever) girl in the class.", ["cleverest"], "corto → cleverest."),
      mc("Choose the correct one:", ["the biggest city of Spain", "the biggest city in Spain", "biggest city in Spain"], 1, "the … in Spain."),
    ]),
    GRAMMAR("Vocabulario del día — La ciudad", "Lugares y sitios de una ciudad."),
    deck("A2 Key S3D12 — La ciudad", [
      ["city centre", "centro (de la ciudad)", "The shops are in the city centre.", "colocación", "ˌsɪti ˈsentə"],
      ["square", "plaza", "We met in the main square.", "sustantivo", "skweə"],
      ["bridge", "puente", "The bridge crosses the river.", "sustantivo", "brɪdʒ"],
      ["market", "mercado", "I buy fruit at the market.", "sustantivo", "ˈmɑːkɪt"],
      ["library", "biblioteca", "I study at the library.", "sustantivo", "ˈlaɪbrəri"],
      ["church", "iglesia", "The old church is beautiful.", "sustantivo", "tʃɜːtʃ"],
      ["crowded", "concurrido/lleno", "The streets were crowded.", "adjetivo", "ˈkraʊdɪd"],
      ["quiet", "tranquilo", "It's a quiet neighbourhood.", "adjetivo", "ˈkwaɪət"],
      ["neighbourhood", "barrio", "I live in a nice neighbourhood.", "sustantivo", "ˈneɪbəhʊd"],
      ["get lost", "perderse", "We got lost in the old town.", "phrasal verb", "ɡet ˈlɒst"],
    ]),
    vocabEx("Vocabulario — La ciudad", "Elige la opción correcta.", [
      mc("A place with many shops in the middle of town is the ___.", ["city centre", "bridge", "library"], 0, "city centre."),
      mc("You borrow books from the ___.", ["market", "library", "square"], 1, "library."),
      mc("A structure that crosses a river is a ___.", ["bridge", "church", "square"], 0, "bridge."),
      mc("An open place where you buy fresh food is a ___.", ["market", "library", "bridge"], 0, "market."),
      mc("A place full of people is ___.", ["quiet", "crowded", "cheap"], 1, "crowded."),
      mc("The area where you live is your ___.", ["neighbourhood", "square", "church"], 0, "neighbourhood."),
    ]),

    READING_HEAD,
    READING_P1("En la ciudad", [
      mc("Sign: 'City centre — 500 m straight ahead.'", ["The centre is close, go straight.", "The centre is closed.", "Turn left."], 0, "'500 m straight ahead'."),
      mc("Notice: 'Library closed for repairs until Monday.'", ["Library shut until Monday.", "Library open today.", "Library closed forever."], 0, "'closed… until Monday'."),
      mc("Sign: 'Market every Saturday in the main square.'", ["A market on Saturdays.", "No market.", "Market every day."], 0, "'every Saturday'."),
      mc("Bus stop: 'Bus 5 to the city centre every 10 minutes.'", ["Frequent buses to the centre.", "One bus a day.", "No buses."], 0, "'every 10 minutes'."),
      mc("Sign on bridge: 'No cycling on the bridge.'", ["Don't ride a bike here.", "Cycling allowed.", "The bridge is closed."], 0, "'No cycling'."),
      mc("Note: 'The church is open to visitors 9–5.'", ["Visit the church 9 to 5.", "Church closed.", "Church open all night."], 0, "'open to visitors 9–5'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y lugares", "THREE NEIGHBOURHOODS\n\nA) Old Town — historic streets, an old church and a famous square. Popular with tourists, quite crowded.\n\nB) Riverside — quiet area by the river, nice parks and a bridge, perfect for families.\n\nC) The Market District — lots of shops, cafés and a big daily market. Busy and lively.", "Empareja cada persona con el barrio ideal (A/B/C).", [
      mc("A tourist who loves history and old buildings.", ["A", "B", "C"], 0, "Old Town."),
      mc("A family who wants a calm area with parks.", ["A", "B", "C"], 1, "Riverside."),
      mc("Someone who loves shopping and markets.", ["A", "B", "C"], 2, "Market District."),
      mc("A person who enjoys walking by the river.", ["A", "B", "C"], 1, "B: by the river."),
      mc("Someone who wants a lively, busy place.", ["A", "B", "C"], 2, "C: busy, lively."),
      mc("A visitor who wants to see a famous square.", ["A", "B", "C"], 0, "A: famous square."),
      mc("Parents with children who want parks.", ["A", "B", "C"], 1, "B: parks, families."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "THE BEST CITY I'VE VISITED\n\nLast year I visited Prague, and I think it's the most beautiful city I've ever seen. The historic centre is amazing, with narrow streets and colourful buildings. The famous Charles Bridge is the oldest bridge in the city, and it was full of artists and musicians.\n\nOne morning, we got lost in the old town, but it didn't matter — every street had something interesting. The main square was the busiest place, with a huge clock and lots of cafés. We had the best hot chocolate of the whole trip there.\n\nMy favourite moment was in the evening, when the streets were quieter and the lights came on. Prague is definitely the best city I've visited, and I can't wait to go back.", "Lee el texto y responde (A/B/C).", [
      mc("What does the writer think of Prague?", ["It's boring.", "It's the most beautiful city.", "It's too modern."], 1, "'the most beautiful city I've ever seen'."),
      mc("What is Charles Bridge?", ["The newest bridge.", "The oldest bridge in the city.", "A square."], 1, "'the oldest bridge'."),
      mc("What happened one morning?", ["They lost their money.", "They got lost.", "It rained."], 1, "'we got lost in the old town'."),
      mc("What was the busiest place?", ["The bridge.", "The main square.", "The station."], 1, "'The main square was the busiest place'."),
      mc("When was the writer's favourite moment?", ["In the morning.", "At lunchtime.", "In the evening."], 2, "'My favourite moment was in the evening'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My city has changed a lot. The (1)___ centre is now the busiest part, full of shops. My favourite place is the old (2)___, where there's a market every week. The new (3)___ over the river is the (4)___ in the country. Some areas are very (5)___ with tourists, but my (6)___ is still quiet and calm.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["city", "town", "old"], 0, "'city centre'."),
      mc("Hueco 2", ["square", "bridge", "library"], 0, "'old square… market'."),
      mc("Hueco 3", ["bridge", "church", "market"], 0, "'over the river' → bridge."),
      mc("Hueco 4", ["longest", "longer", "long"], 0, "superlativo → longest."),
      mc("Hueco 5", ["crowded", "quiet", "cheap"], 0, "'crowded with tourists'."),
      mc("Hueco 6", ["neighbourhood", "market", "bridge"], 0, "'my neighbourhood… quiet'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Rob,\nI love my new city! The centre is (1)___ most beautiful part, with an old square and a famous bridge. It's much (2)___ crowded than my old town, but I like it. The library is the (3)___ building in the area — it's amazing. Yesterday I (4)___ lost, but a kind woman helped me. You (5)___ visit me soon! There's so (6)___ to see.\nSee you,\nEli", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["the"], "'the most beautiful part'."),
      fb("Hueco 2", ["more"], "'more crowded than'."),
      fb("Hueco 3", ["biggest", "oldest", "best"], "superlativo."),
      fb("Hueco 4", ["got"], "'got lost'."),
      fb("Hueco 5", ["should", "must", "can"], "sugerencia."),
      fb("Hueco 6", ["much"], "'so much to see'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Describe tu ciudad", "Tu amigo/a inglés/a quiere visitar tu ciudad. Escríbele un email (25 palabras o más) con:\n· cuál es el mejor lugar,\n· qué se puede hacer allí,\n· cuándo es mejor ir.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unos turistas miran un mapa en una plaza.\n2) Se pierden por las calles del casco antiguo.\n3) Alguien amable les indica el camino.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a tour guide giving information about a city tour. Welcome to the city tour! The tour starts at ten o'clock from the main square. First, we'll visit the old church, which is over four hundred years old. Then we'll walk across the famous bridge. The tour lasts about two hours. Tickets cost fifteen pounds, and children go free. Please wear comfortable shoes!", [
      fb("The tour starts at ___ o'clock.", ["ten", "10"], "'at ten o'clock'."),
      fb("It starts from the main ___.", ["square"], "'from the main square'."),
      fb("The church is over ___ years old.", ["four hundred", "400"], "'four hundred years old'."),
      fb("The tour lasts about ___ hours.", ["two", "2"], "'about two hours'."),
      fb("Tickets cost ___ pounds.", ["fifteen", "15"], "'fifteen pounds'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (tu ciudad)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre tu ciudad o pueblo — dónde vives, qué hay, cuál es el mejor lugar", "describir tu ciudad y usar superlativos", "I live in, there is, the best place, the most, you can"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (lugares)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre vivir en la ciudad o en el campo; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, the city, the countryside, because, crowded, quiet"),

    SUMMARY("Resumen del Día 12", [
      "Superlativos: the + -est (the tallest) / the most (the most expensive); irregulares (the best/worst).",
      "Con lugares: the … in (in Spain); con grupos/tiempo: of.",
      "Vocabulario de la ciudad. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 13", "Escribe cuál es el mejor y el peor lugar de tu ciudad (2 frases con superlativos). Repasa las flashcards. Mañana: cuantificadores (much/many)."),
  ],
};

const DAY13 = {
  title: "Día 13 — Cuantificadores (much/many/a lot of) · Los animales",
  description: "Contables e incontables, much/many/a lot of, how much/how many. Vocabulario: animales y naturaleza. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Usar cuantificadores según contables/incontables.",
    summary: "much/many/a lot of; how much/how many; animales; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'much people'.", "'many money'.", "'how much apples'."],
    reviewPrompts: ["¿much o many con 'water'?", "¿how much o how many con 'friends'?"],
  },
  items: [
    TEXT("🔁 Repaso: superlativo de good, big, expensive (best, biggest, most expensive). Hoy los CUANTIFICADORES (cuánto/cuántos) y el vocabulario de ANIMALES."),
    GRAMMAR("Contables/incontables y cuantificadores", `CONTABLES: se pueden contar (one apple, two apples). INCONTABLES: no (water, money, time, bread, information).

· many + contables plural: many books, many people.
· much + incontables: much water, much time (sobre todo en negativas/preguntas).
· a lot of / lots of: con AMBOS en afirmativas: a lot of books, a lot of water.

PREGUNTAR CANTIDAD:
· How many + contable: How many students are there?
· How much + incontable: How much money do you have?

Poca cantidad: a few + contables (a few friends); a little + incontable (a little milk).`),
    WARN("Errores típicos del hispanohablante", "· ❌ much people → ✅ many people / a lot of people.\n· ❌ many money → ✅ much money / a lot of money.\n· ❌ How much apples? → ✅ How many apples?\n· ❌ informations, advices → ✅ information, advice (incontables)."),
    grammarEx("Gramática — Cuantificadores", "Completa con la opción correcta.", [
      mc("There are ___ people here.", ["much", "many", "a little"], 1, "contable → many."),
      mc("I don't have ___ money.", ["many", "much", "a few"], 1, "incontable → much."),
      mc("___ students are in your class?", ["How much", "How many", "How"], 1, "contable → How many."),
      mc("___ milk do we need?", ["How many", "How much", "How"], 1, "incontable → How much."),
      fb("I have a ___ (poco) friends in London.", ["few"], "contable → a few."),
      fb("There's a ___ (poco) milk left.", ["little"], "incontable → a little."),
      mc("We saw ___ animals at the zoo.", ["much", "a lot of", "a little"], 1, "a lot of (ambos)."),
    ]),
    GRAMMAR("Vocabulario del día — Animales y naturaleza", "Animales y palabras de la naturaleza."),
    deck("A2 Key S3D13 — Animales y naturaleza", [
      ["wild animal", "animal salvaje", "Lions are wild animals.", "colocación", "waɪld ˈænɪml"],
      ["pet", "mascota", "My pet is a rabbit.", "sustantivo", "pet"],
      ["forest", "bosque", "There are deer in the forest.", "sustantivo", "ˈfɒrɪst"],
      ["river", "río", "We swam in the river.", "sustantivo", "ˈrɪvə"],
      ["mountain", "montaña", "The mountains are beautiful.", "sustantivo", "ˈmaʊntɪn"],
      ["insect", "insecto", "There are many insects in summer.", "sustantivo", "ˈɪnsekt"],
      ["dangerous", "peligroso", "Some snakes are dangerous.", "adjetivo", "ˈdeɪndʒərəs"],
      ["feed", "dar de comer", "Don't feed the animals.", "verbo", "fiːd"],
      ["nature", "naturaleza", "I love being in nature.", "sustantivo", "ˈneɪtʃə"],
      ["field", "campo (prado)", "The cows are in the field.", "sustantivo", "fiːld"],
    ]),
    vocabEx("Vocabulario — Animales y naturaleza", "Elige la opción correcta.", [
      mc("An animal you keep at home is a ___.", ["pet", "wild animal", "insect"], 0, "pet."),
      mc("A large area with many trees is a ___.", ["field", "forest", "river"], 1, "forest."),
      mc("A small animal like a fly or a bee is an ___.", ["insect", "pet", "mountain"], 0, "insect."),
      mc("Something that can hurt you is ___.", ["dangerous", "friendly", "quiet"], 0, "dangerous."),
      mc("To give food to an animal is to ___ it.", ["feed", "field", "forest"], 0, "feed."),
      mc("Water that flows to the sea is a ___.", ["river", "mountain", "field"], 0, "river."),
    ]),

    READING_HEAD,
    READING_P1("Animales y naturaleza", [
      mc("Zoo sign: 'Please do not feed the animals.'", ["Don't give food to animals.", "Feed the animals.", "The zoo is closed."], 0, "'do not feed'."),
      mc("Park notice: 'Keep dogs on a lead near the lake.'", ["Control your dog by the lake.", "No dogs allowed.", "Dogs can run free."], 0, "'on a lead'."),
      mc("Warning: 'Dangerous animals — do not enter.'", ["Don't go in, it's dangerous.", "Safe to enter.", "Free entry."], 0, "'Dangerous animals — do not enter'."),
      mc("Sign: 'Forest path closed after heavy rain.'", ["The path is shut.", "The path is open.", "No rain."], 0, "'path closed'."),
      mc("Note: 'Vet appointment for the cat at 4 pm.'", ["The cat sees the vet at 4.", "No appointment.", "The cat is lost."], 0, "'Vet appointment… at 4 pm'."),
      mc("Poster: 'Volunteers wanted to help at the animal shelter.'", ["They need help with animals.", "No help needed.", "Animals for sale."], 0, "'Volunteers wanted'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y actividades de naturaleza", "THREE NATURE ACTIVITIES\n\nA) Bird Watching Walk — a quiet morning walk to see and hear wild birds. Bring binoculars.\n\nB) River Kayaking — an exciting activity on the water. For people who like adventure and getting wet.\n\nC) Family Farm Visit — see and feed friendly animals like goats and rabbits. Great for young children.", "Empareja cada persona con la actividad ideal (A/B/C).", [
      mc("Someone who loves quiet mornings and wild birds.", ["A", "B", "C"], 0, "Bird Watching."),
      mc("An adventurous person who likes water sports.", ["A", "B", "C"], 1, "River Kayaking."),
      mc("Parents with small children who want to feed animals.", ["A", "B", "C"], 2, "Farm Visit."),
      mc("Someone who wants excitement and doesn't mind getting wet.", ["A", "B", "C"], 1, "B."),
      mc("A calm person who enjoys nature quietly.", ["A", "B", "C"], 0, "A."),
      mc("A family with young kids who like animals.", ["A", "B", "C"], 2, "C."),
      mc("Someone who needs binoculars for their hobby.", ["A", "B", "C"], 0, "A: bring binoculars."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A DAY IN THE MOUNTAINS\n\nLast weekend, my family and I spent a day walking in the mountains. It was a long journey, but there was so much beautiful nature to see. We started early because there were many hours of walking ahead.\n\nOn the way up, we saw a lot of wild animals. There were birds everywhere, and we even saw a family of deer near the forest. My little brother wanted to feed them, but our father said we shouldn't — wild animals can be dangerous, and it isn't good for them.\n\nAt the top, we ate our sandwiches by a small river. There weren't many people, so it was lovely and quiet. It was a tiring day, but one of the best of the summer. We didn't take much food, but nature gave us everything else.", "Lee el texto y responde (A/B/C).", [
      mc("Where did the family go?", ["The beach.", "The mountains.", "The city."], 1, "'walking in the mountains'."),
      mc("Why did they start early?", ["It was hot.", "There were many hours of walking.", "The bus was early."], 1, "'many hours of walking ahead'."),
      mc("What animals did they see near the forest?", ["Lions.", "Deer.", "Fish."], 1, "'a family of deer near the forest'."),
      mc("Why couldn't the brother feed the deer?", ["No food.", "Wild animals can be dangerous.", "They ran away."], 1, "'wild animals can be dangerous'."),
      mc("What was the top of the mountain like?", ["Crowded.", "Quiet.", "Noisy."], 1, "'weren't many people… quiet'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I love being in (1)___. Last summer we spent (2)___ of time in the countryside. There were so (3)___ birds and insects everywhere. One day we saw a (4)___ animal — a fox! We didn't (5)___ it, of course. There wasn't (6)___ noise, just the sound of the river. It was perfect.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["nature", "city", "forest"], 0, "'being in nature'."),
      mc("Hueco 2", ["a lot", "many", "much"], 0, "'a lot of time'."),
      mc("Hueco 3", ["much", "many", "little"], 1, "contable → many."),
      mc("Hueco 4", ["wild", "pet", "dangerous"], 0, "'a wild animal — a fox'."),
      mc("Hueco 5", ["feed", "field", "forest"], 0, "'didn't feed it'."),
      mc("Hueco 6", ["many", "much", "a few"], 1, "incontable → much noise."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sky,\nWe had an amazing day in nature! We walked in the forest and saw (1)___ of animals — birds, rabbits and even a deer! There weren't (2)___ people, so it was really quiet. We didn't take (3)___ food, just a few sandwiches. My brother wanted to (4)___ the ducks by the river. It (5)___ one of the best days of the summer. You (6)___ come with us next time!\nLove,\nJes", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["lots", "loads"], "'lots of animals'."),
      fb("Hueco 2", ["many"], "'weren't many people'."),
      fb("Hueco 3", ["much"], "'didn't take much food'."),
      fb("Hueco 4", ["feed"], "'feed the ducks'."),
      fb("Hueco 5", ["was"], "'It was one of the best'."),
      fb("Hueco 6", ["should", "must", "can", "could"], "sugerencia."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un día en la naturaleza", "Tu amigo/a inglés/a quiere saber de un día que pasaste en la naturaleza. Escríbele un email (25 palabras o más) con:\n· adónde fuiste,\n· qué animales o plantas viste,\n· si te gustó y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia camina por un bosque.\n2) Ven un ciervo entre los árboles.\n3) Comen un picnic junto a un río, felices.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigos hablando de una visita al zoo y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Kate and Sam, talking about a visit to the zoo. Kate: I went to the new zoo yesterday. It was great! Sam: Nice! How many animals did you see? Kate: Lots! But my favourite was the elephants — they're so big. Sam: Did you see the lions? Kate: Yes, but they were sleeping all day. Sam: Typical! Was it expensive? Kate: Not really. It was ten pounds, and children go free. Sam: And was it crowded? Kate: A bit, because it was the weekend, but it wasn't too bad.", [
      mc("When did Kate go to the zoo?", ["Today.", "Yesterday.", "Last week."], 1, "'I went… yesterday'."),
      mc("What was Kate's favourite animal?", ["Lions.", "Elephants.", "Monkeys."], 1, "'my favourite was the elephants'."),
      mc("What were the lions doing?", ["Eating.", "Sleeping.", "Running."], 1, "'they were sleeping all day'."),
      mc("How much did it cost?", ["Free.", "Ten pounds.", "Twenty pounds."], 1, "'It was ten pounds'."),
      mc("Why was it a bit crowded?", ["It was free.", "It was the weekend.", "It was raining."], 1, "'because it was the weekend'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (animales)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre animales y naturaleza — si tienes mascota, tu animal favorito, si te gusta la naturaleza", "hablar de gustos con cuantificadores", "I have a pet, my favourite animal, I like nature, a lot of"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (naturaleza)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre animales y actividades al aire libre; el examinador pregunta qué prefieres y por qué", "expresar gustos y dar razones", "I prefer, I like, because, animals, nature"),

    SUMMARY("Resumen del Día 13", [
      "many + contables, much + incontables, a lot of + ambos.",
      "How many (contable) / How much (incontable); a few / a little.",
      "Vocabulario de animales y naturaleza. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 14", "Escribe 4 frases con much/many/a lot of sobre tu ciudad o tu casa. Repasa las flashcards. Mañana: some/any/too/enough y tecnología."),
  ],
};

const DAY14 = {
  title: "Día 14 — some/any, too/enough · La tecnología",
  description: "some/any/no, too y enough. Vocabulario: tecnología y comunicación. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Usar some/any y expresar exceso/suficiencia con too/enough.",
    summary: "some/any/no; too/enough; tecnología; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["'too' y 'very' confundidos.", "'enough big' (orden).", "some en preguntas."],
    reviewPrompts: ["¿'too expensive' o 'very expensive'?", "¿'big enough' o 'enough big'?"],
  },
  items: [
    TEXT("🔁 Repaso: much/many/a lot of. Hoy some/any, too y enough — y el vocabulario de la TECNOLOGÍA, muy útil para el examen."),
    GRAMMAR("some / any · too / enough", `some / any / no:
· some en AFIRMATIVAS: I have some questions. (y en ofrecimientos: Would you like some tea?)
· any en NEGATIVAS y PREGUNTAS: I don't have any money. Is there any bread?
· no + sustantivo = ninguno: There's no milk.

TOO (demasiado — sentido negativo) va ANTES del adjetivo: It's too expensive (no puedo pagarlo). Compara con 'very' (muy), que no es negativo: It's very expensive but I'll buy it.

ENOUGH (suficiente) va DESPUÉS del adjetivo y ANTES del sustantivo:
· big enough (suficientemente grande), fast enough.
· enough time, enough money (delante del sustantivo).`),
    WARN("Errores típicos del hispanohablante", "· ❌ It's very small, I can't use it (si quieres decir 'demasiado') → ✅ It's too small.\n· ❌ enough big → ✅ big enough.\n· ❌ Do you have some money? → ✅ Do you have any money?\n· ❌ I have no any idea → ✅ I have no idea / I don't have any idea."),
    grammarEx("Gramática — some/any, too/enough", "Completa con la opción correcta.", [
      mc("I don't have ___ free time today.", ["some", "any", "no"], 1, "negativa → any."),
      mc("Would you like ___ coffee?", ["any", "some", "no"], 1, "ofrecimiento → some."),
      mc("This bag is ___ heavy. I can't lift it.", ["very", "too", "enough"], 1, "'too heavy' (imposible)."),
      fb("Is your room big ___ for two beds?", ["enough"], "big enough."),
      mc("There's ___ milk. We need to buy some.", ["some", "any", "no"], 2, "no milk."),
      fb("We don't have ___ money to buy it.", ["enough"], "enough money (delante del sustantivo)."),
      mc("Choose:", ["It's enough cheap.", "It's cheap enough.", "It's too cheap enough."], 1, "cheap enough."),
    ]),
    GRAMMAR("Vocabulario del día — La tecnología", "Aparatos y acciones digitales."),
    deck("A2 Key S3D14 — La tecnología", [
      ["screen", "pantalla", "The phone has a big screen.", "sustantivo", "skriːn"],
      ["charger", "cargador", "I forgot my charger.", "sustantivo", "ˈtʃɑːdʒə"],
      ["battery", "batería", "My battery is low.", "sustantivo", "ˈbætəri"],
      ["download", "descargar", "I downloaded a new app.", "verbo", "ˌdaʊnˈləʊd"],
      ["app", "aplicación", "This app is really useful.", "sustantivo", "æp"],
      ["online", "en línea", "I bought it online.", "adverbio", "ˌɒnˈlaɪn"],
      ["password", "contraseña", "I forgot my password.", "sustantivo", "ˈpɑːswɜːd"],
      ["switch on", "encender", "Switch on the computer.", "phrasal verb", "swɪtʃ ˈɒn"],
      ["switch off", "apagar", "Switch off your phone in class.", "phrasal verb", "swɪtʃ ˈɒf"],
      ["message", "mensaje", "She sent me a message.", "sustantivo", "ˈmesɪdʒ"],
    ]),
    vocabEx("Vocabulario — La tecnología", "Elige la opción correcta.", [
      mc("You need this to give your phone power: a ___.", ["charger", "screen", "message"], 0, "charger."),
      mc("A small program on your phone is an ___.", ["app", "online", "screen"], 0, "app."),
      mc("To get a file from the internet is to ___ it.", ["download", "switch off", "message"], 0, "download."),
      mc("The secret word to enter your account is your ___.", ["password", "battery", "screen"], 0, "password."),
      mc("The opposite of 'switch on' is ___.", ["switch off", "download", "online"], 0, "switch off."),
      mc("When your ___ is low, you need a charger.", ["battery", "screen", "app"], 0, "battery."),
    ]),

    READING_HEAD,
    READING_P1("Tecnología y avisos", [
      mc("Message: 'Wifi password is on the back of the router.'", ["Find the password on the router.", "No wifi.", "Change the password."], 0, "'password is on the back'."),
      mc("Sign: 'Please switch off phones during the film.'", ["Turn off phones.", "Use phones freely.", "No phones allowed inside."], 0, "'switch off phones'."),
      mc("App alert: 'Update available — download now.'", ["A new update to download.", "No updates.", "App deleted."], 0, "'Update available — download now'."),
      mc("Note: 'Your battery is low. Connect the charger.'", ["Charge the device.", "Battery is full.", "No battery."], 0, "'battery is low… charger'."),
      mc("Email: 'Your online order will arrive in 2 days.'", ["The order comes in two days.", "Order cancelled.", "Order collected."], 0, "'arrive in 2 days'."),
      mc("Sign: 'Free wifi for customers only.'", ["Wifi is free if you're a customer.", "Wifi costs money.", "No wifi."], 0, "'for customers only'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y aparatos", "THREE GADGETS ON SALE\n\nA) SmartWatch X — tells the time, counts your steps and shows messages. Great for sporty people.\n\nB) TabletPro — a big screen for reading, watching films and video calls. Good for families.\n\nC) MiniSpeaker — a small speaker for music, with a long battery. Perfect for parties and the beach.", "Empareja cada persona con el aparato ideal (A/B/C).", [
      mc("A runner who wants to count their steps.", ["A", "B", "C"], 0, "SmartWatch."),
      mc("A family who wants to watch films together.", ["A", "B", "C"], 1, "TabletPro."),
      mc("Someone who wants to play music at a party.", ["A", "B", "C"], 2, "MiniSpeaker."),
      mc("Someone who makes lots of video calls.", ["A", "B", "C"], 1, "B: video calls."),
      mc("A person who wants messages on their wrist.", ["A", "B", "C"], 0, "A: shows messages."),
      mc("Someone going to the beach who wants music.", ["A", "B", "C"], 2, "C: beach, battery."),
      mc("A sporty person who likes gadgets.", ["A", "B", "C"], 0, "A: sporty."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY PHONE AND ME\n\nLike most people, I use my phone a lot — maybe too much! In the morning, the first thing I do is switch it on and check my messages. I have some useful apps: one for the weather, one for the bus times, and one for learning English.\n\nLast week, I dropped my phone and the screen broke. It was a disaster! I had to take it to a shop, and it was too expensive to repair, so I bought a new one online. The new phone is much better — the battery lasts all day, which is great, because my old one was never charged enough.\n\nNow I try not to look at my phone too much. In the evening, I switch it off for an hour and read a book instead. It isn't easy, but I feel happier.", "Lee el texto y responde (A/B/C).", [
      mc("What does the writer do first in the morning?", ["Read a book.", "Check messages.", "Have breakfast."], 1, "'check my messages'."),
      mc("What happened last week?", ["The phone was stolen.", "The screen broke.", "The battery died."], 1, "'the screen broke'."),
      mc("Why didn't the writer repair the phone?", ["Too expensive.", "Too old.", "Too small."], 0, "'too expensive to repair'."),
      mc("What is good about the new phone?", ["The screen.", "The battery lasts all day.", "The price."], 1, "'the battery lasts all day'."),
      mc("What does the writer do in the evening now?", ["Watches films.", "Switches the phone off and reads.", "Plays games."], 1, "'switch it off… read a book'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My old laptop is (1)___ slow, so I bought a new one (2)___. It has a big (3)___ and a great battery. I use lots of (4)___ for work and study. Yesterday I forgot my (5)___, so the battery died! Luckily, I remembered my (6)___ and logged in quickly.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["too", "enough", "very much"], 0, "'too slow'."),
      mc("Hueco 2", ["online", "screen", "app"], 0, "'bought… online'."),
      mc("Hueco 3", ["screen", "charger", "message"], 0, "'a big screen'."),
      mc("Hueco 4", ["apps", "batteries", "passwords"], 0, "'lots of apps'."),
      mc("Hueco 5", ["charger", "screen", "message"], 0, "'forgot my charger… battery died'."),
      mc("Hueco 6", ["password", "app", "screen"], 0, "'remembered my password… logged in'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Max,\nI need your help! I bought a new phone (1)___, but I can't set it up. There are (2)___ many apps and I don't know which ones I need. The battery isn't charged (3)___, so it keeps switching (4)___. Also, I forgot my (5)___ for my email! Can you come over and help (6)___?\nThanks,\nLou", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["online"], "'bought… online'."),
      fb("Hueco 2", ["too"], "'too many apps'."),
      fb("Hueco 3", ["enough"], "'charged enough'."),
      fb("Hueco 4", ["off"], "'switching off'."),
      fb("Hueco 5", ["password"], "'forgot my password'."),
      fb("Hueco 6", ["me"], "'help me'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu aparato favorito", "Tu amigo/a inglés/a quiere saber qué tecnología usas. Escríbele un email (25 palabras o más) con:\n· cuál es tu aparato favorito,\n· para qué lo usas,\n· por qué te gusta.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un chico deja caer su teléfono al suelo.\n2) Lleva el teléfono a una tienda de reparaciones.\n3) Sale con un teléfono nuevo, contento.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. I use my phone mostly to send messages to my friends and family. Two. My favourite app helps me learn new English words every day. Three. My battery is terrible — it never lasts more than a few hours. Four. I do all my shopping online now; it's so much easier than going to the shops. Five. I always forget my passwords, so I have to write them down.", [
      mc("Person 1 is talking about…", ["sending messages", "shopping", "batteries"], 0, "'send messages'."),
      mc("Person 2 is talking about…", ["a learning app", "a battery", "a password"], 0, "'app helps me learn English'."),
      mc("Person 3 is talking about…", ["battery problems", "messages", "shopping"], 0, "'My battery is terrible'."),
      mc("Person 4 is talking about…", ["online shopping", "apps", "passwords"], 0, "'shopping online'."),
      mc("Person 5 is talking about…", ["passwords", "batteries", "messages"], 0, "'I always forget my passwords'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (tecnología)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre tecnología — qué aparatos usas, para qué usas el móvil, si compras online", "hablar de hábitos tecnológicos", "I use my phone to, I have, I usually, online, my favourite app"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (tecnología)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre tecnología y comprar online vs. en tienda; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, online, easier"),

    SUMMARY("Resumen del Día 14", [
      "some (afirmativas/ofrecimientos), any (negativas/preguntas), no + sustantivo.",
      "too + adjetivo (demasiado, negativo); adjetivo + enough / enough + sustantivo.",
      "Vocabulario de tecnología. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 15", "Escribe 3 frases con too y 3 con enough. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY15 = {
  title: "Día 15 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de comparar/describir y del vocabulario de la semana. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 3.",
  pedagogy: {
    objective: "Consolidar comparativos, superlativos y cuantificadores, y medir el progreso.",
    summary: "Repaso de comparar/describir/cuantificar; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 4."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 3. Consolidas comparar y describir, y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 3", `1) Comparativos: -er/more … than; as … as.
2) Superlativos: the -est / the most; irregulares (best/worst).
3) Cuantificadores: much/many/a lot of; how much/how many; a few/a little.
4) some/any/no; too + adjetivo; adjetivo + enough.`),
    grammarEx("Repaso mixto de gramática — Semana 3", "Completa o elige.", [
      fb("My house is ___ (big) than yours.", ["bigger"], "corto → bigger."),
      fb("This is the ___ (good) restaurant in town.", ["best"], "superlativo irregular."),
      mc("There are ___ people here.", ["much", "many", "a little"], 1, "contable → many."),
      mc("I don't have ___ money.", ["many", "much", "a few"], 1, "incontable → much."),
      fb("This coffee is too ___ (hot) to drink.", ["hot"], "too + adjetivo."),
      mc("Choose:", ["the most tall", "the tallest", "taller"], 1, "superlativo → the tallest."),
      fb("Is your room big ___ for a desk?", ["enough"], "big enough."),
      mc("Would you like ___ tea?", ["any", "some", "no"], 1, "ofrecimiento → some."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 3", "Repasa los mazos (personas, ciudad, animales, tecnología)."),
    vocabEx("Repaso de vocabulario — Semana 3", "Elige la opción correcta.", [
      mc("An intelligent person is ___.", ["clever", "short", "crowded"], 0, "clever."),
      mc("A place full of people is ___.", ["quiet", "crowded", "dangerous"], 1, "crowded."),
      mc("An animal you keep at home:", ["pet", "wild animal", "insect"], 0, "pet."),
      mc("The secret word for your account:", ["password", "screen", "charger"], 0, "password."),
      mc("A structure over a river:", ["bridge", "square", "market"], 0, "bridge."),
      mc("Something that can hurt you:", ["dangerous", "friendly", "kind"], 0, "dangerous."),
      mc("To get a file from the internet:", ["download", "switch off", "feed"], 0, "download."),
      mc("Hair that is not straight:", ["curly", "tall", "shy"], 0, "curly."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Quietest study area — no talking.'", ["Be silent here.", "You can talk.", "Closed."], 0, "'no talking'."),
      mc("Ad: 'The cheapest flights to Rome this month!'", ["Very low prices to Rome.", "Expensive flights.", "No flights."], 0, "'cheapest flights'."),
      mc("Notice: 'Too many cars — please use the bus.'", ["There are too many cars.", "No cars.", "Free parking."], 0, "'Too many cars'."),
      mc("Sign: 'This lift isn't big enough for bikes.'", ["Bikes don't fit.", "Bikes allowed.", "No lift."], 0, "'isn't big enough for bikes'."),
      mc("Note: 'We have some tickets left for tonight.'", ["A few tickets are available.", "No tickets.", "Sold out."], 0, "'some tickets left'."),
      mc("App: 'Your download is the most popular this week.'", ["It's very popular.", "Nobody downloaded it.", "It failed."], 0, "'the most popular'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y actividades", "THREE WEEKEND OPTIONS\n\nA) Photography Walk — walk around the prettiest streets and take photos. For creative people.\n\nB) Tech Workshop — learn to use new apps and gadgets. Great for beginners.\n\nC) Nature Reserve — see wild birds and animals in a quiet, natural place.", "Empareja cada persona con la actividad ideal (A/B/C).", [
      mc("Someone who loves taking beautiful photos.", ["A", "B", "C"], 0, "Photography Walk."),
      mc("A person who wants to learn about new gadgets.", ["A", "B", "C"], 1, "Tech Workshop."),
      mc("Someone who enjoys watching wild animals.", ["A", "B", "C"], 2, "Nature Reserve."),
      mc("A beginner with technology.", ["A", "B", "C"], 1, "B: for beginners."),
      mc("A creative person who likes walking.", ["A", "B", "C"], 0, "A: creative."),
      mc("Someone who wants a quiet, natural place.", ["A", "B", "C"], 2, "C: quiet, natural."),
      mc("A person interested in apps.", ["A", "B", "C"], 1, "B: apps."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "THE BEST DECISION\n\nSix months ago, I made one of the best decisions of my life: I moved from a big, crowded city to a small town near the mountains. In the city, everything was too fast and too expensive, and I never had enough time to relax.\n\nNow my life is much calmer. My new town is smaller and quieter, and the people are friendlier. There aren't as many shops, but there's a lovely market every Saturday. The best thing is nature: there are forests and rivers, and I see wild animals almost every day.\n\nOf course, the town isn't perfect — there isn't much to do at night, and it's further from the airport. But for me, it's the happiest I've ever been. Sometimes, less is more.", "Lee el texto y responde (A/B/C).", [
      mc("Where did the writer move to?", ["A bigger city.", "A small town near the mountains.", "The beach."], 1, "'a small town near the mountains'."),
      mc("What was the problem with the city?", ["Too quiet.", "Too fast and expensive.", "Too small."], 1, "'too fast and too expensive'."),
      mc("What are the people in the town like?", ["Ruder.", "Friendlier.", "Busier."], 1, "'the people are friendlier'."),
      mc("What is the best thing about the town?", ["The shops.", "Nature.", "The nightlife."], 1, "'The best thing is nature'."),
      mc("What is a disadvantage of the town?", ["Too crowded.", "Not much to do at night.", "Too expensive."], 1, "'isn't much to do at night'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I love my new town. It's much (1)___ than the city, and it's a lot (2)___ expensive. There aren't (3)___ shops, but there's a lovely market. The (4)___ thing is the nature — I see (5)___ of birds every day. The only problem is there isn't (6)___ to do at night.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["quieter", "more quiet", "quietest"], 0, "corto → quieter."),
      mc("Hueco 2", ["less", "fewer", "least"], 0, "'less expensive'."),
      mc("Hueco 3", ["much", "many", "a little"], 1, "contable → many shops."),
      mc("Hueco 4", ["best", "better", "good"], 0, "'The best thing'."),
      mc("Hueco 5", ["lots", "much", "many"], 0, "'lots of birds'."),
      mc("Hueco 6", ["many", "much", "a few"], 1, "incontable → much to do."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Kim,\nI love my new life! My town is much smaller (1)___ the city, and it's not (2)___ crowded. The people are (3)___ friendly and there's a lovely market. The (4)___ thing is the nature — there are (5)___ of animals. There isn't much to do at night, (6)___ I don't mind. Come and visit!\nLove,\nRo", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["than"], "'smaller than'."),
      fb("Hueco 2", ["as", "so", "too", "very"], "'not as crowded'."),
      fb("Hueco 3", ["very", "really", "so"], "intensificador."),
      fb("Hueco 4", ["best"], "'The best thing'."),
      fb("Hueco 5", ["lots", "loads"], "'lots of animals'."),
      fb("Hueco 6", ["but"], "contraste → but."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Compara dos lugares", "Tu amigo/a inglés/a duda entre vivir en la ciudad o en un pueblo. Escríbele un email (25 palabras o más) con:\n· cuál prefieres tú,\n· dos ventajas de ese lugar,\n· un consejo para tu amigo/a.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona vive estresada en una ciudad ruidosa.\n2) Se muda a un pueblo tranquilo.\n3) Pasea feliz por la naturaleza.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Mia hablar de las opiniones de su familia sobre distintos lugares y empareja cada persona con lo que prefiere (A/B/C…).", "This is Part Five. You will hear Mia talking about where each person in her family likes to spend the holidays. My mother prefers the beach, because she loves swimming and the sun. My father likes the mountains, because he enjoys walking and fresh air. My brother prefers big cities, because there's a lot to do and see. My sister loves the countryside, because it's quiet and full of animals. And my grandmother prefers staying at home, because she finds travelling too tiring.", [
      mc("Mother", ["the beach", "the mountains", "the city"], 0, "'prefers the beach'."),
      mc("Father", ["the beach", "the mountains", "home"], 1, "'likes the mountains'."),
      mc("Brother", ["big cities", "the countryside", "the beach"], 0, "'prefers big cities'."),
      mc("Sister", ["the countryside", "the city", "the beach"], 0, "'loves the countryside'."),
      mc("Grandmother", ["staying at home", "the mountains", "the beach"], 0, "'prefers staying at home'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — describe a alguien, compara tu ciudad con otra, habla de tu aparato favorito", "usar comparativos, superlativos y cuantificadores", "more … than, the best, a lot of, I prefer, because"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos comparando dos opciones (ciudad/campo, playa/montaña); el examinador pregunta qué prefieres y por qué", "comparar y dar razones", "I prefer, better, because, more … than, the best"),

    SUMMARY("Resumen de la Semana 3", [
      "Sabes comparar (comparativos, superlativos, as…as) y describir personas y lugares.",
      "Usas cuantificadores (much/many/a lot of) y some/any/too/enough.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: el futuro (going to / will) y planes.",
    ]),
    INFO("Mini-simulacro de la Semana 3", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 4."),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Comparar y describir",
  description: "Comparativos, superlativos, cuantificadores y some/any/too/enough. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
