/**
 * B1 Preliminary (Cambridge English: Preliminary / PET) — PROGRAMA COMPLETO.
 *
 * Currículo de 8 SEMANAS (≈2 meses) con cadencia de academia real:
 *   • Gramática progresiva cada semana (repaso acumulativo).
 *   • Vocabulario nuevo cada semana, con su mazo de flashcards.
 *   • Práctica semanal del formato REAL de una parte del examen.
 *   • Simulacro mensual (semana 4 y semana 8) que estima tu nota Cambridge.
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * Escala B1 Preliminary: 120–170, aprobado 140.
 *
 * Idempotente. No toca otros cursos.   node scripts/seed-b1-preliminary.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "b1-preliminary";
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
const open = (prompt, guidance, explanation) => ({ kind: "open", data: { kind: "open", prompt, guidance, explanation } });

// ════════════════════════════════════════════════════════════════════════════
// EL PROGRAMA — 12 semanas.
// ════════════════════════════════════════════════════════════════════════════
const WEEKS = [
  {
    n: 1,
    theme: "Presente y tiempo libre",
    grammar: {
      title: "Repaso del presente: simple, continuo e introducción al present perfect",
      blocks: [
        "Present simple: rutinas y hechos (I play tennis on Sundays).\nPresent continuous: acciones ahora o temporales (I'm reading a great book at the moment).\nPresent perfect (have/has + participio): experiencias y acciones con conexión con el presente (I've visited London twice). En B1 empezamos a distinguirlo del pasado simple.",
      ],
      exercise: {
        title: "Práctica de gramática — Presente",
        instructions: "Completa con el tiempo correcto.",
        questions: [
          fb("She ___ (play) the guitar every evening.", ["plays"], "Rutina → present simple."),
          fb("Be quiet — I ___ (try) to concentrate.", ["am trying", "'m trying"], "Ahora → present continuous."),
          fb("I ___ (never/be) to Japan.", ["have never been", "'ve never been"], "Experiencia → present perfect."),
          fb("They ___ (not/watch) much television these days.", ["don't watch", "do not watch"], "Hábito general → present simple."),
          fb("Look! The team ___ (win) the match!", ["is winning", "'s winning"], "Ahora ('Look!') → present continuous."),
          fb("We ___ (know) each other since 2018.", ["have known", "'ve known"], "Duración hasta ahora → present perfect."),
        ],
      },
    },
    vocab: {
      title: "Tiempo libre y aficiones",
      deck: [
        ["take up", "empezar (una afición)", "I took up painting last year.", "phrasal verb"],
        ["give up", "dejar (una afición)", "He gave up smoking.", "phrasal verb"],
        ["be into", "gustar mucho / estar metido en", "I'm really into photography.", "expresión"],
        ["keen on", "aficionado a", "She's keen on cycling.", "colocación"],
        ["join a club", "apuntarse a un club", "I joined a chess club.", "colocación"],
        ["have a go", "intentarlo / probar", "Why don't you have a go?", "expresión"],
        ["spare time", "tiempo libre", "In my spare time I draw.", "colocación"],
        ["get together", "quedar / reunirse", "We get together on Fridays.", "phrasal verb"],
        ["a hobby", "una afición", "Reading is my favourite hobby.", "sustantivo"],
        ["do exercise", "hacer ejercicio", "I do exercise three times a week.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Aficiones",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To start a new hobby is to ___ it.", ["give up", "take up", "get together"], 1, "'take up a hobby'."),
          mc("To stop doing an activity is to ___ it.", ["give up", "take up", "join"], 0, "'give up'."),
          mc("If you like something a lot, you are ___ it.", ["keen on", "spare on", "into on"], 0, "'keen on'."),
          mc("To become a member of an activity group is to ___.", ["have a go", "join a club", "give up"], 1, "'join a club'."),
          mc("To try something is to ___.", ["have a go", "give up", "get together"], 0, "'have a go'."),
          mc("Time when you are free is your ___.", ["spare time", "hobby", "club"], 0, "'spare time'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 1 (señales y mensajes)",
      category: "reading", weight: 5,
      title: "Examen semanal — Reading Parte 1",
      instructions: "Lee cada texto y elige qué significa (A/B/C).",
      questions: [
        mc("Sports centre sign: 'Members only after 6 pm.'", ["Anyone can enter after 6 pm.", "Only members can use it after 6 pm.", "It closes at 6 pm."], 1, "'Members only after 6 pm'."),
        mc("Text: 'Can't make football tonight — twisted my ankle. Sorry! Dan'", ["Dan will be late.", "Dan can't play because he's hurt.", "Dan wants to play more."], 1, "'Can't make… twisted my ankle' = no puede jugar."),
        mc("Notice: 'Please return equipment after use.'", ["You can keep the equipment.", "Put the equipment back when finished.", "The equipment is broken."], 1, "'return… after use' = devuélvelo al terminar."),
        mc("Poster: 'New yoga class — beginners welcome!'", ["Only experts can join.", "Beginners can join too.", "The class is full."], 1, "'beginners welcome'."),
        mc("Message: 'Club meeting moved to Thursday. Same time.'", ["The meeting is cancelled.", "The day has changed to Thursday.", "The time has changed."], 1, "'moved to Thursday. Same time' = cambia el día."),
        mc("Sign: 'Lockers free for members.'", ["Members pay for lockers.", "Lockers cost nothing for members.", "There are no lockers."], 1, "'free' = gratis para socios."),
      ],
    },
  },

  {
    n: 2,
    theme: "Pasado y viajes",
    grammar: {
      title: "Pasados: simple, continuo, perfecto y 'used to'",
      blocks: [
        "Past simple: acción terminada (I flew to Rome).\nPast continuous: acción en desarrollo en el pasado, a menudo interrumpida (I was sleeping when the phone rang).\nPast perfect: acción anterior a otra pasada (The plane had left when we arrived).\n'used to' + infinitivo: hábitos pasados que ya no ocurren (I used to travel a lot).",
      ],
      exercise: {
        title: "Práctica de gramática — Pasados",
        instructions: "Completa con el pasado adecuado.",
        questions: [
          fb("While I ___ (wait) for the bus, it started to rain.", ["was waiting"], "En desarrollo → past continuous."),
          fb("When we got to the station, the train ___ (already/leave).", ["had already left"], "Anterior a otra pasada → past perfect."),
          fb("Last year we ___ (travel) to Greece.", ["travelled", "traveled"], "Terminada → past simple."),
          fb("I ___ (use) to live near the sea.", ["used"], "Hábito pasado → 'used to live'."),
          fb("She ___ (not/enjoy) the flight because she felt ill.", ["didn't enjoy", "did not enjoy"], "Past simple negativo."),
          fb("They were tired because they ___ (drive) all day.", ["had driven"], "Causa anterior → past perfect."),
        ],
      },
    },
    vocab: {
      title: "Viajes y transporte",
      deck: [
        ["set off", "ponerse en marcha", "We set off early.", "phrasal verb"],
        ["get on / get off", "subir / bajar (transporte)", "Get off at the next stop.", "phrasal verb"],
        ["a return ticket", "un billete de ida y vuelta", "a return ticket to York", "colocación"],
        ["a single ticket", "un billete de ida", "a single ticket, please", "colocación"],
        ["miss a connection", "perder un enlace", "We missed our connection.", "colocación"],
        ["book in advance", "reservar con antelación", "Book your seat in advance.", "colocación"],
        ["a delay", "un retraso", "There was a long delay.", "sustantivo"],
        ["public transport", "transporte público", "I use public transport.", "colocación"],
        ["get around", "moverse por (un lugar)", "It's easy to get around the city.", "phrasal verb"],
        ["a journey", "un viaje / trayecto", "The journey took two hours.", "sustantivo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Viajes",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A ticket to go and come back is a ___.", ["single ticket", "return ticket", "delay"], 1, "'return ticket'."),
          mc("To leave a bus or train is to ___.", ["get on", "get off", "set off"], 1, "'get off'."),
          mc("Buses, trains and trams are ___.", ["a journey", "public transport", "a delay"], 1, "'public transport'."),
          mc("To move from place to place in a city is to ___.", ["get around", "book in advance", "set off"], 0, "'get around'."),
          mc("When your train is late, there is a ___.", ["journey", "delay", "connection"], 1, "'delay' = retraso."),
          mc("To reserve early is to ___.", ["miss a connection", "book in advance", "get off"], 1, "'book in advance'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 5 (huecos de vocabulario)",
      category: "reading", weight: 6,
      title: "Examen semanal — Reading Parte 5",
      instructions: "Elige la opción correcta (A–D) para cada hueco. Texto:\n\nLast summer, I decided to travel around Europe by train. I bought a special pass, which (1)___ me to use most trains for a month. The best part was the (2)___ to change my plans whenever I wanted. Of course, there were a few (3)___ — I once missed a connection and had to (4)___ the night in a station! But I soon learned to (5)___ my seats in advance and to (6)___ light. It was the trip of a lifetime.",
      questions: [
        mc("Hueco 1: which ___ me to use most trains", ["allowed", "let", "made", "helped"], 0, "'allow somebody to' = permitir."),
        mc("Hueco 2: the ___ to change my plans", ["ability", "freedom", "chance", "possibility"], 1, "'the freedom to' = la libertad de."),
        mc("Hueco 3: there were a few ___", ["problems", "troubles", "faults", "mistakes"], 0, "'a few problems'."),
        mc("Hueco 4: had to ___ the night", ["spend", "pass", "stay", "take"], 0, "'spend the night' = pasar la noche."),
        mc("Hueco 5: to ___ my seats in advance", ["book", "buy", "take", "get"], 0, "'book seats' = reservar asientos."),
        mc("Hueco 6: to ___ light", ["travel", "pack", "go", "carry"], 0, "'travel light' = viajar ligero."),
      ],
    },
  },

  {
    n: 3,
    theme: "Present perfect y trabajo/estudio",
    grammar: {
      title: "Present perfect vs. past simple; for/since/ever/just/already/yet",
      blocks: [
        "Past simple: momento pasado terminado (I finished at six).\nPresent perfect: conexión con el presente — experiencias, acciones recientes con resultado, duración hasta ahora.\n'for' + periodo; 'since' + inicio. 'ever/never' (experiencias); 'just' (hace un momento); 'already' (antes de lo esperado); 'yet' (todavía, en negativas y preguntas).",
      ],
      exercise: {
        title: "Práctica de gramática — Present perfect",
        instructions: "Completa correctamente.",
        questions: [
          fb("I ___ (work) here since March.", ["have worked", "'ve worked"], "Duración hasta ahora → present perfect."),
          fb("She ___ (finish) her project yesterday.", ["finished"], "Momento pasado ('yesterday') → past simple."),
          fb("Have you ___ studied abroad? (alguna vez)", ["ever"], "Experiencia → 'ever'."),
          fb("He's ___ arrived — he's still taking off his coat. (hace un momento)", ["just"], "Acción muy reciente → 'just'."),
          fb("They haven't sent the report ___. (todavía)", ["yet"], "Negativa → 'yet'."),
          fb("We've lived in Leeds ___ ten years.", ["for"], "'for' + periodo."),
        ],
      },
    },
    vocab: {
      title: "Trabajo y estudios",
      deck: [
        ["apply for", "solicitar (un puesto/plaza)", "I applied for the course.", "phrasal verb"],
        ["a deadline", "una fecha límite", "The deadline is Friday.", "sustantivo"],
        ["hand in", "entregar", "Hand in your assignment on time.", "phrasal verb"],
        ["get a degree", "sacarse una carrera", "She got a degree in biology.", "colocación"],
        ["a part-time job", "un trabajo a tiempo parcial", "I have a part-time job.", "colocación"],
        ["take a break", "hacer un descanso", "Let's take a break.", "colocación"],
        ["be in charge of", "estar a cargo de", "She's in charge of the team.", "colocación"],
        ["make progress", "progresar", "You're making good progress.", "colocación"],
        ["do research", "investigar", "We did research for the project.", "colocación"],
        ["a qualification", "una titulación", "You need a qualification for this job.", "sustantivo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Trabajo/estudio",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To formally request a job or course is to ___ it.", ["hand in", "apply for", "take a break"], 1, "'apply for'."),
          mc("A job of only a few hours a week is a ___.", ["part-time job", "deadline", "qualification"], 0, "'part-time job'."),
          mc("To submit your homework is to ___ it.", ["make", "hand in", "do research"], 1, "'hand in'."),
          mc("The date by which you must finish is the ___.", ["degree", "deadline", "break"], 1, "'deadline'."),
          mc("To improve over time is to ___.", ["take a break", "make progress", "hand in"], 1, "'make progress'."),
          mc("To be responsible for something is to be ___ it.", ["in charge of", "part-time of", "keen of"], 0, "'in charge of'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 6 (huecos de gramática)",
      category: "reading", weight: 6,
      title: "Examen semanal — Reading Parte 6",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nHi Mia,\nI'm writing to tell you (1)___ my new job. I've been here (2)___ two weeks now, and I really enjoy it. The people are friendly and there's a lot (3)___ learn. Yesterday I (4)___ my first report on time! If you (5)___ any advice about starting a new job, please tell me. I'm sure you (6)___ have some good tips. Write soon! Leo",
      questions: [
        fb("Hueco 1", ["about"], "'tell you about' = contarte sobre."),
        fb("Hueco 2", ["for"], "'for two weeks' → present perfect + for."),
        fb("Hueco 3", ["to"], "'a lot to learn' = mucho que aprender."),
        fb("Hueco 4", ["handed", "finished", "wrote"], "Pasado simple: 'handed in / finished / wrote'."),
        fb("Hueco 5", ["have"], "Condicional tipo 1: 'if you have any advice'."),
        fb("Hueco 6", ["will", "'ll"], "'I'm sure you will have' → futuro."),
      ],
    },
  },

  {
    n: 4,
    theme: "Futuro y tecnología · SIMULACRO Mes 1",
    grammar: {
      title: "Formas de futuro: will, going to, present continuous",
      blocks: [
        "'will': predicciones, decisiones espontáneas, ofertas y promesas (I'll call you later).\n'be going to': planes/intenciones y predicciones con evidencia (I'm going to study medicine; Look — it's going to rain).\nPresent continuous: planes fijos con fecha (I'm meeting Sara at five).",
      ],
      exercise: {
        title: "Práctica de gramática — Futuro",
        instructions: "Completa con la forma de futuro adecuada.",
        questions: [
          fb("I'm thirsty. I ___ (get) a drink.", ["will get", "'ll get"], "Decisión espontánea → 'will'."),
          fb("Careful! You ___ (spill) your coffee!", ["are going to spill", "'re going to spill"], "Predicción con evidencia → 'going to'."),
          fb("We ___ (see) the dentist at 4 tomorrow. (cita fija)", ["are seeing", "'re seeing"], "Plan fijo → present continuous."),
          fb("She ___ (study) engineering next year. (plan)", ["is going to study", "'s going to study"], "Plan/intención → 'going to'."),
          fb("Don't worry, I ___ (help) you with it.", ["will help", "'ll help"], "Ofrecimiento → 'will'."),
          fb("I think robots ___ (do) many jobs in the future.", ["will do", "'ll do"], "Predicción → 'will'."),
        ],
      },
    },
    vocab: {
      title: "Tecnología y comunicación",
      deck: [
        ["download", "descargar", "I downloaded the app.", "verbo"],
        ["log in", "iniciar sesión", "Log in with your email.", "phrasal verb"],
        ["a device", "un dispositivo", "a smart device", "sustantivo"],
        ["update", "actualizar", "Update the software.", "verbo"],
        ["get in touch", "ponerse en contacto", "Get in touch if you need help.", "colocación"],
        ["reply to", "responder a", "I replied to her message.", "phrasal verb"],
        ["turn on / off", "encender / apagar", "Turn off your phone.", "phrasal verb"],
        ["a screen", "una pantalla", "a cracked screen", "sustantivo"],
        ["run out of battery", "quedarse sin batería", "My phone ran out of battery.", "colocación"],
        ["stay in touch", "seguir en contacto", "Let's stay in touch.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Tecnología",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To copy a file from the internet is to ___ it.", ["update", "download", "log in"], 1, "'download'."),
          mc("To enter your account with a password is to ___.", ["log in", "turn off", "reply"], 0, "'log in'."),
          mc("A phone or tablet is a ___.", ["screen", "device", "battery"], 1, "'device'."),
          mc("To answer a message is to ___ it.", ["reply to", "turn on", "download"], 0, "'reply to'."),
          mc("To contact someone is to ___.", ["run out", "get in touch", "log in"], 1, "'get in touch'."),
          mc("To install the newest version is to ___ the app.", ["download", "update", "reply to"], 1, "'update'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 3 (comprensión)",
      category: "reading", weight: 6,
      title: "Examen semanal — Reading Parte 3",
      instructions: "Lee el texto y elige la opción correcta.\n\nWhen my grandmother turned seventy, my family gave her a tablet. We were sure she would never use it. In fact, we worried she might find it too complicated and give up after a day. How wrong we were! Within a week, she was video-calling her sister in Australia, downloading recipes and even sending us funny messages. She says the best thing is being able to see her grandchildren's faces every day, instead of just hearing our voices on the phone. Now she jokes that she is more 'connected' than the rest of us.",
      questions: [
        mc("What did the family expect?", ["That she would love the tablet", "That she would never use it", "That she would sell it"], 1, "'we were sure she would never use it'."),
        mc("What did they worry about?", ["That it was too expensive", "That she'd find it too complicated", "That it would break"], 1, "'too complicated and give up'."),
        mc("What does the grandmother do now?", ["Only phone calls", "Video-calls and downloads recipes", "Nothing with it"], 1, "'video-calling… downloading recipes'."),
        mc("What does she like most?", ["Sending messages", "Seeing her grandchildren's faces", "Reading news"], 1, "'being able to see her grandchildren's faces'."),
        mc("How does the grandmother feel about technology now?", ["Confused", "Enthusiastic", "Uninterested"], 1, "Bromea con estar 'más conectada' → entusiasmada."),
      ],
    },
    monthlyMock: 1,
  },

  {
    n: 5,
    theme: "Condicionales y medioambiente",
    grammar: {
      title: "Condicionales (0, 1 y 2) + when/if",
      blocks: [
        "Tipo 0 (verdades): If you drop litter, it harms nature.\nTipo 1 (real/probable): If we recycle, we'll help the planet. (if + presente, will + infinitivo)\nTipo 2 (hipotético/irreal): If everyone recycled, there would be less waste. (if + pasado, would + infinitivo)\n'when' para algo seguro que pasará (When I finish, I'll call you); 'if' para algo posible.",
      ],
      exercise: {
        title: "Práctica de gramática — Condicionales",
        instructions: "Completa el condicional.",
        questions: [
          fb("If it ___ (be) sunny tomorrow, we'll go to the beach.", ["is"], "Tipo 1: 'if + presente'."),
          fb("If people ___ (use) less plastic, the sea would be cleaner.", ["used"], "Tipo 2: 'if + pasado'."),
          fb("Water ___ (boil) if you heat it to 100°C.", ["boils"], "Tipo 0: verdad general → presente."),
          fb("I'll phone you when I ___ (arrive).", ["arrive"], "'when + presente' para futuro seguro."),
          fb("If I ___ (be) you, I'd walk more.", ["were", "was"], "Tipo 2: 'If I were you'."),
          fb("We'll miss the bus if we ___ (not/hurry).", ["don't hurry", "do not hurry"], "Tipo 1 negativo."),
        ],
      },
    },
    vocab: {
      title: "Medioambiente y naturaleza",
      deck: [
        ["recycle", "reciclar", "We recycle paper and glass.", "verbo"],
        ["pollution", "contaminación", "air pollution", "sustantivo"],
        ["waste", "residuos / desperdiciar", "reduce food waste", "sustantivo/verbo"],
        ["litter", "basura (en la calle)", "Don't drop litter.", "sustantivo"],
        ["save energy", "ahorrar energía", "Save energy at home.", "colocación"],
        ["protect", "proteger", "protect the forest", "verbo"],
        ["wildlife", "fauna / vida salvaje", "protect local wildlife", "sustantivo"],
        ["renewable", "renovable", "renewable energy", "adjetivo"],
        ["reduce", "reducir", "reduce your waste", "verbo"],
        ["get rid of", "deshacerse de", "get rid of old batteries safely", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Medioambiente",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Rubbish dropped in the street is ___.", ["litter", "wildlife", "energy"], 0, "'litter'."),
          mc("Dirty air and water is ___.", ["pollution", "waste", "renewable"], 0, "'pollution'."),
          mc("To use materials again is to ___.", ["protect", "recycle", "reduce"], 1, "'recycle'."),
          mc("Wild animals and plants are ___.", ["waste", "wildlife", "litter"], 1, "'wildlife'."),
          mc("Energy from the sun or wind is ___.", ["renewable", "polluted", "wasted"], 0, "'renewable'."),
          mc("To throw away safely is to ___ something.", ["save", "get rid of", "protect"], 1, "'get rid of'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 4 (recolocar frases)",
      category: "reading", weight: 5,
      title: "Examen semanal — Reading Parte 4",
      instructions: "Elige la frase (A–E) que va en cada hueco. SOBRAN dos.\n\nRecycling is something we all know we should do. [HUECO 1] The good news is that small changes really do add up. [HUECO 2] Another easy step is to avoid single-use plastic where possible. [HUECO 3] So, even if you can't do everything, doing something is always worthwhile.\n\nFRASES:\nA. However, many of us still find it confusing or inconvenient.\nB. For example, using a refillable water bottle saves hundreds of plastic ones each year.\nC. If millions of people make these choices, the effect is enormous.\nD. Most people prefer tea to coffee.\nE. Cars are a major cause of air pollution.",
      questions: [
        mc("HUECO 1", ["C (si millones lo hacen, efecto enorme)", "A (aún confuso o incómodo)", "E (los coches contaminan)", "B (ejemplo: botella reutilizable)", "D (prefieren el té)"], 1, "Tras 'sabemos que deberíamos reciclar', A ('However, many still find it confusing') contrasta."),
        mc("HUECO 2", ["C (si millones lo hacen, efecto enorme)", "A (aún confuso o incómodo)", "E (los coches contaminan)", "B (ejemplo: botella reutilizable)", "D (prefieren el té)"], 3, "Tras 'small changes really do add up', B ('For example, using a refillable water bottle…') da un ejemplo de cambio pequeño."),
        mc("HUECO 3", ["C (si millones lo hacen, efecto enorme)", "A (aún confuso o incómodo)", "E (los coches contaminan)", "B (ejemplo: botella reutilizable)", "D (prefieren el té)"], 0, "Tras 'avoid single-use plastic', C ('If millions of people make these choices, the effect is enormous') generaliza. D y E sobran."),
      ],
    },
  },

  {
    n: 6,
    theme: "Comparar y compras",
    grammar: {
      title: "Comparativos/superlativos, (not) as…as, too/enough",
      blocks: [
        "Comparativos: corto + -er + than (cheaper than); largo → more + adj + than (more comfortable than). Superlativos: the -est / the most.\n'(not) as … as': igualdad/desigualdad — This phone is as good as that one; It isn't as expensive as I thought.\n'too' + adjetivo = demasiado (too small); adjetivo + 'enough' = suficiente (big enough); 'enough' + sustantivo (enough money).",
      ],
      exercise: {
        title: "Práctica de gramática — Comparar",
        instructions: "Completa correctamente.",
        questions: [
          fb("This bag is ___ (expensive) than that one.", ["more expensive"], "Adjetivo largo → 'more expensive than'."),
          fb("It's ___ (cheap) shop in town.", ["the cheapest"], "Superlativo corto → 'the cheapest'."),
          fb("My phone isn't as new ___ yours.", ["as"], "'as … as' → 'as new as'."),
          fb("These shoes are ___ small; I need a bigger size. (demasiado)", ["too"], "'too small' = demasiado pequeños."),
          fb("Is this jacket big ___ for you? (suficiente)", ["enough"], "'big enough' = suficientemente grande."),
          fb("This café is ___ (good) than the other one.", ["better"], "Irregular: good→better."),
        ],
      },
    },
    vocab: {
      title: "Compras y dinero",
      deck: [
        ["afford", "permitirse (económicamente)", "I can't afford it.", "verbo"],
        ["a bargain", "una ganga", "It was a real bargain.", "sustantivo"],
        ["a refund", "un reembolso", "I asked for a refund.", "sustantivo"],
        ["on sale", "en oferta / rebajado", "The coat is on sale.", "colocación"],
        ["try on", "probarse (ropa)", "Can I try this on?", "phrasal verb"],
        ["save up", "ahorrar (para algo)", "I'm saving up for a laptop.", "phrasal verb"],
        ["spend money on", "gastar dinero en", "I spend too much on clothes.", "colocación"],
        ["a receipt", "un recibo/ticket", "Keep the receipt.", "sustantivo"],
        ["expensive", "caro", "It's too expensive.", "adjetivo"],
        ["value for money", "buena relación calidad-precio", "It's great value for money.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Compras",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("If you can't ___ something, you don't have enough money for it.", ["afford", "save up", "try on"], 0, "'afford'."),
          mc("Money returned for a product is a ___.", ["bargain", "refund", "receipt"], 1, "'refund'."),
          mc("A product with a reduced price is ___.", ["on sale", "value", "expensive"], 0, "'on sale'."),
          mc("To keep money for the future is to ___.", ["spend", "save up", "afford"], 1, "'save up'."),
          mc("Good quality for the price is ___.", ["a bargain", "value for money", "a refund"], 1, "'value for money'."),
          mc("To put clothes on in a shop to check the fit is to ___ them.", ["save up", "try on", "afford"], 1, "'try on'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 2 (multiple matching)",
      category: "reading", weight: 5,
      title: "Examen semanal — Reading Parte 2",
      instructions: "¿Qué persona (A–D) es adecuada para cada descripción?\n\nA — Ben: loves outdoor adventure and cheap trips; happy to sleep in a tent.\nB — Lucía: prefers city breaks, museums and good restaurants; likes comfort.\nC — Sam: wants a relaxing beach holiday with nothing to do but sunbathe.\nD — Yuki: enjoys learning about history and local traditions on guided tours.",
      questions: [
        mc("1) Someone who likes camping and saving money.", ["A (Ben)", "B (Lucía)", "C (Sam)", "D (Yuki)"], 0, "Ben: 'outdoor adventure and cheap trips… tent'."),
        mc("2) Someone who wants comfort and city culture.", ["A", "B (Lucía)", "C", "D"], 1, "Lucía: 'city breaks, museums… likes comfort'."),
        mc("3) Someone who just wants to relax on the sand.", ["A", "B", "C (Sam)", "D"], 2, "Sam: 'relaxing beach holiday… sunbathe'."),
        mc("4) Someone interested in history and traditions.", ["A", "B", "C", "D (Yuki)"], 3, "Yuki: 'history and local traditions on guided tours'."),
        mc("5) Someone happy with basic accommodation.", ["A (Ben)", "B", "C", "D"], 0, "Ben: 'happy to sleep in a tent'."),
      ],
    },
  },

  {
    n: 7,
    theme: "Modales y salud",
    grammar: {
      title: "Modales: obligación, consejo, posibilidad + 'should have'",
      blocks: [
        "Obligación: must / have to (fuerte), mustn't (prohibido), don't have to (no es necesario).\nConsejo: should / shouldn't, ought to.\nPosibilidad: may / might / could (quizá).\nCrítica sobre el pasado: 'should have + participio' (You should have called = deberías haber llamado).",
      ],
      exercise: {
        title: "Práctica de gramática — Modales",
        instructions: "Completa con el modal adecuado.",
        questions: [
          fb("You ___ (should) drink more water. (consejo)", ["should"], "Consejo → 'should'."),
          fb("You ___ (not/have to) come if you're busy. (no es necesario)", ["don't have to", "do not have to"], "Ausencia de obligación."),
          fb("It ___ (may) rain later, so take an umbrella. (quizá)", ["may", "might", "could"], "Posibilidad → may/might/could."),
          fb("You ___ (must) not use your phone during the exam. (prohibido)", ["must"], "Prohibición → 'mustn't'."),
          fb("I feel awful. I ___ (should) eaten so much! (crítica pasada)", ["shouldn't have", "should not have"], "'shouldn't have eaten' = no debería haber comido."),
          fb("She ___ (have to) work last weekend. (obligación pasada)", ["had to"], "Obligación pasada → 'had to'."),
        ],
      },
    },
    vocab: {
      title: "Salud y deporte",
      deck: [
        ["work out", "hacer ejercicio", "I work out at the gym.", "phrasal verb"],
        ["get fit", "ponerse en forma", "I want to get fit.", "colocación"],
        ["have a cold", "estar resfriado", "I've got a cold.", "colocación"],
        ["feel dizzy", "estar mareado", "I feel a bit dizzy.", "colocación"],
        ["take medicine", "tomar medicina", "Take this medicine twice a day.", "colocación"],
        ["injure", "lesionar(se)", "He injured his knee.", "verbo"],
        ["recover", "recuperarse", "She recovered quickly.", "verbo"],
        ["stay healthy", "mantenerse sano", "Exercise helps you stay healthy.", "colocación"],
        ["give up", "dejar (un hábito)", "He gave up sugar.", "phrasal verb"],
        ["a check-up", "una revisión médica", "I had a check-up.", "sustantivo"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Salud",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To exercise regularly is to ___.", ["get fit", "have a cold", "feel dizzy"], 0, "'get fit'."),
          mc("A common illness with a runny nose is a ___.", ["cold", "injury", "check-up"], 0, "'have a cold'."),
          mc("To hurt part of your body is to ___ it.", ["recover", "injure", "give up"], 1, "'injure'."),
          mc("To get better after being ill is to ___.", ["injure", "recover", "work out"], 1, "'recover'."),
          mc("A routine medical examination is a ___.", ["cold", "check-up", "medicine"], 1, "'check-up'."),
          mc("To feel unsteady, as if you might fall, is to feel ___.", ["fit", "healthy", "dizzy"], 2, "'feel dizzy'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 1 (email)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (email)",
      instructions: "Escribe tu email (~100 palabras) cubriendo las 4 notas. Compáralo con el modelo.",
      questions: [
        open(
          "Read this email from your English friend Jamie and the notes.\n\n\"I've decided to get fit this year, but I don't know where to start! Any tips?\"\n\nNotes — write to Jamie and:\n• suggest a sport or activity\n• say how often to do it\n• tell Jamie what to eat\n• invite Jamie to do it with you\n\nWrite about 100 words.",
          "Cubre las 4 notas, con saludo y despedida informales. Presente simple para consejos.",
          "RESPUESTA MODELO (~100 palabras):\n\"Hi Jamie,\nThat's great news! I think you should start with swimming — it's fun and good for your whole body. Try to go two or three times a week, so it becomes a habit but doesn't feel like too much.\nIt's also important to eat well: lots of fruit and vegetables, and less sugar and fast food.\nWhy don't we go together? I usually swim on Tuesdays and Saturdays, and it would be much more fun with you. I could even show you a few exercises.\nLet me know what you think!\nBest wishes,\nAna\"\n\nPor qué funciona: cubre las 4 notas (deporte = natación; frecuencia = 2-3 veces/semana; comida = fruta/verdura; invitación), registro informal, ~100 palabras."
        ),
      ],
    },
  },

  {
    n: 8,
    theme: "Pasiva y relativas · Writing historia · SIMULACRO Mes 2",
    grammar: {
      title: "Voz pasiva y oraciones de relativo",
      blocks: [
        "Pasiva: 'be' + participio, cuando el foco está en el objeto (The film was made in 2010; English is spoken here).\nRelativas: 'who' (personas), 'which/that' (cosas), 'where' (lugares), 'whose' (posesión).\nEspecificativas (info esencial, sin comas): The man who called… / Explicativas (info extra, con comas): My teacher, who is from Wales, …",
      ],
      exercise: {
        title: "Práctica de gramática — Pasiva y relativas",
        instructions: "Completa correctamente.",
        questions: [
          fb("Active: 'They sell tickets online.'  Passive: Tickets ___ online.", ["are sold"], "Present simple pasiva: 'are sold'."),
          fb("Active: 'Someone stole my bike.'  Passive: My bike ___ .", ["was stolen"], "Past simple pasiva: 'was stolen'."),
          fb("That's the woman ___ helped me.", ["who", "that"], "Relativo de persona → 'who/that'."),
          fb("This is the town ___ I grew up.", ["where"], "Relativo de lugar → 'where'."),
          fb("The book ___ I'm reading is brilliant.", ["that", "which"], "Relativo de cosa → 'that/which'."),
          fb("The film was ___ (direct) by a famous director.", ["directed"], "Pasiva: 'was directed'."),
        ],
      },
    },
    vocab: {
      title: "Ocio y espectáculos",
      deck: [
        ["a review", "una reseña / crítica", "a good review", "sustantivo"],
        ["a plot", "un argumento", "The plot was exciting.", "sustantivo"],
        ["the audience", "el público", "The audience loved it.", "sustantivo"],
        ["boring", "aburrido", "The film was boring.", "adjetivo"],
        ["gripping", "apasionante", "a gripping thriller", "adjetivo"],
        ["a live concert", "un concierto en directo", "We went to a live concert.", "colocación"],
        ["a sequel", "una secuela", "They're making a sequel.", "sustantivo"],
        ["book tickets", "sacar entradas", "I booked tickets online.", "colocación"],
        ["worth watching", "que vale la pena ver", "It's worth watching.", "expresión"],
        ["come out", "estrenarse / salir", "The film comes out in June.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Ocio",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("The story of a film or book is the ___.", ["plot", "review", "audience"], 0, "'plot'."),
          mc("The people watching a show are the ___.", ["plot", "audience", "sequel"], 1, "'audience'."),
          mc("A very exciting, hard-to-stop film is ___.", ["boring", "gripping", "live"], 1, "'gripping'."),
          mc("A film that continues a previous one is a ___.", ["review", "sequel", "plot"], 1, "'sequel'."),
          mc("An opinion written about a film is a ___.", ["review", "audience", "sequel"], 0, "'review'."),
          mc("When a film is released, it ___.", ["books", "comes out", "reviews"], 1, "'come out'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 2 (historia o artículo)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (historia)",
      instructions: "Escribe una historia (~100 palabras) que empiece con la frase dada. Compárala con el modelo.",
      questions: [
        open(
          "Your English teacher has asked you to write a STORY. It must begin with this sentence:\n\n\"As soon as Daniel opened the letter, he knew his life was going to change.\"\n\nWrite about 100 words.",
          "Continúa en pasado (simple y continuo). Usa conectores: At first, Then, Suddenly, In the end.",
          "RESPUESTA MODELO (~100 palabras):\n\"As soon as Daniel opened the letter, he knew his life was going to change. It was from a famous music school in London, and they were offering him a place to study the guitar. At first, he couldn't believe it. He had applied months ago and had almost forgotten about it. Then he started to worry: the school was far away, and it was expensive. However, his parents were so proud that they promised to help him. In the end, Daniel accepted the offer. A year later, he was playing on stage in front of hundreds of people.\"\n\nPor qué funciona: empieza con la frase dada, usa pasados (simple, continuo, perfecto) y conectores, con una historia clara de ~100 palabras."
        ),
      ],
    },
    monthlyMock: 2,
  },

  {
    n: 9,
    theme: "Estilo indirecto · Medios y noticias",
    grammar: {
      title: "Reported speech (say / tell) y preguntas indirectas",
      blocks: [
        "El estilo indirecto cuenta lo que alguien dijo. El tiempo verbal suele 'retroceder' un paso:\npresent → past: 'I am tired' → He said (that) he was tired.\npast → past perfect: 'I saw it' → She said she had seen it.\nwill → would; can → could.\nsay vs tell: say (algo) / tell (a alguien): He said he was busy. He told me he was busy.\nPreguntas indirectas (sin inversión, sin do): 'Where do you live?' → She asked me where I lived.",
      ],
      exercise: {
        title: "Práctica de gramática — Estilo indirecto",
        instructions: "Transforma o completa.",
        questions: [
          fb("'I am happy.' → He said he ___ happy.", ["was"], "present → past: was."),
          fb("'I will call you.' → She said she ___ call me.", ["would"], "will → would."),
          fb("'I can swim.' → He said he ___ swim.", ["could"], "can → could."),
          fb("He ___ me that he was tired. (say/tell)", ["told"], "tell + a alguien → told me."),
          fb("She ___ that the shop was closed. (say/tell)", ["said"], "say (sin objeto) → said."),
          fb("'Where do you work?' → She asked me where I ___.", ["worked"], "pregunta indirecta, sin do: worked."),
        ],
      },
    },
    vocab: {
      title: "Medios de comunicación y noticias",
      deck: [
        ["a headline", "un titular", "a shocking headline", "sustantivo"],
        ["a journalist", "un/a periodista", "an experienced journalist", "sustantivo"],
        ["broadcast", "emitir/retransmitir", "The match was broadcast live.", "verbo"],
        ["an advert", "un anuncio", "an advert on TV", "sustantivo"],
        ["a source", "una fuente", "a reliable source", "sustantivo"],
        ["go viral", "hacerse viral", "The video went viral.", "colocación"],
        ["subscribe to", "suscribirse a", "subscribe to a channel", "phrasal verb"],
        ["reliable", "fiable", "a reliable website", "adjetivo"],
        ["a rumour", "un rumor", "It's just a rumour.", "sustantivo"],
        ["keep up with", "estar al día de", "keep up with the news", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Medios",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("The title of a news story is the ___.", ["headline", "source", "advert"], 0, "'headline'."),
          mc("A person who writes the news is a ___.", ["journalist", "rumour", "advert"], 0, "'journalist'."),
          mc("Information you can trust comes from a reliable ___.", ["source", "headline", "advert"], 0, "'source' = fuente."),
          mc("When a video becomes very popular online, it ___.", ["goes viral", "subscribes", "broadcasts"], 0, "'go viral'."),
          mc("A website you can trust is ___.", ["reliable", "viral", "broadcast"], 0, "'reliable'."),
          mc("To follow the latest news is to ___ it.", ["keep up with", "go viral", "broadcast"], 0, "'keep up with'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 5 (huecos de vocabulario)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 5 (vocabulario)",
      instructions: "Lee el texto y elige la palabra correcta para cada hueco.\n\nThese days, many young people prefer to get their news online rather than from newspapers. They (1)___ to channels and follow journalists on social media. However, not every website is (2)___, and false stories can (3)___ viral in minutes. Experts say we should always check the (4)___ of a story before we believe a shocking (5)___. It is important to (6)___ up with the news, but also to think critically.",
      questions: [
        mc("Hueco 1", ["subscribe", "broadcast", "print"], 0, "'subscribe to channels'."),
        mc("Hueco 2", ["reliable", "viral", "false"], 0, "'not every website is reliable'."),
        mc("Hueco 3", ["go", "make", "do"], 0, "'go viral'."),
        mc("Hueco 4", ["source", "headline", "advert"], 0, "'check the source'."),
        mc("Hueco 5", ["headline", "rumour", "journalist"], 0, "'a shocking headline'."),
        mc("Hueco 6", ["keep", "get", "take"], 0, "'keep up with the news'."),
      ],
    },
  },

  {
    n: 10,
    theme: "Hábitos del pasado · Recuerdos de la infancia",
    grammar: {
      title: "used to / would para hábitos pasados",
      blocks: [
        "used to + infinitivo: estados y hábitos del pasado que ya no ocurren — I used to play the piano. There used to be a cinema here.\nNegativa/pregunta: I didn't use to like coffee. Did you use to live here?\nwould + infinitivo también sirve para hábitos repetidos del pasado (no para estados): Every summer we would visit our grandparents. (pero NO 'I would have a bike').",
      ],
      exercise: {
        title: "Práctica de gramática — used to",
        instructions: "Completa correctamente.",
        questions: [
          fb("I ___ (play) football every day when I was young.", ["used to play"], "hábito pasado → used to play."),
          fb("There ___ (be) a shop here, but it closed.", ["used to be"], "estado pasado → used to be."),
          fb("I didn't ___ (like) vegetables as a child. (negativa)", ["use to like"], "negativa: didn't use to like."),
          fb("___ you ___ (have) long hair? (pregunta)", ["Did", "use to have"], "pregunta: Did you use to have?"),
          fb("Every winter we ___ (go) skiing. (would, hábito)", ["would go"], "hábito repetido → would go."),
          fb("She ___ (not/used to) enjoy reading, but now she loves it.", ["didn't use to", "did not use to"], "negativa de hábito."),
        ],
      },
    },
    vocab: {
      title: "La infancia, la memoria y las etapas de la vida",
      deck: [
        ["grow up", "criarse/crecer", "I grew up in a small town.", "phrasal verb"],
        ["memory", "recuerdo/memoria", "a happy memory", "sustantivo"],
        ["childhood", "infancia", "a happy childhood", "sustantivo"],
        ["remind", "recordar (a alguien)", "This song reminds me of summer.", "verbo"],
        ["remember", "recordar/acordarse", "I remember that day well.", "verbo"],
        ["forget", "olvidar", "Don't forget your keys.", "verbo"],
        ["used to", "solía", "I used to live here.", "expresión"],
        ["nostalgic", "nostálgico", "I feel nostalgic.", "adjetivo"],
        ["a generation", "una generación", "my parents' generation", "sustantivo"],
        ["look back on", "recordar (con perspectiva)", "I look back on those years fondly.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Infancia",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To spend your childhood somewhere is to ___ there.", ["grow up", "look back", "remind"], 0, "'grow up'."),
          mc("This photo ___ me of my school days.", ["reminds", "remembers", "forgets"], 0, "'remind somebody of'."),
          mc("The time when you are a child is your ___.", ["childhood", "generation", "memory"], 0, "'childhood'."),
          mc("Feeling happy-sad about the past is feeling ___.", ["nostalgic", "reliable", "viral"], 0, "'nostalgic'."),
          mc("The opposite of 'remember' is ___.", ["forget", "remind", "grow up"], 0, "'forget'."),
          mc("To think about your past life is to ___ it.", ["look back on", "keep up with", "go viral"], 0, "'look back on'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 6 (huecos de gramática)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 6 (gramática)",
      instructions: "Lee el texto y escribe UNA palabra en cada hueco.\n\nWhen I was a child, I (1)___ to live in a village by the sea. Every summer, my family and I (2)___ spend hours on the beach. There (3)___ to be a small ice-cream shop near the harbour, and I still remember (4)___ taste of my favourite flavour. I look back (5)___ those days with a smile. Sometimes an old song reminds (6)___ of that happy time.",
      questions: [
        fb("Hueco 1", ["used"], "'used to live'."),
        fb("Hueco 2", ["would", "used"], "'would spend' / 'used to spend'."),
        fb("Hueco 3", ["used"], "'There used to be'."),
        fb("Hueco 4", ["the"], "'the taste'."),
        fb("Hueco 5", ["on"], "'look back on'."),
        fb("Hueco 6", ["me"], "'reminds me of'."),
      ],
    },
  },

  {
    n: 11,
    theme: "Patrones verbales · Sentimientos y relaciones",
    grammar: {
      title: "Gerundio o infinitivo (verb patterns)",
      blocks: [
        "Algunos verbos van con gerundio (-ing): enjoy, finish, avoid, mind, suggest, can't stand → I enjoy reading.\nOtros con infinitivo con to: want, decide, hope, promise, agree, would like → I want to go.\nTras preposición SIEMPRE gerundio: interested in learning; good at cooking.\nlike/love/hate + -ing (general) o + to (preferencia). Ojo: 'stop to do' (parar para) vs 'stop doing' (dejar de).",
      ],
      exercise: {
        title: "Práctica de gramática — Gerundio/infinitivo",
        instructions: "Completa con la forma correcta.",
        questions: [
          fb("I enjoy ___ (read) before bed.", ["reading"], "enjoy + -ing."),
          fb("She decided ___ (study) medicine.", ["to study"], "decide + to."),
          fb("He's good at ___ (cook).", ["cooking"], "tras preposición → -ing."),
          fb("They avoided ___ (talk) about it.", ["talking"], "avoid + -ing."),
          fb("We hope ___ (see) you soon.", ["to see"], "hope + to."),
          fb("I'm interested in ___ (learn) Japanese.", ["learning"], "in + -ing."),
        ],
      },
    },
    vocab: {
      title: "Sentimientos, personalidad y relaciones",
      deck: [
        ["get on with", "llevarse bien con", "I get on well with my sister.", "phrasal verb"],
        ["fall out", "enfadarse/reñir", "They fell out over money.", "phrasal verb"],
        ["reliable", "de fiar", "a reliable friend", "adjetivo"],
        ["generous", "generoso", "a generous person", "adjetivo"],
        ["stubborn", "cabezota", "He's very stubborn.", "adjetivo"],
        ["cheerful", "alegre", "a cheerful mood", "adjetivo"],
        ["support", "apoyar", "My family supports me.", "verbo"],
        ["trust", "confiar", "I trust her completely.", "verbo"],
        ["make up", "reconciliarse", "They argued but made up.", "phrasal verb"],
        ["have a lot in common", "tener mucho en común", "We have a lot in common.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Relaciones",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To have a good relationship with someone is to ___ them.", ["get on with", "fall out with", "trust badly"], 0, "'get on with'."),
          mc("A person who always keeps promises is ___.", ["reliable", "stubborn", "viral"], 0, "'reliable'."),
          mc("Someone who refuses to change their mind is ___.", ["cheerful", "stubborn", "generous"], 1, "'stubborn' = cabezota."),
          mc("After an argument, friends often ___.", ["make up", "fall out", "grow up"], 0, "'make up' = reconciliarse."),
          mc("A person who gives a lot to others is ___.", ["generous", "stubborn", "reliable"], 0, "'generous'."),
          mc("Two friends who like the same things ___.", ["have a lot in common", "fall out", "broadcast"], 0, "'have a lot in common'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 3 (comprensión)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 3 (comprensión)",
      instructions: "Lee el texto y elige la opción correcta.\n\nLucy and Sara have been best friends since primary school. Although they have very different personalities — Lucy is quiet and careful, while Sara is loud and adventurous — they have always got on well. Last year, they fell out badly after Sara borrowed Lucy's laptop and broke it without telling her. For a month, they didn't speak. In the end, Sara apologised and offered to pay for the repair. Lucy realised that their friendship was more important than a laptop, so they made up. Now they are closer than ever.",
      questions: [
        mc("How long have Lucy and Sara been friends?", ["Since last year.", "Since primary school.", "For a month."], 1, "'since primary school'."),
        mc("How are their personalities?", ["Exactly the same.", "Very different.", "Both are shy."], 1, "'very different personalities'."),
        mc("Why did they fall out?", ["Sara broke Lucy's laptop.", "Lucy was jealous.", "They liked the same boy."], 0, "'borrowed Lucy's laptop and broke it'."),
        mc("What did Sara do in the end?", ["She bought a new laptop.", "She apologised and offered to pay.", "She found a new friend."], 1, "'apologised and offered to pay for the repair'."),
        mc("Why did Lucy forgive her?", ["The laptop was cheap.", "Friendship mattered more.", "Her parents told her to."], 1, "'friendship was more important'."),
        mc("'made up' in the text means…", ["invented a story", "became friends again", "paid money"], 1, "'make up' = reconciliarse."),
      ],
    },
  },

  {
    n: 12,
    theme: "Confirmar y repasar · Cultura y ocio · SIMULACRO FINAL",
    grammar: {
      title: "Question tags y repaso general",
      blocks: [
        "Las question tags confirman información. Verbo auxiliar + pronombre, al revés de la frase:\nAfirmativa → tag negativa: You like music, don't you? She's here, isn't she?\nNegativa → tag afirmativa: You don't smoke, do you? They aren't ready, are they?\nSin auxiliar, usa do/does/did: He works here, doesn't he?\nRepaso: revisa pasados, present perfect, futuro, condicionales, modales, pasiva, estilo indirecto y patrones verbales de todo el programa.",
      ],
      exercise: {
        title: "Práctica de gramática — Question tags",
        instructions: "Añade la question tag correcta.",
        questions: [
          fb("You like pizza, ___?", ["don't you"], "afirmativa → don't you."),
          fb("She is a teacher, ___?", ["isn't she"], "'is' → isn't she."),
          fb("They don't live here, ___?", ["do they"], "negativa → do they."),
          fb("He plays the guitar, ___?", ["doesn't he"], "sin auxiliar → doesn't he."),
          fb("We can go now, ___?", ["can't we"], "'can' → can't we."),
          fb("You didn't call her, ___?", ["did you"], "negativa pasada → did you."),
        ],
      },
    },
    vocab: {
      title: "Cultura, ocio y entretenimiento",
      deck: [
        ["a plot", "un argumento", "an exciting plot", "sustantivo"],
        ["a review", "una reseña", "a good review", "sustantivo"],
        ["a soundtrack", "una banda sonora", "a great soundtrack", "sustantivo"],
        ["performance", "actuación", "a live performance", "sustantivo"],
        ["audience", "público", "a large audience", "sustantivo"],
        ["recommend", "recomendar", "I recommend this film.", "verbo"],
        ["gripping", "absorbente/emocionante", "a gripping thriller", "adjetivo"],
        ["boring", "aburrido", "The play was boring.", "adjetivo"],
        ["release", "estrenar/lanzar", "They released a new album.", "verbo"],
        ["worth watching", "que vale la pena ver", "It's worth watching.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Ocio",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("The story of a film is its ___.", ["plot", "review", "audience"], 0, "'plot' = argumento."),
          mc("The people watching a show are the ___.", ["audience", "performance", "soundtrack"], 0, "'audience' = público."),
          mc("An opinion written about a film is a ___.", ["review", "plot", "release"], 0, "'review' = reseña."),
          mc("A film that keeps you excited is ___.", ["gripping", "boring", "reliable"], 0, "'gripping'."),
          mc("The music of a film is its ___.", ["soundtrack", "headline", "plot"], 0, "'soundtrack'."),
          mc("If a film is good, it's ___.", ["worth watching", "boring", "viral"], 0, "'worth watching'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 4 (recolocar frases)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 4 (texto con huecos)",
      instructions: "Elige la frase (A–E) que va en cada hueco. SOBRAN dos.\n\nGoing to the cinema used to be the only way to watch a new film. [HUECO 1] Today, streaming services release films online on the same day. [HUECO 2] Some people love this convenience and enjoy watching films at home. [HUECO 3] For them, nothing beats the big screen, the sound and the shared experience with a live audience.\n\nFRASES:\nA. However, others still prefer the magic of the cinema.\nB. This has completely changed the way we watch films.\nC. You had to buy a ticket and travel to the city centre.\nD. Popcorn is very expensive there.\nE. Most actors live in Hollywood.",
      questions: [
        mc("HUECO 1", ["B (esto ha cambiado cómo vemos cine)", "C (había que comprar entrada e ir al centro)", "A (otros prefieren el cine)", "D", "E"], 1, "Tras 'la única forma…', C lo desarrolla (había que ir)."),
        mc("HUECO 2", ["B (esto ha cambiado por completo cómo vemos cine)", "C", "A", "D", "E"], 0, "Tras 'estrenan online el mismo día', B resume el cambio."),
        mc("HUECO 3", ["A (sin embargo, otros prefieren la magia del cine)", "C", "B", "D", "E"], 0, "Antes de 'para ellos, nada supera la gran pantalla', A ('otros prefieren el cine'). D y E sobran."),
      ],
    },
    finalMock: true,
  },
];

async function main() {
  const [author, category, level, language, status, access, contentTexto] = await Promise.all([
    db.author.findFirst({ where: { isPlatformAuthor: true } }),
    db.category.findFirst({ where: { slug: "idiomas" } }),
    db.courseLevel.findUnique({ where: { key: "intermedio" } }),
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  B1 Preliminary anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "B1 Preliminary (Cambridge English: Preliminary / PET)", subtitle: "Programa intensivo de 12 semanas para el examen B1 Preliminary.",
      description: "Curso completo de preparación para Cambridge English: Preliminary (B1 Preliminary / PET), nivel intermedio. programa de 12 semanas con gramática progresiva, vocabulario nuevo y flashcards cada semana, práctica semanal del formato real del examen y simulacros mensuales que estiman tu nota en la Cambridge English Scale (120–170, aprobado 140). Contenido original para hispanohablantes.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Preparación B1 Preliminary (PET) — programa de 12 semanas — NOVARA", seoDescription: "Prepara el Cambridge B1 Preliminary con un programa semanal completo: gramática, vocabulario, práctica de examen y simulacros.",
      objectives: { create: [
        "Seguir un programa semanal con gramática, vocabulario y práctica de examen.",
        "Dominar la gramática de B1 de forma progresiva y acumulativa.",
        "Ampliar el vocabulario por temas, con flashcards cada semana.",
        "Practicar cada parte real del examen (Reading y Writing).",
        "Medir tu preparación con simulacros mensuales y la Cambridge Scale.",
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

  const m0 = await createModule("Guía del examen B1 Preliminary", "Estructura, puntuación y cómo usar este programa.", 0);
  await createLesson(m0.id, {
    title: "Cómo es el examen y cómo funciona este programa", description: "Las 4 pruebas, la Cambridge Scale y la cadencia semanal.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "El B1 Preliminary (PET) es el examen de nivel intermedio de Cambridge. Tiene 4 pruebas: Reading, Writing, Listening y Speaking. Se aprueba con 140 en la Cambridge English Scale (120–170; 160+ = B2)." },
      { type: "GRAMMAR", title: "Cómo usar este programa (12 semanas)", content: "Cada semana: 1) GRAMÁTICA nueva con ejercicios; 2) VOCABULARIO con flashcards y ejercicios; 3) PRÁCTICA de una parte real del examen.\nHaz un poco cada día. En la semana 4 y la semana 8 hay un SIMULACRO mensual que estima tu nota." },
      { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["12 semanas (3 meses) de preparación.", "Gramática + vocabulario + examen cada semana.", "Simulacros mensuales (sem. 4 y 8) y FINAL (sem. 12).", "Aprobado B1 = 140 en la Cambridge Scale."] } },
    ],
    pedagogy: { objective: "Entender el examen y el programa.", summary: "12 semanas; gramática, vocabulario y examen cada semana; simulacros mensuales.", reviewPrompts: ["¿Qué nota necesitas para el B1?"] },
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
      data: { title: `B1 Preliminary — Semana ${w.n}: ${w.vocab.title}`, description: "Vocabulario de la semana.", language: "en", authorId: adminUser.id,
        cards: { create: w.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "B1" })) } },
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
        data: { courseId: course.id, title: `Simulacro Mensual ${w.monthlyMock} — Reading (B1 Preliminary)`, passingScore: 60, timeLimitMinutes: 45,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🎯 Simulacro Mensual ${w.monthlyMock}`, `Examen de práctica del mes ${w.monthlyMock}.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Simulacro Mensual ${w.monthlyMock}`, description: "Mide si alcanzarías la nota Cambridge.", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne las partes auto-corregibles de Reading vistas hasta ahora, cronometradas. Aprueba con un 60% (≈140 en la Cambridge Scale). Writing, Listening y Speaking se evalúan aparte. Tu resultado te dice si alcanzarías el B1.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Comprobar tu preparación bajo condiciones de examen.", summary: `Simulacro del mes ${w.monthlyMock}; aprobado 60%.`, reviewPrompts: ["Si no llegas a 60%, repasa las semanas anteriores."] },
      });
    }

    if (w.finalMock) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: "Simulacro FINAL — Reading (B1 Preliminary)", passingScore: 60, timeLimitMinutes: 60,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule("🎯 Simulacro FINAL", "Examen final en condiciones lo más parecidas al examen real.", sortOrder++);
      await createLesson(mm.id, {
        title: "Simulacro FINAL — Reading", description: "El examen del final del programa: ¿alcanzas la nota B1?", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne TODAS las partes auto-corregibles de Reading del programa, cronometradas y en condiciones de examen. Aprueba con un 60% (≈140, la nota de corte del B1). Según tu resultado, la plataforma te dirá si estás listo para inscribirte al examen oficial o te preparará un plan de refuerzo.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Confirmar si alcanzarías la nota real del B1.", summary: "Simulacro final; aprobado 60% ≈ 140.", reviewPrompts: ["Si no llegas, sigue tu plan de refuerzo."] },
      });
    }
  }

  const ms = await createModule("Listening y Speaking", "Práctica con audio británico real y conversación por voz.", sortOrder++);
  const script = "Attention, please. This is an important announcement for passengers travelling to Manchester. The ten thirty train has been delayed by approximately twenty minutes due to a signalling problem. It will now depart from platform six, not platform two. Passengers with first-class tickets can wait in the lounge on the first floor, where free coffee is available. We are sorry for the delay and thank you for your patience.";
  const audio = await generateListeningAudio(script, "b1-station-announcement");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — Un anuncio en la estación", description: "Escucha (voz británica) y responde.", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír un anuncio de tren. Fíjate en la hora, el andén y el motivo del retraso. Puedes repetir el audio." },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Extraer información específica de un anuncio.", commonMistakes: ["Confundir el andén nuevo con el antiguo."], reviewPrompts: ["¿De qué andén sale ahora el tren?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "Anuncio de la estación", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("Where is the Manchester train now leaving from?", ["Platform two.", "Platform six.", "Platform one."], 1, "'depart from platform six, not platform two'."),
      mc("How long is the delay?", ["About ten minutes.", "About twenty minutes.", "About an hour."], 1, "'delayed by approximately twenty minutes'."),
      mc("Why is the train delayed?", ["Bad weather.", "A signalling problem.", "Too many passengers."], 1, "'due to a signalling problem'."),
      mc("What can first-class passengers get in the lounge?", ["Free coffee.", "A free ticket.", "A free meal."], 0, "'where free coffee is available'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Conversación por voz (B1)", description: "Habla con la IA (voz británica): planear y decidir.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. La IA propondrá planear algo juntos. Haz sugerencias, di lo que prefieres y llegad a un acuerdo. Al terminar, 'Finalizar y evaluar'.\nImportante: abre la app en http://localhost:3001 (no en la IP de red) para que el micrófono funcione." }],
    pedagogy: { objective: "Hacer sugerencias, expresar preferencias y llegar a un acuerdo (B1).", summary: "Conversación por voz con la IA.", reviewPrompts: ["¿Cómo haces una sugerencia en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "B1", scenario: "planeáis juntos una salida de fin de semana; proponéis planes y decidís qué hacer", objective: "que el alumno haga sugerencias, exprese preferencias y llegue a un acuerdo", keywords: "Why don't we, how about, I'd prefer, let's, that sounds good" }, title: "Roleplay: planear el fin de semana", instructions: "Habla con la IA.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "B1 Preliminary — Semana" } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ B1 Preliminary (programa 12 semanas) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error B1:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
