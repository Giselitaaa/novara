/**
 * Pre A1 Starters (Cambridge English Qualifications: Young Learners) — PROGRAMA COMPLETO.
 *
 * Currículo LÚDICO por UNIDADES para niños (~6–8 años), con cadencia de academia:
 *   • 6 unidades temáticas con VOCABULARIO ilustrado (emojis) + flashcards.
 *   • Una ESTRUCTURA sencilla por unidad (It's a…, I've got…, can, preposiciones…).
 *   • PRÁCTICA del formato REAL del test (Reading & Writing, todas las partes).
 *   • 2 "Pruebas de Escudos" 🛡️ (sin aprobado ni suspenso: se cuentan aciertos).
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * En YLE NO hay nota numérica: se dan SHIELDS (escudos, 1–5 por prueba).
 *
 * Idempotente. Reemplaza el curso pre-a1-starters. NO toca Movers ni Flyers.
 *   node scripts/seed-pre-a1-starters.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "pre-a1-starters";
const PIPER_URL = (process.env.PIPER_URL || "http://localhost:5001").replace(/\/$/, "");
const VOICE = "en_GB-cori-high";

async function generateListeningAudio(text, filename) {
  try {
    const res = await fetch(PIPER_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, voice: VOICE }) });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (!buf.length) return null;
    const dir = path.join(process.cwd(), "public", "uploads", "listening");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, `${filename}.wav`), buf);
    return `/uploads/listening/${filename}.wav`;
  } catch { return null; }
}

const mc = (prompt, options, correct, explanation) => ({ kind: "multiple_choice", data: { kind: "multiple_choice", prompt, options, correct: [correct], explanation } });
const fb = (prompt, accepted, explanation) => ({ kind: "fill_blank", data: { kind: "fill_blank", prompt, blanks: [{ accepted }], explanation } });
const yesno = (prompt, isYes, explanation) => mc(prompt, ["Sí (Yes) ✓", "No ✗"], isYes ? 0 : 1, explanation);

const UNITS = [
  {
    n: 1, title: "Colores y números", emoji: "🎨🔢",
    vocab: {
      title: "Colores",
      deck: [
        ["red", "rojo", "The apple is red. 🍎", "color"],
        ["blue", "azul", "The sky is blue. 🔵", "color"],
        ["green", "verde", "The frog is green. 🐸", "color"],
        ["yellow", "amarillo", "The sun is yellow. ☀️", "color"],
        ["orange", "naranja", "An orange ball. 🟠", "color"],
        ["purple", "morado", "A purple flower. 🟣", "color"],
        ["black", "negro", "A black cat. ⚫", "color"],
        ["white", "blanco", "White milk. ⚪", "color"],
        ["pink", "rosa", "A pink pig. 🐷", "color"],
        ["brown", "marrón", "A brown bear. 🐻", "color"],
      ],
      exercise: {
        title: "¿De qué color?", instructions: "Mira el dibujo y elige el color.",
        questions: [
          mc("🍎 What colour?", ["red", "blue", "green"], 0, "The apple is red. 🍎"),
          mc("☀️ What colour?", ["yellow", "black", "pink"], 0, "The sun is yellow. ☀️"),
          mc("🐸 What colour?", ["orange", "green", "white"], 1, "The frog is green. 🐸"),
          mc("🔵 What colour?", ["blue", "red", "brown"], 0, "It's blue. 🔵"),
          mc("🥛 What colour is milk?", ["black", "white", "purple"], 1, "Milk is white. 🥛"),
          mc("🟣 What colour?", ["pink", "purple", "green"], 1, "It's purple. 🟣"),
        ],
      },
    },
    structure: {
      title: "It's + color · Los números (1–20)",
      blocks: [
        "Para decir el color: It's + color. → It's red. 🍎  It's blue. 🔵\nPara contar usamos How many? + número:\none 1, two 2, three 3, four 4, five 5, six 6, seven 7, eight 8, nine 9, ten 10, eleven 11, twelve 12, thirteen 13, fourteen 14, fifteen 15, sixteen 16, seventeen 17, eighteen 18, nineteen 19, twenty 20.",
      ],
      exercise: {
        title: "Números y colores", instructions: "Escribe o elige.",
        questions: [
          fb("3 = ___ (en inglés)", ["three"], "3 = three."),
          fb("5 = ___", ["five"], "5 = five."),
          fb("How many? 🐱🐱 = ___", ["two"], "Hay dos gatos = two."),
          mc("It's ___ 🍎", ["red", "blue"], 0, "The apple is red."),
          fb("10 = ___", ["ten"], "10 = ten."),
          fb("How many? ⚽⚽⚽ = ___", ["three"], "Hay tres balones = three."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 1 (marca ✓ o ✗)", weight: 5,
      title: "Test — ¿Está bien? (✓/✗)", instructions: "Mira el dibujo y la palabra. ¿Está bien?",
      questions: [
        yesno("🔴 = 'red'. ¿Está bien?", true, "Sí, 🔴 es red."),
        yesno("🟢 = 'blue'. ¿Está bien?", false, "No: 🟢 es green, no blue."),
        yesno("☀️ = 'yellow'. ¿Está bien?", true, "Sí, el sol es yellow."),
        yesno("3 = 'three'. ¿Está bien?", true, "Sí, 3 = three."),
        yesno("🐱🐱 = 'three cats'. ¿Está bien?", false, "No: hay dos gatos = two cats."),
      ],
    },
  },

  {
    n: 2, title: "Animales", emoji: "🐾",
    vocab: {
      title: "Animales",
      deck: [
        ["cat", "gato", "It's a cat. 🐱", "animal"],
        ["dog", "perro", "It's a dog. 🐶", "animal"],
        ["bird", "pájaro", "It's a bird. 🐦", "animal"],
        ["fish", "pez", "It's a fish. 🐟", "animal"],
        ["horse", "caballo", "It's a horse. 🐴", "animal"],
        ["duck", "pato", "It's a duck. 🦆", "animal"],
        ["frog", "rana", "It's a frog. 🐸", "animal"],
        ["elephant", "elefante", "It's an elephant. 🐘", "animal"],
        ["monkey", "mono", "It's a monkey. 🐒", "animal"],
        ["lion", "león", "It's a lion. 🦁", "animal"],
      ],
      exercise: {
        title: "¿Qué animal es?", instructions: "Mira el dibujo y elige.",
        questions: [
          mc("🐶 = ?", ["dog", "cat", "fish"], 0, "It's a dog. 🐶"),
          mc("🐟 = ?", ["duck", "fish", "frog"], 1, "It's a fish. 🐟"),
          mc("🦆 = ?", ["duck", "bird", "horse"], 0, "It's a duck. 🦆"),
          mc("🐘 = ?", ["monkey", "lion", "elephant"], 2, "It's an elephant. 🐘"),
          mc("🐒 = ?", ["monkey", "cat", "dog"], 0, "It's a monkey. 🐒"),
          mc("🐴 = ?", ["frog", "horse", "bird"], 1, "It's a horse. 🐴"),
        ],
      },
    },
    structure: {
      title: "It's a / an · I've got a…",
      blocks: [
        "Para un animal: It's a cat. 🐱\nSi la palabra empieza por vocal (a, e, i, o, u) usamos an: It's an elephant. 🐘  It's an orange. 🍊\nPara lo que tienes: I've got a dog. 🐶",
      ],
      exercise: {
        title: "a o an", instructions: "Elige o escribe.",
        questions: [
          fb("It's ___ elephant. (a/an) 🐘", ["an"], "elephant empieza por vocal → an."),
          fb("It's ___ cat. (a/an) 🐱", ["a"], "cat empieza por consonante → a."),
          mc("I've got ___ dog. 🐶", ["a", "an"], 0, "dog → a."),
          fb("It's ___ orange. (a/an) 🍊", ["an"], "orange empieza por vocal → an."),
          mc("🐘 It's a/an ___?", ["elephant", "cat"], 0, "It's an elephant."),
          fb("It's ___ duck. (a/an) 🦆", ["a"], "duck → a."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 2 (Sí/No sobre un dibujo)", weight: 5,
      title: "Test — Mira el dibujo (Sí/No)", instructions: "Dibujo: 🐱 🐶 🐦 (un gato, un perro, un pájaro). ¿Sí o No?",
      questions: [
        yesno("There is a cat. 🐱", true, "Sí, hay un gato."),
        yesno("There are three birds.", false, "No: hay un solo pájaro (one bird)."),
        yesno("There is a dog. 🐶", true, "Sí, hay un perro."),
        yesno("There is a fish. 🐟", false, "No: no hay ningún pez."),
        yesno("There are three animals.", true, "Sí: gato, perro y pájaro = tres animales."),
      ],
    },
  },

  {
    n: 3, title: "Mi familia y mi cuerpo", emoji: "👨‍👩‍👧",
    vocab: {
      title: "Familia y cuerpo",
      deck: [
        ["mum", "mamá", "This is my mum. 👩", "familia"],
        ["dad", "papá", "This is my dad. 👨", "familia"],
        ["brother", "hermano", "my brother 👦", "familia"],
        ["sister", "hermana", "my sister 👧", "familia"],
        ["baby", "bebé", "the baby 👶", "familia"],
        ["grandma", "abuela", "my grandma 👵", "familia"],
        ["eye", "ojo", "two eyes 👁️", "cuerpo"],
        ["nose", "nariz", "a nose 👃", "cuerpo"],
        ["hand", "mano", "two hands ✋", "cuerpo"],
        ["foot", "pie", "two feet 🦶", "cuerpo"],
        ["ear", "oreja", "two ears 👂", "cuerpo"],
        ["mouth", "boca", "a mouth 👄", "cuerpo"],
      ],
      exercise: {
        title: "Familia y cuerpo", instructions: "Elige la palabra.",
        questions: [
          mc("👩 = ?", ["mum", "dad", "baby"], 0, "This is my mum. 👩"),
          mc("👶 = ?", ["brother", "baby", "sister"], 1, "It's a baby. 👶"),
          mc("👁️ = ?", ["nose", "ear", "eye"], 2, "It's an eye. 👁️"),
          mc("✋ = ?", ["hand", "foot", "mouth"], 0, "It's a hand. ✋"),
          mc("👃 = ?", ["ear", "nose", "eye"], 1, "It's a nose. 👃"),
          mc("👨 = ?", ["mum", "dad", "brother"], 1, "This is my dad. 👨"),
        ],
      },
    },
    structure: {
      title: "This is my… · Plural (-s)",
      blocks: [
        "Presenta a tu familia: This is my mum. 👩  This is my brother. 👦\nPlural: añade -s → one hand, two hands ✋✋; one eye, two eyes 👁️👁️.\nAlgunos cambian: one foot → two feet 🦶🦶; one tooth → two teeth. 🦷",
      ],
      exercise: {
        title: "Uno y muchos", instructions: "Escribe o elige.",
        questions: [
          fb("one hand, two ___ ✋✋", ["hands"], "Plural: hands."),
          fb("one foot, two ___ 🦶🦶", ["feet"], "foot cambia a feet."),
          fb("This is my ___ 👶 (bebé)", ["baby"], "baby = bebé."),
          mc("👩 This is my ___", ["mum", "dad"], 0, "This is my mum."),
          fb("one eye, two ___ 👁️👁️", ["eyes"], "Plural: eyes."),
          fb("one ear, two ___ 👂👂", ["ears"], "Plural: ears."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 3 (ordena las letras)", weight: 5,
      title: "Test — Ordena las letras", instructions: "Mira el dibujo y ordena las letras para escribir la palabra.",
      questions: [
        fb("🐱 t · a · c → ___", ["cat"], "cat = gato."),
        fb("👃 n · o · s · e → ___", ["nose"], "nose = nariz."),
        fb("👩 m · u · m → ___", ["mum"], "mum = mamá."),
        fb("✋ h · a · n · d → ___", ["hand"], "hand = mano."),
        fb("🍎 a · p · p · l · e → ___", ["apple"], "apple = manzana."),
      ],
    },
    shield: 1,
  },

  {
    n: 4, title: "Comida y bebida", emoji: "🍎🥛",
    vocab: {
      title: "Comida y bebida",
      deck: [
        ["apple", "manzana", "an apple 🍎", "comida"],
        ["banana", "plátano", "a banana 🍌", "comida"],
        ["egg", "huevo", "an egg 🥚", "comida"],
        ["bread", "pan", "some bread 🍞", "comida"],
        ["milk", "leche", "some milk 🥛", "bebida"],
        ["orange", "naranja", "an orange 🍊", "comida"],
        ["cake", "pastel", "a cake 🍰", "comida"],
        ["chips", "patatas fritas", "some chips 🍟", "comida"],
        ["water", "agua", "some water 💧", "bebida"],
        ["ice cream", "helado", "an ice cream 🍦", "comida"],
      ],
      exercise: {
        title: "¿Qué comida es?", instructions: "Elige la palabra.",
        questions: [
          mc("🍎 = ?", ["apple", "egg", "cake"], 0, "It's an apple. 🍎"),
          mc("🥛 = ?", ["water", "milk", "bread"], 1, "It's milk. 🥛"),
          mc("🍌 = ?", ["orange", "banana", "chips"], 1, "It's a banana. 🍌"),
          mc("🥚 = ?", ["egg", "apple", "cake"], 0, "It's an egg. 🥚"),
          mc("🍰 = ?", ["bread", "cake", "milk"], 1, "It's a cake. 🍰"),
          mc("🍦 = ?", ["ice cream", "water", "chips"], 0, "It's an ice cream. 🍦"),
        ],
      },
    },
    structure: {
      title: "I like… · Do you like…?",
      blocks: [
        "Para tus gustos: I like apples. 🍎  I like cake. 🍰\nPregunta: Do you like bananas? 🍌\nRespuestas cortas: Yes, I do. / No, I don't.",
      ],
      exercise: {
        title: "Me gusta", instructions: "Elige o escribe.",
        questions: [
          mc("I ___ apples. 🍎", ["like", "likes"], 0, "I like apples."),
          fb("Do you like cake? Yes, I ___.", ["do"], "Respuesta corta: Yes, I do."),
          fb("Do you like fish? No, I ___. (contracción)", ["don't", "do not"], "No, I don't."),
          mc("🥛 It's ___", ["milk", "bread"], 0, "It's milk. 🥛"),
          fb("I like ___ 🍌 (banana, en plural)", ["bananas", "banana"], "I like bananas."),
          mc("🥚 It's an ___", ["egg", "apple"], 0, "It's an egg. 🥚"),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 4 (elige la palabra)", weight: 5,
      title: "Test — Elige la palabra correcta", instructions: "Mira el dibujo y elige la palabra.",
      questions: [
        mc("I drink ___ 🥛", ["milk", "cake"], 0, "Se bebe leche: milk."),
        mc("I eat an ___ 🍎", ["apple", "orange"], 0, "🍎 = apple."),
        mc("The ___ is yellow. 🍌", ["banana", "egg"], 0, "El plátano es amarillo: banana."),
        mc("I like ___ 🍰", ["cake", "water"], 0, "🍰 = cake."),
        mc("It's an ___ 🥚", ["egg", "apple"], 0, "🥚 = egg."),
      ],
    },
  },

  {
    n: 5, title: "Mi casa y mis juguetes", emoji: "🏠🧸",
    vocab: {
      title: "Casa y juguetes",
      deck: [
        ["bed", "cama", "a bed 🛏️", "casa"],
        ["chair", "silla", "a chair 🪑", "casa"],
        ["door", "puerta", "a door 🚪", "casa"],
        ["window", "ventana", "a window 🪟", "casa"],
        ["table", "mesa", "a table", "casa"],
        ["ball", "pelota", "a ball ⚽", "juguete"],
        ["teddy", "osito de peluche", "a teddy 🧸", "juguete"],
        ["balloon", "globo", "a balloon 🎈", "juguete"],
        ["kite", "cometa", "a kite 🪁", "juguete"],
        ["car", "coche (de juguete)", "a toy car 🚗", "juguete"],
        ["bike", "bici", "a bike 🚲", "juguete"],
        ["doll", "muñeca", "a doll 🪆", "juguete"],
      ],
      exercise: {
        title: "Casa y juguetes", instructions: "Elige la palabra.",
        questions: [
          mc("🛏️ = ?", ["bed", "chair", "door"], 0, "It's a bed. 🛏️"),
          mc("⚽ = ?", ["teddy", "ball", "kite"], 1, "It's a ball. ⚽"),
          mc("🧸 = ?", ["teddy", "doll", "car"], 0, "It's a teddy. 🧸"),
          mc("🚪 = ?", ["window", "door", "table"], 1, "It's a door. 🚪"),
          mc("🎈 = ?", ["balloon", "bike", "ball"], 0, "It's a balloon. 🎈"),
          mc("🚲 = ?", ["car", "bike", "kite"], 1, "It's a bike. 🚲"),
        ],
      },
    },
    structure: {
      title: "Where's…? · in / on / under",
      blocks: [
        "¿Dónde está? Preposiciones:\nin = dentro 📦, on = encima ⬆️, under = debajo ⬇️.\nWhere's the ball? ⚽  → It's on the bed. 🛏️  /  It's under the chair. 🪑  /  It's in the box. 📦",
      ],
      exercise: {
        title: "¿Dónde está?", instructions: "Elige o escribe.",
        questions: [
          mc("The ball is ___ the table. ⚽🔛🪑 (encima)", ["in", "on", "under"], 1, "encima = on."),
          fb("The cat is ___ the bed. 🐱⬇️🛏️ (debajo)", ["under"], "debajo = under."),
          fb("The toy is ___ the box. 📦 (dentro)", ["in"], "dentro = in."),
          mc("Where's the teddy? It's ___ the chair. 🧸🔛🪑", ["on", "under"], 0, "encima = on."),
          fb("The ball is ___ the chair. ⚽⬇️🪑 (debajo)", ["under"], "debajo = under."),
          mc("🎈 It's a ___", ["balloon", "ball"], 0, "It's a balloon. 🎈"),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 2 (Sí/No sobre un dibujo)", weight: 5,
      title: "Test — Mira la habitación (Sí/No)", instructions: "Dibujo: un dormitorio 🛏️ con un osito 🧸 ENCIMA de la cama y una pelota ⚽ DEBAJO de la cama.",
      questions: [
        yesno("The teddy is on the bed. 🧸🛏️", true, "Sí, el osito está encima."),
        yesno("The ball is on the bed.", false, "No: la pelota está debajo (under)."),
        yesno("There is a bed. 🛏️", true, "Sí, hay una cama."),
        yesno("The teddy is under the bed.", false, "No: el osito está encima (on)."),
        yesno("The ball is under the bed. ⚽", true, "Sí, la pelota está debajo."),
      ],
    },
  },

  {
    n: 6, title: "Ropa, tiempo y acciones", emoji: "👕☀️🏃",
    vocab: {
      title: "Ropa, tiempo y acciones",
      deck: [
        ["shirt", "camiseta", "a shirt 👕", "ropa"],
        ["dress", "vestido", "a dress 👗", "ropa"],
        ["hat", "gorro/sombrero", "a hat 👒", "ropa"],
        ["shoes", "zapatos", "shoes 👟", "ropa"],
        ["socks", "calcetines", "socks 🧦", "ropa"],
        ["coat", "abrigo", "a coat 🧥", "ropa"],
        ["sunny", "soleado", "It's sunny. ☀️", "tiempo"],
        ["rainy", "lluvioso", "It's rainy. 🌧️", "tiempo"],
        ["run", "correr", "I can run. 🏃", "acción"],
        ["jump", "saltar", "I can jump.", "acción"],
        ["swim", "nadar", "I can swim. 🏊", "acción"],
        ["sing", "cantar", "I can sing. 🎤", "acción"],
      ],
      exercise: {
        title: "Ropa, tiempo y acciones", instructions: "Elige la palabra.",
        questions: [
          mc("👕 = ?", ["shirt", "hat", "coat"], 0, "It's a shirt. 👕"),
          mc("👒 = ?", ["shoes", "hat", "dress"], 1, "It's a hat. 👒"),
          mc("☀️ It's ___", ["rainy", "sunny"], 1, "It's sunny. ☀️"),
          mc("🏊 = ?", ["run", "swim", "sing"], 1, "swim = nadar. 🏊"),
          mc("👟 = ?", ["socks", "shoes", "coat"], 1, "shoes = zapatos. 👟"),
          mc("🎤 = ?", ["sing", "jump", "run"], 0, "sing = cantar. 🎤"),
        ],
      },
    },
    structure: {
      title: "can / can't · She's wearing… · El tiempo",
      blocks: [
        "Lo que puedes hacer: I can run. 🏃  I can swim. 🏊\nLo que no puedes: I can't fly.\nQué llevas puesto (ahora): She's wearing a hat. 👒  He's wearing a shirt. 👕\nEl tiempo: It's sunny. ☀️  It's raining. 🌧️",
      ],
      exercise: {
        title: "Puedo y llevo puesto", instructions: "Elige o escribe.",
        questions: [
          mc("I ___ run. 🏃", ["can", "am"], 0, "I can run."),
          fb("I can't ___ 🏊 (nadar)", ["swim"], "swim = nadar."),
          fb("She's wearing a ___ 👒 (gorro)", ["hat"], "hat = gorro."),
          mc("☀️ It's ___", ["sunny", "rainy"], 0, "It's sunny. ☀️"),
          fb("He's ___ a shirt. 👕 (wear + -ing)", ["wearing"], "He's wearing a shirt."),
          mc("🌧️ It's ___", ["raining", "sunny"], 0, "It's raining. 🌧️"),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 5 (responde sobre la historia)", weight: 5,
      title: "Test — La historia del parque", instructions: "Historia: Un niño 👦 está en el parque 🏞️. It's sunny ☀️. Lleva un gorro rojo 🧢 y puede correr 🏃. Tiene un perro 🐶. Responde:",
      questions: [
        yesno("Is it sunny? ☀️", true, "Sí, it's sunny."),
        fb("What colour is the hat? ___ 🧢", ["red"], "El gorro es rojo = red."),
        fb("What animal has the boy got? A ___ 🐶", ["dog"], "Tiene un perro = a dog."),
        yesno("Can the boy run? 🏃", true, "Sí, he can run."),
        fb("Where is the boy? At the ___ 🏞️ (parque)", ["park"], "Está en el parque = park."),
      ],
    },
    shield: 2,
  },
];

async function main() {
  const [author, category, level, language, status, access, contentTexto] = await Promise.all([
    db.author.findFirst({ where: { isPlatformAuthor: true } }),
    db.category.findFirst({ where: { slug: "idiomas" } }),
    db.courseLevel.findUnique({ where: { key: "principiante" } }),
    db.language.findFirst({ where: { code: "es" } }),
    db.courseStatus.findUnique({ where: { key: "publicado" } }),
    db.accessType.findUnique({ where: { key: "gratis" } }),
    db.contentType.findUnique({ where: { key: "texto" } }),
  ]);
  const missing = Object.entries({ author, category, level, language, status, access, contentTexto }).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) throw new Error("Faltan catálogos: " + missing.join(", "));
  const adminUser = (await db.user.findFirst({ where: { roles: { some: { role: { name: "administrador" } } } }, select: { id: true } })) ?? (await db.user.findFirst({ select: { id: true } }));
  if (!adminUser) throw new Error("No hay usuario para el mazo.");

  const existing = await db.course.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  Pre A1 Starters anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "Pre A1 Starters (Cambridge English para niños)", subtitle: "El primer examen de inglés de Cambridge para niños, con juegos.",
      description: "Preparación completa para Pre A1 Starters (Cambridge English Qualifications: Young Learners), el primer examen de inglés para niños. Programa lúdico de 6 unidades: colores y números, animales, familia y cuerpo, comida, casa y juguetes, y ropa/tiempo/acciones. Cada unidad tiene vocabulario ilustrado con flashcards, una estructura muy sencilla y práctica del formato real del test, más pruebas de 'escudos'. En los exámenes para niños NO hay aprobado ni suspenso: se dan shields (escudos). Audio con voz británica real.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Pre A1 Starters para niños — Programa con juegos — NOVARA", seoDescription: "Prepara el Cambridge Pre A1 Starters con 6 unidades lúdicas: vocabulario ilustrado, estructuras sencillas, práctica del test y escudos.",
      objectives: { create: [
        "Aprender vocabulario básico con dibujos y flashcards.",
        "Usar estructuras muy sencillas (It's a…, I've got…, can, in/on/under).",
        "Practicar todas las partes del test Reading & Writing.",
        "Escuchar inglés británico real y hablar por voz.",
        "Ganar 'escudos' sin miedo: en Starters no hay aprobado ni suspenso.",
      ].map((text, i) => ({ sortOrder: i, text })) },
    },
  });
  console.warn(`✅ Curso creado: ${course.title}`);

  const createModule = (title, description, sortOrder) => db.module.create({ data: { courseId: course.id, title, description, sortOrder } });
  async function createLesson(moduleId, { title, description, sortOrder, blocks = [], pedagogy, exercises = [] }) {
    const lesson = await db.lesson.create({ data: { moduleId, title, description, sortOrder, contentTypeId: contentTexto.id, isPreview: sortOrder === 0 } });
    let order = 0;
    for (const b of blocks) await db.lessonBlock.create({ data: { lessonId: lesson.id, type: b.type, order: order++, title: b.title ?? null, content: b.content ?? null, deckId: b.deckId ?? null, data: b.data ?? undefined } });
    if (pedagogy) await db.lessonPedagogy.create({ data: { lessonId: lesson.id, ...pedagogy } });
    const created = [];
    for (const ex of exercises) {
      const e = await db.exercise.create({ data: { lessonId: lesson.id, category: ex.category, title: ex.title, instructions: ex.instructions ?? null, sortOrder: 0, config: ex.config ?? undefined, questions: { create: ex.questions.map((q, i) => ({ order: i, kind: q.kind, data: q.data })) } } });
      created.push(e.id);
      await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXERCISE", order: order++, data: { exerciseId: e.id } } });
    }
    return created;
  }

  const m0 = await createModule("Guía de Starters", "Cómo es el test y qué son los escudos.", 0);
  await createLesson(m0.id, {
    title: "¿Cómo es Starters? 🛡️", description: "Las 3 partes y los escudos.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "Pre A1 Starters es el PRIMER examen de inglés de Cambridge para niños. ¡Es como jugar! Tiene 3 partes: Listening (escuchar), Reading & Writing (leer y escribir) y Speaking (hablar)." },
      { type: "GRAMMAR", title: "Las tres partes", content: "• Listening 🎧: escuchas y señalas o coloreas.\n• Reading & Writing ✏️: lees palabras y frases muy fáciles y escribes palabras.\n• Speaking 🗣️: hablas con un examinador amable sobre dibujos." },
      { type: "NOTES", title: "¡No hay aprobado ni suspenso!", content: "En los exámenes para niños NO se aprueba ni se suspende: se dan SHIELDS (escudos 🛡️), de 1 a 5 por cada parte. ¡Todos los niños reciben un certificado!", data: { variant: "info" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["6 unidades con juegos y dibujos.", "Vocabulario + una estructura sencilla + práctica del test.", "2 Pruebas de Escudos 🛡️ (unidades 3 y 6).", "En Starters todos ganan escudos: ¡sin miedo!"] } },
    ],
    pedagogy: { objective: "Entender qué es Starters y que se puntúa con escudos.", summary: "Starters: 3 partes; se dan escudos (1-5), sin aprobado/suspenso.", reviewPrompts: ["¿Cuántas partes tiene Starters?"] },
  });

  const readingExerciseIds = [];
  let sortOrder = 1;
  for (const u of UNITS) {
    const m = await createModule(`Unidad ${u.n} — ${u.title} ${u.emoji}`, `Vocabulario, una estructura y práctica del test (unidad ${u.n}).`, sortOrder++);
    const deck = await db.flashcardDeck.create({
      data: { title: `Starters — Unidad ${u.n}: ${u.vocab.title}`, description: "Vocabulario con dibujos.", language: "en", authorId: adminUser.id,
        cards: { create: u.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "Pre A1" })) } },
    });
    await createLesson(m.id, {
      title: `Vocabulario — ${u.vocab.title} ${u.emoji}`, description: "Palabras nuevas con dibujos + flashcards + juego.", sortOrder: 0,
      blocks: [
        { type: "GRAMMAR", title: "Palabras de la unidad", content: "Mira los dibujos y aprende las palabras con las flashcards. ¡Repite en voz alta!" },
        { type: "FLASHCARDS", deckId: deck.id },
      ],
      pedagogy: { objective: `Aprender el vocabulario de ${u.title}.`, summary: u.vocab.title, reviewPrompts: ["Repasa las flashcards con un mayor."] },
      exercises: [{ category: "reading", title: u.vocab.exercise.title, instructions: u.vocab.exercise.instructions, questions: u.vocab.exercise.questions }],
    });
    await createLesson(m.id, {
      title: `Estructura — ${u.structure.title}`, description: "Una frase sencilla + práctica.", sortOrder: 1,
      blocks: u.structure.blocks.map((content, i) => ({ type: "GRAMMAR", title: i === 0 ? u.structure.title : null, content })),
      pedagogy: { objective: `Usar: ${u.structure.title}.`, summary: u.structure.title, reviewPrompts: ["Di una frase con esta estructura."] },
      exercises: [{ category: "reading", title: u.structure.exercise.title, instructions: u.structure.exercise.instructions, questions: u.structure.exercise.questions }],
    });
    const ids = await createLesson(m.id, {
      title: `Práctica del test — ${u.test.part}`, description: "Como en el examen real, pero con juegos.", sortOrder: 2,
      blocks: [{ type: "GRAMMAR", title: "Práctica del test", content: `Esta unidad practicas: ${u.test.part}. ¡Hazlo con calma! 🛡️` }],
      pedagogy: { objective: `Practicar el formato real: ${u.test.part}.`, summary: u.test.part, reviewPrompts: ["Lee despacio cada frase."] },
      exercises: [{ category: "reading", title: u.test.title, instructions: u.test.instructions, questions: u.test.questions }],
    });
    readingExerciseIds.push({ id: ids[0], weight: u.test.weight });

    if (u.shield) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: `Prueba de Escudos ${u.shield} — Starters 🛡️`, passingScore: 50, timeLimitMinutes: 20,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🛡️ Prueba de Escudos ${u.shield}`, `Repaso divertido de las unidades hasta aquí.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Prueba de Escudos ${u.shield} 🛡️`, description: "Cuenta tus aciertos: ¡son tus escudos!", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "¿Cómo funciona?", content: "En Starters NO hay aprobado ni suspenso. Cuenta cuántas respuestas aciertas: ¡son tus ESCUDOS 🛡️! Cuantos más aciertes, más escudos ganas. Reúne las preguntas de las unidades vistas hasta ahora. ¡A jugar!", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Repasar lo aprendido y ganar escudos.", summary: `Prueba de escudos ${u.shield}.`, reviewPrompts: ["Si fallas alguna, repasa la unidad."] },
      });
    }
  }

  const ms = await createModule("Listening y Speaking", "Escuchar inglés británico real y hablar por voz.", sortOrder++);
  const talk = "Hello! Look at the park. I can see a big tree. There is a red ball on the grass. A brown dog is running. The sun is yellow and it is a lovely day. Can you see the two birds? They are singing.";
  const audio = await generateListeningAudio(talk, "starters-park");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — En el parque 🏞️", description: "Escucha (voz británica) y elige.", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír a alguien describir un parque. Escucha los colores, los animales y los números. Puedes repetir el audio. 🎧" },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper (localhost:5001) y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Entender palabras clave (colores, animales, números) al escuchar.", commonMistakes: ["Intentar entenderlo todo: basta con las palabras clave."], reviewPrompts: ["¿De qué color es la pelota?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "En el parque", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("What colour is the ball? ⚽", ["red", "blue", "green"], 0, "'a red ball on the grass'."),
      mc("What is the dog doing? 🐶", ["running", "singing", "sleeping"], 0, "'A brown dog is running'."),
      mc("How many birds? 🐦", ["one", "two", "three"], 1, "'the two birds'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Habla con la IA 🗣️", description: "Di los colores, los animales y lo que te gusta.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. La IA (por voz, en inglés) te hará preguntas muy fáciles: What's your name? What colour is it? Do you like apples? Tú respondes por el micrófono. 🎤\nImportante para los papás: abrid la app en http://localhost:3001 (no en la IP de red) para que funcione el micrófono." }],
    pedagogy: { objective: "Responder preguntas sencillas por voz (nombre, colores, animales, gustos).", summary: "Conversación muy simple por voz con la IA.", reviewPrompts: ["¿Cómo dices tu color favorito en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "Pre-A1 (Starters)", scenario: "una charla muy sencilla para un niño pequeño: saludar, decir el nombre, colores, animales y comida que le gusta", objective: "que el niño diga su nombre, nombre colores y animales y diga qué comida le gusta, con frases muy cortas", keywords: "hello, my name is, it's red, a cat, I like apples" }, title: "Habla con la IA", instructions: "Responde a las preguntas de la IA por el micrófono.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "Starters — Unidad" } } } }),
    escudos: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ Pre A1 Starters (programa lúdico 6 unidades) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error Starters:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
