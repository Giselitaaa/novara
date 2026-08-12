import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

import pg from "pg";

/**
 * Prepara una base de datos de test AISLADA para los E2E de Playwright.
 *
 * Crea (si no existe) una base `neondb_test` en la MISMA instancia que la
 * de desarrollo — nunca toca los datos reales —, genera `.env.test.local`
 * apuntando a ella, sincroniza el esquema y siembra catálogos + fixtures.
 *
 * Uso:  node scripts/setup-test-db.mjs      (o `npm run test:e2e:setup`)
 *
 * Requisito: `.env` con DATABASE_URL válida (la de desarrollo). La base de
 * test se deriva cambiando el nombre a `neondb_test`. Si tu proveedor no
 * permite CREATE DATABASE por SQL, crea `neondb_test` a mano y vuelve a
 * ejecutar: el script detecta que ya existe y continúa.
 */
const ROOT = process.cwd();
const env = readFileSync(`${ROOT}/.env`, "utf8");
const devUrl = env.match(/^DATABASE_URL="([^"]+)"/m)?.[1];
if (!devUrl) throw new Error("No se encontró DATABASE_URL en .env");

const dbName = "neondb_test";
// Deriva las URLs de test: pooler para la app, directa (no-pooler) para
// migraciones/seed y para CREATE DATABASE.
const poolerUrl = devUrl.replace(/\/[^/?]+(\?|$)/, `/${dbName}$1`);
const directUrl = poolerUrl.replace("-pooler.", ".");
// El maintenance-connection para CREATE DATABASE va a la base original.
const adminUrl = devUrl.replace("-pooler.", ".");

async function ensureDatabase() {
  const client = new pg.Client({ connectionString: adminUrl });
  await client.connect();
  const exists = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName]);
  if (exists.rowCount === 0) {
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`✅ Base de datos de test '${dbName}' creada.`);
  } else {
    console.log(`ℹ️  Base de datos de test '${dbName}' ya existe — se reutiliza.`);
  }
  await client.end();
}

function writeEnvFile() {
  const path = `${ROOT}/.env.test.local`;
  const body =
    `# Base de datos de test AISLADA (misma instancia, base '${dbName}'). Solo E2E.\n` +
    `# Generado por scripts/setup-test-db.mjs — no contiene datos reales.\n` +
    `DATABASE_URL="${poolerUrl}"\n` +
    `DIRECT_URL="${directUrl}"\n`;
  writeFileSync(path, body);
  console.log(`✅ Escrito ${existsSync(path) ? "" : ""}.env.test.local`);
}

await ensureDatabase();
writeEnvFile();

// Sincroniza esquema + siembra, con el entorno apuntando a la base de test.
const testEnv = { ...process.env, DATABASE_URL: directUrl, DIRECT_URL: directUrl };
const run = (cmd) => execSync(cmd, { stdio: "inherit", env: testEnv, cwd: ROOT });

console.log("→ Sincronizando esquema en la base de test…");
run("npx prisma db push --skip-generate");
console.log("→ Sembrando catálogos base…");
run("npx tsx prisma/seed.ts");
console.log("→ Sembrando fixtures E2E…");
run("npx tsx tests/fixtures/seed-test-data.ts");

console.log("\n✅ Base de datos de test lista. Para correr los E2E:");
console.log("   1) Arranca el server contra la base de test (conexión DIRECTA):");
console.log(`      DATABASE_URL='${directUrl.replace(/npg_[^@]+/, "***")}' \\`);
console.log("      AUTH_URL=http://localhost:3100 NEXT_PUBLIC_APP_URL=http://localhost:3100 \\");
console.log("      npx next start -p 3100");
console.log("   2) En otra terminal:");
console.log("      DATABASE_URL=<directa> PLAYWRIGHT_BASE_URL=http://localhost:3100 npx playwright test");
