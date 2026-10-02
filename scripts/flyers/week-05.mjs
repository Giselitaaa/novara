/**
 * A2 Flyers · Semana 5 — "Normas y reglas 📏 · Must and mustn't".
 * La escuela, obligaciones (must) y prohibiciones (mustn't).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenForm, listenChoose, listenTrueFalse, listenScene,
  readDefine, readDialogue, readGapChoice, readTrueFalse, readOpenCloze, writeGuided, writeStory,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const DAY21 = {
  title: "Día 21 — Asignaturas y horario 📚 · School subjects",
  description: "Asignaturas escolares y el horario.",
  pedagogy: { objective: "Hablar de asignaturas escolares.", summary: "Asignaturas; Listening P1, Reading & Writing P1, Speaking.", reviewPrompts: ["¿Cuál es tu asignatura favorita?"] },
  items: [
    TEXT("📚 My favourite subject is... — hablamos del colegio."),
    GRAMMAR("Asignaturas", "My favourite subject is Science. I'm good at Maths but I'm not very good at History."),
    deck("Flyers S5D21 — Asignaturas", [
      ["Science", "Ciencias", "I love Science.", "subject"],
      ["History", "Historia", "History is interesting.", "subject"],
      ["Geography", "Geografía", "We study Geography.", "subject"],
      ["ICT", "Informática", "ICT is my favourite.", "subject"],
      ["PE", "Educación Física", "I love PE.", "subject"],
      ["Art", "Arte", "I'm good at Art.", "subject"],
      ["timetable", "horario", "Check the school timetable.", "word"],
      ["subject", "asignatura", "What's your favourite subject?", "word"],
    ]),
    vocabEx("Asignaturas 📚", "Elige la opción correcta.", [
      mc("I love ___. (Ciencias)", ["Science", "History"], 0, "Science."),
      mc("What's your favourite ___?", ["subject", "timetable"], 0, "subject."),
      mc("I'm good at ___. (Arte)", ["Art", "PE"], 0, "Art."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y une la asignatura", [
      mc("🎧 'My favourite subject is Science, I love doing experiments.' ¿Cuál es su asignatura favorita?", ["Science", "History"], 0, "'favourite subject is Science'."),
      mc("🎧 'I'm really good at Art, I love painting in class.' ¿En qué es buena?", ["Art", "PE"], 0, "'good at Art'."),
    ]),
    listening(1, "Listening · Parte 1 — Asignaturas", "Escucha y responde.", "Listen and match. My favourite subject is Science, I love doing experiments. I'm really good at Art, I love painting in class.", []),
    READING_HEAD,
    readDefine("Encuentra la asignatura", [
      mc("Estudiamos mapas y países: ___", ["Geography", "History"], 0, "Geography."),
      mc("Usamos ordenadores: ___", ["ICT", "PE"], 0, "ICT."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Mis asignaturas", "Habla de tus asignaturas favoritas.", "Di tu asignatura favorita y en qué eres bueno/a.", "hablar de asignaturas", "My favourite subject is, I'm good at"),
    SUMMARY("Resumen del Día 21", ["Ya conoces: Science, History, Geography, ICT, PE, Art."]),
    INFO("Tarea para el Día 22", "Mañana: las normas del colegio con must."),
  ],
};

const DAY22 = {
  title: "Día 22 — Debes... 📏 · You must wear a uniform",
  description: "Obligaciones con 'must'.",
  pedagogy: { objective: "Expresar obligaciones con 'must'.", summary: "must; Listening P2, Reading & Writing P2, Speaking.", reviewPrompts: ["¿Qué normas hay en tu colegio?"] },
  items: [
    TEXT("📏 You must wear a uniform — las normas del colegio."),
    GRAMMAR("must para obligaciones", "You must wear a uniform. Students must arrive on time.\nMust I do my homework? Yes, you must."),
    deck("Flyers S5D22 — must", [
      ["must", "deber (obligación)", "You must wear a uniform.", "modal"],
      ["uniform", "uniforme", "We wear a uniform.", "word"],
      ["rule", "norma/regla", "Follow the rules.", "word"],
      ["arrive on time", "llegar puntual", "Students must arrive on time.", "phrase"],
      ["homework", "tarea/deberes", "Do your homework.", "word"],
      ["obey", "obedecer", "You must obey the rules.", "verb"],
      ["important", "importante", "It's important to follow rules.", "adjective"],
    ]),
    vocabEx("must 📏", "Elige la opción correcta.", [
      mc("You ___ wear a uniform. (debes)", ["must", "can"], 0, "must."),
      mc("Students must arrive on ___.", ["time", "foot"], 0, "time."),
      mc("Follow the ___. (normas)", ["rules", "subjects"], 0, "rules."),
    ]),
    LISTENING_HEAD,
    listenForm("Escucha y escribe la norma", [
      fb("🎧 'At our school, students must wear a uniform every day.' ¿Qué deben llevar? Escribe: ___", ["uniform"], "'must wear a uniform'."),
      fb("🎧 'We must arrive on time, the gate closes at nine.' ¿A qué hora cierra la puerta? Escribe: ___", ["nine"], "'closes at nine'."),
    ]),
    listening(2, "Listening · Parte 2 — Normas con must", "Escucha y responde.", "Listen and write. At our school, students must wear a uniform every day. We must arrive on time, the gate closes at nine.", []),
    READING_HEAD,
    readDialogue("Lee y elige la respuesta", [
      mc("What must we wear at school?", ["We must wear a uniform.", "We must play football."], 0, "obligación de uniforme."),
      mc("Must we do our homework?", ["Yes, you must.", "Yes, you can."], 0, "respuesta a must."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Las normas de mi colegio", "Habla de las normas de tu colegio.", "Describe 3 normas de tu colegio usando 'must'.", "expresar obligaciones", "You must wear, Students must arrive"),
    SUMMARY("Resumen del Día 22", ["Puedes expresar obligaciones con 'must': wear a uniform, arrive on time, obey the rules."]),
    INFO("Tarea para el Día 23", "Mañana: lo que no se puede hacer — mustn't."),
  ],
};

const DAY23 = {
  title: "Día 23 — No debes... 🚫 · You mustn't run in the corridor",
  description: "Prohibiciones con 'mustn't'.",
  pedagogy: { objective: "Expresar prohibiciones con 'mustn't'.", summary: "mustn't; Listening P3, Reading & Writing P3, Speaking.", reviewPrompts: ["¿Qué está prohibido en tu colegio?"] },
  items: [
    TEXT("🚫 You mustn't run in the corridor — prohibiciones."),
    GRAMMAR("mustn't para prohibiciones", "You mustn't run in the corridor. Students mustn't use phones in class.\nmustn't (prohibido) ≠ don't have to (no es necesario)."),
    deck("Flyers S5D23 — mustn't", [
      ["mustn't", "no deber (prohibición)", "You mustn't shout.", "modal"],
      ["corridor", "pasillo", "Don't run in the corridor.", "place"],
      ["shout", "gritar", "You mustn't shout in class.", "verb"],
      ["phone", "teléfono", "You mustn't use your phone.", "word"],
      ["forbidden", "prohibido/a", "It's forbidden to run.", "adjective"],
      ["dangerous", "peligroso/a", "Running there is dangerous.", "adjective"],
      ["don't have to", "no es necesario", "You don't have to wear a coat.", "phrase"],
    ]),
    vocabEx("mustn't 🚫", "Elige la opción correcta.", [
      mc("You ___ run in the corridor. (no debes)", ["mustn't", "must"], 0, "mustn't."),
      mc("You mustn't use your ___ in class.", ["phone", "book"], 0, "phone."),
      mc("Running there is ___. (peligroso)", ["dangerous", "forbidden"], 0, "dangerous."),
    ]),
    LISTENING_HEAD,
    listenChoose("Escucha y elige la prohibición", [
      mc("🎧 'You mustn't run in the corridor, it's dangerous.' ¿Qué está prohibido?", ["running in the corridor", "wearing a uniform"], 0, "'mustn't run in the corridor'."),
      mc("🎧 'Students mustn't use their phones during class.' ¿Qué no pueden usar?", ["phones", "books"], 0, "'mustn't use their phones'."),
    ]),
    listening(3, "Listening · Parte 3 — mustn't", "Escucha y responde.", "Listen. You mustn't run in the corridor, it's dangerous. Students mustn't use their phones during class.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "At school, you ___ (1) run in the corridor because it's dangerous. You also ___ (2) use your phone during lessons. But you don't have ___ (3) wear a tie.", [
      mc("(1)", ["mustn't", "must"], 0, "mustn't run."),
      mc("(2)", ["mustn't", "must"], 0, "mustn't use."),
      mc("(3)", ["to", "a"], 0, "don't have to."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Lo que está prohibido", "Habla de lo que está prohibido en tu colegio.", "Describe 3 prohibiciones de tu colegio usando 'mustn't'.", "expresar prohibiciones", "You mustn't run, You mustn't shout"),
    SUMMARY("Resumen del Día 23", ["Puedes expresar prohibiciones con 'mustn't': run, shout, use your phone."]),
    INFO("Tarea para el Día 24", "Mañana: normas en otros lugares — biblioteca, museo, piscina."),
  ],
};

const DAY24 = {
  title: "Día 24 — Normas en otros lugares 🏛️ · Rules everywhere",
  description: "Normas en la biblioteca, el museo y la piscina.",
  pedagogy: { objective: "Aplicar must/mustn't a diferentes lugares.", summary: "must/mustn't en contexto; Listening P4, Reading & Writing P4, Speaking.", reviewPrompts: ["¿Qué normas hay en una biblioteca o en una piscina?"] },
  items: [
    TEXT("🏛️ Rules everywhere — en la biblioteca, el museo y la piscina."),
    GRAMMAR("Normas en contexto", "In the library, you must be quiet. In the museum, you mustn't touch the paintings.\nAt the swimming pool, you must wear a swimsuit."),
    deck("Flyers S5D24 — Normas en contexto", [
      ["quiet", "silencioso/en silencio", "You must be quiet in the library.", "adjective"],
      ["touch", "tocar", "You mustn't touch the paintings.", "verb"],
      ["painting", "pintura/cuadro", "Don't touch the painting.", "word"],
      ["swimming pool", "piscina", "You must wear a swimsuit at the pool.", "place"],
      ["museum", "museo", "Visit the museum.", "place"],
      ["lifeguard", "socorrista", "Listen to the lifeguard.", "word"],
      ["sign", "señal/cartel", "Read the sign.", "word"],
    ]),
    vocabEx("Normas en contexto 🏛️", "Elige la opción correcta.", [
      mc("You must be ___ in the library.", ["quiet", "loud"], 0, "quiet."),
      mc("You mustn't ___ the paintings. (tocar)", ["touch", "see"], 0, "touch."),
      mc("Listen to the ___ at the pool.", ["lifeguard", "museum"], 0, "lifeguard."),
    ]),
    LISTENING_HEAD,
    listenScene("Escucha sobre las normas", [
      mc("🎧 'In the museum, you mustn't touch the paintings, just look.' ¿Qué no debes hacer?", ["touch paintings", "read signs"], 0, "'mustn't touch the paintings'."),
      mc("🎧 'At the swimming pool, you must listen to the lifeguard.' ¿A quién debes escuchar?", ["the lifeguard", "the teacher"], 0, "'listen to the lifeguard'."),
    ]),
    listening(4, "Listening · Parte 4 — Normas en contexto", "Escucha y responde.", "Listen. In the museum, you mustn't touch the paintings, just look. At the swimming pool, you must listen to the lifeguard.", []),
    READING_HEAD,
    readTrueFalse("Lee y marca Verdadero/Falso", "In the library, you must be quiet so people can read and study. In the museum, you mustn't touch the paintings — you can only look at them. At the swimming pool, you must always listen to the lifeguard.", [
      mc("You can shout in the library. ¿Está bien?", ["Falso", "Verdadero"], 0, "'must be quiet', no shout."),
      mc("You mustn't touch the paintings in the museum. ¿Está bien?", ["Verdadero", "Falso"], 0, "'mustn't touch the paintings' — Verdadero."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Normas en diferentes lugares", "Habla de normas en diferentes lugares.", "Describe las normas de 2 lugares (biblioteca, museo, piscina).", "aplicar must/mustn't en contexto", "In the library, you must, In the museum, you mustn't"),
    SUMMARY("Resumen del Día 24", ["Puedes aplicar must/mustn't a diferentes lugares: library, museum, swimming pool."]),
    INFO("Tarea para el Día 25", "Mañana: ¡repaso y quinta prueba!"),
  ],
};

const DAY25 = {
  title: "Día 25 — Repaso de la semana + quinta prueba 🌟",
  description: "Repaso de asignaturas, must y mustn't. Quinta prueba.",
  pedagogy: { objective: "Repasar la Semana 5.", summary: "Repaso; Listening, Reading & Writing, Speaking; prueba.", reviewPrompts: ["Describe las normas de tu colegio combinando must y mustn't."] },
  items: [
    TEXT("🌟 ¡Quinta semana terminada! Repasamos asignaturas, must y mustn't."),
    GRAMMAR("Repaso de la Semana 5", "Science, Art, PE. must wear a uniform. mustn't run, mustn't shout. quiet, touch."),
    deck("Flyers S5D25 — Repaso mixto", [
      ["Science", "Ciencias", "I love Science.", "subject"],
      ["must", "deber (obligación)", "You must wear a uniform.", "modal"],
      ["mustn't", "no deber (prohibición)", "You mustn't shout.", "modal"],
      ["uniform", "uniforme", "We wear a uniform.", "word"],
      ["corridor", "pasillo", "Don't run in the corridor.", "place"],
      ["quiet", "en silencio", "Be quiet in the library.", "adjective"],
      ["rule", "norma", "Follow the rules.", "word"],
      ["touch", "tocar", "Don't touch the paintings.", "verb"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("I love ___. (Ciencias)", ["Science", "History"], 0, "Science."),
      mc("You ___ wear a uniform. (debes)", ["must", "mustn't"], 0, "must."),
      mc("You ___ run in the corridor. (no debes)", ["mustn't", "must"], 0, "mustn't."),
      mc("Be ___ in the library.", ["quiet", "loud"], 0, "quiet."),
    ]),
    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'At school, we must wear a uniform and we mustn't use our phones.' ¿Qué debe llevar?", ["a uniform", "a book"], 0, "'must wear a uniform'."),
      mc("🎧 'In the library, you must be quiet, you mustn't shout.' ¿Qué debe hacer?", ["be quiet", "run"], 0, "'must be quiet'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 5", "Escucha y responde.", "Listen and look. At school, we must wear a uniform and we mustn't use our phones. In the library, you must be quiet, you mustn't shout.", []),
    READING_HEAD,
    readGapChoice("Elige la opción correcta", "At our school, students ___ (1) wear a uniform. We ___ (2) run in the corridor because it's dangerous. In the library, we must be ___ (3).", [
      mc("(1)", ["must", "mustn't"], 0, "must wear."),
      mc("(2)", ["mustn't", "must"], 0, "mustn't run."),
      mc("(3)", ["quiet", "loud"], 0, "quiet."),
    ]),
    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina asignaturas, must y mustn't.", "Habla 1-2 minutos combinando lo repasado.", "combinar asignaturas, must, mustn't", "My favourite subject is, You must, You mustn't"),
    SUMMARY("Resumen de la Semana 5", ["¡Enhorabuena! Terminaste la Semana 5 de Flyers.", "Ahora, tu quinta prueba. ¡Cuenta tus aciertos! 🌟", "La semana que viene: ¡la comida y los restaurantes!"]),
    INFO("Prueba de la Semana 5 🌟", "No hay aprobado ni suspenso — ¡sigue practicando!"),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "Normas y reglas · Must and mustn't · El colegio",
  description: "Quinta semana de A2 Flyers: asignaturas escolares, obligaciones con 'must', prohibiciones con 'mustn't', y normas aplicadas a distintos lugares (biblioteca, museo, piscina).",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
