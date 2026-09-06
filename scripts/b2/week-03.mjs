/**
 * B2 First · Semana 3 — "Condicionales e hipótesis".
 * Gramática: los cuatro condicionales, condicionales mixtos, alternativas a 'if'
 * (unless/provided/as long as/suppose/but for), wish/if only/it's time/would
 * rather, e inversión condicional. Cada día, las 4 destrezas (formato B2).
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, if I could, what I'd really like, the reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they might be … -ing, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 11 ─────────────────────────
const DAY11 = {
  title: "Día 11 — Condicionales 0/1/2 y alternativas a 'if' · El dinero",
  description: "Zero/first/second conditional y unless/provided/as long as/in case. Vocabulario de dinero. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Usar los condicionales reales e imaginarios y sus conectores.",
    summary: "Condicionales 0/1/2 + alternativas a if; el dinero; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'If I will have money'.", "'unless' + not.", "'in case' = if."],
    reviewPrompts: ["¿'unless' equivale a…?", "¿'provided that' significa?"],
  },
  items: [
    TEXT("🔁 Semana 3. Hoy los CONDICIONALES (0, 1º, 2º) y sus ALTERNATIVAS a 'if'. Vocabulario: el DINERO y las FINANZAS."),
    GRAMMAR("Condicionales 0/1/2 y alternativas a 'if'", `· 0 (verdades generales): If + presente, presente. If you heat ice, it melts.
· 1º (futuro real/probable): If + presente, will/can/may + inf. If it rains, we'll stay in.
· 2º (imaginario/improbable): If + pasado simple, would/could/might + inf. If I had more money, I'd travel. (were para todas las personas: If I were you…)
ALTERNATIVAS A 'IF':
· unless = if not: I won't go unless you come. · as long as / provided (that) / providing = siempre que: You can borrow it as long as you return it. · in case = por si (prevención): Take cash in case the card fails. · suppose/what if = supón que.
⚠️ Nunca 'will/would' tras if/unless/as long as. 'unless' ya es negativo.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If I will have money → ✅ If I have money.\n· ❌ unless you don't help → ✅ unless you help.\n· ❌ in case it rains (= if) → 'in case' es prevención, no condición.\n· 2º cond.: If I were you (no 'If I was you' en registro formal)."),
    grammarEx("Use of English — Condicionales 0/1/2", "Completa o elige.", [
      fb("If you ___ (heat) water to 100°C, it boils. (0)", ["heat"], "cero: presente."),
      fb("If it ___ (rain) tomorrow, we'll cancel. (1º)", ["rains"], "1º: if + presente."),
      fb("If I ___ (have) more time, I'd learn Italian. (2º)", ["had"], "2º: if + pasado."),
      fb("I won't come ___ you invite me. (= if not)", ["unless"], "unless."),
      fb("You can stay ___ ___ ___ you're quiet. (siempre que)", ["as long as"], "as long as."),
      fb("Take an umbrella ___ ___ it rains. (por si acaso)", ["in case"], "in case."),
      mc("Choose:", ["If I would be you, I'd rest.", "If I were you, I'd rest.", "If I was you, I'd rested."], 1, "2º cond.: If I were you."),
    ]),
    GRAMMAR("Vocabulario del día — El dinero", "Léxico de dinero y finanzas (B2)."),
    deck("B2 S3D11 — El dinero", [
      ["budget", "presupuesto / hacer presupuesto", "I stick to a strict budget.", "sustantivo/verbo", "ˈbʌdʒɪt"],
      ["afford", "permitirse", "I can't afford to eat out often.", "verbo", "əˈfɔːd"],
      ["broke", "sin dinero / pelado", "I'm completely broke this month.", "adjetivo", "brəʊk"],
      ["savings", "ahorros", "I dipped into my savings.", "sustantivo", "ˈseɪvɪŋz"],
      ["in debt", "endeudado/a", "Many students end up in debt.", "colocación", "ɪn ˈdet"],
      ["make ends meet", "llegar a fin de mes", "It's hard to make ends meet.", "expresión", "meɪk endz ˈmiːt"],
      ["splash out", "gastar (a lo grande)", "We splashed out on a holiday.", "phrasal verb", "splæʃ ˈaʊt"],
      ["well off", "acomodado/a / con dinero", "Her family is quite well off.", "colocación", "wel ˈɒf"],
      ["cut back on", "recortar (gastos)", "We had to cut back on eating out.", "phrasal verb", "kʌt ˈbæk ɒn"],
      ["worth it", "que vale la pena", "It was expensive, but worth it.", "colocación", "ˈwɜːθ ɪt"],
    ]),
    vocabEx("Vocabulario — El dinero", "Elige la opción correcta.", [
      mc("To have just enough money to live on is to ___.", ["make ends meet", "splash out", "be well off"], 0, "make ends meet."),
      mc("To spend a lot of money on something special is to ___.", ["splash out", "cut back", "budget"], 0, "splash out."),
      mc("To reduce your spending is to ___.", ["cut back on", "splash out", "afford"], 0, "cut back on."),
      mc("Someone with plenty of money is ___.", ["well off", "broke", "in debt"], 0, "well off."),
      mc("If you owe money, you are ___.", ["in debt", "well off", "worth it"], 0, "in debt."),
      mc("Money you have put aside is your ___.", ["savings", "budget", "debt"], 0, "savings."),
    ]),

    ...uoe({
      p1: {
        title: "The psychology of spending",
        text: "Most of us like to believe that we make rational decisions about money, but the evidence suggests (1)___. Our spending is driven far more by emotion than by logic. Shops know this, which is why they play calming music and arrange their (2)___ so that we linger. Studies show that when we pay with a card rather than cash, we tend to spend more, because handing over physical money causes a small amount of psychological (3)___ that a tap of a card avoids. If you want to (4)___ back on unnecessary spending, one simple trick is to impose a short delay: promise yourself that you will wait a week (5)___ buying anything non-essential. More often than not, the urge simply (6)___ away. It also helps to set a clear (7)___ and stick to it. None of this means you should never (8)___ out on something you love — only that the decision should be yours, not the shop's.",
        q: [
          mc("(1)", ["otherwise", "however", "instead", "therefore"], 0, "'suggests otherwise'."),
          mc("(2)", ["goods", "prices", "shelves", "products"], 2, "'arrange their shelves'."),
          mc("(3)", ["pain", "hurt", "ache", "sore"], 0, "'psychological pain'."),
          mc("(4)", ["cut", "hold", "keep", "put"], 0, "'cut back on'."),
          mc("(5)", ["before", "after", "since", "until"], 0, "'wait a week before buying'."),
          mc("(6)", ["fades", "goes", "runs", "wears"], 0, "'the urge fades away'."),
          mc("(7)", ["budget", "account", "sum", "figure"], 0, "'set a clear budget'."),
          mc("(8)", ["splash", "spend", "pay", "shell"], 0, "'splash out on something'."),
        ],
      },
      p2: {
        title: "Money and happiness",
        text: "Does money buy happiness? The honest answer, according to researchers, is: it depends. Up (1)___ a certain point, more money genuinely does make us happier, because it lifts us out of the daily stress of not being able to (2)___ ends meet. Once our basic needs are comfortably met, (3)___, the connection weakens dramatically. Beyond that threshold, how we spend our money matters far more (4)___ how much we have. Studies consistently show that spending on experiences — travel, concerts, meals with friends — brings (5)___ lasting joy than spending on possessions, which we quickly take for granted. Perhaps most surprisingly, spending money (6)___ other people reliably makes us happier than spending it on ourselves. So (7)___ you find yourself with a little extra, the evidence suggests you should book a trip or treat a friend, rather (8)___ buying yet another gadget.",
        q: [
          fb("(1)", ["to"], "'Up to a certain point'."),
          fb("(2)", ["make"], "'make ends meet'."),
          fb("(3)", ["however"], "contraste."),
          fb("(4)", ["than"], "'matters more than'."),
          fb("(5)", ["more"], "'more lasting joy'."),
          fb("(6)", ["on"], "'spending money on other people'."),
          fb("(7)", ["if", "when"], "'if you find yourself'."),
          fb("(8)", ["than"], "'rather than buying'."),
        ],
      },
      p3: {
        title: "Teaching children about money",
        text: "One of the most (1)___ gifts a parent can give a child is a healthy relationship with money — yet it is a subject rarely taught in schools. Children who grow up with no understanding of budgeting often find (2)___ in serious debt as young adults. Experts recommend starting early and being (3)___: give children a small, regular allowance and let them make their own (4)___, including mistakes. A child who spends all their pocket money at once and then cannot afford something they really want learns a lesson far more (5)___ than any lecture. It is also important to be (6)___ about money as a family, rather than treating it as a shameful secret. Above all, parents should remember that children learn far more from what they (7)___ than from what they are told. A parent who preaches (8)___ while spending recklessly teaches the opposite of what they intend.",
        items: [
          { root: "value", accepted: ["valuable"], hint: "adjetivo → valuable." },
          { root: "them", accepted: ["themselves"], hint: "reflexivo → themselves." },
          { root: "consist", accepted: ["consistent"], hint: "adjetivo → consistent." },
          { root: "decide", accepted: ["decisions"], hint: "sustantivo plural → decisions." },
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "open", accepted: ["open"], hint: "'be open about money' (adjetivo)." },
          { root: "do", accepted: ["do"], hint: "'what they do' (verbo)." },
          { root: "save", accepted: ["saving"], hint: "'preaches saving' (sustantivo/gerundio)." },
        ],
      },
      p4: {
        title: "Transformaciones — condicionales 0/1/2",
        items: [
          { s1: "If you don't hurry, you'll miss the train.", key: "UNLESS", s2: "You'll miss the train ___.", accepted: ["unless you hurry"], explanation: "unless = if not." },
          { s1: "You can borrow the car if you promise to drive carefully.", key: "LONG", s2: "You can borrow the car ___ you drive carefully.", accepted: ["as long as"], explanation: "as long as." },
          { s1: "I don't have enough money, so I can't buy it.", key: "COULD", s2: "If I ___ enough money, I could buy it.", accepted: ["had"], explanation: "2º cond." },
          { s1: "Take some cash because the card machine might not work.", key: "CASE", s2: "Take some cash ___ the card machine doesn't work.", accepted: ["in case"], explanation: "in case = prevención." },
          { s1: "You'll only pass if you study.", key: "PROVIDED", s2: "You'll pass ___ you study.", accepted: ["provided", "provided that", "providing"], explanation: "provided that." },
          { s1: "I'd rest if I were in your position.", key: "YOU", s2: "If I ___, I'd rest.", accepted: ["were you"], explanation: "If I were you." },
        ],
      },
      p5: {
        title: "The lottery winner who gave it all away",
        text: "When Frank Doyle, a retired postman from a small town in Ireland, won a lottery jackpot of over ten million euros, the reaction of everyone who knew him was the same: his life would be transformed forever. In a sense, they were right, though not in the way any of them expected.\n\nFor the first few weeks, Frank did what most people would do. He paid off his modest mortgage, bought a reliable new car to replace his ageing one, and took his wife on the holiday of a lifetime. But the spending stopped there. To the bafflement of his relatives, some of whom had already begun quietly imagining their share, Frank announced that he intended to give almost the entire fortune away.\n\n'People think I must be mad,' he told a local newspaper at the time. 'But I've thought about it very carefully. I'm seventy-one years old. My wife and I have everything we need and, frankly, everything we want. If I kept that money, what would it do except sit in a bank making me anxious? Money you don't need is just a worry. Money that helps someone is a joy.' Over the following two years, Frank funded a new wing for the local hospital, paid the university fees of a dozen young people from struggling families, and quietly cleared the debts of several neighbours who never learned who their benefactor was.\n\nNot everyone approved. Some relatives never spoke to him again. A few commentators accused him of irresponsibility, of failing to secure his own family's future. Frank was unmoved. 'My children are grown and doing fine,' he said. 'The best inheritance I can leave them isn't money. It's the memory of a father who, when he had the chance to do some real good in the world, actually did it.' Frank Doyle died four years after his win, in the same small house he had lived in for fifty years. He is remembered, in his town, not as the man who won the lottery, but as the man who gave it away.",
        q: [
          mc("How did people expect Frank's win to affect him?", ["He'd lose it all.", "It would transform his life forever.", "He'd move abroad.", "Nothing would change."], 1, "'his life would be transformed forever'."),
          mc("What did Frank do with most of the money?", ["Invested it.", "Gave almost all of it away.", "Spent it on himself.", "Buried it."], 1, "'give almost the entire fortune away'."),
          mc("According to Frank, what is 'money you don't need'?", ["A blessing.", "Just a worry.", "A duty.", "A reward."], 1, "'Money you don't need is just a worry'."),
          mc("What did Frank fund, among other things?", ["A football team.", "A new hospital wing and students' fees.", "A statue of himself.", "A holiday resort."], 1, "'a new wing for the local hospital… university fees'."),
          mc("What did Frank say was the best inheritance for his children?", ["A large fortune.", "The memory of a father who did real good.", "A house.", "A business."], 1, "'the memory of a father who… actually did it'."),
          mc("How is Frank remembered in his town?", ["As the man who won the lottery.", "As the man who gave it away.", "As irresponsible.", "As a fool."], 1, "'the man who gave it away'."),
        ],
      },
      p6: {
        title: "The unexpected cost of getting rich",
        text: "We tend to assume that sudden wealth can only be a blessing. (1)___ Yet the experiences of those who acquire large fortunes overnight — lottery winners, for instance, or the founders of successful companies — tell a more complicated story.\n\nStudies of lottery winners have produced some genuinely surprising findings. (2)___ A significant proportion report being less happy several years after their win than they were before. Relationships, in particular, often suffer badly.\n\nThe reasons are not hard to understand. (3)___ Old friends can become resentful or start to treat the winner differently, while distant relatives suddenly reappear with requests for 'loans'. Money, it turns out, changes not only the person who receives it but everyone around them.\n\nThere is also the loss of something we rarely value until it is gone: the sense of striving. (4)___ For many people, a large part of life's meaning comes from working towards goals. Remove the need to work, and a strange emptiness can follow.\n\nNone of this is an argument for poverty, of course. (5)___ Being unable to make ends meet is genuinely miserable, and no one should romanticise it. (6)___ The point is subtler: beyond a certain level of comfort, more money solves fewer problems than we imagine, and creates several we never anticipated.",
        options: [
          "More money, we believe, must surely mean fewer problems.",   // A -> gap 1
          "Winning, for many, is not the happy ending they imagined.",  // B -> gap 2
          "Sudden wealth can poison the very relationships it should enrich.", // C -> gap 3
          "When a goal is simply handed to us, its value evaporates.",  // D -> gap 4
          "Financial hardship causes real and serious suffering.",       // E -> gap 5
          "Nor is it a claim that money doesn't matter at all.",         // F -> gap 6
          "Every single lottery winner reports being far happier.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: más dinero, menos problemas (creemos)."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ganar no es el final feliz esperado."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la riqueza envenena relaciones."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: una meta regalada pierde valor."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la pobreza causa sufrimiento real."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ni que el dinero no importe."),
        ],
      },
      p7: {
        title: "Four people talk about their attitude to money",
        text: "Read what four people say about money.\n\nA) HELEN: I grew up with very little, and it left its mark. Even now that I'm comfortable, I can't shake the habit of saving obsessively. I know, rationally, that I could afford to splash out occasionally, but something stops me. Money, for me, means security, and I'd rather have that than any luxury.\n\nB) OMAR: My philosophy is simple: money is for spending. Not recklessly, but I refuse to save every penny for a 'someday' that may never come. I'd rather use my money to travel and make memories now, while I'm young and healthy. You can't take it with you, as they say.\n\nC) PRIYA: What I've realised is that beyond a certain point, buying things stops making me happy. I used to chase the next purchase, the next upgrade. Now I'd rather spend money on experiences with people I love, or give it to causes I believe in. Generosity, I've found, is the best investment.\n\nD) TOM: I'm terrible with money, and I've made peace with that. I know I should budget, and I never do; I know I should save, and I somehow never manage it. But I'm generous to a fault, I never let a friend pay, and I sleep fine at night. There are worse ways to be poor.",
        q: [
          mc("Who saves obsessively despite being comfortable?", ["A", "B", "C", "D"], 0, "Helen: 'can't shake the habit of saving obsessively'."),
          mc("Who prefers to spend money while young rather than save it?", ["A", "B", "C", "D"], 1, "Omar: 'use my money… now, while I'm young'."),
          mc("Who values generosity as the best use of money?", ["A", "B", "C", "D"], 2, "Priya: 'Generosity… is the best investment'."),
          mc("Who admits to being bad with money but at peace with it?", ["A", "B", "C", "D"], 3, "Tom: 'I'm terrible with money… made peace with that'."),
          mc("Who links money strongly to a feeling of security?", ["A", "B", "C", "D"], 0, "Helen: 'Money, for me, means security'."),
          mc("Who found that buying things stopped making them happy?", ["A", "B", "C", "D"], 2, "Priya: 'buying things stops making me happy'."),
          mc("Who believes you should enjoy money before it's too late?", ["A", "B", "C", "D"], 1, "Omar: 'You can't take it with you'."),
          mc("Whose attitude was shaped by a poor childhood?", ["A", "B", "C", "D"], 0, "Helen: 'I grew up with very little'."),
          mc("Who never lets a friend pay?", ["A", "B", "C", "D"], 3, "Tom: 'I never let a friend pay'."),
          mc("Who now gives money to causes they believe in?", ["A", "B", "C", "D"], 2, "Priya: 'give it to causes I believe in'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Money brings more problems than happiness.'\nComenta estos dos aspectos y añade uno propio:\n1. relationships (las relaciones)\n2. freedom (la libertad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to manage money as a young person' — da consejos prácticos a los lectores.\n· CARTA a un/a amigo/a que gasta más de lo que gana: dale consejo con tacto sobre cómo ahorrar.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: I'd love to come to Italy with you, but I honestly can't afford it this year. Two. Man: We've had to cut back on eating out since the bills went up. Three. Woman: If I were you, I'd start saving now — you never know what's around the corner. Four. Man: It was ridiculously expensive, but honestly, it was worth every penny. Five. Woman: I splashed out on a really good coat this winter — the best money I've spent in years. Six. Man: I'm completely broke until payday, so it's beans on toast for a week. Seven. Woman: As long as we stick to the budget, we'll be fine. Eight. Man: Her family's incredibly well off, but you'd never know it — she's so down-to-earth.", [
      mc("1. Why can't the woman go to Italy?", ["No time.", "She can't afford it.", "She's ill."], 1, "'can't afford it this year'."),
      mc("2. Why have they cut back on eating out?", ["They're dieting.", "The bills went up.", "They prefer cooking."], 1, "'since the bills went up'."),
      mc("3. What does the woman advise?", ["To spend more.", "To start saving now.", "To invest."], 1, "'I'd start saving now'."),
      mc("4. What does the man think of the expensive purchase?", ["A waste.", "Worth every penny.", "Too much."], 1, "'worth every penny'."),
      mc("5. How does the woman feel about the coat?", ["Regretful.", "It was the best money spent.", "Indifferent."], 1, "'the best money I've spent in years'."),
      mc("6. What will the man eat until payday?", ["Nothing.", "Beans on toast — he's broke.", "Restaurant meals."], 1, "'I'm completely broke… beans on toast'."),
      mc("7. What condition does the woman mention?", ["Working overtime.", "Sticking to the budget.", "Getting a loan."], 1, "'As long as we stick to the budget'."),
      mc("8. What is surprising about the woman?", ["She's poor.", "She's well off but very down-to-earth.", "She's mean."], 1, "'incredibly well off… so down-to-earth'."),
    ]),

    ...speakingParts({ p1: "cómo gestionas tu dinero, si prefieres ahorrar o gastar y para qué ahorrarías", p2: "dos formas de gastar el dinero (comprar objetos caros y gastar en experiencias/viajes): compáralas y di cuál da más felicidad", p3: "para qué ahorrar dinero (un viaje, la educación, una casa, emergencias, la jubilación): comentadlo y elegid la prioridad", p4: "el dinero: si da la felicidad, si se enseña bien a gestionarlo y si es mejor gastar en cosas o en experiencias" }),

    SUMMARY("Resumen del Día 11", [
      "Cond. 0 (verdades), 1º (futuro real), 2º (imaginario: if + pasado, would). If I were you.",
      "Alternativas: unless (= if not), as long as/provided that (= siempre que), in case (prevención).",
      "Vocabulario del dinero. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 12", "Escribe 4 condicionales (0/1/2) y 2 frases con unless/as long as. Repasa las flashcards. Mañana: tercer condicional y condicionales mixtos."),
  ],
};

// ───────────────────────── DÍA 12 ─────────────────────────
const DAY12 = {
  title: "Día 12 — Tercer condicional y condicionales mixtos · Decisiones y arrepentimientos",
  description: "Third conditional y mixed conditionals. Vocabulario de decisiones. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Hablar de pasados imaginarios y mezclar tiempos en los condicionales.",
    summary: "3er condicional y mixtos; decisiones; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'If I would have known'.", "'would of'.", "mezclar mal presente/pasado."],
    reviewPrompts: ["¿'If I had studied, I…'?", "¿Cómo mezclas un pasado con un presente?"],
  },
  items: [
    TEXT("🔁 Repaso: cond. 0/1/2. Hoy el TERCER CONDICIONAL y los CONDICIONALES MIXTOS. Vocabulario: DECISIONES y ARREPENTIMIENTOS."),
    GRAMMAR("Tercer condicional y mixtos", `3er CONDICIONAL (pasado imaginario, que NO ocurrió):
· If + past perfect, would/could/might have + participio: If I had studied, I would have passed. (pero no estudié)
CONDICIONALES MIXTOS (mezclan tiempos):
· Condición PASADA → resultado PRESENTE: If + past perfect, would + inf. If I had saved money, I would be rich now. (pasado irreal → presente)
· Condición PRESENTE/general → resultado PASADO: If + past simple, would have + participio. If I were more organised, I wouldn't have missed the flight. (característica presente → resultado pasado)
⚠️ 'would HAVE', no 'would of'. Nunca 'would' tras 'if'.`),
    WARN("Errores típicos del hispanohablante", "· ❌ If I would have known → ✅ If I had known.\n· ❌ would of done → ✅ would have done.\n· ❌ If I studied harder, I would have passed (si es pasado real) → ✅ If I had studied…\n· Mixto: If I had left earlier, I'd be there now."),
    grammarEx("Use of English — 3er condicional y mixtos", "Completa o elige.", [
      fb("If I ___ (study) harder, I would have passed. (3er)", ["had studied"], "if + past perfect."),
      fb("She wouldn't have missed the train if she ___ (leave) earlier.", ["had left"], "if + past perfect."),
      fb("If I ___ (save) money last year, I would be rich now. (mixto)", ["had saved"], "condición pasada → resultado presente."),
      fb("If I ___ (be) more careful, I wouldn't have broken it. (mixto)", ["were", "was"], "característica presente → resultado pasado."),
      mc("Choose:", ["If I would have known, I'd have helped.", "If I had known, I'd have helped.", "If I knew, I'd have helped."], 1, "3er cond."),
      mc("Choose (present result):", ["If I had taken that job, I'd be happier now.", "If I took that job, I'd have been happier now.", "If I take that job, I'd be happier now."], 0, "mixto: pasado → presente."),
      fb("I ___ (win) if I had trained more. (posibilidad)", ["could have won", "might have won", "would have won"], "could/might/would have + participio."),
    ]),
    GRAMMAR("Vocabulario del día — Decisiones", "Léxico de decisiones (B2)."),
    deck("B2 S3D12 — Decisiones", [
      ["make up your mind", "decidirse", "I can't make up my mind.", "expresión", "meɪk ʌp jɔː ˈmaɪnd"],
      ["have second thoughts", "tener dudas / replantearse", "I'm having second thoughts about it.", "expresión", "hæv ˌsekənd ˈθɔːts"],
      ["weigh up", "sopesar", "You should weigh up the options.", "phrasal verb", "weɪ ˈʌp"],
      ["regret", "arrepentirse / lamentar", "I don't regret my decision.", "verbo", "rɪˈɡret"],
      ["turn down", "rechazar", "She turned down the offer.", "phrasal verb", "tɜːn ˈdaʊn"],
      ["hindsight", "visión retrospectiva", "With hindsight, it was a mistake.", "sustantivo", "ˈhaɪndsaɪt"],
      ["think twice", "pensárselo dos veces", "I'd think twice before doing that.", "expresión", "θɪŋk ˈtwaɪs"],
      ["on impulse", "por impulso", "I bought it on impulse.", "colocación", "ɒn ˈɪmpʌls"],
      ["stick to", "atenerse a / mantener", "Once you decide, stick to it.", "phrasal verb", "stɪk ˈtuː"],
      ["no turning back", "sin vuelta atrás", "Once you sign, there's no turning back.", "expresión", "nəʊ ˈtɜːnɪŋ bæk"],
    ]),
    vocabEx("Vocabulario — Decisiones", "Elige la opción correcta.", [
      mc("To finally decide is to ___.", ["make up your mind", "have second thoughts", "weigh up"], 0, "make up your mind."),
      mc("To carefully consider options is to ___ them.", ["weigh up", "turn down", "stick to"], 0, "weigh up."),
      mc("Understanding after an event is called ___.", ["hindsight", "impulse", "regret"], 0, "hindsight."),
      mc("To refuse an offer is to ___ it.", ["turn down", "weigh up", "stick to"], 0, "turn down."),
      mc("To buy something without thinking is to buy it ___.", ["on impulse", "on hindsight", "on regret"], 0, "on impulse."),
      mc("To start to doubt a decision is to ___.", ["have second thoughts", "make up your mind", "stick to it"], 0, "have second thoughts."),
    ]),

    ...uoe({
      p1: {
        title: "The paradox of choice",
        text: "We tend to assume that the more choices we have, the (1)___ off we are. Modern life offers us an unprecedented range of options, from the hundreds of products on a supermarket (2)___ to the endless possibilities of a career. Yet psychologists have discovered a curious (3)___: beyond a certain point, more choice makes us not happier but more anxious. Faced with too many options, we struggle to make up our (4)___, and once we finally decide, we are haunted by the possibility that another choice would have been (5)___. This is the 'paradox of choice'. One study found that shoppers offered six kinds of jam were far more likely to buy one than shoppers (6)___ with twenty-four kinds, who often walked away empty-handed. The (7)___, experts suggest, is not to seek out every possible option, but to decide what matters to you, choose accordingly, and then (8)___ to your decision without looking back.",
        q: [
          mc("(1)", ["better", "well", "best", "good"], 0, "'the better off we are'."),
          mc("(2)", ["shelf", "table", "counter", "stand"], 0, "'supermarket shelf'."),
          mc("(3)", ["paradox", "problem", "puzzle", "mystery"], 0, "'a curious paradox'."),
          mc("(4)", ["minds", "mind", "heads", "decisions"], 0, "'make up our minds'."),
          mc("(5)", ["better", "best", "well", "good"], 0, "'would have been better'."),
          mc("(6)", ["faced", "met", "given", "shown"], 0, "'shoppers faced with'."),
          mc("(7)", ["solution", "answer", "key", "way"], 0, "'The solution… is not to…'"),
          mc("(8)", ["stick", "hold", "keep", "stay"], 0, "'stick to your decision'."),
        ],
      },
      p2: {
        title: "In defence of regret",
        text: "We are often told that we should live life (1)___ regrets. It sounds like wisdom, but is it? Regret is one of the most uncomfortable of human emotions, and it is easy to see why we would (2)___ to be rid of it. Yet regret, properly understood, is not our enemy. It is, in (3)___, one of our most useful teachers. When we regret a decision, our mind is telling us something important: that we acted against our own values, or failed to (4)___ an opportunity. A person incapable of regret would be incapable of learning from their mistakes. The danger lies not in feeling regret (5)___ in dwelling on it endlessly, torturing ourselves over choices that can no longer (6)___ changed. The healthy response is to feel the regret, extract its lesson, and then let it go. (7)___ hindsight, we can all see the mistakes we made; the trick is to use that knowledge to choose (8)___ next time, rather than to punish ourselves for a past we cannot undo.",
        q: [
          fb("(1)", ["without", "with"], "'live life without regrets'." ),
          fb("(2)", ["want", "like", "wish"], "'we would want to be rid of it'."),
          fb("(3)", ["fact"], "'in fact'."),
          fb("(4)", ["take"], "'failed to take an opportunity'."),
          fb("(5)", ["but"], "'not in feeling regret but in dwelling'."),
          fb("(6)", ["be"], "'can no longer be changed' (pasiva)." ),
          fb("(7)", ["With", "In"], "'With hindsight' (o 'In')." ),
          fb("(8)", ["better"], "'choose better next time'."),
        ],
      },
      p3: {
        title: "Why we make bad decisions",
        text: "Human beings are, on the whole, remarkably bad at making (1)___ decisions, especially under pressure. Part of the problem is that our brains evolved to make quick (2)___ in a dangerous world, not to weigh up complex modern choices (3)___. When we are tired, hungry or emotional, our capacity for careful reasoning collapses, and we fall back on impulse. This is why so many of our worst decisions are made in the heat of the (4)___. Advertisers and salespeople understand this (5)___ well, which is why they create a sense of urgency: buy now, before it's too late. The best (6)___ against a bad impulsive decision is, quite simply, time. If a choice is (7)___, sleep on it. Almost every important decision can wait until morning, and the clarity that a night's rest brings is (8)___ worth the wait.",
        items: [
          { root: "sense", accepted: ["sensible"], hint: "adjetivo → sensible." },
          { root: "judge", accepted: ["judgements"], hint: "sustantivo plural → judgements." },
          { root: "rational", accepted: ["rationally"], hint: "adverbio → rationally." },
          { root: "move", accepted: ["moment"], hint: "'the heat of the moment' (sustantivo)." },
          { root: "part", accepted: ["particularly"], hint: "adverbio → particularly." },
          { root: "defend", accepted: ["defence"], hint: "sustantivo → defence." },
          { root: "importance", accepted: ["important"], hint: "adjetivo → important." },
          { root: "doubt", accepted: ["undoubtedly"], hint: "adverbio → undoubtedly." },
        ],
      },
      p4: {
        title: "Transformaciones — 3er condicional y mixtos",
        items: [
          { s1: "I didn't take the job, so I'm not rich now.", key: "TAKEN", s2: "If I ___ the job, I would be rich now.", accepted: ["had taken"], explanation: "mixto: pasado → presente." },
          { s1: "She missed the train because she didn't leave earlier.", key: "LEFT", s2: "She wouldn't have missed the train if she ___ earlier.", accepted: ["had left", "'d left"], explanation: "3er cond." },
          { s1: "I'm not good at planning, which is why the trip was a disaster.", key: "BETTER", s2: "If I ___ at planning, the trip wouldn't have been a disaster.", accepted: ["were better", "was better"], explanation: "mixto: presente → pasado." },
          { s1: "He didn't listen to me, and now he regrets it.", key: "LISTENED", s2: "If he ___ to me, he wouldn't regret it now.", accepted: ["had listened", "'d listened"], explanation: "mixto: pasado → presente." },
          { s1: "It's a pity I sold my old car; I need it now.", key: "SOLD", s2: "If I ___ my old car, I would have one now.", accepted: ["hadn't sold"], explanation: "mixto: pasado → presente." },
          { s1: "Perhaps she would have won with more training.", key: "MIGHT", s2: "She ___ won if she had trained more.", accepted: ["might have"], explanation: "might have + participio." },
        ],
      },
      p5: {
        title: "The road not taken",
        text: "At twenty-two, I was offered two jobs on the same day. The first was safe, well paid and, if I am honest, rather dull: a position in a large, respectable company where I could reasonably expect to spend the next forty years climbing slowly up a predictable ladder. The second was the opposite in every way: a poorly paid role at a tiny, chaotic start-up that might well collapse within the year, doing work that terrified and excited me in equal measure. I chose the safe option. For most of the two decades since, I have wondered whether I made the biggest mistake of my life.\n\nThe start-up, as it happens, did not collapse. It grew into one of the most celebrated companies of its generation, and the handful of people who took a chance on it in those early days became, in some cases, extremely wealthy. Whenever I read about its latest triumph, a familiar voice whispers in my ear: if you had been braver, that could have been you. If you had taken the risk, your whole life would have been different — richer, more exciting, more your own.\n\nFor years, this thought was a source of quiet, persistent pain. Then, quite recently, something shifted. I found myself doing the arithmetic differently. Yes, I told myself, if I had taken the other path, I might now be wealthy. But I would also never have met my wife, who worked in the company I actually joined. My children, whom I love beyond all reason, would not exist. The friendships, the ordinary joys, the entire texture of the life I have actually lived — all of it flows directly from that supposedly cowardly choice.\n\nWe torture ourselves with the road not taken because we imagine it leading only to the good things we missed, never to the good things it would have cost us. The truth is that every path closes as many doors as it opens. I will never know what the other life would have held, and I have finally stopped needing to know. The road I took led here, to this life, which is mine, and which — arithmetic or no arithmetic — I would not exchange for any other.",
        q: [
          mc("What were the two jobs offered to the narrator?", ["Two start-ups.", "A safe, dull job and a risky start-up.", "Two dull jobs.", "Two exciting jobs."], 1, "'safe, well paid… rather dull' vs 'a tiny, chaotic start-up'."),
          mc("Which job did the narrator choose?", ["The start-up.", "The safe option.", "Neither.", "Both."], 1, "'I chose the safe option'."),
          mc("What happened to the start-up?", ["It collapsed.", "It became a celebrated company.", "It stayed tiny.", "It moved abroad."], 1, "'It grew into one of the most celebrated companies'."),
          mc("For years, how did the narrator feel about their choice?", ["Proud.", "Quiet, persistent pain.", "Indifferent.", "Relieved."], 1, "'a source of quiet, persistent pain'."),
          mc("What made the narrator's feelings shift?", ["Getting rich.", "Realising the other path would have cost them their family.", "Meeting the founders.", "Losing his job."], 1, "'I would also never have met my wife… My children… would not exist'."),
          mc("What is the narrator's final conclusion about 'the road not taken'?", ["It was clearly better.", "Every path closes as many doors as it opens.", "He should have taken the risk.", "Choices don't matter."], 1, "'every path closes as many doors as it opens'."),
        ],
      },
      p6: {
        title: "The decision that saved a company",
        text: "In the late 1990s, a small photography company faced a decision that would determine its survival. (1)___ Digital cameras were beginning to appear, and the company's entire business was built on film.\n\nThe safe choice, and the one most of the board favoured, was to ignore the new technology. (2)___ Film was still enormously profitable, and digital images were, at the time, of poor quality and appealed only to enthusiasts.\n\nOne junior executive, however, argued passionately for a different course. (3)___ She insisted that digital photography would eventually destroy the film business entirely, and that the company's only hope was to cannibalise its own most profitable product before someone else did.\n\nHer argument was deeply unpopular. (4)___ Turning your back on the very thing that makes you money seems, on the surface, like madness. But the chief executive, to his enormous credit, listened.\n\nThe company poured its resources into digital technology, at first losing money and confusing its loyal customers. (5)___ Within a decade, however, the wisdom of the decision was undeniable: the company had transformed itself while most of its film-based rivals had vanished entirely. (6)___ It is a striking example of a truth that businesses, like people, often forget: sometimes the most dangerous thing you can do is nothing at all.",
        options: [
          "The very technology that threatened it was still in its infancy.", // A -> gap 1
          "Why abandon a product that was still making millions?",           // B -> gap 2
          "She saw, more clearly than her colleagues, where the future lay.",  // C -> gap 3
          "It flew in the face of every commercial instinct.",                // D -> gap 4
          "The transition was neither quick nor painless.",                    // E -> gap 5
          "It had, in effect, chosen to disrupt itself.",                      // F -> gap 6
          "The company decided to make no changes at all.",                    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la tecnología estaba en sus inicios."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: ¿por qué abandonar lo rentable?"),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: veía el futuro con más claridad."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: iba contra todo instinto comercial."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la transición no fue fácil."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: eligió disruptirse a sí misma."),
        ],
      },
      p7: {
        title: "Four people describe a big decision they made",
        text: "Read what four people say about an important decision.\n\nA) NINA: I turned down a place at a top university to look after my sick mother. Everyone said I was throwing away my future. With hindsight, it was the best decision I ever made — those last two years with her were priceless, and I got to university eventually anyway. Some things can't wait; a degree can.\n\nB) OMAR: I quit a secure, well-paid job to start my own business. It terrified me, and for the first two years I barely made ends meet. But if I hadn't taken that leap, I'd have spent my whole life wondering 'what if'. Even if it had failed, I think I'd rather have tried and failed than never dared.\n\nC) LENA: I made the mistake of buying a house on impulse, without weighing up the costs properly. It's been a financial nightmare ever since. If I'd only thought twice, or waited a few weeks, I'd have seen all the problems. It taught me never to make a huge decision in the heat of the moment.\n\nD) SAM: I had to choose between two job offers, and I genuinely couldn't make up my mind. In the end, I chose the one that paid less but felt more meaningful. People thought I was mad to turn down the money, but I've never regretted it. Life's too short to spend it doing work you don't believe in.",
        q: [
          mc("Who gave up an opportunity to care for a relative?", ["A", "B", "C", "D"], 0, "Nina: 'to look after my sick mother'."),
          mc("Who left security to pursue a dream despite fear?", ["A", "B", "C", "D"], 1, "Omar: 'quit a secure… job to start my own business'."),
          mc("Who regrets a decision made too quickly?", ["A", "B", "C", "D"], 2, "Lena: 'buying a house on impulse'."),
          mc("Who chose meaning over money?", ["A", "B", "C", "D"], 3, "Sam: 'paid less but felt more meaningful'."),
          mc("Who would rather have tried and failed than never tried?", ["A", "B", "C", "D"], 1, "Omar: 'rather have tried and failed'."),
          mc("Who was criticised but has no regrets?", ["A", "B", "C", "D"], 3, "Sam: 'People thought I was mad… never regretted it'."),
          mc("Who learned not to decide in the heat of the moment?", ["A", "B", "C", "D"], 2, "Lena: 'never… in the heat of the moment'."),
          mc("Who believes some opportunities can wait but others can't?", ["A", "B", "C", "D"], 0, "Nina: 'Some things can't wait; a degree can'."),
          mc("Who struggled to make up their mind between options?", ["A", "B", "C", "D"], 3, "Sam: 'couldn't make up my mind'."),
          mc("Who barely survived financially after their decision?", ["A", "B", "C", "D"], 1, "Omar: 'barely made ends meet'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is better to take risks than to always play it safe.'\nComenta estos dos aspectos y añade uno propio:\n1. career (la carrera profesional)\n2. personal life (la vida personal)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RELATO que empiece con: 'If I had made a different choice that day, my whole life would have been different.'\n· ARTÍCULO: 'The best decision I ever made' — descríbela y explica por qué no te arrepientes.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un hombre llamado Marcus hablando de una gran decisión que tomó (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a man called Marcus talking about a big decision he made. Marcus: The biggest decision I ever made was to leave my career as a lawyer at the age of thirty-five. On paper, I had everything: a good salary, a nice house, a secure future. But I was, quite simply, miserable. Every Sunday evening, I would feel a sense of dread about the week ahead. What finally pushed me to act was turning thirty-five and realising that if I stayed, I'd probably still be doing the same thing at sixty. The decision wasn't impulsive, though — I'd been weighing it up for nearly two years. What I did was retrain as a teacher, taking a huge pay cut in the process. My family thought I'd lost my mind. The first year was genuinely terrifying, and there were moments when I had serious second thoughts. But looking back now, five years later, I have absolutely no regrets. The single biggest lesson I learned is that security means nothing if you're unhappy. If I could give one piece of advice to anyone in the same position, it would be this: don't wait until it's too late to change.", [
      fb("Marcus left his career as a ___.", ["lawyer"], "'my career as a lawyer'."),
      fb("He made the decision at the age of ___.", ["thirty-five", "35"], "'at the age of thirty-five'."),
      fb("Every ___ evening, he felt a sense of dread.", ["Sunday"], "'Every Sunday evening'."),
      fb("He had been weighing up the decision for nearly ___ years.", ["two", "2"], "'for nearly two years'."),
      fb("He retrained as a ___.", ["teacher"], "'retrain as a teacher'."),
      fb("He had to take a huge ___ cut.", ["pay"], "'a huge pay cut'."),
      fb("The biggest lesson is that ___ means nothing if you're unhappy.", ["security"], "'security means nothing if you're unhappy'."),
      fb("His advice is: don't wait until it's ___ to change.", ["too late"], "'until it's too late to change'."),
    ]),

    ...speakingParts({ p1: "una decisión importante que tomaste, cómo la tomaste y si te arrepientes de algo", p2: "dos personas ante una decisión (una eligiendo con calma y otra comprando por impulso): compáralas y di qué enfoque es mejor", p3: "qué ayuda a tomar buenas decisiones (sopesar los pros y contras, pedir consejo, seguir la intuición, esperar, buscar información): comentadlo y elegid lo más útil", p4: "las decisiones: si es mejor arriesgarse o ir a lo seguro, si aprendemos de los arrepentimientos y cómo tomar buenas decisiones" }),

    SUMMARY("Resumen del Día 12", [
      "3er cond.: if + past perfect, would have + participio (pasado imaginario).",
      "Mixtos: pasado irreal → presente (If I had saved, I'd be rich now); presente → pasado (If I were organised, I wouldn't have missed it).",
      "Vocabulario de decisiones. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 13", "Escribe 2 terceros condicionales y 2 mixtos sobre tu vida. Repasa las flashcards. Mañana: wish/if only/would rather e inversión."),
  ],
};

// ───────────────────────── DÍA 13 ─────────────────────────
const DAY13 = {
  title: "Día 13 — wish/if only/would rather e inversión condicional · Los deseos",
  description: "wish/if only, it's time, would rather e inversión (Had I known…). Vocabulario de deseos. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Expresar deseos y arrepentimientos y usar la inversión condicional.",
    summary: "wish/would rather/inversión; los deseos; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'I wish I have'.", "'It's time you go'.", "'would rather you go'."],
    reviewPrompts: ["¿'wish' + pasado o present perfect?", "¿'Had I known' equivale a…?"],
  },
  items: [
    TEXT("🔁 Repaso: 3er cond. y mixtos. Hoy los DESEOS (wish/if only/it's time/would rather) y la INVERSIÓN condicional. Vocabulario: los DESEOS."),
    GRAMMAR("wish / would rather / inversión", `WISH / IF ONLY:
· + pasado simple = deseo presente: I wish I had more time. (con 'be' → were)
· + past perfect = arrepentimiento pasado: I wish I had studied.
· + would = queja/deseo de cambio de conducta (de otro): I wish you would stop shouting.
IT'S (HIGH/ABOUT) TIME + pasado: It's time we left. (ya deberíamos)
WOULD RATHER:
· + infinitivo sin to (mismo sujeto): I'd rather stay in.
· + otra persona + pasado: I'd rather you didn't smoke.
INVERSIÓN CONDICIONAL (formal, sin 'if'):
· Had I known… = If I had known… · Were I rich… = If I were rich… · Should you need help… = If you should need help…`),
    WARN("Errores típicos del hispanohablante", "· ❌ I wish I have more money → ✅ I wish I had more money.\n· ❌ It's time you go → ✅ It's time you went.\n· ❌ I'd rather you go → ✅ I'd rather you went / didn't go.\n· Inversión: 'Had I known' (no 'If I had known' en registro formal)."),
    grammarEx("Use of English — wish/would rather/inversión", "Completa o elige.", [
      fb("I wish I ___ (have) more free time. (deseo presente)", ["had"], "wish + pasado."),
      fb("If only I ___ (not/say) that yesterday. (arrepentimiento)", ["hadn't said"], "wish/if only + past perfect."),
      fb("I wish you ___ (stop) interrupting! (queja)", ["would stop"], "wish + would."),
      fb("It's time we ___ (leave) — it's getting late.", ["left"], "it's time + pasado."),
      mc("Choose:", ["I'd rather you didn't smoke here.", "I'd rather you don't smoke here.", "I'd rather you not smoke here."], 0, "would rather + otra persona + pasado."),
      fb("___ I known, I would have helped. (inversión de 'If I had known')", ["Had"], "Had I known."),
      mc("Choose (inversion):", ["Were I rich, I'd travel.", "Was I rich, I'd travel.", "If I were rich, I'd travelled."], 0, "Were I rich = If I were rich."),
    ]),
    GRAMMAR("Vocabulario del día — Deseos y arrepentimientos", "Léxico de deseos (B2)."),
    deck("B2 S3D13 — Deseos", [
      ["long for", "anhelar / ansiar", "I long for a bit of peace.", "phrasal verb", "lɒŋ fɔː"],
      ["yearn for", "añorar / anhelar", "She yearned for her homeland.", "verbo", "jɜːn fɔː"],
      ["if only", "ojalá / si al menos", "If only I'd listened!", "expresión", "ɪf ˈəʊnli"],
      ["kick yourself", "darse de cabezazos / arrepentirse", "I could kick myself for forgetting.", "expresión", "kɪk jɔːˈself"],
      ["daydream", "soñar despierto", "I often daydream about travelling.", "verbo", "ˈdeɪdriːm"],
      ["wishful thinking", "ilusiones / pensar con el deseo", "That's just wishful thinking.", "expresión", "ˌwɪʃfʊl ˈθɪŋkɪŋ"],
      ["settle for", "conformarse con", "Don't settle for less than you deserve.", "phrasal verb", "ˈsetl fɔː"],
      ["make the most of", "aprovechar al máximo", "Make the most of every chance.", "expresión", "meɪk ðə ˈməʊst əv"],
      ["hindsight", "visión retrospectiva", "In hindsight, I'd do it differently.", "sustantivo", "ˈhaɪndsaɪt"],
      ["second-guess", "cuestionarse / dudar de", "Try not to second-guess yourself.", "verbo", "ˌsekənd ˈɡes"],
    ]),
    vocabEx("Vocabulario — Deseos", "Elige la opción correcta.", [
      mc("To want something very strongly is to ___ it.", ["long for", "settle for", "second-guess"], 0, "long for."),
      mc("To accept something less than you wanted is to ___ it.", ["settle for", "long for", "make the most of"], 0, "settle for."),
      mc("Believing something because you want it to be true is ___.", ["wishful thinking", "hindsight", "daydreaming"], 0, "wishful thinking."),
      mc("To use an opportunity fully is to ___ it.", ["make the most of", "settle for", "second-guess"], 0, "make the most of."),
      mc("To keep doubting your own decisions is to ___.", ["second-guess yourself", "long for", "settle for"], 0, "second-guess yourself."),
      mc("To imagine pleasant things while awake is to ___.", ["daydream", "settle", "yearn"], 0, "daydream."),
    ]),

    ...uoe({
      p1: {
        title: "The grass is always greener",
        text: "There is an old saying that the grass is always (1)___ on the other side of the fence, and it captures a deep truth about human nature. We seem almost designed to (2)___ for what we do not have. The single person longs for a relationship; the married person daydreams about freedom. The city-dweller yearns for the peace of the countryside, while the villager (3)___ for the excitement of the city. This restless dissatisfaction has its uses — it drives us to improve our lives — but it can also (4)___ us permanently unhappy, forever chasing a happiness that seems to live everywhere except where we actually are. The wise response is not to stop wanting things, but to learn to (5)___ the most of what we have while we have it. Much of what we (6)___ for, after all, we already possessed at some earlier point in our lives, and (7)___ appreciated only after it was gone. If only, we so often think, we could learn to value the grass beneath our own (8)___ feet.",
        q: [
          mc("(1)", ["greener", "greenest", "green", "more green"], 0, "'the grass is always greener'."),
          mc("(2)", ["long", "wish", "hope", "want"], 0, "'long for'."),
          mc("(3)", ["yearns", "wishes", "hopes", "wants"], 0, "'yearns for the excitement'."),
          mc("(4)", ["make", "leave", "keep", "let"], 2, "'keep us permanently unhappy'."),
          mc("(5)", ["make", "take", "do", "get"], 0, "'make the most of'."),
          mc("(6)", ["long", "wish", "hope", "yearn"], 0, "'what we long for'."),
          mc("(7)", ["only", "just", "yet", "still"], 0, "'and only appreciated'."),
          mc("(8)", ["two", "too", "to", "own"], 0, "'our own two feet'."),
        ],
      },
      p2: {
        title: "The danger of 'if only'",
        text: "'If only' may be the two saddest words in the English language. They express a wish that the past (1)___ been different, and there is nothing more (2)___ than the past. We say 'if only I had studied harder', 'if only I hadn't said that', as if the endless repetition of our regret (3)___ somehow change what already happened. It cannot. This is not to say that we should never (4)___ back on our mistakes; reflection is how we learn. The problem arises when 'if only' becomes a permanent state of mind, (5)___ than a passing thought. Some people spend their whole lives second-guessing decisions that can never be undone, torturing (6)___ over roads not taken. The healthier approach is to learn what the past can teach us and then to turn, firmly, towards the future. After all, the only moment in (7)___ we can actually do anything is this one. It is (8)___ time, perhaps, that we all stopped saying 'if only' and started saying 'from now on'.",
        q: [
          fb("(1)", ["had"], "'the past had been different'."),
          fb("(2)", ["fixed", "certain", "unchangeable"], "'nothing more fixed/unchangeable'."),
          fb("(3)", ["could", "would", "might"], "'could somehow change'."),
          fb("(4)", ["look", "think", "reflect"], "'look back on our mistakes'."),
          fb("(5)", ["rather"], "'rather than a passing thought'."),
          fb("(6)", ["themselves"], "reflexivo → themselves."),
          fb("(7)", ["which"], "'the only moment in which'."),
          fb("(8)", ["high", "about"], "'It is high time, perhaps'."),
        ],
      },
      p3: {
        title: "Learning to want less",
        text: "Modern consumer culture is built on a single (1)___ idea: that we can buy our way to happiness, and that the next purchase will finally satisfy us. It is a promise that is never (2)___, because desire, by its nature, renews itself endlessly. No sooner have we obtained the thing we longed for than we begin to (3)___ for something else. Ancient philosophers understood this (4)___ well. The path to contentment, they argued, lies not in acquiring more but in wanting less. This does not mean living in (5)___ poverty; it means learning to distinguish between what we genuinely need and what advertising has merely (6)___ us to crave. A person who has mastered the art of (7)___ with what they have is, in a very real sense, richer than a billionaire who is forever chasing the next acquisition. True wealth, it turns out, is not (8)___ what you have, but about wanting what you have.",
        items: [
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "keep", accepted: ["kept"], hint: "'never kept' (participio)." },
          { root: "long", accepted: ["long"], hint: "'begin to long for' (verbo)." },
          { root: "part", accepted: ["particularly"], hint: "adverbio → particularly." },
          { root: "act", accepted: ["actual"], hint: "'actual poverty' (adjetivo)." },
          { root: "persuade", accepted: ["persuaded"], hint: "'persuaded us to crave' (participio)." },
          { root: "content", accepted: ["contentment"], hint: "sustantivo → contentment." },
          { root: "able", accepted: ["about"], hint: "'not about what you have' → about." },
        ],
      },
      p4: {
        title: "Transformaciones — wish/would rather/inversión",
        items: [
          { s1: "I'm sorry I didn't study medicine.", key: "WISH", s2: "I ___ medicine.", accepted: ["wish I had studied", "wish I'd studied"], explanation: "wish + past perfect." },
          { s1: "I want you to stop making that noise.", key: "RATHER", s2: "I'd ___ that noise.", accepted: ["rather you stopped making", "rather you didn't make"], explanation: "would rather + otra persona + pasado." },
          { s1: "We really should leave now.", key: "TIME", s2: "It's ___ now.", accepted: ["time we left"], explanation: "it's time + pasado." },
          { s1: "If I had known, I would have come.", key: "HAD", s2: "___ I would have come.", accepted: ["Had I known,"], explanation: "inversión: Had I known." },
          { s1: "I regret not saving more money.", key: "ONLY", s2: "If ___ more money.", accepted: ["only I had saved", "only I'd saved"], explanation: "if only + past perfect." },
          { s1: "If you should need any help, just ask.", key: "SHOULD", s2: "___ any help, just ask.", accepted: ["Should you need"], explanation: "inversión: Should you need." },
        ],
      },
      p5: {
        title: "The museum of broken relationships",
        text: "In a quiet street in Zagreb, Croatia, there is a museum unlike any other in the world. It contains no great paintings, no ancient treasures, no famous historical artefacts. Instead, its glass cases hold ordinary objects — a wristwatch, a garden gnome, an old telephone, a wedding dress — each one donated by an anonymous stranger, and each accompanied by a short, handwritten story. What these objects have in common is that every one of them is the relic of a broken relationship.\n\nThe Museum of Broken Relationships began as an art project by two former partners who, on separating, found themselves wondering what to do with the small, meaningless objects that their relationship had made precious. Rather than throw them away, they decided to display them, and invited others to do the same. The response was overwhelming. Today, people from all over the world send in objects and their stories: mementoes of love affairs that ended, of marriages that failed, of friends and family members lost to distance or death.\n\nTo walk through the museum is a strangely moving experience. The stories, displayed beside each object, range from the funny to the devastating. One card, beside an ordinary axe, explains that its owner used it to chop up all the furniture belonging to a partner who had left her. Another, beside a single glove, simply reads: 'If only I had said what I really felt, while there was still time.' Visitors, it is reported, often find themselves in tears, moved not by any single story but by the accumulated weight of so much ordinary human longing and loss.\n\nWhat makes the museum so powerful is precisely its ordinariness. These are not the tragedies of kings and queens, but of people exactly like us. Every visitor recognises, in these anonymous heartbreaks, the shape of their own. The museum reminds us of a truth we usually prefer to avoid: that love, in all its forms, almost always ends in loss, whether through separation or death, and that the objects we leave behind — a watch, a glove, a story on a card — are all that finally remains. And yet, far from being merely sad, the museum is oddly comforting. It tells each of us that we are not alone in our losses, and that there is a strange, sustaining beauty in the simple act of remembering what we once loved.",
        q: [
          mc("What does the museum contain?", ["Great paintings.", "Ordinary objects from broken relationships.", "Ancient treasures.", "Famous artefacts."], 1, "'ordinary objects… relic of a broken relationship'."),
          mc("How did the museum begin?", ["As a government project.", "As an art project by two former partners.", "As a business.", "By accident."], 1, "'an art project by two former partners'."),
          mc("What accompanies each object?", ["A price.", "A short, handwritten story.", "A photograph.", "Nothing."], 1, "'a short, handwritten story'."),
          mc("The card beside the single glove expresses:", ["anger", "regret at not speaking in time", "joy", "boredom"], 1, "'If only I had said what I really felt'."),
          mc("What makes the museum so powerful, according to the writer?", ["Its fame.", "Its ordinariness.", "Its size.", "Its age."], 1, "'precisely its ordinariness'."),
          mc("Why is the museum 'oddly comforting'?", ["It's cheap.", "It shows we're not alone in our losses.", "It's funny.", "It's beautiful to look at."], 1, "'we are not alone in our losses'."),
        ],
      },
      p6: {
        title: "The wish that came true",
        text: "Be careful what you wish for, the old warning goes — you might just get it. (1)___ For most of my twenties, I wished for one thing above all others: success in my career, at any cost.\n\nI got my wish. (2)___ By thirty, I had the impressive job title, the high salary, the corner office that I had daydreamed about for years. On paper, I had everything I had ever longed for.\n\nWhat I had not anticipated was the price. (3)___ The eighty-hour weeks, the missed birthdays, the friendships that quietly faded through neglect — these were the true cost of the success I had wished for so fervently.\n\nThe realisation came slowly, and then all at once, on the evening I received a major promotion. (4)___ Instead of the triumph I had always imagined, I felt a strange and terrible emptiness. I had climbed to the top of the ladder, only to discover that it had been leaning against the wrong wall.\n\nIt took real courage to walk away, and even more to rebuild a life around different values. (5)___ I earn a fraction of what I once did, and I have never been happier. (6)___ If only I had understood, all those years ago, that what we wish for and what we actually need are so very rarely the same thing.",
        options: [
          "I had always dismissed it as a piece of empty folk wisdom.",  // A -> gap 1
          "In fact, I got it more completely than I had dared hope.",    // B -> gap 2
          "Every triumph, it turned out, had been quietly bought.",       // C -> gap 3
          "It should have been the happiest night of my life.",           // D -> gap 4
          "Slowly, I built something that money could never buy.",        // E -> gap 5
          "My only regret is that it took me so long to learn.",          // F -> gap 6
          "I never achieved any of the success I had wished for.",        // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: lo tomaba por sabiduría vacía."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: lo consiguió del todo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: cada triunfo tenía un precio."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: debería haber sido feliz."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: construyó algo que el dinero no compra."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: solo lamenta haber tardado tanto."),
        ],
      },
      p7: {
        title: "Four people share something they wish they'd done differently",
        text: "Read what four people say about a regret.\n\nA) DANA: I wish I'd travelled more when I was young and free. I kept putting it off, telling myself I'd do it 'someday', once I had more money, more time, more security. Now I have all those things, but I also have responsibilities that make it impossible. If only I'd understood that 'someday' has a way of never arriving.\n\nB) RAVI: My biggest regret is a friendship I let die through pure laziness. We drifted apart, and I always meant to get back in touch, but I never quite did. Then I heard he'd passed away. I could kick myself. It's taught me to make the effort now, today, with the people I care about, before it's too late.\n\nC) MARIA: I wish I'd been braver about my dreams. I wanted to be an artist, but I settled for a 'sensible' career because it was safe. I'm not unhappy, exactly — but I can't help wondering what might have been. My advice to any young person is: don't settle for less than you're capable of out of fear.\n\nD) JAKE: Honestly, I try not to have regrets. Every mistake I've made has taught me something, and I wouldn't be who I am without them. Sure, if I could go back, I'd do some things differently — but then I'd be a different person, with a different life. On balance, I'd rather keep the one I've got.",
        q: [
          mc("Who regrets not travelling while they had the chance?", ["A", "B", "C", "D"], 0, "Dana: 'I wish I'd travelled more when I was young'."),
          mc("Who regrets losing a friendship through neglect?", ["A", "B", "C", "D"], 1, "Ravi: 'a friendship I let die through pure laziness'."),
          mc("Who wishes they'd been braver about their dreams?", ["A", "B", "C", "D"], 2, "Maria: 'I wish I'd been braver about my dreams'."),
          mc("Who chooses not to dwell on regrets at all?", ["A", "B", "C", "D"], 3, "Jake: 'I try not to have regrets'."),
          mc("Who learned to value people before it's too late?", ["A", "B", "C", "D"], 1, "Ravi: 'make the effort now… before it's too late'."),
          mc("Who settled for safety instead of following a passion?", ["A", "B", "C", "D"], 2, "Maria: 'settled for a \"sensible\" career because it was safe'."),
          mc("Who believes 'someday' often never comes?", ["A", "B", "C", "D"], 0, "Dana: '\"someday\" has a way of never arriving'."),
          mc("Who feels their mistakes made them who they are?", ["A", "B", "C", "D"], 3, "Jake: 'I wouldn't be who I am without them'."),
          mc("Who advises young people not to settle out of fear?", ["A", "B", "C", "D"], 2, "Maria: 'don't settle for less… out of fear'."),
          mc("Who would keep their current life despite past mistakes?", ["A", "B", "C", "D"], 3, "Jake: 'I'd rather keep the one I've got'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'People should follow their dreams rather than choose a safe path.'\nComenta estos dos aspectos y añade uno propio:\n1. happiness (la felicidad)\n2. financial security (la seguridad económica)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'Something I wish I had done differently' — reflexiona sobre un arrepentimiento y qué aprendiste.\n· CARTA a tu 'yo' de hace diez años: dale los consejos que ojalá te hubieran dado (usa wish/if only).", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de algo que desearían haber hecho de otra manera (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué lamentan. Sobra una opción.\nA) not travelling more\nB) not keeping in touch with a friend\nC) choosing a safe career over their dream\nD) not learning a language\nE) spending too much time working\nF) not appreciating a relationship", "This is Part Three. You will hear five people talking about a regret. Speaker One: I look at people who can switch effortlessly between languages, and I could kick myself. I had the chance to study abroad at eighteen, and I turned it down. Now, as a monolingual adult, I feel that door has closed. Speaker Two: My greatest regret is my father. We were never close, and I always assumed there'd be time to fix that one day. There wasn't. I'd give anything for one more conversation. Speaker Three: I wanted to be a musician, but everyone told me it wasn't realistic, so I became an accountant instead. I'm comfortable, but I can't shake the feeling that I let my real self down. Speaker Four: I spent my thirties chasing promotions, working every weekend. My kids grew up while I was at the office. If only I'd understood that no one, on their deathbed, wishes they'd spent more time at work. Speaker Five: I had a best friend at university, closer than a sister. We just... drifted. Neither of us made the effort, and now we're strangers. I wish I'd picked up the phone.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 3, "D: 'a monolingual adult… study abroad'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 5, "F: 'my father… never close… one more conversation'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'wanted to be a musician… became an accountant'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 4, "E: 'chasing promotions, working every weekend'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 1, "B: 'best friend… we drifted… strangers'."),
    ]),

    ...speakingParts({ p1: "algo que te gustaría haber hecho de otra manera y qué desearías para tu futuro", p2: "dos personas en momentos de reflexión (una mirando fotos antiguas con nostalgia y otra planeando el futuro con ilusión): compáralas", p3: "de qué se arrepiente más la gente al final de su vida (no viajar, trabajar demasiado, no cuidar las relaciones, no arriesgarse): comentadlo y elegid lo más común", p4: "los deseos y arrepentimientos: si es útil arrepentirse, si deberíamos vivir sin arrepentimientos y cómo evitar los arrepentimientos futuros" }),

    SUMMARY("Resumen del Día 13", [
      "wish + pasado (deseo presente) / + past perfect (arrepentimiento) / + would (queja).",
      "It's time + pasado; would rather + otra persona + pasado. Inversión: Had I known, Were I…, Should you…",
      "Vocabulario de deseos. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 14", "Escribe 3 deseos (wish/if only) y 2 frases con inversión. Repasa las flashcards. Mañana: hipótesis avanzadas (suppose/but for/otherwise)."),
  ],
};

// ───────────────────────── DÍA 14 ─────────────────────────
const DAY14 = {
  title: "Día 14 — Hipótesis avanzadas y resolución de problemas · Los retos",
  description: "suppose/what if, but for, otherwise, given that; lenguaje de hipótesis. Vocabulario de resolución de problemas. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Manejar hipótesis complejas y el lenguaje de la solución de problemas.",
    summary: "Hipótesis avanzadas; retos; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'but for' + frase.", "'otherwise' mal colocado.", "'suppose' + will."],
    reviewPrompts: ["¿'but for' + qué?", "¿'otherwise' significa?"],
  },
  items: [
    TEXT("🔁 Repaso: wish/inversión. Hoy las HIPÓTESIS AVANZADAS y el lenguaje de RESOLVER PROBLEMAS. Vocabulario: los RETOS."),
    GRAMMAR("Hipótesis avanzadas y resolución de problemas", `· SUPPOSE / SUPPOSING / WHAT IF + presente (posible) o pasado (menos probable): Suppose we miss the train? What if it rained?
· BUT FOR + sustantivo/-ing = de no ser por: But for your help, I would have failed. (= If it hadn't been for your help)
· OTHERWISE = si no / de lo contrario: Write it down; otherwise you'll forget.
· GIVEN (THAT) = dado que: Given that we're late, let's take a taxi.
· PROVIDED / ASSUMING (THAT) = suponiendo que: Assuming everything goes to plan, we'll finish by five.
· IF IT WEREN'T/HADN'T BEEN FOR = de no ser por: If it weren't for you, I'd be lost.
⚠️ 'but for' + sustantivo (no frase). 'otherwise' suele ir tras ';' o al principio.`),
    WARN("Errores típicos del hispanohablante", "· ❌ But for you helped me → ✅ But for your help / But for you.\n· ❌ Suppose it will rain → ✅ Suppose it rains / rained.\n· ❌ Given that + inf → ✅ Given that + frase.\n· 'otherwise' = si no (consecuencia negativa)."),
    grammarEx("Use of English — Hipótesis avanzadas", "Completa o elige.", [
      fb("___ your help, I would have failed. (de no ser por)", ["But for"], "But for + sustantivo."),
      fb("Write it down; ___ you'll forget. (si no)", ["otherwise"], "otherwise."),
      fb("___ we miss the last bus — what then? (supón que)", ["Suppose", "Supposing", "What if"], "suppose."),
      fb("___ ___ we're already late, let's get a taxi. (dado que)", ["Given that"], "given that."),
      mc("Choose:", ["But for you helped me, I'd have failed.", "But for your help, I'd have failed.", "But for you help, I'd have failed."], 1, "but for + sustantivo."),
      fb("___ everything goes to plan, we'll finish early. (suponiendo)", ["Assuming", "Provided", "Providing"], "assuming that."),
      fb("If it ___ for the rain, we'd have had a picnic. (de no ser por)", ["weren't", "hadn't been"], "if it weren't/hadn't been for."),
    ]),
    GRAMMAR("Vocabulario del día — Los retos y resolver problemas", "Léxico de retos (B2)."),
    deck("B2 S3D14 — Retos y soluciones", [
      ["tackle", "abordar / hacer frente a", "We need to tackle the problem head-on.", "verbo", "ˈtækl"],
      ["overcome", "superar", "She overcame every obstacle.", "verbo", "ˌəʊvəˈkʌm"],
      ["come up with", "ocurrírsele / idear", "He came up with a brilliant solution.", "phrasal verb", "kʌm ʌp wɪð"],
      ["work out", "resolver / dar con", "We'll work it out somehow.", "phrasal verb", "wɜːk ˈaʊt"],
      ["obstacle", "obstáculo", "The main obstacle is cost.", "sustantivo", "ˈɒbstəkl"],
      ["cope with", "hacer frente a / sobrellevar", "How do you cope with the stress?", "phrasal verb", "kəʊp wɪð"],
      ["get to grips with", "hacerse con / dominar", "I'm still getting to grips with the software.", "expresión", "ɡet tə ˈɡrɪps wɪð"],
      ["last resort", "último recurso", "Borrowing money is a last resort.", "colocación", "lɑːst rɪˈzɔːt"],
      ["find a way round", "encontrar la manera de sortear", "There's always a way round a problem.", "expresión", "faɪnd ə weɪ ˈraʊnd"],
      ["trial and error", "prueba y error", "I learned by trial and error.", "expresión", "ˌtraɪəl ənd ˈerə"],
    ]),
    vocabEx("Vocabulario — Retos y soluciones", "Elige la opción correcta.", [
      mc("To deal with a difficult problem directly is to ___ it.", ["tackle", "overcome", "cope"], 0, "tackle."),
      mc("To think of a new idea or solution is to ___.", ["come up with", "cope with", "get to grips with"], 0, "come up with."),
      mc("To begin to understand and control something is to ___ it.", ["get to grips with", "come up with", "find a way round"], 0, "get to grips with."),
      mc("Learning by making mistakes is learning by ___.", ["trial and error", "last resort", "obstacle"], 0, "trial and error."),
      mc("The final option when all else fails is a ___.", ["last resort", "obstacle", "trial"], 0, "last resort."),
      mc("To manage a difficult situation is to ___ it.", ["cope with", "come up with", "work out"], 0, "cope with."),
    ]),

    ...uoe({
      p1: {
        title: "The art of solving problems",
        text: "Some people seem to have a gift for solving problems that leaves the rest of us (1)___ how they do it. In fact, research suggests that good problem-solving is less a matter of raw intelligence than of (2)___. The first, and most commonly neglected, is to define the problem clearly before rushing to (3)___ up with solutions. We waste enormous amounts of energy tackling the wrong problem, or a symptom rather than the real cause. The second habit is to resist the urge to seize on the first idea that comes to mind. Good problem-solvers generate many possible solutions before (4)___ them up against one another. Third, and perhaps most importantly, they are not afraid to fail. They treat each unsuccessful attempt not as a defeat but as useful information, learning by (5)___ and error until they finally (6)___ a way round the obstacle. Above all, they remain calm. Panic narrows our thinking at (7)___ the very moment we most need it to be broad. The next time you face a difficult problem, then, take a breath, define it clearly, and remember that there is almost (8)___ a way through.",
        q: [
          mc("(1)", ["wondering", "asking", "questioning", "thinking"], 0, "'leaves us wondering'."),
          mc("(2)", ["habits", "habit", "customs", "routines"], 0, "'a matter of… habits'."),
          mc("(3)", ["come", "get", "make", "put"], 0, "'rushing to come up with'."),
          mc("(4)", ["weighing", "measuring", "putting", "setting"], 0, "'weighing them up'."),
          mc("(5)", ["trial", "test", "try", "attempt"], 0, "'by trial and error'."),
          mc("(6)", ["find", "get", "work", "come"], 0, "'find a way round'."),
          mc("(7)", ["precisely", "exactly", "just", "right"], 0, "'at precisely the very moment' (o 'exactly')."),
          mc("(8)", ["always", "never", "ever", "sometimes"], 0, "'almost always a way through'."),
        ],
      },
      p2: {
        title: "But for a stranger",
        text: "I would not be alive today (1)___ for the kindness of a stranger. It was a bitterly cold winter's night, and I had broken down on a deserted country road, miles from anywhere, with no phone signal and a car that (2)___ not start. I sat there for over an hour, growing colder and more frightened, wondering (3)___ on earth I was going to do. Suppose no one came? I began, seriously, to fear for my safety. Then, just as I had almost (4)___ up hope, a pair of headlights appeared in my mirror. A woman got out, took (5)___ look at my situation, and without a moment's hesitation drove me the twenty miles to the nearest town, waited (6)___ me while I found a hotel, and refused, absolutely, to accept a penny. I never even (7)___ her name. But for her, I might well have frozen. I think of her often, and of how a single act of kindness, offered to a stranger who could offer (8)___ in return, can mean the difference between disaster and safety.",
        q: [
          fb("(1)", ["but"], "'but for the kindness'."),
          fb("(2)", ["would", "could"], "'a car that would not start'."),
          fb("(3)", ["what"], "'wondering what on earth'."),
          fb("(4)", ["given"], "'given up hope'."),
          fb("(5)", ["one", "a"], "'took one look' (o 'a look')."),
          fb("(6)", ["with", "for"], "'waited with/for me'."),
          fb("(7)", ["learned", "knew", "got"], "'never even learned her name'."),
          fb("(8)", ["nothing"], "'could offer nothing in return'."),
        ],
      },
      p3: {
        title: "Reframing our problems",
        text: "One of the most (1)___ discoveries in modern psychology is how much our experience of a problem depends on how we frame it. The very same situation can feel like a (2)___ disaster or an exciting challenge, depending entirely on the story we tell ourselves about it. This is not mere (3)___ positive thinking; the way we frame a difficulty has real, measurable effects on our ability to solve it. People who view a setback as a temporary, (4)___ obstacle tend to keep trying, and therefore keep improving. Those who see the same setback as (5)___ of some permanent personal failing tend to give up. The good news is that reframing is a skill that can be (6)___. When you next face a problem, try asking not 'why is this happening to me?' but 'what is this trying to teach me?' The shift may seem small, but its (7)___ can be profound. A problem, after all, is only (8)___ if you believe it to be. Framed differently, the very same obstacle can become the making of you.",
        items: [
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "complete", accepted: ["complete"], hint: "'a complete disaster' (adjetivo)." },
          { root: "naive", accepted: ["naive"], hint: "'mere naive positive thinking' (adjetivo)." },
          { root: "solve", accepted: ["solvable"], hint: "adjetivo → solvable." },
          { root: "prove", accepted: ["proof"], hint: "'as proof of' (sustantivo)." },
          { root: "learn", accepted: ["learned", "learnt"], hint: "'can be learned' (participio)." },
          { root: "effect", accepted: ["effects"], hint: "sustantivo plural → effects." },
          { root: "possible", accepted: ["impossible"], hint: "'only impossible if you believe it'." },
        ],
      },
      p4: {
        title: "Transformaciones — hipótesis avanzadas",
        items: [
          { s1: "If it hadn't been for your advice, I would have failed.", key: "BUT", s2: "___ your advice, I would have failed.", accepted: ["But for"], explanation: "but for + sustantivo." },
          { s1: "You should leave now, or you'll miss the train.", key: "OTHERWISE", s2: "You should leave now; ___ the train.", accepted: ["otherwise you'll miss"], explanation: "otherwise." },
          { s1: "What would happen if we ran out of money?", key: "SUPPOSE", s2: "___ out of money?", accepted: ["Suppose we ran"], explanation: "suppose + pasado." },
          { s1: "Since we're already late, let's just take a taxi.", key: "GIVEN", s2: "___ we're already late, let's take a taxi.", accepted: ["Given that"], explanation: "given that." },
          { s1: "If everything goes to plan, we'll finish on time.", key: "ASSUMING", s2: "___ everything goes to plan, we'll finish on time.", accepted: ["Assuming"], explanation: "assuming that." },
          { s1: "Without your support, I couldn't have coped.", key: "WEREN'T", s2: "If it ___ your support, I couldn't have coped.", accepted: ["weren't for", "hadn't been for"], explanation: "if it weren't/hadn't been for." },
        ],
      },
      p5: {
        title: "The problem that couldn't be solved",
        text: "For nearly a century, a particular mathematical problem defeated every mind that attempted it. The world's most brilliant mathematicians had wrestled with it and failed; textbooks described it as 'probably unsolvable'. So when a quiet, unknown graduate student named Elena Vasquez announced that she believed she had found a proof, the mathematical establishment reacted with a mixture of scepticism and amusement. Who was this newcomer to succeed where giants had failed?\n\nWhat made Elena's approach so unusual was that she had, in a sense, refused to accept the problem as it had been handed down to her. For decades, everyone had attacked it from the same direction, using the same set of established techniques — techniques that had been refined by generations of experts but had never quite worked. Elena's insight was that the problem might be unsolvable not because it was too hard, but because everyone was asking the wrong question. Rather than trying harder to force the existing methods to work, she stepped back and reframed the entire problem, translating it into the language of a completely different branch of mathematics.\n\nSeen from this new angle, the impossible obstacle suddenly revealed a hidden path. The proof, once she had found the right way to look at it, was not even especially complicated; it was, as one colleague later remarked, 'the kind of thing that makes you want to slap your forehead and ask why nobody thought of it before'. The answer, of course, is that thinking of it required the courage to abandon a century of accumulated assumptions.\n\nElena's achievement is now taught to students not merely as a piece of mathematics, but as a lesson in problem-solving itself. The most difficult problems, it suggests, are rarely solved by simply working harder within the existing framework. They yield, instead, to those brave and imaginative enough to question the framework itself — to ask not 'how do I solve this?' but 'am I even asking the right question?' It is a lesson that reaches far beyond mathematics, into every field of human endeavour where a problem has come to seem hopeless.",
        q: [
          mc("How did the mathematical establishment first react to Elena?", ["With admiration.", "With scepticism and amusement.", "With fear.", "With indifference."], 1, "'a mixture of scepticism and amusement'."),
          mc("What was unusual about Elena's approach?", ["She worked harder.", "She refused to accept the problem as handed down.", "She used the same methods.", "She gave up."], 1, "'refused to accept the problem as it had been handed down'."),
          mc("Why did Elena think the problem seemed unsolvable?", ["It was too hard.", "Everyone was asking the wrong question.", "It had no answer.", "It was a trick."], 1, "'everyone was asking the wrong question'."),
          mc("What did she do to find the solution?", ["Worked longer hours.", "Reframed the problem in a different branch of maths.", "Asked for help.", "Used a computer."], 1, "'translating it into the language of a completely different branch'."),
          mc("How is her achievement now taught?", ["As pure maths only.", "As a lesson in problem-solving itself.", "As a warning.", "As a curiosity."], 1, "'a lesson in problem-solving itself'."),
          mc("What is the main lesson beyond mathematics?", ["Work harder.", "Question the framework and whether you're asking the right question.", "Never give up.", "Trust the experts."], 1, "'to question the framework itself'."),
        ],
      },
      p6: {
        title: "The town that solved its own problem",
        text: "When the last factory in the small town of Elmswood closed down, taking with it four hundred jobs, most people assumed the town was finished. (1)___ Similar towns across the region had simply faded away when their industries died.\n\nElmswood, however, refused to accept this fate. (2)___ At a packed public meeting, instead of demanding that the government or some outside company come and rescue them, the residents asked a different question: what could they do for themselves?\n\nThe ideas that emerged were modest at first. (3)___ A group of unemployed former factory workers, many with practical skills, began repairing and renovating the town's crumbling empty buildings, turning them into workshops and small business units at very low rents.\n\nSlowly, almost imperceptibly, something began to grow. (4)___ A furniture-maker moved into one unit; a bakery opened in another; a small software company, attracted by the cheap space and the strong sense of community, relocated from the city.\n\nTen years on, Elmswood is not the town it was, and it never will be. (5)___ But it is alive, and thriving in a modest way, employing more people than the old factory ever did, across dozens of small enterprises rather than one large one. (6)___ Its story has become a case study in a simple but powerful idea: that the people closest to a problem are often the ones best placed to solve it.",
        options: [
          "The pattern was depressingly familiar.",                      // A -> gap 1
          "Its people were determined to write a different ending.",     // B -> gap 2
          "There was no grand plan, no dramatic rescue.",                // C -> gap 3
          "One success quietly encouraged another.",                     // D -> gap 4
          "The single great employer is gone for good.",                 // E -> gap 5
          "Elmswood, in the end, saved itself.",                         // F -> gap 6
          "The town was completely abandoned within a year.",            // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el patrón era conocido."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: querían otro final."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: sin gran plan ni rescate."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: un éxito animaba a otro."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el gran empleador se fue."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: Elmswood se salvó a sí misma."),
        ],
      },
      p7: {
        title: "Four people describe how they solved a problem",
        text: "Read what four people say about tackling a difficult problem.\n\nA) YUSUF: I was drowning in work and stress until I realised I was trying to do everything myself. The solution wasn't to work harder — it was to ask for help. The moment I started delegating, and admitting I couldn't do it all, everything got easier. Pride had been my biggest obstacle all along.\n\nB) CLARE: My business was failing, and I kept trying the same things, expecting different results. What finally saved it was stepping back and questioning everything I'd assumed about my customers. It turned out I'd been solving the wrong problem entirely. Once I asked the right question, the answer was obvious.\n\nC) DEV: I'm a great believer in trial and error. When I face a problem I can't solve, I don't sit around waiting for inspiration — I try something, anything, and learn from what goes wrong. Most of my best solutions came from a first attempt that failed but pointed me in the right direction.\n\nD) MEI: For me, the key is staying calm. When a crisis hits, everyone panics, and panic makes people stupid. My method is to take a breath, break the huge problem down into small, manageable pieces, and just deal with them one at a time. A mountain is only ever climbed one step at a time.",
        q: [
          mc("Who solved a problem by asking for help?", ["A", "B", "C", "D"], 0, "Yusuf: 'the solution… was to ask for help'."),
          mc("Who discovered they'd been solving the wrong problem?", ["A", "B", "C", "D"], 1, "Clare: 'solving the wrong problem entirely'."),
          mc("Who believes in learning through trial and error?", ["A", "B", "C", "D"], 2, "Dev: 'a great believer in trial and error'."),
          mc("Who emphasises staying calm and breaking problems down?", ["A", "B", "C", "D"], 3, "Mei: 'break the huge problem down… one at a time'."),
          mc("Who found that pride was their main obstacle?", ["A", "B", "C", "D"], 0, "Yusuf: 'Pride had been my biggest obstacle'."),
          mc("Who questioned their own assumptions to find the answer?", ["A", "B", "C", "D"], 1, "Clare: 'questioning everything I'd assumed'."),
          mc("Who thinks panic makes people unable to think clearly?", ["A", "B", "C", "D"], 3, "Mei: 'panic makes people stupid'."),
          mc("Who acts immediately rather than waiting for inspiration?", ["A", "B", "C", "D"], 2, "Dev: 'I try something, anything'."),
          mc("Who says their best solutions came from initial failures?", ["A", "B", "C", "D"], 2, "Dev: 'a first attempt that failed but pointed me…'"),
          mc("Who found that working harder was not the answer?", ["A", "B", "C", "D"], 0, "Yusuf: 'The solution wasn't to work harder'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The best way to solve a problem is to face it head-on.'\nComenta estos dos aspectos y añade uno propio:\n1. work (el trabajo)\n2. personal difficulties (las dificultades personales)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'A problem I managed to solve' — cuenta el reto y cómo lo superaste.\n· INFORME para el ayuntamiento sobre un problema de tu barrio (tráfico, falta de zonas verdes, etc.): descríbelo y propón soluciones.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con un experto en resolución de problemas, el profesor Grant, sobre cómo pensamos (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with Professor Grant, an expert in problem-solving. Interviewer: Professor Grant, why are humans often so bad at solving problems? Professor Grant: The main reason is that we jump to solutions far too quickly. We're uncomfortable with uncertainty, so we grab the first idea that comes along, without properly understanding the problem first. Interviewer: So we should slow down? Professor Grant: Exactly. In fact, I always tell my students that if you have an hour to solve a problem, spend fifty-five minutes understanding it and five minutes solving it. Once you truly understand a problem, the solution is often obvious. Interviewer: What's the biggest mistake people make? Professor Grant: Solving the wrong problem. People are brilliant at answering questions that were never worth asking. You must always check that you're tackling the real issue, not just a symptom. Interviewer: Is creativity important? Professor Grant: Vital. But not in the way people think. Creativity isn't magic; it comes from combining ideas from different fields. The best problem-solvers are curious about everything, because you never know which piece of unrelated knowledge will provide the key. Interviewer: How do you deal with a problem that seems impossible? Professor Grant: I reframe it. If a problem seems unsolvable, it usually means I'm looking at it the wrong way. I ask myself: what assumption am I making that might be false? Interviewer: And finally, your best advice? Professor Grant: Stay calm, and never be afraid to fail. Every failed attempt teaches you something. The people who solve the hardest problems aren't the cleverest; they're the ones willing to keep trying after everyone else has given up.", [
      mc("1. Why are humans often bad at problem-solving?", ["They're not intelligent.", "They jump to solutions too quickly.", "They think too much."], 1, "'we jump to solutions far too quickly'."),
      mc("2. How does Grant say we should spend an hour to solve a problem?", ["55 minutes solving it.", "55 minutes understanding it.", "Equally split."], 1, "'spend fifty-five minutes understanding it'."),
      mc("3. What is the biggest mistake people make?", ["Working too slowly.", "Solving the wrong problem.", "Asking for help."], 1, "'Solving the wrong problem'."),
      mc("4. Where does creativity come from, according to Grant?", ["Magic.", "Combining ideas from different fields.", "Raw talent."], 1, "'combining ideas from different fields'."),
      mc("5. How does Grant deal with an 'impossible' problem?", ["He gives up.", "He reframes it and questions his assumptions.", "He works harder."], 1, "'I reframe it… what assumption am I making that might be false?'"),
      mc("6. What does Grant say about the best problem-solvers?", ["They're the cleverest.", "They keep trying after others give up.", "They never fail."], 1, "'willing to keep trying after everyone else has given up'."),
      mc("7. What is his final advice?", ["Work faster.", "Stay calm and never be afraid to fail.", "Avoid hard problems."], 1, "'Stay calm, and never be afraid to fail'."),
    ]),

    ...speakingParts({ p1: "cómo afrontas los problemas, un reto que hayas superado y qué te ayuda a mantener la calma", p2: "dos personas afrontando dificultades (una que pide ayuda y otra que lo intenta sola): compáralas y di qué enfoque funciona mejor", p3: "qué ayuda más a resolver un problema difícil (mantener la calma, pedir consejo, dividirlo en partes, probar y equivocarse, replantearlo): comentadlo y elegid lo más eficaz", p4: "los retos y los problemas: si es mejor afrontarlos solo o con ayuda, si aprendemos más de los fracasos y qué hace a alguien bueno resolviendo problemas" }),

    SUMMARY("Resumen del Día 14", [
      "Hipótesis: suppose/what if + presente/pasado; but for + sustantivo; otherwise (si no); given/assuming that.",
      "'If it weren't/hadn't been for…' = de no ser por.",
      "Vocabulario de retos. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 15", "Escribe 4 frases con suppose/but for/otherwise/given that. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 15 ─────────────────────────
const DAY15 = {
  title: "Día 15 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los condicionales, wish y las hipótesis. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 3.",
  pedagogy: {
    objective: "Consolidar los condicionales y el lenguaje hipotético del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 4."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 3 del B2. Consolidas los condicionales (0/1/2/3, mixtos), wish/would rather, la inversión y las hipótesis avanzadas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 3", `1) Cond. 0/1/2 y alternativas a 'if' (unless/as long as/in case).
2) 3er cond. y mixtos (pasado→presente / presente→pasado).
3) wish/if only/it's time/would rather; inversión (Had I known, Were I, Should you).
4) Hipótesis avanzadas: suppose/what if, but for, otherwise, given/assuming that.`),
    grammarEx("Use of English — Repaso mixto de la Semana 3", "Completa o elige.", [
      fb("If I ___ (have) more money, I'd travel. (2º)", ["had"], "2º cond."),
      fb("If I ___ (study) harder, I would have passed. (3er)", ["had studied"], "3er cond."),
      fb("If I ___ (save) money last year, I'd be rich now. (mixto)", ["had saved"], "pasado → presente."),
      fb("I wish I ___ (not/say) that. (arrepentimiento)", ["hadn't said"], "wish + past perfect."),
      fb("___ your help, I would have failed. (de no ser por)", ["But for"], "but for."),
      fb("Hurry, ___ we'll be late. (si no)", ["otherwise"], "otherwise."),
      fb("___ I known, I'd have helped. (inversión)", ["Had"], "Had I known."),
      fb("You can borrow it ___ ___ ___ you return it. (siempre que)", ["as long as"], "as long as."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 3", "Repasa los mazos (dinero, decisiones, deseos, retos)."),
    vocabEx("Vocabulario — Repaso de la Semana 3", "Elige la opción correcta.", [
      mc("To have just enough money to live on:", ["make ends meet", "splash out", "be well off"], 0, "make ends meet."),
      mc("To finally decide:", ["make up your mind", "have second thoughts", "weigh up"], 0, "make up your mind."),
      mc("To want something very strongly:", ["long for", "settle for", "second-guess"], 0, "long for."),
      mc("To deal with a difficult problem directly:", ["tackle", "overcome", "cope"], 0, "tackle."),
      mc("To reduce your spending:", ["cut back on", "splash out", "afford"], 0, "cut back on."),
      mc("Understanding after an event:", ["hindsight", "impulse", "regret"], 0, "hindsight."),
      mc("To think of a new solution:", ["come up with", "cope with", "get to grips with"], 0, "come up with."),
      mc("To accept something less than you wanted:", ["settle for", "long for", "make the most of"], 0, "settle for."),
    ]),

    ...uoe({
      p1: {
        title: "The power of a plan B",
        text: "Optimists like to say that you should never have a plan B, because it (1)___ your commitment to plan A. There is a certain (2)___ to this: people who allow themselves an easy escape route often take it at the first sign of difficulty. And yet, in most areas of life, refusing to plan for failure is not brave but foolish. The wise (3)___ prepare for the best while remaining ready for the worst. Suppose your first choice falls (4)___ — what then? A person with no alternative is (5)___ at the mercy of events; a person with a plan B retains their freedom. The trick is to hold your backup plan lightly, so that it does not (6)___ your resolve, while keeping it ready in case it is needed. But (7)___ this kind of quiet preparation, countless people have been left with nothing when their single, all-or-nothing gamble failed to pay (8)___.",
        q: [
          mc("(1)", ["weakens", "lowers", "reduces", "drops"], 0, "'weakens your commitment'."),
          mc("(2)", ["truth", "true", "truly", "trust"], 0, "'a certain truth to this'."),
          mc("(3)", ["prepare", "prepares", "preparing", "prepared"], 0, "'The wise prepare' (the + adj = plural)."),
          mc("(4)", ["through", "down", "off", "apart"], 0, "'falls through' (fracasar)."),
          mc("(5)", ["entirely", "wholly", "completely", "all"], 0, "'entirely at the mercy of events'."),
          mc("(6)", ["undermine", "weaken", "damage", "hurt"], 0, "'undermine your resolve'."),
          mc("(7)", ["for", "of", "with", "without"], 0, "'But for this preparation'."),
          mc("(8)", ["off", "up", "out", "back"], 0, "'pay off'."),
        ],
      },
      p2: {
        title: "The comfort zone trap",
        text: "There is a reason it is called a 'comfort zone': staying (1)___ it feels safe and pleasant. The trouble is that nothing ever grows there. Every skill you (2)___ possess, every friendship you value, every achievement you are proud of, was acquired by stepping, at least briefly, (3)___ of your comfort zone into the uncertain territory beyond. Suppose you had never dared to do anything that frightened you — (4)___ would your life look like now? Almost certainly, it would be far smaller and duller. This does not mean recklessly throwing (5)___ into every danger; it means recognising that a certain amount of discomfort is the (6)___ we pay for a rich and expanding life. If it (7)___ for the willingness of human beings to venture beyond the familiar, we would still be living in caves. The next time you feel that nervous flutter of stepping into the unknown, remember that it is (8)___ the feeling of your life getting bigger.",
        q: [
          fb("(1)", ["in", "inside", "within"], "'staying in/within it'."),
          fb("(2)", ["now"], "'every skill you now possess'."),
          fb("(3)", ["out", "outside"], "'stepping… out of your comfort zone'."),
          fb("(4)", ["what"], "'what would your life look like'."),
          fb("(5)", ["yourself"], "reflexivo → yourself."),
          fb("(6)", ["price"], "'the price we pay'."),
          fb("(7)", ["weren't", "wasn't"], "'If it weren't for'."),
          fb("(8)", ["simply", "just", "merely"], "'it is simply the feeling'."),
        ],
      },
      p3: {
        title: "Why we avoid hard conversations",
        text: "Most of us go to (1)___ lengths to avoid difficult conversations. We put off telling a friend an (2)___ truth, or confronting a colleague about their behaviour, hoping that the problem will somehow resolve (3)___ on its own. It almost never does. Instead, the unspoken tension festers, poisoning the relationship far more (4)___ than any honest conversation ever could. The (5)___ we avoid is usually imaginary: we picture an explosive argument, when in reality most people respond to honest, kind directness with (6)___. Suppose you finally said what needed to be said — the outcome is rarely as bad as your (7)___ predicts. The ability to have hard conversations well is, in fact, one of the most (8)___ skills a person can develop. Relationships, whether personal or professional, are not damaged by difficult conversations. They are damaged by the difficult conversations we never have.",
        items: [
          { root: "great", accepted: ["great"], hint: "'go to great lengths' (adjetivo)." },
          { root: "comfort", accepted: ["uncomfortable"], hint: "'an uncomfortable truth'." },
          { root: "it", accepted: ["itself"], hint: "reflexivo → itself." },
          { root: "effect", accepted: ["effectively"], hint: "adverbio → effectively." },
          { root: "confront", accepted: ["confrontation"], hint: "sustantivo → confrontation." },
          { root: "grace", accepted: ["gratitude"], hint: "'respond with gratitude'." },
          { root: "imagine", accepted: ["imagination"], hint: "sustantivo → imagination." },
          { root: "value", accepted: ["valuable"], hint: "adjetivo → valuable." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 3",
        items: [
          { s1: "You'll fail unless you work harder.", key: "LONG", s2: "You'll pass ___ you work harder.", accepted: ["as long as"], explanation: "as long as." },
          { s1: "I didn't save, so I'm not rich now.", key: "SAVED", s2: "If I ___, I'd be rich now.", accepted: ["had saved", "'d saved"], explanation: "mixto." },
          { s1: "I regret not telling her the truth.", key: "WISH", s2: "I ___ her the truth.", accepted: ["wish I had told", "wish I'd told"], explanation: "wish + past perfect." },
          { s1: "Without your support, I would have given up.", key: "BUT", s2: "___ your support, I would have given up.", accepted: ["But for"], explanation: "but for." },
          { s1: "If I had known about the traffic, I'd have left earlier.", key: "HAD", s2: "___ about the traffic, I'd have left earlier.", accepted: ["Had I known"], explanation: "inversión." },
          { s1: "We really ought to leave now.", key: "TIME", s2: "It's ___ now.", accepted: ["time we left"], explanation: "it's time + pasado." },
        ],
      },
      p5: {
        title: "The experiment that changed how we understand willpower",
        text: "In the late 1960s, a psychologist named Walter Mischel began a series of experiments that would become among the most famous in the history of the discipline. The setup was simple. A young child was seated at a table and offered a single marshmallow. The researcher explained that they had to leave the room for a while, and that if the child could resist eating the marshmallow until they returned, they would be rewarded with a second one. Then the researcher left, and the child was filmed, alone with the tempting treat.\n\nThe footage is, by turns, hilarious and heartbreaking. Some children devoured the marshmallow the instant the door closed. Others held out for a few agonising seconds before giving in. But a significant number managed, through an extraordinary variety of self-invented strategies, to hold on for the full fifteen minutes and claim their reward. They covered their eyes, turned their backs, sang songs, or even stroked the marshmallow as though it were a small pet — anything to distract themselves from the overwhelming temptation directly in front of them.\n\nThe truly remarkable findings, however, came years later. Mischel and his colleagues tracked down the original children, now grown up, and discovered a striking pattern. Those who, as small children, had been able to delay gratification tended to have done markedly better in life by almost every measure: higher exam scores, better health, more successful careers, more stable relationships. The ability, at the age of four, to resist a marshmallow appeared to predict success across an entire lifetime.\n\nFor a time, this was interpreted rather bleakly, as though our fate were fixed in early childhood by some innate quantity of willpower. But Mischel himself always resisted this gloomy conclusion, and later research has largely vindicated him. What the successful children had was not, it turns out, some magical inborn self-control, but a set of strategies — ways of distracting themselves and reframing the temptation — that anyone can learn. The lesson of the marshmallow, properly understood, is not that willpower is a fixed gift we either have or lack. It is that self-control is a skill, and that, like any skill, it can be taught, practised and improved. That, surely, is a far more hopeful conclusion than the one we first drew.",
        q: [
          mc("What were the children offered in the experiment?", ["Money.", "A marshmallow now, or two if they waited.", "A toy.", "A game."], 1, "'a single marshmallow… a second one'."),
          mc("How did some children resist the temptation?", ["They ate it.", "Through self-invented distraction strategies.", "They left the room.", "They cried."], 1, "'a variety of self-invented strategies… covered their eyes, turned their backs'."),
          mc("What did the follow-up study discover?", ["Nothing.", "Those who waited did better in life by many measures.", "The children forgot.", "Waiting had no effect."], 1, "'those who… delay gratification tended to have done markedly better'."),
          mc("How was this first interpreted?", ["Optimistically.", "Bleakly, as though fate were fixed in childhood.", "As a joke.", "As unimportant."], 1, "'rather bleakly, as though our fate were fixed'."),
          mc("What did later research suggest the successful children had?", ["Inborn willpower.", "Learnable strategies, not magical self-control.", "Higher intelligence.", "Better luck."], 1, "'not… magical inborn self-control, but a set of strategies… anyone can learn'."),
          mc("What is the hopeful conclusion of the marshmallow test?", ["Willpower is fixed.", "Self-control is a skill that can be taught and improved.", "The test was meaningless.", "Children can't change."], 1, "'self-control is a skill… can be taught, practised and improved'."),
        ],
      },
      p6: {
        title: "The invention born from a mistake",
        text: "Some of the most useful things ever invented were the result not of careful planning but of a happy accident. (1)___ The adhesive on a sticky note, the discovery of penicillin, even the humble microwave oven — all owe their existence to a mistake that someone was clever enough to notice.\n\nConsider the case of the sticky note. (2)___ A scientist at a large company was trying to develop a very strong glue, and failed completely, producing instead a weak adhesive that barely stuck at all.\n\nBy any conventional measure, the experiment was a failure. (3)___ The useless glue was filed away and forgotten, as thousands of failed experiments are every year.\n\nWhat rescued it was an entirely unrelated problem. (4)___ A colleague, frustrated that the paper bookmarks kept falling out of his hymn book at church, remembered the weak glue and realised it was perfect: strong enough to hold a paper in place, weak enough to peel off without damage.\n\nThe rest, as they say, is history. (5)___ A product now found on virtually every desk in the world was born directly from a failed attempt to make something else entirely. (6)___ The lesson is one that every innovator eventually learns: there is no such thing as a wasted experiment, only a discovery whose use has not yet been found.",
        options: [
          "The history of invention is full of such fortunate errors.",  // A -> gap 1
          "Its origins lie in an experiment that went wrong.",           // B -> gap 2
          "For several years, nothing whatsoever came of it.",           // C -> gap 3
          "The solution came from a completely different direction.",    // D -> gap 4
          "What had been a failure became a global success.",            // E -> gap 5
          "Failure, in other words, is often success in disguise.",      // F -> gap 6
          "Every one of these inventions was carefully planned.",        // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la historia está llena de errores afortunados."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nació de un experimento fallido."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: durante años no salió nada."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la solución vino de otra dirección."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el fracaso se hizo éxito global."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el fracaso es éxito disfrazado."),
        ],
      },
      p7: {
        title: "Four people talk about a hypothetical choice",
        text: "Read what four people say in response to the question: 'If you could change one decision in your life, would you?'\n\nA) HANA: Honestly, no. Even the decisions I regret led somewhere important. If I hadn't taken that awful first job, I'd never have met the mentor who changed my life. You can't unpick one thread without unravelling the whole cloth. I'll keep my mistakes, thanks.\n\nB) VICTOR: If I could change one thing, I'd have been kinder to my brother when we were young. We were so competitive, always fighting, and I said cruel things I can never take back. He's forgiven me, but if only I could go back and just... be gentler. That's my one real regret.\n\nC) SANA: I'd change my career, without hesitation. I chose law to please my parents, and I've spent twenty years in a profession I never loved. If I'd had the courage to follow my own path back then, I think I'd be a happier person now. It's the one 'what if' that still haunts me.\n\nD) LEO: I don't think about it, to be honest. What's the point? The past can't be changed, so wishing it were different is just a way of making yourself miserable in the present. I'd rather put all that energy into the decisions I'm still able to make. The only choice that matters is the next one.",
        q: [
          mc("Who would not change anything, because mistakes led somewhere good?", ["A", "B", "C", "D"], 0, "Hana: 'the decisions I regret led somewhere important'."),
          mc("Who regrets how they treated a family member?", ["A", "B", "C", "D"], 1, "Victor: 'kinder to my brother'."),
          mc("Who regrets a career chosen to please others?", ["A", "B", "C", "D"], 2, "Sana: 'I chose law to please my parents'."),
          mc("Who refuses to dwell on the unchangeable past?", ["A", "B", "C", "D"], 3, "Leo: 'The past can't be changed'."),
          mc("Who uses the image of threads and cloth?", ["A", "B", "C", "D"], 0, "Hana: 'unpick one thread without unravelling the whole cloth'."),
          mc("Who wishes they had followed their own path?", ["A", "B", "C", "D"], 2, "Sana: 'the courage to follow my own path'."),
          mc("Who focuses their energy on future decisions?", ["A", "B", "C", "D"], 3, "Leo: 'the decisions I'm still able to make'."),
          mc("Who has been forgiven but still feels regret?", ["A", "B", "C", "D"], 1, "Victor: 'He's forgiven me, but if only…'"),
          mc("Whose one 'what if' still haunts them?", ["A", "B", "C", "D"], 2, "Sana: 'the one \"what if\" that still haunts me'."),
          mc("Who says the only choice that matters is the next one?", ["A", "B", "C", "D"], 3, "Leo: 'The only choice that matters is the next one'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is pointless to worry about decisions we have already made.'\nComenta estos dos aspectos y añade uno propio:\n1. learning from the past (aprender del pasado)\n2. mental wellbeing (el bienestar mental)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'If I could change one decision…' — reflexiona sobre si cambiarías algo de tu pasado y por qué.\n· RELATO que empiece con: 'Had things gone differently that day, none of this would have happened.'", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: If I'd known how hard it would be, I'm honestly not sure I'd have started. But I'm so glad I did. Two. Man: But for my teacher's encouragement, I'd never have gone to university at all. Three. Woman: I wish I'd travelled more when I had the chance — now I've got too many responsibilities. Four. Man: Suppose the deal falls through — do we have a backup plan? Five. Woman: I keep second-guessing my decision, but I need to just stick to it and stop worrying. Six. Man: Given that we're already an hour late, there's really no point rushing now. Seven. Woman: If it weren't for my family, I don't know how I'd have coped with the loss. Eight. Man: I bought it on impulse, and I've regretted it ever since.", [
      mc("1. How does the woman feel about starting?", ["She regrets it.", "She's glad, despite the difficulty.", "It was easy."], 1, "'I'm so glad I did'."),
      mc("2. What does the man credit for going to university?", ["His family.", "His teacher's encouragement.", "Luck."], 1, "'But for my teacher's encouragement'."),
      mc("3. What does the woman regret?", ["Working too much.", "Not travelling more when she could.", "Her career."], 1, "'I wish I'd travelled more'."),
      mc("4. What is the man concerned about?", ["The cost.", "Whether they have a backup plan.", "The timing."], 1, "'do we have a backup plan?'"),
      mc("5. What does the woman need to do?", ["Change her mind.", "Stick to her decision and stop worrying.", "Ask for help."], 1, "'stick to it and stop worrying'."),
      mc("6. Why is there no point rushing?", ["It's dangerous.", "They're already an hour late.", "It's too far."], 1, "'Given that we're already an hour late'."),
      mc("7. What helped the woman cope with her loss?", ["Her job.", "Her family.", "Time."], 1, "'If it weren't for my family'."),
      mc("8. How does the man feel about his purchase?", ["Delighted.", "He's regretted it since.", "Indifferent."], 1, "'I've regretted it ever since'."),
    ]),

    ...speakingParts({ p1: "una decisión importante de tu vida, algo que desearías haber hecho de otra manera y cómo afrontas los problemas", p2: "dos personas ante una encrucijada (una eligiendo con calma y otra dudando y angustiada): compáralas y especula sobre su decisión", p3: "qué es más importante al tomar una gran decisión (seguir el corazón, ser prudente, pedir consejo, tener un plan B, aceptar el riesgo): comentadlo y elegid lo más importante", p4: "las decisiones, los arrepentimientos y las hipótesis: si es útil pensar en 'lo que podría haber sido', si deberíamos vivir sin arrepentimientos y cómo afrontar la incertidumbre" }),

    SUMMARY("Resumen de la Semana 3 (B2)", [
      "Dominas los condicionales (0/1/2/3, mixtos), wish/would rather, la inversión y las hipótesis avanzadas.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: los modales (deducción, obligación, crítica) y la ley y el delito.",
    ]),
    INFO("Mini-simulacro de la Semana 3", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 4."),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Condicionales e hipótesis",
  description: "Los cuatro condicionales, los mixtos, wish/would rather, la inversión condicional y las hipótesis avanzadas (but for, otherwise, suppose). Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
