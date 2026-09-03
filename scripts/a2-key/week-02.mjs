/**
 * A2 Key · Semana 2 — "El pasado y las experiencias".
 * Gramática: past simple (regular e irregular), was/were, there was/were,
 * preguntas en pasado y narrar (conectores). Vocabulario: comida, ropa/compras,
 * viajes, tiempo atmosférico. Cada día, las 4 destrezas con formato Cambridge.
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

const DAY6 = {
  title: "Día 6 — Past simple: verbos regulares",
  description: "Pasado de verbos regulares (-ed, ortografía y pronunciación), negativas y preguntas con did. Vocabulario: la comida. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Contar acciones pasadas con verbos regulares y formar negativas/preguntas con did.",
    summary: "Past simple regular; did/didn't; comida; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'did' + verbo en pasado ('did you went').", "-ed mal escrito.", "Olvidar que en negativa el verbo va en base."],
    reviewPrompts: ["¿Cómo se pronuncia -ed en 'wanted'?", "¿Cómo se hace la pregunta en pasado?"],
  },
  items: [
    TEXT("🔁 Semana 2. La semana pasada hablaste de tu vida en presente; esta semana aprendes a hablar del PASADO. Hoy: verbos regulares. Practicarás, como siempre, las 4 destrezas."),
    GRAMMAR("Past simple — verbos regulares", `Para acciones TERMINADAS en el pasado. Los verbos regulares añaden -ed (igual para todas las personas):
work → worked · play → played · watch → watched.

ORTOGRAFÍA:
· termina en -e: solo +d → live → lived, like → liked.
· consonante + y → -ied → study → studied, try → tried.
· una vocal + una consonante final tónica: se dobla → stop → stopped, plan → planned.

NEGATIVA: didn't + verbo BASE → I didn't work (NO 'didn't worked').
PREGUNTA: Did + sujeto + verbo BASE → Did you work yesterday? Respuestas cortas: Yes, I did. / No, I didn't.`),
    TIP("Pronunciación de -ed", `Tres sonidos:
· /t/ tras sonido sordo: worked, liked, watched.
· /d/ tras sonido sonoro/vocal: played, lived, arrived.
· /ɪd/ tras t o d: wanted, needed, decided (¡añade una sílaba!).`),
    WARN("Errores típicos del hispanohablante", "· ❌ Did you went? → ✅ Did you go?\n· ❌ I didn't worked → ✅ I didn't work.\n· ❌ studyed → ✅ studied.\n· ❌ stoped → ✅ stopped."),
    grammarEx("Gramática — Past simple regular", "Completa o elige.", [
      fb("Yesterday I ___ (work) from home.", ["worked"], "regular: worked."),
      fb("She ___ (study) all night.", ["studied"], "consonante + y → studied."),
      fb("They ___ (stop) at a café.", ["stopped"], "se dobla: stopped."),
      fb("We ___ (not/watch) TV last night.", ["didn't watch", "did not watch"], "didn't + base."),
      fb("___ you ___ (like) the film?", ["Did", "like"], "Did … like?"),
      mc("Choose the correct sentence:", ["I didn't liked it.", "I didn't like it.", "I not liked it."], 1, "didn't + base."),
      mc("How do you pronounce -ed in 'wanted'?", ["/t/", "/d/", "/ɪd/"], 2, "tras 't' → /ɪd/."),
    ]),
    GRAMMAR("Vocabulario del día — La comida", "Comidas y platos. Escucha la pronunciación."),
    deck("A2 Key S2D6 — La comida", [
      ["breakfast", "desayuno", "I have breakfast at eight.", "sustantivo", "ˈbrekfəst"],
      ["meal", "comida (plato/toma)", "Dinner is my favourite meal.", "sustantivo", "miːl"],
      ["dish", "plato (receta)", "Paella is a Spanish dish.", "sustantivo", "dɪʃ"],
      ["starter", "entrante", "I had soup as a starter.", "sustantivo", "ˈstɑːtə"],
      ["main course", "plato principal", "The main course was fish.", "colocación", "meɪn ˈkɔːs"],
      ["dessert", "postre", "We had cake for dessert.", "sustantivo", "dɪˈzɜːt"],
      ["tasty", "sabroso", "The soup was very tasty.", "adjetivo", "ˈteɪsti"],
      ["order", "pedir (en restaurante)", "We ordered pizza.", "verbo", "ˈɔːdə"],
      ["bill", "cuenta", "Can we have the bill, please?", "sustantivo", "bɪl"],
      ["vegetables", "verduras", "Eat your vegetables!", "sustantivo", "ˈvedʒtəblz"],
    ]),
    vocabEx("Vocabulario — La comida", "Elige la opción correcta.", [
      mc("The first meal of the day is ___.", ["dinner", "breakfast", "dessert"], 1, "breakfast."),
      mc("A sweet food at the end of a meal is a ___.", ["starter", "dessert", "dish"], 1, "dessert."),
      mc("In a restaurant, you ask for the ___ to pay.", ["bill", "order", "meal"], 0, "bill."),
      mc("Food that tastes good is ___.", ["tasty", "boring", "cheap"], 0, "tasty."),
      mc("The most important part of the meal is the ___.", ["starter", "main course", "dessert"], 1, "main course."),
      mc("Carrots and beans are ___.", ["desserts", "vegetables", "dishes"], 1, "vegetables."),
    ]),

    READING_HEAD,
    READING_P1("Comida y restaurantes", [
      mc("Restaurant sign: 'Kitchen closes at 10:30 pm.'", ["Last orders at 10:30.", "Opens at 10:30.", "Closed all evening."], 0, "'Kitchen closes at 10:30'."),
      mc("Menu note: 'All main courses come with a free salad.'", ["Salad costs extra.", "Salad is included with mains.", "No salad."], 1, "'free salad'."),
      mc("Text: 'Table booked for 4 at 8 pm under García.'", ["A reservation for four.", "A table for eight.", "No booking."], 0, "'Table booked for 4'."),
      mc("Café sign: 'Takeaway coffee 20% off before 9 am.'", ["Cheaper coffee early.", "Free coffee.", "No takeaway."], 0, "'20% off before 9 am'."),
      mc("Note: 'Please tell staff about any food allergies.'", ["Inform staff of allergies.", "No allergies allowed.", "Staff have allergies."], 0, "'tell staff about… allergies'."),
      mc("Sign: 'Fresh bread baked here every morning.'", ["Bread is made daily.", "No bread today.", "Bread from a factory."], 0, "'baked here every morning'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y restaurantes", "THREE RESTAURANTS\n\nA) La Toscana — Italian food, pizzas and pasta, family-friendly, children eat free on Sundays.\n\nB) Green Leaf — only vegetarian and vegan dishes, fresh and healthy, quiet atmosphere.\n\nC) The Grill House — meat and fish, big portions, open late until midnight.", "Empareja cada persona con el restaurante ideal (A/B/C).", [
      mc("The Ruiz family want cheap food for their kids on Sunday.", ["A", "B", "C"], 0, "children eat free on Sundays."),
      mc("Elena is vegetarian and wants healthy food.", ["A", "B", "C"], 1, "Green Leaf."),
      mc("Marco is very hungry and wants a big steak.", ["A", "B", "C"], 2, "Grill House: meat, big portions."),
      mc("Someone who wants to eat very late.", ["A", "B", "C"], 2, "C: open until midnight."),
      mc("A person who loves pizza and pasta.", ["A", "B", "C"], 0, "A: Italian."),
      mc("Someone who wants a quiet, healthy meal.", ["A", "B", "C"], 1, "B: quiet, healthy."),
      mc("A family with young children.", ["A", "B", "C"], 0, "A: family-friendly."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A MEAL TO REMEMBER\n\nLast summer, my family and I went to a small restaurant by the sea for my mother's birthday. We arrived at eight o'clock and sat at a table outside. The weather was perfect and we could hear the waves.\n\nFor starters, we shared some fresh fish and bread. Then, for the main course, my father ordered grilled chicken and I chose a seafood pasta. It was the tastiest pasta I have ever eaten! My mother didn't want a dessert, but the waiter brought a small cake with a candle as a surprise.\n\nWe stayed for three hours, talking and laughing. When the bill arrived, my father paid, and we walked home along the beach. It was a perfect evening.", "Lee el texto y responde (A/B/C).", [
      mc("Why did the family go to the restaurant?", ["It was cheap.", "For the mother's birthday.", "It was near their house."], 1, "'for my mother's birthday'."),
      mc("Where did they sit?", ["Inside.", "Outside by the sea.", "At the bar."], 1, "'at a table outside… hear the waves'."),
      mc("What did the writer order as a main course?", ["Grilled chicken.", "Fresh fish.", "Seafood pasta."], 2, "'I chose a seafood pasta'."),
      mc("What surprise did the waiter bring?", ["A free drink.", "A cake with a candle.", "A discount."], 1, "'a small cake with a candle'."),
      mc("How did they go home?", ["By car.", "By bus.", "They walked along the beach."], 2, "'walked home along the beach'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Yesterday we (1)___ to a new restaurant in town. We (2)___ a table near the window. I (3)___ a pizza and my friend chose a salad. The food was really (4)___. After the main course, we (5)___ some ice cream. At the end, we asked for the (6)___ and paid.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["went", "goed", "go"], 0, "past irregular: went."),
      mc("Hueco 2", ["booked", "cooked", "looked"], 0, "'booked a table'."),
      mc("Hueco 3", ["ordered", "asked", "took"], 0, "'ordered a pizza'."),
      mc("Hueco 4", ["tasty", "boring", "slow"], 0, "tasty."),
      mc("Hueco 5", ["had", "did", "made"], 0, "'had some ice cream'."),
      mc("Hueco 6", ["bill", "order", "menu"], 0, "'the bill'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Dan,\nLast weekend I went (1)___ a great restaurant with my family. We (2)___ there to celebrate my birthday. The food (3)___ delicious, especially the dessert! My dad (4)___ the bill because it was my special day. We didn't (5)___ home until midnight. You (6)___ come with us next time!\nBest,\nSara", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'went to'."),
      fb("Hueco 2", ["went"], "'We went there'."),
      fb("Hueco 3", ["was"], "'The food was delicious'."),
      fb("Hueco 4", ["paid"], "'paid the bill'."),
      fb("Hueco 5", ["get", "go"], "'get/go home'."),
      fb("Hueco 6", ["should", "can", "must", "could"], "sugerencia/posibilidad."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta una comida", "Tu amigo/a inglés/a quiere saber de una comida especial que tuviste. Escríbele un email (25 palabras o más) con:\n· adónde fuiste,\n· qué comiste,\n· si te gustó y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia entra en un restaurante.\n2) El camarero les trae la comida.\n3) Pagan la cuenta y salen contentos.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Waiter: Are you ready to order? Woman: Yes, I'll have the fish, please. Man: And I'll have the chicken. Two. Woman: What did you eat yesterday at the party? Man: There was pizza and salad, but I only had salad. Three. Man: How much was the bill? Woman: It was thirty euros for both of us. Four. Woman: Did you like the dessert? Man: Yes, the chocolate cake was amazing! Five. Woman: What time did the restaurant close? Man: At eleven, so we left just before.", [
      mc("1. What does the woman order?", ["Chicken.", "Fish.", "Pizza."], 1, "'I'll have the fish'."),
      mc("2. What did the man eat at the party?", ["Pizza.", "Salad.", "Both."], 1, "'I only had salad'."),
      mc("3. How much was the bill?", ["Thirteen euros.", "Thirty euros.", "Forty euros."], 1, "'thirty euros'."),
      mc("4. What dessert did the man like?", ["Ice cream.", "Chocolate cake.", "Fruit."], 1, "'the chocolate cake was amazing'."),
      mc("5. What time did the restaurant close?", ["Ten.", "Eleven.", "Midnight."], 1, "'At eleven'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (comida)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre comida y hábitos — qué desayunas, cuál es tu comida favorita, si cocinas", "hablar de hábitos con present simple y del pasado (what did you eat yesterday?)", "I usually eat, my favourite food, yesterday I had, I like"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (comida)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre comida y restaurantes; el examinador pregunta qué comida prefieres y por qué", "expresar gustos y dar razones", "I like, I love, I prefer, because, tasty, my favourite"),

    SUMMARY("Resumen del Día 6", [
      "Past simple regular: +ed (worked, studied, stopped); pronunciación /t/,/d/,/ɪd/.",
      "Negativa/pregunta con did/didn't + verbo base.",
      "Vocabulario de comida. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 7", "Escribe 4 frases sobre lo que hiciste ayer (verbos regulares). Repasa las flashcards. Mañana: verbos irregulares y was/were."),
  ],
};

const DAY7 = {
  title: "Día 7 — Past simple: verbos irregulares y was/were",
  description: "Verbos irregulares comunes y el pasado de 'be' (was/were). Vocabulario: ropa y compras. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Usar verbos irregulares frecuentes y was/were para hablar del pasado.",
    summary: "Irregulares; was/were; ropa y compras; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'goed', 'buyed' (regularizar irregulares).", "'was' con plural.", "'did' + irregular en pasado."],
    reviewPrompts: ["Pasado de go, buy, have, see.", "¿was o were con 'they'?"],
  },
  items: [
    TEXT("🔁 Repaso: pasado de work, study, stop (worked, studied, stopped). Hoy los verbos IRREGULARES (los más usados) y was/were."),
    GRAMMAR("Verbos irregulares y was/were", `Muchos verbos frecuentes NO añaden -ed; hay que aprenderlos:
go → went · have → had · do → did · see → saw · buy → bought · eat → ate · get → got · make → made · take → took · come → came · give → gave · find → found · think → thought.

En negativa y pregunta vuelven a la BASE con did: I didn't go · Did you see it?

'be' en pasado: was (I/he/she/it) · were (you/we/they).
· I was tired. · They were at home. · Was she happy? · We weren't late.`),
    WARN("Errores típicos del hispanohablante", "· ❌ goed, buyed → ✅ went, bought.\n· ❌ Did you saw? → ✅ Did you see?\n· ❌ They was → ✅ They were.\n· ❌ I was go → ✅ I went."),
    grammarEx("Gramática — Irregulares y was/were", "Completa con el pasado correcto.", [
      fb("Last year we ___ (go) to Italy.", ["went"], "go → went."),
      fb("She ___ (buy) a new phone.", ["bought"], "buy → bought."),
      fb("I ___ (see) a great film yesterday.", ["saw"], "see → saw."),
      fb("They ___ (be) very tired.", ["were"], "plural → were."),
      fb("He ___ (be) at school this morning.", ["was"], "singular → was."),
      mc("Choose:", ["Did you went?", "Did you go?", "Did you goed?"], 1, "did + base."),
      fb("We ___ (have) a great time.", ["had"], "have → had."),
    ]),
    GRAMMAR("Vocabulario del día — Ropa y compras", "Prendas y palabras de tiendas."),
    deck("A2 Key S2D7 — Ropa y compras", [
      ["clothes", "ropa", "I bought new clothes.", "sustantivo", "kləʊðz"],
      ["shirt", "camisa", "He's wearing a blue shirt.", "sustantivo", "ʃɜːt"],
      ["trousers", "pantalones", "These trousers are too long.", "sustantivo", "ˈtraʊzəz"],
      ["shoes", "zapatos", "I need new shoes.", "sustantivo", "ʃuːz"],
      ["jacket", "chaqueta", "Take a jacket, it's cold.", "sustantivo", "ˈdʒækɪt"],
      ["size", "talla", "What size are you?", "sustantivo", "saɪz"],
      ["try on", "probarse", "Can I try on this dress?", "phrasal verb", "traɪ ˈɒn"],
      ["expensive", "caro", "That coat is very expensive.", "adjetivo", "ɪkˈspensɪv"],
      ["cheap", "barato", "These shoes were cheap.", "adjetivo", "tʃiːp"],
      ["shop assistant", "dependiente/a", "The shop assistant helped me.", "colocación", "ˈʃɒp əˌsɪstənt"],
    ]),
    vocabEx("Vocabulario — Ropa y compras", "Elige la opción correcta.", [
      mc("You wear these on your feet: ___.", ["shoes", "shirt", "jacket"], 0, "shoes."),
      mc("The opposite of 'expensive' is ___.", ["cheap", "big", "new"], 0, "cheap."),
      mc("To put on clothes to see if they fit is to ___ them.", ["try on", "buy", "order"], 0, "try on."),
      mc("The person who helps you in a shop is the ___.", ["shop assistant", "waiter", "neighbour"], 0, "shop assistant."),
      mc("Your clothes size tells you the ___.", ["price", "size", "colour"], 1, "size."),
      mc("You wear a ___ when it's cold outside.", ["jacket", "size", "bill"], 0, "jacket."),
    ]),

    READING_HEAD,
    READING_P1("En las tiendas", [
      mc("Shop sign: 'Changing rooms upstairs.'", ["Try clothes upstairs.", "No changing rooms.", "Shop is upstairs."], 0, "'Changing rooms upstairs'."),
      mc("Label: 'Wash at 30°C. Do not iron.'", ["Iron this.", "Wash cool, don't iron.", "Wash hot."], 1, "'Wash at 30°C. Do not iron'."),
      mc("Sign: 'Sale ends Sunday — up to 50% off.'", ["Sale finishes Sunday.", "Sale starts Sunday.", "No sale."], 0, "'Sale ends Sunday'."),
      mc("Receipt note: 'Return items within 30 days with receipt.'", ["No returns.", "Return within a month with the receipt.", "Return anytime."], 1, "'within 30 days with receipt'."),
      mc("Text: 'Your order is ready to collect in store.'", ["Collect your order.", "Order cancelled.", "Order delivered home."], 0, "'ready to collect in store'."),
      mc("Sign: 'Only 4 items in the fitting room.'", ["Max four items to try on.", "Buy four items.", "Room for four people."], 0, "'Only 4 items'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y tiendas", "THREE SHOPS\n\nA) Style Zone — cheap, fashionable clothes for teenagers. New styles every week.\n\nB) Classic Wear — smart clothes for work: suits, shirts and jackets. Not cheap, but high quality.\n\nC) Sports World — trainers, shorts and sportswear for running and the gym.", "Empareja cada persona con la tienda ideal (A/B/C).", [
      mc("A teenager who wants cheap, trendy clothes.", ["A", "B", "C"], 0, "Style Zone."),
      mc("A man who needs a suit for the office.", ["A", "B", "C"], 1, "Classic Wear."),
      mc("A woman who wants new running trainers.", ["A", "B", "C"], 2, "Sports World."),
      mc("Someone who wants high-quality work clothes.", ["A", "B", "C"], 1, "B: high quality."),
      mc("A student with little money who likes fashion.", ["A", "B", "C"], 0, "A: cheap, fashionable."),
      mc("Someone who goes to the gym a lot.", ["A", "B", "C"], 2, "C: sportswear."),
      mc("A person who wants a smart jacket for work.", ["A", "B", "C"], 1, "B: jackets for work."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A SHOPPING TRIP\n\nLast Saturday, I went shopping in the city centre with my best friend, Nora. We wanted to buy clothes for a party. First, we visited a big shop with a summer sale. I tried on three dresses, but they were all too big, so I didn't buy any.\n\nNora had more luck. She found a beautiful red jacket, and it was half price! The shop assistant was very friendly and helped us a lot. After that, we bought some shoes in another shop. Mine were quite expensive, but I really loved them.\n\nWe were tired after three hours, so we stopped for a coffee. It was a great day, and now I have new shoes for the party!", "Lee el texto y responde (A/B/C).", [
      mc("Why did they go shopping?", ["For a party.", "For school.", "For work."], 0, "'clothes for a party'."),
      mc("Why didn't the writer buy a dress?", ["Too expensive.", "Too big.", "Wrong colour."], 1, "'they were all too big'."),
      mc("What did Nora buy?", ["A dress.", "A red jacket.", "Shoes."], 1, "'a beautiful red jacket'."),
      mc("What was expensive?", ["Nora's jacket.", "The writer's shoes.", "The coffee."], 1, "'Mine were quite expensive' (shoes)."),
      mc("How did they feel after three hours?", ["Bored.", "Tired.", "Angry."], 1, "'We were tired'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Yesterday I (1)___ shopping for a new jacket. The first shop was too (2)___, so I went to another one. There, I (3)___ on a nice blue jacket in my (4)___. The shop (5)___ said it looked great. It wasn't cheap, but I (6)___ it because I loved it.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["went", "made", "did"], 0, "'went shopping'."),
      mc("Hueco 2", ["expensive", "cheap", "small"], 0, "expensive → went elsewhere."),
      mc("Hueco 3", ["tried", "put", "wore"], 0, "'tried on'."),
      mc("Hueco 4", ["size", "price", "colour"], 0, "'in my size'."),
      mc("Hueco 5", ["assistant", "waiter", "driver"], 0, "shop assistant."),
      mc("Hueco 6", ["bought", "sold", "paid"], 0, "'bought it'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Kim,\nGuess what! Yesterday I (1)___ shopping and I found an amazing jacket. It (2)___ half price! The shop assistant (3)___ very helpful and I (4)___ it immediately. I also bought new shoes, (5)___ they were a bit expensive. I can't (6)___ to wear them at the party!\nLove,\nJo", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["went"], "'went shopping'."),
      fb("Hueco 2", ["was"], "'It was half price'."),
      fb("Hueco 3", ["was"], "'was very helpful'."),
      fb("Hueco 4", ["bought"], "'I bought it'."),
      fb("Hueco 5", ["but"], "contraste → but."),
      fb("Hueco 6", ["wait"], "'can't wait to'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta unas compras", "Tu amigo/a inglés/a quiere saber de un día de compras. Escríbele un email (25 palabras o más) con:\n· adónde fuiste,\n· qué compraste,\n· cuánto costó o si fue caro/barato.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una chica ve una chaqueta en un escaparate.\n2) Se la prueba en la tienda.\n3) Sale feliz con su bolsa de compra.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a man leaving a message for his friend about a shopping centre. Hi Tom, it's Alex. I'm at the new shopping centre on King Street. It's huge! There are more than fifty shops. The sports shop has a big sale — trainers are only twenty pounds. The centre is open until nine o'clock tonight. Oh, and there's free parking for two hours. See you later!", [
      fb("Shopping centre on ___ Street", ["King"], "'on King Street'."),
      fb("Number of shops: more than ___", ["fifty", "50"], "'more than fifty shops'."),
      fb("Trainers cost only ___ pounds.", ["twenty", "20"], "'only twenty pounds'."),
      fb("Open until ___ o'clock.", ["nine", "9"], "'until nine o'clock'."),
      fb("Free ___ for two hours.", ["parking"], "'free parking'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (ropa/compras)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre ropa y compras — qué ropa te gusta, dónde compras, qué compraste hace poco", "hablar de gustos y del pasado (I bought…)", "I like wearing, I usually buy, last week I bought, my favourite"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (compras)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre ir de compras y la ropa; el examinador pregunta qué prefieres y por qué", "expresar gustos y dar razones", "I prefer, I like, because, expensive, cheap"),

    SUMMARY("Resumen del Día 7", [
      "Verbos irregulares (went, bought, saw, had…) y was/were.",
      "En negativa/pregunta, vuelven a la base con did.",
      "Vocabulario de ropa y compras. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 8", "Escribe 5 frases sobre un día pasado con verbos irregulares. Repasa las flashcards. Mañana: there was/were y viajes."),
  ],
};

const DAY8 = {
  title: "Día 8 — there was/were y expresiones de pasado · Viajes",
  description: "there was/there were, expresiones de tiempo pasado (ago, last, yesterday). Vocabulario: viajes y vacaciones. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Describir situaciones pasadas con there was/were y situarlas con expresiones de tiempo.",
    summary: "there was/were; ago/last/yesterday; viajes; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'there were a' (singular).", "'ago' mal colocado.", "'last the summer'."],
    reviewPrompts: ["¿was o were con 'people'?", "¿'two years ago' o 'ago two years'?"],
  },
  items: [
    TEXT("🔁 Repaso: pasado de go, buy, see, have (went, bought, saw, had). Hoy describes lugares en pasado (there was/were) y hablas de VIAJES."),
    GRAMMAR("there was / there were · expresiones de pasado", `PARA DESCRIBIR QUÉ HABÍA:
· Singular: There was a castle. · There wasn't a lift.
· Plural: There were lots of people. · There weren't any shops.
· Pregunta: Was there a pool? Were there any beaches?

EXPRESIONES DE TIEMPO PASADO:
· ago (hace): two years ago, a week ago (va al FINAL).
· last: last week, last summer, last night (sin 'the').
· yesterday, the day before yesterday, in 2019, when I was a child.`),
    WARN("Errores típicos del hispanohablante", "· ❌ There were a castle → ✅ There was a castle.\n· ❌ ago two years → ✅ two years ago.\n· ❌ the last summer → ✅ last summer.\n· ❌ There was many people → ✅ There were many people."),
    grammarEx("Gramática — there was/were y tiempo", "Completa con la opción correcta.", [
      fb("___ a big garden behind the house.", ["There was"], "singular → There was."),
      fb("___ lots of tourists on the beach.", ["There were"], "plural → There were."),
      fb("We went to Paris two years ___.", ["ago"], "ago al final."),
      fb("I saw them ___ night.", ["last"], "last night."),
      mc("Choose:", ["Was there a pool?", "Were there a pool?", "There was a pool?"], 0, "singular pregunta → Was there."),
      fb("___ there any shops near the hotel?", ["Were"], "plural pregunta → Were there."),
      mc("Choose the correct one:", ["I was born in 2005.", "I born in 2005.", "I was born ago 2005."], 0, "'I was born in 2005'."),
    ]),
    GRAMMAR("Vocabulario del día — Viajes y vacaciones", "Palabras para viajar."),
    deck("A2 Key S2D8 — Viajes y vacaciones", [
      ["trip", "viaje (corto)", "We went on a trip to the mountains.", "sustantivo", "trɪp"],
      ["flight", "vuelo", "The flight was three hours.", "sustantivo", "flaɪt"],
      ["luggage", "equipaje", "I packed my luggage.", "sustantivo", "ˈlʌɡɪdʒ"],
      ["abroad", "al extranjero", "We travelled abroad last year.", "adverbio", "əˈbrɔːd"],
      ["book", "reservar", "We booked a hotel online.", "verbo", "bʊk"],
      ["tourist", "turista", "The city was full of tourists.", "sustantivo", "ˈtʊərɪst"],
      ["sightseeing", "hacer turismo", "We went sightseeing all day.", "sustantivo", "ˈsaɪtsiːɪŋ"],
      ["souvenir", "recuerdo (regalo)", "I bought a souvenir.", "sustantivo", "ˌsuːvəˈnɪə"],
      ["journey", "trayecto/viaje", "The journey took five hours.", "sustantivo", "ˈdʒɜːni"],
      ["passport", "pasaporte", "Don't forget your passport!", "sustantivo", "ˈpɑːspɔːt"],
    ]),
    vocabEx("Vocabulario — Viajes", "Elige la opción correcta.", [
      mc("You need this to travel to another country: ___.", ["passport", "luggage", "souvenir"], 0, "passport."),
      mc("To travel to another country is to go ___.", ["abroad", "sightseeing", "home"], 0, "abroad."),
      mc("Your bags and suitcases are your ___.", ["luggage", "flight", "journey"], 0, "luggage."),
      mc("To reserve a hotel is to ___ it.", ["book", "buy", "try"], 0, "book."),
      mc("A small gift you buy on holiday is a ___.", ["souvenir", "ticket", "menu"], 0, "souvenir."),
      mc("Visiting famous places is called ___.", ["sightseeing", "booking", "packing"], 0, "sightseeing."),
    ]),

    READING_HEAD,
    READING_P1("Viajes y transporte", [
      mc("Airport sign: 'Gate 12 closes 20 minutes before departure.'", ["Arrive before the gate closes.", "The gate never closes.", "Departure is at 12."], 0, "'closes 20 minutes before departure'."),
      mc("Hotel note: 'Breakfast served 7–10 am.'", ["Breakfast in the morning.", "No breakfast.", "Breakfast all day."], 0, "'7–10 am'."),
      mc("Sign: 'Keep your luggage with you at all times.'", ["Watch your bags.", "Leave your bags.", "No luggage allowed."], 0, "'Keep your luggage with you'."),
      mc("Text: 'Flight BA22 delayed by one hour.'", ["The flight is early.", "The flight is one hour late.", "The flight is cancelled."], 1, "'delayed by one hour'."),
      mc("Sign: 'Passport control — have documents ready.'", ["Show your documents.", "No documents needed.", "Buy a passport."], 0, "'have documents ready'."),
      mc("Note: 'Free city map at reception.'", ["Get a free map at reception.", "Maps cost money.", "No maps."], 0, "'Free city map'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y viajes", "THREE HOLIDAYS\n\nA) Beach Resort — sun, sea and swimming pools. Perfect for relaxing and doing nothing.\n\nB) City Break — museums, restaurants and shopping in a famous capital. Lots to see.\n\nC) Mountain Adventure — walking, climbing and camping in nature. For active people.", "Empareja cada persona con las vacaciones ideales (A/B/C).", [
      mc("Ana just wants to relax and swim.", ["A", "B", "C"], 0, "Beach Resort."),
      mc("Leo loves art, food and shopping.", ["A", "B", "C"], 1, "City Break."),
      mc("Sara enjoys walking and camping.", ["A", "B", "C"], 2, "Mountain Adventure."),
      mc("Someone who wants to visit museums.", ["A", "B", "C"], 1, "B: museums."),
      mc("A person who loves the sun and the sea.", ["A", "B", "C"], 0, "A: sun, sea."),
      mc("An active person who likes nature.", ["A", "B", "C"], 2, "C: active, nature."),
      mc("Someone who wants to do nothing and rest.", ["A", "B", "C"], 0, "A: relaxing."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY FAVOURITE TRIP\n\nTwo years ago, I went on a trip to Scotland with my sister. It was our first time abroad together. We booked a small hotel in Edinburgh and stayed for a week.\n\nThe weather wasn't great — there was a lot of rain! — but we didn't mind. Every day we went sightseeing. There was an old castle in the centre of the city, and we visited it on the first morning. There were also lots of friendly people and cosy cafés.\n\nMy favourite day was when we travelled to the mountains. The views were beautiful and we took hundreds of photos. Before we came home, I bought a souvenir for my parents. It was an unforgettable holiday, and I want to go back one day.", "Lee el texto y responde (A/B/C).", [
      mc("When did the writer go to Scotland?", ["Last week.", "Two years ago.", "Last summer."], 1, "'Two years ago'."),
      mc("How was the weather?", ["Sunny.", "Rainy.", "Snowy."], 1, "'a lot of rain'."),
      mc("What did they visit on the first morning?", ["A museum.", "A castle.", "The mountains."], 1, "'an old castle… on the first morning'."),
      mc("What was the writer's favourite day?", ["The castle day.", "The mountains day.", "The shopping day."], 1, "'My favourite day was… the mountains'."),
      mc("What did the writer buy?", ["A photo.", "A souvenir for the parents.", "A hotel."], 1, "'a souvenir for my parents'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last summer we went (1)___ to Greece. We (2)___ a nice hotel near the beach. The (3)___ was only two hours. Every day we went (4)___ and visited old temples. There (5)___ lots of tourists, but it wasn't too busy. Before we left, I bought a (6)___ for my best friend.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["abroad", "home", "away"], 0, "'went abroad'."),
      mc("Hueco 2", ["booked", "cooked", "looked"], 0, "'booked a hotel'."),
      mc("Hueco 3", ["flight", "luggage", "passport"], 0, "'flight was two hours'."),
      mc("Hueco 4", ["sightseeing", "shopping", "swimming"], 0, "'went sightseeing… temples'."),
      mc("Hueco 5", ["was", "were", "is"], 1, "'There were lots of tourists'."),
      mc("Hueco 6", ["souvenir", "ticket", "passport"], 0, "'a souvenir'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ben,\nI'm back from my holiday! Last week I went (1)___ Portugal with my family. We stayed (2)___ a hotel near the sea. There (3)___ a beautiful beach and the food was amazing. We (4)___ sightseeing every day and I took lots (5)___ photos. I bought a small souvenir (6)___ you!\nSee you soon,\nMia", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'went to Portugal'."),
      fb("Hueco 2", ["in", "at"], "'stayed in/at a hotel'."),
      fb("Hueco 3", ["was"], "'There was a beautiful beach'."),
      fb("Hueco 4", ["went"], "'went sightseeing'."),
      fb("Hueco 5", ["of"], "'lots of photos'."),
      fb("Hueco 6", ["for"], "'a souvenir for you'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta un viaje", "Tu amigo/a inglés/a quiere saber de un viaje que hiciste. Escríbele un email (25 palabras o más) con:\n· adónde fuiste y cuándo,\n· qué hiciste allí,\n· qué te gustó más.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia hace las maletas en casa.\n2) Suben a un avión.\n3) Llegan a una playa soleada.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigos hablando de sus vacaciones y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Emma and Chris, talking about their summer holidays. Emma: Hi Chris, how was your holiday? Chris: Great! I went to Italy with my brother. Emma: Lovely! How did you travel? Chris: We flew to Rome, and then we took the train to Florence. Emma: Nice. What did you do there? Chris: Lots of sightseeing — we visited museums and old churches. The food was amazing too. Emma: Did you buy anything? Chris: Yes, I bought a leather bag as a souvenir. What about you, Emma? Emma: I stayed at home this year and saved money for next summer.", [
      mc("Where did Chris go?", ["Spain.", "Italy.", "France."], 1, "'I went to Italy'."),
      mc("How did they travel from Rome to Florence?", ["By plane.", "By train.", "By car."], 1, "'we took the train to Florence'."),
      mc("What did they do in Italy?", ["Sightseeing.", "Swimming.", "Shopping only."], 0, "'Lots of sightseeing'."),
      mc("What souvenir did Chris buy?", ["A hat.", "A leather bag.", "A book."], 1, "'a leather bag'."),
      mc("What did Emma do this year?", ["Went to Italy.", "Stayed home and saved money.", "Went to the beach."], 1, "'I stayed at home… saved money'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (viajes)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre viajes — adónde te gusta viajar, un viaje que hiciste, cómo prefieres viajar", "hablar de viajes en presente y pasado", "I like travelling, last year I went, I prefer, by plane"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (vacaciones)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre tipos de vacaciones (playa, ciudad, montaña); el examinador pregunta qué prefieres y por qué", "expresar gustos y dar razones", "I prefer, I like, because, the beach, sightseeing"),

    SUMMARY("Resumen del Día 8", [
      "there was (sing.) / there were (plural) para describir el pasado.",
      "Expresiones: ago (al final), last (sin 'the'), yesterday, in 2019.",
      "Vocabulario de viajes. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 9", "Describe un lugar que visitaste con there was/were (4 frases). Repasa las flashcards. Mañana: preguntas en pasado y cómo narrar."),
  ],
};

const DAY9 = {
  title: "Día 9 — Preguntas en pasado y narrar · El tiempo atmosférico",
  description: "Preguntas en past simple (Wh-) y conectores para narrar. Vocabulario: el tiempo y las estaciones. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Hacer preguntas en pasado y narrar una historia con conectores.",
    summary: "Past questions; conectores (first/then/after that/finally); el tiempo; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["'Where you went?'", "'What did happened?'", "orden de la pregunta."],
    reviewPrompts: ["¿Cómo preguntas 'a qué hora llegaste'?", "Nombra 3 conectores para narrar."],
  },
  items: [
    TEXT("🔁 Repaso: there was/were + ago/last. Hoy aprendes a PREGUNTAR en pasado y a NARRAR una historia con conectores — clave para el Writing Parte 7."),
    GRAMMAR("Preguntas en past simple y conectores", `PREGUNTAS: (Question word) + did + sujeto + verbo BASE:
· Where did you go? · What did you do? · When did they arrive? · Why did she leave?
Con 'be': Was it good? Were you tired? Where were you?
Pregunta de sujeto (sin did): Who won the match? What happened?

CONECTORES PARA NARRAR (orden de una historia):
first (primero) → then / after that (luego/después) → later (más tarde) → in the end / finally (al final).
· First, we arrived at the airport. Then we found our hotel. Finally, we went to the beach.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Where you went? → ✅ Where did you go?\n· ❌ What did happened? → ✅ What happened? (pregunta de sujeto)\n· ❌ Did you was happy? → ✅ Were you happy?\n· ❌ When you arrived? → ✅ When did you arrive?"),
    grammarEx("Gramática — Preguntas en pasado y narrar", "Ordena o completa.", [
      fb("Order: (you / where / did / go) → ___?", ["where did you go"], "Where did you go?"),
      fb("Order: (they / when / did / arrive) → ___?", ["when did they arrive"], "When did they arrive?"),
      mc("Subject question — choose:", ["What did happen?", "What happened?", "What did happened?"], 1, "'What happened?'"),
      mc("Choose:", ["Did you was late?", "Were you late?", "Was you late?"], 1, "'Were you late?'"),
      fb("___ did she leave early? — Because she was tired.", ["Why"], "Why."),
      fb("Narra: First we ate, ___ we danced, finally we went home.", ["then", "after that", "later"], "conector de secuencia."),
      fb("___ time did the train arrive?", ["What"], "'What time…?'"),
    ]),
    GRAMMAR("Vocabulario del día — El tiempo y las estaciones", "Para hablar del clima."),
    deck("A2 Key S2D9 — El tiempo", [
      ["weather", "tiempo (clima)", "What's the weather like?", "sustantivo", "ˈweðə"],
      ["sunny", "soleado", "It was sunny all day.", "adjetivo", "ˈsʌni"],
      ["rainy", "lluvioso", "It's a rainy day.", "adjetivo", "ˈreɪni"],
      ["cloudy", "nublado", "The sky is cloudy.", "adjetivo", "ˈklaʊdi"],
      ["windy", "ventoso", "It was very windy.", "adjetivo", "ˈwɪndi"],
      ["snow", "nieve / nevar", "It snows in winter.", "sustantivo/verbo", "snəʊ"],
      ["hot", "caluroso", "Summer is very hot here.", "adjetivo", "hɒt"],
      ["cold", "frío", "It's cold in December.", "adjetivo", "kəʊld"],
      ["spring", "primavera", "Flowers grow in spring.", "sustantivo", "sprɪŋ"],
      ["autumn", "otoño", "The leaves fall in autumn.", "sustantivo", "ˈɔːtəm"],
    ]),
    vocabEx("Vocabulario — El tiempo", "Elige la opción correcta.", [
      mc("When the sun shines, it's ___.", ["sunny", "rainy", "cloudy"], 0, "sunny."),
      mc("When it rains, it's ___.", ["windy", "rainy", "hot"], 1, "rainy."),
      mc("The season after summer is ___.", ["spring", "autumn", "winter"], 1, "autumn."),
      mc("In winter it's very ___.", ["hot", "cold", "sunny"], 1, "cold."),
      mc("When there's a lot of wind, it's ___.", ["windy", "snowy", "cloudy"], 0, "windy."),
      mc("Flowers grow in ___.", ["autumn", "spring", "winter"], 1, "spring."),
    ]),

    READING_HEAD,
    READING_P1("El tiempo y avisos", [
      mc("Weather app: 'Heavy rain expected this afternoon.'", ["It will rain a lot.", "It will be sunny.", "No rain."], 0, "'Heavy rain expected'."),
      mc("Beach sign: 'Strong wind — swimming not safe today.'", ["Don't swim today.", "Swimming is fine.", "The beach is closed forever."], 0, "'swimming not safe'."),
      mc("Note: 'Bring an umbrella, it might rain.'", ["Take an umbrella.", "Leave your umbrella.", "It's sunny."], 0, "'Bring an umbrella'."),
      mc("Sign: 'Park closed in bad weather.'", ["Park shuts when weather is bad.", "Park always open.", "Park closed forever."], 0, "'closed in bad weather'."),
      mc("Text: 'Snow tonight — schools closed tomorrow.'", ["No school tomorrow.", "School as normal.", "Snow last night."], 0, "'schools closed tomorrow'."),
      mc("App alert: 'Temperature dropping to -2°C tonight.'", ["It will be very cold.", "It will be hot.", "No change."], 0, "'-2°C… very cold'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes según el tiempo", "THREE PLANS FOR THE WEEKEND\n\nA) Indoor Games Café — board games and hot drinks. Perfect for a cold, rainy day.\n\nB) Beach Volleyball — outdoor sport on the sand. Best on a warm, sunny day.\n\nC) Mountain Walk — a long hike with beautiful views. Good in cool, dry weather.", "Empareja cada persona con el plan según el tiempo (A/B/C).", [
      mc("It's raining and cold — Ana wants to stay warm and dry.", ["A", "B", "C"], 0, "Indoor Games Café."),
      mc("It's hot and sunny — Leo wants to play outside.", ["A", "B", "C"], 1, "Beach Volleyball."),
      mc("It's cool and dry — Sara wants to walk in nature.", ["A", "B", "C"], 2, "Mountain Walk."),
      mc("A group who wants board games indoors.", ["A", "B", "C"], 0, "A."),
      mc("Someone who loves sport on the sand.", ["A", "B", "C"], 1, "B."),
      mc("A person who enjoys hiking with views.", ["A", "B", "C"], 2, "C."),
      mc("People who want to avoid the rain.", ["A", "B", "C"], 0, "A: indoor."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A DAY OUT IN BAD WEATHER\n\nLast Sunday, my friends and I planned a picnic in the park. We were very excited because the week had been sunny. But when we woke up, the weather was terrible — it was cloudy and very windy, and soon it started to rain heavily.\n\nAt first, we were disappointed. Then my friend Lucas had a great idea. 'Why don't we go to the games café instead?' he said. So we changed our plans. We spent the whole afternoon there, playing board games and drinking hot chocolate.\n\nIn the end, it was one of the best days of the summer. We laughed a lot, and we didn't care about the rain. Sometimes bad weather brings good surprises!", "Lee el texto y responde (A/B/C).", [
      mc("What did they plan to do?", ["Go to a café.", "Have a picnic.", "Play sport."], 1, "'planned a picnic'."),
      mc("What was the weather like on Sunday?", ["Sunny.", "Cloudy, windy and rainy.", "Snowy."], 1, "'cloudy and very windy… rain'."),
      mc("Whose idea was the café?", ["The writer's.", "Lucas's.", "Nobody's."], 1, "'my friend Lucas had a great idea'."),
      mc("What did they do at the café?", ["Studied.", "Played board games.", "Watched TV."], 1, "'playing board games'."),
      mc("How did the writer feel in the end?", ["Bored.", "Happy.", "Angry."], 1, "'one of the best days'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Yesterday the weather was terrible. In the morning it was very (1)___ and grey. Then it started to (2)___ heavily, so we couldn't go out. In the afternoon it was so (3)___ that a tree fell down! Luckily, in the evening the sky was (4)___ again. My sister said it (5)___ snow tonight. I hope the weather is (6)___ tomorrow.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["cloudy", "sunny", "hot"], 0, "'cloudy and grey'."),
      mc("Hueco 2", ["rain", "shine", "blow"], 0, "'rain heavily'."),
      mc("Hueco 3", ["windy", "sunny", "warm"], 0, "'so windy that a tree fell'."),
      mc("Hueco 4", ["clear", "dark", "wet"], 0, "'clear again'."),
      mc("Hueco 5", ["might", "must", "should"], 0, "posibilidad → might."),
      mc("Hueco 6", ["better", "worse", "colder"], 0, "'I hope… better'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Zoe,\nWhat a strange weekend! On Saturday it (1)___ really hot, so we went to the beach. But (2)___ Sunday the weather changed completely. There (3)___ a big storm with lots of wind. We (4)___ stay at home all day. I hope it's sunny (5)___ week so we (6)___ go out again.\nBye,\nRae", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["was"], "'it was really hot'."),
      fb("Hueco 2", ["on"], "'on Sunday'."),
      fb("Hueco 3", ["was"], "'There was a big storm'."),
      fb("Hueco 4", ["had"], "'had to stay' (obligación pasada)."),
      fb("Hueco 5", ["next"], "'next week'."),
      fb("Hueco 6", ["can"], "'so we can go out'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un día con mal (o buen) tiempo", "Tu amigo/a inglés/a quiere saber qué hiciste el fin de semana. Escríbele un email (25 palabras o más) con:\n· qué tiempo hizo,\n· qué hiciste,\n· cómo te sentiste.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unos amigos preparan un picnic con sol.\n2) Empieza a llover y recogen todo corriendo.\n3) Terminan jugando en casa, contentos.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. It was so hot last week that we went to the beach every day. Two. My favourite season is autumn, because I love the colour of the leaves. Three. Last winter it snowed so much that the schools closed for two days. Four. I always carry an umbrella in spring, because it rains a lot. Five. On windy days I can't ride my bike, so I take the bus instead.", [
      mc("Person 1 is talking about…", ["hot weather", "cold weather", "wind"], 0, "'so hot… beach'."),
      mc("Person 2 is talking about…", ["a season they like", "rain", "snow"], 0, "'favourite season is autumn'."),
      mc("Person 3 is talking about…", ["snow", "sun", "wind"], 0, "'it snowed so much'."),
      mc("Person 4 is talking about…", ["rain", "heat", "snow"], 0, "'it rains a lot'."),
      mc("Person 5 is talking about…", ["wind", "sun", "rain"], 0, "'On windy days'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (el tiempo)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre el tiempo y las estaciones — qué tiempo hace hoy, tu estación favorita, qué haces cuando llueve", "describir el tiempo y hábitos según el clima", "it's sunny, my favourite season, when it rains, I usually"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (estaciones)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre estaciones y actividades según el tiempo; el examinador pregunta qué estación prefieres y por qué", "expresar gustos y dar razones", "I prefer, I like, because, summer, winter"),

    SUMMARY("Resumen del Día 9", [
      "Preguntas en pasado: (QW) + did + sujeto + base; con 'be': was/were.",
      "Narrar con conectores: first, then, after that, finally.",
      "Vocabulario del tiempo. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 10", "Escribe una mini-historia (5 frases) con conectores sobre un día que recuerdes. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY10 = {
  title: "Día 10 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del pasado y el vocabulario de la semana. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 2.",
  pedagogy: {
    objective: "Consolidar el past simple y el vocabulario de la semana y medir el progreso.",
    summary: "Repaso de past simple, was/were, there was/were, preguntas; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más esta semana?", "Repásalo antes de la Semana 3."],
  },
  items: [
    TEXT("🎯 Día de repaso de la Semana 2. Consolidas el pasado y practicas las 4 destrezas. Al final tienes el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 2", `1) Past simple regular: +ed (worked, studied, stopped); pronunciación /t/,/d/,/ɪd/.
2) Irregulares: went, bought, saw, had, took… En negativa/pregunta, base con did.
3) was/were y there was/there were.
4) Preguntas en pasado y conectores para narrar (first, then, finally).`),
    grammarEx("Repaso mixto de gramática — Semana 2", "Completa o elige (mezcla todo el pasado).", [
      fb("Last night we ___ (watch) a film.", ["watched"], "regular."),
      fb("She ___ (go) to the market yesterday.", ["went"], "irregular."),
      fb("There ___ (be) lots of people at the party.", ["were"], "plural → were."),
      fb("Order: (you / where / did / go) → ___?", ["where did you go"], "Where did you go?"),
      mc("Choose:", ["Did you saw it?", "Did you see it?", "Did you seen it?"], 1, "did + base."),
      fb("We ___ (buy) souvenirs and ___ (take) photos.", ["bought", "took"], "irregulares."),
      mc("Choose:", ["There was many tourists.", "There were many tourists.", "There is many tourists."], 1, "plural → There were."),
      fb("It ___ (be) very cold last winter.", ["was"], "singular → was."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 2", "Repasa los mazos (comida, ropa, viajes, tiempo)."),
    vocabEx("Repaso de vocabulario — Semana 2", "Elige la opción correcta.", [
      mc("You ask for this to pay in a restaurant:", ["menu", "bill", "order"], 1, "bill."),
      mc("Clothes you wear on your feet:", ["shoes", "shirt", "size"], 0, "shoes."),
      mc("You need this to travel abroad:", ["passport", "souvenir", "luggage"], 0, "passport."),
      mc("When the sun shines:", ["rainy", "sunny", "cloudy"], 1, "sunny."),
      mc("The opposite of expensive:", ["cheap", "tasty", "big"], 0, "cheap."),
      mc("To reserve a hotel:", ["book", "buy", "try"], 0, "book."),
      mc("A sweet food at the end of a meal:", ["starter", "dessert", "dish"], 1, "dessert."),
      mc("The season after summer:", ["spring", "autumn", "winter"], 1, "autumn."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Museum free on the first Sunday of the month.'", ["Free one Sunday a month.", "Always free.", "Never free."], 0, "'first Sunday of the month'."),
      mc("Text: 'Train delayed. New time: 15:40.'", ["Train at 15:40 now.", "Train on time.", "Train cancelled."], 0, "'New time: 15:40'."),
      mc("Label: 'Keep in the fridge after opening.'", ["Refrigerate once opened.", "Leave outside.", "Freeze it."], 0, "'Keep in the fridge'."),
      mc("Note: 'We missed you! Parcel at the post office.'", ["Collect your parcel.", "Parcel delivered.", "No parcel."], 0, "'Parcel at the post office'."),
      mc("Sign: 'Beach closed due to storm.'", ["Beach shut because of the storm.", "Beach open.", "No storm."], 0, "'closed due to storm'."),
      mc("App: 'Booking confirmed for 2 nights.'", ["A reservation for two nights.", "Booking cancelled.", "One night only."], 0, "'confirmed for 2 nights'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y actividades", "THREE PLACES TO VISIT\n\nA) Science Museum — fun experiments for children, open 10–6, cheap tickets.\n\nB) Old Town Tour — a guided walk through historic streets, learn about the past.\n\nC) Water Park — slides and pools, great on a hot day, food available.", "Empareja cada persona con el lugar ideal (A/B/C).", [
      mc("A parent with curious children who like experiments.", ["A", "B", "C"], 0, "Science Museum."),
      mc("Someone interested in history.", ["A", "B", "C"], 1, "Old Town Tour."),
      mc("A family who wants fun in the water on a hot day.", ["A", "B", "C"], 2, "Water Park."),
      mc("Someone who wants a guided walk.", ["A", "B", "C"], 1, "B: guided walk."),
      mc("People who want cheap tickets for kids.", ["A", "B", "C"], 0, "A: cheap."),
      mc("A group who wants slides and pools.", ["A", "B", "C"], 2, "C: slides, pools."),
      mc("Someone who wants to learn about the past.", ["A", "B", "C"], 1, "B: the past."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY WEEKEND AWAY\n\nLast month, I visited my grandparents in the countryside for the weekend. I took the train on Friday evening, and my grandfather picked me up at the station. The journey was long, but I read a book and the time passed quickly.\n\nOn Saturday, the weather was lovely, so we went for a walk in the fields. There were cows and horses, and my grandmother showed me her vegetable garden. In the afternoon, we cooked lunch together — her food is always delicious.\n\nOn Sunday, it rained, so we stayed inside and looked at old photos. My grandparents told me funny stories about when my mother was young. I was sad to leave, but I promised to visit again soon.", "Lee el texto y responde (A/B/C).", [
      mc("When did the writer travel?", ["Friday evening.", "Saturday morning.", "Sunday night."], 0, "'the train on Friday evening'."),
      mc("Who met the writer at the station?", ["The grandmother.", "The grandfather.", "The mother."], 1, "'my grandfather picked me up'."),
      mc("What did they do on Saturday?", ["Stayed inside.", "Went for a walk.", "Went shopping."], 1, "'went for a walk in the fields'."),
      mc("Why did they stay inside on Sunday?", ["It was hot.", "It rained.", "They were tired."], 1, "'On Sunday, it rained'."),
      mc("How did the writer feel about leaving?", ["Happy.", "Sad.", "Bored."], 1, "'I was sad to leave'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last weekend I (1)___ my grandparents in the countryside. I (2)___ the train on Friday. On Saturday the weather was (3)___, so we went for a (4)___ in the fields. We (5)___ lunch together. On Sunday it rained, so we looked at old (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["visited", "arrived", "stayed"], 0, "'visited my grandparents'."),
      mc("Hueco 2", ["took", "made", "did"], 0, "'took the train'."),
      mc("Hueco 3", ["lovely", "terrible", "cold"], 0, "'lovely… went for a walk'."),
      mc("Hueco 4", ["walk", "trip", "flight"], 0, "'went for a walk'."),
      mc("Hueco 5", ["cooked", "booked", "looked"], 0, "'cooked lunch'."),
      mc("Hueco 6", ["photos", "shops", "clothes"], 0, "'old photos'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Alex,\nI had a lovely weekend! I visited my grandparents (1)___ the countryside. I went (2)___ train on Friday. The weather (3)___ great on Saturday, so we (4)___ for a long walk. On Sunday it rained, (5)___ we stayed inside. I can't wait (6)___ visit them again!\nLove,\nSam", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["in"], "'in the countryside'."),
      fb("Hueco 2", ["by"], "'by train'."),
      fb("Hueco 3", ["was"], "'The weather was great'."),
      fb("Hueco 4", ["went"], "'went for a walk'."),
      fb("Hueco 5", ["so"], "consecuencia → so."),
      fb("Hueco 6", ["to"], "'can't wait to visit'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta tu fin de semana", "Tu amigo/a inglés/a quiere saber de tu fin de semana pasado. Escríbele un email (25 palabras o más) con:\n· adónde fuiste o qué hiciste,\n· con quién,\n· qué te gustó más.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un chico coge un tren con una maleta.\n2) Sus abuelos le reciben en el campo.\n3) Cenan juntos y ríen.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Tom hablar de lo que hicieron sus amigos el fin de semana y empareja cada persona con su actividad (A/B/C…).", "This is Part Five. You will hear Tom talking about what his friends did last weekend. Anna went to the cinema, because she loves films. Ben stayed at home and cooked a big meal for his family. Carla travelled to the mountains and went walking. David visited a museum in the city centre. And Emma went shopping and bought new clothes for a party.", [
      mc("Anna", ["cinema", "cooking", "walking"], 0, "'went to the cinema'."),
      mc("Ben", ["shopping", "cooking", "museum"], 1, "'cooked a big meal'."),
      mc("Carla", ["walking in the mountains", "cinema", "cooking"], 0, "'travelled to the mountains and went walking'."),
      mc("David", ["a museum", "shopping", "the cinema"], 0, "'visited a museum'."),
      mc("Emma", ["shopping", "walking", "cooking"], 0, "'went shopping'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — habla de algo que hiciste la semana pasada, un viaje, una comida especial", "usar el pasado con soltura", "last week I, I went, I bought, it was, I had"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre planes de fin de semana; el examinador pregunta qué prefieres hacer y por qué", "expresar gustos y dar razones en pasado y presente", "I prefer, I like, because, last weekend, my favourite"),

    SUMMARY("Resumen de la Semana 2", [
      "Sabes contar el pasado: verbos regulares e irregulares, was/were, there was/were.",
      "Haces preguntas en pasado y narras con conectores.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: comparar (comparativos y superlativos) y cuantificadores.",
    ]),
    INFO("Mini-simulacro de la Semana 2", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa los días que te costaron antes de la Semana 3."),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "El pasado y las experiencias",
  description: "Past simple (regular e irregular), was/were, there was/were, preguntas y narrar. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
