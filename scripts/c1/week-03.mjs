/**
 * C1 Advanced · Semana 3 — "Los condicionales avanzados y lo hipotético · La ciencia y la ética".
 * Gramática: condicionales mixtos y alternativas a IF (unless/providing/should
 * invertido), wish/if only avanzados, estructuras hipotéticas con would rather/
 * it's time/as if, y los modales de especulación y deducción a nivel C1, con el
 * hilo temático de la ciencia, la tecnología, la genética y la ética.
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

// ───────────────────────── DÍA 11 ─────────────────────────
const DAY11 = {
  title: "Día 11 — Condicionales mixtos y alternativas a IF · La ciencia y la ética",
  description: "Condicionales mixtos (combinaciones de tiempo entre cláusulas); alternativas a if (unless, providing/provided, as long as, should + inversión, otherwise, but for). Vocabulario de ciencia y ética. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Combinar tiempos en condicionales mixtos y usar alternativas formales a 'if'.",
    summary: "Condicionales mixtos; alternativas a if; ciencia y ética; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["no combinar correctamente pasado/presente en el condicional mixto.", "usar 'if' con should sin invertir en registro formal.", "confundir 'unless' con 'if not' en contextos donde no son intercambiables."],
    reviewPrompts: ["¿Cómo combinas 'If she had studied medicine' con un resultado PRESENTE?", "¿Cómo reformulas 'If you should have any doubts' con inversión formal?"],
  },
  items: [
    TEXT("👋 Semana 3 del C1. Hoy los CONDICIONALES MIXTOS y las ALTERNATIVAS A IF: la hipótesis más sofisticada del inglés. Vocabulario: la CIENCIA y la ÉTICA."),
    GRAMMAR("Condicionales mixtos y alternativas a IF", `CONDICIONALES MIXTOS: combinan una cláusula de un tiempo con un resultado de otro, cuando la lógica temporal lo exige.
· Pasado (condición) → Presente (resultado): If she HAD STUDIED genetics, she WOULD BE a researcher now. (una decisión pasada afecta al presente)
· Presente/general (condición) → Pasado (resultado): If he WEREN'T so cautious, he WOULD HAVE PUBLISHED the data already. (un rasgo permanente explica una acción pasada)
ALTERNATIVAS A IF (registro formal/C1):
· UNLESS (= if… not, para condiciones): Unless we act now, the damage will be irreversible.
· PROVIDING/PROVIDED (THAT), AS LONG AS (condición necesaria): We'll proceed, provided (that) the ethics board approves.
· SHOULD + inversión (condición improbable, formal): Should any doubts arise, contact the committee. (= If any doubts should arise…)
· SUPPOSING / WHAT IF (hipótesis, más coloquial-formal): Supposing the trial failed, what would we do?
· OTHERWISE / OR (ELSE) (consecuencia implícita): We must fund the research; otherwise, we risk falling behind.
· BUT FOR + sustantivo (= if it weren't/hadn't been for): But for her discovery, the treatment wouldn't exist.
⚠️ 'Unless' NO equivale siempre a 'if not': funciona mejor con condiciones, no con consejos/deseos.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ If she would have studied → ✅ If she had studied (nunca 'would' en la cláusula if).\n· ❌ Unless you don't hurry → ✅ Unless you hurry (unless ya es negativo, no dupliques).\n· 'Should' + inversión formal: Should you need help → (no 'If you should need').\n· Condicional mixto: revisa SIEMPRE si el tiempo de la condición y el del resultado son coherentes lógicamente."),
    grammarEx("Use of English — Condicionales mixtos y alternativas a if", "Elige o completa.", [
      mc("If she ___ genetics, she would be a leading researcher now.", ["studied", "had studied", "would study"], 1, "pasado (condición) → presente (resultado): had studied."),
      mc("___ any doubts arise, please contact the ethics committee.", ["Should", "If", "Unless"], 0, "should + inversión (formal)."),
      fb("We'll proceed with the trial, ___ (provide) the results remain positive.", ["providing", "provided"], "providing/provided (that)."),
      mc("___ her discovery, the treatment simply wouldn't exist today.", ["But for", "Unless", "Provided"], 0, "but for + sustantivo."),
      mc("If he weren't so meticulous, he ___ the error already.", ["wouldn't have missed", "wouldn't miss", "hadn't missed"], 0, "rasgo presente → resultado pasado."),
      fb("We must publish the data soon; ___ , a rival team will beat us to it.", ["otherwise"], "otherwise (consecuencia implícita)."),
      mc("___ the experiment fails, what's our backup plan?", ["Supposing", "Unless", "Should"], 0, "supposing (hipótesis)."),
    ]),
    GRAMMAR("Vocabulario del día — La ciencia y la ética (C1)", "Léxico avanzado de ciencia y ética."),
    deck("C1 S3D11 — Ciencia y ética", [
      ["breakthrough", "avance decisivo", "A genuine scientific breakthrough.", "sustantivo", "ˈbreɪkθruː"],
      ["ethical dilemma", "dilema ético", "The research poses an ethical dilemma.", "sustantivo", "ˈeθɪkl dɪˈlemə"],
      ["unintended consequences", "consecuencias no deseadas", "Beware of unintended consequences.", "sustantivo", "ˌʌnɪnˈtendɪd ˈkɒnsɪkwənsɪz"],
      ["regulate", "regular (con normas)", "Governments struggle to regulate AI.", "verbo", "ˈreɡjʊleɪt"],
      ["controversial", "polémico/a", "Gene editing remains controversial.", "adjetivo", "ˌkɒntrəˈvɜːʃl"],
      ["safeguard", "salvaguardar / garantía", "Strict safeguards were put in place.", "verbo/sustantivo", "ˈseɪfɡɑːd"],
      ["precedent", "precedente", "The case set a legal precedent.", "sustantivo", "ˈpresɪdənt"],
      ["moral compass", "brújula moral", "Scientists need a strong moral compass.", "expresión", "ˈmɒrəl ˈkʌmpəs"],
      ["irreversible", "irreversible", "Some changes are irreversible.", "adjetivo", "ˌɪrɪˈvɜːsəbl"],
      ["playing god", "jugar a ser Dios", "Critics accuse scientists of playing god.", "expresión", "ˈpleɪɪŋ ɡɒd"],
    ]),
    vocabEx("Vocabulario — La ciencia y la ética", "Elige la opción correcta.", [
      mc("A situation with no easy or clearly right choice is an ethical ___.", ["dilemma", "precedent", "breakthrough"], 0, "dilemma."),
      mc("Effects that were not planned or foreseen are ___ consequences.", ["unintended", "irreversible", "controversial"], 0, "unintended."),
      mc("To control something through official rules is to ___ it.", ["regulate", "safeguard", "reverse"], 0, "regulate."),
      mc("Causing strong disagreement is being ___.", ["controversial", "irreversible", "regulated"], 0, "controversial."),
      mc("A previous case used to justify a later decision is a ___.", ["precedent", "safeguard", "dilemma"], 0, "precedent."),
      mc("Impossible to undo is ___.", ["irreversible", "controversial", "regulated"], 0, "irreversible."),
    ]),

    ...uoe({
      p1: {
        title: "The scientist's burden",
        text: "Every major scientific breakthrough arrives carrying, alongside its evident promise, an equally weighty (1)___ of responsibility. The physicists who first unlocked the secrets of the atom did not merely advance human knowledge; they also, whether they fully (2)___ it at the time or not, opened the door to weapons of unprecedented destructive power. Were scientists to refuse, on principle, any research with conceivable harmful applications, (3)___, progress in medicine, energy and countless other fields would grind to a virtual halt, since almost any powerful discovery can, in principle, be turned to harmful ends by those determined to misuse it. The dilemma, then, is not whether to pursue (4)___ knowledge — which seems both impossible to prevent and, on balance, clearly desirable — but how to ensure that adequate safeguards accompany it every step of the way. This requires scientists to think (5)___ merely as technicians solving narrow technical puzzles, and to accept a genuine share of responsibility for how their discoveries are eventually applied, deployed and potentially misused by others. It is a demanding, uncomfortable burden, and one that (6)___ scientists have always been eager to embrace, preferring instead to leave such thorny ethical questions to philosophers, politicians or society at large. But knowledge, once discovered, cannot easily be un-discovered; and a scientific community that abdicates all responsibility for the (7)___ of its work does so at everybody's (8)___, including, ultimately, its own.",
        q: [
          mc("(1)", ["burden", "weight", "load", "duty"], 0, "'an equally weighty burden of responsibility'."),
          mc("(2)", ["realised", "understood", "grasped", "recognised"], 0, "'whether they fully realised it'."),
          mc("(3)", ["arguably", "presumably", "supposedly", "reportedly"], 0, "'arguably, progress… would grind to a halt'."),
          mc("(4)", ["powerful", "strong", "forceful", "mighty"], 0, "'to pursue powerful knowledge'."),
          mc("(5)", ["not", "no", "never", "hardly"], 0, "'not merely as technicians'."),
          mc("(6)", ["not all", "few", "hardly any", "not every"], 0, "'one that not all scientists have always been eager'."),
          mc("(7)", ["consequences", "results", "outcomes", "effects"], 0, "'the consequences of its work'."),
          mc("(8)", ["peril", "risk", "danger", "hazard"], 0, "'at everybody's peril'."),
        ],
      },
      p2: {
        title: "The line we haven't drawn",
        text: "Modern genetic technology has advanced (1)___ such speed that our ethical and legal frameworks, developed for a slower and less capable era, are struggling badly to keep pace. It is now technically feasible, in ways that would have seemed like pure science fiction only a generation ago, to edit the genetic code of a human embryo with a (2)___ degree of precision. The scientific capability, in other words, has arrived well (3)___ any settled societal consensus about when, if ever, it should actually be used. Some applications seem relatively uncontroversial: correcting a devastating genetic disease before (4)___ can cause a lifetime of suffering strikes most people as an unambiguous good. Others venture into far murkier territory: selecting for enhanced intelligence, athletic ability or physical appearance raises the deeply uncomfortable spectre of a new, genetically engineered form of inequality, (5)___ available disproportionately to the wealthy. Where exactly the line should fall between legitimate medical treatment and troubling enhancement is a question that scientists alone cannot, and arguably should not, be left to answer on society's behalf. It requires the sustained, informed engagement of ethicists, policymakers, and, crucially, the wider public whose lives, and whose children's lives, this technology will (6)___ affect directly. The danger, (7)___ course, is that by the time society has finally worked out where it wants that line to fall, science may already (8)___ moved well past it.",
        q: [
          fb("(1)", ["at", "with"], "'advanced at/with such speed'."),
          fb("(2)", ["remarkable", "extraordinary"], "'a remarkable degree of precision'."),
          fb("(3)", ["ahead"], "'arrived well ahead of'."),
          fb("(4)", ["it"], "'before it can cause'."),
          fb("(5)", ["potentially"], "'potentially available disproportionately'."),
          fb("(6)", ["directly", "eventually"], "'will directly affect'."),
          fb("(7)", ["of"], "'the danger, of course'."),
          fb("(8)", ["have"], "'science may already have moved'."),
        ],
      },
      p3: {
        title: "The illusion of neutral technology",
        text: "It has become fashionable to insist that technology itself is neither good nor bad, merely neutral — that everything depends, in the end, on how it is (1)___. There is something to this claim, but it is, on closer examination, a considerably less reassuring truth than it first appears. Every technology, however (2)___ neutral in principle, is designed, built and deployed by people making countless small decisions, each of which subtly shapes what the technology makes easy, difficult, or effectively (3)___ altogether. A social media platform is not neutral between calm reflection and outrage if its underlying algorithm has been engineered, deliberately or not, to reward the (4)___; a facial recognition system is not neutral if it performs measurably worse on darker skin tones due to biased training data. These are not incidental accidents but the direct, (5)___ consequences of specific design choices made by specific people, choices that could plausibly have been made rather differently. The myth of neutral technology, however comforting, conveniently lets designers off the hook for these consequences, treating outcomes that were substantially (6)___ into a system as if they were simply unforeseeable and regrettable accidents nobody could reasonably have predicted. A more honest and (7)___ framing would acknowledge that every technology inevitably embeds a set of values and assumptions, whether its designers intended this consciously or not, and that scrutinising those (8)___ values is every bit as important as evaluating the technology's raw technical capabilities.",
        items: [
          { root: "use", accepted: ["used"], hint: "'how it is used' → used." },
          { root: "theory", accepted: ["theoretically"], hint: "'however theoretically neutral' → theoretically." },
          { root: "possible", accepted: ["impossible"], hint: "'or effectively impossible' → impossible." },
          { root: "sense", accepted: ["sensational"], hint: "'reward the sensational' → sensational." },
          { root: "predict", accepted: ["predictable"], hint: "'the direct, predictable consequences' → predictable." },
          { root: "build", accepted: ["built"], hint: "'substantially built into a system' → built." },
          { root: "help", accepted: ["helpful"], hint: "'a more honest and helpful framing' → helpful." },
          { root: "embed", accepted: ["embedded"], hint: "'scrutinising those embedded values' → embedded." },
        ],
      },
      p4: {
        title: "Transformaciones — condicionales avanzados",
        items: [
          { s1: "She didn't study genetics, so she isn't a researcher now.", key: "STUDIED", s2: "If she ___ genetics, she would be a researcher now.", accepted: ["had studied"], explanation: "mixto: pasado→presente." },
          { s1: "If any ethical concerns arise, contact the committee.", key: "SHOULD", s2: "___ any ethical concerns arise, contact the committee.", accepted: ["Should"], explanation: "should + inversión (formal)." },
          { s1: "We'll continue the trial only if the results stay positive.", key: "PROVIDED", s2: "We'll continue the trial ___ the results stay positive.", accepted: ["provided", "provided that"], explanation: "provided (that)." },
          { s1: "If it weren't for her discovery, the treatment wouldn't exist.", key: "BUT", s2: "___ her discovery, the treatment wouldn't exist.", accepted: ["But for"], explanation: "but for + sustantivo." },
          { s1: "We must regulate this technology, or it will be misused.", key: "OTHERWISE", s2: "We must regulate this technology; ___ , it will be misused.", accepted: ["otherwise"], explanation: "otherwise (consecuencia)." },
          { s1: "If you don't hurry, you'll miss the ethics board meeting.", key: "UNLESS", s2: "___ you hurry, you'll miss the ethics board meeting.", accepted: ["Unless"], explanation: "unless = if… not." },
        ],
      },
      p5: {
        title: "The scientist who said no",
        text: "In the early 1970s, a molecular biologist working at the very forefront of a revolutionary new technique — one that would soon allow scientists to splice genes from entirely different organisms together for the first time in human history — did something almost unheard of in the fiercely competitive world of cutting-edge scientific research. Having grasped, with growing unease, the sheer scale of what this new technique might eventually make possible, she voluntarily halted her own groundbreaking work and, remarkably, persuaded many of her closest colleagues and rivals to do likewise, at least temporarily, while the wider scientific community worked out appropriate safeguards.\n\nHer concern was not that the underlying science was inherently wrong or somehow illegitimate, but that it had, quite suddenly, dramatically outpaced society's collective capacity to think through its full implications responsibly. Genetic engineering, she recognised with unusual clarity, could in principle create entirely novel organisms whose behaviour and ecological effects nobody could confidently predict in advance. Released carelessly into the environment, such organisms might behave in wholly unexpected and potentially catastrophic ways; used irresponsibly by less scrupulous or less cautious researchers, the same techniques might create biological hazards nobody could easily contain or reverse afterwards.\n\nRather than simply proceeding regardless, trusting that safeguards would somehow catch up eventually, she took the highly unusual step of organising an international conference explicitly dedicated to establishing shared, voluntary safety guidelines before research resumed on any significant scale. Hundreds of scientists from around the world attended, debating technical safety protocols alongside broader ethical questions with an unusual seriousness and mutual respect that struck many participants, at the time, as genuinely without much historical precedent in the normally competitive world of scientific research.\n\nThe guidelines that eventually emerged from this remarkable, largely self-organised process were far from perfect, and later critics would argue, with some justice, that they were considerably too permissive in several important respects. But the underlying principle they firmly established — that scientists bear real, ongoing responsibility for anticipating the consequences of their own work, and that self-regulation, however imperfect, is meaningfully preferable to complete regulatory silence — profoundly shaped how the broader scientific community has approached emerging, potentially hazardous technologies ever since.\n\nHer decision to pause her own promising research, at real professional and financial cost to herself, has since become a celebrated touchstone in ongoing discussions of scientific responsibility. It demonstrates a genuinely rare and admirable quality: the capacity to recognise, honestly and without excessive self-justification, the limits of one's own foresight, and the humility to seek broader collective wisdom rather than confidently proceeding alone. In an era of artificial intelligence and other rapidly, almost bewilderingly advancing technologies whose eventual implications remain stubbornly unclear even to their own creators, her example arguably offers a genuinely useful model: not blanket, reflexive opposition to progress, but a thoughtful, collectively negotiated pause when the pace of discovery threatens to substantially outrun our collective wisdom about how to use it wisely.",
        q: [
          mc("What did the biologist do with her groundbreaking research?", ["Published it immediately.", "Voluntarily halted it and persuaded colleagues to do likewise.", "Kept it secret.", "Sold it."], 1, "'she voluntarily halted her own groundbreaking work and… persuaded many of her closest colleagues… to do likewise'."),
          mc("What was her core concern?", ["The science was wrong.", "Society's capacity to think through implications hadn't kept pace with the science.", "She wanted fame.", "It was too expensive."], 1, "'it had… dramatically outpaced society's collective capacity to think through its full implications'."),
          mc("What did she organise?", ["A protest.", "An international conference to establish voluntary safety guidelines.", "A lawsuit.", "A boycott."], 1, "'organising an international conference explicitly dedicated to establishing shared, voluntary safety guidelines'."),
          mc("How were the resulting guidelines later judged?", ["Perfect.", "Imperfect, and arguably too permissive in places.", "Useless.", "Too strict."], 1, "'far from perfect… considerably too permissive in several important respects'."),
          mc("What principle did the process establish?", ["Scientists have no responsibility.", "Scientists bear responsibility for anticipating consequences; self-regulation beats silence.", "Only governments should regulate.", "Science should never pause."], 1, "'scientists bear real, ongoing responsibility… self-regulation, however imperfect, is meaningfully preferable to complete regulatory silence'."),
          mc("What model does her example offer for today?", ["Oppose all progress.", "A thoughtful, collective pause when discovery outpaces collective wisdom.", "Ignore ethics.", "Work alone."], 1, "'not blanket, reflexive opposition to progress, but a thoughtful, collectively negotiated pause'."),
        ],
      },
      p6: {
        title: "Should there be limits on scientific research?",
        intro: "Cuatro personas debaten si la investigación científica debería tener límites éticos impuestos.",
        texts: {
          A: "NADIA: I'm deeply uneasy about the idea of banning entire categories of research. Throughout history, today's forbidden knowledge has repeatedly become tomorrow's essential medicine. The scientists best placed to identify genuine risks are usually the ones doing the actual research, not politicians reacting to public fear. I'd rather trust rigorous peer review and transparency than outright prohibition imposed from outside.",
          B: "TOM: I understand that instinct, but it strikes me as dangerously naive about human nature and institutional incentives. Scientists, like everyone else, face very real career pressures and funding incentives that can and do distort their judgement about risk. We don't let pharmaceutical companies regulate themselves entirely, and I don't see a compelling reason cutting-edge genetic or AI research should be fundamentally different.",
          C: "PRIYA: My worry is less about scientists specifically and more about global coordination generally. Even if one country imposes strict, well-designed limits, research with genuine strategic or commercial advantages will very likely just continue somewhere with laxer regulation. Unilateral restriction can end up meaning you simply lose all influence over how the technology eventually develops elsewhere, without actually preventing it.",
          D: "SAM: What I keep coming back to is the sheer difficulty of predicting consequences in advance. We're generally terrible at anticipating how new technologies will actually be used once released into the world. Given that persistent blind spot, building in caution, transparency and reversibility wherever genuinely possible seems obviously wiser than either blind faith in scientific self-restraint or blanket, reflexive prohibition.",
        },
        q: [
          mc("Who trusts peer review and transparency over outright prohibition?", ["A", "B", "C", "D"], 0, "Nadia: 'I'd rather trust rigorous peer review and transparency than outright prohibition'."),
          mc("Whose view most directly CHALLENGES Nadia's trust in scientific self-regulation?", ["A", "B", "C", "D"], 1, "Tom: 'dangerously naive… career pressures and funding incentives that can and do distort their judgement'."),
          mc("Who focuses on the problem of global coordination and unilateral restriction?", ["A", "B", "C", "D"], 2, "Priya: 'less about scientists specifically and more about global coordination'."),
          mc("Who emphasises our general inability to predict consequences in advance?", ["A", "B", "C", "D"], 3, "Sam: 'the sheer difficulty of predicting consequences in advance'."),
        ],
      },
      p7: {
        title: "The precautionary principle",
        text: "When faced with a new technology whose long-term consequences remain genuinely uncertain, societies have traditionally followed one of two broad approaches. (1)___\n\nThe first, often called the permissive approach, holds that new technologies should generally be allowed to proceed unless and until clear, demonstrable evidence of harm actually emerges. (2)___ Innovation, on this view, should not be needlessly obstructed by merely speculative or unproven fears.\n\nThe second, known as the precautionary principle, inverts this default entirely. (3)___ It holds that the burden of proof should fall on those introducing a new technology to demonstrate its safety, rather than on critics to prove definitive harm after the fact.\n\nEach approach carries real and significant costs. (4)___ A permissive stance risks allowing serious, sometimes irreversible harm to occur before adequate evidence accumulates to justify intervention.\n\nA precautionary stance, meanwhile, risks the opposite failure. (5)___ Genuinely beneficial technologies may be needlessly delayed or blocked entirely by fears that ultimately prove unfounded, at real and sometimes substantial human cost.\n\nNeither principle, applied rigidly and without nuance, seems fully satisfactory. (6)___ What is needed, most careful thinkers on this question increasingly agree, is a genuinely case-by-case judgement that weighs the specific severity, reversibility and probability of potential harms against the technology's own potential benefits.",
        options: [
          "Both, at bottom, represent different bets about uncertainty.",      // A -> gap 1
          "It favours innovation and treats caution as the burden to justify.", // B -> gap 2
          "It treats potential harm, not potential benefit, as the default worry.", // C -> gap 3
          "Some genuine harms will inevitably occur under either regime.",    // D -> gap 4
          "Excessive caution can itself impose very real human costs.",       // E -> gap 5
          "Wisdom here looks less like a fixed rule than a careful judgement.", // F -> gap 6
          "No society has ever worried about new technology at all.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: dos apuestas sobre la incertidumbre."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: favorece la innovación."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: trata el daño potencial como preocupación por defecto."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algún daño ocurrirá bajo cualquier régimen."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el exceso de cautela también tiene coste."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la sabiduría es un juicio caso por caso."),
        ],
      },
      p8: {
        title: "Four scientists discuss the ethics of their work",
        text: "Read what four scientists say about the ethical dimensions of their research.\n\nA) NADIA: I work in gene editing, and I've come to believe that refusing to engage with the ethical questions is itself an ethical failure. Early in my career I thought 'I just do the science; ethics is someone else's job.' I no longer believe that's a defensible position. If you have the expertise to understand exactly what's possible, you have some real obligation to help society think it through properly.\n\nB) TOM: What troubles me most in AI research is the sheer, dizzying speed of it all. We're deploying systems into the world faster than we can fully understand their behaviour, let alone their broader social consequences. I don't think anyone is being deliberately reckless, exactly, but the competitive pressure to publish first, to ship first, actively crowds out the slower, more careful work that genuine safety actually requires.\n\nC) PRIYA: I research infectious diseases, and I've had to sit with the deeply uncomfortable fact that studying dangerous pathogens, precisely in order to develop effective defences against them, inevitably carries its own real risks. There's no way to make that risk zero; you can only try to manage it responsibly, transparently, and with appropriate humility about the genuine limits of your own foresight.\n\nD) SAM: My work is in climate engineering, deliberately manipulating the atmosphere to help slow global warming, and I'm honestly torn about it daily. Doing nothing at all carries enormous risk; doing something ambitious and untested carries different, harder-to-predict risks of its own. There's genuinely no comfortable, risk-free option here — only different, difficult trade-offs to weigh as carefully as we can.\n",
        q: [
          mc("Who no longer believes 'ethics is someone else's job'?", ["A", "B", "C", "D"], 0, "Nadia: 'I no longer believe that's a defensible position'."),
          mc("Who is most troubled by the speed of AI deployment?", ["A", "B", "C", "D"], 1, "Tom: 'the sheer, dizzying speed of it all'."),
          mc("Who studies dangerous pathogens to develop defences against them?", ["A", "B", "C", "D"], 2, "Priya: 'studying dangerous pathogens, precisely in order to develop effective defences'."),
          mc("Who works in climate engineering and feels torn daily?", ["A", "B", "C", "D"], 3, "Sam: 'My work is in climate engineering… I'm honestly torn about it daily'."),
          mc("Who believes those with expertise have an obligation to help society think ethically?", ["A", "B", "C", "D"], 0, "Nadia: 'you have some real obligation to help society think it through properly'."),
          mc("Who says competitive pressure crowds out careful safety work?", ["A", "B", "C", "D"], 1, "Tom: 'the competitive pressure to publish first… actively crowds out the slower, more careful work'."),
          mc("Who says risk can only be managed, never made zero?", ["A", "B", "C", "D"], 2, "Priya: 'There's no way to make that risk zero; you can only try to manage it'."),
          mc("Who says there is 'no comfortable, risk-free option'?", ["A", "B", "C", "D"], 3, "Sam: 'There's genuinely no comfortable, risk-free option here'."),
          mc("Who calls for appropriate humility about the limits of one's foresight?", ["A", "B", "C", "D"], 2, "Priya: 'with appropriate humility about the genuine limits of your own foresight'."),
          mc("Who once thought their job was purely technical, not ethical?", ["A", "B", "C", "D"], 0, "Nadia: 'Early in my career I thought \"I just do the science\"'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre la ciencia se plantearon dos ideas:\n· scientific progress should never be restricted (el progreso científico no debería restringirse nunca)\n· some research is too dangerous to pursue (algunas investigaciones son demasiado peligrosas)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos un condicional MIXTO o una alternativa formal a IF. Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para un comité de ética universitario sobre cómo evaluar proyectos de investigación controvertidos: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'If I could reverse one scientific decision' — reflexiona sobre un avance científico y sus consecuencias, usando condicionales avanzados.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two scientists discussing a controversial experiment. Woman: Should any concerns arise during the trial, we've agreed to halt it immediately, no questions asked. Man: Good. But for that safeguard, I honestly wouldn't have agreed to join the project at all. Woman: I feel the same. The science is exciting, but not at any cost. Extract Two. You hear an ethicist talking about gene editing. Woman: If we hadn't developed this technology, we wouldn't be having this conversation at all — but here we are, and pretending otherwise helps nobody. Man: So what's your actual position? Woman: Provided strict oversight is in place, I support careful, limited use for serious disease. Beyond that, I remain genuinely uneasy. Extract Three. You hear two friends discussing artificial intelligence. Man: Unless we regulate this properly, and soon, I think we're heading somewhere genuinely dangerous. Woman: Supposing regulation actually happened globally — do you really think every country would comply equally?", [
      mc("1. What have the scientists agreed to do if concerns arise?", ["Ignore them.", "Halt the trial immediately.", "Continue anyway."], 1, "'we've agreed to halt it immediately'."),
      mc("2. What does the man say about the safeguard?", ["It's unnecessary.", "Without it, he wouldn't have joined the project.", "It's too strict."], 1, "'But for that safeguard, I honestly wouldn't have agreed to join'."),
      mc("3. What does the ethicist say about the technology existing?", ["It shouldn't exist.", "It exists, and pretending otherwise helps nobody.", "It's harmless."], 1, "'here we are, and pretending otherwise helps nobody'."),
      mc("4. Under what condition does she support its use?", ["Never.", "Provided strict oversight is in place, for serious disease.", "Always, without limits."], 1, "'Provided strict oversight is in place'."),
      mc("5. What does the man fear about AI?", ["Nothing.", "That without proper regulation, things are heading somewhere dangerous.", "That it's overregulated."], 1, "'Unless we regulate this properly… somewhere genuinely dangerous'."),
      mc("6. What doubt does the woman raise?", ["Whether AI exists.", "Whether every country would comply equally with global regulation.", "Whether regulation is needed."], 1, "'do you really think every country would comply equally?'"),
    ]),

    ...speakingParts({ p1: "qué avance científico te parece más importante y si confías en la ciencia y la tecnología", p2: "dos imágenes de la ciencia (un laboratorio de investigación genética y una manifestación contra una tecnología): compáralas y especula sobre las posturas de la gente", p3: "qué debería guiar los límites de la investigación científica (la seguridad, el beneficio potencial, la opinión pública, la regulación internacional, la libertad académica): comentadlo y elegid lo más importante", p4: "la ciencia y la ética: si el progreso debería tener límites, quién debería decidir esos límites y si somos capaces de prever las consecuencias de nuestros descubrimientos" }),

    SUMMARY("Resumen del Día 11", [
      "Condicionales mixtos: pasado (condición) → presente (resultado) y viceversa, según la lógica temporal.",
      "Alternativas a if: unless, providing/provided (that), as long as, should + inversión (formal), but for + sustantivo, otherwise.",
      "Vocabulario de ciencia y ética. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 12", "Escribe 6 frases con condicionales mixtos o alternativas a if sobre la ciencia. Repasa las flashcards. Mañana: wish/if only avanzados y estructuras hipotéticas (as if, it's time, would rather)."),
  ],
};

// ───────────────────────── DÍA 12 ─────────────────────────
const DAY12 = {
  title: "Día 12 — Wish/if only avanzados y estructuras hipotéticas · La inteligencia artificial",
  description: "Wish/if only + would (queja/deseo de cambio); as if/as though + past/past perfect; it's (high) time + past; would rather/sooner + past. Vocabulario de inteligencia artificial. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Expresar deseos, quejas e hipótesis con las estructuras avanzadas del C1.",
    summary: "Wish/if only avanzados; as if/it's time/would rather; inteligencia artificial; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["wish + would con el mismo sujeto (❌ I wish I would).", "as if + presente en vez de pasado (irreal).", "it's time + infinitivo en vez de pasado simple para el matiz de urgencia."],
    reviewPrompts: ["¿Por qué 'I wish I would' suena raro?", "¿Qué matiz añade 'It's high time we regulated this'?"],
  },
  items: [
    TEXT("🔁 Ayer, los condicionales mixtos. Hoy WISH/IF ONLY avanzados y las estructuras hipotéticas AS IF, IT'S TIME y WOULD RATHER. Vocabulario: la INTELIGENCIA ARTIFICIAL."),
    GRAMMAR("Wish/if only avanzados y estructuras hipotéticas", `WISH / IF ONLY (repaso avanzado):
· + past simple → deseo sobre el presente: I wish I understood this algorithm better.
· + past perfect → arrepentimiento sobre el pasado: If only we had regulated this sooner.
· + WOULD + infinitivo → queja sobre el comportamiento de OTRA persona/cosa (NO el propio sujeto): I wish they would explain how the algorithm works. ❌ I wish I would understand (usa past simple: I wish I understood).
AS IF / AS THOUGH (comparación irreal):
· + past simple (presente irreal): He talks as if he knew everything about AI. (no lo sabe todo)
· + past perfect (pasado irreal): She looked as though she had seen a ghost.
· + presente (si es posiblemente cierto): It looks as if it's going to rain. (probable, no irreal)
IT'S (HIGH) TIME + past simple: urgencia de que algo ocurra YA (no ha ocurrido): It's high time we regulated AI properly. (matiz de "ya deberíamos haberlo hecho")
WOULD RATHER / WOULD SOONER:
· + infinitivo sin to (mismo sujeto): I'd rather not use that app.
· + past simple (sujeto distinto, presente/futuro): I'd rather you didn't share my data.
· + past perfect (sujeto distinto, pasado): I'd rather you hadn't shared that.
⚠️ Todas estas estructuras usan un pasado GRAMATICAL con sentido de IRREALIDAD presente, no de tiempo pasado real.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ I wish I would know more about AI → ✅ I wish I knew (mismo sujeto, past simple).\n· ❌ He talks as if he knows everything → ✅ as if he KNEW (irreal, past simple).\n· ❌ It's time to we regulate it → ✅ It's time WE regulated it (past simple, sin 'to').\n· 'would rather' + past simple para sujeto distinto: I'd rather you asked first (no 'ask')."),
    grammarEx("Use of English — Wish/if only, as if, it's time, would rather", "Elige o completa.", [
      mc("I wish I ___ how neural networks actually work.", ["would understand", "understood", "understand"], 1, "wish + past simple (mismo sujeto)."),
      mc("I wish the company ___ more transparent about its algorithms.", ["would be", "were", "is"], 0, "wish + would (queja sobre otros)."),
      fb("She speaks ___ she ___ (know) everything about machine learning. (irreal presente)", ["as if", "knew"], "as if + past simple."),
      mc("It's high time we ___ clear rules for AI.", ["establish", "established", "will establish"], 1, "it's time + past simple."),
      fb("I'd rather you ___ (not / share) my data with third parties. (sujeto distinto)", ["didn't share"], "would rather + past simple."),
      mc("If only we ___ this technology sooner.", ["regulated", "had regulated", "would regulate"], 1, "if only + past perfect (arrepentimiento pasado)."),
      mc("He looked ___ he had seen the algorithm fail in real time.", ["as if", "if only", "wish"], 0, "as if + past perfect (pasado irreal)."),
    ]),
    GRAMMAR("Vocabulario del día — La inteligencia artificial (C1)", "Léxico avanzado de IA."),
    deck("C1 S3D12 — La inteligencia artificial", [
      ["artificial intelligence", "inteligencia artificial", "AI is transforming every industry.", "sustantivo", "ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns"],
      ["algorithm", "algoritmo", "The algorithm learns from data.", "sustantivo", "ˈælɡərɪðəm"],
      ["autonomous", "autónomo/a (sistema)", "Autonomous vehicles raise new questions.", "adjetivo", "ɔːˈtɒnəməs"],
      ["bias", "sesgo / sesgar", "The dataset contained racial bias.", "sustantivo/verbo", "ˈbaɪəs"],
      ["displace", "desplazar (empleos)", "AI could displace millions of jobs.", "verbo", "dɪsˈpleɪs"],
      ["sentient", "consciente / con conciencia", "Is a sentient machine even possible?", "adjetivo", "ˈsenʃənt"],
      ["opaque", "opaco/a (poco transparente)", "The decision-making process is opaque.", "adjetivo", "əʊˈpeɪk"],
      ["safeguard", "salvaguardar / garantía", "We need safeguards against misuse.", "verbo/sustantivo", "ˈseɪfɡɑːd"],
      ["superintelligence", "superinteligencia", "Some fear a future superintelligence.", "sustantivo", "ˌsuːpərɪnˈtelɪdʒəns"],
      ["accountability", "rendición de cuentas", "There's a lack of AI accountability.", "sustantivo", "əˌkaʊntəˈbɪləti"],
    ]),
    vocabEx("Vocabulario — La inteligencia artificial", "Elige la opción correcta.", [
      mc("A system that operates without human control is ___.", ["autonomous", "sentient", "opaque"], 0, "autonomous."),
      mc("An unfair tendency built into a system is ___.", ["bias", "accountability", "displacement"], 0, "bias."),
      mc("To force something out of its usual place, e.g. a job, is to ___ it.", ["displace", "safeguard", "regulate"], 0, "displace."),
      mc("Difficult to understand or see clearly is ___.", ["opaque", "sentient", "autonomous"], 0, "opaque."),
      mc("Having conscious awareness and feelings is being ___.", ["sentient", "opaque", "autonomous"], 0, "sentient."),
      mc("Being answerable for one's decisions is ___.", ["accountability", "bias", "displacement"], 0, "accountability."),
    ]),

    ...uoe({
      p1: {
        title: "The black box problem",
        text: "One of the most unsettling features of modern artificial intelligence is how little, in many cases, even its own creators genuinely understand about (1)___ it actually reaches its conclusions. A sophisticated neural network, trained on vast quantities of data, develops internal patterns of such (2)___ complexity that no human being can fully trace the precise reasoning behind any single decision it produces. This is what researchers have come to call the 'black box problem': we can observe, quite precisely, what goes in and what comes out, but the actual process happening in between remains, to a considerable and troubling (3)___, genuinely opaque even to its own designers. This matters enormously when such systems are deployed to make consequential decisions about real people's lives — approving loans, flagging medical risks, informing criminal sentencing recommendations. If a system denies someone a loan or a job, and nobody, including the system's own creators, can fully (4)___ exactly why, how can that decision reasonably be challenged, corrected or meaningfully held (5)___? Some researchers are working hard on techniques for making AI decisions more interpretable and explainable, but progress here remains frustratingly (6)___, and there is a persistent, uncomfortable tension between the very complexity that makes these systems so powerful and the transparency that meaningful accountability genuinely requires. Until this tension is resolved considerably more satisfactorily than it currently is, deploying opaque AI systems in high-stakes decisions carries risks that many argue we have (7)___ come close to adequately grappling with. The black box, in other words, may be (8)___ before we have truly learned how to look inside it.",
        q: [
          mc("(1)", ["how", "why", "what", "when"], 0, "'about how it actually reaches'."),
          mc("(2)", ["bewildering", "confusing", "puzzling", "baffling"], 0, "'such bewildering complexity'."),
          mc("(3)", ["extent", "degree", "measure", "level"], 1, "'a considerable and troubling degree'."),
          mc("(4)", ["explain", "clarify", "justify", "account"], 0, "'fully explain exactly why'."),
          mc("(5)", ["accountable", "liable", "responsible", "answerable"], 0, "'held accountable'."),
          mc("(6)", ["slow", "gradual", "limited", "partial"], 0, "'progress… remains frustratingly slow'."),
          mc("(7)", ["barely", "hardly", "scarcely", "not"], 0, "'we have barely come close'."),
          mc("(8)", ["growing", "expanding", "widening", "spreading"], 0, "'the black box… may be growing'."),
        ],
      },
      p2: {
        title: "Whose job is safe?",
        text: "Every wave of automation throughout economic history has provoked the same anxious question: whose jobs, exactly, (1)___ be lost this time? For centuries, this anxiety proved, on the whole, somewhat exaggerated; new technologies displaced certain jobs while simultaneously creating entirely new ones, often in categories nobody could have easily (2)___ in advance. Whether artificial intelligence will follow this same reassuring historical pattern, or whether it represents (3)___ fundamentally different kind of disruption, remains a matter of considerable and unresolved debate among serious economists. What makes AI genuinely different, some argue, is the sheer breadth of tasks it can potentially perform — not merely repetitive manual labour, as with earlier waves of automation, but increasingly sophisticated cognitive work previously thought reliably safe from automation: legal analysis, medical diagnosis, even certain forms of creative writing. If this pessimistic reading (4)___ correct, the disruption to come could prove considerably more widespread, and more difficult to adapt to, than anything witnessed in previous industrial revolutions. Others remain (5)___ more optimistic, pointing out that AI still struggles badly with tasks requiring genuine social intelligence, physical dexterity, or deep contextual judgement — precisely the kinds of skills, they suggest, that human workers might increasingly specialise (6)___ as machines take over more routine cognitive tasks. What seems clear, whichever view eventually proves correct, is that the coming transition will not be (7)___ smooth for everyone affected, and that societies will need to think seriously, and considerably sooner (8)___ later, about how to support workers whose skills become genuinely obsolete through no fault of their own.",
        q: [
          fb("(1)", ["will"], "'whose jobs… will be lost'."),
          fb("(2)", ["predicted", "foreseen"], "'nobody could have easily predicted'."),
          fb("(3)", ["a"], "'represents a fundamentally different kind'."),
          fb("(4)", ["is", "proves"], "'if this pessimistic reading is correct'."),
          fb("(5)", ["far", "considerably"], "'remain far more optimistic'."),
          fb("(6)", ["in"], "'specialise in'."),
          fb("(7)", ["universally", "equally"], "'will not be universally smooth'."),
          fb("(8)", ["than"], "'sooner than later'."),
        ],
      },
      p3: {
        title: "Can a machine be conscious?",
        text: "Few questions provoke such sharp (1)___ among experts as whether an artificial system could, even in principle, ever become genuinely conscious — capable of actual subjective experience rather than merely a highly convincing (2)___ of it. The question matters enormously, and not merely as an abstract philosophical curiosity. If a sufficiently advanced AI system genuinely possessed some form of consciousness, capable of real, subjective suffering or wellbeing, our ethical obligations towards it would presumably be (3)___ different from our obligations towards a mere sophisticated tool, however impressively it happened to perform. The trouble is that we currently possess no reliable, agreed method whatsoever for actually detecting consciousness in a system fundamentally unlike our own biological brains. A sufficiently (4)___ machine might produce outputs indistinguishable, in every observable respect, from those of a genuinely conscious being, without any actual subjective experience occurring inside it at all — or, quite possibly, the reverse could equally be true, and we might simply fail entirely to recognise a fundamentally different, non-human form of genuine consciousness when it eventually does emerge before us. This deep, stubborn uncertainty leaves us in a genuinely uncomfortable ethical position. Some philosophers argue we should extend at least some meaningful moral consideration to sufficiently sophisticated AI systems purely as a precaution, (5)___ we cannot confidently rule out the possibility of genuine suffering. Others regard this as needlessly (6)___, expending moral concern on systems that are, in their firm view, obviously nothing more than very sophisticated pattern-matching machines with zero genuine inner experience. What is genuinely striking is how (7)___ our conceptual and philosophical tools remain for addressing a question that, as AI systems grow ever more sophisticated and capable, seems destined only to become more (8)___, not less.",
        items: [
          { root: "agree", accepted: ["disagreement"], hint: "'such sharp disagreement' → disagreement." },
          { root: "simulate", accepted: ["simulation"], hint: "'a convincing simulation of it' → simulation." },
          { root: "profound", accepted: ["profoundly"], hint: "'presumably profoundly different' → profoundly." },
          { root: "sophisticate", accepted: ["sophisticated"], hint: "'a sufficiently sophisticated machine' → sophisticated." },
          { root: "sense", accepted: ["since"], hint: "'as a precaution, since we cannot rule out' → since." },
          { root: "caution", accepted: ["overcautious"], hint: "'needlessly overcautious' → overcautious." },
          { root: "adequate", accepted: ["inadequate"], hint: "'how inadequate our… tools remain' → inadequate." },
          { root: "press", accepted: ["pressing"], hint: "'more pressing, not less' → pressing." },
        ],
      },
      p4: {
        title: "Transformaciones — wish, as if, it's time, would rather",
        items: [
          { s1: "I regret that I don't understand this algorithm better.", key: "WISH", s2: "I ___ this algorithm better.", accepted: ["wish I understood"], explanation: "wish + past simple." },
          { s1: "It's a pity the company isn't more transparent.", key: "WISH", s2: "I ___ the company were more transparent.", accepted: ["wish"], explanation: "wish + past simple (were)." },
          { s1: "He behaves as though he knows everything about AI.", key: "KNEW", s2: "He behaves as though he ___ everything about AI.", accepted: ["knew"], explanation: "as if/though + past simple." },
          { s1: "We should have regulated this technology sooner.", key: "ONLY", s2: "If ___ this technology sooner.", accepted: ["only we had regulated"], explanation: "if only + past perfect." },
          { s1: "It's urgent that we establish clear rules now.", key: "TIME", s2: "It's high ___ clear rules.", accepted: ["time we established"], explanation: "it's (high) time + past simple." },
          { s1: "I prefer that you don't share my data.", key: "RATHER", s2: "I'd ___ my data.", accepted: ["rather you didn't share"], explanation: "would rather + past simple (sujeto distinto)." },
        ],
      },
      p5: {
        title: "The programmer who quit",
        text: "For six years, a talented young software engineer had worked at one of the world's most admired artificial intelligence companies, rising steadily through its ranks and eventually leading a small team developing increasingly sophisticated language models capable of generating remarkably fluent, human-like text on virtually any topic imaginable. He believed passionately, at least at first, in the company's officially stated mission: developing advanced AI carefully and safely, for the genuine benefit of all humanity rather than merely a wealthy few. It was, by his own later account, precisely this deep-rooted belief that made what eventually happened feel like such a profound and painful personal betrayal.\n\nThe trouble began gradually, he would later explain, with a slow but unmistakable accumulation of small, seemingly individually reasonable compromises. A safety review here got quietly shortened under mounting competitive pressure; a cautionary internal recommendation there got gently but firmly overruled by senior leadership anxious not to fall visibly behind rival companies. Each individual decision, considered entirely in isolation, seemed genuinely defensible, even reasonable, given the circumstances at the time. But taken together, accumulating steadily over many months, they represented, he came to believe with growing alarm, a wholesale and largely unacknowledged abandonment of the very careful, safety-first principles the company had so publicly and repeatedly championed to the outside world.\n\nThe breaking point, when it finally arrived, was almost absurdly mundane in isolation: a routine internal decision to rush a new, considerably more powerful model to public release several months ahead of the original, more cautious safety timeline, in a competitive race with a rival company to be first to market. He argued forcefully, and at real professional risk to himself, that the model had not yet been adequately, thoroughly tested for several genuinely serious potential harms his own team had specifically identified and flagged. He was overruled, not unkindly but quite firmly, by leadership citing overwhelming competitive necessity and market pressure.\n\nHe resigned less than a week later, walking away from a lucrative and professionally prestigious position, substantial unvested stock options, and years of accumulated seniority, because, as he put it afterwards with evident and continuing anguish, he could no longer in good conscience tell himself a comforting story about the company's stated values that the accumulating evidence of his own daily experience no longer remotely supported. In a lengthy, carefully considered public resignation letter that subsequently attracted considerable media attention, he wrote that he wished, more than almost anything else in his professional life, that the company's actions had genuinely matched its carefully polished public rhetoric about safety — but that wishing, he had painfully come to accept, changes remarkably little in a fiercely competitive industry racing forward at extraordinary speed.\n\nHis resignation did not, by itself, meaningfully slow the company's headlong pace of development, nor fundamentally alter the industry's broader competitive dynamics. But it did contribute, alongside a small but growing handful of similar, similarly public departures from other companies, to an increasingly visible and uncomfortable public conversation about whether the artificial intelligence industry's frequent, carefully worded assurances of caution and safety could genuinely be trusted, or whether competitive pressure would reliably and predictably override safety considerations every single time serious money and market position were genuinely at stake.",
        q: [
          mc("What did the engineer initially believe about the company?", ["It was corrupt.", "It genuinely aimed to develop AI safely for humanity's benefit.", "It was failing."], 1, "'he believed passionately… the company's officially stated mission: developing advanced AI carefully and safely'."),
          mc("How did the problem begin, according to him?", ["Suddenly, overnight.", "Gradually, through an accumulation of small compromises.", "With one dramatic event."], 1, "'a slow but unmistakable accumulation of small, seemingly individually reasonable compromises'."),
          mc("What was the breaking point?", ["A pay cut.", "A decision to rush a model to release ahead of safety timelines.", "A promotion he didn't get."], 1, "'a routine internal decision to rush a new… model to public release… ahead of the original… safety timeline'."),
          mc("What did he do after being overruled?", ["Stayed silent.", "Resigned, giving up substantial stock options and seniority.", "Was fired."], 1, "'He resigned… walking away from… substantial unvested stock options, and years of accumulated seniority'."),
          mc("What did he wish, according to his resignation letter?", ["That he'd stayed.", "That the company's actions had matched its public rhetoric about safety.", "That he'd been promoted."], 1, "'he wished… that the company's actions had genuinely matched its carefully polished public rhetoric about safety'."),
          mc("What did his resignation contribute to?", ["Nothing.", "A growing public conversation about whether AI safety assurances can be trusted.", "The company's collapse."], 1, "'an increasingly visible and uncomfortable public conversation about whether the… industry's… assurances of caution and safety could genuinely be trusted'."),
        ],
      },
      p6: {
        title: "Will AI take our jobs?",
        intro: "Cuatro personas debaten el impacto de la IA en el empleo.",
        texts: {
          A: "NADIA: I think the panic is overblown, honestly. Every previous technological revolution provoked exactly the same doom-laden predictions, and every time, new kinds of work eventually emerged that nobody could have confidently predicted in advance. I see no compelling reason AI should be fundamentally different in this respect, however impressive its current capabilities genuinely are.",
          B: "TOM: I used to share that confidence, but I've become considerably less sure lately. Previous automation mainly replaced physical, manual labour; this wave is coming squarely for cognitive work too — analysis, writing, even certain forms of creative work. I genuinely worry we're facing something without much reliable historical precedent to guide our expectations.",
          C: "PRIYA: What concerns me most isn't really the total number of jobs lost or gained, but who specifically bears the transition costs involved. Historically, it's rarely been the wealthy executives and shareholders who suffer during these disruptive transitions; it's ordinary workers, often in already precarious positions, who are expected to simply retrain themselves and somehow adapt with minimal meaningful support.",
          D: "SAM: My honest view is that we simply don't know yet, and I'm deeply suspicious of anyone confidently claiming otherwise in either direction. What I do think we should do, regardless of how it eventually unfolds, is build considerably stronger social safety nets now, well before we actually need them, rather than scrambling reactively once the disruption has already properly hit.",
        },
        q: [
          mc("Who thinks the panic about AI and jobs is overblown, citing historical precedent?", ["A", "B", "C", "D"], 0, "Nadia: 'I think the panic is overblown… every time, new kinds of work eventually emerged'."),
          mc("Whose view most directly QUALIFIES Nadia's optimism, citing a lack of precedent?", ["A", "B", "C", "D"], 1, "Tom: 'facing something without much reliable historical precedent'."),
          mc("Who focuses on who bears the transition costs rather than total job numbers?", ["A", "B", "C", "D"], 2, "Priya: 'who specifically bears the transition costs involved'."),
          mc("Who argues for building stronger safety nets now, given genuine uncertainty?", ["A", "B", "C", "D"], 3, "Sam: 'build considerably stronger social safety nets now'."),
        ],
      },
      p7: {
        title: "Teaching machines right from wrong",
        text: "As artificial intelligence systems take on ever more consequential decisions, a genuinely difficult question grows correspondingly more urgent: how, exactly, do you teach a machine ethics? (1)___\n\nUnlike a human child, gradually absorbing moral intuitions through years of lived experience, social feedback and cultural immersion, an AI system learns overwhelmingly from whatever data it happens to be trained on. (2)___ If that underlying data reflects existing human biases and blind spots, the resulting system will very likely reproduce, and sometimes even amplify, those same flawed patterns.\n\nSome researchers have attempted to hard-code explicit ethical rules directly into these systems. (3)___ But real-world ethical dilemmas rarely present themselves as clean, unambiguous cases that any fixed rule can straightforwardly resolve.\n\nOthers have tried instead to train systems on vast collections of human moral judgements, hoping that broad statistical patterns might eventually capture something meaningfully like genuine ethical wisdom. (4)___ This approach, however, risks simply encoding whatever majority view happens to prevail, however unjust that majority view might actually turn out to be.\n\nA further complication is that human beings themselves rarely agree on ethics in the first place. (5)___ Should an AI system optimise for one particular ethical framework, or attempt some kind of uneasy, necessarily imperfect compromise between competing and sometimes flatly incompatible ones?\n\nThere are, at present, no fully satisfying answers to any of these genuinely hard questions. (6)___ What seems clear, at the very least, is that the challenge is philosophical and social as much as it is narrowly technical.",
        options: [
          "It turns out to be surprisingly hard to answer well.",            // A -> gap 1
          "Its moral compass, in effect, is only as good as its data.",       // B -> gap 2
          "Rigid rules quickly collide with messy real-world complexity.",   // C -> gap 3
          "Majority opinion is not the same thing as moral truth.",          // D -> gap 4
          "We can't even agree among ourselves what 'ethical' means.",       // E -> gap 5
          "The field remains, by most honest accounts, in its infancy.",     // F -> gap 6
          "Teaching machines ethics has already been fully solved.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: es sorprendentemente difícil de responder."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: su brújula moral depende de los datos."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las reglas rígidas chocan con la complejidad."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la mayoría no es lo mismo que la verdad moral."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: ni siquiera nosotros nos ponemos de acuerdo."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el campo sigue en su infancia."),
        ],
      },
      p8: {
        title: "Four people discuss their feelings about AI",
        text: "Read what four people say about how they feel about artificial intelligence.\n\nA) NADIA: I genuinely wish more people shared my excitement instead of just the anxiety. I've watched AI help doctors catch diagnoses they'd have otherwise missed, help researchers accelerate work that would have taken years. The doom-laden coverage focuses almost entirely on the risks and barely mentions the genuinely extraordinary good already quietly happening.\n\nB) TOM: I work adjacent to the industry, and honestly, I wish I felt as confident as the public marketing suggests we all should. Behind the polished, reassuring press releases, there's often a great deal more genuine uncertainty and disagreement, even among the experts themselves, than anyone in a position of authority is willing to publicly admit.\n\nC) PRIYA: What I feel most, if I'm being completely honest, is a kind of quiet, low-level grief for skills I can already feel myself losing. I barely write anything substantial without some AI assistance now, and I sometimes wonder, with real unease, what that's slowly doing to my own capacity to think clearly and independently.\n\nD) SAM: I try hard to stay pragmatic about it rather than either wildly hopeful or fearfully catastrophic. It's a genuinely powerful tool, like electricity or the internet before it — capable of real good or real harm, mostly depending on choices we as a society still actively get to make. I'd rather engage carefully and thoughtfully with it than simply panic or blindly celebrate.\n",
        q: [
          mc("Who wishes more people shared their excitement about AI's benefits?", ["A", "B", "C", "D"], 0, "Nadia: 'I genuinely wish more people shared my excitement'."),
          mc("Who works adjacent to the industry and wishes they felt more confident?", ["A", "B", "C", "D"], 1, "Tom: 'I wish I felt as confident as the public marketing suggests'."),
          mc("Who feels a quiet grief for skills they feel themselves losing?", ["A", "B", "C", "D"], 2, "Priya: 'a kind of quiet, low-level grief for skills I can already feel myself losing'."),
          mc("Who compares AI to electricity or the internet, urging pragmatism?", ["A", "B", "C", "D"], 3, "Sam: 'like electricity or the internet before it'."),
          mc("Who has seen AI help doctors catch diagnoses they'd otherwise miss?", ["A", "B", "C", "D"], 0, "Nadia: 'help doctors catch diagnoses they'd have otherwise missed'."),
          mc("Who says there's more disagreement among experts than publicly admitted?", ["A", "B", "C", "D"], 1, "Tom: 'a great deal more genuine uncertainty and disagreement… than anyone… is willing to publicly admit'."),
          mc("Who barely writes anything substantial without AI assistance now?", ["A", "B", "C", "D"], 2, "Priya: 'I barely write anything substantial without some AI assistance now'."),
          mc("Who would rather engage carefully than panic or blindly celebrate?", ["A", "B", "C", "D"], 3, "Sam: 'I'd rather engage carefully and thoughtfully with it than simply panic or blindly celebrate'."),
          mc("Who thinks doom-laden coverage barely mentions the genuine good happening?", ["A", "B", "C", "D"], 0, "Nadia: 'barely mentions the genuinely extraordinary good already quietly happening'."),
          mc("Who wonders what AI reliance is doing to their capacity to think independently?", ["A", "B", "C", "D"], 2, "Priya: 'what that's slowly doing to my own capacity to think clearly and independently'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la inteligencia artificial se plantearon dos ideas:\n· AI will mostly benefit humanity (la IA beneficiará sobre todo a la humanidad)\n· AI poses serious risks that outweigh its benefits (la IA plantea riesgos que superan sus beneficios)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos una estructura con WISH/IF ONLY o AS IF. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'How AI has already changed my daily life' — reflexiona con ejemplos concretos.\n· CARTA a un comité de regulación proponiendo una medida concreta para regular la IA de forma responsable: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una investigadora de ética de la IA, la doctora Vance, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear an AI ethics researcher called Doctor Vance giving a talk. Doctor Vance: I wish I could tell you this field has clear, settled answers. It doesn't, not yet. My first point is about the so-called black box problem: even the engineers who build these systems often can't fully explain why a given decision was made. That's a genuine accountability crisis waiting to happen. Second, on bias: an algorithm is only ever as fair as the data it was trained on, and our historical data is riddled with human prejudice. Garbage in, garbage out, as the old saying goes, applies here with real force. Third, I want to address the jobs question honestly. I don't think anyone genuinely knows yet how disruptive this will ultimately prove to be, and I'm deeply suspicious of confident predictions in either direction. My fourth point concerns consciousness. It's a fascinating philosophical question, but I worry it distracts us from more urgent, practical concerns about how these systems are being deployed right now, today. And finally, my main message: it's high time we built real accountability structures, not just polished ethics statements and glossy corporate press releases. Good intentions, on their own, have never once been enough.", [
      fb("Doctor Vance wishes the field had clear, ___ answers.", ["settled"], "'clear, settled answers'."),
      fb("Even engineers often can't fully ___ why a decision was made.", ["explain"], "'can't fully explain why'."),
      fb("This represents a genuine ___ crisis waiting to happen.", ["accountability"], "'a genuine accountability crisis'."),
      fb("An algorithm is only as fair as the ___ it was trained on.", ["data"], "'as the data it was trained on'."),
      fb("Historical data is riddled with human ___.", ["prejudice"], "'riddled with human prejudice'."),
      fb("She is deeply suspicious of confident ___ about jobs.", ["predictions"], "'confident predictions in either direction'."),
      fb("Consciousness debates may distract from more urgent, ___ concerns.", ["practical"], "'more urgent, practical concerns'."),
      fb("She says it's high time we built real ___ structures.", ["accountability"], "'real accountability structures'."),
    ]),

    ...speakingParts({ p1: "cómo usas la inteligencia artificial en tu día a día y qué te preocupa o entusiasma de ella", p2: "dos imágenes de la IA (un robot médico ayudando en una operación y una persona preocupada viendo noticias sobre IA): compáralas y especula sobre sus sentimientos", p3: "qué es lo más urgente para regular bien la IA (la transparencia de los algoritmos, la protección del empleo, la seguridad, evitar el sesgo, la cooperación internacional): comentadlo y elegid lo más urgente", p4: "la inteligencia artificial: si nos beneficiará más de lo que nos perjudicará, si las máquinas podrían llegar a ser conscientes y qué papel deberíamos dejarle a la IA en nuestras vidas" }),

    SUMMARY("Resumen del Día 12", [
      "Wish/if only: + past simple (deseo presente) / + past perfect (arrepentimiento) / + would (queja sobre otros, no el propio sujeto).",
      "As if/as though + past (irreal presente) / + past perfect (irreal pasado). It's (high) time + past simple. Would rather + infinitivo (mismo sujeto) / + past (sujeto distinto).",
      "Vocabulario de inteligencia artificial. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 13", "Escribe 6 frases con wish/if only, as if o it's time sobre la tecnología. Repasa las flashcards. Mañana: los modales de especulación y deducción avanzados."),
  ],
};

// ───────────────────────── DÍA 13 ─────────────────────────
const DAY13 = {
  title: "Día 13 — Modales de especulación y deducción avanzados · El espacio y la exploración",
  description: "Modales de deducción en presente y pasado (must/can't/could/may/might + have + participio); modales de crítica retrospectiva (should have, needn't have, could have); would have + participio en hipótesis. Vocabulario de espacio y exploración. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Especular, deducir y criticar acciones pasadas con precisión modal de nivel C1.",
    summary: "Modales de especulación/deducción/crítica; espacio y exploración; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["confundir should have (crítica: no lo hizo) con needn't have (crítica: lo hizo mal, era innecesario).", "'can't have' vs 'mustn't have' (solo can't have para imposibilidad).", "olvidar el matiz de certeza: must > should/ought to > may/might/could > can't."],
    reviewPrompts: ["¿Qué diferencia hay entre 'You should have checked' y 'You needn't have checked'?", "¿Cómo ordenarías must/might/can't por grado de certeza?"],
  },
  items: [
    TEXT("🔁 Ayer, wish/as if/it's time. Hoy los MODALES DE ESPECULACIÓN, DEDUCCIÓN Y CRÍTICA RETROSPECTIVA: el matiz más fino de certeza y valoración. Vocabulario: el ESPACIO y la EXPLORACIÓN."),
    GRAMMAR("Modales de especulación, deducción y crítica retrospectiva", `DEDUCCIÓN EN PRESENTE (grado de certeza, de mayor a menor):
· MUST + inf. (casi seguro que SÍ): The mission must be incredibly complex.
· SHOULD/OUGHT TO + inf. (probable, expectativa): The rover should be functioning normally by now.
· MAY/MIGHT/COULD + inf. (posible): Life may exist on other planets.
· CAN'T/COULDN'T + inf. (casi seguro que NO): That data can't be accurate.
DEDUCCIÓN EN PASADO: modal + HAVE + participio.
· MUST HAVE + participio (seguro que pasó): The probe must have malfunctioned.
· MAY/MIGHT/COULD HAVE + participio (posiblemente pasó): The asteroid might have caused the extinction.
· CAN'T/COULDN'T HAVE + participio (seguro que NO pasó): They can't have known about the risk.
CRÍTICA RETROSPECTIVA (algo que SÍ o NO ocurrió, con valoración):
· SHOULD HAVE + participio (no lo hizo, pero debería): They should have tested the equipment more carefully. (crítica: no lo hicieron)
· SHOULDN'T HAVE + participio (lo hizo, pero no debería): He shouldn't have ignored the warning. (crítica: lo hizo)
· NEEDN'T HAVE + participio (lo hizo, pero era innecesario): We needn't have worried; the landing was perfect. (lo hicieron, sin necesidad)
· COULD HAVE + participio (era posible, pero no ocurrió): She could have become an astronaut, but chose research instead.
⚠️ 'Should have' ≠ 'needn't have': el primero critica una OMISIÓN; el segundo, un ESFUERZO INNECESARIO.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ He must have not known → ✅ He can't have known (negativo de certeza pasada = can't have, no 'must not have' con este sentido).\n· ❌ You should have not gone → ✅ You shouldn't have gone.\n· 'needn't have done' (lo hiciste, no hacía falta) ≠ 'didn't need to do' (no lo hiciste, no hacía falta, sin implicar si se hizo o no).\n· Escala de certeza: must (99%) > should (probable) > may/might/could (posible) > can't (imposible)."),
    grammarEx("Use of English — Modales de especulación y crítica retrospectiva", "Elige o completa con precisión.", [
      mc("The mission ___ have failed — we haven't heard anything in hours.", ["must", "can't", "needn't"], 0, "deducción segura (algo malo ha pasado) → must have."),
      mc("That claim ___ be true — it contradicts all the evidence.", ["can't", "must", "should"], 0, "deducción negativa segura → can't."),
      fb("They ___ (should / test) the equipment before launch — now it's too late.", ["should have tested"], "crítica: no lo hicieron, debieron."),
      fb("We ___ (needn't / worry) — the landing went perfectly. (lo hicieron, sin necesidad)", ["needn't have worried"], "needn't have + participio."),
      mc("He ___ have seen the signal; he was looking the other way.", ["can't", "must", "should"], 0, "deducción negativa segura → can't have."),
      mc("She ___ have become an astronaut, but she chose a different path.", ["could", "should", "must"], 0, "posibilidad no realizada → could have."),
      fb("You ___ (shouldn't / ignore) the safety warning — that was reckless.", ["shouldn't have ignored"], "crítica: lo hizo, no debió."),
    ]),
    GRAMMAR("Vocabulario del día — El espacio y la exploración (C1)", "Léxico avanzado de exploración espacial."),
    deck("C1 S3D13 — El espacio y la exploración", [
      ["mission", "misión (espacial)", "The mission was a resounding success.", "sustantivo", "ˈmɪʃn"],
      ["probe", "sonda (espacial)", "The probe reached the outer planets.", "sustantivo", "prəʊb"],
      ["extraterrestrial", "extraterrestre", "Is there extraterrestrial life?", "adjetivo", "ˌekstrətəˈrestriəl"],
      ["orbit", "órbita / orbitar", "The satellite orbits the Earth.", "sustantivo/verbo", "ˈɔːbɪt"],
      ["habitable", "habitable", "Is the planet potentially habitable?", "adjetivo", "ˈhæbɪtəbl"],
      ["launch", "lanzamiento / lanzar", "The launch was delayed by weather.", "sustantivo/verbo", "lɔːntʃ"],
      ["vast", "vasto/a / inmenso/a", "The universe is unimaginably vast.", "adjetivo", "vɑːst"],
      ["frontier", "frontera (metafórica)", "Space remains the final frontier.", "sustantivo", "frʌnˈtɪə"],
      ["colonise", "colonizar", "Could humans colonise Mars?", "verbo", "ˈkɒlənaɪz"],
      ["awe-inspiring", "sobrecogedor/a", "The images were awe-inspiring.", "adjetivo", "ˈɔː ɪnˌspaɪərɪŋ"],
    ]),
    vocabEx("Vocabulario — El espacio y la exploración", "Elige la opción correcta.", [
      mc("An unmanned spacecraft sent to explore is a ___.", ["probe", "mission", "orbit"], 0, "probe."),
      mc("Suitable for living things to survive is ___.", ["habitable", "vast", "extraterrestrial"], 0, "habitable."),
      mc("Coming from beyond Earth is ___.", ["extraterrestrial", "habitable", "vast"], 0, "extraterrestrial."),
      mc("Extremely large in scale is ___.", ["vast", "habitable", "orbital"], 0, "vast."),
      mc("To establish a settlement in a new place is to ___ it.", ["colonise", "orbit", "launch"], 0, "colonise."),
      mc("Causing wonder and amazement is ___.", ["awe-inspiring", "habitable", "vast"], 0, "awe-inspiring."),
    ]),

    ...uoe({
      p1: {
        title: "Why we look up",
        text: "There is something in the human character that has always compelled us to look (1)___, wondering what lies beyond the thin blue line of our own atmosphere. Long before we possessed the (2)___ technology to actually leave our planet, we filled the night sky with stories, gods and constellations, projecting our own hopes, fears and myths onto the vast, silent darkness above us. This ancient impulse, some argue, is not merely idle curiosity but something considerably deeper — a restless, deeply human need to understand our place within a universe of near-incomprehensible (3)___. The decision to actually go, rather than merely gaze upward and wonder, represents one of humanity's most extraordinary and (4)___ collective achievements. It required not only extraordinary engineering, but also extraordinary courage: strapping oneself to an enormous controlled explosion and trusting entirely in calculations one could not personally (5)___, hurtling towards a destination where the smallest error meant almost certain death. And yet people have always, throughout history, volunteered eagerly for precisely this kind of genuinely perilous frontier work, driven by something that seems to transcend mere professional ambition or rational cost-benefit calculation. Perhaps it is simply that human beings have never been content merely to (6)___ where the boundaries of the known world happen to lie; we have always felt an almost irresistible pull to go and see (7)___ ourselves, whatever the very real cost or risk involved. Space, in this sense, is merely the latest and most (8)___ chapter in a story of restless human exploration that stretches back, in one form or another, to our most distant ancestors.",
        q: [
          mc("(1)", ["upward", "up", "above", "upwards"], 1, "'compelled us to look up'."),
          mc("(2)", ["required", "necessary", "needed", "essential"], 0, "'the required technology'."),
          mc("(3)", ["scale", "size", "magnitude", "extent"], 0, "'a universe of… incomprehensible scale'."),
          mc("(4)", ["daring", "brave", "bold", "courageous"], 0, "'most extraordinary and daring… achievements'."),
          mc("(5)", ["verify", "check", "confirm", "prove"], 0, "'calculations one could not personally verify'."),
          mc("(6)", ["accept", "know", "wonder", "guess"], 1, "'content merely to know where the boundaries… lie'."),
          mc("(7)", ["for", "by", "in", "with"], 0, "'go and see for ourselves'."),
          mc("(8)", ["dramatic", "striking", "vivid", "bold"], 0, "'the latest and most dramatic chapter'."),
        ],
      },
      p2: {
        title: "The loneliest job in the universe",
        text: "Of all the extraordinary experiences human beings have ever undergone, few can rival the peculiar, profound isolation of the astronaut who orbits alone, entirely (1)___ direct human company, while colleagues below carry out tasks on a planetary surface. During several historic lunar missions, one crew member remained behind in the orbiting command module while others descended (2)___ the surface itself, and for long, uninterrupted stretches of each orbit, that lone astronaut passed completely out of radio contact with (3)___ Earth or the lunar surface team, becoming, quite literally, the most physically isolated human being who had ever existed up to that point in our entire species' long history. What must it have (4)___ like, one cannot help but wonder, to sit there in total silence, farther from any other living soul than any human before you had ever ventured, watching your own home planet shrink to a small, fragile blue marble suspended in the endless black void? Some who have actually experienced this describe it, somewhat surprisingly, not as terrifying (5)___ as they might have anticipated beforehand, but as something closer to profoundly peaceful — a rare, unrepeatable opportunity for genuine solitary reflection unlike (6)___ else available anywhere on the crowded planet below. Others report a far more disquieting, unsettling sense of cosmic smallness, a vivid and inescapable confrontation with just how (7)___ insignificant a single human life truly is against the almost unimaginable scale of the universe. Whatever the precise emotional truth of the experience, it stands as a uniquely powerful reminder of how utterly (8)___ we remain, as a fundamentally social species, on the presence and company of others.",
        q: [
          fb("(1)", ["without"], "'entirely without direct human company'."),
          fb("(2)", ["to"], "'descended to the surface'."),
          fb("(3)", ["both"], "'passed completely out of radio contact with both'."),
          fb("(4)", ["been"], "'What must it have been like'."),
          fb("(5)", ["as"], "'not… as terrifying as'."),
          fb("(6)", ["anything"], "'unlike anything else'."),
          fb("(7)", ["truly", "utterly"], "'just how truly/utterly insignificant'."),
          fb("(8)", ["dependent"], "'how utterly dependent we remain'."),
        ],
      },
      p3: {
        title: "The search that may never end",
        text: "For over half a century, radio telescopes around the world have scanned the (1)___ silence of the cosmos, listening patiently for even the faintest signal that might indicate we are not, after all, entirely alone in this vast universe. The search has, so far, yielded nothing but (2)___ — not a single confirmed, unambiguous signal, not a single verified trace of any intelligent civilisation beyond our own small planet. To some, this prolonged and continuing silence suggests we may indeed be entirely (3)___ in the observable universe, an almost unimaginably improbable but apparently genuine cosmic accident. To others, it merely reflects the sheer, staggering (4)___ of the search: even our most sensitive current instruments could plausibly detect only a tiny handful of civilisations, out of potentially billions across the galaxy, that happen to be broadcasting the right kind of signal, in the right direction, at precisely the right moment in cosmic time for us to actually receive and recognise it. This deep, unresolved puzzle has become known, somewhat dramatically, as the Fermi Paradox: given the sheer, almost incomprehensible number of stars and potentially habitable planets that plausibly exist, why haven't we detected any (5)___ evidence of extraterrestrial intelligence whatsoever? Various explanations have been (6)___, ranging from the mundane — perhaps intelligent life really is exceedingly rare — to the genuinely unsettling: perhaps advanced civilisations reliably destroy themselves, through war or environmental collapse, well before they ever develop the sophisticated technology needed to communicate meaningfully across vast interstellar distances. Nobody currently knows which explanation, if any of them, is correct, and it is entirely (7)___ that we may never actually find out for certain within any human timescale. What seems clear, regardless of which theory eventually proves right, is that the question itself — whether we are cosmically alone or merely one intelligent voice among countless (8)___ others — may be among the most profound and consequential any species has ever seriously asked itself.",
        items: [
          { root: "vast", accepted: ["vast"], hint: "'the vast silence of the cosmos' (adjetivo)." },
          { root: "silence", accepted: ["silence"], hint: "'yielded nothing but silence' (sustantivo)." },
          { root: "alone", accepted: ["alone"], hint: "'we may indeed be entirely alone' (adjetivo)." },
          { root: "difficult", accepted: ["difficulty"], hint: "'the sheer, staggering difficulty' → difficulty." },
          { root: "convince", accepted: ["convincing"], hint: "'any convincing evidence' → convincing." },
          { root: "propose", accepted: ["proposed"], hint: "'have been proposed' → proposed." },
          { root: "possible", accepted: ["possible"], hint: "'entirely possible that' (adjetivo)." },
          { root: "number", accepted: ["numerous"], hint: "'countless numerous others' (adjetivo, algo redundante pero válido)." },
        ],
      },
      p4: {
        title: "Transformaciones — modales de especulación",
        items: [
          { s1: "I'm almost certain the probe malfunctioned.", key: "MUST", s2: "The probe ___ .", accepted: ["must have malfunctioned"], explanation: "must have + participio." },
          { s1: "It's impossible that they knew about the risk.", key: "CAN'T", s2: "They ___ about the risk.", accepted: ["can't have known"], explanation: "can't have + participio." },
          { s1: "It was a mistake not to test the equipment.", key: "SHOULD", s2: "They ___ the equipment.", accepted: ["should have tested"], explanation: "should have + participio (crítica: omisión)." },
          { s1: "It wasn't necessary to worry, but we did.", key: "NEEDN'T", s2: "We ___ .", accepted: ["needn't have worried"], explanation: "needn't have + participio." },
          { s1: "Perhaps the asteroid caused the extinction.", key: "MIGHT", s2: "The asteroid ___ the extinction.", accepted: ["might have caused"], explanation: "might have + participio (posibilidad)." },
          { s1: "It was possible for her to become an astronaut, but she chose research.", key: "COULD", s2: "She ___ an astronaut, but chose research instead.", accepted: ["could have become"], explanation: "could have + participio (posibilidad no realizada)." },
        ],
      },
      p5: {
        title: "The mistake that saved the mission",
        text: "Deep into what should have been a routine, entirely uneventful voyage towards the Moon, an explosion tore through one of the spacecraft's oxygen tanks, instantly transforming a straightforward lunar landing mission into a desperate, high-stakes fight for the crew's very survival. The three astronauts aboard, suddenly finding themselves stranded some two hundred thousand miles from Earth with rapidly dwindling oxygen, power and water, faced what mission control back on the ground would later describe, with characteristic understatement, as easily the most dangerous few days in the entire history of American spaceflight up to that point.\n\nWhat ultimately saved their lives was not any single dramatic act of individual heroism, but rather an extraordinary, sustained collective effort of calm, methodical, almost unbearably careful engineering improvisation, conducted under conditions of extreme time pressure and near-total darkness. Engineers on the ground, working feverishly around the clock in specially assembled simulators, had to devise an entirely new procedure for filtering carbon dioxide from the crew's rapidly deteriorating air supply, using nothing more than the limited, mismatched materials the astronauts actually had physically available aboard their crippled spacecraft — essentially a cardboard box, some plastic bags, and generous quantities of duct tape improvised into a functioning, life-saving air filter under conditions no engineer had ever seriously anticipated needing to solve.\n\nIn the decades of careful analysis and reflection that have followed this famous near-catastrophe, engineers and historians alike have identified numerous small decisions, made both before and during the crisis, that collectively determined whether the crew ultimately lived or died. Some of these decisions, made hastily and under enormous pressure, could easily have gone differently, with catastrophic consequences; the astronauts and ground crew alike often reflected afterwards on how narrowly, and how precariously, disaster had actually been averted.\n\nWhat is particularly striking, looking back with the considerable benefit of hindsight, is how many of the safety margins and redundant backup systems that ultimately made survival possible had themselves been added to the spacecraft's original design only after earlier, less dramatic near-misses and technical scares during previous missions. Engineers, it turned out, had learned important and sometimes painful lessons from smaller problems on other flights, and had insisted, sometimes against real institutional and budgetary resistance, on building in redundancy that some managers at the time had privately regarded as unnecessary, wasteful and overly cautious given the additional cost and design complexity involved.\n\nThe mission's near-disastrous failure, and its ultimately successful, triumphant resolution, has since become a celebrated case study, still taught decades later, in exactly how complex, high-stakes engineering systems should be thoughtfully designed and managed: not merely by optimising confidently for the most likely, expected scenario, but by deliberately building in genuine resilience against the unexpected, the improbable and the genuinely catastrophic. The astronauts survived not because nothing whatsoever went wrong — something clearly, dramatically did — but because enough careful, forward-thinking people had insisted, often at real professional cost to themselves, on preparing seriously for exactly the kind of failure that everyone else involved had sincerely hoped, and genuinely expected, would never actually happen.",
        q: [
          mc("What happened during the voyage?", ["Nothing unusual.", "An explosion tore through an oxygen tank.", "The spacecraft landed early.", "A minor delay occurred."], 1, "'an explosion tore through one of the spacecraft's oxygen tanks'."),
          mc("What ultimately saved the crew?", ["Luck alone.", "Sustained, methodical engineering improvisation under pressure.", "A single heroic act.", "Advanced AI."], 1, "'an extraordinary, sustained collective effort of calm, methodical… engineering improvisation'."),
          mc("What materials were used to build the air filter?", ["High-tech equipment.", "A cardboard box, plastic bags and duct tape.", "Spare parts from Earth.", "Nothing available."], 1, "'a cardboard box, some plastic bags, and generous quantities of duct tape'."),
          mc("Where did many of the safety margins that saved the crew come from?", ["Pure luck.", "Lessons learned from earlier, less dramatic near-misses on other flights.", "New technology.", "The astronauts themselves."], 1, "'had themselves been added… only after earlier, less dramatic near-misses… during previous missions'."),
          mc("How had some managers regarded this extra redundancy at the time?", ["Essential.", "Unnecessary, wasteful and overly cautious.", "Insufficient.", "Standard practice."], 1, "'some managers at the time had privately regarded as unnecessary, wasteful and overly cautious'."),
          mc("What lesson does the mission teach about engineering design, according to the writer?", ["Optimise only for the likely scenario.", "Build in resilience against the unexpected and catastrophic.", "Avoid redundancy to save costs.", "Trust luck over preparation."], 1, "'not merely by optimising confidently for the most likely… scenario, but by deliberately building in genuine resilience'."),
        ],
      },
      p6: {
        title: "Should we colonise other planets?",
        intro: "Cuatro personas debaten si deberíamos colonizar otros planetas.",
        texts: {
          A: "NADIA: I find the whole colonisation project a strange kind of escapism. We can't even manage our own planet responsibly, yet somehow we're meant to believe we'll do better on Mars? The vast resources this would require would be far better spent fixing the genuinely urgent problems we already have right here at home, on the one planet we actually know supports life.",
          B: "TOM: I understand that instinct, but I'd argue it's not really an either-or choice at all. Space exploration has repeatedly produced technologies with real, practical benefits back here on Earth, and having a genuine backup plan for our species, however distant and speculative it currently seems, strikes me as basic, prudent long-term risk management, not wasteful escapism.",
          C: "PRIYA: What worries me most isn't really the cost, but the entirely predictable inequality of it all. Realistically, colonising other worlds will initially be accessible only to the extremely wealthy few. I can easily imagine a genuinely troubling future where the privileged simply leave a ruined Earth behind for everyone else, rather than staying to fix it properly.",
          D: "SAM: I'm drawn to the pure, almost childlike wonder of it, honestly, separate from any careful cost-benefit calculation. Human beings have always explored, right from our earliest history; it's arguably part of what defines us as a species. I don't think every single human endeavour needs a tidy, fully justified practical rationale to genuinely matter and be worth pursuing.",
        },
        q: [
          mc("Who sees colonisation mainly as a form of escapism from Earth's problems?", ["A", "B", "C", "D"], 0, "Nadia: 'a strange kind of escapism'."),
          mc("Whose view most directly CHALLENGES Nadia's framing as either-or?", ["A", "B", "C", "D"], 1, "Tom: 'it's not really an either-or choice at all'."),
          mc("Who worries most about inequality of access to colonisation?", ["A", "B", "C", "D"], 2, "Priya: 'the entirely predictable inequality of it all'."),
          mc("Who is drawn to the wonder of exploration regardless of practical justification?", ["A", "B", "C", "D"], 3, "Sam: 'the pure, almost childlike wonder of it… separate from any careful cost-benefit calculation'."),
        ],
      },
      p7: {
        title: "The overview effect",
        text: "Astronauts who have travelled to space and looked back at Earth from orbit frequently report an experience so profound and disorienting that researchers have given it a specific name. (1)___\n\nThey call it the 'overview effect': a sudden, overwhelming cognitive shift in awareness that occurs when someone sees, with their own eyes for the first time, the whole Earth suspended in the vast blackness of space. (2)___ National borders, so fiercely defended and fought over below, become entirely invisible from that particular vantage point.\n\nMany astronauts describe the experience as genuinely, unexpectedly life-changing. (3)___ They return to Earth with a transformed, often deeply emotional sense of the planet's fragility and the essential, undeniable unity of humanity as a single species sharing one small home.\n\nWhat makes this phenomenon so scientifically interesting is how consistently it seems to occur across wildly different individuals. (4)___ Astronauts from vastly different nations, cultures, religious backgrounds and political persuasions report remarkably, strikingly similar transformative experiences.\n\nSome researchers now argue that we should actively try to cultivate something like this perspective-shifting effect in the wider population, without requiring the enormous cost of an actual space mission. (5)___ Virtual reality simulations, high-altitude photography and other technologies might potentially offer at least some meaningful approximation of the same profound shift.\n\nWhether such artificial substitutes could ever fully replicate the genuine, embodied power of the real experience remains, for now, a genuinely open question. (6)___ But the underlying insight — that literally changing our vantage point can profoundly change our thinking — seems well worth taking seriously regardless.",
        options: [
          "This shift has come to be known by its own particular name.",     // A -> gap 1
          "Seen from up there, the planet looks like a single, fragile whole.", // B -> gap 2
          "Many say they were never quite the same again afterwards.",       // C -> gap 3
          "The pattern holds remarkably steady across very different people.", // D -> gap 4
          "Researchers wonder if the shift could be induced more cheaply.",   // E -> gap 5
          "Early evidence on this question remains genuinely inconclusive.",  // F -> gap 6
          "No astronaut has ever reported any change in perspective at all.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el cambio tiene un nombre propio."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: visto desde arriba, un todo frágil."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: nunca volvieron a ser los mismos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el patrón se repite entre personas distintas."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: inducirlo de forma más barata."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la evidencia sigue siendo poco concluyente."),
        ],
      },
      p8: {
        title: "Four astronauts reflect on their missions",
        text: "Read what four astronauts say about their experience in space.\n\nA) NADIA: I must have looked at Earth from the window a hundred times during training simulations, but nothing, honestly nothing, prepared me for the real thing. Photographs simply can't capture it. I came back a genuinely different person — more patient, less easily bothered by things that had seemed enormous before, oddly more grateful for ordinary, everyday life back home.\n\nB) TOM: What surprised me most, if I'm honest, was the sheer tedium of parts of it. People imagine constant excitement, but there's also a great deal of routine, repetitive maintenance work, and long stretches of genuine boredom. We probably should have been better mentally prepared for that particular aspect specifically; the training focused heavily on emergencies and barely touched on the psychology of prolonged monotony.\n\nC) PRIYA: I spent six months aboard the space station, and the thing I still think about most, even now, is the silence. Not literal silence — there's always machinery humming somewhere nearby — but the psychological distance from Earth. You can't just call home whenever you feel like it; there's a real, physical remoteness that no video call, however good the connection, can ever quite bridge.\n\nD) SAM: For me it was fear, mostly, especially during our one genuine emergency. We shouldn't have ignored an early warning sign, in hindsight — it later turned out to be significant, and we simply didn't have all the necessary data at the time to properly interpret it. We got through it safely in the end, but it taught me real, lasting humility about how much can still go quietly wrong up there.\n",
        q: [
          mc("Who says photographs simply can't capture the real experience?", ["A", "B", "C", "D"], 0, "Nadia: 'Photographs simply can't capture it'."),
          mc("Who was surprised by the sheer tedium of parts of the mission?", ["A", "B", "C", "D"], 1, "Tom: 'the sheer tedium of parts of it'."),
          mc("Who reflects most on the psychological distance and silence?", ["A", "B", "C", "D"], 2, "Priya: 'the thing I still think about most… is the silence… the psychological distance'."),
          mc("Who experienced a genuine emergency involving an ignored warning sign?", ["A", "B", "C", "D"], 3, "Sam: 'We shouldn't have ignored an early warning sign'."),
          mc("Who came back more patient and grateful for ordinary life?", ["A", "B", "C", "D"], 0, "Nadia: 'more patient… oddly more grateful for ordinary, everyday life'."),
          mc("Who says training barely touched on the psychology of monotony?", ["A", "B", "C", "D"], 1, "Tom: 'the training… barely touched on the psychology of prolonged monotony'."),
          mc("Who says no video call can bridge the physical remoteness?", ["A", "B", "C", "D"], 2, "Priya: 'no video call, however good the connection, can ever quite bridge'."),
          mc("Who learned lasting humility about how much can go wrong?", ["A", "B", "C", "D"], 3, "Sam: 'it taught me real, lasting humility about how much can still go quietly wrong'."),
          mc("Who spent six months aboard a space station?", ["A", "B", "C", "D"], 2, "Priya: 'I spent six months aboard the space station'."),
          mc("Who says they simply didn't have enough data at the time?", ["A", "B", "C", "D"], 3, "Sam: 'we simply didn't have all the necessary data at the time'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la exploración espacial se plantearon dos ideas:\n· space exploration is a wasteful distraction from Earth's problems (una distracción costosa)\n· space exploration brings essential long-term benefits (aporta beneficios esenciales)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos un modal de deducción o crítica retrospectiva (must have, should have, needn't have…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· RESEÑA de un documental o película sobre el espacio que hayas visto: descríbela y valórala.\n· ARTÍCULO: 'What I would take with me to Mars' — reflexiona con imaginación sobre la colonización espacial.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Elena y David, sobre la exploración espacial (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Elena and David, discussing space exploration. Elena: David, you've spent years working on Mars mission planning. Do you honestly think we'll get there in your lifetime? Elena: I probably shouldn't be so confident, given how many times the timeline has already slipped, but yes, I genuinely think so. The engineering challenges are enormous, but they're not, in my professional view, fundamentally impossible. David: What worries you most about it? Elena: Radiation exposure, mainly. We can't fully protect astronauts on a journey that long with our current technology, and that's a problem we absolutely must solve before we send anyone. David: Could the mission have happened sooner, do you think, with more funding? Elena: Almost certainly, yes. We needn't have lost as much time as we did on false starts and cancelled programmes if political will had been more consistent over the decades. David: Is it worth the cost, in your view? Elena: I think so, genuinely. Critics say we should have fixed Earth's problems first, and I understand that instinct completely, but I don't see it as either-or. The same research often drives real, tangible improvements here at home too. David: What would success actually look like to you, personally? Elena: Honestly? Just returning everyone safely. Anything beyond that is a genuine bonus.", [
      mc("1. How confident is Elena about reaching Mars in her lifetime?", ["Not at all.", "Genuinely confident, despite past delays.", "Completely certain."], 1, "'yes, I genuinely think so'."),
      mc("2. What worries Elena most?", ["Cost.", "Radiation exposure.", "Public opinion."], 1, "'Radiation exposure, mainly'."),
      mc("3. What does she say about current technology and radiation?", ["It's solved.", "We can't fully protect astronauts with current technology.", "It's not a real risk."], 1, "'We can't fully protect astronauts… with our current technology'."),
      mc("4. Could the mission have happened sooner?", ["No.", "Almost certainly, with more consistent funding and political will.", "It's already happened."], 1, "'Almost certainly, yes… if political will had been more consistent'."),
      mc("5. How does Elena respond to critics who say Earth should come first?", ["She agrees completely.", "She understands but doesn't see it as either-or.", "She dismisses them."], 1, "'I don't see it as either-or'."),
      mc("6. What would success look like to Elena personally?", ["Fame.", "Returning everyone safely.", "Colonising Mars fully."], 1, "'Just returning everyone safely'."),
    ]),

    ...speakingParts({ p1: "qué te fascina o te preocupa de la exploración espacial y si te gustaría viajar al espacio", p2: "dos imágenes del espacio (un astronauta mirando la Tierra desde la órbita y un telescopio observando estrellas lejanas): compáralas y especula sobre lo que sienten los astronautas y científicos", p3: "qué debería priorizarse en la exploración espacial (buscar vida extraterrestre, colonizar otros planetas, desarrollar tecnología útil en la Tierra, proteger el planeta primero, la cooperación internacional): comentadlo y elegid lo más importante", p4: "la exploración espacial: si merece la pena el coste, si deberíamos colonizar otros planetas y qué nos dice sobre nosotros mismos como especie" }),

    SUMMARY("Resumen del Día 13", [
      "Deducción presente: must (seguro) > should/ought to (probable) > may/might/could (posible) > can't (imposible).",
      "Deducción pasada: modal + have + participio. Crítica retrospectiva: should have (omisión), shouldn't have (error cometido), needn't have (esfuerzo innecesario), could have (posibilidad no realizada).",
      "Vocabulario del espacio. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 14", "Escribe 8 frases usando distintos modales de deducción y crítica retrospectiva. Repasa las flashcards. Mañana: la voz pasiva avanzada y el causativo."),
  ],
};

// ───────────────────────── DÍA 14 ─────────────────────────
const DAY14 = {
  title: "Día 14 — La voz pasiva avanzada y el causativo · La medicina y la biotecnología",
  description: "Pasiva con verbos de dos objetos; pasiva de verbos de percepción/reporte (is said/believed/thought to); causativo have/get sth done y have sb do sth; pasiva con modales perfectos. Vocabulario de medicina y biotecnología. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Dominar los usos avanzados de la pasiva y el causativo en registro formal/académico.",
    summary: "Pasiva avanzada; causativo; medicina y biotecnología; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["pasiva de verbos con dos objetos: elegir mal cuál se convierte en sujeto.", "confundir 'have sth done' (encargar) con 'have sb do sth' (mandar/pedir a alguien).", "olvidar 'to be' en la pasiva impersonal de reporte (is believed TO BE)."],
    reviewPrompts: ["¿Cómo pasas 'They gave the patient a new drug' a pasiva (dos formas)?", "¿Qué diferencia hay entre 'I had the nurse take my blood' y 'I had my blood taken'?"],
  },
  items: [
    TEXT("🔁 Ayer, los modales de deducción. Hoy la VOZ PASIVA AVANZADA y el CAUSATIVO: recursos clave del registro académico y formal. Vocabulario: la MEDICINA y la BIOTECNOLOGÍA."),
    GRAMMAR("La voz pasiva avanzada y el causativo", `PASIVA CON VERBOS DE DOS OBJETOS (give, offer, tell, show, send…): pueden convertirse en pasiva de DOS formas.
· They gave the patient a new drug. → The patient was given a new drug. (más natural) / A new drug was given to the patient.
PASIVA IMPERSONAL DE PERCEPCIÓN/REPORTE (is said/believed/thought/known/reported/considered + to + inf.): para atribuir una opinión sin decir quién la tiene.
· People believe the treatment works. → The treatment is believed to work. / It is believed that the treatment works.
· People say she discovered it. → She is said to have discovered it. (con to have + participio si es ANTERIOR).
PASIVA CON MODALES (incl. perfectos): The data must be verified. The results should have been double-checked. The trial might be cancelled.
CAUSATIVO — HAVE/GET + OBJETO + PARTICIPIO (encargar que ALGUIEN haga algo POR ti): I had my blood tested. She got the results reviewed by a specialist.
CAUSATIVO — HAVE + PERSONA + INFINITIVO SIN TO (hacer que alguien haga algo, más activo/directo): The doctor had the nurse prepare the equipment. I'll have my assistant call you.
⚠️ 'have sth done' = alguien lo hace POR ti (pasivo); 'have sb do sth' = tú ORDENAS/PIDES que alguien lo haga (activo).`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ It is believed the treatment works → mejor: The treatment IS BELIEVED TO WORK (más natural en C1) o It is believed THAT the treatment works.\n· ❌ I had my assistant to call → ✅ I had my assistant CALL (sin 'to').\n· ❌ I had cut my hair (ambiguo: ¿lo hiciste tú o te lo hicieron?) → ✅ I had my hair cut (te lo hicieron).\n· Pasiva de dos objetos: prioriza a la PERSONA como sujeto si es posible (más natural): The patient was given…"),
    grammarEx("Use of English — Pasiva avanzada y causativo", "Transforma o completa.", [
      mc("Active: 'They gave the patient a new drug.' Most natural passive:", ["The patient was given a new drug.", "A new drug was given.", "It was given a new drug to the patient."], 0, "pasiva con la persona como sujeto."),
      mc("'People believe the vaccine is effective.' → The vaccine ___ effective.", ["is believed to be", "is believed be", "believes to be"], 0, "pasiva impersonal de reporte + to be."),
      fb("'People say she discovered the treatment.' → She ___ (say / discover) the treatment. (anterior)", ["is said to have discovered"], "is said to have + participio."),
      mc("She didn't do the test herself; a lab technician did it for her.", ["She had the test done.", "She did the test.", "She had done the test."], 0, "causativo: have sth done."),
      mc("The surgeon told the nurse to prepare the instruments.", ["The surgeon had the nurse prepare the instruments.", "The surgeon had the nurse to prepare.", "The surgeon was had by the nurse."], 0, "causativo: have sb do sth."),
      fb("The results ___ (should / double-check) before publication. (pasiva con modal perfecto)", ["should have been double-checked"], "pasiva con modal perfecto."),
      mc("The disease ___ to have originated in animals.", ["is thought", "is think", "thinks"], 0, "pasiva de reporte + to have + participio."),
    ]),
    GRAMMAR("Vocabulario del día — La medicina y la biotecnología (C1)", "Léxico avanzado de medicina."),
    deck("C1 S3D14 — Medicina y biotecnología", [
      ["clinical trial", "ensayo clínico", "The drug is in clinical trials.", "sustantivo", "ˈklɪnɪkl ˈtraɪəl"],
      ["diagnosis", "diagnóstico", "An early diagnosis saves lives.", "sustantivo", "ˌdaɪəɡˈnəʊsɪs"],
      ["vaccine", "vacuna", "The vaccine was developed rapidly.", "sustantivo", "ˈvæksiːn"],
      ["side effect", "efecto secundario", "The drug has mild side effects.", "sustantivo", "ˈsaɪd ɪˌfekt"],
      ["gene therapy", "terapia génica", "Gene therapy treats genetic disorders.", "sustantivo", "dʒiːn ˈθerəpi"],
      ["remission", "remisión (de una enfermedad)", "The cancer is now in remission.", "sustantivo", "rɪˈmɪʃn"],
      ["stem cell", "célula madre", "Stem cell research shows promise.", "sustantivo", "ˈstem sel"],
      ["prescribe", "recetar / prescribir", "The doctor prescribed antibiotics.", "verbo", "prɪˈskraɪb"],
      ["invasive", "invasivo/a (procedimiento)", "The surgery was minimally invasive.", "adjetivo", "ɪnˈveɪsɪv"],
      ["prognosis", "pronóstico (médico)", "The prognosis is generally good.", "sustantivo", "prɒɡˈnəʊsɪs"],
    ]),
    vocabEx("Vocabulario — La medicina y la biotecnología", "Elige la opción correcta.", [
      mc("A research study testing a new treatment on people is a ___.", ["clinical trial", "diagnosis", "prognosis"], 0, "clinical trial."),
      mc("An unwanted additional effect of a drug is a ___.", ["side effect", "remission", "vaccine"], 0, "side effect."),
      mc("The identification of an illness is a ___.", ["diagnosis", "prognosis", "remission"], 0, "diagnosis."),
      mc("The period when a disease is under control or gone is ___.", ["remission", "diagnosis", "side effect"], 0, "remission."),
      mc("To officially recommend a medicine is to ___ it.", ["prescribe", "diagnose", "vaccinate"], 0, "prescribe."),
      mc("A prediction of how an illness will develop is a ___.", ["prognosis", "diagnosis", "remission"], 0, "prognosis."),
    ]),

    ...uoe({
      p1: {
        title: "The gene-editing revolution",
        text: "A technique that allows scientists to edit DNA with unprecedented (1)___ has, within little more than a decade, transformed what was once painstakingly slow and expensive genetic research into something remarkably (2)___ and affordable. Diseases that were once considered entirely (3)___ — certain inherited blood disorders, for instance — can now, in carefully controlled clinical trials, be effectively treated by directly correcting the underlying genetic mutation responsible. Patients who had spent years enduring painful, repeated treatments have been (4)___, in several documented cases, to live essentially symptom-free lives following a single successful gene-editing procedure. The technology is not, however, without its genuine (5)___. Editing genes in ways that could potentially be passed down to future generations raises profound ethical questions that society has, arguably, not yet fully (6)___ to grapple with responsibly. There is also the very real concern that such treatments, at least initially, will remain accessible only to the wealthy, potentially (7)___ existing healthcare inequalities rather than reducing them. Scientists working in the field remain broadly (8)___ that the benefits, used responsibly and with proper oversight, will ultimately outweigh the risks — though they are, almost without exception, equally insistent that careful, ongoing regulation must accompany every single step of this remarkable and still rapidly developing technology.",
        q: [
          mc("(1)", ["precision", "accuracy", "exactness", "detail"], 0, "'edit DNA with unprecedented precision'."),
          mc("(2)", ["routine", "ordinary", "standard", "usual"], 0, "'remarkably routine'."),
          mc("(3)", ["incurable", "untreatable", "hopeless", "terminal"], 0, "'entirely incurable'."),
          mc("(4)", ["enabled", "allowed", "permitted", "able"], 0, "'have been enabled… to live'."),
          mc("(5)", ["controversies", "problems", "issues", "concerns"], 0, "'its genuine controversies'."),
          mc("(6)", ["managed", "found", "come", "begun"], 0, "'not yet fully managed to grapple with'."),
          mc("(7)", ["worsening", "increasing", "deepening", "widening"], 3, "'potentially widening existing… inequalities'."),
          mc("(8)", ["confident", "certain", "sure", "convinced"], 0, "'broadly confident that'."),
        ],
      },
      p2: {
        title: "The placebo puzzle",
        text: "One of the more genuinely unsettling discoveries in modern medicine is (1)___ effective a fake treatment can sometimes be, purely because a patient sincerely believes it is real. In countless clinical trials, patients given nothing more than an inert sugar pill — believing, crucially, that they have received an actual medication — report measurable improvements in symptoms ranging from chronic pain to depression, improvements that cannot be (2)___ down to the biologically inert substance itself. This is what researchers call the placebo effect, and its power is (3)___ well established that any new drug must now convincingly outperform a placebo before it can be approved for genuine medical use. What makes the phenomenon so genuinely puzzling is that it appears to work even when patients are explicitly (4)___ they are receiving a placebo, provided the treatment ritual itself — the reassuring white coat, the careful clinical examination, the confident tone of voice — remains sufficiently convincing and consistent. This suggests that a meaningful part of healing itself may be (5)___ psychological and social factors we do not yet fully understand, rather than purely biochemical processes occurring within the body. Some researchers now argue that doctors should deliberately harness this effect more consciously, ensuring that every genuine medical treatment is (6)___ by exactly the kind of confident, reassuring ritual that seems to measurably amplify its effectiveness. Others worry this shades uncomfortably close to a form of medical deception, however well-intentioned the underlying motive genuinely is. What nobody seriously disputes, however, is that the mind's influence over the body's own healing processes is (7)___ more powerful, and more scientifically real, than medicine has traditionally been willing to (8)___.",
        q: [
          fb("(1)", ["how"], "'how effective a fake treatment'."),
          fb("(2)", ["put", "chalked"], "'cannot be put down to'."),
          fb("(3)", ["so"], "'its power is so well established'."),
          fb("(4)", ["told"], "'explicitly told they are receiving'."),
          fb("(5)", ["about", "down to"], "'may be about/down to psychological… factors'."),
          fb("(6)", ["accompanied"], "'accompanied by… ritual'."),
          fb("(7)", ["far", "considerably"], "'far more powerful'."),
          fb("(8)", ["acknowledge", "admit"], "'medicine has traditionally been willing to acknowledge'."),
        ],
      },
      p3: {
        title: "Manufacturing organs",
        text: "For decades, patients requiring an organ transplant have faced an agonising, often (1)___ wait, entirely dependent on the availability of a genetically compatible donor organ. Thousands die every year on waiting lists, their names never (2)___ to the top in time. A rapidly advancing field of biotechnology now promises, within a plausible future timeframe, to make this cruel scarcity a thing of the past entirely. Researchers have already succeeded in growing simplified, functioning tissue structures in laboratory conditions, using a patient's own cells to avoid the serious risk of (3)___ rejection that currently plagues even successful conventional transplants. The ultimate, still distant goal is considerably more (4)___: fully functioning, transplantable organs — hearts, kidneys, livers — grown to order, precisely matched to each individual patient, eliminating both the desperate wait and the ongoing need for powerful, often (5)___ immunosuppressant drugs. The scientific and engineering obstacles remaining are still (6)___, and few serious researchers expect fully complex organs to be routinely available for many years yet. But the underlying scientific principle has already been convincingly demonstrated, and progress in the field has been, by most careful measures, remarkably (7)___. Should this technology eventually be perfected and made widely available, it would represent one of the most (8)___ transformations in the entire history of medicine, fundamentally rewriting our basic assumptions about mortality, organ failure and the very limits of what the human body can be made to endure and overcome.",
        items: [
          { root: "end", accepted: ["endless"], hint: "'an agonising, often endless wait' → endless." },
          { root: "rise", accepted: ["rising"], hint: "'their names never rising to the top' → rising." },
          { root: "immune", accepted: ["immune"], hint: "'the risk of immune rejection' (adjetivo)." },
          { root: "ambition", accepted: ["ambitious"], hint: "'considerably more ambitious' → ambitious." },
          { root: "harm", accepted: ["harmful"], hint: "'often harmful immunosuppressant drugs' → harmful." },
          { root: "substance", accepted: ["substantial"], hint: "'still substantial' → substantial." },
          { root: "rapid", accepted: ["rapid"], hint: "'remarkably rapid' (adjetivo)." },
          { root: "consequence", accepted: ["consequential"], hint: "'one of the most consequential transformations' → consequential." },
        ],
      },
      p4: {
        title: "Transformaciones — pasiva avanzada y causativo",
        items: [
          { s1: "They gave every patient a detailed information leaflet.", key: "GIVEN", s2: "Every patient ___ a detailed information leaflet.", accepted: ["was given"], explanation: "pasiva de dos objetos (persona como sujeto)." },
          { s1: "People believe the treatment reduces symptoms significantly.", key: "BELIEVED", s2: "The treatment ___ symptoms significantly.", accepted: ["is believed to reduce"], explanation: "pasiva impersonal de reporte + to." },
          { s1: "A specialist reviewed her test results for her.", key: "HAD", s2: "She ___ by a specialist.", accepted: ["had her test results reviewed"], explanation: "causativo: have sth done." },
          { s1: "The surgeon told the assistant to sterilise the equipment.", key: "HAD", s2: "The surgeon ___ the equipment.", accepted: ["had the assistant sterilise"], explanation: "causativo: have sb do sth." },
          { s1: "It's essential that the data is verified before publication.", key: "MUST", s2: "The data ___ before publication.", accepted: ["must be verified"], explanation: "pasiva con modal." },
          { s1: "People say the disease originated in a specific region.", key: "SAID", s2: "The disease ___ in a specific region.", accepted: ["is said to have originated"], explanation: "pasiva de reporte + to have + participio." },
        ],
      },
      p5: {
        title: "The patient who refused to wait",
        text: "When doctors told a young woman that her rare genetic disorder had no approved treatment and that existing clinical trials would likely take years to become available to patients like her, if indeed they ever did at all, she made a decision that would eventually transform not just her own life but the entire regulatory framework governing experimental medicine in her country. Rather than passively accepting what felt to her like an effective death sentence dressed up in cautious, carefully hedged medical language, she began, systematically and with remarkable persistence, to research every single experimental treatment being developed anywhere in the world for her specific condition.\n\nWhat she discovered, buried in obscure academic journals and largely unpublicized research databases, was a promising experimental gene therapy being cautiously tested in early-stage trials on a small handful of patients in a country on the other side of the world. The treatment had not yet been approved for use in her own country, and under existing regulations, she had no legal way whatsoever to access it through conventional, officially sanctioned channels. Doctors in her own country were, quite understandably given professional liability concerns, reluctant to even discuss the option seriously with her.\n\nUndeterred, she spent the following eighteen months mounting an extraordinarily determined, multi-pronged campaign: petitioning international regulatory bodies directly, raising substantial funds through public crowdfunding to cover the enormous costs involved, and eventually persuading, through sheer persistence and detailed correspondence, the foreign research team to accept her as an additional, carefully monitored patient in their ongoing trial, despite her being a foreign national with no formal, pre-existing connection to their specific research programme.\n\nThe treatment, when she finally received it after this exhausting campaign, proved remarkably successful, dramatically improving her condition in ways that exceeded even the treating doctors' own cautiously stated expectations. Her case, extensively covered afterwards in both mainstream and medical press, drew widespread public and professional attention to the genuinely difficult, sometimes agonising plight of so-called 'medical refugees' — patients desperate enough to travel internationally, at very considerable personal expense and legal risk, purely in pursuit of treatments not yet available or fully approved in their own home countries.\n\nHer very public, well-documented case is now regularly cited by patient advocacy groups pressing for faster, more streamlined and more internationally coordinated approval processes for genuinely promising experimental treatments, particularly for patients with rare conditions for whom time, quite literally, may be running out while regulators deliberate cautiously. Regulators, for their own part, must constantly weigh the very real dangers of approving treatments before they have been fully, rigorously tested against the equally real, equally serious human cost of excessive caution and unnecessary bureaucratic delay for patients who, like her, may simply not have years to spare while waiting for the ordinary, conventional process to run its full and cautious course.",
        q: [
          mc("What were the young woman initially told about her condition?", ["It was curable.", "There was no approved treatment, and trials would likely take years to reach her.", "It wasn't serious.", "Treatment was immediately available."], 1, "'no approved treatment and that existing clinical trials would likely take years'."),
          mc("What did she do instead of accepting this?", ["Gave up.", "Systematically researched every experimental treatment worldwide for her condition.", "Sued the doctors.", "Moved abroad immediately."], 1, "'began… to research every single experimental treatment being developed anywhere in the world'."),
          mc("What obstacle did she face in accessing the foreign trial?", ["No obstacle.", "No legal way to access it, and doctors were reluctant to discuss it.", "It was too expensive to consider.", "The trial was closed."], 1, "'she had no legal way whatsoever to access it… doctors… were… reluctant to even discuss the option'."),
          mc("How did she eventually gain access to the treatment?", ["By luck.", "Through petitioning, crowdfunding, and persuading the foreign research team directly.", "Through her government.", "She didn't gain access."], 1, "'petitioning international regulatory bodies directly, raising substantial funds… and eventually persuading… the foreign research team'."),
          mc("What did her case draw attention to?", ["Nothing significant.", "The plight of 'medical refugees' seeking treatments unavailable at home.", "Fraud in medical research.", "The cost of healthcare generally."], 1, "'the genuinely difficult… plight of so-called \"medical refugees\"'."),
          mc("What tension does the case illustrate for regulators?", ["None.", "Weighing dangers of premature approval against costs of excessive caution and delay.", "Only cost concerns.", "Only legal concerns."], 1, "'must constantly weigh the very real dangers of approving treatments… against the equally real… human cost of excessive caution'."),
        ],
      },
      p6: {
        title: "Should experimental treatments be available faster?",
        intro: "Cuatro personas opinan sobre si los tratamientos experimentales deberían aprobarse más rápido.",
        texts: {
          A: "NADIA: For patients with terminal or severely degenerative conditions, I think the calculation is fairly straightforward: what exactly is there realistically left to lose? Years of cautious, methodical testing make excellent sense for most drugs, but for someone genuinely running out of time, faster, more provisional access to promising experimental treatments seems like basic, straightforward compassion, not recklessness.",
          B: "TOM: I sympathise deeply with that instinct, but I worry it dangerously underestimates the real risks involved. Untested treatments can cause serious, unexpected harm, sometimes actively hastening death rather than delaying it. Rigorous testing exists precisely to protect vulnerable, desperate patients from well-meaning but potentially exploitative treatments that ultimately do more harm than good.",
          C: "PRIYA: What concerns me most is less the principle involved and more the practical, real-world equity of it all. If we do loosen approval processes, will genuinely equal access actually follow for everyone, or will it predictably be the wealthy and well-connected, like the woman in that case, who get early access while everyone else continues waiting exactly as before?",
          D: "SAM: My honest view is that the real solution here isn't faster approval as such, but rather far better, more transparent and more standardised expanded-access programmes — clear, well-defined pathways for patients to access genuinely promising experimental treatments under proper, careful medical supervision, without requiring the extraordinary, exhausting individual effort that case clearly demanded of her.",
        },
        q: [
          mc("Who argues faster access is basic compassion for terminal patients?", ["A", "B", "C", "D"], 0, "Nadia: 'faster, more provisional access… seems like basic, straightforward compassion'."),
          mc("Whose view most directly WARNS against Nadia's position, citing real risks?", ["A", "B", "C", "D"], 1, "Tom: 'Untested treatments can cause serious, unexpected harm'."),
          mc("Who focuses on whether equal access would actually follow?", ["A", "B", "C", "D"], 2, "Priya: 'will genuinely equal access actually follow for everyone'."),
          mc("Who proposes better standardised expanded-access programmes as the real solution?", ["A", "B", "C", "D"], 3, "Sam: 'far better, more transparent and more standardised expanded-access programmes'."),
        ],
      },
      p7: {
        title: "The doctor who listens",
        text: "Medical training, for most of its modern history, has emphasised technical mastery above almost everything else: anatomy, pharmacology, diagnostic procedure. (1)___\n\nWhat has often received comparatively little formal, structured attention is a skill that patients themselves consistently rate as equally, if not more, important: the simple, deceptively difficult ability to genuinely listen. (2)___ Studies suggest doctors frequently interrupt patients within the first few seconds of them beginning to describe their symptoms.\n\nThis matters more than it might initially appear to a busy clinician working under real time pressure. (3)___ Patients who feel they have been properly, attentively heard report significantly higher satisfaction, better treatment adherence, and sometimes even measurably better clinical outcomes overall.\n\nSome medical schools have begun, in recent years, to take this seriously, incorporating dedicated communication training directly into their formal curricula. (4)___ Students are now taught specific, evidence-based techniques for eliciting a fuller, more accurate patient history without unnecessarily rushing or interrupting.\n\nCritics worry that in an already overstretched healthcare system, this emphasis risks becoming a comforting but ultimately unaffordable luxury. (5)___ Doctors, after all, genuinely cannot spend unlimited time with each individual patient.\n\nProponents respond that better listening, done well, need not actually take significantly longer at all. (6)___ It is less fundamentally a matter of raw time spent than of the specific quality of focused attention given during whatever time is genuinely available.",
        options: [
          "Communication skills, by contrast, were often simply assumed.",     // A -> gap 1
          "The evidence here is not exactly flattering.",                     // B -> gap 2
          "Being heard, it turns out, is not merely a pleasant courtesy.",    // C -> gap 3
          "This training aims to make good listening a teachable skill.",     // D -> gap 4
          "Time, in a stretched system, remains a genuinely scarce resource.", // E -> gap 5
          "The real variable, they argue, is attention, not minutes.",        // F -> gap 6
          "No doctor has ever been accused of interrupting a patient.",       // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: las habilidades de comunicación se daban por hechas."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la evidencia no es halagadora."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: ser escuchado no es solo cortesía."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: enseñar a escuchar bien."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el tiempo es escaso en un sistema saturado."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la variable real es la atención, no los minutos."),
        ],
      },
      p8: {
        title: "Four people discuss their experience with the medical system",
        text: "Read what four people say about their experiences as patients.\n\nA) NADIA: I was misdiagnosed for nearly two years before a specialist finally, correctly, identified what was actually wrong with me. I don't blame any individual doctor exactly — my symptoms genuinely were unusual and hard to pin down. But it taught me, painfully, to advocate much more firmly and persistently for myself, and to seek a proper second opinion whenever something still didn't quite feel right.\n\nB) TOM: What struck me most, going through cancer treatment myself, was how much the human, personal side of care mattered just as much as the purely technical medicine involved. One particular nurse who consistently took the time to properly explain things, and who listened patiently to my genuine fears, honestly made as much real difference to me as any specific drug I was given during the entire treatment.\n\nC) PRIYA: I had to have several tests done privately because the public waiting list was genuinely months long, and I couldn't reasonably wait that long given my specific symptoms. It felt deeply uncomfortable, if I'm honest, essentially paying to jump ahead of others who presumably needed care just as urgently as I did, or perhaps even more so.\n\nD) SAM: My experience was overwhelmingly positive, honestly, and I think we don't hear nearly enough positive stories like mine. My surgeon had a junior colleague explain absolutely everything in plain, clear language before my operation, checked in personally afterwards multiple times, and I never once felt rushed or like just another routine case on an endless list.\n",
        q: [
          mc("Who was misdiagnosed for nearly two years?", ["A", "B", "C", "D"], 0, "Nadia: 'I was misdiagnosed for nearly two years'."),
          mc("Who found the human side of care as important as the technical medicine?", ["A", "B", "C", "D"], 1, "Tom: 'the human, personal side of care mattered just as much'."),
          mc("Who felt uncomfortable paying privately to skip a long waiting list?", ["A", "B", "C", "D"], 2, "Priya: 'essentially paying to jump ahead of others'."),
          mc("Who had an overwhelmingly positive experience and never felt rushed?", ["A", "B", "C", "D"], 3, "Sam: 'never once felt rushed or like just another routine case'."),
          mc("Who learned to advocate more firmly for themselves?", ["A", "B", "C", "D"], 0, "Nadia: 'it taught me… to advocate much more firmly and persistently for myself'."),
          mc("Who credits a nurse for making as much difference as any drug?", ["A", "B", "C", "D"], 1, "Tom: 'made as much real difference to me as any specific drug'."),
          mc("Whose surgeon had a colleague explain everything in plain language?", ["A", "B", "C", "D"], 3, "Sam: 'had a junior colleague explain absolutely everything in plain, clear language'."),
          mc("Who had to pay privately because the public waiting list was too long?", ["A", "B", "C", "D"], 2, "Priya: 'I had to have several tests done privately because the public waiting list was genuinely months long'."),
          mc("Who says we don't hear enough positive stories?", ["A", "B", "C", "D"], 3, "Sam: 'we don't hear nearly enough positive stories like mine'."),
          mc("Who eventually got correctly diagnosed by a specialist?", ["A", "B", "C", "D"], 0, "Nadia: 'a specialist finally, correctly, identified what was actually wrong'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la sanidad se plantearon dos ideas:\n· patients should have faster access to experimental treatments (acceso más rápido a tratamientos experimentales)\n· rigorous testing must always come before approval (las pruebas rigurosas deben ir primero)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos una estructura de PASIVA AVANZADA o CAUSATIVA. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para un hospital sobre cómo mejorar la experiencia del paciente: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'The most important thing a doctor ever did for me' — reflexiona sobre una experiencia médica significativa.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de una experiencia médica significativa (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué les pasó?): A they were part of a clinical trial · B they received a controversial diagnosis · C they had a procedure done privately · D they cared for a sick relative · E they advocated for themselves against medical advice · F they trained as a doctor. TAREA DOS (¿qué aprendieron?): A the value of a second opinion · B the importance of being listened to · C the limits of medical certainty · D the emotional cost of caregiving · E the power of self-advocacy · F the value of empathy in practice.", "This is Part Four. You will hear five people talking about a significant medical experience. Speaker One: I was told my case was hopeless by three separate specialists before a fourth, finally, found a treatment path the others had somehow all overlooked entirely. I nearly gave up looking after the second rejection. Now I always tell people: get a second opinion, and then, if you still have real doubts, get a third. Speaker Two: I spent eighteen months as my mother's primary carer during her illness, and it changed me profoundly, in ways I'm honestly still processing even now. Nobody warns you properly about the sheer, grinding exhaustion of it, both physical and emotional, alongside the genuine love you also feel throughout. Speaker Three: I volunteered for an early-stage trial for a new treatment, mostly because conventional options had already been exhausted for me. It didn't ultimately work for my particular case, but I'd do it again in a heartbeat; medicine only genuinely advances because people like me are willing to take that risk. Speaker Four: What I remember most from medical school, oddly, wasn't any of the technical content at all. It was a professor who told us that patients can usually tell, almost instantly, whether you're truly listening or just impatiently waiting for your turn to speak next. That single lesson has stayed with me my entire subsequent career. Speaker Five: My doctors genuinely disagreed with each other about my exact diagnosis for months, which was honestly terrifying at first. Eventually I came to understand that medicine is nowhere near as precise or certain a science as we generally like to comfortably believe it is.", [
      mc("Speaker 1 — TAREA UNO (qué le pasó)", ["A", "B", "C", "D", "E", "F"], 4, "E: buscó una cuarta opinión, se autodefendió."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 3, "D: cuidó de su madre enferma."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 0, "A: participó en un ensayo clínico."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: se formó como médico/a."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: recibió un diagnóstico controvertido/disputado."),
      mc("Speaker 1 — TAREA DOS (qué aprendió)", ["A", "B", "C", "D", "E", "F"], 0, "A: el valor de una segunda opinión."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: el coste emocional de cuidar a alguien."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 4, "E: el poder de la autodefensa/autoabogacía."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 5, "F: el valor de la empatía en la práctica."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 2, "C: los límites de la certeza médica."),
    ]),

    ...speakingParts({ p1: "qué opinas de los avances médicos recientes y cómo cuidas tu salud", p2: "dos imágenes de la medicina (un laboratorio investigando terapia génica y un médico hablando con un paciente): compáralas y especula sobre su impacto en la vida de las personas", p3: "qué debería priorizarse en la sanidad (la investigación de vanguardia, el acceso equitativo, la atención personalizada, la prevención, la rapidez): comentadlo y elegid lo más importante", p4: "la medicina y la biotecnología: si deberíamos acelerar el acceso a tratamientos experimentales, si la tecnología deshumaniza la medicina y qué papel debería tener la empatía en la atención médica" }),

    SUMMARY("Resumen del Día 14", [
      "Pasiva de dos objetos: prioriza a la persona como sujeto (was given). Pasiva de reporte: is said/believed/thought TO BE / TO HAVE + participio.",
      "Causativo: have/get sth done (encargar) vs have sb do sth (mandar, sin 'to'). Pasiva con modales (incl. perfectos: should have been + participio).",
      "Vocabulario de medicina. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 15", "Escribe 6 frases usando pasiva avanzada o causativo sobre la medicina. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 15 ─────────────────────────
const DAY15 = {
  title: "Día 15 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los condicionales mixtos, wish/as if/it's time, los modales de deducción y crítica retrospectiva, y la pasiva avanzada/causativo. Las 4 destrezas (formato C1); Listening P1. Al final, el mini-simulacro de la Semana 3.",
  pedagogy: {
    objective: "Consolidar toda la hipótesis y especulación del C1 antes de la Semana 4.",
    summary: "Repaso de condicionales/hipótesis/modales/pasiva; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué estructura hipotética te resulta más difícil?", "Repásala antes de la Semana 4 (relativas avanzadas y estilo indirecto)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 3 del C1. Consolidas los CONDICIONALES MIXTOS, WISH/AS IF/IT'S TIME, los MODALES DE DEDUCCIÓN y CRÍTICA RETROSPECTIVA, y la PASIVA AVANZADA/CAUSATIVO. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 3", `1) CONDICIONALES: mixtos (pasado↔presente); alternativas a if (unless, providing, should+inversión, but for, otherwise).
2) HIPÓTESIS: wish/if only (+past/+past perfect/+would); as if/as though (+past/+past perfect); it's (high) time + past; would rather + inf./past.
3) MODALES: deducción presente (must/should/may/might/can't) y pasada (+have+participio); crítica retrospectiva (should have/shouldn't have/needn't have/could have).
4) PASIVA Y CAUSATIVO: pasiva de dos objetos, pasiva de reporte (is said to…), pasiva con modales; causativo have/get sth done vs have sb do sth.`),
    grammarEx("Use of English — Repaso mixto de la Semana 3", "Completa o elige.", [
      mc("If she ___ genetics, she would be a researcher now.", ["studied", "had studied", "would study"], 1, "mixto: pasado→presente."),
      fb("___ any doubts arise, contact the committee. (formal)", ["Should"], "should + inversión."),
      mc("I wish the company ___ more transparent about its data.", ["would be", "were", "is"], 0, "wish + would (queja sobre otros)."),
      fb("It's high time we ___ (establish) clear rules for AI.", ["established"], "it's time + past simple."),
      mc("That claim ___ be true — the evidence contradicts it completely.", ["can't", "must", "should"], 0, "deducción negativa segura → can't."),
      fb("They ___ (should / test) the equipment before launch.", ["should have tested"], "crítica: omisión."),
      mc("The patient ___ a new drug by the specialist.", ["was given", "gave", "was gave"], 0, "pasiva de dos objetos."),
      fb("She ___ (say / discover) the treatment years ago. (anterior)", ["is said to have discovered"], "pasiva de reporte + to have."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 3", "Repasa los mazos (ciencia/ética, IA, espacio, medicina)."),
    vocabEx("Vocabulario — Repaso de la Semana 3", "Elige la opción correcta.", [
      mc("A situation with no easy or clearly right choice:", ["ethical dilemma", "breakthrough", "precedent"], 0, "ethical dilemma."),
      mc("A system operating without human control:", ["autonomous", "sentient", "opaque"], 0, "autonomous."),
      mc("An unmanned spacecraft sent to explore:", ["probe", "orbit", "mission"], 0, "probe."),
      mc("A research study testing a treatment on people:", ["clinical trial", "diagnosis", "prognosis"], 0, "clinical trial."),
      mc("Effects that were not planned or foreseen:", ["unintended consequences", "safeguards", "precedents"], 0, "unintended consequences."),
      mc("Difficult to understand or see clearly:", ["opaque", "sentient", "habitable"], 0, "opaque."),
      mc("The period when a disease is under control:", ["remission", "diagnosis", "prognosis"], 0, "remission."),
      mc("Suitable for living things to survive:", ["habitable", "vast", "autonomous"], 0, "habitable."),
    ]),

    ...uoe({
      p1: {
        title: "The reluctant pioneer",
        text: "History remembers its scientific pioneers as bold, visionary figures, confidently pushing back the frontiers of human knowledge. What it (1)___ forgets is how frequently these same figures were, in reality, profoundly reluctant, deeply anxious about the very implications of the discoveries they themselves had made. Many of the twentieth century's most transformative scientists spent their later years not celebrating their achievements but actively (2)___ against the uses to which those achievements were subsequently put, wishing, often with evident and genuine anguish, that they (3)___ never opened certain doors at all. This reluctant, conflicted pioneer is, in many ways, a far more honest and instructive figure than the confident, swaggering myth of scientific triumph our popular culture generally prefers to celebrate. Should we (4)___ take their genuine anxieties more seriously, rather than dismissing them as merely quaint historical footnotes to an otherwise triumphant story? Perhaps the discomfort these pioneers so evidently felt was not, as it might initially seem, a personal failing or a sign of excessive squeamishness, but rather an entirely appropriate, proportionate response to genuinely possessing knowledge whose full consequences (5)___ have been fully grasped or controlled by anyone, however brilliant. It is precisely this productive discomfort, this reluctance to proceed with unreflective confidence, that arguably (6)___ have been more consistently present throughout the broader, ongoing history of scientific progress. A field entirely populated by confident enthusiasts, with no reluctant, conflicted voices whatsoever urging genuine caution, is perhaps (7)___ dangerous than one that includes, and genuinely listens carefully to, its own most anxious and conflicted pioneers. If only more scientists (8)___ the courage to voice their doubts as openly and honestly as their most celebrated achievements.",
        q: [
          mc("(1)", ["often", "frequently", "regularly", "usually"], 0, "'What it often forgets'."),
          mc("(2)", ["campaigning", "arguing", "warning", "fighting"], 0, "'actively campaigning against'."),
          mc("(3)", ["had", "would have", "could have", "should have"], 0, "'wishing… they had never opened'."),
          mc("(4)", ["not", "instead", "rather", "perhaps"], 0, "'Should we not take… more seriously'."),
          mc("(5)", ["couldn't", "can't", "shouldn't", "mustn't"], 0, "'consequences couldn't have been fully grasped'."),
          mc("(6)", ["should", "would", "could", "might"], 0, "'this productive discomfort… should have been more consistently present'."),
          mc("(7)", ["more", "far more", "considerably more", "much more"], 0, "'perhaps more dangerous'."),
          mc("(8)", ["had", "found", "possessed", "showed"], 0, "'if only more scientists had the courage'."),
        ],
      },
      p2: {
        title: "What we owe the future",
        text: "Every generation makes decisions whose full consequences will (1)___ felt not by themselves but by generations not yet born, who have, quite obviously, no voice whatsoever in the decisions currently being made on their behalf. This raises a genuinely difficult ethical question that philosophers have wrestled (2)___ for decades without reaching anything like full consensus: what, exactly, do we owe to people who do not yet exist, and (3)___ way, if any, can their currently non-existent interests reasonably be weighed against the very real, pressing needs of people alive right now, today? Some argue that future generations deserve essentially the (4)___ moral consideration as those currently living, since the mere accident of not yet having been born seems like a fundamentally arbitrary basis (5)___ which to discount someone's interests or wellbeing. Others counter that we simply cannot reasonably be expected to sacrifice genuinely urgent present needs for the sake of merely hypothetical future people whose actual preferences, values and circumstances we cannot possibly know with any real confidence or precision. What seems clear, whichever position one ultimately finds more persuasive, is that certain decisions — those involving genuinely irreversible, catastrophic harm, for instance — carry an especially heavy weight precisely (6)___ they permanently foreclose options and possibilities for everyone who comes meaningfully after us. It's high time we (7)___ this question with the full philosophical and practical seriousness it clearly deserves, rather than continuing to treat the interests of the unborn as simply too abstract and distant to matter (8)___ any real, practical way in today's difficult, consequential decisions.",
        q: [
          fb("(1)", ["be"], "'will be felt'."),
          fb("(2)", ["with"], "'wrestled with for decades'."),
          fb("(3)", ["what", "in what"], "'in what way'."),
          fb("(4)", ["same"], "'essentially the same moral consideration'."),
          fb("(5)", ["on", "upon"], "'a basis on which to discount'."),
          fb("(6)", ["because"], "'precisely because they permanently foreclose'."),
          fb("(7)", ["treated", "approached"], "'we treated this question with… seriousness'."),
          fb("(8)", ["in"], "'to matter in any real… way'."),
        ],
      },
      p3: {
        title: "The uncomfortable virtue of doubt",
        text: "In an age that prizes (1)___ and decisiveness above almost every other intellectual virtue, doubt has acquired something of a genuinely bad reputation. To express uncertainty, especially in public life, is widely (2)___ as a sign of weakness, indecision, or a troubling lack of proper leadership. And yet, in any field genuinely committed to rigorous, honest inquiry — science prominent among them — the capacity for sustained, disciplined doubt is not a weakness at all but among the very highest intellectual virtues one can possess. The scientist who never doubts their own carefully cherished theories, who never seriously entertains the genuine possibility they might be fundamentally wrong, has (3)___ ceased doing real science and begun doing something considerably closer to dogma or unreflective faith. Doubt, properly and rigorously disciplined, is precisely what drives careful, honest researchers to test their own most cherished assumptions repeatedly, to actively seek out disconfirming evidence rather than comfortably ignoring it, and to hold their (4)___ conclusions with appropriate, well-calibrated humility rather than false, premature certainty. This does not mean, of course, that all doubt is equally (5)___ or equally productive; some doubt is merely obstructive, wielded cynically to avoid ever reaching any conclusion or taking any meaningful action whatsoever. But the particular kind of doubt that keeps inquiry honestly open, that resists the powerfully seductive comfort of premature certainty, deserves considerably (6)___ respect than our confidence-obsessed culture currently, and rather unwisely, grants it. If only more public figures had the genuine intellectual courage to say, plainly and without excessive embarrassment, 'I am honestly not certain' — we might, collectively, make (7)___ decisions, precisely because those decisions would (8)___ have been made with appropriate humility rather than false, unwarranted confidence.",
        items: [
          { root: "certain", accepted: ["certainty"], hint: "'prizes certainty and decisiveness' → certainty." },
          { root: "regard", accepted: ["regarded"], hint: "'widely regarded as a sign' → regarded." },
          { root: "effect", accepted: ["effectively"], hint: "'has effectively ceased doing real science' → effectively." },
          { root: "tentative", accepted: ["tentative"], hint: "'their tentative conclusions' (adjetivo)." },
          { root: "value", accepted: ["valuable"], hint: "'equally valuable or productive' → valuable." },
          { root: "much", accepted: ["more"], hint: "'considerably more respect' → more." },
          { root: "good", accepted: ["better"], hint: "'we might… make better decisions' → better." },
          { root: "actual", accepted: ["actually"], hint: "'would actually have been made' → actually." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 3",
        items: [
          { s1: "We didn't regulate this technology soon enough; now we regret it.", key: "ONLY", s2: "If ___ this technology sooner.", accepted: ["only we had regulated"], explanation: "if only + past perfect." },
          { s1: "It's a pity I don't understand this algorithm better.", key: "WISH", s2: "I ___ this algorithm better.", accepted: ["wish I understood"], explanation: "wish + past simple." },
          { s1: "I'm almost certain the mission failed.", key: "MUST", s2: "The mission ___ .", accepted: ["must have failed"], explanation: "must have + participio." },
          { s1: "It wasn't necessary to test it twice, but we did.", key: "NEEDN'T", s2: "We ___ it twice.", accepted: ["needn't have tested"], explanation: "needn't have + participio." },
          { s1: "A specialist reviewed her scan for her.", key: "HAD", s2: "She ___ by a specialist.", accepted: ["had her scan reviewed"], explanation: "causativo: have sth done." },
          { s1: "People believe the treatment works effectively.", key: "BELIEVED", s2: "The treatment ___ effectively.", accepted: ["is believed to work"], explanation: "pasiva impersonal de reporte." },
        ],
      },
      p5: {
        title: "The physicist's regret",
        text: "In the final decades of his long and extraordinarily distinguished career, one of the twentieth century's most celebrated physicists, a man whose early theoretical work had helped make possible one of the most consequential and terrifying technologies humanity has ever developed, devoted an increasing share of his considerable remaining energy and public standing to warning, with evident and growing urgency, against the very dangers his own foundational discoveries had helped unleash upon the world.\n\nHe had not, it should be said clearly, personally worked on weapons development himself; his own contributions lay purely in fundamental, abstract theoretical physics, conducted years before anyone had seriously grasped their eventual, devastating practical application. But he understood, with a clarity that grew only more acute and troubling as he aged, that the chain of scientific discovery he had helped set in motion, seemingly innocently at the time, had led with grim and unstoppable inevitability to consequences he had never remotely intended, and could not, however he tried, simply disown or wash his hands of after the fact.\n\nIn countless interviews, letters and public speeches given throughout his later years, he returned again and again to a particular, recurring theme: that scientists, precisely because they alone genuinely understood the deep, often counterintuitive implications of their own specialised, highly technical work, bore a special, non-transferable responsibility to speak out clearly and often about its potential dangers, even when doing so proved deeply uncomfortable, professionally risky, or wildly unpopular with governments, funding bodies, or even their own scientific colleagues and institutions.\n\nHis critics, and there were certainly many of them across the political spectrum, argued that this was ultimately an unfair, self-flagellating burden to place on scientists specifically. Knowledge, they reasonably pointed out, is inherently morally neutral; it is society more broadly, acting through democratically elected politicians and governments, that bears the primary and ultimate responsibility for deciding precisely how any given scientific discovery is actually used, deployed or restricted in practice.\n\nHe never fully accepted this line of reasoning, however reasonable it undoubtedly sounded in the abstract. He believed, to the very end of his long life, that scientists occupied a genuinely unique, privileged epistemic position — understanding possibilities and risks that the wider public and most policymakers simply could not yet fully grasp — and that this special, hard-won understanding carried with it a correspondingly special, non-negotiable moral obligation to speak up clearly, repeatedly and courageously, whatever the very real personal or professional cost involved.\n\nHis life, taken as a whole, poses an uncomfortable and still deeply relevant question to every scientist working today in similarly powerful, potentially dangerous fields: is it ever genuinely enough simply to discover, to publish, and then to quietly walk away, leaving the difficult, consequential moral and political questions entirely to others? Or does profound, specialised understanding itself carry with it an unavoidable, inescapable moral weight that cannot honestly be set down, however inconvenient, uncomfortable or professionally costly carrying it might ultimately prove to be?",
        q: [
          mc("What did the physicist devote his later years to?", ["Further research.", "Warning against dangers his early work had helped unleash.", "Retirement.", "Teaching only."], 1, "'devoted an increasing share… to warning… against the very dangers his own foundational discoveries had helped unleash'."),
          mc("Had he personally worked on weapons development?", ["Yes, extensively.", "No — his work was fundamental theoretical physics, before applications were grasped.", "He led the project.", "It's unclear."], 1, "'he had not… personally worked on weapons development himself; his own contributions lay purely in fundamental, abstract theoretical physics'."),
          mc("What recurring theme did he return to?", ["Scientists have no responsibility.", "Scientists bear special responsibility to speak out about dangers of their work.", "Governments alone decide.", "Silence is best."], 1, "'scientists… bore a special, non-transferable responsibility to speak out clearly and often about its potential dangers'."),
          mc("What did his critics argue?", ["He should have said more.", "Knowledge is morally neutral; society, through government, bears responsibility for its use.", "He was wrong to speak at all.", "He should be punished."], 1, "'it is society more broadly… that bears the primary and ultimate responsibility for deciding… how any given scientific discovery is actually used'."),
          mc("Did he accept this criticism?", ["Yes, fully.", "No, he never fully accepted it, believing scientists had special obligations.", "He was indifferent.", "He changed his mind repeatedly."], 1, "'He never fully accepted this line of reasoning'."),
          mc("What question does his life pose to scientists today?", ["Whether to retire early.", "Whether understanding carries an unavoidable moral weight that cannot be set down.", "Whether to publish quickly.", "Whether funding matters."], 1, "'does profound, specialised understanding itself carry with it an unavoidable, inescapable moral weight'."),
        ],
      },
      p6: {
        title: "Is doubt a scientific virtue or a public liability?",
        intro: "Cuatro personas debaten si la duda pública de los científicos es una virtud o un problema.",
        texts: {
          A: "NADIA: I think scientists expressing genuine uncertainty publicly is essential, not optional. Pretending to more certainty than the evidence actually supports, purely to reassure a nervous public, is a form of dishonesty that ultimately backfires badly when that manufactured, overconfident certainty later proves wrong. Trust, in the long run, is built on scrupulous honesty, not comforting, carefully managed reassurance.",
          B: "TOM: I understand that principle, but in practice, during a genuine crisis, excessive public hedging can be actively paralysing rather than helpful or reassuring. People reasonably need clear, actionable guidance to actually act on, not an exhaustive catalogue of every possible caveat and uncertainty. There's a real, meaningful difference between appropriate honesty and unhelpful, paralysing waffle.",
          C: "PRIYA: My view is that the real problem isn't scientific doubt itself, but rather how genuinely poorly it gets communicated to a non-specialist public. 'We're not entirely certain' sounds, to most ordinary listeners, like 'we know essentially nothing at all', when it usually actually means something considerably more nuanced and precise, like 'we're seventy percent confident based on currently available evidence'. That crucial communication gap is squarely the real issue here.",
          D: "SAM: What I keep noticing is how selectively this particular debate actually gets applied in practice. Confident, decisive certainty is generally praised when it happens to align conveniently with what people already wanted to hear anyway, and confident certainty gets criticised as dangerous overreach when it doesn't. I suspect the 'doubt vs confidence' debate is often, in practice, really just a convenient proxy for whether people actually like the underlying conclusion being expressed.",
        },
        q: [
          mc("Who argues expressing genuine uncertainty publicly is essential, not optional?", ["A", "B", "C", "D"], 0, "Nadia: 'scientists expressing genuine uncertainty publicly is essential, not optional'."),
          mc("Whose view most directly QUALIFIES Nadia's, citing the need for clear guidance in a crisis?", ["A", "B", "C", "D"], 1, "Tom: 'excessive public hedging can be actively paralysing… People… need clear, actionable guidance'."),
          mc("Who locates the real problem in how doubt gets communicated to non-specialists?", ["A", "B", "C", "D"], 2, "Priya: 'how genuinely poorly it gets communicated to a non-specialist public'."),
          mc("Who suggests the debate is really a proxy for whether people like the conclusion?", ["A", "B", "C", "D"], 3, "Sam: 'really just a convenient proxy for whether people actually like the underlying conclusion'."),
        ],
      },
      p7: {
        title: "The ethics of the unfinished",
        text: "Much of what science and technology currently produce is, by its very nature, unfinished — treatments still in trials, technologies still being actively refined, systems whose full consequences remain genuinely unknown even to their own creators. (1)___\n\nThis creates a genuinely distinctive kind of ethical difficulty, one quite different from the more familiar problems of evaluating actions whose consequences are already fully known. (2)___ How, exactly, should we weigh the real, tangible benefits of something not yet fully proven against risks that likewise remain not yet fully understood or characterised?\n\nTraditional ethical frameworks, developed largely for a world of more settled, better-understood facts, often struggle badly with this pervasive, structural uncertainty. (3)___ They were rarely designed with genuinely open, unresolved scientific and technical questions specifically in mind.\n\nSome thinkers argue we need an entirely different kind of ethics for the unfinished and the uncertain — one explicitly built around continuous monitoring, meaningful reversibility, and genuine humility, rather than confident, one-off, final judgement. (4)___ Decisions, on this view, should remain provisional and open to revision as new evidence steadily accumulates over time.\n\nOthers worry that this kind of perpetual provisionality risks becoming an excuse for endless, unaccountable delay, or worse, for quietly avoiding hard, necessary decisions altogether. (5)___ At some point, however incomplete our understanding genuinely remains, real decisions with real consequences simply must be made.\n\nNavigating between these two genuine dangers — premature, overconfident certainty on one side, and paralysing, endless uncertainty on the other — may be one of the defining ethical challenges of an age defined by rapid, continuous technological change. (6)___ There are, unfortunately, no easy or fully satisfying formulas available for getting this difficult balance reliably right.",
        options: [
          "Certainty, in many fields today, is simply not yet available.",     // A -> gap 1
          "The old moral maths assumed knowledge we often don't yet have.",    // B -> gap 2
          "Fixed rules fit poorly with a moving, evolving target.",           // C -> gap 3
          "Judgement here should stay open, not close prematurely.",          // D -> gap 4
          "Endless caution has its own real and serious costs.",              // E -> gap 5
          "Only careful, case-by-case judgement seems likely to help much.",  // F -> gap 6
          "Every scientific question has now been fully and finally settled.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la certeza aún no está disponible."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la ética tradicional asumía un conocimiento que falta."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las reglas fijas encajan mal con un blanco móvil."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el juicio debe quedar abierto."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la cautela infinita también tiene coste."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: solo el juicio caso por caso ayuda de verdad."),
        ],
      },
      p8: {
        title: "Four people reflect on scientific uncertainty in their own lives",
        text: "Read what four people say about living with scientific and medical uncertainty.\n\nA) NADIA: I have a genetic condition doctors still don't fully understand, and I've had to make real peace with an uncomfortable amount of uncertainty about my own future. I wish, honestly, that they could tell me exactly what to expect, but they can't, not yet, and pretending otherwise wouldn't genuinely help either of us in any meaningful way.\n\nB) TOM: I work in AI safety research, and what keeps me up at night, if I'm honest, isn't really the known, well-characterised risks — those we can at least plan for properly. It's the ones nobody has even thought of yet, the ones that must exist somewhere out there but that we simply haven't identified, by definition, because we haven't found them yet.\n\nC) PRIYA: I took part in an early vaccine trial, knowing full well the long-term effects genuinely couldn't be fully known at that particular stage. People called me reckless at the time. I'd call it a considered, calculated bet based on the best available evidence, not blind, reckless faith in something I hadn't thought through carefully.\n\nD) SAM: What I've had to accept, working in climate science for over twenty years now, is that we'll probably never have complete, perfect certainty before we genuinely need to act decisively regardless. Waiting for perfect knowledge, in this particular field especially, isn't caution at all — it's really just a comfortable, self-serving excuse dressed up convincingly as prudence.\n",
        q: [
          mc("Who has a genetic condition doctors don't fully understand?", ["A", "B", "C", "D"], 0, "Nadia: 'a genetic condition doctors still don't fully understand'."),
          mc("Who worries most about risks nobody has even identified yet?", ["A", "B", "C", "D"], 1, "Tom: 'the ones nobody has even thought of yet'."),
          mc("Who took part in an early vaccine trial despite unknown long-term effects?", ["A", "B", "C", "D"], 2, "Priya: 'I took part in an early vaccine trial'."),
          mc("Who has worked in climate science for over twenty years?", ["A", "B", "C", "D"], 3, "Sam: 'working in climate science for over twenty years now'."),
          mc("Who has made peace with uncertainty about their own future?", ["A", "B", "C", "D"], 0, "Nadia: 'I've had to make real peace with an uncomfortable amount of uncertainty'."),
          mc("Who calls their decision a 'considered, calculated bet', not reckless faith?", ["A", "B", "C", "D"], 2, "Priya: 'a considered, calculated bet… not blind, reckless faith'."),
          mc("Who says waiting for perfect knowledge is really a self-serving excuse?", ["A", "B", "C", "D"], 3, "Sam: 'it's really just a comfortable, self-serving excuse dressed up… as prudence'."),
          mc("Who works in AI safety research?", ["A", "B", "C", "D"], 1, "Tom: 'I work in AI safety research'."),
          mc("Who was called reckless but disagrees with that label?", ["A", "B", "C", "D"], 2, "Priya: 'People called me reckless at the time. I'd call it a considered… bet'."),
          mc("Who wishes doctors could tell them exactly what to expect?", ["A", "B", "C", "D"], 0, "Nadia: 'I wish, honestly, that they could tell me exactly what to expect'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre la ciencia se plantearon dos ideas:\n· scientists should speak out publicly about the risks of their work (los científicos deberían alertar públicamente)\n· scientists should focus on research and leave ethics to society (deberían centrarse en investigar y dejar la ética a la sociedad)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS estructuras hipotéticas o modales de la semana. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'If only we had known' — reflexiona sobre una decisión científica o tecnológica que, mirando atrás, podría haberse tomado de otra forma.\n· CARTA a un comité científico proponiendo cómo comunicar mejor la incertidumbre al público: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two researchers discussing a project. Woman: If only we had secured funding sooner, we could have finished the trial by now. Man: True, but we needn't have rushed it either — the results are more solid this way. Extract Two. You hear an ethicist talking about AI. Woman: It's high time we established clear international standards, rather than leaving it entirely to individual companies. Man: I agree completely. Should regulation continue to lag this far behind, the risks will only keep multiplying. Extract Three. You hear two doctors discussing a diagnosis. Man: The symptoms must have been present for months before anyone noticed them properly. Woman: Possibly, though we can't be entirely certain — the early test results could have been misread at the time.", [
      mc("1. What does the woman regret?", ["Nothing.", "Not securing funding sooner.", "Finishing too early."], 1, "'If only we had secured funding sooner'."),
      mc("2. What does the man say about rushing?", ["They should have rushed.", "They needn't have rushed; results are more solid this way.", "They rushed too little."], 1, "'we needn't have rushed it either'."),
      mc("3. What does the ethicist say is urgently needed?", ["Nothing.", "Clear international standards for AI.", "More companies."], 1, "'It's high time we established clear international standards'."),
      mc("4. What does the man warn about regulation?", ["It's too strict.", "If it keeps lagging behind, risks will multiply.", "It's unnecessary."], 1, "'Should regulation continue to lag… the risks will only keep multiplying'."),
      mc("5. What does the man deduce about the symptoms?", ["They were sudden.", "They must have been present for months.", "They were imaginary."], 1, "'must have been present for months'."),
      mc("6. What does the woman suggest about the early results?", ["They were correct.", "They could have been misread.", "They didn't exist."], 1, "'the early test results could have been misread'."),
    ]),

    ...speakingParts({ p1: "qué te hace dudar o confiar en la ciencia, y si sigues los avances científicos", p2: "dos imágenes de la incertidumbre científica (un científico dudando ante datos complejos y un anuncio confiado de un descubrimiento): compáralas y especula sobre cuál transmite más confianza", p3: "cómo deberían comunicarse los científicos con el público (con total honestidad sobre la incertidumbre, con mensajes claros y simples, evitando el pánico, admitiendo errores, usando ejemplos cotidianos): comentadlo y elegid lo más eficaz", p4: "la ciencia y la incertidumbre: si los científicos deberían admitir más sus dudas en público, si esto debilita la confianza y cómo equilibrar la cautela con la necesidad de actuar" }),

    SUMMARY("Resumen de la Semana 3 (C1)", [
      "Dominas los condicionales mixtos, las alternativas a if, wish/as if/it's time/would rather, los modales de deducción y crítica retrospectiva, y la pasiva avanzada/causativo.",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con el tema de la ciencia, la tecnología y la medicina.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: las RELATIVAS AVANZADAS y el ESTILO INDIRECTO sofisticado.",
    ]),
    INFO("Mini-simulacro de la Semana 3", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 4."),
  ],
};

export const WEEK3 = {
  n: 3,
  theme: "Los condicionales avanzados y lo hipotético · La ciencia y la ética",
  description: "Condicionales mixtos, alternativas a if, wish/if only avanzados, estructuras hipotéticas, modales de especulación/deducción/crítica retrospectiva, y pasiva avanzada/causativo, con el hilo de la ciencia, la tecnología, la genética, el espacio y la medicina. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY11, DAY12, DAY13, DAY14, DAY15],
};
