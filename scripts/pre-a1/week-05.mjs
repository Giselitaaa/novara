/**
 * Pre-A1 Starters · Semana 5 — "El cole 🎒 · in / on / under".
 * Las cosas del cole y las preposiciones de lugar in/on/under.
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 21 ─────────────────────────
const DAY21 = {
  title: "Día 21 — Las cosas del cole 🎒 · It's a...",
  description: "El material escolar básico.",
  pedagogy: {
    objective: "Nombrar objetos del cole.",
    summary: "Material escolar; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Qué llevas en tu mochila? Dilo en inglés."],
  },
  items: [
    TEXT("🎒 ¡Hoy vamos al cole! Let's open our school bag."),
    GRAMMAR("Repaso: It's a...", "It's a + objeto.\nIt's a pencil. ✏️ (Es un lápiz)\nIt's a book. 📖 (Es un libro)"),
    deck("Pre-A1 S5D21 — El cole", [
      ["pencil", "lápiz", "It's a pencil. ✏️", "school"],
      ["pen", "bolígrafo", "It's a pen. 🖊️", "school"],
      ["book", "libro", "It's a book. 📖", "school"],
      ["bag", "mochila", "It's my bag. 🎒", "school"],
      ["rubber", "goma de borrar", "It's a rubber.", "school"],
      ["ruler", "regla", "It's a ruler. 📏", "school"],
      ["chair", "silla", "It's a chair. 🪑", "school"],
      ["table", "mesa", "It's a table.", "school"],
      ["school", "cole/colegio", "I like school! 🏫", "word"],
      ["teacher", "profesor/a", "My teacher is nice. 🧑‍🏫", "word"],
    ]),
    vocabEx("¿Qué es? 🎒", "Elige la palabra correcta.", [
      mc("✏️ It's a ___.", ["pencil", "pen", "book"], 0, "✏️ = pencil."),
      mc("📖 It's a ___.", ["bag", "book", "ruler"], 1, "📖 = book."),
      mc("🎒 It's my ___.", ["bag", "chair", "table"], 0, "🎒 = bag."),
      mc("📏 It's a ___.", ["ruler", "rubber", "pen"], 0, "📏 = ruler."),
      mc("🪑 It's a ___.", ["table", "chair", "book"], 1, "🪑 = chair."),
      mc("🏫 = ___", ["school", "teacher", "bag"], 0, "🏫 = school."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y encuentra el objeto", [
      mc("🎧 'It's a pencil.' ¿Qué es?", ["✏️ lápiz", "🖊️ boli", "📖 libro"], 0, "'a pencil' → ✏️."),
      mc("🎧 'This is my school bag.' ¿Qué es?", ["🎒 mochila", "🪑 silla", "📏 regla"], 0, "'school bag' → 🎒."),
      mc("🎧 'My teacher is nice.' ¿De quién habla?", ["🧑‍🏫 profesor/a", "👩 mamá", "👧 hermana"], 0, "'my teacher' → 🧑‍🏫."),
      mc("🎧 'It's a book.' ¿Qué es?", ["📖 libro", "✏️ lápiz", "🪑 silla"], 0, "'a book' → 📖."),
      mc("🎧 'I like school!' ¿Qué le gusta?", ["🏫 el cole", "🎒 la mochila", "📏 la regla"], 0, "'I like school' → 🏫."),
    ]),
    listening(1, "Listening · Parte 1 — El cole", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. It's a pencil. This is my school bag. My teacher is nice. It's a book. I like school!", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("✏️ = 'pencil'. ¿Está bien?", ["Sí", "No"], 0, "Sí, ✏️ es pencil."),
      mc("📖 = 'bag'. ¿Está bien?", ["Sí", "No"], 1, "No: 📖 es book, no bag."),
      mc("🪑 = 'chair'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 🪑 es chair."),
      mc("'It's a ruler' significa 'Es una regla'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi mochila", "Saca objetos de tu mochila y descríbelos: 'It's a...'.", "Describe 4 objetos de tu mochila en inglés.", "nombrar material escolar", "It's a pencil, It's a book, It's a rubber"),

    SUMMARY("Resumen del Día 21", [
      "Ya conoces: pencil, pen, book, bag, rubber, ruler, chair, table, school, teacher.",
      "Puedes nombrar objetos del cole: 'It's a...'",
    ]),
    INFO("Tarea para el Día 22", "Repasa el material escolar. Mañana: ¿dónde está? (in/on/under)"),
  ],
};

// ───────────────────────── DÍA 22 ─────────────────────────
const DAY22 = {
  title: "Día 22 — ¿Dónde está? 🔍 · in / on / under",
  description: "Las preposiciones de lugar: in, on, under.",
  pedagogy: {
    objective: "Localizar objetos con in/on/under.",
    summary: "in/on/under; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Puedes decir dónde está tu lápiz ahora mismo en inglés?"],
  },
  items: [
    TEXT("🔍 ¿Dónde está? Where is it? Hoy: in, on, under."),
    GRAMMAR("in / on / under", "in = dentro de. It's in the bag. 🎒\non = encima de. It's on the table.\nunder = debajo de. It's under the chair."),
    deck("Pre-A1 S5D22 — in/on/under", [
      ["in", "dentro de/en", "It's in the bag. 🎒", "preposition"],
      ["on", "encima de/sobre", "It's on the table.", "preposition"],
      ["under", "debajo de", "It's under the chair.", "preposition"],
      ["where", "dónde", "Where is my pencil?", "word"],
      ["is", "está", "Where is it?", "word"],
      ["look", "mirar/buscar", "Let's look for it! 🔍", "verb"],
      ["find", "encontrar", "I can find it!", "verb"],
      ["box", "caja", "It's in the box. 📦", "object"],
      ["floor", "suelo", "It's on the floor.", "object"],
      ["bed", "cama", "It's under the bed. 🛏️", "object"],
    ]),
    vocabEx("¿Dónde está? 🔍", "Elige la preposición correcta.", [
      mc("🎒 (dentro) It's ___ the bag.", ["in", "on", "under"], 0, "in the bag."),
      mc("(encima de la mesa) It's ___ the table.", ["in", "on", "under"], 1, "on the table."),
      mc("🛏️ (debajo) It's ___ the bed.", ["in", "on", "under"], 2, "under the bed."),
      mc("📦 (dentro) It's ___ the box.", ["in", "on", "under"], 0, "in the box."),
      mc("(debajo de la silla) It's ___ the chair.", ["in", "on", "under"], 2, "under the chair."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y encuentra el lápiz", [
      mc("🎧 'It's in the bag.' ¿Dónde está?", ["dentro de la mochila", "encima de la mesa", "debajo de la silla"], 0, "'in the bag' → dentro."),
      mc("🎧 'It's on the table.' ¿Dónde está?", ["dentro", "encima de la mesa", "debajo"], 1, "'on the table' → encima."),
      mc("🎧 'It's under the bed.' ¿Dónde está?", ["dentro de la cama", "encima de la cama", "debajo de la cama"], 2, "'under the bed' → debajo."),
      mc("🎧 'Where is my pencil? It's on the floor.' ¿Dónde está el lápiz?", ["en el suelo", "en la mochila", "debajo de la silla"], 0, "'on the floor' → en el suelo."),
      mc("🎧 'It's in the box.' ¿Dónde está?", ["dentro de la caja", "encima de la caja", "debajo de la caja"], 0, "'in the box' → dentro."),
    ]),
    listening(2, "Listening · Parte 2 — in/on/under", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. It's in the bag. It's on the table. It's under the bed. Where is my pencil? It's on the floor. It's in the box.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("🎒 Where's the pencil? It's ___ the bag.", ["in"], "in the bag."),
      fb("(encima) Where's the book? It's ___ the table.", ["on"], "on the table."),
      fb("🛏️ Where's the ball? It's ___ the bed.", ["under"], "under the bed."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · ¿Dónde está?", "Esconde un objeto (lápiz, juguete) y descríbelo: 'It's in/on/under the...'.", "Esconde 3 objetos y describe dónde están.", "usar in/on/under", "It's in the bag, It's on the table, It's under the chair"),

    SUMMARY("Resumen del Día 22", [
      "Ya conoces: in (dentro), on (encima), under (debajo).",
      "Puedes decir dónde está algo: 'It's in/on/under the...'",
    ]),
    INFO("Tarea para el Día 23", "Practica esconder y encontrar objetos. Mañana: los números 11-20."),
  ],
};

// ───────────────────────── DÍA 23 ─────────────────────────
const DAY23 = {
  title: "Día 23 — Números 11-20 🔢 · Big numbers!",
  description: "Los números del 11 al 20.",
  pedagogy: {
    objective: "Contar del 11 al 20 en inglés.",
    summary: "Números 11-20; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes contar del 1 al 20 en inglés?"],
  },
  items: [
    TEXT("🔢 ¡Números grandes! Del 11 al 20."),
    GRAMMAR("Números 11-20", "11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen · 16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen · 20 twenty"),
    deck("Pre-A1 S5D23 — Números 11-20", [
      ["eleven", "once", "Eleven pencils. ✏️×11", "number"],
      ["twelve", "doce", "Twelve books. 📖×12", "number"],
      ["thirteen", "trece", "Thirteen stars. ⭐×13", "number"],
      ["fourteen", "catorce", "Fourteen balls.", "number"],
      ["fifteen", "quince", "Fifteen cats.", "number"],
      ["sixteen", "dieciséis", "Sixteen birds.", "number"],
      ["seventeen", "diecisiete", "Seventeen apples.", "number"],
      ["eighteen", "dieciocho", "Eighteen dogs.", "number"],
      ["nineteen", "diecinueve", "Nineteen fingers... no!", "number"],
      ["twenty", "veinte", "Twenty children. 🧒×20", "number"],
    ]),
    vocabEx("Números grandes 🔢", "Elige el número correcto.", [
      fb("11 = ___", ["eleven"], "11 = eleven."),
      fb("15 = ___", ["fifteen"], "15 = fifteen."),
      fb("20 = ___", ["twenty"], "20 = twenty."),
      fb("13 = ___", ["thirteen"], "13 = thirteen."),
      fb("18 = ___", ["eighteen"], "18 = eighteen."),
      fb("12 = ___", ["twelve"], "12 = twelve."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe el número", [
      fb("🎧 'Eleven pencils.' Escribe el número: ___", ["11"], "eleven = 11."),
      fb("🎧 'Fifteen stars.' Escribe el número: ___", ["15"], "fifteen = 15."),
      fb("🎧 'Twenty children.' Escribe el número: ___", ["20"], "twenty = 20."),
      fb("🎧 'Thirteen apples.' Escribe el número: ___", ["13"], "thirteen = 13."),
      fb("🎧 'Eighteen dogs.' Escribe el número: ___", ["18"], "eighteen = 18."),
    ]),
    listening(3, "Listening · Parte 3 — Números 11-20", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write the number. Eleven pencils. Fifteen stars. Twenty children. Thirteen apples. Eighteen dogs.", []),

    READING_HEAD,
    readChoose("Elige el número correcto", [
      mc("11 = ___", ["eleven", "twelve", "ten"], 0, "11 = eleven."),
      mc("16 = ___", ["sixteen", "seventeen", "fifteen"], 0, "16 = sixteen."),
      mc("19 = ___", ["nineteen", "ninety", "nine"], 0, "19 = nineteen."),
      mc("14 = ___", ["fourteen", "forty", "four"], 0, "14 = fourteen."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Cuenta hasta 20", "Cuenta en voz alta del 1 al 20 en inglés, sin mirar.", "Cuenta del 1 al 20 en inglés.", "contar hasta 20", "eleven, twelve, thirteen, fourteen, fifteen... twenty"),

    SUMMARY("Resumen del Día 23", [
      "Ya sabes contar del 1 al 20 en inglés.",
      "eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.",
    ]),
    INFO("Tarea para el Día 24", "Practica contar hasta 20. Mañana: los días de la semana."),
  ],
};

// ───────────────────────── DÍA 24 ─────────────────────────
const DAY24 = {
  title: "Día 24 — Los días de la semana 📅 · Monday, Tuesday...",
  description: "Los días de la semana.",
  pedagogy: {
    objective: "Nombrar los días de la semana en orden.",
    summary: "Días de la semana; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Qué día es hoy? Dilo en inglés."],
  },
  items: [
    TEXT("📅 ¿Qué día es hoy? What day is it today?"),
    GRAMMAR("Los días de la semana", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.\nWhat day is it? (¿Qué día es?) → It's Monday. (Es lunes)"),
    deck("Pre-A1 S5D24 — Los días de la semana", [
      ["Monday", "lunes", "It's Monday. 📅", "day"],
      ["Tuesday", "martes", "It's Tuesday.", "day"],
      ["Wednesday", "miércoles", "It's Wednesday.", "day"],
      ["Thursday", "jueves", "It's Thursday.", "day"],
      ["Friday", "viernes", "It's Friday! 🎉", "day"],
      ["Saturday", "sábado", "It's Saturday! No school!", "day"],
      ["Sunday", "domingo", "It's Sunday.", "day"],
      ["day", "día", "What day is it?", "word"],
      ["week", "semana", "Seven days in a week.", "word"],
      ["today", "hoy", "Today is Monday.", "word"],
    ]),
    vocabEx("¿Qué día es? 📅", "Elige el día correcto.", [
      mc("Primer día de la semana (en el cole): ___", ["Monday", "Sunday", "Friday"], 0, "Monday = lunes."),
      mc("Día de fiesta, no hay cole: ___", ["Saturday", "Tuesday", "Wednesday"], 0, "Saturday = sábado."),
      mc("Último día antes del finde: ___", ["Friday", "Monday", "Sunday"], 0, "Friday = viernes."),
      mc("How many days in a week? ___", ["five", "seven", "ten"], 1, "seven days."),
      mc("El día después de Monday: ___", ["Tuesday", "Sunday", "Friday"], 0, "Tuesday = martes."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha el día de la semana", [
      mc("🎧 'Today is Monday.' ¿Qué día es?", ["lunes", "martes", "domingo"], 0, "'Monday' → lunes."),
      mc("🎧 'It's Friday! No school tomorrow.' ¿Qué día es?", ["viernes", "sábado", "lunes"], 0, "'Friday' → viernes."),
      mc("🎧 'It's Saturday! No school!' ¿Hay cole?", ["Sí", "No"], 1, "'No school!' → No."),
      mc("🎧 'There are seven days in a week.' ¿Cuántos días hay en una semana?", ["five", "seven", "ten"], 1, "'seven days'."),
      mc("🎧 'It's Sunday today.' ¿Qué día es?", ["domingo", "lunes", "viernes"], 0, "'Sunday' → domingo."),
    ]),
    listening(4, "Listening · Parte 4 — Los días de la semana", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. Today is Monday. It's Friday! No school tomorrow. It's Saturday! No school! There are seven days in a week. It's Sunday today.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("M_nd_y (lunes)", ["Monday"], "Monday."),
      fb("Fr_d_y (viernes)", ["Friday"], "Friday."),
      fb("S_t_rd_y (sábado)", ["Saturday"], "Saturday."),
      fb("w__k (semana)", ["week"], "week."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Los días de la semana", "Di los 7 días de la semana en orden, y luego di qué día es hoy.", "Nombra los 7 días de la semana en orden.", "nombrar los días de la semana", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"),

    SUMMARY("Resumen del Día 24", [
      "Ya conoces los 7 días de la semana: Monday a Sunday.",
      "Puedes decir qué día es hoy: 'It's + día'.",
    ]),
    INFO("Tarea para el Día 25", "Repasa el cole, in/on/under, los números y los días. Mañana: ¡repaso y quinta prueba!"),
  ],
};

// ───────────────────────── DÍA 25 ─────────────────────────
const DAY25 = {
  title: "Día 25 — Repaso de la semana + quinta prueba 🌟",
  description: "Repaso del cole, in/on/under, números 11-20 y días de la semana. Quinta prueba de la semana — ¡mitad del curso!",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 5 antes de la prueba.",
    summary: "Repaso de cole, preposiciones, números y días; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué has aprendido esta semana que no sabías antes?"],
  },
  items: [
    TEXT("🌟 ¡Quinta semana terminada — ya vas por la mitad del camino! Hoy repasamos: cole, in/on/under, números y días."),
    GRAMMAR("Repaso de la Semana 5", "· Cole: pencil, pen, book, bag, rubber, ruler, chair, table. 'It's a...'\n· Preposiciones: in (dentro), on (encima), under (debajo).\n· Números: eleven, twelve... twenty.\n· Días: Monday, Tuesday... Sunday."),
    deck("Pre-A1 S5D25 — Repaso mixto", [
      ["pencil", "lápiz", "It's a pencil. ✏️", "school"],
      ["book", "libro", "It's a book. 📖", "school"],
      ["in", "dentro de", "It's in the bag.", "preposition"],
      ["under", "debajo de", "It's under the bed.", "preposition"],
      ["fifteen", "quince", "Fifteen stars.", "number"],
      ["twenty", "veinte", "Twenty children.", "number"],
      ["Monday", "lunes", "It's Monday.", "day"],
      ["Friday", "viernes", "It's Friday!", "day"],
      ["where", "dónde", "Where is it?", "word"],
      ["week", "semana", "Seven days in a week.", "word"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("✏️ It's a ___.", ["pencil", "book", "chair"], 0, "✏️ = pencil."),
      mc("🎒 (dentro) It's ___ the bag.", ["in", "on", "under"], 0, "in the bag."),
      mc("15 = ___", ["fifteen", "fifty", "five"], 0, "15 = fifteen."),
      mc("Primer día de la semana: ___", ["Monday", "Sunday", "Friday"], 0, "Monday = lunes."),
      mc("🛏️ (debajo) It's ___ the bed.", ["in", "on", "under"], 2, "under the bed."),
      mc("How many days in a week? ___", ["five", "seven"], 1, "seven days."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'It's Monday. My pencil is in my bag.' ¿Dónde está el lápiz?", ["dentro de la mochila", "encima de la mesa"], 0, "'in my bag' → dentro."),
      mc("🎧 'Fifteen books are on the table.' ¿Cuántos libros hay?", ["five", "fifteen", "fifty"], 1, "'fifteen' → 15."),
      mc("🎧 'It's Friday! No school tomorrow.' ¿Qué día es?", ["viernes", "lunes"], 0, "'Friday' → viernes."),
      mc("🎧 'My ruler is under the chair.' ¿Dónde está la regla?", ["debajo de la silla", "encima de la silla"], 0, "'under the chair' → debajo."),
      mc("🎧 'Twenty children are at school today.' ¿Cuántos niños hay?", ["twelve", "twenty"], 1, "'twenty' → 20."),
    ]),
    listening(1, "Listening · Repaso de la Semana 5", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. It's Monday. My pencil is in my bag. Fifteen books are on the table. It's Friday! No school tomorrow. My ruler is under the chair. Twenty children are at school today.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("p_nc_l (lápiz)", ["pencil"], "pencil."),
      fb("_nd_r (debajo)", ["under"], "under."),
      fb("tw_nty (veinte)", ["twenty"], "twenty."),
      fb("M_nd_y (lunes)", ["Monday"], "Monday."),
      fb("w__k (semana)", ["week"], "week."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: nombra material escolar, di dónde está, cuenta hasta 20, y di qué día es hoy.", "Habla 1-2 minutos combinando cole, preposiciones, números y días.", "combinar cole, in/on/under, números y días", "It's a pencil, It's in my bag, twenty, It's Monday"),

    SUMMARY("Resumen de la Semana 5 — ¡Mitad del curso!", [
      "¡Enhorabuena! Terminaste la Semana 5: el cole, in/on/under, números 11-20 y los días de la semana.",
      "Ya vas por la mitad del curso (25/60 días). ¡Muy bien hecho! 🎉",
      "Ahora, tu quinta prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡repaso de todo lo aprendido hasta ahora!",
    ]),
    INFO("Prueba de la Semana 5 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "El cole · in/on/under · Números 11-20 · Los días de la semana",
  description: "Quinta semana: el material escolar, las preposiciones in/on/under, los números del 11 al 20, y los días de la semana. Cada día, las 4 destrezas con el formato real de Starters. Día 25 marca la mitad del curso.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
