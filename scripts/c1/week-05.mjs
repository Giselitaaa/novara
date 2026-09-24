/**
 * C1 Advanced · Semana 5 — "Los conectores del discurso y la cohesión avanzada · Las ciudades y la vida urbana".
 * Gramática: conectores de contraste/concesión matizados (whereas/while/albeit/
 * notwithstanding), de causa-consecuencia formales (given that/on account of/
 * as a result of/thereby), de adición avanzada (moreover/furthermore/not to
 * mention/let alone), y recursos de cohesión (elipsis, sustitución, referencia).
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

// ───────────────────────── DÍA 21 ─────────────────────────
const DAY21 = {
  title: "Día 21 — Contraste y concesión matizados · Las ciudades y el urbanismo",
  description: "Whereas/while (contraste equilibrado); albeit/notwithstanding/despite the fact that (concesión formal); even so/nevertheless/that said (contraste tras un punto). Vocabulario de urbanismo. Las 4 destrezas (formato C1); Listening P1.",
  pedagogy: {
    objective: "Matizar el contraste y la concesión con conectores de registro formal/académico.",
    summary: "Contraste y concesión avanzados; ciudades y urbanismo; Use of English P1–P8, Writing, Listening P1, Speaking P1–P4.",
    commonMistakes: ["'despite' + cláusula completa (necesita sustantivo/-ing, no 'despite it is').", "'albeit' mal posicionado (va con adjetivo/frase corta, no una oración completa).", "confundir whereas/while (contraste simultáneo) con however (contraste entre frases)."],
    reviewPrompts: ["¿Cómo usarías 'albeit' para matizar 'a good, if imperfect, solution'?", "¿Qué diferencia hay entre 'despite' y 'despite the fact that'?"],
  },
  items: [
    TEXT("👋 Semana 5 del C1. Hoy el CONTRASTE y la CONCESIÓN matizados: los conectores que dan textura y precisión a la argumentación formal. Vocabulario: las CIUDADES y el URBANISMO."),
    GRAMMAR("Contraste y concesión matizados", `WHEREAS / WHILE (contraste EQUILIBRADO entre dos ideas, en la misma frase): Whereas the city centre has thrived, the suburbs have stagnated. While some praise the plan, others condemn it.
ALBEIT (= aunque/aún siendo, MUY compacto, con adjetivo/frase corta, registro formal): The plan is promising, albeit expensive. A modest, albeit meaningful, improvement.
NOTWITHSTANDING (formal, = despite; puede ir ANTES o DESPUÉS del sustantivo): Notwithstanding the criticism, the project proceeded. The criticism, notwithstanding, did not stop the project.
DESPITE / IN SPITE OF + sustantivo/-ing (NUNCA + cláusula completa): Despite the opposition, the plan went ahead. ❌ Despite it was expensive.
DESPITE THE FACT THAT / IN SPITE OF THE FACT THAT + cláusula completa: Despite the fact that it was expensive, the plan went ahead.
EVEN SO / NEVERTHELESS / NONETHELESS / THAT SAID (contraste TRAS un punto ya hecho, inicio de frase nueva): The plan has flaws. Nevertheless, it addresses a real need. It's costly. That said, the long-term savings are substantial.
⚠️ Whereas/while van DENTRO de una frase (conectan dos cláusulas); however/nevertheless/that said empiezan una frase NUEVA (con coma).`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ Despite it was raining → ✅ Despite the rain / Despite the fact that it was raining.\n· ❌ Albeit it is expensive → ✅ Albeit expensive (sin sujeto+verbo, más compacto).\n· ❌ Whereas, some praise it → whereas conecta DENTRO de la frase, no empieza tras punto: However, some praise it.\n· 'Notwithstanding' es MUY formal — resérvalo para Writing/Reading académico, no para el habla informal."),
    grammarEx("Use of English — Contraste y concesión avanzados", "Elige o completa con el conector correcto.", [
      mc("___ the city centre has thrived, the suburbs have stagnated.", ["Whereas", "Despite", "Nevertheless"], 0, "whereas (contraste equilibrado, dentro de la frase)."),
      mc("The plan is promising, ___ expensive.", ["albeit", "whereas", "notwithstanding"], 0, "albeit + adjetivo (compacto)."),
      mc("___ the criticism, the project proceeded as planned.", ["Notwithstanding", "Whereas", "That said"], 0, "notwithstanding + sustantivo."),
      mc("___ the fact that it was costly, the plan went ahead.", ["Despite", "Despite the fact that", "Albeit"], 1, "cláusula completa → despite the fact that."),
      mc("The plan has flaws. ___, it addresses a real need.", ["Whereas", "Nevertheless", "While"], 1, "contraste tras un punto → Nevertheless."),
      fb("It's a modest, ___ meaningful, improvement to the neighbourhood.", ["albeit"], "albeit + adjetivo."),
      mc("It's costly. ___, the long-term savings are substantial.", ["That said", "Whereas", "Despite"], 0, "contraste tras un punto → That said."),
    ]),
    GRAMMAR("Vocabulario del día — Las ciudades y el urbanismo (C1)", "Léxico avanzado de urbanismo."),
    deck("C1 S5D21 — Ciudades y urbanismo", [
      ["urban sprawl", "expansión urbana descontrolada", "Urban sprawl consumes farmland.", "sustantivo", "ˈɜːbən sprɔːl"],
      ["gentrification", "gentrificación", "Gentrification is pricing out locals.", "sustantivo", "ˌdʒentrɪfɪˈkeɪʃn"],
      ["infrastructure", "infraestructura", "The city needs better infrastructure.", "sustantivo", "ˈɪnfrəstrʌktʃə"],
      ["congestion", "congestión (de tráfico)", "Traffic congestion worsens yearly.", "sustantivo", "kənˈdʒestʃən"],
      ["zoning", "zonificación", "Zoning laws restrict development.", "sustantivo", "ˈzəʊnɪŋ"],
      ["revitalise", "revitalizar", "The scheme aims to revitalise downtown.", "verbo", "ˌriːˈvaɪtəlaɪz"],
      ["dilapidated", "deteriorado/a (edificio)", "Many buildings are dilapidated.", "adjetivo", "dɪˈlæpɪdeɪtɪd"],
      ["walkable", "transitable a pie", "A walkable city reduces car use.", "adjetivo", "ˈwɔːkəbl"],
      ["displacement", "desplazamiento (de residentes)", "Gentrification causes displacement.", "sustantivo", "dɪsˈpleɪsmənt"],
      ["cityscape", "paisaje urbano", "Skyscrapers dominate the cityscape.", "sustantivo", "ˈsɪtiskeɪp"],
    ]),
    vocabEx("Vocabulario — Las ciudades y el urbanismo", "Elige la opción correcta.", [
      mc("Uncontrolled outward expansion of a city is urban ___.", ["sprawl", "zoning", "infrastructure"], 0, "sprawl."),
      mc("The process by which a poor area becomes wealthier, pricing out locals, is ___.", ["gentrification", "revitalisation", "congestion"], 0, "gentrification."),
      mc("Rules dividing a city into areas for different uses are ___ laws.", ["zoning", "sprawl", "infrastructure"], 0, "zoning."),
      mc("To bring new life and energy to a declining area is to ___ it.", ["revitalise", "displace", "congest"], 0, "revitalise."),
      mc("In poor condition, falling apart, is ___.", ["dilapidated", "walkable", "revitalised"], 0, "dilapidated."),
      mc("Easy and pleasant to get around on foot is being ___.", ["walkable", "dilapidated", "congested"], 0, "walkable."),
    ]),

    ...uoe({
      p1: {
        title: "The fifteen-minute city",
        text: "A growing number of urban planners have begun championing a genuinely ambitious vision known as the 'fifteen-minute city' — a model in which residents can reach virtually everything they need for daily life, from schools to shops to green space, within a short walk or cycle (1)___ their own front door. Whereas the twentieth-century city was largely designed (2)___ the car, with vast distances between residential areas and everyday amenities, this newer vision seeks to compress urban life back into something considerably more human in (3)___. Proponents argue the model would dramatically reduce car dependency, cut emissions, and foster the kind of genuine neighbourhood community that sprawling, car-centric suburbs have (4)___ eroded over recent decades. Critics, notwithstanding these genuine attractions, raise several serious concerns. Some worry the model could, if implemented carelessly, effectively trap poorer residents in under-resourced neighbourhoods while wealthier areas enjoy considerably better local amenities. Others question whether retrofitting existing car-centric cities is even remotely (5)___, given the sheer scale and cost of the infrastructure changes genuinely required. Notwithstanding these legitimate objections, several major cities have already begun piloting elements of the approach, redesigning streets, incentivising local businesses, and investing heavily in (6)___ infrastructure. Whether the fifteen-minute city ultimately proves a genuinely transformative model or merely an appealing but largely unrealised planning slogan remains, for (7)___, an open question — one that will likely be settled, one way or the other, by the accumulating evidence from these early, closely watched (8)___.",
        q: [
          mc("(1)", ["of", "from", "to", "at"], 1, "'a short walk… from their own front door'."),
          mc("(2)", ["around", "for", "with", "by"], 0, "'designed around the car'."),
          mc("(3)", ["scale", "size", "measure", "extent"], 0, "'human in scale'."),
          mc("(4)", ["steadily", "gradually", "slowly", "progressively"], 0, "'steadily eroded'."),
          mc("(5)", ["feasible", "possible", "achievable", "viable"], 0, "'even remotely feasible'."),
          mc("(6)", ["cycling", "biking", "pedal", "bike"], 0, "'cycling infrastructure'."),
          mc("(7)", ["now", "the moment", "the time being", "the present"], 2, "'for the time being'."),
          mc("(8)", ["experiments", "trials", "pilots", "projects"], 2, "'these early… pilots'."),
        ],
      },
      p2: {
        title: "Who gets to shape a city",
        text: "Decisions about (1)___ a city develops — which neighbourhoods receive investment, which are quietly left to decay, which historic buildings are preserved and which demolished — are rarely, in practice, made through anything resembling genuine, broad democratic consultation. Whereas planning departments typically hold formal public hearings before major projects proceed, attendance at (2)___ meetings tends to skew heavily towards homeowners with the time, confidence and resources to attend, while renters, younger residents and the genuinely poor remain, all too often, effectively unheard. This creates a troubling democratic deficit at (3)___ very heart of how our shared urban spaces get shaped. Those (4)___ voices dominate public consultations are frequently not representative of the wider community that will ultimately live with the consequences of whatever gets decided. Some cities have begun experimenting (5)___ alternative consultation methods — citizen assemblies selected by lottery, participatory budgeting schemes, digital platforms designed specifically to reach demographics that traditional evening meetings systematically exclude. Whether these genuinely broaden meaningful participation or simply create a comforting illusion of inclusion (6)___ the same familiar interests continue quietly dominating remains, in truth, an open empirical question. What seems clear, however it is ultimately resolved, is that the gap between formal democratic process and genuine, representative participation in shaping our shared urban environments deserves (7)___ scrutiny than it typically, and rather too complacently, receives from most city governments.",
        q: [
          fb("(1)", ["how"], "'Decisions about how a city develops'."),
          fb("(2)", ["such", "these", "public"], "'attendance at such/these meetings'."),
          fb("(3)", ["the"], "'at the very heart'."),
          fb("(4)", ["whose"], "'Those whose voices dominate'."),
          fb("(5)", ["with"], "'experimenting with alternative methods'."),
          fb("(6)", ["while", "whereas"], "'while the same familiar interests continue'."),
          fb("(7)", ["far more", "considerably more"], "'deserves far more scrutiny'."),
        ],
      },
      p3: {
        title: "The city that forgot how to grow",
        text: "Few urban problems are as persistently (1)___ as the shortage of affordable housing that now afflicts a great many of the world's most economically successful cities. The paradox is a genuinely striking one: precisely the cities that generate the most jobs, the greatest economic (2)___, and the most cultural vibrancy are frequently the very same cities where ordinary working people can least afford to actually live. Whereas economic theory might predict that thriving cities would simply build more housing to accommodate rising demand, in practice, entrenched (3)___ interests — existing homeowners anxious about property values, restrictive zoning regulations, and a chronic, deeply structural shortage of skilled construction labour — frequently combine to prevent housing supply from expanding anywhere near fast enough to meet genuine demand. The resulting (4)___ between supply and demand drives prices relentlessly upward, gradually pushing out precisely the teachers, nurses, and service workers whose labour these cities genuinely, structurally depend upon to function at all. Some cities have begun experimenting with genuinely (5)___ policy responses: relaxing restrictive zoning to permit denser housing, taxing vacant properties more aggressively, and mandating that new developments include a meaningful proportion of (6)___ housing. Notwithstanding these efforts, progress remains frustratingly slow in most places, and the underlying, deeply structural tension between economic (7)___ and housing affordability shows little genuine sign of resolving itself without considerably more sustained, deliberate and politically courageous policy intervention than most cities have, thus far, proved genuinely willing to (8)___.",
        items: [
          { root: "solve", accepted: ["unsolved", "unresolved"], hint: "'as persistently unresolved' → unresolved." },
          { root: "dynamic", accepted: ["dynamism"], hint: "'the greatest economic dynamism' → dynamism." },
          { root: "vest", accepted: ["vested"], hint: "'entrenched vested interests' → vested." },
          { root: "match", accepted: ["mismatch"], hint: "'the resulting mismatch' → mismatch." },
          { root: "innovate", accepted: ["innovative"], hint: "'genuinely innovative policy responses' → innovative." },
          { root: "afford", accepted: ["affordable"], hint: "'a proportion of affordable housing' → affordable." },
          { root: "succeed", accepted: ["success"], hint: "'economic success' (sustantivo)." },
          { root: "mount", accepted: ["mount"], hint: "'proved genuinely willing to mount' (verbo)." },
        ],
      },
      p4: {
        title: "Transformaciones — contraste y concesión avanzados",
        items: [
          { s1: "The city centre thrived, but the suburbs stagnated.", key: "WHEREAS", s2: "___ the city centre thrived, the suburbs stagnated.", accepted: ["Whereas"], explanation: "whereas (contraste equilibrado)." },
          { s1: "The plan is promising, but expensive.", key: "ALBEIT", s2: "The plan is promising, ___ expensive.", accepted: ["albeit"], explanation: "albeit + adjetivo." },
          { s1: "There was criticism, but the project proceeded.", key: "NOTWITHSTANDING", s2: "___ the criticism, the project proceeded.", accepted: ["Notwithstanding"], explanation: "notwithstanding + sustantivo." },
          { s1: "It was expensive, but the plan went ahead.", key: "FACT", s2: "Despite the ___ that it was expensive, the plan went ahead.", accepted: ["fact"], explanation: "despite the fact that + cláusula." },
          { s1: "The plan has flaws. But it addresses a real need.", key: "NEVERTHELESS", s2: "The plan has flaws. ___, it addresses a real need.", accepted: ["Nevertheless"], explanation: "nevertheless (tras un punto)." },
          { s1: "It's costly. But the long-term savings are substantial.", key: "SAID", s2: "It's costly. That ___, the long-term savings are substantial.", accepted: ["said"], explanation: "that said." },
        ],
      },
      p5: {
        title: "The park that saved a neighbourhood",
        text: "For nearly three decades, an abandoned elevated railway line snaked its way through one of a major city's most economically depressed neighbourhoods, a rusting, weed-choked scar of infrastructure that most residents had long since stopped even noticing, so thoroughly had it faded into the ordinary, unremarkable texture of urban decay around it. City planners, over the years, had repeatedly proposed demolishing it entirely, viewing it as little more than an eyesore and a persistent liability, whereas a small, determined group of local residents saw something considerably more promising hidden within its rusting steel and accumulated decades of wild, self-seeded vegetation.\n\nWhat this small group proposed, initially to widespread scepticism and even open mockery from city officials, was something genuinely unconventional: rather than demolishing the abandoned structure, why not transform it into an elevated public park, preserving its distinctive industrial character while opening it to public use for the very first time in its long, largely forgotten history? The idea, albeit compelling to those who first championed it, faced years of determined bureaucratic resistance, funding shortfalls, and open scepticism from city officials who considered the whole scheme impractical, needlessly expensive, and frankly rather eccentric.\n\nWhat eventually changed the calculus, after years of patient, persistent advocacy, was a combination of sustained grassroots organising and a shift in how city officials had gradually come to think about urban green space more generally. Notwithstanding the project's still-considerable costs, officials eventually recognised that transforming a genuine liability into a genuine civic asset could deliver returns considerably beyond the park's own immediate physical footprint, potentially revitalising an entire surrounding neighbourhood in the process.\n\nWhen the park finally opened, its early success exceeded even its most optimistic original advocates' considerable expectations. Visitors came from across the city and, before long, from around the world specifically to walk its elevated, carefully landscaped pathways. Property values in the immediately surrounding neighbourhood rose sharply, new businesses opened rapidly to serve the sudden, substantial influx of visitors, and a once genuinely depressed area became, almost overnight by urban-planning standards, one of the city's most sought-after and fashionable places to live.\n\nHerein, however, lay the park's most genuinely difficult and much-debated legacy. The very success that transformed the neighbourhood also, inevitably and predictably, drove rents and property values up so sharply that many of the original, long-standing residents — the very people whose patient advocacy had first saved the abandoned railway line and made the whole project possible — found themselves gradually, and then not so gradually, priced out of the neighbourhood their own sustained efforts had done so much to genuinely transform and revitalise. Whereas the park itself remains, by any reasonable measure, a genuine urban planning triumph, its story has since become a frequently cited, cautionary case study in what urban researchers now call 'green gentrification' — the well-documented process by which environmental improvements, however genuinely well-intentioned and beneficial in themselves, can inadvertently displace precisely the communities that campaigned hardest and longest to bring them about in the first place.",
        q: [
          mc("What did city planners initially propose for the abandoned railway line?", ["Preserving it.", "Demolishing it entirely.", "Ignoring it forever.", "Selling it privately."], 1, "'City planners… had repeatedly proposed demolishing it entirely'."),
          mc("What did the local residents propose instead?", ["A new road.", "Transforming it into an elevated public park.", "A shopping centre.", "Housing development."], 1, "'transform it into an elevated public park'."),
          mc("How did city officials initially react to the idea?", ["Enthusiastically.", "With scepticism, considering it impractical and eccentric.", "They funded it immediately.", "They ignored it."], 1, "'open scepticism from city officials who considered the whole scheme impractical, needlessly expensive'."),
          mc("What happened to property values after the park opened?", ["They fell.", "They rose sharply.", "They stayed the same.", "Nobody measured them."], 1, "'Property values in the immediately surrounding neighbourhood rose sharply'."),
          mc("What happened to many original residents eventually?", ["They benefited most.", "They were priced out of the neighbourhood.", "Nothing changed for them.", "They received compensation."], 1, "'found themselves gradually… priced out of the neighbourhood'."),
          mc("What does the park's story illustrate, according to the writer?", ["Parks always help everyone.", "'Green gentrification' — improvements that can displace the communities that campaigned for them.", "Demolition is always better.", "City officials are always wrong."], 1, "'a frequently cited, cautionary case study in what urban researchers now call \"green gentrification\"'."),
        ],
      },
      p6: {
        title: "Should cities restrict cars from their centres?",
        intro: "Cuatro personas debaten si las ciudades deberían restringir los coches en sus centros.",
        texts: {
          A: "NADIA: I fully support aggressive car restrictions in city centres. Whereas cars once seemed like unavoidable symbols of progress, we now know their true costs — pollution, congestion, dangerous streets, wasted space given over to parking instead of housing or genuine green space. Cities that have restricted cars report cleaner air, more foot traffic for local businesses, and measurably happier residents. The evidence, at this point, seems overwhelming.",
          B: "TOM: I broadly share those goals, but I'd urge real caution about implementation. Restrictions that aren't carefully, thoughtfully designed can hit lower-income residents hardest — those who live further out, who can't easily afford to live in newly car-free, increasingly expensive central areas, and who depend genuinely on cars for work or caring responsibilities that public transport simply doesn't yet adequately serve.",
          C: "PRIYA: What I keep coming back to is that this debate often ignores geography. Dense, historically compact European cities can restrict cars relatively easily because they were largely built, long ago, before mass car ownership. Sprawling cities designed explicitly around highways face a considerably harder, more expensive transition that requires decades of sustained infrastructure investment, not simply a sudden policy announcement.",
          D: "SAM: My honest concern is political sustainability over the longer term. Aggressive restrictions imposed too quickly, without adequate preparation, tend to provoke genuine backlash and frequently get reversed at the next election. I'd favour a gradual, carefully sequenced approach — improve public transport meaningfully first, then restrict cars — over dramatic, headline-grabbing bans that risk collapsing under sustained political pressure.",
        },
        q: [
          mc("Who fully supports aggressive car restrictions, citing overwhelming evidence?", ["A", "B", "C", "D"], 0, "Nadia: 'I fully support aggressive car restrictions… The evidence… seems overwhelming'."),
          mc("Whose view most directly QUALIFIES Nadia's, warning about impact on lower-income residents?", ["A", "B", "C", "D"], 1, "Tom: 'Restrictions that aren't carefully… designed can hit lower-income residents hardest'."),
          mc("Who emphasises that geography and city design determine feasibility?", ["A", "B", "C", "D"], 2, "Priya: 'this debate often ignores geography'."),
          mc("Who focuses on political sustainability and gradual sequencing?", ["A", "B", "C", "D"], 3, "Sam: 'I'd favour a gradual, carefully sequenced approach'."),
        ],
      },
      p7: {
        title: "The street that used to be for people",
        text: "For most of human history, the street was, first and foremost, a shared public space — a place for markets, conversation, children's play, and the ordinary daily business of community life. (1)___\n\nThe arrival of the mass-produced automobile, over the course of the twentieth century, changed this ancient arrangement more thoroughly, and more quickly, than perhaps any technology before it. (2)___ Streets that had served communities for centuries were rapidly, and often quite ruthlessly, reengineered primarily around the movement and storage of cars.\n\nThis transformation happened with remarkably little genuine public debate at the time. (3)___ Pedestrians, once the street's obvious and unquestioned primary occupants, gradually became an afterthought, confined to narrow strips at the very edges of what had once been shared, communal space.\n\nOnly in recent decades has this arrangement begun to be seriously, systematically questioned. (4)___ Urban planners and public health researchers alike have begun documenting the very real human costs of car-centric design: isolation, physical inactivity, and the steady, largely invisible erosion of casual, everyday community interaction.\n\nSome cities have begun deliberately reclaiming street space for people once again. (5)___ Wider pavements, protected cycle lanes, and pedestrian-only zones are slowly, incrementally returning some genuine ground to those who had, for the better part of a century, been quietly pushed to the margins.\n\nWhether this reclamation ultimately proves a lasting, durable shift or merely a temporary, fashionable pendulum swing remains genuinely uncertain. (6)___ What seems clear, whatever the eventual outcome, is that the street's original, ancient purpose has not been entirely, permanently forgotten.",
        options: [
          "That basic function persisted for thousands of years.",           // A -> gap 1
          "Within a few short decades, priorities shifted dramatically.",    // B -> gap 2
          "Few residents, it seems, were seriously consulted at all.",      // C -> gap 3
          "The evidence, once gathered, proved genuinely hard to ignore.",   // D -> gap 4
          "Slowly, in places, the old balance is being restored.",          // E -> gap 5
          "Car ownership rates continue falling in every major city.",       // F -> gap 6
          "Streets have never once served any purpose beyond traffic.",      // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: esa función básica persistió milenios."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: las prioridades cambiaron en décadas."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: pocos residentes fueron consultados."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: la evidencia fue difícil de ignorar."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: poco a poco se restaura el equilibrio."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la incertidumbre persiste."),
        ],
      },
      p8: {
        title: "Four people discuss how their city has changed",
        text: "Read what four people say about how their own city has changed over the years.\n\nA) NADIA: I've watched my old neighbourhood transform almost beyond recognition over fifteen years. Whereas it used to be genuinely affordable and a bit rough around the edges, it's now full of expensive cafés I honestly can't afford myself. I'm glad the crime rate dropped, that said, and I understand why change happened, even if I feel oddly like a stranger in my own childhood streets now.\n\nB) TOM: My city invested heavily in public transport a decade ago, and the difference has been genuinely dramatic. I sold my car three years ago, albeit reluctantly at first, and I haven't once regretted it. Whereas I used to spend an hour commuting each way by car, I now read a book on the train instead. It's completely transformed my daily quality of life.\n\nC) PRIYA: Where I live, a controversial new park was built over what used to be an unused, dilapidated industrial site. Notwithstanding the construction disruption, which genuinely was significant for a couple of years, it's become the actual heart of our community now. My kids have grown up there, and I can't honestly imagine the neighbourhood without it anymore.\n\nD) SAM: My city has struggled badly with housing costs. Whereas my parents bought their modest first home on an average local salary, that's simply unthinkable for people my age now, even with two full incomes combined. Notwithstanding all the political promises about tackling this issue, very little has actually, concretely changed in practice.\n",
        q: [
          mc("Who has watched their neighbourhood become unaffordable to them?", ["A", "B", "C", "D"], 0, "Nadia: 'it's now full of expensive cafés I honestly can't afford myself'."),
          mc("Who sold their car and hasn't regretted it?", ["A", "B", "C", "D"], 1, "Tom: 'I sold my car three years ago… I haven't once regretted it'."),
          mc("Who lives near a park built on a former industrial site?", ["A", "B", "C", "D"], 2, "Priya: 'a controversial new park was built over what used to be an unused, dilapidated industrial site'."),
          mc("Who says housing is now unthinkable for people their age?", ["A", "B", "C", "D"], 3, "Sam: 'that's simply unthinkable for people my age now'."),
          mc("Who feels like a stranger in their own childhood streets?", ["A", "B", "C", "D"], 0, "Nadia: 'I feel oddly like a stranger in my own childhood streets now'."),
          mc("Who now reads a book on the train instead of commuting by car?", ["A", "B", "C", "D"], 1, "Tom: 'I now read a book on the train instead'."),
          mc("Who can't imagine their neighbourhood without a particular park now?", ["A", "B", "C", "D"], 2, "Priya: 'I can't honestly imagine the neighbourhood without it anymore'."),
          mc("Who says political promises haven't led to concrete change?", ["A", "B", "C", "D"], 3, "Sam: 'very little has actually, concretely changed in practice'."),
          mc("Who is glad crime dropped despite mixed feelings about change?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm glad the crime rate dropped, that said'."),
          mc("Whose city invested heavily in public transport a decade ago?", ["A", "B", "C", "D"], 1, "Tom: 'My city invested heavily in public transport a decade ago'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre las ciudades se plantearon dos ideas:\n· cities should restrict cars to prioritise pedestrians and cyclists (deberían restringir los coches)\n· restricting cars unfairly harms people who depend on them (restringirlos perjudica a quienes dependen de ellos)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS conectores de contraste/concesión de la semana (whereas, albeit, notwithstanding…). Registro neutro-formal, párrafos y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· INFORME para un ayuntamiento sobre cómo mejorar un espacio público de tu ciudad: Introduction / Findings / Recommendations.\n· ARTÍCULO: 'How my city has changed' — reflexiona sobre los cambios urbanos que has presenciado.", 220, 260),

    LISTENING_HEAD,
    listening(1, "Listening · Parte 1 — Tres extractos (6 MC)", "Escucha tres extractos cortos con dos hablantes cada uno (se oyen dos veces). Para cada extracto, responde a las dos preguntas (A/B/C).", "This is Part One. You will hear three different extracts. Extract One. You hear two urban planners discussing a project. Woman: Whereas the original plan focused purely on traffic flow, the revised version actually prioritises pedestrians. Man: Notwithstanding the extra cost, I think that's absolutely the right call long-term. Extract Two. You hear two residents discussing gentrification. Woman: The neighbourhood is definitely safer now, albeit considerably more expensive than it used to be. Man: That said, I do wonder who actually benefits most from all this change. Extract Three. You hear two city officials discussing housing. Woman: Whereas demand keeps rising sharply, supply barely grows at all — that mismatch explains most of the price surge. Man: Despite the fact that everyone agrees on the diagnosis, nobody seems able to agree on an actual solution.", [
      mc("1. What does the revised plan prioritise?", ["Traffic flow only.", "Pedestrians.", "Parking."], 1, "'the revised version actually prioritises pedestrians'."),
      mc("2. What does the man think about the extra cost?", ["It's not worth it.", "It's the right call despite the cost.", "It's too expensive."], 1, "'Notwithstanding the extra cost, I think that's absolutely the right call'."),
      mc("3. How does the woman describe the neighbourhood?", ["Unsafe and cheap.", "Safer but more expensive.", "Unchanged."], 1, "'definitely safer now, albeit considerably more expensive'."),
      mc("4. What does the man wonder about?", ["Nothing.", "Who actually benefits most from the change.", "The safety improvements."], 1, "'who actually benefits most from all this change'."),
      mc("5. What explains the housing price surge, according to the woman?", ["Falling demand.", "Demand rising while supply barely grows.", "Oversupply."], 1, "'demand keeps rising sharply, supply barely grows at all'."),
      mc("6. What does the man note about the disagreement?", ["Nobody agrees on the diagnosis.", "Everyone agrees on the diagnosis but not the solution.", "Everyone agrees on everything."], 1, "'Despite the fact that everyone agrees on the diagnosis, nobody seems able to agree on an actual solution'."),
    ]),

    ...speakingParts({ p1: "cómo es la ciudad o el pueblo donde vives y qué cambiarías de él", p2: "dos imágenes urbanas (una calle llena de coches y tráfico y una calle peatonal con gente paseando): compáralas y especula sobre la calidad de vida en cada una", p3: "qué hace que una ciudad sea agradable para vivir (transporte público, espacios verdes, vivienda asequible, seguridad, vida comunitaria): comentadlo y elegid lo más importante", p4: "las ciudades y el urbanismo: si deberíamos restringir los coches en los centros urbanos, si la gentrificación es inevitable y quién debería decidir cómo se transforman nuestras ciudades" }),

    SUMMARY("Resumen del Día 21", [
      "Whereas/while (contraste equilibrado, dentro de la frase) vs however/nevertheless/that said (contraste tras un punto, frase nueva).",
      "Albeit + adjetivo (compacto); notwithstanding + sustantivo (formal); despite + sustantivo/-ing vs despite the fact that + cláusula.",
      "Vocabulario de urbanismo. Practicadas las 8 partes de Use of English, Writing, Listening P1 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 22", "Escribe 6 frases usando conectores de contraste/concesión (whereas, albeit, notwithstanding…). Repasa las flashcards. Mañana: causa-consecuencia formal y adición avanzada."),
  ],
};

// ───────────────────────── DÍA 22 ─────────────────────────
const DAY22 = {
  title: "Día 22 — Causa-consecuencia formal y adición avanzada · El transporte y la movilidad",
  description: "Given (that)/in view of/on account of/owing to (causa formal); as a result/consequently/thereby/thus (consecuencia formal); not to mention/let alone/to say nothing of (adición enfática). Vocabulario de transporte. Las 4 destrezas (formato C1); Listening P2.",
  pedagogy: {
    objective: "Expresar causa y consecuencia en registro formal y añadir información con énfasis creciente.",
    summary: "Causa-consecuencia formal; adición avanzada; transporte y movilidad; Use of English P1–P8, Writing, Listening P2, Speaking P1–P4.",
    commonMistakes: ["'due to' + cláusula completa (necesita sustantivo, como despite).", "'thereby' mal usado (va con -ing, no con cláusula completa).", "'let alone' usado sin una negación o estructura restrictiva previa."],
    reviewPrompts: ["¿Qué estructura sigue a 'owing to'?", "¿Cómo usarías 'let alone' para decir que algo ni siquiera es posible, y mucho menos otra cosa más exigente?"],
  },
  items: [
    TEXT("🔁 Ayer, contraste y concesión. Hoy la CAUSA-CONSECUENCIA FORMAL y la ADICIÓN AVANZADA: los conectores que estructuran la argumentación académica. Vocabulario: el TRANSPORTE y la MOVILIDAD."),
    GRAMMAR("Causa-consecuencia formal y adición avanzada", `CAUSA FORMAL (+ sustantivo/-ing, NO cláusula completa salvo con 'that'):
· GIVEN (THAT) / IN VIEW OF / ON ACCOUNT OF / OWING TO + sustantivo: Given the rising costs, the project was postponed. Owing to poor planning, the scheme failed. In view of the evidence, we must reconsider.
· GIVEN THAT + cláusula completa: Given that costs are rising, we must reconsider.
CONSECUENCIA FORMAL:
· AS A RESULT (OF) / CONSEQUENTLY / AS A CONSEQUENCE (inicio de frase, tras punto): Costs rose sharply. Consequently, the project was postponed.
· THEREBY + -ING (consecuencia dentro de la misma frase, muy formal/académico): The scheme cut fares, thereby increasing ridership significantly.
· THUS (formal, = por lo tanto, versátil: inicio de frase o + -ing): The evidence is clear; thus, we must act. / The scheme raised fares, thus discouraging use.
ADICIÓN AVANZADA (énfasis creciente):
· NOT TO MENTION (+ sustantivo/-ing, añade algo obvio/evidente): The plan is expensive, not to mention deeply unpopular.
· LET ALONE (tras negación, = y mucho menos): We can't afford a new station, let alone an entire new line.
· TO SAY NOTHING OF (= y ni hablar de, similar a not to mention): The delays cost millions, to say nothing of the reputational damage.
⚠️ 'Let alone' SIEMPRE sigue a una afirmación negativa o restrictiva; no se usa en frases puramente afirmativas.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ Owing to it was expensive → ✅ Owing to the expense (sustantivo, no cláusula).\n· ❌ The plan raised fares, thereby it discouraged use → ✅ …thereby discouraging use (thereby + -ing).\n· ❌ We can afford a bus, let alone a train (sin negación previa) → ✅ We can't afford a bus, LET ALONE a train.\n· 'Given that' SÍ admite cláusula completa; 'given' solo (sin 'that') funciona mejor con sustantivo."),
    grammarEx("Use of English — Causa-consecuencia formal y adición avanzada", "Elige o completa.", [
      mc("___ the rising costs, the new metro line was postponed indefinitely.", ["Given", "Given that", "Thereby"], 0, "given + sustantivo."),
      mc("___ poor maintenance, the bridge had to be closed.", ["Owing to", "Thereby", "Let alone"], 0, "owing to + sustantivo."),
      fb("Fares rose sharply. ___, ridership fell by twenty percent.", ["Consequently", "As a result"], "consecuencia (inicio de frase)."),
      mc("The scheme cut fares, ___ increasing ridership.", ["thereby", "consequently", "given"], 0, "thereby + -ing (misma frase)."),
      mc("We can't afford to fix the current buses, ___ buy new ones.", ["let alone", "not to mention", "thereby"], 0, "let alone (tras negación)."),
      fb("The delays cost millions, ___ mention the reputational damage. (adición enfática)", ["not to"], "not to mention."),
      mc("___ the evidence clearly showing the problem, action was still delayed for years.", ["Given", "Given that", "Thereby"], 1, "given that + cláusula completa."),
    ]),
    GRAMMAR("Vocabulario del día — El transporte y la movilidad (C1)", "Léxico avanzado de transporte."),
    deck("C1 S5D22 — Transporte y movilidad", [
      ["commute", "trayecto diario al trabajo / desplazarse", "Her daily commute takes an hour.", "sustantivo/verbo", "kəˈmjuːt"],
      ["gridlock", "atasco total / colapso circulatorio", "The city centre was in gridlock.", "sustantivo", "ˈɡrɪdlɒk"],
      ["public transit", "transporte público", "Investment in public transit is rising.", "sustantivo", "ˈpʌblɪk ˈtrænzɪt"],
      ["subsidise", "subvencionar", "The government subsidises bus fares.", "verbo", "ˈsʌbsɪdaɪz"],
      ["emissions", "emisiones", "Transport accounts for major emissions.", "sustantivo", "ɪˈmɪʃnz"],
      ["last-mile", "última milla (logística)", "The last-mile problem hampers transit.", "adjetivo", "ˈlɑːst maɪl"],
      ["accessibility", "accesibilidad", "Accessibility for disabled users matters.", "sustantivo", "əkˌsesəˈbɪləti"],
      ["ridership", "número de usuarios (transporte)", "Ridership dropped during the pandemic.", "sustantivo", "ˈraɪdəʃɪp"],
      ["bottleneck", "cuello de botella", "That junction is a notorious bottleneck.", "sustantivo", "ˈbɒtlnek"],
      ["decarbonise", "descarbonizar", "Cities aim to decarbonise transport.", "verbo", "diːˈkɑːbənaɪz"],
    ]),
    vocabEx("Vocabulario — El transporte y la movilidad", "Elige la opción correcta.", [
      mc("A regular journey to and from work is a ___.", ["commute", "bottleneck", "subsidy"], 0, "commute."),
      mc("A complete traffic standstill is ___.", ["gridlock", "ridership", "accessibility"], 0, "gridlock."),
      mc("To financially support something, e.g. fares, is to ___ it.", ["subsidise", "decarbonise", "commute"], 0, "subsidise."),
      mc("The number of people using a transport system is its ___.", ["ridership", "emissions", "gridlock"], 0, "ridership."),
      mc("A point where traffic flow narrows and slows is a ___.", ["bottleneck", "commute", "subsidy"], 0, "bottleneck."),
      mc("To remove carbon emissions from a system is to ___ it.", ["decarbonise", "subsidise", "commute"], 0, "decarbonise."),
    ]),

    ...uoe({
      p1: {
        title: "The last mile problem",
        text: "Public transit planners have long grappled with what they call the 'last-mile problem': the persistent, stubborn (1)___ of connecting passengers efficiently between a major transit hub — a train station, a bus terminus — and their own final, specific destination, which frequently lies just beyond convenient walking distance. Given (2)___ this final short stretch is often the least efficiently served part of any journey, it can end up deterring people from using public transit at all, even when the bulk of their journey would (3)___ be considerably faster and cheaper by train or bus than by private car. Owing to this genuinely persistent challenge, transit agencies around the world have experimented with a wide range of potential solutions: subsidised shuttle services, docked bicycle-sharing schemes, and, more recently, various forms of on-demand microtransit specifically designed to (4)___ this stubborn final gap. None of these solutions, it should be said clearly, has yet proved fully satisfactory on its own; each carries its own particular (5)___ and limitations, whether cost, reliability, or simple practical convenience for the end user. What does seem increasingly clear, however, is that solving the last-mile problem effectively is not merely a matter of minor, incidental convenience but a genuinely (6)___ factor in whether public transit can ever realistically compete with the private car for the vast majority of everyday, practical journeys. A train that gets you swiftly to within a mile of your destination, only to (7)___ you stranded there with no good remaining option, will rarely persuade a car owner to permanently abandon their vehicle, however genuinely impressive and efficient the rest of that particular journey (8)___ have been.",
        q: [
          mc("(1)", ["challenge", "problem", "difficulty", "issue"], 0, "'the persistent, stubborn challenge'."),
          mc("(2)", ["that", "if", "since", "as"], 0, "'Given that this final short stretch'."),
          mc("(3)", ["otherwise", "elsewhere", "instead", "conversely"], 0, "'would otherwise be… faster'."),
          mc("(4)", ["bridge", "close", "fill", "cover"], 0, "'designed to bridge this stubborn final gap'."),
          mc("(5)", ["drawbacks", "faults", "failings", "flaws"], 0, "'its own particular drawbacks'."),
          mc("(6)", ["decisive", "critical", "deciding", "determining"], 0, "'a genuinely decisive factor'."),
          mc("(7)", ["leave", "let", "keep", "have"], 0, "'only to leave you stranded'."),
          mc("(8)", ["may", "might", "could", "would"], 1, "'however… that particular journey might have been'."),
        ],
      },
      p2: {
        title: "Who pays for the road",
        text: "Roads, unlike most other pieces of major infrastructure, are typically presented to the general public as somehow simply 'free' — funded invisibly through general taxation rather than through direct, visible payment at the point of actual use. This framing, (1)___ intuitive it may initially seem, obscures a genuinely significant policy choice with real, substantial consequences. Given (2)___ roads are not, in fact, genuinely free to build or maintain, someone, inevitably, ultimately bears their very real and often considerable cost. When that cost is spread across (3)___ general taxpayers rather than charged directly to drivers specifically, non-drivers end up subsidising, in effect, a transport mode they may rarely or never personally use, (4)___ arguably distorting incentives away from genuinely more sustainable alternatives like cycling or public transit. Some economists have accordingly proposed congestion charging or direct road-usage pricing as a more genuinely equitable alternative, (5)___ that drivers, rather than the general public, should bear costs more directly proportional to their own individual, specific road use. Critics counter that such schemes can disproportionately burden lower-income drivers who frequently have (6)___ genuinely practical alternative to driving, particularly in areas where public transit remains chronically inadequate or entirely absent. This tension between economic efficiency and basic social equity runs through nearly every serious debate about transport funding, and it shows relatively little genuine sign of being resolved (7)___ ease any time soon, given how deeply the assumption of 'free' roads has become embedded in most people's basic thinking about (8)___ transport infrastructure should reasonably work.",
        q: [
          fb("(1)", ["however"], "'However intuitive it may seem'."),
          fb("(2)", ["that"], "'Given that roads are not… free'."),
          fb("(3)", ["all"], "'spread across all… taxpayers'."),
          fb("(4)", ["thereby"], "'thereby arguably distorting incentives'."),
          fb("(5)", ["arguing"], "'proposed… pricing… arguing that drivers'."),
          fb("(6)", ["no"], "'frequently have no genuinely practical alternative'."),
          fb("(7)", ["with"], "'resolved with ease'."),
          fb("(8)", ["how"], "'thinking about how transport infrastructure should… work'."),
        ],
      },
      p3: {
        title: "The bicycle's quiet comeback",
        text: "For much of the latter half of the twentieth century, the bicycle was widely regarded, at least in most wealthy Western countries, as a somewhat marginal, faintly outdated mode of transport — practical enough for children or committed enthusiasts, perhaps, but nowhere near (1)___ enough to feature seriously in any credible vision of a modern, efficient transport system. Given the accumulating evidence around obesity, chronic air pollution and (2)___ traffic congestion, that dismissive attitude has, in recent years, begun shifting quite markedly. Cities that have invested seriously in dedicated cycling (3)___ — protected lanes, secure parking, genuinely reliable bike-share schemes — have generally seen ridership climb steadily, thereby (4)___ demonstrating that people will cycle in real, meaningful numbers when the necessary supporting conditions genuinely make it feel safe and practical to do so. Owing to this accumulating, increasingly persuasive evidence, transport planners in city after city have begun (5)___ cycling not as a marginal, niche activity but as a genuinely serious, mainstream mode of transport deserving of real, sustained infrastructure investment. Skeptics, not to (6)___ certain business owners initially worried about reduced car access harming their trade, have frequently resisted these particular changes, at least at first. Yet accumulating evidence from cities that have already made this particular transition suggests such (7)___ are, more often than not, largely unfounded; local businesses frequently benefit, in practice, from the increased footfall that genuinely walkable, cyclable streets tend reliably to generate. The bicycle's quiet, sustained comeback, in short, appears to be considerably more than a passing, fashionable (8)___.",
        items: [
          { root: "serious", accepted: ["seriously"], hint: "'nowhere near seriously enough' → seriously." },
          { root: "worsen", accepted: ["worsening"], hint: "'worsening traffic congestion' → worsening." },
          { root: "infrastructure", accepted: ["infrastructure"], hint: "'dedicated cycling infrastructure' (sustantivo)." },
          { root: "convince", accepted: ["convincingly"], hint: "'thereby convincingly demonstrating' → convincingly." },
          { root: "recognise", accepted: ["recognising"], hint: "'begun recognising cycling' → recognising." },
          { root: "mention", accepted: ["mention"], hint: "'not to mention certain business owners' (verbo)." },
          { root: "fear", accepted: ["fears"], hint: "'such fears are… largely unfounded' → fears." },
          { root: "trend", accepted: ["trend"], hint: "'a passing, fashionable trend' (sustantivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — causa-consecuencia y adición formal",
        items: [
          { s1: "Because costs rose, the project was postponed.", key: "GIVEN", s2: "___ the rising costs, the project was postponed.", accepted: ["Given"], explanation: "given + sustantivo." },
          { s1: "The bridge was poorly maintained, so it had to be closed.", key: "OWING", s2: "___ poor maintenance, the bridge had to be closed.", accepted: ["Owing to"], explanation: "owing to + sustantivo." },
          { s1: "Fares rose sharply. Because of this, ridership fell.", key: "RESULT", s2: "Fares rose sharply. As a ___, ridership fell.", accepted: ["result"], explanation: "as a result (inicio de frase)." },
          { s1: "The scheme cut fares, and this increased ridership.", key: "THEREBY", s2: "The scheme cut fares, ___ increasing ridership.", accepted: ["thereby"], explanation: "thereby + -ing." },
          { s1: "We can't afford to fix the buses, and we definitely can't buy new trains.", key: "ALONE", s2: "We can't afford to fix the buses, let ___ buy new trains.", accepted: ["alone"], explanation: "let alone (tras negación)." },
          { s1: "The delays cost millions, and we haven't even mentioned the reputational damage.", key: "MENTION", s2: "The delays cost millions, not to ___ the reputational damage.", accepted: ["mention"], explanation: "not to mention." },
        ],
      },
      p5: {
        title: "The city that gave up its highways",
        text: "In the middle of the twentieth century, planners in a major coastal city, following a prevailing philosophy embraced almost universally at the time, drove an elevated highway directly through the heart of the city's downtown waterfront, severing what had once been a vibrant, bustling commercial district from the water's edge that had originally given the city its entire economic and cultural reason for being. For several subsequent decades, this structure was simply accepted, largely without serious question, as an unavoidable if regrettable cost of modern urban mobility — noisy, visually oppressive, casting the streets beneath it into permanent shadow, but nonetheless considered essential to keeping traffic reasonably moving through an increasingly congested and rapidly growing city.\n\nWhat eventually forced a fundamental reconsideration was not, as it happened, any deliberate planning decision at all, but rather a natural disaster. A significant earthquake severely damaged the ageing structure, rendering it unsafe for continued use and forcing city officials to confront, with real and immediate urgency, a stark and genuinely consequential choice: spend an enormous sum repairing and effectively rebuilding the damaged highway, or seize the unexpected, unplanned opportunity to remove it from the city's landscape entirely.\n\nGiven the sheer scale of the projected repair costs, and given that traffic engineers' confident predictions of resulting gridlock following removal had, by then, been repeatedly and rather embarrassingly discredited in several genuinely comparable cases elsewhere, city officials eventually, and not without considerable internal controversy, opted for full removal. The results, once the highway finally came down and the waterfront was substantially redesigned, surprised even many of the project's own original, most committed supporters.\n\nTraffic, contrary to nearly everyone's confident predictions, did not descend into the catastrophic, permanent gridlock that had been so widely and so confidently forecast. Drivers, it turned out, adapted their routes and their travel patterns considerably more readily and flexibly than transport models had generally, rather too pessimistically, assumed they would. Meanwhile, the newly reopened waterfront, freed at last from decades of highway shadow and near-constant traffic noise, rapidly became one of the city's most popular, most celebrated and most economically valuable public spaces, drawing both dedicated local residents and visiting tourists in genuinely large and sustained numbers.\n\nProperty values in the immediately surrounding area rose substantially, not to mention the entirely new tax revenue subsequently generated by the wave of new development that followed. The transformation proved so genuinely, visibly successful that other cities, watching closely from a distance, began seriously studying and in some cases actively emulating the approach, removing their own comparable urban highways in the hope of achieving broadly similar results.\n\nThe episode has since become something of a foundational case study in contemporary urban planning circles, frequently cited as compelling evidence that the seemingly self-evident, common-sense assumption that more road capacity straightforwardly and reliably reduces traffic congestion is, in fact, considerably more complicated and considerably less reliable in practice than it has long, rather too comfortably, been assumed to be. Removing road capacity, this particular case strongly suggested, does not automatically or necessarily worsen congestion; it can, given the right surrounding circumstances, genuinely and durably improve a city's overall quality of urban life without producing anything remotely close to the traffic catastrophe that conventional transport planning wisdom had, for so long, so confidently predicted it inevitably would.",
        q: [
          mc("What did planners build through the city's downtown waterfront in the mid-twentieth century?", ["A park.", "An elevated highway.", "A railway.", "A shopping centre."], 1, "'drove an elevated highway directly through the heart of the city's downtown waterfront'."),
          mc("What forced the reconsideration of the highway?", ["A planning decision.", "A significant earthquake that damaged the structure.", "Public protest.", "A funding shortage."], 1, "'A significant earthquake severely damaged the ageing structure'."),
          mc("What choice did officials face?", ["No real choice.", "Spend heavily repairing it, or remove it entirely.", "Build a new highway elsewhere.", "Close the city."], 1, "'spend an enormous sum repairing… the damaged highway, or seize the… opportunity to remove it'."),
          mc("What happened to traffic after the highway was removed?", ["Catastrophic gridlock as predicted.", "It did not descend into the predicted gridlock; drivers adapted.", "Traffic disappeared entirely.", "Nothing changed."], 1, "'Traffic… did not descend into the catastrophic, permanent gridlock that had been… forecast'."),
          mc("What happened to the waterfront and property values?", ["Both declined.", "The waterfront became popular; property values rose substantially.", "No change occurred.", "Only tourism increased."], 1, "'the newly reopened waterfront… rapidly became one of the city's most popular… public spaces… Property values… rose substantially'."),
          mc("What does the case study suggest about road capacity and congestion?", ["More roads always reduce congestion.", "Removing road capacity doesn't necessarily worsen congestion and can improve quality of life.", "Roads are always necessary.", "Congestion is unavoidable."], 1, "'Removing road capacity… does not automatically or necessarily worsen congestion; it can… genuinely and durably improve a city's overall quality of urban life'."),
        ],
      },
      p6: {
        title: "Should public transport be free?",
        intro: "Cuatro personas debaten si el transporte público debería ser gratuito.",
        texts: {
          A: "NADIA: I'm strongly in favour, given the enormous environmental and social benefits at stake. Free transit removes a real financial barrier for lower-income residents, thereby increasing ridership significantly and, as a direct result, reducing both traffic congestion and harmful emissions. The cost, not to mention the lost fare revenue, seems entirely justified given everything we stand to gain collectively in return.",
          B: "TOM: I share the underlying goals, but I'm sceptical that 'free' is actually the most efficient way to achieve them. Owing to the funding gap it inevitably creates, free transit often means chronically underfunded, poorly maintained, less frequent and less reliable service — which can end up discouraging ridership just as effectively as fares would have, let alone actually improving it in any meaningful way.",
          C: "PRIYA: What concerns me most is opportunity cost. Given limited public budgets, money spent making transit entirely free might, arguably, achieve more if invested instead in expanding coverage and frequency, particularly to genuinely underserved areas. A slightly cheaper, far more extensive and reliable network could plausibly help more people overall than a free but limited and infrequent one.",
          D: "SAM: My honest view is that this debate often ignores genuinely major cities that have already tried it. Some report real, measurable ridership increases; others report minimal change alongside serious new funding problems. Given how much genuinely depends on local specific context, I'm wary of any one-size-fits-all answer either way to what is, in practice, a fairly complex empirical question.",
        },
        q: [
          mc("Who strongly favours free transit for its environmental and social benefits?", ["A", "B", "C", "D"], 0, "Nadia: 'I'm strongly in favour, given the enormous environmental and social benefits'."),
          mc("Whose view most directly QUALIFIES Nadia's, questioning whether free transit is efficient?", ["A", "B", "C", "D"], 1, "Tom: 'I'm sceptical that \"free\" is actually the most efficient way'."),
          mc("Who focuses on opportunity cost and alternative uses of the budget?", ["A", "B", "C", "D"], 2, "Priya: 'What concerns me most is opportunity cost'."),
          mc("Who is wary of a one-size-fits-all answer, citing mixed evidence?", ["A", "B", "C", "D"], 3, "Sam: 'I'm wary of any one-size-fits-all answer'."),
        ],
      },
      p7: {
        title: "The invisible cost of a long commute",
        text: "Economists studying wellbeing have consistently found that few everyday activities correlate as strongly with reduced life satisfaction as the daily commute. (1)___\n\nThis might initially seem a fairly trivial, unremarkable finding. (2)___ Given how much time many workers spend commuting, however, its cumulative effect on overall wellbeing turns out to be genuinely substantial.\n\nWhat makes commuting particularly psychologically taxing, researchers suggest, is its distinctive combination of features. (3)___ It is repetitive, largely involuntary, and frequently unpredictable in duration, precisely the combination that human psychology tends to find most reliably stressful.\n\nThe costs, moreover, extend well beyond simple personal wellbeing. (4)___ Long commutes are associated with measurably higher rates of divorce, reduced community involvement, and diminished time available for both exercise and sleep.\n\nGiven these accumulating, substantial costs, some researchers have begun arguing that commute time deserves considerably more serious weight in personal decision-making. (5)___ A slightly smaller home located closer to work may, evidence increasingly suggests, deliver more genuine happiness than a larger one considerably further away.\n\nEmployers, too, are beginning to take note. (6)___ Remote and hybrid working arrangements, whatever their own genuine drawbacks, at least partially address a cost that conventional economic thinking had, for a very long time, almost entirely overlooked.",
        options: [
          "Commuting reliably makes people measurably less happy.",         // A -> gap 1
          "Yet the scale of time involved changes that picture entirely.", // B -> gap 2
          "Predictability and control, it seems, matter enormously here.", // C -> gap 3
          "The ripple effects reach well into family and community life.", // D -> gap 4
          "Location, on this view, deserves far more weight than it gets.", // E -> gap 5
          "Some are rethinking office policy with this cost in mind.",     // F -> gap 6
          "Commuting has never once been linked to reduced wellbeing.",    // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: los desplazamientos reducen la felicidad."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la escala de tiempo cambia todo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: la previsibilidad importa mucho."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el efecto llega a la familia y comunidad."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: la ubicación merece más peso."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: algunas empresas repiensan su política."),
        ],
      },
      p8: {
        title: "Four people discuss their daily commute",
        text: "Read what four people say about their experience of commuting.\n\nA) NADIA: My commute used to be ninety minutes each way by car, and honestly, it was slowly wearing me down. Given the choice between a bigger house further out and a smaller flat close to work, I eventually chose the flat, and I've never once regretted it. That decision alone transformed my daily quality of life.\n\nB) TOM: I cycle to work now, having switched from the bus a couple of years ago, and it's completely changed how I feel about the whole day. Owing to the exercise built naturally into my commute, I arrive at work genuinely energised rather than exhausted, and I arrive home ready to actually enjoy my evening properly.\n\nC) PRIYA: My commute is genuinely unpredictable — some days forty minutes, other days over two hours, depending entirely on traffic. It's the sheer uncertainty, not to mention the total lack of any control over it, that I find genuinely hardest to deal with day after day. I can plan almost nothing reliably around it.\n\nD) SAM: I work from home three days a week now, and given how much time and stress that alone has saved me, I honestly can't imagine going back to a full five-day office commute again. That said, I do genuinely miss the natural, unplanned social contact that commuting into an office used to provide.\n",
        q: [
          mc("Who chose a smaller flat close to work over a bigger house further out?", ["A", "B", "C", "D"], 0, "Nadia: 'I eventually chose the flat, and I've never once regretted it'."),
          mc("Who cycles to work and arrives energised?", ["A", "B", "C", "D"], 1, "Tom: 'I cycle to work now… I arrive at work genuinely energised'."),
          mc("Who finds the unpredictability of their commute hardest to deal with?", ["A", "B", "C", "D"], 2, "Priya: 'It's the sheer uncertainty… that I find genuinely hardest'."),
          mc("Who works from home three days a week now?", ["A", "B", "C", "D"], 3, "Sam: 'I work from home three days a week now'."),
          mc("Whose commute used to be ninety minutes each way by car?", ["A", "B", "C", "D"], 0, "Nadia: 'My commute used to be ninety minutes each way by car'."),
          mc("Who switched from the bus to cycling a couple of years ago?", ["A", "B", "C", "D"], 1, "Tom: 'having switched from the bus a couple of years ago'."),
          mc("Who can plan almost nothing reliably around their commute?", ["A", "B", "C", "D"], 2, "Priya: 'I can plan almost nothing reliably around it'."),
          mc("Who misses the natural social contact of commuting into an office?", ["A", "B", "C", "D"], 3, "Sam: 'I do genuinely miss the natural, unplanned social contact'."),
          mc("Who says a single decision transformed their daily quality of life?", ["A", "B", "C", "D"], 0, "Nadia: 'That decision alone transformed my daily quality of life'."),
          mc("Who can't imagine returning to a full five-day office commute?", ["A", "B", "C", "D"], 3, "Sam: 'I honestly can't imagine going back to a full five-day office commute'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el transporte se plantearon dos ideas:\n· public transport should be free for everyone (debería ser gratuito)\n· charging fares is a fairer way to fund public transport (cobrar tarifas es más justo)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS conectores de causa-consecuencia formal (given that, owing to, thereby, consequently…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· PROPUESTA para tu ayuntamiento sobre cómo mejorar el transporte público en tu zona: justifica y recomienda.\n· ARTÍCULO: 'My daily commute and what it taught me' — reflexiona con ejemplos personales.", 220, 260),

    LISTENING_HEAD,
    listening(2, "Listening · Parte 2 — Sentence completion", "Escucha a una planificadora de transporte, la ingeniera Osei, dando una charla (se oye dos veces). Completa cada frase con UNA o DOS palabras.", "This is Part Two. You will hear a transport planner called Engineer Osei giving a talk. Engineer Osei: Given the scale of the climate challenge, transport has to be at the centre of any serious response — it's one of the largest sources of emissions in most cities. My first point concerns induced demand: build more road capacity, and you don't reduce congestion; you thereby create more traffic, as more people simply choose to drive. Second, on funding: owing to decades of underinvestment, public transit in many cities is now stuck in a vicious cycle — poor service discourages riders, and fewer riders justify even less investment. Breaking that cycle requires sustained, serious funding, not occasional token gestures. Third, I want to address equity. Transport decisions are rarely neutral; given who typically attends planning meetings, wealthier, car-owning residents are usually overrepresented, while those who depend most on public transit are often barely consulted at all. My fourth point is about the last-mile problem, which remains stubbornly unsolved almost everywhere. And finally, my main message: given how urgent the climate crisis has become, we simply don't have the luxury of waiting for perfect, fully consensual solutions. We need to act with real urgency, even given genuine, ongoing uncertainty about the details.", [
      fb("Transport is one of the largest sources of ___ in most cities.", ["emissions"], "'one of the largest sources of emissions'."),
      fb("Building more road capacity creates more ___, not less.", ["traffic"], "'you thereby create more traffic'."),
      fb("Public transit is stuck in a ___ cycle owing to underinvestment.", ["vicious"], "'stuck in a vicious cycle'."),
      fb("Poor service discourages ___, which justifies even less investment.", ["riders"], "'poor service discourages riders'."),
      fb("Wealthier, car-owning residents are usually ___ at planning meetings.", ["overrepresented"], "'usually overrepresented'."),
      fb("Those who depend most on transit are often barely ___.", ["consulted"], "'barely consulted at all'."),
      fb("The ___ problem remains stubbornly unsolved almost everywhere.", ["last-mile"], "'the last-mile problem'."),
      fb("We don't have the luxury of waiting for ___ solutions.", ["perfect"], "'waiting for perfect… solutions'."),
    ]),

    ...speakingParts({ p1: "cómo te desplazas normalmente y qué opinas del transporte público de tu zona", p2: "dos imágenes del transporte (un atasco de coches y una estación de metro concurrida): compáralas y especula sobre la experiencia de las personas", p3: "qué mejoraría más la movilidad urbana (más transporte público, ciclovías, transporte gratuito, restringir coches, mejor planificación): comentadlo y elegid lo más eficaz", p4: "el transporte y la movilidad: si el transporte público debería ser gratuito, cómo afecta el desplazamiento diario a nuestro bienestar y qué papel debería tener el coche en el futuro de las ciudades" }),

    SUMMARY("Resumen del Día 22", [
      "Causa formal: given (that), in view of, on account of, owing to + sustantivo/cláusula. Consecuencia: as a result/consequently (inicio de frase); thereby + -ing (misma frase).",
      "Adición enfática: not to mention, let alone (tras negación), to say nothing of.",
      "Vocabulario de transporte. Practicadas las 8 partes de Use of English, Writing, Listening P2 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 23", "Escribe 6 frases con causa-consecuencia formal o adición enfática sobre el transporte. Repasa las flashcards. Mañana: la elipsis, la sustitución y la referencia (cohesión textual)."),
  ],
};

// ───────────────────────── DÍA 23 ─────────────────────────
const DAY23 = {
  title: "Día 23 — Elipsis, sustitución y referencia · Los espacios públicos y la comunidad",
  description: "Elipsis (omisión de elementos repetidos); sustitución (one/ones, do so, so/not); referencia (this/that/such, the former/the latter). Vocabulario de espacios públicos y comunidad. Las 4 destrezas (formato C1); Listening P3.",
  pedagogy: {
    objective: "Evitar repeticiones innecesarias y dar cohesión al texto con elipsis, sustitución y referencia.",
    summary: "Elipsis, sustitución y referencia; espacios públicos y comunidad; Use of English P1–P8, Writing, Listening P3, Speaking P1–P4.",
    commonMistakes: ["repetir el sustantivo en vez de usar 'one/ones'.", "'so' mal posicionado con verbos de opinión (I think so, no 'I think that so').", "confundir 'the former/the latter' (orden: primero/segundo mencionado)."],
    reviewPrompts: ["¿Cómo evitarías repetir 'plan' en 'this plan and that plan'?", "¿Qué significa 'the former' frente a 'the latter'?"],
  },
  items: [
    TEXT("🔁 Ayer, causa-consecuencia. Hoy la ELIPSIS, la SUSTITUCIÓN y la REFERENCIA: los recursos que evitan la repetición y dan fluidez al texto escrito de nivel C1. Vocabulario: los ESPACIOS PÚBLICOS y la COMUNIDAD."),
    GRAMMAR("Elipsis, sustitución y referencia", `ELIPSIS (omitir un elemento ya mencionado, recuperable por el contexto):
· Tras auxiliares/modales: She wanted to help, but couldn't [help]. He can swim faster than I can [swim].
· En comparaciones y coordinación: The park was renovated and [the park was] reopened in June.
SUSTITUCIÓN (reemplazar un elemento por una palabra más corta):
· ONE/ONES (sustituye un sustantivo contable): I preferred the old design to the new one. These benches are nicer than those ones.
· DO SO / DO THIS/THAT (sustituye un verbo + complemento, formal): Residents were asked to recycle, and most did so willingly.
· SO / NOT (sustituye una cláusula entera, tras verbos de opinión: think, hope, believe, expect, suppose): Will the park reopen? I believe so. / I hope not.
REFERENCIA (apuntar a algo mencionado, sin repetirlo):
· THIS/THAT/SUCH (+ sustantivo, para resumir una idea previa): Such initiatives require real community buy-in. This approach has proven effective.
· THE FORMER / THE LATTER (se refiere al PRIMERO / SEGUNDO de dos elementos mencionados): Both parks and libraries received funding; the former [parks] more than the latter [libraries].
⚠️ Estos recursos son clave para un estilo C1 fluido y no repetitivo, especialmente en Writing y en los textos largos de Reading.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ I preferred the old design to the new design → ✅ …to the new ONE (sustitución).\n· ❌ I think that so → ✅ I think so (sin 'that' con esta estructura).\n· 'The former' = el primero mencionado; 'the latter' = el segundo — no los confundas.\n· La elipsis exige que el elemento omitido sea claramente recuperable por el contexto inmediato; si hay ambigüedad, no la uses."),
    grammarEx("Use of English — Elipsis, sustitución y referencia", "Elige la forma más natural y cohesionada.", [
      mc("I preferred the old bench design to the new ___.", ["one", "design", "it"], 0, "sustitución: one."),
      mc("Will the library reopen this year? — I believe ___.", ["so", "that", "it"], 0, "sustitución de cláusula: so."),
      mc("Residents were asked to volunteer, and many did ___.", ["so", "it", "that so"], 0, "do so (verbo + complemento)."),
      mc("She wanted to attend the meeting, but ___.", ["couldn't", "couldn't attend the meeting", "couldn't do"], 0, "elipsis tras modal."),
      mc("Both the park and the library received funding; ___ needed it more urgently.", ["the former", "the latter", "this"], 0, "the former = el primero mencionado (park)."),
      fb("___ initiatives require genuine community buy-in to succeed. (referencia)", ["Such"], "such + sustantivo (resume idea previa)."),
      mc("These new benches are more comfortable than those old ___.", ["ones", "benches", "it"], 0, "sustitución: ones (plural)."),
    ]),
    GRAMMAR("Vocabulario del día — Los espacios públicos y la comunidad (C1)", "Léxico avanzado de comunidad."),
    deck("C1 S5D23 — Espacios públicos y comunidad", [
      ["communal", "comunal / compartido/a", "They share a communal garden.", "adjetivo", "ˈkɒmjʊnl"],
      ["grassroots", "de base / popular", "It was a genuine grassroots movement.", "adjetivo", "ˈɡrɑːsruːts"],
      ["civic engagement", "compromiso cívico", "Civic engagement has declined sharply.", "sustantivo", "ˈsɪvɪk ɪnˈɡeɪdʒmənt"],
      ["cohesion", "cohesión (social)", "Shared spaces strengthen social cohesion.", "sustantivo", "kəʊˈhiːʒn"],
      ["amenity", "servicio / comodidad (urbana)", "The area lacks basic amenities.", "sustantivo", "əˈmiːnəti"],
      ["foster", "fomentar / propiciar", "Parks foster a sense of community.", "verbo", "ˈfɒstə"],
      ["stakeholder", "parte interesada / agente implicado", "All stakeholders were consulted.", "sustantivo", "ˈsteɪkhəʊldə"],
      ["derelict", "abandonado/a (edificio, terreno)", "The derelict lot was finally cleared.", "adjetivo", "ˈderəlɪkt"],
      ["placemaking", "creación de lugares (urbanismo)", "Placemaking transforms neglected spaces.", "sustantivo", "ˈpleɪsmeɪkɪŋ"],
      ["inclusive", "inclusivo/a", "The design aims to be genuinely inclusive.", "adjetivo", "ɪnˈkluːsɪv"],
    ]),
    vocabEx("Vocabulario — Los espacios públicos y la comunidad", "Elige la opción correcta.", [
      mc("Shared by everyone in a group is ___.", ["communal", "derelict", "inclusive"], 0, "communal."),
      mc("Originating from ordinary local people, not institutions, is ___.", ["grassroots", "derelict", "communal"], 0, "grassroots."),
      mc("The sense of a community being united and connected is social ___.", ["cohesion", "amenity", "stakeholder"], 0, "cohesion."),
      mc("To actively encourage something to develop is to ___ it.", ["foster", "abandon", "derelict"], 0, "foster."),
      mc("A person or group with an interest in a decision is a ___.", ["stakeholder", "amenity", "cohesion"], 0, "stakeholder."),
      mc("Abandoned and falling into disrepair is ___.", ["derelict", "communal", "inclusive"], 0, "derelict."),
    ]),

    ...uoe({
      p1: {
        title: "The third place",
        text: "Sociologists have long distinguished between three (1)___ types of space in ordinary human life: the home, where we live; the workplace, where we labour; and what one influential researcher termed the 'third place' — those informal, unpressured public and semi-public spaces, such as cafés, libraries and community centres, where people gather freely, without any particular (2)___ agenda, simply to be among others. Such spaces, this researcher argued, play a role in civic life that is (3)___ underappreciated precisely because it is so unglamorous and so rarely, if ever, formally measured. It is in third places, considerably more than in the home or the workplace, that genuine, unforced community actually forms: casual acquaintances slowly deepen into real friendships, local information circulates informally, and residents develop the ordinary, everyday familiarity with their neighbours that (4)___ genuine civic trust. In recent decades, however, many such spaces have been quietly lost — local cafés replaced by chains with little genuine interest in fostering lingering, unhurried conversation, libraries defunded, community centres closed for lack of (5)___. Some urban planners now argue that deliberately, consciously preserving and creating third places deserves considerably more serious attention (6)___ it typically receives in conventional planning processes, which tend to prioritise more easily measured outcomes like housing units delivered or roads built over the genuinely harder-to-quantify social value of a well-used, well-loved (7)___ space. Whether cities can meaningfully rebuild what has been so quietly and gradually lost remains, for (8)___, an open and genuinely urgent question.",
        q: [
          mc("(1)", ["distinct", "different", "separate", "particular"], 0, "'three distinct types of space'."),
          mc("(2)", ["formal", "official", "specific", "particular"], 0, "'without any particular formal agenda'."),
          mc("(3)", ["chronically", "persistently", "constantly", "consistently"], 0, "'chronically underappreciated'."),
          mc("(4)", ["underpins", "supports", "sustains", "grounds"], 0, "'the familiarity… that underpins genuine civic trust'."),
          mc("(5)", ["funding", "money", "resources", "support"], 0, "'closed for lack of funding'."),
          mc("(6)", ["than", "as", "that", "which"], 0, "'more serious attention than it typically receives'."),
          mc("(7)", ["communal", "shared", "public", "collective"], 0, "'a well-used, well-loved communal space'."),
          mc("(8)", ["now", "the moment", "the time being", "the present"], 2, "'for the time being'."),
        ],
      },
      p2: {
        title: "Who builds community",
        text: "Community, contrary to a widely held but somewhat naive assumption, does not simply emerge automatically wherever people happen to live in reasonably close physical proximity to one another. It has (1)___ be actively built, sustained and continually renewed, usually through the patient, largely unrewarded efforts of a relatively small number of genuinely committed individuals prepared to organise, to show up consistently, and to do (2)___ again and again, often for years, without any expectation of significant personal reward or public recognition. Sociologists studying local community organisations have repeatedly found that a strikingly small proportion of residents — often as few (3)___ five or ten percent of any given local population — do the overwhelming bulk of the genuinely unglamorous organisational work: planning events, maintaining shared spaces, resolving inevitable neighbourly disputes, welcoming new arrivals. The rest of the community benefits considerably from this quiet, largely invisible labour without necessarily ever fully recognising or actively contributing (4)___ it themselves. This creates a real and persistent risk of what researchers term 'volunteer burnout': the small, dedicated core of active community builders gradually, sometimes suddenly, exhausting themselves, (5)___ leaving the wider community considerably more fragile than most residents had ever fully appreciated or realised. Some community organisers have begun experimenting (6)___ deliberate strategies for spreading this considerable workload more broadly and more sustainably — rotating leadership roles regularly, actively recruiting and mentoring new volunteers, celebrating community contributions publicly and consistently (7)___ to sustain ongoing motivation. Whether such deliberate strategies can genuinely broaden meaningful participation, or whether community building will simply always, inevitably depend on a small, dedicated core doing the overwhelming bulk of the actual work, remains, in truth, an open and genuinely important question for anyone who cares seriously (8)___ the health of local community life.",
        q: [
          fb("(1)", ["to"], "'It has to be actively built'."),
          fb("(2)", ["so"], "'to do so again and again'."),
          fb("(3)", ["as"], "'as few as five or ten percent'."),
          fb("(4)", ["to"], "'contributing to it'."),
          fb("(5)", ["thereby"], "'exhausting themselves, thereby leaving'."),
          fb("(6)", ["with"], "'experimenting with… strategies'."),
          fb("(7)", ["precisely", "specifically"], "'consistently precisely/specifically to sustain'."),
          fb("(8)", ["about"], "'cares seriously about the health'."),
        ],
      },
      p3: {
        title: "The empty lot that became a garden",
        text: "In a great many cities, (1)___ vacant land quietly accumulates in the gaps left behind by demolished buildings, failed developments and abandoned industrial sites — largely unnoticed, unloved plots that contribute nothing whatsoever to the surrounding community's genuine wellbeing while frequently attracting illegal dumping, general (2)___, and a corrosive, self-reinforcing sense of civic decline. Community gardening movements have, in city after city, sought to transform at least some of this quietly wasted potential into something genuinely (3)___: shared plots where local residents grow vegetables, flowers and, less tangibly but perhaps most importantly, genuine neighbourly relationships that might otherwise, in the ordinary course of busy urban life, never have had any real occasion to form. Such projects frequently begin with a small, determined handful of committed individuals negotiating (4)___ landowners, sometimes for years, simply for temporary permission to use land that would otherwise, in any case, continue sitting entirely idle and unproductive. The (5)___ transformation, once achieved and properly established, can be genuinely striking: a formerly derelict eyesore becomes a genuinely valued communal (6)___, drawing in neighbours who might otherwise rarely, if ever, have had any meaningful occasion to interact directly with one another. Critics, not (7)___ mention certain landowners understandably anxious about eventual liability, have sometimes resisted such projects, worried about issues ranging from insurance costs to basic long-term (8)___ once the original founding volunteers, as founding volunteers eventually and inevitably do, gradually move on or lose interest. Notwithstanding these entirely legitimate practical concerns, community gardens have proliferated steadily in recent years, testament to a genuine and widely shared hunger for exactly the kind of meaningful, hands-on communal space that so much contemporary urban development has quietly, and rather carelessly, failed to provide.",
        items: [
          { root: "use", accepted: ["unused"], hint: "'unused vacant land' → unused." },
          { root: "neglect", accepted: ["neglect"], hint: "'illegal dumping, general neglect' (sustantivo)." },
          { root: "value", accepted: ["valuable"], hint: "'something genuinely valuable' → valuable." },
          { root: "patient", accepted: ["patiently"], hint: "'negotiating patiently with landowners' → patiently." },
          { root: "result", accepted: ["resulting"], hint: "'The resulting transformation' → resulting." },
          { root: "assets", accepted: ["asset"], hint: "'a genuinely valued communal asset' → asset." },
          { root: "to", accepted: ["to"], hint: "'not to mention' (partícula)." },
          { root: "sustain", accepted: ["sustainability"], hint: "'basic long-term sustainability' → sustainability." },
        ],
      },
      p4: {
        title: "Transformaciones — elipsis, sustitución y referencia",
        items: [
          { s1: "I preferred the old bench design to the new bench design.", key: "ONE", s2: "I preferred the old design to the new ___.", accepted: ["one"], explanation: "sustitución: one." },
          { s1: "Will the community centre reopen? I believe it will reopen.", key: "SO", s2: "Will the community centre reopen? I believe ___.", accepted: ["so"], explanation: "sustitución de cláusula: so." },
          { s1: "Residents were asked to volunteer, and many volunteered.", key: "SO", s2: "Residents were asked to volunteer, and many did ___.", accepted: ["so"], explanation: "do so." },
          { s1: "She wanted to help organise the event, but she couldn't help organise the event.", key: "COULDN'T", s2: "She wanted to help organise the event, but ___.", accepted: ["couldn't"], explanation: "elipsis tras modal." },
          { s1: "Both the garden and the library received funding; the garden needed it more.", key: "FORMER", s2: "Both the garden and the library received funding; the ___ needed it more.", accepted: ["former"], explanation: "the former (el primero mencionado)." },
          { s1: "Initiatives like this one require genuine community buy-in to succeed.", key: "SUCH", s2: "___ initiatives require genuine community buy-in to succeed.", accepted: ["Such"], explanation: "such + sustantivo (referencia)." },
        ],
      },
      p5: {
        title: "The bench that started a movement",
        text: "It began, as so many significant community initiatives often unassumingly do, with something almost absurdly small: one elderly resident, frustrated that there was nowhere within comfortable walking distance to sit and rest along her regular route to the local shops, simply bought a single, modest wooden bench with her own limited savings and, without seeking any formal permission whatsoever, placed it on a quiet, unremarkable stretch of pavement near her own home.\n\nWithin days, she noticed something she had not particularly anticipated. Neighbours she had lived near for years but scarcely knew began pausing there to rest, and, more significantly, to talk — brief, casual exchanges at first, then gradually longer, more substantial ones, as the bench became an informal, entirely unplanned meeting point for an increasingly wide and diverse cross-section of the local community. An elderly man recovering slowly from hip surgery found he could finally manage the walk to the local shops again, provided he could rest partway there and, crucially, back again. A tired young mother pushing a heavy pram discovered she had somewhere convenient to pause and briefly chat with other similarly exhausted parents she might otherwise never have properly got to know.\n\nEncouraged by this small but genuinely unexpected success, and by the steadily growing, informal community that had spontaneously formed around her single modest bench, she began quietly, persistently lobbying the local council for permission to install several more benches at other carefully chosen, similarly underserved locations throughout the wider neighbourhood. What started as one informal, unauthorised bench had, within roughly two years, become a recognised, semi-official local movement, with residents in several genuinely comparable neighbourhoods nearby beginning to organise broadly similar projects of their own, inspired directly by her modest, almost accidental original example.\n\nUrban researchers who eventually studied this small but genuinely striking phenomenon identified it as a particularly clear, almost textbook illustration of what planners now term 'tactical urbanism' — small-scale, low-cost, often informally initiated interventions that can, cumulatively, produce outcomes considerably larger and more significant than their modest individual scale would initially, and rather misleadingly, suggest. The original bench itself cost remarkably little; the community connections it subsequently, almost accidentally fostered proved, by any reasonable measure, genuinely priceless.\n\nWhat the story illustrates, perhaps most tellingly of all, is how much of genuine community life depends not on grand, expensive, carefully centrally planned interventions but on the humbler, more modest infrastructure of everyday, ordinary gathering: somewhere convenient to sit, somewhere reasonably comfortable to pause, somewhere that quietly, almost invisibly, makes chance encounters and casual conversation just that little bit more likely to happen at all. Cities investing heavily in ambitious, headline-grabbing flagship projects might usefully pause, this particular story suggests, to consider what a single, well-placed, unassuming bench can sometimes achieve considerably more cheaply, and arguably just as effectively, in its own quiet, unglamorous way.",
        q: [
          mc("How did the initiative begin?", ["With a large council grant.", "One resident bought and placed a single bench without formal permission.", "A committee planned it.", "A business sponsored it."], 1, "'she simply bought a single, modest wooden bench… without seeking any formal permission whatsoever'."),
          mc("What did the bench become?", ["Nothing much.", "An informal meeting point for the local community.", "A tourist attraction.", "A source of complaints."], 1, "'the bench became an informal, entirely unplanned meeting point'."),
          mc("What did the resident do after the initial success?", ["Stopped there.", "Lobbied the council for permission to install more benches elsewhere.", "Removed the bench.", "Sold the bench."], 1, "'began quietly, persistently lobbying the local council for permission to install several more benches'."),
          mc("What did urban researchers call this phenomenon?", ["Urban decay.", "'Tactical urbanism'.", "Gentrification.", "Civic engineering."], 1, "'a particularly clear… illustration of what planners now term \"tactical urbanism\"'."),
          mc("What does the story suggest about community life?", ["It requires grand, expensive projects.", "It depends on humble, everyday infrastructure like somewhere to sit.", "It cannot be planned.", "It requires no infrastructure at all."], 1, "'how much of genuine community life depends… on the humbler, more modest infrastructure of everyday… gathering'."),
          mc("What does the writer suggest cities might learn from this story?", ["To avoid small projects.", "That a well-placed bench can achieve as much as expensive flagship projects.", "To focus only on large projects.", "That community can't be built deliberately."], 1, "'what a single, well-placed, unassuming bench can sometimes achieve considerably more cheaply, and arguably just as effectively'."),
        ],
      },
      p6: {
        title: "Who should design public spaces?",
        intro: "Cuatro personas debaten quién debería diseñar los espacios públicos.",
        texts: {
          A: "NADIA: I firmly believe residents themselves should lead the design process, not distant professionals. Trained planners, however well-intentioned, simply don't have the intimate, lived knowledge that people who actually use a space every single day possess. Genuine community consultation, done properly and taken seriously, consistently produces spaces people actually value and take care of long-term.",
          B: "TOM: I'd push back a little on that. Purely resident-led design can sometimes replicate existing inequalities, since the most vocal, most engaged residents aren't always representative of the wider, more silent community. Professional planners bring genuinely valuable technical expertise and, crucially, an outsider's perspective that can meaningfully counterbalance narrower, more parochial local interests.",
          C: "PRIYA: My view is that the real answer lies somewhere genuinely in between. The best projects I've personally seen combine professional technical expertise with deep, sustained community input, rather than treating these as mutually exclusive alternatives. Neither residents alone nor planners alone reliably produce the best outcomes on their own.",
          D: "SAM: What I keep coming back to is process, more than any specific outcome. However a space eventually gets designed, genuine, ongoing community involvement in maintaining and actively stewarding it afterwards matters just as much as who originally designed it in the first place. A beautifully designed space that nobody in the community feels any real ownership over tends, in my experience, to fail regardless.",
        },
        q: [
          mc("Who believes residents themselves should lead the design process?", ["A", "B", "C", "D"], 0, "Nadia: 'residents themselves should lead the design process'."),
          mc("Whose view most directly QUALIFIES Nadia's, warning about representativeness?", ["A", "B", "C", "D"], 1, "Tom: 'Purely resident-led design can sometimes replicate existing inequalities'."),
          mc("Who argues the best approach combines professional and community input?", ["A", "B", "C", "D"], 2, "Priya: 'combine professional technical expertise with deep, sustained community input'."),
          mc("Who emphasises ongoing stewardship over who originally designed a space?", ["A", "B", "C", "D"], 3, "Sam: 'genuine, ongoing community involvement in maintaining… it afterwards matters just as much'."),
        ],
      },
      p7: {
        title: "The park nobody visited",
        text: "City officials were, by their own later admission, genuinely puzzled. (1)___\n\nThey had built, at considerable expense, a new park in a neighbourhood that had, by every conventional planning metric, seemed to need one badly: dense housing, limited existing green space, a demonstrably growing local population. (2)___ And yet, months after its celebrated opening, the park remained conspicuously, almost eerily empty.\n\nWhat had gone wrong became clearer only once researchers began actually talking directly to local residents, rather than simply consulting planning documents and statistics. (3)___ The park, it turned out, had been designed almost entirely without any meaningful local input, based instead on a generic, one-size-fits-all template used across the wider city.\n\nResidents, when finally properly asked, pointed to several specific, concrete problems. (4)___ There was nowhere shaded to sit during the punishing local summer heat; the play equipment suited much younger children than those who actually predominantly lived nearby; and, perhaps most tellingly of all, nobody local had ever been meaningfully asked what they themselves would actually want or use.\n\nThe city eventually returned, chastened, to redesign the space properly, this time through extensive, genuine community consultation from the very outset. (5)___ Shade structures were added; teenagers, previously entirely overlooked, got a modest but genuinely dedicated space of their own.\n\nThe redesigned park, once reopened, filled with people almost immediately. (6)___ The lesson, though costly to relearn the hard way, was hardly complicated: people use spaces they had some genuine hand in actually shaping.",
        options: [
          "Why, they wondered, was a clearly needed park sitting unused?", // A -> gap 1
          "On paper, every box had seemingly been carefully ticked.",      // B -> gap 2
          "A rather different, more human story soon began to emerge.",    // C -> gap 3
          "The mismatch between design and daily reality was stark.",     // D -> gap 4
          "This time, the results looked genuinely different.",           // E -> gap 5
          "The difference, this time, was immediate and unmistakable.",   // F -> gap 6
          "Every park a city builds is automatically well used.",         // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: por qué un parque necesario estaba vacío."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: sobre el papel, todo cuadraba."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: surgió una historia más humana."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: el desajuste era evidente."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: esta vez los resultados fueron distintos."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la diferencia fue inmediata."),
        ],
      },
      p8: {
        title: "Four people discuss their local community",
        text: "Read what four people say about their experience of local community life.\n\nA) NADIA: I organised a small street festival two years ago, and I genuinely didn't expect it to become an annual tradition. It did, though, and now neighbours who barely nodded to each other before actually know each other's names. I did so mostly out of boredom, if I'm honest, but the result has been something I never anticipated.\n\nB) TOM: Our local library was threatened with closure, and a small group of us fought hard to save it. We won, eventually, but it took nearly three years of sustained, exhausting campaigning. I sometimes wonder whether most residents who now use it daily have any idea how close it came to disappearing entirely.\n\nC) PRIYA: I moved to a new neighbourhood and knew genuinely nobody. I joined a community gardening group mostly on impulse, not expecting much, and it completely transformed my experience of actually living there. I now have real, close friends I'd never otherwise have properly met.\n\nD) SAM: I've watched our neighbourhood association gradually shrink to just a handful of exhausted, ageing volunteers doing all the genuine work. Everyone else benefits from what we quietly organise, but almost nobody actually helps out. I do worry, honestly, about what happens once we finally, inevitably burn out completely.\n",
        q: [
          mc("Who organised a street festival that became an annual tradition?", ["A", "B", "C", "D"], 0, "Nadia: 'I organised a small street festival two years ago… It did… become an annual tradition'."),
          mc("Who fought to save a local library from closure?", ["A", "B", "C", "D"], 1, "Tom: 'Our local library was threatened with closure, and a small group of us fought hard to save it'."),
          mc("Who joined a community gardening group after moving somewhere new?", ["A", "B", "C", "D"], 2, "Priya: 'I joined a community gardening group… it completely transformed my experience'."),
          mc("Who worries about volunteer burnout in their neighbourhood association?", ["A", "B", "C", "D"], 3, "Sam: 'I do worry… about what happens once we finally… burn out'."),
          mc("Who did the organising mostly out of boredom?", ["A", "B", "C", "D"], 0, "Nadia: 'I did so mostly out of boredom'."),
          mc("Whose campaign took nearly three years?", ["A", "B", "C", "D"], 1, "Tom: 'it took nearly three years of sustained, exhausting campaigning'."),
          mc("Who now has close friends they'd never otherwise have met?", ["A", "B", "C", "D"], 2, "Priya: 'I now have real, close friends I'd never otherwise have properly met'."),
          mc("Who says only a handful of people do all the genuine community work?", ["A", "B", "C", "D"], 3, "Sam: 'a handful of exhausted, ageing volunteers doing all the genuine work'."),
          mc("Who wonders if others know how close their library came to closing?", ["A", "B", "C", "D"], 1, "Tom: 'I sometimes wonder whether most residents… have any idea how close it came to disappearing'."),
          mc("Who joined a group not expecting much, on impulse?", ["A", "B", "C", "D"], 2, "Priya: 'mostly on impulse, not expecting much'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre los espacios públicos se plantearon dos ideas:\n· public spaces should be designed by professional planners (deberían diseñarlos profesionales)\n· public spaces should be designed by the communities that use them (deberían diseñarlos las comunidades)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de cohesión de la semana (one/ones, do so, the former/the latter, such). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'A small thing that made a big difference in my community' — cuenta una historia real o imaginada.\n· INFORME para una asociación de vecinos sobre cómo fomentar la participación comunitaria: Introduction / Findings / Recommendations.", 220, 260),

    LISTENING_HEAD,
    listening(3, "Listening · Parte 3 — Conversación larga (6 MC)", "Escucha una conversación entre dos personas, Kofi y Elena, sobre la vida comunitaria (se oye dos veces). Elige la respuesta correcta (A/B/C/D).", "This is Part Three. You will hear two people, Kofi and Elena, discussing community life. Elena: Kofi, you've lived in the same neighbourhood for thirty years. Has it changed much? Kofi: Enormously. There used to be a strong sense of community here; now there's considerably less of it, if I'm honest. Elena: What do you think happened? Kofi: A few things. People work longer hours than they used to, for one. And the local café that used to be the real hub of the neighbourhood closed down years ago — nowhere quite replaced it. Elena: Did anyone try to fix that? Kofi: A few of us did try, actually. We started a monthly street gathering, and quite a few neighbours have kept coming ever since. Elena: That sounds encouraging. Do you think it's made a real difference? Kofi: I believe so, yes. It's small, but it's something. The friendships that have formed there wouldn't otherwise have happened, I don't think. Elena: Would you recommend other neighbourhoods try something similar? Kofi: Absolutely. You don't need much — just somewhere for people to gather regularly, and a bit of persistence from a few committed people willing to organise it.", [
      mc("1. How has Kofi's neighbourhood changed over thirty years?", ["It's the same.", "There's considerably less sense of community now.", "It's improved dramatically."], 1, "'now there's considerably less of it'."),
      mc("2. What does Kofi mention as one cause?", ["Better transport.", "People working longer hours.", "More parks."], 1, "'People work longer hours than they used to, for one'."),
      mc("3. What happened to the local café?", ["It's still open.", "It closed down years ago.", "It expanded."], 1, "'the local café… closed down years ago'."),
      mc("4. What did Kofi and others do about it?", ["Nothing.", "Started a monthly street gathering.", "Reopened the café."], 1, "'We started a monthly street gathering'."),
      mc("5. Does Kofi think the gathering has made a difference?", ["No.", "Yes, he believes so.", "He's unsure."], 1, "'I believe so, yes'."),
      mc("6. What does Kofi recommend for other neighbourhoods?", ["Nothing can be done.", "Somewhere to gather regularly and persistent organisers.", "More funding only."], 1, "'just somewhere for people to gather regularly, and a bit of persistence'."),
    ]),

    ...speakingParts({ p1: "qué sentido de comunidad hay en tu barrio y si participas en actividades locales", p2: "dos imágenes de espacios comunitarios (un parque lleno de gente interactuando y una plaza vacía y descuidada): compáralas y especula sobre por qué uno funciona y el otro no", p3: "qué fomenta mejor la vida comunitaria (espacios de encuentro, eventos locales, voluntariado, participación en el diseño urbano, tiempo libre compartido): comentadlo y elegid lo más eficaz", p4: "los espacios públicos y la comunidad: quién debería diseñarlos, si la vida comunitaria se ha debilitado con el tiempo y qué se necesita para reconstruirla" }),

    SUMMARY("Resumen del Día 23", [
      "Elipsis: omitir elementos recuperables por contexto (tras auxiliares/modales, en coordinación).",
      "Sustitución: one/ones (sustantivo), do so/this/that (verbo+complemento), so/not (cláusula tras think/believe/hope). Referencia: this/that/such, the former/the latter.",
      "Vocabulario de espacios públicos y comunidad. Practicadas las 8 partes de Use of English, Writing, Listening P3 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 24", "Escribe 6 frases usando elipsis, sustitución o referencia. Repasa las flashcards. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 24 ─────────────────────────
const DAY24 = {
  title: "Día 24 — Reformulación y resumen del discurso · El ocio y el tiempo libre",
  description: "Marcadores de reformulación (in other words, that is (to say), namely) y de resumen/generalización (in short, all in all, on the whole, by and large). Vocabulario de ocio. Las 4 destrezas (formato C1); Listening P4.",
  pedagogy: {
    objective: "Reformular y resumir ideas con precisión usando los marcadores propios del registro académico C1.",
    summary: "Reformulación y resumen; ocio y tiempo libre; Use of English P1–P8, Writing, Listening P4, Speaking P1–P4.",
    commonMistakes: ["confundir 'namely' (especificar/enumerar) con 'that is' (aclarar/reformular).", "'on the whole' usado para un solo caso concreto, no una generalización.", "'in other words' sin aportar una reformulación real, solo repetición literal."],
    reviewPrompts: ["¿Qué diferencia hay entre 'namely' y 'that is to say'?", "¿Cuándo usarías 'by and large' en vez de 'always'?"],
  },
  items: [
    TEXT("🔁 Ayer, elipsis y sustitución. Hoy la REFORMULACIÓN y el RESUMEN del discurso: cómo aclarar, especificar y generalizar con precisión. Vocabulario: el OCIO y el TIEMPO LIBRE."),
    GRAMMAR("Reformulación y resumen del discurso", `REFORMULACIÓN (aclarar o decir lo mismo de otra forma):
· IN OTHER WORDS (reformula de forma más simple/clara): The scheme is means-tested; in other words, only low earners qualify.
· THAT IS (TO SAY) (aclara o precisa, más formal): Leisure time has increased; that is to say, the average working week has shortened.
· NAMELY (introduce una ESPECIFICACIÓN concreta, a menudo una lista): Two groups benefit most, namely retirees and students.
· TO PUT IT ANOTHER WAY (reformula de forma más accesible/informal-formal): Free time is not the same as quality time; to put it another way, more hours doesn't mean more happiness.
RESUMEN Y GENERALIZACIÓN:
· IN SHORT / IN BRIEF (resume lo dicho, conclusión breve): In short, leisure has become a marker of social status.
· ALL IN ALL / OVERALL (resumen ponderado, tras varios puntos): All in all, the benefits outweigh the drawbacks.
· ON THE WHOLE / BY AND LARGE (generalización con matiz de "en general, no siempre"): On the whole, people work fewer hours than a century ago. By and large, leisure activities have diversified.
⚠️ Estos marcadores organizan el discurso largo (Reading P5-P8, Writing) y son clave para un ensayo bien estructurado de nivel C1.`),
    WARN("Errores típicos del hispanohablante (C1)", "· ❌ 'Namely' para aclarar sin especificar (usa 'that is' si no das una lista/nombre concreto).\n· ❌ 'On the whole, everyone loves it' (contradice el matiz de generalización moderada) → mejor 'By and large' + algo que admite excepciones.\n· 'In other words' debe aportar una reformulación GENUINA, no repetir literalmente lo mismo.\n· 'In short' resume; no lo uses para introducir información nueva no mencionada antes."),
    grammarEx("Use of English — Reformulación y resumen", "Elige el marcador correcto.", [
      mc("The scheme is means-tested; ___, only low earners qualify.", ["in other words", "namely", "all in all"], 0, "in other words (reformula más simple)."),
      mc("Two groups benefit most, ___ retirees and students.", ["namely", "that is", "in short"], 0, "namely (especificación concreta)."),
      mc("___, the benefits of shorter working weeks outweigh the drawbacks.", ["All in all", "Namely", "That is"], 0, "all in all (resumen ponderado)."),
      mc("___, people today have more leisure time than a century ago.", ["On the whole", "Namely", "In other words"], 0, "on the whole (generalización con matiz)."),
      mc("Leisure time has increased; ___, the average working week has shortened.", ["that is to say", "namely", "all in all"], 0, "that is to say (aclara/precisa)."),
      mc("___, leisure has become as much a marker of status as work itself.", ["In short", "Namely", "By and large"], 0, "in short (conclusión breve)."),
      mc("___ , most people prefer active leisure to passive relaxation, though not everyone.", ["By and large", "Namely", "In other words"], 0, "by and large (generalización con excepciones)."),
    ]),
    GRAMMAR("Vocabulario del día — El ocio y el tiempo libre (C1)", "Léxico avanzado de ocio."),
    deck("C1 S5D24 — Ocio y tiempo libre", [
      ["leisure", "ocio", "Leisure time is increasingly scarce.", "sustantivo", "ˈleʒə"],
      ["downtime", "tiempo de descanso / inactividad", "Everyone needs some downtime.", "sustantivo", "ˈdaʊntaɪm"],
      ["hobby", "afición / pasatiempo", "Gardening is her favourite hobby.", "sustantivo", "ˈhɒbi"],
      ["unwind", "relajarse / desconectar", "I unwind by reading in the evening.", "verbo", "ˌʌnˈwaɪnd"],
      ["leisure industry", "industria del ocio", "The leisure industry has boomed.", "sustantivo", "ˈleʒər ˈɪndəstri"],
      ["recreational", "recreativo/a", "Recreational activities boost wellbeing.", "adjetivo", "ˌrekriˈeɪʃənl"],
      ["indulge", "darse un capricho / permitirse", "I indulge in a long bath weekly.", "verbo", "ɪnˈdʌldʒ"],
      ["sedentary", "sedentario/a", "Too much leisure time is sedentary.", "adjetivo", "ˈsedntri"],
      ["pastime", "pasatiempo", "Reading is a wonderfully cheap pastime.", "sustantivo", "ˈpɑːstaɪm"],
      ["fulfilling", "gratificante / que llena", "She finds painting deeply fulfilling.", "adjetivo", "fʊlˈfɪlɪŋ"],
    ]),
    vocabEx("Vocabulario — El ocio y el tiempo libre", "Elige la opción correcta.", [
      mc("Free time away from work or obligations is ___.", ["leisure", "downtime", "pastime"], 0, "leisure."),
      mc("An activity done regularly for pleasure is a ___.", ["hobby", "leisure industry", "recreational"], 0, "hobby."),
      mc("To relax after stress or hard work is to ___.", ["unwind", "indulge", "sedentary"], 0, "unwind."),
      mc("To treat yourself to something pleasurable is to ___ in it.", ["indulge", "unwind", "fulfil"], 0, "indulge."),
      mc("Involving little physical movement is ___.", ["sedentary", "recreational", "fulfilling"], 0, "sedentary."),
      mc("Giving a deep sense of satisfaction is being ___.", ["fulfilling", "sedentary", "recreational"], 0, "fulfilling."),
    ]),

    ...uoe({
      p1: {
        title: "The tyranny of optimised leisure",
        text: "There is a peculiar, distinctly modern irony in how many people now approach their supposedly free time: they organise it with the same relentless, results-oriented efficiency they once (1)___ reserved for their paid work. Leisure, once understood simply as unstructured time free from obligation, has for many become, in effect, another (2)___ to be optimised — tracked, measured, and evaluated for its productivity, much like any other item on a demanding to-do list. Fitness apps quantify our supposedly relaxing walks; meditation apps track our supposedly effortless mindfulness streaks; even reading, that most traditionally unhurried of pastimes, gets logged, rated and shared, transformed into another visible achievement to be recorded and displayed. In other words, the very boundary between (3)___ and leisure has, for many people, become genuinely difficult to locate at all. This matters because genuine rest, psychologists increasingly argue, requires precisely the kind of unstructured, unmeasured, (4)___ time that our optimisation culture finds almost instinctively uncomfortable to simply allow. By and large, the people who report the deepest, most genuine sense of restoration are not those who have most efficiently 'maximised' their leisure hours, but those who have (5)___ themselves permission to do, at least occasionally, genuinely nothing much at all. That said, this is not an argument (6)___ all structured leisure, which can, of course, be genuinely fulfilling and worthwhile in its own right. It is, rather, an argument for preserving at least some space, however small, that resists the pull towards constant, anxious measurement and (7)___ improvement. All in all, the capacity to simply waste time occasionally, without guilt and without any tracked, measurable outcome whatsoever, may be one of the more (8)___ and genuinely necessary luxuries that our relentlessly productive age has quietly, almost imperceptibly, allowed to slip away.",
        q: [
          mc("(1)", ["exclusively", "solely", "purely", "strictly"], 0, "'once exclusively reserved'."),
          mc("(2)", ["project", "task", "goal", "target"], 1, "'another task to be optimised'."),
          mc("(3)", ["labour", "work", "duty", "job"], 1, "'the boundary between work and leisure'."),
          mc("(4)", ["unhurried", "unrushed", "leisurely", "relaxed"], 0, "'unstructured, unmeasured, unhurried time'."),
          mc("(5)", ["given", "granted", "allowed", "permitted"], 0, "'have given themselves permission'."),
          mc("(6)", ["against", "for", "about", "over"], 0, "'an argument against all structured leisure'."),
          mc("(7)", ["constant", "continual", "ceaseless", "perpetual"], 0, "'constant… improvement'."),
          mc("(8)", ["precious", "valuable", "important", "significant"], 0, "'one of the more precious… luxuries'."),
        ],
      },
      p2: {
        title: "Who has time to relax",
        text: "Leisure, contrary to what the word itself might casually suggest, is not distributed remotely evenly across modern society. Those (1)___ the most demanding, least flexible, lowest-paid jobs frequently have the least genuine leisure time, and what little downtime they do genuinely have is often disrupted by unpredictable shift patterns, exhausting second jobs, or unavoidable caregiving responsibilities that leave precious little energy for anything resembling genuine, restorative relaxation. Meanwhile, (2)___ higher up the income scale sometimes report having more theoretical free time available but paradoxically struggle considerably more to actually switch off from constant work-related communication, given the 'always-on' professional culture that now increasingly characterises many well-paid, high-status jobs. In other words, both genuine time scarcity and a chronic, nagging inability to properly disconnect can each, in their own quite different ways, undermine restorative leisure, (3)___ operating through very different underlying mechanisms and affecting rather different segments of the workforce. This complicates any simple, straightforward narrative about leisure inequality; it is not merely (4)___ some people have more free hours than others, but that the genuine QUALITY of available leisure time — how relaxed, how uninterrupted, how genuinely restorative it actually manages to be — varies considerably (5)___ social class and occupation in ways that raw hour-counts alone simply cannot adequately capture or reveal. By and large, research increasingly suggests that a shorter but genuinely uninterrupted, protected period of rest restores people considerably more effectively (6)___ a longer stretch of nominally 'free' time still constantly punctuated by work-related notifications, anxious mental rehearsal, or unavoidable caregiving demands. Namely, it is the QUALITY of leisure, (7)___ than its raw quantity, that appears to matter most for genuine, lasting wellbeing — a finding with real, significant implications for how both employers and policymakers alike might usefully think (8)___ designing genuinely restorative working patterns going forward.",
        q: [
          fb("(1)", ["with", "in"], "'Those with/in the most demanding… jobs'."),
          fb("(2)", ["those"], "'those higher up the income scale'."),
          fb("(3)", ["each", "while"], "'each operating through very different mechanisms'."),
          fb("(4)", ["that"], "'not merely that some people have more'."),
          fb("(5)", ["by", "with"], "'varies considerably by social class'."),
          fb("(6)", ["than"], "'restores people… more effectively than'."),
          fb("(7)", ["rather"], "'rather than its raw quantity'."),
          fb("(8)", ["about"], "'think about designing'."),
        ],
      },
      p3: {
        title: "The rise of the side hustle",
        text: "A striking cultural shift has taken (1)___ in how many people, particularly younger workers, now relate to their own supposedly leisure hours. What was once, for earlier generations, straightforwardly regarded as free time for genuine rest, hobbies or family life has, for a considerable and rapidly growing number of people, become instead an opportunity for what is now widely termed a 'side hustle' — an additional, often precarious income stream pursued during hours nominally set aside for leisure and personal restoration. This shift reflects, in part, genuine, often acute economic (2)___: stagnant wages, rising living costs, and a chronic, deeply felt sense of financial insecurity have pushed many people to monetise skills and hobbies that previous generations would have simply, unselfconsciously enjoyed for their own intrinsic sake, without any thought whatsoever of turning them into a viable secondary income stream. But it also reflects, researchers suggest, a deeper (3)___ shift regarding how leisure itself is now culturally valued and understood. In a culture that increasingly celebrates visible hustle, tangible productivity and relentless self-improvement, simply relaxing without any obvious tangible output to show for it can come to feel, to many people, oddly indefensible or even faintly, uncomfortably shameful. The (4)___ irony, of course, is that a hobby deliberately monetised frequently stops delivering the same genuine psychological benefits it once reliably did when pursued purely and simply for its own sake, since the introduction of external financial pressure and performance expectation can subtly, sometimes quite dramatically, transform what was once genuinely restorative into something considerably closer to yet another demanding, high-stakes job. On the whole, researchers studying this pronounced trend suggest that genuinely, deliberately protecting at least some leisure time entirely from any (5)___ pressure, however modest that pressure initially seems, may prove genuinely essential for preserving the real, distinctive psychological benefits that unstructured leisure has always reliably, historically provided.",
        items: [
          { root: "place", accepted: ["place"], hint: "'has taken place' (sustantivo con 'take')." },
          { root: "press", accepted: ["pressure"], hint: "'acute economic pressure' → pressure." },
          { root: "cult", accepted: ["cultural"], hint: "'a deeper cultural shift' → cultural." },
          { root: "bitter", accepted: ["bitter"], hint: "'The bitter irony' (adjetivo)." },
          { root: "monetary", accepted: ["monetary"], hint: "'any monetary pressure' (adjetivo)." },
        ],
      },
      p4: {
        title: "Transformaciones — reformulación y resumen",
        items: [
          { s1: "Only low earners qualify for the scheme; that is the simple explanation.", key: "WORDS", s2: "The scheme is means-tested; in other ___, only low earners qualify.", accepted: ["words"], explanation: "in other words." },
          { s1: "Two specific groups benefit most: retirees and students.", key: "NAMELY", s2: "Two groups benefit most, ___ retirees and students.", accepted: ["namely"], explanation: "namely (especificación)." },
          { s1: "To summarise everything, the benefits outweigh the drawbacks.", key: "ALL", s2: "All in ___, the benefits outweigh the drawbacks.", accepted: ["all"], explanation: "all in all (resumen)." },
          { s1: "Generally speaking, people have more leisure time than a century ago, though not everyone.", key: "WHOLE", s2: "On the ___, people have more leisure time than a century ago.", accepted: ["whole"], explanation: "on the whole (generalización)." },
          { s1: "To put it briefly, leisure has become a status symbol.", key: "SHORT", s2: "In ___, leisure has become a status symbol.", accepted: ["short"], explanation: "in short (resumen breve)." },
          { s1: "Generally, most people prefer active leisure, with some exceptions.", key: "LARGE", s2: "By and ___, most people prefer active leisure.", accepted: ["large"], explanation: "by and large (generalización con matiz)." },
        ],
      },
      p5: {
        title: "The man who quit to do nothing",
        text: "After a punishing fifteen-year career in investment banking that had left him, by his own later account, thoroughly exhausted, chronically anxious and only vaguely aware of what he actually enjoyed doing outside work anymore, a successful executive made a decision that struck nearly everyone who knew him as genuinely, almost alarmingly extreme: he resigned from his lucrative, high-status position with no specific plan whatsoever for what would come next, determined simply to do, in his own words, 'as close to nothing as I can reasonably manage' for at least a full year.\n\nHis friends and former colleagues, by and large, reacted with a mixture of open envy and quiet, barely concealed alarm. Several warned him, not unkindly, that unstructured time without any clear purpose or plan could prove considerably more psychologically difficult than he currently, rather naively, imagined; a mind accustomed for fifteen years to constant, relentless stimulation and measurable achievement, they suggested, might struggle badly, even painfully, to simply sit still with nothing scheduled and nothing to visibly show for its time.\n\nThey were, as it turned out, only partly wrong. The first several months, he later readily admitted, were genuinely difficult in ways he had not remotely anticipated beforehand. Freed at last from his previous relentless schedule, he found himself, rather to his own surprise, instinctively reaching for new goals to pursue, new metrics to track, new forms of self-improvement to relentlessly optimise — old, deeply ingrained habits proving considerably harder to fully shed than he had initially, rather optimistically, assumed they would be.\n\nWhat gradually, slowly changed things, he explained afterwards, was a deliberate, sustained practice of simply noticing, and then consciously resisting, this persistent, almost automatic pull towards constant self-improvement and measurable achievement. Rather than filling his considerable newfound free time with ambitious new projects, he began, tentatively at first, actually allowing himself extended periods of genuine boredom, uninterrupted daydreaming, and activities pursued purely, simply for their own immediate, unmeasured enjoyment, without any thought whatsoever of eventual, external outcome.\n\nIn other words, he had to consciously, deliberately relearn a basic capacity that most young children still possess instinctively and effortlessly but that many adults, he came to believe, gradually and almost entirely lose somewhere along the busy way: the simple ability to be genuinely, contentedly present in an unstructured, unproductive moment without any accompanying anxious pull towards optimising or somehow improving upon it.\n\nBy the end of his self-imposed year away from work, he reported, to his own considerable surprise, feeling more genuinely rested, more authentically creative and more reliably content than at almost any previous point in his demanding adult working life. He eventually returned to paid employment, though notably in a rather different, less relentlessly demanding role, but he credits that deliberate, difficult year of learning to properly do nothing much at all with fundamentally, permanently changing his entire relationship with both work and leisure alike. All in all, his experience points to something that researchers studying rest and burnout have increasingly, independently confirmed: that genuine restoration frequently requires not more elaborately organised leisure activities, but considerably less relentless organisation altogether — the deliberate, sometimes uncomfortable cultivation of unstructured time we have, collectively, almost entirely forgotten how to properly, comfortably tolerate.",
        q: [
          mc("Why did the executive resign from his job?", ["He was fired.", "He was exhausted and wanted to do 'as close to nothing as possible' for a year.", "He got a better offer.", "He retired normally."], 1, "'determined simply to do… \"as close to nothing as I can reasonably manage\"'."),
          mc("How did his friends generally react?", ["With total approval.", "With a mixture of envy and alarm.", "With indifference.", "With anger."], 1, "'reacted with a mixture of open envy and quiet… alarm'."),
          mc("What did he initially struggle with during his time off?", ["Boredom was easy immediately.", "He instinctively reached for new goals and metrics to track.", "He had no free time.", "He returned to work immediately."], 1, "'he found himself… instinctively reaching for new goals to pursue, new metrics to track'."),
          mc("What gradually changed things for him?", ["A new job offer.", "Deliberately noticing and resisting the pull towards constant self-improvement.", "Financial pressure.", "Advice from a therapist only."], 1, "'a deliberate, sustained practice of simply noticing, and then consciously resisting, this persistent… pull'."),
          mc("How did he feel by the end of his year off?", ["Worse than before.", "More rested, creative and content than at almost any previous point.", "Unchanged.", "Bored and unhappy."], 1, "'feeling more genuinely rested, more authentically creative and more reliably content'."),
          mc("What does his experience suggest, according to researchers?", ["More organised leisure is always better.", "Genuine restoration requires less relentless organisation, not more.", "Work is always better than leisure.", "A year off is necessary for everyone."], 1, "'genuine restoration frequently requires not more elaborately organised leisure activities, but considerably less relentless organisation altogether'."),
        ],
      },
      p6: {
        title: "Is 'productive leisure' a contradiction?",
        intro: "Cuatro personas debaten si el 'ocio productivo' es una contradicción en sí misma.",
        texts: {
          A: "NADIA: I think the whole idea is fundamentally self-defeating. The moment leisure becomes about achieving something measurable, it stops functioning as genuine leisure at all, in other words, and becomes just another form of unpaid work. Real rest, by definition, requires releasing the constant urge to optimise absolutely everything we do.",
          B: "TOM: I'd push back on that. Some of my most restorative activities are also genuinely productive — I learn languages for pleasure, and I've become fluent in two as a direct result. That said, I don't experience it as work at all; the productivity is simply a welcome byproduct of something I already, genuinely enjoy doing for its own sake.",
          C: "PRIYA: What matters, surely, is intention rather than outcome as such. If you learn a language because you love it and happen to become fluent, that's genuinely different, psychologically speaking, from forcing yourself to learn one purely because you feel you ought to be constantly improving yourself. Same visible activity, but a completely different internal, psychological experience.",
          D: "SAM: My honest concern is that this entire debate assumes leisure needs some sort of higher justification in the first place. Why can't relaxation simply be valuable purely because it feels good, full stop, without needing to also somehow prove its worth through skills gained or measurable self-improvement achieved? That framing itself, I'd argue, is already part of the underlying problem.",
        },
        q: [
          mc("Who thinks 'productive leisure' is fundamentally self-defeating?", ["A", "B", "C", "D"], 0, "Nadia: 'I think the whole idea is fundamentally self-defeating'."),
          mc("Whose view most directly CHALLENGES Nadia's, citing personal experience of enjoyable, productive leisure?", ["A", "B", "C", "D"], 1, "Tom: 'Some of my most restorative activities are also genuinely productive'."),
          mc("Who argues intention matters more than outcome?", ["A", "B", "C", "D"], 2, "Priya: 'What matters, surely, is intention rather than outcome as such'."),
          mc("Who questions why leisure needs any justification at all?", ["A", "B", "C", "D"], 3, "Sam: 'this entire debate assumes leisure needs some sort of higher justification'."),
        ],
      },
      p7: {
        title: "The forgotten art of doing nothing",
        text: "Boredom has acquired, in recent decades, a distinctly bad reputation. (1)___\n\nModern life offers an almost endless supply of ready distractions specifically designed to ensure we never, ever have to sit with it for long. (2)___ A phone in every pocket guarantees that boredom, once a fairly routine part of ordinary daily experience, can now be banished within seconds, almost without conscious thought.\n\nYet a growing body of psychological research suggests we may be losing something genuinely valuable in this constant, reflexive banishment. (3)___ Studies have found that boredom reliably precedes some of our most genuinely creative thinking, precisely because an unoccupied mind wanders freely into unexpected, unplanned places a busy, constantly stimulated one simply cannot easily reach.\n\nChildren, in particular, may be losing valuable ground here. (4)___ A child constantly entertained by screens rarely develops the same capacity for genuinely self-directed play that boredom has traditionally, reliably forced into being.\n\nSome researchers now argue we should actively, deliberately protect space for boredom, rather than automatically treating it as a problem demanding an immediate technological fix. (5)___ This might mean, in practice, deliberately screen-free periods, or simply resisting the powerful, near-automatic urge to reach for a phone the instant a queue or a quiet, unoccupied moment arrives.\n\nWhether this deliberate, conscious cultivation of boredom can be meaningfully restored in a culture so thoroughly organised around constant, instant stimulation remains genuinely, seriously uncertain. (6)___ But the accumulating research at least suggests the attempt is very probably genuinely worth making.",
        options: [
          "We treat it, by and large, as a problem to be instantly solved.", // A -> gap 1
          "Escape, these days, is never more than a few seconds away.",     // B -> gap 2
          "Something valuable may be quietly lost in that constant escape.", // C -> gap 3
          "Without boredom, imagination has less obvious room to stretch.",  // D -> gap 4
          "In practice, that means guarding empty time on purpose.",        // E -> gap 5
          "Old habits, once formed, are never easy to simply undo.",        // F -> gap 6
          "Nobody has ever found boredom the least bit uncomfortable.",     // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: la tratamos como problema a resolver."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: la fuga está a segundos de distancia."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: se pierde algo valioso en esa fuga."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: sin aburrimiento, la imaginación tiene menos espacio."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: significa proteger el tiempo vacío a propósito."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: los viejos hábitos no se deshacen fácilmente."),
        ],
      },
      p8: {
        title: "Four people discuss how they spend their free time",
        text: "Read what four people say about how they spend their leisure time.\n\nA) NADIA: I deliberately do one thing a week with absolutely no purpose at all — no learning goal, no fitness target, nothing to show for it afterwards. It felt genuinely strange at first, almost uncomfortable, but by and large it's become the part of my week I now look forward to most.\n\nB) TOM: I track everything, honestly, including my supposed 'relaxation' time. Some people find that a bit odd, but for me the data itself is genuinely part of the pleasure. In other words, tracking doesn't diminish my leisure at all; if anything, it actively enhances my enjoyment of it.\n\nC) PRIYA: My hobbies have all, gradually, quietly become side businesses over time — I sell the jewellery I make, I teach the yoga I once did purely for myself. I don't regret it exactly, but I do sometimes genuinely miss simply doing something purely for its own sake, with no thought whatsoever of eventual profit.\n\nD) SAM: I've completely stopped feeling guilty about doing nothing. It took me years, honestly, but I've finally accepted that rest doesn't need justifying with any visible, tangible outcome. All in all, that single shift in attitude has done more for my actual wellbeing than any specific hobby or activity ever really could.\n",
        q: [
          mc("Who deliberately does one purposeless thing a week?", ["A", "B", "C", "D"], 0, "Nadia: 'I deliberately do one thing a week with absolutely no purpose at all'."),
          mc("Who tracks their relaxation time and enjoys the data itself?", ["A", "B", "C", "D"], 1, "Tom: 'I track everything… the data itself is genuinely part of the pleasure'."),
          mc("Whose hobbies have gradually become side businesses?", ["A", "B", "C", "D"], 2, "Priya: 'My hobbies have all, gradually, quietly become side businesses'."),
          mc("Who has stopped feeling guilty about doing nothing?", ["A", "B", "C", "D"], 3, "Sam: 'I've completely stopped feeling guilty about doing nothing'."),
          mc("Who found their purposeless activity strange at first but now looks forward to it?", ["A", "B", "C", "D"], 0, "Nadia: 'It felt genuinely strange at first… now look forward to most'."),
          mc("Who says tracking enhances rather than diminishes their enjoyment?", ["A", "B", "C", "D"], 1, "Tom: 'tracking doesn't diminish my leisure at all; if anything, it actively enhances'."),
          mc("Who misses doing something purely for its own sake?", ["A", "B", "C", "D"], 2, "Priya: 'I do sometimes genuinely miss simply doing something purely for its own sake'."),
          mc("Who says a shift in attitude did more for their wellbeing than any hobby?", ["A", "B", "C", "D"], 3, "Sam: 'that single shift in attitude has done more for my actual wellbeing than any specific hobby'."),
          mc("Who took years to accept rest doesn't need justifying?", ["A", "B", "C", "D"], 3, "Sam: 'It took me years, honestly'."),
          mc("Who sells jewellery they once made purely for themselves?", ["A", "B", "C", "D"], 2, "Priya: 'I sell the jewellery I make'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un debate sobre el ocio se plantearon dos ideas:\n· leisure time should be used productively (el tiempo libre debería usarse de forma productiva)\n· true leisure requires doing nothing in particular (el ocio verdadero exige no hacer nada en particular)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS marcadores de reformulación/resumen (in other words, namely, all in all, on the whole…). Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'How I really relax' — reflexiona sobre tu propia relación con el descanso y el ocio.\n· RESEÑA de una actividad de ocio (un lugar, una app, una afición) que recomendarías: descríbela y valórala.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de su relación con el tiempo libre (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué hicieron?): A they quit a demanding job to rest · B they turned a hobby into a business · C they started tracking their leisure time · D they deliberately protect unstructured time · E they struggled to switch off from work · F they rediscovered an old hobby. TAREA DOS (¿cómo se sienten ahora?): A more content · B conflicted · C guilty · D liberated · E ambivalent · F unchanged.", "This is Part Four. You will hear five people talking about their relationship with free time. Speaker One: I resigned from a genuinely exhausting job with no real plan, determined simply to rest properly for a while. It took months to actually relax, but by the end I felt more content than I had in years. Speaker Two: My weaving hobby slowly became an actual small business, selling scarves online. I don't regret it, but I do sometimes feel torn — part of me misses just weaving for pleasure, with absolutely no thought of selling anything at all. Speaker Three: I've started deliberately protecting one entirely unstructured evening a week, no plans, no screens, nothing scheduled whatsoever. It felt strange and slightly uncomfortable at first, but I've genuinely come to treasure it now. Speaker Four: Even on holiday, I find myself checking work messages constantly, unable to properly switch off. My partner finds it genuinely frustrating, and if I'm honest, so, increasingly, do I. Speaker Five: I picked my old guitar back up after nearly twenty years of barely touching it. I'm honestly not very good anymore, but I don't care in the slightest; playing badly, purely for myself, feels wonderfully, genuinely freeing.", [
      mc("Speaker 1 — TAREA UNO (qué hizo)", ["A", "B", "C", "D", "E", "F"], 0, "A: dejó un trabajo exigente para descansar."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: convirtió una afición en negocio."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 3, "D: protege deliberadamente tiempo sin estructurar."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 4, "E: le cuesta desconectar del trabajo."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: redescubrió una vieja afición."),
      mc("Speaker 1 — TAREA DOS (cómo se siente)", ["A", "B", "C", "D", "E", "F"], 0, "A: más satisfecho/a."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: conflictuado/a."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: liberado/a."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: conflictuado/a (frustración creciente)."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 3, "D: liberado/a."),
    ]),

    ...speakingParts({ p1: "cómo pasas tu tiempo libre y si sientes que descansas de verdad", p2: "dos imágenes del ocio (alguien revisando estadísticas de una app de fitness y alguien tumbado/a sin hacer nada en particular): compáralas y especula sobre cuál descansa más", p3: "qué hace que el ocio sea genuinamente reparador (hacer algo sin propósito, desconectar del trabajo, elegir actividades que gustan, compartir tiempo con otros, la calidad frente a la cantidad): comentadlo y elegid lo más importante", p4: "el ocio y el tiempo libre: si deberíamos sentirnos culpables por no hacer nada, si convertir una afición en negocio la arruina y cómo la tecnología ha cambiado nuestra forma de descansar" }),

    SUMMARY("Resumen del Día 24", [
      "Reformulación: in other words (más simple), that is (to say) (precisa), namely (especifica/enumera), to put it another way.",
      "Resumen: in short/in brief (breve), all in all/overall (ponderado), on the whole/by and large (generalización con matiz).",
      "Vocabulario de ocio. Practicadas las 8 partes de Use of English, Writing, Listening P4 y Speaking P1–P4.",
    ]),
    INFO("Tarea para el Día 25", "Escribe 6 frases usando marcadores de reformulación o resumen. Repasa TODO el vocabulario de la semana. Mañana: repaso y mini-simulacro."),
  ],
};

// ───────────────────────── DÍA 25 ─────────────────────────
const DAY25 = {
  title: "Día 25 — Repaso de la semana + mini-simulacro",
  description: "Consolidación del contraste/concesión matizados, causa-consecuencia formal, adición avanzada, elipsis/sustitución/referencia, y reformulación/resumen. Las 4 destrezas (formato C1); Listening P4. Al final, el mini-simulacro de la Semana 5.",
  pedagogy: {
    objective: "Consolidar todos los recursos de cohesión textual del C1 antes de la Semana 6.",
    summary: "Repaso de cohesión textual; Use of English P1–P8; Writing; Listening; Speaking; mini-simulacro.",
    reviewPrompts: ["¿Qué conector o recurso de cohesión te resulta más natural usar?", "Repásalos antes de la Semana 6 (colocaciones e idioms de registro avanzado)."],
  },
  items: [
    TEXT("🎯 Repaso de la Semana 5 del C1. Consolidas el CONTRASTE/CONCESIÓN matizados, la CAUSA-CONSECUENCIA FORMAL, la ADICIÓN AVANZADA, la ELIPSIS/SUSTITUCIÓN/REFERENCIA, y la REFORMULACIÓN/RESUMEN. Al final, el mini-simulacro (módulo aparte)."),
    GRAMMAR("Repaso de la Semana 5", `1) CONTRASTE/CONCESIÓN: whereas/while (dentro de la frase) vs however/nevertheless/that said (frase nueva); albeit + adj; notwithstanding + sustantivo; despite + sustantivo/-ing vs despite the fact that + cláusula.
2) CAUSA-CONSECUENCIA: given (that)/owing to/on account of (causa); as a result/consequently (consecuencia, frase nueva); thereby + -ing (misma frase).
3) ADICIÓN: not to mention, let alone (tras negación), to say nothing of.
4) COHESIÓN: elipsis (tras auxiliares/modales); sustitución (one/ones, do so, so/not); referencia (this/that/such, the former/the latter).
5) REFORMULACIÓN/RESUMEN: in other words, namely, that is (to say); in short, all in all, on the whole, by and large.`),
    grammarEx("Use of English — Repaso mixto de la Semana 5", "Completa o elige.", [
      mc("___ the city centre thrived, the suburbs stagnated.", ["Whereas", "Despite", "Thereby"], 0, "whereas (contraste equilibrado)."),
      mc("The plan is promising, ___ expensive.", ["albeit", "whereas", "given"], 0, "albeit + adjetivo."),
      mc("___ the rising costs, the project was postponed.", ["Given", "Thereby", "Let alone"], 0, "given + sustantivo."),
      fb("The scheme cut fares, ___ increasing ridership. (misma frase)", ["thereby"], "thereby + -ing."),
      mc("We can't afford a bus, ___ a new train line.", ["let alone", "not to mention", "given"], 0, "let alone (tras negación)."),
      mc("I preferred the old design to the new ___.", ["one", "design", "it"], 0, "sustitución: one."),
      fb("Will the park reopen? I believe ___.", ["so"], "sustitución de cláusula: so."),
      mc("Both parks and libraries received funding; ___ more than the latter.", ["the former", "this", "such"], 0, "the former (el primero mencionado)."),
    ]),
    GRAMMAR("Repaso de vocabulario — Semana 5", "Repasa los mazos (urbanismo, transporte, comunidad)."),
    vocabEx("Vocabulario — Repaso de la Semana 5", "Elige la opción correcta.", [
      mc("Uncontrolled outward expansion of a city:", ["urban sprawl", "zoning", "infrastructure"], 0, "urban sprawl."),
      mc("A complete traffic standstill:", ["gridlock", "ridership", "accessibility"], 0, "gridlock."),
      mc("The process where a poor area becomes wealthier, pricing out locals:", ["gentrification", "revitalisation", "congestion"], 0, "gentrification."),
      mc("Originating from ordinary local people, not institutions:", ["grassroots", "derelict", "communal"], 0, "grassroots."),
      mc("A regular journey to and from work:", ["commute", "bottleneck", "subsidy"], 0, "commute."),
      mc("Abandoned and falling into disrepair:", ["derelict", "communal", "inclusive"], 0, "derelict."),
      mc("To bring new life and energy to a declining area:", ["revitalise", "displace", "congest"], 0, "revitalise."),
      mc("A person or group with an interest in a decision:", ["stakeholder", "amenity", "cohesion"], 0, "stakeholder."),
    ]),

    ...uoe({
      p1: {
        title: "What makes a place feel like home",
        text: "Ask people (1)___ makes a place feel genuinely like home, and their answers rarely, if ever, centre on grand architecture or impressive civic monuments. Whereas planners and politicians frequently focus on flagship projects — a striking new museum, an ambitious redeveloped waterfront — ordinary residents, given the chance to actually reflect honestly, tend to name considerably humbler, more (2)___ things: a corner shop where the owner genuinely knows their name, a bench where they regularly run into familiar, friendly faces, a particular tree they have watched grow steadily over many years. Such answers, however modest they may initially sound, point to something genuinely important that conventional urban planning has (3)___ struggled to adequately capture or properly measure. Home, in this deeper, more human sense, is not primarily a matter of architecture or overall civic grandeur, but of accumulated, lived familiarity — the slow, patient layering of small, repeated experiences that gradually, almost imperceptibly, turn a merely physical space into somewhere that (4)___ matters to a person. This helps explain why residents so often, and so passionately, resist redevelopment schemes that planners themselves regard as straightforward, unambiguous improvements: a shiny new building may well be objectively 'better' by every conventional, measurable metric, and yet somehow (5)___ the accumulated, irreplaceable familiarity that made the old, humbler place feel genuinely like home in the first place. Given this genuine tension, some urban planners have begun arguing that preserving certain modest, seemingly unremarkable, familiar elements — even (6)___ ones with little obvious architectural merit — deserves (7)___ weight in redevelopment decisions than it conventionally receives. Whether this more genuinely humane, humble approach to urban planning can be meaningfully reconciled with the very real, pressing need for growth, renewal and change remains, in truth, a genuinely open (8)___.",
        q: [
          mc("(1)", ["what", "which", "that", "how"], 0, "'Ask people what makes a place feel like home'."),
          mc("(2)", ["ordinary", "everyday", "mundane", "common"], 1, "'considerably humbler, more everyday things'."),
          mc("(3)", ["persistently", "consistently", "chronically", "constantly"], 0, "'has persistently struggled'."),
          mc("(4)", ["genuinely", "truly", "really", "actually"], 0, "'somewhere that genuinely matters'."),
          mc("(5)", ["lack", "miss", "lose", "want"], 2, "'somehow lose the accumulated… familiarity'."),
          mc("(6)", ["seemingly", "apparently", "ostensibly", "supposedly"], 0, "'even seemingly ones' — de hecho: 'even seemingly unremarkable ones'."),
          mc("(7)", ["far more", "considerably more", "much more", "significantly more"], 1, "'deserves considerably more weight'."),
          mc("(8)", ["question", "issue", "matter", "problem"], 0, "'a genuinely open question'."),
        ],
      },
      p2: {
        title: "The mayor who listened",
        text: "When a newly elected mayor took office in a mid-sized city facing genuinely serious budget constraints, she inherited a long-running, deeply contentious dispute over how to spend the city's severely limited remaining discretionary funds. Given (1)___ competing, well-organised interest groups had each lobbied hard, for years, for their own particular pet projects, previous administrations had generally simply avoided the whole difficult question entirely, preferring comfortable, uncontroversial inaction to the inevitable, genuine political conflict that making an actual, concrete choice would predictably provoke. Rather than continuing this familiar, well-worn pattern, she did (2)___ almost nobody in city government had seriously attempted before: she opened the entire, genuinely difficult budget decision directly to broad public participation, letting residents themselves vote, through a genuinely open process, on precisely how a meaningful portion of available discretionary funds should actually be allocated. Critics warned, predictably and rather confidently, that this would simply produce chaos, or, worse, an outcome dominated by whichever group shouted loudest and organised most effectively. It did (3)___, at least not to the extent her rather nervous critics had originally, confidently predicted. Given (4)___ residents were given clear, accessible information and a genuinely fair, well-designed process, they proved, on the whole, considerably more thoughtful and more capable of reasonable compromise than the mayor's own most experienced advisers had initially, rather too pessimistically, assumed they would be. The process was not, it should be said clearly, without genuine flaws; turnout skewed, as such initiatives so often predictably do, towards older, more established residents with (5)___ time and existing civic confidence to participate actively. Notwithstanding these entirely real and acknowledged limitations, the experiment proved sufficiently successful, on balance, that the mayor made it an annual, recurring feature of the city's budget process, thereby (6)___ a template that several genuinely comparable cities have since studied closely and, in some documented cases, actively adopted for their own local use.",
        q: [
          fb("(1)", ["that"], "'Given that competing… groups had each lobbied'."),
          fb("(2)", ["what"], "'she did what almost nobody… had attempted'."),
          fb("(3)", ["not"], "'It did not, at least not to the extent'."),
          fb("(4)", ["that"], "'Given that residents were given… information'."),
          fb("(5)", ["more"], "'with more time and existing… confidence'."),
          fb("(6)", ["creating", "establishing"], "'thereby creating a template'."),
        ],
      },
      p3: {
        title: "The neighbourhood that rebuilt itself",
        text: "Following a devastating flood that severely damaged much of a small riverside community, residents faced a genuinely difficult, consequential choice familiar to countless disaster-affected communities before them: rebuild broadly as before, on essentially the same low-lying, (1)___ vulnerable ground, or relocate the entire community to higher, considerably safer terrain, at (2)___ cost to established community bonds and to residents' deep, accumulated attachment to a place many had called home for generations. Given the sheer scale of the (3)___ required either way, this was never going to be a straightforward or genuinely easy decision for anyone involved. What ultimately made the eventual, difficult decision possible was an unusually extensive, sustained and genuinely inclusive process of direct community consultation, one that deliberately, consciously sought out not merely the most vocal, most naturally confident residents but specifically those who might otherwise, in a less carefully designed process, have remained largely unheard: elderly residents with limited mobility, non-native speakers, and younger residents who, despite having comparatively less accumulated history in the immediate area, would nonetheless live considerably longer with whatever difficult decision the wider community collectively, and not without real pain, eventually made. The (4)___ decision, reached only after many months of often difficult, sometimes painfully emotional community meetings, was a genuinely (5)___ compromise: relocate the most demonstrably vulnerable structures to higher, safer ground while preserving and reinforcing a smaller, carefully redesigned riverside core, thereby (6)___ at least some meaningful continuity with the community's own deep historical roots and identity. The process, though undeniably slow, occasionally frustrating, and emotionally genuinely difficult for many involved, produced an outcome that (7)___ residents subsequently reported feeling had been reasonably, meaningfully fair, even among those who had not, in the end, gotten entirely everything they had personally, initially hoped for. Given how (8)___ such community decisions typically prove elsewhere, this particular outcome stands as a genuinely notable, closely studied achievement in its own right.",
        items: [
          { root: "prove", accepted: ["proven"], hint: "'the same low-lying, proven vulnerable ground' → proven." },
          { root: "consider", accepted: ["considerable"], hint: "'at considerable cost' → considerable." },
          { root: "rebuild", accepted: ["rebuilding"], hint: "'the scale of the rebuilding required' → rebuilding." },
          { root: "eventual", accepted: ["eventual"], hint: "'The eventual decision' (adjetivo)." },
          { root: "create", accepted: ["creative"], hint: "'a genuinely creative compromise' → creative." },
          { root: "preserve", accepted: ["preserving"], hint: "'thereby preserving at least some… continuity' → preserving." },
          { root: "most", accepted: ["most"], hint: "'an outcome that most residents… reported' (cuantificador)." },
          { root: "divide", accepted: ["divisive"], hint: "'how divisive such… decisions typically prove' → divisive." },
        ],
      },
      p4: {
        title: "Transformaciones — repaso Semana 5",
        items: [
          { s1: "There was criticism, but the project proceeded.", key: "NOTWITHSTANDING", s2: "___ the criticism, the project proceeded.", accepted: ["Notwithstanding"], explanation: "notwithstanding + sustantivo." },
          { s1: "Because costs rose, the project was postponed.", key: "GIVEN", s2: "___ the rising costs, the project was postponed.", accepted: ["Given"], explanation: "given + sustantivo." },
          { s1: "The delays cost millions, and we haven't even mentioned reputational damage.", key: "MENTION", s2: "The delays cost millions, not to ___ reputational damage.", accepted: ["mention"], explanation: "not to mention." },
          { s1: "I preferred the old design to the new design.", key: "ONE", s2: "I preferred the old design to the new ___.", accepted: ["one"], explanation: "sustitución: one." },
          { s1: "Residents were asked to volunteer, and many volunteered.", key: "SO", s2: "Residents were asked to volunteer, and many did ___.", accepted: ["so"], explanation: "do so." },
          { s1: "Both parks and libraries got funding; parks needed it more.", key: "FORMER", s2: "Both parks and libraries got funding; the ___ needed it more.", accepted: ["former"], explanation: "the former." },
        ],
      },
      p5: {
        title: "The consultation that changed everything",
        text: "When plans were first unveiled for a controversial new development on the site of a long-disused, decades-derelict factory, the initial public reaction from local residents was overwhelmingly, almost uniformly hostile. Given the site's considerable size and its genuinely prominent, highly visible location at the very heart of the neighbourhood, whatever eventually got built there would inevitably, unavoidably shape the area's character for decades to come, and residents, understandably given this context, felt they had been presented with an already largely finished plan rather than being genuinely, meaningfully consulted from anywhere near the actual beginning of the process.\n\nThe development company, facing a mounting, increasingly well-organised local backlash that threatened to derail the entire project through sustained legal challenges and vocal, persistent public opposition, made an unusual and, for the industry, rather uncharacteristic decision: rather than simply pushing ahead regardless, or, alternatively, quietly abandoning the site altogether, they chose to pause the entire process and start again, this time with genuine, sustained community involvement built into the process from the very outset, rather than merely bolted on as an afterthought once the essential decisions had already, in practice, been made.\n\nWhat followed was an unusually extensive, many-months-long consultation process, one that went considerably further than the legally required minimum public meetings. Residents were invited to participate directly in genuine design workshops, given real, substantive choices between meaningfully different development options rather than being asked simply to approve or reject a single, already finalised plan, and provided with clear, accessible, jargon-free information about the genuine trade-offs each realistic option actually involved.\n\nThe process was not without real, sometimes serious difficulty. Given how many genuinely different, often conflicting interests were involved — long-term elderly residents, young families desperately needing affordable housing, small local business owners anxious about disruption, environmental advocates concerned about green space — reaching any kind of workable, broadly acceptable consensus proved genuinely, predictably difficult and occasionally, at moments, appeared close to complete and total collapse.\n\nWhat ultimately emerged, after many months of sometimes difficult but sustained negotiation, was a development plan considerably different from the company's original proposal: smaller in overall scale, with meaningfully more affordable housing units included, considerably more preserved green space, and a genuinely mixed-use design incorporating small business spaces that residents themselves had specifically, repeatedly requested throughout the consultation process. The company, notwithstanding some real internal reservations about reduced projected profitability, ultimately judged that a development with genuine, demonstrated community support was considerably preferable, from a purely long-term commercial standpoint, to one that would likely have faced years of costly legal challenges, sustained local hostility and ongoing, expensive reputational damage.\n\nThe project, once construction was finally, properly underway, proceeded with markedly less friction and far less organised local opposition than nearly anyone directly involved had originally, rather pessimistically, anticipated at the outset. Local residents, having genuinely shaped key elements of the final design themselves, generally reported feeling meaningful ownership over the eventual outcome, even those who had not, in the end, gotten entirely everything they had originally, personally wanted from the lengthy process. The case has since become a frequently cited, widely studied example within the property development industry of how genuine, sustained community consultation, done properly rather than merely as a legal formality, can transform not merely the eventual outcome of a contested project but also, crucially, the entire surrounding process by which that outcome ultimately, and far more smoothly, comes about.",
        q: [
          mc("How did residents initially react to the development plans?", ["Enthusiastically.", "With overwhelming hostility.", "With indifference.", "They weren't informed."], 1, "'the initial public reaction… was overwhelmingly, almost uniformly hostile'."),
          mc("What decision did the development company make?", ["To abandon the project.", "To pause and restart with genuine community involvement from the outset.", "To push ahead regardless.", "To sell the site."], 1, "'they chose to pause the entire process and start again… with genuine, sustained community involvement'."),
          mc("What were residents given in the new consultation process?", ["A single plan to approve.", "Real design workshops and meaningfully different options to choose between.", "No information.", "A vote with no context."], 1, "'invited to participate directly in genuine design workshops, given real, substantive choices'."),
          mc("What did the final development plan look like compared to the original?", ["Identical.", "Smaller, with more affordable housing and green space.", "Larger and more expensive.", "Cancelled entirely."], 1, "'smaller in overall scale, with meaningfully more affordable housing units… considerably more preserved green space'."),
          mc("Why did the company ultimately judge the new approach preferable?", ["It was cheaper immediately.", "Community support was preferable to years of legal challenges and reputational damage.", "It was required by law.", "It increased short-term profit."], 1, "'a development with genuine, demonstrated community support was considerably preferable… to one that would likely have faced years of costly legal challenges'."),
          mc("What does the case illustrate, according to the writer?", ["Consultation always fails.", "Genuine consultation can transform both the outcome and the process of development.", "Development should avoid consultation.", "Residents never really matter."], 1, "'genuine, sustained community consultation… can transform not merely the eventual outcome… but also… the entire surrounding process'."),
        ],
      },
      p6: {
        title: "Can top-down and bottom-up planning coexist?",
        intro: "Cuatro personas debaten si la planificación centralizada y la participación local pueden coexistir.",
        texts: {
          A: "NADIA: I think the tension is often overstated. Given the right structures, top-down resources and expertise can genuinely amplify bottom-up community energy rather than simply overriding or replacing it. The best examples I've seen involve city governments providing funding and technical support while letting residents themselves shape the actual specific details of implementation.",
          B: "TOM: I'm more sceptical, honestly. In my direct experience, 'top-down support for bottom-up initiatives' often means, in practice, institutions quietly setting the fundamental terms while merely offering residents cosmetic, largely symbolic input on relatively minor details. Real power, more often than not, stays firmly with whoever ultimately controls the funding.",
          C: "PRIYA: What I've found is that it genuinely depends heavily on specific timing. Bottom-up energy works best, in my experience, at the very early, conceptual stages, generating genuine ideas and building real local buy-in; top-down resources then become considerably more useful and appropriate later, for scaling proven, community-tested ideas up to a genuinely meaningful, citywide level.",
          D: "SAM: My honest view is that the real question isn't top-down versus bottom-up as competing abstractions, but rather who specifically holds genuine, final decision-making power at each distinct stage of any given process. Whoever can meaningfully say no to a proposal, not merely who gets formally consulted along the way, is where the real underlying power actually, concretely resides.",
        },
        q: [
          mc("Who thinks the tension between top-down and bottom-up is often overstated?", ["A", "B", "C", "D"], 0, "Nadia: 'I think the tension is often overstated'."),
          mc("Whose view most directly CHALLENGES Nadia's optimism about genuine amplification?", ["A", "B", "C", "D"], 1, "Tom: 'institutions quietly setting the fundamental terms while merely offering… cosmetic… input'."),
          mc("Who argues the right approach depends on timing within the process?", ["A", "B", "C", "D"], 2, "Priya: 'it genuinely depends heavily on specific timing'."),
          mc("Who focuses on who holds genuine final decision-making power?", ["A", "B", "C", "D"], 3, "Sam: 'who specifically holds genuine, final decision-making power at each distinct stage'."),
        ],
      },
      p7: {
        title: "What cities can learn from villages",
        text: "For all the genuine advantages that dense, large-scale urban living undeniably offers, something important is often, quietly lost along the way. (1)___\n\nIn a small village, nearly everyone genuinely knows nearly everyone else, at least by sight if not always by name. (2)___ This dense, largely unplanned web of familiarity creates a distinctive, largely invisible form of informal social accountability that most sprawling cities, for all their considerable other genuine advantages, simply cannot easily replicate at scale.\n\nSome urban researchers now argue that successful, genuinely livable cities are, in an important sense, really collections of smaller, semi-autonomous villages rather than single, undifferentiated urban masses. (3)___ A good neighbourhood, on this compelling view, functions psychologically much like a village: a scale small enough for genuine familiarity to develop naturally, nested within the wider, larger resources and considerable opportunities a full city genuinely provides.\n\nThis insight has real, concrete practical implications for how cities should sensibly approach growth and development. (4)___ Rather than building ever-larger, more anonymous developments, some planners now deliberately favour smaller-scale, more genuinely walkable neighbourhoods with clear, legible identities and natural, well-designed gathering points of their own.\n\nWhether this deliberately 'village-like' approach can be meaningfully, successfully scaled to accommodate genuinely large, dense urban populations remains a matter of real, ongoing debate. (5)___ Land, after all, is expensive, and low-density village-style development doesn't always straightforwardly, obviously fit the sheer numbers many growing cities urgently need to house.\n\nWhat seems reasonably clear, whatever the eventual practical resolution, is that raw scale alone rarely, on its own, makes a place feel genuinely like home. (6)___ Something altogether more human, and considerably harder to plan and engineer deliberately, is also required.",
        options: [
          "Something about genuine intimacy tends to get left behind.",     // A -> gap 1
          "That familiarity, in turn, quietly encourages mutual care.",    // B -> gap 2
          "A city, on this view, is a village of many smaller villages.",   // C -> gap 3
          "Design choices follow naturally from that basic insight.",       // D -> gap 4
          "Density and intimacy don't always sit easily together.",        // E -> gap 5
          "Familiarity and belonging matter every bit as much as scale.",   // F -> gap 6
          "Villages have never once offered any genuine social benefit.",   // G (sobra)
        ],
        q: [
          mc("Hueco 1", ["A", "B", "C", "D", "E", "F", "G"], 0, "A: se pierde algo de intimidad genuina."),
          mc("Hueco 2", ["A", "B", "C", "D", "E", "F", "G"], 1, "B: esa familiaridad fomenta el cuidado mutuo."),
          mc("Hueco 3", ["A", "B", "C", "D", "E", "F", "G"], 2, "C: una ciudad es un pueblo de pueblos."),
          mc("Hueco 4", ["A", "B", "C", "D", "E", "F", "G"], 3, "D: las decisiones de diseño siguen de ahí."),
          mc("Hueco 5", ["A", "B", "C", "D", "E", "F", "G"], 4, "E: densidad e intimidad no siempre encajan."),
          mc("Hueco 6", ["A", "B", "C", "D", "E", "F", "G"], 5, "F: la familiaridad importa tanto como la escala."),
        ],
      },
      p8: {
        title: "Four people reflect on what makes somewhere feel like home",
        text: "Read what four people say about what makes a place feel genuinely like home to them.\n\nA) NADIA: For me it's entirely about familiar faces. I've lived in the same building for over a decade, and it's not the flat itself that matters most — it's knowing the neighbours, the corner shop owner, the people I pass regularly on my usual route to work. Take those away, and even my own flat would feel oddly, unmistakably foreign to me.\n\nB) TOM: I've moved cities four times for work, and what I've learned is that home isn't really a fixed place at all for me — it's more a feeling I actively, deliberately build wherever I happen to land. Given enough time and genuine effort, I can make almost anywhere feel like home eventually; it just takes patience and real, sustained intention on my part.\n\nC) PRIYA: What surprised me most was realising home is really about routine, more than location as such. I moved to a new country entirely, and once I'd established my own small daily rituals — a particular café, a regular walking route — it started to feel like home surprisingly quickly, well before I actually expected it would.\n\nD) SAM: For me, home has always meant somewhere I feel a genuine sense of responsibility towards, not just comfort or convenience. I don't just live in my neighbourhood; I actively feel invested in it, in its wellbeing, almost as though it were somehow partly my own. That sense of real ownership, I think, is what home genuinely means to me.\n",
        q: [
          mc("Who says home is about familiar faces, not the flat itself?", ["A", "B", "C", "D"], 0, "Nadia: 'it's not the flat itself that matters most — it's knowing the neighbours'."),
          mc("Who has moved cities four times for work?", ["A", "B", "C", "D"], 1, "Tom: 'I've moved cities four times for work'."),
          mc("Who found that routine, not location, creates a sense of home?", ["A", "B", "C", "D"], 2, "Priya: 'home is really about routine, more than location as such'."),
          mc("Who defines home through a sense of responsibility towards a place?", ["A", "B", "C", "D"], 3, "Sam: 'home has always meant somewhere I feel a genuine sense of responsibility towards'."),
          mc("Who says even their own flat would feel foreign without familiar neighbours?", ["A", "B", "C", "D"], 0, "Nadia: 'Take those away, and even my own flat would feel oddly… foreign to me'."),
          mc("Who believes home is a feeling actively built wherever they land?", ["A", "B", "C", "D"], 1, "Tom: 'it's more a feeling I actively, deliberately build wherever I happen to land'."),
          mc("Who established small daily rituals in a new country?", ["A", "B", "C", "D"], 2, "Priya: 'once I'd established my own small daily rituals… it started to feel like home'."),
          mc("Who feels invested in their neighbourhood almost as if it were their own?", ["A", "B", "C", "D"], 3, "Sam: 'I actively feel invested in it… almost as though it were somehow partly my own'."),
          mc("Who says it took patience and sustained intention to feel at home?", ["A", "B", "C", "D"], 1, "Tom: 'it just takes patience and real, sustained intention'."),
          mc("Who felt at home more quickly than they expected?", ["A", "B", "C", "D"], 2, "Priya: 'it started to feel like home surprisingly quickly, well before I actually expected'."),
        ],
      },
    }),

    WRITING_HEAD,
    writing(1, "Writing · Parte 1 — Essay (obligatorio, 220–260 palabras)", "Lee este fragmento y escribe un ENSAYO (220–260 palabras). En un coloquio sobre las ciudades se plantearon dos ideas:\n· cities should prioritise large flagship developments (deberían priorizar grandes desarrollos emblemáticos)\n· cities should prioritise small, everyday community infrastructure (deberían priorizar infraestructura cotidiana)\nEscribe un ensayo comentando AMBAS ideas y explicando tu postura, con razones y ejemplos. Usa al menos DOS recursos de cohesión de la semana. Registro neutro-formal, estructura y conectores de nivel C1.", 220, 260),
    writing(2, "Writing · Parte 2 — Elige UNA tarea (220–260 palabras)", "Elige UNA:\n· ARTÍCULO: 'What makes somewhere feel like home' — reflexiona con ejemplos personales.\n· CARTA a un ayuntamiento proponiendo cómo mejorar la consulta pública en proyectos urbanos: justifica tu propuesta.", 220, 260),

    LISTENING_HEAD,
    listening(4, "Listening · Parte 4 — Multiple matching (5 monólogos, 10 preguntas)", "Escucha a cinco personas hablando de un proyecto de transformación urbana en su zona (se oye dos veces). Para cada hablante hay DOS tareas. TAREA UNO (¿qué tipo de proyecto fue?): A a new park · B a housing development · C a transport scheme · D a community consultation · E a heritage restoration · F a street redesign. TAREA DOS (¿cuál fue el resultado?): A widely praised success · B mixed, still debated · C unexpectedly controversial · D quietly abandoned · E better than initially feared · F worse than promised.", "This is Part Four. You will hear five people talking about an urban transformation project in their area. Speaker One: They turned an old, derelict railway line into a public park near us. Given how sceptical everyone was at first, the result has been remarkable — it's become genuinely one of the most loved spaces in the whole city. Speaker Two: Our street was redesigned to prioritise pedestrians over cars. Given the initial complaints from local shop owners, I honestly expected it to fail badly. It hasn't; footfall has actually increased, and most shops now report doing rather better than before. Speaker Three: A large new housing development went up near us, and the community consultation, given how extensive it was on paper, still somehow managed to leave most actual residents feeling largely unheard in practice. The building went ahead regardless, and feelings about it remain genuinely, deeply mixed to this day. Speaker Four: They restored our old town hall, a genuinely beautiful old building, but given the eye-watering cost involved, many residents still feel that money could have been spent far more usefully elsewhere on more pressing local needs. Speaker Five: A new light rail line was promised to us with great fanfare five years ago. Given the repeated delays and the vastly increased cost since then, most locals have simply, quietly stopped believing it will ever actually be built at all.", [
      mc("Speaker 1 — TAREA UNO (tipo de proyecto)", ["A", "B", "C", "D", "E", "F"], 0, "A: parque nuevo (antigua vía férrea)."),
      mc("Speaker 2 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 5, "F: rediseño de calle."),
      mc("Speaker 3 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 1, "B: desarrollo de vivienda."),
      mc("Speaker 4 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 4, "E: restauración patrimonial."),
      mc("Speaker 5 — TAREA UNO", ["A", "B", "C", "D", "E", "F"], 2, "C: proyecto de transporte."),
      mc("Speaker 1 — TAREA DOS (resultado)", ["A", "B", "C", "D", "E", "F"], 0, "A: éxito ampliamente elogiado."),
      mc("Speaker 2 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 4, "E: mejor de lo temido."),
      mc("Speaker 3 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: resultado mixto, aún debatido."),
      mc("Speaker 4 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 1, "B: resultado mixto, aún debatido (coste cuestionado)."),
      mc("Speaker 5 — TAREA DOS", ["A", "B", "C", "D", "E", "F"], 5, "F: peor de lo prometido."),
    ]),

    ...speakingParts({ p1: "qué te gustaría que mejorara en tu ciudad o barrio y por qué", p2: "dos imágenes de proyectos urbanos (una obra de renovación en marcha y un espacio ya transformado y en uso): compáralas y especula sobre el proceso", p3: "qué hace que un proyecto urbano tenga éxito (la consulta genuina, el presupuesto adecuado, el mantenimiento continuo, la identidad local, la accesibilidad): comentadlo y elegid lo más decisivo", p4: "las ciudades y la comunidad: si los grandes proyectos emblemáticos valen la pena frente a las mejoras cotidianas, cómo debería equilibrarse la planificación centralizada con la participación local y qué hace que un lugar se sienta como un verdadero hogar" }),

    SUMMARY("Resumen de la Semana 5 (C1)", [
      "Dominas el contraste/concesión matizados (whereas/albeit/notwithstanding), la causa-consecuencia formal (given/owing to/thereby), la adición avanzada (not to mention/let alone) y la cohesión textual (elipsis/sustitución/referencia).",
      "Has practicado las 8 partes del Reading & Use of English, el Writing (220–260) y el Speaking P1–P4 con el tema de las ciudades y la vida comunitaria.",
      "Ahora, el mini-simulacro de la semana.",
      "La semana que viene: las COLOCACIONES y los IDIOMS de registro avanzado.",
    ]),
    INFO("Mini-simulacro de la Semana 5", "En el módulo siguiente tienes el simulacro cronometrado con las prácticas auto-corregibles de la semana. Aprueba con un 60%. Si no llegas, repasa antes de la Semana 6."),
  ],
};

export const WEEK5 = {
  n: 5,
  theme: "Los conectores del discurso y la cohesión avanzada · Las ciudades y la vida urbana",
  description: "Contraste y concesión matizados, causa-consecuencia formal, adición avanzada, recursos de cohesión (elipsis, sustitución, referencia) y reformulación/resumen, con el hilo de las ciudades, el urbanismo, el transporte, la vida comunitaria y el ocio. Cada día, las 4 destrezas con el formato real del C1.",
  days: [DAY21, DAY22, DAY23, DAY24, DAY25],
};
