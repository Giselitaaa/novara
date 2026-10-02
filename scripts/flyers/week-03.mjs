/**
 * A2 Flyers · Semana 3 — "Experiencias 🌟 · Have you ever...?".
 * Presente perfecto para experiencias (ever/never, been/seen/tried).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY11 = {
  title: "Día 11 — ¿Alguna vez has...? 🌟 · Have you ever...?",
  description: "Presente perfecto para experiencias con 'ever'.",
  pedagogy: { objective: "Preguntar sobre experiencias con 'Have you ever...?'.", summary: "Presente perfecto + ever; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Alguna vez has visitado otro país?"] },
  items: [
    TEXT("🌟 Have you ever been to London? — hablamos de experiencias."),
    GRAMMAR("Presente perfecto con ever", "Have you ever been to London? Yes, I have. / No, I haven't.\nI've never tried sushi."),
    deck("Flyers S3D11 — Have you ever", [
      ["have you ever", "¿alguna vez has...?", "Have you ever been to Paris?", "phrase"],
      ["I have", "sí, lo he hecho", "Have you tried it? Yes, I have.", "phrase"],
      ["I haven't", "no, no lo he hecho", "No, I haven't.", "phrase"],
      ["never", "nunca", "I've never been there.", "adverb"],
      ["been", "estado/ido (go)", "I've been to London.", "verb"],
      ["seen", "visto (see)", "I've seen that film.", "verb"],
      ["tried", "probado (try)", "I've tried sushi.", "verb"],
      ["ridden", "montado (ride)", "I've ridden a horse.", "verb"],
    ]),
    vocabEx("Have you ever 🌟", "Elige la opción correcta.", [
      mc("Have you ___ been to London? (alguna vez)", ["ever", "never"], 0, "ever."),
      mc("I've ___ tried sushi. (nunca)", ["never", "ever"], 0, "never."),
      mc("Have you tried it? Yes, I ___.", ["have", "haven't"], 0, "have."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la experiencia", [
      mc("🎧 'Have you ever been to London? Yes, I have, I went last year.' ¿Ha estado en Londres?", ["Yes, he has", "No, he hasn't"], 0, "'Yes, I have'."),
      mc("🎧 'I've never tried sushi, I don't like fish.' ¿Ha probado el sushi?", ["No, never", "Yes, many times"], 0, "'never tried sushi'."),
    ]),
    listening(1, "Listening · Parte 1 — Experiencias", "Escucha y responde.", "Listen and match. Have you ever been to London? Yes, I have, I went last year. I've never tried sushi, I don't like fish.", []),
    READING_HEAD,
    readDefine("Encuentra el participio", [
      mc("Participio de 'go': ___", ["been", "seen"], 0, "been."),
      mc("Participio de 'try': ___", ["tried", "tryed"], 0, "tried."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis experiencias", "Habla de experiencias con 'Have you ever'.", "Responde si alguna vez has hecho 3 cosas (viajar, probar comida, ver algo).", "usar presente perfecto con ever", "I've been to, I've never, I've tried"),
    SUMMARY("Resumen del Día 11", ["Puedes preguntar y responder 'Have you ever...?' con never/ever."]),
    INFO("Tarea para el Día 12", "Mañana: más verbos irregulares en participio."),
  ],
};

const DAY12 = {
  title: "Día 12 — Participios irregulares 📚 · Eaten, drunk, flown",
  description: "Más participios irregulares comunes.",
  pedagogy: { objective: "Usar más participios irregulares.", summary: "eaten, drunk, flown, written, read; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Alguna vez has volado en avión?"] },
  items: [
    TEXT("📚 I've eaten snails, I've flown in a plane — más participios."),
    GRAMMAR("Más participios irregulares", "eat → eaten, drink → drunk, fly → flown, write → written, read → read.\nHave you ever eaten snails? I've flown to another country."),
    deck("Flyers S3D12 — Participios irregulares", [
      ["eaten", "comido (eat)", "I've eaten snails.", "verb"],
      ["drunk", "bebido (drink)", "I've drunk coconut water.", "verb"],
      ["flown", "volado (fly)", "I've flown in a plane.", "verb"],
      ["written", "escrito (write)", "I've written a story.", "verb"],
      ["read", "leído (read)", "I've read that book.", "verb"],
      ["made", "hecho (make)", "I've made a cake.", "verb"],
      ["won", "ganado (win)", "I've won a competition.", "verb"],
      ["swum", "nadado (swim)", "I've swum in the sea.", "verb"],
    ]),
    vocabEx("Participios irregulares 📚", "Elige la opción correcta.", [
      mc("eat → ___", ["eaten", "eated"], 0, "eaten."),
      mc("fly → ___", ["flown", "flied"], 0, "flown."),
      mc("write → ___", ["written", "writed"], 0, "written."),
      mc("win → ___", ["won", "winned"], 0, "won."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe el participio", [
      fb("🎧 'I've eaten snails in France, they were interesting!' ¿Qué ha comido? Escribe: ___", ["snails"], "'eaten snails'."),
      fb("🎧 'I've flown in a plane three times.' ¿Qué ha hecho? Escribe: ___", ["flown"], "'flown in a plane'."),
    ]),
    listening(2, "Listening · Parte 2 — Participios irregulares", "Escucha y responde.", "Listen and write. I've eaten snails in France, they were interesting! I've flown in a plane three times.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("Have you ever eaten snails?", ["Yes, I've eaten them once.", "Yes, I've flown once."], 0, "coherente con 'eaten'."),
      mc("Have you ever won a competition?", ["Yes, I've won a swimming competition.", "Yes, I've written a book."], 0, "coherente con 'won'."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Experiencias curiosas", "Habla de experiencias curiosas.", "Di 3 experiencias usando participios irregulares nuevos.", "usar participios irregulares", "I've eaten, I've flown, I've written"),
    SUMMARY("Resumen del Día 12", ["Ya conoces: eaten, drunk, flown, written, read, made, won, swum."]),
    INFO("Tarea para el Día 13", "Mañana: How many times...? y la frecuencia."),
  ],
};

const DAY13 = {
  title: "Día 13 — ¿Cuántas veces? 🔢 · How many times?",
  description: "Frecuencia con presente perfecto: once, twice, many times.",
  pedagogy: { objective: "Expresar frecuencia con presente perfecto.", summary: "once/twice/many times; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Cuántas veces has viajado en avión?"] },
  items: [
    TEXT("🔢 How many times have you...? — expresando frecuencia."),
    GRAMMAR("Frecuencia con presente perfecto", "How many times have you been to the cinema? Three times.\nI've been there once. I've seen it twice. I've tried it many times."),
    deck("Flyers S3D13 — Frecuencia", [
      ["how many times", "¿cuántas veces?", "How many times have you been there?", "phrase"],
      ["once", "una vez", "I've been there once.", "adverb"],
      ["twice", "dos veces", "I've seen it twice.", "adverb"],
      ["three times", "tres veces", "I've tried it three times.", "phrase"],
      ["many times", "muchas veces", "I've done it many times.", "phrase"],
      ["a few times", "varias veces", "I've been there a few times.", "phrase"],
      ["so far", "hasta ahora", "I've read three books so far.", "phrase"],
    ]),
    vocabEx("Frecuencia 🔢", "Elige la opción correcta.", [
      mc("I've been there ___. (una vez)", ["once", "twice"], 0, "once."),
      mc("___ times have you been there? (cuántas)", ["How many", "How much"], 0, "How many times."),
      mc("I've read three books so ___.", ["far", "much"], 0, "so far."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la frecuencia", [
      mc("🎧 'How many times have you been to the cinema? I've been there twice this month.' ¿Cuántas veces?", ["twice", "once"], 0, "'been there twice'."),
      mc("🎧 'I've tried sushi many times, I love it now.' ¿Cuántas veces ha probado el sushi?", ["many times", "once"], 0, "'tried... many times'."),
    ]),
    listening(3, "Listening · Parte 3 — Frecuencia", "Escucha y responde.", "Listen. How many times have you been to the cinema? I've been there twice this month. I've tried sushi many times, I love it now.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "How many ___ (1) have you been to the zoo? I've been there ___ (2) — it's one of my favourite places! I've seen lions many ___ (3).", [
      mc("(1)", ["times", "much"], 0, "times."),
      mc("(2)", ["twice", "two"], 0, "twice."),
      mc("(3)", ["times", "much"], 0, "times."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Cuántas veces?", "Responde sobre la frecuencia de tus experiencias.", "Di cuántas veces has hecho 3 cosas (once/twice/many times).", "expresar frecuencia", "I've been there once, I've seen it twice"),
    SUMMARY("Resumen del Día 13", ["Puedes expresar frecuencia: once, twice, three times, many times, so far."]),
    INFO("Tarea para el Día 14", "Mañana: viajes y lugares del mundo."),
  ],
};

const DAY14 = {
  title: "Día 14 — Viajes por el mundo 🗺️ · Around the world",
  description: "Vocabulario de viajes, transporte y lugares famosos.",
  pedagogy: { objective: "Hablar de viajes y lugares.", summary: "Viajes; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿A qué país te gustaría viajar?"] },
  items: [
    TEXT("🗺️ Let's travel around the world! — lugares y transporte."),
    GRAMMAR("Viajes", "I've travelled by plane, train and ship.\nHave you ever visited a famous place? I've visited the Eiffel Tower."),
    deck("Flyers S3D14 — Viajes", [
      ["abroad", "al extranjero", "I've travelled abroad.", "word"],
      ["ship", "barco", "We travelled by ship.", "transport"],
      ["famous place", "lugar famoso", "A famous place to visit.", "phrase"],
      ["tourist", "turista", "Many tourists visit here.", "word"],
      ["culture", "cultura", "I love learning about culture.", "word"],
      ["foreign", "extranjero/a", "A foreign country.", "adjective"],
      ["passport", "pasaporte", "Don't forget your passport!", "object"],
      ["explore", "explorar", "I want to explore the world.", "verb"],
    ]),
    vocabEx("Viajes 🗺️", "Elige la opción correcta.", [
      mc("I've travelled ___. (al extranjero)", ["abroad", "foreign"], 0, "abroad."),
      mc("Don't forget your ___! (pasaporte)", ["passport", "culture"], 0, "passport."),
      mc("I want to ___ the world. (explorar)", ["explore", "tourist"], 0, "explore."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha sobre viajes", [
      mc("🎧 'I've travelled abroad many times, I love exploring new cultures.' ¿Qué le gusta?", ["exploring cultures", "staying home"], 0, "'love exploring new cultures'."),
      mc("🎧 'Have you got your passport? We're visiting a famous place today.' ¿Qué necesita?", ["passport", "ticket"], 0, "'Have you got your passport?'"),
    ]),
    listening(4, "Listening · Parte 4 — Viajes", "Escucha y responde.", "Listen. I've travelled abroad many times, I love exploring new cultures. Have you got your passport? We're visiting a famous place today.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "I've travelled abroad three times. I've visited a famous tower in France and I've tried lots of different food. I love exploring new cultures, but I've never travelled by ship.", [
      mc("He has visited France. ¿Está bien?", ["Verdadero", "Falso"], 0, "'visited a famous tower in France' — Verdadero."),
      mc("He has travelled by ship. ¿Está bien?", ["Falso", "Verdadero"], 0, "'never travelled by ship', Falso."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis viajes", "Habla de viajes reales o imaginarios.", "Describe un viaje usando presente perfecto y vocabulario de viajes.", "hablar de viajes", "I've travelled, I've visited, I've tried"),
    SUMMARY("Resumen del Día 14", ["Ya conoces: abroad, ship, famous place, tourist, culture, passport, explore."]),
    INFO("Tarea para el Día 15", "Mañana: ¡repaso y tercera prueba!"),
  ],
};

const DAY15 = {
  title: "Día 15 — Repaso de la semana + tercera prueba 🌟",
  description: "Repaso de presente perfecto y viajes. Tercera prueba.",
  pedagogy: { objective: "Repasar la Semana 3.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Cuenta 3 experiencias usando presente perfecto."] },
  items: [
    TEXT("🌟 ¡Tercera semana terminada! Repasamos el presente perfecto y los viajes."),
    GRAMMAR("Repaso de la Semana 3", "Have you ever...? been, seen, eaten, flown. once/twice/many times. abroad, passport."),
    deck("Flyers S3D15 — Repaso mixto", [
      ["have you ever", "¿alguna vez has...?", "Have you ever been to Paris?", "phrase"],
      ["been", "estado/ido", "I've been to London.", "verb"],
      ["eaten", "comido", "I've eaten snails.", "verb"],
      ["flown", "volado", "I've flown in a plane.", "verb"],
      ["twice", "dos veces", "I've seen it twice.", "adverb"],
      ["abroad", "al extranjero", "I've travelled abroad.", "word"],
      ["passport", "pasaporte", "Don't forget your passport!", "object"],
      ["never", "nunca", "I've never tried it.", "adverb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("Have you ___ been to London?", ["ever", "never"], 0, "ever."),
      mc("I've ___ to Paris. (estado)", ["been", "go"], 0, "been."),
      mc("I've ___ snails. (comido)", ["eaten", "eat"], 0, "eaten."),
      mc("I've seen it ___. (dos veces)", ["twice", "two"], 0, "twice."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I've been to Paris twice and I've eaten snails there.' ¿Qué ha hecho?", ["been to Paris, eaten snails", "flown, written"], 0, "'been to Paris'... 'eaten snails'."),
      mc("🎧 'I've never flown abroad, but I've got my passport ready.' ¿Ha volado alguna vez?", ["No, never", "Yes, many times"], 0, "'never flown'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 3", "Escucha y responde.", "Listen and look. I've been to Paris twice and I've eaten snails there. I've never flown abroad, but I've got my passport ready.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "Have you ___ (1) been abroad? Yes, I ___ (2) — I've been to France ___ (3).", [
      mc("(1)", ["ever", "never"], 0, "ever."),
      mc("(2)", ["have", "haven't"], 0, "have."),
      mc("(3)", ["twice", "two"], 0, "twice."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina presente perfecto y viajes.", "Habla 1-2 minutos combinando lo repasado.", "combinar presente perfecto y viajes", "I've been to, I've eaten, I've never"),
    SUMMARY("Resumen de la Semana 3", ["¡Enhorabuena! Terminaste la Semana 3 de Flyers.", "Ahora, tu tercera prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡la ciudad y las direcciones avanzadas!"]),
    INFO("Prueba de la Semana 3 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Experiencias · Have you ever...? · Viajes por el mundo",
  description: "Tercera semana de A2 Flyers: presente perfecto para experiencias (ever/never), participios irregulares (been, eaten, flown, written), frecuencia (once/twice/many times), y vocabulario de viajes.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
