/**
 * A2 Key — PILOTO del nuevo estándar diario de NOVARA.
 *
 * Objetivo: fijar el LISTÓN de calidad antes de replicarlo a los 8 niveles.
 * Modelo: 5 días/semana (Lun–Vie), cada DÍA = 1 lección de ~1 h de academia con:
 *   1) Repaso breve del día anterior.
 *   2) GRAMÁTICA con profundidad de profesor (forma, uso, contraste, errores
 *      típicos del hispanohablante, pronunciación y enfoque de examen) + práctica.
 *   3) VOCABULARIO nuevo con flashcards (IPA + ejemplo) + práctica.
 *   4) PRÁCTICA de una parte REAL del examen A2 Key, con estrategia.
 *   5) Resumen + tarea para el día siguiente.
 * Estructura de examen = réplica fiel de Cambridge (fuente: cambridgeenglish.org),
 * con ejercicios ORIGINALES de NOVARA (sin material con copyright).
 *
 * Idempotente sobre el slug 'a2-key-piloto'. No toca el curso 'a2-key' real.
 *   node scripts/seed-a2-key-piloto.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "a2-key-piloto";
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

// Helpers de preguntas (mismo formato que el resto de seeds).
const mc = (prompt, options, correct, explanation) => ({ kind: "multiple_choice", data: { kind: "multiple_choice", prompt, options, correct: [correct], explanation } });
const fb = (prompt, accepted, explanation) => ({ kind: "fill_blank", data: { kind: "fill_blank", prompt, blanks: [{ accepted }], explanation } });
const open = (prompt, guidance, explanation) => ({ kind: "open", data: { kind: "open", prompt, guidance, explanation } });

// Atajos de bloques para leer el contenido con comodidad.
const TEXT = (content) => ({ type: "TEXT", content });
const GRAMMAR = (title, content) => ({ type: "GRAMMAR", title, content });
const TIP = (title, content) => ({ type: "TIP", title, content, data: { variant: "success" } });
const WARN = (title, content) => ({ type: "NOTES", title, content, data: { variant: "warning" } });
const INFO = (title, content) => ({ type: "NOTES", title, content, data: { variant: "info" } });
const SUMMARY = (title, items) => ({ type: "SUMMARY", title, data: { items } });
const deck = (title, cards) => ({ deck: { title, cards } });
const exercise = (ex) => ({ exercise: ex });

// ════════════════════════════════════════════════════════════════════════════
// SEMANA 1 — Present simple, present continuous, preguntas, there is/are.
// Tema: tu vida (información personal, familia, rutina, casa).
// ════════════════════════════════════════════════════════════════════════════
const WEEK1 = {
  n: 1,
  theme: "Tu vida: presente, familia y rutina",
  days: [
    // ───────────────────────────── DÍA 1 ─────────────────────────────
    {
      title: "Día 1 — Present simple: habla de tu vida",
      description: "Rutinas y hechos, la -s de 3ª persona, negativa y preguntas. Vocabulario de información personal. Examen: Reading & Writing, Parte 1.",
      pedagogy: {
        objective: "Usar el present simple con corrección (incluida la -s de 3ª persona) para hablar de rutinas y hechos.",
        summary: "Present simple (forma, uso, adverbios de frecuencia); vocabulario de información personal; estrategia de la Parte 1.",
        commonMistakes: ["Olvidar la -s en he/she/it.", "Poner -s en la negativa/pregunta (does she works).", "Decir 'I have 20 years' en vez de 'I am 20'."],
        reviewPrompts: ["¿Cómo se forma la 3ª persona de 'study' y de 'go'?", "¿Dónde va 'always' con el verbo 'be'?"],
      },
      items: [
        TEXT("👋 Bienvenido al Día 1. Hoy trabajas como en una clase de academia (≈1 hora): primero la GRAMÁTICA del día con ejemplos y práctica, después VOCABULARIO nuevo con flashcards, y por último una parte REAL del examen A2 Key. Ve sin prisa y repite los ejemplos en voz alta."),

        GRAMMAR("El present simple — forma", `El present simple es el tiempo que más vas a usar en A2: sirve para hablar de tu vida, tus rutinas y los hechos que no cambian.

AFIRMATIVA
· I / you / we / they + verbo base: I work · you live · we study · they play.
· he / she / it + verbo con -s: he works · she lives · it rains.
La -s de he/she/it es OBLIGATORIA. Es el error número 1 del hispanohablante.

Ortografía de la -s:
· La mayoría: + s → work → works, play → plays.
· Verbos en -o, -s, -sh, -ch, -x: + es → go → goes, watch → watches, finish → finishes.
· Consonante + y: la y pasa a -ies → study → studies, try → tries. (Pero play → plays, porque hay vocal antes de la y.)

NEGATIVA — do/does + not + verbo BASE (el verbo pierde la -s):
· I/you/we/they → don't: I don't smoke.
· he/she/it → doesn't: She doesn't smoke. (NO "she doesn't smokes")

PREGUNTAS — Do/Does + sujeto + verbo BASE:
· Do you like coffee? · Does he live here?
· Respuestas cortas: Yes, I do. / No, I don't. — Yes, she does. / No, she doesn't.`),

        GRAMMAR("El present simple — uso y frecuencia", `Usamos el present simple para:
1) RUTINAS y hábitos: I get up at seven every day.
2) HECHOS y verdades generales: Water boils at 100 degrees. She comes from Spain.
3) HORARIOS: The train leaves at nine.

Expresiones de tiempo típicas: every day/week, on Mondays, in the morning, at the weekend, twice a week.

ADVERBIOS DE FRECUENCIA: always (100%) · usually · often · sometimes · hardly ever · never (0%).
Posición:
· ANTES del verbo principal: I always have breakfast. She never drinks tea.
· DESPUÉS del verbo 'be': He is always late. They are never at home.
Ojo: 'never' ya es negativo, no lleva 'don't' → I never eat meat (NO "I don't never eat").`),

        WARN("Errores típicos del hispanohablante", `· 3ª persona SIN -s: ❌ She work → ✅ She works.
· -s de más en negativa/pregunta: ❌ Does she works? → ✅ Does she work?
· La edad con 'be', no 'have': ❌ I have 20 years → ✅ I am 20 (years old).
· 'People' es plural: ❌ People is nice → ✅ People are nice.`),

        TIP("Pronunciación de la -s final", `La -s de la 3ª persona se pronuncia de tres maneras. Escúchalas en las flashcards y repite:
· /s/ tras sonido sordo (p, t, k, f): works, stops, likes.
· /z/ tras sonido sonoro o vocal: plays, goes, lives, runs.
· /ɪz/ tras s, z, sh, ch, ge: watches, uses, washes.`),

        exercise({
          category: "reading", collect: true, weight: 8,
          title: "Práctica de gramática — Present simple",
          instructions: "Completa o elige la opción correcta.",
          questions: [
            fb("She ___ (study) medicine at university.", ["studies"], "Consonante + y → -ies: studies."),
            fb("He ___ (go) to work by train.", ["goes"], "Verbo en -o → +es: goes."),
            fb("They ___ (not/eat) meat.", ["don't eat", "do not eat"], "Plural: don't + verbo base."),
            mc("Choose the correct sentence.", ["She doesn't likes tennis.", "She doesn't like tennis.", "She don't like tennis."], 1, "Negativa 3ª persona: doesn't + verbo BASE."),
            mc("Put the adverb in the right place: 'He ___ late.' (always + be)", ["He always is late.", "He is always late.", "He is late always."], 1, "Con 'be', el adverbio va DESPUÉS: is always late."),
            fb("___ your parents ___ (speak) English?", ["Do", "speak"], "Pregunta en plural: Do … speak?"),
            fb("Water ___ (boil) at 100 degrees.", ["boils"], "Hecho general → present simple, 3ª persona: boils."),
            mc("How do you pronounce the -s in 'watches'?", ["/s/", "/z/", "/ɪz/"], 2, "Tras -ch se añade /ɪz/."),
          ],
        }),

        GRAMMAR("Vocabulario de hoy — Información personal", "Estudia el mazo: gira cada carta para ver el significado y pulsa «Escuchar» para oír la pronunciación británica. Después haz el ejercicio. Repasa el mazo a diario durante la semana."),
        deck("A2 Key Piloto — Día 1: Información personal", [
          ["first name", "nombre (de pila)", "My first name is Laura.", "sustantivo", "ˈfɜːst neɪm"],
          ["surname", "apellido", "Her surname is Ortega.", "sustantivo", "ˈsɜːneɪm"],
          ["age", "edad", "What is your age? I'm 22.", "sustantivo", "eɪdʒ"],
          ["date of birth", "fecha de nacimiento", "My date of birth is the 3rd of May.", "colocación", "deɪt əv ˈbɜːθ"],
          ["nationality", "nacionalidad", "Her nationality is Spanish.", "sustantivo", "ˌnæʃəˈnæləti"],
          ["address", "dirección (postal)", "What's your address?", "sustantivo", "əˈdres"],
          ["occupation", "ocupación / profesión", "His occupation is teacher.", "sustantivo", "ˌɒkjuˈpeɪʃn"],
          ["single", "soltero/a", "I'm single.", "adjetivo", "ˈsɪŋɡl"],
          ["married", "casado/a", "She is married.", "adjetivo", "ˈmærid"],
          ["retired", "jubilado/a", "My grandad is retired.", "adjetivo", "rɪˈtaɪəd"],
        ]),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Práctica de vocabulario — Información personal",
          instructions: "Elige la opción correcta.",
          questions: [
            mc("Your family name is your ___.", ["first name", "surname", "address"], 1, "'surname' = apellido."),
            mc("The day you were born is your ___.", ["date of birth", "age", "nationality"], 0, "'date of birth' = fecha de nacimiento."),
            mc("A person who is not married is ___.", ["married", "retired", "single"], 2, "'single' = soltero/a."),
            mc("Your job is your ___.", ["occupation", "address", "age"], 0, "'occupation' = ocupación/profesión."),
            mc("Someone who no longer works because of age is ___.", ["single", "retired", "married"], 1, "'retired' = jubilado/a."),
            mc("If you are from Italy, your ___ is Italian.", ["address", "nationality", "surname"], 1, "'nationality' = nacionalidad."),
          ],
        }),

        GRAMMAR("Estrategia de examen — Reading & Writing, Parte 1", `En la Parte 1 lees 6 textos cortos del mundo real (señales, notas, avisos, mensajes de móvil). Cada uno tiene 3 opciones (A/B/C) y eliges qué SIGNIFICA el texto.

Cómo hacerla bien:
1) Lee TODO el texto corto, no una sola palabra.
2) Pregúntate: ¿quién lo escribe y para qué? ¿Qué quiere que sepas o hagas?
3) Cuidado con las 'trampas': opciones que repiten una palabra del texto pero cambian el sentido. No elijas por ver una palabra conocida.
4) Descarta las dos opciones que digan algo que el texto NO dice.`),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Examen — Reading & Writing, Parte 1 (señales y mensajes)",
          instructions: "Lee cada texto y elige qué significa (A/B/C).",
          questions: [
            mc("Shop window: 'SALE — everything half price this week only.'", ["Prices are lower only this week.", "The shop is closed this week.", "Only half of the shop is open."], 0, "'half price this week only' = precios más bajos solo esta semana."),
            mc("Text message: 'Running late — start the meeting without me. Sam.'", ["Sam wants them to wait.", "Sam says begin before he arrives.", "Sam has cancelled the meeting."], 1, "'start … without me' = empezad sin él."),
            mc("Library notice: 'Please return books within three weeks.'", ["You can keep books for a month.", "You must give books back in three weeks or less.", "The library is closed for three weeks."], 1, "'within three weeks' = en tres semanas o menos."),
            mc("Note on fridge: 'Milk finished — can you buy some on your way home? Mum.'", ["Mum has bought milk.", "Mum wants you to buy milk.", "There is a lot of milk."], 1, "'can you buy some' = pide que compres leche."),
            mc("Station sign: 'Tickets must be shown on the train.'", ["You show your ticket on the train.", "Tickets are free on the train.", "You cannot buy tickets on the train."], 0, "'must be shown on the train' = enseñar el billete en el tren."),
            mc("Email subject: 'Your order has been sent and arrives Friday.'", ["The order is ready to collect.", "The order will come on Friday.", "The order was cancelled."], 1, "'arrives Friday' = llegará el viernes."),
          ],
        }),

        SUMMARY("Resumen del Día 1", [
          "Present simple: he/she/it lleva -s (studies, goes, watches).",
          "Negativa y pregunta con do/does + verbo BASE (sin -s).",
          "Adverbios de frecuencia: antes del verbo, pero después de 'be'.",
          "Reading & Writing Parte 1: lee todo el texto y desconfía de las 'trampas'.",
        ]),
        INFO("Tarea para el Día 2", "Repasa el mazo de flashcards en voz alta (2 pasadas). Escribe 3 frases verdaderas sobre tu rutina usando always/usually/never. Mañana: preguntas y familia."),
      ],
    },

    // ───────────────────────────── DÍA 2 ─────────────────────────────
    {
      title: "Día 2 — Preguntas y respuestas cortas · La familia",
      description: "Preguntas con Wh-, orden de palabras y respuestas cortas. Vocabulario de familia. Examen: Speaking, Parte 1 (preguntas personales).",
      pedagogy: {
        objective: "Formular preguntas correctas (Wh- y de sí/no) y hablar de tu familia.",
        summary: "Question words, orden QW + do/does + sujeto + verbo, subject questions y respuestas cortas; vocabulario de familia; Speaking Parte 1.",
        commonMistakes: ["Omitir do/does: 'Where you live?'", "Traducir la edad: 'How many years do you have?'", "Orden incorrecto en preguntas."],
        reviewPrompts: ["¿Cuándo NO se usa do/does en una pregunta?", "¿Cómo preguntas la edad en inglés?"],
      },
      items: [
        TEXT("🔁 Repaso rápido del Día 1: di en voz alta la 3ª persona de estos verbos → go, study, watch, play. (goes, studies, watches, plays). Hoy aprendes a PREGUNTAR, básico para el Speaking y para toda conversación."),

        GRAMMAR("Preguntas en present simple", `PREGUNTAS DE SÍ/NO — Do/Does + sujeto + verbo base:
· Do you work here? — Does she like tea?

PREGUNTAS CON PARTÍCULA (Wh-) — Question word + do/does + sujeto + verbo base:
· What do you do? (¿A qué te dedicas?)
· Where do you live? · When does the film start? · Why do you study English?

PARTÍCULAS ÚTILES: what, where, when, who, why, how, how old, how often, how many, how much.
· How old are you? (edad → con 'be', ¡no con 'have'!)
· How often do you go to the gym? — Twice a week.

RESPUESTAS CORTAS (no repitas todo el verbo):
· Do you like pizza? — Yes, I do. / No, I don't.
· Does he drive? — Yes, he does. / No, he doesn't.`),

        GRAMMAR("Preguntas de sujeto (sin do/does)", `Cuando preguntas por el SUJETO (quién/qué hace la acción), NO se usa do/does y el verbo mantiene la -s:
· Who lives here? (NO 'Who does live here?')
· What happens at the end? · Who wants a coffee?

Compara:
· Who do you love? → preguntas por el objeto → con 'do'.
· Who loves you? → preguntas por el sujeto → sin 'do', verbo con -s.`),

        WARN("Errores típicos del hispanohablante", `· Sin do/does: ❌ Where you live? → ✅ Where do you live?
· Edad: ❌ How many years do you have? → ✅ How old are you?
· Orden: ❌ What means this word? → ✅ What does this word mean?
· 'do you do': ❌ What is your work? (para profesión, mejor) → ✅ What do you do?`),

        exercise({
          category: "reading", collect: true, weight: 8,
          title: "Práctica de gramática — Preguntas",
          instructions: "Ordena o completa la pregunta correctamente.",
          questions: [
            fb("Order: (you / where / do / live) → ___?", ["where do you live"], "QW + do + sujeto + verbo: Where do you live?"),
            fb("Order: (does / what / mean / this word) → ___?", ["what does this word mean"], "What does this word mean?"),
            mc("Ask about age:", ["How many years do you have?", "How old are you?", "What is your age have?"], 1, "La edad: How old are you?"),
            fb("___ often do you play sport? — Twice a week.", ["How"], "How often = con qué frecuencia."),
            mc("Subject question — choose the correct one:", ["Who does live here?", "Who lives here?", "Who do lives here?"], 1, "Pregunta de sujeto: sin do, verbo con -s → Who lives here?"),
            fb("Short answer: 'Does she work here?' — No, she ___.", ["doesn't", "does not"], "Respuesta corta negativa: No, she doesn't."),
            mc("Choose the correct question:", ["What you do do?", "What do you do?", "What does you do?"], 1, "What do you do? = ¿a qué te dedicas?"),
            fb("___ do you study English? — Because I want a good job.", ["Why"], "Why = por qué."),
          ],
        }),

        GRAMMAR("Vocabulario de hoy — La familia", "Aprende a describir tu familia. Gira las cartas, escucha la pronunciación y fíjate en los ejemplos."),
        deck("A2 Key Piloto — Día 2: La familia", [
          ["parents", "padres", "My parents live in Seville.", "sustantivo", "ˈpeərənts"],
          ["siblings", "hermanos (en general)", "I have two siblings.", "sustantivo", "ˈsɪblɪŋz"],
          ["grandparents", "abuelos", "My grandparents are retired.", "sustantivo", "ˈɡrænpeərənts"],
          ["aunt", "tía", "My aunt lives next door.", "sustantivo", "ɑːnt"],
          ["uncle", "tío", "My uncle is a doctor.", "sustantivo", "ˈʌŋkl"],
          ["cousin", "primo/a", "My cousin studies in Madrid.", "sustantivo", "ˈkʌzn"],
          ["niece", "sobrina", "My niece is six.", "sustantivo", "niːs"],
          ["nephew", "sobrino", "My nephew loves football.", "sustantivo", "ˈnefjuː"],
          ["only child", "hijo/a único/a", "I'm an only child.", "colocación", "ˈəʊnli tʃaɪld"],
          ["get on with", "llevarse bien con", "I get on well with my sister.", "phrasal verb", "ɡet ˈɒn wɪð"],
        ]),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Práctica de vocabulario — La familia",
          instructions: "Elige la opción correcta.",
          questions: [
            mc("Your mother and father are your ___.", ["siblings", "parents", "cousins"], 1, "'parents' = padres."),
            mc("Your brothers and sisters are your ___.", ["siblings", "grandparents", "nieces"], 0, "'siblings' = hermanos en general."),
            mc("Your uncle's daughter is your ___.", ["niece", "cousin", "aunt"], 1, "'cousin' = primo/a."),
            mc("A person with no brothers or sisters is an ___.", ["only child", "uncle", "nephew"], 0, "'only child' = hijo/a único/a."),
            mc("Your sister's son is your ___.", ["nephew", "niece", "cousin"], 0, "'nephew' = sobrino."),
            mc("'I ___ my brother' (relación buena).", ["get on well with", "look like", "get up"], 0, "'get on well with' = llevarse bien con."),
          ],
        }),

        GRAMMAR("Estrategia de examen — Speaking, Parte 1", `El Speaking del A2 Key dura 8–10 minutos, con OTRO candidato y DOS examinadores. En la Parte 1 (3–4 min) el examinador te hace preguntas personales sencillas: tu nombre, de dónde eres, tu familia, tus estudios o trabajo y tu rutina.

Consejos:
· Responde con una frase completa y añade UN detalle: 'I live in Bilbao, with my parents and my brother.'
· No respondas solo 'Yes' o 'No'; da una razón: 'Yes, I do, because…'
· Usa el present simple y los adverbios de frecuencia que viste ayer.

Practica ahora hablando por el micrófono con nuestro examinador virtual.`),
        exercise({
          category: "speaking",
          config: { language: "en", level: "A2", scenario: "el examinador te hace preguntas personales sencillas de la Parte 1 del A2 Key: tu nombre, de dónde eres, tu familia, tus estudios o trabajo y tu rutina diaria", objective: "que el alumno responda con frases completas y un detalle, usando present simple y adverbios de frecuencia", keywords: "My name is, I live in, I've got, I usually, my family" },
          title: "Speaking Parte 1 — Háblame de ti y de tu familia",
          instructions: "Pulsa «Iniciar conversación» y responde por el micrófono. Al terminar, «Finalizar y evaluar».",
          questions: [],
        }),

        SUMMARY("Resumen del Día 2", [
          "Preguntas: QW + do/does + sujeto + verbo base.",
          "Edad con 'be': How old are you? — I'm 22.",
          "Preguntas de sujeto: sin do/does (Who lives here?).",
          "Speaking Parte 1: frase completa + un detalle + una razón.",
        ]),
        INFO("Tarea para el Día 3", "Escribe 5 preguntas que le harías a un compañero nuevo. Repasa las flashcards de familia. Mañana: acciones de ahora (present continuous) y rutina."),
      ],
    },

    // ───────────────────────────── DÍA 3 ─────────────────────────────
    {
      title: "Día 3 — Present continuous vs. present simple · Rutina diaria",
      description: "Acciones de ahora vs. rutinas, verbos de estado y ortografía de -ing. Vocabulario de rutina. Examen: Reading & Writing, Parte 5 (open cloze).",
      pedagogy: {
        objective: "Distinguir acciones de ahora (continuous) de rutinas/hechos (simple) y usarlas sin mezclarlas.",
        summary: "Present continuous (forma, -ing, uso), verbos de estado, contraste con simple; vocabulario de rutina; Parte 5 open cloze.",
        commonMistakes: ["'I am agree' en vez de 'I agree'.", "Usar continuous con verbos de estado (I am wanting).", "Mezclar 'every day' con present continuous."],
        reviewPrompts: ["¿Qué palabras señalan present continuous?", "Nombra 3 verbos de estado que no van en -ing."],
      },
      items: [
        TEXT("🔁 Repaso del Día 2: pregunta en inglés la hora a la que empieza una película. (What time does the film start?). Hoy distingues lo que haces AHORA de lo que haces SIEMPRE."),

        GRAMMAR("Present continuous — forma y uso", `FORMA: am/is/are + verbo-ing.
· I'm working · She's studying · They're playing.
· Negativa: I'm not working · He isn't studying.
· Pregunta: Are you working? What are you doing?

ORTOGRAFÍA de -ing:
· La mayoría: + ing → play → playing.
· Termina en -e muda: quita la e → make → making, write → writing.
· Una vocal + una consonante final (tónica): dobla la consonante → run → running, sit → sitting, swim → swimming.
· Termina en -ie → -ying: lie → lying, die → dying.

USO — acciones EN ESTE MOMENTO o TEMPORALES:
· Right now: Look! It's raining.
· Temporal (estos días): I'm reading a great book this week.
Palabras señal: now, right now, at the moment, today, this week, Look!, Listen!`),

        GRAMMAR("Simple vs. continuous, y verbos de estado", `CONTRASTE:
· Present simple = rutina/hecho: I play tennis on Sundays.
· Present continuous = ahora/temporal: I'm playing tennis right now.

VERBOS DE ESTADO (no describen una acción, sino un estado) NO suelen ir en continuous:
like, love, hate, want, need, know, understand, believe, prefer, remember, seem, be (como estado).
· ✅ I want a coffee. (NO 'I am wanting')
· ✅ She knows the answer. (NO 'She is knowing')`),

        WARN("Errores típicos del hispanohablante", `· ❌ I am agree → ✅ I agree. ('agree' es verbo, no adjetivo)
· ❌ I am wanting / I am knowing → ✅ I want / I know. (verbos de estado)
· ❌ I'm going to the gym every day → mejor ✅ I go to the gym every day. ('every day' = rutina → simple)
· ❌ She's work now → ✅ She's working now. (falta -ing)`),

        exercise({
          category: "reading", collect: true, weight: 8,
          title: "Práctica de gramática — Simple vs. continuous",
          instructions: "Elige el tiempo correcto o escribe la forma -ing.",
          questions: [
            fb("Listen! The baby ___ (cry).", ["is crying", "'s crying"], "'Listen!' → ahora → present continuous."),
            fb("I ___ (go) to the gym every Monday.", ["go"], "Rutina ('every Monday') → present simple."),
            fb("Write the -ing form of 'run': ___", ["running"], "Vocal + consonante tónica → se dobla: running."),
            fb("Write the -ing form of 'make': ___", ["making"], "Termina en -e muda → making."),
            mc("Choose the correct sentence:", ["I am wanting a sandwich.", "I want a sandwich.", "I wants a sandwich."], 1, "'want' es verbo de estado → simple: I want."),
            mc("Choose the correct sentence:", ["I am agree with you.", "I agree with you.", "I agreeing with you."], 1, "'agree' es verbo → I agree (sin 'am')."),
            fb("What ___ you ___ (do) at the moment?", ["are", "doing"], "'at the moment' → present continuous: are you doing."),
            fb("She usually ___ (walk) to work, but today she ___ (take) the bus.", ["walks", "is taking"], "Rutina → walks; hoy → is taking."),
          ],
        }),

        GRAMMAR("Vocabulario de hoy — Rutina diaria", "Verbos y expresiones para contar tu día. Muchos son phrasal verbs; apréndelos como bloque."),
        deck("A2 Key Piloto — Día 3: Rutina diaria", [
          ["wake up", "despertarse", "I wake up at seven.", "phrasal verb", "weɪk ˈʌp"],
          ["get up", "levantarse", "I get up ten minutes later.", "phrasal verb", "ɡet ˈʌp"],
          ["get dressed", "vestirse", "She gets dressed quickly.", "colocación", "ɡet ˈdrest"],
          ["have a shower", "ducharse", "I have a shower in the morning.", "colocación", "hæv ə ˈʃaʊə"],
          ["brush your teeth", "cepillarse los dientes", "Brush your teeth twice a day.", "colocación", "brʌʃ jɔː ˈtiːθ"],
          ["have breakfast", "desayunar", "We have breakfast at eight.", "colocación", "hæv ˈbrekfəst"],
          ["do homework", "hacer los deberes", "I do my homework after school.", "colocación", "duː ˈhəʊmwɜːk"],
          ["go to bed", "irse a la cama", "The children go to bed at nine.", "colocación", "ɡəʊ tə ˈbed"],
          ["hang out", "pasar el rato", "I hang out with friends at weekends.", "phrasal verb", "hæŋ ˈaʊt"],
          ["free time", "tiempo libre", "In my free time I read.", "colocación", "friː ˈtaɪm"],
        ]),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Práctica de vocabulario — Rutina",
          instructions: "Elige la opción correcta.",
          questions: [
            mc("To stop sleeping in the morning is to ___.", ["go to bed", "wake up", "hang out"], 1, "'wake up' = despertarse."),
            mc("You ___ before you leave home in the morning.", ["get dressed", "go to bed", "hang out"], 0, "'get dressed' = vestirse."),
            mc("Students ___ after school.", ["have a shower", "do homework", "wake up"], 1, "'do homework' = hacer los deberes."),
            mc("To spend relaxed time with friends is to ___.", ["hang out", "get up", "brush your teeth"], 0, "'hang out' = pasar el rato."),
            mc("You should ___ twice a day.", ["brush your teeth", "go to bed", "hang out"], 0, "'brush your teeth' = cepillarse los dientes."),
            mc("When you are not working or studying, it's your ___.", ["homework", "free time", "shower"], 1, "'free time' = tiempo libre."),
          ],
        }),

        GRAMMAR("Estrategia de examen — Reading & Writing, Parte 5 (open cloze)", `En la Parte 5 lees un texto corto (a menudo un email) con 6 huecos y escribes UNA palabra en cada uno. Se centra en GRAMÁTICA: artículos, preposiciones, auxiliares, pronombres, conjunciones.

Cómo hacerla:
1) Lee el texto entero primero para entender el sentido.
2) Cada hueco = UNA sola palabra (nunca dos).
3) Piensa qué TIPO de palabra falta: ¿un auxiliar (do/does/is)? ¿una preposición (in/on/at)? ¿un conector (and/but/because)?
4) Cuida la ortografía; una palabra mal escrita no puntúa.`),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Examen — Reading & Writing, Parte 5 (open cloze)",
          instructions: "Lee el email y escribe UNA palabra en cada hueco.\n\nHi Marta,\nI'm writing (1)___ tell you about my new routine. From Monday to Friday I get (2)___ at seven. I usually have breakfast (3)___ my sister — she's really funny! I don't like coffee, (4)___ I drink tea. At the moment I (5)___ studying for an exam, so I don't have much free time. What (6)___ you do after work these days?\nWrite soon!\nLucía",
          questions: [
            fb("Hueco 1", ["to"], "'writing to tell' = infinitivo de finalidad."),
            fb("Hueco 2", ["up"], "'get up' = levantarse."),
            fb("Hueco 3", ["with"], "'have breakfast with' = desayunar con."),
            fb("Hueco 4", ["so"], "consecuencia → so (por eso)."),
            fb("Hueco 5", ["am", "'m"], "'at the moment' → present continuous: I am studying."),
            fb("Hueco 6", ["do"], "pregunta present simple: What do you do?"),
          ],
        }),

        SUMMARY("Resumen del Día 3", [
          "Continuous = ahora/temporal (am/is/are + -ing); simple = rutina/hecho.",
          "Verbos de estado (want, know, like) no van en -ing.",
          "Ortografía -ing: making, running, lying.",
          "Parte 5: una sola palabra por hueco; suele ser gramática (auxiliares, preposiciones, conectores).",
        ]),
        INFO("Tarea para el Día 4", "Escribe qué estás haciendo ahora mismo (3 frases con present continuous) y qué haces normalmente (3 frases con present simple). Mañana: there is/are y tu casa."),
      ],
    },

    // ───────────────────────────── DÍA 4 ─────────────────────────────
    {
      title: "Día 4 — there is / there are, a/an, some/any · La casa",
      description: "Hablar de lo que hay, artículos y cuantificadores, preposiciones de lugar. Vocabulario de la casa. Examen: Listening, Parte 1 (audio británico continuo).",
      pedagogy: {
        objective: "Describir lugares con there is/are, a/an, some/any y preposiciones de lugar; entender información específica en audio.",
        summary: "there is/are, a/an, some/any, this/that, preposiciones de lugar; vocabulario de la casa; Listening Parte 1.",
        commonMistakes: ["'There is two rooms' (concordancia).", "'a apple' en vez de 'an apple'.", "'some' en preguntas/negativas en vez de 'any'."],
        reviewPrompts: ["¿Cuándo usas 'an' en vez de 'a'?", "¿'some' o 'any' en preguntas?"],
      },
      items: [
        TEXT("🔁 Repaso del Día 3: di qué estás haciendo ahora (I'm …) y qué haces cada día (I …). Hoy describes lugares y tu casa, y practicas Listening con voz británica real."),

        GRAMMAR("there is / there are · a/an · some/any", `PARA DECIR QUÉ HAY:
· Singular: There is (There's) a sofa in the living room.
· Plural: There are two bedrooms.
· Negativa: There isn't a garden. There aren't any chairs.
· Pregunta: Is there a lift? Are there any shops near here?

ARTÍCULOS a / an:
· a + sonido consonante: a house, a university (suena 'yu').
· an + sonido vocal: an apple, an hour ('h' muda).

some / any:
· some en afirmativas: There are some cups.
· any en negativas y preguntas: There aren't any cups. Are there any cups?

this/that/these/those: this book (aquí), that car (allí), these shoes, those houses.`),

        GRAMMAR("Preposiciones de lugar", `Para decir DÓNDE está algo:
· in (dentro de): The keys are in the drawer.
· on (sobre): The lamp is on the table.
· under (debajo): The cat is under the bed.
· next to (al lado de): The sofa is next to the window.
· between (entre dos): The table is between the sofa and the TV.
· behind / in front of (detrás / delante): The garden is behind the house.
· near / opposite (cerca / enfrente): There's a shop opposite my flat.`),

        WARN("Errores típicos del hispanohablante", `· Concordancia: ❌ There is two rooms → ✅ There are two rooms.
· Artículo: ❌ a apple, ❌ a hour → ✅ an apple, an hour.
· some/any: ❌ Are there some shops? → ✅ Are there any shops?
· 'furniture' es incontable: ❌ furnitures → ✅ some furniture / pieces of furniture.`),

        exercise({
          category: "reading", collect: true, weight: 8,
          title: "Práctica de gramática — there is/are, a/an, some/any",
          instructions: "Completa con la opción correcta.",
          questions: [
            fb("___ two bathrooms in my house.", ["There are"], "Plural → There are."),
            fb("Is ___ a garden? (there)", ["there"], "Pregunta: Is there…?"),
            mc("Choose: '___ apple'", ["a apple", "an apple", "the a apple"], 1, "Sonido vocal → an apple."),
            mc("Choose: '___ university'", ["a university", "an university", "the an university"], 0, "'university' empieza por sonido 'yu' (consonante) → a university."),
            mc("Negative: 'There ___ any chairs.'", ["isn't", "aren't", "not"], 1, "Plural negativo: aren't."),
            mc("Question: 'Are there ___ shops near here?'", ["some", "any", "a"], 1, "En preguntas → any."),
            fb("The cat is ___ the bed (debajo).", ["under"], "under = debajo."),
            fb("The table is ___ the sofa and the TV (entre).", ["between"], "between = entre dos cosas."),
          ],
        }),

        GRAMMAR("Vocabulario de hoy — La casa", "Habitaciones y muebles. Fíjate en cuáles son incontables (furniture)."),
        deck("A2 Key Piloto — Día 4: La casa", [
          ["living room", "salón", "We watch TV in the living room.", "sustantivo", "ˈlɪvɪŋ ruːm"],
          ["bedroom", "dormitorio", "My bedroom is small but cosy.", "sustantivo", "ˈbedruːm"],
          ["kitchen", "cocina", "She's cooking in the kitchen.", "sustantivo", "ˈkɪtʃɪn"],
          ["bathroom", "baño", "The bathroom is upstairs.", "sustantivo", "ˈbɑːθruːm"],
          ["sofa", "sofá", "There's a big sofa here.", "sustantivo", "ˈsəʊfə"],
          ["wardrobe", "armario (ropa)", "My clothes are in the wardrobe.", "sustantivo", "ˈwɔːdrəʊb"],
          ["fridge", "nevera", "The milk is in the fridge.", "sustantivo", "frɪdʒ"],
          ["stairs", "escaleras", "The stairs are next to the door.", "sustantivo", "steəz"],
          ["furniture", "muebles (incontable)", "There isn't much furniture.", "sustantivo", "ˈfɜːnɪtʃə"],
          ["flat", "piso / apartamento", "I live in a small flat.", "sustantivo", "flæt"],
        ]),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Práctica de vocabulario — La casa",
          instructions: "Elige la opción correcta.",
          questions: [
            mc("You cook in the ___.", ["bedroom", "kitchen", "bathroom"], 1, "'kitchen' = cocina."),
            mc("You keep your clothes in the ___.", ["fridge", "wardrobe", "sofa"], 1, "'wardrobe' = armario de ropa."),
            mc("You keep food cold in the ___.", ["fridge", "stairs", "sofa"], 0, "'fridge' = nevera."),
            mc("You go up and down the ___.", ["stairs", "wardrobe", "flat"], 0, "'stairs' = escaleras."),
            mc("Tables, chairs and beds are ___.", ["furnitures", "furniture", "a furniture"], 1, "'furniture' es incontable, sin -s."),
            mc("An apartment is also called a ___ in British English.", ["flat", "stairs", "fridge"], 0, "'flat' = piso (inglés británico)."),
          ],
        }),

        GRAMMAR("Estrategia de examen — Listening, Parte 1", `El Listening dura unos 30 minutos y CADA grabación se oye DOS veces. En la Parte 1 hay 5 conversaciones cortas e independientes; para cada una eliges una opción (en el examen real son imágenes; aquí, la descripción correcta).

Cómo hacerla:
1) Antes de escuchar, lee la pregunta y las 3 opciones.
2) La primera vez, capta la idea general; la segunda, confirma el detalle.
3) Cuidado con las trampas: se mencionan las tres opciones, pero solo una es la respuesta a la pregunta.
El audio es continuo (no se para): sigue el ritmo y no te quedes en una pregunta.`),
        exercise({
          category: "listening", collect: false,
          title: "Examen — Listening, Parte 1 (5 conversaciones)",
          instructions: "Escucha el audio (se oye dos veces, es continuo) y responde a cada pregunta.",
          audioScript: "This is Part One. You will hear five short conversations. For each question, choose the correct answer. You will hear each conversation twice.\n\nOne. Where did the man leave his keys? Woman: Are your keys on the kitchen table? Man: No, I've looked there. Woman: What about in your coat pocket? Man: Ah, yes, here they are, in my coat. Thanks.\n\nTwo. What time does the train leave? Woman: Excuse me, does the train to Oxford leave at half past nine? Man: It used to, but now it leaves at nine forty-five. Woman: Nine forty-five, thank you.\n\nThree. What will they have for lunch? Man: Shall we have pizza for lunch? Woman: We had pizza yesterday. Let's make a salad. Man: Good idea, a salad it is.\n\nFour. How does the girl go to school? Woman: Do you walk to school, Emma? Girl: I used to walk, but now it's too far, so I take the bus. Woman: Not by bike? Girl: No, never.\n\nFive. What's the weather like today? Man: Do I need my umbrella today? Woman: No, it's not raining now, but it's very windy. Man: Windy, OK, no umbrella then.",
          questions: [
            mc("1. Where are the man's keys?", ["On the kitchen table.", "In his coat pocket.", "He can't find them."], 1, "'here they are, in my coat'."),
            mc("2. What time does the train leave?", ["Half past nine.", "A quarter to ten (9:45).", "Nine o'clock."], 1, "'now it leaves at nine forty-five' = 9:45."),
            mc("3. What will they have for lunch?", ["Pizza.", "A salad.", "Nothing."], 1, "'Let's make a salad… a salad it is'."),
            mc("4. How does the girl go to school now?", ["On foot.", "By bus.", "By bike."], 1, "'now… I take the bus'."),
            mc("5. What's the weather like today?", ["Rainy.", "Windy.", "Sunny."], 1, "'it's very windy'."),
          ],
        }),

        SUMMARY("Resumen del Día 4", [
          "there is (singular) / there are (plural); negativa e interrogativa con any.",
          "a + consonante, an + vocal; some (afirm.) / any (neg. y preg.).",
          "Preposiciones de lugar: in, on, under, next to, between, behind…",
          "Listening: cada audio se oye 2 veces; lee las opciones antes de escuchar.",
        ]),
        INFO("Tarea para el Día 5", "Describe tu casa en 4–5 frases con there is/are y preposiciones de lugar. Repasa TODO el vocabulario de la semana. Mañana: repaso general y mini-test."),
      ],
    },

    // ───────────────────────────── DÍA 5 ─────────────────────────────
    {
      title: "Día 5 — Repaso de la semana + mini-test",
      description: "Consolidación de la gramática y el vocabulario de la semana. Examen: Reading & Writing, Parte 2 (multiple matching). Mini-test de progreso.",
      pedagogy: {
        objective: "Consolidar la gramática y el vocabulario de la semana y medir el progreso con un mini-test.",
        summary: "Repaso de present simple/continuous, preguntas y there is/are; vocabulario acumulado; Parte 2; mini-test.",
        reviewPrompts: ["¿Qué punto de la semana te ha costado más?", "Repítelo mañana antes de empezar la Semana 2."],
      },
      items: [
        TEXT("🎯 Día de repaso. Hoy no hay gramática nueva: consolidas lo de la semana, amplías con una parte de examen nueva (Parte 2) y haces un mini-test que te dice si estás listo para la Semana 2."),

        GRAMMAR("Repaso de la Semana 1", `GRAMÁTICA de la semana, en 4 ideas:
1) Present simple: rutinas y hechos; he/she/it lleva -s; negativa/pregunta con do/does + verbo base.
2) Preguntas: QW + do/does + sujeto + verbo; edad con 'be'; preguntas de sujeto sin do.
3) Present continuous: acciones de ahora/temporales (am/is/are + -ing); ojo con los verbos de estado.
4) there is/are + a/an + some/any + preposiciones de lugar.

Si dudas en alguna, vuelve al día correspondiente antes del mini-test.`),

        exercise({
          category: "reading", collect: true, weight: 10,
          title: "Repaso mixto de gramática — Semana 1",
          instructions: "Completa o elige. Mezcla todo lo de la semana.",
          questions: [
            fb("My brother ___ (not/like) vegetables.", ["doesn't like", "does not like"], "3ª persona negativa: doesn't + base."),
            fb("___ (order: you / where / from / are) → ___?", ["where are you from"], "Origen: Where are you from?"),
            fb("Right now I ___ (write) an email.", ["am writing", "'m writing"], "Ahora → present continuous."),
            mc("Choose the correct one:", ["There is three chairs.", "There are three chairs.", "There are a chair."], 1, "Plural → There are three chairs."),
            mc("Choose the correct question:", ["How old have you?", "How old are you?", "How many years you have?"], 1, "Edad: How old are you?"),
            fb("She ___ (study) every evening, but tonight she ___ (watch) a film.", ["studies", "is watching"], "Rutina → studies; ahora → is watching."),
            mc("Choose: 'Are there ___ shops near here?'", ["some", "any", "a"], 1, "Pregunta → any."),
            fb("Who ___ (live) in that big house?", ["lives"], "Pregunta de sujeto: sin do, verbo con -s → lives."),
          ],
        }),

        GRAMMAR("Repaso de vocabulario — Semana 1", "Repasa los cuatro mazos (información personal, familia, rutina, casa) y comprueba con este ejercicio."),
        exercise({
          category: "reading", collect: true, weight: 8,
          title: "Repaso de vocabulario — Semana 1",
          instructions: "Elige la opción correcta.",
          questions: [
            mc("Your family name:", ["first name", "surname", "nationality"], 1, "surname = apellido."),
            mc("Your brothers and sisters:", ["parents", "siblings", "cousins"], 1, "siblings."),
            mc("To get out of bed:", ["get up", "hang out", "go to bed"], 0, "get up."),
            mc("Where you keep cold food:", ["wardrobe", "fridge", "stairs"], 1, "fridge."),
            mc("Not married:", ["retired", "single", "married"], 1, "single."),
            mc("To relax with friends:", ["do homework", "hang out", "get dressed"], 1, "hang out."),
            mc("Tables and beds (uncountable):", ["furniture", "furnitures", "a furniture"], 0, "furniture."),
            mc("Your uncle's daughter:", ["niece", "cousin", "nephew"], 1, "cousin."),
          ],
        }),

        GRAMMAR("Estrategia de examen — Reading & Writing, Parte 2 (emparejar)", `En la Parte 2 hay descripciones (por ejemplo, 3 personas y lo que quieren) y varias opciones; emparejas cada persona con la opción que le conviene. Se centra en leer para encontrar información específica.

Cómo hacerla:
1) Lee primero lo que necesita cada persona (subraya 2–3 datos clave).
2) Busca la opción que cumple TODOS esos datos, no solo uno.
3) Una opción sobra: no todas se usan.`),
        exercise({
          category: "reading", collect: true, weight: 6,
          title: "Examen — Reading & Writing, Parte 2 (emparejar)",
          instructions: "Lee lo que quiere cada persona y elige el lugar ideal (A/B/C).\n\nA) Green Park Café — quiet place, good coffee, open until 8 pm, free wifi.\nB) City Sports Centre — swimming pool and gym, open early, cheap for students.\nC) Sunny Beach Restaurant — fresh fish, tables outside, great for families with children.",
          questions: [
            mc("Marta wants to study with her laptop and drink coffee in a calm place.", ["A", "B", "C"], 0, "Green Park Café: quiet, good coffee, free wifi."),
            mc("Daniel is a student who wants to swim before class in the morning.", ["A", "B", "C"], 1, "City Sports Centre: pool, open early, cheap for students."),
            mc("The López family want to have lunch outside with their two young kids.", ["A", "B", "C"], 2, "Sunny Beach Restaurant: tables outside, great for families."),
            mc("Someone who wants cheap sport facilities should choose…", ["A", "B", "C"], 1, "B is 'cheap for students' with gym/pool."),
            mc("Someone who wants to eat fresh fish should choose…", ["A", "B", "C"], 2, "C serves fresh fish."),
          ],
        }),

        INFO("Mini-test de progreso", "El siguiente examen reúne, cronometradas, las prácticas auto-corregibles de la semana. Apruebas con un 60%. Si no llegas, repasa los días que te costaron antes de empezar la Semana 2."),
        { type: "EXAM_PLACEHOLDER" }, // el motor inserta aquí el examen semanal

        SUMMARY("Resumen de la Semana 1", [
          "Sabes hablar de tu vida: rutinas, familia, casa y lo que haces ahora.",
          "Dominas present simple, present continuous, preguntas y there is/are.",
          "Has practicado 5 partes reales del examen (R&W 1, 2, 5; Listening 1; Speaking 1).",
          "La semana que viene: pasado (past simple) y experiencias.",
        ]),
      ],
    },
  ],
};

const WEEKS = [WEEK1];

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
  if (existing) { await db.exam.deleteMany({ where: { courseId: existing.id } }); await db.course.delete({ where: { id: existing.id } }); console.warn("♻️  Piloto anterior eliminado."); }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "A2 Key — PILOTO (nuevo estándar diario)", subtitle: "Semana 1 de muestra: 5 días de ~1 h con teoría de profesor, vocabulario diario y examen réplica de Cambridge.",
      description: "PILOTO para revisar el nuevo estándar de NOVARA: cada día es una clase de academia de ~1 hora (gramática profunda con errores típicos y pronunciación, vocabulario nuevo con flashcards, y práctica de una parte REAL del examen A2 Key). Estructura de examen fiel a Cambridge; ejercicios originales. Cuando apruebes este listón, se replica a los 8 niveles.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "A2 Key — Piloto del nuevo estándar diario — NOVARA", seoDescription: "Muestra del nuevo estándar diario de NOVARA para A2 Key.",
      objectives: { create: [
        "Ver una semana completa en el nuevo formato diario (5 días de ~1 h).",
        "Comprobar la profundidad de la teoría y los errores típicos del hispanohablante.",
        "Practicar partes reales del examen A2 Key (Reading & Writing, Listening, Speaking).",
      ].map((text, i) => ({ sortOrder: i, text })) },
    },
  });
  console.warn(`✅ Curso piloto creado: ${course.title}`);

  const createModule = (title, description, sortOrder) => db.module.create({ data: { courseId: course.id, title, description, sortOrder } });

  // Guía
  const m0 = await createModule("Guía del piloto y del examen A2 Key", "Cómo funciona el día a día y la estructura oficial del examen.", 0);
  const guide = await db.lesson.create({ data: { moduleId: m0.id, title: "Cómo funciona este programa y el examen A2 Key", description: "El método diario y la estructura oficial de Cambridge.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: true } });
  {
    let o = 0;
    const gb = [
      TEXT("Este es un PILOTO para fijar el estándar del nuevo NOVARA. Verás la Semana 1 completa (5 días). Cada día es una clase de ~1 hora: repaso, gramática con profundidad, vocabulario nuevo con flashcards y una parte real del examen."),
      GRAMMAR("El examen A2 Key (KET) — estructura oficial", `Fuente: Cambridge English. El A2 Key tiene 3 pruebas:

READING & WRITING (1 hora · 7 partes · 32 preguntas · 50% de la nota)
· P1: 6 textos cortos (señales/mensajes), opción múltiple.
· P2: emparejar 7 preguntas con 3 textos.
· P3: un texto largo, 5 preguntas de opción múltiple.
· P4: completar huecos con vocabulario (6, opción múltiple).
· P5: open cloze — una palabra por hueco (6).
· P6: escribir un email o nota (25+ palabras).
· P7: escribir un relato de 35+ palabras a partir de 3 imágenes.

LISTENING (30 min · 5 partes · 25 preguntas · 25%) — cada audio se oye DOS veces:
· P1: 5 conversaciones cortas → elegir. · P2: completar notas. · P3: diálogo con opción múltiple (5). · P4: 5 monólogos, idea principal. · P5: emparejar.

SPEAKING (8–10 min · 2 partes · 25%) — con otro candidato y dos examinadores:
· P1: preguntas personales (3–4 min). · P2: gustos y razones (5–6 min).`),
      INFO("Cómo progresa el programa", "5 días por semana (Lun–Vie), ~1 h por día. No se puede saltar: cada día se desbloquea cuando terminas el anterior. Cada 4 semanas hay un simulacro y al final del nivel, un simulacro completo que estima tu nota en la Cambridge Scale (aprobado A2 = 120)."),
      WARN("Preparado en NOVARA ≠ certificado por Cambridge", "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English."),
    ];
    for (const b of gb) await db.lessonBlock.create({ data: { lessonId: guide.id, type: b.type, order: o++, title: b.title ?? null, content: b.content ?? null, data: b.data ?? undefined } });
  }

  let sortOrder = 1;
  for (const w of WEEKS) {
    const m = await createModule(`Semana ${w.n} — ${w.theme}`, `Cinco días de clase (Lun–Vie): gramática, vocabulario y práctica de examen.`, sortOrder++);
    let dayIndex = 0;
    for (const day of w.days) {
      const lesson = await db.lesson.create({ data: { moduleId: m.id, title: day.title, description: day.description, sortOrder: dayIndex, contentTypeId: contentTexto.id, isPreview: false } });
      let order = 0;
      const weekExerciseIds = [];
      for (const item of day.items) {
        if (item.deck) {
          const d = await db.flashcardDeck.create({ data: { title: item.deck.title, description: "Vocabulario del día", language: "en", authorId: adminUser.id, cards: { create: item.deck.cards.map(([term, translation, example, cat, ipa], i) => ({ sortOrder: i, term, translation, example, category: cat, ipa: ipa ?? null, level: "A2" })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "FLASHCARDS", order: order++, deckId: d.id } });
        } else if (item.exercise) {
          const ex = item.exercise;
          let config = ex.config ?? undefined;
          if (ex.category === "listening" && ex.audioScript) {
            const audio = await generateListeningAudio(ex.audioScript, `piloto-a2-w${w.n}-d${dayIndex}`);
            if (audio) { config = { ...(config ?? {}), audioUrl: audio }; console.warn(`🔊 Audio Listening: ${audio}`); }
            else console.warn("⚠️  Piper no disponible: Listening sin audio.");
          }
          const e = await db.exercise.create({ data: { lessonId: lesson.id, category: ex.category, title: ex.title, instructions: ex.instructions ?? null, sortOrder: 0, config, questions: { create: ex.questions.map((q, i) => ({ order: i, kind: q.kind, data: q.data })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXERCISE", order: order++, data: { exerciseId: e.id } } });
          if (ex.collect) weekExerciseIds.push({ id: e.id, weight: ex.weight ?? 6 });
        } else if (item.type === "EXAM_PLACEHOLDER") {
          // Mini-test semanal: reúne las prácticas auto-corregibles de la semana.
          const collected = day.items.filter((it) => it.exercise && it.exercise.collect).map((it) => it.exercise);
          void collected; // los ids reales se recogen abajo con weekExerciseIds
          const exam = await db.exam.create({ data: { courseId: course.id, title: `Mini-test — Semana ${w.n} (A2 Key)`, passingScore: 60, timeLimitMinutes: 30, sections: { create: weekExerciseIds.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXAM", order: order++, data: { examId: exam.id } } });
        } else {
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: item.type, order: order++, title: item.title ?? null, content: item.content ?? null, data: item.data ?? undefined } });
        }
      }
      if (day.pedagogy) await db.lessonPedagogy.create({ data: { lessonId: lesson.id, ...day.pedagogy } });
      dayIndex++;
    }
  }

  const counts = {
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    bloques: await db.lessonBlock.count({ where: { lesson: { module: { courseId: course.id } } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "A2 Key Piloto" } } } }),
    examenes: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ Piloto A2 Key (Semana 1) completado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error piloto A2:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
