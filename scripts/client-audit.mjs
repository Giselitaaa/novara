/**
 * Auditoría de errores de CLIENTE con navegador real (Playwright).
 * Visita rutas anónimas y autenticadas, abre el menú de usuario, y
 * captura errores de consola y excepciones de runtime que curl no ve.
 * Uso: node scripts/client-audit.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3001";
const COURSE_SLUG = "ingles-a1";

const anonRoutes = [
  "/es",
  "/en",
  "/es/cursos",
  "/es/categorias",
  "/es/categorias/idiomas",
  `/es/cursos/${COURSE_SLUG}`,
  "/es/blog",
  "/es/soporte",
  "/es/legal/terminos",
  "/es/legal/privacidad",
  "/es/legal/cookies",
  "/es/auth/iniciar-sesion",
  "/es/auth/crear-cuenta",
  "/es/auth/recuperar-contrasena",
];
const authRoutes = [
  "/es/perfil",
  "/es/mi-aprendizaje",
  "/es/notificaciones",
  "/es/ranking",
  "/es/mi-aprendizaje/historial",
  `/es/cursos/${COURSE_SLUG}/aprender`,
  `/es/cursos/${COURSE_SLUG}/proyecto-final`,
  `/es/cursos/${COURSE_SLUG}/comprar`,
  "/es/admin",
  "/es/admin/cursos",
  "/es/admin/cursos/nuevo",
  "/es/admin/cursos/importar",
  "/es/admin/categorias",
  "/es/admin/categorias/nueva",
  "/es/admin/usuarios",
  "/es/admin/pagos",
  "/es/admin/examenes",
  "/es/admin/examenes/nuevo",
  "/es/admin/examenes/preguntas",
  "/es/admin/blog",
  "/es/admin/correos",
  "/es/admin/analiticas",
  "/es/admin/configuracion",
  "/es/admin/afiliados",
  "/es/admin/soporte",
  "/es/admin/proyectos",
  "/es/admin/ejercicios",
  "/es/admin/resenas",
  "/es/admin/preguntas",
  "/es/soporte",
];

const results = [];

async function visit(page, path, label) {
  const errors = [];
  const onConsole = (msg) => {
    if (msg.type() === "error") errors.push("console: " + msg.text().slice(0, 200));
  };
  const onPageError = (err) =>
    errors.push("pageerror: " + String(err.message).split("\n")[0].slice(0, 200));
  page.on("console", onConsole);
  page.on("pageerror", onPageError);
  let status = "?";
  try {
    const resp = await page.goto(BASE + path, {
      waitUntil: "networkidle",
      timeout: 45000,
    });
    status = resp ? resp.status() : "no-resp";
    await page.waitForTimeout(600); // dejar que hidrate y corran efectos
  } catch (e) {
    errors.push("navegación: " + String(e.message).split("\n")[0].slice(0, 120));
  }
  page.off("console", onConsole);
  page.off("pageerror", onPageError);
  // filtrar ruido irrelevante (404 de favicon, analítica externa bloqueada, etc.)
  const real = errors.filter(
    (e) =>
      !/favicon|the server responded with a status of 4|Failed to load resource.*(analytics|gtag|clarity|plausible)/i.test(
        e
      )
  );
  results.push({ path, label, status, errors: real });
  const tag = real.length === 0 ? "OK" : "‼ " + real.length;
  console.log(`  [${label}] ${String(status).padEnd(3)} ${tag.padEnd(5)} ${path}`);
  for (const e of real) console.log(`       └─ ${e}`);
}

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

console.log("── ANÓNIMO ──");
for (const r of anonRoutes) await visit(page, r, "anon");

// Login como admin vía formulario real
console.log("── LOGIN admin ──");
await page.goto(BASE + "/es/auth/iniciar-sesion", { waitUntil: "networkidle" });
await page.fill('input[name="email"]', "admin@novara.local");
await page.fill('input[name="password"]', "Admin123!");
await Promise.all([
  page.waitForNavigation({ waitUntil: "networkidle", timeout: 30000 }).catch(() => {}),
  page.click('button[type="submit"]'),
]);
await page.waitForTimeout(1000);
const loggedIn = (await context.cookies()).some((c) => c.name.includes("session-token"));
console.log("  sesión iniciada:", loggedIn);

// Probar el menú de usuario (el bug del dropdown)
console.log("── MENÚ DE USUARIO (dropdown) ──");
{
  const errors = [];
  page.on("pageerror", (e) =>
    errors.push(String(e.message).split("\n")[0].slice(0, 160))
  );
  await page.goto(BASE + "/es", { waitUntil: "networkidle" });
  try {
    await page
      .locator(
        '[aria-label="Perfil"], [aria-label="Mi perfil"], header button:has(.rounded-full), header [class*="Avatar"], header button'
      )
      .last()
      .click({ timeout: 5000 });
    await page.waitForTimeout(500);
    const menuVisible = await page
      .locator("text=Cerrar sesión")
      .first()
      .isVisible()
      .catch(() => false);
    console.log(
      "  menú abierto sin crash:",
      errors.length === 0,
      "| item visible:",
      menuVisible
    );
    if (errors.length) errors.forEach((e) => console.log("   ‼ " + e));
  } catch (e) {
    console.log(
      "  no se pudo abrir el menú:",
      String(e.message).split("\n")[0].slice(0, 100)
    );
  }
}

console.log("── AUTENTICADO / ADMIN ──");
for (const r of authRoutes) await visit(page, r, "auth");

await browser.close();

const withErr = results.filter((r) => r.errors.length > 0);
console.log("\n══════════════════════════════════");
console.log(`TOTAL rutas: ${results.length} | con errores de cliente: ${withErr.length}`);
if (withErr.length) {
  console.log("RUTAS CON ERRORES:");
  for (const r of withErr) console.log(`  ${r.path} (${r.errors.length})`);
}
process.exit(withErr.length > 0 ? 1 : 0);
