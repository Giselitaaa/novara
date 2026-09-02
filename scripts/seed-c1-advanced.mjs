/**
 * C1 Advanced (Cambridge English: Advanced / CAE) — PROGRAMA COMPLETO.
 *
 * Currículo de 10 SEMANAS (≈2,5 meses), nivel avanzado, con cadencia de academia:
 *   • Gramática avanzada progresiva cada semana (repaso acumulativo).
 *   • Vocabulario sofisticado nuevo cada semana, con su mazo de flashcards.
 *   • Práctica semanal del formato REAL de una parte del examen (RUoE / Writing).
 *   • Simulacros mensuales (sem. 4 y 8) y FINAL (sem. 12) que estima tu nota Cambridge.
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * Escala C1 Advanced: 160–210, aprobado 180.
 *
 * Idempotente. No toca otros cursos.   node scripts/seed-c1-advanced.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "c1-advanced";
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

const WEEKS = [
  {
    n: 1,
    theme: "Aspecto perfecto y continuo · Personalidad",
    grammar: {
      title: "Aspecto perfecto y continuo (matices avanzados)",
      blocks: [
        "El aspecto PERFECTO (have + participio) conecta dos momentos: present perfect (relevancia ahora), past perfect (anterioridad en el pasado).\nEl CONTINUO (be + -ing) marca acciones en desarrollo, temporales o incompletas: present perfect continuous (I've been working — énfasis en la duración/actividad), past continuous.\nUsos avanzados: continuous para hábitos temporales o molestos con 'always' (He's always interrupting me = costumbre irritante); perfect continuous para justificar un estado presente (I'm tired because I've been running).",
      ],
      exercise: {
        title: "Práctica — Aspecto",
        instructions: "Completa con la forma más adecuada.",
        questions: [
          fb("My eyes hurt because I ___ (stare) at a screen all day.", ["have been staring", "'ve been staring"], "Actividad reciente que explica un estado → present perfect continuous."),
          fb("By the time the guests arrived, she ___ (already/prepare) everything.", ["had already prepared"], "Anterioridad en el pasado → past perfect."),
          fb("He ___ (constantly/complain) about his job — it's exhausting to listen to.", ["is constantly complaining", "'s constantly complaining"], "Hábito molesto → present continuous con 'constantly'."),
          fb("They were exhausted; they ___ (walk) for hours.", ["had been walking"], "Duración previa a un momento pasado → past perfect continuous."),
          fb("I ___ (know) her for over a decade.", ["have known", "'ve known"], "Verbo de estado + duración → present perfect (no continuo)."),
          fb("Prices ___ (rise) steadily since January.", ["have risen", "have been rising"], "Tendencia hasta ahora → present perfect (continuo o simple)."),
        ],
      },
    },
    vocab: {
      title: "Personalidad y relaciones",
      deck: [
        ["self-assured", "seguro de sí mismo", "a calm, self-assured manner", "adjetivo"],
        ["approachable", "accesible / cercano", "The manager is very approachable.", "adjetivo"],
        ["condescending", "condescendiente", "a condescending tone", "adjetivo"],
        ["hit it off", "congeniar", "We hit it off immediately.", "idiom"],
        ["see eye to eye", "estar de acuerdo", "We don't always see eye to eye.", "idiom"],
        ["a fall-out", "una pelea / distanciamiento", "They had a fall-out.", "sustantivo"],
        ["patch things up", "reconciliarse", "They patched things up.", "phrasal verb"],
        ["take a liking to", "tomar cariño a", "She took a liking to him.", "expresión"],
        ["rub someone up the wrong way", "caer mal / irritar", "He rubs me up the wrong way.", "idiom"],
        ["a kindred spirit", "un alma gemela", "We're kindred spirits.", "expresión"],
      ],
      exercise: {
        title: "Práctica — Personalidad",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Someone easy to talk to is ___.", ["condescending", "approachable", "self-assured"], 1, "'approachable' = accesible."),
          mc("To get along well with someone from the start is to ___.", ["hit it off", "fall out", "see eye to eye"], 0, "'hit it off'."),
          mc("To share the same views is to ___.", ["patch things up", "see eye to eye", "rub up the wrong way"], 1, "'see eye to eye'."),
          mc("To become friends again after an argument is to ___.", ["fall out", "patch things up", "take a liking to"], 1, "'patch things up'."),
          mc("A talking-down, superior tone is ___.", ["approachable", "condescending", "self-assured"], 1, "'condescending'."),
          mc("A person who irritates you ___ you.", ["hits it off with", "sees eye to eye with", "rubs up the wrong way"], 2, "'rub someone up the wrong way'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 1 (multiple-choice cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 1",
      instructions: "Elige la opción correcta (A–D). Texto:\n\nProcrastination is a phenomenon that (1)___ nearly everyone at some point. Contrary to popular belief, it is rarely a (2)___ of laziness; more often, it (3)___ from a fear of failure. Psychologists have (4)___ that the temporary relief we feel when we avoid a task actually (5)___ the habit. The key, they argue, lies in (6)___ tasks down into small steps, so that we gradually (7)___ momentum and (8)___ the anxiety that fuels avoidance.",
      questions: [
        mc("Hueco 1", ["affects", "effects", "reflects", "regards"], 0, "'affect' (verbo) = afectar."),
        mc("Hueco 2", ["sign", "signal", "mark", "trace"], 0, "'a sign of'."),
        mc("Hueco 3", ["stems", "raises", "brings", "makes"], 0, "'stem from' = tener su origen en."),
        mc("Hueco 4", ["shown", "told", "informed", "advised"], 0, "'show that + oración'."),
        mc("Hueco 5", ["reinforces", "confirms", "insists", "persists"], 0, "'reinforce a habit'."),
        mc("Hueco 6", ["breaking", "cutting", "tearing", "falling"], 0, "'break tasks down'."),
        mc("Hueco 7", ["build", "rise", "grow", "lift"], 0, "'build momentum'."),
        mc("Hueco 8", ["reduce", "shorten", "lighten", "narrow"], 0, "'reduce anxiety'."),
      ],
    },
  },

  {
    n: 2,
    theme: "Tiempos narrativos · Trabajo",
    grammar: {
      title: "Tiempos narrativos y past perfect continuous",
      blocks: [
        "Para narrar, se combinan: past simple (hechos), past continuous (fondo/acción en desarrollo), past perfect (lo anterior), past perfect continuous (duración anterior).\nEjemplo: 'She was exhausted (estado). She had been travelling (duración previa) for eighteen hours, and her flight had been delayed (anterior) twice.'\nUsa el past perfect solo cuando el orden temporal no está claro por el contexto.",
      ],
      exercise: {
        title: "Práctica — Narrar en pasado",
        instructions: "Completa con el tiempo narrativo adecuado.",
        questions: [
          fb("When I woke up, it ___ (snow) — everything was white.", ["had snowed", "had been snowing"], "Resultado visible de algo anterior → past perfect (continuo)."),
          fb("She ___ (wait) for an hour before the bus finally came.", ["had been waiting"], "Duración anterior a otro suceso pasado → past perfect continuous."),
          fb("As I ___ (walk) home, I noticed a strange light in the sky.", ["was walking"], "Fondo de la narración → past continuous."),
          fb("He didn't recognise her because she ___ (change) so much.", ["had changed"], "Anterior a 'didn't recognise' → past perfect."),
          fb("The ground was wet, so it ___ (rain) during the night.", ["had rained", "had been raining"], "Deducción de algo anterior → past perfect."),
          fb("They ___ (argue) all evening, and by midnight nobody was speaking.", ["had been arguing"], "Duración prolongada anterior → past perfect continuous."),
        ],
      },
    },
    vocab: {
      title: "Trabajo y ambición",
      deck: [
        ["climb the ladder", "ascender profesionalmente", "She's climbing the corporate ladder.", "idiom"],
        ["a stepping stone", "un trampolín", "The job was a stepping stone.", "expresión"],
        ["be snowed under", "estar desbordado de trabajo", "I'm snowed under this week.", "idiom"],
        ["delegate", "delegar", "A good leader delegates tasks.", "verbo"],
        ["burn the midnight oil", "trasnochar trabajando", "I burned the midnight oil to finish.", "idiom"],
        ["a high-flyer", "una persona de éxito meteórico", "She's a real high-flyer.", "sustantivo"],
        ["cut corners", "hacer chapuzas / ahorrar esfuerzo", "Don't cut corners on safety.", "idiom"],
        ["meet targets", "cumplir objetivos", "The team met its targets.", "colocación"],
        ["a demanding role", "un puesto exigente", "a demanding but rewarding role", "colocación"],
        ["go the extra mile", "hacer un esfuerzo extra", "She always goes the extra mile.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Trabajo",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To be overwhelmed with work is to be ___.", ["a high-flyer", "snowed under", "a stepping stone"], 1, "'snowed under'."),
          mc("To do only the minimum, badly, is to ___.", ["go the extra mile", "cut corners", "delegate"], 1, "'cut corners'."),
          mc("A job that leads to a better one is a ___.", ["stepping stone", "high-flyer", "target"], 0, "'stepping stone'."),
          mc("To make an exceptional effort is to ___.", ["cut corners", "go the extra mile", "burn out"], 1, "'go the extra mile'."),
          mc("To rise in your career is to ___.", ["climb the ladder", "meet targets", "delegate"], 0, "'climb the ladder'."),
          mc("An ambitious, very successful person is a ___.", ["stepping stone", "high-flyer", "target"], 1, "'high-flyer'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 2 (open cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 2",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nHabits are formed (1)___ repeating an action until it becomes automatic. (2)___ than relying on willpower, which is easily exhausted, we should focus on our surroundings. (3)___ instance, keeping healthy food visible makes us far more (4)___ to eat it. Over time, the behaviour comes to require (5)___ conscious effort at all. This is (6)___ small changes to our environment can have such a powerful effect.",
      questions: [
        fb("Hueco 1", ["by"], "'by + -ing' = mediante."),
        fb("Hueco 2", ["Rather"], "'Rather than' = en vez de."),
        fb("Hueco 3", ["For"], "'For instance' = por ejemplo."),
        fb("Hueco 4", ["likely"], "'more likely to' = más probable que."),
        fb("Hueco 5", ["no", "little"], "'require no/little conscious effort' = ningún/poco esfuerzo."),
        fb("Hueco 6", ["why"], "'This is why' = por eso."),
      ],
    },
  },

  {
    n: 3,
    theme: "Formación de palabras · Educación",
    grammar: {
      title: "Formación de palabras: nominalización y afijos",
      blocks: [
        "En C1 se domina la derivación: sustantivos abstractos (- tion, -ment, -ness, -ity, -ance), adjetivos (-ive, -ous, -al, -able), adverbios (-ly) y prefijos negativos (un-, in-, im-, ir-, dis-, mis-).\nNominalización: convertir verbos/adjetivos en sustantivos para un estilo más formal (decide → decision; able → ability).\nOjo con cambios de raíz (strong → strength; wide → width) y con dobles cambios (create → creativity).",
      ],
      exercise: {
        title: "Práctica — Formación de palabras",
        instructions: "Forma la palabra derivada.",
        questions: [
          fb("The government's ___ (decide) surprised everyone.", ["decision"], "Sustantivo: 'decision'."),
          fb("His ___ (able) to stay calm is impressive.", ["ability"], "Sustantivo: 'ability'."),
          fb("She spoke with great ___ (confident).", ["confidence"], "Sustantivo: 'confidence'."),
          fb("The plan was completely ___ (practical). (negativo)", ["impractical"], "Prefijo negativo: 'impractical'."),
          fb("They admired the ___ (wide) of his knowledge.", ["width", "breadth"], "Sustantivo con cambio de raíz: 'width/breadth'."),
          fb("His argument was ___ (convince).", ["convincing"], "Adjetivo: 'convincing'."),
        ],
      },
    },
    vocab: {
      title: "Educación y conocimiento",
      deck: [
        ["grasp a concept", "captar un concepto", "She quickly grasped the concept.", "colocación"],
        ["broaden your horizons", "ampliar horizontes", "Travel broadens your horizons.", "idiom"],
        ["a steep learning curve", "una curva de aprendizaje pronunciada", "It was a steep learning curve.", "expresión"],
        ["retain information", "retener información", "I struggle to retain information.", "colocación"],
        ["food for thought", "algo en qué pensar", "The lecture gave us food for thought.", "idiom"],
        ["a well-rounded education", "una educación integral", "a well-rounded education", "colocación"],
        ["get to grips with", "hacerse con / entender", "get to grips with the material", "idiom"],
        ["think outside the box", "pensar de forma original", "We need to think outside the box.", "idiom"],
        ["a wealth of knowledge", "un gran caudal de conocimiento", "She has a wealth of knowledge.", "expresión"],
        ["absorb", "asimilar", "Children absorb languages quickly.", "verbo"],
      ],
      exercise: {
        title: "Práctica — Educación",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("To understand a difficult idea is to ___.", ["grasp a concept", "cut corners", "retain"], 0, "'grasp a concept'."),
          mc("To widen your experience and views is to ___.", ["broaden your horizons", "retain information", "absorb"], 0, "'broaden your horizons'."),
          mc("To think creatively is to ___.", ["food for thought", "think outside the box", "get to grips"], 1, "'think outside the box'."),
          mc("Something that makes you reflect is ___.", ["a wealth of knowledge", "food for thought", "a learning curve"], 1, "'food for thought'."),
          mc("To start understanding something difficult is to ___ it.", ["broaden", "get to grips with", "absorb"], 1, "'get to grips with'."),
          mc("A balanced education covering many areas is ___.", ["a steep learning curve", "a well-rounded education", "food for thought"], 1, "'a well-rounded education'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 3 (word formation)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 3",
      instructions: "Forma la palabra que encaje a partir de la RAÍZ. Texto:\n\nCreativity is often (1)___ (WRONG) believed to be an inborn talent that only a (2)___ (LUCK) few possess. In (3)___ (REAL), research suggests it can be developed through (4)___ (PRACTISE) and the right environment. People who approach problems with (5)___ (CURIOUS) and are not afraid of (6)___ (FAIL) tend to produce more (7)___ (ORIGIN) ideas, and this can have a (8)___ (SIGNIFY) impact on innovation.",
      questions: [
        fb("Hueco 1 (WRONG)", ["wrongly"], "Adverbio: 'wrongly'."),
        fb("Hueco 2 (LUCK)", ["lucky"], "Adjetivo: 'lucky'."),
        fb("Hueco 3 (REAL)", ["reality"], "'in reality'."),
        fb("Hueco 4 (PRACTISE)", ["practice"], "Sustantivo: 'practice'."),
        fb("Hueco 5 (CURIOUS)", ["curiosity"], "Sustantivo: 'curiosity'."),
        fb("Hueco 6 (FAIL)", ["failure"], "Sustantivo: 'failure'."),
        fb("Hueco 7 (ORIGIN)", ["original"], "Adjetivo: 'original'."),
        fb("Hueco 8 (SIGNIFY)", ["significant"], "Adjetivo: 'significant'."),
      ],
    },
  },

  {
    n: 4,
    theme: "Condicionales avanzados · Ciencia · SIMULACRO Mes 1",
    grammar: {
      title: "Condicionales mixtos e inversión formal",
      blocks: [
        "Mixtos: If I had studied medicine (pasado), I would be a doctor now (presente).\nInversión (registro formal, sin 'if'):\n- Had I known… = If I had known…\n- Were I to fail… = If I were to fail…\n- Should you need help… = If you should need help…\nTambién con 'wish/if only' + past perfect para arrepentimientos.",
      ],
      exercise: {
        title: "Práctica — Condicionales e inversión",
        instructions: "Completa (usa inversión donde se pida).",
        questions: [
          fb("If I had taken that job, I ___ (live) abroad now. (mixta)", ["would be living", "would live"], "Mixta: pasado → presente."),
          fb("___ I known the truth, I would have acted differently. (inversión de 'If I had')", ["Had"], "Inversión: 'Had I known…'."),
          fb("___ you need any assistance, please contact us. (inversión de 'If you should')", ["Should"], "Inversión: 'Should you need…'."),
          fb("___ it not for her help, we would have failed. (inversión de 'If it were not')", ["Were"], "Inversión: 'Were it not for…'."),
          fb("If only I ___ (listen) to your advice back then!", ["had listened"], "Arrepentimiento pasado → 'if only + past perfect'."),
          fb("If we had left earlier, we ___ (not/be) stuck in traffic now.", ["wouldn't be", "would not be"], "Mixta: pasado → presente."),
        ],
      },
    },
    vocab: {
      title: "Ciencia y descubrimiento",
      deck: [
        ["a breakthrough", "un avance decisivo", "a scientific breakthrough", "sustantivo"],
        ["carry out research", "llevar a cabo investigación", "They carried out research.", "colocación"],
        ["a hypothesis", "una hipótesis", "test a hypothesis", "sustantivo"],
        ["cutting-edge", "de vanguardia", "cutting-edge research", "adjetivo"],
        ["prove", "demostrar / resultar", "The theory proved correct.", "verbo"],
        ["a trial", "un ensayo / prueba", "clinical trials", "sustantivo"],
        ["come to light", "salir a la luz", "New evidence has come to light.", "idiom"],
        ["far-reaching", "de gran alcance", "far-reaching consequences", "adjetivo"],
        ["debunk", "desmentir", "The study debunked the myth.", "verbo"],
        ["groundbreaking", "innovador / pionero", "groundbreaking work", "adjetivo"],
      ],
      exercise: {
        title: "Práctica — Ciencia",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("An important new discovery is a ___.", ["hypothesis", "breakthrough", "trial"], 1, "'breakthrough'."),
          mc("An idea to be tested is a ___.", ["hypothesis", "trial", "breakthrough"], 0, "'hypothesis'."),
          mc("To conduct experiments is to ___.", ["debunk", "carry out research", "come to light"], 1, "'carry out research'."),
          mc("To disprove a false belief is to ___ it.", ["prove", "debunk", "trial"], 1, "'debunk'."),
          mc("Effects that are wide and important are ___.", ["far-reaching", "cutting-edge", "groundbreaking"], 0, "'far-reaching'."),
          mc("Highly innovative, pioneering work is ___.", ["a trial", "groundbreaking", "a hypothesis"], 1, "'groundbreaking'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 4 (key word transformations)",
      category: "reading", weight: 12,
      title: "Examen semanal — RUoE Parte 4",
      instructions: "Reescribe la segunda frase (3–6 palabras) con la PALABRA CLAVE. Escribe SOLO lo que falta.",
      questions: [
        fb("1) 'I'm sure he forgot about the meeting.'  (SLIPPED)\n→ The meeting ___ mind.", ["must have slipped his"], "'must have slipped his mind'."),
        fb("2) 'It was a mistake to lend him the money.'  (REGRET)\n→ I ___ him the money.", ["regret lending"], "'regret + -ing'."),
        fb("3) 'The team won, which nobody had expected.'  (SURPRISE)\n→ The team won, ___ everyone.", ["to the surprise of"], "'to the surprise of'."),
        fb("4) 'You should have told me earlier.'  (WISH)\n→ I ___ me earlier.", ["wish you had told"], "'wish + past perfect'."),
        fb("5) 'He didn't realise the danger until it was too late.'  (DAWN)\n→ The danger ___ until it was too late.", ["did not dawn on him", "didn't dawn on him"], "'dawn on somebody'."),
        fb("6) 'I'd prefer you not to smoke here.'  (MIND)\n→ Would ___ here?", ["you mind not smoking"], "'Would you mind + not + -ing?'"),
      ],
    },
    monthlyMock: 1,
  },

  {
    n: 5,
    theme: "Modales de deducción · Sociedad",
    grammar: {
      title: "Modales de deducción y especulación (presente y pasado)",
      blocks: [
        "Presente: must be (seguro que sí), can't/couldn't be (imposible), might/may/could be (quizá).\nPasado (modal + have + participio): must have been, can't have been, might/could have been.\nEspeculación con 'be bound to' (seguro que), 'be likely/unlikely to'.\nEj.: 'She's not answering — she must have left already; she can't still be at work.'",
      ],
      exercise: {
        title: "Práctica — Deducción",
        instructions: "Completa con el modal adecuado.",
        questions: [
          fb("The lights are off — they ___ (must) gone out. (seguro)", ["must have"], "Deducción segura pasada → 'must have gone'."),
          fb("He ___ (can't) heard me; he didn't react at all. (imposible)", ["can't have", "cannot have"], "Deducción negativa pasada."),
          fb("She's not here yet; she ___ (might) stuck in traffic. (quizá)", ["might be", "may be", "could be"], "Posibilidad presente."),
          fb("It's a great script, so the film ___ (be bound) to succeed. (seguro que)", ["is bound"], "'be bound to' = seguro que."),
          fb("They ___ (can't) be tired already — they've only just started.", ["can't", "cannot"], "Deducción negativa presente."),
          fb("Someone ___ (must) taken my umbrella by mistake. (seguro)", ["must have"], "Deducción segura pasada."),
        ],
      },
    },
    vocab: {
      title: "Sociedad y cambio",
      deck: [
        ["a turning point", "un punto de inflexión", "a turning point in history", "expresión"],
        ["widespread", "generalizado", "widespread support", "adjetivo"],
        ["the gap between", "la brecha entre", "the gap between rich and poor", "colocación"],
        ["bring about", "provocar / ocasionar", "bring about change", "phrasal verb"],
        ["a shift in", "un cambio en", "a shift in attitudes", "colocación"],
        ["marginalised", "marginado", "marginalised communities", "adjetivo"],
        ["tackle a problem", "abordar un problema", "tackle inequality", "colocación"],
        ["deep-rooted", "profundamente arraigado", "deep-rooted prejudice", "adjetivo"],
        ["raise awareness", "concienciar", "raise awareness of the issue", "colocación"],
        ["at odds with", "en desacuerdo con", "at odds with tradition", "expresión"],
      ],
      exercise: {
        title: "Práctica — Sociedad",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A key moment of change is a ___.", ["turning point", "shift", "gap"], 0, "'turning point'."),
          mc("Prejudice that is firmly established is ___.", ["widespread", "deep-rooted", "marginalised"], 1, "'deep-rooted'."),
          mc("To deal with a difficult issue is to ___ it.", ["bring about", "tackle", "raise"], 1, "'tackle a problem'."),
          mc("To cause something to happen is to ___ it.", ["bring about", "tackle", "shift"], 0, "'bring about'."),
          mc("Groups pushed to the edge of society are ___.", ["deep-rooted", "widespread", "marginalised"], 2, "'marginalised'."),
          mc("Common across a large area or group is ___.", ["widespread", "at odds", "deep-rooted"], 0, "'widespread'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 5 (multiple choice)",
      category: "reading", weight: 12,
      title: "Examen semanal — RUoE Parte 5",
      instructions: "Lee y elige la mejor opción.\n\nWe tend to treat boredom as a problem to be solved, reaching for our phones the moment a queue forms. Yet research suggests we may be depriving ourselves of something valuable. Boredom is not merely the absence of stimulation but a state that nudges the mind towards reflection and creativity. When we are bored, the brain does not switch off; it drifts, making unexpected connections that a focused mind would never stumble upon. Studies show that people given a dull task before a creative one consistently outperform those who go straight to the challenge. The implication is uncomfortable for a culture addicted to entertainment: by eliminating every empty moment, we may be eliminating the very conditions in which original thought flourishes. None of this romanticises boredom, which in excess can tip into apathy. The point is subtler: a life endlessly filled with effortless distraction is not necessarily richer.",
      questions: [
        mc("What is the writer's main argument?", ["Boredom is always harmful.", "Boredom can be beneficial.", "Phones cause boredom."], 1, "'we may be depriving ourselves of something valuable'."),
        mc("What does the brain do when we are bored?", ["It switches off.", "It drifts and makes connections.", "It focuses harder."], 1, "'it drifts, making unexpected connections'."),
        mc("What did the studies find?", ["A dull task before a creative one improves creativity.", "Creative people are never bored.", "Boredom reduces performance."], 0, "'given a dull task before a creative one consistently outperform'."),
        mc("Why is the implication 'uncomfortable' for modern culture?", ["Entertainment is expensive.", "Constant entertainment may remove the conditions for original thought.", "People dislike creativity."], 1, "'eliminating the very conditions in which original thought flourishes'."),
        mc("The writer's overall view of boredom is that it is…", ["entirely positive.", "potentially valuable but not to be idealised.", "completely negative."], 1, "'None of this romanticises boredom… The point is subtler.'"),
        mc("'Tip into apathy' suggests boredom can…", ["turn into a lack of interest.", "become exciting.", "improve mood."], 0, "'apathy' = falta de interés."),
      ],
    },
  },

  {
    n: 6,
    theme: "Pasiva avanzada · Medios",
    grammar: {
      title: "Pasiva impersonal y causativa",
      blocks: [
        "Pasiva impersonal (reportar opiniones sin sujeto claro): It is said/believed/thought that… + oración; o She is said/believed to + infinitivo (He is thought to be abroad).\nCausativa: have/get something done (I had the report proofread).\nPasiva con verbos de dos objetos: She was given a prize / A prize was given to her.",
      ],
      exercise: {
        title: "Práctica — Pasiva",
        instructions: "Transforma o completa.",
        questions: [
          fb("People say he is very wealthy.  → He ___ to be very wealthy.", ["is said"], "Pasiva impersonal: 'is said to be'."),
          fb("They believe the painting is a fake.  → The painting ___ to be a fake.", ["is believed"], "'is believed to be'."),
          fb("It ___ (think) that the fire started in the kitchen.", ["is thought"], "'It is thought that…'."),
          fb("I ___ my suit ___ (clean) for the interview. (causativa)", ["had my suit cleaned"], "'have something done'."),
          fb("Active: 'They offered her the job.'  Passive: She ___ the job.", ["was offered"], "Pasiva con objeto indirecto: 'was offered'."),
          fb("The bridge ___ (repair) at the moment.", ["is being repaired"], "Present continuous pasiva."),
        ],
      },
    },
    vocab: {
      title: "Medios e influencia",
      deck: [
        ["sensationalism", "sensacionalismo", "tabloid sensationalism", "sustantivo"],
        ["coverage", "cobertura", "extensive media coverage", "sustantivo"],
        ["biased", "sesgado", "biased reporting", "adjetivo"],
        ["misinformation", "desinformación", "spread misinformation", "sustantivo"],
        ["a scoop", "una exclusiva", "The journalist got a scoop.", "sustantivo"],
        ["shape opinion", "moldear la opinión", "The media shapes public opinion.", "colocación"],
        ["a source", "una fuente", "an unnamed source", "sustantivo"],
        ["go viral", "hacerse viral", "The clip went viral.", "colocación"],
        ["scrutiny", "escrutinio / examen atento", "public scrutiny", "sustantivo"],
        ["fabricate", "inventar / falsear", "fabricate a story", "verbo"],
      ],
      exercise: {
        title: "Práctica — Medios",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Exaggerated, shocking reporting is ___.", ["coverage", "sensationalism", "a source"], 1, "'sensationalism'."),
          mc("An exclusive, important news story is a ___.", ["scoop", "scrutiny", "source"], 0, "'scoop'."),
          mc("Deliberately false information is ___.", ["coverage", "misinformation", "a source"], 1, "'misinformation'."),
          mc("Careful, critical examination is ___.", ["scrutiny", "coverage", "a scoop"], 0, "'scrutiny'."),
          mc("To influence what people think is to ___.", ["fabricate", "shape opinion", "go viral"], 1, "'shape opinion'."),
          mc("To invent a false story is to ___ it.", ["fabricate", "cover", "scrutinise"], 0, "'fabricate'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 7 (gapped text)",
      category: "reading", weight: 10,
      title: "Examen semanal — RUoE Parte 7",
      instructions: "Elige la frase (A–E) que va en cada hueco. SOBRAN dos.\n\nIn seventeenth-century England, coffee houses became the unlikely engines of intellectual life. [HUECO 1] For the price of a single cup, anyone could enter, sit down and join the conversation. [HUECO 2] Merchants, scientists and politicians rubbed shoulders, exchanging news and arguing over the issues of the day. [HUECO 3] Indeed, several major institutions can trace their origins to these bustling rooms.\n\nFRASES:\nA. This openness was remarkable for such a hierarchical society.\nB. Unlike taverns, which served alcohol and encouraged rowdiness, coffee houses prized sober discussion.\nC. Out of these exchanges, entire businesses and even scientific societies were born.\nD. Coffee is now the world's most popular drink.\nE. Most people preferred to drink tea at home.",
      questions: [
        mc("HUECO 1", ["C (de esos intercambios nacieron negocios)", "A (esa apertura era notable)", "E (preferían el té en casa)", "B (a diferencia de las tabernas, valoraban la conversación sobria)", "D (el café es hoy la bebida más popular)"], 3, "Tras 'engines of intellectual life', B explica por qué (a diferencia de tabernas)."),
        mc("HUECO 2", ["C", "A (esa apertura era notable en una sociedad jerárquica)", "E", "B", "D"], 1, "Tras 'anyone could join', A ('This openness was remarkable…') se refiere a esa apertura."),
        mc("HUECO 3", ["C (de esos intercambios nacieron negocios)", "A", "E", "B", "D"], 0, "Antes de 'Indeed, several institutions…', C ('Out of these exchanges… were born'). D y E sobran."),
      ],
    },
  },

  {
    n: 7,
    theme: "Relativas y participios · Medioambiente",
    grammar: {
      title: "Relativas reducidas y cláusulas de participio",
      blocks: [
        "Relativas con preposición (formal): the person to whom I spoke; the issue on which we disagree.\nRelativas reducidas: 'the man who is standing there' → 'the man standing there'; 'the report which was written by Ana' → 'the report written by Ana'.\nCláusulas de participio: 'Having finished the report, she left.' (= After she had finished…); 'Not knowing what to do, he waited.'",
      ],
      exercise: {
        title: "Práctica — Relativas y participios",
        instructions: "Completa correctamente.",
        questions: [
          fb("The colleague ___ whom I share an office is very tidy.", ["with"], "Relativa con preposición: 'with whom I share'."),
          fb("Reduce: 'The people who were waiting outside…' → The people ___ outside…", ["waiting"], "Relativa reducida (activa): 'waiting'."),
          fb("Reduce: 'The novel which was written in 1920…' → The novel ___ in 1920…", ["written"], "Relativa reducida (pasiva): 'written'."),
          fb("___ (finish) her degree, she moved abroad. (cláusula de participio)", ["Having finished"], "'Having + participio' = tras terminar."),
          fb("___ (not/know) the answer, he stayed silent.", ["Not knowing"], "Participio negativo: 'Not knowing'."),
          fb("This is the town in ___ I was born.", ["which"], "Relativa formal de lugar: 'in which'."),
        ],
      },
    },
    vocab: {
      title: "Medioambiente y sostenibilidad",
      deck: [
        ["carbon footprint", "huella de carbono", "reduce your carbon footprint", "colocación"],
        ["sustainable", "sostenible", "sustainable development", "adjetivo"],
        ["depletion", "agotamiento", "resource depletion", "sustantivo"],
        ["offset", "compensar", "offset carbon emissions", "verbo"],
        ["conservation", "conservación", "wildlife conservation", "sustantivo"],
        ["a tipping point", "un punto de no retorno", "a climate tipping point", "expresión"],
        ["phase out", "eliminar progresivamente", "phase out fossil fuels", "phrasal verb"],
        ["biodiversity", "biodiversidad", "protect biodiversity", "sustantivo"],
        ["emissions", "emisiones", "cut emissions", "sustantivo"],
        ["greenwashing", "ecoblanqueo", "accused of greenwashing", "sustantivo"],
      ],
      exercise: {
        title: "Práctica — Medioambiente",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Using resources without exhausting them is ___.", ["depletion", "sustainable", "emissions"], 1, "'sustainable'."),
          mc("The gradual exhaustion of resources is ___.", ["conservation", "depletion", "offset"], 1, "'depletion'."),
          mc("To gradually stop using something is to ___ it.", ["offset", "phase out", "deplete"], 1, "'phase out'."),
          mc("Pretending to be environmentally friendly is ___.", ["conservation", "greenwashing", "biodiversity"], 1, "'greenwashing'."),
          mc("The variety of living species is ___.", ["biodiversity", "emissions", "depletion"], 0, "'biodiversity'."),
          mc("To compensate for your emissions is to ___ them.", ["deplete", "offset", "phase out"], 1, "'offset'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 8 (multiple matching)",
      category: "reading", weight: 10,
      title: "Examen semanal — RUoE Parte 8",
      instructions: "¿Qué persona (A–D) dice cada cosa? Puede repetirse.\n\nA — Elena: Working from home has been liberating. I've reclaimed the hours I used to waste commuting, though I do miss the spontaneous chats by the coffee machine.\nB — Raj: Honestly, I struggle. Without the structure of an office, I find it hard to switch off, and my flat has become a place I never really leave.\nC — Mei: The flexibility is wonderful for my family, but I worry that younger colleagues are missing out on the mentoring that only happens face to face.\nD — Tom: I'm more productive than ever. Fewer interruptions means I get real work done, and I'm happy to trade office banter for that.",
      questions: [
        mc("1) I get more done without distractions.", ["A (Elena)", "B (Raj)", "C (Mei)", "D (Tom)"], 3, "Tom: 'Fewer interruptions means I get real work done'."),
        mc("2) I find it difficult to stop working.", ["A", "B (Raj)", "C", "D"], 1, "Raj: 'hard to switch off'."),
        mc("3) I appreciate the extra time in my day.", ["A (Elena)", "B", "C", "D"], 0, "Elena: 'reclaimed the hours I used to waste commuting'."),
        mc("4) I'm concerned about junior staff's development.", ["A", "B", "C (Mei)", "D"], 2, "Mei: 'younger colleagues missing out on mentoring'."),
        mc("5) I miss informal social contact.", ["A (Elena)", "B", "C", "D"], 0, "Elena: 'miss the spontaneous chats'."),
        mc("6) I don't mind losing the social side of work.", ["A", "B", "C", "D (Tom)"], 3, "Tom: 'happy to trade office banter'."),
      ],
    },
  },

  {
    n: 8,
    theme: "Énfasis e inversión · Cultura · SIMULACRO Mes 2",
    grammar: {
      title: "Estructuras enfáticas: cleft e inversión",
      blocks: [
        "Oraciones escindidas (cleft):\n- What I need is a holiday. (What-cleft)\n- It was John who broke it. (It-cleft)\n- The reason (why) I left was the noise.\nInversión enfática (registro alto): Not only did she sing, but she also danced. / Rarely have I seen such talent. / No sooner had we arrived than it started to rain. / Little did he know…",
      ],
      exercise: {
        title: "Práctica — Énfasis e inversión",
        instructions: "Reescribe con la estructura enfática.",
        questions: [
          fb("Enfatiza: 'I admire her honesty.'  → What I ___ her honesty.", ["admire is"], "What-cleft: 'What I admire is her honesty'."),
          fb("Enfatiza: 'Ana solved the problem.'  → It ___ solved the problem.", ["was Ana who", "was Ana that"], "It-cleft: 'It was Ana who…'."),
          fb("Invierte: 'I have rarely seen such a mess.'  → Rarely ___ such a mess.", ["have I seen"], "Inversión tras 'Rarely': 'Rarely have I seen'."),
          fb("Invierte: 'She not only writes but also directs.'  → Not only ___ but she also directs.", ["does she write"], "Inversión tras 'Not only': 'Not only does she write'."),
          fb("Invierte: 'We had no sooner sat down than the phone rang.'  → No sooner ___ down than the phone rang.", ["had we sat"], "Inversión tras 'No sooner': 'No sooner had we sat'."),
          fb("Enfatiza el motivo: 'I left because of the noise.'  → The reason I left ___ the noise.", ["was"], "'The reason (why) I left was…'."),
        ],
      },
    },
    vocab: {
      title: "Cultura y arte",
      deck: [
        ["thought-provoking", "que hace reflexionar", "a thought-provoking film", "adjetivo"],
        ["a masterpiece", "una obra maestra", "an artistic masterpiece", "sustantivo"],
        ["overrated", "sobrevalorado", "The film is overrated.", "adjetivo"],
        ["acclaimed", "aclamado", "a critically acclaimed novel", "adjetivo"],
        ["depict", "representar / retratar", "The painting depicts a battle.", "verbo"],
        ["evoke", "evocar", "The music evokes nostalgia.", "verbo"],
        ["mainstream", "convencional / comercial", "mainstream cinema", "adjetivo"],
        ["a genre", "un género", "the science-fiction genre", "sustantivo"],
        ["highbrow", "intelectual / culto", "highbrow literature", "adjetivo"],
        ["stand the test of time", "resistir el paso del tiempo", "It has stood the test of time.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Cultura",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A work that makes you think deeply is ___.", ["overrated", "thought-provoking", "mainstream"], 1, "'thought-provoking'."),
          mc("A supreme work of art is a ___.", ["genre", "masterpiece", "mainstream"], 1, "'masterpiece'."),
          mc("Praised by critics is ___.", ["overrated", "acclaimed", "highbrow"], 1, "'acclaimed'."),
          mc("To bring a feeling to mind is to ___ it.", ["depict", "evoke", "stand"], 1, "'evoke'."),
          mc("Considered better than it really is is ___.", ["acclaimed", "overrated", "thought-provoking"], 1, "'overrated'."),
          mc("To remain valued for a long time is to ___.", ["depict", "evoke", "stand the test of time"], 2, "'stand the test of time'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 6 (cross-text multiple matching)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 6",
      instructions: "Cuatro personas opinan sobre el valor de un título universitario. Responde según lo que dice cada una (A–D).\n\nA: A degree remains the surest route to a good career; employers still use it as a filter, and graduates earn more over a lifetime.\nB: The idea that everyone needs a degree is outdated; many successful people never went to university, and vocational training is undervalued.\nC: University is about far more than employment — it teaches critical thinking and broadens the mind in ways a job never could.\nD: Degrees have become so common that they no longer guarantee anything; what matters now is skills and experience, not a certificate.",
      questions: [
        mc("1) Who believes a degree still improves career prospects?", ["A", "B", "C", "D"], 0, "A: 'the surest route to a good career… graduates earn more'."),
        mc("2) Who thinks vocational training deserves more respect?", ["A", "B", "C", "D"], 1, "B: 'vocational training is undervalued'."),
        mc("3) Who values university mainly for personal and intellectual growth?", ["A", "B", "C", "D"], 2, "C: 'teaches critical thinking and broadens the mind'."),
        mc("4) Who argues that skills now matter more than a qualification?", ["A", "B", "C", "D"], 3, "D: 'what matters now is skills and experience, not a certificate'."),
      ],
    },
    monthlyMock: 2,
  },

  {
    n: 9,
    theme: "Reported speech y lenguaje tentativo · Negocios",
    grammar: {
      title: "Verbos de reporte avanzados y lenguaje tentativo",
      blocks: [
        "Verbos de reporte con patrones propios: admit/deny + -ing; suggest + (that)... /-ing; refuse + to; accuse somebody of + -ing; warn somebody (not) to; insist on + -ing.\nLenguaje tentativo (suavizar afirmaciones, típico de C1): It would appear that…; This may/might suggest…; tends to; It could be argued that…",
      ],
      exercise: {
        title: "Práctica — Reporte y tentativo",
        instructions: "Completa con el patrón correcto.",
        questions: [
          fb("He denied ___ (take) the money.", ["taking"], "'deny + -ing'."),
          fb("She admitted ___ (make) a mistake.", ["making"], "'admit + -ing'."),
          fb("They accused him ___ cheating.", ["of"], "'accuse somebody OF + -ing'."),
          fb("The manager suggested ___ (postpone) the meeting.", ["postponing"], "'suggest + -ing'."),
          fb("He refused ___ (answer) the question.", ["to answer"], "'refuse + to'."),
          fb("Tentativo: 'Sales are falling.' → Sales ___ to be falling.", ["appear", "seem"], "Suavizar: 'appear/seem to be'."),
        ],
      },
    },
    vocab: {
      title: "Negocios y economía",
      deck: [
        ["a start-up", "una empresa emergente", "a tech start-up", "sustantivo"],
        ["turnover", "facturación", "annual turnover", "sustantivo"],
        ["break even", "cubrir gastos", "The firm broke even.", "expresión"],
        ["a niche market", "un mercado de nicho", "target a niche market", "colocación"],
        ["cash flow", "flujo de caja", "manage cash flow", "colocación"],
        ["overheads", "costes fijos", "reduce overheads", "sustantivo"],
        ["a merger", "una fusión", "a company merger", "sustantivo"],
        ["scale up", "escalar / crecer", "scale up the business", "phrasal verb"],
        ["a downturn", "una recesión / caída", "an economic downturn", "sustantivo"],
        ["cost-effective", "rentable", "a cost-effective solution", "adjetivo"],
      ],
      exercise: {
        title: "Práctica — Negocios",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A new, small company is a ___.", ["merger", "start-up", "downturn"], 1, "'start-up'."),
          mc("When income equals costs, a firm ___.", ["scales up", "breaks even", "merges"], 1, "'break even'."),
          mc("A period of economic decline is a ___.", ["turnover", "downturn", "niche"], 1, "'downturn'."),
          mc("The regular running costs of a business are its ___.", ["overheads", "turnover", "merger"], 0, "'overheads'."),
          mc("The total sales of a company is its ___.", ["cash flow", "turnover", "downturn"], 1, "'turnover'."),
          mc("Good value for the money spent is ___.", ["cost-effective", "niche", "cash flow"], 0, "'cost-effective'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 1 (essay)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (essay)",
      instructions: "Escribe tu essay (220–260 palabras) discutiendo DOS de los métodos. Compáralo con el modelo.",
      questions: [
        open(
          "Your class has attended a panel discussion on how to reduce traffic in city centres. Notes:\n• improving public transport\n• charging drivers to enter the city centre\n• building more cycle lanes\n\nWrite an essay discussing TWO of the methods. Give reasons for your opinion. 220–260 words.",
          "Elige dos métodos, un párrafo por cada uno con razones/ejemplos, y opinión final. Registro formal, lenguaje evaluativo.",
          "RESPUESTA MODELO (~245 palabras):\n\n\"Traffic congestion has become one of the defining problems of modern cities, and the panel proposed several possible remedies. This essay will examine two of them: improving public transport and charging drivers to enter the centre.\n\nThe first and, arguably, most constructive measure is to invest in public transport. If buses and trains are frequent, affordable and reliable, many people will willingly leave their cars at home. The experience of cities such as Vienna suggests that a high-quality network can dramatically reduce private car use. The main drawback is cost, since such systems require substantial and sustained public funding.\n\nCharging drivers to enter the city centre is a more controversial option. Supporters argue that it discourages unnecessary journeys and raises revenue that can be reinvested in transport. Critics, however, point out that it can be socially unfair, penalising those who have no realistic alternative to driving. To a certain extent, this objection can be addressed through exemptions and discounts.\n\nIn my view, the two measures work best in combination. A congestion charge on its own merely punishes drivers, whereas pairing it with excellent public transport gives them a genuine choice. Ultimately, reducing traffic is less about forcing people out of their cars than about making the alternatives too attractive to refuse.\"\n\nPor qué funciona: discute dos métodos con razones/ejemplos, opinión matizada, 4 párrafos, lenguaje evaluativo ('arguably', 'to a certain extent'), registro formal, dentro del rango."
        ),
      ],
    },
  },

  {
    n: 10,
    theme: "Conectores formales y subjuntivo · Salud · Writing Parte 2",
    grammar: {
      title: "Conectores de discurso y estructuras formales",
      blocks: [
        "Concesión: although / even though / whereas / while / despite (+ -ing/sustantivo) / albeit.\nCausa-resultado: consequently, therefore, thus, hence, as a result.\nContraste/adición formal: nevertheless, nonetheless, moreover, furthermore.\nSubjuntivo formal: I suggest / recommend / insist that he BE informed; It is essential that she ARRIVE on time.",
      ],
      exercise: {
        title: "Práctica — Conectores y subjuntivo",
        instructions: "Completa correctamente.",
        questions: [
          fb("___ the rain, the match went ahead. (a pesar de + sustantivo)", ["Despite", "In spite of"], "'Despite/In spite of + sustantivo'."),
          fb("The plan is risky; ___, it may be our only option. (sin embargo, formal)", ["nevertheless", "nonetheless", "however"], "Contraste formal: 'nevertheless'."),
          fb("He was exhausted; ___, he finished the race. (no obstante)", ["nonetheless", "nevertheless", "however"], "'nonetheless'."),
          fb("It is essential that every member ___ (be) present.", ["be"], "Subjuntivo formal: 'that every member be present'."),
          fb("She earns little, ___ she seems happy. (mientras que / contraste)", ["whereas", "while"], "Contraste: 'whereas/while'."),
          fb("The evidence is weak; ___, the conclusion is doubtful. (por tanto)", ["therefore", "thus", "hence", "consequently"], "Resultado: 'therefore/thus/hence'."),
        ],
      },
    },
    vocab: {
      title: "Salud y bienestar (avanzado)",
      deck: [
        ["burnout", "agotamiento (laboral)", "suffer from burnout", "sustantivo"],
        ["mindfulness", "atención plena", "practise mindfulness", "sustantivo"],
        ["a sedentary lifestyle", "un estilo de vida sedentario", "avoid a sedentary lifestyle", "colocación"],
        ["resilience", "resiliencia", "build emotional resilience", "sustantivo"],
        ["unwind", "relajarse / desconectar", "I unwind by reading.", "verbo"],
        ["a balanced diet", "una dieta equilibrada", "maintain a balanced diet", "colocación"],
        ["prone to", "propenso a", "prone to stress", "expresión"],
        ["well-being", "bienestar", "mental well-being", "sustantivo"],
        ["take its toll", "pasar factura", "Stress takes its toll.", "idiom"],
        ["recharge your batteries", "recargar las pilas", "I need to recharge my batteries.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Salud",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Extreme exhaustion from overwork is ___.", ["resilience", "burnout", "well-being"], 1, "'burnout'."),
          mc("The ability to recover from difficulty is ___.", ["resilience", "burnout", "mindfulness"], 0, "'resilience'."),
          mc("A lifestyle with little physical activity is ___.", ["balanced", "sedentary", "mindful"], 1, "'sedentary lifestyle'."),
          mc("To relax and release tension is to ___.", ["take its toll", "unwind", "be prone to"], 1, "'unwind'."),
          mc("If stress ___, it gradually damages you.", ["unwinds", "takes its toll", "recharges"], 1, "'take its toll'."),
          mc("Someone who easily gets stressed is ___ stress.", ["prone to", "resilient to", "mindful of"], 0, "'prone to'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 2 (review)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (review)",
      instructions: "Escribe tu review (220–260 palabras) y compárala con el modelo.",
      questions: [
        open(
          "You see this on an English-language website:\n\nREVIEWS WANTED — a restaurant that impressed you. Describe it and explain why it stood out. Would you recommend it? The best reviews will be published.\n\nWrite your review in 220–260 words.",
          "Describe el sitio, valora (lo bueno y algún matiz), y recomienda. Tono semiformal, lenguaje evaluativo preciso.",
          "RESPUESTA MODELO (~245 palabras):\n\n\"Tucked away down a quiet side street, La Higuera is the kind of restaurant you almost hope will stay a secret. From the moment you step inside, the warm lighting and the scent of woodsmoke signal that this is somewhere that takes food seriously.\n\nWhat sets La Higuera apart is not showy innovation but an almost obsessive attention to quality. The menu is short — a deliberate choice — and changes with the seasons, so everything feels genuinely fresh. On my last visit, a deceptively simple dish of grilled vegetables was, without exaggeration, one of the best things I have eaten all year. The service, too, deserves a mention: attentive without ever being intrusive, and clearly knowledgeable about every item on the list.\n\nIf I had to find fault, I would say that the restaurant is a victim of its own success. Tables are in high demand, so booking well in advance is essential, and the intimate setting can become a little noisy when it is full. Prices, while not cheap, represent excellent value for the quality on offer.\n\nOverall, La Higuera is a rare find: unpretentious, consistent and quietly excellent. Whether you are marking a special occasion or simply want to eat well, I would recommend it without hesitation — provided, of course, that you remember to reserve your table.\"\n\nPor qué funciona: describe, valora con matiz (crítica menor: ruido/reservas), recomienda, lenguaje evaluativo preciso, registro semiformal, dentro del rango."
        ),
      ],
    },
  },

  {
    n: 11,
    theme: "Cohesión y sustitución · Lenguaje académico",
    grammar: {
      title: "Cohesión: referencia, sustitución y elipsis",
      blocks: [
        "Un texto C1 evita la repetición con recursos de cohesión:\n• Referencia: this/that/these/those, such (a), the former/the latter → 'She was late; this annoyed everyone.'\n• Sustitución: one/ones (nombres), do so / do that (verbos), so/not (oraciones) → 'I need a pen. Do you have one?' / 'Is it raining? I think so.'\n• Elipsis: omitir lo recuperable → 'She can sing and (she can) dance.'\nUsarlos bien hace la prosa fluida y precisa.",
      ],
      exercise: {
        title: "Práctica — Cohesión",
        instructions: "Completa con el recurso de cohesión adecuado.",
        questions: [
          fb("He failed the exam; ___ came as no surprise. (referencia a la oración)", ["this", "that"], "'this/that' referencia a la idea previa."),
          fb("I prefer the red shoes to the blue ___. (sustitución de 'shoes')", ["ones"], "sustitución plural → ones."),
          fb("'Will they come?' — 'I hope ___.' (sustitución de oración afirmativa)", ["so"], "'I hope so'."),
          fb("She was asked to leave and she did ___. (sustitución del verbo, formal)", ["so"], "'do so' = hacerlo."),
          fb("We considered two plans: ___ former was cheaper. (referencia al primero)", ["the"], "'the former' = el primero."),
          fb("He can drive but his brother can't. → He can drive but his brother ___. (elipsis)", ["can't", "cannot"], "elipsis: 'his brother can't'."),
        ],
      },
    },
    vocab: {
      title: "Lenguaje académico y matices",
      deck: [
        ["arguably", "posiblemente/se podría decir", "arguably the best", "adverbio"],
        ["a caveat", "una salvedad", "with one caveat", "sustantivo"],
        ["substantiate", "fundamentar", "substantiate a claim", "verbo"],
        ["nuanced", "matizado", "a nuanced view", "adjetivo"],
        ["albeit", "aunque/si bien", "useful, albeit limited", "conjunción"],
        ["underpin", "sustentar", "the ideas that underpin the theory", "verbo"],
        ["compelling", "convincente", "a compelling argument", "adjetivo"],
        ["hitherto", "hasta ahora", "hitherto unknown", "adverbio"],
        ["a discrepancy", "una discrepancia", "a discrepancy in the data", "sustantivo"],
        ["by and large", "en general", "By and large, it works.", "expresión"],
      ],
      exercise: {
        title: "Práctica — Léxico académico",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A small warning or qualification is a ___.", ["caveat", "discrepancy", "nuance"], 0, "'a caveat'."),
          mc("To support a claim with evidence is to ___ it.", ["substantiate", "underpin", "compel"], 0, "'substantiate'."),
          mc("A view that recognises subtle differences is ___.", ["nuanced", "compelling", "arguably"], 0, "'nuanced'."),
          mc("A very convincing argument is ___.", ["compelling", "hitherto", "albeit"], 0, "'compelling'."),
          mc("'Useful, ___ expensive' = although expensive.", ["albeit", "arguably", "hitherto"], 0, "'albeit'."),
          mc("The ideas that support a theory ___ it.", ["underpin", "substantiate", "compel"], 0, "'underpin' = sustentar."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 1 (multiple-choice cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 1",
      instructions: "Elige la opción correcta (A–D). Texto:\n\nThe idea that we make decisions rationally is, (1)___ many, a comforting myth. In (2)___, a great deal of research (3)___ that emotion plays a central role in even our most 'logical' choices. This does not (4)___ that feelings are the enemy of good judgement; rather, they provide the values against (5)___ we weigh our options. The challenge, then, is not to (6)___ emotion but to understand it — to recognise when a gut feeling is a (7)___ guide and when it is merely (8)___ us astray.",
      questions: [
        mc("Hueco 1", ["for", "to", "with", "by"], 0, "'for many' = para muchos."),
        mc("Hueco 2", ["fact", "truth", "reality", "case"], 0, "'In fact'."),
        mc("Hueco 3", ["suggests", "tells", "informs", "advises"], 0, "'research suggests'."),
        mc("Hueco 4", ["mean", "say", "tell", "show"], 0, "'does not mean that'."),
        mc("Hueco 5", ["which", "that", "whom", "what"], 0, "'against which we weigh'."),
        mc("Hueco 6", ["suppress", "depress", "oppress", "repress"], 0, "'suppress emotion'."),
        mc("Hueco 7", ["reliable", "reliant", "relative", "relevant"], 0, "'a reliable guide'."),
        mc("Hueco 8", ["leading", "taking", "bringing", "driving"], 0, "'leading us astray'."),
      ],
    },
  },

  {
    n: 12,
    theme: "Precisión léxica y repaso · SIMULACRO FINAL",
    grammar: {
      title: "Colocaciones y precisión + repaso integral",
      blocks: [
        "En C1 la naturalidad depende de la COLOCACIÓN precisa: 'make a decision' (no 'do'), 'heavy rain' (no 'strong'), 'a narrow escape', 'take sth into account', 'draw a conclusion', 'pose a threat', 'meet a deadline'.\nDistingue matices: 'affect' (verbo) vs 'effect' (sustantivo); 'economic' (de economía) vs 'economical' (que ahorra).\nRepaso: revisa aspecto, tiempos narrativos, word formation, condicionales/inversión, modales, pasiva, relativas, énfasis, estilo indirecto y cohesión de todo el programa.",
      ],
      exercise: {
        title: "Práctica — Colocaciones y precisión",
        instructions: "Completa con la palabra exacta.",
        questions: [
          fb("We need to ___ a decision soon. (make/do)", ["make"], "'make a decision'."),
          fb("The storm brought ___ rain. (heavy/strong)", ["heavy"], "'heavy rain'."),
          fb("You must take the costs into ___. (account)", ["account"], "'take into account'."),
          fb("Climate change poses a serious ___ to wildlife. (threat)", ["threat"], "'pose a threat'."),
          fb("The new policy will ___ everyone. (affect/effect — verbo)", ["affect"], "verbo → affect."),
          fb("A small, fuel-saving car is very ___. (economic/economical)", ["economical"], "que ahorra → economical."),
        ],
      },
    },
    vocab: {
      title: "Colocaciones y expresiones sofisticadas",
      deck: [
        ["a foregone conclusion", "una conclusión cantada", "The result was a foregone conclusion.", "idiom"],
        ["a double-edged sword", "un arma de doble filo", "Fame is a double-edged sword.", "idiom"],
        ["shed light on", "arrojar luz sobre", "The study sheds light on the issue.", "colocación"],
        ["bear in mind", "tener en cuenta", "Bear in mind the cost.", "expresión"],
        ["a turning point", "un punto de inflexión", "a turning point in history", "expresión"],
        ["far-reaching", "de gran alcance", "far-reaching consequences", "adjetivo"],
        ["at odds with", "en desacuerdo con", "at odds with the evidence", "expresión"],
        ["gain momentum", "cobrar impulso", "The movement gained momentum.", "colocación"],
        ["a grey area", "una zona ambigua", "The law is a grey area.", "idiom"],
        ["set a precedent", "sentar precedente", "The ruling set a precedent.", "colocación"],
      ],
      exercise: {
        title: "Práctica — Expresiones",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("An outcome everyone already expects is a ___.", ["foregone conclusion", "grey area", "turning point"], 0, "'foregone conclusion'."),
          mc("Something with both good and bad sides is a ___.", ["double-edged sword", "turning point", "precedent"], 0, "'double-edged sword'."),
          mc("To clarify or explain something is to ___ it.", ["shed light on", "bear in mind", "set a precedent"], 0, "'shed light on'."),
          mc("Effects that are wide and important are ___.", ["far-reaching", "at odds", "grey"], 0, "'far-reaching'."),
          mc("An unclear, ambiguous situation is a ___.", ["grey area", "turning point", "precedent"], 0, "'grey area'."),
          mc("To create an example others may follow is to ___.", ["set a precedent", "gain momentum", "bear in mind"], 0, "'set a precedent'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 2 (open cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 2",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nThe rise of remote work has been one of the (1)___ far-reaching changes of recent years. (2)___ many predicted it would harm productivity, the evidence so far is mixed. (3)___ some tasks are done just as well from home, others clearly (4)___ from the spontaneous exchanges of an office. It would be a mistake, (5)___, to treat the debate as settled; (6)___ is at stake is nothing less than the future shape of working life.",
      questions: [
        fb("Hueco 1", ["most"], "superlativo: 'the most far-reaching'."),
        fb("Hueco 2", ["Although", "While", "Though"], "concesión: Although/While."),
        fb("Hueco 3", ["While", "Whereas", "Although"], "contraste: While/Whereas."),
        fb("Hueco 4", ["benefit"], "'others benefit from'."),
        fb("Hueco 5", ["then", "therefore", "however"], "'It would be a mistake, then/however,'."),
        fb("Hueco 6", ["what"], "'what is at stake'."),
      ],
    },
    finalMock: true,
  },
];

async function main() {
  const [author, category, level, language, status, access, contentTexto] = await Promise.all([
    db.author.findFirst({ where: { isPlatformAuthor: true } }),
    db.category.findFirst({ where: { slug: "idiomas" } }),
    db.courseLevel.findUnique({ where: { key: "avanzado" } }),
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  C1 Advanced anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "C1 Advanced (Cambridge English: Advanced / CAE)", subtitle: "Programa de 12 semanas (3 meses) para el examen C1 Advanced.",
      description: "Curso completo de preparación para Cambridge English: Advanced (C1 Advanced / CAE), nivel avanzado. Programa de 12 semanas con gramática avanzada progresiva, vocabulario sofisticado y flashcards cada semana, práctica semanal del formato real del examen y simulacros mensuales que estiman tu nota en la Cambridge English Scale (160–210, aprobado 180). Contenido original para hispanohablantes de nivel avanzado.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Preparación C1 Advanced (CAE) — Programa de 12 semanas — NOVARA", seoDescription: "Prepara el Cambridge C1 Advanced con un programa semanal completo: gramática, vocabulario, práctica de examen y simulacros.",
      objectives: { create: [
        "Seguir un programa semanal con gramática, vocabulario y práctica de examen.",
        "Dominar la gramática avanzada de C1 de forma progresiva.",
        "Ampliar el léxico sofisticado (idioms, colocaciones, matices).",
        "Practicar cada parte real del examen (RUoE y Writing).",
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

  const m0 = await createModule("Guía del examen C1 Advanced", "Estructura, puntuación y cómo usar este programa.", 0);
  await createLesson(m0.id, {
    title: "Cómo es el examen y cómo funciona este programa", description: "Las 4 pruebas, la Cambridge Scale y la cadencia semanal.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "El C1 Advanced (CAE) es un examen de nivel avanzado. Tiene 4 pruebas de igual peso: Reading & Use of English (8 partes), Writing, Listening y Speaking. Se aprueba con 180 en la Cambridge English Scale (160–210; 200+ ≈ C2)." },
      { type: "GRAMMAR", title: "Cómo usar este programa (12 semanas)", content: "Cada semana: 1) GRAMÁTICA avanzada nueva con ejercicios; 2) VOCABULARIO sofisticado con flashcards y ejercicios; 3) PRÁCTICA de una parte real del examen.\nHaz un poco cada día. En la semana 4 y la semana 8 hay un SIMULACRO mensual que estima tu nota." },
      { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["12 semanas ≈ 2,5 meses de preparación.", "Gramática avanzada + vocabulario + examen cada semana.", "Simulacros mensuales (sem. 4 y 8) y FINAL (sem. 12).", "Aprobado C1 = 180 en la Cambridge Scale."] } },
    ],
    pedagogy: { objective: "Entender el examen y el programa.", summary: "12 semanas; gramática avanzada, vocabulario y examen cada semana; simulacros mensuales.", reviewPrompts: ["¿Qué nota necesitas para el C1?"] },
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
      data: { title: `C1 Advanced — Semana ${w.n}: ${w.vocab.title}`, description: "Vocabulario de la semana.", language: "en", authorId: adminUser.id,
        cards: { create: w.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "C1" })) } },
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
        data: { courseId: course.id, title: `Simulacro Mensual ${w.monthlyMock} — Reading & Use of English (C1 Advanced)`, passingScore: 60, timeLimitMinutes: 60,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🎯 Simulacro Mensual ${w.monthlyMock}`, `Examen de práctica del mes ${w.monthlyMock}.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Simulacro Mensual ${w.monthlyMock}`, description: "Mide si alcanzarías la nota Cambridge.", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne las partes auto-corregibles de Reading & Use of English vistas hasta ahora, cronometradas. Aprueba con un 60% (≈180 en la Cambridge Scale). Writing, Listening y Speaking se evalúan aparte. Tu resultado te dice si alcanzarías el C1.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Comprobar tu preparación bajo condiciones de examen.", summary: `Simulacro del mes ${w.monthlyMock}; aprobado 60%.`, reviewPrompts: ["Si no llegas a 60%, repasa las semanas anteriores."] },
      });
    }

    if (w.finalMock) {
      const exam = await db.exam.create({
        data: { courseId: course.id, title: "Simulacro FINAL — Reading & Use of English (C1 Advanced)", passingScore: 60, timeLimitMinutes: 90,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule("🎯 Simulacro FINAL", "Examen final en condiciones lo más parecidas al examen real.", sortOrder++);
      await createLesson(mm.id, {
        title: "Simulacro FINAL — Reading & Use of English", description: "El examen del final del programa: ¿alcanzas la nota C1?", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne TODAS las partes auto-corregibles de Reading & Use of English del programa, cronometradas y en condiciones de examen. Aprueba con un 60% (≈180, la nota de corte del C1). Según tu resultado, la plataforma te dirá si estás listo para inscribirte al examen oficial o te preparará un plan de refuerzo.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Confirmar si alcanzarías la nota real del C1.", summary: "Simulacro final; aprobado 60% ≈ 180.", reviewPrompts: ["Si no llegas, sigue tu plan de refuerzo."] },
      });
    }
  }

  const ms = await createModule("Listening y Speaking", "Práctica con audio británico real y conversación por voz.", sortOrder++);
  const talk = "…which raises an interesting question about expertise. We tend to assume that the more experienced someone is, the better their judgement. Yet studies of professionals reveal a more complicated picture. Experience only improves judgement when the environment provides clear, timely feedback. In fields where outcomes are delayed or obscured by chance, seasoned experts often perform no better than novices, precisely because their confidence outpaces their accuracy. The lesson is not to dismiss experience, but to ask a sharper question: does this particular field actually allow anyone to learn from it?";
  const audio = await generateListeningAudio(talk, "c1-expertise-talk");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — Experiencia y juicio", description: "Escucha (voz británica) y responde (inferencia).", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír una charla sobre experiencia y buen juicio. En C1 se evalúa la inferencia y la actitud. Puedes repetir el audio." },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Inferir la tesis y los matices de un monólogo C1.", commonMistakes: ["Quedarse en lo literal."], reviewPrompts: ["¿Cuándo NO mejora la experiencia el juicio?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "Experiencia y juicio", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("What is the speaker's main argument?", ["More experience always improves judgement.", "Experience improves judgement only under certain conditions.", "Novices are usually better than experts."], 1, "'only… when the environment provides clear, timely feedback'."),
      mc("Why might experts perform no better than novices?", ["They have less knowledge.", "Their confidence outpaces their accuracy.", "They get too much feedback."], 1, "'their confidence outpaces their accuracy'."),
      mc("What should we ask, according to the speaker?", ["Whether the person is experienced.", "Whether the field allows people to learn from it.", "How confident the expert feels."], 1, "'does this particular field actually allow anyone to learn from it?'"),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Conversación por voz (C1)", description: "Habla con la IA (voz británica): opiniones matizadas.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. Debatiréis y decidiréis; da opiniones matizadas, contrasta y negocia. Al terminar, 'Finalizar y evaluar'.\nImportante: abre la app en http://localhost:3001 (no en la IP de red) para que el micrófono funcione." }],
    pedagogy: { objective: "Expresar opiniones matizadas, contrastar y negociar (C1).", summary: "Tarea colaborativa por voz con la IA.", reviewPrompts: ["¿Cómo matizas o discrepas con cortesía en inglés?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "C1", scenario: "una tarea colaborativa: decidís cuál de varias medidas reduce mejor el tráfico urbano; se contrastan opiniones y se negocia", objective: "que el alumno exprese opiniones matizadas, contraste puntos de vista y negocie una decisión", keywords: "arguably, to a certain extent, on balance, I take your point, that said" }, title: "Colaborativa: reducir el tráfico", instructions: "Debate y decide con la IA.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "C1 Advanced — Semana" } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ C1 Advanced (programa 12 semanas) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error C1:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
