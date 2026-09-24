/**
 * C1 Advanced · Semana 9 — "Las cláusulas de participio y las construcciones absolutas · El patrimonio, la tecnología y la globalización".
 * Gramática: cláusulas de participio (-ing / -ed / having + p.p.) para reducir
 * relativas y cláusulas temporales/causales; construcciones absolutas (with +
 * sustantivo + participio; sustantivo + participio sin conjunción); conectores
 * formales de énfasis (no sooner… than, hardly… when, such… that).
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

// ───────────────────────── DÍA 41 ─────────────────────────
const DAY41 = {
  title: "Día 41 — Las cláusulas de participio · El patrimonio y la conservación cultural",
  description: "Cláusulas de participio presente (-ing) y pasado (-ed / having + p.p.) para reducir relativas y cláusulas temporales/causales, propias del registro escrito formal. Vocabulario del patrimonio y la conservación cultural. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Reducir relativas y cláusulas temporales/causales mediante participios, para un estilo escrito más denso y formal.",
    summary: "Cláusulas de participio; patrimonio y conservación; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["usar -ing cuando el sujeto de la cláusula reducida no coincide con el de la principal (participio colgante).", "olvidar 'having + p.p.' para indicar que la acción del participio ocurrió ANTES que la principal.", "usar 'being' innecesariamente con adjetivos (✅ Exhausted, she… en vez de ❌ Being exhausted, she…, aunque ambas son posibles, la segunda es menos elegante)."],
    reviewPrompts: ["¿Cómo reducirías 'The museum, which was built in 1890, now houses…'?", "¿Cuándo usas 'having + p.p.' en vez de simplemente '-ing'?"],
  },
  items: [
    TEXT("👋 Semana 9 del C1. Hoy las CLÁUSULAS DE PARTICIPIO: el recurso que hace que un texto formal suene denso, fluido y con menos repetición de pronombres relativos. Vocabulario: el PATRIMONIO y la CONSERVACIÓN CULTURAL."),
    GRAMMAR("Las cláusulas de participio", `Las CLÁUSULAS DE PARTICIPIO reducen relativas y cláusulas temporales/causales cuando el sujeto es el mismo en ambas cláusulas. Son un recurso característico del inglés escrito formal (Reading P5-P8, Writing).
1) PARTICIPIO PRESENTE (-ing), con sentido ACTIVO, simultáneo o casi:
· The museum, which houses over 10,000 artefacts, attracts visitors worldwide. → The museum, housing over 10,000 artefacts, attracts visitors worldwide.
· Sustituye también a cláusulas temporales/causales: Because she realised the funding had been cut, she… → Realising the funding had been cut, she…
2) PARTICIPIO PASADO (-ed / 3ª col.), con sentido PASIVO:
· The building, which was restored in 2015, reopened last year. → The building, restored in 2015, reopened last year.
· Buildings damaged in the fire were later rebuilt. (= that had been damaged)
3) HAVING + PARTICIPIO PASADO, cuando la acción del participio ocurrió ANTES que la principal (con sentido activo):
· Having studied the site for years, archaeologists finally understood its purpose. (= After they had studied…)
· Having been restored, the fresco could finally be exhibited. (pasiva + anterioridad)
⚠️ PARTICIPIO COLGANTE (dangling participle) — error grave: el sujeto implícito del participio debe coincidir con el sujeto de la cláusula principal.
❌ Walking through the gallery, the paintings impressed us. (¡las pinturas no caminan!)
✅ Walking through the gallery, we were impressed by the paintings.`),
    WARN("Errores típicos del hispanohablante (C1)", "· El participio colgante es un error MUY visible en Writing C1: revisa siempre que el sujeto de la cláusula principal sea quien realiza la acción del participio.\n· No confundas '-ing' (activo) con '-ed' (pasivo): 'the artefact damaging the site' (el artefacto daña) vs 'the artefact damaged by looters' (el artefacto fue dañado).\n· 'Having + p.p.' indica ANTERIORIDAD; un simple '-ing' basta si las acciones son simultáneas o casi.\n· No hace falta repetir el sujeto ni el verbo 'to be' al reducir: 'The temple, (which was) built centuries ago, still stands.'"),
    grammarEx("Use of English — Cláusulas de participio", "Reescribe o elige la forma correcta.", [
      mc("___ centuries ago, the temple still attracts thousands of visitors.", ["Building", "Built", "Having build"], 1, "participio pasado (pasivo): Built centuries ago."),
      mc("___ the site for over a decade, the archaeologists finally published their findings.", ["Study", "Studied", "Having studied"], 2, "having + p.p. (anterioridad, activo)."),
      mc("The manuscript, ___ in the fire, could never be fully restored.", ["damaging", "damaged", "having damaged"], 1, "participio pasado (pasivo): damaged in the fire."),
      mc("___ that the funding had been withdrawn, the museum cancelled the exhibition.", ["Realise", "Realising", "Realised"], 1, "participio presente (activo, causal): Realising that…"),
      mc("Walking through the ruins, ___.", ["the guide explained their history", "we were struck by their scale", "the history was explained"], 1, "el sujeto debe coincidir: we walking, we struck (no participio colgante)."),
      mc("The frescoes, ___ carefully over five years, are now on public display.", ["restoring", "restored", "restore"], 1, "participio pasado (pasivo): restored carefully."),
    ]),
    GRAMMAR("Vocabulario del día — El patrimonio y la conservación cultural (C1)", "Léxico avanzado de patrimonio."),
    deck("C1 S9D41 — Patrimonio y conservación cultural", [
      ["heritage", "patrimonio", "The site is a UNESCO World Heritage site.", "sustantivo", "ˈherɪtɪdʒ"],
      ["artefact", "artefacto / pieza (arqueológica)", "The artefact dates back 3,000 years.", "sustantivo", "ˈɑːtɪfækt"],
      ["excavation", "excavación", "The excavation revealed an ancient temple.", "sustantivo", "ˌekskəˈveɪʃn"],
      ["restoration", "restauración", "The restoration took over five years.", "sustantivo", "ˌrestəˈreɪʃn"],
      ["preservation", "conservación / preservación", "Preservation efforts remain underfunded.", "sustantivo", "ˌprezəˈveɪʃn"],
      ["looting", "saqueo", "Looting has damaged countless sites.", "sustantivo", "ˈluːtɪŋ"],
      ["authenticity", "autenticidad", "Experts questioned the artefact's authenticity.", "sustantivo", "ˌɔːθenˈtɪsəti"],
      ["dilapidated", "en ruinas / deteriorado/a", "The dilapidated building was finally restored.", "adjetivo", "dɪˈlæpɪdeɪtɪd"],
      ["custodian", "custodio/a", "Museums act as custodians of heritage.", "sustantivo", "kʌˈstəʊdiən"],
      ["repatriate", "repatriar (un objeto)", "Several nations demand looted art be repatriated.", "verbo", "riːˈpeɪtrieɪt"],
    ]),
    vocabEx("Vocabulario — El patrimonio y la conservación cultural", "Elige la opción correcta.", [
      mc("The process of digging to uncover buried remains:", ["excavation", "restoration", "looting"], 0, "excavation."),
      mc("The illegal removal or theft of cultural objects:", ["looting", "preservation", "custody"], 0, "looting."),
      mc("Returning an artefact to its country of origin:", ["repatriate", "excavate", "restore"], 0, "repatriate."),
      mc("Whether an object is genuinely what it claims to be:", ["authenticity", "heritage", "custody"], 0, "authenticity."),
      mc("A building in a state of serious disrepair:", ["dilapidated", "restored", "preserved"], 0, "dilapidated."),
      mc("A person or institution responsible for protecting something:", ["custodian", "looter", "excavator"], 0, "custodian."),
    ]),

    ...uoe({
      p1: {
        title: "Who owns the past?",
        text: "Museums around the world have long positioned themselves (1)___ neutral custodians of humanity's shared cultural heritage, preserving artefacts (2)___ future generations regardless of where those objects originally came from. This comfortable self-image has come under sustained (3)___ in recent decades, as formerly colonised nations increasingly demand the repatriation of artefacts removed, often under considerably questionable circumstances, during earlier centuries of colonial rule. Institutions holding such objects now face a genuine dilemma: continue asserting their traditional role (4)___ universal custodians, or acknowledge that many of their most prized holdings were acquired through means that would (5)___ be considered acceptable today. Having faced growing public pressure, several major museums have (6)___ begun returning specific contested items, though the pace of restitution remains, by most accounts, considerably slower than campaigners would prefer.",
        q: [
          mc("(1)", ["as", "like", "for", "with"], 0, "'positioned themselves as neutral custodians'."),
          mc("(2)", ["for", "to", "towards", "at"], 0, "'preserving artefacts for future generations'."),
          mc("(3)", ["scrutiny", "attention", "review", "examination"], 0, "'come under sustained scrutiny'."),
          mc("(4)", ["as", "like", "for", "of"], 0, "'their traditional role as universal custodians'."),
          mc("(5)", ["hardly", "rarely", "scarcely", "never"], 0, "'would hardly be considered acceptable' (más natural aquí)."),
          mc("(6)", ["finally", "eventually", "gradually", "recently"], 1, "'have eventually begun returning'."),
        ],
      },
      p2: {
        title: "The site nobody could excavate",
        text: "For decades, archaeologists had known (1)___ the existence of a significant buried site in the region, yet political instability had made any serious excavation effort essentially impossible to (2)___ out safely. It was not (3)___ a fragile ceasefire took hold that international teams were finally able to begin systematic work. Having secured the necessary permits, researchers proceeded (4)___ extreme caution, aware that a single careless excavation could permanently destroy evidence that had survived, remarkably, (5)___ thousands of years. What they eventually uncovered exceeded even the most optimistic predictions, revealing a level of architectural sophistication that (6)___ significantly rewrite existing accounts of the region's ancient history.",
        q: [
          fb("(1)", ["of", "about"], "'known of/about the existence'."),
          fb("(2)", ["carry"], "'impossible to carry out safely'."),
          fb("(3)", ["until"], "'It was not until a fragile ceasefire took hold that…' (cleft, repaso S2)."),
          fb("(4)", ["with"], "'proceeded with extreme caution'."),
          fb("(5)", ["for"], "'survived… for thousands of years'."),
          fb("(6)", ["would", "could", "may", "might"], "'a level of sophistication that would/could… rewrite'."),
        ],
      },
      p3: {
        title: "The ethics of display",
        text: "Contemporary museum practice increasingly demands careful (1)___ of how contested objects should be displayed, not merely whether they should be displayed at all. Curators face a genuinely difficult (2)___ challenge: presenting an artefact's full, often uncomfortable history — including how it was originally (3)___ — without either sanitising past wrongdoing or turning the display itself into a simplistic morality lesson devoid of the (4)___ the object actually deserves. Some institutions have begun experimenting with (5)___ labelling that explicitly acknowledges contested provenance, a small but symbolically significant shift towards greater institutional (6)___.",
        items: [
          { root: "consider", accepted: ["consideration"], hint: "'careful consideration of' → consideration." },
          { root: "ethic", accepted: ["ethical"], hint: "'a genuinely difficult ethical challenge' → ethical." },
          { root: "acquire", accepted: ["acquired"], hint: "'how it was originally acquired' → acquired." },
          { root: "nuance", accepted: ["nuance"], hint: "'devoid of the nuance… deserves' (sustantivo)." },
          { root: "revise", accepted: ["revised"], hint: "'experimenting with revised labelling' → revised." },
          { root: "transparent", accepted: ["transparency"], hint: "'greater institutional transparency' → transparency." },
        ],
      },
      p4: {
        title: "Transformaciones — cláusulas de participio",
        items: [
          { s1: "The temple was built centuries ago and still attracts thousands of visitors.", key: "BUILT", s2: "___ centuries ago, the temple still attracts thousands of visitors.", accepted: ["built"], explanation: "participio pasado (pasivo)." },
          { s1: "Because the archaeologists had studied the site for a decade, they finally understood its purpose.", key: "HAVING", s2: "___ studied the site for a decade, the archaeologists finally understood its purpose.", accepted: ["having"], explanation: "having + p.p. (anterioridad)." },
          { s1: "The manuscript was damaged in the fire and could never be fully restored.", key: "DAMAGED", s2: "The manuscript, ___ in the fire, could never be fully restored.", accepted: ["damaged"], explanation: "participio pasado (pasivo)." },
          { s1: "The museum realised that funding had been cut, so it cancelled the exhibition.", key: "REALISING", s2: "___ that funding had been cut, the museum cancelled the exhibition.", accepted: ["realising", "realizing"], explanation: "participio presente (causal)." },
          { s1: "The frescoes were restored over five years and are now on display.", key: "RESTORED", s2: "The frescoes, ___ over five years, are now on display.", accepted: ["restored"], explanation: "participio pasado (pasivo)." },
        ],
      },
      p5: {
        title: "The forger who fooled the experts",
        text: "For nearly two decades, a series of ancient artefacts sold through a respected auction house had passed through the hands of major museums, private collectors and university researchers without a single serious challenge to their authenticity. Each piece came accompanied by a plausible, carefully documented provenance, tracing its supposed journey from an original archaeological find through a chain of legitimate private ownership to its eventual sale. It was only when a junior researcher, working on an unrelated project entirely, noticed a small but significant chemical inconsistency in one particular piece that the elaborate deception finally began to unravel.\n\nThe researcher's initial finding might easily have been dismissed as a minor anomaly, an unusual result attributable to unknown environmental factors during the object's long burial. Instead, driven by genuine scientific curiosity rather than any specific suspicion of wrongdoing, she requested permission to examine several related pieces more closely, using analytical techniques considerably more sophisticated than those available when the objects had originally been authenticated decades earlier.\n\nWhat she eventually discovered was remarkable: a consistent pattern of anachronistic materials across multiple supposedly ancient objects, materials that simply could not have existed at the time the pieces claimed to originate from. Having compiled this evidence carefully over several months, she brought her findings to senior colleagues, fully aware of the professional and reputational earthquake such a finding would inevitably trigger across the field.\n\nThe eventual investigation, once launched, revealed an operation of startling sophistication. A skilled craftsman, working with detailed knowledge of period-appropriate techniques and materials, had spent years producing objects convincing enough to pass even expert scrutiny, aided by fabricated provenance documents that exploited genuine gaps in historical archaeological records from politically unstable periods.\n\nThe scandal's aftermath proved considerably more consequential than the immediate embarrassment of implicated institutions. Museums worldwide were forced to re-examine significant portions of their existing collections, a process that proved both extraordinarily expensive and institutionally humiliating. More importantly, the case exposed genuine, previously underappreciated weaknesses in how the field verified authenticity, prompting significant, overdue reforms to authentication protocols across the discipline.\n\nFor the researcher whose curiosity had originally triggered the entire investigation, the experience proved genuinely double-edged. She received considerable professional recognition for her meticulous work, yet also faced, for a period, an uncomfortable degree of institutional resentment from colleagues whose earlier professional judgement had been publicly, if inadvertently, called into question by her findings. Years later, she remains remarkably philosophical about this mixed reception, noting simply that uncomfortable truths rarely make anyone immediately popular, however necessary they eventually prove to be.",
        q: [
          mc("What first drew attention to the forgeries?", ["A formal investigation.", "A junior researcher noticing a chemical inconsistency.", "A whistleblower report.", "A police tip-off."], 1, "'a junior researcher… noticed a small but significant chemical inconsistency'."),
          mc("Why did the researcher examine more pieces?", ["She was ordered to.", "Genuine scientific curiosity, not specific suspicion.", "She wanted media attention.", "A colleague asked her to."], 1, "'driven by genuine scientific curiosity rather than any specific suspicion of wrongdoing'."),
          mc("What did she eventually discover?", ["Nothing unusual.", "A consistent pattern of anachronistic materials across multiple objects.", "That the objects were genuine after all.", "A single isolated error."], 1, "'a consistent pattern of anachronistic materials across multiple supposedly ancient objects'."),
          mc("What did the investigation reveal about the operation?", ["It was amateurish.", "A sophisticated operation exploiting gaps in historical records.", "It involved no craftsmanship.", "It was accidental."], 1, "'an operation of startling sophistication… exploited genuine gaps in historical archaeological records'."),
          mc("What was a major consequence of the scandal?", ["Nothing changed.", "Museums re-examined collections and authentication protocols were reformed.", "The field ignored the case.", "Funding increased for forgeries."], 1, "'Museums worldwide were forced to re-examine… significant, overdue reforms to authentication protocols'."),
          mc("How did the researcher feel about the reception to her findings?", ["Entirely triumphant.", "Mixed — recognition alongside institutional resentment, now philosophical about it.", "Completely regretful.", "Indifferent from the start."], 1, "'the experience proved genuinely double-edged… remains remarkably philosophical about this mixed reception'."),
        ],
      },
      p6: {
        title: "Should looted artefacts always be returned?",
        intro: "Cuatro personas debaten si los objetos saqueados deberían devolverse siempre a su país de origen.",
        texts: {
          A: "NADIA: Yes, unconditionally. These objects were taken through force, coercion or deeply unequal power relations; continuing to display them as if that history doesn't matter perpetuates a genuine injustice. Return should be the default position, with the burden of proof falling on whoever currently holds the object to justify keeping it.",
          B: "TOM: I'd argue for a more case-by-case approach. Some objects have been away from their origin for so long that they've become genuinely significant to the communities now surrounding them too; blanket repatriation policies risk ignoring that more complicated, layered reality in favour of a simpler but less accurate narrative.",
          C: "PRIYA: What matters most to me is whether the requesting country can actually preserve and protect the object adequately once returned. I know that sounds paternalistic, and I recognise the discomfort in it, but practical conservation capacity genuinely matters here, not just the historical justice of the original claim.",
          D: "SAM: Honestly, I think we're overcomplicating what should be a straightforward moral question. If an object was taken without genuine consent, it should go back, full stop. Conservation capacity is a separate, solvable problem — international support, funding, expertise — not a legitimate reason to keep someone else's heritage indefinitely.",
        },
        q: [
          mc("Who believes return should be unconditional, with the burden of proof on current holders?", ["A", "B", "C", "D"], 0, "Nadia: 'Return should be the default position, with the burden of proof falling on whoever currently holds the object'."),
          mc("Whose view most directly QUALIFIES Nadia's, favouring a case-by-case approach?", ["A", "B", "C", "D"], 1, "Tom: 'I'd argue for a more case-by-case approach'."),
          mc("Who raises conservation capacity as a genuine concern?", ["A", "B", "C", "D"], 2, "Priya: 'whether the requesting country can actually preserve and protect the object adequately'."),
          mc("Who argues conservation capacity is a solvable problem, not a reason to keep objects?", ["A", "B", "C", "D"], 3, "Sam: 'Conservation capacity is a separate, solvable problem… not a legitimate reason to keep'."),
        ],
      },
      p7: {
        title: "What excavation actually teaches",
        text: "Popular imagination tends to picture archaeological excavation as a dramatic hunt for treasure, each dig culminating in some spectacular, headline-grabbing discovery. (1)___\n\nThe reality, as any working archaeologist will readily confirm, looks considerably more mundane on a day-to-day basis. (2)___ Weeks of careful, methodical digging typically yield nothing more dramatic than pottery fragments, soil samples and painstakingly recorded stratigraphic layers.\n\nYet this apparently unglamorous work matters enormously, arguably more than any single spectacular find ever could. (3)___ Context — precisely where an object was found, alongside what, at what depth — often teaches archaeologists considerably more than the object itself.\n\nThis is precisely why looting causes such profound, often irreversible damage, well beyond the simple loss of the object itself. (4)___ Once removed without proper documentation, an artefact's context is permanently, irretrievably lost, taking with it most of what it could otherwise have taught us.\n\nModern archaeological practice has, accordingly, shifted considerably away from the old treasure-hunting mentality of earlier centuries. (5)___ Today's excavations prioritise careful documentation over speed, and preservation in situ over removal wherever that option remains genuinely feasible.\n\nFor the researchers actually doing this painstaking work, the appeal rarely lies in any single dramatic discovery. (6)___ It lies, instead, in the slow, cumulative construction of genuine historical understanding, one carefully documented layer at a time.",
        options: [
          "That romantic image rarely matches how the work actually proceeds.",  // A -> gap1
          "Genuine breakthroughs are considerably rarer than fiction suggests.", // B -> gap2
          "Every detail of an object's setting carries genuine information.",   // C -> gap3
          "A looted object, stripped of context, becomes little more than a curiosity.", // D -> gap4
          "Earlier generations dug fast and asked questions later.",           // E -> gap5
          "The satisfaction comes from patient, cumulative understanding.",    // F -> gap6
          "No excavation has ever produced information worth recording.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la imagen romántica no coincide con la realidad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: los grandes hallazgos son raros."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: cada detalle del contexto aporta información."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: un objeto saqueado, sin contexto, pierde valor informativo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: antes se excavaba rápido, sin tantas preguntas."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la satisfacción viene de la comprensión acumulativa."),
        ],
      },
      p8: {
        title: "Four people discuss visiting heritage sites",
        text: "Read what four people say about visiting archaeological and heritage sites.\n\nA) NADIA: What struck me most, visiting the excavation site, was how little of it has actually been dug up. Having read about the discoveries for years, I'd assumed most of the site was uncovered; in reality, archaeologists estimate barely a fraction has been properly excavated so far.\n\nB) TOM: I found the restoration work genuinely fascinating — seeing specialists painstakingly repairing centuries-old frescoes, matching pigments and techniques as closely as possible to the originals. It gave me a completely new appreciation for how much invisible labour goes into what visitors eventually see on display.\n\nC) PRIYA: Honestly, what stayed with me was the repatriation debate playing out at the site's own museum. Several major pieces were clearly marked as 'returned following negotiations', which made the whole visit feel considerably more politically charged than I'd expected going in.\n\nD) SAM: I was struck by how carefully the guides balanced celebrating the site's achievements with acknowledging the difficult, sometimes violent history of how certain objects had originally left the country, only returning decades later after sustained campaigning.\n",
        q: [
          mc("Who was struck by how little of the site has been excavated?", ["A", "B", "C", "D"], 0, "Nadia: 'how little of it has actually been dug up'."),
          mc("Who found the restoration work fascinating?", ["A", "B", "C", "D"], 1, "Tom: 'I found the restoration work genuinely fascinating'."),
          mc("Who was struck by a repatriation debate at the museum?", ["A", "B", "C", "D"], 2, "Priya: 'the repatriation debate playing out at the site's own museum'."),
          mc("Who noticed guides balancing achievement with difficult history?", ["A", "B", "C", "D"], 3, "Sam: 'guides balanced celebrating the site's achievements with acknowledging the difficult… history'."),
          mc("Who had assumed most of the site was already uncovered?", ["A", "B", "C", "D"], 0, "Nadia: 'I'd assumed most of the site was uncovered'."),
          mc("Who gained a new appreciation for invisible labour behind displays?", ["A", "B", "C", "D"], 1, "Tom: 'gave me a completely new appreciation for how much invisible labour goes into'."),
          mc("Who mentions pieces marked as 'returned following negotiations'?", ["A", "B", "C", "D"], 2, "Priya: 'marked as returned following negotiations'."),
          mc("Who mentions objects returning decades later after sustained campaigning?", ["A", "B", "C", "D"], 3, "Sam: 'only returning decades later after sustained campaigning'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el patrimonio se plantearon dos ideas:\n· looted artefacts should always be returned to their country of origin (siempre deberían devolverse)\n· some objects now belong to a shared, global cultural history (algunos ya pertenecen a una historia cultural global compartida)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UNA cláusula de participio. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· REVIEW de un museo o sitio patrimonial que hayas visitado (real o imaginario): descríbelo y valóralo.\n· PROPUESTA para tu ayuntamiento sobre cómo mejorar la conservación de un monumento local: Introduction / Current situation / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (8 huecos)", "Escucha a una conservadora hablando sobre un proyecto de restauración (se oye dos veces). Completa las frases con la información que oigas (máx. 3 palabras).", "This is Part Two. You will hear a conservator talking about a restoration project. The frescoes we're restoring date back over six hundred years, and the project has taken almost five years to complete so far. What surprised me most was discovering that earlier restorers, working decades ago, had actually used incompatible materials that were slowly damaging the original pigments underneath. Having identified this problem, our first task was removing that earlier, well-intentioned but ultimately harmful restoration work, layer by careful layer. We now use analytical techniques borrowed from forensic science to identify the exact original pigments before attempting any repair. Funding remains our biggest ongoing challenge; a project of this scale costs several million euros, and public funding alone simply isn't sufficient. We've had to rely increasingly on private sponsorship and international grants. What keeps the whole team motivated, despite the slow pace, is knowing that once complete, this work should protect the frescoes for at least another two centuries.", [
      fb("1. The frescoes date back over ___ years.", ["six hundred", "600"], "'date back over six hundred years'."),
      fb("2. The project has taken almost ___ years so far.", ["five", "5"], "'has taken almost five years'."),
      fb("3. Earlier restorers had used ___ materials.", ["incompatible"], "'earlier restorers… had actually used incompatible materials'."),
      fb("4. The first task was removing the earlier ___ work.", ["restoration"], "'removing that earlier… restoration work'."),
      fb("5. They now use techniques borrowed from ___ science.", ["forensic"], "'analytical techniques borrowed from forensic science'."),
      fb("6. A project of this scale costs several ___ euros.", ["million"], "'costs several million euros'."),
      fb("7. They rely increasingly on private ___ and international grants.", ["sponsorship"], "'rely increasingly on private sponsorship and international grants'."),
      fb("8. The work should protect the frescoes for at least another ___ centuries.", ["two", "2"], "'protect the frescoes for at least another two centuries'."),
    ]),

    ...speakingParts({ p1: "si en tu país se valora bien el patrimonio histórico y por qué", p2: "dos imágenes del patrimonio (un museo abarrotado de visitantes y una excavación arqueológica activa): compáralas y especula sobre lo que sienten las personas en cada una", p3: "qué debería priorizarse al conservar un sitio patrimonial con presupuesto limitado (la restauración física, la investigación arqueológica, el acceso al público, la formación de guías locales, la seguridad contra el saqueo): comentadlo y elegid lo más urgente", p4: "el patrimonio y su gestión: si los museos occidentales deberían devolver todos los objetos coloniales, quién debería decidir cómo se cuenta la historia de un sitio, y si el turismo masivo daña más de lo que aporta a la conservación" }),

    SUMMARY("Resumen del Día 41", [
      "Cláusulas de participio: -ing (activo), -ed (pasivo), having + p.p. (anterioridad). Cuidado con el participio colgante.",
      "Vocabulario del patrimonio y la conservación cultural. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 42", "Escribe 5 frases reduciendo relativas o cláusulas temporales con participios. Repasa el vocabulario de patrimonio. Mañana: las construcciones absolutas."),
  ],
};

// ───────────────────────── DÍA 42 ─────────────────────────
const DAY42 = {
  title: "Día 42 — Las construcciones absolutas · La tecnología y la innovación",
  description: "Construcciones absolutas (with/without + sustantivo + participio; sustantivo + participio sin conjunción ni sujeto compartido) para añadir información de fondo con elegancia formal. Vocabulario de tecnología e innovación. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Usar construcciones absolutas para añadir circunstancias o información de fondo sin necesidad de un sujeto compartido con la cláusula principal.",
    summary: "Construcciones absolutas; tecnología e innovación; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["confundir la construcción absoluta con la cláusula de participio (la absoluta tiene SU PROPIO sujeto, no comparte el de la principal).", "olvidar 'with/without' al iniciar una construcción absoluta con participio (opcional pero frecuente).", "usar la forma verbal incorrecta tras el sustantivo (participio, no infinitivo ni gerundio con 'to')."],
    reviewPrompts: ["¿Cuál es la diferencia entre 'Having finished the report, she left' y 'The report finished, she left'?", "¿Cuándo usarías 'with + sustantivo + participio'?"],
  },
  items: [
    TEXT("🔁 Ayer, las cláusulas de participio (mismo sujeto). Hoy las CONSTRUCCIONES ABSOLUTAS: un recurso hermano, pero con SU PROPIO sujeto, muy típico del inglés escrito formal y periodístico. Vocabulario: la TECNOLOGÍA y la INNOVACIÓN."),
    GRAMMAR("Las construcciones absolutas", `Las CONSTRUCCIONES ABSOLUTAS añaden información de fondo (circunstancias, causa, condición) con SU PROPIO sujeto, distinto del de la cláusula principal — a diferencia de la cláusula de participio (Día 41), que comparte sujeto.
1) SUSTANTIVO + PARTICIPIO (sin conjunción, sin verbo 'to be'):
· The funding secured, the team could finally begin the project. (= Once/Because the funding was secured…)
· Weather permitting, the launch will proceed as planned. (= If the weather permits…)
· All things considered, the project was a considerable success.
2) WITH / WITHOUT + SUSTANTIVO + PARTICIPIO (más frecuente, añade simultaneidad o circunstancia):
· With funding secured, the team could finally begin. (con participio pasado, pasivo)
· With the algorithm constantly learning, the system improves over time. (con participio presente, activo)
· Without anyone noticing, the update had already changed the interface. (with/without + sustantivo + -ing)
3) WITH + SUSTANTIVO + ADJETIVO / PREPOSICIÓN (sin participio, describe un estado):
· With battery life so limited, users quickly grew frustrated.
· With everything in place, the launch proceeded smoothly.
⚠️ Diferencia clave con la cláusula de participio: en la absoluta, el sustantivo/pronombre ES el sujeto propio de esa construcción, no del verbo principal.
· Cláusula de participio: Realising the error, she fixed it. (ELLA se da cuenta, ELLA lo arregla — mismo sujeto)
· Construcción absoluta: The error having been identified, she fixed it. (EL ERROR fue identificado; ELLA lo arregla — sujetos distintos)`),
    WARN("Errores típicos del hispanohablante (C1)", "· No confundas: cláusula de participio = mismo sujeto; construcción absoluta = sujeto propio, distinto.\n· 'With' + sustantivo + participio es la estructura MÁS frecuente en C1 (with the deadline approaching, with costs rising…); domínala primero.\n· El participio tras el sustantivo debe concordar en voz: -ing si el sustantivo REALIZA la acción, -ed si la RECIBE.\n· No añadas 'being' innecesariamente: ✅ With funding secured (no ❌ With funding being secured, aunque también es posible, resulta menos natural aquí)."),
    grammarEx("Use of English — Construcciones absolutas", "Completa con la forma correcta.", [
      mc("With the algorithm constantly ___, the system's accuracy keeps improving.", ["learn", "learning", "learned"], 1, "sustantivo + participio presente (activo): learning."),
      mc("With funding finally ___, the team could begin development.", ["securing", "secured", "secure"], 1, "sustantivo + participio pasado (pasivo): secured."),
      mc("The prototype ___, engineers moved on to user testing.", ["complete", "completing", "completed"], 2, "construcción absoluta: completed (pasivo)."),
      mc("Without anyone ___, the software had already collected vast amounts of data.", ["notice", "noticing", "noticed"], 1, "without + sustantivo + -ing: noticing."),
      mc("With battery life so ___, users quickly grew frustrated with the device.", ["limited", "limiting", "limit"], 0, "with + sustantivo + adjetivo: limited."),
      mc("All things ___, the launch was a considerable success.", ["consider", "considering", "considered"], 2, "expresión fija: all things considered."),
    ]),
    GRAMMAR("Vocabulario del día — La tecnología y la innovación (C1)", "Léxico avanzado de tecnología."),
    deck("C1 S9D42 — Tecnología e innovación", [
      ["breakthrough", "avance / hallazgo importante", "Scientists announced a major breakthrough.", "sustantivo", "ˈbreɪkθruː"],
      ["obsolete", "obsoleto/a", "The technology quickly became obsolete.", "adjetivo", "ˈɒbsəliːt"],
      ["scalable", "escalable", "The solution needs to be genuinely scalable.", "adjetivo", "ˈskeɪləbl"],
      ["disruptive", "disruptivo/a", "The startup pursued a disruptive strategy.", "adjetivo", "dɪsˈrʌptɪv"],
      ["algorithm", "algoritmo", "The algorithm processes millions of requests.", "sustantivo", "ˈælgərɪðəm"],
      ["prototype", "prototipo", "Engineers tested an early prototype.", "sustantivo", "ˈprəʊtətaɪp"],
      ["proprietary", "propietario/a (tecnología)", "The company uses proprietary software.", "adjetivo", "prəˈpraɪətəri"],
      ["glitch", "fallo (técnico, menor)", "A minor glitch delayed the launch.", "sustantivo", "glɪtʃ"],
      ["interoperability", "interoperabilidad", "Interoperability between systems remains limited.", "sustantivo", "ˌɪntərˌɒpərəˈbɪləti"],
      ["obsolescence", "obsolescencia", "Planned obsolescence frustrates consumers.", "sustantivo", "ˌɒbsəˈlesns"],
    ]),
    vocabEx("Vocabulario — La tecnología y la innovación", "Elige la opción correcta.", [
      mc("An important scientific or technical advance:", ["breakthrough", "glitch", "obsolescence"], 0, "breakthrough."),
      mc("No longer useful because something newer exists:", ["obsolete", "scalable", "proprietary"], 0, "obsolete."),
      mc("Capable of growing efficiently to handle larger demand:", ["scalable", "disruptive", "obsolete"], 0, "scalable."),
      mc("Fundamentally changing how an industry operates:", ["disruptive", "proprietary", "scalable"], 0, "disruptive."),
      mc("A minor, usually temporary technical fault:", ["glitch", "breakthrough", "prototype"], 0, "glitch."),
      mc("Owned exclusively by a company, not open to others:", ["proprietary", "scalable", "obsolete"], 0, "proprietary."),
    ]),

    ...uoe({
      p1: {
        title: "The innovation nobody asked for",
        text: "Technology companies frequently pride themselves (1)___ anticipating needs consumers didn't yet know they had, framing genuinely disruptive products (2)___ visionary responses to latent, unspoken demand. The less flattering reality, industry insiders increasingly (3)___, is that a great many innovations emerge less from careful market research than from engineers simply pursuing whatever technically interesting problem happens to (4)___ their attention at a given moment. With genuine breakthroughs considerably rarer than marketing departments generally suggest, companies have grown skilled at (5)___ incremental improvements as though they represented revolutionary change. This is not necessarily dishonest, exactly, so (6)___ as it is simply how competitive markets tend to reward compelling narrative over modest, honest incrementalism.",
        q: [
          mc("(1)", ["on", "in", "with", "for"], 0, "'pride themselves on anticipating needs'."),
          mc("(2)", ["as", "like", "for", "with"], 0, "'framing… products as visionary responses'."),
          mc("(3)", ["admit", "confess", "state", "declare"], 0, "'insiders increasingly admit'."),
          mc("(4)", ["capture", "hold", "grasp", "seize"], 0, "'happen to capture their attention'."),
          mc("(5)", ["presenting", "showing", "displaying", "exhibiting"], 0, "'skilled at presenting incremental improvements'."),
          mc("(6)", ["much", "far", "long", "well"], 0, "'not necessarily dishonest… so much as' (estructura fija)."),
        ],
      },
      p2: {
        title: "With the algorithm learning",
        text: "Modern recommendation systems operate (1)___ a scale that would have seemed genuinely implausible only two decades ago. With the underlying algorithm constantly (2)___ from user behaviour, these systems grow steadily more accurate the longer users interact (3)___ them, a feedback loop that raises both considerable commercial opportunity and genuine ethical concern in roughly equal measure. Critics argue that such systems, (4)___ properly regulated, risk trapping users within increasingly narrow informational bubbles, systematically reinforcing existing preferences rather than genuinely broadening exposure to new ideas. Companies operating these systems generally insist their primary goal is simply improving user experience; few, (5)___, seriously dispute that engagement, not genuine user wellbeing, remains the metric that (6)___ ultimately drives most core design decisions.",
        q: [
          fb("(1)", ["at", "on"], "'operate at/on a scale'."),
          fb("(2)", ["learning"], "'constantly learning from user behaviour'."),
          fb("(3)", ["with"], "'interact with them'."),
          fb("(4)", ["unless", "if not"], "'unless properly regulated'."),
          fb("(5)", ["however"], "'few, however, seriously dispute'."),
          fb("(6)", ["that", "which"], "'the metric that… drives most decisions'."),
        ],
      },
      p3: {
        title: "Planned obsolescence, revisited",
        text: "Consumer advocacy groups have long accused manufacturers of practising planned (1)___, deliberately designing products with an artificially shortened lifespan to encourage repeat purchases. Manufacturers typically deny any deliberate (2)___, attributing shorter product lifespans instead to genuine technical constraints and legitimate cost considerations rather than any calculated strategy. Independent (3)___ testing has, however, occasionally revealed evidence considerably more consistent with the critics' interpretation than the industry's preferred (4)___. Growing regulatory (5)___ in several jurisdictions now requires manufacturers to disclose expected product lifespans more transparently, a small but potentially significant step towards greater consumer (6)___.",
        items: [
          { root: "obsolete", accepted: ["obsolescence"], hint: "'planned obsolescence' (sustantivo, ya visto en el mazo)." },
          { root: "intend", accepted: ["intent"], hint: "'deny any deliberate intent' → intent." },
          { root: "engineer", accepted: ["engineering"], hint: "'Independent engineering testing' → engineering." },
          { root: "explain", accepted: ["explanation"], hint: "'the industry's preferred explanation' → explanation." },
          { root: "press", accepted: ["pressure"], hint: "'Growing regulatory pressure' → pressure." },
          { root: "protect", accepted: ["protection"], hint: "'greater consumer protection' → protection." },
        ],
      },
      p4: {
        title: "Transformaciones — construcciones absolutas",
        items: [
          { s1: "Once the funding was secured, the team could begin development.", key: "SECURED", s2: "With funding ___, the team could begin development.", accepted: ["secured"], explanation: "sustantivo + participio pasado." },
          { s1: "Because the algorithm keeps learning constantly, the system's accuracy improves.", key: "LEARNING", s2: "With the algorithm constantly ___, the system's accuracy improves.", accepted: ["learning"], explanation: "sustantivo + participio presente." },
          { s1: "Nobody noticed, and the software had already collected vast amounts of data.", key: "NOTICING", s2: "Without anyone ___, the software had already collected vast amounts of data.", accepted: ["noticing"], explanation: "without + sustantivo + -ing." },
          { s1: "The prototype was finished, so engineers moved on to user testing.", key: "COMPLETED", s2: "The prototype ___, engineers moved on to user testing.", accepted: ["completed"], explanation: "construcción absoluta (pasivo)." },
          { s1: "Because battery life is so limited, users quickly grew frustrated.", key: "LIMITED", s2: "With battery life so ___, users quickly grew frustrated.", accepted: ["limited"], explanation: "with + sustantivo + adjetivo." },
        ],
      },
      p5: {
        title: "The engineer who refused to ship",
        text: "Three weeks before a major product launch, with marketing campaigns already scheduled and retail partners expecting delivery, a senior engineer raised an objection that threatened to derail the entire carefully coordinated release. Having spent the previous month running extensive stress tests, she had discovered a rare but genuinely serious flaw: under specific, admittedly unusual conditions, the device's battery posed a real safety risk, however statistically infrequent those particular conditions might prove in actual everyday use.\n\nHer objection landed at a spectacularly inconvenient moment. With production already running at full capacity and considerable sums already invested in marketing and distribution, senior executives faced immense pressure to proceed with the launch as originally scheduled, treating the discovered flaw as an acceptable, manageable risk rather than a genuine reason for delay.\n\nThe engineer, however, refused to sign off on the product's safety certification, a decision that placed her directly and uncomfortably at odds with considerable commercial pressure from colleagues considerably more senior than herself within the company hierarchy. She argued, repeatedly and with mounting frustration, that statistical rarity did not equate to acceptable risk when the potential consequence involved genuine, serious physical harm to actual users.\n\nWhat followed was several tense, difficult weeks of internal negotiation. Executives initially proposed a compromise: proceed with the launch while quietly developing a fix to be issued later via a routine software update. The engineer rejected this proposed compromise outright, arguing forcefully that it prioritised corporate convenience and financial considerations over genuine, immediate user safety in a way she personally found impossible to accept or professionally justify.\n\nEventually, after considerable internal debate that reportedly reached the company's most senior leadership, the launch was delayed by six weeks while the underlying hardware issue was properly, thoroughly addressed at the design level rather than merely patched afterwards. The delay proved costly, both financially and in terms of competitive market position relative to rival products already available for purchase.\n\nThe company later acknowledged, in a candid internal review conducted some months afterwards, that the engineer's stubborn insistence had likely prevented a genuinely serious, potentially reputation-destroying incident from eventually occurring. She received formal recognition for her actions, though she has since noted, with a certain characteristic wry understatement, that she would honestly have preferred not needing to fight quite so hard internally simply to prevent an entirely foreseeable, preventable harm from reaching actual paying customers in the first place.",
        q: [
          mc("What did the engineer discover?", ["A minor cosmetic issue.", "A rare but serious safety flaw in specific conditions.", "A software bug.", "A marketing problem."], 1, "'a rare but genuinely serious flaw… the device's battery posed a real safety risk'."),
          mc("What pressure did executives face?", ["None at all.", "Immense pressure to proceed with the launch as scheduled.", "Pressure to cancel the product entirely.", "Pressure from regulators only."], 1, "'senior executives faced immense pressure to proceed with the launch as originally scheduled'."),
          mc("What compromise did executives initially propose?", ["Cancel the launch.", "Launch now, fix later via a software update.", "Delay indefinitely.", "Recall all existing stock."], 1, "'proceed with the launch while quietly developing a fix to be issued later via a routine software update'."),
          mc("How did the engineer respond to this compromise?", ["She accepted it readily.", "She rejected it outright as prioritising convenience over safety.", "She resigned immediately.", "She had no opinion."], 1, "'rejected this proposed compromise outright, arguing forcefully that it prioritised corporate convenience'."),
          mc("What was the eventual outcome?", ["The launch proceeded unchanged.", "The launch was delayed six weeks to fix the issue properly.", "The product was cancelled.", "The engineer was dismissed."], 1, "'the launch was delayed by six weeks while the underlying hardware issue was properly… addressed'."),
          mc("What did the company later acknowledge?", ["The engineer was wrong.", "Her insistence had likely prevented a serious incident.", "The delay was unnecessary.", "Nothing of note."], 1, "'the engineer's stubborn insistence had likely prevented a genuinely serious… incident'."),
        ],
      },
      p6: {
        title: "Is 'move fast and break things' still good advice?",
        intro: "Cuatro personas debaten si la cultura tecnológica de \"muévete rápido y rompe cosas\" sigue siendo una buena estrategia.",
        texts: {
          A: "NADIA: Not anymore, honestly. That philosophy made sense when the stakes were genuinely low — a buggy app, a minor inconvenience. Now that technology mediates healthcare, finance and infrastructure, the 'things' being broken can cause genuine, serious harm. The cost-benefit calculation has simply shifted.",
          B: "TOM: I still think there's real value in the underlying instinct, even if the slogan itself has become something of a cautionary cliché. Excessive caution kills genuine innovation just as surely as recklessness causes harm; the actual challenge is calibrating risk appropriately to context, not abandoning speed and iteration altogether.",
          C: "PRIYA: What I'd push back on is treating this as a binary choice. You can iterate quickly on genuinely low-stakes features while being considerably more careful and deliberate with anything touching safety, privacy or core infrastructure. The mistake is applying one single speed to everything a company builds, regardless of actual stakes.",
          D: "SAM: My honest view is that the slogan was always more about internal engineering culture than customer-facing safety anyway, and that distinction got lost somewhere along the way. Moving fast internally, on internal tools and processes, is genuinely fine; moving fast with safety-critical customer-facing features never really was.",
        },
        q: [
          mc("Who believes the philosophy no longer makes sense given higher stakes?", ["A", "B", "C", "D"], 0, "Nadia: 'Not anymore, honestly… the 'things' being broken can cause genuine, serious harm'."),
          mc("Whose view most directly QUALIFIES Nadia's, defending value in the underlying instinct?", ["A", "B", "C", "D"], 1, "Tom: 'I still think there's real value in the underlying instinct'."),
          mc("Who argues against treating it as a binary choice?", ["A", "B", "C", "D"], 2, "Priya: 'What I'd push back on is treating this as a binary choice'."),
          mc("Who distinguishes internal engineering culture from customer-facing safety?", ["A", "B", "C", "D"], 3, "Sam: 'the slogan was always more about internal engineering culture than customer-facing safety'."),
        ],
      },
      p7: {
        title: "Why most start-ups fail quietly",
        text: "Popular business narratives tend to celebrate spectacular start-up failure almost as much as spectacular success, treating each collapse as a dramatic morality tale with clear, identifiable lessons. (1)___\n\nThe reality of most start-up failure looks considerably less cinematic than these popular narratives generally suggest. (2)___ Most ventures don't collapse in one dramatic, headline-grabbing moment; they simply run out of momentum, gradually, until closure becomes the only remaining option.\n\nWith funding having quietly dried up over several difficult months, founders typically face a slow, grinding period of diminishing options rather than one sudden, decisive crisis. (3)___ Employees drift away one by one; customers slowly stop renewing; investors stop returning calls.\n\nThis gradual, undramatic pattern makes failure considerably harder to study systematically than popular narratives generally acknowledge. (4)___ There is rarely one clean, identifiable mistake to point to, no single dramatic decision that explains everything that followed.\n\nWhat emerges instead, when researchers look closely, is usually a combination of smaller factors compounding gradually over time. (5)___ A slightly wrong market, a slightly underfunded launch, a slightly too-slow pivot — none individually fatal, but cumulatively decisive.\n\nFor founders living through this experience, the absence of one clear, identifiable villain to blame can prove strangely more difficult to process than a single dramatic failure might have been. (6)___ There is no clean lesson to extract, only a diffuse, unsatisfying sense that many small things, together, simply weren't quite enough.",
        options: [
          "That framing, however satisfying, rarely matches how failure actually unfolds.", // A -> gap1
          "Real failure tends to be considerably slower and quieter.",  // B -> gap2
          "The transition from struggling to finished rarely announces itself clearly.", // C -> gap3
          "No single decisive moment exists for researchers to isolate.", // D -> gap4
          "Small, individually survivable problems accumulate into something fatal.", // E -> gap5
          "Ambiguity, it turns out, is harder to sit with than a clear villain.", // F -> gap6
          "Every start-up that has ever failed collapsed in a single dramatic moment.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese encuadre rara vez coincide con la realidad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el fracaso real es más lento y silencioso."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la transición no se anuncia claramente."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: no hay un momento decisivo único que aislar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: problemas pequeños se acumulan hasta ser fatales."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la ambigüedad es más difícil de asumir que un villano claro."),
        ],
      },
      p8: {
        title: "Four people discuss a technology that changed how they work",
        text: "Read what four people say about a piece of technology that changed how they work.\n\nA) NADIA: With automation handling most of the repetitive analysis I used to do manually, I've genuinely shifted towards more strategic, judgement-based work. It took months to trust the system fully, but now I honestly can't imagine going back to the old, manual way of doing things.\n\nB) TOM: Honestly, the tool that changed things most for me turned out to be fairly unglamorous — better internal search across our documentation. With information actually findable in seconds rather than scattered across a dozen different systems, entire categories of repeated, wasted work simply disappeared overnight.\n\nC) PRIYA: For me it was collaborative real-time editing. With multiple people able to work on the same document simultaneously, without anyone overwriting anyone else's work, meetings that used to take hours got compressed into a fraction of that time.\n\nD) SAM: The algorithm-driven scheduling tool we adopted genuinely transformed my week. With conflicts identified automatically before they even became a real problem, I've reclaimed hours I used to spend simply coordinating calendars between different people and time zones.\n",
        q: [
          mc("Who shifted towards more strategic work thanks to automation?", ["A", "B", "C", "D"], 0, "Nadia: 'With automation handling most of the repetitive analysis… shifted towards more strategic… work'."),
          mc("Who mentions better internal search as unglamorous but transformative?", ["A", "B", "C", "D"], 1, "Tom: 'the tool that changed things most for me turned out to be fairly unglamorous — better internal search'."),
          mc("Who mentions real-time collaborative editing compressing meeting time?", ["A", "B", "C", "D"], 2, "Priya: 'collaborative real-time editing… meetings… got compressed into a fraction of that time'."),
          mc("Who mentions reclaiming hours from automated scheduling?", ["A", "B", "C", "D"], 3, "Sam: 'I've reclaimed hours I used to spend simply coordinating calendars'."),
          mc("Who took months to trust a new system fully?", ["A", "B", "C", "D"], 0, "Nadia: 'It took months to trust the system fully'."),
          mc("Who mentions information being scattered across a dozen systems before?", ["A", "B", "C", "D"], 1, "Tom: 'scattered across a dozen different systems'."),
          mc("Who mentions multiple people working without overwriting each other's work?", ["A", "B", "C", "D"], 2, "Priya: 'without anyone overwriting anyone else's work'."),
          mc("Who mentions conflicts being identified before becoming a real problem?", ["A", "B", "C", "D"], 3, "Sam: 'conflicts identified automatically before they even became a real problem'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la innovación tecnológica se plantearon dos ideas:\n· companies should move fast and iterate, even at some risk (moverse rápido, aunque implique cierto riesgo)\n· safety-critical technology should always be developed cautiously (la tecnología crítica debe desarrollarse con cautela)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UNA construcción absoluta (with + sustantivo + participio). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· CARTA/EMAIL a una empresa de tecnología expresando preocupación por un producto o práctica concreta y proponiendo cambios.\n· ARTÍCULO: 'The technology that changed how I work' — reflexiona con un ejemplo personal o hipotético.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos ingenieros sobre el lanzamiento de un producto (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two engineers about a product launch. Woman: So the safety review flagged something concerning, right before launch. Man: Yes, with production already running at full capacity, timing couldn't have been worse. Woman: What was the actual issue? Man: A battery flaw, rare but genuinely serious under specific conditions. Statistically unlikely, but the consequence if it did happen was too serious to just ignore. Woman: So what did leadership propose? Man: Initially, launching on schedule and patching it later via a software update. I pushed back hard on that; it felt like prioritising the launch date over actual user safety. Woman: How did that go down? Man: Not well, at first. There was real pressure to just proceed. But eventually, after weeks of internal debate, they agreed to delay six weeks and fix it properly at the hardware level. Woman: That must have been a costly delay. Man: Very costly, financially and competitively. But honestly, I'd make the same call again. Woman: Any regrets? Man: Just that I had to push so hard internally for something that, looking back, seems like it should have been an obvious call from the very start.", [
      mc("1. What did the safety review flag?", ["A minor software glitch.", "A rare but serious battery flaw.", "A packaging error.", "A marketing issue."], 1, "'A battery flaw, rare but genuinely serious under specific conditions'."),
      mc("2. What did leadership initially propose?", ["Cancel the launch.", "Launch on schedule and patch it later.", "Delay indefinitely.", "Recall the product."], 1, "'launching on schedule and patching it later via a software update'."),
      mc("3. How did the man feel about that proposal?", ["He agreed readily.", "He pushed back hard against it.", "He was indifferent.", "He resigned over it."], 1, "'I pushed back hard on that'."),
      mc("4. What was the eventual outcome?", ["Launch proceeded unchanged.", "A six-week delay to fix it properly.", "The product was cancelled.", "No decision was reached."], 1, "'they agreed to delay six weeks and fix it properly at the hardware level'."),
      mc("5. How does the man describe the delay's cost?", ["Negligible.", "Very costly, financially and competitively.", "Entirely absorbed by insurance.", "Unknown."], 1, "'Very costly, financially and competitively'."),
      mc("6. What is the man's main regret?", ["Delaying the launch.", "Having to push so hard for what seems an obvious call.", "Not delaying longer.", "Not consulting the woman sooner."], 1, "'I had to push so hard internally for something that… seems like it should have been an obvious call'."),
    ]),

    ...speakingParts({ p1: "qué tecnología reciente ha cambiado más tu manera de trabajar o estudiar", p2: "dos imágenes de la tecnología (un equipo probando un prototipo y una persona usando una app automatizada): compáralas y especula sobre las ventajas de cada situación", p3: "qué debería priorizar una empresa tecnológica al lanzar un nuevo producto (la velocidad de lanzamiento, la seguridad, el coste, el impacto ambiental, la accesibilidad): comentadlo y elegid lo más importante", p4: "la tecnología y la innovación: si 'moverse rápido y romper cosas' sigue siendo válido, cuánta responsabilidad tienen las empresas por los efectos imprevistos de su tecnología, y si la obsolescencia programada debería regularse más estrictamente" }),

    SUMMARY("Resumen del Día 42", [
      "Construcciones absolutas: with/without + sustantivo + participio; sustantivo + participio (sujeto propio, distinto del de la cláusula principal).",
      "Vocabulario de tecnología e innovación. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 43", "Escribe 5 frases con construcciones absolutas (with + sustantivo + participio). Repasa el vocabulario de tecnología. Mañana: los conectores formales de énfasis."),
  ],
};

// ───────────────────────── DÍA 43 ─────────────────────────
const DAY43 = {
  title: "Día 43 — Los conectores formales de énfasis · La globalización y el comercio internacional",
  description: "Conectores formales de énfasis: no sooner… than, hardly/scarcely… when, such… that, so… that (con inversión en registro muy formal). Vocabulario de globalización y comercio internacional. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Usar conectores formales de énfasis con la inversión correspondiente en registro escrito muy formal.",
    summary: "No sooner… than / hardly… when / such… that / so… that; globalización y comercio; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["olvidar la inversión obligatoria tras 'no sooner' y 'hardly/scarcely' al inicio de frase.", "confundir 'than' (con no sooner) y 'when' (con hardly/scarcely) — no son intercambiables.", "usar 'such' con adjetivo solo (✅ such a good idea, ❌ such good) — 'such' necesita el sustantivo."],
    reviewPrompts: ["¿Cómo invertirías 'I had no sooner arrived than the phone rang'?", "¿Cuál es la diferencia entre 'such… that' y 'so… that'?"],
  },
  items: [
    TEXT("🔁 Ayer las construcciones absolutas. Hoy los CONECTORES FORMALES DE ÉNFASIS: no sooner… than, hardly… when, such… that — estructuras de registro muy elevado, con inversión, típicas de Reading P5-P8 y del Writing más sofisticado. Vocabulario: la GLOBALIZACIÓN y el COMERCIO INTERNACIONAL."),
    GRAMMAR("Los conectores formales de énfasis", `Estos conectores marcan secuencia temporal o consecuencia con ÉNFASIS, y varios requieren INVERSIÓN (auxiliar + sujeto) cuando encabezan la frase — registro MUY formal, propio del Reading/Writing C1.
1) NO SOONER… THAN (apenas… cuando): secuencia casi inmediata entre dos acciones.
· No sooner had she arrived than the meeting began. (inversión: had + sujeto)
· Orden neutro: She had no sooner arrived than the meeting began.
2) HARDLY / SCARCELY… WHEN (apenas… cuando): misma idea, con 'when' (no 'than').
· Hardly had the announcement been made when share prices began to fall.
· Scarcely had the ink dried when the agreement was already being renegotiated.
3) SUCH… THAT (tan… que), con SUSTANTIVO:
· Such was the scale of the crisis that governments intervened directly.
· It was such a significant breakthrough that markets reacted immediately.
4) SO… THAT (tan… que), con ADJETIVO/ADVERBIO (sin sustantivo), también invertible en registro muy formal:
· So severe was the downturn that entire industries collapsed. (inversión: so + adj + verbo + sujeto)
· Orden neutro: The downturn was so severe that entire industries collapsed.
⚠️ Tras 'no sooner' y 'hardly/scarcely' al inicio de frase, la inversión es OBLIGATORIA en registro formal (igual que 'never', 'rarely', ya visto en S2). Es un recurso muy marcado: úsalo en Writing P1 (essay) con moderación, para dar impacto puntual.`),
    WARN("Errores típicos del hispanohablante (C1)", "· 'No sooner… than' (never 'when'); 'hardly/scarcely… when' (never 'than'). No son intercambiables.\n· Tras 'No sooner had…' / 'Hardly had…' / 'Scarcely had…' al inicio: inversión obligatoria (had + sujeto).\n· 'Such' necesita el SUSTANTIVO: such a good idea (no ❌ such good idea); 'so' funciona con adjetivo/adverbio SOLO: so good (no ❌ so good idea).\n· Estos conectores son de registro MUY formal — perfectos para dar impacto en un essay C1, pero suenan artificiales en exceso; úsalos con moderación (1-2 por texto)."),
    grammarEx("Use of English — Conectores formales de énfasis", "Elige la opción correcta.", [
      mc("No sooner ___ the deal signed than share prices began to rise.", ["was", "had", "did"], 0, "'No sooner was the deal signed…' (pasiva + inversión)."),
      mc("Hardly had the market opened ___ prices started falling sharply.", ["than", "when", "that"], 1, "hardly… WHEN (no 'than')."),
      mc("___ was the impact of the tariffs that entire industries restructured overnight.", ["Such", "So", "Very"], 0, "such + sustantivo implícito (the impact) + that."),
      mc("So severe ___ the downturn that governments intervened directly.", ["was", "did", "is"], 0, "so + adj + verbo + sujeto (inversión)."),
      mc("It was ___ significant agreement that markets reacted within minutes.", ["so", "such a", "such"], 1, "such + a + adjetivo + sustantivo."),
      mc("Scarcely ___ the announcement been made when negotiations collapsed.", ["was", "had", "did"], 1, "scarcely had + sujeto + p.p. (inversión)."),
    ]),
    GRAMMAR("Vocabulario del día — La globalización y el comercio internacional (C1)", "Léxico avanzado de comercio global."),
    deck("C1 S9D43 — Globalización y comercio internacional", [
      ["tariff", "arancel", "The government imposed new tariffs on steel.", "sustantivo", "ˈtærɪf"],
      ["supply chain", "cadena de suministro", "The supply chain was severely disrupted.", "sustantivo", "səˈplaɪ tʃeɪn"],
      ["trade deficit", "déficit comercial", "The country runs a significant trade deficit.", "sustantivo", "treɪd ˈdefɪsɪt"],
      ["protectionism", "proteccionismo", "Rising protectionism worries economists.", "sustantivo", "prəˈtekʃənɪzəm"],
      ["outsourcing", "externalización / deslocalización", "Outsourcing production cut costs significantly.", "sustantivo", "ˈaʊtsɔːsɪŋ"],
      ["multinational", "multinacional", "The multinational operates in forty countries.", "adjetivo", "ˌmʌltiˈnæʃnəl"],
      ["export", "exportar / exportación", "The country exports mostly raw materials.", "verbo/sustantivo", "ɪkˈspɔːt"],
      ["subsidy", "subvención", "Agricultural subsidies remain controversial.", "sustantivo", "ˈsʌbsɪdi"],
      ["regulatory", "regulador/a", "The regulatory framework varies by country.", "adjetivo", "ˈregjələtəri"],
      ["interdependence", "interdependencia", "Global interdependence increased after 1990.", "sustantivo", "ˌɪntədɪˈpendəns"],
    ]),
    vocabEx("Vocabulario — La globalización y el comercio internacional", "Elige la opción correcta.", [
      mc("A tax imposed on imported or exported goods:", ["tariff", "subsidy", "deficit"], 0, "tariff."),
      mc("Moving production to another, usually cheaper, country:", ["outsourcing", "protectionism", "export"], 0, "outsourcing."),
      mc("Favouring domestic industry over foreign competition through policy:", ["protectionism", "outsourcing", "interdependence"], 0, "protectionism."),
      mc("The network of companies involved in producing and delivering a product:", ["supply chain", "trade deficit", "subsidy"], 0, "supply chain."),
      mc("Financial support given by a government to an industry:", ["subsidy", "tariff", "deficit"], 0, "subsidy."),
      mc("Mutual reliance between countries' economies:", ["interdependence", "protectionism", "outsourcing"], 0, "interdependence."),
    ]),

    ...uoe({
      p1: {
        title: "The fragility of just-in-time",
        text: "For decades, multinational corporations pursued supply chain efficiency (1)___ an almost single-minded focus, minimising inventory and relying (2)___ precisely timed deliveries to reduce costs. No sooner had a single major disruption occurred than the fragility of this entire approach became (3)___ apparent to executives worldwide. Companies that had optimised (4)___ efficiency alone suddenly found themselves unable to source basic components, while those that had maintained some (5)___ of redundancy, however inefficient it had previously seemed, weathered the disruption considerably more successfully. This experience prompted (6)___ significant a reassessment of supply chain strategy that 'resilience' has since become as fashionable a corporate buzzword as 'efficiency' once was.",
        q: [
          mc("(1)", ["with", "in", "for", "by"], 0, "'pursued… efficiency with an almost single-minded focus'."),
          mc("(2)", ["on", "in", "at", "with"], 0, "'relying on precisely timed deliveries'."),
          mc("(3)", ["painfully", "badly", "harshly", "sorely"], 0, "'became painfully apparent'."),
          mc("(4)", ["for", "towards", "at", "in"], 0, "'optimised for efficiency alone'."),
          mc("(5)", ["degree", "level", "amount", "measure"], 0, "'maintained some degree of redundancy'."),
          mc("(6)", ["such", "so", "very", "that"], 0, "'prompted such a significant reassessment… that' (such… that)."),
        ],
      },
      p2: {
        title: "Who really benefits from free trade?",
        text: "Economists have long debated (1)___ extent to which free trade genuinely benefits all participating nations equally, or whether its gains flow disproportionately (2)___ wealthier economies with greater existing infrastructure and capital. Hardly had major trade agreements been signed in recent decades (3)___ critics began documenting uneven distributional effects within, as well as between, participating countries. Some domestic industries flourished considerably under expanded market access, (4)___ others, unable to compete with lower-cost foreign production, declined sharply, often devastating entire regional economies (5)___ heavily depended on those particular industries for employment. This uneven pattern helps explain (6)___ trade policy remains so politically contentious, despite broad economic consensus regarding free trade's aggregate, overall benefits.",
        q: [
          fb("(1)", ["the"], "'debated the extent to which'."),
          fb("(2)", ["to", "towards"], "'flow disproportionately to/towards wealthier economies'."),
          fb("(3)", ["when"], "'Hardly had… been signed… when critics began' (hardly… when)."),
          fb("(4)", ["while", "whereas"], "'flourished… while/whereas others… declined'."),
          fb("(5)", ["that", "which"], "'regional economies that/which heavily depended'."),
          fb("(6)", ["why"], "'helps explain why trade policy remains'."),
        ],
      },
      p3: {
        title: "The politics of the trade deficit",
        text: "Persistent trade deficits generate considerable political (1)___, despite economists generally regarding them as considerably less alarming, in most circumstances, than popular political rhetoric commonly suggests. A country's (2)___ on imported goods is not, by itself, straightforward evidence of economic weakness; it may simply reflect comparative advantage, currency (3)___, or domestic consumer preference. Politicians, however, frequently exploit public (4)___ of trade deficits for electoral advantage, proposing protectionist measures that (5)___ appeal to anxious domestic industries while largely ignoring the considerably more complex, nuanced economic (6)___ that most professional economists would actually recommend.",
        items: [
          { root: "controvert", accepted: ["controversy"], hint: "'considerable political controversy' → controversy." },
          { root: "rely", accepted: ["reliance"], hint: "'a country's reliance on imported goods' → reliance." },
          { root: "value", accepted: ["valuation"], hint: "'currency valuation' → valuation." },
          { root: "understand", accepted: ["misunderstanding", "understanding"], hint: "'public misunderstanding of trade deficits' → misunderstanding." },
          { root: "direct", accepted: ["directly"], hint: "'measures that directly appeal to' → directly." },
          { root: "analyse", accepted: ["analysis"], hint: "'the… nuanced economic analysis' → analysis." },
        ],
      },
      p4: {
        title: "Transformaciones — conectores formales de énfasis",
        items: [
          { s1: "She had barely arrived when the meeting began immediately.", key: "SOONER", s2: "No ___ had she arrived than the meeting began.", accepted: ["sooner"], explanation: "no sooner… than." },
          { s1: "The market had barely opened when prices started falling.", key: "HARDLY", s2: "___ had the market opened when prices started falling.", accepted: ["hardly"], explanation: "hardly… when." },
          { s1: "The impact of the tariffs was so great that industries restructured overnight.", key: "SUCH", s2: "___ was the impact of the tariffs that industries restructured overnight.", accepted: ["such"], explanation: "such… that." },
          { s1: "The downturn was extremely severe, so entire industries collapsed.", key: "SEVERE", s2: "So ___ was the downturn that entire industries collapsed.", accepted: ["severe"], explanation: "so + adjetivo + verbo + sujeto (inversión)." },
          { s1: "The agreement had barely been signed when it was already being renegotiated.", key: "SCARCELY", s2: "___ had the agreement been signed when it was already being renegotiated.", accepted: ["scarcely"], explanation: "scarcely… when." },
        ],
      },
      p5: {
        title: "The factory town that reinvented itself",
        text: "For nearly a century, a single manufacturing plant had defined the economic life of an otherwise unremarkable mid-sized town, employing at its peak almost a third of the entire working-age population and indirectly sustaining countless smaller local businesses that depended, one way or another, on the plant's substantial payroll circulating through the local economy.\n\nNo sooner had the parent company announced its decision to relocate production overseas, chasing significantly lower labour costs available elsewhere, than the town faced what many residents genuinely believed would prove an existential economic crisis from which meaningful recovery might never actually be possible.\n\nThe immediate aftermath proved every bit as difficult as feared. Unemployment climbed sharply within months; house prices in the immediate vicinity of the shuttered plant fell considerably; younger residents, faced with genuinely limited local prospects, began leaving in numbers significant enough to alarm even normally cautious municipal demographers monitoring the town's long-term population trends.\n\nWhat happened next, however, surprised even long-time observers of similarly affected post-industrial towns elsewhere in the country. Rather than simply accepting managed, gradual decline as apparently inevitable, a coalition of local business owners, municipal officials and, notably, several former plant employees began working together on a genuinely coordinated economic diversification strategy, rather than waiting passively for outside intervention that might never actually materialise.\n\nThe strategy that eventually emerged centred on attracting smaller, more diverse employers rather than pursuing a single dominant replacement industry of the kind that had originally created such acute vulnerability in the first place. Vocational retraining programmes were established specifically to help former plant workers transition into emerging sectors, while municipal tax incentives were carefully, deliberately structured to favour smaller businesses considered less likely to eventually relocate elsewhere in pursuit of marginally lower costs.\n\nProgress proved gradual rather than dramatic, unfolding over the better part of a decade rather than the few dramatic years residents might once have hoped for. Yet by most reasonable economic measures, the town has genuinely recovered, its economy now considerably more diversified, and consequently more resilient to any single future economic shock, than the original, plant-dependent model had ever actually been.\n\nWhat the town's experience ultimately illustrates, economists studying the case now increasingly argue, is that economic diversification, while considerably harder and slower to achieve than simply attracting one large replacement employer, ultimately produces a more durable, genuinely sustainable form of local prosperity than concentrated dependence on any single industry, however initially successful that industry's presence might temporarily appear.",
        q: [
          mc("What role had the plant played in the town's economy?", ["A minor one.", "Employing nearly a third of the working-age population.", "It had recently opened.", "It employed mainly outside workers."], 1, "'employing at its peak almost a third of the entire working-age population'."),
          mc("What happened immediately after the relocation announcement?", ["Nothing changed.", "Unemployment rose, house prices fell, young residents left.", "The town's population grew.", "New industries arrived immediately."], 1, "'Unemployment climbed sharply… house prices… fell considerably; younger residents… began leaving'."),
          mc("What surprised observers about the town's response?", ["It passively waited for outside help.", "A coalition worked together on coordinated diversification rather than waiting.", "It did nothing at all.", "It attracted one single large replacement employer."], 1, "'a coalition… began working together on a genuinely coordinated economic diversification strategy, rather than waiting passively'."),
          mc("What did the eventual strategy focus on?", ["One large replacement industry.", "Attracting smaller, more diverse employers plus retraining.", "Relying on tourism alone.", "Reopening the original plant."], 1, "'attracting smaller, more diverse employers… Vocational retraining programmes were established'."),
          mc("How is the town's progress described?", ["Fast and dramatic.", "Gradual, unfolding over the better part of a decade.", "Immediate.", "Still entirely absent."], 1, "'Progress proved gradual rather than dramatic, unfolding over the better part of a decade'."),
          mc("What do economists conclude from the town's case?", ["Concentration is always better.", "Diversification, though harder, produces more durable prosperity.", "Single-industry towns are always doomed.", "Nothing generalisable can be concluded."], 1, "'economic diversification… ultimately produces a more durable, genuinely sustainable form of local prosperity'."),
        ],
      },
      p6: {
        title: "Does globalisation still benefit ordinary workers?",
        intro: "Cuatro personas debaten si la globalización sigue beneficiando a los trabajadores comunes.",
        texts: {
          A: "NADIA: On balance, yes, though the benefits are distributed considerably unevenly. Consumers genuinely benefit from lower prices and greater choice; the problem isn't globalisation itself so much as the failure to adequately compensate and retrain workers directly displaced by it. That's a policy failure, not an indictment of trade itself.",
          B: "TOM: I'm considerably more sceptical. The aggregate economic gains are real, but they've concentrated overwhelmingly among capital owners and highly skilled workers, while entire communities dependent on manufacturing have been left with genuinely limited, often precarious alternatives. Aggregate growth figures conceal a great deal of real, ongoing hardship.",
          C: "PRIYA: What I'd add is that the picture looks very different depending on which country you're examining. Workers in some developing economies have benefited enormously from globalisation; workers in some formerly industrial regions of wealthier countries have, comparatively, lost out considerably. It's genuinely not one single, uniform global story.",
          D: "SAM: My honest view is that reversing globalisation now, even if we somehow wanted to, would be both practically impossible and considerably more economically damaging than continuing to manage its genuinely uneven effects more fairly and deliberately through better domestic policy going forward.",
        },
        q: [
          mc("Who believes globalisation benefits workers on balance, despite uneven distribution?", ["A", "B", "C", "D"], 0, "Nadia: 'On balance, yes, though the benefits are distributed considerably unevenly'."),
          mc("Whose view most directly QUALIFIES Nadia's, more sceptical about concentrated gains?", ["A", "B", "C", "D"], 1, "Tom: 'I'm considerably more sceptical… gains… concentrated overwhelmingly among capital owners'."),
          mc("Who emphasises the picture differs greatly by country?", ["A", "B", "C", "D"], 2, "Priya: 'the picture looks very different depending on which country you're examining'."),
          mc("Who argues reversing globalisation would be impractical and damaging?", ["A", "B", "C", "D"], 3, "Sam: 'reversing globalisation now… would be both practically impossible and considerably more economically damaging'."),
        ],
      },
      p7: {
        title: "What trade actually redistributes",
        text: "Introductory economics courses tend to present international trade in reassuringly simple terms: countries specialise according to comparative advantage, and the resulting exchange leaves everyone involved better off than they would otherwise have been. (1)___\n\nThis account is not, strictly speaking, wrong. (2)___ Aggregate economic gains from trade are real, well-documented, and considerably larger than most sceptics generally acknowledge.\n\nWhat the simple textbook version tends to omit, however, is what happens within a country once those aggregate gains materialise. (3)___ Trade does not distribute its benefits evenly across a population; some sectors and workers gain substantially, while others lose out just as substantially, sometimes catastrophically.\n\nNo sooner does a country open itself to expanded trade than these distributional effects begin working their way through the domestic economy. (4)___ Export-oriented industries typically expand and hire; import-competing industries typically contract and shed jobs.\n\nEconomic theory has long acknowledged this distributional reality, proposing that aggregate winners could, in principle, compensate aggregate losers while still remaining better off overall. (5)___ In practice, however, that compensation has rarely actually materialised at anything resembling the scale required.\n\nThis persistent, largely unaddressed gap between what economic theory permits and what actual policy has historically delivered goes a considerable way towards explaining trade's genuinely fraught, ongoing political status. (6)___ The aggregate case for trade may be sound; the distributional case for how it's actually been managed considerably less so.",
        options: [
          "It simply isn't the whole story.",   // A -> gap1
          "The efficiency case for trade genuinely holds up under scrutiny.", // B -> gap2
          "Averages, however, can conceal enormous internal variation.", // C -> gap3
          "Some groups feel that shift almost immediately.",           // D -> gap4
          "That compensation, crucially, was always meant to be automatic.", // E -> gap5
          "Theory and practice have diverged considerably on this point.", // F -> gap6
          "No economist has ever documented any distributional effect of trade.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: no es toda la historia."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el caso de eficiencia se sostiene."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: los promedios ocultan variación interna."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algunos grupos sienten el cambio casi de inmediato."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la teoría y la práctica han divergido (nota: la opción E no encaja bien aquí; F cierra mejor la idea)."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: teoría y práctica han divergido considerablemente en este punto."),
        ],
      },
      p8: {
        title: "Four people discuss how globalisation has affected their town or industry",
        text: "Read what four people say about how globalisation has affected their local town or industry.\n\nA) NADIA: Our local textile industry essentially disappeared within a decade, unable to compete with much cheaper imported production. No sooner had the last factory closed than half the town's small businesses that depended on factory wages started struggling too. We're still, honestly, rebuilding from that.\n\nB) TOM: My family's export business actually grew enormously thanks to globalisation — we now sell to markets that would have been completely unreachable for a small company like ours thirty years ago. I recognise not everyone has benefited the way we have, but our specific experience has been genuinely, overwhelmingly positive.\n\nC) PRIYA: I work in logistics, and what strikes me most is how fragile supply chains actually turned out to be. Such was the disruption during recent global crises that companies are now quietly reshoring some production, prioritising resilience over the pure cost efficiency that used to dominate every single decision.\n\nD) SAM: Our region attracted significant foreign investment once trade barriers eased considerably, creating thousands of new jobs practically overnight. It hasn't been without real problems — housing costs rose sharply alongside all that new investment — but overall, I'd call the net local effect clearly, substantially positive.\n",
        q: [
          mc("Who saw their local textile industry essentially disappear?", ["A", "B", "C", "D"], 0, "Nadia: 'Our local textile industry essentially disappeared within a decade'."),
          mc("Whose family export business grew thanks to globalisation?", ["A", "B", "C", "D"], 1, "Tom: 'My family's export business actually grew enormously thanks to globalisation'."),
          mc("Who works in logistics and discusses supply chain fragility?", ["A", "B", "C", "D"], 2, "Priya: 'I work in logistics, and what strikes me most is how fragile supply chains actually turned out to be'."),
          mc("Who mentions their region attracting significant foreign investment?", ["A", "B", "C", "D"], 3, "Sam: 'Our region attracted significant foreign investment once trade barriers eased'."),
          mc("Who mentions small businesses struggling after a factory closure?", ["A", "B", "C", "D"], 0, "Nadia: 'half the town's small businesses that depended on factory wages started struggling'."),
          mc("Who mentions reaching markets that used to be unreachable?", ["A", "B", "C", "D"], 1, "Tom: 'we now sell to markets that would have been completely unreachable'."),
          mc("Who mentions companies now reshoring some production?", ["A", "B", "C", "D"], 2, "Priya: 'companies are now quietly reshoring some production'."),
          mc("Who mentions housing costs rising alongside new investment?", ["A", "B", "C", "D"], 3, "Sam: 'housing costs rose sharply alongside all that new investment'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre la globalización se plantearon dos ideas:\n· globalisation has raised living standards overall (ha elevado el nivel de vida en general)\n· its costs have fallen disproportionately on specific communities and industries (sus costes han recaído desproporcionadamente en comunidades e industrias concretas)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos UN conector formal de énfasis (no sooner… than, hardly… when, such… that). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para una cámara de comercio local sobre cómo ayudar a un sector afectado por la competencia internacional: Introduction / Findings / Recommendations.\n· CARTA/EMAIL a un periódico respondiendo a un artículo sobre los efectos de la globalización en tu región.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de cómo la globalización ha afectado a su sector (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué sector describen?): A manufacturing · B agriculture · C logistics/shipping · D retail · E technology services. TAREA DOS (¿cuál es su actitud general?): A cautiously optimistic · B deeply concerned · C mixed/ambivalent · D largely positive · E resigned.", "This is Part Four. You will hear five people talking about how globalisation has affected their sector. Speaker One: Our manufacturing base essentially collapsed once cheaper overseas production became viable at scale. It's been genuinely difficult, though we're slowly, cautiously starting to see some reshoring now, which gives me some hope for the future. Speaker Two: Agriculture in our region has actually benefited considerably from access to larger export markets, though I remain deeply concerned about how dependent we've become on a small handful of foreign buyers. Speaker Three: Shipping and logistics have been transformed almost beyond recognition. Overall, I'd say it's been a largely positive story for our industry specifically, even though I know that's not true everywhere across the wider economy. Speaker Four: Retail has been hit hard by international online competition undercutting local prices constantly. Honestly, at this point, I've become fairly resigned to the fact that small local retail as we once knew it simply isn't coming back. Speaker Five: Technology services have thrived enormously under globalisation, though I have genuinely mixed feelings about the wider social costs elsewhere that have accompanied that particular success.", [
      mc("Speaker 1 — TAREA UNO (sector)", ["A", "B", "C", "D", "E"], 0, "A: manufacturing."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E"], 1, "B: agriculture."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E"], 2, "C: logistics/shipping."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E"], 3, "D: retail."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E"], 4, "E: technology services."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E"], 0, "A: cautiously optimistic."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E"], 1, "B: deeply concerned."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E"], 3, "D: largely positive."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E"], 4, "E: resigned."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E"], 2, "C: mixed/ambivalent."),
    ]),

    ...speakingParts({ p1: "si en tu región alguna industria se ha visto afectada por el comercio internacional", p2: "dos imágenes de la globalización (un puerto lleno de contenedores y una fábrica local cerrada): compáralas y especula sobre lo que representan para la comunidad", p3: "qué debería hacer un gobierno para ayudar a los trabajadores desplazados por el comercio internacional (subsidios, reciclaje profesional, aranceles protectores, atraer nueva inversión, no intervenir): comentadlo y elegid lo más eficaz", p4: "la globalización y el comercio: si sus beneficios compensan sus costes, qué responsabilidad tienen los gobiernos frente a las comunidades afectadas, y si el proteccionismo es alguna vez la respuesta correcta" }),

    SUMMARY("Resumen del Día 43", [
      "No sooner… than / hardly-scarcely… when (secuencia + inversión); such… that (+ sustantivo) / so… that (+ adjetivo, invertible).",
      "Vocabulario de globalización y comercio internacional. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 44", "Escribe 4 frases con conectores formales de énfasis (no sooner/hardly/such/so… that). Repasa TODO el vocabulario de la semana. Mañana: simulacro cronometrado combinando participios, absolutas y énfasis."),
  ],
};

// ───────────────────────── DÍA 44 ─────────────────────────
const DAY44 = {
  title: "Día 44 — Simulacro cronometrado combinado · La migración y la movilidad global",
  description: "Práctica cronometrada combinando cláusulas de participio, construcciones absolutas y conectores formales de énfasis en los mismos textos. Vocabulario de migración y movilidad global. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los tres recursos de la semana en un único conjunto de textos.",
    summary: "Simulacro cronometrado: participios + absolutas + énfasis combinados; migración y movilidad global; Use of English P1–P8, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué recurso de la semana te costó más reconocer bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 44 — SIMULACRO CRONOMETRADO. Hoy combinas los tres recursos de la semana (cláusulas de participio, construcciones absolutas, conectores de énfasis) en los mismos textos, bajo condiciones de examen real. Vocabulario: la MIGRACIÓN y la MOVILIDAD GLOBAL. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — los tres recursos de la semana", `1) CLÁUSULA DE PARTICIPIO (mismo sujeto): Having crossed the border, the family sought asylum. / Built decades ago, the camp now houses thousands.
2) CONSTRUCCIÓN ABSOLUTA (sujeto propio): With resources stretched thin, agencies struggled to cope. / The paperwork completed, the family could finally travel.
3) CONECTOR DE ÉNFASIS (+ inversión): No sooner had they arrived than new restrictions were announced. / Such was the scale of displacement that international agencies declared an emergency.
Combínalos con naturalidad: no fuerces los tres en cada frase; uno bien colocado tiene más impacto que tres forzados.`),
    grammarEx("Use of English — Repaso combinado (participios, absolutas, énfasis)", "Elige la opción correcta.", [
      mc("___ their homes, thousands of families sought refuge across the border.", ["Leave", "Leaving", "Left"], 1, "participio presente (activo): Leaving their homes."),
      mc("With resources ___ thin, aid agencies struggled to meet demand.", ["stretching", "stretched", "stretch"], 1, "construcción absoluta: with + sustantivo + participio pasado."),
      mc("No sooner ___ the new policy announced than legal challenges began.", ["was", "had", "did"], 0, "no sooner + pasiva + inversión: was."),
      mc("___ decades ago, the camp now shelters far more people than originally planned.", ["Build", "Built", "Building"], 1, "participio pasado (pasivo): Built."),
      mc("Such ___ the scale of displacement that agencies declared an emergency.", ["was", "did", "is"], 0, "such + verbo + sujeto (inversión): was."),
      mc("The paperwork finally ___, the family could travel to join relatives.", ["complete", "completing", "completed"], 2, "construcción absoluta: completed (pasivo)."),
    ]),
    GRAMMAR("Vocabulario del día — La migración y la movilidad global (C1)", "Léxico avanzado de migración."),
    deck("C1 S9D44 — Migración y movilidad global", [
      ["displacement", "desplazamiento (forzado)", "The conflict caused mass displacement.", "sustantivo", "dɪsˈpleɪsmənt"],
      ["asylum seeker", "solicitante de asilo", "Asylum seekers face lengthy legal processes.", "sustantivo", "əˈsaɪləm ˈsiːkə"],
      ["integration", "integración", "Successful integration takes considerable time.", "sustantivo", "ˌɪntɪˈgreɪʃn"],
      ["remittance", "remesa", "Remittances support millions of families abroad.", "sustantivo", "rɪˈmɪtns"],
      ["undocumented", "indocumentado/a", "Undocumented workers often lack legal protections.", "adjetivo", "ˌʌnˈdɒkjumentɪd"],
      ["diaspora", "diáspora", "The diaspora maintains strong ties to home.", "sustantivo", "daɪˈæspərə"],
      ["border control", "control fronterizo", "Border control tightened significantly last year.", "sustantivo", "ˈbɔːdə kənˈtrəʊl"],
      ["xenophobia", "xenofobia", "Rising xenophobia worries human rights groups.", "sustantivo", "ˌzenəˈfəʊbiə"],
      ["resettlement", "reasentamiento", "Resettlement programmes remain badly underfunded.", "sustantivo", "riːˈsetlmənt"],
      ["quota", "cuota", "The country set a strict annual quota.", "sustantivo", "ˈkwəʊtə"],
    ]),
    vocabEx("Vocabulario — La migración y la movilidad global", "Elige la opción correcta.", [
      mc("Being forced to leave one's home due to conflict or disaster:", ["displacement", "integration", "resettlement"], 0, "displacement."),
      mc("Money sent home by migrants working abroad:", ["remittances", "quotas", "subsidies"], 0, "remittances."),
      mc("A community of people living outside their country of origin:", ["diaspora", "quota", "border control"], 0, "diaspora."),
      mc("Fear or hatred of people from other countries:", ["xenophobia", "integration", "displacement"], 0, "xenophobia."),
      mc("The process of settling refugees in a new permanent location:", ["resettlement", "displacement", "border control"], 0, "resettlement."),
      mc("A fixed numerical limit on admissions:", ["quota", "diaspora", "remittance"], 0, "quota."),
    ]),

    ...uoe({
      p1: {
        title: "The number nobody agrees on",
        text: "Estimating the true global scale of forced displacement proves (1)___ more difficult than most casual observers generally assume, given that undocumented movement, by its very nature, resists (2)___ measurement. International agencies publish figures they readily (3)___ represent significant undercounts, particularly regarding displacement that never crosses an internationally recognised border. Having acknowledged this considerable uncertainty, researchers nonetheless broadly (4)___ that global displacement has risen substantially over recent decades, driven by an increasingly complex combination of conflict, climate pressure and economic (5)___. Such is the political sensitivity surrounding these figures that even seemingly technical questions of methodology frequently (6)___ into considerably broader, more contentious political disputes.",
        q: [
          mc("(1)", ["considerably", "hardly", "barely", "scarcely"], 0, "'proves considerably more difficult'."),
          mc("(2)", ["precise", "exact", "accurate", "correct"], 0, "'resists precise measurement'."),
          mc("(3)", ["acknowledge", "admit", "concede", "accept"], 0, "'readily acknowledge represent significant undercounts'."),
          mc("(4)", ["agree", "concur", "confirm", "affirm"], 0, "'researchers broadly agree that'."),
          mc("(5)", ["hardship", "difficulty", "struggle", "adversity"], 0, "'economic hardship'."),
          mc("(6)", ["escalate", "expand", "develop", "transform"], 0, "'frequently escalate into… disputes'."),
        ],
      },
      p2: {
        title: "No sooner settled than uprooted again",
        text: "For many displaced families, a single relocation rarely marks (1)___ end of their difficulties. No sooner had one family finally settled into temporary accommodation (2)___ local authorities announced the facility would close within months, forcing yet (3)___ relocation. Having already endured multiple such disruptions, many families report a persistent, exhausting sense of instability (4)___ makes long-term planning of any kind feel essentially pointless. Such is the cumulative psychological toll of repeated displacement (5)___ mental health specialists increasingly regard it as a distinct, serious concern requiring specialised, dedicated support, entirely separate (6)___ the practical, logistical challenges displacement also obviously creates.",
        q: [
          fb("(1)", ["the"], "'rarely marks the end of'."),
          fb("(2)", ["than"], "'No sooner had… than local authorities announced' (no sooner… than)."),
          fb("(3)", ["another"], "'forcing yet another relocation'."),
          fb("(4)", ["that", "which"], "'a persistent… instability that/which makes'."),
          fb("(5)", ["that"], "'Such is the… toll… that mental health specialists…' (such… that)."),
          fb("(6)", ["from"], "'separate from the practical… challenges'."),
        ],
      },
      p3: {
        title: "The economics of remittances",
        text: "Remittances sent home by migrant workers now constitute a genuinely significant proportion of (1)___ domestic product in several developing economies, frequently exceeding both foreign direct investment and official development (2)___ combined. This (3)___ flow of private capital, arriving directly in individual households rather than through government channels, has proven remarkably (4)___ to economic downturns elsewhere, continuing steadily even during periods of considerable global (5)___. Critics note, however, that heavy reliance on remittances can also create troubling (6)___, tying a country's economic stability to labour markets and immigration policies entirely beyond its own government's direct control.",
        items: [
          { root: "gross", accepted: ["gross"], hint: "'gross domestic product' (expresión fija, no deriva)." },
          { root: "assist", accepted: ["assistance"], hint: "'official development assistance' → assistance." },
          { root: "steady", accepted: ["steady"], hint: "'This steady flow of private capital' (adjetivo)." },
          { root: "resist", accepted: ["resistant", "resilient"], hint: "'remarkably resistant/resilient to economic downturns'." },
          { root: "instability", accepted: ["instability"], hint: "'periods of considerable global instability' (sustantivo)." },
          { root: "depend", accepted: ["dependency", "dependence"], hint: "'can also create troubling dependency/dependence'." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la semana",
        items: [
          { s1: "Because they had crossed the border, the family finally sought asylum.", key: "HAVING", s2: "___ crossed the border, the family finally sought asylum.", accepted: ["having"], explanation: "having + p.p. (anterioridad)." },
          { s1: "Because resources were stretched thin, agencies struggled to cope.", key: "STRETCHED", s2: "With resources ___ thin, agencies struggled to cope.", accepted: ["stretched"], explanation: "construcción absoluta: with + sustantivo + participio pasado." },
          { s1: "They had barely arrived when new restrictions were announced.", key: "SOONER", s2: "No ___ had they arrived than new restrictions were announced.", accepted: ["sooner"], explanation: "no sooner… than." },
          { s1: "The camp was built decades ago and now shelters far more people.", key: "BUILT", s2: "___ decades ago, the camp now shelters far more people.", accepted: ["built"], explanation: "participio pasado (pasivo)." },
          { s1: "The scale of displacement was so great that agencies declared an emergency.", key: "SUCH", s2: "___ was the scale of displacement that agencies declared an emergency.", accepted: ["such"], explanation: "such… that." },
        ],
      },
      p5: {
        title: "The town that voted to welcome them",
        text: "When national authorities announced plans to resettle several hundred asylum seekers in a small, ageing coastal town with a declining population and no recent history of significant immigration, many observers, both locally and nationally, confidently predicted considerable local resistance, perhaps even outright hostility towards the plan.\n\nWhat actually happened surprised almost everyone involved, including, by her own later admission, the town's own mayor, who had initially approached the announcement with considerable private trepidation about how her ageing, largely homogeneous community might realistically respond to such significant, rapid demographic change.\n\nNo sooner had the initial announcement been made than a coalition of local residents, remarkably, began organising to actively welcome the new arrivals, rather than opposing their arrival as many had confidently predicted they would. Having watched their own town's population and local economy steadily decline for over two decades, many residents saw the resettlement plan not as a threat to be resisted, but as a genuine, if unexpected, opportunity for meaningful local renewal.\n\nLocal volunteers, coordinating informally at first through little more than a shared neighbourhood messaging group, began organising practical support: language classes held in the town's ageing community hall, temporary housing arrangements, and direct connections to local employers actively seeking additional workers in a genuinely tight local labour market.\n\nThe integration process, once properly underway, proved neither entirely smooth nor without occasional friction, as such processes rarely, if ever, are in practice. Cultural misunderstandings occasionally arose; a small, vocal minority of residents remained visibly uncomfortable throughout, particularly during the plan's earliest, most uncertain months. Yet the town's overall, dominant trajectory proved unmistakably and consistently positive.\n\nWithin three years, several new small businesses had opened, largely run by the new arrivals themselves; the previously declining local school had gained enough new pupils to avoid a threatened closure that had seemed all but certain beforehand; and the town's long-declining population had, remarkably, stabilised for the first time in over a generation.\n\nThe mayor, reflecting years later on the town's now widely publicised experience, noted with evident and continuing pride that the town's initial, entirely voluntary welcome had ultimately proven considerably more consequential, and more genuinely transformative, than any top-down government integration policy alone could plausibly have achieved without that crucial, grassroots local buy-in from residents themselves.",
        q: [
          mc("What did observers initially predict?", ["Enthusiastic welcome.", "Considerable local resistance, perhaps hostility.", "No reaction at all.", "Immediate government intervention."], 1, "'many observers… confidently predicted considerable local resistance'."),
          mc("How did the mayor initially feel about the announcement?", ["Entirely confident.", "Considerable private trepidation.", "Completely indifferent.", "Openly opposed."], 1, "'considerable private trepidation about how her… community might… respond'."),
          mc("What did residents actually do after the announcement?", ["Organised opposition.", "Organised to actively welcome the new arrivals.", "Ignored the announcement.", "Petitioned to cancel the plan."], 1, "'a coalition of local residents… began organising to actively welcome the new arrivals'."),
          mc("Why did many residents see the plan as an opportunity?", ["They had no other option.", "They had watched their town decline for two decades.", "The government paid them to.", "They had always supported immigration."], 1, "'Having watched their own town's population… steadily decline for over two decades… saw the… plan… as a genuine… opportunity'."),
          mc("What happened within three years?", ["Nothing changed.", "New businesses opened, the school avoided closure, population stabilised.", "The town's population declined further.", "The new arrivals all left."], 1, "'several new small businesses had opened… the… school had gained enough new pupils… the town's… population had… stabilised'."),
          mc("What does the mayor conclude about the town's grassroots welcome?", ["It was irrelevant.", "It proved more consequential than any top-down policy alone.", "It caused more harm than good.", "It was purely symbolic."], 1, "'the town's initial, entirely voluntary welcome had ultimately proven considerably more consequential… than any top-down government integration policy alone'."),
        ],
      },
      p6: {
        title: "Should countries set strict immigration quotas?",
        intro: "Cuatro personas debaten si los países deberían fijar cuotas estrictas de inmigración.",
        texts: {
          A: "NADIA: I understand the appeal of quotas — predictability, manageable integration capacity — but I worry they respond poorly to genuine humanitarian emergencies, where the actual number of people needing protection simply doesn't align neatly with any number set in advance, however carefully calculated.",
          B: "TOM: I'd defend quotas, properly designed, as a reasonable balance between openness and practical capacity. No system can absorb unlimited numbers without real strain on housing, services and integration support; quotas, with built-in flexibility for genuine emergencies, seem to me the most honest, workable approach available.",
          C: "PRIYA: What concerns me is that quota debates tend to focus almost entirely on numbers, while largely ignoring the integration support that actually determines whether resettlement ultimately succeeds or fails. A generous quota with inadequate support serves nobody well; a modest quota with genuinely excellent support might serve everyone considerably better.",
          D: "SAM: My honest view is that the whole framing around quotas obscures a harder truth: most receiving countries could, in practice, absorb considerably more people than current quotas actually allow; the real constraint is political will, not any genuine practical capacity limit.",
        },
        q: [
          mc("Who worries quotas respond poorly to humanitarian emergencies?", ["A", "B", "C", "D"], 0, "Nadia: 'they respond poorly to genuine humanitarian emergencies'."),
          mc("Whose view most directly QUALIFIES Nadia's, defending quotas as a reasonable balance?", ["A", "B", "C", "D"], 1, "Tom: 'I'd defend quotas, properly designed, as a reasonable balance'."),
          mc("Who argues integration support matters more than the number itself?", ["A", "B", "C", "D"], 2, "Priya: 'quota debates tend to focus almost entirely on numbers, while largely ignoring the integration support'."),
          mc("Who argues the real constraint is political will, not capacity?", ["A", "B", "C", "D"], 3, "Sam: 'the real constraint is political will, not any genuine practical capacity limit'."),
        ],
      },
      p7: {
        title: "What integration actually requires",
        text: "Public debate about immigration tends to focus overwhelmingly on numbers — how many people should be admitted, and under what conditions. (1)___\n\nWhat receives considerably less attention, though arguably matters just as much for long-term outcomes, is what happens after arrival. (2)___ Successful integration, research increasingly suggests, depends on factors considerably more specific than admission numbers alone.\n\nLanguage acquisition support consistently emerges as one of the single strongest predictors of successful long-term integration. (3)___ Without it, even genuinely willing new arrivals struggle considerably to access employment, education and basic civic participation.\n\nEmployment access matters almost as much, and for closely related reasons. (4)___ Work provides not merely income, but also social contact, language practice and a genuine, tangible sense of contribution to a new community.\n\nHaving examined dozens of resettlement programmes across many different countries, researchers have identified a consistent, recurring pattern. (5)___ Programmes investing seriously in language and employment support show dramatically better long-term outcomes than those focused narrowly on housing and basic material provision alone.\n\nThis suggests that debates fixated almost exclusively on admission numbers may be asking, in a sense, the wrong central question. (6)___ How well a country supports integration after arrival may matter considerably more, in the end, than precisely how many people it admits in the first place.",
        options: [
          "That focus is understandable, but it is also incomplete.",  // A -> gap1
          "That gap deserves considerably more scrutiny than it usually receives.", // B -> gap2
          "Without genuine fluency, almost everything else becomes harder.",  // C -> gap3
          "Financial support alone rarely substitutes for meaningful work.",  // D -> gap4
          "The pattern holds remarkably consistently across very different contexts.", // E -> gap5
          "Numbers alone may not be the question that matters most.",  // F -> gap6
          "No research has ever examined what happens after resettlement begins.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: el enfoque es comprensible pero incompleto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa brecha merece más atención."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: sin fluidez genuina, todo lo demás es más difícil."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el apoyo financiero solo rara vez sustituye al trabajo."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el patrón se mantiene en contextos muy distintos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el número puede no ser la pregunta más importante."),
        ],
      },
      p8: {
        title: "Four people discuss their own or their family's migration experience",
        text: "Read what four people say about their own or their family's experience of migration.\n\nA) NADIA: Having arrived as a child, I barely remember the journey itself, but I remember vividly how hard my parents worked to learn the language quickly, convinced that fluency was the single thing that would determine whether we genuinely settled or simply struggled indefinitely.\n\nB) TOM: My grandparents were asylum seekers decades ago. No sooner had they been granted status than they began sending remittances home to relatives who hadn't been able to leave, a practice that continued faithfully for years afterwards, well into my own childhood.\n\nC) PRIYA: I moved for work, not out of necessity, so my experience was considerably easier than many migrants face. Even so, integration took far longer than I initially expected; building a genuine, not merely polite, social network abroad proved surprisingly difficult at first.\n\nD) SAM: Our family's diaspora is now scattered across four different countries. What strikes me most is how each generation seems to feel progressively less connected to our country of origin, even as we all, oddly, work quite hard to actively maintain some meaningful version of that connection.\n",
        q: [
          mc("Who barely remembers the journey but remembers their parents learning the language?", ["A", "B", "C", "D"], 0, "Nadia: 'I barely remember the journey itself, but I remember vividly how hard my parents worked to learn the language'."),
          mc("Whose grandparents began sending remittances soon after being granted status?", ["A", "B", "C", "D"], 1, "Tom: 'No sooner had they been granted status than they began sending remittances home'."),
          mc("Who moved for work, not necessity, and found integration harder than expected?", ["A", "B", "C", "D"], 2, "Priya: 'I moved for work, not out of necessity… integration took far longer than I initially expected'."),
          mc("Who describes their family's diaspora as scattered across four countries?", ["A", "B", "C", "D"], 3, "Sam: 'Our family's diaspora is now scattered across four different countries'."),
          mc("Who was convinced fluency would determine whether the family truly settled?", ["A", "B", "C", "D"], 0, "Nadia: 'convinced that fluency was the single thing that would determine whether we genuinely settled'."),
          mc("Who mentions remittances continuing well into their own childhood?", ["A", "B", "C", "D"], 1, "Tom: 'a practice that continued faithfully for years afterwards, well into my own childhood'."),
          mc("Who found building a genuine social network abroad surprisingly difficult?", ["A", "B", "C", "D"], 2, "Priya: 'building a genuine, not merely polite, social network abroad proved surprisingly difficult'."),
          mc("Who notes each generation feels progressively less connected to their country of origin?", ["A", "B", "C", "D"], 3, "Sam: 'each generation seems to feel progressively less connected to our country of origin'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras) — CRONOMETRADO (40 min)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras) en un máximo de 40 minutos. En un debate sobre la migración se plantearon dos ideas:\n· countries have a moral duty to accept asylum seekers regardless of quotas (el deber moral de acoger solicitantes de asilo)\n· managed, controlled immigration serves everyone's interests better (la inmigración gestionada sirve mejor a todos)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de la semana (participio, absoluta, o conector de énfasis). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'What my town/city could learn from welcoming newcomers' — reflexiona con un ejemplo real o hipotético.\n· INFORME para un ayuntamiento sobre cómo mejorar la integración de nuevos residentes: Introduction / Current situation / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC) — CRONOMETRADO", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two aid workers discussing a resettlement programme. Woman: No sooner had the families arrived than local volunteers organised language classes for them. Man: That's made an enormous difference to how quickly they've settled in, honestly. Extract Two. You hear two economists discussing remittances. Man: Such is the scale of remittance flows now that they exceed official aid to some countries entirely. Woman: It's a private, steady source of support that governments simply can't easily replicate through policy alone. Extract Three. You hear two residents discussing a new arrival programme in their town. Woman: With resources stretched so thin already, I honestly worried we couldn't cope with more people arriving. Man: Same here initially, but the community really pulled together, and now I genuinely can't imagine the town without the new families who've settled here.", [
      mc("1. What did volunteers organise for the families?", ["Housing only.", "Language classes.", "Employment interviews."], 1, "'local volunteers organised language classes for them'."),
      mc("2. What has this achieved, according to the man?", ["Little real change.", "An enormous difference in how quickly they settled.", "Increased local resistance."], 1, "'made an enormous difference to how quickly they've settled in'."),
      mc("3. What does the man say about remittances?", ["They are declining.", "They now exceed official aid to some countries.", "They are irrelevant to development."], 1, "'they exceed official aid to some countries entirely'."),
      mc("4. What does the woman say about this source of support?", ["Governments could easily replicate it.", "It's private and steady, hard for governments to replicate.", "It has no real economic value."], 1, "'a private, steady source of support that governments simply can't easily replicate'."),
      mc("5. What did the woman initially worry about?", ["Housing prices.", "Whether they could cope with more people arriving.", "Language barriers only."], 1, "'I honestly worried we couldn't cope with more people arriving'."),
      mc("6. How does the man now feel about the new families?", ["He regrets their arrival.", "He can't imagine the town without them.", "He remains indifferent."], 1, "'I genuinely can't imagine the town without the new families'."),
    ]),

    ...speakingParts({ p1: "qué sabes sobre la experiencia migratoria de tu familia o comunidad", p2: "dos imágenes de la migración (una familia llegando a un nuevo país y voluntarios dando clases de idioma): compáralas y especula sobre lo que sienten las personas en cada situación", p3: "qué es más importante para una integración exitosa (aprender el idioma, encontrar trabajo, hacer amigos locales, mantener la propia cultura, tener apoyo del gobierno): comentadlo y elegid lo más decisivo", p4: "la migración y la movilidad global: si los países tienen el deber moral de acoger refugiados, qué papel debería tener la comunidad local frente al gobierno en la integración, y si las cuotas de inmigración son una política justa" }),

    SUMMARY("Resumen del Día 44 — Simulacro cronometrado", [
      "Practicados de forma combinada: cláusulas de participio, construcciones absolutas y conectores formales de énfasis.",
      "Vocabulario de migración y movilidad global. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 45", "Repasa los tres recursos de la semana (participios, absolutas, énfasis) y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 9."),
  ],
};

// ───────────────────────── DÍA 45 ─────────────────────────
const DAY45 = {
  title: "Día 45 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de las cláusulas de participio, las construcciones absolutas y los conectores formales de énfasis, con el vocabulario de patrimonio, tecnología, globalización y migración. Las 4 destrezas (formato C1); Listening P2. Al final, el mini-simulacro de la Semana 9.",
  pedagogy: {
    objective: "Consolidar los tres recursos de reducción/énfasis de cláusulas más característicos del registro escrito formal C1.",
    summary: "Repaso de participios/absolutas/énfasis; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso de la semana usarías con más confianza en tu propio Writing?", "Repásalo todo antes de la Semana 10 (repaso integral de estructuras clave)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 9 del C1. Consolidas las CLÁUSULAS DE PARTICIPIO, las CONSTRUCCIONES ABSOLUTAS y los CONECTORES FORMALES DE ÉNFASIS. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 9", `1) CLÁUSULA DE PARTICIPIO (mismo sujeto que la principal): -ing (activo) / -ed (pasivo) / having + p.p. (anterioridad). Cuidado con el participio colgante.
2) CONSTRUCCIÓN ABSOLUTA (sujeto PROPIO, distinto): with/without + sustantivo + participio; sustantivo + participio sin conjunción.
3) CONECTORES DE ÉNFASIS (+ inversión obligatoria al inicio de frase): no sooner… than / hardly-scarcely… when / such… that (+ sustantivo) / so… that (+ adjetivo, invertible).
Los tres son recursos de registro MUY formal — perfectos para el Writing P1 (essay) y muy frecuentes en el Reading P5-P8; úsalos con naturalidad, sin forzarlos en cada frase.`),
    grammarEx("Use of English — Repaso mixto de la Semana 9", "Completa o elige.", [
      mc("___ centuries ago, the site still attracts thousands of visitors.", ["Build", "Built", "Building"], 1, "participio pasado (pasivo): Built."),
      mc("With funding finally ___, the team could begin the project.", ["securing", "secured", "secure"], 1, "construcción absoluta: secured."),
      mc("No sooner ___ the deal signed than share prices began to rise.", ["was", "had", "did"], 0, "no sooner + pasiva + inversión: was."),
      fb("Having ___ (study) the site for years, archaeologists finally understood its purpose.", ["studied"], "having + p.p. (anterioridad)."),
      mc("___ was the impact that entire industries restructured overnight.", ["Such", "So", "Very"], 0, "such + verbo + sujeto (+ that)."),
      mc("Hardly had the market opened ___ prices started falling.", ["than", "when", "that"], 1, "hardly… WHEN (no 'than')."),
      fb("With resources ___ (stretch) thin, agencies struggled to cope.", ["stretched"], "construcción absoluta: with + sustantivo + participio pasado."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 9", "Repasa los mazos (patrimonio, tecnología, globalización, migración)."),
    vocabEx("Vocabulario — Repaso de la Semana 9", "Elige la opción correcta.", [
      mc("Digging to uncover buried archaeological remains:", ["excavation", "restoration", "looting"], 0, "excavation."),
      mc("An important scientific or technical advance:", ["breakthrough", "glitch", "obsolescence"], 0, "breakthrough."),
      mc("A tax imposed on imported or exported goods:", ["tariff", "subsidy", "deficit"], 0, "tariff."),
      mc("Being forced to leave home due to conflict or disaster:", ["displacement", "integration", "resettlement"], 0, "displacement."),
      mc("The illegal removal or theft of cultural objects:", ["looting", "preservation", "custody"], 0, "looting."),
      mc("No longer useful because something newer exists:", ["obsolete", "scalable", "proprietary"], 0, "obsolete."),
      mc("Moving production to another, usually cheaper, country:", ["outsourcing", "protectionism", "export"], 0, "outsourcing."),
      mc("Money sent home by migrants working abroad:", ["remittances", "quotas", "subsidies"], 0, "remittances."),
    ]),

    ...uoe({
      p1: {
        title: "What formal register still does for you",
        text: "Learners occasionally wonder whether mastering genuinely formal registers still (1)___ any real practical purpose in an era of increasingly casual, informal written communication. Having examined the question closely, most language professionals would (2)___ that it decidedly does, for reasons that extend well (3)___ simple academic requirement. Formal register signals precision, credibility and seriousness of purpose in exactly the (4)___ of contexts where those qualities matter most — legal documents, academic writing, professional correspondence at the highest levels. No sooner does a writer master these structures (5)___ their written work begins conveying a level of sophistication that casual register simply cannot replicate. Such is the practical value of this register (6)___ many professionals continue actively cultivating it throughout their entire careers, long after formal study itself has ended.",
        q: [
          mc("(1)", ["serves", "holds", "keeps", "does"], 0, "'still serves any real practical purpose'."),
          mc("(2)", ["argue", "claim", "state", "assert"], 0, "'would argue that it decidedly does'."),
          mc("(3)", ["beyond", "over", "above", "past"], 0, "'extend well beyond simple academic requirement'."),
          mc("(4)", ["kind", "sort", "type", "class"], 0, "'exactly the kind of contexts'."),
          mc("(5)", ["than", "when", "that", "as"], 0, "'No sooner does a writer master… than' (no sooner… than)."),
          mc("(6)", ["that", "which", "so", "as"], 0, "'Such is the… value… that many professionals…' (such… that)."),
        ],
      },
      p2: {
        title: "The lesson of the last four weeks",
        text: "Looking back across the past month of study, a clear pattern (1)___ emerge regarding which structures learners find genuinely difficult versus which merely feel unfamiliar (2)___ first encounter. The subjunctive, for instance, having initially seemed archaic and impractical, typically becomes considerably (3)___ natural once learners begin actively noticing it in genuine academic and journalistic texts. Participle clauses and absolute constructions follow a broadly similar trajectory: awkward and effortful at first, (4)___ progressively more natural with sustained, repeated exposure and deliberate practice. What this pattern suggests, encouragingly, is that difficulty at this advanced level is rarely permanent; it is, (5)___ often than not, simply a function of insufficient exposure rather (6)___ any genuine underlying difficulty with the structure itself.",
        q: [
          fb("(1)", ["begins", "starts", "seems"], "'a clear pattern begins to emerge'."),
          fb("(2)", ["on"], "'unfamiliar on first encounter'."),
          fb("(3)", ["more"], "'becomes considerably more natural'."),
          fb("(4)", ["becoming", "growing"], "'awkward at first, becoming progressively more natural'."),
          fb("(5)", ["more"], "'more often than not' (expresión fija)."),
          fb("(6)", ["than"], "'rather than any genuine… difficulty'."),
        ],
      },
      p3: {
        title: "Density, not decoration",
        text: "It would be a mistake to regard participle clauses, absolute constructions and formal emphatic connectors as mere stylistic (1)___, decorative flourishes added simply to impress an examiner. Their genuine (2)___ lies elsewhere: they allow writers to pack considerably more information into fewer words, achieving a density that (3)___ writing, particularly in contexts where space or reader attention is genuinely limited. A writer who deploys these structures with appropriate (4)___ — neither overusing them into unreadable density, nor avoiding them into flat, repetitive simplicity — demonstrates precisely the kind of register (5)___ that distinguishes advanced, genuinely proficient writing from writing that is merely grammatically (6)___.",
        items: [
          { root: "decorate", accepted: ["decoration", "decorations"], hint: "'mere stylistic decoration' → decoration." },
          { root: "value", accepted: ["value"], hint: "'Their genuine value lies elsewhere' (sustantivo)." },
          { root: "strong", accepted: ["strengthens"], hint: "'a density that strengthens writing' → strengthens (verbo)." },
          { root: "modernise", accepted: ["moderation"], hint: "'appropriate moderation' → moderation (ojo: no deriva de 'modernise', sino de 'moderate')." },
          { root: "sense", accepted: ["sensitivity"], hint: "'register sensitivity' → sensitivity." },
          { root: "correct", accepted: ["correct"], hint: "'merely grammatically correct' (adjetivo, forma base)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso de la Semana 9",
        items: [
          { s1: "Because she had studied the site for years, she finally understood its purpose.", key: "HAVING", s2: "___ studied the site for years, she finally understood its purpose.", accepted: ["having"], explanation: "having + p.p." },
          { s1: "Because funding was secured, the team could begin the project.", key: "SECURED", s2: "With funding ___, the team could begin the project.", accepted: ["secured"], explanation: "construcción absoluta." },
          { s1: "She had barely arrived when the meeting began.", key: "SOONER", s2: "No ___ had she arrived than the meeting began.", accepted: ["sooner"], explanation: "no sooner… than." },
          { s1: "The impact was so great that industries restructured overnight.", key: "SUCH", s2: "___ was the impact that industries restructured overnight.", accepted: ["such"], explanation: "such… that." },
          { s1: "The manuscript was damaged in the fire and could never be restored.", key: "DAMAGED", s2: "The manuscript, ___ in the fire, could never be restored.", accepted: ["damaged"], explanation: "participio pasado (pasivo)." },
          { s1: "The market had barely opened when prices started falling.", key: "HARDLY", s2: "___ had the market opened when prices started falling.", accepted: ["hardly"], explanation: "hardly… when." },
        ],
      },
      p5: {
        title: "The student who kept a grammar diary",
        text: "Among the many strategies language teachers routinely recommend to advanced learners, few divide opinion quite as sharply as keeping a dedicated 'grammar diary' — a personal, ongoing record of new structures encountered, alongside genuine attempts to actively use each one in original, self-generated sentences.\n\nSceptics argue the exercise smacks of old-fashioned, mechanical rote learning, poorly suited to how language is genuinely, naturally acquired through meaningful communication and authentic exposure. Advocates counter that deliberate, structured attention to specific forms, particularly at advanced levels where errors have often become deeply entrenched habits, can meaningfully accelerate progress that exposure alone, however extensive, often fails to achieve on its own.\n\nOne learner's experience, documented in unusual detail across several years of dedicated, sustained study, offers a genuinely useful, if inevitably anecdotal, perspective on this ongoing debate. Having struggled for years with formal written register despite otherwise strong general fluency, she began keeping a structured diary specifically tracking structures like participle clauses, absolute constructions and formal emphatic connectors.\n\nHer method proved deceptively straightforward: upon encountering an unfamiliar structure in authentic reading, she would record it, along with its precise context, then deliberately compose several original sentences using that exact same structure over the following days, gradually working the new form into her own active, spontaneous writing until it began to feel less consciously effortful.\n\nProgress, by her own honest account, proved considerably slower and less linear than she had initially, perhaps naively, hoped. Certain structures, particularly the more heavily inverted emphatic connectors, took months of repeated, deliberate practice before beginning to feel remotely natural rather than laboriously constructed.\n\nWhat ultimately convinced her the method was genuinely working was not any single dramatic breakthrough moment, but rather a gradual, cumulative shift she began noticing in her own unplanned, spontaneous writing: participle clauses and absolute constructions started appearing naturally, unprompted, in emails and reports where she hadn't consciously, deliberately planned to use them at all.\n\nHer experience, while admittedly just one single case among countless possible learner experiences, nonetheless offers cautious, qualified support for a genuinely balanced view: neither pure, unstructured exposure alone nor purely mechanical drilling alone seems clearly, consistently sufficient at this advanced level. What seems to work best, her own case suggests, is deliberate attention to specific new forms, followed immediately by sustained, genuine, authentic use.",
        q: [
          mc("What do sceptics of the grammar diary argue?", ["It's highly effective.", "It resembles old-fashioned rote learning, poorly suited to natural acquisition.", "It's too expensive.", "It requires a teacher."], 1, "'the exercise smacks of old-fashioned, mechanical rote learning'."),
          mc("What do advocates argue in response?", ["Exposure alone is always sufficient.", "Deliberate attention can accelerate progress that exposure alone often fails to achieve.", "Grammar diaries are unnecessary at advanced levels.", "Errors don't matter at advanced levels."], 1, "'deliberate, structured attention… can meaningfully accelerate progress that exposure alone… often fails to achieve'."),
          mc("What was the student's method?", ["Memorising rules only.", "Recording unfamiliar structures and composing original sentences with them.", "Only reading, no writing.", "Studying with a private tutor."], 1, "'she would record it… then deliberately compose several original sentences using that exact same structure'."),
          mc("How did her progress unfold?", ["Fast and linear.", "Slower and less linear than she had hoped.", "Immediate.", "Entirely absent."], 1, "'Progress… proved considerably slower and less linear than she had initially… hoped'."),
          mc("What ultimately convinced her the method was working?", ["A single breakthrough moment.", "A gradual shift noticing structures appearing naturally in unplanned writing.", "A teacher's feedback.", "Passing an exam."], 1, "'a gradual, cumulative shift… participle clauses and absolute constructions started appearing naturally, unprompted'."),
          mc("What does her experience suggest works best?", ["Pure exposure alone.", "Deliberate attention to new forms followed by sustained authentic use.", "Mechanical drilling alone.", "Avoiding formal structures entirely."], 1, "'deliberate attention to specific new forms, followed immediately by sustained, genuine, authentic use'."),
        ],
      },
      p6: {
        title: "Is deliberate grammar study still worth it at advanced level?",
        intro: "Cuatro estudiantes de C1 debatan si merece la pena el estudio deliberado de la gramática en niveles avanzados.",
        texts: {
          A: "NADIA: Absolutely, still. At this level the remaining gaps are often quite specific and stubborn; deliberate, targeted study closes them far faster than simply hoping enough exposure will eventually do the job on its own, especially for less frequent structures.",
          B: "TOM: I've become more sceptical, honestly. I've learned considerably more from reading extensively and just noticing patterns than from any explicit grammar study these past few months. Deliberate study feels, to me, like it delivers diminishing returns at this particular stage.",
          C: "PRIYA: For me it genuinely depends entirely on the specific structure. Common patterns I absorb naturally through exposure; rarer, more formal structures like this week's genuinely need deliberate, explicit attention, or I simply never encounter them often enough to actually internalise them.",
          D: "SAM: My honest view is that the combination is what actually matters here, not either approach in isolation. Deliberate study without extensive exposure produces stilted textbook English; extensive exposure without any deliberate attention produces frustratingly slow, inefficient progress.",
        },
        q: [
          mc("Who believes deliberate study is still absolutely worth it at this level?", ["A", "B", "C", "D"], 0, "Nadia: 'Absolutely, still… deliberate, targeted study closes them far faster'."),
          mc("Whose view most directly QUALIFIES Nadia's, expressing scepticism about explicit study?", ["A", "B", "C", "D"], 1, "Tom: 'I've become more sceptical, honestly'."),
          mc("Who thinks it depends on how common or rare the specific structure is?", ["A", "B", "C", "D"], 2, "Priya: 'it genuinely depends entirely on the specific structure'."),
          mc("Who argues the combination of both approaches is what matters?", ["A", "B", "C", "D"], 3, "Sam: 'the combination is what actually matters here, not either approach in isolation'."),
        ],
      },
      p7: {
        title: "Nine weeks in",
        text: "Reaching the end of the ninth week of a demanding, cumulative language course invites a particular kind of honest reflection. (1)___\n\nThe material covered these past few weeks — the subjunctive, nominalisation, rhetorical structure, figurative language, participle clauses, absolute constructions, emphatic connectors — represents, collectively, some of the densest, most register-specific content the course offers. (2)___ Almost none of it comes up naturally in casual, everyday conversation.\n\nYet this is precisely the material that most clearly separates upper-intermediate competence from genuine C1 mastery. (3)___ A learner who handles everyday conversation fluently but struggles with this register has not yet reached the level the exam is actually designed to certify.\n\nWhat nine weeks of sustained, deliberate practice with this material actually builds is not, primarily, instant fluent recall of every individual rule. (4)___ It builds something closer to pattern recognition — an increasingly reliable instinct for when a given structure would serve a text well.\n\nThis instinct develops unevenly, in fits and starts, rather than through any single smooth, steady curve of improvement. (5)___ Some weeks feel like genuine breakthroughs; others feel frustratingly, stubbornly stagnant despite equally sustained effort.\n\nFor any learner who has worked seriously through these first nine weeks, real, substantial progress has been made, regardless of today's felt sense of remaining difficulty. (6)___ Three weeks remain before the course's own final stretch begins — weeks that will consolidate, more than introduce, what has already been genuinely built.",
        options: [
          "It's worth pausing to take honest stock of what's actually changed.", // A -> gap1
          "Little of it belongs to casual, spoken registers.",  // B -> gap2
          "This register is, in a real sense, part of what the exam actually tests.", // C -> gap3
          "Instant recall was never really the realistic goal.",  // D -> gap4
          "Progress rarely moves in one smooth, predictable line.", // E -> gap5
          "What's left ahead is consolidation, not another mountain to climb.", // F -> gap6
          "None of this material has ever appeared in any actual C1 exam.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: vale la pena hacer balance honesto."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: poco pertenece al registro oral cotidiano."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: este registro es parte de lo que evalúa el examen."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el recuerdo instantáneo nunca fue la meta realista."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el progreso rara vez es una línea suave."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: lo que queda es consolidación, no otra montaña."),
        ],
      },
      p8: {
        title: "Four learners reflect on nine weeks of C1 study",
        text: "Read what four learners say about their first nine weeks of studying for the C1 exam.\n\nA) NADIA: The subjunctive and the mandative structures from Week 8 genuinely transformed how I read academic texts — I now notice register shifts I would have completely missed a couple of months ago. That said, actively producing this register myself, in my own writing, still requires real conscious effort every single time.\n\nB) TOM: Honestly, participle clauses were the real turning point for me this week. Once I finally understood the difference between the reduced clause and the absolute construction, a whole category of sentences I'd previously found genuinely confusing in Reading P5 to P8 suddenly, quite satisfyingly, clicked into place.\n\nC) PRIYA: What I've valued most across these nine weeks isn't any single grammar point, honestly, but the cumulative vocabulary — surveillance, heritage, globalisation, migration. I can now discuss genuinely complex, abstract topics in English that I simply couldn't have attempted at all two months ago.\n\nD) SAM: I'll be honest, the emphatic connectors from this week — no sooner, hardly, such… that — still feel the most artificial and effortful to me of everything covered so far. I understand them perfectly well on paper; producing them naturally under real time pressure remains a genuine, ongoing struggle.\n",
        q: [
          mc("Who says the subjunctive transformed how they read academic texts?", ["A", "B", "C", "D"], 0, "Nadia: 'The subjunctive and the mandative structures… genuinely transformed how I read academic texts'."),
          mc("Who found participle clauses the real turning point this week?", ["A", "B", "C", "D"], 1, "Tom: 'participle clauses were the real turning point for me this week'."),
          mc("Who values the cumulative vocabulary most, across topics like surveillance and migration?", ["A", "B", "C", "D"], 2, "Priya: 'What I've valued most across these nine weeks… is the cumulative vocabulary'."),
          mc("Who finds emphatic connectors still the most artificial and effortful?", ["A", "B", "C", "D"], 3, "Sam: 'the emphatic connectors from this week… still feel the most artificial and effortful'."),
          mc("Who still finds actively producing formal register requires real conscious effort?", ["A", "B", "C", "D"], 0, "Nadia: 'actively producing this register myself… still requires real conscious effort'."),
          mc("Who previously found certain Reading sentences confusing before this week?", ["A", "B", "C", "D"], 1, "Tom: 'a whole category of sentences I'd previously found genuinely confusing… suddenly… clicked into place'."),
          mc("Who says they can now discuss complex topics they couldn't attempt two months ago?", ["A", "B", "C", "D"], 2, "Priya: 'I can now discuss genuinely complex, abstract topics… that I simply couldn't have attempted at all two months ago'."),
          mc("Who understands the week's structures well on paper but struggles under time pressure?", ["A", "B", "C", "D"], 3, "Sam: 'I understand them perfectly well on paper; producing them naturally under real time pressure remains a genuine… struggle'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el estudio de idiomas se plantearon dos ideas:\n· deliberate, explicit grammar study is essential at advanced level (el estudio deliberado de la gramática es esencial)\n· extensive exposure and reading matter more than explicit study (la exposición extensa importa más que el estudio explícito)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de la semana (participio, absoluta, o conector de énfasis). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'The grammar structure that finally clicked' — reflexiona sobre un recurso de la semana que te costó y cómo lo entendiste.\n· RESEÑA de un recurso, app o método que te haya ayudado a estudiar inglés: descríbelo y valóralo.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (8 huecos)", "Escucha a una profesora de inglés hablando sobre cómo dominar el registro formal C1 (se oye dos veces). Completa las frases con la información que oigas (máx. 3 palabras).", "This is Part Two. You will hear a teacher talking about mastering formal C1 register. The three structures we've covered this week — participle clauses, absolute constructions and emphatic connectors — all share one thing in common: they let you pack more meaning into fewer words. That density is exactly what examiners are listening and reading for at this level. My advice is to start small. Pick just one structure and try using it three times this week in your own writing, rather than attempting all three structures at once, which usually just leads to forced, unnatural sentences. Having taught this level for over fifteen years now, I've noticed that participle clauses tend to click fastest for most learners, probably because they're the most visually similar to structures many learners already recognise from reading. Absolute constructions typically take a bit longer, maybe three or four weeks of regular practice before they start feeling natural. The emphatic connectors, honestly, are usually the last to feel comfortable, mainly because of the inversion involved; most learners need real, sustained exposure before that stops feeling forced. My final piece of advice: don't force these structures into every single sentence. One well-placed participle clause has more impact than five clumsy ones crammed into a single paragraph.", [
      fb("1. The three structures all let you pack more ___ into fewer words.", ["meaning"], "'they let you pack more meaning into fewer words'."),
      fb("2. Advice: pick just ___ structure and use it three times this week.", ["one"], "'Pick just one structure and try using it three times'."),
      fb("3. The teacher has taught this level for over ___ years.", ["fifteen", "15"], "'Having taught this level for over fifteen years'."),
      fb("4. ___ clauses tend to click fastest for most learners.", ["Participle"], "'participle clauses tend to click fastest'."),
      fb("5. This is probably because they're visually similar to structures learners already ___.", ["recognise", "recognize"], "'structures many learners already recognise'."),
      fb("6. Absolute constructions typically take three or ___ weeks of regular practice.", ["four"], "'maybe three or four weeks of regular practice'."),
      fb("7. Emphatic connectors are usually the last to feel comfortable mainly because of the ___ involved.", ["inversion"], "'mainly because of the inversion involved'."),
      fb("8. Final advice: don't force these structures into every single ___.", ["sentence"], "'don't force these structures into every single sentence'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido esta semana que te resulte más útil para tu propio inglés", p2: "dos imágenes del aprendizaje de idiomas (alguien leyendo un texto académico denso y alguien practicando conversación con otra persona): compáralas y especula sobre qué aprende cada una", p3: "qué método es más eficaz para dominar estructuras gramaticales avanzadas (estudio explícito de reglas, lectura extensiva, práctica de escritura, corrección de un profesor, repetición espaciada): comentadlo y elegid el más eficaz", p4: "el aprendizaje avanzado de idiomas: si el registro formal sigue mereciendo tanto esfuerzo, cómo se equilibra la exposición natural con el estudio deliberado, y qué papel tiene la constancia frente al talento en el dominio de un idioma" }),

    SUMMARY("Resumen de la Semana 9 (C1)", [
      "Dominas las cláusulas de participio, las construcciones absolutas y los conectores formales de énfasis (con inversión).",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con temas de patrimonio, tecnología, globalización y migración.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: REPASO INTEGRAL de toda la gramática del curso (Semanas 1-9) antes de la recta final.",
    ]),
    INFO("Mini-simulacro de la Semana 9", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 10."),
  ],
};

export const WEEK9 = {
  n: 9,
  theme: "Las cláusulas de participio y las construcciones absolutas · El patrimonio, la tecnología, la globalización y la migración",
  description: "Cláusulas de participio (-ing/-ed/having+p.p.), construcciones absolutas (with/without + sustantivo + participio) y conectores formales de énfasis con inversión (no sooner… than, hardly… when, such/so… that), con el hilo del patrimonio cultural, la tecnología, la globalización y la migración. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY41, DAY42, DAY43, DAY44, DAY45],
};
