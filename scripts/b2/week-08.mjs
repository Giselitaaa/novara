/**
 * B2 First · Semana 8 — "El discurso, la cohesión y los matices".
 * Gramática: conectores del discurso (contraste, adición, causa/resultado,
 * concesión), cuantificadores, artículos y determinantes/pronombres.
 * Cada día, las 4 destrezas con el formato real del B2.
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, in my view, on the whole, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they might well be, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a good point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 36 ─────────────────────────
const DAY36 = {
  title: "Día 36 — Conectores del discurso · La sociedad",
  description: "Conectores de contraste, adición, causa/resultado y concesión. Vocabulario de sociedad. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Enlazar ideas con precisión y variedad (contraste, causa, concesión).",
    summary: "Conectores del discurso; la sociedad; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'despite of'.", "'although… but'.", "'however' sin puntuación."],
    reviewPrompts: ["¿'despite' + qué? ¿'although' + qué?", "¿'however' vs 'but'?"],
  },
  items: [
    TEXT("🔁 Semana 8. Hoy los CONECTORES DEL DISCURSO: enlazar ideas con precisión. Vocabulario: la SOCIEDAD."),
    GRAMMAR("Conectores del discurso", `CONTRASTE:
· although / even though / though + FRASE: Although it was late, we stayed. · whereas / while (contraste entre dos ideas): He's calm, whereas she's excitable.
· despite / in spite of + SUSTANTIVO/-ing: Despite the rain, … Despite being tired, …
· however / nevertheless / nonetheless / on the other hand (entre frases, con coma): It was hard. However, we succeeded.
ADICIÓN: moreover / furthermore / in addition / what's more / besides.
CAUSA: because / since / as + frase; because of / due to / owing to + sustantivo.
RESULTADO: so / therefore / consequently / as a result / thus / hence.
PROPÓSITO: so that / in order to / so as to.
⚠️ ❌ despite OF → despite / in spite OF. ❌ although … but (no se combinan). 'however' NO es lo mismo que 'but' en posición.`),
    WARN("Errores típicos del hispanohablante", "· ❌ despite of the rain → ✅ despite the rain / in spite of the rain.\n· ❌ Although it rained, but we went → ✅ Although it rained, we went.\n· ❌ because of it was late → ✅ because it was late / because of the late hour.\n· 'however' va con coma, entre dos frases."),
    grammarEx("Use of English — Conectores del discurso", "Completa o elige.", [
      fb("___ the difficulties, they succeeded. (a pesar de + sustantivo)", ["Despite", "In spite of"], "despite + sustantivo."),
      fb("___ it was raining, we went out. (aunque + frase)", ["Although", "Even though", "Though"], "although + frase."),
      mc("Choose:", ["He's shy, whereas she's outgoing.", "He's shy, despite she's outgoing.", "He's shy, although she's outgoing but."], 0, "whereas (contraste)."),
      fb("The plan failed. ___, we learned a lot. (sin embargo, entre frases)", ["However", "Nevertheless", "Nonetheless"], "however + coma."),
      fb("The event was cancelled ___ ___ the storm. (a causa de + sustantivo)", ["because of", "due to", "owing to"], "because of + sustantivo."),
      fb("It was late; ___, we decided to leave. (por lo tanto)", ["therefore", "consequently", "thus"], "therefore."),
      mc("Choose:", ["Despite of being tired, she carried on.", "Despite being tired, she carried on.", "Despite she was tired, she carried on."], 1, "despite + -ing."),
    ]),
    GRAMMAR("Vocabulario del día — La sociedad", "Léxico de sociedad (B2)."),
    deck("B2 S8D36 — La sociedad", [
      ["inequality", "desigualdad", "Inequality has grown sharply.", "sustantivo", "ˌɪnɪˈkwɒləti"],
      ["poverty", "pobreza", "Millions live in poverty.", "sustantivo", "ˈpɒvəti"],
      ["welfare", "bienestar / asistencia social", "The welfare system supports the poor.", "sustantivo", "ˈwelfeə"],
      ["discrimination", "discriminación", "Discrimination remains a problem.", "sustantivo", "dɪˌskrɪmɪˈneɪʃn"],
      ["integration", "integración", "Integration takes time and effort.", "sustantivo", "ˌɪntɪˈɡreɪʃn"],
      ["social mobility", "movilidad social", "Social mobility has declined.", "colocación", "ˌsəʊʃl məʊˈbɪləti"],
      ["marginalised", "marginado/a", "Marginalised groups are often ignored.", "adjetivo", "ˈmɑːdʒɪnəlaɪzd"],
      ["cohesion", "cohesión", "Trust builds social cohesion.", "sustantivo", "kəʊˈhiːʒn"],
      ["deprived", "desfavorecido/a", "It's a deprived neighbourhood.", "adjetivo", "dɪˈpraɪvd"],
      ["divide", "brecha / división", "There's a growing divide between rich and poor.", "sustantivo", "dɪˈvaɪd"],
    ]),
    vocabEx("Vocabulario — La sociedad", "Elige la opción correcta.", [
      mc("The unfair difference between rich and poor is ___.", ["inequality", "welfare", "cohesion"], 0, "inequality."),
      mc("The chance to move up in society is ___.", ["social mobility", "poverty", "discrimination"], 0, "social mobility."),
      mc("A group pushed to the edges of society is ___.", ["marginalised", "integrated", "deprived"], 1, "marginalised."),
      mc("A poor area lacking resources is ___.", ["deprived", "cohesive", "integrated"], 0, "deprived."),
      mc("The sense of unity that holds a society together is social ___.", ["cohesion", "mobility", "welfare"], 0, "cohesion."),
      mc("Government support for people in need is ___.", ["welfare", "poverty", "divide"], 0, "welfare."),
    ]),

    ...uoe({
      p1: {
        title: "The problem of inequality",
        text: "Inequality is one of the defining challenges of our age. In many countries, the gap between the richest and the poorest has (1)___ dramatically in recent decades. Some argue that a degree of inequality is (2)___, even necessary, since it rewards effort and drives ambition. There is something in this. (3)___, when inequality becomes extreme, the consequences for society can be severe. Extreme inequality tends to (4)___ social mobility, trapping people in the circumstances of their birth. (5)___, it can weaken the sense of shared identity — the social cohesion — on which a healthy society depends. When people feel that the system is rigged (6)___ them, trust breaks down. None of this means we should aim for perfect equality, which is neither possible nor (7)___. But it does suggest that a society in which a few have almost everything and many have almost nothing is not merely unjust; it is, in the long (8)___, unstable. The challenge is to build a society that rewards effort while ensuring that everyone has a genuine chance to succeed.",
        q: [
          mc("(1)", ["widened", "grown", "increased", "risen"], 0, "'widened dramatically'."),
          mc("(2)", ["inevitable", "avoidable", "impossible", "temporary"], 0, "'a degree of inequality is inevitable'."),
          mc("(3)", ["However", "Therefore", "Moreover", "Besides"], 0, "'However, when inequality becomes extreme'."),
          mc("(4)", ["reduce", "lower", "decrease", "cut"], 0, "'reduce social mobility'."),
          mc("(5)", ["Furthermore", "However", "Nevertheless", "Otherwise"], 0, "'Furthermore, it can weaken…'"),
          mc("(6)", ["against", "for", "with", "over"], 0, "'the system is rigged against them'."),
          mc("(7)", ["desirable", "possible", "likely", "certain"], 0, "'neither possible nor desirable'."),
          mc("(8)", ["run", "term", "way", "period"], 0, "'in the long run'."),
        ],
      },
      p2: {
        title: "Does money make us mean?",
        text: "It might seem obvious that those (1)___ have the most would be the most generous. Surprisingly, research suggests the opposite may often be (2)___ case. In a series of studies, psychologists have found that, on (3)___, wealthier people tend to give away a smaller proportion of their income than poorer people do, and behave less generously in various tests of fairness. (4)___ the reasons for this are debated, one theory is that wealth insulates people from a sense of dependence on others. The poor, who must often rely on their neighbours and community, understand at a deep level (5)___ we all need each other. The wealthy, able to buy their way out of most difficulties, can more easily forget it. This does not mean, of course, that rich people are bad (6)___ poor people good; there are countless generous wealthy individuals and countless selfish poor ones. (7)___, the research points to something important about how our circumstances shape our behaviour. It suggests that generosity may depend less on how much we have (8)___ on how connected we feel to those around us.",
        q: [
          fb("(1)", ["who", "that"], "'those who have the most'."),
          fb("(2)", ["the"], "'the opposite… the case'."),
          fb("(3)", ["average"], "'on average'."),
          fb("(4)", ["While", "Although", "Though"], "'While the reasons are debated'."),
          fb("(5)", ["that"], "'understand… that we all need each other'."),
          fb("(6)", ["and"], "'rich people are bad and poor people good'."),
          fb("(7)", ["However", "Nevertheless", "Nonetheless"], "'However, the research points to…'"),
          fb("(8)", ["than"], "'less on how much we have than on…'"),
        ],
      },
      p3: {
        title: "The myth of the self-made success",
        text: "One of the most (1)___ ideas in modern culture is that of the 'self-made' success — the individual who, through sheer talent and hard work, rises from nothing to greatness, owing (2)___ to nobody. It is an inspiring story, and there is genuine truth in it. Effort and ability do matter (3)___. And yet the idea of the purely self-made individual is, on closer (4)___, largely a myth. No one succeeds entirely alone. Behind every 'self-made' person lies a vast web of support: the parents who raised them, the teachers who (5)___ them, the society that provided roads, schools, laws and safety. Even our talents are, to a large (6)___, the product of a genetic lottery we did nothing to deserve. Recognising this is not meant to (7)___ anyone's genuine achievements. Rather, it is meant to inspire gratitude and humility, and to remind the successful of a (8)___ they too easily forget: that they owe a debt to the society that made their success possible, and have a duty, in turn, to help others.",
        items: [
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "thing", accepted: ["nothing"], hint: "'owing nothing to nobody' → nothing." },
          { root: "enormous", accepted: ["enormously"], hint: "adverbio → enormously." },
          { root: "examine", accepted: ["examination"], hint: "'on closer examination' (sustantivo)." },
          { root: "courage", accepted: ["encouraged"], hint: "'the teachers who encouraged them' → encouraged." },
          { root: "extend", accepted: ["extent"], hint: "'to a large extent' (sustantivo)." },
          { root: "value", accepted: ["devalue"], hint: "'to devalue anyone's achievements' → devalue." },
          { root: "true", accepted: ["truth"], hint: "'a truth they forget' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — conectores",
        items: [
          { s1: "Although he was exhausted, he finished the race.", key: "DESPITE", s2: "___ , he finished the race.", accepted: ["Despite being exhausted"], explanation: "despite + -ing." },
          { s1: "It was expensive, but it was worth it.", key: "ALTHOUGH", s2: "___ expensive, it was worth it.", accepted: ["Although it was"], explanation: "although + frase." },
          { s1: "The match was cancelled because of the bad weather.", key: "AS", s2: "The match was cancelled ___ bad.", accepted: ["as the weather was"], explanation: "as + frase." },
          { s1: "The roads were icy, so we drove carefully.", key: "CONSEQUENTLY", s2: "The roads were icy; ___ carefully.", accepted: ["consequently we drove"], explanation: "consequently." },
          { s1: "He is careful with money, while his brother spends freely.", key: "WHEREAS", s2: "He is careful with money, ___ freely.", accepted: ["whereas his brother spends"], explanation: "whereas (contraste)." },
          { s1: "It was raining hard. We still went for a walk.", key: "SPITE", s2: "___ the heavy rain, we went for a walk.", accepted: ["In spite of"], explanation: "in spite of + sustantivo." },
        ],
      },
      p5: {
        title: "The postcode lottery",
        text: "In theory, we live in a society of equal opportunity, in which anyone, whatever their background, can rise as far as their talent and effort will take them. It is a noble ideal, and one we tell ourselves is largely true. The uncomfortable reality, revealed by a mountain of evidence, is rather different. In practice, the single most powerful predictor of how a child's life will turn out is not their intelligence, their character or their effort. It is something over which they have absolutely no control: the circumstances into which they happen to be born.\n\nConsider two children, born on the same day in the same country, but into very different families. The first is born into a comfortable, educated household, in a prosperous area with good schools and safe streets. The second is born into poverty, in a deprived neighbourhood where the schools are struggling and opportunity is scarce. From their very first day, these two children face wildly unequal prospects. Long before either has had the chance to demonstrate any talent or make any effort, the race between them has, to a large extent, already been decided.\n\nThis is not to say that the child born into poverty cannot succeed; some, against considerable odds, do. Nor is it to say that the child born into privilege is guaranteed success; some squander their advantages entirely. But such cases, precisely because they are remarkable, tend to obscure the general rule. On average, across whole populations, the accident of birth shapes destiny to a degree that should trouble anyone who believes in fairness. Social mobility, the ability to rise above the circumstances of one's birth, is far lower than the myth of equal opportunity would suggest, and in many places it is falling.\n\nWhy does this matter? Partly, of course, because it is simply unjust that a child's whole life should be determined by the lottery of birth. But it matters for practical reasons too. A society that fails to give all its children a genuine chance is not only unfair; it is wasteful, squandering the talents of millions who never get the opportunity to develop them. The child born in poverty who might have become a brilliant scientist, a great artist, or an inspiring leader, but who never gets the chance, represents a loss not only to themselves but to all of us. Equal opportunity, properly understood, is not merely a moral nicety. It is the foundation of a society that makes the most of the human potential it contains.",
        q: [
          mc("What do we tell ourselves about our society?", ["That it's unequal.", "That it offers largely equal opportunity.", "That it's failing.", "That birth determines everything."], 1, "'a society of equal opportunity… we tell ourselves is largely true'."),
          mc("What is the strongest predictor of a child's life outcome?", ["Intelligence.", "The circumstances they are born into.", "Effort.", "Character."], 1, "'the circumstances into which they happen to be born'."),
          mc("When is the 'race' between the two children largely decided?", ["At university.", "Before either has shown talent or made effort.", "In adulthood.", "Never."], 1, "'the race between them has… already been decided'."),
          mc("Why do exceptional cases obscure the general rule?", ["They're common.", "Because they are remarkable, they stand out.", "They're fake.", "They're irrelevant."], 1, "'precisely because they are remarkable, tend to obscure the general rule'."),
          mc("What practical problem does unequal opportunity cause?", ["Nothing.", "It wastes the talents of millions.", "It saves money.", "It helps the rich."], 1, "'squandering the talents of millions'."),
          mc("What is equal opportunity, 'properly understood'?", ["A moral nicety.", "The foundation of a society that maximises human potential.", "Impossible.", "Unimportant."], 1, "'the foundation of a society that makes the most of… human potential'."),
        ],
      },
      p6: {
        title: "The case for kindness",
        text: "We tend to think of kindness as a pleasant but minor virtue, nice to have but hardly essential. (1)___ In fact, a growing body of research suggests that kindness is far more powerful, and far more important, than we usually assume.\n\nThe benefits to the recipient of a kind act are obvious. (2)___ Less obvious, but well documented, are the benefits to the giver. People who behave kindly towards others report higher levels of happiness and lower levels of stress.\n\nStranger still, kindness benefits even those who merely witness it. (3)___ Studies show that seeing an act of kindness makes people significantly more likely to behave kindly themselves, creating a ripple effect that spreads far beyond the original act.\n\nThere is a deeper point here about the kind of society we want to build. (4)___ A community held together by kindness and mutual trust is not only more pleasant to live in; it is also, by every measure, more successful.\n\nNone of this means we should be kind purely out of self-interest, which would rather miss the point. (5)___ But it does mean that kindness, far from being a mere sentimental indulgence, is one of the most practical and powerful forces in human life. (6)___ In a world that often seems harsh and divided, that is a genuinely hopeful thought.",
        options: [
          "This dismissive view could hardly be more mistaken.",          // A -> gap 1
          "A person who is helped feels valued and supported.",           // B -> gap 2
          "Kindness, in other words, is genuinely contagious.",           // C -> gap 3
          "The social benefits are as real as the personal ones.",        // D -> gap 4
          "Genuine kindness is given freely, expecting nothing back.",     // E -> gap 5
          "It is a force we all have the power to unleash.",              // F -> gap 6
          "Kindness has been proven to have no effect whatsoever.",        // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa visión es errónea."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el ayudado se siente valorado."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la amabilidad es contagiosa."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los beneficios sociales son reales."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la amabilidad se da sin esperar nada."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: es una fuerza que podemos liberar."),
        ],
      },
      p7: {
        title: "Four people discuss inequality",
        text: "Read what four people say about wealth and fairness in society.\n\nA) NADIA: I grew up in genuine poverty, and I made it out through education. But I'm under no illusion that I did it alone. A brilliant free school, a scholarship, a teacher who believed in me — none of that was my doing. When people say the poor just need to 'work harder', I want to ask them who paid for the ladder they climbed.\n\nB) TOM: I'm a businessman, and I'll defend the free market to my last breath. Inequality, within reason, is the price of a dynamic economy — it rewards risk and effort. That said, I'm not blind. When inequality becomes as extreme as it now is, it stops rewarding effort and starts entrenching privilege. Even I can see that's bad for everyone, including business.\n\nC) PRIYA: What frustrates me is how we blame individuals for what are really structural problems. We celebrate the rare person who escapes poverty, and use them to argue that anyone could. But for every one who escapes, thousands with equal talent don't, because the odds are stacked against them. It's the system that needs fixing, not the people.\n\nD) SAM: I think we've become too obsessed with inequality as such. What matters isn't the gap between rich and poor, but whether the poor have enough — decent housing, healthcare, opportunity. I don't care if some people are billionaires, as long as no one is destitute. Focus on lifting the bottom, not resenting the top.",
        q: [
          mc("Who succeeded from poverty but credits the support they received?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm under no illusion that I did it alone'."),
          mc("Who defends inequality but admits it has become excessive?", ["A", "B", "C", "D"], 1, "Tom: 'When inequality becomes as extreme as it now is…'"),
          mc("Who argues the problem is structural, not individual?", ["A", "B", "C", "D"], 2, "Priya: 'It's the system that needs fixing, not the people'."),
          mc("Who cares about the poor having enough, not the gap itself?", ["A", "B", "C", "D"], 3, "Sam: 'whether the poor have enough'."),
          mc("Who challenges the 'work harder' argument?", ["A", "B", "C", "D"], 0, "Nadia: 'who paid for the ladder they climbed'."),
          mc("Who says extreme inequality entrenches privilege?", ["A", "B", "C", "D"], 1, "Tom: 'starts entrenching privilege'."),
          mc("Who criticises using rare success stories to judge everyone?", ["A", "B", "C", "D"], 2, "Priya: 'use them to argue that anyone could'."),
          mc("Who says we shouldn't resent billionaires if no one is destitute?", ["A", "B", "C", "D"], 3, "Sam: 'as long as no one is destitute'."),
          mc("Who defends the free market strongly?", ["A", "B", "C", "D"], 1, "Tom: 'I'll defend the free market to my last breath'."),
          mc("Who focuses on lifting the bottom rather than the gap?", ["A", "B", "C", "D"], 3, "Sam: 'Focus on lifting the bottom, not resenting the top'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'The government should do more to reduce inequality.'\nComenta estos dos aspectos y añade uno propio:\n1. fairness (la justicia)\n2. the economy (la economía)\n3. ................ (tu propia idea)\nUsa conectores del discurso; da tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'Is our society really fair?' — analiza el tema con argumentos.\n· INFORME sobre un problema social de tu comunidad (pobreza, falta de oportunidades…): descríbelo y propón soluciones.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: Despite all our efforts, the gap between rich and poor keeps growing. Two. Man: He came from a deprived background, yet he became a surgeon — quite remarkable. Three. Woman: Nobody makes it entirely alone; we all rely on others. Four. Man: The scheme aims to improve social mobility for disadvantaged kids. Five. Woman: Although the economy is growing, many people feel worse off. Six. Man: Generosity, it turns out, has little to do with how much you earn. Seven. Woman: A strong sense of community is what holds a neighbourhood together. Eight. Man: We should focus on lifting people out of poverty, not just on the gap itself.", [
      mc("1. What keeps growing despite efforts?", ["Wealth.", "The gap between rich and poor.", "The economy."], 1, "'the gap between rich and poor keeps growing'."),
      mc("2. What is remarkable about the man's story?", ["He was rich.", "He rose from a deprived background to become a surgeon.", "He failed."], 1, "'came from a deprived background, yet… a surgeon'."),
      mc("3. What does the woman say about success?", ["It's individual.", "Nobody makes it entirely alone.", "It's luck."], 1, "'Nobody makes it entirely alone'."),
      mc("4. What does the scheme aim to do?", ["Cut welfare.", "Improve social mobility for disadvantaged children.", "Raise taxes."], 1, "'improve social mobility for disadvantaged kids'."),
      mc("5. What is the contrast the woman notes?", ["Economy shrinking, people happy.", "Economy growing, but people feel worse off.", "Both improving."], 1, "'Although the economy is growing, many feel worse off'."),
      mc("6. What does generosity have little to do with?", ["Kindness.", "How much you earn.", "Family."], 1, "'little to do with how much you earn'."),
      mc("7. What holds a neighbourhood together?", ["Money.", "A strong sense of community.", "Rules."], 1, "'a strong sense of community'."),
      mc("8. What should we focus on, according to the man?", ["The gap itself.", "Lifting people out of poverty.", "The rich."], 1, "'lifting people out of poverty, not just on the gap'."),
    ]),

    ...speakingParts({ p1: "qué problemas sociales te preocupan más y qué se podría hacer", p2: "dos imágenes de la sociedad (un barrio rico y uno desfavorecido): compáralas y especula sobre la vida en cada uno", p3: "qué reduciría mejor la desigualdad (mejor educación, más ayudas sociales, subir impuestos a los ricos, crear empleo, igualdad de oportunidades): comentadlo y elegid lo más eficaz", p4: "la sociedad y la desigualdad: si nuestra sociedad es justa, si el gobierno debería intervenir más y qué mantiene unida a una comunidad" }),

    SUMMARY("Resumen del Día 36", [
      "Contraste: although/whereas + frase; despite/in spite of + sustantivo; however (entre frases).",
      "Adición: moreover/furthermore. Causa: because/as; because of/due to. Resultado: therefore/consequently.",
      "Vocabulario de sociedad. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 37", "Escribe un párrafo de opinión con 5 conectores distintos. Repasa las flashcards. Mañana: los cuantificadores."),
  ],
};

// ───────────────────────── DÍA 37 ─────────────────────────
const DAY37 = {
  title: "Día 37 — Los cuantificadores · Tendencias y estadísticas",
  description: "all/most/some/none/few/little/a great deal of/plenty of/hardly any + estructuras 'of'. Vocabulario de tendencias. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Cuantificar con precisión y usar las estructuras 'of the'.",
    summary: "Cuantificadores; tendencias; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'the most of people'.", "'few' vs 'a few'.", "'hardly no'."],
    reviewPrompts: ["¿'most people' o 'most of the people'?", "¿'few' vs 'a few'?"],
  },
  items: [
    TEXT("🔁 Repaso: conectores. Hoy los CUANTIFICADORES: expresar cantidad con precisión. Vocabulario: TENDENCIAS y ESTADÍSTICAS."),
    GRAMMAR("Los cuantificadores", `EN GENERAL (sin 'of', sin 'the'): most people, some students, few opportunities, many books, little time.
· Most people enjoy music. (no 'the most of people')
CON GRUPO CONCRETO → + OF THE / OF + pronombre: most of the students, some of my friends, none of them, all of us.
· Most of the students in my class passed. Some of them left early.
CONTABLES: many, a few (algunos), few (pocos, sentido negativo), several, a number of, the majority of.
INCONTABLES: much, a little (un poco), little (poco), a great deal of, a large amount of.
AMBOS: all, most, some, any, no/none, a lot of, plenty of, hardly any (casi ningún).
· few / little (negativo: casi nada) vs a few / a little (positivo: algo).
⚠️ ❌ the most of people → most people / most of the people. ❌ hardly no → hardly any.`),
    WARN("Errores típicos del hispanohablante", "· ❌ The most of people → ✅ Most people / Most of the people.\n· ❌ hardly no money → ✅ hardly any money.\n· 'few friends' (pocos) ≠ 'a few friends' (algunos).\n· 'much' en afirmativas suena raro → usa 'a lot of / a great deal of'."),
    grammarEx("Use of English — Cuantificadores", "Completa o elige.", [
      mc("Choose:", ["The most of people like music.", "Most people like music.", "Most of people like music."], 1, "most people (general)."),
      fb("___ ___ the students in my class passed. (la mayoría de un grupo)", ["Most of"], "most of the."),
      mc("Choose (negative sense):", ["He has few friends and is lonely.", "He has a few friends and is lonely.", "He has little friends."], 0, "few (negativo, contable)."),
      fb("I've got ___ ___ money — just enough for a coffee. (un poco)", ["a little"], "a little (positivo, incontable)."),
      fb("There's ___ ___ milk left; we need to buy some. (casi nada)", ["hardly any"], "hardly any."),
      mc("Choose:", ["None of them was ready.", "No of them was ready.", "None them was ready."], 0, "none of them."),
      fb("A great ___ of research has been done on this. (mucha, incontable)", ["deal"], "a great deal of."),
    ]),
    GRAMMAR("Vocabulario del día — Tendencias y estadísticas", "Léxico de tendencias (B2)."),
    deck("B2 S8D37 — Tendencias y estadísticas", [
      ["trend", "tendencia", "There's a growing trend towards remote work.", "sustantivo", "trend"],
      ["rise sharply", "subir bruscamente", "Prices rose sharply last year.", "colocación", "raɪz ˈʃɑːpli"],
      ["decline", "descenso / disminuir", "There's been a steady decline.", "sustantivo/verbo", "dɪˈklaɪn"],
      ["the majority", "la mayoría", "The majority support the plan.", "colocación", "ðə məˈdʒɒrəti"],
      ["a minority", "una minoría", "Only a minority disagreed.", "colocación", "ə maɪˈnɒrəti"],
      ["on average", "de media", "On average, people sleep seven hours.", "colocación", "ɒn ˈævərɪdʒ"],
      ["proportion", "proporción", "A large proportion voted yes.", "sustantivo", "prəˈpɔːʃn"],
      ["significant", "significativo/a / notable", "There was a significant increase.", "adjetivo", "sɪɡˈnɪfɪkənt"],
      ["dramatically", "drásticamente", "Sales fell dramatically.", "adverbio", "drəˈmætɪkli"],
      ["steadily", "de forma constante", "The population grew steadily.", "adverbio", "ˈstedɪli"],
    ]),
    vocabEx("Vocabulario — Tendencias y estadísticas", "Elige la opción correcta.", [
      mc("A general direction of change over time is a ___.", ["trend", "proportion", "average"], 0, "trend."),
      mc("More than half of a group is ___.", ["the majority", "a minority", "a proportion"], 0, "the majority."),
      mc("To increase suddenly and greatly is to ___.", ["rise sharply", "decline", "hold steady"], 0, "rise sharply."),
      mc("A slow and continuous decrease is a steady ___.", ["decline", "rise", "proportion"], 0, "decline."),
      mc("Large enough to be important or noticeable is ___.", ["significant", "average", "steady"], 0, "significant."),
      mc("Calculated by dividing a total by the number of items, we say 'on ___'.", ["average", "proportion", "trend"], 0, "average."),
    ]),

    ...uoe({
      p1: {
        title: "The lies of statistics",
        text: "Statistics are supposed to give us hard, objective facts, and yet they can be among the most (1)___ tools of persuasion ever devised. The problem is not that statistics lie — a true statistic cannot lie — but that they can be (2)___ selected, framed and presented to create a completely false impression. A politician might announce that unemployment has fallen, which is technically true, while (3)___ to mention that this is because thousands of people have given up looking for work altogether. A company might boast that (4)___ of its customers are satisfied, without revealing that only a tiny (5)___ of customers responded to the survey. An 'average' figure can hide enormous variation: a room containing nine paupers and one billionaire has, on (6)___, extremely wealthy occupants. None of this means we should distrust all statistics; used honestly, they are essential to understanding the world. But it does mean we should treat every statistic with intelligent (7)___, asking not only 'is this true?' but 'what is being left out?' A statistic, like any tool, can be used to reveal the truth — or to (8)___ it.",
        q: [
          mc("(1)", ["powerful", "strong", "effective", "forceful"], 0, "'the most powerful tools'."),
          mc("(2)", ["carefully", "cleverly", "deliberately", "artfully"], 0, "'carefully selected' (o cleverly)."),
          mc("(3)", ["failing", "neglecting", "omitting", "forgetting"], 0, "'while failing to mention'."),
          mc("(4)", ["most", "the most", "the majority", "many"], 0, "'most of its customers' → most."),
          mc("(5)", ["proportion", "amount", "part", "number"], 0, "'a tiny proportion of customers'."),
          mc("(6)", ["average", "the average", "balance", "whole"], 0, "'on average'."),
          mc("(7)", ["scepticism", "doubt", "suspicion", "caution"], 0, "'intelligent scepticism'."),
          mc("(8)", ["hide", "conceal", "obscure", "bury"], 0, "'or to hide it'."),
        ],
      },
      p2: {
        title: "The truth about happiness across nations",
        text: "Every year, researchers attempt to measure and (1)___ the happiness of nations, producing rankings that make headlines around the world. (2)___ of these surveys point to some surprising conclusions. It is (3)___ the richest countries that are the happiest, but rather those with the strongest social bonds and the greatest sense of trust. Money, it turns out, matters — but only up to a point. Once a country is wealthy enough to meet its citizens' basic needs, (4)___ increases in national income make surprisingly (5)___ difference to how happy people report themselves to be. What matters far more, the data suggests, is the quality of relationships, the level of trust in society, and a sense that (6)___ has a fair chance. This has important implications. If the goal of a society is the happiness of its members — and what (7)___ goal could there be? — then endlessly increasing wealth may be the (8)___ thing to focus on. Building trust, connection and fairness may matter far more.",
        q: [
          fb("(1)", ["compare"], "'measure and compare the happiness'."),
          fb("(2)", ["Most", "Many"], "'Most of these surveys point to'."),
          fb("(3)", ["not"], "'It is not the richest countries'."),
          fb("(4)", ["further"], "'further increases in national income'."),
          fb("(5)", ["little"], "'surprisingly little difference'."),
          fb("(6)", ["everyone"], "'that everyone has a fair chance'."),
          fb("(7)", ["better"], "'what better goal could there be?'"),
          fb("(8)", ["wrong"], "'may be the wrong thing to focus on'."),
        ],
      },
      p3: {
        title: "The vanishing middle",
        text: "For much of the twentieth century, the story of Western societies was one of a growing and (1)___ middle class. Ordinary workers could reasonably aspire to a secure job, a home of their own, and a (2)___ standard of living. In recent decades, however, this picture has begun to change in worrying ways. A (3)___ proportion of new jobs are either very highly paid or very poorly paid, with (4)___ in between. The secure, well-paid, middle-income jobs that once formed the backbone of society are steadily (5)___. This 'hollowing out' of the middle has serious (6)___. A large, secure middle class has long been seen as essential to a stable democracy, providing both economic stability and a sense of shared prosperity. As it shrinks, societies risk becoming increasingly (7)___ between a wealthy elite and a struggling majority, with all the tension and (8)___ that such a divide brings. Whether this trend can be reversed is one of the great questions of our time.",
        items: [
          { root: "prosper", accepted: ["prosperous"], hint: "adjetivo → prosperous." },
          { root: "decent", accepted: ["decent"], hint: "'a decent standard of living' (adjetivo)." },
          { root: "grow", accepted: ["growing"], hint: "'a growing proportion' → growing." },
          { root: "little", accepted: ["little"], hint: "'with little in between' (cuantificador)." },
          { root: "appear", accepted: ["disappearing"], hint: "'steadily disappearing' → disappearing." },
          { root: "imply", accepted: ["implications"], hint: "sustantivo plural → implications." },
          { root: "divide", accepted: ["divided"], hint: "'increasingly divided' (participio)." },
          { root: "stable", accepted: ["instability"], hint: "sustantivo → instability." },
        ],
      },
      p4: {
        title: "Transformaciones — cuantificadores",
        items: [
          { s1: "Almost none of the students failed.", key: "HARDLY", s2: "___ the students failed.", accepted: ["Hardly any of"], explanation: "hardly any of." },
          { s1: "The number of people who came was very small.", key: "FEW", s2: "___ people came.", accepted: ["Very few"], explanation: "few (negativo)." },
          { s1: "More than half of the members support the idea.", key: "MAJORITY", s2: "The ___ the members support the idea.", accepted: ["majority of"], explanation: "the majority of." },
          { s1: "There isn't much time left.", key: "LITTLE", s2: "There's ___ left.", accepted: ["little time"], explanation: "little (poco, incontable)." },
          { s1: "A very large amount of research has been done.", key: "DEAL", s2: "A great ___ research has been done.", accepted: ["deal of"], explanation: "a great deal of." },
          { s1: "Not one of them was willing to help.", key: "NONE", s2: "___ willing to help.", accepted: ["None of them was", "None of them were"], explanation: "none of them." },
        ],
      },
      p5: {
        title: "How a number can change the world",
        text: "In the 1850s, the wards of the military hospital where Florence Nightingale worked were places of horror. Soldiers who had survived the battlefield were dying in appalling numbers, not from their wounds, but from diseases contracted in the filthy, overcrowded hospital itself. Nightingale, who had trained as a nurse against the fierce opposition of her wealthy family, was determined to understand why — and, crucially, to prove it, in a way that those in power could not ignore.\n\nWhat made Nightingale so extraordinary was not merely her compassion, though she had that in abundance, but her mind. She was, it is often forgotten, a brilliant statistician, one of the first people to understand the power of data to reveal hidden truths. Meticulously, she collected the numbers: how many soldiers died, of what, and when. When she analysed them, the truth was undeniable. Far more men were being killed by the insanitary conditions of the hospitals than by the enemy. The vast majority of these deaths, her figures showed, were entirely preventable.\n\nCollecting the data, however, was only half the battle. Nightingale understood that a table of numbers, however damning, would not move the politicians and generals whose decisions could save lives. So she did something revolutionary: she turned her statistics into pictures. She invented new kinds of diagram — colourful, striking, immediately comprehensible — that showed, at a single glance, the scale of the needless death and the dramatic improvements that better hygiene could achieve. Her diagrams made the invisible visible, and the incomprehensible impossible to ignore.\n\nThe effect was profound. Confronted with evidence they could neither dispute nor evade, the authorities were forced to act. Sanitary reforms were introduced, first in the military hospitals and then far more widely, and the death rates fell dramatically. It is impossible to know exactly how many lives Florence Nightingale saved, but the number surely runs into the millions, across the generations that followed. She achieved this not with medicine, but with numbers — with the patient collection of data and the brilliant communication of what it revealed. Her legacy is a powerful reminder that statistics, so often used to deceive, can also be one of the most powerful forces for good that humanity possesses.",
        q: [
          mc("What were soldiers in the hospital mostly dying from?", ["Their battlefield wounds.", "Diseases from the filthy conditions.", "Starvation.", "Old age."], 1, "'from diseases contracted in the filthy, overcrowded hospital'."),
          mc("What was Nightingale, besides a compassionate nurse?", ["A general.", "A brilliant statistician.", "A politician.", "A doctor."], 1, "'a brilliant statistician'."),
          mc("What did her figures show about the deaths?", ["They were inevitable.", "The vast majority were preventable.", "They were rare.", "They were fake."], 1, "'entirely preventable'."),
          mc("Why did she turn her statistics into pictures?", ["For decoration.", "Because a table of numbers wouldn't move those in power.", "It was required.", "For fun."], 1, "'a table of numbers… would not move the politicians'."),
          mc("What did her diagrams achieve?", ["Nothing.", "They made the truth impossible to ignore.", "They confused people.", "They hid the truth."], 1, "'made the invisible visible, and the incomprehensible impossible to ignore'."),
          mc("What is Nightingale's legacy, according to the writer?", ["That numbers deceive.", "That statistics can be a powerful force for good.", "That nursing is useless.", "That data is dull."], 1, "'statistics… can also be one of the most powerful forces for good'."),
        ],
      },
      p6: {
        title: "The wisdom of crowds",
        text: "There is an old and surprising idea in the study of decision-making, known as 'the wisdom of crowds'. (1)___ It holds that, under the right conditions, the collective judgement of a large group of ordinary people can be more accurate than the judgement of any single expert.\n\nThe classic demonstration involves guessing the weight of an ox at a country fair. (2)___ When someone once averaged all the hundreds of individual guesses, the collective estimate turned out to be astonishingly close to the true weight — closer than any individual expert's guess.\n\nWhy should this be? (3)___ Each individual guess contains a mixture of knowledge and error, but when many guesses are averaged, the errors, being random, largely cancel each other out, while the knowledge accumulates.\n\nThe principle has powerful modern applications, from predicting elections to setting prices in markets. (4)___ But it is important to understand that the wisdom of crowds depends on certain conditions being met.\n\nCrucially, the individuals must think independently. (5)___ When people simply copy one another, or are swayed by a dominant voice, the crowd's wisdom collapses into mere herd behaviour, which can be spectacularly wrong. (6)___ A crowd, it seems, is wise only when its members dare to think for themselves.",
        options: [
          "It sounds, at first, like a contradiction.",                  // A -> gap 1
          "No single person knows the answer with any accuracy.",         // B -> gap 2
          "The mathematics behind it is elegant and simple.",            // C -> gap 3
          "In each case, aggregated individual judgements prove remarkably reliable.", // D -> gap 4
          "The moment they influence each other, the magic disappears.",  // E -> gap 5
          "That, in the end, is the paradox at its heart.",              // F -> gap 6
          "The crowd is always wiser under every possible condition.",    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: suena a contradicción."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nadie conoce la respuesta con precisión."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la matemática es elegante."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: los juicios agregados son fiables."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: al influirse, desaparece la magia."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa es la paradoja."),
        ],
      },
      p7: {
        title: "Four people talk about statistics and trends",
        text: "Read what four people say about data and numbers.\n\nA) NADIA: I'm a data scientist, and the thing I most want people to understand is that a statistic without context is meaningless, or worse. 'Crime is up twenty per cent' sounds terrifying — until you learn it went from five incidents to six. Always, always ask for the raw numbers behind the percentage.\n\nB) TOM: What worries me is how easily people are fooled by 'averages'. If Bill Gates walks into a bar, on average everyone in it is a millionaire. Averages hide the distribution, which is usually where the real story is. I never trust a headline that leads with an average and nothing else.\n\nC) PRIYA: I think we've swung too far towards distrusting all statistics. Yes, they can be manipulated, but the answer isn't to reject data and trust our gut instead — our gut is far more easily fooled. Good statistics, honestly used, are the best tool we have for seeing past our own biases.\n\nD) SAM: The trend that fascinates me is how our behaviour changes when we start measuring it. The moment a company starts tracking a number, people optimise for that number, often at the expense of what actually matters. What gets measured gets managed — but not always in the way you intended.",
        q: [
          mc("Who stresses that a statistic without context is meaningless?", ["A", "B", "C", "D"], 0, "Nadia: 'a statistic without context is meaningless'."),
          mc("Who warns about how averages can mislead?", ["A", "B", "C", "D"], 1, "Tom: 'Averages hide the distribution'."),
          mc("Who defends statistics against excessive distrust?", ["A", "B", "C", "D"], 2, "Priya: 'we've swung too far towards distrusting all statistics'."),
          mc("Who is interested in how measuring changes behaviour?", ["A", "B", "C", "D"], 3, "Sam: 'how our behaviour changes when we start measuring it'."),
          mc("Who gives the '5 to 6 incidents' example?", ["A", "B", "C", "D"], 0, "Nadia: 'from five incidents to six'."),
          mc("Who uses the 'Bill Gates in a bar' example?", ["A", "B", "C", "D"], 1, "Tom: 'If Bill Gates walks into a bar'."),
          mc("Who says our gut is more easily fooled than statistics?", ["A", "B", "C", "D"], 2, "Priya: 'our gut is far more easily fooled'."),
          mc("Who quotes 'what gets measured gets managed'?", ["A", "B", "C", "D"], 3, "Sam: 'What gets measured gets managed'."),
          mc("Who advises always asking for the raw numbers?", ["A", "B", "C", "D"], 0, "Nadia: 'ask for the raw numbers behind the percentage'."),
          mc("Who calls good statistics the best tool for seeing past bias?", ["A", "B", "C", "D"], 2, "Priya: 'the best tool we have for seeing past our own biases'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'People are too easily influenced by statistics they see in the media.'\nComenta estos dos aspectos y añade uno propio:\n1. news (las noticias)\n2. critical thinking (el pensamiento crítico)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· INFORME sobre una tendencia o encuesta en tu instituto o comunidad: presenta los datos y saca conclusiones.\n· ARTÍCULO: 'Can we trust statistics?' — analiza cuándo los datos ayudan y cuándo engañan.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un estadístico, Peter, dando una charla sobre cómo leer los números (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a statistician called Peter giving a talk about understanding numbers. Peter: My aim today is to help you become harder to fool. The first rule is that a statistic without context is worthless. If I tell you crime has risen by fifty per cent, you should immediately ask: from what number? Fifty per cent of a tiny number is still tiny. Second, beware of averages. An average can hide huge variation. The classic example is that if a billionaire walks into a room of poor people, the average wealth becomes enormous, but nothing real has changed. Third, always ask who produced the statistic and why. Numbers are often selected to support a case, not to reveal the truth. Fourth, learn to tell the difference between correlation and causation. Two things happening together does not mean one caused the other. And finally, my most important point: don't respond to all this by distrusting everything. Rejecting good data and trusting your instinct instead is even worse, because your instinct is easily fooled. The goal is not cynicism but healthy scepticism. Ask good questions, demand context, and you'll be able to see the world far more clearly than most people ever do.", [
      fb("A statistic without ___ is worthless.", ["context"], "'a statistic without context is worthless'."),
      fb("Fifty per cent of a ___ number is still tiny.", ["tiny"], "'Fifty per cent of a tiny number'."),
      fb("An average can hide huge ___.", ["variation"], "'hide huge variation'."),
      fb("Always ask who produced the statistic and ___.", ["why"], "'who produced the statistic and why'."),
      fb("Learn the difference between correlation and ___.", ["causation"], "'correlation and causation'."),
      fb("Don't respond by ___ everything.", ["distrusting"], "'distrusting everything'."),
      fb("Your ___ is easily fooled.", ["instinct"], "'your instinct is easily fooled'."),
      fb("The goal is not cynicism but healthy ___.", ["scepticism", "skepticism"], "'healthy scepticism'."),
    ]),

    ...speakingParts({ p1: "si te fías de las estadísticas que ves en las noticias y cómo distingues los datos fiables", p2: "dos formas de presentar información (un gráfico claro y un titular con un porcentaje llamativo): compáralas", p3: "qué habilidades ayudan a no dejarse engañar por los datos (pedir el contexto, comprobar la fuente, entender los promedios, pensamiento crítico): comentadlo y elegid lo más útil", p4: "los datos y la sociedad: si podemos fiarnos de las estadísticas, por qué engañan los promedios y cómo pensar de forma crítica sobre los números" }),

    SUMMARY("Resumen del Día 37", [
      "General: most people, few opportunities (sin 'of'). Grupo concreto: most of the people, none of them.",
      "few/little (negativo) vs a few/a little (positivo). hardly any (casi ningún). a great deal of (incontable).",
      "Vocabulario de tendencias. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 38", "Escribe 6 frases con distintos cuantificadores. Repasa las flashcards. Mañana: los artículos y su uso avanzado."),
  ],
};

// ───────────────────────── DÍA 38 ─────────────────────────
const DAY38 = {
  title: "Día 38 — Los artículos y los determinantes · La educación",
  description: "a/an, the, artículo cero (generalización, único, geográfico) y determinantes (both/either/neither, each/every, another/other). Vocabulario de educación. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Usar los artículos y determinantes con precisión.",
    summary: "Artículos y determinantes; la educación; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'the life is hard'.", "'both of the two'.", "'every students'."],
    reviewPrompts: ["¿'Life is hard' o 'The life is hard' en general?", "¿'each' vs 'every'?"],
  },
  items: [
    TEXT("🔁 Repaso: cuantificadores. Hoy los ARTÍCULOS (uso avanzado) y los DETERMINANTES. Vocabulario: la EDUCACIÓN."),
    GRAMMAR("Los artículos y los determinantes", `ARTÍCULOS:
· a/an: primera mención, uno cualquiera, profesión (She's a doctor).
· the: algo concreto/conocido, único (the sun, the internet), superlativos (the best), grupos (the rich), instrumentos (the piano), ríos/mares/cadenas (the Nile, the Alps).
· CERO (Ø): generalizaciones con plural/incontable (Life is hard. Ø Dogs are loyal. Ø Money matters), países/ciudades (Ø France), comidas (Ø breakfast), go to Ø bed/work/school.
DETERMINANTES:
· both (dos), either (uno u otro), neither (ninguno de los dos): both books, either option, neither of them.
· each (individual), every (todos, visión general): each student / every student (+ singular).
· another (uno más, singular), other (otros), others (pronombre): another cup, other people.
⚠️ ❌ The life is hard (general) → Life is hard. ❌ every students → every student. ❌ both of the two → both books.`),
    WARN("Errores típicos del hispanohablante", "· ❌ The life is hard → ✅ Life is hard (general, sin the).\n· ❌ I love the nature → ✅ I love nature.\n· ❌ every students → ✅ every student (singular).\n· ❌ neither of the two options are → ✅ neither option is."),
    grammarEx("Use of English — Artículos y determinantes", "Completa con a/an/the/Ø o el determinante.", [
      mc("Choose (general):", ["The life is full of surprises.", "Life is full of surprises.", "A life is full of surprises."], 1, "general → sin the."),
      fb("She's ___ engineer. (profesión)", ["an"], "an (sonido vocal)."),
      fb("He plays ___ guitar beautifully. (instrumento)", ["the"], "the guitar."),
      mc("Choose:", ["Every students passed.", "Every student passed.", "Every of the students passed."], 1, "every + singular."),
      fb("I've read ___ books, and I loved both. (los dos)", ["both"], "both (dos)."),
      mc("Choose:", ["Neither of the options is good.", "Neither of the options are good.", "Neither options is good."], 0, "neither + singular."),
      fb("Would you like ___ cup of coffee? (uno más)", ["another"], "another (uno más)."),
    ]),
    GRAMMAR("Vocabulario del día — La educación", "Léxico de educación (B2)."),
    deck("B2 S8D38 — La educación", [
      ["curriculum", "plan de estudios / currículo", "The curriculum needs updating.", "sustantivo", "kəˈrɪkjələm"],
      ["assessment", "evaluación", "Continuous assessment is fairer.", "sustantivo", "əˈsesmənt"],
      ["rote learning", "aprendizaje memorístico", "Rote learning has its limits.", "colocación", "rəʊt ˈlɜːnɪŋ"],
      ["critical thinking", "pensamiento crítico", "Schools should teach critical thinking.", "colocación", "ˌkrɪtɪkl ˈθɪŋkɪŋ"],
      ["academic", "académico/a", "She had a brilliant academic career.", "adjetivo", "ˌækəˈdemɪk"],
      ["vocational", "profesional / de formación laboral", "Vocational courses are undervalued.", "adjetivo", "vəʊˈkeɪʃənl"],
      ["literacy", "alfabetización / competencia lectora", "Digital literacy is now essential.", "sustantivo", "ˈlɪtərəsi"],
      ["drop out", "abandonar los estudios", "Too many students drop out.", "phrasal verb", "drɒp ˈaʊt"],
      ["tuition fees", "tasas de matrícula", "Tuition fees have risen sharply.", "colocación", "tjuˈɪʃn fiːz"],
      ["lifelong learning", "aprendizaje permanente", "Lifelong learning is the future.", "colocación", "ˌlaɪflɒŋ ˈlɜːnɪŋ"],
    ]),
    vocabEx("Vocabulario — La educación", "Elige la opción correcta.", [
      mc("The subjects taught in a course of study make up the ___.", ["curriculum", "assessment", "literacy"], 0, "curriculum."),
      mc("Learning by memorising and repeating is ___.", ["rote learning", "critical thinking", "lifelong learning"], 0, "rote learning."),
      mc("The ability to analyse and evaluate ideas is ___.", ["critical thinking", "rote learning", "literacy"], 0, "critical thinking."),
      mc("Training focused on a practical trade or job is ___.", ["vocational", "academic", "assessment"], 0, "vocational."),
      mc("To leave school or university before finishing is to ___.", ["drop out", "assess", "enrol"], 0, "drop out."),
      mc("The money you pay to study at university is ___.", ["tuition fees", "literacy", "curriculum"], 0, "tuition fees."),
    ]),

    ...uoe({
      p1: {
        title: "What is education for?",
        text: "It is a question we rarely stop to ask: what, exactly, is education (1)___? For much of history, the answer seemed obvious. Education existed to fill young minds with (2)___ — the facts, dates and formulae that an educated person was expected to know. This model, based largely on memorisation and (3)___ learning, served a world in which knowledge was scarce and hard to access. But that world has vanished. Today, the sum of human knowledge sits in every pocket, instantly searchable. In such a world, the ability to (4)___ facts matters far less than the ability to understand, question and use them. This is why many educators now argue that the central purpose of education must shift, from filling minds with information to developing (5)___ thinking. The most valuable thing a school can teach, in this view, is not (6)___ but judgement: the capacity to evaluate evidence, to reason clearly, and to tell the difference between what is true and what merely sounds true. Whether our schools, many of which still cling to older models, can make this shift is one of the most important questions facing education (7)___. The stakes could hardly be higher. In an age drowning in information but starved of wisdom, teaching young people (8)___ to think may matter more than teaching them what to think.",
        q: [
          mc("(1)", ["for", "about", "of", "to"], 0, "'what is education for?'"),
          mc("(2)", ["knowledge", "information", "facts", "data"], 0, "'fill young minds with knowledge'."),
          mc("(3)", ["rote", "root", "route", "rot"], 0, "'rote learning'."),
          mc("(4)", ["memorise", "remember", "recall", "learn"], 0, "'ability to memorise facts'."),
          mc("(5)", ["critical", "criticising", "critic", "crucial"], 0, "'critical thinking'."),
          mc("(6)", ["knowledge", "facts", "information", "data"], 0, "'not knowledge but judgement'."),
          mc("(7)", ["today", "now", "currently", "presently"], 0, "'facing education today'."),
          mc("(8)", ["how", "what", "why", "when"], 0, "'teaching… how to think'."),
        ],
      },
      p2: {
        title: "The trouble with exams",
        text: "Exams have dominated education for so long that we rarely question whether they are (1)___ good way of measuring learning. Yet there is a strong case that they measure the (2)___ things. A traditional exam rewards, above all, the ability to memorise information and reproduce it (3)___ pressure in a limited time. These are genuine skills, but they bear (4)___ resemblance to how knowledge is actually used in the real world, where we have time to think, access to information, and the freedom to collaborate. Worse, the intense focus on exams can actively (5)___ real learning. Students, quite rationally, learn to pass the exam rather than to understand the subject, cramming facts that are forgotten the moment the exam is over. (6)___ this does not mean we should abolish all assessment; some way of measuring progress is clearly necessary. But it does suggest we should think much harder about (7)___ we are measuring, and why. An assessment that rewarded genuine understanding, critical thinking and the ability to apply knowledge might look very different from (8)___ we have now — and it might produce a very different, and better, kind of education.",
        q: [
          fb("(1)", ["a"], "'a good way'."),
          fb("(2)", ["wrong"], "'measure the wrong things'."),
          fb("(3)", ["under"], "'under pressure'."),
          fb("(4)", ["little", "no"], "'bear little/no resemblance'."),
          fb("(5)", ["harm", "damage", "prevent"], "'actively harm real learning'."),
          fb("(6)", ["Now", "Of course"], "'Now, this does not mean'."),
          fb("(7)", ["what"], "'think harder about what we are measuring'."),
          fb("(8)", ["what"], "'different from what we have now'."),
        ],
      },
      p3: {
        title: "The value of not knowing",
        text: "One of the most (1)___ things a good education can teach is the value of admitting what you do not know. This may seem paradoxical — surely the whole point of education is to acquire (2)___? But real understanding begins with the honest (3)___ of the limits of one's own knowledge. The person who believes they already know everything is (4)___ of learning anything new. It is only when we recognise our (5)___ that we become genuinely curious, and curiosity is the engine of all learning. Unfortunately, our education systems often send the opposite message. By rewarding confident, correct answers and punishing mistakes, they can teach young people that not knowing is (6)___, to be hidden rather than explored. This is a profound error. The greatest scientists and thinkers have always been (7)___ by their questions, not their certainties. Perhaps the most valuable lesson any school could teach, then, is that saying 'I don't know' is not a confession of failure, but the first, (8)___ step towards genuine wisdom.",
        items: [
          { root: "value", accepted: ["valuable"], hint: "adjetivo → valuable." },
          { root: "know", accepted: ["knowledge"], hint: "sustantivo → knowledge." },
          { root: "recognise", accepted: ["recognition"], hint: "sustantivo → recognition." },
          { root: "able", accepted: ["incapable"], hint: "'is incapable of learning' → incapable." },
          { root: "ignorant", accepted: ["ignorance"], hint: "sustantivo → ignorance." },
          { root: "shame", accepted: ["shameful"], hint: "'not knowing is shameful' → shameful." },
          { root: "drive", accepted: ["driven"], hint: "'driven by their questions' (participio)." },
          { root: "essence", accepted: ["essential"], hint: "'the essential step' → essential." },
        ],
      },
      p4: {
        title: "Transformaciones — artículos y determinantes",
        items: [
          { s1: "In general, dogs are very loyal animals.", key: "ARE", s2: "___ very loyal animals.", accepted: ["Dogs are"], explanation: "generalización → sin artículo." },
          { s1: "There are two options, and I like neither.", key: "NEITHER", s2: "I like ___ option.", accepted: ["neither"], explanation: "neither + singular." },
          { s1: "All the students, without exception, passed.", key: "EVERY", s2: "___ passed.", accepted: ["Every student"], explanation: "every + singular." },
          { s1: "Can I have one more slice of cake?", key: "ANOTHER", s2: "Can I have ___ of cake?", accepted: ["another slice"], explanation: "another (uno más)." },
          { s1: "She's employed as a teacher.", key: "TEACHER", s2: "She works as ___ .", accepted: ["a teacher"], explanation: "a + profesión." },
          { s1: "I don't think money is the most important thing.", key: "IS", s2: "I don't think ___ the most important thing.", accepted: ["money is"], explanation: "money (incontable, general) → sin the." },
        ],
      },
      p5: {
        title: "The school that abolished exams",
        text: "When a struggling secondary school in a deprived area announced that it was abolishing traditional exams for its younger students, the reaction was one of outrage. Critics accused the school of 'dumbing down', of abandoning standards, of failing to prepare children for the harsh, competitive world that awaited them. The head teacher, a quiet, determined woman named Elena Marsh, weathered the storm with remarkable calm. She was not, she insisted, lowering standards. She was, on the contrary, trying to raise them, by changing what the school measured and rewarded.\n\nThe old system, Marsh argued, was producing students who could pass exams but who understood very little. They memorised facts for the test and forgot them the moment it was over. Worse, the relentless pressure of examinations was crushing their natural curiosity, teaching them to fear failure and to see learning as a joyless grind. Every year, a significant number of her students, convinced they were simply 'not clever', dropped out altogether. The exams, Marsh had come to believe, were not measuring her students' abilities so much as destroying them.\n\nIn place of exams, the school introduced a radically different approach. Instead of memorising for tests, students worked on extended projects, tackling real problems that required them to research, to think, to collaborate and to create. Assessment was continuous and detailed, focused not on a single high-stakes moment but on genuine understanding and progress over time. Crucially, mistakes were reframed not as failures but as an essential part of learning. A student who got something wrong was not marked down but helped to understand why, and to try again.\n\nThe results, over several years, silenced most of the critics. Not only did the students' genuine understanding of their subjects improve dramatically, but so, eventually, did their performance in the external exams they still had to sit at the end of their schooling. Freed from the fear of failure and reconnected with their own curiosity, they had, paradoxically, become better learners, and therefore better exam candidates too. The drop-out rate collapsed. Most striking of all, according to Marsh, was the change in the students themselves. 'They arrived believing they were stupid,' she said. 'They left believing they could learn anything. That belief, not any exam result, is the most important thing a school can ever give a child.'",
        q: [
          mc("How was the school's decision to abolish exams received?", ["With praise.", "With outrage.", "With indifference.", "With confusion."], 1, "'The reaction was one of outrage'."),
          mc("What did Elena Marsh claim she was really doing?", ["Lowering standards.", "Trying to raise standards.", "Saving money.", "Reducing work."], 1, "'trying to raise them'."),
          mc("What was the old exam system producing, in Marsh's view?", ["Genuine understanding.", "Students who could pass but understood little.", "Confident learners.", "Happy children."], 1, "'students who could pass exams but who understood very little'."),
          mc("What replaced the exams?", ["Nothing.", "Extended projects and continuous assessment.", "More tests.", "Homework only."], 1, "'students worked on extended projects… Assessment was continuous'."),
          mc("How were mistakes treated under the new system?", ["Punished.", "Reframed as an essential part of learning.", "Ignored.", "Hidden."], 1, "'mistakes were reframed not as failures but as an essential part of learning'."),
          mc("What did Marsh say was the most important thing a school can give?", ["Exam results.", "The belief that you can learn anything.", "Discipline.", "Facts."], 1, "'That belief… is the most important thing a school can ever give a child'."),
        ],
      },
      p6: {
        title: "The future of learning",
        text: "For over a century, the basic model of formal education has remained remarkably unchanged: groups of children of the same age, sitting in rows, being taught the same thing at the same time. (1)___ It was a model designed for the industrial age, and it served that age reasonably well.\n\nBut the world it was designed for has vanished, and the model is beginning to look increasingly out of date. (2)___ New technologies now make possible forms of learning that would have been unimaginable to previous generations.\n\nConsider the potential of personalised learning. (3)___ Software can now adapt in real time to each individual student, moving faster through what they find easy and slower through what they find hard, in a way no single teacher with thirty pupils ever could.\n\nYet technology alone is not the answer, and here lies a crucial point. (4)___ However sophisticated the software becomes, the evidence is overwhelming that the single most important factor in a child's education is a good teacher who genuinely cares.\n\nThe future of learning, then, is unlikely to be either purely traditional or purely technological. (5)___ It will most probably be a blend: using technology to handle what technology does best, while freeing human teachers to do what only humans can — to inspire, to encourage, and to believe in a child. (6)___ Get that balance right, and we may be on the threshold of the greatest revolution in learning since the invention of the school itself.",
        options: [
          "The system has proved extraordinarily durable.",              // A -> gap 1
          "The pace of change is now beginning to accelerate.",          // B -> gap 2
          "The possibilities it opens up are genuinely exciting.",        // C -> gap 3
          "There is one thing no machine will ever be able to replace.",  // D -> gap 4
          "The most promising path lies somewhere in between.",           // E -> gap 5
          "The prize, if we succeed, would be immense.",                  // F -> gap 6
          "Nothing about education has ever changed at all.",             // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el sistema ha sido muy duradero."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el cambio se acelera."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las posibilidades son emocionantes."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: hay algo que ninguna máquina reemplaza."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el camino está en el medio."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el premio sería inmenso."),
        ],
      },
      p7: {
        title: "Four people share their views on education",
        text: "Read what four people say about school and learning.\n\nA) NADIA: The best thing my school ever did was to teach me how to learn, not just what to learn. Facts I've forgotten; the ability to teach myself anything, I've kept for life. In a world where knowledge changes so fast, that skill — learning how to learn — is the only one that never goes out of date.\n\nB) TOM: I'm a passionate believer in vocational education. For decades we've told every child that university is the only path to success, and quietly looked down on the trades. It's snobbery, and it's wrong. A skilled electrician or plumber contributes as much to society, and often earns more, than many graduates. We need to value all kinds of learning equally.\n\nC) PRIYA: What worries me most is how exams crush curiosity. My own children arrived at school full of questions, fascinated by everything. A few years of relentless testing later, that fire had been all but extinguished. They'd learned to see learning as a chore, a means to a grade. That, to me, is education's greatest failure.\n\nD) SAM: I left school at sixteen with nothing, convinced I was stupid. It took me twenty years to discover, through evening classes, that I'd simply been taught in a way that didn't suit me. Now I have a degree and a career I love. My message to anyone who 'failed' at school is: it was probably the system that failed you, not the other way round.",
        q: [
          mc("Who most values learning how to learn?", ["A", "B", "C", "D"], 0, "Nadia: 'teach me how to learn'."),
          mc("Who champions vocational education and the trades?", ["A", "B", "C", "D"], 1, "Tom: 'a passionate believer in vocational education'."),
          mc("Who worries that exams destroy children's curiosity?", ["A", "B", "C", "D"], 2, "Priya: 'how exams crush curiosity'."),
          mc("Who succeeded through education much later in life?", ["A", "B", "C", "D"], 3, "Sam: 'through evening classes… Now I have a degree'."),
          mc("Who calls the neglect of the trades snobbery?", ["A", "B", "C", "D"], 1, "Tom: 'It's snobbery, and it's wrong'."),
          mc("Who says the ability to learn never goes out of date?", ["A", "B", "C", "D"], 0, "Nadia: 'the only one that never goes out of date'."),
          mc("Whose children lost their love of learning at school?", ["A", "B", "C", "D"], 2, "Priya: 'that fire had been all but extinguished'."),
          mc("Who believes the system, not the student, often fails?", ["A", "B", "C", "D"], 3, "Sam: 'it was probably the system that failed you'."),
          mc("Who was taught in a way that didn't suit them?", ["A", "B", "C", "D"], 3, "Sam: 'taught in a way that didn't suit me'."),
          mc("Who thinks all kinds of learning should be valued equally?", ["A", "B", "C", "D"], 1, "Tom: 'value all kinds of learning equally'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Schools should focus on teaching students how to think, not what to think.'\nComenta estos dos aspectos y añade uno propio:\n1. exams (los exámenes)\n2. the modern world (el mundo actual)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How could schools be improved?' — propón cambios y justifícalos.\n· CARTA al director/a de tu antiguo instituto proponiendo una mejora en la enseñanza: argumenta tu propuesta.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de su experiencia educativa (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué valoran más. Sobra una opción.\nA) a teacher who inspired them\nB) learning practical, vocational skills\nC) being taught to think critically\nD) the friends they made\nE) discovering learning later in life\nF) the freedom to study what interested them", "This is Part Three. You will hear five people talking about their education. Speaker One: What made the difference for me was one man — my history teacher. He didn't just teach the subject; he made me believe I could be someone. I owe him everything. Speaker Two: I hated academic school, all that sitting and memorising. It was only when I switched to a vocational course, learning a trade with my hands, that I finally thrived. I wish someone had told me sooner that there was another way. Speaker Three: The most valuable thing I was ever taught was to question everything — to ask for evidence, to spot a weak argument, to think for myself. Those skills have served me every single day of my life. Speaker Four: Honestly, I remember almost nothing of what I was taught. But the friendships I made at school have lasted forty years. That's what school was really for, looking back — learning to get on with other people. Speaker Five: I left school with no qualifications and assumed I was stupid. It was only in my forties, at evening classes, that I discovered a real love of learning. It's never too late — that's what I'd tell anyone.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 0, "A: 'one man — my history teacher… made me believe'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 1, "B: 'a vocational course, learning a trade'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'to question everything… think for myself'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 3, "D: 'the friendships I made… have lasted forty years'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 4, "E: 'in my forties… discovered a real love of learning'."),
    ]),

    ...speakingParts({ p1: "cómo fue tu experiencia en la escuela, qué se te dio bien y qué cambiarías", p2: "dos formas de enseñar (una clase memorística tradicional y una clase con proyectos y debate): compáralas y di cuál es mejor", p3: "qué debería enseñar más la escuela (pensamiento crítico, habilidades prácticas, idiomas, educación emocional, cómo aprender): comentadlo y elegid lo más importante", p4: "la educación: si los exámenes miden lo importante, si se valora poco la formación profesional y qué debería ser el objetivo de la escuela" }),

    SUMMARY("Resumen del Día 38", [
      "a/an (uno cualquiera, profesión), the (concreto/único/superlativo/grupos), cero (generalizaciones, países, comidas).",
      "both/either/neither (dos), each/every (+ singular), another (uno más) / other.",
      "Vocabulario de educación. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 39", "Escribe 6 frases con artículos y determinantes. Repasa las flashcards. Mañana: la comparación avanzada y la intensificación."),
  ],
};

// ───────────────────────── DÍA 39 ─────────────────────────
const DAY39 = {
  title: "Día 39 — Comparación avanzada e intensificación · Los medios y la cultura",
  description: "Comparativos/superlativos avanzados, the...the..., intensificadores (far, considerably, nowhere near). Vocabulario de medios. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Comparar y matizar con precisión e intensificar adecuadamente.",
    summary: "Comparación e intensificación; medios/cultura; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'more better'.", "'as more as'.", "'very' con comparativos."],
    reviewPrompts: ["¿Cómo intensificas un comparativo?", "¿'the more…the more…'?"],
  },
  items: [
    TEXT("🔁 Repaso: artículos. Hoy la COMPARACIÓN AVANZADA y la INTENSIFICACIÓN. Vocabulario: los MEDIOS y la CULTURA."),
    GRAMMAR("Comparación avanzada e intensificación", `COMPARATIVOS: -er/more…than; irregulares (better, worse, further, less).
INTENSIFICAR comparativos: much / far / a lot / considerably / significantly / slightly / a little / a bit + comparativo. NOWHERE NEAR / NOT NEARLY as … as (muy lejos de).
· It's far cheaper. It's considerably better. It's nowhere near as good as the original.
IGUALDAD: as + adjetivo + as; not as/so … as; the same … as; twice/three times as … as.
SUPERLATIVOS: the …est/most; by far the best; one of the most + adjetivo + sustantivo plural.
'THE …ER, THE …ER': The more you practise, the better you get. The harder it is, the more rewarding.
INTENSIFICADORES de adjetivos: absolutely/utterly (extremos: amazing), really/quite/fairly/pretty (normales). ⚠️ 'very' NO va con comparativos (❌ very better).`),
    WARN("Errores típicos del hispanohablante", "· ❌ more better → ✅ much better / far better.\n· ❌ very better → ✅ much better.\n· ❌ as more difficult as → ✅ as difficult as.\n· ❌ the most cheap → ✅ the cheapest."),
    grammarEx("Use of English — Comparación e intensificación", "Completa o elige.", [
      fb("This version is ___ ___ (far/good) than the last one.", ["far better"], "far + comparativo irregular."),
      fb("The remake is ___ ___ as good as the original. (muy lejos de)", ["nowhere near"], "nowhere near as… as."),
      mc("Choose:", ["It's more cheaper.", "It's much cheaper.", "It's very cheaper."], 1, "much + comparativo."),
      fb("___ ___ you practise, ___ ___ you get. (cuanto más… mejor)", ["The more", "the better"], "the more… the better."),
      fb("This film is one of the ___ (impressive) I've ever seen.", ["most impressive"], "one of the most + adj."),
      mc("Choose:", ["The scenery was very amazing.", "The scenery was absolutely amazing.", "The scenery was much amazing."], 1, "extremo → absolutely."),
      fb("Housing here costs twice ___ ___ ___ in my town.", ["as much as"], "twice as much as."),
    ]),
    GRAMMAR("Vocabulario del día — Los medios y la cultura", "Léxico de medios y cultura (B2)."),
    deck("B2 S8D39 — Medios y cultura", [
      ["mainstream", "convencional / mayoritario", "It's now a mainstream idea.", "adjetivo", "ˈmeɪnstriːm"],
      ["influencer", "influencer / persona influyente", "She's a popular influencer.", "sustantivo", "ˈɪnfluənsə"],
      ["viral", "viral", "The video went viral overnight.", "adjetivo", "ˈvaɪrəl"],
      ["censorship", "censura", "Censorship threatens free speech.", "sustantivo", "ˈsensəʃɪp"],
      ["portrayal", "representación / retrato", "The film's portrayal of women was praised.", "sustantivo", "pɔːˈtreɪəl"],
      ["cultural heritage", "patrimonio cultural", "We must protect our cultural heritage.", "colocación", "ˈkʌltʃərəl ˈherɪtɪdʒ"],
      ["stereotype", "estereotipo", "The show relies on lazy stereotypes.", "sustantivo", "ˈsteriətaɪp"],
      ["highbrow", "intelectual / culto (elitista)", "It's considered highbrow entertainment.", "adjetivo", "ˈhaɪbraʊ"],
      ["accessible", "accesible / al alcance", "Art should be accessible to everyone.", "adjetivo", "əkˈsesəbl"],
      ["controversial", "polémico/a", "It's a highly controversial topic.", "adjetivo", "ˌkɒntrəˈvɜːʃl"],
    ]),
    vocabEx("Vocabulario — Los medios y la cultura", "Elige la opción correcta.", [
      mc("Ideas or media that are conventional and widely accepted are ___.", ["mainstream", "highbrow", "viral"], 0, "mainstream."),
      mc("Content that spreads very rapidly online has gone ___.", ["viral", "mainstream", "controversial"], 0, "viral."),
      mc("Suppressing information or expression is ___.", ["censorship", "portrayal", "heritage"], 0, "censorship."),
      mc("An oversimplified fixed image of a group is a ___.", ["stereotype", "portrayal", "influencer"], 0, "stereotype."),
      mc("Culture that is intellectual and seen as elite is ___.", ["highbrow", "mainstream", "accessible"], 0, "highbrow."),
      mc("Something that many people find easy to understand or reach is ___.", ["accessible", "controversial", "highbrow"], 0, "accessible."),
    ]),

    ...uoe({
      p1: {
        title: "The changing face of celebrity",
        text: "The nature of fame has changed almost beyond (1)___ in the last two decades. Once, becoming famous required exceptional talent, or at least the backing of powerful media organisations. Today, thanks to social media, it is (2)___ easier for anyone to build a huge following. A teenager filming videos in their bedroom can now reach an audience far (3)___ than the biggest television star of a generation ago. This democratisation of fame has genuine (4)___: it has given a voice to people the mainstream media once ignored. But it has a darker side too. The new fame is often based (5)___ nothing more than the ability to attract attention, and the incentives it creates can be deeply unhealthy. Young 'influencers' learn that the most extreme, the most (6)___, the most emotionally provocative content is rewarded with the most attention. The result can be a race to the bottom, in which nuance and honesty are (7)___ casualties. Whether this new landscape is, on (8)___, a good or a bad thing is one of the defining cultural questions of our age.",
        q: [
          mc("(1)", ["recognition", "belief", "measure", "doubt"], 0, "'beyond recognition'."),
          mc("(2)", ["far", "very", "more", "much"], 0, "'far easier' (o much)."),
          mc("(3)", ["larger", "bigger", "wider", "greater"], 0, "'far larger than'."),
          mc("(4)", ["benefits", "advantages", "merits", "goods"], 0, "'genuine benefits'."),
          mc("(5)", ["on", "in", "at", "upon"], 0, "'based on nothing'."),
          mc("(6)", ["controversial", "controversy", "controversially", "controversies"], 0, "'the most controversial'."),
          mc("(7)", ["the", "a", "one", "first"], 0, "'the first casualties'."),
          mc("(8)", ["balance", "average", "whole", "the whole"], 0, "'on balance'."),
        ],
      },
      p2: {
        title: "In defence of difficult art",
        text: "We live in an age that prizes accessibility above almost all (1)___. Art, music, literature — all are increasingly judged by how easily and immediately they can be enjoyed by the largest possible (2)___. There is much to be said for this. The old idea that 'serious' culture should be reserved for a highbrow elite was often little (3)___ than snobbery, and making art accessible to everyone is a genuinely democratic goal. (4)___, something valuable may be lost when we reward only the immediately enjoyable. Some of the greatest works of art are difficult; they do not give up their rewards easily, but demand effort, patience and repeated (5)___. A novel that can be understood at a single, effortless reading may be less rewarding, in the long run, (6)___ one that reveals new depths each time we return to it. The danger of an exclusive focus on accessibility is that we may lose the capacity, and the (7)___, for this deeper kind of engagement. Perhaps the healthiest culture is one with room for (8)___: for the immediately enjoyable and the challengingly difficult, for the accessible and the demanding alike.",
        q: [
          fb("(1)", ["else"], "'above almost all else'."),
          fb("(2)", ["audience"], "'the largest possible audience'."),
          fb("(3)", ["more"], "'little more than snobbery'."),
          fb("(4)", ["However", "Nevertheless", "Yet"], "'However, something valuable may be lost'."),
          fb("(5)", ["engagement", "attention", "effort"], "'repeated engagement/attention'."),
          fb("(6)", ["than"], "'less rewarding… than one that…'"),
          fb("(7)", ["patience", "willingness", "appetite"], "'the capacity, and the patience/appetite'."),
          fb("(8)", ["both"], "'room for both'."),
        ],
      },
      p3: {
        title: "The stories we tell",
        text: "The stories a culture tells about itself — in its films, its books, its television — are far more (1)___ than mere entertainment. They shape, subtly but profoundly, how we see the world and one another. For this reason, the question of (2)___ is represented in our stories, and how, is one of genuine importance. For much of the history of film and television, the (3)___ of many groups was either absent altogether or reduced to crude, damaging (4)___. Whole categories of people rarely saw themselves reflected as complex, fully human individuals. This matters, because we learn who we can be, in part, from the stories we (5)___ around us. A child who never sees anyone like themselves portrayed as a hero, a leader or a genius may find it (6)___ to imagine becoming one. In recent years, there has been significant progress towards more (7)___ and truthful representation, though the debate remains fiercely (8)___. What is beyond doubt is that the stories we choose to tell, and the people we choose to make heroes, are never merely trivial. They help to shape the very possibilities we can imagine for ourselves.",
        items: [
          { root: "power", accepted: ["powerful"], hint: "adjetivo → powerful." },
          { root: "who", accepted: ["who"], hint: "'the question of who is represented' (pronombre)." },
          { root: "portray", accepted: ["portrayal"], hint: "sustantivo → portrayal." },
          { root: "stereotype", accepted: ["stereotypes"], hint: "sustantivo plural → stereotypes." },
          { root: "see", accepted: ["see"], hint: "'the stories we see around us' (verbo)." },
          { root: "hard", accepted: ["harder"], hint: "'find it harder to imagine' → harder." },
          { root: "diversity", accepted: ["diverse"], hint: "'more diverse representation' → diverse." },
          { root: "controversy", accepted: ["controversial"], hint: "'fiercely controversial' → controversial." },
        ],
      },
      p4: {
        title: "Transformaciones — comparación",
        items: [
          { s1: "This film isn't as good as the book.", key: "NOWHERE", s2: "This film is ___ as good as the book.", accepted: ["nowhere near"], explanation: "nowhere near as… as." },
          { s1: "The new phone is a great deal more expensive.", key: "FAR", s2: "The new phone is ___ expensive.", accepted: ["far more"], explanation: "far more." },
          { s1: "As you get older, you become wiser.", key: "OLDER", s2: "The ___ , the wiser you become.", accepted: ["older you get"], explanation: "the older… the wiser." },
          { s1: "It's one of the best books I've ever read.", key: "MOST", s2: "It's one of the ___ books I've ever read.", accepted: ["most enjoyable", "best"], explanation: "one of the most…" },
          { s1: "Rent here costs double what it does at home.", key: "TWICE", s2: "Rent here costs ___ at home.", accepted: ["twice as much as"], explanation: "twice as much as." },
          { s1: "The scenery was extremely beautiful.", key: "ABSOLUTELY", s2: "The scenery was ___ .", accepted: ["absolutely beautiful", "absolutely stunning"], explanation: "absolutely + extremo." },
        ],
      },
      p5: {
        title: "The critic who changed his mind",
        text: "For thirty years, Charles Bennett had been the most feared theatre critic in the country. His reviews, brilliant, savage and often devastatingly funny, could close a play overnight or destroy a young actor's confidence with a single cruel line. He was proud of his ruthlessness, which he regarded as a kind of integrity: he told the truth, he believed, however much it hurt, and he had nothing but contempt for critics who pulled their punches. Audiences loved his reviews; the theatre world lived in terror of them.\n\nEverything changed the night his own daughter made her stage debut. Bennett sat in the audience, and for the first time in his long career, he watched a performance not as a critic but as a father. His daughter was, he could see with painful clarity, not very good. Her voice was weak, her movements awkward, her nerves obvious. The professional critic in him was already, automatically, composing the witty, wounding sentences he would have written about any other performer. And then he saw her face as she took her bow — the mixture of terror and hope, the desperate desire to be good, the raw human vulnerability of someone who had dared to stand up in front of strangers and try. And something in him broke.\n\nHe understood, for the first time, what his reviews actually did. Behind every performance he had ever mocked was a real human being who had worked, and hoped, and dared, and made themselves vulnerable in a way he, safe in his critic's seat, never had. His famous 'honesty', he suddenly saw, had often been mere cruelty, a way of showing off his own cleverness at the expense of people far braver than himself. The truth could be told, he realised, with kindness as well as with a knife.\n\nBennett did not stop being a critic, nor did he start pretending that bad work was good. But his reviews, from that night on, were different. He remained capable of severity when it was deserved, but there was a new humanity in his writing, an awareness of the person behind the performance. Some of his old admirers complained that he had 'gone soft'. Bennett didn't care. 'I spent thirty years being clever,' he said, late in his life. 'It took my daughter to teach me that being kind is far harder, and worth infinitely more. I only wish I had learned it sooner. I think of all the young people I hurt, and I am ashamed.'",
        q: [
          mc("How were Charles Bennett's reviews regarded?", ["Gentle.", "Brilliant, savage and feared.", "Boring.", "Kind."], 1, "'brilliant, savage… lived in terror of them'."),
          mc("How did he view his own ruthlessness?", ["As cruelty.", "As a kind of integrity.", "As a weakness.", "As a job."], 1, "'a kind of integrity'."),
          mc("What changed everything for him?", ["A bad review.", "Watching his daughter's stage debut.", "Retirement.", "An award."], 1, "'the night his own daughter made her stage debut'."),
          mc("What did he see behind every performance he had mocked?", ["Talent.", "A real, vulnerable human being.", "Money.", "A rival."], 1, "'a real human being who had worked, and hoped, and dared'."),
          mc("What did he realise his 'honesty' had often been?", ["True kindness.", "Mere cruelty and showing off.", "Necessary.", "Fair."], 1, "'often been mere cruelty, a way of showing off'."),
          mc("What did his daughter teach him, according to him?", ["To be clever.", "That being kind is harder and worth more.", "To stop reviewing.", "To lie."], 1, "'being kind is far harder, and worth infinitely more'."),
        ],
      },
      p6: {
        title: "Who decides what is 'good' art?",
        text: "It is one of the oldest questions in aesthetics, and one we rarely stop to examine: who decides what counts as 'good' art? (1)___ We tend to assume that quality is an objective property, that some works are simply, factually better than others.\n\nThe reality is more complicated. (2)___ Throughout history, works now regarded as timeless masterpieces were dismissed or ignored in their own time, while much that was wildly celebrated has been utterly forgotten.\n\nThis suggests that our judgements of quality are far less fixed than we imagine. (3)___ What one age considers vulgar, another may consider profound; what one culture reveres, another may find baffling.\n\nDoes this mean, then, that all art is equally good, and that quality is purely a matter of opinion? (4)___ Most people's instincts rebel against so extreme a conclusion, and rightly so.\n\nPerhaps the truth lies somewhere in between. (5)___ Great art does seem to possess qualities — depth, craft, the power to move us — that endure across time and culture, even as the specific works we most admire shift and change. (6)___ The question of what makes art great may never be finally settled, but it is precisely this endless, unresolvable debate that keeps our culture alive.",
        options: [
          "The question feels, at first, almost too obvious to ask.",     // A -> gap 1
          "The verdict of history is remarkably unstable.",              // B -> gap 2
          "They shift dramatically across time and place.",              // C -> gap 3
          "That conclusion, however, seems clearly too extreme.",         // D -> gap 4
          "Some standards do appear to transcend individual taste.",      // E -> gap 5
          "And that, perhaps, is exactly as it should be.",              // F -> gap 6
          "Everyone has always agreed on what counts as great art.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la pregunta parece obvia."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el veredicto de la historia es inestable."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: cambian según época y lugar."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: esa conclusión es demasiado extrema."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: algunos criterios trascienden el gusto."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: y así debe ser."),
        ],
      },
      p7: {
        title: "Four people discuss culture and the media",
        text: "Read what four people say about media and culture.\n\nA) NADIA: I worry about how social media rewards outrage. The algorithms have worked out that nothing spreads faster than anger, so the most extreme, divisive voices get amplified while reasonable, nuanced ones are drowned out. We're not being shown the world as it is, but the world at its angriest. It's making us all a little bit worse.\n\nB) TOM: I'm tired of people looking down on popular culture. There's this snobbish idea that if something is enjoyed by millions, it can't be any good, and that 'real' art has to be difficult and highbrow. Nonsense. A brilliant pop song or a gripping blockbuster can be as much a work of genius as any opera. Accessibility isn't a flaw.\n\nC) PRIYA: What matters most to me is representation. For most of my childhood, I never saw anyone who looked like me portrayed as a hero, only as a stereotype, if at all. It shapes what children believe is possible for them. Getting this right isn't 'political correctness'; it's about telling the truth about who we all are.\n\nD) SAM: I actually think we've lost something by making everything so instantly accessible. The best books, films and music often demand effort — they reveal their rewards slowly, over time. But we've been trained to want instant gratification, to swipe on the moment we're not immediately entertained. I fear we're losing the patience for anything deep.",
        q: [
          mc("Who worries that algorithms reward outrage?", ["A", "B", "C", "D"], 0, "Nadia: 'social media rewards outrage'."),
          mc("Who defends popular culture against snobbery?", ["A", "B", "C", "D"], 1, "Tom: 'tired of people looking down on popular culture'."),
          mc("Who emphasises the importance of representation?", ["A", "B", "C", "D"], 2, "Priya: 'What matters most to me is representation'."),
          mc("Who fears we're losing patience for difficult, deep works?", ["A", "B", "C", "D"], 3, "Sam: 'losing the patience for anything deep'."),
          mc("Who says the angriest voices get amplified?", ["A", "B", "C", "D"], 0, "Nadia: 'the most extreme, divisive voices get amplified'."),
          mc("Who says a great pop song can be a work of genius?", ["A", "B", "C", "D"], 1, "Tom: 'a brilliant pop song… as much a work of genius'."),
          mc("Who links representation to what children believe is possible?", ["A", "B", "C", "D"], 2, "Priya: 'shapes what children believe is possible'."),
          mc("Who criticises the culture of instant gratification?", ["A", "B", "C", "D"], 3, "Sam: 'trained to want instant gratification'."),
          mc("Who rejects the idea that accessible art can't be good?", ["A", "B", "C", "D"], 1, "Tom: 'Accessibility isn't a flaw'."),
          mc("Who says we're shown the world 'at its angriest'?", ["A", "B", "C", "D"], 0, "Nadia: 'the world at its angriest'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Social media has had a more negative than positive effect on culture.'\nComenta estos dos aspectos y añade uno propio:\n1. information (la información)\n2. creativity (la creatividad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· RESEÑA de una película, serie, libro o exposición: descríbela, compárala con otras (usa comparativos) y di si la recomiendas.\n· ARTÍCULO: 'Is popular culture as valuable as \"high\" culture?' — argumenta tu postura.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una crítica cultural, Ana Reyes (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a cultural critic, Ana Reyes. Interviewer: Ana, has social media been good or bad for culture? Ana: Both, and I refuse to pretend otherwise. It's given a voice to countless people the old media ignored — that's genuinely wonderful. But it also rewards the loudest and most extreme, which is a real problem. Interviewer: Do you think 'difficult' art still has a place? Ana: Absolutely, and I'd fight for it. Not everything should be instantly enjoyable. Some of the greatest works demand effort, and give far more in return. We mustn't lose the patience for that. Interviewer: Is popular culture underrated? Ana: Massively. There's a tired snobbery that says if millions love something, it can't be art. That's nonsense. A great pop song can be as brilliant as a symphony. Quality and popularity aren't opposites. Interviewer: What about representation in the media? Ana: It matters enormously, and not for the reasons people assume. It's not about ticking boxes; it's about truth. When whole groups are absent or stereotyped, that's simply a false picture of the world. Interviewer: Are you optimistic about the future of culture? Ana: Cautiously, yes. Culture has survived every technological upheaval before and emerged transformed but alive. It'll survive this one too. Interviewer: Any advice for our listeners? Ana: Be an active consumer, not a passive one. Seek out things that challenge you, not just things that flatter you. Your taste is a muscle — the more you use it, the stronger it gets. Interviewer: Thank you, Ana.", [
      mc("1. What is Ana's view on social media and culture?", ["Entirely good.", "Both good and bad.", "Entirely bad."], 1, "'Both, and I refuse to pretend otherwise'."),
      mc("2. What does she say about 'difficult' art?", ["It's outdated.", "It still has a place and gives far more in return.", "It should be avoided."], 1, "'Some of the greatest works demand effort… give far more in return'."),
      mc("3. What does she think about popular culture?", ["It's overrated.", "It's massively underrated.", "It's not art."], 1, "'Massively' underrated."),
      mc("4. Why does representation matter, according to Ana?", ["To tick boxes.", "Because it's about truth.", "For politics."], 1, "'it's about truth'."),
      mc("5. Is she optimistic about culture's future?", ["No.", "Cautiously yes.", "She's unsure."], 1, "'Cautiously, yes'."),
      mc("6. What does she say about quality and popularity?", ["They're opposites.", "They aren't opposites.", "Popularity ruins quality."], 1, "'Quality and popularity aren't opposites'."),
      mc("7. What is her advice to listeners?", ["Be a passive consumer.", "Be active; seek out things that challenge you.", "Avoid difficult art."], 1, "'Be an active consumer… Seek out things that challenge you'."),
    ]),

    ...speakingParts({ p1: "qué cultura consumes (series, música, libros), y si crees que las redes sociales han mejorado o empeorado la cultura", p2: "dos formas de disfrutar la cultura (ver un vídeo viral corto y leer un libro exigente): compáralas y di qué aporta cada una", p3: "qué debería hacer una plataforma para mejorar su contenido (menos contenido extremo, más diversidad, promover lo educativo, luchar contra los bulos): comentadlo y elegid lo más importante", p4: "los medios y la cultura: si las redes sociales dañan la cultura, si la cultura popular vale tanto como la 'alta cultura' y por qué importa la representación" }),

    SUMMARY("Resumen del Día 39", [
      "Intensificar comparativos: much/far/considerably/slightly + comparativo; nowhere near as… as.",
      "the …er the …er; twice as… as; one of the most + adj. Extremos: absolutely amazing (no 'very').",
      "Vocabulario de medios y cultura. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 40", "Escribe 6 frases de comparación con distintos intensificadores. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 40 ─────────────────────────
const DAY40 = {
  title: "Día 40 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de conectores, cuantificadores, artículos y comparación. Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 8.",
  pedagogy: {
    objective: "Consolidar la cohesión, los cuantificadores y la comparación del B2.",
    summary: "Repaso integrado; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 9."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 8 del B2. Consolidas los conectores del discurso, los cuantificadores, los artículos/determinantes y la comparación avanzada. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 8", `1) Conectores: although/whereas/despite (contraste), moreover (adición), because of/due to (causa), therefore/consequently (resultado).
2) Cuantificadores: most people / most of the people; few/little vs a few/a little; hardly any; a great deal of.
3) Artículos: a/an, the, cero (generalizaciones); both/either/neither, each/every, another/other.
4) Comparación: much/far + comparativo; the …er the …er; nowhere near as… as; one of the most…`),
    grammarEx("Use of English — Repaso mixto de la Semana 8", "Completa o elige.", [
      fb("___ being tired, she finished the work. (a pesar de + -ing)", ["Despite", "In spite of"], "despite + -ing."),
      fb("It was late; ___, we decided to leave. (por lo tanto)", ["therefore", "consequently"], "therefore."),
      mc("Choose:", ["The most of people agree.", "Most people agree.", "Most of people agree."], 1, "most people (general)."),
      fb("There's ___ ___ milk left — almost none. (casi nada)", ["hardly any"], "hardly any."),
      mc("Choose (general):", ["The life is short.", "Life is short.", "A life is short."], 1, "general → sin the."),
      mc("Choose:", ["Every students passed.", "Every student passed.", "Every of the students passed."], 1, "every + singular."),
      fb("This one is ___ ___ (far/good) than the other.", ["far better"], "far + comparativo."),
      fb("___ ___ you practise, ___ ___ you get. (cuanto más… mejor)", ["The more", "the better"], "the more… the better."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 8", "Repasa los mazos (sociedad, tendencias, educación, medios/cultura)."),
    vocabEx("Vocabulario — Repaso de la Semana 8", "Elige la opción correcta.", [
      mc("The unfair difference between rich and poor:", ["inequality", "welfare", "cohesion"], 0, "inequality."),
      mc("A general direction of change over time:", ["trend", "proportion", "average"], 0, "trend."),
      mc("The ability to analyse and evaluate ideas:", ["critical thinking", "rote learning", "literacy"], 0, "critical thinking."),
      mc("Content that spreads very rapidly online:", ["viral", "mainstream", "controversial"], 0, "viral."),
      mc("The chance to move up in society:", ["social mobility", "poverty", "discrimination"], 0, "social mobility."),
      mc("To leave school before finishing:", ["drop out", "assess", "enrol"], 0, "drop out."),
      mc("An oversimplified fixed image of a group:", ["stereotype", "portrayal", "influencer"], 0, "stereotype."),
      mc("More than half of a group:", ["the majority", "a minority", "a proportion"], 0, "the majority."),
    ]),

    ...uoe({
      p1: {
        title: "The attention economy",
        text: "We are living, whether we realise it or not, in what has been called the 'attention economy'. In a world overflowing with information, the one thing that is genuinely (1)___ is human attention, and vast industries now compete ruthlessly to capture and hold it. Every app on your phone, every website you visit, has been carefully (2)___ by teams of experts whose sole aim is to keep you looking for as long as possible. The techniques they use are (3)___ powerful, exploiting deep features of human psychology to make their products almost impossible to put down. There is, of course, a price to be paid, and it is not (4)___ in money but in something far more precious: our time, our focus, and arguably our peace of mind. Studies suggest that the constant fragmentation of our attention is making us (5)___ able to concentrate, to think deeply, or to be fully present in our own lives. None of this happened by (6)___; it is the direct result of a business model that profits from our distraction. The (7)___ challenge, for each of us, is to reclaim control of our own attention — to decide, deliberately, what deserves our focus, rather than surrendering it, moment by moment, to whoever shouts (8)___.",
        q: [
          mc("(1)", ["scarce", "rare", "limited", "short"], 0, "'genuinely scarce'."),
          mc("(2)", ["designed", "made", "built", "created"], 0, "'carefully designed'."),
          mc("(3)", ["extraordinarily", "very", "really", "quite"], 0, "'extraordinarily powerful'."),
          mc("(4)", ["paid", "counted", "measured", "given"], 0, "'not paid in money but in…'"),
          mc("(5)", ["less", "little", "least", "lower"], 0, "'making us less able to concentrate'."),
          mc("(6)", ["accident", "chance", "mistake", "luck"], 0, "'by accident'."),
          mc("(7)", ["real", "true", "actual", "genuine"], 0, "'The real challenge'."),
          mc("(8)", ["loudest", "louder", "the loudest", "most loud"], 0, "'whoever shouts loudest'."),
        ],
      },
      p2: {
        title: "Why boredom matters",
        text: "Boredom has, until recently, had a thoroughly (1)___ reputation. We treat it as a problem to be solved, an empty state to be filled at (2)___ costs. And in a world of smartphones, we can now abolish it entirely: the moment we feel the first flicker of boredom, we reach for a screen. But a growing (3)___ of research suggests that, in doing so, we may be losing something important. Boredom, it turns out, has a purpose. It is precisely (4)___ we are bored — understimulated, our minds free to wander — that we do some of our most creative thinking. (5)___ the mind, deprived of external stimulation, begins to generate its own; this is where daydreams, insights and new ideas are born. By eliminating boredom, we may (6)___ be eliminating the very conditions in which creativity flourishes. This does not mean we should seek out boredom for its own sake. (7)___, it means we should be less afraid of it, and more willing to sit with an empty moment rather than instantly filling it. The next time you find yourself bored, (8)___ than reaching for your phone, try simply letting your mind wander. You may be surprised where it takes you.",
        q: [
          fb("(1)", ["bad", "negative", "poor"], "'a thoroughly bad/negative reputation'."),
          fb("(2)", ["all"], "'at all costs'."),
          fb("(3)", ["body"], "'a growing body of research'."),
          fb("(4)", ["when"], "'precisely when we are bored'."),
          fb("(5)", ["Freed", "Left"], "'Freed/Left… the mind begins to generate'."),
          fb("(6)", ["also", "well"], "'we may also be eliminating'."),
          fb("(7)", ["Rather", "Instead"], "'Rather/Instead, it means…'"),
          fb("(8)", ["rather"], "'rather than reaching for your phone'."),
        ],
      },
      p3: {
        title: "The paradox of choice",
        text: "Modern life offers us an (1)___ range of choices, from the products on a supermarket shelf to the entire course of our careers. We tend to assume that more choice must be a good thing — surely, the more options we have, the (2)___ off we are? Yet psychologists have discovered a surprising and (3)___ truth: beyond a certain point, more choice makes us not happier but more anxious. Faced with an (4)___ number of options, we struggle to choose at all, and once we do, we are haunted by the possibility that a different choice would have been (5)___. The (6)___ of being unable to enjoy what we have chosen, because we are so aware of what we have given up, is a distinctly modern form of unhappiness. This does not mean choice is bad; the freedom to choose is precious. But it suggests that there is such a thing as too much of it, and that the (7)___ to a good life may lie not in maximising our options but in learning to choose well, to commit to our choices, and to stop (8)___ the roads we did not take.",
        items: [
          { root: "believe", accepted: ["unbelievable"], hint: "'an unbelievable range' → unbelievable." },
          { root: "well", accepted: ["better"], hint: "'the better off we are' → better." },
          { root: "comfort", accepted: ["uncomfortable"], hint: "'an uncomfortable truth' → uncomfortable." },
          { root: "end", accepted: ["endless"], hint: "'an endless number of options' → endless." },
          { root: "good", accepted: ["better"], hint: "'would have been better' → better." },
          { root: "able", accepted: ["inability"], hint: "'The inability to enjoy' → inability." },
          { root: "key", accepted: ["key"], hint: "'the key to a good life' (sustantivo)." },
          { root: "regret", accepted: ["regretting"], hint: "'stop regretting the roads' → regretting." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 8",
        items: [
          { s1: "Although the plan was risky, they went ahead.", key: "DESPITE", s2: "___ , they went ahead.", accepted: ["Despite the risk", "Despite the risks"], explanation: "despite + sustantivo." },
          { s1: "Almost none of the guests had arrived.", key: "HARDLY", s2: "___ the guests had arrived.", accepted: ["Hardly any of"], explanation: "hardly any of." },
          { s1: "In general, children learn languages easily.", key: "LEARN", s2: "___ languages easily.", accepted: ["Children learn"], explanation: "generalización → sin artículo." },
          { s1: "The new model is a great deal better.", key: "FAR", s2: "The new model is ___ .", accepted: ["far better"], explanation: "far better." },
          { s1: "As it gets colder, more people stay indoors.", key: "COLDER", s2: "The ___ , the more people stay indoors.", accepted: ["colder it gets"], explanation: "the colder… the more." },
          { s1: "This restaurant isn't as good as the old one.", key: "NOWHERE", s2: "This restaurant is ___ as good as the old one.", accepted: ["nowhere near"], explanation: "nowhere near as… as." },
        ],
      },
      p5: {
        title: "The library that saved a town",
        text: "When the local council announced that it was closing the public library in the small town of Fenwick, as part of a round of budget cuts, few people outside the town paid much attention. Libraries were closing everywhere; it was, sadly, the spirit of the age. The council's reasoning seemed unanswerable. In an era of the internet, when almost any book could be bought online for a few pounds and almost any fact found in seconds, what was the point of an expensive building full of paper? The library, the council argued, was a relic, a well-meaning but outdated institution that the modern world had simply left behind.\n\nThe people of Fenwick disagreed, and what they did next has become something of a legend. Rather than accept the closure, they occupied the building and, when the council refused to change its mind, took the extraordinary step of running the library themselves, entirely with volunteers. What happened over the following years revealed something the council, focused entirely on the library's function as a place to borrow books, had completely failed to understand.\n\nThe library, it turned out, was far more than a collection of books. It was, the volunteers discovered, one of the last genuinely public spaces in the town — a place where anyone, regardless of wealth, could simply be, without being expected to buy anything. It was where the elderly and the lonely came for company and warmth; where children whose homes had no quiet space could do their homework; where the unemployed could use the computers to search for work; where new arrivals could learn the language and find a foothold in the community. Far from being an outdated relic, the library was, they realised, one of the most important social institutions the town possessed.\n\nWord of Fenwick's volunteer library spread, and it became a model studied by communities across the country facing the same threat. Its success carried a lesson that extended far beyond libraries. In our rush to measure everything by its immediate economic function, the story suggested, we risk overlooking the quieter, less measurable ways in which institutions hold a community together. A library, like a park, a church or a public square, provides something that shows up on no balance sheet but without which a community begins to disintegrate: a shared, welcoming space that belongs to everyone and to no one, where the life of a town, in all its variety, can simply happen.",
        q: [
          mc("Why did the council decide to close the library?", ["Nobody used it.", "As part of budget cuts, seeing it as outdated.", "It was unsafe.", "It was too small."], 1, "'part of a round of budget cuts… a relic… outdated'."),
          mc("What did the people of Fenwick do?", ["Accepted the closure.", "Occupied and ran the library with volunteers.", "Moved away.", "Built a new one."], 1, "'running the library themselves, entirely with volunteers'."),
          mc("What had the council failed to understand?", ["The cost.", "That the library was far more than a place to borrow books.", "The internet.", "The building's age."], 1, "'the library was far more than a collection of books'."),
          mc("Who used the library, according to the volunteers?", ["Only readers.", "The lonely, children, the unemployed, new arrivals.", "Nobody.", "Only the wealthy."], 1, "'the elderly and the lonely… children… the unemployed… new arrivals'."),
          mc("What did Fenwick's library become for other communities?", ["A warning.", "A model to study.", "A failure.", "A joke."], 1, "'a model studied by communities across the country'."),
          mc("What broader lesson does the story suggest?", ["Measure everything economically.", "We overlook the ways institutions hold communities together.", "Libraries are useless.", "The internet replaces everything."], 1, "'the quieter, less measurable ways in which institutions hold a community together'."),
        ],
      },
      p6: {
        title: "The decline of the third place",
        text: "Sociologists have a term for the places where community life happens: 'third places'. (1)___ Neither home (the 'first place') nor work (the 'second'), they are the cafés, pubs, libraries, parks and squares where people gather, mingle and simply spend time in one another's company.\n\nThroughout history, such places have been the beating heart of community life. (2)___ It was in them that neighbours became friends, that news was shared, that the countless casual encounters occurred from which a sense of belonging is woven.\n\nIn recent decades, however, these third places have been steadily disappearing. (3)___ High streets decline, pubs and cafés close, public spaces are neglected or sold off, and more and more of life migrates online or behind closed doors.\n\nThe consequences of this loss are only now becoming clear. (4)___ As the physical spaces where community happens vanish, so too, it seems, does community itself, replaced by an epidemic of loneliness and isolation that afflicts even our most crowded cities.\n\nThe good news is that this trend is not inevitable, and in many places people are fighting back. (5)___ Community cafés, shared gardens, public libraries run by volunteers — such initiatives are springing up everywhere, driven by a growing recognition of what we have lost. (6)___ We are, perhaps, beginning to remember that a society is not merely a collection of individuals, but a web of relationships, and that those relationships need somewhere to grow.",
        options: [
          "These are the informal public spaces of everyday life.",       // A -> gap 1
          "They serve a function that is easy to overlook but vital.",    // B -> gap 2
          "A combination of forces has driven their decline.",            // C -> gap 3
          "The link between the two is no coincidence.",                  // D -> gap 4
          "People are working to rebuild what has been lost.",            // E -> gap 5
          "It is a hopeful sign, and one worth encouraging.",             // F -> gap 6
          "Third places have never had any importance at all.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: espacios públicos informales."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: cumplen una función vital."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: varias fuerzas causaron su declive."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el vínculo no es casual."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la gente reconstruye lo perdido."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: una señal esperanzadora."),
        ],
      },
      p7: {
        title: "Four people discuss modern life",
        text: "Read what four people say about the challenges of modern living.\n\nA) NADIA: The thing I struggle with most is attention. I used to be able to read a book for hours; now I can barely get through a page without reaching for my phone. It frightens me. I feel like my ability to concentrate, which I always took for granted, is being slowly eroded, and I'm fighting to get it back.\n\nB) TOM: For me, it's the loss of community. I know the names of everyone in my favourite online forum but not one of my actual neighbours. We've traded real, physical community for a digital imitation, and I don't think it's a fair swap. I miss the casual, everyday human contact that older generations simply took for granted.\n\nC) PRIYA: What worries me is the sheer overwhelm of choice. Every decision, however trivial, now involves endless options and comparisons. It's exhausting. Ironically, all this freedom to choose has made me less happy, not more. Sometimes I long for the simplicity of a world with fewer, not more, options.\n\nD) SAM: Honestly, I think we romanticise the past too much. Yes, modern life has its problems, but let's not forget what it's given us: connection with people across the world, access to all of human knowledge, freedoms my grandparents could only dream of. Every age has its difficulties. Ours are just different, not necessarily worse.",
        q: [
          mc("Who struggles most with a loss of attention?", ["A", "B", "C", "D"], 0, "Nadia: 'The thing I struggle with most is attention'."),
          mc("Who laments the loss of physical, local community?", ["A", "B", "C", "D"], 1, "Tom: 'the loss of community'."),
          mc("Who is overwhelmed by too much choice?", ["A", "B", "C", "D"], 2, "Priya: 'the sheer overwhelm of choice'."),
          mc("Who defends modern life against nostalgia?", ["A", "B", "C", "D"], 3, "Sam: 'we romanticise the past too much'."),
          mc("Who fears their ability to concentrate is being eroded?", ["A", "B", "C", "D"], 0, "Nadia: 'my ability to concentrate… being slowly eroded'."),
          mc("Who knows online contacts but not their neighbours?", ["A", "B", "C", "D"], 1, "Tom: 'not one of my actual neighbours'."),
          mc("Who says more freedom has made them less happy?", ["A", "B", "C", "D"], 2, "Priya: 'made me less happy, not more'."),
          mc("Who lists connection and knowledge as gifts of modern life?", ["A", "B", "C", "D"], 3, "Sam: 'connection with people… access to all of human knowledge'."),
          mc("Who longs for a world with fewer options?", ["A", "B", "C", "D"], 2, "Priya: 'the simplicity of a world with fewer… options'."),
          mc("Who says our difficulties are different, not necessarily worse?", ["A", "B", "C", "D"], 3, "Sam: 'just different, not necessarily worse'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Modern life is more stressful than life in the past.'\nComenta estos dos aspectos y añade uno propio:\n1. technology (la tecnología)\n2. community (la comunidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to protect your attention in a distracting world' — da consejos prácticos.\n· INFORME sobre los espacios públicos de tu comunidad (parques, bibliotecas, plazas): evalúa su estado y propón mejoras.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: Despite all the technology, I feel lonelier than ever. Two. Man: Most people, in my experience, are far kinder than the news would suggest. Three. Woman: The new library is nowhere near as welcoming as the old one. Four. Man: The more choices I'm given, the harder I find it to decide. Five. Woman: Hardly anyone reads a physical newspaper these days. Six. Man: Although it's convenient, online shopping has killed our high street. Seven. Woman: What worries me most is how short my attention span has become. Eight. Man: On average, we check our phones over a hundred times a day, apparently.", [
      mc("1. What does the woman feel despite technology?", ["Connected.", "Lonelier than ever.", "Happier."], 1, "'I feel lonelier than ever'."),
      mc("2. What does the man believe about most people?", ["They're cruel.", "They're far kinder than the news suggests.", "They're selfish."], 1, "'far kinder than the news would suggest'."),
      mc("3. How does the new library compare to the old one?", ["Better.", "Nowhere near as welcoming.", "The same."], 1, "'nowhere near as welcoming'."),
      mc("4. What happens the more choices the man has?", ["It's easier.", "The harder he finds it to decide.", "No effect."], 1, "'the harder I find it to decide'."),
      mc("5. Who reads a physical newspaper now?", ["Everyone.", "Hardly anyone.", "Most people."], 1, "'Hardly anyone reads a physical newspaper'."),
      mc("6. What has online shopping done, according to the man?", ["Helped the high street.", "Killed the high street.", "Nothing."], 1, "'killed our high street'."),
      mc("7. What worries the woman most?", ["Loneliness.", "Her short attention span.", "The news."], 1, "'how short my attention span has become'."),
      mc("8. How often do we check our phones on average?", ["Ten times a day.", "Over a hundred times a day.", "Rarely."], 1, "'over a hundred times a day'."),
    ]),

    ...speakingParts({ p1: "qué te parece más difícil de la vida moderna y qué era mejor en el pasado", p2: "dos escenas de la vida moderna (gente conectada al móvil en un café y gente conversando en persona en una plaza): compáralas", p3: "qué mejoraría la vida en tu comunidad (más espacios públicos, menos dependencia del móvil, más contacto humano, más zonas verdes): comentadlo y elegid lo prioritario", p4: "la vida moderna: si es más estresante que antes, si la tecnología nos une o nos aísla y qué hemos ganado y perdido" }),

    SUMMARY("Resumen de la Semana 8 (B2)", [
      "Dominas los conectores del discurso, los cuantificadores, los artículos/determinantes y la comparación avanzada.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: expresiones idiomáticas, formación de palabras y el estilo formal e informal.",
    ]),
    INFO("Mini-simulacro de la Semana 8", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 9."),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "El discurso, la cohesión y los matices",
  description: "Conectores del discurso, cuantificadores, artículos y determinantes, y comparación avanzada. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
