/**
 * A1 Movers · Semana 10 — "Deporte y salud 🏀 · Sports and health".
 * Deportes, partes del cuerpo, sentirse mal, can/could.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenColourWrite, listenChoose, listenScene,
  readDefine, readStory, readGapChoice, readOpenCloze, readWordBox, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY46 = {
  title: "Día 46 — Deportes 🏀 · My favourite sport",
  description: "Vocabulario de deportes.",
  pedagogy: { objective: "Hablar de deportes favoritos.", summary: "Deportes; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Cuál es tu deporte favorito?"] },
  items: [
    TEXT("🏀 What's your favourite sport?"),
    GRAMMAR("Deportes con play/go/do", "play football, play basketball, go swimming, go cycling, do gymnastics."),
    deck("Movers S10D46 — Deportes", [
      ["basketball", "baloncesto", "I play basketball.", "sport"],
      ["volleyball", "voleibol", "She plays volleyball.", "sport"],
      ["gymnastics", "gimnasia", "I do gymnastics.", "sport"],
      ["cycling", "ciclismo", "I go cycling.", "sport"],
      ["skating", "patinaje", "He goes skating.", "sport"],
      ["athletics", "atletismo", "She does athletics.", "sport"],
      ["team", "equipo", "I'm on the team.", "word"],
      ["match", "partido", "We won the match.", "word"],
      ["win", "ganar", "We won!", "verb"],
      ["lose", "perder", "We lost the match.", "verb"],
    ]),
    vocabEx("Deportes 🏀", "Elige la opción correcta.", [
      mc("🏀 = ___", ["basketball", "volleyball"], 0, "basketball."),
      mc("🤸 I do ___.", ["gymnastics", "cycling"], 0, "gymnastics."),
      mc("We ___ the match! (ganamos)", ["won", "lost"], 0, "won."),
      mc("I go ___. (ciclismo)", ["cycling", "skating"], 0, "cycling."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une el deporte", [
      mc("🎧 'My favourite sport is basketball, I play every Saturday.' ¿Qué deporte?", ["basketball", "volleyball"], 0, "'basketball'."),
      mc("🎧 'I do gymnastics twice a week.' ¿Qué hace?", ["gymnastics", "athletics"], 0, "'gymnastics'."),
    ]),
    listening(1, "Listening · Parte 1 — Deportes", "Escucha y responde.", "Listen and match. My favourite sport is basketball, I play every Saturday. I do gymnastics twice a week.", []),
    READING_HEAD,
    readDefine("Encuentra el deporte", [
      mc("Se juega con las manos y una canasta: ___", ["basketball", "cycling"], 0, "basketball."),
      mc("Se hace con una bicicleta: ___", ["cycling", "gymnastics"], 0, "cycling."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi deporte favorito", "Habla de tu deporte favorito.", "Describe tu deporte favorito y por qué te gusta.", "hablar de deportes", "My favourite sport is, I play, I do"),
    SUMMARY("Resumen del Día 46", ["Ya conoces: basketball, volleyball, gymnastics, cycling, skating, athletics."]),
    INFO("Tarea para el Día 47", "Mañana: partes del cuerpo y sentirse mal."),
  ],
};

const DAY47 = {
  title: "Día 47 — Me duele... 🤕 · I've got a headache",
  description: "Partes del cuerpo y expresar dolor/malestar.",
  pedagogy: { objective: "Expresar dolor con 'I've got a...'.", summary: "Partes del cuerpo, dolencias; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué te duele hoy?"] },
  items: [
    TEXT("🤕 I've got a headache — sentirse mal."),
    GRAMMAR("I've got a...", "I've got a headache. I've got a stomachache. I've got a cold.\nWhat's the matter?"),
    deck("Movers S10D47 — Dolencias", [
      ["headache", "dolor de cabeza", "I've got a headache.", "health"],
      ["stomachache", "dolor de estómago", "I've got a stomachache.", "health"],
      ["toothache", "dolor de muelas", "I've got a toothache.", "health"],
      ["cold", "catarro/resfriado", "I've got a cold.", "health"],
      ["cough", "tos", "I've got a cough.", "health"],
      ["fever", "fiebre", "I've got a fever.", "health"],
      ["sore throat", "dolor de garganta", "I've got a sore throat.", "health"],
      ["what's the matter", "¿qué te pasa?", "What's the matter?", "phrase"],
      ["feel ill", "sentirse mal/enfermo", "I feel ill today.", "phrase"],
      ["doctor", "médico/a", "I need to see a doctor.", "word"],
    ]),
    vocabEx("Dolencias 🤕", "Elige la opción correcta.", [
      mc("🤕 I've got a ___. (dolor de cabeza)", ["headache", "cough"], 0, "headache."),
      mc("🤒 I've got a ___. (fiebre)", ["fever", "toothache"], 0, "fever."),
      mc("What's the ___? (¿qué te pasa?)", ["matter", "problem"], 0, "matter."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe la dolencia", [
      fb("🎧 'What's the matter? I've got a stomachache.' Escribe: ___", ["stomachache"], "stomachache."),
      fb("🎧 'I feel ill, I've got a sore throat.' Escribe: ___", ["sore throat"], "sore throat."),
    ]),
    listening(2, "Listening · Parte 2 — Dolencias", "Escucha y responde.", "Listen and write. What's the matter? I've got a stomachache. I feel ill, I've got a sore throat.", []),
    READING_HEAD,
    readStory("Lee y responde Sí/No", "Tom feels ill today. He's got a headache and a fever. He doesn't want to eat because he's got a stomachache too. His mum says he needs to see a doctor.", [
      mc("Tom feels great today. ¿Está bien?", ["Sí", "No"], 1, "'feels ill', no great."),
      mc("Tom has got a fever. ¿Está bien?", ["Sí", "No"], 0, "'got a... fever' — Sí."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Qué te pasa?", "Expresa que te sientes mal.", "Di 3 dolencias usando 'I've got a...'.", "expresar dolor/malestar", "I've got a headache, I've got a cold"),
    SUMMARY("Resumen del Día 47", ["Ya conoces: headache, stomachache, toothache, cold, cough, fever, sore throat."]),
    INFO("Tarea para el Día 48", "Mañana: consejos con should/shouldn't."),
  ],
};

const DAY48 = {
  title: "Día 48 — Deberías... 💊 · You should rest",
  description: "Consejos de salud con should/shouldn't (repaso y ampliación).",
  pedagogy: { objective: "Dar consejos de salud.", summary: "should/shouldn't aplicado a salud; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["Si te duele la cabeza, ¿qué deberías hacer?"] },
  items: [
    TEXT("💊 You should rest — consejos de salud."),
    GRAMMAR("should/shouldn't para salud", "If you've got a headache, you should rest.\nYou shouldn't eat sweets if you've got a toothache."),
    deck("Movers S10D48 — Consejos de salud", [
      ["rest", "descansar", "You should rest.", "verb"],
      ["medicine", "medicina/medicamento", "Take your medicine.", "word"],
      ["drink water", "beber agua", "You should drink water.", "phrase"],
      ["stay in bed", "quedarse en cama", "You should stay in bed.", "phrase"],
      ["see a doctor", "ver a un médico", "You should see a doctor.", "phrase"],
      ["sweets", "caramelos/dulces", "Don't eat sweets.", "word"],
      ["healthy", "saludable", "Eat healthy food.", "adjective"],
      ["get better", "mejorarse", "I hope you get better soon.", "phrase"],
      ["take care", "cuidarse", "Take care of yourself.", "phrase"],
      ["feel better", "sentirse mejor", "I hope you feel better.", "phrase"],
    ]),
    vocabEx("Consejos de salud 💊", "Elige la opción correcta.", [
      mc("If you feel ill, you should ___.", ["rest", "run"], 0, "rest."),
      mc("You should ___ if you've got a cold. (beber agua)", ["drink water", "eat sweets"], 0, "drink water."),
      mc("You ___ eat sweets with a toothache.", ["shouldn't", "should"], 0, "shouldn't."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige el consejo", [
      mc("🎧 'You've got a fever, so you should stay in bed.' ¿Qué consejo da?", ["stay in bed", "go running"], 0, "'should stay in bed'."),
      mc("🎧 'You shouldn't eat sweets, you've got a toothache.' ¿Qué no debería hacer?", ["eat sweets", "drink water"], 0, "'shouldn't eat sweets'."),
    ]),
    listening(3, "Listening · Parte 3 — Consejos de salud", "Escucha y responde.", "Listen. You've got a fever, so you should stay in bed. You shouldn't eat sweets, you've got a toothache.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "If you've got a headache, you ___ (1) rest in a quiet room. If you've got a cold, you should ___ (2) lots of water. You ___ (3) go to school if you've got a fever.", [
      mc("(1)", ["should", "shouldn't"], 0, "should rest."),
      mc("(2)", ["drink", "eat"], 0, "drink."),
      mc("(3)", ["shouldn't", "should"], 0, "shouldn't."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Dando consejos", "Da consejos de salud a un amigo.", "Da 3 consejos para diferentes dolencias.", "dar consejos de salud", "You should rest, You shouldn't eat sweets"),
    SUMMARY("Resumen del Día 48", ["Puedes dar consejos de salud con should/shouldn't."]),
    INFO("Tarea para el Día 49", "Mañana: can/could para habilidades."),
  ],
};

const DAY49 = {
  title: "Día 49 — Yo podía... 🤹 · I could swim when I was 5",
  description: "can/could para habilidades presentes y pasadas.",
  pedagogy: { objective: "Usar can/could para hablar de habilidades.", summary: "can (presente) / could (pasado); Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué podías hacer cuando eras pequeño/a?"] },
  items: [
    TEXT("🤹 I can swim now. I could swim when I was five!"),
    GRAMMAR("can / could", "I can ride a bike now.\nI could read when I was four.\nCan you swim? Yes, I can. / No, I can't."),
    deck("Movers S10D49 — can / could", [
      ["can", "poder (presente/habilidad)", "I can ride a bike.", "modal"],
      ["can't", "no poder (presente)", "I can't swim yet.", "modal"],
      ["could", "podía (pasado)", "I could read when I was four.", "modal"],
      ["couldn't", "no podía (pasado)", "I couldn't swim last year.", "modal"],
      ["ride a bike", "montar en bici", "I can ride a bike.", "phrase"],
      ["swim", "nadar", "I can swim now.", "verb"],
      ["skip", "saltar a la cuerda", "I can skip.", "verb"],
      ["juggle", "hacer malabares", "I can juggle!", "verb"],
      ["when I was...", "cuando tenía...", "When I was five, I could read.", "phrase"],
      ["ability", "habilidad", "A new ability!", "word"],
    ]),
    vocabEx("can / could 🤹", "Elige la opción correcta.", [
      mc("I ___ swim now. (puedo)", ["can", "could"], 0, "can."),
      mc("I ___ read when I was four. (podía)", ["could", "can"], 0, "could."),
      mc("I ___ swim last year. (no podía)", ["couldn't", "can't"], 0, "couldn't."),
      mc("Can you juggle? Yes, I ___.", ["can", "could"], 0, "can."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha sobre las habilidades", [
      mc("🎧 'I can ride a bike now, but I couldn't last year.' ¿Qué puede hacer ahora?", ["ride a bike", "swim"], 0, "'can ride a bike now'."),
      mc("🎧 'When I was five, I could already read.' ¿A qué edad podía leer?", ["five", "seven"], 0, "'when I was five'."),
    ]),
    listening(4, "Listening · Parte 4 — can/could", "Escucha y responde.", "Listen. I can ride a bike now, but I couldn't last year. When I was five, I could already read.", []),
    READING_HEAD,
    readWordBox("Completa con las palabras de la caja", "Caja: can, could, couldn't, can't\n\nI ___ (1) swim now, but I ___ (2) when I was three. I ___ (3) ride a bike yet, but my sister ___ (4) ride one when she was six.", [
      fb("(1)", ["can"], "can."), fb("(2)", ["couldn't"], "couldn't."), fb("(3)", ["can't"], "can't."), fb("(4)", ["could"], "could."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis habilidades", "Habla de lo que puedes y podías hacer.", "Di 2 cosas que puedes hacer y 2 que podías hacer de pequeño/a.", "usar can/could", "I can swim, I could read when I was four"),
    SUMMARY("Resumen del Día 49", ["Puedes usar can (presente) y could (pasado) para habilidades."]),
    INFO("Tarea para el Día 50", "Mañana: ¡repaso y décima prueba!"),
  ],
};

const DAY50 = {
  title: "Día 50 — Repaso de la semana + décima prueba 🌟",
  description: "Repaso de deportes, salud y can/could. Décima prueba.",
  pedagogy: { objective: "Repasar la Semana 10.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["¿Qué deporte puedes hacer bien?"] },
  items: [
    TEXT("🌟 ¡Décima semana terminada! Repasamos deportes, salud y can/could."),
    GRAMMAR("Repaso de la Semana 10", "basketball, gymnastics. headache, cold. should/shouldn't. can/could."),
    deck("Movers S10D50 — Repaso mixto", [
      ["basketball", "baloncesto", "I play basketball.", "sport"],
      ["headache", "dolor de cabeza", "I've got a headache.", "health"],
      ["rest", "descansar", "You should rest.", "verb"],
      ["can", "poder (presente)", "I can swim.", "modal"],
      ["could", "podía (pasado)", "I could read at four.", "modal"],
      ["should", "deberías", "You should rest.", "modal"],
      ["cold", "catarro", "I've got a cold.", "health"],
      ["win", "ganar", "We won!", "verb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I ___ a headache. (tengo)", ["have got", "has got"], 0, "have got."),
      mc("You should ___. (descansar)", ["rest", "run"], 0, "rest."),
      mc("I ___ swim now. (puedo)", ["can", "could"], 0, "can."),
      mc("I ___ swim when I was four. (podía)", ["could", "can"], 0, "could."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I've got a headache, I should rest.' ¿Qué le pasa?", ["headache", "cold"], 0, "'headache'."),
      mc("🎧 'I can swim now, but I couldn't last year.' ¿Qué puede hacer ahora?", ["swim", "ride a bike"], 0, "'can swim now'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 10", "Escucha y responde.", "Listen and look. I've got a headache, I should rest. I can swim now, but I couldn't last year.", []),
    READING_HEAD,
    readWrite("Completa las palabras", [fb("h__d_che (dolor de cabeza)", ["headache"], "headache."), fb("c_n (puedo)", ["can"], "can."), fb("c__ld (podía)", ["could"], "could.")]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina deportes, salud y habilidades.", "Habla 1-2 minutos combinando lo repasado.", "combinar deportes, salud, can/could", "I play basketball, I've got a headache, I can swim"),
    SUMMARY("Resumen de la Semana 10", ["¡Enhorabuena! Terminaste la Semana 10.", "Ahora, tu décima prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡gran repaso final!"]),
    INFO("Prueba de la Semana 10 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Deportes y salud · Sports and health · can/could",
  description: "Décima semana de A1 Movers: deportes, dolencias con 'I've got a...', consejos de salud con should/shouldn't, y can/could para habilidades presentes y pasadas.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
