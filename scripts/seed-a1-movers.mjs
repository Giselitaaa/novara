/**
 * A1 Movers (Cambridge English Qualifications: Young Learners) — PROGRAMA COMPLETO.
 *
 * Currículo LÚDICO por UNIDADES para niños (~8–11 años), con cadencia de academia:
 *   • 7 unidades temáticas con VOCABULARIO ilustrado (emojis) + flashcards.
 *   • Una GRAMÁTICA por unidad (present simple, pasado, comparativos, going to…).
 *   • PRÁCTICA del formato REAL del test (Reading & Writing, varias partes).
 *   • 2 "Pruebas de Escudos" 🛡️ (sin aprobado ni suspenso: se cuentan aciertos).
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * En YLE NO hay nota numérica: se dan SHIELDS (escudos, 1–5 por prueba).
 *
 * Idempotente. Reemplaza el curso a1-movers. NO toca Starters ni Flyers.
 *   node scripts/seed-a1-movers.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "a1-movers";
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
    n: 1, title: "Los días, la hora y mis rutinas", emoji: "⏰",
    vocab: {
      title: "Tiempo y rutinas",
      deck: [
        ["Monday", "lunes", "On Monday I go to school. 📅", "día"],
        ["weekend", "fin de semana", "At the weekend I play. ", "tiempo"],
        ["morning", "mañana", "in the morning ☀️", "tiempo"],
        ["afternoon", "tarde", "in the afternoon", "tiempo"],
        ["evening", "tarde-noche", "in the evening 🌆", "tiempo"],
        ["night", "noche", "at night 🌙", "tiempo"],
        ["o'clock", "en punto", "It's three o'clock. 🕒", "hora"],
        ["half past", "y media", "half past two 🕝", "hora"],
        ["always", "siempre", "I always brush my teeth.", "frecuencia"],
        ["sometimes", "a veces", "I sometimes read.", "frecuencia"],
        ["never", "nunca", "I never eat snails.", "frecuencia"],
        ["every day", "cada día", "I go to school every day.", "tiempo"],
      ],
      exercise: {
        title: "Tiempo y rutinas", instructions: "Elige la palabra.",
        questions: [
          mc("☀️ = ?", ["morning", "night", "weekend"], 0, "morning = mañana."),
          mc("🌙 = ?", ["afternoon", "night", "morning"], 1, "night = noche."),
          mc("🕒 It's three ___", ["o'clock", "half past"], 0, "three o'clock = las tres en punto."),
          mc("I ___ eat snails! (nunca)", ["always", "never"], 1, "never = nunca."),
          mc("📅 = ?", ["Monday", "morning", "night"], 0, "Monday = lunes."),
          mc("I read ___ (a veces)", ["sometimes", "never"], 0, "sometimes = a veces."),
        ],
      },
    },
    structure: {
      title: "Present simple · frecuencia · la hora",
      blocks: [
        "Rutinas con present simple: I get up at seven. She goes to school. (3ª persona: +s → he plays ⚽).\nFrecuencia (antes del verbo): always, usually, often, sometimes, never. → I always have breakfast. 🥣\nLa hora: It's three o'clock 🕒. It's half past two 🕝 (y media).",
      ],
      exercise: {
        title: "Rutinas y hora", instructions: "Escribe o elige.",
        questions: [
          fb("She ___ (go) to school every day. (3ª persona)", ["goes"], "3ª persona: goes."),
          mc("I ___ eat snails! (nunca)", ["always", "never"], 1, "never = nunca."),
          fb("🕒 It's three ___", ["o'clock"], "three o'clock."),
          fb("🕝 It's half ___ two", ["past"], "half past two = las dos y media."),
          mc("He ___ football. (3ª persona)", ["play", "plays"], 1, "he plays."),
          fb("I ___ brush my teeth. (siempre)", ["always"], "always = siempre."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 4 (elige la palabra)", weight: 5,
      title: "Test — Completa el texto (Mi día)", instructions: "Lee y elige la palabra correcta para cada hueco.",
      questions: [
        mc("Every day I ___ up at seven.", ["get", "go", "have"], 0, "get up = levantarse."),
        mc("I ___ breakfast. 🥣", ["have", "do", "play"], 0, "have breakfast."),
        mc("I go to ___. 🏫", ["school", "dog", "red"], 0, "go to school."),
        mc("After school I ___ with my friends.", ["play", "eat", "sleep"], 0, "play with friends."),
        mc("At night I ___ to bed. 🌙", ["go", "get", "play"], 0, "go to bed."),
      ],
    },
  },

  {
    n: 2, title: "Mi ciudad y los lugares", emoji: "🏙️",
    vocab: {
      title: "La ciudad",
      deck: [
        ["town", "ciudad/pueblo", "I live in a town. 🏙️", "lugar"],
        ["shop", "tienda", "a toy shop 🏬", "lugar"],
        ["library", "biblioteca", "the library 📚", "lugar"],
        ["hospital", "hospital", "the hospital 🏥", "lugar"],
        ["park", "parque", "the park 🏞️", "lugar"],
        ["school", "colegio", "my school 🏫", "lugar"],
        ["station", "estación", "the train station 🚉", "lugar"],
        ["cinema", "cine", "the cinema 🎬", "lugar"],
        ["café", "cafetería", "a café ☕", "lugar"],
        ["market", "mercado", "the market", "lugar"],
        ["bus stop", "parada de autobús", "at the bus stop 🚏", "lugar"],
        ["street", "calle", "in the street", "lugar"],
      ],
      exercise: {
        title: "Lugares de la ciudad", instructions: "Elige la palabra.",
        questions: [
          mc("📚 = ?", ["library", "hospital", "cinema"], 0, "library = biblioteca."),
          mc("🏥 = ?", ["park", "hospital", "shop"], 1, "hospital."),
          mc("🎬 = ?", ["café", "cinema", "station"], 1, "cinema = cine."),
          mc("🏞️ = ?", ["park", "street", "market"], 0, "park = parque."),
          mc("🚉 = ?", ["bus stop", "station", "shop"], 1, "station = estación."),
          mc("☕ = ?", ["café", "library", "school"], 0, "café = cafetería."),
        ],
      },
    },
    structure: {
      title: "There is / are · preposiciones de lugar",
      blocks: [
        "Hay: There is a park. 🏞️  There are two shops. 🏬🏬\nDónde está: next to (al lado), between (entre), in front of (delante), behind (detrás), opposite (enfrente).\nThe shop is next to the café. ☕🏬  The car is behind the house. 🚗🏠",
      ],
      exercise: {
        title: "¿Qué hay y dónde?", instructions: "Escribe o elige.",
        questions: [
          mc("There ___ two shops. (is/are)", ["is", "are"], 1, "plural → are."),
          fb("There ___ a park. (singular)", ["is"], "singular → is."),
          fb("The bank is ___ to the café. (al lado)", ["next"], "next to = al lado."),
          mc("The car is ___ the house. 🚗🏠 (detrás)", ["behind", "next"], 0, "behind = detrás."),
          fb("There ___ three cars. (plural)", ["are"], "plural → are."),
          mc("🏥 It's a ___", ["hospital", "library"], 0, "hospital."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 2 (sobre un dibujo)", weight: 5,
      title: "Test — Mira la calle", instructions: "Dibujo: una calle con una biblioteca 📚 al lado de un hospital 🏥, y un autobús 🚌 delante. Responde:",
      questions: [
        yesno("There is a library. 📚", true, "Sí, hay una biblioteca."),
        yesno("The hospital is next to the library. 🏥📚", true, "Sí, están al lado."),
        yesno("There are three buses.", false, "No: hay un autobús (one bus)."),
        fb("What is next to the hospital? The ___", ["library"], "La biblioteca está al lado."),
        fb("How many buses are there? ___", ["one", "1"], "Hay un autobús = one."),
      ],
    },
  },

  {
    n: 3, title: "Trabajos y personas", emoji: "👩‍⚕️",
    vocab: {
      title: "Trabajos",
      deck: [
        ["doctor", "médico/a", "a doctor 👩‍⚕️", "trabajo"],
        ["teacher", "profesor/a", "my teacher 👩‍🏫", "trabajo"],
        ["farmer", "granjero/a", "a farmer 👨‍🌾", "trabajo"],
        ["cook", "cocinero/a", "a cook 👨‍🍳", "trabajo"],
        ["nurse", "enfermero/a", "a nurse 🧑‍⚕️", "trabajo"],
        ["driver", "conductor/a", "a bus driver 🚌", "trabajo"],
        ["police officer", "policía", "a police officer 👮", "trabajo"],
        ["firefighter", "bombero/a", "a firefighter 🧑‍🚒", "trabajo"],
        ["dentist", "dentista", "a dentist 🦷", "trabajo"],
        ["pilot", "piloto", "a pilot ✈️", "trabajo"],
        ["artist", "artista", "an artist 🎨", "trabajo"],
        ["singer", "cantante", "a singer 🎤", "trabajo"],
      ],
      exercise: {
        title: "¿Qué trabajo es?", instructions: "Elige la palabra.",
        questions: [
          mc("👩‍⚕️ = ?", ["doctor", "farmer", "singer"], 0, "doctor."),
          mc("👨‍🌾 = ?", ["cook", "farmer", "pilot"], 1, "farmer = granjero."),
          mc("✈️ flies planes = ?", ["pilot", "driver", "artist"], 0, "pilot = piloto."),
          mc("👩‍🏫 = ?", ["nurse", "teacher", "cook"], 1, "teacher = profesora."),
          mc("🧑‍🚒 = ?", ["police officer", "firefighter", "dentist"], 1, "firefighter = bombero."),
          mc("🎨 = ?", ["artist", "singer", "doctor"], 0, "artist = artista."),
        ],
      },
    },
    structure: {
      title: "Preguntas con do/does · Wh- · Why → Because",
      blocks: [
        "Preguntas: Do you like…? Does she work here? (con he/she/it → does).\nWh- preguntas: What? Where? When? Who? Why?\nWhy…? → Because… (porque). → Why do you like it? — Because it's fun!\n3ª persona: He works. She teaches (+es tras -ch, -sh, -s, -o).",
      ],
      exercise: {
        title: "Preguntas y trabajos", instructions: "Escribe o elige.",
        questions: [
          fb("___ she like cats? (Do/Does)", ["Does"], "she → Does."),
          mc("He ___ in a hospital.", ["work", "works"], 1, "he works."),
          fb("She ___ English. (teach + es)", ["teaches"], "teaches."),
          mc("___ do you like it? — Because it's fun.", ["Why", "Where"], 0, "Why → Because."),
          fb("A ___ helps sick people. 👩‍⚕️", ["doctor", "nurse"], "doctor/nurse."),
          mc("A ___ flies planes. ✈️", ["pilot", "farmer"], 0, "pilot."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 1 (definición → palabra)", weight: 5,
      title: "Test — ¿Qué palabra es?", instructions: "Lee la definición y escribe o elige la palabra.",
      questions: [
        mc("This person teaches children. A ___", ["teacher", "driver"], 0, "teacher."),
        mc("This person grows food on a farm. A ___", ["farmer", "cook"], 0, "farmer."),
        fb("This person helps sick people in a hospital. A ___ (nurse/doctor)", ["nurse", "doctor"], "nurse o doctor."),
        mc("This person cooks food in a kitchen. A ___", ["cook", "pilot"], 0, "cook."),
        fb("This flies in the sky and carries people. A ___ ✈️", ["plane", "aeroplane", "airplane"], "plane = avión."),
      ],
    },
  },

  {
    n: 4, title: "Animales y la naturaleza", emoji: "🦁🌲",
    vocab: {
      title: "Animales salvajes y naturaleza",
      deck: [
        ["lion", "león", "a lion 🦁", "animal"],
        ["tiger", "tigre", "a tiger 🐯", "animal"],
        ["bear", "oso", "a bear 🐻", "animal"],
        ["giraffe", "jirafa", "a tall giraffe 🦒", "animal"],
        ["snake", "serpiente", "a snake 🐍", "animal"],
        ["whale", "ballena", "a big whale 🐳", "animal"],
        ["dolphin", "delfín", "a dolphin 🐬", "animal"],
        ["mountain", "montaña", "a high mountain ⛰️", "naturaleza"],
        ["river", "río", "a long river", "naturaleza"],
        ["forest", "bosque", "a green forest 🌲", "naturaleza"],
        ["desert", "desierto", "a hot desert 🏜️", "naturaleza"],
        ["sea", "mar", "the blue sea 🌊", "naturaleza"],
      ],
      exercise: {
        title: "Animales y naturaleza", instructions: "Elige la palabra.",
        questions: [
          mc("🦒 = ?", ["lion", "giraffe", "bear"], 1, "giraffe = jirafa."),
          mc("🐬 = ?", ["whale", "dolphin", "snake"], 1, "dolphin = delfín."),
          mc("⛰️ = ?", ["mountain", "river", "forest"], 0, "mountain = montaña."),
          mc("🐻 = ?", ["tiger", "bear", "lion"], 1, "bear = oso."),
          mc("🏜️ hot and dry = ?", ["forest", "desert", "sea"], 1, "desert = desierto."),
          mc("🌊 = ?", ["river", "sea", "mountain"], 1, "sea = mar."),
        ],
      },
    },
    structure: {
      title: "Comparativos y superlativos",
      blocks: [
        "Comparar: adjetivo + -er + than → bigger than, taller than. 🦒\nEl más…: the + adjetivo + -est → the biggest, the tallest.\nAdjetivos largos: more / the most → more beautiful, the most beautiful.\nIrregulares: good→better→best; bad→worse→worst.",
      ],
      exercise: {
        title: "Comparar animales", instructions: "Escribe o elige.",
        questions: [
          fb("A giraffe is ___ (tall) than a dog. 🦒", ["taller"], "tall → taller."),
          fb("An elephant is the ___ (big) animal here. 🐘", ["biggest"], "big → the biggest."),
          mc("A lion is ___ than a cat. (strong)", ["more strong", "stronger"], 1, "strong → stronger."),
          fb("This book is ___ (good) than that one. (irregular)", ["better"], "good → better."),
          fb("Everest is the ___ (high) mountain. ⛰️", ["highest"], "high → the highest."),
          mc("A whale is ___ than a fish. 🐳", ["bigger", "biggest"], 0, "comparativo → bigger."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 5 (responde sobre la historia)", weight: 5,
      title: "Test — El día en el zoo", instructions: "Historia: Ayer Tom fue al zoo 🦁. Vio un león grande y una jirafa alta 🦒. La jirafa era más alta que el león. Su animal favorito fue el delfín 🐬. Tomó un helado 🍦. Responde:",
      questions: [
        fb("Where did Tom go? To the ___ 🦁", ["zoo"], "Fue al zoo."),
        fb("What was taller, the lion or the giraffe? The ___ 🦒", ["giraffe"], "La jirafa era más alta."),
        fb("What was Tom's favourite animal? The ___ 🐬", ["dolphin"], "El delfín."),
        yesno("Did Tom have an ice cream? 🍦", true, "Sí, tomó un helado."),
        yesno("Did Tom see a lion? 🦁", true, "Sí, vio un león."),
      ],
    },
    shield: 1,
  },

  {
    n: 5, title: "En el pasado (un día especial)", emoji: "🏖️",
    vocab: {
      title: "El pasado y las vacaciones",
      deck: [
        ["yesterday", "ayer", "Yesterday I played. ", "tiempo"],
        ["went", "fue/fui (go)", "I went to the park.", "pasado"],
        ["saw", "vio/vi (see)", "I saw a lion. 🦁", "pasado"],
        ["had", "tuvo/tuve (have)", "I had lunch. 🍽️", "pasado"],
        ["ate", "comió/comí (eat)", "I ate an apple. 🍎", "pasado"],
        ["played", "jugó/jugué (play)", "I played football. ⚽", "pasado"],
        ["watched", "vio/vi (watch)", "I watched TV. 📺", "pasado"],
        ["bought", "compró/compré (buy)", "I bought a toy. 🧸", "pasado"],
        ["swam", "nadó/nadé (swim)", "I swam in the sea. 🏊", "pasado"],
        ["holiday", "vacaciones", "on holiday 🏖️", "tiempo"],
        ["beach", "playa", "at the beach 🏖️", "lugar"],
        ["picnic", "picnic", "We had a picnic. 🧺", "sustantivo"],
      ],
      exercise: {
        title: "Verbos en pasado", instructions: "Elige el pasado correcto.",
        questions: [
          mc("go → ___", ["goed", "went"], 1, "go → went (irregular)."),
          mc("eat → ___", ["ate", "eated"], 0, "eat → ate (irregular)."),
          mc("play → ___", ["played", "plaid"], 0, "play → played (regular)."),
          mc("see → ___", ["saw", "seed"], 0, "see → saw (irregular)."),
          mc("buy → ___", ["buyed", "bought"], 1, "buy → bought (irregular)."),
          mc("watch → ___", ["watched", "watch"], 0, "watch → watched (regular)."),
        ],
      },
    },
    structure: {
      title: "Past simple: was/were, -ed, irregulares, did",
      blocks: [
        "Pasado de 'to be': I/he/she/it was; you/we/they were. → I was happy. 😀  They were at home.\nVerbos regulares: + -ed → played, watched, visited.\nIrregulares comunes: go→went, see→saw, have→had, eat→ate, buy→bought, swim→swam.\nNegativo y pregunta con did: I didn't go. Did you go? 🤔",
      ],
      exercise: {
        title: "Habla del pasado", instructions: "Escribe o elige.",
        questions: [
          fb("Yesterday I ___ (go) to the park. (irregular)", ["went"], "go → went."),
          fb("She ___ (play) football. (regular)", ["played"], "play → played."),
          fb("We ___ (be, plural) at the beach. 🏖️", ["were"], "we → were."),
          fb("I ___ (eat) an apple. 🍎 (irregular)", ["ate"], "eat → ate."),
          mc("___ you go to school? (pasado)", ["Did", "Do"], 0, "Pregunta en pasado → Did."),
          fb("He ___ (be, singular) happy.", ["was"], "he → was."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 4 (elige la palabra, en pasado)", weight: 5,
      title: "Test — Un día en la playa", instructions: "Lee y elige la palabra correcta (¡es una historia en pasado!).",
      questions: [
        mc("Last Saturday we ___ to the beach. 🏖️", ["went", "go"], 0, "pasado → went."),
        mc("The sun ___ hot. ☀️", ["was", "were"], 0, "the sun (singular) → was."),
        mc("We ___ a picnic. 🧺", ["had", "have"], 0, "pasado → had."),
        mc("I ___ in the sea. 🏊", ["swam", "swim"], 0, "pasado → swam."),
        mc("It ___ a great day!", ["was", "are"], 0, "it → was."),
      ],
    },
  },

  {
    n: 6, title: "El cuerpo, la salud y sentirse mal", emoji: "🤒",
    vocab: {
      title: "Salud",
      deck: [
        ["headache", "dolor de cabeza", "I've got a headache. 🤕", "salud"],
        ["toothache", "dolor de muelas", "a toothache 🦷", "salud"],
        ["stomach-ache", "dolor de tripa", "a stomach-ache", "salud"],
        ["a cold", "un resfriado", "I've got a cold. 🤧", "salud"],
        ["temperature", "fiebre", "a high temperature 🌡️", "salud"],
        ["cough", "tos", "a bad cough", "salud"],
        ["medicine", "medicina", "take medicine 💊", "salud"],
        ["tired", "cansado", "I'm tired. 😴", "salud"],
        ["ill", "enfermo", "She is ill.", "salud"],
        ["better", "mejor", "I feel better.", "salud"],
        ["nurse", "enfermero/a", "the nurse 🧑‍⚕️", "persona"],
        ["hospital", "hospital", "at the hospital 🏥", "lugar"],
      ],
      exercise: {
        title: "Salud", instructions: "Elige la palabra.",
        questions: [
          mc("🤕 = ?", ["headache", "cough", "better"], 0, "headache = dolor de cabeza."),
          mc("🦷 pain in your tooth = ?", ["a cold", "toothache", "tired"], 1, "toothache."),
          mc("💊 = ?", ["medicine", "nurse", "temperature"], 0, "medicine = medicina."),
          mc("😴 = ?", ["ill", "tired", "better"], 1, "tired = cansado."),
          mc("🤧 = ?", ["a cold", "toothache", "cough"], 0, "a cold = resfriado."),
          mc("🌡️ high = ?", ["temperature", "medicine", "nurse"], 0, "temperature = fiebre."),
        ],
      },
    },
    structure: {
      title: "must · have to · should (consejos)",
      blocks: [
        "must = deber (importante): You must take your medicine. 💊\nhave to = tener que: I have to see the doctor. 👩‍⚕️\nshould = deberías (consejo): You should rest. 😴  You shouldn't run.\nDolores: I've got a headache. My tooth hurts. 🦷",
      ],
      exercise: {
        title: "Consejos de salud", instructions: "Escribe o elige.",
        questions: [
          mc("You look tired. You ___ rest. (deberías)", ["should", "shouldn't"], 0, "should = deberías."),
          fb("I have a headache, so I ___ see a doctor. (tener que, 2 palabras)", ["have to"], "have to = tener que."),
          fb("You ___ take your medicine every day. (deber, importante)", ["must"], "must = deber."),
          mc("You ___ eat sweets all day! (no deberías)", ["should", "shouldn't"], 1, "shouldn't = no deberías."),
          fb("I've got a ___ 🦷 (dolor de muelas, 1 palabra)", ["toothache"], "toothache."),
          mc("🤧 I've got a ___", ["cold", "holiday"], 0, "a cold = resfriado."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 2 (sobre un dibujo)", weight: 5,
      title: "Test — La niña enferma", instructions: "Dibujo: una niña 👧 está en la cama 🛏️. Tiene fiebre 🌡️ y una taza de té ☕. Su mamá le da medicina 💊. Responde:",
      questions: [
        yesno("The girl is in bed. 🛏️", true, "Sí, está en la cama."),
        yesno("She has a temperature. 🌡️", true, "Sí, tiene fiebre."),
        yesno("The girl is playing football.", false, "No, está enferma en la cama."),
        fb("What does mum give her? ___ 💊", ["medicine"], "Le da medicina."),
        fb("Where is the girl? In ___ 🛏️", ["bed"], "En la cama = in bed."),
      ],
    },
  },

  {
    n: 7, title: "Deportes, hobbies y planes", emoji: "🎾",
    vocab: {
      title: "Deportes y hobbies",
      deck: [
        ["football", "fútbol", "play football ⚽", "deporte"],
        ["tennis", "tenis", "play tennis 🎾", "deporte"],
        ["swimming", "natación", "go swimming 🏊", "deporte"],
        ["dancing", "baile", "I love dancing. 💃", "hobby"],
        ["painting", "pintura", "painting is fun 🎨", "hobby"],
        ["reading", "lectura", "I like reading. 📖", "hobby"],
        ["riding a bike", "montar en bici", "riding a bike 🚲", "hobby"],
        ["guitar", "guitarra", "play the guitar 🎸", "hobby"],
        ["skating", "patinaje", "go skating ⛸️", "deporte"],
        ["camping", "acampada", "go camping ⛺", "hobby"],
        ["hobby", "afición", "My hobby is chess.", "sustantivo"],
        ["team", "equipo", "my football team", "sustantivo"],
      ],
      exercise: {
        title: "Deportes y hobbies", instructions: "Elige la palabra.",
        questions: [
          mc("🎾 = ?", ["football", "tennis", "swimming"], 1, "tennis = tenis."),
          mc("🏊 = ?", ["skating", "swimming", "dancing"], 1, "swimming = natación."),
          mc("🎸 play the ___", ["guitar", "team", "hobby"], 0, "guitar = guitarra."),
          mc("💃 = ?", ["painting", "dancing", "reading"], 1, "dancing = baile."),
          mc("🚲 = ?", ["camping", "riding a bike", "skating"], 1, "riding a bike."),
          mc("📖 = ?", ["reading", "football", "tennis"], 0, "reading = lectura."),
        ],
      },
    },
    structure: {
      title: "Present continuous (ahora) · going to (planes) · like + -ing",
      blocks: [
        "Ahora mismo: present continuous = am/is/are + verbo-ing. → I am playing. She is reading. 📖\nPlanes futuros: going to → I am going to swim tomorrow. 🏊\nGustos + -ing: I like swimming. She loves dancing. 💃",
      ],
      exercise: {
        title: "Ahora y mañana", instructions: "Escribe o elige.",
        questions: [
          fb("She ___ (read) now. (is + -ing) 📖", ["is reading"], "is reading."),
          fb("Tomorrow I am ___ to swim. (going)", ["going"], "going to swim = voy a nadar."),
          mc("I like ___. (swim + -ing)", ["swimming", "swim"], 0, "like + -ing → swimming."),
          fb("They ___ (play) in the park now. (are + -ing)", ["are playing"], "are playing."),
          mc("He is ___ the guitar now. 🎸", ["play", "playing"], 1, "is playing."),
          fb("She loves ___ (dance). 💃 (+ -ing)", ["dancing"], "dancing."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 5 (responde sobre la historia)", weight: 5,
      title: "Test — El sábado de Anna", instructions: "Historia: Es sábado. Anna está en el parque 🏞️. Está montando en bici 🚲. Su hermano juega al fútbol ⚽ con su equipo. Mañana van a ir a nadar 🏊. El hobby de Anna es pintar 🎨. Responde:",
      questions: [
        fb("Where is Anna? At the ___ 🏞️", ["park"], "En el parque."),
        fb("What is Anna doing now? Riding her ___ 🚲", ["bike"], "Montando en bici."),
        fb("What is her brother playing? ___ ⚽", ["football"], "Fútbol."),
        fb("What are they going to do tomorrow? Go ___ 🏊", ["swimming"], "Van a ir a nadar."),
        fb("What is Anna's hobby? ___ 🎨", ["painting"], "Pintar."),
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  A1 Movers anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "A1 Movers (Cambridge English para niños)", subtitle: "El segundo examen de inglés de Cambridge para niños, con juegos.",
      description: "Preparación completa para A1 Movers (Cambridge English Qualifications: Young Learners), el segundo examen de inglés para niños. Programa lúdico de 7 unidades: rutinas y la hora, la ciudad, trabajos, animales y naturaleza (comparativos), el pasado simple, la salud y los deportes/planes. Cada unidad tiene vocabulario ilustrado con flashcards, una gramática y práctica del formato real del test, más pruebas de 'escudos'. En los exámenes para niños NO hay aprobado ni suspenso: se dan shields (escudos). Audio con voz británica real.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "A1 Movers para niños — Programa con juegos — NOVARA", seoDescription: "Prepara el Cambridge A1 Movers con 7 unidades lúdicas: vocabulario ilustrado, gramática (pasado, comparativos, going to), práctica del test y escudos.",
      objectives: { create: [
        "Ampliar vocabulario (ciudad, trabajos, animales, deportes) con dibujos.",
        "Usar present simple, pasado simple, comparativos y going to.",
        "Practicar varias partes del test Reading & Writing.",
        "Escuchar inglés británico real y hablar por voz.",
        "Ganar 'escudos' sin miedo: en Movers no hay aprobado ni suspenso.",
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

  const m0 = await createModule("Guía de Movers", "Cómo es el test y qué son los escudos.", 0);
  await createLesson(m0.id, {
    title: "¿Cómo es Movers? 🛡️", description: "Las 3 partes y los escudos.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "A1 Movers es el SEGUNDO examen de inglés de Cambridge para niños (después de Starters). Es un poco más largo, pero ¡sigue siendo divertido! Tiene 3 partes: Listening, Reading & Writing y Speaking." },
      { type: "GRAMMAR", title: "Las tres partes", content: "• Listening 🎧: escuchas y respondes.\n• Reading & Writing ✏️: lees frases e historias fáciles y escribes palabras.\n• Speaking 🗣️: hablas con un examinador amable sobre dibujos e historias." },
      { type: "NOTES", title: "¡No hay aprobado ni suspenso!", content: "En los exámenes para niños NO se aprueba ni se suspende: se dan SHIELDS (escudos 🛡️), de 1 a 5 por cada parte. ¡Todos los niños reciben un certificado!", data: { variant: "info" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["7 unidades con juegos y dibujos.", "Vocabulario + una gramática + práctica del test.", "2 Pruebas de Escudos 🛡️ (unidades 4 y 7).", "En Movers todos ganan escudos: ¡sin miedo!"] } },
    ],
    pedagogy: { objective: "Entender qué es Movers y que se puntúa con escudos.", summary: "Movers: 3 partes; se dan escudos (1-5), sin aprobado/suspenso.", reviewPrompts: ["¿Cuántas partes tiene Movers?"] },
  });

  const readingExerciseIds = [];
  let sortOrder = 1;
  for (const u of UNITS) {
    const m = await createModule(`Unidad ${u.n} — ${u.title} ${u.emoji}`, `Vocabulario, una gramática y práctica del test (unidad ${u.n}).`, sortOrder++);
    const deck = await db.flashcardDeck.create({
      data: { title: `Movers — Unidad ${u.n}: ${u.vocab.title}`, description: "Vocabulario con dibujos.", language: "en", authorId: adminUser.id,
        cards: { create: u.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "A1" })) } },
    });
    await createLesson(m.id, {
      title: `Vocabulario — ${u.vocab.title} ${u.emoji}`, description: "Palabras nuevas con dibujos + flashcards + juego.", sortOrder: 0,
      blocks: [
        { type: "GRAMMAR", title: "Palabras de la unidad", content: "Mira los dibujos y aprende las palabras con las flashcards. ¡Repite en voz alta!" },
        { type: "FLASHCARDS", deckId: deck.id },
      ],
      pedagogy: { objective: `Aprender el vocabulario de ${u.title}.`, summary: u.vocab.title, reviewPrompts: ["Repasa las flashcards cada día."] },
      exercises: [{ category: "reading", title: u.vocab.exercise.title, instructions: u.vocab.exercise.instructions, questions: u.vocab.exercise.questions }],
    });
    await createLesson(m.id, {
      title: `Gramática — ${u.structure.title}`, description: "La regla de la unidad + práctica.", sortOrder: 1,
      blocks: u.structure.blocks.map((content, i) => ({ type: "GRAMMAR", title: i === 0 ? u.structure.title : null, content })),
      pedagogy: { objective: `Usar: ${u.structure.title}.`, summary: u.structure.title, reviewPrompts: ["Di una frase con esta regla."] },
      exercises: [{ category: "reading", title: u.structure.exercise.title, instructions: u.structure.exercise.instructions, questions: u.structure.exercise.questions }],
    });
    const ids = await createLesson(m.id, {
      title: `Práctica del test — ${u.test.part}`, description: "Como en el examen real, pero con juegos.", sortOrder: 2,
      blocks: [{ type: "GRAMMAR", title: "Práctica del test", content: `Esta unidad practicas: ${u.test.part}. ¡Lee con calma! 🛡️` }],
      pedagogy: { objective: `Practicar el formato real: ${u.test.part}.`, summary: u.test.part, reviewPrompts: ["Lee despacio cada frase."] },
      exercises: [{ category: "reading", title: u.test.title, instructions: u.test.instructions, questions: u.test.questions }],
    });
    readingExerciseIds.push({ id: ids[0], weight: u.test.weight });

    if (u.shield) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: `Prueba de Escudos ${u.shield} — Movers 🛡️`, passingScore: 50, timeLimitMinutes: 25,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🛡️ Prueba de Escudos ${u.shield}`, `Repaso divertido de las unidades hasta aquí.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Prueba de Escudos ${u.shield} 🛡️`, description: "Cuenta tus aciertos: ¡son tus escudos!", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "¿Cómo funciona?", content: "En Movers NO hay aprobado ni suspenso. Cuenta cuántas respuestas aciertas: ¡son tus ESCUDOS 🛡️! Cuantos más aciertes, más escudos ganas. Reúne las preguntas de las unidades vistas hasta ahora. ¡A jugar!", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Repasar lo aprendido y ganar escudos.", summary: `Prueba de escudos ${u.shield}.`, reviewPrompts: ["Si fallas alguna, repasa la unidad."] },
      });
    }
  }

  const ms = await createModule("Listening y Speaking", "Escuchar inglés británico real y hablar por voz.", sortOrder++);
  const talk = "Hello! My name is Ben. Yesterday was Saturday, so I went to the zoo with my family. I saw a big brown bear and a very tall giraffe. My favourite animal was the dolphin, because it can swim very fast. We had a picnic near the river, and I ate a cheese sandwich. It was a lovely day!";
  const audio = await generateListeningAudio(talk, "movers-zoo");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — El día de Ben en el zoo 🦁", description: "Escucha (voz británica) y elige.", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír a Ben contar lo que hizo AYER. Escucha los animales, la comida y los verbos en pasado. Puedes repetir el audio. 🎧" },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper (localhost:5001) y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Entender una historia sencilla en pasado (animales, comida, verbos).", commonMistakes: ["Fijarse solo en el presente: ¡es una historia de ayer!"], reviewPrompts: ["¿Cuál era el animal favorito de Ben?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "El día de Ben en el zoo", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("When did Ben go to the zoo?", ["Saturday", "Sunday", "Monday"], 0, "'Yesterday was Saturday, so I went to the zoo'."),
      mc("What was Ben's favourite animal? 🐬", ["bear", "giraffe", "dolphin"], 2, "'My favourite animal was the dolphin'."),
      mc("What did Ben eat? 🥪", ["a cheese sandwich", "an apple", "cake"], 0, "'I ate a cheese sandwich'."),
      mc("Where did they have a picnic?", ["near the river", "at school", "at home"], 0, "'We had a picnic near the river'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Habla con la IA 🗣️", description: "Cuenta lo que hiciste y habla de dibujos.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. La IA (por voz, en inglés) te preguntará por tus rutinas, lo que hiciste ayer y qué te gusta. Responde por el micrófono con frases cortas. 🎤\nImportante para los papás: abrid la app en http://localhost:3001 (no en la IP de red) para que funcione el micrófono." }],
    pedagogy: { objective: "Responder y hacer preguntas sencillas en presente y pasado por voz.", summary: "Conversación sencilla por voz con la IA (Movers).", reviewPrompts: ["¿Cómo dices qué hiciste ayer en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "A1 (Movers)", scenario: "una charla sencilla para un niño: rutinas diarias, lo que hizo el fin de semana, animales favoritos y hobbies", objective: "que el niño hable de sus rutinas (presente) y de lo que hizo ayer (pasado simple), y describa gustos, con frases cortas", keywords: "every day I, yesterday I went, I saw, I like, it was fun" }, title: "Habla con la IA", instructions: "Responde a las preguntas de la IA por el micrófono.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "Movers — Unidad" } } } }),
    escudos: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ A1 Movers (programa lúdico 7 unidades) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error Movers:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
