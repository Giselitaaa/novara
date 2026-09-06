/**
 * B1 Preliminary · Semana 11 — "Ciencia, naturaleza y el mundo".
 * Gramática: repaso y ampliación de relativas (reducidas), estructuras
 * impersonales (it is said that / are believed to), comparación avanzada y más
 * phrasal verbs. Cada día, las 4 destrezas con el formato real del B1.
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, reading, gappedText, writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD,
  READING_P1, mc, fb,
} from "./_lib.mjs";

const readingParts = ({ p1, p2text, p2q, p3text, p3q, p4text, p4options, p4q, p5text, p5q, p6text, p6q }) => [
  READING_HEAD,
  READING_P1(p1.title, p1.items),
  reading(2, `Reading · Parte 2 — ${p2q.title}`, p2text, "Lee lo que quiere cada persona y elige el texto que le conviene (A/B/C…).", p2q.items),
  reading(3, `Reading · Parte 3 — ${p3q.title}`, p3text, "Lee el texto largo y responde (A/B/C/D).", p3q.items),
  gappedText(p4q.title, p4text, p4options, p4q.items),
  reading(5, `Reading · Parte 5 — ${p5q.title}`, p5text, "Elige la palabra correcta (A/B/C/D) para cada hueco.", p5q.items),
  reading(6, `Reading · Parte 6 — ${p6q.title}`, p6text, "Escribe UNA palabra en cada hueco (gramática).", p6q.items),
];

const speakingParts = (topic, { p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista personal", "Responde por el micrófono con frases completas y detalles.", `Parte 1 del B1: el examinador te hace preguntas personales (${p1})`, "responder con detalle", "I think, I'm interested in, it depends, because"),
  speaking(2, "Speaking · Parte 2 — Describe una foto", "Describe la foto durante ~1 minuto.", `Parte 2 del B1: describir una fotografía sobre ${p2}`, "describir una imagen con detalle", "there is, there are, they're … -ing, it looks, in the background"),
  speaking(3, "Speaking · Parte 3 — Decidir juntos", "Habla con el examinador para decidir juntos; haz sugerencias y reacciona.", `Parte 3 del B1: tú y el examinador debéis decidir juntos ${p3}`, "sugerir, comparar opciones y acordar", "how about, we could, why don't we, I'd rather, let's"),
  speaking(4, "Speaking · Parte 4 — Conversación general", "Conversa dando opiniones y razones.", `Parte 4 del B1: conversación general sobre ${p4}`, "dar opiniones y razones", "in my opinion, I think, because, for example, on the other hand"),
];

// ───────────────────────── DÍA 51 ─────────────────────────
const DAY51 = {
  title: "Día 51 — Relativas (repaso y reducidas) · Los animales",
  description: "Repaso de relativas y relativas reducidas (the man sitting…, the book written…). Vocabulario de animales. Las 4 destrezas con formato B1; Listening P1.",
  pedagogy: {
    objective: "Usar relativas y reducirlas con participios cuando es posible.",
    summary: "Relativas reducidas; los animales; Reading P1–P6, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'the man who is sitting' → reducir a 'sitting'.", "which vs that.", "duplicar sujeto."],
    reviewPrompts: ["¿Cómo reduces 'the boy who is playing'?", "¿'the letter which was written' →?"],
  },
  items: [
    TEXT("🔁 Semana 11 (¡penúltima!). Hoy repasamos las RELATIVAS y aprendemos a REDUCIRLAS con participios. Vocabulario: los ANIMALES."),
    GRAMMAR("Relativas y relativas reducidas", `REPASO: who (personas), which (cosas), that (ambos, especificativas), where (lugar), whose (posesión).
RELATIVAS REDUCIDAS (más naturales): cuando la relativa lleva 'be', se puede quitar el relativo + be:
· ACTIVO → participio -ing: The man who is sitting there → The man sitting there.
· PASIVO → participio pasado: The book which was written by her → The book written by her.
· The people waiting outside (= who are waiting). The car parked in the street (= which is parked).
Esto hace las descripciones más fluidas, muy útil en el Writing.
⚠️ Solo se reduce con 'be' (continuo o pasiva). No se reduce 'The man who lives here' (no hay be).`),
    WARN("Errores típicos del hispanohablante", "· ❌ the man which lives → ✅ who lives.\n· ❌ the boy who he is tall → ✅ who is tall.\n· Reducir bien: 'the woman talking to Sam' (= who is talking).\n· 'the report written yesterday' (= which was written)."),
    grammarEx("Gramática — Relativas y reducidas", "Completa, reduce o elige.", [
      fb("The man ___ lives next door is a vet. (persona)", ["who", "that"], "who/that."),
      fb("Reduce: 'The boy who is playing' → 'The boy ___'.", ["playing"], "reducción -ing."),
      fb("Reduce: 'The book which was written by her' → 'The book ___ by her'.", ["written"], "reducción participio."),
      mc("Choose (reduced):", ["The people who waiting outside.", "The people waiting outside.", "The people they waiting outside."], 1, "reduced relative."),
      fb("That's the animal ___ tail is very long. (posesión)", ["whose"], "whose."),
      mc("Choose:", ["The car parked outside is mine.", "The car who parked outside is mine.", "The car parking outside is mine."], 0, "reduced pasiva."),
      fb("This is the forest ___ many animals live. (lugar)", ["where"], "where."),
    ]),
    GRAMMAR("Vocabulario del día — Los animales", "Léxico de animales y naturaleza (B1)."),
    deck("B1 S11D51 — Los animales", [
      ["wildlife", "fauna / vida salvaje", "The area is rich in wildlife.", "sustantivo", "ˈwaɪldlaɪf"],
      ["species", "especie", "It's an endangered species.", "sustantivo", "ˈspiːʃiːz"],
      ["habitat", "hábitat", "Pollution destroys their habitat.", "sustantivo", "ˈhæbɪtæt"],
      ["extinct", "extinto/a", "The animal is nearly extinct.", "adjetivo", "ɪkˈstɪŋkt"],
      ["mammal", "mamífero", "Whales are mammals.", "sustantivo", "ˈmæml"],
      ["predator", "depredador", "Lions are top predators.", "sustantivo", "ˈpredətə"],
      ["survive", "sobrevivir", "Few of them survive in the wild.", "verbo", "səˈvaɪv"],
      ["protect", "proteger", "We must protect these animals.", "verbo", "prəˈtekt"],
      ["creature", "criatura / ser", "It's a fascinating creature.", "sustantivo", "ˈkriːtʃə"],
      ["breed", "criar / reproducirse", "They breed in spring.", "verbo", "briːd"],
    ]),
    vocabEx("Vocabulario — Los animales", "Elige la opción correcta.", [
      mc("The natural home of an animal is its ___.", ["habitat", "species", "predator"], 0, "habitat."),
      mc("An animal that no longer exists is ___.", ["extinct", "endangered", "wild"], 0, "extinct."),
      mc("A type of animal or plant is a ___.", ["species", "creature", "mammal"], 0, "species."),
      mc("An animal that hunts others is a ___.", ["predator", "mammal", "habitat"], 0, "predator."),
      mc("Animals like cats, whales and humans are ___.", ["mammals", "species", "predators"], 0, "mammals."),
      mc("To keep an animal safe from harm is to ___ it.", ["protect", "survive", "breed"], 0, "protect."),
    ]),

    ...readingParts({
      p1: { title: "Naturaleza y avisos", items: [
        mc("Sign: 'Please do not feed the animals in the park.'", ["Don't feed the animals.", "Feed them.", "No animals."], 0, "'do not feed the animals'."),
        mc("Notice: 'This species is protected by law.'", ["The species is legally protected.", "You can hunt it.", "It's extinct."], 0, "'protected by law'."),
        mc("Text: 'Pollution is destroying the birds' habitat.'", ["Their home is being harmed.", "The birds are fine.", "No pollution."], 0, "'destroying the birds' habitat'."),
        mc("Poster: 'Volunteers needed to protect local wildlife.'", ["Help wanted to protect wildlife.", "No volunteers.", "Hunt wildlife."], 0, "'Volunteers needed to protect… wildlife'."),
        mc("Warning: 'These animals, once common, are now endangered.'", ["They are now at risk.", "They are common.", "They are safe."], 0, "'now endangered'."),
      ] },
      p2text: "FOUR WILDLIFE PROJECTS\n\nA) Ocean Guardians — protecting sea creatures whose habitats are threatened by plastic.\nB) Forest Friends — planting trees to save the homes of animals living in the woods.\nC) Bee Rescue — helping the tiny insects on which so much of our food depends.\nD) Big Cat Sanctuary — caring for large predators rescued from illegal captivity.",
      p2q: { title: "Emparejar personas y proyectos", items: [
        mc("Nadia loves the ocean and worries about plastic.", ["A", "B", "C", "D"], 0, "Ocean Guardians."),
        mc("Ben wants to plant trees and save forests.", ["A", "B", "C", "D"], 1, "Forest Friends."),
        mc("Sara is fascinated by insects and how they help our food.", ["A", "B", "C", "D"], 2, "Bee Rescue."),
        mc("Leo wants to help big animals like lions and tigers.", ["A", "B", "C", "D"], 3, "Big Cat Sanctuary."),
        mc("A project about creatures threatened by plastic.", ["A", "B", "C", "D"], 0, "A."),
      ] },
      p3text: "THE CREATURES WE FORGET\n\nWhen we think about protecting wildlife, we usually picture large, beautiful animals: tigers, elephants, whales. These are the creatures printed on charity posters and featured in nature films. But some scientists argue that our love for these 'celebrity' animals blinds us to a much bigger problem. The creatures most important to our survival are often the ones we ignore, or even dislike.\n\nConsider the humble bee. Bees are not cuddly, and many people are frightened of them. Yet these tiny insects, working quietly in the background, are responsible for pollinating a huge proportion of the crops that feed the world. Without the bees busily moving from flower to flower, many of the fruits and vegetables we eat every day would simply disappear. The same is true of other unglamorous creatures, from the worms that keep our soil healthy to the bats that eat millions of insect pests. These are the animals on which entire ecosystems, and our own food supply, quietly depend.\n\nThe lesson is an important one. Protecting nature isn't only about saving the beautiful animals we happen to find appealing. It's about understanding that all living things are connected in a web so complex that we are only beginning to understand it. When one species disappears, the effects can spread in ways nobody expected. So the next time you see a bee, a worm or a spider, try to feel a little gratitude instead of fear. These are not pests to be swatted away. They are the small, hard-working creatures on which the whole natural world, ourselves included, ultimately depends.",
      p3q: { title: "Las criaturas que olvidamos (texto largo)", items: [
        mc("Which animals do we usually picture protecting?", ["Insects.", "Large, beautiful animals like tigers.", "Worms."], 1, "'tigers, elephants, whales'."),
        mc("What are bees responsible for?", ["Making honey only.", "Pollinating a huge proportion of crops.", "Nothing useful."], 1, "'pollinating a huge proportion of the crops'."),
        mc("What do worms do?", ["Eat crops.", "Keep our soil healthy.", "Nothing."], 1, "'the worms that keep our soil healthy'."),
        mc("What happens when one species disappears?", ["Nothing.", "The effects can spread unexpectedly.", "It's always good."], 1, "'the effects can spread in ways nobody expected'."),
        mc("What does the writer suggest we feel when we see a bee?", ["Fear.", "Gratitude.", "Anger."], 1, "'feel a little gratitude instead of fear'."),
      ] },
      p4text: "THE OWL IN THE GARDEN\n\nOne evening last autumn, I heard a strange sound coming from the tree at the bottom of my garden. (1)___ Looking up, I saw a small owl, perched silently on a branch, staring straight at me with enormous eyes.\n\nI stood completely still, afraid that any movement would frighten it away. (2)___ For several magical minutes, we simply looked at each other. It was a wild creature, living its own secret life just metres from my back door, and I had never even known it was there. (3)___ Eventually, it spread its wings and flew off into the darkness without a sound.\n\nThat brief encounter changed something in me. (4)___ I began to notice the wildlife all around my ordinary suburban home: the hedgehogs, the foxes, the countless birds. I realised that nature isn't only found in distant jungles and famous nature films. (5)___ It's right outside our windows, waiting quietly to be noticed, if only we take the time to look.",
      p4options: [
        "It was a sound I had never heard before.",                 // A -> gap 1
        "I hardly dared to breathe.",                               // B -> gap 2
        "I felt incredibly lucky to see it.",                       // C -> gap 3
        "Suddenly, my garden seemed full of hidden life.",          // D -> gap 4
        "I chased the owl out of the garden.",                      // E (extra)
        "Wonder, it turns out, is closer than we think.",           // F -> gap 5
        "There has never been any wildlife near my home.",          // G (extra)
        "The owl was actually a plastic toy.",                      // H (extra)
      ],
      p4q: { title: "El búho del jardín (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: un sonido nunca oído."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: apenas se atrevía a respirar."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: se sintió muy afortunado."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: el jardín parecía lleno de vida."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: el asombro está más cerca de lo que creemos."),
      ] },
      p5text: "Many animals are in danger because their (1)___ are being destroyed. Some (2)___ that were once common are now nearly (3)___. It's important to (4)___ wildlife before it's too late. Even the small creatures (5)___ we often ignore, like bees, play a vital role. Without the insects (6)___ from flower to flower, much of our food would disappear. We are all connected in nature's web.",
      p5q: { title: "Huecos con opciones (vocabulario/relativas)", items: [
        mc("Hueco 1", ["habitats", "predators", "species", "creatures"], 0, "'their habitats'."),
        mc("Hueco 2", ["species", "habitats", "predators", "mammals"], 0, "'some species'."),
        mc("Hueco 3", ["extinct", "endangered", "wild", "protected"], 0, "'nearly extinct'."),
        mc("Hueco 4", ["protect", "survive", "breed", "hunt"], 0, "'protect wildlife'."),
        mc("Hueco 5", ["that", "who", "where", "whose"], 0, "'creatures that we ignore'."),
        mc("Hueco 6", ["moving", "moved", "move", "moves"], 0, "reduced relative → 'insects moving from flower to flower'."),
      ] },
      p6text: "Hi Sam,\nSomething amazing happened — I saw a wild owl (1)___ in the tree in my garden! I stood completely still, afraid (2)___ frighten it. It's a wild creature (3)___ lives right outside my door, and I never knew! Since then, I've started noticing all the wildlife (4)___ my home: hedgehogs, foxes, birds. I've realised that nature isn't only found in jungles — it's all around us, waiting (5)___ be noticed. We really must (6)___ these animals. Do you ever see wildlife near you?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["sitting", "perched"], "reduced relative → 'an owl sitting in the tree'."),
        fb("Hueco 2", ["to"], "'afraid to frighten it'."),
        fb("Hueco 3", ["that", "which", "who"], "'a creature that lives'."),
        fb("Hueco 4", ["around", "near"], "'all the wildlife around my home'."),
        fb("Hueco 5", ["to"], "'waiting to be noticed'."),
        fb("Hueco 6", ["protect"], "'we must protect these animals'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por los animales de tu zona. Responde a su email (~100 palabras):\n· cuenta qué animales hay cerca de tu casa,\n· di si crees que están protegidos,\n· pregúntale por la fauna de su país.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why should we protect wild animals?' con tu opinión.\n· RELATO: empieza con: 'I heard a strange sound coming from the tree at the bottom of the garden.'", 80, 130),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Siete audios cortos", "Escucha los audios cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part One. You will hear people in seven situations. One. Woman: What did you see on the safari? Man: A lion, sitting under a tree. Two. Man: Are these animals safe? Woman: No, they're an endangered species. Three. Woman: Why are bees so important? Man: They pollinate our crops. Four. Man: What's destroying their habitat? Woman: Mostly pollution. Five. Man: Did you feed the ducks? Woman: No, the sign said not to. Six. Woman: What's that creature? Man: It's a bat — it eats insects. Seven. Man: Can we save them? Woman: Yes, if we protect their forests.", [
      mc("1. What did the man see on the safari?", ["An elephant.", "A lion under a tree.", "A bird."], 1, "'A lion, sitting under a tree'."),
      mc("2. Are these animals safe?", ["Yes.", "No, they're endangered.", "They're extinct."], 1, "'they're an endangered species'."),
      mc("3. Why are bees important?", ["They make honey.", "They pollinate crops.", "They're pretty."], 1, "'They pollinate our crops'."),
      mc("4. What's destroying their habitat?", ["Hunting.", "Pollution.", "Weather."], 1, "'Mostly pollution'."),
      mc("5. Did the woman feed the ducks?", ["Yes.", "No, the sign said not to.", "A little."], 1, "'the sign said not to'."),
      mc("6. What is the creature?", ["A bird.", "A bat that eats insects.", "An owl."], 1, "'It's a bat — it eats insects'."),
      mc("7. How can we save them?", ["We can't.", "By protecting their forests.", "By feeding them."], 1, "'if we protect their forests'."),
    ]),

    ...speakingParts("los animales y la naturaleza", { p1: "qué animales te gustan, si tienes mascota y si te preocupa la naturaleza", p2: "una foto de animales o de un paisaje natural", p3: "qué proyecto para proteger la naturaleza apoyar en vuestra zona", p4: "los animales, por qué debemos protegerlos y el equilibrio de la naturaleza" }),

    SUMMARY("Resumen del Día 51", [
      "Relativas: who/which/that/where/whose. Reducidas: quitar 'who/which + be' → participio (sitting / written).",
      "Las reducidas dan fluidez al Writing.",
      "Vocabulario de animales. Practicadas las 6 partes de Reading, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 52", "Reduce 4 relativas a participio. Repasa las flashcards. Mañana: estructuras impersonales (it is said that…)."),
  ],
};

// ───────────────────────── DÍA 52 ─────────────────────────
const DAY52 = {
  title: "Día 52 — Estructuras impersonales · La ciencia",
  description: "It is said that… / are believed to… (voz pasiva impersonal). Vocabulario de ciencia. Las 4 destrezas con formato B1; Listening P2.",
  pedagogy: {
    objective: "Informar de creencias generales con estructuras impersonales.",
    summary: "Estructuras impersonales; la ciencia; Reading P1–P6, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'It is said that + infinitivo'.", "orden en 'are believed to'.", "'people says'."],
    reviewPrompts: ["¿Cómo dices 'se dice que…'?", "¿'It is believed that he is…' → forma con 'to'?"],
  },
  items: [
    TEXT("🔁 Repaso: relativas. Hoy las ESTRUCTURAS IMPERSONALES (se dice que…, se cree que…): muy útiles para informar y para el Reading. Vocabulario: la CIENCIA."),
    GRAMMAR("Estructuras impersonales", `Para informar de lo que la gente dice/cree en general, sin decir quién:
1) IT + is/was + participio + THAT + frase:
· It is said that coffee is good for you. It is believed that the pyramids are 4,500 years old. It is thought that…
2) Sujeto + is/was + participio + TO + infinitivo:
· Coffee is said to be good for you. The pyramids are believed to be 4,500 years old.
· Para el pasado: to have + participio → He is believed to have left the country.
Verbos típicos: say, believe, think, know, expect, report, consider.
Son muy frecuentes en noticias y textos científicos.`),
    WARN("Errores típicos del hispanohablante", "· ❌ People says that → ✅ It is said that / People say that.\n· ❌ It is said to coffee is good → ✅ It is said that coffee is good / Coffee is said to be good.\n· Pasado: 'is believed to have been' (no 'to was').\n· 'It is thought that…' + frase completa."),
    grammarEx("Gramática — Estructuras impersonales", "Transforma o elige.", [
      fb("People say coffee is healthy. → It is ___ that coffee is healthy.", ["said"], "It is said that."),
      fb("People believe he is rich. → He is ___ to be rich.", ["believed"], "is believed to be."),
      mc("Choose:", ["It is said to the water is clean.", "It is said that the water is clean.", "It is said the water clean."], 1, "It is said THAT + frase."),
      fb("They think the painting is very old. → The painting is ___ to be very old.", ["thought"], "is thought to be."),
      fb("People say he left the country. → He is said to ___ ___ the country. (pasado)", ["have left"], "to have + participio."),
      mc("Choose:", ["The site is believed to be 2,000 years old.", "The site is believed be 2,000 years old.", "The site believed to 2,000 years old."], 0, "is believed TO be."),
      fb("It is ___ that exercise reduces stress. (se sabe)", ["known"], "It is known that."),
    ]),
    GRAMMAR("Vocabulario del día — La ciencia", "Léxico de ciencia (B1)."),
    deck("B1 S11D52 — La ciencia", [
      ["research", "investigación", "The research took years.", "sustantivo", "rɪˈsɜːtʃ"],
      ["experiment", "experimento", "They carried out an experiment.", "sustantivo", "ɪkˈsperɪmənt"],
      ["discovery", "descubrimiento", "It was an important discovery.", "sustantivo", "dɪˈskʌvəri"],
      ["evidence", "pruebas / evidencia", "There's strong evidence for it.", "sustantivo", "ˈevɪdəns"],
      ["prove", "demostrar / probar", "Science can't prove everything.", "verbo", "pruːv"],
      ["theory", "teoría", "It's just a theory.", "sustantivo", "ˈθɪəri"],
      ["laboratory", "laboratorio", "They work in a laboratory.", "sustantivo", "ləˈbɒrətri"],
      ["develop", "desarrollar", "Scientists developed a vaccine.", "verbo", "dɪˈveləp"],
      ["result", "resultado", "The results were surprising.", "sustantivo", "rɪˈzʌlt"],
      ["breakthrough", "avance / gran hallazgo", "It was a major breakthrough.", "sustantivo", "ˈbreɪkθruː"],
    ]),
    vocabEx("Vocabulario — La ciencia", "Elige la opción correcta.", [
      mc("A careful study to find out facts is ___.", ["research", "theory", "result"], 0, "research."),
      mc("A test done to learn something is an ___.", ["experiment", "evidence", "discovery"], 0, "experiment."),
      mc("Facts that support an idea are ___.", ["evidence", "theory", "result"], 0, "evidence."),
      mc("An important new finding or advance is a ___.", ["breakthrough", "laboratory", "result"], 0, "breakthrough."),
      mc("To show that something is true is to ___ it.", ["prove", "develop", "result"], 0, "prove."),
      mc("An idea that explains something but isn't proven is a ___.", ["theory", "result", "evidence"], 0, "theory."),
    ]),

    ...readingParts({
      p1: { title: "Ciencia y avisos", items: [
        mc("Headline: 'New research proves exercise reduces stress.'", ["Research shows exercise helps stress.", "Exercise causes stress.", "No research."], 0, "'research proves exercise reduces stress'."),
        mc("Note: 'It is believed that the vaccine is safe.'", ["The vaccine is thought to be safe.", "It's dangerous.", "No vaccine."], 0, "'believed that the vaccine is safe'."),
        mc("Sign: 'Laboratory — authorised staff only.'", ["Only staff may enter the lab.", "Everyone welcome.", "No lab."], 0, "'authorised staff only'."),
        mc("Text: 'The experiment produced surprising results.'", ["The results were surprising.", "No results.", "It failed."], 0, "'surprising results'."),
        mc("Report: 'This discovery is considered a major breakthrough.'", ["An important advance.", "A small step.", "A failure."], 0, "'considered a major breakthrough'."),
      ] },
      p2text: "FOUR SCIENCE PODCASTS\n\nA) The Big Questions — exploring the mysteries of space and the universe.\nB) Body Matters — the latest research on health, food and the human body.\nC) Curious Minds — surprising everyday science that explains how ordinary things work.\nD) Future World — how new technology is believed to change the way we live.",
      p2q: { title: "Emparejar personas y podcasts", items: [
        mc("Nadia is fascinated by space and the universe.", ["A", "B", "C", "D"], 0, "The Big Questions."),
        mc("Ben wants to understand the latest health research.", ["A", "B", "C", "D"], 1, "Body Matters."),
        mc("Sara loves learning how everyday things work.", ["A", "B", "C", "D"], 2, "Curious Minds."),
        mc("Leo is interested in future technology.", ["A", "B", "C", "D"], 3, "Future World."),
        mc("A podcast about how ordinary things work.", ["A", "B", "C", "D"], 2, "C."),
      ] },
      p3text: "THE SLOW SCIENCE OF DISCOVERY\n\nWe often imagine scientific discovery as a single, dramatic moment: a scientist shouting 'Eureka!' as a brilliant idea suddenly appears. It makes an exciting story, but it's almost always false. In reality, science is a slow, patient and often frustrating process, and understanding this is more important than ever.\n\nA real discovery usually begins not with an answer, but with a question and a great deal of careful work. A scientist forms a theory, then designs experiments to test it. Most of these experiments fail. The results are studied, the theory is adjusted, and the whole process begins again, often for many years. What is popularly reported as an 'overnight breakthrough' is usually the result of decades of quiet effort by hundreds of people, most of whom will never be famous. It is said that the scientist Thomas Edison tried thousands of different materials before he found one that worked in his light bulb. When asked about his failures, he supposedly replied that he hadn't failed; he had simply found thousands of ways that didn't work.\n\nThis matters because we live in a world that expects instant answers. When scientists say they are 'not yet certain', or that 'more research is needed', some people take this as a sign of weakness or confusion. In fact, it is the opposite. Honest uncertainty, and a willingness to follow the evidence wherever it leads, are the very things that make science so powerful. The next time you hear about an exciting new discovery, remember the years of patient, invisible work behind it. That, not the myth of the sudden 'Eureka!' moment, is the true and rather beautiful story of how human knowledge grows.",
      p3q: { title: "La ciencia lenta del descubrimiento (texto largo)", items: [
        mc("How do we often imagine scientific discovery?", ["Slow and patient.", "A single dramatic 'Eureka!' moment.", "Boring."], 1, "'a single, dramatic moment… \"Eureka!\"'"),
        mc("What does a real discovery usually begin with?", ["An answer.", "A question and careful work.", "Fame."], 1, "'a question and a great deal of careful work'."),
        mc("What is an 'overnight breakthrough' usually the result of?", ["Luck.", "Decades of quiet effort by many people.", "One genius."], 1, "'decades of quiet effort by hundreds of people'."),
        mc("What did Edison supposedly say about his failures?", ["He gave up.", "He'd found thousands of ways that didn't work.", "He never failed to try."], 1, "'found thousands of ways that didn't work'."),
        mc("What makes science powerful, according to the writer?", ["Certainty.", "Honest uncertainty and following the evidence.", "Speed."], 1, "'Honest uncertainty, and a willingness to follow the evidence'."),
      ] },
      p4text: "THE EXPERIMENT THAT FAILED\n\nFor my final school science project, I decided to grow plants using different kinds of music. (1)___ My theory was that classical music would help them grow faster, and I was absolutely certain I was right.\n\nI set up my experiment carefully, with several plants in identical pots. (2)___ Every day for two months, I measured them, recorded the results, and waited excitedly for my theory to be proved. But as the weeks passed, something became painfully clear. (3)___ The plants that listened to music grew at exactly the same rate as the ones kept in silence. My beautiful theory was simply wrong.\n\nAt first, I was bitterly disappointed, and I even thought about changing my results. (4)___ But my teacher said something I have never forgotten. She told me that an experiment which disproves your theory isn't a failure at all — it's a success, because you have discovered something true. (5)___ I wrote up my honest, 'failed' results, and to my surprise, it was one of the best marks in the class. I learned that in science, the truth matters more than being right.",
      p4options: [
        "I had read that plants respond to sound.",                 // A -> gap 1
        "I was determined to do everything properly.",             // B -> gap 2
        "There was no difference whatsoever.",                     // C -> gap 3
        "It was tempting to pretend I'd been right.",              // D -> gap 4
        "The plants immediately started to sing.",                 // E (extra)
        "That lesson taught me what science really means.",         // F -> gap 5
        "I had never been interested in plants at all.",            // G (extra)
        "The experiment proved my theory perfectly.",              // H (extra)
      ],
      p4q: { title: "El experimento que falló (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: había leído que las plantas responden al sonido."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: decidido a hacerlo bien."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: no había ninguna diferencia."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: tentador fingir tener razón."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: le enseñó qué es la ciencia."),
      ] },
      p5text: "Science moves forward slowly. A scientist forms a (1)___, then designs an (2)___ to test it. Often, the (3)___ show that the idea was wrong, and the work begins again. It (4)___ said that great discoveries take years of patient effort. When you finally find strong (5)___ for an idea, it feels wonderful. But even a 'failed' experiment is useful, because it (6)___ that one theory is not true.",
      p5q: { title: "Huecos con opciones (vocabulario/impersonal)", items: [
        mc("Hueco 1", ["theory", "result", "evidence", "discovery"], 0, "'forms a theory'."),
        mc("Hueco 2", ["experiment", "evidence", "result", "theory"], 0, "'designs an experiment'."),
        mc("Hueco 3", ["results", "theories", "experiments", "labs"], 0, "'the results show'."),
        mc("Hueco 4", ["is", "was", "has", "are"], 0, "'It is said that'."),
        mc("Hueco 5", ["evidence", "theory", "result", "discovery"], 0, "'strong evidence for an idea'."),
        mc("Hueco 6", ["proves", "believes", "researches", "develops"], 0, "'it proves that one theory is not true'."),
      ] },
      p6text: "Hi Sam,\nMy science project didn't go as planned! It (1)___ said that plants grow faster with music, so that was my theory. I did a careful (2)___ with several plants. But the (3)___ showed no difference at all — my theory was wrong! At first I was disappointed, but my teacher said an experiment which (4)___ believed to fail isn't really a failure, because you discover something true. So I wrote up my honest results. It (5)___ known that even 'failed' experiments help science move forward. I got a great mark! Science is (6)___ to be slow and patient — now I understand why.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["is", "was"], "'It is/was said that'."),
        fb("Hueco 2", ["experiment"], "'a careful experiment'."),
        fb("Hueco 3", ["results"], "'the results showed'."),
        fb("Hueco 4", ["is"], "'which is believed to fail'."),
        fb("Hueco 5", ["is"], "'It is known that'."),
        fb("Hueco 6", ["said", "believed", "thought"], "'Science is said to be slow'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te cuenta un dato científico curioso. Responde a su email (~100 palabras):\n· reacciona al dato (usa 'it is said that…' / 'is believed to…'),\n· cuenta un dato o descubrimiento que te sorprendió,\n· pregúntale si le gusta la ciencia.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is science important for everyone?' con tu opinión.\n· RELATO: empieza con: 'I was absolutely certain my experiment would prove my theory.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Is coffee good for you? Man: Well, it's said to have some benefits. Two. Man: Did your experiment work? Woman: No, the results proved my theory wrong. Three. Woman: How old is the site? Man: It's believed to be 3,000 years old. Four. Man: Was it a big discovery? Woman: Yes, a real breakthrough. Five. Man: Is there evidence for it? Woman: Not yet — more research is needed. Six. Woman: Where do they work? Man: In a laboratory near the university.", [
      mc("1. What is said about coffee?", ["It's bad.", "It's said to have some benefits.", "It's useless."], 1, "'it's said to have some benefits'."),
      mc("2. Did the experiment work?", ["Yes.", "No, it proved her theory wrong.", "Partly."], 1, "'the results proved my theory wrong'."),
      mc("3. How old is the site believed to be?", ["100 years.", "3,000 years.", "Unknown."], 1, "'believed to be 3,000 years old'."),
      mc("4. Was it a big discovery?", ["No.", "Yes, a real breakthrough.", "A small step."], 1, "'a real breakthrough'."),
      mc("5. Is there evidence for it?", ["Yes, lots.", "Not yet; more research is needed.", "No, never."], 1, "'more research is needed'."),
      mc("6. Where do they work?", ["At home.", "In a laboratory.", "Outdoors."], 1, "'In a laboratory'."),
    ]),

    ...speakingParts("la ciencia y los descubrimientos", { p1: "si te gusta la ciencia, qué descubrimiento te parece más importante y por qué", p2: "una foto relacionada con la ciencia (un laboratorio, el espacio, un experimento)", p3: "qué invento o descubrimiento explicar en un proyecto de clase", p4: "la ciencia, cómo cambia nuestras vidas y por qué es lenta y paciente" }),

    SUMMARY("Resumen del Día 52", [
      "Impersonales: It is said/believed/thought THAT + frase; Sujeto + is said/believed TO + infinitivo (o to have + participio).",
      "Muy útiles para informar y en textos científicos.",
      "Vocabulario de ciencia. Practicadas las 6 partes de Reading, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 53", "Escribe 3 frases impersonales (it is said that / is believed to). Repasa las flashcards. Mañana: comparación avanzada y descripción del mundo."),
  ],
};

// ───────────────────────── DÍA 53 ─────────────────────────
const DAY53 = {
  title: "Día 53 — Comparación avanzada y el planeta · El tiempo y el clima",
  description: "Repaso avanzado de comparativos/superlativos, the...the..., y adverbios. Vocabulario del tiempo. Las 4 destrezas con formato B1; Listening P3.",
  pedagogy: {
    objective: "Comparar con precisión y describir el mundo natural.",
    summary: "Comparación avanzada; el tiempo/clima; Reading P1–P6, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["'more hotter'.", "'the most driest'.", "adverbios comparativos (more quickly)."],
    reviewPrompts: ["¿Cómo intensificas un comparativo?", "¿Comparativo de un adverbio largo?"],
  },
  items: [
    TEXT("🔁 Repaso: impersonales. Hoy afinamos la COMPARACIÓN (adjetivos y adverbios) para describir el mundo. Vocabulario: el TIEMPO y el CLIMA."),
    GRAMMAR("Comparación avanzada", `ADJETIVOS: cortos + -er/-est (hotter, hottest); largos more/most (more beautiful). Irregulares: better/best, worse/worst, further/furthest.
INTENSIFICAR comparativos: much / far / a lot / slightly / a bit + comparativo (much hotter, a bit colder).
IGUALDAD: as + adjetivo + as; not as … as.
'THE …ER, THE …ER': The hotter it gets, the more people go to the beach.
ADVERBIOS: cortos + -er (faster, harder); -ly → more + adverbio (more quickly, more carefully). Irregulares: better, worse.
· She runs faster than me. He drives more carefully than his brother.
⚠️ No dobles: ❌ more hotter → ✅ hotter / much hotter.`),
    WARN("Errores típicos del hispanohablante", "· ❌ more hotter → ✅ hotter.\n· ❌ the most driest → ✅ the driest.\n· ❌ more quick → ✅ quicker / more quickly (adverbio).\n· ❌ as hotter as → ✅ as hot as."),
    grammarEx("Gramática — Comparación avanzada", "Completa o elige.", [
      fb("Today is ___ (hot) than yesterday.", ["hotter"], "corto → -er."),
      fb("This is the ___ (dry) summer for years.", ["driest"], "superlativo: driest."),
      fb("It's ___ (much/cold) today than yesterday.", ["much colder"], "much + comparativo."),
      mc("Choose (adverb):", ["She runs more quick.", "She runs more quickly.", "She runs quicklier."], 1, "adverbio -ly → more quickly."),
      fb("The ___ (hot) it gets, the ___ (much) ice cream we sell.", ["hotter", "more"], "the …er the …er."),
      mc("Choose:", ["He drives more careful than me.", "He drives more carefully than me.", "He drives carefuller than me."], 1, "adverbio → more carefully."),
      fb("It isn't ___ ___ (cold) as last winter.", ["as cold"], "as cold as."),
    ]),
    GRAMMAR("Vocabulario del día — El tiempo y el clima", "Léxico del tiempo (B1)."),
    deck("B1 S11D53 — El tiempo y el clima", [
      ["forecast", "pronóstico / previsión", "The forecast says rain.", "sustantivo", "ˈfɔːkɑːst"],
      ["temperature", "temperatura", "The temperature is rising.", "sustantivo", "ˈtemprətʃə"],
      ["humid", "húmedo/a", "It's very humid today.", "adjetivo", "ˈhjuːmɪd"],
      ["drought", "sequía", "The drought lasted months.", "sustantivo", "draʊt"],
      ["flood", "inundación / inundar", "The floods destroyed homes.", "sustantivo/verbo", "flʌd"],
      ["climate", "clima", "The climate is changing.", "sustantivo", "ˈklaɪmət"],
      ["storm", "tormenta", "A big storm is coming.", "sustantivo", "stɔːm"],
      ["mild", "templado/a / suave", "We had a mild winter.", "adjetivo", "maɪld"],
      ["freezing", "helador / gélido", "It's absolutely freezing!", "adjetivo", "ˈfriːzɪŋ"],
      ["heatwave", "ola de calor", "There's a heatwave this week.", "sustantivo", "ˈhiːtweɪv"],
    ]),
    vocabEx("Vocabulario — El tiempo y el clima", "Elige la opción correcta.", [
      mc("A prediction of tomorrow's weather is a ___.", ["forecast", "climate", "temperature"], 0, "forecast."),
      mc("A long period with no rain is a ___.", ["drought", "flood", "storm"], 0, "drought."),
      mc("When there's too much water covering the land, it's a ___.", ["flood", "drought", "heatwave"], 0, "flood."),
      mc("Weather that is not too hot or cold is ___.", ["mild", "freezing", "humid"], 0, "mild."),
      mc("A period of unusually hot weather is a ___.", ["heatwave", "drought", "storm"], 0, "heatwave."),
      mc("Air with a lot of water in it is ___.", ["humid", "mild", "freezing"], 0, "humid."),
    ]),

    ...readingParts({
      p1: { title: "El tiempo y avisos", items: [
        mc("Forecast: 'Tomorrow will be much colder than today.'", ["A big drop in temperature.", "Warmer.", "The same."], 0, "'much colder than today'."),
        mc("Warning: 'Flood warning — avoid the river path.'", ["Danger of flooding.", "No water.", "It's safe."], 0, "'Flood warning'."),
        mc("Note: 'It's the hottest summer on record.'", ["The hottest ever recorded.", "A cold summer.", "Average."], 0, "'hottest summer on record'."),
        mc("Sign: 'Heatwave — please drink plenty of water.'", ["Very hot; stay hydrated.", "It's freezing.", "No advice."], 0, "'Heatwave — drink plenty of water'."),
        mc("Text: 'The climate here is milder than in the north.'", ["Gentler weather than the north.", "Harsher.", "The same."], 0, "'milder than in the north'."),
      ] },
      p2text: "FOUR PLACES, FOUR CLIMATES\n\nA) The Tropical Coast — hot and humid all year, with heavy rain and warm seas.\nB) The Desert Town — the driest place in the country; scorching days and freezing nights.\nC) The Mountain Village — long, snowy winters and short, mild summers.\nD) The Green Valley — a gentle, mild climate with plenty of rain and rich farmland.",
      p2q: { title: "Emparejar personas y climas", items: [
        mc("Nadia loves warm seas and hot, humid weather.", ["A", "B", "C", "D"], 0, "The Tropical Coast."),
        mc("Ben is fascinated by extreme, dry landscapes.", ["A", "B", "C", "D"], 1, "The Desert Town."),
        mc("Sara loves snow and winter sports.", ["A", "B", "C", "D"], 2, "The Mountain Village."),
        mc("Leo wants a gentle climate for farming.", ["A", "B", "C", "D"], 3, "The Green Valley."),
        mc("The driest place, with big day-night temperature changes.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "A CHANGING CLIMATE\n\nWhen my grandfather was young, he says, you could set your calendar by the seasons. Spring arrived gently, summers were warm but rarely extreme, and winters brought reliable snow. Today, he tells me, the weather has become far less predictable, and the science suggests he is right. Our climate is changing faster than at almost any time in human history.\n\nThe evidence is all around us. Around the world, heatwaves are becoming hotter and more frequent, droughts last longer, and storms and floods are growing more severe. It is said that the ten hottest years ever recorded have all happened recently. Scientists are careful people who don't like to exaggerate, yet the great majority of them now agree that human activity, especially the burning of fuels, is the main cause. The more of these gases we release, the warmer the planet becomes, and the more extreme our weather grows.\n\nIt would be easy to feel helpless in the face of such a huge problem. But there are two important reasons for hope. First, we now understand the problem better than ever, which is the first step towards solving it. Second, the solutions already exist: cleaner energy, better transport and less waste. The question is no longer whether we can act, but whether we will act quickly enough. My grandfather's generation may have caused much of this problem without knowing it. Mine has no such excuse. The climate of the future, for better or worse, is being decided by the choices we all make today.",
      p3q: { title: "Un clima que cambia (texto largo)", items: [
        mc("What does the grandfather say about the past?", ["The weather was chaotic.", "You could rely on the seasons.", "It never snowed."], 1, "'you could set your calendar by the seasons'."),
        mc("What is the evidence of climate change?", ["Nothing.", "Hotter heatwaves, longer droughts, worse storms.", "Colder winters everywhere."], 1, "'heatwaves… hotter… droughts last longer… storms and floods… more severe'."),
        mc("What do most scientists now agree is the main cause?", ["The sun.", "Human activity, especially burning fuels.", "Nothing."], 1, "'human activity, especially the burning of fuels'."),
        mc("What is the first reason for hope?", ["We can't do anything.", "We understand the problem better than ever.", "It's not real."], 1, "'we now understand the problem better than ever'."),
        mc("Who is deciding the climate of the future?", ["Only scientists.", "Everyone, through today's choices.", "Nobody."], 1, "'the choices we all make today'."),
      ] },
      p4text: "THE SUMMER OF THE GREAT STORM\n\nThe summer I turned fifteen, our region experienced the most violent storm anyone could remember. (1)___ For weeks, the weather had been growing hotter and more humid, until the air itself seemed to be holding its breath.\n\nThen, one evening, the sky turned a strange, dark green. (2)___ The wind rose from nothing to a roar in a matter of minutes, and the rain fell harder than I had ever seen. Our little river, usually so gentle, rose higher and higher until it burst its banks. (3)___ By morning, the whole lower part of our town was under water.\n\nIn the difficult days that followed, however, I saw something I will never forget. (4)___ Neighbours who had barely spoken before worked side by side, filling sandbags and rescuing each other's belongings. Strangers opened their homes to families who had lost everything. The storm had shown nature at its most frightening, but it had also shown people at their very best. (5)___ Out of the worst disaster our town had ever seen came the strongest sense of community we had ever known.",
      p4options: [
        "The signs had been building for days.",                    // A -> gap 1
        "Everyone knew that something terrible was coming.",        // B -> gap 2
        "There was nothing anyone could do to stop it.",           // C -> gap 3
        "The whole community came together.",                       // D -> gap 4
        "Nobody in the town was affected at all.",                  // E (extra)
        "That terrible summer brought us all closer together.",     // F -> gap 5
        "The weather had been perfectly calm all year.",            // G (extra)
        "The river had completely dried up.",                       // H (extra)
      ],
      p4q: { title: "El verano de la gran tormenta (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: las señales llevaban días."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: todos sabían que venía algo terrible."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: nadie podía detenerlo."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: la comunidad se unió."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese verano los unió más."),
      ] },
      p5text: "Our weather is becoming more extreme. Summers are (1)___ than they used to be, and heatwaves last (2)___. In some places there are terrible (3)___ because it doesn't rain for months; in others, heavy rain causes (4)___. The (5)___ the planet gets, the more severe the weather becomes. It (6)___ said that the hottest years on record have all happened recently. We must act to protect our climate.",
      p5q: { title: "Huecos con opciones (comparación/vocabulario)", items: [
        mc("Hueco 1", ["hotter", "more hot", "hottest", "hot"], 0, "'hotter than they used to be'."),
        mc("Hueco 2", ["longer", "more long", "longest", "long"], 0, "'last longer'."),
        mc("Hueco 3", ["droughts", "floods", "storms", "forecasts"], 0, "'no rain for months' → droughts."),
        mc("Hueco 4", ["floods", "droughts", "heatwaves", "forecasts"], 0, "'heavy rain causes floods'."),
        mc("Hueco 5", ["hotter", "hot", "hottest", "more hot"], 0, "'The hotter the planet gets'."),
        mc("Hueco 6", ["is", "was", "has", "are"], 0, "'It is said that'."),
      ] },
      p6text: "Hi Sam,\nThe weather here has been crazy! This summer was the (1)___ (hot) I can remember, much (2)___ than last year. We even had a heatwave — it was absolutely (3)___! My grandfather says the climate is changing (4)___ (fast) than ever before. It (5)___ said that the hottest years have all been recent. The (6)___ the planet gets, the more extreme the weather becomes. It's a bit scary. What's the weather like where you are?\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["hottest"], "'the hottest I can remember'."),
        fb("Hueco 2", ["hotter"], "'much hotter than last year'."),
        fb("Hueco 3", ["boiling", "scorching", "unbearable"], "extremo (absolutely + extremo)."),
        fb("Hueco 4", ["faster"], "'changing faster than ever'."),
        fb("Hueco 5", ["is"], "'It is said that'."),
        fb("Hueco 6", ["hotter"], "'The hotter the planet gets'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a te pregunta por el tiempo en tu zona. Responde a su email (~100 palabras):\n· describe el clima de tu región (usa comparativos),\n· cuenta si ha cambiado en los últimos años,\n· pregúntale por el tiempo en su país.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'What can we do about climate change?' con tu opinión.\n· RELATO: empieza con: 'The sky turned a strange, dark green.'", 80, 130),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Rellenar huecos", "Escucha un pronóstico del tiempo y completa las notas con UNA palabra o número en cada hueco (se oye dos veces).", "This is Part Three. You will hear a weather forecast. Good evening, and here is the weather for tomorrow. It will be much colder than today, with temperatures falling to just three degrees. In the morning, there will be heavy rain, so please take an umbrella. In the afternoon, the rain will stop, but strong winds are expected. There is also a flood warning for areas near the river. The weekend, however, looks much brighter, with plenty of sunshine on Sunday. Have a good evening.", [
      fb("Tomorrow will be much ___ than today.", ["colder"], "'much colder than today'."),
      fb("Temperatures will fall to just ___ degrees.", ["three", "3"], "'falling to just three degrees'."),
      fb("In the morning there will be heavy ___.", ["rain"], "'heavy rain'."),
      fb("There is a ___ warning for areas near the river.", ["flood"], "'a flood warning'."),
      fb("There will be plenty of sunshine on ___.", ["Sunday"], "'plenty of sunshine on Sunday'."),
    ]),

    ...speakingParts("el tiempo y el clima", { p1: "cómo es el tiempo en tu zona y qué clima prefieres", p2: "una foto de un fenómeno meteorológico (tormenta, nieve, sol, inundación)", p3: "qué actividad planear según el pronóstico del fin de semana", p4: "el clima, el cambio climático y qué podemos hacer al respecto" }),

    SUMMARY("Resumen del Día 53", [
      "Comparación: -er/more…than; the …est/most; much/far + comparativo; as…as; the …er the …er.",
      "Adverbios: faster (corto), more quickly/carefully (-ly).",
      "Vocabulario del tiempo. Practicadas las 6 partes de Reading, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 54", "Escribe 4 comparaciones sobre el tiempo o lugares. Repasa las flashcards. Mañana: phrasal verbs frecuentes de examen (repaso)."),
  ],
};

// ───────────────────────── DÍA 54 ─────────────────────────
const DAY54 = {
  title: "Día 54 — Phrasal verbs de examen · El mundo del trabajo y los estudios",
  description: "Phrasal verbs muy frecuentes en el examen (find out, give up, look into, deal with, set up, carry on…). Vocabulario de estudios/trabajo. Las 4 destrezas con formato B1; Listening P4.",
  pedagogy: {
    objective: "Reconocer y usar los phrasal verbs más frecuentes del B1.",
    summary: "Phrasal verbs de examen; estudios/trabajo; Reading P1–P6, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["confundir significados (look after/for/into).", "separar mal.", "traducir literal."],
    reviewPrompts: ["¿'find out' significa…?", "¿Diferencia entre 'look for' y 'look after'?"],
  },
  items: [
    TEXT("🔁 Repaso: comparación. Hoy repasamos los PHRASAL VERBS más frecuentes del examen. Vocabulario: ESTUDIOS y TRABAJO."),
    GRAMMAR("Phrasal verbs frecuentes del examen", `Los más habituales en el B1 (¡apréndelos!):
· find out = averiguar · give up = rendirse/dejar · carry on = continuar · deal with = ocuparse de/gestionar
· look into = investigar · look for = buscar · look after = cuidar · look forward to = esperar con ilusión
· set up = montar/crear · turn down = rechazar/bajar (volumen) · turn up = aparecer/subir · put off = posponer
· get on (with) = llevarse bien / progresar · take up = empezar (afición) · work out = resolver/hacer ejercicio
· come up with = ocurrírsele (una idea) · sort out = solucionar/organizar · give back = devolver · take over = tomar el control
⚠️ Ojo con los parecidos: look FOR (buscar) / look AFTER (cuidar) / look INTO (investigar).`),
    WARN("Errores típicos del hispanohablante", "· ❌ 'I'm looking my keys' → ✅ looking FOR my keys.\n· ❌ 'find out' = encontrar (objeto) → es 'averiguar' (información).\n· ❌ 'put off' = quitarse → es 'posponer'.\n· Aprende cada phrasal verb con su significado, no por las partes."),
    grammarEx("Gramática — Phrasal verbs de examen", "Completa con el phrasal verb adecuado o elige.", [
      fb("I need to ___ ___ what time the exam starts. (averiguar)", ["find out"], "find out."),
      fb("Don't ___ ___ — you're nearly there! (rendirse)", ["give up"], "give up."),
      mc("Choose:", ["I'm looking after my keys.", "I'm looking for my keys.", "I'm looking into my keys."], 1, "buscar → look for."),
      fb("The meeting was ___ ___ until next week. (pospuesto)", ["put off"], "put off."),
      fb("She ___ ___ her own business last year. (montó)", ["set up"], "set up."),
      mc("Choose:", ["He turned down the job offer.", "He turned off the job offer.", "He turned up the job offer."], 0, "rechazar → turn down."),
      fb("I can't ___ ___ this problem — it's too hard. (resolver)", ["work out"], "work out."),
    ]),
    GRAMMAR("Vocabulario del día — Estudios y trabajo", "Léxico de estudios y trabajo (B1)."),
    deck("B1 S11D54 — Estudios y trabajo", [
      ["degree", "carrera / título universitario", "She has a degree in biology.", "sustantivo", "dɪˈɡriː"],
      ["career", "carrera profesional", "He's building a career in law.", "sustantivo", "kəˈrɪə"],
      ["qualification", "titulación / cualificación", "You need the right qualifications.", "sustantivo", "ˌkwɒlɪfɪˈkeɪʃn"],
      ["apply", "solicitar", "I applied for the course.", "verbo", "əˈplaɪ"],
      ["graduate", "licenciarse / graduarse", "She graduated last year.", "verbo", "ˈɡrædʒueɪt"],
      ["experience", "experiencia", "The job needs experience.", "sustantivo", "ɪkˈspɪəriəns"],
      ["skill", "habilidad / destreza", "Communication is a key skill.", "sustantivo", "skɪl"],
      ["interview", "entrevista", "I have a job interview tomorrow.", "sustantivo", "ˈɪntəvjuː"],
      ["earn", "ganar (dinero)", "How much do you earn?", "verbo", "ɜːn"],
      ["succeed", "tener éxito", "You'll succeed if you work hard.", "verbo", "səkˈsiːd"],
    ]),
    vocabEx("Vocabulario — Estudios y trabajo", "Elige la opción correcta.", [
      mc("A qualification you get from university is a ___.", ["degree", "career", "interview"], 0, "degree."),
      mc("To finish university successfully is to ___.", ["graduate", "apply", "earn"], 0, "graduate."),
      mc("Your working life over many years is your ___.", ["career", "degree", "skill"], 0, "career."),
      mc("A meeting where you're asked questions for a job is an ___.", ["interview", "experience", "skill"], 0, "interview."),
      mc("An ability you have learned is a ___.", ["skill", "degree", "career"], 0, "skill."),
      mc("To formally ask for a job or course is to ___.", ["apply", "earn", "graduate"], 0, "apply."),
    ]),

    ...readingParts({
      p1: { title: "Estudios/trabajo y avisos", items: [
        mc("Note: 'Please find out the deadline before applying.'", ["Check the deadline first.", "No deadline.", "Don't apply."], 0, "'find out the deadline'."),
        mc("Email: 'Your interview has been put off until Monday.'", ["The interview is postponed.", "It's cancelled.", "It's today."], 0, "'put off until Monday'."),
        mc("Text: 'Don't give up — you can pass this exam!'", ["Encouragement not to quit.", "Give up.", "You failed."], 0, "'Don't give up'."),
        mc("Sign: 'We're looking for enthusiastic new staff.'", ["They want to hire staff.", "No jobs.", "Staff leaving."], 0, "'looking for… new staff'."),
        mc("Note: 'She set up her own company after graduating.'", ["She started a business.", "She closed one.", "She never worked."], 0, "'set up her own company'."),
      ] },
      p2text: "FOUR CAREER PATHS\n\nA) University — a degree opens many doors, but it takes years and can be expensive.\nB) Apprenticeship — learn a skilled trade while earning money and gaining real experience.\nC) Starting a Business — set up your own company; risky but potentially very rewarding.\nD) Volunteering — gain experience and skills while helping others, before deciding your path.",
      p2q: { title: "Emparejar personas y caminos", items: [
        mc("Nadia wants a degree even though it takes years.", ["A", "B", "C", "D"], 0, "University."),
        mc("Ben wants to earn while learning a practical trade.", ["A", "B", "C", "D"], 1, "Apprenticeship."),
        mc("Sara dreams of running her own company.", ["A", "B", "C", "D"], 2, "Starting a Business."),
        mc("Leo isn't sure yet and wants experience while helping others.", ["A", "B", "C", "D"], 3, "Volunteering."),
        mc("A path where you earn money while learning a trade.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THERE IS NO SINGLE RIGHT PATH\n\nAt eighteen, I was terrified. Everyone around me seemed to know exactly what they wanted to do with their lives, while I had no idea at all. My friends were applying to universities, choosing careers, and talking confidently about their futures. Meanwhile, I lay awake at night, convinced that I was somehow failing before I had even begun. If only, I thought, I could find out the 'right' path, everything would be fine.\n\nIt took me years to understand a simple but liberating truth: there is no single right path. The idea that each of us has one perfect career, waiting to be discovered, is a myth that causes enormous, unnecessary anxiety. In reality, most successful and happy people I know took winding, unexpected routes to get where they are. They tried things, changed their minds, gave up on some paths and stumbled onto others by accident. My own aunt, who is now a respected doctor, started out studying music. A friend who set up a successful business had failed at three different jobs first.\n\nSo if you are young and don't yet know what you want to do, please don't panic. You are not behind; you are simply at the beginning. The most useful thing you can do is not to agonise over finding the 'perfect' plan, but to stay curious, gain a range of experiences, and pay attention to what you enjoy. Try things. Some will work out and some won't, and both kinds teach you something. Your path will not appear on a map before you set off. It is something you create, one step at a time, by actually walking.",
      p3q: { title: "No hay un único camino correcto (texto largo)", items: [
        mc("How did the writer feel at eighteen?", ["Confident.", "Terrified, with no idea what to do.", "Excited."], 1, "'I was terrified… no idea at all'."),
        mc("What 'liberating truth' did the writer learn?", ["There's one perfect career.", "There is no single right path.", "You must decide young."], 1, "'there is no single right path'."),
        mc("What did the writer's aunt start out studying?", ["Medicine.", "Music.", "Law."], 1, "'started out studying music'."),
        mc("What does the writer advise young people to do?", ["Panic.", "Stay curious, gain experiences, notice what you enjoy.", "Decide immediately."], 1, "'stay curious, gain a range of experiences… what you enjoy'."),
        mc("How does your path appear, according to the writer?", ["On a map beforehand.", "You create it step by step by walking.", "It's fixed at birth."], 1, "'you create, one step at a time, by actually walking'."),
      ] },
      p4text: "THE CAREER I NEVER PLANNED\n\nWhen I left school, I had my whole future carefully planned. (1)___ I was going to study law, become a lawyer, and be successful and wealthy by the age of thirty.\n\nLife, however, had other ideas. (2)___ In my second year of university, I took a part-time job in a hospital to earn some money, and something unexpected happened. I discovered that I loved caring for people far more than I had ever loved my law books. (3)___ It was a frightening thought, because it meant giving up the plan I had followed for years.\n\nAfter many sleepless nights, I made a decision that shocked everyone, including me. (4)___ I left my law degree and started training as a nurse. My family thought I was throwing away my future. But fifteen years later, I can honestly say it was the best decision I ever made. (5)___ I found my real path not by planning it perfectly, but by being brave enough to change direction when my heart pointed a different way.",
      p4options: [
        "I knew exactly what I wanted, or so I thought.",           // A -> gap 1
        "Everything changed by pure accident.",                     // B -> gap 2
        "Slowly, I realised I was on the wrong path.",             // C -> gap 3
        "I decided to follow my heart instead of my plan.",         // D -> gap 4
        "I became a lawyer exactly as planned.",                    // E (extra)
        "That leap of faith led me to a career I love.",           // F -> gap 5
        "I had never had any plans at all.",                        // G (extra)
        "The hospital job was a complete disaster.",               // H (extra)
      ],
      p4q: { title: "La carrera que nunca planeé (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: sabía lo que quería, o eso creía."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: todo cambió por accidente."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: iba por el camino equivocado."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: decidió seguir su corazón."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: ese salto le llevó a una carrera que ama."),
      ] },
      p5text: "Choosing a career isn't easy. First, (1)___ out what qualifications you need. If you want to go to university, you'll have to (2)___ for a place and prepare for an (3)___. Don't (4)___ up if you're rejected the first time — many successful people failed at first. Try to (5)___ some experience through a part-time job or volunteering. And remember: if one path doesn't work out, you can always (6)___ on and try something new.",
      p5q: { title: "Huecos con opciones (phrasal verbs/vocabulario)", items: [
        mc("Hueco 1", ["find", "look", "set", "give"], 0, "'find out what qualifications'."),
        mc("Hueco 2", ["apply", "graduate", "earn", "succeed"], 0, "'apply for a place'."),
        mc("Hueco 3", ["interview", "degree", "career", "skill"], 0, "'prepare for an interview'."),
        mc("Hueco 4", ["give", "find", "set", "look"], 0, "'don't give up'."),
        mc("Hueco 5", ["gain", "give", "find", "set"], 0, "'gain some experience'."),
        mc("Hueco 6", ["carry", "give", "put", "turn"], 0, "'carry on and try something new'."),
      ] },
      p6text: "Hi Sam,\nI've been thinking about my future and it's stressful! At first I had everything planned: I was going to (1)___ for law school and become a lawyer. But I've realised there's no single right path. My aunt (2)___ up her own business after failing at three jobs first! I've decided to (3)___ out more about different careers before I decide. I won't (4)___ up if things go wrong. I'm going to (5)___ some experience through a part-time job. If one plan doesn't (6)___ out, I'll try another. Wish me luck!\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["apply"], "'apply for law school'."),
        fb("Hueco 2", ["set"], "'set up her own business'."),
        fb("Hueco 3", ["find"], "'find out more'."),
        fb("Hueco 4", ["give"], "'I won't give up'."),
        fb("Hueco 5", ["gain", "get"], "'gain some experience'."),
        fb("Hueco 6", ["work"], "'if one plan doesn't work out'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a no sabe qué estudiar o a qué dedicarse. Responde a su email (~100 palabras):\n· dale un consejo (usa phrasal verbs: find out, carry on…),\n· cuéntale qué te gustaría hacer a ti,\n· anímale a no rendirse.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Is it necessary to go to university to succeed?' con tu opinión.\n· RELATO: empieza con: 'I had my whole future carefully planned — until one day everything changed.'", 80, 130),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Una entrevista (detalle)", "Escucha una entrevista con una joven sobre su carrera y elige la respuesta correcta (se oye dos veces).", "This is Part Four. You will hear an interview with a young woman, Zoe, about her career. Interviewer: Zoe, did you always know what you wanted to do? Zoe: Not at all. I started studying law, but I gave it up. Interviewer: Why? Zoe: I found out that I loved working with people much more. Interviewer: What did you do next? Zoe: I set up my own small business selling handmade products. Interviewer: Was it difficult? Zoe: Very. I nearly gave up several times, but I carried on. Interviewer: What advice would you give? Zoe: Don't panic if you don't have a plan. Try things, and don't be afraid to change direction.", [
      mc("Did Zoe always know what she wanted to do?", ["Yes.", "No, not at all.", "She still doesn't."], 1, "'Not at all'."),
      mc("What did she do with law?", ["Finished it.", "Gave it up.", "Loved it."], 1, "'I gave it up'."),
      mc("What did she find out about herself?", ["She loved law.", "She loved working with people.", "She hated business."], 1, "'I loved working with people much more'."),
      mc("What did she do next?", ["Got a job in law.", "Set up her own business.", "Went travelling."], 1, "'I set up my own small business'."),
      mc("What is her advice?", ["Always have a fixed plan.", "Try things and don't be afraid to change direction.", "Give up quickly."], 1, "'Try things… don't be afraid to change direction'."),
    ]),

    ...speakingParts("los estudios y el trabajo", { p1: "qué te gustaría estudiar o a qué te gustaría dedicarte y por qué", p2: "una foto relacionada con el trabajo o los estudios (una oficina, una clase, una entrevista)", p3: "qué consejos dar a un/a amigo/a que no sabe qué carrera elegir", p4: "los estudios y el trabajo, si hace falta ir a la universidad y cómo elegir un camino" }),

    SUMMARY("Resumen del Día 54", [
      "Phrasal verbs clave: find out, give up, carry on, deal with, look into/for/after, set up, put off, work out, come up with.",
      "Cuidado con los parecidos (look for/after/into).",
      "Vocabulario de estudios/trabajo. Practicadas las 6 partes de Reading, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 55", "Escribe 6 frases con phrasal verbs de examen. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 55 ─────────────────────────
const DAY55 = {
  title: "Día 55 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de relativas reducidas, impersonales, comparación y phrasal verbs. Las 4 destrezas con formato B1; Listening P2. Al final, el mini-simulacro de la Semana 11.",
  pedagogy: {
    objective: "Consolidar la gramática de la ciencia y la naturaleza.",
    summary: "Repaso integrado; Reading P1–P6; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué punto te costó más?", "Repásalo antes de la Semana 12 (¡la última!)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 11 del B1. Consolidas relativas reducidas, impersonales, comparación avanzada y phrasal verbs. Al final, el mini-simulacro (módulo aparte). ¡La semana que viene es la última!"),
    GRAMMAR("Repaso de la Semana 11", `1) Relativas reducidas: quitar 'who/which + be' → participio (sitting / written).
2) Impersonales: It is said that…; Sujeto + is believed to + inf.
3) Comparación: -er/more…than; the …er the …er; much/far + comparativo; adverbios (faster, more quickly).
4) Phrasal verbs: find out, give up, carry on, set up, put off, work out, look for/after/into.`),
    grammarEx("Repaso mixto de gramática — Semana 11", "Completa o elige.", [
      fb("Reduce: 'The boy who is playing' → 'The boy ___'.", ["playing"], "reduced relative."),
      fb("People say it's healthy. → It is ___ that it's healthy.", ["said"], "It is said that."),
      fb("People believe he is rich. → He is ___ to be rich.", ["believed"], "is believed to be."),
      fb("Today is ___ (hot) than yesterday.", ["hotter"], "corto → -er."),
      fb("It's ___ (much/cold) than last week.", ["much colder"], "much + comparativo."),
      fb("I need to ___ ___ what time it starts. (averiguar)", ["find out"], "find out."),
      mc("Choose:", ["I'm looking after my keys.", "I'm looking for my keys.", "I'm looking into my keys."], 1, "buscar → look for."),
      fb("She ___ ___ her own business. (montó)", ["set up"], "set up."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 11", "Repasa los mazos (animales, ciencia, tiempo, estudios/trabajo)."),
    vocabEx("Repaso de vocabulario — Semana 11", "Elige la opción correcta.", [
      mc("The natural home of an animal:", ["habitat", "species", "predator"], 0, "habitat."),
      mc("A careful study to find out facts:", ["research", "theory", "result"], 0, "research."),
      mc("A prediction of tomorrow's weather:", ["forecast", "climate", "temperature"], 0, "forecast."),
      mc("A qualification from university:", ["degree", "career", "interview"], 0, "degree."),
      mc("An animal that no longer exists:", ["extinct", "endangered", "wild"], 0, "extinct."),
      mc("An important new advance:", ["breakthrough", "laboratory", "result"], 0, "breakthrough."),
      mc("A long period with no rain:", ["drought", "flood", "storm"], 0, "drought."),
      mc("To finish university successfully:", ["graduate", "apply", "earn"], 0, "graduate."),
    ]),

    ...readingParts({
      p1: { title: "Repaso — avisos variados", items: [
        mc("Sign: 'This species is protected by law.'", ["Legally protected.", "You can hunt it.", "It's extinct."], 0, "'protected by law'."),
        mc("Note: 'It is believed that the site is 3,000 years old.'", ["It's thought to be very old.", "It's new.", "No site."], 0, "'believed that the site is 3,000 years old'."),
        mc("Forecast: 'Tomorrow will be much colder than today.'", ["A big temperature drop.", "Warmer.", "The same."], 0, "'much colder than today'."),
        mc("Note: 'Please find out the deadline before applying.'", ["Check the deadline first.", "No deadline.", "Don't apply."], 0, "'find out the deadline'."),
        mc("Text: 'The plants growing in the garden need water.'", ["The garden plants need water.", "No plants.", "They're fine."], 0, "reduced relative: 'plants growing…'"),
      ] },
      p2text: "FOUR TALKS AT THE SCIENCE FESTIVAL\n\nA) Saving the Bees — why these tiny creatures matter and how we can protect them.\nB) Our Changing Climate — the evidence for climate change and what it means for the future.\nC) The Great Discoveries — the patient work behind history's most famous scientific breakthroughs.\nD) Careers in Science — how to find out about, and apply for, jobs in research.",
      p2q: { title: "Emparejar personas y charlas", items: [
        mc("Nadia is worried about insects and pollination.", ["A", "B", "C", "D"], 0, "Saving the Bees."),
        mc("Ben wants to understand climate change.", ["A", "B", "C", "D"], 1, "Our Changing Climate."),
        mc("Sara loves the stories behind big discoveries.", ["A", "B", "C", "D"], 2, "The Great Discoveries."),
        mc("Leo wants a job in scientific research.", ["A", "B", "C", "D"], 3, "Careers in Science."),
        mc("A talk about the evidence for climate change.", ["A", "B", "C", "D"], 1, "B."),
      ] },
      p3text: "THE SCIENTIST NOBODY REMEMBERS\n\nEveryone has heard of the famous scientists whose names fill our textbooks. But behind almost every great discovery stands a crowd of forgotten people whose patient work made it possible. I want to tell you about one of them: a woman named Alice, who was my great-grandmother.\n\nAlice worked in a laboratory a hundred years ago, at a time when women were rarely allowed to be scientists at all. She was never permitted to lead her own research; instead, she spent decades carefully carrying out thousands of experiments designed by the men whose names would later become famous. It is said that one of the most important discoveries of her age depended directly on measurements she had taken, yet her name appears nowhere in the history books. She was paid less than the men, given none of the credit, and quietly forgotten.\n\nWhen I found out about Alice, I felt angry on her behalf. But my grandmother, who had known her, saw things differently. She told me that Alice had never done her work for fame or money. She had done it because she loved the patient search for truth, and because she believed that adding even a tiny piece to human knowledge was a life well spent. That, my grandmother said, was Alice's real reward, and no one could ever take it from her. I think about Alice often. She reminds me that most of the good in the world is done quietly, by people whose names we will never know, simply because it is the right thing to do.",
      p3q: { title: "La científica que nadie recuerda (texto largo)", items: [
        mc("Who was Alice?", ["A famous scientist.", "The writer's great-grandmother, a forgotten lab worker.", "A teacher."], 1, "'a woman named Alice, who was my great-grandmother'."),
        mc("What was Alice not permitted to do?", ["Work.", "Lead her own research.", "Enter the lab."], 1, "'never permitted to lead her own research'."),
        mc("What did an important discovery depend on?", ["Her ideas alone.", "Measurements she had taken.", "Nothing."], 1, "'depended directly on measurements she had taken'."),
        mc("Why did Alice do her work, according to the grandmother?", ["For fame and money.", "Because she loved the search for truth.", "She was forced to."], 1, "'because she loved the patient search for truth'."),
        mc("What does Alice remind the writer of?", ["That fame matters.", "That much good is done quietly by unknown people.", "That science is useless."], 1, "'most of the good in the world is done quietly, by people whose names we will never know'."),
      ] },
      p4text: "THE PROJECT THAT TAUGHT ME PATIENCE\n\nFor our school science fair, my friend and I decided to build a small weather station. (1)___ We wanted to record the temperature, rainfall and wind every day for three months, and use the data to make our own forecast.\n\nAt first, it was exciting, but the excitement quickly faded. (2)___ Every single morning, whatever the weather, one of us had to go outside and carefully write down the measurements. On cold, dark days, it was the last thing we wanted to do. Several times, we were tempted to give up. (3)___ But we had promised each other we would carry on, so we did.\n\nBy the end of the three months, we had a huge amount of data, and something wonderful happened. (4)___ Using our own careful records, we correctly predicted a storm two days before it arrived. Our teacher was hugely impressed. But the real prize wasn't the good mark. (5)___ That patient, unglamorous project taught me that real results come not from a single clever idea, but from turning up, day after day, and doing the work.",
      p4options: [
        "It sounded like a brilliant, ambitious idea.",             // A -> gap 1
        "The daily work turned out to be surprisingly boring.",     // B -> gap 2
        "Missing even one day would ruin our data.",               // C -> gap 3
        "All our patient effort had finally paid off.",             // D -> gap 4
        "We abandoned the project after a single day.",             // E (extra)
        "I had learned the true value of patience.",                // F -> gap 5
        "The weather station was never actually built.",            // G (extra)
        "We already knew everything about the weather.",            // H (extra)
      ],
      p4q: { title: "El proyecto que me enseñó paciencia (gapped text)", items: [
        mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: una idea brillante y ambiciosa."),
        mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: el trabajo diario era aburrido."),
        mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: faltar un día arruinaría los datos."),
        mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: el esfuerzo dio frutos."),
        mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: aprendió el valor de la paciencia."),
      ] },
      p5text: "Real science takes patience. A discovery which (1)___ reported as an 'overnight success' is usually the result of years of careful work. Scientists form a theory, then do experiments to test it; most (2)___ fail. The people (3)___ this quiet work often become famous, but many are forgotten. It (4)___ said that great breakthroughs depend on thousands of small steps. So if a project of yours doesn't (5)___ out at first, don't (6)___ up — just carry on.",
      p5q: { title: "Huecos con opciones (repaso)", items: [
        mc("Hueco 1", ["is", "does", "has", "was be"], 0, "'a discovery which is reported'."),
        mc("Hueco 2", ["experiments", "theories", "results", "labs"], 0, "'most experiments fail'."),
        mc("Hueco 3", ["doing", "did", "do", "done"], 0, "reduced relative → 'the people doing this work'."),
        mc("Hueco 4", ["is", "was", "has", "are"], 0, "'It is said that'."),
        mc("Hueco 5", ["work", "find", "give", "set"], 0, "'doesn't work out'."),
        mc("Hueco 6", ["give", "work", "find", "carry"], 0, "'don't give up'."),
      ] },
      p6text: "Hi Sam,\nMy science project taught me so much! My friend and I built a weather station and recorded the temperature every day for three months. It (1)___ said that science needs patience, and now I understand why — the daily work was boring! Several times I wanted to (2)___ up, but we carried (3)___. In the end, using our own data, we correctly predicted a storm! It (4)___ believed that great discoveries come from small, patient steps, and I really felt that. The plants (5)___ in our garden even helped us test the rainfall! I've learned that if something doesn't (6)___ out at first, you just keep going.\nLove,\nAlex",
      p6q: { title: "Open cloze (una palabra)", items: [
        fb("Hueco 1", ["is"], "'It is said that'."),
        fb("Hueco 2", ["give"], "'wanted to give up'."),
        fb("Hueco 3", ["on"], "'carried on'."),
        fb("Hueco 4", ["is"], "'It is believed that'."),
        fb("Hueco 5", ["growing"], "reduced relative → 'the plants growing in our garden'."),
        fb("Hueco 6", ["work"], "'doesn't work out'."),
      ] },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Un email (~100 palabras)", "Tu amigo/a inglés/a tiene un proyecto largo y quiere abandonarlo. Responde a su email (~100 palabras):\n· anímale a no rendirse (usa phrasal verbs),\n· cuenta un proyecto en el que tú perseveraste,\n· dale un consejo para mantener la paciencia.", 80, 130),
    writing(2, "Writing · Parte 2 — Un artículo o un relato (~100 palabras)", "Elige UNA opción (~100 palabras):\n· ARTÍCULO: 'Why is patience important for success?' con tu opinión.\n· RELATO: empieza con: 'For three whole months, we recorded the weather every single day.'", 80, 130),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Seis diálogos (idea general)", "Escucha seis diálogos cortos (se oyen dos veces) y elige la respuesta correcta.", "This is Part Two. You will hear six short dialogues. One. Woman: Are these animals safe? Man: No, they're endangered — their habitat is disappearing. Two. Man: Is the theory proved? Woman: Not yet, more research is needed. Three. Woman: What's the weather like? Man: Much colder than yesterday. Four. Man: Did you find out the deadline? Woman: Yes, it's next Friday. Five. Man: Are you going to give up? Woman: No, I'll carry on. Six. Woman: How old is the discovery believed to be? Man: About two thousand years.", [
      mc("1. Why aren't the animals safe?", ["Hunting.", "Their habitat is disappearing.", "The weather."], 1, "'their habitat is disappearing'."),
      mc("2. Is the theory proved?", ["Yes.", "Not yet, more research is needed.", "It's false."], 1, "'more research is needed'."),
      mc("3. What's the weather like?", ["Warmer.", "Much colder than yesterday.", "The same."], 1, "'Much colder than yesterday'."),
      mc("4. When is the deadline?", ["Today.", "Next Friday.", "Unknown."], 1, "'it's next Friday'."),
      mc("5. Is the woman going to give up?", ["Yes.", "No, she'll carry on.", "Maybe."], 1, "'No, I'll carry on'."),
      mc("6. How old is the discovery believed to be?", ["100 years.", "About 2,000 years.", "Unknown."], 1, "'About two thousand years'."),
    ]),

    ...speakingParts("la ciencia, la naturaleza y el mundo", { p1: "qué te interesa del mundo natural o la ciencia, y qué problema te preocupa más", p2: "una foto sobre la naturaleza, el clima o la ciencia", p3: "qué tema del mundo (naturaleza, clima, ciencia) presentar en un proyecto", p4: "el mundo natural, el cambio climático, la ciencia y la paciencia que exigen las cosas importantes" }),

    SUMMARY("Resumen de la Semana 11 (B1)", [
      "Dominas las relativas reducidas, las estructuras impersonales, la comparación avanzada y los phrasal verbs de examen.",
      "Has practicado las 6 partes de Reading, Writing y Speaking P1–P4 cada día.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: la ÚLTIMA — cultura y arte, repaso final y el simulacro completo.",
    ]),
    INFO("Mini-simulacro de la Semana 11", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. ¡Solo te queda una semana! Repasa si no llegas."),
  ],
};

export const WEEK11 = {
  n: 11,
  theme: "Ciencia, naturaleza y el mundo",
  description: "Relativas reducidas, estructuras impersonales, comparación avanzada y phrasal verbs de examen. Cada día, las 4 destrezas con el formato real del B1.",
  days: [DAY51, DAY52, DAY53, DAY54, DAY55],
};
