/**
 * B2 First · Semana 1 — "Personalidad y relaciones".
 * Gramática: repaso de tiempos a nivel B2 (present perfect simple vs continuous,
 * tiempos de la narración, verbos de estado, hábitos). Cada día, las 4 destrezas
 * con el formato real del B2 (Reading & Use of English de 7 partes).
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, useCloze, openCloze, wordFormation, keyword, readingMC, gappedText, multipleMatching,
  writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const uoe = ({ p1, p2, p3, p4, p5, p6, p7 }) => [
  READING_HEAD,
  useCloze(p1.title, p1.text, p1.q),
  openCloze(p2.title, p2.text, p2.q),
  wordFormation(p3.title, p3.text, p3.items),
  keyword(p4.title, p4.items),
  readingMC(p5.title, p5.text, p5.q),
  gappedText(p6.title, p6.text, p6.options, p6.q),
  multipleMatching(p7.title, p7.text, p7.q),
];

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde por el micrófono con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: el examinador te hace preguntas personales (${p1})`, "responder con detalle y razones", "personally, in my experience, what I really enjoy is, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos durante ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}. Habla ~1 minuto: compáralas y especula`, "comparar y especular", "both photos show, whereas, they might be … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Habla con el examinador sobre las opciones y luego decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y tomar una decisión`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas más abstractas dando opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 1 ─────────────────────────
const DAY1 = {
  title: "Día 1 — Present perfect simple vs continuous · La personalidad",
  description: "Diferencia entre present perfect simple y continuous. Vocabulario de personalidad. Las 4 destrezas con el formato real del B2; Listening P1.",
  pedagogy: {
    objective: "Distinguir el present perfect simple (resultado) del continuous (proceso/duración).",
    summary: "Present perfect simple vs continuous; personalidad; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'I have been knowing'.", "'How long are you living here?'.", "continuous con verbos de estado."],
    reviewPrompts: ["¿Continuous con 'know'?", "¿'I've read' vs 'I've been reading'?"],
  },
  items: [
    TEXT("👋 ¡Bienvenido/a al B2 First! Este nivel exige respuestas más largas, vocabulario más rico y precisión gramatical. Hoy: present perfect SIMPLE vs CONTINUOUS. Vocabulario: la PERSONALIDAD."),
    GRAMMAR("Present perfect: simple vs continuous", `PRESENT PERFECT SIMPLE (have + participio): resultado / algo terminado / cantidad / experiencia.
· I've written three emails. (resultado, cuántos) · She's read that book. (terminado) · Have you ever been abroad? (experiencia)
PRESENT PERFECT CONTINUOUS (have been + -ing): proceso, duración de una actividad, quizá inacabada, o con efecto visible ahora.
· I've been writing emails all morning. (actividad, duración) · You look tired — have you been running? (efecto visible)
DURACIÓN con for/since: acción larga → continuous (I've been living here for years); estado → simple (I've known her for years).
⚠️ VERBOS DE ESTADO (know, believe, understand, own, like, be) NO van en continuous: ❌ I've been knowing → ✅ I've known.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I have been knowing her → ✅ I have known her.\n· ❌ How long are you living here? → ✅ How long have you been living here?\n· ❌ I've written all morning (actividad) → ✅ I've been writing all morning.\n· 'for' + periodo, 'since' + momento; nunca 'since two years'."),
    grammarEx("Use of English — Present perfect simple vs continuous", "Elige o completa con la forma correcta.", [
      fb("I ___ (write) three reports today. (resultado/cantidad)", ["have written", "'ve written"], "resultado → simple."),
      fb("I'm exhausted — I ___ (write) reports all day. (actividad)", ["have been writing", "'ve been writing"], "duración → continuous."),
      mc("Choose:", ["I've been knowing her for years.", "I've known her for years.", "I know her for years."], 1, "estado → simple."),
      fb("How long ___ you ___ (learn) English? (duración)", ["have", "been learning"], "continuous."),
      mc("Choose:", ["You look tired. Have you been running?", "You look tired. Have you run?", "You look tired. Are you running?"], 0, "efecto visible → continuous."),
      fb("She ___ (read) that novel — she finished it yesterday.", ["has read", "'s read"], "terminado → simple."),
      mc("Choose:", ["We've been living here since 2019.", "We've lived here since two years.", "We're living here since 2019."], 0, "'since' + momento; actividad larga → continuous."),
    ]),
    GRAMMAR("Vocabulario del día — La personalidad", "Adjetivos de carácter de nivel B2."),
    deck("B2 S1D1 — La personalidad", [
      ["easy-going", "de trato fácil / tranquilo", "He's so easy-going; nothing bothers him.", "adjetivo", "ˌiːzi ˈɡəʊɪŋ"],
      ["outgoing", "extrovertido/a", "She's outgoing and makes friends easily.", "adjetivo", "ˌaʊtˈɡəʊɪŋ"],
      ["reserved", "reservado/a", "He's quite reserved with strangers.", "adjetivo", "rɪˈzɜːvd"],
      ["stubborn", "terco/a", "She's too stubborn to admit she's wrong.", "adjetivo", "ˈstʌbən"],
      ["reliable", "de fiar / formal", "You can count on him; he's very reliable.", "adjetivo", "rɪˈlaɪəbl"],
      ["self-confident", "seguro/a de sí mismo/a", "A good leader is self-confident.", "adjetivo", "ˌself ˈkɒnfɪdənt"],
      ["considerate", "atento/a / considerado/a", "It was considerate of you to call.", "adjetivo", "kənˈsɪdərət"],
      ["ambitious", "ambicioso/a", "She's ambitious and wants to run the company.", "adjetivo", "æmˈbɪʃəs"],
      ["down-to-earth", "con los pies en la tierra", "Despite her fame, she's very down-to-earth.", "colocación", "ˌdaʊn tu ˈɜːθ"],
      ["short-tempered", "de mal genio", "He's short-tempered and gets angry quickly.", "adjetivo", "ˌʃɔːt ˈtempəd"],
    ]),
    vocabEx("Vocabulario — La personalidad", "Elige la opción correcta.", [
      mc("Someone relaxed who doesn't worry much is ___.", ["easy-going", "short-tempered", "stubborn"], 0, "easy-going."),
      mc("Someone you can always depend on is ___.", ["reliable", "reserved", "ambitious"], 0, "reliable."),
      mc("Someone who refuses to change their mind is ___.", ["stubborn", "considerate", "outgoing"], 0, "stubborn."),
      mc("Someone who thinks about others' feelings is ___.", ["considerate", "short-tempered", "reserved"], 0, "considerate."),
      mc("Someone practical and sensible is ___.", ["down-to-earth", "ambitious", "stubborn"], 0, "down-to-earth."),
      mc("Someone who gets angry easily is ___.", ["short-tempered", "easy-going", "reliable"], 0, "short-tempered."),
    ]),

    ...uoe({
      p1: {
        title: "A difficult flatmate",
        text: "Sharing a flat can be a real test of character. My first flatmate seemed perfectly (1)___ when I met her — relaxed, friendly and easy to talk to. Within weeks, however, I had (2)___ that first impressions can be misleading. She turned out to be extremely (3)___, and would never admit she was wrong, even about tiny things. Worse, she had a (4)___ temper and would lose it over nothing. I tried hard to be (5)___ and to see her point of view, but it wasn't easy. In the end, I (6)___ up the courage to talk to her honestly. To my surprise, she (7)___ that she'd been under a lot of stress. Since that conversation, we've (8)___ on much better.",
        q: [
          mc("(1)", ["easy-going", "easy-doing", "easy-minded", "easy-tempered"], 0, "colocación: easy-going."),
          mc("(2)", ["realised", "reminded", "recognised", "remarked"], 0, "'realised that…'"),
          mc("(3)", ["stubborn", "reliable", "considerate", "reserved"], 0, "never admit wrong → stubborn."),
          mc("(4)", ["short", "quick", "small", "low"], 0, "'short temper'."),
          mc("(5)", ["considerate", "considerable", "consider", "consideration"], 0, "adjetivo → considerate."),
          mc("(6)", ["plucked", "took", "made", "got"], 0, "'plucked up the courage' (o got up)."),
          mc("(7)", ["admitted", "denied", "refused", "promised"], 0, "'admitted that…'"),
          mc("(8)", ["got", "made", "come", "kept"], 0, "'got on much better'."),
        ],
      },
      p2: {
        title: "How well do you know yourself?",
        text: "Most of us believe we know ourselves well, but psychologists are not (1)___ sure. Studies have shown (2)___ our friends can often predict our behaviour more accurately (3)___ we can ourselves. This is because we tend to see (4)___ as we would like to be, rather than as we really are. For example, someone who has (5)___ losing their temper for years may still insist they are a calm person. If you (6)___ really like to understand your own character, the best thing to do is to ask people (7)___ you trust to be honest. It can be uncomfortable, but you (8)___ well learn something surprising about yourself.",
        q: [
          fb("(1)", ["so", "as", "too"], "'not so sure'."),
          fb("(2)", ["that"], "'shown that'."),
          fb("(3)", ["than"], "'more accurately than'."),
          fb("(4)", ["ourselves"], "reflexivo → ourselves."),
          fb("(5)", ["been"], "'has been losing their temper' (present perfect continuous)."),
          fb("(6)", ["would", "'d"], "'if you would really like'."),
          fb("(7)", ["who", "whom"], "'people who you trust'."),
          fb("(8)", ["may", "might", "could"], "'you may well learn' (probabilidad)."),
        ],
      },
      p3: {
        title: "The science of first impressions",
        text: "First impressions are formed with astonishing (1)___. Within a fraction of a second, our brains make a (2)___ about whether a stranger is trustworthy. Although these snap judgements feel (3)___, research suggests they are often inaccurate. A person's (4)___ appearance tells us very little about their true character. Someone with a serious expression may in fact be extremely (5)___ and kind, while a (6)___ smile can hide all sorts of things. The (7)___ of relying on first impressions is that we may treat people unfairly. It is far (8)___ to keep an open mind and let people show us who they really are.",
        items: [
          { root: "quick", accepted: ["quickness"], hint: "sustantivo de quick." },
          { root: "decide", accepted: ["decision"], hint: "sustantivo de decide." },
          { root: "convince", accepted: ["convincing"], hint: "adjetivo → convincing." },
          { root: "physics", accepted: ["physical"], hint: "adjetivo → physical." },
          { root: "consider", accepted: ["considerate"], hint: "adjetivo (atento) → considerate." },
          { root: "friend", accepted: ["friendly"], hint: "adjetivo → friendly." },
          { root: "danger", accepted: ["danger"], hint: "'The danger of…' (sustantivo)." },
          { root: "wise", accepted: ["wiser"], hint: "comparativo → wiser." },
        ],
      },
      p4: {
        title: "Transformaciones — present perfect",
        items: [
          { s1: "I started learning the guitar three years ago.", key: "BEEN", s2: "I ___ the guitar for three years.", accepted: ["have been learning", "'ve been learning"], explanation: "for + duración → present perfect continuous." },
          { s1: "This is the first time I've eaten sushi.", key: "NEVER", s2: "I ___ sushi before.", accepted: ["have never eaten", "'ve never eaten"], explanation: "first time → present perfect simple negativo." },
          { s1: "She began working here in 2018.", key: "SINCE", s2: "She ___ here since 2018.", accepted: ["has worked", "has been working", "'s worked", "'s been working"], explanation: "since + momento → present perfect." },
          { s1: "It's ages since I last saw him.", key: "FOR", s2: "I ___ him for ages.", accepted: ["haven't seen"], explanation: "It's ages since → haven't … for ages." },
          { s1: "Your eyes are red — is that because you were crying?", key: "BEEN", s2: "Your eyes are red — ___ crying?", accepted: ["have you been"], explanation: "efecto visible → present perfect continuous." },
          { s1: "I don't know her very well; we only met last week.", key: "KNOWN", s2: "I ___ her for very long.", accepted: ["haven't known"], explanation: "estado → present perfect simple." },
        ],
      },
      p5: {
        title: "Are we born with our personality?",
        text: "Are we born with our personality, or is it shaped by our experiences? This question has fascinated thinkers for centuries, and it remains one of the most hotly debated topics in psychology today. For a long time, the popular view was that a baby's mind is a 'blank slate', and that everything about our character — whether we are shy or outgoing, calm or short-tempered — is learned from the world around us. Recently, however, the evidence has been pointing in a more complicated direction.\n\nStudies of identical twins have been particularly revealing. When twins are separated at birth and raised in completely different families, we might expect them to develop very different personalities. Astonishingly, this is often not the case. Such twins frequently turn out to share not only similar temperaments but also strikingly similar habits, tastes and even careers. This strongly suggests that a significant part of who we are is written into our genes before we are even born.\n\nAnd yet, it would be a serious mistake to conclude that our personality is simply fixed at birth. The same research shows that identical twins are never completely identical in character, which means the environment must play a powerful role too. Our upbringing, our friends, the culture we grow up in and the choices we make all leave their mark. Most scientists now agree that the old question — nature or nurture? — is the wrong one. It is not a competition between the two. Rather, our personality emerges from a lifelong conversation between the genes we inherit and the life we lead. Perhaps the most encouraging conclusion is this: while we cannot change the hand we were dealt, we retain a real power to shape the people we become.",
        q: [
          mc("What was the traditional 'blank slate' view?", ["Personality is genetic.", "Character is entirely learned from the world.", "Twins are identical.", "Babies have no mind."], 1, "'everything about our character… is learned from the world'."),
          mc("What did twin studies surprisingly show?", ["Separated twins are completely different.", "Separated twins often share temperaments, habits and even careers.", "Twins hate each other.", "Genes don't matter."], 1, "'similar temperaments… habits, tastes and even careers'."),
          mc("What does the fact that twins are 'never completely identical' suggest?", ["Genes are everything.", "The environment plays a powerful role too.", "Twins are unrelated.", "Personality is fixed."], 1, "'the environment must play a powerful role too'."),
          mc("What do most scientists now think about 'nature or nurture'?", ["Nature always wins.", "It's the wrong question; both interact.", "Nurture always wins.", "Neither matters."], 1, "'the old question… is the wrong one… not a competition'."),
          mc("The writer's overall attitude could best be described as:", ["pessimistic", "balanced and encouraging", "angry", "uninterested"], 1, "'the most encouraging conclusion…'"),
          mc("What does 'the hand we were dealt' refer to?", ["A card game.", "The genes and circumstances we were born with.", "Our friends.", "Our job."], 1, "metáfora: lo que nos toca al nacer."),
        ],
      },
      p6: {
        title: "The shyest boy in the class",
        text: "When I first met Daniel, he was the shyest boy in our class. (1)___ For the first few months of the school year, I don't think I heard him speak more than a handful of words.\n\nMost of the other children assumed he was simply unfriendly. (2)___ In reality, as I would later discover, he was desperate to make friends but terrified of being laughed at. (3)___ The turning point came during a class project, when the two of us were paired together by chance.\n\nWorking one-to-one, away from the crowd, Daniel gradually began to relax. (4)___ To my astonishment, this 'silent' boy turned out to be funny, clever and full of surprising opinions. (5)___ By the end of the term, he had made several good friends and even volunteered to speak in front of the class.\n\nI often think about Daniel when I meet someone quiet. (6)___ His story taught me that behind a shy exterior there is often a whole world waiting to be discovered.",
        options: [
          "He would sit alone at the back, staring at his desk.",       // A -> gap 1
          "They kept their distance, and so his loneliness grew.",       // B -> gap 2
          "That single fear had shaped his entire behaviour.",           // C -> gap 3
          "Little by little, he started to share his ideas.",            // D -> gap 4
          "It was as though a completely different person had emerged.", // E -> gap 5
          "I have never again judged a person by how much they talk.",   // F -> gap 6
          "He had always been the most popular boy in the school.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: se sentaba solo al fondo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: guardaban distancia; crecía su soledad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ese miedo había moldeado su conducta."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: poco a poco compartía sus ideas."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: como si surgiera otra persona."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: nunca volvió a juzgar por lo que se habla."),
        ],
      },
      p7: {
        title: "Four people describe a close friend",
        text: "Read what four people say about a close friendship.\n\nA) NADIA: My best friend Sara and I are total opposites. She's incredibly outgoing and I'm quite reserved, but somehow it works. She pushes me to try new things, and I keep her feet on the ground when she gets carried away. We've been friends since primary school, and although we now live in different cities, we speak every week.\n\nB) TOM: I met Chris at university, and at first I couldn't stand him — I found him arrogant. But when my father fell ill, Chris was the one who dropped everything to support me. I realised I'd completely misjudged him. He's the most reliable person I know; he has never once let me down.\n\nC) PRIYA: My friend Ella and I fell out badly a few years ago over something silly, and we didn't speak for months. I was too stubborn to apologise first, and so was she. In the end, her mother made us meet up. Within minutes we were laughing again. Now we make a real effort never to let small things come between us.\n\nD) LEO: What I value most about my friend Sam is that he's completely honest with me, even when it's hard to hear. Once, he told me I was being selfish, and although I was furious at the time, he was right. A friend who only ever agrees with you isn't much use. Sam has made me a better person.",
        q: [
          mc("Who values a friend's honesty, even when it hurts?", ["A", "B", "C", "D"], 3, "Leo: 'completely honest with me, even when it's hard'."),
          mc("Who is very different in character from their friend?", ["A", "B", "C", "D"], 0, "Nadia: 'total opposites'."),
          mc("Who once had a poor first impression of their friend?", ["A", "B", "C", "D"], 1, "Tom: 'I couldn't stand him… I'd misjudged him'."),
          mc("Who stopped speaking to their friend for a while?", ["A", "B", "C", "D"], 2, "Priya: 'didn't speak for months'."),
          mc("Who was helped by their friend during a family difficulty?", ["A", "B", "C", "D"], 1, "Tom: 'when my father fell ill'."),
          mc("Who admits to being too proud to say sorry?", ["A", "B", "C", "D"], 2, "Priya: 'too stubborn to apologise first'."),
          mc("Who keeps in touch despite living far away?", ["A", "B", "C", "D"], 0, "Nadia: 'different cities… speak every week'."),
          mc("Who was told an uncomfortable truth about themselves?", ["A", "B", "C", "D"], 3, "Leo: 'told me I was being selfish'."),
          mc("Who needed the help of a third person to make up?", ["A", "B", "C", "D"], 2, "Priya: 'her mother made us meet up'."),
          mc("Who balances out their friend's personality?", ["A", "B", "C", "D"], 0, "Nadia: 'I keep her feet on the ground'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Our personality is more important than our appearance.'\nComenta estos dos aspectos y añade uno propio:\n1. relationships (relaciones)\n2. work (el trabajo)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos; usa párrafos y conectores.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO para una revista: 'The person who has influenced me most' — descríbelo/a y explica por qué.\n· EMAIL a un amigo/a inglés/a que va a conocer a tu familia: descríbele el carácter de dos miembros y dale algún consejo.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: Honestly, I never know what mood he'll be in — one minute he's laughing, the next he's shouting. Two. Man: What I admire about her is that whatever happens, she stays completely calm. Three. Woman: He promised he'd help, and he actually turned up an hour early. You can always count on him. Four. Man: I've been trying to talk to her all week, but she just keeps everything to herself. Five. Woman: She refuses to change her mind, even when she's clearly wrong. It drives me mad. Six. Man: Despite being famous, she's so normal — she still does her own shopping. Seven. Woman: He's determined to be manager by thirty, and I think he'll do it. Eight. Man: It was so thoughtful of them to remember my birthday.", [
      mc("1. How is the man described?", ["Calm.", "Moody / short-tempered.", "Reliable."], 1, "'laughing, then shouting' → moody."),
      mc("2. What does the man admire about her?", ["Her ambition.", "That she stays calm.", "Her honesty."], 1, "'she stays completely calm'."),
      mc("3. What is the man like?", ["Unreliable.", "Reliable — you can count on him.", "Reserved."], 1, "'You can always count on him'."),
      mc("4. What is the woman's problem with her?", ["She talks too much.", "She's very reserved / keeps things to herself.", "She's rude."], 1, "'keeps everything to herself'."),
      mc("5. How is the person described?", ["Easy-going.", "Stubborn.", "Considerate."], 1, "'refuses to change her mind'."),
      mc("6. What is the famous woman like?", ["Arrogant.", "Down-to-earth.", "Short-tempered."], 1, "'so normal… does her own shopping'."),
      mc("7. What word best describes the man?", ["Lazy.", "Ambitious.", "Reserved."], 1, "'determined to be manager by thirty'."),
      mc("8. How did the man feel about them?", ["Annoyed.", "Grateful — they were considerate.", "Bored."], 1, "'so thoughtful… remember my birthday'."),
    ]),

    ...speakingParts({ p1: "cómo te describirías, qué valoras en un amigo/a y cómo has cambiado con los años", p2: "personas socializando (una fiesta y una conversación tranquila entre dos): compáralas y di cómo crees que se sienten", p3: "las cualidades más importantes en un amigo (honestidad, sentido del humor, lealtad, generosidad, saber escuchar): comentadlas y elegid la más importante", p4: "la amistad y la personalidad: si la gente cambia de carácter, si los opuestos se atraen y qué hace que una amistad dure" }),

    SUMMARY("Resumen del Día 1", [
      "Present perfect SIMPLE = resultado/cantidad/experiencia; CONTINUOUS = proceso/duración/efecto visible.",
      "Verbos de estado (know, believe…) no van en continuous. for + periodo / since + momento.",
      "Vocabulario de personalidad. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 2", "Escribe 3 frases con present perfect simple y 3 con continuous sobre ti. Repasa las flashcards. Mañana: los tiempos de la narración."),
  ],
};

// ───────────────────────── DÍA 2 ─────────────────────────
const DAY2 = {
  title: "Día 2 — Los tiempos de la narración · Las relaciones",
  description: "Past simple, continuous, perfect y perfect continuous en la narración. Vocabulario de relaciones. Las 4 destrezas con el formato real del B2; Listening P2.",
  pedagogy: {
    objective: "Narrar con precisión combinando los cuatro tiempos del pasado.",
    summary: "Tiempos de la narración; relaciones; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'I was seeing' (acción puntual).", "olvidar past perfect para lo anterior.", "'for/since' con past perfect."],
    reviewPrompts: ["¿Cuándo usas past perfect?", "¿Past continuous vs past perfect continuous?"],
  },
  items: [
    TEXT("🔁 Repaso: present perfect. Hoy los TIEMPOS DE LA NARRACIÓN: contar historias con precisión. Vocabulario: las RELACIONES."),
    GRAMMAR("Los tiempos de la narración", `· PAST SIMPLE: acciones principales, en secuencia: I opened the door, walked in and sat down.
· PAST CONTINUOUS: escena de fondo / acción en curso interrumpida: The sun was shining. I was cooking when the phone rang.
· PAST PERFECT (had + participio): algo ANTERIOR a otro momento pasado: When I arrived, they had already left.
· PAST PERFECT CONTINUOUS (had been + -ing): duración de una actividad ANTERIOR y su efecto: She was exhausted; she had been working all night.
Conectores narrativos: while, as, by the time, no sooner … than, hardly … when, as soon as.
⚠️ Con verbos de estado usa past simple/perfect, no continuous.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I was seeing a film when… (puntual) → normal: 'I was watching'.\n· ❌ When I arrived, they left (antes) → ✅ they had left.\n· ❌ I had been knowing → ✅ I had known.\n· 'by the time' + past perfect: By the time we arrived, it had started."),
    grammarEx("Use of English — Tiempos de la narración", "Completa con el tiempo correcto.", [
      fb("The sun ___ (shine) and the birds ___ (sing). (fondo)", ["was shining", "were singing"], "past continuous."),
      fb("I ___ (cook) dinner when the phone ___ (ring).", ["was cooking", "rang"], "continuous interrumpido por simple."),
      fb("When we arrived, the film ___ already ___ (start).", ["had", "started"], "past perfect."),
      fb("She was exhausted because she ___ ___ (work) all night.", ["had been working"], "past perfect continuous."),
      fb("By the time I got there, everyone ___ (leave).", ["had left"], "by the time + past perfect."),
      mc("Choose:", ["No sooner had I sat down than the phone rang.", "No sooner I sat down than the phone rang.", "No sooner did I sit down than the phone rang."], 0, "inversión: No sooner had…"),
      fb("They ___ (know) each other for years before they married.", ["had known"], "estado → past perfect."),
    ]),
    GRAMMAR("Vocabulario del día — Las relaciones", "Léxico de relaciones (B2)."),
    deck("B2 S1D2 — Las relaciones", [
      ["get on (well) with", "llevarse bien con", "I get on really well with my sister.", "phrasal verb", "ɡet ˈɒn wɪð"],
      ["fall out (with)", "pelearse / enemistarse", "They fell out over money.", "phrasal verb", "fɔːl ˈaʊt"],
      ["make up", "reconciliarse", "We argued but soon made up.", "phrasal verb", "meɪk ˈʌp"],
      ["have a lot in common", "tener mucho en común", "We have a lot in common.", "colocación", "hæv ə lɒt ɪn ˈkɒmən"],
      ["close-knit", "muy unido/a (familia/grupo)", "We're a close-knit family.", "adjetivo", "ˌkləʊs ˈnɪt"],
      ["look up to", "admirar / tener como referente", "I've always looked up to my mother.", "phrasal verb", "lʊk ˈʌp tu"],
      ["take after", "parecerse a (familiar)", "She takes after her father.", "phrasal verb", "teɪk ˈɑːftə"],
      ["supportive", "que apoya / comprensivo", "My partner is very supportive.", "adjetivo", "səˈpɔːtɪv"],
      ["mutual", "mutuo/a", "It was based on mutual respect.", "adjetivo", "ˈmjuːtʃuəl"],
      ["drift apart", "distanciarse", "Old friends often drift apart.", "phrasal verb", "drɪft əˈpɑːt"],
    ]),
    vocabEx("Vocabulario — Las relaciones", "Elige la opción correcta.", [
      mc("To slowly become less close to someone is to ___.", ["drift apart", "make up", "look up to"], 0, "drift apart."),
      mc("To resemble an older relative is to ___ them.", ["take after", "get on with", "fall out with"], 0, "take after."),
      mc("A family that is very close is ___.", ["close-knit", "mutual", "supportive"], 0, "close-knit."),
      mc("To admire and respect someone is to ___ them.", ["look up to", "fall out with", "take after"], 0, "look up to."),
      mc("Respect felt by both people is ___ respect.", ["mutual", "supportive", "close-knit"], 0, "mutual."),
      mc("To become friends again after an argument is to ___.", ["make up", "fall out", "drift apart"], 0, "make up."),
    ]),

    ...uoe({
      p1: {
        title: "How we met",
        text: "People love to tell the story of how they met their closest friends. In my case, it happened entirely by (1)___. I was standing at a bus stop in the pouring rain, having (2)___ missed my bus, when a stranger offered to share her umbrella. We (3)___ up talking for the whole journey, and quickly discovered that we had a huge amount in (4)___. Over the following months, our friendship (5)___ steadily. What began as a chance encounter (6)___ into one of the most important relationships of my life. Twenty years later, we still (7)___ on brilliantly, and we often (8)___ back and laugh about that rainy afternoon.",
        q: [
          mc("(1)", ["accident", "chance", "mistake", "luck"], 1, "'by chance'."),
          mc("(2)", ["just", "yet", "still", "already"], 0, "'having just missed'."),
          mc("(3)", ["ended", "finished", "closed", "stopped"], 0, "'ended up talking'."),
          mc("(4)", ["common", "general", "usual", "ordinary"], 0, "'a lot in common'."),
          mc("(5)", ["grew", "raised", "rose", "climbed"], 0, "'grew steadily'."),
          mc("(6)", ["turned", "changed", "became", "developed"], 0, "'turned into'."),
          mc("(7)", ["get", "make", "come", "take"], 0, "'get on brilliantly'."),
          mc("(8)", ["think", "look", "get", "turn"], 1, "'look back and laugh'."),
        ],
      },
      p2: {
        title: "Family resemblances",
        text: "People often say that I take (1)___ my grandmother, and the older I get, the (2)___ I see it myself. It is not only that we look alike; we seem to share the same sense of humour and the same stubborn streak. When I was younger, I found the comparison annoying, but now I take (3)___ as a compliment, because she is someone I have always looked up (4)___. Interestingly, my brother is completely different — you (5)___ hardly believe we come from the same family. He is calm (6)___ I am excitable, and reserved where I am outgoing. And (7)___ our differences, we have always been very close. I suppose that is what family is: a group of people who could (8)___ be more different, yet belong together.",
        q: [
          fb("(1)", ["after"], "'take after my grandmother'."),
          fb("(2)", ["more"], "'the older… the more' (comparativo doble)."),
          fb("(3)", ["it"], "'take it as a compliment'."),
          fb("(4)", ["to"], "'looked up to'."),
          fb("(5)", ["can", "could", "would"], "'you can hardly believe'."),
          fb("(6)", ["where", "while", "whereas"], "'calm where/while I am excitable' (contraste)." ),
          fb("(7)", ["despite"], "'despite our differences'."),
          fb("(8)", ["not"], "'could not be more different'."),
        ],
      },
      p3: {
        title: "The secret of a lasting relationship",
        text: "What makes a relationship last? Psychologists who study long-term couples have reached some surprising (1)___. It turns out that the (2)___ of a relationship depends far less on romantic passion than most people imagine. Couples who stay together tend to treat each other with (3)___ kindness in small, everyday moments. Grand romantic gestures are (4)___ nice, but they matter far less than the ability to be genuinely (5)___ when your partner has a bad day. Another key factor is the (6)___ to argue well: happy couples still disagree, but they do so with respect. Perhaps the most (7)___ finding of all is that a good sense of humour, and the willingness to (8)___ each other, may be the strongest glue of all.",
        items: [
          { root: "conclude", accepted: ["conclusions"], hint: "sustantivo plural." },
          { root: "survive", accepted: ["survival"], hint: "sustantivo → survival." },
          { root: "constant", accepted: ["constant"], hint: "adjetivo (igual) → constant." },
          { root: "doubt", accepted: ["undoubtedly"], hint: "adverbio → undoubtedly." },
          { root: "support", accepted: ["supportive"], hint: "adjetivo → supportive." },
          { root: "able", accepted: ["ability"], hint: "sustantivo → ability." },
          { root: "surprise", accepted: ["surprising"], hint: "adjetivo → surprising." },
          { root: "give", accepted: ["forgive"], hint: "prefijo for- → forgive." },
        ],
      },
      p4: {
        title: "Transformaciones — narración",
        items: [
          { s1: "I hadn't finished my dinner when they arrived.", key: "STILL", s2: "I ___ my dinner when they arrived.", accepted: ["was still eating", "still hadn't finished"], explanation: "acción en curso / no terminada." },
          { s1: "As soon as I sat down, the phone rang.", key: "SOONER", s2: "No ___ down than the phone rang.", accepted: ["sooner had I sat"], explanation: "inversión: No sooner had I sat down than…" },
          { s1: "They got married after they had known each other for ten years.", key: "BEEN", s2: "They ___ friends for ten years before they got married.", accepted: ["had been"], explanation: "estado → had been." },
          { s1: "She was tired because she had been studying all night.", key: "STUDIED", s2: "She was tired because she ___ all night.", accepted: ["had studied", "'d studied"], explanation: "past perfect." },
          { s1: "During my walk home, I saw an old friend.", key: "WAS", s2: "While ___ home, I saw an old friend.", accepted: ["I was walking"], explanation: "past continuous de fondo." },
          { s1: "It was the first time she had ever felt so happy.", key: "NEVER", s2: "She ___ so happy before.", accepted: ["had never felt", "'d never felt"], explanation: "past perfect negativo." },
        ],
      },
      p5: {
        title: "The friendship that survived a lie",
        text: "Marco and I had been best friends since childhood, the kind of friends who finish each other's sentences and share every secret. So when I found out that he had lied to me — a real, deliberate lie, told to protect himself — it felt like the ground had opened beneath my feet. For weeks, I refused to speak to him, nursing my sense of betrayal like a wound.\n\nLooking back now, I can see that my anger, though understandable, was not entirely honest. The truth was that Marco's lie had touched something fragile in me: a fear that I was not as important to him as he was to me. It was easier to be furious than to admit how hurt and frightened I felt. And so I said nothing, and let the silence grow between us, each passing day making it harder to break.\n\nIt was Marco who eventually found the courage to end the standoff. He didn't make excuses or pretend the lie hadn't mattered. He simply told me the truth: that he had been ashamed, that he had panicked, and that he would understand if I could never fully trust him again. There was something in his complete honesty, so different from the lie that had started it all, that dissolved my anger almost instantly. We talked for hours that night, more openly than we ever had before.\n\nOur friendship did not just survive; in a strange way, it grew stronger. I learned that trust is not the absence of mistakes, but the willingness to face them honestly. A relationship that has never been tested is, in a sense, untested — and Marco and I now know exactly what ours is made of.",
        q: [
          mc("How did the narrator feel when they discovered the lie?", ["Amused.", "As if the ground had opened beneath them.", "Indifferent.", "Relieved."], 1, "'the ground had opened beneath my feet'."),
          mc("What was the real cause of the narrator's anger?", ["The lie itself only.", "A deeper fear of being less important to Marco.", "Money.", "Jealousy of another friend."], 1, "'a fear that I was not as important to him'."),
          mc("Why did the silence get harder to break?", ["Marco moved away.", "Each passing day made it more difficult.", "They lived far apart.", "They were too busy."], 1, "'each passing day making it harder to break'."),
          mc("What finally dissolved the narrator's anger?", ["An apology gift.", "Marco's complete honesty.", "Another friend's advice.", "Time alone."], 1, "'something in his complete honesty… dissolved my anger'."),
          mc("What did the narrator learn about trust?", ["It means never making mistakes.", "It's the willingness to face mistakes honestly.", "It's impossible.", "It's overrated."], 1, "'trust is not the absence of mistakes, but the willingness to face them honestly'."),
          mc("The phrase 'nursing my sense of betrayal like a wound' suggests the narrator was:", ["quickly forgetting it", "carefully keeping the hurt alive", "physically injured", "seeking revenge"], 1, "'nursing… like a wound' = mantener vivo el dolor."),
        ],
      },
      p6: {
        title: "Growing up with my grandmother",
        text: "For the first ten years of my life, I was raised largely by my grandmother. (1)___ My parents both worked long hours, and so it was she who took me to school, cooked my meals and told me stories at bedtime.\n\nAt the time, I didn't think of our arrangement as unusual. (2)___ It was simply my normal, ordinary world. Only later did I come to understand how much she had sacrificed for me.\n\nMy grandmother was not an educated woman, but she was wise in ways that no school could teach. (3)___ She had a saying for every situation and a calmness that nothing could shake. When I was anxious about an exam or upset by a friend, she would listen patiently and then say something that put it all in perspective.\n\nShe passed away when I was twenty. (4)___ I still catch myself wanting to phone her to share good news, before I remember that I can't. (5)___ Yet in another sense she is always with me, because so much of who I am came directly from her.\n\nThey say we don't fully appreciate people until they are gone. (6)___ In my grandmother's case, I hope I told her often enough, while she was alive, exactly what she meant to me.",
        options: [
          "She was, in every way that mattered, my second mother.",   // A -> gap 1
          "To me, it was just how life was.",                          // B -> gap 2
          "Her intelligence was of the practical, human kind.",        // C -> gap 3
          "Losing her left a gap that has never quite closed.",        // D -> gap 4
          "The habit of turning to her took years to fade.",           // E -> gap 5
          "There is a painful truth in that old observation.",         // F -> gap 6
          "We had never actually got on very well.",                   // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: era su segunda madre."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: era simplemente su vida normal."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: inteligencia práctica y humana."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: su pérdida dejó un vacío."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el hábito tardó años en desaparecer."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: hay una verdad dolorosa en eso."),
        ],
      },
      p7: {
        title: "Four people talk about a family member",
        text: "Read what four people say about an important family member.\n\nA) SAM: I take after my dad in almost every way — same temper, same terrible jokes, same love of the outdoors. Growing up, we clashed constantly precisely because we're so alike. It was only when I left home that I began to appreciate him. Now he's the first person I call when I need advice.\n\nB) MAYA: My older sister practically raised me while our parents were working abroad. She was only sixteen herself, but she cooked, cleaned and helped me with my homework. I looked up to her then and I still do. I don't think I ever thanked her properly for those years.\n\nC) OMAR: My uncle and I fell out badly over a family business years ago, and we didn't speak for a long time. Life is too short for that kind of silence, though. Last year, at my mother's insistence, we finally made up. I only wish we hadn't wasted so much time.\n\nD) ELLA: My grandmother and I couldn't be more different — she's deeply traditional and I'm anything but — yet we've always been incredibly close. She never judges me. Whatever mad plan I come up with, she just smiles and says, 'Well, you only live once.' I hope I'm half as open-minded when I'm her age.",
        q: [
          mc("Who resembles the relative they are describing?", ["A", "B", "C", "D"], 0, "Sam: 'I take after my dad in almost every way'."),
          mc("Who was cared for by a relative who was still young?", ["A", "B", "C", "D"], 1, "Maya: 'She was only sixteen'."),
          mc("Who stopped speaking to their relative for a long time?", ["A", "B", "C", "D"], 2, "Omar: 'we didn't speak for a long time'."),
          mc("Who admires how open-minded their relative is?", ["A", "B", "C", "D"], 3, "Ella: 'I hope I'm half as open-minded'."),
          mc("Who regrets not thanking the relative enough?", ["A", "B", "C", "D"], 1, "Maya: 'I never thanked her properly'."),
          mc("Who used to argue with the relative because they are so similar?", ["A", "B", "C", "D"], 0, "Sam: 'we clashed… because we're so alike'."),
          mc("Who was persuaded by a third person to end a conflict?", ["A", "B", "C", "D"], 2, "Omar: 'at my mother's insistence… made up'."),
          mc("Who feels closer to the relative despite being very different?", ["A", "B", "C", "D"], 3, "Ella: 'couldn't be more different… incredibly close'."),
          mc("Who only appreciated the relative after moving away?", ["A", "B", "C", "D"], 0, "Sam: 'only when I left home'."),
          mc("Who wishes they hadn't wasted so much time?", ["A", "B", "C", "D"], 2, "Omar: 'I only wish we hadn't wasted so much time'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Families are less important today than they were in the past.'\nComenta estos dos aspectos y añade uno propio:\n1. support (el apoyo)\n2. independence (la independencia)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RELATO para un concurso que empiece con: 'It was the first time in years that the whole family had gathered together.'\n· EMAIL a un amigo/a que ha discutido con un familiar: dale consejo sobre cómo reconciliarse.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una persona hablando de cómo conoció a su mejor amigo/a (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a woman called Hannah talking about how she met her best friend. Hannah: I first met my best friend, Katie, when we were both nineteen and working in the same café for the summer. To be honest, my very first impression of her was that she was a bit unfriendly — she hardly spoke during our first shift together. I later found out she was just extremely shy. What brought us together was a disaster: one busy Saturday, we accidentally dropped an entire tray of drinks, and instead of panicking, we both just burst out laughing. From that moment, we were inseparable. What I love about Katie is that she's completely honest with me — she'll always tell me the truth, even when I don't want to hear it. We've now been friends for over fifteen years. The secret, I think, is that although we're quite different in character, we share exactly the same sense of humour. My advice to anyone is simple: don't judge people too quickly, because your best friend might be the person you least expect.", [
      fb("Hannah and Katie were both ___ years old when they met.", ["nineteen", "19"], "'we were both nineteen'."),
      fb("They met while working in the same ___.", ["café", "cafe"], "'working in the same café'."),
      fb("Hannah's first impression was that Katie was ___.", ["unfriendly", "shy"], "'a bit unfriendly'."),
      fb("They became close after dropping a tray of ___.", ["drinks"], "'a tray of drinks'."),
      fb("Hannah most values Katie's ___.", ["honesty"], "'she's completely honest'."),
      fb("They have now been friends for over ___ years.", ["fifteen", "15"], "'over fifteen years'."),
      fb("Despite being different, they share the same sense of ___.", ["humour", "humor"], "'the same sense of humour'."),
      fb("Hannah's advice is not to ___ people too quickly.", ["judge"], "'don't judge people too quickly'."),
    ]),

    ...speakingParts({ p1: "cómo es tu familia, a quién te pareces y con quién te llevas mejor", p2: "dos escenas familiares (una gran reunión familiar y una cena tranquila de dos personas): compáralas y di qué está pasando", p3: "qué es lo que más une a una familia (pasar tiempo juntos, el apoyo, las tradiciones, el respeto mutuo): comentadlo y decidid lo más importante", p4: "las relaciones familiares: si las familias están más o menos unidas hoy, y por qué a veces la gente se distancia" }),

    SUMMARY("Resumen del Día 2", [
      "Narración: past simple (acciones), continuous (fondo), past perfect (antes), past perfect continuous (duración anterior).",
      "Inversión con No sooner… than / Hardly… when. by the time + past perfect.",
      "Vocabulario de relaciones. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 3", "Escribe un párrafo narrativo usando los 4 tiempos del pasado. Repasa las flashcards. Mañana: presente y verbos de estado; hábitos."),
  ],
};

// ───────────────────────── DÍA 3 ─────────────────────────
const DAY3 = {
  title: "Día 3 — Presente, verbos de estado y hábitos · El carácter",
  description: "Present simple/continuous, verbos de estado, y hábitos (present/past: will/would/used to). Vocabulario de hábitos y carácter. Las 4 destrezas con el formato real del B2; Listening P3.",
  pedagogy: {
    objective: "Usar el presente con precisión y expresar hábitos presentes y pasados.",
    summary: "Presente/estado/hábitos; el carácter; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'I am understanding'.", "'I use to go' (presente).", "'would' con verbos de estado."],
    reviewPrompts: ["¿'I'm loving it' es correcto?", "¿'will' para hábitos presentes?"],
  },
  items: [
    TEXT("🔁 Repaso: narración. Hoy el PRESENTE, los VERBOS DE ESTADO y los HÁBITOS (presentes y pasados). Vocabulario: los HÁBITOS y el CARÁCTER."),
    GRAMMAR("Presente, verbos de estado y hábitos", `PRESENT SIMPLE: rutinas, hechos, hábitos: I get up at seven. Water boils at 100°C.
PRESENT CONTINUOUS: ahora, temporal, tendencias, quejas con always: I'm staying with friends this week. You're always interrupting!
VERBOS DE ESTADO (no suelen ir en continuous): know, believe, understand, mean, own, belong, prefer, seem, love/hate (opinión). ⚠️ Algunos cambian de sentido: I think it's true (opinión) / I'm thinking about it (proceso). 'I'm loving it' existe en habla informal, pero en el examen evita el continuous con verbos de estado.
HÁBITOS:
· Presente: present simple + adverbios (usually, tend to); will para hábitos típicos: He'll sit for hours reading.
· Pasado: used to + infinitivo (estados/hábitos que ya no) y would + infinitivo (solo acciones repetidas, no estados): We used to live there. Every summer we would visit the coast.
⚠️ 'would' NO para estados pasados: ❌ I would have a dog → ✅ I used to have a dog.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I am understanding → ✅ I understand.\n· ❌ I use to go (presente) → ✅ I usually go.\n· ❌ I would live there (estado) → ✅ I used to live there.\n· 'always' + continuous para quejas: You're always losing your keys!"),
    grammarEx("Use of English — Presente, estado y hábitos", "Completa o elige.", [
      mc("Choose:", ["I am not understanding this.", "I don't understand this.", "I am not understand this."], 1, "estado → simple."),
      fb("She ___ ___ (stay) with us this week. (temporal)", ["is staying", "'s staying"], "present continuous."),
      fb("Every winter, we ___ (used) go skiing. (hábito pasado)", ["used to"], "used to + infinitivo."),
      mc("Choose (past state):", ["I would have long hair.", "I used to have long hair.", "I am having long hair."], 1, "estado pasado → used to."),
      fb("You ___ always ___ (lose) your keys! (queja)", ["are", "losing"], "always + continuous."),
      mc("Choose:", ["This book belongs to me.", "This book is belonging to me.", "This book belong to me."], 0, "belong = estado."),
      fb("When he's bored, he ___ (sit) for hours doing nothing. (hábito típico)", ["will sit", "'ll sit"], "will para hábito."),
    ]),
    GRAMMAR("Vocabulario del día — Hábitos y carácter", "Léxico de hábitos y rasgos (B2)."),
    deck("B2 S1D3 — Hábitos y carácter", [
      ["tend to", "soler / tender a", "I tend to work better in the morning.", "colocación", "tend tu"],
      ["be prone to", "ser propenso/a a", "He's prone to exaggeration.", "colocación", "biː prəʊn tu"],
      ["creature of habit", "persona de costumbres fijas", "I'm a creature of habit.", "expresión", "ˈkriːtʃər əv ˈhæbɪt"],
      ["set in one's ways", "aferrado a sus costumbres", "My grandad is set in his ways.", "expresión", "set ɪn wʌnz ˈweɪz"],
      ["laid-back", "relajado/a / tranquilo", "She has a laid-back attitude to life.", "adjetivo", "ˌleɪd ˈbæk"],
      ["perfectionist", "perfeccionista", "He's a real perfectionist.", "sustantivo", "pəˈfekʃənɪst"],
      ["impulsive", "impulsivo/a", "Try not to be so impulsive.", "adjetivo", "ɪmˈpʌlsɪv"],
      ["self-disciplined", "disciplinado/a", "You need to be self-disciplined to study alone.", "adjetivo", "ˌself ˈdɪsɪplɪnd"],
      ["gets on my nerves", "me pone de los nervios", "His whistling gets on my nerves.", "expresión", "ɡets ɒn maɪ ˈnɜːvz"],
      ["kick a habit", "quitarse un vicio/hábito", "It's hard to kick a bad habit.", "colocación", "kɪk ə ˈhæbɪt"],
    ]),
    vocabEx("Vocabulario — Hábitos y carácter", "Elige la opción correcta.", [
      mc("A person who likes routine and dislikes change is a ___.", ["creature of habit", "perfectionist", "impulsive person"], 0, "creature of habit."),
      mc("Someone relaxed and not easily worried is ___.", ["laid-back", "impulsive", "prone"], 0, "laid-back."),
      mc("Someone who acts without thinking first is ___.", ["impulsive", "self-disciplined", "laid-back"], 0, "impulsive."),
      mc("To stop a bad habit is to ___ it.", ["kick", "tend", "set"], 0, "kick a habit."),
      mc("If something annoys you a lot, it ___.", ["gets on your nerves", "tends to you", "is prone to"], 0, "gets on your nerves."),
      mc("Someone who wants everything to be perfect is a ___.", ["perfectionist", "creature of habit", "laid-back person"], 0, "perfectionist."),
    ]),

    ...uoe({
      p1: {
        title: "Breaking a bad habit",
        text: "We all have habits we would like to break, but doing so is notoriously (1)___. According to psychologists, the reason is that habits are stored in a part of the brain that operates almost (2)___ our conscious control. This is why willpower alone rarely (3)___ the trick. A more effective (4)___ is to change your environment so that the bad habit becomes harder to perform. If you (5)___ to snack in the evenings, for instance, simply not keeping snacks in the house can work (6)___. It also helps to replace the old habit with a new, better one, rather than trying to (7)___ a gap. Above all, experts advise us not to give up after a single (8)___: lasting change takes time.",
        q: [
          mc("(1)", ["difficult", "difficulty", "difficultly", "difficile"], 0, "adjetivo → difficult."),
          mc("(2)", ["beyond", "over", "under", "above"], 0, "'beyond our conscious control'."),
          mc("(3)", ["does", "makes", "takes", "gets"], 0, "'does the trick'."),
          mc("(4)", ["approach", "reach", "attempt", "attitude"], 0, "'a more effective approach'."),
          mc("(5)", ["tend", "used", "prone", "habit"], 0, "'tend to snack'."),
          mc("(6)", ["wonders", "miracles", "magic", "surprises"], 0, "'work wonders'."),
          mc("(7)", ["fill", "full", "feel", "fall"], 0, "'fill a gap'."),
          mc("(8)", ["slip", "fall", "trip", "drop"], 0, "'a single slip' (recaída)."),
        ],
      },
      p2: {
        title: "Are we creatures of habit?",
        text: "Human beings are, for the most part, creatures (1)___ habit. We like to think of ourselves as free, spontaneous individuals, but studies suggest that a huge proportion of what we do each day is done (2)___ thinking, on autopilot. We take the same route to work, order the same coffee and sit in the same seat, day after day. There is nothing wrong (3)___ this; in fact, habits free up our minds for more important things. The trouble begins (4)___ our routines stop serving us. Someone who is too (5)___ in their ways may miss out on new experiences and become resistant to change. The (6)___ is to hold on to the good habits while remaining open to the new. Easier said (7)___ done, of course — but worth the effort, because a life ruled (8)___ by routine can become very small indeed.",
        q: [
          fb("(1)", ["of"], "'creatures of habit'."),
          fb("(2)", ["without"], "'done without thinking'."),
          fb("(3)", ["with"], "'nothing wrong with this'."),
          fb("(4)", ["when"], "'begins when our routines…'"),
          fb("(5)", ["set"], "'too set in their ways'."),
          fb("(6)", ["key", "trick", "secret"], "'The key is…'"),
          fb("(7)", ["than"], "'easier said than done'."),
          fb("(8)", ["entirely", "completely", "solely"], "'a life ruled entirely by routine'."),
        ],
      },
      p3: {
        title: "The power of small habits",
        text: "In recent years, the idea of 'small habits' has become enormously (1)___. The argument is simple but (2)___: instead of trying to transform your life overnight, you make tiny changes that are almost (3)___ to fail. Rather than promising to run five miles a day, you commit to putting on your running shoes. This may sound (4)___, but the psychology behind it is sound. Each small (5)___ builds confidence and, more importantly, reinforces your (6)___ of yourself as the kind of person who exercises. Over months and years, these little actions (7)___ up into remarkable results. The (8)___ is not to underestimate what is possible when a good habit is repeated, patiently, thousands of times.",
        items: [
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "persuade", accepted: ["persuasive"], hint: "adjetivo → persuasive." },
          { root: "possible", accepted: ["impossible"], hint: "'almost impossible to fail'." },
          { root: "believe", accepted: ["unbelievable"], hint: "'This may sound unbelievable'." },
          { root: "achieve", accepted: ["achievement"], hint: "sustantivo → achievement." },
          { root: "image", accepted: ["image"], hint: "'your image of yourself' (sustantivo)." },
          { root: "add", accepted: ["add"], hint: "'add up' (phrasal, base)." },
          { root: "lesson", accepted: ["lesson"], hint: "'The lesson is…' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — hábitos y estado",
        items: [
          { s1: "When I was a child, I collected stamps.", key: "USED", s2: "I ___ stamps when I was a child.", accepted: ["used to collect"], explanation: "hábito pasado → used to." },
          { s1: "He often forgets people's names.", key: "PRONE", s2: "He ___ people's names.", accepted: ["is prone to forgetting"], explanation: "be prone to + -ing." },
          { s1: "It annoys me when you interrupt.", key: "NERVES", s2: "It gets ___ when you interrupt.", accepted: ["on my nerves"], explanation: "gets on my nerves." },
          { s1: "My grandmother had a dog for years.", key: "USED", s2: "My grandmother ___ a dog for years.", accepted: ["used to have"], explanation: "estado pasado → used to (no 'would')." },
          { s1: "I normally work better late at night.", key: "TEND", s2: "I ___ better late at night.", accepted: ["tend to work"], explanation: "tend to + infinitivo." },
          { s1: "I don't find this explanation clear.", key: "UNDERSTAND", s2: "I ___ this explanation.", accepted: ["don't understand"], explanation: "understand = estado, present simple." },
        ],
      },
      p5: {
        title: "The tyranny of the to-do list",
        text: "I used to be proud of my to-do lists. Every evening, I would sit down and carefully write out everything I intended to accomplish the following day, and every morning I would attack the list with grim determination. For years, I believed this made me disciplined and productive. It took a minor breakdown, at the age of thirty-two, to make me question whether my beloved lists were in fact ruling my life rather than serving it.\n\nThe problem, I slowly came to see, was that no list is ever truly finished. As fast as I crossed items off, new ones appeared, so that the list functioned less as a tool than as a permanent accusation. However much I did, it was never enough. I began each day already behind, and ended it feeling that I had failed, even on days when I had, by any reasonable measure, achieved a great deal. My self-worth had become tangled up with my productivity, and it was making me miserable.\n\nWhat changed things was a piece of advice from an unlikely source: my extremely laid-back younger brother, who has never written a to-do list in his life. He suggested that instead of listing everything I had to do, I write down, each evening, three things I had actually done that day and felt good about. At first the exercise felt almost embarrassingly simple. But slowly it rewired something in me. I started to notice and value my achievements rather than fixating on what remained undone.\n\nI still make lists — old habits die hard — but my relationship with them has changed completely. A list, I finally understand, is a servant, not a master. Its job is to help me remember, not to judge me. And on the days when I ignore it altogether and simply live, I no longer feel guilty. I feel free.",
        q: [
          mc("What did the narrator originally believe about their to-do lists?", ["They were pointless.", "They made them disciplined and productive.", "They were harmful.", "They belonged to someone else."], 1, "'this made me disciplined and productive'."),
          mc("What was the central problem with the lists?", ["They were too short.", "No list is ever finished; it became a permanent accusation.", "They were badly written.", "They were lost."], 1, "'no list is ever truly finished… a permanent accusation'."),
          mc("How had the narrator's sense of self-worth changed?", ["It disappeared.", "It became tangled up with productivity.", "It grew stronger.", "It didn't change."], 1, "'My self-worth had become tangled up with my productivity'."),
          mc("What did the brother suggest?", ["Writing longer lists.", "Writing down three things done and felt good about.", "Never working.", "Using an app."], 1, "'write down… three things I had actually done'."),
          mc("What does the narrator now understand a list to be?", ["A master.", "A servant, not a master.", "Useless.", "An enemy."], 1, "'a servant, not a master'."),
          mc("The brother is described as a contrast to the narrator because he is:", ["extremely organised", "very laid-back", "ambitious", "short-tempered"], 1, "'my extremely laid-back younger brother'."),
        ],
      },
      p6: {
        title: "The morning routine that changed my life",
        text: "For most of my twenties, my mornings were chaos. (1)___ I would hit the snooze button five or six times, then leap out of bed in a panic and rush out of the door, stressed before the day had even begun.\n\nEverything changed when a colleague mentioned, almost in passing, that she got up an hour earlier than she needed to. (2)___ At first, the idea horrified me. I loved my sleep, and the thought of losing an hour of it seemed like madness.\n\nStill, I was desperate enough to try anything. (3)___ For the first week, dragging myself out of bed in the dark was genuinely painful. But by the second week, something unexpected had happened: I had started to look forward to that quiet hour.\n\nWith no emails to answer and no one demanding my attention, the time became mine alone. (4)___ I would make a proper coffee, read a few pages of a book, and plan my day calmly rather than reactively. The effect on the rest of my day was extraordinary.\n\nYears later, that early hour remains the foundation of my whole routine. (5)___ People sometimes ask me how I find the willpower, and I tell them the truth: I don't. (6)___ Once a good habit is truly established, it requires no willpower at all — it simply becomes who you are.",
        options: [
          "There was nothing calm or considered about them.",         // A -> gap 1
          "She used that hour purely for herself, she explained.",     // B -> gap 2
          "So, one Monday, I set my alarm for six o'clock.",           // C -> gap 3
          "For the first time, I began the day on my own terms.",      // D -> gap 4
          "I can no longer imagine starting the day any other way.",   // E -> gap 5
          "The secret, I've discovered, is not discipline but habit.", // F -> gap 6
          "I have always been a naturally organised early riser.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: nada de calma en ellas."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: usaba esa hora para sí misma."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: puso el despertador a las seis."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: empezaba el día a su manera."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: no imagina empezar de otro modo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el secreto no es disciplina sino hábito."),
        ],
      },
      p7: {
        title: "Four people describe a habit they have changed",
        text: "Read what four people say about changing a habit.\n\nA) JON: I used to check my phone the second I woke up — before I'd even got out of bed. It set a frantic tone for the whole day. Now I leave it charging in the kitchen overnight, so I physically can't reach it. That one small change has made my mornings far calmer.\n\nB) RITA: I was a terrible perfectionist. I'd spend hours polishing tiny details that nobody else would ever notice, and I could never finish anything. Learning to accept 'good enough' was the hardest thing I've ever done, but it's made me far more productive — and much happier.\n\nC) SAM: I used to be really impulsive with money. If I saw something I liked, I'd buy it on the spot. Then I started a rule: I have to wait a week before buying anything non-essential. Nine times out of ten, by the end of the week I've realised I didn't want it at all.\n\nD) LENA: For years I told myself I 'wasn't a morning person' and would lie in bed until the last possible moment. When I finally forced myself to get up early, I discovered I loved it. It turns out that 'not being a morning person' was just a habit, not a fixed part of who I am.",
        q: [
          mc("Who changed a habit related to spending?", ["A", "B", "C", "D"], 2, "Sam: 'impulsive with money'."),
          mc("Who removed the temptation physically?", ["A", "B", "C", "D"], 0, "Jon: 'leave it charging in the kitchen… can't reach it'."),
          mc("Who learned to accept that things don't have to be perfect?", ["A", "B", "C", "D"], 1, "Rita: 'accept \"good enough\"'."),
          mc("Who discovered a belief about themselves was just a habit?", ["A", "B", "C", "D"], 3, "Lena: 'was just a habit, not a fixed part of who I am'."),
          mc("Who introduced a waiting period before acting?", ["A", "B", "C", "D"], 2, "Sam: 'wait a week before buying'."),
          mc("Who used to struggle to complete tasks?", ["A", "B", "C", "D"], 1, "Rita: 'could never finish anything'."),
          mc("Who changed the very first thing they did each day?", ["A", "B", "C", "D"], 0, "Jon: 'check my phone the second I woke up'."),
          mc("Who is now happier as a result of the change?", ["A", "B", "C", "D"], 1, "Rita: 'much happier'."),
          mc("Who found that they enjoyed the new habit once they tried it?", ["A", "B", "C", "D"], 3, "Lena: 'I discovered I loved it'."),
          mc("Who often finds they no longer want the thing after waiting?", ["A", "B", "C", "D"], 2, "Sam: 'I didn't want it at all'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is impossible to change who we really are.'\nComenta estos dos aspectos y añade uno propio:\n1. habits (los hábitos)\n2. personality (la personalidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO para una web de bienestar: 'One small habit that changed my life' — cuenta cuál y qué efecto tuvo.\n· RESEÑA de un libro o app de autoayuda que hayas probado: descríbelo y di si lo recomiendas y por qué.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de un hábito que quieren cambiar (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué hábito describe. Sobra una opción.\nA) checking their phone too much\nB) spending money impulsively\nC) going to bed too late\nD) eating unhealthy snacks\nE) being a perfectionist\nF) never being on time", "This is Part Three. You will hear five people talking about a habit they want to change. Speaker One: The trouble is, I just can't say no to a bargain. If it's on sale, it ends up in my basket, whether I need it or not. My wardrobe is full of things I've never even worn. Speaker Two: Every night I tell myself I'll switch the light off by eleven, and every night I'm still awake at one in the morning, scrolling or watching just one more episode. Then I'm exhausted all day. Speaker Three: I'm the person who's always ten minutes late, no matter what. I set off with the best intentions, but somehow I never quite make it on time. My friends have started telling me events start earlier than they really do. Speaker Four: I know I should reach for fruit, but when I'm stressed at work, it's always the crisps and the chocolate. I've tried to stop, but the vending machine is right next to my desk. Speaker Five: I can never leave anything alone. I'll rewrite the same email ten times, terrified it isn't quite right. It takes me twice as long as everyone else to finish the simplest task.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 1, "B: 'can't say no to a bargain'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 2, "C: 'still awake at one in the morning'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 5, "F: 'always ten minutes late'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 3, "D: 'the crisps and the chocolate'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 4, "E: 'rewrite the same email ten times'."),
    ]),

    ...speakingParts({ p1: "cómo es tu rutina diaria, si eres una persona de costumbres y qué hábito te gustaría cambiar", p2: "dos formas de empezar el día (alguien con prisas y estrés, y alguien con calma): compáralas y di cuál es mejor y por qué", p3: "qué ayuda más a cambiar un mal hábito (fuerza de voluntad, cambiar el entorno, la ayuda de otros, empezar poco a poco): comentadlo y elegid lo más eficaz", p4: "los hábitos y el carácter: si podemos cambiar de verdad, si la rutina es buena o mala y por qué cuesta tanto cambiar" }),

    SUMMARY("Resumen del Día 3", [
      "Verbos de estado → present simple. Present continuous para lo temporal y 'always' + quejas.",
      "Hábitos pasados: used to (estados y acciones) / would (solo acciones). Presente: tend to / will.",
      "Vocabulario de hábitos y carácter. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 4", "Escribe 4 frases sobre tus hábitos (presentes y pasados). Repasa las flashcards. Mañana: adverbios, expresiones de tiempo y repaso."),
  ],
};

// ───────────────────────── DÍA 4 ─────────────────────────
const DAY4 = {
  title: "Día 4 — Adverbios y expresiones de tiempo · Emociones y estados de ánimo",
  description: "Posición de los adverbios y expresiones de tiempo (already/yet/still/for/since/by). Vocabulario de emociones. Las 4 destrezas con el formato real del B2; Listening P4.",
  pedagogy: {
    objective: "Colocar adverbios y usar expresiones de tiempo con precisión.",
    summary: "Adverbios y tiempo; emociones; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'I go always'.", "'still not' vs 'not yet'.", "'since' + periodo."],
    reviewPrompts: ["¿Dónde va 'always' con un verbo normal?", "¿'yet' o 'already' en negativa?"],
  },
  items: [
    TEXT("🔁 Repaso: presente y hábitos. Hoy los ADVERBIOS (posición) y las EXPRESIONES DE TIEMPO. Vocabulario: las EMOCIONES y los ESTADOS DE ÁNIMO."),
    GRAMMAR("Adverbios y expresiones de tiempo", `ADVERBIOS DE FRECUENCIA (always, usually, often, rarely, never): antes del verbo principal, después de 'be': I always arrive early. She is never late.
ADVERBIOS DE MODO (carefully, quickly): normalmente al final: She spoke quietly. Cuidado: no entre verbo y objeto (❌ I like very much football).
already (ya, afirmativa), yet (todavía/ya, negativa y preguntas), still (todavía, continúa): I've already eaten. Haven't you finished yet? He still lives there.
for + periodo (for two years) / since + momento (since 2020). ago (past simple). by (no más tarde de): I'll be there by six.
POSICIÓN: not … yet (aún no) vs still not (sigue sin): He still hasn't called = He hasn't called yet.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I go always by bus → ✅ I always go by bus.\n· ❌ I like very much it → ✅ I like it very much.\n· ❌ since two years → ✅ for two years.\n· ❌ Have you finished already? (neutro) → en negativa usa 'yet': Haven't you finished yet?"),
    grammarEx("Use of English — Adverbios y tiempo", "Completa o elige.", [
      mc("Choose:", ["I go usually to the gym.", "I usually go to the gym.", "I go to usually the gym."], 1, "frecuencia antes del verbo."),
      fb("Have you finished ___? (todavía, pregunta)", ["yet"], "yet en preguntas."),
      fb("I've ___ seen that film — twice, in fact. (ya)", ["already"], "already afirmativa."),
      fb("He ___ hasn't replied to my message. (sigue sin)", ["still"], "still not."),
      fb("We've lived here ___ 2015.", ["since"], "since + momento."),
      fb("I'll have the report ready ___ Friday. (no más tarde de)", ["by"], "by."),
      mc("Choose:", ["She is never late.", "She never is late.", "She is late never."], 0, "'be' + never."),
    ]),
    GRAMMAR("Vocabulario del día — Emociones y estados de ánimo", "Léxico de emociones (B2)."),
    deck("B2 S1D4 — Emociones", [
      ["overwhelmed", "abrumado/a / desbordado/a", "I felt overwhelmed by all the work.", "adjetivo", "ˌəʊvəˈwelmd"],
      ["content", "satisfecho/a / a gusto", "She seems content with her life.", "adjetivo", "kənˈtent"],
      ["frustrated", "frustrado/a", "I get frustrated when things go slowly.", "adjetivo", "frʌˈstreɪtɪd"],
      ["anxious", "ansioso/a / inquieto", "He felt anxious before the interview.", "adjetivo", "ˈæŋkʃəs"],
      ["thrilled", "encantado/a / emocionadísimo", "I was thrilled to get the news.", "adjetivo", "θrɪld"],
      ["reluctant", "reacio/a", "She was reluctant to admit it.", "adjetivo", "rɪˈlʌktənt"],
      ["moody", "de humor cambiante", "He can be quite moody in the mornings.", "adjetivo", "ˈmuːdi"],
      ["relieved", "aliviado/a", "I was relieved when it was over.", "adjetivo", "rɪˈliːvd"],
      ["cheer up", "animar(se)", "A good film always cheers me up.", "phrasal verb", "tʃɪər ˈʌp"],
      ["on edge", "con los nervios de punta", "I've been on edge all week.", "expresión", "ɒn ˈedʒ"],
    ]),
    vocabEx("Vocabulario — Emociones", "Elige la opción correcta.", [
      mc("Feeling there's too much to cope with is feeling ___.", ["overwhelmed", "content", "thrilled"], 0, "overwhelmed."),
      mc("Feeling calmly satisfied is feeling ___.", ["content", "anxious", "frustrated"], 0, "content."),
      mc("Feeling extremely pleased and excited is feeling ___.", ["thrilled", "reluctant", "moody"], 0, "thrilled."),
      mc("Not really wanting to do something is being ___.", ["reluctant", "relieved", "content"], 0, "reluctant."),
      mc("Feeling nervous and tense all the time is being ___.", ["on edge", "content", "thrilled"], 0, "on edge."),
      mc("To make someone feel happier is to ___ them ___.", ["cheer / up", "on / edge", "get / nerves"], 0, "cheer up."),
    ]),

    ...uoe({
      p1: {
        title: "Understanding our emotions",
        text: "For a long time, emotions were regarded as the enemy of clear thinking, something to be (1)___ and controlled. Today, psychologists take a very different (2)___. Far from being obstacles, our emotions are now understood to be a vital source of (3)___, guiding our decisions in ways that pure logic never could. The (4)___ is not to suppress what we feel, but to learn to read our emotions intelligently. Someone who feels persistently (5)___ at work, for example, would be wise to ask what that anxiety is trying to tell them. Ignoring such feelings rarely makes them go away; more often, they simply (6)___ up until they can no longer be ignored. Learning to (7)___ our emotional lives is now considered just as important as academic intelligence — some would say (8)___ more so.",
        q: [
          mc("(1)", ["overcome", "overtaken", "overrun", "overheard"], 0, "'overcome and controlled'."),
          mc("(2)", ["view", "look", "sight", "vision"], 0, "'take a different view'."),
          mc("(3)", ["information", "informations", "inform", "informative"], 0, "information incontable."),
          mc("(4)", ["key", "lock", "door", "clue"], 0, "'The key is not to…'"),
          mc("(5)", ["anxious", "anxiety", "anxiously", "anxiousness"], 0, "adjetivo → anxious."),
          mc("(6)", ["build", "grow", "rise", "raise"], 0, "'build up'."),
          mc("(7)", ["manage", "control", "handle", "manage"], 0, "'manage our emotional lives'."),
          mc("(8)", ["even", "still", "yet", "far"], 0, "'even more so'."),
        ],
      },
      p2: {
        title: "A change of mood",
        text: "It is remarkable how quickly our mood can change. This morning, I woke up feeling anxious and on (1)___, convinced that the day ahead would be a disaster. I had (2)___ managed to spill coffee on my shirt before I'd even left the house. And (3)___, by lunchtime, everything had turned around. A single kind message from an old friend was (4)___ it took to lift my spirits completely. Psychologists say that our moods are far (5)___ changeable than we tend to assume, and that we (6)___ far more influence over them than we realise. Simple actions — a short walk, a phone call, a few minutes of sunshine — can (7)___ us up surprisingly fast. The next time you feel low, it may be worth remembering that the feeling, however powerful, is unlikely to (8)___.",
        q: [
          fb("(1)", ["edge"], "'on edge'."),
          fb("(2)", ["already"], "'had already managed'."),
          fb("(3)", ["yet"], "'And yet, by lunchtime…' (contraste)." ),
          fb("(4)", ["all"], "'was all it took'."),
          fb("(5)", ["more"], "'far more changeable'."),
          fb("(6)", ["have"], "'we have far more influence'."),
          fb("(7)", ["cheer"], "'cheer us up'."),
          fb("(8)", ["last"], "'unlikely to last'."),
        ],
      },
      p3: {
        title: "The upside of negative emotions",
        text: "We tend to divide our feelings into 'good' and 'bad', but this (1)___ may be misleading. Even the most (2)___ emotions serve a purpose. Fear, for all its (3)___, keeps us safe from danger. Anger, when it is (4)___ channelled, can give us the energy to right a genuine wrong. Even sadness has its uses: it slows us down and forces us to reflect, which can lead to real (5)___. The problem arises not from feeling these emotions but from our (6)___ to accept them. A society that insists on relentless (7)___ can leave people feeling that there is something wrong with them whenever they are not happy. The (8)___ truth is that a full emotional life includes the difficult feelings as well as the pleasant ones.",
        items: [
          { root: "divide", accepted: ["division"], hint: "sustantivo → division." },
          { root: "please", accepted: ["unpleasant"], hint: "adjetivo → unpleasant." },
          { root: "unpleasant", accepted: ["unpleasantness"], hint: "sustantivo → unpleasantness." },
          { root: "proper", accepted: ["properly"], hint: "adverbio → properly." },
          { root: "grow", accepted: ["growth"], hint: "sustantivo → growth." },
          { root: "will", accepted: ["unwillingness"], hint: "'our unwillingness to accept'." },
          { root: "happy", accepted: ["happiness"], hint: "sustantivo → happiness." },
          { root: "settle", accepted: ["unsettling"], hint: "adjetivo → unsettling." },
        ],
      },
      p4: {
        title: "Transformaciones — adverbios y tiempo",
        items: [
          { s1: "I haven't finished the report.", key: "YET", s2: "I ___ the report.", accepted: ["haven't finished yet", "have not finished yet"], explanation: "not … yet." },
          { s1: "He is often in a bad mood in the mornings.", key: "TENDS", s2: "He ___ in a bad mood in the mornings.", accepted: ["tends to be"], explanation: "tends to be." },
          { s1: "The last time I saw her was in 2019.", key: "SINCE", s2: "I ___ her since 2019.", accepted: ["haven't seen"], explanation: "haven't … since." },
          { s1: "She started feeling anxious two hours ago.", key: "BEEN", s2: "She ___ anxious for two hours.", accepted: ["has been feeling", "'s been feeling"], explanation: "present perfect continuous + for." },
          { s1: "It's not necessary to finish it before Friday, but it would help.", key: "BY", s2: "It would help to have it finished ___.", accepted: ["by Friday"], explanation: "by = no más tarde de." },
          { s1: "He continues to live in the same house.", key: "STILL", s2: "He ___ in the same house.", accepted: ["still lives"], explanation: "still + present simple." },
        ],
      },
      p5: {
        title: "The day I learned to let myself feel",
        text: "I grew up in a household where strong emotions were, if not exactly forbidden, then quietly discouraged. 'Pull yourself together' was practically our family motto. Tears were a sign of weakness; anger was unseemly; even too much excitement was regarded with suspicion. I learned, as children do, to keep my feelings firmly under control, and for a long time I mistook this emotional silence for strength.\n\nThe cracks began to show in my late twenties. On the surface, my life was going well, but I felt strangely empty and, increasingly, exhausted. It was as though I were carrying a great weight that I couldn't name. When I finally went to see a therapist — reluctantly, and half-convinced it was a waste of time — she said something that has stayed with me ever since. 'You've spent thirty years,' she observed gently, 'treating your emotions as a problem to be solved. What if they're actually information to be understood?'\n\nThat single question began to change everything. Slowly, and not without difficulty, I started to let myself feel things I had spent decades suppressing. I discovered that when I stopped fighting my sadness, it did not, as I had always feared, overwhelm and destroy me. Instead, having been acknowledged, it gently passed, like weather. The same was true of anger, of fear, even of joy, which I had somehow been holding back along with the rest.\n\nI am not, I should say, a naturally emotional person even now, and old habits run deep. But I no longer regard my feelings as enemies to be defeated. I have learned, at last, that the point of an emotion is not to be controlled but to be felt, and then to be let go. Strength, it turns out, was never about feeling nothing. It was about being brave enough to feel everything.",
        q: [
          mc("What was the attitude to emotions in the narrator's childhood home?", ["They were celebrated.", "Strong emotions were quietly discouraged.", "They were ignored entirely.", "Only anger was allowed."], 1, "'strong emotions were… quietly discouraged'."),
          mc("What did the narrator mistake emotional silence for?", ["Weakness.", "Strength.", "Happiness.", "Illness."], 1, "'I mistook this emotional silence for strength'."),
          mc("What did the narrator feel despite life 'going well'?", ["Excited.", "Strangely empty and exhausted.", "Angry.", "Proud."], 1, "'I felt strangely empty and… exhausted'."),
          mc("What key question did the therapist ask?", ["Why don't you cry?", "What if emotions are information to be understood?", "What is your job?", "Are you happy?"], 1, "'information to be understood?'"),
          mc("What did the narrator discover about sadness?", ["It destroyed them.", "When acknowledged, it gently passed.", "It never came.", "It was fake."], 1, "'it gently passed, like weather'."),
          mc("The narrator's final view of strength is that it means:", ["feeling nothing", "being brave enough to feel everything", "controlling others", "avoiding people"], 1, "'being brave enough to feel everything'."),
        ],
      },
      p6: {
        title: "How music changes our mood",
        text: "There is a reason that almost every culture on Earth has developed music. (1)___ It has a power over our emotions that is immediate, involuntary and, to scientists, still somewhat mysterious.\n\nWe have all experienced this power. A single song can transport us instantly back to a particular summer, or bring tears to our eyes without warning. (2)___ Sad music, curiously, does not usually make us miserable; instead, many people find it strangely comforting.\n\nResearchers have been trying for decades to understand exactly how this works. (3)___ What they have found is that listening to music we love releases the same chemicals in the brain as other intense pleasures, from good food to falling in love.\n\nThis has led to the growing use of music in therapy. (4)___ For patients recovering from illness, or struggling with anxiety and depression, carefully chosen music can lift the mood and ease pain in ways that medicine alone cannot.\n\nPerhaps the most wonderful thing about music, though, is how personal it is. (5)___ The song that fills one person with joy may leave another cold. (6)___ In a world where so much divides us, it is a quiet miracle that a simple arrangement of sounds can reach so deeply into what makes us human.",
        options: [
          "No society, however remote, has ever been found without it.", // A -> gap 1
          "The effect can be almost overwhelming in its intensity.",     // B -> gap 2
          "The question has proved surprisingly difficult to answer.",   // C -> gap 3
          "The results, in many cases, have been remarkable.",           // D -> gap 4
          "Our tastes are as unique as our fingerprints.",               // E -> gap 5
          "And yet its emotional pull is something we all share.",       // F -> gap 6
          "Most people are completely unaffected by any kind of music.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ninguna sociedad sin música."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el efecto puede ser abrumador."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la pregunta es difícil de responder."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los resultados han sido notables."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: los gustos son únicos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: su tirón emocional lo compartimos todos."),
        ],
      },
      p7: {
        title: "Four people describe how they cope with stress",
        text: "Read what four people say about managing their emotions.\n\nA) TARIQ: When I feel overwhelmed, the worst thing I can do is stay indoors thinking about it. So I get outside and walk, sometimes for hours. There's something about moving and being among trees that puts everything back in proportion. I always come home calmer than when I left.\n\nB) NINA: I used to bottle everything up, and it made me miserable and, frankly, quite moody. Now, whenever I'm anxious, I call my sister and just talk it through. Half the time, saying a worry out loud is enough to make me realise it isn't as big as it felt.\n\nC) DAVE: I'm a big believer in routine. When life feels chaotic and I'm on edge, I go back to basics: eat properly, sleep well, exercise. It's not glamorous advice, but keeping those foundations solid stops small problems from turning into a crisis.\n\nD) PRIYA: For me, it's all about writing. Every evening, I write down whatever I'm feeling, however messy. I don't show it to anyone; it's just for me. Getting the thoughts out of my head and onto the page somehow drains away their power to keep me awake at night.",
        q: [
          mc("Who copes by talking to another person?", ["A", "B", "C", "D"], 1, "Nina: 'I call my sister and talk it through'."),
          mc("Who relies on physical exercise and nature?", ["A", "B", "C", "D"], 0, "Tariq: 'I get outside and walk… among trees'."),
          mc("Who focuses on basic daily routines?", ["A", "B", "C", "D"], 2, "Dave: 'eat properly, sleep well, exercise'."),
          mc("Who writes down their feelings privately?", ["A", "B", "C", "D"], 3, "Priya: 'I write down whatever I'm feeling… just for me'."),
          mc("Who used to keep their emotions hidden?", ["A", "B", "C", "D"], 1, "Nina: 'I used to bottle everything up'."),
          mc("Who finds that a problem shrinks when expressed?", ["A", "B", "C", "D"], 1, "Nina: 'saying a worry out loud… isn't as big as it felt'."),
          mc("Who believes in preventing crises rather than reacting?", ["A", "B", "C", "D"], 2, "Dave: 'stops small problems from turning into a crisis'."),
          mc("Who finds that expressing feelings helps them sleep?", ["A", "B", "C", "D"], 3, "Priya: 'keep me awake at night'."),
          mc("Who admits their old way of coping made them irritable?", ["A", "B", "C", "D"], 1, "Nina: 'quite moody'."),
          mc("Who values movement as a way of gaining perspective?", ["A", "B", "C", "D"], 0, "Tariq: 'puts everything back in proportion'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Schools should teach children how to manage their emotions.'\nComenta estos dos aspectos y añade uno propio:\n1. wellbeing (el bienestar)\n2. relationships (las relaciones)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How I deal with stress' — describe tus métodos y aconseja a los lectores.\n· CARTA a una revista respondiendo a un artículo que decía que 'los jóvenes de hoy no saben gestionar sus emociones': da tu opinión.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una psicóloga, la Dra. Reyes, sobre las emociones (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a psychologist, Dr Reyes, about emotions. Interviewer: Dr Reyes, why do so many of us struggle with our emotions? Dr Reyes: I think it's largely because we were never taught about them. We spend years learning maths and history, but almost no time learning how our own minds work. Interviewer: Is it true that we should try to think positively all the time? Dr Reyes: Actually, no. This idea of relentless positivity can be quite harmful. It makes people feel guilty for having perfectly normal negative feelings. All emotions have value. Interviewer: Even anger? Dr Reyes: Absolutely. Anger, properly understood, tells us that a boundary has been crossed. The goal isn't to never feel angry, but to express it constructively. Interviewer: What would you say is the biggest myth about emotions? Dr Reyes: That we can control them directly. We can't simply decide to feel calm. What we can control is our response — what we do when a feeling arises. Interviewer: So what practical advice would you give? Dr Reyes: The single most useful skill is simply naming your emotions. Research shows that just putting a feeling into words reduces its intensity. Interviewer: Does that really work? Dr Reyes: Remarkably well. It's not a cure for everything, of course, but it's a powerful first step. Interviewer: And finally, are emotions getting harder to manage in the modern world? Dr Reyes: In some ways, yes. We're more connected than ever, yet loneliness is rising. But I'm optimistic, because people are finally starting to take this seriously.", [
      mc("1. Why does Dr Reyes think we struggle with emotions?", ["We're too busy.", "We were never taught about them.", "Modern life is harder."], 1, "'we were never taught about them'."),
      mc("2. What does she say about constant positive thinking?", ["It's essential.", "It can be harmful and cause guilt.", "It's easy."], 1, "'relentless positivity can be quite harmful'."),
      mc("3. What does anger tell us, according to Dr Reyes?", ["That we are weak.", "That a boundary has been crossed.", "That we should hide it."], 1, "'a boundary has been crossed'."),
      mc("4. What is the biggest myth about emotions?", ["That they don't matter.", "That we can control them directly.", "That anger is bad."], 1, "'That we can control them directly. We can't'."),
      mc("5. What is her single most useful piece of advice?", ["Think positively.", "Name your emotions.", "Avoid stress."], 1, "'naming your emotions'."),
      mc("6. How effective does she say naming emotions is?", ["A complete cure.", "A powerful first step, though not a cure for everything.", "Useless."], 1, "'not a cure for everything… but a powerful first step'."),
      mc("7. What is her overall attitude to the future?", ["Pessimistic.", "Optimistic, because people take it seriously now.", "Indifferent."], 1, "'I'm optimistic'."),
    ]),

    ...speakingParts({ p1: "cómo gestionas el estrés, qué te anima cuando estás triste y si sueles hablar de tus sentimientos", p2: "dos personas en situaciones emocionales distintas (una agobiada por el trabajo y otra relajada en la naturaleza): compáralas y especula sobre cómo se sienten", p3: "qué ayuda más a sentirse mejor cuando estás estresado (hacer ejercicio, hablar con alguien, escuchar música, escribir, descansar): comentadlo y elegid lo más útil", p4: "las emociones: si es sano expresarlas o controlarlas, si hoy hay más estrés que antes y qué papel juega la tecnología" }),

    SUMMARY("Resumen del Día 4", [
      "Frecuencia: antes del verbo / tras 'be'. Modo: al final. No separes verbo y objeto.",
      "already (afirm.), yet (neg./preg.), still (continúa). for + periodo, since + momento, by = límite.",
      "Vocabulario de emociones. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 5", "Escribe 5 frases con already/yet/still/for/since. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 5 ─────────────────────────
const DAY5 = {
  title: "Día 5 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los tiempos verbales, los hábitos y los adverbios. Las 4 destrezas con el formato real del B2; Listening P1. Al final, el mini-simulacro de la Semana 1.",
  pedagogy: {
    objective: "Consolidar los tiempos, los hábitos y las expresiones de tiempo del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 2."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 1 del B2. Consolidas los tiempos (present perfect, narración, presente), los hábitos y los adverbios. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 1", `1) Present perfect simple (resultado) vs continuous (proceso). Verbos de estado.
2) Narración: past simple/continuous/perfect/perfect continuous; inversión (No sooner… than).
3) Presente y verbos de estado; hábitos: used to/would (pasado), tend to/will (presente).
4) Adverbios (posición) y tiempo: already/yet/still, for/since/by/ago.`),
    grammarEx("Use of English — Repaso mixto de la Semana 1", "Completa o elige.", [
      fb("I'm tired — I ___ (work) all day. (actividad)", ["have been working", "'ve been working"], "continuous."),
      fb("When we arrived, the film ___ already ___ (start).", ["had", "started"], "past perfect."),
      mc("Choose:", ["I've been knowing her for years.", "I've known her for years.", "I know her for years."], 1, "estado → simple."),
      fb("When I was young, I ___ (used) play the piano.", ["used to"], "hábito pasado."),
      mc("Choose:", ["I go usually to bed late.", "I usually go to bed late.", "I go to bed usually late."], 1, "frecuencia antes del verbo."),
      fb("Have you finished ___? (todavía, pregunta)", ["yet"], "yet."),
      fb("She ___ (not/call) me since Monday.", ["hasn't called", "has not called"], "present perfect + since."),
      mc("Choose:", ["No sooner had I left than it rained.", "No sooner I had left than it rained.", "No sooner did I leave than it rained."], 0, "inversión."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 1", "Repasa los mazos (personalidad, relaciones, hábitos, emociones)."),
    vocabEx("Vocabulario — Repaso de la Semana 1", "Elige la opción correcta.", [
      mc("Someone relaxed who doesn't worry much:", ["easy-going", "short-tempered", "stubborn"], 0, "easy-going."),
      mc("To slowly become less close to someone:", ["drift apart", "make up", "look up to"], 0, "drift apart."),
      mc("Someone who acts without thinking:", ["impulsive", "self-disciplined", "laid-back"], 0, "impulsive."),
      mc("Feeling there's too much to cope with:", ["overwhelmed", "content", "thrilled"], 0, "overwhelmed."),
      mc("To resemble an older relative:", ["take after", "get on with", "fall out with"], 0, "take after."),
      mc("Someone who wants everything perfect:", ["perfectionist", "creature of habit", "laid-back"], 0, "perfectionist."),
      mc("Feeling extremely pleased and excited:", ["thrilled", "reluctant", "moody"], 0, "thrilled."),
      mc("To admire and respect someone:", ["look up to", "fall out with", "take after"], 0, "look up to."),
    ]),

    ...uoe({
      p1: {
        title: "The people who shape us",
        text: "Psychologists have long known that we are profoundly shaped by the people we spend time (1)___. It is often said that we become the average of the five people closest to us. Whether or not that is literally (2)___, there is no doubt that the company we keep influences our habits, our attitudes and even our ambitions. Surround yourself with negative, (3)___ people, and it is remarkably hard not to be dragged down. Spend time with those who are kind, curious and (4)___, and their energy tends to rub (5)___ on you. This is not about (6)___ your old friends, of course. But it is worth being aware that the people around us are quietly (7)___ the people we become. Choose your closest company, therefore, with (8)___.",
        q: [
          mc("(1)", ["with", "at", "in", "on"], 0, "'spend time with'."),
          mc("(2)", ["true", "truth", "truly", "truthful"], 0, "adjetivo → true."),
          mc("(3)", ["short-tempered", "good-tempered", "even-tempered", "warm-hearted"], 0, "'negative… short-tempered'."),
          mc("(4)", ["ambitious", "ambition", "ambitiously", "ambitions"], 0, "adjetivo → ambitious."),
          mc("(5)", ["off", "on", "up", "out"], 0, "'rub off on you'."),
          mc("(6)", ["abandoning", "leaving", "quitting", "dropping"], 0, "'abandoning your old friends'."),
          mc("(7)", ["shaping", "forming", "making", "building"], 0, "'shaping the people we become'."),
          mc("(8)", ["care", "careful", "carefully", "caring"], 0, "'with care' (sustantivo)."),
        ],
      },
      p2: {
        title: "Why we misjudge others",
        text: "We are all, whether we admit it (1)___ not, quick to judge other people. Within seconds of meeting someone, we have (2)___ decided whether we like them. The trouble is that these instant judgements are (3)___ often wrong. We assume that a quiet person is unfriendly, when in fact they may (4)___ simply be shy. We decide that a confident person is arrogant, when they are merely (5)___ ease with themselves. Part of the problem is that we judge others by their behaviour but ourselves (6)___ our intentions. When we are short-tempered, we know it is because we (7)___ had a bad day; when someone else is, we conclude that they are simply a bad-tempered person. Keeping this in mind can make us (8)___ great deal more forgiving.",
        q: [
          fb("(1)", ["or"], "'whether we admit it or not'."),
          fb("(2)", ["already"], "'have already decided'."),
          fb("(3)", ["so", "very", "too"], "'so often wrong' (o 'very')." ),
          fb("(4)", ["well"], "'may well simply be shy'."),
          fb("(5)", ["at"], "'at ease with themselves'."),
          fb("(6)", ["by"], "'ourselves by our intentions'."),
          fb("(7)", ["have", "'ve"], "'because we have had a bad day'."),
          fb("(8)", ["a"], "'a great deal more forgiving'."),
        ],
      },
      p3: {
        title: "The art of listening",
        text: "In an age of constant talk, the ability to listen well has become surprisingly (1)___. Most of us, if we are (2)___, do not really listen at all. Instead, we spend the time while another person is speaking (3)___ preparing our own reply. True listening requires a rare kind of (4)___: the willingness to set aside our own thoughts and give someone our complete (5)___. When we listen in this way, the effect on the speaker can be (6)___. People who feel genuinely heard become more open, more (7)___ and more willing to trust. Perhaps this is why good listeners are so valued as friends and colleagues. It is one of the most (8)___ gifts we can offer another person, and it costs nothing but our attention.",
        items: [
          { root: "rare", accepted: ["rarity"], hint: "sustantivo → rarity." },
          { root: "honest", accepted: ["honest"], hint: "'if we are honest' (adjetivo)." },
          { root: "quiet", accepted: ["quietly"], hint: "adverbio → quietly." },
          { root: "generous", accepted: ["generosity"], hint: "sustantivo → generosity." },
          { root: "attend", accepted: ["attention"], hint: "sustantivo → attention." },
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "relax", accepted: ["relaxed"], hint: "adjetivo → relaxed." },
          { root: "value", accepted: ["valuable"], hint: "adjetivo → valuable." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 1",
        items: [
          { s1: "I started this job five years ago.", key: "BEEN", s2: "I ___ this job for five years.", accepted: ["have been doing", "'ve been doing"], explanation: "for + duración → present perfect continuous." },
          { s1: "The last time I ate there was months ago.", key: "SINCE", s2: "I ___ there for months.", accepted: ["haven't eaten"], explanation: "haven't … for months." },
          { s1: "When I was young, I lived by the sea.", key: "USED", s2: "I ___ by the sea when I was young.", accepted: ["used to live"], explanation: "estado pasado → used to." },
          { s1: "As soon as she left, the phone rang.", key: "SOONER", s2: "No ___ than the phone rang.", accepted: ["sooner had she left"], explanation: "inversión." },
          { s1: "He gets angry very easily.", key: "PRONE", s2: "He ___ angry.", accepted: ["is prone to getting", "is prone to get"], explanation: "be prone to." },
          { s1: "I don't fully grasp the instructions.", key: "UNDERSTAND", s2: "I ___ the instructions fully.", accepted: ["don't understand"], explanation: "understand = estado." },
        ],
      },
      p5: {
        title: "The stranger on the train",
        text: "I have never believed in fate, and I am not about to start now. And yet, if I had caught the earlier train that morning, as I had fully intended to, my entire life would have taken a different course. Instead, I overslept, missed my usual service by ninety seconds, and found myself on the next one, sitting opposite a woman I had never seen before.\n\nWe did not speak for the first twenty minutes. I was, by nature, reserved with strangers, and she was absorbed in a book. It was the book, in fact, that broke the silence: it was one of my all-time favourites, and I found myself, quite out of character, remarking on it. To my surprise, she looked up and smiled, and we fell into the kind of easy, unguarded conversation that normally takes years of friendship to produce.\n\nBy the time the train reached the city, an hour later, something had shifted. We had discovered a shared love of obscure films, a similar sense of humour, and an almost eerie number of small things in common. When she stood to leave, I did something I had never done before or since: I asked, my heart pounding, whether she might like to continue the conversation over coffee sometime.\n\nThat was eleven years ago. The woman on the train is now my wife, and whenever anyone asks how we met, I tell them this story and watch their faces. People love the idea that the most important relationships can begin by pure accident. What I have never quite decided is whether the accident was really an accident at all — or whether, on some ordinary Tuesday morning, oversleeping was the luckiest thing I have ever done.",
        q: [
          mc("Why was the narrator on the later train?", ["He preferred it.", "He overslept and missed his usual train.", "The earlier one was cancelled.", "He was told to."], 1, "'I overslept, missed my usual service'."),
          mc("What first broke the silence between them?", ["The narrator's confidence.", "The book she was reading.", "A delay.", "Another passenger."], 1, "'It was the book… that broke the silence'."),
          mc("How does the narrator describe the conversation?", ["Awkward.", "Easy and unguarded, as if between old friends.", "Brief.", "Formal."], 1, "'easy, unguarded conversation'."),
          mc("What did the narrator do that was completely out of character?", ["Ignore her.", "Ask her for coffee.", "Change trains.", "Read her book."], 1, "'I asked… whether she might like to continue… over coffee'."),
          mc("What is the narrator's view on 'fate'?", ["He firmly believes in it.", "He doesn't believe in it, yet can't fully explain the coincidence.", "He is certain it was fate.", "He never thinks about it."], 1, "'I have never believed in fate… What I have never quite decided…'"),
          mc("The phrase 'my heart pounding' shows that the narrator was:", ["bored", "nervous", "angry", "sleepy"], 1, "corazón acelerado = nervioso."),
        ],
      },
      p6: {
        title: "The friend I never thanked",
        text: "There is one friendship in my life that I regret above all others — not because it ended badly, but because I never properly acknowledged what it gave me. (1)___ Her name was Grace, and she sat next to me throughout secondary school.\n\nAt the time, I did not think of Grace as anyone special. (2)___ She was simply always there: dependable, kind, endlessly patient with my teenage moods. Looking back, I can see that she quietly held me together through some very difficult years.\n\nWhen my parents were divorcing, and my home life had become unbearable, it was Grace who noticed. (3)___ She never made a fuss or demanded to know what was wrong. She simply stayed close, walked me home every day, and let me talk when I wanted to and be silent when I didn't.\n\nWe drifted apart, as school friends so often do, when we left for different universities. (4)___ There was no falling-out, no dramatic ending — just the slow, sad fading of a friendship that neither of us fought to keep.\n\nI think of Grace often now, and of everything she did without ever being asked. (5)___ If I could send one message across the years, it would be a simple thank you. (6)___ We so rarely tell the quiet, steady people in our lives how much they mattered — until it is too late.",
        options: [
          "It is the debt I can never now repay.",                     // A -> gap 1
          "In the careless way of the young, I took her for granted.",  // B -> gap 2
          "Somehow, she always knew when I was struggling.",           // C -> gap 3
          "Within a year, we had lost touch completely.",              // D -> gap 4
          "I never once told her what her friendship meant.",          // E -> gap 5
          "That, perhaps, is the real lesson of her story.",           // F -> gap 6
          "We had always argued constantly about everything.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la deuda que ya no puede pagar."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la daba por sentada."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: siempre sabía cuándo sufría."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: perdieron el contacto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: nunca le dijo lo que significó."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa es la lección."),
        ],
      },
      p7: {
        title: "Four people describe a person they admire",
        text: "Read what four people say about someone they admire.\n\nA) JAMES: The person I admire most is my old boss. She was tough — she never let anything slide — but she was completely fair, and she believed in me before I believed in myself. She once gave me a project everyone said was beyond me. I was terrified, but I rose to it, and it changed my career. I owe her everything.\n\nB) SOFIA: I look up to my aunt, who left home at eighteen with nothing and built a successful business from scratch. What amazes me isn't the success, though — it's that she stayed completely down-to-earth. She's the same warm, funny person she always was. Money never changed her.\n\nC) HASSAN: For me, it's my old football coach. He taught me far more than football. He drilled into us that talent means nothing without hard work, and that how you lose says more about you than how you win. I still hear his voice in my head whenever I'm tempted to give up.\n\nD) MEI: I admire my grandmother more than anyone. She lived through war, poverty and terrible loss, yet she never became bitter. She remained curious, generous and full of laughter to the very end. If I can face my own troubles with even half her grace, I'll consider my life well lived.",
        q: [
          mc("Who admires someone for staying humble despite success?", ["A", "B", "C", "D"], 1, "Sofia: 'stayed completely down-to-earth'."),
          mc("Who admires someone who believed in them professionally?", ["A", "B", "C", "D"], 0, "James: 'she believed in me before I believed in myself'."),
          mc("Who learned life lessons through sport?", ["A", "B", "C", "D"], 2, "Hassan: 'taught me far more than football'."),
          mc("Who admires someone's response to great suffering?", ["A", "B", "C", "D"], 3, "Mei: 'lived through war… never became bitter'."),
          mc("Who was given a challenge that transformed their career?", ["A", "B", "C", "D"], 0, "James: 'a project everyone said was beyond me… changed my career'."),
          mc("Who still hears the person's advice in difficult moments?", ["A", "B", "C", "D"], 2, "Hassan: 'I still hear his voice in my head'."),
          mc("Who admires someone who built something from nothing?", ["A", "B", "C", "D"], 1, "Sofia: 'built a successful business from scratch'."),
          mc("Who hopes to face life with the same quality as the person?", ["A", "B", "C", "D"], 3, "Mei: 'with even half her grace'."),
          mc("Who describes the person as strict but fair?", ["A", "B", "C", "D"], 0, "James: 'tough… but completely fair'."),
          mc("Who values the lesson that effort matters more than talent?", ["A", "B", "C", "D"], 2, "Hassan: 'talent means nothing without hard work'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The people around us have more influence on us than we like to admit.'\nComenta estos dos aspectos y añade uno propio:\n1. friends (los amigos)\n2. family (la familia)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A person I admire' — descríbelo/a y explica qué has aprendido de él/ella.\n· RELATO que empiece con: 'If I had caught the earlier train that day, my life would have been completely different.'", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Man: We're complete opposites, but that's exactly why it works — she balances me out. Two. Woman: I hadn't seen him for ten years, and yet the moment we met, it was as if no time had passed at all. Three. Man: I used to check my emails the second I woke up. Now I don't touch my phone until after breakfast. Four. Woman: What I admire about her is that fame never changed her — she's exactly the same person. Five. Man: I was absolutely thrilled — I never expected to win anything. Six. Woman: We fell out over something so trivial I can't even remember what it was. Seven. Man: I've been feeling really on edge lately; I think I just need a proper break. Eight. Woman: He'll happily sit and listen to your problems for hours. He's the best listener I know.", [
      mc("1. Why does the man's relationship work?", ["They're identical.", "Their opposite characters balance each other.", "They live apart."], 1, "'she balances me out'."),
      mc("2. What surprised the woman when she met the man again?", ["He'd changed.", "It felt as if no time had passed.", "He was late."], 1, "'as if no time had passed'."),
      mc("3. What habit has the man changed?", ["Checking emails first thing.", "Skipping breakfast.", "Going to bed late."], 0, "'used to check my emails the second I woke up'."),
      mc("4. What does the woman admire about her?", ["Her fame.", "That fame didn't change her.", "Her money."], 1, "'fame never changed her'."),
      mc("5. How did the man feel?", ["Disappointed.", "Thrilled.", "Nervous."], 1, "'absolutely thrilled'."),
      mc("6. What does the woman say about the argument?", ["It was very serious.", "It was over something trivial.", "It never happened."], 1, "'something so trivial'."),
      mc("7. How has the man been feeling?", ["Relaxed.", "On edge / stressed.", "Content."], 1, "'really on edge'."),
      mc("8. Why is the man valued?", ["He talks a lot.", "He's an excellent listener.", "He's funny."], 1, "'the best listener I know'."),
    ]),

    ...speakingParts({ p1: "cómo eres, a quién admiras y cómo te han influido las personas cercanas", p2: "dos relaciones distintas (dos viejos amigos reencontrándose y una familia unida cenando): compáralas y di qué las hace especiales", p3: "qué hace que una relación (de amistad o familiar) dure toda la vida (el respeto, el tiempo juntos, la honestidad, el perdón): comentadlo y elegid lo más importante", p4: "las relaciones y la personalidad: cómo nos cambian las personas que nos rodean, si es posible cambiar de carácter y qué hace a alguien admirable" }),

    SUMMARY("Resumen de la Semana 1 (B2)", [
      "Dominas los tiempos (present perfect simple/continuous, narración, presente), los hábitos y los adverbios.",
      "Has practicado las 7 partes de Use of English, el Writing (essay + tarea) y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: el futuro (todas las formas, future perfect/continuous) y las ambiciones.",
    ]),
    INFO("Mini-simulacro de la Semana 1", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Use of English y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 2."),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Personalidad y relaciones",
  description: "Repaso de tiempos a nivel B2 (present perfect simple/continuous, narración, presente, hábitos) y adverbios. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
