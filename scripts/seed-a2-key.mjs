/**
 * A2 Key (Cambridge English: Key / KET) — PROGRAMA COMPLETO de preparación.
 *
 * Currículo de 5 SEMANAS (≈1 mes largo) con cadencia de academia real, adaptado
 * al nivel elemental:
 *   • Gramática progresiva cada semana (con repaso acumulativo).
 *   • Vocabulario nuevo cada semana, con su mazo de flashcards.
 *   • Práctica semanal del formato REAL de una parte del examen.
 *   • Simulacro final (semana 5) que estima tu nota Cambridge.
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * Los YLE/KET no aprueban/suspenden por parte: A2 Key sí da nota (100–150, aprobado 120).
 *
 * Idempotente. No toca otros cursos.   node scripts/seed-a2-key.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "a2-key";
const PIPER_URL = (process.env.PIPER_URL || "http://localhost:5001").replace(/\/$/, "");
const VOICE = "en_GB-cori-high"; // inglés británico (Cambridge)

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
const open = (prompt, guidance, explanation) => ({ kind: "open", data: { kind: "open", prompt, guidance, explanation } });

// ════════════════════════════════════════════════════════════════════════════
// EL PROGRAMA — 12 semanas (3 meses).
// ════════════════════════════════════════════════════════════════════════════
const WEEKS = [
  {
    n: 1,
    theme: "Presente e información personal",
    grammar: {
      title: "Present simple y adverbios de frecuencia",
      blocks: [
        "El present simple sirve para rutinas y hechos: I work, she works.\nEn 3ª persona (he/she/it) el verbo lleva -s: he plays, she goes.\nNegativa y pregunta con do/does: I don't like tea. Does she work here?\n\nAdverbios de frecuencia (always, usually, often, sometimes, never) van ANTES del verbo principal, pero DESPUÉS de 'be': I usually get up early. She is always happy.",
      ],
      exercise: {
        title: "Práctica de gramática — Presente",
        instructions: "Completa con el present simple.",
        questions: [
          fb("She ___ (work) in a hospital.", ["works"], "3ª persona → 'works'."),
          fb("I ___ (not/like) coffee.", ["don't like", "do not like"], "Negativa: 'don't like'."),
          fb("___ he speak English? (pregunta)", ["Does"], "3ª persona pregunta → 'Does'."),
          fb("They ___ (go) to school by bus.", ["go"], "Plural → 'go' (sin -s)."),
          fb("Order: (always / is / late / he) → ___", ["he is always late"], "Con 'be', el adverbio va después: 'he is always late'."),
          fb("Order: (get up / I / early / usually) → ___", ["I usually get up early"], "Con verbo normal, el adverbio va antes: 'I usually get up early'."),
        ],
      },
    },
    vocab: {
      title: "Información personal y familia",
      deck: [
        ["surname", "apellido", "My surname is García.", "sustantivo"],
        ["married", "casado/a", "She is married.", "adjetivo"],
        ["single", "soltero/a", "He is single.", "adjetivo"],
        ["neighbour", "vecino/a", "My neighbour is friendly.", "sustantivo"],
        ["cousin", "primo/a", "My cousin lives in Madrid.", "sustantivo"],
        ["twins", "gemelos/mellizos", "They are twins.", "sustantivo"],
        ["retired", "jubilado/a", "My grandfather is retired.", "adjetivo"],
        ["get married", "casarse", "They got married last year.", "colocación"],
        ["look like", "parecerse (físico)", "She looks like her mum.", "phrasal verb"],
        ["be born", "nacer", "I was born in 2005.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Familia",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Your family name is your ___.", ["surname", "neighbour", "cousin"], 0, "'surname' = apellido."),
          mc("Two children born at the same time are ___.", ["cousins", "twins", "neighbours"], 1, "'twins' = gemelos."),
          mc("Someone who is not married is ___.", ["married", "retired", "single"], 2, "'single' = soltero."),
          mc("Your aunt's son is your ___.", ["cousin", "neighbour", "twin"], 0, "'cousin' = primo."),
          mc("A person who no longer works because of age is ___.", ["single", "retired", "married"], 1, "'retired' = jubilado."),
          mc("'I ___ in 2005.'", ["was born", "get married", "look like"], 0, "'be born' = nacer."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 1 (señales y mensajes)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 1 (señales)",
      instructions: "Lee cada texto y elige qué significa (A/B/C).",
      questions: [
        mc("Sign in a shop: 'CLOSED FOR LUNCH. Back at 2 pm.'", ["The shop is closed all day.", "The shop opens again at 2 pm.", "The shop only sells lunch."], 1, "'Back at 2 pm' = vuelve a abrir a las 2."),
        mc("Text: 'Meet me at the cinema at 7, not 8. Anna'", ["The time has changed to 7.", "The cinema is closed.", "Anna can't come."], 0, "'at 7, not 8' = cambio a las 7."),
        mc("Notice: 'No mobile phones in the library.'", ["You can use phones here.", "You must not use phones here.", "The library sells phones."], 1, "'No mobile phones' = prohibido usarlos."),
        mc("Sign: 'Trains to London — Platform 3.'", ["London trains leave from platform 3.", "Platform 3 is closed.", "There are no trains to London."], 0, "Los trenes a Londres salen del andén 3."),
        mc("Note on a door: 'Please knock before you come in.'", ["Come in without knocking.", "Knock first, then enter.", "The door is locked."], 1, "'knock before you come in' = llama antes de entrar."),
        mc("Café sign: 'Free coffee with any sandwich today!'", ["Coffee is free with a sandwich.", "Sandwiches are free.", "The café is closed today."], 0, "'Free coffee with any sandwich' = café gratis al comprar sándwich."),
      ],
    },
  },

  {
    n: 2,
    theme: "Acciones de ahora y rutina",
    grammar: {
      title: "Present continuous vs. present simple",
      blocks: [
        "Present continuous (am/is/are + verbo-ing): acción AHORA o temporal — I'm studying now, She's working today.\nPresent simple: rutinas y hechos — I study every day.\n\nPalabras clave del continuous: now, at the moment, Look!, Listen!\nVerbos de estado (like, want, know) NO suelen ir en continuous.",
      ],
      exercise: {
        title: "Práctica de gramática — Presente continuo",
        instructions: "Completa con la forma correcta.",
        questions: [
          fb("Listen! The baby ___ (cry).", ["is crying", "'s crying"], "'Listen!' → ahora → present continuous."),
          fb("I ___ (go) to the gym every Monday.", ["go"], "Rutina ('every Monday') → present simple."),
          fb("Look! It ___ (snow)!", ["is snowing", "'s snowing"], "'Look!' → ahora → present continuous."),
          fb("She ___ (not/work) today; she's ill.", ["isn't working", "is not working"], "Temporal ('today') → present continuous negativo."),
          fb("What ___ you ___ (do) at the moment?", ["are"], "'at the moment' → present continuous: 'are you doing'."),
          fb("We usually ___ (have) dinner at eight.", ["have"], "Rutina ('usually') → present simple."),
        ],
      },
    },
    vocab: {
      title: "Rutina diaria y tiempo libre",
      deck: [
        ["wake up", "despertarse", "I wake up at seven.", "phrasal verb"],
        ["get dressed", "vestirse", "She gets dressed quickly.", "colocación"],
        ["go for a walk", "ir a pasear", "We go for a walk after dinner.", "colocación"],
        ["hang out with", "pasar el rato con", "I hang out with my friends.", "phrasal verb"],
        ["do the shopping", "hacer la compra", "I do the shopping on Saturdays.", "colocación"],
        ["have a rest", "descansar", "Let's have a rest.", "colocación"],
        ["chores", "tareas del hogar", "I do my chores at the weekend.", "sustantivo"],
        ["free time", "tiempo libre", "In my free time I read.", "colocación"],
        ["stay in", "quedarse en casa", "Tonight I'll stay in.", "phrasal verb"],
        ["go out", "salir", "We go out on Fridays.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Rutina",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To stop sleeping in the morning is to ___.", ["wake up", "go out", "stay in"], 0, "'wake up' = despertarse."),
          mc("Jobs at home (cleaning, etc.) are ___.", ["free time", "chores", "a rest"], 1, "'chores' = tareas del hogar."),
          mc("To spend time relaxing with friends is to ___ them.", ["do the shopping with", "hang out with", "get dressed with"], 1, "'hang out with'."),
          mc("To buy food and things you need is to ___.", ["go for a walk", "do the shopping", "have a rest"], 1, "'do the shopping'."),
          mc("The opposite of 'go out' tonight is to ___.", ["stay in", "wake up", "get dressed"], 0, "'stay in' = quedarse en casa."),
          mc("The time when you are not working or studying is your ___.", ["chores", "free time", "rest"], 1, "'free time'."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 4 (huecos de vocabulario)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 4 (vocabulario)",
      instructions: "Elige la palabra correcta (A/B/C) para cada hueco. Texto:\n\nAt the weekend, Emma likes to (1)___ up late. After breakfast, she usually (2)___ for a walk with her dog. In the afternoon, she (3)___ out with her friends in the park. In the evening, she prefers to (4)___ in and watch a film. On Sundays, she has to do her (5)___, like cleaning her room, but she still finds some (6)___ time to relax.",
      questions: [
        mc("Hueco 1: to ___ up late", ["wake", "get", "stand"], 0, "'wake up late' = despertarse tarde."),
        mc("Hueco 2: she ___ for a walk", ["goes", "makes", "takes"], 0, "'go for a walk'."),
        mc("Hueco 3: she ___ out with her friends", ["hangs", "stays", "does"], 0, "'hang out with'."),
        mc("Hueco 4: she prefers to ___ in", ["stay", "go", "wake"], 0, "'stay in' = quedarse en casa."),
        mc("Hueco 5: do her ___", ["chores", "free time", "rest"], 0, "'do the/her chores'."),
        mc("Hueco 6: some ___ time to relax", ["free", "busy", "hard"], 0, "'free time'."),
      ],
    },
  },

  {
    n: 3,
    theme: "Pasado, comida y compras",
    grammar: {
      title: "Past simple y 'there was / there were'",
      blocks: [
        "Past simple: acciones terminadas en el pasado.\nRegulares: add -ed → worked, played, watched.\nIrregulares (memorízalos): go→went, have→had, see→saw, do→did, buy→bought, eat→ate.\nNegativa/pregunta con did: I didn't go. Did you see it?\n\n'there was' (singular) / 'there were' (plural): había — There was a shop. There were many people.",
      ],
      exercise: {
        title: "Práctica de gramática — Pasado",
        instructions: "Completa con el pasado.",
        questions: [
          fb("Yesterday I ___ (watch) a good film.", ["watched"], "Regular: 'watched'."),
          fb("She ___ (go) to the market this morning.", ["went"], "Irregular: go→went."),
          fb("We ___ (not/see) the end of the match.", ["didn't see", "did not see"], "Negativa: 'didn't see'."),
          fb("___ you ___ (buy) any bread?", ["Did"], "Pregunta: 'Did you buy…?'"),
          fb("There ___ a lot of people at the party.", ["were"], "Plural ('a lot of people') → 'there were'."),
          fb("There ___ a supermarket next to my house.", ["was"], "Singular ('a supermarket') → 'there was'."),
        ],
      },
    },
    vocab: {
      title: "Comida y compras",
      deck: [
        ["a loaf of bread", "una barra/hogaza de pan", "I bought a loaf of bread.", "colocación"],
        ["a bottle of", "una botella de", "a bottle of water", "colocación"],
        ["fresh", "fresco", "fresh vegetables", "adjetivo"],
        ["cheap", "barato", "The fruit is cheap here.", "adjetivo"],
        ["expensive", "caro", "That shop is expensive.", "adjetivo"],
        ["a receipt", "un recibo/ticket", "Keep your receipt.", "sustantivo"],
        ["a bargain", "una ganga", "It was a real bargain.", "sustantivo"],
        ["try on", "probarse (ropa)", "Can I try on this shirt?", "phrasal verb"],
        ["pay for", "pagar (algo)", "I paid for the coffee.", "phrasal verb"],
        ["run out of", "quedarse sin", "We ran out of milk.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Compras",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Something that costs very little is ___.", ["expensive", "cheap", "fresh"], 1, "'cheap' = barato."),
          mc("The paper that shows what you paid is a ___.", ["bargain", "receipt", "loaf"], 1, "'receipt' = ticket/recibo."),
          mc("A very good, low price is a ___.", ["bargain", "receipt", "bottle"], 0, "'bargain' = ganga."),
          mc("To put on clothes in a shop to see if they fit is to ___ them.", ["pay for", "try on", "run out"], 1, "'try on'."),
          mc("When you have no more of something, you ___ it.", ["try on", "pay for", "run out of"], 2, "'run out of' = quedarse sin."),
          mc("'a ___ of bread'", ["loaf", "bottle", "receipt"], 0, "'a loaf of bread'."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 5 (huecos de gramática)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 5 (gramática)",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nDear Sam,\nThank you (1)___ your letter. Last weekend I (2)___ to the new shopping centre with my sister. There (3)___ lots of nice shops, but everything was very (4)___, so we (5)___ buy much! We had lunch there and then went home. I hope (6)___ see you soon.\nBest wishes, Marta",
      questions: [
        fb("Hueco 1", ["for"], "'thank you for' = gracias por."),
        fb("Hueco 2", ["went"], "Pasado de 'go' → 'went'."),
        fb("Hueco 3", ["were"], "Plural ('lots of shops') → 'there were'."),
        fb("Hueco 4", ["expensive"], "Contexto: 'so we didn't buy much' → 'expensive'."),
        fb("Hueco 5", ["didn't", "did not"], "Negativa en pasado: 'we didn't buy'."),
        fb("Hueco 6", ["to"], "'hope to + infinitivo'."),
      ],
    },
  },

  {
    n: 4,
    theme: "Comparar y la ciudad",
    grammar: {
      title: "Comparativos y superlativos; some/any/much/many",
      blocks: [
        "Comparativos: adjetivo corto + -er + than (cheaper than); largo → more + adj + than (more expensive than). Irregulares: good→better, bad→worse.\nSuperlativos: the + adj-est (the cheapest) o the most + adj (the most expensive). Irregulares: the best, the worst.\n\nContables/incontables: 'some' (afirmativa), 'any' (negativa/pregunta). 'much' + incontable (much water), 'many' + contable (many people), 'a lot of' con ambos.",
      ],
      exercise: {
        title: "Práctica de gramática — Comparar",
        instructions: "Completa correctamente.",
        questions: [
          fb("This shop is ___ (cheap) than that one.", ["cheaper"], "Comparativo corto: 'cheaper than'."),
          fb("Everest is ___ (high) mountain in the world.", ["the highest"], "Superlativo: 'the highest'."),
          fb("Is there ___ milk in the fridge? (pregunta)", ["any"], "Pregunta → 'any'."),
          fb("There are ___ (many/much) people here.", ["many"], "Contable plural → 'many people'."),
          fb("My phone is ___ (good) than yours.", ["better"], "Irregular: good→better."),
          fb("There is ___ (some/any) bread on the table.", ["some"], "Afirmativa → 'some'."),
        ],
      },
    },
    vocab: {
      title: "Lugares de la ciudad y direcciones",
      deck: [
        ["a chemist's", "una farmacia", "Buy it at the chemist's.", "sustantivo"],
        ["a bakery", "una panadería", "fresh bread from the bakery", "sustantivo"],
        ["a crossroads", "un cruce", "Turn right at the crossroads.", "sustantivo"],
        ["opposite", "enfrente de", "The bank is opposite the park.", "preposición"],
        ["next to", "al lado de", "The shop is next to the café.", "preposición"],
        ["go straight on", "seguir recto", "Go straight on for 100 metres.", "colocación"],
        ["turn left/right", "girar a la izq/dcha", "Turn left at the lights.", "colocación"],
        ["on the corner", "en la esquina", "It's on the corner.", "colocación"],
        ["get lost", "perderse", "We got lost in the city.", "colocación"],
        ["a pedestrian area", "una zona peatonal", "It's a pedestrian area.", "sustantivo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — La ciudad",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A shop that sells medicine is a ___.", ["bakery", "chemist's", "crossroads"], 1, "'chemist's' = farmacia."),
          mc("A place where two roads cross is a ___.", ["crossroads", "corner", "bakery"], 0, "'crossroads' = cruce."),
          mc("If the bank faces the park, it is ___ the park.", ["next to", "opposite", "on"], 1, "'opposite' = enfrente."),
          mc("To continue without turning is to ___.", ["turn left", "go straight on", "get lost"], 1, "'go straight on'."),
          mc("A shop that sells bread is a ___.", ["bakery", "chemist's", "corner"], 0, "'bakery' = panadería."),
          mc("If you don't know where you are, you ___.", ["turn right", "go straight on", "get lost"], 2, "'get lost' = perderse."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 3 (comprensión)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 3 (comprensión)",
      instructions: "Lee el texto y elige la opción correcta.\n\nTom moved to a new town last month. At first, he didn't like it because he didn't know anyone and often got lost. The streets were confusing, and the town was much bigger than his old village. However, after a few weeks, things got better. He found a friendly bakery near his flat where the owner always said hello. He also joined a football team and made some new friends. Now Tom thinks his new town is one of the best places he has ever lived.",
      questions: [
        mc("Why didn't Tom like the town at first?", ["It was too small.", "He didn't know anyone.", "There were no shops."], 1, "'he didn't know anyone and often got lost'."),
        mc("What problem did Tom have with the streets?", ["They were dangerous.", "They were confusing.", "They were empty."], 1, "'The streets were confusing'."),
        mc("How is the new town compared to his village?", ["Smaller", "The same", "Bigger"], 2, "'much bigger than his old village'."),
        mc("Where did the owner always greet him?", ["At the football team", "At the bakery", "At his flat"], 1, "'the owner always said hello' (at the bakery)."),
        mc("How does Tom feel about the town now?", ["He hates it.", "He thinks it's one of the best.", "He wants to move again."], 1, "'one of the best places he has ever lived'."),
      ],
    },
    monthlyMock: 1,
  },

  {
    n: 5,
    theme: "Futuro, viajes y Writing",
    grammar: {
      title: "Futuro (going to / will) y modales básicos",
      blocks: [
        "'be going to' + infinitivo: planes e intenciones — I'm going to visit my aunt.\n'will' + infinitivo: predicciones y decisiones espontáneas — It will rain. I'll help you.\nPresent continuous también sirve para planes con fecha — I'm flying on Monday.\n\nModales básicos: can (poder/saber), can't (no poder), must (deber, obligación), should (debería, consejo).",
      ],
      exercise: {
        title: "Práctica de gramática — Futuro y modales",
        instructions: "Completa correctamente.",
        questions: [
          fb("Look at those clouds! It ___ (rain).", ["is going to rain", "'s going to rain"], "Predicción con evidencia → 'going to'."),
          fb("The phone is ringing. I ___ (answer) it.", ["will answer", "'ll answer"], "Decisión espontánea → 'will'."),
          fb("I ___ (visit) my grandparents next weekend. (plan)", ["am going to visit", "'m going to visit"], "Plan → 'be going to'."),
          fb("You ___ (should) see a doctor. (consejo)", ["should"], "Consejo → 'should see'."),
          fb("She ___ (can) speak three languages.", ["can"], "Habilidad → 'can'."),
          fb("You ___ (must) wear a seatbelt in the car. (obligación)", ["must"], "Obligación → 'must'."),
        ],
      },
    },
    vocab: {
      title: "Viajes y tiempo (clima)",
      deck: [
        ["a boarding pass", "una tarjeta de embarque", "Show your boarding pass.", "sustantivo"],
        ["luggage", "equipaje", "Don't forget your luggage.", "sustantivo"],
        ["a delay", "un retraso", "There was a delay of two hours.", "sustantivo"],
        ["catch a train", "coger un tren", "We caught the early train.", "colocación"],
        ["miss the bus", "perder el autobús", "I missed the bus this morning.", "colocación"],
        ["sunny", "soleado", "It's sunny today.", "adjetivo"],
        ["cloudy", "nublado", "It's cloudy and grey.", "adjetivo"],
        ["windy", "ventoso", "It's very windy.", "adjetivo"],
        ["abroad", "en el extranjero", "We went abroad on holiday.", "adverbio"],
        ["pack", "hacer la maleta", "I need to pack my bag.", "verbo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Viajes",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("The document you need to get on a plane is a ___.", ["boarding pass", "delay", "receipt"], 0, "'boarding pass'."),
          mc("Your bags and suitcases are your ___.", ["luggage", "delay", "weather"], 0, "'luggage' = equipaje."),
          mc("When a train is late, there is a ___.", ["bargain", "delay", "corner"], 1, "'delay' = retraso."),
          mc("To not arrive in time for the bus is to ___.", ["catch the bus", "miss the bus", "pack the bus"], 1, "'miss the bus'."),
          mc("To travel to another country is to go ___.", ["abroad", "straight on", "cloudy"], 0, "'go abroad'."),
          mc("To put your things in a suitcase is to ___.", ["pack", "miss", "delay"], 0, "'pack' = hacer la maleta."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Partes 6 y 7 (Writing)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (nota + historia)",
      instructions: "Escribe las dos tareas y compáralas con las respuestas modelo.",
      questions: [
        open(
          "PARTE 6 — Escribe una NOTA a tu amigo Alex (unas 25 palabras).\nDile:\n• adónde quieres ir el sábado\n• a qué hora\n• pídele que traiga algo",
          "Cubre los 3 puntos, con saludo y despedida. Frases simples.",
          "RESPUESTA MODELO (~27 palabras):\n\"Hi Alex,\nDo you want to go to the beach on Saturday? Let's meet at ten o'clock. Can you bring some sandwiches? See you there!\nMaría\"\n\nPor qué funciona: responde a los 3 puntos (dónde = playa; a qué hora = 10; pedir algo = sándwiches), con saludo/despedida y longitud adecuada."
        ),
        open(
          "PARTE 7 — Escribe una HISTORIA (unas 35 palabras). Las imágenes muestran:\n1) Una chica encuentra un móvil en la calle.\n2) Lo lleva a la policía.\n3) El dueño, muy contento, lo recoge.",
          "Usa el pasado simple y conectores (One day, Then, Finally).",
          "RESPUESTA MODELO (~34 palabras):\n\"One morning, Lucy found a phone in the street. She didn't know whose it was, so she took it to the police station. Two days later, the happy owner came and thanked her.\"\n\nPor qué funciona: cuenta las 3 imágenes en pasado simple, con conectores y la longitud pedida."
        ),
      ],
    },
  },

  {
    n: 6,
    theme: "El pasado en marcha · El tiempo y la naturaleza",
    grammar: {
      title: "Past continuous (was/were + -ing) · when / while",
      blocks: [
        "El past continuous describe una acción EN CURSO en el pasado: was/were + verbo-ing.\nAt 8 o'clock I was having dinner. They were playing outside.\n\nSe combina con el past simple: la acción larga (continuous) se interrumpe por una corta (simple), unidas por when/while:\nWhile I was walking home, it started to rain.\nI was sleeping when the phone rang.",
      ],
      exercise: {
        title: "Práctica de gramática — Past continuous",
        instructions: "Completa correctamente.",
        questions: [
          fb("At nine o'clock last night I ___ (watch) TV.", ["was watching"], "Acción en curso → was watching."),
          fb("They ___ (play) football when it started to rain.", ["were playing"], "Plural en curso → were playing."),
          fb("While she ___ (cook), the phone rang.", ["was cooking"], "Acción larga → was cooking."),
          fb("I was reading when the lights ___ (go) out. (acción corta)", ["went"], "La corta interrumpe → past simple 'went'."),
          fb("What ___ you ___ (do) at midnight? (pregunta)", ["were", "doing"], "Pregunta continuo: 'were you doing'."),
          fb("We ___ (not/sleep) when you called.", ["were not sleeping", "weren't sleeping"], "Negativa continuo: weren't sleeping."),
        ],
      },
    },
    vocab: {
      title: "El tiempo, las estaciones y la naturaleza",
      deck: [
        ["fog", "niebla", "There was thick fog this morning.", "sustantivo"],
        ["storm", "tormenta", "A big storm is coming.", "sustantivo"],
        ["spring", "primavera", "Flowers grow in spring.", "sustantivo"],
        ["autumn", "otoño", "The leaves fall in autumn.", "sustantivo"],
        ["forecast", "pronóstico", "The weather forecast says rain.", "sustantivo"],
        ["freezing", "helado (muy frío)", "It's freezing outside!", "adjetivo"],
        ["a leaf", "una hoja", "A yellow leaf fell.", "sustantivo"],
        ["the countryside", "el campo", "We spent the weekend in the countryside.", "sustantivo"],
        ["a hill", "una colina", "We climbed a small hill.", "sustantivo"],
        ["get wet", "mojarse", "Take an umbrella or you'll get wet.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Tiempo y naturaleza",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("When it's very cold, it's ___.", ["freezing", "sunny", "windy"], 0, "'freezing' = helado."),
          mc("You can't see far when there is ___.", ["fog", "a hill", "a leaf"], 0, "'fog' = niebla."),
          mc("The season when leaves fall is ___.", ["spring", "autumn", "summer"], 1, "'autumn' = otoño."),
          mc("It tells you tomorrow's weather: the ___.", ["forecast", "storm", "countryside"], 0, "'forecast' = pronóstico."),
          mc("Outside the city, in nature, is the ___.", ["countryside", "leaf", "fog"], 0, "'countryside' = el campo."),
          mc("If you walk in the rain, you'll ___.", ["get wet", "pack", "miss"], 0, "'get wet' = mojarse."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 1 (señales y mensajes)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 1 (señales)",
      instructions: "Lee cada texto y elige qué significa (A/B/C).",
      questions: [
        mc("Weather app: 'Storm warning: stay indoors this evening.'", ["Go outside tonight.", "Stay inside because of a storm.", "The storm finished."], 1, "'stay indoors' por la tormenta."),
        mc("Park sign: 'Path closed. Danger: falling trees.'", ["The path is safe.", "Do not use the path.", "The trees are for sale."], 1, "'Path closed' + peligro."),
        mc("Note: 'Bring a coat — it's freezing outside! Mum'", ["It's warm today.", "Wear something warm.", "Don't go out."], 1, "'freezing' → lleva abrigo."),
        mc("Bus stop notice: 'Service delayed due to fog.'", ["Buses are early.", "Buses are late because of fog.", "No buses today."], 1, "'delayed due to fog' = retrasado por niebla."),
        mc("Text: 'Match cancelled — the pitch is too wet. Coach'", ["The match is on.", "The game won't happen.", "Bring boots."], 1, "'cancelled' + campo mojado."),
        mc("Campsite sign: 'Please don't pick the flowers.'", ["You can take flowers.", "Leave the flowers alone.", "Water the flowers."], 1, "'don't pick the flowers' = no las cojas."),
      ],
    },
  },

  {
    n: 7,
    theme: "Cantidades · Comida y compras",
    grammar: {
      title: "Contables e incontables · some/any, much/many, a lot of",
      blocks: [
        "Contables (se cuentan): an apple, two apples. Incontables (no): water, rice, money.\nsome (afirmativas): I have some bread. any (preguntas/negativas): Is there any milk? There isn't any sugar.\nmany + contables: How many eggs? much + incontables: How much water?\na lot of / lots of sirve para ambos: a lot of friends, a lot of time.\na few + contables (unos pocos), a little + incontables (un poco).",
      ],
      exercise: {
        title: "Práctica de gramática — Cantidades",
        instructions: "Completa con la palabra correcta.",
        questions: [
          fb("Is there ___ milk in the fridge? (preguntas)", ["any"], "Pregunta → any."),
          fb("I have ___ apples in my bag. (afirmativa, contable)", ["some"], "Afirmativa → some."),
          fb("How ___ water do you drink? (incontable)", ["much"], "Incontable → much."),
          fb("How ___ brothers do you have? (contable)", ["many"], "Contable → many."),
          fb("There isn't ___ sugar left. (negativa)", ["any"], "Negativa → any."),
          fb("She has a ___ of friends. (mucho, ambos)", ["lot"], "'a lot of'."),
        ],
      },
    },
    vocab: {
      title: "Comida, cantidades y el supermercado",
      deck: [
        ["a bottle of", "una botella de", "a bottle of water", "cuantificador"],
        ["a slice of", "una rebanada/loncha de", "a slice of bread", "cuantificador"],
        ["a jar of", "un tarro de", "a jar of jam", "cuantificador"],
        ["a packet of", "un paquete de", "a packet of biscuits", "cuantificador"],
        ["fresh", "fresco", "fresh fruit and vegetables", "adjetivo"],
        ["a receipt", "un recibo/tique", "Keep your receipt.", "sustantivo"],
        ["a trolley", "un carrito", "a shopping trolley", "sustantivo"],
        ["cheap", "barato", "These are cheap.", "adjetivo"],
        ["expensive", "caro", "That's too expensive.", "adjetivo"],
        ["go off", "caducarse/estropearse", "The milk has gone off.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Comida y compras",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("You buy water in a ___.", ["bottle", "slice", "trolley"], 0, "'a bottle of water'."),
          mc("A ___ of bread.", ["jar", "slice", "packet"], 1, "'a slice of bread'."),
          mc("At the checkout they give you a ___.", ["receipt", "trolley", "storm"], 0, "'receipt' = recibo."),
          mc("Fruit that is not old is ___.", ["fresh", "cheap", "freezing"], 0, "'fresh' = fresco."),
          mc("The opposite of expensive is ___.", ["fresh", "cheap", "fog"], 1, "'cheap' = barato."),
          mc("If milk is too old, it has ___.", ["gone off", "packed", "caught"], 0, "'go off' = estropearse."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 4 (huecos de vocabulario)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 4 (vocabulario)",
      instructions: "Lee el texto y elige la palabra correcta para cada hueco.\n\nOn Saturdays, my mum and I do the shopping. We take a big (1)___ and walk around the supermarket. Mum likes to buy (2)___ fruit and vegetables. We don't buy (3)___ sweets because they are bad for our teeth. At the checkout, the assistant gives us a (4)___. The food here is quite (5)___, so we save money.",
      questions: [
        mc("Hueco 1", ["trolley", "bottle", "receipt"], 0, "carrito = trolley."),
        mc("Hueco 2", ["fresh", "cheap", "expensive"], 0, "'fresh fruit'."),
        mc("Hueco 3", ["much", "many", "any"], 2, "negativa → any sweets."),
        mc("Hueco 4", ["receipt", "trolley", "slice"], 0, "te dan un recibo."),
        mc("Hueco 5", ["cheap", "freezing", "fresh"], 0, "'quite cheap' → ahorran dinero."),
        mc("Hueco extra — 'a ___ of biscuits'", ["packet", "slice", "bottle"], 0, "'a packet of biscuits'."),
      ],
    },
  },

  {
    n: 8,
    theme: "Experiencias · Salud y cuerpo · SIMULACRO",
    grammar: {
      title: "Present perfect (ever/never/just/already/yet)",
      blocks: [
        "Present perfect = have/has + participio. Habla de experiencias de tu vida (sin decir cuándo) y de acciones recientes con efecto ahora.\nHave you ever been to London? — No, I've never been.\njust (acabar de): I've just finished. already (ya): She has already eaten. yet (todavía, en negativas/preguntas al final): I haven't done it yet. Have you finished yet?\nParticipios frecuentes: go→gone/been, see→seen, eat→eaten, do→done, have→had.",
      ],
      exercise: {
        title: "Práctica de gramática — Present perfect",
        instructions: "Completa correctamente.",
        questions: [
          fb("___ you ever ___ (eat) sushi?", ["Have", "eaten"], "Pregunta de experiencia: 'Have you eaten'."),
          fb("I have ___ (see) that film twice.", ["seen"], "see → seen."),
          fb("She has ___ finished her homework. (ya)", ["already"], "'already' = ya."),
          fb("I haven't called him ___. (todavía)", ["yet"], "'yet' al final en negativas."),
          fb("We have ___ (just) arrived. (acabar de)", ["just"], "'just' = acabar de."),
          fb("He has never ___ (be) abroad.", ["been"], "be → been."),
        ],
      },
    },
    vocab: {
      title: "El cuerpo, la salud y sentirse mal",
      deck: [
        ["a headache", "dolor de cabeza", "I have a headache.", "sustantivo"],
        ["a cold", "un resfriado", "She's got a cold.", "sustantivo"],
        ["a temperature", "fiebre", "He has a high temperature.", "sustantivo"],
        ["medicine", "medicina", "Take this medicine.", "sustantivo"],
        ["hurt", "doler/hacerse daño", "My leg hurts.", "verbo"],
        ["healthy", "sano/saludable", "a healthy diet", "adjetivo"],
        ["tired", "cansado", "I feel tired.", "adjetivo"],
        ["get better", "mejorar/recuperarse", "I hope you get better soon.", "colocación"],
        ["an appointment", "una cita (médica)", "I have a doctor's appointment.", "sustantivo"],
        ["exercise", "hacer ejercicio", "You should exercise more.", "verbo/sustantivo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Salud",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A pain in your head is a ___.", ["headache", "cold", "receipt"], 0, "'headache'."),
          mc("When you're ill you can take ___.", ["medicine", "a trolley", "a leaf"], 0, "'medicine'."),
          mc("If your arm ___, it's painful.", ["hurts", "packs", "exercises"], 0, "'hurt' = doler."),
          mc("Eating well and sleeping keeps you ___.", ["healthy", "expensive", "freezing"], 0, "'healthy'."),
          mc("To see a doctor you often need an ___.", ["appointment", "autumn", "receipt"], 0, "'appointment' = cita."),
          mc("After the flu, I hope you ___ soon.", ["get better", "go off", "get wet"], 0, "'get better' = mejorar."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 5 (huecos de gramática)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 5 (gramática)",
      instructions: "Lee el texto y escribe UNA palabra en cada hueco.\n\nDear Sam,\nHow are you? I (1)___ just come back from a great holiday. I have (2)___ been to Italy before, so it was my first time. We have (3)___ visited Rome and Venice — they were beautiful! I haven't seen Florence (4)___, but I want to go next year. Have you (5)___ travelled abroad? Write soon!\nLove, Kate",
      questions: [
        fb("Hueco 1", ["have", "'ve"], "'I have just come back'."),
        fb("Hueco 2", ["never"], "'never been before'."),
        fb("Hueco 3", ["already"], "'already visited'."),
        fb("Hueco 4", ["yet"], "'haven't seen … yet'."),
        fb("Hueco 5", ["ever"], "'Have you ever travelled?'"),
        fb("Hueco extra — 'She has ___ (do) her homework.'", ["done"], "do → done."),
      ],
    },
    monthlyMock: 2,
  },

  {
    n: 9,
    theme: "Consejos y obligaciones · Trabajo y estudios",
    grammar: {
      title: "Modales: should, must, have to, could",
      blocks: [
        "should / shouldn't = consejo: You should rest. You shouldn't smoke.\nmust = obligación fuerte o algo importante: You must wear a helmet.\nhave to / has to = obligación (norma externa): I have to work on Saturday. don't have to = no es necesario.\ncould = pasado de can (podía) y petición educada: Could you help me?",
      ],
      exercise: {
        title: "Práctica de gramática — Modales",
        instructions: "Completa correctamente.",
        questions: [
          fb("You look tired. You ___ rest. (consejo)", ["should"], "consejo → should."),
          fb("You ___ wear a seatbelt. It's the law. (obligación)", ["must", "have to"], "obligación → must/have to."),
          fb("I ___ to get up early tomorrow. (norma externa)", ["have"], "'have to get up'."),
          fb("You ___ smoke here — it's forbidden. (prohibición)", ["mustn't", "must not"], "prohibición → mustn't."),
          fb("___ you help me, please? (petición educada)", ["Could", "Can"], "petición → Could/Can."),
          fb("It's Sunday, so I ___ have to work. (no es necesario)", ["don't"], "'don't have to' = no hace falta."),
        ],
      },
    },
    vocab: {
      title: "Trabajo, estudios y dinero",
      deck: [
        ["a salary", "un sueldo", "a good salary", "sustantivo"],
        ["a meeting", "una reunión", "I have a meeting at ten.", "sustantivo"],
        ["a colleague", "un compañero de trabajo", "my colleagues", "sustantivo"],
        ["a deadline", "una fecha límite", "The deadline is Friday.", "sustantivo"],
        ["earn", "ganar (dinero)", "She earns a lot.", "verbo"],
        ["a degree", "una carrera/título", "a university degree", "sustantivo"],
        ["apply for", "solicitar (empleo)", "I applied for the job.", "phrasal verb"],
        ["part-time", "a tiempo parcial", "a part-time job", "adjetivo"],
        ["staff", "personal/plantilla", "friendly staff", "sustantivo"],
        ["save money", "ahorrar dinero", "I'm saving money for a car.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Trabajo",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("The money you get for your job is your ___.", ["salary", "deadline", "degree"], 0, "'salary'."),
          mc("The people you work with are your ___.", ["colleagues", "staff… (colleagues)", "receipts"], 0, "'colleagues'."),
          mc("The last day to finish something is the ___.", ["deadline", "meeting", "salary"], 0, "'deadline'."),
          mc("To ask for a job is to ___ it.", ["apply for", "earn", "save"], 0, "'apply for'."),
          mc("A job of only a few hours a day is ___.", ["part-time", "expensive", "healthy"], 0, "'part-time'."),
          mc("To keep money for later is to ___.", ["save money", "get wet", "go off"], 0, "'save money'."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 3 (comprensión)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 3 (comprensión)",
      instructions: "Lee el texto y elige la opción correcta.\n\nMaria works part-time at a bookshop while she studies for her university degree. She works three afternoons a week and every Saturday morning. Her manager is kind, and her colleagues are friendly, so she enjoys her job. The salary isn't very high, but Maria is saving money for a trip to Ireland next summer. She has to be organised because she also has deadlines for her studies. In the future, she would like to work in a library.",
      questions: [
        mc("How often does Maria work?", ["Every day.", "Three afternoons and Saturday mornings.", "Only Saturdays."], 1, "'three afternoons a week and every Saturday morning'."),
        mc("Why does Maria enjoy her job?", ["The salary is high.", "The manager and colleagues are nice.", "It's easy."], 1, "'manager is kind, colleagues are friendly'."),
        mc("What is Maria saving money for?", ["A car.", "A trip to Ireland.", "University."], 1, "'saving money for a trip to Ireland'."),
        mc("Why must Maria be organised?", ["She has study deadlines too.", "She has no free time.", "Her job is hard."], 0, "'she also has deadlines for her studies'."),
        mc("What job does she want in the future?", ["Manager.", "Teacher.", "To work in a library."], 2, "'work in a library'."),
        mc("The word 'salary' means…", ["hours", "money for work", "holiday"], 1, "'salary' = sueldo."),
      ],
    },
  },

  {
    n: 10,
    theme: "Cómo hacemos las cosas · Ocio y tecnología",
    grammar: {
      title: "Adverbios de modo y orden de la frase",
      blocks: [
        "Los adverbios de modo dicen CÓMO se hace algo. Se forman con adjetivo + -ly: quick → quickly, careful → carefully, easy → easily.\nIrregulares: good → well, fast → fast, hard → hard.\nOrden habitual: sujeto + verbo + objeto + (modo) + (lugar) + (tiempo): She sang the song beautifully at the concert last night.",
      ],
      exercise: {
        title: "Práctica de gramática — Adverbios",
        instructions: "Completa o reordena.",
        questions: [
          fb("She speaks English very ___ (good → adverbio).", ["well"], "good → well."),
          fb("Please drive ___ (careful → adverbio).", ["carefully"], "careful → carefully."),
          fb("He finished the test ___ (quick → adverbio).", ["quickly"], "quick → quickly."),
          fb("They can solve it ___ (easy → adverbio).", ["easily"], "easy → easily."),
          fb("Order: (the guitar / plays / he / badly) → ___", ["he plays the guitar badly"], "S+V+O+modo."),
          fb("Order: (works / hard / she / very) → ___", ["she works very hard"], "'hard' es adverbio sin -ly."),
        ],
      },
    },
    vocab: {
      title: "Tiempo libre, tecnología e internet",
      deck: [
        ["download", "descargar", "download an app", "verbo"],
        ["a screen", "una pantalla", "a big screen", "sustantivo"],
        ["switch on", "encender", "switch on the TV", "phrasal verb"],
        ["switch off", "apagar", "switch off your phone", "phrasal verb"],
        ["a message", "un mensaje", "send a message", "sustantivo"],
        ["online", "en línea", "I bought it online.", "adverbio"],
        ["a hobby", "una afición", "My hobby is painting.", "sustantivo"],
        ["join", "apuntarse/unirse", "join a club", "verbo"],
        ["borrow", "tomar prestado", "Can I borrow your pen?", "verbo"],
        ["lend", "prestar", "I'll lend you my book.", "verbo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Ocio y tecnología",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To get an app from the internet is to ___ it.", ["download", "lend", "join"], 0, "'download'."),
          mc("To turn a device on is to ___ it.", ["switch on", "switch off", "borrow"], 0, "'switch on'."),
          mc("To become a member of a club is to ___ it.", ["join", "lend", "download"], 0, "'join'."),
          mc("'Can I ___ your pen?' (take it for a while)", ["borrow", "lend", "join"], 0, "'borrow' = tomar prestado."),
          mc("'I'll ___ you my book.' (give it for a while)", ["lend", "borrow", "switch"], 0, "'lend' = prestar."),
          mc("You shop on the internet, so you shop ___.", ["online", "hard", "fresh"], 0, "'online'."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 1 (señales y mensajes)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 1 (mensajes)",
      instructions: "Lee cada texto y elige qué significa (A/B/C).",
      questions: [
        mc("Message: 'Can I borrow your charger? Mine's broken. Leo'", ["Leo wants to lend a charger.", "Leo wants to use your charger.", "Leo is selling a charger."], 1, "'borrow' = usar el tuyo."),
        mc("App notice: 'Update finished. Please switch off and on again.'", ["Delete the app.", "Restart the device.", "Buy a new phone."], 1, "apagar y encender = reiniciar."),
        mc("Library sign: 'You can borrow up to 5 books for 3 weeks.'", ["Keep books forever.", "Take max 5 books for 3 weeks.", "Books cost 5 pounds."], 1, "'borrow up to 5 books for 3 weeks'."),
        mc("Text: 'Club meeting online tonight at 8. Link below.'", ["Meet at the club building.", "The meeting is on the internet.", "The meeting is cancelled."], 1, "'online tonight' = por internet."),
        mc("Note: 'Please switch off the lights when you leave.'", ["Leave lights on.", "Turn lights off on leaving.", "Change the lights."], 1, "'switch off the lights'."),
        mc("Screen: 'Battery low. Connect your charger.'", ["The battery is full.", "You need to charge it.", "Turn it off."], 1, "'battery low' → conéctalo."),
      ],
    },
  },

  {
    n: 11,
    theme: "Situar en el tiempo y el espacio · Lugares y viajes",
    grammar: {
      title: "Preposiciones (in/on/at) y artículos (a/an/the)",
      blocks: [
        "TIEMPO: in (meses, años, partes del día) → in July, in the morning; on (días y fechas) → on Monday, on 5th May; at (horas, la noche) → at 7, at night.\nLUGAR: in (dentro) → in a box; on (sobre) → on the table; at (punto/lugar) → at the bus stop.\nARTÍCULOS: a/an (uno cualquiera, primera mención) → a dog; the (algo concreto o ya mencionado) → the dog. an ante sonido vocálico → an apple, an hour.",
      ],
      exercise: {
        title: "Práctica de gramática — Preposiciones y artículos",
        instructions: "Completa correctamente.",
        questions: [
          fb("The meeting is ___ Monday. (día)", ["on"], "días → on."),
          fb("I usually wake up ___ seven o'clock. (hora)", ["at"], "horas → at."),
          fb("We go on holiday ___ August. (mes)", ["in"], "meses → in."),
          fb("There's ___ apple on the table. (primera mención, sonido vocálico)", ["an"], "'an apple'."),
          fb("Close ___ door, please. (algo concreto)", ["the"], "concreto → the."),
          fb("She's waiting ___ the bus stop. (punto/lugar)", ["at"], "'at the bus stop'."),
        ],
      },
    },
    vocab: {
      title: "Lugares de la ciudad y direcciones",
      deck: [
        ["a chemist's", "una farmacia", "Buy it at the chemist's.", "sustantivo"],
        ["a crossroads", "un cruce", "Turn left at the crossroads.", "sustantivo"],
        ["opposite", "enfrente de", "The bank is opposite the park.", "preposición"],
        ["around the corner", "a la vuelta de la esquina", "It's just around the corner.", "expresión"],
        ["straight on", "todo recto", "Go straight on.", "expresión"],
        ["a pavement", "una acera", "Walk on the pavement.", "sustantivo"],
        ["a square", "una plaza", "the town square", "sustantivo"],
        ["nearby", "cerca", "There's a shop nearby.", "adverbio"],
        ["get lost", "perderse", "We got lost in the city.", "colocación"],
        ["a map", "un mapa", "Look at the map.", "sustantivo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Direcciones",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("You buy medicine at the ___.", ["chemist's", "square", "pavement"], 0, "'chemist's' = farmacia."),
          mc("'Go ___' means continue forward.", ["straight on", "opposite", "nearby"], 0, "'straight on'."),
          mc("The library is ___ the school (in front of it).", ["opposite", "around", "lost"], 0, "'opposite' = enfrente."),
          mc("When you don't know where you are, you ___.", ["get lost", "get wet", "get better"], 0, "'get lost'."),
          mc("Turn left at the ___ (where roads meet).", ["crossroads", "pavement", "map"], 0, "'crossroads' = cruce."),
          mc("An open space with buildings around it is a ___.", ["square", "chemist's", "corner"], 0, "'square' = plaza."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 4 (huecos de vocabulario)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 4 (vocabulario)",
      instructions: "Lee el texto y elige la palabra correcta para cada hueco.\n\nLast weekend we visited a new town. We didn't have a (1)___, so we got (2)___! We asked a woman for help. She said, 'Go (3)___ on and turn left at the (4)___. The museum is (5)___ the square.' Luckily, it was only around the (6)___, so we found it quickly.",
      questions: [
        mc("Hueco 1", ["map", "square", "pavement"], 0, "no teníamos mapa."),
        mc("Hueco 2", ["lost", "wet", "better"], 0, "'got lost'."),
        mc("Hueco 3", ["straight", "opposite", "nearby"], 0, "'go straight on'."),
        mc("Hueco 4", ["crossroads", "chemist's", "receipt"], 0, "girar en el cruce."),
        mc("Hueco 5", ["opposite", "online", "fresh"], 0, "'opposite the square'."),
        mc("Hueco 6", ["corner", "leaf", "trolley"], 0, "'around the corner'."),
      ],
    },
  },

  {
    n: 12,
    theme: "Unir ideas y repaso · Escuela y planes · SIMULACRO FINAL",
    grammar: {
      title: "Conectores (because, so, but, although) y repaso",
      blocks: [
        "Conectores para unir frases:\nbecause = porque (causa): I stayed home because I was ill.\nso = así que (resultado): I was ill, so I stayed home.\nbut = pero (contraste): It's small but comfortable.\nalthough = aunque (concesión): Although it was raining, we went out.\nRepaso: revisa presente, pasado, futuro, present perfect, modales, cantidades y preposiciones de todo el programa.",
      ],
      exercise: {
        title: "Práctica de gramática — Conectores",
        instructions: "Completa con el conector correcto.",
        questions: [
          fb("I was tired, ___ I went to bed early. (resultado)", ["so"], "resultado → so."),
          fb("I went to bed early ___ I was tired. (causa)", ["because"], "causa → because."),
          fb("The film was long ___ interesting. (contraste)", ["but"], "contraste → but."),
          fb("___ it was cold, we went swimming. (aunque)", ["Although"], "concesión → Although."),
          fb("She studied hard, ___ she passed. (resultado)", ["so"], "resultado → so."),
          fb("We like the flat ___ it's small. (aunque, dentro de la frase)", ["although"], "'although it's small'."),
        ],
      },
    },
    vocab: {
      title: "La escuela, los planes y repaso",
      deck: [
        ["a timetable", "un horario", "the school timetable", "sustantivo"],
        ["a subject", "una asignatura", "My favourite subject is art.", "sustantivo"],
        ["homework", "deberes", "do your homework", "sustantivo"],
        ["an exam", "un examen", "pass an exam", "sustantivo"],
        ["a break", "un descanso/recreo", "at break time", "sustantivo"],
        ["revise", "repasar (para un examen)", "I need to revise for the test.", "verbo"],
        ["make plans", "hacer planes", "We're making plans for summer.", "colocación"],
        ["look forward to", "tener ganas de", "I look forward to the holidays.", "expresión"],
        ["improve", "mejorar", "My English is improving.", "verbo"],
        ["succeed", "tener éxito", "Work hard and you'll succeed.", "verbo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Escuela y planes",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A list of your lessons and times is a ___.", ["timetable", "break", "receipt"], 0, "'timetable'."),
          mc("Maths and history are school ___.", ["subjects", "exams", "plans"], 0, "'subjects' = asignaturas."),
          mc("To study again before a test is to ___.", ["revise", "improve", "succeed"], 0, "'revise' = repasar."),
          mc("To get better at something is to ___.", ["improve", "revise", "borrow"], 0, "'improve' = mejorar."),
          mc("A short rest between classes is a ___.", ["break", "degree", "salary"], 0, "'break' = recreo."),
          mc("'I ___ the summer holidays.' (tener ganas)", ["look forward to", "get lost", "go off"], 0, "'look forward to'."),
        ],
      },
    },
    exam: {
      part: "Reading and Writing — Parte 5 (huecos de gramática)",
      category: "reading", weight: 6,
      title: "Examen semanal — Parte 5 (gramática, repaso)",
      instructions: "Lee el texto y escribe UNA palabra en cada hueco.\n\nHi Ana,\nI'm writing (1)___ tell you my news. Last month I started a new school. At first it was hard (2)___ I didn't know anyone, (3)___ now I have lots of friends. My favourite subject (4)___ art. I have already (5)___ two exams and I passed both! I'm looking forward (6)___ the summer holidays. Write soon!\nTom",
      questions: [
        fb("Hueco 1", ["to"], "'writing to tell' (infinitivo de finalidad)."),
        fb("Hueco 2", ["because"], "causa → because."),
        fb("Hueco 3", ["but"], "contraste → but."),
        fb("Hueco 4", ["is"], "'my favourite subject is art'."),
        fb("Hueco 5", ["had", "done", "passed", "taken"], "present perfect: 'have already had/done/taken'."),
        fb("Hueco 6", ["to"], "'look forward to'."),
      ],
    },
    finalMock: true,
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  A2 Key anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "A2 Key (Cambridge English: Key / KET)", subtitle: "Programa de 12 semanas (3 meses) para el examen A2 Key.",
      description: "Curso completo de preparación para Cambridge English: Key (A2 Key / KET), nivel elemental. Programa de 12 semanas (3 meses) con gramática progresiva, vocabulario nuevo y flashcards cada semana, práctica semanal del formato real del examen y un simulacro final que estima tu nota en la Cambridge English Scale (100–150, aprobado 120). Contenido original para hispanohablantes que empiezan.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Preparación A2 Key (KET) — Programa de 12 semanas (3 meses) — NOVARA", seoDescription: "Prepara el Cambridge A2 Key con un programa semanal completo: gramática, vocabulario, práctica de examen y simulacro.",
      objectives: { create: [
        "Seguir un programa semanal con gramática, vocabulario y práctica de examen.",
        "Dominar la gramática básica de A2 de forma progresiva.",
        "Ampliar el vocabulario cotidiano, con flashcards cada semana.",
        "Practicar las partes reales del examen (Reading and Writing).",
        "Medir tu preparación con un simulacro y la Cambridge Scale.",
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

  // Guía
  const m0 = await createModule("Guía del examen A2 Key", "Estructura, puntuación y cómo usar este programa.", 0);
  await createLesson(m0.id, {
    title: "Cómo es el examen y cómo funciona este programa", description: "Las 3 pruebas, la Cambridge Scale y la cadencia semanal.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "El A2 Key (KET) es el examen de nivel elemental de Cambridge. Tiene 3 pruebas: Reading and Writing (un paper de 7 partes), Listening y Speaking. Se aprueba con 120 en la Cambridge English Scale (100–150; 140+ = B1)." },
      { type: "GRAMMAR", title: "Cómo usar este programa (12 semanas)", content: "Cada semana: 1) GRAMÁTICA nueva con ejercicios; 2) VOCABULARIO con flashcards y ejercicios; 3) PRÁCTICA de una parte real del examen.\nHaz un poco cada día. Cada mes hay un SIMULACRO (semanas 4 y 8) y en la semana 12 el SIMULACRO FINAL, que estima tu nota." },
      { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["12 semanas (3 meses) de preparación.", "Gramática + vocabulario + examen cada semana.", "Simulacros mensuales (sem. 4, 8) y simulacro FINAL (sem. 12).", "Aprobado A2 = 120 en la Cambridge Scale."] } },
    ],
    pedagogy: { objective: "Entender el examen y el programa.", summary: "12 semanas; gramática, vocabulario y examen cada semana; simulacros mensuales y final.", reviewPrompts: ["¿Qué nota necesitas para el A2?"] },
  });

  const readingExerciseIds = [];
  let sortOrder = 1;
  for (const w of WEEKS) {
    const m = await createModule(`Semana ${w.n} — ${w.theme}`, `Gramática, vocabulario y práctica de examen (semana ${w.n}).`, sortOrder++);
    await createLesson(m.id, {
      title: `Gramática — ${w.grammar.title}`, description: "Punto gramatical de la semana + práctica.", sortOrder: 0,
      blocks: w.grammar.blocks.map((content, i) => ({ type: "GRAMMAR", title: i === 0 ? w.grammar.title : null, content })),
      pedagogy: { objective: `Dominar: ${w.grammar.title}.`, summary: w.grammar.title, reviewPrompts: ["Repasa lo de semanas anteriores."] },
      exercises: [{ category: "reading", title: w.grammar.exercise.title, instructions: w.grammar.exercise.instructions, questions: w.grammar.exercise.questions }],
    });
    const deck = await db.flashcardDeck.create({
      data: { title: `A2 Key — Semana ${w.n}: ${w.vocab.title}`, description: "Vocabulario de la semana.", language: "en", authorId: adminUser.id,
        cards: { create: w.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "A2" })) } },
    });
    await createLesson(m.id, {
      title: `Vocabulario — ${w.vocab.title}`, description: "Palabras nuevas + flashcards + práctica.", sortOrder: 1,
      blocks: [
        { type: "GRAMMAR", title: "Vocabulario de la semana", content: "Estudia el mazo de flashcards y luego haz el ejercicio. Repasa también el vocabulario anterior." },
        { type: "FLASHCARDS", deckId: deck.id },
      ],
      pedagogy: { objective: "Ampliar el vocabulario de la semana.", summary: w.vocab.title, reviewPrompts: ["Repasa las flashcards a diario."] },
      exercises: [{ category: "reading", title: w.vocab.exercise.title, instructions: w.vocab.exercise.instructions, questions: w.vocab.exercise.questions }],
    });
    const ids = await createLesson(m.id, {
      title: `Práctica de examen — ${w.exam.part}`, description: "Ejercicio con el formato real del examen.", sortOrder: 2,
      blocks: [{ type: "GRAMMAR", title: "Práctica semanal de examen", content: `Esta semana practicas: ${w.exam.part}. Hazlo como si fuera el examen real.` }],
      pedagogy: { objective: `Practicar el formato real: ${w.exam.part}.`, summary: w.exam.part, reviewPrompts: ["Cronométrate."] },
      exercises: [{ category: w.exam.category, title: w.exam.title, instructions: w.exam.instructions, questions: w.exam.questions }],
    });
    if (w.exam.category === "reading") readingExerciseIds.push({ id: ids[0], weight: w.exam.weight });

    if (w.monthlyMock) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: `Simulacro Mensual ${w.monthlyMock} — Reading and Writing (A2 Key)`, passingScore: 60, timeLimitMinutes: 50,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🎯 Simulacro Mensual ${w.monthlyMock}`, `Examen de práctica del mes ${w.monthlyMock}.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Simulacro Mensual ${w.monthlyMock}`, description: "Mide si vas por buen camino.", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne las partes auto-corregibles de Reading and Writing vistas hasta ahora, cronometradas. Aprueba con un 60% (≈120 en la Cambridge Scale). Tu resultado te dice si vas por buen camino hacia el A2.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Comprobar tu preparación a mitad de camino.", summary: `Simulacro del mes ${w.monthlyMock}; aprobado 60%.`, reviewPrompts: ["Si no llegas a 60%, repasa las semanas anteriores."] },
      });
    }

    if (w.finalMock) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: "Simulacro FINAL — Reading and Writing (A2 Key)", passingScore: 60, timeLimitMinutes: 60,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule("🎯 Simulacro final", "Examen de práctica que estima tu nota.", sortOrder++);
      await createLesson(mm.id, {
        title: "Simulacro final — Reading and Writing", description: "Mide si alcanzarías la nota Cambridge.", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne las partes auto-corregibles de Reading and Writing vistas en el curso, cronometradas. Aprueba con un 60% (≈120 en la Cambridge Scale). Writing, Listening y Speaking se evalúan aparte. Tu resultado te dice si alcanzarías el A2.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Comprobar tu preparación bajo condiciones de examen.", summary: "Simulacro; aprobado 60%.", reviewPrompts: ["Si no llegas a 60%, repasa las semanas anteriores."] },
      });
    }
  }

  // Listening y Speaking (audio británico)
  const ms = await createModule("Listening y Speaking", "Práctica con audio británico real y conversación por voz.", sortOrder++);
  const script = "Good morning, everyone, and welcome to the City Museum. The museum is open from nine o'clock in the morning until five o'clock in the afternoon. Tickets cost eight pounds for adults and four pounds for children. Our café is on the first floor, next to the gift shop. Please remember that you must not take photographs inside the museum. Thank you, and enjoy your visit.";
  const audio = await generateListeningAudio(script, "a2-museum-announcement");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — Un anuncio en el museo", description: "Escucha (voz británica) y responde.", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír un anuncio en un museo. Fíjate en horas, precios y lugares. Puedes repetir el audio." },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Extraer información específica (horas, precios, lugares).", commonMistakes: ["Confundir precio de adulto y niño."], reviewPrompts: ["¿A qué hora cierra?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "Anuncio del museo", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("What time does the museum close?", ["At four o'clock.", "At five o'clock.", "At nine o'clock."], 1, "'until five o'clock'."),
      mc("How much is a child's ticket?", ["Four pounds.", "Eight pounds.", "Five pounds."], 0, "'four pounds for children'."),
      mc("Where is the café?", ["On the ground floor.", "On the first floor.", "Outside."], 1, "'on the first floor'."),
      mc("What must you NOT do?", ["Talk.", "Eat.", "Take photographs."], 2, "'you must not take photographs'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Conversación por voz (A2)", description: "Habla con la IA (voz británica).", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. La IA te hará preguntas sencillas (tu nombre, tu familia, tu rutina). Responde por el micrófono. Al terminar, 'Finalizar y evaluar'.\nImportante: abre la app en http://localhost:3001 (no en la IP de red) para que el micrófono funcione." }],
    pedagogy: { objective: "Responder preguntas sencillas sobre uno mismo (A2).", summary: "Conversación por voz con la IA.", reviewPrompts: ["¿Cómo describes tu rutina en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "A2", scenario: "el examinador te hace preguntas personales sencillas: nombre, familia, estudios/trabajo y rutina diaria", objective: "que el alumno hable de sí mismo, su familia y su rutina", keywords: "My name is, I live, I usually, my family" }, title: "Entrevista: háblame de ti", instructions: "Responde a la IA.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "A2 Key — Semana" } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ A2 Key (programa 12 semanas) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error A2:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
