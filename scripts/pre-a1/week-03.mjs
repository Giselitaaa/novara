/**
 * Pre-A1 Starters · Semana 3 — "Mi cuerpo 🧍 · I've got...".
 * Las partes del cuerpo y la estructura "I've got..." (tengo).
 */
import {
  TEXT, GRAMMAR, INFO, SUMMARY, deck,
  vocabEx, listenMatch, listenColour, listenChoose, listenWrite,
  readYesNo, readAnswer, readChoose, readWrite,
  listening, speaking,
  LISTENING_HEAD, READING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

// ───────────────────────── DÍA 11 ─────────────────────────
const DAY11 = {
  title: "Día 11 — Mi cara 👀 · I've got...",
  description: "Las partes de la cara y la estructura 'I've got...'.",
  pedagogy: {
    objective: "Nombrar las partes de la cara y usar 'I've got'.",
    summary: "Partes de la cara; I've got...; Listening P1, Reading & Writing P1, Speaking.",
    reviewPrompts: ["¿Puedes describir tu cara en inglés?"],
  },
  items: [
    TEXT("👀 ¡Hoy hablamos de la cara! I've got two eyes."),
    GRAMMAR("I've got...", "I've got = Tengo.\nI've got two eyes. 👀 (Tengo dos ojos)\nI've got a big nose. 👃 (Tengo una nariz grande)"),
    deck("Pre-A1 S3D11 — Mi cara", [
      ["eyes", "ojos", "I've got two eyes. 👀", "body"],
      ["nose", "nariz", "I've got a nose. 👃", "body"],
      ["mouth", "boca", "I've got a mouth. 👄", "body"],
      ["ears", "orejas", "I've got two ears. 👂👂", "body"],
      ["hair", "pelo", "I've got brown hair. 💇", "body"],
      ["face", "cara", "This is my face. 😊", "body"],
      ["teeth", "dientes", "I've got white teeth. 🦷", "body"],
      ["I've got", "tengo", "I've got two eyes.", "phrase"],
      ["two", "dos", "Two eyes. 👀", "number"],
      ["big", "grande", "A big nose. 👃", "size"],
    ]),
    vocabEx("¿Qué parte de la cara? 👀", "Elige la palabra correcta.", [
      mc("👀 I've got two ___.", ["eyes", "ears", "teeth"], 0, "👀 = eyes."),
      mc("👃 I've got a ___.", ["mouth", "nose", "ear"], 1, "👃 = nose."),
      mc("👄 I've got a ___.", ["mouth", "eye", "ear"], 0, "👄 = mouth."),
      mc("👂👂 I've got two ___.", ["eyes", "ears", "noses"], 1, "👂👂 = ears."),
      mc("🦷 I've got white ___.", ["hair", "teeth", "eyes"], 1, "🦷 = teeth."),
      mc("💇 I've got brown ___.", ["hair", "face", "nose"], 0, "💇 = hair."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y toca tu cara", [
      mc("🎧 'I've got two eyes.' ¿Qué tiene?", ["👀 ojos", "👂 orejas", "👃 nariz"], 0, "'two eyes' → 👀."),
      mc("🎧 'I've got a big nose.' ¿Qué tiene?", ["👃 nariz grande", "👄 boca grande", "👂 orejas grandes"], 0, "'a big nose' → 👃."),
      mc("🎧 'I've got brown hair.' ¿Qué color de pelo tiene?", ["negro", "marrón", "amarillo"], 1, "'brown hair' → marrón."),
      mc("🎧 'I've got white teeth.' ¿Qué tiene blanco?", ["🦷 dientes", "👀 ojos", "👂 orejas"], 0, "'white teeth' → 🦷."),
      mc("🎧 'I've got two ears.' ¿Cuántas orejas tiene?", ["one", "two", "three"], 1, "'two ears' → 2."),
    ]),
    listening(1, "Listening · Parte 1 — Mi cara", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I've got two eyes. I've got a big nose. I've got brown hair. I've got white teeth. I've got two ears.", []),

    READING_HEAD,
    readYesNo("¿Está bien? Sí o No", [
      mc("👀 = 'eyes'. ¿Está bien?", ["Sí", "No"], 0, "Sí, 👀 es eyes."),
      mc("👃 = 'mouth'. ¿Está bien?", ["Sí", "No"], 1, "No: 👃 es nose, no mouth."),
      mc("'I've got two eyes' significa 'Tengo dos ojos'. ¿Está bien?", ["Sí", "No"], 0, "Sí, correcto."),
      mc("👂👂 = 'one ear'. ¿Está bien?", ["Sí", "No"], 1, "No: son dos orejas, 'two ears'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi cara", "Mírate en un espejo y describe tu cara: 'I've got...'.", "Describe 4 partes de tu cara en inglés.", "describir la cara", "I've got two eyes, I've got a nose, I've got brown hair"),

    SUMMARY("Resumen del Día 11", [
      "Ya conoces: eyes, nose, mouth, ears, hair, face, teeth.",
      "Puedes describir tu cara: 'I've got...'",
    ]),
    INFO("Tarea para el Día 12", "Practica describir tu cara. Mañana: el resto del cuerpo."),
  ],
};

// ───────────────────────── DÍA 12 ─────────────────────────
const DAY12 = {
  title: "Día 12 — Mi cuerpo 🧍 · Head, arms, legs",
  description: "Las partes del cuerpo (cabeza, brazos, piernas...).",
  pedagogy: {
    objective: "Nombrar las partes principales del cuerpo.",
    summary: "Cuerpo; I've got...; Listening P2, Reading & Writing P2, Speaking.",
    reviewPrompts: ["¿Puedes señalar 5 partes del cuerpo mientras las dices en inglés?"],
  },
  items: [
    TEXT("🧍 Hoy seguimos con el cuerpo: head, arms, legs..."),
    GRAMMAR("Repaso: I've got...", "I've got a head. 🙂 I've got two arms. 💪💪 I've got two legs. 🦵🦵\nI've got ten fingers. 🖐️🖐️"),
    deck("Pre-A1 S3D12 — Mi cuerpo", [
      ["head", "cabeza", "I've got a head. 🙂", "body"],
      ["arm", "brazo", "I've got two arms. 💪", "body"],
      ["leg", "pierna", "I've got two legs. 🦵", "body"],
      ["hand", "mano", "I've got two hands. ✋", "body"],
      ["foot", "pie", "I've got two feet. 🦶", "body"],
      ["finger", "dedo", "I've got ten fingers. 🖐️", "body"],
      ["tummy", "barriga", "I've got a tummy. 🤰", "body"],
      ["body", "cuerpo", "This is my body. 🧍", "body"],
      ["got", "tengo (got)", "I've got two arms.", "word"],
      ["strong", "fuerte", "I'm strong! 💪", "adjective"],
    ]),
    vocabEx("¿Qué parte del cuerpo? 🧍", "Elige la palabra correcta.", [
      mc("🙂 I've got a ___.", ["head", "arm", "leg"], 0, "🙂 = head."),
      mc("💪 I've got two ___.", ["legs", "arms", "hands"], 1, "💪 = arms."),
      mc("🦵 I've got two ___.", ["legs", "arms", "feet"], 0, "🦵 = legs."),
      mc("✋ I've got two ___.", ["hands", "feet", "arms"], 0, "✋ = hands."),
      mc("🦶 I've got two ___.", ["hands", "feet", "legs"], 1, "🦶 = feet."),
      mc("🖐️ I've got ten ___.", ["fingers", "hands", "arms"], 0, "🖐️ = fingers."),
    ]),

    LISTENING_HEAD,
    listenColour("Escucha y señala el cuerpo", [
      mc("🎧 'I've got two arms.' ¿Qué tiene?", ["💪 brazos", "🦵 piernas", "✋ manos"], 0, "'two arms' → 💪."),
      mc("🎧 'I've got two legs.' ¿Qué tiene?", ["🦵 piernas", "💪 brazos", "🦶 pies"], 0, "'two legs' → 🦵."),
      mc("🎧 'I've got ten fingers.' ¿Cuántos dedos tiene?", ["five", "ten", "two"], 1, "'ten fingers' → 10."),
      mc("🎧 'I'm strong!' ¿Cómo se siente?", ["fuerte", "cansado", "triste"], 0, "'strong' → fuerte."),
      mc("🎧 'I've got two feet.' ¿Qué tiene?", ["🦶 pies", "✋ manos", "🦵 piernas"], 0, "'two feet' → 🦶."),
    ]),
    listening(2, "Listening · Parte 2 — Mi cuerpo", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I've got two arms. I've got two legs. I've got ten fingers. I'm strong! I've got two feet.", []),

    READING_HEAD,
    readAnswer("Mira y responde", [
      fb("💪 How many arms? ___", ["two"], "two arms."),
      fb("🦵 How many legs? ___", ["two"], "two legs."),
      fb("🖐️ How many fingers? ___", ["ten"], "ten fingers."),
      fb("🙂 What is it? ___", ["head"], "head."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi cuerpo", "Toca las partes de tu cuerpo mientras las dices: head, arms, legs, hands, feet.", "Toca y nombra 5 partes de tu cuerpo en inglés.", "nombrar el cuerpo", "I've got a head, I've got two arms, I've got two legs"),

    SUMMARY("Resumen del Día 12", [
      "Ya conoces: head, arm, leg, hand, foot, finger, tummy, body.",
      "Puedes describir tu cuerpo entero con 'I've got...'",
    ]),
    INFO("Tarea para el Día 13", "Practica todo el cuerpo. Mañana: la comida."),
  ],
};

// ───────────────────────── DÍA 13 ─────────────────────────
const DAY13 = {
  title: "Día 13 — La comida 🍎 · I'm hungry",
  description: "La comida básica y 'I'm hungry / I want...'.",
  pedagogy: {
    objective: "Nombrar alimentos básicos y expresar hambre.",
    summary: "Comida; I'm hungry; I want...; Listening P3, Reading & Writing P3, Speaking.",
    reviewPrompts: ["¿Cuál es tu comida favorita en inglés?"],
  },
  items: [
    TEXT("🍎 ¡Hoy tenemos hambre! I'm hungry. Let's eat!"),
    GRAMMAR("I'm hungry / I want...", "I'm hungry. (Tengo hambre)\nI want + comida. (Quiero...)\nI want an apple. 🍎"),
    deck("Pre-A1 S3D13 — La comida", [
      ["apple", "manzana", "I want an apple. 🍎", "food"],
      ["banana", "plátano", "I want a banana. 🍌", "food"],
      ["bread", "pan", "I want bread. 🍞", "food"],
      ["milk", "leche", "I want milk. 🥛", "food"],
      ["water", "agua", "I want water. 💧", "food"],
      ["egg", "huevo", "I want an egg. 🥚", "food"],
      ["cake", "pastel", "I want cake! 🎂", "food"],
      ["hungry", "hambriento/a", "I'm hungry. 🍽️", "adjective"],
      ["want", "querer", "I want an apple.", "word"],
      ["eat", "comer", "Let's eat! 🍽️", "verb"],
    ]),
    vocabEx("¿Qué comida es? 🍎", "Elige la palabra correcta.", [
      mc("🍎 I want an ___.", ["apple", "banana", "egg"], 0, "🍎 = apple."),
      mc("🍌 I want a ___.", ["apple", "banana", "cake"], 1, "🍌 = banana."),
      mc("🍞 I want ___.", ["bread", "milk", "water"], 0, "🍞 = bread."),
      mc("🥛 I want ___.", ["water", "milk", "bread"], 1, "🥛 = milk."),
      mc("🥚 I want an ___.", ["apple", "egg", "banana"], 1, "🥚 = egg."),
      mc("🎂 I want ___!", ["cake", "water", "egg"], 0, "🎂 = cake."),
    ]),

    LISTENING_HEAD,
    listenChoose("Escucha y elige la comida", [
      mc("🎧 'I want an apple.' ¿Qué quiere?", ["🍎 manzana", "🍌 plátano", "🍞 pan"], 0, "'an apple' → 🍎."),
      mc("🎧 'I'm hungry. I want bread.' ¿Qué quiere?", ["🍞 pan", "💧 agua", "🎂 pastel"], 0, "'bread' → 🍞."),
      mc("🎧 'I want milk, please.' ¿Qué quiere?", ["🥛 leche", "💧 agua", "🥚 huevo"], 0, "'milk' → 🥛."),
      mc("🎧 'I want cake!' ¿Qué quiere?", ["🎂 pastel", "🍌 plátano", "🍞 pan"], 0, "'cake' → 🎂."),
      mc("🎧 'I want water.' ¿Qué quiere?", ["💧 agua", "🥛 leche", "🍎 manzana"], 0, "'water' → 💧."),
    ]),
    listening(3, "Listening · Parte 3 — La comida", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen. I want an apple. I'm hungry. I want bread. I want milk, please. I want cake! I want water.", []),

    READING_HEAD,
    readChoose("Elige la palabra correcta", [
      mc("🍎 = ___", ["apple", "banana", "cake"], 0, "🍎 = apple."),
      mc("🥛 = ___", ["water", "milk", "bread"], 1, "🥛 = milk."),
      mc("I'm ___. I want food. (hambriento)", ["hungry", "happy", "hot"], 0, "hungry."),
      mc("🍌 = ___", ["banana", "apple", "egg"], 0, "🍌 = banana."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Tengo hambre", "Di qué comida quieres usando 'I'm hungry. I want...'.", "Pide 3 alimentos diferentes en inglés.", "pedir comida", "I'm hungry, I want an apple, I want milk"),

    SUMMARY("Resumen del Día 13", [
      "Ya conoces: apple, banana, bread, milk, water, egg, cake.",
      "Puedes decir que tienes hambre y pedir comida: 'I'm hungry. I want...'",
    ]),
    INFO("Tarea para el Día 14", "Practica pedir tu comida favorita. Mañana: los juguetes."),
  ],
};

// ───────────────────────── DÍA 14 ─────────────────────────
const DAY14 = {
  title: "Día 14 — Los juguetes 🧸 · It's my favourite",
  description: "Los juguetes y 'It's my favourite'.",
  pedagogy: {
    objective: "Nombrar juguetes y decir cuál es el favorito.",
    summary: "Juguetes; favourite; Listening P4, Reading & Writing P4, Speaking.",
    reviewPrompts: ["¿Cuál es tu juguete favorito en inglés?"],
  },
  items: [
    TEXT("🧸 ¡Hoy jugamos! Vamos a nombrar juguetes."),
    GRAMMAR("It's my favourite", "It's my favourite + juguete. (Es mi favorito)\nMy favourite toy is a teddy bear. 🧸"),
    deck("Pre-A1 S3D14 — Los juguetes", [
      ["toy", "juguete", "This is my toy. 🧸", "toy"],
      ["teddy bear", "osito de peluche", "My teddy bear. 🧸", "toy"],
      ["doll", "muñeca", "My doll. 🪆", "toy"],
      ["car", "coche (juguete)", "My toy car. 🚗", "toy"],
      ["kite", "cometa", "My kite. 🪁", "toy"],
      ["robot", "robot", "My robot. 🤖", "toy"],
      ["train", "tren", "My train. 🚂", "toy"],
      ["favourite", "favorito", "My favourite toy. 🧸", "adjective"],
      ["play", "jugar", "Let's play! 🎮", "verb"],
      ["fun", "divertido", "It's fun! 😄", "adjective"],
    ]),
    vocabEx("¿Qué juguete es? 🧸", "Elige el juguete correcto.", [
      mc("🧸 = ___", ["teddy bear", "doll", "robot"], 0, "🧸 = teddy bear."),
      mc("🪆 = ___", ["doll", "car", "kite"], 0, "🪆 = doll."),
      mc("🚗 = ___", ["train", "car", "robot"], 1, "🚗 = car."),
      mc("🪁 = ___", ["kite", "doll", "train"], 0, "🪁 = kite."),
      mc("🤖 = ___", ["robot", "teddy bear", "car"], 0, "🤖 = robot."),
      mc("🚂 = ___", ["car", "train", "kite"], 1, "🚂 = train."),
    ]),

    LISTENING_HEAD,
    listenWrite("Escucha y escribe el juguete", [
      fb("🎧 'My favourite toy is a teddy bear.' Escribe: ___ ___", ["teddy bear"], "teddy bear."),
      fb("🎧 'I've got a toy car.' Escribe: ___", ["car"], "car."),
      fb("🎧 'My robot is fun!' Escribe: ___", ["robot"], "robot."),
      fb("🎧 'This is my kite.' Escribe: ___", ["kite"], "kite."),
      fb("🎧 'I've got a doll.' Escribe: ___", ["doll"], "doll."),
    ]),
    listening(4, "Listening · Parte 4 — Los juguetes", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and write. My favourite toy is a teddy bear. I've got a toy car. My robot is fun! This is my kite. I've got a doll.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("t_y (juguete)", ["toy"], "toy."),
      fb("d_ll (muñeca)", ["doll"], "doll."),
      fb("c_r (coche)", ["car"], "car."),
      fb("r_b_t (robot)", ["robot"], "robot."),
      fb("f_n (divertido)", ["fun"], "fun."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Mi juguete favorito", "Enseña tu juguete favorito (o dibújalo) y descríbelo: 'My favourite toy is...'.", "Describe tu juguete favorito en 2-3 frases.", "hablar del juguete favorito", "My favourite toy is a teddy bear, It's fun, I like to play"),

    SUMMARY("Resumen del Día 14", [
      "Ya conoces: toy, teddy bear, doll, car, kite, robot, train.",
      "Puedes decir cuál es tu juguete favorito: 'My favourite toy is...'",
    ]),
    INFO("Tarea para el Día 15", "Repasa el cuerpo, la comida y los juguetes. Mañana: ¡repaso y tercera prueba!"),
  ],
};

// ───────────────────────── DÍA 15 ─────────────────────────
const DAY15 = {
  title: "Día 15 — Repaso de la semana + tercera prueba 🌟",
  description: "Repaso del cuerpo, la comida y los juguetes. Tercera prueba de la semana.",
  pedagogy: {
    objective: "Repasar todo lo aprendido en la Semana 3 antes de la prueba.",
    summary: "Repaso de cuerpo, comida y juguetes; Listening, Reading & Writing, Speaking; prueba de la semana.",
    reviewPrompts: ["¿Qué palabra nueva te ha gustado más esta semana?"],
  },
  items: [
    TEXT("🌟 ¡Tercera semana terminada! Hoy repasamos: cuerpo, comida y juguetes."),
    GRAMMAR("Repaso de la Semana 3", "· Cuerpo: eyes, nose, mouth, ears, head, arm, leg, hand, foot. 'I've got...'\n· Comida: apple, banana, bread, milk, water, egg, cake. 'I'm hungry. I want...'\n· Juguetes: toy, teddy bear, doll, car, kite, robot, train. 'My favourite toy is...'"),
    deck("Pre-A1 S3D15 — Repaso mixto", [
      ["eyes", "ojos", "I've got two eyes. 👀", "body"],
      ["arm", "brazo", "I've got two arms. 💪", "body"],
      ["apple", "manzana", "I want an apple. 🍎", "food"],
      ["hungry", "hambriento/a", "I'm hungry. 🍽️", "adjective"],
      ["teddy bear", "osito de peluche", "My teddy bear. 🧸", "toy"],
      ["favourite", "favorito", "My favourite toy. 🧸", "adjective"],
      ["want", "querer", "I want milk.", "word"],
      ["got", "tengo (got)", "I've got two legs.", "word"],
      ["play", "jugar", "Let's play! 🎮", "verb"],
      ["fun", "divertido", "It's fun! 😄", "adjective"],
    ]),
    vocabEx("Repaso mixto 🌟", "Elige la opción correcta.", [
      mc("👀 I've got two ___.", ["eyes", "ears", "arms"], 0, "👀 = eyes."),
      mc("🍎 I ___ an apple.", ["want", "got", "like"], 0, "I want an apple."),
      mc("I'm ___. I want food.", ["hungry", "happy", "hot"], 0, "hungry."),
      mc("🧸 My favourite ___ is a teddy bear.", ["toy", "food", "body"], 0, "favourite toy."),
      mc("I've ___ two legs.", ["got", "want", "like"], 0, "I've got two legs."),
      mc("🚗 = ___", ["train", "car", "doll"], 1, "🚗 = car."),
    ]),

    LISTENING_HEAD,
    listenMatch("Escucha y repasa", [
      mc("🎧 'I've got two eyes and a big nose.' ¿Qué tiene grande?", ["nose", "eyes", "ears"], 0, "'a big nose' → nose."),
      mc("🎧 'I'm hungry. I want an apple.' ¿Qué quiere?", ["🍎 manzana", "🍌 plátano", "🍞 pan"], 0, "'an apple' → 🍎."),
      mc("🎧 'My favourite toy is a robot.' ¿Cuál es su favorito?", ["🤖 robot", "🧸 osito", "🚗 coche"], 0, "'a robot' → 🤖."),
      mc("🎧 'I've got ten fingers.' ¿Cuántos dedos?", ["five", "ten", "two"], 1, "'ten fingers' → 10."),
      mc("🎧 'I want milk, please.' ¿Qué quiere beber?", ["🥛 leche", "💧 agua", "🍎 manzana"], 0, "'milk' → 🥛."),
    ]),
    listening(1, "Listening · Repaso de la Semana 3", "Escucha (se oye dos veces) y responde a las preguntas de arriba.", "Listen and look. I've got two eyes and a big nose. I'm hungry. I want an apple. My favourite toy is a robot. I've got ten fingers. I want milk, please.", []),

    READING_HEAD,
    readWrite("Completa las palabras", [
      fb("_y_s (ojos)", ["eyes"], "eyes."),
      fb("_ppl_ (manzana)", ["apple"], "apple."),
      fb("t_y (juguete)", ["toy"], "toy."),
      fb("h_ngry (hambriento)", ["hungry"], "hungry."),
      fb("f_n (divertido)", ["fun"], "fun."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Repaso de la semana", "Combina todo: describe tu cuerpo, di que tienes hambre y qué quieres comer, y habla de tu juguete favorito.", "Habla 1-2 minutos combinando cuerpo, comida y juguetes.", "combinar cuerpo, comida y juguetes", "I've got two eyes, I'm hungry, I want an apple, My favourite toy is a teddy bear"),

    SUMMARY("Resumen de la Semana 3", [
      "¡Enhorabuena! Terminaste la Semana 3: el cuerpo, la comida y los juguetes.",
      "Ahora, tu tercera prueba. ¡Cuenta tus aciertos como estrellas! 🌟",
      "La semana que viene: ¡la ropa!",
    ]),
    INFO("Prueba de la Semana 3 🌟", "En el módulo siguiente tienes la prueba de la semana. No hay nota ni aprobado/suspenso — ¡sigue practicando lo que te cueste más!"),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Mi cuerpo · I've got... · La comida · Los juguetes",
  description: "Tercera semana: las partes de la cara y el cuerpo con 'I've got...', la comida básica con 'I'm hungry / I want...', y los juguetes con 'My favourite toy is...'. Cada día, las 4 destrezas con el formato real de Starters.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
