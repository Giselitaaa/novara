/**
 * A1 Movers · Semana 9 — "El pasado ⏳ · My adventures".
 * Pasado simple (verbos regulares e irregulares comunes).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY41 = {
  title: "Día 41 — Ayer... 📅 · Yesterday I played",
  description: "Pasado simple con verbos regulares.",
  pedagogy: { objective: "Usar el pasado simple con verbos regulares.", summary: "Verbos regulares -ed; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Qué hiciste ayer?"] },
  items: [
    TEXT("📅 Yesterday... ¡hablemos del pasado!"),
    GRAMMAR("Pasado simple regular", "play → played, watch → watched, walk → walked.\nYesterday I played football."),
    deck("Movers S9D41 — Verbos regulares", [
      ["played", "jugó/jugué", "I played football yesterday.", "verb"],
      ["watched", "vio/vi", "I watched a film.", "verb"],
      ["walked", "caminó/caminé", "We walked to school.", "verb"],
      ["cleaned", "limpió/limpié", "I cleaned my room.", "verb"],
      ["cooked", "cocinó/cociné", "She cooked dinner.", "verb"],
      ["visited", "visitó/visité", "We visited my grandma.", "verb"],
      ["yesterday", "ayer", "Yesterday I played.", "word"],
      ["last night", "anoche", "Last night I watched TV.", "phrase"],
      ["last week", "la semana pasada", "Last week we visited the zoo.", "phrase"],
      ["finished", "terminó/terminé", "I finished my homework.", "verb"],
    ]),
    vocabEx("Verbos regulares ⏳", "Elige la opción correcta.", [
      mc("Yesterday I ___ football. (jugué)", ["played", "play"], 0, "played."),
      mc("We ___ a film last night. (vimos)", ["watched", "watch"], 0, "watched."),
      mc("I ___ my room. (limpié)", ["cleaned", "clean"], 0, "cleaned."),
      mc("play → ___", ["played", "plaied"], 0, "played."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la acción", [
      mc("🎧 'Yesterday I played football with my friends.' ¿Qué hizo?", ["played football", "watched TV"], 0, "'played football'."),
      mc("🎧 'Last night I watched a great film.' ¿Qué hizo?", ["watched a film", "cleaned the room"], 0, "'watched a film'."),
    ]),
    listening(1, "Listening · Parte 1 — Verbos regulares", "Escucha y responde.", "Listen and match. Yesterday I played football with my friends. Last night I watched a great film.", []),
    READING_HEAD,
    readDefine("Encuentra el pasado", [
      mc("Pasado de 'play': ___", ["played", "plaid"], 0, "played."),
      mc("Pasado de 'watch': ___", ["watched", "watchd"], 0, "watched."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Ayer", "Cuenta qué hiciste ayer.", "Di 3 cosas que hiciste ayer con verbos regulares.", "usar pasado simple regular", "Yesterday I played, I watched, I cleaned"),
    SUMMARY("Resumen del Día 41", ["Ya conoces: played, watched, walked, cleaned, cooked, visited.", "Puedes hablar del pasado con -ed."]),
    INFO("Tarea para el Día 42", "Mañana: verbos irregulares — went, saw, ate."),
  ],
};

const DAY42 = {
  title: "Día 42 — Verbos irregulares 🎒 · I went, I saw, I ate",
  description: "Pasado simple con verbos irregulares comunes.",
  pedagogy: { objective: "Usar verbos irregulares en pasado.", summary: "go/went, see/saw, eat/ate; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Adónde fuiste el fin de semana?"] },
  items: [
    TEXT("🎒 I went, I saw, I ate — verbos irregulares."),
    GRAMMAR("Verbos irregulares", "go → went, see → saw, eat → ate, have → had, go → went.\nI went to the park."),
    deck("Movers S9D42 — Verbos irregulares", [
      ["went", "fue/fui (go)", "I went to the park.", "verb"],
      ["saw", "vio/vi (see)", "I saw a monkey.", "verb"],
      ["ate", "comió/comí (eat)", "I ate a sandwich.", "verb"],
      ["had", "tuvo/tuve (have)", "I had a great day.", "verb"],
      ["came", "vino/vine (come)", "She came to my house.", "verb"],
      ["got", "consiguió/conseguí (get)", "I got a new bike.", "verb"],
      ["did", "hizo/hice (do)", "What did you do?", "verb"],
      ["made", "hizo/hice (make)", "I made a cake.", "verb"],
      ["took", "tomó/tomé (take)", "I took a photo.", "verb"],
      ["bought", "compró/compré (buy)", "I bought a toy.", "verb"],
    ]),
    vocabEx("Verbos irregulares 🎒", "Elige la opción correcta.", [
      mc("go → ___", ["went", "goed"], 0, "went."),
      mc("see → ___", ["saw", "seed"], 0, "saw."),
      mc("eat → ___", ["ate", "eated"], 0, "ate."),
      mc("I ___ a new bike. (conseguí)", ["got", "get"], 0, "got."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe el verbo", [
      fb("🎧 'I went to the zoo and saw a lion.' ¿Qué animal vio? Escribe: ___", ["lion"], "'saw a lion'."),
      fb("🎧 'I ate a big sandwich for lunch.' ¿Qué comió? Escribe: ___", ["sandwich"], "'ate a sandwich'."),
    ]),
    listening(2, "Listening · Parte 2 — Verbos irregulares", "Escucha y responde.", "Listen and write. I went to the zoo and saw a lion. I ate a big sandwich for lunch.", []),
    READING_HEAD,
    readStory("Lee y responde Sí/No", "Last weekend I went to the beach with my family. We saw dolphins in the sea! I ate ice cream and took lots of photos. It was a great day.", [
      mc("They went to the mountains. ¿Está bien?", ["Sí", "No"], 1, "'went to the beach', no mountains."),
      mc("He saw dolphins. ¿Está bien?", ["Sí", "No"], 0, "'saw dolphins' — Sí."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi aventura", "Cuenta una aventura con verbos irregulares.", "Cuenta algo que hiciste con 3 verbos irregulares.", "usar verbos irregulares", "I went, I saw, I ate"),
    SUMMARY("Resumen del Día 42", ["Ya conoces: went, saw, ate, had, came, got, did, made, took, bought."]),
    INFO("Tarea para el Día 43", "Mañana: preguntas en pasado — did you...?"),
  ],
};

const DAY43 = {
  title: "Día 43 — ¿Qué hiciste? ❓ · Did you...?",
  description: "Preguntas y negaciones en pasado simple.",
  pedagogy: { objective: "Formar preguntas y negaciones en pasado.", summary: "Did you...? / I didn't...; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Jugaste al fútbol ayer?"] },
  items: [
    TEXT("❓ Did you...? Preguntamos sobre el pasado."),
    GRAMMAR("Preguntas y negaciones", "Did you play football? Yes, I did. / No, I didn't.\nI didn't go to school yesterday."),
    deck("Movers S9D43 — Preguntas en pasado", [
      ["did you", "¿hiciste...?", "Did you play football?", "phrase"],
      ["didn't", "no (pasado)", "I didn't go to school.", "word"],
      ["yes, I did", "sí", "Did you eat? Yes, I did.", "phrase"],
      ["no, I didn't", "no", "Did you go? No, I didn't.", "phrase"],
      ["when", "cuándo", "When did you go?", "word"],
      ["where", "dónde", "Where did you go?", "word"],
      ["what time", "a qué hora", "What time did you wake up?", "phrase"],
      ["why", "por qué", "Why did you cry?", "word"],
      ["how", "cómo", "How did you travel?", "word"],
      ["who", "quién", "Who did you see?", "word"],
    ]),
    vocabEx("Preguntas en pasado ❓", "Elige la opción correcta.", [
      mc("___ you play football? (pregunta)", ["Did", "Does"], 0, "Did."),
      mc("I ___ go to school. (negación, no fui)", ["didn't", "doesn't"], 0, "didn't."),
      mc("___ did you go? (dónde)", ["Where", "When"], 0, "Where."),
      mc("Did you eat? Yes, I ___.", ["did", "do"], 0, "did."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la respuesta", [
      mc("🎧 'Did you watch the film? Yes, I did, it was great!' ¿Vio la película?", ["Sí", "No"], 0, "'Yes, I did'."),
      mc("🎧 'Did you go to school? No, I didn't, I was sick.' ¿Fue al cole?", ["No", "Sí"], 0, "'No, I didn't'."),
    ]),
    listening(3, "Listening · Parte 3 — Preguntas en pasado", "Escucha y responde.", "Listen. Did you watch the film? Yes, I did, it was great! Did you go to school? No, I didn't, I was sick.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "___ (1) you go to the park yesterday? Yes, I ___ (2). I ___ (3) go to school because I was ill.", [
      mc("(1)", ["Did", "Do"], 0, "Did."),
      mc("(2)", ["did", "do"], 0, "did."),
      mc("(3)", ["didn't", "don't"], 0, "didn't."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Pregúntame", "Responde preguntas sobre ayer.", "Responde: ¿jugaste? ¿comiste algo rico? ¿adónde fuiste?", "responder preguntas en pasado", "Yes, I did, No, I didn't"),
    SUMMARY("Resumen del Día 43", ["Puedes preguntar y responder en pasado: Did you...? Yes, I did / No, I didn't."]),
    INFO("Tarea para el Día 44", "Mañana: mi fin de semana — todo junto."),
  ],
};

const DAY44 = {
  title: "Día 44 — Mi fin de semana 🎉 · My weekend",
  description: "Pasado simple combinado: regulares e irregulares.",
  pedagogy: { objective: "Contar un fin de semana combinando verbos.", summary: "Pasado combinado; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["Cuenta tu último fin de semana."] },
  items: [
    TEXT("🎉 My weekend — ¡cuéntalo todo en pasado!"),
    GRAMMAR("Pasado combinado", "On Saturday I went to the park and played football.\nOn Sunday I watched a film and ate pizza."),
    deck("Movers S9D44 — Mi fin de semana", [
      ["on Saturday", "el sábado", "On Saturday I went out.", "phrase"],
      ["on Sunday", "el domingo", "On Sunday I relaxed.", "phrase"],
      ["in the morning", "por la mañana", "In the morning I played.", "phrase"],
      ["in the afternoon", "por la tarde", "In the afternoon I ate.", "phrase"],
      ["in the evening", "por la noche", "In the evening I watched TV.", "phrase"],
      ["weekend", "fin de semana", "My great weekend.", "word"],
      ["fun", "divertido", "It was so much fun!", "adjective"],
      ["tired", "cansado/a", "I was tired after.", "adjective"],
      ["amazing", "increíble", "It was amazing!", "adjective"],
      ["boring", "aburrido/a", "It was boring.", "adjective"],
    ]),
    vocabEx("Mi fin de semana 🎉", "Elige la opción correcta.", [
      mc("___ Saturday I went to the park.", ["On", "In"], 0, "On Saturday."),
      mc("It was so much ___! (divertido)", ["fun", "boring"], 0, "fun."),
      mc("I was ___ after the party. (cansado)", ["tired", "amazing"], 0, "tired."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha el fin de semana", [
      mc("🎧 'On Saturday I went to the park and played football. It was amazing!' ¿Qué día fue?", ["Saturday", "Sunday"], 0, "'On Saturday'."),
      mc("🎧 'On Sunday I watched a film and ate pizza.' ¿Qué comió?", ["pizza", "ice cream"], 0, "'ate pizza'."),
    ]),
    listening(4, "Listening · Parte 4 — Mi fin de semana", "Escucha y responde.", "Listen. On Saturday I went to the park and played football. It was amazing! On Sunday I watched a film and ate pizza.", []),
    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: went, played, watched, ate\n\nOn Saturday I ___ (1) to the park and ___ (2) football. On Sunday I ___ (3) a film and ___ (4) pizza.", [
      fb("(1)", ["went"], "went."), fb("(2)", ["played"], "played."), fb("(3)", ["watched"], "watched."), fb("(4)", ["ate"], "ate."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi fin de semana", "Cuenta tu fin de semana con 4-5 verbos en pasado.", "Habla 1 minuto sobre tu último fin de semana.", "contar el fin de semana en pasado", "On Saturday I went, I played, On Sunday I watched"),
    SUMMARY("Resumen del Día 44", ["Puedes contar tu fin de semana combinando verbos regulares e irregulares."]),
    INFO("Tarea para el Día 45", "Mañana: ¡repaso y novena prueba!"),
  ],
};

const DAY45 = {
  title: "Día 45 — Repaso de la semana + novena prueba 🌟",
  description: "Repaso del pasado simple. Novena prueba.",
  pedagogy: { objective: "Repasar la Semana 9.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Cuenta 3 cosas que hiciste la semana pasada."] },
  items: [
    TEXT("🌟 ¡Novena semana terminada! Repasamos el pasado simple."),
    GRAMMAR("Repaso de la Semana 9", "played, watched, cleaned. went, saw, ate, had. Did you...? Yes, I did / No, I didn't."),
    deck("Movers S9D45 — Repaso mixto", [
      ["played", "jugó/jugué", "I played football.", "verb"],
      ["went", "fue/fui", "I went to the park.", "verb"],
      ["saw", "vio/vi", "I saw a lion.", "verb"],
      ["ate", "comió/comí", "I ate pizza.", "verb"],
      ["did you", "¿hiciste...?", "Did you play?", "phrase"],
      ["didn't", "no (pasado)", "I didn't go.", "word"],
      ["yesterday", "ayer", "Yesterday I played.", "word"],
      ["weekend", "fin de semana", "My weekend.", "word"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("go → ___", ["went", "goed"], 0, "went."),
      mc("Yesterday I ___ football. (jugué)", ["played", "play"], 0, "played."),
      mc("___ you go? (pregunta)", ["Did", "Does"], 0, "Did."),
      mc("I ___ a sandwich. (comí)", ["ate", "eat"], 0, "ate."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'Yesterday I went to the park and played football.' ¿Qué hizo?", ["went and played", "watched TV"], 0, "'went... and played'."),
      mc("🎧 'Did you eat? Yes, I did, I ate pizza.' ¿Qué comió?", ["pizza", "sandwich"], 0, "'ate pizza'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 9", "Escucha y responde.", "Listen and look. Yesterday I went to the park and played football. Did you eat? Yes, I did, I ate pizza.", []),
    READING_HEAD,
    readWrite("Completa las palabras", [fb("w_nt (fue/fui)", ["went"], "went."), fb("pl_y_d (jugó/jugué)", ["played"], "played."), fb("_te (comió/comí)", ["ate"], "ate.")]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Cuenta tu semana combinando verbos en pasado.", "Habla 1-2 minutos combinando lo repasado.", "combinar pasado simple", "Yesterday I played, I went, I ate"),
    SUMMARY("Resumen de la Semana 9", ["¡Enhorabuena! Terminaste la Semana 9.", "Ahora, tu novena prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡gran repaso integral!"]),
    INFO("Prueba de la Semana 9 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "El pasado · My adventures · Verbos regulares e irregulares",
  description: "Novena semana de A1 Movers: pasado simple con verbos regulares (-ed) e irregulares comunes (went, saw, ate, had), preguntas y negaciones (Did you...? / didn't), y contar el fin de semana.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
