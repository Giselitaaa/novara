/**
 * B1 Preliminary · Semana 6 — "Sueños, hipótesis y deseos".
 * Gramática: segundo condicional, tercer condicional, wish/if only, y conectores
 * condicionales (unless/as long as/in case) + preferencias (I'd rather).
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
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "if we…, we could, I'd rather, how about, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 26 ─────────────────────────
const DAY26 = {
  title: "Día 26 — Segundo condicional · Sueños y ambiciones",
  description: "if + pasado simple, would + infinitivo (situaciones irreales/improbables). Vocabulario de sueños y metas. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Hablar de situaciones hipotéticas o improbables (2º condicional).",
    summary: "Segundo condicional; sueños/ambiciones; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'If I would have money'.", "'If I will win'.", "'If I was' vs 'if I were'."],
    reviewPrompts: ["¿Qué tiempo va tras 'if' en el 2º condicional?", "¿'would' en qué mitad?"],
  },
  items: [
    TEXT("🔁 Semana 6. Hoy el SEGUNDO CONDICIONAL: sueños e hipótesis (si tuviera…, haría…). Vocabulario: SUEÑOS y AMBICIONES."),
    GRAMMAR("Segundo condicional", `Para situaciones IMAGINARIAS, improbables o irreales en el presente/futuro:
IF + PASADO SIMPLE , WOULD + infinitivo sin to.
· If I had more money, I would travel the world.
· She would be happier if she changed jobs.
En vez de 'would' también: could (posibilidad), might (quizás).
⚠️ Con el verbo 'be' es habitual 'were' para todas las personas: If I were you, I'd rest. (consejo típico)
NO se usa 'would' ni 'will' tras 'if': ❌ If I would have… ❌ If I will win…`),
    WARN("Errores típicos del hispanohablante", "· ❌ If I would have money → ✅ If I had money.\n· ❌ If I will win → ✅ If I won (2º cond.).\n· ❌ I would travelled → ✅ I would travel.\n· Consejo: 'If I were you, I'd…' (no 'If I am you')."),
    grammarEx("Gramática — Segundo condicional", "Completa con la forma correcta.", [
      fb("If I ___ (have) more time, I would learn the piano.", ["had"], "if + pasado."),
      fb("She would travel more if she ___ (have) more money.", ["had"], "if + pasado."),
      fb("If I ___ (be) you, I'd apologise.", ["were", "was"], "consejo: If I were you."),
      mc("Choose:", ["If I would win, I'd be happy.", "If I won, I'd be happy.", "If I win, I'd be happy."], 1, "2º cond.: if + pasado."),
      fb("We ___ (buy) a house if we could afford it.", ["would buy"], "would + infinitivo."),
      mc("Choose:", ["If he studied more, he would passing.", "If he studied more, he would pass.", "If he studies more, he would pass."], 1, "would + infinitivo sin to."),
      fb("What ___ you ___ (do) if you won the lottery?", ["would", "do"], "would + infinitivo."),
    ]),
    GRAMMAR("Vocabulario del día — Sueños y ambiciones", "Léxico de metas (B1)."),
    deck("B1 S6D26 — Sueños y ambiciones", [
      ["dream", "sueño / soñar", "My dream is to become a pilot.", "sustantivo/verbo", "driːm"],
      ["ambition", "ambición / meta", "Her ambition is to run a company.", "sustantivo", "æmˈbɪʃn"],
      ["achieve", "lograr / conseguir", "You can achieve anything with effort.", "verbo", "əˈtʃiːv"],
      ["goal", "objetivo / meta", "Set yourself a clear goal.", "sustantivo", "ɡəʊl"],
      ["succeed", "tener éxito", "She worked hard to succeed.", "verbo", "səkˈsiːd"],
      ["opportunity", "oportunidad", "It's a great opportunity.", "sustantivo", "ˌɒpəˈtjuːnəti"],
      ["motivated", "motivado/a", "I feel really motivated today.", "adjetivo", "ˈməʊtɪveɪtɪd"],
      ["give up", "rendirse / abandonar", "Never give up on your dreams.", "phrasal verb", "ɡɪv ˈʌp"],
      ["determined", "decidido/a / con determinación", "She's determined to win.", "adjetivo", "dɪˈtɜːmɪnd"],
      ["realistic", "realista", "Be ambitious but realistic.", "adjetivo", "ˌrɪəˈlɪstɪk"],
    ]),
    vocabEx("Vocabulario — Sueños y ambiciones", "Elige la opción correcta.", [
      mc("Something you really want to do in the future is your ___.", ["ambition", "opportunity", "goal"], 0, "ambition (o dream/goal)."),
      mc("To reach something you worked for is to ___ it.", ["achieve", "give up", "succeed"], 0, "achieve."),
      mc("A good chance to do something is an ___.", ["opportunity", "ambition", "goal"], 0, "opportunity."),
      mc("If you feel eager and full of energy to act, you're ___.", ["motivated", "realistic", "determined"], 0, "motivated."),
      mc("To stop trying is to ___.", ["give up", "achieve", "succeed"], 0, "give up."),
      mc("Someone who won't stop until they reach a goal is ___.", ["determined", "realistic", "motivated"], 0, "determined."),
    ]),

    ...readingParts({
      p1: { title: "Sueños y anuncios", items: [
        mc("Poster: 'Follow your dreams — free careers advice on Monday.'", ["Free careers advice on Monday.", "No advice.", "Only paid help."], 0, "'free careers advice on Monday'."),
        mc("Ad: 'A once-in-a-lifetime opportunity to study abroad.'", ["A special chance to study abroad.", "A local job.", "No study."], 0, "'once-in-a-lifetime opportunity'."),
        mc("Note: 'Set a goal, make a plan, never give up.'", ["Advice on reaching goals.", "Advice to quit.", "No plan."], 0, "'never give up'."),
        mc("Text: 'If I had the money, I'd travel the world.'", ["An imaginary wish.", "A real plan.", "A memory."], 0, "'If I had the money, I'd travel'."),
        mc("Sign: 'Motivation workshop — be determined, achieve more.'", ["A workshop about motivation.", "A holiday.", "A test."], 0, "'Motivation workshop'."),
      ] },
      p2text: "FOUR DREAM COURSES\n\nA) Pilot School — expensive and demanding, but if you love flying, it's the ultimate dream.\nB) Cookery Academy — turn your passion for food into a career; hard work, but delicious!\nC) Music College — for talented, determined people who dream of performing on stage.\nD) Design Studio — creative training for those who imagine a future in art and fashion.",
      p2q: { title: "Emparejar personas y cursos", items: [
        mc("Nadia has always dreamed of flying planes.", ["A", "B", "C", "D"], 0, "Pilot School."),
        mc("Ben loves cooking and wants to work with food.", ["A", "B", "C", "D"], 1, "Cookery Academy."),
        mc("Sara is a talented singer who dreams of the stage.", ["A", "B", "C", "D"], 2, "Music College."),
        mc("Leo is creative and interested in art and fashion.", ["A", "B", "C", "D"], 3, "Design Studio."),
        mc("A course for someone who loves food.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "IF I COULD CHANGE ONE THING\n\nWe all daydream sometimes about how our lives could be different. If I could change one thing about the world, I wouldn't ask for more money or fame. Instead, I would give everyone the chance to follow their dreams, whatever their background.\n\nI think about my own grandfather, who was a brilliant, curious man. As a boy, he dreamed of becoming an engineer. But his family was poor, and he had to leave school at fourteen to work in a factory. If he had been born today, in a different situation, I'm sure he would have designed bridges or machines. He never complained, but I often wonder what he might have achieved if he had had the opportunity. It seems so unfair that talent alone is not always enough.\n\nOf course, I know the world can't be made perfect. Not everyone can do exactly what they want, and success also takes hard work and a little luck. But I truly believe that if more young people were given real opportunities, the whole world would benefit. Somewhere out there, there is a child who could cure a terrible disease or write a wonderful book — if only they were given the chance.",
      p3q: { title: "Si pudiera cambiar una cosa (texto largo)", items: [
        mc("What would the writer NOT ask for?", ["Opportunities.", "More money or fame.", "Fairness."], 1, "'wouldn't ask for more money or fame'."),
        mc("What did the grandfather dream of becoming?", ["A doctor.", "An engineer.", "A teacher."], 1, "'dreamed of becoming an engineer'."),
        mc("Why did he leave school at fourteen?", ["He was lazy.", "His family was poor.", "He hated school."], 1, "'his family was poor… work in a factory'."),
        mc("What does the writer believe about opportunities?", ["They don't matter.", "More opportunities would help the whole world.", "Only money matters."], 1, "'if more young people were given real opportunities, the whole world would benefit'."),
        mc("What does the writer say success also needs?", ["Only talent.", "Hard work and a little luck.", "Only money."], 1, "'success also takes hard work and a little luck'."),
      ] },
      p4text: "THE DREAM I NEARLY GAVE UP\n\nWhen I was young, I had one big dream: to become a doctor. (1)___ But the path was long and difficult, and there were many times when I almost gave up.\n\nThe hardest moment came when I failed an important exam. (2)___ I remember thinking that if I were more intelligent, I would have passed easily. For a few weeks, I seriously considered quitting. (3)___ My mother, however, refused to let me. 'If you give up now,' she said, 'you'll regret it for the rest of your life.'\n\nHer words gave me the strength to try again. I studied harder than ever, and the next year I passed. (4)___ Today, I'm a doctor in a children's hospital, and I love my job more than anything. (5)___ If I had listened to my doubts back then, none of this would have been possible.",
      p4options: [
        "I wanted to help people more than anything in the world.",  // A -> gap 1
        "I felt like a complete failure.",                          // B -> gap 2
        "It seemed easier to choose a simpler career.",             // C -> gap 3
        "That success changed the whole course of my life.",        // D -> gap 4
        "I decided that doctors were completely useless.",          // E (extra)
        "I'm so grateful that my mother believed in me.",           // F -> gap 5
        "I had never been interested in medicine at all.",          // G (extra)
        "The exam was cancelled that year.",                        // H (extra)
      ],
      p4q: { title: "El sueño que casi abandono (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: quería ayudar a la gente."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: se sintió un fracaso."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: parecía más fácil algo simple."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: ese éxito cambió su vida."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: agradece que su madre creyera en él."),
      ] },
      p5text: "Everyone should have a (1)___ to work towards. If you set a clear goal, you're far more likely to (2)___ it. Of course, it helps to be (3)___: aiming for the impossible only leads to disappointment. But you should never (4)___ up too soon. If more people stayed (5)___ and kept trying, they would be amazed at what they could (6)___.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["dream", "opportunity", "success", "chance"], 0, "'a dream to work towards'."),
        mc("Hueco 2", ["achieve", "give", "succeed", "motivate"], 0, "'achieve it'."),
        mc("Hueco 3", ["realistic", "motivated", "determined", "ambitious"], 0, "'be realistic'."),
        mc("Hueco 4", ["give", "achieve", "succeed", "set"], 0, "'never give up'."),
        mc("Hueco 5", ["motivated", "realistic", "successful", "lucky"], 0, "'stayed motivated'."),
        mc("Hueco 6", ["achieve", "give", "realise", "succeed"], 0, "'what they could achieve'."),
      ] },
      p6text: "Hi Sam,\nI've been thinking a lot about the future lately. If I (1)___ (have) enough money, I (2)___ study to become a doctor. It's my biggest dream! Of course, if I (3)___ you, I'd say that's not very realistic — but I'm determined. My mum always says that if I (4)___ give up too soon, I'll regret it. So I'm staying (5)___ and working hard. Who knows? If I keep trying, maybe one day I (6)___ actually achieve it!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["had"], "'If I had enough money' (2º cond.)."),
        fb("Hueco 2", ["would", "'d"], "'I would study'."),
        fb("Hueco 3", ["were", "was"], "'if I were you'."),
        fb("Hueco 4", ["give"], "'if I give up too soon' (1er cond. real)."),
        fb("Hueco 5", ["motivated", "determined"], "'staying motivated'."),
        fb("Hueco 6", ["will", "'ll", "could", "might"], "'maybe one day I will achieve it'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por tus sueños para el futuro. Responde a su email (~100 palabras):\n· dile cuál es tu mayor sueño y por qué,\n· usa el 2º condicional (If I could…, I would…),\n· pregúntale por sus ambiciones.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it important to have big dreams?' con tu opinión y razones.\n· RELATO: empieza con: 'If I could change one thing about my life, I would…'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: What would you do if you won the lottery? Man: I'd travel around the world. Two. Man: What's your ambition? Woman: To become a doctor one day. Three. Woman: Are you going to give up? Man: No, I'm too determined for that. Four. Man: Why don't you apply? Woman: If I were more qualified, I would. Five. Woman: What's your dream job? Man: I've always wanted to be a pilot. Six. Man: Is it a good chance? Woman: Yes, it's a real opportunity. Seven. Woman: How do you stay motivated? Man: I set myself a small goal every week.", [
      mc("1. What would the man do if he won the lottery?", ["Buy a house.", "Travel around the world.", "Stop working."], 1, "'I'd travel around the world'."),
      mc("2. What is the woman's ambition?", ["To be a pilot.", "To become a doctor.", "To travel."], 1, "'To become a doctor one day'."),
      mc("3. Is the man going to give up?", ["Yes.", "No, he's too determined.", "Maybe."], 1, "'I'm too determined for that'."),
      mc("4. Why won't the woman apply?", ["No time.", "She feels she isn't qualified enough.", "No interest."], 1, "'If I were more qualified, I would'."),
      mc("5. What is the man's dream job?", ["Doctor.", "Pilot.", "Teacher."], 1, "'be a pilot'."),
      mc("6. What does the woman say about the chance?", ["It's bad.", "It's a real opportunity.", "It's too late."], 1, "'it's a real opportunity'."),
      mc("7. How does the man stay motivated?", ["He rests.", "He sets a small weekly goal.", "He gives up."], 1, "'a small goal every week'."),
    ]),

    ...speakingParts("los sueños y las ambiciones", { p1: "qué te gustaría ser o hacer en el futuro y por qué", p2: "personas persiguiendo un sueño (estudiando, entrenando, actuando)", p3: "qué harías con un premio de dinero para mejorar vuestra ciudad", p4: "los sueños, si es importante ser ambicioso y cómo alcanzar las metas" }),

    SUMMARY("Resumen del Día 26", [
      "2º condicional: If + pasado simple, would + infinitivo (situación imaginaria).",
      "Consejo: If I were you, I'd… Nunca 'would/will' tras 'if'.",
      "Vocabulario de sueños. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 27", "Escribe 3 frases con el 2º condicional sobre tus sueños. Repasa las flashcards. Mañana: el tercer condicional (arrepentimientos del pasado)."),
  ],
};

// ───────────────────────── DÍA 27 ─────────────────────────
const DAY27 = {
  title: "Día 27 — Tercer condicional · Decisiones y arrepentimientos",
  description: "if + past perfect, would have + participio (pasado irreal). Vocabulario de decisiones. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Hablar de un pasado imaginario y sus consecuencias (3er condicional).",
    summary: "Tercer condicional; decisiones/arrepentimientos; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'If I would have known'.", "'would of'.", "olvidar el past perfect tras 'if'."],
    reviewPrompts: ["¿Qué tiempo va tras 'if' en el 3er condicional?", "¿'would have' + qué forma?"],
  },
  items: [
    TEXT("🔁 Repaso: 2º condicional. Hoy el TERCER CONDICIONAL: imaginar un pasado distinto (si hubiera…, habría…). Vocabulario: DECISIONES."),
    GRAMMAR("Tercer condicional", `Para un pasado IMAGINARIO (que NO ocurrió) y su consecuencia:
IF + PAST PERFECT (had + participio) , WOULD HAVE + participio.
· If I had studied harder, I would have passed. (pero no estudié → no aprobé)
· She wouldn't have missed the train if she had left earlier.
También con could have / might have (consecuencia posible): I could have won if I had trained.
⚠️ NO uses 'would' tras 'if': ❌ If I would have known…  ✅ If I had known…
⚠️ Se escribe 'would HAVE', no 'would OF' (aunque suene igual).`),
    WARN("Errores típicos del hispanohablante", "· ❌ If I would have known → ✅ If I had known.\n· ❌ would of done → ✅ would have done.\n· ❌ If I had study → ✅ If I had studied.\n· El orden puede invertirse (con o sin coma): I would have called if I'd had your number."),
    grammarEx("Gramática — Tercer condicional", "Completa con la forma correcta.", [
      fb("If I ___ (study) harder, I would have passed.", ["had studied"], "if + past perfect."),
      fb("She would have come if you ___ (invite) her.", ["had invited"], "if + past perfect."),
      fb("If we had left earlier, we ___ (not/miss) the train.", ["wouldn't have missed"], "would not have + participio."),
      mc("Choose:", ["If I would have known, I'd have helped.", "If I had known, I'd have helped.", "If I knew, I'd have helped."], 1, "3er cond.: if + past perfect."),
      fb("I ___ (win) the race if I had trained more. (posibilidad)", ["could have won", "would have won", "might have won"], "could/might/would have + participio."),
      mc("Choose:", ["He would of passed.", "He would have passed.", "He would has passed."], 1, "would HAVE."),
      fb("If they ___ (not/be) late, they would have seen the start.", ["hadn't been"], "if + past perfect negativo."),
    ]),
    GRAMMAR("Vocabulario del día — Decisiones", "Léxico de decisiones y arrepentimientos (B1)."),
    deck("B1 S6D27 — Decisiones", [
      ["decide", "decidir", "I decided to accept the job.", "verbo", "dɪˈsaɪd"],
      ["choice", "elección / opción", "It was a difficult choice.", "sustantivo", "tʃɔɪs"],
      ["regret", "arrepentirse / lamentar", "I regret not travelling more.", "verbo/sustantivo", "rɪˈɡret"],
      ["mistake", "error", "It was a big mistake.", "sustantivo", "mɪˈsteɪk"],
      ["opportunity", "oportunidad", "I missed a great opportunity.", "sustantivo", "ˌɒpəˈtjuːnəti"],
      ["change your mind", "cambiar de opinión", "She changed her mind at the last minute.", "colocación", "tʃeɪndʒ jə ˈmaɪnd"],
      ["consequence", "consecuencia", "Every choice has a consequence.", "sustantivo", "ˈkɒnsɪkwəns"],
      ["hesitate", "dudar / titubear", "Don't hesitate to ask.", "verbo", "ˈhezɪteɪt"],
      ["turn down", "rechazar", "He turned down the offer.", "phrasal verb", "tɜːn ˈdaʊn"],
      ["worth it", "valer la pena", "The effort was worth it.", "colocación", "ˈwɜːθ ɪt"],
    ]),
    vocabEx("Vocabulario — Decisiones", "Elige la opción correcta.", [
      mc("To feel sorry about a past decision is to ___ it.", ["regret", "decide", "choose"], 0, "regret."),
      mc("The result of an action is a ___.", ["consequence", "choice", "mistake"], 0, "consequence."),
      mc("To refuse an offer is to ___ it.", ["turn down", "change your mind", "hesitate"], 0, "turn down."),
      mc("To pause because you're unsure is to ___.", ["hesitate", "decide", "regret"], 0, "hesitate."),
      mc("If the effort brings a good result, it was ___.", ["worth it", "a mistake", "a choice"], 0, "worth it."),
      mc("To decide differently from before is to ___.", ["change your mind", "turn down", "hesitate"], 0, "change your mind."),
    ]),

    ...readingParts({
      p1: { title: "Decisiones y avisos", items: [
        mc("Note: 'I regret not taking the job — it was a mistake.'", ["They wish they'd taken the job.", "They took the job.", "They're happy."], 0, "'I regret not taking the job'."),
        mc("Text: 'Don't hesitate to call if you need help.'", ["Call without worrying.", "Never call.", "Call only once."], 0, "'Don't hesitate to call'."),
        mc("Message: 'She changed her mind and stayed.'", ["She decided differently and stayed.", "She left.", "She never decided."], 0, "'changed her mind and stayed'."),
        mc("Sign: 'Think about the consequences before you act.'", ["Consider the results first.", "Act quickly.", "Ignore results."], 0, "'Think about the consequences'."),
        mc("Review: 'Hard work, but it was worth it in the end.'", ["The effort paid off.", "It was pointless.", "It was easy."], 0, "'it was worth it in the end'."),
      ] },
      p2text: "FOUR BIG DECISIONS\n\nA) Gap Year — travel and gain experience before university; exciting, but you fall a year behind.\nB) University Now — start your studies straight away; safe, but you might feel unready.\nC) Start Working — earn money immediately; practical, but harder to study later.\nD) Train Abroad — learn a skill in another country; a huge adventure, but far from home.",
      p2q: { title: "Emparejar personas y decisiones", items: [
        mc("Nadia wants adventure and experience before studying.", ["A", "B", "C", "D"], 0, "Gap Year."),
        mc("Ben feels ready and wants to begin his degree now.", ["A", "B", "C", "D"], 1, "University Now."),
        mc("Sara needs to earn money as soon as possible.", ["A", "B", "C", "D"], 2, "Start Working."),
        mc("Leo dreams of learning a trade in another country.", ["A", "B", "C", "D"], 3, "Train Abroad."),
        mc("A choice that means falling a year behind.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE DECISION THAT CHANGED MY LIFE\n\nWhen I was nineteen, I was offered a place at a famous university in another city. It was everything I had dreamed of. And yet, at the last moment, I turned it down. For years afterwards, I regretted that decision more than anything. If I had gone, I told myself, my whole life would have been different — and better.\n\nThe reason I stayed was my mother, who had become seriously ill. There was no one else to look after her, so I found a job nearby and cared for her instead. It was hard, and I often felt that I had thrown away my future. If I had been more selfish, I sometimes thought, I would have followed my dream.\n\nBut looking back now, I see things very differently. During those years, my mother and I grew incredibly close, and I wouldn't trade those memories for anything. What's more, the job I took by chance led me to the career I love today. If I had gone to that university, I would never have met my wife, who worked in the same office. So was turning down my dream really a mistake? I used to think so. Now I realise that life has a strange way of leading us exactly where we need to be.",
      p3q: { title: "La decisión que cambió mi vida (texto largo)", items: [
        mc("What did the writer do at nineteen?", ["Went to university.", "Turned down a university place.", "Travelled abroad."], 1, "'I turned it down'."),
        mc("Why did the writer stay?", ["Lack of money.", "To care for a seriously ill mother.", "Fear."], 1, "'my mother, who had become seriously ill'."),
        mc("How did the writer feel for years afterwards?", ["Proud.", "Full of regret.", "Relieved."], 1, "'I regretted that decision more than anything'."),
        mc("What good things came from staying?", ["Nothing.", "Closeness with mother, a career, meeting his wife.", "Only money."], 1, "'grew incredibly close… career I love… met my wife'."),
        mc("What does the writer now realise?", ["It was a mistake.", "Life leads us where we need to be.", "He should have left."], 1, "'life has a strange way of leading us exactly where we need to be'."),
      ] },
      p4text: "THE PHONE CALL I ALMOST DIDN'T MAKE\n\nOne Sunday evening, I saw a job advertised online. (1)___ It was perfect for me, but the deadline was that very night, and I was tired and full of doubts.\n\n'There's no point,' I told myself. 'Hundreds of people will apply, and I'll never get it.' (2)___ I very nearly closed my laptop and went to bed. If I had done that, everything that followed would never have happened. (3)___ But at the last second, something made me change my mind. I filled in the form and pressed 'send'.\n\nTwo weeks later, I was invited for an interview, and a month after that, I got the job. (4)___ It completely changed the direction of my life. Whenever I feel like giving up now, I remember that Sunday evening. (5)___ If I had listened to my doubts, I would have missed the best opportunity of my life.",
      p4options: [
        "It was exactly the kind of work I had always wanted.",      // A -> gap 1
        "My confidence had completely disappeared.",                // B -> gap 2
        "I would have carried on in a job I disliked.",             // C -> gap 3
        "That single decision opened so many doors.",               // D -> gap 4
        "I deleted the advert and forgot about it.",                // E (extra)
        "How glad I am that I made that phone call!",                // F -> gap 5
        "I had never wanted a job in my life.",                     // G (extra)
        "The company had already closed down.",                     // H (extra)
      ],
      p4q: { title: "La llamada que casi no hago (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: justo el trabajo que quería."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: había perdido la confianza."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: habría seguido en un trabajo que odiaba."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: esa decisión abrió puertas."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: qué contento de haber llamado."),
      ] },
      p5text: "Life is full of difficult choices. Sometimes we make a (1)___ we later regret, and we imagine how things would have been if we had decided differently. But it's important to remember that every choice has a (2)___, and we can't know the future. If you get a good (3)___, don't (4)___ too long, or it may disappear. On the other hand, don't be afraid to (5)___ your mind if you realise you're wrong. In the end, most decisions are (6)___ it if you learn from them.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["choice", "consequence", "regret", "mistake"], 0, "'a choice we later regret' (o 'mistake')."),
        mc("Hueco 2", ["consequence", "choice", "mistake", "chance"], 0, "'every choice has a consequence'."),
        mc("Hueco 3", ["opportunity", "consequence", "regret", "mistake"], 0, "'a good opportunity'."),
        mc("Hueco 4", ["hesitate", "decide", "regret", "choose"], 0, "'don't hesitate too long'."),
        mc("Hueco 5", ["change", "turn", "make", "give"], 0, "'change your mind'."),
        mc("Hueco 6", ["worth", "worthy", "value", "worthwhile"], 0, "'worth it'."),
      ] },
      p6text: "Hi Sam,\nI keep thinking about a decision I made years ago. I turned (1)___ a place at university to look after my mum. For a long time, I thought that if I (2)___ gone, my life (3)___ have been better. But now I see things differently. If I (4)___ left, I would never have met my wife! It's strange — if I (5)___ made that 'mistake', none of my happiness now would have happened. I've learned that most choices are (6)___ it in the end.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["down"], "'turned down a place'."),
        fb("Hueco 2", ["had"], "'if I had gone' (3er cond.)."),
        fb("Hueco 3", ["would", "'d"], "'my life would have been better'."),
        fb("Hueco 4", ["had"], "'if I had left'."),
        fb("Hueco 5", ["hadn't"], "'if I hadn't made that mistake'."),
        fb("Hueco 6", ["worth"], "'worth it in the end'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te cuenta una decisión difícil que tomó. Responde a su email (~100 palabras):\n· dile qué piensas de su decisión,\n· cuenta una decisión importante de tu vida,\n· usa el 3er condicional (If I had…, I would have…).", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Should we ever regret our decisions?' con tu opinión.\n· RELATO: empieza con: 'If I had known then what I know now, I would have…'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Do you regret turning down the job? Man: Yes, if I'd accepted it, I'd have earned more. Two. Man: Why didn't you come? Woman: If you'd told me earlier, I would have. Three. Woman: Was the trip worth it? Man: Definitely, despite the cost. Four. Man: Did you make the right choice? Woman: I think so, though it was hard. Five. Man: Why did you change your mind? Woman: I thought about the consequences. Six. Woman: What would you have done differently? Man: I'd have studied harder at school.", [
      mc("1. Does the man regret turning down the job?", ["No.", "Yes, he'd have earned more.", "He's not sure."], 1, "'if I'd accepted it, I'd have earned more'."),
      mc("2. Why didn't the woman come?", ["She was ill.", "He told her too late.", "She forgot."], 1, "'If you'd told me earlier, I would have'."),
      mc("3. Was the trip worth it?", ["No.", "Yes, despite the cost.", "Only just."], 1, "'Definitely, despite the cost'."),
      mc("4. Did the woman make the right choice?", ["No.", "She thinks so, though it was hard.", "She regrets it."], 1, "'I think so, though it was hard'."),
      mc("5. Why did the woman change her mind?", ["A friend told her.", "She thought about the consequences.", "No reason."], 1, "'I thought about the consequences'."),
      mc("6. What would the man have done differently?", ["Travelled more.", "Studied harder at school.", "Nothing."], 1, "'I'd have studied harder at school'."),
    ]),

    ...speakingParts("las decisiones importantes", { p1: "una decisión importante que tomaste y si te arrepientes de algo", p2: "personas tomando decisiones (eligiendo, pensando, firmando algo)", p3: "qué debería hacer un/a joven al terminar el instituto: estudiar, trabajar o viajar", p4: "las decisiones, los arrepentimientos y aprender de los errores" }),

    SUMMARY("Resumen del Día 27", [
      "3er condicional: If + past perfect (had done), would have + participio. Pasado imaginario.",
      "También could/might have. 'would HAVE', no 'would of'. Nunca 'would' tras 'if'.",
      "Vocabulario de decisiones. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 28", "Escribe 3 frases con el 3er condicional sobre tu pasado. Repasa las flashcards. Mañana: deseos y arrepentimientos con 'wish' e 'if only'."),
  ],
};

// ───────────────────────── DÍA 28 ─────────────────────────
const DAY28 = {
  title: "Día 28 — Deseos y arrepentimientos (wish / if only) · Sentimientos",
  description: "wish/if only + pasado (deseo presente) y + past perfect (arrepentimiento pasado). Vocabulario de sentimientos. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Expresar deseos presentes y arrepentimientos pasados con wish/if only.",
    summary: "wish / if only; sentimientos; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'I wish I have'.", "'I wish I would be'.", "'if only I knew' vs 'had known'."],
    reviewPrompts: ["¿'wish' + qué tiempo para el presente?", "¿Y para arrepentirte del pasado?"],
  },
  items: [
    TEXT("🔁 Repaso: 3er condicional. Hoy los DESEOS y ARREPENTIMIENTOS con WISH / IF ONLY. Vocabulario: los SENTIMIENTOS."),
    GRAMMAR("wish / if only", `DESEO sobre el PRESENTE (algo que quisieras diferente ahora): wish/if only + PASADO SIMPLE.
· I wish I had more money. (pero no lo tengo)
· If only I knew the answer. Con 'be' → were: I wish I were taller.
ARREPENTIMIENTO del PASADO (ojalá hubiera/no hubiera): wish/if only + PAST PERFECT.
· I wish I had studied harder. (pero no lo hice)
· If only I hadn't said that.
QUEJA / molestia con otras personas: wish + would (para pedir un cambio de conducta):
· I wish you would stop shouting. I wish it would stop raining.`),
    WARN("Errores típicos del hispanohablante", "· ❌ I wish I have more time → ✅ I wish I had more time.\n· ❌ I wish I would be rich → ✅ I wish I were rich.\n· ❌ I wish I studied (para el pasado) → ✅ I wish I had studied.\n· 'if only' funciona igual que 'wish'."),
    grammarEx("Gramática — wish / if only", "Completa con la forma correcta.", [
      fb("I wish I ___ (have) more free time.", ["had"], "wish + pasado (deseo presente)."),
      fb("If only I ___ (be) taller!", ["were", "was"], "wish/if only + were."),
      fb("I wish I ___ (study) harder last year.", ["had studied"], "wish + past perfect (arrepentimiento)."),
      fb("If only I ___ (not/say) that yesterday.", ["hadn't said"], "wish/if only + past perfect negativo."),
      mc("Choose:", ["I wish I have a car.", "I wish I had a car.", "I wish I would have a car."], 1, "wish + pasado."),
      fb("I wish you ___ (stop) interrupting me! (queja)", ["would stop"], "wish + would (queja)."),
      mc("Choose (past regret):", ["I wish I studied medicine.", "I wish I had studied medicine.", "I wish I would study medicine."], 1, "arrepentimiento → had studied."),
    ]),
    GRAMMAR("Vocabulario del día — Sentimientos", "Léxico de emociones (B1)."),
    deck("B1 S6D28 — Sentimientos", [
      ["proud", "orgulloso/a", "I'm so proud of you.", "adjetivo", "praʊd"],
      ["disappointed", "decepcionado/a", "I was disappointed with the result.", "adjetivo", "ˌdɪsəˈpɔɪntɪd"],
      ["nervous", "nervioso/a", "I felt nervous before the exam.", "adjetivo", "ˈnɜːvəs"],
      ["relieved", "aliviado/a", "I was relieved when it was over.", "adjetivo", "rɪˈliːvd"],
      ["jealous", "celoso/a / envidioso/a", "He was jealous of her success.", "adjetivo", "ˈdʒeləs"],
      ["embarrassed", "avergonzado/a", "I was so embarrassed!", "adjetivo", "ɪmˈbærəst"],
      ["grateful", "agradecido/a", "I'm grateful for your help.", "adjetivo", "ˈɡreɪtfl"],
      ["frustrated", "frustrado/a", "I felt frustrated by the delay.", "adjetivo", "frʌˈstreɪtɪd"],
      ["confident", "seguro/a", "She felt confident about the test.", "adjetivo", "ˈkɒnfɪdənt"],
      ["upset", "disgustado/a / afectado/a", "She was upset by the news.", "adjetivo", "ʌpˈset"],
    ]),
    vocabEx("Vocabulario — Sentimientos", "Elige la opción correcta.", [
      mc("When something you hoped for doesn't happen, you feel ___.", ["disappointed", "proud", "relieved"], 0, "disappointed."),
      mc("When a worrying situation ends well, you feel ___.", ["relieved", "nervous", "jealous"], 0, "relieved."),
      mc("When you want what someone else has, you feel ___.", ["jealous", "grateful", "proud"], 0, "jealous."),
      mc("When you feel silly in front of others, you feel ___.", ["embarrassed", "confident", "relieved"], 0, "embarrassed."),
      mc("When someone helps you and you appreciate it, you feel ___.", ["grateful", "jealous", "upset"], 0, "grateful."),
      mc("When things keep going wrong, you feel ___.", ["frustrated", "proud", "confident"], 0, "frustrated."),
    ]),

    ...readingParts({
      p1: { title: "Sentimientos y mensajes", items: [
        mc("Card: 'I'm so proud of everything you've achieved!'", ["Praising someone's achievements.", "A complaint.", "A goodbye."], 0, "'so proud of everything you've achieved'."),
        mc("Text: 'I wish I hadn't said that — I feel awful.'", ["They regret what they said.", "They're happy.", "They said nothing."], 0, "'I wish I hadn't said that'."),
        mc("Note: 'Thanks for everything — I'm really grateful.'", ["Expressing gratitude.", "An apology.", "A warning."], 0, "'I'm really grateful'."),
        mc("Message: 'Don't be nervous, you'll do great!'", ["Encouraging someone worried.", "Criticism.", "A reminder."], 0, "'Don't be nervous, you'll do great'."),
        mc("Text: 'I was so relieved when I heard you were safe.'", ["Relief that someone is safe.", "Anger.", "Disappointment."], 0, "'so relieved when I heard you were safe'."),
      ] },
      p2text: "FOUR WAYS TO FEEL BETTER\n\nA) Talk to a Friend — sharing your feelings with someone you trust often makes problems smaller.\nB) Get Outside — a walk in nature can lift your mood when you feel low or frustrated.\nC) Write it Down — keeping a diary helps you understand and let go of difficult emotions.\nD) Help Someone — doing something kind for others is a proven way to feel happier yourself.",
      p2q: { title: "Emparejar personas y consejos", items: [
        mc("Nadia feels better when she shares her worries.", ["A", "B", "C", "D"], 0, "Talk to a Friend."),
        mc("Ben feels calmer after being in nature.", ["A", "B", "C", "D"], 1, "Get Outside."),
        mc("Sara likes to make sense of her feelings on paper.", ["A", "B", "C", "D"], 2, "Write it Down."),
        mc("Leo cheers up when he does something kind.", ["A", "B", "C", "D"], 3, "Help Someone."),
        mc("A way to feel better by helping others.", ["A", "B", "C", "D"], 3, "D."),
      ] },
      p3text: "THE DAY I LEARNED TO FORGIVE MYSELF\n\nFor years, I carried a heavy feeling of regret. When I was seventeen, I said something cruel to my best friend during an argument, and a week later, before we had made up, her family moved away. I never got the chance to apologise. For a long time, I would lie awake at night thinking, 'If only I hadn't said those words.' I wished I could go back and change everything.\n\nThe guilt affected everything I did. I felt I didn't deserve to be happy, and I found it hard to trust myself in friendships. Then, many years later, something wonderful happened. Out of nowhere, I received a message from that old friend. She had found me online. Nervously, I began to type an apology, but she stopped me. She wrote that she had completely forgotten the argument, and that she remembered only the happy times we had shared.\n\nIn that moment, a weight I had carried for half my life simply disappeared. I realised that I had punished myself far more harshly than anyone else ever would have. We all make mistakes, especially when we are young. The lesson I finally learned was this: it's important to say sorry, but it's just as important to forgive yourself. Holding on to old guilt helps no one, least of all you.",
      p3q: { title: "El día que aprendí a perdonarme (texto largo)", items: [
        mc("What did the writer do at seventeen?", ["Moved away.", "Said something cruel to a friend.", "Lost a friend forever."], 1, "'said something cruel to my best friend'."),
        mc("Why couldn't the writer apologise?", ["Too proud.", "The friend's family moved away.", "Forgot."], 1, "'her family moved away… never got the chance'."),
        mc("How did the guilt affect the writer?", ["Not at all.", "Felt undeserving of happiness, hard to trust in friendships.", "Made them happy."], 1, "'I felt I didn't deserve to be happy'."),
        mc("What did the old friend say in her message?", ["She was still angry.", "She'd forgotten the argument and remembered happy times.", "She never wrote."], 1, "'forgotten the argument… remembered only the happy times'."),
        mc("What lesson did the writer learn?", ["Never apologise.", "Say sorry, but also forgive yourself.", "Hold on to guilt."], 1, "'say sorry, but… forgive yourself'."),
      ] },
      p4text: "THE EXAM I THOUGHT I'D FAILED\n\nI have never felt as nervous as I did on the morning of my final music exam. (1)___ I had practised for months, but as I waited outside the room, my hands were shaking.\n\nThe moment I began to play, everything went wrong. I made a mistake in the very first line, and after that I couldn't concentrate. (2)___ When I finished, I was sure I had failed. I walked out feeling completely disappointed in myself, wishing I had never entered.\n\nFor two weeks, I dreaded the results. (3)___ I kept thinking, 'If only I hadn't made that first mistake.' Then, finally, the letter arrived. My hands trembled as I opened it. (4)___ To my astonishment, I had passed — with the highest mark in my class! The examiner had written that everyone makes mistakes, and that what mattered was how beautifully I had carried on. (5)___ I had spent two weeks feeling terrible for absolutely no reason.",
      p4options: [
        "My whole future seemed to depend on that one performance.", // A -> gap 1
        "The rest of the piece felt like a disaster.",              // B -> gap 2
        "I could barely eat or sleep with worry.",                  // C -> gap 3
        "I almost couldn't bring myself to read it.",               // D -> gap 4
        "I had never played a musical instrument before.",          // E (extra)
        "What a relief, and what a lesson, that day was!",          // F -> gap 5
        "I was completely relaxed and confident throughout.",       // G (extra)
        "The exam was cancelled at the last minute.",               // H (extra)
      ],
      p4q: { title: "El examen que creí suspender (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: su futuro dependía de eso."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: el resto fue un desastre."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: apenas comía o dormía."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: casi no se atrevía a leerla."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: qué alivio y qué lección."),
      ] },
      p5text: "It's normal to feel (1)___ before an important event, like an exam or an interview. Afterwards, if it goes badly, you might feel (2)___ in yourself. Sometimes we say, 'I (3)___ I had prepared more.' But it's important not to be too hard on yourself. When things finally go well, you feel (4)___ that all the worry is over. And when someone helps you, remember to tell them how (5)___ you are. Learning to manage your (6)___ is one of the most useful skills in life.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["nervous", "relieved", "proud", "grateful"], 0, "'feel nervous before'."),
        mc("Hueco 2", ["disappointed", "relieved", "grateful", "proud"], 0, "'disappointed in yourself'."),
        mc("Hueco 3", ["wish", "hope", "want", "think"], 0, "'I wish I had prepared'."),
        mc("Hueco 4", ["relieved", "nervous", "jealous", "upset"], 0, "'feel relieved that the worry is over'."),
        mc("Hueco 5", ["grateful", "jealous", "nervous", "upset"], 0, "'how grateful you are'."),
        mc("Hueco 6", ["emotions", "feelings", "moods", "emotions/feelings"], 1, "'manage your feelings'."),
      ] },
      p6text: "Hi Sam,\nGuess what — I passed my music exam! I was so (1)___ before it that my hands were shaking, and I made a mistake at the start. Afterwards I kept thinking, 'If only I (2)___ made that mistake!' I really wished I (3)___ never entered. For two weeks I felt terrible. But when the letter came, I had the top mark! I was so (4)___ that I nearly cried. I've learned that I (5)___ worry so much — and that I should be (6)___ for what I can do, not upset about small mistakes!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["nervous"], "'so nervous before it'."),
        fb("Hueco 2", ["hadn't"], "'If only I hadn't made that mistake'."),
        fb("Hueco 3", ["had"], "'I wished I had never entered'."),
        fb("Hueco 4", ["relieved", "happy"], "'so relieved that I nearly cried'."),
        fb("Hueco 5", ["shouldn't"], "'I shouldn't worry so much'."),
        fb("Hueco 6", ["proud", "grateful"], "'be proud/grateful for what I can do'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a está nervioso/a por un examen. Responde a su email (~100 palabras):\n· dile que no esté nervioso/a y anímale,\n· cuenta una vez que tú estuviste nervioso/a y cómo salió,\n· dale un consejo para sentirse mejor.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'How to deal with nerves before an important day' con consejos.\n· RELATO: empieza con: 'I had never felt so nervous in my life.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre un taller para gestionar las emociones y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear information about a wellbeing workshop. Welcome to our 'Feel Better' workshop, designed to help you manage stress and difficult emotions. The workshop lasts two hours and takes place every Thursday evening. It's led by a psychologist called Dr Lewis. You'll learn simple techniques, such as deep breathing and keeping a diary. The best news is that it's completely free for students. Please bring a notebook and a pen. Remember, it's normal to feel nervous, and asking for help is a sign of strength, not weakness.", [
      fb("The workshop lasts ___ hours.", ["two", "2"], "'lasts two hours'."),
      fb("It takes place every ___ evening.", ["Thursday"], "'every Thursday evening'."),
      fb("It's led by a psychologist called Dr ___.", ["Lewis"], "'Dr Lewis'."),
      fb("It's completely ___ for students.", ["free"], "'completely free for students'."),
      fb("Please bring a notebook and a ___.", ["pen"], "'a notebook and a pen'."),
    ]),

    ...speakingParts("los sentimientos y las emociones", { p1: "cómo te sientes antes de un examen y qué haces para calmarte", p2: "personas con distintas emociones (nervios, alegría, alivio)", p3: "qué hacer para animar a un amigo/a que se siente decepcionado/a", p4: "las emociones, cómo gestionarlas y por qué es bueno hablar de ellas" }),

    SUMMARY("Resumen del Día 28", [
      "wish/if only + pasado simple = deseo presente (I wish I had…). Con 'be' → were.",
      "wish/if only + past perfect = arrepentimiento pasado (I wish I had done…).",
      "wish + would = queja. Vocabulario de sentimientos. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 29", "Escribe 2 deseos presentes (wish + pasado) y 2 arrepentimientos (wish + past perfect). Repasa las flashcards. Mañana: conectores condicionales y preferencias."),
  ],
};

// ───────────────────────── DÍA 29 ─────────────────────────
const DAY29 = {
  title: "Día 29 — Conectores condicionales y preferencias · El dinero",
  description: "unless, as long as, in case, provided that; I'd rather / would prefer. Vocabulario del dinero. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Matizar condiciones (unless/as long as/in case) y expresar preferencias.",
    summary: "Conectores condicionales + preferencias; dinero; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'unless' + not.", "'I'd rather to go'.", "'in case of' vs 'in case'."],
    reviewPrompts: ["¿'unless' significa…?", "¿'I'd rather' + qué forma verbal?"],
  },
  items: [
    TEXT("🔁 Repaso: wish. Hoy los CONECTORES CONDICIONALES (unless, as long as, in case) y cómo expresar PREFERENCIAS. Vocabulario: el DINERO."),
    GRAMMAR("Conectores condicionales y preferencias", `CONECTORES (con presente para el futuro):
· UNLESS = if not (a menos que): I won't go unless you come. (= if you don't come)
· AS LONG AS / PROVIDED (THAT) / PROVIDING = siempre que: You can borrow it as long as you return it.
· IN CASE = por si (acaso): Take an umbrella in case it rains. (¡NO 'if'! es prevención)
PREFERENCIAS:
· would rather + infinitivo SIN to: I'd rather stay home. I'd rather not go.
· would prefer + to + infinitivo: I'd prefer to walk.
· prefer + -ing / prefer A to B: I prefer tea to coffee.
⚠️ 'unless' ya es negativo: ❌ unless you don't come.`),
    WARN("Errores típicos del hispanohablante", "· ❌ unless you don't help → ✅ unless you help.\n· ❌ I'd rather to go → ✅ I'd rather go.\n· ❌ I'd prefer go → ✅ I'd prefer to go.\n· 'in case it rains' (prevención) ≠ 'if it rains' (condición)."),
    grammarEx("Gramática — Conectores y preferencias", "Completa o elige.", [
      fb("I won't come ___ you invite me. (= if you don't)", ["unless"], "unless = if not."),
      fb("You can borrow the car ___ ___ ___ you drive carefully.", ["as long as"], "as long as = siempre que."),
      fb("Take a coat ___ ___ it gets cold.", ["in case"], "in case = por si acaso."),
      mc("Choose:", ["I'd rather to stay home.", "I'd rather stay home.", "I'd rather staying home."], 1, "would rather + infinitivo sin to."),
      mc("Choose:", ["I'd prefer walk.", "I'd prefer to walk.", "I'd prefer walking to."], 1, "would prefer + to + infinitivo."),
      fb("I'd rather ___ (not/go) out tonight.", ["not go"], "would rather not + infinitivo."),
      mc("Choose:", ["I prefer tea than coffee.", "I prefer tea to coffee.", "I prefer tea of coffee."], 1, "prefer A to B."),
    ]),
    GRAMMAR("Vocabulario del día — El dinero", "Léxico de dinero y gasto (B1)."),
    deck("B1 S6D29 — El dinero", [
      ["save", "ahorrar", "I'm saving for a holiday.", "verbo", "seɪv"],
      ["spend", "gastar", "Don't spend all your money.", "verbo", "spend"],
      ["borrow", "pedir prestado", "Can I borrow ten euros?", "verbo", "ˈbɒrəʊ"],
      ["lend", "prestar", "I'll lend you the money.", "verbo", "lend"],
      ["afford", "permitirse", "I can't afford it.", "verbo", "əˈfɔːd"],
      ["waste", "malgastar", "Don't waste money on that.", "verbo", "weɪst"],
      ["budget", "presupuesto", "I'm on a tight budget.", "sustantivo", "ˈbʌdʒɪt"],
      ["owe", "deber (dinero)", "You owe me five euros.", "verbo", "əʊ"],
      ["worth", "que vale", "It's worth a lot of money.", "adjetivo", "wɜːθ"],
      ["broke", "sin blanca / arruinado", "I'm completely broke this month.", "adjetivo", "brəʊk"],
    ]),
    vocabEx("Vocabulario — El dinero", "Elige la opción correcta.", [
      mc("To keep money for the future is to ___.", ["save", "spend", "waste"], 0, "save."),
      mc("To take money from someone to return later is to ___.", ["borrow", "lend", "owe"], 0, "borrow."),
      mc("To give someone money to return later is to ___.", ["lend", "borrow", "save"], 0, "lend."),
      mc("A plan for how much you can spend is a ___.", ["budget", "waste", "worth"], 0, "budget."),
      mc("If you have no money at all, you're ___.", ["broke", "worth", "budget"], 0, "broke."),
      mc("To use money badly on useless things is to ___ it.", ["waste", "save", "afford"], 0, "waste."),
    ]),

    ...readingParts({
      p1: { title: "Dinero y avisos", items: [
        mc("Sign: 'Buy now, pay later — as long as you're over 18.'", ["You can pay later if you're over 18.", "No credit.", "Only under-18s."], 0, "'as long as you're over 18'."),
        mc("Note: 'Save 10% unless you pay by card.'", ["No discount if you pay by card.", "Always 10% off.", "Card gets extra discount."], 0, "'Save 10% unless you pay by card'."),
        mc("Text: 'Take extra cash in case the machine is broken.'", ["Bring cash as a precaution.", "Machines never break.", "No cash needed."], 0, "'in case the machine is broken'."),
        mc("Message: 'You still owe me €20 from last week.'", ["They must be repaid €20.", "They lent nothing.", "They paid already."], 0, "'You still owe me €20'."),
        mc("Ad: 'This antique could be worth thousands.'", ["It may have great value.", "It's worthless.", "It's free."], 0, "'could be worth thousands'."),
      ] },
      p2text: "FOUR WAYS TO MANAGE MONEY\n\nA) The Saver — puts money aside every month; sensible, but sometimes misses out on fun.\nB) The Budgeter — plans every penny; never broke, but it takes discipline.\nC) The Spender — enjoys life now; generous, but often runs out of money.\nD) The Investor — takes small risks hoping money will grow; exciting, but not always safe.",
      p2q: { title: "Emparejar personas y estilos", items: [
        mc("Nadia always keeps some money for the future.", ["A", "B", "C", "D"], 0, "The Saver."),
        mc("Ben plans exactly where every euro goes.", ["A", "B", "C", "D"], 1, "The Budgeter."),
        mc("Sara loves spending and enjoying life now.", ["A", "B", "C", "D"], 2, "The Spender."),
        mc("Leo likes taking small risks to grow his money.", ["A", "B", "C", "D"], 3, "The Investor."),
        mc("Someone who is never broke but needs discipline.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "MONEY CAN'T BUY HAPPINESS — OR CAN IT?\n\n'Money can't buy happiness.' We've all heard this saying a thousand times, usually from people who seem quite comfortable themselves. But is it actually true? In my view, the honest answer is: it depends.\n\nOn one hand, it's clearly foolish to believe that money alone will make you happy. Some of the richest people in the world are also the loneliest, and studies show that beyond a certain point, having more money makes very little difference to how satisfied we feel. I'd rather have loyal friends and good health than a huge bank account and nobody to share it with. As long as you have enough to live comfortably, chasing more and more wealth often just leads to stress.\n\nOn the other hand, we shouldn't pretend that money doesn't matter at all. It's easy to say money isn't important when you have plenty of it. For someone who can't afford to heat their home or feed their children, more money would certainly bring more happiness — or at least less misery. So perhaps the truth is this: money can't buy happiness, but it can buy security, choices and time. And used wisely, those things can help create the conditions in which happiness is able to grow.",
      p3q: { title: "¿El dinero da la felicidad? (texto largo)", items: [
        mc("What is the writer's overall answer?", ["Yes, always.", "It depends.", "No, never."], 1, "'the honest answer is: it depends'."),
        mc("What do studies show about money beyond a certain point?", ["It always helps.", "It makes little difference to satisfaction.", "It causes poverty."], 1, "'beyond a certain point… very little difference'."),
        mc("What would the writer rather have?", ["A huge bank account.", "Loyal friends and good health.", "Fame."], 1, "'loyal friends and good health'."),
        mc("For a poor family, what would more money bring?", ["Nothing.", "More happiness, or less misery.", "More stress."], 1, "'more money would certainly bring more happiness'."),
        mc("What does the writer say money CAN buy?", ["Happiness itself.", "Security, choices and time.", "Nothing useful."], 1, "'money… can buy security, choices and time'."),
      ] },
      p4text: "THE JAR OF COINS\n\nWhen I was a child, my grandmother kept an old glass jar on her kitchen shelf. (1)___ Every evening, she would drop a few small coins into it, and over the years it grew surprisingly heavy.\n\nI never understood why she bothered. (2)___ 'What's the point of saving such tiny amounts?' I once asked her. She just smiled and told me to be patient. She said I could have whatever was inside — but only as long as I waited until I was eighteen. (3)___ For years, I forgot all about it.\n\nThen, on my eighteenth birthday, she handed me the jar. (4)___ When we counted the coins, I could hardly believe it: there was enough to pay for my first term at college. Those 'tiny amounts' had added up to something that changed my life. (5)___ To this day, I keep a jar of my own, and whenever I drop a coin in, I think of her.",
      p4options: [
        "It was completely full of copper and silver.",             // A -> gap 1
        "The coins seemed far too small to matter.",                // B -> gap 2
        "It felt like a promise that was easy to forget.",          // C -> gap 3
        "I had never expected it to be worth anything.",            // D -> gap 4
        "She threw the jar in the bin the next day.",               // E (extra)
        "My grandmother taught me the real value of saving.",       // F -> gap 5
        "We spent all the money on sweets immediately.",            // G (extra)
        "The jar had always been completely empty.",                // H (extra)
      ],
      p4q: { title: "El bote de monedas (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: estaba lleno de cobre y plata."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: las monedas parecían insignificantes."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: una promesa fácil de olvidar."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: no esperaba que valiera nada."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le enseñó el valor de ahorrar."),
      ] },
      p5text: "Managing money well is an important life skill. It's sensible to (1)___ a little every month, so you're never completely (2)___. Try to make a (3)___ and stick to it. Don't (4)___ money on things you don't need, and be careful about how much you (5)___ from friends — always pay it back. Remember, you can enjoy life (6)___ long as you don't spend more than you earn.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["save", "spend", "waste", "owe"], 0, "'save a little every month'."),
        mc("Hueco 2", ["broke", "worth", "budget", "rich"], 0, "'never completely broke'."),
        mc("Hueco 3", ["budget", "waste", "worth", "coin"], 0, "'make a budget'."),
        mc("Hueco 4", ["waste", "save", "afford", "lend"], 0, "'don't waste money'."),
        mc("Hueco 5", ["borrow", "lend", "save", "spend"], 0, "'how much you borrow from friends'."),
        mc("Hueco 6", ["as", "so", "in", "unless"], 0, "'as long as'."),
      ] },
      p6text: "Hi Sam,\nI'm trying to be better with money this year! I've decided to save a bit every month (1)___ long as I can. I won't buy anything expensive (2)___ it's really worth it. My gran always says you should take some cash (3)___ case your card doesn't work. I'd (4)___ save now and travel later than be broke on holiday! I still (5)___ you €10 from last month, by the way — I'll pay you back soon. I really can't (6)___ to forget it again!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["as"], "'as long as I can'."),
        fb("Hueco 2", ["unless"], "'unless it's really worth it'."),
        fb("Hueco 3", ["in"], "'in case your card doesn't work'."),
        fb("Hueco 4", ["rather"], "'I'd rather save now'."),
        fb("Hueco 5", ["owe"], "'I still owe you €10'."),
        fb("Hueco 6", ["afford"], "'can't afford to forget it'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere ahorrar dinero pero le cuesta. Responde a su email (~100 palabras):\n· dale dos consejos para ahorrar (usa 'as long as' / 'unless'),\n· cuenta cómo gestionas tú tu dinero,\n· pregúntale para qué quiere ahorrar.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Can money buy happiness?' con tu opinión y razones.\n· RELATO: empieza con: 'My grandmother handed me the old jar and smiled.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con una joven experta en ahorro y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young woman, Sofia, about saving money. Interviewer: Sofia, what's your top tip for saving? Sofia: Save a small amount every month, as long as you do it regularly. Interviewer: Isn't it hard when you're young? Sofia: It is, but I'd rather save a little now than be broke later. Interviewer: What's the biggest mistake people make? Sofia: They waste money on things they don't need, just because they're on sale. Interviewer: What about borrowing? Sofia: Only borrow if you really have to, and always pay it back. Interviewer: Any final advice? Sofia: Make a budget and stick to it. You'll be surprised how much you can save.", [
      mc("What is Sofia's top tip?", ["Spend more.", "Save a small amount regularly.", "Never save."], 1, "'Save a small amount every month… regularly'."),
      mc("What does she prefer?", ["To be broke later.", "To save a little now.", "To borrow."], 1, "'I'd rather save a little now than be broke later'."),
      mc("What is the biggest mistake people make?", ["Saving too much.", "Wasting money on things they don't need.", "Making budgets."], 1, "'waste money on things they don't need'."),
      mc("What does she say about borrowing?", ["Borrow freely.", "Only if you must, and always pay it back.", "Never pay it back."], 1, "'Only borrow if you really have to… pay it back'."),
      mc("What is her final advice?", ["Spend it all.", "Make a budget and stick to it.", "Don't save."], 1, "'Make a budget and stick to it'."),
    ]),

    ...speakingParts("el dinero", { p1: "si ahorras o gastas, para qué ahorras y cómo gestionas tu dinero", p2: "personas relacionadas con el dinero (comprando, ahorrando, en un banco)", p3: "cómo gastar un premio de dinero para la clase: una fiesta o un viaje", p4: "el dinero, ahorrar vs. disfrutar ahora y si el dinero da la felicidad" }),

    SUMMARY("Resumen del Día 29", [
      "unless (= if not), as long as/provided that (= siempre que), in case (por si acaso).",
      "Preferencias: would rather + infinitivo sin to; would prefer + to; prefer A to B.",
      "Vocabulario del dinero. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 30", "Escribe 3 frases con unless/as long as/in case. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 30 ─────────────────────────
const DAY30 = {
  title: "Día 30 — Repaso de la semana + mini-simulacro (mitad del curso)",
  description: "Consolidación de condicionales, wish y conectores. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 6. ¡Mitad del curso!",
  pedagogy: {
    objective: "Consolidar condicionales, deseos y preferencias.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro. Mitad del curso.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 7."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 6 del B1. ¡Estás en la MITAD del curso (día 30 de 60)! Consolidas condicionales, wish y conectores. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 6", `1) 2º condicional: If + pasado, would + infinitivo (hipótesis presente/futura).
2) 3er condicional: If + past perfect, would have + participio (pasado imaginario).
3) wish/if only: + pasado (deseo presente), + past perfect (arrepentimiento), + would (queja).
4) Conectores: unless (= if not), as long as, in case (prevención). Preferencias: I'd rather + inf., I'd prefer to + inf.`),
    grammarEx("Repaso mixto de gramática — Semana 6", "Completa o elige.", [
      fb("If I ___ (have) more money, I'd travel. (2º cond.)", ["had"], "if + pasado."),
      fb("If I ___ (study) harder, I would have passed. (3er cond.)", ["had studied"], "if + past perfect."),
      fb("I wish I ___ (have) more free time. (deseo presente)", ["had"], "wish + pasado."),
      fb("I wish I ___ (not/say) that yesterday. (arrepentimiento)", ["hadn't said"], "wish + past perfect."),
      fb("I won't go ___ you come with me. (= if not)", ["unless"], "unless."),
      mc("Choose:", ["I'd rather to stay in.", "I'd rather stay in.", "I'd rather staying in."], 1, "would rather + infinitivo sin to."),
      fb("Take an umbrella ___ ___ it rains.", ["in case"], "in case."),
      mc("Choose:", ["If I would win, I'd be happy.", "If I won, I'd be happy.", "If I win, I'd been happy."], 1, "2º cond."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 6", "Repasa los mazos (sueños, decisiones, sentimientos, dinero)."),
    vocabEx("Repaso de vocabulario — Semana 6", "Elige la opción correcta.", [
      mc("To reach something you worked for:", ["achieve", "give up", "succeed"], 0, "achieve."),
      mc("To feel sorry about a past decision:", ["regret", "decide", "choose"], 0, "regret."),
      mc("When a worrying situation ends well, you feel:", ["relieved", "nervous", "jealous"], 0, "relieved."),
      mc("To keep money for the future:", ["save", "spend", "waste"], 0, "save."),
      mc("A good chance to do something:", ["opportunity", "ambition", "goal"], 0, "opportunity."),
      mc("If you have no money at all, you're:", ["broke", "worth", "budget"], 0, "broke."),
      mc("To refuse an offer:", ["turn down", "change your mind", "hesitate"], 0, "turn down."),
      mc("When you want what someone else has, you feel:", ["jealous", "grateful", "proud"], 0, "jealous."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Poster: 'Follow your dreams — careers fair on Friday.'", ["A careers fair on Friday.", "No fair.", "Only on Monday."], 0, "'careers fair on Friday'."),
        mc("Text: 'If I'd known, I would have come earlier.'", ["They regret coming late.", "They came early.", "They didn't come."], 0, "'If I'd known, I would have come earlier'."),
        mc("Note: 'I wish I had more time to travel.'", ["A present wish.", "A plan.", "A memory."], 0, "'I wish I had more time'."),
        mc("Sign: 'Buy now, pay later — as long as you're over 18.'", ["Pay later if over 18.", "No credit.", "Under-18s only."], 0, "'as long as you're over 18'."),
        mc("Message: 'Take a coat in case it gets cold.'", ["Bring a coat as a precaution.", "It won't be cold.", "No coat."], 0, "'in case it gets cold'."),
      ] },
      p2text: "FOUR LIFE-CHANGING BOOKS\n\nA) Dream Big — how ordinary people achieved extraordinary goals; perfect if you need motivation.\nB) No Regrets — real stories about difficult decisions and how people learned to live with them.\nC) Mind Matters — a friendly guide to understanding and managing your emotions.\nD) Money Sense — simple advice on saving, budgeting and spending wisely.",
      p2q: { title: "Emparejar personas y libros", items: [
        mc("Nadia needs motivation to chase her goals.", ["A", "B", "C", "D"], 0, "Dream Big."),
        mc("Ben struggles with a decision he regrets.", ["A", "B", "C", "D"], 1, "No Regrets."),
        mc("Sara wants to understand her feelings better.", ["A", "B", "C", "D"], 2, "Mind Matters."),
        mc("Leo wants to learn to manage his money.", ["A", "B", "C", "D"], 3, "Money Sense."),
        mc("A book about difficult decisions.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE ROAD NOT TAKEN\n\nMost of us, at some point, wonder about 'the road not taken' — the life we might have lived if we had made different choices. What if I had studied a different subject? What if I had said yes instead of no? These questions can be fascinating, but they can also become a trap.\n\nI have a friend called Marco who is a perfect example. Ten years ago, he was offered an exciting job in another country, but he turned it down to stay near his family. He is comfortable and, by most measures, successful. Yet he cannot stop thinking about that decision. 'If only I had gone,' he often sighs. 'My life would have been so much more interesting.' He is so busy mourning the life he didn't choose that he fails to enjoy the very good life he actually has.\n\nOf course, it's natural to reflect on our past, and we should certainly learn from our mistakes. But there is a difference between learning and regretting. The truth is that we can never know how the other road would have turned out. Marco imagines a wonderful life abroad, but he might just as easily have been lonely and unhappy there. My advice, for what it's worth, is this: think about your choices, make the best ones you can, and then let them go. The only road you can actually walk is the one you're on.",
      p3q: { title: "El camino no tomado (texto largo)", items: [
        mc("What do many people wonder about?", ["The future.", "The life they might have lived with different choices.", "Other people."], 1, "'the life we might have lived if we had made different choices'."),
        mc("What did Marco turn down?", ["A holiday.", "An exciting job abroad.", "A house."], 1, "'an exciting job in another country'."),
        mc("What is Marco's problem?", ["He's poor.", "He can't stop regretting his decision.", "He's ill."], 1, "'cannot stop thinking about that decision'."),
        mc("What might the other road actually have been like?", ["Definitely better.", "Possibly lonely and unhappy.", "Exactly the same."], 1, "'he might just as easily have been lonely and unhappy'."),
        mc("What is the writer's advice?", ["Always regret.", "Make good choices, then let them go.", "Never decide."], 1, "'make the best ones you can, and then let them go'."),
      ] },
      p4text: "THE SECOND CHANCE\n\nWhen I was twenty, I failed my driving test three times, and after the third failure, I gave up completely. (1)___ For the next ten years, I relied on buses and lifts from friends, always feeling a little embarrassed about it.\n\nThen, last year, my circumstances changed. I got a job that I couldn't reach by public transport. (2)___ I realised that if I didn't learn to drive, I would have to turn the job down. This time, the motivation was different. (3)___ I booked lessons, practised every single day, and refused to let my old fears win.\n\nOn the morning of the test, I was so nervous that I almost cancelled. (4)___ But I remembered how much I wanted this, and I forced myself to go. When the examiner said 'You've passed,' I could have cried with relief. (5)___ If I had let my past failures stop me, I would have missed a job I now love. It's never too late to try again.",
      p4options: [
        "I was convinced I would never be able to drive.",          // A -> gap 1
        "Suddenly, driving wasn't a luxury but a necessity.",       // B -> gap 2
        "I wasn't a scared young person any more.",                 // C -> gap 3
        "All my old doubts came flooding back.",                    // D -> gap 4
        "I decided to give up driving forever.",                    // E (extra)
        "That second chance changed everything for me.",            // F -> gap 5
        "I had actually passed on my very first try.",              // G (extra)
        "The test was cancelled because of the weather.",           // H (extra)
      ],
      p4q: { title: "La segunda oportunidad (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: creía que nunca conduciría."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: conducir pasó a ser necesario."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: ya no era un joven asustado."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: volvieron las dudas."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: esa segunda oportunidad lo cambió todo."),
      ] },
      p5text: "We all have dreams, but achieving them takes courage. Sometimes we fail, and we (1)___ we had done things differently. But it's important not to spend your life (2)___ the past. If you get a second (3)___, take it — as (4)___ as you're willing to work hard. Don't turn (5)___ an opportunity just because you're afraid. Remember: if you never try, you'll never know what you (6)___ have achieved.",
      p5q: { title: "Huecos con opciones (vocabulario/gramática)", items: [
        mc("Hueco 1", ["wish", "hope", "want", "think"], 0, "'we wish we had done'."),
        mc("Hueco 2", ["regretting", "regret", "to regret", "regretted"], 0, "'spend your life regretting'."),
        mc("Hueco 3", ["chance", "budget", "consequence", "mistake"], 0, "'a second chance'."),
        mc("Hueco 4", ["long", "soon", "much", "far"], 0, "'as long as'."),
        mc("Hueco 5", ["down", "up", "off", "in"], 0, "'turn down an opportunity'."),
        mc("Hueco 6", ["would", "will", "could", "should"], 0, "'what you would have achieved'."),
      ] },
      p6text: "Hi Sam,\nBig news — I finally passed my driving test! I failed three times when I was younger and gave up. I always wished I (1)___ tried harder back then. But last year I got a job I couldn't reach (2)___ I could drive. If I (3)___ learned, I would have had to turn (4)___ the job! I was so nervous I nearly cancelled the test, but I'm so glad I didn't. If I (5)___ let my old failures stop me, I would have missed this chance. It's never too late — as (6)___ as you keep trying!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["had"], "'wished I had tried harder'."),
        fb("Hueco 2", ["unless"], "'couldn't reach unless I could drive'."),
        fb("Hueco 3", ["hadn't"], "'If I hadn't learned…'"),
        fb("Hueco 4", ["down"], "'turn down the job'."),
        fb("Hueco 5", ["had"], "'If I had let my failures stop me'."),
        fb("Hueco 6", ["long"], "'as long as you keep trying'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere volver a intentar algo en lo que falló antes. Responde a su email (~100 palabras):\n· anímale a intentarlo de nuevo,\n· cuenta una vez que tú lo lograste al segundo intento,\n· dale un consejo para no rendirse.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it ever too late to try again?' con tu opinión.\n· RELATO: empieza con: 'After failing three times, I had almost given up.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: What would you do if you had a year off? Man: I'd travel and learn a language. Two. Man: Do you regret it? Woman: Yes, if I'd studied more, I'd have passed. Three. Woman: How do you feel now? Man: So relieved it's finally over. Four. Man: Will you come? Woman: Not unless you promise to be on time. Five. Man: Shall we eat out? Woman: I'd rather cook at home tonight. Six. Woman: Are you saving up? Man: Yes, for a car, as long as I can.", [
      mc("1. What would the man do with a year off?", ["Work.", "Travel and learn a language.", "Nothing."], 1, "'I'd travel and learn a language'."),
      mc("2. Does the woman regret it?", ["No.", "Yes, she'd have passed if she'd studied more.", "She's unsure."], 1, "'if I'd studied more, I'd have passed'."),
      mc("3. How does the man feel now?", ["Nervous.", "Relieved it's over.", "Jealous."], 1, "'So relieved it's finally over'."),
      mc("4. When will the woman come?", ["Never.", "Only if he's on time.", "Always."], 1, "'Not unless you promise to be on time'."),
      mc("5. What does the woman prefer tonight?", ["Eating out.", "Cooking at home.", "Ordering in."], 1, "'I'd rather cook at home'."),
      mc("6. What is the man saving for?", ["A holiday.", "A car.", "A house."], 1, "'for a car, as long as I can'."),
    ]),

    ...speakingParts("los sueños, las decisiones y el dinero", { p1: "tus sueños, una decisión importante que tomaste y cómo gestionas el dinero", p2: "personas persiguiendo metas, decidiendo o con el dinero", p3: "qué haríais con un año libre y algo de dinero ahorrado", p4: "los sueños, aprender de los errores y el papel del dinero en la felicidad" }),

    SUMMARY("Resumen de la Semana 6 (B1) — ¡mitad del curso!", [
      "Dominas los condicionales 2º y 3º, los deseos (wish/if only) y los conectores condicionales.",
      "Has completado 30 días: la MITAD del programa B1. Has practicado las 4 destrezas cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los verbos con partícula (phrasal verbs) y las colocaciones frecuentes.",
    ]),
    INFO("Mini-simulacro de la Semana 6", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. ¡Vas por la mitad, sigue así!"),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Sueños, hipótesis y deseos",
  description: "Condicionales 2º y 3º, deseos con wish/if only y conectores condicionales. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
