/**
 * C2 Proficiency (Cambridge English: Proficiency / CPE) — PROGRAMA COMPLETO.
 *
 * Currículo de 12 SEMANAS (≈3 meses), el nivel más alto, con cadencia de academia:
 *   • Lengua avanzada progresiva cada semana (repaso acumulativo).
 *   • Léxico sofisticado nuevo cada semana, con su mazo de flashcards.
 *   • Práctica semanal del formato REAL de una parte del examen (RUoE / Writing).
 *   • Simulacro mensual (semanas 4, 8 y 12) que estima tu nota Cambridge.
 * Contenido original de NOVARA. Audio de Listening con Piper (voz británica).
 * Escala C2 Proficiency: 180–230, aprobado 200.
 *
 * Idempotente. No toca otros cursos.   node scripts/seed-c2-proficiency.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "c2-proficiency";
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
    theme: "Complementación verbal · Carácter",
    grammar: {
      title: "Patrones verbales que cambian de significado",
      blocks: [
        "En C2 se dominan las diferencias sutiles según el complemento:\n- remember doing (recordar algo hecho) vs remember to do (acordarse de hacer).\n- stop doing (dejar de) vs stop to do (parar para).\n- regret doing (arrepentirse) vs regret to inform (lamentar informar).\n- go on doing (seguir) vs go on to do (pasar a hacer otra cosa).\n- mean doing (implicar) vs mean to do (tener la intención).",
      ],
      exercise: {
        title: "Práctica — Patrones verbales",
        instructions: "Completa con gerundio o infinitivo según el sentido.",
        questions: [
          fb("I distinctly remember ___ (lock) the door, yet it was open.", ["locking"], "Recordar algo hecho → 'remember doing'."),
          fb("Please remember ___ (post) the letter on your way out.", ["to post"], "Acordarse de hacer algo → 'remember to do'."),
          fb("We regret ___ (inform) you that your application was unsuccessful.", ["to inform"], "Lamentar informar → 'regret to inform'."),
          fb("After a pause, she went on ___ (describe) her plans in detail.", ["to describe"], "Pasar a hacer otra cosa → 'go on to do'."),
          fb("He stopped ___ (smoke) two years ago and feels much better.", ["smoking"], "Dejar de → 'stop doing'."),
          fb("Cutting the budget would mean ___ (lose) several jobs.", ["losing"], "Implicar → 'mean doing'."),
        ],
      },
    },
    vocab: {
      title: "Carácter y comportamiento",
      deck: [
        ["meticulous", "meticuloso", "meticulous attention to detail", "adjetivo"],
        ["aloof", "distante", "He seemed aloof at first.", "adjetivo"],
        ["gregarious", "sociable", "a gregarious host", "adjetivo"],
        ["tenacious", "tenaz", "her tenacious pursuit of the truth", "adjetivo"],
        ["complacent", "autocomplaciente", "Don't become complacent.", "adjetivo"],
        ["scrupulous", "escrupuloso / íntegro", "scrupulous honesty", "adjetivo"],
        ["set in one's ways", "aferrado a sus costumbres", "He's rather set in his ways.", "idiom"],
        ["a stickler for", "muy exigente con", "a stickler for punctuality", "expresión"],
        ["have a chip on one's shoulder", "estar resentido", "He has a chip on his shoulder.", "idiom"],
        ["wear your heart on your sleeve", "mostrar las emociones abiertamente", "She wears her heart on her sleeve.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Carácter",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Extremely careful and precise is ___.", ["aloof", "meticulous", "complacent"], 1, "'meticulous'."),
          mc("Distant and unfriendly is ___.", ["gregarious", "aloof", "tenacious"], 1, "'aloof'."),
          mc("Very sociable is ___.", ["gregarious", "scrupulous", "aloof"], 0, "'gregarious'."),
          mc("Too satisfied, taking success for granted, is ___.", ["tenacious", "complacent", "meticulous"], 1, "'complacent'."),
          mc("Someone who is fussy about a rule is a ___ it.", ["chip on shoulder for", "stickler for", "set in for"], 1, "'a stickler for'."),
          mc("Determined and persistent is ___.", ["aloof", "tenacious", "complacent"], 1, "'tenacious'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 1 (multiple-choice cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 1",
      instructions: "Elige la opción correcta (A–D). Texto:\n\nMemory, we like to think, works like a video recording, faithfully (1)___ events as they happened. Nothing could be (2)___ from the truth. Each time we recall an event, we effectively (3)___ it from fragments, and in doing so we (4)___ ourselves to subtle distortions. Some details are quietly added; others (5)___ away. This helps to (6)___ why eyewitness testimony, once (7)___ as the gold standard of evidence, is now (8)___ with considerable caution.",
      questions: [
        mc("Hueco 1", ["capturing", "catching", "grasping", "clutching"], 0, "'capture an event'."),
        mc("Hueco 2", ["further", "farther", "deeper", "wider"], 0, "Idiom: 'nothing could be further from the truth'."),
        mc("Hueco 3", ["reconstruct", "reproduce", "restore", "repeat"], 0, "'reconstruct from fragments'."),
        mc("Hueco 4", ["expose", "reveal", "submit", "deliver"], 0, "'expose oneself to'."),
        mc("Hueco 5", ["fade", "fall", "slip", "pass"], 0, "'fade away'."),
        mc("Hueco 6", ["explain", "account", "reason", "justify"], 0, "'explain why'."),
        mc("Hueco 7", ["regarded", "named", "called", "labelled"], 0, "'regard as'."),
        mc("Hueco 8", ["treated", "held", "kept", "faced"], 0, "'treat with caution'."),
      ],
    },
  },

  {
    n: 2,
    theme: "Aspecto e infinitivos perfectos · Emociones",
    grammar: {
      title: "Aspecto perfecto e infinitivos/gerundios perfectos",
      blocks: [
        "Infinitivo perfecto (to have + participio): acción anterior — 'She seems to have forgotten.' / 'I'd like to have seen it.'\nGerundio perfecto (having + participio): 'Having finished, he left.' / 'I regret having said that.'\nFuture perfect continuous: 'By June, I'll have been working here for a decade.'\nModal + perfect infinitive para deducción/reproche: 'You needn't have worried.'",
      ],
      exercise: {
        title: "Práctica — Aspecto perfecto",
        instructions: "Completa con la forma perfecta adecuada.",
        questions: [
          fb("She seems ___ (forget) our appointment.", ["to have forgotten"], "Infinitivo perfecto: anterioridad."),
          fb("I regret ___ (say) those words in anger.", ["having said"], "Gerundio perfecto: 'regret having said'."),
          fb("___ (finish) the report, she treated herself to a coffee.", ["Having finished"], "Gerundio perfecto: 'Having finished'."),
          fb("You needn't ___ (worry); everything was fine.", ["have worried"], "'needn't have + participio' = no hacía falta."),
          fb("By next year, I ___ (work) here for a decade.", ["will have been working", "'ll have been working"], "Future perfect continuous."),
          fb("He claims ___ (never/meet) her before.", ["to have never met", "never to have met"], "Infinitivo perfecto negativo."),
        ],
      },
    },
    vocab: {
      title: "Emociones y actitudes",
      deck: [
        ["elated", "eufórico", "elated by the news", "adjetivo"],
        ["apprehensive", "aprensivo / inquieto", "apprehensive about the exam", "adjetivo"],
        ["indifferent", "indiferente", "indifferent to criticism", "adjetivo"],
        ["overwhelmed", "abrumado", "overwhelmed with work", "adjetivo"],
        ["resentful", "resentido", "resentful of his success", "adjetivo"],
        ["exhilarating", "estimulante / emocionante", "an exhilarating experience", "adjetivo"],
        ["at a loss", "sin saber qué decir/hacer", "I was at a loss for words.", "expresión"],
        ["on edge", "nervioso / tenso", "I've been on edge all day.", "expresión"],
        ["take something in your stride", "tomarse algo con calma", "She took the bad news in her stride.", "idiom"],
        ["be over the moon", "estar encantado", "I was over the moon about it.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Emociones",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Extremely happy and excited is ___.", ["indifferent", "elated", "apprehensive"], 1, "'elated'."),
          mc("Anxious about something ahead is ___.", ["exhilarating", "apprehensive", "resentful"], 1, "'apprehensive'."),
          mc("Not caring at all is ___.", ["overwhelmed", "indifferent", "elated"], 1, "'indifferent'."),
          mc("To deal calmly with something difficult is to take it ___.", ["at a loss", "on edge", "in your stride"], 2, "'take it in your stride'."),
          mc("Feeling bitter about someone else's success is ___.", ["resentful", "elated", "exhilarating"], 0, "'resentful'."),
          mc("Feeling tense and nervous is being ___.", ["over the moon", "on edge", "at a loss"], 1, "'on edge'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 2 (open cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 2",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nCuriosity, (1)___ often dismissed as a mere childhood trait, is in fact one of the (2)___ powerful drivers of human achievement. It is curiosity (3)___ compels scientists to question the obvious. (4)___ than being a distraction, a curious mind refuses to (5)___ things for granted. Studies suggest curiosity is closely (6)___ to memory: we remember far (7)___ readily the things we genuinely want to know. Perhaps the secret to learning is not discipline (8)___ wonder.",
      questions: [
        fb("Hueco 1", ["though", "although"], "'Curiosity, though often dismissed…' = concesión."),
        fb("Hueco 2", ["most"], "Superlativo: 'the most powerful'."),
        fb("Hueco 3", ["that", "which"], "Cleft: 'It is curiosity that compels'."),
        fb("Hueco 4", ["Rather"], "'Rather than' = en vez de."),
        fb("Hueco 5", ["take"], "'take things for granted'."),
        fb("Hueco 6", ["linked", "related", "tied"], "'closely linked/related to'."),
        fb("Hueco 7", ["more"], "'far more readily'."),
        fb("Hueco 8", ["but"], "'not discipline but wonder'."),
      ],
    },
  },

  {
    n: 3,
    theme: "Nominalización · Lengua y comunicación",
    grammar: {
      title: "Formación de palabras y estilo nominal",
      blocks: [
        "El estilo formal/académico prefiere sustantivos abstractos (nominalización): 'They decided quickly' → 'The speed of their decision'.\nDomina sufijos productivos (- tion, -ment, -ity, -ance, -ism) y prefijos (over-, under-, mis-, dis-, counter-).\nCuidado con familias irregulares: analyse→analysis, maintain→maintenance, pronounce→pronunciation.",
      ],
      exercise: {
        title: "Práctica — Formación de palabras",
        instructions: "Forma la palabra derivada.",
        questions: [
          fb("The ___ (maintain) of the building is costly.", ["maintenance"], "Sustantivo irregular: 'maintenance'."),
          fb("Her ___ (pronounce) is almost native.", ["pronunciation"], "Sustantivo irregular: 'pronunciation'."),
          fb("A careful ___ (analyse) of the data is needed.", ["analysis"], "Sustantivo: 'analysis'."),
          fb("The policy was widely ___ (criticism). (verbo)", ["criticised", "criticized"], "Verbo: 'criticised'."),
          fb("His ___ (persist) eventually paid off.", ["persistence"], "Sustantivo: 'persistence'."),
          fb("There has been a ___ (grow) in demand.", ["growth"], "Sustantivo irregular: 'growth'."),
        ],
      },
    },
    vocab: {
      title: "Lengua y comunicación",
      deck: [
        ["articulate", "elocuente / expresarse bien", "an articulate speaker", "adjetivo/verbo"],
        ["convey", "transmitir", "convey a message", "verbo"],
        ["nuance", "matiz", "a subtle nuance of meaning", "sustantivo"],
        ["eloquent", "elocuente", "an eloquent tribute", "adjetivo"],
        ["euphemism", "eufemismo", "'passed away' is a euphemism", "sustantivo"],
        ["ambiguous", "ambiguo", "an ambiguous reply", "adjetivo"],
        ["get your point across", "hacerse entender", "She got her point across clearly.", "idiom"],
        ["read between the lines", "leer entre líneas", "You have to read between the lines.", "idiom"],
        ["a slip of the tongue", "un lapsus", "It was just a slip of the tongue.", "idiom"],
        ["beat about the bush", "irse por las ramas", "Stop beating about the bush.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Lengua",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Able to express ideas clearly and well is ___.", ["ambiguous", "articulate", "euphemism"], 1, "'articulate'."),
          mc("A subtle shade of meaning is a ___.", ["euphemism", "nuance", "slip"], 1, "'nuance'."),
          mc("A polite word for something unpleasant is a ___.", ["nuance", "euphemism", "slip"], 1, "'euphemism'."),
          mc("Having more than one possible meaning is ___.", ["ambiguous", "eloquent", "articulate"], 0, "'ambiguous'."),
          mc("To avoid saying something directly is to ___.", ["convey", "beat about the bush", "read between the lines"], 1, "'beat about the bush'."),
          mc("To understand a hidden meaning is to ___.", ["get your point across", "read between the lines", "convey"], 1, "'read between the lines'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 3 (word formation)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 3",
      instructions: "Forma la palabra que encaje a partir de la RAÍZ. Texto:\n\nThe idea that some languages are more (1)___ (LOGIC) than others is largely a myth. Linguists have (2)___ (REPEAT) shown that every language is a fully (3)___ (FUNCTION) system. What varies is not (4)___ (COMPLEX) but the areas each language chooses to be precise. This (5)___ (DIVERSE) is a source of fascination rather than (6)___ (SUPERIOR). Indeed, the (7)___ (ASSUME) that one's own language is superior reveals more about prejudice than about (8)___ (LINGUIST) fact.",
      questions: [
        fb("Hueco 1 (LOGIC)", ["logical"], "Adjetivo: 'logical'."),
        fb("Hueco 2 (REPEAT)", ["repeatedly"], "Adverbio: 'repeatedly'."),
        fb("Hueco 3 (FUNCTION)", ["functional"], "Adjetivo: 'functional'."),
        fb("Hueco 4 (COMPLEX)", ["complexity"], "Sustantivo: 'complexity'."),
        fb("Hueco 5 (DIVERSE)", ["diversity"], "Sustantivo: 'diversity'."),
        fb("Hueco 6 (SUPERIOR)", ["superiority"], "Sustantivo: 'superiority'."),
        fb("Hueco 7 (ASSUME)", ["assumption"], "Sustantivo: 'assumption'."),
        fb("Hueco 8 (LINGUIST)", ["linguistic"], "Adjetivo: 'linguistic'."),
      ],
    },
  },

  {
    n: 4,
    theme: "Condicionales e inversión · Tiempo · SIMULACRO Mes 1",
    grammar: {
      title: "Condicionales, inversión y pasado irreal (registro alto)",
      blocks: [
        "Inversión formal sin 'if': Had I known…; Were it not for…; Should you require…\nPasado irreal tras 'it's time', 'would rather', 'as if/though': 'It's time we left'; 'I'd rather you didn't'; 'He talks as if he knew everything.'\nCondicionales mixtas y 'but for' (de no ser por): 'But for your help, I would have failed.'",
      ],
      exercise: {
        title: "Práctica — Condicionales e inversión",
        instructions: "Completa (usa inversión o pasado irreal donde se pida).",
        questions: [
          fb("___ it not for the rain, the event would have been perfect.", ["Were"], "Inversión: 'Were it not for'."),
          fb("It's high time we ___ (leave); it's very late.", ["left"], "'it's time' + pasado irreal."),
          fb("He behaves as if he ___ (own) the place.", ["owned"], "'as if' + pasado irreal."),
          fb("___ you change your mind, do let me know. (inversión de 'If you should')", ["Should"], "Inversión: 'Should you change…'."),
          fb("I'd rather you ___ (not/mention) it to anyone.", ["didn't mention", "did not mention"], "'would rather + pasado'."),
          fb("But ___ your support, I could never have finished.", ["for"], "'But for' = de no ser por."),
        ],
      },
    },
    vocab: {
      title: "Tiempo y cambio",
      deck: [
        ["fleeting", "fugaz", "a fleeting moment", "adjetivo"],
        ["in the long run", "a la larga", "It pays off in the long run.", "expresión"],
        ["a watershed", "un punto de inflexión", "a watershed moment", "sustantivo"],
        ["obsolete", "obsoleto", "The technology is obsolete.", "adjetivo"],
        ["gradual", "gradual", "a gradual shift", "adjetivo"],
        ["overnight", "de la noche a la mañana", "It didn't happen overnight.", "adverbio"],
        ["stand the test of time", "resistir el paso del tiempo", "It has stood the test of time.", "idiom"],
        ["a bygone era", "una época pasada", "relics of a bygone era", "expresión"],
        ["set in motion", "poner en marcha", "The reforms were set in motion.", "colocación"],
        ["with hindsight", "en retrospectiva", "With hindsight, it was a mistake.", "expresión"],
      ],
      exercise: {
        title: "Práctica — Tiempo",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Lasting a very short time is ___.", ["gradual", "fleeting", "obsolete"], 1, "'fleeting'."),
          mc("A critical turning point is a ___.", ["watershed", "bygone era", "hindsight"], 0, "'a watershed'."),
          mc("No longer in use, outdated, is ___.", ["fleeting", "gradual", "obsolete"], 2, "'obsolete'."),
          mc("Looking back with knowledge you didn't have is ___.", ["overnight", "with hindsight", "in the long run"], 1, "'with hindsight'."),
          mc("Something that happens very suddenly happens ___.", ["gradually", "overnight", "in the long run"], 1, "'overnight'."),
          mc("Over an extended future period is ___.", ["in the long run", "overnight", "fleeting"], 0, "'in the long run'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 4 (key word transformations)",
      category: "reading", weight: 12,
      title: "Examen semanal — RUoE Parte 4",
      instructions: "Reescribe la segunda frase (3–8 palabras) con la PALABRA CLAVE. Escribe SOLO lo que falta.",
      questions: [
        fb("1) 'The new evidence completely changed how we saw the case.'  (LIGHT)\n→ The new evidence ___ a completely different light.", ["cast the case in", "put the case in"], "Idiom: 'cast/put something in a … light'."),
        fb("2) 'I only realised how serious it was after they had left.'  (SUNK)\n→ The seriousness ___ after they had left.", ["only sank in"], "'sink in'."),
        fb("3) 'He pretended he hadn't heard the question.'  (DEAF)\n→ He ___ the question.", ["turned a deaf ear to"], "Idiom: 'turn a deaf ear to'."),
        fb("4) 'Everyone was surprised when she resigned.'  (TOOK)\n→ Her resignation ___ by surprise.", ["took everyone", "took everybody"], "'take somebody by surprise'."),
        fb("5) 'It's very unlikely that they'll agree.'  (CHANCE)\n→ There ___ they'll agree.", ["is little chance"], "'there is little chance (that)'."),
        fb("6) 'You must not tell anyone about this.'  (CIRCUMSTANCES)\n→ Under ___ tell anyone about this.", ["no circumstances must you"], "Inversión enfática: 'Under no circumstances must you…'."),
      ],
    },
    monthlyMock: 1,
  },

  {
    n: 5,
    theme: "Modalidad y matiz · Argumentación",
    grammar: {
      title: "Modalidad, atenuación (hedging) y grados de certeza",
      blocks: [
        "En textos formales, C2 gradúa la certeza: It is (highly) likely/probable that…; There is a tendency to…; This may well suggest…; It could be argued that…\nAtenuación con verbos: appear/seem/tend to; con adverbios: arguably, seemingly, ostensibly.\nModales de matiz: 'may/might well', 'can't help but', 'would rather', 'may as well'.",
      ],
      exercise: {
        title: "Práctica — Modalidad y matiz",
        instructions: "Completa con la expresión de matiz adecuada.",
        questions: [
          fb("This finding may ___ change how we teach reading. (muy probablemente)", ["well"], "'may well' = muy probablemente."),
          fb("It could ___ argued that the policy has failed. (podría argumentarse)", ["be"], "'It could be argued that…'."),
          fb("There is a ___ to overestimate our own abilities. (tendencia)", ["tendency"], "'a tendency to'."),
          fb("The results ___ to support the hypothesis. (parecen)", ["seem", "appear", "tend"], "Atenuación: 'seem/appear to'."),
          fb("I can't help ___ (feel) that something is wrong.", ["feeling"], "'can't help + -ing'."),
          fb("We may as ___ start now as wait. (más vale que)", ["well"], "'may as well' = más vale."),
        ],
      },
    },
    vocab: {
      title: "Argumentación y persuasión",
      deck: [
        ["compelling", "convincente / irresistible", "a compelling argument", "adjetivo"],
        ["refute", "refutar", "refute a claim", "verbo"],
        ["concede", "conceder / admitir", "I concede your point.", "verbo"],
        ["a flaw", "un fallo / defecto", "a flaw in the reasoning", "sustantivo"],
        ["substantiate", "fundamentar", "substantiate a claim", "verbo"],
        ["undermine", "socavar", "undermine an argument", "verbo"],
        ["a rebuttal", "una refutación", "a sharp rebuttal", "sustantivo"],
        ["put forward", "proponer / plantear", "put forward a theory", "phrasal verb"],
        ["a case in point", "un ejemplo claro", "This is a case in point.", "expresión"],
        ["play devil's advocate", "hacer de abogado del diablo", "Let me play devil's advocate.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Argumentación",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A very convincing argument is ___.", ["compelling", "flawed", "conceded"], 0, "'compelling'."),
          mc("To prove a claim false is to ___ it.", ["substantiate", "refute", "put forward"], 1, "'refute'."),
          mc("To weaken an argument is to ___ it.", ["undermine", "substantiate", "concede"], 0, "'undermine'."),
          mc("A weakness in reasoning is a ___.", ["rebuttal", "flaw", "case"], 1, "'a flaw'."),
          mc("To support a claim with evidence is to ___ it.", ["refute", "substantiate", "undermine"], 1, "'substantiate'."),
          mc("To admit that part of an opposing view is valid is to ___.", ["refute", "concede", "undermine"], 1, "'concede'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 5 (multiple choice)",
      category: "reading", weight: 12,
      title: "Examen semanal — RUoE Parte 5",
      instructions: "Lee y elige la mejor opción.\n\nThere is a peculiar assumption at the heart of consumer culture: that more choice is always better. The reasoning seems unimpeachable — the more options we have, the more likely we are to find one that suits us. And yet the evidence points, disconcertingly, in the opposite direction. Confronted with an overwhelming array of possibilities, people are not liberated but paralysed. They defer the decision, or make one and then spend their energy regretting the roads not taken. Satisfaction, it turns out, depends less on the objective quality of what we choose than on our conviction that we could not have done better. Abundance, paradoxically, corrodes precisely that conviction.",
      questions: [
        mc("What assumption does the writer challenge?", ["That people dislike shopping.", "That more choice is always better.", "That satisfaction is impossible."], 1, "'that more choice is always better'."),
        mc("What effect does too much choice have?", ["It liberates people.", "It paralyses people.", "It speeds up decisions."], 1, "'not liberated but paralysed'."),
        mc("Satisfaction depends mainly on…", ["the objective quality of the choice.", "the conviction that one could not have chosen better.", "the number of options."], 1, "'our conviction that we could not have done better'."),
        mc("'Abundance corrodes precisely that conviction' means…", ["Too many options weaken our certainty that we chose well.", "Abundance destroys products.", "Choice improves conviction."], 0, "La abundancia socava la convicción de haber elegido bien."),
        mc("The word 'disconcertingly' suggests the evidence is…", ["reassuring.", "unexpected and unsettling.", "irrelevant."], 1, "'disconcertingly' = de forma desconcertante."),
        mc("The writer's tone is best described as…", ["indignant.", "reflective and analytical.", "nostalgic."], 1, "Tono reflexivo y analítico."),
      ],
    },
  },

  {
    n: 6,
    theme: "Pasiva impersonal · Poder y política",
    grammar: {
      title: "Pasiva impersonal y estructuras de reporte formales",
      blocks: [
        "Reporte impersonal: It is widely believed/held/acknowledged that…; She is thought/said/reported to + infinitivo.\n'be to' para instrucciones/planes formales (Visitors are to remain seated).\n'have/get something done' (causativa) y pasiva con complemento (The delegates were shown the plans).",
      ],
      exercise: {
        title: "Práctica — Pasiva impersonal",
        instructions: "Transforma o completa.",
        questions: [
          fb("People believe the minister will resign.  → The minister ___ to resign.", ["is believed"], "'is believed to + infinitivo'."),
          fb("It ___ (widely/acknowledge) that reforms are needed.", ["is widely acknowledged"], "'It is widely acknowledged that…'."),
          fb("They say she was a brilliant negotiator.  → She ___ to have been a brilliant negotiator.", ["is said"], "'is said to have been'."),
          fb("All visitors ___ (remain) seated during the session. (norma formal)", ["are to remain"], "'be to' para normas: 'are to remain'."),
          fb("The prime minister ___ (report) to be considering an early election.", ["is reported"], "'is reported to be'."),
          fb("We ___ our proposal ___ (reject) by the committee. (causativa pasiva)", ["had our proposal rejected"], "'have something done'."),
        ],
      },
    },
    vocab: {
      title: "Poder y política",
      deck: [
        ["accountable", "responsable / que rinde cuentas", "hold leaders accountable", "adjetivo"],
        ["a mandate", "un mandato", "a clear electoral mandate", "sustantivo"],
        ["partisan", "partidista", "partisan politics", "adjetivo"],
        ["a crackdown", "una ofensiva / medidas enérgicas", "a crackdown on corruption", "sustantivo"],
        ["vested interests", "intereses creados", "powerful vested interests", "expresión"],
        ["lobby", "presionar / grupo de presión", "lobby for change", "verbo/sustantivo"],
        ["a landslide", "una victoria aplastante", "won by a landslide", "sustantivo"],
        ["red tape", "burocracia", "cut through the red tape", "idiom"],
        ["sway public opinion", "influir en la opinión pública", "sway public opinion", "colocación"],
        ["a watchdog", "un organismo de control", "an independent watchdog", "sustantivo"],
      ],
      exercise: {
        title: "Práctica — Política",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Required to explain and take responsibility is ___.", ["partisan", "accountable", "vested"], 1, "'accountable'."),
          mc("An overwhelming election victory is a ___.", ["mandate", "landslide", "crackdown"], 1, "'landslide'."),
          mc("Strongly biased towards one party is ___.", ["accountable", "partisan", "vested"], 1, "'partisan'."),
          mc("Excessive official rules and paperwork are ___.", ["a watchdog", "red tape", "a mandate"], 1, "'red tape'."),
          mc("Personal stakes in keeping things as they are are ___.", ["vested interests", "a landslide", "a crackdown"], 0, "'vested interests'."),
          mc("A body that monitors and reports wrongdoing is a ___.", ["mandate", "watchdog", "lobby"], 1, "'watchdog'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 6 (gapped text)",
      category: "reading", weight: 7,
      title: "Examen semanal — RUoE Parte 6",
      instructions: "Elige la frase (A–E) que va en cada hueco. SOBRAN dos.\n\nWe live, it is often observed, in an age of noise. [HUECO 1] Silence, once an ordinary feature of daily life, has become a luxury we must actively seek out. [HUECO 2] Yet the value of silence goes far beyond mere peace and quiet. [HUECO 3] It is in these unfilled moments that the mind wanders, reflects and sometimes arrives at its most original insights.\n\nFRASES:\nA. From the hum of traffic to the constant pings of our devices, we are rarely far from some form of sound.\nB. Researchers have found that periods of quiet can lower stress and even encourage the growth of new brain cells.\nC. This is perhaps why retreats promising total silence have grown so popular among the overstimulated.\nD. Music, of course, has always been part of human culture.\nE. Most people sleep better in a cool room.",
      questions: [
        mc("HUECO 1", ["B (los estudios hallan que el silencio reduce el estrés)", "A (del tráfico a los avisos del móvil, rara vez sin sonido)", "E (se duerme mejor en una habitación fresca)", "C (por eso los retiros de silencio son populares)", "D (la música siempre ha existido)"], 1, "Tras 'age of noise', A lo desarrolla (fuentes de ruido)."),
        mc("HUECO 2", ["B", "A", "E", "C (por eso los retiros de silencio son populares)", "D"], 3, "Tras 'must actively seek out', C ('This is why retreats… have grown so popular')."),
        mc("HUECO 3", ["B (los estudios hallan que el silencio reduce el estrés y crea neuronas)", "A", "E", "C", "D"], 0, "Tras 'goes beyond mere peace and quiet', B da el valor científico. D y E sobran."),
      ],
    },
  },

  {
    n: 7,
    theme: "Cláusulas complejas · Mente y psicología",
    grammar: {
      title: "Cláusulas de relativo/participio y sintaxis compleja",
      blocks: [
        "Relativas con cuantificador + of which/whom: 'He gave three reasons, none of which convinced me.'\nCláusulas de participio de causa/tiempo: 'Exhausted, she collapsed.'; 'Being new, he was nervous.'\nSujetos anticipados y estructuras enfáticas: 'What surprised me was…'; 'That he lied is beyond doubt.'",
      ],
      exercise: {
        title: "Práctica — Sintaxis compleja",
        instructions: "Completa correctamente.",
        questions: [
          fb("He made several promises, none of ___ he kept.", ["which"], "'none of which' = ninguna de las cuales."),
          fb("She interviewed ten candidates, most of ___ were qualified.", ["whom"], "'most of whom' (personas)."),
          fb("___ (exhaust) after the journey, they went straight to bed.", ["Exhausted"], "Cláusula de participio: 'Exhausted, …'."),
          fb("___ (be) a beginner, he found the task daunting.", ["Being"], "Participio de causa: 'Being a beginner…'."),
          fb("___ surprised me most was her calmness. (lo que)", ["What"], "'What surprised me…' (sujeto anticipado)."),
          fb("The results, ___ were unexpected, changed the study.", ["which"], "Relativa explicativa: 'which'."),
        ],
      },
    },
    vocab: {
      title: "Mente y psicología",
      deck: [
        ["cognition", "cognición", "human cognition", "sustantivo"],
        ["a bias", "un sesgo", "cognitive bias", "sustantivo"],
        ["subconscious", "subconsciente", "subconscious desires", "adjetivo"],
        ["perception", "percepción", "sensory perception", "sustantivo"],
        ["resilient", "resiliente", "emotionally resilient", "adjetivo"],
        ["dwell on", "obsesionarse con / darle vueltas", "Don't dwell on mistakes.", "phrasal verb"],
        ["a coping mechanism", "un mecanismo de defensa", "humour as a coping mechanism", "colocación"],
        ["self-fulfilling prophecy", "profecía autocumplida", "a self-fulfilling prophecy", "expresión"],
        ["frame of mind", "estado de ánimo", "a positive frame of mind", "expresión"],
        ["snap out of it", "salir de un estado", "Try to snap out of it.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Psicología",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("A tendency to judge in a distorted way is a ___.", ["perception", "bias", "cognition"], 1, "'a bias'."),
          mc("The mental process of knowing and understanding is ___.", ["cognition", "resilience", "perception"], 0, "'cognition'."),
          mc("To keep thinking anxiously about something is to ___ it.", ["snap out of", "dwell on", "cope with"], 1, "'dwell on'."),
          mc("A way of dealing with stress is a ___.", ["frame of mind", "coping mechanism", "bias"], 1, "'coping mechanism'."),
          mc("A belief that causes itself to come true is a ___.", ["self-fulfilling prophecy", "coping mechanism", "perception"], 0, "'self-fulfilling prophecy'."),
          mc("Able to recover emotionally is ___.", ["subconscious", "resilient", "biased"], 1, "'resilient'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 7 (multiple matching)",
      category: "reading", weight: 10,
      title: "Examen semanal — RUoE Parte 7",
      instructions: "¿Qué persona (A–D) expresa cada idea sobre el fracaso? Puede repetirse.\n\nA — Nadia: Every worthwhile thing I've done grew out of an earlier failure. I've learned to treat setbacks as data, not disasters.\nB — Leo: I understand the fashionable idea that failure is good, but I think it's overstated. Some failures are just costly, and pretending otherwise is dishonest.\nC — Priya: What matters isn't failing but how quickly you recover. My resilience has served me better than any talent.\nD — Omar: Fear of failure held me back for years. Only when I stopped caring about looking foolish did I finally make progress.",
      questions: [
        mc("1) I treat mistakes as useful information.", ["A (Nadia)", "B (Leo)", "C (Priya)", "D (Omar)"], 0, "Nadia: 'setbacks as data, not disasters'."),
        mc("2) I think the benefits of failure are exaggerated.", ["A", "B (Leo)", "C", "D"], 1, "Leo: 'it's overstated'."),
        mc("3) Recovering quickly is my greatest strength.", ["A", "B", "C (Priya)", "D"], 2, "Priya: 'my resilience has served me better than any talent'."),
        mc("4) Worrying about failure once limited me.", ["A", "B", "C", "D (Omar)"], 3, "Omar: 'Fear of failure held me back'."),
        mc("5) Not every failure is worth celebrating.", ["A", "B (Leo)", "C", "D"], 1, "Leo: 'Some failures are just costly'."),
        mc("6) I stopped worrying about looking foolish.", ["A", "B", "C", "D (Omar)"], 3, "Omar: 'stopped caring about looking foolish'."),
      ],
    },
  },

  {
    n: 8,
    theme: "Énfasis y estilo · Arte · SIMULACRO Mes 2",
    grammar: {
      title: "Énfasis, fronting e inversión (registro elevado)",
      blocks: [
        "Cleft avanzado: 'It was only later that I understood.'; 'What he needs is time.'; 'All (that) I want is peace.'\nFronting con inversión: 'Never before had I seen such beauty.'; 'So great was the demand that…'; 'Not until midnight did they arrive.'; 'Little did she suspect…'.\nEstos recursos aportan énfasis y sofisticación en Writing y Speaking.",
      ],
      exercise: {
        title: "Práctica — Énfasis e inversión",
        instructions: "Reescribe con la estructura enfática.",
        questions: [
          fb("Enfatiza: 'I understood only later.'  → It was only later ___ I understood.", ["that"], "It-cleft: 'It was only later that…'."),
          fb("Invierte: 'I had never seen such chaos.'  → Never ___ such chaos.", ["had I seen"], "Inversión tras 'Never': 'Never had I seen'."),
          fb("Invierte: 'The demand was so great that stocks ran out.'  → So great ___ the demand that stocks ran out.", ["was"], "Inversión: 'So great was the demand'."),
          fb("Invierte: 'They didn't arrive until midnight.'  → Not until midnight ___ they arrive.", ["did"], "Inversión tras 'Not until…': 'did they arrive'."),
          fb("Invierte: 'She little suspected the truth.'  → Little ___ she suspect the truth.", ["did"], "Inversión: 'Little did she suspect'."),
          fb("Enfatiza: 'I only want some peace.'  → All I ___ some peace.", ["want is"], "'All I want is…'."),
        ],
      },
    },
    vocab: {
      title: "Arte y estética",
      deck: [
        ["evocative", "evocador", "evocative imagery", "adjetivo"],
        ["understated", "sobrio / discreto", "understated elegance", "adjetivo"],
        ["contrived", "artificioso / forzado", "a contrived ending", "adjetivo"],
        ["a masterpiece", "una obra maestra", "an undisputed masterpiece", "sustantivo"],
        ["poignant", "conmovedor", "a poignant scene", "adjetivo"],
        ["derivative", "poco original", "a derivative style", "adjetivo"],
        ["avant-garde", "vanguardista", "avant-garde art", "adjetivo"],
        ["resonate with", "calar / conectar con", "The film resonates with audiences.", "colocación"],
        ["a connoisseur", "un entendido / conocedor", "a wine connoisseur", "sustantivo"],
        ["timeless", "atemporal", "a timeless classic", "adjetivo"],
      ],
      exercise: {
        title: "Práctica — Arte",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Bringing strong images or feelings to mind is ___.", ["understated", "evocative", "contrived"], 1, "'evocative'."),
          mc("Deeply moving and touching is ___.", ["derivative", "poignant", "contrived"], 1, "'poignant'."),
          mc("Artificial and unconvincing is ___.", ["timeless", "evocative", "contrived"], 2, "'contrived'."),
          mc("Copying others, not original, is ___.", ["derivative", "avant-garde", "poignant"], 0, "'derivative'."),
          mc("An expert with refined taste is a ___.", ["masterpiece", "connoisseur", "critic"], 1, "'connoisseur'."),
          mc("Not affected by the passing of time is ___.", ["understated", "timeless", "contrived"], 1, "'timeless'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 2 (open cloze)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 2 (avanzada)",
      instructions: "Escribe UNA palabra en cada hueco. Texto:\n\nNostalgia, (1)___ was once regarded by doctors as a kind of illness, is now seen as a largely healthy emotion. (2)___ we look back fondly on the past, we tend to feel more connected to others. This may (3)___ explain why nostalgia so often surfaces (4)___ times of uncertainty. Far (5)___ being a retreat from reality, a gentle dose of nostalgia can give us the strength to (6)___ on.",
      questions: [
        fb("Hueco 1", ["which"], "Relativa explicativa: 'which was once regarded'."),
        fb("Hueco 2", ["When"], "'When we look back…'."),
        fb("Hueco 3", ["well"], "'may well explain' = muy probablemente."),
        fb("Hueco 4", ["in", "at"], "'in/at times of uncertainty'."),
        fb("Hueco 5", ["from"], "'Far from being' = lejos de ser."),
        fb("Hueco 6", ["carry", "move", "go"], "'the strength to carry on'."),
      ],
    },
    monthlyMock: 2,
  },

  {
    n: 9,
    theme: "Cohesión y registro · Ética",
    grammar: {
      title: "Marcadores del discurso, cohesión y cambios de registro",
      blocks: [
        "Cohesión: referencia (this, such, the former/the latter), sustitución (one, do so), elipsis.\nMarcadores por función: adición (moreover, furthermore), contraste (nevertheless, conversely), concesión (admittedly, granted), ejemplificación (namely, to illustrate), resultado (consequently, hence).\nRegistro: alternar entre formal (utilise, ascertain) e informal según el tipo de texto.",
      ],
      exercise: {
        title: "Práctica — Cohesión y registro",
        instructions: "Completa con el conector/recurso adecuado.",
        questions: [
          fb("The report is thorough; ___, it overlooks costs. (sin embargo, formal)", ["however", "nevertheless", "nonetheless"], "Contraste formal."),
          fb("Two options exist, ___ merging or closing. (a saber)", ["namely"], "Ejemplificación: 'namely'."),
          fb("She dislikes the plan; ___, she'll support it. (no obstante)", ["nevertheless", "nonetheless", "however"], "Concesión/contraste."),
          fb("Sales fell; ___, staff were cut. (en consecuencia)", ["consequently", "hence", "therefore"], "Resultado: 'consequently'."),
          fb("He chose the ___ of the two options. (el segundo)", ["latter"], "Referencia: 'the latter' = el segundo."),
          fb("I don't like coffee, and my sister doesn't ___ either. (sustitución)", ["do so"], "Sustitución del verbo con 'do so'."),
        ],
      },
    },
    vocab: {
      title: "Ética y moralidad",
      deck: [
        ["integrity", "integridad", "professional integrity", "sustantivo"],
        ["a dilemma", "un dilema", "an ethical dilemma", "sustantivo"],
        ["hypocritical", "hipócrita", "a hypocritical stance", "adjetivo"],
        ["justify", "justificar", "The end doesn't justify the means.", "verbo"],
        ["scruples", "escrúpulos", "He has no scruples.", "sustantivo"],
        ["accountability", "rendición de cuentas", "demand accountability", "sustantivo"],
        ["a double standard", "un doble rasero", "apply a double standard", "expresión"],
        ["turn a blind eye", "hacer la vista gorda", "turn a blind eye to cheating", "idiom"],
        ["morally reprehensible", "moralmente reprochable", "a morally reprehensible act", "colocación"],
        ["the greater good", "el bien común", "sacrifice for the greater good", "expresión"],
      ],
      exercise: {
        title: "Práctica — Ética",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Strong honesty and moral principles are ___.", ["a dilemma", "integrity", "scruples"], 1, "'integrity'."),
          mc("A difficult choice between two options is a ___.", ["dilemma", "double standard", "scruple"], 0, "'a dilemma'."),
          mc("Saying one thing but doing another is being ___.", ["accountable", "hypocritical", "morally sound"], 1, "'hypocritical'."),
          mc("Judging similar things by different rules is a ___.", ["greater good", "double standard", "dilemma"], 1, "'a double standard'."),
          mc("To deliberately ignore wrongdoing is to ___.", ["justify", "turn a blind eye", "demand accountability"], 1, "'turn a blind eye'."),
          mc("Moral concerns that stop you doing wrong are ___.", ["scruples", "dilemmas", "standards"], 0, "'scruples'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 3 (word formation)",
      category: "reading", weight: 8,
      title: "Examen semanal — RUoE Parte 3 (avanzada)",
      instructions: "Forma la palabra a partir de la RAÍZ. Texto:\n\nPersuasion is a subtle art. The most (1)___ (EFFECT) communicators rarely rely on facts alone; they appeal to emotion and (2)___ (IDENTIFY). A speaker's (3)___ (CREDIBLE) often matters more than the strength of their (4)___ (ARGUE). Even the mere (5)___ (REPEAT) of a claim can increase its (6)___ (PERSUADE) power, a fact that (7)___ (SCRUPLE) advertisers know only too well. Understanding these mechanisms is the first step towards (8)___ (RESIST) them.",
      questions: [
        fb("Hueco 1 (EFFECT)", ["effective"], "Adjetivo: 'effective'."),
        fb("Hueco 2 (IDENTIFY)", ["identity"], "Sustantivo: 'identity'."),
        fb("Hueco 3 (CREDIBLE)", ["credibility"], "Sustantivo: 'credibility'."),
        fb("Hueco 4 (ARGUE)", ["argument"], "Sustantivo: 'argument'."),
        fb("Hueco 5 (REPEAT)", ["repetition"], "Sustantivo: 'repetition'."),
        fb("Hueco 6 (PERSUADE)", ["persuasive"], "Adjetivo: 'persuasive'."),
        fb("Hueco 7 (SCRUPLE)", ["unscrupulous"], "Adjetivo negativo: 'unscrupulous'."),
        fb("Hueco 8 (RESIST)", ["resisting"], "Gerundio tras preposición: 'resisting'."),
      ],
    },
  },

  {
    n: 10,
    theme: "Lenguaje idiomático · Idioms · SIMULACRO se acerca",
    grammar: {
      title: "Lenguaje idiomático y figurado; precisión en la colocación",
      blocks: [
        "En C2 se maneja el lenguaje figurado: metáforas comunes ('a flood of complaints', 'to shed light on'), phrasal verbs de registro alto (embark on, delve into, gloss over) e idioms.\nLa PRECISIÓN de la colocación distingue a un usuario experto: 'heavy rain' (no 'strong rain'), 'make a decision' (no 'do'), 'a narrow escape', 'a foregone conclusion'.",
      ],
      exercise: {
        title: "Práctica — Idioms y colocación",
        instructions: "Completa con la palabra exacta.",
        questions: [
          fb("The study aims to ___ light on the causes. (arrojar)", ["shed", "throw"], "'shed/throw light on'."),
          fb("She decided to ___ into the archives for evidence. (indagar)", ["delve"], "'delve into'."),
          fb("They embarked ___ an ambitious project. (emprender)", ["on"], "'embark on'."),
          fb("The result was a ___ conclusion — everyone knew it. (cantada)", ["foregone"], "'a foregone conclusion'."),
          fb("It was a ___ escape; the car missed us by inches. (por los pelos)", ["narrow", "close"], "'a narrow/close escape'."),
          fb("Politicians tend to ___ over inconvenient facts. (pasar por alto)", ["gloss"], "'gloss over'."),
        ],
      },
    },
    vocab: {
      title: "Expresiones idiomáticas frecuentes",
      deck: [
        ["a blessing in disguise", "no hay mal que por bien no venga", "Losing that job was a blessing in disguise.", "idiom"],
        ["the tip of the iceberg", "la punta del iceberg", "This is just the tip of the iceberg.", "idiom"],
        ["cut to the chase", "ir al grano", "Let me cut to the chase.", "idiom"],
        ["a grey area", "una zona gris / ambigua", "The law is a grey area here.", "idiom"],
        ["bite the bullet", "hacer de tripas corazón", "I decided to bite the bullet.", "idiom"],
        ["on the same wavelength", "en la misma sintonía", "We're on the same wavelength.", "idiom"],
        ["a storm in a teacup", "una tormenta en un vaso de agua", "It was a storm in a teacup.", "idiom"],
        ["throw in the towel", "tirar la toalla", "Don't throw in the towel.", "idiom"],
        ["a foregone conclusion", "una conclusión cantada", "The result was a foregone conclusion.", "idiom"],
        ["a double-edged sword", "un arma de doble filo", "Fame is a double-edged sword.", "idiom"],
      ],
      exercise: {
        title: "Práctica — Idioms",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Something bad that turns out well is ___.", ["a blessing in disguise", "a grey area", "the tip of the iceberg"], 0, "'a blessing in disguise'."),
          mc("A small visible part of a much bigger problem is ___.", ["a storm in a teacup", "the tip of the iceberg", "a grey area"], 1, "'the tip of the iceberg'."),
          mc("To get to the main point quickly is to ___.", ["throw in the towel", "cut to the chase", "bite the bullet"], 1, "'cut to the chase'."),
          mc("Something with both good and bad sides is a ___.", ["grey area", "double-edged sword", "storm in a teacup"], 1, "'a double-edged sword'."),
          mc("To give up is to ___.", ["bite the bullet", "cut to the chase", "throw in the towel"], 2, "'throw in the towel'."),
          mc("To force yourself to do something unpleasant is to ___.", ["bite the bullet", "throw in the towel", "cut to the chase"], 0, "'bite the bullet'."),
        ],
      },
    },
    exam: {
      part: "Reading & Use of English — Parte 4 (key word transformations)",
      category: "reading", weight: 12,
      title: "Examen semanal — RUoE Parte 4 (idiomática)",
      instructions: "Reescribe la segunda frase (3–8 palabras) con la PALABRA CLAVE. Escribe SOLO lo que falta.",
      questions: [
        fb("1) 'She suddenly understood what he meant.'  (DAWNED)\n→ It ___ what he meant.", ["suddenly dawned on her"], "'dawn on somebody'."),
        fb("2) 'Nobody expected the company to recover, but it did.'  (ODDS)\n→ ___, the company recovered.", ["Against all odds"], "Idiom: 'against all odds'."),
        fb("3) 'She pretended not to notice the mistake.'  (BLIND)\n→ She ___ to the mistake.", ["turned a blind eye"], "Idiom: 'turn a blind eye to'."),
        fb("4) 'It's obvious he's going to win.'  (CONCLUSION)\n→ His victory is a ___.", ["foregone conclusion"], "'a foregone conclusion'."),
        fb("5) 'They decided to face the difficult situation.'  (BULLET)\n→ They decided to ___.", ["bite the bullet"], "'bite the bullet'."),
        fb("6) 'The fuss was about nothing important.'  (STORM)\n→ It was a ___.", ["storm in a teacup"], "'a storm in a teacup'."),
      ],
    },
  },

  {
    n: 11,
    theme: "Estilo formal/académico · Academia",
    grammar: {
      title: "Estilo formal y académico (para el essay de la Parte 1)",
      blocks: [
        "Rasgos del estilo académico: nominalización, voz pasiva impersonal, atenuación (hedging), conectores formales, evitar contracciones y coloquialismos.\nEl essay de C2 (Parte 1) RESUME y VALORA dos textos: parafrasea sin copiar, integra las ideas y añade tu evaluación con lenguaje matizado ('it would be simplistic to suggest that…', 'there is some merit in…', 'on balance').",
      ],
      exercise: {
        title: "Práctica — Estilo formal",
        instructions: "Completa con la opción más formal/adecuada.",
        questions: [
          fb("Reescribe formal: 'The plan didn't work.'  → The plan ___ (fail).", ["failed"], "Más formal/preciso: 'failed'."),
          fb("Atenúa: 'This proves X.'  → This ___ suggest X. (podría)", ["may", "might", "could"], "Hedging: 'may/might/could suggest'."),
          fb("Nominaliza: 'They implemented it slowly.'  → The slow ___ (implement) caused delays.", ["implementation"], "Nominalización: 'implementation'."),
          fb("Conector formal de concesión: 'X has some merit; ___, it overlooks Y.'", ["however", "nevertheless", "nonetheless"], "Contraste formal."),
          fb("Formal: 'a lot of evidence' → a ___ body of evidence.", ["substantial", "considerable", "large"], "Colocación formal: 'a substantial/considerable body of evidence'."),
          fb("Impersonal: 'I think X is true.'  → It ___ be argued that X is true.", ["could", "may", "might"], "Impersonal: 'It could be argued that…'."),
        ],
      },
    },
    vocab: {
      title: "Academia e investigación",
      deck: [
        ["empirical", "empírico", "empirical evidence", "adjetivo"],
        ["a hypothesis", "una hipótesis", "test the hypothesis", "sustantivo"],
        ["correlate with", "correlacionar con", "X correlates with Y.", "verbo"],
        ["a caveat", "una advertencia / salvedad", "with one important caveat", "sustantivo"],
        ["scrutinise", "examinar con detalle", "scrutinise the findings", "verbo"],
        ["a paradigm", "un paradigma", "a scientific paradigm", "sustantivo"],
        ["negligible", "insignificante", "a negligible difference", "adjetivo"],
        ["robust", "sólido / robusto", "robust evidence", "adjetivo"],
        ["a body of research", "un conjunto de investigación", "a growing body of research", "colocación"],
        ["draw a conclusion", "sacar una conclusión", "draw firm conclusions", "colocación"],
      ],
      exercise: {
        title: "Práctica — Academia",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("Based on observation and data is ___.", ["empirical", "negligible", "robust"], 0, "'empirical'."),
          mc("So small as to be unimportant is ___.", ["robust", "negligible", "empirical"], 1, "'negligible'."),
          mc("Strong and reliable (of evidence) is ___.", ["negligible", "robust", "empirical"], 1, "'robust'."),
          mc("A warning or qualification is a ___.", ["caveat", "paradigm", "hypothesis"], 0, "'a caveat'."),
          mc("To examine something very carefully is to ___ it.", ["correlate", "scrutinise", "draw"], 1, "'scrutinise'."),
          mc("A model or framework of ideas is a ___.", ["caveat", "paradigm", "hypothesis"], 1, "'a paradigm'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 1 (essay que resume y valora dos textos)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (essay)",
      instructions: "Lee las dos posturas y escribe tu essay (240–280 palabras) resumiendo y valorando ambas. Compáralo con el modelo.",
      questions: [
        open(
          "Read the two texts. Write an essay summarising and evaluating the key points, and giving your own views. 240–280 words.\n\nText A: 'Greater choice is a mark of a free and prosperous society. The more options people have, the more control they exercise over their own lives.'\n\nText B: 'An excess of choice can be oppressive. Faced with too many options, people freeze, procrastinate and end up less satisfied than those with fewer alternatives.'",
          "Parafrasea las ideas clave de A y B, valóralas (mérito y límites) y da tu postura matizada. Formal, cohesión avanzada.",
          "RESPUESTA MODELO (~255 palabras):\n\n\"Few features of modern life are as revealing as the sheer abundance of choice, and the two texts offer strikingly different verdicts on it. The first celebrates choice as a hallmark of freedom, arguing that the more options individuals enjoy, the greater their autonomy. There is undeniable merit in this: the ability to shape one's own life is central to human dignity.\n\nThe second text, however, complicates this optimistic picture. It contends that an overload of options can be paralysing, leaving people anxious and dissatisfied. This argument, far from being a mere paradox, is supported by a good deal of psychological research: beyond a certain point, additional choices add effort rather than value.\n\nBoth positions, in my view, capture part of the truth. Choice is indeed a precondition of freedom, but freedom is not the same as endless optionality. What matters is not the raw number of alternatives but their quality and our capacity to evaluate them meaningfully.\n\nOn balance, then, I would argue that the two texts are less opposed than they appear. The goal should not be to maximise choice for its own sake, but to design the kind of choice that people can actually use — abundant enough to liberate, yet structured enough not to overwhelm.\"\n\nPor qué funciona: resume y valora A y B, opinión matizada, paráfrasis precisa, lenguaje evaluativo, cohesión avanzada, registro formal, dentro del rango."
        ),
      ],
    },
  },

  {
    n: 12,
    theme: "Precisión y connotación · Writing Parte 2 · SIMULACRO Mes 3",
    grammar: {
      title: "Precisión, connotación y elección de palabras",
      blocks: [
        "En C2, la maestría está en la ELECCIÓN de palabras: distinguir sinónimos por connotación (thin/slim/skinny; determined/stubborn; economical/stingy) y por registro.\nUsa el matiz para persuadir: adjetivos evaluativos, verbos precisos y modulación ('a slight concern' vs 'a grave threat').\nEvita repeticiones con sustitución elegante y variedad léxica.",
      ],
      exercise: {
        title: "Práctica — Connotación",
        instructions: "Elige la palabra con la connotación correcta.",
        questions: [
          mc("A POSITIVE word for careful with money is ___.", ["stingy", "economical", "mean"], 1, "'economical' (positivo); 'stingy/mean' (negativo)."),
          mc("A NEGATIVE word for very determined is ___.", ["persistent", "resolute", "stubborn"], 2, "'stubborn' (negativo)."),
          mc("A POSITIVE word for slim/thin is ___.", ["skinny", "slender", "scrawny"], 1, "'slender' (positivo)."),
          mc("A word suggesting a SMALL worry is ___.", ["a grave threat", "a slight concern", "a crisis"], 1, "'a slight concern' = matiz de poca importancia."),
          mc("A NEGATIVE word for someone who talks a lot is ___.", ["articulate", "eloquent", "long-winded"], 2, "'long-winded' (negativo)."),
          mc("A POSITIVE word for unusual is ___.", ["weird", "distinctive", "bizarre"], 1, "'distinctive' (positivo)."),
        ],
      },
    },
    vocab: {
      title: "Matiz y connotación",
      deck: [
        ["a connotation", "una connotación", "the word has negative connotations", "sustantivo"],
        ["understatement", "eufemismo por atenuación", "British understatement", "sustantivo"],
        ["loaded (word)", "cargado / tendencioso", "a loaded question", "adjetivo"],
        ["subtle", "sutil", "a subtle difference", "adjetivo"],
        ["blunt", "directo / sin rodeos", "a blunt reply", "adjetivo"],
        ["diplomatic", "diplomático", "a diplomatic answer", "adjetivo"],
        ["mince your words", "andarse con rodeos", "She doesn't mince her words.", "idiom"],
        ["a turn of phrase", "una manera de expresarse", "a clever turn of phrase", "expresión"],
        ["with tongue in cheek", "en broma / irónicamente", "He said it tongue in cheek.", "idiom"],
        ["couch (in)", "expresar (en cierto tono)", "couched in polite language", "verbo"],
      ],
      exercise: {
        title: "Práctica — Matiz",
        instructions: "Elige la opción correcta.",
        questions: [
          mc("An idea or feeling a word suggests is a ___.", ["connotation", "understatement", "turn of phrase"], 0, "'connotation'."),
          mc("Very direct, even harsh, is ___.", ["diplomatic", "blunt", "subtle"], 1, "'blunt'."),
          mc("Tactful and careful with words is ___.", ["blunt", "diplomatic", "loaded"], 1, "'diplomatic'."),
          mc("To speak very directly, without softening, is to not ___.", ["mince your words", "couch it", "be subtle"], 0, "'not mince your words'."),
          mc("A question designed to influence the answer is a ___ question.", ["subtle", "loaded", "diplomatic"], 1, "'loaded question'."),
          mc("Said as a joke, not seriously, is said with ___.", ["tongue in cheek", "connotation", "understatement"], 0, "'tongue in cheek'."),
        ],
      },
    },
    exam: {
      part: "Writing — Parte 2 (article)",
      category: "writing", weight: 1,
      title: "Examen semanal — Writing (article)",
      instructions: "Escribe tu artículo (280–320 palabras) y compáralo con el modelo.",
      questions: [
        open(
          "An international magazine has invited readers to write an article:\n\n'Has technology brought us closer together, or driven us further apart?'\n\nGive your views, with examples. Write an article of 280–320 words.",
          "Título atractivo, tono ameno pero culto, tesis clara con matices, ejemplos, conclusión. Lenguaje preciso y variado.",
          "RESPUESTA MODELO (~290 palabras):\n\n\"CONNECTED, YET ALONE?\n\nFew questions divide opinion as sharply as the impact of technology on human relationships. To some, the smartphone is a miracle of connection; to others, a wedge quietly driving us apart. The truth, I suspect, is more nuanced than either camp admits.\n\nOn the face of it, the case for connection is overwhelming. A grandmother in Madrid can watch her grandchildren grow up in Sydney; a lonely teenager can find a community of people who share their obscure passion; disasters mobilise help across continents within minutes. In these respects, technology has demolished barriers that once seemed permanent.\n\nAnd yet, anyone who has sat at a dinner table where every guest is staring at a screen knows the other side of the story. Digital contact, for all its convenience, can be curiously hollow. A hundred online 'friends' are no substitute for one person who will sit with you in silence. There is, moreover, a growing suspicion that constant connection leaves us more anxious, not less, endlessly comparing our messy lives with the curated highlights of others.\n\nWhat, then, is the verdict? It would be simplistic to blame the technology itself. A hammer can build a house or break a window; the tool is neutral, and so, largely, is the phone. The real question is how we choose to use it. Used deliberately, technology can deepen the relationships that matter; used mindlessly, it can quietly erode them.\n\nPerhaps, in the end, the challenge of our age is not to reject connection but to reclaim attention — to remember that being reachable is not the same as being present.\"\n\nPor qué funciona: título, tesis matizada, ejemplos concretos, lenguaje preciso y variado ('demolished barriers', 'curiously hollow'), estructura clara, registro ameno-culto, dentro del rango."
        ),
      ],
    },
    monthlyMock: 3,
  },
];

async function main() {
  const [author, category, level, language, status, access, contentTexto] = await Promise.all([
    db.author.findFirst({ where: { isPlatformAuthor: true } }),
    db.category.findFirst({ where: { slug: "idiomas" } }),
    db.courseLevel.findUnique({ where: { key: "experto" } }),
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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  C2 Proficiency anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "C2 Proficiency (Cambridge English: Proficiency / CPE)", subtitle: "Programa intensivo de 12 semanas para el examen C2 Proficiency.",
      description: "Curso completo de preparación para Cambridge English: Proficiency (C2 Proficiency / CPE), el nivel más alto. Programa de 12 semanas con lengua avanzada progresiva, léxico sofisticado y flashcards cada semana, práctica semanal del formato real del examen y simulacros mensuales que estiman tu nota en la Cambridge English Scale (180–230, aprobado 200). Contenido original para un dominio casi nativo.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Preparación C2 Proficiency (CPE) — Programa de 12 semanas — NOVARA", seoDescription: "Prepara el Cambridge C2 Proficiency con un programa semanal completo: lengua avanzada, léxico, práctica de examen y simulacros.",
      objectives: { create: [
        "Seguir un programa semanal con lengua, vocabulario y práctica de examen.",
        "Dominar la lengua avanzada de C2 (matiz, registro, idiomático).",
        "Ampliar el léxico sofisticado y su precisión de colocación.",
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

  const m0 = await createModule("Guía del examen C2 Proficiency", "Estructura, puntuación y cómo usar este programa.", 0);
  await createLesson(m0.id, {
    title: "Cómo es el examen y cómo funciona este programa", description: "Las 4 pruebas, la Cambridge Scale y la cadencia semanal.", sortOrder: 0,
    blocks: [
      { type: "TEXT", content: "El C2 Proficiency (CPE) es el examen de nivel MÁS ALTO de Cambridge. Tiene 4 pruebas de igual peso: Reading & Use of English (7 partes), Writing, Listening y Speaking. Se aprueba con 200 en la Cambridge English Scale (180–230; 220+ = Grade A)." },
      { type: "GRAMMAR", title: "Cómo usar este programa (12 semanas)", content: "Cada semana: 1) LENGUA avanzada nueva con ejercicios; 2) LÉXICO sofisticado con flashcards y ejercicios; 3) PRÁCTICA de una parte real del examen.\nHaz un poco cada día. En las semanas 4, 8 y 12 hay un SIMULACRO mensual que estima tu nota." },
      { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
      { type: "SUMMARY", title: "De un vistazo", data: { items: ["12 semanas ≈ 3 meses de preparación.", "Lengua avanzada + léxico + examen cada semana.", "Simulacro mensual (semanas 4, 8 y 12).", "Aprobado C2 = 200; 220+ = Grade A."] } },
    ],
    pedagogy: { objective: "Entender el examen y el programa.", summary: "12 semanas; lengua avanzada, léxico y examen cada semana; simulacros mensuales.", reviewPrompts: ["¿Qué nota necesitas para el C2?"] },
  });

  const readingExerciseIds = [];
  let sortOrder = 1;
  for (const w of WEEKS) {
    const m = await createModule(`Semana ${w.n} — ${w.theme}`, `Lengua, léxico y práctica de examen (semana ${w.n}).`, sortOrder++);
    await createLesson(m.id, {
      title: `Lengua — ${w.grammar.title}`, description: "Punto de lengua de la semana + práctica.", sortOrder: 0,
      blocks: w.grammar.blocks.map((content, i) => ({ type: "GRAMMAR", title: i === 0 ? w.grammar.title : null, content })),
      pedagogy: { objective: `Dominar: ${w.grammar.title}.`, summary: w.grammar.title, reviewPrompts: ["Repasa lo de semanas anteriores."] },
      exercises: [{ category: "reading", title: w.grammar.exercise.title, instructions: w.grammar.exercise.instructions, questions: w.grammar.exercise.questions }],
    });
    const deck = await db.flashcardDeck.create({
      data: { title: `C2 Proficiency — Semana ${w.n}: ${w.vocab.title}`, description: "Léxico de la semana.", language: "en", authorId: adminUser.id,
        cards: { create: w.vocab.deck.map(([term, translation, example, cat], i) => ({ sortOrder: i, term, translation, example, category: cat, level: "C2" })) } },
    });
    await createLesson(m.id, {
      title: `Léxico — ${w.vocab.title}`, description: "Palabras nuevas + flashcards + práctica.", sortOrder: 1,
      blocks: [
        { type: "GRAMMAR", title: "Léxico de la semana", content: "Estudia el mazo de flashcards y luego haz el ejercicio. Repasa también el léxico anterior." },
        { type: "FLASHCARDS", deckId: deck.id },
      ],
      pedagogy: { objective: "Ampliar el léxico de la semana.", summary: w.vocab.title, reviewPrompts: ["Repasa las flashcards a diario."] },
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
        data: { courseId: course.id, title: `Simulacro Mensual ${w.monthlyMock} — Reading & Use of English (C2 Proficiency)`, passingScore: 60, timeLimitMinutes: 60,
          sections: { create: readingExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } },
      });
      const mm = await createModule(`🎯 Simulacro Mensual ${w.monthlyMock}`, `Examen de práctica del mes ${w.monthlyMock}.`, sortOrder++);
      await createLesson(mm.id, {
        title: `Simulacro Mensual ${w.monthlyMock}`, description: "Mide si alcanzarías la nota Cambridge.", sortOrder: 0,
        blocks: [
          { type: "NOTES", title: "Cómo funciona", content: "Reúne las partes auto-corregibles de Reading & Use of English vistas hasta ahora, cronometradas. Aprueba con un 60% (≈200 en la Cambridge Scale). Writing, Listening y Speaking se evalúan aparte. Tu resultado te dice si alcanzarías el C2.", data: { variant: "info" } },
          { type: "EXAM", data: { examId: exam.id } },
        ],
        pedagogy: { objective: "Comprobar tu preparación bajo condiciones de examen.", summary: `Simulacro del mes ${w.monthlyMock}; aprobado 60%.`, reviewPrompts: ["Si no llegas a 60%, repasa las semanas anteriores."] },
      });
    }
  }

  const ms = await createModule("Listening y Speaking", "Práctica con audio británico real y conversación por voz.", sortOrder++);
  const talk = "There is a peculiar assumption at the heart of consumer culture: that more choice is always better. And yet the evidence points, disconcertingly, in the opposite direction. Confronted with an overwhelming array of possibilities, people are not liberated but paralysed. They defer the decision, or make one and then regret the roads not taken. Satisfaction, it turns out, depends less on the objective quality of what we choose than on our conviction that we could not have done better. Abundance, paradoxically, corrodes precisely that conviction.";
  const audio = await generateListeningAudio(talk, "c2-choice-talk");
  console.warn(audio ? `🔊 Audio Listening: ${audio}` : "⚠️  Piper no disponible: Listening pendiente.");
  await createLesson(ms.id, {
    title: "Listening — La paradoja de la elección", description: "Escucha (voz británica) y responde (inferencia).", sortOrder: 0,
    blocks: [
      { type: "GRAMMAR", title: "Antes de escuchar", content: "Vas a oír un fragmento denso sobre por qué más opciones no siempre es mejor. En C2 se evalúa la inferencia fina y la actitud. Puedes repetir el audio." },
      ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper y vuelve a sembrar.", data: { variant: "warning" } }]),
    ],
    pedagogy: { objective: "Inferir la tesis, el matiz y la actitud en un monólogo C2.", commonMistakes: ["Quedarse en lo literal."], reviewPrompts: ["¿De qué depende la satisfacción según el hablante?"] },
    exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: "La paradoja de la elección", instructions: "Escucha y elige (A/B/C).", questions: [
      mc("What assumption does the speaker challenge?", ["That people dislike shopping.", "That more choice is always better.", "That satisfaction is impossible."], 1, "'that more choice is always better'."),
      mc("What effect does too much choice have?", ["It liberates people.", "It paralyses people.", "It speeds up decisions."], 1, "'people are not liberated but paralysed'."),
      mc("Satisfaction depends mainly on…", ["the objective quality of the choice.", "the conviction that one could not have chosen better.", "the number of options."], 1, "'our conviction that we could not have done better'."),
    ] }] : [],
  });
  await createLesson(ms.id, {
    title: "Speaking — Conversación por voz (C2)", description: "Habla con la IA (voz británica): argumenta con matices.", sortOrder: 1,
    blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. Debatiréis si 'más elección siempre es mejor'. Argumenta con matices, concede puntos y rebate con elegancia. Al terminar, 'Finalizar y evaluar'.\nImportante: abre la app en http://localhost:3001 (no en la IP de red) para que el micrófono funcione." }],
    pedagogy: { objective: "Argumentar con matiz, conceder y rebatir con naturalidad (C2).", summary: "Discusión por voz con la IA.", reviewPrompts: ["¿Cómo concedes un punto y luego rebates en inglés culto?"] },
    exercises: [{ category: "speaking", config: { language: "en", level: "C2", scenario: "una discusión de alto nivel sobre si 'más elección siempre es mejor'; se argumenta con matices y se conceden puntos", objective: "que el alumno argumente con matiz, conceda puntos y rebata con naturalidad y precisión de C2", keywords: "there is some merit in, that said, it would be simplistic to, I'd concede that, on balance" }, title: "Discusión: ¿más elección siempre es mejor?", instructions: "Debate con la IA con argumentos matizados.", questions: [] }],
  });

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "C2 Proficiency — Semana" } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ C2 Proficiency (programa 12 semanas) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error C2:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
