/**
 * A2 Key · Semana 5 — "Experiencias (present perfect)".
 * Gramática: present perfect (ever/never, just/already/yet, for/since),
 * present perfect vs past simple. Vocabulario: cine y espectáculos, música,
 * arte y cultura, fiestas y celebraciones. Las 4 destrezas, formato Cambridge.
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, reading, writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD,
  mc, fb,
} from "./_lib.mjs";

const READING_P1 = (title, items) => {
  const text = "Lee estos seis mensajes:\n\n" + items.map((q, i) => `${i + 1}.  ${q.data.prompt}`).join("\n\n");
  const questions = items.map((q, i) => ({ ...q, data: { ...q.data, prompt: `Mensaje ${i + 1}: ¿qué significa?` } }));
  return reading(1, `Reading · Parte 1 — ${title}`, text, "Lee los seis textos cortos del recuadro y elige qué significa cada uno (A/B/C).", questions);
};

const DAY21 = {
  title: "Día 21 — Present perfect: experiencias (ever/never)",
  description: "Present perfect (have/has + participio) para experiencias de la vida. Vocabulario: cine y espectáculos. Las 4 destrezas; Listening P1.",
  pedagogy: {
    objective: "Hablar de experiencias de la vida con el present perfect (ever/never).",
    summary: "Present perfect (forma, participios, ever/never); cine; Reading P1–P5, Writing, Listening P1, Speaking.",
    commonMistakes: ["Usar past simple para experiencias sin tiempo ('I saw that film' en vez de 'I've seen').", "participios irregulares.", "'Have you ever went'."],
    reviewPrompts: ["Participio de go, see, eat, be.", "¿Cómo preguntas si alguien ha estado en Londres alguna vez?"],
  },
  items: [
    TEXT("🔁 Semana 5. Última semana antes del ecuador del curso. Hoy aprendes el PRESENT PERFECT — para hablar de experiencias de tu vida. Es clave para subir de A2 a B1."),
    GRAMMAR("Present perfect — forma y uso (experiencias)", `FORMA: have/has + participio pasado.
· I/you/we/they → have (I've). · he/she/it → has (she's).
· Participios: regulares = -ed (worked, played); irregulares hay que aprenderlos:
  go → gone, see → seen, eat → eaten, be → been, do → done, have → had, take → taken, write → written, meet → met, buy → bought.

USO — EXPERIENCIAS de la vida (sin decir CUÁNDO):
· I have visited Paris. · She has never eaten sushi.
· ever (alguna vez) en preguntas: Have you ever been to London?
· never (nunca): I've never seen snow.

Si dices CUÁNDO (yesterday, last year, in 2019) → usa PAST SIMPLE, no present perfect.`),
    WARN("Errores típicos del hispanohablante", "· ❌ Have you ever went? → ✅ Have you ever been/gone?\n· ❌ I've seen it yesterday → ✅ I saw it yesterday (con tiempo → pasado).\n· ❌ She have finished → ✅ She has finished.\n· ❌ I've never ate sushi → ✅ I've never eaten sushi."),
    grammarEx("Gramática — Present perfect (experiencias)", "Completa con el present perfect o elige.", [
      fb("I ___ (visit) London twice.", ["have visited", "'ve visited"], "experiencia → have + participio."),
      fb("She ___ (never / eat) sushi.", ["has never eaten"], "has + never + eaten."),
      fb("___ you ever ___ (be) to Paris?", ["Have", "been"], "Have you ever been…?"),
      fb("They ___ (see) that film three times.", ["have seen", "'ve seen"], "participio seen."),
      mc("Choose:", ["He have finished.", "He has finished.", "He has finish."], 1, "has + participio."),
      mc("Choose (with a past time):", ["I've seen it yesterday.", "I saw it yesterday.", "I seen it yesterday."], 1, "con 'yesterday' → past simple."),
      fb("We ___ (never / win) a prize.", ["have never won", "'ve never won"], "participio won."),
    ]),
    GRAMMAR("Vocabulario del día — Cine y espectáculos", "Palabras del cine y el teatro."),
    deck("A2 Key S5D21 — Cine y espectáculos", [
      ["film", "película", "It's a great film.", "sustantivo", "fɪlm"],
      ["actor", "actor / actriz", "My favourite actor is in it.", "sustantivo", "ˈæktə"],
      ["comedy", "comedia", "I love a good comedy.", "sustantivo", "ˈkɒmədi"],
      ["horror film", "película de terror", "I don't like horror films.", "colocación", "ˈhɒrə fɪlm"],
      ["ticket", "entrada", "I bought two tickets.", "sustantivo", "ˈtɪkɪt"],
      ["screen", "pantalla", "The screen was huge.", "sustantivo", "skriːn"],
      ["boring", "aburrido", "The film was boring.", "adjetivo", "ˈbɔːrɪŋ"],
      ["exciting", "emocionante", "It was an exciting story.", "adjetivo", "ɪkˈsaɪtɪŋ"],
      ["play", "obra de teatro", "We saw a play at the theatre.", "sustantivo", "pleɪ"],
      ["review", "reseña / crítica", "The film got good reviews.", "sustantivo", "rɪˈvjuː"],
    ]),
    vocabEx("Vocabulario — Cine y espectáculos", "Elige la opción correcta.", [
      mc("A funny film is a ___.", ["comedy", "horror film", "review"], 0, "comedy."),
      mc("A person who acts in films is an ___.", ["actor", "author", "review"], 0, "actor."),
      mc("You need a ___ to get into the cinema.", ["ticket", "screen", "play"], 0, "ticket."),
      mc("The opposite of 'boring' is ___.", ["exciting", "cheap", "short"], 0, "exciting."),
      mc("A scary film is a ___.", ["comedy", "horror film", "play"], 1, "horror film."),
      mc("A story performed live at the theatre is a ___.", ["play", "film", "screen"], 0, "play."),
    ]),

    READING_HEAD,
    READING_P1("Cine y espectáculos", [
      mc("Cinema sign: 'Next showing at 8:30. Doors open 15 minutes before.'", ["Film at 8:30, doors at 8:15.", "Film at 8:15.", "No showing."], 0, "'8:30… 15 minutes before'."),
      mc("Notice: 'Please switch off phones during the play.'", ["Turn off phones in the theatre.", "Use phones.", "No play."], 0, "'switch off phones'."),
      mc("Text: 'I've got tickets for the comedy on Friday. Want to come?'", ["An invitation to a comedy.", "No tickets.", "Cancelled."], 0, "'I've got tickets… Want to come?'"),
      mc("Sign: 'Tickets sold out for tonight.'", ["No tickets left tonight.", "Cheap tickets.", "Free entry."], 0, "'sold out'."),
      mc("Review: 'A boring film with a slow story. Two stars.'", ["The reviewer didn't like it.", "The reviewer loved it.", "It's a comedy."], 0, "'boring… Two stars'."),
      mc("App: 'Your booking is confirmed. Screen 4, seats G7–G8.'", ["Booking confirmed, seats G7–G8.", "Booking failed.", "No seats."], 0, "'booking is confirmed'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y películas", "THREE FILMS THIS WEEK\n\nA) 'Space Heroes' — an exciting action film with amazing special effects. Great for teenagers.\n\nB) 'Little Bear' — a sweet cartoon for young children. Short and funny.\n\nC) 'The Dark House' — a scary horror film. Not for children! Only for people who love a fright.", "Empareja cada persona con la película ideal (A/B/C).", [
      mc("A teenager who loves action and special effects.", ["A", "B", "C"], 0, "Space Heroes."),
      mc("A parent with a five-year-old child.", ["A", "B", "C"], 1, "Little Bear."),
      mc("Someone who enjoys being scared.", ["A", "B", "C"], 2, "The Dark House."),
      mc("A family with young children.", ["A", "B", "C"], 1, "B: cartoon for children."),
      mc("A person who wants excitement and effects.", ["A", "B", "C"], 0, "A."),
      mc("Someone who loves horror films.", ["A", "B", "C"], 2, "C."),
      mc("A child who likes short, funny films.", ["A", "B", "C"], 1, "B: short and funny."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY LOVE OF FILMS\n\nI've always loved the cinema. I've seen hundreds of films, but I've never got bored of them! My favourite type is comedy, because I love laughing. I've watched some films so many times that I know the words.\n\nLast year, something exciting happened. My town opened a new cinema with a huge screen, and it had a special evening for young film fans. I've never won anything in my life, but that night I won two free tickets in a competition! I couldn't believe it.\n\nSince then, I've been to the new cinema almost every week. I've made new friends there who love films as much as I do. One day, I'd like to work in the film industry — maybe I'll even become an actor. Who knows?", "Lee el texto y responde (A/B/C).", [
      mc("What is the writer's favourite type of film?", ["Horror.", "Comedy.", "Action."], 1, "'My favourite type is comedy'."),
      mc("What opened in the writer's town last year?", ["A theatre.", "A new cinema.", "A shop."], 1, "'a new cinema with a huge screen'."),
      mc("What did the writer win?", ["A film.", "Two free tickets.", "Money."], 1, "'I won two free tickets'."),
      mc("How often does the writer go to the new cinema now?", ["Once a year.", "Almost every week.", "Never."], 1, "'almost every week'."),
      mc("What would the writer like to do one day?", ["Open a cinema.", "Work in the film industry.", "Stop watching films."], 1, "'work in the film industry'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I've always loved (1)___. I've (2)___ hundreds of films! My favourite type is (3)___ because I love laughing. Last week I bought two (4)___ for a new comedy. The (5)___ was huge and the film was really (6)___. I've already told all my friends to see it.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["films", "sport", "cooking"], 0, "'loved films'."),
      mc("Hueco 2", ["seen", "saw", "see"], 0, "present perfect → seen."),
      mc("Hueco 3", ["comedy", "horror", "review"], 0, "'comedy… laughing'."),
      mc("Hueco 4", ["tickets", "screens", "actors"], 0, "'two tickets'."),
      mc("Hueco 5", ["screen", "ticket", "play"], 0, "'The screen was huge'."),
      mc("Hueco 6", ["exciting", "boring", "short"], 0, "'really exciting'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Zoe,\nHave you (1)___ seen the new comedy at the cinema? I've (2)___ watched it twice — it's so funny! My brother has never (3)___ to that cinema, so I'm going to take him this weekend. The screen is huge and the tickets aren't (4)___ expensive. (5)___ you like to come with us? I'm sure you (6)___ love it!\nSee you,\nMax", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["ever"], "'Have you ever seen'."),
      fb("Hueco 2", ["already"], "'I've already watched it'."),
      fb("Hueco 3", ["been"], "'has never been'."),
      fb("Hueco 4", ["too", "very", "so"], "intensificador."),
      fb("Hueco 5", ["Would"], "'Would you like…?'"),
      fb("Hueco 6", ["will", "'ll"], "predicción → will."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Recomienda una película", "Tu amigo/a inglés/a quiere ver una película. Escríbele un email (25 palabras o más) con:\n· qué película recomiendas,\n· de qué tipo es,\n· por qué te gustó.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Dos amigos compran entradas en el cine.\n2) Ven la película comiendo palomitas.\n3) Salen riendo y comentando la película.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Cinco conversaciones cortas", "Escucha las cinco conversaciones (audio continuo) y elige la respuesta correcta.", "This is Part One. You will hear five short conversations. Choose the correct answer for each question. One. Woman: Have you seen the new comedy? Man: Yes, I watched it last night. It was hilarious. Two. Man: What time does the film start? Woman: At quarter past eight, so we should leave now. Three. Woman: How many tickets do you need? Man: Three, please — two adults and one child. Four. Man: Did you like the play? Woman: Not really, it was a bit boring. Five. Woman: Have you ever been to the theatre in the city centre? Man: No, never, but I'd love to go.", [
      mc("1. When did the man watch the comedy?", ["Tonight.", "Last night.", "Last week."], 1, "'I watched it last night'."),
      mc("2. What time does the film start?", ["Eight.", "Quarter past eight.", "Half past eight."], 1, "'At quarter past eight'."),
      mc("3. How many tickets does the man need?", ["Two.", "Three.", "Four."], 1, "'Three, please'."),
      mc("4. What did the woman think of the play?", ["Exciting.", "A bit boring.", "Funny."], 1, "'a bit boring'."),
      mc("5. Has the man been to the city theatre?", ["Yes, often.", "No, never.", "Once."], 1, "'No, never'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (cine)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre el cine — qué tipo de películas te gustan, la última que viste, si prefieres el cine o ver en casa", "hablar de gustos y experiencias con present perfect y past simple", "I like, my favourite film, I've seen, last week I watched, I prefer"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (espectáculos)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre cine, teatro o conciertos; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, exciting, funny"),

    SUMMARY("Resumen del Día 21", [
      "Present perfect: have/has + participio, para experiencias sin decir cuándo.",
      "ever (preguntas), never (nunca). Con tiempo pasado → past simple.",
      "Vocabulario de cine. Practicadas las 4 destrezas; Listening P1.",
    ]),
    INFO("Tarea para el Día 22", "Escribe 3 experiencias tuyas con el present perfect (I've …). Repasa las flashcards. Mañana: present perfect vs. past simple."),
  ],
};

const DAY22 = {
  title: "Día 22 — Present perfect vs. past simple · La música",
  description: "Diferencia present perfect / past simple, been vs gone. Vocabulario: la música. Las 4 destrezas; Listening P2.",
  pedagogy: {
    objective: "Elegir entre present perfect y past simple según haya o no un tiempo pasado concreto.",
    summary: "Present perfect vs past simple; been/gone; música; Reading P1–P5, Writing, Listening P2, Speaking.",
    commonMistakes: ["'I've been to the concert yesterday'.", "confundir been (ir y volver) y gone (ir y seguir allí)."],
    reviewPrompts: ["¿'I've seen' o 'I saw' con 'last night'?", "¿been o gone si ya ha vuelto?"],
  },
  items: [
    TEXT("🔁 Repaso: participios (seen, been, eaten, done). Hoy decides cuándo usar present perfect y cuándo past simple. Vocabulario: la MÚSICA."),
    GRAMMAR("Present perfect vs. past simple", `PRESENT PERFECT: experiencia o resultado SIN decir cuándo (o con just/already/yet, for/since):
· I've been to Italy. · She's finished her homework.

PAST SIMPLE: acción terminada CON un tiempo pasado concreto (yesterday, last week, in 2019, ago):
· I went to Italy in 2019. · She finished it yesterday.

Regla práctica: si aparece o se sobreentiende CUÁNDO exacto → past simple.

BEEN vs GONE:
· has been to = fue y ya ha vuelto: She has been to Paris (ya está de vuelta).
· has gone to = fue y sigue allí: She has gone to Paris (aún está allí).`),
    WARN("Errores típicos del hispanohablante", "· ❌ I've seen it yesterday → ✅ I saw it yesterday.\n· ❌ When have you arrived? → ✅ When did you arrive?\n· ❌ She has gone to Paris (pero ya volvió) → ✅ She has been to Paris.\n· ❌ I did never eat sushi → ✅ I have never eaten sushi."),
    grammarEx("Gramática — Present perfect vs. past simple", "Elige el tiempo correcto.", [
      mc("'___ that film. (last night)'", ["I've seen", "I saw", "I seen"], 1, "con 'last night' → past simple."),
      mc("'___ to Japan.' (experiencia, sin tiempo)", ["I went", "I've been", "I've gone"], 1, "experiencia → have been."),
      fb("She ___ (finish) her homework, so she can play now.", ["has finished", "'s finished"], "resultado ahora → present perfect."),
      fb("We ___ (travel) to Rome in 2019.", ["travelled"], "con 2019 → past simple."),
      mc("Mum isn't here — she ___ to the shops.", ["has been", "has gone", "went"], 1, "sigue fuera → has gone."),
      mc("'When ___ you ___?' (arrive)", ["have / arrived", "did / arrive", "do / arrive"], 1, "'When' concreto → past simple."),
      fb("I ___ (never / hear) that song before.", ["have never heard", "'ve never heard"], "experiencia → present perfect."),
    ]),
    GRAMMAR("Vocabulario del día — La música", "Palabras del mundo de la música."),
    deck("A2 Key S5D22 — La música", [
      ["song", "canción", "This is my favourite song.", "sustantivo", "sɒŋ"],
      ["band", "grupo (música)", "My brother plays in a band.", "sustantivo", "bænd"],
      ["singer", "cantante", "She's an amazing singer.", "sustantivo", "ˈsɪŋə"],
      ["concert", "concierto", "We went to a rock concert.", "sustantivo", "ˈkɒnsət"],
      ["guitar", "guitarra", "He plays the guitar.", "sustantivo", "ɡɪˈtɑː"],
      ["drums", "batería", "She plays the drums.", "sustantivo", "drʌmz"],
      ["lyrics", "letra (de canción)", "I love the lyrics of this song.", "sustantivo", "ˈlɪrɪks"],
      ["loud", "alto (volumen)", "The music was too loud.", "adjetivo", "laʊd"],
      ["album", "álbum / disco", "Their new album is great.", "sustantivo", "ˈælbəm"],
      ["tune", "melodía", "That's a catchy tune.", "sustantivo", "tjuːn"],
    ]),
    vocabEx("Vocabulario — La música", "Elige la opción correcta.", [
      mc("A group of musicians is a ___.", ["band", "song", "concert"], 0, "band."),
      mc("A person who sings is a ___.", ["singer", "album", "tune"], 0, "singer."),
      mc("A live music event is a ___.", ["concert", "lyrics", "guitar"], 0, "concert."),
      mc("The words of a song are the ___.", ["lyrics", "drums", "album"], 0, "lyrics."),
      mc("A collection of songs is an ___.", ["album", "singer", "tune"], 0, "album."),
      mc("If music is very ___, you can't talk.", ["loud", "quiet", "boring"], 0, "loud."),
    ]),

    READING_HEAD,
    READING_P1("Música y conciertos", [
      mc("Concert sign: 'Doors open 7 pm. Band on stage at 8.'", ["The band plays at 8.", "The band plays at 7.", "No band."], 0, "'Band on stage at 8'."),
      mc("Notice: 'No filming during the concert.'", ["Don't record the concert.", "Filming is fine.", "No concert."], 0, "'No filming'."),
      mc("Text: 'I've just bought tickets for the concert! Coming?'", ["An invitation to a concert.", "No tickets.", "Cancelled."], 0, "'I've just bought tickets'."),
      mc("Sign: 'Please keep the music down after 10 pm.'", ["Play music quietly after 10.", "Play loud music.", "No music."], 0, "'keep the music down'."),
      mc("Ad: 'Guitar lessons for beginners — first class free.'", ["Free first guitar lesson.", "Lessons for experts.", "No lessons."], 0, "'first class free'."),
      mc("App: 'New album out now — listen free this week.'", ["Listen to the new album free this week.", "The album costs money now.", "No album."], 0, "'listen free this week'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y música", "THREE MUSIC EVENTS\n\nA) Rock Concert — a loud, energetic show by a famous band. For people who love live music and dancing.\n\nB) Classical Evening — calm, beautiful music by an orchestra. Perfect for a relaxing night.\n\nC) Open Mic Night — anyone can sing or play. Friendly and fun, great for new musicians.", "Empareja cada persona con el evento ideal (A/B/C).", [
      mc("Someone who loves loud live bands and dancing.", ["A", "B", "C"], 0, "Rock Concert."),
      mc("A person who wants a calm, relaxing evening.", ["A", "B", "C"], 1, "Classical Evening."),
      mc("A new singer who wants to perform.", ["A", "B", "C"], 2, "Open Mic Night."),
      mc("Someone who enjoys orchestras.", ["A", "B", "C"], 1, "B."),
      mc("A person who wants energetic live music.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to play in front of a friendly crowd.", ["A", "B", "C"], 2, "C."),
      mc("A fan of a famous band.", ["A", "B", "C"], 0, "A: famous band."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "THE BEST NIGHT OF MY LIFE\n\nI've loved music since I was little, and I've been to many concerts. But last summer, I had the best musical experience of my life: I saw my favourite band live for the first time.\n\nI bought the tickets months before, and I counted the days. On the night of the concert, my friends and I arrived early to get a good place near the stage. When the band came out, everyone started singing. The music was so loud that I could feel it in my chest! We danced and sang for two hours.\n\nAfter the concert, I couldn't sleep — I was too excited. I've been to other concerts since then, but nothing has been as special as that night. I've already bought tickets for their next show. I can't wait!", "Lee el texto y responde (A/B/C).", [
      mc("What happened last summer?", ["The writer learned guitar.", "The writer saw their favourite band live.", "The writer joined a band."], 1, "'I saw my favourite band live'."),
      mc("Why did they arrive early?", ["To buy tickets.", "To get a good place near the stage.", "To meet the band."], 1, "'to get a good place near the stage'."),
      mc("What was the music like?", ["Quiet.", "Very loud.", "Boring."], 1, "'so loud that I could feel it'."),
      mc("Why couldn't the writer sleep?", ["Too much coffee.", "Too excited.", "Too tired."], 1, "'I was too excited'."),
      mc("What has the writer already done?", ["Joined the band.", "Bought tickets for the next show.", "Forgotten the concert."], 1, "'already bought tickets for their next show'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "I've always loved music. My brother plays the (1)___ in a rock (2)___. Last month I went to my first (3)___ — it was amazing! The music was very (4)___ and everyone was dancing. I've (5)___ bought their new (6)___ and I listen to it every day.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["guitar", "concert", "album"], 0, "'plays the guitar'."),
      mc("Hueco 2", ["band", "song", "tune"], 0, "'a rock band'."),
      mc("Hueco 3", ["concert", "singer", "lyrics"], 0, "'my first concert'."),
      mc("Hueco 4", ["loud", "quiet", "boring"], 0, "'very loud… dancing'."),
      mc("Hueco 5", ["already", "yet", "ever"], 0, "'I've already bought'."),
      mc("Hueco 6", ["album", "band", "concert"], 0, "'their new album'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Lily,\nHave you (1)___ heard of the band 'The Waves'? I've just been (2)___ their concert and it was incredible! I've never (3)___ such loud music. My brother plays (4)___ the guitar, so he loved it too. We (5)___ home really late, but it was worth it. You (6)___ come to their next concert with us!\nLove,\nSam", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["ever"], "'Have you ever heard'."),
      fb("Hueco 2", ["to"], "'been to their concert'."),
      fb("Hueco 3", ["heard"], "'never heard such…'."),
      fb("Hueco 4", ["the"], "'plays the guitar'."),
      fb("Hueco 5", ["got", "went", "came"], "'got/went home'."),
      fb("Hueco 6", ["should", "must", "could", "can"], "sugerencia."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Cuenta un concierto", "Tu amigo/a inglés/a quiere saber de un concierto o evento musical al que fuiste. Escríbele un email (25 palabras o más) con:\n· a qué concierto fuiste,\n· cómo fue,\n· si te gustó y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una chica compra entradas para un concierto por internet.\n2) Va al concierto con amigos y canta.\n3) Vuelve a casa feliz, tarde por la noche.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Completar notas", "Escucha el mensaje y completa las notas con UNA palabra o número en cada hueco.", "This is Part Two. You will hear a man leaving a message about a music festival. Hi, it's Dan. I'm calling about the summer music festival. It's on Saturday the twentieth of July, in Green Park. The first band starts at three o'clock. Tickets cost twenty-five pounds, but if you buy before June, they're only twenty. Bring a jacket because it can get cold in the evening. See you there!", [
      fb("Festival day: ___", ["Saturday"], "'on Saturday'."),
      fb("In ___ Park", ["Green"], "'in Green Park'."),
      fb("First band starts at ___ o'clock.", ["three", "3"], "'at three o'clock'."),
      fb("Tickets cost ___ pounds (normal).", ["twenty-five", "25"], "'twenty-five pounds'."),
      fb("Bring a ___ for the evening.", ["jacket"], "'Bring a jacket'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (música)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre música — qué música te gusta, si tocas un instrumento, si has estado en un concierto", "hablar de gustos y experiencias con present perfect", "I like, my favourite band, I play, I've been to, last year"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (música)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre tipos de música o conciertos vs. escuchar en casa; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, live music, loud"),

    SUMMARY("Resumen del Día 22", [
      "Present perfect (sin cuándo) vs past simple (con tiempo pasado concreto).",
      "been to = fue y volvió; gone to = fue y sigue allí.",
      "Vocabulario de música. Practicadas las 4 destrezas; Listening P2.",
    ]),
    INFO("Tarea para el Día 23", "Escribe 2 frases con present perfect y 2 con past simple. Repasa las flashcards. Mañana: just / already / yet."),
  ],
};

const DAY23 = {
  title: "Día 23 — just / already / yet · El arte y la cultura",
  description: "Present perfect con just, already y yet. Vocabulario: arte y cultura. Las 4 destrezas; Listening P3.",
  pedagogy: {
    objective: "Usar just, already y yet con el present perfect.",
    summary: "just/already/yet; arte y cultura; Reading P1–P5, Writing, Listening P3, Speaking.",
    commonMistakes: ["'yet' en afirmativas.", "posición de just/already.", "'already' en preguntas negativas."],
    reviewPrompts: ["¿'yet' va al principio o al final?", "¿'just' antes o después del participio?"],
  },
  items: [
    TEXT("🔁 Repaso: present perfect vs past simple. Hoy tres palabras muy útiles con el present perfect: just, already y yet. Vocabulario: ARTE y CULTURA."),
    GRAMMAR("just / already / yet", `Se usan con el present perfect:
· JUST (acabar de) — va entre have/has y el participio: I've just finished. She's just arrived.
· ALREADY (ya) — afirmativas, entre have/has y el participio: We've already seen it. He's already gone.
· YET (todavía/ya) — negativas y preguntas, al FINAL de la frase:
  - Negativa: I haven't finished yet. (todavía no)
  - Pregunta: Have you finished yet? (¿ya?)`),
    WARN("Errores típicos del hispanohablante", "· ❌ I've finished yet → ✅ I've already finished / I haven't finished yet.\n· ❌ Have you already finished? (a veces mejor 'yet') → ✅ Have you finished yet?\n· ❌ I've yet finished → ✅ I've just/already finished.\n· ❌ She's arrived just → ✅ She's just arrived."),
    grammarEx("Gramática — just / already / yet", "Completa con just, already o yet.", [
      fb("I've ___ finished my homework — two minutes ago!", ["just"], "acabar de → just."),
      fb("We've ___ seen this film. Let's watch another.", ["already"], "ya → already."),
      fb("Have you eaten ___?", ["yet"], "pregunta → yet (al final)."),
      fb("She hasn't arrived ___.", ["yet"], "negativa → yet."),
      mc("Choose:", ["He's already gone.", "He's gone already yet.", "He's yet gone."], 0, "already entre has y participio."),
      fb("The train has ___ left. We missed it!", ["just"], "acabar de → just."),
      mc("Choose (question):", ["Have you finished already?", "Have you finished yet?", "Have you yet finished?"], 1, "pregunta → yet."),
    ]),
    GRAMMAR("Vocabulario del día — Arte y cultura", "El mundo del arte y los museos."),
    deck("A2 Key S5D23 — Arte y cultura", [
      ["painting", "cuadro / pintura", "That painting is beautiful.", "sustantivo", "ˈpeɪntɪŋ"],
      ["artist", "artista", "She's a famous artist.", "sustantivo", "ˈɑːtɪst"],
      ["museum", "museo", "We visited an art museum.", "sustantivo", "mjuˈziːəm"],
      ["exhibition", "exposición", "There's a new exhibition.", "sustantivo", "ˌeksɪˈbɪʃn"],
      ["gallery", "galería", "The gallery is free on Sundays.", "sustantivo", "ˈɡæləri"],
      ["photograph", "fotografía", "He took a great photograph.", "sustantivo", "ˈfəʊtəɡrɑːf"],
      ["draw", "dibujar", "I love to draw animals.", "verbo", "drɔː"],
      ["culture", "cultura", "I'm interested in other cultures.", "sustantivo", "ˈkʌltʃə"],
      ["famous", "famoso", "It's a famous painting.", "adjetivo", "ˈfeɪməs"],
      ["sculpture", "escultura", "There's a stone sculpture outside.", "sustantivo", "ˈskʌlptʃə"],
    ]),
    vocabEx("Vocabulario — Arte y cultura", "Elige la opción correcta.", [
      mc("A picture made with paint is a ___.", ["painting", "photograph", "sculpture"], 0, "painting."),
      mc("A person who creates art is an ___.", ["artist", "actor", "author"], 0, "artist."),
      mc("A building where you see art is a ___.", ["museum", "market", "office"], 0, "museum."),
      mc("A show of art for a short time is an ___.", ["exhibition", "album", "review"], 0, "exhibition."),
      mc("A 3D artwork made of stone is a ___.", ["sculpture", "painting", "photograph"], 0, "sculpture."),
      mc("To make a picture with a pencil is to ___.", ["draw", "paint", "act"], 0, "draw."),
    ]),

    READING_HEAD,
    READING_P1("Arte y museos", [
      mc("Museum sign: 'No photographs in the exhibition.'", ["Don't take photos.", "Photos allowed.", "No exhibition."], 0, "'No photographs'."),
      mc("Notice: 'Gallery free entry on the first Sunday.'", ["Free one Sunday a month.", "Always free.", "Never free."], 0, "'free entry on the first Sunday'."),
      mc("Text: 'I've just seen an amazing exhibition. You should go!'", ["A recommendation.", "The exhibition is closed.", "No exhibition."], 0, "'I've just seen… You should go'."),
      mc("Sign: 'Please do not touch the sculptures.'", ["Don't touch the art.", "Touch the art.", "No sculptures."], 0, "'do not touch'."),
      mc("Poster: 'Art classes for children every Saturday.'", ["Children's art classes on Saturdays.", "No classes.", "Adults only."], 0, "'every Saturday'."),
      mc("App: 'Book your museum ticket online and skip the queue.'", ["Book online to avoid queuing.", "No online booking.", "Free entry."], 0, "'Book… online and skip the queue'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y actividades culturales", "THREE CULTURAL ACTIVITIES\n\nA) Painting Workshop — learn to paint with a real artist. All materials provided. For beginners.\n\nB) Photography Tour — walk around the city and take photos of famous buildings. Bring your camera.\n\nC) History Museum — learn about the past through objects and stories. Free for students.", "Empareja cada persona con la actividad ideal (A/B/C).", [
      mc("Someone who wants to learn to paint.", ["A", "B", "C"], 0, "Painting Workshop."),
      mc("A person who loves taking photos of buildings.", ["A", "B", "C"], 1, "Photography Tour."),
      mc("A student interested in history.", ["A", "B", "C"], 2, "History Museum."),
      mc("A beginner artist who has no materials.", ["A", "B", "C"], 0, "A: materials provided."),
      mc("Someone who wants to walk and use a camera.", ["A", "B", "C"], 1, "B."),
      mc("A student who wants free entry.", ["A", "B", "C"], 2, "C: free for students."),
      mc("A person who wants to learn from a real artist.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A DAY AT THE MUSEUM\n\nLast Saturday, my class visited a famous art museum in the city. I've been to museums before, but I've never seen so many beautiful paintings in one place. Our teacher gave us a task: to choose our favourite painting and write about it.\n\nAt first, I found it difficult, because there were hundreds of paintings. But then I saw one of a small boat on a stormy sea, and I couldn't stop looking at it. The artist had used dark colours, and it made me feel the danger of the storm.\n\nAfter the visit, we went to a café and talked about what we had seen. My friend Sara loved a modern sculpture, but I preferred the paintings. I've already told my parents that I want to go back. Art can really change how you feel.", "Lee el texto y responde (A/B/C).", [
      mc("What did the class do on Saturday?", ["Went to a concert.", "Visited an art museum.", "Watched a film."], 1, "'visited a famous art museum'."),
      mc("What was the teacher's task?", ["Draw a picture.", "Write about a favourite painting.", "Take photos."], 1, "'choose our favourite painting and write about it'."),
      mc("What was the writer's favourite painting?", ["A boat on a stormy sea.", "A garden.", "A sculpture."], 0, "'a small boat on a stormy sea'."),
      mc("What did Sara like most?", ["A painting.", "A modern sculpture.", "The café."], 1, "'Sara loved a modern sculpture'."),
      mc("What has the writer already done?", ["Bought a painting.", "Told their parents they want to go back.", "Become an artist."], 1, "'already told my parents… go back'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Yesterday I visited an art (1)___ with my friend. There was a special (2)___ of modern paintings. My favourite was a huge (3)___ of the sea by a famous (4)___. We weren't allowed to take (5)___, but I've (6)___ decided to go back next week to see it again.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["gallery", "office", "market"], 0, "'art gallery'."),
      mc("Hueco 2", ["exhibition", "album", "review"], 0, "'exhibition of modern paintings'."),
      mc("Hueco 3", ["painting", "song", "ticket"], 0, "'a huge painting'."),
      mc("Hueco 4", ["artist", "actor", "singer"], 0, "'a famous artist'."),
      mc("Hueco 5", ["photographs", "sculptures", "cultures"], 0, "'take photographs'."),
      mc("Hueco 6", ["already", "yet", "ever"], 0, "'I've already decided'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Noah,\nI've just been (1)___ the new art exhibition and it was amazing! I've never (2)___ such beautiful paintings. My favourite (3)___ a huge picture of the mountains. We couldn't take photos, (4)___ I bought a postcard of it. I've (5)___ told all my friends about it. Have you been (6)___?\nBye,\nMia", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["to"], "'been to the exhibition'."),
      fb("Hueco 2", ["seen"], "'never seen'."),
      fb("Hueco 3", ["was"], "'My favourite was…'."),
      fb("Hueco 4", ["so", "but"], "consecuencia/contraste."),
      fb("Hueco 5", ["already"], "'I've already told'."),
      fb("Hueco 6", ["yet"], "'Have you been yet?'"),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Recomienda un museo o exposición", "Tu amigo/a inglés/a visita tu ciudad. Escríbele un email (25 palabras o más) con:\n· qué museo o exposición recomiendas,\n· qué se puede ver allí,\n· cuándo es mejor ir.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una clase entra en un museo de arte.\n2) Una alumna se queda mirando un cuadro fascinada.\n3) Después, en un café, comentan lo que vieron.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Una conversación (opción múltiple)", "Escucha a dos amigos hablando de una visita a un museo y elige la respuesta correcta (A/B/C).", "This is Part Three. You will hear two friends, Emma and Jack, talking about a museum. Emma: Have you been to the new art museum yet? Jack: Yes, I went last weekend. It was fantastic. Emma: What did you like best? Jack: There was an amazing exhibition of photographs of the sea. Emma: Nice! Was it expensive? Jack: No, it was free for students. I just showed my student card. Emma: Great! Can you take photos inside? Jack: No, you can't — it's not allowed. But you can buy postcards in the shop. Emma: OK, I'll go this Saturday then.", [
      mc("When did Jack go to the museum?", ["Yesterday.", "Last weekend.", "This morning."], 1, "'I went last weekend'."),
      mc("What did Jack like best?", ["Paintings.", "Photographs of the sea.", "Sculptures."], 1, "'exhibition of photographs of the sea'."),
      mc("How much did Jack pay?", ["Nothing (free for students).", "Ten pounds.", "Five pounds."], 0, "'free for students'."),
      mc("Can you take photos inside?", ["Yes.", "No, it's not allowed.", "Only in the shop."], 1, "'you can't — it's not allowed'."),
      mc("When will Emma go?", ["Today.", "This Saturday.", "Next month."], 1, "'I'll go this Saturday'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (arte y cultura)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre arte y cultura — si te gusta dibujar o pintar, si has visitado un museo, tu tipo de arte favorito", "hablar de gustos y experiencias culturales", "I like, I've visited, my favourite, I can draw, I'm interested in"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (cultura)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre museos, exposiciones o hacer arte; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, interesting, museum"),

    SUMMARY("Resumen del Día 23", [
      "just (acabar de) y already (ya): entre have/has y el participio.",
      "yet (todavía/ya): en negativas y preguntas, al final.",
      "Vocabulario de arte y cultura. Practicadas las 4 destrezas; Listening P3.",
    ]),
    INFO("Tarea para el Día 24", "Escribe 3 cosas que ya has hecho hoy (already/just) y 2 que no has hecho todavía (yet). Repasa las flashcards. Mañana: for / since / How long."),
  ],
};

const DAY24 = {
  title: "Día 24 — for / since / How long · Fiestas y celebraciones",
  description: "Present perfect con for y since; How long…? Vocabulario: fiestas y celebraciones. Las 4 destrezas; Listening P4.",
  pedagogy: {
    objective: "Expresar duración con for/since y preguntar con How long.",
    summary: "for/since; How long…?; celebraciones; Reading P1–P5, Writing, Listening P4, Speaking.",
    commonMistakes: ["'since two years'.", "'for 2019'.", "'How long time'."],
    reviewPrompts: ["¿for o since con '2020'?", "¿for o since con 'three years'?"],
  },
  items: [
    TEXT("🔁 Repaso: just/already/yet. Hoy expresas cuánto tiempo llevas con algo (for/since). Vocabulario: FIESTAS y CELEBRACIONES."),
    GRAMMAR("for / since · How long…?", `Con el present perfect, para acciones que empezaron en el pasado y CONTINÚAN:
· FOR + periodo de tiempo (cuánto): for two years, for a week, for ten minutes.
  · I've lived here for five years.
· SINCE + momento de inicio (desde cuándo): since 2020, since Monday, since I was ten.
  · I've known her since 2015.

PREGUNTAR duración: How long have you…? → How long have you lived here? — For five years. / Since 2019.`),
    WARN("Errores típicos del hispanohablante", "· ❌ since two years → ✅ for two years.\n· ❌ for 2019 → ✅ since 2019.\n· ❌ How long time have you…? → ✅ How long have you…?\n· ❌ I live here since 2015 → ✅ I've lived here since 2015 (present perfect)."),
    grammarEx("Gramática — for / since / How long", "Completa con for o since, o elige.", [
      fb("I've lived here ___ five years.", ["for"], "periodo → for."),
      fb("She's known him ___ 2018.", ["since"], "momento → since."),
      fb("We've been friends ___ we were children.", ["since"], "momento de inicio → since."),
      fb("They've studied English ___ three months.", ["for"], "periodo → for."),
      mc("Choose:", ["How long time have you been here?", "How long have you been here?", "How much long you here?"], 1, "How long have you…?"),
      fb("I haven't seen her ___ last summer.", ["since"], "momento → since."),
      fb("He's had that car ___ a long time.", ["for"], "periodo → for."),
    ]),
    GRAMMAR("Vocabulario del día — Fiestas y celebraciones", "Celebraciones y eventos."),
    deck("A2 Key S5D24 — Fiestas y celebraciones", [
      ["birthday", "cumpleaños", "It's my birthday today!", "sustantivo", "ˈbɜːθdeɪ"],
      ["celebrate", "celebrar", "We celebrated her wedding.", "verbo", "ˈselɪbreɪt"],
      ["present", "regalo", "I bought her a present.", "sustantivo", "ˈpreznt"],
      ["party", "fiesta", "We had a big party.", "sustantivo", "ˈpɑːti"],
      ["invite", "invitar", "She invited me to dinner.", "verbo", "ɪnˈvaɪt"],
      ["guest", "invitado/a", "There were fifty guests.", "sustantivo", "ɡest"],
      ["cake", "tarta / pastel", "We had a chocolate cake.", "sustantivo", "keɪk"],
      ["decorations", "decoración / adornos", "The decorations were lovely.", "sustantivo", "ˌdekəˈreɪʃnz"],
      ["wedding", "boda", "Their wedding was beautiful.", "sustantivo", "ˈwedɪŋ"],
      ["anniversary", "aniversario", "It's their 25th anniversary.", "sustantivo", "ˌænɪˈvɜːsəri"],
    ]),
    vocabEx("Vocabulario — Fiestas y celebraciones", "Elige la opción correcta.", [
      mc("The day you were born, every year, is your ___.", ["birthday", "wedding", "guest"], 0, "birthday."),
      mc("A gift you give someone is a ___.", ["present", "party", "cake"], 0, "present."),
      mc("A person you invite to a party is a ___.", ["guest", "present", "cake"], 0, "guest."),
      mc("The event when two people get married is a ___.", ["wedding", "birthday", "party"], 0, "wedding."),
      mc("To ask someone to come to your party is to ___ them.", ["invite", "celebrate", "decorate"], 0, "invite."),
      mc("You put ___ up to make a room look nice for a party.", ["decorations", "guests", "presents"], 0, "decorations."),
    ]),

    READING_HEAD,
    READING_P1("Fiestas y celebraciones", [
      mc("Invitation: 'You're invited to Sam's party, Sat 8 pm.'", ["A party on Saturday at 8.", "No party.", "Party cancelled."], 0, "'party, Sat 8 pm'."),
      mc("Note: 'Please RSVP by Friday.'", ["Reply by Friday.", "No reply needed.", "Party on Friday."], 0, "'RSVP by Friday'."),
      mc("Text: 'Don't forget Mum's present — her birthday is tomorrow!'", ["Buy a present for Mum's birthday.", "No birthday.", "Mum has a present."], 0, "'her birthday is tomorrow'."),
      mc("Sign: 'Party room available to book for special events.'", ["You can book a party room.", "No bookings.", "Room closed."], 0, "'available to book'."),
      mc("Card: 'Happy 25th anniversary! With love.'", ["A wedding anniversary card.", "A birthday card.", "A goodbye card."], 0, "'Happy 25th anniversary'."),
      mc("Message: 'Bring a dish to share for the party.'", ["Bring food to share.", "No food.", "Buy tickets."], 0, "'Bring a dish to share'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y celebraciones", "THREE PARTY IDEAS\n\nA) Garden BBQ — food outside in summer, games for children, casual and relaxed.\n\nB) Fancy Dinner — a smart restaurant with a special menu, perfect for anniversaries.\n\nC) Dance Party — loud music and dancing all night, great for a big birthday.", "Empareja cada persona con la idea ideal (A/B/C).", [
      mc("A family who wants a relaxed summer party outside.", ["A", "B", "C"], 0, "Garden BBQ."),
      mc("A couple celebrating their anniversary elegantly.", ["A", "B", "C"], 1, "Fancy Dinner."),
      mc("A teenager who wants music and dancing.", ["A", "B", "C"], 2, "Dance Party."),
      mc("Someone who wants games for children.", ["A", "B", "C"], 0, "A: games for children."),
      mc("A person who wants a smart, special menu.", ["A", "B", "C"], 1, "B."),
      mc("Someone celebrating a big birthday with dancing.", ["A", "B", "C"], 2, "C."),
      mc("A family who likes eating outside in summer.", ["A", "B", "C"], 0, "A."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "A SURPRISE PARTY\n\nMy grandmother has lived in the same house for fifty years, and last month she turned eighty. We wanted to do something special, so my family and I organised a surprise party.\n\nIt wasn't easy to keep it secret! We invited all her friends and family — more than forty guests. My mother made a huge chocolate cake, and my sister and I put up decorations all around the house. We told my grandmother we were taking her out for a quiet dinner.\n\nWhen she opened the door and everyone shouted 'Surprise!', she cried with happiness. 'I've never had a party like this,' she said. We danced, ate, and looked at old photos until late. It was the best celebration I've ever been to, and I'll remember it for ever.", "Lee el texto y responde (A/B/C).", [
      mc("How long has the grandmother lived in the same house?", ["Eighty years.", "Fifty years.", "Forty years."], 1, "'lived in the same house for fifty years'."),
      mc("Why did the family organise a party?", ["A wedding.", "Her 80th birthday.", "An anniversary."], 1, "'she turned eighty'."),
      mc("How many guests were there?", ["More than forty.", "Fifty.", "Twenty."], 0, "'more than forty guests'."),
      mc("What did they tell the grandmother?", ["The truth.", "They were taking her for a quiet dinner.", "Nothing."], 1, "'taking her out for a quiet dinner'."),
      mc("How did the grandmother feel?", ["Angry.", "Happy (she cried).", "Bored."], 1, "'she cried with happiness'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "Last week we (1)___ my grandmother's 80th birthday with a surprise (2)___. We (3)___ more than forty guests, and my mum made a huge (4)___. My sister and I put up (5)___ around the house. When Grandma arrived, everyone shouted 'Surprise!'. She said she had never had such a wonderful (6)___.", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["celebrated", "invited", "decorated"], 0, "'celebrated her birthday'."),
      mc("Hueco 2", ["party", "guest", "present"], 0, "'a surprise party'."),
      mc("Hueco 3", ["invited", "celebrated", "decorated"], 0, "'invited more than forty guests'."),
      mc("Hueco 4", ["cake", "party", "present"], 0, "'a huge cake'."),
      mc("Hueco 5", ["decorations", "guests", "presents"], 0, "'put up decorations'."),
      mc("Hueco 6", ["celebration", "guest", "decoration"], 0, "'such a wonderful celebration'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ada,\nI'm so excited! We're organising a surprise party (1)___ my grandmother's 80th birthday. She's lived in her house (2)___ fifty years and she's never had a big party. We've (3)___ invited more than forty guests. My mum is going (4)___ make a huge cake. Can you help us (5)___ up the decorations on Saturday? It (6)___ be an amazing day!\nLove,\nZoe", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["for"], "'party for her birthday'."),
      fb("Hueco 2", ["for"], "'for fifty years'."),
      fb("Hueco 3", ["already"], "'We've already invited'."),
      fb("Hueco 4", ["to"], "'going to make'."),
      fb("Hueco 5", ["put"], "'help us put up'."),
      fb("Hueco 6", ["will", "'ll"], "predicción → will."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Invita a una celebración", "Vas a celebrar algo especial y quieres invitar a tu amigo/a inglés/a. Escríbele un email (25 palabras o más) con:\n· qué celebras y cuándo,\n· dónde es,\n· qué debe llevar.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una familia prepara en secreto una fiesta sorpresa.\n2) La abuela abre la puerta y todos gritan '¡Sorpresa!'.\n3) Celebran con tarta y baile.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Cinco monólogos (idea principal)", "Escucha a cinco personas y elige de qué habla cada una.", "This is Part Four. You will hear five people talking. Choose what each person is talking about. One. For my birthday, my friends organised a surprise party — I had no idea! Two. My parents have been married for thirty years, so we're planning a big anniversary dinner. Three. I've just been to my cousin's wedding; it was beautiful and I danced all night. Four. I always spend hours choosing the perfect present for people I love. Five. I love decorating the house with lights and balloons before a party.", [
      mc("Person 1 is talking about…", ["a surprise party", "a wedding", "presents"], 0, "'a surprise party'."),
      mc("Person 2 is talking about…", ["an anniversary", "a birthday", "decorations"], 0, "'anniversary dinner'."),
      mc("Person 3 is talking about…", ["a wedding", "a birthday", "a present"], 0, "'my cousin's wedding'."),
      mc("Person 4 is talking about…", ["choosing presents", "a party", "a wedding"], 0, "'choosing the perfect present'."),
      mc("Person 5 is talking about…", ["decorations", "cakes", "guests"], 0, "'decorating the house'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Preguntas personales (celebraciones)", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: preguntas sobre celebraciones — cómo celebras tu cumpleaños, una fiesta a la que fuiste, cuánto tiempo hace que conoces a tu mejor amigo/a", "hablar de celebraciones y usar for/since", "I celebrate, I've known … for/since, last year, my birthday"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones (fiestas)", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre fiestas grandes o pequeñas, tipos de celebración; el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, party, family"),

    SUMMARY("Resumen del Día 24", [
      "for + periodo (for two years); since + inicio (since 2020).",
      "How long have you…? para preguntar duración.",
      "Vocabulario de celebraciones. Practicadas las 4 destrezas; Listening P4.",
    ]),
    INFO("Tarea para el Día 25", "Escribe cuánto tiempo llevas con 2 cosas (for/since). Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

const DAY25 = {
  title: "Día 25 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del present perfect y del vocabulario de la semana. Las 4 destrezas; Listening P5. Al final, el mini-simulacro de la Semana 5.",
  pedagogy: {
    objective: "Consolidar el present perfect (todas sus formas) y medir el progreso.",
    summary: "Repaso de present perfect (ever/never, just/already/yet, for/since); Reading P1–P5; Writing; Listening P5; Speaking.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 6."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 5 — ¡casi la mitad del curso! Consolidas el present perfect y practicas las 4 destrezas. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 5", `1) Present perfect: have/has + participio, para experiencias sin decir cuándo.
2) Present perfect (sin tiempo) vs past simple (con tiempo pasado); been/gone.
3) just (acabar de), already (ya), yet (todavía/ya, en neg./preg.).
4) for (periodo) / since (inicio); How long…?`),
    grammarEx("Repaso mixto de gramática — Semana 5", "Completa o elige.", [
      fb("I ___ (never / be) to Japan.", ["have never been", "'ve never been"], "experiencia → present perfect."),
      mc("'___ that film last night.'", ["I've seen", "I saw", "I seen"], 1, "con 'last night' → past simple."),
      fb("She's just ___ (finish) her work.", ["finished"], "just + participio."),
      fb("Have you eaten ___?", ["yet"], "pregunta → yet."),
      fb("We've lived here ___ 2019.", ["since"], "inicio → since."),
      fb("They've been friends ___ ten years.", ["for"], "periodo → for."),
      mc("Mum has ___ to the shops (still out).", ["been", "gone", "went"], 1, "sigue fuera → gone."),
      mc("Choose:", ["How long you here?", "How long have you been here?", "How long time are you here?"], 1, "How long have you been…?"),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 5", "Repasa los mazos (cine, música, arte, celebraciones)."),
    vocabEx("Repaso de vocabulario — Semana 5", "Elige la opción correcta.", [
      mc("A funny film:", ["comedy", "horror film", "review"], 0, "comedy."),
      mc("A group of musicians:", ["band", "song", "concert"], 0, "band."),
      mc("A picture made with paint:", ["painting", "photograph", "sculpture"], 0, "painting."),
      mc("A gift for someone:", ["present", "guest", "cake"], 0, "present."),
      mc("A live music event:", ["concert", "album", "lyrics"], 0, "concert."),
      mc("A show of art for a short time:", ["exhibition", "review", "gallery"], 0, "exhibition."),
      mc("A person you invite to a party:", ["guest", "singer", "artist"], 0, "guest."),
      mc("The opposite of 'boring':", ["exciting", "loud", "famous"], 0, "exciting."),
    ]),

    READING_HEAD,
    READING_P1("Repaso — señales variadas", [
      mc("Sign: 'Exhibition closes at 6. Last entry 5:30.'", ["Enter before 5:30.", "Open all night.", "Closed."], 0, "'Last entry 5:30'."),
      mc("Text: 'I've just bought concert tickets! So excited!'", ["Bought tickets.", "No tickets.", "Cancelled."], 0, "'I've just bought'."),
      mc("Notice: 'Party room booked for Saturday evening.'", ["Room reserved Saturday.", "No booking.", "Room free."], 0, "'booked for Saturday'."),
      mc("Label: 'Free museum guide — please return after use.'", ["Return the guide after using it.", "Keep the guide.", "No guides."], 0, "'please return'."),
      mc("Sign: 'No food or drink in the gallery.'", ["Don't eat or drink here.", "Food allowed.", "Gallery closed."], 0, "'No food or drink'."),
      mc("Card: 'Congratulations on your wedding!'", ["A wedding card.", "A birthday card.", "A get-well card."], 0, "'your wedding'."),
    ]),
    reading(2, "Reading · Parte 2 — Emparejar personas y planes", "THREE EVENING PLANS\n\nA) Live Music Bar — a small band plays every night. Relaxed, with good food and drinks.\n\nB) Cinema Marathon — three films in one evening, with breaks. For real film fans.\n\nC) Art Class — paint a picture in two hours, take it home. Fun and creative, no experience needed.", "Empareja cada persona con el plan ideal (A/B/C).", [
      mc("Someone who loves relaxed live music and food.", ["A", "B", "C"], 0, "Live Music Bar."),
      mc("A big film fan who wants to watch several films.", ["A", "B", "C"], 1, "Cinema Marathon."),
      mc("Someone who wants to be creative and paint.", ["A", "B", "C"], 2, "Art Class."),
      mc("A beginner who wants to try painting.", ["A", "B", "C"], 2, "C: no experience."),
      mc("A person who wants a chilled evening with music.", ["A", "B", "C"], 0, "A."),
      mc("Someone who wants to watch three films.", ["A", "B", "C"], 1, "B."),
      mc("A creative person who wants to take art home.", ["A", "B", "C"], 2, "C."),
    ]),
    reading(3, "Reading · Parte 3 — Texto largo (comprensión)", "MY YEAR OF NEW EXPERIENCES\n\nThis year, I decided to try new things every month, and it has been amazing. In January, I went to my first opera — I've never understood opera before, but I loved the music. In March, I learned to paint, and now I've got three of my own paintings on my wall.\n\nIn the summer, I went to a huge music festival with my friends. I've been to small concerts before, but I've never seen so many people in one place! We camped for three days and listened to bands all night.\n\nThe best thing about this year is that I've discovered new hobbies and met wonderful people. I've already made a list of new things to try next year. Life is more exciting when you say 'yes' to new experiences.", "Lee el texto y responde (A/B/C).", [
      mc("What did the writer do in January?", ["Went to a concert.", "Went to the opera.", "Learned to paint."], 1, "'my first opera'."),
      mc("What does the writer have on their wall now?", ["Photos.", "Three paintings.", "Posters."], 1, "'three of my own paintings'."),
      mc("What was different about the music festival?", ["It was small.", "So many people.", "It rained."], 1, "'never seen so many people'."),
      mc("How long did they camp at the festival?", ["One day.", "Three days.", "A week."], 1, "'camped for three days'."),
      mc("What has the writer already made?", ["A painting.", "A list of new things to try.", "A band."], 1, "'a list of new things to try next year'."),
    ]),
    reading(4, "Reading · Parte 4 — Huecos con opciones", "This year I've tried lots of new things. I've (1)___ to my first opera and I've learned to (2)___. In summer I went to a music (3)___ with friends — I've never (4)___ so many people! We camped for three days. I've (5)___ made a list of new things to try next year. Life is more (6)___ when you say 'yes'!", "Elige la palabra correcta (A/B/C).", [
      mc("Hueco 1", ["been", "gone", "went"], 0, "'I've been to my first opera'."),
      mc("Hueco 2", ["paint", "painting", "painted"], 0, "'learned to paint'."),
      mc("Hueco 3", ["festival", "concert", "band"], 0, "'a music festival'."),
      mc("Hueco 4", ["seen", "saw", "see"], 0, "'never seen'."),
      mc("Hueco 5", ["already", "yet", "ever"], 0, "'already made'."),
      mc("Hueco 6", ["exciting", "boring", "quiet"], 0, "'more exciting'."),
    ]),
    reading(5, "Reading · Parte 5 — Open cloze (una palabra)", "Hi Ivy,\nThis year has been amazing! I've tried lots of new things. I've (1)___ to the opera, learned (2)___ paint, and been (3)___ a huge music festival. I've never (4)___ so many people in one place! I've (5)___ made a list of things to try next year. You (6)___ join me — it's so much fun!\nLove,\nEva", "Escribe UNA palabra en cada hueco.", [
      fb("Hueco 1", ["been"], "'I've been to the opera'."),
      fb("Hueco 2", ["to"], "'learned to paint'."),
      fb("Hueco 3", ["to"], "'been to a festival'."),
      fb("Hueco 4", ["seen"], "'never seen'."),
      fb("Hueco 5", ["already"], "'already made'."),
      fb("Hueco 6", ["should", "must", "could", "can"], "sugerencia."),
    ]),

    WRITING_HEAD,
    writing(6, "Writing · Parte 6 — Una experiencia nueva", "Tu amigo/a inglés/a quiere saber de algo nuevo que has probado este año. Escríbele un email (25 palabras o más) con:\n· qué has probado,\n· cómo fue,\n· si lo recomiendas y por qué.", 25, 80),
    writing(7, "Writing · Parte 7 — Un relato con 3 imágenes", "Escribe un relato (35 palabras o más) con estas TRES imágenes:\n1) Una persona prueba algo nuevo por primera vez (pintar, cantar…).\n2) Al principio le cuesta.\n3) Al final lo consigue y está muy contenta.\nUsa el PASADO y conectores (first, then, finally).", 35, 100),

    LISTENING_HEAD,
    listening(5, "Listening · Parte 5 — Emparejar", "Escucha a Lia hablar de lo que ha hecho cada miembro de su familia este año y empareja cada persona con su actividad (A/B/C…).", "This is Part Five. You will hear Lia talking about what her family has done this year. My mother has learned to paint, and she's really good now. My father has been to three concerts, because he loves live music. My brother has started a band with his friends. My sister has visited five museums for her art project. And my grandmother has taken up photography and takes photos everywhere.", [
      mc("Mother", ["painting", "concerts", "a band"], 0, "'learned to paint'."),
      mc("Father", ["concerts", "museums", "photography"], 0, "'been to three concerts'."),
      mc("Brother", ["a band", "painting", "museums"], 0, "'started a band'."),
      mc("Sister", ["museums", "a band", "concerts"], 0, "'visited five museums'."),
      mc("Grandmother", ["photography", "painting", "a band"], 0, "'taken up photography'."),
    ]),

    SPEAKING_HEAD,
    speaking(1, "Speaking · Parte 1 — Repaso de preguntas personales", "Responde por el micrófono con frases completas.", "Parte 1 del A2 Key: repaso — habla de experiencias que has tenido (conciertos, museos, viajes) y de cuánto tiempo llevas con una afición", "usar el present perfect con soltura", "I've been to, I've never, for … years, since, my favourite"),
    speaking(2, "Speaking · Parte 2 — Gustos y razones", "Da siempre una razón con 'because'.", "Parte 2 del A2 Key: gustos sobre cómo pasar el tiempo libre (cine, música, arte); el examinador pregunta qué prefieres y por qué", "expresar preferencias y dar razones", "I prefer, I like, because, exciting, my favourite"),

    SUMMARY("Resumen de la Semana 5", [
      "Dominas el present perfect: experiencias (ever/never), just/already/yet, for/since.",
      "Distingues present perfect y past simple.",
      "Has practicado las 4 destrezas cada día. Ahora, el mini-simulacro.",
      "La semana que viene: repaso general de medio curso y examen de progreso.",
    ]),
    INFO("Mini-simulacro de la Semana 5", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana (Reading y Listening). Aprueba con un 60%. Vas por la mitad del curso: ¡buen trabajo!"),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "Experiencias (present perfect)",
  description: "Present perfect (ever/never, just/already/yet, for/since) y su contraste con el past simple. Cada día, las 4 destrezas con formato Cambridge.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
