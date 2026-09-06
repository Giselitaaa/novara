/**
 * B1 Preliminary · Semana 12 (última) — "Cultura, arte y repaso final".
 * Repaso integrado de toda la gramática del B1 (tiempos, condicionales, estilo
 * indirecto, modales, pasiva, relativas) + estrategias de examen, con temas de
 * cultura y arte. Cada día, las 4 destrezas. Cierra con el simulacro final.
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I think, I love, it depends, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, we could, why don't we, I'd rather, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 56 ─────────────────────────
const DAY56 = {
  title: "Día 56 — Repaso de tiempos (narración) · Las tradiciones",
  description: "Repaso integrado de todos los tiempos verbales en la narración. Vocabulario de tradiciones. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Narrar con soltura combinando todos los tiempos.",
    summary: "Repaso de tiempos (narración); tradiciones; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    reviewPrompts: ["¿Past simple vs past continuous vs past perfect?", "¿Present perfect para experiencias?"],
  },
  items: [
    TEXT("🏁 ¡ÚLTIMA semana del B1! Hoy repasamos TODOS los tiempos verbales narrando. Vocabulario: las TRADICIONES y la CULTURA."),
    GRAMMAR("Repaso de tiempos en la narración", `Para contar una historia se combinan:
· PAST SIMPLE: acciones principales, una tras otra: I arrived, opened the door and sat down.
· PAST CONTINUOUS: escena de fondo / acción interrumpida: The sun was shining. I was walking when I saw…
· PAST PERFECT: algo anterior a la historia: When I arrived, the party had already started.
· used to / would: hábitos pasados: We used to visit every summer. Every year, we would light a fire.
Al enlazar con el presente:
· PRESENT PERFECT: experiencia/resultado: I've been to that festival twice.
Conectores narrativos: first, then, after that, suddenly, while, as soon as, in the end, finally.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I was arriving when… (acción puntual) → ✅ I arrived when…\n· ❌ When I came, the film started (a la vez) → ✅ …had already started (antes).\n· ❌ I have seen it yesterday → ✅ I saw it yesterday.\n· 'while' + past continuous; 'as soon as' + past simple."),
    grammarEx("Gramática — Tiempos en la narración", "Completa con el tiempo correcto.", [
      fb("The sun ___ (shine) when we left. (fondo)", ["was shining"], "past continuous."),
      fb("I ___ (walk) home when it started to rain. (acción interrumpida)", ["was walking"], "past continuous."),
      fb("When we arrived, the show ___ already ___ (start). (antes)", ["had", "started"], "past perfect."),
      fb("Every summer, we ___ ___ (visit) our grandparents. (hábito pasado)", ["used to visit", "would visit"], "used to/would."),
      fb("I ___ (never/be) to a carnival before. (experiencia)", ["have never been", "'ve never been"], "present perfect."),
      mc("Choose:", ["As soon as I arrived, I called you.", "As soon as I was arriving, I called you.", "As soon as I had arrive, I called you."], 0, "as soon as + past simple."),
      fb("They ___ (dance) all night at the festival. (acción terminada)", ["danced"], "past simple."),
    ]),
    GRAMMAR("Vocabulario del día — Las tradiciones", "Léxico de tradiciones (B1)."),
    deck("B1 S12D56 — Las tradiciones", [
      ["tradition", "tradición", "It's an old family tradition.", "sustantivo", "trəˈdɪʃn"],
      ["celebrate", "celebrar", "We celebrate it every year.", "verbo", "ˈselɪbreɪt"],
      ["festival", "fiesta / festival", "The town holds a music festival.", "sustantivo", "ˈfestɪvl"],
      ["custom", "costumbre", "It's a local custom.", "sustantivo", "ˈkʌstəm"],
      ["ceremony", "ceremonia", "The ceremony was beautiful.", "sustantivo", "ˈserəməni"],
      ["culture", "cultura", "I love learning about other cultures.", "sustantivo", "ˈkʌltʃə"],
      ["ancestor", "antepasado/a", "This dance comes from our ancestors.", "sustantivo", "ˈænsestə"],
      ["decorate", "decorar / adornar", "We decorate the house.", "verbo", "ˈdekəreɪt"],
      ["gather", "reunirse / juntar", "The whole family gathers.", "verbo", "ˈɡæðə"],
      ["heritage", "patrimonio / herencia cultural", "It's part of our heritage.", "sustantivo", "ˈherɪtɪdʒ"],
    ]),
    vocabEx("Vocabulario — Las tradiciones", "Elige la opción correcta.", [
      mc("Something passed down through generations is a ___.", ["tradition", "ceremony", "culture"], 0, "tradition."),
      mc("A usual way of doing things in a place is a ___.", ["custom", "festival", "ancestor"], 0, "custom."),
      mc("A formal event, e.g. a wedding, is a ___.", ["ceremony", "custom", "heritage"], 0, "ceremony."),
      mc("People from your family long ago are your ___.", ["ancestors", "customs", "cultures"], 0, "ancestors."),
      mc("To come together in a group is to ___.", ["gather", "decorate", "celebrate"], 0, "gather."),
      mc("The traditions and history a group inherits are its ___.", ["heritage", "ceremony", "custom"], 0, "heritage."),
    ]),

    ...readingParts({
      p1: { title: "Tradiciones y avisos", items: [
        mc("Poster: 'Come and celebrate our town's spring festival!'", ["An invitation to a festival.", "No festival.", "It's cancelled."], 0, "'celebrate our town's spring festival'."),
        mc("Note: 'This custom has been passed down for centuries.'", ["A very old tradition.", "A new idea.", "It's forgotten."], 0, "'passed down for centuries'."),
        mc("Sign: 'The ceremony will begin at seven o'clock.'", ["The ceremony starts at 7.", "No ceremony.", "It's over."], 0, "'begin at seven o'clock'."),
        mc("Text: 'Every year, the whole family gathers for the meal.'", ["The family meets yearly.", "They never meet.", "No meal."], 0, "'the whole family gathers'."),
        mc("Notice: 'Help us decorate the hall for the celebration.'", ["Help decorate for the event.", "No decorations.", "It's cancelled."], 0, "'decorate the hall'."),
      ] },
      p2text: "FOUR FESTIVALS AROUND THE WORLD\n\nA) The Lantern Festival — thousands of glowing lanterns are released into the night sky.\nB) The Harvest Fair — a celebration of food and farming, with music, dancing and feasts.\nC) The Day of the Dead — families gather to remember and honour their ancestors with joy.\nD) The Ice Festival — enormous sculptures carved from ice light up a frozen city.",
      p2q: { title: "Emparejar personas y festivales", items: [
        mc("Nadia loves beautiful lights in the night sky.", ["A", "B", "C", "D"], 0, "The Lantern Festival."),
        mc("Ben enjoys food, music and country traditions.", ["A", "B", "C", "D"], 1, "The Harvest Fair."),
        mc("Sara wants to celebrate and remember her ancestors.", ["A", "B", "C", "D"], 2, "The Day of the Dead."),
        mc("Leo is amazed by art made from ice.", ["A", "B", "C", "D"], 3, "The Ice Festival."),
        mc("A festival that celebrates food and farming.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "WHY TRADITIONS MATTER\n\nIn our fast-moving modern world, traditions can seem old-fashioned, even pointless. Why do we keep repeating the same customs year after year, doing things simply because our ancestors did them? Some people argue that we should let go of the past and live only in the present. But I believe that traditions, far from being useless, are one of the things that give our lives meaning.\n\nWhen I was a child, my family had a simple tradition. Every year, on the last evening of summer, we would walk to the top of a nearby hill to watch the sunset together. At the time, I didn't think much about it; it was just something we always did. But now, years later, that memory is one of the most precious things I own. My grandparents, who used to make that walk with us, are no longer alive. Yet every time I climb that hill, I feel connected to them, and to the child I once was. The tradition is a golden thread linking the different stages of my life, and different generations of my family, together.\n\nThat, I think, is the real value of traditions. They are not about the past for its own sake. They are about belonging. In a world where so much is uncertain and constantly changing, traditions remind us who we are and where we come from. They gather families and communities together, mark the passing of the seasons, and give us a comforting sense of continuity. Of course, we shouldn't keep a tradition that has become cruel or harmful. But a good tradition is a gift passed down through time. My advice is to treasure the ones you have, and perhaps to start some new ones of your own.",
      p3q: { title: "Por qué importan las tradiciones (texto largo)", items: [
        mc("What do some people argue about the past?", ["Keep every tradition.", "We should let go of it and live in the present.", "It's precious."], 1, "'let go of the past and live only in the present'."),
        mc("What did the writer's family do every year?", ["Travel abroad.", "Walk up a hill to watch the sunset.", "Have a big party."], 1, "'walk to the top of a nearby hill to watch the sunset'."),
        mc("How does the writer feel climbing the hill now?", ["Bored.", "Connected to grandparents and their childhood.", "Sad only."], 1, "'connected to them, and to the child I once was'."),
        mc("What is the real value of traditions, according to the writer?", ["The past itself.", "Belonging.", "Money."], 1, "'They are about belonging'."),
        mc("When shouldn't we keep a tradition?", ["Never keep any.", "If it has become cruel or harmful.", "Always keep them."], 1, "'a tradition that has become cruel or harmful'."),
      ] },
      p4text: "THE TRADITION WE ALMOST LOST\n\nFor as long as anyone could remember, my family had gathered at my grandmother's house every New Year. (1)___ She would cook for two days, and the whole family, from great-grandparents to tiny babies, would squeeze into her small, warm kitchen.\n\nWhen my grandmother passed away, we were heartbroken, and for a couple of years, the tradition simply stopped. (2)___ Everyone was too busy, or lived too far away, or found the memories too painful. Our family, once so close, began to drift apart. (3)___ We saw each other less and less, until we were almost strangers.\n\nThen, one autumn, my youngest cousin sent a message to us all. (4)___ She suggested that we start the New Year gathering again, this time at her house, in honour of our grandmother. At first, some people were unsure. But when the day came, and we were all crowded once more into a warm kitchen full of food and laughter, it felt as though something broken had been mended. (5)___ Now, we gather every year without fail. We didn't just save a tradition; we saved our family.",
      p4options: [
        "It was the most important day of our year.",              // A -> gap 1
        "Slowly, something precious began to disappear.",           // B -> gap 2
        "The distance between us grew with every month.",           // C -> gap 3
        "Her idea was beautifully simple.",                         // D -> gap 4
        "We decided never to see each other again.",               // E (extra)
        "That New Year brought us all back together.",             // F -> gap 5
        "Nobody in our family had ever celebrated anything.",       // G (extra)
        "My grandmother had hated New Year.",                       // H (extra)
      ],
      p4q: { title: "La tradición que casi perdimos (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: el día más importante del año."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: algo valioso desaparecía."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: la distancia crecía."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: su idea era muy sencilla."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese Año Nuevo los unió de nuevo."),
      ] },
      p5text: "Traditions connect us to our past. When I was young, my family (1)___ to gather every year to (2)___ a special festival. My grandmother (3)___ cook for days, and the whole family would (4)___ at her house. Those (5)___, passed down from our ancestors, are part of our (6)___. I've never forgotten them, and one day I hope to pass them on to my own children.",
      p5q: { title: "Huecos con opciones (tiempos/vocabulario)", items: [
        mc("Hueco 1", ["used", "use", "uses", "using"], 0, "'used to gather'."),
        mc("Hueco 2", ["celebrate", "decorate", "gather", "custom"], 0, "'celebrate a festival'."),
        mc("Hueco 3", ["would", "used", "was", "did"], 0, "'would cook for days' (hábito)."),
        mc("Hueco 4", ["gather", "celebrate", "decorate", "gathering"], 0, "'gather at her house'."),
        mc("Hueco 5", ["customs", "ceremonies", "cultures", "ancestors"], 0, "'those customs'."),
        mc("Hueco 6", ["heritage", "tradition", "ancestor", "ceremony"], 0, "'part of our heritage'."),
      ] },
      p6text: "Hi Sam,\nI want to tell you about a family tradition. When I (1)___ young, we (2)___ to gather at my grandmother's every New Year. She (3)___ cook for two days, and the whole family (4)___ squeeze into her kitchen. After she passed away, the tradition stopped, and our family drifted apart. But last year, my cousin suggested we start it again. When the day (5)___, and we were all together again, it felt as if something broken (6)___ been mended. Now we never miss it. Do you have any special family traditions?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["was"], "'When I was young'."),
        fb("Hueco 2", ["used"], "'we used to gather'."),
        fb("Hueco 3", ["would", "used"], "'She would cook for two days'."),
        fb("Hueco 4", ["would"], "'the whole family would squeeze'."),
        fb("Hueco 5", ["came", "arrived"], "'When the day came'."),
        fb("Hueco 6", ["had"], "'something broken had been mended' (past perfect)."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por una tradición o fiesta de tu país. Responde a su email (~100 palabras):\n· describe la tradición y cómo se celebra,\n· cuenta un recuerdo especial (usa varios tiempos),\n· pregúntale por una fiesta de su país.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Are traditions still important today?' con tu opinión.\n· RELATO: empieza con: 'Every year, on the last evening of summer, we would climb the hill together.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: What were you doing when I called? Man: I was decorating the hall for the festival. Two. Man: Have you ever been to the carnival? Woman: Yes, twice — it's amazing. Three. Woman: When does the ceremony start? Man: At seven, so we'd better hurry. Four. Man: Why does your family gather every year? Woman: It's an old tradition from my grandparents. Five. Man: Had the parade started when you arrived? Woman: Yes, we'd missed the beginning. Six. Woman: What did you use to do as a child? Man: We would visit my grandmother every summer. Seven. Man: Is this custom common here? Woman: Yes, it's part of our heritage.", [
      mc("1. What was the man doing?", ["Cooking.", "Decorating the hall.", "Sleeping."], 1, "'decorating the hall for the festival'."),
      mc("2. Has the woman been to the carnival?", ["Never.", "Yes, twice.", "Once."], 1, "'Yes, twice'."),
      mc("3. When does the ceremony start?", ["Six.", "Seven.", "Eight."], 1, "'At seven'."),
      mc("4. Why does the family gather?", ["No reason.", "It's an old tradition.", "For money."], 1, "'an old tradition from my grandparents'."),
      mc("5. Had the parade started when she arrived?", ["No.", "Yes, they'd missed the beginning.", "It was cancelled."], 1, "'we'd missed the beginning'."),
      mc("6. What did the man used to do as a child?", ["Nothing.", "Visit his grandmother every summer.", "Travel abroad."], 1, "'visit my grandmother every summer'."),
      mc("7. Is the custom common?", ["No.", "Yes, part of their heritage.", "It's forbidden."], 1, "'part of our heritage'."),
    ]),

    ...speakingParts("las tradiciones y la cultura", { p1: "qué tradiciones o fiestas se celebran en tu familia o país y cuál es tu favorita", p2: "una foto de una fiesta, ceremonia o celebración cultural", p3: "qué tradición nueva empezar juntos como grupo o clase", p4: "las tradiciones, si siguen siendo importantes y qué nos aportan las fiestas" }),

    SUMMARY("Resumen del Día 56", [
      "Narración: past simple (acciones), past continuous (fondo), past perfect (antes), used to/would (hábitos), present perfect (experiencia).",
      "Conectores: first, then, suddenly, while, as soon as, in the end.",
      "Vocabulario de tradiciones. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 57", "Escribe una historia corta con 4 tiempos distintos. Repasa las flashcards. Mañana: repaso de condicionales, wish y estilo indirecto."),
  ],
};

// ───────────────────────── DÍA 57 ─────────────────────────
const DAY57 = {
  title: "Día 57 — Repaso: condicionales, wish y estilo indirecto · El arte",
  description: "Repaso integrado de los condicionales, wish/if only y el estilo indirecto. Vocabulario de arte. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Combinar condicionales, deseos y estilo indirecto con soltura.",
    summary: "Repaso condicionales/wish/reported; el arte; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    reviewPrompts: ["¿2º vs 3er condicional?", "¿wish + pasado vs wish + past perfect?"],
  },
  items: [
    TEXT("🏁 Penúltimo repaso. Hoy: CONDICIONALES, WISH y ESTILO INDIRECTO juntos. Vocabulario: el ARTE."),
    GRAMMAR("Repaso: condicionales, wish y estilo indirecto", `CONDICIONALES:
· 0: If you heat ice, it melts. · 1º: If it rains, I'll stay in. · 2º: If I had money, I'd travel. · 3º: If I had studied, I would have passed.
WISH / IF ONLY:
· + pasado = deseo presente: I wish I had more time. · + past perfect = arrepentimiento: I wish I had studied.
ESTILO INDIRECTO:
· Afirmaciones (backshift): "I'm tired" → She said she was tired. · Preguntas: "Where do you live?" → He asked where I lived. · Órdenes: "Sit down" → She told me to sit down.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If I would have money → ✅ If I had money.\n· ❌ I wish I have more time → ✅ I wish I had more time.\n· ❌ He said me → ✅ He told me / He said (to me).\n· ❌ He asked where do I live → ✅ where I lived."),
    grammarEx("Gramática — Repaso condicionales/wish/reported", "Completa o elige.", [
      fb("If it ___ (rain) tomorrow, I'll stay in. (1º cond.)", ["rains"], "1º: if + presente."),
      fb("If I ___ (have) more money, I'd travel. (2º cond.)", ["had"], "2º: if + pasado."),
      fb("If I ___ (study) harder, I would have passed. (3º cond.)", ["had studied"], "3º: if + past perfect."),
      fb("I wish I ___ (have) more free time. (deseo presente)", ["had"], "wish + pasado."),
      fb("I wish I ___ (not/say) that. (arrepentimiento)", ["hadn't said"], "wish + past perfect."),
      mc("Choose:", ["He said me he was busy.", "He told me he was busy.", "He told he was busy."], 1, "tell + objeto."),
      fb("\"Where do you live?\" → She asked where I ___.", ["lived"], "pregunta indirecta."),
    ]),
    GRAMMAR("Vocabulario del día — El arte", "Léxico de arte (B1)."),
    deck("B1 S12D57 — El arte", [
      ["painting", "cuadro / pintura", "That painting is beautiful.", "sustantivo", "ˈpeɪntɪŋ"],
      ["artist", "artista", "She's a talented artist.", "sustantivo", "ˈɑːtɪst"],
      ["exhibition", "exposición", "There's a new art exhibition.", "sustantivo", "ˌeksɪˈbɪʃn"],
      ["gallery", "galería", "We visited the art gallery.", "sustantivo", "ˈɡæləri"],
      ["masterpiece", "obra maestra", "It's considered a masterpiece.", "sustantivo", "ˈmɑːstəpiːs"],
      ["creative", "creativo/a", "He's a very creative person.", "adjetivo", "kriˈeɪtɪv"],
      ["sculpture", "escultura", "The sculpture is made of stone.", "sustantivo", "ˈskʌlptʃə"],
      ["style", "estilo", "I love her unique style.", "sustantivo", "staɪl"],
      ["inspire", "inspirar", "The sea inspires many artists.", "verbo", "ɪnˈspaɪə"],
      ["talent", "talento", "She has real talent.", "sustantivo", "ˈtælənt"],
    ]),
    vocabEx("Vocabulario — El arte", "Elige la opción correcta.", [
      mc("A place where art is shown to the public is a ___.", ["gallery", "artist", "style"], 0, "gallery."),
      mc("An event showing many artworks is an ___.", ["exhibition", "artist", "talent"], 0, "exhibition."),
      mc("An extremely good work of art is a ___.", ["masterpiece", "sculpture", "gallery"], 0, "masterpiece."),
      mc("A three-dimensional work, e.g. in stone, is a ___.", ["sculpture", "painting", "style"], 0, "sculpture."),
      mc("To give someone ideas or motivation is to ___ them.", ["inspire", "exhibit", "sculpt"], 0, "inspire."),
      mc("A person who creates art is an ___.", ["artist", "gallery", "exhibition"], 0, "artist."),
    ]),

    ...readingParts({
      p1: { title: "Arte y avisos", items: [
        mc("Sign: 'New exhibition — free entry this weekend.'", ["Free art show this weekend.", "Paid entry.", "It's closed."], 0, "'free entry this weekend'."),
        mc("Note: 'Please do not touch the sculptures.'", ["Don't touch the artworks.", "Touch them.", "No sculptures."], 0, "'do not touch the sculptures'."),
        mc("Text: 'This painting is considered a masterpiece.'", ["It's a great work of art.", "It's poor.", "It's fake."], 0, "'considered a masterpiece'."),
        mc("Poster: 'Art classes for all — no talent needed!'", ["Anyone can join the classes.", "Experts only.", "No classes."], 0, "'for all — no talent needed'."),
        mc("Caption: 'The sea inspired this artist's work.'", ["The sea gave her ideas.", "She hates the sea.", "No sea."], 0, "'The sea inspired this artist's work'."),
      ] },
      p2text: "FOUR CREATIVE HOBBIES\n\nA) Painting Class — express yourself with colour; no experience or talent required.\nB) Pottery Studio — shape clay with your hands into bowls, cups and sculptures.\nC) Photography Walk — learn to see the world differently through a camera lens.\nD) Life Drawing — a relaxed group where you learn to draw the human figure.",
      p2q: { title: "Emparejar personas y hobbies", items: [
        mc("Nadia loves colour and wants to try painting.", ["A", "B", "C", "D"], 0, "Painting Class."),
        mc("Ben likes working with his hands and making objects.", ["A", "B", "C", "D"], 1, "Pottery Studio."),
        mc("Sara wants to improve her photography.", ["A", "B", "C", "D"], 2, "Photography Walk."),
        mc("Leo wants to learn to draw people.", ["A", "B", "C", "D"], 3, "Life Drawing."),
        mc("A hobby using a camera.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "IS EVERYONE AN ARTIST?\n\n'I'm just not creative.' How many times have you heard someone say that, or perhaps said it yourself? Most people firmly believe that creativity is a rare gift, something you are either born with or not. Artists, in this view, are special people, quite different from the rest of us. But I have come to believe that this idea is not only wrong, it is also harmful.\n\nThink about young children. Give a group of five-year-olds some paint, and they will all create something without a moment's hesitation. They sing, they dance, they invent wild stories. Not one of them worries about whether they are 'talented' or whether their work is any good. Creativity, in other words, seems to be a natural part of being human. So what happens to it? Sadly, as we grow up, many of us are told, directly or indirectly, that we aren't good enough. A careless comment from a teacher, a laugh from a classmate, and slowly we decide that creativity is 'not for us'. We stop trying, and the skill, like any unused muscle, grows weak.\n\nThe good news is that it is never too late to start again. Being creative doesn't mean painting a masterpiece or writing a great novel. It simply means making something, anything, and enjoying the process. If you wish you were more creative, my advice is to stop waiting to feel talented and simply begin. Cook a new dish, plant a garden, take a photograph, write a song for no one but yourself. Don't worry about whether it's 'good'. The joy and the value are in the making. Everyone, I firmly believe, has an artist inside them. All you have to do is let it out.",
      p3q: { title: "¿Todos somos artistas? (texto largo)", items: [
        mc("What do most people believe about creativity?", ["Everyone has it.", "It's a rare gift you're born with.", "It's learned at school."], 1, "'a rare gift, something you are either born with or not'."),
        mc("What do five-year-olds do with paint?", ["Refuse.", "Create without hesitation.", "Worry about talent."], 1, "'create something without a moment's hesitation'."),
        mc("What happens to creativity as we grow up?", ["It grows.", "We're told we aren't good enough and stop trying.", "Nothing."], 1, "'told… we aren't good enough… We stop trying'."),
        mc("What does being creative simply mean?", ["Painting a masterpiece.", "Making something and enjoying the process.", "Being famous."], 1, "'making something, anything, and enjoying the process'."),
        mc("What is the writer's advice?", ["Wait to feel talented.", "Stop waiting and simply begin.", "Give up."], 1, "'stop waiting to feel talented and simply begin'."),
      ] },
      p4text: "THE PAINTING I ALMOST THREW AWAY\n\nAfter years of telling myself I wasn't creative, I finally signed up for a painting class. (1)___ On the first day, surrounded by people who seemed far more talented than me, I nearly walked out.\n\nMy first painting was, honestly, terrible. (2)___ The colours were muddy, the shapes were wrong, and it looked nothing like the beautiful scene I had imagined. I felt so embarrassed that I decided to throw it away. If the teacher hadn't stopped me, I would have put it straight in the bin. (3)___ 'Don't judge it yet,' she said gently. 'And don't compare yourself to others. Just keep going.'\n\nSo I did. I kept coming back, week after week, and slowly, something changed. (4)___ I stopped worrying about the result and started to enjoy the simple pleasure of mixing colours and losing myself in the work. I'm still not a great painter, and I probably never will be. (5)___ But I've discovered a source of joy that I had denied myself for years, all because I once believed I 'wasn't creative'.",
      p4options: [
        "It had taken all my courage to go.",                       // A -> gap 1
        "Nothing about it looked the way I'd hoped.",              // B -> gap 2
        "Her words stopped me just in time.",                       // C -> gap 3
        "I began to relax and simply enjoy myself.",                // D -> gap 4
        "I became a world-famous artist overnight.",               // E (extra)
        "And honestly, it doesn't matter at all.",                 // F -> gap 5
        "I had always been extremely talented at art.",            // G (extra)
        "The class was cancelled after the first day.",            // H (extra)
      ],
      p4q: { title: "El cuadro que casi tiro (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: le costó todo el valor ir."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: nada era como esperaba."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: sus palabras le pararon a tiempo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: empezó a relajarse y disfrutar."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: y no importa en absoluto."),
      ] },
      p5text: "Many people wish they (1)___ more creative, but they never try. They think that if they (2)___ born with talent, they would be artists — but that's not true. If you (3)___ a painting class tomorrow, you might surprise yourself! A good teacher once told me that if I (4)___ compared myself to others, I would enjoy it more. She was right. I wish I (5)___ started years earlier. Being (6)___ isn't about being the best; it's about enjoying the process.",
      p5q: { title: "Huecos con opciones (condicionales/wish)", items: [
        mc("Hueco 1", ["were", "are", "would be", "had been"], 0, "'wish they were more creative'."),
        mc("Hueco 2", ["had been", "were", "are", "would be"], 0, "'if they had been born with talent' (3er cond.)."),
        mc("Hueco 3", ["took", "take", "had taken", "will take"], 0, "'if you took a class tomorrow' (2º cond.)."),
        mc("Hueco 4", ["didn't", "don't", "hadn't", "won't"], 0, "'if I didn't compare myself' (2º cond.)."),
        mc("Hueco 5", ["had", "have", "would have", "did"], 0, "'I wish I had started years earlier'."),
        mc("Hueco 6", ["creative", "creativity", "creatively", "creation"], 0, "adjetivo → creative."),
      ] },
      p6text: "Hi Sam,\nI finally tried a painting class, and I love it! For years I wished I (1)___ more creative, but I never tried because I thought that if you (2)___ born with talent, you couldn't learn. How wrong I was! My first painting was terrible, and if the teacher (3)___ stopped me, I would have thrown it away. She told me (4)___ to compare myself to others. Now I just enjoy it. I only wish I (5)___ started years ago! Being creative isn't about being the best. Why don't you (6)___ something creative too?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["were", "was"], "'I wished I were more creative'."),
        fb("Hueco 2", ["weren't", "were"], "'if you weren't born with talent' → o 'were'."),
        fb("Hueco 3", ["hadn't"], "'if the teacher hadn't stopped me' (3er cond.)."),
        fb("Hueco 4", ["not"], "'told me not to compare myself'."),
        fb("Hueco 5", ["had"], "'I wish I had started years ago'."),
        fb("Hueco 6", ["try"], "'why don't you try something creative'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a cree que no es nada creativo/a. Responde a su email (~100 palabras):\n· anímale a probar algo creativo,\n· cuenta una vez que tú creaste algo (usa condicionales/wish),\n· dile qué te gustaría aprender a hacer.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Can anyone learn to be creative?' con tu opinión.\n· RELATO: empieza con: 'If the teacher hadn't stopped me, I would have thrown it away.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Do you like this painting? Man: Yes, it's a real masterpiece. Two. Man: Would you paint if you had time? Woman: Definitely, I love it. Three. Woman: Do you wish you'd studied art? Man: Yes, I wish I had. Four. Man: What did the teacher say? Woman: She told me not to give up. Five. Man: Is the exhibition free? Woman: Yes, entry is free this weekend. Six. Woman: What inspires you? Man: Nature inspires most of my work.", [
      mc("1. What does the man think of the painting?", ["It's poor.", "It's a real masterpiece.", "It's fake."], 1, "'it's a real masterpiece'."),
      mc("2. Would the woman paint if she had time?", ["No.", "Definitely, she loves it.", "Maybe."], 1, "'Definitely, I love it'."),
      mc("3. Does the man wish he'd studied art?", ["No.", "Yes, he wishes he had.", "He did study it."], 1, "'Yes, I wish I had'."),
      mc("4. What did the teacher say?", ["To stop.", "Not to give up.", "To leave."], 1, "'told me not to give up'."),
      mc("5. Is the exhibition free?", ["No.", "Yes, this weekend.", "Only for members."], 1, "'entry is free this weekend'."),
      mc("6. What inspires the man?", ["The city.", "Nature.", "Nothing."], 1, "'Nature inspires most of my work'."),
    ]),

    ...speakingParts("el arte y la creatividad", { p1: "si te consideras creativo/a, qué arte te gusta y si haces algo artístico", p2: "una foto de arte o de alguien creando (pintando, esculpiendo, en una galería)", p3: "qué actividad creativa organizar para la clase o un grupo de amigos", p4: "el arte, si todos podemos ser creativos y para qué sirve el arte" }),

    SUMMARY("Resumen del Día 57", [
      "Condicionales (0/1º/2º/3º), wish/if only (+ pasado / + past perfect), estilo indirecto (afirmaciones, preguntas, órdenes).",
      "Vocabulario de arte. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 58", "Escribe 3 condicionales y 2 frases con wish. Repasa las flashcards. Mañana: repaso de modales, pasiva y relativas."),
  ],
};

// ───────────────────────── DÍA 58 ─────────────────────────
const DAY58 = {
  title: "Día 58 — Repaso: modales, pasiva y relativas · El cine y la música",
  description: "Repaso integrado de modales, voz pasiva y oraciones de relativo. Vocabulario de cine y música. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Combinar modales, pasiva y relativas con precisión.",
    summary: "Repaso modales/pasiva/relativas; cine/música; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    reviewPrompts: ["¿Deducción con must/can't?", "¿Pasiva en present perfect?"],
  },
  items: [
    TEXT("🏁 Último repaso de gramática. Hoy: MODALES, PASIVA y RELATIVAS. Vocabulario: el CINE y la MÚSICA."),
    GRAMMAR("Repaso: modales, pasiva y relativas", `MODALES: obligación (must/have to), consejo (should), prohibición (mustn't), deducción (must be/can't be/might be; must have been), habilidad (can/could).
PASIVA: BE + participio. Presente (is made), pasado (was built), present perfect (has been done), futuro (will be built), modal (must be recycled).
RELATIVAS: who/which/that/where/whose; reducidas (the man sitting…, the film made…).`),
    WARN("Errores típicos del hispanohablante", "· ❌ must to go → ✅ must go.\n· ❌ It's make of wood → ✅ It's made of wood.\n· ❌ the man which → ✅ who.\n· Deducción imposible: can't be (no 'mustn't be')."),
    grammarEx("Gramática — Repaso modales/pasiva/relativas", "Completa o elige.", [
      mc("Choose (deduction):", ["It mustn't be true.", "It can't be true.", "It don't can be true."], 1, "imposible → can't be."),
      fb("Chocolate ___ (make) from cacao. (pasiva presente)", ["is made"], "is + participio."),
      fb("The film ___ (direct) by a famous director. (pasiva pasado)", ["was directed"], "was + participio."),
      fb("The song ___ (already/download) millions of times. (present perfect pasiva)", ["has already been downloaded"], "has been + participio."),
      fb("That's the actor ___ won an award. (persona)", ["who", "that"], "who/that."),
      fb("Reduce: 'the song which was written by her' → 'the song ___ by her'.", ["written"], "reduced relative."),
      mc("Choose:", ["You must to buy a ticket.", "You must buy a ticket.", "You must buying a ticket."], 1, "must + inf sin to."),
    ]),
    GRAMMAR("Vocabulario del día — Cine y música", "Léxico de cine y música (B1)."),
    deck("B1 S12D58 — Cine y música", [
      ["actor", "actor / actriz", "She's a brilliant actor.", "sustantivo", "ˈæktə"],
      ["director", "director/a", "The director won an award.", "sustantivo", "dəˈrektə"],
      ["plot", "argumento / trama", "The plot was very exciting.", "sustantivo", "plɒt"],
      ["scene", "escena", "My favourite scene is the ending.", "sustantivo", "siːn"],
      ["soundtrack", "banda sonora", "The soundtrack is amazing.", "sustantivo", "ˈsaʊndtræk"],
      ["audience", "público", "The audience loved it.", "sustantivo", "ˈɔːdiəns"],
      ["release", "estrenar / lanzar", "The film was released last week.", "verbo", "rɪˈliːs"],
      ["perform", "actuar / interpretar", "The band performed live.", "verbo", "pəˈfɔːm"],
      ["lyrics", "letra (de canción)", "I love the lyrics of this song.", "sustantivo", "ˈlɪrɪks"],
      ["catchy", "pegadizo/a", "It's such a catchy tune.", "adjetivo", "ˈkætʃi"],
    ]),
    vocabEx("Vocabulario — Cine y música", "Elige la opción correcta.", [
      mc("The story of a film is the ___.", ["plot", "scene", "audience"], 0, "plot."),
      mc("The person who makes a film is the ___.", ["director", "actor", "audience"], 0, "director."),
      mc("The music of a film is the ___.", ["soundtrack", "lyrics", "plot"], 0, "soundtrack."),
      mc("The people watching a film or show are the ___.", ["audience", "director", "actor"], 0, "audience."),
      mc("The words of a song are the ___.", ["lyrics", "soundtrack", "plot"], 0, "lyrics."),
      mc("A song that's easy to remember is ___.", ["catchy", "released", "performed"], 0, "catchy."),
    ]),

    ...readingParts({
      p1: { title: "Cine/música y avisos", items: [
        mc("Sign: 'The new film is being released this Friday.'", ["It comes out Friday.", "It's old.", "No film."], 0, "'released this Friday'."),
        mc("Note: 'Phones must be switched off during the show.'", ["Turn off phones.", "Phones fine.", "No show."], 0, "'must be switched off'."),
        mc("Text: 'The band that we saw last night was amazing.'", ["They praised a band.", "They disliked it.", "No band."], 0, "'The band that we saw… was amazing'."),
        mc("Poster: 'Live music performed every Saturday.'", ["Live music on Saturdays.", "No music.", "Only recordings."], 0, "'Live music performed every Saturday'."),
        mc("Review: 'The soundtrack, written by a young composer, is beautiful.'", ["The music is lovely.", "The music is bad.", "No music."], 0, "'The soundtrack… is beautiful'."),
      ] },
      p2text: "FOUR FILM NIGHTS\n\nA) Action Heroes — fast, exciting films full of adventure and amazing special effects.\nB) Classic Cinema — famous old films that are considered masterpieces of their time.\nC) Documentary Club — true stories about nature, history and the real world.\nD) Comedy Night — light-hearted films guaranteed to make the whole audience laugh.",
      p2q: { title: "Emparejar personas y sesiones", items: [
        mc("Nadia loves adventure and special effects.", ["A", "B", "C", "D"], 0, "Action Heroes."),
        mc("Ben appreciates famous old films.", ["A", "B", "C", "D"], 1, "Classic Cinema."),
        mc("Sara prefers true stories about the real world.", ["A", "B", "C", "D"], 2, "Documentary Club."),
        mc("Leo just wants to laugh.", ["A", "B", "C", "D"], 3, "Comedy Night."),
        mc("A night showing true stories about nature and history.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "WHY WE LOVE A GOOD STORY\n\nWhether it's a film watched in a dark cinema, a song heard on the radio or a book read late at night, human beings have always been drawn to stories. Every culture that has ever existed has told them, from the ancient myths shared around fires to the latest films streamed on our phones. This raises a fascinating question: why do stories matter so much to us?\n\nOne answer is that stories are how we make sense of the world. Life, in reality, is often confusing and random, but a good story has a shape: a beginning, a middle and an end, with events that are connected by cause and effect. When we follow a character through their struggles, we are, in a way, practising for our own lives. A film about someone who is brave in the face of fear can teach us courage; a song about heartbreak can help us feel less alone in our own sadness. Stories let us live a thousand lives beyond our own, and to understand people whose experiences are completely different from ours.\n\nPerhaps the deepest reason, though, is connection. When we are moved by the same film or sing along to the same song, we are reminded that our feelings are shared. An audience laughing together, or a crowd singing the same lyrics at a concert, becomes, for a moment, a single thing. In a world that can feel lonely and divided, stories bring us together. They remind us that, however different we may seem, we all love, fear, hope and dream in much the same way. That, in the end, may be the greatest gift that art gives us.",
      p3q: { title: "Por qué nos gustan las buenas historias (texto largo)", items: [
        mc("What have all human cultures done?", ["Avoided stories.", "Told stories.", "Only sung."], 1, "'Every culture… has told them'."),
        mc("What is one reason stories matter?", ["They confuse us.", "They help us make sense of the world.", "They waste time."], 1, "'stories are how we make sense of the world'."),
        mc("What can a story about courage teach us?", ["Nothing.", "To be brave.", "To be afraid."], 1, "'can teach us courage'."),
        mc("What is perhaps the deepest reason we love stories?", ["Money.", "Connection.", "Boredom."], 1, "'the deepest reason… is connection'."),
        mc("What do stories remind us, according to the writer?", ["That we're all different.", "That we love, fear and hope in much the same way.", "That art is useless."], 1, "'we all love, fear, hope and dream in much the same way'."),
      ] },
      p4text: "THE SONG THAT BROUGHT US TOGETHER\n\nLast summer, I went to my first big music concert with a group of friends. (1)___ Tens of thousands of strangers had gathered in a huge open field to see a band we all loved.\n\nAs we waited for the music to start, I felt strangely nervous among such an enormous crowd. (2)___ I didn't know a single one of the people pressed in around me, and for a moment I felt very small and alone. Then the band walked on stage, and everything changed. (3)___ From the very first song, the whole field was singing as one.\n\nWhen the band played their most famous song, something magical happened. (4)___ Thousands of voices, including mine, sang every word of the lyrics together. Strangers were smiling at each other, arms in the air, completely united by the music. In that moment, I no longer felt alone at all. (5)___ I finally understood why people love live music so much. It isn't just about the songs. It's about the feeling of belonging to something bigger than yourself.",
      p4options: [
        "It was the biggest event I had ever attended.",           // A -> gap 1
        "Everyone around me was a complete stranger.",             // B -> gap 2
        "A huge cheer rose from the crowd.",                        // C -> gap 3
        "The whole audience seemed to become one voice.",           // D -> gap 4
        "I decided to leave the concert immediately.",             // E (extra)
        "That single moment is one I will treasure forever.",       // F -> gap 5
        "I had never listened to any music before.",               // G (extra)
        "The concert was cancelled before the band played.",       // H (extra)
      ],
      p4q: { title: "La canción que nos unió (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: el evento más grande al que había ido."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: todos eran desconocidos."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: un gran grito del público."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: el público se hizo una sola voz."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: un momento que atesorará siempre."),
      ] },
      p5text: "A good film needs more than famous actors. It (1)___ have a strong plot, and it (2)___ be well directed. The best films are (3)___ remembered for years, even decades. Music matters too: a great (4)___ can make a film unforgettable. The song (5)___ we hear at the end often stays in our heads because it's so (6)___. Whether it's a film or a concert, a good story shared with others brings people together.",
      p5q: { title: "Huecos con opciones (modales/pasiva/vocabulario)", items: [
        mc("Hueco 1", ["must", "mustn't", "can't", "needn't"], 0, "'must have a strong plot'."),
        mc("Hueco 2", ["must", "mustn't", "can't", "doesn't"], 0, "'must be well directed'."),
        mc("Hueco 3", ["still", "yet", "already", "ever"], 0, "'still remembered for years'."),
        mc("Hueco 4", ["soundtrack", "audience", "director", "scene"], 0, "'a great soundtrack'."),
        mc("Hueco 5", ["that", "who", "where", "whose"], 0, "'the song that we hear'."),
        mc("Hueco 6", ["catchy", "released", "performed", "directed"], 0, "'so catchy'."),
      ] },
      p6text: "Hi Sam,\nI went to my first big concert last weekend and it was incredible! The band, (1)___ we all love, performed for two hours. When they played their most famous song, thousands of us sang the (2)___ together — it was so (3)___ that I still can't get it out of my head! I felt completely united with people (4)___ I'd never met. I finally understand why live music (5)___ be experienced, not just heard. If you (6)___ ever get the chance to go to a concert, take it! It's magical.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["who", "that", "which"], "'The band, which/that we all love'."),
        fb("Hueco 2", ["lyrics"], "'sang the lyrics together'."),
        fb("Hueco 3", ["catchy"], "'so catchy that'."),
        fb("Hueco 4", ["who", "that"], "'people who I'd never met'."),
        fb("Hueco 5", ["must", "should"], "'live music must be experienced'."),
        fb("Hueco 6", ["ever", "should"], "'if you ever get the chance'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por una película o concierto al que fuiste. Responde a su email (~100 palabras):\n· cuenta qué viste y qué te pareció,\n· describe una escena o canción favorita,\n· pregúntale por su película o grupo favorito.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it better to watch a film at the cinema or at home?' con tu opinión.\n· RELATO: empieza con: 'The band walked on stage, and thousands of us began to sing.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre un festival de cine y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear information about a film festival. Welcome to the City Film Festival. This year, the festival lasts five days, from Wednesday to Sunday. More than fifty films will be shown, including many that have never been released before. Tickets cost eight euros per film, or thirty euros for a full pass. All films are shown in the main cinema on King Street. There will also be a chance to meet a famous director on Saturday evening. Please arrive early, as popular films sell out quickly.", [
      fb("The festival lasts ___ days.", ["five", "5"], "'lasts five days'."),
      fb("More than ___ films will be shown.", ["fifty", "50"], "'More than fifty films'."),
      fb("Tickets cost ___ euros per film.", ["eight", "8"], "'eight euros per film'."),
      fb("All films are shown in the cinema on ___ Street.", ["King"], "'the main cinema on King Street'."),
      fb("You can meet a famous director on ___ evening.", ["Saturday"], "'meet a famous director on Saturday evening'."),
    ]),

    ...speakingParts("el cine y la música", { p1: "qué tipo de cine y música te gusta, y tu película o canción favorita", p2: "una foto de un concierto, un cine o gente viendo una película", p3: "elegir juntos una película o un concierto para ir el fin de semana", p4: "el cine y la música, cómo nos hacen sentir y por qué nos gustan las historias" }),

    SUMMARY("Resumen del Día 58", [
      "Modales (obligación, consejo, prohibición, deducción), pasiva (todos los tiempos), relativas (incl. reducidas).",
      "Vocabulario de cine y música. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 59", "Escribe 2 frases pasivas, 2 con modales y 2 con relativas. Repasa las flashcards. Mañana: estrategias de examen para las 4 destrezas."),
  ],
};

// ───────────────────────── DÍA 59 ─────────────────────────
const DAY59 = {
  title: "Día 59 — Estrategias de examen (4 destrezas) · Las celebraciones",
  description: "Consejos y estrategias para el Reading, Writing, Listening y Speaking del B1. Vocabulario de celebraciones. Práctica de las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Aplicar estrategias concretas para cada parte del examen.",
    summary: "Estrategias de examen; celebraciones; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    reviewPrompts: ["¿Qué haces primero en el Reading P3?", "¿Cómo estructuras el Writing P2?"],
  },
  items: [
    TEXT("🏁 ¡Penúltimo día! Hoy, ESTRATEGIAS para cada parte del examen. Vocabulario: las CELEBRACIONES."),
    GRAMMAR("Estrategias para las 4 destrezas del B1", `READING (45 min): reparte el tiempo (~7 min/parte). En P1 lee todo el aviso. En P2 subraya lo que busca cada persona. En P3 lee las preguntas EN ORDEN (siguen el texto). En P4 (gapped text) fíjate en pistas antes/después del hueco. En P5/P6 lee la frase entera antes de elegir/escribir. ¡Nunca dejes un hueco en blanco!
WRITING (45 min · ~20 min cada parte): P1 email — responde a los 3 puntos, saludo y despedida, ~100 palabras. P2 — elige artículo o relato; planifica 1 min; usa conectores (although, so, because); revisa.
LISTENING (~30 min): lee las preguntas antes de cada audio. Se oye DOS veces: la 1ª para entender, la 2ª para confirmar. En P3 escribe UNA palabra/número; cuidado con la ortografía.
SPEAKING (10–12 min): P1 responde con detalle (no solo 'yes'). P2 describe TODO (there is/are, in the background). P3 haz sugerencias y reacciona (how about…?, I agree). P4 da opiniones y razones.`),
    TIP("Consejo de oro", "En el Writing, escribe ~100 palabras (ni muchas menos ni muchas más). Usa un registro adecuado (amistoso en el email). En el Speaking, si no sabes una palabra, explícala con otras. ¡Habla, no te quedes callado/a!"),
    grammarEx("Práctica — Frases útiles para el examen", "Elige la mejor opción para el Writing/Speaking.", [
      mc("Para empezar un email a un amigo:", ["Dear Sir,", "Hi Sam,", "To whom it may concern,"], 1, "email informal → Hi Sam,"),
      mc("Para dar tu opinión:", ["In my opinion,", "It is said that", "Yours faithfully,"], 0, "In my opinion,"),
      mc("Para contrastar dos ideas:", ["because", "on the other hand", "for example"], 1, "on the other hand."),
      mc("Para terminar un email a un amigo:", ["Yours faithfully,", "Love, / Best wishes,", "Regards, Mr Smith"], 1, "Love, / Best wishes,"),
      mc("Para hacer una sugerencia (Speaking P3):", ["How about going to the cinema?", "You must go to the cinema.", "It is believed you go."], 0, "How about + -ing?"),
      mc("Para describir una foto (Speaking P2):", ["In the background, there are some trees.", "I think it was.", "It depends."], 0, "there are… in the background."),
      mc("Para mostrar acuerdo (Speaking P3):", ["I disagree completely.", "Yes, I agree. That's a good idea.", "No."], 1, "Yes, I agree…"),
    ]),
    GRAMMAR("Vocabulario del día — Las celebraciones", "Léxico de celebraciones (B1)."),
    deck("B1 S12D59 — Las celebraciones", [
      ["celebration", "celebración", "It was a wonderful celebration.", "sustantivo", "ˌselɪˈbreɪʃn"],
      ["anniversary", "aniversario", "It's their tenth anniversary.", "sustantivo", "ˌænɪˈvɜːsəri"],
      ["guest", "invitado/a", "We invited fifty guests.", "sustantivo", "ɡest"],
      ["invitation", "invitación", "I got an invitation to the party.", "sustantivo", "ˌɪnvɪˈteɪʃn"],
      ["gift", "regalo", "She gave me a lovely gift.", "sustantivo", "ɡɪft"],
      ["decorations", "adornos / decoración", "The decorations were beautiful.", "sustantivo", "ˌdekəˈreɪʃnz"],
      ["fireworks", "fuegos artificiales", "The fireworks were spectacular.", "sustantivo", "ˈfaɪəwɜːks"],
      ["toast", "brindis", "We raised a toast to the couple.", "sustantivo", "təʊst"],
      ["occasion", "ocasión", "It was a special occasion.", "sustantivo", "əˈkeɪʒn"],
      ["throw a party", "dar / montar una fiesta", "Let's throw a party!", "colocación", "θrəʊ ə ˈpɑːti"],
    ]),
    vocabEx("Vocabulario — Las celebraciones", "Elige la opción correcta.", [
      mc("A person you invite to an event is a ___.", ["guest", "gift", "toast"], 0, "guest."),
      mc("The yearly return of a special date is an ___.", ["anniversary", "occasion", "invitation"], 0, "anniversary."),
      mc("A present you give someone is a ___.", ["gift", "guest", "toast"], 0, "gift."),
      mc("Colourful explosions in the sky at celebrations are ___.", ["fireworks", "decorations", "toasts"], 0, "fireworks."),
      mc("When you raise your glass to wish someone well, you make a ___.", ["toast", "gift", "guest"], 0, "toast."),
      mc("To organise and host a party is to ___.", ["throw a party", "make a party", "do a party"], 0, "throw a party."),
    ]),

    ...readingParts({
      p1: { title: "Celebraciones y avisos", items: [
        mc("Invitation: 'You're invited to Anna's 18th birthday party!'", ["An invitation to a party.", "A cancellation.", "No party."], 0, "'invited to Anna's 18th birthday party'."),
        mc("Note: 'Please bring a small gift for the guest of honour.'", ["Bring a present.", "No gifts.", "Bring food only."], 0, "'bring a small gift'."),
        mc("Sign: 'Fireworks display starts at 10pm — don't miss it!'", ["Fireworks at 10pm.", "No fireworks.", "It's cancelled."], 0, "'Fireworks display starts at 10pm'."),
        mc("Text: 'We're throwing a party to celebrate our anniversary.'", ["A party for their anniversary.", "No party.", "A funeral."], 0, "'throwing a party to celebrate our anniversary'."),
        mc("Reminder: 'Please reply to the invitation by Friday.'", ["Answer the invitation by Friday.", "No reply needed.", "It's next year."], 0, "'reply to the invitation by Friday'."),
      ] },
      p2text: "FOUR KINDS OF CELEBRATION\n\nA) The Surprise Party — friends gather secretly to shock someone on their special day.\nB) The Family Gathering — a quiet, warm meal with relatives to mark an occasion.\nC) The Big Festival — a huge public event with music, food, decorations and fireworks.\nD) The Simple Toast — just a small group raising a glass to celebrate good news.",
      p2q: { title: "Emparejar personas y celebraciones", items: [
        mc("Nadia wants to surprise her best friend for her birthday.", ["A", "B", "C", "D"], 0, "The Surprise Party."),
        mc("Ben prefers a quiet meal with his family.", ["A", "B", "C", "D"], 1, "The Family Gathering."),
        mc("Sara loves big public events with fireworks.", ["A", "B", "C", "D"], 2, "The Big Festival."),
        mc("Leo just wants to raise a glass with a few friends.", ["A", "B", "C", "D"], 3, "The Simple Toast."),
        mc("A celebration that must be kept secret.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "WHY WE NEED TO CELEBRATE\n\nLife is full of ordinary days. We get up, go to work or school, come home, and do it all again tomorrow. This routine is necessary, but if that were all there was, life would feel grey and endless. This is why, in every culture around the world, human beings pause from time to time to celebrate. From huge national festivals to a small birthday cake, celebrations are the bright colours that break up the grey of everyday life.\n\nBut celebrations do far more than simply provide a break. When we celebrate, we are marking that something matters. A wedding says that love is important; a graduation says that years of hard work deserve to be honoured; even a small toast among friends says, 'This good news is worth stopping for.' By celebrating, we give shape and meaning to the passing of time. Without these special occasions, the years would slide by unmarked, and we might forget to notice the things that are truly important.\n\nPerhaps most importantly, celebrations bring people together. In our busy, separate lives, they are the occasions that make us gather: the reason we travel across the country to see family, or invite our neighbours into our homes. Around a shared table, or in a crowd watching fireworks light up the sky, we feel that we belong. So the next time you have something to celebrate, however small, don't let the moment pass. Invite your friends, raise a glass, light the candles. These bright, shared moments are not a distraction from real life. In many ways, they are what real life is for.",
      p3q: { title: "Por qué necesitamos celebrar (texto largo)", items: [
        mc("What would life feel like with only ordinary days?", ["Exciting.", "Grey and endless.", "Perfect."], 1, "'life would feel grey and endless'."),
        mc("What does a celebration do beyond providing a break?", ["Nothing.", "It marks that something matters.", "It wastes time."], 1, "'we are marking that something matters'."),
        mc("What does a graduation celebration honour?", ["Money.", "Years of hard work.", "Luck."], 1, "'years of hard work deserve to be honoured'."),
        mc("What do celebrations most importantly do?", ["Cost money.", "Bring people together.", "Keep us apart."], 1, "'celebrations bring people together'."),
        mc("What does the writer say celebrations are?", ["A distraction.", "What real life is for.", "Unimportant."], 1, "'they are what real life is for'."),
      ] },
      p4text: "THE SURPRISE PARTY\n\nMy grandmother was turning eighty, and my mother decided we would throw her a surprise party. (1)___ For weeks, the whole family planned it in secret, sending each other messages and hiding decorations in cupboards.\n\nKeeping the secret was almost impossible. (2)___ My grandmother, who notices everything, kept asking why we were all being so mysterious. Several times, we nearly gave the whole thing away. On the day itself, my job was to take her out for a 'quiet lunch' while everyone else prepared the hall. (3)___ I have never been so nervous in a restaurant in my life, checking my phone every two minutes.\n\nFinally, the message came: everything was ready. (4)___ When we walked into the hall and fifty people shouted 'Surprise!', my grandmother's face was a picture I will never forget. She cried, she laughed, and she told us it was the best day of her life. (5)___ Seeing her so happy, surrounded by everyone who loved her, was worth every single moment of stress. It reminded me what celebrations are really for.",
      p4options: [
        "We wanted it to be a day she would never forget.",        // A -> gap 1
        "She is a very difficult person to fool.",                 // B -> gap 2
        "I had to keep her distracted for two whole hours.",       // C -> gap 3
        "It was time to bring her home.",                          // D -> gap 4
        "We decided to cancel the party at the last minute.",       // E (extra)
        "That day is one of my happiest memories.",                // F -> gap 5
        "Nobody in our family had ever celebrated a birthday.",     // G (extra)
        "My grandmother had asked us not to do anything.",         // H (extra)
      ],
      p4q: { title: "La fiesta sorpresa (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: querían un día inolvidable."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: es difícil de engañar."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: debía distraerla dos horas."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: hora de llevarla a casa."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: uno de sus recuerdos más felices."),
      ] },
      p5text: "Planning a celebration takes effort. First, decide who to invite and send out the (1)___. Then buy some (2)___ to make the room look festive. Don't forget a (3)___ for the person you're celebrating. At the party, someone usually makes a (4)___, raising a glass to wish everyone well. If it's a big (5)___, there might even be (6)___ lighting up the sky. Most of all, celebrations bring people together, and that's what really matters.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["invitations", "guests", "gifts", "toasts"], 0, "'send out the invitations'."),
        mc("Hueco 2", ["decorations", "guests", "toasts", "occasions"], 0, "'buy some decorations'."),
        mc("Hueco 3", ["gift", "guest", "toast", "occasion"], 0, "'a gift for the person'."),
        mc("Hueco 4", ["toast", "gift", "guest", "invitation"], 0, "'makes a toast'."),
        mc("Hueco 5", ["occasion", "guest", "gift", "toast"], 0, "'a big occasion'."),
        mc("Hueco 6", ["fireworks", "decorations", "gifts", "guests"], 0, "'fireworks lighting up the sky'."),
      ] },
      p6text: "Hi Sam,\nWe threw a surprise party for my grandmother's 80th birthday! For weeks we planned it in secret and hid the (1)___ in cupboards. My job was to keep her (2)___ while everyone prepared the hall. When we walked in, fifty (3)___ shouted 'Surprise!' and her face lit up! We made a (4)___ to wish her health and happiness, and there were even (5)___ outside! She said it was the best day of her life. Seeing her so happy reminded me what celebrations are really (6)___. Do you enjoy big celebrations?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["decorations", "gifts"], "'hid the decorations in cupboards'."),
        fb("Hueco 2", ["distracted", "busy"], "'keep her distracted'."),
        fb("Hueco 3", ["guests", "people"], "'fifty guests shouted'."),
        fb("Hueco 4", ["toast"], "'made a toast'."),
        fb("Hueco 5", ["fireworks"], "'there were even fireworks'."),
        fb("Hueco 6", ["for"], "'what celebrations are really for'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te invita a una celebración. Responde a su email (~100 palabras):\n· dale las gracias y di si puedes ir,\n· pregúntale qué llevar (regalo, comida),\n· cuéntale una celebración especial que tuviste.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why is it important to celebrate special occasions?' con tu opinión.\n· RELATO: empieza con: 'When we walked into the hall, fifty people shouted \"Surprise!\"'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con una joven que organiza fiestas y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young party planner, Lucia. Interviewer: Lucia, what's your job? Lucia: I organise parties and celebrations for people. Interviewer: What's the most important thing? Lucia: Knowing what the guest of honour really wants — not everyone likes a big surprise. Interviewer: What's the hardest part? Lucia: Keeping everything secret when it's a surprise party! Interviewer: What's your favourite kind of event? Lucia: Small family gatherings, actually. They're the most meaningful. Interviewer: Any advice for someone planning a party? Lucia: Don't try to do everything yourself — ask your friends to help.", [
      mc("What is Lucia's job?", ["A chef.", "She organises parties and celebrations.", "A musician."], 1, "'I organise parties and celebrations'."),
      mc("What's the most important thing?", ["Big surprises.", "Knowing what the guest of honour wants.", "Fireworks."], 1, "'Knowing what the guest of honour really wants'."),
      mc("What's the hardest part?", ["The food.", "Keeping a surprise secret.", "The cost."], 1, "'Keeping everything secret'."),
      mc("What is her favourite kind of event?", ["Big festivals.", "Small family gatherings.", "Weddings."], 1, "'Small family gatherings'."),
      mc("What is her advice?", ["Do everything yourself.", "Ask your friends to help.", "Spend a lot of money."], 1, "'ask your friends to help'."),
    ]),

    ...speakingParts("las celebraciones y las fiestas", { p1: "qué celebraciones te gustan, cómo celebras tu cumpleaños y una fiesta especial que recuerdes", p2: "una foto de una fiesta o celebración (una boda, un cumpleaños, un festival)", p3: "organizar juntos una fiesta para celebrar el final del curso", p4: "las celebraciones, por qué son importantes y cómo se celebran en distintas culturas" }),

    SUMMARY("Resumen del Día 59", [
      "Estrategias: reparte el tiempo, lee las preguntas antes, responde los 3 puntos del email, describe TODO en el Speaking, no dejes huecos en blanco.",
      "Frases útiles: In my opinion / on the other hand / How about…? / I agree.",
      "Vocabulario de celebraciones. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 60", "Repasa las estrategias y TODO el vocabulario del curso. Mañana: el ÚLTIMO día y el simulacro completo. ¡Ya casi estás!"),
  ],
};

// ───────────────────────── DÍA 60 ─────────────────────────
const DAY60 = {
  title: "Día 60 — Repaso final y simulacro completo · ¡Enhorabuena!",
  description: "Repaso general de todo el curso y las 4 destrezas por última vez. Listening P2. Al final, el SIMULACRO COMPLETO que estima tu nota en la Cambridge Scale.",
  pedagogy: {
    objective: "Consolidar todo el B1 y medir tu preparación con el simulacro final.",
    summary: "Repaso final integral; Reading P1–P6; Writing; Listening; Speaking; simulacro completo.",
    reviewPrompts: ["¿Qué destreza necesitas repasar más?", "Haz el simulacro completo en condiciones de examen."],
  },
  items: [
    TEXT("🎉 ¡ÚLTIMO DÍA del B1! Has completado 60 días. Hoy, un repaso general de todo el curso y, al final, el SIMULACRO COMPLETO (módulo aparte) que estima tu nota en la Cambridge English Scale (aprobado B1 ≈ 140)."),
    GRAMMAR("Repaso general del B1", `Has visto TODA la gramática del B1 Preliminary:
· Tiempos (presentes, pasados, perfectos, futuros) · Condicionales (0/1º/2º/3º) y wish · Voz pasiva (todos los tiempos) · Modales (obligación, consejo, prohibición, deducción) · Estilo indirecto · Oraciones de relativo (y reducidas) · Comparación · Cuantificadores y contables/incontables · Phrasal verbs y preposiciones · make/let/allow, reflexivos, question tags, so/such, conectores y estructuras impersonales.
Y las 4 destrezas con el formato REAL del examen, cada día. ¡Estás preparado/a!`),
    TIP("Antes del examen real", "Duerme bien, lee las instrucciones con calma, gestiona el tiempo y confía en lo que has practicado. Recuerda: has hecho esto muchas veces ya. ¡Tú puedes!"),
    grammarEx("Repaso general — gramática del B1", "Completa o elige (mezcla de todo el curso).", [
      fb("If I ___ (have) more time, I'd learn Italian. (2º cond.)", ["had"], "2º cond."),
      fb("The bridge ___ (build) in 1900. (pasiva pasado)", ["was built"], "was built."),
      fb("He ___ ___ (must/study) hard — he passed easily. (deducción pasado)", ["must have studied"], "must have + participio."),
      fb("\"I'm tired.\" → She said she ___ tired. (estilo indirecto)", ["was"], "backshift."),
      fb("It's cold today, ___ ___? (question tag)", ["isn't it"], "isn't it?"),
      fb("I wish I ___ (study) harder last year. (arrepentimiento)", ["had studied"], "wish + past perfect."),
      fb("The woman ___ lives next door is a doctor. (relativa)", ["who", "that"], "who."),
      mc("Choose:", ["You must to buy a ticket.", "You must buy a ticket.", "You mustn't to buy a ticket."], 1, "must + inf sin to."),
    ]),
    GRAMMAR("Repaso general — vocabulario del B1", "Un repaso de vocabulario de todo el curso."),
    vocabEx("Repaso general — vocabulario del B1", "Elige la opción correcta.", [
      mc("A very cheap, good deal:", ["bargain", "refund", "receipt"], 0, "bargain (S3)."),
      mc("To follow the law is to ___ it:", ["obey", "ban", "punish"], 0, "obey (S4)."),
      mc("False information presented as news:", ["fake news", "an update", "a report"], 0, "fake news (S5)."),
      mc("To feel sorry about a past decision:", ["regret", "decide", "choose"], 0, "regret (S6)."),
      mc("The natural home of an animal:", ["habitat", "species", "predator"], 0, "habitat (S11)."),
      mc("Something so good you'll never forget it:", ["unforgettable", "boring", "awful"], 0, "unforgettable (S9)."),
      mc("A qualification from university:", ["degree", "career", "interview"], 0, "degree (S11)."),
      mc("A present you give someone:", ["gift", "guest", "toast"], 0, "gift (S12)."),
    ]),

    ...readingParts({
      p1: { title: "Repaso final — avisos variados", items: [
        mc("Sign: 'Tickets must be bought in advance.'", ["Buy tickets beforehand.", "Buy at the door.", "Free entry."], 0, "'must be bought in advance'."),
        mc("Note: 'If I were you, I'd apply now.'", ["Advice to apply now.", "Don't apply.", "Apply later."], 0, "'If I were you, I'd apply now'."),
        mc("Text: 'The film, which was released last week, is amazing.'", ["A recent, great film.", "An old film.", "A bad film."], 0, "'released last week, is amazing'."),
        mc("Poster: 'It is said that this festival is the oldest in the country.'", ["It's believed to be very old.", "It's new.", "No festival."], 0, "'said that this festival is the oldest'."),
        mc("Reminder: 'Don't forget to reply, will you?'", ["A reminder to reply.", "Don't reply.", "It's done."], 0, "'Don't forget to reply, will you?'"),
      ] },
      p2text: "FOUR WAYS TO CELEBRATE FINISHING A COURSE\n\nA) A Trip Away — reward months of hard work with a weekend somewhere new.\nB) A Big Party — gather all your friends together for a night to remember.\nC) A New Hobby — use your new free time to take up something you've always wanted to try.\nD) A Quiet Reward — simply relax, read, and enjoy the feeling of a job well done.",
      p2q: { title: "Emparejar personas y planes", items: [
        mc("Nadia wants to travel to celebrate.", ["A", "B", "C", "D"], 0, "A Trip Away."),
        mc("Ben wants a big celebration with all his friends.", ["A", "B", "C", "D"], 1, "A Big Party."),
        mc("Sara wants to start something new with her free time.", ["A", "B", "C", "D"], 2, "A New Hobby."),
        mc("Leo just wants to relax quietly.", ["A", "B", "C", "D"], 3, "A Quiet Reward."),
        mc("A way to celebrate by travelling.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE JOURNEY, NOT THE DESTINATION\n\nWhen you finish a long course of study, like the one you have just completed, it's natural to focus entirely on the goal ahead: passing the exam, getting the certificate. These things matter, of course. But as I look back on my own years of learning, I've come to believe that the exam at the end was never really the point. The true value was in the journey itself.\n\nThink about everything that happens along the way. To learn a language, you have to become a slightly different person. You learn to be patient with yourself when you make mistakes, and to keep going when progress feels slow. You discover that a problem which seems impossible on Monday can feel easy by Friday, if you simply keep working at it. These are not just language skills; they are life skills, and they stay with you long after the details of any single grammar rule have faded. The confidence you build by mastering something difficult is yours forever.\n\nSo, whatever happens in your exam, I want you to remember this. You have done something genuinely difficult. Day after day, you have shown up, studied, practised and improved. You have expanded your world, because a new language opens doors to new people, new places and new ideas that were closed to you before. The certificate, if you get it, is simply a piece of paper that records what you have already become. The real achievement isn't the mark on the page. It's the person you have grown into by earning it. Be proud of that, celebrate it, and never stop learning. This isn't the end of your journey. It's a wonderful new beginning.",
      p3q: { title: "El viaje, no el destino (texto largo)", items: [
        mc("What is natural to focus on when finishing a course?", ["The journey.", "The goal: passing the exam.", "Nothing."], 1, "'focus entirely on the goal ahead: passing the exam'."),
        mc("What does the writer believe the true value was?", ["The certificate.", "The journey itself.", "The mark."], 1, "'The true value was in the journey itself'."),
        mc("What kind of skills does learning a language build?", ["Only language skills.", "Life skills like patience and confidence.", "None."], 1, "'they are life skills'."),
        mc("What does a new language open doors to?", ["Nothing.", "New people, places and ideas.", "Only exams."], 1, "'new people, new places and new ideas'."),
        mc("What is the real achievement, according to the writer?", ["The mark on the page.", "The person you have grown into.", "The certificate."], 1, "'the person you have grown into by earning it'."),
      ] },
      p4text: "MY LANGUAGE JOURNEY\n\nWhen I started learning English, two years ago, I could barely say a word. (1)___ I remember feeling completely overwhelmed, convinced that I would never be able to hold a real conversation.\n\nProgress, at first, felt painfully slow. (2)___ There were evenings when I wanted to give up, when the grammar seemed impossible and every new word slipped straight out of my head. If a kind teacher hadn't encouraged me to keep going, I might have stopped altogether. (3)___ 'Don't compare where you are with where you want to be,' she told me. 'Compare it with where you started.'\n\nSo I carried on, one small step at a time. (4)___ And slowly, almost without noticing, everything began to change. One day, I realised I had understood a whole song without translating it. Another day, I had a ten-minute conversation with a stranger and forgot to be nervous. (5)___ Now, as I finish this course, I can hardly believe how far I've come. To anyone starting out, I would say just one thing: be patient, keep going, and trust that all your hard work will one day pay off. It really does.",
      p4options: [
        "Everything about the language felt strange and difficult.", // A -> gap 1
        "For every step forward, I seemed to take two back.",        // B -> gap 2
        "Her advice changed the way I saw my own progress.",         // C -> gap 3
        "I promised myself I would never give up.",                  // D -> gap 4
        "I gave up learning English completely.",                    // E (extra)
        "Those small victories gave me the confidence to continue.", // F -> gap 5
        "I had always spoken perfect English.",                      // G (extra)
        "The course was cancelled after the first week.",            // H (extra)
      ],
      p4q: { title: "Mi viaje con el idioma (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: todo le parecía raro y difícil."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: por cada paso, dos atrás."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: su consejo cambió su visión."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: se prometió no rendirse."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: esas victorias le dieron confianza."),
      ] },
      p5text: "Finishing a course is a real achievement. If you (1)___ worked hard every day, you should be proud. Learning a language isn't easy, and there (2)___ have been times when you wanted to give up. But you carried (3)___. The exam matters, but it isn't everything: the confidence you (4)___ built is yours forever. A new language opens doors (5)___ were once closed. So whatever your result, celebrate what you've done. This isn't the end — it's a new (6)___.",
      p5q: { title: "Huecos con opciones (repaso general)", items: [
        mc("Hueco 1", ["have", "has", "had", "having"], 0, "'If you have worked hard'."),
        mc("Hueco 2", ["must", "can't", "should", "will"], 0, "'there must have been times'."),
        mc("Hueco 3", ["on", "up", "out", "off"], 0, "'you carried on'."),
        mc("Hueco 4", ["have", "has", "are", "were"], 0, "'the confidence you have built'."),
        mc("Hueco 5", ["that", "who", "where", "whose"], 0, "'doors that were once closed'."),
        mc("Hueco 6", ["beginning", "end", "goal", "exam"], 0, "'a new beginning'."),
      ] },
      p6text: "Hi Sam,\nI've finally finished my English course, and I can't believe how far I've come! Two years ago I (1)___ barely say a word. There (2)___ times when I wanted to give up, but a kind teacher told me not (3)___ compare myself with others. So I carried (4)___, one step at a time. Now I can have a whole conversation without getting nervous! If I (5)___ given up back then, I would have missed all of this. I'm so proud. This isn't the end — it's a new (6)___! Thank you for all your support.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["could"], "'I could barely say a word'."),
        fb("Hueco 2", ["were"], "'There were times'."),
        fb("Hueco 3", ["to"], "'told me not to compare'."),
        fb("Hueco 4", ["on"], "'I carried on'."),
        fb("Hueco 5", ["had"], "'If I had given up' (3er cond.)."),
        fb("Hueco 6", ["beginning"], "'a new beginning'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te felicita por terminar tu curso de inglés. Responde a su email (~100 palabras):\n· dale las gracias y cuenta cómo te sientes,\n· di qué ha sido lo más difícil y lo más gratificante,\n· pregúntale por sus planes de aprendizaje.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why is learning a language worth the effort?' con tu opinión.\n· RELATO: empieza con: 'Two years ago, I could barely say a word of English.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: How do you feel about finishing the course? Man: Really proud, but a bit nervous about the exam. Two. Man: What was the hardest part? Woman: The grammar, definitely. Three. Woman: Did you ever want to give up? Man: Yes, but I carried on. Four. Man: What helped you most? Woman: My teacher, who always encouraged me. Five. Man: Are you going to keep learning? Woman: Yes, I'd love to try another language. Six. Woman: What would you tell a beginner? Man: Be patient — it's worth it.", [
      mc("1. How does the man feel about finishing?", ["Bored.", "Proud but a bit nervous.", "Sad."], 1, "'Really proud, but a bit nervous'."),
      mc("2. What was the hardest part?", ["Listening.", "The grammar.", "Speaking."], 1, "'The grammar, definitely'."),
      mc("3. Did the man want to give up?", ["No.", "Yes, but he carried on.", "He did give up."], 1, "'Yes, but I carried on'."),
      mc("4. What helped the woman most?", ["A book.", "Her encouraging teacher.", "An app."], 1, "'My teacher, who always encouraged me'."),
      mc("5. Will the woman keep learning?", ["No.", "Yes, another language.", "She's not sure."], 1, "'I'd love to try another language'."),
      mc("6. What would the man tell a beginner?", ["Give up.", "Be patient — it's worth it.", "It's impossible."], 1, "'Be patient — it's worth it'."),
    ]),

    ...speakingParts("tu aprendizaje del inglés", { p1: "cómo ha sido aprender inglés para ti, qué es lo más difícil y lo que más te gusta", p2: "una foto de personas estudiando o celebrando un logro", p3: "cómo seguir practicando inglés después del curso (planes juntos)", p4: "aprender idiomas, por qué merece la pena y cómo no dejar de mejorar" }),

    SUMMARY("Resumen del Día 60 — ¡Curso B1 completado! 🎉", [
      "Has completado los 60 días del B1 Preliminary, practicando las 4 destrezas con el formato real cada día.",
      "Dominas toda la gramática y el vocabulario clave del nivel intermedio.",
      "Ahora, haz el SIMULACRO COMPLETO (módulo siguiente) en condiciones de examen para estimar tu nota.",
      "¡Enhorabuena! Estás preparado/a para presentarte al examen real de Cambridge B1 Preliminary con posibilidades reales de aprobar.",
    ]),
    INFO("El simulacro completo y el examen real", "En el módulo siguiente tienes el SIMULACRO FINAL con todas las prácticas auto-corregibles del curso (Reading y Listening), cronometrado. Aprueba con un 60% (≈ nota 140 en la Cambridge Scale). El Writing y el Speaking se evalúan aparte. Cuando lo apruebes con holgura, ¡estás listo/a para el examen oficial! Mucha suerte. 🍀"),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "Cultura, arte y repaso final",
  description: "Repaso integrado de toda la gramática del B1, estrategias de examen y temas de cultura y arte. Cierra con el simulacro completo. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
