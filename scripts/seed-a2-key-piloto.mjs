/**
 * A2 Key — PILOTO del nuevo estándar diario de NOVARA (Día 1 COMPLETO).
 *
 * Corrige el feedback: cada DÍA practica TODOS los skills y TODAS sus partes,
 * con el MISMO formato que Cambridge:
 *   • READING con su TEXTO y luego las preguntas (Partes 1–5).
 *   • WRITING real (Parte 6 email/nota 25+ y Parte 7 relato 35+).
 *   • LISTENING con AUDIO británico (Partes 1–5), cada audio continuo.
 *   • SPEAKING por voz (Parte 1 y Parte 2).
 * Además: gramática con profundidad de profesor + vocabulario con flashcards.
 * Estructura fiel a Cambridge (cambridgeenglish.org); ejercicios ORIGINALES.
 *
 * Idempotente sobre 'a2-key-piloto'. No toca el curso 'a2-key' real.
 *   node scripts/seed-a2-key-piloto.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const SLUG = "a2-key-piloto";
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

const TEXT = (content) => ({ type: "TEXT", content });
const GRAMMAR = (title, content) => ({ type: "GRAMMAR", title, content });
const TIP = (title, content) => ({ type: "TIP", title, content, data: { variant: "success" } });
const WARN = (title, content) => ({ type: "NOTES", title, content, data: { variant: "warning" } });
const INFO = (title, content) => ({ type: "NOTES", title, content, data: { variant: "info" } });
const SUMMARY = (title, items) => ({ type: "SUMMARY", title, data: { items } });
const HEAD = (title, content) => ({ type: "GRAMMAR", title, content }); // encabezado de sección
const deck = (title, cards) => ({ deck: { title, cards } });
const exercise = (ex) => ({ exercise: ex });

// ════════════════════════════════════════════════════════════════════════════
// DÍA 1 — completo. Tema del día: TU VIDA (present simple; información personal
// y familia). Se practican los 4 skills y todas sus partes.
// ════════════════════════════════════════════════════════════════════════════
const DAY1 = {
  title: "Día 1 — Tu vida (present simple) · práctica completa de examen",
  description: "Gramática, vocabulario y práctica de las 4 destrezas con el formato real del A2 Key: Reading (Partes 1–5), Writing (Partes 6–7), Listening (Partes 1–5) y Speaking (Partes 1–2).",
  pedagogy: {
    objective: "Usar el present simple para hablar de tu vida y practicar las 4 destrezas del A2 Key en su formato real.",
    summary: "Present simple; información personal y familia; Reading P1–P5, Writing P6–P7, Listening P1–P5, Speaking P1–P2.",
    commonMistakes: ["Olvidar la -s de 3ª persona.", "-s de más en negativas/preguntas.", "'I have 20 years' en vez de 'I am 20'."],
    reviewPrompts: ["¿Cómo se forma la 3ª persona de 'go' y 'study'?", "¿Dónde va 'always' con el verbo 'be'?"],
  },
  items: [
    TEXT("👋 Bienvenido al Día 1. Hoy tienes una clase completa (≈1 h y media): primero la GRAMÁTICA del día y el VOCABULARIO nuevo, y después practicas las CUATRO destrezas del examen —Reading, Writing, Listening y Speaking— con TODAS sus partes y el mismo formato que Cambridge. Ve sin prisa y haz cada parte como si fuera el examen real."),

    // ══════════ GRAMÁTICA ══════════
    GRAMMAR("El present simple — forma", `Sirve para hablar de tu vida: rutinas y hechos que no cambian.

AFIRMATIVA
· I / you / we / they + verbo base: I work · they live.
· he / she / it + verbo con -s: he works · she lives.
La -s de 3ª persona es OBLIGATORIA (es el error nº 1 del hispanohablante).

Ortografía de la -s: work→works; go→goes, watch→watches, finish→finishes (-o,-s,-sh,-ch,-x → +es); study→studies, try→tries (consonante + y → -ies), pero play→plays (vocal + y).

NEGATIVA: do/does + not + verbo BASE → I don't smoke · She doesn't smoke (NO 'doesn't smokes').
PREGUNTA: Do/Does + sujeto + verbo BASE → Do you like coffee? · Does he live here? Respuestas cortas: Yes, I do. / No, she doesn't.`),
    GRAMMAR("El present simple — uso y frecuencia", `Usos: rutinas (I get up at seven), hechos (Water boils at 100°) y horarios (The train leaves at nine).

ADVERBIOS DE FRECUENCIA: always · usually · often · sometimes · hardly ever · never.
· ANTES del verbo principal: I always have breakfast.
· DESPUÉS del verbo 'be': He is always late.
'never' ya es negativo: I never eat meat (NO 'I don't never').`),
    WARN("Errores típicos del hispanohablante", `· ❌ She work → ✅ She works.
· ❌ Does she works? → ✅ Does she work?
· ❌ I have 20 years → ✅ I am 20 (years old).
· ❌ People is nice → ✅ People are nice.`),
    TIP("Pronunciación de la -s final", `· /s/ tras sonido sordo: works, likes, stops.
· /z/ tras sonido sonoro o vocal: plays, goes, lives.
· /ɪz/ tras s, z, sh, ch, ge: watches, uses, washes.
Escúchalo en las flashcards y repite en voz alta.`),
    exercise({
      category: "reading", collect: true, weight: 8,
      title: "Gramática — Present simple",
      instructions: "Completa o elige la opción correcta.",
      questions: [
        fb("She ___ (study) medicine.", ["studies"], "Consonante + y → -ies: studies."),
        fb("He ___ (go) to work by train.", ["goes"], "-o → +es: goes."),
        fb("They ___ (not/eat) meat.", ["don't eat", "do not eat"], "Plural: don't + base."),
        mc("Choose the correct sentence.", ["She doesn't likes tea.", "She doesn't like tea.", "She don't like tea."], 1, "doesn't + verbo BASE."),
        mc("'He ___ late.' (always + be)", ["always is", "is always", "is late always"], 1, "Con 'be' el adverbio va después: is always."),
        fb("___ your parents ___ (speak) English?", ["Do", "speak"], "Pregunta plural: Do … speak?"),
        fb("Water ___ (boil) at 100 degrees.", ["boils"], "Hecho general, 3ª persona: boils."),
        mc("The -s in 'watches' sounds like…", ["/s/", "/z/", "/ɪz/"], 2, "Tras -ch → /ɪz/."),
      ],
    }),

    // ══════════ VOCABULARIO ══════════
    GRAMMAR("Vocabulario del día — Información personal y familia", "Gira las cartas, escucha la pronunciación (voz británica) y fíjate en los ejemplos. Repásalas a diario."),
    deck("A2 Key Piloto — Día 1: Información personal y familia", [
      ["surname", "apellido", "Her surname is Ortega.", "sustantivo", "ˈsɜːneɪm"],
      ["date of birth", "fecha de nacimiento", "My date of birth is the 3rd of May.", "colocación", "deɪt əv ˈbɜːθ"],
      ["nationality", "nacionalidad", "Her nationality is Spanish.", "sustantivo", "ˌnæʃəˈnæləti"],
      ["occupation", "ocupación / profesión", "His occupation is teacher.", "sustantivo", "ˌɒkjuˈpeɪʃn"],
      ["single", "soltero/a", "I'm single.", "adjetivo", "ˈsɪŋɡl"],
      ["married", "casado/a", "She is married.", "adjetivo", "ˈmærid"],
      ["parents", "padres", "My parents live in Seville.", "sustantivo", "ˈpeərənts"],
      ["siblings", "hermanos (en general)", "I have two siblings.", "sustantivo", "ˈsɪblɪŋz"],
      ["cousin", "primo/a", "My cousin studies in Madrid.", "sustantivo", "ˈkʌzn"],
      ["get on with", "llevarse bien con", "I get on well with my sister.", "phrasal verb", "ɡet ˈɒn wɪð"],
    ]),
    exercise({
      category: "reading", collect: true, weight: 6,
      title: "Vocabulario — Información personal y familia",
      instructions: "Elige la opción correcta.",
      questions: [
        mc("Your family name is your ___.", ["surname", "occupation", "nationality"], 0, "surname = apellido."),
        mc("Your brothers and sisters are your ___.", ["parents", "siblings", "cousins"], 1, "siblings."),
        mc("A person who is not married is ___.", ["married", "single", "retired"], 1, "single."),
        mc("Your job is your ___.", ["occupation", "surname", "nationality"], 0, "occupation."),
        mc("Your uncle's daughter is your ___.", ["cousin", "sibling", "parent"], 0, "cousin."),
        mc("'I ___ my sister' (buena relación).", ["get on well with", "look like", "get up"], 0, "get on well with."),
      ],
    }),

    // ══════════ READING (Partes 1–5) ══════════
    HEAD("📖 READING — como en el examen (Partes 1–5)", "El Reading & Writing del A2 Key dura 1 hora. Ahora practicas las 5 partes de Reading en su formato real. En cada parte lees primero y luego respondes."),

    exercise({
      category: "reading", collect: true, weight: 6,
      title: "Reading · Parte 1 — Señales y mensajes",
      instructions: "Lee cada texto corto y elige qué significa (A/B/C). Son textos del mundo real: señales, notas y mensajes.",
      questions: [
        mc("Shop window: 'SALE — everything half price this week only.'", ["Prices are lower only this week.", "The shop is closed this week.", "Only half the shop is open."], 0, "'half price this week only'."),
        mc("Text: 'Running late — start the meeting without me. Sam.'", ["Sam wants them to wait.", "Sam says begin before he arrives.", "Sam has cancelled it."], 1, "'start without me'."),
        mc("Library notice: 'Please return books within three weeks.'", ["Keep books for a month.", "Give books back in three weeks or less.", "The library is closed."], 1, "'within three weeks'."),
        mc("Fridge note: 'Milk finished — buy some on your way home. Mum.'", ["Mum bought milk.", "Mum wants you to buy milk.", "There is lots of milk."], 1, "'buy some'."),
        mc("Station sign: 'Tickets must be shown on the train.'", ["Show your ticket on the train.", "Tickets are free.", "You can't buy tickets."], 0, "'must be shown on the train'."),
        mc("Email subject: 'Your order has been sent and arrives Friday.'", ["Ready to collect.", "It will come on Friday.", "It was cancelled."], 1, "'arrives Friday'."),
      ],
    }),

    exercise({
      category: "reading", collect: true, weight: 7,
      title: "Reading · Parte 2 — Emparejar personas y opciones",
      instructions: "Lee lo que quiere cada persona y elige el lugar ideal (A/B/C). Una opción sirve para más de una persona.",
      config: { text: "THREE PLACES IN TOWN\n\nA) Green Park Café — a quiet place with very good coffee, free wifi and big tables. Open until 8 pm. Perfect for studying or reading.\n\nB) City Sports Centre — a swimming pool and a gym. Opens early (7 am). Special low prices for students.\n\nC) Sunny Beach Restaurant — fresh fish and pizza, tables outside near the sea. Great for families with young children." },
      questions: [
        mc("Marta wants a calm place to study with her laptop and a coffee.", ["A", "B", "C"], 0, "Green Park Café: quiet, coffee, wifi."),
        mc("Daniel is a student who wants to swim early before class.", ["A", "B", "C"], 1, "Sports Centre: pool, early, student prices."),
        mc("The López family want lunch outside with their two small kids.", ["A", "B", "C"], 2, "Beach Restaurant: outside, families."),
        mc("Lucía wants a cheap gym.", ["A", "B", "C"], 1, "B: gym, cheap for students."),
        mc("Tom wants to read quietly in the evening.", ["A", "B", "C"], 0, "A: quiet, open until 8 pm."),
        mc("A couple want to eat fresh fish by the sea.", ["A", "B", "C"], 2, "C: fresh fish, near the sea."),
        mc("A group of students want to study together at a big table.", ["A", "B", "C"], 0, "A: big tables, wifi."),
      ],
    }),

    exercise({
      category: "reading", collect: true, weight: 5,
      title: "Reading · Parte 3 — Texto largo (comprensión)",
      instructions: "Lee el texto y responde a las 5 preguntas (A/B/C).",
      config: { text: "MY LIFE IN A SMALL TOWN\n\nMy name is Diego and I live in a small town near Valencia. From Monday to Friday I work in a bookshop in the town centre. I usually start at nine o'clock and finish at half past five. I love my job because I meet interesting people, and I can read during my breaks.\n\nIn the evenings, I often cook dinner for my family. My sister, Carmen, lives with me. She is a nurse and she works at night, so we don't see each other much during the week. At weekends, we always visit our parents, who live in the mountains. On Sundays we have a big lunch together and go for a walk.\n\nI don't like big cities. Life in my town is quiet, and I feel happy here." },
      questions: [
        mc("Where does Diego work?", ["In a restaurant.", "In a bookshop.", "In a hospital."], 1, "'I work in a bookshop'."),
        mc("Why does he like his job?", ["It pays a lot.", "He meets people and can read.", "It is near his home."], 1, "'I meet interesting people, and I can read'."),
        mc("What is Carmen's job?", ["Teacher.", "Nurse.", "Cook."], 1, "'She is a nurse'."),
        mc("Why don't Diego and Carmen see each other much?", ["She lives in another town.", "She works at night.", "She is travelling."], 1, "'she works at night'."),
        mc("What does Diego think about big cities?", ["He loves them.", "He doesn't like them.", "He wants to move to one."], 1, "'I don't like big cities'."),
      ],
    }),

    exercise({
      category: "reading", collect: true, weight: 6,
      title: "Reading · Parte 4 — Huecos con opciones (vocabulario)",
      instructions: "Lee el texto y elige la palabra correcta (A/B/C) para cada hueco.",
      config: { text: "Emma (1)___ up at seven every morning. She (2)___ a shower and (3)___ breakfast. Then she (4)___ to work by bus, because she (5)___ in an office in the city. In the evening, she (6)___ out with her friends." },
      questions: [
        mc("Hueco 1", ["wakes", "makes", "takes"], 0, "'wake up' = despertarse → wakes up."),
        mc("Hueco 2", ["makes", "has", "does"], 1, "'have a shower' → has a shower."),
        mc("Hueco 3", ["has", "goes", "plays"], 0, "'have breakfast' → has breakfast."),
        mc("Hueco 4", ["goes", "gets", "does"], 0, "'go to work' → goes to work."),
        mc("Hueco 5", ["lives", "works", "stays"], 1, "'works in an office'."),
        mc("Hueco 6", ["hangs", "stays", "gets"], 0, "'hang out with friends' → hangs out."),
      ],
    }),

    exercise({
      category: "reading", collect: true, weight: 6,
      title: "Reading · Parte 5 — Open cloze (una palabra por hueco)",
      instructions: "Lee el email y escribe UNA sola palabra en cada hueco. Se centra en gramática (auxiliares, preposiciones, conectores).",
      config: { text: "Hi Marta,\nI'm writing (1)___ tell you about my new routine. From Monday to Friday I get (2)___ at seven. I usually have breakfast (3)___ my sister — she's really funny! I don't like coffee, (4)___ I drink tea. At the moment I (5)___ studying for an exam, so I don't have much free time. What (6)___ you do after work these days?\nWrite soon!\nLucía" },
      questions: [
        fb("Hueco 1", ["to"], "'writing to tell' (finalidad)."),
        fb("Hueco 2", ["up"], "'get up'."),
        fb("Hueco 3", ["with"], "'have breakfast with'."),
        fb("Hueco 4", ["so"], "consecuencia → so."),
        fb("Hueco 5", ["am", "'m"], "'at the moment' → am studying."),
        fb("Hueco 6", ["do"], "What do you do?"),
      ],
    }),

    // ══════════ WRITING (Partes 6–7) ══════════
    HEAD("✍️ WRITING — como en el examen (Partes 6–7)", "Ahora escribes. En la Parte 6 escribes un email o nota (25+ palabras) y en la Parte 7 un relato (35+ palabras). Se guardan y el profesor los revisa; escribe frases completas y usa el vocabulario del día."),
    exercise({
      category: "writing",
      config: { minWords: 25, maxWords: 80 },
      title: "Writing · Parte 6 — Un email a tu amigo/a",
      instructions: "Tu amigo/a inglés/a Alex quiere quedar este fin de semana. Escríbele un email (25 palabras o más). Incluye estos 3 puntos:\n· di qué te gustaría hacer,\n· propón un día,\n· pregúntale a qué hora quedáis.\n\nEmpieza por 'Hi Alex,' y firma con tu nombre.",
      questions: [],
    }),
    exercise({
      category: "writing",
      config: { minWords: 35, maxWords: 100 },
      title: "Writing · Parte 7 — Un relato a partir de 3 imágenes",
      instructions: "Escribe un relato (35 palabras o más) que cuente la historia de estas TRES imágenes:\n1) Una chica prepara una mochila en su habitación por la mañana.\n2) La chica sube a un tren con la mochila.\n3) La chica llega a la playa y sonríe.\n\nUsa el pasado si puedes, o el present simple. Escribe frases ordenadas (primero…, después…, al final…).",
      questions: [],
    }),

    // ══════════ LISTENING (Partes 1–5) ══════════
    HEAD("🎧 LISTENING — como en el examen (Partes 1–5)", "Ahora escuchas. Cada audio es continuo y en el examen real se oye DOS veces (aquí puedes repetirlo). Lee las preguntas antes de cada audio."),

    exercise({
      category: "listening", listeningPart: 1,
      title: "Listening · Parte 1 — Cinco conversaciones cortas",
      instructions: "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.",
      audioScript: "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Are your keys on the kitchen table? Man: No, I've looked there. Woman: What about your coat pocket? Man: Ah yes, here they are, in my coat. Two. Woman: Does the train to Oxford leave at half past nine? Man: It used to, but now it leaves at nine forty-five. Woman: Nine forty-five, thank you. Three. Man: Shall we have pizza for lunch? Woman: We had pizza yesterday. Let's make a salad. Man: Good idea, a salad it is. Four. Woman: Do you walk to school, Emma? Girl: I used to, but now it's too far, so I take the bus. Five. Man: Do I need my umbrella today? Woman: No, it's not raining now, but it's very windy.",
      questions: [
        mc("1. Where are the man's keys?", ["On the kitchen table.", "In his coat pocket.", "He can't find them."], 1, "'here they are, in my coat'."),
        mc("2. What time does the train leave now?", ["Half past nine.", "A quarter to ten (9:45).", "Nine o'clock."], 1, "'now it leaves at nine forty-five'."),
        mc("3. What will they have for lunch?", ["Pizza.", "A salad.", "Nothing."], 1, "'Let's make a salad'."),
        mc("4. How does Emma go to school now?", ["On foot.", "By bus.", "By bike."], 1, "'now… I take the bus'."),
        mc("5. What is the weather like today?", ["Rainy.", "Windy.", "Sunny."], 1, "'it's very windy'."),
      ],
    }),

    exercise({
      category: "listening", listeningPart: 2,
      title: "Listening · Parte 2 — Completar notas",
      instructions: "Escucha el mensaje y completa las notas con UNA palabra o un número en cada hueco.",
      audioScript: "This is Part Two. You will hear a woman leaving a message about a birthday party. Hi, it's Sarah. I'm calling about Tom's birthday party. The party is on Saturday the fifteenth of June. It starts at four o'clock in the afternoon, at my house — the address is twelve Green Street. Please bring some music, and don't tell Tom — it's a surprise! Call me on zero seven, double six, four, three, two, one.",
      questions: [
        fb("Party day: ___", ["Saturday"], "'on Saturday the fifteenth'."),
        fb("Date: the ___ of June", ["fifteenth", "15th", "15"], "'the fifteenth of June'."),
        fb("It starts at ___ o'clock.", ["four", "4"], "'It starts at four o'clock'."),
        fb("Address: 12 ___ Street", ["Green"], "'twelve Green Street'."),
        fb("Please bring some ___.", ["music"], "'bring some music'."),
      ],
    }),

    exercise({
      category: "listening", listeningPart: 3,
      title: "Listening · Parte 3 — Una conversación (opción múltiple)",
      instructions: "Escucha la conversación entre dos amigos y elige la respuesta correcta (A/B/C).",
      audioScript: "This is Part Three. You will hear two friends, Jack and Mia, talking about their weekend. Jack: Hi Mia, what did you do at the weekend? Mia: On Saturday I went to the cinema with my brother. We saw a comedy — it was really funny. Jack: Nice! And on Sunday? Mia: On Sunday it rained all day, so I stayed at home and read a book. What about you, Jack? Jack: I played football on Saturday morning, and in the afternoon I visited my grandparents. On Sunday I studied for my English exam. Mia: Good luck with the exam! When is it? Jack: It's next Thursday. I'm a bit nervous, but I'm ready.",
      questions: [
        mc("What did Mia do on Saturday?", ["She went to the cinema.", "She played football.", "She read a book."], 0, "'I went to the cinema'."),
        mc("Why did Mia stay at home on Sunday?", ["She was ill.", "It rained.", "She had homework."], 1, "'it rained all day, so I stayed at home'."),
        mc("What did Jack do on Saturday afternoon?", ["He played football.", "He visited his grandparents.", "He studied."], 1, "'in the afternoon I visited my grandparents'."),
        mc("What is Jack doing next Thursday?", ["Playing football.", "Taking an English exam.", "Going to the cinema."], 1, "'my English exam… It's next Thursday'."),
        mc("How does Jack feel about the exam?", ["Very relaxed.", "A bit nervous but ready.", "He doesn't care."], 1, "'a bit nervous, but I'm ready'."),
      ],
    }),

    exercise({
      category: "listening", listeningPart: 4,
      title: "Listening · Parte 4 — Cinco monólogos (idea principal)",
      instructions: "Escucha las cinco personas hablando. Elige de qué habla cada una (idea principal).",
      audioScript: "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. I usually get up early and go for a run before breakfast. It helps me feel awake for the whole day. Two. My favourite meal is dinner. I love cooking pasta with vegetables and eating with my family. Three. I take the bus to work every day. It takes about thirty minutes and I read the news on my phone. Four. At the weekend I like painting. It's relaxing and I feel calm when I paint. Five. I've got a small dog called Max. I walk him twice a day, in the morning and at night.",
      questions: [
        mc("Person 1 is talking about…", ["exercise", "food", "a pet"], 0, "'go for a run'."),
        mc("Person 2 is talking about…", ["transport", "food", "a hobby"], 1, "'My favourite meal… cooking pasta'."),
        mc("Person 3 is talking about…", ["transport", "exercise", "a pet"], 0, "'I take the bus to work'."),
        mc("Person 4 is talking about…", ["food", "a hobby", "transport"], 1, "'I like painting'."),
        mc("Person 5 is talking about…", ["a pet", "exercise", "food"], 0, "'I've got a small dog'."),
      ],
    }),

    exercise({
      category: "listening", listeningPart: 5,
      title: "Listening · Parte 5 — Emparejar",
      instructions: "Escucha a Ana hablar de los regalos que compró para su familia. Empareja cada persona con su regalo (A/B/C).",
      audioScript: "This is Part Five. You will hear Ana talking about the presents she bought for her family. For my mother, I bought a book about cooking, because she loves making new dishes. For my father, I bought a warm jumper, because he's always cold in winter. For my brother, I bought some football boots, because he plays every weekend. For my sister, I bought some headphones, because she listens to music all the time. And for my grandmother, I bought a nice plant for her garden.",
      questions: [
        mc("Mother", ["a book", "a jumper", "football boots"], 0, "'a book about cooking'."),
        mc("Father", ["headphones", "a jumper", "a plant"], 1, "'a warm jumper'."),
        mc("Brother", ["football boots", "a book", "a plant"], 0, "'some football boots'."),
        mc("Sister", ["a plant", "headphones", "a jumper"], 1, "'some headphones'."),
        mc("Grandmother", ["a plant", "a book", "football boots"], 0, "'a nice plant'."),
      ],
    }),

    // ══════════ SPEAKING (Partes 1–2) ══════════
    HEAD("🗣️ SPEAKING — como en el examen (Partes 1–2)", "Por último, hablas por el micrófono con el examinador virtual. En la Parte 1 respondes preguntas personales; en la Parte 2 hablas de tus gustos y das razones. Responde con frases completas y añade un detalle."),
    exercise({
      category: "speaking",
      config: { language: "en", level: "A2", scenario: "Parte 1 del A2 Key: el examinador te hace preguntas personales sencillas — tu nombre, de dónde eres, tu familia, tus estudios o trabajo y tu rutina diaria", objective: "responder con frases completas y un detalle, usando present simple y adverbios de frecuencia", keywords: "My name is, I live in, I've got, I usually, my family" },
      title: "Speaking · Parte 1 — Preguntas personales",
      instructions: "Pulsa «Iniciar conversación» y responde por el micrófono. Al terminar, «Finalizar y evaluar».",
      questions: [],
    }),
    exercise({
      category: "speaking",
      config: { language: "en", level: "A2", scenario: "Parte 2 del A2 Key: hablas de tus gustos y das razones — comidas, deportes, actividades de tiempo libre; el examinador te pregunta qué te gusta y por qué, y qué prefieres", objective: "expresar gustos (I like/I love/I prefer) y dar razones (because…)", keywords: "I like, I love, I prefer, because, my favourite" },
      title: "Speaking · Parte 2 — Gustos y razones",
      instructions: "Pulsa «Iniciar conversación» y responde por el micrófono, dando siempre una razón con 'because'.",
      questions: [],
    }),

    SUMMARY("Resumen del Día 1", [
      "Present simple: 3ª persona con -s; negativa/pregunta con do/does + base.",
      "Has practicado las 4 destrezas con el formato real del A2 Key.",
      "Reading: 5 partes (con textos). Writing: email + relato. Listening: 5 partes (audio). Speaking: 2 partes.",
      "Repasa las flashcards y termina los dos textos de Writing antes de mañana.",
    ]),
    INFO("Tarea para el Día 2", "Repasa el mazo de flashcards en voz alta. Relee tus dos escritos y corrige la -s de 3ª persona. Mañana: past simple (hablar del pasado) y otra sesión completa de las 4 destrezas."),
  ],
};

const WEEKS = [{ n: 1, theme: "Tu vida: presente, familia y rutina", days: [DAY1] }];

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
      slug: SLUG, title: "A2 Key — PILOTO (día completo de examen)", subtitle: "Día 1 de muestra: gramática + vocabulario + las 4 destrezas con TODAS sus partes, formato Cambridge.",
      description: "PILOTO para revisar el nuevo estándar de NOVARA: cada día es una clase completa que practica las CUATRO destrezas del examen (Reading, Writing, Listening y Speaking) con TODAS sus partes y el mismo formato que Cambridge, además de gramática de profesor y vocabulario con flashcards. Cuando apruebes este listón, se replica a todos los días y niveles.",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "A2 Key — Piloto (día completo) — NOVARA", seoDescription: "Muestra del nuevo estándar diario de NOVARA para A2 Key: 4 destrezas, formato Cambridge.",
      objectives: { create: [
        "Ver un día completo con las 4 destrezas y todas sus partes.",
        "Comprobar el formato Cambridge de Reading (con texto), Writing, Listening y Speaking.",
        "Confirmar la profundidad de la teoría y los errores típicos del hispanohablante.",
      ].map((text, i) => ({ sortOrder: i, text })) },
    },
  });
  console.warn(`✅ Curso piloto creado: ${course.title}`);

  const createModule = (title, description, sortOrder) => db.module.create({ data: { courseId: course.id, title, description, sortOrder } });

  const m0 = await createModule("Guía del piloto y del examen A2 Key", "Cómo funciona el día a día y la estructura oficial del examen.", 0);
  const guide = await db.lesson.create({ data: { moduleId: m0.id, title: "Cómo funciona este programa y el examen A2 Key", description: "El método diario y la estructura oficial de Cambridge.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: true } });
  {
    let o = 0;
    const gb = [
      TEXT("Este es un PILOTO para fijar el estándar del nuevo NOVARA. Verás un DÍA completo. Cada día practicas las CUATRO destrezas del examen con todas sus partes, con el mismo formato que Cambridge, más gramática y vocabulario."),
      GRAMMAR("El examen A2 Key (KET) — estructura oficial", `Fuente: Cambridge English. Tres pruebas:

READING & WRITING (1 h · 7 partes · 32 preguntas · 50%)
· P1 seis textos cortos (MC) · P2 emparejar 7↔3 textos · P3 texto largo (5 MC) · P4 huecos con opciones (6) · P5 open cloze una palabra (6) · P6 email/nota 25+ · P7 relato 35+ con 3 imágenes.

LISTENING (30 min · 5 partes · 25 preguntas · 25%) — cada audio se oye DOS veces:
· P1 cinco conversaciones · P2 completar notas · P3 conversación (MC) · P4 cinco monólogos · P5 emparejar.

SPEAKING (8–10 min · 2 partes · 25%) — con otro candidato y dos examinadores:
· P1 preguntas personales · P2 gustos y razones.`),
      INFO("Cómo progresa el programa", "5 días por semana (Lun–Vie), ~1 h–1 h y media por día. No se puede saltar: cada día se desbloquea al terminar el anterior. Cada 4 semanas, un simulacro; al final, un simulacro completo cronometrado que estima tu nota en la Cambridge Scale (aprobado A2 = 120)."),
      WARN("Preparado en NOVARA ≠ certificado por Cambridge", "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English."),
    ];
    for (const b of gb) await db.lessonBlock.create({ data: { lessonId: guide.id, type: b.type, order: o++, title: b.title ?? null, content: b.content ?? null, data: b.data ?? undefined } });
  }

  let sortOrder = 1;
  let audioSeq = 0;
  for (const w of WEEKS) {
    const m = await createModule(`Semana ${w.n} — ${w.theme}`, `Días de clase completos (Lun–Vie): las 4 destrezas cada día.`, sortOrder++);
    let dayIndex = 0;
    for (const day of w.days) {
      const lesson = await db.lesson.create({ data: { moduleId: m.id, title: day.title, description: day.description, sortOrder: dayIndex, contentTypeId: contentTexto.id, isPreview: false } });
      let order = 0;
      for (const item of day.items) {
        if (item.deck) {
          const d = await db.flashcardDeck.create({ data: { title: item.deck.title, description: "Vocabulario del día", language: "en", authorId: adminUser.id, cards: { create: item.deck.cards.map(([term, translation, example, cat, ipa], i) => ({ sortOrder: i, term, translation, example, category: cat, ipa: ipa ?? null, level: "A2" })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "FLASHCARDS", order: order++, deckId: d.id } });
        } else if (item.exercise) {
          const ex = item.exercise;
          let config = ex.config ?? undefined;
          if (ex.category === "listening" && ex.audioScript) {
            const audio = await generateListeningAudio(ex.audioScript, `piloto-a2-d${dayIndex}-l${audioSeq++}`);
            if (audio) { config = { ...(config ?? {}), audioUrl: audio }; console.warn(`🔊 Audio: ${audio}`); }
            else console.warn("⚠️  Piper no disponible: Listening sin audio.");
          }
          const e = await db.exercise.create({ data: { lessonId: lesson.id, category: ex.category, title: ex.title, instructions: ex.instructions ?? null, sortOrder: 0, config, questions: { create: (ex.questions ?? []).map((q, i) => ({ order: i, kind: q.kind, data: q.data })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXERCISE", order: order++, data: { exerciseId: e.id } } });
        } else {
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: item.type, order: order++, title: item.title ?? null, content: item.content ?? null, data: item.data ?? undefined } });
        }
      }
      if (day.pedagogy) await db.lessonPedagogy.create({ data: { lessonId: lesson.id, ...day.pedagogy } });
      dayIndex++;
    }
  }

  const counts = {
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    bloques: await db.lessonBlock.count({ where: { lesson: { module: { courseId: course.id } } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    reading: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "reading" } }),
    writing: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "writing" } }),
    listening: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "listening" } }),
    speaking: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "speaking" } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    flashcards: await db.flashcard.count({ where: { deck: { title: { startsWith: "A2 Key Piloto" } } } }),
  };
  console.warn("✅ Piloto A2 Key (Día 1 completo):", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error piloto A2:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
