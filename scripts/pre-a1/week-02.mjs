/**
 * Pre-A1 Starters · Semana 2 — "Mi familia 👨‍👩‍👧‍👦 · This is my...".
 * La familia y los posesivos sencillos: "This is my...", "my/your".
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 6 ─────────────────────────
const DAY6 = {
  title: "Día 6 — Mi familia 👨‍👩‍👧‍👦 · This is my...",
  description: "Los miembros de la familia y 'This is my...'.",
  pedagogy: {
    objective: "Nombrar a los miembros de la familia en inglés.",
    summary: "Familia; This is my...; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Puedes presentar a tu familia en inglés?"],
  },
  items: [
    TEXT("👨‍👩‍👧‍👦 ¡Hoy hablamos de la familia! This is my family."),
    GRAMMAR("This is my...", "Para presentar a alguien: This is my + persona.\nThis is my mum. 👩 (Esta es mi mamá)\nThis is my dad. 👨 (Este es mi papá)"),
    deck("Pre-A1 S2D6 — La familia", [
      ["mum", "mamá", "This is my mum. 👩", "family"],
      ["dad", "papá", "This is my dad. 👨", "family"],
      ["sister", "hermana", "This is my sister. 👧", "family"],
      ["brother", "hermano", "This is my brother. 👦", "family"],
      ["baby", "bebé", "This is my baby brother. 👶", "family"],
      ["grandma", "abuela", "This is my grandma. 👵", "family"],
      ["grandpa", "abuelo", "This is my grandpa. 👴", "family"],
      ["family", "familia", "This is my family. 👨‍👩‍👧‍👦", "family"],
      ["this", "este/esta", "This is my mum.", "word"],
      ["is", "es/está", "This is my dad.", "word"],
    ]),
    vocabEx("¿Quién es? 👨‍👩‍👧‍👦", "Elige la palabra correcta.", [
      mc("👩 This is my ___.", ["mum", "dad", "brother"], 0, "👩 = mum."),
      mc("👨 This is my ___.", ["mum", "dad", "sister"], 1, "👨 = dad."),
      mc("👧 This is my ___.", ["brother", "sister", "grandpa"], 1, "👧 = sister."),
      mc("👦 This is my ___.", ["brother", "sister", "grandma"], 0, "👦 = brother."),
      mc("👵 This is my ___.", ["grandma", "grandpa", "baby"], 0, "👵 = grandma."),
      mc("👶 This is my ___.", ["dad", "baby", "mum"], 1, "👶 = baby."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y une con la familia", [
      mc("🎧 'This is my mum.' ¿Quién es?", ["👩 mamá", "👨 papá", "👧 hermana"], 0, "'This is my mum' → 👩."),
      mc("🎧 'This is my brother.' ¿Quién es?", ["👦 hermano", "👧 hermana", "👶 bebé"], 0, "'This is my brother' → 👦."),
      mc("🎧 'This is my grandpa.' ¿Quién es?", ["👵 abuela", "👴 abuelo", "👨 papá"], 1, "'This is my grandpa' → 👴."),
      mc("🎧 'This is my sister.' ¿Quién es?", ["👧 hermana", "👦 hermano", "👵 abuela"], 0, "'This is my sister' → 👧."),
      mc("🎧 'This is my family.' ¿Cuántas personas hay?", ["one", "five", "ten"], 1, "'my family' → varias personas (five)."),
    ]),
    listening(1, "Listening · Parte 1 — La familia", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. This is my mum. This is my brother. This is my grandpa. This is my sister. This is my family.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("👩 = 'mum'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 👩 es mum."),
      mc("👴 = 'grandma'. ¿Está bien?", ["Sí", "No"], 1, "No: 👴 es grandpa, no grandma."),
      mc("👶 = 'baby'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 👶 es baby."),
      mc("👦 = 'sister'. ¿Está bien?", ["Sí", "No"], 1, "No: 👦 es brother, no sister."),
      mc("'This is my dad' significa 'Este es mi papá'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi familia", "Habla de tu familia usando fotos o dibujos: 'This is my mum/dad/sister/brother...'.", "Presenta a 3 miembros de tu familia en inglés.", "presentar a la familia", "This is my mum, This is my dad, This is my sister"),

    SUMMARY("Resumen del Día 6", [
      "Ya sabes decir: mum, dad, sister, brother, baby, grandma, grandpa, family.",
      "Puedes presentar a tu familia: 'This is my...'",
    ]),
    INFO("Tarea para el Día 7", "Practica presentar a tu familia. Mañana: my/your (posesivos)."),
  ],
};

// ───────────────────────── DÍA 7 ─────────────────────────
const DAY7 = {
  title: "Día 7 — My y your 🙋 · Whose is it?",
  description: "Los posesivos my/your y preguntar de quién es algo.",
  pedagogy: {
    objective: "Usar 'my' y 'your' correctamente.",
    summary: "My/your; Listening P3, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Sabes la diferencia entre 'my' y 'your'?"],
  },
  items: [
    TEXT("🙋 Hoy aprendemos MY (mi) y YOUR (tu)."),
    GRAMMAR("My y your", "MY = mi/mis (para mí): My mum. My family.\nYOUR = tu/tus (para ti): Your mum. Is this your bag?"),
    deck("Pre-A1 S2D7 — My y your", [
      ["my", "mi/mis", "My mum. 👩", "word"],
      ["your", "tu/tus", "Your bag. 🎒", "word"],
      ["bag", "mochila", "This is my bag. 🎒", "object"],
      ["book", "libro", "This is your book. 📖", "object"],
      ["pen", "bolígrafo", "This is my pen. ✏️", "object"],
      ["ball", "pelota", "This is your ball. ⚽", "object"],
      ["whose", "de quién", "Whose bag is it?", "word"],
      ["it's", "es (contracción)", "It's my bag.", "word"],
      ["yes", "sí", "Yes, it's my bag.", "word"],
      ["no", "no", "No, it's your bag.", "word"],
    ]),
    vocabEx("My o your? 🙋", "Elige la opción correcta.", [
      mc("(Hablando de mí mismo/a) This is ___ bag. 🎒", ["my", "your"], 0, "de mí = my."),
      mc("(Hablando contigo) This is ___ book. 📖", ["my", "your"], 1, "de ti = your."),
      mc("Whose ball is it? It's ___ ball. ⚽ (mía)", ["my", "your"], 0, "mía = my ball."),
      mc("Is this ___ pen? ✏️ (¿es tuyo?)", ["my", "your"], 1, "¿tuyo? = your pen."),
      mc("This is ___ family. 👨‍👩‍👧‍👦 (mi familia)", ["my", "your"], 0, "mi familia = my family."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha: my o your", [
      mc("🎧 'This is my bag.' ¿De quién es?", ["mía", "tuya", "no se sabe"], 0, "'my bag' = mía."),
      mc("🎧 'Is this your book?' ¿A quién pregunta?", ["a mí mismo", "a otra persona", "a nadie"], 1, "'your book' → a otra persona."),
      mc("🎧 'It's my ball.' ¿De quién es la pelota?", ["mía", "tuya"], 0, "'my ball' = mía."),
      mc("🎧 'Whose pen is it? It's your pen.' ¿De quién es?", ["mía", "tuya"], 1, "'your pen' = tuya."),
      mc("🎧 'This is my family.' ¿De quién es la familia?", ["mía", "tuya"], 0, "'my family' = mía."),
    ]),
    listening(3, "Listening · Parte 3 — My y your", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. This is my bag. Is this your book? It's my ball. Whose pen is it? It's your pen. This is my family.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("🎒 (tuya) Whose bag is it? It's your ___.", ["bag"], "your bag."),
      fb("✏️ (mío) This is my ___.", ["pen"], "my pen."),
      fb("⚽ (tuya) Is this your ___?", ["ball"], "your ball."),
      fb("📖 (mío) This is my ___.", ["book"], "my book."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · My y your", "Señala objetos tuyos y de otra persona (o imagina) y practica 'my' y 'your'.", "Di 3 frases con 'my' y 3 con 'your'.", "usar my y your correctamente", "This is my bag, This is your book, Is this your pen?"),

    SUMMARY("Resumen del Día 7", [
      "MY = mi/mis (para ti mismo/a). YOUR = tu/tus (para otra persona).",
      "Puedes preguntar 'Whose is it?' y responder 'It's my...' o 'It's your...'.",
    ]),
    INFO("Tarea para el Día 8", "Practica my/your con objetos de casa. Mañana: la casa y las habitaciones."),
  ],
};

// ───────────────────────── DÍA 8 ─────────────────────────
const DAY8 = {
  title: "Día 8 — En casa 🏠 · In the...",
  description: "Las habitaciones de la casa y la preposición 'in'.",
  pedagogy: {
    objective: "Nombrar las habitaciones de la casa.",
    summary: "Habitaciones; in the...; Listening P2, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Puedes nombrar 5 habitaciones de tu casa en inglés?"],
  },
  items: [
    TEXT("🏠 Hoy visitamos la casa. Let's go home!"),
    GRAMMAR("in the + room", "Para decir dónde estás: I'm in the + habitación.\nI'm in the kitchen. 🍳 (Estoy en la cocina)"),
    deck("Pre-A1 S2D8 — La casa", [
      ["house", "casa", "This is my house. 🏠", "house"],
      ["kitchen", "cocina", "I'm in the kitchen. 🍳", "room"],
      ["bedroom", "dormitorio", "I'm in the bedroom. 🛏️", "room"],
      ["bathroom", "baño", "I'm in the bathroom. 🚿", "room"],
      ["living room", "salón", "I'm in the living room. 🛋️", "room"],
      ["garden", "jardín", "I'm in the garden. 🌳", "room"],
      ["door", "puerta", "Open the door. 🚪", "object"],
      ["window", "ventana", "Look at the window. 🪟", "object"],
      ["in", "en/dentro de", "I'm in the kitchen.", "word"],
      ["home", "hogar/casa", "I'm home! 🏠", "word"],
    ]),
    vocabEx("¿Qué habitación es? 🏠", "Elige la habitación correcta.", [
      mc("🍳 I'm in the ___.", ["kitchen", "bedroom", "garden"], 0, "🍳 = kitchen."),
      mc("🛏️ I'm in the ___.", ["bathroom", "bedroom", "kitchen"], 1, "🛏️ = bedroom."),
      mc("🚿 I'm in the ___.", ["bathroom", "living room", "garden"], 0, "🚿 = bathroom."),
      mc("🛋️ I'm in the ___.", ["kitchen", "living room", "bathroom"], 1, "🛋️ = living room."),
      mc("🌳 I'm in the ___.", ["garden", "kitchen", "bedroom"], 0, "🌳 = garden."),
      mc("🚪 = ___", ["door", "window", "house"], 0, "🚪 = door."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y encuentra la habitación", [
      mc("🎧 'I'm in the kitchen.' ¿Dónde está?", ["🍳 cocina", "🛏️ dormitorio", "🌳 jardín"], 0, "'in the kitchen' → 🍳."),
      mc("🎧 'I'm in the garden.' ¿Dónde está?", ["🌳 jardín", "🚿 baño", "🛋️ salón"], 0, "'in the garden' → 🌳."),
      mc("🎧 'I'm in the bedroom.' ¿Dónde está?", ["🛏️ dormitorio", "🍳 cocina", "🚪 puerta"], 0, "'in the bedroom' → 🛏️."),
      mc("🎧 'Open the door.' ¿Qué hace?", ["abre la puerta", "cierra la ventana", "mira el jardín"], 0, "'Open the door' → abre la puerta."),
      mc("🎧 'I'm in the living room.' ¿Dónde está?", ["🛋️ salón", "🚿 baño", "🍳 cocina"], 0, "'in the living room' → 🛋️."),
    ]),
    listening(2, "Listening · Parte 2 — La casa", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I'm in the kitchen. I'm in the garden. I'm in the bedroom. Open the door. I'm in the living room.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("🏠 = ___", ["house", "garden", "door"], 0, "🏠 = house."),
      mc("🪟 = ___", ["door", "window", "house"], 1, "🪟 = window."),
      mc("I'm ___ the kitchen. (en)", ["in", "my", "your"], 0, "in the kitchen."),
      mc("🚿 = ___", ["bathroom", "bedroom", "kitchen"], 0, "🚿 = bathroom."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi casa", "Camina por tu casa (o imagina) y di en qué habitación estás: 'I'm in the...'.", "Nombra 4 habitaciones de tu casa en inglés.", "nombrar habitaciones", "I'm in the kitchen, I'm in the bedroom, I'm in the garden"),

    SUMMARY("Resumen del Día 8", [
      "Ya conoces: house, kitchen, bedroom, bathroom, living room, garden, door, window.",
      "Puedes decir dónde estás: 'I'm in the...'",
    ]),
    INFO("Tarea para el Día 9", "Practica nombrar las habitaciones de tu casa. Mañana: los animales."),
  ],
};

// ───────────────────────── DÍA 9 ─────────────────────────
const DAY9 = {
  title: "Día 9 — Los animales 🐾 · I like...",
  description: "Los animales y la estructura 'I like...' / 'I don't like...'.",
  pedagogy: {
    objective: "Nombrar animales y expresar gustos sencillos.",
    summary: "Animales; I like / I don't like; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Cuál es tu animal favorito en inglés?"],
  },
  items: [
    TEXT("🐾 ¡Hoy conocemos animales! ¿Cuál te gusta más?"),
    GRAMMAR("I like / I don't like", "I like + animal. (Me gusta)\nI don't like + animal. (No me gusta)\nI like cats. 🐱 I don't like spiders. 🕷️"),
    deck("Pre-A1 S2D9 — Los animales", [
      ["cat", "gato", "I like cats. 🐱", "animal"],
      ["dog", "perro", "I like dogs. 🐶", "animal"],
      ["bird", "pájaro", "I like birds. 🐦", "animal"],
      ["fish", "pez", "I like fish. 🐟", "animal"],
      ["rabbit", "conejo", "I like rabbits. 🐰", "animal"],
      ["horse", "caballo", "I like horses. 🐴", "animal"],
      ["spider", "araña", "I don't like spiders. 🕷️", "animal"],
      ["like", "gustar", "I like cats.", "word"],
      ["don't", "no (contracción)", "I don't like spiders.", "word"],
      ["pet", "mascota", "My pet is a dog. 🐶", "word"],
    ]),
    vocabEx("¿Qué animal es? 🐾", "Elige el animal correcto.", [
      mc("🐱 = ___", ["cat", "dog", "bird"], 0, "🐱 = cat."),
      mc("🐶 = ___", ["cat", "dog", "fish"], 1, "🐶 = dog."),
      mc("🐦 = ___", ["bird", "fish", "rabbit"], 0, "🐦 = bird."),
      mc("🐰 = ___", ["horse", "rabbit", "spider"], 1, "🐰 = rabbit."),
      mc("🕷️ = ___", ["spider", "fish", "cat"], 0, "🕷️ = spider."),
      mc("🐴 = ___", ["dog", "horse", "bird"], 1, "🐴 = horse."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe el animal", [
      fb("🎧 'I like cats.' Escribe el animal: ___", ["cats", "cat"], "cats."),
      fb("🎧 'I don't like spiders.' Escribe el animal: ___", ["spiders", "spider"], "spiders."),
      fb("🎧 'I like dogs.' Escribe el animal: ___", ["dogs", "dog"], "dogs."),
      fb("🎧 'My pet is a rabbit.' Escribe el animal: ___", ["rabbit"], "rabbit."),
      fb("🎧 'I like fish.' Escribe el animal: ___", ["fish"], "fish."),
    ]),
    listening(4, "Listening · Parte 4 — Los animales", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. I like cats. I don't like spiders. I like dogs. My pet is a rabbit. I like fish.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("c_t (animal que dice miau)", ["cat"], "cat."),
      fb("d_g (animal que dice guau)", ["dog"], "dog."),
      fb("f_sh (animal que nada)", ["fish"], "fish."),
      fb("b_rd (animal que vuela)", ["bird"], "bird."),
      fb("r_bb_t (animal con orejas largas)", ["rabbit"], "rabbit."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Animales favoritos", "Habla de los animales que te gustan y los que no: 'I like...' y 'I don't like...'.", "Di 3 animales que te gustan y 1 que no te gusta.", "expresar gustos sobre animales", "I like cats, I like dogs, I don't like spiders"),

    SUMMARY("Resumen del Día 9", [
      "Ya conoces: cat, dog, bird, fish, rabbit, horse, spider.",
      "Puedes decir qué te gusta: 'I like...' y qué no: 'I don't like...'",
    ]),
    INFO("Tarea para el Día 10", "Repasa toda la Semana 2: familia, my/your, la casa y los animales. Mañana: ¡repaso y segunda prueba!"),
  ],
};

// ───────────────────────── DÍA 10 ─────────────────────────
const DAY10 = {
  title: "Día 10 — Repaso de la semana + segunda prueba 🌟",
  description: "Repaso de la familia, my/your, la casa y los animales. Segunda prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 2 antes de la prueba.",
    summary: "Repaso de familia, posesivos, casa y animales; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué fue lo más fácil y lo más difícil de esta semana?"],
  },
  items: [
    TEXT("🌟 ¡Segunda semana terminada! Hoy repasamos todo."),
    GRAMMAR("Repaso de la Semana 2", "· Familia: mum, dad, sister, brother, grandma, grandpa. 'This is my...'\n· Posesivos: my (mi) / your (tu).\n· Casa: kitchen, bedroom, bathroom, living room, garden. 'I'm in the...'\n· Animales: cat, dog, bird, fish, rabbit, spider. 'I like... / I don't like...'"),
    deck("Pre-A1 S2D10 — Repaso mixto", [
      ["mum", "mamá", "This is my mum. 👩", "family"],
      ["sister", "hermana", "This is my sister. 👧", "family"],
      ["your", "tu/tus", "Is this your bag?", "word"],
      ["kitchen", "cocina", "I'm in the kitchen. 🍳", "room"],
      ["garden", "jardín", "I'm in the garden. 🌳", "room"],
      ["cat", "gato", "I like cats. 🐱", "animal"],
      ["dog", "perro", "I like dogs. 🐶", "animal"],
      ["spider", "araña", "I don't like spiders. 🕷️", "animal"],
      ["like", "gustar", "I like dogs.", "word"],
      ["house", "casa", "This is my house. 🏠", "house"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("👩 This is my ___.", ["mum", "dad", "sister"], 0, "👩 = mum."),
      mc("🍳 I'm in the ___.", ["bedroom", "kitchen", "garden"], 1, "🍳 = kitchen."),
      mc("🐱 I ___ cats.", ["like", "don't", "your"], 0, "I like cats."),
      mc("🕷️ I don't ___ spiders.", ["like", "my", "your"], 0, "I don't like spiders."),
      mc("Whose bag is it? It's ___ bag. (tuya)", ["my", "your"], 1, "your bag."),
      mc("🌳 I'm in the ___.", ["garden", "kitchen", "bathroom"], 0, "🌳 = garden."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'This is my sister. She likes cats.' ¿A quién le gustan los gatos?", ["su hermana", "su hermano", "su mamá"], 0, "'my sister' + 'likes cats'."),
      mc("🎧 'I'm in the kitchen with my mum.' ¿Dónde está?", ["🍳 cocina", "🛏️ dormitorio", "🌳 jardín"], 0, "'in the kitchen'."),
      mc("🎧 'This is your dog.' ¿De quién es el perro?", ["mío", "tuyo"], 1, "'your dog' = tuyo."),
      mc("🎧 'I don't like spiders!' ¿Le gustan las arañas?", ["Sí", "No"], 1, "'I don't like' = No."),
      mc("🎧 'This is my house. I'm in the garden.' ¿Dónde está?", ["🌳 jardín", "🛋️ salón", "🚿 baño"], 0, "'in the garden'."),
    ]),
    listening(1, "Listening · Repaso de la Semana 2", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. This is my sister. She likes cats. I'm in the kitchen with my mum. This is your dog. I don't like spiders! This is my house. I'm in the garden.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("m_m (mamá)", ["mum"], "mum."),
      fb("k_tch_n (cocina)", ["kitchen"], "kitchen."),
      fb("c_t (gato)", ["cat"], "cat."),
      fb("h_ _s_ (casa)", ["house"], "house."),
      fb("l_k_ (gustar)", ["like"], "like."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: presenta a tu familia, di en qué habitación estás y qué animales te gustan.", "Habla 1 minuto combinando familia, casa y animales.", "combinar familia, casa y animales", "This is my mum, I'm in the kitchen, I like cats"),

    SUMMARY("Resumen de la Semana 2", [
      "¡Enhorabuena! Terminaste la Semana 2: familia, my/your, la casa y los animales.",
      "Ahora, tu segunda prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡el cuerpo y 'I've got'!",
    ]),
    INFO("Prueba de la Semana 2 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK2 = {
  n: 2,
  theme: "Mi familia · This is my... · La casa · Los animales",
  description: "Segunda semana: los miembros de la familia, los posesivos my/your, las habitaciones de la casa, y los animales con 'I like/I don't like'. Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY6, DAY7, DAY8, DAY9, DAY10],
};
