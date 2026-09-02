/**
 * A2 Flyers (Cambridge English Qualifications: Young Learners) — PROGRAMA COMPLETO.
 *
 * Currículo LÚDICO por UNIDADES para niños (~9–12 años), el más completo de los YLE:
 *   • 8 unidades temáticas con VOCABULARIO ilustrado (emojis) + flashcards.
 *   • Una GRAMÁTICA por unidad (present perfect, futuro will, 1er condicional,
 *     past continuous, adverbios, question tags, estilo indirecto, relativos…).
 *   • PRÁCTICA del formato REAL del test (Reading & Writing, sus 7 partes).
 *   • 2 "Pruebas de Escudos" 🛡️ (sin aprobado ni suspenso: se cuentan aciertos).
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * En YLE NO hay nota numérica: se dan SHIELDS (escudos, 1–5 por prueba).
 *
 * Idempotente. Reemplaza el curso a2-flyers. NO toca Starters ni Movers.
 *   node scripts/seed-a2-flyers.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "a2-flyers";
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
    n: 1, title: "El mundo y los países", emoji: "🌍",
    vocab: {
      title: "El mundo",
      deck: [
        ["country", "país", "Spain is a country. 🇪🇸", "mundo"],
        ["city", "ciudad", "London is a big city. 🏙️", "mundo"],
        ["continent", "continente", "Africa is a continent. 🌍", "mundo"],
        ["ocean", "océano", "the Pacific Ocean 🌊", "mundo"],
        ["island", "isla", "a small island 🏝️", "mundo"],
        ["desert", "desierto", "the Sahara Desert 🏜️", "mundo"],
        ["jungle", "selva", "the green jungle 🌴", "mundo"],
        ["mountain", "montaña", "a high mountain ⛰️", "mundo"],
        ["capital", "capital", "Paris is the capital of France.", "mundo"],
        ["flag", "bandera", "the flag of a country 🏳️", "mundo"],
        ["map", "mapa", "Look at the map. 🗺️", "mundo"],
        ["abroad", "al extranjero", "travel abroad ✈️", "mundo"],
      ],
      exercise: {
        title: "El mundo", instructions: "Elige la palabra.",
        questions: [
          mc("🌊 a big area of salt water = ?", ["ocean", "island", "desert"], 0, "ocean = océano."),
          mc("🏝️ land with water all around = ?", ["mountain", "island", "jungle"], 1, "island = isla."),
          mc("🏜️ hot and dry with sand = ?", ["jungle", "desert", "ocean"], 1, "desert = desierto."),
          mc("🗺️ = ?", ["flag", "map", "capital"], 1, "map = mapa."),
          mc("The main city of a country = the ___", ["capital", "continent", "island"], 0, "capital."),
          mc("✈️ travel to another country = travel ___", ["abroad", "map", "city"], 0, "abroad = al extranjero."),
        ],
      },
    },
    structure: {
      title: "Present perfect (experiencias): ever / never / been",
      blocks: [
        "Present perfect = have/has + participio. Habla de experiencias en tu vida (sin decir cuándo):\nHave you ever been to London? — Yes, I have. / No, I never have. 🏙️\nI have visited three countries. 🌍  She has seen a lion. 🦁\nParticipios: go → gone/been, see → seen, eat → eaten, do → done, be → been.",
      ],
      exercise: {
        title: "¿Lo has hecho alguna vez?", instructions: "Escribe o elige.",
        questions: [
          fb("Have you ___ been to Paris? (alguna vez)", ["ever"], "ever = alguna vez."),
          fb("I have ___ (see) a whale. 🐳 (participio)", ["seen"], "see → seen."),
          mc("She ___ visited Rome. (have/has)", ["have", "has"], 1, "she → has."),
          fb("I have never ___ (eat) sushi. 🍣 (participio)", ["eaten"], "eat → eaten."),
          mc("___ you ever been abroad? ✈️", ["Have", "Do"], 0, "Present perfect → Have."),
          fb("We have ___ (be) to three countries. (participio de be)", ["been"], "be → been."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 1 (definición → palabra)", weight: 5,
      title: "Test — ¿Qué palabra es?", instructions: "Lee la definición y escribe o elige la palabra.",
      questions: [
        fb("A very big area of salt water. An ___ 🌊", ["ocean"], "ocean = océano."),
        mc("The most important city in a country. The ___", ["capital", "island"], 0, "capital."),
        fb("A piece of land with water all around it. An ___ 🏝️", ["island"], "island = isla."),
        mc("A very hot, dry place with a lot of sand. A ___ 🏜️", ["desert", "jungle"], 0, "desert."),
        fb("A drawing that shows countries and roads. A ___ 🗺️", ["map"], "map = mapa."),
      ],
    },
  },

  {
    n: 2, title: "La tecnología y comunicarse", emoji: "📱",
    vocab: {
      title: "Tecnología",
      deck: [
        ["computer", "ordenador", "use a computer 💻", "tecnología"],
        ["mobile phone", "móvil", "a mobile phone 📱", "tecnología"],
        ["internet", "internet", "surf the internet 🌐", "tecnología"],
        ["email", "correo electrónico", "send an email 📧", "tecnología"],
        ["message", "mensaje", "a text message 💬", "tecnología"],
        ["website", "página web", "a cool website", "tecnología"],
        ["keyboard", "teclado", "type on the keyboard ⌨️", "tecnología"],
        ["screen", "pantalla", "look at the screen 🖥️", "tecnología"],
        ["camera", "cámara", "take a photo 📷", "tecnología"],
        ["headphones", "auriculares", "wear headphones 🎧", "tecnología"],
        ["robot", "robot", "a clever robot 🤖", "tecnología"],
        ["download", "descargar", "download a game ⬇️", "tecnología"],
      ],
      exercise: {
        title: "Tecnología", instructions: "Elige la palabra.",
        questions: [
          mc("📱 = ?", ["computer", "mobile phone", "robot"], 1, "mobile phone = móvil."),
          mc("📧 = ?", ["email", "screen", "camera"], 0, "email = correo."),
          mc("🎧 = ?", ["keyboard", "headphones", "website"], 1, "headphones = auriculares."),
          mc("🤖 = ?", ["robot", "message", "internet"], 0, "robot."),
          mc("⌨️ = ?", ["screen", "keyboard", "camera"], 1, "keyboard = teclado."),
          mc("⬇️ get a game from the internet = ?", ["download", "message", "email"], 0, "download = descargar."),
        ],
      },
    },
    structure: {
      title: "El futuro: will / won't · going to",
      blocks: [
        "El futuro con will/won't:\nPredicciones y decisiones: Robots will help us. 🤖  I think it will rain. 🌧️  I won't be late.\nPlanes que ya decidiste: going to → I'm going to buy a new phone. 📱\nPregunta: Will you come? — Yes, I will. / No, I won't.",
      ],
      exercise: {
        title: "Habla del futuro", instructions: "Escribe o elige.",
        questions: [
          fb("In the future, robots ___ (will + do) many jobs. 🤖 (2 palabras)", ["will do"], "will do."),
          mc("I think it ___ rain tomorrow. 🌧️", ["will", "going"], 0, "predicción → will."),
          fb("___ you help me? — Yes, I will. (futuro)", ["Will"], "Will you…?"),
          fb("I ___ (will not + be) late. (contracción, 2 palabras)", ["won't be"], "won't be."),
          mc("I'm ___ to buy a new phone. 📱 (plan decidido)", ["going", "will"], 0, "going to = plan."),
          fb("She ___ (will + help) you. (2 palabras)", ["will help"], "will help."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 2 (elige la respuesta del diálogo)", weight: 5,
      title: "Test — Completa el diálogo", instructions: "Lee lo que dice la primera persona y elige la mejor respuesta.",
      questions: [
        mc("Anna: 'Do you want to play a game on my computer?' Ben: ___", ["Yes, please!", "It's a desert.", "She is a nurse."], 0, "Respuesta lógica a una invitación."),
        mc("Anna: 'What are you going to do this weekend?' Ben: ___", ["I'm going to visit my grandma.", "It's raining.", "No, I haven't."], 0, "Responde a un plan futuro."),
        mc("Ben: 'Have you seen my headphones?' Anna: ___ 🎧", ["Yes, they're on the table.", "I will be ten.", "It's a robot."], 0, "Responde dónde están."),
        mc("Anna: 'Will you help me with this email?' Ben: ___ 📧", ["Of course I will.", "It's an island.", "She has a cold."], 0, "Acepta ayudar."),
        mc("Ben: 'I can't download the game.' Anna: ___ ⬇️", ["Ask the teacher for help.", "It's Monday.", "Yes, I have."], 0, "Da un consejo útil."),
      ],
    },
  },

  {
    n: 3, title: "Sentimientos y personalidad", emoji: "😀",
    vocab: {
      title: "Sentimientos y personalidad",
      deck: [
        ["excited", "emocionado", "excited about the trip 🤩", "sentimiento"],
        ["bored", "aburrido", "I'm bored. 😑", "sentimiento"],
        ["scared", "asustado", "scared of spiders 😨", "sentimiento"],
        ["angry", "enfadado", "angry with my brother 😠", "sentimiento"],
        ["worried", "preocupado", "worried about the test 😟", "sentimiento"],
        ["surprised", "sorprendido", "a surprised face 😲", "sentimiento"],
        ["proud", "orgulloso", "proud of my work", "sentimiento"],
        ["kind", "amable", "a kind girl", "personalidad"],
        ["funny", "gracioso", "a funny story 😄", "personalidad"],
        ["shy", "tímido", "a shy boy", "personalidad"],
        ["brave", "valiente", "a brave hero 🦸", "personalidad"],
        ["clever", "listo/inteligente", "a clever idea 💡", "personalidad"],
      ],
      exercise: {
        title: "¿Cómo se siente?", instructions: "Elige la palabra.",
        questions: [
          mc("🤩 = ?", ["excited", "bored", "angry"], 0, "excited = emocionado."),
          mc("😨 = ?", ["proud", "scared", "kind"], 1, "scared = asustado."),
          mc("😟 = ?", ["worried", "funny", "brave"], 0, "worried = preocupado."),
          mc("A person who helps others is ___", ["angry", "kind", "bored"], 1, "kind = amable."),
          mc("A person who is not afraid is ___ 🦸", ["shy", "brave", "worried"], 1, "brave = valiente."),
          mc("😄 makes you laugh = ?", ["funny", "scared", "surprised"], 0, "funny = gracioso."),
        ],
      },
    },
    structure: {
      title: "Adverbios de modo (-ly) y comparativos",
      blocks: [
        "Adverbios de modo: dicen CÓMO haces algo. Adjetivo + -ly:\nquick → quickly, slow → slowly, careful → carefully, happy → happily.\nIrregulares: good → well, fast → fast, hard → hard.\nComparar cómo: She runs faster than me. 🏃  He speaks more quietly than his sister. 🤫",
      ],
      exercise: {
        title: "¿Cómo lo hace?", instructions: "Escribe o elige.",
        questions: [
          fb("She sings ___ (beautiful + ly). 🎤", ["beautifully"], "beautiful → beautifully."),
          fb("He plays football ___ (good → adverbio irregular). ⚽", ["well"], "good → well."),
          fb("Please listen ___ (careful + ly). 👂", ["carefully"], "careful → carefully."),
          mc("A cheetah runs ___ than a cat. 🐆", ["faster", "more fast"], 0, "fast → faster."),
          fb("The turtle walks ___ (slow + ly). 🐢", ["slowly"], "slow → slowly."),
          fb("He speaks very ___ (quiet + ly). 🤫", ["quietly"], "quiet → quietly."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 3 (completa la historia)", weight: 5,
      title: "Test — El cumpleaños de Sam", instructions: "Lee la historia y elige la palabra correcta para cada hueco.",
      questions: [
        mc("Yesterday, Sam felt very ___ because it was his birthday. 🎂", ["excited", "bored", "scared"], 0, "excited = emocionado."),
        mc("He opened his presents ___. 🎁", ["quickly", "never", "abroad"], 0, "quickly = deprisa."),
        mc("His favourite present was a ___ new bike. 🚲", ["red", "email", "funny"], 0, "red = rojo (adjetivo)."),
        mc("He rode it ___ around the park. 🏞️", ["happily", "angrily", "never"], 0, "happily = felizmente."),
        mc("In the evening, he was ___ but very happy. 😴", ["tired", "kind", "clever"], 0, "tired = cansado."),
      ],
    },
  },

  {
    n: 4, title: "La escuela y las asignaturas", emoji: "🏫",
    vocab: {
      title: "La escuela",
      deck: [
        ["maths", "matemáticas", "a maths lesson ➗", "asignatura"],
        ["science", "ciencias", "a science experiment 🔬", "asignatura"],
        ["history", "historia", "a history book 📜", "asignatura"],
        ["geography", "geografía", "geography and maps 🌍", "asignatura"],
        ["art", "plástica/arte", "art class 🎨", "asignatura"],
        ["music", "música", "music lesson 🎵", "asignatura"],
        ["PE", "educación física", "PE and sport ⚽", "asignatura"],
        ["homework", "deberes", "do my homework 📚", "escuela"],
        ["exam", "examen", "study for an exam ✏️", "escuela"],
        ["classroom", "aula", "in the classroom 🏫", "escuela"],
        ["timetable", "horario", "the school timetable 📅", "escuela"],
        ["break", "recreo", "at break time", "escuela"],
      ],
      exercise: {
        title: "La escuela", instructions: "Elige la palabra.",
        questions: [
          mc("➗ numbers = ?", ["maths", "history", "art"], 0, "maths = matemáticas."),
          mc("🔬 experiments = ?", ["music", "science", "PE"], 1, "science = ciencias."),
          mc("🎨 drawing and painting = ?", ["art", "maths", "geography"], 0, "art = plástica."),
          mc("📚 you do it at home = ?", ["exam", "homework", "break"], 1, "homework = deberes."),
          mc("📅 shows your lessons = ?", ["timetable", "classroom", "break"], 0, "timetable = horario."),
          mc("⚽ running and games = ?", ["PE", "history", "music"], 0, "PE = educación física."),
        ],
      },
    },
    structure: {
      title: "Past continuous (was/were + -ing) · when / while",
      blocks: [
        "Past continuous = was/were + verbo-ing: qué estaba pasando en un momento del pasado.\nAt 4 o'clock I was doing my homework. 📚  They were playing football. ⚽\nCon when / while: While I was reading, the phone rang. 📞  I was sleeping when you called.\n(Acción larga = past continuous; acción corta que interrumpe = past simple.)",
      ],
      exercise: {
        title: "¿Qué estabas haciendo?", instructions: "Escribe o elige.",
        questions: [
          fb("At 5 o'clock I ___ (was + do) my homework. 📚 (2 palabras)", ["was doing"], "was doing."),
          fb("They ___ (were + play) football. ⚽ (2 palabras)", ["were playing"], "were playing."),
          mc("While I was reading, the phone ___. (acción corta)", ["rang", "was ringing"], 0, "acción corta → past simple: rang."),
          fb("She was ___ (sleep) when you called. (-ing)", ["sleeping"], "sleeping."),
          mc("We ___ watching TV at 8pm. (was/were)", ["was", "were"], 1, "we → were."),
          fb("I was ___ (study) for my exam. ✏️ (-ing)", ["studying"], "studying."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 4 (texto + elige el título)", weight: 6,
      title: "Test — Todo sobre la escuela", instructions: "Lee el texto, elige la palabra de cada hueco y, al final, el mejor título.",
      questions: [
        mc("Schools are places where children ___ new things.", ["learn", "eat", "sleep"], 0, "learn = aprender."),
        mc("Students study subjects like maths, ___ and history. 🔬", ["science", "robot", "island"], 0, "science."),
        mc("They usually have a short ___ to play and eat.", ["break", "country", "screen"], 0, "break = recreo."),
        mc("After school, many children ___ homework at home. 📚", ["do", "make", "play"], 0, "do homework."),
        mc("Learning can be hard work, but it is also ___!", ["fun", "angry", "tired"], 0, "fun = divertido."),
        mc("Choose the best title for the text:", ["All about school 🏫", "My holiday 🏖️", "A football match ⚽"], 0, "El texto trata de la escuela."),
      ],
    },
    shield: 1,
  },

  {
    n: 5, title: "Aventuras y el pasado", emoji: "🗺️",
    vocab: {
      title: "Aventuras",
      deck: [
        ["adventure", "aventura", "an exciting adventure 🗺️", "aventura"],
        ["treasure", "tesoro", "find the treasure 💰", "aventura"],
        ["cave", "cueva", "a dark cave 🕳️", "aventura"],
        ["boat", "barca", "sail in a boat ⛵", "aventura"],
        ["bridge", "puente", "cross the bridge 🌉", "aventura"],
        ["castle", "castillo", "an old castle 🏰", "aventura"],
        ["dragon", "dragón", "a scary dragon 🐉", "aventura"],
        ["hero", "héroe", "a brave hero 🦸", "aventura"],
        ["explore", "explorar", "explore the island", "aventura"],
        ["dangerous", "peligroso", "a dangerous journey", "aventura"],
        ["lost", "perdido", "We got lost. 😟", "aventura"],
        ["map", "mapa", "follow the map 🗺️", "aventura"],
      ],
      exercise: {
        title: "Aventuras", instructions: "Elige la palabra.",
        questions: [
          mc("💰 = ?", ["treasure", "cave", "bridge"], 0, "treasure = tesoro."),
          mc("🏰 = ?", ["boat", "castle", "dragon"], 1, "castle = castillo."),
          mc("🐉 = ?", ["hero", "dragon", "map"], 1, "dragon = dragón."),
          mc("🕳️ a hole in a mountain = ?", ["cave", "bridge", "boat"], 0, "cave = cueva."),
          mc("Not safe = ?", ["lost", "dangerous", "brave"], 1, "dangerous = peligroso."),
          mc("🌉 you cross a river on it = ?", ["bridge", "castle", "cave"], 0, "bridge = puente."),
        ],
      },
    },
    structure: {
      title: "Primer condicional (If…, will) · could / couldn't",
      blocks: [
        "Primer condicional: para cosas posibles en el futuro.\nIf + presente, ... will + verbo. → If it rains, we will stay inside. 🌧️  If you help me, I'll be happy. 😀\nPasado de can: could / couldn't (podía / no podía).\nWhen I was five, I couldn't swim. Now I can! 🏊",
      ],
      exercise: {
        title: "Si… y lo que podías", instructions: "Escribe o elige.",
        questions: [
          fb("If it ___ (rain), we will stay inside. 🌧️ (presente)", ["rains"], "If + presente: rains."),
          fb("If you help me, I ___ (will + be) happy. (2 palabras)", ["will be"], "will be."),
          mc("When I was three, I ___ swim. (no sabía)", ["could", "couldn't"], 1, "couldn't = no podía."),
          fb("If we find the map, we ___ (will + find) the treasure. 💰 (2 palabras)", ["will find"], "will find."),
          fb("She ___ (can, pasado) ride a bike at four. (podía)", ["could"], "could = podía."),
          mc("If you ___ hard, you will pass. ✏️", ["study", "will study"], 0, "If + presente: study."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 5 (historia con dibujos)", weight: 5,
      title: "Test — El tesoro de Jack", instructions: "Historia (3 dibujos): 1) Jack encontró un mapa viejo en una cueva 🕳️. 2) Cruzó un puente 🌉 hasta una isla 🏝️. 3) ¡Encontró una caja con un tesoro de oro 💰! Responde:",
      questions: [
        fb("What did Jack find in the cave? An old ___ 🗺️", ["map"], "Un mapa viejo."),
        fb("What did he cross? A ___ 🌉", ["bridge"], "Un puente."),
        fb("Where did the bridge go? To an ___ 🏝️", ["island"], "A una isla."),
        fb("What was in the box? ___ 💰", ["treasure", "gold"], "Un tesoro / oro."),
        yesno("Was Jack's adventure exciting? 🤩", true, "Sí, ¡fue emocionante!"),
      ],
    },
  },

  {
    n: 6, title: "Viajes y vacaciones", emoji: "✈️",
    vocab: {
      title: "Viajes",
      deck: [
        ["airport", "aeropuerto", "at the airport ✈️", "viaje"],
        ["suitcase", "maleta", "pack a suitcase 🧳", "viaje"],
        ["passport", "pasaporte", "show your passport 🛂", "viaje"],
        ["ticket", "billete/entrada", "a plane ticket 🎫", "viaje"],
        ["hotel", "hotel", "stay in a hotel 🏨", "viaje"],
        ["tourist", "turista", "a tourist with a camera 📸", "viaje"],
        ["journey", "viaje/trayecto", "a long journey", "viaje"],
        ["luggage", "equipaje", "heavy luggage", "viaje"],
        ["souvenir", "recuerdo", "buy a souvenir 🎁", "viaje"],
        ["tent", "tienda de campaña", "sleep in a tent ⛺", "viaje"],
        ["map", "mapa", "a tourist map 🗺️", "viaje"],
        ["beach", "playa", "a sunny beach 🏖️", "viaje"],
      ],
      exercise: {
        title: "Viajes", instructions: "Elige la palabra.",
        questions: [
          mc("🧳 you pack your clothes in it = ?", ["passport", "suitcase", "ticket"], 1, "suitcase = maleta."),
          mc("🛂 you need it to travel abroad = ?", ["passport", "hotel", "tent"], 0, "passport = pasaporte."),
          mc("🏨 you sleep here on holiday = ?", ["airport", "hotel", "beach"], 1, "hotel."),
          mc("📸 a person who visits a place = ?", ["tourist", "journey", "luggage"], 0, "tourist = turista."),
          mc("🎁 you buy it to remember a place = ?", ["souvenir", "map", "ticket"], 0, "souvenir = recuerdo."),
          mc("⛺ you sleep in it when camping = ?", ["tent", "hotel", "suitcase"], 0, "tent = tienda."),
        ],
      },
    },
    structure: {
      title: "Cantidades (some/any, much/many…) · have to / had to",
      blocks: [
        "Cantidades:\nsome (afirmativas), any (preguntas y negativas): I have some money. Do you have any tickets? 🎫\nContables: many / a few → many tourists, a few days.\nIncontables: much / a little → much luggage, a little water. 💧\na lot of / lots of → para casi todo (mucho).\nObligación: have to / had to (pasado). → I have to pack. Yesterday I had to get up early. 🧳",
      ],
      exercise: {
        title: "Cuánto y obligaciones", instructions: "Escribe o elige.",
        questions: [
          fb("Do you have ___ tickets? (preguntas: some/any)", ["any"], "any en preguntas."),
          fb("I have ___ money. (afirmativa: some/any)", ["some"], "some en afirmativas."),
          mc("There were ___ tourists. 📸 (contable)", ["many", "much"], 0, "contable → many."),
          fb("We don't have ___ water. 💧 (negativa incontable)", ["much"], "incontable negativa → much."),
          fb("Yesterday I ___ (have to, pasado) wake up early. (2 palabras)", ["had to"], "had to."),
          mc("I ___ pack my suitcase. 🧳", ["have to", "has to"], 0, "I → have to."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 6 (escribe la palabra)", weight: 5,
      title: "Test — Nuestras vacaciones", instructions: "Lee el texto y escribe UNA palabra en cada hueco.",
      questions: [
        fb("Last summer, we went on ___ exciting holiday to Italy. (a/an)", ["an"], "exciting → an."),
        fb("We stayed ___ a small hotel near the beach. 🏖️ (in/at)", ["in", "at"], "stayed in/at a hotel."),
        fb("Every morning we ___ to walk to the shops. (obligación pasada, 1 palabra)", ["had"], "we had to walk."),
        fb("I took a lot ___ photos. 📸 (a lot ___ photos)", ["of"], "a lot of photos."),
        fb("I bought a ___ for my best friend. 🎁 (recuerdo)", ["souvenir", "present", "gift"], "un souvenir/regalo."),
      ],
    },
  },

  {
    n: 7, title: "El medioambiente y la naturaleza", emoji: "🌱",
    vocab: {
      title: "El medioambiente",
      deck: [
        ["environment", "medioambiente", "protect the environment 🌍", "naturaleza"],
        ["recycle", "reciclar", "recycle paper ♻️", "naturaleza"],
        ["rubbish", "basura", "pick up the rubbish 🗑️", "naturaleza"],
        ["plastic", "plástico", "too much plastic", "naturaleza"],
        ["pollution", "contaminación", "air pollution 🏭", "naturaleza"],
        ["planet", "planeta", "our planet Earth 🌍", "naturaleza"],
        ["forest", "bosque", "a green forest 🌲", "naturaleza"],
        ["litter", "basura (en el suelo)", "don't drop litter", "naturaleza"],
        ["save", "ahorrar/salvar", "save water 💧", "naturaleza"],
        ["protect", "proteger", "protect animals 🐾", "naturaleza"],
        ["wild", "salvaje", "wild animals", "naturaleza"],
        ["clean", "limpio/limpiar", "keep the beach clean 🏖️", "naturaleza"],
      ],
      exercise: {
        title: "El medioambiente", instructions: "Elige la palabra.",
        questions: [
          mc("♻️ use again = ?", ["recycle", "rubbish", "pollution"], 0, "recycle = reciclar."),
          mc("🏭 dirty air = ?", ["forest", "pollution", "planet"], 1, "pollution = contaminación."),
          mc("🌍 the Earth = our ___", ["planet", "litter", "plastic"], 0, "planet = planeta."),
          mc("🐾 keep animals safe = ?", ["save", "protect", "clean"], 1, "protect = proteger."),
          mc("🗑️ things we throw away = ?", ["rubbish", "forest", "wild"], 0, "rubbish = basura."),
          mc("💧 use less water = ___ water", ["save", "drop", "clean"], 0, "save = ahorrar."),
        ],
      },
    },
    structure: {
      title: "Frases de relativo (who/which/that) · should",
      blocks: [
        "Frases de relativo: dan más información.\nwho → para personas: The girl who recycles is my friend. ♻️\nwhich / that → para cosas y animales: This is the bin which/that is for plastic.\nConsejos con should: We should save water. 💧  You shouldn't drop litter. 🗑️",
      ],
      exercise: {
        title: "Relativos y consejos", instructions: "Escribe o elige.",
        questions: [
          fb("The man ___ cleans the park is kind. (persona)", ["who"], "persona → who."),
          fb("This is the bin ___ is for plastic. (cosa)", ["which", "that"], "cosa → which/that."),
          mc("We ___ recycle more. ♻️ (deberíamos)", ["should", "shouldn't"], 0, "should = deberíamos."),
          mc("You ___ drop litter. 🗑️ (no deberías)", ["should", "shouldn't"], 1, "shouldn't = no deberías."),
          fb("A person ___ protects animals is a hero. 🦸 (persona)", ["who"], "persona → who."),
          fb("We ___ (should + save) water. 💧 (2 palabras)", ["should save"], "should save."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 7 (completa el texto)", weight: 5,
      title: "Test — Cuidemos la Tierra", instructions: "Lee el texto y escribe UNA palabra en cada hueco.",
      questions: [
        fb("The Earth is our home, and we must look after ___. (it/them)", ["it"], "look after it."),
        fb("Every day, people throw away too ___ rubbish. (much/many)", ["much"], "rubbish (incontable) → much."),
        fb("This is bad ___ the environment. (for/to)", ["for"], "bad for."),
        fb("We all ___ help. (can/should/must)", ["can", "should", "must"], "can/should/must help."),
        fb("We can turn ___ the lights to save power. 💡 (turn ___ = apagar)", ["off"], "turn off."),
        fb("If everyone helps, our planet ___ be cleaner. 🌍 (futuro)", ["will"], "planet will be cleaner."),
      ],
    },
  },

  {
    n: 8, title: "Deportes, competición y fiestas", emoji: "🏆",
    vocab: {
      title: "Competición y celebración",
      deck: [
        ["competition", "competición", "win a competition 🏆", "celebración"],
        ["winner", "ganador/a", "the winner 🥇", "celebración"],
        ["prize", "premio", "a big prize 🎁", "celebración"],
        ["race", "carrera", "a running race 🏁", "deporte"],
        ["medal", "medalla", "a gold medal 🏅", "deporte"],
        ["team", "equipo", "my team won ⚽", "deporte"],
        ["cheer", "animar", "cheer for the team 📣", "deporte"],
        ["festival", "festival/fiesta", "a music festival 🎉", "celebración"],
        ["birthday", "cumpleaños", "Happy birthday! 🎂", "celebración"],
        ["party", "fiesta", "a birthday party 🥳", "celebración"],
        ["present", "regalo", "open a present 🎁", "celebración"],
        ["celebrate", "celebrar", "celebrate the win 🎊", "celebración"],
      ],
      exercise: {
        title: "Competición y fiestas", instructions: "Elige la palabra.",
        questions: [
          mc("🥇 the person who wins = ?", ["winner", "team", "race"], 0, "winner = ganador."),
          mc("🏅 you win it in a sport = ?", ["prize", "medal", "party"], 1, "medal = medalla."),
          mc("🏁 people run in it = ?", ["race", "festival", "present"], 0, "race = carrera."),
          mc("🥳 you have it on your birthday = ?", ["team", "party", "medal"], 1, "party = fiesta."),
          mc("📣 shout to support your team = ?", ["cheer", "celebrate", "win"], 0, "cheer = animar."),
          mc("🎁 you give it to someone on their birthday = ?", ["present", "race", "team"], 0, "present = regalo."),
        ],
      },
    },
    structure: {
      title: "Question tags · estilo indirecto (simple)",
      blocks: [
        "Question tags (¿verdad?): repites el verbo auxiliar al final, al revés.\nAfirmativa → tag negativa: You like sport, don't you? It's fun, isn't it?\nNegativa → tag afirmativa: She isn't here, is she?\nEstilo indirecto (contar lo que dijo alguien): 'I am tired' → He said (that) he was tired. 'I like cake' → She said she liked cake. 🍰",
      ],
      exercise: {
        title: "¿Verdad? y contar lo dicho", instructions: "Escribe o elige.",
        questions: [
          fb("You like football, ___ you? ⚽ (tag)", ["don't"], "afirmativa → don't."),
          fb("It's a great party, ___ it? 🥳 (tag)", ["isn't"], "It's → isn't it?"),
          mc("She isn't here, ___ she? (tag)", ["is", "isn't"], 0, "negativa → is she?"),
          fb("'I am happy.' → He said he ___ happy. (was/is)", ["was"], "estilo indirecto: was."),
          fb("'I like cake.' → She said she ___ cake. 🍰 (liked/likes)", ["liked"], "estilo indirecto: liked."),
          fb("They won the race, ___ they? 🏁 (tag)", ["didn't"], "pasado afirmativo → didn't."),
        ],
      },
    },
    test: {
      part: "Reading & Writing — Parte 5 (historia con dibujos)", weight: 5,
      title: "Test — El día del deporte", instructions: "Historia: El sábado pasado, nuestro colegio tuvo un día del deporte 🏆. Mi amigo Tom corrió en la carrera de 100 metros 🏁 y ¡ganó una medalla de oro 🥇! Todos animaron 📣. Por la tarde tuvimos una fiesta 🥳 para celebrarlo. Tom dijo que estaba muy feliz. Responde:",
      questions: [
        fb("What did the school have? A sports ___ 🏆", ["day"], "a sports day."),
        fb("What race did Tom run? The 100-metre ___ 🏁", ["race"], "the 100-metre race."),
        fb("What did Tom win? A gold ___ 🥇", ["medal"], "a gold medal."),
        fb("What did they have in the evening? A ___ 🥳", ["party"], "a party."),
        yesno("Was Tom happy? 😀", true, "Sí, dijo que estaba muy feliz."),
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  A2 Flyers anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "A2 Flyers (Cambridge English para niños)", subtitle: "El tercer y último examen de inglés de Cambridge para niños, con juegos.",
      description: "Preparación completa para A2 Flyers (Cambridge English Qualifications: Young Learners), el nivel más alto de los exámenes para niños. Programa lúdico de 8 unidades: el mundo, la tecnología, sentimientos, la escuela, aventuras, viajes, el medioambiente y deportes/fiestas. Cada unidad tiene vocabulario ilustrado con flashcards, una gramática (presente perfecto, futuro, condicional, past continuous, question tags…) y práctica del formato real del test, más pruebas de 'escudos'. En los exámenes para niños NO hay aprobado ni suspenso: se dan shields (escudos). Audio con voz británica real.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "A2 Flyers para niños — Programa con juegos — NOVARA", seoDescription: "Prepara el Cambridge A2 Flyers con 8 unidades lúdicas: vocabulario ilustrado, gramática (present perfect, futuro, condicional), práctica del test y escudos.",
      objectives: { create: [
        "Ampliar vocabulario (el mundo, tecnología, viajes, medioambiente) con dibujos.",
        "Usar present perfect, futuro will, primer condicional, past continuous y más.",
        "Practicar las 7 partes del test Reading & Writing.",
        "Escuchar inglés británico real y hablar por voz.",
        "Ganar 'escudos' sin miedo: en Flyers no hay aprobado ni suspenso.",
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

  const m0 = await createModule("Guía de Flyers", "Cómo es el test y qué son los escudos.", 0);
  await createLesson(m0.id, {
    title: "¿Cómo es Flyers? 🛡️", description: "Las 3 partes y los escudos.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "A2 Flyers es el TERCER y último examen de inglés de Cambridge para niños (después de Starters y Movers). Es el más completo, ¡pero también muy divertido! Tiene 3 partes: Listening, Reading & Writing y Speaking." },
      { type: "GRAMMAR", title: "Las tres partes", content: "• Listening 🎧: escuchas historias y respondes.\n• Reading & Writing ✏️: lees textos e historias y escribes palabras (tiene 7 partes).\n• Speaking 🗣️: cuentas una historia con dibujos y hablas de ti." },
      { type: "NOTES", title: "¡No hay aprobado ni suspenso!", content: "En los exámenes para niños NO se aprueba ni se suspende: se dan SHIELDS (escudos 🛡️), de 1 a 5 por cada parte. ¡Todos los niños reciben un certificado!", data: { variant: "info" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["8 unidades con juegos y dibujos.", "Vocabulario + una gramática + práctica del test.", "2 Pruebas de Escudos 🛡️ (unidades 4 y 8).", "En Flyers todos ganan escudos: ¡sin miedo!"] } },
    ],
    pedagogy: { objective: "Entender qué es Flyers y que se puntúa con escudos.", summary: "Flyers: 3 partes; se dan escudos (1-5), sin aprobado/suspenso.", reviewPrompts: ["¿Cuántas partes tiene el Reading & Writing de Flyers?"] },
  });

  const readingExerciseIds = [];
  let sortOrder = 1;
  for (const u of UNITS) {
    const m = await createModule(`Unidad ${u.n} — ${u.title} ${u.emoji}`, `Vocabulario, una gramática y práctica del test (unidad ${u.n}).`, sortOrder++);
    const deck = await db.flashcardDeck.create({
      data: { title: `Flyers — Unidad ${u.n}: ${u.vocab.title}`, description: "Vocabulario con dibujos.", language: "en", authorId: adminUser.id,
        cards: { create: u.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "A2" })) } },
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
        data: { courseId: course.id, title: `Prueba de Escudos ${u.shield} — Flyers 🛡️`, passingScore: 50, timeLimitMinutes: 40,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🛡️ Prueba de Escudos ${u.shield}`, `Repaso divertido de las unidades hasta aquí.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Prueba de Escudos ${u.shield} 🛡️`, description: "Cuenta tus aciertos: ¡son tus escudos!", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "¿Cómo funciona?", content: "En Flyers NO hay aprobado ni suspenso. Cuenta cuántas respuestas aciertas: ¡son tus ESCUDOS 🛡️! Cuantos más aciertes, más escudos ganas. Reúne las preguntas de las unidades vistas hasta ahora. ¡A jugar!", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Repasar lo aprendido y ganar escudos.", summary: `Prueba de escudos ${u.shield}.`, reviewPrompts: ["Si fallas alguna, repasa la unidad."] },
      });
    }
  }

  const ms = await createModule("Listening y Speaking", "Escuchar inglés británico real y hablar por voz.", sortOrder++);
  const talk = "Hi, I'm Emma. Last weekend was really exciting. On Saturday, our school had a sports day. I ran in a race and, believe it or not, I won a silver medal! My best friend Lucy won gold. In the afternoon it started to rain, so we had our picnic inside. Next weekend, I'm going to visit my cousins by the sea. I can't wait!";
  const audio = await generateListeningAudio(talk, "flyers-sportsday");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — El fin de semana de Emma 🏅", description: "Escucha (voz británica) y elige.", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír a Emma contar su fin de semana (pasado) y sus planes (futuro). Escucha las medallas, el tiempo y los planes. Puedes repetir el audio. 🎧" },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper (localhost:5001) y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Entender una historia con pasado y futuro (medallas, tiempo, planes).", commonMistakes: ["Confundir lo que ya pasó con lo que va a pasar."], reviewPrompts: ["¿Qué medalla ganó Emma?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "El fin de semana de Emma", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("When was the sports day?", ["Saturday", "Sunday", "Friday"], 0, "'On Saturday, our school had a sports day'."),
      mc("What medal did Emma win? 🏅", ["gold", "silver", "bronze"], 1, "'I won a silver medal'."),
      mc("Why did they have their picnic inside?", ["It rained.", "It was cold.", "It was late."], 0, "'it started to rain, so we had our picnic inside'."),
      mc("What is Emma going to do next weekend?", ["visit her cousins", "go to school", "run a race"], 0, "'I'm going to visit my cousins by the sea'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Habla con la IA 🗣️", description: "Cuenta una historia y habla de tus planes.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. La IA (por voz, en inglés) te pedirá contar lo que hiciste, si has hecho algo alguna vez y qué vas a hacer. Responde por el micrófono. 🎤\nImportante para los papás: abrid la app en http://localhost:3001 (no en la IP de red) para que funcione el micrófono." }],
    pedagogy: { objective: "Contar experiencias (present perfect), pasado y planes futuros por voz.", summary: "Conversación por voz con la IA (Flyers).", reviewPrompts: ["¿Cómo cuentas algo que has hecho alguna vez en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "A2 (Flyers)", scenario: "una charla para un niño mayor: contar una historia con dibujos, experiencias (¿alguna vez has…?), lo que hizo el finde y sus planes", objective: "que el niño use present perfect (I have…), pasado y futuro (I'm going to…), y dé opiniones sencillas, con frases completas", keywords: "I have never, yesterday I, I'm going to, I think, because" }, title: "Habla con la IA", instructions: "Responde a las preguntas de la IA por el micrófono.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "Flyers — Unidad" } } } }),
    escudos: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ A2 Flyers (programa lúdico 8 unidades) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error Flyers:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
