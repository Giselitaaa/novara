/**
 * B2 First (Cambridge English: First / FCE) — PROGRAMA COMPLETO de preparación.
 *
 * No es "un puñado de lecciones": es un currículo de 8 SEMANAS (3 meses) con la
 * cadencia de una academia real:
 *   • Gramática progresiva cada semana (con repaso acumulativo).
 *   • Vocabulario nuevo cada semana, con su mazo de flashcards.
 *   • Práctica semanal del formato REAL de una parte del examen.
 *   • Simulacro mensual (semana 4 y semana 8) que estima tu nota Cambridge.
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 *
 * Idempotente. No toca otros cursos.   node scripts/seed-b2-first.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "b2-first";
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

// ── Helpers de preguntas (compactan la autoría) ──────────────────────────────
const mc = (prompt, options, correct, explanation) => ({ kind: "multiple_choice", data: { kind: "multiple_choice", prompt, options, correct: [correct], explanation } });
const fb = (prompt, accepted, explanation) => ({ kind: "fill_blank", data: { kind: "fill_blank", prompt, blanks: [{ accepted }], explanation } });
const open = (prompt, guidance, explanation) => ({ kind: "open", data: { kind: "open", prompt, guidance, explanation } });

// ════════════════════════════════════════════════════════════════════════════
// EL PROGRAMA — 12 semanas. Cada semana: gramática, vocabulario y práctica de examen.
// ════════════════════════════════════════════════════════════════════════════
const WEEKS = [
  {
    n: 1,
    theme: "Presente y descripción de personas",
    grammar: {
      title: "Present simple vs. present continuous (y verbos de estado)",
      blocks: [
        "Present simple: rutinas, hechos y verdades generales (I work, she lives).\nPresent continuous: acciones en curso o temporales (I'm working today).\n\nVerbos de ESTADO (know, like, want, believe, own, seem…) normalmente NO van en continuous: 'I know' (no 'I am knowing').\nOjo: algunos cambian de significado — 'I think it's great' (opinión) vs 'I'm thinking about it' (proceso).",
      ],
      exercise: {
        title: "Práctica de gramática — Presente",
        instructions: "Completa con la forma correcta del presente.",
        questions: [
          fb("Every morning she ___ (get) up at seven.", ["gets"], "Rutina → present simple: 'gets'."),
          fb("Be quiet! The baby ___ (sleep).", ["is sleeping", "'s sleeping"], "Acción en curso ahora → present continuous."),
          fb("I ___ (not/understand) this question.", ["don't understand", "do not understand"], "'understand' es verbo de estado → present simple."),
          fb("They usually ___ (go) to the gym on Mondays.", ["go"], "'usually' → rutina → present simple."),
          fb("Look! It ___ (rain) again.", ["is raining", "'s raining"], "'Look!' señala acción ahora → present continuous."),
          fb("This soup ___ (taste) delicious.", ["tastes"], "'taste' aquí es estado (percepción) → present simple."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Personalidad y descripción",
      deck: [
        ["easy-going", "tranquilo/a, de trato fácil", "He's very easy-going.", "adjetivo"],
        ["outgoing", "extrovertido/a", "She's outgoing and makes friends easily.", "adjetivo"],
        ["reliable", "de fiar", "You can trust him — he's reliable.", "adjetivo"],
        ["stubborn", "testarudo/a", "He's too stubborn to change his mind.", "adjetivo"],
        ["ambitious", "ambicioso/a", "She's ambitious about her career.", "adjetivo"],
        ["down-to-earth", "con los pies en la tierra", "A down-to-earth, practical person.", "expresión"],
        ["take after", "parecerse a (familia)", "She takes after her mother.", "phrasal verb"],
        ["get on well with", "llevarse bien con", "I get on well with my colleagues.", "phrasal verb"],
        ["have a lot in common", "tener mucho en común", "We have a lot in common.", "colocación"],
        ["a good sense of humour", "buen sentido del humor", "He has a great sense of humour.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Personalidad",
        instructions: "Elige la palabra correcta.",
        questions: [
          mc("A person you can trust and depend on is…", ["reliable", "stubborn", "ambitious"], 0, "'reliable' = de fiar."),
          mc("Someone who refuses to change their mind is…", ["easy-going", "stubborn", "outgoing"], 1, "'stubborn' = testarudo."),
          mc("'She ___ her father — same eyes, same laugh.'", ["takes after", "gets on with", "puts off"], 0, "'take after' = parecerse a un familiar."),
          mc("A sociable, extroverted person is…", ["down-to-earth", "outgoing", "reliable"], 1, "'outgoing' = extrovertido."),
          mc("If you and a friend like the same things, you…", ["take after each other", "have a lot in common", "get on badly"], 1, "'have a lot in common' = tener mucho en común."),
          mc("Someone practical and sensible is…", ["down-to-earth", "ambitious", "stubborn"], 0, "'down-to-earth' = con los pies en la tierra."),
        ],
      },
    },
    exam: {
      part: "Use of English — Parte 1 (multiple-choice cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 1 (léxico)",
      instructions: "Elige la opción correcta (A–D). Texto:\n\nMaking new friends as an adult can be surprisingly (1)___. Unlike at school, you rarely (2)___ across people in the same way, and busy schedules leave little (3)___ time. Experts (4)___ that the key is to join activities you genuinely enjoy, so that friendships form (5)___. Above all, they say, you should not be afraid to (6)___ the first move.",
      questions: [
        mc("Hueco 1", ["hard", "difficult", "tough", "challenging"], 3, "'challenging' = que supone un reto (encaja mejor con 'surprisingly')."),
        mc("Hueco 2: you rarely ___ across people", ["come", "get", "run", "fall"], 0, "'come across' = encontrarse con (por casualidad)."),
        mc("Hueco 3: leave little ___ time", ["free", "spare", "empty", "open"], 1, "'spare time' = tiempo libre (colocación)."),
        mc("Hueco 4: experts ___ that…", ["say", "tell", "speak", "talk"], 0, "'say that + oración'."),
        mc("Hueco 5: friendships form ___", ["naturally", "normally", "usually", "commonly"], 0, "'form naturally' = surgen de forma natural."),
        mc("Hueco 6: to ___ the first move", ["do", "make", "take", "have"], 1, "'make the first move' (colocación fija)."),
      ],
    },
  },

  {
    n: 2,
    theme: "Pasado y viajes",
    grammar: {
      title: "Pasados: simple, continuous, perfect y 'used to / would'",
      blocks: [
        "Past simple: acción terminada (I visited Rome in 2019).\nPast continuous: acción en desarrollo en el pasado, a menudo interrumpida (I was cooking when he arrived).\nPast perfect: una acción ANTERIOR a otra pasada (When I arrived, the train had already left).\n'used to' + infinitivo: hábitos/estados pasados que ya no ocurren (I used to live in Madrid).\n'would' + infinitivo: hábitos pasados repetidos (NO con verbos de estado).",
      ],
      exercise: {
        title: "Práctica de gramática — Pasados",
        instructions: "Completa con el pasado adecuado.",
        questions: [
          fb("While we ___ (walk) home, it started to rain.", ["were walking"], "Acción en desarrollo interrumpida → past continuous."),
          fb("By the time we arrived, the film ___ (already/start).", ["had already started"], "Acción anterior a otra pasada → past perfect."),
          fb("I ___ (use) to play the piano when I was a child.", ["used"], "Hábito pasado → 'used to play'."),
          fb("She ___ (not/see) that film before, so it was all new to her.", ["hadn't seen", "had not seen"], "Anterior a un momento pasado → past perfect."),
          fb("Last summer we ___ (travel) around Italy for a month.", ["travelled", "traveled"], "Acción terminada con marcador temporal → past simple."),
          fb("Every Sunday, my grandfather ___ (take) us to the park. (hábito)", ["would take", "used to take"], "Hábito pasado repetido → 'would/used to take'."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Viajes y vacaciones",
      deck: [
        ["set off", "ponerse en marcha", "We set off at dawn.", "phrasal verb"],
        ["check in", "facturar / registrarse", "We checked in at the hotel.", "phrasal verb"],
        ["get away", "escaparse (de vacaciones)", "We need to get away for the weekend.", "phrasal verb"],
        ["a packed itinerary", "una agenda apretada", "The tour had a packed itinerary.", "colocación"],
        ["off the beaten track", "fuera de las rutas turísticas", "a village off the beaten track", "expresión"],
        ["breathtaking", "impresionante", "The views were breathtaking.", "adjetivo"],
        ["a stopover", "una escala", "We had a stopover in Paris.", "sustantivo"],
        ["book in advance", "reservar con antelación", "Book your tickets in advance.", "colocación"],
        ["travel light", "viajar ligero de equipaje", "I always travel light.", "expresión"],
        ["a once-in-a-lifetime trip", "un viaje único", "It was a once-in-a-lifetime trip.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Viajes",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A place far from tourists is…", ["breathtaking", "off the beaten track", "a stopover"], 1, "'off the beaten track' = fuera de las rutas."),
          mc("To leave on a journey is to…", ["set off", "check in", "book"], 0, "'set off' = ponerse en marcha."),
          mc("Amazing, stunning scenery is…", ["packed", "breathtaking", "light"], 1, "'breathtaking' = impresionante."),
          mc("A short stop between flights is…", ["a stopover", "an itinerary", "a getaway"], 0, "'stopover' = escala."),
          mc("To pack very little is to…", ["get away", "travel light", "check in"], 1, "'travel light' = viajar ligero."),
          mc("You should ___ to get cheaper flights.", ["set off", "book in advance", "travel light"], 1, "'book in advance' = reservar con antelación."),
        ],
      },
    },
    exam: {
      part: "Use of English — Parte 2 (open cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 2 (gramática)",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nTravelling alone is something (1)___ more and more people are choosing to do. At first it may seem daunting, (2)___ it can be incredibly rewarding. You are free to go (3)___ you like, and you often end (4)___ meeting more locals than you (5)___ in a group. The only thing you really need is the confidence (6)___ take the first step.",
      questions: [
        fb("Hueco 1", ["that", "which"], "Relativo: 'something that/which'."),
        fb("Hueco 2", ["but"], "Contraste: 'daunting, but rewarding'."),
        fb("Hueco 3", ["wherever", "where"], "'go wherever you like' = a donde quieras."),
        fb("Hueco 4", ["up"], "'end up + -ing' = acabar haciendo."),
        fb("Hueco 5", ["would"], "'more than you would (meet)' → condicional elidido."),
        fb("Hueco 6", ["to"], "'the confidence to + infinitivo'."),
      ],
    },
  },

  {
    n: 3,
    theme: "Present perfect y trabajo",
    grammar: {
      title: "Present perfect vs. past simple; for/since/already/yet/just",
      blocks: [
        "Past simple: momento pasado concreto y terminado (I saw her yesterday).\nPresent perfect: conexión con el presente — experiencias (Have you ever…?), acciones recientes con resultado (I've lost my keys), duración hasta ahora (I've lived here for years).\n'for' + periodo (for three years); 'since' + punto de inicio (since 2020).\n'already' (antes de lo esperado), 'yet' (en negativas/preguntas: todavía), 'just' (hace un momento).",
      ],
      exercise: {
        title: "Práctica de gramática — Present perfect",
        instructions: "Completa correctamente.",
        questions: [
          fb("I ___ (know) her since 2015.", ["have known", "'ve known"], "Duración hasta ahora → present perfect."),
          fb("We've lived in this city ___ ten years.", ["for"], "'for' + periodo."),
          fb("She's worked here ___ she left university.", ["since"], "'since' + punto de inicio."),
          fb("___ you ever been to Scotland?", ["Have"], "Experiencia → 'Have you ever been…?'"),
          fb("I can't find my phone. I think I ___ (lose) it.", ["have lost", "'ve lost"], "Acción reciente con resultado presente → present perfect."),
          fb("'Is Tom here?' 'No, he ___ (not/arrive) yet.'", ["hasn't arrived", "has not arrived"], "Negativa con 'yet' → present perfect."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Trabajo y carreras",
      deck: [
        ["apply for", "solicitar (un puesto)", "She applied for the job.", "phrasal verb"],
        ["a demanding job", "un trabajo exigente", "It's a demanding but rewarding job.", "colocación"],
        ["meet a deadline", "cumplir un plazo", "We met the deadline.", "colocación"],
        ["a pay rise", "un aumento de sueldo", "He asked for a pay rise.", "sustantivo"],
        ["work overtime", "hacer horas extra", "I had to work overtime.", "colocación"],
        ["be promoted", "ser ascendido", "She was promoted to manager.", "verbo"],
        ["a steep learning curve", "una curva de aprendizaje pronunciada", "The new role was a steep learning curve.", "expresión"],
        ["take on responsibility", "asumir responsabilidad", "He took on more responsibility.", "colocación"],
        ["a work-life balance", "conciliación", "A good work-life balance matters.", "colocación"],
        ["hand in your notice", "presentar la dimisión", "She handed in her notice.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Trabajo",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To formally request a job is to ___ it.", ["apply for", "meet", "take on"], 0, "'apply for a job'."),
          mc("Finishing work by the required time is to ___.", ["work overtime", "meet a deadline", "hand in notice"], 1, "'meet a deadline'."),
          mc("An increase in salary is a ___.", ["pay rise", "deadline", "notice"], 0, "'pay rise'."),
          mc("Getting a higher position is being ___.", ["applied", "promoted", "demanding"], 1, "'be promoted'."),
          mc("To resign, you ___.", ["hand in your notice", "take on responsibility", "work overtime"], 0, "'hand in your notice'."),
          mc("A job that requires a lot is ___.", ["demanding", "steep", "balanced"], 0, "'a demanding job'."),
        ],
      },
    },
    exam: {
      part: "Use of English — Parte 3 (word formation)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 3 (formación de palabras)",
      instructions: "Forma la palabra que encaje a partir de la RAÍZ. Texto:\n\nChoosing a career is one of the most (1)___ (IMPORTANCE) decisions we make. Many people value job (2)___ (SECURE) above all, while others prefer (3)___ (CREATE) work, even if it is less stable. The (4)___ (ABLE) to adapt is increasingly vital, as whole industries change with surprising (5)___ (RAPID). Ultimately, (6)___ (SATISFY) at work depends on more than money.",
      questions: [
        fb("Hueco 1 (IMPORTANCE)", ["important"], "Adjetivo: 'important'."),
        fb("Hueco 2 (SECURE)", ["security"], "Sustantivo: 'security'."),
        fb("Hueco 3 (CREATE)", ["creative"], "Adjetivo: 'creative'."),
        fb("Hueco 4 (ABLE)", ["ability"], "Sustantivo: 'ability'."),
        fb("Hueco 5 (RAPID)", ["rapidity", "speed"], "Sustantivo: 'rapidity'."),
        fb("Hueco 6 (SATISFY)", ["satisfaction"], "Sustantivo: 'satisfaction'."),
      ],
    },
  },

  {
    n: 4,
    theme: "Futuro y tecnología · SIMULACRO Mes 1",
    grammar: {
      title: "Formas de futuro: will, going to, present continuous, future perfect/continuous",
      blocks: [
        "'will': decisiones espontáneas, predicciones, promesas (I'll help you).\n'going to': planes e intenciones, o predicción con evidencia (Look at those clouds — it's going to rain).\nPresent continuous: planes fijos con fecha (I'm meeting Ana on Friday).\nFuture continuous: acción en curso en un momento futuro (This time tomorrow I'll be flying).\nFuture perfect: acción terminada antes de un momento futuro (By 2030 they will have finished).",
      ],
      exercise: {
        title: "Práctica de gramática — Futuro",
        instructions: "Completa con la forma de futuro adecuada.",
        questions: [
          fb("Look out! You ___ (drop) that glass!", ["are going to drop", "'re going to drop"], "Predicción con evidencia → 'going to'."),
          fb("I'm tired. I think I ___ (go) to bed.", ["will go", "'ll go"], "Decisión espontánea → 'will'."),
          fb("We ___ (meet) the director at 10 tomorrow. (plan fijo)", ["are meeting", "'re meeting"], "Plan fijo con hora → present continuous."),
          fb("By the time you read this, I ___ (leave).", ["will have left", "'ll have left"], "Terminado antes de un momento futuro → future perfect."),
          fb("This time next week I ___ (lie) on a beach.", ["will be lying", "'ll be lying"], "En curso en un momento futuro → future continuous."),
          fb("Don't worry, I ___ (not/tell) anyone.", ["won't tell", "will not tell"], "Promesa → 'will'."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Tecnología y ciencia",
      deck: [
        ["a breakthrough", "un avance decisivo", "a medical breakthrough", "sustantivo"],
        ["cutting-edge", "puntero, de vanguardia", "cutting-edge technology", "adjetivo"],
        ["user-friendly", "fácil de usar", "a user-friendly app", "adjetivo"],
        ["back up (data)", "hacer copia de seguridad", "Back up your files.", "phrasal verb"],
        ["keep up with", "mantenerse al día con", "It's hard to keep up with technology.", "phrasal verb"],
        ["obsolete", "obsoleto", "The device is now obsolete.", "adjetivo"],
        ["roll out", "lanzar / implantar", "They rolled out the update.", "phrasal verb"],
        ["a glitch", "un fallo técnico", "a software glitch", "sustantivo"],
        ["state-of-the-art", "lo último, de última generación", "state-of-the-art equipment", "adjetivo"],
        ["run out of battery", "quedarse sin batería", "My phone ran out of battery.", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Tecnología",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A major, important discovery is a ___.", ["glitch", "breakthrough", "backup"], 1, "'breakthrough' = avance decisivo."),
          mc("The most modern, advanced technology is ___.", ["obsolete", "state-of-the-art", "user-friendly"], 1, "'state-of-the-art'."),
          mc("Easy for people to use is ___.", ["user-friendly", "cutting-edge", "obsolete"], 0, "'user-friendly'."),
          mc("To copy your files for safety is to ___ them.", ["roll out", "back up", "keep up"], 1, "'back up data'."),
          mc("A small technical fault is a ___.", ["glitch", "breakthrough", "curve"], 0, "'glitch' = fallo técnico."),
          mc("No longer useful or up to date is ___.", ["cutting-edge", "obsolete", "user-friendly"], 1, "'obsolete' = obsoleto."),
        ],
      },
    },
    exam: {
      part: "Use of English — Parte 4 (key word transformations)",
      category: "reading", weight: 12,
      title: "Examen semanal — Parte 4 (transformaciones)",
      instructions: "Reescribe la segunda frase (2–5 palabras) con la PALABRA CLAVE. Escribe SOLO lo que falta.",
      questions: [
        fb("1) 'It's not necessary to bring your laptop.'  (HAVE)\n→ You ___ your laptop.", ["don't have to bring", "do not have to bring"], "Ausencia de obligación: 'don't have to bring'."),
        fb("2) 'They will probably launch the app in June.'  (LIKELY)\n→ The app ___ in June.", ["is likely to be launched"], "'be likely to' en pasiva."),
        fb("3) 'I last saw him three years ago.'  (SINCE)\n→ I ___ three years.", ["haven't seen him for", "have not seen him for"], "'haven't seen him for + periodo'."),
        fb("4) 'Perhaps she forgot the meeting.'  (MIGHT)\n→ She ___ the meeting.", ["might have forgotten"], "Posibilidad pasada: 'might have forgotten'."),
        fb("5) 'The technician repaired my phone.'  (HAD)\n→ I ___ by the technician.", ["had my phone repaired"], "Causativa: 'have something done'."),
        fb("6) 'I regret not saving my work.'  (WISH)\n→ I ___ my work.", ["wish I had saved", "wish I'd saved"], "'wish + past perfect'."),
      ],
    },
    monthlyMock: 1,
  },

  {
    n: 5,
    theme: "Condicionales y medioambiente",
    grammar: {
      title: "Condicionales (0, 1, 2, 3 y mixtas) + wish / if only",
      blocks: [
        "Tipo 0 (verdad general): If you heat ice, it melts.\nTipo 1 (real/probable): If it rains, we'll stay in.\nTipo 2 (irreal/hipotético presente): If I were you, I would apologise.\nTipo 3 (irreal pasado): If I had studied, I would have passed.\nMixta: If I had saved money (pasado), I would be rich now (presente).\n'wish/if only' + past simple (deseo presente) o + past perfect (arrepentimiento pasado).",
      ],
      exercise: {
        title: "Práctica de gramática — Condicionales",
        instructions: "Completa el condicional.",
        questions: [
          fb("If it ___ (rain) tomorrow, we'll cancel the trip.", ["rains"], "Tipo 1: presente en la 'if', 'will' en la principal."),
          fb("If I ___ (be) you, I'd take the job.", ["were", "was"], "Tipo 2: 'If I were you'."),
          fb("If she had left earlier, she ___ (catch) the train.", ["would have caught"], "Tipo 3: 'would have + participio'."),
          fb("I wish I ___ (know) the answer now.", ["knew"], "Deseo presente → 'wish + past simple'."),
          fb("If only I ___ (not/say) that yesterday!", ["hadn't said", "had not said"], "Arrepentimiento pasado → 'if only + past perfect'."),
          fb("If I had taken that job, I ___ (live) abroad now. (mixta)", ["would be living", "would live"], "Condicional mixta: pasado → presente."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Medioambiente",
      deck: [
        ["climate change", "cambio climático", "the fight against climate change", "colocación"],
        ["carbon footprint", "huella de carbono", "reduce your carbon footprint", "colocación"],
        ["renewable energy", "energía renovable", "invest in renewable energy", "colocación"],
        ["cut down on", "reducir (el consumo de)", "cut down on plastic", "phrasal verb"],
        ["endangered species", "especie en peligro", "protect endangered species", "colocación"],
        ["throw away", "tirar / desechar", "Don't throw away recyclables.", "phrasal verb"],
        ["run out (of)", "agotarse", "We're running out of resources.", "phrasal verb"],
        ["eco-friendly", "ecológico", "eco-friendly products", "adjetivo"],
        ["raise awareness", "concienciar", "raise awareness about waste", "colocación"],
        ["single-use plastic", "plástico de un solo uso", "ban single-use plastic", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Medioambiente",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Energy from the sun or wind is ___.", ["renewable energy", "carbon footprint", "single-use"], 0, "'renewable energy'."),
          mc("To use less of something is to ___ it.", ["throw away", "cut down on", "run out"], 1, "'cut down on'."),
          mc("Animals at risk of extinction are ___.", ["eco-friendly", "endangered species", "renewable"], 1, "'endangered species'."),
          mc("The total CO₂ you produce is your ___.", ["carbon footprint", "awareness", "climate"], 0, "'carbon footprint'."),
          mc("Products that don't harm nature are ___.", ["single-use", "eco-friendly", "obsolete"], 1, "'eco-friendly'."),
          mc("To make people more informed is to ___.", ["run out", "throw away", "raise awareness"], 2, "'raise awareness'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 5 (multiple choice)",
      category: "reading", weight: 12,
      title: "Examen semanal — Reading Parte 5",
      instructions: "Lee y elige la mejor opción.\n\nWhen my family decided to go 'zero waste', I was sceptical. It sounded exhausting, and I assumed we would have to give up everything we enjoyed. In reality, the change was gradual and, to my surprise, oddly satisfying. We started small — refusing plastic bags, buying loose vegetables — and each little habit made the next one easier. What convinced me was not guilt, but the sense that our choices, however tiny, actually added up. A year on, we throw away a fraction of what we used to, and I no longer see it as a sacrifice but as common sense.",
      questions: [
        mc("How did the writer feel at the beginning?", ["Enthusiastic", "Doubtful", "Guilty", "Proud"], 1, "'I was sceptical' = escéptico/dudoso."),
        mc("What surprised the writer about the change?", ["It was expensive", "It was satisfying", "It was impossible", "It was quick"], 1, "'oddly satisfying'."),
        mc("What convinced the writer to continue?", ["Feeling guilty", "Saving money", "The feeling that small choices mattered", "Pressure from others"], 2, "'the sense that our choices… actually added up'."),
        mc("The phrase 'added up' suggests the small actions…", ["were pointless", "combined into something significant", "cost a lot", "were forgotten"], 1, "'add up' = sumar/tener efecto conjunto."),
        mc("How does the writer feel now?", ["It's a sacrifice", "It's common sense", "It's exhausting", "It's temporary"], 1, "'not as a sacrifice but as common sense'."),
        mc("The writer's overall attitude is…", ["regretful", "positive", "indifferent", "anxious"], 1, "Tono positivo y convencido."),
      ],
    },
  },

  {
    n: 6,
    theme: "Verbos modales y salud",
    grammar: {
      title: "Modales: obligación, deducción y 'modal perfects'",
      blocks: [
        "Obligación: must / have to (fuerte), should / ought to (consejo), don't have to (no es necesario), mustn't (prohibido).\nDeducción presente: must be (seguro que sí), can't be (seguro que no), might/could be (quizá).\nModal perfects (deducción/crítica sobre el pasado): must have (seguro que pasó), can't have (imposible que pasara), should have (debería haber), might have (quizá pasó).",
      ],
      exercise: {
        title: "Práctica de gramática — Modales",
        instructions: "Completa con el modal adecuado.",
        questions: [
          fb("You ___ come if you're tired. (no es necesario)", ["don't have to", "do not have to"], "Ausencia de obligación."),
          fb("He isn't answering — he ___ asleep. (deducción: quizá)", ["might be", "could be", "may be"], "Deducción posible presente."),
          fb("She ___ all night; she looks exhausted. (seguro que estudió)", ["must have studied"], "Deducción segura pasada → 'must have + participio'."),
          fb("You ___ me earlier! Now it's too late. (crítica: deberías)", ["should have told"], "Crítica sobre el pasado → 'should have + participio'."),
          fb("That ___ true — it's impossible! (seguro que no)", ["can't be", "cannot be"], "Deducción negativa presente."),
          fb("I ___ my keys at the office; they're not here. (quizá los dejé)", ["might have left", "may have left", "could have left"], "Posibilidad pasada."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Salud y estilo de vida",
      deck: [
        ["work out", "hacer ejercicio", "I work out three times a week.", "phrasal verb"],
        ["cut out", "eliminar (de la dieta)", "I cut out sugar.", "phrasal verb"],
        ["a balanced diet", "una dieta equilibrada", "eat a balanced diet", "colocación"],
        ["get over", "recuperarse de", "She got over the flu.", "phrasal verb"],
        ["be run down", "estar agotado/bajo de defensas", "I've been feeling run down.", "expresión"],
        ["put on weight", "engordar", "I put on weight over Christmas.", "colocación"],
        ["take up", "empezar (un deporte/afición)", "He took up running.", "phrasal verb"],
        ["a good night's sleep", "una buena noche de sueño", "I need a good night's sleep.", "colocación"],
        ["keep fit", "mantenerse en forma", "Cycling helps me keep fit.", "colocación"],
        ["burn out", "quemarse (agotamiento)", "He burned out from overwork.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Salud",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To exercise in a gym is to ___.", ["work out", "get over", "put on"], 0, "'work out'."),
          mc("To recover from an illness is to ___ it.", ["cut out", "get over", "take up"], 1, "'get over'."),
          mc("To gain weight is to ___.", ["keep fit", "put on weight", "work out"], 1, "'put on weight'."),
          mc("A healthy, varied diet is a ___.", ["balanced diet", "good night's sleep", "run down"], 0, "'balanced diet'."),
          mc("To stop eating something is to ___ it.", ["take up", "cut out", "burn out"], 1, "'cut out'."),
          mc("Extreme exhaustion from stress is to ___.", ["keep fit", "get over", "burn out"], 2, "'burn out'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 6 (gapped text)",
      category: "reading", weight: 12,
      title: "Examen semanal — Reading Parte 6",
      instructions: "Elige la frase (A–E) que va en cada hueco. SOBRAN dos.\n\nSleep is often the first thing we sacrifice when life gets busy. [HUECO 1] Yet scientists warn that this is a false economy. [HUECO 2] During deep sleep, the brain consolidates memories and clears out waste products. [HUECO 3] Skimping on it, therefore, harms not only our mood but our long-term health.\n\nFRASES:\nA. We tell ourselves we will catch up at the weekend.\nB. In fact, losing sleep makes us far less productive, not more.\nC. This is why a good night's rest leaves us sharper and calmer.\nD. Most people enjoy staying up late.\nE. Exercise is also important for health.",
      questions: [
        mc("HUECO 1", ["A (nos decimos que recuperaremos el finde)", "B (perder sueño nos hace menos productivos)", "C (por eso descansar nos deja más agudos)", "D (a la gente le gusta trasnochar)", "E (el ejercicio también importa)"], 0, "Tras 'sacrificamos el sueño', A ('we will catch up at the weekend') encaja."),
        mc("HUECO 2", ["A", "B (menos productivos, no más)", "C", "D", "E"], 1, "'a false economy' → B lo desarrolla (menos productivos, no más)."),
        mc("HUECO 3", ["A", "B", "C (por eso descansar nos deja más agudos)", "D", "E"], 2, "Tras 'consolidates memories…', C ('This is why a good night's rest…') cierra la idea. D y E sobran."),
      ],
    },
  },

  {
    n: 7,
    theme: "Pasiva, reported speech y medios",
    grammar: {
      title: "Voz pasiva, causativa 'have something done' y estilo indirecto",
      blocks: [
        "Pasiva: el foco pasa al objeto (The results will be announced tomorrow). Se forma con 'be' + participio.\nCausativa: 'have/get something done' = alguien lo hace por ti (I had my hair cut).\nReported speech: los tiempos 'retroceden' (present→past, will→would, can→could) y cambian pronombres/tiempo/lugar. 'She said (that) she was tired.' Preguntas: 'He asked if/whether I was ready.'",
      ],
      exercise: {
        title: "Práctica de gramática — Pasiva y reported speech",
        instructions: "Transforma o completa.",
        questions: [
          fb("Active: 'They built this bridge in 1900.'  Passive: This bridge ___ in 1900.", ["was built"], "Pasado simple pasiva: 'was built'."),
          fb("'They are repairing the road.'  Passive: The road ___ .", ["is being repaired"], "Present continuous pasiva: 'is being repaired'."),
          fb("I ___ last week. (causativa: hacer revisar el coche)", ["had my car serviced"], "'have something done' en pasado."),
          fb("Direct: 'I am busy,' she said.  Reported: She said she ___ busy.", ["was"], "present→past en reported speech."),
          fb("Direct: 'Will you help me?' he asked.  Reported: He asked if I ___ help him.", ["would"], "will→would en reported."),
          fb("Direct: 'Where do you live?'  Reported: She asked where I ___.", ["lived"], "present→past + orden afirmativo en preguntas indirectas."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Medios y comunicación",
      deck: [
        ["the mass media", "los medios de comunicación", "the influence of the mass media", "colocación"],
        ["go viral", "hacerse viral", "The video went viral.", "colocación"],
        ["a headline", "un titular", "a shocking headline", "sustantivo"],
        ["biased", "sesgado/parcial", "biased reporting", "adjetivo"],
        ["reliable source", "fuente fiable", "check a reliable source", "colocación"],
        ["fake news", "noticias falsas", "spread fake news", "colocación"],
        ["keep up to date", "mantenerse informado", "keep up to date with the news", "colocación"],
        ["broadcast", "emitir / retransmitir", "The match was broadcast live.", "verbo"],
        ["subscribe to", "suscribirse a", "I subscribe to a newspaper.", "phrasal verb"],
        ["make the headlines", "salir en los titulares", "The scandal made the headlines.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Medios",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Information that is one-sided is ___.", ["reliable", "biased", "broadcast"], 1, "'biased' = sesgado."),
          mc("A trustworthy origin of information is a ___.", ["fake news", "reliable source", "headline"], 1, "'reliable source'."),
          mc("When content spreads very fast online, it ___.", ["goes viral", "broadcasts", "subscribes"], 0, "'go viral'."),
          mc("The short title of a news story is a ___.", ["source", "headline", "media"], 1, "'headline'."),
          mc("False, invented stories are ___.", ["mass media", "fake news", "broadcast"], 1, "'fake news'."),
          mc("To receive a magazine regularly, you ___ it.", ["subscribe to", "broadcast", "go viral"], 0, "'subscribe to'."),
        ],
      },
    },
    exam: {
      part: "Reading — Parte 7 (multiple matching)",
      category: "reading", weight: 10,
      title: "Examen semanal — Reading Parte 7",
      instructions: "¿Qué persona (A–D) dice cada cosa? Puede repetirse.\n\nA — Sofía: I get all my news from social media now. It's instant, but I've learned to double-check anything shocking before I believe it.\nB — Mark: I still buy a printed newspaper every Sunday. I know it's old-fashioned, but I trust it more than most websites.\nC — Yuki: Honestly, I try to avoid the news — it's too depressing and often exaggerated to get clicks.\nD — Omar: I follow several reporters directly. That way I get expert analysis without the sensational headlines.",
      questions: [
        mc("1) I don't trust dramatic stories without checking.", ["A (Sofía)", "B (Mark)", "C (Yuki)", "D (Omar)"], 0, "Sofía: 'double-check anything shocking'."),
        mc("2) I prefer a traditional format.", ["A", "B (Mark)", "C", "D"], 1, "Mark: 'printed newspaper… old-fashioned'."),
        mc("3) I deliberately consume little news.", ["A", "B", "C (Yuki)", "D"], 2, "Yuki: 'I try to avoid the news'."),
        mc("4) I value expert opinion over drama.", ["A", "B", "C", "D (Omar)"], 3, "Omar: 'expert analysis without the sensational headlines'."),
        mc("5) I think the news is often exaggerated.", ["A", "B", "C (Yuki)", "D"], 2, "Yuki: 'exaggerated to get clicks'."),
        mc("6) I get my news very quickly.", ["A (Sofía)", "B", "C", "D"], 0, "Sofía: 'It's instant'."),
      ],
    },
  },

  {
    n: 8,
    theme: "Relativas, gerundio/infinitivo y educación · SIMULACRO Mes 2",
    grammar: {
      title: "Oraciones de relativo + gerundio vs. infinitivo",
      blocks: [
        "Relativas especificativas (sin comas, dan info esencial): The book that I bought…\nRelativas explicativas (con comas, info extra): My brother, who lives in Rome, …\nGerundio (-ing) tras ciertos verbos (enjoy, avoid, mind, finish) y tras preposiciones (good at cooking).\nInfinitivo (to +) tras otros (want, decide, hope, would like) y tras adjetivos (easy to use).\nOjo con cambios de sentido: 'stop smoking' (dejar de) vs 'stop to smoke' (parar para).",
      ],
      exercise: {
        title: "Práctica de gramática — Relativas y -ing/to",
        instructions: "Completa correctamente.",
        questions: [
          fb("That's the teacher ___ helped me pass. (relativo persona)", ["who", "that"], "Relativo de persona: 'who/that'."),
          fb("I really enjoy ___ (read) before bed.", ["reading"], "Tras 'enjoy' → gerundio."),
          fb("She decided ___ (study) medicine.", ["to study"], "Tras 'decide' → infinitivo."),
          fb("He's very good at ___ (solve) problems.", ["solving"], "Tras preposición → gerundio."),
          fb("Paris, ___ is the capital of France, is beautiful. (explicativa)", ["which"], "Relativa explicativa de cosa: 'which'."),
          fb("We stopped ___ (have) a coffee on the way. (parar para)", ["to have"], "'stop to do' = parar para hacer."),
        ],
      },
    },
    vocab: {
      title: "Vocabulario — Educación y aprendizaje",
      deck: [
        ["take an exam", "hacer un examen", "I'm taking an exam next week.", "colocación"],
        ["revise", "repasar (para un examen)", "I need to revise for the test.", "verbo"],
        ["hand in", "entregar (un trabajo)", "Hand in your essay by Friday.", "phrasal verb"],
        ["catch up", "ponerse al día", "I missed class and need to catch up.", "phrasal verb"],
        ["a deadline", "una fecha límite", "The essay deadline is Monday.", "sustantivo"],
        ["get the hang of", "coger el truco a", "I finally got the hang of it.", "expresión"],
        ["drop out", "abandonar (los estudios)", "He dropped out of university.", "phrasal verb"],
        ["a lifelong learner", "alguien que aprende toda la vida", "Be a lifelong learner.", "colocación"],
        ["pass with flying colours", "aprobar con nota", "She passed with flying colours.", "expresión"],
        ["keep on top of", "llevar al día", "keep on top of your studies", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Educación",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To study your notes again before a test is to ___.", ["hand in", "revise", "drop out"], 1, "'revise' = repasar."),
          mc("To submit your homework is to ___ it.", ["hand in", "catch up", "get the hang of"], 0, "'hand in'."),
          mc("To leave school before finishing is to ___.", ["catch up", "drop out", "revise"], 1, "'drop out'."),
          mc("To reach the level of the rest of the class is to ___.", ["catch up", "hand in", "drop out"], 0, "'catch up'."),
          mc("To pass an exam very well is to pass with ___.", ["flying colours", "the deadline", "the hang"], 0, "'pass with flying colours'."),
          mc("When you finally understand how to do something, you ___ it.", ["hand in", "get the hang of", "drop out"], 1, "'get the hang of'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 1 (essay)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (essay)",
      instructions: "Escribe tu essay (140–190 palabras) y compáralo con el modelo.",
      questions: [
        open(
          "In your English class you have been talking about education. Write an ESSAY:\n\n'Exams are the best way to measure a student's ability.' Do you agree?\n\nNotes: 1. stress  2. real-life skills  3. (your own idea). 140–190 words.",
          "Introducción (parafrasea + postura), un párrafo por punto, conclusión. Registro neutro-formal.",
          "RESPUESTA MODELO (~180 palabras):\n\n\"It is often claimed that exams are the fairest way to assess a student's ability. While tests certainly have their place, I do not believe they tell the whole story.\n\nOn the one hand, exams can be extremely stressful. Some capable students freeze under pressure and perform far below their true level, which means a single test may misrepresent what they actually know.\n\nOn the other hand, exams rarely measure the real-life skills that matter most, such as teamwork, creativity and the ability to solve practical problems. A student might memorise facts perfectly yet struggle to apply them outside the classroom.\n\nIn addition, I would argue that continuous assessment gives a more accurate picture, because it reflects effort and progress over time rather than a single moment.\n\nIn conclusion, although exams are a useful tool, they should not be the only one. A fair system combines tests with coursework and practical tasks, so that every kind of ability has a chance to shine.\"\n\nPor qué funciona: trata los dos puntos + idea propia (evaluación continua), 4 párrafos, conectores variados, registro formal, dentro del rango."
        ),
      ],
    },
    monthlyMock: 2,
  },

  {
    n: 9,
    theme: "Estilo indirecto avanzado · Delito y justicia",
    grammar: {
      title: "Reporting verbs (verbos de reporte con patrón)",
      blocks: [
        "Más allá de say/tell, en B2 se usan verbos de reporte con patrones propios:\n• verbo + that: admit, deny, explain, suggest → He admitted that he was wrong.\n• verbo + -ing: admit, deny, suggest, recommend → She denied taking it.\n• verbo + to + inf.: promise, agree, refuse, offer, threaten → They refused to pay.\n• verbo + objeto + to + inf.: advise, warn, remind, encourage → He warned me not to go.\n• verbo + preposición + -ing: accuse sb of, apologise for, insist on → She accused him of lying.",
      ],
      exercise: {
        title: "Práctica de gramática — Reporting verbs",
        instructions: "Completa con el patrón correcto.",
        questions: [
          fb("He admitted ___ (steal) the money.", ["stealing"], "admit + -ing."),
          fb("She refused ___ (answer) the question.", ["to answer"], "refuse + to."),
          fb("They accused him ___ cheating.", ["of"], "accuse sb OF + -ing."),
          fb("The officer warned us ___ (not/enter).", ["not to enter"], "warn sb (not) to."),
          fb("He apologised ___ being late.", ["for"], "apologise FOR + -ing."),
          fb("She suggested ___ (take) a taxi.", ["taking"], "suggest + -ing."),
        ],
      },
    },
    vocab: {
      title: "Delito, justicia y sociedad",
      deck: [
        ["a witness", "un testigo", "a key witness", "sustantivo"],
        ["evidence", "pruebas", "strong evidence", "sustantivo"],
        ["guilty", "culpable", "found guilty", "adjetivo"],
        ["innocent", "inocente", "proven innocent", "adjetivo"],
        ["a trial", "un juicio", "a fair trial", "sustantivo"],
        ["commit a crime", "cometer un delito", "commit a crime", "colocación"],
        ["a fine", "una multa", "pay a fine", "sustantivo"],
        ["arrest", "detener", "The police arrested him.", "verbo"],
        ["a suspect", "un sospechoso", "the main suspect", "sustantivo"],
        ["get away with", "salirse con la suya", "You won't get away with it.", "phrasal verb"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Justicia",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A person who sees a crime is a ___.", ["witness", "suspect", "fine"], 0, "'witness'."),
          mc("Facts that prove something in court are ___.", ["evidence", "trial", "fine"], 0, "'evidence'."),
          mc("The opposite of 'guilty' is ___.", ["innocent", "suspect", "arrested"], 0, "'innocent'."),
          mc("A sum of money you pay as a punishment is a ___.", ["fine", "trial", "witness"], 0, "'fine' = multa."),
          mc("To be caught by the police is to be ___.", ["arrested", "committed", "fined… (arrested)"], 0, "'arrested'."),
          mc("To escape punishment for something wrong is to ___ it.", ["get away with", "commit", "arrest"], 0, "'get away with'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 3 (word formation)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 3 (word formation)",
      instructions: "Forma la palabra que encaje a partir de la RAÍZ. Texto:\n\nA fair trial depends on the (1)___ (RELY) of the evidence. Witnesses must give an (2)___ (HONEST) account of what they saw, and any (3)___ (STATE) they make can be examined in court. The (4)___ (ASSUME) that someone is innocent until proven guilty is a basic (5)___ (LEGAL) principle. Without it, (6)___ (JUSTICE) decisions would be far more common.",
      questions: [
        fb("Hueco 1 (RELY)", ["reliability"], "sustantivo: reliability."),
        fb("Hueco 2 (HONEST)", ["honest"], "adjetivo: 'an honest account'."),
        fb("Hueco 3 (STATE)", ["statement", "statements"], "sustantivo: statement(s)."),
        fb("Hueco 4 (ASSUME)", ["assumption"], "sustantivo: assumption."),
        fb("Hueco 5 (LEGAL)", ["legal"], "adjetivo: 'a legal principle'."),
        fb("Hueco 6 (JUSTICE)", ["unjust"], "adjetivo negativo: unjust."),
      ],
    },
  },

  {
    n: 10,
    theme: "Deseos y arrepentimientos · Emociones",
    grammar: {
      title: "wish / if only y el pasado irreal",
      blocks: [
        "Para deseos y arrepentimientos:\n• wish/if only + past simple: deseo sobre el presente — I wish I had more time. (pero no la tengo)\n• wish/if only + past perfect: arrepentimiento del pasado — I wish I had studied more.\n• wish + would: queja sobre algo molesto de otros — I wish you would stop shouting.\nRecuerda: 'I wish I were…' (subjuntivo, formal) es correcto además de 'was'.",
      ],
      exercise: {
        title: "Práctica de gramática — wish / if only",
        instructions: "Completa correctamente.",
        questions: [
          fb("I wish I ___ (have) more free time. (presente)", ["had"], "wish + past simple."),
          fb("If only I ___ (study) harder last year! (pasado)", ["had studied"], "wish/if only + past perfect."),
          fb("I wish you ___ (stop) interrupting me. (queja)", ["would stop"], "wish + would."),
          fb("She wishes she ___ (not/say) that yesterday.", ["hadn't said", "had not said"], "arrepentimiento pasado."),
          fb("I wish it ___ (not/rain) so much here. (presente)", ["didn't rain", "did not rain"], "wish + past simple."),
          fb("I wish I ___ (be) taller. (subjuntivo/pasado)", ["were", "was"], "'I wish I were/was'."),
        ],
      },
    },
    vocab: {
      title: "Emociones, actitudes y reacciones",
      deck: [
        ["regret", "arrepentirse/lamentar", "I regret saying that.", "verbo"],
        ["relieved", "aliviado", "I felt relieved.", "adjetivo"],
        ["overwhelmed", "abrumado", "overwhelmed with work", "adjetivo"],
        ["resent", "resentir/guardar rencor", "She resented the criticism.", "verbo"],
        ["grateful", "agradecido", "I'm grateful for your help.", "adjetivo"],
        ["let down", "decepcionar", "He let me down.", "phrasal verb"],
        ["cheer up", "animar(se)", "Cheer up, it'll be fine!", "phrasal verb"],
        ["cope with", "hacer frente a", "cope with stress", "phrasal verb"],
        ["reassure", "tranquilizar", "The doctor reassured her.", "verbo"],
        ["on edge", "nervioso/tenso", "I've been on edge all day.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Emociones",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To feel sorry about a past action is to ___ it.", ["regret", "reassure", "cheer up"], 0, "'regret'."),
          mc("After good news, you feel ___.", ["relieved", "overwhelmed", "on edge"], 0, "'relieved'."),
          mc("To fail to meet someone's hopes is to ___ them.", ["let down", "cheer up", "cope with"], 0, "'let down'."),
          mc("To deal successfully with a problem is to ___ it.", ["cope with", "resent", "let down"], 0, "'cope with'."),
          mc("To make someone feel calmer is to ___ them.", ["reassure", "resent", "regret"], 0, "'reassure'."),
          mc("Feeling thankful is feeling ___.", ["grateful", "overwhelmed", "on edge"], 0, "'grateful'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 4 (key word transformations)",
      category: "reading", weight: 10,
      title: "Examen semanal — Parte 4 (transformaciones)",
      instructions: "Reescribe la segunda frase (2–5 palabras) con la PALABRA CLAVE. Escribe SOLO lo que falta.",
      questions: [
        fb("1) 'It's a pity I didn't book earlier.'  (WISH)\n→ I ___ earlier.", ["wish I had booked"], "wish + past perfect."),
        fb("2) 'I'm sorry I said that.'  (REGRET)\n→ I ___ that.", ["regret saying"], "regret + -ing."),
        fb("3) 'Please stop leaving the door open.'  (WOULD)\n→ I wish you ___ the door open.", ["would stop leaving"], "wish + would + -ing."),
        fb("4) 'She was relieved to hear the news.'  (RELIEF)\n→ To her ___, she heard the news.", ["relief"], "'to one's relief'."),
        fb("5) 'He couldn't cope with the pressure.'  (DEAL)\n→ He couldn't ___ the pressure.", ["deal with"], "'deal with' = cope with."),
        fb("6) 'I'm grateful to you for helping.'  (GRATITUDE)\n→ I owe you a debt of ___ for helping.", ["gratitude"], "'a debt of gratitude'."),
      ],
    },
  },

  {
    n: 11,
    theme: "Cláusulas complejas · Ciencia e innovación",
    grammar: {
      title: "Cláusulas de relativo y de participio",
      blocks: [
        "Relativas especificativas (sin comas, esenciales): The scientist who made the discovery… / explicativas (con comas, información extra): Marie Curie, who won two Nobel Prizes, …\nRelativas reducidas a participio: 'the report that was written by…' → 'the report written by…'; 'the people who are waiting' → 'the people waiting'.\nCláusulas de participio de causa/tiempo: Having finished the experiment, she left. Not knowing the answer, he guessed.",
      ],
      exercise: {
        title: "Práctica de gramática — Relativas y participios",
        instructions: "Completa correctamente.",
        questions: [
          fb("The invention ___ changed the world was the internet. (relativo)", ["that", "which"], "especificativa cosa: that/which."),
          fb("Reduce: 'the data which was collected…' → the data ___ …", ["collected"], "relativa reducida pasiva."),
          fb("Reduce: 'the students who are studying…' → the students ___ …", ["studying"], "relativa reducida activa."),
          fb("___ (finish) the research, they published it. (participio)", ["Having finished"], "'Having finished'."),
          fb("Einstein, ___ developed relativity, was a genius. (explicativa persona)", ["who"], "explicativa persona: who."),
          fb("___ (not/have) enough data, we couldn't conclude. (participio)", ["Not having"], "participio de causa: 'Not having'."),
        ],
      },
    },
    vocab: {
      title: "Ciencia, tecnología e innovación",
      deck: [
        ["a breakthrough", "un avance decisivo", "a medical breakthrough", "sustantivo"],
        ["research", "investigación", "carry out research", "sustantivo"],
        ["a device", "un dispositivo", "a clever device", "sustantivo"],
        ["cutting-edge", "de vanguardia", "cutting-edge technology", "adjetivo"],
        ["develop", "desarrollar", "develop a vaccine", "verbo"],
        ["artificial intelligence", "inteligencia artificial", "advances in artificial intelligence", "sustantivo"],
        ["sustainable", "sostenible", "sustainable energy", "adjetivo"],
        ["replace", "sustituir", "Robots may replace some jobs.", "verbo"],
        ["a trial", "un ensayo/prueba", "clinical trials", "sustantivo"],
        ["make progress", "avanzar", "make rapid progress", "colocación"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Ciencia",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("An important scientific discovery is a ___.", ["breakthrough", "device", "trial"], 0, "'breakthrough'."),
          mc("A small useful machine is a ___.", ["device", "research", "trial"], 0, "'device'."),
          mc("Very modern, advanced technology is ___.", ["cutting-edge", "sustainable", "artificial"], 0, "'cutting-edge'."),
          mc("Energy that doesn't harm the planet is ___.", ["sustainable", "cutting-edge", "artificial"], 0, "'sustainable'."),
          mc("To create something new is to ___ it.", ["develop", "replace", "resent"], 0, "'develop'."),
          mc("To take the place of something is to ___ it.", ["replace", "develop", "cope with"], 0, "'replace'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 5 (multiple choice)",
      category: "reading", weight: 10,
      title: "Examen semanal — Parte 5 (comprensión)",
      instructions: "Lee y elige la mejor opción.\n\nWhen people imagine scientific discovery, they often picture a lone genius shouting 'Eureka!'. The reality is far less dramatic. Most breakthroughs are the result of years of patient, collaborative work, with many small failures along the way. In fact, some of the most important discoveries — from penicillin to the microwave oven — happened partly by accident, when researchers noticed something unexpected and, crucially, bothered to investigate it. What separates a great scientist from an ordinary one is often not raw intelligence but curiosity: the willingness to ask 'That's strange… why?' rather than ignoring a result that doesn't fit.",
      questions: [
        mc("What does the writer say about scientific discovery?", ["It's usually dramatic.", "It's usually slow and collaborative.", "It needs a lone genius."], 1, "'years of patient, collaborative work'."),
        mc("What is said about penicillin and the microwave?", ["They were planned carefully.", "They happened partly by accident.", "They were never useful."], 1, "'happened partly by accident'."),
        mc("What did researchers do that was 'crucial'?", ["They gave up.", "They investigated the unexpected.", "They ignored strange results."], 1, "'bothered to investigate it'."),
        mc("According to the writer, great scientists mainly have…", ["raw intelligence.", "curiosity.", "luck."], 1, "'not raw intelligence but curiosity'."),
        mc("The phrase 'doesn't fit' refers to a result that is…", ["expected.", "unexpected.", "wrong."], 1, "algo que no encaja = inesperado."),
        mc("The writer's tone is…", ["dismissive.", "informative and thoughtful.", "angry."], 1, "informativo y reflexivo."),
      ],
    },
  },

  {
    n: 12,
    theme: "Énfasis y repaso · Arte y cultura · SIMULACRO FINAL",
    grammar: {
      title: "Estructuras enfáticas (cleft) e inversión + repaso",
      blocks: [
        "Para dar énfasis:\n• What-cleft: What I love is live music. (= I love live music)\n• It-cleft: It was Ana who painted it. (destaca 'Ana')\n• Inversión tras negativos al inicio (registro alto): Never have I seen such talent. Not only did she sing, but she also danced. Rarely do we…\nRepaso: revisa condicionales, pasiva, reporting verbs, wish, relativas y word formation de todo el programa.",
      ],
      exercise: {
        title: "Práctica de gramática — Énfasis",
        instructions: "Reescribe con la estructura enfática.",
        questions: [
          fb("Enfatiza: 'I need a holiday.' → What I ___ a holiday.", ["need is"], "What-cleft: 'What I need is'."),
          fb("Enfatiza: 'Ana broke it.' → It ___ broke it.", ["was Ana who", "was Ana that"], "It-cleft."),
          fb("Invierte: 'I have never seen such a mess.' → Never ___ such a mess.", ["have I seen"], "inversión tras Never."),
          fb("Invierte: 'She not only sings but also acts.' → Not only ___ but she also acts.", ["does she sing"], "inversión tras Not only."),
          fb("Enfatiza: 'We met in Rome.' → It ___ we met.", ["was in Rome that"], "It-cleft de lugar."),
          fb("Invierte: 'We rarely go out.' → Rarely ___ out.", ["do we go"], "inversión tras Rarely."),
        ],
      },
    },
    vocab: {
      title: "Arte, cultura y entretenimiento",
      deck: [
        ["a masterpiece", "una obra maestra", "an artistic masterpiece", "sustantivo"],
        ["thought-provoking", "que hace reflexionar", "a thought-provoking film", "adjetivo"],
        ["overrated", "sobrevalorado", "The book is overrated.", "adjetivo"],
        ["acclaimed", "aclamado", "a critically acclaimed play", "adjetivo"],
        ["portray", "retratar/representar", "The film portrays war.", "verbo"],
        ["a genre", "un género", "the crime genre", "sustantivo"],
        ["mainstream", "convencional/comercial", "mainstream cinema", "adjetivo"],
        ["stand out", "destacar", "Her talent stands out.", "phrasal verb"],
        ["moving", "conmovedor", "a moving performance", "adjetivo"],
        ["stand the test of time", "resistir el paso del tiempo", "It has stood the test of time.", "expresión"],
      ],
      exercise: {
        title: "Práctica de vocabulario — Arte y cultura",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A supreme work of art is a ___.", ["masterpiece", "genre", "trial"], 0, "'masterpiece'."),
          mc("Something that makes you think deeply is ___.", ["thought-provoking", "overrated", "mainstream"], 0, "'thought-provoking'."),
          mc("Praised by critics is ___.", ["acclaimed", "overrated", "moving"], 0, "'acclaimed'."),
          mc("Considered better than it really is is ___.", ["overrated", "acclaimed", "moving"], 0, "'overrated'."),
          mc("To be clearly better than the rest is to ___.", ["stand out", "portray", "replace"], 0, "'stand out'."),
          mc("A film that touches your emotions is ___.", ["moving", "mainstream", "overrated"], 0, "'moving'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 2 (open cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — Parte 2 (open cloze)",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nArt has always played a central role in human society. (1)___ only does it entertain us, but it also challenges the way we see the world. A great painting or film can stay (2)___ our minds for years, making us think (3)___ issues we might otherwise ignore. (4)___ is often forgotten, however, is that appreciating art is a skill that (5)___ be developed. The more we expose (6)___ to different styles, the richer our understanding becomes.",
      questions: [
        fb("Hueco 1", ["Not"], "'Not only does it… but'."),
        fb("Hueco 2", ["in", "on"], "'stay in our minds'."),
        fb("Hueco 3", ["about"], "'think about issues'."),
        fb("Hueco 4", ["What"], "What-cleft: 'What is often forgotten'."),
        fb("Hueco 5", ["can", "must"], "'a skill that can be developed'."),
        fb("Hueco 6", ["ourselves"], "'expose ourselves to'."),
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  B2 First anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "B2 First (Cambridge English: First / FCE)", subtitle: "Programa intensivo de 12 semanas para el examen B2 First.",
      description: "Curso completo de preparación para Cambridge English: First (B2 First / FCE). Programa de 12 semanas (3 meses) con gramática progresiva, vocabulario nuevo y flashcards cada semana, práctica semanal del formato real del examen y simulacros mensuales que estiman tu nota en la Cambridge English Scale. Contenido original para hispanohablantes.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Preparación B2 First (FCE) — Programa de 12 semanas — NOVARA", seoDescription: "Prepara el Cambridge B2 First con un programa semanal completo: gramática, vocabulario, práctica de examen y simulacros.",
      objectives: { create: [
        "Seguir un programa semanal con gramática, vocabulario y práctica de examen.",
        "Dominar la gramática de B2 de forma progresiva y acumulativa.",
        "Ampliar el vocabulario por temas, con flashcards cada semana.",
        "Practicar cada parte real del examen (RUoE, Reading, Writing).",
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

  // ── Módulo 0 — Guía ────────────────────────────────────────────────────────
  const m0 = await createModule("Guía del examen B2 First", "Estructura, puntuación y cómo usar este programa.", 0);
  await createLesson(m0.id, {
    title: "Cómo es el examen y cómo funciona este programa", description: "Las 4 pruebas, la Cambridge Scale y la cadencia semanal.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "El B2 First (FCE) tiene 4 pruebas de igual peso: Reading & Use of English, Writing, Listening y Speaking. Se aprueba con 160 en la Cambridge English Scale (160–190; 180+ ≈ C1)." },
      { type: "GRAMMAR", title: "Cómo usar este programa (12 semanas)", content: "Cada semana tienes: 1) una lección de GRAMÁTICA nueva con ejercicios; 2) una lección de VOCABULARIO con su mazo de flashcards y ejercicios; 3) una PRÁCTICA de una parte real del examen.\nHaz un poco cada día. En la semana 4 y la semana 8 hay un SIMULACRO mensual que estima tu nota." },
      { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["12 semanas 3 meses de preparación.", "Gramática + vocabulario + práctica de examen cada semana.", "Simulacros mensuales (sem. 4 y 8) y FINAL (sem. 12).", "Aprobado B2 = 160 en la Cambridge Scale."] } },
    ],
    pedagogy: { objective: "Entender la estructura del examen y del programa.", summary: "12 semanas; gramática, vocabulario y examen cada semana; simulacros mensuales.", reviewPrompts: ["¿Qué nota necesitas para el B2?", "¿Qué haces cada semana?"] },
  });

  // ── Semanas 1–8 ────────────────────────────────────────────────────────────
  const readingExerciseIds = []; // para los simulacros mensuales
  let sortOrder = 1;
  for (const w of WEEKS) {
    const m = await createModule(`Semana ${w.n} — ${w.theme}`, `Gramática, vocabulario y práctica de examen (semana ${w.n}).`, sortOrder++);

    // Gramática
    await createLesson(m.id, {
      title: `Gramática — ${w.grammar.title}`, description: "Punto gramatical de la semana + práctica.", sortOrder: 0,
      blocks: w.grammar.blocks.map((content, i) => ({ type: "GRAMMAR", title: i === 0 ? w.grammar.title : null, content })),
      pedagogy: { objective: `Dominar: ${w.grammar.title}.`, summary: w.grammar.title, reviewPrompts: ["Repasa lo de semanas anteriores antes de empezar."] },
      exercises: [{ category: "reading", title: w.grammar.exercise.title, instructions: w.grammar.exercise.instructions, questions: w.grammar.exercise.questions }],
    });

    // Vocabulario (con mazo)
    const deck = await db.flashcardDeck.create({
      data: { title: `B2 First — Semana ${w.n}: ${w.vocab.title.replace("Vocabulario — ", "")}`, description: "Vocabulario de la semana.", language: "en", authorId: adminUser.id,
        cards: { create: w.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "B2" })) } },
    });
    await createLesson(m.id, {
      title: `Vocabulario — ${w.vocab.title.replace("Vocabulario — ", "")}`, description: "Palabras nuevas + flashcards + práctica.", sortOrder: 1,
      blocks: [
        { type: "GRAMMAR", title: "Vocabulario de la semana", content: "Estudia el mazo de flashcards y luego haz el ejercicio. Repasa también el vocabulario de semanas anteriores." },
        { type: "FLASHCARDS", deckId: deck.id },
      ],
      pedagogy: { objective: "Ampliar y activar el vocabulario de la semana.", summary: w.vocab.title, reviewPrompts: ["Repasa las flashcards a diario."] },
      exercises: [{ category: "reading", title: w.vocab.exercise.title, instructions: w.vocab.exercise.instructions, questions: w.vocab.exercise.questions }],
    });

    // Práctica de examen (parte real)
    const ids = await createLesson(m.id, {
      title: `Práctica de examen — ${w.exam.part}`, description: "Ejercicio con el formato real del examen.", sortOrder: 2,
      blocks: [{ type: "GRAMMAR", title: "Práctica semanal de examen", content: `Esta semana practicas: ${w.exam.part}. Hazlo como si fuera el examen real.` }],
      pedagogy: { objective: `Practicar el formato real: ${w.exam.part}.`, summary: w.exam.part, reviewPrompts: ["Cronométrate para acostumbrarte al ritmo del examen."] },
      exercises: [{ category: w.exam.category, title: w.exam.title, instructions: w.exam.instructions, questions: w.exam.questions }],
    });
    if (w.exam.category === "reading") readingExerciseIds.push({ id: ids[0], weight: w.exam.weight });

    // Simulacro mensual (semanas 4 y 8)
    if (w.monthlyMock) {
      const mockReading = readingExerciseIds.slice();
      const exam = await db.exam.create({
        data: {
          courseId: course.id, title: `Simulacro Mensual ${w.monthlyMock} — Use of English & Reading (B2 First)`,
          passingScore: 60, timeLimitMinutes: 60,
          sections: { create: mockReading.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) },
        },
      });
      const mm = await createModule(`🎯 Simulacro Mensual ${w.monthlyMock}`, `Examen de práctica del mes ${w.monthlyMock}.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Simulacro Mensual ${w.monthlyMock}`, description: "Mide si alcanzarías la nota Cambridge.", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne todas las partes auto-corregibles de Reading & Use of English vistas hasta ahora, cronometradas. Aprueba con un 60% (≈160 en la Cambridge Scale). Writing, Listening y Speaking se evalúan aparte, como en el examen real. Tu resultado te dice si, con tu rendimiento actual, alcanzarías el B2.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Comprobar tu preparación real bajo condiciones de examen.", summary: `Simulacro del mes ${w.monthlyMock}; aprobado 60%.`, reviewPrompts: ["Si no llegas a 60%, repasa las semanas anteriores."] },
      });
    }

    if (w.finalMock) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: "Simulacro FINAL — Use of English & Reading (B2 First)", passingScore: 60, timeLimitMinutes: 75,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule("🎯 Simulacro FINAL", "Examen final en condiciones lo más parecidas al examen real.", sortOrder++);
      await createLesson(mm.id, {
        title: "Simulacro FINAL — Use of English & Reading", description: "El examen del final del programa: ¿alcanzas la nota B2?", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne TODAS las partes auto-corregibles de Use of English & Reading del programa, cronometradas y en condiciones de examen. Aprueba con un 60% (≈160, la nota de corte del B2). Según tu resultado, la plataforma te dirá si estás listo para inscribirte al examen oficial o te preparará un plan de refuerzo.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Confirmar si alcanzarías la nota real del B2.", summary: "Simulacro final; aprobado 60% ≈ 160.", reviewPrompts: ["Si no llegas, sigue tu plan de refuerzo."] },
      });
    }
  }

  // ── Módulo final — Listening y Speaking (audio británico real) ─────────────
  const ms = await createModule("Listening y Speaking", "Práctica con audio británico real y conversación por voz.", sortOrder++);
  const talk = "In today's session, I want to talk about the importance of reading widely. Many students focus only on their textbooks, but reading novels, articles and even comics in English exposes you to natural language and new vocabulary in context. The trick is not to look up every single word; instead, try to guess meaning from the surrounding text. Over time, this habit will do more for your English than any grammar drill.";
  const talkAudio = await generateListeningAudio(talk, "b2-reading-widely");
  console.warn(talkAudio ? `🔊 Audio Listening: ${talkAudio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — La importancia de leer mucho", description: "Escucha (voz británica) y responde.", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír una charla breve. Fíjate en la idea principal y el consejo final. Puedes repetir el audio." },
      ...(talkAudio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Captar idea principal y detalle en un monólogo B2.", commonMistakes: ["Quedarse en lo literal.", "No captar el consejo."], reviewPrompts: ["¿Qué consejo da sobre el vocabulario?"] },
    exercises: talkAudio ? [{ category: "listening", config: { audioUrl: talkAudio }, title: "Charla — leer mucho", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("What is the speaker mainly recommending?", ["Reading only textbooks", "Reading widely in English", "Memorising grammar"], 1, "'the importance of reading widely'."),
      mc("What should you NOT do, according to the speaker?", ["Guess meaning from context", "Look up every single word", "Read novels"], 1, "'not to look up every single word'."),
      mc("What does the speaker say is most effective?", ["Grammar drills", "The habit of reading widely", "Using a dictionary constantly"], 1, "'more for your English than any grammar drill'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Conversación por voz (B2)", description: "Habla con la IA (voz británica): opiniones y matices.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. Debatiréis sobre los exámenes. Da y justifica opiniones. Al terminar, 'Finalizar y evaluar'. Requiere micrófono y los servicios locales.\nImportante: abre la app en http://localhost:3001 (no en la IP de red) para que el micrófono funcione." }],
    pedagogy: { objective: "Expresar y justificar opiniones (B2).", summary: "Conversación por voz con la IA.", reviewPrompts: ["¿Cómo introduces y matizas una opinión en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "B2", scenario: "un debate sobre si los exámenes son la mejor forma de evaluar; se contrastan opiniones", objective: "que el alumno exprese y justifique opiniones y reaccione a las del interlocutor", keywords: "In my opinion, on the other hand, I'd argue that, that's a fair point" }, title: "Debate: ¿sirven los exámenes?", instructions: "Debate con la IA.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "B2 First — Semana" } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ B2 First (programa 12 semanas) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error B2:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
