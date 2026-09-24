/**
 * B2 First · Semana 12 — "La recta final · La salud y el estilo de vida".
 * Práctica en condiciones de examen de cada destreza, repaso global de los
 * errores más comunes del hispanohablante y preparación para el día del examen,
 * con el hilo temático de la salud física, la alimentación, el bienestar mental
 * y el equilibrio vida-trabajo. Al final de la semana, el SIMULACRO FINAL.
 * Cada día, las 4 destrezas con el formato real del B2.
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, useCloze, openCloze, wordFormation, keyword, readingMC, gappedText, multipleMatching,
  writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const uoe = ({ p1, p2, p3, p4, p5, p6, p7 }) => [
  READING_HEAD,
  useCloze(p1.title, p1.text, p1.q),
  openCloze(p2.title, p2.text, p2.q),
  wordFormation(p3.title, p3.text, p3.items),
  keyword(p4.title, p4.items),
  readingMC(p5.title, p5.text, p5.q),
  gappedText(p6.title, p6.text, p6.options, p6.q),
  multipleMatching(p7.title, p7.text, p7.q),
];

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas (2–3 frases con razones).", `Parte 1 del B2: preguntas personales (${p1})`, "responder con detalle y razones", "personally, to be honest, in my view, the main reason is"),
  speaking(2, "Speaking · Parte 2 — Comparar dos fotos", "Compara las dos fotos ~1 minuto y responde a la pregunta.", `Parte 2 del B2: comparar dos fotografías sobre ${p2}`, "comparar y especular", "both photos show, whereas, they appear to, perhaps, this one looks more"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones y decidid juntos.", `Parte 3 del B2: comentar juntos ${p3} y decidir`, "evaluar opciones y negociar", "we could consider, on the one hand, that's a fair point, shall we say, so we agree that"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas.", `Parte 4 del B2: discusión sobre ${p4}`, "argumentar y matizar", "it depends on, some people argue, in my view, on the other hand, that said"),
];

// ───────────────────────── DÍA 56 ─────────────────────────
const DAY56 = {
  title: "Día 56 — Simulacro de Use of English en condiciones de examen · La salud física",
  description: "Práctica cronometrada de las 4 partes de Use of English con la técnica de gestión del tiempo. Vocabulario de salud física. Las 4 destrezas (formato B2); Listening P1.",
  pedagogy: {
    objective: "Completar Use of English con precisión y control del tiempo, como en el examen real.",
    summary: "Simulacro Use of English; salud física; Use of English P1–P7, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["dedicar demasiado tiempo a un solo hueco.", "no revisar al final.", "dejar respuestas en blanco."],
    reviewPrompts: ["¿Cuánto tiempo (aprox.) tienes para todo Reading & Use of English?", "¿Qué haces con un hueco que no sabes?"],
  },
  items: [
    TEXT("🏁 Semana 12: LA RECTA FINAL. Esta semana practicas cada destreza EN CONDICIONES DE EXAMEN y repasas los errores más comunes. Hoy: USE OF ENGLISH cronometrado. Vocabulario: la SALUD FÍSICA."),
    GRAMMAR("Gestión del tiempo — Reading & Use of English", `El examen de Reading & Use of English dura 1 hora 15 minutos para las 7 partes (52 preguntas). Reparte el tiempo y NO te atasques.
GUÍA ORIENTATIVA:
· P1 (mc cloze): ~6 min · P2 (open cloze): ~6 min · P3 (word formation): ~6 min · P4 (transformations): ~10 min · P5 (reading MC): ~12 min · P6 (gapped text): ~14 min · P7 (multiple matching): ~11 min. Deja ~5 min para PASAR RESPUESTAS y REVISAR.
REGLAS DE ORO:
1) Si un hueco te atasca, márcalo y sigue; vuelve al final.
2) Nunca dejes nada en blanco: una respuesta razonada puede acertar; una en blanco, nunca.
3) En la P4, cuenta las palabras (2–5) y no cambies la key word.
4) Pasa las respuestas a la hoja con cuidado (si tu simulacro las separa).
⚠️ El tiempo es tu enemigo: practica con reloj. Es mejor una respuesta imperfecta a todo que una perfecta a la mitad.`),
    TIP("El día del examen", "Lleva reloj (o mira el del aula). Haz primero las partes que mejor se te den para asegurar puntos y coger confianza, y deja para el final la que más te cueste. Respira: la prisa provoca errores tontos."),
    WARN("Errores típicos del hispanohablante (repaso global 1/4)", "· Preposiciones dependientes: depend ON, good AT, interested IN, afraid OF, arrive AT/IN (no 'to').\n· 'People IS' ❌ → 'people ARE' ✅ (plural). 'The news ARE' ❌ → 'is' ✅.\n· 'He has 20 years' ❌ → 'He is 20 (years old)' ✅.\n· Falsos amigos: 'actually' = en realidad (no 'actualmente' = currently); 'sensible' = sensato (no 'sensitive' = sensible)."),
    grammarEx("Use of English — Simulacro mixto (P1–P4)", "Bajo presión, elige/completa con precisión.", [
      mc("P1: A balanced diet can help you ___ a healthy weight.", ["maintain", "keep on", "hold", "save"], 0, "maintain a healthy weight (colocación)."),
      fb("P2: Regular exercise is essential ___ good health. (preposición)", ["for", "to"], "essential FOR/TO."),
      fb("P3: A lack of sleep can be very ___ (HARM) to your health. (adjetivo)", ["harmful"], "harm + -ful."),
      fb("P4: 'You should exercise more,' the doctor said. → The doctor ___ more. (key: ADVISED)", ["advised me to exercise"], "advise sb to do (4 palabras)."),
      fb("P4: 'I haven't eaten meat for years.' → It's ___ meat. (key: SINCE)", ["years since I ate", "years since I've eaten"], "It's… since…" ),
      mc("P1: Smoking does serious ___ to your lungs.", ["harm", "damage", "hurt", "injury"], 1, "do damage (colocación)."),
      fb("P2: The more you exercise, ___ better you feel. (estructura the… the…)", ["the"], "the more…, the better."),
    ]),
    GRAMMAR("Vocabulario del día — La salud física", "Léxico de salud física (B2)."),
    deck("B2 S12D56 — La salud física", [
      ["healthy", "sano/a / saludable", "She leads a very healthy lifestyle.", "adjetivo", "ˈhelθi"],
      ["fit", "en forma", "He keeps fit by cycling.", "adjetivo", "fɪt"],
      ["disease", "enfermedad", "Exercise prevents many diseases.", "sustantivo", "dɪˈziːz"],
      ["injury", "lesión", "She recovered slowly from the injury.", "sustantivo", "ˈɪndʒəri"],
      ["symptom", "síntoma", "A fever is a common symptom.", "sustantivo", "ˈsɪmptəm"],
      ["recover", "recuperarse", "It took weeks to recover.", "verbo", "rɪˈkʌvə"],
      ["prevent", "prevenir / evitar", "Vaccines prevent illness.", "verbo", "prɪˈvent"],
      ["overweight", "con sobrepeso", "Being overweight raises health risks.", "adjetivo", "ˌəʊvəˈweɪt"],
      ["immune system", "sistema inmunitario", "Sleep strengthens the immune system.", "sustantivo", "ɪˈmjuːn ˌsɪstəm"],
      ["work out", "hacer ejercicio", "I work out three times a week.", "phrasal verb", "wɜːk ˈaʊt"],
    ]),
    vocabEx("Vocabulario — La salud física", "Elige la opción correcta.", [
      mc("Physically strong and in good condition means ___.", ["fit", "overweight", "injured"], 0, "fit."),
      mc("An illness affecting the body is a ___.", ["disease", "symptom", "injury"], 0, "disease."),
      mc("A sign that you might be ill is a ___.", ["symptom", "recovery", "immune system"], 0, "symptom."),
      mc("To stop something bad from happening is to ___ it.", ["prevent", "recover", "injure"], 0, "prevent."),
      mc("Damage to your body, e.g. from an accident, is an ___.", ["injury", "symptom", "disease"], 0, "injury."),
      mc("To do physical exercise, informally, is to ___.", ["work out", "recover", "prevent"], 0, "work out."),
    ]),

    ...uoe({
      p1: {
        title: "The best medicine",
        text: "If a pharmaceutical company were to invent a single pill that could do what exercise does, it would (1)___ be hailed as the greatest medical breakthrough in history. Regular physical activity, the evidence overwhelmingly shows, reduces the risk of (2)___ every major disease — heart disease, stroke, diabetes, several cancers, dementia. It lifts mood, reduces anxiety, improves sleep, and adds years to life. No drug ever invented comes (3)___ to matching this extraordinary range of benefits. And yet, unlike a wonder drug, exercise is free, available to almost everyone, and comes with no harmful (4)___ effects. Why, then, given all this, do so many of us fail to do it? Part of the answer is simply that we have designed physical activity (5)___ of our daily lives. Our ancestors moved constantly, from necessity; we, by contrast, can pass entire days barely stirring from our chairs. Our bodies, evolved for a life of movement, are (6)___ suited to this modern stillness, and pay the price in ill health. The solution is not, for most people, to become an athlete. The evidence is clear that even modest amounts of activity — a daily walk, taking the stairs, a little gardening — bring enormous benefits. The single (7)___ important thing is simply to move, regularly, in whatever way you can. It is, quite literally, the closest thing we have to a magic pill — and the great tragedy is how few of us (8)___ to take it.",
        q: [
          mc("(1)", ["surely", "certainly", "definitely", "clearly"], 0, "'would surely be hailed'."),
          mc("(2)", ["nearly", "almost", "virtually", "practically"], 0, "'nearly every major disease'."),
          mc("(3)", ["close", "near", "nearly", "closely"], 0, "'comes close to matching'."),
          mc("(4)", ["side", "bad", "harmful", "adverse"], 0, "'harmful side effects'."),
          mc("(5)", ["out", "off", "away", "apart"], 0, "'designed physical activity out of our lives'."),
          mc("(6)", ["poorly", "badly", "wrongly", "ill"], 0, "'poorly suited to this stillness'."),
          mc("(7)", ["most", "more", "very", "much"], 0, "'the single most important thing'."),
          mc("(8)", ["choose", "decide", "want", "wish"], 0, "'how few of us choose to take it'."),
        ],
      },
      p2: {
        title: "The sitting disease",
        text: "For years, we were told that the key to health was to exercise regularly, and (1)___ we did — many of us dutifully going to the gym several times a week. But recent research has revealed an uncomfortable truth that this advice missed. It is not (2)___ how much we exercise that matters, but how much we sit. A person who works out for an hour and (3)___ spends the remaining fifteen waking hours sitting down may be, health researchers now warn, at serious risk (4)___ despite their exercise. Prolonged sitting, it turns out, does its own distinct damage to the body, damage that a daily workout cannot fully undo. This has come to be known, half-jokingly, as 'the sitting disease', and it is a peculiarly modern affliction. Never before in human history have people spent (5)___ much of their lives seated — at desks, in cars, in front of screens. The remedy the researchers recommend is not more intense exercise but simply more movement (6)___ the day: standing up regularly, walking around, breaking up the long hours of stillness. It is a reminder that health is not something achieved (7)___ an hour at the gym and then forgotten, but a matter of how we live every hour of (8)___ day.",
        q: [
          fb("(1)", ["so"], "'and so we did'."),
          fb("(2)", ["just", "only", "simply"], "'not just how much we exercise'."),
          fb("(3)", ["then"], "'and then spends'."),
          fb("(4)", ["despite"], "'at serious risk despite their exercise'."),
          fb("(5)", ["so", "as"], "'spent so much of their lives'."),
          fb("(6)", ["throughout", "through"], "'movement throughout the day'."),
          fb("(7)", ["in", "with"], "'achieved in an hour at the gym'."),
          fb("(8)", ["the", "every"], "'every hour of the day'."),
        ],
      },
      p3: {
        title: "The truth about diets",
        text: "The (1)___ industry that has grown up around dieting is one of the most profitable, and least (2)___, in the world. Every year, millions of people spend billions on the latest miracle diet, and every year, the overwhelming majority of them fail to lose weight in any (3)___ way. The uncomfortable truth, which the diet industry has every reason to hide, is that diets, as commonly understood, simply do not work. The vast majority of people who lose weight on a diet regain it, and often more, within a few years. This is not a (4)___ of willpower but of biology: the body fights fiercely against weight loss, and restrictive diets are almost impossible to (5)___ in the long term. What does work, the evidence suggests, is far less exciting and far harder to sell: not a dramatic, temporary diet, but a permanent, (6)___ change in the way one eats and lives. Small, sustainable changes, maintained for life, achieve what no crash diet ever can. This is unwelcome news for an industry that thrives on selling quick fixes, and unwelcome, too, for those of us who long for an easy (7)___. But it is, unfortunately, the truth. There is no magic diet, no secret trick. There is only the slow, unglamorous, lifelong work of eating (8)___ and moving more — which is precisely why so few succeed, and so many keep buying the next miracle.",
        items: [
          { root: "vast", accepted: ["vast"], hint: "'The vast industry' (adjetivo)." },
          { root: "honest", accepted: ["honest"], hint: "'least honest' (adjetivo)." },
          { root: "last", accepted: ["lasting"], hint: "'in any lasting way' → lasting." },
          { root: "fail", accepted: ["failure"], hint: "'not a failure of willpower' → failure." },
          { root: "sustain", accepted: ["sustain"], hint: "'almost impossible to sustain' (verbo)." },
          { root: "gradual", accepted: ["gradual"], hint: "'a permanent, gradual change' (adjetivo)." },
          { root: "solve", accepted: ["solution"], hint: "'an easy solution' → solution." },
          { root: "good", accepted: ["better"], hint: "'eating better and moving more' → better." },
        ],
      },
      p4: {
        title: "Transformaciones — la salud (simulacro)",
        items: [
          { s1: "You don't need to join a gym to get fit.", key: "HAVE", s2: "You ___ a gym to get fit.", accepted: ["don't have to join"], explanation: "don't have to (no obligación)." },
          { s1: "Exercise is the best way to prevent many diseases.", key: "PREVENTED", s2: "Many diseases ___ by exercise.", accepted: ["can be prevented"], explanation: "pasiva con modal." },
          { s1: "'Why don't you take up swimming?' she said.", key: "SUGGESTED", s2: "She ___ swimming.", accepted: ["suggested taking up", "suggested I take up"], explanation: "suggest + -ing/that." },
          { s1: "He started running two years ago.", key: "BEEN", s2: "He ___ for two years.", accepted: ["has been running"], explanation: "present perfect continuous." },
          { s1: "I regret not exercising when I was younger.", key: "WISH", s2: "I ___ when I was younger.", accepted: ["wish I had exercised"], explanation: "wish + past perfect." },
          { s1: "This is the healthiest meal I've ever cooked.", key: "NEVER", s2: "I ___ such a healthy meal.", accepted: ["have never cooked"], explanation: "present perfect + never." },
        ],
      },
      p5: {
        title: "The village of the very old",
        text: "In a handful of remote and scattered places around the world, people live, on average, dramatically longer and healthier lives than the rest of humanity. In these so-called 'blue zones' — a mountainous region of one Mediterranean island, a remote Japanese archipelago, a peninsula in Central America, and a few others — it is unremarkable to meet men and women who are not only alive but active, sharp and independent well past their hundredth birthday. Rates of heart disease, cancer and dementia are a fraction of those found elsewhere. For decades, researchers have travelled to these places, hoping to uncover the secret of their inhabitants' extraordinary longevity.\n\nWhat they have found is, in a sense, disappointing, and in another, profoundly encouraging. There is no secret. The people of the blue zones do not possess some miraculous gene, eat some magical superfood, or follow some exotic regime unavailable to the rest of us. On the contrary, the factors behind their long lives turn out to be almost boringly familiar: a mostly plant-based diet, eaten in moderation; constant, gentle physical activity woven naturally into daily life; strong social bonds and a deep sense of community; and a clear sense of purpose that persists into old age. There is nothing here that any of us could not, in principle, copy.\n\nAnd yet, of course, we largely do not. This is the great paradox at the heart of the blue-zone research. The ingredients of a long and healthy life are no mystery; they have been known, in outline, for a very long time. The difficulty lies not in knowing what to do but in doing it — and, crucially, in doing it not for a few weeks or months but for an entire lifetime. The blue-zone inhabitants do not diet or exercise in the way we understand those words, as effortful projects undertaken against the grain of their culture. They simply live, from birth to death, in an environment that makes the healthy choice the natural, easy and unavoidable one.\n\nThis last point may be the most important lesson of all. We tend to think of health as a matter of individual willpower — of the heroic effort required to resist temptation and stick to good habits. The blue zones suggest a different and more hopeful truth. Their inhabitants are not, on the whole, more disciplined than the rest of us; they are simply luckier in their surroundings. Their communities are built, largely by accident of tradition, in ways that make healthy living almost automatic: fresh food is what there is to eat; walking is how one gets around; company and purpose come naturally with the shape of daily life.\n\nThe implication is quietly revolutionary. If health depends less on individual willpower than on the environment we inhabit, then the way to a healthier society is not endless exhortation to try harder, which manifestly does not work, but the patient reshaping of our surroundings to make the healthy choice the easy one. We cannot all move to a blue zone. But we can, perhaps, learn from them how to build, in our own lives and communities, a little more of the environment that made their inhabitants' long and healthy lives not a heroic achievement, but simply the ordinary way of things.",
        q: [
          mc("What is unusual about 'blue zones'?", ["They're cold.", "People there live much longer and healthier lives.", "They're crowded.", "They're modern."], 1, "'people live… dramatically longer and healthier lives'."),
          mc("What did researchers find behind the longevity?", ["A secret superfood.", "Familiar factors: plant-based diet, gentle activity, community, purpose.", "A special gene.", "Nothing."], 1, "'almost boringly familiar: a mostly plant-based diet… community… purpose'."),
          mc("What is the 'great paradox'?", ["The secret is hidden.", "We know the ingredients of a long life but largely don't follow them.", "Nobody knows anything.", "It only works there."], 1, "'The difficulty lies not in knowing what to do but in doing it'."),
          mc("How do blue-zone inhabitants live healthily?", ["Through heroic willpower.", "Their environment makes the healthy choice natural and easy.", "By dieting.", "By luck alone."], 1, "'an environment that makes the healthy choice the natural, easy… one'."),
          mc("What does this suggest about health?", ["It's pure willpower.", "It depends less on willpower than on the environment we inhabit.", "It's genetic.", "It's random."], 1, "'health depends less on individual willpower than on the environment'."),
          mc("What is the 'quietly revolutionary' implication?", ["Try harder.", "Reshape our surroundings to make the healthy choice the easy one.", "Move away.", "Give up."], 1, "'the patient reshaping of our surroundings to make the healthy choice the easy one'."),
        ],
      },
      p6: {
        title: "Why we ignore good advice",
        text: "We all know, more or less, how to be healthy. (1)___ Eat well, move more, sleep enough, drink less, don't smoke — the basic advice is simple, well known, and endlessly repeated.\n\nAnd yet, knowing all this, most of us fail to act on it. (2)___ There is, it seems, a vast and stubborn gap between knowing what is good for us and actually doing it.\n\nWhy should this be? Part of the answer lies in the way our brains handle time. (3)___ The costs of unhealthy choices lie mostly in the distant future, while their pleasures are immediate and vivid.\n\nFaced with a certain, present pleasure and a vague, future cost, our instincts pull us powerfully towards the former. (4)___ The cake in front of us feels far more real than the heart attack decades away.\n\nUnderstanding this does not magically solve the problem, but it does point towards better strategies. (5)___ Rather than relying on willpower, which reliably fails, we can reshape our environment to make the healthy choice the easy one. (6)___ The secret, it turns out, is not to fight our nature but to work cleverly around it.",
        options: [
          "The knowledge itself is not in short supply.",                   // A -> gap 1
          "Knowing the right thing is clearly not enough.",                // B -> gap 2
          "We are wired to value the present over the future.",            // C -> gap 3
          "Immediate temptation almost always wins.",                      // D -> gap 4
          "Design can succeed where discipline fails.",                    // E -> gap 5
          "Outsmarting ourselves beats overpowering ourselves.",           // F -> gap 6
          "Nobody has any idea how to stay healthy.",                      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el conocimiento no escasea."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: saberlo no basta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: valoramos el presente sobre el futuro."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la tentación inmediata gana."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el diseño vence a la disciplina."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ser más listos que nosotros mismos."),
        ],
      },
      p7: {
        title: "Four people talk about their health",
        text: "Read what four people say about looking after their health.\n\nA) NADIA: I used to be a gym fanatic — an hour of intense exercise every day. Then I read that sitting for the other fifteen hours undid most of the benefit. Now I focus less on hard workouts and more on just moving constantly through the day: walking, standing, taking the stairs. It's made a bigger difference than the gym ever did.\n\nB) TOM: I've tried every diet going, and none of them worked. I'd lose weight, then put it all back on, plus more. What finally worked was giving up on 'diets' altogether and just making small, permanent changes I could actually keep up — cooking more, eating a bit less. Slow and boring, but it stuck.\n\nC) PRIYA: The thing that transformed my health wasn't willpower — it was changing my environment. I stopped keeping junk food in the house, put my running shoes by the door, and made the healthy choice the easy one. When I relied on discipline, I failed. When I designed my surroundings, it became almost automatic.\n\nD) SAM: What I've come to believe is that health is mostly about how you live every day, not the occasional grand gesture. It's not the odd salad or the New Year gym membership; it's the small, unglamorous habits repeated for years. There's no secret and no shortcut — just the daily, patient business of looking after yourself.\n",
        q: [
          mc("Who shifted from intense workouts to constant daily movement?", ["A", "B", "C", "D"], 0, "Nadia: 'more on just moving constantly through the day'."),
          mc("Who succeeded by abandoning 'diets' for small permanent changes?", ["A", "B", "C", "D"], 1, "Tom: 'giving up on \"diets\"… small, permanent changes'."),
          mc("Who transformed their health by changing their environment?", ["A", "B", "C", "D"], 2, "Priya: 'changing my environment'."),
          mc("Who believes health is about daily habits, not grand gestures?", ["A", "B", "C", "D"], 3, "Sam: 'how you live every day, not the occasional grand gesture'."),
          mc("Who learned that sitting undid the benefit of the gym?", ["A", "B", "C", "D"], 0, "Nadia: 'sitting for the other fifteen hours undid most of the benefit'."),
          mc("Who used to lose weight and then regain it 'plus more'?", ["A", "B", "C", "D"], 1, "Tom: 'put it all back on, plus more'."),
          mc("Who put their running shoes by the door?", ["A", "B", "C", "D"], 2, "Priya: 'put my running shoes by the door'."),
          mc("Who says there's 'no secret and no shortcut'?", ["A", "B", "C", "D"], 3, "Sam: 'There's no secret and no shortcut'."),
          mc("Who failed when relying on discipline?", ["A", "B", "C", "D"], 2, "Priya: 'When I relied on discipline, I failed'."),
          mc("Who found small permanent changes 'stuck'?", ["A", "B", "C", "D"], 1, "Tom: 'Slow and boring, but it stuck'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Staying healthy is a matter of personal willpower.'\nComenta estos dos aspectos y añade uno propio:\n1. individual choices (las decisiones individuales)\n2. our environment and society (el entorno y la sociedad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to stay healthy without a gym' — da consejos prácticos y realistas.\n· CARTA a un/a amigo/a que quiere ponerse en forma: anímale y comparte lo que a ti te funciona.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: I gave up on diets and just made small changes I could actually keep — and it finally worked. Two. Man: The doctor said even a daily walk would do more for me than any medicine. Three. Woman: I realised sitting all day was undoing all my time at the gym. Four. Man: What changed everything wasn't willpower — it was keeping junk food out of the house. Five. Woman: In those villages, people live past a hundred, and there's no secret — just how they live. Six. Man: I've been running for two years now, and I feel better than ever. Seven. Woman: You don't have to join a gym to get fit; there are plenty of other ways. Eight. Man: I wish I'd started looking after my health when I was younger.", [
      mc("1. What finally worked for the woman?", ["A strict diet.", "Small changes she could keep.", "A gym."], 1, "'small changes I could actually keep'."),
      mc("2. What did the doctor recommend?", ["Medicine.", "A daily walk.", "Surgery."], 1, "'even a daily walk would do more… than any medicine'."),
      mc("3. What did the woman realise?", ["The gym was enough.", "Sitting all day was undoing her gym time.", "She should sit more."], 1, "'sitting all day was undoing all my time at the gym'."),
      mc("4. What changed everything for the man?", ["Willpower.", "Keeping junk food out of the house.", "A diet."], 1, "'keeping junk food out of the house'."),
      mc("5. What's the 'secret' of the long-lived villagers?", ["A superfood.", "There's no secret — just how they live.", "Good genes."], 1, "'there's no secret — just how they live'."),
      mc("6. How does the man feel after two years running?", ["Tired.", "Better than ever.", "The same."], 1, "'I feel better than ever'."),
      mc("7. What does the woman say about getting fit?", ["You must join a gym.", "You don't have to join a gym.", "It's impossible."], 1, "'You don't have to join a gym'."),
      mc("8. What does the man regret?", ["Exercising.", "Not looking after his health sooner.", "His diet."], 1, "'I wish I'd started… when I was younger'."),
    ]),

    ...speakingParts({ p1: "qué haces para mantenerte sano/a y qué te gustaría mejorar en tu estilo de vida", p2: "dos formas de mantenerse en forma (alguien entrenando duro en un gimnasio y alguien paseando al aire libre): compáralas y especula", p3: "qué es lo más importante para estar sano (la alimentación, el ejercicio, el sueño, evitar el estrés, el entorno en que vives): comentadlo y elegid lo esencial", p4: "la salud: si depende de la fuerza de voluntad o del entorno, por qué ignoramos los buenos consejos y qué podría hacer la sociedad para ayudarnos" }),

    SUMMARY("Resumen del Día 56", [
      "Reading & Use of English: 1h15 para 7 partes; reparte el tiempo, no te atasques, nunca dejes nada en blanco, revisa al final.",
      "Repaso de errores: preposiciones dependientes, 'people are', 'I am 20', falsos amigos (actually/sensible).",
      "Vocabulario de salud física. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 57", "Cronométrate haciendo una P5 (12 min) y una P6 (14 min). Repasa las flashcards. Mañana: simulacro de Reading en condiciones de examen."),
  ],
};

// ───────────────────────── DÍA 57 ─────────────────────────
const DAY57 = {
  title: "Día 57 — Simulacro de Reading en condiciones de examen · La alimentación",
  description: "Práctica cronometrada de las partes de comprensión lectora (P5–P7) con gestión del tiempo. Vocabulario de alimentación y ejercicio. Las 4 destrezas (formato B2); Listening P2.",
  pedagogy: {
    objective: "Leer con eficacia y responder con precisión bajo presión de tiempo.",
    summary: "Simulacro Reading; alimentación/ejercicio; Use of English P1–P7, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["leer cada texto entero varias veces (pierdes tiempo).", "elegir por 'palabra igual'.", "no justificar la respuesta con el texto."],
    reviewPrompts: ["¿Cuánto tiempo dedicas a la P7 (multiple matching)?", "¿Cómo evitas el distractor en la P5?"],
  },
  items: [
    TEXT("🏁 Recta final (2/5). Hoy READING en condiciones de examen: comprensión detallada, gapped text y multiple matching cronometrados. Vocabulario: la ALIMENTACIÓN y el EJERCICIO."),
    GRAMMAR("Técnica de lectura eficaz — Reading", `El objetivo NO es leer todo con la misma atención, sino leer ESTRATÉGICAMENTE:
· SKIMMING: primera lectura rápida para captar la idea general y la estructura.
· SCANNING: buscar información concreta (nombres, fechas, palabras clave) sin leer todo.
· LECTURA DETALLADA: solo la parte que responde a la pregunta.
POR PARTE:
· P5: skim el texto → para cada pregunta, localiza el párrafo, léelo con cuidado, y elige la opción que PARAFRASEA lo que dice (no la que repite palabras).
· P6: lee el texto SIN los huecos para captar el hilo → resuelve primero los huecos fáciles (pistas claras) → los difíciles por eliminación.
· P7: lee las PREGUNTAS primero, subraya la idea clave → scan los textos buscando esa idea parafraseada. No leas los textos enteros de principio a fin.
⚠️ Cada respuesta se justifica con una frase del texto. Si no la encuentras, es probable que sea un distractor.`),
    TIP("El día del examen", "Si un texto te agobia, respira y recuerda: no necesitas entender CADA palabra, solo la información que piden las preguntas. Marca lo que dudas y sigue; el tiempo perdido en una pregunta imposible te cuesta tres fáciles."),
    WARN("Errores típicos del hispanohablante (repaso global 2/4)", "· Orden de palabras: adjetivo ANTES del sustantivo ('a red car', no 'a car red').\n· 'Very much interesting' ❌ → 'very interesting' ✅.\n· Doble negación: 'I don't know nothing' ❌ → 'I don't know anything' ✅.\n· 'Explain me' ❌ → 'explain to me' ✅. 'Discuss about' ❌ → 'discuss' ✅."),
    grammarEx("Reading — Técnica aplicada (bajo presión)", "Identifica la respuesta correcta o la pista.", [
      mc("P5: text says 'the results were inconclusive'. Correct option:", ["clear proof", "no firm conclusion", "total failure"], 1, "inconclusive = no firm conclusion."),
      mc("P5: which is likely a DISTRACTOR?", ["an option paraphrasing the idea", "an option repeating a keyword out of context", "an option matching the meaning"], 1, "repetir palabra fuera de contexto = trampa."),
      mc("P6: gap followed by 'This, however, proved false.' The missing sentence states…", ["a claim later shown false", "a question", "a place"], 0, "'This… proved false' → antes va una afirmación."),
      mc("P7: question asks who 'changed their mind'. Scan for someone who says…", ["'I've always thought this'", "'I used to believe X, but now…'", "'I never think'"], 1, "changed their mind = used to… but now."),
      mc("P6: 'As a consequence, prices rose.' The gap sentence describes…", ["a cause", "an opinion", "a date"], 0, "'As a consequence' → causa antes."),
      mc("P5: 'she was taken aback' most nearly means she was…", ["pleased", "surprised", "bored"], 1, "taken aback = surprised."),
      mc("Fastest approach to P7 (multiple matching):", ["read all texts fully first", "read questions first, then scan", "guess"], 1, "preguntas primero, luego scan."),
    ]),
    GRAMMAR("Vocabulario del día — La alimentación y el ejercicio", "Léxico de alimentación (B2)."),
    deck("B2 S12D57 — Alimentación y ejercicio", [
      ["diet", "dieta / alimentación", "A balanced diet is essential.", "sustantivo", "ˈdaɪət"],
      ["nutritious", "nutritivo/a", "Vegetables are highly nutritious.", "adjetivo", "njuˈtrɪʃəs"],
      ["processed food", "comida procesada", "Cut down on processed food.", "sustantivo", "ˈprəʊsest fuːd"],
      ["ingredient", "ingrediente", "Fresh ingredients taste better.", "sustantivo", "ɪnˈɡriːdiənt"],
      ["portion", "porción / ración", "Watch your portion sizes.", "sustantivo", "ˈpɔːʃn"],
      ["cut down on", "reducir (el consumo de)", "I've cut down on sugar.", "phrasal verb", "kʌt ˈdaʊn ɒn"],
      ["balanced", "equilibrado/a", "Aim for a balanced diet.", "adjetivo", "ˈbælənst"],
      ["stamina", "resistencia / aguante", "Running builds stamina.", "sustantivo", "ˈstæmɪnə"],
      ["moderation", "moderación", "Everything is fine in moderation.", "sustantivo", "ˌmɒdəˈreɪʃn"],
      ["craving", "antojo / ansia", "I get cravings for chocolate.", "sustantivo", "ˈkreɪvɪŋ"],
    ]),
    vocabEx("Vocabulario — La alimentación y el ejercicio", "Elige la opción correcta.", [
      mc("Food that is full of the nutrients you need is ___.", ["nutritious", "processed", "craving"], 0, "nutritious."),
      mc("A diet with the right amount of everything is ___.", ["balanced", "processed", "nutritious"], 0, "balanced."),
      mc("To reduce how much of something you consume is to ___ it.", ["cut down on", "build up", "take up"], 0, "cut down on."),
      mc("The ability to keep going during exercise is ___.", ["stamina", "portion", "craving"], 0, "stamina."),
      mc("A strong desire for a particular food is a ___.", ["craving", "portion", "ingredient"], 0, "craving."),
      mc("Doing something in a sensible, limited amount is doing it in ___.", ["moderation", "portion", "diet"], 0, "moderation."),
    ]),

    ...uoe({
      p1: {
        title: "You are what you eat",
        text: "The old saying that 'you are what you eat' turns out to be truer than its inventors could possibly have (1)___. Modern science has revealed, in extraordinary detail, just how profoundly our diet shapes not only our bodies but our minds and moods. What we eat affects our risk of virtually every major disease, our energy levels, our sleep, and even, growing evidence suggests, our mental health. And yet, paradoxically, at the very moment when we understand more than ever about (2)___ nutrition, our collective diet has, in many ways, never been worse. The modern food environment, dominated by cheap, heavily processed products engineered to be irresistible, pushes us relentlessly towards exactly the foods we (3)___ eat least. Faced with this, individual willpower stands little chance. The solution, most experts now agree, is not to (4)___ people for their choices but to change the environment that shapes those choices — to make good food cheaper and more available, and to curb the relentless marketing of the bad. This is, of course, far easier said (5)___ done, involving as it does powerful commercial interests. But the alternative — leaving individuals to struggle, alone and unaided, against an environment expressly designed to (6)___ them — has manifestly failed. If we are serious about improving the nation's health, we will have to look beyond the individual to the world we have built (7)___ them. We are, indeed, what we eat; but what we eat is shaped, far more than we like to (8)___, by forces beyond our individual control.",
        q: [
          mc("(1)", ["imagined", "thought", "known", "realised"], 0, "'could… have imagined'."),
          mc("(2)", ["good", "healthy", "proper", "right"], 0, "'about good nutrition'."),
          mc("(3)", ["should", "ought", "must", "might"], 0, "'the foods we should eat least'."),
          mc("(4)", ["blame", "fault", "accuse", "judge"], 0, "'not to blame people'."),
          mc("(5)", ["than", "then", "that", "as"], 0, "'easier said than done'."),
          mc("(6)", ["defeat", "beat", "overcome", "conquer"], 0, "'designed to defeat them'."),
          mc("(7)", ["around", "round", "about", "over"], 0, "'the world we have built around them'."),
          mc("(8)", ["admit", "accept", "confess", "believe"], 0, "'more than we like to admit'."),
        ],
      },
      p2: {
        title: "The exercise myth",
        text: "One of the most persistent myths about weight loss is that (1)___ can exercise your way to a slim body. Millions of people, believing this, join gyms every January, exhaust themselves on treadmills, and are then baffled (2)___ the scales barely move. The uncomfortable truth, which the fitness industry has little interest in publicising, is that exercise, (3)___ its countless benefits, is a remarkably ineffective way to lose weight. The reason is simple arithmetic: it is far, far easier to consume calories (4)___ it is to burn them. A single slice of cake can undo an hour of hard running in a matter of minutes. This does not (5)___ any means make exercise pointless — its benefits for health, mood and longevity are enormous and beyond dispute. But if weight loss is your goal, the evidence is clear that it is won or lost overwhelmingly in the kitchen, (6)___ in the gym. Exercise makes you healthier and fitter; it does not, on (7)___ own, make you thin. Understanding this distinction saves a great deal of frustration. Exercise for your health, your heart and your happiness, by all means — the case for it could hardly be stronger. But do not expect it, on its own, (8)___ solve a problem whose roots lie mainly on your plate.",
        q: [
          fb("(1)", ["you"], "'you can exercise your way'."),
          fb("(2)", ["when"], "'baffled when the scales barely move'."),
          fb("(3)", ["for", "despite"], "'exercise, for/despite its countless benefits'."),
          fb("(4)", ["than"], "'easier to consume calories than it is to burn'."),
          fb("(5)", ["by"], "'by any means'."),
          fb("(6)", ["not"], "'in the kitchen, not in the gym'."),
          fb("(7)", ["its"], "'on its own'."),
          fb("(8)", ["to"], "'expect it… to solve'."),
        ],
      },
      p3: {
        title: "The rise of the ready meal",
        text: "The way we eat has undergone a (1)___ transformation in the space of a single generation. Not so long ago, the vast majority of meals were cooked at home, from raw (2)___, by someone — usually, it must be said, a woman — who possessed the skills and the time to do so. Today, an ever-growing (3)___ of what we eat comes ready-made: processed, packaged, and requiring little more than to be heated up. This shift has brought some genuine (4)___. It has freed millions of people, women especially, from the daily burden of cooking, and given us an unprecedented variety of foods from around the world. But it has come at a (5)___. Ready meals and processed foods tend to be far less (6)___ than home cooking, packed with salt, sugar and fat, and stripped of much of their nutritional value. As a society, we have, in effect, outsourced our cooking to corporations whose primary interest is profit, not our health. Reversing this trend is not simply a matter of (7)___ people to cook more, tempting though that solution is. It requires grappling with the deeper forces — of time, money and convenience — that have made the ready meal so (8)___ in the first place. We cannot simply wish our way back to a vanished world of home cooking; we must find ways to eat well within the busy, pressured lives most of us actually lead.",
        items: [
          { root: "revolution", accepted: ["revolutionary"], hint: "'a revolutionary transformation' → revolutionary." },
          { root: "ingredient", accepted: ["ingredients"], hint: "'from raw ingredients' → ingredients." },
          { root: "proportion", accepted: ["proportion"], hint: "'an ever-growing proportion' (sustantivo)." },
          { root: "benefit", accepted: ["benefits"], hint: "'some genuine benefits' → benefits." },
          { root: "cost", accepted: ["cost"], hint: "'come at a cost' (sustantivo)." },
          { root: "nutrition", accepted: ["nutritious"], hint: "'far less nutritious' → nutritious." },
          { root: "urge", accepted: ["urging"], hint: "'a matter of urging people' → urging." },
          { root: "attract", accepted: ["attractive"], hint: "'so attractive in the first place' → attractive." },
        ],
      },
      p4: {
        title: "Transformaciones — alimentación (simulacro)",
        items: [
          { s1: "I should eat less sugar.", key: "DOWN", s2: "I should ___ sugar.", accepted: ["cut down on"], explanation: "cut down on." },
          { s1: "This meal has fewer calories than that one.", key: "AS", s2: "That meal doesn't have ___ this one.", accepted: ["as few calories as"], explanation: "as few… as." },
          { s1: "It isn't necessary to give up chocolate completely.", key: "HAVE", s2: "You ___ up chocolate completely.", accepted: ["don't have to give"], explanation: "don't have to." },
          { s1: "'You eat too much processed food,' she told me.", key: "SAID", s2: "She ___ too much processed food.", accepted: ["said I ate"], explanation: "reported: eat→ate." },
          { s1: "Home-cooked food is generally healthier than ready meals.", key: "AS", s2: "Ready meals are generally not ___ home-cooked food.", accepted: ["as healthy as"], explanation: "as healthy as." },
          { s1: "People say breakfast is the most important meal.", key: "SAID", s2: "Breakfast ___ the most important meal.", accepted: ["is said to be"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The doctor who prescribed vegetables",
        text: "When Dr Amara Okafor took over a struggling medical practice in one of the poorest districts of a large industrial city, she inherited a caseload that would have daunted anyone. Her patients suffered, in overwhelming numbers, from the diseases of poor diet and hard living: diabetes, heart disease, obesity, and the depression and exhaustion that so often accompany them. For years, like doctors everywhere, she had treated these conditions in the conventional way, with a rising tide of pills and prescriptions. And for years, like doctors everywhere, she had watched her patients grow, on the whole, no better.\n\nIt was this sense of fighting a losing battle that led her, eventually, to a radical rethinking of her role. The root cause of most of her patients' suffering, she came to believe, was not really medical at all. It was the food they ate — cheap, processed, and nutritionally impoverished — and the impossibility, in their circumstances, of eating any better. No pill she could prescribe addressed this root cause; at best, her medicines managed the symptoms of a problem they could never cure. If she truly wanted to help her patients, she reasoned, she would have to find a way to change not their medication but their diet.\n\nThe scheme she devised was, by the standards of conventional medicine, distinctly unorthodox. In partnership with a local market and a charity, she began, quite literally, to prescribe vegetables. Patients with diet-related conditions were given not only medical advice but vouchers for fresh fruit and vegetables, along with practical classes in how to cook cheap, healthy meals from scratch — a skill that many, having grown up on processed food, had never learned. It was, she cheerfully admitted, not the sort of thing they had taught her in medical school.\n\nThe results, when they came, were striking enough to attract attention far beyond her small practice. Patients who took part not only improved their diets but, in many cases, saw genuine improvements in their health: better blood sugar, lower blood pressure, weight loss, and — a benefit she had not anticipated — a marked lifting of mood and energy. Some were able to reduce or even come off medications they had taken for years. Just as importantly, the classes gave people skills, confidence and a sense of control over their own health that no prescription ever could.\n\nDr Okafor is careful not to overstate her results, or to suggest that vegetables can cure all ills; the problems of poverty and poor health, she knows, run far deeper than any single scheme can reach. But her experiment points, she believes, towards an important and often neglected truth. For a great many of the conditions that fill our surgeries and hospitals, the most powerful medicine is not to be found in a pharmacy at all. It is to be found on a plate. And a health system that spends fortunes treating the consequences of poor diet, while doing almost nothing to address its causes, is, she argues, treating the symptoms of a disease while ignoring the disease itself.",
        q: [
          mc("What kind of caseload did Dr Okafor inherit?", ["Wealthy patients.", "Patients suffering from diseases of poor diet and hard living.", "Children only.", "Healthy people."], 1, "'diabetes, heart disease, obesity… of poor diet and hard living'."),
          mc("What did she come to believe was the root cause?", ["Bad luck.", "The food her patients ate and the impossibility of eating better.", "Genetics.", "Too few pills."], 1, "'It was the food they ate… and the impossibility… of eating any better'."),
          mc("What was her unorthodox scheme?", ["More pills.", "Prescribing vegetables, vouchers and cooking classes.", "Surgery.", "Closing the practice."], 1, "'she began… to prescribe vegetables… classes in how to cook'."),
          mc("What results did the scheme produce?", ["None.", "Improved health, and some patients reduced their medication.", "Worse health.", "Higher costs only."], 1, "'genuine improvements in their health… come off medications'."),
          mc("What benefit had she NOT anticipated?", ["Weight gain.", "A lifting of mood and energy.", "More illness.", "Nothing."], 1, "'a marked lifting of mood and energy'."),
          mc("What is the 'neglected truth' her experiment points to?", ["Pills cure everything.", "For many conditions, the most powerful medicine is on a plate, not in a pharmacy.", "Diet doesn't matter.", "Doctors are useless."], 1, "'the most powerful medicine… is to be found on a plate'."),
        ],
      },
      p6: {
        title: "The trouble with 'superfoods'",
        text: "Every so often, a particular food is anointed a 'superfood' and briefly becomes the object of enormous enthusiasm. (1)___ Sales soar, prices rise, and for a few months the food in question is hailed as a near-miraculous key to health.\n\nThe trouble is that the whole concept is largely a marketing invention. (2)___ There is no scientific definition of a 'superfood', and nutritionists tend to regard the term with weary scepticism.\n\nThis is not to say that the foods in question are not healthy. (3)___ Most so-called superfoods — berries, leafy greens, nuts — are indeed nutritious and well worth eating.\n\nThe problem lies in the implication that any single food holds some special power. (4)___ Health comes not from any magic ingredient but from an overall pattern of eating, sustained over years.\n\nThe obsession with superfoods, then, is not just harmless fun; it can actively mislead. (5)___ It distracts us from the boring but essential truth that a good diet is about the whole, not any glamorous part. (6)___ There are, in the end, no magic foods — only good and bad overall patterns of eating.",
        options: [
          "The pattern repeats with remarkable regularity.",               // A -> gap 1
          "The word tells you more about advertising than nutrition.",     // B -> gap 2
          "The individual foods are usually perfectly good ones.",         // C -> gap 3
          "No single food can make an unhealthy diet healthy.",            // D -> gap 4
          "It sells us a fantasy of the effortless quick fix.",            // E -> gap 5
          "The whole diet matters far more than any one item.",            // F -> gap 6
          "Superfoods have been proven to cure every disease.",            // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el patrón se repite."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la palabra es publicidad."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los alimentos sí son buenos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ningún alimento salva una mala dieta."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: vende la fantasía del atajo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la dieta entera importa más."),
        ],
      },
      p7: {
        title: "Four people talk about food and eating",
        text: "Read what four people say about their relationship with food.\n\nA) NADIA: I stopped chasing 'superfoods' and fad diets years ago. There's always a new miracle berry or a new thing you must cut out. It's nonsense, mostly marketing. I just try to eat lots of vegetables, not too much, mostly home-cooked. Boring, unglamorous, and it works far better than any diet I ever tried.\n\nB) TOM: What opened my eyes was realising you can't outrun a bad diet. I ran marathons and still couldn't lose weight, because I was eating whatever I liked, assuming the exercise cancelled it out. It doesn't. Weight is won or lost in the kitchen. I exercise for my health now, not to earn dessert.\n\nC) PRIYA: For me it's about time and money, not willpower. Cooking from scratch is lovely if you have the time and can afford fresh food. When I was working two jobs, exhausted and broke, ready meals weren't laziness — they were survival. People who lecture the poor about diet have no idea what it's actually like.\n\nD) SAM: I learned to cook late, in my thirties, and it transformed how I eat. I'd grown up on processed food and genuinely didn't know how to make a meal from raw ingredients. Once I learned — cheap, simple, healthy dishes — everything changed. I think cooking should be taught to everyone; it's a survival skill we've quietly lost.\n",
        q: [
          mc("Who stopped chasing 'superfoods' and fad diets?", ["A", "B", "C", "D"], 0, "Nadia: 'I stopped chasing \"superfoods\" and fad diets'."),
          mc("Who realised 'you can't outrun a bad diet'?", ["A", "B", "C", "D"], 1, "Tom: 'you can't outrun a bad diet'."),
          mc("Who stresses that diet is about time and money, not willpower?", ["A", "B", "C", "D"], 2, "Priya: 'it's about time and money, not willpower'."),
          mc("Who learned to cook late and was transformed by it?", ["A", "B", "C", "D"], 3, "Sam: 'I learned to cook late… it transformed how I eat'."),
          mc("Who says weight is 'won or lost in the kitchen'?", ["A", "B", "C", "D"], 1, "Tom: 'Weight is won or lost in the kitchen'."),
          mc("Who defends the poor against lectures about diet?", ["A", "B", "C", "D"], 2, "Priya: 'People who lecture the poor… have no idea'."),
          mc("Who thinks cooking should be taught to everyone?", ["A", "B", "C", "D"], 3, "Sam: 'cooking should be taught to everyone'."),
          mc("Who eats 'lots of vegetables, not too much, mostly home-cooked'?", ["A", "B", "C", "D"], 0, "Nadia: 'lots of vegetables, not too much, mostly home-cooked'."),
          mc("Who now exercises for health, 'not to earn dessert'?", ["A", "B", "C", "D"], 1, "Tom: 'not to earn dessert'."),
          mc("Who once relied on ready meals as 'survival'?", ["A", "B", "C", "D"], 2, "Priya: 'ready meals weren't laziness — they were survival'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Schools should teach children how to cook and eat healthily.'\nComenta estos dos aspectos y añade uno propio:\n1. health (la salud)\n2. life skills (las habilidades para la vida)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· REVIEW de un restaurante o una app de comida saludable que hayas probado: describe y recomienda (o no).\n· ARTÍCULO: 'Eating well on a budget' — da consejos prácticos para comer sano sin gastar mucho.", 140, 190),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a un nutricionista, el señor Adams, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a nutritionist called Mr Adams giving a talk. Mr Adams: Let me start by demolishing a myth: there is no such thing as a superfood. It's a marketing term, not a scientific one. Health comes from your whole diet, not any single magic ingredient. My second point is one people hate to hear: you cannot outrun a bad diet. Exercise is wonderful for your health, but for weight, what matters is the kitchen, not the gym. Third, and this surprises people, the enemy isn't fat or even sugar in isolation — it's ultra-processed food, engineered to make you overeat. Cook from raw ingredients and most problems solve themselves. Now, people always ask me about willpower. Honestly, I think willpower is overrated. The trick is to change your environment: don't keep junk in the house, and the temptation disappears. And finally, the most important thing I can tell you: forget diets. Diets fail because they end. What works is a permanent, gradual change you can keep up for life. Small, sustainable steps beat dramatic transformations every single time.", [
      fb("There is no such thing as a ___.", ["superfood"], "'there is no such thing as a superfood'."),
      fb("Health comes from your whole ___, not one ingredient.", ["diet"], "'your whole diet'."),
      fb("You cannot ___ a bad diet.", ["outrun"], "'you cannot outrun a bad diet'."),
      fb("For weight, what matters is the ___, not the gym.", ["kitchen"], "'the kitchen, not the gym'."),
      fb("The real enemy is ultra-___ food.", ["processed"], "'ultra-processed food'."),
      fb("Mr Adams thinks ___ is overrated.", ["willpower"], "'willpower is overrated'."),
      fb("The trick is to change your ___.", ["environment"], "'change your environment'."),
      fb("Diets fail because they ___.", ["end"], "'Diets fail because they end'."),
    ]),

    ...speakingParts({ p1: "cómo es tu alimentación, si cocinas y qué te gustaría cambiar en tu dieta", p2: "dos formas de comer (una comida casera hecha con ingredientes frescos y una comida rápida procesada): compáralas y especula sobre su efecto en la salud", p3: "qué ayuda más a comer sano (cocinar en casa, aprender nutrición, reducir lo procesado, comer con moderación, que la comida sana sea más barata): comentadlo y elegid lo más eficaz", p4: "la alimentación: si se puede compensar una mala dieta con ejercicio, si comer sano depende del dinero y qué podría hacer la sociedad para que comamos mejor" }),

    SUMMARY("Resumen del Día 57", [
      "Lectura estratégica: skimming (idea general), scanning (dato concreto), lectura detallada (solo la parte que responde).",
      "P5 paráfrasis (no palabra repetida); P6 primero los huecos fáciles con pistas; P7 preguntas primero y scan.",
      "Vocabulario de alimentación. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 58", "Cronométrate haciendo una P7 completa (11 min). Repasa las flashcards. Mañana: simulacro de Writing y Listening."),
  ],
};

// ───────────────────────── DÍA 58 ─────────────────────────
const DAY58 = {
  title: "Día 58 — Simulacro de Writing y Listening · El bienestar mental",
  description: "Práctica cronometrada del Writing (essay + P2 en 1h20) y del Listening (4 partes, ~40 min). Vocabulario de bienestar mental y estrés. Las 4 destrezas (formato B2); Listening P3.",
  pedagogy: {
    objective: "Escribir dos tareas dentro del tiempo y afrontar el Listening completo con confianza.",
    summary: "Simulacro Writing y Listening; bienestar mental; Use of English P1–P7, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["no dividir el tiempo entre las dos tareas de Writing.", "no revisar lo escrito.", "distraerse en el Listening y perder el hilo."],
    reviewPrompts: ["¿Cuánto dura el Writing y cuántas tareas tiene?", "¿Cuántas veces se oye cada audio del Listening?"],
  },
  items: [
    TEXT("🏁 Recta final (3/5). Hoy WRITING y LISTENING en condiciones de examen. Vocabulario: el BIENESTAR MENTAL y el ESTRÉS."),
    GRAMMAR("Gestión del tiempo — Writing y Listening", `WRITING (1 hora 20 minutos, DOS tareas de 140–190 palabras):
· Reparte ~40 min por tarea. Para cada una: ~5 min planificar, ~28 min escribir, ~7 min revisar.
· Haz PRIMERO la Parte 1 (essay, obligatoria) o la que más domines; asegura una tarea completa antes de empezar la otra.
· REVISA: gramática, ortografía, puntuación, conectores, número de palabras y que respondes a TODO lo pedido.
· Cuida el registro y la estructura de párrafos: puntúan tanto como la gramática.
LISTENING (~40 minutos, 4 partes, TODO se oye DOS VECES):
· Usa la pausa previa a cada parte para LEER las preguntas y subrayar.
· 1ª escucha: responde lo que puedas. 2ª escucha: confirma y completa lo que faltó.
· No te quedes 'enganchado/a' en una pregunta: si la pierdes, sigue o la coges en la 2ª vuelta.
· Al final, pasa las respuestas con cuidado y no dejes ningún hueco vacío (¡adivina con criterio!).
⚠️ En Writing, dos tareas incompletas puntúan menos que dos completas algo imperfectas. Gestiona el reloj.`),
    TIP("El día del examen", "Writing: memoriza tu 'esqueleto' de essay y tus fórmulas de apertura/cierre para cada formato de la P2; así no pierdes tiempo pensando la estructura. Listening: si te pierdes, respira y espera la siguiente pregunta — no arrastres el nervio."),
    WARN("Errores típicos del hispanohablante (repaso global 3/4)", "· '-ing' vs infinitivo tras verbo (enjoy doing / want to do): repásalo.\n· Tercera persona -s: 'He live' ❌ → 'He lives' ✅.\n· 'Since' (desde) vs 'for' (durante): 'for two years', 'since 2019'.\n· Ortografía frecuente: because, environment, government, comfortable, which, receive (i antes de e excepto tras c)."),
    grammarEx("Writing & Listening — Simulacro (funciones y precisión)", "Elige/completa con precisión.", [
      mc("Essay — a strong contrast connector:", ["Moreover", "On the other hand", "Firstly"], 1, "On the other hand = contraste."),
      mc("Listening P2 — you clearly hear 'stress'. You should write:", ["pressure", "stress", "worry"], 1, "escribe la palabra EXACTA que oyes."),
      fb("Essay conclusion opener: 'To ___ up, I believe that…' ", ["sum"], "To sum up."),
      mc("Which register suits an informal email to a friend?", ["I am writing to inform you", "Just wanted to let you know", "I hereby notify you"], 1, "informal → let you know."),
      fb("Third person: 'Exercise ___ (reduce) stress.' ", ["reduces"], "reduces (3ª persona -s)."),
      mc("Best way to start planning an essay?", ["Start writing immediately", "Jot ideas for each point, then order them", "Copy the question"], 1, "planifica antes de escribir."),
      fb("'I've felt calmer ___ I started meditating.' (desde)", ["since"], "since + punto en el tiempo."),
    ]),
    GRAMMAR("Vocabulario del día — El bienestar mental y el estrés", "Léxico de salud mental (B2)."),
    deck("B2 S12D58 — Bienestar mental y estrés", [
      ["stress", "estrés", "Chronic stress harms your health.", "sustantivo", "stres"],
      ["anxiety", "ansiedad", "She struggles with anxiety.", "sustantivo", "æŋˈzaɪəti"],
      ["wellbeing", "bienestar", "Sleep is vital for wellbeing.", "sustantivo", "ˌwelˈbiːɪŋ"],
      ["mindfulness", "atención plena / mindfulness", "Mindfulness can reduce stress.", "sustantivo", "ˈmaɪndflnəs"],
      ["overwhelmed", "desbordado/a", "I felt completely overwhelmed.", "adjetivo", "ˌəʊvəˈwelmd"],
      ["cope with", "hacer frente a / sobrellevar", "She learned to cope with pressure.", "phrasal verb", "ˈkəʊp wɪð"],
      ["burnout", "agotamiento (por estrés)", "Overwork can lead to burnout.", "sustantivo", "ˈbɜːnaʊt"],
      ["relax", "relajarse", "Learn to relax and switch off.", "verbo", "rɪˈlæks"],
      ["resilience", "resiliencia", "Resilience helps us bounce back.", "sustantivo", "rɪˈzɪliəns"],
      ["switch off", "desconectar", "It's hard to switch off from work.", "phrasal verb", "swɪtʃ ˈɒf"],
    ]),
    vocabEx("Vocabulario — El bienestar mental y el estrés", "Elige la opción correcta.", [
      mc("A feeling of worry and unease is ___.", ["anxiety", "wellbeing", "resilience"], 0, "anxiety."),
      mc("Extreme exhaustion caused by overwork is ___.", ["burnout", "mindfulness", "wellbeing"], 0, "burnout."),
      mc("To deal successfully with a difficulty is to ___ it.", ["cope with", "switch off", "relax"], 0, "cope with."),
      mc("The state of being comfortable, healthy and happy is ___.", ["wellbeing", "stress", "anxiety"], 0, "wellbeing."),
      mc("Feeling that everything is too much to handle is being ___.", ["overwhelmed", "resilient", "relaxed"], 0, "overwhelmed."),
      mc("To mentally disconnect from work is to ___.", ["switch off", "cope with", "burn out"], 0, "switch off."),
    ]),

    ...uoe({
      p1: {
        title: "The stress epidemic",
        text: "We are, we are constantly told, living through an epidemic of stress. Rates of anxiety and burnout appear to be (1)___, and the language of mental health, once whispered, is now everywhere. Whether we are genuinely more stressed than previous generations is (2)___ to say — our ancestors, after all, faced dangers and hardships we can scarcely imagine. But something about modern life does seem to place a peculiar (3)___ on our mental wellbeing. Part of it is the relentless pace, the sense of always being 'on', of never quite being able to switch (4)___. Our devices, wonderful as they are, mean that work, news and the demands of others follow us everywhere, colonising the quiet spaces in which the mind once rested. Part of it, too, is a culture that increasingly measures our worth by our productivity, leaving us feeling that any moment not spent achieving something is a moment (5)___. Whatever the causes, the consequences are real. Stress, when it becomes chronic, does genuine harm, to body and mind (6)___. Learning to manage it is no longer a luxury but a necessity. This does not require anything exotic. The things that protect our mental health are, for the most part, wonderfully ordinary: sleep, exercise, time in nature, real human connection, and the simple, increasingly (7)___ ability to stop, rest, and do nothing at all. In a world that never stops, perhaps the most radical and necessary skill we can (8)___ is simply learning, once again, how to switch off.",
        q: [
          mc("(1)", ["rising", "growing", "climbing", "increasing"], 0, "'appear to be rising'."),
          mc("(2)", ["hard", "difficult", "tough", "impossible"], 0, "'is hard to say'."),
          mc("(3)", ["strain", "pressure", "stress", "burden"], 0, "'place a peculiar strain'."),
          mc("(4)", ["off", "out", "down", "away"], 0, "'switch off'."),
          mc("(5)", ["wasted", "lost", "gone", "missed"], 0, "'a moment wasted'."),
          mc("(6)", ["alike", "both", "together", "equally"], 0, "'to body and mind alike'."),
          mc("(7)", ["rare", "unusual", "scarce", "uncommon"], 0, "'increasingly rare ability'."),
          mc("(8)", ["acquire", "gain", "learn", "develop"], 0, "'the most… skill we can acquire'."),
        ],
      },
      p2: {
        title: "The myth of relaxation",
        text: "When people are stressed, they are often advised to 'relax', (1)___ if relaxation were a simple switch one could flick at will. But anyone who has lain awake at three in the morning, exhausted (2)___ unable to sleep, knows that it is not so easy. Telling a stressed person to relax is a (3)___ like telling a drowning person to swim: technically correct, but not much use. The truth is that genuine relaxation is a skill, and like any skill, it has (4)___ be learned and practised. It does not come naturally to minds trained, by years of modern life, to be constantly alert and busy. This is (5)___ practices such as mindfulness and meditation have become so popular. Far from being mystical or exotic, they are, at bottom, simply methods for training the mind to do (6)___ it has forgotten how to do: to rest, to be still, to inhabit the present moment rather than racing ahead to the next task or back to the last worry. Whether (7)___ not such practices are for everyone, the underlying insight is sound. In a culture that has forgotten how to stop, the ability to genuinely rest is not something that can simply be summoned on demand. Like fitness, it must be built up, gradually and (8)___ practice, until stillness becomes, once again, something the mind knows how to do.",
        q: [
          fb("(1)", ["as"], "'as if relaxation were a switch'."),
          fb("(2)", ["but", "yet"], "'exhausted but unable to sleep'."),
          fb("(3)", ["bit", "little"], "'a bit like telling'."),
          fb("(4)", ["to"], "'it has to be learned'."),
          fb("(5)", ["why"], "'This is why… have become so popular'."),
          fb("(6)", ["what"], "'to do what it has forgotten'."),
          fb("(7)", ["or"], "'Whether or not'."),
          fb("(8)", ["through", "with"], "'gradually and through practice'."),
        ],
      },
      p3: {
        title: "The power of doing nothing",
        text: "In a culture that (1)___ busyness, the idea of deliberately doing nothing can seem almost (2)___ — a shameful waste of time that could be spent achieving something. Yet a growing body of research suggests that idleness, far from being (3)___, is essential to a healthy and creative mind. When we stop actively concentrating and allow our minds to wander, something (4)___ happens. The brain does not switch off; on the contrary, it enters a distinctive mode of activity in which it processes experiences, consolidates memories, and makes the unexpected (5)___ between ideas from which creativity springs. Many of history's greatest insights, famously, came not during periods of intense effort but during moments of rest — in the bath, on a walk, half-asleep. This is why the modern (6)___ to fill every moment with activity or stimulation may be quietly harmful. A mind that is never allowed to be idle is a mind denied the very conditions in which its deepest work is done. There is, then, a real and (7)___ case for doing nothing — for boredom, for daydreaming, for staring out of the window. What looks like wasted time may be the mind's most (8)___ work. In an age that worships productivity, learning to value, and protect, our idle moments may be one of the wisest things we can do.",
        items: [
          { root: "worship", accepted: ["worships"], hint: "'a culture that worships busyness' → worships." },
          { root: "sin", accepted: ["sinful"], hint: "'almost sinful' → sinful." },
          { root: "waste", accepted: ["wasteful"], hint: "'far from being wasteful' → wasteful." },
          { root: "remark", accepted: ["remarkable"], hint: "'something remarkable happens' → remarkable." },
          { root: "connect", accepted: ["connections"], hint: "'unexpected connections' → connections." },
          { root: "press", accepted: ["pressure"], hint: "'the modern pressure to fill' → pressure." },
          { root: "power", accepted: ["powerful"], hint: "'a real and powerful case' → powerful." },
          { root: "produce", accepted: ["productive"], hint: "'the mind's most productive work' → productive." },
        ],
      },
      p4: {
        title: "Transformaciones — bienestar (simulacro)",
        items: [
          { s1: "I find it hard to relax after work.", key: "DIFFICULTY", s2: "I ___ after work.", accepted: ["have difficulty relaxing"], explanation: "have difficulty + -ing." },
          { s1: "She started meditating, and now she feels calmer.", key: "SINCE", s2: "She has felt calmer ___ meditating.", accepted: ["since she started"], explanation: "since + acción." },
          { s1: "It's important to switch off from work sometimes.", key: "SHOULD", s2: "You ___ from work sometimes.", accepted: ["should switch off"], explanation: "should (consejo)." },
          { s1: "He was so stressed that he couldn't sleep.", key: "SUCH", s2: "He was under ___ that he couldn't sleep.", accepted: ["such stress"], explanation: "such + sustantivo… that." },
          { s1: "'You should take a break,' my friend said.", key: "ADVISED", s2: "My friend ___ a break.", accepted: ["advised me to take"], explanation: "advise sb to do." },
          { s1: "Nothing relaxes me more than a walk in nature.", key: "MOST", s2: "A walk in nature is ___ thing for me.", accepted: ["the most relaxing"], explanation: "superlativo." },
        ],
      },
      p5: {
        title: "The company that slowed down",
        text: "When Sofia Marlowe was appointed to lead a fast-growing technology company, she inherited a workforce that was, by every visible measure, extraordinarily productive — and, by every hidden measure, on the verge of collapse. Her employees worked punishingly long hours; they answered emails at midnight and on weekends; they wore their exhaustion, in the manner of the industry, almost as a badge of honour. The company was successful, admired, and, beneath the surface, quietly falling apart. Talented people were leaving in droves; those who remained were increasingly stressed, cynical and burnt out. Marlowe, who had seen the same pattern destroy companies before, resolved to do something about it.\n\nHer solution ran directly against every instinct of her industry. Rather than demanding that her exhausted staff work harder, she insisted, to widespread astonishment, that they work less. She banned emails outside working hours. She discouraged the long-hours culture that had been a point of pride. She introduced generous holidays and, most radically of all, experimented with a shorter working week, on the same pay. Her competitors, and some of her own board, thought she had taken leave of her senses. Slowing down, in their view, was a recipe for falling behind.\n\nWhat happened next confounded the sceptics. Far from declining, the company's productivity actually rose. Rested, less stressed employees, it turned out, did better work in four days than exhausted ones had done in five or six. They were more creative, made fewer mistakes, and, crucially, they stopped leaving. The talented people who had been heading for the door began to stay; recruitment became easier as word spread of the company's humane culture. The improvement in wellbeing, far from being a cost, proved to be an asset — one that showed up, in time, on the balance sheet.\n\nMarlowe was always careful not to present her approach as a simple magic formula. What worked for her company, she stressed, might not work for every business, and the details mattered enormously. But the underlying principle, she believed, was sound and widely applicable. The assumption, so deeply ingrained in modern working life, that more hours mean more output is, quite simply, false. Beyond a certain point, tired people become less productive, not more; and a culture of overwork, far from being a sign of commitment, is often a sign of poor management and muddled thinking.\n\nHer real achievement, perhaps, was to challenge a belief so widespread that most people had ceased to question it: that the path to success lies through ever-greater effort, ever-longer hours, ever-mounting stress. Her company's experience suggested a quieter and more humane truth. Sometimes the way to achieve more is to do less; the way to go faster is to slow down. In an economy that runs, increasingly, on tired and anxious people, driving themselves towards burnout in the name of productivity, that is a lesson of no small importance — and one that, on the evidence, more companies would do well to learn.",
        q: [
          mc("What state was Sofia Marlowe's workforce in?", ["Relaxed.", "Extraordinarily productive but on the verge of collapse.", "Lazy.", "Small."], 1, "'extraordinarily productive — and… on the verge of collapse'."),
          mc("What was her solution?", ["Work harder.", "To make staff work less.", "To fire people.", "To pay less."], 1, "'she insisted… that they work less'."),
          mc("What did she ban or discourage?", ["Holidays.", "Out-of-hours emails and the long-hours culture.", "Meetings.", "Teamwork."], 1, "'She banned emails outside working hours… discouraged the long-hours culture'."),
          mc("What happened to productivity?", ["It fell.", "It actually rose.", "It vanished.", "It stayed the same."], 1, "'the company's productivity actually rose'."),
          mc("What belief did her approach challenge?", ["That rest matters.", "That more hours mean more output.", "That staff should be paid.", "That success is possible."], 1, "'the assumption… that more hours mean more output is… false'."),
          mc("What 'quieter truth' did her company's experience suggest?", ["Work more.", "Sometimes the way to achieve more is to do less.", "Stress helps.", "Speed always wins."], 1, "'the way to achieve more is to do less'."),
        ],
      },
      p6: {
        title: "The always-on trap",
        text: "For most of human history, work stayed at the workplace. (1)___ When you left the office, the fields or the factory, you left your work behind, and your time was, for better or worse, your own.\n\nThe smartphone has quietly demolished this ancient boundary. (2)___ Work now follows us everywhere, into our homes, our beds, our holidays, buzzing insistently in our pockets at every hour.\n\nThe consequences of this, for our mental health, are only beginning to be understood. (3)___ A mind that is never allowed to fully disconnect from work never gets the rest it needs to recover.\n\nMany of us, of course, feel we have no choice but to remain constantly available. (4)___ We fear that switching off, even briefly, will mark us out as uncommitted or be punished by an anxious employer.\n\nBut this always-on culture serves almost no one well, not even employers. (5)___ Exhausted, perpetually distracted workers are less productive and less creative, not more. (6)___ Reclaiming the right to switch off, far from being a luxury, may be essential to both our wellbeing and our work.",
        options: [
          "The line between work and life was clear and physical.",          // A -> gap 1
          "The boundary that once protected our free time has gone.",       // B -> gap 2
          "Rest requires a genuine break that we no longer take.",          // C -> gap 3
          "The pressure to stay reachable is often self-imposed.",          // D -> gap 4
          "The costs of overwork land on the business too.",                // E -> gap 5
          "Disconnection is a need, not an indulgence.",                    // F -> gap 6
          "Smartphones have made our working lives far calmer.",            // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la línea era clara y física."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la frontera ha desaparecido."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el descanso exige una pausa real."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la presión es autoimpuesta."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: los costes recaen en la empresa."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: desconectar es una necesidad."),
        ],
      },
      p7: {
        title: "Four people talk about stress and rest",
        text: "Read what four people say about managing stress in their lives.\n\nA) NADIA: I hit burnout in my thirties — completely crashed, couldn't work for months. It forced me to change everything. Now I guard my time fiercely: no emails after six, proper holidays, real weekends. People think I'm less committed. I'm not; I'm just not willing to destroy myself again. Rest isn't laziness — it's survival.\n\nB) TOM: What helped me was learning that relaxation is a skill you have to practise, not a switch you flick. I started meditating, badly at first, and gradually got better at just being still. My mind had forgotten how to rest. It took months, but now I can genuinely switch off in a way I couldn't before.\n\nC) PRIYA: Honestly, I'm suspicious of all the 'wellness' talk. It puts the burden on individuals to cope with stress, when the real problem is often the workplace itself — impossible workloads, always-on culture, bad management. No amount of meditation fixes a toxic job. We shouldn't have to become zen masters just to survive normal work.\n\nD) SAM: For me, the answer was doing less, not managing stress better. I used to fill every second, terrified of wasting time. Then I realised that the empty moments — the walks, the daydreaming, the doing nothing — were when I felt best and thought most clearly. I've stopped worshipping busyness. Doing nothing turned out to be doing something important.\n",
        q: [
          mc("Who experienced burnout and then changed everything?", ["A", "B", "C", "D"], 0, "Nadia: 'I hit burnout in my thirties'."),
          mc("Who learned that relaxation is a skill to practise?", ["A", "B", "C", "D"], 1, "Tom: 'relaxation is a skill you have to practise'."),
          mc("Who is suspicious of 'wellness' talk?", ["A", "B", "C", "D"], 2, "Priya: 'I'm suspicious of all the \"wellness\" talk'."),
          mc("Who found the answer in doing less, not managing stress?", ["A", "B", "C", "D"], 3, "Sam: 'doing less, not managing stress better'."),
          mc("Who says rest 'isn't laziness — it's survival'?", ["A", "B", "C", "D"], 0, "Nadia: 'Rest isn't laziness — it's survival'."),
          mc("Whose mind 'had forgotten how to rest'?", ["A", "B", "C", "D"], 1, "Tom: 'My mind had forgotten how to rest'."),
          mc("Who says no meditation fixes a toxic job?", ["A", "B", "C", "D"], 2, "Priya: 'No amount of meditation fixes a toxic job'."),
          mc("Who used to be 'terrified of wasting time'?", ["A", "B", "C", "D"], 3, "Sam: 'terrified of wasting time'."),
          mc("Who now guards their time 'fiercely'?", ["A", "B", "C", "D"], 0, "Nadia: 'I guard my time fiercely'."),
          mc("Who says the real problem is often the workplace itself?", ["A", "B", "C", "D"], 2, "Priya: 'the real problem is often the workplace itself'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Companies should be responsible for their employees' mental health.'\nComenta estos dos aspectos y añade uno propio:\n1. workload and hours (la carga y el horario)\n2. support and culture (el apoyo y la cultura)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.\n\n👉 Cronométrate: ~40 min con las dos tareas.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How I switch off from stress' — comparte lo que a ti te funciona.\n· REPORT (formal, con encabezados) para tu instituto/empresa sobre cómo reducir el estrés: Introduction / Findings / Recommendations.", 140, 190),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Multiple matching", "Escucha a cinco personas hablando de cómo gestionan el estrés (se oye dos veces). Para cada hablante, elige de la lista (A–F) qué les ayudó. Sobra una opción.\nA) they set firm boundaries with work\nB) they learned to meditate\nC) they blame the workplace, not themselves\nD) they chose to do less overall\nE) they exercise to relieve stress\nF) they talked to someone about it", "This is Part Three. You will hear five people talking about how they manage stress. Speaker One: After burning out, I made strict rules: no work emails after six, and weekends are sacred. Drawing that line saved me. Speaker Two: I was sceptical, but I started meditating ten minutes a day. It taught my racing mind how to be still. It's the single most useful thing I've ever done. Speaker Three: I don't think it's my job to 'cope better'. My workload was simply impossible. The problem wasn't my resilience; it was a badly run workplace expecting far too much. Speaker Four: I stopped trying to squeeze more in and just started doing less. Fewer commitments, more empty time. Ironically, I get more done and feel far calmer. Speaker Five: What helped most was finally opening up to a friend about how overwhelmed I felt. I'd bottled it all up for months. Just saying it out loud, and being heard, lifted an enormous weight.", [
      mc("Speaker One", ["A", "B", "C", "D", "E", "F"], 0, "A: 'no work emails after six… that line saved me'."),
      mc("Speaker Two", ["A", "B", "C", "D", "E", "F"], 1, "B: 'I started meditating… be still'."),
      mc("Speaker Three", ["A", "B", "C", "D", "E", "F"], 2, "C: 'a badly run workplace expecting far too much'."),
      mc("Speaker Four", ["A", "B", "C", "D", "E", "F"], 3, "D: 'started doing less… feel far calmer'."),
      mc("Speaker Five", ["A", "B", "C", "D", "E", "F"], 5, "F: 'opening up to a friend… being heard'."),
    ]),

    ...speakingParts({ p1: "qué te causa estrés y qué haces para relajarte y cuidar tu bienestar", p2: "dos formas de vivir el día a día (una persona muy estresada trabajando sin parar y otra relajada paseando o meditando): compáralas y especula", p3: "qué ayuda más a reducir el estrés (poner límites al trabajo, hacer ejercicio, meditar, hablar con alguien, dormir bien): comentadlo y elegid lo más eficaz", p4: "el bienestar mental: si el estrés moderno es peor que antes, si es responsabilidad de la persona o de la empresa, y por qué nos cuesta tanto desconectar" }),

    SUMMARY("Resumen del Día 58", [
      "Writing (1h20, 2 tareas): ~40 min cada una (planificar/escribir/revisar); asegura ambas completas; cuida registro y estructura.",
      "Listening (~40 min, 4 partes, todo dos veces): lee las preguntas antes; 1ª escucha responde, 2ª confirma; no dejes huecos.",
      "Vocabulario de bienestar mental. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 59", "Escribe dos tareas de Writing cronometradas (40 min cada una). Repasa las flashcards. Mañana: simulacro de Speaking + repaso global."),
  ],
};

// ───────────────────────── DÍA 59 ─────────────────────────
const DAY59 = {
  title: "Día 59 — Simulacro de Speaking + repaso global · El equilibrio y el sueño",
  description: "Práctica de las 4 partes de Speaking como en el examen y repaso global de los errores más comunes. Vocabulario del equilibrio vida-trabajo y el sueño. Las 4 destrezas (formato B2); Listening P4.",
  pedagogy: {
    objective: "Afrontar el Speaking con fluidez e interacción y cerrar los errores más frecuentes.",
    summary: "Simulacro Speaking + repaso global; equilibrio/sueño; Use of English P1–P7, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["quedarse callado/a o dar respuestas cortas.", "no interactuar en la P3.", "pronunciación de sonidos difíciles."],
    reviewPrompts: ["¿Cómo mantienes el minuto entero en la P2?", "¿Cómo invitas a tu pareja a participar en la P3?"],
  },
  items: [
    TEXT("🏁 Recta final (4/5). Hoy SPEAKING en condiciones de examen + repaso global de errores. Vocabulario: el EQUILIBRIO vida-trabajo y el SUEÑO."),
    GRAMMAR("Simulacro de Speaking — las 4 partes", `El Speaking dura ~14 min, EN PAREJA, con dos examinadores/as (uno pregunta, otro observa). Recuerda:
· PARTE 1 (~2 min): preguntas personales. Responde con 2–3 frases + razón. Suena natural, no memorizado.
· PARTE 2 (~4 min en total): cada candidato/a habla 1 minuto solo/a comparando DOS fotos + respondiendo una pregunta; luego una breve respuesta (~30 s) sobre las fotos del otro. Estructura: comparo (both… whereas…) + especulo (might/could, perhaps) + respondo la pregunta. RELLENA el minuto entero.
· PARTE 3 (~4 min): tarea colaborativa. Comentáis unas opciones (diagrama) y al final DECIDÍS juntos. Interactúa: opina, pregunta (What do you think?), reacciona (Good point), y NEGOCIA la decisión.
· PARTE 4 (~4 min): discusión de preguntas abstractas ligadas a la P3. Da opiniones razonadas y matizadas; puedes estar de acuerdo o no con tu pareja.
SE EVALÚA (cada candidato individualmente): Gramática y Vocabulario · Pronunciación · Gestión del Discurso · Comunicación Interactiva.
⚠️ La interacción y la fluidez cuentan tanto como la corrección. No memorices discursos; escucha y reacciona.`),
    TIP("El día del examen (Speaking)", "Habla claro y a buen ritmo; si te trabas, parafrasea o usa una frase puente y sigue. Mira y escucha a tu pareja en la P3 — sonríe, asiente, invítale a hablar. Un/a candidato/a que colabora bien puntúa alto en Comunicación Interactiva."),
    WARN("Errores típicos del hispanohablante (repaso global 4/4 · pronunciación)", "· No añadas 'e-' inicial: 'school' /skuːl/ (no 'eschool'), 'Spain', 'special'.\n· /ɪ/ vs /iː/: 'ship' vs 'sheep', 'live' vs 'leave'.\n· La -s final (plurales/3ª persona) se pronuncia: 'books', 'she likes'.\n· 'b'/'v' son distintas en inglés; 'th' (/θ/,/ð/) no es /t/,/d/ ni /s/.\n· No pongas el acento en la sílaba equivocada: 'ˈcomfortable', 'phoˈtography'."),
    grammarEx("Speaking — Funciones y fluidez", "Elige la mejor opción para cada situación.", [
      mc("P2 — comparing:", ["Photo one. Photo two.", "Both photos show people resting, but whereas the first is at home, the second is outdoors.", "I see two photos."], 1, "compara con both/whereas."),
      mc("P2 — you don't know a word for an object:", ["stop talking", "describe it: 'a kind of… thing you use for…'", "say it in Spanish"], 1, "parafrasea, no te calles."),
      mc("P3 — inviting your partner:", ["I've decided.", "How about this one — what do you think?", "Say nothing."], 1, "interacción: What do you think?"),
      mc("P3 — reaching a decision:", ["I win.", "So shall we go for this option, then? I think we agree.", "It doesn't matter."], 1, "negociar y decidir."),
      mc("P4 — a nuanced opinion:", ["Yes.", "I'd say it depends. Some value money, but personally I think time matters more.", "No idea."], 1, "matiza: it depends…"),
      mc("A bridging phrase to keep talking:", ["Er… um… nothing.", "That's a good question — I suppose one thing to consider is…", "Next."], 1, "frase puente."),
      mc("P1 — 'How do you relax?' Best answer:", ["I don't.", "I usually go for a walk, because being outdoors helps me switch off after a long day.", "Walk."], 1, "amplía con razón."),
    ]),
    GRAMMAR("Vocabulario del día — El equilibrio vida-trabajo y el sueño", "Léxico de equilibrio y sueño (B2)."),
    deck("B2 S12D59 — Equilibrio y sueño", [
      ["work-life balance", "equilibrio vida-trabajo", "Good work-life balance matters.", "sustantivo", "ˌwɜːk laɪf ˈbæləns"],
      ["overwork", "exceso de trabajo / trabajar en exceso", "Overwork leads to burnout.", "sustantivo/verbo", "ˌəʊvəˈwɜːk"],
      ["leisure", "ocio / tiempo libre", "Everyone needs leisure time.", "sustantivo", "ˈleʒə"],
      ["insomnia", "insomnio", "Stress can cause insomnia.", "sustantivo", "ɪnˈsɒmniə"],
      ["a good night's sleep", "una buena noche de sueño", "There's nothing like a good night's sleep.", "expresión", "ə ɡʊd naɪts ˈsliːp"],
      ["exhausted", "agotado/a", "I was completely exhausted.", "adjetivo", "ɪɡˈzɔːstɪd"],
      ["recharge", "recargar (energías)", "A holiday helps you recharge.", "verbo", "ˌriːˈtʃɑːdʒ"],
      ["priorities", "prioridades", "Get your priorities right.", "sustantivo", "praɪˈɒrətiz"],
      ["unwind", "desconectar / relajarse", "I read to unwind at night.", "verbo", "ˌʌnˈwaɪnd"],
      ["well-rested", "descansado/a", "You think better when well-rested.", "adjetivo", "ˌwel ˈrestɪd"],
    ]),
    vocabEx("Vocabulario — El equilibrio y el sueño", "Elige la opción correcta.", [
      mc("A healthy division between your job and your life is a good ___.", ["work-life balance", "overwork", "insomnia"], 0, "work-life balance."),
      mc("The inability to fall or stay asleep is ___.", ["insomnia", "leisure", "priorities"], 0, "insomnia."),
      mc("To rest and recover your energy is to ___.", ["recharge", "overwork", "unwind"], 0, "recharge / unwind."),
      mc("Free time spent enjoying yourself is ___.", ["leisure", "overwork", "insomnia"], 0, "leisure."),
      mc("Feeling extremely tired means being ___.", ["exhausted", "well-rested", "leisurely"], 0, "exhausted."),
      mc("The things that matter most, which you deal with first, are your ___.", ["priorities", "leisure", "insomnia"], 0, "priorities."),
    ]),

    ...uoe({
      p1: {
        title: "The lost art of sleep",
        text: "For most of human history, sleep was simply what happened when the sun went (1)___ and there was nothing left to do. It was not something people thought about, worried over, or tried to optimise; it just (2)___. In the modern world, all this has changed. Sleep has become, for millions, a source of anxiety and struggle — something we do not get enough of, cannot easily achieve, and feel perpetually guilty (3)___. Rates of insomnia have soared; entire industries have sprung up around the promise of better rest. How did something so natural become so (4)___? Part of the answer lies in the invention of artificial light, which freed us from the rhythm of the sun and allowed us to push our waking hours ever later. Part of it lies in our screens, whose glow, science tells us, actively interferes with the body's preparation for sleep. And part of it lies in a culture that treats sleep as a (5)___ luxury, an unproductive waste of time to be minimised in the pursuit of achievement. This last idea is not merely mistaken but positively dangerous. The science is now overwhelming: sleep is not optional but essential, as vital to our health as food or water. A chronically sleep-deprived person is (6)___ their body and mind in ways that no amount of willpower can overcome. Reclaiming our sleep — treating it not as a weakness to be defeated but as a necessity to be (7)___ — may be one of the most important things any of us can do for our health. In a culture that never stops, learning, once again, to value a good night's sleep is not laziness. It is (8)___.",
        q: [
          mc("(1)", ["down", "off", "out", "away"], 0, "'the sun went down'."),
          mc("(2)", ["happened", "occurred", "came", "was"], 0, "'it just happened'."),
          mc("(3)", ["about", "for", "over", "of"], 0, "'guilty about'."),
          mc("(4)", ["difficult", "hard", "tough", "complex"], 0, "'so difficult'."),
          mc("(5)", ["mere", "simple", "pure", "plain"], 0, "'a mere luxury'."),
          mc("(6)", ["damaging", "harming", "hurting", "injuring"], 0, "'damaging their body and mind'."),
          mc("(7)", ["protected", "guarded", "defended", "kept"], 0, "'a necessity to be protected'."),
          mc("(8)", ["wisdom", "sense", "reason", "logic"], 0, "'It is wisdom'."),
        ],
      },
      p2: {
        title: "Having it all",
        text: "For decades, we have been sold a seductive promise: that we can 'have it all' — a thriving career, a rich family life, close friendships, hobbies, health and rest, all (1)___ once. It is a lovely idea, and a deeply unrealistic one. The uncomfortable truth, which few are willing to state (2)___ plainly, is that time is finite, and every hour we give to one thing is an hour we cannot give (3)___ another. To pour ourselves into a demanding career is, inevitably, to have less time for family, or friends, or rest. This is not a problem to be solved but a reality to be (4)___. The language of 'work-life balance', for all its usefulness, can be misleading if it suggests that, with enough cleverness, we can avoid these trade-offs altogether. We cannot. What we can do is choose, consciously and honestly, (5)___ we most value, and arrange our lives accordingly. The person who has decided that time with their children matters more (6)___ career advancement, and lives by that decision, has not failed to 'have it all'; they have simply made a wise and honest choice about what 'all' means to them. Perhaps the real wisdom lies not in the futile attempt to have everything, (7)___ in knowing what we most want, and having the courage to build our lives around it, accepting, with good grace, the trade-offs that any real choice (8)___ demands.",
        q: [
          fb("(1)", ["at"], "'all at once'."),
          fb("(2)", ["so", "too"], "'to state so plainly'."),
          fb("(3)", ["to"], "'cannot give to another'."),
          fb("(4)", ["accepted", "faced"], "'a reality to be accepted'."),
          fb("(5)", ["what"], "'choose… what we most value'."),
          fb("(6)", ["than"], "'matters more than career'."),
          fb("(7)", ["but"], "'not in… everything, but in knowing'."),
          fb("(8)", ["inevitably", "necessarily"], "'any real choice inevitably demands'."),
        ],
      },
      p3: {
        title: "The four-day week",
        text: "For over a century, the standard working week has remained (1)___ unchanged: five days on, two days off. We tend to regard this arrangement as natural, almost inevitable, forgetting that it was itself, in its day, a hard-won (2)___ from the even longer weeks that preceded it. Now, a growing movement argues that it is time for another (3)___ reduction — to a four-day week, with no loss of pay. To many, the idea sounds hopelessly (4)___, a recipe for economic ruin. But a growing body of evidence from real-world trials suggests otherwise. Companies that have made the switch report, again and again, a surprising result: productivity does not fall. Rested, happier employees, it turns out, get as much done in four days as they previously did in five, working with greater (5)___ and focus. Absenteeism falls; staff turnover drops; wellbeing (6)___. The four-day week, its supporters argue, is not a utopian fantasy but a practical response to a simple fact: that beyond a certain point, more hours do not mean more output. Whether the idea will become (7)___ remains to be seen; powerful habits and assumptions stand in its way. But it poses a question well worth asking. If we can produce just as much in four days as in five, why do we continue to (8)___ the fifth? The answer, increasingly, seems to be little more than the weight of unexamined habit.",
        items: [
          { root: "large", accepted: ["largely"], hint: "'remained largely unchanged' → largely." },
          { root: "improve", accepted: ["improvement"], hint: "'a hard-won improvement' → improvement." },
          { root: "far", accepted: ["further"], hint: "'another further reduction' → further." },
          { root: "practice", accepted: ["impractical"], hint: "'hopelessly impractical' → impractical." },
          { root: "efficient", accepted: ["efficiency"], hint: "'with greater efficiency' → efficiency." },
          { root: "improve", accepted: ["improves"], hint: "'wellbeing improves' → improves." },
          { root: "wide", accepted: ["widespread"], hint: "'become widespread' → widespread." },
          { root: "work", accepted: ["work"], hint: "'continue to work the fifth' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — equilibrio y sueño (simulacro)",
        items: [
          { s1: "I haven't slept well since I started this job.", key: "BEEN", s2: "I ___ badly since I started this job.", accepted: ["have been sleeping"], explanation: "present perfect continuous." },
          { s1: "It's important to get enough rest.", key: "SHOULD", s2: "You ___ enough rest.", accepted: ["should get"], explanation: "should (consejo)." },
          { s1: "She works so hard that she has no free time.", key: "SUCH", s2: "She works ___ hours that she has no free time.", accepted: ["such long"], explanation: "such + adj + sustantivo… that." },
          { s1: "'You ought to take some time off,' he told me.", key: "ADVISED", s2: "He ___ some time off.", accepted: ["advised me to take"], explanation: "advise sb to do." },
          { s1: "The more I rest, the better I work.", key: "IF", s2: "___ I rest more, I work better.", accepted: ["If"], explanation: "if + presente." },
          { s1: "Nothing is more important to me than my family.", key: "MOST", s2: "My family is ___ thing to me.", accepted: ["the most important"], explanation: "superlativo." },
        ],
      },
      p5: {
        title: "The man who worked himself to death",
        text: "Kenji Sato was, by every conventional measure, a model employee. In the thirty years he worked for his company, he was never once late, never once absent, and never once heard to complain. He arrived before his colleagues and left after them; he took barely any of the holiday he was owed; he answered emails late into the night and throughout the weekends. His dedication was legendary, held up by his managers as an example to younger staff. He was, everyone agreed, the very picture of the committed, hard-working man on whom the company's success depended. When he collapsed at his desk one evening, aged just fifty-two, and died shortly afterwards, the shock was immense — but, to those who knew how he had lived, perhaps it should not have been.\n\nKenji's death was officially attributed to a condition that has become so common in his country that it has its own word: death from overwork. His case, tragic as it was, was far from unique. Every year, in the more driven corners of the modern economy, a number of people quite literally work themselves into an early grave, their bodies giving out under the sustained strain of impossible hours and relentless pressure. What makes such cases so troubling is that the victims are so often not the lazy or the incompetent, but precisely the most dedicated — the very people any employer would most wish to keep.\n\nIn the aftermath of Kenji's death, his family, and later a wider public, began to ask difficult questions. Was his dedication truly admirable, or was it a kind of slow self-destruction that his employer had been only too happy to encourage and exploit? Where was the line between commitment and self-harm, and who was responsible for policing it? A culture that celebrated Kenji's relentless overwork while he lived could hardly disclaim all responsibility for the manner of his death. He had given the company everything, including, in the end, his life; and the company, it was hard not to feel, had taken it.\n\nCases like Kenji's have, slowly, begun to change attitudes. Governments have introduced laws limiting working hours; some companies, shamed by such tragedies, have begun actively to discourage the overwork they once celebrated. There is a growing recognition that a culture of extreme overwork serves no one well in the long run — not the exhausted, burnt-out employees, and not, ultimately, the companies that lose them to illness, breakdown and, in the worst cases, death. The model employee who never rests, it turns out, is not a sustainable ideal but a warning.\n\nKenji Sato's story is an extreme one, but its lesson reaches far beyond the exceptional cases that make the headlines. Most of us will not, thankfully, work ourselves to death. But many of us live, to some degree, by the same false creed that killed him: that our worth is measured by our productivity, that rest is weakness, that there is virtue in pushing ourselves ever harder, whatever the cost. Kenji's death poses, in the starkest possible terms, a question that all of us, in our gentler way, would do well to consider: what, exactly, are we working for, if the work consumes the very life it was supposed to serve?",
        q: [
          mc("How was Kenji Sato regarded at work?", ["As lazy.", "As a model, endlessly dedicated employee.", "As incompetent.", "As difficult."], 1, "'the very picture of the committed, hard-working man'."),
          mc("What was his death officially attributed to?", ["An accident.", "Death from overwork.", "Illness unrelated to work.", "Old age."], 1, "'a condition… death from overwork'."),
          mc("What troubling feature do such cases share?", ["The victims are lazy.", "The victims are often the most dedicated employees.", "They are rare.", "They are faked."], 1, "'not the lazy… but precisely the most dedicated'."),
          mc("What difficult question did his death raise?", ["Was he paid enough?", "Where is the line between commitment and self-harm, and who is responsible?", "Was he skilled?", "Did he like his job?"], 1, "'Where was the line between commitment and self-harm, and who was responsible?'"),
          mc("How have cases like Kenji's begun to change things?", ["Nothing changed.", "Laws limiting hours and companies discouraging overwork.", "More overwork.", "Higher pay only."], 1, "'laws limiting working hours; some companies… discourage the overwork'."),
          mc("What wider question does his story pose to us all?", ["How to work more.", "What we are working for, if work consumes the life it should serve.", "How to get promoted.", "How to earn more."], 1, "'what… are we working for, if the work consumes the very life it was supposed to serve?'"),
        ],
      },
      p6: {
        title: "In praise of the weekend",
        text: "The weekend is such a familiar part of life that we rarely stop to think about it. (1)___ Yet the two-day break we take for granted is a relatively recent invention, and a hard-won one.\n\nFor most of history, there was no such thing as a weekend. (2)___ People worked as long and as hard as they had to, with little concept of regular, protected leisure time.\n\nThe modern weekend was won, over many years, through long and often bitter struggle. (3)___ Workers fought, and sometimes died, for the right to a portion of their lives that belonged to them rather than their employers.\n\nToday, ironically, we are in danger of quietly giving back what our ancestors fought so hard to win. (4)___ Emails follow us home; the boundary between work and rest dissolves; the weekend, for many, is no longer truly free.\n\nThis matters more than we might think. (5)___ The right to rest, to have time that is genuinely our own, is not a trivial perk but something close to a fundamental human need. (6)___ Defending the weekend, in an always-on world, may be one of the quieter but more important battles of our age.",
        options: [
          "We treat it as if it had always existed.",                      // A -> gap 1
          "The idea of protected free time is a modern one.",              // B -> gap 2
          "It came at a real human cost.",                                 // C -> gap 3
          "The boundary we inherited is steadily eroding.",                // D -> gap 4
          "Free time is a need, not a mere indulgence.",                   // E -> gap 5
          "Some things are worth defending precisely because they are old.", // F -> gap 6
          "The weekend has existed since the dawn of humanity.",           // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: lo tratamos como eterno."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el ocio protegido es moderno."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: tuvo un coste humano real."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la frontera se erosiona."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el tiempo libre es una necesidad."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: vale la pena defenderlo."),
        ],
      },
      p7: {
        title: "Four people talk about balance and rest",
        text: "Read what four people say about balancing work and life.\n\nA) NADIA: I gave up trying to 'have it all'. For years I killed myself attempting to be a perfect employee, parent, friend and everything else at once, and I was drowning. Then I accepted that time is finite and I had to choose. I chose my family over my career, and I've never been happier. You can't have everything; pretending you can just makes you miserable.\n\nB) TOM: For me, the game-changer was protecting my sleep. I used to treat it as optional — the first thing to sacrifice when I was busy. Then I read the science and was horrified. Now I guard my eight hours like gold. I'm sharper, calmer and more productive than when I was running on five. Sleep isn't lazy; it's the foundation of everything.\n\nC) PRIYA: My company switched to a four-day week last year, and I was sure productivity would collapse. It didn't. We get just as much done, and everyone's happier and healthier. It turns out the fifth day was mostly wasted anyway. I now think the five-day week is just habit, not necessity. Why do we cling to it?\n\nD) SAM: I lost a colleague to overwork — he literally worked himself into an early grave. It changed how I see everything. Now, whenever I catch myself glorifying being 'busy' or skipping rest to seem committed, I remember him. No job is worth your health, let alone your life. We've got our priorities dangerously wrong.\n",
        q: [
          mc("Who gave up trying to 'have it all'?", ["A", "B", "C", "D"], 0, "Nadia: 'I gave up trying to \"have it all\"'."),
          mc("For whom was protecting sleep the game-changer?", ["A", "B", "C", "D"], 1, "Tom: 'the game-changer was protecting my sleep'."),
          mc("Whose company switched to a four-day week?", ["A", "B", "C", "D"], 2, "Priya: 'My company switched to a four-day week'."),
          mc("Who lost a colleague to overwork?", ["A", "B", "C", "D"], 3, "Sam: 'I lost a colleague to overwork'."),
          mc("Who says 'you can't have everything'?", ["A", "B", "C", "D"], 0, "Nadia: 'You can't have everything'."),
          mc("Who now guards their eight hours 'like gold'?", ["A", "B", "C", "D"], 1, "Tom: 'I guard my eight hours like gold'."),
          mc("Who thinks the five-day week is 'just habit'?", ["A", "B", "C", "D"], 2, "Priya: 'the five-day week is just habit, not necessity'."),
          mc("Who says 'no job is worth your health'?", ["A", "B", "C", "D"], 3, "Sam: 'No job is worth your health'."),
          mc("Who chose family over career?", ["A", "B", "C", "D"], 0, "Nadia: 'I chose my family over my career'."),
          mc("Who used to treat sleep as 'optional'?", ["A", "B", "C", "D"], 1, "Tom: 'I used to treat it as optional'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'A four-day working week would improve people's lives.'\nComenta estos dos aspectos y añade uno propio:\n1. wellbeing (el bienestar)\n2. productivity (la productividad)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'How to get a good night's sleep' — da consejos prácticos.\n· CARTA a un/a amigo/a que trabaja demasiado y no descansa: exprésale tu preocupación y aconséjale.", 140, 190),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Entrevista (7 preguntas MC)", "Escucha una entrevista con una experta en sueño y bienestar, la doctora Price (se oye dos veces). Elige la respuesta correcta (A/B/C).", "This is Part Four. You will hear an interview with a sleep and wellbeing expert called Doctor Price. Interviewer: Doctor Price, what's the biggest mistake people make about sleep? Doctor Price: Treating it as optional — the first thing to cut when they're busy. It's the opposite of optional; it's foundational. Sacrificing sleep to get more done is one of the least productive things you can do. Interviewer: Is 'work-life balance' really achievable? Doctor Price: I'm honest with people: you can't have it all. Time is finite. The real skill isn't balancing everything perfectly; it's choosing what matters most and accepting the trade-offs. Pretending otherwise just breeds guilt. Interviewer: What do you make of the four-day week? Doctor Price: I'm genuinely enthusiastic. The trials are striking — productivity holds up, wellbeing soars. It turns out the fifth day added far less than we assumed. I think it's the future, honestly. Interviewer: Many people say they're too busy to rest. Doctor Price: That's exactly backwards. The busier you are, the more you need rest, not less. A tired brain works badly. Resting isn't a reward for finishing your work; it's what enables you to do the work well in the first place. Interviewer: What's your single most important piece of advice? Doctor Price: Protect your sleep above almost everything else. If you get that right, everything else — mood, health, focus, resilience — gets easier. Get it wrong, and nothing else quite works. Interviewer: And finally, are you hopeful things are changing? Doctor Price: Cautiously, yes. Slowly, the old idea that exhaustion equals commitment is dying. Not fast enough, but it's dying. Interviewer: Thank you, Doctor Price.", [
      mc("1. What is the biggest mistake about sleep?", ["Sleeping too much.", "Treating it as optional.", "Sleeping in the day."], 1, "'Treating it as optional'."),
      mc("2. What does she say about 'having it all'?", ["It's easy.", "You can't have it all — time is finite.", "It's the goal."], 1, "'you can't have it all. Time is finite'."),
      mc("3. What is her view of the four-day week?", ["Sceptical.", "Genuinely enthusiastic — she thinks it's the future.", "Opposed."], 1, "'I'm genuinely enthusiastic… the future'."),
      mc("4. What does she say to people 'too busy to rest'?", ["They're right.", "It's backwards — the busier you are, the more you need rest.", "Rest less."], 1, "'That's exactly backwards'."),
      mc("5. What is rest, according to her?", ["A reward for finishing.", "What enables you to do the work well.", "A luxury."], 1, "'what enables you to do the work well'."),
      mc("6. What is her single most important advice?", ["Work harder.", "Protect your sleep above almost everything.", "Sleep less."], 1, "'Protect your sleep above almost everything'."),
      mc("7. Is she hopeful things are changing?", ["No.", "Cautiously yes — the idea that exhaustion equals commitment is dying.", "Not at all."], 1, "'Cautiously, yes… it's dying'."),
    ]),

    ...speakingParts({ p1: "cómo equilibras el trabajo/estudio y el descanso, y si duermes lo suficiente", p2: "dos formas de terminar el día (alguien exhausto trabajando de noche y alguien descansando y durmiendo bien): compáralas y especula", p3: "qué ayuda más a tener equilibrio en la vida (poner límites, dormir bien, priorizar lo importante, trabajar menos horas, tener aficiones): comentadlo y elegid lo esencial", p4: "el equilibrio vida-trabajo: si de verdad se puede 'tener todo', si valoramos poco el sueño y si una semana de cuatro días mejoraría nuestra vida" }),

    SUMMARY("Resumen del Día 59", [
      "Speaking: P1 amplía · P2 compara+especula+responde (1 min entero) · P3 INTERACTÚA y decide con tu pareja · P4 opina con matices.",
      "Repaso de pronunciación: sin 'e-' inicial, /ɪ/ vs /iː/, la -s final, 'th', el acento correcto.",
      "Vocabulario de equilibrio y sueño. Practicadas las 7 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 60", "Ensaya en voz alta una Speaking completa (P1–P4). Repasa TODO el vocabulario del curso. Mañana: repaso final del curso + preparación para el día del examen + SIMULACRO FINAL."),
  ],
};

// ───────────────────────── DÍA 60 ─────────────────────────
const DAY60 = {
  title: "Día 60 — Repaso final del curso + el día del examen",
  description: "Consolidación de TODO el curso B2 (gramática, léxico, las 4 destrezas y las estrategias) y guía práctica para el día del examen. Las 4 destrezas (formato B2); Listening P1. Al final, el SIMULACRO FINAL del curso.",
  pedagogy: {
    objective: "Llegar al examen con seguridad: gramática, léxico, estrategias y calma.",
    summary: "Repaso final del curso; el día del examen; Use of English P1–P7, Writing, Listening, Speaking; SIMULACRO FINAL.",
    reviewPrompts: ["¿Qué parte del examen dominas mejor?", "¿Qué llevarás y harás el día del examen?"],
  },
  items: [
    TEXT("🎓 ¡DÍA 60! Último día del curso B2 First. Hoy repasas TODO (gramática, léxico, destrezas y estrategias) y te preparas para el DÍA DEL EXAMEN. Al final: el SIMULACRO FINAL del curso (módulo aparte)."),
    GRAMMAR("Repaso final del curso B2 First", `GRAMÁTICA (semanas 1–10): tiempos verbales · preguntas y negativas · condicionales e hipótesis · modales (obligación, consejo, deducción) · la ley/el delito · voz pasiva y estilo indirecto · relativas, cláusulas y énfasis · gerundios, infinitivos y phrasal verbs · conectores, cuantificadores, artículos y comparación · expresiones, formación de palabras y registro.
LÉXICO: 60 mazos temáticos (tecnología, viajes, sociedad, salud, trabajo, medio ambiente, éxito…) con IPA.
LAS 4 DESTREZAS, cada día, con el formato REAL del B2:
· Reading & Use of English (7 partes) · Writing (essay + 1 tarea a elegir) · Listening (4 partes) · Speaking (4 partes).
ESTRATEGIAS (semana 11) + SIMULACROS en condiciones de examen (semana 12).
Has hecho 12 mini-simulacros semanales. Hoy, el SIMULACRO FINAL completo.
⚠️ Recuerda: para aprobar el B2 First necesitas ~160/190 (nivel B2). Cada destreza vale un 25%. Un buen resultado en las partes que dominas compensa las más difíciles.`),
    TIP("Guía para el DÍA DEL EXAMEN", "ANTES: duerme bien (repasa el Día 58/59), desayuna, llega pronto, lleva tu identificación, un reloj, bolígrafo y lápiz. DURANTE: lee bien las instrucciones, gestiona el tiempo (semana 12), no dejes nada en blanco, revisa al final. SPEAKING: colabora con tu pareja, habla claro, sé natural. Si algo te sale mal, pasa página: cada parte es independiente. RESPIRA: estás preparado/a."),
    WARN("Checklist final de errores del hispanohablante", "· Preposiciones dependientes (depend ON, good AT). · 'people ARE'. · 'I AM 20 years old'. · Falsos amigos (actually, sensible, assist, actual). · 3ª persona -s. · since/for. · Orden adjetivo+sustantivo. · '-ing'/infinitivo. · Pronunciación: sin 'e-' inicial, /ɪ/–/iː/, -s final, 'th'. Repásalos una vez más antes del examen."),
    grammarEx("Use of English — Repaso FINAL (todo el curso)", "Demuestra todo lo aprendido.", [
      mc("P1: A healthy lifestyle can help you ___ stress.", ["cope with", "cope", "deal", "face to"], 0, "cope WITH (phrasal)."),
      fb("P2: I've lived here ___ 2015. (desde)", ["since"], "since + punto en el tiempo."),
      fb("P3: Regular exercise is extremely ___ (BENEFIT) to health. (adjetivo)", ["beneficial"], "benefit → beneficial."),
      fb("P4: 'They will build a new hospital.' → A new hospital ___ . (key: BE, futuro pasivo)", ["will be built"], "will be built (3 palabras)."),
      fb("P4: 'It was a mistake to skip breakfast.' → I wish I ___ breakfast. (key: SKIPPED)", ["hadn't skipped"], "wish + past perfect (2 palabras)."),
      mc("P1: If everyone made small changes, it ___ make a big difference.", ["will", "would", "had", "did"], 1, "2º condicional: would."),
      fb("P2: She's the person ___ helped me most. (relativo)", ["who", "that"], "who/that (especificativa)."),
      mc("Reported: He said he ___ tired.", ["is", "was", "will be"], 1, "reported: is→was."),
    ]),
    GRAMMAR("Repaso FINAL de vocabulario", "Repaso transversal de los mazos clave del curso."),
    vocabEx("Vocabulario — Repaso FINAL del curso", "Elige la opción correcta.", [
      mc("Energy that never runs out (sun, wind):", ["renewable", "processed", "overwhelmed"], 0, "renewable."),
      mc("Extreme tiredness caused by overwork:", ["burnout", "budget", "habitat"], 0, "burnout."),
      mc("To formally request a job:", ["apply for", "retire", "recharge"], 0, "apply for."),
      mc("Able to recover quickly from difficulties:", ["resilient", "extinct", "ambiguous"], 0, "resilient."),
      mc("A diet with the right amount of everything:", ["balanced", "long-winded", "cutting-edge"], 0, "balanced."),
      mc("To deal successfully with a difficulty:", ["overcome", "afford", "convey"], 0, "overcome."),
      mc("A healthy division between job and life:", ["work-life balance", "carbon footprint", "deadline"], 0, "work-life balance."),
      mc("A sudden, important new development:", ["breakthrough", "setback", "workload"], 0, "breakthrough."),
    ]),

    ...uoe({
      p1: {
        title: "The value of learning a language",
        text: "Learning a foreign language is one of the most demanding things a person can (1)___ to do, and, its advocates would argue, one of the most rewarding. The practical benefits are obvious enough: a second language opens (2)___ doors, professionally and personally, that would otherwise remain closed. But those who have made the long journey to fluency often speak of deeper rewards, harder to (3)___ but no less real. To learn another language, they say, is to gain another way of seeing the world. Every language carves up reality slightly differently, contains ideas and expressions that exist (4)___ no other, and reflects the history and culture of those who speak it. To enter a new language is, in a sense, to enter a new world, and to see one's own afresh. There is, too, the sheer satisfaction of the achievement itself. Few things are as (5)___ as the moment when a language that once seemed an impenetrable wall of noise begins, at last, to make sense — when you find yourself not translating, but thinking, in the new tongue. This is a journey with no real end; no one ever finishes learning a language, not even their (6)___. But it is a journey whose every stage brings its own rewards. If you are reading this at the end of a long course of study, you have travelled further along that road than you may (7)___ realise. The wall of noise has become a language; the impossible has become the familiar. Whatever comes next, that is an achievement to be (8)___ of.",
        q: [
          mc("(1)", ["attempt", "try", "seek", "aim"], 0, "'a person can attempt to do'."),
          mc("(2)", ["up", "out", "off", "over"], 0, "'opens up doors'."),
          mc("(3)", ["define", "describe", "explain", "express"], 0, "'harder to define'."),
          mc("(4)", ["in", "at", "on", "by"], 0, "'exist in no other'."),
          mc("(5)", ["satisfying", "pleasing", "rewarding", "fulfilling"], 0, "'as satisfying as the moment'."),
          mc("(6)", ["own", "first", "native", "mother"], 0, "'not even their own'."),
          mc("(7)", ["quite", "fully", "really", "even"], 0, "'than you may quite realise'."),
          mc("(8)", ["proud", "glad", "pleased", "happy"], 0, "'an achievement to be proud of'."),
        ],
      },
      p2: {
        title: "On the eve of an exam",
        text: "If you are reading this shortly (1)___ an important examination, you are probably feeling a familiar mixture of nervousness and anticipation. This is entirely normal, and (2)___ nothing to worry about. A degree of nervousness is not only natural but actually helpful; it sharpens the mind and focuses (3)___ attention. The trick is not to eliminate it — which is impossible — but to keep it within useful bounds. There are a few simple things that can help. The first, and most important, is to be well rested. No amount of last-minute cramming can compensate (4)___ a tired brain, so resist the temptation to stay up all night, and get a proper night's sleep. The second is to trust your preparation. If you have worked steadily over the weeks and months, the knowledge is there, (5)___ you may not feel it in the anxious hours beforehand. The third is to remember that an exam is not a measure of your worth as a person, but simply a snapshot of your performance on a single day. Whatever the result, you are far (6)___ than any grade. Go in calm, do your best, and (7)___ the preparation you have done carry you through. You have worked hard to reach this point. Now trust yourself, and let that work show. Whatever happens, you can be proud of how far you (8)___ come.",
        q: [
          fb("(1)", ["before"], "'shortly before an important exam'."),
          fb("(2)", ["is"], "'and is nothing to worry about'."),
          fb("(3)", ["the", "your"], "'focuses the/your attention'."),
          fb("(4)", ["for"], "'compensate for a tired brain'."),
          fb("(5)", ["even", "although"], "'the knowledge is there, even if you may not feel it'."),
          fb("(6)", ["more"], "'far more than any grade'."),
          fb("(7)", ["let"], "'let the preparation… carry you'."),
          fb("(8)", ["have"], "'how far you have come'."),
        ],
      },
      p3: {
        title: "The habit of a lifetime",
        text: "The end of a course of study can feel like an ending, but it is (1)___ better thought of as a beginning. Whatever you have learned — a language, a skill, a body of knowledge — its true value lies not in the certificate you may (2)___ receive, but in what you do with it afterwards. This is especially true of a language. A language is not a thing you learn once and then possess (3)___; it is a living skill that must be used to be kept, and that grows richer the more it is exercised. The student who passes an exam and then never uses the language again will find it (4)___ fading, month by month, until little remains. The one who continues to use it — reading, watching, speaking, however imperfectly — will find it not only surviving but (5)___, developing into something ever more fluent and natural. The single most important decision you will make about any language you learn, therefore, is not how hard you study for the exam, but whether you make its use a permanent (6)___ of your life. Keep reading, keep listening, keep speaking, keep making mistakes, and the language will stay with you, and reward you, for the rest of your (7)___. Stop, and it will quietly slip away. The choice, as with so many valuable things in life, is (8)___: use it, or lose it.",
        items: [
          { root: "possible", accepted: ["possibly"], hint: "'is possibly better thought of' → possibly." },
          { root: "event", accepted: ["eventually"], hint: "'you may eventually receive' → eventually." },
          { root: "ever", accepted: ["forever"], hint: "'possess forever' → forever." },
          { root: "steady", accepted: ["steadily"], hint: "'find it steadily fading' → steadily." },
          { root: "grow", accepted: ["growing"], hint: "'not only surviving but growing' → growing." },
          { root: "feature", accepted: ["feature"], hint: "'a permanent feature of your life' (sustantivo)." },
          { root: "live", accepted: ["life"], hint: "'the rest of your life' → life." },
          { root: "simple", accepted: ["simple"], hint: "'the choice… is simple' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso FINAL del curso",
        items: [
          { s1: "They will announce the results next week.", key: "ANNOUNCED", s2: "The results ___ next week.", accepted: ["will be announced"], explanation: "futuro pasivo." },
          { s1: "I haven't studied English for as long as you.", key: "LONGER", s2: "You have studied English ___ I have.", accepted: ["longer than"], explanation: "comparativo." },
          { s1: "'Don't panic before the exam,' she said.", key: "NOT", s2: "She told me ___ before the exam.", accepted: ["not to panic"], explanation: "tell sb not to do." },
          { s1: "If I had studied harder, I would have passed.", key: "STUDIED", s2: "I didn't pass because I ___ hard enough.", accepted: ["didn't study", "hadn't studied"], explanation: "causa en pasado." },
          { s1: "It's the best course I have ever taken.", key: "NEVER", s2: "I ___ such a good course.", accepted: ["have never taken"], explanation: "present perfect + never." },
          { s1: "People say that practice makes perfect.", key: "SAID", s2: "It ___ that practice makes perfect.", accepted: ["is said"], explanation: "pasiva impersonal." },
        ],
      },
      p5: {
        title: "The student who almost gave up",
        text: "When Lucía Ferrer first walked into an English class, at the age of thirty-four, she was, by her own cheerful admission, one of the least promising students her teacher had ever seen. She had left school early, spoke not a word of English beyond 'hello' and 'thank you', and carried with her a deep, lifelong conviction that she was simply 'no good at languages'. She had tried, and failed, to learn English twice before, and had enrolled this third time, she said, more out of stubbornness than any real hope of success. Almost everything about her situation suggested that she would, like so many adult learners, attend a few classes, become discouraged, and quietly drop out.\n\nAnd, indeed, for the first few months, she struggled terribly. While younger classmates seemed to absorb the language effortlessly, Lucía laboured over every word. Grammar that others grasped in minutes took her weeks; her pronunciation was a constant battle; and her progress, measured against the others, seemed painfully slow. More than once, she came close to giving up, convinced that her old belief about herself had been right all along. What kept her going, she later said, was not confidence, which she entirely lacked, but sheer refusal to be beaten a third time.\n\nWhat neither Lucía nor, at first, her teacher fully appreciated was that her slow, laborious progress was, in an important sense, deceptive. Because she found everything so hard, Lucía was forced to work in a way that her quicker classmates were not. She could take nothing for granted; she had to think through every rule, practise every sound, and revisit everything many times over. This effortful, repetitive struggle, so discouraging in the short term, was laying foundations far deeper and more solid than the effortless early progress of her more gifted peers. She was, without knowing it, building her English to last.\n\nThe results of this became apparent only gradually, and then dramatically. As the course went on, something curious happened. The classmates who had raced ahead began, one by one, to plateau, or to forget as quickly as they had learned. Lucía, by contrast, kept slowly, relentlessly improving. The deep foundations she had been forced to build began to pay off; the things she had learned the hard way stayed learned. By the end of the two-year course, the student who had seemed least likely to succeed had, to the astonishment of everyone including herself, become one of the most capable in the class. She passed her final examination not merely adequately but with distinction.\n\nLucía's story, her teacher was fond of saying, contained a lesson that reached far beyond the learning of languages. We tend to admire quickness and to be discouraged by struggle, assuming that if something is hard for us, we must lack the necessary talent. Lucía's experience suggests almost the opposite. The struggle that feels like failure is often, in reality, where the deepest learning happens. The ease we envy in others is sometimes shallow; the difficulty we lament in ourselves is sometimes the very thing that, in the end, makes our achievement solid and lasting. Lucía did not succeed despite finding it so hard. In a sense, she succeeded because of it.",
        q: [
          mc("How did Lucía seem as a student at first?", ["Highly promising.", "One of the least promising the teacher had seen.", "Already fluent.", "Uninterested."], 1, "'one of the least promising students her teacher had ever seen'."),
          mc("What kept her going when she struggled?", ["Confidence.", "A refusal to be beaten a third time.", "Her family.", "Money."], 1, "'sheer refusal to be beaten a third time'."),
          mc("Why was her slow progress 'deceptive'?", ["She was cheating.", "Her effortful struggle built deeper, more solid foundations.", "She wasn't really slow.", "She gave up."], 1, "'laying foundations far deeper and more solid'."),
          mc("What happened to her quicker classmates?", ["They kept improving.", "They plateaued or forgot quickly.", "They passed easily.", "They helped her."], 1, "'began… to plateau, or to forget as quickly'."),
          mc("How did Lucía finish the course?", ["She dropped out.", "She became one of the most capable and passed with distinction.", "She failed.", "Adequately."], 1, "'became one of the most capable… passed… with distinction'."),
          mc("What is the wider lesson of her story?", ["Quickness is best.", "The struggle that feels like failure is often where the deepest learning happens.", "Talent is everything.", "Give up when it's hard."], 1, "'The struggle that feels like failure is often… where the deepest learning happens'."),
        ],
      },
      p6: {
        title: "What learning really gives us",
        text: "We usually justify education in practical terms: we learn in order to pass exams, to get qualifications, to improve our job prospects. (1)___ These are real and important benefits, and there is nothing wrong with pursuing them.\n\nBut to see education only in these terms is to miss something far deeper and more valuable. (2)___ The true gift of learning is not the certificate at the end, but the transformation it works in the learner along the way.\n\nWhen we genuinely learn something, we do not merely acquire information. (3)___ We change; we become, in some small but real way, a different and larger person than we were before.\n\nThis is why learning, at its best, is one of the great joys and privileges of a human life. (4)___ It expands not just what we know, but who we are and what we are capable of.\n\nAnd it is why the end of any course of study should be seen not as a full stop but as a comma. (5)___ The habits of curiosity and effort that got you here are gifts for life, not just for an exam. (6)___ Keep them alive, keep learning, and you will keep growing, for as long as you live.",
        options: [
          "The practical rewards are genuine and worth having.",            // A -> gap 1
          "The deepest value of education lies elsewhere.",                // B -> gap 2
          "Real learning changes the person, not just their knowledge.",   // C -> gap 3
          "To learn is, quite literally, to grow.",                        // D -> gap 4
          "The real journey is only just beginning.",                      // E -> gap 5
          "Curiosity, once kindled, need never go out.",                   // F -> gap 6
          "Education has no value beyond passing exams.",                  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: las recompensas prácticas son reales."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el valor más hondo está en otra parte."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: aprender cambia a la persona."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: aprender es crecer."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el viaje solo empieza."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la curiosidad no tiene por qué apagarse."),
        ],
      },
      p7: {
        title: "Four learners look back on their journey",
        text: "Read what four people say about learning English.\n\nA) NADIA: What I'd tell anyone starting out is: be patient with yourself. I wanted to be fluent in six months, got frustrated, and nearly quit. Real fluency took years, and that's normal. The people who succeed aren't the fastest; they're the ones who keep going long after the fast starters have given up. Slow and steady genuinely wins.\n\nB) TOM: For me, the turning point was using English for real, not just studying it. I stopped treating it as a school subject and started watching films, reading, chatting online — living in the language, mistakes and all. That's when it finally came alive. You don't learn a language in a classroom; you learn it by using it.\n\nC) PRIYA: My advice is to embrace mistakes. For years I was too embarrassed to speak, terrified of getting things wrong, and I made almost no progress. The day I decided I didn't care about sounding foolish, everything changed. Every mistake is a lesson. The learners who improve fastest are the ones brave enough to be bad at it first.\n\nD) SAM: What surprised me most was how much learning English changed me, not just my CV. It opened up whole worlds — books, films, people, ideas — I could never have reached otherwise. I think of it now not as a skill I acquired, but as a door I walked through into a bigger life. It was worth every hard hour.\n",
        q: [
          mc("Who advises patience and warns against expecting speed?", ["A", "B", "C", "D"], 0, "Nadia: 'be patient with yourself… Slow and steady'."),
          mc("Who says the turning point was using English for real?", ["A", "B", "C", "D"], 1, "Tom: 'using English for real, not just studying it'."),
          mc("Who advises embracing mistakes?", ["A", "B", "C", "D"], 2, "Priya: 'embrace mistakes'."),
          mc("Who says learning English changed them, not just their CV?", ["A", "B", "C", "D"], 3, "Sam: 'changed me, not just my CV'."),
          mc("Who says success goes to those who keep going, not the fastest?", ["A", "B", "C", "D"], 0, "Nadia: 'the ones who keep going… win'."),
          mc("Who learned by watching films, reading and chatting?", ["A", "B", "C", "D"], 1, "Tom: 'watching films, reading, chatting online'."),
          mc("Who was 'too embarrassed to speak' for years?", ["A", "B", "C", "D"], 2, "Priya: 'too embarrassed to speak'."),
          mc("Who describes English as 'a door I walked through into a bigger life'?", ["A", "B", "C", "D"], 3, "Sam: 'a door I walked through into a bigger life'."),
          mc("Who says 'you learn a language by using it'?", ["A", "B", "C", "D"], 1, "Tom: 'you learn it by using it'."),
          mc("Who says the fastest improvers are those 'brave enough to be bad at it first'?", ["A", "B", "C", "D"], 2, "Priya: 'brave enough to be bad at it first'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 140–190 palabras)", "Escribe un ENSAYO (140–190 palabras) sobre esta afirmación:\n'Learning a foreign language is one of the most valuable things a person can do.'\nComenta estos dos aspectos y añade uno propio:\n1. career opportunities (las oportunidades laborales)\n2. personal growth (el crecimiento personal)\n3. ................ (tu propia idea)\nDa tu opinión con razones y ejemplos.\n\n👉 Es tu ensayo final del curso: aplica TODO lo aprendido (estructura, conectores, registro, gramática y léxico).", 140, 190),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (140–190 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I have learned from studying English' — reflexiona sobre tu propio viaje.\n· CARTA a un/a amigo/a que va a empezar a aprender inglés: anímale y dale tus mejores consejos.", 140, 190),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Ocho extractos cortos", "Escucha ocho extractos (se oyen dos veces). Para cada uno, elige la respuesta correcta (A/B/C).", "This is Part One. You will hear people talking in eight different situations. One. Woman: I nearly gave up in the first few months, but I'm so glad I kept going. Two. Man: The moment it clicked was when I stopped translating in my head. Three. Woman: I passed with distinction — I honestly never thought I would. Four. Man: The trick isn't talent; it's just refusing to quit. Five. Woman: I learned more from my mistakes than from anything else. Six. Man: This time next year, I'll be using my English abroad. Seven. Woman: If I hadn't kept practising, I'd have forgotten it all by now. Eight. Man: Learning English didn't just help my career — it changed my whole life.", [
      mc("1. What is the woman glad about?", ["Giving up.", "Keeping going despite nearly quitting.", "Starting again."], 1, "'I'm so glad I kept going'."),
      mc("2. When did it 'click' for the man?", ["When he studied grammar.", "When he stopped translating in his head.", "When he passed."], 1, "'stopped translating in my head'."),
      mc("3. How did the woman do in the exam?", ["She failed.", "She passed with distinction.", "She didn't sit it."], 1, "'I passed with distinction'."),
      mc("4. What's the 'trick', according to the man?", ["Talent.", "Refusing to quit.", "Luck."], 1, "'refusing to quit'."),
      mc("5. What did the woman learn most from?", ["Books.", "Her mistakes.", "Her teacher."], 1, "'more from my mistakes'."),
      mc("6. What will the man be doing next year?", ["Studying.", "Using his English abroad.", "Retaking the exam."], 1, "'using my English abroad'."),
      mc("7. What would have happened without practice?", ["Nothing.", "She'd have forgotten it all.", "She'd have improved."], 1, "'I'd have forgotten it all by now'."),
      mc("8. What did learning English do for the man?", ["Only helped his career.", "Changed his whole life, not just his career.", "Nothing."], 1, "'changed my whole life'."),
    ]),

    ...speakingParts({ p1: "qué te ha aportado aprender inglés, qué es lo que más te ha costado y de qué te sientes orgulloso/a", p2: "dos momentos de aprender un idioma (alguien estudiando con dificultad al principio y alguien ya usándolo con soltura y confianza): compáralos y especula", p3: "qué ayuda más a aprender un idioma (la constancia, usarlo de verdad, perder el miedo a equivocarse, sumergirse, tener un buen método): comentadlo y elegid lo más importante", p4: "aprender idiomas: si merece la pena el esfuerzo, por qué unos lo logran y otros no, y qué consejo darías a quien empieza" }),

    SUMMARY("¡Curso B2 First completado! (Día 60)", [
      "Has completado los 60 días: toda la gramática, 60 mazos de léxico y las 4 destrezas con el formato REAL del B2 cada día.",
      "Dominas las estrategias de examen y has practicado en condiciones reales. Has hecho 12 mini-simulacros + este SIMULACRO FINAL.",
      "Estás preparado/a para presentarte al Cambridge B2 First con posibilidades reales de aprobar.",
      "El día del examen: descansa, gestiona el tiempo, no dejes nada en blanco, colabora en el Speaking y confía en tu preparación.",
      "Y sobre todo: sigue usando el inglés. Un idioma se mantiene usándolo. ¡Enhorabuena y mucha suerte! 🎓",
    ]),
    INFO("SIMULACRO FINAL del curso", "En el módulo siguiente tienes el SIMULACRO FINAL completo y cronometrado, con prácticas auto-corregibles de todo el curso. Es tu ensayo general del examen real. Aprueba con un 60%+. ¡Demuestra todo lo que has aprendido!"),
  ],
};

export const WEEK12 = {
  n: 12,
  theme: "La recta final · La salud y el estilo de vida",
  description: "Práctica en condiciones de examen de cada destreza, repaso global de los errores más comunes del hispanohablante y preparación para el día del examen, con el hilo de la salud, la alimentación, el bienestar mental y el equilibrio vida-trabajo. Al final, el SIMULACRO FINAL del curso.",
  days: [DAY56, DAY57, DAY58, DAY59, DAY60],
};
