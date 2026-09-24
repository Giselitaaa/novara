/**
 * B2 First · Semana 11 — "Estrategias de examen · El mundo del trabajo".
 * Técnica y estrategia para cada parte del examen real (Reading & Use of English,
 * Writing, Listening y Speaking), con el hilo temático del trabajo, las
 * profesiones, las entrevistas, el dinero y la ambición.
 * Cada día, las 4 destrezas con el formato real del B2 + estrategia aplicada.
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
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, to be honest, in my view, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they appear to, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a fair point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 51 ─────────────────────────
const DAY51 = {
  title: "Día 51 — Estrategia de Use of English (Partes 1–4) · El trabajo y las profesiones",
  description: "Técnica para los clozes (P1 multiple-choice, P2 open cloze), la formación de palabras (P3) y las transformaciones (P4). Vocabulario del trabajo. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Aplicar una estrategia clara a cada una de las cuatro partes de Use of English.",
    summary: "Estrategia Use of English P1–P4; el trabajo; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["no leer toda la frase antes de elegir.", "dejar huecos en blanco.", "no contar palabras en las transformaciones (2–5)."],
    reviewPrompts: ["¿Cuántas palabras puede tener la respuesta de la P4?", "¿Qué palabras 'gramaticales' suelen faltar en la P2?"],
  },
  items: [
    TEXT("🎯 Semana 11: ESTRATEGIA DE EXAMEN, parte por parte. Hoy USE OF ENGLISH (P1–P4): los clozes, la formación de palabras y las transformaciones. Vocabulario: el TRABAJO y las PROFESIONES."),
    GRAMMAR("Estrategia — Use of English Partes 1–4", `PARTE 1 (multiple-choice cloze, 8 huecos): 4 opciones por hueco. Fíjate en COLOCACIONES (make/do), phrasal verbs y palabras que "van juntas". Lee toda la frase; a menudo la pista está DESPUÉS del hueco. Descarta las que no encajan gramaticalmente.
PARTE 2 (open cloze, 8 huecos): escribe UNA sola palabra, casi siempre GRAMATICAL (artículos, preposiciones, auxiliares, pronombres relativos, conectores, cuantificadores). Piensa: ¿falta preposición? ¿relativo? ¿auxiliar? Nunca dejes un hueco vacío.
PARTE 3 (word formation, 8 huecos): te dan la RAÍZ en MAYÚSCULAS al margen; fórmala (prefijo/sufijo, a veces negativa, a veces plural). Decide qué clase de palabra hace falta (sustantivo/adjetivo/verbo/adverbio) y si es positiva o negativa. Cuidado con la ortografía.
PARTE 4 (key word transformations, 6 ítems): reescribe la 2ª frase con la PALABRA CLAVE (no la cambies) usando entre DOS y CINCO palabras (¡las contracciones cuentan como dos!). El significado debe ser idéntico. Suele evaluar gramática vista: pasiva, condicionales, reported speech, comparativos, patrones verbales.
⚠️ Cuenta siempre las palabras en la P4. Menos de 2 o más de 5 = 0 puntos.`),
    TIP("Truco de oro", "Si dudas en la P1/P2, tapa las opciones y piensa qué palabra pondrías tú; luego busca la que más se acerque. En la P4, identifica primero QUÉ estructura gramatical están evaluando: eso te da la respuesta."),
    WARN("Errores típicos del hispanohablante", "· P2: se olvidan preposiciones ('interested IN', 'good AT') y auxiliares ('do', 'have').\n· P3: prefijo negativo equivocado (un-/im-/dis-/ir-).\n· P4: pasarse de 5 palabras o cambiar la key word.\n· No dejes NADA en blanco: una respuesta razonada siempre puede acertar."),
    grammarEx("Use of English — Estrategia aplicada (P1–P4)", "Aplica la técnica de cada parte.", [
      mc("P1: She decided to ___ for the job even though she felt nervous.", ["apply", "ask", "request", "demand"], 0, "apply FOR a job (colocación)."),
      fb("P2: He's very good ___ dealing with difficult customers. (preposición)", ["at"], "good AT + -ing."),
      fb("P3: She showed real ___ (LEAD) as a manager. (sustantivo)", ["leadership"], "lead → leadership."),
      fb("P4: 'They offered him the job.' → He ___ the job. (key: OFFERED, pasiva)", ["was offered"], "pasiva: was offered (2 palabras)."),
      fb("P4: 'I started this job in 2019.' → I ___ this job since 2019. (key: HAVE)", ["have had", "have been in"], "present perfect (2–3 palabras)."),
      mc("P1: It took her years to ___ a reputation as an expert.", ["build", "make", "do", "get"], 0, "build a reputation (colocación)."),
      fb("P2: The candidate, ___ CV impressed everyone, got the job. (relativo posesivo)", ["whose"], "whose CV."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo y las profesiones", "Léxico del trabajo (B2)."),
    deck("B2 S11D51 — El trabajo y las profesiones", [
      ["career", "carrera profesional", "She has had a long career in law.", "sustantivo", "kəˈrɪə"],
      ["apply for", "solicitar (un empleo)", "I applied for three jobs.", "phrasal verb", "əˈplaɪ fɔː"],
      ["colleague", "compañero/a de trabajo", "My colleagues are very supportive.", "sustantivo", "ˈkɒliːɡ"],
      ["salary", "sueldo", "The salary is competitive.", "sustantivo", "ˈsæləri"],
      ["promotion", "ascenso", "She was offered a promotion.", "sustantivo", "prəˈməʊʃn"],
      ["workload", "carga de trabajo", "My workload is quite heavy.", "sustantivo", "ˈwɜːkləʊd"],
      ["self-employed", "autónomo/a", "He's been self-employed for years.", "adjetivo", "ˌself ɪmˈplɔɪd"],
      ["shift", "turno", "I work the night shift.", "sustantivo", "ʃɪft"],
      ["skilled", "cualificado/a", "It's a skilled, well-paid job.", "adjetivo", "skɪld"],
      ["retire", "jubilarse", "He plans to retire at sixty.", "verbo", "rɪˈtaɪə"],
    ]),
    vocabEx("Vocabulario — El trabajo y las profesiones", "Elige la opción correcta.", [
      mc("A move to a more senior position is a ___.", ["promotion", "shift", "workload"], 0, "promotion."),
      mc("The people you work with are your ___.", ["colleagues", "salaries", "careers"], 0, "colleagues."),
      mc("Someone who works for themselves is ___.", ["self-employed", "skilled", "retired"], 0, "self-employed."),
      mc("The amount of work you have to do is your ___.", ["workload", "salary", "shift"], 0, "workload."),
      mc("To stop working permanently, usually with age, is to ___.", ["retire", "apply", "promote"], 0, "retire."),
      mc("To formally request a job is to ___ it.", ["apply for", "retire from", "shift"], 0, "apply for."),
    ]),

    ...uoe({
      p1: {
        title: "Choosing a career",
        text: "Few decisions in life feel as momentous, or as terrifying, as choosing a career. We are asked to make it when we are young and (1)___ little about ourselves or the world of work, and yet it is supposed to (2)___ the shape of the decades that follow. Small wonder that so many people find the whole business paralysing. The good news, which nobody seems to tell the young, is that this pressure is largely (3)___. The idea that we must choose, once and for all, a single career and (4)___ to it for life is a relatively recent invention, and an increasingly outdated one. Most people today will change not just jobs but entire careers several times over the (5)___ of their working lives. A first choice is not a life sentence; it is simply a place to (6)___. Far more important than picking the 'right' career at eighteen is developing the skills, the curiosity and the adaptability to keep learning and changing as you (7)___. The world of work is being transformed so rapidly that many of the jobs today's students will eventually do do not yet exist. In such a world, the ability to adapt matters far more than any single decision. So if you are young and agonising over what to do with your life, take (8)___: you do not have to get it right first time. Almost nobody does.",
        q: [
          mc("(1)", ["know", "understand", "realise", "learn"], 0, "'know little about ourselves'."),
          mc("(2)", ["determine", "decide", "fix", "set"], 0, "'determine the shape of the decades'."),
          mc("(3)", ["exaggerated", "false", "wrong", "untrue"], 0, "'this pressure is largely exaggerated'."),
          mc("(4)", ["stick", "hold", "keep", "cling"], 0, "'stick to it for life'."),
          mc("(5)", ["course", "length", "time", "period"], 0, "'over the course of their lives'."),
          mc("(6)", ["start", "begin", "commence", "open"], 0, "'a place to start'."),
          mc("(7)", ["go", "move", "advance", "progress"], 0, "'as you go'."),
          mc("(8)", ["heart", "courage", "comfort", "hope"], 0, "'take heart'."),
        ],
      },
      p2: {
        title: "The changing workplace",
        text: "The way we work has changed more in the (1)___ few years than in the previous fifty. For most of the twentieth century, a typical working life followed a predictable pattern: you found a job, often (2)___ a single company, commuted to an office five days a week, and stayed there, more or less, until you retired. That world is rapidly disappearing. Today, growing numbers of people work from home, at least part of the time; many work not (3)___ a single employer but as freelancers, juggling several clients (4)___ once; and the notion of a 'job for life' has come to seem almost quaint. These changes bring real benefits — greater flexibility, more autonomy, the freedom to shape one's own working life. But they bring costs (5)___ well. The security of the old model, for all its rigidity, is being lost, and with it a certain peace of mind. The freelancer who can work from a beach may (6)___ envy the office worker's steady salary and regular hours. Whether the new world of work will prove better or worse than the old (7)___ probably depends less on the changes themselves than on how wisely, as a society, we choose to manage them — and, above all, on whether we can extend the flexibility to all, rather than reserving (8)___ for the fortunate few.",
        q: [
          fb("(1)", ["last", "past"], "'the last/past few years'."),
          fb("(2)", ["for"], "'for a single company'."),
          fb("(3)", ["for"], "'not for a single employer'."),
          fb("(4)", ["at"], "'several clients at once'."),
          fb("(5)", ["as"], "'costs as well'."),
          fb("(6)", ["well", "still"], "'may well envy'."),
          fb("(7)", ["one"], "'the old one probably depends'."),
          fb("(8)", ["it"], "'reserving it for the few'."),
        ],
      },
      p3: {
        title: "What makes a good boss",
        text: "Ask people to describe the best boss they ever had, and their answers are often (1)___ similar. They rarely mention technical brilliance or business genius. Instead, they talk about (2)___ qualities: a boss who listened, who trusted them, who gave credit generously and took blame (3)___. Good management, it turns out, is far less about cleverness than about character. The best managers understand that their job is not to do the work themselves, but to create the (4)___ in which others can do their best work. This requires a rare combination of qualities: the (5)___ to make difficult decisions, but also the humility to admit mistakes; the confidence to lead, but also the (6)___ to listen. Above all, it requires treating people as human beings rather than as mere resources. The research on this is remarkably (7)___: employees who feel respected, trusted and valued are more productive, more loyal and more creative than those who do not. And yet, despite all the evidence, good management remains surprisingly rare — perhaps because the qualities it requires cannot easily be taught, measured or (8)___ into a training course.",
        items: [
          { root: "strike", accepted: ["strikingly"], hint: "'strikingly similar' → strikingly." },
          { root: "person", accepted: ["personal"], hint: "'personal qualities' → personal." },
          { root: "will", accepted: ["willingly"], hint: "'took blame willingly' → willingly." },
          { root: "condition", accepted: ["conditions"], hint: "'the conditions in which' → conditions." },
          { root: "strong", accepted: ["strength"], hint: "'the strength to make decisions' → strength." },
          { root: "wise", accepted: ["wisdom"], hint: "'the wisdom to listen' → wisdom." },
          { root: "consist", accepted: ["consistent"], hint: "'remarkably consistent' → consistent." },
          { root: "pack", accepted: ["packaged"], hint: "'packaged into a course' → packaged." },
        ],
      },
      p4: {
        title: "Transformaciones — el trabajo",
        items: [
          { s1: "They gave her the job last week.", key: "GIVEN", s2: "She ___ the job last week.", accepted: ["was given"], explanation: "pasiva: was given." },
          { s1: "I haven't had a holiday for two years.", key: "SINCE", s2: "I ___ a holiday for two years.", accepted: ["haven't had"], explanation: "present perfect + for." },
          { s1: "It isn't necessary to wear a suit here.", key: "HAVE", s2: "You ___ a suit here.", accepted: ["don't have to wear"], explanation: "don't have to (no obligación)." },
          { s1: "'Why don't you apply for the manager's job?' she said.", key: "SUGGESTED", s2: "She ___ for the manager's job.", accepted: ["suggested applying", "suggested I apply"], explanation: "suggest + -ing / that." },
          { s1: "He is a better leader than his predecessor.", key: "AS", s2: "His predecessor was ___ he is.", accepted: ["not as good as"], explanation: "not as… as." },
          { s1: "She started this company ten years ago.", key: "BEEN", s2: "This company ___ for ten years.", accepted: ["has been running", "has existed"], explanation: "present perfect (duración)." },
        ],
      },
      p5: {
        title: "The man who gave away his company",
        text: "When Harald Voss founded his engineering firm in a small workshop forty years ago, he had, by his own admission, no grand ambitions beyond making a decent living and building things he could be proud of. He could not have imagined that his little company would one day grow into one of the most respected manufacturers in its field, employing thousands of people and known throughout the industry for the exceptional quality of its work. Nor, perhaps, could he have imagined the extraordinary decision he would make when, in his seventies, the time finally came to retire.\n\nBy any conventional measure, Voss's options were clear. He could sell the company, which was worth a very great deal of money, and spend his final years in luxurious comfort. He could pass it on to his children, securing their fortunes for generations. Or he could float it on the stock market, cashing in on decades of hard work. These were the choices that his lawyers, his accountants and his family all expected him to weigh. Instead, to the astonishment of everyone who knew him, he did something almost nobody had anticipated: he gave the company to its workers.\n\nVoss's reasoning, when he eventually explained it, was characteristically simple. The company's success, he pointed out, had never been his achievement alone. It had been built by the thousands of people who had worked for it over the decades — the engineers, the machinists, the office staff, the cleaners. They had given their working lives to the firm; it seemed only right, he felt, that they, rather than his heirs or some distant shareholders, should own and benefit from it. He therefore transferred ownership of the entire business into a trust controlled by its employees, ensuring that the profits would, from then on, be shared among the people who actually created them.\n\nThe decision was widely reported and widely admired, though not universally understood. Some dismissed it as naive or eccentric; others quietly suspected there must be some hidden tax advantage behind such apparent generosity. But those who knew Voss well insisted that his motive was exactly what he said it was: a deeply held conviction that a company belongs, by rights, to the people who work in it. He had grown wealthy, he acknowledged, but he had no wish to grow wealthier still at the expense of the very people who had made his fortune possible.\n\nWhether Voss's example will ever be widely followed seems, sadly, doubtful. The pressures that push companies in the opposite direction — towards concentrating wealth in ever fewer hands — are powerful and deeply entrenched. But his story endures as a quiet challenge to the assumptions of our age. It reminds us that the way we organise our economic life is not a law of nature but a set of choices, and that other choices are possible. A company can be run for the benefit of its workers rather than its shareholders; wealth can be shared rather than hoarded. Harald Voss did not set out to change the world. But in his own modest way, he showed that it could be done differently — and that, perhaps, is a more powerful argument than any speech.",
        q: [
          mc("What were Harald Voss's original ambitions?", ["To become very rich.", "To make a decent living and build things he was proud of.", "To sell his company.", "To become famous."], 1, "'no grand ambitions beyond making a decent living'."),
          mc("What conventional options did he have on retiring?", ["To close the firm.", "To sell it, pass it to his children, or float it.", "To give it away.", "To keep working."], 1, "'sell the company… pass it on to his children… float it on the stock market'."),
          mc("What did Voss actually do?", ["He sold it.", "He gave the company to its workers.", "He gave it to his children.", "He closed it."], 1, "'he gave the company to its workers'."),
          mc("What was his reasoning?", ["Tax avoidance.", "The success had been built by all the workers, so they should own it.", "He disliked his family.", "He needed money."], 1, "'built by the thousands of people who had worked for it'."),
          mc("How did some people react to the decision?", ["Total agreement.", "Some called it naive or suspected a hidden tax advantage.", "Anger.", "Indifference."], 1, "'dismissed it as naive… suspected there must be some hidden tax advantage'."),
          mc("What does his story remind us, according to the writer?", ["Business is fixed.", "The way we organise economic life is a set of choices, and others are possible.", "Generosity is foolish.", "Workers can't own firms."], 1, "'not a law of nature but a set of choices, and… other choices are possible'."),
        ],
      },
      p6: {
        title: "The truth about hard work",
        text: "'Work hard and you will succeed.' It is one of the most widely repeated pieces of advice in the world, and one of the most misleading. (1)___ Hard work, we are told, is the key to success, and those who fail simply did not try hard enough.\n\nThere is, of course, a grain of truth in this. (2)___ Almost nothing worthwhile is achieved without effort, and idleness rarely leads to great things.\n\nBut the idea that hard work alone determines success is, on closer inspection, plainly false. (3)___ Millions of people work extraordinarily hard all their lives and remain poor, while others succeed with relatively little effort.\n\nThe uncomfortable truth is that success depends on far more than effort. (4)___ Luck, timing, connections and, above all, the circumstances of one's birth play an enormous and often decisive role.\n\nWhy, then, does the myth of hard work persist so stubbornly? (5)___ It flatters the successful, who prefer to believe they earned everything themselves, and it conveniently blames the poor for their own poverty. (6)___ The comforting story that effort alone determines our fate is, in the end, less a description of how the world works than a justification for how it is.",
        options: [
          "From childhood, we are taught to believe in it completely.",     // A -> gap 1
          "Effort really does matter, and no one should pretend otherwise.", // B -> gap 2
          "The evidence all around us contradicts it daily.",              // C -> gap 3
          "Many powerful forces have nothing to do with how hard we try.",  // D -> gap 4
          "The myth survives because it serves those who benefit from it.", // E -> gap 5
          "It turns a matter of luck into a matter of merit.",             // F -> gap 6
          "Hard work is the only thing that has ever mattered.",            // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: nos enseñan a creerlo del todo."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el esfuerzo importa de verdad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la evidencia lo contradice."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: fuerzas ajenas al esfuerzo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el mito sirve a quien se beneficia."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: convierte la suerte en mérito."),
        ],
      },
      p7: {
        title: "Four people talk about their work",
        text: "Read what four people say about their jobs and careers.\n\nA) NADIA: I changed careers completely at forty. I'd been an accountant for years, hated it, and finally retrained as a nurse. Everyone said I was mad to start again from the bottom. But it was the best decision I ever made. The idea that you pick one career at twenty and stay in it forever is nonsense — it's never too late to change.\n\nB) TOM: I'm self-employed, and I love the freedom, but I won't pretend it's easy. There's no sick pay, no paid holiday, no steady salary. Some months are great; others I lie awake worrying about money. The flexibility is wonderful, but the insecurity is real. It suits me, but it's not for everyone.\n\nC) PRIYA: What matters most to me isn't money or status — it's having a decent boss. I once had a manager who made my life miserable, and no salary could have made up for it. Now I work for someone who trusts me and treats me like a human being, and I'd never leave, even for more money. A good boss is worth more than a good salary.\n\nD) SAM: I'll be honest, I work to live, not the other way round. My job is fine, but it's just a job — a way to pay for the things I actually care about. I don't understand people who define themselves by their careers. When I retire, I won't miss the work for a second; I'll just be glad to have my time back.",
        q: [
          mc("Who changed careers completely later in life?", ["A", "B", "C", "D"], 0, "Nadia: 'I changed careers completely at forty'."),
          mc("Who values the freedom of self-employment despite its insecurity?", ["A", "B", "C", "D"], 1, "Tom: 'I love the freedom, but… the insecurity is real'."),
          mc("Who says a good boss matters more than a good salary?", ["A", "B", "C", "D"], 2, "Priya: 'A good boss is worth more than a good salary'."),
          mc("Who works 'to live, not the other way round'?", ["A", "B", "C", "D"], 3, "Sam: 'I work to live, not the other way round'."),
          mc("Who says it's never too late to change career?", ["A", "B", "C", "D"], 0, "Nadia: 'it's never too late to change'."),
          mc("Who lies awake worrying about money some months?", ["A", "B", "C", "D"], 1, "Tom: 'others I lie awake worrying about money'."),
          mc("Who once had a manager who made their life miserable?", ["A", "B", "C", "D"], 2, "Priya: 'a manager who made my life miserable'."),
          mc("Who doesn't understand people who define themselves by their careers?", ["A", "B", "C", "D"], 3, "Sam: 'people who define themselves by their careers'."),
          mc("Who was told they were 'mad' to start again from the bottom?", ["A", "B", "C", "D"], 0, "Nadia: 'Everyone said I was mad'."),
          mc("Who says the flexibility is wonderful but not for everyone?", ["A", "B", "C", "D"], 1, "Tom: 'It suits me, but it's not for everyone'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'It is better to have a secure job than an exciting one.'\nComenta estos dos aspectos y añade uno propio:\n1. money (el dinero)\n2. happiness (la felicidad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· CARTA DE SOLICITUD (letter of application) para un empleo de verano: registro formal, destaca tus cualidades.\n· ARTÍCULO: 'The perfect job' — describe cómo sería tu trabajo ideal y por qué.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: After twenty years as a teacher, I've decided to retrain as a therapist. Two. Man: The salary's good, but honestly the workload is crushing me. Three. Woman: I was offered a promotion, but I turned it down — I didn't want the extra stress. Four. Man: Being self-employed means freedom, but there's no sick pay and no security. Five. Woman: My new manager actually listens to us; it's transformed the whole team. Six. Man: I applied for six jobs and finally got the one I really wanted. Seven. Woman: I work to live, not to live to work — my job is just a means to an end. Eight. Man: This time next year, I'll have retired and be travelling the world.", [
      mc("1. What has the woman decided to do?", ["Keep teaching.", "Retrain as a therapist.", "Retire."], 1, "'retrain as a therapist'."),
      mc("2. What is the man's problem?", ["Low pay.", "A crushing workload.", "No colleagues."], 1, "'the workload is crushing me'."),
      mc("3. Why did the woman turn down the promotion?", ["Low pay.", "She didn't want the extra stress.", "She's leaving."], 1, "'I didn't want the extra stress'."),
      mc("4. What does the man say about self-employment?", ["It's easy.", "Freedom but no sick pay or security.", "It's badly paid."], 1, "'freedom, but there's no sick pay and no security'."),
      mc("5. What has the new manager done?", ["Cut the team.", "Transformed the team by listening.", "Raised salaries."], 1, "'actually listens to us; it's transformed the whole team'."),
      mc("6. How many jobs did the man apply for?", ["One.", "Six.", "Sixteen."], 1, "'I applied for six jobs'."),
      mc("7. What is the woman's attitude to work?", ["Live to work.", "Work to live — a means to an end.", "Loves her job."], 1, "'I work to live, not to live to work'."),
      mc("8. What will the man be doing next year?", ["Still working.", "Retired and travelling.", "Applying for jobs."], 1, "'I'll have retired and be travelling'."),
    ]),

    ...speakingParts({ p1: "a qué te dedicas o te gustaría dedicarte, y qué valoras más en un trabajo", p2: "dos entornos de trabajo (una oficina moderna en equipo y alguien trabajando solo desde casa): compáralos y di cuál preferirías", p3: "qué hace bueno a un trabajo (el sueldo, el ambiente, la seguridad, la flexibilidad, la utilidad para la sociedad): comentadlo y elegid lo más importante", p4: "el mundo del trabajo: si es mejor un empleo seguro o emocionante, si el trabajo define quiénes somos y cómo está cambiando la forma de trabajar" }),

    SUMMARY("Resumen del Día 51", [
      "P1 (mc cloze): colocaciones/phrasal verbs, lee toda la frase. P2 (open cloze): una palabra gramatical, nunca en blanco.",
      "P3 (word formation): decide clase de palabra y positivo/negativo. P4 (transformations): 2–5 palabras, no cambies la key word, identifica la estructura.",
      "Vocabulario del trabajo. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 52", "Haz una P4 completa (6 transformaciones) contando las palabras. Repasa las flashcards. Mañana: estrategia de Reading (P5–P7)."),
  ],
};

// ───────────────────────── DÍA 52 ─────────────────────────
const DAY52 = {
  title: "Día 52 — Estrategia de Reading (Partes 5–7) · Las entrevistas y el CV",
  description: "Técnica para la comprensión detallada (P5), el gapped text (P6) y el multiple matching (P7). Vocabulario de entrevistas y CV. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Aplicar una estrategia clara a las tres partes de comprensión lectora.",
    summary: "Estrategia Reading P5–P7; entrevistas/CV; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["elegir por 'palabra igual' sin comprender (distractores).", "no fijarse en referencias/conectores en el gapped text.", "no subrayar en el multiple matching."],
    reviewPrompts: ["¿Cómo se detecta la frase que va en un hueco del gapped text?", "¿Por qué es peligroso elegir la opción con la misma palabra que el texto?"],
  },
  items: [
    TEXT("🎯 Estrategia (2/4). Hoy READING (P5–P7): la comprensión detallada, el texto con huecos y el emparejamiento. Vocabulario: las ENTREVISTAS y el CV."),
    GRAMMAR("Estrategia — Reading Partes 5–7", `PARTE 5 (multiple-choice reading, 6 preguntas): texto largo + 6 preguntas de 4 opciones, EN ORDEN. Lee el texto una vez para captar la idea; luego, pregunta a pregunta, localiza la parte relevante y léela con cuidado. La respuesta está en el texto, no en tu opinión. ⚠️ Ojo con los DISTRACTORES: la opción que repite una palabra del texto suele ser trampa; la correcta suele PARAFRASEAR.
PARTE 6 (gapped text, 6 huecos + 7 frases, sobra 1): se han quitado 6 frases de un texto. Debes recolocarlas. La clave son las PISTAS DE COHESIÓN: pronombres (this, they, it), conectores (however, as a result), referencias temporales y de contenido ANTES y DESPUÉS del hueco. Lee lo que rodea el hueco y busca la frase que "encaje" con ambos lados. Comprueba que la que sobra no encaja en ninguno.
PARTE 7 (multiple matching, 10 preguntas): varias secciones cortas (o una dividida) A–D/E/F. Lee primero las PREGUNTAS, subraya la idea clave, y luego escanea los textos buscando ESA idea (parafraseada). Una sección puede usarse más de una vez.
⚠️ En todas: la respuesta se apoya SIEMPRE en el texto. Si no lo justificas con una frase concreta, dudas.`),
    TIP("Truco de oro", "P5: tras leer las 4 opciones, vuelve al texto y busca la frase exacta que confirma UNA y descarta las otras tres. P6: si un hueco te cuesta, deja el más fácil primero; al final solo queda una opción. P7: subraya la palabra clave de cada pregunta ANTES de mirar los textos."),
    WARN("Errores típicos del hispanohablante", "· P5: 'suena parecido' no basta — busca la paráfrasis exacta, no la palabra repetida.\n· P6: no elijas por tema; elige por la conexión gramatical (this/these/however).\n· P7: no leas los textos enteros primero — es más rápido buscar cada pregunta.\n· Gestiona el tiempo: ~1 hora 15 min para 7 partes."),
    grammarEx("Reading — Estrategia aplicada (pistas de cohesión)", "Identifica la pista que resuelve cada caso.", [
      mc("Gapped text: the sentence before ends '…several problems.' The gap is followed by 'The first of these was cost.' The missing sentence probably…", ["introduces the problems", "changes topic", "is a question"], 0, "'these' refers back to the problems."),
      mc("Which word signals the missing sentence gives a CONTRAST?", ["therefore", "however", "similarly"], 1, "however = contraste."),
      mc("P5: The text says 'she was reluctant to accept.' The correct option probably says she was…", ["eager", "unwilling", "forced"], 1, "reluctant = unwilling (paráfrasis)."),
      mc("P7: The question asks who 'felt underprepared'. Scan for someone who says…", ["'I was ready'", "'I wish I'd practised more'", "'It was easy'"], 1, "underprepared = wish I'd practised more."),
      mc("Gapped text: the gap is followed by 'As a result, sales doubled.' The missing sentence probably describes…", ["a cause", "a question", "a place"], 0, "'As a result' → the sentence gives the cause."),
      mc("P5: 'The critics were divided' most likely means the critics…", ["all agreed", "disagreed among themselves", "were silent"], 1, "divided = disagreed."),
      mc("Which pronoun would help you place a sentence about 'the two candidates'?", ["it", "they/both", "he"], 1, "'they/both' refers to two people."),
    ]),
    GRAMMAR("Vocabulario del día — Las entrevistas y el CV", "Léxico de selección de personal (B2)."),
    deck("B2 S11D52 — Entrevistas y CV", [
      ["CV / résumé", "currículum", "Tailor your CV to each job.", "sustantivo", "ˌsiː ˈviː"],
      ["candidate", "candidato/a", "They interviewed six candidates.", "sustantivo", "ˈkændɪdət"],
      ["qualifications", "titulación / cualificaciones", "List your qualifications clearly.", "sustantivo", "ˌkwɒlɪfɪˈkeɪʃnz"],
      ["experience", "experiencia", "She has ten years' experience.", "sustantivo", "ɪkˈspɪəriəns"],
      ["strengths", "puntos fuertes", "Know your strengths and weaknesses.", "sustantivo", "streŋθs"],
      ["reference", "referencia / recomendación", "He gave me an excellent reference.", "sustantivo", "ˈrefrəns"],
      ["shortlist", "preseleccionar / lista de finalistas", "She was shortlisted for the role.", "verbo/sustantivo", "ˈʃɔːtlɪst"],
      ["applicant", "solicitante", "There were 200 applicants.", "sustantivo", "ˈæplɪkənt"],
      ["stand out", "destacar", "Try to stand out from the crowd.", "phrasal verb", "stænd ˈaʊt"],
      ["get on with", "llevarse bien con", "I get on with my coworkers.", "phrasal verb", "ɡet ˈɒn wɪð"],
    ]),
    vocabEx("Vocabulario — Las entrevistas y el CV", "Elige la opción correcta.", [
      mc("A document listing your education and work history is a ___.", ["CV", "reference", "strength"], 0, "CV."),
      mc("A person applying for a job is an ___.", ["applicant", "reference", "qualification"], 0, "applicant."),
      mc("Your good qualities in a job context are your ___.", ["strengths", "references", "shifts"], 0, "strengths."),
      mc("To be chosen for the final group of candidates is to be ___.", ["shortlisted", "retired", "promoted"], 0, "shortlisted."),
      mc("A statement from a former employer about you is a ___.", ["reference", "candidate", "workload"], 0, "reference."),
      mc("To be noticeably better than others is to ___.", ["stand out", "get on", "apply for"], 0, "stand out."),
    ]),

    ...uoe({
      p1: {
        title: "The art of the interview",
        text: "The job interview is a strange and (1)___ ritual. Two strangers meet for half an hour and, on the basis of that brief and artificial encounter, one decides whether to entrust the other with a role that may (2)___ both their futures. It is, when you think about it, a remarkably (3)___ way to make such an important decision, and the research suggests it is far less reliable than we like to imagine. Interviewers, it turns out, are heavily swayed by first impressions, by superficial charm, and by an unconscious (4)___ towards people who remind them of themselves. The candidate who performs best is often not the one who would do the job best, but simply the one who interviews well — a quite different (5)___. Knowing this should change how we approach interviews, from both sides of the desk. For candidates, it is a reminder that the interview is a performance, a skill that can be learned and practised like any (6)___. For employers, it is a warning to look beyond the polished performance and the confident manner, and to find ways of assessing what candidates can actually (7)___, rather than merely how well they talk about it. The best interviewers have learned to distrust their own instincts, knowing that the impressive interviewee and the excellent employee are, all (8)___ often, not the same person at all.",
        q: [
          mc("(1)", ["artificial", "false", "fake", "unreal"], 0, "'a strange and artificial ritual'."),
          mc("(2)", ["shape", "form", "make", "build"], 0, "'may shape both their futures'."),
          mc("(3)", ["crude", "rough", "rude", "raw"], 0, "'a remarkably crude way'."),
          mc("(4)", ["bias", "tendency", "leaning", "slant"], 0, "'an unconscious bias'."),
          mc("(5)", ["thing", "matter", "issue", "point"], 0, "'a quite different thing'."),
          mc("(6)", ["other", "else", "more", "further"], 0, "'like any other'."),
          mc("(7)", ["do", "make", "achieve", "perform"], 0, "'what candidates can actually do'."),
          mc("(8)", ["too", "so", "very", "quite"], 0, "'all too often'."),
        ],
      },
      p2: {
        title: "How to write a CV",
        text: "There is (1)___ shortage of advice about how to write a good CV, much of it contradictory. But a few principles command (2)___ agreement among those who read them for a living. The first is brevity. A CV is not an autobiography; it is a marketing document, and (3)___ should be as short as it can be while still doing its job — ideally no more (4)___ two pages. The second principle is relevance. Every CV should be tailored to the specific job (5)___ which it is being sent, emphasising the experience and skills that particular role requires and ruthlessly cutting whatever is irrelevant. The third is clarity. A busy recruiter may spend less (6)___ a minute on each CV, so the most important information must leap off the page. Bury your best qualification in a dense paragraph and it (7)___ never be seen. And the fourth principle, too often forgotten, is honesty. It is tempting to exaggerate, but the risks far outweigh the rewards; a lie discovered, even years later, can destroy a career. Follow these principles and your CV will do (8)___ it is supposed to do: not get you the job, which is the interview's task, but get you through the door.",
        q: [
          fb("(1)", ["no"], "'There is no shortage'."),
          fb("(2)", ["general", "wide", "broad"], "'command general agreement'."),
          fb("(3)", ["it"], "'it should be as short'."),
          fb("(4)", ["than"], "'no more than two pages'."),
          fb("(5)", ["for", "to"], "'the job for which'."),
          fb("(6)", ["than"], "'less than a minute'."),
          fb("(7)", ["will", "may"], "'it will never be seen'."),
          fb("(8)", ["what"], "'do what it is supposed to do'."),
        ],
      },
      p3: {
        title: "The confidence trap",
        text: "In interviews, as in life, confidence is widely regarded as a great (1)___. We admire the candidate who walks in, looks us in the eye, and speaks with easy (2)___. And rightly so, up to a point: confidence is genuinely useful, and its absence can hold able people back. But there is a hidden danger in our (3)___ of confidence, one that both interviewers and candidates would do well to understand. The problem is that confidence and (4)___ do not always go together. Some of the most confident people are, in fact, among the least competent — a phenomenon so well documented that psychologists have given it a name. Blissfully (5)___ of how much they do not know, such people radiate a certainty that more knowledgeable people, all too aware of the complexities, often (6)___. The genuine expert hedges, qualifies and admits uncertainty, while the confident fool speaks in bold, simple, (7)___ terms. In an interview, it is the fool who impresses. This is why wise employers have learned to be (8)___ of pure confidence, and to value instead the quieter, more thoughtful quality of genuine competence, which does not always announce itself so loudly.",
        items: [
          { root: "advantage", accepted: ["advantage"], hint: "'a great advantage' (sustantivo)." },
          { root: "assure", accepted: ["assurance"], hint: "'easy assurance' → assurance." },
          { root: "admire", accepted: ["admiration"], hint: "'our admiration of confidence' → admiration." },
          { root: "compete", accepted: ["competence"], hint: "'confidence and competence' → competence." },
          { root: "aware", accepted: ["unaware"], hint: "'blissfully unaware' → unaware." },
          { root: "lack", accepted: ["lack"], hint: "'often lack' (verbo)." },
          { root: "convince", accepted: ["convincing"], hint: "'bold… convincing terms' → convincing." },
          { root: "suspect", accepted: ["suspicious"], hint: "'be suspicious of pure confidence' → suspicious." },
        ],
      },
      p4: {
        title: "Transformaciones — entrevistas y selección",
        items: [
          { s1: "They interviewed twelve candidates for the post.", key: "WERE", s2: "Twelve candidates ___ for the post.", accepted: ["were interviewed"], explanation: "pasiva: were interviewed." },
          { s1: "'I have plenty of experience,' she claimed.", key: "HAD", s2: "She claimed that she ___ plenty of experience.", accepted: ["had"], explanation: "reported: have→had." },
          { s1: "It's a good idea to tailor your CV to each job.", key: "SHOULD", s2: "You ___ your CV to each job.", accepted: ["should tailor"], explanation: "should (consejo)." },
          { s1: "He didn't get the job because he lacked experience.", key: "DUE", s2: "He didn't get the job ___ of experience.", accepted: ["due to a lack", "due to his lack"], explanation: "due to + sustantivo." },
          { s1: "She was more impressive than any other candidate.", key: "MOST", s2: "She was ___ candidate.", accepted: ["the most impressive"], explanation: "superlativo." },
          { s1: "'Why don't you mention your language skills?' he said.", key: "SUGGESTED", s2: "He ___ my language skills.", accepted: ["suggested mentioning", "suggested I mention"], explanation: "suggest + -ing/that." },
        ],
      },
      p5: {
        title: "The interview that changed the rules",
        text: "For most of its history, one of the world's largest and most admired technology companies hired its staff in much the same way as everyone else: by studying candidates' qualifications, checking their references, and, above all, by interviewing them. Interviews were considered the heart of the process, the moment when experienced managers could size up a candidate and judge, from that brief encounter, whether they had what it took. The company's interviewers prided themselves on their ability to spot talent, and few doubted that the process worked.\n\nThen, some years ago, the company did something unusual. Blessed with vast amounts of data about its own employees, it decided to test, rigorously and scientifically, whether its hallowed hiring methods actually worked. It went back through years of records and compared how candidates had performed in their interviews with how well they had subsequently done in the job. The results were deeply unsettling. There was, it turned out, almost no relationship whatsoever between how well someone interviewed and how good an employee they became. The interviewers' confident judgements, it seemed, had been very little better than random.\n\nThis was an uncomfortable discovery, but the company, to its credit, did not ignore it. If traditional interviews did not predict performance, it reasoned, then it needed to find something that did. The data pointed to some surprising conclusions. Elite university degrees, it emerged, mattered far less than everyone assumed. So did the clever, tricky puzzle questions the company had once been famous for asking, which turned out to measure nothing useful at all. What did predict success were things that traditional interviews had largely ignored: the ability to learn, to collaborate, and to lead without clinging to authority.\n\nArmed with these findings, the company overhauled its entire approach to hiring. Out went the reliance on gut feeling and the clever puzzles; in came structured interviews, in which every candidate was asked the same carefully designed questions, and their answers scored against consistent criteria. It was less glamorous than the old method, and it stripped interviewers of much of their cherished autonomy. But it had one overwhelming advantage over what had gone before: unlike the confident judgements of experienced managers, it actually worked.\n\nThe company's experience carries a lesson that extends far beyond hiring. We are all, in our various ways, deeply attached to our own judgement, convinced that we can read people, situations and problems with an accuracy that we rarely stop to test. The uncomfortable truth, as this story suggests, is that our confidence in our own judgement is often wildly misplaced. The willingness to test our beliefs against evidence, and to abandon them when the evidence demands it — however cherished, however flattering to our sense of our own abilities — is one of the rarest and most valuable qualities there is. It was not the company's cleverness that set it apart, but its humility: its readiness to discover that it had been getting one of the most important things it did completely wrong.",
        q: [
          mc("How did the company traditionally hire staff?", ["By exam.", "By qualifications, references and, above all, interviews.", "At random.", "By recommendation only."], 1, "'by interviewing them… the heart of the process'."),
          mc("What did the company decide to test?", ["Its products.", "Whether its hiring methods actually worked.", "Its salaries.", "Its offices."], 1, "'whether its hallowed hiring methods actually worked'."),
          mc("What did the data reveal about interviews?", ["They worked perfectly.", "There was almost no link between interview performance and job success.", "They were illegal.", "They were too short."], 1, "'almost no relationship… had been very little better than random'."),
          mc("What actually predicted success?", ["Elite degrees.", "The ability to learn, collaborate and lead.", "Puzzle questions.", "Confidence."], 1, "'the ability to learn, to collaborate, and to lead'."),
          mc("How did the company change its approach?", ["It stopped interviewing.", "It introduced structured interviews with consistent questions and criteria.", "It hired at random.", "It kept the puzzles."], 1, "'in came structured interviews… scored against consistent criteria'."),
          mc("What quality set the company apart, according to the writer?", ["Its cleverness.", "Its humility — testing its beliefs against evidence.", "Its wealth.", "Its size."], 1, "'not the company's cleverness that set it apart, but its humility'."),
        ],
      },
      p6: {
        title: "The problem with first impressions",
        text: "We form our first impression of a person astonishingly fast — within, research suggests, a tenth of a second of seeing their face. (1)___ In that fraction of a moment, before they have said a word, we have already decided whether we find them trustworthy, likeable and competent.\n\nThis remarkable speed is a legacy of our evolution. (2)___ For our ancestors, the ability to judge instantly whether a stranger was friend or foe could mean the difference between life and death.\n\nThe trouble is that these lightning-fast judgements, so useful on the ancient savannah, are hopelessly unreliable in the modern world. (3)___ We judge a person's competence from the shape of their jaw, their honesty from the symmetry of their face — characteristics that tell us precisely nothing about their actual qualities.\n\nWorse still, these snap judgements are remarkably difficult to shift. (4)___ Once we have decided that someone is trustworthy or shifty, clever or dim, we tend to interpret everything they subsequently do in the light of that initial impression.\n\nUnderstanding all this matters, especially in situations like job interviews where so much hangs on first impressions. (5)___ If we know that our instant judgements are unreliable, we can consciously discount them, and force ourselves to look at the actual evidence. (6)___ The first step towards judging people fairly is realising how unfairly we are inclined to judge them.",
        options: [
          "It happens far faster than any conscious thought.",              // A -> gap 1
          "Snap judgements once had genuine survival value.",              // B -> gap 2
          "We read deep qualities from meaningless surface features.",     // C -> gap 3
          "First impressions, once formed, are stubbornly persistent.",    // D -> gap 4
          "This knowledge gives us a way to correct for our biases.",      // E -> gap 5
          "Awareness of the flaw is the beginning of fairness.",           // F -> gap 6
          "First impressions are always completely accurate.",             // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ocurre antes que el pensamiento."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: tenían valor de supervivencia."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: leemos lo profundo en lo superficial."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: persisten tercamente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: podemos corregir los sesgos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la conciencia es el principio."),
        ],
      },
      p7: {
        title: "Four people remember a job interview",
        text: "Read what four people say about a memorable job interview.\n\nA) NADIA: I was so nervous I could barely speak. I'd prepared answers to obvious questions, but they asked me things I hadn't expected, and I froze. I was sure I'd failed. To my astonishment, they offered me the job — apparently they liked that I'd admitted when I didn't know something, rather than bluffing. Honesty, it turned out, mattered more than polish.\n\nB) TOM: I went in far too confident. I'd done well in every interview before, so I barely prepared, assuming my charm would carry me through. It didn't. I rambled, I hadn't researched the company, and I could see them losing interest. I didn't get it, and I deserved not to. It taught me never to coast on confidence again.\n\nC) PRIYA: The interviewer spent the whole time talking about herself and barely asked me anything. I left thinking it had gone terribly, that I'd learned nothing about the job and shown nothing of myself. But I got it, and later realised she'd simply been a poor interviewer. It made me distrust the whole process — so much depends on luck and the person opposite you.\n\nD) SAM: What struck me was how structured it was. Every candidate got exactly the same questions, scored on the same scale — no chit-chat, no tricks. At first it felt cold, almost robotic. But afterwards I appreciated it: I'd been judged on my answers, not on whether the interviewer happened to like me. It felt, for once, genuinely fair.",
        q: [
          mc("Who was offered the job after admitting what they didn't know?", ["A", "B", "C", "D"], 0, "Nadia: 'they liked that I'd admitted when I didn't know'."),
          mc("Who failed through overconfidence and lack of preparation?", ["A", "B", "C", "D"], 1, "Tom: 'far too confident… barely prepared'."),
          mc("Who came to distrust the whole interview process?", ["A", "B", "C", "D"], 2, "Priya: 'It made me distrust the whole process'."),
          mc("Who appreciated a highly structured, consistent interview?", ["A", "B", "C", "D"], 3, "Sam: 'how structured it was… genuinely fair'."),
          mc("Who says honesty mattered more than polish?", ["A", "B", "C", "D"], 0, "Nadia: 'Honesty… mattered more than polish'."),
          mc("Who learned never to 'coast on confidence' again?", ["A", "B", "C", "D"], 1, "Tom: 'never to coast on confidence again'."),
          mc("Whose interviewer talked mostly about herself?", ["A", "B", "C", "D"], 2, "Priya: 'the interviewer spent the whole time talking about herself'."),
          mc("Who was judged on their answers, not on being liked?", ["A", "B", "C", "D"], 3, "Sam: 'judged on my answers, not on whether the interviewer… liked me'."),
          mc("Who froze when asked unexpected questions?", ["A", "B", "C", "D"], 0, "Nadia: 'they asked me things I hadn't expected, and I froze'."),
          mc("Who felt the outcome depended too much on luck?", ["A", "B", "C", "D"], 2, "Priya: 'so much depends on luck'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Job interviews are a fair way to choose the best candidate.'\nComenta estos dos aspectos y añade uno propio:\n1. first impressions (las primeras impresiones)\n2. real skills (las habilidades reales)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to succeed in a job interview' — da consejos prácticos a otros jóvenes.\n· EMAIL a un/a amigo/a contándole cómo te fue en una entrevista importante: usa un registro informal.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una asesora profesional, Elena Ford, dando consejos sobre entrevistas (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a careers adviser called Elena Ford giving advice on job interviews. Elena Ford: Let me start with the single most common mistake candidates make: they don't research the company. Turning up knowing nothing about the organisation is the fastest way to fail. So my first rule is always: do your homework. Second, and this surprises people, is that you should prepare questions to ask them. An interview is a two-way conversation, and asking thoughtful questions shows genuine interest. Third, when they ask about your weaknesses — and they will — be honest. Everyone can see through the old trick of naming a strength disguised as a weakness. A real, small weakness, with what you're doing about it, is far more convincing. My fourth point is about nerves. A little nervousness is fine, even helpful; it shows you care. What matters is not to let it stop you thinking clearly. And finally, the thing candidates forget most often: give specific examples. Don't just say you're a good team player — describe a time you actually worked well in a team. Evidence always beats assertion. Remember that, and you'll already be ahead of most of the people you're competing against.", [
      fb("The most common mistake is not doing ___ on the company.", ["research", "homework"], "'they don't research the company'."),
      fb("You should always prepare ___ to ask them.", ["questions"], "'prepare questions to ask them'."),
      fb("An interview is a ___ conversation.", ["two-way"], "'a two-way conversation'."),
      fb("When asked about weaknesses, you should be ___.", ["honest"], "'be honest'."),
      fb("A little nervousness shows that you ___.", ["care"], "'it shows you care'."),
      fb("Don't let nerves stop you ___ clearly.", ["thinking"], "'not to let it stop you thinking clearly'."),
      fb("Instead of just claiming skills, give specific ___.", ["examples"], "'give specific examples'."),
      fb("Evidence always beats ___.", ["assertion"], "'Evidence always beats assertion'."),
    ]),

    ...speakingParts({ p1: "si has hecho alguna entrevista, cómo te sentiste y qué crees que se valora más", p2: "dos momentos de una selección (alguien preparando su CV en casa y una entrevista cara a cara): compáralos y especula", p3: "qué es lo más importante para conseguir un empleo (un buen CV, la experiencia, la titulación, causar buena impresión, tener contactos): comentadlo y elegid lo decisivo", p4: "la selección de personal: si las entrevistas son justas, si las primeras impresiones engañan y cómo se podría elegir mejor a los candidatos" }),

    SUMMARY("Resumen del Día 52", [
      "P5 (reading MC): la respuesta está en el texto; cuidado con los distractores que repiten palabras; busca la paráfrasis.",
      "P6 (gapped text): usa pistas de cohesión (this/these/however/as a result). P7 (multiple matching): lee las preguntas primero y escanea.",
      "Vocabulario de entrevistas y CV. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 53", "Haz un gapped text (P6) justificando cada hueco con su pista. Repasa las flashcards. Mañana: estrategia de Writing."),
  ],
};

// ───────────────────────── DÍA 53 ─────────────────────────
const DAY53 = {
  title: "Día 53 — Estrategia de Writing (Partes 1 y 2) · El dinero y los negocios",
  description: "Técnica para el essay obligatorio (P1) y las tareas de la P2 (article, email/letter, review, report): planificar, estructurar, conectar y revisar. Vocabulario de dinero y negocios. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Planificar y estructurar cada tarea de Writing según su formato y registro.",
    summary: "Estrategia Writing P1–P2; dinero/negocios; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["essay sin plan ni párrafos claros.", "registro equivocado según la tarea.", "no responder a los dos puntos + el propio."],
    reviewPrompts: ["¿Cuántas palabras tiene el essay? ¿Y su estructura de párrafos?", "¿Qué registro lleva un article? ¿Y un report?"],
  },
  items: [
    TEXT("🎯 Estrategia (3/4). Hoy WRITING: cómo planificar y estructurar el essay (P1) y cada tarea de la P2. Vocabulario: el DINERO y los NEGOCIOS."),
    GRAMMAR("Estrategia — Writing Partes 1 y 2", `PARTE 1 (essay OBLIGATORIO, 140–190 palabras): te dan una afirmación + 2 puntos + un tercero propio. Estructura clásica de 4 párrafos:
1) Introducción: reformula el tema y anuncia tu postura.
2) Párrafo del punto 1 (con razón y ejemplo).
3) Párrafo del punto 2 (con razón y ejemplo). Incluye TU idea propia aquí o en un 4º breve.
4) Conclusión: reafirma tu opinión.
Registro neutro-formal, conectores (Firstly, Moreover, However, In conclusion), sin contracciones.
PARTE 2 (elige UNA, 140–190 palabras). Cada formato tiene su registro y rasgos:
· ARTICLE: título atractivo, tono personal y ameno, preguntas al lector, para una revista/web.
· EMAIL/LETTER: informal (a un amigo: Hi…, Best wishes) o formal (a una empresa: Dear Sir/Madam, Yours faithfully).
· REVIEW: describe + valora + recomienda (o no); adjetivos ricos.
· REPORT: formal e impersonal, con ENCABEZADOS (Introduction, Findings, Recommendation); hacer recomendaciones.
PROCESO SIEMPRE: 1) planifica 5 min (ideas + estructura), 2) escribe, 3) revisa 3 min (gramática, ortografía, nº de palabras, que respondes a TODO).
⚠️ Responde a los DOS puntos + tu idea. Cuenta las palabras. Adapta el registro a la tarea.`),
    TIP("Truco de oro", "Aprende de memoria un 'esqueleto' de conectores para el essay (Firstly… / Another important point is… / However, some people argue… / In conclusion…). Rellenar ese esqueleto con las ideas del día te da un essay sólido en minutos."),
    WARN("Errores típicos del hispanohablante", "· Essay sin párrafos ni conectores = nota baja aunque la gramática esté bien.\n· Registro: un article NO es un essay (más personal); un report SÍ lleva encabezados.\n· No traduzcas del español ('Regarding to' ❌ → 'Regarding' / 'As for' ✅).\n· Pásate/quédate corto de palabras te penaliza: 140–190."),
    grammarEx("Writing — Estrategia aplicada (registro y conectores)", "Elige la opción adecuada a cada tarea.", [
      mc("Essay opening: best first sentence?", ["Hi! Let me tell you about money.", "The question of whether money brings happiness is widely debated.", "money is good and bad."], 1, "essay = neutro-formal."),
      mc("Which connector introduces a CONTRAST in an essay?", ["Moreover", "However", "Firstly"], 1, "However = contraste."),
      mc("Report on office spending — best heading style?", ["Dear Sir, I write to…", "Introduction / Findings / Recommendations", "Hi guys, so…"], 1, "report lleva encabezados."),
      mc("Article title — most engaging?", ["Report on money.", "Is Money Really the Key to Happiness?", "Money essay 2."], 1, "article = título atractivo."),
      mc("Formal letter closing (Dear Sir/Madam):", ["Cheers,", "Yours faithfully,", "Love,"], 1, "Yours faithfully."),
      mc("Review — best sentence?", ["It exists.", "Although the plot drags at times, the acting is superb, and I'd recommend it.", "I bought a ticket."], 1, "review: valora y recomienda."),
      fb("Essay conclusion connector: 'In ___ , I believe that…' ", ["conclusion"], "In conclusion."),
    ]),
    GRAMMAR("Vocabulario del día — El dinero y los negocios", "Léxico de dinero y negocios (B2)."),
    deck("B2 S11D53 — Dinero y negocios", [
      ["profit", "beneficio / ganancia", "The business made a large profit.", "sustantivo", "ˈprɒfɪt"],
      ["afford", "permitirse (económicamente)", "We can't afford a new car.", "verbo", "əˈfɔːd"],
      ["invest", "invertir", "She invested in a small startup.", "verbo", "ɪnˈvest"],
      ["budget", "presupuesto", "Stick to a monthly budget.", "sustantivo", "ˈbʌdʒɪt"],
      ["expenses", "gastos", "Travel expenses are reimbursed.", "sustantivo", "ɪkˈspensɪz"],
      ["broke", "sin blanca / arruinado", "I'm completely broke this month.", "adjetivo", "brəʊk"],
      ["entrepreneur", "emprendedor/a", "She's a successful entrepreneur.", "sustantivo", "ˌɒntrəprəˈnɜː"],
      ["wealthy", "adinerado/a", "They come from a wealthy family.", "adjetivo", "ˈwelθi"],
      ["debt", "deuda", "He's struggling to pay off his debts.", "sustantivo", "det"],
      ["save up", "ahorrar (para algo)", "We're saving up for a holiday.", "phrasal verb", "seɪv ˈʌp"],
    ]),
    vocabEx("Vocabulario — El dinero y los negocios", "Elige la opción correcta.", [
      mc("The money a business earns after costs is ___.", ["profit", "debt", "budget"], 0, "profit."),
      mc("Money that you owe to someone is a ___.", ["debt", "profit", "budget"], 0, "debt."),
      mc("A person who starts their own business is an ___.", ["entrepreneur", "expense", "investor"], 0, "entrepreneur."),
      mc("To have enough money for something is to ___ it.", ["afford", "invest", "save"], 0, "afford."),
      mc("Having no money at all, informally, is being ___.", ["broke", "wealthy", "in profit"], 0, "broke."),
      mc("A plan of how to spend your money is a ___.", ["budget", "profit", "debt"], 0, "budget."),
    ]),

    ...uoe({
      p1: {
        title: "Does money make us happy?",
        text: "Few questions have been studied as (1)___ as the relationship between money and happiness, and the findings are more interesting than either the cynics or the romantics would have us believe. It is simply not true, as some like to claim, that money cannot buy happiness. For people living in poverty, more money (2)___ makes an enormous difference, lifting the crushing daily stress of not being able to (3)___ the basics. Up to a certain point, the evidence is clear: more money really does make people happier. But — and this is the fascinating part — that effect does not (4)___ for ever. Once people have enough to live comfortably, further increases in wealth make surprisingly (5)___ difference to their happiness. The billionaire is not, on average, noticeably happier than the comfortably-off professional. What seems to matter, beyond a certain (6)___, is not how much we have in absolute terms, but how we spend it, how we compare with those around us, and whether we have the things that money cannot buy at all: good relationships, meaningful work, health. The lesson is not that money is unimportant, which would be foolish, but that its importance has (7)___. It can rescue us from the genuine misery of poverty, but it cannot, on its own, deliver the deeper happiness we (8)___ seek. For that, we must look elsewhere.",
        q: [
          mc("(1)", ["thoroughly", "deeply", "widely", "fully"], 0, "'studied as thoroughly'."),
          mc("(2)", ["really", "truly", "genuinely", "actually"], 0, "'more money really makes a difference'."),
          mc("(3)", ["afford", "buy", "manage", "meet"], 0, "'afford the basics'."),
          mc("(4)", ["last", "continue", "hold", "remain"], 0, "'does not last for ever'."),
          mc("(5)", ["little", "small", "slight", "minor"], 0, "'surprisingly little difference'."),
          mc("(6)", ["point", "stage", "level", "degree"], 0, "'beyond a certain point'."),
          mc("(7)", ["limits", "bounds", "ends", "edges"], 0, "'its importance has limits'."),
          mc("(8)", ["really", "truly", "deeply", "genuinely"], 0, "'the happiness we really seek'."),
        ],
      },
      p2: {
        title: "The startup dream",
        text: "There is a powerful modern myth, especially seductive to the young, that the surest route to wealth and fulfilment is to start (1)___ own business. The image is a romantic one: the brilliant young founder, working (2)___ all hours in a garage, who defies the doubters and builds a fortune from nothing. It is an inspiring story, and occasionally a true one. But it is also, as a guide to real life, (3)___ misleading. For every startup that succeeds spectacularly, there are hundreds, (4)___ thousands, that fail, taking their founders' savings, and often their health and relationships, down (5)___ them. The reality of entrepreneurship, for most who attempt it, is not glamour but relentless stress, financial insecurity and long hours for little or (6)___ reward. This is not to say that no one should start a business; the world needs entrepreneurs, and for the right person, with the right idea, it can be immensely rewarding. But the myth does real harm when it persuades people that starting a business is a guaranteed path to riches, or that those (7)___ businesses fail have simply not tried hard enough. Most business failure has (8)___ to do with the character of the founder and everything to do with the brutal, unforgiving mathematics of the marketplace.",
        q: [
          fb("(1)", ["your", "one's"], "'start your own business'."),
          fb("(2)", ["at"], "'working at all hours'."),
          fb("(3)", ["deeply", "highly", "seriously"], "'deeply misleading'."),
          fb("(4)", ["even"], "'hundreds, even thousands'."),
          fb("(5)", ["with"], "'down with them'."),
          fb("(6)", ["no"], "'little or no reward'."),
          fb("(7)", ["whose"], "'those whose businesses fail'."),
          fb("(8)", ["nothing", "little"], "'has nothing to do with the character'."),
        ],
      },
      p3: {
        title: "The psychology of spending",
        text: "Why is it so hard to save money, even when we (1)___ know we should? The answer lies deep in human psychology. We are, it turns out, extremely poorly (2)___ designed for the modern world of easy credit and endless temptation. For most of human history, the sensible thing to do with any surplus was to consume it (3)___, since it could not easily be stored. Our instincts, shaped by that world, still pull us powerfully towards immediate (4)___ rather than future security. Add to this the (5)___ cleverness of modern marketing, designed by armies of psychologists to overcome our willpower, and it is little wonder that so many people find saving so difficult. Understanding these forces is the first step towards (6)___ them. Those who save successfully rarely do so through sheer willpower, which is notoriously unreliable. Instead, they design their lives to make saving (7)___: they set up automatic transfers, they avoid temptation, they make the sensible choice the easy one. The secret of financial self-control, in other words, is not to have more willpower than everyone else, but to rely on it (8)___.",
        items: [
          { root: "perfect", accepted: ["perfectly"], hint: "'we perfectly well know' → perfectly." },
          { root: "suit", accepted: ["suited"], hint: "'poorly suited' → suited." },
          { root: "immediate", accepted: ["immediately"], hint: "'consume it immediately' → immediately." },
          { root: "satisfy", accepted: ["satisfaction"], hint: "'immediate satisfaction' → satisfaction." },
          { root: "extreme", accepted: ["extreme"], hint: "'the extreme cleverness' (adjetivo)." },
          { root: "resist", accepted: ["resisting"], hint: "'towards resisting them' → resisting." },
          { root: "ease", accepted: ["easy", "easier"], hint: "'make saving easy/easier'." },
          { root: "little", accepted: ["less"], hint: "'rely on it less' → less." },
        ],
      },
      p4: {
        title: "Transformaciones — el dinero",
        items: [
          { s1: "We don't have enough money for a holiday.", key: "AFFORD", s2: "We ___ a holiday.", accepted: ["can't afford"], explanation: "can't afford + sustantivo." },
          { s1: "She invested in the company, and later it succeeded.", key: "WHICH", s2: "She invested in the company, ___ later succeeded.", accepted: ["which"], explanation: "relativa explicativa." },
          { s1: "It's a pity I spent all my savings.", key: "WISH", s2: "I ___ all my savings.", accepted: ["wish I hadn't spent"], explanation: "wish + past perfect (arrepentimiento)." },
          { s1: "If they had budgeted better, they wouldn't be in debt.", key: "BUDGETED", s2: "They are in debt because they ___ better.", accepted: ["didn't budget", "hadn't budgeted"], explanation: "causa en pasado." },
          { s1: "The business made more profit this year than last.", key: "AS", s2: "Last year the business didn't make ___ this year.", accepted: ["as much profit as"], explanation: "as much… as." },
          { s1: "'Save some money every month,' she advised me.", key: "ADVISED", s2: "She ___ some money every month.", accepted: ["advised me to save"], explanation: "advise sb to do." },
        ],
      },
      p5: {
        title: "The lottery winners who lost everything",
        text: "It is one of the most persistent of all human fantasies: the dream of a sudden, life-changing windfall — an unexpected inheritance, a spectacular investment, or, most alluring of all, a winning lottery ticket. We imagine that if only a great deal of money were to fall into our laps, all our problems would be solved and we would live, at last, happily ever after. The reality, as a growing body of research reveals, is often startlingly different, and a good deal darker.\n\nStudies of lottery winners have produced findings that most people find hard to believe. A surprising number of those who win enormous sums end up, within a few years, no happier than they were before — and a disturbing proportion end up considerably worse off, not merely financially but in every aspect of their lives. Fortunes are squandered with astonishing speed; relationships collapse under the strain; friends and relatives, suddenly transformed into supplicants, become sources of conflict rather than joy. Some winners have described their win, in retrospect, as the worst thing that ever happened to them.\n\nHow can this be? How can the very thing we all dream of turn out, so often, to be a curse? Part of the answer lies in the psychology of sudden wealth. Money that is won rather than earned brings none of the skills, habits and hard-won wisdom that normally accompany the slow accumulation of a fortune. The lottery winner is suddenly wealthy but no wiser, possessed of resources they have no idea how to manage. Unaccustomed to handling large sums, and besieged by requests, temptations and bad advice, many make catastrophic decisions with a speed that leaves observers aghast.\n\nBut there is a deeper reason too, one that reaches to the very heart of what makes human beings happy. A great deal of our satisfaction in life comes not from having things but from working towards them — from the striving, the progress, the sense of earning our rewards through our own efforts. A sudden windfall short-circuits all of this. It hands us, at a stroke, what we would otherwise have spent years working towards, and in doing so robs us of the very process that gives such achievements their meaning. The winner has the money but has been cheated, in a sense, of the journey — and it is often the journey, not the destination, that we most need.\n\nNone of this, of course, means that money does not matter, or that we should pity the rich. It is simply a reminder of a truth we find perpetually difficult to absorb: that the things we imagine will make us happy often do not, and that happiness is a subtler, more elusive quarry than our fantasies of sudden wealth suggest. The lottery winners who lost everything are not figures of fun, but a warning — a reminder that what we wish for is not always what we need, and that a life without the dignity of effort may be poorer, in the ways that truly matter, than a life of modest, hard-won sufficiency.",
        q: [
          mc("What common human fantasy does the passage describe?", ["Fame.", "A sudden, life-changing windfall of money.", "Travel.", "Power."], 1, "'the dream of a sudden, life-changing windfall'."),
          mc("What do studies of lottery winners reveal?", ["They're all happy.", "Many end up no happier, and some considerably worse off.", "They get richer.", "Nothing changes."], 1, "'no happier than they were before… considerably worse off'."),
          mc("Why does sudden wealth often cause problems?", ["It's taxed.", "It brings none of the skills and wisdom that earning a fortune normally does.", "It's fake.", "It's illegal."], 1, "'wealthy but no wiser… no idea how to manage'."),
          mc("What 'deeper reason' does the writer give?", ["Money is evil.", "Satisfaction comes from working towards things, which a windfall short-circuits.", "Winners are foolish.", "Luck runs out."], 1, "'satisfaction… comes… from working towards them'."),
          mc("What is 'often the journey, not the destination'?", ["The lottery.", "What we most need for happiness.", "The prize.", "The money."], 1, "'it is often the journey… that we most need'."),
          mc("What are the lottery winners who lost everything, according to the writer?", ["Figures of fun.", "A warning that what we wish for isn't always what we need.", "Simply unlucky.", "Role models."], 1, "'not figures of fun, but a warning'."),
        ],
      },
      p6: {
        title: "The trouble with comparing ourselves",
        text: "It is one of the strangest facts about human happiness that our satisfaction depends far less on what we actually have than on how we compare with those around us. (1)___ A person can be perfectly content with their income until they discover that a colleague earns more, at which point their contentment evaporates.\n\nThis tendency to measure ourselves against others is deeply rooted in human nature. (2)___ Throughout our evolutionary history, our relative position in the group mattered enormously for survival and success.\n\nBut in the modern world, this ancient instinct causes us endless, needless misery. (3)___ Thanks to social media, we now compare ourselves not with our immediate neighbours but with a vast, curated parade of everyone's most glamorous moments.\n\nThe result is a kind of universal dissatisfaction. (4)___ No matter how well we are doing, there is always someone, somewhere, who appears to be doing better.\n\nEscaping this trap is difficult, but not impossible. (5)___ The first step is simply to recognise the comparison for the illusion it so often is, and to remember that we are measuring our messy reality against other people's polished highlights. (6)___ True contentment, in the end, comes not from winning the endless competition, but from stepping out of it altogether.",
        options: [
          "Our happiness is relative, not absolute.",                       // A -> gap 1
          "Status has always been a matter of life and death.",            // B -> gap 2
          "Technology has made the comparison endlessly worse.",           // C -> gap 3
          "Someone will always seem to be ahead of us.",                   // D -> gap 4
          "Awareness of the trap is the way out of it.",                   // E -> gap 5
          "Peace lies in refusing to play the game at all.",               // F -> gap 6
          "People never compare themselves to anyone else.",               // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la felicidad es relativa."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el estatus era vital."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la tecnología lo empeora."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: siempre hay alguien por delante."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ver la trampa es la salida."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la paz está en no jugar."),
        ],
      },
      p7: {
        title: "Four people talk about money",
        text: "Read what four people say about their relationship with money.\n\nA) NADIA: I grew up poor, and it's shaped me completely. I save obsessively, I can't relax about money even now that I have enough, and I feel guilty spending on myself. I know it's irrational, but the fear of being broke again never quite goes away. Money, for me, isn't about luxury; it's about never feeling that helpless again.\n\nB) TOM: Honestly, I'm terrible with money. I earn a decent salary but I'm always broke by the end of the month. I spend on things I don't need, I've never managed to save, and I'm slowly sinking into debt. I know exactly what I should do — budget, save, resist temptation — I just can't seem to actually do it.\n\nC) PRIYA: I made a deliberate choice to earn less and live simply. I turned down promotions, moved somewhere cheaper, and cut my spending right down. People think I've given something up, but it's the opposite — I've bought myself freedom and time. I've never needed much to be happy, and now I have exactly enough.\n\nD) SAM: I started my own business five years ago, and it nearly ruined me. The stress, the insecurity, the months with no income — it was far harder than the glossy startup stories ever admit. It's finally doing well now, and I'm proud of it. But I'd warn anyone romanticising entrepreneurship: it's not the glamorous adventure people imagine.",
        q: [
          mc("Whose attitude to money was shaped by growing up poor?", ["A", "B", "C", "D"], 0, "Nadia: 'I grew up poor, and it's shaped me'."),
          mc("Who admits to being 'terrible with money'?", ["A", "B", "C", "D"], 1, "Tom: 'I'm terrible with money'."),
          mc("Who deliberately chose to earn less and live simply?", ["A", "B", "C", "D"], 2, "Priya: 'a deliberate choice to earn less and live simply'."),
          mc("Who warns against romanticising entrepreneurship?", ["A", "B", "C", "D"], 3, "Sam: 'I'd warn anyone romanticising entrepreneurship'."),
          mc("Who feels guilty spending money on themselves?", ["A", "B", "C", "D"], 0, "Nadia: 'I feel guilty spending on myself'."),
          mc("Who knows what to do with money but can't do it?", ["A", "B", "C", "D"], 1, "Tom: 'I know exactly what I should do… I just can't'."),
          mc("Who says they've 'bought freedom and time'?", ["A", "B", "C", "D"], 2, "Priya: 'I've bought myself freedom and time'."),
          mc("Whose business 'nearly ruined' them at first?", ["A", "B", "C", "D"], 3, "Sam: 'it nearly ruined me'."),
          mc("Who still fears 'being broke again'?", ["A", "B", "C", "D"], 0, "Nadia: 'the fear of being broke again never quite goes away'."),
          mc("Who is slowly sinking into debt despite a decent salary?", ["A", "B", "C", "D"], 1, "Tom: 'slowly sinking into debt'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Money is the most important thing when choosing a job.'\nComenta estos dos aspectos y añade uno propio:\n1. lifestyle (el nivel de vida)\n2. job satisfaction (la satisfacción laboral)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.\n\n👉 Aplica hoy la estructura de 4 párrafos y los conectores.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA (fíjate en el REGISTRO de cada una):\n· REPORT (formal, con encabezados) para tu jefe sobre cómo tu empresa podría ahorrar dinero: Introduction / Findings / Recommendations.\n· ARTICLE (personal y ameno): 'The best thing money ever bought me' — cuéntalo y reflexiona.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de una decisión importante sobre el dinero (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué hicieron. Sobra una opción.\nA) they chose to earn less for a better life\nB) they got into serious debt\nC) they started their own business\nD) they saved for years for one big goal\nE) they gave money away\nF) they made a bad investment", "This is Part Three. You will hear five people talking about an important money decision. Speaker One: I turned down a much better-paid job in the city because it would have meant never seeing my family. Less money, but a life worth living. I've never regretted it for a second. Speaker Two: I put every spare penny aside for eight years to buy a little house by the sea. It meant no holidays, no luxuries, nothing — but the day I got the keys, it was all worth it. Speaker Three: I sank my entire savings into what looked like a brilliant opportunity. A friend swore it couldn't fail. It failed. I lost almost everything, and it took me years to recover. Speaker Four: I quit my safe job to set up on my own. Everyone thought I was reckless. The first two years were terrifying, but now the business is thriving and I'm my own boss. Speaker Five: When my aunt left me some money, I gave most of it to a charity that had helped my brother. People thought I was mad to give away a windfall, but it felt far better than spending it on myself ever could.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 0, "A: 'Less money, but a life worth living'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 3, "D: 'put every spare penny aside for eight years'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 5, "F: 'sank my savings… It failed'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 2, "C: 'set up on my own… my own boss'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 4, "E: 'gave most of it to a charity'."),
    ]),

    ...speakingParts({ p1: "cómo llevas el dinero, si ahorras y para qué te gustaría ahorrar", p2: "dos formas de vivir (una persona con mucho dinero y estrés y otra con menos dinero y más tiempo): compáralas y di cuál elegirías", p3: "qué es lo más sensato con el dinero (ahorrar, invertir, gastarlo en experiencias, montar un negocio, ayudar a otros): comentadlo y elegid lo mejor", p4: "el dinero: si da la felicidad, si es lo más importante al elegir trabajo y por qué nos comparamos tanto con los demás" }),

    SUMMARY("Resumen del Día 53", [
      "Essay (P1): 4 párrafos (intro, punto 1, punto 2 + idea propia, conclusión), neutro-formal, conectores, 140–190 palabras.",
      "P2: adapta el REGISTRO al formato (article personal, report con encabezados, review valora, letter formal/informal). Planifica → escribe → revisa.",
      "Vocabulario de dinero y negocios. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 54", "Escribe un essay completo aplicando la estructura de 4 párrafos y cuéntate las palabras. Repasa las flashcards. Mañana: estrategia de Listening y Speaking."),
  ],
};

// ───────────────────────── DÍA 54 ─────────────────────────
const DAY54 = {
  title: "Día 54 — Estrategia de Listening y Speaking · El éxito y las ambiciones",
  description: "Técnica para las 4 partes de Listening y las 4 partes de Speaking del examen real. Vocabulario del éxito y las ambiciones. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Aplicar una estrategia clara a cada parte de Listening y Speaking.",
    summary: "Estrategia Listening y Speaking; éxito/ambiciones; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["no leer las preguntas antes de escuchar.", "respuestas de una palabra en Speaking P1.", "no interactuar (turn-taking) en Speaking P3."],
    reviewPrompts: ["¿Qué haces en los segundos antes de que empiece cada Listening?", "En Speaking P3, ¿cómo invitas a hablar a tu pareja?"],
  },
  items: [
    TEXT("🎯 Estrategia (4/4). Hoy LISTENING y SPEAKING: cómo afrontar cada parte del examen oral y de comprensión auditiva. Vocabulario: el ÉXITO y las AMBICIONES."),
    GRAMMAR("Estrategia — Listening (4 partes)", `Se oye TODO dos veces. Antes de cada parte, USA los segundos de preparación para LEER las preguntas y subrayar palabras clave. Predice qué tipo de respuesta esperas.
· PARTE 1 (8 extractos, 3 opciones): cada extracto es independiente. Escucha el SENTIDO global; ojo con distractores que mencionan las tres opciones.
· PARTE 2 (sentence completion, 10 huecos): escribe 1–3 palabras EXACTAS que oyes (no parafrasees). La respuesta suele ser un sustantivo/adjetivo concreto. Revisa que encaje gramaticalmente.
· PARTE 3 (multiple matching, 5 hablantes, 8 opciones): empareja cada hablante con una idea. Lee las 8 opciones antes. Cuidado: varias opciones "rozan" lo que dicen; elige la que resume su idea PRINCIPAL.
· PARTE 4 (entrevista, 7 preguntas MC): sigue el hilo de la entrevista. Las preguntas van EN ORDEN. Escucha la actitud y la opinión, no solo los datos.
⚠️ En la 2ª escucha, confirma y rellena lo que te faltó. Nunca dejes huecos en blanco.`),
    GRAMMAR("Estrategia — Speaking (4 partes, en pareja)", `· PARTE 1 (entrevista, ~2 min): preguntas personales. NO respondas con una palabra: da 2–3 frases con una razón o ejemplo.
· PARTE 2 (~1 min tú solo/a): comparas DOS fotos y respondes a una pregunta. Estructura: compara (both.../whereas...) + especula (they might be..., perhaps...) + responde a la pregunta. Habla el minuto entero; si no sabes una palabra, parafrasea.
· PARTE 3 (~3 min, con tu pareja): tarea colaborativa con opciones. INTERACTÚA: da tu opinión, pregunta la suya (What do you think?), reacciona (That's a good point), y al final NEGOCIA una decisión juntos.
· PARTE 4 (~4 min): discusión de preguntas más abstractas relacionadas con la P3. Da opiniones razonadas y matizadas (It depends..., Some people argue...).
Se evalúa: gramática y vocabulario, pronunciación, gestión del discurso e interacción. ⚠️ La INTERACCIÓN en la P3 puntúa: no monopolices ni te quedes callado/a.`),
    TIP("Truco de oro", "Speaking: aprende 'frases puente' para ganar tiempo sin callarte (That's an interesting question… / Well, let me think… / I suppose…). Y en la P2, si te quedas sin ideas antes del minuto, especula sobre los sentimientos de las personas de las fotos."),
    WARN("Errores típicos del hispanohablante", "· Listening P2: escribe lo que OYES, no un sinónimo (te lo cuentan como incorrecto).\n· Speaking P1: respuestas de 'Yes, I do' → amplía siempre.\n· Speaking P3: no decidas solo/a; incluye a tu pareja y llegad a un acuerdo.\n· Pronunciación: cuida los sonidos difíciles (/ɪ/ vs /iː/, la -s final, no añadir 'e-' a 'school/Spain')."),
    grammarEx("Listening & Speaking — Estrategia aplicada (funciones)", "Elige la expresión adecuada a cada función.", [
      mc("Speaking P2 — comparing two photos:", ["I like this.", "Whereas the first photo shows a busy office, the second shows someone working alone.", "This is a photo."], 1, "comparar: Whereas…"),
      mc("Speaking P2 — speculating:", ["It is a man.", "He might be feeling nervous, perhaps because it's his first day.", "There is a man."], 1, "especular: might be…"),
      mc("Speaking P3 — inviting your partner to speak:", ["I'll decide.", "What do you think about this option?", "Be quiet."], 1, "interacción: What do you think?"),
      mc("Speaking P3 — reaching a decision together:", ["I choose this.", "So, shall we agree that this is the best option?", "It doesn't matter."], 1, "negociar: shall we agree…?"),
      mc("Speaking P4 — giving a balanced opinion:", ["It's good.", "It depends. Some people argue money matters most, but personally I value freedom more.", "Yes."], 1, "matizar: It depends…"),
      mc("Speaking P1 — a good extended answer to 'Do you enjoy your studies?':", ["Yes.", "Yes, I do, especially science, because I love solving problems and it feels useful.", "No comment."], 1, "amplía con razón."),
      mc("A 'bridging phrase' to gain thinking time:", ["I don't know.", "That's an interesting question — let me think…", "Next."], 1, "frase puente."),
    ]),
    GRAMMAR("Vocabulario del día — El éxito y las ambiciones", "Léxico del éxito (B2)."),
    deck("B2 S11D54 — Éxito y ambiciones", [
      ["ambition", "ambición", "Her ambition drives her forward.", "sustantivo", "æmˈbɪʃn"],
      ["achieve", "lograr / conseguir", "He achieved all his goals.", "verbo", "əˈtʃiːv"],
      ["succeed", "tener éxito", "She succeeded against the odds.", "verbo", "səkˈsiːd"],
      ["goal", "meta / objetivo", "Set yourself a clear goal.", "sustantivo", "ɡəʊl"],
      ["determined", "decidido/a / resuelto/a", "She's determined to win.", "adjetivo", "dɪˈtɜːmɪnd"],
      ["overcome", "superar (obstáculos)", "He overcame many difficulties.", "verbo", "ˌəʊvəˈkʌm"],
      ["setback", "revés / contratiempo", "Every setback taught her something.", "sustantivo", "ˈsetbæk"],
      ["potential", "potencial", "She has huge potential.", "sustantivo/adjetivo", "pəˈtenʃl"],
      ["fulfil", "cumplir / realizar", "He fulfilled his dream.", "verbo", "fʊlˈfɪl"],
      ["resilient", "resiliente", "Successful people are resilient.", "adjetivo", "rɪˈzɪliənt"],
    ]),
    vocabEx("Vocabulario — El éxito y las ambiciones", "Elige la opción correcta.", [
      mc("A strong desire to achieve something is ___.", ["ambition", "setback", "potential"], 0, "ambition."),
      mc("A problem that delays your progress is a ___.", ["setback", "goal", "ambition"], 0, "setback."),
      mc("Able to recover quickly from difficulties is being ___.", ["resilient", "determined", "successful"], 0, "resilient."),
      mc("To successfully deal with a difficulty is to ___ it.", ["overcome", "achieve", "fulfil"], 0, "overcome."),
      mc("A person firmly decided to do something is ___.", ["determined", "resilient", "potential"], 0, "determined."),
      mc("The ability someone has to develop in the future is their ___.", ["potential", "goal", "setback"], 0, "potential."),
    ]),

    ...uoe({
      p1: {
        title: "The myth of overnight success",
        text: "We love stories of overnight success — the unknown who becomes a star, the tiny startup that (1)___ into a giant, the writer whose first book is a sensation. Such stories are inspiring, and we (2)___ retell them endlessly. But they are also, almost always, profoundly misleading. Look closely at almost any 'overnight' success, and you will find that it was nothing of the (3)___. Behind the sudden triumph lie, in nearly every case, years — often decades — of obscure, unrewarded, and largely invisible hard work. The musician who seems to appear from nowhere has usually been playing to empty rooms for ten years; the 'first' novel that becomes a bestseller is frequently the author's fifth, the previous four having been rejected or ignored. The overnight success, in other words, is a myth — or rather, an optical illusion, created by the fact that we only (4)___ notice people at the moment of their triumph, never during the long, hard years of preparation that (5)___ it. This matters, because the myth does real (6)___. It persuades the young that success should come quickly and easily, and that if it does not, they have failed. It hides the truth that almost all real achievement is the (7)___ of long, patient, often discouraging effort. The most useful thing we could tell any ambitious young person is not the (8)___ story of overnight success, but the truer, harder, more encouraging one: keep going, because these things take far longer than anyone admits.",
        q: [
          mc("(1)", ["grows", "turns", "develops", "expands"], 0, "'grows into a giant'."),
          mc("(2)", ["love to", "like to", "want to", "wish to"], 0, "'we love to retell them'."),
          mc("(3)", ["kind", "sort", "type", "way"], 0, "'nothing of the kind'."),
          mc("(4)", ["tend to", "happen to", "come to", "get to"], 0, "'we only tend to notice'."),
          mc("(5)", ["preceded", "came", "went", "led"], 0, "'that preceded it'."),
          mc("(6)", ["harm", "damage", "hurt", "injury"], 0, "'does real harm'."),
          mc("(7)", ["product", "result", "outcome", "fruit"], 0, "'the product of long effort'."),
          mc("(8)", ["comforting", "false", "easy", "simple"], 0, "'not the comforting story'."),
        ],
      },
      p2: {
        title: "The importance of failure",
        text: "Nobody likes to fail, and (1)___ good reason: failure is painful, humiliating and, in the moment, thoroughly unpleasant. And yet, if you talk to people who have achieved great things, you will find that almost (2)___ of them speak of failure not as the opposite of success but as an essential part of it. This is not mere consolation. There is a real and important truth here. Failure, painful as it is, teaches us things that success never can. When we succeed, we rarely stop to ask why; we simply assume we did everything (3)___. It is only when we fail that we are forced to examine what went wrong, to confront our mistakes, and (4)___ learn. The most successful people, far from avoiding failure, have usually failed more (5)___ than anyone else — because they attempted more, risked more, and refused to let each failure stop (6)___. What distinguishes them is not that they never fell, but that they always got (7)___ up. This is why a fear of failure is so crippling. The person who cannot bear to fail cannot bear to risk, and the person who will not risk will never achieve anything worthwhile. To make (8)___ with failure — to see it not as a disaster but as a teacher — is one of the most important lessons anyone can learn.",
        q: [
          fb("(1)", ["for", "with"], "'and for good reason'."),
          fb("(2)", ["all"], "'almost all of them'."),
          fb("(3)", ["right"], "'we did everything right'."),
          fb("(4)", ["to"], "'and to learn'."),
          fb("(5)", ["often"], "'failed more often'."),
          fb("(6)", ["them"], "'let each failure stop them'."),
          fb("(7)", ["back"], "'always got back up'."),
          fb("(8)", ["peace"], "'To make peace with failure'."),
        ],
      },
      p3: {
        title: "What we really mean by success",
        text: "If you ask people whether they want to be successful, almost everyone says yes. But if you ask them what success actually (1)___, their answers diverge wildly, and often reveal a surprising (2)___. For some, success means wealth; for others, fame, or power, or professional (3)___. Yet when the same people are asked what would truly make them happy, they tend to name quite different things: close relationships, good health, meaningful work, peace of mind. There is, in other words, a curious and (4)___ gap between what we pursue and what we actually value — between the conventional markers of success and the sources of genuine (5)___. Many people spend the best years of their lives chasing a definition of success that, on reflection, they do not even really (6)___ in, sacrificing the things they truly care about for things they have simply been told to want. The wise course, though a difficult one, is to pause and ask ourselves what success genuinely means to us — not to our parents, our peers or our society, but to us. The person who has (7)___ defined success on their own terms, however modest, and achieved it, is far more fortunate than the one who has won every conventional prize while chasing someone else's dream. In the end, the only success worth having is the (8)___ that leaves us, when we look back, glad of how we spent our lives.",
        items: [
          { root: "mean", accepted: ["means"], hint: "'what success actually means' → means." },
          { root: "confuse", accepted: ["confusion"], hint: "'a surprising confusion' → confusion." },
          { root: "achieve", accepted: ["achievement"], hint: "'professional achievement' → achievement." },
          { root: "trouble", accepted: ["troubling"], hint: "'a troubling gap' → troubling." },
          { root: "fulfil", accepted: ["fulfilment"], hint: "'genuine fulfilment' → fulfilment." },
          { root: "believe", accepted: ["believe"], hint: "'do not even really believe in' (verbo)." },
          { root: "care", accepted: ["carefully"], hint: "'has carefully defined' → carefully." },
          { root: "one", accepted: ["one"], hint: "'the one that leaves us' (pronombre)." },
        ],
      },
      p4: {
        title: "Transformaciones — éxito y ambición",
        items: [
          { s1: "She succeeded despite many difficulties.", key: "OVERCAME", s2: "She ___ many difficulties to succeed.", accepted: ["overcame"], explanation: "overcome (pasado overcame)." },
          { s1: "It took him years to achieve his goal.", key: "BEFORE", s2: "It was years ___ his goal.", accepted: ["before he achieved"], explanation: "It was… before…" },
          { s1: "He didn't give up, so he eventually succeeded.", key: "GIVEN", s2: "If he ___ up, he wouldn't have succeeded.", accepted: ["had given"], explanation: "3º condicional." },
          { s1: "Her determination is greater than her rivals'.", key: "AS", s2: "Her rivals are ___ she is.", accepted: ["not as determined as"], explanation: "not as… as." },
          { s1: "'You should never give up on your dreams,' she told me.", key: "ADVISED", s2: "She ___ give up on my dreams.", accepted: ["advised me never to"], explanation: "advise sb (not) to do." },
          { s1: "People say she is the most talented in her field.", key: "SAID", s2: "She ___ the most talented in her field.", accepted: ["is said to be"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The runner who never won",
        text: "Among the thousands of athletes who competed in the great marathons of the last century, one of the most beloved never once finished first. He was not, by the standards of elite sport, an especially gifted runner. He never broke a world record, never stood on the top step of an Olympic podium, never won any of the famous races he entered. By the narrow measure of results, his long career was, one might say, a catalogue of failures. And yet, decades after his retirement, he remains one of the most fondly remembered figures in the history of his sport, more loved by far than many who beat him. To understand why is to understand something important about what success really means.\n\nWhat set him apart was not his speed but his spirit. He ran, quite simply, for the joy of running, and that joy was infectious. Where other athletes were grim, calculating and obsessed with winning, he was generous, cheerful and endlessly encouraging to others. He was famous for helping struggling competitors, for stopping to assist a fallen rival, for finishing races not with a triumphant sprint but with a smile and a wave to the crowd. On one celebrated occasion, well out of contention himself, he slowed to help an exhausted younger runner complete the course, sacrificing his own modest position without a moment's hesitation.\n\nStories like these gradually made him a legend, not despite his lack of victories but, in a strange way, because of it. In a world of sport increasingly dominated by the ruthless pursuit of winning at any cost, he stood for something older and finer: the idea that how you play matters more than whether you win, that sport is about character as much as achievement, and that there are victories that have nothing to do with crossing the line first. The crowds who came to love him understood, perhaps better than the record-keepers, that he embodied a kind of success that no medal could measure.\n\nWhen he finally retired, the tributes that poured in spoke not of races won — there were none — but of the man himself: his kindness, his sportsmanship, the joy he brought to everyone around him. He had, it was said, done more for the spirit of his sport than any champion. And in the years since, his name has been remembered and honoured long after the winners of the races he lost have been quietly forgotten.\n\nHis story poses a quiet but searching question to all of us, in whatever field we labour. We are taught, from our earliest years, to equate success with winning — with coming first, beating others, accumulating prizes and medals and money. But the runner who never won suggests another possibility: that the truest and most lasting success may lie not in what we achieve at others' expense, but in who we are, how we treat those around us, and the spirit in which we run our race. By that measure — the only one, perhaps, that matters in the end — he was among the greatest successes his sport ever produced.",
        q: [
          mc("What was unusual about this beloved runner?", ["He won everything.", "He never once finished first.", "He cheated.", "He was very fast."], 1, "'never once finished first'."),
          mc("What set him apart from other athletes?", ["His speed.", "His spirit and the joy he took in running.", "His medals.", "His records."], 1, "'not his speed but his spirit'."),
          mc("What did he do on one celebrated occasion?", ["Won a race.", "Slowed to help an exhausted younger runner finish.", "Gave up.", "Broke a record."], 1, "'he slowed to help an exhausted younger runner'."),
          mc("Why did he become a legend?", ["His victories.", "He stood for the idea that how you play matters more than winning.", "His wealth.", "His fame."], 1, "'how you play matters more than whether you win'."),
          mc("What did the tributes on his retirement praise?", ["His races won.", "The man himself — his kindness and sportsmanship.", "His speed.", "His prizes."], 1, "'his kindness, his sportsmanship'."),
          mc("What question does his story pose to us?", ["How to win.", "Whether true success is about winning or about who we are.", "How to run.", "How to get rich."], 1, "'the truest… success may lie not in what we achieve at others' expense, but in who we are'."),
        ],
      },
      p6: {
        title: "The tyranny of ambition",
        text: "Ambition is usually spoken of as a virtue, the quality that drives people to achieve great things. (1)___ We admire the ambitious and pity the person who lacks all drive and settles for too little.\n\nAnd there is much to be said for ambition. (2)___ Without it, little would ever be attempted, and much that is valuable in the world would never have come into being.\n\nBut ambition has a dark side that we rarely acknowledge. (3)___ Taken too far, it becomes a kind of tyranny, a restless dissatisfaction that can never be satisfied, no matter how much is achieved.\n\nThe deeply ambitious person is, almost by definition, never content. (4)___ Each goal, once reached, is instantly replaced by another, so that the summit is never quite attained and peace never quite arrives.\n\nThere is wisdom, then, in learning to temper ambition with contentment. (5)___ The healthiest relationship with ambition is one that harnesses its energy without being enslaved by its endless demands. (6)___ To strive, but also to be able to stop striving and simply enjoy what one has, may be the rarest achievement of all.",
        options: [
          "It is one of the qualities we most respect in others.",          // A -> gap 1
          "Ambition is the engine of human achievement.",                  // B -> gap 2
          "The very drive that builds can also destroy.",                  // C -> gap 3
          "The goalposts are forever being moved further away.",           // D -> gap 4
          "Drive and satisfaction need not be enemies.",                   // E -> gap 5
          "Knowing when enough is enough is a kind of triumph.",           // F -> gap 6
          "Nobody has ever benefited from being ambitious.",               // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la respetamos en otros."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: es el motor del logro."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: lo que construye puede destruir."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la meta se aleja siempre."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: impulso y satisfacción no son enemigos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: saber cuándo basta es un triunfo."),
        ],
      },
      p7: {
        title: "Four people talk about success and ambition",
        text: "Read what four people say about what success means to them.\n\nA) NADIA: I chased the conventional idea of success for years — the promotions, the salary, the status. I got all of it, and I was miserable. It took a breakdown to make me realise I'd been climbing a ladder leaning against the wrong wall. Now I measure success completely differently: by whether I'm happy and the people I love are okay.\n\nB) TOM: I'm unashamedly ambitious, and I don't apologise for it. People act as if wanting to achieve great things is somehow greedy or shallow. I disagree. I want to build something that matters, to push myself to my limits, to see how far I can go. A life without ambition would feel, to me, like no life at all.\n\nC) PRIYA: What I've learned is the value of failure. I failed spectacularly in my twenties — a business that collapsed, taking my savings with it. At the time it felt like the end. Looking back, it taught me more than any success ever did. I'm not afraid of failing anymore, and that fearlessness has been the key to everything since.\n\nD) SAM: For me, success was never about winning. I coach young athletes, and I try to teach them that how you compete matters more than whether you win. The kids who learn that — who compete with grace, who help their rivals, who love the sport itself — end up happier, and often more successful too, than the ones obsessed only with winning.\n",
        q: [
          mc("Who realised they'd been chasing the wrong kind of success?", ["A", "B", "C", "D"], 0, "Nadia: 'climbing a ladder leaning against the wrong wall'."),
          mc("Who is 'unashamedly ambitious'?", ["A", "B", "C", "D"], 1, "Tom: 'I'm unashamedly ambitious'."),
          mc("Who learned the value of failure?", ["A", "B", "C", "D"], 2, "Priya: 'What I've learned is the value of failure'."),
          mc("Who teaches that how you compete matters more than winning?", ["A", "B", "C", "D"], 3, "Sam: 'how you compete matters more than whether you win'."),
          mc("Who says a life without ambition would feel like 'no life at all'?", ["A", "B", "C", "D"], 1, "Tom: 'like no life at all'."),
          mc("Who had a breakdown before rethinking success?", ["A", "B", "C", "D"], 0, "Nadia: 'It took a breakdown'."),
          mc("Whose business collapsed in their twenties?", ["A", "B", "C", "D"], 2, "Priya: 'a business that collapsed'."),
          mc("Who says fearlessness about failing 'has been the key to everything'?", ["A", "B", "C", "D"], 2, "Priya: 'that fearlessness has been the key'."),
          mc("Who now measures success by happiness and loved ones?", ["A", "B", "C", "D"], 0, "Nadia: 'whether I'm happy and the people I love are okay'."),
          mc("Who coaches young athletes?", ["A", "B", "C", "D"], 3, "Sam: 'I coach young athletes'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Success should be measured by happiness, not by money or status.'\nComenta estos dos aspectos y añade uno propio:\n1. career achievements (los logros profesionales)\n2. personal life (la vida personal)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'The most successful person I know' — descríbelo/a y explica por qué lo consideras un éxito.\n· REVIEW de un libro o película sobre alguien que persiguió un sueño: descríbela y di si la recomiendas.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una psicóloga del rendimiento, la doctora Chen (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a performance psychologist called Doctor Chen. Interviewer: Doctor Chen, what's the biggest myth about success? Doctor Chen: That it happens quickly. The 'overnight success' is almost always a lie. Behind every sudden triumph are years of invisible, unrewarded work that nobody sees. That myth does real harm, because it makes young people give up when success doesn't come fast. Interviewer: You talk a lot about failure. Why? Doctor Chen: Because it's essential, and we treat it as shameful. The most successful people fail more than anyone — they simply keep going. Failure teaches what success can't. The fear of it is what really holds people back. Interviewer: Is talent overrated, then? Doctor Chen: Hugely. Talent matters far less than persistence. I'd take a determined, resilient person of modest ability over a gifted one who crumbles at the first setback, every single time. Interviewer: What about ambition — can you have too much? Doctor Chen: Absolutely. Ambition is a wonderful servant but a terrible master. Taken too far, it becomes a treadmill — you achieve everything and enjoy nothing. The trick is to strive hard but still be able to feel content. Interviewer: So what actually predicts success? Doctor Chen: Not talent, not luck, but what I'd call resilience — the ability to keep going through failure and setback. If I could give young people one quality, it wouldn't be brilliance; it would be the capacity to get back up. Interviewer: Final question — are you optimistic about the young people you work with? Doctor Chen: Very. The ones who understand these things — that success is slow, that failure teaches, that resilience beats talent — those young people will go far. Interviewer: Thank you, Doctor Chen.", [
      mc("1. What is the biggest myth about success?", ["That it's hard.", "That it happens quickly.", "That it needs talent."], 1, "'That it happens quickly'."),
      mc("2. Why does Doctor Chen talk about failure?", ["To discourage people.", "Because it's essential and teaches what success can't.", "To sound clever."], 1, "'it's essential… Failure teaches what success can't'."),
      mc("3. What does she think of talent?", ["It's everything.", "It's hugely overrated compared with persistence.", "It doesn't exist."], 1, "'Talent matters far less than persistence'."),
      mc("4. Can you have too much ambition?", ["No.", "Yes — it becomes a treadmill.", "Only a little."], 1, "'Taken too far, it becomes a treadmill'."),
      mc("5. What does she call ambition?", ["A gift.", "A wonderful servant but a terrible master.", "A weakness."], 1, "'a wonderful servant but a terrible master'."),
      mc("6. What single quality would she give young people?", ["Brilliance.", "Resilience — the capacity to get back up.", "Luck."], 1, "'the capacity to get back up'."),
      mc("7. How does she feel about the young people she works with?", ["Pessimistic.", "Very optimistic, especially those who understand these lessons.", "Indifferent."], 1, "'Very… those young people will go far'."),
    ]),

    ...speakingParts({ p1: "cuáles son tus metas y qué te motiva a esforzarte", p2: "dos imágenes del éxito (alguien recogiendo un premio ante el público y alguien entrenando solo de madrugada): compáralas y especula", p3: "qué ayuda más a tener éxito en la vida (el talento, el esfuerzo, la suerte, los contactos, la resiliencia): comentadlo y elegid lo más importante", p4: "el éxito: si se mide por dinero o por felicidad, si el fracaso es necesario y si se puede tener demasiada ambición" }),

    SUMMARY("Resumen del Día 54", [
      "Listening: lee las preguntas antes; P2 escribe lo que oyes (1–3 palabras exactas); todo se oye dos veces.",
      "Speaking: P1 amplía; P2 compara+especula+responde (1 min); P3 INTERACTÚA y decide con tu pareja; P4 opina con matices.",
      "Vocabulario del éxito. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 55", "Graba tu voz haciendo una Speaking P2 de 1 minuto comparando dos fotos. Repasa las flashcards. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 55 ─────────────────────────
const DAY55 = {
  title: "Día 55 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de las estrategias de examen (Use of English, Reading, Writing, Listening y Speaking). Las 4 destrezas (formato B2); Listening P1. Al final, el mini-simulacro de la Semana 11.",
  pedagogy: {
    objective: "Integrar todas las estrategias de examen antes de la semana del simulacro final.",
    summary: "Repaso de estrategias; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué estrategia te ha resultado más útil?", "Aplícalas todas en la Semana 12 (simulacro final)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 11 del B2. Integras TODAS las estrategias de examen: Use of English (P1–P4), Reading (P5–P7), Writing (essay + P2), Listening y Speaking. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de estrategias — Semana 11", `1) USE OF ENGLISH: P1 colocaciones · P2 una palabra gramatical · P3 clase de palabra + positivo/negativo · P4 2–5 palabras, no cambies la key word.
2) READING: P5 paráfrasis, no palabra repetida · P6 pistas de cohesión (this/however) · P7 lee preguntas y escanea.
3) WRITING: essay de 4 párrafos con conectores; P2 adapta el registro al formato; planifica → escribe → revisa.
4) LISTENING: lee preguntas antes; escribe lo que oyes; todo dos veces. SPEAKING: amplía, compara+especula, interactúa y decide, matiza.`),
    grammarEx("Use of English — Repaso de estrategias (P1–P4)", "Aplica la técnica correcta.", [
      mc("P1: She's determined to ___ her ambitions.", ["achieve", "make", "do", "win"], 0, "achieve one's ambitions (colocación)."),
      fb("P2: He succeeded ___ getting the job despite the competition. (preposición)", ["in"], "succeed IN + -ing."),
      fb("P3: Her ___ (DETERMINE) impressed everyone. (sustantivo)", ["determination"], "determine → determination."),
      fb("P4: 'They offered her a promotion.' → She ___ a promotion. (key: OFFERED)", ["was offered"], "pasiva (2 palabras)."),
      fb("P4: 'I regret not saving earlier.' → I wish I ___ earlier. (key: SAVED)", ["had saved"], "wish + past perfect (2 palabras)."),
      mc("P1: It took years of hard work to ___ success.", ["achieve", "arrive", "reach at", "get to"], 0, "achieve success."),
      fb("P2: The candidate, ___ CV stood out, got the job. (relativo posesivo)", ["whose"], "whose CV."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 11", "Repasa los mazos (trabajo, entrevistas/CV, dinero/negocios, éxito/ambiciones)."),
    vocabEx("Vocabulario — Repaso de la Semana 11", "Elige la opción correcta.", [
      mc("A move to a more senior job is a:", ["promotion", "setback", "budget"], 0, "promotion."),
      mc("A person applying for a job is an:", ["applicant", "expense", "goal"], 0, "applicant."),
      mc("The money a business earns after costs is:", ["profit", "debt", "salary"], 0, "profit."),
      mc("Able to recover quickly from difficulties:", ["resilient", "self-employed", "broke"], 0, "resilient."),
      mc("To formally request a job is to:", ["apply for", "retire", "invest"], 0, "apply for."),
      mc("A problem that delays your progress is a:", ["setback", "reference", "profit"], 0, "setback."),
      mc("A person who starts their own business is an:", ["entrepreneur", "colleague", "candidate"], 0, "entrepreneur."),
      mc("To successfully deal with a difficulty is to:", ["overcome", "afford", "shortlist"], 0, "overcome."),
    ]),

    ...uoe({
      p1: {
        title: "The habits of achievement",
        text: "When we look at people who consistently achieve remarkable things, it is tempting to (1)___ their success down to some special gift the rest of us lack. In fact, decades of research point to a rather different and more encouraging (2)___. What separates high achievers from the rest is rarely raw talent, which is far more (3)___ distributed than we imagine. It is, instead, a set of habits — ways of working and thinking that anyone, in principle, can learn. High achievers tend to set clear goals and break them (4)___ into manageable steps. They work consistently, day after day, rather than in occasional bursts of frantic effort. They seek out feedback, even when it stings, and use it to improve. And, crucially, they treat setbacks not as proof of their (5)___ but as information to learn from. None of this is glamorous, and none of it is secret. It is simply the unremarkable, patient application of good habits over a long (6)___ of time. This is, in a way, wonderful news. It means that achievement is not reserved for a gifted few, but is (7)___, to a large degree, to anyone willing to cultivate the right habits and stick with them. The barrier, for most of us, is not a lack of talent but a lack of patience — the unwillingness to do ordinary things, consistently, for long (8)___ to see extraordinary results.",
        q: [
          mc("(1)", ["put", "set", "lay", "bring"], 0, "'put their success down to'."),
          mc("(2)", ["conclusion", "result", "finding", "outcome"], 0, "'a more encouraging conclusion'."),
          mc("(3)", ["evenly", "equally", "fairly", "widely"], 0, "'more evenly distributed'."),
          mc("(4)", ["down", "up", "off", "apart"], 0, "'break them down into steps'."),
          mc("(5)", ["inadequacy", "failure", "weakness", "fault"], 0, "'proof of their inadequacy'."),
          mc("(6)", ["period", "time", "span", "stretch"], 0, "'over a long period'."),
          mc("(7)", ["available", "open", "accessible", "possible"], 0, "'is available to anyone'."),
          mc("(8)", ["enough", "time", "while", "term"], 0, "'consistently, for long enough'."),
        ],
      },
      p2: {
        title: "The examination game",
        text: "Every year, millions of students around the world sit high-stakes examinations, and every year the same debate resurfaces: do exams really measure (1)___ that matters? Critics argue, with some justice, that exams reward a narrow set of skills — memorisation, working (2)___ pressure, guessing what the examiner wants — that (3)___ little to do with genuine understanding, still less with the qualities that matter in real life. A brilliant thinker who freezes under pressure may do (4)___ than a mediocre one who has simply learned to play the exam game well. There is real truth in this critique. And yet exams persist, for one stubborn (5)___: nobody has found anything better. For all their flaws, exams are relatively fair, relatively objective, and relatively hard to cheat. They give everyone, (6)___ their background, the same questions and the same chance. The alternatives proposed — continuous assessment, teacher judgement, coursework — all turn out to have flaws of their own, often worse ones. So exams, imperfect (7)___ they are, remain with us, a necessary evil that everyone complains about and no one can replace. The wisest attitude, perhaps, is neither to worship exams nor to despise them, but to see them for what they are: a flawed but useful tool, a game with rules that can be learned, and (8)___ definitely not the final measure of anyone's worth.",
        q: [
          fb("(1)", ["anything", "what"], "'measure anything that matters'."),
          fb("(2)", ["under"], "'working under pressure'."),
          fb("(3)", ["have"], "'that have little to do with'."),
          fb("(4)", ["worse"], "'may do worse than'."),
          fb("(5)", ["reason"], "'for one stubborn reason'."),
          fb("(6)", ["whatever", "regardless"], "'whatever their background'."),
          fb("(7)", ["as", "though"], "'imperfect as they are'."),
          fb("(8)", ["most", "quite"], "'and most definitely not'."),
        ],
      },
      p3: {
        title: "Learning how to learn",
        text: "Of all the skills that schools try to teach, the most (1)___ of all is often the most neglected: the skill of learning itself. Most students are never explicitly taught how to learn; they are simply expected to (2)___ it out for themselves, and many never do. This is a great pity, because the science of effective learning is now remarkably well (3)___, and its findings are often surprising. Much of what students instinctively do — rereading their notes, highlighting, cramming the night before — turns out to be among the (4)___ effective techniques there are. What actually works is frequently the opposite of what feels comfortable. Testing yourself, though it feels harder and more unpleasant than rereading, produces far (5)___ learning. Spacing your study out over time, rather than cramming, dramatically improves how much you (6)___. Struggling with a problem before being shown the answer, though frustrating, deepens understanding. The uncomfortable lesson is that effective learning is supposed to feel difficult; the very sense of ease that makes rereading so appealing is a sign that little is being (7)___. Students who understand this — who embrace the productive discomfort of real learning rather than the false comfort of the familiar — have a (8)___ advantage over those who do not. Learning how to learn may be the single most valuable thing anyone can master.",
        items: [
          { root: "importance", accepted: ["important"], hint: "'the most important of all' → important." },
          { root: "figure", accepted: ["figure"], hint: "'figure it out' (verbo)." },
          { root: "understand", accepted: ["understood"], hint: "'remarkably well understood' → understood." },
          { root: "little", accepted: ["least"], hint: "'the least effective' → least." },
          { root: "good", accepted: ["better"], hint: "'produces far better learning' → better." },
          { root: "retain", accepted: ["retain"], hint: "'how much you retain' (verbo)." },
          { root: "learn", accepted: ["learned", "learnt"], hint: "'little is being learned' → learned." },
          { root: "power", accepted: ["powerful"], hint: "'a powerful advantage' → powerful." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 11",
        items: [
          { s1: "They offered me the job yesterday.", key: "OFFERED", s2: "I ___ the job yesterday.", accepted: ["was offered"], explanation: "pasiva: was offered." },
          { s1: "It's a good idea to research the company before an interview.", key: "SHOULD", s2: "You ___ the company before an interview.", accepted: ["should research"], explanation: "should (consejo)." },
          { s1: "She is more determined than anyone I know.", key: "AS", s2: "Nobody I know is ___ she is.", accepted: ["as determined as"], explanation: "as… as." },
          { s1: "'Never give up,' the coach told us.", key: "TOLD", s2: "The coach ___ give up.", accepted: ["told us never to"], explanation: "tell sb (not) to do." },
          { s1: "He didn't prepare, so he failed the interview.", key: "HAD", s2: "If he ___ , he wouldn't have failed the interview.", accepted: ["had prepared"], explanation: "3º condicional." },
          { s1: "People consider her a great success.", key: "CONSIDERED", s2: "She ___ a great success.", accepted: ["is considered"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The examiner's tale",
        text: "For over thirty years, Margaret Doyle earned her living as an examiner, marking, by her own rough estimate, well over a hundred thousand examination papers in the course of her long career. Few people, one imagines, could be better placed to reflect on what examinations really tell us, and on the strange, high-stakes ritual in which so much of a young person's future is made to depend on a few hours of writing in a silent hall.\n\nHer first observation, offered with the weary authority of long experience, was that examinations measure a great deal less than most people suppose. What an exam primarily tests, she maintained, is a candidate's ability to perform in an exam: to work at speed under pressure, to organise their knowledge quickly, to guess what the examiner is looking for and provide it. These are real skills, she conceded, and not entirely without value. But they are not at all the same thing as deep knowledge, genuine understanding, or intelligence, with which they are so often confused. She had marked, over the years, brilliant papers by candidates she suspected understood very little, and poor papers by candidates she felt sure understood a great deal but had simply frozen, or run out of time, or misread the question.\n\nHer second observation was more consoling. For all their limitations, she had come to believe, examinations were fairer than the alternatives. Marking anonymously, knowing nothing of the candidate's name, background or circumstances, she judged only what was on the page. A brilliant answer from the child of a labourer received exactly the same mark as an identical answer from the child of a duke. In a world riddled with unfairness and privilege, this blind impartiality seemed to her a genuine, if limited, virtue — one that the proposed alternatives, dependent on the subjective judgements of teachers who knew their students, could not easily match.\n\nHer third and final reflection was the one she most wished students could hear. Having watched, year after year, the terror and misery that examinations inflicted on the young, she longed to tell them that it mattered far less than they believed. An exam result, she knew from thirty years of evidence, was a narrow, unreliable and often misleading snapshot of a person on a single day. It captured almost nothing of what made a human being valuable, interesting or likely to lead a good life. She had seen too many capable young people crushed by a disappointing grade, and too many mediocre ones puffed up by a good one, to place much faith in what the numbers really meant.\n\n'If I could say one thing to every student,' she remarked, near the end of her career, 'it would be this: do your best, by all means, but never mistake an exam result for a measure of your worth. I have marked a hundred thousand papers, and I can tell you that the grade tells you something, but never as much as you fear, and never anything about the things that matter most. Whatever your result, you are so much more than a mark on a page.' It was, perhaps, the wisest thing that anyone who has spent a lifetime with examinations could possibly say about them.",
        q: [
          mc("What was Margaret Doyle's job?", ["A teacher.", "An examiner who marked exam papers.", "A student.", "A writer."], 1, "'earned her living as an examiner, marking… examination papers'."),
          mc("What did she believe exams primarily test?", ["Deep knowledge.", "The ability to perform in an exam.", "Intelligence.", "Character."], 1, "'a candidate's ability to perform in an exam'."),
          mc("Why did she think exams were 'fairer than the alternatives'?", ["They're easy.", "Marking anonymously, she judged only what was on the page.", "They favour the rich.", "Teachers decide."], 1, "'Marking anonymously… she judged only what was on the page'."),
          mc("What is an exam result, in her view?", ["A perfect measure.", "A narrow, unreliable snapshot of a person on a single day.", "Proof of worth.", "A guarantee of success."], 1, "'a narrow, unreliable and often misleading snapshot'."),
          mc("What did she most want students to hear?", ["Study harder.", "That the result matters far less than they believe.", "That exams are perfect.", "That grades define them."], 1, "'it mattered far less than they believed'."),
          mc("What was her final message to students?", ["Fear the exam.", "Never mistake an exam result for a measure of your worth.", "Grades are everything.", "Give up."], 1, "'never mistake an exam result for a measure of your worth'."),
        ],
      },
      p6: {
        title: "The night before the exam",
        text: "The night before a big examination is, for most students, a peculiar kind of torment. (1)___ Sleep will not come; the mind races; and every fact once so confidently known seems, suddenly, to have evaporated.\n\nIn this state of rising panic, the temptation is to cram — to stay up half the night frantically rereading notes. (2)___ This is almost always a mistake, and a serious one.\n\nThe science on this is remarkably clear. (3)___ A tired, sleep-deprived brain performs far worse than a rested one, and no amount of last-minute revision can compensate for the loss.\n\nThe wiser course, though it takes real nerve, is to do the opposite of what panic demands. (4)___ Put the notes away, do something calming, and above all, get a proper night's sleep.\n\nThere is a deeper lesson here that goes well beyond exams. (5)___ At the crucial moment, when everything seems to depend on one last desperate effort, the best thing we can often do is to stop, rest, and trust the preparation we have already done. (6)___ The work, by then, is done; the task is simply to arrive rested enough to show it.",
        options: [
          "The hours crawl by in a fog of anxiety.",                        // A -> gap 1
          "Yet cramming does more harm than good.",                        // B -> gap 2
          "Sleep matters far more than one extra hour of study.",          // C -> gap 3
          "Calm and rest beat frantic effort every time.",                 // D -> gap 4
          "Sometimes the bravest act is to do nothing at all.",            // E -> gap 5
          "Trusting your preparation is a skill in itself.",               // F -> gap 6
          "Staying up all night is the surest way to succeed.",            // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: las horas se arrastran con ansiedad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: empollar hace más mal que bien."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: dormir importa más que una hora extra."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la calma vence al esfuerzo frenético."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: a veces lo valiente es no hacer nada."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: confiar en tu preparación es una destreza."),
        ],
      },
      p7: {
        title: "Four people share their exam advice",
        text: "Read what four people say about preparing for exams.\n\nA) NADIA: My best advice is: test yourself, don't just reread. For years I revised by reading my notes over and over, which felt productive but taught me almost nothing. The day I switched to testing myself — covering the page and trying to recall it — everything changed. It's harder, but it actually works.\n\nB) TOM: The single biggest thing for me was sleep. I used to cram all night before exams, arriving exhausted and useless. Now I stop revising early the night before and get a full night's sleep. My results improved dramatically. A rested brain beats a crammed one every time.\n\nC) PRIYA: What helped me most was learning the format. I realised exams aren't just testing what you know — they're testing whether you know how to answer their specific questions. Once I studied past papers and learned exactly what each part wanted, my marks shot up, even though I didn't actually know much more.\n\nD) SAM: My advice is more about attitude. I used to be paralysed by fear of failing, which made everything worse. Then a teacher told me an exam result doesn't define you, and something clicked. I relaxed, and paradoxically did far better. The pressure we put on ourselves is often the real enemy.\n",
        q: [
          mc("Who recommends testing yourself rather than rereading?", ["A", "B", "C", "D"], 0, "Nadia: 'test yourself, don't just reread'."),
          mc("Who says sleep was the biggest factor?", ["A", "B", "C", "D"], 1, "Tom: 'the single biggest thing for me was sleep'."),
          mc("Who stresses learning the exam format?", ["A", "B", "C", "D"], 2, "Priya: 'learning the format… what each part wanted'."),
          mc("Who focuses on attitude and fear of failing?", ["A", "B", "C", "D"], 3, "Sam: 'more about attitude… fear of failing'."),
          mc("Who found rereading 'taught me almost nothing'?", ["A", "B", "C", "D"], 0, "Nadia: 'taught me almost nothing'."),
          mc("Who used to cram all night?", ["A", "B", "C", "D"], 1, "Tom: 'I used to cram all night'."),
          mc("Whose marks 'shot up' after studying past papers?", ["A", "B", "C", "D"], 2, "Priya: 'my marks shot up'."),
          mc("Who was told 'an exam result doesn't define you'?", ["A", "B", "C", "D"], 3, "Sam: 'an exam result doesn't define you'."),
          mc("Who says a rested brain 'beats a crammed one every time'?", ["A", "B", "C", "D"], 1, "Tom: 'A rested brain beats a crammed one'."),
          mc("Who says the pressure we put on ourselves is 'the real enemy'?", ["A", "B", "C", "D"], 3, "Sam: 'The pressure we put on ourselves is often the real enemy'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Exams are the best way to measure a student's ability.'\nComenta estos dos aspectos y añade uno propio:\n1. fairness (la justicia/imparcialidad)\n2. stress (el estrés)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'My best study tips' — comparte tus mejores consejos para preparar un examen.\n· CARTA a un/a amigo/a que está muy nervioso/a antes de un examen importante: anímale y dale consejos.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: The trick isn't rereading your notes — it's testing yourself again and again. Two. Man: I stopped cramming and started sleeping properly, and my grades improved overnight. Three. Woman: Honestly, exams mostly test whether you know how to answer exam questions. Four. Man: A teacher once told me a grade doesn't define you, and it completely changed how I felt. Five. Woman: I failed my first three attempts, but I kept going, and finally passed. Six. Man: What separates achievers isn't talent — it's just consistent, patient habits. Seven. Woman: I was terrified the night before, but I put the books away and slept. Eight. Man: The so-called overnight success had actually been working quietly for ten years.", [
      mc("1. What is the woman's study trick?", ["Rereading notes.", "Testing yourself repeatedly.", "Cramming."], 1, "'testing yourself again and again'."),
      mc("2. What improved the man's grades?", ["Cramming.", "Sleeping properly.", "Studying all night."], 1, "'started sleeping properly'."),
      mc("3. What does the woman say exams mostly test?", ["Deep knowledge.", "Whether you know how to answer exam questions.", "Intelligence."], 1, "'whether you know how to answer exam questions'."),
      mc("4. What changed how the man felt?", ["A good grade.", "Being told a grade doesn't define you.", "Failing."], 1, "'a grade doesn't define you'."),
      mc("5. What did the woman do after failing three times?", ["Gave up.", "Kept going and finally passed.", "Changed exams."], 1, "'I kept going, and finally passed'."),
      mc("6. What separates achievers, according to the man?", ["Talent.", "Consistent, patient habits.", "Luck."], 1, "'consistent, patient habits'."),
      mc("7. What did the woman do the night before?", ["Crammed.", "Put the books away and slept.", "Panicked."], 1, "'I put the books away and slept'."),
      mc("8. What was true of the 'overnight success'?", ["It was instant.", "It had been working quietly for ten years.", "It was luck."], 1, "'working quietly for ten years'."),
    ]),

    ...speakingParts({ p1: "cómo te preparas para un examen y qué te ayuda a rendir bien", p2: "dos formas de estudiar (alguien empollando de noche con muchos apuntes y alguien haciéndose autoevaluaciones tranquilo): compáralas y especula", p3: "qué ayuda más a aprobar un examen (dormir bien, autoevaluarse, conocer el formato, controlar los nervios, empezar pronto): comentadlo y elegid lo mejor", p4: "los exámenes: si miden bien la capacidad, si son justos y cómo afrontar los nervios y el fracaso" }),

    SUMMARY("Resumen de la Semana 11 (B2)", [
      "Dominas la ESTRATEGIA de todas las partes del examen: Use of English (P1–P4), Reading (P5–P7), Writing (essay + P2), Listening y Speaking.",
      "Has practicado las 7 partes de Use of English, el Writing y el Speaking P1–P4 con el tema del trabajo y el éxito.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: SIMULACRO FINAL + la recta final hacia el examen (la salud, el estilo de vida y el repaso global).",
    ]),
    INFO("Mini-simulacro de la Semana 11", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 12."),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Estrategias de examen · El mundo del trabajo",
  description: "Técnica y estrategia para cada parte del examen real (Use of English, Reading, Writing, Listening y Speaking), con el hilo del trabajo, las entrevistas, el dinero, el éxito y la ambición. Cada día, las 4 destrezas con el formato real del B2.",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
