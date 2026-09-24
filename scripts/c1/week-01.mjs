/**
 * C1 Advanced · Semana 1 — "Los tiempos verbales y el aspecto · La identidad".
 * Gramática: matices del aspecto perfecto y continuo, tiempos narrativos, verbos
 * de estado y dinámicos, y el futuro visto desde el presente, con el hilo temático
 * de la identidad, la personalidad, los recuerdos y las aspiraciones.
 * Cada día, las 4 destrezas con el formato real del C1 (Reading & UoE de 8 partes).
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, useCloze, openCloze, wordFormation, keyword, readingMC, crossTextMatching, gappedText, multipleMatching,
  writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const uoe = ({ p1, p2, p3, p4, p5, p6, p7, p8 }) => [
  READING_HEAD,
  useCloze(p1.title, p1.text, p1.q),
  openCloze(p2.title, p2.text, p2.q),
  wordFormation(p3.title, p3.text, p3.items),
  keyword(p4.title, p4.items),
  readingMC(p5.title, p5.text, p5.q),
  crossTextMatching(p6.title, p6.intro, p6.texts, p6.q),
  gappedText(p7.title, p7.text, p7.options, p7.q),
  multipleMatching(p8.title, p8.text, p8.q),
];

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas y matizadas (3–4 frases con razones y ejemplos).", `Parte 1 del C1: preguntas personales (${p1})`, "responder con detalle, matices y ejemplos", "personally, to a large extent, what strikes me is, the main reason being"),
  speaking(2, "Speaking · Parte 2 — Turno largo (comparar fotos)", "Compara DOS de las tres fotos ~1 minuto, especula y responde a la pregunta.", `Parte 2 del C1: comparar dos fotografías sobre ${p2}`, "comparar, especular y evaluar", "whereas, this one seems to, it could well be that, presumably, what they have in common"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones a fondo y llegad a una decisión conjunta.", `Parte 3 del C1: comentar juntos ${p3} y decidir`, "evaluar, negociar y matizar", "there's a strong case for, on balance, I take your point, that said, shall we settle on"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas y desarrolladas.", `Parte 4 del C1: discusión sobre ${p4}`, "argumentar, matizar y generalizar", "it largely depends on, it's often argued that, up to a point, conversely, in the grand scheme of things"),
];

// ───────────────────────── DÍA 1 ─────────────────────────
const DAY1 = {
  title: "Día 1 — El aspecto perfecto y continuo (matices) · La personalidad",
  description: "Los matices del aspecto: perfect vs simple, continuo para lo temporal/cambiante/molesto, present perfect continuous. Vocabulario de personalidad. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Dominar los matices del aspecto perfecto y continuo a nivel C1.",
    summary: "Aspecto perfecto y continuo; personalidad; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["usar present simple donde el matiz pide continuous ('I'm loving', cambio).", "confundir present perfect simple (resultado) y continuous (proceso/duración).", "olvidar el matiz de queja del continuous ('always doing')."],
    reviewPrompts: ["¿Qué diferencia hay entre 'I've read it' y 'I've been reading it'?", "¿Qué matiz añade 'He's always interrupting'?"],
  },
  items: [
    TEXT("👋 Bienvenido/a al C1 Advanced. Subimos el listón: textos más largos y abstractos, y el Use of English con sus 8 partes. Hoy, los MATICES del aspecto (perfecto y continuo). Vocabulario: la PERSONALIDAD."),
    GRAMMAR("El aspecto perfecto y continuo — los matices del C1", `En C1 no basta con elegir el tiempo: hay que captar el MATIZ del aspecto.
PERFECT (simple) vs CONTINUOUS:
· Present perfect simple → resultado/logro terminado, cantidad: I've written three reports (los tengo hechos).
· Present perfect continuous → proceso, duración, actividad reciente (posiblemente inacabada): I've been writing reports all day (énfasis en la actividad, quizá aún sin acabar).
· A veces el continuous explica un estado presente: You look exhausted. — Yes, I've been running.
CONTINUOUS para lo TEMPORAL / CAMBIANTE / MOLESTO:
· Temporal: I'm living with my parents (por ahora) vs I live with my parents (permanente).
· Cambio/tendencia: The climate is getting warmer; more people are working from home.
· Queja con always/constantly/forever: He's always losing his keys (irritación).
· Verbos normalmente estáticos en continuous → énfasis en lo temporal/deliberado: I'm loving this / You're being difficult (comportamiento puntual, no rasgo).
⚠️ El aspecto comunica ACTITUD, no solo tiempo. Elegir simple o continuous cambia el matiz.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ I have lived here for years and I'm still loving it → cuidado: 'I've been living here' (proceso) + 'I love it' (estado) o 'I'm loving it' (entusiasmo puntual).\n· 'How long are you working here?' ❌ (duración) → 'How long have you been working here?' ✅.\n· 'She is very kind' (rasgo) vs 'She's being very kind' (hoy, comportamiento) — no los mezcles.\n· Present perfect continuous ≠ 'llevo + gerundio' literal: piensa en el matiz de proceso/duración."),
    grammarEx("Use of English — Aspecto perfecto y continuo", "Elige o completa con el matiz correcto.", [
      mc("You look worn out! — Yes, I ___ all morning.", ["have gardened", "have been gardening", "garden"], 1, "proceso/actividad reciente → present perfect continuous."),
      mc("I ___ that novel — I finished it last night.", ["have been reading", "have read", "am reading"], 1, "resultado/terminado → present perfect simple."),
      mc("Don't mind him — he ___ difficult today.", ["is being", "is", "has been"], 0, "comportamiento puntual → is being."),
      fb("She ___ (constantly / interrupt) me — it's so annoying! (queja)", ["is constantly interrupting", "'s constantly interrupting"], "continuous + constantly = queja."),
      mc("More and more people ___ remotely these days.", ["work", "are working", "have worked"], 1, "tendencia/cambio → continuous."),
      fb("How long ___ you ___ (wait)? Sorry I'm late. (duración hasta ahora)", ["have", "been waiting"], "present perfect continuous (duración)."),
      mc("I've broken three glasses this week — I ___ so clumsy lately.", ["am", "have been being", "am being"], 2, "temporal/reciente → am being."),
    ]),
    GRAMMAR("Vocabulario del día — La personalidad (C1)", "Léxico avanzado de personalidad."),
    deck("C1 S1D1 — La personalidad", [
      ["self-assured", "seguro/a de sí mismo/a", "She gave a self-assured presentation.", "adjetivo", "ˌself əˈʃʊəd"],
      ["conscientious", "concienzudo/a", "He's a conscientious, reliable worker.", "adjetivo", "ˌkɒnʃiˈenʃəs"],
      ["outgoing", "extrovertido/a", "Her outgoing nature wins people over.", "adjetivo", "ˌaʊtˈɡəʊɪŋ"],
      ["reserved", "reservado/a", "He's polite but rather reserved.", "adjetivo", "rɪˈzɜːvd"],
      ["stubborn", "testarudo/a", "She's too stubborn to admit she's wrong.", "adjetivo", "ˈstʌbən"],
      ["easygoing", "de trato fácil / relajado/a", "My boss is remarkably easygoing.", "adjetivo", "ˌiːziˈɡəʊɪŋ"],
      ["temperament", "temperamento / carácter", "An artistic temperament, they say.", "sustantivo", "ˈtemprəmənt"],
      ["quirk", "peculiaridad / manía", "We all have our little quirks.", "sustantivo", "kwɜːk"],
      ["down-to-earth", "con los pies en la tierra", "Despite her fame, she's down-to-earth.", "adjetivo", "ˌdaʊn tu ˈɜːθ"],
      ["self-effacing", "modesto/a / que no busca protagonismo", "A brilliant but self-effacing scholar.", "adjetivo", "ˌself ɪˈfeɪsɪŋ"],
    ]),
    vocabEx("Vocabulario — La personalidad", "Elige la opción correcta.", [
      mc("Someone confident and sure of themselves is ___.", ["self-assured", "reserved", "stubborn"], 0, "self-assured."),
      mc("Someone careful and hard-working is ___.", ["conscientious", "outgoing", "easygoing"], 0, "conscientious."),
      mc("Someone unwilling to change their mind is ___.", ["stubborn", "self-effacing", "down-to-earth"], 0, "stubborn."),
      mc("Someone practical and sensible, not pretentious, is ___.", ["down-to-earth", "reserved", "outgoing"], 0, "down-to-earth."),
      mc("A small odd habit is a ___.", ["quirk", "temperament", "trait"], 0, "quirk."),
      mc("Someone who avoids drawing attention to themselves is ___.", ["self-effacing", "self-assured", "outgoing"], 0, "self-effacing."),
    ]),

    ...uoe({
      p1: {
        title: "The riddle of personality",
        text: "Few questions have preoccupied thinkers as persistently as the nature of human personality. What is it that makes each of us so distinctively ourselves, and to what (1)___ are we the authors of our own characters? For centuries, the debate (2)___ between those who believe personality is fixed at birth and those who insist it is (3)___ by experience. Modern psychology suggests, unsurprisingly, that both camps are partly right. We are born, it seems, with a broad temperamental (4)___ — a tendency towards shyness or boldness, calm or anxiety — that remains remarkably stable throughout life. Yet within those inherited (5)___, experience shapes us profoundly. The self-assured adult may have been a timid child who slowly (6)___ their fears; the reserved introvert may have learned, over years, to perform a convincing sociability. What emerges from the research is a picture of personality as neither wholly fixed nor infinitely (7)___, but as a kind of negotiated settlement between our nature and our circumstances. We are not, it turns out, entirely free to reinvent ourselves at will; but nor are we the mere prisoners of our genes. The truth, as so often, lies in the uneasy (8)___ between the two.",
        q: [
          mc("(1)", ["extent", "degree", "measure", "point"], 0, "'to what extent'."),
          mc("(2)", ["has raged", "has been raging", "rages", "raged"], 0, "'the debate has raged' (present perfect: resultado hasta hoy)."),
          mc("(3)", ["shaped", "formed", "moulded", "built"], 0, "'shaped by experience'."),
          mc("(4)", ["disposition", "attitude", "mood", "manner"], 0, "'temperamental disposition'."),
          mc("(5)", ["constraints", "limits", "bounds", "borders"], 0, "'within those inherited constraints'."),
          mc("(6)", ["overcame", "beat", "defeated", "conquered"], 0, "'slowly overcame their fears'."),
          mc("(7)", ["malleable", "flexible", "elastic", "adaptable"], 0, "'infinitely malleable'."),
          mc("(8)", ["compromise", "deal", "bargain", "agreement"], 0, "'the uneasy compromise'."),
        ],
      },
      p2: {
        title: "The masks we wear",
        text: "It is a commonplace of psychology that we all wear masks — that the self we present to the world is (1)___ some degree a performance, tailored to the audience and the occasion. We behave one way with our parents, (2)___ with our friends, and differently again at work. This is not, as it might first appear, a form of dishonesty. (3)___ the contrary, the ability to adapt our behaviour to different social contexts is a mark of maturity and social skill. The person who behaves in exactly the same way in every situation, far (4)___ being admirably authentic, is often simply lacking in sensitivity. And yet the idea of the mask troubles us, for it raises an unsettling question: if we are forever performing, is there any 'real' self (5)___ the masks at all, or are we nothing but the sum of our performances? Philosophers have long been divided (6)___ this. Some argue that the search for a single, true self is a fool's errand, and that we simply are the various roles we play. Others maintain that (7)___ all the performances lies a core identity, however hard it may be to define. What seems clear is that the relationship between the self we feel ourselves to be and the selves we show to others is far more complex (8)___ we usually suppose.",
        q: [
          fb("(1)", ["to"], "'to some degree'."),
          fb("(2)", ["another"], "'another with our friends'."),
          fb("(3)", ["On"], "'On the contrary'."),
          fb("(4)", ["from"], "'far from being'."),
          fb("(5)", ["behind"], "'behind the masks'."),
          fb("(6)", ["on", "over"], "'divided on/over this'."),
          fb("(7)", ["beneath", "behind", "under"], "'beneath all the performances'."),
          fb("(8)", ["than"], "'more complex than we suppose'."),
        ],
      },
      p3: {
        title: "The making of character",
        text: "We tend to speak of character as though it were a (1)___ possession, something we simply have, like the colour of our eyes. But the ancient philosophers understood it (2)___ differently. For them, character was not a given but an (3)___ — something built, painstakingly, through the repeated practice of good habits. Courage, they argued, was not a quality one was born (4)___ but one acquired by performing courageous acts, over and over, until bravery became second nature. The same was true of honesty, generosity and self-control. On this view, we quite literally (5)___ our characters, action by action, until the sum of our habits hardens into what we call a personality. There is something both daunting and (6)___ in this idea. Daunting, because it makes us responsible for who we become; we cannot simply blame our nature. But (7)___, too, because it means that character is within our power to change. The (8)___ person is not doomed to remain unreliable, nor the coward to remain fearful. Through the patient cultivation of better habits, the ancients believed, anyone could, in time, reshape the very self they had become.",
        items: [
          { root: "fix", accepted: ["fixed"], hint: "'a fixed possession' → fixed." },
          { root: "quite", accepted: ["quite"], hint: "'quite differently' (adverbio ya formado)." },
          { root: "achieve", accepted: ["achievement"], hint: "'an achievement' → achievement." },
          { root: "with", accepted: ["with"], hint: "'born with' (preposición)." },
          { root: "fashion", accepted: ["fashion"], hint: "'we fashion our characters' (verbo)." },
          { root: "liberate", accepted: ["liberating"], hint: "'daunting and liberating' → liberating." },
          { root: "empower", accepted: ["empowering"], hint: "'empowering, too' → empowering." },
          { root: "rely", accepted: ["unreliable"], hint: "'the unreliable person' → unreliable." },
        ],
      },
      p4: {
        title: "Transformaciones — personalidad y aspecto",
        items: [
          { s1: "She has been working here since she graduated.", key: "TOOK", s2: "She ___ here after she graduated.", accepted: ["started working", "took up work", "took a job"], explanation: "reformular la duración." },
          { s1: "It's typical of him to lose his keys.", key: "ALWAYS", s2: "He ___ his keys.", accepted: ["is always losing"], explanation: "continuous + always (queja/rasgo)." },
          { s1: "I find it hard to believe how stubborn she is.", key: "SUCH", s2: "I can't believe she ___ person.", accepted: ["is such a stubborn"], explanation: "such + a + adj + sustantivo." },
          { s1: "He isn't usually this rude; something must be wrong.", key: "BEING", s2: "He ___ today; something must be wrong.", accepted: ["is being rude", "is only being rude"], explanation: "is being (comportamiento puntual)." },
          { s1: "I haven't seen her for ages.", key: "SINCE", s2: "It's ___ her.", accepted: ["ages since I saw", "been ages since I saw"], explanation: "It's… since…" },
          { s1: "People say he is very down-to-earth despite his fame.", key: "SAID", s2: "He ___ very down-to-earth despite his fame.", accepted: ["is said to be"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The introvert in an extrovert's world",
        text: "For much of the twentieth century, Western culture was gripped by what one might call the cult of personality — and, more specifically, the cult of the extrovert. The ideal citizen, employee and leader was imagined as bold, gregarious, quick-talking and endlessly sociable. Schools were redesigned to favour group work and class participation; offices were thrown open into vast, echoing shared spaces; and the quiet, reflective child who preferred a book to a boisterous game came to be regarded, subtly but unmistakably, as a problem to be corrected. To be an introvert, in such a world, was to feel perpetually out of step, forever being urged to 'come out of your shell', as though introversion were merely a temporary affliction rather than a fundamental feature of one's temperament.\n\nIn recent years, however, a quiet rebellion has taken place. A growing body of research, popularised in a handful of influential books, has challenged the assumption that extroversion is inherently superior. Introverts, it turns out, are not simply failed extroverts. They possess, on average, distinctive strengths of their own: a capacity for deep concentration, a tendency towards careful and considered decision-making, a gift for listening, and a rich inner life that often finds expression in creativity. Many of history's greatest thinkers, artists and scientists, the research points out, were pronounced introverts, who did their finest work not in the hubbub of collaboration but in long stretches of solitary reflection.\n\nWhat this reappraisal reveals is not that introverts are secretly better than extroverts — that would merely replace one prejudice with another — but that the two temperaments are genuinely different, each with its own strengths and weaknesses, each suited to different tasks and situations. A world designed exclusively around either type will squander the talents of the other. The gregarious salesperson and the solitary researcher are both indispensable; a society that celebrates only one is impoverishing itself.\n\nThe practical implications are considerable. Schools that value only the confident talker overlook the quiet child whose thoughtful essays reveal a mind of real depth. Workplaces that force everyone into open-plan offices and endless meetings may extract lively contributions from their extroverts while systematically crushing the productivity of their introverts, who often do their best work alone and undisturbed. The most effective organisations, the new thinking suggests, are those that make room for both temperaments — that provide both the collaborative buzz on which extroverts thrive and the quiet spaces in which introverts flourish.\n\nPerhaps the deepest lesson of all is one of simple tolerance. For too long, one way of being in the world was held up as the norm, and those who differed from it were made to feel deficient. The rehabilitation of the introvert is, in the end, a small chapter in a much larger and more important story: the slow, difficult recognition that human beings are, and are entitled to be, profoundly and irreducibly different from one another.",
        q: [
          mc("How was the introverted child regarded in the twentieth century?", ["As ideal.", "As a problem to be corrected.", "As a leader.", "As gifted."], 1, "'a problem to be corrected'."),
          mc("What has recent research challenged?", ["That introverts exist.", "The assumption that extroversion is inherently superior.", "That extroverts are sociable.", "The value of books."], 1, "'challenged the assumption that extroversion is inherently superior'."),
          mc("What strengths do introverts tend to possess?", ["Loudness.", "Deep concentration, careful decisions, listening, creativity.", "Salesmanship.", "None."], 1, "'deep concentration… careful… decision-making… listening… creativity'."),
          mc("What does the reappraisal reveal?", ["Introverts are better.", "The two temperaments are genuinely different, each with strengths.", "Extroverts are useless.", "Temperament is fixed."], 1, "'the two temperaments are genuinely different, each with its own strengths'."),
          mc("What do open-plan offices risk doing to introverts?", ["Helping them.", "Crushing their productivity.", "Promoting them.", "Nothing."], 1, "'systematically crushing the productivity of their introverts'."),
          mc("What is the 'deepest lesson' of the introvert's rehabilitation?", ["Extroverts win.", "Tolerance — that people are entitled to be profoundly different.", "Introverts should change.", "Meetings are good."], 1, "'human beings are, and are entitled to be, profoundly and irreducibly different'."),
        ],
      },
      p6: {
        title: "Is personality fixed or can we change?",
        intro: "Cuatro personas opinan sobre si la personalidad puede cambiar.",
        texts: {
          A: "NADIA: The idea that we can simply reinvent ourselves is, frankly, a comforting myth. Decades of research show that our core temperament — how anxious, how outgoing, how open we are — is remarkably stable from childhood to old age. Yes, we mellow slightly with age, but the fundamental pattern persists. We would do better to accept and work with our nature than to waste energy fighting it.",
          B: "TOM: I couldn't disagree more with the fatalists. Of course personality can change — I've watched it happen, in myself and others. A shy friend of mine deliberately, painstakingly turned herself into a confident public speaker over ten years. It wasn't easy, and her underlying temperament was still there, but her behaviour, her habits, her whole way of being in the world genuinely transformed. To deny that is to deny human freedom.",
          C: "PRIYA: I think this whole debate rests on a false opposition. It's not that personality is either fixed or changeable; it's both, in different respects. Our raw temperament is largely set, as Nadia says. But what we do with it — the character we build on top of it — is very much up to us. The ancient philosophers had it right: character is habit, and habits can be changed, even if temperament can't.",
          D: "SAM: What strikes me is how much the 'fixed personality' idea can be used as an excuse. 'That's just how I am' becomes a licence to behave badly and never grow. Whether or not the science says our temperament is stable, I'd argue we have a moral duty to try to improve — to become kinder, more patient, more courageous. Believing we can't change is often just a way of avoiding the hard work of changing.",
        },
        q: [
          mc("Who believes core temperament is remarkably stable?", ["A", "B", "C", "D"], 0, "Nadia: 'remarkably stable from childhood to old age'."),
          mc("Which person's view most DIFFERS from Nadia's on whether we can change?", ["A", "B", "C", "D"], 1, "Tom: 'Of course personality can change'."),
          mc("Who argues the debate rests on a 'false opposition'?", ["A", "B", "C", "D"], 2, "Priya: 'this whole debate rests on a false opposition'."),
          mc("Who shares Priya's idea that character (as opposed to temperament) can be built?", ["A", "B", "C", "D"], 3, "Sam: moral duty to improve, become kinder — character-building echoes Priya."),
        ],
      },
      p7: {
        title: "The birth of a self",
        text: "Where does our sense of being a distinct, continuous self actually come from? (1)___\n\nThe newborn infant, psychologists believe, has no such sense at all. It does not yet distinguish between itself and the world, between its own body and its mother's, between inside and outside. (2)___\n\nOnly gradually, over the first months and years of life, does the boundary of the self begin to form. (3)___ The child slowly learns that it is a separate being, with its own body, its own feelings, and — crucially — its own name.\n\nLanguage plays a decisive role in this emerging sense of selfhood. (4)___ The moment a child begins to say 'I' and 'me' and 'mine' marks a profound step in the construction of a self.\n\nBy the age of three or four, most children have developed a robust sense of themselves as continuous beings, persisting through time. (5)___ They can remember a past self and imagine a future one, and they have begun to weave the scattered moments of their experience into a single, ongoing story.\n\nAnd it is this story, many psychologists now believe, that lies at the very heart of identity. (6)___ We are, in the end, the stories we tell about ourselves — narratives, endlessly revised, that stitch our disparate experiences into the semblance of a single, coherent life.",
        options: [
          "It is one of the deepest mysteries of human development.",       // A -> gap 1
          "For the baby, there is only a seamless, undivided flow of experience.", // B -> gap 2
          "This slow separation is one of the great achievements of infancy.", // C -> gap 3
          "To name oneself is, in a sense, to bring a self into being.",   // D -> gap 4
          "This capacity for self-continuity is a remarkable achievement.", // E -> gap 5
          "Identity, on this view, is essentially a kind of storytelling.",  // F -> gap 6
          "Newborn babies possess a fully formed sense of identity.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: uno de los misterios más profundos."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: para el bebé, un flujo indiviso."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la separación es un logro de la infancia."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: nombrarse es traer un yo al ser."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la continuidad del yo es un logro."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la identidad es un tipo de narración."),
        ],
      },
      p8: {
        title: "Four people describe how their personality has changed",
        text: "Read what four people say about how they have changed over their lives.\n\nA) NADIA: In my twenties I was painfully shy — I'd dread any social gathering and rehearse conversations in my head for hours. I'm still an introvert at heart; that hasn't changed. But I've learned, through sheer practice, to function socially, even to enjoy it in small doses. The raw material is the same; what I've done with it is different.\n\nB) TOM: I used to be terribly quick-tempered, forever flying off the handle over nothing. What changed me, honestly, was becoming a parent. You simply cannot rage at a small child, so I had to learn patience, day by day, until it became a habit. I'm astonished, looking back, at how much calmer I've become. People do change; I'm living proof.\n\nC) PRIYA: The strange thing is how little I've changed, despite everything. I look at photographs of myself as a child — the same stubbornness, the same curiosity, the same tendency to overthink. Life has taught me a great deal, but the fundamental person underneath feels eerily constant. Sometimes I think we just become more intensely ourselves as we age.\n\nD) SAM: For years I hid behind a mask of confidence I didn't feel — the loud, joking extrovert everyone expected. It was exhausting. The biggest change in my life was finally dropping the act and letting myself be the quieter, more thoughtful person I actually am. I didn't change my personality; I stopped pretending to have a different one.\n",
        q: [
          mc("Who remains an introvert but has learned to function socially?", ["A", "B", "C", "D"], 0, "Nadia: 'still an introvert at heart… learned… to function socially'."),
          mc("Who changed after becoming a parent?", ["A", "B", "C", "D"], 1, "Tom: 'becoming a parent… had to learn patience'."),
          mc("Who feels they have barely changed at all?", ["A", "B", "C", "D"], 2, "Priya: 'how little I've changed'."),
          mc("Who stopped pretending to be an extrovert?", ["A", "B", "C", "D"], 3, "Sam: 'dropping the act… the quieter… person I actually am'."),
          mc("Who says the 'raw material is the same' but what they do with it differs?", ["A", "B", "C", "D"], 0, "Nadia: 'The raw material is the same'."),
          mc("Who is 'astonished' at how much calmer they've become?", ["A", "B", "C", "D"], 1, "Tom: 'astonished… how much calmer I've become'."),
          mc("Who sees the same traits in childhood photographs?", ["A", "B", "C", "D"], 2, "Priya: 'the same stubbornness… curiosity'."),
          mc("Who found maintaining a false confidence 'exhausting'?", ["A", "B", "C", "D"], 3, "Sam: 'It was exhausting'."),
          mc("Who suggests we 'become more intensely ourselves' with age?", ["A", "B", "C", "D"], 2, "Priya: 'more intensely ourselves as we age'."),
          mc("Who offers themselves as 'living proof' that people change?", ["A", "B", "C", "D"], 1, "Tom: 'People do change; I'm living proof'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En una charla sobre el desarrollo personal se plantearon dos factores que más moldean quiénes somos:\n· our upbringing (la educación/crianza)\n· our own choices (nuestras propias decisiones)\nEscribe un ensayo para tu profesor comentando AMBOS puntos y explicando CUÁL crees que influye más en la personalidad, con razones y ejemplos. Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA (fíjate en el registro):\n· ARTÍCULO para una revista: 'The person who shaped who I am' — describe a alguien que influyó en tu carácter y reflexiona.\n· CARTA a un/a amigo/a que se siente presionado/a por ser más extrovertido/a: dale tu punto de vista y consejo.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two friends discussing a mutual acquaintance. Woman: Honestly, I can never work Daniel out. One minute he's the life and soul of the party, the next he barely says a word. Man: I think that's just it, though — he's not really an extrovert pretending to be shy, or the other way round. He genuinely swings between the two depending on his mood and the company. Woman: I suppose I used to read it as him being difficult, but actually I think he's just more complicated than most people. Man: Exactly. We're so keen to label everyone as one thing or the other, aren't we? Some people just don't fit the boxes. Extract Two. You hear a psychologist talking about childhood. Woman: What fascinates me is how early our temperament shows itself. You can observe babies just a few months old and already see clear differences — some are placid, some are easily startled, some are endlessly curious. And those early tendencies, remarkably, tend to persist. The bold baby often becomes the bold adult. It doesn't determine everything, of course; experience shapes us enormously. But the raw material is there astonishingly early. Extract Three. You hear a man talking about how he changed. Man: I'd always thought of myself as hopelessly disorganised — it was practically my identity. 'Oh, that's just me, I'm a creative mess.' Then I started a demanding job that simply wouldn't tolerate it, and within a year I'd become almost obsessively organised. What shocked me was realising how much of my so-called personality had just been a habit I'd never bothered to challenge.", [
      mc("1. What do the friends conclude about Daniel?", ["He's dishonest.", "He genuinely swings between extroversion and shyness.", "He's an extrovert."], 1, "'he genuinely swings between the two'."),
      mc("2. What does the woman now think about Daniel?", ["He's difficult.", "He's just more complicated than most.", "He's boring."], 1, "'he's just more complicated than most people'."),
      mc("3. What fascinates the psychologist?", ["How late personality forms.", "How early temperament shows itself.", "That babies are all alike."], 1, "'how early our temperament shows itself'."),
      mc("4. What does she say about early tendencies?", ["They vanish.", "They tend to persist into adulthood.", "They don't matter."], 1, "'those early tendencies… tend to persist'."),
      mc("5. What had the man always believed about himself?", ["He was organised.", "He was hopelessly disorganised.", "He was lazy."], 1, "'hopelessly disorganised… practically my identity'."),
      mc("6. What shocked him?", ["That he failed.", "How much of his 'personality' was just an unchallenged habit.", "That he stayed messy."], 1, "'how much of my so-called personality had just been a habit'."),
    ]),

    ...speakingParts({ p1: "cómo te describirías, si te pareces a tu familia y en qué has cambiado con los años", p2: "dos personas en situaciones sociales distintas (una charlando animadamente en un grupo grande y otra concentrada a solas): compáralas y especula sobre su carácter", p3: "qué influye más en cómo somos (los genes, la crianza, las experiencias difíciles, las amistades, las decisiones propias): comentadlo y elegid lo más determinante", p4: "la identidad y la personalidad: si podemos cambiar de verdad quiénes somos, si valoramos demasiado la extroversión y qué moldea el carácter" }),

    SUMMARY("Resumen del Día 1", [
      "Aspecto: perfect simple (resultado/cantidad) vs continuous (proceso/duración); continuous para lo temporal, cambiante y las quejas (always doing).",
      "Verbos de estado en continuous → matiz temporal/deliberado (is being difficult, I'm loving it).",
      "Vocabulario de personalidad. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 2", "Escribe 6 frases contrastando perfect simple y continuous sobre tu vida. Repasa las flashcards. Mañana: los tiempos narrativos y el pasado."),
  ],
};

// ───────────────────────── DÍA 2 ─────────────────────────
const DAY2 = {
  title: "Día 2 — Los tiempos narrativos y el pasado · Los recuerdos y la infancia",
  description: "Past simple/continuous, past perfect y past perfect continuous para narrar; used to/would; el pasado como 'distancia'. Vocabulario de recuerdos e infancia. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Narrar con precisión combinando los tiempos del pasado y sus matices.",
    summary: "Tiempos narrativos; recuerdos/infancia; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["olvidar el past perfect para lo anterior a otra pasada.", "'would' para estados pasados (❌ would be) → used to.", "confundir used to (pasado) y be/get used to (acostumbrarse)."],
    reviewPrompts: ["¿'I would live there' o 'I used to live there' para un estado?", "¿Qué añade el past perfect continuous a una narración?"],
  },
  items: [
    TEXT("🔁 Ayer, el aspecto. Hoy los TIEMPOS NARRATIVOS: cómo entrelazar past simple, continuous, perfect y perfect continuous para contar bien. Vocabulario: los RECUERDOS y la INFANCIA."),
    GRAMMAR("Los tiempos narrativos", `Para narrar con precisión combinamos:
· PAST SIMPLE → las acciones principales, en secuencia: She opened the door and walked in.
· PAST CONTINUOUS → el marco/acción en curso: The sun was setting when she arrived.
· PAST PERFECT → lo anterior a ese momento pasado: By the time we got there, they had left.
· PAST PERFECT CONTINUOUS → una actividad prolongada previa (causa/duración): Her eyes were red; she had been crying.
HÁBITOS Y ESTADOS PASADOS:
· USED TO + infinitivo → hábitos y estados pasados ya no vigentes: I used to live abroad / She used to be shy.
· WOULD + infinitivo → hábitos pasados repetidos (NO estados): Every summer we would visit our grandparents. ❌ 'would be shy'.
· ⚠️ NO confundir: 'be/get used to + -ing' = estar/llegar a acostumbrarse (I'm used to working late).
EL PASADO COMO DISTANCIA (no siempre es tiempo):
· Hipótesis/deseo: If I knew…, I wish I had…, It's time we left, I'd rather you didn't.
⚠️ El past perfect no es decorativo: marca claramente qué ocurrió ANTES.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ When I arrived, they already left → ✅ …they had already left (past perfect).\n· ❌ I would be very shy as a child → ✅ I used to be very shy (estado → used to).\n· 'I'm used to' (acostumbrado) ≠ 'I used to' (solía): no los mezcles.\n· En narración, no abuses del past perfect: úsalo solo para marcar lo anterior, no toda la historia."),
    grammarEx("Use of English — Tiempos narrativos", "Elige o completa.", [
      mc("By the time the police arrived, the thieves ___ .", ["escaped", "had escaped", "were escaping"], 1, "anterior a otra pasada → past perfect."),
      fb("She was exhausted because she ___ (run) for an hour. (actividad previa prolongada)", ["had been running"], "past perfect continuous."),
      mc("As a child, I ___ terrified of the dark.", ["would be", "used to be", "was using to be"], 1, "estado pasado → used to be."),
      mc("Every winter, we ___ to the mountains. (hábito)", ["would go", "were going", "use to go"], 0, "hábito repetido → would go."),
      fb("The film ___ (already / start) when we took our seats.", ["had already started"], "past perfect."),
      mc("It took me a while, but I'm ___ working nights now.", ["used to", "use to", "using to"], 0, "be used to + -ing (acostumbrado)."),
      fb("The streets were wet; it ___ (rain). (evidencia de actividad previa)", ["had been raining"], "past perfect continuous (evidencia)."),
    ]),
    GRAMMAR("Vocabulario del día — Los recuerdos y la infancia (C1)", "Léxico avanzado de memoria e infancia."),
    deck("C1 S1D2 — Recuerdos e infancia", [
      ["upbringing", "crianza / educación", "She had a strict upbringing.", "sustantivo", "ˈʌpbrɪŋɪŋ"],
      ["nostalgia", "nostalgia", "The song filled me with nostalgia.", "sustantivo", "nɒˈstældʒə"],
      ["vivid", "vívido/a / nítido/a", "I have vivid memories of that summer.", "adjetivo", "ˈvɪvɪd"],
      ["formative", "formativo/a / decisivo/a", "Those were my formative years.", "adjetivo", "ˈfɔːmətɪv"],
      ["reminisce", "rememorar / evocar", "We reminisced about old times.", "verbo", "ˌremɪˈnɪs"],
      ["recollection", "recuerdo", "I have no recollection of it.", "sustantivo", "ˌrekəˈlekʃn"],
      ["hazy", "borroso/a / vago/a", "My memory of it is rather hazy.", "adjetivo", "ˈheɪzi"],
      ["milestone", "hito", "It was a milestone in my life.", "sustantivo", "ˈmaɪlstəʊn"],
      ["instil", "inculcar", "My parents instilled good habits in me.", "verbo", "ɪnˈstɪl"],
      ["carefree", "despreocupado/a", "Those were carefree, happy days.", "adjetivo", "ˈkeəfriː"],
    ]),
    vocabEx("Vocabulario — Los recuerdos y la infancia", "Elige la opción correcta.", [
      mc("The way you were raised as a child is your ___.", ["upbringing", "milestone", "recollection"], 0, "upbringing."),
      mc("A memory that is clear and detailed is ___.", ["vivid", "hazy", "carefree"], 0, "vivid."),
      mc("Years that strongly shape who you become are ___ years.", ["formative", "carefree", "hazy"], 0, "formative."),
      mc("To talk fondly about the past is to ___.", ["reminisce", "instil", "recollect"], 0, "reminisce."),
      mc("A memory that is vague and unclear is ___.", ["hazy", "vivid", "formative"], 0, "hazy."),
      mc("To gradually fix an attitude or habit in someone is to ___ it.", ["instil", "reminisce", "recollect"], 0, "instil."),
    ]),

    ...uoe({
      p1: {
        title: "The unreliable narrator of memory",
        text: "We tend to think of memory as a kind of recording device, faithfully (1)___ the events of our lives for later playback. Nothing could be further from the truth. Memory is not a recording but a (2)___ — an act of imaginative reconstruction that happens anew each time we remember. Every time we (3)___ a memory, we subtly alter it, colouring it with our present mood, beliefs and desires, before filing it away again in its revised form. Over the years, a cherished childhood memory may be reworked so many times that it (4)___ little resemblance to what actually happened. Worse still, we can 'remember', with complete conviction, events that never took place at all; psychologists have (5)___ implanted entirely false memories in experimental subjects with alarming ease. All of this should give us pause. The vivid, detailed recollections on which we build our sense of (6)___ who we are may be, in large part, fictions — stories we have told ourselves so often that we have come to mistake them for fact. And yet, paradoxically, this does not make them any less (7)___ to us. Whether or not they are accurate, our memories are the material from which we construct our identities. We are, quite literally, made of our memories, however (8)___ those memories may be.",
        q: [
          mc("(1)", ["preserving", "keeping", "storing", "saving"], 0, "'faithfully preserving'."),
          mc("(2)", ["reconstruction", "rebuilding", "remaking", "restoration"], 0, "'a reconstruction'."),
          mc("(3)", ["retrieve", "recover", "recall", "restore"], 2, "'each time we recall a memory'."),
          mc("(4)", ["bears", "holds", "carries", "keeps"], 0, "'bears little resemblance'."),
          mc("(5)", ["successfully", "happily", "readily", "easily"], 0, "'have successfully implanted'."),
          mc("(6)", ["exactly", "precisely", "just", "quite"], 1, "'our sense of precisely who we are'."),
          mc("(7)", ["precious", "valuable", "dear", "important"], 0, "'any less precious to us'."),
          mc("(8)", ["unreliable", "false", "inaccurate", "mistaken"], 0, "'however unreliable those memories may be'."),
        ],
      },
      p2: {
        title: "The country of childhood",
        text: "The past, as the famous opening line has it, is a foreign country: they do things differently there. And (1)___ any region of the past feels more foreign, as we grow older, (2)___ the country of our own childhood. We can visit it only in memory, and even then the visits grow (3)___ frequent and less vivid with the passing years. What (4)___ struck me, revisiting the town where I grew up after an absence of thirty years, was how small everything seemed. The vast, mysterious garden of my memory had (5)___ into a modest patch of lawn; the towering oak I had climbed as a boy was an unremarkable tree. Nothing had shrunk, of course; it was I (6)___ had grown. But the experience was oddly disorienting, as though my childhood memories and the physical reality had come, over the decades, to belong to two quite different worlds. Perhaps this is why we can never truly go (7)___. The childhood we long for is not a place on any map but a country that exists only in the past, and (8)___ which the door, once we have left, is closed forever.",
        q: [
          fb("(1)", ["if"], "'And if any region…' (concesivo)."),
          fb("(2)", ["than"], "'more foreign… than the country'."),
          fb("(3)", ["less"], "'grow less frequent'."),
          fb("(4)", ["most"], "'What most struck me'."),
          fb("(5)", ["shrunk"], "'had shrunk into a modest patch'."),
          fb("(6)", ["who"], "'it was I who had grown'."),
          fb("(7)", ["back"], "'never truly go back'."),
          fb("(8)", ["to"], "'a country… to which the door… is closed'."),
        ],
      },
      p3: {
        title: "What our childhoods make of us",
        text: "How much of the adult is already present in the child? The question has (1)___ parents and psychologists for generations. On one view, our early years are (2)___ formative: the experiences of childhood, and above all the quality of our earliest relationships, lay down patterns that shape us for (3)___. The (4)___ we receive, or fail to receive, in our first years leaves traces, this theory holds, that persist for a lifetime. Against this, others point to the remarkable (5)___ of the human being — our capacity to recover from even the most difficult beginnings, and to remake ourselves far into adulthood. The evidence, characteristically, offers (6)___ to both camps. Early experience clearly matters, sometimes profoundly; a childhood of neglect or trauma casts a long shadow. Yet human beings are not simply (7)___ by their childhoods, helplessly acting out patterns set in infancy. Many who suffered wretched beginnings go on to lead happy, well-adjusted lives, while some blessed with idyllic childhoods do not. Childhood, it seems, deals us a hand of cards; but how we play that hand remains, to a (8)___ degree, up to us.",
        items: [
          { root: "occupy", accepted: ["preoccupied"], hint: "'has preoccupied parents' → preoccupied." },
          { root: "decide", accepted: ["decisively"], hint: "'decisively formative' → decisively." },
          { root: "live", accepted: ["life"], hint: "'shape us for life' → life." },
          { root: "care", accepted: ["care"], hint: "'The care we receive' (sustantivo)." },
          { root: "resilient", accepted: ["resilience"], hint: "'the remarkable resilience' → resilience." },
          { root: "comfort", accepted: ["comfort"], hint: "'offers comfort to both camps' (sustantivo)." },
          { root: "prison", accepted: ["imprisoned"], hint: "'not simply imprisoned by their childhoods' → imprisoned." },
          { root: "consider", accepted: ["considerable"], hint: "'to a considerable degree' → considerable." },
        ],
      },
      p4: {
        title: "Transformaciones — recuerdos y narración",
        items: [
          { s1: "I don't remember that day at all.", key: "RECOLLECTION", s2: "I ___ that day.", accepted: ["have no recollection of"], explanation: "have no recollection of." },
          { s1: "She was crying, which was obvious from her red eyes.", key: "BEEN", s2: "Her red eyes showed she ___ .", accepted: ["had been crying"], explanation: "past perfect continuous (evidencia)." },
          { s1: "We regularly visited our grandparents in summer.", key: "WOULD", s2: "Every summer, we ___ our grandparents.", accepted: ["would visit"], explanation: "would (hábito pasado)." },
          { s1: "It was the first time I had ever felt truly independent.", key: "NEVER", s2: "I ___ truly independent before.", accepted: ["had never felt"], explanation: "past perfect + never." },
          { s1: "I found it strange to live alone at first, but not now.", key: "USED", s2: "I ___ living alone now.", accepted: ["am used to", "have got used to"], explanation: "be/get used to + -ing." },
          { s1: "My parents made me value honesty.", key: "INSTILLED", s2: "My parents ___ me.", accepted: ["instilled a value of honesty in", "instilled honesty in"], explanation: "instil sth in sb." },
        ],
      },
      p5: {
        title: "The museum of lost childhoods",
        text: "In a quiet side street of a European capital stands one of the strangest and most affecting museums in the world. It contains no paintings, no sculptures, no treasures of the conventional kind. Instead, its glass cases hold the ordinary debris of childhood: a scuffed toy car, a child's mitten, a broken doll, a homemade birthday card. Each object is accompanied by a small handwritten card describing the memory attached to it. The museum, in short, is a museum of childhood memory itself, assembled from thousands of donated objects and the recollections that cling to them.\n\nThe effect on visitors is, by all accounts, profound and unexpected. People who arrive expecting a mildly diverting hour find themselves, within minutes, unaccountably moved, and often in tears. There is something about the sheer ordinariness of the objects — a chipped cup, a faded photograph, a single roller skate — that pierces straight through the defences we normally maintain around our own pasts. Confronted with a stranger's childhood treasures, we find ourselves suddenly, achingly, remembering our own.\n\nThe museum's founder, a woman who spent years collecting its contents, has spoken of the peculiar power that ordinary objects hold over memory. A grand monument, she observes, leaves us cold; but a child's worn shoe can undo us completely. This is because memory, she believes, does not reside in great events but in tiny, specific, sensory details — the smell of a particular soap, the pattern on a childhood blanket, the exact weight of a favourite toy in the hand. These are the true keepers of the past, and it is precisely these that her museum has set out to preserve.\n\nWhat gives the collection its almost unbearable poignancy is the awareness, running through it, of loss. Every object on display represents a childhood that is gone and can never be recovered. The children who owned these things are now adults, or elderly, or dead; the moments the objects commemorate have vanished into an irretrievable past. To walk through the museum is to be reminded, gently but inescapably, of the transience of everything — of how the vivid, all-consuming world of our own childhood has slipped, without our quite noticing, into memory and shadow.\n\nAnd yet visitors rarely leave the museum depressed. The prevailing feeling, most report, is something more like tenderness — a bittersweet gratitude for the childhoods we were given, however imperfect, and a renewed tenderness towards the children we once were. The museum does not, in the end, mourn lost childhood so much as honour it. In gathering and preserving these humble relics, it insists that these small, private, long-vanished worlds mattered — that every childhood, however ordinary, was once a whole universe, and deserves to be remembered.",
        q: [
          mc("What does the museum contain?", ["Paintings.", "The ordinary objects of childhood, with memories attached.", "Treasures.", "Sculptures."], 1, "'the ordinary debris of childhood… the memory attached to it'."),
          mc("How do visitors typically react?", ["With boredom.", "Unexpectedly moved, often to tears.", "With anger.", "Indifferently."], 1, "'unaccountably moved, and often in tears'."),
          mc("Where does memory reside, according to the founder?", ["In great events.", "In tiny, specific, sensory details.", "In monuments.", "In photographs only."], 1, "'not… in great events but in tiny, specific, sensory details'."),
          mc("What gives the collection its poignancy?", ["Its value.", "The awareness of loss running through it.", "Its size.", "Its age."], 1, "'the awareness, running through it, of loss'."),
          mc("How do visitors usually feel on leaving?", ["Depressed.", "A bittersweet tenderness and gratitude.", "Angry.", "Nothing."], 1, "'something more like tenderness — a bittersweet gratitude'."),
          mc("What does the museum ultimately do, according to the writer?", ["Mourn childhood.", "Honour childhood and insist it mattered.", "Sell objects.", "Forget the past."], 1, "'it insists that these small… worlds mattered'."),
        ],
      },
      p6: {
        title: "Do we romanticise our childhoods?",
        intro: "Cuatro personas debaten si idealizamos la infancia.",
        texts: {
          A: "NADIA: We romanticise childhood shamelessly, and it does real harm. This misty-eyed nostalgia for 'simpler times' and 'carefree days' is largely a fiction. Childhood, if we're honest, is often frightening, powerless and confusing — you're at the mercy of adults and forces you don't understand. The rose-tinted version we peddle to ourselves conveniently forgets all that.",
          B: "TOM: I think the nostalgia, while obviously selective, points to something real. Children genuinely do live more fully in the present than adults — absorbed in play, undistracted by anxieties about the future or regrets about the past. That capacity for total absorption is something most of us lose, and it's worth mourning. The nostalgia isn't pure invention.",
          C: "PRIYA: What interests me is how unreliable the whole thing is. Our childhood 'memories' are largely reconstructions, reshaped every time we recall them and heavily edited by later feelings. So when we feel nostalgic, we're not really remembering our childhood at all — we're remembering a story we've told ourselves about it, which may bear little relation to how it actually felt at the time.",
          D: "SAM: I'd say the danger isn't nostalgia itself but what we do with it. Longing fondly for the past is harmless enough. But using an idealised childhood as a stick to beat the present — 'children today have it so easy', 'it was all better back then' — is both inaccurate and corrosive. By most measures, childhoods today are safer and healthier than ever. The golden age is a myth.",
        },
        q: [
          mc("Who argues that childhood is often frightening and powerless?", ["A", "B", "C", "D"], 0, "Nadia: 'often frightening, powerless and confusing'."),
          mc("Whose view most SUPPORTS the idea that nostalgia captures something real?", ["A", "B", "C", "D"], 1, "Tom: 'The nostalgia isn't pure invention'."),
          mc("Who stresses that childhood memories are unreliable reconstructions?", ["A", "B", "C", "D"], 2, "Priya: 'largely reconstructions… reshaped every time'."),
          mc("Who shares Nadia's scepticism that the past was better ('golden age is a myth')?", ["A", "B", "C", "D"], 3, "Sam: 'The golden age is a myth' — agrees the past wasn't better."),
        ],
      },
      p7: {
        title: "How memory shapes the self",
        text: "If our memories are so unreliable, why does evolution allow us to keep them at all? (1)___\n\nThe answer, researchers increasingly believe, is that the primary purpose of memory is not, in fact, to record the past accurately. (2)___ Its real function is to help us navigate the present and anticipate the future, and for that purpose, accuracy is often less important than usefulness.\n\nThis explains a great deal about the peculiar way memory works. (3)___ We remember what is emotionally significant, what is useful, what confirms our sense of who we are, and we quietly discard or distort the rest.\n\nSeen in this light, the 'errors' of memory are not really errors at all. (4)___ They are the by-products of a system optimised not for accuracy but for meaning.\n\nThis has profound implications for our sense of identity. (5)___ The life story each of us carries around — the narrative that tells us who we are and how we came to be this way — is not a neutral historical record but a purposeful construction, edited and shaped to serve our present needs.\n\nWe are, in a very real sense, the authors of our own pasts. (6)___ And in continually rewriting the story of who we have been, we are also, quietly, deciding who we are going to be.",
        options: [
          "It seems, on the face of it, a strange design flaw.",           // A -> gap 1
          "Memory did not evolve to be a faithful archive.",              // B -> gap 2
          "It is selective, emotional and endlessly self-serving.",       // C -> gap 3
          "They are the price of a system built for meaning, not truth.", // D -> gap 4
          "Our very identity rests on this reconstructed past.",          // E -> gap 5
          "The story is never quite finished, and never quite fixed.",    // F -> gap 6
          "Human memory records the past with perfect accuracy.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: parece un fallo de diseño."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la memoria no evolucionó como archivo fiel."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: es selectiva y emocional."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: precio de un sistema para el sentido."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la identidad se apoya en ese pasado."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la historia nunca se acaba del todo."),
        ],
      },
      p8: {
        title: "Four people recall a formative childhood memory",
        text: "Read what four people say about a memory that shaped them.\n\nA) NADIA: The memory that made me who I am is oddly small: my grandmother teaching me to bake, patiently, one wet afternoon. It wasn't dramatic. But that sense of being wholly attended to, of someone giving me their complete, unhurried time — I've spent my whole life trying to give that same gift to others. One quiet afternoon shaped my entire idea of love.\n\nB) TOM: Mine is a memory of humiliation, honestly. I froze during a school play, forgot my lines, and the audience laughed. For years I was ashamed of it. But it taught me, eventually, that surviving embarrassment is possible — that you can be laughed at and live. Strangely, that childhood disaster is the root of the confidence I have now. What felt like the worst day of my life turned out to be one of the most useful.\n\nC) PRIYA: I remember the exact moment I realised my parents were fallible — that they didn't have all the answers, that they were frightened too. I must have been about nine. It was terrifying and liberating at once. In a way, that was the moment my childhood ended and I began, very slowly, to become my own person. Every child has that moment, I think; that was mine.\n\nD) SAM: The odd thing is, I'm no longer sure my most formative memory even happened. It's a vivid scene of my father lifting me onto his shoulders at the seaside, and I've built so much of my sense of being loved on it. But my mother insists it was my uncle, not my father, and that I was too young to remember. True or not, that memory made me who I am. Perhaps that's what matters more than whether it's accurate.\n",
        q: [
          mc("Whose formative memory involves being given someone's unhurried time?", ["A", "B", "C", "D"], 0, "Nadia: 'someone giving me their complete, unhurried time'."),
          mc("Whose memory is one of childhood humiliation?", ["A", "B", "C", "D"], 1, "Tom: 'a memory of humiliation'."),
          mc("Who recalls realising their parents were fallible?", ["A", "B", "C", "D"], 2, "Priya: 'my parents were fallible'."),
          mc("Who is unsure whether their key memory even happened?", ["A", "B", "C", "D"], 3, "Sam: 'I'm no longer sure… it even happened'."),
          mc("Who says a 'childhood disaster' became the root of their confidence?", ["A", "B", "C", "D"], 1, "Tom: 'the root of the confidence I have now'."),
          mc("Who describes a moment that was 'terrifying and liberating at once'?", ["A", "B", "C", "D"], 2, "Priya: 'terrifying and liberating at once'."),
          mc("Who suggests the meaning of a memory matters more than its accuracy?", ["A", "B", "C", "D"], 3, "Sam: 'more than whether it's accurate'."),
          mc("Whose memory shaped their 'entire idea of love'?", ["A", "B", "C", "D"], 0, "Nadia: 'my entire idea of love'."),
          mc("Whose mother disputes the details of their memory?", ["A", "B", "C", "D"], 3, "Sam: 'my mother insists it was my uncle'."),
          mc("Who learned that 'you can be laughed at and live'?", ["A", "B", "C", "D"], 1, "Tom: 'you can be laughed at and live'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la memoria y la identidad se plantearon dos ideas:\n· our memories define who we are (nuestros recuerdos nos definen)\n· our memories are unreliable and shouldn't be trusted (los recuerdos no son fiables)\nEscribe un ensayo comentando AMBAS ideas y explicando cuál te parece más convincente, con razones y ejemplos. Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'A memory that made me who I am' — cuenta un recuerdo formativo y reflexiona sobre su efecto.\n· RESEÑA de un libro o película que evoque bien la infancia o la nostalgia: descríbela y valora si lo consigue.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una investigadora de la memoria, la doctora Ellis, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a memory researcher called Doctor Ellis giving a talk. Doctor Ellis: The first thing to understand about memory is that it is not a recording. We imagine it works like a video camera, but nothing could be further from the truth. Memory is reconstruction. Every time you recall an event, you rebuild it, and in rebuilding it, you change it. This leads to my second point: memories are surprisingly easy to distort. In our experiments, we've been able to implant entirely false memories in ordinary people — convincing them, with rich detail, of events that never happened. They aren't lying; they genuinely believe it. Now, you might ask why evolution would give us such a faulty system. The answer is that memory did not evolve for accuracy. It evolved to be useful — to help us survive and plan, not to keep a perfect record. That's why we remember what is emotionally significant and quietly forget the rest. My fourth point concerns childhood. Most people's earliest genuine memory dates from around the age of three; anything supposedly earlier is almost always a reconstruction, often built from photographs and family stories. And finally, the most important idea of all: because memory is reconstructive, the life story we tell ourselves is not a fixed record but something we are constantly, quietly editing to fit who we now are.", [
      fb("Memory is not a recording; it is ___.", ["reconstruction"], "'Memory is reconstruction'."),
      fb("Every time you recall an event, you ___ it.", ["change", "rebuild"], "'you rebuild it… you change it'."),
      fb("Researchers have been able to implant ___ memories.", ["false"], "'implant entirely false memories'."),
      fb("Memory did not evolve for ___.", ["accuracy"], "'not evolve for accuracy'."),
      fb("Memory evolved to be ___, not to keep a perfect record.", ["useful"], "'It evolved to be useful'."),
      fb("We remember what is ___ significant.", ["emotionally"], "'what is emotionally significant'."),
      fb("Most people's earliest genuine memory dates from around age ___.", ["three"], "'around the age of three'."),
      fb("The life story we tell is something we are constantly ___.", ["editing"], "'constantly… editing'."),
    ]),

    ...speakingParts({ p1: "cuál es tu recuerdo más antiguo, cómo fue tu infancia y qué te inculcaron de pequeño/a", p2: "dos escenas de la infancia (un niño jugando solo absorto y una familia numerosa reunida): compáralas y especula sobre los recuerdos que dejarán", p3: "qué marca más a una persona en la infancia (la familia, las amistades, la escuela, los momentos difíciles, los lugares): comentadlo y elegid lo más determinante", p4: "los recuerdos y la infancia: si idealizamos el pasado, si nuestros recuerdos son fiables y cuánto nos define la infancia" }),

    SUMMARY("Resumen del Día 2", [
      "Narración: past simple (secuencia) + continuous (marco) + past perfect (lo anterior) + past perfect continuous (actividad previa/evidencia).",
      "used to + inf. (hábitos Y estados pasados) vs would + inf. (solo hábitos); ≠ be/get used to + -ing (acostumbrarse).",
      "Vocabulario de recuerdos e infancia. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 3", "Escribe un párrafo narrando un recuerdo usando los 4 tiempos del pasado. Repasa las flashcards. Mañana: el futuro visto desde el presente."),
  ],
};

// ───────────────────────── DÍA 3 ─────────────────────────
const DAY3 = {
  title: "Día 3 — El futuro desde el presente · Las metas y aspiraciones",
  description: "Formas de futuro (will/going to/present continuous/simple), future perfect y continuous, be about to / on the verge of / due to / be to, future in the past. Vocabulario de metas. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Expresar el futuro con precisión y matiz, incluido el futuro visto desde el pasado.",
    summary: "Formas de futuro; metas/aspiraciones; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'will' para planes ya organizados (→ present continuous).", "olvidar future perfect ('by 2030 I will have…').", "'was going to' para futuro en el pasado."],
    reviewPrompts: ["¿Cómo expresas algo que estará terminado antes de cierto momento futuro?", "¿'be to' y 'be about to' — qué matiz añaden?"],
  },
  items: [
    TEXT("🔁 Ayer, el pasado. Hoy el FUTURO visto desde el presente, con todos sus matices. Vocabulario: las METAS y las ASPIRACIONES."),
    GRAMMAR("El futuro desde el presente", `FORMAS BÁSICAS (matiz):
· will → predicción, decisión espontánea, promesa: I'll help you.
· be going to → intención/plan, evidencia presente: Look at those clouds — it's going to pour.
· present continuous → arreglo/plan ya organizado (con hora/lugar/persona): I'm meeting the director at three.
· present simple → horarios/calendario: The train leaves at nine.
FUTUROS AVANZADOS:
· future continuous (will be doing) → acción en curso en un momento futuro; también futuro "neutro/educado": I'll be working all evening. Will you be using the car?
· future perfect (will have done) → terminado ANTES de un momento futuro: By June, I'll have finished.
· future perfect continuous (will have been doing) → duración hasta un punto futuro: By 2030 she'll have been teaching for 20 years.
ESTRUCTURAS DE INMINENCIA/PLAN:
· be about to / be on the verge of + -ing → a punto de: We're about to leave. She's on the verge of quitting.
· be due to → previsto para: The report is due to be published tomorrow.
· be to + inf. → planes formales/instrucciones/destino: The President is to visit next week.
FUTURO EN EL PASADO: was/were going to, would, was about to, was to → I was going to call you (pero no lo hice).
⚠️ Elige la forma por el MATIZ (plan vs predicción vs horario), no por traducción.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ I will meet my tutor tomorrow at 4 (plan fijado) → ✅ I'm meeting my tutor tomorrow at 4.\n· ❌ When you will arrive, call me → ✅ When you arrive, call me (presente tras 'when/if' para futuro).\n· ❌ In two years I finish my degree → ✅ In two years I'll have finished my degree (future perfect).\n· 'be to' es formal (planes/órdenes): 'You are to report at 9' = debes presentarte a las 9."),
    grammarEx("Use of English — Formas de futuro", "Elige o completa con el matiz correcto.", [
      mc("I can't come — I ___ my supervisor at four. (plan fijado)", ["will meet", "am meeting", "meet"], 1, "arreglo organizado → present continuous."),
      fb("By the end of the year, I ___ (save) enough to travel. (terminado antes de un futuro)", ["will have saved", "'ll have saved"], "future perfect."),
      mc("Don't call at eight — I ___ dinner then.", ["will have", "will be having", "have"], 1, "en curso en un momento futuro → future continuous."),
      fb("Hurry — the train ___ (be) about to leave!", ["is"], "be about to (inminencia)."),
      mc("The minister ___ address parliament tomorrow. (plan formal)", ["is to", "will be", "is going"], 0, "be to + inf. (formal)."),
      fb("I ___ (go) to call you, but I ran out of time. (futuro en el pasado, no cumplido)", ["was going"], "was going to (futuro en el pasado)."),
      mc("By 2035, she ___ here for thirty years.", ["will work", "will have been working", "is working"], 1, "duración hasta un punto futuro → future perfect continuous."),
    ]),
    GRAMMAR("Vocabulario del día — Las metas y aspiraciones (C1)", "Léxico avanzado de ambición y objetivos."),
    deck("C1 S1D3 — Metas y aspiraciones", [
      ["aspiration", "aspiración", "She has serious political aspirations.", "sustantivo", "ˌæspəˈreɪʃn"],
      ["strive", "esforzarse / afanarse", "We strive for excellence.", "verbo", "straɪv"],
      ["milestone", "hito", "Reaching the summit was a milestone.", "sustantivo", "ˈmaɪlstəʊn"],
      ["fulfil one's potential", "desarrollar el potencial", "The school helps children fulfil their potential.", "colocación", "fʊlˈfɪl"],
      ["daunting", "abrumador/a / intimidante", "The task seemed daunting at first.", "adjetivo", "ˈdɔːntɪŋ"],
      ["perseverance", "perseverancia", "Success takes talent and perseverance.", "sustantivo", "ˌpɜːsɪˈvɪərəns"],
      ["setback", "revés", "Every setback made her more determined.", "sustantivo", "ˈsetbæk"],
      ["single-minded", "resuelto/a / con un único objetivo", "Her single-minded focus paid off.", "adjetivo", "ˌsɪŋɡl ˈmaɪndɪd"],
      ["realistic", "realista", "Set yourself realistic goals.", "adjetivo", "ˌrɪəˈlɪstɪk"],
      ["thrive", "prosperar / florecer", "Some people thrive under pressure.", "verbo", "θraɪv"],
    ]),
    vocabEx("Vocabulario — Las metas y aspiraciones", "Elige la opción correcta.", [
      mc("A strong hope or ambition for the future is an ___.", ["aspiration", "setback", "milestone"], 0, "aspiration."),
      mc("To make great efforts to achieve something is to ___.", ["strive", "thrive", "daunt"], 0, "strive."),
      mc("Continued effort despite difficulties is ___.", ["perseverance", "aspiration", "setback"], 0, "perseverance."),
      mc("Something that makes you feel nervous because it's difficult is ___.", ["daunting", "realistic", "single-minded"], 0, "daunting."),
      mc("Completely focused on one aim is being ___.", ["single-minded", "realistic", "daunting"], 0, "single-minded."),
      mc("To grow strong and do well, often under pressure, is to ___.", ["thrive", "strive", "daunt"], 0, "thrive."),
    ]),

    ...uoe({
      p1: {
        title: "The tyranny of goals",
        text: "We live in an age obsessed with goal-setting. From an early age we are urged to define our ambitions, to (1)___ out five- and ten-year plans, and to measure our lives against a relentless series of targets and milestones. Much of this is, no doubt, useful; a life entirely without direction is unlikely to (2)___ to much. And yet there is a darker side to the cult of goals that we rarely (3)___. The trouble with organising a life around future goals is that it can rob the present of all its value, reducing each day to a mere (4)___ towards some imagined destination. The goal-obsessed person is forever living in the future, telling themselves they will be happy once they have (5)___ the promotion, the house, the perfect body — only to find, on arriving, that a new goal has already (6)___ its place, and happiness has receded once more into the distance. There is a strong (7)___, then, for holding our goals a little more lightly. By all means let us have ambitions and pursue them with energy. But let us not (8)___ the fatal mistake of postponing our lives until they are achieved. The present moment, after all, is the only one we ever actually have.",
        q: [
          mc("(1)", ["map", "work", "set", "lay"], 0, "'to map out… plans'."),
          mc("(2)", ["amount", "add", "come", "lead"], 0, "'unlikely to amount to much'."),
          mc("(3)", ["acknowledge", "admit", "recognise", "confess"], 0, "'we rarely acknowledge'."),
          mc("(4)", ["stepping-stone", "step", "stage", "means"], 0, "'a mere stepping-stone towards'."),
          mc("(5)", ["secured", "got", "won", "gained"], 0, "'once they have secured the promotion'."),
          mc("(6)", ["taken", "filled", "held", "occupied"], 0, "'a new goal has already taken its place'."),
          mc("(7)", ["case", "argument", "reason", "point"], 0, "'a strong case for'."),
          mc("(8)", ["make", "do", "commit", "have"], 0, "'not make the fatal mistake'."),
        ],
      },
      p2: {
        title: "Dreams and their dangers",
        text: "'Follow your dreams' must (1)___ one of the most frequently offered pieces of advice in the modern world. It adorns greetings cards and graduation speeches; it is repeated, (2)___ an article of faith, to every ambitious young person. And yet, for all its popularity, it is advice (3)___ should be handled with considerable care. For every dream that is triumphantly realised, there are countless others that lead only (4)___ disappointment, debt and years of wasted effort. The aspiring actor who spends a decade waiting tables, the would-be entrepreneur who loses their savings — these, too, were following their dreams. The uncomfortable truth, which the inspirational posters omit, is that passion and determination, (5)___ necessary, are very far from sufficient. Some dreams are simply unrealistic, and pursuing them at all (6)___ can be an act not of courage but of folly. This is not an argument (7)___ having dreams, still less against pursuing them. It is an argument for pursuing them with our eyes open — for tempering our aspirations with a clear-eyed assessment of our talents and our chances, and for knowing, crucially, when a dream should be (8)___ go of. The wisdom to distinguish a dream worth chasing from one worth abandoning is, perhaps, the most valuable and least celebrated of all.",
        q: [
          fb("(1)", ["be"], "'must be one of the most…' (deducción)."),
          fb("(2)", ["as", "like"], "'as an article of faith'."),
          fb("(3)", ["that", "which"], "'advice that should be handled'."),
          fb("(4)", ["to"], "'lead only to disappointment'."),
          fb("(5)", ["while", "although", "though"], "'while necessary, are far from sufficient'."),
          fb("(6)", ["costs"], "'at all costs'."),
          fb("(7)", ["against"], "'an argument against having dreams'."),
          fb("(8)", ["let"], "'should be let go of'."),
        ],
      },
      p3: {
        title: "The psychology of achievement",
        text: "What is it that separates those who achieve their ambitions from those who do not? For a long time, the (1)___ answer was talent: the successful, it was assumed, were simply more gifted than the rest. Recent research, however, tells a more (2)___ and encouraging story. Talent, it turns out, is a poor (3)___ of long-term success. Far more important is a quality that researchers have labelled 'grit' — a combination of passion and (4)___ sustained over years, even in the face of repeated failure. The grittiest individuals are not necessarily the most talented; they are the ones who keep going long after others have given up, treating each setback not as a verdict but as a (5)___ to learn from. What makes this finding so heartening is that grit, unlike raw talent, appears to be something that can be (6)___. It grows through the experience of overcoming difficulty; it is nurtured by a belief that ability is not fixed but can be (7)___ through effort. The implications for how we raise and educate children are profound. Rather than praising them for being 'clever' — which, paradoxically, can make them afraid of failure — we would do better to praise their effort and perseverance, and so cultivate the very quality that, more than any inborn gift, will (8)___ their long-term success.",
        items: [
          { root: "assume", accepted: ["assumed"], hint: "'the assumed answer' → assumed." },
          { root: "nuance", accepted: ["nuanced"], hint: "'a more nuanced story' → nuanced." },
          { root: "predict", accepted: ["predictor"], hint: "'a poor predictor of success' → predictor." },
          { root: "persevere", accepted: ["perseverance"], hint: "'passion and perseverance' → perseverance." },
          { root: "opportune", accepted: ["opportunity"], hint: "'an opportunity to learn' → opportunity." },
          { root: "learn", accepted: ["learned", "learnt"], hint: "'can be learned' → learned." },
          { root: "develop", accepted: ["developed"], hint: "'can be developed through effort' → developed." },
          { root: "determine", accepted: ["determine"], hint: "'will determine their success' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — metas y futuro",
        items: [
          { s1: "I intended to phone you, but I forgot.", key: "GOING", s2: "I ___ you, but I forgot.", accepted: ["was going to phone", "was going to call"], explanation: "futuro en el pasado." },
          { s1: "They will finish the project before Friday.", key: "HAVE", s2: "By Friday, they ___ the project.", accepted: ["will have finished"], explanation: "future perfect." },
          { s1: "She is very close to giving up.", key: "VERGE", s2: "She is ___ giving up.", accepted: ["on the verge of"], explanation: "on the verge of + -ing." },
          { s1: "The ceremony is scheduled to start at noon.", key: "DUE", s2: "The ceremony ___ at noon.", accepted: ["is due to start"], explanation: "be due to." },
          { s1: "Despite the difficulty, she never stopped trying.", key: "MATTER", s2: "___ how difficult it was, she never stopped trying.", accepted: ["No matter"], explanation: "No matter how…" },
          { s1: "Only through perseverance did she achieve her goal.", key: "IT", s2: "___ perseverance that she achieved her goal.", accepted: ["It was through", "It was only through"], explanation: "cleft con it (énfasis)." },
        ],
      },
      p5: {
        title: "The climber who turned back",
        text: "In the annals of mountaineering, the great triumphs are, naturally, the most celebrated: the first ascents, the record-breaking climbs, the summits reached against impossible odds. Far less is heard of the other kind of story — the story of the climber who, within reach of the summit, chose to turn back. Yet it is among these quieter tales that some of the sport's most instructive lessons are to be found. One such story concerns an experienced climber who, some years ago, found herself just a few hundred metres below the summit of one of the world's highest peaks, a goal towards which she had striven for the better part of a decade.\n\nEverything about the moment conspired to urge her on. The summit was tantalisingly close; the weather, for now, was holding; and she had invested years of training, and a small fortune, in reaching this point. Every fibre of her being longed to press on and claim the prize she had dreamed of for so long. And yet, studying the sky and her watch, she made a calculation that all her experience told her was correct but that her heart rebelled against: to continue would mean descending in darkness, exhausted, as a storm moved in. The risk, she judged, was simply too great. And so, agonisingly, within sight of the summit, she turned around and began the long descent.\n\nThe decision cost her dearly. She never returned to attempt the peak again, and the summit she had dreamed of for a decade remained, for the rest of her life, unclimbed. To many, this might seem a tragedy, or even a failure. She herself, however, came to regard that moment of turning back as the finest decision of her climbing career, and, in a sense, the one of which she was most proud. For that same season, on that same mountain, several climbers who had pressed on for the summit in similar conditions did not come back at all.\n\nHer story has since become something of a parable within the climbing community, invoked whenever the seductive dangers of 'summit fever' are discussed. Summit fever is the name climbers give to the near-irresistible urge, after a huge investment of effort, to reach the top at any cost — an urge that has, over the years, cost a great many experienced mountaineers their lives. The tragedy is a peculiarly human one: having sacrificed so much to get so close, the mind rebels against the idea of turning back with the goal in sight, and calculates the risks not coolly but through the distorting lens of desire.\n\nWhat the climber's story teaches, in the end, reaches far beyond mountaineering. We are all, in our various ways, prone to summit fever — to a stubborn refusal to abandon a goal into which we have poured our hearts, long after wisdom counsels retreat. The failed business kept alive with ever more borrowed money, the doomed relationship clung to out of sheer investment, the ambition pursued at the cost of health and happiness: all are forms of the same fever. The climber who turned back understood a truth that our goal-obsessed culture finds hard to accept: that knowing when to abandon a goal can require more courage, and more wisdom, than the dogged pursuit of it — and that the summit, however glittering, is never worth dying for.",
        q: [
          mc("What kind of mountaineering story does the writer say is rarely heard?", ["First ascents.", "The story of the climber who turns back.", "Record climbs.", "Rescues."], 1, "'the story of the climber who… chose to turn back'."),
          mc("Why did the climber decide to turn back?", ["She was bored.", "Continuing meant descending in darkness into a storm — too risky.", "She was lost.", "She reached the top."], 1, "'to continue would mean descending in darkness… as a storm moved in. The risk… was… too great'."),
          mc("How did she later regard the decision?", ["As a failure.", "As the finest decision of her career.", "As a tragedy.", "With regret."], 1, "'the finest decision of her climbing career'."),
          mc("What is 'summit fever'?", ["A disease.", "The urge to reach the top at any cost after huge investment.", "Cold weather.", "Fear of heights."], 1, "'the near-irresistible urge… to reach the top at any cost'."),
          mc("Why is summit fever so dangerous?", ["It's contagious.", "The mind judges risks through desire, not coolly.", "It causes storms.", "It's illegal."], 1, "'calculates the risks not coolly but through the distorting lens of desire'."),
          mc("What wider truth does the story teach?", ["Never give up.", "Knowing when to abandon a goal can take more courage than pursuing it.", "Summits are worth dying for.", "Goals don't matter."], 1, "'knowing when to abandon a goal can require more courage… than the dogged pursuit of it'."),
        ],
      },
      p6: {
        title: "Should we always follow our dreams?",
        intro: "Cuatro personas opinan sobre el consejo de 'perseguir tus sueños'.",
        texts: {
          A: "NADIA: 'Follow your dreams' is possibly the most irresponsible advice we give the young. It ignores the brutal arithmetic of reality: for every dream realised, thousands end in debt and disappointment. We fill young people with unrealistic expectations, then act surprised when they crash. Far kinder would be to teach them to find meaning in ordinary, achievable lives, rather than chasing a glittering prize most will never reach.",
          B: "TOM: I find that view unbearably bleak. Yes, most dreams fail — but a life without them is barely worth living. The point of pursuing a dream isn't only the chance of achieving it; it's who you become in the trying. Even those who fall short are usually enriched by the attempt. I'd far rather try and fail than spend my life wondering 'what if?'.",
          C: "PRIYA: The real skill nobody teaches is knowing which dreams to pursue and which to let go. Blind persistence is not a virtue; sometimes it's just folly. The wise person pursues their ambitions energetically but keeps assessing, honestly, whether the dream is still worth the cost — and has the courage to walk away when it isn't. That judgement matters far more than either 'follow your dreams' or 'be realistic'.",
          D: "SAM: What troubles me is how the whole framing serves the lucky few. The successful love to say 'I followed my dream and made it' — conveniently forgetting the enormous role of luck, privilege and timing. It turns success into pure merit and failure into personal weakness. Most who 'fail' didn't dream less hard; they were just dealt a worse hand. The mythology is cruel.",
        },
        q: [
          mc("Who calls 'follow your dreams' irresponsible advice?", ["A", "B", "C", "D"], 0, "Nadia: 'the most irresponsible advice'."),
          mc("Whose view most OPPOSES Nadia's, valuing the attempt itself?", ["A", "B", "C", "D"], 1, "Tom: 'who you become in the trying'."),
          mc("Who emphasises the skill of knowing which dreams to abandon?", ["A", "B", "C", "D"], 2, "Priya: 'knowing which dreams to pursue and which to let go'."),
          mc("Who argues the 'follow your dreams' story ignores luck and privilege?", ["A", "B", "C", "D"], 3, "Sam: 'the enormous role of luck, privilege and timing'."),
        ],
      },
      p7: {
        title: "The paradox of ambition",
        text: "Ambition presents us with a genuine paradox. (1)___ Without it, human beings would achieve little, and civilisation itself would grind to a halt.\n\nAnd yet the same drive that builds empires and cures diseases can also, taken to excess, consume the very people it animates. (2)___ The intensely ambitious person is often, almost by definition, chronically dissatisfied, forever chasing a horizon that recedes as they approach it.\n\nThis is the paradox: that ambition is at once a great engine of achievement and a potential source of lifelong misery. (3)___ The trick, if there is one, lies in harnessing its energy without being enslaved by its endless demands.\n\nThe wisest people, perhaps, are those who manage to hold their ambitions and their contentment in a kind of balance. (4)___ They strive hard for their goals, yet retain the capacity to be happy whether or not they achieve them.\n\nThis is far easier said than done, for ambition and contentment can seem like natural enemies. (5)___ How can one burn with desire for what one lacks while remaining at peace with what one has?\n\nAnd yet the two are not, in truth, incompatible. (6)___ To pursue a goal wholeheartedly while remaining serenely indifferent to the outcome is difficult, but not impossible — and it may be the closest thing there is to a recipe for a life that is both accomplished and happy.",
        options: [
          "Ambition is, undeniably, a powerful force for good.",           // A -> gap 1
          "Its rewards can be bought at a terrible personal cost.",        // B -> gap 2
          "Both a blessing and a curse, it demands to be managed.",        // C -> gap 3
          "They want much, yet need little to be content.",                // D -> gap 4
          "The tension between the two is real and deep.",                 // E -> gap 5
          "One can, with practice, learn to want without grasping.",       // F -> gap 6
          "Ambition has never achieved anything of value.",               // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la ambición es una fuerza para el bien."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: sus premios tienen un coste terrible."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: bendición y maldición, hay que gestionarla."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: quieren mucho, necesitan poco."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la tensión es real y profunda."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: se puede querer sin aferrarse."),
        ],
      },
      p8: {
        title: "Four people talk about their ambitions",
        text: "Read what four people say about ambition and their goals.\n\nA) NADIA: I was ferociously ambitious in my twenties — I wanted to be at the top of my field, and I got there. What nobody warns you about is the emptiness at the summit. I'd sacrificed everything for the goal, and when I reached it, I felt nothing but 'is that all?'. I've since learned to want less and appreciate more. The chase, it turns out, was never really the point.\n\nB) TOM: My ambition has always been a slow burn rather than a blaze. I don't have one grand dream; I just want to keep getting a little better at what I do, year after year. People with huge, single-minded ambitions often burn out or crash. My modest, steady kind has carried me further, in the end, than their spectacular ones — and I've enjoyed the journey.\n\nC) PRIYA: The hardest and best thing I ever did was give up on a dream. I'd wanted to be a professional musician since childhood and spent years striving for it, against all the evidence that I wasn't quite good enough. Letting go felt like a bereavement. But it freed me to build a life I now love. Sometimes abandoning an ambition is the bravest thing you can do.\n\nD) SAM: I'm suspicious of the whole language of 'ambition' and 'goals'. It makes life sound like a project to be optimised. I try instead to stay open to where things lead, rather than forcing everything towards some fixed target I decided on years ago. Some of the best things in my life came from having no plan at all. Not everything has to be a goal.\n",
        q: [
          mc("Who felt emptiness on reaching the top of their field?", ["A", "B", "C", "D"], 0, "Nadia: 'the emptiness at the summit'."),
          mc("Whose ambition is 'a slow burn rather than a blaze'?", ["A", "B", "C", "D"], 1, "Tom: 'a slow burn rather than a blaze'."),
          mc("Who found giving up a dream was their 'hardest and best' decision?", ["A", "B", "C", "D"], 2, "Priya: 'give up on a dream'."),
          mc("Who is suspicious of the whole language of goals?", ["A", "B", "C", "D"], 3, "Sam: 'suspicious of the whole language of \"ambition\"'."),
          mc("Who says 'the chase… was never really the point'?", ["A", "B", "C", "D"], 0, "Nadia: 'The chase… was never really the point'."),
          mc("Who values steady improvement over grand dreams?", ["A", "B", "C", "D"], 1, "Tom: 'keep getting a little better… year after year'."),
          mc("For whom did letting go feel 'like a bereavement'?", ["A", "B", "C", "D"], 2, "Priya: 'felt like a bereavement'."),
          mc("Who prefers to 'stay open to where things lead'?", ["A", "B", "C", "D"], 3, "Sam: 'stay open to where things lead'."),
          mc("Who warns that single-minded people 'burn out or crash'?", ["A", "B", "C", "D"], 1, "Tom: 'often burn out or crash'."),
          mc("Who says abandoning an ambition can be 'the bravest thing'?", ["A", "B", "C", "D"], 2, "Priya: 'the bravest thing you can do'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En una charla sobre el éxito personal se debatieron dos ideas sobre las metas:\n· setting ambitious goals drives us to achieve more (las metas ambiciosas nos impulsan)\n· focusing on goals can make us miss the present (centrarse en metas nos hace perdernos el presente)\nEscribe un ensayo comentando AMBAS ideas y explicando cuál pesa más para ti, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA (proposal) para el consejo estudiantil: sugiere un programa que ayude a los jóvenes a fijar metas realistas; justifica y recomienda.\n· ARTÍCULO: 'The goal I gave up on — and why' — cuenta una meta que abandonaste y qué aprendiste.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Marcus y Elena, sobre la ambición y las metas (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Marcus and Elena, discussing ambition and goals. Elena: Marcus, you've had this extraordinary career, but you always seem oddly ambivalent about ambition. Marcus: I am, genuinely. Look, ambition got me everything I have. But it also nearly destroyed me. For years I lived entirely in the future — I'll be happy when I get the promotion, when I hit the target, when I make partner. And each time I got there, the happiness lasted about a week before I needed the next thing. Elena: So the goals themselves were the problem? Marcus: Not the goals exactly — the way I related to them. I'd turned my whole life into a means to some future end that never actually arrived. I was so busy climbing that I forgot to look at the view. Elena: But surely you'd have achieved nothing without that drive? Marcus: That's the paradox, isn't it? Yes, the ambition drove me. But it also blinded me. What I've had to learn, painfully, is how to keep striving hard while somehow not staking my entire happiness on the outcome. Elena: Is that even possible? It sounds contradictory. Marcus: It sounds contradictory, but I think it's the whole secret. Pursue the goal wholeheartedly, but hold the result lightly. Care enormously about doing the work well, and much less about where it gets you. Easy to say, of course. Elena: And the young people you mentor — what do you tell them? Marcus: I tell them to be ambitious, absolutely. But I also warn them: don't postpone your life. Don't tell yourself you'll start living once you've arrived somewhere, because you never quite arrive. The life is now, in the striving, or it's nowhere.", [
      mc("1. How does Marcus feel about ambition?", ["Wholly positive.", "Genuinely ambivalent.", "Wholly negative.", "Indifferent."], 1, "'I am, genuinely' ambivalent."),
      mc("2. What happened each time he achieved a goal?", ["Lasting happiness.", "Happiness lasted about a week, then he needed the next thing.", "Nothing.", "He quit."], 1, "'the happiness lasted about a week'."),
      mc("3. What does he say the real problem was?", ["The goals themselves.", "The way he related to them.", "His job.", "Other people."], 1, "'the way I related to them'."),
      mc("4. What metaphor does he use for his mistake?", ["Losing a race.", "Climbing so busily he forgot to look at the view.", "Sinking.", "Falling."], 1, "'so busy climbing that I forgot to look at the view'."),
      mc("5. What has he 'painfully' had to learn?", ["To stop striving.", "To strive hard without staking his happiness on the outcome.", "To give up goals.", "To work less."], 1, "'keep striving hard while… not staking my entire happiness on the outcome'."),
      mc("6. What does he warn the young people he mentors?", ["Avoid ambition.", "Don't postpone your life until you've 'arrived'.", "Never rest.", "Only chase money."], 1, "'don't postpone your life… you never quite arrive'."),
    ]),

    ...speakingParts({ p1: "cuáles son tus metas a corto y largo plazo y qué te motiva a esforzarte por ellas", p2: "dos imágenes de personas persiguiendo una meta (alguien recibiendo un premio y alguien entrenando en soledad de madrugada): compáralas y especula", p3: "qué ayuda más a alcanzar las metas (el talento, la perseverancia, la suerte, los apoyos, saber cuándo rendirse): comentadlo y elegid lo decisivo", p4: "las metas y las aspiraciones: si deberíamos perseguir siempre nuestros sueños, si la ambición hace felices a las personas y cuándo conviene abandonar una meta" }),

    SUMMARY("Resumen del Día 3", [
      "Futuro: will (predicción/decisión), going to (intención/evidencia), present continuous (plan), present simple (horario); future continuous/perfect/perfect continuous.",
      "Inminencia/plan: be about to, on the verge of, be due to, be to (formal). Futuro en el pasado: was going to.",
      "Vocabulario de metas. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 4", "Escribe 6 frases sobre tus planes con distintas formas de futuro. Repasa las flashcards. Mañana: los verbos de estado y dinámicos y los matices de significado."),
  ],
};

// ───────────────────────── DÍA 4 ─────────────────────────
const DAY4 = {
  title: "Día 4 — Verbos de estado y dinámicos; matices de significado · Las percepciones",
  description: "Verbos de estado vs dinámicos; verbos con dos significados según el aspecto (think, have, see, taste, feel, appear); percepción. Vocabulario de opiniones y percepciones. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Distinguir usos estáticos y dinámicos y aprovechar los matices que aportan.",
    summary: "Verbos de estado/dinámicos; percepciones/opiniones; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["poner en continuous verbos de estado (❌ I'm knowing).", "no ver el cambio de sentido (think = opinar vs think = considerar).", "olvidar can + verbo de percepción (I can see/hear)."],
    reviewPrompts: ["¿'I think it's fine' o 'I'm thinking it's fine'? ¿Qué cambia?", "¿Por qué 'I'm seeing the doctor' es correcto?"],
  },
  items: [
    TEXT("🔁 Ayer, el futuro. Hoy los VERBOS DE ESTADO y DINÁMICOS, y los verbos que CAMBIAN de significado según el aspecto. Vocabulario: las PERCEPCIONES y las OPINIONES."),
    GRAMMAR("Verbos de estado y dinámicos", `Los VERBOS DE ESTADO (stative) describen estados, no acciones, y normalmente NO van en continuous:
· Emoción/opinión: love, hate, like, want, prefer, believe, know, understand, doubt, mean.
· Posesión/relación: have, own, belong, contain, consist, include.
· Percepción/apariencia: see, hear, smell, taste, seem, appear, look, sound.
· Medida: weigh, cost, measure, contain.
❌ I'm knowing / I'm wanting → ✅ I know / I want.
VERBOS CON DOS SIGNIFICADOS (uno estático, otro dinámico):
· think: I think it's true (opinión, estático) vs I'm thinking about it (considerar, dinámico).
· have: I have a car (posesión) vs I'm having lunch/a shower/a good time (actividad).
· see: I see what you mean (entender) vs I'm seeing the doctor tomorrow (cita) / I'm seeing someone (relación).
· taste/smell/feel: This tastes good (cualidad) vs The chef is tasting the soup (acción).
· weigh/measure: It weighs 2kg (medida) vs They're weighing the parcel (acción).
· appear: She appears calm (parecer) vs She's appearing at the theatre (actuar).
PERCEPCIÓN con CAN: para percepciones involuntarias usamos can + ver/oír/oler: I can see the sea from here (no 'I am seeing').
⚠️ El continuous con un verbo normalmente estático NO es un error si lo usas para el sentido dinámico o para dar énfasis temporal.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ I am not understanding → ✅ I don't understand.\n· ❌ Are you wanting a coffee? → ✅ Do you want a coffee?\n· 'I'm seeing the doctor' (cita, correcto) ≠ 'I see' (entiendo).\n· Percepción involuntaria: 'I can hear music' (no 'I am hearing music', salvo alucinación).\n· 'I'm loving it' existe (énfasis/entusiasmo), pero 'I love it' es el estado neutro."),
    grammarEx("Use of English — Estado y dinámico", "Elige o completa con el matiz correcto.", [
      mc("Be quiet — I ___ what she's saying.", ["am not hearing", "can't hear", "don't hearing"], 1, "percepción involuntaria → can't hear."),
      mc("What ___ about my proposal? (pedir opinión)", ["are you thinking", "do you think", "you think"], 1, "opinión → do you think."),
      mc("I ___ the specialist next Tuesday. (cita)", ["see", "am seeing", "have seen"], 1, "cita futura → am seeing."),
      fb("This soup ___ (taste) delicious. (cualidad, estático)", ["tastes"], "cualidad → present simple."),
      fb("The chef ___ (taste) the sauce right now. (acción)", ["is tasting"], "acción → present continuous."),
      mc("I'm sorry, I ___ your point now. (entender)", ["am seeing", "see", "have been seeing"], 1, "entender → see (estático)."),
      fb("They ___ (have) a wonderful time at the party. (actividad)", ["are having"], "have a good time → continuous (actividad)."),
    ]),
    GRAMMAR("Vocabulario del día — Las percepciones y las opiniones (C1)", "Léxico avanzado de opinión y percepción."),
    deck("C1 S1D4 — Percepciones y opiniones", [
      ["perception", "percepción", "Public perception can shift quickly.", "sustantivo", "pəˈsepʃn"],
      ["standpoint", "punto de vista / postura", "From an ethical standpoint, it's wrong.", "sustantivo", "ˈstændpɔɪnt"],
      ["biased", "sesgado/a / parcial", "The report was clearly biased.", "adjetivo", "ˈbaɪəst"],
      ["compelling", "convincente / persuasivo/a", "She made a compelling argument.", "adjetivo", "kəmˈpelɪŋ"],
      ["assumption", "suposición", "That rests on a false assumption.", "sustantivo", "əˈsʌmpʃn"],
      ["discern", "percibir / distinguir", "It's hard to discern the truth here.", "verbo", "dɪˈsɜːn"],
      ["subjective", "subjetivo/a", "Taste is entirely subjective.", "adjetivo", "səbˈdʒektɪv"],
      ["preconception", "prejuicio / idea preconcebida", "Set aside your preconceptions.", "sustantivo", "ˌpriːkənˈsepʃn"],
      ["nuance", "matiz", "The argument has subtle nuances.", "sustantivo", "ˈnjuːɑːns"],
      ["at odds with", "en desacuerdo con", "His view is at odds with the facts.", "expresión", "ət ˈɒdz wɪð"],
    ]),
    vocabEx("Vocabulario — Las percepciones y las opiniones", "Elige la opción correcta.", [
      mc("A particular way of thinking about something is a ___.", ["standpoint", "nuance", "assumption"], 0, "standpoint."),
      mc("Unfairly favouring one side is being ___.", ["biased", "compelling", "subjective"], 0, "biased."),
      mc("An argument that is convincing and powerful is ___.", ["compelling", "biased", "subjective"], 0, "compelling."),
      mc("Something you accept as true without proof is an ___.", ["assumption", "standpoint", "nuance"], 0, "assumption."),
      mc("Based on personal feelings rather than facts is ___.", ["subjective", "compelling", "discerning"], 0, "subjective."),
      mc("A fixed idea formed before knowing the facts is a ___.", ["preconception", "nuance", "standpoint"], 0, "preconception."),
    ]),

    ...uoe({
      p1: {
        title: "The prison of perception",
        text: "We like to imagine that we perceive the world as it truly is — that our eyes and ears simply (1)___ reality to us, faithfully and without distortion. Nothing could be further from the truth. Perception, neuroscientists now understand, is not a passive (2)___ of the world but an active construction of it. The brain does not receive a ready-made picture of reality; it (3)___ one, on the basis of fragmentary and ambiguous signals, using a vast store of assumptions and expectations to fill in the (4)___. We do not, in other words, see the world; we see our brain's best (5)___ of the world, and the two are not always the same. This has unsettling (6)___. If perception is a construction, then people looking at the same thing may quite literally perceive it differently, their brains shaped by different experiences and expectations. Two witnesses to the same event may honestly report contradictory versions; two people reading the same argument may find it, respectively, compelling and absurd. We are each, in a sense, (7)___ within our own perceptions, mistaking our brain's interpretation for objective reality. Recognising this — understanding that our view of the world is a construction rather than a simple (8)___ of it — is the beginning of both intellectual humility and genuine understanding.",
        q: [
          mc("(1)", ["transmit", "send", "give", "pass"], 0, "'simply transmit reality'."),
          mc("(2)", ["reception", "receiving", "reflection", "record"], 0, "'not a passive reception'."),
          mc("(3)", ["constructs", "makes", "builds", "creates"], 0, "'it constructs one'."),
          mc("(4)", ["gaps", "holes", "spaces", "blanks"], 0, "'fill in the gaps'."),
          mc("(5)", ["guess", "estimate", "attempt", "version"], 0, "'our brain's best guess'."),
          mc("(6)", ["implications", "results", "effects", "consequences"], 0, "'unsettling implications'."),
          mc("(7)", ["trapped", "caught", "held", "locked"], 0, "'each… trapped within our own perceptions'."),
          mc("(8)", ["reflection", "image", "picture", "copy"], 0, "'a simple reflection of it'."),
        ],
      },
      p2: {
        title: "The comfort of our own opinions",
        text: "There are (1)___ pleasures as reliable as that of having our own opinions confirmed. When we encounter an argument that agrees (2)___ what we already believe, we tend to find it compelling, well-reasoned and obviously correct. When we meet one that contradicts us, (3)___ contrast, we are quick to spot its flaws. This is not, as we like to think, because we are dispassionate seekers after truth; it is because the human mind is powerfully (4)___ towards confirming what it already holds. Psychologists call this 'confirmation bias', and it is one of the most stubborn and universal of all mental (5)___. We seek out information that supports our views and avoid that which challenges them; we remember the evidence that fits and forget the rest; we judge arguments not (6)___ their merits but by their conclusions. The effect is to lock each of us ever more firmly into our existing beliefs, however mistaken they may be. Overcoming this bias is extraordinarily difficult, precisely (7)___ it operates below the level of conscious awareness. But the first step is simply to be aware of it — to hold our own opinions with a little more humility, and to make a deliberate effort to seek out, and genuinely consider, the arguments of those (8)___ we disagree.",
        q: [
          fb("(1)", ["few"], "'There are few pleasures'."),
          fb("(2)", ["with"], "'agrees with what we believe'."),
          fb("(3)", ["by"], "'by contrast'."),
          fb("(4)", ["biased", "inclined"], "'powerfully biased towards'."),
          fb("(5)", ["habits", "tendencies", "biases"], "'universal of all mental habits'."),
          fb("(6)", ["on", "by"], "'not on their merits'."),
          fb("(7)", ["because"], "'precisely because it operates'."),
          fb("(8)", ["whom", "which"], "'those with whom we disagree'."),
        ],
      },
      p3: {
        title: "The wisdom of changing your mind",
        text: "In much of public life, changing one's mind is regarded as a sign of (1)___ — of being unprincipled, indecisive, or weak. Politicians who revise their positions are mocked as flip-floppers; consistency, however mistaken, is prized above the (2)___ to learn. This is, when you think about it, a curious and rather (3)___ state of affairs. In science, and in any genuine pursuit of truth, the willingness to change one's mind in the light of new evidence is not a weakness but the very (4)___ of intellectual honesty. The person who never changes their mind is not admirably steadfast; they are merely closed to (5)___. To cling to a belief after it has been shown to be false is not integrity but mere (6)___. And yet the psychological forces arrayed against changing our minds are formidable. We identify with our opinions; to abandon them can feel like a kind of defeat, even a loss of self. Overcoming this requires a rare (7)___: the ability to separate our sense of who we are from the particular beliefs we happen to hold, so that discovering we were wrong becomes not a humiliation but a welcome step towards being right. The truly wise, in the end, are not those who never err, but those who can (8)___ acknowledge their errors and change course accordingly.",
        items: [
          { root: "weak", accepted: ["weakness"], hint: "'a sign of weakness' → weakness." },
          { root: "will", accepted: ["willingness"], hint: "'the willingness to learn' → willingness." },
          { root: "trouble", accepted: ["troubling"], hint: "'a rather troubling state' → troubling." },
          { root: "mark", accepted: ["mark"], hint: "'the very mark of intellectual honesty' (sustantivo)." },
          { root: "persuade", accepted: ["persuasion"], hint: "'closed to persuasion' → persuasion." },
          { root: "stubborn", accepted: ["stubbornness"], hint: "'not integrity but… stubbornness' → stubbornness." },
          { root: "mature", accepted: ["maturity"], hint: "'a rare maturity' → maturity." },
          { root: "grace", accepted: ["gracefully"], hint: "'can gracefully acknowledge' → gracefully." },
        ],
      },
      p4: {
        title: "Transformaciones — percepción y opinión",
        items: [
          { s1: "I understand exactly what you mean now.", key: "SEE", s2: "I ___ exactly what you mean now.", accepted: ["can see", "now see"], explanation: "see = entender (estático)." },
          { s1: "In my opinion, the argument is unconvincing.", key: "STRIKES", s2: "The argument ___ unconvincing.", accepted: ["strikes me as"], explanation: "strike sb as." },
          { s1: "Her view completely contradicts the evidence.", key: "ODDS", s2: "Her view is completely ___ the evidence.", accepted: ["at odds with"], explanation: "at odds with." },
          { s1: "It's difficult to tell what he really thinks.", key: "DISCERN", s2: "It's difficult to ___ what he really thinks.", accepted: ["discern"], explanation: "discern." },
          { s1: "We tend to believe what confirms our existing views.", key: "INCLINED", s2: "We ___ believe what confirms our existing views.", accepted: ["are inclined to"], explanation: "be inclined to." },
          { s1: "People say the study was biased.", key: "SAID", s2: "The study ___ biased.", accepted: ["is said to be", "is said to have been"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The experiment that revealed our blindness",
        text: "In one of the most celebrated experiments in the history of psychology, participants were asked to watch a short video of two teams passing basketballs and to count the number of passes made by one of the teams. It sounds a simple enough task, and most people performed it well, arriving at the correct total. But the counting was never the real point of the experiment. Halfway through the video, a person in a gorilla suit walked slowly into the middle of the scene, beat their chest, and walked off again, remaining fully visible for a full nine seconds. When asked, afterwards, whether they had noticed anything unusual, roughly half of the participants — intelligent, attentive adults, watching closely — reported that they had seen nothing out of the ordinary at all. They had, quite simply, failed to see a gorilla in plain sight.\n\nThe experiment, which has since been replicated many times, offers a startling demonstration of a phenomenon psychologists call 'inattentional blindness'. When our attention is fully engaged by one task, we can be astonishingly, comically blind to things that are, quite literally, right in front of our eyes. We do not see the world in the way a camera does, faithfully recording everything within its field of view. We see, instead, only what we are paying attention to; the rest, however conspicuous, may simply not register at all.\n\nThe implications of this are far more profound than a mere party trick. If we can fail to notice a gorilla in plain sight, what else are we missing, all the time, simply because our attention is directed elsewhere? The experiment suggests that our vivid, seamless experience of a complete visual world is, to a considerable degree, an illusion. We feel as though we see everything around us, richly and in detail. In reality, we are aware only of the tiny fraction of the scene on which our attention happens to fall, and are entirely, blissfully unaware of everything we are failing to notice.\n\nWhat makes inattentional blindness so unsettling is precisely this: that we have no sense of it happening. The participants who missed the gorilla did not experience a gap or a blur in their vision; they saw, as far as they were concerned, a perfectly complete scene that simply happened not to contain a gorilla. Our blindness, in other words, is itself invisible to us. We do not know what we are missing, and we feel no absence where the missing things should be. This is perhaps the most humbling lesson of all: that our confident sense of perceiving the world fully and accurately is, to a startling degree, unfounded.\n\nThe gorilla experiment has become famous far beyond psychology, invoked whenever we wish to illustrate the limits of human attention and the unreliability of eyewitness perception. But its deepest lesson is a philosophical one. It reminds us that the rich, detailed, apparently complete world we perceive is not the world as it is, but a sparse and selective construction, assembled from the fragments our attention happens to seize upon. We are all, in a sense, walking through life half-blind, confidently mistaking the narrow beam of our attention for the whole of reality — and never once suspecting how much, at every moment, we are failing to see.",
        q: [
          mc("What were participants asked to do?", ["Count gorillas.", "Count the passes made by one team.", "Watch for anything unusual.", "Time the video."], 1, "'count the number of passes made by one of the teams'."),
          mc("What did about half the participants fail to notice?", ["The score.", "A person in a gorilla suit in plain sight.", "The teams.", "The basketballs."], 1, "'failed to see a gorilla in plain sight'."),
          mc("What phenomenon does the experiment demonstrate?", ["Colour blindness.", "Inattentional blindness.", "Memory loss.", "Poor eyesight."], 1, "'a phenomenon psychologists call \"inattentional blindness\"'."),
          mc("What does the experiment suggest about our visual experience?", ["It's like a camera.", "Our sense of seeing a complete world is largely an illusion.", "It's perfect.", "It's colourful."], 1, "'our… seamless experience of a complete visual world is… an illusion'."),
          mc("Why is inattentional blindness 'unsettling'?", ["It's painful.", "We have no sense of it happening; our blindness is invisible to us.", "It's permanent.", "It's rare."], 1, "'our blindness… is itself invisible to us'."),
          mc("What is the 'deepest lesson' of the experiment?", ["Count carefully.", "The world we perceive is a sparse, selective construction, not reality itself.", "Watch videos.", "Gorillas are real."], 1, "'a sparse and selective construction… never… suspecting how much… we are failing to see'."),
        ],
      },
      p6: {
        title: "Can we ever be truly objective?",
        intro: "Cuatro personas debaten si la objetividad es posible.",
        texts: {
          A: "NADIA: True objectivity is a myth, and a dangerous one. Every perception, every judgement, is shaped by who we are — our experiences, our culture, our unconscious biases. The person who claims to be perfectly objective is usually just blind to their own assumptions. Honesty means admitting our perspective is always partial, never pretending we've achieved a 'view from nowhere' that no human can actually occupy.",
          B: "TOM: I understand the scepticism, but taken too far it's corrosive. Yes, perfect objectivity is unattainable — but that doesn't mean all views are equally valid. Some claims really are better supported by evidence than others. Science, for all its human imperfections, has methods precisely designed to correct for our biases. To abandon the very idea of objectivity is to open the door to 'anything goes', which helps no one.",
          C: "PRIYA: What strikes me is that objectivity isn't something an individual achieves; it's something a community produces. No single person can escape their biases, but a diverse group of people, criticising and checking each other, can get closer to the truth than any of them could alone. Objectivity is social, not personal — it emerges from the clash of many partial perspectives, not from one heroic, unbiased mind.",
          D: "SAM: I'd say we spend too much time worrying about objectivity and not enough about simple honesty. Perfect neutrality may be impossible, but we can at least try to be fair — to acknowledge our biases, consider the other side, follow the evidence where it leads. That effort is worth far more than grand claims about objectivity, whether we're asserting it or denying it. It's the trying that matters.",
        },
        q: [
          mc("Who argues that true objectivity is a 'dangerous myth'?", ["A", "B", "C", "D"], 0, "Nadia: 'True objectivity is a myth, and a dangerous one'."),
          mc("Whose view most COUNTERS Nadia's, defending the idea of objectivity?", ["A", "B", "C", "D"], 1, "Tom: 'To abandon the very idea of objectivity… helps no one'."),
          mc("Who argues objectivity is social, produced by a community?", ["A", "B", "C", "D"], 2, "Priya: 'Objectivity is social, not personal'."),
          mc("Who shares Nadia's doubt about perfect neutrality but focuses on honesty and fairness?", ["A", "B", "C", "D"], 3, "Sam: 'Perfect neutrality may be impossible, but we can… try to be fair'."),
        ],
      },
      p7: {
        title: "The stories we see",
        text: "The human mind is, above all else, a machine for making stories. (1)___\n\nConfronted with a random, chaotic and often meaningless world, we cannot help but impose order upon it, weaving isolated events into coherent narratives of cause and effect. (2)___ We see faces in clouds, patterns in random noise, and purposes behind mere coincidences.\n\nThis storytelling instinct is, in many ways, a magnificent gift. (3)___ It underlies our capacity for science, for history, for literature — for all the ways in which we make sense of our experience.\n\nBut the same instinct can also lead us badly astray. (4)___ We see patterns that are not there, invent explanations for events that have none, and mistake the stories in our heads for the reality outside them.\n\nThe most seductive stories of all are the ones we tell about ourselves and others. (5)___ We reduce the bewildering complexity of a human life to a simple narrative — the hero, the villain, the victim — and then perceive the person only through that distorting lens.\n\nWisdom, in the end, may lie in a certain suspicion of our own stories. (6)___ To remember that the neat narratives through which we perceive the world are our own creations, not features of reality itself, is the beginning of seeing more clearly.",
        options: [
          "We are, by our very nature, compulsive storytellers.",           // A -> gap 1
          "Meaning is something we impose, not something we find.",         // B -> gap 2
          "Without it, we could make no sense of anything at all.",         // C -> gap 3
          "The pattern-seeking mind readily finds patterns that aren't there.", // D -> gap 4
          "Nowhere is the danger greater than in how we judge people.",     // E -> gap 5
          "Holding our stories lightly is the beginning of wisdom.",        // F -> gap 6
          "The human mind never looks for patterns or meaning.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: somos narradores compulsivos."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: imponemos el sentido."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: sin él no entenderíamos nada."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: vemos patrones que no existen."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el peligro mayor: juzgar a la gente."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: sostener las historias con ligereza."),
        ],
      },
      p8: {
        title: "Four people discuss changing their minds",
        text: "Read what four people say about changing their opinions.\n\nA) NADIA: I changed my mind about something fundamental last year, and it was one of the hardest things I've ever done. I'd held a political view for two decades — it was part of my identity. Slowly, evidence piled up that I was wrong. Admitting it felt like losing a piece of myself. But clinging to a belief you know is false, just to save face, is a kind of cowardice I couldn't live with.\n\nB) TOM: Honestly, I think most people never really change their minds; they just rearrange their prejudices. We're masters of confirmation bias — we notice what confirms us and explain away what doesn't. I include myself in that. The best I can manage is to be aware of the tendency and occasionally, with great effort, catch myself doing it. Genuine change of mind is rarer than we like to think.\n\nC) PRIYA: What helped me was realising that changing your mind is a skill you can practise. I deliberately seek out the best arguments against my own views — not the weak versions that are easy to dismiss, but the strongest ones. It's uncomfortable, but over time it's made me hold my opinions more loosely and, I think, more wisely. Certainty, I've come to believe, is usually a warning sign.\n\nD) SAM: I've stopped seeing changing my mind as a defeat. When I was younger, being proved wrong felt humiliating, so I'd dig in and defend the indefensible. Now I actually enjoy it — every time I discover I was wrong, I've become a little less wrong than I was. I've separated my ego from my opinions, and it's astonishingly liberating. Being wrong is just how you get to be right.\n",
        q: [
          mc("Who changed a long-held political view after evidence accumulated?", ["A", "B", "C", "D"], 0, "Nadia: 'I'd held a political view for two decades… I was wrong'."),
          mc("Who thinks most people just 'rearrange their prejudices'?", ["A", "B", "C", "D"], 1, "Tom: 'they just rearrange their prejudices'."),
          mc("Who deliberately seeks out the strongest arguments against their views?", ["A", "B", "C", "D"], 2, "Priya: 'the strongest ones'."),
          mc("Who no longer sees being proved wrong as a defeat?", ["A", "B", "C", "D"], 3, "Sam: 'stopped seeing changing my mind as a defeat'."),
          mc("Who says clinging to a belief you know is false is 'cowardice'?", ["A", "B", "C", "D"], 0, "Nadia: 'a kind of cowardice'."),
          mc("Who admits to being subject to confirmation bias themselves?", ["A", "B", "C", "D"], 1, "Tom: 'I include myself in that'."),
          mc("Who says certainty is 'usually a warning sign'?", ["A", "B", "C", "D"], 2, "Priya: 'Certainty… is usually a warning sign'."),
          mc("Who finds separating ego from opinions 'liberating'?", ["A", "B", "C", "D"], 3, "Sam: 'astonishingly liberating'."),
          mc("For whom did admitting error feel like 'losing a piece of myself'?", ["A", "B", "C", "D"], 0, "Nadia: 'losing a piece of myself'."),
          mc("Who treats changing their mind as a skill to practise?", ["A", "B", "C", "D"], 2, "Priya: 'a skill you can practise'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el pensamiento crítico se plantearon dos afirmaciones:\n· people rarely change their minds, even faced with evidence (la gente rara vez cambia de opinión)\n· being able to change your mind is a sign of wisdom (saber cambiar de opinión es sabiduría)\nEscribe un ensayo comentando AMBAS afirmaciones y explicando tu postura, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME (report) para tu centro de estudios sobre cómo fomentar el pensamiento crítico entre los estudiantes: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'The time I changed my mind about something important' — cuéntalo y reflexiona.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de una ocasión en que se dieron cuenta de que estaban equivocadas (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué desencadenó el cambio?): A new evidence · B another person · C a personal experience · D a book or article · E a mistake they made · F simply getting older · G a crisis · H travel. TAREA DOS (¿cómo se sintieron?): A relieved · B humiliated · C liberated · D frightened · E grateful · F angry with themselves · G indifferent · H proud.", "This is Part Four. You will hear five people talking about realising they were wrong about something. Speaker One: For years I'd dismissed a whole field of science as nonsense, without ever really reading the evidence. Then a colleague sat me down and walked me through the actual data, patiently, and I simply couldn't argue with it. I felt embarrassed, honestly — how arrogant I'd been to judge without looking. But she was kind about it, and I'm grateful she bothered. Speaker Two: I used to have very fixed views about people from a certain background — inherited prejudices, really, that I'd never questioned. Then I spent six months working abroad, living among them, and every single assumption I'd held simply crumbled. It was one of the most liberating experiences of my life; I felt as if I'd been let out of a small dark room. Speaker Three: My change of heart came from a single book. I'd held a strong opinion for years, and this one author laid out the counter-argument so clearly and compellingly that, halfway through, I realised my whole position was indefensible. I was furious — mostly with myself, for having been so sure for so long about something I'd barely examined. Speaker Four: What changed me was making a catastrophic mistake at work, one that flowed directly from an assumption I'd never questioned. The failure forced me to confront how wrong I'd been. It was painful and humiliating at the time. But looking back, I'm almost thankful — I'd have gone on making the same error for years otherwise. Speaker Five: Mine was just the slow effect of getting older. Views I held with absolute certainty at twenty-five look almost comically naive to me now. Nobody argued me out of them; life simply wore them away. And oddly, I feel relieved — all that certainty was exhausting. There's a real peace in being less sure of everything.", [
      mc("Speaker 1 — TAREA UNO (qué lo desencadenó)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: 'a colleague… walked me through the data'."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 7, "H: 'working abroad, living among them'."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: 'came from a single book'."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: 'making a catastrophic mistake'."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: 'the slow effect of getting older'."),
      mc("Speaker 1 — TAREA DOS (cómo se sintió)", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: 'I'm grateful she bothered'."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: 'one of the most liberating experiences'."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: 'furious — mostly with myself'."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: 'painful and humiliating'."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: 'I feel relieved… a real peace'."),
    ]),

    ...speakingParts({ p1: "cómo te formas tus opiniones, si sueles cambiar de idea y qué te hace reconsiderar algo", p2: "dos escenas de personas formando una opinión (alguien leyendo noticias en el móvil y un grupo debatiendo cara a cara): compáralas y especula sobre la calidad de sus juicios", p3: "qué ayuda a pensar con más claridad y menos sesgo (escuchar a quien discrepa, leer mucho, dudar de uno mismo, viajar, debatir): comentadlo y elegid lo más eficaz", p4: "la percepción y las opiniones: si podemos ser objetivos, por qué cuesta tanto cambiar de idea y cómo distinguir un buen argumento de uno sesgado" }),

    SUMMARY("Resumen del Día 4", [
      "Verbos de estado (know, want, believe, seem, belong…) normalmente NO en continuous.",
      "Verbos con dos sentidos: think (opinar/considerar), have (poseer/actividad), see (entender/cita), taste/feel (cualidad/acción). Percepción involuntaria con can (I can see/hear).",
      "Vocabulario de percepción y opinión. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 5", "Escribe 6 pares de frases contrastando el uso estático y dinámico de un verbo (think, have, see…). Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 5 ─────────────────────────
const DAY5 = {
  title: "Día 5 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del aspecto perfecto/continuo, los tiempos narrativos, las formas de futuro y los verbos de estado/dinámicos. Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 1.",
  pedagogy: {
    objective: "Consolidar todo el sistema verbal del C1 antes de la Semana 2.",
    summary: "Repaso del sistema verbal; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué matiz te cuesta más?", "Repásalo antes de la Semana 2 (inversión y énfasis)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 1 del C1. Consolidas el sistema verbal completo: aspecto perfecto/continuo, tiempos narrativos, formas de futuro y verbos de estado/dinámicos. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 1", `1) ASPECTO: perfect simple (resultado) vs continuous (proceso/duración); continuous para lo temporal, cambiante y las quejas (always doing); estado en continuous = matiz temporal.
2) NARRACIÓN: past simple + continuous + past perfect (lo anterior) + past perfect continuous (actividad previa); used to (hábitos/estados) vs would (solo hábitos).
3) FUTURO: will / going to / present continuous / present simple; future continuous/perfect/perfect continuous; be about to / on the verge of / due to / be to; futuro en el pasado (was going to).
4) VERBOS DE ESTADO vs DINÁMICOS: know/want/believe (estado, no continuous); think/have/see/taste (dos sentidos); percepción con can.`),
    grammarEx("Use of English — Repaso mixto de la Semana 1", "Completa o elige.", [
      mc("You look exhausted! — Yes, I ___ all day.", ["have decorated", "have been decorating", "decorate"], 1, "proceso/actividad reciente → present perfect continuous."),
      mc("By the time we arrived, the meeting ___ .", ["already finished", "had already finished", "has finished"], 1, "anterior a otra pasada → past perfect."),
      mc("As a child, I ___ afraid of dogs.", ["would be", "used to be", "was being"], 1, "estado pasado → used to be."),
      fb("By next year, she ___ (work) here for a decade. (duración hasta un futuro)", ["will have been working"], "future perfect continuous."),
      mc("I can't talk now — I ___ the doctor at four. (cita)", ["see", "am seeing", "will see"], 1, "cita → present continuous."),
      mc("Sorry, I ___ what you mean. (entender, ahora)", ["am not understanding", "don't understand", "am not seeing"], 1, "estado → don't understand."),
      fb("Be quiet — I ___ (can / hear) the announcement. (percepción)", ["can hear"], "percepción involuntaria → can hear."),
      mc("He ___ his keys — it drives me mad! (queja)", ["always loses", "is always losing", "has always lost"], 1, "continuous + always = queja."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 1", "Repasa los mazos (personalidad, recuerdos/infancia, metas, percepción/opinión)."),
    vocabEx("Vocabulario — Repaso de la Semana 1", "Elige la opción correcta.", [
      mc("Confident and sure of oneself:", ["self-assured", "hazy", "biased"], 0, "self-assured."),
      mc("Years that strongly shape who you become:", ["formative", "carefree", "daunting"], 0, "formative."),
      mc("Continued effort despite difficulties:", ["perseverance", "aspiration", "nuance"], 0, "perseverance."),
      mc("Unfairly favouring one side:", ["biased", "compelling", "subjective"], 0, "biased."),
      mc("A small odd habit someone has:", ["quirk", "milestone", "standpoint"], 0, "quirk."),
      mc("A convincing, powerful argument:", ["compelling", "hazy", "daunting"], 0, "compelling."),
      mc("To talk fondly about the past:", ["reminisce", "strive", "discern"], 0, "reminisce."),
      mc("Completely focused on one aim:", ["single-minded", "reserved", "subjective"], 0, "single-minded."),
    ]),

    ...uoe({
      p1: {
        title: "The self that endures",
        text: "There is a deep and ancient puzzle at the heart of what it means to be a person. Over a single lifetime, almost everything about us (1)___. Our bodies replace virtually all their cells; our beliefs, tastes and opinions are transformed, often beyond (2)___; the child we once were would scarcely recognise the adult we have become. And yet, through all this ceaseless change, we retain an unshakeable sense of being one and the (3)___ person, continuous from birth to death. What, then, is this self that (4)___ while everything about it changes? Philosophers have wrestled with the question for millennia without arriving at any settled answer. Some have concluded that the enduring self is simply an illusion — that there is, in reality, no fixed essence, only a (5)___ succession of fleeting mental states that we mistakenly bundle together and call 'I'. Others insist that something real does persist, however hard it may be to (6)___. What seems clear is that our sense of being a single, continuous self, so vivid and (7)___ that we never normally question it, rests on foundations far shakier than we suppose. We are, perhaps, less like a solid object enduring through time than like a river — forever (8)___, never the same from one moment to the next, and yet, somehow, recognisably a single thing.",
        q: [
          mc("(1)", ["changes", "alters", "shifts", "moves"], 0, "'almost everything about us changes'."),
          mc("(2)", ["recognition", "knowing", "belief", "measure"], 0, "'beyond recognition'."),
          mc("(3)", ["same", "identical", "very", "one"], 0, "'one and the same person'."),
          mc("(4)", ["endures", "lasts", "remains", "survives"], 0, "'this self that endures'."),
          mc("(5)", ["mere", "simple", "plain", "bare"], 0, "'a mere succession'."),
          mc("(6)", ["pin down", "define", "grasp", "identify"], 0, "'hard… to pin down'."),
          mc("(7)", ["compelling", "convincing", "powerful", "strong"], 0, "'so vivid and compelling'."),
          mc("(8)", ["flowing", "changing", "moving", "shifting"], 0, "'forever flowing'."),
        ],
      },
      p2: {
        title: "Who do you think you are?",
        text: "Ask people who they really are, and (1)___ will reach, almost invariably, for a story. They will tell you where they came from, what has happened to them, what they have overcome; they will, in short, narrate their lives. This is no accident. Our sense of identity is, at bottom, a (2)___ of narrative — a story we tell ourselves about ourselves, stitching the scattered episodes of our lives into a single, coherent tale with (3)___ as its hero. This 'narrative self' is a remarkable achievement, and a necessary one; (4)___ it, our experience would be nothing but a meaningless jumble of disconnected moments. And yet it is worth remembering (5)___ constructed, and therefore how partial, our life stories really are. We select, from the countless events of our lives, the few that fit the story we wish to tell, and quietly discard the rest. We cast ourselves, according to temperament, as heroes or victims, and interpret everything (6)___ accordingly. The story we tell about our lives is never simply the truth; it is an interpretation, an act of authorship, as much invented (7)___ discovered. To realise this is oddly liberating. For if we are the authors of the stories that define us, then we are free, within limits, to tell them differently — to reinterpret our pasts, and so, perhaps, to change (8)___ we become.",
        q: [
          fb("(1)", ["they"], "'they will reach'."),
          fb("(2)", ["matter", "form", "kind"], "'a matter of narrative'."),
          fb("(3)", ["ourselves", "oneself"], "'with ourselves as its hero'."),
          fb("(4)", ["without"], "'without it, our experience'."),
          fb("(5)", ["how"], "'how constructed… our life stories are'."),
          fb("(6)", ["else"], "'interpret everything else accordingly'."),
          fb("(7)", ["as"], "'as much invented as discovered'."),
          fb("(8)", ["who", "what"], "'to change who we become'."),
        ],
      },
      p3: {
        title: "The many selves within",
        text: "We speak of the self as though it were a single, unified thing. But our (1)___ experience often tells a different story. Anyone who has ever struggled with temptation knows the (2)___ sensation of being divided against oneself — of one part wanting the cake and another part wanting to resist it, one self urging caution and another (3)___ recklessness. We are, it seems, not so much a single self as a (4)___ of competing voices, drives and impulses, forever negotiating and quarrelling among themselves. Modern psychology lends (5)___ to this ancient intuition. The mind, it suggests, is not a unified command centre but a kind of assembly of semi-independent systems, each with its own agenda, whose (6)___ output we experience, after the fact, as the decisions of a single 'I'. The unified self we feel ourselves to be may be less the (7)___ than the story the brain tells itself to paper over its own internal divisions. This is a humbling thought. It suggests that the sense of being a single, coherent agent, in rational (8)___ of our own behaviour, is to a considerable degree an illusion — a useful fiction that conceals the noisy parliament of competing selves within.",
        items: [
          { root: "inner", accepted: ["inner"], hint: "'our inner experience' (adjetivo)." },
          { root: "settle", accepted: ["unsettling"], hint: "'the unsettling sensation' → unsettling." },
          { root: "urge", accepted: ["urging"], hint: "'another urging recklessness' → urging." },
          { root: "multiply", accepted: ["multiplicity"], hint: "'a multiplicity of competing voices' → multiplicity." },
          { root: "support", accepted: ["support"], hint: "'lends support to' (sustantivo)." },
          { root: "combine", accepted: ["combined"], hint: "'whose combined output' → combined." },
          { root: "real", accepted: ["reality"], hint: "'less the reality than the story' → reality." },
          { root: "control", accepted: ["control"], hint: "'in rational control of our behaviour' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 1",
        items: [
          { s1: "I started learning the piano ten years ago and still play.", key: "BEEN", s2: "I ___ the piano for ten years.", accepted: ["have been playing"], explanation: "present perfect continuous." },
          { s1: "She was exhausted because of a long run.", key: "BEEN", s2: "She was exhausted because she ___ .", accepted: ["had been running"], explanation: "past perfect continuous." },
          { s1: "I intended to call you but didn't.", key: "GOING", s2: "I ___ you but didn't.", accepted: ["was going to call", "was going to phone"], explanation: "futuro en el pasado." },
          { s1: "It's a habit of his to arrive late.", key: "ALWAYS", s2: "He ___ late.", accepted: ["is always arriving"], explanation: "continuous + always (queja)." },
          { s1: "I understand your point of view now.", key: "SEE", s2: "I ___ your point of view now.", accepted: ["can see", "now see"], explanation: "see = entender." },
          { s1: "By 2040 they will have completed the project.", key: "FINISHED", s2: "The project ___ by 2040.", accepted: ["will have been finished"], explanation: "future perfect pasivo." },
        ],
      },
      p5: {
        title: "The man who forgot who he was",
        text: "One morning, a middle-aged man was found wandering, disoriented and frightened, in a railway station in a city he did not recognise. He could not say how he had got there, where he had come from, or, most disturbingly of all, who he was. He had, it gradually emerged, suffered a rare form of amnesia that had swept away not merely his recent memories but virtually the whole of his personal past. He knew how to speak, how to read, how to tie his shoelaces; but of his own life — his name, his history, his relationships, his very identity — nothing whatsoever remained. He had become, in the most literal sense imaginable, a stranger to himself.\n\nHis case, extensively studied by neurologists, offers a uniquely stark window onto the relationship between memory and identity. We tend to assume that our sense of self rests on something solid and permanent — a soul, perhaps, or some essential core of personality that persists whatever happens to us. This man's experience suggests otherwise. When his memories were stripped away, so, to a remarkable degree, was the self they had supported. Without his personal history, he did not simply forget certain facts about himself; he ceased, in a profound sense, to be the person he had been. The self, his case suggests, is not some fixed essence lying behind our memories, but something built out of them, and lost when they are lost.\n\nWhat happened next, however, complicates this bleak conclusion. Slowly, over months and years, the man began to construct a new self. Unable to recover his old identity, he set about building another, out of the new experiences he was accumulating day by day. He formed new relationships, developed new interests, accumulated new memories, and gradually, from this fresh material, a new personality took shape — recognisably human, coherent, and his own, yet quite different, those who had known him before agreed, from the man he had been. He had, in effect, become a second person inhabiting the same body.\n\nHis story raises questions that reach to the very heart of what it means to be a person. Was the new man the same person as the old, or a genuinely different one? He had the same body, the same brain; but he had none of the memories, and little of the personality, that had defined his former self. If identity resides in memory, as his case seems to suggest, then in what meaningful sense was he still 'himself' at all? These are not merely abstract puzzles. They bear on how we think about identity, responsibility and the continuity of the self through time — questions that grow only more pressing as medicine extends its power over the human brain.\n\nPerhaps the deepest lesson of his story is also its most hopeful. If the self can be so utterly destroyed, it can also, it seems, be rebuilt. The man who forgot who he was did not remain a blank; he became someone again, constructing a new identity from the raw material of fresh experience. In this, his extraordinary case merely dramatises what is, in fact, true of us all. We are all, always, engaged in the ongoing construction of ourselves, building and rebuilding our identities, moment by moment, out of the accumulating experience of our lives. His story is not, in the end, as foreign to our own as it first appears. It simply shows us, in its starkest possible form, the process by which every one of us becomes, and goes on becoming, a self.",
        q: [
          mc("What had happened to the man found in the station?", ["He was drunk.", "A rare amnesia had erased almost his entire personal past.", "He was lost.", "He was pretending."], 1, "'a rare form of amnesia that had swept away… virtually the whole of his personal past'."),
          mc("What does his case suggest about the self?", ["It's a fixed soul.", "It is built out of memories and lost when they are lost.", "It's permanent.", "It's physical only."], 1, "'not some fixed essence… but something built out of them, and lost when they are lost'."),
          mc("What did the man do over months and years?", ["Nothing.", "He constructed a new self from fresh experience.", "He recovered his old self.", "He gave up."], 1, "'he set about building another, out of the new experiences'."),
          mc("How did the new personality compare to the old?", ["Identical.", "Coherent and his own, yet quite different from before.", "Worse.", "Non-existent."], 1, "'recognisably human, coherent… yet quite different… from the man he had been'."),
          mc("What deep question does his story raise?", ["How to travel.", "Whether the new man was the same person as the old.", "How memory works mechanically.", "Nothing important."], 1, "'Was the new man the same person as the old…?'"),
          mc("What is the 'most hopeful' lesson?", ["The self can't be rebuilt.", "If the self can be destroyed, it can also be rebuilt.", "Memory is useless.", "Identity is fixed."], 1, "'If the self can be so utterly destroyed, it can also… be rebuilt'."),
        ],
      },
      p6: {
        title: "What makes you 'you'?",
        intro: "Cuatro personas opinan sobre qué constituye la identidad personal.",
        texts: {
          A: "NADIA: For me, identity is fundamentally about memory. You are the sum of your experiences, the story of your life as you remember it. Strip away someone's memories, as happens in severe amnesia, and you don't just take away some facts — you take away the person. There's no mysterious 'essence' underneath. We simply are our accumulated pasts, nothing more and nothing less.",
          B: "TOM: I think the 'memory' theory misses something crucial: our values and character. I've forgotten the vast majority of what's happened to me, yet I'm clearly still me. What makes me 'me' isn't the archive of my memories but the enduring pattern of how I think, what I care about, how I respond to the world. Lose your memories and you're still, recognisably, the same kind of person.",
          C: "PRIYA: Honestly, I've come to doubt there's a single, unified 'you' at all. We're bundles of competing drives and shifting moods, held together by a story the brain tells to make sense of itself. The 'self' is more like a useful fiction than a real, solid thing. Asking what makes you 'you' may be like asking what makes a rainbow a solid object — it assumes something that isn't really there.",
          D: "SAM: I'd say identity is less about what's inside us and more about our relationships. I know who I am through my connections — as a parent, a friend, a member of a community. Cut a person off from all their relationships and their sense of self frays. We're not self-contained islands; we're defined, to a huge degree, by the web of people we belong to. Identity is relational.",
        },
        q: [
          mc("Who argues that identity is fundamentally about memory?", ["A", "B", "C", "D"], 0, "Nadia: 'identity is fundamentally about memory'."),
          mc("Whose view most DIRECTLY challenges Nadia's memory theory?", ["A", "B", "C", "D"], 1, "Tom: 'the \"memory\" theory misses… our values and character'."),
          mc("Who doubts there is a single unified self at all?", ["A", "B", "C", "D"], 2, "Priya: 'I've come to doubt there's a single, unified \"you\"'."),
          mc("Who argues that identity is essentially relational?", ["A", "B", "C", "D"], 3, "Sam: 'Identity is relational'."),
        ],
      },
      p7: {
        title: "The self as a work in progress",
        text: "We tend to think of our personality as something we discover, like an archaeologist uncovering a buried artefact — as though there were a 'real me' waiting to be found. (1)___\n\nBut there is another, and perhaps more accurate, way to think about the self. (2)___ On this view, the self is not something we discover but something we create — not a fixed artefact to be excavated but an ongoing work in progress, shaped continually by the choices we make and the actions we take.\n\nThe difference between these two views is not merely philosophical. (3)___ It has profound implications for how we live.\n\nIf we believe in a fixed, essential self, we will spend our lives trying to 'find ourselves' and to 'be true' to who we already are. (4)___ We will treat our current traits and limitations as permanent facts to be accepted rather than possibilities to be worked on.\n\nIf, on the other hand, we see the self as a work in progress, our whole orientation shifts. (5)___ We become the sculptors of our own characters, responsible for shaping, through our daily choices, the people we are slowly becoming.\n\nThe truth, as so often, probably lies somewhere between the two. (6)___ We are neither wholly fixed nor infinitely malleable, but something in between — given a certain raw material by nature, yet free, within limits, to make of it what we will.",
        options: [
          "This is a comforting idea, but a questionable one.",             // A -> gap 1
          "The self, it holds, is made rather than found.",                // B -> gap 2
          "How we answer it shapes the whole course of a life.",           // C -> gap 3
          "The search becomes one of discovery, not creation.",            // D -> gap 4
          "We stop finding ourselves and start making ourselves.",         // E -> gap 5
          "Nature deals the cards; we decide how to play them.",           // F -> gap 6
          "There is nothing we can ever do to change who we are.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: idea reconfortante pero cuestionable."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el yo se hace, no se encuentra."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la respuesta moldea toda una vida."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: búsqueda de descubrimiento, no de creación."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: dejamos de encontrarnos y empezamos a hacernos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la naturaleza reparte; nosotros jugamos."),
        ],
      },
      p8: {
        title: "Four people reflect on identity and change",
        text: "Read what four people say about how they understand their own identity.\n\nA) NADIA: I've reinvented myself several times — new city, new career, new circle of friends. Each time I've felt I was becoming a genuinely different person. I don't believe in a fixed 'real me' underneath it all. I am simply whoever I'm choosing to be at any given stage. The idea that I have one true self to be faithful to has always struck me as a cage.\n\nB) TOM: The older I get, the more I feel I'm just becoming more intensely who I always was. I look at myself as a child and it's unmistakably the same person — the same temperament, the same preoccupations. Life has added a great deal, but subtracted nothing essential. I don't think I've changed my core self at all; I've just grown into it more fully.\n\nC) PRIYA: What I've realised is how much of my identity comes from other people. On my own, cut off, I barely feel like anyone in particular. It's in my relationships — as a daughter, a colleague, a friend — that I know who I am. I used to find that unsettling, this dependence on others for my sense of self. Now I find it rather beautiful. We make each other who we are.\n\nD) SAM: I try not to take my sense of self too seriously. I've come to see 'me' as a kind of convenient story rather than a solid fact — useful for getting through the day, but not something to build my life around defending. Holding my identity a bit more loosely has made me far less anxious and, oddly, far more free. I'm not so worried anymore about being 'true to myself'.\n",
        q: [
          mc("Who has 'reinvented' themselves several times?", ["A", "B", "C", "D"], 0, "Nadia: 'I've reinvented myself several times'."),
          mc("Who feels they've become 'more intensely' who they always were?", ["A", "B", "C", "D"], 1, "Tom: 'more intensely who I always was'."),
          mc("Who derives their sense of identity mainly from relationships?", ["A", "B", "C", "D"], 2, "Priya: 'how much of my identity comes from other people'."),
          mc("Who treats the self as a 'convenient story' rather than a solid fact?", ["A", "B", "C", "D"], 3, "Sam: 'a kind of convenient story rather than a solid fact'."),
          mc("Who calls the idea of one 'true self' a 'cage'?", ["A", "B", "C", "D"], 0, "Nadia: 'has always struck me as a cage'."),
          mc("Who says life has 'added a great deal, but subtracted nothing essential'?", ["A", "B", "C", "D"], 1, "Tom: 'added a great deal, but subtracted nothing essential'."),
          mc("Who now finds our dependence on others 'rather beautiful'?", ["A", "B", "C", "D"], 2, "Priya: 'Now I find it rather beautiful'."),
          mc("Who feels 'far more free' holding their identity loosely?", ["A", "B", "C", "D"], 3, "Sam: 'far more free'."),
          mc("Who doesn't believe in a fixed 'real me' underneath?", ["A", "B", "C", "D"], 0, "Nadia: 'I don't believe in a fixed \"real me\"'."),
          mc("Who says 'we make each other who we are'?", ["A", "B", "C", "D"], 2, "Priya: 'We make each other who we are'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre la identidad se plantearon dos ideas:\n· we have one true self that we should be faithful to (tenemos un yo verdadero al que ser fieles)\n· we create ourselves through our choices (nos creamos a nosotros mismos con nuestras decisiones)\nEscribe un ensayo comentando AMBAS ideas y explicando cuál te parece más acertada, con razones y ejemplos. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'The person I used to be' — reflexiona sobre cómo has cambiado (o no) a lo largo de tu vida.\n· CARTA a tu 'yo' de dentro de diez años: cuéntale quién eres ahora y qué esperas llegar a ser.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two friends discussing whether people can change. Man: I genuinely think my brother is a completely different person from the boy I grew up with. Woman: Really? I'd have said the opposite — that people basically stay the same and just get more so with age. Man: Maybe it's both. His temperament's the same, sure — still anxious, still kind. But his whole way of living, his confidence, his outlook? Transformed. Woman: So the raw material's the same but he's built something different on top of it. Man: Exactly. Nature deals the cards; we play them differently over time. Extract Two. You hear a woman talking about memory. Woman: The thing that unsettles me most is realising how unreliable my own memories are. I have these vivid, cherished scenes from childhood, and half of them, it turns out, either didn't happen or happened completely differently. My sister remembers the same events in ways I simply can't reconcile with my own version. And yet I've built my whole sense of who I am on these stories. It's a strange feeling, to distrust the very memories that made you. Extract Three. You hear a man talking about ambition. Man: I spent my thirties chasing one goal after another, always certain the next achievement would finally make me happy. It never did. The satisfaction would last a week, then evaporate, and I'd be off chasing the next thing. What finally changed me wasn't reaching some summit; it was realising the summit was a mirage. Now I try to find the meaning in the daily work itself, not in some future payoff that never actually arrives.", [
      mc("1. What does the man think about his brother?", ["He hasn't changed.", "He's become a completely different person.", "He's got worse."], 1, "'a completely different person'."),
      mc("2. What do they agree in the end?", ["People never change.", "The raw material is the same but built on differently.", "Temperament changes."], 1, "'the raw material's the same but he's built something different'."),
      mc("3. What unsettles the woman most?", ["Forgetting names.", "How unreliable her own memories are.", "Her sister."], 1, "'how unreliable my own memories are'."),
      mc("4. What has she built on these stories?", ["Nothing.", "Her whole sense of who she is.", "A book."], 1, "'my whole sense of who I am'."),
      mc("5. What happened each time the man reached a goal?", ["Lasting joy.", "Satisfaction lasted a week, then evaporated.", "Nothing changed."], 1, "'last a week, then evaporate'."),
      mc("6. What finally changed him?", ["Reaching a summit.", "Realising the summit was a mirage.", "A promotion."], 1, "'the summit was a mirage'."),
    ]),

    ...speakingParts({ p1: "cómo has cambiado a lo largo de tu vida y qué crees que ha permanecido igual en ti", p2: "dos retratos de una misma persona en etapas distintas de la vida (de joven y de mayor): compáralos y especula sobre qué cambió y qué permaneció", p3: "qué define más quiénes somos (los recuerdos, los valores, las relaciones, las decisiones, el temperamento): comentadlo y elegid lo más determinante", p4: "la identidad: si tenemos un 'yo verdadero', si las personas pueden cambiar de verdad y qué es lo que permanece en nosotros con el tiempo" }),

    SUMMARY("Resumen de la Semana 1 (C1)", [
      "Dominas el sistema verbal del C1: aspecto perfecto/continuo, tiempos narrativos, formas de futuro y verbos de estado/dinámicos.",
      "Has practicado las 8 partes del Reading & Use of English (incl. cross-text matching y gapped text de párrafos), el Writing (220–260) y el Speaking P1–P4.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: la INVERSIÓN y el ÉNFASIS (estructuras enfáticas de nivel C1).",
    ]),
    INFO("Mini-simulacro de la Semana 1", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 2."),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Los tiempos verbales y el aspecto · La identidad",
  description: "Matices del aspecto perfecto y continuo, tiempos narrativos, verbos de estado/dinámicos y el futuro desde el presente, con el hilo de la identidad y la personalidad. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
