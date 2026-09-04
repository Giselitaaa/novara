/**
 * A2 Key · Semana 10 — "Conectar ideas y opinar".
 * Gramática/funciones: conectores (although/however/also), dar opiniones y
 * acuerdo/desacuerdo, hacer sugerencias e invitaciones, question tags.
 * Vocabulario: opiniones, fiestas y costumbres, los medios, la vida diaria.
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

const DAY46 = {
  title: "Día 46 — Conectores (although/however/also) · Las fiestas y costumbres",
  description: "Conectores de contraste y adición. Vocabulario: fiestas y costumbres. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Conectar ideas con although, however, also, too y as well.",
    summary: "although/however/also/too/as well; fiestas; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["'although' + 'but' juntos.", "'also' al final.", "'too' al principio."],
    reviewPrompts: ["¿'although' o 'but'?", "¿Dónde va 'also' y dónde 'too'?"],
  },
  items: [
    TEXT("🔁 Semana 10. Hoy aprendes a CONECTAR ideas con más precisión (although, however, also). Vocabulario: FIESTAS y costumbres, tema muy A2."),
    GRAMMAR("Conectores: contraste y adición", `CONTRASTE (pero / aunque / sin embargo):
· but (pero): It was cold, but I went out.
· although (aunque): Although it was cold, I went out. (une dos frases; NO uses 'but' a la vez)
· however (sin embargo): It was cold. However, I went out. (frase nueva, con coma)

ADICIÓN (también):
· also: entre el sujeto y el verbo, o después de 'be': I also like tea. She is also kind.
· too / as well: al FINAL de la frase: I like tea too. I like tea as well.

⚠️ No juntes 'although' y 'but' en la misma idea: ❌ Although it was cold, but I went.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Although it rained, but we played → ✅ Although it rained, we played.\n· ❌ I like it also (al final) → ✅ I also like it / I like it too.\n· ❌ Too, I like coffee → ✅ I like coffee too.\n· 'however' empieza frase nueva y lleva coma."),
    grammarEx("Gramática — conectores", "Completa o elige.", [
      mc("Choose:", ["Although it was cold, but I went.", "Although it was cold, I went.", "Although but it was cold, I went."], 1, "no 'but' con although."),
      fb("It rained, ___ (pero) we still had fun.", ["but"], "but."),
      fb("I like tea. I like coffee ___ (también, al final).", ["too", "as well"], "too/as well al final."),
      mc("Choose:", ["I also like it.", "I like also it.", "I like it also."], 0, "also entre sujeto y verbo."),
      fb("It was expensive. ___ (sin embargo), I bought it.", ["However"], "However + coma."),
      mc("Choose:", ["Although he was tired, he finished.", "He was tired but although he finished.", "Although but he was tired."], 0, "Although + dos frases."),
      fb("She's a great singer. She's ___ (también) a good dancer.", ["also"], "also tras 'be'."),
    ]),
    GRAMMAR("Vocabulario del día — Fiestas y costumbres", "Celebraciones y tradiciones."),
    deck("A2 Key S10D46 — Fiestas y costumbres", [
      ["festival", "festival / fiesta", "There's a music festival in July.", "sustantivo", "ˈfestɪvl"],
      ["tradition", "tradición", "It's an old tradition.", "sustantivo", "trəˈdɪʃn"],
      ["celebrate", "celebrar", "We celebrate New Year together.", "verbo", "ˈselɪbreɪt"],
      ["fireworks", "fuegos artificiales", "The fireworks were amazing.", "sustantivo", "ˈfaɪəwɜːks"],
      ["costume", "disfraz / traje típico", "She wore a colourful costume.", "sustantivo", "ˈkɒstjuːm"],
      ["parade", "desfile", "We watched the street parade.", "sustantivo", "pəˈreɪd"],
      ["decorate", "decorar", "We decorate the house at Christmas.", "verbo", "ˈdekəreɪt"],
      ["gift", "regalo", "We give gifts on birthdays.", "sustantivo", "ɡɪft"],
      ["holiday", "día festivo / vacaciones", "It's a national holiday.", "sustantivo", "ˈhɒlədeɪ"],
      ["custom", "costumbre", "It's a local custom.", "sustantivo", "ˈkʌstəm"],
    ]),
    vocabEx("Vocabulario — Fiestas y costumbres", "Elige la opción correcta.", [
      mc("Lights in the sky at a celebration are ___.", ["fireworks", "costumes", "gifts"], 0, "fireworks."),
      mc("An old way of doing things, passed down, is a ___.", ["tradition", "parade", "gift"], 0, "tradition."),
      mc("Special clothes for a festival are a ___.", ["costume", "custom", "holiday"], 0, "costume."),
      mc("People walking together in the street to celebrate is a ___.", ["parade", "gift", "festival"], 0, "parade."),
      mc("To make a place look nice for a party is to ___.", ["decorate", "celebrate", "parade"], 0, "decorate."),
      mc("A usual way of doing something in a culture is a ___.", ["custom", "costume", "gift"], 0, "custom."),
    ]),

    READING_HEAD,
    READING_P1("Fiestas y avisos", [
      mc("Sign: 'Street parade at 6 pm — roads closed.'", ["A parade at 6, roads shut.", "No parade.", "Roads open."], 0, "'parade at 6 pm — roads closed'."),
      mc("Notice: 'Fireworks tonight — please keep pets inside.'", ["Keep pets in for the fireworks.", "No fireworks.", "Pets outside."], 0, "'keep pets inside'."),
      mc("Text: 'Come to our festival! Costumes welcome.'", ["You can wear a costume.", "No costumes.", "No festival."], 0, "'Costumes welcome'."),
      mc("Sign: 'Shops closed for the national holiday.'", ["Shops shut for the holiday.", "Shops open.", "No holiday."], 0, "'closed for the national holiday'."),
      mc("Notice: 'Help decorate the hall for the party on Friday.'", ["Come and decorate on Friday.", "No party.", "Hall closed."], 0, "'Help decorate the hall'."),
      mc("Ad: 'Traditional dance show — a local custom for 200 years.'", ["An old traditional dance.", "A new dance.", "No show."], 0, "'a local custom for 200 years'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y festivales", "THREE FESTIVALS\n\nA) Light Festival — thousands of candles and lanterns in the streets at night. Quiet and beautiful.\n\nB) Food Fair — try dishes from all over the world. Great for people who love eating.\n\nC) Music Parade — a loud, colourful parade with bands, costumes and dancing.", "Empareja cada persona con el festival ideal (A/B/C).", [
      mc("Someone who loves a quiet, beautiful evening.", ["A", "B", "C"], 0, "Light Festival."),
      mc("A person who loves trying different foods.", ["A", "B", "C"], 1, "Food Fair."),
      mc("Someone who enjoys loud music and dancing.", ["A", "B", "C"], 2, "Music Parade."),
      mc("A person who wants to see candles and lanterns.", ["A", "B", "C"], 0, "A."),
      mc("Someone who loves world food.", ["A", "B", "C"], 1, "B."),
      mc("A person who likes colourful costumes and bands.", ["A", "B", "C"], 2, "C."),
      mc("Someone looking for a calm celebration.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY FAVOURITE FESTIVAL\n\nMy favourite festival is the Spring Festival in my town. Although it's very old, it's still popular with young people today. Every year, on the first Saturday of April, the whole town comes together to celebrate.\n\nThe day starts with a colourful parade through the main square. People wear traditional costumes, and there's music everywhere. In the afternoon, families have picnics in the park. There are also games for children and stalls selling delicious food. However, my favourite part comes at night: the fireworks. They light up the whole sky, and everyone watches together.\n\nAlthough some people say old traditions aren't important any more, I disagree. Festivals like this bring people together and make us proud of where we come from. I hope this custom continues for many more years.", "Lee el texto y responde (A/B/C).", [
      mc("When is the festival?", ["The first Saturday of April.", "In summer.", "At Christmas."], 0, "'the first Saturday of April'."),
      mc("How does the day start?", ["With fireworks.", "With a parade.", "With a picnic."], 1, "'starts with a colourful parade'."),
      mc("What is the writer's favourite part?", ["The parade.", "The picnic.", "The fireworks."], 2, "'my favourite part… the fireworks'."),
      mc("What do people wear in the parade?", ["Normal clothes.", "Traditional costumes.", "Sports clothes."], 1, "'traditional costumes'."),
      mc("What does the writer think about old traditions?", ["They aren't important.", "They bring people together.", "They are boring."], 1, "'bring people together'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My favourite festival is the Spring Festival. (1)___ it's very old, it's still popular. The day starts with a colourful (2)___ through the square, and people wear traditional (3)___. There are (4)___ games for children and food stalls. (5)___, my favourite part is the (6)___ at night. They light up the whole sky!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["Although", "But", "However"], 0, "'Although it's very old'."),
      mc("Hueco 2", ["parade", "custom", "gift"], 0, "'a colourful parade'."),
      mc("Hueco 3", ["costumes", "customs", "holidays"], 0, "'traditional costumes'."),
      mc("Hueco 4", ["also", "too", "as well"], 0, "'There are also games'."),
      mc("Hueco 5", ["However", "Although", "But"], 0, "'However, my favourite part…'."),
      mc("Hueco 6", ["fireworks", "costumes", "parade"], 0, "'the fireworks at night'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wynn,\nMy favourite festival is the Spring Festival. (1)___ it's very old, it's still popular with young people. The day starts (2)___ a colourful parade, and people wear traditional costumes. There are (3)___ games and food stalls. (4)___, my favourite part is the fireworks at night — they light (5)___ the whole sky! Some people say old traditions don't matter, (6)___ I disagree.\nLove,\nRee", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["Although"], "'Although it's very old'."),
      fb("Hueco 2", ["with"], "'starts with a parade'."),
      fb("Hueco 3", ["also"], "'There are also games'."),
      fb("Hueco 4", ["However"], "'However, my favourite part'."),
      fb("Hueco 5", ["up"], "'light up the sky'."),
      fb("Hueco 6", ["but"], "contraste → but."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu fiesta favorita", "Cuéntale a tu amigo/a inglés/a de una fiesta o celebración de tu país. Escríbele un email (25 palabras o más) con:\n· qué fiesta es y cuándo,\n· qué hace la gente,\n· por qué te gusta.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una ciudad se prepara para una fiesta con adornos.\n2) Hay un desfile con música y disfraces.\n3) Por la noche, todos ven los fuegos artificiales.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Are you going to the festival? Man: Yes, although I don't like the crowds. Two. Man: What time is the parade? Woman: It starts at six in the main square. Three. Woman: Did you like the fireworks? Man: Yes, they were amazing! Four. Man: What are you wearing to the party? Woman: A traditional costume. Five. Man: Is the shop open today? Woman: No, it's a national holiday.", [
      mc("1. Is the man going to the festival?", ["No.", "Yes, but he doesn't like crowds.", "He's not sure."], 1, "'Yes, although I don't like the crowds'."),
      mc("2. Where does the parade start?", ["The park.", "The main square.", "The station."], 1, "'in the main square'."),
      mc("3. What did the man think of the fireworks?", ["Boring.", "Amazing.", "Too loud."], 1, "'they were amazing'."),
      mc("4. What will the woman wear?", ["Normal clothes.", "A traditional costume.", "Sports clothes."], 1, "'A traditional costume'."),
      mc("5. Why is the shop closed?", ["It's late.", "It's a national holiday.", "It's broken."], 1, "'it's a national holiday'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (fiestas)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre fiestas y celebraciones — tu fiesta favorita, cómo la celebras, una costumbre de tu país", "hablar de fiestas y conectar ideas", "my favourite festival, we celebrate, although, also, tradition"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (celebraciones)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre fiestas grandes o pequeñas, tradicionales o modernas; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, tradition, fun"),

    SUMMARY("Resumen del Día 46", [
      "Contraste: but, although (dos frases), however (frase nueva + coma).",
      "Adición: also (medio), too / as well (final).",
      "Vocabulario de fiestas. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 47", "Une 3 pares de frases con although/however. Repasa las flashcards. Mañana: dar opiniones y estar de acuerdo o no."),
  ],
};

const DAY47 = {
  title: "Día 47 — Dar opiniones y acuerdo/desacuerdo · Los medios",
  description: "Lenguaje para opinar y para (des)acuerdo. Vocabulario: los medios de comunicación. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Dar tu opinión y expresar acuerdo o desacuerdo con educación.",
    summary: "I think/In my opinion; agree/disagree; los medios; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'I am agree'.", "'I think that no'.", "'depends of'."],
    reviewPrompts: ["¿'I agree' o 'I am agree'?", "¿Cómo dices 'depende de'?"],
  },
  items: [
    TEXT("🔁 Repaso: conectores. Hoy aprendes a DAR TU OPINIÓN y a estar (o no) de acuerdo — clave para el Speaking. Vocabulario: los MEDIOS de comunicación."),
    GRAMMAR("Opiniones y acuerdo/desacuerdo", `DAR OPINIÓN:
· I think (that)… · In my opinion,… · I believe… · For me,…
· I think it's a good idea. In my opinion, films are better than books.

ACUERDO:
· I agree (with you). · That's true. · You're right. · So do I / Me too.
DESACUERDO (con educación):
· I don't agree. · I'm not sure about that. · I see your point, but…

⚠️ 'agree' es VERBO: ✅ I agree (NO 'I am agree').
· 'It depends ON…' (no 'depends of').
· Para negar: I don't think it's true (NO 'I think it's not true').`),
    WARN("Errores típicos del hispanohablante", "· ❌ I am agree → ✅ I agree.\n· ❌ It depends of the weather → ✅ It depends on the weather.\n· ❌ I think that no → ✅ I don't think so.\n· ❌ In my opinion is good → ✅ In my opinion, it's good."),
    grammarEx("Gramática — opiniones", "Completa o elige.", [
      mc("Choose:", ["I am agree with you.", "I agree with you.", "I agreeing with you."], 1, "I agree."),
      fb("It ___ (depends) on the weather.", ["depends on"], "depend on."),
      mc("Choose (opinion):", ["In my opinion is good.", "In my opinion, it's good.", "In mine opinion good."], 1, "In my opinion, it's good."),
      mc("Polite disagreement:", ["You're wrong.", "I'm not sure about that.", "That's stupid."], 1, "I'm not sure about that."),
      fb("I ___ (think) films are better than books.", ["think"], "I think."),
      mc("Choose:", ["I think it's not true.", "I don't think it's true.", "I no think it's true."], 1, "I don't think it's true."),
      mc("Agreement:", ["So do I.", "So am I do.", "Also I do so."], 0, "So do I."),
    ]),
    GRAMMAR("Vocabulario del día — Los medios de comunicación", "Prensa, TV e internet."),
    deck("A2 Key S10D47 — Los medios", [
      ["news", "noticias", "I watch the news every evening.", "sustantivo", "njuːz"],
      ["newspaper", "periódico", "He reads the newspaper.", "sustantivo", "ˈnjuːzpeɪpə"],
      ["magazine", "revista", "I bought a sports magazine.", "sustantivo", "ˌmæɡəˈziːn"],
      ["channel", "canal (TV)", "Change the channel, please.", "sustantivo", "ˈtʃænl"],
      ["programme", "programa", "It's my favourite programme.", "sustantivo", "ˈprəʊɡræm"],
      ["advert", "anuncio", "There are too many adverts.", "sustantivo", "ˈædvɜːt"],
      ["headline", "titular", "The headline was shocking.", "sustantivo", "ˈhedlaɪn"],
      ["journalist", "periodista", "She's a TV journalist.", "sustantivo", "ˈdʒɜːnəlɪst"],
      ["broadcast", "emitir / emisión", "The match is broadcast live.", "verbo/sustantivo", "ˈbrɔːdkɑːst"],
      ["report", "reportaje / informar", "There was a report about it.", "sustantivo/verbo", "rɪˈpɔːt"],
    ]),
    vocabEx("Vocabulario — Los medios", "Elige la opción correcta.", [
      mc("Information about recent events is the ___.", ["news", "advert", "channel"], 0, "news."),
      mc("A person who writes for a newspaper is a ___.", ["journalist", "channel", "headline"], 0, "journalist."),
      mc("The big title of a news story is the ___.", ["headline", "advert", "magazine"], 0, "headline."),
      mc("A TV show is a ___.", ["programme", "newspaper", "report"], 0, "programme."),
      mc("A short message to sell something on TV is an ___.", ["advert", "headline", "channel"], 0, "advert."),
      mc("You change the ___ to watch a different show.", ["channel", "headline", "magazine"], 0, "channel."),
    ]),

    READING_HEAD,
    READING_P1("Los medios y avisos", [
      mc("TV guide: 'News at 9 pm on Channel 1.'", ["The news is at 9 on Channel 1.", "No news.", "News at 1."], 0, "'News at 9 pm'."),
      mc("Note: 'Too many adverts — I turned it off.'", ["Turned off because of adverts.", "No adverts.", "Loved the adverts."], 0, "'Too many adverts — I turned it off'."),
      mc("Headline: 'Local team wins the cup!'", ["The team won.", "The team lost.", "No match."], 0, "'wins the cup'."),
      mc("Sign: 'Free newspapers — please take one.'", ["Take a free newspaper.", "Buy a newspaper.", "No newspapers."], 0, "'Free newspapers'."),
      mc("Text: 'The match is on Channel 3 tonight, live!'", ["Watch the match live on Channel 3.", "No match.", "It's recorded."], 0, "'on Channel 3 tonight, live'."),
      mc("Ad: 'New cooking magazine out now.'", ["A new magazine is available.", "No magazine.", "It's old."], 0, "'New cooking magazine out now'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y medios", "THREE THINGS TO READ OR WATCH\n\nA) Science Weekly — a magazine full of interesting science news and experiments to try.\n\nB) Morning News — a TV programme with the day's important news and weather. On every day at 7 am.\n\nC) Sports Talk — a radio show where fans discuss football matches and give their opinions.", "Empareja cada persona con el medio ideal (A/B/C).", [
      mc("Someone who loves science and experiments.", ["A", "B", "C"], 0, "Science Weekly."),
      mc("A person who wants the news and weather in the morning.", ["A", "B", "C"], 1, "Morning News."),
      mc("A football fan who likes to hear opinions.", ["A", "B", "C"], 2, "Sports Talk."),
      mc("Someone who enjoys reading about experiments.", ["A", "B", "C"], 0, "A."),
      mc("A person who watches TV at 7 am.", ["A", "B", "C"], 1, "B."),
      mc("Someone who likes discussing matches.", ["A", "B", "C"], 2, "C."),
      mc("A person interested in science news.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "TOO MUCH NEWS?\n\nMy family and I often argue about the news. My father thinks it's important to watch the news every day. 'You need to know what's happening in the world,' he says. In my opinion, he's right, but I think he watches too much!\n\nMy mother disagrees with him. She believes that a lot of news is bad and negative, and it makes people worried. 'I prefer to read one good newspaper in the morning,' she says, 'and then enjoy my day.' I think that's a good idea too.\n\nAs for me, I get most of my news online, on my phone. It's quick and I can choose what to read. However, I know I have to be careful, because not everything online is true. In my opinion, the best thing is to stay informed, but not to worry too much. What do you think?", "Lee el texto y responde (A/B/C).", [
      mc("What does the father think?", ["The news is boring.", "It's important to watch the news daily.", "News is bad."], 1, "'important to watch the news every day'."),
      mc("What does the mother believe?", ["News is always good.", "A lot of news is negative and worrying.", "She loves TV news."], 1, "'a lot of news is bad and negative'."),
      mc("How does the writer get most news?", ["TV.", "Online, on their phone.", "Newspapers."], 1, "'most of my news online, on my phone'."),
      mc("What does the writer have to be careful about?", ["The cost.", "Not everything online is true.", "The time."], 1, "'not everything online is true'."),
      mc("What is the writer's opinion?", ["Never watch the news.", "Stay informed but don't worry too much.", "Watch news all day."], 1, "'stay informed, but not to worry too much'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "In my family we often (1)___ about the news. My father (2)___ it's important to watch it every day. My mother (3)___ with him; she says a lot of news is negative. I get most of my news (4)___, on my phone. However, I have to be careful because not everything online is (5)___. In my (6)___, the best thing is to stay informed but not worry too much.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["argue", "agree", "report"], 0, "'we often argue'."),
      mc("Hueco 2", ["thinks", "agrees", "reports"], 0, "'thinks it's important'."),
      mc("Hueco 3", ["disagrees", "agrees", "argues"], 0, "'disagrees with him'."),
      mc("Hueco 4", ["online", "newspaper", "channel"], 0, "'news online'."),
      mc("Hueco 5", ["true", "false", "boring"], 0, "'not everything… is true'."),
      mc("Hueco 6", ["opinion", "headline", "programme"], 0, "'In my opinion'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nIn my family we often argue about the news! My father thinks (1)___ important to watch it every day. My mother doesn't (2)___ with him — she says a lot of news is negative. I get most of my news online, (3)___ I have to be careful because not everything is true. (4)___ my opinion, the best thing is to stay informed (5)___ not worry too much. What (6)___ you think?\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["it's", "its"], "'thinks it's important'."),
      fb("Hueco 2", ["agree"], "'doesn't agree'."),
      fb("Hueco 3", ["but"], "contraste → but."),
      fb("Hueco 4", ["In"], "'In my opinion'."),
      fb("Hueco 5", ["but"], "'but not worry'."),
      fb("Hueco 6", ["do"], "'What do you think?'"),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu opinión sobre la tele o internet", "Tu amigo/a inglés/a quiere tu opinión. Escríbele un email (25 palabras o más) con:\n· si prefieres la tele o internet,\n· una ventaja de tu elección,\n· usa 'I think' o 'In my opinion'.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia discute qué ver en la tele.\n2) Cada uno quiere un programa distinto.\n3) Al final eligen uno juntos y lo disfrutan.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a man leaving a message about a TV programme. Hi, it's Rob. Don't forget the football match is on tonight. It's on Channel five, and it starts at eight o'clock. Our team is playing against the winners of last year. My brother says they'll win, but I'm not sure. Come to my house to watch it — I'll make some pizza! Call me back.", [
      fb("The match is on Channel ___.", ["five", "5"], "'on Channel five'."),
      fb("It starts at ___ o'clock.", ["eight", "8"], "'at eight o'clock'."),
      fb("Watch it at ___'s house.", ["Rob"], "'Come to my house' (Rob)."),
      fb("He'll make some ___.", ["pizza"], "'I'll make some pizza'."),
      fb("Who thinks the team will win? His ___.", ["brother"], "'My brother says they'll win'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (medios)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre los medios — si ves las noticias, tu programa favorito, si prefieres leer o ver noticias", "hablar de hábitos y dar opiniones", "I watch, my favourite programme, I think, in my opinion, I prefer"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (medios)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre ver la tele o usar internet, leer noticias o verlas; el examinador pregunta qué prefieres y por qué", "dar opiniones y razones", "I prefer, I think, because, in my opinion, quicker"),

    SUMMARY("Resumen del Día 47", [
      "Opinar: I think / In my opinion. Acuerdo: I agree, So do I. Desacuerdo: I'm not sure about that.",
      "'agree' es verbo (I agree); 'depend on'; 'I don't think so'.",
      "Vocabulario de los medios. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 48", "Escribe tu opinión sobre 2 temas con 'I think' e 'In my opinion'. Repasa las flashcards. Mañana: hacer sugerencias e invitaciones."),
  ],
};

const DAY48 = {
  title: "Día 48 — Sugerencias e invitaciones · La vida social",
  description: "Hacer sugerencias, invitar, aceptar y rechazar. Vocabulario: la vida social. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Hacer sugerencias e invitaciones y responder a ellas.",
    summary: "Let's/Why don't we/How about; invitar/aceptar/rechazar; vida social; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'How about to go'.", "'Why don't we to go'.", "'Let's to go'."],
    reviewPrompts: ["¿'How about' + qué forma?", "¿'Let's' + qué forma?"],
  },
  items: [
    TEXT("🔁 Repaso: dar opiniones. Hoy aprendes a hacer SUGERENCIAS e INVITACIONES, y a aceptarlas o rechazarlas — muy útil para el Speaking Parte 2. Vocabulario: la VIDA SOCIAL."),
    GRAMMAR("Sugerencias e invitaciones", `HACER SUGERENCIAS:
· Let's + verbo base: Let's go to the cinema.
· Why don't we + base?: Why don't we eat out?
· How about + -ing?: How about going to the park?
· Shall we + base?: Shall we meet at six?
· We could + base: We could try that new café.

ACEPTAR: Yes, please. / Good idea! / That sounds great. / Sure!
RECHAZAR (con educación): Sorry, I can't. / I'd love to, but… / Maybe another time.

⚠️ How about + -ing (How about going); Let's/Why don't we/Shall we + base.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Let's to go → ✅ Let's go.\n· ❌ How about to go → ✅ How about going.\n· ❌ Why don't we to eat → ✅ Why don't we eat?\n· ❌ Shall we going? → ✅ Shall we go?"),
    grammarEx("Gramática — sugerencias e invitaciones", "Completa o elige.", [
      mc("Choose:", ["Let's to go out.", "Let's go out.", "Let's going out."], 1, "Let's + base."),
      fb("How about ___ (go) to the beach?", ["going"], "How about + -ing."),
      mc("Choose:", ["Why don't we to meet?", "Why don't we meet?", "Why we don't meet?"], 1, "Why don't we + base."),
      fb("Shall we ___ (have) lunch together?", ["have"], "Shall we + base."),
      mc("Accepting:", ["Sorry, I can't.", "That sounds great!", "Maybe another time."], 1, "aceptar → sounds great."),
      mc("Refusing politely:", ["No.", "I'd love to, but I'm busy.", "That's stupid."], 1, "rechazo educado."),
      fb("We ___ (could) try that new restaurant.", ["could"], "suggestion → could."),
    ]),
    GRAMMAR("Vocabulario del día — La vida social", "Salir y quedar con gente."),
    deck("A2 Key S10D48 — La vida social", [
      ["invite", "invitar", "She invited me to her party.", "verbo", "ɪnˈvaɪt"],
      ["meet up", "quedar / reunirse", "Let's meet up on Saturday.", "phrasal verb", "miːt ˈʌp"],
      ["join", "unirse / apuntarse", "Do you want to join us?", "verbo", "dʒɔɪn"],
      ["arrange", "organizar / concertar", "We arranged to meet at six.", "verbo", "əˈreɪndʒ"],
      ["cancel", "cancelar / anular", "I had to cancel our plans.", "verbo", "ˈkænsl"],
      ["get together", "juntarse / reunirse", "We get together every Friday.", "phrasal verb", "ɡet təˈɡeðə"],
      ["available", "disponible / libre", "Are you available on Sunday?", "adjetivo", "əˈveɪləbl"],
      ["busy", "ocupado", "Sorry, I'm busy tonight.", "adjetivo", "ˈbɪzi"],
      ["fun", "divertido / diversión", "The party was so much fun.", "sustantivo/adjetivo", "fʌn"],
      ["catch up", "ponerse al día", "Let's catch up soon!", "phrasal verb", "kætʃ ˈʌp"],
    ]),
    vocabEx("Vocabulario — La vida social", "Elige la opción correcta.", [
      mc("To meet friends is to ___.", ["meet up", "cancel", "arrange"], 0, "meet up."),
      mc("To ask someone to your party is to ___ them.", ["invite", "join", "cancel"], 0, "invite."),
      mc("The opposite of 'available' is ___.", ["busy", "fun", "free"], 0, "busy."),
      mc("To stop a plan from happening is to ___ it.", ["cancel", "arrange", "join"], 0, "cancel."),
      mc("To talk about news after time apart is to ___.", ["catch up", "cancel", "invite"], 0, "catch up."),
      mc("To become part of a group is to ___.", ["join", "cancel", "arrange"], 0, "join."),
    ]),

    READING_HEAD,
    READING_P1("Planes e invitaciones", [
      mc("Text: 'Fancy going to the cinema tonight?'", ["An invitation to the cinema.", "No plan.", "Cancelled."], 0, "'Fancy going to the cinema?'"),
      mc("Message: 'Sorry, I have to cancel — I'm ill.'", ["Cancelling because ill.", "Coming for sure.", "New plan."], 0, "'I have to cancel — I'm ill'."),
      mc("Note: 'Party at mine on Friday. Everyone's invited!'", ["An open invitation to a party.", "No party.", "Only some people."], 0, "'Everyone's invited'."),
      mc("Text: 'Are you free on Sunday to meet up?'", ["Asking to meet on Sunday.", "Busy Sunday.", "No meeting."], 0, "'free on Sunday to meet up'."),
      mc("Message: 'Let's catch up soon — it's been ages!'", ["Wants to meet after a long time.", "No plans.", "Just met."], 0, "'Let's catch up soon'."),
      mc("Reply: 'I'd love to, but I'm busy. Maybe next week?'", ["Politely refusing, suggesting later.", "Accepting.", "No reply."], 0, "'I'd love to, but I'm busy… next week?'"),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes", "THREE WEEKEND INVITATIONS\n\nA) A quiet dinner at home — 'Come round, I'll cook. We can catch up properly.'\n\nB) A big house party — 'Loads of people coming, music till late. Bring your friends!'\n\nC) A day hiking — 'Let's meet at 8 and walk in the hills. Bring good boots and water.'", "Empareja cada persona con el plan ideal (A/B/C).", [
      mc("Someone who wants a calm evening to talk with a friend.", ["A", "B", "C"], 0, "quiet dinner."),
      mc("A person who loves big parties and music.", ["A", "B", "C"], 1, "house party."),
      mc("Someone who enjoys exercise and nature.", ["A", "B", "C"], 2, "hiking."),
      mc("A person who wants to catch up properly.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to dance and meet lots of people.", ["A", "B", "C"], 1, "B."),
      mc("A person who needs good boots and water.", ["A", "B", "C"], 2, "C."),
      mc("Someone who prefers a home-cooked meal.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MAKING PLANS\n\nMy friends and I are quite different, so making plans for the weekend isn't always easy! Last Friday, we couldn't decide what to do. My friend Leo suggested going to a big party. 'How about dancing all night?' he said. But my friend Mia prefers quiet evenings. 'Why don't we just have dinner at my place and catch up?' she said.\n\nI could see both sides. In the end, I had an idea. 'Let's do both,' I suggested. 'We can have an early dinner at Mia's, and then those who want to can go to the party afterwards.' Everyone agreed it was a good plan.\n\nSo that's what we did. We had a lovely, relaxed dinner first, and then Leo and I went to the party, while Mia stayed home. The best thing about good friends is that you can find a way to make everyone happy.", "Lee el texto y responde (A/B/C).", [
      mc("What did Leo suggest?", ["A quiet dinner.", "Going to a big party.", "Hiking."], 1, "'How about dancing all night?'"),
      mc("What does Mia prefer?", ["Parties.", "Quiet evenings.", "Hiking."], 1, "'Mia prefers quiet evenings'."),
      mc("What was the writer's idea?", ["Only the party.", "Do both — dinner then party.", "Stay home."], 1, "'Let's do both'."),
      mc("What did they do first?", ["Went to the party.", "Had dinner at Mia's.", "Went hiking."], 1, "'an early dinner at Mia's'."),
      mc("Who stayed home after dinner?", ["Leo.", "The writer.", "Mia."], 2, "'Mia stayed home'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last Friday my friends and I couldn't decide what to do. Leo (1)___ going to a party. 'How about (2)___ all night?' he said. But Mia prefers quiet evenings. 'Why don't we just have dinner and (3)___ up?' she said. In the end I said, 'Let's (4)___ both.' Everyone (5)___ it was a good idea. We had dinner first, and then some of us went to the (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["suggested", "cancelled", "invited"], 0, "'suggested going'."),
      mc("Hueco 2", ["dancing", "dance", "to dance"], 0, "How about + -ing."),
      mc("Hueco 3", ["catch", "catching", "to catch"], 0, "'catch up' (base tras why don't we)."),
      mc("Hueco 4", ["do", "doing", "to do"], 0, "Let's + base."),
      mc("Hueco 5", ["agreed", "disagreed", "argued"], 0, "'everyone agreed'."),
      mc("Hueco 6", ["party", "dinner", "hills"], 0, "'went to the party'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Bo,\nLast Friday my friends couldn't decide what to do. Leo suggested going to a party — 'How (1)___ dancing all night?' he said. But Mia prefers quiet evenings, so she said, 'Why don't we (2)___ have dinner and catch up?' In the end I said, '(3)___ do both!' Everyone (4)___ it was a good idea. We had dinner first, (5)___ then some of us went to the party. It's great when you (6)___ make everyone happy!\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["about"], "'How about dancing'."),
      fb("Hueco 2", ["just"], "'just have dinner'."),
      fb("Hueco 3", ["Let's"], "'Let's do both'."),
      fb("Hueco 4", ["agreed", "thought"], "'everyone agreed'."),
      fb("Hueco 5", ["and"], "'and then'."),
      fb("Hueco 6", ["can"], "'you can make everyone happy'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Haz una invitación", "Quieres quedar con tu amigo/a inglés/a el fin de semana. Escríbele un email (25 palabras o más) con:\n· propón un plan (una sugerencia),\n· di el día y la hora,\n· pídele que confirme.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unos amigos no se ponen de acuerdo en qué hacer.\n2) Uno propone una idea que gusta a todos.\n3) Disfrutan juntos del plan.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigas haciendo planes y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Sara and Kate, making plans for the weekend. Sara: What shall we do on Saturday? Kate: How about going to the cinema? Sara: We went last week. Why don't we try that new café instead? Kate: Good idea! Shall we invite Emma too? Sara: Yes, let's. But she's usually busy on Saturdays. Kate: Let's ask her anyway. What time shall we meet? Sara: How about four o'clock? Kate: Perfect. I'll message Emma now.", [
      mc("What does Kate first suggest?", ["The café.", "The cinema.", "A walk."], 1, "'How about going to the cinema?'"),
      mc("Why doesn't Sara want the cinema?", ["Too expensive.", "They went last week.", "Too far."], 1, "'We went last week'."),
      mc("What do they decide to do?", ["Go to the cinema.", "Try the new café.", "Stay home."], 1, "'try that new café'."),
      mc("Who do they want to invite?", ["Leo.", "Emma.", "Mia."], 1, "'Shall we invite Emma?'"),
      mc("What time will they meet?", ["Three.", "Four.", "Five."], 1, "'How about four o'clock?'"),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (vida social)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre la vida social — qué haces con tus amigos, cómo quedáis, qué te gusta hacer los fines de semana", "hablar de planes y sugerencias", "we usually, let's, we could, at the weekend, meet up"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (planes)", "Da siempre una razón con 'because'. En esta parte, también puedes hacer sugerencias.", "Parte 2 del A2 Key: proponer y decidir un plan con el examinador (p. ej., qué hacer un sábado) dando razones", "hacer sugerencias y dar razones", "how about, why don't we, let's, because, I prefer"),

    SUMMARY("Resumen del Día 48", [
      "Sugerencias: Let's/Why don't we/Shall we + base; How about + -ing.",
      "Aceptar: sounds great; rechazar: I'd love to, but…",
      "Vocabulario de la vida social. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 49", "Escribe 3 sugerencias distintas para un plan. Repasa las flashcards. Mañana: question tags."),
  ],
};

const DAY49 = {
  title: "Día 49 — Question tags · Repaso funcional",
  description: "Coletillas interrogativas (question tags) y repaso funcional. Vocabulario: expresiones útiles. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Añadir question tags para confirmar o pedir acuerdo.",
    summary: "Question tags; expresiones útiles; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["tag con el auxiliar/tiempo equivocado.", "positivo con positivo.", "'isn't it' universal."],
    reviewPrompts: ["Tag de 'You're tired, ___?'", "Tag de 'She can swim, ___?'"],
  },
  items: [
    TEXT("🔁 Repaso: sugerencias. Hoy las QUESTION TAGS (coletillas como '¿verdad?', '¿no?'). Vocabulario: EXPRESIONES útiles del día a día."),
    GRAMMAR("Question tags (coletillas)", `Sirven para confirmar o pedir acuerdo (= ¿verdad?, ¿no?). Se forman con el auxiliar de la frase + el sujeto (pronombre):
· Frase AFIRMATIVA → tag NEGATIVA: You're tired, aren't you? She likes tea, doesn't she?
· Frase NEGATIVA → tag AFIRMATIVA: You aren't tired, are you? He can't swim, can he?

El auxiliar del tag copia el de la frase (be, do/does/did, can, will, have…):
· It's cold, isn't it? · They went, didn't they? · You can drive, can't you? · She'll come, won't she?`),
    WARN("Errores típicos del hispanohablante", "· ❌ You're tired, isn't it? → ✅ …aren't you?\n· ❌ She likes tea, likes she? → ✅ …doesn't she?\n· ❌ You went, didn't it? → ✅ …didn't you?\n· afirmativa → tag negativa (y al revés)."),
    grammarEx("Gramática — question tags", "Añade la coletilla correcta.", [
      fb("You're tired, ___?", ["aren't you"], "afirmativa be → aren't you."),
      fb("She likes coffee, ___?", ["doesn't she"], "present simple → doesn't she."),
      fb("They went home, ___?", ["didn't they"], "past simple → didn't they."),
      fb("He can't swim, ___?", ["can he"], "negativa can → can he."),
      mc("Choose:", ["It's cold, isn't it?", "It's cold, doesn't it?", "It's cold, is it?"], 0, "be afirmativo → isn't it."),
      fb("You'll come, ___?", ["won't you"], "will → won't you."),
      fb("We aren't late, ___?", ["are we"], "negativa be → are we."),
    ]),
    GRAMMAR("Vocabulario del día — Expresiones útiles", "Frases hechas para conversar."),
    deck("A2 Key S10D49 — Expresiones útiles", [
      ["never mind", "no importa / da igual", "Never mind, we'll try again.", "expresión", "ˈnevə maɪnd"],
      ["of course", "por supuesto", "Of course I'll help you.", "expresión", "əv ˈkɔːs"],
      ["by the way", "por cierto", "By the way, did you call Tom?", "expresión", "baɪ ðə ˈweɪ"],
      ["I'm afraid", "me temo (que)", "I'm afraid I can't come.", "expresión", "aɪm əˈfreɪd"],
      ["no worries", "no pasa nada", "No worries, it's fine.", "expresión", "nəʊ ˈwʌriz"],
      ["hang on", "espera un momento", "Hang on, I'm coming!", "expresión", "hæŋ ˈɒn"],
      ["you're welcome", "de nada", "'Thanks!' 'You're welcome.'", "expresión", "jɔː ˈwelkəm"],
      ["good luck", "buena suerte", "Good luck with your exam!", "expresión", "ɡʊd ˈlʌk"],
      ["take care", "cuídate", "Take care! See you soon.", "expresión", "teɪk ˈkeə"],
      ["cheer up", "anímate", "Cheer up, things will get better.", "phrasal verb", "tʃɪə ˈʌp"],
    ]),
    vocabEx("Vocabulario — Expresiones útiles", "Elige la opción correcta.", [
      mc("When someone thanks you, you say ___.", ["you're welcome", "good luck", "never mind"], 0, "you're welcome."),
      mc("To tell someone not to worry about a mistake, you say ___.", ["never mind", "of course", "by the way"], 0, "never mind."),
      mc("Before an exam, a friend says ___.", ["good luck", "take care", "hang on"], 0, "good luck."),
      mc("To ask someone to wait a moment, you say ___.", ["hang on", "cheer up", "of course"], 0, "hang on."),
      mc("To change the subject, you say ___.", ["by the way", "never mind", "good luck"], 0, "by the way."),
      mc("To make a sad friend feel better, you say ___.", ["cheer up", "hang on", "of course"], 0, "cheer up."),
    ]),

    READING_HEAD,
    READING_P1("Conversaciones cortas", [
      mc("Text: 'Good luck with your driving test tomorrow!'", ["Wishing success for a test.", "Bad news.", "No test."], 0, "'Good luck… test'."),
      mc("Reply: 'Never mind, we can go another day.'", ["It's OK, another day.", "Angry.", "No plan."], 0, "'Never mind, another day'."),
      mc("Message: 'By the way, are you free on Saturday?'", ["Asking about Saturday.", "A goodbye.", "A complaint."], 0, "'By the way, are you free…'"),
      mc("Text: 'I'm afraid I can't make it tonight. Sorry!'", ["Can't come tonight.", "Coming for sure.", "No plan."], 0, "'I'm afraid I can't make it'."),
      mc("Note: 'Take care and see you soon!'", ["A friendly goodbye.", "A warning.", "An invitation."], 0, "'Take care… see you soon'."),
      mc("Reply: 'No worries, these things happen.'", ["It's not a problem.", "Very angry.", "A question."], 0, "'No worries'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar situaciones y respuestas", "THREE SITUATIONS\n\nA) Your friend is sad because they failed a test.\n\nB) Your friend thanks you for helping them move house.\n\nC) Your friend has to cancel your plans because they're ill.", "Empareja cada situación con la mejor respuesta.", [
      mc("'Cheer up, you can try again next time!'", ["A", "B", "C"], 0, "A: sad friend."),
      mc("'You're welcome, any time!'", ["A", "B", "C"], 1, "B: thanks."),
      mc("'No worries, get better soon. Take care!'", ["A", "B", "C"], 2, "C: ill friend cancelling."),
      mc("Which situation needs 'good luck next time'?", ["A", "B", "C"], 0, "A."),
      mc("Which situation is about saying thanks?", ["A", "B", "C"], 1, "B."),
      mc("Which situation involves an illness?", ["A", "B", "C"], 2, "C."),
      mc("Where would you say 'these things happen'?", ["A", "B", "C"], 2, "C (or A) — cancelling."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A GOOD FRIEND\n\nMy friend Dani is the kindest person I know. Whenever I have a problem, he always knows what to say. Last month, I was very worried because I had an important exam, and I was sure I would fail. 'Cheer up,' he said. 'You've studied hard, haven't you? You'll be fine.'\n\nOn the morning of the exam, he sent me a message: 'Good luck! You can do it.' It made me feel so much better. Although I was still nervous, I felt calmer knowing he believed in me.\n\nIn the end, I passed the exam! The first thing I did was call Dani to say thank you. 'You're welcome,' he said, 'but you did the hard work, not me.' That's the kind of friend everyone needs — someone who is there for you, isn't it? I'm very lucky to have him.", "Lee el texto y responde (A/B/C).", [
      mc("Why was the writer worried?", ["A party.", "An important exam.", "A trip."], 1, "'I had an important exam'."),
      mc("What did Dani say to encourage them?", ["'Give up.'", "'You've studied hard, you'll be fine.'", "'Don't worry about it.'"], 1, "'You've studied hard… You'll be fine'."),
      mc("What did Dani send on the morning of the exam?", ["A gift.", "A good luck message.", "Nothing."], 1, "'Good luck! You can do it'."),
      mc("What was the result of the exam?", ["Failed.", "Passed.", "Cancelled."], 1, "'I passed the exam'."),
      mc("How does the writer feel about Dani?", ["Annoyed.", "Very lucky.", "Jealous."], 1, "'I'm very lucky to have him'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My friend Dani always knows what to say. Before my exam I was worried, but he said, '(1)___ up, you'll be fine.' On the morning of the exam, he sent me a message: 'Good (2)___!' It made me feel better. Although I was nervous, I felt (3)___. In the end, I (4)___ the exam! I called him to say thank you, and he said, 'You're (5)___.' Everyone needs a friend like that, (6)___ they?", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["Cheer", "Hang", "Take"], 0, "'Cheer up'."),
      mc("Hueco 2", ["luck", "care", "morning"], 0, "'Good luck'."),
      mc("Hueco 3", ["calmer", "worse", "sadder"], 0, "'felt calmer'."),
      mc("Hueco 4", ["passed", "failed", "missed"], 0, "'I passed'."),
      mc("Hueco 5", ["welcome", "sorry", "afraid"], 0, "'You're welcome'."),
      mc("Hueco 6", ["don't", "aren't", "isn't"], 0, "'…need a friend, don't they?'"),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sol,\nMy friend Dani is so kind! Before my exam I was worried, (1)___ he said, 'Cheer up, you'll be fine.' On the morning of the exam he sent me a message: 'Good (2)___!' It made me feel better. Although I was nervous, I felt calmer (3)___ he believed in me. In the end, I (4)___ the exam! I called him to say thank you, and he said, 'You're (5)___.' Everyone needs a friend like that, don't (6)___?\nLove,\nJun", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["but"], "contraste → but."),
      fb("Hueco 2", ["luck"], "'Good luck'."),
      fb("Hueco 3", ["because"], "causa → because."),
      fb("Hueco 4", ["passed"], "'I passed'."),
      fb("Hueco 5", ["welcome"], "'You're welcome'."),
      fb("Hueco 6", ["they"], "'don't they?' (question tag)."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Anima a un amigo/a", "Tu amigo/a inglés/a está preocupado/a por un examen. Escríbele un email (25 palabras o más) con:\n· anímale (cheer up),\n· deséale suerte,\n· propón algo para celebrar después.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona está nerviosa antes de un examen.\n2) Un amigo la anima y le desea suerte.\n3) Aprueba y lo celebran juntos.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige en qué situación está cada una.", "This is Part Four. You will hear five people speaking. Choose the situation. One. Good luck with your interview tomorrow — I'm sure you'll get the job! Two. Never mind about the broken cup, these things happen. Don't worry. Three. Thank you so much for your help. You're welcome, any time! Four. Cheer up! I know you're sad, but everything will be OK. Five. I'm afraid I can't come to the party, I'm really busy this week.", [
      mc("Person 1 is…", ["wishing someone luck", "apologising", "refusing"], 0, "'Good luck with your interview'."),
      mc("Person 2 is…", ["telling someone not to worry", "thanking", "inviting"], 0, "'Never mind… don't worry'."),
      mc("Person 3 is…", ["responding to thanks", "complaining", "cancelling"], 0, "'You're welcome, any time'."),
      mc("Person 4 is…", ["comforting a sad friend", "wishing luck", "thanking"], 0, "'Cheer up!… everything will be OK'."),
      mc("Person 5 is…", ["refusing an invitation", "accepting", "thanking"], 0, "'I'm afraid I can't come'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (amistad)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre la amistad — cómo es tu mejor amigo/a, qué hacéis juntos, qué hace a un buen amigo", "describir personas y usar expresiones útiles", "my best friend, we usually, a good friend is someone who, kind"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (amigos)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre pasar tiempo con muchos amigos o con uno solo; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, close friends, fun"),

    SUMMARY("Resumen del Día 49", [
      "Question tags: afirmativa → tag negativa (y al revés); copia el auxiliar.",
      "Expresiones útiles: never mind, of course, I'm afraid, good luck, cheer up…",
      "Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 50", "Escribe 4 frases con su question tag. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY50 = {
  title: "Día 50 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de conectores, opiniones, sugerencias y question tags. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 10.",
  pedagogy: {
    objective: "Consolidar el lenguaje funcional (opinar, sugerir, conectar) y medir el progreso.",
    summary: "Repaso de conectores, opiniones, sugerencias, question tags; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 11."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 10. Consolidas el lenguaje para opinar, sugerir y conectar ideas, y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 10", `1) Conectores: but/although/however (contraste); also/too/as well (adición).
2) Opiniones: I think/In my opinion; I agree/I don't agree; depend on.
3) Sugerencias: Let's/Why don't we/Shall we + base; How about + -ing.
4) Question tags: afirmativa → tag negativa (copia el auxiliar).`),
    grammarEx("Repaso mixto de gramática — Semana 10", "Completa o elige.", [
      mc("Choose:", ["Although it rained, but we played.", "Although it rained, we played.", "Although but it rained."], 1, "no 'but' con although."),
      mc("Choose:", ["I am agree.", "I agree.", "I agreeing."], 1, "I agree."),
      fb("How about ___ (go) to the beach?", ["going"], "How about + -ing."),
      fb("You're tired, ___?", ["aren't you"], "question tag."),
      fb("In my ___, films are better than books.", ["opinion"], "In my opinion."),
      mc("Choose:", ["Let's to go out.", "Let's go out.", "Let's going out."], 1, "Let's + base."),
      fb("It's cold, ___?", ["isn't it"], "question tag."),
      fb("I like tea. I like coffee ___ (también, al final).", ["too", "as well"], "too/as well."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 10", "Repasa los mazos (fiestas, medios, vida social, expresiones)."),
    vocabEx("Repaso de vocabulario — Semana 10", "Elige la opción correcta.", [
      mc("Lights in the sky at a celebration:", ["fireworks", "costumes", "gifts"], 0, "fireworks."),
      mc("A person who writes for a newspaper:", ["journalist", "channel", "headline"], 0, "journalist."),
      mc("To meet friends:", ["meet up", "cancel", "arrange"], 0, "meet up."),
      mc("When someone thanks you, you say:", ["you're welcome", "good luck", "never mind"], 0, "you're welcome."),
      mc("Special clothes for a festival:", ["costume", "custom", "holiday"], 0, "costume."),
      mc("The opposite of 'available':", ["busy", "fun", "free"], 0, "busy."),
      mc("To animate a sad friend:", ["cheer up", "hang on", "of course"], 0, "cheer up."),
      mc("The big title of a news story:", ["headline", "advert", "channel"], 0, "headline."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Festival tonight — although it may rain, the show continues.'", ["The show goes on, rain or not.", "Cancelled.", "No festival."], 0, "'the show continues'."),
      mc("Text: 'I'd love to come, but I'm afraid I'm busy. Maybe next week?'", ["Politely refusing, suggesting later.", "Accepting.", "No reply."], 0, "'I'm afraid I'm busy… next week?'"),
      mc("Notice: 'In my opinion, the best film of the year!'", ["A strong recommendation.", "A bad review.", "No opinion."], 0, "'the best film of the year'."),
      mc("Reply: 'How about meeting at six? — Perfect!'", ["A plan agreed for six.", "No plan.", "Cancelled."], 0, "'How about six? — Perfect'."),
      mc("Message: 'Good luck tonight — you'll be great!'", ["Wishing success.", "Bad news.", "A complaint."], 0, "'Good luck… you'll be great'."),
      mc("Sign: 'Parade cancelled due to weather. However, fireworks continue.'", ["No parade, but fireworks happen.", "Everything cancelled.", "No fireworks."], 0, "'However, fireworks continue'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes", "THREE OPINIONS ABOUT WEEKENDS\n\nA) 'In my opinion, the best weekend is a quiet one at home with a good book.'\n\nB) 'I think weekends are for adventure — hiking, sport, anything active!'\n\nC) 'For me, weekends are about friends. I love inviting people over and cooking for them.'", "Empareja cada afirmación con la persona (A/B/C).", [
      mc("Who prefers a quiet weekend at home?", ["A", "B", "C"], 0, "A."),
      mc("Who likes active, adventurous weekends?", ["A", "B", "C"], 1, "B."),
      mc("Who loves seeing friends and cooking?", ["A", "B", "C"], 2, "C."),
      mc("Who would enjoy a hiking trip?", ["A", "B", "C"], 1, "B."),
      mc("Who would host a dinner party?", ["A", "B", "C"], 2, "C."),
      mc("Who prefers to relax with a book?", ["A", "B", "C"], 0, "A."),
      mc("Who is the most sociable?", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A DIFFERENCE OF OPINION\n\nIn my family, everyone has a different idea of the perfect weekend, and we often discuss it at dinner. My father thinks the best thing is to relax at home. 'Why don't we just watch a film?' he always says. Although I love films, I don't always agree, because I think weekends are for doing something different.\n\nMy mother, however, is very social. 'Let's invite people over!' she suggests. She loves cooking for friends and family. My little brother, on the other hand, only wants to play football. 'How about going to the park?' he asks every Saturday.\n\nIn the end, we usually find a way to make everyone happy. We might play football in the morning, have friends for lunch, and watch a film in the evening. It isn't always easy, but I think that's what family is about — although we're all different, we do things together.", "Lee el texto y responde (A/B/C).", [
      mc("What does the father like to do at the weekend?", ["Go out.", "Relax at home and watch a film.", "Play football."], 1, "'relax at home… watch a film'."),
      mc("What does the mother love?", ["Watching films.", "Cooking for friends and family.", "Football."], 1, "'She loves cooking for friends'."),
      mc("What does the little brother want?", ["To watch films.", "To play football.", "To read."], 1, "'only wants to play football'."),
      mc("How do they solve the problem?", ["They argue.", "They find a way for everyone.", "They do nothing."], 1, "'find a way to make everyone happy'."),
      mc("What does the writer think family is about?", ["Doing the same thing.", "Being different but doing things together.", "Watching films."], 1, "'although we're all different, we do things together'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "In my family, everyone has a different idea of the perfect weekend. My father says, 'Why (1)___ we just watch a film?' (2)___ I love films, I don't always agree. My mother is social — 'Let's (3)___ people over!' she says. My brother asks, 'How about (4)___ to the park?' In the end, we find a way to make everyone (5)___. Although we're all different, we do things (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["don't", "aren't", "not"], 0, "'Why don't we'."),
      mc("Hueco 2", ["Although", "But", "However"], 0, "'Although I love films'."),
      mc("Hueco 3", ["invite", "inviting", "to invite"], 0, "Let's + base."),
      mc("Hueco 4", ["going", "go", "to go"], 0, "How about + -ing."),
      mc("Hueco 5", ["happy", "sad", "busy"], 0, "'make everyone happy'."),
      mc("Hueco 6", ["together", "apart", "alone"], 0, "'do things together'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Wynn,\nIn my family everyone likes different weekends! My father says, 'Why don't we (1)___ watch a film?' (2)___ I love films, I don't always agree. My mother is social — 'Let's (3)___ people over!' My brother asks, 'How (4)___ going to the park?' In the end, we find a way to make everyone happy. Although we're all different, we do things (5)___. That's what family is (6)___, isn't it?\nLove,\nRee", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["just"], "'just watch a film'."),
      fb("Hueco 2", ["Although"], "'Although I love films'."),
      fb("Hueco 3", ["invite"], "Let's + base."),
      fb("Hueco 4", ["about"], "'How about going'."),
      fb("Hueco 5", ["together"], "'do things together'."),
      fb("Hueco 6", ["about"], "'what family is about'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Tu fin de semana ideal", "Cuéntale a tu amigo/a inglés/a cómo es tu fin de semana ideal. Escríbele un email (25 palabras o más) con:\n· qué te gusta hacer,\n· con quién,\n· propón que hagáis algo juntos pronto.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia no se pone de acuerdo en el plan del finde.\n2) Deciden hacer un poco de cada cosa.\n3) Todos disfrutan de un día genial juntos.\nUsa el PASADO y conectores.", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Nia hablar de qué prefiere hacer cada amigo el fin de semana y empareja cada persona con su plan favorito (A/B/C…).", "This is Part Five. You will hear Nia talking about what her friends like to do at the weekend. Anna prefers going to the cinema, because she loves films. Ben likes playing football in the park with friends. Carla prefers cooking dinner for everyone at her house. David enjoys reading quietly at home. And Emma loves going to festivals and dancing.", [
      mc("Anna", ["the cinema", "football", "cooking"], 0, "'going to the cinema'."),
      mc("Ben", ["football", "cooking", "reading"], 0, "'playing football'."),
      mc("Carla", ["cooking dinner", "the cinema", "festivals"], 0, "'cooking dinner'."),
      mc("David", ["reading at home", "football", "festivals"], 0, "'reading quietly'."),
      mc("Emma", ["festivals and dancing", "cooking", "reading"], 0, "'going to festivals and dancing'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — tu opinión sobre la tele/internet, tu fiesta favorita, cómo quedas con amigos", "opinar, conectar ideas y sugerir", "I think, in my opinion, although, let's, how about"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'. Haz sugerencias.", "Parte 2 del A2 Key: proponer y decidir juntos un plan de fin de semana con el examinador, dando razones", "hacer sugerencias y dar razones", "how about, why don't we, let's, because, I prefer"),

    SUMMARY("Resumen de la Semana 10", [
      "Dominas los conectores, las opiniones, las sugerencias y las question tags.",
      "Tienes el lenguaje funcional que necesita el Speaking del A2 Key.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: REPASO general de toda la gramática + estrategia de examen.",
    ]),
    INFO("Mini-simulacro de la Semana 10", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Ya solo quedan 2 semanas: ¡el examen está cerca!"),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Conectar ideas y opinar",
  description: "Conectores (although/however/also), dar opiniones, hacer sugerencias e invitaciones, y question tags. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
