/**
 * B1 Preliminary · Semana 4 — "Normas, obligaciones y la voz pasiva".
 * Gramática: modales de obligación/consejo (must/have to/should/ought to),
 * prohibición/ausencia de obligación (mustn't/don't have to/needn't), y la voz
 * pasiva (presente y pasado, otros tiempos, get-passive).
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
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, I'd rather, we should, let's, why don't we"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 16 ─────────────────────────
const DAY16 = {
  title: "Día 16 — Obligación y consejo (modales) · El trabajo",
  description: "must / have to / should / ought to / had better. Vocabulario del trabajo. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Expresar obligación, necesidad y consejo con los modales correctos.",
    summary: "Modales de obligación/consejo; el trabajo; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'must to go'.", "'I have go'.", "'should to study'."],
    reviewPrompts: ["¿'must' + con 'to' o sin 'to'?", "¿Diferencia entre 'must' y 'have to'?"],
  },
  items: [
    TEXT("🔁 Semana 4. Hoy: OBLIGACIÓN y CONSEJO con modales. Vocabulario: el TRABAJO y los empleos."),
    GRAMMAR("Obligación y consejo", `OBLIGACIÓN FUERTE: must + infinitivo SIN to (I must finish this) — obligación que siente el hablante. have to + infinitivo (I have to wear a uniform) — obligación externa/regla. En pasado y futuro solo 'had to' / 'will have to' (must no tiene pasado).
CONSEJO: should / ought to + infinitivo sin to (You should rest. You ought to see a doctor). Más fuerte: had better (+ infinitivo sin to): You'd better hurry.
NECESIDAD: need to (I need to talk to you).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I must to go → ✅ I must go.\n· ❌ I have go → ✅ I have to go.\n· ❌ You should to study → ✅ You should study.\n· 'must' no tiene pasado: ayer → I had to."),
    grammarEx("Gramática — Obligación y consejo", "Completa o elige.", [
      mc("Choose:", ["I must to finish this today.", "I must finish this today.", "I must finishing today."], 1, "must + infinitivo sin to."),
      fb("At my job I ___ (have) wear a uniform.", ["have to"], "regla externa → have to."),
      mc("Choose (advice):", ["You should to rest.", "You should rest.", "You ought rest."], 1, "should + infinitivo sin to."),
      fb("Yesterday I ___ (obligación) work late. (pasado)", ["had to"], "must no tiene pasado → had to."),
      fb("You'd ___ hurry or you'll miss the train.", ["better"], "had better + infinitivo."),
      mc("Choose:", ["You ought see a doctor.", "You ought to see a doctor.", "You ought to seeing a doctor."], 1, "ought TO + infinitivo."),
      fb("I really ___ (need) talk to my boss.", ["need to"], "need to + infinitivo."),
    ]),
    GRAMMAR("Vocabulario del día — El trabajo", "Léxico de empleo (B1)."),
    deck("B1 S4D16 — El trabajo", [
      ["apply for", "solicitar (un empleo)", "I applied for a job at the bank.", "phrasal verb", "əˈplaɪ fə"],
      ["employer", "empleador/a", "My employer is very fair.", "sustantivo", "ɪmˈplɔɪə"],
      ["employee", "empleado/a", "The company has 50 employees.", "sustantivo", "ɪmˌplɔɪˈiː"],
      ["salary", "sueldo / salario", "The salary is quite good.", "sustantivo", "ˈsæləri"],
      ["shift", "turno", "I work the night shift.", "sustantivo", "ʃɪft"],
      ["colleague", "compañero/a de trabajo", "My colleagues are friendly.", "sustantivo", "ˈkɒliːɡ"],
      ["deadline", "fecha límite", "The deadline is Friday.", "sustantivo", "ˈdedlaɪn"],
      ["overtime", "horas extra", "I did a lot of overtime this week.", "sustantivo", "ˈəʊvətaɪm"],
      ["promotion", "ascenso", "She got a promotion.", "sustantivo", "prəˈməʊʃn"],
      ["retire", "jubilarse", "My father retired at 65.", "verbo", "rɪˈtaɪə"],
    ]),
    vocabEx("Vocabulario — El trabajo", "Elige la opción correcta.", [
      mc("The money you earn each month is your ___.", ["salary", "shift", "deadline"], 0, "salary."),
      mc("The date by which you must finish work is a ___.", ["deadline", "promotion", "shift"], 0, "deadline."),
      mc("A person you work with is a ___.", ["colleague", "employer", "employee"], 0, "colleague."),
      mc("The person or company you work for is your ___.", ["employer", "employee", "colleague"], 0, "employer."),
      mc("Extra hours beyond your normal time are ___.", ["overtime", "shift", "salary"], 0, "overtime."),
      mc("To stop working at the end of your career is to ___.", ["retire", "apply", "promote"], 0, "retire."),
    ]),

    ...readingParts({
      p1: { title: "Trabajo y normas", items: [
        mc("Notice: 'All staff must wear ID badges at all times.'", ["Staff have to wear badges.", "Badges are optional.", "No badges."], 0, "'must wear ID badges'."),
        mc("Email: 'You should apply before Friday's deadline.'", ["Apply before Friday.", "No deadline.", "Don't apply."], 0, "'apply before Friday's deadline'."),
        mc("Sign: 'Employees must wash hands before returning to work.'", ["Wash hands before working.", "No hand-washing.", "Optional."], 0, "'must wash hands'."),
        mc("Note: 'You'd better speak to your manager about the shift.'", ["Talk to the manager about the shift.", "Don't talk.", "Change jobs."], 0, "'You'd better speak to your manager'."),
        mc("Memo: 'Overtime should be agreed with your supervisor first.'", ["Agree overtime with a supervisor.", "Overtime is free.", "No overtime."], 0, "'Overtime should be agreed… first'."),
      ] },
      p2text: "FOUR JOB ADVERTS\n\nA) Café Barista — friendly team, flexible shifts; perfect for students; no experience needed.\nB) Software Developer — high salary, but you must have a degree and three years' experience.\nC) Delivery Driver — good pay per hour; you have to own a car and enjoy working alone.\nD) Care Assistant — hard but rewarding; you should be patient and enjoy helping people.",
      p2q: { title: "Emparejar personas y empleos", items: [
        mc("Nadia is a student who needs flexible hours.", ["A", "B", "C", "D"], 0, "Café Barista."),
        mc("Omar has a computing degree and lots of experience.", ["A", "B", "C", "D"], 1, "Software Developer."),
        mc("Sara has her own car and likes working independently.", ["A", "B", "C", "D"], 2, "Delivery Driver."),
        mc("Leo is patient and loves helping others.", ["A", "B", "C", "D"], 3, "Care Assistant."),
        mc("Someone with no work experience.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "MY FIRST JOB\n\nWhen I was eighteen, I got my first job in a busy restaurant. I was excited but also terrified, because I had never worked before and I didn't know what to expect. Looking back, that summer taught me lessons I could never have learned at school.\n\nThe first thing I discovered was that you have to be reliable. If you're on the early shift, you must arrive on time, because your colleagues are depending on you. On my second day, I was ten minutes late, and I could see the disappointment on the manager's face. I never made that mistake again. I also learned that you should always stay calm, even when a customer is rude. It isn't easy, but losing your temper only makes things worse.\n\nOf course, the job was hard. The hours were long, the salary was low, and I often had to do overtime with no warning. But I earned my own money for the first time, and I felt proud. If you're about to start your first job, my advice is simple: work hard, listen carefully, and don't be afraid to ask questions. You'll make mistakes, but that's how everyone learns.",
      p3q: { title: "Mi primer trabajo (texto largo)", items: [
        mc("How did the writer feel about the first job?", ["Bored.", "Excited but terrified.", "Angry."], 1, "'excited but also terrified'."),
        mc("What happened on the second day?", ["They were promoted.", "They arrived ten minutes late.", "They quit."], 1, "'I was ten minutes late'."),
        mc("What should you do when a customer is rude?", ["Shout back.", "Stay calm.", "Leave."], 1, "'you should always stay calm'."),
        mc("What was hard about the job?", ["Easy hours.", "Long hours, low salary, unexpected overtime.", "High salary."], 1, "'hours were long… salary was low… overtime'."),
        mc("What is the writer's advice for a first job?", ["Avoid questions.", "Work hard, listen, ask questions.", "Change jobs often."], 1, "'work hard, listen carefully… ask questions'."),
      ] },
      p4text: "THE JOB INTERVIEW\n\nLast month, I had the most important interview of my life. (1)___ I really wanted the job, so I prepared as carefully as I could.\n\nThe night before, I couldn't sleep. (2)___ In the morning, I put on my smartest clothes and left the house an hour early, because I knew I mustn't be late. When I arrived, three other candidates were already waiting. (3)___ For a moment, I nearly lost my confidence.\n\nBut then I remembered my sister's advice: 'You should just be yourself.' So I took a deep breath, walked in, and answered every question honestly. (4)___ The interviewer even laughed at one of my jokes. A week later, I got the email: I had the job! (5)___ Sometimes, all you have to do is believe in yourself.",
      p4options: [
        "It was for my dream position at a design company.",        // A -> gap 1
        "My head was full of questions and worries.",               // B -> gap 2
        "They all looked more experienced than me.",                // C -> gap 3
        "To my surprise, I began to relax and enjoy it.",           // D -> gap 4
        "I decided not to go to the interview at all.",             // E (extra)
        "I have never felt so proud in my life.",                   // F -> gap 5
        "The company closed down the next day.",                    // G (extra)
        "I already had ten years of experience.",                   // H (extra)
      ],
      p4q: { title: "La entrevista de trabajo (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: era para su puesto soñado."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: la cabeza llena de dudas."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: parecían con más experiencia."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: empezó a relajarse."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: nunca se sintió tan orgulloso."),
      ] },
      p5text: "Starting a new job can be stressful. On your first day, you (1)___ arrive on time and dress appropriately. You (2)___ to listen carefully and take notes, because there is a lot to learn. If you don't understand something, you (3)___ ask — nobody expects you to know everything. You should try to get on well with your (4)___, as good relationships make work easier. And remember, you don't have to be perfect; everybody (5)___ mistakes at first. With time, you'll feel more (6)___.",
      p5q: { title: "Huecos con opciones (modales/vocabulario)", items: [
        mc("Hueco 1", ["must", "mustn't", "needn't", "would"], 0, "'must arrive on time'."),
        mc("Hueco 2", ["need", "must", "should", "ought"], 0, "'need to listen' (need + to)."),
        mc("Hueco 3", ["should", "mustn't", "needn't", "would"], 0, "'you should ask'."),
        mc("Hueco 4", ["colleagues", "employers", "deadlines", "salaries"], 0, "'get on well with your colleagues'."),
        mc("Hueco 5", ["makes", "does", "takes", "gets"], 0, "'everybody makes mistakes'."),
        mc("Hueco 6", ["confident", "confidence", "confidently", "confide"], 0, "adjetivo → confident."),
      ] },
      p6text: "Hi Sam,\nGreat news — I got the job! I start on Monday. I'm a bit nervous because I (1)___ to wear a uniform and I (2)___ arrive by eight every morning. Apparently I'll also (3)___ to do some overtime at the weekend. My sister says I (4)___ just be myself and not worry too much. She's right — everyone (5)___ mistakes at first, don't they? I'd (6)___ get an early night before my first shift!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["have"], "'have to wear'."),
        fb("Hueco 2", ["must"], "'must arrive by eight'."),
        fb("Hueco 3", ["have"], "'have to do some overtime'."),
        fb("Hueco 4", ["should", "must"], "'I should just be myself'."),
        fb("Hueco 5", ["makes"], "'everyone makes mistakes'."),
        fb("Hueco 6", ["better"], "'I'd better get an early night'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a va a empezar su primer trabajo y está nervioso/a. Responde a su email (~100 palabras):\n· dile qué debe hacer el primer día,\n· cuéntale algo de tu experiencia laboral,\n· dale un consejo para causar buena impresión.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'What makes a good employee?' con tu opinión y razones.\n· RELATO: empieza con: 'It was my first day at work and everything went wrong.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Man: Do I have to wear a uniform? Woman: Yes, all staff must wear one. Two. Woman: When's the deadline? Man: You should hand it in by Friday. Three. Man: I'm always tired. Woman: You'd better talk to your boss about your shifts. Four. Woman: Did you get the job? Man: Yes! I start on Monday. Five. Man: Can I leave early today? Woman: You'll have to ask your supervisor. Six. Woman: Why are you so busy? Man: I've got loads of overtime this week. Seven. Man: What time do I start? Woman: You must be here by eight.", [
      mc("1. Does the man have to wear a uniform?", ["No.", "Yes, all staff must.", "Only sometimes."], 1, "'all staff must wear one'."),
      mc("2. When should he hand it in?", ["Monday.", "By Friday.", "Next month."], 1, "'by Friday'."),
      mc("3. What should the man do?", ["Quit.", "Talk to his boss about shifts.", "Sleep more."], 1, "'talk to your boss about your shifts'."),
      mc("4. When does the man start his job?", ["Today.", "On Monday.", "Next year."], 1, "'I start on Monday'."),
      mc("5. Who must he ask to leave early?", ["His colleague.", "His supervisor.", "Nobody."], 1, "'ask your supervisor'."),
      mc("6. Why is the man busy?", ["A holiday.", "Lots of overtime.", "A deadline passed."], 1, "'loads of overtime'."),
      mc("7. What time must he start?", ["Seven.", "Eight.", "Nine."], 1, "'by eight'."),
    ]),

    ...speakingParts("el trabajo y los empleos", { p1: "si trabajas o estudias, qué trabajo te gustaría y por qué", p2: "personas en su lugar de trabajo (una oficina, una cocina, una tienda)", p3: "qué trabajo de verano elegir para un/a estudiante", p4: "el trabajo, qué hace bueno a un empleado y el equilibrio vida-trabajo" }),

    SUMMARY("Resumen del Día 16", [
      "must (obligación propia) / have to (regla externa; pasado: had to); should/ought to (consejo); had better; need to.",
      "Todos + infinitivo SIN 'to' (menos have to / ought to / need to).",
      "Vocabulario del trabajo. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 17", "Escribe 3 normas de tu trabajo/estudios con must/have to/should. Repasa las flashcards. Mañana: prohibición y ausencia de obligación (mustn't/needn't)."),
  ],
};

// ───────────────────────── DÍA 17 ─────────────────────────
const DAY17 = {
  title: "Día 17 — Prohibición y ausencia de obligación · Normas y ley",
  description: "mustn't / can't (prohibición) vs don't have to / needn't (no hace falta). Vocabulario de normas y ley. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Distinguir prohibición (mustn't) de ausencia de obligación (don't have to).",
    summary: "Prohibición vs no-obligación; normas/ley; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'mustn't' = no hace falta (❌).", "'You don't must'.", "'needn't to'."],
    reviewPrompts: ["¿'mustn't' significa 'no hace falta' o 'está prohibido'?", "¿'don't have to' = ?"],
  },
  items: [
    TEXT("🔁 Repaso: obligación y consejo. Hoy la clave: PROHIBICIÓN (mustn't) ≠ AUSENCIA DE OBLIGACIÓN (don't have to). Vocabulario: NORMAS y LEY."),
    GRAMMAR("Prohibición y ausencia de obligación", `PROHIBIDO (¡no lo hagas!): mustn't / can't + infinitivo sin to.
· You mustn't smoke here. You can't park on double lines.
NO HACE FALTA (pero puedes): don't/doesn't have to · needn't + infinitivo sin to.
· You don't have to wear a tie (puedes, pero no es obligatorio). You needn't come early.
⚠️ ¡No confundas! 'mustn't' = prohibido. 'don't have to' = opcional. Son MUY diferentes.
PERMISO: can / be allowed to (You can leave early. You're allowed to take photos).`),
    WARN("Errores típicos del hispanohablante", "· ❌ You don't must smoke → ✅ You mustn't smoke.\n· ❌ 'mustn't' para 'no hace falta' → eso es 'don't have to'.\n· ❌ You needn't to come → ✅ You needn't come.\n· ❌ It's not allowed to enter → ✅ You're not allowed to enter."),
    grammarEx("Gramática — Prohibición / no-obligación", "Elige o completa.", [
      mc("Sign says 'No smoking'. You ___ smoke here.", ["don't have to", "mustn't", "needn't"], 1, "prohibido → mustn't."),
      mc("Entry is free. You ___ pay.", ["mustn't", "don't have to", "can't"], 1, "no hace falta → don't have to."),
      mc("It's a secret. You ___ tell anyone.", ["needn't", "mustn't", "don't have to"], 1, "prohibido → mustn't."),
      fb("Tomorrow is Sunday, so I ___ (not/have) get up early.", ["don't have to"], "no hace falta → don't have to."),
      mc("Choose:", ["You needn't to worry.", "You needn't worry.", "You needn't worrying."], 1, "needn't + infinitivo sin to."),
      mc("You ___ park here — it's not allowed.", ["can't", "don't have to", "needn't"], 0, "prohibido → can't."),
      fb("Guests ___ (be allowed) use the pool. (permiso)", ["are allowed to"], "permiso → are allowed to."),
    ]),
    GRAMMAR("Vocabulario del día — Normas y ley", "Léxico de normas y ley (B1)."),
    deck("B1 S4D17 — Normas y ley", [
      ["rule", "norma / regla", "You must follow the rules.", "sustantivo", "ruːl"],
      ["law", "ley", "It's against the law.", "sustantivo", "lɔː"],
      ["allowed", "permitido", "Photos are not allowed.", "adjetivo", "əˈlaʊd"],
      ["forbidden", "prohibido", "Smoking is forbidden here.", "adjetivo", "fəˈbɪdn"],
      ["fine", "multa", "I got a parking fine.", "sustantivo", "faɪn"],
      ["permission", "permiso", "You need permission to enter.", "sustantivo", "pəˈmɪʃn"],
      ["punish", "castigar", "They punish people who break the rules.", "verbo", "ˈpʌnɪʃ"],
      ["obey", "obedecer / cumplir", "You must obey the law.", "verbo", "əˈbeɪ"],
      ["ban", "prohibir / prohibición", "They banned cars from the centre.", "verbo/sustantivo", "bæn"],
      ["strict", "estricto", "The rules are very strict.", "adjetivo", "strɪkt"],
    ]),
    vocabEx("Vocabulario — Normas y ley", "Elige la opción correcta.", [
      mc("Money you pay as a punishment is a ___.", ["fine", "rule", "permission"], 0, "fine."),
      mc("If something is not allowed at all, it is ___.", ["forbidden", "allowed", "strict"], 0, "forbidden."),
      mc("To follow the law is to ___ it.", ["obey", "ban", "punish"], 0, "obey."),
      mc("To officially stop something is to ___ it.", ["ban", "obey", "allow"], 0, "ban."),
      mc("Rules that are very firmly applied are ___.", ["strict", "allowed", "forbidden"], 0, "strict."),
      mc("Official agreement to do something is ___.", ["permission", "fine", "rule"], 0, "permission."),
    ]),

    ...readingParts({
      p1: { title: "Normas y avisos", items: [
        mc("Sign: 'No photography allowed in the museum.'", ["You mustn't take photos.", "Photos are fine.", "Only phone photos."], 0, "'No photography allowed'."),
        mc("Notice: 'Entry free — no ticket required.'", ["You don't have to buy a ticket.", "You must buy a ticket.", "No entry."], 0, "'no ticket required'."),
        mc("Warning: 'Parking here is forbidden. Fine: £60.'", ["You can't park; there's a fine.", "Free parking.", "Parking encouraged."], 0, "'forbidden. Fine: £60'."),
        mc("Sign: 'Under-18s not allowed without an adult.'", ["Minors need an adult.", "No adults allowed.", "Everyone welcome."], 0, "'not allowed without an adult'."),
        mc("Note: 'You needn't bring food — lunch is provided.'", ["You don't have to bring food.", "Bring your own food.", "No lunch."], 0, "'You needn't bring food'."),
      ] },
      p2text: "FOUR PLACES WITH RULES\n\nA) The Library — you must be quiet, and mobile phones mustn't be used; food is forbidden.\nB) The Swimming Pool — you have to shower first; you're not allowed to run; children need an adult.\nC) The National Park — you needn't pay to enter, but you mustn't drop litter or pick flowers.\nD) The Office — you don't have to wear a suit, but you must arrive on time and follow safety rules.",
      p2q: { title: "Emparejar personas y lugares", items: [
        mc("Nadia wants somewhere silent to study.", ["A", "B", "C", "D"], 0, "The Library."),
        mc("Ben is taking his young son for a swim.", ["A", "B", "C", "D"], 1, "The Swimming Pool."),
        mc("Sara wants a free day out in nature.", ["A", "B", "C", "D"], 2, "The National Park."),
        mc("Leo prefers casual clothes but works nine to five.", ["A", "B", "C", "D"], 3, "The Office."),
        mc("A place where you mustn't use your phone.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "DO WE HAVE TOO MANY RULES?\n\nEverywhere we go, we are surrounded by rules. Some tell us what we must do; others tell us what we mustn't. A few people complain that there are far too many, and that our freedom is disappearing. But personally, I believe that most rules exist for a very good reason.\n\nTake traffic laws, for example. You mustn't drive through a red light, and you have to wear a seatbelt. These rules can seem annoying, but they save thousands of lives every year. Without them, our roads would be chaos. The same is true in public places. In a library, you mustn't make noise, so that everyone can concentrate. At a swimming pool, you're not allowed to run, because the floor is wet and dangerous.\n\nOf course, not every rule is sensible, and we shouldn't obey a rule blindly if it's clearly unfair. But we mustn't forget that rules are what allow millions of strangers to live together peacefully. A society with no rules at all wouldn't be free — it would simply be dangerous. So the next time a rule annoys you, stop and ask yourself why it might exist. The answer is often more reasonable than you think.",
      p3q: { title: "¿Tenemos demasiadas normas? (texto largo)", items: [
        mc("What do some people complain about?", ["Too few rules.", "Too many rules, losing freedom.", "No rules."], 1, "'far too many, and that our freedom is disappearing'."),
        mc("Why are traffic rules important?", ["They're annoying.", "They save thousands of lives.", "They slow cars."], 1, "'they save thousands of lives'."),
        mc("Why mustn't you run at a pool?", ["It's rude.", "The wet floor is dangerous.", "It's tiring."], 1, "'the floor is wet and dangerous'."),
        mc("When shouldn't we obey a rule?", ["Always obey.", "If it's clearly unfair.", "Never obey."], 1, "'if it's clearly unfair'."),
        mc("What does the writer say a society with no rules would be?", ["Free.", "Dangerous.", "Happy."], 1, "'it would simply be dangerous'."),
      ] },
      p4text: "THE RULE I BROKE\n\nWhen I was at school, there was one rule I hated: we weren't allowed to use our phones during the day. (1)___ I thought it was completely unfair.\n\nOne afternoon, I decided to break it. During a boring lesson, I took out my phone under the desk to text a friend. (2)___ Unfortunately, my teacher saw me immediately. She didn't shout. Instead, she asked me to stay behind after class. (3)___ 'The rule isn't about control,' she explained. 'It's so you can focus and actually talk to each other.'\n\nAt the time, I didn't believe her. (4)___ But years later, I understand exactly what she meant. Now, when I see a group of friends staring at their phones instead of talking, I feel sad. (5)___ Some rules, it seems, are wiser than we realise.",
      p4options: [
        "Everyone I knew had a phone, after all.",                  // A -> gap 1
        "I was sure nobody would notice.",                          // B -> gap 2
        "What she said surprised me.",                              // C -> gap 3
        "I just thought she was being strict.",                     // D -> gap 4
        "I was given a medal for breaking the rule.",               // E (extra)
        "That old school rule suddenly makes perfect sense.",       // F -> gap 5
        "Phones were completely banned everywhere in the world.",   // G (extra)
        "I never owned a phone at all.",                            // H (extra)
      ],
      p4q: { title: "La norma que rompí (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: todos tenían móvil."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: creía que nadie lo vería."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: lo que dijo le sorprendió."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: creía que era estricta."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la norma cobra sentido."),
      ] },
      p5text: "Every country has laws that people must (1)___. If you break the (2)___, you may have to pay a (3)___ or face other punishment. Of course, not everything is (4)___: in most places you're not (5)___ to drive too fast or drop litter. But many things that seem forbidden are actually fine — for example, you usually (6)___ have to pay to walk in a public park.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["obey", "ban", "punish", "allow"], 0, "'must obey'."),
        mc("Hueco 2", ["law", "fine", "permission", "rule"], 0, "'break the law'."),
        mc("Hueco 3", ["fine", "rule", "ban", "law"], 0, "'pay a fine'."),
        mc("Hueco 4", ["forbidden", "allowed", "strict", "obeyed"], 0, "'not everything is forbidden'."),
        mc("Hueco 5", ["allowed", "forbidden", "banned", "obeyed"], 0, "'not allowed to drive too fast'."),
        mc("Hueco 6", ["don't", "mustn't", "can't", "needn't"], 0, "'you don't have to pay'."),
      ] },
      p6text: "Hi Sam,\nI'm visiting the national park tomorrow. Good news: you (1)___ have to pay to get in — it's free! But there are some rules. You (2)___ drop any litter, and you're not (3)___ to pick the flowers. You also (4)___ to keep dogs on a lead. Apparently the rangers are quite (5)___ and can give you a (6)___ if you break the rules. Still, it should be a lovely day. Want to come?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["don't"], "'don't have to pay'."),
        fb("Hueco 2", ["mustn't"], "'mustn't drop litter'."),
        fb("Hueco 3", ["allowed"], "'not allowed to pick the flowers'."),
        fb("Hueco 4", ["have"], "'have to keep dogs on a lead'."),
        fb("Hueco 5", ["strict"], "'the rangers are quite strict'."),
        fb("Hueco 6", ["fine"], "'give you a fine'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a va a visitar tu ciudad y pregunta por las normas locales. Responde a su email (~100 palabras):\n· dile una cosa que está prohibida (mustn't),\n· dile una cosa que no hace falta hacer (don't have to),\n· dale un consejo para no tener problemas.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Are rules always necessary?' con tu opinión y razones.\n· RELATO: empieza con: 'I knew I wasn't allowed to, but I did it anyway.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Can I take photos here? Man: Sorry, it's not allowed in the museum. Two. Man: Do I need a ticket? Woman: No, you don't have to pay — it's free. Three. Woman: Why did you get a fine? Man: I parked where it was forbidden. Four. Man: Should I bring lunch? Woman: You needn't — it's provided. Five. Woman: Are the rules strict here? Man: Very. You must obey them all. Six. Man: Can we bring the dog? Woman: Yes, but you have to keep it on a lead.", [
      mc("1. Can the woman take photos?", ["Yes.", "No, it's not allowed.", "Only outside."], 1, "'not allowed in the museum'."),
      mc("2. Does the man need a ticket?", ["Yes.", "No, it's free.", "Only at weekends."], 1, "'you don't have to pay — it's free'."),
      mc("3. Why did the man get a fine?", ["Speeding.", "Parking where forbidden.", "No ticket."], 1, "'I parked where it was forbidden'."),
      mc("4. Should he bring lunch?", ["Yes.", "No, it's provided.", "Only a drink."], 1, "'You needn't — it's provided'."),
      mc("5. What are the rules like?", ["Relaxed.", "Very strict.", "None."], 1, "'Very. You must obey them all'."),
      mc("6. Can they bring the dog?", ["No.", "Yes, on a lead.", "Only small dogs."], 1, "'you have to keep it on a lead'."),
    ]),

    ...speakingParts("las normas y la vida en sociedad", { p1: "qué normas hay en tu casa o trabajo y si te parecen justas", p2: "personas en un lugar con normas (un museo, una piscina, un parque)", p3: "qué normas poner en una biblioteca nueva para estudiantes", p4: "las normas, cuándo son necesarias y qué pasaría en una sociedad sin ellas" }),

    SUMMARY("Resumen del Día 17", [
      "PROHIBIDO: mustn't / can't. NO HACE FALTA: don't have to / needn't. ¡No los confundas!",
      "PERMISO: can / be allowed to.",
      "Vocabulario de normas y ley. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 18", "Escribe 2 frases con 'mustn't' y 2 con 'don't have to'. Repasa las flashcards. Mañana: la voz pasiva (presente y pasado)."),
  ],
};

// ───────────────────────── DÍA 18 ─────────────────────────
const DAY18 = {
  title: "Día 18 — La voz pasiva (presente y pasado) · Inventos y tecnología",
  description: "is/are + participio y was/were + participio. Vocabulario de tecnología e inventos. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Formar la voz pasiva en presente y pasado simple.",
    summary: "Voz pasiva presente/pasado; tecnología/inventos; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'is make' en vez de 'is made'.", "olvidar el verbo 'be'.", "'was invent'."],
    reviewPrompts: ["¿Cómo formas la pasiva? (be + ___)", "¿'The phone was invent' o 'was invented'?"],
  },
  items: [
    TEXT("🔁 Repaso: prohibición. Hoy la VOZ PASIVA (presente y pasado): cuando lo importante es la acción, no quién la hace. Vocabulario: INVENTOS y TECNOLOGÍA."),
    GRAMMAR("La voz pasiva (presente y pasado)", `FORMA: sujeto + BE (en el tiempo adecuado) + PARTICIPIO PASADO.
PRESENTE: am/is/are + participio → Chocolate is made from cacao. Cars are produced here.
PASADO: was/were + participio → The bridge was built in 1890. Photos were taken.
El QUIÉN (agente) se añade con 'by' solo si es importante: The lamp was invented by Edison.
Se usa cuando el AGENTE es desconocido, obvio o poco importante: English is spoken here.
PARTICIPIOS: regulares -ed (invented); irregulares: made, built, written, taken, sold, known, found.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Chocolate is make from… → ✅ is made.\n· ❌ The phone was invent → ✅ was invented.\n· ❌ olvidar 'be': The book written → ✅ The book was written.\n· Concordancia: Cars ARE made (plural)."),
    grammarEx("Gramática — Voz pasiva presente/pasado", "Pon el verbo en pasiva.", [
      fb("Chocolate ___ (make) from cacao beans. (presente)", ["is made"], "is + participio."),
      fb("These cars ___ (produce) in Japan. (presente)", ["are produced"], "are + participio."),
      fb("The telephone ___ (invent) in 1876. (pasado)", ["was invented"], "was + participio."),
      fb("The pyramids ___ (build) thousands of years ago.", ["were built"], "were + participio (irregular)."),
      mc("Choose:", ["This book was write by Orwell.", "This book was written by Orwell.", "This book was wrote by Orwell."], 1, "participio: written."),
      fb("English ___ (speak) all over the world. (presente)", ["is spoken"], "is + spoken."),
      fb("The photos ___ (take) yesterday. (pasado)", ["were taken"], "were + taken."),
    ]),
    GRAMMAR("Vocabulario del día — Inventos y tecnología", "Léxico de tecnología (B1)."),
    deck("B1 S4D18 — Inventos y tecnología", [
      ["invent", "inventar", "Who invented the internet?", "verbo", "ɪnˈvent"],
      ["device", "dispositivo / aparato", "This device saves energy.", "sustantivo", "dɪˈvaɪs"],
      ["screen", "pantalla", "The screen is cracked.", "sustantivo", "skriːn"],
      ["charge", "cargar (batería)", "I need to charge my phone.", "verbo", "tʃɑːdʒ"],
      ["download", "descargar", "I downloaded the app.", "verbo", "ˌdaʊnˈləʊd"],
      ["update", "actualizar / actualización", "The software needs an update.", "verbo/sustantivo", "ʌpˈdeɪt"],
      ["wireless", "inalámbrico", "It uses a wireless connection.", "adjetivo", "ˈwaɪələs"],
      ["battery", "batería / pila", "The battery is low.", "sustantivo", "ˈbætəri"],
      ["gadget", "aparato / cacharro", "He loves new gadgets.", "sustantivo", "ˈɡædʒɪt"],
      ["waterproof", "resistente al agua", "This watch is waterproof.", "adjetivo", "ˈwɔːtəpruːf"],
    ]),
    vocabEx("Vocabulario — Inventos y tecnología", "Elige la opción correcta.", [
      mc("A small useful electronic tool is a ___.", ["gadget", "battery", "screen"], 0, "gadget."),
      mc("To put electricity into a phone is to ___ it.", ["charge", "download", "update"], 0, "charge."),
      mc("To copy a file from the internet is to ___ it.", ["download", "charge", "invent"], 0, "download."),
      mc("A connection with no cables is ___.", ["wireless", "waterproof", "screen"], 0, "wireless."),
      mc("If water can't damage it, it's ___.", ["waterproof", "wireless", "device"], 0, "waterproof."),
      mc("The part you look at and touch on a phone is the ___.", ["screen", "battery", "gadget"], 0, "screen."),
    ]),

    ...readingParts({
      p1: { title: "Tecnología y avisos", items: [
        mc("Label: 'This device is not waterproof — keep dry.'", ["Water can damage it.", "It's waterproof.", "It's for swimming."], 0, "'not waterproof — keep dry'."),
        mc("Note: 'Software is updated automatically overnight.'", ["Updates happen at night by themselves.", "No updates.", "Update it yourself."], 0, "'updated automatically overnight'."),
        mc("Warning: 'Battery low — charge your device now.'", ["Charge the device.", "Battery is full.", "Turn it off."], 0, "'charge your device now'."),
        mc("Sign: 'Free wireless internet available here.'", ["Free wifi is available.", "No internet.", "Pay for internet."], 0, "'Free wireless internet'."),
        mc("Text: 'The app was downloaded ten million times.'", ["Many people downloaded the app.", "The app was deleted.", "Nobody used it."], 0, "'downloaded ten million times'."),
      ] },
      p2text: "FOUR USEFUL GADGETS\n\nA) The SolarCharger — charged by sunlight; perfect for camping, where there's no electricity.\nB) The AquaBook — a waterproof e-reader; it can be used in the bath or by the pool.\nC) The TinyTracker — a small device that is attached to your keys, so they're never lost again.\nD) The QuietBuds — wireless earphones that block noise; ideal for busy trains and offices.",
      p2q: { title: "Emparejar personas y aparatos", items: [
        mc("Nadia goes camping and needs power without electricity.", ["A", "B", "C", "D"], 0, "SolarCharger."),
        mc("Ben loves reading in the bath.", ["A", "B", "C", "D"], 1, "AquaBook."),
        mc("Sara is always losing her keys.", ["A", "B", "C", "D"], 2, "TinyTracker."),
        mc("Leo wants silence on his noisy commute.", ["A", "B", "C", "D"], 3, "QuietBuds."),
        mc("A device that is powered by the sun.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE INVENTION THAT CHANGED EVERYTHING\n\nWe use it every day, often without a second thought, but the smartphone is one of the most important inventions in human history. The first modern smartphone was released in 2007, and in less than twenty years it has completely changed the way we live.\n\nBefore smartphones, information was found in books or on desktop computers. Photographs were taken with cameras, music was played on separate devices, and maps were printed on paper. Today, all of these things are done by a single object that fits in our pocket. Messages are sent instantly across the world, and questions are answered in seconds. For many people, life without a smartphone is now almost impossible to imagine.\n\nHowever, not everyone believes the change has been entirely positive. Some experts worry that we are becoming addicted to our screens, and that real conversations are being replaced by online ones. It is true that these devices must be used sensibly. But used well, the smartphone remains an extraordinary tool. Never before in history has so much knowledge been placed in the hands of so many people.",
      p3q: { title: "El invento que lo cambió todo (texto largo)", items: [
        mc("When was the first modern smartphone released?", ["1997.", "2007.", "2017."], 1, "'released in 2007'."),
        mc("How were photographs taken before smartphones?", ["With phones.", "With cameras.", "With computers."], 1, "'taken with cameras'."),
        mc("What can a smartphone do now?", ["Only make calls.", "Many things in one pocket object.", "Nothing useful."], 1, "'all of these things are done by a single object'."),
        mc("What do some experts worry about?", ["Slow phones.", "Addiction and fewer real conversations.", "High prices."], 1, "'addicted to our screens… real conversations… replaced'."),
        mc("What is the writer's overall view?", ["Smartphones are useless.", "Used well, it's an extraordinary tool.", "We should ban them."], 1, "'used well… an extraordinary tool'."),
      ] },
      p4text: "A WORLD WITHOUT ELECTRICITY\n\nLast winter, a huge storm hit our town, and the electricity was cut off for three whole days. (1)___ At first, we were annoyed. Our phones couldn't be charged, the heating didn't work, and no food could be cooked on the electric cooker.\n\nBut something strange and rather wonderful happened. (2)___ With no screens to distract us, my family actually started talking to each other. Candles were lit, board games were found in the cupboard, and stories were told late into the night. (3)___ My little brother, who normally never puts down his tablet, taught us all a card game.\n\nWhen the power finally came back, part of me was almost disappointed. (4)___ The experience reminded me how much we depend on technology — and how little we sometimes need it. (5)___ Now, once a week, we switch everything off for an evening, on purpose.",
      p4options: [
        "Nothing that needed power could be used.",                 // A -> gap 1
        "Slowly, we discovered a different way of living.",         // B -> gap 2
        "It was the best evening we had spent together in months.", // C -> gap 3
        "The house filled with light and noise again.",            // D -> gap 4
        "We immediately bought ten new gadgets.",                   // E (extra)
        "That dark, quiet week taught us a real lesson.",           // F -> gap 5
        "Nobody in my family owns a phone.",                        // G (extra)
        "The storm never actually reached our town.",               // H (extra)
      ],
      p4q: { title: "Un mundo sin electricidad (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: nada con corriente funcionaba."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: descubrieron otra forma de vivir."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: la mejor velada en meses."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: la casa se llenó de luz y ruido."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: esa semana enseñó una lección."),
      ] },
      p5text: "Technology has changed our lives completely. Music that used to be (1)___ on CDs is now streamed online, and information that was once (2)___ in libraries is found on the internet in seconds. Most modern (3)___ are wireless, and many are even (4)___, so they can be used in the rain. Of course, the (5)___ needs to be charged regularly. Some people think we should use these devices less, but few of us could imagine life without our (6)___ now.",
      p5q: { title: "Huecos con opciones (vocabulario)", items: [
        mc("Hueco 1", ["played", "played on", "playing", "plays"], 0, "'used to be played on CDs'."),
        mc("Hueco 2", ["found", "find", "finding", "founded"], 0, "'was found in libraries'."),
        mc("Hueco 3", ["devices", "screens", "batteries", "updates"], 0, "'modern devices'."),
        mc("Hueco 4", ["waterproof", "wireless", "downloaded", "charged"], 0, "'even waterproof… used in the rain'."),
        mc("Hueco 5", ["battery", "screen", "gadget", "update"], 0, "'the battery needs to be charged'."),
        mc("Hueco 6", ["gadgets", "screens", "batteries", "updates"], 0, "'life without our gadgets'."),
      ] },
      p6text: "Hi Sam,\nI've just bought an amazing new gadget! It's a smartwatch and it (1)___ made in Switzerland. The best thing is that it's (2)___, so I can wear it swimming. The battery only needs to (3)___ charged once a week, and it's completely (4)___, with no cables at all. Apparently the software (5)___ updated automatically every night. I think these watches (6)___ invented only a few years ago, but I can't imagine life without mine now!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["is", "was"], "'is/was made in Switzerland' (pasiva)."),
        fb("Hueco 2", ["waterproof"], "'it's waterproof'."),
        fb("Hueco 3", ["be"], "'needs to be charged'."),
        fb("Hueco 4", ["wireless"], "'completely wireless'."),
        fb("Hueco 5", ["is"], "'the software is updated' (pasiva presente)."),
        fb("Hueco 6", ["were"], "'were invented' (pasiva pasado, plural)."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por un aparato tecnológico que usas mucho. Responde a su email (~100 palabras):\n· dile qué aparato es y para qué lo usas,\n· cuenta algo que puedes hacer con él,\n· pregúntale por su aparato favorito.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Has technology made our lives better?' con tu opinión y razones.\n· RELATO: empieza con: 'The screen went black and the whole house fell silent.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha la información sobre un museo de la tecnología y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear a guide talking about a technology museum. Welcome to the Museum of Invention. The museum was opened in 1998 and it now has over five thousand objects. On the ground floor, you can see the first telephone, which was invented in 1876. Upstairs, our most popular exhibit is a computer that was built in 1950 and once filled an entire room. Photography is allowed, but flash mustn't be used. The gift shop, where you can buy books and gadgets, is next to the main entrance. The museum closes at six o'clock.", [
      fb("The museum was opened in ___.", ["1998"], "'opened in 1998'."),
      fb("It has over ___ thousand objects.", ["five", "5"], "'over five thousand objects'."),
      fb("The first telephone was invented in ___.", ["1876"], "'invented in 1876'."),
      fb("You mustn't use ___ when taking photos.", ["flash"], "'flash mustn't be used'."),
      fb("The museum closes at ___ o'clock.", ["six", "6"], "'closes at six o'clock'."),
    ]),

    ...speakingParts("la tecnología y los inventos", { p1: "qué aparatos usas cada día y cuál no podrías vivir sin él", p2: "personas usando tecnología (un móvil, un ordenador, un videojuego)", p3: "qué aparato regalar a un abuelo/a que quiere modernizarse", p4: "la tecnología, si ha mejorado nuestra vida y si dependemos demasiado de ella" }),

    SUMMARY("Resumen del Día 18", [
      "Pasiva = BE + participio. Presente: is/are made. Pasado: was/were built.",
      "Agente con 'by' solo si importa. Se usa cuando el quién es desconocido/obvio.",
      "Vocabulario de tecnología. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 19", "Escribe 3 frases en pasiva (2 presente, 1 pasado) sobre productos o inventos. Repasa las flashcards. Mañana: pasiva en otros tiempos + get-passive."),
  ],
};

// ───────────────────────── DÍA 19 ─────────────────────────
const DAY19 = {
  title: "Día 19 — Pasiva (otros tiempos) y get-passive · El medio ambiente",
  description: "Pasiva con present perfect, futuro y modales, y el get-passive. Vocabulario de medio ambiente. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Usar la pasiva en varios tiempos y reconocer el get-passive.",
    summary: "Pasiva avanzada + get-passive; medio ambiente; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'has been build'.", "'will be recycle'.", "'get invited' mal usado."],
    reviewPrompts: ["¿Pasiva con present perfect? (has been ___)", "¿Pasiva con 'will'?"],
  },
  items: [
    TEXT("🔁 Repaso: pasiva presente/pasado. Hoy la pasiva en OTROS tiempos (present perfect, futuro, modales) y el 'get-passive'. Vocabulario: el MEDIO AMBIENTE."),
    GRAMMAR("Pasiva en otros tiempos y get-passive", `Se cambia solo el verbo BE al tiempo necesario; el participio no cambia:
· PRESENT PERFECT: has/have been + participio → The bins have been emptied. A vaccine has been developed.
· FUTURO: will be + participio → The park will be cleaned tomorrow. New laws will be introduced.
· MODALES: modal + be + participio → Bottles must be recycled. Water can be saved.
· CONTINUO PRESENTE: is/are being + participio → A new bridge is being built.
GET-PASSIVE (informal, hablado): get + participio en vez de be → He got fired. My bike got stolen.`),
    WARN("Errores típicos del hispanohablante", "· ❌ has been build → ✅ has been built.\n· ❌ will be recycle → ✅ will be recycled.\n· ❌ must be recycle → ✅ must be recycled.\n· get-passive: My phone got stolen (informal) = My phone was stolen."),
    grammarEx("Gramática — Pasiva avanzada / get-passive", "Pon la pasiva correcta.", [
      fb("The streets ___ (clean, present perfect) already.", ["have been cleaned"], "have been + participio."),
      fb("A new hospital ___ (build, futuro) next year.", ["will be built"], "will be + built."),
      fb("Plastic bottles ___ (must/recycle).", ["must be recycled"], "modal + be + participio."),
      fb("A new bridge ___ (build, presente continuo) at the moment.", ["is being built"], "is being + participio."),
      mc("Choose (informal):", ["My bike was get stolen.", "My bike got stolen.", "My bike got steal."], 1, "get + participio."),
      fb("Energy ___ (can/save) by turning off lights.", ["can be saved"], "can be + saved."),
      fb("The report ___ (write, present perfect) by the students.", ["has been written"], "has been + written."),
    ]),
    GRAMMAR("Vocabulario del día — Medio ambiente", "Léxico medioambiental (B1)."),
    deck("B1 S4D19 — Medio ambiente", [
      ["pollution", "contaminación", "Air pollution is a big problem.", "sustantivo", "pəˈluːʃn"],
      ["recycle", "reciclar", "We recycle glass and paper.", "verbo", "ˌriːˈsaɪkl"],
      ["waste", "residuos / desperdiciar", "Don't waste water.", "sustantivo/verbo", "weɪst"],
      ["climate change", "cambio climático", "Climate change affects us all.", "colocación", "ˈklaɪmət tʃeɪndʒ"],
      ["environment", "medio ambiente", "We must protect the environment.", "sustantivo", "ɪnˈvaɪrənmənt"],
      ["energy", "energía", "Solar energy is clean.", "sustantivo", "ˈenədʒi"],
      ["reduce", "reducir", "We should reduce plastic.", "verbo", "rɪˈdjuːs"],
      ["endangered", "en peligro (de extinción)", "Pandas are an endangered species.", "adjetivo", "ɪnˈdeɪndʒəd"],
      ["renewable", "renovable", "Wind is a renewable source.", "adjetivo", "rɪˈnjuːəbl"],
      ["litter", "basura (en la calle)", "Don't drop litter in the park.", "sustantivo", "ˈlɪtə"],
    ]),
    vocabEx("Vocabulario — Medio ambiente", "Elige la opción correcta.", [
      mc("Dirty air, water or land is called ___.", ["pollution", "energy", "waste"], 0, "pollution."),
      mc("To use materials again is to ___.", ["recycle", "reduce", "waste"], 0, "recycle."),
      mc("Energy from the sun or wind is ___.", ["renewable", "endangered", "polluted"], 0, "renewable."),
      mc("Animals at risk of disappearing are ___.", ["endangered", "renewable", "wasted"], 0, "endangered."),
      mc("Rubbish left on the ground in public is ___.", ["litter", "energy", "climate"], 0, "litter."),
      mc("The long-term change in the Earth's weather is ___.", ["climate change", "pollution", "waste"], 0, "climate change."),
    ]),

    ...readingParts({
      p1: { title: "Medio ambiente y avisos", items: [
        mc("Sign: 'Please recycle — bottles must be placed in the green bin.'", ["Put bottles in the green bin.", "Throw bottles anywhere.", "No recycling."], 0, "'bottles must be placed in the green bin'."),
        mc("Notice: 'Lights are switched off automatically to save energy.'", ["Lights turn off to save energy.", "Lights stay on.", "No lights."], 0, "'switched off automatically to save energy'."),
        mc("Warning: 'Anyone who drops litter will be fined.'", ["Littering leads to a fine.", "Litter is fine.", "No fines."], 0, "'will be fined'."),
        mc("Poster: 'A new recycling centre is being built here.'", ["A recycling centre is under construction.", "It's finished.", "It's closing."], 0, "'is being built'."),
        mc("Label: 'Made from 100% recycled paper.'", ["The paper was recycled.", "New paper only.", "No paper."], 0, "'from 100% recycled paper'."),
      ] },
      p2text: "FOUR GREEN PROJECTS\n\nA) City Bikes — free bicycles have been placed around the city to reduce car pollution.\nB) Solar Schools — panels are being installed on school roofs, so lessons are powered by the sun.\nC) The Clean-Up Club — volunteers meet at weekends and litter is collected from beaches and parks.\nD) Repair Café — instead of being thrown away, broken items are fixed for free by local experts.",
      p2q: { title: "Emparejar personas y proyectos", items: [
        mc("Nadia wants to cycle instead of driving.", ["A", "B", "C", "D"], 0, "City Bikes."),
        mc("Ben is a teacher interested in clean energy for his school.", ["A", "B", "C", "D"], 1, "Solar Schools."),
        mc("Sara loves the beach and wants to help clean it.", ["A", "B", "C", "D"], 2, "The Clean-Up Club."),
        mc("Leo has a broken toaster he doesn't want to throw away.", ["A", "B", "C", "D"], 3, "Repair Café."),
        mc("A project where things are fixed instead of thrown away.", ["A", "B", "C", "D"], 3, "D."),
      ] },
      p3text: "SMALL CHANGES, BIG DIFFERENCE\n\nClimate change is a huge problem, and it's easy to feel that nothing an ordinary person does could possibly matter. But I strongly believe that small changes, made by millions of people, can add up to a big difference. We don't have to save the world alone; we just have to do our part.\n\nIn my own home, several simple changes have already been made. Lights are switched off when we leave a room, and the heating is turned down at night. We've stopped buying bottled water, because so much plastic is wasted, and instead we use a filter. Most of our rubbish is now recycled, and food waste is turned into compost for the garden. None of this is difficult, and our energy bills have actually gone down.\n\nOf course, big decisions must also be taken by governments and companies; the problem can't be solved by individuals alone. But I don't think that's a reason to do nothing. Every plastic bottle that isn't used, every journey made by bike instead of car, is a step in the right direction. If everybody waited for somebody else to act first, nothing would ever change.",
      p3q: { title: "Pequeños cambios, gran diferencia (texto largo)", items: [
        mc("What does the writer believe about small changes?", ["They don't matter.", "Made by millions, they add up.", "Only governments matter."], 1, "'small changes, made by millions… a big difference'."),
        mc("Why did they stop buying bottled water?", ["It's expensive.", "So much plastic is wasted.", "It tastes bad."], 1, "'so much plastic is wasted'."),
        mc("What happens to their food waste?", ["It's thrown away.", "It's turned into compost.", "It's recycled as plastic."], 1, "'food waste is turned into compost'."),
        mc("What has happened to their energy bills?", ["Gone up.", "Gone down.", "Stayed the same."], 1, "'our energy bills have actually gone down'."),
        mc("What does the writer say about doing nothing?", ["It's fine.", "If everyone waited, nothing would change.", "Only experts can act."], 1, "'If everybody waited… nothing would ever change'."),
      ] },
      p4text: "THE RIVER THAT CAME BACK TO LIFE\n\nWhen my mother was young, the river that runs through our town was almost dead. (1)___ For years, waste had been poured into the water by local factories, and the fish had disappeared.\n\nThen, about twenty years ago, everything began to change. (2)___ New laws were introduced, and the factories were no longer allowed to pollute the river. Local volunteers organised clean-ups, and tonnes of rubbish were removed from the banks. (3)___ Slowly, the water became clearer.\n\nToday, the transformation is amazing. (4)___ Fish have returned, birds nest along the banks, and on sunny weekends the riverside is full of families. My mother can hardly believe it's the same place. (5)___ It proves that, when people work together, even the greatest damage can sometimes be undone.",
      p4options: [
        "Nobody would have dreamed of swimming in it.",             // A -> gap 1
        "People had finally decided that enough was enough.",       // B -> gap 2
        "Trees were planted and paths were built.",                 // C -> gap 3
        "The river is now cleaner than it has been for a century.", // D -> gap 4
        "The factories were allowed to pollute even more.",         // E (extra)
        "Our river's recovery gives me real hope.",                 // F -> gap 5
        "The town was completely abandoned.",                       // G (extra)
        "Nothing has changed since then at all.",                   // H (extra)
      ],
      p4q: { title: "El río que volvió a la vida (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: nadie soñaría con nadar en él."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: la gente dijo basta."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: se plantaron árboles y caminos."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: el río está más limpio que en un siglo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la recuperación da esperanza."),
      ] },
      p5text: "A lot can (1)___ done to protect the environment. At home, waste should (2)___ recycled, and energy can (3)___ saved simply by switching off lights. In many cities, new bike lanes (4)___ being built to reduce pollution. Renewable (5)___ from the sun and wind is becoming cheaper every year. If these small steps (6)___ taken by everyone, the results would be enormous.",
      p5q: { title: "Huecos con opciones (pasiva/vocabulario)", items: [
        mc("Hueco 1", ["be", "been", "being", "is"], 0, "'can be done'."),
        mc("Hueco 2", ["be", "been", "being", "is"], 0, "'should be recycled'."),
        mc("Hueco 3", ["be", "been", "being", "to"], 0, "'can be saved'."),
        mc("Hueco 4", ["are", "is", "has", "have"], 0, "'are being built' (plural)."),
        mc("Hueco 5", ["energy", "pollution", "litter", "waste"], 0, "'renewable energy'."),
        mc("Hueco 6", ["were", "was", "are", "been"], 0, "'if these steps were taken' (condicional)."),
      ] },
      p6text: "Hi Sam,\nOur town has changed so much! A new recycling centre (1)___ been built near the station, and solar panels (2)___ being installed on all the schools. Even the old river has (3)___ cleaned up — fish have come back! Apparently new bike lanes will (4)___ built next year too. At home, we recycle everything and energy (5)___ saved by switching off lights. I really think small changes can (6)___ a big difference. What's your town doing?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["has"], "'has been built' (present perfect pasiva)."),
        fb("Hueco 2", ["are"], "'are being installed'."),
        fb("Hueco 3", ["been"], "'has been cleaned up'."),
        fb("Hueco 4", ["be"], "'will be built'."),
        fb("Hueco 5", ["is"], "'energy is saved'."),
        fb("Hueco 6", ["make"], "'can make a big difference'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a quiere ser más ecológico/a. Responde a su email (~100 palabras):\n· dile qué haces tú para cuidar el medio ambiente,\n· dale un consejo fácil para empezar,\n· pregúntale qué se hace en su ciudad.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'What can young people do to help the environment?' con ideas.\n· RELATO: empieza con: 'The beach had never looked so clean.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con una joven activista medioambiental y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young environmental activist, Mia. Interviewer: Mia, when did you become interested in the environment? Mia: When I was about twelve. Our local river was really polluted, and it upset me. Interviewer: What did you decide to do? Mia: I started a clean-up club with some friends. Every weekend, litter is collected from the riverbank. Interviewer: Has it made a difference? Mia: Definitely. The river is much cleaner now, and even the fish have come back. Interviewer: What's your message to other young people? Mia: Don't wait for adults to fix everything. Small actions really do add up. Interviewer: What's your next project? Mia: We're planting trees along the river this spring.", [
      mc("When did Mia become interested in the environment?", ["At six.", "At about twelve.", "As an adult."], 1, "'about twelve'."),
      mc("What upset her?", ["The traffic.", "The polluted river.", "The litter at school."], 1, "'local river was really polluted'."),
      mc("What did she start?", ["A shop.", "A clean-up club.", "A website."], 1, "'a clean-up club'."),
      mc("What proof is there that it worked?", ["More litter.", "The fish have come back.", "Nothing changed."], 1, "'even the fish have come back'."),
      mc("What is her message to young people?", ["Wait for adults.", "Small actions add up.", "Do nothing."], 1, "'Small actions really do add up'."),
    ]),

    ...speakingParts("el medio ambiente", { p1: "qué haces para cuidar el medio ambiente y si te preocupa el cambio climático", p2: "personas cuidando el entorno (reciclando, en bici, limpiando una playa)", p3: "qué proyecto ecológico empezar en vuestro instituto o barrio", p4: "el medio ambiente, qué puede hacer cada persona y de quién es la responsabilidad" }),

    SUMMARY("Resumen del Día 19", [
      "Pasiva en otros tiempos: has been done, will be built, must be recycled, is being built.",
      "get-passive (informal): got stolen, got fired.",
      "Vocabulario de medio ambiente. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 20", "Escribe 3 frases pasivas en distintos tiempos sobre tu ciudad. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 20 ─────────────────────────
const DAY20 = {
  title: "Día 20 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de modales de obligación, prohibición y voz pasiva. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 4.",
  pedagogy: {
    objective: "Consolidar los modales y la voz pasiva.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 5."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 4 del B1. Consolidas obligación, consejo, prohibición y voz pasiva. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 4", `1) Obligación/consejo: must / have to (had to) / should / ought to / had better / need to.
2) Prohibición: mustn't / can't. No-obligación: don't have to / needn't. Permiso: can / be allowed to.
3) Voz pasiva: BE + participio. Presente (is made), pasado (was built), present perfect (has been done), futuro (will be built), modal (must be recycled), continuo (is being built). get-passive informal (got stolen).`),
    grammarEx("Repaso mixto de gramática — Semana 4", "Completa o elige.", [
      mc("Choose:", ["I must to leave now.", "I must leave now.", "I must leaving now."], 1, "must + infinitivo sin to."),
      mc("Sign 'No entry'. You ___ go in.", ["don't have to", "mustn't", "needn't"], 1, "prohibido → mustn't."),
      mc("It's free, you ___ pay.", ["mustn't", "don't have to", "can't"], 1, "no hace falta → don't have to."),
      fb("Chocolate ___ (make) from cacao. (pasiva presente)", ["is made"], "is + participio."),
      fb("The bridge ___ (build) in 1900. (pasiva pasado)", ["was built"], "was + participio."),
      fb("The streets ___ (clean, present perfect) already.", ["have been cleaned"], "have been + participio."),
      fb("Bottles ___ (must/recycle).", ["must be recycled"], "modal + be + participio."),
      fb("Yesterday I ___ (obligación) work late.", ["had to"], "must → pasado had to."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 4", "Repasa los mazos (trabajo, normas/ley, tecnología, medio ambiente)."),
    vocabEx("Repaso de vocabulario — Semana 4", "Elige la opción correcta.", [
      mc("The money you earn each month:", ["salary", "shift", "deadline"], 0, "salary."),
      mc("Money you pay as a punishment:", ["fine", "rule", "permission"], 0, "fine."),
      mc("A small useful electronic tool:", ["gadget", "battery", "screen"], 0, "gadget."),
      mc("Dirty air, water or land:", ["pollution", "energy", "waste"], 0, "pollution."),
      mc("To follow the law is to ___ it:", ["obey", "ban", "punish"], 0, "obey."),
      mc("Energy from the sun or wind is ___:", ["renewable", "endangered", "polluted"], 0, "renewable."),
      mc("The date by which you must finish work:", ["deadline", "promotion", "shift"], 0, "deadline."),
      mc("If water can't damage it, it's ___:", ["waterproof", "wireless", "device"], 0, "waterproof."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Sign: 'Staff must wear helmets. Visitors needn't.'", ["Staff must; visitors don't have to.", "Nobody wears helmets.", "Everybody must."], 0, "'Staff must… Visitors needn't'."),
        mc("Notice: 'Bottles must be recycled in the green bin.'", ["Recycle bottles in the green bin.", "Throw them anywhere.", "No recycling."], 0, "'must be recycled'."),
        mc("Label: 'This gadget is charged by sunlight.'", ["The sun charges it.", "It uses batteries only.", "It can't be charged."], 0, "'charged by sunlight'."),
        mc("Warning: 'Litter mustn't be dropped. Fine: £80.'", ["Don't drop litter; there's a fine.", "Litter is allowed.", "Free."], 0, "'mustn't be dropped. Fine: £80'."),
        mc("Poster: 'A new solar farm is being built here.'", ["A solar farm is under construction.", "It's finished.", "It's closing."], 0, "'is being built'."),
      ] },
      p2text: "FOUR VOLUNTEER ROLES\n\nA) Beach Cleaner — you don't have to be fit, but you must enjoy being outdoors; litter is collected on Saturdays.\nB) Tech Helper — you should be good with gadgets; older people are taught how to use phones and computers.\nC) Tree Planter — hard physical work; trees are planted along rivers; you must be strong and reliable.\nD) Recycling Advisor — you visit homes and explain how waste can be recycled; good communication is needed.",
      p2q: { title: "Emparejar personas y voluntariados", items: [
        mc("Nadia loves the sea and being outside.", ["A", "B", "C", "D"], 0, "Beach Cleaner."),
        mc("Ben is patient and great with technology.", ["A", "B", "C", "D"], 1, "Tech Helper."),
        mc("Sara is strong and enjoys hard outdoor work.", ["A", "B", "C", "D"], 2, "Tree Planter."),
        mc("Leo is friendly and good at explaining things.", ["A", "B", "C", "D"], 3, "Recycling Advisor."),
        mc("A role where you don't have to be fit.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE FOUR-DAY WEEK\n\nFor over a hundred years, most people have worked five days a week. But recently, a new idea has been tested in several countries: the four-day working week. Employees work one day less, but they are paid the same salary. At first, this might sound impossible. How can the same amount of work be done in less time? Yet the results of these experiments have surprised almost everyone.\n\nIn most of the companies where it was tried, productivity actually stayed the same or even improved. It seems that when workers are given more rest, they concentrate better and waste less time. Fewer mistakes are made, and staff take fewer sick days. Employees reported that they felt happier, healthier and less stressed. Many said they finally had enough time for their families and hobbies.\n\nOf course, the four-day week can't be applied to every job. In hospitals and shops, for example, people must be present all week. And some managers still aren't convinced. But the early signs are promising. Perhaps, in the future, the way we all work will be changed completely — and the five-day week will be remembered as something from the past.",
      p3q: { title: "La semana de cuatro días (texto largo)", items: [
        mc("What is the new idea?", ["Working more days.", "A four-day week with the same salary.", "No holidays."], 1, "'four-day working week… paid the same salary'."),
        mc("What happened to productivity in most companies?", ["It fell.", "It stayed the same or improved.", "It disappeared."], 1, "'stayed the same or even improved'."),
        mc("Why do workers do better with more rest?", ["They work less.", "They concentrate better and waste less time.", "They earn more."], 1, "'concentrate better and waste less time'."),
        mc("Which jobs can't easily use a four-day week?", ["Offices.", "Hospitals and shops.", "None."], 1, "'In hospitals and shops… must be present'."),
        mc("What might happen in the future?", ["Nothing.", "The way we work could be changed completely.", "Longer weeks."], 1, "'the way we all work will be changed completely'."),
      ] },
      p4text: "THE APP THAT SAVED OUR STREET\n\nUntil last year, our street had a serious rubbish problem. (1)___ Bins were rarely emptied, and litter was left everywhere. Everyone complained, but nothing was ever done.\n\nThen my neighbour, who works with computers, had an idea. (2)___ She created a simple app where problems could be reported with a photo. If a bin was overflowing, a message was sent straight to the council. (3)___ Suddenly, the problems couldn't be ignored any more.\n\nThe effect was almost magical. (4)___ Bins started to be emptied on time, and broken streetlights were quickly repaired. Our street has never looked better. (5)___ It just goes to show that a good idea, shared by the whole community, can achieve remarkable things.",
      p4options: [
        "It made the whole area look neglected.",                   // A -> gap 1
        "She decided that technology could help.",                  // B -> gap 2
        "Every complaint was now recorded and counted.",            // C -> gap 3
        "Within weeks, things began to improve.",                   // D -> gap 4
        "The app was deleted after a single day.",                  // E (extra)
        "One neighbour's clever idea changed everything.",          // F -> gap 5
        "Nobody on our street owns a phone.",                       // G (extra)
        "The council closed the whole street down.",                // H (extra)
      ],
      p4q: { title: "La app que salvó nuestra calle (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: hacía que la zona pareciera dejada."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: pensó que la tecnología ayudaría."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: cada queja quedaba registrada."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: en semanas empezó a mejorar."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: una idea lo cambió todo."),
      ] },
      p5text: "In a modern workplace, staff (1)___ follow certain rules. For example, they usually (2)___ arrive on time, and safety equipment must (3)___ worn in some jobs. However, employees (4)___ have to work at weekends unless they agree to. In many offices, a lot of work is now (5)___ done from home using technology. Some experts believe the way we work will (6)___ changed forever by these new ideas.",
      p5q: { title: "Huecos con opciones (modales/pasiva)", items: [
        mc("Hueco 1", ["must", "mustn't", "needn't", "don't"], 0, "'must follow rules'."),
        mc("Hueco 2", ["have to", "mustn't", "needn't", "are"], 0, "'have to arrive on time'."),
        mc("Hueco 3", ["be", "been", "being", "is"], 0, "'must be worn'."),
        mc("Hueco 4", ["don't", "must", "should", "had"], 0, "'don't have to work at weekends'."),
        mc("Hueco 5", ["being", "be", "been", "is"], 0, "'is now being done'."),
        mc("Hueco 6", ["be", "been", "being", "to"], 0, "'will be changed'."),
      ] },
      p6text: "Hi Sam,\nBig changes at my company! Next month a four-day week (1)___ being tested — we'll work one day less but (2)___ paid the same! Apparently productivity has (3)___ improved in other companies that tried it. Of course, we still (4)___ to finish all our work, and safety rules must (5)___ followed. I really think the way we work will (6)___ changed forever. Would you like a four-day week?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["is"], "'is being tested'."),
        fb("Hueco 2", ["be"], "'be paid the same'."),
        fb("Hueco 3", ["been"], "'has been improved' / 'has improved'."),
        fb("Hueco 4", ["have"], "'have to finish'."),
        fb("Hueco 5", ["be"], "'must be followed'."),
        fb("Hueco 6", ["be"], "'will be changed'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te cuenta que su empresa quiere probar la semana de 4 días. Responde a su email (~100 palabras):\n· dile qué te parece la idea,\n· da una ventaja y un posible problema,\n· cuéntale cómo te gustaría trabajar a ti.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Should everyone work a four-day week?' con tu opinión y razones.\n· RELATO: empieza con: 'When I arrived at work, everything had changed.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Do we have to work on Saturday? Man: No, you don't have to, unless you want overtime. Two. Man: Can I take photos? Woman: Sorry, it's not allowed in here. Three. Woman: Is the new bridge finished? Man: Not yet, it's still being built. Four. Man: What happened to your bike? Woman: It got stolen last week! Five. Woman: How's the river now? Man: Much cleaner — it's been completely cleaned up. Six. Man: Should I recycle this bottle? Woman: Yes, all bottles must be put in the green bin.", [
      mc("1. Do they have to work on Saturday?", ["Yes, always.", "No, unless they want overtime.", "Only mornings."], 1, "'you don't have to, unless you want overtime'."),
      mc("2. Can the man take photos?", ["Yes.", "No, it's not allowed.", "Only outside."], 1, "'it's not allowed in here'."),
      mc("3. Is the bridge finished?", ["Yes.", "No, still being built.", "It was cancelled."], 1, "'it's still being built'."),
      mc("4. What happened to the woman's bike?", ["She sold it.", "It got stolen.", "It broke."], 1, "'It got stolen last week'."),
      mc("5. How is the river now?", ["Dirtier.", "Much cleaner, cleaned up.", "The same."], 1, "'it's been completely cleaned up'."),
      mc("6. What must he do with the bottle?", ["Throw it away.", "Put it in the green bin.", "Keep it."], 1, "'all bottles must be put in the green bin'."),
    ]),

    ...speakingParts("el trabajo, las normas y el medio ambiente", { p1: "cómo te gustaría trabajar, qué normas te parecen importantes y qué haces por el planeta", p2: "personas trabajando, siguiendo normas o cuidando el entorno", p3: "qué cambio proponer para mejorar vuestro instituto o lugar de trabajo", p4: "el futuro del trabajo, las normas necesarias y el cuidado del medio ambiente" }),

    SUMMARY("Resumen de la Semana 4 (B1)", [
      "Dominas los modales de obligación/consejo, prohibición/no-obligación y la voz pasiva en todos sus tiempos.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: el estilo indirecto (reported speech) y las preguntas indirectas.",
    ]),
    INFO("Mini-simulacro de la Semana 4", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 5."),
  ],
};

export const WEEK4 = {
  n: 4,
  theme: "Normas, obligaciones y la voz pasiva",
  description: "Modales de obligación, consejo y prohibición, y la voz pasiva en todos sus tiempos. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY16, DAY17, DAY18, DAY19, DAY20],
};
