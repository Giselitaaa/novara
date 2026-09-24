/**
 * C1 Advanced · Semana 10 — "Repaso integral (Semanas 1-9) · La salud mental, el arte, el espacio y el deporte de alto rendimiento".
 * Repaso combinado de TODA la gramática del curso: tiempos/aspecto (S1) +
 * inversión/cleft (S2); condicionales/wish/modales de deducción (S3) +
 * relativas reducidas/estilo indirecto (S4); cohesión del discurso (S5) +
 * colocaciones/idioms (S6); subjuntivo/nominalización/retórica (S8) +
 * participios/absolutas/énfasis (S9) — todo combinado en los mismos textos.
 * Cada día, las 4 destrezas con el formato real del C1 (Reading & UoE de 8 partes).
 */
import {
  TEXT, GRAMMAR, TIP, WARN, INFO, SUMMARY, deck,
  grammarEx, vocabEx, useCloze, openCloze, wordFormation, keyword, readingMC, crossTextMatching, gappedText, multipleMatching,
  writing, listening, speaking,
  READING_HEAD, WRITING_HEAD, LISTENING_HEAD, SPEAKING_HEAD, mc, fb,
} from "./_lib.mjs";

const uoe = ({ p1, p2, p3, p4, p5, p6, p7, p8 }) => [
  READING_HEAD,
  useCloze(p1.title, p1.text, p1.q),
  openCloze(p2.title, p2.text, p2.q),
  wordFormation(p3.title, p3.text, p3.items),
  keyword(p4.title, p4.items),
  readingMC(p5.title, p5.text, p5.q),
  crossTextMatching(p6.title, p6.intro, p6.texts, p6.q),
  gappedText(p7.title, p7.text, p7.options, p7.q),
  multipleMatching(p8.title, p8.text, p8.q),
];

