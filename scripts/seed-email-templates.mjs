/**
 * Siembra las 30 plantillas de correo de NOVARA (documento de la academia) en
 * la tabla `email_templates`. Cada una queda EDITABLE desde /admin/correos y se
 * envía con `sendTransactionalEmail({ templateKey, variables })`.
 *
 * - Variables con `{{clave}}` (nombre, idioma, preparacion, progreso, racha…).
 * - Filas opcionales con `{{#if clave}}…{{/if}}`: si el dato no existe, la fila
 *   desaparece (sin etiquetas huérfanas ni undefined/null).
 * - Campañas de temporada con acento y banner propios (Navidad, Halloween…),
 *   coherentes con el sistema visual de la web.
 *
 *   node scripts/seed-email-templates.mjs
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const TAGLINE = "Aprende de verdad, no a medias.";

/** Envoltura de marca (HTML de email, estilos en línea, seguro en clientes). */
function email({
  accent = "#C9973D",
  banner = "",
  bannerBg = "",
  preheader = "",
  heading,
  paragraphs = [],
  infoRows = [],
  ctaLabel,
  ctaUrl = "{{enlace_dashboard}}",
  closing = [],
}) {
  const pre = preheader
    ? `<span style="display:none;max-height:0;overflow:hidden;opacity:0">${preheader}</span>`
    : "";
  const bannerHtml = banner
    ? `<div style="background:${bannerBg || accent};color:#fff;text-align:center;font-size:26px;letter-spacing:6px;padding:14px;border-radius:12px;margin-bottom:24px">${banner}</div>`
    : "";
  const paras = paragraphs
    .map(
      (p) =>
        `<p style="font-size:15px;line-height:1.65;color:#3f3b46;margin:0 0 14px">${p}</p>`
    )
    .join("");
  const rows = infoRows.length
    ? `<table role="presentation" style="width:100%;border-collapse:collapse;background:#faf9f6;border:1px solid #ece7dd;border-radius:12px;margin:8px 0 20px">${infoRows
        .map(
          ({ label, var: v }) =>
            `{{#if ${v}}}<tr><td style="padding:10px 16px;font-size:13px;color:#8a8492;border-bottom:1px solid #f0ece3">${label}</td><td style="padding:10px 16px;font-size:14px;color:#14121F;font-weight:600;text-align:right;border-bottom:1px solid #f0ece3">{{${v}}}</td></tr>{{/if}}`
        )
        .join("")}</table>`
    : "";
  const cta = ctaLabel
    ? `<a href="${ctaUrl}" style="display:inline-block;margin:8px 0 4px;background:${accent};color:#14121F;text-decoration:none;font-weight:700;padding:13px 26px;border-radius:10px;font-size:14px">${ctaLabel}</a>`
    : "";
  const close = closing
    .map(
      (c) =>
        `<p style="font-size:14px;line-height:1.6;color:#6b6672;margin:18px 0 0;font-style:italic">${c}</p>`
    )
    .join("");
  return `${pre}
<div style="font-family:-apple-system,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;color:#14121F">
  <p style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:${accent};font-weight:700;margin:0 0 20px">NOVARA</p>
  ${bannerHtml}
  <h1 style="font-size:23px;line-height:1.25;margin:0 0 18px">${heading}</h1>
  ${paras}
  ${rows}
  ${cta}
  ${close}
  <hr style="border:none;border-top:1px solid #ece7dd;margin:30px 0 16px" />
  <p style="font-size:12px;color:#a9a4b0;margin:0">${TAGLINE}</p>
  <p style="font-size:11px;color:#c4c0cb;margin:8px 0 0">Recibes este correo porque tienes una cuenta en NOVARA. ¿Dudas? <a href="{{enlace_soporte}}" style="color:#a9a4b0">Contáctanos</a>.</p>
</div>`;
}

// Acentos de temporada (coherentes con el sistema visual de la web).
const A = {
  base: "#C9973D",
  navidad: "#B91C1C",
  halloween: "#F97316",
  sanvalentin: "#DB2777",
  ramadan: "#C9A227",
  pascua: "#DB2777",
  anonuevo: "#C9973D",
};

const TEMPLATES = [
  {
    key: "bienvenida",
    subject: "Bienvenido/a a Novara, {{nombre}} ✨",
    html: email({
      preheader: "Tu camino para aprender y prepararte empieza ahora.",
      heading: "Bienvenido/a a Novara, {{nombre}}",
      paragraphs: [
        "Has dado el primer paso para mejorar tu dominio de {{idioma}} y avanzar hacia tus objetivos.",
        "Novara no está pensada para que simplemente completes lecciones: está diseñada para ayudarte a aprender de verdad, practicar y comprobar tu progreso.",
        "Desde tu espacio personal accedes a tus preparaciones, lecciones, ejercicios, vocabulario, gramática, prácticas, resultados y progreso.",
      ],
      infoRows: [
        { label: "Nombre", var: "nombre_completo" },
        { label: "Idioma", var: "idioma" },
        { label: "Preparación", var: "preparacion" },
      ],
      ctaLabel: "Entrar en mi espacio",
      closing: ["Tu progreso empieza hoy. Bienvenido/a a Novara."],
    }),
  },
  {
    key: "inscripcion_lista",
    subject: "Tu preparación en Novara ya está lista, {{nombre}}",
    html: email({
      preheader: "Todo preparado para comenzar.",
      heading: "Tu acceso a {{preparacion}} ya está disponible",
      paragraphs: [
        "Hola, {{nombre}}. A partir de ahora tienes acceso al contenido de tu preparación: lecciones, teoría, vocabulario, gramática, ejercicios y prácticas.",
        "Tu progreso se irá actualizando automáticamente mientras estudias.",
      ],
      infoRows: [
        { label: "Preparación", var: "preparacion" },
        { label: "Idioma", var: "idioma" },
        { label: "Nivel", var: "nivel" },
      ],
      ctaLabel: "Comenzar mi preparación →",
      closing: [
        "No necesitas hacerlo todo de golpe. Avanza paso a paso y deja que Novara te ayude a identificar lo que necesitas mejorar.",
      ],
    }),
  },
  {
    key: "primera_leccion",
    subject: "Tu primera lección te está esperando",
    html: email({
      heading: "Ya puedes comenzar tu preparación, {{nombre}}",
      paragraphs: [
        "Hemos preparado tu espacio para que empieces exactamente desde donde corresponde.",
        "Lección: <strong>{{leccion}}</strong>",
        "Cuando termines, tu progreso se actualizará automáticamente.",
      ],
      ctaLabel: "Comenzar la lección →",
      ctaUrl: "{{enlace_leccion}}",
      closing: [
        "Un paso cada día puede parecer pequeño. Pero los pequeños pasos repetidos son los que construyen un verdadero progreso.",
      ],
    }),
  },
  {
    key: "racha",
    subject: "Llevas {{racha}} días. No rompas la racha 🔥",
    html: email({
      heading: "Tu racha actual es de {{racha}} días 🔥",
      paragraphs: [
        "Hola, {{nombre}}. No necesitas estudiar durante horas para mantener el ritmo: lo importante es continuar.",
        "Hoy tienes una nueva oportunidad para avanzar un poco más.",
      ],
      ctaLabel: "Continuar aprendiendo →",
      closing: ["Tu progreso no se construye en un día. Se construye día tras día."],
    }),
  },
  {
    key: "progreso",
    subject: "Mira cuánto has avanzado, {{nombre}}",
    html: email({
      heading: "Tu progreso en {{preparacion}} ya alcanza el {{progreso}}%",
      paragraphs: ["Hola, {{nombre}}. Has completado una parte importante de tu preparación."],
      infoRows: [
        { label: "Lecciones completadas", var: "lecciones_completadas" },
        { label: "Racha", var: "racha" },
        { label: "Progreso", var: "progreso" },
      ],
      ctaLabel: "Ver mi progreso →",
      closing: ["Todavía queda camino, pero ya has recorrido una parte importante. Sigue avanzando."],
    }),
  },
  {
    key: "inactividad",
    subject: "Te hemos echado de menos, {{nombre}}",
    html: email({
      heading: "Hace {{dias}} días que no estudias en Novara",
      paragraphs: [
        "No pasa nada. No necesitas empezar de cero: tu progreso sigue aquí.",
        "Cuando estés preparado/a, puedes volver exactamente donde lo dejaste.",
      ],
      ctaLabel: "Volver a estudiar →",
      closing: ["No busques hacerlo perfecto. Busca volver a empezar."],
    }),
  },
  {
    key: "dificultad",
    subject: "Tenemos algo que ayudarte a mejorar",
    html: email({
      heading: "Hemos detectado dónde puedes mejorar",
      paragraphs: [
        "Hola, {{nombre}}. Hemos visto que últimamente tienes más dificultades en <strong>{{area}}</strong>.",
        "Por eso hemos seleccionado contenido y ejercicios específicos para reforzar esta habilidad.",
      ],
      infoRows: [{ label: "Tu área de mejora", var: "area" }],
      ctaLabel: "Practicar ahora →",
      closing: [
        "No significa que no puedas hacerlo. Significa que hemos encontrado exactamente dónde puedes mejorar.",
      ],
    }),
  },
  {
    key: "plan_intensivo",
    subject: "Hemos preparado un plan para ti",
    html: email({
      heading: "Tu plan intensivo está listo, {{nombre}}",
      paragraphs: [
        "Después de analizar tu progreso, Novara ha detectado algunas áreas que necesitan un refuerzo adicional.",
        "Durante los próximos días encontrarás una preparación más intensiva centrada especialmente en: <strong>{{areas}}</strong>.",
        "El objetivo no es hacerte estudiar más por estudiar, sino que practiques lo que realmente necesitas mejorar.",
      ],
      ctaLabel: "Ver mi plan →",
    }),
  },
  {
    key: "examen_mensual",
    subject: "Tu evaluación mensual está disponible",
    html: email({
      heading: "Ha llegado el momento de comprobar tu progreso",
      paragraphs: [
        "Hola, {{nombre}}. Tu evaluación mensual ya está disponible.",
        "Tendrás que demostrar lo aprendido sin consultar tus materiales, como en una situación real de examen.",
      ],
      infoRows: [
        { label: "Preparación", var: "preparacion" },
        { label: "Fecha", var: "fecha" },
      ],
      ctaLabel: "Comenzar evaluación →",
      ctaUrl: "{{enlace_examen}}",
      closing: ["Al terminar recibirás tus resultados y verás qué necesitas seguir trabajando."],
    }),
  },
  {
    key: "nivel_alcanzado",
    subject: "Lo has conseguido, {{nombre}} 🎉",
    html: email({
      heading: "Has alcanzado el nivel objetivo 🎉",
      paragraphs: ["Hola, {{nombre}}. Tenemos buenas noticias: has alcanzado el estándar necesario para continuar hacia tu examen oficial."],
      infoRows: [
        { label: "Preparación", var: "preparacion" },
        { label: "Puntuación", var: "puntuacion" },
      ],
      ctaLabel: "Ver mis resultados →",
      closing: [
        "Este resultado no significa que el aprendizaje termine aquí. Significa que estás preparado/a para dar el siguiente paso.",
      ],
    }),
  },
  {
    key: "preparado_examen",
    subject: "Ya estás preparado/a para dar el siguiente paso",
    html: email({
      heading: "Estás preparado/a para el examen oficial",
      paragraphs: [
        "Hola, {{nombre}}. Tras tu evolución y tus últimas evaluaciones, has alcanzado el objetivo de {{preparacion}}.",
        "Ahora puedes comenzar el proceso para presentarte al examen oficial. En esta sección tienes la información para la inscripción y la presentación.",
      ],
      ctaLabel: "Ver qué hacer ahora →",
      closing: ["Novara te ha preparado. Ahora el siguiente paso es tuyo."],
    }),
  },
  // ── Campañas de temporada ─────────────────────────────────────────
  {
    key: "navidad",
    subject: "🎄 Una Navidad diferente en Novara",
    html: email({
      accent: A.navidad,
      banner: "🎄 ❄️ 🎁 ⭐",
      bannerBg: "#166534",
      preheader: "La Navidad también se aprende.",
      heading: "La Navidad ha llegado a Novara 🎄",
      paragraphs: [
        "Hola, {{nombre}}. Estos días encontrarás la academia transformada con una experiencia especial llena de detalles navideños.",
        "❄️ Nuevos elementos visuales · 🎁 Actividades especiales · ⭐ Retos de temporada · 🔥 Recompensas y desafíos.",
        "Y, por supuesto, tus lecciones habituales siguen esperándote.",
      ],
      ctaLabel: "Descubrir la experiencia navideña →",
      closing: ["Que estas fiestas también sean una oportunidad para seguir avanzando. Feliz Navidad de parte de Novara. 🎄"],
    }),
  },
  {
    key: "halloween",
    subject: "🎃 Halloween ha llegado a Novara",
    html: email({
      accent: A.halloween,
      banner: "🎃 🦇 👻 🌙",
      bannerBg: "#2E1065",
      preheader: "¿Te atreves con el desafío?",
      heading: "Algo extraño está ocurriendo en Novara… 🎃",
      paragraphs: [
        "Hola, {{nombre}}. Halloween ha llegado, y con él nuevos desafíos, actividades especiales y una experiencia completamente ambientada.",
        "🦇 Desafíos especiales · 🎃 Actividades de Halloween · 👻 Recompensas · 🌙 Experiencia temática.",
      ],
      ctaLabel: "Entrar en Novara →",
      closing: ["Este Halloween, el verdadero miedo sería dejar de aprender."],
    }),
  },
  {
    key: "san_valentin",
    subject: "💕 Enamórate de tu progreso",
    html: email({
      accent: A.sanvalentin,
      banner: "💕 ✨ 🌹 💗",
      preheader: "Hay cosas que merecen la pena cuidar.",
      heading: "Enamórate de tu progreso, {{nombre}}",
      paragraphs: [
        "Este San Valentín queremos recordarte que aprender un idioma también puede convertirse en una historia que te acompañe mucho tiempo.",
        "💕 Nuevos desafíos · ✨ Actividades especiales · 🏆 Recompensas · 📚 Nuevas oportunidades para practicar.",
      ],
      ctaLabel: "Descubrir Novara →",
      closing: ["Porque hay cosas que merecen la pena cuidar. Y tu progreso es una de ellas."],
    }),
  },
  {
    key: "ramadan",
    subject: "🌙 Ramadán Mubarak de parte de Novara",
    html: email({
      accent: A.ramadan,
      banner: "🌙 ✨ 🕌 ⭐",
      bannerBg: "#1E1B4B",
      heading: "Ramadán Mubarak, {{nombre}} 🌙",
      paragraphs: [
        "Durante este mes especial, Novara se transforma para acompañarte también en tu aprendizaje.",
        "🌙 Desafíos especiales · ✨ Actividades de aprendizaje · 📚 Nuevos recursos · 🏆 Recompensas.",
      ],
      ctaLabel: "Descubrir la experiencia →",
      closing: ["Que este mes esté lleno de aprendizaje, crecimiento y buenos momentos. Ramadán Mubarak. 🌙"],
    }),
  },
  {
    key: "pascua",
    subject: "🐣 La Pascua ha llegado a Novara",
    html: email({
      accent: A.pascua,
      banner: "🐣 🌸 🥚 🌷",
      bannerBg: "#7C3AED",
      heading: "Novara se ha transformado para la Pascua 🐣",
      paragraphs: [
        "Hola, {{nombre}}. Estos días encontrarás nuevos desafíos y actividades especiales mientras avanzas en tu preparación.",
        "🌸 Actividades especiales · 🥚 Retos de Pascua · 🏆 Recompensas · 📚 Nuevas oportunidades para practicar.",
      ],
      ctaLabel: "Descubrir la experiencia →",
      closing: ["Disfruta de estos días y sigue avanzando a tu ritmo."],
    }),
  },
  {
    key: "ano_nuevo",
    subject: "🎆 Un nuevo año. Un nuevo objetivo.",
    html: email({
      accent: A.anonuevo,
      banner: "🎆 ✨ 🥂 🎇",
      bannerBg: "#1E293B",
      heading: "Un nuevo año comienza, {{nombre}}",
      paragraphs: [
        "Y quizá este sea el año en el que finalmente consigas aquello que llevas tiempo intentando: un nuevo nivel, un nuevo idioma, un nuevo examen, un nuevo objetivo.",
      ],
      ctaLabel: "Continuar mi preparación →",
      closing: ["No necesitas hacerlo perfecto. Solo necesitas empezar. Feliz Año Nuevo de parte de Novara. ✨"],
    }),
  },
  // ── Ofertas ───────────────────────────────────────────────────────
  {
    key: "oferta",
    subject: "{{descuento}}% de descuento en Novara",
    html: email({
      preheader: "Una oportunidad especial durante tiempo limitado.",
      heading: "{{descuento}}% de descuento en {{preparacion}}",
      paragraphs: ["Hola, {{nombre}}. Durante un tiempo limitado puedes acceder con un descuento especial."],
      infoRows: [
        { label: "Precio anterior", var: "precio_anterior" },
        { label: "Precio actual", var: "precio_actual" },
        { label: "Código", var: "codigo_cupon" },
        { label: "Válido hasta", var: "fecha_fin_oferta" },
      ],
      ctaLabel: "Aprovechar la oferta →",
      closing: ["Cuando termine el plazo, esta oferta dejará de estar disponible."],
    }),
  },
  {
    key: "oferta_halloween",
    subject: "🎃 Una oferta terroríficamente buena",
    html: email({
      accent: A.halloween,
      banner: "🎃 👻 🦇",
      bannerBg: "#2E1065",
      heading: "Halloween ha llegado… y con él un {{descuento}}% de descuento 🎃",
      paragraphs: ["Hola, {{nombre}}. Hemos preparado algo especial por Halloween."],
      infoRows: [
        { label: "Descuento", var: "descuento" },
        { label: "Código", var: "codigo_cupon" },
        { label: "Disponible hasta", var: "fecha_fin_oferta" },
      ],
      ctaLabel: "Conseguir la oferta →",
      closing: ["Después… desaparecerá. 👻"],
    }),
  },
  {
    key: "oferta_navidad",
    subject: "🎁 Tu regalo de Navidad está en Novara",
    html: email({
      accent: A.navidad,
      banner: "🎄 🎁 ❄️",
      bannerBg: "#166534",
      heading: "Tu regalo de Navidad: {{descuento}}% en {{preparacion}} 🎁",
      paragraphs: ["Este año queremos regalarte una oportunidad para seguir avanzando."],
      infoRows: [
        { label: "Descuento", var: "descuento" },
        { label: "Código", var: "codigo_cupon" },
        { label: "Hasta", var: "fecha_fin_oferta" },
      ],
      ctaLabel: "Ver oferta →",
      closing: ["Que el próximo año te encuentre un paso más cerca de tu objetivo."],
    }),
  },
  // ── Transaccionales ───────────────────────────────────────────────
  {
    key: "pago_aprobado",
    subject: "Pago confirmado — Novara",
    html: email({
      heading: "Tu pago se ha procesado correctamente",
      paragraphs: ["Hola, {{nombre}}. Gracias por confiar en Novara. Tu acceso ya está disponible."],
      infoRows: [
        { label: "Preparación", var: "preparacion" },
        { label: "Importe", var: "precio_actual" },
        { label: "Fecha", var: "fecha" },
      ],
      ctaLabel: "Acceder a mi preparación →",
    }),
  },
  {
    key: "recuperar_contrasena",
    subject: "Restablece tu contraseña de Novara",
    html: email({
      heading: "Restablece tu contraseña",
      paragraphs: [
        "Hola, {{nombre}}. Hemos recibido una solicitud para restablecer la contraseña de tu cuenta.",
        "Si has sido tú, usa el botón de abajo. El enlace caducará pronto por seguridad.",
        "Si no has solicitado este cambio, puedes ignorar este mensaje.",
      ],
      ctaLabel: "Restablecer contraseña →",
      ctaUrl: "{{enlace}}",
    }),
  },
  {
    key: "contrasena_cambiada",
    subject: "Tu contraseña ha sido actualizada",
    html: email({
      heading: "Tu contraseña se ha cambiado correctamente",
      paragraphs: [
        "Hola, {{nombre}}. Si has realizado este cambio, no necesitas hacer nada más.",
        "Si no reconoces esta actividad, contacta con nosotros inmediatamente.",
      ],
      ctaLabel: "Ir a mi cuenta →",
    }),
  },
  {
    key: "resena",
    subject: "¿Cómo está siendo tu experiencia con Novara?",
    html: email({
      heading: "Nos encantaría conocer tu opinión, {{nombre}}",
      paragraphs: [
        "Tu opinión puede ayudar a otras personas que buscan una forma de prepararse y aprender.",
        "Solo te llevará unos minutos.",
      ],
      ctaLabel: "Dejar mi reseña →",
      closing: ["Gracias por formar parte de Novara. 🤍"],
    }),
  },
  {
    key: "logro",
    subject: "🏆 Has conseguido un nuevo logro",
    html: email({
      heading: "¡Nuevo logro desbloqueado! 🏆",
      paragraphs: [
        "Hola, {{nombre}}. Acabas de desbloquear: <strong>{{logro}}</strong>.",
        "{{descripcion_logro}}",
      ],
      ctaLabel: "Ver mis logros →",
      closing: ["Sigue avanzando para descubrir cuál será el siguiente."],
    }),
  },
  {
    key: "nuevo_contenido",
    subject: "Hay nuevo contenido esperándote",
    html: email({
      heading: "Nuevo contenido en tu preparación",
      paragraphs: [
        "Hola, {{nombre}}. Hemos añadido nuevo contenido relacionado con tu preparación.",
        "{{contenido}}",
      ],
      ctaLabel: "Ver contenido →",
    }),
  },
  {
    key: "aviso",
    subject: "Información importante sobre Novara",
    html: email({
      heading: "{{titulo}}",
      paragraphs: ["Hola, {{nombre}}.", "{{descripcion}}"],
      ctaLabel: "Más información →",
      closing: ["Si tienes alguna pregunta, puedes contactar con nuestro equipo de soporte."],
    }),
  },
  {
    key: "felicitacion",
    subject: "✨ Un mensaje especial de Novara",
    html: email({
      heading: "Un mensaje para ti, {{nombre}}",
      paragraphs: ["{{mensaje}}", "Gracias por formar parte de Novara. Seguimos aquí para acompañarte en tu camino."],
      ctaLabel: "Ir a mi espacio →",
    }),
  },
  {
    key: "resumen_semanal",
    subject: "Tu semana en Novara 📊",
    html: email({
      heading: "Esta ha sido tu semana, {{nombre}} 📊",
      infoRows: [
        { label: "🔥 Racha", var: "racha" },
        { label: "📚 Lecciones", var: "lecciones_completadas" },
        { label: "📝 Ejercicios", var: "ejercicios" },
        { label: "⏱️ Tiempo estudiado", var: "tiempo" },
        { label: "📖 Vocabulario", var: "vocabulario" },
        { label: "📈 Progreso", var: "progreso" },
      ],
      paragraphs: ["Y tu próxima recomendación es: <strong>{{recomendacion}}</strong>."],
      ctaLabel: "Continuar aprendiendo →",
      closing: ["Nos vemos la próxima semana."],
    }),
  },
  {
    key: "inactividad_prolongada",
    subject: "Tu objetivo sigue aquí",
    html: email({
      heading: "Tu objetivo sigue aquí, {{nombre}}",
      paragraphs: [
        "Hace algún tiempo que no entras en Novara. Tu progreso sigue guardado y puedes continuar exactamente donde lo dejaste.",
        "No importa cuánto tiempo haya pasado.",
      ],
      ctaLabel: "Volver a Novara →",
      closing: ["Tu objetivo sigue siendo el mismo. Y todavía puedes conseguirlo."],
    }),
  },
];

async function main() {
  let created = 0;
  let updated = 0;
  for (const t of TEMPLATES) {
    const existing = await db.emailTemplate.findUnique({ where: { key: t.key } });
    await db.emailTemplate.upsert({
      where: { key: t.key },
      create: { key: t.key, subject: t.subject, bodyHtml: t.html, isActive: true },
      update: { subject: t.subject, bodyHtml: t.html },
    });
    if (existing) updated++;
    else created++;
  }
  console.warn(`✅ Plantillas de correo: ${created} creadas, ${updated} actualizadas (total ${TEMPLATES.length}).`);
  await db.$disconnect();
}
main().catch((e) => {
  console.error("❌ Error sembrando plantillas:", e);
  process.exit(1);
});
