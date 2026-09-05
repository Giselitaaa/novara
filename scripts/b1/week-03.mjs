/**
 * B1 Preliminary · Semana 3 — "Comparación, cantidad y descripción".
 * Gramática: comparativos/superlativos avanzados, cuantificadores
 * (too/enough/plenty of/a few/a little), artículos, verbo + -ing/infinitivo.
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I prefer, I usually, it depends, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the foreground"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, I'd rather, this one is … -er, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 11 ─────────────────────────
const DAY11 = {
  title: "Día 11 — Comparativos y superlativos (avanzado) · Compras",
  description: "Comparativos/superlativos avanzados (much/far + comp, as…as, the …er the …er). Vocabulario de compras. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Comparar con matices (mucho más, tan…como, cuanto más…más).",
    summary: "Comparación avanzada; compras; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'more cheaper'.", "'as cheaper as'.", "'the most cheap'."],
    reviewPrompts: ["¿Cómo intensificas 'más barato' (mucho más)?", "¿'as … as' con qué forma?"],
  },
  items: [
    TEXT("🔁 Semana 3. Hoy afinas la COMPARACIÓN: intensificadores (much/far), igualdad (as…as) y 'cuanto más… más'. Vocabulario: las COMPRAS."),
    GRAMMAR("Comparación avanzada", `COMPARATIVOS: corto + -er (cheaper), largo → more (more expensive); irregulares (better/worse/further).
INTENSIFICAR: much / far / a lot + comparativo → much cheaper, far more expensive. Poco: a bit / slightly + comparativo.
IGUALDAD: as + adjetivo + as (as cheap as); negativo: not as … as.
SUPERLATIVOS: the + -est / the most; by far the best.
'THE …ER, THE …ER': The more you practise, the better you get. (cuanto más… mejor)`),
    WARN("Errores típicos del hispanohablante", "· ❌ more cheaper → ✅ much cheaper.\n· ❌ as cheaper as → ✅ as cheap as.\n· ❌ the most cheap → ✅ the cheapest.\n· ❌ more better → ✅ much better."),
    grammarEx("Gramática — Comparación avanzada", "Completa o elige.", [
      fb("This shop is ___ (much/cheap) than that one.", ["much cheaper"], "much + comparativo."),
      fb("It's ___ (far/expensive) than I expected.", ["far more expensive"], "far + more + adjetivo largo."),
      fb("This phone isn't ___ (good) as the old one.", ["as good"], "as good as."),
      mc("Choose:", ["It's the most cheap.", "It's the cheapest.", "It's the more cheap."], 1, "superlativo corto → cheapest."),
      fb("The more you buy, the ___ (much) you spend.", ["more"], "the more… the more."),
      mc("Choose:", ["This is more better.", "This is much better.", "This is the better."], 1, "much better."),
      fb("These shoes are ___ (slightly/big) than those.", ["slightly bigger"], "slightly + comparativo."),
    ]),
    GRAMMAR("Vocabulario del día — Compras", "Léxico de compras y consumo (B1)."),
    deck("B1 S3D11 — Compras", [
      ["bargain", "ganga / chollo", "This coat was a real bargain.", "sustantivo", "ˈbɑːɡɪn"],
      ["discount", "descuento", "There's a 20% discount today.", "sustantivo", "ˈdɪskaʊnt"],
      ["afford", "permitirse (pagar)", "I can't afford a new car.", "verbo", "əˈfɔːd"],
      ["refund", "reembolso / devolución", "I got a full refund.", "sustantivo", "ˈriːfʌnd"],
      ["receipt", "recibo / tique", "Keep your receipt.", "sustantivo", "rɪˈsiːt"],
      ["value for money", "buena relación calidad-precio", "It's great value for money.", "colocación", "ˌvæljuː fə ˈmʌni"],
      ["second-hand", "de segunda mano", "I bought it second-hand.", "adjetivo", "ˌsekənd ˈhænd"],
      ["overpriced", "demasiado caro", "That café is overpriced.", "adjetivo", "ˌəʊvəˈpraɪst"],
      ["window shopping", "mirar escaparates", "We went window shopping.", "colocación", "ˈwɪndəʊ ˌʃɒpɪŋ"],
      ["out of stock", "agotado", "Sorry, it's out of stock.", "colocación", "ˌaʊt əv ˈstɒk"],
    ]),
    vocabEx("Vocabulario — Compras", "Elige la opción correcta.", [
      mc("A very cheap, good deal is a ___.", ["bargain", "refund", "receipt"], 0, "bargain."),
      mc("Money returned when you bring something back is a ___.", ["refund", "discount", "receipt"], 0, "refund."),
      mc("If something is too expensive for its quality, it's ___.", ["overpriced", "second-hand", "a bargain"], 0, "overpriced."),
      mc("When you can't buy something because there's no money, you can't ___ it.", ["afford", "refund", "discount"], 0, "afford."),
      mc("Something already used by someone else is ___.", ["second-hand", "out of stock", "overpriced"], 0, "second-hand."),
      mc("When there are none left in the shop, it's ___.", ["out of stock", "a bargain", "value for money"], 0, "out of stock."),
    ]),

    ...readingParts({
      p1: { title: "Compras y avisos", items: [
        mc("Shop sign: 'Sale — up to 50% off, this week only.'", ["Big discounts this week.", "Prices up.", "Closed."], 0, "'up to 50% off'."),
        mc("Notice: 'No refunds without a receipt.'", ["You need a receipt to get money back.", "Free refunds.", "No refunds ever."], 0, "'No refunds without a receipt'."),
        mc("Text: 'This jacket was a real bargain — only £15!'", ["A cheap, good deal.", "Very expensive.", "Not for sale."], 0, "'a real bargain — only £15'."),
        mc("Sign: 'Sorry, this item is out of stock.'", ["None left.", "Plenty available.", "Half price."], 0, "'out of stock'."),
        mc("Label: 'Great value for money — buy one, get one free.'", ["A good-value offer.", "Overpriced.", "No offer."], 0, "'value for money — buy one, get one free'."),
      ] },
      p2text: "FOUR PLACES TO SHOP\n\nA) The Vintage Store — second-hand clothes and unique items; cheap and eco-friendly.\nB) TechWorld — the latest gadgets; not cheap, but great quality and expert advice.\nC) The Market — fresh food and real bargains, especially just before closing time.\nD) Luxury Lane — designer brands; beautiful but very expensive; window shopping is free!",
      p2q: { title: "Emparejar personas y tiendas", items: [
        mc("Nadia loves unique clothes and cares about the planet.", ["A", "B", "C", "D"], 0, "Vintage Store."),
        mc("Omar wants a high-quality gadget and good advice.", ["A", "B", "C", "D"], 1, "TechWorld."),
        mc("Sara wants fresh food at the lowest price.", ["A", "B", "C", "D"], 2, "The Market."),
        mc("Leo just wants to look at beautiful designer things.", ["A", "B", "C", "D"], 3, "Luxury Lane."),
        mc("Someone on a budget who likes second-hand.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE JOY OF SECOND-HAND\n\nA few years ago, I used to buy all my clothes new, always following the latest fashions. But I spent far too much money, and my wardrobe was full of things I hardly wore. Then a friend introduced me to second-hand shopping, and it completely changed the way I think about clothes.\n\nAt first, I was a bit embarrassed. I thought second-hand clothes would be worse than new ones. How wrong I was! In vintage shops and online, I've found beautiful, high-quality items — often much cheaper than in normal shops. Last month, I bought a designer coat for a tenth of its original price. It was by far the best bargain I've ever found.\n\nBut it's not only about saving money. Buying second-hand is also far better for the environment, because it reduces waste. The more I learn about how much clothing ends up in landfill, the more determined I am to shop this way. My advice? Give it a try. You might be surprised at what you find, and you'll help the planet at the same time.",
      p3q: { title: "La alegría de lo de segunda mano (texto largo)", items: [
        mc("How did the writer used to shop?", ["Second-hand.", "Always new, following fashion.", "Never."], 1, "'buy all my clothes new… following the latest fashions'."),
        mc("How did the writer feel about second-hand at first?", ["Excited.", "A bit embarrassed.", "Angry."], 1, "'a bit embarrassed'."),
        mc("What did the writer buy last month?", ["Shoes.", "A designer coat cheaply.", "A new phone."], 1, "'a designer coat for a tenth of its original price'."),
        mc("Why is second-hand good for the planet?", ["It's fashionable.", "It reduces waste.", "It's new."], 1, "'reduces waste'."),
        mc("What is the writer's advice?", ["Buy only new.", "Give second-hand a try.", "Stop shopping."], 1, "'Give it a try'."),
      ] },
      p4text: "MY SHOPPING MISTAKE\n\nLast weekend, I made a classic shopping mistake. (1)___ I saw a beautiful jacket in an expensive shop, and I fell in love with it immediately. It cost far more than I could really afford, but I bought it anyway.\n\nWhen I got home, I felt guilty. (2)___ My sister, who loves a bargain, laughed at me. 'You paid full price?' she said. 'You should always check online first!' She showed me the exact same jacket on another website. (3)___ It was much cheaper — almost half the price!\n\nI felt so silly. (4)___ Luckily, the shop had a good returns policy, so the next day I took the jacket back with my receipt and got a full refund. Then I ordered it online for far less. (5)___ Now I never buy anything without comparing prices first.",
      p4options: [
        "I let my heart rule my head.",                             // A -> gap 1
        "I knew I had spent too much.",                             // B -> gap 2
        "I couldn't believe my eyes.",                             // C -> gap 3
        "How could I have been so careless?",                       // D -> gap 4
        "I decided to keep it and pay even more.",                  // E (extra)
        "It was the best lesson I've ever learned about shopping.", // F -> gap 5
        "The jacket was completely free.",                          // G (extra)
        "I never go shopping at all.",                              // H (extra)
      ],
      p4q: { title: "Mi error de compra (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: dejó que el corazón mandara."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: sabía que había gastado de más."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: no podía creerlo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: ¿cómo pudo ser tan descuidado?"),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la mejor lección sobre compras."),
      ] },
      p5text: "Shopping online is often much (1)___ than in shops, because you can compare prices easily. If you're patient, you can find real (2)___. Always check whether an item is (3)___ before you order, so you don't waste time. And keep your (4)___ in case you need a (5)___. Buying (6)___-hand is another great way to save money and help the planet.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["cheaper", "cheapest", "more cheap", "cheap"], 0, "'much cheaper than'."),
        mc("Hueco 2", ["bargains", "refunds", "receipts", "discounts only"], 0, "'real bargains'."),
        mc("Hueco 3", ["in stock", "out of order", "overpriced", "second-hand"], 0, "'whether… in stock'."),
        mc("Hueco 4", ["receipt", "bargain", "refund", "discount"], 0, "'keep your receipt'."),
        mc("Hueco 5", ["refund", "receipt", "bargain", "stock"], 0, "'need a refund'."),
        mc("Hueco 6", ["second", "third", "new", "first"], 0, "'second-hand'."),
      ] },
      p6text: "Hi Sam,\nI've discovered second-hand shopping and I love it! Vintage clothes are often (1)___ cheaper than new ones, and they're much better (2)___ the environment too. Last week I found a designer coat — it was (3)___ far the best bargain ever! The more I shop this way, (4)___ more money I save. Of course, I always keep the (5)___ in case I need a refund. You (6)___ try it — you'd love it!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["much", "far"], "'much/far cheaper'."),
        fb("Hueco 2", ["for"], "'better for the environment'."),
        fb("Hueco 3", ["by"], "'by far the best'."),
        fb("Hueco 4", ["the"], "'the more… the more'."),
        fb("Hueco 5", ["receipt"], "'keep the receipt'."),
        fb("Hueco 6", ["should", "must", "could", "'d"], "sugerencia."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus hábitos de compra. Responde a su email (~100 palabras):\n· dile dónde prefieres comprar y por qué,\n· cuenta una buena compra (o un error) que hiciste,\n· pregúntale por sus tiendas favoritas.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it better to buy new or second-hand?' con tu opinión y razones.\n· RELATO: empieza con: 'It was the best bargain I had ever found.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: Why did you buy it there? Man: It was much cheaper than online. Two. Man: Can I get a refund? Woman: Of course, do you have your receipt? Three. Woman: Do you like shopping? Man: I prefer window shopping — it's free! Four. Man: Is this the best price? Woman: Yes, it's by far the cheapest in town. Five. Woman: Why didn't you buy the coat? Man: I couldn't afford it. Six. Man: Is this jacket new? Woman: No, it's second-hand, but it looks great. Seven. Woman: Have you got the blue one? Man: Sorry, it's out of stock.", [
      mc("1. Why did the man buy it there?", ["It was nearer.", "It was much cheaper than online.", "It was nicer."], 1, "'much cheaper than online'."),
      mc("2. What does the woman need for a refund?", ["A card.", "A receipt.", "Nothing."], 1, "'do you have your receipt?'"),
      mc("3. What does the man prefer?", ["Buying a lot.", "Window shopping.", "Online shopping."], 1, "'window shopping — it's free'."),
      mc("4. What does the woman say about the price?", ["It's expensive.", "By far the cheapest in town.", "It's average."], 1, "'by far the cheapest'."),
      mc("5. Why didn't the man buy the coat?", ["Wrong size.", "He couldn't afford it.", "Wrong colour."], 1, "'I couldn't afford it'."),
      mc("6. Is the jacket new?", ["Yes.", "No, second-hand.", "It's a copy."], 1, "'it's second-hand'."),
      mc("7. Is the blue one available?", ["Yes.", "No, out of stock.", "Only online."], 1, "'it's out of stock'."),
    ]),

    ...speakingParts("las compras y el dinero", { p1: "dónde te gusta comprar, si prefieres tiendas o internet y por qué", p2: "personas comprando (un mercado, un centro comercial, una tienda de ropa)", p3: "qué regalo comprar para un amigo/a con un presupuesto limitado", p4: "las compras, comprar nuevo o de segunda mano y gastar con cabeza" }),

    SUMMARY("Resumen del Día 11", [
      "Comparación: much/far + comparativo; as…as; the …er the …er; superlativos con 'by far'.",
      "Vocabulario de compras.",
      "Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 12", "Compara 3 tiendas o productos con much/far + comparativo. Repasa las flashcards. Mañana: cuantificadores (too/enough/plenty of)."),
  ],
};

// ───────────────────────── DÍA 12 ─────────────────────────
const DAY12 = {
  title: "Día 12 — Cuantificadores (too/enough/plenty of) · Comer fuera",
  description: "too much/many, enough, plenty of, a few/a little, several. Vocabulario de restaurantes. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Expresar cantidad con precisión (demasiado, suficiente, de sobra, poco).",
    summary: "Cuantificadores; comer fuera; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'too much people'.", "'enough big'.", "'a few water'."],
    reviewPrompts: ["¿too much o too many con 'people'?", "¿'big enough' o 'enough big'?"],
  },
  items: [
    TEXT("🔁 Repaso: comparación. Hoy los CUANTIFICADORES con precisión (demasiado, suficiente, de sobra, un poco). Vocabulario: COMER FUERA."),
    GRAMMAR("Cuantificadores", `DEMASIADO: too much + incontable (too much salt); too many + contable (too many people); too + adjetivo (too expensive).
SUFICIENTE: adjetivo + enough (big enough); enough + sustantivo (enough time). ⚠️ enough VA DESPUÉS del adjetivo pero ANTES del sustantivo.
DE SOBRA: plenty of + contable/incontable (plenty of chairs, plenty of time).
POCO: a few + contable (a few friends); a little + incontable (a little milk). several = varios (contable).`),
    WARN("Errores típicos del hispanohablante", "· ❌ too much people → ✅ too many people.\n· ❌ enough big → ✅ big enough.\n· ❌ a few water → ✅ a little water.\n· ❌ too many salt → ✅ too much salt."),
    grammarEx("Gramática — Cuantificadores", "Completa o elige.", [
      mc("There were ___ people to fit in the room.", ["too much", "too many", "enough"], 1, "contable → too many."),
      mc("This soup has ___ salt.", ["too many", "too much", "a few"], 1, "incontable → too much."),
      fb("Is the table big ___ for six?", ["enough"], "big enough."),
      mc("Don't worry, we have ___ time.", ["plenty of", "too many", "a few"], 0, "plenty of time."),
      fb("I have a ___ (poco) friends in London.", ["few"], "contable → a few."),
      fb("Add a ___ (poco) milk to the sauce.", ["little"], "incontable → a little."),
      mc("Choose:", ["It's enough cheap.", "It's cheap enough.", "It's too cheap enough."], 1, "cheap enough."),
    ]),
    GRAMMAR("Vocabulario del día — Comer fuera", "Léxico de restaurantes (B1)."),
    deck("B1 S3D12 — Comer fuera", [
      ["book a table", "reservar mesa", "I've booked a table for four.", "colocación", "bʊk ə ˈteɪbl"],
      ["starter", "entrante", "I'll have soup as a starter.", "sustantivo", "ˈstɑːtə"],
      ["main course", "plato principal", "The main course was delicious.", "colocación", "meɪn ˈkɔːs"],
      ["dessert", "postre", "We shared a dessert.", "sustantivo", "dɪˈzɜːt"],
      ["service", "servicio / atención", "The service was excellent.", "sustantivo", "ˈsɜːvɪs"],
      ["tip", "propina", "We left a generous tip.", "sustantivo", "tɪp"],
      ["vegetarian", "vegetariano/a", "Do you have vegetarian options?", "adjetivo", "ˌvedʒəˈteəriən"],
      ["spicy", "picante", "This curry is very spicy.", "adjetivo", "ˈspaɪsi"],
      ["bill", "cuenta", "Could we have the bill, please?", "sustantivo", "bɪl"],
      ["overcooked", "demasiado hecho / pasado", "The steak was overcooked.", "adjetivo", "ˌəʊvəˈkʊkt"],
    ]),
    vocabEx("Vocabulario — Comer fuera", "Elige la opción correcta.", [
      mc("The first small dish of a meal is a ___.", ["starter", "dessert", "bill"], 0, "starter."),
      mc("Extra money you leave for good service is a ___.", ["tip", "bill", "service"], 0, "tip."),
      mc("Food cooked for too long is ___.", ["overcooked", "spicy", "vegetarian"], 0, "overcooked."),
      mc("A person who doesn't eat meat is ___.", ["vegetarian", "spicy", "overcooked"], 0, "vegetarian."),
      mc("You ask for the ___ to pay.", ["bill", "tip", "starter"], 0, "bill."),
      mc("To reserve a place to eat is to ___.", ["book a table", "leave a tip", "order"], 0, "book a table."),
    ]),

    ...readingParts({
      p1: { title: "Restaurantes y avisos", items: [
        mc("Sign: 'Booking recommended at weekends.'", ["Reserve at weekends.", "No booking.", "Closed weekends."], 0, "'Booking recommended'."),
        mc("Menu note: 'Service not included in the bill.'", ["The tip is separate.", "Service is free.", "No bill."], 0, "'Service not included'."),
        mc("Notice: 'Plenty of vegetarian options available.'", ["Many vegetarian dishes.", "No vegetarian food.", "Meat only."], 0, "'Plenty of vegetarian options'."),
        mc("Warning: 'Some dishes are very spicy — please ask.'", ["Some food is hot; ask staff.", "No spicy food.", "All food is mild."], 0, "'very spicy — please ask'."),
        mc("Text: 'The food was great but the service was too slow.'", ["Good food, slow service.", "Bad food.", "Perfect service."], 0, "'the service was too slow'."),
      ] },
      p2text: "FOUR RESTAURANTS\n\nA) Green Table — only vegetarian and vegan dishes; fresh, healthy and plenty of choice.\nB) Firehouse Grill — meat and spicy food; big portions, not for small appetites.\nC) Bella Vista — Italian classics; a bit pricey, but the service is excellent and it's very romantic.\nD) Quick Bites — cheap, fast food; perfect if you don't have enough time for a long meal.",
      p2q: { title: "Emparejar personas y restaurantes", items: [
        mc("Ana is vegan and wants lots of choice.", ["A", "B", "C", "D"], 0, "Green Table."),
        mc("Ben loves spicy meat and big portions.", ["A", "B", "C", "D"], 1, "Firehouse Grill."),
        mc("Sara wants a romantic dinner with great service.", ["A", "B", "C", "D"], 2, "Bella Vista."),
        mc("Leo is in a hurry and has little money.", ["A", "B", "C", "D"], 3, "Quick Bites."),
        mc("Someone who doesn't have enough time to sit down.", ["A", "B", "C", "D"], 3, "D."),
      ] },
      p3text: "A NIGHT TO REMEMBER (FOR THE WRONG REASONS)\n\nLast Saturday, I took my parents to a new restaurant to celebrate my mother's birthday. I had read some great reviews, so my expectations were high. Sadly, it turned out to be one of the worst meals we've ever had.\n\nThe problems started as soon as we arrived. Although I had booked a table, we had to wait twenty minutes because there weren't enough tables free. When we finally sat down, we discovered that they had run out of half the dishes on the menu. My father ordered a steak, but when it came, it was completely overcooked. My mother's soup, on the other hand, was cold.\n\nWorst of all was the service. There were too many customers and not enough staff, so we waited ages for everything. By the end, we were tired and a little annoyed. However, the manager was very kind. He apologised, didn't charge us for the desserts, and gave us a voucher for a free meal. So, although the evening wasn't perfect, at least it had a happy ending — and we certainly won't forget my mother's birthday!",
      p3q: { title: "Una noche para recordar (texto largo)", items: [
        mc("Why did the writer choose the restaurant?", ["It was cheap.", "It had great reviews.", "It was near."], 1, "'read some great reviews'."),
        mc("Why did they wait twenty minutes?", ["They were early.", "There weren't enough free tables.", "It was closed."], 1, "'weren't enough tables free'."),
        mc("What was wrong with the father's steak?", ["Too spicy.", "Overcooked.", "Cold."], 1, "'completely overcooked'."),
        mc("What was the main problem with the service?", ["Rude staff.", "Too many customers, not enough staff.", "No menu."], 1, "'too many customers and not enough staff'."),
        mc("What did the manager do?", ["Nothing.", "Apologised and gave a free-meal voucher.", "Charged extra."], 1, "'apologised… gave us a voucher for a free meal'."),
      ] },
      p4text: "EATING OUT ON A BUDGET\n\nMany people think that eating out is always expensive, but that isn't necessarily true. (1)___ With a little planning, you can enjoy a great meal without spending too much money.\n\nMy first tip is to look for lunch deals. (2)___ Many restaurants offer the same dishes at lunchtime for far less than in the evening. Second, avoid ordering too many extras. (3)___ Starters and desserts add up quickly, so choose just one if you're on a budget.\n\nFinally, don't forget to check reviews before you go. (4)___ A restaurant with great food but slow service might not be worth it. If you follow these tips, you'll have plenty of money left for next time. (5)___ Eating out should be a pleasure, not a worry.",
      p4options: [
        "In fact, there are plenty of ways to save.",               // A -> gap 1
        "This is when restaurants are usually cheapest.",           // B -> gap 2
        "A main course is often more than enough.",                 // C -> gap 3
        "Other customers will tell you the honest truth.",          // D -> gap 4
        "You should always order everything on the menu.",          // E (extra)
        "After all, a good meal shouldn't leave you broke.",        // F -> gap 5
        "Restaurants never offer any deals.",                       // G (extra)
        "The most expensive option is always the best.",            // H (extra)
      ],
      p4q: { title: "Comer fuera sin gastar mucho (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: hay muchas formas de ahorrar."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: al mediodía suelen ser más baratos."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: un plato principal suele bastar."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: otros clientes dicen la verdad."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: una buena comida no debe arruinarte."),
      ] },
      p5text: "Choosing a restaurant isn't always easy. If you go at a busy time, there might not be (1)___ tables, so it's best to (2)___ a table first. Look for a place with (3)___ of vegetarian options if some of your friends don't eat meat. Check the reviews: if the food is great but there are (4)___ many complaints about the service, think twice. And remember to leave a (5)___ if the service is good. A main course is usually (6)___ enough on its own!",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["enough", "plenty", "too", "a few"], 0, "'enough tables'."),
        mc("Hueco 2", ["book", "order", "leave", "cook"], 0, "'book a table'."),
        mc("Hueco 3", ["plenty", "enough", "a little", "too"], 0, "'plenty of vegetarian options'."),
        mc("Hueco 4", ["too", "enough", "plenty", "a few"], 0, "'too many complaints'."),
        mc("Hueco 5", ["tip", "bill", "starter", "refund"], 0, "'leave a tip'."),
        mc("Hueco 6", ["big", "more", "much", "far"], 0, "'big enough on its own'."),
      ] },
      p6text: "Hi Sam,\nLast night we ate out and it was a disaster! Although I'd booked a table, there weren't (1)___ tables free, so we waited ages. There were too (2)___ customers and not enough staff. My steak was (3)___ cooked and my mum's soup was cold! The (4)___ was so slow. But the manager was kind: he didn't charge us for the (5)___ and gave us a voucher. So it had a happy ending! Next time, I'll (6)___ the reviews first.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["enough"], "'weren't enough tables'."),
        fb("Hueco 2", ["many"], "'too many customers'."),
        fb("Hueco 3", ["over"], "'overcooked'."),
        fb("Hueco 4", ["service"], "'The service was so slow'."),
        fb("Hueco 5", ["desserts", "dessert"], "'didn't charge for the desserts'."),
        fb("Hueco 6", ["check", "read"], "'I'll check the reviews'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por un restaurante al que fuiste. Responde a su email (~100 palabras):\n· cuenta cómo fue (comida y servicio),\n· di si lo recomiendas y por qué,\n· pregúntale por su comida favorita.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How to enjoy eating out without spending too much' con consejos.\n· RELATO: empieza con: 'It was supposed to be a perfect birthday dinner.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Shall we book a table? Man: Yes, it gets too busy without one. Two. Man: How was the food? Woman: Delicious, but the service was too slow. Three. Woman: Is there enough for everyone? Man: Don't worry, there's plenty. Four. Man: Are you vegetarian? Woman: Yes, so I need a place with veggie options. Five. Man: How was your steak? Woman: A bit overcooked, unfortunately. Six. Woman: Shall we leave a tip? Man: Definitely, the waiter was great.", [
      mc("1. Why do they want to book a table?", ["It's cheaper.", "It gets too busy.", "It's closer."], 1, "'too busy without one'."),
      mc("2. What was the problem with the meal?", ["The food.", "The slow service.", "The price."], 1, "'the service was too slow'."),
      mc("3. Is there enough food?", ["No.", "Yes, plenty.", "Just enough."], 1, "'there's plenty'."),
      mc("4. What does the woman need?", ["Spicy food.", "Vegetarian options.", "A big table."], 1, "'a place with veggie options'."),
      mc("5. How was the steak?", ["Perfect.", "A bit overcooked.", "Cold."], 1, "'A bit overcooked'."),
      mc("6. Will they leave a tip?", ["No.", "Yes, definitely.", "Maybe."], 1, "'Definitely, the waiter was great'."),
    ]),

    ...speakingParts("la comida y comer fuera", { p1: "si te gusta comer fuera, tu comida favorita y si cocinas", p2: "personas comiendo en un restaurante o cocinando", p3: "qué restaurante elegir para celebrar el cumpleaños de un amigo/a", p4: "la comida, comer fuera vs. cocinar en casa y la comida sana" }),

    SUMMARY("Resumen del Día 12", [
      "too much/many + sustantivo; too + adjetivo; adjetivo + enough / enough + sustantivo; plenty of; a few/a little.",
      "Vocabulario de restaurantes.",
      "Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 13", "Escribe 3 frases con too/enough sobre un restaurante. Repasa las flashcards. Mañana: los artículos (a/an/the/cero)."),
  ],
};

// ───────────────────────── DÍA 13 ─────────────────────────
const DAY13 = {
  title: "Día 13 — Los artículos (a/an/the/cero) · La ropa y la moda",
  description: "Uso de a/an, the y artículo cero. Vocabulario de ropa y moda. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Usar a/an, the y el artículo cero correctamente.",
    summary: "Artículos; ropa/moda; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'the' con nombres generales.", "'I play the football'.", "'She is teacher'."],
    reviewPrompts: ["¿'I like the music' o 'I like music' en general?", "¿'play the piano' o 'play piano'?"],
  },
  items: [
    TEXT("🔁 Repaso: cuantificadores. Hoy los ARTÍCULOS (a/an, the y cuándo NO poner ninguno). Vocabulario: la ROPA y la MODA."),
    GRAMMAR("Los artículos: a/an, the, cero", `A / AN (uno cualquiera, primera mención): I saw a jacket. An hour later… (an + sonido vocal).
THE (uno concreto, ya conocido, o único): the jacket I bought; the sun; the best shop.
ARTÍCULO CERO (sin artículo): hablando EN GENERAL de plurales o incontables (I love clothes; Fashion changes fast); nombres de países/ciudades, comidas, deportes (I play football), y con 'go to bed/work/school/home'.
INSTRUMENTOS: play THE piano/guitar (con the). DEPORTES: play football (sin the).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I like the fashion (en general) → ✅ I like fashion.\n· ❌ I play the football → ✅ I play football.\n· ❌ She is teacher → ✅ She is a teacher.\n· ❌ I go to the bed → ✅ I go to bed."),
    grammarEx("Gramática — Artículos", "Completa con a/an/the o — (cero).", [
      fb("I saw ___ interesting jacket in the shop.", ["an"], "sonido vocal → an."),
      fb("She's ___ fashion designer.", ["a"], "profesión → a."),
      mc("Choose (general):", ["I love the fashion.", "I love fashion.", "I love a fashion."], 1, "general → sin artículo."),
      mc("Choose:", ["I play the football.", "I play football.", "I play a football."], 1, "deporte → sin the."),
      fb("Can you play ___ guitar?", ["the"], "instrumento → the guitar."),
      mc("Choose (specific):", ["Pass me a jacket I bought.", "Pass me the jacket I bought.", "Pass me jacket I bought."], 1, "concreto → the."),
      mc("Choose:", ["I go to the bed at eleven.", "I go to bed at eleven.", "I go to a bed at eleven."], 1, "'go to bed' sin artículo."),
    ]),
    GRAMMAR("Vocabulario del día — Ropa y moda", "Léxico de moda (B1)."),
    deck("B1 S3D13 — Ropa y moda", [
      ["outfit", "conjunto (de ropa)", "That's a lovely outfit.", "sustantivo", "ˈaʊtfɪt"],
      ["fashionable", "de moda", "These trainers are very fashionable.", "adjetivo", "ˈfæʃnəbl"],
      ["old-fashioned", "anticuado", "That style is a bit old-fashioned.", "adjetivo", "ˌəʊld ˈfæʃnd"],
      ["suit", "quedar bien / traje", "That colour really suits you.", "verbo/sustantivo", "suːt"],
      ["fit", "quedar (de talla)", "These jeans don't fit me.", "verbo", "fɪt"],
      ["try on", "probarse", "Can I try this on?", "phrasal verb", "traɪ ˈɒn"],
      ["brand", "marca", "It's an expensive brand.", "sustantivo", "brænd"],
      ["casual", "informal", "Wear something casual.", "adjetivo", "ˈkæʒuəl"],
      ["smart", "elegante / arreglado", "You look very smart.", "adjetivo", "smɑːt"],
      ["match", "combinar / conjuntar", "That scarf matches your coat.", "verbo", "mætʃ"],
    ]),
    vocabEx("Vocabulario — Ropa y moda", "Elige la opción correcta.", [
      mc("A set of clothes worn together is an ___.", ["outfit", "brand", "fit"], 0, "outfit."),
      mc("The opposite of 'fashionable' is ___.", ["old-fashioned", "smart", "casual"], 0, "old-fashioned."),
      mc("If a colour looks good on you, it ___ you.", ["suits", "fits", "matches"], 0, "suits."),
      mc("If clothes are the right size, they ___.", ["fit", "suit", "match"], 0, "fit."),
      mc("Relaxed, informal clothes are ___.", ["casual", "smart", "old-fashioned"], 0, "casual."),
      mc("When two items go well together, they ___.", ["match", "fit", "try on"], 0, "match."),
    ]),

    ...readingParts({
      p1: { title: "Ropa y tiendas", items: [
        mc("Sign: 'Changing rooms: maximum 4 items.'", ["Try on up to four items.", "No changing rooms.", "Buy four items."], 0, "'maximum 4 items'."),
        mc("Label: 'Machine wash at 30°. Do not iron.'", ["Wash cool, don't iron.", "Iron it.", "Wash hot."], 0, "'Do not iron'."),
        mc("Text: 'That colour really suits you — buy it!'", ["The colour looks good on them.", "It doesn't fit.", "Don't buy it."], 0, "'really suits you'."),
        mc("Notice: 'Smart dress required — no trainers.'", ["Dress smartly, no trainers.", "Casual is fine.", "Trainers welcome."], 0, "'Smart dress required — no trainers'."),
        mc("Sign: 'This brand is now 30% off.'", ["A discount on this brand.", "Full price.", "Not for sale."], 0, "'now 30% off'."),
      ] },
      p2text: "FOUR DRESS CODES FOR EVENTS\n\nA) The Job Interview — wear smart, professional clothes; first impressions matter.\nB) The Beach Party — casual and comfortable; shorts and sandals are perfect.\nC) The Wedding — elegant and formal; a suit or a nice dress is expected.\nD) The Music Festival — practical clothes and boots; it might be muddy!",
      p2q: { title: "Emparejar personas y eventos", items: [
        mc("Nadia has an interview and wants to look professional.", ["A", "B", "C", "D"], 0, "Job Interview."),
        mc("Ben is going to a relaxed party by the sea.", ["A", "B", "C", "D"], 1, "Beach Party."),
        mc("Sara needs an elegant outfit for a formal celebration.", ["A", "B", "C", "D"], 2, "Wedding."),
        mc("Leo wants practical clothes for a muddy outdoor event.", ["A", "B", "C", "D"], 3, "Music Festival."),
        mc("Someone who needs to make a good first impression.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "IS FASHION IMPORTANT?\n\nFashion is a subject that divides people. For some, it's a passion; for others, a waste of time and money. Personally, I think clothes matter more than we sometimes admit, but not for the reasons you might expect.\n\nI'm not interested in following every new trend. In fact, I find it silly to spend a fortune just because a certain brand is fashionable this month. What I do believe is that clothes are a form of communication. The outfit you choose says something about who you are and how you feel. When I wear something that suits me and fits well, I feel more confident, whether it's a smart suit or a casual pair of jeans.\n\nThe key, in my opinion, is to find your own style rather than blindly copying others. Fashion changes constantly, but style is personal and lasting. So my advice is simple: wear what makes you feel good, don't waste money on things you'll never wear, and remember that confidence is the best outfit of all.",
      p3q: { title: "¿Es importante la moda? (texto largo)", items: [
        mc("What does the writer think about following every trend?", ["It's essential.", "It's silly and expensive.", "It's fun."], 1, "'silly to spend a fortune… fashionable this month'."),
        mc("What does the writer believe clothes are?", ["A waste.", "A form of communication.", "Unimportant."], 1, "'clothes are a form of communication'."),
        mc("When does the writer feel more confident?", ["When following trends.", "When wearing something that suits and fits.", "When spending a lot."], 1, "'something that suits me and fits well'."),
        mc("What's the difference between fashion and style?", ["They're the same.", "Fashion changes; style is personal and lasting.", "Style changes fast."], 1, "'Fashion changes… but style is personal and lasting'."),
        mc("What is the writer's final advice?", ["Copy others.", "Wear what makes you feel good.", "Buy everything new."], 1, "'wear what makes you feel good'."),
      ] },
      p4text: "MY GRANDFATHER'S SUIT\n\nWhen my grandfather passed away, my grandmother gave me one of his old suits. (1)___ It was dark blue, beautifully made, and clearly from another era.\n\nAt first, I wasn't sure what to do with it. (2)___ It seemed too old-fashioned to wear, and it didn't quite fit me. But I couldn't bear to give it away, because it reminded me so much of him. So I took it to a tailor. (3)___\n\nThe tailor adjusted it perfectly, and now it fits me like a glove. (4)___ Last month, I wore it to my cousin's wedding, and several people said how smart I looked. When I told them the story, they were touched. (5)___ Some things never really go out of fashion.",
      p4options: [
        "It was the finest piece of clothing I had ever held.",     // A -> gap 1
        "The style was completely different from anything I owned.", // B -> gap 2
        "I asked her to bring it up to date without ruining it.",   // C -> gap 3
        "Wearing it makes me feel close to him.",                   // D -> gap 4
        "I threw the suit away immediately.",                       // E (extra)
        "A classic suit, it turns out, is timeless.",               // F -> gap 5
        "The suit was made of cheap plastic.",                      // G (extra)
        "I have never worn a suit in my life.",                     // H (extra)
      ],
      p4q: { title: "El traje de mi abuelo (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: la mejor prenda que había tenido."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: el estilo era muy distinto."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: pidió modernizarlo sin estropearlo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: llevarlo le acerca a él."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: un traje clásico es atemporal."),
      ] },
      p5text: "When you go shopping for clothes, always (1)___ them on before you buy. Something might look great on the shelf but not (2)___ you well. Choose colours that (3)___ you and items that (4)___ what you already own. You don't have to follow every trend to look good; a simple, well-chosen (5)___ is often better than expensive designer (6)___. The most important thing is to feel comfortable and confident.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["try", "put", "wear", "match"], 0, "'try them on'."),
        mc("Hueco 2", ["fit", "suit", "match", "try"], 0, "'not fit you well'."),
        mc("Hueco 3", ["suit", "fit", "match", "wear"], 0, "'colours that suit you'."),
        mc("Hueco 4", ["match", "fit", "suit", "try"], 0, "'items that match what you own'."),
        mc("Hueco 5", ["outfit", "brand", "fit", "size"], 0, "'a well-chosen outfit'."),
        mc("Hueco 6", ["brands", "outfits", "fits", "trends"], 0, "'designer brands'."),
      ] },
      p6text: "Hi Sam,\nI need your advice! I've got (1)___ interview next week and I don't know what to wear. I want to look (2)___ and professional, but not boring. I don't really follow (3)___, so I'm not sure what suits me. I tried (4)___ a blue suit yesterday and it fits (5)___ a glove! Do you think blue is a good colour, or should I choose something darker? I want (6)___ make a great first impression!\nThanks,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["an"], "'an interview'."),
        fb("Hueco 2", ["smart"], "'look smart and professional'."),
        fb("Hueco 3", ["fashion", "trends"], "'follow fashion' (general, sin the)."),
        fb("Hueco 4", ["on"], "'tried on a blue suit'."),
        fb("Hueco 5", ["like"], "'fits like a glove'."),
        fb("Hueco 6", ["to"], "'want to make'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pide consejo sobre qué ponerse para un evento. Responde a su email (~100 palabras):\n· pregúntale qué tipo de evento es,\n· dale un consejo sobre la ropa,\n· cuéntale qué te pondrías tú.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is fashion important for young people?' con tu opinión y razones.\n· RELATO: empieza con: 'I opened the box and found my grandfather's old suit.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre una tienda de ropa y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear an announcement in a clothes shop. Good afternoon, shoppers. Welcome to Style City. This week, all winter coats are half price. Our new spring collection has just arrived on the second floor. Remember, you can try on up to six items in the changing rooms. If something doesn't fit, you can return it within thirty days with your receipt. The shop closes at eight o'clock this evening. Thank you for shopping with us!", [
      fb("This week, all winter ___ are half price.", ["coats"], "'winter coats are half price'."),
      fb("The new spring collection is on the ___ floor.", ["second", "2nd"], "'on the second floor'."),
      fb("You can try on up to ___ items.", ["six", "6"], "'up to six items'."),
      fb("Return items within ___ days with your receipt.", ["thirty", "30"], "'within thirty days'."),
      fb("The shop closes at ___ o'clock.", ["eight", "8"], "'closes at eight o'clock'."),
    ]),

    ...speakingParts("la ropa y la moda", { p1: "qué tipo de ropa te gusta, si te importa la moda y cómo te vistes normalmente", p2: "personas comprando ropa o en un evento con distintos estilos", p3: "qué ropa comprar para un amigo/a que empieza un trabajo nuevo", p4: "la moda, seguir tendencias vs. tener estilo propio, y comprar ropa" }),

    SUMMARY("Resumen del Día 13", [
      "a/an (uno cualquiera), the (concreto/único), cero (general, deportes, go to bed/work).",
      "play THE piano; play football (sin the).",
      "Vocabulario de ropa y moda. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 14", "Escribe 4 frases usando a/an/the/cero correctamente. Repasa las flashcards. Mañana: verbo + -ing / infinitivo."),
  ],
};

// ───────────────────────── DÍA 14 ─────────────────────────
const DAY14 = {
  title: "Día 14 — Verbo + -ing / infinitivo · Aficiones",
  description: "Patrones verbales (gerundio vs infinitivo). Vocabulario de aficiones. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Elegir entre gerundio (-ing) e infinitivo (to) tras cada verbo.",
    summary: "Verbo + -ing / to; aficiones; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'enjoy to read'.", "'want playing'.", "'I stopped to smoke' vs 'stopped smoking'."],
    reviewPrompts: ["¿'enjoy' + qué forma?", "¿'decide' + qué forma?"],
  },
  items: [
    TEXT("🔁 Repaso: artículos. Hoy los PATRONES VERBALES: cuándo va -ing y cuándo 'to'. Vocabulario: AFICIONES."),
    GRAMMAR("Verbo + -ing / infinitivo", `+ -ING tras: enjoy, love, like, hate, don't mind, finish, keep, avoid, suggest, practise, spend time.
· I enjoy reading. She keeps forgetting. Avoid eating too late.
+ TO tras: want, need, would like, hope, decide, plan, promise, learn, offer, refuse, manage.
· I want to travel. He decided to leave. They managed to win.
Tras PREPOSICIÓN siempre -ing: good at cooking, interested in learning, before leaving.
Algunos cambian de significado: 'stop smoking' (dejar de fumar) vs 'stop to smoke' (parar para fumar).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I enjoy to read → ✅ I enjoy reading.\n· ❌ I want playing → ✅ I want to play.\n· ❌ good at to cook → ✅ good at cooking.\n· 'remember to do' (acuérdate de hacer) vs 'remember doing' (recordar haber hecho)."),
    grammarEx("Gramática — -ing / infinitivo", "Completa con la forma correcta.", [
      fb("I enjoy ___ (read) before bed.", ["reading"], "enjoy + -ing."),
      fb("She wants ___ (travel) the world.", ["to travel"], "want + to."),
      fb("They decided ___ (buy) a house.", ["to buy"], "decide + to."),
      fb("He's very good at ___ (cook).", ["cooking"], "preposición + -ing."),
      mc("Choose:", ["I don't mind to wait.", "I don't mind waiting.", "I don't mind wait."], 1, "don't mind + -ing."),
      fb("We hope ___ (see) you soon.", ["to see"], "hope + to."),
      fb("Avoid ___ (eat) too much sugar.", ["eating"], "avoid + -ing."),
    ]),
    GRAMMAR("Vocabulario del día — Aficiones", "Léxico de tiempo libre y aficiones (B1)."),
    deck("B1 S3D14 — Aficiones", [
      ["take up", "empezar (una afición)", "I've taken up painting.", "phrasal verb", "teɪk ˈʌp"],
      ["keen on", "aficionado a", "I'm keen on photography.", "colocación", "kiːn ɒn"],
      ["give up", "dejar / abandonar", "I gave up the guitar.", "phrasal verb", "ɡɪv ˈʌp"],
      ["hobby", "afición", "My main hobby is chess.", "sustantivo", "ˈhɒbi"],
      ["join", "apuntarse a", "I joined a running club.", "verbo", "dʒɔɪn"],
      ["skill", "destreza / habilidad", "Playing an instrument is a great skill.", "sustantivo", "skɪl"],
      ["relaxing", "relajante", "Fishing is very relaxing.", "adjetivo", "rɪˈlæksɪŋ"],
      ["challenging", "exigente / que supone un reto", "Chess is quite challenging.", "adjetivo", "ˈtʃælɪndʒɪŋ"],
      ["be into", "gustarle mucho / estar metido en", "I'm really into cycling.", "colocación", "biː ˈɪntuː"],
      ["spare time", "tiempo libre", "In my spare time I draw.", "colocación", "speə ˈtaɪm"],
    ]),
    vocabEx("Vocabulario — Aficiones", "Elige la opción correcta.", [
      mc("To start a new hobby is to ___ it.", ["take up", "give up", "join"], 0, "take up."),
      mc("If you like something a lot, you are ___ it.", ["keen on", "give up", "spare"], 0, "keen on."),
      mc("The opposite of 'take up' a hobby is to ___ it.", ["give up", "join", "take up"], 0, "give up."),
      mc("To become a member of a club is to ___ it.", ["join", "give up", "keen"], 0, "join."),
      mc("An activity that is difficult in a good way is ___.", ["challenging", "relaxing", "spare"], 0, "challenging."),
      mc("If you're really interested in cycling, you're ___ cycling.", ["into", "up", "off"], 0, "into."),
    ]),

    ...readingParts({
      p1: { title: "Aficiones y avisos", items: [
        mc("Poster: 'Photography club — beginners welcome, no skill needed.'", ["A club for beginner photographers.", "Experts only.", "No club."], 0, "'beginners welcome'."),
        mc("Text: 'I've taken up painting and I love it!'", ["Started painting recently.", "Gave up painting.", "Hates painting."], 0, "'taken up painting'."),
        mc("Sign: 'Chess club meets Thursdays — all levels.'", ["Chess on Thursdays for everyone.", "Experts only.", "No chess."], 0, "'all levels'."),
        mc("Notice: 'Give up your seat for the beginners' class.'", ["Let beginners use the seats.", "Keep your seat.", "No class."], 0, "'Give up your seat for the beginners' class'."),
        mc("Ad: 'Keen on running? Join our weekend club!'", ["An invitation for running fans.", "No running.", "Only weekdays."], 0, "'Keen on running? Join our… club'."),
      ] },
      p2text: "FOUR HOBBY CLUBS\n\nA) Pottery Studio — relaxing and creative; make your own bowls and cups; perfect for stressed people.\nB) Rock Climbing — exciting and challenging; build strength and confidence; for the adventurous.\nC) Book Club — read and discuss a new novel each month; great for thoughtful, social people.\nD) Photography Group — learn technical skills and go on photo walks; for the artistic.",
      p2q: { title: "Emparejar personas y clubes", items: [
        mc("Nadia feels stressed and wants a calm, creative hobby.", ["A", "B", "C", "D"], 0, "Pottery Studio."),
        mc("Ben loves adventure and physical challenges.", ["A", "B", "C", "D"], 1, "Rock Climbing."),
        mc("Sara loves reading and meeting people.", ["A", "B", "C", "D"], 2, "Book Club."),
        mc("Leo is artistic and wants to improve technical skills.", ["A", "B", "C", "D"], 3, "Photography Group."),
        mc("Someone who wants to build strength and confidence.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "WHY EVERYONE NEEDS A HOBBY\n\nIn today's busy world, many people say they don't have enough time for hobbies. They spend all day working or studying, and in their spare time they're too tired to do anything but watch television. But I believe that having a hobby isn't a luxury — it's essential for a happy, healthy life.\n\nA good hobby gives you a break from your worries. When I'm painting, for example, I forget about everything else and lose myself in the colours. Doctors agree that this kind of focus reduces stress. What's more, hobbies help us grow. Learning a new skill, whether it's playing the guitar or rock climbing, keeps our brains active and gives us a real sense of achievement.\n\nHobbies are also a wonderful way to meet people. When I joined a photography group last year, I made friends who share my interests. So if you keep telling yourself you don't have time, think again. Even thirty minutes a day can make a huge difference. Find something you enjoy doing, and make time for it. You won't regret it.",
      p3q: { title: "Por qué todos necesitamos una afición (texto largo)", items: [
        mc("What do many people say about hobbies?", ["They love them.", "They don't have enough time.", "They're a waste."], 1, "'they don't have enough time'."),
        mc("What does the writer think a hobby is?", ["A luxury.", "Essential for a happy life.", "Boring."], 1, "'essential for a happy, healthy life'."),
        mc("What happens when the writer paints?", ["They get stressed.", "They forget everything else.", "They get bored."], 1, "'I forget about everything else'."),
        mc("How can hobbies help us grow?", ["They cost money.", "Learning a skill keeps the brain active.", "They waste time."], 1, "'Learning a new skill… keeps our brains active'."),
        mc("What did the writer gain from the photography group?", ["Money.", "New friends with shared interests.", "A job."], 1, "'made friends who share my interests'."),
      ] },
      p4text: "FINDING MY PASSION\n\nFor most of my life, I never had a real hobby. (1)___ I spent my free time scrolling on my phone, and I always felt a bit empty afterwards.\n\nThen, last winter, a friend suggested going to a pottery class with her. (2)___ I only agreed because she didn't want to go alone. But from the moment I touched the clay, something changed. (3)___ Making something with my own hands was more satisfying than anything I'd done in years.\n\nNow, pottery is the highlight of my week. (4)___ I've even set up a small studio at home. It's not always easy — some pieces break, and I have a lot to learn — but that's part of the fun. (5)___ I only wish I had discovered it years ago.",
      p4options: [
        "I used to envy people who were passionate about something.", // A -> gap 1
        "At first, I really didn't want to go.",                     // B -> gap 2
        "I was completely hooked.",                                  // C -> gap 3
        "I look forward to my class more than anything.",            // D -> gap 4
        "I decided to give up pottery forever.",                     // E (extra)
        "The challenge is exactly what I love about it.",            // F -> gap 5
        "I have never enjoyed anything creative.",                   // G (extra)
        "My friend hated the class immediately.",                    // H (extra)
      ],
      p4q: { title: "Encontrar mi pasión (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: envidiaba a los apasionados."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: al principio no quería ir."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: quedó enganchado."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: espera su clase con ganas."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: el reto es lo que le encanta."),
      ] },
      p5text: "Having a hobby is great for your health. If you enjoy (1)___ things with your hands, you could take (2)___ pottery or painting. If you prefer (3)___ active, why not join a sports club? Doctors say that spending time on a hobby helps (4)___ stress. Don't worry if you're not good at first — the important thing is to keep (5)___. You might even make new friends who are (6)___ on the same things as you.",
      p5q: { title: "Huecos con opciones (verbo/vocabulario)", items: [
        mc("Hueco 1", ["making", "to make", "make", "made"], 0, "enjoy + -ing → making."),
        mc("Hueco 2", ["up", "in", "on", "off"], 0, "'take up pottery'."),
        mc("Hueco 3", ["being", "to be", "be", "been"], 0, "prefer + -ing → being."),
        mc("Hueco 4", ["reduce", "reducing", "to reducing", "reduced"], 0, "'helps reduce stress'."),
        mc("Hueco 5", ["trying", "to try", "try", "tried"], 0, "keep + -ing → trying."),
        mc("Hueco 6", ["keen", "into", "up", "good"], 0, "'keen on the same things'."),
      ] },
      p6text: "Hi Sam,\nGuess what — I've taken (1)___ pottery! I never used to have a hobby; I just spent my spare time (2)___ on my phone. But my friend suggested (3)___ to a class, and now I'm completely into it. I really enjoy (4)___ things with my hands, and it helps me (5)___ stress. I've even decided (6)___ set up a small studio at home. You should try it — it's so relaxing!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["up"], "'taken up pottery'."),
        fb("Hueco 2", ["scrolling", "looking"], "'spent time scrolling'."),
        fb("Hueco 3", ["going"], "'suggested going' (suggest + -ing)."),
        fb("Hueco 4", ["making"], "'enjoy making'."),
        fb("Hueco 5", ["reduce"], "'helps me reduce stress'."),
        fb("Hueco 6", ["to"], "'decided to set up'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tu tiempo libre. Responde a su email (~100 palabras):\n· cuéntale tu afición y por qué te gusta,\n· di cómo la empezaste,\n· pregúntale por sus aficiones.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why everyone should have a hobby' con tus razones.\n· RELATO: empieza con: 'I never thought I would enjoy it so much.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con un joven sobre su afición y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young man, Leo, about his hobby. Interviewer: Leo, what's your main hobby? Leo: Rock climbing. I took it up about two years ago. Interviewer: What do you enjoy most about it? Leo: The challenge, definitely. Every climb is like solving a puzzle. Interviewer: Isn't it dangerous? Leo: Not if you're careful and use the right equipment. Safety comes first. Interviewer: How often do you go? Leo: Twice a week, and I've made loads of friends at the club. Interviewer: Would you recommend it? Leo: Absolutely. It keeps me fit and it's helped me become more confident.", [
      mc("What is Leo's main hobby?", ["Painting.", "Rock climbing.", "Chess."], 1, "'Rock climbing'."),
      mc("When did he take it up?", ["Last month.", "About two years ago.", "As a child."], 1, "'about two years ago'."),
      mc("What does he enjoy most?", ["The friends.", "The challenge.", "The equipment."], 1, "'The challenge, definitely'."),
      mc("What does he say about danger?", ["It's very dangerous.", "Not if you're careful.", "He doesn't care."], 1, "'Not if you're careful… Safety comes first'."),
      mc("How has climbing helped him?", ["Made money.", "Kept him fit and more confident.", "Nothing."], 1, "'keeps me fit… more confident'."),
    ]),

    ...speakingParts("las aficiones y el tiempo libre", { p1: "qué haces en tu tiempo libre, cómo empezaste tu afición y por qué te gusta", p2: "personas haciendo aficiones (pintura, escalada, música)", p3: "qué actividad nueva probar juntos este mes", p4: "las aficiones, por qué son importantes y cómo encontrar tiempo para ellas" }),

    SUMMARY("Resumen del Día 14", [
      "enjoy/avoid/keep/suggest + -ing; want/decide/hope/manage + to; preposición + -ing.",
      "Ojo: stop doing (dejar de) vs stop to do (parar para).",
      "Vocabulario de aficiones. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 15", "Escribe 4 frases con verbo + -ing/infinitivo sobre tus gustos. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 15 ─────────────────────────
const DAY15 = {
  title: "Día 15 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de comparación, cuantificadores, artículos y patrones verbales. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 3.",
  pedagogy: {
    objective: "Consolidar la gramática de la semana y medir el progreso.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 4."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 3 del B1. Consolidas comparación, cantidad, artículos y patrones verbales. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 3", `1) Comparación avanzada: much/far + comparativo; as…as; the …er the …er.
2) Cuantificadores: too much/many, too + adj, adj + enough, plenty of, a few/a little.
3) Artículos: a/an, the, cero (general, deportes, go to bed/work).
4) Verbo + -ing (enjoy/avoid/keep) / + to (want/decide/hope); preposición + -ing.`),
    grammarEx("Repaso mixto de gramática — Semana 3", "Completa o elige.", [
      fb("This shop is ___ (much/cheap) than that one.", ["much cheaper"], "much + comparativo."),
      mc("Choose:", ["There were too much people.", "There were too many people.", "There were enough much people."], 1, "contable → too many."),
      fb("Is the room big ___ for a desk?", ["enough"], "big enough."),
      mc("Choose (general):", ["I love the fashion.", "I love fashion.", "I love a fashion."], 1, "general → sin artículo."),
      fb("I enjoy ___ (read) in my spare time.", ["reading"], "enjoy + -ing."),
      fb("She decided ___ (take) up painting.", ["to take"], "decide + to."),
      fb("Don't worry, we have ___ (de sobra) of time.", ["plenty"], "plenty of."),
      fb("He's really good ___ (at) cooking.", ["at"], "good at + -ing."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 3", "Repasa los mazos (compras, comer fuera, ropa, aficiones)."),
    vocabEx("Repaso de vocabulario — Semana 3", "Elige la opción correcta.", [
      mc("A very cheap, good deal:", ["bargain", "refund", "receipt"], 0, "bargain."),
      mc("The first small dish of a meal:", ["starter", "dessert", "bill"], 0, "starter."),
      mc("The opposite of 'fashionable':", ["old-fashioned", "smart", "casual"], 0, "old-fashioned."),
      mc("To start a new hobby:", ["take up", "give up", "join"], 0, "take up."),
      mc("Money returned when you bring something back:", ["refund", "discount", "receipt"], 0, "refund."),
      mc("If a colour looks good on you, it ___ you:", ["suits", "fits", "matches"], 0, "suits."),
      mc("If you like something a lot, you're ___ it:", ["keen on", "give up", "spare"], 0, "keen on."),
      mc("When there are none left:", ["out of stock", "a bargain", "value"], 0, "out of stock."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Sign: 'Sale ends Sunday — plenty of bargains left!'", ["Many deals until Sunday.", "No deals.", "Sale over."], 0, "'plenty of bargains left'."),
        mc("Menu: 'Not enough time? Try our express lunch.'", ["A quick lunch option.", "No lunch.", "Slow service."], 0, "'Not enough time? Try our express lunch'."),
        mc("Label: 'This coat is far warmer than it looks.'", ["Warmer than expected.", "Very cold.", "Not warm."], 0, "'far warmer than it looks'."),
        mc("Poster: 'Keen on chess? Join our club, all levels.'", ["Chess club for everyone.", "Experts only.", "No club."], 0, "'Keen on chess? Join our club'."),
        mc("Notice: 'Try on as many outfits as you like.'", ["No limit on trying clothes.", "One item only.", "No trying."], 0, "'as many outfits as you like'."),
      ] },
      p2text: "FOUR WEEKEND PLANS\n\nA) Vintage Market — hunt for second-hand bargains and unique clothes.\nB) Cookery Class — learn to make a three-course meal; plenty of tasting!\nC) Climbing Centre — a challenging indoor climbing wall for all levels.\nD) Art Café — relax, draw, and enjoy good coffee in a creative space.",
      p2q: { title: "Emparejar personas y planes", items: [
        mc("Nadia loves finding cheap, unique clothes.", ["A", "B", "C", "D"], 0, "Vintage Market."),
        mc("Ben wants to learn to cook a full meal.", ["A", "B", "C", "D"], 1, "Cookery Class."),
        mc("Sara wants an exciting physical challenge.", ["A", "B", "C", "D"], 2, "Climbing Centre."),
        mc("Leo wants a relaxing, creative afternoon.", ["A", "B", "C", "D"], 3, "Art Café."),
        mc("Someone who enjoys tasting food.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "LESS IS MORE\n\nA year ago, my bedroom was full of things: too many clothes, too many gadgets, and far too much stuff I never used. Every time I tried to tidy up, I felt stressed. Then I read an article about 'minimalism' — the idea of living with less — and I decided to give it a try.\n\nI started with my wardrobe. I was shocked to find that I owned over a hundred items of clothing, but I only wore about twenty of them. So I gave away everything I hadn't worn in a year. It was hard at first, but it felt wonderful. Suddenly, getting dressed was much easier, because everything that was left actually suited me and fitted well.\n\nSince then, I've applied the same idea to the rest of my life. I buy far fewer things, but I choose them carefully and enjoy them more. I have more space, more money, and, strangely, more happiness. I've learned that we don't need plenty of possessions to feel good. Often, the less we own, the freer we feel.",
      p3q: { title: "Menos es más (texto largo)", items: [
        mc("What was the writer's bedroom like a year ago?", ["Empty.", "Full of unused things.", "Tidy."], 1, "'too many… far too much stuff I never used'."),
        mc("What idea did the writer read about?", ["Fashion.", "Minimalism (living with less).", "Shopping more."], 1, "'minimalism — the idea of living with less'."),
        mc("How many clothes did they actually wear?", ["A hundred.", "About twenty.", "None."], 1, "'only wore about twenty'."),
        mc("What became easier?", ["Cooking.", "Getting dressed.", "Studying."], 1, "'getting dressed was much easier'."),
        mc("What has the writer learned?", ["We need plenty of things.", "The less we own, the freer we feel.", "Buy more."], 1, "'the less we own, the freer we feel'."),
      ] },
      p4text: "THE ART OF SAYING NO\n\nLast year, I realised I had a problem: I could never say no. (1)___ If a friend asked me to help, I said yes. If my boss gave me extra work, I said yes. As a result, I had far too much to do and not enough time for myself.\n\nOne evening, exhausted, I decided that things had to change. (2)___ I read that learning to say no politely is one of the most important skills in life. So I started to practise. (3)___ The first time I said no to an extra task at work, my heart was beating fast. But my boss simply said, 'No problem.'\n\nSlowly, I got better at it. (4)___ I still help people when I can, but now I also protect my own time. I've taken up hobbies again, and I feel far less stressed. (5)___ Saying no, I've learned, is really a way of saying yes to yourself.",
      p4options: [
        "I was always afraid of disappointing people.",             // A -> gap 1
        "That night, I made myself a promise.",                     // B -> gap 2
        "It was much harder than I expected.",                      // C -> gap 3
        "The world didn't end, as I had feared.",                   // D -> gap 4
        "I decided to say yes to absolutely everything.",           // E (extra)
        "Now I have time for the things that really matter.",       // F -> gap 5
        "I have never helped anyone in my life.",                   // G (extra)
        "My boss fired me immediately.",                            // H (extra)
      ],
      p4q: { title: "El arte de decir que no (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: temía decepcionar."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: se hizo una promesa."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: más difícil de lo esperado."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: el mundo no se acabó."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: tiempo para lo importante."),
      ] },
      p5text: "Modern life often means owning (1)___ many things and having (2)___ little time. Some people choose 'minimalism', living with (3)___ possessions but enjoying them more. If you're keen (4)___ trying it, start small: give (5)___ things you never use. You'll probably find you have (6)___ of space and feel much freer.",
      p5q: { title: "Huecos con opciones (vocabulario/gramática)", items: [
        mc("Hueco 1", ["too", "enough", "plenty", "a few"], 0, "'too many things'."),
        mc("Hueco 2", ["too", "so", "very", "enough"], 0, "'too little time'."),
        mc("Hueco 3", ["fewer", "less", "plenty", "much"], 0, "'fewer possessions' (contable)."),
        mc("Hueco 4", ["on", "in", "at", "to"], 0, "'keen on trying'."),
        mc("Hueco 5", ["away", "up", "in", "off"], 0, "'give away things'."),
        mc("Hueco 6", ["plenty", "too", "enough of", "a few"], 0, "'plenty of space'."),
      ] },
      p6text: "Hi Sam,\nI've been trying something new: minimalism! I used to have far too (1)___ clothes and gadgets I never used. Now I own (2)___ things, but I enjoy them (3)___. I gave (4)___ everything I hadn't worn in a year. Getting dressed is much (5)___ now, because everything suits me. I have plenty (6)___ space and I feel so much freer. You should try it!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["many"], "'too many clothes'."),
        fb("Hueco 2", ["fewer", "less"], "'fewer things'."),
        fb("Hueco 3", ["more"], "'enjoy them more'."),
        fb("Hueco 4", ["away"], "'gave away'."),
        fb("Hueco 5", ["easier"], "'much easier'."),
        fb("Hueco 6", ["of"], "'plenty of space'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere ordenar su vida y tener menos cosas. Responde a su email (~100 palabras):\n· dale tu opinión sobre tener menos cosas,\n· dale un consejo para empezar,\n· cuéntale algo que tú harías.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Do we own too many things?' con tu opinión y razones.\n· RELATO: empieza con: 'I decided to give away everything I didn't need.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Why did you give away your clothes? Man: I had far too many I never wore. Two. Man: Is this a good price? Woman: Yes, it's much cheaper than online. Three. Woman: Do you have a hobby? Man: Yes, I've taken up pottery. Four. Man: Is the restaurant good? Woman: The food is, but the service is too slow. Five. Man: What should I wear? Woman: Something smart, but not too formal. Six. Woman: Do you follow fashion? Man: Not really, I prefer my own style.", [
      mc("1. Why did the man give away his clothes?", ["Too old.", "Too many he never wore.", "Too small."], 1, "'far too many I never wore'."),
      mc("2. What does the woman say about the price?", ["Expensive.", "Much cheaper than online.", "Average."], 1, "'much cheaper than online'."),
      mc("3. What hobby has the man taken up?", ["Painting.", "Pottery.", "Climbing."], 1, "'taken up pottery'."),
      mc("4. What's the problem with the restaurant?", ["The food.", "The slow service.", "The price."], 1, "'the service is too slow'."),
      mc("5. What should he wear?", ["Very formal.", "Smart but not too formal.", "Casual."], 1, "'smart, but not too formal'."),
      mc("6. Does the man follow fashion?", ["Yes.", "No, he prefers his own style.", "Sometimes."], 1, "'I prefer my own style'."),
    ]),

    ...speakingParts("las compras, la moda y las aficiones", { p1: "cómo gastas tu dinero, qué ropa te gusta y qué haces en tu tiempo libre", p2: "personas comprando, vistiendo con estilo o haciendo una afición", p3: "qué comprar y qué actividad hacer para un día especial con amigos", p4: "el consumo, tener menos cosas y disfrutar del tiempo libre" }),

    SUMMARY("Resumen de la Semana 3 (B1)", [
      "Dominas la comparación avanzada, los cuantificadores, los artículos y los patrones verbales.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: obligación y consejo (modales) y la voz pasiva.",
    ]),
    INFO("Mini-simulacro de la Semana 3", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 4."),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Comparación, cantidad y descripción",
  description: "Comparación avanzada, cuantificadores, artículos y patrones verbales (-ing/infinitivo). Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
