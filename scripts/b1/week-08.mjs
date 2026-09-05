/**
 * B1 Preliminary · Semana 8 — "Deducción, misterios y servicios".
 * Gramática: modales de deducción (presente y pasado), el causativo
 * (have/get something done) y used to / be used to / get used to.
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
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I think, maybe, it depends, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen y especular", "it looks like, they must be, maybe they're … -ing, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, we could, why don't we, I'd rather, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 36 ─────────────────────────
const DAY36 = {
  title: "Día 36 — Modales de deducción (presente) · Misterios y apariencias",
  description: "must be / can't be / might be / could be (deducir en el presente). Vocabulario de apariencia y misterio. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Deducir con seguridad, imposibilidad o posibilidad en el presente.",
    summary: "Modales de deducción presente; misterios; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'must to be'.", "'can't be' vs 'mustn't be'.", "'It must be true' vs 'has to'."],
    reviewPrompts: ["¿Cómo dices 'seguro que es'? ¿'seguro que NO es'?", "¿Y 'quizás sea'?"],
  },
  items: [
    TEXT("🔁 Semana 8. Hoy los MODALES DE DEDUCCIÓN en presente: sacar conclusiones lógicas (seguro que…, no puede ser…, quizás…). Vocabulario: MISTERIOS y APARIENCIAS."),
    GRAMMAR("Modales de deducción (presente)", `Para deducir algo por la lógica (no lo sabemos con certeza), usamos modal + infinitivo SIN to:
· CASI SEGURO QUE SÍ: must + infinitivo → He isn't answering. He must be busy. (seguro que está ocupado)
· CASI SEGURO QUE NO (imposible): can't + infinitivo → That can't be right. (no puede ser)
· POSIBLE (quizás): might / may / could + infinitivo → She might be at home. It could be true.
Con verbos de estado usamos 'be': She must be tired. Con acciones en curso: must be + -ing → They must be sleeping.
⚠️ Para deducir que algo es imposible se usa CAN'T, no 'mustn't' (mustn't = prohibición).`),
    WARN("Errores típicos del hispanohablante", "· ❌ He must to be tired → ✅ He must be tired.\n· ❌ It mustn't be true (deducción) → ✅ It can't be true.\n· ❌ She must has a car → ✅ She must have a car.\n· 'must' aquí = deducción (seguro que), no obligación."),
    grammarEx("Gramática — Deducción presente", "Elige o completa.", [
      mc("He's not answering his phone. He ___ busy.", ["can't be", "must be", "mustn't be"], 1, "seguro → must be."),
      mc("That ___ be right — it's impossible!", ["must", "can't", "might"], 1, "imposible → can't."),
      fb("She ___ ___ at home; her car is outside. (seguro)", ["must be"], "must be."),
      fb("I'm not sure, but it ___ ___ true. (quizás)", ["might be", "could be", "may be"], "might/could/may be."),
      mc("Choose:", ["They must be sleeping.", "They must to be sleeping.", "They must sleeping."], 0, "must be + -ing."),
      mc("He's got a huge house and three cars. He ___ rich.", ["can't be", "must be", "might not be"], 1, "seguro → must be."),
      fb("She speaks perfect French; she ___ ___ from France. (deducción posible)", ["might be", "could be", "may be"], "might/could be."),
    ]),
    GRAMMAR("Vocabulario del día — Misterios y apariencias", "Léxico de misterio y aspecto (B1)."),
    deck("B1 S8D36 — Misterios y apariencias", [
      ["clue", "pista", "The detective found an important clue.", "sustantivo", "kluː"],
      ["mystery", "misterio", "It remains a complete mystery.", "sustantivo", "ˈmɪstəri"],
      ["suspect", "sospechoso/a / sospechar", "The police have a suspect.", "sustantivo/verbo", "ˈsʌspekt"],
      ["evidence", "pruebas", "There's no evidence at all.", "sustantivo", "ˈevɪdəns"],
      ["seem", "parecer", "She seems tired today.", "verbo", "siːm"],
      ["appear", "parecer / aparecer", "He appears to be lost.", "verbo", "əˈpɪə"],
      ["obvious", "evidente / obvio", "The answer is obvious.", "adjetivo", "ˈɒbviəs"],
      ["strange", "extraño/a", "That's a very strange noise.", "adjetivo", "streɪndʒ"],
      ["realise", "darse cuenta", "I didn't realise you were here.", "verbo", "ˈrɪəlaɪz"],
      ["work out", "descubrir / resolver", "I can't work out the answer.", "phrasal verb", "wɜːk ˈaʊt"],
    ]),
    vocabEx("Vocabulario — Misterios y apariencias", "Elige la opción correcta.", [
      mc("A piece of information that helps solve a mystery is a ___.", ["clue", "suspect", "mystery"], 0, "clue."),
      mc("A person the police think might be guilty is a ___.", ["suspect", "clue", "evidence"], 0, "suspect."),
      mc("Facts that prove something are ___.", ["evidence", "clue", "mystery"], 0, "evidence."),
      mc("If something is very clear and easy to see, it's ___.", ["obvious", "strange", "mysterious"], 0, "obvious."),
      mc("To finally understand or solve something is to ___ it.", ["work out", "seem", "appear"], 0, "work out."),
      mc("To suddenly become aware of something is to ___.", ["realise", "suspect", "appear"], 0, "realise."),
    ]),

    ...readingParts({
      p1: { title: "Misterios y avisos", items: [
        mc("Note: 'The lights are on, so someone must be home.'", ["Someone is probably home.", "Nobody is home.", "The lights are off."], 0, "'someone must be home'."),
        mc("Text: 'That can't be true — it's impossible!'", ["They think it's impossible.", "They believe it.", "It's certain."], 0, "'That can't be true'."),
        mc("Message: 'She might be late — the traffic is terrible.'", ["She's possibly going to be late.", "She's early.", "She's here."], 0, "'She might be late'."),
        mc("Sign: 'Lost dog — last seen near the park. Any clues?'", ["Asking for clues about a lost dog.", "A found dog.", "No dog."], 0, "'Lost dog… Any clues?'"),
        mc("Note: 'It's obvious the window was left open.'", ["It's clear the window was open.", "The window was shut.", "There's no window."], 0, "'It's obvious the window was left open'."),
      ] },
      p2text: "FOUR MYSTERY STORIES\n\nA) The Locked Room — a crime that seems impossible: the door was locked from the inside.\nB) The Missing Painting — a famous artwork vanishes from a museum with no clues at all.\nC) The Stranger in Town — a mysterious visitor arrives, and nobody knows who they are.\nD) The Old Diary — a hundred-year-old diary reveals a secret that changes everything.",
      p2q: { title: "Emparejar personas y misterios", items: [
        mc("Nadia loves 'impossible' crime puzzles.", ["A", "B", "C", "D"], 0, "The Locked Room."),
        mc("Ben is fascinated by art thefts.", ["A", "B", "C", "D"], 1, "The Missing Painting."),
        mc("Sara enjoys stories about mysterious strangers.", ["A", "B", "C", "D"], 2, "The Stranger in Town."),
        mc("Leo likes secrets hidden in old documents.", ["A", "B", "C", "D"], 3, "The Old Diary."),
        mc("A mystery involving a stolen artwork.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE SCIENCE OF FIRST IMPRESSIONS\n\nWe are told never to judge a book by its cover, yet all of us do exactly that, and we do it in seconds. The moment we meet someone new, our brains start making guesses. 'She looks friendly,' we think, or 'He must be shy.' These snap judgements feel like facts, but how accurate are they really?\n\nScientists who study first impressions have made some surprising discoveries. On one hand, we are remarkably fast: within a tenth of a second of seeing a face, we've already formed an opinion about whether we trust the person. On the other hand, these instant judgements are often completely wrong. A person with a serious face might be warm and kind, while a smiling stranger could be someone to avoid. We tend to assume that people who are attractive must also be clever or honest, but of course there is no real connection at all.\n\nThe danger is that first impressions can become a trap. If we decide in an instant that someone is unfriendly, we behave coldly towards them, and they, sensing this, behave coldly back. Our false judgement then appears to be confirmed. The lesson from the science is clear: trust your instincts if you must, but hold them lightly. The quiet person in the corner who seems boring might just turn out to be the most interesting individual you'll ever meet.",
      p3q: { title: "La ciencia de las primeras impresiones (texto largo)", items: [
        mc("How quickly do we form an opinion of a new face?", ["Over days.", "Within a tenth of a second.", "Never."], 1, "'within a tenth of a second… formed an opinion'."),
        mc("How accurate are these instant judgements?", ["Always right.", "Often completely wrong.", "Perfect."], 1, "'often completely wrong'."),
        mc("What do we wrongly assume about attractive people?", ["They're unkind.", "That they must be clever or honest.", "Nothing."], 1, "'attractive must also be clever or honest… no real connection'."),
        mc("Why can first impressions become a trap?", ["They're always true.", "We behave coldly and get coldness back, confirming the judgement.", "They cost money."], 1, "'we behave coldly… behave coldly back… appears to be confirmed'."),
        mc("What is the lesson from the science?", ["Never meet new people.", "Hold your instincts lightly.", "Always trust first impressions."], 1, "'trust your instincts… but hold them lightly'."),
      ] },
      p4text: "THE MYSTERY OF THE MISSING KEYS\n\nOne Monday morning, I couldn't find my house keys anywhere. (1)___ I searched every pocket, every drawer and every bag, but they had simply vanished.\n\n'They must be here somewhere,' I told myself. 'Keys don't just disappear.' I retraced my steps from the day before. (2)___ I remembered coming home, making dinner and watching television, but I had no memory at all of where I'd put them. It was becoming a real mystery.\n\nBy now, I was going to be late for work. In a panic, I decided to look in the most ridiculous places. (3)___ And there, in the fridge, next to the milk, were my keys. I must have put them down while unpacking the shopping the night before. (4)___ I laughed out loud with relief and embarrassment. The 'mystery' had a very simple, silly explanation. (5)___ Now, I always keep my keys in exactly the same place — a small bowl by the front door.",
      p4options: [
        "It was the strangest thing I had ever experienced.",       // A -> gap 1
        "Everything seemed perfectly normal.",                      // B -> gap 2
        "I opened the fridge, just in case.",                       // C -> gap 3
        "My tired brain must have been on autopilot.",              // D -> gap 4
        "I threw all my keys away immediately.",                    // E (extra)
        "That morning taught me to be more organised.",             // F -> gap 5
        "I had never owned a set of keys.",                         // G (extra)
        "The keys had been stolen by a thief.",                     // H (extra)
      ],
      p4q: { title: "El misterio de las llaves perdidas (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: lo más raro que le había pasado."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: todo parecía normal."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: abrió la nevera por si acaso."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: su cerebro cansado iba en piloto automático."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le enseñó a ser más organizado."),
      ] },
      p5text: "A good detective never guesses; they look at the (1)___. When someone is behaving strangely, it's tempting to think they (2)___ be guilty, but you need real (3)___ before you accuse anyone. Sometimes the (4)___ answer turns out to be wrong. A tiny (5)___ that seems unimportant might be the key to the whole case. The best detectives take their time and slowly (6)___ out the truth.",
      p5q: { title: "Huecos con opciones (vocabulario/deducción)", items: [
        mc("Hueco 1", ["evidence", "mystery", "suspect", "clue"], 0, "'look at the evidence'."),
        mc("Hueco 2", ["must", "can't", "should", "will"], 0, "'they must be guilty'."),
        mc("Hueco 3", ["evidence", "clue", "mystery", "suspect"], 0, "'need real evidence'."),
        mc("Hueco 4", ["obvious", "strange", "mysterious", "hidden"], 0, "'the obvious answer'."),
        mc("Hueco 5", ["clue", "evidence", "suspect", "mystery"], 0, "'a tiny clue'."),
        mc("Hueco 6", ["work", "seem", "appear", "realise"], 0, "'work out the truth'."),
      ] },
      p6text: "Hi Sam,\nSomething strange happened this morning — I couldn't find my keys! I thought they (1)___ be somewhere in the house, because keys don't just disappear. At first I suspected my flatmate had moved them, but that (2)___ be right, because she was away. It was a real (3)___! Then I found them in the fridge. I (4)___ have put them there while unpacking the shopping. It's (5)___ now — my tired brain was on autopilot! I've (6)___ out that I really need to be more organised.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["must"], "'they must be somewhere'."),
        fb("Hueco 2", ["couldn't", "can't"], "'that couldn't be right'."),
        fb("Hueco 3", ["mystery"], "'a real mystery'."),
        fb("Hueco 4", ["must"], "'I must have put them there'."),
        fb("Hueco 5", ["obvious"], "'It's obvious now'."),
        fb("Hueco 6", ["worked"], "'worked out that I need to be more organised'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te cuenta algo raro que le pasó. Responde a su email (~100 palabras):\n· dale tu opinión sobre qué pudo pasar (usa must be/can't be/might be),\n· cuenta algo misterioso que te ocurrió a ti,\n· pregúntale cómo lo resolvió.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Should we trust our first impressions of people?' con tu opinión.\n· RELATO: empieza con: 'I searched everywhere, but the keys had simply vanished.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: Whose is this jacket? Man: It must be Tom's — he was here earlier. Two. Man: Is that Sara over there? Woman: It can't be, she's on holiday. Three. Woman: Why isn't he answering? Man: He might be asleep. Four. Man: How did she pass so easily? Woman: She must have studied a lot. Five. Woman: Is this the right address? Man: I'm not sure, it could be. Six. Man: There's a strange noise. Woman: It must be the wind. Seven. Woman: Where are my glasses? Man: They might be on your head!", [
      mc("1. Whose jacket is it?", ["Sara's.", "It must be Tom's.", "Nobody's."], 1, "'It must be Tom's'."),
      mc("2. Is it Sara over there?", ["Yes.", "It can't be, she's on holiday.", "Maybe."], 1, "'It can't be, she's on holiday'."),
      mc("3. Why isn't he answering?", ["He's out.", "He might be asleep.", "He's angry."], 1, "'He might be asleep'."),
      mc("4. Why did she pass easily?", ["Luck.", "She must have studied a lot.", "She cheated."], 1, "'She must have studied a lot'."),
      mc("5. Is it the right address?", ["Yes, definitely.", "It could be — he's not sure.", "No."], 1, "'I'm not sure, it could be'."),
      mc("6. What is the strange noise?", ["A person.", "It must be the wind.", "A machine."], 1, "'It must be the wind'."),
      mc("7. Where might the glasses be?", ["On the table.", "On her head.", "Lost."], 1, "'They might be on your head'."),
    ]),

    ...speakingParts("los misterios y las apariencias", { p1: "si te gustan las historias de misterio y si juzgas a la gente por su aspecto", p2: "una foto de personas: especula sobre quiénes son y qué hacen (must be/might be)", p3: "resolver juntos un pequeño misterio: qué le pasó a un objeto perdido", p4: "las primeras impresiones, los misterios y si debemos fiarnos de la lógica" }),

    SUMMARY("Resumen del Día 36", [
      "Deducción presente: must be (seguro que sí), can't be (imposible), might/may/could be (quizás).",
      "Modal + infinitivo sin 'to'. Para acciones: must be + -ing.",
      "Vocabulario de misterio. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 37", "Mira 3 fotos y deduce quién es la gente (must be/might be/can't be). Repasa las flashcards. Mañana: deducción sobre el pasado (must have been…)."),
  ],
};

// ───────────────────────── DÍA 37 ─────────────────────────
const DAY37 = {
  title: "Día 37 — Modales de deducción (pasado) · La historia",
  description: "must have / can't have / might have + participio (deducir sobre el pasado). Vocabulario de historia. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Deducir sobre acontecimientos pasados con seguridad, imposibilidad o posibilidad.",
    summary: "Deducción pasado; historia; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'must have went'.", "'can't have' vs 'mustn't have'.", "'would of'."],
    reviewPrompts: ["¿'seguro que fue' en pasado?", "¿'must have' + qué forma del verbo?"],
  },
  items: [
    TEXT("🔁 Repaso: deducción presente. Hoy la DEDUCCIÓN sobre el PASADO: sacar conclusiones de algo que ya ocurrió. Vocabulario: la HISTORIA."),
    GRAMMAR("Modales de deducción (pasado)", `Para deducir sobre el PASADO: modal + HAVE + participio.
· CASI SEGURO QUE SÍ: must have + participio → The ground is wet. It must have rained. (seguro que llovió)
· CASI SEGURO QUE NO (imposible): can't have / couldn't have + participio → She can't have finished already! (no puede haber terminado)
· POSIBLE (quizás): might have / may have / could have + participio → He might have missed the bus.
⚠️ El participio es el pasado (regular -ed o irregular): must have GONE, must have SEEN.
⚠️ 'must have' (no 'must of'); para imposibilidad → CAN'T have (no 'mustn't have').`),
    WARN("Errores típicos del hispanohablante", "· ❌ must have went → ✅ must have gone.\n· ❌ must of been → ✅ must have been.\n· ❌ mustn't have seen (deducción) → ✅ can't have seen.\n· ❌ It must rained → ✅ It must have rained."),
    grammarEx("Gramática — Deducción pasado", "Elige o completa.", [
      fb("The ground is wet. It ___ ___ ___ (rain). (seguro)", ["must have rained"], "must have + participio."),
      mc("She ___ finished already — it's impossible!", ["mustn't have", "can't have", "might have"], 1, "imposible → can't have."),
      fb("He's not here. He ___ ___ ___ (miss) the bus. (quizás)", ["might have missed", "may have missed", "could have missed"], "might/may/could have + participio."),
      mc("Choose:", ["They must have saw it.", "They must have seen it.", "They must saw it."], 1, "participio: seen."),
      fb("The window's broken. Someone ___ ___ ___ (break) it. (seguro)", ["must have broken"], "must have broken."),
      mc("Choose:", ["I can't have left the door open.", "I mustn't have left the door open.", "I can't left the door open."], 0, "imposible → can't have."),
      fb("She looks happy. She ___ ___ ___ (pass) her exam. (deducción)", ["must have passed"], "must have passed."),
    ]),
    GRAMMAR("Vocabulario del día — La historia", "Léxico de historia (B1)."),
    deck("B1 S8D37 — La historia", [
      ["century", "siglo", "It was built in the 15th century.", "sustantivo", "ˈsentʃəri"],
      ["ancient", "antiguo/a", "These are ancient ruins.", "adjetivo", "ˈeɪnʃənt"],
      ["discover", "descubrir", "They discovered a hidden tomb.", "verbo", "dɪsˈkʌvə"],
      ["empire", "imperio", "The Roman Empire was huge.", "sustantivo", "ˈempaɪə"],
      ["ruins", "ruinas", "We explored the old ruins.", "sustantivo", "ˈruːɪnz"],
      ["invade", "invadir", "The army invaded the city.", "verbo", "ɪnˈveɪd"],
      ["civilisation", "civilización", "An ancient civilisation lived here.", "sustantivo", "ˌsɪvəlaɪˈzeɪʃn"],
      ["monument", "monumento", "The monument is very old.", "sustantivo", "ˈmɒnjumənt"],
      ["survive", "sobrevivir / perdurar", "The building has survived for centuries.", "verbo", "səˈvaɪv"],
      ["remains", "restos", "The remains of a castle stand here.", "sustantivo", "rɪˈmeɪnz"],
    ]),
    vocabEx("Vocabulario — La historia", "Elige la opción correcta.", [
      mc("A period of one hundred years is a ___.", ["century", "empire", "monument"], 0, "century."),
      mc("Very old, from long ago, means ___.", ["ancient", "modern", "recent"], 0, "ancient."),
      mc("The broken parts of old buildings are ___.", ["ruins", "monuments", "empires"], 0, "ruins."),
      mc("To find something for the first time is to ___ it.", ["discover", "invade", "survive"], 0, "discover."),
      mc("To enter a country by force is to ___ it.", ["invade", "discover", "survive"], 0, "invade."),
      mc("To continue to exist over a long time is to ___.", ["survive", "invade", "discover"], 0, "survive."),
    ]),

    ...readingParts({
      p1: { title: "Historia y avisos", items: [
        mc("Sign: 'These ruins date back to the 2nd century.'", ["The ruins are very old.", "They're modern.", "No ruins."], 0, "'date back to the 2nd century'."),
        mc("Text: 'The tomb was untouched, so no one can have entered.'", ["Nobody had been inside.", "Many people entered.", "It was empty."], 0, "'no one can have entered'."),
        mc("Notice: 'This monument has survived over 1,000 years.'", ["It's more than 1,000 years old.", "It's new.", "It fell down."], 0, "'survived over 1,000 years'."),
        mc("Note: 'Archaeologists have discovered ancient remains here.'", ["Old remains were found.", "Nothing was found.", "Modern items."], 0, "'discovered ancient remains'."),
        mc("Sign: 'The city must have been huge in its time.'", ["A deduction about its past size.", "It was small.", "It's modern."], 0, "'must have been huge'."),
      ] },
      p2text: "FOUR HISTORIC PLACES TO VISIT\n\nA) The Roman Baths — remarkably well-preserved ruins where you can imagine ancient daily life.\nB) The Old Castle — a thousand-year-old fortress with towers, tunnels and dramatic views.\nC) The Buried City — a whole town, discovered under the ground, frozen in time.\nD) The National Museum — thousands of ancient objects that tell the story of a lost empire.",
      p2q: { title: "Emparejar personas y lugares", items: [
        mc("Nadia loves imagining everyday life in ancient times.", ["A", "B", "C", "D"], 0, "The Roman Baths."),
        mc("Ben is fascinated by castles and battles.", ["A", "B", "C", "D"], 1, "The Old Castle."),
        mc("Sara is amazed by cities discovered underground.", ["A", "B", "C", "D"], 2, "The Buried City."),
        mc("Leo prefers seeing ancient objects up close.", ["A", "B", "C", "D"], 3, "The National Museum."),
        mc("A place where you can explore tunnels and towers.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE MYSTERY OF THE ANCIENT CITY\n\nHigh in the mountains, hidden for centuries, lie the ruins of a remarkable ancient city. When explorers first discovered it, they were amazed. Beautiful stone buildings, perfectly built without any modern tools, stood silently among the clouds. But the biggest puzzle was this: why had the people who built it suddenly abandoned such a wonderful place?\n\nHistorians have spent years trying to work out what happened, and they still can't be certain. At first, some thought the city must have been attacked and its people killed in a war. However, this theory has a problem: there is no evidence of a battle, and no weapons or bodies have been found. Others suggest that a terrible disease might have spread through the population, forcing the survivors to flee. A third idea is that the climate could have changed, so that the people were no longer able to grow enough food to survive.\n\nThe truth is that we may never know for certain. What we can say is that the people who lived there must have been extraordinary builders and organisers. They can't have had an easy life, so high in the mountains, yet they created something that has survived for hundreds of years. Every year, scientists discover new clues, and slowly the story becomes a little clearer. But part of me hopes the mystery is never completely solved. A world with no mysteries left would be a much less fascinating place.",
      p3q: { title: "El misterio de la ciudad antigua (texto largo)", items: [
        mc("What amazed the explorers?", ["Modern buildings.", "Beautiful stone buildings built without modern tools.", "Empty land."], 1, "'stone buildings, perfectly built without any modern tools'."),
        mc("What is the biggest puzzle?", ["How it was built.", "Why the people suddenly abandoned it.", "Who found it."], 1, "'why had the people… suddenly abandoned such a wonderful place?'"),
        mc("What is the problem with the 'war' theory?", ["Too many bodies.", "No evidence of a battle or weapons.", "It's obvious."], 1, "'no evidence of a battle, and no weapons or bodies'."),
        mc("What might have made growing food impossible?", ["A war.", "A change in the climate.", "Too many people."], 1, "'the climate could have changed… no longer able to grow enough food'."),
        mc("What does the writer hope?", ["That it's solved soon.", "That the mystery is never completely solved.", "That it's destroyed."], 1, "'I hope the mystery is never completely solved'."),
      ] },
      p4text: "THE COIN IN THE GARDEN\n\nLast spring, while digging in our garden, my father found a small, dirty metal disc. (1)___ At first, we thought it was just a bottle top or a piece of rubbish.\n\nBut when he cleaned it, we could see strange markings and the faint image of a face. (2)___ 'This must be very old,' my father said, excitedly. We took it to a local museum, where an expert examined it carefully. (3)___ She told us it was a Roman coin, almost two thousand years old. It must have been dropped by someone walking across that same piece of land, twenty centuries ago.\n\nStanding in our ordinary garden, holding that ancient coin, I felt a strange connection to the past. (4)___ Someone just like me must have held it, spent it, and lost it, long before our house, our street or even our town existed. (5)___ It made me realise that history isn't only in museums and books — sometimes it's right beneath our feet.",
      p4options: [
        "It was covered in centuries of dirt.",                     // A -> gap 1
        "Clearly, this was no ordinary object.",                    // B -> gap 2
        "What she said left us speechless.",                        // C -> gap 3
        "A real person had once owned this tiny thing.",            // D -> gap 4
        "We threw the coin straight back in the bin.",              // E (extra)
        "That little coin changed how I see the world.",            // F -> gap 5
        "The coin turned out to be completely modern.",             // G (extra)
        "Nobody had ever lived in our area before.",                // H (extra)
      ],
      p4q: { title: "La moneda del jardín (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cubierta de siglos de tierra."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: no era un objeto normal."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: lo que dijo los dejó sin palabras."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: una persona real la tuvo."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la moneda cambió su forma de ver el mundo."),
      ] },
      p5text: "When historians study an (1)___ site, they act like detectives. They can't be sure exactly what happened, so they look for (2)___. If they find weapons, a battle must have taken (3)___ there. If they discover the (4)___ of houses, people must have lived there for a long time. Sometimes an entire (5)___ that ruled for centuries can disappear, and we may never fully understand why. But every new object they (6)___ helps to tell the story of the past.",
      p5q: { title: "Huecos con opciones (vocabulario/deducción)", items: [
        mc("Hueco 1", ["ancient", "modern", "recent", "new"], 0, "'an ancient site'."),
        mc("Hueco 2", ["evidence", "empire", "century", "monument"], 0, "'look for evidence'."),
        mc("Hueco 3", ["place", "part", "over", "off"], 0, "'a battle must have taken place'."),
        mc("Hueco 4", ["remains", "ruins", "clues", "monuments"], 0, "'the remains of houses' (o ruins)."),
        mc("Hueco 5", ["empire", "century", "ruin", "clue"], 0, "'an entire empire'."),
        mc("Hueco 6", ["discover", "invade", "survive", "seem"], 0, "'every new object they discover'."),
      ] },
      p6text: "Hi Sam,\nYou won't believe what my dad found in the garden — a Roman coin! It was so dirty that we thought it (1)___ be rubbish. But an expert told us it (2)___ have been almost 2,000 years old! Someone (3)___ have dropped it there centuries ago. It (4)___ have belonged to a real person, just like us. It's amazing to think an ancient (5)___ once lived on this land. I've realised that history (6)___ be all around us, even in an ordinary garden!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["might", "could", "may"], "'might be rubbish'."),
        fb("Hueco 2", ["must"], "'it must have been almost 2,000 years old'."),
        fb("Hueco 3", ["must"], "'Someone must have dropped it'."),
        fb("Hueco 4", ["must"], "'It must have belonged to a real person'."),
        fb("Hueco 5", ["civilisation", "empire"], "'an ancient civilisation/empire'."),
        fb("Hueco 6", ["can", "could", "might"], "'history can be all around us'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a visitó un lugar histórico. Responde a su email (~100 palabras):\n· pregúntale cómo era el sitio,\n· cuenta un lugar histórico que tú visitaste,\n· usa la deducción sobre el pasado (must have been…).", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why is it important to learn about history?' con tu opinión.\n· RELATO: empieza con: 'While digging in the garden, I found something very strange.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: How old is this castle? Man: It must have been built centuries ago. Two. Man: Did the Romans live here? Woman: Yes, we found ancient coins. Three. Woman: Why did the city disappear? Man: A disease might have spread. Four. Man: Is this a real Roman helmet? Woman: It can't be — it's plastic! Five. Man: How did they build it without machines? Woman: They must have worked incredibly hard. Six. Woman: What are those stones? Man: They're the remains of an old temple.", [
      mc("1. When was the castle built?", ["Last year.", "Centuries ago.", "Never."], 1, "'must have been built centuries ago'."),
      mc("2. Did the Romans live there?", ["No.", "Yes, they found ancient coins.", "Unknown."], 1, "'we found ancient coins'."),
      mc("3. Why might the city have disappeared?", ["A war.", "A disease.", "An earthquake."], 1, "'A disease might have spread'."),
      mc("4. Is the helmet real?", ["Yes.", "No, it's plastic.", "Maybe."], 1, "'It can't be — it's plastic'."),
      mc("5. How did they build it?", ["With machines.", "By working incredibly hard.", "Quickly."], 1, "'must have worked incredibly hard'."),
      mc("6. What are the stones?", ["A new building.", "The remains of an old temple.", "Rubbish."], 1, "'the remains of an old temple'."),
    ]),

    ...speakingParts("la historia y el pasado", { p1: "si te gusta la historia, qué época te interesa y qué lugares históricos has visitado", p2: "una foto de un lugar histórico o unas ruinas: especula sobre su pasado", p3: "qué lugar histórico visitar juntos en una excursión escolar", p4: "la historia, por qué es importante conocerla y qué podemos aprender del pasado" }),

    SUMMARY("Resumen del Día 37", [
      "Deducción pasado: must have + participio (seguro), can't have + participio (imposible), might/may/could have + participio (quizás).",
      "must HAVE gone (no 'must of'); imposible → CAN'T have.",
      "Vocabulario de historia. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 38", "Escribe 3 deducciones sobre el pasado (must/might/can't have + participio). Repasa las flashcards. Mañana: el causativo (have something done)."),
  ],
};

// ───────────────────────── DÍA 38 ─────────────────────────
const DAY38 = {
  title: "Día 38 — El causativo (have something done) · Los servicios",
  description: "have/get + objeto + participio (encargar un servicio a otro). Vocabulario de servicios. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Expresar que un servicio lo hace otra persona por ti (causativo).",
    summary: "Causativo have/get sth done; servicios; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'I cut my hair' (yo mismo) vs 'I had my hair cut'.", "orden de las palabras.", "'have done my hair cut'."],
    reviewPrompts: ["¿Cómo dices 'me corté el pelo (en la pelu)'?", "¿Orden: have + qué + qué?"],
  },
  items: [
    TEXT("🔁 Repaso: deducción pasado. Hoy el CAUSATIVO (have/get something done): cuando OTRA persona hace algo por ti (un servicio). Vocabulario: los SERVICIOS."),
    GRAMMAR("El causativo (have/get something done)", `Cuando pagas o pides a otra persona que haga algo por ti:
HAVE + OBJETO + PARTICIPIO PASADO. (get es más informal, igual de correcto)
· I had my hair cut. (fui a la peluquería; no me lo corté yo)
· We're having our house painted. She got her car repaired.
Compara: 'I cut my hair' = yo mismo. 'I had my hair cut' = me lo cortaron.
En varios tiempos, cambia solo 'have':
· present: I have it cleaned. · past: I had it cleaned. · future: I'll have it cleaned. · perfect: I've had it cleaned.
También para algo malo que te pasa: She had her bag stolen. (le robaron el bolso)`),
    WARN("Errores típicos del hispanohablante", "· ❌ I cut my hair (si fuiste a la pelu) → ✅ I had my hair cut.\n· ❌ I had cut my hair (orden) → ✅ I had my hair cut.\n· El participio va AL FINAL: have + [cosa] + [participio].\n· get = have (informal): I got my car fixed."),
    grammarEx("Gramática — El causativo", "Ordena o completa.", [
      fb("I ___ my hair ___ yesterday. (have / cut) — me lo cortaron", ["had", "cut"], "had my hair cut."),
      mc("Choose (someone painted it):", ["We painted our house.", "We had our house painted.", "We had painted our house."], 1, "have + objeto + participio."),
      fb("She ___ her car ___ at the garage. (get / repair, pasado)", ["got", "repaired"], "got her car repaired."),
      mc("Choose:", ["I'm having cleaned my windows.", "I'm having my windows cleaned.", "I'm having my windows clean."], 1, "have + objeto + participio."),
      fb("He ___ his bag ___ on the train. (have / steal — le robaron)", ["had", "stolen"], "had his bag stolen."),
      mc("Choose (future):", ["I'll have my eyes tested.", "I'll have tested my eyes.", "I'll have my eyes test."], 0, "have + objeto + participio."),
      fb("We're going to ___ the kitchen ___ next week. (have / redecorate)", ["have", "redecorated"], "have the kitchen redecorated."),
    ]),
    GRAMMAR("Vocabulario del día — Los servicios", "Léxico de servicios (B1)."),
    deck("B1 S8D38 — Los servicios", [
      ["repair", "reparar / arreglo", "I need to get my phone repaired.", "verbo/sustantivo", "rɪˈpeə"],
      ["hairdresser", "peluquero/a", "I'm going to the hairdresser.", "sustantivo", "ˈheədresə"],
      ["mechanic", "mecánico/a", "The mechanic fixed my car.", "sustantivo", "məˈkænɪk"],
      ["dry-cleaner", "tintorería", "I took my coat to the dry-cleaner.", "sustantivo", "ˌdraɪ ˈkliːnə"],
      ["deliver", "entregar / repartir", "They delivered the parcel today.", "verbo", "dɪˈlɪvə"],
      ["fix", "arreglar", "Can you fix the tap?", "verbo", "fɪks"],
      ["service", "revisión / servicio", "The car needs a service.", "sustantivo", "ˈsɜːvɪs"],
      ["install", "instalar", "They installed a new boiler.", "verbo", "ɪnˈstɔːl"],
      ["appointment", "cita", "I've got a dentist appointment.", "sustantivo", "əˈpɔɪntmənt"],
      ["plumber", "fontanero/a", "We called a plumber.", "sustantivo", "ˈplʌmə"],
    ]),
    vocabEx("Vocabulario — Los servicios", "Elige la opción correcta.", [
      mc("A person who cuts hair is a ___.", ["hairdresser", "mechanic", "plumber"], 0, "hairdresser."),
      mc("A person who fixes cars is a ___.", ["mechanic", "plumber", "hairdresser"], 0, "mechanic."),
      mc("A person who fixes water pipes is a ___.", ["plumber", "mechanic", "hairdresser"], 0, "plumber."),
      mc("A fixed time to see a professional is an ___.", ["appointment", "install", "service"], 0, "appointment."),
      mc("To bring goods to your home is to ___ them.", ["deliver", "install", "repair"], 0, "deliver."),
      mc("To put in and set up a new machine is to ___ it.", ["install", "deliver", "fix"], 0, "install."),
    ]),

    ...readingParts({
      p1: { title: "Servicios y avisos", items: [
        mc("Sign: 'We repair phones while you wait.'", ["Fast phone repairs.", "No repairs.", "Only new phones."], 0, "'repair phones while you wait'."),
        mc("Note: 'I'm getting my car serviced tomorrow.'", ["The car will be serviced.", "They fixed it already.", "No service."], 0, "'getting my car serviced'."),
        mc("Card: 'Book an appointment online — no waiting!'", ["Reserve a time online.", "No booking.", "Walk in only."], 0, "'Book an appointment online'."),
        mc("Text: 'The plumber is coming to fix the leak.'", ["A plumber will repair a leak.", "No leak.", "No plumber."], 0, "'plumber is coming to fix the leak'."),
        mc("Ad: 'Free delivery on orders over €30.'", ["Delivery is free over €30.", "No delivery.", "Always paid."], 0, "'Free delivery on orders over €30'."),
      ] },
      p2text: "FOUR HANDY SERVICES\n\nA) QuickFix Phones — get your cracked screen replaced in under an hour.\nB) HomeHelp — plumbers, electricians and painters, all with same-day appointments.\nC) StyleCut — a modern hairdresser where you can get a new look without booking ahead.\nD) AutoCare — a trusted garage where you can have your car serviced and repaired.",
      p2q: { title: "Emparejar personas y servicios", items: [
        mc("Nadia has dropped her phone and broken the screen.", ["A", "B", "C", "D"], 0, "QuickFix Phones."),
        mc("Ben has a leaking tap and needs a plumber today.", ["A", "B", "C", "D"], 1, "HomeHelp."),
        mc("Sara wants a new hairstyle right now, without an appointment.", ["A", "B", "C", "D"], 2, "StyleCut."),
        mc("Leo's car is making a strange noise.", ["A", "B", "C", "D"], 3, "AutoCare."),
        mc("A service where you can get plumbers same-day.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "A WORLD OF SPECIALISTS\n\nA hundred years ago, most people could do a surprising number of things for themselves. They grew some of their own food, mended their own clothes, and often repaired their own homes. Today, life is very different. We live in a world of specialists, where we pay other people to do almost everything for us. We have our hair cut, our cars serviced, our meals delivered and our houses cleaned.\n\nIn many ways, this is a good thing. It saves us time, and it means each job is done by an expert. I would much rather have my electrics installed by a qualified electrician than risk doing it myself and burning the house down. Specialisation has made our lives safer and more comfortable, and it has created millions of jobs. When something breaks, most of us simply get it fixed or, increasingly, throw it away and buy a new one.\n\nAnd yet, I sometimes wonder whether we have lost something important. My grandfather could fix almost anything, and there was a real pride and satisfaction in his self-reliance. Many young people today cannot sew on a button or change a tyre. When everything is done for us, we become strangely helpless. Perhaps the answer is balance. By all means, have the difficult and dangerous jobs done by professionals. But it's worth learning a few basic skills too. There is a quiet confidence that comes from being able to look at a small problem and say, 'Don't worry, I can fix that myself.'",
      p3q: { title: "Un mundo de especialistas (texto largo)", items: [
        mc("What could people do a hundred years ago?", ["Nothing.", "Many things for themselves.", "Only buy things."], 1, "'do a surprising number of things for themselves'."),
        mc("Why is specialisation a good thing?", ["It's slower.", "It saves time and each job is done by an expert.", "It's dangerous."], 1, "'saves us time… done by an expert'."),
        mc("What does the writer prefer for electrics?", ["Doing it himself.", "Having it installed by a qualified electrician.", "Ignoring it."], 1, "'have my electrics installed by a qualified electrician'."),
        mc("What can many young people not do today?", ["Use a phone.", "Sew on a button or change a tyre.", "Buy things."], 1, "'cannot sew on a button or change a tyre'."),
        mc("What does the writer suggest as the answer?", ["Do everything yourself.", "Balance: professionals for hard jobs, learn basic skills too.", "Buy everything new."], 1, "'Perhaps the answer is balance'."),
      ] },
      p4text: "THE DAY EVERYTHING BROKE\n\nThere are days when the whole world seems to fall apart, and last Monday was one of them. (1)___ It started when I woke up to find that the heating had stopped working during the night.\n\nShivering, I went to make coffee, only to discover that the machine had died too. (2)___ Then, as I rushed to leave, my car refused to start. I had to call a mechanic, book a plumber for the heating, and order a new coffee machine, all before nine in the morning. (3)___ By lunchtime, I had spent a small fortune getting everything fixed.\n\nThat evening, exhausted and poorer, I sat in my finally-warm house and started to laugh. (4)___ In a strange way, the disaster had reminded me how much I usually take for granted. We rarely think about our heating, our car or our coffee machine — until the moment they stop working. (5)___ Now, every morning, I feel genuinely grateful for a warm house and a working car.",
      p4options: [
        "Absolutely nothing went right from the very start.",       // A -> gap 1
        "One by one, my appliances were giving up.",                // B -> gap 2
        "I had never had to arrange so many repairs at once.",      // C -> gap 3
        "The whole ridiculous situation suddenly seemed funny.",    // D -> gap 4
        "I decided to throw everything I owned away.",              // E (extra)
        "That awful day taught me not to take things for granted.", // F -> gap 5
        "Everything in my house was brand new.",                    // G (extra)
        "I have never owned a car or a coffee machine.",            // H (extra)
      ],
      p4q: { title: "El día que todo se rompió (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: nada salió bien desde el principio."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: los aparatos se rendían uno a uno."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: nunca había tenido que arreglar tanto a la vez."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: la situación le pareció graciosa."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese día le enseñó a no dar las cosas por hechas."),
      ] },
      p5text: "When something breaks at home, you usually have two choices: fix it yourself or have it (1)___ by a professional. For a leaking pipe, it's safer to call a (2)___. If your car makes a strange noise, take it to a (3)___ and have it (4)___. Many people now get their shopping (5)___ to their door instead of going to the shops. Whatever you need, it's a good idea to book an (6)___ in advance so you don't have to wait.",
      p5q: { title: "Huecos con opciones (vocabulario/causativo)", items: [
        mc("Hueco 1", ["repaired", "repair", "repairing", "to repair"], 0, "'have it repaired' (causativo)."),
        mc("Hueco 2", ["plumber", "mechanic", "hairdresser", "electrician"], 0, "leaking pipe → plumber."),
        mc("Hueco 3", ["mechanic", "plumber", "hairdresser", "dentist"], 0, "car → mechanic."),
        mc("Hueco 4", ["serviced", "service", "servicing", "to service"], 0, "'have it serviced'."),
        mc("Hueco 5", ["delivered", "deliver", "delivering", "to deliver"], 0, "'get their shopping delivered'."),
        mc("Hueco 6", ["appointment", "install", "service", "repair"], 0, "'book an appointment'."),
      ] },
      p6text: "Hi Sam,\nWhat a week! Everything in my flat broke at once. First, I had to get the heating (1)___ by a plumber. Then I had my car (2)___ at the garage because it wouldn't start. I even had to get a new coffee machine (3)___ to my door! I've spent a fortune having things (4)___. My grandad could fix anything himself, but I can't! I think I (5)___ learn a few basic skills. At least my flat is warm now — I'll never take that for (6)___ again!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["fixed", "repaired"], "'get the heating fixed'."),
        fb("Hueco 2", ["repaired", "fixed", "serviced"], "'had my car repaired'."),
        fb("Hueco 3", ["delivered"], "'get a new coffee machine delivered'."),
        fb("Hueco 4", ["fixed", "repaired", "done"], "'having things fixed'."),
        fb("Hueco 5", ["should", "must", "could"], "'I should learn a few basic skills'."),
        fb("Hueco 6", ["granted"], "'take that for granted'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta cómo resolviste un problema en casa. Responde a su email (~100 palabras):\n· cuenta qué se rompió y cómo lo arreglaste (usa el causativo: I had it fixed…),\n· di si lo hiciste tú o un profesional,\n· pregúntale si sabe arreglar cosas.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Should everyone learn basic repair skills?' con tu opinión.\n· RELATO: empieza con: 'That Monday, everything in my house seemed to break at once.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha el mensaje de un taller de reparaciones y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear a phone message from a repair shop. Hello, this is a message from FixIt Repairs about your laptop. The good news is that we've replaced the broken screen, and it's now working perfectly. The total cost of the repair is eighty euros. You can collect it any day between nine and five, except on Sundays, when we're closed. Please bring your receipt and some form of identification. If you'd like it delivered to your home instead, there's a small extra charge of ten euros. Thank you for choosing FixIt Repairs.", [
      fb("They have replaced the broken ___.", ["screen"], "'replaced the broken screen'."),
      fb("The total cost of the repair is ___ euros.", ["eighty", "80"], "'eighty euros'."),
      fb("You can collect it between nine and ___.", ["five", "5"], "'between nine and five'."),
      fb("They are closed on ___.", ["Sundays", "Sunday"], "'except on Sundays'."),
      fb("Home delivery costs an extra ___ euros.", ["ten", "10"], "'extra charge of ten euros'."),
    ]),

    ...speakingParts("los servicios y arreglar cosas", { p1: "si sabes arreglar cosas o prefieres que las haga un profesional, y por qué", p2: "una foto de alguien prestando un servicio (peluquería, taller, reparación)", p3: "qué hacer si se estropea algo importante antes de una fiesta en casa", p4: "los servicios, si dependemos demasiado de los profesionales y qué habilidades básicas deberíamos tener" }),

    SUMMARY("Resumen del Día 38", [
      "Causativo: have/get + objeto + participio (I had my hair cut = me lo cortaron).",
      "El participio va al final. get = have (informal). También para algo malo: had my bag stolen.",
      "Vocabulario de servicios. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 39", "Escribe 4 frases con el causativo (have/get something done). Repasa las flashcards. Mañana: used to / be used to / get used to."),
  ],
};

// ───────────────────────── DÍA 39 ─────────────────────────
const DAY39 = {
  title: "Día 39 — used to / be used to / get used to · Los cambios",
  description: "Distinguir 'used to + infinitivo', 'be used to + -ing' y 'get used to + -ing'. Vocabulario de cambios. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Diferenciar hábitos pasados de estar/llegar a acostumbrarse.",
    summary: "used to / be used to / get used to; los cambios; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["'I am used to get up early' (→ to getting).", "'I use to' (→ used to).", "confundir las tres estructuras."],
    reviewPrompts: ["¿'used to' + qué forma? ¿'be used to' + qué forma?", "¿Diferencia de significado?"],
  },
  items: [
    TEXT("🔁 Repaso: causativo. Hoy tres estructuras que se confunden mucho: USED TO / BE USED TO / GET USED TO. Vocabulario: los CAMBIOS."),
    GRAMMAR("used to / be used to / get used to", `1) USED TO + INFINITIVO = hábito o estado del PASADO que ya no ocurre.
· I used to play football. (antes jugaba, ya no) I didn't use to like coffee.
2) BE USED TO + -ING (o sustantivo) = estar ACOSTUMBRADO a algo (ahora).
· I'm used to getting up early. She's used to the cold. (no le resulta raro)
3) GET USED TO + -ING = ir ACOSTUMBRÁNDOSE (proceso de adaptación).
· I'm getting used to my new job. It was hard at first, but I got used to it.
⚠️ 'used to' → INFINITIVO. 'be/get used to' → -ING (o sustantivo). ¡No los mezcles!
Negativa/pregunta de (1): didn't use to / did you use to? (sin 'd').`),
    WARN("Errores típicos del hispanohablante", "· ❌ I am used to get up early → ✅ I'm used to getting up early.\n· ❌ I use to play (pasado) → ✅ I used to play.\n· ❌ I didn't used to → ✅ I didn't use to.\n· 'be used to' habla del PRESENTE (acostumbrado), 'used to' del PASADO (antes)."),
    grammarEx("Gramática — used to / be used to / get used to", "Completa con la forma correcta.", [
      fb("I ___ ___ (play) football when I was young. (hábito pasado)", ["used to play"], "used to + infinitivo."),
      fb("I'm used to ___ (get) up early now.", ["getting"], "be used to + -ing."),
      fb("It was hard at first, but I got used to ___ (live) alone.", ["living"], "get used to + -ing."),
      mc("Choose (past habit):", ["I use to smoke.", "I used to smoke.", "I am used to smoke."], 1, "used to + infinitivo."),
      mc("Choose (accustomed now):", ["She's used to work nights.", "She's used to working nights.", "She used to working nights."], 1, "be used to + -ing."),
      fb("I didn't ___ ___ (like) vegetables, but now I love them.", ["use to like"], "didn't use to + infinitivo."),
      mc("Choose (getting accustomed):", ["I'm getting used to the noise.", "I'm getting used to hear the noise.", "I get used the noise."], 0, "get used to + sustantivo/-ing."),
    ]),
    GRAMMAR("Vocabulario del día — Los cambios", "Léxico de cambios y adaptación (B1)."),
    deck("B1 S8D39 — Los cambios", [
      ["change", "cambio / cambiar", "Life is full of changes.", "sustantivo/verbo", "tʃeɪndʒ"],
      ["move", "mudarse", "We moved to a new city.", "verbo", "muːv"],
      ["adapt", "adaptarse", "It takes time to adapt.", "verbo", "əˈdæpt"],
      ["get used to", "acostumbrarse a", "I'm getting used to the weather.", "colocación", "ɡet ˈjuːst tuː"],
      ["habit", "hábito / costumbre", "It's a hard habit to break.", "sustantivo", "ˈhæbɪt"],
      ["routine", "rutina", "My routine has completely changed.", "sustantivo", "ruːˈtiːn"],
      ["settle in", "instalarse / adaptarse", "It took a month to settle in.", "phrasal verb", "ˌsetl ˈɪn"],
      ["miss", "echar de menos", "I miss my old friends.", "verbo", "mɪs"],
      ["homesick", "nostálgico/a (de casa)", "I felt homesick at first.", "adjetivo", "ˈhəʊmsɪk"],
      ["improve", "mejorar", "Things improved over time.", "verbo", "ɪmˈpruːv"],
    ]),
    vocabEx("Vocabulario — Los cambios", "Elige la opción correcta.", [
      mc("To change home and live somewhere new is to ___.", ["move", "adapt", "miss"], 0, "move."),
      mc("To change your behaviour to fit a new situation is to ___.", ["adapt", "miss", "improve"], 0, "adapt."),
      mc("A regular action you do without thinking is a ___.", ["habit", "change", "routine"], 0, "habit."),
      mc("To feel sad because you're away from home is to feel ___.", ["homesick", "settled", "improved"], 0, "homesick."),
      mc("To become comfortable in a new place is to ___.", ["settle in", "move out", "miss"], 0, "settle in."),
      mc("To feel sad because someone or something is not there is to ___ it.", ["miss", "adapt", "improve"], 0, "miss."),
    ]),

    ...readingParts({
      p1: { title: "Cambios y avisos", items: [
        mc("Note: 'It takes time to settle in, so be patient.'", ["Adapting takes time.", "Adapting is instant.", "No change."], 0, "'It takes time to settle in'."),
        mc("Text: 'I used to hate the city, but now I love it.'", ["Their opinion changed.", "They always loved it.", "They hate it now."], 0, "'used to hate… now I love it'."),
        mc("Message: 'I miss you all so much!'", ["They feel your absence.", "They forgot you.", "They're happy alone."], 0, "'I miss you all'."),
        mc("Sign: 'New students: settling-in event on Friday.'", ["An event to help new students adapt.", "No event.", "For teachers."], 0, "'settling-in event'."),
        mc("Note: 'Don't worry, you'll soon get used to it.'", ["You'll adapt soon.", "You'll never adapt.", "Nothing changes."], 0, "'you'll soon get used to it'."),
      ] },
      p2text: "FOUR BIG LIFE CHANGES\n\nA) Moving Abroad — exciting but hard; a new language, new food and being far from family.\nB) Starting University — meeting new people and living away from home for the first time.\nC) A New Job — learning new skills and getting used to different colleagues and routines.\nD) Becoming a Parent — the biggest change of all, with almost no sleep but enormous joy.",
      p2q: { title: "Emparejar personas y cambios", items: [
        mc("Nadia is nervous about learning a new language in a new country.", ["A", "B", "C", "D"], 0, "Moving Abroad."),
        mc("Ben is leaving home to study for the first time.", ["A", "B", "C", "D"], 1, "Starting University."),
        mc("Sara is adapting to a different workplace and team.", ["A", "B", "C", "D"], 2, "A New Job."),
        mc("Leo has just had a baby and is exhausted but happy.", ["A", "B", "C", "D"], 3, "Becoming a Parent."),
        mc("The change described as the biggest of all.", ["A", "B", "C", "D"], 3, "D."),
      ] },
      p3text: "THE ART OF STARTING OVER\n\nThree years ago, I moved to a country where I knew nobody and could barely speak the language. It was the biggest change of my life, and, if I'm honest, the first few months were miserable. I felt terribly homesick. I used to lie awake at night, missing my family, my friends and even little things like my favourite bread from the shop on my old street. Everything felt strange and difficult, and I seriously wondered whether I had made a huge mistake.\n\nBut slowly, almost without noticing, things began to change. I gradually got used to the different food, the new customs and the sound of a language I couldn't understand. Small victories gave me confidence: the first time I successfully ordered a coffee, the first time a neighbour smiled and said hello. I started to build a routine, and with a routine came a comforting sense of normality. The city that had seemed so cold and unwelcoming slowly began to feel like home.\n\nLooking back now, I realise that the difficulty was actually the point. If everything had been easy, I would never have grown. Adapting to that new life forced me to become more independent, more open-minded and more resilient than I had ever been before. To anyone facing a frightening change, I would say this: be patient with yourself. The strangeness won't last forever. Human beings are remarkably good at getting used to new things. One day, sooner than you expect, you'll wake up and realise that the new life has quietly become your own.",
      p3q: { title: "El arte de empezar de nuevo (texto largo)", items: [
        mc("How were the first few months for the writer?", ["Wonderful.", "Miserable and homesick.", "Boring."], 1, "'the first few months were miserable… terribly homesick'."),
        mc("What did the writer used to do at night?", ["Sleep well.", "Lie awake, missing home.", "Study."], 1, "'lie awake at night, missing my family'."),
        mc("What gave the writer confidence?", ["Big events.", "Small victories, like ordering a coffee.", "Money."], 1, "'Small victories gave me confidence'."),
        mc("What does the writer realise about the difficulty?", ["It was pointless.", "It was actually the point; it made them grow.", "It never ended."], 1, "'the difficulty was actually the point'."),
        mc("What advice does the writer give?", ["Give up.", "Be patient; the strangeness won't last forever.", "Never move."], 1, "'be patient with yourself. The strangeness won't last forever'."),
      ] },
      p4text: "THE MOVE THAT CHANGED ME\n\nWhen my parents told me we were moving to a new town, I was furious. (1)___ I didn't want to leave my school, my friends or the only home I had ever known.\n\nFor the first few weeks, I refused to settle in. (2)___ I sat alone at break times and told anyone who would listen how much better my old town had been. I used to phone my old friends every single evening, clinging to the past. (3)___ But of course, life carried on around me, whether I liked it or not.\n\nThen, slowly, things started to shift. A girl in my class invited me to join her football team. (4)___ Gradually, I made new friends, learned my way around, and even began to enjoy my new life. Within a few months, I had completely settled in. (5)___ Now I can't imagine living anywhere else. That difficult move taught me that change, however frightening, is often the beginning of something good.",
      p4options: [
        "It felt like the end of the world.",                       // A -> gap 1
        "I was determined to be unhappy.",                          // B -> gap 2
        "I hadn't given the new place a chance.",                   // C -> gap 3
        "Almost against my will, I started to have fun.",           // D -> gap 4
        "I moved back to my old town the next day.",                // E (extra)
        "That town is now the place I truly call home.",            // F -> gap 5
        "I had always wanted to move away.",                        // G (extra)
        "Nobody in the new town ever spoke to me.",                 // H (extra)
      ],
      p4q: { title: "La mudanza que me cambió (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: parecía el fin del mundo."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: decidido a ser infeliz."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: no le había dado una oportunidad."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: casi sin querer, empezó a divertirse."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese pueblo es ahora su hogar."),
      ] },
      p5text: "Big changes, like moving to a new city, are never easy. At first, you might feel (1)___ and miss your old life. You (2)___ to do things one way, and suddenly everything is different. But humans are good at adapting. Give yourself time to (3)___ in, build a new (4)___, and you'll slowly get (5)___ to your new surroundings. Before long, what once felt strange becomes normal, and things really do (6)___.",
      p5q: { title: "Huecos con opciones (vocabulario/gramática)", items: [
        mc("Hueco 1", ["homesick", "settled", "improved", "adapted"], 0, "'feel homesick'."),
        mc("Hueco 2", ["used", "use", "were used", "get used"], 0, "'You used to do things one way'."),
        mc("Hueco 3", ["settle", "move", "miss", "adapt"], 0, "'settle in'."),
        mc("Hueco 4", ["routine", "habit", "change", "move"], 0, "'build a new routine'."),
        mc("Hueco 5", ["used", "use", "used to", "using"], 0, "'get used to your surroundings'."),
        mc("Hueco 6", ["improve", "miss", "move", "adapt"], 0, "'things really do improve'."),
      ] },
      p6text: "Hi Sam,\nI can't believe how much I've changed since I moved here! At first I was so (1)___ that I used (2)___ phone my old friends every night. I really (3)___ my old life. But slowly I got (4)___ to the new place. I'm now used (5)___ (live) here, and I've made great friends. It took a while to settle (6)___, but now I love it. Change is scary, but it can be the start of something good!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["homesick"], "'so homesick'."),
        fb("Hueco 2", ["to"], "'used to phone' (hábito pasado)."),
        fb("Hueco 3", ["missed"], "'I really missed my old life'."),
        fb("Hueco 4", ["used"], "'I got used to the new place'."),
        fb("Hueco 5", ["to"], "'I'm now used to living here'."),
        fb("Hueco 6", ["in"], "'settle in'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a va a mudarse a otra ciudad y está nervioso/a. Responde a su email (~100 palabras):\n· dile que es normal costar al principio,\n· cuenta un cambio que tú viviste (usa used to / get used to),\n· dale un consejo para adaptarse.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is change always a good thing?' con tu opinión.\n· RELATO: empieza con: 'When my parents said we were moving, I was furious.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con un joven que se mudó al extranjero y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young man, Sam, who moved to another country. Interviewer: Sam, how did you feel when you first arrived? Sam: Honestly, terrible. I was really homesick and I couldn't speak the language. Interviewer: What was the hardest thing? Sam: Getting used to the food and the different daily routine. Interviewer: How long did it take to settle in? Sam: About three months. Small things helped, like making one good friend. Interviewer: Do you feel at home now? Sam: Definitely. I used to hate it, but now I love living here. Interviewer: What advice would you give? Sam: Be patient. You get used to anything in the end.", [
      mc("How did Sam feel when he first arrived?", ["Excited.", "Terrible and homesick.", "Confident."], 1, "'terrible… really homesick'."),
      mc("What was the hardest thing?", ["The weather.", "Getting used to the food and routine.", "The money."], 1, "'Getting used to the food and the different daily routine'."),
      mc("How long did it take to settle in?", ["A week.", "About three months.", "A year."], 1, "'About three months'."),
      mc("How does Sam feel about the place now?", ["He still hates it.", "He used to hate it but now loves it.", "He's leaving."], 1, "'I used to hate it, but now I love living here'."),
      mc("What is his advice?", ["Give up.", "Be patient; you get used to anything.", "Never move."], 1, "'Be patient. You get used to anything'."),
    ]),

    ...speakingParts("los cambios y adaptarse", { p1: "un cambio importante en tu vida y cómo te adaptaste", p2: "una foto de alguien en una situación nueva (mudándose, en un sitio nuevo)", p3: "cómo ayudar a un/a estudiante nuevo/a a adaptarse a vuestra clase", p4: "los cambios en la vida, si son buenos o malos y cómo adaptarse a ellos" }),

    SUMMARY("Resumen del Día 39", [
      "used to + infinitivo = hábito pasado (antes). be used to + -ing = estar acostumbrado (ahora). get used to + -ing = irse acostumbrando.",
      "¡No confundas 'used to' (infinitivo) con 'be/get used to' (-ing)!",
      "Vocabulario de cambios. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 40", "Escribe una frase con cada estructura (used to / be used to / get used to). Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 40 ─────────────────────────
const DAY40 = {
  title: "Día 40 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de modales de deducción, causativo y used to. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 8.",
  pedagogy: {
    objective: "Consolidar la deducción, el causativo y used to / be used to / get used to.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 9."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 8 del B1. Consolidas la deducción (presente y pasado), el causativo y used to / be used to / get used to. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 8", `1) Deducción presente: must be / can't be / might be.
2) Deducción pasado: must have + participio / can't have + participio / might have + participio.
3) Causativo: have/get + objeto + participio (I had my hair cut).
4) used to + infinitivo (hábito pasado) / be used to + -ing (acostumbrado) / get used to + -ing (adaptarse).`),
    grammarEx("Repaso mixto de gramática — Semana 8", "Completa o elige.", [
      mc("He's not answering. He ___ busy.", ["can't be", "must be", "mustn't be"], 1, "must be (seguro)."),
      fb("The ground is wet. It ___ ___ ___ (rain). (seguro, pasado)", ["must have rained"], "must have + participio."),
      mc("She ___ finished — it's impossible!", ["mustn't have", "can't have", "might have"], 1, "imposible → can't have."),
      fb("I ___ my hair ___ yesterday. (have/cut — me lo cortaron)", ["had", "cut"], "had my hair cut."),
      fb("I ___ ___ (play) tennis when I was young. (hábito pasado)", ["used to play"], "used to + infinitivo."),
      fb("I'm used to ___ (get) up early now.", ["getting"], "be used to + -ing."),
      mc("Choose (someone painted it):", ["We painted our house.", "We had our house painted.", "We had painted our house."], 1, "causativo."),
      fb("It was hard, but I got used to ___ (live) alone.", ["living"], "get used to + -ing."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 8", "Repasa los mazos (misterio, historia, servicios, cambios)."),
    vocabEx("Repaso de vocabulario — Semana 8", "Elige la opción correcta.", [
      mc("A piece of information that helps solve a mystery:", ["clue", "suspect", "mystery"], 0, "clue."),
      mc("Very old, from long ago:", ["ancient", "modern", "recent"], 0, "ancient."),
      mc("A person who fixes cars:", ["mechanic", "plumber", "hairdresser"], 0, "mechanic."),
      mc("To change home and live somewhere new:", ["move", "adapt", "miss"], 0, "move."),
      mc("Facts that prove something:", ["evidence", "clue", "mystery"], 0, "evidence."),
      mc("To find something for the first time:", ["discover", "invade", "survive"], 0, "discover."),
      mc("A fixed time to see a professional:", ["appointment", "install", "service"], 0, "appointment."),
      mc("To feel sad because you're away from home:", ["homesick", "settled", "improved"], 0, "homesick."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Note: 'The lights are on, so someone must be home.'", ["Someone is probably home.", "Nobody's home.", "Lights off."], 0, "'must be home'."),
        mc("Sign: 'These ruins must have been built centuries ago.'", ["A deduction about their age.", "They're new.", "No ruins."], 0, "'must have been built centuries ago'."),
        mc("Text: 'I'm getting my car serviced tomorrow.'", ["The car will be serviced.", "It's fixed.", "No service."], 0, "'getting my car serviced'."),
        mc("Message: 'You'll soon get used to the new school.'", ["You'll adapt soon.", "You'll never adapt.", "No change."], 0, "'get used to the new school'."),
        mc("Card: 'Book an appointment — we repair phones fast.'", ["Fast phone repairs by appointment.", "No repairs.", "New phones only."], 0, "'we repair phones fast'."),
      ] },
      p2text: "FOUR PODCASTS ABOUT LIFE\n\nA) Unsolved — famous mysteries and the clues that might explain them.\nB) Time Travellers — the stories behind ancient ruins and lost civilisations.\nC) Fix It Yourself — simple guides to repairing things at home instead of paying an expert.\nD) New Beginnings — real stories of people adapting to huge life changes.",
      p2q: { title: "Emparejar personas y podcasts", items: [
        mc("Nadia loves puzzles and unexplained mysteries.", ["A", "B", "C", "D"], 0, "Unsolved."),
        mc("Ben is fascinated by ancient history.", ["A", "B", "C", "D"], 1, "Time Travellers."),
        mc("Sara wants to learn to repair things herself.", ["A", "B", "C", "D"], 2, "Fix It Yourself."),
        mc("Leo enjoys stories about big life changes.", ["A", "B", "C", "D"], 3, "New Beginnings."),
        mc("A podcast about lost civilisations.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE HOUSE THAT REMEMBERED\n\nWhen we bought our old house, we knew almost nothing about its history. It was a hundred years old and full of character, but also full of small mysteries. Why was there a bricked-up doorway in the kitchen? Whose initials were carved into a beam in the attic? Who had planted the ancient apple tree in the garden? We used to spend whole evenings inventing stories about the people who must have lived there before us.\n\nOne day, while having some old wallpaper removed, the decorator made a discovery. Underneath layers of paint, on a bedroom wall, was a child's drawing and a date: 1932. Someone, almost a century ago, must have been a small child in that very room. It gave me a strange feeling, as if the house itself remembered its past. We had the drawing carefully protected rather than painted over. It seemed wrong to erase it.\n\nSince then, I've come to see our home differently. It isn't just a building we own; it's a place with a long story, and we are only its latest chapter. The people who lived here before us must have had their own joys and sorrows within these same walls. One day, we too will move on, and someone else will wonder about us. Perhaps they'll find something we've left behind and invent stories about the strange family who used to live here. I rather like that idea. A house, I've realised, is a kind of diary written by everyone who ever calls it home.",
      p3q: { title: "La casa que recordaba (texto largo)", items: [
        mc("What did the family used to do in the evenings?", ["Watch TV.", "Invent stories about former residents.", "Sleep."], 1, "'inventing stories about the people who must have lived there'."),
        mc("What did the decorator discover?", ["Money.", "A child's drawing dated 1932.", "A door."], 1, "'a child's drawing and a date: 1932'."),
        mc("What did the family do with the drawing?", ["Painted over it.", "Had it carefully protected.", "Sold it."], 1, "'had the drawing carefully protected'."),
        mc("How does the writer now see the house?", ["Just a building.", "A place with a long story; they're its latest chapter.", "A problem."], 1, "'a place with a long story… only its latest chapter'."),
        mc("What does the writer compare the house to?", ["A prison.", "A diary written by everyone who lives there.", "A mystery."], 1, "'a kind of diary written by everyone who ever calls it home'."),
      ] },
      p4text: "THE STRANGER'S SUITCASE\n\nLast month, an old suitcase was left behind on my train, and nobody came to claim it. (1)___ When the staff finally opened it, they found no name, no address — only a bundle of old letters and a few faded photographs.\n\nThe photos showed a young couple, smiling, in clothes from perhaps fifty years ago. (2)___ The letters, tied with a ribbon, were love letters. Whoever owned this case must have treasured these things for a lifetime. (3)___ How could someone lose something so precious?\n\nThe railway staff tried hard to find the owner, but without a name it was almost impossible. (4)___ In the end, the suitcase was placed in the lost-property office, where it still waits. I often think about it. Someone, somewhere, must be missing those letters terribly. (5)___ A whole life story, it seems, can fit inside a single forgotten case.",
      p4options: [
        "It sat alone on the luggage rack for hours.",              // A -> gap 1
        "They must have been very much in love.",                   // B -> gap 2
        "It was impossible not to feel moved.",                     // C -> gap 3
        "Every effort to trace them failed.",                       // D -> gap 4
        "The suitcase was completely empty inside.",                // E (extra)
        "That lost suitcase has stayed in my thoughts ever since.", // F -> gap 5
        "I decided to keep all the money for myself.",              // G (extra)
        "The owner was standing right next to me.",                 // H (extra)
      ],
      p4q: { title: "La maleta del desconocido (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: quedó sola en el portaequipajes."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: debían de estar muy enamorados."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: imposible no emocionarse."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: todo intento de localizarlos falló."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: la maleta perdida sigue en su mente."),
      ] },
      p5text: "Our old house is full of history. There's a bricked-up door that (1)___ have led somewhere long ago. When we had the walls (2)___, we found a child's drawing from 1932. A small child (3)___ have lived in that room almost a century ago. I (4)___ to invent stories about the people who lived here before us. Now I'm (5)___ to the idea that our home has a long past. One day someone will wonder about us, just as we (6)___ used to wondering about them.",
      p5q: { title: "Huecos con opciones (deducción/gramática)", items: [
        mc("Hueco 1", ["must", "can't", "should", "would"], 0, "'must have led somewhere'."),
        mc("Hueco 2", ["repainted", "repaint", "repainting", "to repaint"], 0, "'had the walls repainted' (causativo)."),
        mc("Hueco 3", ["must", "can't", "should", "will"], 0, "'must have lived in that room'."),
        mc("Hueco 4", ["used", "use", "am used", "get used"], 0, "'I used to invent stories'."),
        mc("Hueco 5", ["used", "using", "use", "used to"], 0, "'I'm used to the idea'."),
        mc("Hueco 6", ["are", "were", "have", "get"], 0, "'as we are used to wondering'."),
      ] },
      p6text: "Hi Sam,\nOur new-old house is amazing! It's over a hundred years old, so it (1)___ have a lot of history. When we had the kitchen (2)___, the decorator found an old drawing from 1932 under the wallpaper! A child (3)___ have lived there long ago. At first I (4)___ to feel a bit strange living in such an old place, but I've (5)___ used to it now — in fact, I love it. I used (6)___ prefer modern flats, but not any more!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["must"], "'it must have a lot of history'."),
        fb("Hueco 2", ["redecorated", "painted", "done"], "'had the kitchen redecorated'."),
        fb("Hueco 3", ["must"], "'A child must have lived there'."),
        fb("Hueco 4", ["used"], "'I used to feel a bit strange'."),
        fb("Hueco 5", ["got", "become"], "'I've got used to it now'."),
        fb("Hueco 6", ["to"], "'I used to prefer modern flats'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a se ha mudado a una casa antigua. Responde a su email (~100 palabras):\n· pregúntale por la historia de la casa,\n· especula sobre quién pudo vivir allí (must have…),\n· cuéntale si tú preferirías una casa antigua o moderna.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it better to live in an old house or a modern one?' con tu opinión.\n· RELATO: empieza con: 'Under the old wallpaper, we found something unexpected.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Whose umbrella is this? Man: It must be Anna's — she was here. Two. Man: How old is this coin? Woman: It must have been made centuries ago. Three. Woman: Did you cut your hair yourself? Man: No, I had it cut at the salon. Four. Man: Do you like your new city? Woman: I do now — I've got used to it. Five. Man: Why is the floor wet? Woman: The pipe must have burst. Six. Woman: Did you use to live here? Man: Yes, years ago, before I moved abroad.", [
      mc("1. Whose umbrella is it?", ["The man's.", "It must be Anna's.", "Nobody's."], 1, "'It must be Anna's'."),
      mc("2. How old is the coin?", ["New.", "Made centuries ago.", "A year old."], 1, "'must have been made centuries ago'."),
      mc("3. Did the man cut his own hair?", ["Yes.", "No, he had it cut at the salon.", "It's a wig."], 1, "'I had it cut at the salon'."),
      mc("4. Does the woman like her new city?", ["No.", "Yes, she's got used to it.", "She's leaving."], 1, "'I've got used to it'."),
      mc("5. Why is the floor wet?", ["Rain.", "The pipe must have burst.", "Someone spilled water."], 1, "'The pipe must have burst'."),
      mc("6. Did the man use to live there?", ["No.", "Yes, before he moved abroad.", "He still does."], 1, "'Yes, years ago, before I moved abroad'."),
    ]),

    ...speakingParts("los misterios, la historia y los cambios", { p1: "un misterio o cambio de tu vida, y un lugar histórico que te guste", p2: "una foto de un lugar antiguo o una escena curiosa: especula sobre ella", p3: "qué hacer con una casa antigua que heredáis: conservarla o modernizarla", p4: "el pasado, la adaptación al cambio y qué historias esconden los lugares y objetos" }),

    SUMMARY("Resumen de la Semana 8 (B1)", [
      "Dominas la deducción (presente y pasado), el causativo y used to / be used to / get used to.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: 'question tags', y las respuestas cortas y de acuerdo (so do I / neither do I).",
    ]),
    INFO("Mini-simulacro de la Semana 8", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa antes de la Semana 9."),
  ],
};

export const WEEK8 = {
  n: 8,
  theme: "Deducción, misterios y servicios",
  description: "Modales de deducción (presente y pasado), el causativo (have something done) y used to / be used to / get used to. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY36, DAY37, DAY38, DAY39, DAY40],
};
