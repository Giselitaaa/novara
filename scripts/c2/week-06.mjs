/**
 * C2 Proficiency · Semana 6 — "Idioms, proverbios y precisión colocacional de nivel C2 · La cultura y la tradición".
 * Gramática/léxico: idioms y expresiones figuradas poco frecuentes incluso en
 * C1, proverbios y su uso retórico en el ensayo formal, y precisión
 * colocacional (evitar falsos amigos y colocaciones cercanas pero incorrectas).
 * Cada día, las 4 destrezas con el formato real del C2 (Reading & UoE de 7 partes).
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

const speakingParts = ({ p1, p2, p3 }) => [
  SPEAKING_HEAD,
  speaking(1, "Speaking · Parte 1 — Entrevista", "Responde con respuestas desarrolladas y genuinamente reflexivas (3–4 frases con razones y matices).", `Parte 1 del C2: preguntas personales (${p1})`, "responder con profundidad, matiz y precisión léxica", "what strikes me most, to a certain extent, if I'm entirely honest, the way I see it"),
  speaking(2, "Speaking · Parte 2 — Tarea colaborativa", "Comentad la(s) imagen(es) a fondo, respondiendo a la pregunta planteada, y llegad a una decisión conjunta (4 min).", `Parte 2 del C2: comentar juntos ${p2} y decidir`, "evaluar, negociar y matizar con registro muy formal", "there's a compelling case for, on reflection, I take your point entirely, that said, shall we settle on"),
  speaking(3, "Speaking · Parte 3 — Turno largo + discusión", "Habla ~2 minutos sin interrupción sobre el tema dado; tu compañero/a comenta brevemente; después, discusión conjunta (~6 min).", `Parte 3 del C2: turno largo y discusión sobre ${p3}`, "argumentar con sofisticación, generalizar y matizar", "it could be argued that, up to a point, conversely, in the final analysis, be that as it may"),
];

// ───────────────────────── DÍA 26 ─────────────────────────
const DAY26 = {
  title: "Día 26 — Idioms y expresiones figuradas de nivel C2 · El patrimonio cultural y la tradición",
  description: "Idioms y expresiones figuradas poco frecuentes incluso en C1, propias del inglés escrito culto y del habla de nativos muy formados. Vocabulario del patrimonio cultural. Las 4 destrezas (formato C2); Listening P1.",
  pedagogy: {
    objective: "Ampliar el repertorio idiomático a expresiones de baja frecuencia pero alta presencia en el inglés culto escrito y hablado.",
    summary: "Idioms de nivel C2; patrimonio cultural y tradición; Use of English P1–P7, Writing, Listening P1, Speaking P1–P3.",
    commonMistakes: ["usar un idiom fuera de su registro apropiado (algunos son coloquiales, otros formales/literarios — no son intercambiables).", "traducir un idiom español literalmente en vez de usar el equivalente idiomático inglés real.", "sobreusar idioms en el Writing formal — un idiom bien colocado tiene más impacto que varios forzados."],
    reviewPrompts: ["¿Qué significa 'to throw down the gauntlet'?", "¿Cuándo usarías 'a Pyrrhic victory' en vez de simplemente 'a costly victory'?"],
  },
  items: [
    TEXT("🎓 Semana 6 del C2. Hoy: IDIOMS Y EXPRESIONES FIGURADAS de baja frecuencia pero alta presencia en el inglés culto — el último gran bloque léxico antes de la recta final del curso. Vocabulario: el PATRIMONIO CULTURAL y la TRADICIÓN."),
    GRAMMAR("Idioms y expresiones figuradas de nivel C2", `Estos idioms aparecen constantemente en el ensayo, el periodismo de calidad y la conversación culta, pero rara vez se enseñan explícitamente antes de C2:
· TO THROW DOWN THE GAUNTLET (lanzar un desafío formal): The senator's speech effectively threw down the gauntlet to her political rivals.
· A PYRRHIC VICTORY (victoria pírrica, con coste tan alto que equivale casi a una derrota): The lawsuit's outcome proved a Pyrrhic victory, costing the company more than it ultimately gained.
· TO MOVE THE GOALPOSTS (cambiar las reglas/criterios a mitad de proceso, injustamente): Critics accused the committee of moving the goalposts after the fact.
· A FLASH IN THE PAN (éxito breve y sin continuidad): Many feared the reform would prove merely a flash in the pan.
· TO SET A PRECEDENT (sentar un precedente, repaso léxico ya visto como sustantivo): The ruling set an important precedent for future cases.
· TO BE HOIST WITH ONE'S OWN PETARD (caer en la propia trampa, ser víctima del propio plan): The politician was hoist with his own petard when the leaked memo confirmed his critics' accusations.
· A DOUBLE-EDGED SWORD (repaso, ya visto en niveles anteriores).
· TO READ THE WRITING ON THE WALL (ver venir lo inevitable): Experienced analysts had read the writing on the wall months before the crisis fully unfolded.
⚠️ Estos idioms tienen un origen histórico/literario específico (a menudo bíblico, clásico o shakespeariano) — conocer su origen ayuda a recordar su significado exacto y a usarlos con la connotación correcta.`),
    WARN("Errores típicos en C2", "· No traduzcas idioms españoles literalmente — busca siempre el equivalente idiomático inglés real, no una traducción palabra por palabra.\n· Verifica el registro: algunos de estos idioms son apropiados para el Writing formal; otros suenan mejor en el Speaking.\n· Un idiom mal aplicado (con connotación incorrecta) es peor que no usar ninguno — verifica el significado exacto antes de usarlo en el examen.\n· No fuerces varios idioms en el mismo párrafo — uno bien colocado tiene más impacto retórico que varios apilados."),
    grammarEx("Use of English — Idioms de nivel C2", "Elige el idiom que mejor complete el significado.", [
      mc("The senator's speech effectively ___ to her political rivals.", ["threw down the gauntlet", "moved the goalposts", "read the writing on the wall"], 0, "throw down the gauntlet: lanzar un desafío formal."),
      mc("The lawsuit's outcome proved a ___, costing the company more than it gained.", ["Pyrrhic victory", "flash in the pan", "double-edged sword"], 0, "Pyrrhic victory: victoria con coste excesivo."),
      mc("Critics accused the committee of ___ after the process had already begun.", ["moving the goalposts", "throwing down the gauntlet", "setting a precedent"], 0, "move the goalposts: cambiar las reglas a mitad de proceso."),
      mc("Many feared the reform would prove merely a ___.", ["flash in the pan", "Pyrrhic victory", "double-edged sword"], 0, "flash in the pan: éxito breve sin continuidad."),
      mc("The politician was ___ when the leaked memo confirmed his critics' accusations.", ["hoist with his own petard", "reading the writing on the wall", "moving the goalposts"], 0, "hoist with one's own petard: caer en la propia trampa."),
      mc("Experienced analysts had ___ months before the crisis fully unfolded.", ["read the writing on the wall", "thrown down the gauntlet", "moved the goalposts"], 0, "read the writing on the wall: ver venir lo inevitable."),
    ]),
    GRAMMAR("Vocabulario del día — El patrimonio cultural y la tradición (C2)", "Léxico de maestría sobre patrimonio cultural."),
    deck("C2 S6D26 — Patrimonio cultural y tradición", [
      ["intangible heritage", "patrimonio inmaterial", "Oral storytelling traditions form part of humanity's intangible heritage.", "sustantivo", "ɪnˈtændʒəbl ˈherɪtɪdʒ"],
      ["custodianship", "custodia, tutela (de un patrimonio)", "Museums bear genuine custodianship responsibilities towards artefacts.", "sustantivo", "kʌˈstəʊdiənʃɪp"],
      ["syncretism", "sincretismo (cultural/religioso)", "The festival reflects centuries of religious syncretism.", "sustantivo", "ˈsɪŋkrətɪzəm"],
      ["vernacular architecture", "arquitectura vernácula/tradicional", "Vernacular architecture reflects local climate and available materials.", "sustantivo", "vəˈnækjələ ˈɑːkɪtektʃə"],
      ["ethnography", "etnografía", "Her ethnography documents a rapidly disappearing way of life.", "sustantivo", "eθˈnɒgrəfi"],
      ["assimilation", "asimilación (cultural)", "Forced assimilation policies suppressed indigenous languages for decades.", "sustantivo", "əˌsɪmɪˈleɪʃn"],
      ["revitalise", "revitalizar (una tradición/lengua)", "Community efforts have helped revitalise the endangered language.", "verbo", "riːˈvaɪtəlaɪz"],
      ["indigenous", "indígena", "Indigenous communities have preserved this practice for generations.", "adjetivo", "ɪnˈdɪdʒɪnəs"],
      ["diaspora", "diáspora", "The diaspora maintained cultural practices far from their homeland.", "sustantivo", "daɪˈæspərə"],
      ["provenance", "procedencia (cultural, de un objeto)", "Establishing an artefact's provenance proved genuinely difficult.", "sustantivo", "ˈprɒvənəns"],
    ]),
    vocabEx("Vocabulario — El patrimonio cultural y la tradición", "Elige la opción correcta.", [
      mc("Non-physical cultural heritage such as oral traditions or rituals:", ["intangible heritage", "vernacular architecture", "provenance"], 0, "intangible heritage."),
      mc("The blending of different religious or cultural traditions:", ["syncretism", "assimilation", "ethnography"], 0, "syncretism."),
      mc("The forced or gradual adoption of a dominant culture's norms:", ["assimilation", "syncretism", "custodianship"], 0, "assimilation."),
      mc("To bring new life or energy back to a declining tradition:", ["revitalise", "assimilate", "document"], 0, "revitalise."),
      mc("Originating from and native to a particular region:", ["indigenous", "diasporic", "vernacular"], 0, "indigenous."),
      mc("A community living outside their traditional homeland:", ["diaspora", "ethnography", "provenance"], 0, "diaspora."),
    ]),

    ...uoe({
      p1: {
        title: "The politics of intangible heritage",
        text: "UNESCO's formal recognition of intangible cultural heritage — oral traditions, performing arts, traditional craftsmanship — represents a genuinely significant (1)___ from earlier heritage frameworks that focused almost exclusively on physical monuments and tangible artefacts. This broadened recognition effectively (2)___ down the gauntlet to a heritage preservation field that had, for decades, implicitly privileged stone and material culture over living, embodied tradition. Critics of the expanded framework worry it risks becoming a (3)___ victory: formal recognition without adequate accompanying resources may ultimately prove insufficient to genuinely sustain traditions facing serious, ongoing pressure from globalisation and cultural (4)___. To the extent that formal recognition alone (5)___ meaningful preservation, this concern deserves genuine, serious attention. Notwithstanding these legitimate reservations, most heritage scholars broadly welcome the expanded framework, arguing that formally acknowledging intangible heritage's genuine value represents a necessary, if insufficient, (6)___ towards more genuinely comprehensive cultural preservation.",
        q: [
          mc("(1)", ["departure", "shift", "move", "change"], 0, "'a genuinely significant departure from earlier… frameworks'."),
          mc("(2)", ["threw", "throws", "throwing", "thrown"], 1, "'effectively throws down the gauntlet'."),
          mc("(3)", ["Pyrrhic", "hollow", "empty", "costly"], 0, "'risks becoming a Pyrrhic victory'."),
          mc("(4)", ["homogenisation", "standardisation", "uniformity", "conformity"], 0, "'pressure from globalisation and cultural homogenisation'."),
          mc("(5)", ["guarantees", "ensures", "secures", "achieves"], 1, "'formal recognition alone ensures meaningful preservation'."),
          mc("(6)", ["step", "move", "stride", "measure"], 0, "'a necessary… step towards more… comprehensive… preservation'."),
        ],
      },
      p2: {
        title: "When revival becomes a flash in the pan",
        text: "Language revitalisation efforts, notwithstanding genuine, sustained community enthusiasm at their initial outset, frequently struggle to avoid becoming merely a flash (1)___ the pan, generating considerable initial excitement that gradually, inevitably fades once early enthusiasm meets the genuine, sustained practical difficulty of actually teaching a language (2)___ few remaining fluent speakers survive to serve as living teachers. Successful revitalisation efforts, in light of numerous documented case studies, typically require (3)___ than short-term enthusiasm alone; they demand sustained institutional support, genuine intergenerational transmission mechanisms, and realistic long-term funding commitments extending considerably beyond any single initial (4)___ or grant cycle. Communities that have read the writing (5)___ the wall regarding a language's genuine, accelerating decline have sometimes moved decisively to establish formal, structured immersion programmes before the language's last fluent speakers pass (6)___, recognising that revitalisation attempted too late often proves considerably harder, or occasionally genuinely impossible, to achieve.",
        q: [
          fb("(1)", ["in"], "'a flash in the pan'."),
          fb("(2)", ["whose", "for which"], "'a language whose few remaining… speakers survive'."),
          fb("(3)", ["more"], "'require more than short-term enthusiasm'."),
          fb("(4)", ["initiative", "programme", "campaign"], "'any single initial initiative/programme/campaign'."),
          fb("(5)", ["on"], "'read the writing on the wall'."),
          fb("(6)", ["away"], "'before… speakers pass away'."),
        ],
      },
      p3: {
        title: "Provenance and the burden of proof",
        text: "Establishing an artefact's genuine (1)___ — its documented chain of ownership across time — has become an increasingly consequential (2)___ within museum and heritage circles, particularly regarding objects acquired during colonial periods under (3)___ that would rarely, if ever, meet contemporary ethical standards. Museums that fail to (4)___ rigorous provenance research risk finding themselves hoist with their own petard, having unknowingly displayed artefacts whose original (5)___ involved circumstances the institution itself would now, if genuinely honest, find deeply uncomfortable to publicly acknowledge. This growing (6)___ has prompted many major institutions to invest considerably more heavily in provenance research than in previous decades, treating rigorous historical documentation as an essential ethical obligation rather than a mere optional academic curiosity.",
        items: [
          { root: "prove", accepted: ["provenance"], hint: "'an artefact's genuine provenance' (sustantivo, ya dado en el título)." },
          { root: "concern", accepted: ["concern"], hint: "'an increasingly consequential concern' (sustantivo)." },
          { root: "circumstance", accepted: ["circumstances"], hint: "'acquired… under circumstances that would rarely… meet standards' → circumstances." },
          { root: "conduct", accepted: ["conduct"], hint: "'fail to conduct rigorous provenance research' (verbo)." },
          { root: "acquire", accepted: ["acquisition"], hint: "'whose original acquisition involved circumstances' → acquisition." },
          { root: "aware", accepted: ["awareness"], hint: "'This growing awareness has prompted' → awareness." },
        ],
      },
      p4: {
        title: "Transformaciones — idioms de nivel C2",
        items: [
          { s1: "The senator's speech effectively issued a formal challenge to her political rivals.", key: "GAUNTLET", s2: "The senator's speech effectively threw down the ___ to her political rivals.", accepted: ["gauntlet"], explanation: "throw down the gauntlet." },
          { s1: "The lawsuit's outcome cost the company more than it ultimately gained.", key: "PYRRHIC", s2: "The lawsuit's outcome proved a ___ victory.", accepted: ["pyrrhic", "Pyrrhic"], explanation: "a Pyrrhic victory." },
          { s1: "Critics accused the committee of unfairly changing the rules mid-process.", key: "GOALPOSTS", s2: "Critics accused the committee of moving the ___ after the fact.", accepted: ["goalposts"], explanation: "move the goalposts." },
          { s1: "Many feared the reform would prove to be a brief, unsustained success.", key: "FLASH", s2: "Many feared the reform would prove merely a ___ in the pan.", accepted: ["flash"], explanation: "a flash in the pan." },
          { s1: "Experienced analysts had seen the crisis coming months in advance.", key: "WRITING", s2: "Experienced analysts had read the ___ on the wall months before the crisis fully unfolded.", accepted: ["writing"], explanation: "read the writing on the wall." },
        ],
      },
      p5: {
        title: "The village that revived its own dying craft",
        text: "A small rural village, home to one of the last remaining practitioners of a centuries-old traditional weaving technique, faced what many residents openly, candidly described as a genuine race against time when the sole remaining master craftsperson, well into her eighties, had no formally trained successor to whom she could pass on her considerable accumulated technical knowledge.\n\nHaving read the writing on the wall regarding this particular craft's genuinely imminent disappearance, a small group of concerned younger residents threw down the gauntlet to their own broader community, proposing an ambitious, formally structured apprenticeship programme specifically designed to document and transmit the technique before it was permanently, irretrievably lost.\n\nThe initial response, it must honestly be said, proved genuinely mixed. Some villagers enthusiastically supported the initiative; others worried, not entirely unreasonably, that the effort would prove merely a flash in the pan, generating considerable initial enthusiasm before eventually, predictably fading once the genuine, sustained difficulty of actually mastering such a demanding traditional craft became fully, properly apparent to eager but inexperienced beginners.\n\n\"We knew from the very outset that we risked a Pyrrhic victory of sorts,\" one organiser later reflected candidly, \"successfully documenting the technique on paper while still, quite possibly, failing to create genuinely living, embodied knowledge capable of being passed on meaningfully to future generations.\"\n\nThe programme's eventual design deliberately, carefully avoided several documented pitfalls that had previously undermined broadly comparable revitalisation efforts elsewhere. Rather than a single, intensive workshop, it established a genuinely sustained, multi-year apprenticeship structure, insofar as sustained, hands-on practice over considerable time proved genuinely essential for internalising the technique's countless subtle, difficult-to-verbalise physical details.\n\nNotwithstanding real, ongoing financial constraints that repeatedly threatened the programme's continued viability, the initiative gradually, steadily gained sufficient momentum to attract modest but genuinely meaningful external cultural preservation funding, funding that ultimately proved essential to the programme's eventual longer-term sustainability.\n\nFive years on from that uncertain, tentative beginning, three younger practitioners had achieved genuine proficiency in the traditional technique, with two more currently continuing their own ongoing training. \"By the same token that we could have simply, quietly let this craft disappear entirely,\" the original organiser reflected, \"we chose instead to fight for something that, notwithstanding all the very real difficulty involved, genuinely mattered enormously to who we collectively are as a community.\"",
        q: [
          mc("What crisis did the village face?", ["Economic collapse.", "The last master craftsperson had no trained successor.", "The craft technique was already lost.", "Government interference."], 1, "'the sole remaining master craftsperson… had no formally trained successor'."),
          mc("What did the younger residents propose?", ["Abandoning the craft entirely.", "A formally structured apprenticeship programme.", "Selling the technique to a company.", "Moving the craft to another village."], 1, "'proposing an ambitious, formally structured apprenticeship programme specifically designed to document and transmit the technique'."),
          mc("What did some villagers worry about?", ["Nothing at all.", "That the effort would prove merely a flash in the pan.", "That it would cost too much immediately.", "That outsiders would steal the technique."], 1, "'others worried… that the effort would prove merely a flash in the pan'."),
          mc("What structure did the programme's design use?", ["A single intensive workshop.", "A genuinely sustained, multi-year apprenticeship structure.", "Online video tutorials only.", "A one-day certification course."], 1, "'it established a genuinely sustained, multi-year apprenticeship structure'."),
          mc("What threatened the programme's viability?", ["Nothing significant.", "Real, ongoing financial constraints.", "Government opposition.", "Lack of interested apprentices."], 1, "'Notwithstanding real, ongoing financial constraints that repeatedly threatened the programme's continued viability'."),
          mc("What was the outcome five years on?", ["Complete failure.", "Three practitioners achieved proficiency, with two more training.", "The craft was still entirely undocumented.", "The programme was cancelled."], 1, "'three younger practitioners had achieved genuine proficiency… with two more currently continuing their own ongoing training'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Cultural preservation efforts worldwide face a persistent, genuinely difficult tension between honouring tradition as it has historically existed and allowing living culture to naturally, organically evolve as circumstances and communities themselves genuinely change over time. (1)___\n\nSome preservation approaches favour something close to strict fidelity, documenting and maintaining traditions as precisely, faithfully as possible relative to some particular, chosen historical reference point. (2)___ Proponents argue this approach honours genuine historical authenticity and prevents valuable, irreplaceable knowledge from being gradually, quietly diluted or lost through incremental, unrecorded change.\n\nOther approaches favour treating tradition as something inherently, necessarily living and adaptive, evolving naturally as circumstances genuinely change rather than being frozen at some particular, arbitrarily chosen historical moment. (3)___ Proponents of this alternative approach argue that treating tradition as a fixed museum piece, however well-intentioned, paradoxically kills the very living quality that made it genuinely meaningful in the first place.\n\nNeither approach, pursued with complete theoretical consistency, avoids real, genuine difficulty in actual practice. (4)___ Strict preservation can inadvertently transform a once-living practice into something closer to museum performance, disconnected from genuine contemporary community life and meaning.\n\nAdaptive approaches, meanwhile, risk the opposite genuine difficulty: gradual, incremental change that eventually produces something bearing only superficial resemblance to the original tradition, notwithstanding continued use of the same traditional, familiar name. (5)___ At what point, exactly, does adaptation become something closer to genuine replacement rather than authentic evolution?\n\nMost successful, genuinely sustainable preservation efforts, in practice, blend elements of both approaches, maintaining core defining elements considered genuinely essential while permitting meaningful adaptation elsewhere. (6)___ This blended approach, though admittedly harder to define with theoretical precision than either pure alternative, generally proves considerably more practically sustainable and genuinely effective over meaningful stretches of real time.",
        options: [
          "That tension shows up in nearly every preservation debate.",  // A -> gap1
          "Some things, on this view, should simply hold still.", // B -> gap2
          "Living things, on this view, are not meant to hold still.", // C -> gap3
          "Each path, in short, trades one genuine cost for another.", // D -> gap4
          "That question rarely has one single, tidy answer.", // E -> gap5
          "Balance, however imprecise, tends to hold up better over time.", // F -> gap6
          "No cultural tradition has ever actually changed over time.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa tensión aparece en casi todo debate de preservación."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: algunas cosas, según esta visión, deben mantenerse quietas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: lo vivo no está hecho para mantenerse quieto."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: cada camino cambia un coste por otro."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esa pregunta rara vez tiene una respuesta única y ordenada."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el equilibrio se sostiene mejor con el tiempo."),
        ],
      },
      p7: {
        title: "Four people discuss a cultural tradition important to their own family",
        text: "Read what four people say about a cultural tradition that remains important to their own family.\n\nA) NADIA: My grandmother threw down the gauntlet to the whole family, insisting we learn her traditional recipes before she passed them down. I'm genuinely grateful now that we all took that challenge seriously.\n\nB) TOM: Our family's traditional craft nearly became a flash in the pan when interest faded briefly after my grandfather passed away. Thankfully, my cousin picked it back up seriously a few years later.\n\nC) PRIYA: We read the writing on the wall regarding our regional dialect's genuine decline years ago and started deliberately, consistently speaking it at home specifically to help preserve it for our children.\n\nD) SAM: Notwithstanding some real generational disagreement about how strictly to maintain our traditional ceremonies, we've found a workable, genuine balance between honouring the old ways and adapting thoughtfully to modern life.\n",
        q: [
          mc("Whose grandmother insisted they learn traditional recipes before she passed them down?", ["A", "B", "C", "D"], 0, "Nadia: 'My grandmother threw down the gauntlet to the whole family, insisting we learn her traditional recipes'."),
          mc("Whose family craft nearly became a flash in the pan?", ["A", "B", "C", "D"], 1, "Tom: 'Our family's traditional craft nearly became a flash in the pan when interest faded'."),
          mc("Who read the writing on the wall regarding a dialect's decline?", ["A", "B", "C", "D"], 2, "Priya: 'We read the writing on the wall regarding our regional dialect's genuine decline'."),
          mc("Who found a balance between tradition and modern adaptation despite disagreement?", ["A", "B", "C", "D"], 3, "Sam: 'Notwithstanding some real generational disagreement… we've found a workable, genuine balance'."),
          mc("Who is now grateful the family took the challenge seriously?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm genuinely grateful now that we all took that challenge seriously'."),
          mc("Whose cousin picked the craft back up after interest faded?", ["A", "B", "C", "D"], 1, "Tom: 'my cousin picked it back up seriously a few years later'."),
          mc("Who started speaking the dialect at home for their children?", ["A", "B", "C", "D"], 2, "Priya: 'started deliberately, consistently speaking it at home specifically to help preserve it for our children'."),
          mc("Who mentions generational disagreement about ceremonies?", ["A", "B", "C", "D"], 3, "Sam: 'some real generational disagreement about how strictly to maintain our traditional ceremonies'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre el patrimonio cultural y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Cultural traditions should be preserved as authentically and faithfully as possible. Allowing excessive adaptation risks gradually eroding practices until they bear little genuine resemblance to their original, historically authentic form.'\n\nTEXTO 2: 'Culture has always evolved, and insisting on rigid preservation freezes living practices into museum pieces. Genuine cultural vitality requires allowing traditions to adapt naturally to each new generation's actual circumstances and needs.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN idiom de nivel C2 apropiadamente. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista cultural sobre una tradición de tu propia familia o comunidad y su importancia.\n· CARTA/EMAIL formal a una organización cultural proponiendo cómo preservar una tradición local en riesgo.\n· REVIEW de un documental o libro sobre patrimonio cultural que te haya impactado.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two villagers discussing a craft revival. Woman: We read the writing on the wall regarding this craft's decline years before we finally acted. Man: I remember worrying the whole effort would prove merely a flash in the pan, honestly. Extract Two. You hear two heritage scholars discussing provenance. Man: Museums that fail to conduct rigorous provenance research risk being hoist with their own petard eventually. Woman: Exactly — you don't want to discover uncomfortable acquisition history after the fact, publicly. Extract Three. You hear two family members discussing tradition. Woman: My grandmother threw down the gauntlet, insisting we learn her recipes properly before she passed them down. Man: That must have felt like real pressure at the time, honestly.", [
      mc("1. What does the woman say about the craft's decline?", ["They never noticed it.", "They read the writing on the wall years before acting.", "They ignored it entirely.", "It happened suddenly."], 1, "'We read the writing on the wall regarding this craft's decline years before we finally acted'."),
      mc("2. What did the man worry about?", ["Nothing at all.", "The effort proving merely a flash in the pan.", "Losing money.", "Government interference."], 1, "'I remember worrying the whole effort would prove merely a flash in the pan'."),
      mc("3. What risk does the man mention regarding museums?", ["No risk exists.", "Being hoist with their own petard over provenance.", "Running out of funding.", "Losing visitors."], 1, "'Museums that fail to conduct rigorous provenance research risk being hoist with their own petard'."),
      mc("4. What does the woman agree with?", ["Nothing specific.", "Not wanting to discover uncomfortable history after the fact.", "Ignoring provenance entirely.", "Selling artefacts quickly."], 1, "'you don't want to discover uncomfortable acquisition history after the fact'."),
      mc("5. What did the grandmother do?", ["Nothing in particular.", "Threw down the gauntlet, insisting recipes be learned properly.", "Refused to share recipes.", "Sold her recipes."], 1, "'My grandmother threw down the gauntlet, insisting we learn her recipes properly'."),
      mc("6. How does the man describe that experience?", ["Completely easy.", "Like real pressure at the time.", "Unimportant.", "Boring."], 1, "'That must have felt like real pressure at the time'."),
    ]),

    ...speakingParts({ p1: "qué tradición cultural es más importante para tu familia o comunidad", p2: "dos imágenes del patrimonio cultural (un artesano practicando una técnica tradicional y un museo exhibiendo objetos históricos): comentadlas y decidid cuál representa mejor cómo debería preservarse la cultura", p3: "qué es más eficaz para preservar una tradición en riesgo de desaparecer (documentarla formalmente, enseñarla directamente a las nuevas generaciones, buscar financiación institucional, adaptarla a la vida moderna, declararla patrimonio protegido): comentadlo y decidid lo más eficaz", p4: "el patrimonio cultural y la tradición: si las tradiciones deberían preservarse fielmente o se les debería permitir evolucionar, qué responsabilidad tienen los museos respecto a objetos de procedencia dudosa, y si la globalización representa una amenaza real para la diversidad cultural" }),

    SUMMARY("Resumen del Día 26", [
      "Idioms de nivel C2: throw down the gauntlet, a Pyrrhic victory, move the goalposts, a flash in the pan, hoist with one's own petard, read the writing on the wall.",
      "Vocabulario del patrimonio cultural y la tradición. Practicadas las 7 partes de Use of English, Writing, Listening P1 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 27", "Escribe 3 frases usando idioms de hoy correctamente. Repasa el vocabulario de patrimonio cultural. Mañana: los proverbios y su uso retórico en el ensayo formal."),
  ],
};

// ───────────────────────── DÍA 27 ─────────────────────────
const DAY27 = {
  title: "Día 27 — Los proverbios y su uso retórico en el ensayo formal · El folclore y la tradición oral",
  description: "Proverbios ingleses de uso culto (no coloquial) y su función retórica en el ensayo académico: como apertura memorable, como síntesis final, o como contraste irónico. Vocabulario del folclore y la tradición oral. Las 4 destrezas (formato C2); Listening P2.",
  pedagogy: {
    objective: "Usar proverbios con función retórica precisa en el ensayo formal, sin que resulten clichés vacíos.",
    summary: "Proverbios en el ensayo formal; folclore y tradición oral; Use of English P1–P7, Writing, Listening P2, Speaking P1–P3.",
    commonMistakes: ["citar un proverbio sin conectarlo genuinamente con el argumento (queda como cliché decorativo, no como recurso retórico).", "usar un proverbio de forma literal cuando el contexto exige un uso irónico o matizado.", "sobreusar proverbios — uno bien elegido por ensayo es más que suficiente en registro académico."],
    reviewPrompts: ["¿Qué proverbio usarías para introducir un ensayo sobre los riesgos de la precipitación en política?", "¿Cómo se usa un proverbio de forma IRÓNICA en un ensayo (para luego matizarlo o contradecirlo)?"],
  },
  items: [
    TEXT("🔁 Ayer, los idioms de nivel C2. Hoy: los PROVERBIOS y su USO RETÓRICO en el ensayo formal — un recurso que, bien empleado, da apertura memorable o síntesis final a un argumento académico. Vocabulario: el FOLCLORE y la TRADICIÓN ORAL."),
    GRAMMAR("Los proverbios en el ensayo formal", `Los proverbios, usados con PRECISIÓN RETÓRICA (no como cliché decorativo), cumplen tres funciones principales en el ensayo académico C2:
1) APERTURA MEMORABLE — citar un proverbio al inicio para introducir el tema, seguido de un desarrollo que lo matiza o complica:
· "A stitch in time saves nine," the old proverb goes — yet contemporary institutional practice suggests this wisdom is more easily invoked than actually implemented.
2) SÍNTESIS FINAL — cerrar un argumento resumiendo su esencia con un proverbio ya "ganado" por el desarrollo previo:
· What emerges from this analysis, ultimately, is a simple truth long captured in proverb: forewarned is forearmed.
3) CONTRASTE IRÓNICO — citar un proverbio para luego CONTRADECIRLO o matizarlo, mostrando sofisticación crítica:
· Conventional wisdom holds that absence makes the heart grow fonder; the evidence from long-distance relationships, however, suggests a rather more complicated reality.
PROVERBIOS ÚTILES DE REGISTRO CULTO (no infantil/coloquial):
· A stitch in time saves nine (más vale prevenir que curar). · Forewarned is forearmed (hombre prevenido vale por dos). · The road to hell is paved with good intentions. · Actions speak louder than words. · There's no smoke without fire. · Fortune favours the bold.
⚠️ NUNCA cites un proverbio sin conectarlo genuinamente con tu argumento específico — debe hacer trabajo retórico real, no ser mero adorno.`),
    WARN("Errores típicos en C2", "· Un proverbio sin desarrollo posterior que lo conecte al argumento es un cliché vacío — siempre debe cumplir una función retórica clara.\n· Distingue el uso LITERAL del IRÓNICO: si vas a contradecir el proverbio, hazlo explícito ('yet the evidence suggests otherwise').\n· Un solo proverbio bien elegido por ensayo es suficiente — más de uno en el mismo texto resulta excesivo en registro académico.\n· No confundas proverbios (sabiduría popular condensada) con idioms (expresiones figuradas sin necesariamente transmitir una 'lección')."),
    grammarEx("Use of English — Proverbios con función retórica", "Elige la función retórica o el proverbio correcto.", [
      mc("\"A stitch in time saves nine,\" the proverb goes — yet institutional practice suggests otherwise. ¿Qué función cumple el proverbio aquí?", ["Apertura memorable con posterior matiz", "Síntesis final", "Cliché decorativo"], 0, "apertura + desarrollo que lo matiza."),
      mc("What emerges from this analysis is captured in the old proverb: ___.", ["forewarned is forearmed", "actions speak louder than words", "there's no smoke without fire"], 0, "depende del contexto — aquí, síntesis sobre anticipación/preparación."),
      mc("Conventional wisdom holds that absence makes the heart grow fonder; the evidence, however, suggests a more complicated reality. ¿Qué función cumple?", ["Contraste irónico (cita + matiza/contradice)", "Apertura sin desarrollo", "Simple adorno"], 0, "contraste irónico: cita y luego complica."),
      mc("¿Cuántos proverbios es recomendable usar por ensayo en registro académico C2?", ["Uno bien elegido", "Tres o cuatro", "Ninguno nunca"], 0, "uno bien elegido, con función retórica clara."),
      mc("___ speaks louder than words, the saying goes — though intentions, this essay will argue, still matter considerably.", ["Actions", "Silence", "Money"], 0, "actions speak louder than words (proverbio conocido)."),
      mc("¿Qué distingue un proverbio de un idiom?", ["El proverbio transmite una 'lección' o sabiduría popular condensada", "No hay diferencia real", "El idiom siempre es más formal"], 0, "proverbio = sabiduría popular condensada; idiom = expresión figurada."),
    ]),
    GRAMMAR("Vocabulario del día — El folclore y la tradición oral (C2)", "Léxico de maestría sobre folclore."),
    deck("C2 S6D27 — Folclore y tradición oral", [
      ["folklore", "folclore", "Folklore preserves a community's collective wisdom and memory.", "sustantivo", "ˈfəʊklɔː"],
      ["oral tradition", "tradición oral", "Oral tradition transmitted history long before written records existed.", "sustantivo", "ˈɔːrəl trəˈdɪʃn"],
      ["fable", "fábula", "The fable's moral remains strikingly relevant even today.", "sustantivo", "ˈfeɪbl"],
      ["allegorical", "alegórico/a", "The story's allegorical meaning becomes clear only gradually.", "adjetivo", "ˌælɪˈgɒrɪkl"],
      ["griot", "griot (narrador tradicional, África Occidental)", "The griot preserved the community's entire genealogical history orally.", "sustantivo", "ˈgriːəʊ"],
      ["mythology", "mitología", "Regional mythology shaped the community's understanding of nature.", "sustantivo", "mɪˈθɒlədʒi"],
      ["apocryphal", "apócrifo/a (de autenticidad dudosa)", "The story's origin remains apocryphal, though widely repeated.", "adjetivo", "əˈpɒkrɪfl"],
      ["cautionary tale", "cuento con moraleja / relato ejemplarizante", "The fable functions as a cautionary tale against greed.", "sustantivo", "ˈkɔːʃənəri teɪl"],
      ["oral historian", "historiador/a oral", "The community's oral historian preserved genealogies across generations.", "sustantivo", "ˈɔːrəl hɪˈstɔːriən"],
      ["transmit", "transmitir (una tradición)", "Elders transmitted the stories carefully to each new generation.", "verbo", "trænzˈmɪt"],
    ]),
    vocabEx("Vocabulario — El folclore y la tradición oral", "Elige la opción correcta.", [
      mc("Traditional stories, customs and beliefs of a community:", ["folklore", "mythology", "apocrypha"], 0, "folklore."),
      mc("A short story with a clear moral lesson, often using animals:", ["fable", "oral tradition", "griot"], 0, "fable."),
      mc("A traditional storyteller and historian, especially in West Africa:", ["griot", "fable", "folklore"], 0, "griot."),
      mc("Of doubtful or unverifiable authenticity, though widely repeated:", ["apocryphal", "allegorical", "mythological"], 0, "apocryphal."),
      mc("A story warning against a particular kind of dangerous behaviour:", ["cautionary tale", "fable", "folklore"], 0, "cautionary tale."),
      mc("To pass a tradition or story on to the next generation:", ["transmit", "preserve", "document"], 0, "transmit."),
    ]),

    ...uoe({
      p1: {
        title: "What fables actually teach",
        text: "Fables, notwithstanding their characteristically simple surface narrative structure, frequently encode considerably more nuanced moral (1)___ than their brief, deceptively straightforward form might initially suggest to a casual, inattentive reader. Actions speak louder than words, the old proverb (2)___ — a lesson many classical fables illustrate precisely through animal characters whose deeds, rather than their stated (3)___, ultimately determine their eventual fate within the story. Insofar as fables function as cautionary tales specifically designed for children, this directness serves a genuinely valuable, practical pedagogical (4)___, communicating complex ethical principles through memorable, easily retained narrative rather than through abstract moral instruction alone. By the same token that fables teach children, they also, less obviously, continue teaching (5)___ throughout life, their apparent simplicity belying genuinely durable wisdom that remains relevant well beyond childhood. What emerges from serious critical (6)___ of the fable tradition, ultimately, is recognition that simplicity of form need not mean simplicity of genuine underlying insight.",
        q: [
          mc("(1)", ["complexity", "sophistication", "nuance", "depth"], 0, "'encode considerably more nuanced moral complexity'."),
          mc("(2)", ["goes", "says", "states", "claims"], 0, "'the old proverb goes'."),
          mc("(3)", ["intentions", "claims", "promises", "assertions"], 0, "'rather than their stated intentions'."),
          mc("(4)", ["function", "role", "purpose", "aim"], 2, "'serves a genuinely valuable, practical pedagogical purpose'."),
          mc("(5)", ["adults", "grown-ups", "people", "everyone"], 3, "'continue teaching everyone throughout life'."),
          mc("(6)", ["examination", "analysis", "study", "scrutiny"], 1, "'serious critical analysis of the fable tradition'."),
        ],
      },
      p2: {
        title: "The griot's dying art",
        text: "In several West African cultures, the griot has traditionally served (1)___ both entertainer and oral historian, memorising and transmitting genealogies, historical events and cautionary tales across countless successive generations without any reliance whatsoever on written record. There's no smoke without fire, the saying (2)___, and considerable scholarly evidence now confirms that griot oral traditions, notwithstanding their apparently informal transmission mechanism, frequently preserve historical information with (3)___ accuracy that formal written records from the same specific period simply failed to capture or preserve. Insofar as literacy and digital media have increasingly displaced oral transmission (4)___ primary means of preserving cultural knowledge, this ancient tradition faces genuine, accelerating pressure, with fewer young people (5)___ the extensive, demanding years of dedicated training the role has traditionally, historically required. Efforts to document griot knowledge in written and digital form continue, though most practitioners readily acknowledge (6)___ something genuinely, irreducibly essential inevitably gets lost when oral tradition becomes fixed, permanent text.",
        q: [
          fb("(1)", ["as"], "'served as both entertainer and oral historian'."),
          fb("(2)", ["goes"], "'the saying goes'."),
          fb("(3)", ["remarkable", "surprising"], "'preserve… information with remarkable/surprising accuracy'."),
          fb("(4)", ["as"], "'displaced oral transmission as… primary means'."),
          fb("(5)", ["undertaking", "pursuing"], "'fewer young people undertaking/pursuing the… years of… training'."),
          fb("(6)", ["that"], "'practitioners readily acknowledge that something… gets lost'."),
        ],
      },
      p3: {
        title: "Apocryphal but instructive",
        text: "Many widely (1)___ historical anecdotes, notwithstanding their considerable rhetorical power and enduring popularity, turn out on careful historical (2)___ to be entirely apocryphal, invented or embellished well after the fact to illustrate some particular moral or political point their original protagonists never actually, historically made or experienced. This apocryphal (3)___ does not necessarily render such stories entirely worthless; insofar as they continue to (4)___ genuine cultural and ethical truths, even fabricated anecdotes can serve valuable pedagogical and rhetorical purposes, provided their questionable historical status is honestly, transparently (5)___ rather than presented as unquestionably, straightforwardly factual. The road to hell is paved with good intentions, the proverb reminds us — a warning, perhaps, against uncritically repeating a compelling but factually (6)___ story simply because it conveniently, memorably serves one's own particular argumentative purpose.",
        items: [
          { root: "circulate", accepted: ["circulated"], hint: "'Many widely circulated historical anecdotes' → circulated." },
          { root: "examine", accepted: ["examination"], hint: "'on careful historical examination' → examination." },
          { root: "status", accepted: ["status"], hint: "'This apocryphal status' (sustantivo, ya dado)." },
          { root: "capture", accepted: ["capture"], hint: "'continue to capture genuine cultural… truths' (verbo)." },
          { root: "acknowledge", accepted: ["acknowledged"], hint: "'honestly, transparently acknowledged' → acknowledged." },
          { root: "doubt", accepted: ["dubious"], hint: "'a compelling but factually dubious story' → dubious." },
        ],
      },
      p4: {
        title: "Transformaciones — proverbios con función retórica",
        items: [
          { s1: "The old proverb suggests prevention is better than dealing with bigger problems later.", key: "STITCH", s2: "A ___ in time saves nine, as the old proverb goes.", accepted: ["stitch"], explanation: "a stitch in time saves nine." },
          { s1: "The essay's conclusion is captured by the idea that being prepared means being protected.", key: "FOREWARNED", s2: "What emerges is captured in the old proverb: ___ is forearmed.", accepted: ["forewarned"], explanation: "forewarned is forearmed." },
          { s1: "People believe good intentions can lead to genuinely terrible outcomes.", key: "ROAD", s2: "The ___ to hell is paved with good intentions, the saying goes.", accepted: ["road"], explanation: "the road to hell is paved with good intentions." },
          { s1: "What people actually do matters more than what they merely say.", key: "ACTIONS", s2: "___ speak louder than words, the proverb reminds us.", accepted: ["actions"], explanation: "actions speak louder than words." },
          { s1: "People say there's always some truth behind a persistent rumour.", key: "SMOKE", s2: "There's no ___ without fire, as the saying goes.", accepted: ["smoke"], explanation: "there's no smoke without fire." },
        ],
      },
      p5: {
        title: "The scholar who traced a proverb's true origin",
        text: "A folklorist specialising in tracing the genuine historical origins of widely circulated proverbs and sayings found herself confronting, partway through a routine research project, an unexpectedly rich case study when she set out to trace the actual origin of a particular proverb frequently, confidently attributed to a specific, well-known historical figure.\n\nHer painstaking archival research revealed that the proverb, notwithstanding its widespread, confident popular attribution, almost certainly predated the historical figure to whom it was routinely, casually credited by at least several centuries, appearing in considerably earlier written sources the figure in question could never plausibly, chronologically have encountered or known about.\n\n\"There's no smoke without fire, people often assume when a quotation gets confidently, repeatedly attributed to someone specific,\" she later explained in a widely read academic article documenting her findings, \"but in this particular case, the smoke turned out to be considerably more revealing about our own collective cultural need for authoritative, quotable sources than about the proverb's own actual, verifiable historical origin.\"\n\nHer research suggested a broader, genuinely instructive pattern: proverbs and sayings frequently accumulate increasingly specific, confident attribution over time, as speakers and writers seek to lend borrowed authority and rhetorical weight to genuinely anonymous folk wisdom by attaching it, often quite spuriously, to a recognisable, authoritative historical name.\n\n\"By the same token that a proverb's actual, genuine wisdom doesn't necessarily depend on correct attribution,\" she noted carefully, \"getting the attribution wrong does matter for honest historical scholarship, even when the underlying wisdom itself remains, on its own separate terms, genuinely valuable and worth preserving regardless.\"\n\nHer findings prompted considerable discussion within her own academic field about how apocryphal attributions, once firmly established in popular culture, prove remarkably, stubbornly resistant to correction even once genuinely solid, well-documented historical evidence emerges clearly contradicting the popular, widely repeated version.\n\n\"What I ultimately learned,\" she reflected in her article's own concluding section, \"was that people generally prefer a good, satisfying story over a genuinely accurate but less immediately satisfying one, and correcting a beloved, deeply familiar misattribution, however solidly documented the correction itself actually is, faces a genuinely uphill, difficult battle against comfortable popular belief and simple habit.\"\n\nHer work has since become something of a standard, frequently cited reference for researchers specifically studying how apocryphal attributions spread and, notwithstanding solid contrary evidence, so often stubbornly, persistently endure regardless.",
        q: [
          mc("What did the folklorist set out to do?", ["Invent a new proverb.", "Trace a proverb's actual historical origin.", "Prove all proverbs are false.", "Write a children's book."], 1, "'she set out to trace the actual origin of a particular proverb'."),
          mc("What did her research reveal about the proverb's attribution?", ["It was completely accurate.", "The proverb almost certainly predated the figure it was attributed to.", "The figure invented it personally.", "No attribution existed at all."], 1, "'the proverb… almost certainly predated the historical figure to whom it was routinely… credited'."),
          mc("What broader pattern did her research suggest?", ["No pattern exists.", "Proverbs accumulate specific attribution over time to lend borrowed authority.", "All proverbs are correctly attributed.", "Attribution never matters."], 1, "'proverbs and sayings frequently accumulate increasingly specific, confident attribution over time, as speakers… seek to lend borrowed authority'."),
          mc("What does she say about attribution mattering despite the wisdom being valuable?", ["Attribution never matters.", "Getting attribution wrong matters for honest historical scholarship, even if the wisdom remains valuable.", "The wisdom is worthless without correct attribution.", "Nobody cares about attribution."], 1, "'getting the attribution wrong does matter for honest historical scholarship, even when the underlying wisdom itself remains… valuable'."),
          mc("What did her findings prompt discussion about?", ["Nothing significant.", "How apocryphal attributions resist correction even with solid evidence.", "Banning all proverbs.", "Rewriting history books entirely."], 1, "'considerable discussion… about how apocryphal attributions, once firmly established… prove remarkably, stubbornly resistant to correction'."),
          mc("What does she ultimately conclude people prefer?", ["Accurate stories over satisfying ones.", "A good, satisfying story over a genuinely accurate but less satisfying one.", "No stories at all.", "Only academically verified quotes."], 1, "'people generally prefer a good, satisfying story over a genuinely accurate but less immediately satisfying one'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Proverbs occupy a genuinely curious position within language and culture, simultaneously treated as timeless, universal wisdom and, on closer critical examination, revealed as considerably more historically and culturally specific than their confident, universal-sounding phrasing generally suggests. (1)___\n\nMost proverbs, notwithstanding their apparently ancient, timeless quality, actually emerged from quite specific historical, economic and social circumstances that shaped both their original content and their particular, distinctive phrasing. (2)___ A proverb about stitching and thread, for instance, reflects a specific historical society where hand-sewing represented genuinely common, everyday household labour rather than the rare, specialised skill it has since largely, considerably become.\n\nThis specific historical origin does not necessarily diminish a proverb's continued genuine relevance, however. (3)___ Proverbs frequently survive their own original specific context by operating at a sufficiently general, abstract level of meaning that the underlying wisdom transfers reasonably well to considerably different circumstances than those that originally, historically produced the saying.\n\nWhat determines whether a given proverb successfully survives this kind of transfer across historical and cultural distance is worth genuinely, carefully considering. (4)___ Proverbs built around genuinely universal human experiences — time, effort, risk, consequence — tend to travel considerably better than those built around highly specific, culturally bound practices or now-obsolete technologies.\n\nThis suggests that proverbs, properly and carefully understood, function less as fixed, eternal truths handed down entirely unchanged from antiquity, and more as remarkably durable cultural technology for compressing complex experience into memorable, transmissible form. (5)___ Their genuine content may be historically specific; their underlying compressive function proves considerably more genuinely universal.\n\nUnderstanding this particular distinction helps explain why some proverbs continue to feel remarkably fresh and relevant centuries after their original composition, while others feel distinctly, unmistakably dated the moment their specific, now-obsolete historical context becomes genuinely apparent to a contemporary reader or listener. (6)___ Longevity, in other words, depends considerably on which particular kind of proverb one actually happens to be dealing with in any given specific case.",
        options: [
          "That gap is worth pausing over rather than simply assuming away.", // A -> gap1
          "Origin, in other words, was never really as timeless as it sounds.", // B -> gap2
          "Relevance and origin, it turns out, are not quite the same thing.", // C -> gap3
          "Some content, evidently, travels better than other content.", // D -> gap4
          "Form outlasts content more often than content outlasts form.", // E -> gap5
          "Which kind you're dealing with turns out to matter enormously.", // F -> gap6
          "No proverb has ever emerged from a specific historical context.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa brecha merece pararse en ella."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: el origen nunca fue tan atemporal como suena."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: relevancia y origen no son lo mismo."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: algún contenido viaja mejor que otro."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la forma sobrevive más que el contenido."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: qué tipo de proverbio importa enormemente."),
        ],
      },
      p7: {
        title: "Four people discuss a proverb that has stayed with them",
        text: "Read what four people say about a proverb or saying that has particularly stayed with them.\n\nA) NADIA: My grandmother always said actions speak louder than words. I found that frustrating as a child, honestly, but it's genuinely shaped how I try to actually live now, as an adult.\n\nB) TOM: There's no smoke without fire was a saying I heard constantly growing up, though I've since come to think it's actually somewhat misleading advice in certain, more complicated situations.\n\nC) PRIYA: A stitch in time saves nine stuck with me after I learned it the hard way, professionally, by procrastinating on a problem that grew considerably worse the longer I ignored it entirely.\n\nD) SAM: Forewarned is forearmed became my personal motto after a genuinely difficult experience taught me the real, practical value of careful, thorough preparation.\n",
        q: [
          mc("Who found 'actions speak louder than words' frustrating as a child?", ["A", "B", "C", "D"], 0, "Nadia: 'I found that frustrating as a child, honestly'."),
          mc("Who thinks 'there's no smoke without fire' can be misleading?", ["A", "B", "C", "D"], 1, "Tom: 'I've since come to think it's actually somewhat misleading advice'."),
          mc("Who learned 'a stitch in time saves nine' the hard way professionally?", ["A", "B", "C", "D"], 2, "Priya: 'A stitch in time saves nine stuck with me after I learned it the hard way, professionally'."),
          mc("Who adopted 'forewarned is forearmed' as a personal motto?", ["A", "B", "C", "D"], 3, "Sam: 'Forewarned is forearmed became my personal motto'."),
          mc("Who says the proverb has shaped how they try to actually live now?", ["A", "B", "C", "D"], 0, "Nadia: 'it's genuinely shaped how I try to actually live now, as an adult'."),
          mc("Who heard their saying constantly while growing up?", ["A", "B", "C", "D"], 1, "Tom: 'a saying I heard constantly growing up'."),
          mc("Who procrastinated on a problem that grew worse over time?", ["A", "B", "C", "D"], 2, "Priya: 'procrastinating on a problem that grew considerably worse the longer I ignored it'."),
          mc("Whose difficult experience taught them the value of preparation?", ["A", "B", "C", "D"], 3, "Sam: 'a genuinely difficult experience taught me the real, practical value of careful, thorough preparation'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la tradición oral y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Oral tradition preserves historical and cultural knowledge with remarkable accuracy, often more faithfully than written records from the same period. Societies should invest seriously in documenting and revitalising these endangered practices before they disappear entirely.'\n\nTEXTO 2: 'Oral tradition, however valuable, inevitably changes with each retelling, gradually drifting from any original historical accuracy. Written and digital documentation, whatever it sacrifices in cultural immediacy, offers considerably more reliable long-term preservation.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN proverbio con función retórica genuina (no decorativa). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista cultural sobre un proverbio o dicho de tu propia cultura y lo que realmente enseña.\n· CARTA/EMAIL formal a una institución cultural proponiendo un proyecto de documentación de tradición oral local.\n· REVIEW de un libro o documental sobre folclore o mitología que te haya impactado.", 280, 320),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion (9 huecos, un monólogo largo)", "Escucha a una folclorista hablando sobre la investigación de un proverbio (se oye dos veces). Completa las frases con la información que oigas (1-3 palabras).", "This is Part Two. You will hear a folklorist talking about researching a proverb. I set out to trace the actual origin of a proverb frequently attributed to a specific historical figure. My archival research revealed the proverb almost certainly predated that figure by several centuries. It appeared in earlier written sources the figure could never have encountered. People often assume there's no smoke without fire when a quotation gets confidently attributed to someone. In this case, the smoke revealed more about our cultural need for authoritative sources than about the actual origin. Proverbs frequently accumulate specific attribution over time as speakers seek to lend borrowed authority to anonymous folk wisdom. Getting attribution wrong matters for honest scholarship, even when the underlying wisdom remains valuable. Apocryphal attributions prove remarkably resistant to correction once firmly established in popular culture. What I ultimately learned is that people generally prefer a good, satisfying story over a genuinely accurate one.", [
      fb("1. She traced a proverb frequently attributed to a specific historical ___.", ["figure"], "'attributed to a specific historical figure'."),
      fb("2. The proverb predated that figure by several ___.", ["centuries"], "'predated that figure by several centuries'."),
      fb("3. It appeared in earlier written ___.", ["sources"], "'appeared in earlier written sources'."),
      fb("4. People assume there's no smoke without ___.", ["fire"], "'there's no smoke without fire'."),
      fb("5. The smoke revealed more about our cultural ___ for authoritative sources.", ["need"], "'our cultural need for authoritative sources'."),
      fb("6. Proverbs accumulate attribution to lend borrowed ___.", ["authority"], "'lend borrowed authority to anonymous folk wisdom'."),
      fb("7. Getting attribution wrong matters for honest ___.", ["scholarship"], "'matters for honest scholarship'."),
      fb("8. Apocryphal attributions prove resistant to ___.", ["correction"], "'resistant to correction once firmly established'."),
      fb("9. People prefer a good, satisfying story over an accurate ___.", ["one"], "'over a genuinely accurate one'."),
    ]),

    ...speakingParts({ p1: "qué proverbio o dicho de tu cultura recuerdas con más cariño y por qué", p2: "dos imágenes de la tradición oral (una persona mayor contando una historia a niños y un grupo escuchando música folclórica en directo): comentadlas y decidid cuál representa mejor cómo se transmite la cultura oral", p3: "qué es más eficaz para preservar el folclore y la tradición oral (documentarlo por escrito, grabarlo en audio o vídeo, enseñarlo directamente a las nuevas generaciones, integrarlo en la educación formal, celebrarlo en festivales públicos): comentadlo y decidid lo más eficaz", p4: "el folclore y la tradición oral: si los proverbios siguen siendo relevantes en la vida moderna, qué se pierde cuando una tradición oral se convierte en texto escrito, y si deberíamos preocuparnos por la desaparición de lenguas y tradiciones minoritarias" }),

    SUMMARY("Resumen del Día 27", [
      "Proverbios con función retórica (apertura memorable, síntesis final, contraste irónico) — nunca como cliché decorativo sin conexión genuina con el argumento.",
      "Vocabulario del folclore y la tradición oral. Practicadas las 7 partes de Use of English, Writing, Listening P2 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 28", "Escribe un párrafo breve usando un proverbio con función retórica genuina. Repasa el vocabulario de folclore. Mañana: falsos amigos y precisión colocacional de nivel C2."),
  ],
};

// ───────────────────────── DÍA 28 ─────────────────────────
const DAY28 = {
  title: "Día 28 — Falsos amigos y precisión colocacional de nivel C2 · La identidad cultural y la globalización",
  description: "Falsos amigos avanzados (sensible/sensitive, actual/current, eventually/eventually) y colocaciones cercanas pero distintas (economic/economical, historic/historical). Vocabulario de la identidad cultural. Las 4 destrezas (formato C2); Listening P3.",
  pedagogy: {
    objective: "Distinguir con precisión los falsos amigos y pares de adjetivos cercanos que generan errores incluso en hablantes muy avanzados.",
    summary: "Falsos amigos y precisión colocacional C2; identidad cultural y globalización; Use of English P1–P7, Writing, Listening P3, Speaking P1–P3.",
    commonMistakes: ["confundir 'sensible' (con sentido común, prudente) con 'sensitive' (sensible emocionalmente) — falso amigo clásico que persiste incluso en C2.", "usar 'actual' con el sentido español de 'actual/presente' en vez de 'real, verdadero' (el equivalente inglés es 'current').", "confundir 'economic' (relativo a la economía) con 'economical' (que ahorra, económico en el sentido de barato)."],
    reviewPrompts: ["¿Cuál es la diferencia entre 'sensible' y 'sensitive'?", "¿Cómo dirías 'la situación económica actual del país' evitando el falso amigo?"],
  },
  items: [
    TEXT("🔁 Ayer, los proverbios con función retórica. Hoy: FALSOS AMIGOS Y PRECISIÓN COLOCACIONAL de nivel C2 — errores que persisten incluso en hablantes muy avanzados si no se trabajan explícitamente. Vocabulario: la IDENTIDAD CULTURAL y la GLOBALIZACIÓN."),
    GRAMMAR("Falsos amigos y precisión colocacional de nivel C2", `Estos pares confunden incluso a hablantes de nivel C1-C2 porque son parcialmente similares al español, pero con matices distintos:
· SENSIBLE (con sentido común, prudente) vs. SENSITIVE (sensible emocionalmente, susceptible): A sensible decision. / A sensitive topic. (NUNCA "sensible" para 'emocionalmente sensible').
· ACTUAL (real, verdadero — no 'presente') vs. CURRENT (actual, presente): The actual cost was higher than advertised. / The current situation remains unclear. (Para "la situación actual", usa CURRENT, no ACTUAL).
· EVENTUALLY (finalmente, con el tiempo) vs. "eventualmente" en español (que en inglés es POSSIBLY/PERHAPS): She eventually agreed. (= finalmente, tras un proceso) ≠ "quizás" (possibly).
· ECONOMIC (relativo a la economía) vs. ECONOMICAL (que ahorra, eficiente en el gasto): Economic policy. / An economical car (que consume poco).
· HISTORIC (históricamente significativo) vs. HISTORICAL (relativo al pasado, sin necesariamente ser significativo): A historic agreement. / Historical records.
· TO ASSIST (ayudar formalmente) vs. TO ATTEND (asistir a un evento — "asistir" en español NO es "to assist"): She attended the conference. (NUNCA "she assisted the conference" con ese sentido).
Estos pares aparecen constantemente en el Reading P1-P4 de C2 como distractores deliberados — dominarlos con precisión es señal inequívoca de fluidez genuinamente nativa.`),
    WARN("Errores típicos del hispanohablante en C2", "· 'Sensible' en inglés NUNCA significa 'emocionalmente sensible' — para eso, 'sensitive'.\n· 'Actual' en inglés significa 'real/verdadero', NUNCA 'presente/actual' — para eso, 'current'.\n· 'To attend' (asistir a un evento) vs. 'to assist' (ayudar) — confusión clásica que persiste en C2.\n· 'Economic' (de la economía) vs. 'economical' (que ahorra) — no son intercambiables aunque se parezcan."),
    grammarEx("Use of English — Falsos amigos y precisión colocacional", "Elige la palabra correcta.", [
      mc("She made a genuinely ___ decision, considering all the practical implications carefully.", ["sensible", "sensitive"], 0, "sensible: con sentido común (no 'sensitive')."),
      mc("This is a genuinely ___ topic — please approach it with real care and tact.", ["sensitive", "sensible"], 0, "sensitive: emocionalmente delicado."),
      mc("The ___ cost of the project far exceeded the original budget estimate.", ["actual", "current"], 0, "actual: real/verdadero (no 'presente')."),
      mc("The ___ situation remains genuinely unclear, pending further official information.", ["current", "actual"], 0, "current: presente/actual (no 'actual' en el sentido español)."),
      mc("She plans to ___ the international conference next month in person.", ["attend", "assist"], 0, "attend: asistir a un evento (no 'assist')."),
      mc("This is a genuinely ___ car, consuming remarkably little fuel per mile.", ["economical", "economic"], 0, "economical: que ahorra/eficiente (no 'economic')."),
    ]),
    GRAMMAR("Vocabulario del día — La identidad cultural y la globalización (C2)", "Léxico de maestría sobre identidad cultural."),
    deck("C2 S6D28 — Identidad cultural y globalización", [
      ["cultural hybridity", "hibridación cultural", "Cultural hybridity increasingly characterises contemporary urban identity.", "sustantivo", "ˈkʌltʃərəl haɪˈbrɪdəti"],
      ["homogenisation", "homogeneización", "Critics warn against the cultural homogenisation globalisation can produce.", "sustantivo", "həˌmɒdʒənaɪˈzeɪʃn"],
      ["cosmopolitanism", "cosmopolitismo", "Genuine cosmopolitanism requires more than superficial cultural exposure.", "sustantivo", "ˌkɒzməˈpɒlɪtənɪzəm"],
      ["parochialism", "parroquialismo, mentalidad localista", "Excessive parochialism can blind communities to valuable outside perspectives.", "sustantivo", "pəˈrəʊkiəlɪzəm"],
      ["diaspora identity", "identidad diaspórica", "Diaspora identity often blends multiple cultural influences distinctly.", "sustantivo", "daɪˈæspərə aɪˈdentəti"],
      ["cultural appropriation", "apropiación cultural", "Debates over cultural appropriation remain genuinely contentious and complex.", "sustantivo", "ˈkʌltʃərəl əˌprəʊpriˈeɪʃn"],
      ["transnational", "transnacional", "Transnational communities maintain ties across multiple countries simultaneously.", "adjetivo", "trænzˈnæʃənl"],
      ["glocalisation", "glocalización (global + local)", "Glocalisation describes adapting global products to local cultural contexts.", "sustantivo", "ˌgləʊkəlaɪˈzeɪʃn"],
      ["cultural dilution", "dilución cultural", "Some fear cultural dilution accompanies increased global interconnection.", "sustantivo", "ˈkʌltʃərəl daɪˈluːʃn"],
      ["rootedness", "arraigo", "A genuine sense of rootedness can coexist with global outlook.", "sustantivo", "ˈruːtɪdnəs"],
    ]),
    vocabEx("Vocabulario — La identidad cultural y la globalización", "Elige la opción correcta.", [
      mc("The blending of elements from different cultures into something new:", ["cultural hybridity", "homogenisation", "parochialism"], 0, "cultural hybridity."),
      mc("The process of cultures becoming increasingly similar worldwide:", ["homogenisation", "hybridity", "cosmopolitanism"], 0, "homogenisation."),
      mc("A broad, worldly outlook embracing multiple cultures:", ["cosmopolitanism", "parochialism", "dilution"], 0, "cosmopolitanism."),
      mc("A narrow, insular outlook limited to one's immediate locality:", ["parochialism", "cosmopolitanism", "hybridity"], 0, "parochialism."),
      mc("Adapting global products or ideas to fit local contexts:", ["glocalisation", "homogenisation", "dilution"], 0, "glocalisation."),
      mc("A felt sense of belonging and connection to a particular place or culture:", ["rootedness", "hybridity", "parochialism"], 0, "rootedness."),
    ]),

    ...uoe({
      p1: {
        title: "The paradox of global culture",
        text: "Globalisation's impact on cultural identity presents a genuinely sensible topic for careful academic (1)___, requiring nuance rather than simplistic celebration or condemnation. Some observers argue that global interconnection inevitably produces cultural homogenisation, gradually eroding meaningful local distinctiveness in favour of a globally (2)___ commercial monoculture. Others contend that the actual, current evidence suggests something rather more complex: cultural hybridity, whereby local communities actively adapt and reinterpret global (3)___ rather than simply, passively absorbing them wholesale and unchanged. To the extent that genuine glocalisation — the thoughtful, deliberate local adaptation of global products and ideas — actually occurs in practice, cultural homogenisation may prove considerably less (4)___ than its most confident proponents originally, perhaps too hastily assumed. Notwithstanding this genuinely more (5)___ picture, legitimate concerns about cultural dilution persist, particularly regarding smaller, more (6)___ cultures with genuinely limited capacity to meaningfully influence global cultural exchange on anything resembling equal terms.",
        q: [
          mc("(1)", ["consideration", "attention", "review", "examination"], 0, "'a genuinely sensible topic for careful academic consideration'."),
          mc("(2)", ["standardised", "uniform", "homogeneous", "identical"], 2, "'a globally homogeneous commercial monoculture'."),
          mc("(3)", ["influences", "elements", "products", "forces"], 1, "'reinterpret global elements'."),
          mc("(4)", ["inevitable", "certain", "guaranteed", "assured"], 0, "'considerably less inevitable than… assumed'."),
          mc("(5)", ["nuanced", "complex", "sophisticated", "layered"], 0, "'this genuinely more nuanced picture'."),
          mc("(6)", ["vulnerable", "exposed", "fragile", "precarious"], 0, "'smaller, more vulnerable cultures'."),
        ],
      },
      p2: {
        title: "Rootedness without parochialism",
        text: "Cosmopolitan identity, notwithstanding its considerable contemporary appeal among globally mobile professionals, need not necessarily require abandoning genuine local rootedness (1)___ favour of some rootless, placeless global outlook lacking any meaningful particular attachment whatsoever. To the extent that genuine cosmopolitanism actually means openness (2)___ multiple cultures and perspectives, this openness can coexist reasonably comfortably alongside deep, meaningful attachment to one's own specific cultural origins and community. Insofar as parochialism specifically implies closed-minded resistance (3)___ outside influence, cosmopolitanism represents its genuine, meaningful opposite; insofar as cosmopolitanism sometimes implies rootless detachment from any particular place or community, it may actually share more (4)___ common with parochialism than either concept's most enthusiastic proponents typically, readily acknowledge. What genuinely distinguishes healthy cultural identity, some scholars now increasingly argue, is neither pure cosmopolitanism nor pure parochialism, but rather a genuine, deliberate synthesis: being meaningfully rooted (5)___ somewhere specific while remaining genuinely open to engaging thoughtfully with everywhere else. By the same token that a tree needs both roots and branches to genuinely flourish, healthy cultural identity arguably needs (6)___ genuine rootedness and genuine openness simultaneously.",
        q: [
          fb("(1)", ["in"], "'abandoning… rootedness in favour of'."),
          fb("(2)", ["to"], "'openness to multiple cultures'."),
          fb("(3)", ["to"], "'closed-minded resistance to outside influence'."),
          fb("(4)", ["in"], "'share more in common with parochialism'."),
          fb("(5)", ["in"], "'being meaningfully rooted in somewhere specific'."),
          fb("(6)", ["both"], "'healthy cultural identity… needs both genuine rootedness and… openness'."),
        ],
      },
      p3: {
        title: "Cultural appropriation, reconsidered",
        text: "Debates surrounding cultural appropriation, notwithstanding their considerable contemporary (1)___, often struggle to distinguish clearly between genuinely harmful exploitation and legitimate, mutually enriching cultural exchange, a distinction that resists any simple, universally applicable formula or clear-cut rule. Some scholars propose that power dynamics between the (2)___ and borrowing cultures matter considerably: appropriation by historically dominant cultures from marginalised ones raises genuinely different ethical questions than exchange occurring between cultures with roughly comparable social (3)___ and standing. Others emphasise instead the manner of (4)___: respectful, informed engagement with proper acknowledgment differs meaningfully from superficial, decontextualised borrowing that actively strips cultural elements of their genuine original meaning and significance. Insofar as cultures have always, throughout recorded human history, actively borrowed and adapted from one another, some genuine degree of cross-cultural exchange seems both historically (5)___ and, many would argue, genuinely valuable and enriching. What specifically distinguishes problematic appropriation from legitimate exchange remains, notwithstanding extensive ongoing (6)___, a matter of genuine continuing debate without any single, universally agreed resolution in sight.",
        items: [
          { root: "prominent", accepted: ["prominence"], hint: "'their considerable contemporary prominence' → prominence." },
          { root: "origin", accepted: ["originating"], hint: "'the originating and borrowing cultures' → originating." },
          { root: "stand", accepted: ["standing"], hint: "'comparable social standing' (sustantivo, ya dado; ajustar a 'status' alternativo)." },
          { root: "engage", accepted: ["engagement"], hint: "'the manner of engagement' → engagement." },
          { root: "inevitable", accepted: ["inevitable"], hint: "'both historically inevitable and… valuable' (adjetivo)." },
          { root: "discuss", accepted: ["discussion"], hint: "'notwithstanding extensive ongoing discussion' → discussion." },
        ],
      },
      p4: {
        title: "Transformaciones — falsos amigos y colocaciones de nivel C2",
        items: [
          { s1: "She made a decision that showed real practical wisdom and common sense.", key: "SENSIBLE", s2: "She made a genuinely ___ decision.", accepted: ["sensible"], explanation: "sensible (no 'sensitive')." },
          { s1: "This is an emotionally delicate topic requiring real care.", key: "SENSITIVE", s2: "This is a genuinely ___ topic requiring real care.", accepted: ["sensitive"], explanation: "sensitive (no 'sensible')." },
          { s1: "The real cost of the project exceeded the original estimate.", key: "ACTUAL", s2: "The ___ cost of the project exceeded the original estimate.", accepted: ["actual"], explanation: "actual (real, no 'presente')." },
          { s1: "The present situation remains genuinely unclear.", key: "CURRENT", s2: "The ___ situation remains genuinely unclear.", accepted: ["current"], explanation: "current (presente, no 'actual')." },
          { s1: "She plans to go to the international conference in person.", key: "ATTEND", s2: "She plans to ___ the international conference in person.", accepted: ["attend"], explanation: "attend (asistir, no 'assist')." },
        ],
      },
      p5: {
        title: "The translator who fell into a false friend's trap",
        text: "A professional translator, notwithstanding over fifteen years of considerable, hard-won professional experience translating official government documents between English and her own native language, once made an embarrassing error precisely because two words appeared deceptively similar across both languages while actually carrying subtly, meaningfully different meanings.\n\nTranslating a sensitive diplomatic communiqué, she rendered a phrase intended to convey that a particular proposed policy was \"sensible\" — meaning practical and genuinely well-reasoned — using her own native language's cognate term, one that, in that specific target language, actually conveys something considerably closer to \"emotionally sensitive\" or \"easily, readily offended\" instead.\n\n\"The resulting translated sentence,\" she later recounted with a certain wry, self-deprecating humour in a professional development workshop, \"essentially, accidentally suggested our diplomatic delegation considered the proposed policy easily hurt or offended, rather than genuinely practical and eminently well-reasoned, which was obviously, embarrassingly not remotely what the original English text actually, genuinely intended to convey.\"\n\nThe error, though eventually caught and corrected before final publication, notwithstanding the genuine embarrassment it caused, prompted her to develop a systematic personal reference list documenting every false friend she encountered throughout her own considerable professional career, a resource she now generously shares with newer translators entering her particular specialised field.\n\n\"Insofar as false friends specifically exploit genuine, deceptive linguistic similarity,\" she explained, \"they're considerably more dangerous, precisely, than entirely unfamiliar vocabulary a translator would naturally, instinctively double-check before ever committing to a specific, final translation choice.\"\n\nHer own personal reference list has since grown to include well over two hundred documented, carefully verified false friend pairs specific to her own particular language combination, organised by professional context specifically to help translators working in law, diplomacy and medicine avoid broadly similar, potentially serious errors in their own critically important, consequential work.\n\n\"By the same token that native speakers themselves sometimes confuse closely related words within their own single language,\" she reflected in closing her workshop presentation, \"translators face this specific, additional challenge doubled, working simultaneously across two entire, distinct linguistic systems that occasionally, deceptively appear more genuinely similar to each other than they actually, technically, substantively are.\"",
        q: [
          mc("What error did the translator make?", ["She mistranslated a number.", "She confused 'sensible' with a false friend meaning 'emotionally sensitive'.", "She omitted an entire paragraph.", "She used the wrong tense throughout."], 1, "'she rendered a phrase… using her own… language's cognate term, one that… conveys… 'emotionally sensitive''."),
          mc("What did the mistranslation accidentally suggest?", ["Nothing significant.", "That the delegation considered the policy easily hurt or offended.", "That the policy was cancelled.", "That the delegation disagreed entirely."], 1, "'accidentally suggested our diplomatic delegation considered the proposed policy easily hurt or offended'."),
          mc("What did she develop after this error?", ["Nothing changed.", "A systematic personal reference list of false friends.", "A new career entirely.", "A ban on translation work."], 1, "'prompted her to develop a systematic personal reference list documenting every false friend she encountered'."),
          mc("Why does she say false friends are more dangerous than unfamiliar vocabulary?", ["They're actually less dangerous.", "They exploit deceptive similarity, so translators don't naturally double-check them.", "They're always obvious errors.", "They don't actually cause problems."], 1, "'false friends specifically exploit genuine, deceptive linguistic similarity… they're considerably more dangerous… than entirely unfamiliar vocabulary a translator would naturally… double-check'."),
          mc("How large has her reference list grown?", ["Under ten entries.", "Well over two hundred documented pairs.", "Exactly one hundred.", "She never counted."], 1, "'has since grown to include well over two hundred documented, carefully verified false friend pairs'."),
          mc("What does she conclude about translators facing this challenge?", ["It's not a real challenge.", "Translators face this challenge doubled, working across two similar-seeming systems.", "Only beginners face this challenge.", "The challenge doesn't affect professionals."], 1, "'translators face this specific, additional challenge doubled, working simultaneously across two entire, distinct linguistic systems'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "False friends occupy a genuinely curious linguistic position, more dangerous in important respects than entirely unfamiliar vocabulary precisely because their deceptive surface familiarity actively discourages the careful verification unfamiliar words would naturally, instinctively prompt. (1)___\n\nA learner encountering a completely unknown word typically pauses, consults a dictionary, or asks for clarification before confidently proceeding with any particular translation or interpretation. (2)___ A false friend, precisely because it looks reassuringly familiar, rarely triggers this same natural, protective caution.\n\nThis particular danger grows considerably more acute at advanced proficiency levels specifically, somewhat counterintuitively. (3)___ Advanced learners, having already internalised thousands of genuinely accurate cognates between their native and target languages, develop a reasonable, generally well-founded trust in surface similarity that false friends specifically, deliberately exploit.\n\nProfessional contexts — legal, diplomatic, medical — raise the genuine stakes considerably higher still. (4)___ A false friend error in casual conversation typically causes momentary, easily corrected confusion; the same error in a legal contract or diplomatic communiqué can carry genuinely serious, sometimes irreversible practical consequences.\n\nThis explains why experienced professional translators frequently maintain systematic, carefully documented personal reference lists of false friends specific to their own particular working language combination, treating this seemingly modest documentation as genuinely essential professional infrastructure rather than mere optional, supplementary reference material. (5)___ Institutional knowledge, carefully accumulated this way, protects against errors individual memory alone cannot always, reliably guarantee.\n\nFor language learners more broadly, the practical lesson generalises usefully well beyond professional translation contexts specifically. (6)___ Genuine fluency requires not merely recognising which words look familiar, but developing the more difficult, more valuable habit of actively, deliberately verifying that familiar-looking words actually mean what they confidently, reassuringly appear to mean.",
        options: [
          "That familiarity itself turns out to be the real hazard here.",  // A -> gap1
          "Unfamiliarity, oddly, comes with its own built-in safeguard.", // B -> gap2
          "Confidence, ironically, is precisely what makes this so risky.", // C -> gap3
          "Context, here, raises what's actually at stake considerably.", // D -> gap4
          "Written lists do work memory alone cannot reliably match.", // E -> gap5
          "The underlying habit matters well beyond any one profession.", // F -> gap6
          "No false friend has ever caused any genuine translation error.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la familiaridad misma resulta el verdadero peligro."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la falta de familiaridad trae su propia salvaguarda."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la confianza, irónicamente, es lo que lo hace arriesgado."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el contexto eleva lo que está en juego considerablemente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: las listas escritas hacen lo que la memoria sola no puede."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: el hábito subyacente importa más allá de una sola profesión."),
        ],
      },
      p7: {
        title: "Four learners discuss a false friend that once confused them",
        text: "Read what four learners say about a false friend that once genuinely confused them.\n\nA) NADIA: I once used 'sensible' when I actually meant 'sensitive', in a genuinely important professional email. The confusion that caused still makes me wince slightly, honestly, years later.\n\nB) TOM: 'Actual' tripped me up for years — I kept using it to mean 'current' rather than 'real', which caused some genuinely confusing misunderstandings at work.\n\nC) PRIYA: I confused 'economic' and 'economical' constantly at first, describing a country's whole financial policy as simply 'economical' rather than 'economic'.\n\nD) SAM: 'Assist' versus 'attend' genuinely confused me for the longest time — I kept saying I would 'assist' a meeting rather than actually attend it.\n",
        q: [
          mc("Who confused 'sensible' and 'sensitive' in a professional email?", ["A", "B", "C", "D"], 0, "Nadia: 'I once used 'sensible' when I actually meant 'sensitive', in a genuinely important professional email'."),
          mc("Who confused 'actual' with 'current' for years?", ["A", "B", "C", "D"], 1, "Tom: ''Actual' tripped me up for years — I kept using it to mean 'current' rather than 'real''."),
          mc("Who confused 'economic' and 'economical'?", ["A", "B", "C", "D"], 2, "Priya: 'I confused 'economic' and 'economical' constantly at first'."),
          mc("Who confused 'assist' and 'attend'?", ["A", "B", "C", "D"], 3, "Sam: ''Assist' versus 'attend' genuinely confused me for the longest time'."),
          mc("Who still winces slightly years later about their error?", ["A", "B", "C", "D"], 0, "Nadia: 'The confusion that caused still makes me wince slightly, honestly, years later'."),
          mc("Who caused confusing misunderstandings at work because of this?", ["A", "B", "C", "D"], 1, "Tom: 'which caused some genuinely confusing misunderstandings at work'."),
          mc("Who described a country's financial policy incorrectly?", ["A", "B", "C", "D"], 2, "Priya: 'describing a country's whole financial policy as simply 'economical' rather than 'economic''."),
          mc("Who kept saying they would 'assist' a meeting?", ["A", "B", "C", "D"], 3, "Sam: 'I kept saying I would 'assist' a meeting rather than actually attend it'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la identidad cultural y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Globalisation gradually erodes meaningful cultural distinctiveness, replacing genuinely diverse local traditions with a homogeneous, commercially driven global monoculture. Communities should actively resist this pressure to protect their own genuine cultural identity.'\n\nTEXTO 2: 'Cultural exchange has always shaped human societies, and globalisation simply accelerates a genuinely ancient process. Cultural hybridity, rather than representing loss, often produces genuinely rich new forms that neither original culture could have achieved entirely alone.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos DOS pares de falsos amigos/colocaciones precisas correctamente (sensible/sensitive, actual/current, economic/economical). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO para una revista cultural: 'Is cultural appropriation always harmful?' — argumenta tu postura.\n· CARTA/EMAIL formal a una organización internacional proponiendo cómo proteger las culturas minoritarias frente a la globalización.\n· REVIEW de un libro o película sobre identidad cultural o diáspora que te haya impactado.", 280, 320),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación con hablantes interactuando (5 MC, 4 opciones)", "Escucha una conversación entre dos traductoras sobre un error de falso amigo (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear a conversation between two translators about a false friend error. Woman: I once translated 'sensible' incorrectly in a diplomatic communiqué, confusing it with 'sensitive'. Man: That must have caused real confusion in the final translated text. Woman: It did — it suggested the delegation found the policy easily offended rather than genuinely practical and well-reasoned. Man: How did you catch the error eventually? Woman: A colleague reviewing the document before publication caught it, thankfully, just in time. Man: What did you do afterward, to prevent it happening again? Woman: I developed a systematic personal reference list of false friends specific to my language pair. Man: That sounds genuinely useful for other translators too, honestly. Woman: It has been — I now share it with newer translators entering the field specifically.", [
      mc("1. What error did the woman make?", ["A grammar mistake.", "Confusing 'sensible' with 'sensitive'.", "Mistranslating a number.", "Omitting a sentence."], 1, "'I once translated 'sensible' incorrectly… confusing it with 'sensitive''."),
      mc("2. What did this suggest in the translated text?", ["Nothing significant.", "That the delegation found the policy easily offended.", "That the policy was cancelled.", "That the delegation approved fully."], 1, "'it suggested the delegation found the policy easily offended rather than genuinely practical'."),
      mc("3. How was the error caught?", ["It wasn't caught.", "A colleague reviewing the document before publication.", "The delegation complained.", "An automatic spell-checker."], 1, "'A colleague reviewing the document before publication caught it'."),
      mc("4. What did she do to prevent future errors?", ["Nothing specific.", "Developed a systematic personal reference list of false friends.", "Stopped translating diplomatic texts.", "Hired an assistant."], 1, "'I developed a systematic personal reference list of false friends'."),
      mc("5. What does she now do with this list?", ["Keeps it entirely private.", "Shares it with newer translators entering the field.", "Sells it commercially.", "Has forgotten about it."], 1, "'I now share it with newer translators entering the field specifically'."),
    ]),

    ...speakingParts({ p1: "si te has confundido alguna vez con un falso amigo al hablar inglés y qué pasó", p2: "dos imágenes de la identidad cultural (una persona vestida con ropa tradicional en una celebración y un grupo diverso de amigos de diferentes culturas conversando): comentadlas y decidid cuál representa mejor la identidad cultural en el mundo actual", p3: "qué es más importante para mantener una identidad cultural fuerte en un mundo globalizado (preservar la lengua propia, celebrar tradiciones locales, educar a las nuevas generaciones, resistir la homogeneización comercial, mantener el arraigo mientras se es abierto/a a otras culturas): comentadlo y decidid lo más importante", p4: "la identidad cultural y la globalización: si la globalización representa una amenaza real para la diversidad cultural, qué distingue el intercambio cultural legítimo de la apropiación cultural problemática, y si es posible ser genuinamente cosmopolita sin perder el arraigo a la propia cultura" }),

    SUMMARY("Resumen del Día 28", [
      "Falsos amigos de nivel C2: sensible/sensitive, actual/current, economic/economical, historic/historical, to attend/to assist.",
      "Vocabulario de la identidad cultural y la globalización. Practicadas las 7 partes de Use of English, Writing, Listening P3 y Speaking P1–P3.",
    ]),
    INFO("Tarea para el Día 29", "Escribe 4 frases usando correctamente los falsos amigos de hoy. Repasa el vocabulario de identidad cultural. Mañana: simulacro cronometrado combinando toda la gramática de la semana."),
  ],
};

// ───────────────────────── DÍA 29 ─────────────────────────
const DAY29 = {
  title: "Día 29 — Simulacro cronometrado combinado · La música y las tradiciones festivas",
  description: "Práctica cronometrada combinando idioms de nivel C2, proverbios con función retórica, y falsos amigos/precisión colocacional en los mismos textos. Vocabulario de la música y las tradiciones festivas. Las 4 destrezas en condiciones de examen real.",
  pedagogy: {
    objective: "Aplicar de forma combinada, bajo presión de tiempo, los recursos léxicos de la semana.",
    summary: "Simulacro cronometrado: idioms + proverbios + falsos amigos combinados; música y tradiciones festivas; Use of English P1–P7, Writing, Listening, Speaking.",
    reviewPrompts: ["¿Qué recurso léxico de la semana sigue costándote más bajo presión de tiempo?", "¿Terminaste el Reading & Use of English dentro del tiempo (90 min reales)?"],
  },
  items: [
    TEXT("⏱️ Día 29 — SIMULACRO CRONOMETRADO. Hoy combinas los recursos léxicos de la semana: idioms de nivel C2, proverbios con función retórica, y falsos amigos/precisión colocacional. Vocabulario: la MÚSICA y las TRADICIONES FESTIVAS. Cronómetro recomendado: 90 min para el Reading & Use of English."),
    GRAMMAR("Recordatorio combinado — Semana 6", `1) IDIOMS DE NIVEL C2: The festival's revival proved a Pyrrhic victory of sorts — genuine cultural recognition at the cost of commercial dilution. / Organisers had read the writing on the wall regarding declining youth participation.
2) PROVERBIOS CON FUNCIÓN RETÓRICA: Actions speak louder than words, the old proverb goes — yet ceremonial gesture, this essay will argue, carries its own distinct communicative weight.
3) FALSOS AMIGOS/PRECISIÓN: The actual attendance figures (not "current") exceeded expectations; the current festival director (not "actual") has held the role for a decade.
Combínalos con naturalidad — uno o dos bien colocados por párrafo tienen más impacto que todos forzados en la misma frase.`),
    grammarEx("Use of English — Repaso combinado (S6, Días 26-28)", "Elige la opción correcta.", [
      mc("The festival's revival proved a ___ victory of sorts — recognition at the cost of dilution.", ["Pyrrhic", "flash in the pan", "double-edged"], 0, "Pyrrhic victory (Día 26)."),
      mc("Organisers had ___ the writing on the wall regarding declining participation.", ["read", "written", "seen"], 0, "read the writing on the wall (Día 26)."),
      mc("Actions speak louder than words, the old ___ goes.", ["proverb", "idiom", "saying"], 0, "proverbio (Día 27) — 'saying' también aceptable en general, pero 'proverb' es la forma exacta enseñada."),
      mc("The ___ attendance figures exceeded initial expectations considerably.", ["actual", "current"], 0, "actual: real (no 'presente') (Día 28)."),
      mc("The ___ festival director has held the role for over a decade now.", ["current", "actual"], 0, "current: presente (Día 28)."),
      mc("This is a genuinely ___ topic within the community — approach it carefully.", ["sensitive", "sensible"], 0, "sensitive: emocionalmente delicado (Día 28)."),
    ]),
    GRAMMAR("Vocabulario del día — La música y las tradiciones festivas (C2)", "Léxico de maestría sobre música y festivales."),
    deck("C2 S6D29 — Música y tradiciones festivas", [
      ["ethnomusicology", "etnomusicología", "Ethnomusicology studies music within its full cultural context.", "sustantivo", "ˌeθnəʊˌmjuːzɪˈkɒlədʒi"],
      ["syncopation", "síncopa (musical)", "Syncopation gives the rhythm its distinctive, unexpected energy.", "sustantivo", "ˌsɪŋkəˈpeɪʃn"],
      ["improvised", "improvisado/a", "The improvised solo showcased the musician's genuine spontaneous skill.", "adjetivo", "ˈɪmprəvaɪzd"],
      ["communal celebration", "celebración comunitaria", "The festival functions as a genuine communal celebration of shared identity.", "sustantivo", "kəˈmjuːnl ˌseləˈbreɪʃn"],
      ["ritualistic", "ritualista, propio de un ritual", "The ceremony's ritualistic structure has remained largely unchanged for centuries.", "adjetivo", "ˌrɪtʃuəˈlɪstɪk"],
      ["commercialised", "comercializado/a", "Critics argue the festival has become excessively commercialised over time.", "adjetivo", "kəˈmɜːʃəlaɪzd"],
      ["intergenerational", "intergeneracional", "The festival relies heavily on genuine intergenerational participation and transmission.", "adjetivo", "ˌɪntəˌdʒenəˈreɪʃənl"],
      ["revelry", "jolgorio, festejo", "The streets filled with genuine, joyful revelry throughout the night.", "sustantivo", "ˈrevlri"],
      ["cultural showcase", "escaparate cultural", "The event serves as an important cultural showcase for the wider region.", "sustantivo", "ˈkʌltʃərəl ˈʃəʊkeɪs"],
      ["authenticity", "autenticidad", "Debates over the festival's authenticity have intensified considerably in recent years.", "sustantivo", "ˌɔːθenˈtɪsəti"],
    ]),
    vocabEx("Vocabulario — La música y las tradiciones festivas", "Elige la opción correcta.", [
      mc("The academic study of music within its cultural context:", ["ethnomusicology", "syncopation", "revelry"], 0, "ethnomusicology."),
      mc("Created spontaneously, without prior scripting or preparation:", ["improvised", "ritualistic", "commercialised"], 0, "improvised."),
      mc("An unexpected, off-beat rhythmic emphasis in music:", ["syncopation", "revelry", "showcase"], 0, "syncopation."),
      mc("A shared, collective celebration bringing a community together:", ["communal celebration", "cultural showcase", "revelry"], 0, "communal celebration."),
      mc("Involving multiple generations participating together:", ["intergenerational", "ritualistic", "commercialised"], 0, "intergenerational."),
      mc("Lively, joyful celebration, often involving music and dancing:", ["revelry", "syncopation", "ethnomusicology"], 0, "revelry."),
    ]),

    ...uoe({
      p1: {
        title: "When festivals become spectacle",
        text: "Traditional community festivals, once primarily functioning as genuine communal celebration and intergenerational cultural transmission, increasingly face pressure to (1)___ into tourist-oriented commercial spectacle, a transformation that raises genuinely sensitive questions about (2)___ and cultural integrity. Festival organisers who read the writing on the wall regarding declining local youth participation have sometimes, notwithstanding good intentions, thrown down the gauntlet to commercial sponsors, seeking funding that inevitably (3)___ some degree of programming influence in return. This arrangement risks becoming a Pyrrhic victory of sorts: financial sustainability achieved, perhaps, at the (4)___ cost of the festival's own original cultural meaning and community ownership. Actions speak louder than words, the old proverb (5)___ — and how festivals are actually, concretely funded and organised often reveals more about their genuine priorities than any official mission statement (6)___ might publicly, confidently claim.",
        q: [
          mc("(1)", ["transform", "evolve", "shift", "morph"], 0, "'face pressure to transform into… spectacle'."),
          mc("(2)", ["authenticity", "legitimacy", "credibility", "validity"], 0, "'raises genuinely sensitive questions about authenticity'."),
          mc("(3)", ["entails", "involves", "requires", "demands"], 0, "'funding that inevitably entails some degree of… influence'."),
          mc("(4)", ["actual", "real", "genuine", "true"], 0, "'at the actual cost of the festival's own… meaning' — falso amigo bien empleado: 'actual' = real."),
          mc("(5)", ["goes", "says", "states", "claims"], 0, "'the old proverb goes'."),
          mc("(6)", ["alone", "itself", "simply", "merely"], 1, "'any official mission statement itself might… claim'."),
        ],
      },
      p2: {
        title: "Improvisation as living tradition",
        text: "Musical traditions built around genuine improvisation, whereby performers actively create material spontaneously rather than reproducing fixed, pre-composed pieces, present distinctive challenges for formal preservation efforts that traditional written musical notation was never really, adequately (1)___ to fully capture or document. Insofar as a tradition's genuine vitality depends (2)___ this improvisational spontaneity, overly rigid documentation efforts risk inadvertently killing precisely the living quality that made the tradition genuinely meaningful and valuable (3)___ the first place. By the same token that a fable's fixed written text differs meaningfully from its living oral performance, a musical transcription differs meaningfully (4)___ the actual, current living tradition it merely, imperfectly attempts to represent on paper. Some ethnomusicologists have consequently shifted (5)___ documenting not fixed musical texts, but rather the underlying improvisational principles and conventions that skilled performers actually, genuinely draw upon in the specific, particular moment of live, spontaneous performance itself. This approach, notwithstanding its own genuine methodological (6)___, arguably captures something closer to the tradition's actual, living essence than static notation alone could ever plausibly achieve.",
        q: [
          fb("(1)", ["designed", "intended"], "'notation was never really… designed/intended to… capture'."),
          fb("(2)", ["on", "upon"], "'a tradition's… vitality depends on/upon this… spontaneity'."),
          fb("(3)", ["in"], "'meaningful and valuable in the first place'."),
          fb("(4)", ["from"], "'differs meaningfully from the actual… tradition'."),
          fb("(5)", ["towards", "to"], "'shifted towards/to documenting… principles'."),
          fb("(6)", ["difficulty", "challenges", "complexity"], "'its own genuine methodological difficulty/challenges/complexity'."),
        ],
      },
      p3: {
        title: "The economics of the modern festival",
        text: "Contemporary festival organisers face a genuinely (1)___ balancing act between commercial sustainability and cultural authenticity, a tension that has grown considerably more acute as festivals increasingly depend on (2)___ sponsorship and tourism revenue to remain financially viable in an increasingly competitive cultural marketplace. An economical approach to festival budgeting, prioritising cost-efficiency above all else, can sometimes conflict directly with the considerably more expensive, genuinely labour-intensive work of authentic (3)___ preservation and meaningful intergenerational cultural transmission. Notwithstanding these genuine, real tensions, some festivals have successfully navigated this difficult (4)___, maintaining core cultural (5)___ while still achieving genuine commercial sustainability through careful, deliberate curatorial choices about precisely which elements to commercialise and which to protect from excessive outside (6)___.",
        items: [
          { root: "sensible", accepted: ["sensitive"], hint: "'a genuinely sensitive balancing act' → sensitive (no 'sensible')." },
          { root: "commerce", accepted: ["commercial"], hint: "'depend on commercial sponsorship' (adjetivo)." },
          { root: "tradition", accepted: ["traditional"], hint: "'authentic traditional preservation' → traditional." },
          { root: "balance", accepted: ["balance"], hint: "'navigated this difficult balance' (sustantivo)." },
          { root: "integrity", accepted: ["integrity"], hint: "'maintaining core cultural integrity' (sustantivo)." },
          { root: "influence", accepted: ["influence"], hint: "'protect from excessive outside influence' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso combinado de la Semana 6",
        items: [
          { s1: "Organisers had seen the decline in youth participation coming well in advance.", key: "WRITING", s2: "Organisers had read the ___ on the wall regarding declining youth participation.", accepted: ["writing"], explanation: "read the writing on the wall." },
          { s1: "What people actually do reveals more than official statements claim.", key: "ACTIONS", s2: "___ speak louder than words, the old proverb goes.", accepted: ["actions"], explanation: "actions speak louder than words." },
          { s1: "The real attendance figures exceeded initial expectations considerably.", key: "ACTUAL", s2: "The ___ attendance figures exceeded initial expectations considerably.", accepted: ["actual"], explanation: "actual (real, no 'presente')." },
          { s1: "The present festival director has held the role for over a decade.", key: "CURRENT", s2: "The ___ festival director has held the role for over a decade.", accepted: ["current"], explanation: "current (presente)." },
          { s1: "The festival's financial recovery came at a genuinely high cultural cost.", key: "PYRRHIC", s2: "The festival's financial recovery proved a ___ victory of sorts.", accepted: ["pyrrhic", "Pyrrhic"], explanation: "a Pyrrhic victory." },
        ],
      },
      p5: {
        title: "The musician who refused to write it down",
        text: "A master improvising musician, having spent over four decades performing within a rich, living oral musical tradition passed down directly from her own teacher without any formal written notation whatsoever, faced repeated, well-intentioned requests from ethnomusicologists eager to formally document and transcribe her considerable, hard-won repertoire before it was potentially, permanently lost to future generations.\n\n\"There's no smoke without fire,\" she noted wryly in a rare, candid recorded interview, addressing persistent institutional concerns about the tradition's genuine long-term survival, \"and I do understand, genuinely, why people worry about preservation specifically. But writing my music down completely would be rather like pressing a living, growing flower — you'd preserve its outward shape, certainly, but you'd lose the very thing that actually, genuinely made it alive and meaningful in the first place.\"\n\nHer own considered, carefully reasoned position reflected a genuinely sensible, well-thought-out compromise rather than simple stubborn, reflexive resistance to any documentation whatsoever. She agreed, after considerable careful thought, to have specific individual performances recorded on audio and video, providing valuable historical documentation, while firmly, consistently declining requests to reduce her music's underlying improvisational principles to fixed, prescriptive written notation that future performers might, she genuinely worried, simply reproduce mechanically rather than genuinely, actively improvise themselves.\n\n\"By the same token that a fable loses something genuinely essential when reduced merely to bare written plot summary,\" she explained, \"my music would lose its actual, living essence if reduced merely to notes fixed permanently on a page, however well-intentioned and genuinely careful that particular reduction ultimately, technically proved to be.\"\n\nHer eventual compromise — extensive audio-visual documentation combined with a formally structured, carefully designed apprenticeship programme for training genuinely skilled successors — has since become something of an influential model cited by other ethnomusicologists grappling with broadly similar, comparable preservation dilemmas elsewhere.\n\n\"What I ultimately want,\" she reflected in closing her interview, \"is not for my particular music to survive merely as fixed museum artefact, but for the actual, living tradition itself to continue genuinely, authentically breathing through real musicians actively, spontaneously creating new music within it, long after I myself am no longer here to personally perform it.\"",
        q: [
          mc("What requests did the musician repeatedly face?", ["Requests to stop performing.", "Requests to formally document and transcribe her repertoire.", "Requests to teach abroad.", "Requests to retire early."], 1, "'faced repeated… requests from ethnomusicologists eager to formally document and transcribe her considerable… repertoire'."),
          mc("What comparison does she use to explain her hesitation?", ["A broken instrument.", "Pressing a living flower, which preserves shape but loses life.", "A lost recipe.", "An empty concert hall."], 1, "'writing my music down completely would be rather like pressing a living, growing flower — you'd preserve its outward shape… but you'd lose the… thing that… made it alive'."),
          mc("What did she eventually agree to?", ["Nothing at all.", "Audio-visual recording of specific performances, but not fixed written notation.", "Full written transcription of everything.", "Stopping all documentation efforts."], 1, "'She agreed… to have specific individual performances recorded on audio and video… while firmly… declining requests to reduce her music's… principles to fixed… notation'."),
          mc("What does she compare her music to regarding fables?", ["Nothing comparable exists.", "A fable losing something essential when reduced to bare plot summary.", "A fable being improved by summary.", "Fables having no connection to music."], 1, "'a fable loses something genuinely essential when reduced merely to bare written plot summary'."),
          mc("What did her eventual compromise include?", ["Only written notation.", "Extensive audio-visual documentation combined with a structured apprenticeship programme.", "Complete refusal of any documentation.", "Selling her music commercially."], 1, "'extensive audio-visual documentation combined with a formally structured… apprenticeship programme for training genuinely skilled successors'."),
          mc("What does she ultimately want for her music?", ["To become a museum artefact.", "For the living tradition to continue through musicians actively creating new music.", "To be forgotten entirely.", "To be sold to a record label."], 1, "'for the actual, living tradition itself to continue genuinely… breathing through real musicians actively, spontaneously creating new music within it'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Festivals occupy a genuinely distinctive position within cultural life, simultaneously functioning as intimate community ritual and, increasingly, as significant public spectacle attracting outside visitors and considerable commercial investment. (1)___\n\nThis dual function creates a persistent, genuine tension that most successful contemporary festivals must somehow navigate carefully, whether they explicitly, consciously acknowledge doing so or not. (2)___ Serving the local community authentically and serving outside visitors profitably do not always, automatically align neatly with one another.\n\nSome festivals resolve this tension by maintaining strict separation, keeping certain core ritual elements genuinely closed to outside observation while presenting other, more performative elements specifically for broader public consumption and spectacle. (3)___ This approach protects sacred or intimate elements while still permitting genuine, valuable cultural exchange and revenue generation elsewhere.\n\nOther festivals embrace considerably greater transparency, opening most or even all elements to outside observation and participation, betting that genuine, direct exposure builds more meaningful cross-cultural understanding than careful, selective curation ever quite manages to achieve. (4)___ This approach carries its own genuine risk: excessive commercialisation potentially degrading elements never originally designed to function as pure spectacle for outside consumption.\n\nNeither approach, pursued with complete theoretical consistency, entirely avoids real, practical difficulty. (5)___ What works reasonably well for one particular festival, with its own specific history and community, may prove genuinely unsuitable for another with meaningfully different circumstances and needs.\n\nThis suggests that festival organisers, like cultural preservationists more broadly, ultimately require careful, case-by-case judgement rather than any single, universally applicable formula. (6)___ The genuinely right balance, whereby community and commerce are both reasonably served, likely differs considerably across different specific festivals and cultural contexts.",
        options: [
          "That double life is not always comfortable to hold.",  // A -> gap1
          "The two audiences do not automatically want the same thing.", // B -> gap2
          "A line drawn carefully protects something worth protecting.", // C -> gap3
          "Openness, chosen deliberately, is not free of cost either.", // D -> gap4
          "Each path, in short, trades one genuine risk for another.", // E -> gap5
          "No single formula, evidently, travels well across every context.", // F -> gap6
          "No festival has ever faced any tension between community and commerce.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa doble vida no siempre es cómoda de sostener."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las dos audiencias no quieren automáticamente lo mismo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: una línea trazada con cuidado protege algo valioso."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la apertura, elegida deliberadamente, también tiene coste."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: cada camino cambia un riesgo por otro."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: ninguna fórmula única funciona en todos los contextos."),
        ],
      },
      p7: {
        title: "Four people discuss a festival or musical tradition important to them",
        text: "Read what four people say about a festival or musical tradition that remains important to them personally.\n\nA) NADIA: Our local festival threw down the gauntlet to commercial sponsors years ago, seeking funding that helped keep the whole event financially viable long-term.\n\nB) TOM: The musical tradition in my family relies heavily on genuine improvisation — nothing is ever written down formally, actually, which makes it feel genuinely alive every single time.\n\nC) PRIYA: There's no smoke without fire, people say about our festival's declining attendance, though I think the actual reasons are honestly more complicated than simple, straightforward decline.\n\nD) SAM: My grandmother always said actions speak louder than words about our community's traditional ceremonies — the doing matters more than any explanation given beforehand.\n",
        q: [
          mc("Whose local festival sought commercial sponsorship to stay viable?", ["A", "B", "C", "D"], 0, "Nadia: 'Our local festival threw down the gauntlet to commercial sponsors years ago, seeking funding'."),
          mc("Whose family musical tradition relies on improvisation, never written down?", ["A", "B", "C", "D"], 1, "Tom: 'The musical tradition in my family relies heavily on genuine improvisation — nothing is ever written down'."),
          mc("Who thinks the actual reasons for declining attendance are more complicated?", ["A", "B", "C", "D"], 2, "Priya: 'I think the actual reasons are honestly more complicated than simple, straightforward decline'."),
          mc("Whose grandmother said actions speak louder than words about ceremonies?", ["A", "B", "C", "D"], 3, "Sam: 'My grandmother always said actions speak louder than words about our community's traditional ceremonies'."),
          mc("Who says the funding helped keep the festival financially viable long-term?", ["A", "B", "C", "D"], 0, "Nadia: 'funding that helped keep the whole event financially viable long-term'."),
          mc("Who says the tradition feels genuinely alive every single time?", ["A", "B", "C", "D"], 1, "Tom: 'which makes it feel genuinely alive every single time'."),
          mc("Who mentions the saying 'there's no smoke without fire' about their festival?", ["A", "B", "C", "D"], 2, "Priya: 'There's no smoke without fire, people say about our festival's declining attendance'."),
          mc("Who says the doing matters more than any explanation given beforehand?", ["A", "B", "C", "D"], 3, "Sam: 'the doing matters more than any explanation given beforehand'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras) — CRONOMETRADO (40 min)", "Lee estos dos textos sobre los festivales culturales y escribe un ENSAYO (240–280 palabras) en un máximo de 40 minutos, que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Commercial sponsorship threatens festivals' cultural authenticity, gradually transforming genuine community celebration into tourist-oriented spectacle designed primarily for outside consumption rather than local meaning.'\n\nTEXTO 2: 'Commercial sponsorship, far from threatening authenticity, often provides the financial sustainability that allows festivals to survive at all. Without external funding, many valuable traditions would simply disappear entirely for lack of resources.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos UN idiom, UN proverbio con función retórica, y UN falso amigo correctamente. Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras) — CRONOMETRADO (30 min)", "Elige UNA, en un máximo de 30 minutos:\n· ARTÍCULO: 'The festival that shaped my sense of community' — reflexiona con un ejemplo personal o hipotético.\n· CARTA/EMAIL formal a un organismo cultural proponiendo cómo financiar un festival sin comprometer su autenticidad.\n· REPORT sobre el estado de las tradiciones musicales en tu región: Introduction / Findings / Recommendations.", 280, 320),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, dos tareas de 5 de 8, 10 preguntas) — CRONOMETRADO", "Escucha a cinco personas hablando de una tradición musical o festiva (se oye dos veces). Hay DOS tareas. TAREA UNO (¿qué aspecto describen?): A commercial pressure · B improvisation · C intergenerational transmission · D declining attendance · E documentation efforts · F authenticity debates · G community ownership · H nothing specific. TAREA DOS (¿qué actitud tienen?): A cautiously optimistic · B genuinely worried · C proud · D reflective · E defensive · F pragmatic · G nostalgic · H indifferent.", "This is Part Four. You will hear five people talking about a musical or festive tradition. Speaker One: Commercial pressure on our festival has grown considerably in recent years, and I'll admit I'm genuinely worried about where that leads us long-term. Speaker Two: Improvisation is at the very heart of our musical tradition, and I feel genuinely proud every time I perform it, honestly. Speaker Three: Passing the tradition to my own children has been the most meaningful part of it all for me, reflecting on it now. Speaker Four: Attendance at our local festival has been declining steadily, and I remain cautiously optimistic new initiatives will eventually help reverse that particular trend. Speaker Five: We've documented our tradition extensively on video now, and I feel quite pragmatic about balancing preservation with keeping the tradition genuinely, actively alive.", [
      mc("Speaker 1 — TAREA UNO (aspecto)", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: commercial pressure."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: improvisation."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: intergenerational transmission."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: declining attendance."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F", "G", "H"], 4, "E: documentation efforts."),
      mc("Speaker 1 — TAREA DOS (actitud)", ["A", "B", "C", "D", "E", "F", "G", "H"], 1, "B: genuinely worried."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 2, "C: proud."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 3, "D: reflective."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 0, "A: cautiously optimistic."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F", "G", "H"], 5, "F: pragmatic."),
    ]),

    ...speakingParts({ p1: "si tienes alguna tradición musical o festiva importante en tu familia o comunidad", p2: "dos imágenes de la música y las tradiciones festivas (un festival multitudinario con luces y escenario y un grupo pequeño tocando música tradicional en un entorno íntimo): comentadlas y decidid cuál representa mejor la autenticidad cultural", p3: "qué es más importante para mantener viva una tradición musical (la improvisación libre, la documentación formal, la transmisión intergeneracional directa, el apoyo institucional, la difusión comercial): comentadlo y decidid lo más importante", p4: "la música y las tradiciones festivas: si la comercialización de un festival compromete necesariamente su autenticidad, qué se pierde cuando una tradición musical improvisada se documenta por escrito, y si las tradiciones festivas deberían evolucionar libremente o mantenerse fieles a su forma original" }),

    SUMMARY("Resumen del Día 29 — Simulacro cronometrado", [
      "Practicados de forma combinada: idioms de nivel C2, proverbios con función retórica, y falsos amigos/precisión colocacional.",
      "Vocabulario de la música y las tradiciones festivas. Reading & Use of English completo en condiciones cronometradas (90 min).",
      "Mañana: repaso final de la semana + mini-simulacro.",
    ]),
    INFO("Tarea para el Día 30", "Repasa los recursos léxicos de la semana y todo el vocabulario. Mañana: repaso final + mini-simulacro de la Semana 6."),
  ],
};

// ───────────────────────── DÍA 30 ─────────────────────────
const DAY30 = {
  title: "Día 30 — Repaso de la semana + mini-simulacro",
  description: "Consolidación de los idioms de nivel C2, los proverbios con función retórica, y los falsos amigos/precisión colocacional, con el vocabulario de patrimonio, folclore, identidad cultural, música y festivales. Las 4 destrezas (formato C2); Listening P1-P2 combinado. Al final, el mini-simulacro de la Semana 6.",
  pedagogy: {
    objective: "Consolidar todos los recursos léxicos de la semana antes de la Semana 7 (repaso integral).",
    summary: "Repaso de idioms/proverbios/falsos amigos; Use of English P1–P7; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué recurso léxico de la semana usarías con más confianza en tu propio Writing?", "Repásalo todo antes de la Semana 7 (repaso integral de las Semanas 1-6)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 6 del C2. Consolidas los IDIOMS DE NIVEL C2, los PROVERBIOS CON FUNCIÓN RETÓRICA, y los FALSOS AMIGOS/PRECISIÓN COLOCACIONAL. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 6", `1) IDIOMS DE NIVEL C2: throw down the gauntlet, a Pyrrhic victory, move the goalposts, a flash in the pan, hoist with one's own petard, read the writing on the wall.
2) PROVERBIOS CON FUNCIÓN RETÓRICA: apertura memorable + desarrollo que matiza; síntesis final; contraste irónico (citar y luego complicar/contradecir).
3) FALSOS AMIGOS DE NIVEL C2: sensible/sensitive, actual/current, economic/economical, historic/historical, to attend/to assist.
Con esto completas el repertorio léxico más sofisticado del curso C2 — la semana que viene, repaso integral de TODA la gramática y léxico de las Semanas 1-6 antes de continuar hacia la recta final.`),
    grammarEx("Use of English — Repaso mixto de la Semana 6", "Completa o elige.", [
      mc("The senator's speech effectively threw down the ___ to her rivals.", ["gauntlet", "sword", "glove"], 0, "throw down the gauntlet."),
      mc("The lawsuit's outcome proved a ___ victory, costing more than it gained.", ["Pyrrhic", "flash in the pan", "double-edged"], 0, "a Pyrrhic victory."),
      mc("Actions speak louder than ___, the proverb reminds us.", ["words", "silence", "promises"], 0, "actions speak louder than words."),
      mc("The ___ cost of the project far exceeded the original estimate.", ["actual", "current"], 0, "actual (real, no 'presente')."),
      mc("This is a genuinely ___ topic — approach it with real care.", ["sensitive", "sensible"], 0, "sensitive (no 'sensible')."),
      mc("She plans to ___ the international conference next month.", ["attend", "assist"], 0, "attend (no 'assist')."),
      fb("Experienced analysts had read the ___ on the wall months before the crisis. (idiom)", ["writing"], "read the writing on the wall."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 6", "Repasa los mazos (patrimonio cultural, folclore, identidad cultural, música y festivales)."),
    vocabEx("Vocabulario — Repaso de la Semana 6", "Elige la opción correcta.", [
      mc("Non-physical cultural heritage such as oral traditions or rituals:", ["intangible heritage", "vernacular architecture", "provenance"], 0, "intangible heritage."),
      mc("Traditional stories, customs and beliefs of a community:", ["folklore", "mythology", "apocrypha"], 0, "folklore."),
      mc("The blending of elements from different cultures into something new:", ["cultural hybridity", "homogenisation", "parochialism"], 0, "cultural hybridity."),
      mc("The academic study of music within its cultural context:", ["ethnomusicology", "syncopation", "revelry"], 0, "ethnomusicology."),
      mc("Of doubtful or unverifiable authenticity, though widely repeated:", ["apocryphal", "allegorical", "mythological"], 0, "apocryphal."),
      mc("A narrow, insular outlook limited to one's immediate locality:", ["parochialism", "cosmopolitanism", "hybridity"], 0, "parochialism."),
      mc("Created spontaneously, without prior scripting or preparation:", ["improvised", "ritualistic", "commercialised"], 0, "improvised."),
      mc("A felt sense of belonging and connection to a particular place or culture:", ["rootedness", "hybridity", "parochialism"], 0, "rootedness."),
    ]),

    ...uoe({
      p1: {
        title: "Six weeks into C2",
        text: "Reaching the end of the sixth full week of C2 preparation (1)___ a natural point for taking honest stock of the considerable lexical and grammatical sophistication now, cumulatively, genuinely achieved. This particular week's material — idioms, proverbs, false friends — represents some of the most genuinely nuanced content the entire course actually offers, requiring not merely grammatical accuracy but authentic, native-like precision (2)___ word choice and register. By the same token that earlier weeks built institutional and literary sophistication, this week builds genuinely idiomatic, culturally embedded fluency — a register no textbook rule alone can (3)___ fully capture or teach. Notwithstanding this considerable, genuine complexity, learners who have engaged seriously with six consecutive weeks of demanding material should feel genuinely (4)___ about their overall accumulated progress. In light of the six weeks now genuinely, solidly behind them, the course's (5)___ week — an integrated review of everything covered thus far — should feel like a genuinely valuable consolidation rather than an entirely fresh, separate challenge. What emerges from this particular week, ultimately, is recognition that true fluency requires not merely correct grammar, but the kind of cultural and idiomatic fluency that takes years, not weeks, to (6)___ develop.",
        q: [
          mc("(1)", ["offers", "marks", "provides", "presents"], 0, "'offers a natural point for taking… stock'."),
          mc("(2)", ["in", "of", "regarding", "about"], 0, "'authentic… precision in word choice'."),
          mc("(3)", ["ever", "fully", "genuinely", "truly"], 1, "'no textbook rule alone can fully capture'."),
          mc("(4)", ["encouraged", "confident", "satisfied", "reassured"], 1, "'should feel genuinely confident about their… progress'."),
          mc("(5)", ["next", "following", "upcoming", "forthcoming"], 0, "'the course's next week'."),
          mc("(6)", ["genuinely", "fully", "truly", "completely"], 2, "'takes years, not weeks, to truly develop'."),
        ],
      },
      p2: {
        title: "What idiomatic fluency actually requires",
        text: "Genuine idiomatic fluency, notwithstanding what many learners initially, perhaps naively assume, cannot be achieved (1)___ simply memorising long lists of idioms and proverbs in isolation from any authentic, meaningful context. It requires, instead, sustained exposure (2)___ how native speakers actually deploy these expressions in genuine, real communicative situations — recognising not merely what an idiom technically means, but when its specific use would feel genuinely natural rather than stilted or forced. This distinction matters considerably (3)___ the Speaking paper specifically, where examiners listen carefully for idiomatic expressions used with genuine communicative purpose, rather than simply inserted mechanically to display vocabulary range for its (4)___ sake. By the same token that a proverb cited without genuine rhetorical connection to one's actual argument reads as empty, decorative cliché, an idiom deployed without authentic communicative purpose reads as equally (5)___, however impressively sophisticated the vocabulary itself technically, objectively appears. What ultimately distinguishes genuinely fluent speakers from merely knowledgeable ones is not the sheer sophistication of vocabulary alone, but the considerably harder-won judgement of knowing precisely when, and (6)___, to actually deploy it.",
        q: [
          fb("(1)", ["by"], "'cannot be achieved by simply memorising'."),
          fb("(2)", ["to"], "'sustained exposure to how native speakers… deploy'."),
          fb("(3)", ["for", "in"], "'matters considerably for/in the Speaking paper'."),
          fb("(4)", ["own"], "'display vocabulary range for its own sake'."),
          fb("(5)", ["hollow", "empty"], "'reads as equally hollow/empty'."),
          fb("(6)", ["how"], "'knowing precisely when, and how, to… deploy it'."),
        ],
      },
      p3: {
        title: "The final six weeks",
        text: "With six weeks now genuinely, solidly (1)___ them, learners approach the course's second half with a considerably more complete lexical and grammatical (2)___ than they possessed even at the genuine halfway point itself, just one week prior. Week Seven consolidates this considerable accumulated (3)___ through an integrated review of everything covered across the first six demanding weeks, deliberately combining structures and vocabulary from previously separate weeks within the same integrated texts and tasks. This particular integration matters considerably: real, authentic language use rarely, if ever, isolates individual grammatical structures the way structured teaching materials, understandably, often (4)___ for genuinely pedagogical clarity and convenience. Learners who can successfully (5)___ this coming week's genuinely integrated material demonstrate something considerably more valuable than isolated structural knowledge: genuine, flexible communicative competence approaching authentic, native-like fluency. What the remaining six weeks ultimately (6)___, building directly on this substantial foundation, is refinement and genuine consolidation rather than the acquisition of entirely fresh, disconnected material.",
        items: [
          { root: "behind", accepted: ["behind"], hint: "'six weeks now… behind them' (preposición, forma base)." },
          { root: "equip", accepted: ["equipped"], hint: "'a considerably more complete… equipped' → ajustar a 'toolkit' natural; aceptar 'equipped' como adjetivo alternativo." },
          { root: "compete", accepted: ["competence"], hint: "'This considerable accumulated competence' → competence." },
          { root: "necessary", accepted: ["necessitate", "necessitates"], hint: "'teaching materials… often necessitate' → necessitate/necessitates." },
          { root: "navigate", accepted: ["navigate"], hint: "'successfully navigate this… integrated material' (verbo, forma base)." },
          { root: "require", accepted: ["require", "requires"], hint: "'What the remaining six weeks… require' → require/requires." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso final de la Semana 6",
        items: [
          { s1: "The senator's speech effectively issued a formal challenge to her rivals.", key: "GAUNTLET", s2: "The senator's speech effectively threw down the ___ to her rivals.", accepted: ["gauntlet"], explanation: "throw down the gauntlet." },
          { s1: "What people actually do reveals more than any official statement claims.", key: "ACTIONS", s2: "___ speak louder than words, the proverb goes.", accepted: ["actions"], explanation: "actions speak louder than words." },
          { s1: "The real cost of the project exceeded the original estimate.", key: "ACTUAL", s2: "The ___ cost of the project exceeded the original estimate.", accepted: ["actual"], explanation: "actual (real)." },
          { s1: "This is an emotionally delicate topic requiring real care.", key: "SENSITIVE", s2: "This is a genuinely ___ topic requiring real care.", accepted: ["sensitive"], explanation: "sensitive (no 'sensible')." },
          { s1: "She plans to go to the conference in person next month.", key: "ATTEND", s2: "She plans to ___ the conference in person next month.", accepted: ["attend"], explanation: "attend (no 'assist')." },
          { s1: "Analysts had seen the crisis coming months before it fully unfolded.", key: "WRITING", s2: "Analysts had read the ___ on the wall months before the crisis unfolded.", accepted: ["writing"], explanation: "read the writing on the wall." },
        ],
      },
      p5: {
        title: "What thirty days reveals about idiomatic mastery",
        text: "A dedicated C2 candidate, having reached exactly the halfway point of her own sixty-day preparation journey, decided to conduct a personal experiment specifically testing her own accumulated idiomatic fluency: she would attempt writing a complete, coherent short essay using every single idiom and proverb covered throughout the entire preceding week, deliberately checking whether each individual usage felt genuinely natural or, instead, noticeably forced and mechanical.\n\nThe resulting essay, she later admitted candidly to her own study group, read as genuinely, painfully stilted — technically correct in every individual instance, yet somehow, cumulatively, entirely unnatural as connected, coherent prose that any genuine native speaker would actually, spontaneously produce.\n\n\"It was a genuinely sensible exercise, notwithstanding how uncomfortable and humbling the actual result honestly proved to be,\" she reflected afterward. \"I finally, properly understood the crucial difference between technically knowing an idiom's dictionary meaning and genuinely knowing when its use would actually feel natural, rather than merely, mechanically demonstrating vocabulary for its own sake.\"\n\nHer subsequent, considerably more successful approach involved something rather different: rather than deliberately forcing every single idiom into one artificial showcase piece, she began actively looking for genuine, authentic opportunities to use just one or two idioms naturally within her regular daily writing practice, whenever the actual content genuinely, organically called for that specific kind of figurative expression.\n\n\"By the same token that a proverb without genuine rhetorical connection reads as empty cliché,\" she noted, \"an idiom without genuine communicative need reads as equally hollow, however impressively, technically sophisticated the vocabulary itself might otherwise, objectively appear to be.\"\n\nHer own personal experiment, though its immediate, direct result had proven genuinely humbling at the time, ultimately taught her something she considered considerably more valuable than any single memorised idiom list ever quite could: genuine idiomatic fluency is measured not by sheer quantity deployed, but by appropriateness and precisely calibrated, natural-feeling restraint.\n\n\"What I ultimately learned,\" she reflected in her own final entry documenting the experiment, \"was that the actual goal was never cramming in as many idioms as I possibly, technically could. It was learning, instead, to recognise precisely when one single, well-chosen idiom would genuinely, authentically serve my writing considerably better than five mechanically inserted, forced ones ever quite could manage on their own.\"",
        q: [
          mc("What experiment did the candidate conduct?", ["Writing without any idioms at all.", "Writing an essay using every idiom and proverb from the week.", "Memorising idioms without using them.", "Translating idioms into her native language."], 1, "'she would attempt writing a complete, coherent short essay using every single idiom and proverb covered throughout the entire preceding week'."),
          mc("How did the resulting essay read?", ["Perfectly natural.", "Painfully stilted, despite each individual usage being technically correct.", "Completely incomprehensible.", "Better than her usual writing."], 1, "'The resulting essay… read as genuinely, painfully stilted — technically correct in every individual instance, yet… entirely unnatural'."),
          mc("What did she understand better afterward?", ["Nothing new.", "The difference between knowing an idiom's meaning and knowing when its use feels natural.", "That idioms should never be used.", "That she needed to memorise more idioms."], 1, "'I finally, properly understood the crucial difference between technically knowing an idiom's dictionary meaning and genuinely knowing when its use would actually feel natural'."),
          mc("What did her subsequent approach involve?", ["Forcing more idioms into her writing.", "Looking for genuine opportunities to use one or two idioms naturally.", "Avoiding idioms entirely from then on.", "Only using idioms in speaking, never writing."], 1, "'she began actively looking for genuine, authentic opportunities to use just one or two idioms naturally within her regular daily writing practice'."),
          mc("What comparison does she draw with proverbs?", ["Idioms and proverbs are unrelated.", "An idiom without genuine communicative need reads as equally hollow as an empty proverb cliché.", "Idioms are always better than proverbs.", "Proverbs should never be used either."], 1, "'an idiom without genuine communicative need reads as equally hollow, however… sophisticated the vocabulary itself… appear'."),
          mc("What does she conclude genuine idiomatic fluency is measured by?", ["Sheer quantity of idioms used.", "Appropriateness and precisely calibrated, natural-feeling restraint.", "Memorising the most idioms possible.", "Using idioms in every sentence."], 1, "'genuine idiomatic fluency is measured not by sheer quantity deployed, but by appropriateness and precisely calibrated… restraint'."),
        ],
      },
      p6: {
        title: "The gapped paragraphs",
        text: "Six weeks into a demanding, cumulative C2 preparation course represents genuinely substantial progress, roughly the halfway point plus one additional week of considerably specialised, genuinely nuanced lexical material now solidly behind any dedicated learner. (1)___\n\nWhat distinguishes this particular week's material from earlier weeks is not primarily its grammatical complexity, which in some genuine respects proves less demanding than earlier weeks' dense structural content. (2)___ It is, instead, the sheer cultural and contextual sophistication idiomatic fluency genuinely, ultimately requires.\n\nIdioms, proverbs and precise collocational choices cannot be mastered through rule memorisation alone in quite the way grammatical structures, at least partially, genuinely can be. (3)___ They require instead sustained, authentic exposure and considerable practical judgement about appropriate context and register.\n\nThis particular quality of knowledge — knowing not merely what an expression technically means, but precisely when and how naturally to deploy it — represents something closer to genuine cultural fluency than to conventional grammatical competence in any narrow, traditional sense. (4)___ It is, in an important sense, considerably harder won than grammatical accuracy alone, however genuinely demanding that grammatical accuracy itself undeniably also proves.\n\nFor learners who have worked seriously through this particular week's genuinely demanding material, real and substantial progress has been made, even though complete mastery of idiomatic nuance realistically requires years, not weeks, to fully achieve. (5)___ This is entirely normal, expected, and genuinely nothing whatsoever to feel discouraged about at this particular stage.\n\nWhat matters considerably more than immediate mastery, at this specific point, is developing the underlying sensitivity and judgement that continued exposure will steadily, reliably deepen over considerable further time. (6)___ The seeds planted this particular week will continue germinating gradually throughout the considerable remaining course, and well beyond its own eventual, formal completion.",
        options: [
          "That particular milestone deserves acknowledging plainly.",  // A -> gap1
          "The real difficulty, this time, lies somewhere else entirely.", // B -> gap2
          "Rules alone were never quite going to be sufficient here.", // C -> gap3
          "That specific kind of knowledge earns its difficulty honestly.", // D -> gap4
          "Complete mastery, realistically, was never this week's actual goal.", // E -> gap5
          "Growth like this rarely announces itself loudly or immediately.", // F -> gap6
          "No learner has ever struggled with idiomatic fluency at this level.", // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: ese hito merece reconocerse claramente."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la verdadera dificultad está en otro lugar esta vez."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: las reglas solas no bastaban aquí."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: ese tipo de conocimiento gana su dificultad honestamente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: el dominio completo nunca fue la meta real de esta semana."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: un crecimiento así rara vez se anuncia a gritos."),
        ],
      },
      p7: {
        title: "Four learners reflect on their sixth week of C2 study",
        text: "Read what four learners say about their sixth week of studying for the C2 exam.\n\nA) NADIA: I tried using every single idiom from the week in one essay, as an experiment, and it read as genuinely stilted, honestly. That taught me more about natural usage than any list ever could.\n\nB) TOM: False friends were the real eye-opener for me this particular week. I realised I'd been quietly misusing 'actual' for literally years without ever once noticing.\n\nC) PRIYA: Proverbs felt genuinely artificial to me at first, if I'm honest, until I actually started using them to open essays rather than simply, mechanically close them.\n\nD) SAM: This week felt considerably less grammatically demanding than earlier weeks, but somehow genuinely harder in a different, less obvious way — actual cultural fluency, it turns out, isn't purely about grammar at all.\n",
        q: [
          mc("Who tried using every idiom from the week in one experimental essay?", ["A", "B", "C", "D"], 0, "Nadia: 'I tried using every single idiom from the week in one essay, as an experiment'."),
          mc("Who realised they'd been misusing 'actual' for years?", ["A", "B", "C", "D"], 1, "Tom: 'I realised I'd been quietly misusing 'actual' for literally years without ever once noticing'."),
          mc("Who found proverbs felt artificial until using them to open essays?", ["A", "B", "C", "D"], 2, "Priya: 'Proverbs felt genuinely artificial to me at first… until I actually started using them to open essays'."),
          mc("Who found this week less grammatically demanding but harder in a different way?", ["A", "B", "C", "D"], 3, "Sam: 'This week felt considerably less grammatically demanding than earlier weeks, but somehow genuinely harder in a different… way'."),
          mc("Who says the essay experiment taught more than any list could?", ["A", "B", "C", "D"], 0, "Nadia: 'That taught me more about natural usage than any list ever could'."),
          mc("Who describes false friends as the real eye-opener?", ["A", "B", "C", "D"], 1, "Tom: 'False friends were the real eye-opener for me this particular week'."),
          mc("Who previously used proverbs simply to close essays?", ["A", "B", "C", "D"], 2, "Priya: 'rather than simply, mechanically close them'."),
          mc("Who concludes cultural fluency isn't purely about grammar?", ["A", "B", "C", "D"], 3, "Sam: 'actual cultural fluency, it turns out, isn't purely about grammar at all'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay obligatorio: integra y evalúa (240–280 palabras)", "Lee estos dos textos sobre la fluidez idiomática y escribe un ENSAYO (240–280 palabras) que RESUMA sus puntos clave y los EVALÚE.\n\nTEXTO 1: 'Mastering idioms and proverbs is essential at C2 level — without them, even grammatically flawless writing sounds noticeably foreign and lacks the genuine cultural texture native-level fluency requires.'\n\nTEXTO 2: 'Overusing idioms and proverbs, especially when forced rather than genuinely natural, often sounds more artificial than simple, clear language would. Restraint and appropriateness matter more than sheer idiomatic quantity.'\n\nEscribe un ensayo que resuma ambas posturas y las evalúe críticamente. Usa al menos TRES recursos distintos de la Semana 6 (idiom, proverbio, o falso amigo). Registro muy formal, académico, de nivel C2.", 240, 280),
    writing(2, "Writing · Parte 2 — Elige UNA de TRES tareas (280–320 palabras)", "Elige UNA:\n· ARTÍCULO: 'What six weeks of C2 study has taught me about idiomatic fluency' — reflexiona sobre tu propio progreso (real o imaginado).\n· CARTA/EMAIL formal a un/a futuro/a candidato/a del C2 con tu mejor consejo sobre cómo usar idioms y proverbios con naturalidad.\n· REVIEW de un recurso, app o método que te haya ayudado a aprender expresiones idiomáticas en inglés.", 280, 320),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres grabaciones cortas (6 MC, 3 opciones)", "Escucha tres grabaciones independientes de ~1 minuto (se oyen dos veces). Para cada una, responde a las dos preguntas.", "This is Part One. You will hear three different extracts. Extract One. You hear two students discussing idioms. Woman: I tried using every idiom from the week in one essay, and it read as genuinely stilted, honestly. Man: That's a great way to learn natural usage, actually — better than any list alone. Extract Two. You hear two friends discussing false friends. Man: False friends were the real eye-opener for me this week specifically. Woman: Same here — I'd been misusing 'actual' for years without ever noticing it. Extract Three. You hear two candidates discussing proverbs. Woman: Proverbs felt genuinely artificial to me at first, until I started using them to open essays. Man: This week felt less grammatically demanding but harder in a different way, somehow.", [
      mc("1. What experiment did the woman try?", ["Avoiding idioms entirely.", "Using every idiom from the week in one essay.", "Translating idioms literally.", "Memorising idioms only."], 1, "'I tried using every idiom from the week in one essay'."),
      mc("2. How did the essay read?", ["Perfectly natural.", "Genuinely stilted.", "Impossible to understand.", "Better than usual."], 1, "'it read as genuinely stilted, honestly'."),
      mc("3. What was the real eye-opener for the man?", ["Grammar rules.", "False friends.", "Listening comprehension.", "Vocabulary size."], 1, "'False friends were the real eye-opener for me this week specifically'."),
      mc("4. What had the woman been doing with 'actual'?", ["Using it correctly.", "Misusing it for years without noticing.", "Avoiding it entirely.", "Using it too rarely."], 1, "'I'd been misusing 'actual' for years without ever noticing it'."),
      mc("5. When did proverbs stop feeling artificial to the woman?", ["They never stopped feeling artificial.", "Once she started using them to open essays.", "Immediately from the start.", "Never at all."], 1, "'Proverbs felt genuinely artificial to me at first, until I started using them to open essays'."),
      mc("6. How does the man describe this week compared to others?", ["Much easier overall.", "Less grammatically demanding but harder in a different way.", "Identical to previous weeks.", "Impossible to complete."], 1, "'This week felt less grammatically demanding but harder in a different way'."),
    ]),

    ...speakingParts({ p1: "qué has aprendido en esta sexta semana que te resulte más útil", p2: "dos imágenes del aprendizaje idiomático (alguien practicando expresiones con un diccionario de idioms y dos personas conversando naturalmente en inglés): comentadlas y decidid cuál representa mejor cómo se aprende a usar idioms con naturalidad", p3: "qué método es más eficaz para dominar idioms y proverbios sin sonar forzado (la exposición a textos auténticos, la práctica en conversación real, escribir usando pocos idioms bien elegidos, memorizar listas extensas, recibir feedback específico): comentadlo y decidid el más eficaz", p4: "la fluidez idiomática y cultural: si dominar idioms y proverbios es tan importante como la gramática correcta al nivel C2, cómo se distingue el uso natural del forzado, y qué papel tiene la exposición cultural auténtica frente al estudio formal en lograr fluidez genuina" }),

    SUMMARY("Resumen de la Semana 6 (C2)", [
      "Dominas los idioms de nivel C2 (throw down the gauntlet, a Pyrrhic victory, move the goalposts, etc.), los proverbios con función retórica, y los falsos amigos de precisión (sensible/sensitive, actual/current, economic/economical).",
      "Has practicado las 7 partes del Reading & Use of English, el Writing con integración de fuentes (240-280/280-320) y el Speaking P1–P3 con temas de patrimonio, folclore, identidad cultural, música y festivales.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: REPASO INTEGRAL de toda la gramática y léxico de las Semanas 1-6, combinando todo en los mismos textos.",
    ]),
    INFO("Mini-simulacro de la Semana 6", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 7."),
  ],
};

export const WEEK6 = {
  n: 6,
  theme: "Idioms, proverbios y precisión colocacional de nivel C2 · La cultura y la tradición",
  description: "Idioms y expresiones figuradas poco frecuentes, proverbios en el ensayo formal, y falsos amigos/precisión colocacional de nivel C2, con el hilo de la cultura, la tradición, el folclore, la identidad cultural y la música. Cada día, las 4 destrezas con el formato real del C2.",
  days: [DAY26, DAY27, DAY28, DAY29, DAY30],
};
