/**
 * B1 Preliminary · Semana 5 — "Comunicación e información".
 * Gramática: estilo indirecto (afirmaciones, preguntas, órdenes/peticiones,
 * say vs tell) y oraciones de relativo (especificativas y explicativas).
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
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, I'd rather, we could, let's, shall we"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 21 ─────────────────────────
const DAY21 = {
  title: "Día 21 — Estilo indirecto: afirmaciones · Las noticias",
  description: "Reported speech (afirmaciones, backshift). Vocabulario de noticias y medios. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Contar lo que otra persona dijo cambiando los tiempos (backshift).",
    summary: "Estilo indirecto (afirmaciones); noticias/medios; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["No hacer el backshift.", "'He said me'.", "'She said that she is tired' (sin cambio)."],
    reviewPrompts: ["¿Present simple pasa a…?", "¿'say' o 'tell' con objeto?"],
  },
  items: [
    TEXT("🔁 Semana 5. Hoy el ESTILO INDIRECTO (reported speech): contar lo que alguien dijo. Vocabulario: las NOTICIAS y los MEDIOS."),
    GRAMMAR("Estilo indirecto: afirmaciones", `Al contar lo que alguien dijo, el verbo suele RETROCEDER un tiempo (backshift):
· present simple → past simple: "I'm tired" → She said (that) she was tired.
· present continuous → past continuous: "I'm working" → He said he was working.
· present perfect / past simple → past perfect: "I've finished" → She said she had finished.
· will → would; can → could; must → had to.
También cambian: I→he/she, my→his/her, now→then, today→that day, tomorrow→the next day, here→there.
'that' es opcional. SAY (sin objeto): He said (that)… TELL (+ objeto): He told me (that)…`),
    WARN("Errores típicos del hispanohablante", "· ❌ He said me → ✅ He told me / He said (to me).\n· ❌ She said that she is tired → ✅ she was tired (backshift).\n· ❌ told that → ✅ told me that / said that.\n· No cambies el backshift si sigue siendo verdad general (opcional)."),
    grammarEx("Gramática — Estilo indirecto (afirmaciones)", "Pasa a estilo indirecto o elige.", [
      fb("\"I'm tired.\" → She said she ___ tired.", ["was"], "present → past."),
      fb("\"I work here.\" → He said he ___ there.", ["worked"], "present simple → past simple + here→there."),
      fb("\"I've finished.\" → She said she ___ finished.", ["had"], "present perfect → past perfect."),
      mc("Choose:", ["He said me he was busy.", "He told me he was busy.", "He told he was busy."], 1, "tell + objeto."),
      fb("\"I'll call you.\" → He said he ___ call me.", ["would"], "will → would."),
      fb("\"I can swim.\" → She said she ___ swim.", ["could"], "can → could."),
      mc("Choose:", ["She said that she is a doctor.", "She said that she was a doctor.", "She said me she was a doctor."], 1, "backshift: is→was."),
    ]),
    GRAMMAR("Vocabulario del día — Noticias y medios", "Léxico de medios (B1)."),
    deck("B1 S5D21 — Noticias y medios", [
      ["news", "noticias", "I watch the news every evening.", "sustantivo", "njuːz"],
      ["headline", "titular", "The headline caught my eye.", "sustantivo", "ˈhedlaɪn"],
      ["article", "artículo", "I read an interesting article.", "sustantivo", "ˈɑːtɪkl"],
      ["journalist", "periodista", "She's a famous journalist.", "sustantivo", "ˈdʒɜːnəlɪst"],
      ["report", "informar / reportaje", "They reported the story first.", "verbo/sustantivo", "rɪˈpɔːt"],
      ["broadcast", "emitir / emisión", "The match was broadcast live.", "verbo/sustantivo", "ˈbrɔːdkɑːst"],
      ["advertisement", "anuncio", "There are too many advertisements.", "sustantivo", "ədˈvɜːtɪsmənt"],
      ["reliable", "fiable", "It's a reliable source.", "adjetivo", "rɪˈlaɪəbl"],
      ["fake news", "noticias falsas", "Be careful of fake news online.", "colocación", "feɪk ˈnjuːz"],
      ["update", "actualización / novedad", "Here's the latest update.", "sustantivo", "ˈʌpdeɪt"],
    ]),
    vocabEx("Vocabulario — Noticias y medios", "Elige la opción correcta.", [
      mc("The title of a news story is the ___.", ["headline", "article", "update"], 0, "headline."),
      mc("A person who writes news is a ___.", ["journalist", "headline", "report"], 0, "journalist."),
      mc("False information presented as news is ___.", ["fake news", "an update", "a report"], 0, "fake news."),
      mc("A source you can trust is ___.", ["reliable", "fake", "broadcast"], 0, "reliable."),
      mc("To send out a programme on TV or radio is to ___.", ["broadcast", "report", "update"], 0, "broadcast."),
      mc("A short piece trying to sell something is an ___.", ["advertisement", "article", "headline"], 0, "advertisement."),
    ]),

    ...readingParts({
      p1: { title: "Medios y avisos", items: [
        mc("Headline: 'Local team wins the cup after 20 years.'", ["A team won the cup.", "A team lost.", "No match."], 0, "'wins the cup'."),
        mc("Note: 'This story has not been confirmed — treat with care.'", ["The news isn't confirmed.", "It's definitely true.", "Ignore it."], 0, "'not been confirmed — treat with care'."),
        mc("Notice: 'The interview will be broadcast live at 8pm.'", ["Watch the interview live at 8pm.", "It was cancelled.", "It's recorded."], 0, "'broadcast live at 8pm'."),
        mc("Warning: 'Beware of fake news shared on social media.'", ["Some online news is false.", "All news is true.", "No social media."], 0, "'Beware of fake news'."),
        mc("Text: 'The journalist reported the story from the scene.'", ["A reporter covered the story live.", "Nobody reported it.", "It was fake."], 0, "'reported the story from the scene'."),
      ] },
      p2text: "FOUR WAYS TO GET THE NEWS\n\nA) The Morning Paper — a traditional printed newspaper; detailed articles, but the news is a day old.\nB) NewsFlash App — instant updates on your phone; fast, but not every story is checked.\nC) Radio Hour — a daily news programme you can listen to while doing other things.\nD) The Weekly Review — a magazine that explains the big stories in depth, once a week.",
      p2q: { title: "Emparejar personas y medios", items: [
        mc("Nadia likes reading detailed printed articles.", ["A", "B", "C", "D"], 0, "The Morning Paper."),
        mc("Omar wants the very latest news instantly.", ["A", "B", "C", "D"], 1, "NewsFlash App."),
        mc("Sara likes to follow the news while cooking.", ["A", "B", "C", "D"], 2, "Radio Hour."),
        mc("Leo prefers one deep summary each week.", ["A", "B", "C", "D"], 3, "The Weekly Review."),
        mc("A source that is fast but not always checked.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "CAN WE BELIEVE THE NEWS?\n\nWe live in a world full of information. With a single tap on our phones, we can read thousands of news stories from all over the planet. This should be a wonderful thing. Yet many people say they no longer know what to believe, and I understand why.\n\nThe problem is 'fake news' — false stories that are designed to look real. Some are created as jokes; others are spread deliberately to trick people or make money. A few years ago, a friend of mine shared a dramatic story online. She told me it was shocking and that everyone needed to see it. The next day, it turned out to be completely untrue. She felt embarrassed, and she promised she would always check her facts in future.\n\nSo how can we protect ourselves? The answer is to think like a journalist. Before you believe a story, ask where it comes from. Is the source reliable? Do other, trusted news organisations report the same thing? If a headline seems too shocking to be true, it very often is. The news can still be a wonderful window on the world — but only if we learn to look through it carefully.",
      p3q: { title: "¿Podemos creer las noticias? (texto largo)", items: [
        mc("What should be a wonderful thing?", ["Fake news.", "Easy access to information.", "Embarrassment."], 1, "'read thousands of news stories… should be a wonderful thing'."),
        mc("What is 'fake news'?", ["Old news.", "False stories designed to look real.", "Foreign news."], 1, "'false stories that are designed to look real'."),
        mc("What did the writer's friend do?", ["Wrote an article.", "Shared an untrue story.", "Became a journalist."], 1, "'shared a dramatic story… turned out to be completely untrue'."),
        mc("What did the friend promise?", ["To stop reading news.", "To always check her facts.", "To delete her account."], 1, "'she would always check her facts'."),
        mc("What does the writer advise?", ["Believe every headline.", "Check the source, like a journalist.", "Avoid all news."], 1, "'think like a journalist… ask where it comes from'."),
      ] },
      p4text: "THE STORY THAT WASN'T TRUE\n\nOne morning, I woke up to dozens of messages. (1)___ A famous singer, everyone said, had cancelled her concert in our city. I had tickets, so my heart sank.\n\nI immediately texted my best friend. She told me she had read it on social media and that thousands of people were sharing it. (2)___ I was about to ask for my money back when my sister stopped me. 'Where did this news actually come from?' she asked. (3)___ Neither of us could answer.\n\nSo we decided to check properly. We looked at the singer's official page and the main news websites. (4)___ There was nothing about a cancellation anywhere. The whole story had been invented. The concert went ahead as planned, and it was fantastic. (5)___ Ever since, I've never trusted a shocking headline without checking it first.",
      p4options: [
        "They were all about the same shocking piece of news.",     // A -> gap 1
        "It seemed that the story must be true.",                   // B -> gap 2
        "It was a simple question, but an important one.",          // C -> gap 3
        "To our relief, we found the truth.",                       // D -> gap 4
        "I threw my ticket away in anger.",                         // E (extra)
        "That day taught me a valuable lesson about fake news.",    // F -> gap 5
        "The singer had never existed at all.",                     // G (extra)
        "I never use a phone or read the news.",                    // H (extra)
      ],
      p4q: { title: "La historia que no era verdad (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: todos sobre la misma noticia."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: parecía que debía ser cierto."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: una pregunta sencilla pero importante."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: encontraron la verdad."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: aprendió una lección."),
      ] },
      p5text: "It's important to be careful with the (1)___ we read online. Not every website is (2)___, and some stories are simply (3)___ news, invented to trick us. A good (4)___ always checks the facts before writing a story. So, when you see a shocking (5)___, don't share it immediately. Ask yourself where it came from and whether other reliable sources (6)___ the same thing.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["news", "headline", "advert", "update"], 0, "'the news we read'."),
        mc("Hueco 2", ["reliable", "fake", "broadcast", "live"], 0, "'not every website is reliable'."),
        mc("Hueco 3", ["fake", "reliable", "live", "printed"], 0, "'fake news'."),
        mc("Hueco 4", ["journalist", "headline", "article", "report"], 0, "'a good journalist'."),
        mc("Hueco 5", ["headline", "journalist", "source", "update"], 0, "'a shocking headline'."),
        mc("Hueco 6", ["report", "reports", "reported", "reporting"], 0, "'other reliable sources report'."),
      ] },
      p6text: "Hi Sam,\nYou won't believe what happened! Yesterday my friend (1)___ me that our favourite band had cancelled their concert. She (2)___ she'd seen it online and that everyone (3)___ sharing it. I nearly asked for my money back! But my sister told me I (4)___ check the source first. So we did — and the story (5)___ completely fake! The concert is still on. I've learned that I (6)___ always check shocking news before I believe it.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["told"], "'told me that' (tell + objeto)."),
        fb("Hueco 2", ["said"], "'she said she'd seen it'."),
        fb("Hueco 3", ["was"], "'everyone was sharing it'."),
        fb("Hueco 4", ["should", "must"], "'I should check the source'."),
        fb("Hueco 5", ["was"], "'the story was completely fake'."),
        fb("Hueco 6", ["should", "must"], "'I should always check'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta cómo te informas de las noticias. Responde a su email (~100 palabras):\n· dile cómo y dónde sigues las noticias,\n· cuenta una noticia reciente que te llamó la atención,\n· pregúntale si cree todo lo que lee online.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How can we know what news to trust?' con tu opinión y consejos.\n· RELATO: empieza con: 'Everyone was sharing the story, but something felt wrong.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: What did the reporter say? Man: She said the concert was cancelled. Two. Man: Is that story true? Woman: No, my sister told me it was fake news. Three. Woman: Where do you get your news? Man: I read a printed newspaper every morning. Four. Man: Did you watch the interview? Woman: Yes, it was broadcast live last night. Five. Man: Why don't you believe it? Woman: The website isn't reliable. Six. Woman: What's the headline today? Man: The local team won the cup. Seven. Man: How did you hear? Woman: A journalist reported it from the scene.", [
      mc("1. What did the reporter say?", ["The concert was on.", "The concert was cancelled.", "It was sold out."], 1, "'the concert was cancelled'."),
      mc("2. Is the story true?", ["Yes.", "No, it's fake news.", "Partly."], 1, "'it was fake news'."),
      mc("3. Where does the man get his news?", ["Online.", "A printed newspaper.", "The radio."], 1, "'a printed newspaper every morning'."),
      mc("4. How was the interview shown?", ["Recorded.", "Broadcast live.", "In a paper."], 1, "'broadcast live last night'."),
      mc("5. Why doesn't she believe it?", ["It's old.", "The website isn't reliable.", "It's boring."], 1, "'The website isn't reliable'."),
      mc("6. What is today's headline?", ["A new law.", "The local team won the cup.", "Bad weather."], 1, "'The local team won the cup'."),
      mc("7. How did she hear the news?", ["A friend.", "A journalist reported it.", "An advert."], 1, "'A journalist reported it from the scene'."),
    ]),

    ...speakingParts("las noticias y los medios", { p1: "cómo te informas, si ves la tele o usas el móvil y qué te interesa", p2: "personas informándose (leyendo el periódico, viendo la tele, con el móvil)", p3: "qué medio recomendar a alguien que quiere seguir bien las noticias", p4: "las noticias, las noticias falsas y en quién podemos confiar" }),

    SUMMARY("Resumen del Día 21", [
      "Estilo indirecto: backshift (is→was, will→would, can→could). I→he/she, now→then.",
      "SAY (sin objeto) vs TELL (+ objeto: told me).",
      "Vocabulario de noticias. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 22", "Cuenta 3 cosas que alguien te dijo hoy usando estilo indirecto. Repasa las flashcards. Mañana: preguntas en estilo indirecto."),
  ],
};

// ───────────────────────── DÍA 22 ─────────────────────────
const DAY22 = {
  title: "Día 22 — Preguntas en estilo indirecto · Comunicarse",
  description: "Reported questions (if/whether y palabras interrogativas; orden afirmativo). Vocabulario de comunicación. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Contar preguntas ajenas sin invertir el sujeto ni usar do/does.",
    summary: "Preguntas indirectas; comunicación; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'He asked me where do I live'.", "usar '?'.", "olvidar if/whether en preguntas sí/no."],
    reviewPrompts: ["¿Orden en la pregunta indirecta?", "¿Yes/No question → con qué palabra?"],
  },
  items: [
    TEXT("🔁 Repaso: afirmaciones indirectas. Hoy las PREGUNTAS en estilo indirecto. Vocabulario: COMUNICARSE."),
    GRAMMAR("Preguntas en estilo indirecto", `En la pregunta indirecta el orden es AFIRMATIVO (sujeto + verbo), SIN do/does/did y SIN '?':
· "Where do you live?" → She asked me where I lived.
· "What time is it?" → He asked what time it was.
PREGUNTAS de SÍ/NO → con IF o WHETHER:
· "Are you coming?" → She asked if/whether I was coming.
· "Did you call?" → He asked if I had called.
También se aplica el backshift (do→did→had, is→was, will→would). ask (+ objeto opcional): She asked (me)…
Sirve igual para PREGUNTAS INDIRECTAS educadas: "Could you tell me where the station is?" (afirmativo, sin do).`),
    WARN("Errores típicos del hispanohablante", "· ❌ He asked where do I live → ✅ where I lived.\n· ❌ She asked was I coming → ✅ if I was coming.\n· ❌ Do you know where is the bank? → ✅ where the bank is.\n· No pongas '?' en la pregunta indirecta."),
    grammarEx("Gramática — Preguntas indirectas", "Pasa a estilo indirecto o elige.", [
      fb("\"Where do you live?\" → She asked me where I ___.", ["lived"], "orden afirmativo + backshift."),
      mc("Choose:", ["He asked what time was it.", "He asked what time it was.", "He asked what time is it."], 1, "orden afirmativo, sin '?'."),
      fb("\"Are you tired?\" → He asked ___ I was tired.", ["if", "whether"], "sí/no → if/whether."),
      fb("\"Did you call?\" → She asked if I ___ called.", ["had"], "did → had (backshift)."),
      mc("Choose (polite):", ["Do you know where is the bank?", "Do you know where the bank is?", "Do you know where be the bank?"], 1, "afirmativo tras 'where'."),
      fb("\"What are you doing?\" → He asked what I ___ doing.", ["was"], "are → was."),
      fb("\"Can you swim?\" → She asked if I ___ swim.", ["could"], "can → could."),
    ]),
    GRAMMAR("Vocabulario del día — Comunicarse", "Léxico de comunicación (B1)."),
    deck("B1 S5D22 — Comunicarse", [
      ["get in touch", "ponerse en contacto", "I'll get in touch soon.", "colocación", "ɡet ɪn ˈtʌtʃ"],
      ["reply", "responder / respuesta", "Please reply to my email.", "verbo/sustantivo", "rɪˈplaɪ"],
      ["message", "mensaje", "I left you a message.", "sustantivo", "ˈmesɪdʒ"],
      ["hang up", "colgar (el teléfono)", "Don't hang up yet!", "phrasal verb", "hæŋ ˈʌp"],
      ["misunderstand", "malinterpretar", "I think you misunderstood me.", "verbo", "ˌmɪsʌndəˈstænd"],
      ["mention", "mencionar", "She mentioned your name.", "verbo", "ˈmenʃn"],
      ["chat", "charlar / chatear", "We had a nice chat.", "verbo/sustantivo", "tʃæt"],
      ["in touch", "en contacto", "Let's keep in touch.", "colocación", "ɪn ˈtʌtʃ"],
      ["voicemail", "buzón de voz", "I left a voicemail.", "sustantivo", "ˈvɔɪsmeɪl"],
      ["face-to-face", "cara a cara / en persona", "I prefer talking face-to-face.", "adjetivo", "ˌfeɪs tə ˈfeɪs"],
    ]),
    vocabEx("Vocabulario — Comunicarse", "Elige la opción correcta.", [
      mc("To contact someone is to ___ them.", ["get in touch with", "hang up", "misunderstand"], 0, "get in touch with."),
      mc("To answer a message is to ___.", ["reply", "mention", "chat"], 0, "reply."),
      mc("To end a phone call is to ___.", ["hang up", "reply", "chat"], 0, "hang up."),
      mc("To understand something wrongly is to ___.", ["misunderstand", "mention", "reply"], 0, "misunderstand."),
      mc("Talking in person, not online, is ___.", ["face-to-face", "voicemail", "message"], 0, "face-to-face."),
      mc("A recorded message on a phone is a ___.", ["voicemail", "reply", "chat"], 0, "voicemail."),
    ]),

    ...readingParts({
      p1: { title: "Comunicación y avisos", items: [
        mc("Sign: 'Please switch off phones during the film.'", ["Turn off phones in the cinema.", "Use your phone.", "No films."], 0, "'switch off phones'."),
        mc("Note: 'I called but got your voicemail — please call back.'", ["They left a voicemail; call back.", "They spoke to you.", "Don't call."], 0, "'got your voicemail — please call back'."),
        mc("Email: 'Sorry for the late reply — I've been very busy.'", ["Apology for answering late.", "They replied fast.", "They won't reply."], 0, "'Sorry for the late reply'."),
        mc("Message: 'Let's meet face-to-face to discuss this.'", ["They want to meet in person.", "Only online.", "No meeting."], 0, "'meet face-to-face'."),
        mc("Text: 'I think there's been a misunderstanding.'", ["Something was understood wrongly.", "Everything is clear.", "No message."], 0, "'a misunderstanding'."),
      ] },
      p2text: "FOUR WAYS TO STAY IN TOUCH\n\nA) Video Calls — see each other's faces; perfect for family who live far away.\nB) Group Chat — quick messages any time; great for organising events with lots of friends.\nC) Handwritten Letters — slow but personal; a lovely surprise in a world of screens.\nD) Voice Messages — record your voice when you're too busy to type or call.",
      p2q: { title: "Emparejar personas y formas de comunicarse", items: [
        mc("Nadia's family lives abroad and she misses seeing them.", ["A", "B", "C", "D"], 0, "Video Calls."),
        mc("Ben needs to organise a party with twenty friends.", ["A", "B", "C", "D"], 1, "Group Chat."),
        mc("Sara loves old-fashioned, personal surprises.", ["A", "B", "C", "D"], 2, "Handwritten Letters."),
        mc("Leo is always busy but hates typing.", ["A", "B", "C", "D"], 3, "Voice Messages."),
        mc("A slow but very personal way to keep in touch.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "ARE WE FORGETTING HOW TO TALK?\n\nWe communicate more than ever before. We send hundreds of messages a week and share our lives online with people all over the world. And yet, some experts worry that we are actually forgetting how to have a real conversation.\n\nThink about it. When you text someone, you have plenty of time to think about your reply. You can delete a message and write it again. But a face-to-face conversation is different. You have to listen carefully, react immediately, and read the other person's body language. These are important skills, and, like any skill, they get weaker if we don't practise them. My grandmother often complains that when my cousins visit, they spend the whole time looking at their phones instead of talking to her.\n\nI'm not against technology at all; it helps me stay in touch with friends I would otherwise never see. But I do think we need a balance. Next time you're with friends, try putting your phones away for an hour. Ask people real questions and actually listen to the answers. You might be surprised how much you've been missing.",
      p3q: { title: "¿Estamos olvidando cómo hablar? (texto largo)", items: [
        mc("What do some experts worry about?", ["We text too little.", "We're forgetting how to have real conversations.", "Phones are too expensive."], 1, "'forgetting how to have a real conversation'."),
        mc("How is texting different from talking?", ["It's harder.", "You have time to think and edit.", "It's face-to-face."], 1, "'plenty of time to think… delete… write it again'."),
        mc("What skills does face-to-face conversation need?", ["Typing fast.", "Listening, reacting, reading body language.", "Deleting messages."], 1, "'listen carefully, react immediately… body language'."),
        mc("What does the grandmother complain about?", ["Noisy visits.", "Cousins on their phones instead of talking.", "Too many letters."], 1, "'looking at their phones instead of talking to her'."),
        mc("What does the writer suggest?", ["Ban phones.", "Find a balance; put phones away sometimes.", "Text more."], 1, "'we need a balance… putting your phones away for an hour'."),
      ] },
      p4text: "THE LETTER I ALMOST DIDN'T SEND\n\nLast year, I had a silly argument with my oldest friend. (1)___ We stopped speaking, and for months neither of us got in touch.\n\nI missed her terribly, but I was too proud to call. (2)___ Then, one afternoon, I decided to do something different. Instead of sending a quick text, I sat down and wrote her a proper letter by hand. (3)___ I told her how much our friendship meant to me and asked if we could start again.\n\nFor a week, I heard nothing, and I was sure I had made a fool of myself. (4)___ Then a letter arrived. She wrote that she had cried when she read mine, and that she had missed me just as much. (5)___ We're closer now than ever. Sometimes, the slowest form of communication says the most.",
      p4options: [
        "Looking back, it was about something completely unimportant.", // A -> gap 1
        "I kept picking up my phone and putting it down again.",     // B -> gap 2
        "It took me two hours to find the right words.",             // C -> gap 3
        "I began to regret sending it at all.",                      // D -> gap 4
        "I decided never to speak to her again.",                    // E (extra)
        "That letter saved one of the most important friendships of my life.", // F -> gap 5
        "We had never actually met in person.",                      // G (extra)
        "I threw the letter in the bin.",                            // H (extra)
      ],
      p4q: { title: "La carta que casi no envío (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: era algo sin importancia."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: cogía y soltaba el móvil."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: le costó encontrar las palabras."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: empezó a arrepentirse."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la carta salvó la amistad."),
      ] },
      p5text: "Good communication isn't only about technology. Of course, it's easy to send a quick (1)___ or leave a (2)___ if someone doesn't answer. But sometimes it's better to talk (3)___, so that nobody (4)___ what you mean. If you have an argument with a friend, don't just (5)___ up the phone in anger. Take time to (6)___ in touch properly and explain how you feel.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["message", "reply", "chat", "touch"], 0, "'send a quick message'."),
        mc("Hueco 2", ["voicemail", "headline", "reply", "chat"], 0, "'leave a voicemail'."),
        mc("Hueco 3", ["face-to-face", "voicemail", "message", "online"], 0, "'talk face-to-face'."),
        mc("Hueco 4", ["misunderstands", "mentions", "replies", "chats"], 0, "'nobody misunderstands what you mean'."),
        mc("Hueco 5", ["hang", "get", "keep", "reply"], 0, "'hang up the phone'."),
        mc("Hueco 6", ["get", "hang", "reply", "mention"], 0, "'get in touch properly'."),
      ] },
      p6text: "Hi Sam,\nI had an argument with my friend and I didn't know what to do. My sister asked me (1)___ I had tried to call her, and I said I (2)___ too proud. She wanted to know why I (3)___ just write a letter. So I did! In it, I asked her (4)___ we could start again. A week later she replied and said she (5)___ missed me too. Now we're closer than ever. My sister asked me what I (6)___ learned, and I said: talk properly!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["if", "whether"], "'asked me if I had tried'."),
        fb("Hueco 2", ["was"], "'I was too proud'."),
        fb("Hueco 3", ["didn't"], "'why I didn't just write' (pregunta indirecta con orden afirmativo)."),
        fb("Hueco 4", ["if", "whether"], "'asked her if we could start again'."),
        fb("Hueco 5", ["had"], "'she had missed me too'."),
        fb("Hueco 6", ["had"], "'what I had learned'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta cómo os mantenéis en contacto tú y tus amigos. Responde a su email (~100 palabras):\n· dile cómo prefieres comunicarte y por qué,\n· cuenta si prefieres hablar en persona o por el móvil,\n· pregúntale cómo se comunica con su familia.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is technology making us better or worse at communicating?' con tu opinión.\n· RELATO: empieza con: 'I hadn't spoken to my friend for months.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Did you get my message? Man: No, sorry, it went to my voicemail. Two. Man: Why are you upset? Woman: I think you misunderstood what I said. Three. Woman: How do you keep in touch with your cousins? Man: We video call every Sunday. Four. Man: Shall I text her? Woman: No, it's better to talk face-to-face. Five. Woman: Did she reply? Man: Not yet, she's probably busy. Six. Man: Why did you hang up? Woman: Sorry, my battery died.", [
      mc("1. Did the man get the message?", ["Yes.", "No, it went to voicemail.", "He deleted it."], 1, "'it went to my voicemail'."),
      mc("2. Why is the woman upset?", ["He was late.", "He misunderstood her.", "He forgot."], 1, "'you misunderstood what I said'."),
      mc("3. How does the man contact his cousins?", ["By letter.", "Video calls every Sunday.", "Never."], 1, "'We video call every Sunday'."),
      mc("4. What does the woman advise?", ["Text her.", "Talk face-to-face.", "Send a voicemail."], 1, "'better to talk face-to-face'."),
      mc("5. Has she replied?", ["Yes.", "Not yet, she's busy.", "She said no."], 1, "'Not yet, she's probably busy'."),
      mc("6. Why did the woman hang up?", ["She was angry.", "Her battery died.", "Wrong number."], 1, "'my battery died'."),
    ]),

    ...speakingParts("la comunicación", { p1: "cómo te comunicas con tus amigos y familia y qué app usas más", p2: "personas comunicándose (una videollamada, escribiendo, charlando en persona)", p3: "cómo mantener el contacto con un amigo/a que se muda al extranjero", p4: "la comunicación, hablar en persona vs. por el móvil y los malentendidos" }),

    SUMMARY("Resumen del Día 22", [
      "Preguntas indirectas: orden AFIRMATIVO, sin do/does/did, sin '?'. Sí/No → if/whether.",
      "También backshift: 'Where do you live?' → asked where I lived.",
      "Vocabulario de comunicación. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 23", "Convierte 3 preguntas directas en indirectas. Repasa las flashcards. Mañana: órdenes y peticiones indirectas (tell/ask + to) y say vs tell."),
  ],
};

// ───────────────────────── DÍA 23 ─────────────────────────
const DAY23 = {
  title: "Día 23 — Órdenes y peticiones indirectas · Los amigos",
  description: "tell/ask + objeto + (not) to + infinitivo; say vs tell. Vocabulario de amistad. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Contar órdenes, peticiones y consejos con tell/ask + to.",
    summary: "Órdenes/peticiones indirectas + say/tell; amistad; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'He said me to go'.", "'She told to me'.", "'asked me that I go'."],
    reviewPrompts: ["¿'tell' o 'ask' + a quién + qué?", "¿Cómo se niega? (not to)"],
  },
  items: [
    TEXT("🔁 Repaso: preguntas indirectas. Hoy las ÓRDENES y PETICIONES indirectas (tell/ask + to) y la diferencia SAY vs TELL. Vocabulario: los AMIGOS y la AMISTAD."),
    GRAMMAR("Órdenes y peticiones indirectas; say vs tell", `ÓRDENES: tell + objeto + (not) to + infinitivo → "Sit down!" → She told me to sit down. "Don't be late!" → He told us not to be late.
PETICIONES: ask + objeto + (not) to + infinitivo → "Please help me." → She asked me to help her. "Please don't go." → He asked me not to go.
CONSEJOS: advise + objeto + to → The doctor advised me to rest.
SAY vs TELL:
· TELL + persona: tell me/him/us (told me the truth).
· SAY sin persona: say (that)… / say something. Con persona: say TO me.
❌ He said me. ✅ He told me / He said to me.`),
    WARN("Errores típicos del hispanohablante", "· ❌ He said me to go → ✅ He told me to go.\n· ❌ She told to me → ✅ She told me.\n· ❌ She asked me that I help → ✅ She asked me to help.\n· ❌ He told me don't go → ✅ He told me not to go."),
    grammarEx("Gramática — Órdenes/peticiones + say/tell", "Pasa a estilo indirecto o elige.", [
      fb("\"Sit down.\" → She told me ___ sit down.", ["to"], "tell + objeto + to."),
      fb("\"Don't be late.\" → He told us ___ ___ late.", ["not to"], "tell + objeto + not to."),
      mc("Choose:", ["She said me to wait.", "She told me to wait.", "She told to me to wait."], 1, "tell + objeto + to."),
      fb("\"Please help me.\" → He asked me ___ help him.", ["to"], "ask + objeto + to."),
      mc("Choose:", ["He said me the truth.", "He told me the truth.", "He said me the truth to."], 1, "tell + persona."),
      fb("\"Please don't smoke.\" → She asked him ___ ___ smoke.", ["not to"], "ask + objeto + not to."),
      mc("Choose:", ["The doctor said me to rest.", "The doctor advised me to rest.", "The doctor told to rest."], 1, "advise + objeto + to."),
    ]),
    GRAMMAR("Vocabulario del día — Los amigos", "Léxico de amistad (B1)."),
    deck("B1 S5D23 — Los amigos", [
      ["get on with", "llevarse bien con", "I get on well with my sister.", "phrasal verb", "ɡet ˈɒn wɪð"],
      ["fall out", "pelearse / enfadarse", "They fell out over money.", "phrasal verb", "fɔːl ˈaʊt"],
      ["make up", "reconciliarse", "They argued but soon made up.", "phrasal verb", "meɪk ˈʌp"],
      ["trust", "confiar en", "I trust my best friend completely.", "verbo", "trʌst"],
      ["support", "apoyar", "Good friends support each other.", "verbo", "səˈpɔːt"],
      ["loyal", "leal / fiel", "She's a loyal friend.", "adjetivo", "ˈlɔɪəl"],
      ["argue", "discutir", "We rarely argue.", "verbo", "ˈɑːɡjuː"],
      ["reliable", "de fiar", "He's very reliable.", "adjetivo", "rɪˈlaɪəbl"],
      ["close", "íntimo / cercano", "We're very close friends.", "adjetivo", "kləʊs"],
      ["apologise", "disculparse", "He apologised for being rude.", "verbo", "əˈpɒlədʒaɪz"],
    ]),
    vocabEx("Vocabulario — Los amigos", "Elige la opción correcta.", [
      mc("To have a good relationship with someone is to ___ them.", ["get on with", "fall out with", "argue with"], 0, "get on with."),
      mc("To have an argument and stop being friends is to ___.", ["fall out", "make up", "support"], 0, "fall out."),
      mc("To become friends again after an argument is to ___.", ["make up", "fall out", "argue"], 0, "make up."),
      mc("A friend who is always faithful is ___.", ["loyal", "close", "reliable"], 0, "loyal."),
      mc("To say sorry is to ___.", ["apologise", "argue", "trust"], 0, "apologise."),
      mc("Very good, intimate friends are ___ friends.", ["close", "loyal", "reliable"], 0, "close."),
    ]),

    ...readingParts({
      p1: { title: "Amistad y mensajes", items: [
        mc("Message: 'Sorry we argued. Can we make up? — Sam.'", ["Sam wants to be friends again.", "Sam is still angry.", "Sam moved away."], 0, "'Can we make up?'"),
        mc("Note: 'Thanks for supporting me during a hard time.'", ["Thanking a friend for support.", "Ending a friendship.", "An argument."], 0, "'Thanks for supporting me'."),
        mc("Card: 'To my most loyal friend — happy birthday!'", ["Praising a faithful friend.", "A complaint.", "A goodbye."], 0, "'my most loyal friend'."),
        mc("Text: 'He apologised, so we're fine now.'", ["He said sorry; things are okay.", "They fell out.", "He was rude again."], 0, "'He apologised, so we're fine'."),
        mc("Message: 'I trust you completely — you can tell me anything.'", ["Expressing full trust.", "A warning.", "A secret."], 0, "'I trust you completely'."),
      ] },
      p2text: "FOUR KINDS OF FRIEND\n\nA) The Adventurer — always suggesting exciting plans; great fun, but not always reliable.\nB) The Listener — calm and kind; the one you call when you have a problem.\nC) The Old Friend — you've known them since childhood; you don't speak often, but nothing changes.\nD) The Honest One — always tells you the truth, even when it's hard to hear.",
      p2q: { title: "Emparejar personas y amigos", items: [
        mc("Nadia loves spontaneous, exciting weekends.", ["A", "B", "C", "D"], 0, "The Adventurer."),
        mc("Ben needs someone calm to talk to about a worry.", ["A", "B", "C", "D"], 1, "The Listener."),
        mc("Sara values a friendship that has lasted since childhood.", ["A", "B", "C", "D"], 2, "The Old Friend."),
        mc("Leo wants honest advice, even if it's uncomfortable.", ["A", "B", "C", "D"], 3, "The Honest One."),
        mc("A fun friend who isn't always reliable.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "WHAT MAKES A REAL FRIEND?\n\nWe all have people we call 'friends', but true friendship is rarer and more precious than we sometimes think. Over the years, I've learned that a real friend isn't the person you have the most fun with, or the one with the most in common. It's something deeper.\n\nFirst, a real friend is loyal. When I was going through a difficult time last year, most of my acquaintances disappeared. But my closest friend called me every day. She told me not to give up, and she asked me to phone her whenever I felt low. She never once made me feel like a burden. Second, a real friend is honest. Once, I was about to make a big mistake, and while everyone else just agreed with me, she told me the truth, even though she knew it might upset me. At the time I was annoyed, but later I realised she had saved me from a disaster.\n\nOf course, even the best friends argue and sometimes fall out. What matters is that they are willing to apologise and make up. Friendship isn't about never disagreeing; it's about caring enough to work things out. If you have even one or two friends like that, you are very lucky indeed.",
      p3q: { title: "¿Qué hace a un buen amigo? (texto largo)", items: [
        mc("What does the writer say a real friend isn't?", ["Loyal.", "Just the person you have most fun with.", "Honest."], 1, "'isn't the person you have the most fun with'."),
        mc("What did the closest friend do in a difficult time?", ["Disappeared.", "Called every day and told her not to give up.", "Got angry."], 1, "'called me every day… told me not to give up'."),
        mc("What did the friend do when the writer was about to make a mistake?", ["Agreed.", "Told her the truth.", "Said nothing."], 1, "'she told me the truth'."),
        mc("How did the writer feel about the honesty at first?", ["Grateful.", "Annoyed.", "Happy."], 1, "'At the time I was annoyed'."),
        mc("What matters when friends fall out?", ["Never speaking again.", "Being willing to apologise and make up.", "Winning the argument."], 1, "'willing to apologise and make up'."),
      ] },
      p4text: "THE ARGUMENT\n\nMy best friend and I had been close since we were six years old. (1)___ So when we had a huge argument last summer, it felt like the end of the world.\n\nIt started over something small. She had promised to come to my birthday party, but at the last minute she cancelled. (2)___ I was hurt, and instead of asking her why, I sent an angry message. She replied angrily too, and soon we weren't speaking at all. (3)___ Weeks passed, and I missed her every single day.\n\nFinally, my mum sat me down. She told me not to be so proud, and she asked me to imagine life without my friend. (4)___ That evening, I called her and apologised. It turned out she had cancelled because her grandmother was ill. (5)___ We both cried, and then we laughed. Now I know that no argument is worth losing a real friend.",
      p4options: [
        "We had shared almost every important moment of our lives.", // A -> gap 1
        "She didn't even give me a proper reason.",                 // B -> gap 2
        "Both of us were far too stubborn to say sorry first.",     // C -> gap 3
        "Her words made me see how silly I had been.",              // D -> gap 4
        "I decided I never wanted to see her again.",               // E (extra)
        "I had completely misunderstood the whole situation.",      // F -> gap 5
        "We had actually never met before that day.",               // G (extra)
        "My mum told me to forget about her forever.",              // H (extra)
      ],
      p4q: { title: "La discusión (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: habían compartido todo."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: no dio una razón."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: demasiado tercos para disculparse."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: vio lo tonta que había sido."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: lo había malinterpretado todo."),
      ] },
      p5text: "Good friends are precious. A real friend will always (1)___ you when times are hard, and you can (2)___ them with your secrets. Of course, even close friends sometimes (3)___ out over silly things. When that happens, the important thing is to (4)___ — say sorry — and (5)___ up again. A friendship where nobody is ever willing to (6)___ won't last very long.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["support", "argue", "fall", "misunderstand"], 0, "'support you'."),
        mc("Hueco 2", ["trust", "argue", "fall", "hang"], 0, "'trust them with your secrets'."),
        mc("Hueco 3", ["fall", "make", "get", "reply"], 0, "'fall out'."),
        mc("Hueco 4", ["apologise", "argue", "trust", "mention"], 0, "'apologise — say sorry'."),
        mc("Hueco 5", ["make", "fall", "get", "hang"], 0, "'make up again'."),
        mc("Hueco 6", ["apologise", "argue", "fall", "hang"], 0, "'willing to apologise'."),
      ] },
      p6text: "Hi Sam,\nI had a big argument with my best friend and we stopped speaking. My mum told me (1)___ to be so proud, and she asked me (2)___ imagine life without her. So I called my friend and (3)___ sorry. It turned out she (4)___ cancelled my party because her gran was ill! I had completely (5)___ the situation. Now we've made (6)___ and we're closer than ever. My mum was right — no argument is worth losing a real friend.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["not"], "'told me not to be so proud'."),
        fb("Hueco 2", ["to"], "'asked me to imagine'."),
        fb("Hueco 3", ["said", "apologised"], "'said sorry' / 'apologised'."),
        fb("Hueco 4", ["had"], "'she had cancelled'."),
        fb("Hueco 5", ["misunderstood"], "'completely misunderstood the situation'."),
        fb("Hueco 6", ["up"], "'made up'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a ha discutido con un amigo y te pide consejo. Responde a su email (~100 palabras):\n· dile qué debería hacer para arreglarlo,\n· cuenta una vez que tú te reconciliaste con alguien,\n· dile qué hace, para ti, a un buen amigo.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'What makes a good friend?' con tu opinión y ejemplos.\n· RELATO: empieza con: 'I hadn't spoken to my best friend for weeks.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha a una persona hablando de un club de amistad para nuevos estudiantes y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear information about a friendship club for new students. Welcome to the Friendship Club, which helps new students make friends. We meet every Tuesday at seven o'clock in Room twelve. Each week there's a different activity, such as games, cooking or sports. The club is completely free, but you must sign up online first. Our aim is simple: to help everyone feel welcome and to make at least one new friend. If you're feeling lonely, please just come along. Remember to bring a friendly smile!", [
      fb("The club meets every ___.", ["Tuesday"], "'every Tuesday'."),
      fb("It starts at ___ o'clock.", ["seven", "7"], "'at seven o'clock'."),
      fb("They meet in Room ___.", ["twelve", "12"], "'in Room twelve'."),
      fb("The club is completely ___.", ["free"], "'completely free'."),
      fb("You must ___ up online first.", ["sign"], "'you must sign up online first'."),
    ]),

    ...speakingParts("los amigos y la amistad", { p1: "cómo son tus amigos, cómo los conociste y qué hacéis juntos", p2: "personas pasando tiempo con amigos (una fiesta, un café, un parque)", p3: "qué hacer para ayudar a un amigo/a que se siente solo/a", p4: "la amistad, qué hace bueno a un amigo y cómo resolver las discusiones" }),

    SUMMARY("Resumen del Día 23", [
      "Órdenes: tell + obj + (not) to. Peticiones: ask + obj + (not) to. Consejo: advise + obj + to.",
      "SAY (sin persona / say to me) vs TELL (+ persona: told me).",
      "Vocabulario de amistad. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 24", "Cuenta 3 órdenes o peticiones que alguien te hizo (tell/ask + to). Repasa las flashcards. Mañana: oraciones de relativo (who/which/that/where/whose)."),
  ],
};

// ───────────────────────── DÍA 24 ─────────────────────────
const DAY24 = {
  title: "Día 24 — Oraciones de relativo · Describir personas y lugares",
  description: "Relativas especificativas y explicativas (who/which/that/where/whose). Vocabulario para describir personas. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Unir frases con pronombres relativos y puntuar las explicativas.",
    summary: "Oraciones de relativo; describir personas; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'the man which'.", "'the place where that'.", "duplicar el sujeto: 'the girl who she'."],
    reviewPrompts: ["¿who, which o where para una persona/cosa/lugar?", "¿Cuándo lleva comas la relativa?"],
  },
  items: [
    TEXT("🔁 Repaso: órdenes indirectas. Hoy las ORACIONES DE RELATIVO (who/which/that/where/whose): describir y unir ideas. Vocabulario: DESCRIBIR PERSONAS."),
    GRAMMAR("Oraciones de relativo", `Unen dos frases y dan información sobre un sustantivo:
· WHO → personas: The man who lives next door is a doctor.
· WHICH → cosas/animales: The book which I bought is great.
· THAT → personas o cosas (solo en ESPECIFICATIVAS): The film that we saw…
· WHERE → lugares: The town where I grew up.
· WHOSE → posesión: The girl whose bag was stolen.
· WHEN → tiempo: the day when we met.
⚠️ No repitas el sujeto: ❌ The girl who she… ✅ The girl who…
ESPECIFICATIVAS (necesarias, sin comas): The woman who called is my boss.
EXPLICATIVAS (información extra, CON comas, NO se usa 'that'): My brother, who lives in Rome, is a chef.`),
    WARN("Errores típicos del hispanohablante", "· ❌ The man which lives… → ✅ who lives.\n· ❌ The girl who she is tall → ✅ The girl who is tall.\n· ❌ The city where that I live → ✅ where I live.\n· En explicativas: comas y NO 'that': My mum, who is 60, …"),
    grammarEx("Gramática — Oraciones de relativo", "Completa con el relativo correcto o elige.", [
      fb("The man ___ lives next door is a doctor. (persona)", ["who", "that"], "persona → who/that."),
      fb("The book ___ I bought is great. (cosa)", ["which", "that"], "cosa → which/that."),
      fb("This is the town ___ I was born. (lugar)", ["where"], "lugar → where."),
      fb("She's the girl ___ bag was stolen. (posesión)", ["whose"], "posesión → whose."),
      mc("Choose (correct):", ["The woman who she called me.", "The woman who called me.", "The woman which called me."], 1, "no repetir sujeto; persona → who."),
      mc("Choose (non-defining):", ["My brother who lives in Rome is a chef.", "My brother, who lives in Rome, is a chef.", "My brother, that lives in Rome, is a chef."], 1, "explicativa: comas, no 'that'."),
      fb("Do you remember the day ___ we met? (tiempo)", ["when"], "tiempo → when."),
    ]),
    GRAMMAR("Vocabulario del día — Describir personas", "Léxico para describir personalidad y aspecto (B1)."),
    deck("B1 S5D24 — Describir personas", [
      ["generous", "generoso/a", "She's very generous with her time.", "adjetivo", "ˈdʒenərəs"],
      ["confident", "seguro/a de sí mismo/a", "He's confident but not arrogant.", "adjetivo", "ˈkɒnfɪdənt"],
      ["shy", "tímido/a", "I was very shy as a child.", "adjetivo", "ʃaɪ"],
      ["outgoing", "extrovertido/a", "She's outgoing and friendly.", "adjetivo", "ˌaʊtˈɡəʊɪŋ"],
      ["reliable", "de fiar / responsable", "He's the most reliable person I know.", "adjetivo", "rɪˈlaɪəbl"],
      ["stubborn", "terco/a", "My dad is really stubborn.", "adjetivo", "ˈstʌbən"],
      ["cheerful", "alegre", "She always looks cheerful.", "adjetivo", "ˈtʃɪəfl"],
      ["polite", "educado/a", "He's always polite to everyone.", "adjetivo", "pəˈlaɪt"],
      ["hard-working", "trabajador/a", "She's a hard-working student.", "adjetivo", "ˌhɑːd ˈwɜːkɪŋ"],
      ["sense of humour", "sentido del humor", "He has a great sense of humour.", "colocación", "ˌsens əv ˈhjuːmə"],
    ]),
    vocabEx("Vocabulario — Describir personas", "Elige la opción correcta.", [
      mc("Someone who enjoys meeting new people is ___.", ["outgoing", "shy", "stubborn"], 0, "outgoing."),
      mc("Someone who refuses to change their mind is ___.", ["stubborn", "generous", "cheerful"], 0, "stubborn."),
      mc("Someone who gives a lot to others is ___.", ["generous", "shy", "polite"], 0, "generous."),
      mc("Someone who is often happy and smiling is ___.", ["cheerful", "stubborn", "reliable"], 0, "cheerful."),
      mc("Someone who works a lot is ___.", ["hard-working", "shy", "outgoing"], 0, "hard-working."),
      mc("If someone finds things funny and makes jokes, they have a good ___.", ["sense of humour", "confidence", "manner"], 0, "sense of humour."),
    ]),

    ...readingParts({
      p1: { title: "Personas y descripciones", items: [
        mc("Ad: 'Wanted: a reliable person who can work weekends.'", ["They want someone dependable.", "No weekends.", "Anyone will do."], 0, "'a reliable person who can work weekends'."),
        mc("Note: 'Thanks to the kind stranger whose help I'll never forget.'", ["Thanking a helpful stranger.", "A complaint.", "A warning."], 0, "'whose help I'll never forget'."),
        mc("Text: 'She's the teacher who changed my life.'", ["Praising an influential teacher.", "Criticising a teacher.", "A stranger."], 0, "'the teacher who changed my life'."),
        mc("Sign: 'This is the café where we first met.'", ["A meaningful place for two people.", "A closed café.", "A new café."], 0, "'the café where we first met'."),
        mc("Card: 'To my cheerful, generous grandmother.'", ["Describing a kind, happy grandmother.", "An angry note.", "A goodbye."], 0, "'cheerful, generous grandmother'."),
      ] },
      p2text: "FOUR PEOPLE WHO INSPIRE ME\n\nA) My Grandmother — a woman who grew up with nothing but became a successful doctor.\nB) My Old Teacher — the man who taught me that mistakes are how we learn.\nC) My Best Friend — someone whose kindness makes everyone around her feel special.\nD) A Local Volunteer — a man who spends every weekend helping people he's never even met.",
      p2q: { title: "Emparejar personas y descripciones", items: [
        mc("Nadia admires someone who overcame poverty to succeed.", ["A", "B", "C", "D"], 0, "My Grandmother."),
        mc("Ben values the person who changed how he sees failure.", ["A", "B", "C", "D"], 1, "My Old Teacher."),
        mc("Sara loves a friend whose kindness lifts everyone.", ["A", "B", "C", "D"], 2, "My Best Friend."),
        mc("Leo respects someone who helps strangers for free.", ["A", "B", "C", "D"], 3, "A Local Volunteer."),
        mc("A person who taught an important lesson about mistakes.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE TEACHER WHO BELIEVED IN ME\n\nEveryone remembers one special teacher, and for me it was Mr Hardy, the man who taught me English when I was fifteen. At that age, I was painfully shy, and I was convinced that I had no talent for anything. But Mr Hardy, whose lessons were unlike anyone else's, saw something in me that I couldn't see myself.\n\nWhat made him special wasn't just his knowledge. It was the way he treated us. He created a classroom where nobody was afraid to make a mistake. If you gave a wrong answer, he never laughed; instead, he thanked you for trying. Once, I wrote a short story which I was too embarrassed to show anyone. He read it, and the next day he asked me to stay behind. I was sure I was in trouble. Instead, he told me it was one of the best pieces of writing he had read all year, and he asked me not to give up.\n\nThat single conversation changed everything. For the first time, I believed I could actually be good at something. Years later, I became a writer myself. I often think about Mr Hardy, the teacher who believed in me before I believed in myself. A good teacher, I've learned, doesn't just fill your head with facts — they change the way you see your own future.",
      p3q: { title: "El profesor que creyó en mí (texto largo)", items: [
        mc("What was the writer like at fifteen?", ["Confident.", "Painfully shy.", "Lazy."], 1, "'painfully shy'."),
        mc("What kind of classroom did Mr Hardy create?", ["A strict one.", "One where nobody feared making mistakes.", "A silent one."], 1, "'nobody was afraid to make a mistake'."),
        mc("What did the writer do with the short story at first?", ["Showed everyone.", "Was too embarrassed to show anyone.", "Threw it away."], 1, "'too embarrassed to show anyone'."),
        mc("What did Mr Hardy say about the story?", ["It was poor.", "One of the best he'd read all year.", "Too short."], 1, "'one of the best pieces of writing… all year'."),
        mc("What did the conversation change?", ["Nothing.", "The writer began to believe in themselves.", "The writer left school."], 1, "'I believed I could actually be good at something'."),
      ] },
      p4text: "THE STRANGER WHO HELPED ME\n\nA few years ago, I was travelling alone in a foreign country whose language I didn't speak. (1)___ One evening, I got completely lost, and to make things worse, my phone battery died.\n\nI stood in the street, close to tears. (2)___ Then an elderly woman, who was passing by with her shopping, stopped and looked at me. She couldn't understand a word I said, and I couldn't understand her. (3)___ But somehow, she knew I needed help.\n\nShe took my arm gently and led me through several streets. (4)___ Finally, she stopped outside my hotel, the very place I had been searching for. She smiled, waved away my thanks, and walked off into the night. I never even learned her name. (5)___ Whenever I hear people say the world is full of unkind strangers, I think of her.",
      p4options: [
        "It was the first time I had ever been so far from home.",  // A -> gap 1
        "I had no idea how to get back to my hotel.",               // B -> gap 2
        "We had absolutely no way of communicating with words.",    // C -> gap 3
        "She seemed to know exactly where I needed to go.",         // D -> gap 4
        "I decided to ignore her completely.",                      // E (extra)
        "That kind stranger restored my faith in people.",          // F -> gap 5
        "The woman was actually a famous film star.",               // G (extra)
        "I spoke the language perfectly, of course.",               // H (extra)
      ],
      p4q: { title: "La desconocida que me ayudó (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: primera vez tan lejos de casa."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: no sabía cómo volver."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: sin forma de comunicarse."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: parecía saber adónde ir."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le devolvió la fe en la gente."),
      ] },
      p5text: "The people (1)___ we admire most are often the ones who are kind. My grandmother, (2)___ grew up very poor, is the most generous person I know. My best friend, (3)___ kindness never fails, always supports me. And I'll never forget the teacher (4)___ believed in me at school. These are the people (5)___ have shaped who I am. A person (6)___ real value isn't measured by money, but by how they treat others.",
      p5q: { title: "Huecos con opciones (relativos)", items: [
        mc("Hueco 1", ["who", "which", "where", "whose"], 0, "personas → who."),
        mc("Hueco 2", ["who", "which", "where", "whose"], 0, "'who grew up poor'."),
        mc("Hueco 3", ["whose", "who", "which", "where"], 0, "posesión → whose kindness."),
        mc("Hueco 4", ["who", "which", "where", "whose"], 0, "'the teacher who believed'."),
        mc("Hueco 5", ["who", "which", "where", "when"], 0, "'the people who have shaped'."),
        mc("Hueco 6", ["whose", "who", "which", "where"], 0, "'a person whose real value'."),
      ] },
      p6text: "Hi Sam,\nI want to tell you about my grandmother, (1)___ is the kindest person I know. She grew up in a village (2)___ there was very little money, but she became a nurse. She's the person (3)___ taught me to be generous, and (4)___ advice I still follow today. My grandad, (5)___ passed away last year, was just the same. They're the people (6)___ made me who I am. Do you have someone like that in your life?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["who"], "'my grandmother, who is the kindest'."),
        fb("Hueco 2", ["where"], "'a village where there was little money'."),
        fb("Hueco 3", ["who", "that"], "'the person who taught me'."),
        fb("Hueco 4", ["whose"], "'whose advice I still follow'."),
        fb("Hueco 5", ["who"], "'my grandad, who passed away'."),
        fb("Hueco 6", ["who", "that"], "'the people who made me'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por una persona a la que admiras. Responde a su email (~100 palabras):\n· dile quién es y cómo es (usa relativas: who/whose),\n· cuenta algo que esta persona hizo por ti,\n· pregúntale a quién admira él/ella.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'The qualities of a person I admire' con ejemplos.\n· RELATO: empieza con: 'She was the person who changed my life.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con un joven sobre una persona a la que admira y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young man, Tom, about someone he admires. Interviewer: Tom, who do you admire most? Tom: My old football coach, Mr Reed. Interviewer: What was he like? Tom: He was strict but really fair, and he had a great sense of humour. Interviewer: How did he help you? Tom: I was quite shy, but he was the person who gave me confidence. He always told me not to give up. Interviewer: Can you give an example? Tom: Once I wanted to quit the team, and he asked me to try just one more month. I'm so glad I listened. Interviewer: Are you still in touch? Tom: Yes, I visit him every year. He's the reason I became a coach myself.", [
      mc("Who does Tom admire most?", ["His father.", "His old football coach.", "A famous player."], 1, "'My old football coach, Mr Reed'."),
      mc("What was Mr Reed like?", ["Lazy and rude.", "Strict but fair, with a sense of humour.", "Very shy."], 1, "'strict but really fair… great sense of humour'."),
      mc("How did he help Tom?", ["With money.", "He gave him confidence.", "He did his homework."], 1, "'the person who gave me confidence'."),
      mc("What did the coach ask Tom to do?", ["Quit immediately.", "Try one more month.", "Change teams."], 1, "'asked me to try just one more month'."),
      mc("Why did Tom become a coach?", ["For money.", "Because of Mr Reed.", "By accident."], 1, "'He's the reason I became a coach myself'."),
    ]),

    ...speakingParts("las personas que admiramos", { p1: "cómo eres tú (tu personalidad) y a quién admiras", p2: "personas con distintas personalidades (una persona alegre, tímida, segura)", p3: "qué cualidades buscar en una persona para un premio al 'mejor compañero'", p4: "las cualidades importantes en la gente y quién nos influye en la vida" }),

    SUMMARY("Resumen del Día 24", [
      "Relativos: who (personas), which (cosas), that (ambos, solo especificativas), where (lugar), whose (posesión), when (tiempo).",
      "Especificativas sin comas; explicativas con comas y sin 'that'. No repetir el sujeto.",
      "Vocabulario para describir personas. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 25", "Describe a 3 personas con relativas (who/whose/where). Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 25 ─────────────────────────
const DAY25 = {
  title: "Día 25 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del estilo indirecto y las oraciones de relativo. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 5.",
  pedagogy: {
    objective: "Consolidar el estilo indirecto y las relativas.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 6."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 5 del B1. Consolidas el estilo indirecto (afirmaciones, preguntas, órdenes) y las oraciones de relativo. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 5", `1) Estilo indirecto: backshift (is→was, will→would). SAY vs TELL.
2) Preguntas indirectas: orden afirmativo, sin do/does, sí/no → if/whether.
3) Órdenes/peticiones: tell/ask + obj + (not) to + infinitivo.
4) Relativas: who/which/that/where/whose/when; especificativas vs explicativas (comas).`),
    grammarEx("Repaso mixto de gramática — Semana 5", "Completa o elige.", [
      fb("\"I'm busy.\" → She said she ___ busy.", ["was"], "backshift is→was."),
      mc("Choose:", ["He said me to wait.", "He told me to wait.", "He told to me to wait."], 1, "tell + obj + to."),
      fb("\"Where do you live?\" → He asked me where I ___.", ["lived"], "pregunta indirecta, orden afirmativo."),
      fb("\"Are you coming?\" → She asked ___ I was coming.", ["if", "whether"], "sí/no → if/whether."),
      fb("The man ___ lives next door is a doctor.", ["who", "that"], "persona → who."),
      fb("This is the town ___ I grew up.", ["where"], "lugar → where."),
      fb("She's the girl ___ bag was stolen.", ["whose"], "posesión → whose."),
      mc("Choose (non-defining):", ["My mum who is 60 still works.", "My mum, who is 60, still works.", "My mum, that is 60, still works."], 1, "explicativa: comas, no 'that'."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 5", "Repasa los mazos (noticias, comunicación, amigos, describir personas)."),
    vocabEx("Repaso de vocabulario — Semana 5", "Elige la opción correcta.", [
      mc("The title of a news story:", ["headline", "article", "update"], 0, "headline."),
      mc("To end a phone call:", ["hang up", "reply", "chat"], 0, "hang up."),
      mc("To become friends again after an argument:", ["make up", "fall out", "argue"], 0, "make up."),
      mc("Someone who enjoys meeting new people:", ["outgoing", "shy", "stubborn"], 0, "outgoing."),
      mc("False information presented as news:", ["fake news", "an update", "a report"], 0, "fake news."),
      mc("To say sorry:", ["apologise", "argue", "trust"], 0, "apologise."),
      mc("Talking in person, not online:", ["face-to-face", "voicemail", "message"], 0, "face-to-face."),
      mc("Someone who refuses to change their mind:", ["stubborn", "generous", "cheerful"], 0, "stubborn."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Message: 'Sorry we fell out. Can we make up? — Sam.'", ["Sam wants to be friends again.", "Sam is angry.", "Sam moved."], 0, "'Can we make up?'"),
        mc("Note: 'The interview will be broadcast live tonight.'", ["It's on live tonight.", "It was cancelled.", "It's a recording."], 0, "'broadcast live tonight'."),
        mc("Text: 'She's the friend whose advice I always trust.'", ["Praising a trusted friend.", "A complaint.", "A stranger."], 0, "'whose advice I always trust'."),
        mc("Warning: 'Check the source before you share the news.'", ["Verify news before sharing.", "Share everything.", "No news."], 0, "'Check the source before you share'."),
        mc("Card: 'To the teacher who believed in me.'", ["Thanking a supportive teacher.", "A goodbye.", "A complaint."], 0, "'the teacher who believed in me'."),
      ] },
      p2text: "FOUR PODCASTS FOR TEENAGERS\n\nA) True or False? — a show that explains how to spot fake news and think critically.\nB) Real Talk — honest conversations about friendship, arguments and growing up.\nC) People Who Inspire — interviews with ordinary people who did extraordinary things.\nD) Word Up — a fun language show for anyone who wants to improve their English.",
      p2q: { title: "Emparejar personas y podcasts", items: [
        mc("Nadia wants to learn to tell real news from fake.", ["A", "B", "C", "D"], 0, "True or False?"),
        mc("Ben is struggling with friendships and wants honest advice.", ["A", "B", "C", "D"], 1, "Real Talk."),
        mc("Sara loves inspiring life stories.", ["A", "B", "C", "D"], 2, "People Who Inspire."),
        mc("Leo wants to improve his English in a fun way.", ["A", "B", "C", "D"], 3, "Word Up."),
        mc("A show about spotting fake news.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE POWER OF A KIND WORD\n\nWhen I was at school, I sat next to a boy named Daniel, who almost never spoke. Most people thought he was unfriendly, but I later learned that he was simply painfully shy. One day, our teacher asked us to write about someone we admired. To everyone's surprise, Daniel read out a piece about his older sister, and it was beautiful. When he finished, there was silence. Then a girl at the back said quietly, 'That was amazing.'\n\nI will never forget the look on Daniel's face. It was as if someone had switched on a light inside him. From that day, he slowly began to change. He spoke a little more, smiled a little more, and by the end of the year he had several good friends. Years later, he told me that that single comment had been a turning point in his life. He said he had gone home that day and told his mother that maybe he wasn't so useless after all.\n\nIt cost that girl nothing to say a kind word, and she probably forgot it within minutes. Yet for Daniel, it changed everything. I've never forgotten the lesson. We rarely know how much our small kindnesses might mean to someone else. So if you think something nice about a person, don't keep it to yourself — tell them. You never know whose life you might change.",
      p3q: { title: "El poder de una palabra amable (texto largo)", items: [
        mc("Why did people think Daniel was unfriendly?", ["He was rude.", "He was painfully shy and quiet.", "He was clever."], 1, "'simply painfully shy'."),
        mc("What did Daniel write about?", ["A film.", "His older sister.", "His teacher."], 1, "'a piece about his older sister'."),
        mc("What did the girl at the back say?", ["Nothing.", "'That was amazing.'", "'Sit down.'"], 1, "'That was amazing'."),
        mc("What did Daniel tell his mother that day?", ["He hated school.", "Maybe he wasn't so useless after all.", "He wanted to leave."], 1, "'maybe he wasn't so useless after all'."),
        mc("What is the writer's message?", ["Keep kind thoughts to yourself.", "Tell people your kind thoughts — you may change a life.", "Words don't matter."], 1, "'don't keep it to yourself — tell them'."),
      ] },
      p4text: "THE MESSAGE THAT CHANGED MY MIND\n\nLast year, I nearly gave up learning English. (1)___ I felt I was making no progress at all, and I was ready to quit my evening classes.\n\nOne night, feeling low, I wrote a message to my old teacher, who had moved to another city. (2)___ I told her I wasn't good enough and asked her if I should just stop. Her reply came the next morning, and I've kept it ever since. (3)___ She reminded me that she had once thought exactly the same thing, and that everyone who succeeds has wanted to give up at some point.\n\nHer words gave me the strength to carry on. (4)___ I promised myself I would keep going for just three more months. That was a year ago, and last week I passed my exam. (5)___ Sometimes, the right words at the right moment can make all the difference.",
      p4options: [
        "The lessons had become harder and harder.",                // A -> gap 1
        "I didn't really expect her to reply.",                     // B -> gap 2
        "It was exactly what I needed to hear.",                    // C -> gap 3
        "I decided not to give up after all.",                      // D -> gap 4
        "I deleted the message without reading it.",                // E (extra)
        "That short message completely changed my mind.",           // F -> gap 5
        "I had never actually met the teacher.",                    // G (extra)
        "English is my first language, of course.",                 // H (extra)
      ],
      p4q: { title: "El mensaje que me cambió (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: las clases eran cada vez más difíciles."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: no esperaba respuesta."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: justo lo que necesitaba oír."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: decidió no rendirse."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: el mensaje le cambió la idea."),
      ] },
      p5text: "My old teacher, (1)___ I still write to, once told me something I've never forgotten. She said that I (2)___ never give up, and she asked me (3)___ to be so hard on myself. When I wrote to her last year and asked (4)___ I should quit, she reminded me that everyone (5)___ succeeds has wanted to stop at some point. It was the message (6)___ changed my mind. I'm so glad I listened.",
      p5q: { title: "Huecos con opciones (relativos/estilo indirecto)", items: [
        mc("Hueco 1", ["who", "which", "where", "whose"], 0, "'my teacher, who I still write to'."),
        mc("Hueco 2", ["should", "must", "will", "am"], 0, "'I should never give up'."),
        mc("Hueco 3", ["not", "don't", "no", "never"], 0, "'asked me not to be so hard'."),
        mc("Hueco 4", ["if", "that", "what", "which"], 0, "'asked if I should quit'."),
        mc("Hueco 5", ["who", "which", "whose", "where"], 0, "'everyone who succeeds'."),
        mc("Hueco 6", ["that", "who", "where", "whose"], 0, "'the message that changed my mind'."),
      ] },
      p6text: "Hi Sam,\nI nearly gave up English last year! I wrote to my old teacher, (1)___ had moved away, and told her I wasn't good enough. I asked her (2)___ I should stop. She replied that she (3)___ once felt the same, and she told me (4)___ to give up. She said everyone (5)___ succeeds wants to quit sometimes. It was exactly (6)___ I needed to hear. Last week I passed my exam! I'm so glad I didn't give up.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["who"], "'my teacher, who had moved away'."),
        fb("Hueco 2", ["if", "whether"], "'asked her if I should stop'."),
        fb("Hueco 3", ["had"], "'she had once felt the same'."),
        fb("Hueco 4", ["not"], "'told me not to give up'."),
        fb("Hueco 5", ["who", "that"], "'everyone who succeeds'."),
        fb("Hueco 6", ["what"], "'exactly what I needed to hear'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere dejar de estudiar algo porque cree que no mejora. Responde a su email (~100 palabras):\n· dile qué piensas y anímale,\n· cuenta una vez que tú estuviste a punto de rendirte,\n· dale un consejo para seguir.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why we should never give up too soon' con tu opinión.\n· RELATO: empieza con: 'The message arrived just when I was about to give up.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: What did your teacher say? Man: She told me not to give up. Two. Man: Is that news true? Woman: No, my brother said it was fake. Three. Woman: Why aren't you speaking to Sam? Man: We fell out, but we'll make up soon. Four. Man: What's your grandmother like? Woman: She's the most generous person I know. Five. Man: Did she reply to your message? Woman: Yes, she asked me to call her back. Six. Woman: How do you describe your best friend? Man: Loyal and always cheerful.", [
      mc("1. What did the teacher say?", ["To work harder.", "Not to give up.", "To stop."], 1, "'told me not to give up'."),
      mc("2. Is the news true?", ["Yes.", "No, it's fake.", "Partly."], 1, "'it was fake'."),
      mc("3. What will happen with Sam?", ["Nothing.", "They'll make up soon.", "They'll never speak."], 1, "'we'll make up soon'."),
      mc("4. What is the grandmother like?", ["Strict.", "The most generous person he knows.", "Shy."], 1, "'the most generous person I know'."),
      mc("5. What did she ask him to do?", ["Send a letter.", "Call her back.", "Nothing."], 1, "'asked me to call her back'."),
      mc("6. How does the man describe his best friend?", ["Rude.", "Loyal and cheerful.", "Stubborn."], 1, "'Loyal and always cheerful'."),
    ]),

    ...speakingParts("la comunicación, los amigos y las personas que admiramos", { p1: "cómo te comunicas, cómo son tus amigos y a quién admiras", p2: "personas comunicándose, con amigos o ayudando a otros", p3: "cómo animar a un amigo/a que quiere rendirse con sus estudios", p4: "la amistad, la comunicación y la influencia de las personas en nuestra vida" }),

    SUMMARY("Resumen de la Semana 5 (B1)", [
      "Dominas el estilo indirecto (afirmaciones, preguntas, órdenes) y las oraciones de relativo.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los condicionales (segundo y tercero) y los deseos (wish).",
    ]),
    INFO("Mini-simulacro de la Semana 5", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 6."),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "Comunicación e información",
  description: "Estilo indirecto (afirmaciones, preguntas, órdenes) y oraciones de relativo. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
