# Tests E2E (Playwright)

Estos tests recorren flujos completos en un navegador real contra una
instancia de la app **servida** y una **base de datos de test dedicada**
(`neondb_test`), nunca contra la de desarrollo o producción.

## Estado

Los 6 ficheros (12 tests) pasan de extremo a extremo: registro/login,
autorización del panel admin (incl. que un no-admin no accede), acceso a
curso gratuito y progreso, asistente de IA (degradación honesta sin clave),
compra manual con aprobación del admin, y examen + emisión de certificado.

> La suite corre contra una base de datos **remota** (Neon), así que los
> timeouts son amplios y hay `retries: 2` para absorber la latencia
> transitoria de una ejecución secuencial larga. Un fallo real falla en
> todos los intentos; un "flaky" que pasa al reintentar es un pase.

## Puesta en marcha (una vez)

```bash
# 1) Crea la base de test, escribe .env.test.local, sincroniza y siembra.
npm run test:e2e:setup
```

Esto crea `neondb_test` en la misma instancia (aislada de los datos
reales), genera `.env.test.local`, aplica el esquema y siembra catálogos +
fixtures (`tests/fixtures/seed-test-data.ts`).

## Ejecutar

En una terminal, arranca la app **compilada** apuntando a la base de test.
Importante: usa la conexión **DIRECTA** (sin `-pooler`), más estable para
las transacciones de un server de larga vida:

```bash
npm run build
set -a; source .env.test.local; set +a
DATABASE_URL="$DIRECT_URL" \
AUTH_URL=http://localhost:3100 NEXTAUTH_URL=http://localhost:3100 \
NEXT_PUBLIC_APP_URL=http://localhost:3100 \
npx next start -p 3100
```

En otra terminal, lanza Playwright (necesita `DATABASE_URL` para la
limpieza entre tests y `PLAYWRIGHT_BASE_URL` para saber dónde está la app):

```bash
set -a; source .env.test.local; set +a
DATABASE_URL="$DIRECT_URL" PLAYWRIGHT_BASE_URL=http://localhost:3100 \
npm run test:e2e
```

## Aislamiento entre tests

- El fixture siembra datos deterministas (admin/alumno de test, curso
  gratuito y premium).
- Los tests con estado (compra, examen) limpian su propio punto de partida
  en un `beforeEach` (`tests/e2e/db-reset.ts`, SQL directo), de modo que el
  orden de ejecución y los reintentos no los contaminan.
- Para un reinicio total: vuelve a ejecutar `npm run test:e2e:setup` (o
  trunca y re-siembra la base de test).

## Notas

- El navegador de test pide español (`locale: es-ES`): la app negocia el
  idioma por `Accept-Language` en rutas sin prefijo, y toda la suite está
  escrita contra la UI en castellano.
- Las páginas admin usan streaming RSC; los `goto` a ellas usan
  `waitUntil: "domcontentloaded"` para no esperar un evento `load` que el
  stream puede diferir.