const speakingParts = ({ p1, p2, p3, p4 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas y matizadas (3–4 frases con razones y ejemplos).", `Parte 1 del C1: preguntas personales (${p1})`, "responder con detalle, matices y ejemplos", "personally, to a large extent, what strikes me is, the main reason being"),
  speaking(2, "Speaking · Parte 2 — Turno largo (comparar fotos)", "Compara DOS de las tres fotos ~1 minuto, especula y responde a la pregunta.", `Parte 2 del C1: comparar dos fotografías sobre ${p2}`, "comparar, especular y evaluar", "whereas, this one seems to, it could well be that, presumably, what they have in common"),
  speaking(3, "Speaking · Parte 3 — Tarea colaborativa", "Comentad las opciones a fondo y llegad a una decisión conjunta.", `Parte 3 del C1: comentar juntos ${p3} y decidir`, "evaluar, negociar y matizar", "there's a strong case for, on balance, I take your point, that said, shall we settle on"),
  speaking(4, "Speaking · Parte 4 — Discusión", "Responde a preguntas abstractas con opiniones razonadas y desarrolladas.", `Parte 4 del C1: discusión sobre ${p4}`, "argumentar, matizar y generalizar", "it largely depends on, it's often argued that, up to a point, conversely, in the grand scheme of things"),
];

// ───────────────────────── DÍA 46 ─────────────────────────
const DAY46 = {
  title: "Día 46 — Repaso: tiempos/aspecto + inversión y cleft sentences · La salud mental y el bienestar",
  description: "Repaso combinado de los tiempos verbales y el aspecto (S1) con la inversión y las cleft sentences (S2), en los mismos textos. Vocabulario de la salud mental y el bienestar. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Combinar con soltura los tiempos/aspecto y los recursos de inversión/énfasis en un mismo texto coherente.",
    summary: "Repaso S1+S2 combinado; salud mental y bienestar; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["mezclar aspecto perfecto y continuo sin necesidad (over-marking).", "olvidar la inversión tras adverbios negativos/restrictivos al inicio de frase.", "usar cleft sentences en exceso, perdiendo naturalidad."],
    reviewPrompts: ["¿Recuerdas cuándo se usa 'had been doing' frente a 'had done'?", "¿Cómo invertirías 'I have never seen such chaos'?"],
  },
  items: [
    TEXT("🎯 Semana 10 del C1 — REPASO INTEGRAL de toda la gramática del curso, antes de la recta final. Hoy combinamos los TIEMPOS/ASPECTO (Semana 1) con la INVERSIÓN Y LAS CLEFT SENTENCES (Semana 2). Vocabulario: la SALUD MENTAL y el BIENESTAR."),
    GRAMMAR("Repaso combinado — tiempos/aspecto + inversión/cleft", `TIEMPOS Y ASPECTO (S1): perfect simple (acción completa, relevancia presente/pasada) vs. perfect continuous (proceso, duración, hasta un punto); past perfect para la anterioridad dentro de una narración.
· She had been struggling with anxiety for months before finally seeking help. (perfect continuous: proceso) → She had sought help twice before that. (perfect simple: acción completa, anterior)
INVERSIÓN (S2): tras adverbios negativos/restrictivos al inicio (never, rarely, not only, little, seldom) — auxiliar + sujeto.
· Never had she felt so overwhelmed by her own thoughts.
· Not only did therapy help her cope, but it also changed how she viewed vulnerability entirely.
CLEFT SENTENCES (S2): It is/was… that… (foco); What… is/was… (foco de tema).
· It was her therapist's simple question that finally made everything click.
· What helped most was having someone who genuinely listened without judgement.
Combinados en un mismo texto, estos recursos dan variedad estructural y énfasis natural — exactamente lo que busca el Reading P5-P8 y el Writing C1 de nivel alto.`),
    WARN("Errores típicos del hispanohablante (C1)", "· No abuses de la inversión ni del cleft en cada frase: 1-2 por párrafo dan impacto; en exceso, suenan forzados.\n· Recuerda: inversión = auxiliar + sujeto (Never had she felt), NO 'Never she had felt'.\n· El aspecto perfecto continuo enfatiza el PROCESO/DURACIÓN; el perfecto simple enfatiza el RESULTADO/COMPLETITUD — ambos pueden coexistir en el mismo párrafo con matices distintos."),
    grammarEx("Use of English — Repaso combinado (tiempos + inversión/cleft)", "Elige la opción correcta.", [
      mc("She ___ (struggle) with anxiety for months before finally seeking help.", ["had struggled", "had been struggling", "struggled"], 1, "perfect continuous: proceso prolongado."),
      mc("Never ___ she felt so overwhelmed by her own thoughts.", ["had", "did", "was"], 0, "inversión: had + sujeto."),
      mc("It was her therapist's question ___ finally made everything click.", ["which", "that", "who"], 1, "cleft sentence: It was… that…"),
      mc("Not only ___ therapy help her cope, but it also changed her outlook.", ["did", "was", "had"], 0, "inversión: did + sujeto + base form."),
      mc("What helped most ___ having someone who listened without judgement.", ["is", "was", "were"], 1, "cleft: What… was…"),
      mc("By the time she reached out for help, she ___ (suffer) in silence for years.", ["had suffered", "had been suffering", "suffered"], 1, "perfect continuous: duración hasta un punto pasado."),
    ]),
    GRAMMAR("Vocabulario del día — La salud mental y el bienestar (C1)", "Léxico avanzado de salud mental."),
    deck("C1 S10D46 — Salud mental y bienestar", [
      ["resilience", "resiliencia", "Building resilience takes considerable time.", "sustantivo", "rɪˈzɪliəns"],
      ["burnout", "agotamiento (laboral/emocional)", "Chronic burnout affected her entire outlook.", "sustantivo", "ˈbɜːnaʊt"],
      ["stigma", "estigma", "Mental health stigma is slowly declining.", "sustantivo", "ˈstɪgmə"],
      ["coping mechanism", "mecanismo de afrontamiento", "She developed healthier coping mechanisms.", "sustantivo", "ˈkəʊpɪŋ ˈmekənɪzəm"],
      ["therapy", "terapia", "Weekly therapy helped her process the loss.", "sustantivo", "ˈθerəpi"],
      ["overwhelmed", "abrumado/a", "She felt completely overwhelmed at first.", "adjetivo", "ˌəʊvəˈwelmd"],
      ["vulnerability", "vulnerabilidad", "Sharing her vulnerability took real courage.", "sustantivo", "ˌvʌlnərəˈbɪləti"],
      ["mindfulness", "atención plena / mindfulness", "Mindfulness practice reduced her anxiety.", "sustantivo", "ˈmaɪndflnəs"],
      ["self-care", "autocuidado", "Self-care became a genuine priority for her.", "sustantivo", "self keə"],
      ["breakdown", "crisis (nerviosa) / colapso", "The pressure eventually led to a breakdown.", "sustantivo", "ˈbreɪkdaʊn"],
    ]),
    vocabEx("Vocabulario — La salud mental y el bienestar", "Elige la opción correcta.", [
      mc("The capacity to recover from difficulty:", ["resilience", "stigma", "burnout"], 0, "resilience."),
      mc("Severe emotional exhaustion, often work-related:", ["burnout", "mindfulness", "therapy"], 0, "burnout."),
      mc("Negative social judgement attached to a condition:", ["stigma", "resilience", "self-care"], 0, "stigma."),
      mc("A strategy for dealing with stress or difficulty:", ["coping mechanism", "breakdown", "stigma"], 0, "coping mechanism."),
      mc("The state of being emotionally exposed or fragile:", ["vulnerability", "resilience", "mindfulness"], 0, "vulnerability."),
      mc("Deliberate practices to protect one's own wellbeing:", ["self-care", "burnout", "stigma"], 0, "self-care."),
    ]),

    ...uoe({
      p1: {
        title: "The cost of pretending you're fine",
        text: "Workplace culture in many industries has long (1)___ a premium on projecting constant competence and unwavering composure, regardless of what an employee might genuinely be experiencing (2)___ the surface. Never had this expectation seemed more (3)___ than during periods of sustained organisational crisis, when visible vulnerability was often quietly interpreted as a troubling sign of weakness rather than simply honest, ordinary humanity. It was this pervasive culture of enforced (4)___ that mental health advocates increasingly began challenging over the past decade, arguing that suppressing genuine distress rarely eliminates it, merely (5)___ it further underground, where it typically causes considerably greater eventual harm. Not only (6)___ organisations begun acknowledging this reality, but several have started actively restructuring workplace norms to make genuine vulnerability considerably less professionally risky to express.",
        q: [
          mc("(1)", ["placed", "put", "set", "laid"], 0, "'placed a premium on'."),
          mc("(2)", ["beneath", "below", "under", "underneath"], 2, "'beneath/under the surface' — under es más natural aquí."),
          mc("(3)", ["harmful", "damaging", "hurtful", "injurious"], 0, "'seemed more harmful'."),
          mc("(4)", ["stoicism", "silence", "denial", "composure"], 0, "'enforced stoicism' (fortaleza forzada)."),
          mc("(5)", ["pushing", "forcing", "driving", "sending"], 2, "'driving it further underground'."),
          mc("(6)", ["have", "has", "did", "do"], 0, "'Not only have organisations begun…' (inversión + present perfect)."),
        ],
      },
      p2: {
        title: "What therapy actually taught her",
        text: "By the time she finally sought professional help, she (1)___ (struggle) silently with anxiety for the better part of three years, convinced that admitting difficulty would somehow be interpreted as personal failure. It was not (2)___ several months into therapy that she began genuinely understanding how deeply this belief (3)___ shaped her behaviour, from her reluctance to ask colleagues for help to her tendency to systematically overcommit rather than risk appearing anything less than entirely capable. What helped most, she later reflected, was not any single dramatic insight, (4)___ the gradual, cumulative process of learning to tolerate genuine discomfort without immediately trying to suppress or fix it. Rarely (5)___ she imagined, before starting therapy, quite how exhausting the constant performance of composure (6)___ actually been.",
        q: [
          fb("(1)", ["had been struggling"], "past perfect continuous (proceso hasta un punto)."),
          fb("(2)", ["until"], "'It was not until… that' (cleft, repaso S2)."),
          fb("(3)", ["had"], "'how deeply this belief had shaped her behaviour'."),
          fb("(4)", ["but"], "'not any single insight, but the gradual… process'."),
          fb("(5)", ["had"], "'Rarely had she imagined…' (inversión)."),
          fb("(6)", ["had"], "'quite how exhausting… had actually been'."),
        ],
      },
      p3: {
        title: "Redefining professional resilience",
        text: "Traditional workplace notions of professional (1)___ have historically emphasised stoic endurance, the capacity to simply push through difficulty without visible complaint or apparent struggle. This (2)___ of resilience, increasingly, is being challenged by researchers who argue that genuine (3)___ actually requires the opposite: honest acknowledgment of difficulty, combined with active, deliberate strategies for genuine recovery rather than mere (4)___. Organisations genuinely committed to employee (5)___, these researchers argue, should measure success not by how rarely employees openly struggle, but by how effectively genuine struggle, once acknowledged, eventually leads to meaningful (6)___ and support.",
        items: [
          { root: "resile", accepted: ["resilience"], hint: "'professional resilience' (sustantivo, ya visto en el mazo)." },
          { root: "define", accepted: ["definition"], hint: "'This definition of resilience' → definition." },
          { root: "resile", accepted: ["resilience"], hint: "'genuine resilience actually requires the opposite' (repetido)." },
          { root: "endure", accepted: ["endurance"], hint: "'mere endurance' → endurance." },
          { root: "well", accepted: ["wellbeing"], hint: "'genuinely committed to employee wellbeing' → wellbeing." },
          { root: "intervene", accepted: ["intervention"], hint: "'meaningful intervention and support' → intervention." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado (tiempos + inversión/cleft)",
        items: [
          { s1: "She had struggled silently with anxiety for months before seeking help.", key: "STRUGGLING", s2: "She had been ___ silently with anxiety for months before seeking help.", accepted: ["struggling"], explanation: "perfect continuous (proceso)." },
          { s1: "She had never felt so overwhelmed by her own thoughts.", key: "HAD", s2: "Never ___ she felt so overwhelmed by her own thoughts.", accepted: ["had"], explanation: "inversión: never + had + sujeto." },
          { s1: "Her therapist's simple question finally made everything click.", key: "WAS", s2: "It ___ her therapist's simple question that finally made everything click.", accepted: ["was"], explanation: "cleft sentence: It was… that…" },
          { s1: "Therapy not only helped her cope, but it also changed her outlook.", key: "DID", s2: "Not only ___ therapy help her cope, but it also changed her outlook.", accepted: ["did"], explanation: "inversión: not only + did + sujeto." },
          { s1: "Having someone who listened without judgement helped her most.", key: "WAS", s2: "What helped her most ___ having someone who listened without judgement.", accepted: ["was"], explanation: "cleft: What… was…" },
        ],
      },
      p5: {
        title: "The executive who talked about it publicly",
        text: "When a senior technology executive stood before several hundred employees at a company-wide meeting and openly described her own recent struggle with burnout and clinical depression, the room, by most accounts, fell into a genuinely stunned, almost disbelieving silence. Never had anyone in her position spoken so candidly about mental health struggles within that particular organisation, and few present knew quite how to respond to such unexpected, unfiltered vulnerability from someone so senior.\n\nHer decision to speak publicly had not been made lightly. She had spent several weeks deliberating, consulting trusted colleagues and, notably, her own therapist, about whether such candour would help or ultimately harm her professional standing within a notoriously image-conscious industry that had rarely, if ever, rewarded visible vulnerability at senior levels.\n\nWhat ultimately persuaded her, she later explained, was not primarily her own personal comfort with disclosure, but rather a growing conviction that her silence, however professionally safe it might have felt, was actively contributing to precisely the culture of enforced stoicism she had come to believe was genuinely harming employees throughout the organisation, particularly those considerably more junior and vulnerable than herself.\n\nThe immediate aftermath proved, by her own honest account, considerably more complicated than she had initially anticipated. Some colleagues responded with evident warmth and, in several cases, their own quiet disclosures of similar struggles previously kept entirely private. Others, however, responded with a discomfort that occasionally manifested as subtle professional distance, an unspoken sense that she had somehow crossed an implicit, previously unstated boundary of appropriate corporate self-presentation.\n\nWhat surprised her considerably more than either reaction, however, was the volume of internal messages she subsequently received from employees she had never personally met, many describing their own private struggles and expressing genuine, evident gratitude that someone senior had finally, publicly acknowledged that such difficulties existed within their own organisation's walls.\n\nIn the months that followed, the company began implementing several concrete policy changes: expanded mental health coverage, mandatory manager training on supporting struggling employees, and formal recognition that burnout constituted a genuine organisational responsibility rather than simply an individual failing to be managed privately, quietly and largely invisibly.\n\nReflecting on the experience considerably later, she noted that while she had genuinely anticipated some professional risk in speaking so openly, she had not fully anticipated quite how much the experience would ultimately transform her own understanding of what effective, genuinely humane leadership actually required.",
        q: [
          mc("How did the room react to her disclosure?", ["With immediate applause.", "A stunned, almost disbelieving silence.", "Complete indifference.", "Open hostility."], 1, "'the room… fell into a genuinely stunned, almost disbelieving silence'."),
          mc("What had she spent weeks doing before speaking?", ["Ignoring the issue.", "Deliberating and consulting trusted colleagues and her therapist.", "Planning her resignation.", "Writing a formal complaint."], 1, "'She had spent several weeks deliberating, consulting trusted colleagues and… her own therapist'."),
          mc("What ultimately persuaded her to speak?", ["Personal comfort with disclosure.", "A conviction her silence contributed to harmful enforced stoicism.", "A direct order from senior management.", "Media pressure."], 1, "'a growing conviction that her silence… was actively contributing to precisely the culture of enforced stoicism'."),
          mc("How did colleagues generally respond?", ["Uniformly positively.", "Mixed — some warmth and disclosure, others subtle distance.", "Uniformly negatively.", "No response at all."], 1, "'Some colleagues responded with evident warmth… Others… responded with a discomfort that occasionally manifested as subtle professional distance'."),
          mc("What surprised her most?", ["The lack of any response.", "The volume of messages from employees she'd never met.", "Being asked to resign.", "Immediate policy change."], 1, "'the volume of internal messages she subsequently received from employees she had never personally met'."),
          mc("What changed at the company afterwards?", ["Nothing.", "Expanded mental health coverage and manager training were implemented.", "Her role was eliminated.", "The policy was reversed."], 1, "'the company began implementing several concrete policy changes: expanded mental health coverage, mandatory manager training'."),
        ],
      },
      p6: {
        title: "Should companies require mental health disclosure training for managers?",
        intro: "Cuatro personas debaten si las empresas deberían exigir formación obligatoria a los directivos sobre salud mental.",
        texts: {
          A: "NADIA: Absolutely, and it should have happened years ago. Managers routinely make decisions that directly affect employee wellbeing without any real training in recognising distress or responding appropriately; that gap causes genuine, preventable harm that basic training could meaningfully address.",
          B: "TOM: I support the general idea, though I worry about training becoming a mere box-ticking exercise rather than genuinely changing how managers actually behave day to day. Without real accountability attached, mandatory training risks becoming symbolic rather than substantively, meaningfully effective.",
          C: "PRIYA: What concerns me is privacy. Training managers to recognise distress is one thing; I worry it can tip into managers feeling entitled to probe into employees' personal lives in ways that feel intrusive rather than genuinely supportive, however well-intentioned the underlying motivation.",
          D: "SAM: My honest view is that training alone changes very little without genuinely changing workload and broader organisational culture too. A well-trained manager operating within a fundamentally unsustainable, relentlessly high-pressure system can still cause real harm, however good their individual, personal intentions genuinely are.",
        },
        q: [
          mc("Who believes mandatory training should have happened years ago?", ["A", "B", "C", "D"], 0, "Nadia: 'Absolutely, and it should have happened years ago'."),
          mc("Whose view most directly QUALIFIES Nadia's, worried about box-ticking?", ["A", "B", "C", "D"], 1, "Tom: 'I worry about training becoming a mere box-ticking exercise'."),
          mc("Who raises privacy concerns about managers probing personal lives?", ["A", "B", "C", "D"], 2, "Priya: 'I worry it can tip into managers feeling entitled to probe into employees' personal lives'."),
          mc("Who argues training alone changes little without addressing workload/culture?", ["A", "B", "C", "D"], 3, "Sam: 'training alone changes very little without genuinely changing workload and broader organisational culture'."),
        ],
      },
      p7: {
        title: "Why 'just relax' never actually works",
        text: "Well-meaning friends and colleagues offering stressed, overwhelmed individuals the simple advice to 'just relax' rarely realise quite how unhelpful, and occasionally counterproductive, that particular piece of advice genuinely tends to be. (1)___\n\nThe underlying problem is not that relaxation itself lacks value; it demonstrably does help, considerably, when genuinely achieved. (2)___ The issue lies instead in treating relaxation as something simply willed into existence on command, rather than as a state that typically requires specific conditions to actually occur.\n\nAnxiety and chronic stress, research increasingly suggests, involve genuine physiological changes that don't simply reverse themselves the moment someone decides, consciously, to stop feeling anxious. (3)___ Telling an anxious person to 'just relax' is, in this sense, somewhat comparable to telling someone with a broken leg to simply walk normally.\n\nWhat actually helps, evidence suggests, looks considerably more structured and specific than vague, well-intentioned advice to relax. (4)___ Concrete strategies — controlled breathing, physical movement, structured problem-solving — tend to work considerably better than the mere instruction to feel differently.\n\nThis matters because well-intentioned but poorly targeted advice can, paradoxically, make things measurably worse. (5)___ Being told to simply relax, while genuinely unable to do so, frequently adds a layer of guilt or inadequacy on top of the original stress itself.\n\nWhat genuinely helps, ultimately, is considerably less about the specific words offered and more about patient, practical support offered without judgement. (6)___ Sometimes the most useful thing anyone can actually say is simply: take whatever time you genuinely need.",
        options: [
          "It can, in fact, make things measurably worse.",   // A -> gap1
          "The problem lies in how that advice is typically delivered.", // B -> gap2
          "The body, in a real sense, doesn't simply take instructions.", // C -> gap3
          "Structure and specificity tend to help more than vague reassurance.", // D -> gap4
          "Good intentions, unfortunately, don't guarantee a good outcome.", // E -> gap5
          "Patience, more than any particular phrase, is what actually matters.", // F -> gap6
          "No research has ever examined why relaxation advice sometimes fails.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: puede empeorar las cosas."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el problema está en cómo se da el consejo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: el cuerpo no obedece órdenes simplemente."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la estructura ayuda más que la vaguedad."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la buena intención no garantiza buen resultado."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la paciencia importa más que la frase concreta."),
        ],
      },
      p8: {
        title: "Four people discuss how they manage stress",
        text: "Read what four people say about how they personally manage stress and protect their mental wellbeing.\n\nA) NADIA: I've never found sitting still particularly relaxing, so mindfulness apps never really worked for me. What genuinely helps is physical movement — running, specifically. It's the one thing that reliably quiets my mind when everything else has failed.\n\nB) TOM: Therapy was, honestly, the single most transformative thing I've ever done for my own mental health. It took months before I fully trusted the process, but I've never regretted starting, not even briefly, during the harder early sessions.\n\nC) PRIYA: For me it's structure and routine, more than any single specific technique. When my schedule falls apart, my stress levels climb almost immediately; keeping a fairly consistent daily rhythm does more for my wellbeing than anything else I've genuinely tried.\n\nD) SAM: Honestly, talking openly with close friends has helped me more than any formal intervention ever has. Just being able to say out loud that I'm struggling, without immediately being offered a solution, makes an enormous, genuine difference to how I feel.\n",
        q: [
          mc("Who found mindfulness apps didn't work and prefers running?", ["A", "B", "C", "D"], 0, "Nadia: 'mindfulness apps never really worked for me… What genuinely helps is physical movement — running'."),
          mc("Who calls therapy the single most transformative thing they've done?", ["A", "B", "C", "D"], 1, "Tom: 'Therapy was, honestly, the single most transformative thing I've ever done'."),
          mc("Who says structure and routine matter more than any single technique?", ["A", "B", "C", "D"], 2, "Priya: 'For me it's structure and routine, more than any single specific technique'."),
          mc("Who values talking openly with friends over formal intervention?", ["A", "B", "C", "D"], 3, "Sam: 'talking openly with close friends has helped me more than any formal intervention'."),
          mc("Who took months to fully trust a process but never regretted starting?", ["A", "B", "C", "D"], 1, "Tom: 'It took months before I fully trusted the process, but I've never regretted starting'."),
          mc("Who says their stress climbs almost immediately when their schedule falls apart?", ["A", "B", "C", "D"], 2, "Priya: 'When my schedule falls apart, my stress levels climb almost immediately'."),
          mc("Who values simply saying they're struggling without being offered a solution?", ["A", "B", "C", "D"], 3, "Sam: 'Just being able to say out loud that I'm struggling, without immediately being offered a solution'."),
          mc("Who says running quiets their mind when everything else has failed?", ["A", "B", "C", "D"], 0, "Nadia: 'It's the one thing that reliably quiets my mind when everything else has failed'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el bienestar laboral se plantearon dos ideas:\n· employees should feel free to openly discuss mental health struggles at work (deberían poder hablar abiertamente de salud mental)\n· personal struggles should remain private and separate from professional life (los problemas personales deberían mantenerse privados)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UN recurso de inversión/cleft y UN tiempo perfecto continuo. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What I've learned about managing stress' — reflexiona con un ejemplo personal o hipotético.\n· PROPUESTA para tu empresa/universidad sobre cómo mejorar el apoyo a la salud mental: Introduction / Current situation / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two colleagues discussing burnout. Woman: Never had I imagined how exhausting constantly performing composure could actually be. Man: It's exactly why I finally started therapy myself, to be honest. Extract Two. You hear two friends discussing mindfulness. Man: It was running, not meditation, that actually helped me most in the end. Woman: Interesting — mindfulness apps never really worked for me either, if I'm honest. Extract Three. You hear two managers discussing workplace policy. Woman: Not only did the new policy expand mental health coverage, but it also introduced mandatory manager training. Man: About time. Managers have never really been equipped to handle this properly before now.", [
      mc("1. What does the woman say about performing composure?", ["It was never tiring.", "She never imagined how exhausting it could be.", "It helped her relax."], 1, "'Never had I imagined how exhausting constantly performing composure could actually be'."),
      mc("2. What did this realisation lead the man to do?", ["Nothing.", "Start therapy himself.", "Change jobs."], 1, "'It's exactly why I finally started therapy myself'."),
      mc("3. What actually helped the man most?", ["Meditation.", "Running.", "Mindfulness apps."], 1, "'It was running, not meditation, that actually helped me most'."),
      mc("4. How does the woman feel about mindfulness apps?", ["They worked well for her.", "They never really worked for her either.", "She has never tried them."], 1, "'mindfulness apps never really worked for me either'."),
      mc("5. What did the new policy do, besides expanding coverage?", ["Nothing else.", "Introduced mandatory manager training.", "Cut costs."], 1, "'it also introduced mandatory manager training'."),
      mc("6. What does the man think about managers historically?", ["They were always well-equipped.", "They have never really been equipped to handle this properly.", "They didn't need training."], 1, "'Managers have never really been equipped to handle this properly before now'."),
    ]),

    ...speakingParts({ p1: "qué haces tú para cuidar tu bienestar mental o gestionar el estrés", p2: "dos imágenes del bienestar (alguien meditando en soledad y un grupo de amigos conversando): compáralas y especula sobre qué le aporta a cada persona", p3: "qué debería priorizar una empresa para cuidar la salud mental de su plantilla (formación de directivos, horarios flexibles, acceso a terapia, cultura de apertura, reducción de carga de trabajo): comentadlo y elegid lo más eficaz", p4: "la salud mental y el trabajo: si hablar abiertamente de salud mental en el trabajo ayuda o perjudica profesionalmente, qué responsabilidad tienen las empresas frente a la de cada individuo, y si el estigma está realmente desapareciendo" }),

    SUMMARY("Resumen del Día 46", [
      "Repaso combinado: tiempos/aspecto (perfect simple vs. continuous) + inversión (never/not only + auxiliar+sujeto) + cleft sentences (It is/was… that / What… is/was…).",
      "Vocabulario de salud mental y bienestar. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 47", "Escribe 4 frases combinando un tiempo perfecto con inversión o cleft. Repasa el vocabulario de salud mental. Mañana: condicionales/modales de deducción + relativas/estilo indirecto."),
  ],
};

// ───────────────────────── DÍA 47 ─────────────────────────
const DAY47 = {
  title: "Día 47 — Repaso: condicionales/modales de deducción + relativas y estilo indirecto · El arte y la literatura",
  description: "Repaso combinado de los condicionales mixtos/wish avanzado/modales de deducción y crítica retrospectiva (S3) con las relativas reducidas y el estilo indirecto preciso (S4). Vocabulario del arte y la literatura. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Combinar con soltura los condicionales/modales de deducción con las relativas reducidas y el estilo indirecto preciso.",
    summary: "Repaso S3+S4 combinado; arte y literatura; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["confundir 'should have + p.p.' (crítica/consejo retrospectivo) con 'must have + p.p.' (deducción).", "olvidar reducir relativas cuando el sujeto coincide (repaso S9 también).", "usar verbos informales de reporte en vez de los precisos (claim, insist, deny, admit…)."],
    reviewPrompts: ["¿Cuál es la diferencia entre 'must have known' y 'should have known'?", "¿Cómo reportarías con precisión 'I definitely didn't take it'?"],
  },
  items: [
    TEXT("🔁 Ayer, tiempos + inversión/cleft. Hoy combinamos los CONDICIONALES MIXTOS/MODALES DE DEDUCCIÓN (Semana 3) con las RELATIVAS REDUCIDAS y el ESTILO INDIRECTO PRECISO (Semana 4). Vocabulario: el ARTE y la LITERATURA."),
    GRAMMAR("Repaso combinado — condicionales/modales + relativas/estilo indirecto", `CONDICIONALES MIXTOS Y MODALES DE DEDUCCIÓN (S3):
· If she had studied art history, she would understand the painting's significance now. (mixto: pasado→presente)
· He must have known the piece was a forgery. (deducción, pasado) / He should have verified its authenticity before buying it. (crítica retrospectiva)
RELATIVAS REDUCIDAS (S4): sustituyen 'who/which + be' por participio, o eliminan el pronombre cuando es objeto.
· The painting (which was) displayed at the gallery attracted considerable attention.
ESTILO INDIRECTO PRECISO (S4): verbos de reporte que capturan matiz (claim, insist, deny, admit, acknowledge, allege).
· "It's definitely not a forgery," she said. → She insisted (that) it was not a forgery.
· "I might have made an error," he said. → He admitted (that) he might have made an error.
Combinados: un texto sobre arte puede especular con condicionales/deducción sobre la autenticidad de una obra, describir la obra con relativas reducidas, y reportar las declaraciones de expertos con verbos precisos.`),
    WARN("Errores típicos del hispanohablante (C1)", "· 'must have + p.p.' = deducción sobre el pasado (probablemente pasó); 'should have + p.p.' = crítica/consejo sobre algo que NO pasó (debería haber pasado, pero no pasó).\n· Al reducir relativas, solo puedes eliminar el pronombre relativo si es OBJETO de la cláusula, no si es sujeto (salvo con participio).\n· Verbos de reporte con matiz (insist, deny, admit, allege, claim) cambian el significado — no son intercambiables con 'say' sin más."),
    grammarEx("Use of English — Repaso combinado (condicionales/modales + relativas/estilo indirecto)", "Elige la opción correcta.", [
      mc("If she ___ (study) art history, she would understand the painting's significance now.", ["studied", "had studied", "would study"], 1, "condicional mixto: pasado → presente."),
      mc("He ___ have known the piece was a forgery — the pigments were clearly too modern.", ["must", "should", "might"], 0, "deducción fuerte sobre el pasado: must have."),
      mc("He ___ have verified the painting's authenticity before paying such a price.", ["must", "should", "can"], 1, "crítica retrospectiva: should have (no lo hizo)."),
      mc("The painting ___ at the gallery last year attracted considerable attention.", ["displayed", "displaying", "was displayed"], 0, "relativa reducida: (which was) displayed."),
      mc("\"It's definitely not a forgery,\" she said. → She ___ that it was not a forgery.", ["said", "insisted", "wondered"], 1, "verbo de reporte preciso: insisted (énfasis/firmeza)."),
      mc("\"I might have made an error,\" he said. → He ___ that he might have made an error.", ["denied", "admitted", "insisted"], 1, "verbo de reporte preciso: admitted."),
    ]),
    GRAMMAR("Vocabulario del día — El arte y la literatura (C1)", "Léxico avanzado de arte y literatura."),
    deck("C1 S10D47 — Arte y literatura", [
      ["masterpiece", "obra maestra", "The painting is considered his masterpiece.", "sustantivo", "ˈmɑːstəpiːs"],
      ["forgery", "falsificación", "Experts confirmed the painting was a forgery.", "sustantivo", "ˈfɔːdʒəri"],
      ["provenance", "procedencia (de una obra)", "The artwork's provenance remains disputed.", "sustantivo", "ˈprɒvənəns"],
      ["critique", "crítica (análisis)", "The novel offers a sharp critique of society.", "sustantivo", "krɪˈtiːk"],
      ["allegory", "alegoría", "The story works as an allegory for war.", "sustantivo", "ˈælɪgəri"],
      ["evocative", "evocador/a", "The imagery is remarkably evocative.", "adjetivo", "ɪˈvɒkətɪv"],
      ["avant-garde", "vanguardista", "The exhibition showcased avant-garde work.", "adjetivo", "ˌævɒŋˈgɑːd"],
      ["narrative voice", "voz narrativa", "The narrative voice shifts unexpectedly.", "sustantivo", "ˈnærətɪv vɔɪs"],
      ["subjective", "subjetivo/a", "Artistic value is inherently subjective.", "adjetivo", "səbˈdʒektɪv"],
      ["canon", "canon (literario/artístico)", "The novel eventually entered the literary canon.", "sustantivo", "ˈkænən"],
    ]),
    vocabEx("Vocabulario — El arte y la literatura", "Elige la opción correcta.", [
      mc("A fake presented as an authentic work:", ["forgery", "masterpiece", "allegory"], 0, "forgery."),
      mc("The documented history of ownership of an artwork:", ["provenance", "critique", "canon"], 0, "provenance."),
      mc("A story with a deeper symbolic meaning:", ["allegory", "critique", "provenance"], 0, "allegory."),
      mc("Strongly suggestive of a particular feeling or memory:", ["evocative", "subjective", "avant-garde"], 0, "evocative."),
      mc("Experimental, ahead of its time artistically:", ["avant-garde", "canon", "evocative"], 0, "avant-garde."),
      mc("The body of works considered most important in a field:", ["canon", "provenance", "critique"], 0, "canon."),
    ]),

    ...uoe({
      p1: {
        title: "The novel nobody wanted to publish",
        text: "Literary history is (1)___ with examples of works now considered masterpieces that were initially rejected, sometimes repeatedly, (2)___ publishers who simply failed to recognise their eventual significance. Had those early publishers possessed the critical hindsight later generations would (3)___ apply, the literary canon as we currently know it might look considerably different today. Critics reviewing these rejection decisions decades later often conclude that publishers (4)___ have recognised the work's innovative qualities, though such judgements, admittedly, benefit enormously (5)___ hindsight unavailable to decision-makers actually working at the time. What this pattern (6)___ suggests is that artistic value, however genuinely real, often proves considerably harder to recognise in the moment than retrospective critical consensus subsequently implies.",
        q: [
          mc("(1)", ["littered", "filled", "covered", "packed"], 0, "'is littered with examples'."),
          mc("(2)", ["by", "from", "through", "via"], 0, "'rejected… by publishers'."),
          mc("(3)", ["eventually", "later", "subsequently", "finally"], 0, "'hindsight later generations would eventually apply'."),
          mc("(4)", ["should", "must", "could"], 0, "'publishers should have recognised' (crítica retrospectiva)."),
          mc("(5)", ["from", "by", "through", "with"], 0, "'benefit enormously from hindsight'."),
          mc("(6)", ["repeatedly", "consistently", "persistently", "regularly"], 1, "'this pattern consistently suggests'."),
        ],
      },
      p2: {
        title: "The critic who changed her mind",
        text: "A prominent art critic, reviewing an exhibition she initially dismissed as derivative and unoriginal, later publicly admitted that her original assessment (1)___ been considerably too hasty, formed under professional deadline pressure that left (2)___ time for the kind of careful, sustained reflection such genuinely challenging work actually demanded. Had she allowed herself more (3)___ before publishing her initial review, she later acknowledged, she might well have recognised qualities that only became fully apparent to her (4)___ repeated viewing. \"I must ___ (5) missed something significant the first time round,\" she admitted candidly in a later published retraction, a rare and professionally risky act of genuine critical humility within an industry (6)___ rarely rewards public admissions of error.",
        q: [
          fb("(1)", ["had"], "'her original assessment had been considerably too hasty'."),
          fb("(2)", ["little", "insufficient"], "'left little/insufficient time'."),
          fb("(3)", ["time"], "'allowed herself more time'."),
          fb("(4)", ["upon", "after", "on"], "'only became fully apparent to her upon/after repeated viewing'."),
          fb("(5)", ["have"], "'I must have missed something' (deducción, must have + p.p.)."),
          fb("(6)", ["that", "which"], "'an industry that/which rarely rewards'."),
        ],
      },
      p3: {
        title: "Restoring an author's reputation",
        text: "Literary reputations, scholars increasingly acknowledge, are rarely fixed permanently at the moment of a work's original (1)___; they shift, sometimes dramatically, as later generations of readers and critics bring fresh critical (2)___ to bear on texts their original contemporaries may have misunderstood or seriously undervalued. Several authors now firmly established within the literary canon faced considerable critical (3)___ during their own lifetimes, their eventual (4)___ arriving only posthumously, often decades after their own deaths, through the patient, sustained efforts of later scholars and passionate advocates. This pattern raises a genuinely (5)___ question for contemporary critics: how many currently undervalued works might similarly require future critical (6)___ before their genuine significance eventually becomes fully, properly apparent?",
        items: [
          { root: "public", accepted: ["publication"], hint: "'the moment of a work's original publication' → publication." },
          { root: "perspective", accepted: ["perspective", "perspectives"], hint: "'fresh critical perspective(s)' (sustantivo)." },
          { root: "hostile", accepted: ["hostility"], hint: "'considerable critical hostility' → hostility." },
          { root: "recognise", accepted: ["recognition"], hint: "'their eventual recognition arriving… posthumously' → recognition." },
          { root: "uncomfort", accepted: ["uncomfortable"], hint: "'a genuinely uncomfortable question' → uncomfortable." },
          { root: "evaluate", accepted: ["reevaluation", "re-evaluation"], hint: "'future critical re-evaluation' → re-evaluation." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado (condicionales/modales + relativas/estilo indirecto)",
        items: [
          { s1: "It's likely the pigments were too modern, so the piece was probably a forgery.", key: "MUST", s2: "The piece ___ have been a forgery — the pigments were clearly too modern.", accepted: ["must"], explanation: "deducción fuerte: must have." },
          { s1: "He didn't verify the painting's authenticity, which was a mistake.", key: "SHOULD", s2: "He ___ have verified the painting's authenticity.", accepted: ["should"], explanation: "crítica retrospectiva: should have." },
          { s1: "The painting was displayed at the gallery and attracted attention.", key: "DISPLAYED", s2: "The painting ___ at the gallery attracted attention.", accepted: ["displayed"], explanation: "relativa reducida: (which was) displayed." },
          { s1: "\"It's definitely not a forgery,\" she said firmly.", key: "INSISTED", s2: "She ___ that it was not a forgery.", accepted: ["insisted"], explanation: "verbo de reporte preciso: insisted." },
          { s1: "If she had studied art history, she would understand the painting now.", key: "STUDIED", s2: "If she ___ art history, she would understand the painting now.", accepted: ["had studied"], explanation: "condicional mixto (pasado → presente)." },
        ],
      },
      p5: {
        title: "The painting in the attic",
        text: "When an elderly woman finally decided to clear out her late grandmother's attic after years of understandable procrastination, she discovered, tucked away behind decades of accumulated, largely forgotten possessions, a small, unremarkable-looking painting that had apparently hung, entirely unnoticed and unappreciated, in a spare room for the better part of a century.\n\nHaving no particular reason to suspect the painting held any significant value, she initially considered simply discarding it along with several other accumulated items she judged similarly unremarkable. It was only a passing, almost offhand comment from a visiting friend, who happened to have some background in art history, that prompted her to seek a professional opinion before making any final, irreversible decision.\n\nThe painting, once properly examined by specialists, proved to be a previously unrecorded work by a moderately well-known nineteenth-century artist, its existence entirely unknown to art historians who had assumed the artist's documented body of work was already, by that point, essentially complete and fully catalogued.\n\nExperts who examined the piece noted several distinctive stylistic features consistent with the artist's confirmed, authenticated late period, though they cautioned that definitively establishing authenticity would require considerably more extensive scientific testing than a single initial visual examination alone could reasonably provide.\n\nHad the woman's grandmother, now long deceased, ever known or even suspected the painting's likely significance, family members speculated she almost certainly would have mentioned it at some point during her own lifetime; she had, after all, been known within the family for freely, often proudly discussing her own more mundane possessions in considerable, sometimes excessive detail.\n\nThe eventual authentication process took the better part of eighteen months, involving pigment analysis, canvas dating and careful, painstaking comparison with the artist's other confirmed, previously authenticated works. When the painting was finally, formally authenticated, its estimated value proved genuinely, remarkably substantial, transforming what had begun as a routine, entirely unremarkable attic clear-out into a story that made headlines considerably beyond the family's own immediate, private circle.\n\nThe woman, reflecting later on the experience, admitted she still found the entire episode somewhat difficult to fully process. \"I must have walked past that painting a thousand times as a child,\" she noted, \"without ever once genuinely looking at it properly.\"",
        q: [
          mc("Where did the woman find the painting?", ["In a gallery.", "In her late grandmother's attic.", "At an auction.", "In a storage unit."], 1, "'she discovered… in her late grandmother's attic… a small, unremarkable-looking painting'."),
          mc("What prompted her to seek a professional opinion?", ["A dealer's offer.", "A passing comment from a friend with art history background.", "An insurance requirement.", "A newspaper article."], 1, "'a passing, almost offhand comment from a visiting friend, who happened to have some background in art history'."),
          mc("What did the painting turn out to be?", ["A worthless copy.", "A previously unrecorded work by a known artist.", "A modern reproduction.", "A forgery."], 1, "'proved to be a previously unrecorded work by a moderately well-known nineteenth-century artist'."),
          mc("What did family members speculate about the grandmother?", ["She had hidden it deliberately.", "She likely never knew or suspected its significance.", "She had sold similar paintings before.", "She was an art expert herself."], 1, "'she almost certainly would have mentioned it at some point during her own lifetime' (implying she never knew)."),
          mc("How long did the authentication process take?", ["A few days.", "The better part of eighteen months.", "Five years.", "It's still ongoing."], 1, "'The eventual authentication process took the better part of eighteen months'."),
          mc("How does the woman describe her own reaction to the discovery?", ["Completely unaffected.", "Still somewhat difficult to fully process.", "Immediately confident and unsurprised.", "Regretful."], 1, "'she still found the entire episode somewhat difficult to fully process'."),
        ],
      },
      p6: {
        title: "Should found artworks always be authenticated publicly?",
        intro: "Cuatro personas debaten si las obras de arte halladas deberían autenticarse y publicarse siempre abiertamente.",
        texts: {
          A: "NADIA: Absolutely, in the interest of art history itself. Every authenticated discovery adds genuine knowledge to our understanding of an artist's body of work; keeping such findings private, for whatever reason, deprives scholars and the wider public of information that genuinely matters.",
          B: "TOM: I understand that view, but I'd defend an owner's right to privacy here. Not every discovery needs to become a public spectacle; a quiet, private authentication for insurance or sale purposes seems entirely reasonable, provided scholars are eventually given some form of access.",
          C: "PRIYA: What concerns me most is the market distortion public authentication can cause. Sudden, dramatic publicity around a found masterpiece can trigger exactly the kind of speculative frenzy that ultimately harms serious, careful scholarship far more than it genuinely helps it.",
          D: "SAM: Honestly, I think it depends entirely on the artist's significance. A minor, relatively obscure work matters considerably less publicly than, say, a previously unknown piece by a truly major historical figure, where the case for public disclosure becomes considerably, genuinely stronger.",
        },
        q: [
          mc("Who believes discoveries should always be public for the sake of art history?", ["A", "B", "C", "D"], 0, "Nadia: 'Absolutely, in the interest of art history itself'."),
          mc("Whose view most directly QUALIFIES Nadia's, defending an owner's right to privacy?", ["A", "B", "C", "D"], 1, "Tom: 'I'd defend an owner's right to privacy here'."),
          mc("Who worries about market distortion from public authentication?", ["A", "B", "C", "D"], 2, "Priya: 'the market distortion public authentication can cause'."),
          mc("Who thinks it depends on the artist's significance?", ["A", "B", "C", "D"], 3, "Sam: 'it depends entirely on the artist's significance'."),
        ],
      },
      p7: {
        title: "What forgers actually reveal about taste",
        text: "Art forgery scandals tend to generate considerable public fascination, though usually for reasons that miss what such cases actually, most interestingly, reveal. (1)___\n\nThe common narrative focuses almost entirely on the forger's individual skill and audacious deception. (2)___ That framing, however satisfying as pure narrative, overlooks a considerably more interesting question.\n\nWhy, exactly, did respected experts, often with decades of relevant professional experience, fail to detect the deception for so long? (3)___ The answer, uncomfortably, often has less to do with the forger's technical skill than with what experts, consciously or not, expected and wanted to find.\n\nSuccessful forgers, studies of major cases repeatedly suggest, don't merely imitate an artist's technique. (4)___ They imitate what critics and collectors already believed, consciously or unconsciously, a genuine work by that particular artist ought to look like.\n\nThis matters considerably because it suggests authentication is never purely, simply technical. (5)___ It also involves prevailing taste, professional reputation, and sometimes genuine financial incentive to confirm rather than seriously question a promising, lucrative attribution.\n\nWhat major forgery scandals ultimately reveal, then, is considerably less about individual criminal deception than about the surprisingly fallible, genuinely human process by which artistic value gets collectively, socially determined in the first place. (6)___ The forger, in this sense, merely exploited assumptions that were already comfortably, quietly sitting there, waiting to be confirmed.",
        options: [
          "What these cases reveal is considerably more interesting than simple deception.", // A -> gap1
          "That version of events makes for a genuinely compelling story.", // B -> gap2
          "That question deserves more attention than it usually receives.", // C -> gap3
          "They imitate expectation, which is a subtly different thing entirely.", // D -> gap4
          "Expert judgement, it turns out, is never entirely neutral either.", // E -> gap5
          "Belief, in the end, did much of the forger's work for him.",  // F -> gap6
          "No forger has ever successfully deceived a genuine expert.",  // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: lo que revelan estos casos es más interesante que el simple engaño."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa versión resulta una historia convincente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: esa pregunta merece más atención."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: imitan la expectativa, algo sutilmente distinto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el juicio experto tampoco es neutral."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la creencia hizo buena parte del trabajo del falsificador."),
        ],
      },
      p8: {
        title: "Four people discuss a book or film that changed their perspective",
        text: "Read what four people say about a book or film that genuinely changed their perspective on something.\n\nA) NADIA: The novel I read last year completely changed how I thought about memory and narrative reliability. The narrative voice shifts constantly between characters, and you gradually realise none of them is being entirely honest, not even with themselves.\n\nB) TOM: A documentary about art forgery genuinely reshaped how I think about authenticity itself. It made me realise how much of what we value in art depends on attribution and story, not purely on the object itself, independent of who supposedly made it.\n\nC) PRIYA: I read a memoir that completely changed how I understood a period of history I'd previously only encountered in fairly dry, impersonal textbooks. The personal, individual voice made abstract historical events feel genuinely, viscerally real for the first time.\n\nD) SAM: A film adaptation, oddly, sent me back to reread the original novel it was based on, and I ended up appreciating the book's ambiguity far more than I initially had. The film had to resolve things the book had deliberately, quite skilfully left open.\n",
        q: [
          mc("Who was changed by a novel with a shifting, unreliable narrative voice?", ["A", "B", "C", "D"], 0, "Nadia: 'The narrative voice shifts constantly between characters, and you gradually realise none of them is being entirely honest'."),
          mc("Who was reshaped by a documentary about art forgery?", ["A", "B", "C", "D"], 1, "Tom: 'A documentary about art forgery genuinely reshaped how I think about authenticity itself'."),
          mc("Who found a memoir made history feel viscerally real for the first time?", ["A", "B", "C", "D"], 2, "Priya: 'The personal, individual voice made abstract historical events feel genuinely, viscerally real'."),
          mc("Who reread a novel after seeing its film adaptation?", ["A", "B", "C", "D"], 3, "Sam: 'sent me back to reread the original novel it was based on'."),
          mc("Who realised art value depends on attribution and story, not just the object?", ["A", "B", "C", "D"], 1, "Tom: 'how much of what we value in art depends on attribution and story, not purely on the object itself'."),
          mc("Who had previously only encountered a period of history in dry textbooks?", ["A", "B", "C", "D"], 2, "Priya: 'a period of history I'd previously only encountered in fairly dry, impersonal textbooks'."),
          mc("Who appreciated a book's ambiguity more after seeing the film adaptation resolve it?", ["A", "B", "C", "D"], 3, "Sam: 'I ended up appreciating the book's ambiguity far more… The film had to resolve things the book had… left open'."),
          mc("Who realises none of the novel's characters is entirely honest, even with themselves?", ["A", "B", "C", "D"], 0, "Nadia: 'none of them is being entirely honest, not even with themselves'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el arte se plantearon dos ideas:\n· artistic value is ultimately subjective, decided by personal taste (el valor artístico es subjetivo)\n· some works have genuine, objectively measurable artistic merit (algunas obras tienen mérito objetivo)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UN condicional mixto y UNA relativa reducida. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· REVIEW de un libro, película o exposición que te haya marcado: descríbelo y valóralo.\n· CARTA/EMAIL a un/a amigo/a recomendando una obra de arte o literatura y explicando por qué le impactó.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (8 huecos)", "Escucha a una historiadora del arte hablando sobre un hallazgo reciente (se oye dos veces). Completa las frases con la información que oigas (máx. 3 palabras).", "This is Part Two. You will hear an art historian talking about a recent discovery. The painting was found in an attic, completely unnoticed for almost a century, tucked behind decades of forgotten family possessions. What first caught my attention was the brushwork, which seemed remarkably consistent with the artist's confirmed late period. We spent eighteen months on authentication, involving pigment analysis and canvas dating before we felt confident enough to make any public announcement. The family had absolutely no idea of its potential significance; they'd nearly thrown it away entirely during a routine house clearance. What strikes me most about cases like this is how often authentic masterpieces survive purely by accident rather than through any deliberate act of careful preservation. Once authenticated, the painting's estimated value proved genuinely substantial, which understandably changed the family's whole relationship to the object overnight. My advice to anyone finding an old painting is simple: always get a second professional opinion before making any final decision about it, however unremarkable it might initially appear to an untrained eye.", [
      fb("1. The painting was found in an ___, unnoticed for almost a century.", ["attic"], "'found in an attic, completely unnoticed for almost a century'."),
      fb("2. What first caught attention was the ___.", ["brushwork"], "'What first caught my attention was the brushwork'."),
      fb("3. Authentication took ___ months.", ["eighteen", "18"], "'We spent eighteen months on authentication'."),
      fb("4. Authentication involved pigment analysis and ___ dating.", ["canvas"], "'pigment analysis and canvas dating'."),
      fb("5. The family had nearly ___ the painting away.", ["thrown"], "'they'd nearly thrown it away entirely'."),
      fb("6. Masterpieces often survive purely by ___ rather than deliberate preservation.", ["accident"], "'survive purely by accident rather than through any deliberate… preservation'."),
      fb("7. The painting's estimated value proved genuinely ___.", ["substantial"], "'the painting's estimated value proved genuinely substantial'."),
      fb("8. Advice: always get a ___ professional opinion.", ["second"], "'always get a second professional opinion'."),
    ]),

    ...speakingParts({ p1: "si te gusta el arte o la literatura y qué obra recuerdas con más cariño", p2: "dos imágenes del arte (una galería llena de visitantes y un artista trabajando solo en su estudio): compáralas y especula sobre lo que representa cada situación para el arte", p3: "qué determina si una obra de arte se considera 'buena' o valiosa (la técnica, la originalidad, la opinión de los críticos, el precio de mercado, el gusto personal): comentadlo y elegid lo más determinante", p4: "el arte y su valor: si el valor artístico es realmente subjetivo, qué papel deberían tener los museos en decidir qué se expone, y si la tecnología (IA, reproducciones digitales) está cambiando nuestra relación con el arte" }),

    SUMMARY("Resumen del Día 47", [
      "Repaso combinado: condicionales mixtos + modales de deducción/crítica (must have / should have) + relativas reducidas + estilo indirecto preciso (insist, admit, deny, allege).",
      "Vocabulario del arte y la literatura. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 48", "Escribe 4 frases combinando un modal de deducción con una relativa reducida. Repasa el vocabulario de arte. Mañana: cohesión del discurso + colocaciones e idioms."),
  ],
};

// ───────────────────────── DÍA 48 ─────────────────────────
const DAY48 = {
  title: "Día 48 — Repaso: cohesión del discurso + colocaciones e idioms · El espacio y la exploración",
  description: "Repaso combinado de los conectores de contraste/causa-consecuencia/adición enfática/elipsis-sustitución (S5) con las colocaciones formales y los idioms académicos (S6). Vocabulario del espacio y la exploración. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Combinar con soltura los conectores de cohesión del discurso con las colocaciones e idioms de registro formal.",
    summary: "Repaso S5+S6 combinado; espacio y exploración; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["repetir el mismo conector varias veces en el mismo texto en vez de variar (however/nevertheless/that said…).", "usar colocaciones incorrectas (❌ do a decision en vez de ✅ make a decision).", "traducir idioms literalmente del español."],
    reviewPrompts: ["¿Qué otros conectores de contraste conoces además de 'however'?", "¿Recuerdas alguna colocación con 'draw' o 'pose'?"],
  },
  items: [
    TEXT("🔁 Ayer, condicionales/modales + relativas/estilo indirecto. Hoy combinamos la COHESIÓN DEL DISCURSO (Semana 5) con las COLOCACIONES FORMALES y los IDIOMS ACADÉMICOS (Semana 6). Vocabulario: el ESPACIO y la EXPLORACIÓN."),
    GRAMMAR("Repaso combinado — cohesión del discurso + colocaciones/idioms", `COHESIÓN DEL DISCURSO (S5): conectores de contraste matizado (that said, having said that, nonetheless), causa-consecuencia formal (given that, on the grounds that, as a consequence), adición enfática (not only… but also, moreover, what is more), elipsis/sustitución (so did I, neither does she, one/ones).
· The mission faced significant setbacks. That said, the scientific data gathered proved genuinely invaluable.
· Given that the budget had been cut significantly, the agency scaled back its ambitions considerably.
COLOCACIONES FORMALES (S6): verbo + sustantivo fijas (pose a challenge, draw a conclusion, reach a consensus, pursue an objective).
· The mission posed considerable technical challenges. Scientists drew several important conclusions from the data.
IDIOMS ACADÉMICOS (S6): a far cry from, the tip of the iceberg, a double-edged sword, par for the course.
· What they discovered was merely the tip of the iceberg; far more remains genuinely unknown.
Combinados: un texto sobre exploración espacial puede usar cohesión matizada para estructurar el argumento, colocaciones formales para el registro, e idioms puntuales para dar color.`),
    WARN("Errores típicos del hispanohablante (C1)", "· Varía los conectores: no uses 'however' en cada frase — alterna con nonetheless, that said, having said that.\n· Las colocaciones son fijas: 'pose a challenge' (no ❌ 'put a challenge'), 'draw a conclusion' (no ❌ 'make a conclusion').\n· Los idioms son de registro MUY informal-coloquial en su origen pero aceptables en Writing C1 con moderación; úsalos con precisión de significado, no solo por sonar 'avanzado'."),
    grammarEx("Use of English — Repaso combinado (cohesión + colocaciones/idioms)", "Elige la opción correcta.", [
      mc("The mission faced significant setbacks. That ___, the data gathered proved invaluable.", ["said", "considered", "noted"], 0, "that said (contraste matizado)."),
      mc("___ the budget had been cut, the agency scaled back its ambitions.", ["Given that", "So that", "Such that"], 0, "given that (causa)."),
      mc("Scientists ___ several important conclusions from the mission's data.", ["made", "drew", "took"], 1, "colocación fija: draw a conclusion."),
      mc("The mission ___ considerable technical challenges for engineers.", ["put", "posed", "gave"], 1, "colocación fija: pose a challenge."),
      mc("What they discovered was merely the tip of the ___; far more remains unknown.", ["mountain", "iceberg", "surface"], 1, "idiom: the tip of the iceberg."),
      mc("Funding cuts are, unfortunately, par for the ___ in space exploration.", ["course", "ground", "way"], 0, "idiom: par for the course."),
    ]),
    GRAMMAR("Vocabulario del día — El espacio y la exploración (C1)", "Léxico avanzado de exploración espacial."),
    deck("C1 S10D48 — El espacio y la exploración", [
      ["orbit", "órbita", "The satellite entered a stable orbit.", "sustantivo", "ˈɔːbɪt"],
      ["propulsion", "propulsión", "New propulsion systems cut travel time.", "sustantivo", "prəˈpʌlʃn"],
      ["habitable", "habitable", "The planet lies in a habitable zone.", "adjetivo", "ˈhæbɪtəbl"],
      ["reconnaissance", "reconocimiento (exploratorio)", "The probe conducted a reconnaissance flyby.", "sustantivo", "rɪˈkɒnɪsəns"],
      ["extraterrestrial", "extraterrestre", "No extraterrestrial life has been confirmed.", "adjetivo", "ˌekstrətəˈrestriəl"],
      ["payload", "carga útil", "The rocket carried a scientific payload.", "sustantivo", "ˈpeɪləʊd"],
      ["trajectory", "trayectoria", "Engineers adjusted the spacecraft's trajectory.", "sustantivo", "trəˈdʒektəri"],
      ["uncrewed", "no tripulado/a", "The mission was entirely uncrewed.", "adjetivo", "ʌnˈkruːd"],
      ["interstellar", "interestelar", "Interstellar travel remains purely theoretical.", "adjetivo", "ˌɪntəˈstelə"],
      ["celestial", "celeste / celestial", "The telescope mapped distant celestial bodies.", "adjetivo", "sɪˈlestiəl"],
    ]),
    vocabEx("Vocabulario — El espacio y la exploración", "Elige la opción correcta.", [
      mc("The curved path a spacecraft or planet follows:", ["orbit", "payload", "propulsion"], 0, "orbit."),
      mc("Capable of supporting life:", ["habitable", "uncrewed", "interstellar"], 0, "habitable."),
      mc("Without any human crew aboard:", ["uncrewed", "habitable", "celestial"], 0, "uncrewed."),
      mc("The cargo carried by a rocket or spacecraft:", ["payload", "trajectory", "orbit"], 0, "payload."),
      mc("The path a moving object takes through space:", ["trajectory", "payload", "reconnaissance"], 0, "trajectory."),
      mc("Relating to objects between stars:", ["interstellar", "extraterrestrial", "celestial"], 0, "interstellar."),
    ]),

    ...uoe({
      p1: {
        title: "Why we still look up",
        text: "Space exploration has long (1)___ considerable public fascination, despite representing, by most conventional economic measures, an extraordinarily expensive undertaking with famously uncertain and frequently distant practical returns. Critics have long (2)___ that resources devoted to exploring distant celestial bodies might arguably serve humanity better addressing pressing problems considerably closer to home. Advocates, that (3)___, counter that space exploration drives genuine technological innovation with numerous unexpected earthbound applications, from satellite communication to advanced materials science. Given (4)___ both perspectives contain genuine, defensible merit, the debate seems unlikely to reach any definitive, permanent resolution soon. What remains undeniable, however, is that humanity's fascination with what lies beyond our own planet shows (5)___ sign of genuinely diminishing, whatever the ongoing debate's eventual practical (6)___ ultimately proves to be.",
        q: [
          mc("(1)", ["captured", "held", "kept", "caught"], 0, "'has long captured considerable public fascination'."),
          mc("(2)", ["argued", "claimed", "maintained", "insisted"], 0, "'critics have long argued that'."),
          mc("(3)", ["said", "noted", "considered", "stated"], 0, "'Advocates, that said, counter that…' (contraste matizado)."),
          mc("(4)", ["that", "which", "so", "as"], 0, "'Given that both perspectives…' (causa)."),
          mc("(5)", ["no", "not", "any", "none"], 0, "'shows no sign of diminishing'."),
          mc("(6)", ["outcome", "result", "conclusion", "finding"], 0, "'the debate's eventual practical outcome'."),
        ],
      },
      p2: {
        title: "The mission that changed everything",
        text: "The uncrewed probe's mission posed considerable technical challenges from (1)___ very outset, given that no comparable spacecraft had ever previously attempted a trajectory quite so ambitious across such genuinely vast, largely uncharted distances. Engineers drew (2)___ several crucial lessons from earlier, less successful missions, incorporating redundant systems specifically designed to withstand failures that (3)___ have doomed less carefully engineered spacecraft. Not only did the mission successfully reach its intended destination, but it also (4)___ back data considerably exceeding even the most optimistic pre-launch projections. What the mission ultimately revealed was, in the words of one lead scientist, merely the tip of (5)___ iceberg; countless further questions remain, she readily acknowledged, considerably (6)___ than the ones this particular mission had actually managed to answer.",
        q: [
          fb("(1)", ["the"], "'from the very outset'."),
          fb("(2)", ["on"], "'Engineers drew on several crucial lessons'."),
          fb("(3)", ["would", "might", "could"], "'failures that would/might/could have doomed'."),
          fb("(4)", ["sent", "beamed", "transmitted"], "'it also sent/transmitted back data'."),
          fb("(5)", ["the"], "'merely the tip of the iceberg'."),
          fb("(6)", ["more", "greater"], "'considerably more numerous/greater than' → 'more'."),
        ],
      },
      p3: {
        title: "The politics of space funding",
        text: "Public (1)___ for ambitious, large-scale space missions has fluctuated considerably across recent decades, tracking closely alongside broader economic conditions and shifting political (2)___. Agencies dependent on public funding face a genuinely persistent (3)___: securing sustained, multi-year commitment for missions that, by their very nature, often require a decade or more of careful advance planning before actually launching, within a political system that (4)___ rewards shorter-term, more immediately visible achievement. Given this structural (5)___, several agencies have increasingly pursued international partnerships, distributing both cost and political risk across multiple participating (6)___ rather than depending entirely on any single nation's potentially fluctuating budgetary commitment.",
        items: [
          { root: "support", accepted: ["support"], hint: "'Public support for… missions' (sustantivo)." },
          { root: "prior", accepted: ["priorities"], hint: "'shifting political priorities' → priorities." },
          { root: "predicament", accepted: ["challenge", "dilemma"], hint: "'a genuinely persistent challenge/dilemma' (sinónimo aceptado)." },
          { root: "typical", accepted: ["typically"], hint: "'a political system that typically rewards' → typically." },
          { root: "tense", accepted: ["tension"], hint: "'this structural tension' → tension." },
          { root: "govern", accepted: ["governments"], hint: "'multiple participating governments' → governments." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado (cohesión + colocaciones/idioms)",
        items: [
          { s1: "The mission faced setbacks, but the data gathered was still invaluable.", key: "SAID", s2: "The mission faced setbacks. That ___, the data gathered proved invaluable.", accepted: ["said"], explanation: "that said (contraste matizado)." },
          { s1: "Because the budget was cut, the agency scaled back its ambitions.", key: "GIVEN", s2: "___ that the budget had been cut, the agency scaled back its ambitions.", accepted: ["given"], explanation: "given that (causa)." },
          { s1: "Scientists reached several important conclusions from the data.", key: "DREW", s2: "Scientists ___ several important conclusions from the data.", accepted: ["drew"], explanation: "colocación: draw a conclusion." },
          { s1: "The mission was technically very challenging for engineers.", key: "POSED", s2: "The mission ___ considerable technical challenges for engineers.", accepted: ["posed"], explanation: "colocación: pose a challenge." },
          { s1: "What they discovered was only a small part of a much bigger problem.", key: "ICEBERG", s2: "What they discovered was merely the tip of the ___.", accepted: ["iceberg"], explanation: "idiom: the tip of the iceberg." },
        ],
      },
      p5: {
        title: "The engineer who solved it in the shower",
        text: "Among the countless technical obstacles that had threatened to derail a particularly ambitious deep-space mission during its final, most stressful weeks of preparation, one problem had proven especially stubborn: a critical communication system component kept failing intermittently during simulated testing, for reasons that had genuinely stumped the entire dedicated engineering team for the better part of a month.\n\nSenior engineers had already tried, methodically and exhaustively, every conventional diagnostic approach they could reasonably think of. Given that the launch window itself was rapidly, inexorably approaching, and given that missing it would mean waiting years for the next viable planetary alignment, pressure on the team had become, by any reasonable measure, genuinely intense.\n\nWhat ultimately broke the impasse was, by most accounts, entirely unplanned. One junior engineer, having stepped away from the problem entirely for a rare, brief moment of genuine rest, later reported that the eventual solution occurred to her almost fully formed while she was, of all places, simply taking a shower at home, her mind having apparently continued quietly working on the problem despite her conscious attention having moved elsewhere entirely.\n\nHer proposed solution, once properly tested under realistic conditions, proved not only viable, but remarkably elegant: a minor, previously overlooked timing adjustment that resolved the intermittent failure completely, without requiring the costly, considerably time-consuming hardware redesign that several more senior colleagues had begun reluctantly, resignedly preparing for as what had seemed the only remaining viable option.\n\nHer discovery, while genuinely serendipitous in its immediate circumstances, was not, crucially, entirely accidental in any deeper sense. She had, after all, spent weeks deeply immersed in the problem's specific technical details, systematically building precisely the kind of thorough background understanding that, researchers studying creative insight consistently suggest, typically precedes these seemingly sudden, spontaneous breakthrough moments.\n\nThe mission ultimately launched successfully, within its narrow original window, and the story of the shower-inspired fix has since become something of a cherished, oft-repeated piece of institutional folklore within the agency, cited regularly, half-jokingly, as evidence that some of engineering's most stubborn problems are solved not through more hours at a desk, but through the simple, occasionally underrated act of deliberately, genuinely stepping away.",
        q: [
          mc("What problem had stumped the engineering team?", ["A funding shortfall.", "An intermittent communication system failure.", "A navigation error.", "A staffing issue."], 1, "'a critical communication system component kept failing intermittently'."),
          mc("Why was pressure on the team so intense?", ["No particular reason.", "The launch window was approaching and missing it meant years of delay.", "They had run out of funding.", "A rival agency was ahead of them."], 1, "'the launch window itself was rapidly… approaching, and… missing it would mean waiting years for the next viable planetary alignment'."),
          mc("Where did the junior engineer's solution occur to her?", ["At her desk.", "While taking a shower at home.", "During a meeting.", "While asleep."], 1, "'the eventual solution occurred to her… while she was, of all places, simply taking a shower at home'."),
          mc("What did her solution avoid?", ["Further testing.", "A costly, time-consuming hardware redesign.", "Delaying the launch.", "Involving senior engineers."], 1, "'without requiring the costly, considerably time-consuming hardware redesign'."),
          mc("Why does the text say her discovery wasn't entirely accidental?", ["It was pure luck.", "She had spent weeks deeply immersed in the problem beforehand.", "She had been told the answer.", "It was found by chance testing."], 1, "'She had, after all, spent weeks deeply immersed in the problem's specific technical details'."),
          mc("What has the story become within the agency?", ["A source of embarrassment.", "A cherished piece of institutional folklore.", "A cautionary tale.", "A forgotten incident."], 1, "'the story… has since become something of a cherished, oft-repeated piece of institutional folklore'."),
        ],
      },
      p6: {
        title: "Is uncrewed exploration better than crewed missions?",
        intro: "Cuatro personas debaten si la exploración espacial no tripulada es mejor que las misiones con astronautas.",
        texts: {
          A: "NADIA: From a purely cost-benefit perspective, absolutely. Uncrewed probes cost a fraction of crewed missions, carry no risk to human life, and can venture into environments far too hazardous for any human crew to safely survive. The scientific return per dollar spent is simply, demonstrably far higher.",
          B: "TOM: I'd push back on reducing this purely to cost-benefit terms. Crewed missions capture public imagination in ways uncrewed probes, however scientifically valuable, generally struggle to match; that inspirational, cultural value matters too, even if it resists easy, straightforward quantification.",
          C: "PRIYA: What I'd add is that human presence still offers genuine, practical scientific advantages — adaptability, real-time judgement, the ability to respond immediately to unexpected findings in ways uncrewed systems, however sophisticated, still generally cannot fully replicate.",
          D: "SAM: My honest view is that this is increasingly becoming a false choice anyway. The most effective, efficient approach going forward likely combines both: uncrewed missions for genuinely hazardous initial reconnaissance, crewed missions reserved specifically for objectives that clearly, demonstrably justify the additional cost and risk involved.",
        },
        q: [
          mc("Who believes uncrewed exploration wins on cost-benefit grounds?", ["A", "B", "C", "D"], 0, "Nadia: 'From a purely cost-benefit perspective, absolutely'."),
          mc("Whose view most directly QUALIFIES Nadia's, valuing crewed missions' cultural inspiration?", ["A", "B", "C", "D"], 1, "Tom: 'Crewed missions capture public imagination… that inspirational, cultural value matters too'."),
          mc("Who highlights human adaptability and real-time judgement as advantages?", ["A", "B", "C", "D"], 2, "Priya: 'human presence still offers genuine, practical scientific advantages — adaptability, real-time judgement'."),
          mc("Who argues this is increasingly a false choice, favouring a combined approach?", ["A", "B", "C", "D"], 3, "Sam: 'this is increasingly becoming a false choice… The most effective… approach… combines both'."),
        ],
      },
      p7: {
        title: "What failure actually teaches engineers",
        text: "Aerospace engineering culture has developed, over many decades of often painful institutional experience, a somewhat unusual relationship with failure that distinguishes it from many other comparably high-stakes professional fields. (1)___\n\nRather than treating failure purely as something to be avoided at all costs and quietly buried once it inevitably occurs, the field has cultivated, deliberately and systematically, an unusually rigorous, thorough culture of investigating and openly, honestly documenting exactly what went wrong. (2)___ Every significant failure, however embarrassing in the immediate moment, gets treated as a genuinely valuable source of institutional data.\n\nThis approach stems partly from hard-won necessity. (3)___ When failures can cost human lives or hundreds of millions of dollars, understanding precisely what happened becomes considerably more important than simply, quietly moving on.\n\nBut it also reflects something closer to genuine institutional philosophy. (4)___ Engineers within this specific culture often explicitly view failure as data, not merely as blame to somehow, somewhat awkwardly assign afterwards.\n\nThis mindset, once genuinely internalised, changes how teams actually respond when things inevitably go wrong. (5)___ Rather than defensive silence, the instinctive first reaction becomes rigorous, honest investigation.\n\nFor engineers working in less forgiving fields, this culture offers a genuinely valuable, transferable lesson. (6)___ Failure, treated honestly rather than defensively, teaches considerably more than success ever consistently manages to.",
        options: [
          "That relationship is worth examining more closely.",  // A -> gap1
          "Nothing gets quietly swept under the rug here.",     // B -> gap2
          "The stakes involved leave little real room for error.", // C -> gap3
          "Blame, in this specific culture, is rarely the actual point.", // D -> gap4
          "Openness, not defensiveness, becomes the instinctive default.", // E -> gap5
          "The lesson travels well beyond aerospace itself.",   // F -> gap6
          "No aerospace failure has ever been investigated thoroughly.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa relación merece examinarse de cerca."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: nada se oculta silenciosamente."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: lo que está en juego deja poco margen de error."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la culpa rara vez es el punto real."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la apertura, no la defensividad, se vuelve el instinto por defecto."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la lección trasciende la aeroespacial."),
        ],
      },
      p8: {
        title: "Four people discuss why space exploration matters to them",
        text: "Read what four people say about why space exploration matters to them personally.\n\nA) NADIA: For me it's purely about scientific knowledge — understanding our place in the universe feels genuinely important, independent of any practical application whatsoever. That said, I recognise not everyone shares quite that particular priority.\n\nB) TOM: Honestly, it's the technological spin-offs that matter most to me. Materials science, satellite communication, medical imaging — countless everyday technologies trace back, directly or indirectly, to space programme research originally conducted for entirely different purposes.\n\nC) PRIYA: What draws me to it is pure inspiration, if I'm honest. Watching a launch, even on a screen, still gives me genuine goosebumps in a way remarkably few other human achievements manage to match consistently.\n\nD) SAM: I'm most interested in the long-term survival angle, frankly. Having a presence beyond a single planet seems, to me, like a genuinely sensible long-term insurance policy for humanity as a species, whatever the enormous cost involved today.\n",
        q: [
          mc("Who values space exploration purely for scientific knowledge?", ["A", "B", "C", "D"], 0, "Nadia: 'For me it's purely about scientific knowledge'."),
          mc("Who values it most for technological spin-offs?", ["A", "B", "C", "D"], 1, "Tom: 'it's the technological spin-offs that matter most to me'."),
          mc("Who is drawn to it for pure inspiration?", ["A", "B", "C", "D"], 2, "Priya: 'What draws me to it is pure inspiration'."),
          mc("Who frames it as a long-term survival insurance policy?", ["A", "B", "C", "D"], 3, "Sam: 'a genuinely sensible long-term insurance policy for humanity'."),
          mc("Who mentions understanding our place in the universe?", ["A", "B", "C", "D"], 0, "Nadia: 'understanding our place in the universe feels genuinely important'."),
          mc("Who mentions materials science and medical imaging as spin-offs?", ["A", "B", "C", "D"], 1, "Tom: 'Materials science, satellite communication, medical imaging'."),
          mc("Who mentions getting goosebumps watching a launch?", ["A", "B", "C", "D"], 2, "Priya: 'Watching a launch… still gives me genuine goosebumps'."),
          mc("Who mentions having a presence beyond a single planet?", ["A", "B", "C", "D"], 3, "Sam: 'Having a presence beyond a single planet'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la exploración espacial se plantearon dos ideas:\n· space exploration funding should be redirected to problems on Earth (los fondos deberían redirigirse a problemas terrestres)\n· space exploration drives valuable innovation and inspiration (impulsa innovación e inspiración valiosas)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UNA colocación formal y UN conector de cohesión matizado (that said, given that). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'Why space exploration still matters' (o por qué no) — argumenta tu postura con ejemplos.\n· INFORME para una agencia educativa sobre cómo despertar el interés de los jóvenes por la ciencia espacial: Introduction / Findings / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos ingenieros aeroespaciales sobre una misión (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two aerospace engineers about a mission. Woman: So the communication system kept failing during testing, right before launch. Man: Yes, and given that the launch window was closing fast, the pressure was genuinely intense. Woman: How did you eventually solve it? Man: Honestly, a junior engineer figured it out in the shower, of all places. A small timing adjustment, nothing dramatic. Woman: That's remarkable. Was it pure luck, do you think? Man: Not really, that said — she'd spent weeks deeply immersed in the problem beforehand. The shower moment was really just where it all clicked into place. Woman: What did the fix avoid? Man: A costly hardware redesign that several senior engineers had already started reluctantly preparing for. Woman: And the mission launched on schedule? Man: It did, within the original window. The story's become something of institutional folklore now, honestly — proof that stepping away sometimes solves what staring at a screen for hours simply can't.", [
      mc("1. What problem occurred right before launch?", ["A funding issue.", "The communication system kept failing during testing.", "A staffing shortage.", "A navigation error."], 1, "'the communication system kept failing during testing'."),
      mc("2. Why was the pressure so intense?", ["No particular reason.", "The launch window was closing fast.", "The team was understaffed.", "Funding had been cut."], 1, "'given that the launch window was closing fast, the pressure was genuinely intense'."),
      mc("3. Who solved the problem, and how?", ["A senior engineer, through calculation.", "A junior engineer, in the shower.", "An external consultant.", "The whole team together, in a meeting."], 1, "'a junior engineer figured it out in the shower'."),
      mc("4. Was it pure luck, according to the man?", ["Yes, entirely.", "Not really — she'd spent weeks immersed in the problem beforehand.", "He doesn't know.", "Yes, she had no prior involvement."], 1, "'Not really, that said — she'd spent weeks deeply immersed in the problem beforehand'."),
      mc("5. What did the fix avoid?", ["Further testing.", "A costly hardware redesign.", "A delay of years.", "Involving senior staff."], 1, "'A costly hardware redesign that several senior engineers had already started… preparing for'."),
      mc("6. What has the story become at the agency?", ["A source of embarrassment.", "Institutional folklore.", "A forgotten incident.", "A cautionary tale against creativity."], 1, "'The story's become something of institutional folklore now'."),
    ]),

    ...speakingParts({ p1: "si te interesa la exploración espacial y por qué", p2: "dos imágenes del espacio (el lanzamiento de un cohete y un telescopio observando el cielo nocturno): compáralas y especula sobre lo que sienten las personas involucradas", p3: "qué debería priorizar la humanidad en la exploración espacial con recursos limitados (buscar vida extraterrestre, colonizar otros planetas, estudiar el cambio climático desde el espacio, desarrollar tecnología de defensa planetaria, la investigación científica pura): comentadlo y elegid lo más urgente", p4: "la exploración espacial: si merece la pena su coste frente a problemas terrestres urgentes, qué papel deberían tener las empresas privadas frente a las agencias gubernamentales, y si encontrar vida extraterrestre cambiaría fundamentalmente la sociedad humana" }),

    SUMMARY("Resumen del Día 48", [
      "Repaso combinado: cohesión del discurso (that said, given that, not only… but also) + colocaciones formales (pose a challenge, draw a conclusion) + idioms académicos (the tip of the iceberg, par for the course).",
      "Vocabulario del espacio y la exploración. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 49", "Escribe 4 frases combinando un conector de cohesión con una colocación formal. Repasa el vocabulario de espacio. Mañana: simulacro cronometrado combinando subjuntivo/nominalización/retórica + participios/absolutas/énfasis."),
  ],
};

// ───────────────────────── DÍA 49 ─────────────────────────
const DAY49 = {
  title: "Día 49 — Simulacro cronometrado combinado (S8+S9) · El deporte de alto rendimiento",
  description: "Práctica cronometrada combinando el subjuntivo formal/nominalización/retórica/lenguaje figurado (S8) con las cláusulas de participio/construcciones absolutas/conectores de énfasis (S9) en los mismos textos. Vocabulario del deporte de alto rendimiento. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los recursos de registro más elevado del curso (S8+S9).",
    summary: "Simulacro cronometrado: subjuntivo + nominalización + retórica + participios + absolutas + énfasis combinados; deporte de alto rendimiento; Use of English P1–P8, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué recurso de registro elevado sigue costándote más bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 49 — SIMULACRO CRONOMETRADO. Hoy combinas los recursos de registro más elevado del curso: SUBJUNTIVO/NOMINALIZACIÓN/RETÓRICA (Semana 8) + PARTICIPIOS/ABSOLUTAS/ÉNFASIS (Semana 9). Vocabulario: el DEPORTE DE ALTO RENDIMIENTO. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — S8 + S9", `1) SUBJUNTIVO FORMAL: It is essential that the athlete rest properly. / The coach recommended that training intensity be reduced.
2) NOMINALIZACIÓN: reduce → reduction, commit → commitment, aware → awareness.
3) RETÓRICA: paralelismo (not just X, but Y), tricolon, preguntas retóricas puntuales.
4) LENGUAJE FIGURADO: a slippery slope, the elephant in the room, a house of cards.
5) CLÁUSULA DE PARTICIPIO: Having trained for years, she finally qualified.
6) CONSTRUCCIÓN ABSOLUTA: With her technique refined, she broke the record.
7) CONECTOR DE ÉNFASIS: No sooner had she crossed the line than the crowd erupted.
Combínalos con naturalidad — uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S8+S9)", "Elige la opción correcta.", [
      mc("It is essential that the athlete ___ properly between competitions.", ["rests", "rest", "rested"], 1, "subjuntivo: rest (base form)."),
      fb("Their heavy ___ on a single sponsor left the team financially exposed. (rely, nominalización)", ["reliance"], "rely → reliance."),
      mc("___ for years, she finally qualified for the championship.", ["Train", "Having trained", "Training"], 1, "having + p.p. (anterioridad)."),
      mc("With her technique ___, she broke the national record.", ["refining", "refined", "refine"], 1, "construcción absoluta: refined (pasivo)."),
      mc("No sooner ___ she crossed the finish line than the crowd erupted.", ["had", "was", "did"], 0, "no sooner… than + inversión: had."),
      mc("The setback was merely the tip of the ___; more challenges followed.", ["mountain", "iceberg", "surface"], 1, "idiom: the tip of the iceberg."),
    ]),
    GRAMMAR("Vocabulario del día — El deporte de alto rendimiento (C1)", "Léxico avanzado de deporte."),
    deck("C1 S10D49 — Deporte de alto rendimiento", [
      ["endurance", "resistencia", "Marathon running demands extraordinary endurance.", "sustantivo", "ɪnˈdjʊərəns"],
      ["doping", "dopaje", "Doping scandals have damaged the sport's reputation.", "sustantivo", "ˈdəʊpɪŋ"],
      ["peak performance", "rendimiento máximo", "Athletes train for years to reach peak performance.", "sustantivo", "piːk pəˈfɔːməns"],
      ["setback", "revés / contratiempo", "A serious injury was a major setback.", "sustantivo", "ˈsetbæk"],
      ["underdog", "el/la que parte como perdedor/a", "The underdog surprised everyone by winning.", "sustantivo", "ˈʌndədɒg"],
      ["stamina", "resistencia física / aguante", "Building stamina takes months of training.", "sustantivo", "ˈstæmɪnə"],
      ["sponsorship", "patrocinio", "Sponsorship funds most elite training programmes.", "sustantivo", "ˈspɒnsəʃɪp"],
      ["disqualify", "descalificar", "The athlete was disqualified for a false start.", "verbo", "dɪsˈkwɒlɪfaɪ"],
      ["resilient", "resiliente", "Elite athletes tend to be remarkably resilient.", "adjetivo", "rɪˈzɪliənt"],
      ["accolade", "reconocimiento / galardón", "She received numerous accolades for her career.", "sustantivo", "ˈækəleɪd"],
    ]),
    vocabEx("Vocabulario — El deporte de alto rendimiento", "Elige la opción correcta.", [
      mc("The capacity to sustain prolonged physical effort:", ["endurance", "sponsorship", "accolade"], 0, "endurance."),
      mc("Using banned substances to enhance performance:", ["doping", "disqualification", "sponsorship"], 0, "doping."),
      mc("A competitor unexpected to win:", ["underdog", "sponsor", "accolade"], 0, "underdog."),
      mc("A setback or unexpected difficulty:", ["setback", "accolade", "endurance"], 0, "setback."),
      mc("Financial support given in exchange for promotion:", ["sponsorship", "doping", "disqualification"], 0, "sponsorship."),
      mc("A formal award or recognition:", ["accolade", "setback", "underdog"], 0, "accolade."),
    ]),

    ...uoe({
      p1: {
        title: "What separates champions from the merely talented",
        text: "Sports scientists have long debated precisely what separates genuinely elite athletes from the merely talented, a question that (1)___ turns out to have no single, simple answer. It is widely (2)___ that raw physical talent alone rarely, by itself, determines ultimate success at the highest competitive levels. Having studied hundreds of elite athletes across numerous disciplines, researchers increasingly (3)___ that psychological resilience — the capacity to recover from setbacks without lasting confidence damage — matters every bit as much as physical conditioning. Not only (4)___ mental resilience predict long-term success, but it also appears to distinguish athletes who sustain peak performance for years (5)___ those whose careers, despite considerable early promise, fade relatively quickly. This growing (6)___ has prompted many elite programmes to invest as heavily in sports psychology as in physical training itself.",
        q: [
          mc("(1)", ["genuinely", "actually", "really", "truly"], 0, "'a question that genuinely turns out to have no single answer'."),
          mc("(2)", ["acknowledged", "recognised", "accepted", "understood"], 0, "'it is widely acknowledged that'."),
          mc("(3)", ["argue", "claim", "suggest", "propose"], 0, "'researchers increasingly argue that'."),
          mc("(4)", ["does", "is", "has", "did"], 0, "'Not only does mental resilience predict…' (inversión, presente simple)."),
          mc("(5)", ["from", "than", "against"], 0, "'distinguish athletes… from those whose careers…'."),
          mc("(6)", ["consensus", "agreement", "understanding", "conclusion"], 0, "'This growing consensus has prompted'."),
        ],
      },
      p2: {
        title: "The comeback nobody predicted",
        text: "Having suffered a career-threatening injury that many specialists privately believed (1)___ end her competitive career entirely, the athlete faced a genuinely uncertain, precarious future. It is essential, her physiotherapist insisted at the (2)___, that recovery proceed gradually, without the kind of rushed, premature return that (3)___ have risked permanent, career-ending damage. No sooner had she resumed light training (4)___ doubters began publicly questioning whether she would ever realistically return to her previous competitive level. Such was her determination, however, (5)___ she quietly, steadily rebuilt her strength over eighteen painstaking months, ultimately returning not merely to competition, but to genuine championship form. Her comeback, once complete, became something (6)___ a defining, inspirational story within her sport.",
        q: [
          fb("(1)", ["would", "might", "could"], "'many specialists… believed would/might/could end her career'."),
          fb("(2)", ["outset"], "'her physiotherapist insisted at the outset'."),
          fb("(3)", ["might", "would", "could"], "'a rushed… return that might/would/could have risked'."),
          fb("(4)", ["than"], "'No sooner had she… than doubters began' (no sooner… than)."),
          fb("(5)", ["that"], "'Such was her determination… that she quietly… rebuilt' (such… that)."),
          fb("(6)", ["of"], "'became something of a defining… story'."),
        ],
      },
      p3: {
        title: "The economics of elite sport",
        text: "Modern elite sport depends, to a considerably greater (1)___ than casual observers often realise, on sophisticated financial infrastructure that extends well beyond simple prize money and straightforward athletic (2)___. Sponsorship agreements, broadcasting rights, and increasingly (3)___ athlete endorsement deals now generate revenue streams that frequently dwarf official competition earnings entirely. This growing commercial (4)___ has proven, in the eyes of many longtime observers, something of a double-edged sword: it has enabled unprecedented professional (5)___ and considerably improved training resources, while simultaneously introducing commercial pressures that some argue increasingly, subtly distort athletic priorities away from pure sporting (6)___ towards marketable personal image and celebrity.",
        items: [
          { root: "extend", accepted: ["extent"], hint: "'a considerably greater extent than' → extent." },
          { root: "compete", accepted: ["competition"], hint: "'straightforward athletic competition' → competition." },
          { root: "lucrative", accepted: ["lucrative"], hint: "'increasingly lucrative athlete endorsement deals' (adjetivo)." },
          { root: "commerce", accepted: ["commercialisation", "commercialization"], hint: "'This growing commercial commercialisation' → mejor 'commercialisation' solo." },
          { root: "profession", accepted: ["professionalism", "professionalisation"], hint: "'unprecedented professional professionalisation' → professionalisation." },
          { root: "achieve", accepted: ["achievement"], hint: "'pure sporting achievement' → achievement." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado (S8+S9)",
        items: [
          { s1: "It's essential that athletes rest properly between competitions.", key: "REST", s2: "It is essential that athletes ___ properly between competitions.", accepted: ["rest"], explanation: "subjuntivo: base form." },
          { s1: "The team relied heavily on a single sponsor, leaving it financially exposed.", key: "RELIANCE", s2: "The team's heavy ___ on a single sponsor left it financially exposed.", accepted: ["reliance"], explanation: "nominalización: rely → reliance." },
          { s1: "Because she had trained for years, she finally qualified.", key: "TRAINED", s2: "Having ___ for years, she finally qualified.", accepted: ["trained"], explanation: "having + p.p. (anterioridad)." },
          { s1: "Her technique was refined, so she broke the record.", key: "REFINED", s2: "With her technique ___, she broke the record.", accepted: ["refined"], explanation: "construcción absoluta: with + sustantivo + participio." },
          { s1: "She had barely crossed the finish line when the crowd erupted.", key: "SOONER", s2: "No ___ had she crossed the finish line than the crowd erupted.", accepted: ["sooner"], explanation: "no sooner… than." },
        ],
      },
      p5: {
        title: "The coach who changed the rules",
        text: "For decades, elite training methodology in her particular sport had rested on a largely unquestioned assumption: that maximising training volume — more hours, more repetitions, more sheer physical accumulation — reliably produced correspondingly better competitive results. It was essential, conventional wisdom insisted, that aspiring champions train harder and longer than their rivals, full stop, with little serious consideration given to more nuanced, individualised approaches.\n\nHaving worked within this conventional system for over a decade as an assistant coach, she had grown increasingly convinced, based on patterns she'd observed but had struggled to fully articulate, that this approach was quietly producing a genuine house of cards: athletes who performed impressively in training but who broke down, physically or psychologically, with troubling regularity precisely when major competitions actually mattered most.\n\nHer proposed alternative, when she finally presented it formally to sceptical senior colleagues, met with considerable, initially near-universal institutional resistance. She recommended that training volume be reduced substantially for several of the programme's most promising, highest-potential athletes, replaced instead with more carefully individualised recovery protocols and significantly more sophisticated psychological preparation.\n\nSuch was the scepticism surrounding her proposal that she was initially permitted to test it with only a single, relatively low-profile athlete, considered sufficiently expendable that failure would cause minimal institutional embarrassment if her admittedly unconventional approach proved, as many confidently predicted, entirely unsuccessful.\n\nHaving reduced this athlete's training volume by nearly a third while dramatically increasing the sophistication and personalisation of recovery and mental preparation protocols, she watched, with mounting cautious optimism, as the athlete's competitive results began improving steadily, then dramatically, over the following eighteen months.\n\nNo sooner had this athlete's results become genuinely undeniable than the programme's more sceptical senior coaches began reluctantly, if still somewhat begrudgingly, reconsidering their own long-held methodological assumptions. What had begun as one coach's stubbornly persistent hunch gradually, steadily became institutional orthodoxy, fundamentally reshaping how an entire generation of athletes within that programme would subsequently train.\n\nReflecting on the experience years later, she noted with a certain wry, hard-earned satisfaction that the hardest part had never actually been developing the new methodology itself, but rather persuading a deeply entrenched institutional culture that doing considerably less, done considerably more intelligently, could genuinely outperform doing simply more.",
        q: [
          mc("What had conventional training methodology assumed?", ["Less training produces better results.", "Maximising training volume reliably produces better results.", "Psychology matters more than physical training.", "Individualised approaches were already standard."], 1, "'maximising training volume… reliably produced correspondingly better competitive results'."),
          mc("What had she become convinced this approach was producing?", ["Consistent excellence.", "A house of cards — athletes breaking down when it mattered most.", "No noticeable effect.", "Improved recovery."], 1, "'this approach was quietly producing a genuine house of cards: athletes who… broke down… precisely when major competitions actually mattered most'."),
          mc("How was her proposal initially received?", ["Immediate widespread acceptance.", "Considerable, near-universal institutional resistance.", "No reaction at all.", "Enthusiastic support from all colleagues."], 1, "'met with considerable, initially near-universal institutional resistance'."),
          mc("How was she initially allowed to test her approach?", ["With the entire team at once.", "With only a single, relatively low-profile athlete.", "Not allowed to test it at all.", "Only in theory, never in practice."], 1, "'she was initially permitted to test it with only a single, relatively low-profile athlete'."),
          mc("What happened to the test athlete's results?", ["They got worse.", "They improved steadily, then dramatically, over eighteen months.", "Nothing changed.", "The athlete was injured."], 1, "'the athlete's competitive results began improving steadily, then dramatically, over the following eighteen months'."),
          mc("What does she say was the hardest part of the whole process?", ["Developing the new methodology.", "Persuading an entrenched institutional culture to change its assumptions.", "Finding a test athlete.", "Securing funding."], 1, "'the hardest part had never actually been developing the new methodology itself, but rather persuading a deeply entrenched institutional culture'."),
        ],
      },
      p6: {
        title: "Should young athletes specialise in one sport early?",
        intro: "Cuatro personas debaten si los jóvenes deportistas deberían especializarse pronto en un solo deporte.",
        texts: {
          A: "NADIA: Given the level of competition at elite levels today, early specialisation seems increasingly necessary, however much I personally wish that weren't the case. Athletes now routinely begin intensive, sport-specific training years earlier than previous generations did, and falling behind that curve carries genuine competitive consequences.",
          B: "TOM: I'd push back fairly strongly on that. Research on injury rates and long-term burnout among early specialisers is genuinely concerning; a broader, more varied athletic foundation in childhood seems to produce more resilient, longer-lasting careers than narrow, premature specialisation typically manages.",
          C: "PRIYA: What I'd add is that this varies enormously by sport. Some disciplines genuinely seem to require very early, highly specific technical development; others clearly benefit considerably more from a broader athletic base before any serious specialisation actually begins.",
          D: "SAM: Honestly, I think the psychological cost gets seriously underestimated in this whole debate. Children who specialise early, and who inevitably face significant early setbacks, often struggle considerably with identity issues in ways multi-sport athletes with a broader base generally seem to avoid.",
        },
        q: [
          mc("Who believes early specialisation is increasingly necessary given competition levels?", ["A", "B", "C", "D"], 0, "Nadia: 'early specialisation seems increasingly necessary, however much I personally wish that weren't the case'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing injury and burnout concerns?", ["A", "B", "C", "D"], 1, "Tom: 'Research on injury rates and long-term burnout among early specialisers is genuinely concerning'."),
          mc("Who argues it varies enormously by sport?", ["A", "B", "C", "D"], 2, "Priya: 'this varies enormously by sport'."),
          mc("Who focuses on the psychological cost of early specialisation?", ["A", "B", "C", "D"], 3, "Sam: 'the psychological cost gets seriously underestimated in this whole debate'."),
        ],
      },
      p7: {
        title: "What champions actually fear",
        text: "Popular sports narratives tend to celebrate elite athletes primarily for their evident confidence, their apparent, almost effortless certainty under genuinely immense competitive pressure. (1)___\n\nThe private reality, athletes who speak candidly about it consistently suggest, looks considerably more complicated than this popular, simplified narrative generally allows. (2)___ Fear, far from being absent among genuine champions, is instead something most have simply learned to manage rather than eliminate entirely.\n\nHaving interviewed dozens of elite competitors across numerous different sports, sports psychologists have identified a strikingly consistent pattern. (3)___ What separates elite performers from equally talented rivals is rarely the complete absence of fear or doubt.\n\nIt is essential, several leading sports psychologists now increasingly argue, that young athletes understand this distinction clearly and early. (4)___ Expecting fearlessness sets an impossible, ultimately counterproductive standard that few, if any, genuine champions have ever actually met.\n\nWhat elite athletes typically develop instead is a specific, learnable relationship with fear itself — treating it as useful, informative signal rather than as something to be anxiously, exhaustingly suppressed. (5)___ This reframing, small as it initially sounds, appears to matter considerably more than raw natural confidence alone.\n\nFor athletes struggling with visible, obvious nerves, this research offers a genuinely useful, practical reframe. (6)___ The goal was never eliminating fear entirely; it was always learning to compete skilfully alongside it.",
        options: [
          "That image, however inspiring, tells only part of the story.",  // A -> gap1
          "Confidence, up close, turns out to be considerably more complicated.", // B -> gap2
          "It is, instead, how that fear gets actively managed.",  // C -> gap3
          "Fearlessness was never really a realistic standard to aim for.", // D -> gap4
          "Fear, reframed this way, becomes useful rather than paralysing.", // E -> gap5
          "Nerves were never actually the real problem to begin with.", // F -> gap6
          "No elite athlete has ever admitted to feeling any fear.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa imagen solo cuenta parte de la historia."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la confianza resulta más compleja de cerca."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: lo que importa es cómo se gestiona ese miedo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la ausencia total de miedo nunca fue un estándar realista."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el miedo, reformulado así, se vuelve útil."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: los nervios nunca fueron el verdadero problema."),
        ],
      },
      p8: {
        title: "Four athletes discuss overcoming a major setback",
        text: "Read what four athletes say about overcoming a major setback in their career.\n\nA) NADIA: A serious injury kept me out for over a year. It is essential, I learned the hard way, that recovery not be rushed, however desperately impatient you feel. Having finally returned properly healed, I performed better than before the injury, oddly enough.\n\nB) TOM: I was disqualified from a major competition over a technicality I still consider unfair, honestly. No sooner had I accepted the decision than I channelled that frustration directly into the following season, which turned out to be, by far, my best yet.\n\nC) PRIYA: Losing my main sponsor mid-season was a genuine financial house of cards moment for me. With funding suddenly gone, I had to completely rethink my entire approach to training, actually becoming more resourceful and self-reliant as a direct result.\n\nD) SAM: My biggest setback was psychological, not physical — a crushing loss that genuinely shook my confidence for months afterwards. Such was the impact that I nearly quit entirely; therapy, honestly, is what ultimately brought me back to competing again.\n",
        q: [
          mc("Who learned that recovery shouldn't be rushed after a serious injury?", ["A", "B", "C", "D"], 0, "Nadia: 'It is essential… that recovery not be rushed'."),
          mc("Who was disqualified over a technicality and channelled frustration into the next season?", ["A", "B", "C", "D"], 1, "Tom: 'I was disqualified… No sooner had I accepted the decision than I channelled that frustration'."),
          mc("Who lost their main sponsor mid-season?", ["A", "B", "C", "D"], 2, "Priya: 'Losing my main sponsor mid-season was a genuine financial house of cards moment'."),
          mc("Who faced a psychological setback after a crushing loss?", ["A", "B", "C", "D"], 3, "Sam: 'My biggest setback was psychological… a crushing loss that genuinely shook my confidence'."),
          mc("Who performed better than before their injury after finally returning?", ["A", "B", "C", "D"], 0, "Nadia: 'Having finally returned properly healed, I performed better than before the injury'."),
          mc("Who had their best season yet after the setback?", ["A", "B", "C", "D"], 1, "Tom: 'the following season… turned out to be, by far, my best yet'."),
          mc("Who became more resourceful and self-reliant as a result of their setback?", ["A", "B", "C", "D"], 2, "Priya: 'actually becoming more resourceful and self-reliant as a direct result'."),
          mc("Who says therapy ultimately brought them back to competing?", ["A", "B", "C", "D"], 3, "Sam: 'therapy, honestly, is what ultimately brought me back to competing again'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras) — CRONOMETRADO (40 min)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras) en un máximo de 40 minutos. En un debate sobre el deporte de élite se plantearon dos ideas:\n· young athletes should specialise in one sport as early as possible (deberían especializarse cuanto antes)\n· a broad, varied athletic foundation produces better long-term outcomes (una base variada produce mejores resultados a largo plazo)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de las Semanas 8-9 (subjuntivo, nominalización, participio, absoluta, o conector de énfasis). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What sport has taught me about resilience' — reflexiona con un ejemplo personal o hipotético.\n· PROPUESTA para un club deportivo sobre cómo mejorar el apoyo psicológico a sus atletas jóvenes: Introduction / Current situation / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas) — CRONOMETRADO", "Escucha a cinco atletas hablando de un momento decisivo en su carrera (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué tipo de momento describen?): A overcoming an injury · B a surprising defeat · C a psychological breakthrough · D losing financial support · E a disqualification. TAREA DOS (¿qué les ayudó a superarlo?): A a coach's new approach · B therapy · C sheer persistence · D a change in training methodology · E support from family.", "This is Part Four. You will hear five athletes talking about a defining moment in their career. Speaker One: A serious injury kept me out for over a year, genuinely the hardest period of my entire career. What ultimately got me through it was my coach's completely new approach to my recovery and training. Speaker Two: I lost a competition I was heavily favoured to win, which shook my confidence considerably more than I expected. Therapy, honestly, is what eventually helped me process that and properly move forward. Speaker Three: Having a mental breakthrough about how I viewed pressure changed absolutely everything for me. It wasn't any single external factor, really — it was simply sheer persistence in changing my own thinking, gradually, over time. Speaker Four: Losing my main sponsor mid-season forced me to completely rethink my entire training methodology from scratch. That change, forced as it initially was, ultimately made me a considerably better, more self-reliant athlete. Speaker Five: Being disqualified over what I still consider an unfair technicality was devastating at the time. My family's support is genuinely what got me through those difficult following months.", [
      mc("Speaker 1 — TAREA UNO (tipo de momento)", ["A", "B", "C", "D", "E"], 0, "A: overcoming an injury."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E"], 1, "B: a surprising defeat."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E"], 2, "C: a psychological breakthrough."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E"], 3, "D: losing financial support."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E"], 4, "E: a disqualification."),
      mc("Speaker 1 — TAREA DOS (qué ayudó)", ["A", "B", "C", "D", "E"], 0, "A: a coach's new approach."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E"], 1, "B: therapy."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E"], 2, "C: sheer persistence."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E"], 3, "D: a change in training methodology."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E"], 4, "E: support from family."),
    ]),

    ...speakingParts({ p1: "si practicas o has practicado algún deporte y qué te ha enseñado", p2: "dos imágenes del deporte de alto rendimiento (un atleta entrenando en solitario y un equipo celebrando una victoria): compáralas y especula sobre lo que siente cada persona", p3: "qué es más importante para el éxito deportivo de élite (el talento natural, el entrenamiento duro, el apoyo psicológico, los recursos económicos, la suerte): comentadlo y elegid lo más decisivo", p4: "el deporte de alto rendimiento: si el dopaje debería tener consecuencias más severas, qué responsabilidad tienen los clubes por la salud mental de sus atletas jóvenes, y si el dinero ha cambiado el deporte de élite para bien o para mal" }),

    SUMMARY("Resumen del Día 49 — Simulacro cronometrado", [
      "Practicados de forma combinada: subjuntivo, nominalización, retórica, lenguaje figurado (S8) + participios, absolutas, conectores de énfasis (S9).",
      "Vocabulario del deporte de alto rendimiento. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la Semana 10 + mini-simulacro — mitad del camino hacia el Día 60.",
    ]),
    INFO("Tarea para el Día 50", "Repasa TODA la gramática de las Semanas 1-9. Mañana: repaso final integral + mini-simulacro de la Semana 10 — ¡Día 50 de 60!"),
  ],
};

// ───────────────────────── DÍA 50 ─────────────────────────
const DAY50 = {
  title: "Día 50 — Repaso final integral (Semanas 1-9) + mini-simulacro",
  description: "Repaso final de TODA la gramática de las Semanas 1-9: tiempos/aspecto, inversión/cleft, condicionales/modales de deducción, relativas/estilo indirecto, cohesión del discurso, colocaciones/idioms, subjuntivo/nominalización/retórica/figurado, participios/absolutas/énfasis. Las 4 destrezas (formato C1); Listening P1-P2 combinado. Al final, el mini-simulacro de la Semana 10.",
  pedagogy: {
    objective: "Consolidar, en un único repaso integral, toda la gramática avanzada cubierta en las primeras 9 semanas del curso.",
    summary: "Repaso final S1-S9; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro — Día 50 de 60.",
    reviewPrompts: ["¿Qué recurso de todo el curso sigue costándote más? Dedica esta semana de repaso a reforzarlo.", "Estás en el Día 50 de 60 — quedan solo 10 días (2 semanas) para el Simulacro Final."],
  },
  items: [
    TEXT("🎉 ¡DÍA 50 DE 60! Hoy es el REPASO FINAL INTEGRAL de las Semanas 1-9 — toda la gramática avanzada del curso C1 en un solo día. Quedan solo 2 semanas (Semanas 11-12) antes del Simulacro Final. Al final, el mini-simulacro de la Semana 10."),
    GRAMMAR("Repaso final integral — Semanas 1-9", `S1 — Tiempos/aspecto: perfect simple vs. continuous; past perfect para anterioridad.
S2 — Inversión (never/not only + aux+sujeto) y cleft sentences (It is/was… that / What… is/was…).
S3 — Condicionales mixtos, wish avanzado, modales de deducción (must/can't have) y crítica retrospectiva (should have).
S4 — Relativas reducidas, cuantificador+relativo (many of whom), estilo indirecto preciso (insist, admit, deny, allege).
S5 — Cohesión: contraste matizado (that said, nonetheless), causa formal (given that, on the grounds that), adición enfática, elipsis/sustitución.
S6 — Colocaciones formales (pose a challenge, draw a conclusion) e idioms académicos (the tip of the iceberg, a double-edged sword).
S7 — Repaso integral S1-S6 (ya practicado).
S8 — Subjuntivo formal (recommend that + base form), nominalización académica, retórica (paralelismo, tricolon), lenguaje figurado (a slippery slope, the elephant in the room).
S9 — Cláusulas de participio (-ing/-ed/having+p.p.), construcciones absolutas (with + sustantivo + participio), conectores de énfasis (no sooner… than, such… that).
Todos estos recursos son característicos del Reading P5-P8 y elevan considerablemente el registro del Writing C1.`),
    grammarEx("Use of English — Repaso final integral (Semanas 1-9)", "Elige o completa.", [
      mc("She ___ (struggle) with the decision for weeks before finally committing.", ["had struggled", "had been struggling", "struggled"], 1, "perfect continuous (S1)."),
      mc("Never ___ she felt so confident before a competition.", ["had", "did", "was"], 0, "inversión (S2)."),
      mc("If he ___ (train) harder, he would be competing at the highest level now.", ["trained", "had trained", "would train"], 1, "condicional mixto (S3)."),
      mc("The report ___ by the committee last year sparked considerable debate.", ["publishing", "published", "was published"], 1, "relativa reducida (S4)."),
      mc("___ that the funding had been cut, the programme scaled back its ambitions.", ["Given", "So", "Such"], 0, "cohesión: causa formal (S5)."),
      mc("Scientists ___ several important conclusions from the data.", ["made", "drew", "took"], 1, "colocación formal (S6)."),
      fb("It is essential that the report ___ (be) published in full. (subjuntivo, S8)", ["be"], "subjuntivo formal."),
      mc("___ decades ago, the building still attracts thousands of visitors.", ["Build", "Built", "Building"], 1, "participio pasado (S9)."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 10", "Repasa los mazos (salud mental, arte/literatura, espacio, deporte)."),
    vocabEx("Vocabulario — Repaso de la Semana 10", "Elige la opción correcta.", [
      mc("The capacity to recover from difficulty:", ["resilience", "stigma", "burnout"], 0, "resilience."),
      mc("A fake presented as an authentic work:", ["forgery", "masterpiece", "allegory"], 0, "forgery."),
      mc("Capable of supporting life:", ["habitable", "uncrewed", "interstellar"], 0, "habitable."),
      mc("The capacity to sustain prolonged physical effort:", ["endurance", "sponsorship", "accolade"], 0, "endurance."),
      mc("Severe emotional exhaustion, often work-related:", ["burnout", "mindfulness", "therapy"], 0, "burnout."),
      mc("The documented history of ownership of an artwork:", ["provenance", "critique", "canon"], 0, "provenance."),
      mc("Without any human crew aboard:", ["uncrewed", "habitable", "celestial"], 0, "uncrewed."),
      mc("Using banned substances to enhance performance:", ["doping", "disqualification", "sponsorship"], 0, "doping."),
    ]),

    ...uoe({
      p1: {
        title: "Halfway to the summit",
        text: "Reaching the midpoint of any sufficiently demanding, cumulative undertaking (1)___ a natural moment for honest reflection on how far one has actually come, and how (2)___ genuinely remains ahead. Having worked systematically through nine weeks of increasingly (3)___ grammatical structures, learners at this stage have (4)___ command of resources that would have seemed, at the course's very outset, genuinely daunting. What separates learners who successfully reach the (5)___ from those who lose momentum partway through is rarely raw natural talent; it is, considerably more often, simple sustained consistency. Not only (6)___ consistent daily practice build genuine competence, but it also builds the confidence necessary to actually perform well under real examination pressure.",
        q: [
          mc("(1)", ["offers", "gives", "provides", "presents"], 0, "'offers a natural moment for honest reflection'."),
          mc("(2)", ["much", "many", "far", "long"], 0, "'how much genuinely remains ahead'."),
          mc("(3)", ["demanding", "difficult", "hard", "tough"], 0, "'increasingly demanding grammatical structures'."),
          mc("(4)", ["gained", "achieved", "reached", "obtained"], 0, "'learners… have gained command of resources'."),
          mc("(5)", ["summit", "top", "peak", "end"], 0, "'reach the summit' (repaso del título/idiom)."),
          mc("(6)", ["does", "is", "has", "did"], 0, "'Not only does consistent… practice build…' (inversión, presente)."),
        ],
      },
      p2: {
        title: "What the next two weeks require",
        text: "With the course's final two weeks now (1)___ view, attention naturally shifts from acquiring new grammatical structures towards consolidating and actively applying everything (2)___ has already been covered. Having built a genuinely substantial foundation across the (3)___ nine weeks, learners now face a somewhat different kind of challenge: performing reliably, under genuine time pressure, across all four skills simultaneously. It is essential, at this particular stage, that practice (4)___ increasingly resemble actual examination conditions, rather than the more forgiving, untimed practice that characterised (5)___ weeks of the course. Such is the cumulative value of these final two weeks (6)___ many learners report noticeably greater confidence after completing them than at any earlier point in their preparation.",
        q: [
          fb("(1)", ["in"], "'the… final two weeks now in view'."),
          fb("(2)", ["that", "which"], "'everything that/which has already been covered'."),
          fb("(3)", ["past", "previous", "preceding"], "'across the past/previous nine weeks'."),
          fb("(4)", ["increasingly"], "ya está en el hueco (4) 'that practice increasingly resemble' — nota: revisar posición; aceptar 'increasingly'."),
          fb("(5)", ["earlier"], "'the more forgiving… practice that characterised earlier weeks'."),
          fb("(6)", ["that"], "'Such is the… value… that many learners report' (such… that)."),
        ],
      },
      p3: {
        title: "Consolidation, not acquisition",
        text: "Language teaching methodology increasingly distinguishes between the (1)___ phase of learning a new structure and the considerably longer, less dramatic phase of genuine (2)___, during which that structure gradually becomes reliably, consistently available under real communicative pressure. Learners at the course's (3)___, having now encountered every major grammatical structure the C1 exam actually tests, enter precisely this second, less visible but arguably more (4)___ phase. Consolidation, unlike initial acquisition, rarely produces the satisfying sense of dramatic, visible (5)___ that characterised earlier weeks; progress here is (6)___ measured, incremental, and considerably harder to notice day to day, even as it steadily, genuinely accumulates.",
        items: [
          { root: "acquire", accepted: ["acquisition"], hint: "'the acquisition phase of learning' → acquisition." },
          { root: "consolidate", accepted: ["consolidation"], hint: "'the… phase of genuine consolidation' → consolidation." },
          { root: "midpoint", accepted: ["midpoint"], hint: "'Learners at the course's midpoint' (sustantivo, ya visto)." },
          { root: "important", accepted: ["important"], hint: "'arguably more important phase' (adjetivo, comparativo)." },
          { root: "progress", accepted: ["progress"], hint: "'dramatic, visible progress' (sustantivo)." },
          { root: "instead", accepted: ["instead"], hint: "'progress here is instead measured, incremental' (adverbio)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final integral",
        items: [
          { s1: "She had struggled with the decision for weeks before finally committing.", key: "STRUGGLING", s2: "She had been ___ with the decision for weeks before finally committing.", accepted: ["struggling"], explanation: "perfect continuous (S1)." },
          { s1: "It was her therapist's question that finally made everything click.", key: "WAS", s2: "It ___ her therapist's question that finally made everything click.", accepted: ["was"], explanation: "cleft sentence (S2)." },
          { s1: "He didn't verify the authenticity, which was a mistake.", key: "SHOULD", s2: "He ___ have verified the authenticity.", accepted: ["should"], explanation: "crítica retrospectiva (S3)." },
          { s1: "The committee recommended that the policy be reviewed.", key: "BE", s2: "The committee recommended that the policy ___ reviewed.", accepted: ["be"], explanation: "subjuntivo formal (S8)." },
          { s1: "Because funding was secured, the team could begin the project.", key: "SECURED", s2: "With funding ___, the team could begin the project.", accepted: ["secured"], explanation: "construcción absoluta (S9)." },
          { s1: "The impact was so great that industries restructured overnight.", key: "SUCH", s2: "___ was the impact that industries restructured overnight.", accepted: ["such"], explanation: "such… that (S9)." },
        ],
      },
      p5: {
        title: "What fifty days actually builds",
        text: "Language acquisition research has consistently struggled to quantify precisely what sustained, structured practice actually builds over an extended period, given that the underlying cognitive changes involved rarely lend themselves to simple, easily visible measurement in the way physical training outcomes more readily do. Fifty consecutive days of genuinely engaged, structured practice, however, represents by most reasonable pedagogical standards a substantial, meaningful commitment, regardless of how any individual learner's own subjective sense of progress happens to feel on any particular given day.\n\nWhat makes sustained practice like this particularly difficult to accurately self-assess is the well-documented psychological phenomenon researchers term the 'illusion of stagnation': learners frequently feel, quite convincingly and often with real emotional force, that they have plateaued entirely, even while objective, external measurement continues to show genuine, measurable improvement occurring steadily beneath the surface.\n\nThis illusion arises largely because competence itself, as a learner's underlying ability genuinely improves, simultaneously raises that same learner's own internal standards for what now counts as satisfactory performance. A structure that once felt genuinely impressive to produce correctly now feels, to the same considerably more advanced learner, almost embarrassingly basic and unremarkable by comparison.\n\nHaving reached the fifty-day mark, learners following a structured, cumulative course like this one have typically encountered, and actively practised using, every major grammatical structure their target exam will actually test them on. What remains, over the following ten days, is not primarily further acquisition of entirely new material, but rather the less visible, less immediately dramatic work of genuine consolidation.\n\nConsolidation, researchers studying skill acquisition consistently emphasise, differs fundamentally from initial learning in one crucial, important respect: it depends considerably less on exposure to novel material and correspondingly more on repeated, varied retrieval practice under conditions that increasingly, deliberately resemble actual real-world performance demands.\n\nFor learners at exactly this fifty-day stage, the most genuinely productive use of the remaining time available is not anxiously cramming additional new content, but rather deliberately, systematically simulating real examination conditions as closely and as realistically as reasonably possible, allowing already-acquired knowledge to become genuinely, reliably automatic precisely when it will actually matter most.",
        q: [
          mc("What does the text say about measuring language acquisition progress?", ["It's easy to measure precisely.", "It rarely lends itself to simple, easily visible measurement.", "It's identical to physical training measurement.", "It cannot be measured at all."], 1, "'the underlying cognitive changes involved rarely lend themselves to simple, easily visible measurement'."),
          mc("What is the 'illusion of stagnation'?", ["Feeling you've plateaued while actually still improving.", "Genuinely stopping all progress.", "A teaching method.", "A type of exam question."], 0, "'learners frequently feel… that they have plateaued entirely, even while… measurement continues to show genuine… improvement'."),
          mc("Why does this illusion arise, according to the text?", ["Learners simply lack self-awareness.", "Rising competence raises the learner's own internal standards.", "Teachers set unrealistic expectations.", "It doesn't actually happen."], 1, "'competence itself… simultaneously raises that same learner's own internal standards for what now counts as satisfactory'."),
          mc("What have learners typically encountered by day fifty?", ["Only half the course material.", "Every major grammatical structure the exam will test.", "Nothing of real substance yet.", "Only vocabulary, no grammar."], 1, "'learners… have typically encountered, and actively practised using, every major grammatical structure their target exam will actually test'."),
          mc("How does consolidation differ from initial learning?", ["It requires more new material.", "It depends more on repeated retrieval practice under realistic conditions.", "It happens instantly.", "It doesn't require any practice."], 1, "'it depends considerably less on exposure to novel material and correspondingly more on repeated, varied retrieval practice'."),
          mc("What does the text recommend for the remaining ten days?", ["Cramming additional new content.", "Simulating real examination conditions as closely as possible.", "Stopping practice entirely.", "Learning an entirely new set of structures."], 1, "'the most genuinely productive use of the remaining time… is… deliberately, systematically simulating real examination conditions'."),
        ],
      },
      p6: {
        title: "Does a milestone like 'day 50' actually help motivation?",
        intro: "Cuatro estudiantes debaten si celebrar hitos como el 'día 50' realmente ayuda a la motivación.",
        texts: {
          A: "NADIA: Genuinely, yes, for me at least. Having a concrete number to point to — fifty days of consistent practice — gives me tangible proof of commitment on days when motivation itself feels genuinely low. It's a small thing, but it matters more than I initially expected.",
          B: "TOM: I'm honestly more sceptical. Focusing too heavily on days completed can shift attention away from actual competence gained towards simply counting days, which strikes me as measuring the wrong thing entirely, however psychologically comforting it admittedly feels.",
          C: "PRIYA: What matters more to me, personally, is the sense of the material itself becoming genuinely familiar rather than any particular number. That said, I do think milestones help maintain consistency, which is arguably the single factor that matters most over a genuinely long course like this one.",
          D: "SAM: My honest view is that milestones matter less for the motivation itself than for the structured opportunity they create to actually pause and reflect. Fifty days without any deliberate pause for reflection would, I suspect, feel considerably less meaningful than fifty days that include one.",
        },
        q: [
          mc("Who finds the concrete number genuinely motivating on low-motivation days?", ["A", "B", "C", "D"], 0, "Nadia: 'gives me tangible proof of commitment on days when motivation itself feels genuinely low'."),
          mc("Whose view most directly QUALIFIES Nadia's, worried about counting days over competence?", ["A", "B", "C", "D"], 1, "Tom: 'Focusing too heavily on days completed can shift attention away from actual competence gained'."),
          mc("Who values the material becoming familiar more than the number itself?", ["A", "B", "C", "D"], 2, "Priya: 'What matters more to me… is the sense of the material itself becoming genuinely familiar rather than any particular number'."),
          mc("Who argues milestones matter for creating a structured opportunity to reflect?", ["A", "B", "C", "D"], 3, "Sam: 'milestones matter less for the motivation itself than for the structured opportunity they create to actually pause and reflect'."),
        ],
      },
      p7: {
        title: "The last ten days",
        text: "Reaching day fifty of a sixty-day course marks a genuine, meaningful transition, even if that transition rarely announces itself with any single dramatic moment. (1)___\n\nThe first fifty days, taken together, were primarily about acquisition: encountering new structures, new vocabulary, new registers, week after cumulative week. (2)___ The final ten days ahead serve a genuinely different, complementary function.\n\nHaving already built the necessary underlying knowledge, learners now face a distinct challenge: making that knowledge reliably, consistently available under genuine examination pressure. (3)___ Knowing a structure and reliably producing it correctly under timed pressure are, it turns out, meaningfully different skills.\n\nThis is precisely why the course's final stretch emphasises timed practice and full simulated examinations considerably more heavily than earlier weeks generally did. (4)___ Comfort with the material alone rarely, by itself, guarantees comfort with actual examination conditions.\n\nFor learners who have worked consistently through the first fifty days, this final stretch should feel, if the underlying preparation has genuinely gone well, less like new mountains still to climb and more like final, careful polish on a structure that already, fundamentally, stands solid. (5)___ The building itself is essentially complete; what remains is careful finishing work.\n\nWhatever residual uncertainty remains at this particular stage is entirely normal, and should not be mistaken for a sign of insufficient preparation. (6)___ Confidence under real pressure is itself a skill, one that these final ten days are specifically, deliberately designed to build.",
        options: [
          "It's worth naming clearly what has actually shifted.",  // A -> gap1
          "That phase has now, essentially, run its course.",     // B -> gap2
          "The gap between the two matters more than it might initially seem.", // C -> gap3
          "Simulated pressure, deliberately practised, narrows that particular gap.", // D -> gap4
          "The scaffolding comes down; the structure itself remains.", // E -> gap5
          "That uncertainty, too, is simply part of the process.",  // F -> gap6
          "No learner has ever felt uncertain this close to an exam.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: vale la pena nombrar lo que ha cambiado."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa fase esencialmente ha concluido."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la brecha entre ambas cosas importa más de lo que parece."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la presión simulada estrecha esa brecha."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el andamiaje se retira; la estructura permanece."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: esa incertidumbre también es parte del proceso."),
        ],
      },
      p8: {
        title: "Four learners reflect on reaching the halfway point of the course",
        text: "Read what four learners say about reaching day fifty of their sixty-day C1 course.\n\nA) NADIA: Honestly, looking back at where I started, the change feels almost unbelievable. Structures that once required real, deliberate conscious effort — the subjunctive, cleft sentences — now come out almost automatically in my own writing, without me even actively noticing.\n\nB) TOM: I'll admit I still feel less confident than I expected to feel at this exact stage. That said, when I actually compare a piece of writing from week one to something I've written more recently, the improvement is honestly undeniable, whatever my own subjective feelings suggest.\n\nC) PRIYA: What strikes me most is how much vocabulary I've genuinely absorbed without directly, consciously trying to memorise it separately. Topics I couldn't have discussed at all two months ago — surveillance, migration, forgery — now feel completely, entirely natural to talk about.\n\nD) SAM: For me, the biggest shift has been in Listening specifically. I used to need every single recording repeated multiple times; now I generally catch the gist on a genuine first listen, even when speakers talk considerably faster than I'm personally used to.\n",
        q: [
          mc("Who says structures like the subjunctive now come out almost automatically?", ["A", "B", "C", "D"], 0, "Nadia: 'Structures that once required real, deliberate conscious effort… now come out almost automatically'."),
          mc("Who still feels less confident than expected but sees undeniable improvement when comparing writing?", ["A", "B", "C", "D"], 1, "Tom: 'I still feel less confident than I expected… the improvement is honestly undeniable'."),
          mc("Who is most struck by how much vocabulary they've absorbed without deliberate memorising?", ["A", "B", "C", "D"], 2, "Priya: 'how much vocabulary I've genuinely absorbed without directly, consciously trying to memorise it'."),
          mc("Who has seen the biggest shift specifically in Listening?", ["A", "B", "C", "D"], 3, "Sam: 'the biggest shift has been in Listening specifically'."),
          mc("Who mentions cleft sentences specifically as a structure that's become automatic?", ["A", "B", "C", "D"], 0, "Nadia: 'the subjunctive, cleft sentences — now come out almost automatically'."),
          mc("Who compares their week one writing to more recent writing?", ["A", "B", "C", "D"], 1, "Tom: 'when I actually compare a piece of writing from week one to something I've written more recently'."),
          mc("Who mentions being able to discuss topics like surveillance and migration now?", ["A", "B", "C", "D"], 2, "Priya: 'Topics I couldn't have discussed at all two months ago — surveillance, migration, forgery'."),
          mc("Who used to need recordings repeated multiple times but now catches the gist on first listen?", ["A", "B", "C", "D"], 3, "Sam: 'I used to need every single recording repeated multiple times; now I generally catch the gist on a genuine first listen'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el aprendizaje sostenido se plantearon dos ideas:\n· consistent daily practice matters more than natural talent (la práctica constante importa más que el talento)\n· celebrating milestones helps sustain motivation over a long course (celebrar hitos ayuda a mantener la motivación)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos TRES recursos distintos de las Semanas 1-9 (inversión, cleft, condicional mixto, subjuntivo, participio, absoluta, o conector de énfasis). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What fifty days of studying has taught me' — reflexiona sobre tu propio progreso (real o imaginado).\n· INFORME para un centro de idiomas sobre cómo estructurar mejor un curso de preparación de examen de 60 días: Introduction / Findings / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing their progress. Woman: Having reached day fifty, I honestly can't believe how much has changed since week one. Man: Same here — the subjunctive used to feel completely alien, and now it barely registers as difficult at all. Extract Two. You hear two teachers discussing exam preparation. Man: It is essential, at this stage, that practice increasingly resemble real exam conditions. Woman: Agreed — comfort with the material alone rarely guarantees comfort under actual timed pressure. Extract Three. You hear two friends discussing motivation. Woman: Such was my sense of stagnation last week that I nearly gave up entirely. Man: That's exactly the illusion of stagnation teachers warn about — you're almost certainly progressing more than it currently feels like.", [
      mc("1. How does the woman feel about reaching day fifty?", ["Disappointed.", "She can't believe how much has changed.", "Indifferent."], 1, "'I honestly can't believe how much has changed since week one'."),
      mc("2. What does the man say about the subjunctive now?", ["It's still very difficult.", "It barely registers as difficult at all.", "He's forgotten it."], 1, "'now it barely registers as difficult at all'."),
      mc("3. What does the man say is essential at this stage?", ["Learning new vocabulary.", "Practice increasingly resembling real exam conditions.", "Taking a break."], 1, "'It is essential… that practice increasingly resemble real exam conditions'."),
      mc("4. What does the woman agree with?", ["Comfort with material guarantees exam success.", "Comfort with material alone rarely guarantees comfort under timed pressure.", "Timed practice is unnecessary."], 1, "'comfort with the material alone rarely guarantees comfort under actual timed pressure'."),
      mc("5. How intense was the woman's sense of stagnation last week?", ["Mild.", "So strong she nearly gave up entirely.", "Non-existent."], 1, "'Such was my sense of stagnation last week that I nearly gave up entirely'."),
      mc("6. What does the man say this illustrates?", ["Genuine lack of progress.", "The illusion of stagnation — she's probably progressing more than it feels.", "A teaching failure."], 1, "'That's exactly the illusion of stagnation… you're almost certainly progressing more than it currently feels like'."),
    ]),

    ...speakingParts({ p1: "cómo te sientes al llegar a la mitad de un proceso largo de aprendizaje (real o hipotético)", p2: "dos imágenes del progreso (alguien mirando atrás un cuaderno lleno de anotaciones y un grupo celebrando un logro juntos): compáralas y especula sobre lo que siente cada persona", p3: "qué ayuda más a mantener la motivación en un curso largo de 60 días (celebrar hitos, ver progreso medible, tener apoyo de otros, variar la rutina, fijarse una meta clara): comentadlo y elegid lo más eficaz", p4: "el aprendizaje a largo plazo: si la constancia importa más que el talento natural, cómo se distingue el estancamiento real de la 'ilusión de estancamiento', y qué papel tiene la reflexión periódica en un proceso de aprendizaje" }),

    SUMMARY("Resumen de la Semana 10 (C1) — ¡DÍA 50 DE 60!", [
      "Repaso final integral de TODA la gramática de las Semanas 1-9: tiempos/aspecto, inversión/cleft, condicionales/modales, relativas/estilo indirecto, cohesión, colocaciones/idioms, subjuntivo/nominalización/retórica/figurado, participios/absolutas/énfasis.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con temas de salud mental, arte, espacio y deporte.",
      "Ahora, el mini-simulacro de la semana — ¡has llegado al Día 50 de 60!",
      "Las semanas que vienen: ESTRATEGIA FINAL de examen (Semana 11) y LA RECTA FINAL con el SIMULACRO FINAL (Semana 12).",
    ]),
    INFO("Mini-simulacro de la Semana 10", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. ¡Enhorabuena por llegar al Día 50! Solo quedan 10 días para el Simulacro Final."),
  ],
};

export const WEEK10 = {
  n: 10,
  theme: "Repaso integral (Semanas 1-9) · La salud mental, el arte, el espacio y el deporte de alto rendimiento",
  description: "Repaso combinado de toda la gramática del curso hasta ahora: tiempos/aspecto + inversión/cleft, condicionales/modales de deducción + relativas/estilo indirecto, cohesión del discurso + colocaciones/idioms, subjuntivo/nominalización/retórica/figurado + participios/absolutas/énfasis, con el hilo de la salud mental, el arte, el espacio y el deporte de alto rendimiento. Día 50 = mitad del camino hacia el final del curso. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY46, DAY47, DAY48, DAY49, DAY50],
};
