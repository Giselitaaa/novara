/**
 * A2 Key · Semana 1 — "Tu vida: presente, familia, rutina y casa".
 * Gramática: present simple, preguntas, present continuous, there is/are.
 * Cada día practica las 4 destrezas con formato Cambridge.
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, reading, writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD,
  mc, fb,
} from "./_lib.mjs";

// Reading Parte 1: los 6 textos cortos (señales/notas/mensajes) se muestran en
// el RECUADRO DE TEXTO (numerados) y cada pregunta se refiere a uno de ellos —
// así el alumno SIEMPRE tiene el texto delante para leer, como en Cambridge.
const READING_P1 = (title, items) => {
  const text = "Lee estos seis mensajes:\n\n" + items.map((q, i) => `${i + 1}.  ${q.data.prompt}`).join("\n\n");
  const questions = items.map((q, i) => ({ ...q, data: { ...q.data, prompt: `Mensaje ${i + 1}: ¿qué significa?` } }));
  return reading(1, `Reading · Parte 1 — ${title}`, text, "Lee los seis textos cortos del recuadro y elige qué significa cada uno (A/B/C).", questions);
};

const DAY1 = {
  title: "Día 1 — Present simple: habla de tu vida",
  description: "Present simple (rutinas y hechos). Vocabulario de información personal. Las 4 destrezas: Reading P1–P5, Writing P6–P7, Listening P1, Speaking P1–P2.",
  pedagogy: {
    objective: "Usar el present simple (incluida la -s de 3ª persona) para hablar de tu vida, y practicar las 4 destrezas.",
    summary: "Present simple; información personal; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["Olvidar la -s de 3ª persona.", "-s de más en negativas/preguntas.", "'I have 20 years' en vez de 'I am 20'."],
    reviewPrompts: ["¿3ª persona de 'go' y 'study'?", "¿Dónde va 'always' con 'be'?"],
  },
  items: [
    TEXT("👋 Día 1. Hoy: gramática y vocabulario nuevos, y práctica de las CUATRO destrezas del examen (Reading, Writing, Listening y Speaking) con el formato real. Ve sin prisa y repite en voz alta."),
    GRAMMAR("El present simple — forma", `Sirve para hablar de tu vida: rutinas y hechos que no cambian.

AFIRMATIVA: I/you/we/they + verbo base (I work); he/she/it + verbo con -s (she works). La -s de 3ª persona es OBLIGATORIA.
Ortografía: work→works; go→goes, watch→watches (-o,-s,-sh,-ch,-x → +es); study→studies (consonante + y → -ies), pero play→plays.

NEGATIVA: do/does + not + base → I don't smoke · She doesn't smoke (NO 'doesn't smokes').
PREGUNTA: Do/Does + sujeto + base → Do you like coffee? · Does he live here? Respuestas cortas: Yes, I do. / No, she doesn't.`),
    GRAMMAR("Uso y adverbios de frecuencia", `Usos: rutinas (I get up at seven), hechos (Water boils at 100°), horarios (The train leaves at nine).
FRECUENCIA: always · usually · often · sometimes · hardly ever · never.
· Antes del verbo principal: I always have breakfast.
· Después de 'be': He is always late.
'never' ya es negativo: I never eat meat (NO 'I don't never').`),
    WARN("Errores típicos del hispanohablante", "· ❌ She work → ✅ She works.\n· ❌ Does she works? → ✅ Does she work?\n· ❌ I have 20 years → ✅ I am 20.\n· ❌ People is nice → ✅ People are nice."),
    TIP("Pronunciación de la -s final", "· /s/ tras sonido sordo: works, likes.\n· /z/ tras sonido sonoro/vocal: plays, goes, lives.\n· /ɪz/ tras s, z, sh, ch: watches, uses, washes."),
    grammarEx("Gramática — Present simple", "Completa o elige la opción correcta.", [
      fb("She ___ (study) medicine.", ["studies"], "Consonante + y → -ies."),
      fb("He ___ (go) to work by train.", ["goes"], "-o → +es."),
      fb("They ___ (not/eat) meat.", ["don't eat", "do not eat"], "Plural: don't + base."),
      mc("Choose the correct sentence.", ["She doesn't likes tea.", "She doesn't like tea.", "She don't like tea."], 1, "doesn't + base."),
      mc("'He ___ late.' (always + be)", ["always is", "is always", "is late always"], 1, "Con 'be': is always."),
      fb("___ your parents ___ (speak) English?", ["Do", "speak"], "Do … speak?"),
      mc("The -s in 'watches' sounds like…", ["/s/", "/z/", "/ɪz/"], 2, "Tras -ch → /ɪz/."),
    ]),
    GRAMMAR("Vocabulario del día — Información personal", "Estudia el mazo (traducción + pronunciación) y luego haz el ejercicio."),
    deck("A2 Key S1D1 — Información personal", [
      ["surname", "apellido", "Her surname is Ortega.", "sustantivo", "ˈsɜːneɪm"],
      ["date of birth", "fecha de nacimiento", "My date of birth is the 3rd of May.", "colocación", "deɪt əv ˈbɜːθ"],
      ["nationality", "nacionalidad", "Her nationality is Spanish.", "sustantivo", "ˌnæʃəˈnæləti"],
      ["occupation", "ocupación / profesión", "His occupation is teacher.", "sustantivo", "ˌɒkjuˈpeɪʃn"],
      ["single", "soltero/a", "I'm single.", "adjetivo", "ˈsɪŋɡl"],
      ["married", "casado/a", "She is married.", "adjetivo", "ˈmærid"],
      ["retired", "jubilado/a", "My grandad is retired.", "adjetivo", "rɪˈtaɪəd"],
      ["neighbour", "vecino/a", "My neighbour is friendly.", "sustantivo", "ˈneɪbə"],
      ["address", "dirección", "What's your address?", "sustantivo", "əˈdres"],
      ["phone number", "número de teléfono", "Give me your phone number.", "colocación", "ˈfəʊn ˌnʌmbə"],
    ]),
    vocabEx("Vocabulario — Información personal", "Elige la opción correcta.", [
      mc("Your family name is your ___.", ["surname", "occupation", "nationality"], 0, "surname."),
      mc("The day you were born is your ___.", ["date of birth", "address", "age"], 0, "date of birth."),
      mc("A person who is not married is ___.", ["married", "single", "retired"], 1, "single."),
      mc("Your job is your ___.", ["occupation", "surname", "address"], 0, "occupation."),
      mc("A person who lives near you is your ___.", ["neighbour", "cousin", "twin"], 0, "neighbour."),
      mc("If you are from Italy, your ___ is Italian.", ["address", "nationality", "surname"], 1, "nationality."),
    ]),

    READING_HEAD,
    READING_P1("Señales y mensajes", [
      mc("Shop window: 'SALE — everything half price this week only.'", ["Prices are lower only this week.", "The shop is closed this week.", "Only half the shop is open."], 0, "'half price this week only'."),
      mc("Text: 'Running late — start the meeting without me. Sam.'", ["Sam wants them to wait.", "Sam says begin before he arrives.", "Sam cancelled it."], 1, "'start without me'."),
      mc("Library notice: 'Please return books within three weeks.'", ["Keep books for a month.", "Give books back in three weeks or less.", "The library is closed."], 1, "'within three weeks'."),
      mc("Fridge note: 'Milk finished — buy some on your way home. Mum.'", ["Mum bought milk.", "Mum wants you to buy milk.", "There is lots of milk."], 1, "'buy some'."),
      mc("Station sign: 'Tickets must be shown on the train.'", ["Show your ticket on the train.", "Tickets are free.", "You can't buy tickets."], 0, "'must be shown on the train'."),
      mc("Email subject: 'Your order has been sent and arrives Friday.'", ["Ready to collect.", "It will come on Friday.", "It was cancelled."], 1, "'arrives Friday'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y lugares", "THREE PLACES IN TOWN\n\nA) Green Park Café — a quiet place with very good coffee, free wifi and big tables. Open until 8 pm. Perfect for studying or reading.\n\nB) City Sports Centre — a swimming pool and a gym. Opens early (7 am). Special low prices for students.\n\nC) Sunny Beach Restaurant — fresh fish and pizza, tables outside near the sea. Great for families with young children.", "Lee lo que quiere cada persona y elige el lugar ideal (A/B/C). Un lugar puede servir a más de una persona.", [
      mc("Marta wants a calm place to study with her laptop and a coffee.", ["A", "B", "C"], 0, "Café: quiet, coffee, wifi."),
      mc("Daniel is a student who wants to swim early before class.", ["A", "B", "C"], 1, "Sports Centre: pool, early, student prices."),
      mc("The López family want lunch outside with their two small kids.", ["A", "B", "C"], 2, "Restaurant: outside, families."),
      mc("Lucía wants a cheap gym.", ["A", "B", "C"], 1, "B: gym, cheap for students."),
      mc("Tom wants to read quietly in the evening.", ["A", "B", "C"], 0, "A: quiet, open until 8 pm."),
      mc("A couple want to eat fresh fish by the sea.", ["A", "B", "C"], 2, "C: fresh fish, near the sea."),
      mc("A study group wants a big table and wifi.", ["A", "B", "C"], 0, "A: big tables, wifi."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY LIFE IN A SMALL TOWN\n\nMy name is Diego and I live in a small town near Valencia. From Monday to Friday I work in a bookshop in the town centre. I usually start at nine o'clock and finish at half past five. I love my job because I meet interesting people, and I can read during my breaks.\n\nIn the evenings, I often cook dinner for my family. My sister, Carmen, lives with me. She is a nurse and she works at night, so we don't see each other much during the week. At weekends, we always visit our parents, who live in the mountains. On Sundays we have a big lunch together and go for a walk.\n\nI don't like big cities. Life in my town is quiet, and I feel happy here.", "Lee el texto y responde (A/B/C).", [
      mc("Where does Diego work?", ["In a restaurant.", "In a bookshop.", "In a hospital."], 1, "'I work in a bookshop'."),
      mc("Why does he like his job?", ["It pays a lot.", "He meets people and can read.", "It is near his home."], 1, "'I meet interesting people, and I can read'."),
      mc("What is Carmen's job?", ["Teacher.", "Nurse.", "Cook."], 1, "'She is a nurse'."),
      mc("Why don't Diego and Carmen see each other much?", ["She lives elsewhere.", "She works at night.", "She is travelling."], 1, "'she works at night'."),
      mc("What does Diego think about big cities?", ["He loves them.", "He doesn't like them.", "He wants to move to one."], 1, "'I don't like big cities'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Emma (1)___ up at seven every morning. She (2)___ a shower and (3)___ breakfast. Then she (4)___ to work by bus, because she (5)___ in an office in the city. In the evening, she (6)___ out with her friends.", "Elige la palabra correcta (A/B/C) para cada hueco.", [
      mc("Hueco 1", ["wakes", "makes", "takes"], 0, "'wake up' → wakes up."),
      mc("Hueco 2", ["makes", "has", "does"], 1, "'have a shower' → has."),
      mc("Hueco 3", ["has", "goes", "plays"], 0, "'have breakfast' → has."),
      mc("Hueco 4", ["goes", "gets", "does"], 0, "'go to work' → goes."),
      mc("Hueco 5", ["lives", "works", "stays"], 1, "'works in an office'."),
      mc("Hueco 6", ["hangs", "stays", "gets"], 0, "'hang out' → hangs out."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Marta,\nI'm writing (1)___ tell you about my new routine. From Monday to Friday I get (2)___ at seven. I usually have breakfast (3)___ my sister — she's really funny! I don't like coffee, (4)___ I drink tea. At the moment I (5)___ studying for an exam, so I don't have much free time. What (6)___ you do after work these days?\nWrite soon!\nLucía", "Escribe UNA sola palabra en cada hueco (gramática: auxiliares, preposiciones, conectores).", [
      fb("Hueco 1", ["to"], "'writing to tell'."),
      fb("Hueco 2", ["up"], "'get up'."),
      fb("Hueco 3", ["with"], "'have breakfast with'."),
      fb("Hueco 4", ["so"], "consecuencia → so."),
      fb("Hueco 5", ["am", "'m"], "'at the moment' → am studying."),
      fb("Hueco 6", ["do"], "What do you do?"),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Un email a tu amigo/a", "Tu amigo/a inglés/a Alex quiere quedar este fin de semana. Escríbele un email (25 palabras o más) con estos 3 puntos:\n· di qué te gustaría hacer,\n· propón un día,\n· pregúntale a qué hora quedáis.\nEmpieza por 'Hi Alex,' y firma con tu nombre.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) que cuente estas TRES imágenes:\n1) Una chica prepara una mochila en su habitación por la mañana.\n2) La chica sube a un tren con la mochila.\n3) La chica llega a la playa y sonríe.\nUsa conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Are your keys on the kitchen table? Man: No, I've looked there. Woman: What about your coat pocket? Man: Ah yes, here they are, in my coat. Two. Woman: Does the train to Oxford leave at half past nine? Man: It used to, but now it leaves at nine forty-five. Three. Man: Shall we have pizza for lunch? Woman: We had pizza yesterday. Let's make a salad. Man: Good idea. Four. Woman: Do you walk to school, Emma? Girl: I used to, but now it's too far, so I take the bus. Five. Man: Do I need my umbrella today? Woman: No, it's not raining, but it's very windy.", [
      mc("1. Where are the man's keys?", ["On the kitchen table.", "In his coat pocket.", "He can't find them."], 1, "'here they are, in my coat'."),
      mc("2. What time does the train leave now?", ["Half past nine.", "A quarter to ten (9:45).", "Nine o'clock."], 1, "'now it leaves at nine forty-five'."),
      mc("3. What will they have for lunch?", ["Pizza.", "A salad.", "Nothing."], 1, "'Let's make a salad'."),
      mc("4. How does Emma go to school now?", ["On foot.", "By bus.", "By bike."], 1, "'now… I take the bus'."),
      mc("5. What's the weather like today?", ["Rainy.", "Windy.", "Sunny."], 1, "'it's very windy'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales", "Pulsa «Iniciar conversación» y responde por el micrófono. Al terminar, «Finalizar y evaluar».", "Parte 1 del A2 Key: el examinador te hace preguntas personales sencillas — tu nombre, de dónde eres, tu familia, tus estudios o trabajo y tu rutina diaria", "responder con frases completas y un detalle, usando present simple y adverbios de frecuencia", "My name is, I live in, I've got, I usually, my family"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Responde por el micrófono dando siempre una razón con 'because'.", "Parte 2 del A2 Key: hablas de tus gustos y das razones — comidas, deportes y tiempo libre; el examinador pregunta qué te gusta y por qué", "expresar gustos (I like/I love/I prefer) y dar razones (because…)", "I like, I love, I prefer, because, my favourite"),

    SUMMARY("Resumen del Día 1", [
      "Present simple: 3ª persona con -s; negativa/pregunta con do/does + base.",
      "Has practicado las 4 destrezas con el formato real del A2 Key.",
      "Reading 5 partes (con textos), Writing email + relato, Listening P1, Speaking P1–P2.",
    ]),
    INFO("Tarea para el Día 2", "Repasa el mazo en voz alta. Escribe 3 frases sobre tu rutina con always/usually/never. Mañana: preguntas y la familia."),
  ],
};

const DAY2 = {
  title: "Día 2 — Preguntas y respuestas · La familia",
  description: "Preguntas (Wh- y de sí/no), respuestas cortas y preguntas de sujeto. Vocabulario de familia. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Formular preguntas correctas y hablar de la familia; practicar las 4 destrezas.",
    summary: "Question words; orden; subject questions; familia; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["Omitir do/does ('Where you live?').", "'How many years do you have?'", "Orden incorrecto."],
    reviewPrompts: ["¿Cuándo NO se usa do/does?", "¿Cómo preguntas la edad?"],
  },
  items: [
    TEXT("🔁 Repaso: di la 3ª persona de go, study, watch, play (goes, studies, watches, plays). Hoy aprendes a PREGUNTAR — clave para el Speaking y la conversación."),
    GRAMMAR("Preguntas en present simple", `SÍ/NO: Do/Does + sujeto + base → Do you work here? · Does she like tea?
CON PARTÍCULA (Wh-): Question word + do/does + sujeto + base → Where do you live? · What does this word mean?
PARTÍCULAS: what, where, when, who, why, how, how old, how often, how many, how much.
· How old are you? (edad → con 'be', no 'have').
· How often do you go to the gym? — Twice a week.
RESPUESTAS CORTAS: Yes, I do. / No, I don't. · Yes, she does. / No, she doesn't.`),
    GRAMMAR("Preguntas de sujeto (sin do/does)", `Si preguntas por el SUJETO (quién hace la acción), NO se usa do/does y el verbo mantiene la -s:
· Who lives here? (NO 'Who does live here?') · What happens next?
Compara: Who do you love? (objeto → con do) / Who loves you? (sujeto → sin do, con -s).`),
    WARN("Errores típicos del hispanohablante", "· ❌ Where you live? → ✅ Where do you live?\n· ❌ How many years do you have? → ✅ How old are you?\n· ❌ What means this word? → ✅ What does this word mean?"),
    grammarEx("Gramática — Preguntas", "Ordena o completa la pregunta.", [
      fb("Order: (you / where / do / live) → ___?", ["where do you live"], "Where do you live?"),
      fb("Order: (does / what / mean / this word) → ___?", ["what does this word mean"], "What does this word mean?"),
      mc("Ask about age:", ["How many years do you have?", "How old are you?", "What age you have?"], 1, "How old are you?"),
      fb("___ often do you play sport? — Twice a week.", ["How"], "How often."),
      mc("Subject question:", ["Who does live here?", "Who lives here?", "Who do lives here?"], 1, "Who lives here?"),
      fb("Short answer: 'Does she work here?' — No, she ___.", ["doesn't", "does not"], "No, she doesn't."),
      fb("___ do you study English? — Because I want a good job.", ["Why"], "Why."),
    ]),
    GRAMMAR("Vocabulario del día — La familia", "Aprende a describir tu familia. Escucha la pronunciación de cada palabra."),
    deck("A2 Key S1D2 — La familia", [
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
    vocabEx("Vocabulario — La familia", "Elige la opción correcta.", [
      mc("Your mother and father are your ___.", ["siblings", "parents", "cousins"], 1, "parents."),
      mc("Your brothers and sisters are your ___.", ["siblings", "grandparents", "nieces"], 0, "siblings."),
      mc("Your uncle's daughter is your ___.", ["niece", "cousin", "aunt"], 1, "cousin."),
      mc("A person with no brothers or sisters is an ___.", ["only child", "uncle", "nephew"], 0, "only child."),
      mc("Your sister's son is your ___.", ["nephew", "niece", "cousin"], 0, "nephew."),
      mc("'I ___ my brother' (buena relación).", ["get on well with", "look like", "get up"], 0, "get on well with."),
    ]),

    READING_HEAD,
    READING_P1("Mensajes de la familia y amigos", [
      mc("Text from Mum: 'Dinner is ready at 8. Don't be late!'", ["Dinner is at eight.", "There is no dinner.", "Dinner is late."], 0, "'ready at 8'."),
      mc("Note: 'Grandma called. Please phone her back. Dad.'", ["Grandma is here.", "Call Grandma.", "Dad phoned Grandma."], 1, "'phone her back'."),
      mc("Message: 'Party at my cousin's house on Saturday. Come!'", ["A party on Saturday.", "No party.", "A party today."], 0, "'on Saturday'."),
      mc("Card: 'Happy birthday! From your loving family.'", ["Someone's birthday.", "A wedding.", "New Year."], 0, "'Happy birthday'."),
      mc("Text: 'Can you pick up your brother from school at 4?'", ["Take your brother to school.", "Collect your brother at 4.", "Your brother is ill."], 1, "'pick up… at 4'."),
      mc("Note: 'Uncle Tom is staying with us this week.'", ["Uncle Tom is visiting.", "Uncle Tom left.", "Uncle Tom is ill."], 0, "'staying with us'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y actividades", "THREE WEEKEND ACTIVITIES\n\nA) Family Cinema Morning — cartoons for children, cheap tickets before noon, free popcorn for kids.\n\nB) Mountain Walk Club — a long walk in the hills, for adults who like nature and exercise. Meet at 8 am.\n\nC) City Museum — art and history, quiet rooms, free entry on Sundays, good for teenagers doing school projects.", "Empareja cada persona con la actividad ideal (A/B/C).", [
      mc("The García family want a cheap morning out with their small children.", ["A", "B", "C"], 0, "Cinema: children, cheap before noon."),
      mc("Pedro loves nature and long walks.", ["A", "B", "C"], 1, "Mountain Walk Club."),
      mc("A teenager needs information for a history project.", ["A", "B", "C"], 2, "Museum: history, projects."),
      mc("Someone who wants free popcorn for their kids.", ["A", "B", "C"], 0, "A: free popcorn."),
      mc("An adult who wants exercise on Saturday morning.", ["A", "B", "C"], 1, "B: walk, 8 am."),
      mc("A student who wants a quiet place and free entry on Sunday.", ["A", "B", "C"], 2, "C: quiet, free Sundays."),
      mc("Parents with young kids who don't want to spend much.", ["A", "B", "C"], 0, "A: cheap, kids."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY BIG FAMILY\n\nI'm Sofía and I come from a big family. I have three siblings: two brothers and one sister. My older brother, Marco, is a chef in a hotel, and my younger brother, Luis, is still at school. My sister, Elena, is a nurse like our mother.\n\nWe all live in the same city, but not in the same house. On Sundays we meet at my grandparents' house for lunch. My grandmother cooks a huge meal, and everyone helps. After lunch, the children play in the garden and the adults talk for hours.\n\nI get on well with all my family, but I'm closest to Elena. We call each other every day and share all our news.", "Lee el texto y responde (A/B/C).", [
      mc("How many siblings does Sofía have?", ["Two.", "Three.", "Four."], 1, "'two brothers and one sister'."),
      mc("What does Marco do?", ["He is a chef.", "He is a nurse.", "He is a student."], 0, "'Marco is a chef'."),
      mc("Who works in the same job as their mother?", ["Marco.", "Luis.", "Elena."], 2, "'a nurse like our mother'."),
      mc("Where does the family meet on Sundays?", ["At a restaurant.", "At the grandparents' house.", "At Sofía's house."], 1, "'at my grandparents' house'."),
      mc("Who is Sofía closest to?", ["Marco.", "Luis.", "Elena."], 2, "'I'm closest to Elena'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My grandmother is 80 years old, but she is very (1)___. Every morning she (2)___ for a walk in the park. She (3)___ three children and seven grandchildren. She loves (4)___ big meals for the family. She always (5)___ us funny stories about the past. I really (6)___ on well with her.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["active", "boring", "quiet"], 0, "'very active'."),
      mc("Hueco 2", ["goes", "makes", "takes"], 0, "'goes for a walk'."),
      mc("Hueco 3", ["has", "is", "does"], 0, "'has three children'."),
      mc("Hueco 4", ["cooking", "cook", "cooks"], 0, "'loves cooking' (verbo -ing)."),
      mc("Hueco 5", ["tells", "says", "speaks"], 0, "'tells us stories'."),
      mc("Hueco 6", ["get", "make", "do"], 0, "'get on well with'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ben,\nThank you (1)___ your email! You asked about my family. I live (2)___ my parents and my little sister. My father is a teacher (3)___ my mother works in a hospital. My sister (4)___ only six years old. We (5)___ get on well, but sometimes she takes my things! Do you (6)___ any brothers or sisters?\nBest wishes,\nCarla", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["for"], "'Thank you for'."),
      fb("Hueco 2", ["with"], "'live with'."),
      fb("Hueco 3", ["and"], "unión → and."),
      fb("Hueco 4", ["is"], "'is only six'."),
      fb("Hueco 5", ["usually", "always", "normally", "generally"], "adverbio de frecuencia."),
      fb("Hueco 6", ["have"], "'Do you have…?'"),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Presenta a tu familia por email", "Tu amigo/a inglés/a quiere saber sobre tu familia. Escríbele un email (25 palabras o más) con estos 3 puntos:\n· cuántos hermanos tienes,\n· qué hacen tus padres,\n· con quién te llevas mejor y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia prepara comida en la cocina.\n2) Salen de casa con una cesta de picnic.\n3) Comen juntos en el parque bajo un árbol.\nUsa conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o un número en cada hueco.", "This is Part Two. You will hear a woman leaving a message about a family birthday party. Hi, it's Sarah. I'm calling about Grandma's birthday party. The party is on Sunday the twelfth of March. It starts at one o'clock, at the Rose Garden Restaurant. There will be twenty people. Please bring a dessert, and don't forget the camera. My number is oh-seven-nine, double-two, five, six, seven.", [
      fb("Party day: ___", ["Sunday"], "'on Sunday'."),
      fb("Date: the ___ of March", ["twelfth", "12th", "12"], "'the twelfth of March'."),
      fb("It starts at ___ o'clock.", ["one", "1"], "'at one o'clock'."),
      fb("Place: the Rose ___ Restaurant", ["Garden"], "'Rose Garden Restaurant'."),
      fb("Please bring a ___.", ["dessert"], "'bring a dessert'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas personales sobre ti y tu familia — dónde vives, cuántos hermanos tienes, qué hace tu familia", "hablar de uno mismo y su familia con present simple", "I live in, I've got, my parents, my sister, we usually"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre actividades en familia y tiempo libre; el examinador pregunta qué te gusta hacer y por qué", "expresar gustos y dar razones", "I like, I love, because, my favourite, I prefer"),

    SUMMARY("Resumen del Día 2", [
      "Preguntas: QW + do/does + sujeto + base; edad con 'be'; preguntas de sujeto sin do.",
      "Vocabulario de familia.",
      "Practicadas las 4 destrezas; Listening Parte 2 (completar notas).",
    ]),
    INFO("Tarea para el Día 3", "Escribe 5 preguntas para conocer a alguien nuevo. Repasa las flashcards. Mañana: acciones de ahora (present continuous) y la rutina."),
  ],
};

const DAY3 = {
  title: "Día 3 — Present continuous vs. simple · Rutina diaria",
  description: "Acciones de ahora vs. rutinas, verbos de estado, ortografía -ing. Vocabulario de rutina. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Distinguir present continuous (ahora) de present simple (rutina) y usarlos bien.",
    summary: "Present continuous; verbos de estado; rutina; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'I am agree'.", "Continuous con verbos de estado.", "Mezclar 'every day' con continuous."],
    reviewPrompts: ["¿Qué palabras señalan el continuous?", "3 verbos de estado que no van en -ing."],
  },
  items: [
    TEXT("🔁 Repaso: pregunta la hora a la que empieza una película (What time does the film start?). Hoy distingues lo que haces AHORA de lo que haces SIEMPRE."),
    GRAMMAR("Present continuous — forma y uso", `FORMA: am/is/are + verbo-ing → I'm working · She's studying · Are you working?
ORTOGRAFÍA -ing: play→playing; make→making (quita -e); run→running (dobla consonante); lie→lying.
USO: acciones EN ESTE MOMENTO o TEMPORALES → Look! It's raining. · I'm reading a great book this week.
Señales: now, at the moment, today, this week, Look!, Listen!`),
    GRAMMAR("Simple vs. continuous · verbos de estado", `Simple = rutina/hecho (I play tennis on Sundays). Continuous = ahora/temporal (I'm playing now).
VERBOS DE ESTADO (no acción) NO van en continuous: like, love, hate, want, need, know, understand, prefer, believe.
· ✅ I want a coffee (NO 'I am wanting'). · ✅ She knows the answer (NO 'is knowing').`),
    WARN("Errores típicos del hispanohablante", "· ❌ I am agree → ✅ I agree.\n· ❌ I am wanting / knowing → ✅ I want / I know.\n· ❌ I'm going to the gym every day → ✅ I go to the gym every day (rutina).\n· ❌ She's work now → ✅ She's working now."),
    grammarEx("Gramática — Simple vs. continuous", "Elige o escribe la forma correcta.", [
      fb("Listen! The baby ___ (cry).", ["is crying", "'s crying"], "'Listen!' → continuous."),
      fb("I ___ (go) to the gym every Monday.", ["go"], "Rutina → simple."),
      fb("-ing form of 'run': ___", ["running"], "Se dobla: running."),
      fb("-ing form of 'make': ___", ["making"], "Quita -e: making."),
      mc("Choose:", ["I am wanting a sandwich.", "I want a sandwich.", "I wants a sandwich."], 1, "want = estado → simple."),
      mc("Choose:", ["I am agree with you.", "I agree with you.", "I agreeing with you."], 1, "I agree."),
      fb("She usually ___ (walk) to work, but today she ___ (take) the bus.", ["walks", "is taking"], "rutina / ahora."),
    ]),
    GRAMMAR("Vocabulario del día — Rutina diaria", "Verbos y expresiones para contar tu día (muchos son phrasal verbs)."),
    deck("A2 Key S1D3 — Rutina diaria", [
      ["wake up", "despertarse", "I wake up at seven.", "phrasal verb", "weɪk ˈʌp"],
      ["get up", "levantarse", "I get up ten minutes later.", "phrasal verb", "ɡet ˈʌp"],
      ["get dressed", "vestirse", "She gets dressed quickly.", "colocación", "ɡet ˈdrest"],
      ["have a shower", "ducharse", "I have a shower in the morning.", "colocación", "hæv ə ˈʃaʊə"],
      ["brush your teeth", "cepillarse los dientes", "Brush your teeth twice a day.", "colocación", "brʌʃ jɔː ˈtiːθ"],
      ["have breakfast", "desayunar", "We have breakfast at eight.", "colocación", "hæv ˈbrekfəst"],
      ["do homework", "hacer los deberes", "I do my homework after school.", "colocación", "duː ˈhəʊmwɜːk"],
      ["go to bed", "irse a la cama", "The children go to bed at nine.", "colocación", "ɡəʊ tə ˈbed"],
      ["hang out", "pasar el rato", "I hang out with friends.", "phrasal verb", "hæŋ ˈaʊt"],
      ["free time", "tiempo libre", "In my free time I read.", "colocación", "friː ˈtaɪm"],
    ]),
    vocabEx("Vocabulario — Rutina", "Elige la opción correcta.", [
      mc("To stop sleeping in the morning is to ___.", ["go to bed", "wake up", "hang out"], 1, "wake up."),
      mc("You ___ before leaving home.", ["get dressed", "go to bed", "hang out"], 0, "get dressed."),
      mc("Students ___ after school.", ["have a shower", "do homework", "wake up"], 1, "do homework."),
      mc("To relax with friends is to ___.", ["hang out", "get up", "brush your teeth"], 0, "hang out."),
      mc("You should ___ twice a day.", ["brush your teeth", "go to bed", "hang out"], 0, "brush your teeth."),
      mc("When you are not working, it's your ___.", ["homework", "free time", "shower"], 1, "free time."),
    ]),

    READING_HEAD,
    READING_P1("Avisos y rutina", [
      mc("Gym sign: 'Open 6 am – 10 pm every day.'", ["Open all night.", "Open early morning to late evening.", "Closed at weekends."], 1, "'6 am – 10 pm'."),
      mc("Note: 'Please do the washing-up before you go to bed.'", ["Wash the dishes tonight.", "Don't wash the dishes.", "Go to bed now."], 0, "'do the washing-up before bed'."),
      mc("App message: 'Time to get up! Your alarm is at 7:00.'", ["It's bedtime.", "It's time to wake up.", "The alarm is off."], 1, "'Time to get up'."),
      mc("Poster: 'Morning yoga class — bring your own mat.'", ["Yoga in the evening.", "Bring a mat to yoga.", "Mats are free."], 1, "'bring your own mat'."),
      mc("Note on door: 'Back in 10 minutes.'", ["Closed forever.", "Open again soon.", "Open all day."], 1, "'Back in 10 minutes'."),
      mc("Text: 'Don't forget your homework for tomorrow!'", ["Homework is done.", "Remember your homework.", "No homework."], 1, "'Don't forget your homework'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y clases", "THREE EVENING CLASSES\n\nA) Cooking for Beginners — Mondays, 7 pm. Learn easy meals. No experience needed.\n\nB) Spanish Conversation — Wednesdays, 6 pm. For people who already speak a little Spanish.\n\nC) Yoga and Relaxation — every evening, 8 pm. Perfect after a busy day at work.", "Empareja cada persona con la clase ideal (A/B/C).", [
      mc("Ana can't cook at all and wants to learn.", ["A", "B", "C"], 0, "Cooking for Beginners."),
      mc("Tom feels stressed after work and wants to relax.", ["A", "B", "C"], 2, "Yoga."),
      mc("María knows some Spanish and wants to practise speaking.", ["A", "B", "C"], 1, "Spanish Conversation."),
      mc("Someone who is free only on Monday evenings.", ["A", "B", "C"], 0, "A: Mondays."),
      mc("Someone who wants a class every day.", ["A", "B", "C"], 2, "C: every evening."),
      mc("A beginner cook with no experience.", ["A", "B", "C"], 0, "A: no experience needed."),
      mc("Someone free on Wednesday at 6 pm.", ["A", "B", "C"], 1, "B: Wednesdays 6 pm."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A BUSY DAY\n\nMy name is Ahmed and I'm a bus driver. My days are very busy. I wake up at half past four in the morning — very early! I have a quick shower and a big breakfast, because I don't have time to eat again until lunch.\n\nI start work at six o'clock. I drive the same route through the city all morning. At one o'clock I stop for lunch in a small café near the station. In the afternoon, I drive again until five.\n\nWhen I get home, I'm usually tired, so I relax on the sofa. But twice a week I go to the gym in the evening, because I want to stay healthy. At the weekend I don't work, and I spend all my free time with my children.", "Lee el texto y responde (A/B/C).", [
      mc("What is Ahmed's job?", ["A cook.", "A bus driver.", "A gym teacher."], 1, "'I'm a bus driver'."),
      mc("Why does he have a big breakfast?", ["He loves food.", "He won't eat again until lunch.", "His wife cooks it."], 1, "'I don't have time to eat again until lunch'."),
      mc("Where does he have lunch?", ["At home.", "In a café near the station.", "On the bus."], 1, "'a small café near the station'."),
      mc("How often does he go to the gym?", ["Every day.", "Twice a week.", "Never."], 1, "'twice a week'."),
      mc("What does he do at the weekend?", ["He works.", "He spends time with his children.", "He drives the bus."], 1, "'with my children'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Every morning I (1)___ up at seven. First, I have a (2)___ and get dressed. Then I have (3)___ with my family. I (4)___ my homework in the afternoon, and in the evening I (5)___ out with my friends or watch TV. I always go to (6)___ before eleven.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["wake", "make", "take"], 0, "'wake up'."),
      mc("Hueco 2", ["shower", "breakfast", "walk"], 0, "'have a shower'."),
      mc("Hueco 3", ["dinner", "breakfast", "lunch"], 1, "morning → breakfast."),
      mc("Hueco 4", ["make", "do", "play"], 1, "'do my homework'."),
      mc("Hueco 5", ["hang", "get", "take"], 0, "'hang out'."),
      mc("Hueco 6", ["bed", "sleep", "night"], 0, "'go to bed'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Sam,\nHow are you? I'm writing to tell you (1)___ my new routine at university. From Monday (2)___ Friday I get up early and go to my classes. At the moment I (3)___ studying a lot because I have exams soon. In the evenings I usually cook dinner (4)___ my flatmates. We (5)___ get on well. What (6)___ you doing these days?\nSpeak soon,\nOmar", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["about"], "'tell you about'."),
      fb("Hueco 2", ["to"], "'from Monday to Friday'."),
      fb("Hueco 3", ["am", "'m"], "'at the moment' → am studying."),
      fb("Hueco 4", ["for", "with"], "cook dinner for/with."),
      fb("Hueco 5", ["usually", "always", "normally", "generally", "really"], "adverbio."),
      fb("Hueco 6", ["are"], "'What are you doing?'"),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta tu rutina", "Tu amigo/a inglés/a quiere saber cómo es un día normal para ti. Escríbele un email (25 palabras o más) con:\n· a qué hora te levantas,\n· qué haces por la mañana,\n· qué haces en tu tiempo libre.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Un chico se despierta tarde y mira el reloj asustado.\n2) Corre a la parada del autobús.\n3) Llega justo a tiempo y sonríe aliviado.\nUsa el pasado o el presente y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigos y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Jack and Mia, talking about their weekend. Jack: Hi Mia, what did you do at the weekend? Mia: On Saturday I went to the cinema with my brother. We saw a comedy — it was really funny. Jack: Nice! And on Sunday? Mia: On Sunday it rained all day, so I stayed at home and read a book. What about you? Jack: I played football on Saturday morning, and in the afternoon I visited my grandparents. On Sunday I studied for my English exam. Mia: Good luck! When is it? Jack: Next Thursday. I'm a bit nervous, but I'm ready.", [
      mc("What did Mia do on Saturday?", ["She went to the cinema.", "She played football.", "She read a book."], 0, "'I went to the cinema'."),
      mc("Why did Mia stay home on Sunday?", ["She was ill.", "It rained.", "She had homework."], 1, "'it rained all day'."),
      mc("What did Jack do on Saturday afternoon?", ["Played football.", "Visited his grandparents.", "Studied."], 1, "'visited my grandparents'."),
      mc("What is Jack doing next Thursday?", ["Playing football.", "Taking an English exam.", "Going to the cinema."], 1, "'my English exam… next Thursday'."),
      mc("How does Jack feel about the exam?", ["Very relaxed.", "A bit nervous but ready.", "He doesn't care."], 1, "'a bit nervous, but I'm ready'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (rutina)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre tu rutina diaria — a qué hora te levantas, qué haces por la mañana, qué haces en tu tiempo libre", "describir la rutina con present simple y adverbios de frecuencia", "I get up, I usually, in the morning, in my free time, every day"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre actividades diarias y tiempo libre; el examinador pregunta qué te gusta hacer y por qué", "expresar gustos y dar razones", "I like, I love, because, I prefer, my favourite"),

    SUMMARY("Resumen del Día 3", [
      "Continuous = ahora/temporal (am/is/are + -ing); simple = rutina.",
      "Verbos de estado (want, know, like) no van en -ing.",
      "Practicadas las 4 destrezas; Listening Parte 3 (conversación).",
    ]),
    INFO("Tarea para el Día 4", "Escribe 3 frases con present continuous (ahora) y 3 con present simple (rutina). Mañana: there is/are y tu casa."),
  ],
};

const DAY4 = {
  title: "Día 4 — there is/are, a/an, some/any · La casa",
  description: "Hablar de lo que hay, artículos y cuantificadores, preposiciones de lugar. Vocabulario de la casa. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Describir lugares con there is/are, a/an, some/any y preposiciones; captar la idea principal en audio.",
    summary: "there is/are; a/an; some/any; preposiciones; la casa; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["'There is two rooms'.", "'a apple'.", "'some' en preguntas."],
    reviewPrompts: ["¿'a' o 'an' antes de vocal?", "¿'some' o 'any' en preguntas?"],
  },
  items: [
    TEXT("🔁 Repaso: di qué estás haciendo ahora (I'm …) y qué haces cada día (I …). Hoy describes lugares y tu casa, y practicas Listening de idea principal."),
    GRAMMAR("there is / there are · a/an · some/any", `QUÉ HAY: There is (There's) a sofa. · There are two bedrooms. · There isn't a garden. · Are there any shops?
ARTÍCULOS: a + sonido consonante (a house, a university 'yu'); an + sonido vocal (an apple, an hour 'h muda').
some/any: some en afirmativas (There are some cups); any en negativas y preguntas (There aren't any / Are there any?).
this/that/these/those: this book (aquí), that car (allí).`),
    GRAMMAR("Preposiciones de lugar", `in (dentro), on (sobre), under (debajo), next to (al lado), between (entre dos), behind / in front of (detrás / delante), near / opposite (cerca / enfrente).
· The keys are in the drawer. · The lamp is on the table. · The shop is opposite my flat.`),
    WARN("Errores típicos del hispanohablante", "· ❌ There is two rooms → ✅ There are two rooms.\n· ❌ a apple, a hour → ✅ an apple, an hour.\n· ❌ Are there some shops? → ✅ Are there any shops?\n· ❌ furnitures → ✅ some furniture (incontable)."),
    grammarEx("Gramática — there is/are, a/an, some/any", "Completa con la opción correcta.", [
      fb("___ two bathrooms in my house.", ["There are"], "Plural → There are."),
      fb("Is ___ a garden?", ["there"], "Is there…?"),
      mc("Choose:", ["a apple", "an apple", "the a apple"], 1, "sonido vocal → an apple."),
      mc("Choose:", ["a university", "an university", "an university's"], 0, "'yu' → a university."),
      mc("Negative: 'There ___ any chairs.'", ["isn't", "aren't", "not"], 1, "plural → aren't."),
      mc("Question: 'Are there ___ shops near here?'", ["some", "any", "a"], 1, "preguntas → any."),
      fb("The cat is ___ the bed (debajo).", ["under"], "under."),
    ]),
    GRAMMAR("Vocabulario del día — La casa", "Habitaciones y muebles. Fíjate en 'furniture' (incontable)."),
    deck("A2 Key S1D4 — La casa", [
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
    vocabEx("Vocabulario — La casa", "Elige la opción correcta.", [
      mc("You cook in the ___.", ["bedroom", "kitchen", "bathroom"], 1, "kitchen."),
      mc("You keep clothes in the ___.", ["fridge", "wardrobe", "sofa"], 1, "wardrobe."),
      mc("You keep food cold in the ___.", ["fridge", "stairs", "sofa"], 0, "fridge."),
      mc("You go up and down the ___.", ["stairs", "wardrobe", "flat"], 0, "stairs."),
      mc("Tables and beds are ___.", ["furnitures", "furniture", "a furniture"], 1, "furniture (incontable)."),
      mc("An apartment is a ___ in British English.", ["flat", "stairs", "fridge"], 0, "flat."),
    ]),

    READING_HEAD,
    READING_P1("En casa y en el edificio", [
      mc("Sign in a flat: 'No loud music after 11 pm.'", ["Play music all night.", "Be quiet late at night.", "No music at all."], 1, "'No loud music after 11 pm'."),
      mc("Note: 'The lift is out of order. Please use the stairs.'", ["Use the lift.", "Use the stairs.", "The stairs are closed."], 1, "'use the stairs'."),
      mc("Message: 'Plumber coming at 10 to fix the bathroom.'", ["The kitchen is broken.", "Someone will repair the bathroom.", "No one is coming."], 1, "'fix the bathroom'."),
      mc("Notice: 'Please recycle bottles in the green bin.'", ["Put bottles in the green bin.", "No recycling.", "Bottles are not allowed."], 0, "'recycle… in the green bin'."),
      mc("Note: 'Spare keys are in the kitchen drawer.'", ["No keys.", "Extra keys are in the kitchen.", "Keys are lost."], 1, "'Spare keys… in the kitchen drawer'."),
      mc("Sign: 'Wet floor — be careful.'", ["The floor is dry.", "Take care, the floor is wet.", "Do not enter."], 1, "'Wet floor — be careful'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y casas", "THREE HOMES FOR RENT\n\nA) City Studio — one room, small kitchen, near the station. Perfect for one person. Cheap.\n\nB) Family House — three bedrooms, a big garden, near a school and a park. Quiet area.\n\nC) Beach Flat — two bedrooms, balcony with sea view, five minutes from the beach.", "Empareja cada persona con la casa ideal (A/B/C).", [
      mc("A single student who wants somewhere cheap near the station.", ["A", "B", "C"], 0, "Studio: one person, near station, cheap."),
      mc("A family with three children who need a garden.", ["A", "B", "C"], 1, "Family House: garden, near school."),
      mc("A couple who love the sea and want a balcony.", ["A", "B", "C"], 2, "Beach Flat: sea view, balcony."),
      mc("Someone who wants to live near a school and a park.", ["A", "B", "C"], 1, "B: near school and park."),
      mc("A person who lives alone and wants low rent.", ["A", "B", "C"], 0, "A: one person, cheap."),
      mc("Someone who wants to be five minutes from the beach.", ["A", "B", "C"], 2, "C: five minutes from the beach."),
      mc("A family who wants a quiet area.", ["A", "B", "C"], 1, "B: quiet area."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY NEW FLAT\n\nLast month I moved to a new flat in the city centre. It's small but I love it. There's one bedroom, a bathroom, and an open kitchen next to the living room. There isn't a garden, but there's a big window with a view of the park.\n\nMy favourite room is the living room. There's a comfortable sofa, a small table, and lots of books. In the evening, I sit on the sofa and read for hours. There isn't much furniture, but I don't need a lot.\n\nThe best thing about the flat is the area. There are three cafés and a supermarket on my street, and the metro station is just around the corner. I can walk everywhere.", "Lee el texto y responde (A/B/C).", [
      mc("How many bedrooms are there?", ["One.", "Two.", "Three."], 0, "'There's one bedroom'."),
      mc("What is next to the living room?", ["The bathroom.", "The kitchen.", "A garden."], 1, "'an open kitchen next to the living room'."),
      mc("What is the writer's favourite room?", ["The bedroom.", "The kitchen.", "The living room."], 2, "'My favourite room is the living room'."),
      mc("What does the writer do on the sofa?", ["Watch TV.", "Read.", "Sleep."], 1, "'I sit on the sofa and read'."),
      mc("Why does the writer like the area?", ["It's quiet.", "There are shops and a metro nearby.", "It has a garden."], 1, "'three cafés and a supermarket… metro… around the corner'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "There (1)___ a lovely park near my house. There (2)___ many trees and a small lake. On sunny days, there are (3)___ people having picnics. There isn't (4)___ noise, so it's very relaxing. I often sit (5)___ a bench and read. My dog loves running (6)___ the grass.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["is", "are", "be"], 0, "'There is a lovely park'."),
      mc("Hueco 2", ["is", "are", "has"], 1, "'There are many trees'."),
      mc("Hueco 3", ["some", "any", "a"], 0, "afirmativa → some."),
      mc("Hueco 4", ["some", "any", "a"], 1, "negativa → any."),
      mc("Hueco 5", ["on", "in", "at"], 0, "'on a bench'."),
      mc("Hueco 6", ["on", "under", "between"], 0, "'running on the grass'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Nadia,\nI want to tell you about my new house. There (1)___ three bedrooms and a big kitchen. There isn't (2)___ garden, but there's a balcony. My room is (3)___ the first floor, next (4)___ the bathroom. There (5)___ some lovely shops near the house. Why don't you come and (6)___ it next weekend?\nLove,\nEve", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["are"], "'There are three bedrooms'."),
      fb("Hueco 2", ["a"], "'a garden'."),
      fb("Hueco 3", ["on"], "'on the first floor'."),
      fb("Hueco 4", ["to"], "'next to'."),
      fb("Hueco 5", ["are"], "'There are some shops'."),
      fb("Hueco 6", ["see", "visit"], "'come and see/visit it'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Describe tu casa", "Tu amigo/a inglés/a quiere saber cómo es tu casa. Escríbele un email (25 palabras o más) con:\n· cuántas habitaciones hay,\n· cuál es tu habitación favorita y por qué,\n· qué hay cerca de tu casa.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia llega a una casa nueva con cajas.\n2) Colocan los muebles en el salón.\n3) Cenan felices en su casa nueva.\nUsa conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. My favourite room is the kitchen, because I love cooking big meals for my friends. Two. I take the train to work every day. It takes forty minutes and I listen to music. Three. At the weekend I like painting pictures of the sea. It's very relaxing. Four. I've got a cat called Luna. She sleeps on my bed every night. Five. I usually go for a run in the park before breakfast to feel healthy.", [
      mc("Person 1 is talking about…", ["a room at home", "transport", "a pet"], 0, "'my favourite room is the kitchen'."),
      mc("Person 2 is talking about…", ["a hobby", "transport", "food"], 1, "'I take the train to work'."),
      mc("Person 3 is talking about…", ["a hobby", "a pet", "transport"], 0, "'I like painting'."),
      mc("Person 4 is talking about…", ["a pet", "exercise", "a room"], 0, "'I've got a cat'."),
      mc("Person 5 is talking about…", ["exercise", "food", "transport"], 0, "'I go for a run'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (tu casa)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre dónde vives y tu casa — qué tipo de casa, tu habitación favorita, qué hay cerca", "describir tu casa con there is/are y preposiciones", "I live in, there is, there are, next to, my favourite room"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre lugares y actividades en casa; el examinador pregunta qué te gusta y por qué", "expresar gustos y dar razones", "I like, I love, because, I prefer, at home"),

    SUMMARY("Resumen del Día 4", [
      "there is (sing.) / there are (plural); a/an; some (afirm.) / any (neg. y preg.).",
      "Preposiciones de lugar; 'furniture' es incontable.",
      "Practicadas las 4 destrezas; Listening Parte 4 (idea principal).",
    ]),
    INFO("Tarea para el Día 5", "Describe tu casa en 4–5 frases con there is/are y preposiciones. Repasa TODO el vocabulario de la semana. Mañana: repaso general y mini-simulacro."),
  ],
};

const DAY5 = {
  title: "Día 5 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de la gramática y el vocabulario de la semana y práctica completa. Listening P5 (emparejar). Al final, el simulacro de la semana.",
  pedagogy: {
    objective: "Consolidar lo de la semana y medir el progreso con práctica completa.",
    summary: "Repaso de present simple/continuous, preguntas y there is/are; Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te ha costado más?", "Repásalo antes de la Semana 2."],
  },
  items: [
    TEXT("🎯 Día de repaso. Hoy consolidas la semana y practicas las 4 destrezas. Al final tendrás el mini-simulacro (lo verás como módulo aparte)."),
    GRAMMAR("Repaso de la Semana 1", `1) Present simple: rutinas/hechos; he/she/it con -s; do/does en negativa/pregunta.
2) Preguntas: QW + do/does + sujeto + base; edad con 'be'; preguntas de sujeto sin do.
3) Present continuous: ahora/temporal (am/is/are + -ing); verbos de estado.
4) there is/are + a/an + some/any + preposiciones de lugar.`),
    grammarEx("Repaso mixto de gramática — Semana 1", "Completa o elige (mezcla todo lo de la semana).", [
      fb("My brother ___ (not/like) vegetables.", ["doesn't like", "does not like"], "3ª persona negativa."),
      fb("Order: (you / where / from / are) → ___?", ["where are you from"], "Where are you from?"),
      fb("Right now I ___ (write) an email.", ["am writing", "'m writing"], "ahora → continuous."),
      mc("Choose:", ["There is three chairs.", "There are three chairs.", "There are a chair."], 1, "plural → There are."),
      mc("Choose:", ["How old have you?", "How old are you?", "How many years you have?"], 1, "How old are you?"),
      fb("She ___ (study) every evening, but tonight she ___ (watch) a film.", ["studies", "is watching"], "rutina / ahora."),
      mc("Choose: 'Are there ___ shops near here?'", ["some", "any", "a"], 1, "preguntas → any."),
      fb("Who ___ (live) in that house?", ["lives"], "pregunta de sujeto → lives."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 1", "Repasa los cuatro mazos (información personal, familia, rutina, casa)."),
    vocabEx("Repaso de vocabulario — Semana 1", "Elige la opción correcta.", [
      mc("Your family name:", ["first name", "surname", "nationality"], 1, "surname."),
      mc("Your brothers and sisters:", ["parents", "siblings", "cousins"], 1, "siblings."),
      mc("To get out of bed:", ["get up", "hang out", "go to bed"], 0, "get up."),
      mc("Where you keep cold food:", ["wardrobe", "fridge", "stairs"], 1, "fridge."),
      mc("Not married:", ["retired", "single", "married"], 1, "single."),
      mc("To relax with friends:", ["do homework", "hang out", "get dressed"], 1, "hang out."),
      mc("Tables and beds (uncountable):", ["furniture", "furnitures", "a furniture"], 0, "furniture."),
      mc("Your uncle's daughter:", ["niece", "cousin", "nephew"], 1, "cousin."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Café closed on Mondays.'", ["Open every day.", "Closed on Mondays.", "Open only on Mondays."], 1, "'closed on Mondays'."),
      mc("Text: 'Meeting moved to 3 pm, not 2.'", ["Meeting at 3.", "Meeting at 2.", "No meeting."], 0, "'moved to 3 pm'."),
      mc("Notice: 'Free entry for children under 5.'", ["Children under 5 pay nothing.", "No children allowed.", "Everyone pays."], 0, "'Free entry… under 5'."),
      mc("Message: 'Bring your passport to the exam.'", ["Passport needed.", "No passport.", "Bring a friend."], 0, "'Bring your passport'."),
      mc("Sign: 'Last train at 11:30 pm.'", ["Trains all night.", "The final train is at 11:30.", "No trains."], 1, "'Last train at 11:30'."),
      mc("Note: 'Water the plants twice a week.'", ["Water daily.", "Water two times a week.", "Never water."], 1, "'twice a week'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes", "THREE SUNDAY PLANS\n\nA) Farmers' Market — fresh fruit and vegetables, open 8 am to 1 pm, in the main square.\n\nB) Football Match — the local team plays at 5 pm at the city stadium. Tickets at the door.\n\nC) Art Exhibition — modern paintings, free entry, open all day at the town gallery.", "Empareja cada persona con el plan ideal (A/B/C).", [
      mc("Lucía wants to buy fresh vegetables in the morning.", ["A", "B", "C"], 0, "Market: 8–1."),
      mc("Marco wants to watch his local team.", ["A", "B", "C"], 1, "Football Match."),
      mc("Elena loves modern art and wants free entry.", ["A", "B", "C"], 2, "Art Exhibition."),
      mc("Someone who is free only in the early morning.", ["A", "B", "C"], 0, "A: 8 am–1 pm."),
      mc("A sports fan free in the evening.", ["A", "B", "C"], 1, "B: 5 pm."),
      mc("Someone who doesn't want to pay.", ["A", "B", "C"], 2, "C: free entry."),
      mc("A person who wants fresh fruit.", ["A", "B", "C"], 0, "A: fresh fruit."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A SUNDAY WITH FRIENDS\n\nEvery Sunday, my friends and I do something together. We take turns to choose the activity. Last Sunday it was my turn, so we went for a walk in the mountains. It was a sunny day and the views were beautiful.\n\nWe started early, at eight o'clock, because the walk was long. We stopped for a picnic near a small lake at midday. My friend Laura brought sandwiches, and I made a big salad. After lunch, we sat by the water and talked.\n\nIn the afternoon, we were tired but happy. We got home at six and I went straight to bed! Next Sunday it's Laura's turn, and she wants to go to the cinema.", "Lee el texto y responde (A/B/C).", [
      mc("How often do the friends meet?", ["Every day.", "Every Sunday.", "Once a month."], 1, "'Every Sunday'."),
      mc("Who chose last Sunday's activity?", ["Laura.", "The writer.", "Nobody."], 1, "'it was my turn'."),
      mc("Where did they have their picnic?", ["In the city.", "Near a lake.", "At home."], 1, "'a picnic near a small lake'."),
      mc("What did the writer do after getting home?", ["Went to bed.", "Made dinner.", "Went out again."], 0, "'went straight to bed'."),
      mc("What does Laura want to do next Sunday?", ["Go walking.", "Go to the cinema.", "Have a picnic."], 1, "'she wants to go to the cinema'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "My best friend and I (1)___ a lot of things together. We (2)___ to the same school and we (3)___ the same music. At the weekend, we usually (4)___ out and go to the park. Sometimes we (5)___ films at her house. I'm lucky because we (6)___ on really well.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["do", "make", "have"], 0, "'do things together'."),
      mc("Hueco 2", ["go", "goes", "going"], 0, "plural → go."),
      mc("Hueco 3", ["like", "likes", "liking"], 0, "plural → like."),
      mc("Hueco 4", ["hang", "get", "take"], 0, "'hang out'."),
      mc("Hueco 5", ["watch", "look", "see"], 0, "'watch films'."),
      mc("Hueco 6", ["get", "make", "do"], 0, "'get on well'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Leo,\nHow (1)___ you? I'm writing to invite you to my house (2)___ Saturday. There (3)___ a small party for my birthday. My family and some friends (4)___ coming. We're going to have dinner and (5)___ games. Can you come? Please tell me (6)___ you're free.\nSee you soon,\nMar", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["are"], "'How are you?'"),
      fb("Hueco 2", ["on"], "'on Saturday'."),
      fb("Hueco 3", ["is"], "'There is a small party'."),
      fb("Hueco 4", ["are"], "'are coming'."),
      fb("Hueco 5", ["play"], "'play games'."),
      fb("Hueco 6", ["if"], "'tell me if you're free'."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Invita a un amigo/a", "Quieres invitar a tu amigo/a inglés/a a un plan este fin de semana. Escríbele un email (25 palabras o más) con:\n· qué plan propones,\n· qué día y a qué hora,\n· qué debe llevar.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Unos amigos quedan en la puerta de un cine.\n2) Ven una película y ríen.\n3) Toman algo juntos después y charlan.\nUsa conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Ana hablar de los regalos para su familia y empareja cada persona con su regalo (A/B/C…).", "This is Part Five. You will hear Ana talking about the presents she bought for her family. For my mother, I bought a book about cooking, because she loves making new dishes. For my father, I bought a warm jumper, because he's always cold in winter. For my brother, I bought some football boots, because he plays every weekend. For my sister, I bought some headphones, because she listens to music all the time. For my grandmother, I bought a nice plant for her garden.", [
      mc("Mother", ["a book", "a jumper", "football boots"], 0, "'a book about cooking'."),
      mc("Father", ["headphones", "a jumper", "a plant"], 1, "'a warm jumper'."),
      mc("Brother", ["football boots", "a book", "a plant"], 0, "'football boots'."),
      mc("Sister", ["a plant", "headphones", "a jumper"], 1, "'headphones'."),
      mc("Grandmother", ["a plant", "a book", "football boots"], 0, "'a nice plant'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso de preguntas personales — tu vida, tu familia, tu rutina y tu casa", "responder con soltura usando todo lo de la semana", "I live, I've got, I usually, there is, my family"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre planes de fin de semana con amigos y familia; el examinador pregunta qué prefieres y por qué", "expresar gustos y dar razones", "I prefer, I like, because, my favourite, at the weekend"),

    SUMMARY("Resumen de la Semana 1", [
      "Sabes hablar de tu vida: rutina, familia y casa, y de lo que haces ahora.",
      "Dominas present simple, present continuous, preguntas y there is/are.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: el pasado (past simple) y experiencias.",
    ]),
    INFO("Mini-simulacro de la Semana 1", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Si no llegas, repasa los días que te costaron antes de la Semana 2."),
  ],
};

export const WEEK1 = {
  n: 1,
  theme: "Tu vida: presente, familia, rutina y casa",
  description: "Present simple, preguntas, present continuous y there is/are. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY1, DAY2, DAY3, DAY4, DAY5],
};
