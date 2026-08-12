# NOVARA — Guía de despliegue

Procedimiento reproducible para desplegar NOVARA. Todo lo aquí descrito
se ha verificado en local salvo lo que se indique explícitamente.

## 1. Requisitos

- **Node.js ≥ 20**
- **PostgreSQL 16** (o compatible; el proyecto usa Neon en desarrollo)
- Opcional según funciones: cuenta de **Resend** (email), bucket **S3/R2**
  (subida de archivos), claves de **Anthropic/OpenAI** (asistente de IA),
  **Stripe** (pago con tarjeta).

## 2. Variables de entorno

Copia `.env.example` a `.env` y rellena. Imprescindibles para arrancar:

| Variable | Para qué |
|---|---|
| `DATABASE_URL` / `DIRECT_URL` | Conexión a PostgreSQL (Prisma) |
| `AUTH_SECRET` | Firma de sesiones (genera con `npx auth secret`) |
| `AUTH_URL` / `NEXT_PUBLIC_APP_URL` | URL pública de la app |

Opcionales (activan funciones; sin ellas, la función degrada con
elegancia y lo indica, nunca finge):

| Variable(s) | Activa |
|---|---|
| `RESEND_API_KEY`, `EMAIL_FROM` | Envío real de emails (si no, se registran en `EmailLog` y se imprimen) |
| `AI_PROVIDER`, `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` | Asistente de IA del panel |
| `STORAGE_*` | Subida real de archivos (si no, se pega una URL) |
| `PAYMENT_PROVIDER`, `STRIPE_*` | Pago con tarjeta (si no, flujo manual Bizum/transferencia) |
| `CRON_SECRET` | Endpoint de retención `/api/cron/retention` (si no, deshabilitado) |

## 3. Primer arranque

```bash
npm install
cp .env.example .env            # y rellenar (ver arriba)
npx prisma migrate deploy       # aplica el esquema (ver nota de migraciones)
npm run db:seed                 # catálogos + administrador de arranque
npm run build                   # build de producción — VERIFICADO OK
npm run start                   # sirve en el puerto 3000
```

**Administrador de arranque** (creado por el seed): `admin@novara.local` /
`Admin123!`. El seed es **idempotente** (upserts): ejecutarlo varias
veces no duplica nada y **nunca sobrescribe** la contraseña si el admin
ya existe.

### Nota sobre migraciones

Ya existe la **migración inicial** en `prisma/migrations/0_init/` (90
tablas). Se generó con `prisma migrate diff` a partir del esquema y se
**verificó aplicándola a una base de datos limpia** (se crea sin errores y
produce las 90 tablas). `migration_lock.toml` fija el proveedor
`postgresql`.

- **Base de datos NUEVA** (producción desde cero): `npx prisma migrate
  deploy` aplica `0_init` y crea todo el esquema.
- **Base de datos EXISTENTE** que ya se sincronizó con `db push` (p. ej. la
  de desarrollo actual): **baselínala** una vez para que `migrate deploy`
  no intente recrear tablas ya presentes:

  ```bash
  npx prisma migrate resolve --applied 0_init
  ```

  (marca la migración como ya aplicada en `_prisma_migrations`; es la única
  escritura y es puramente aditiva).

Las siguientes migraciones se crean ya de forma normal con
`npx prisma migrate dev --name <cambio>`.

## 4. Docker

Existe `Dockerfile` (multi-stage, `output: "standalone"`) y
`docker-compose.yml` (app + Postgres). **No se ha podido construir la
imagen en este entorno porque Docker no está instalado aquí** — el
Dockerfile está revisado por inspección y es coherente con el build
`standalone`, pero su construcción debe verificarse en una máquina con
Docker:

```bash
docker compose up -d --build      # levanta app + base de datos
curl http://localhost:3000/api/health   # debe responder {"status":"ok"}
```

Nota: si se usa la subida de archivos con `@aws-sdk`, no requiere binarios
del sistema. La generación de PDF (facturas y certificados) usa `pdf-lib`
(JS puro, sin navegador headless), así que el Dockerfile **no necesita**
Chromium.

## 5. Salud y monitorización

- `GET /api/health` comprueba app + conexión a base de datos. **Verificado**:
  responde `{"status":"ok","database":"connected"}`.

## 6. Backups

Existe `scripts/backup-db.sh` (con retención). Programar un backup diario
y **probar una restauración** antes de confiar en él (un backup no
restaurado no es un backup). No se ha ejecutado en este entorno por no
tener el `pg_dump` del proveedor a mano — verificar en el entorno real.

## 7. Tareas programadas (cron)

Los emails de retención NO se envían solos. Programar una llamada diaria:

```bash
0 9 * * *  curl -H "Authorization: Bearer $CRON_SECRET" https://TU-DOMINIO/api/cron/retention
```

(cron del proveedor de hosting, GitHub Actions o `pg_cron`).

## 8. Seguridad — nota de dependencias (`npm audit`)

Ya se ejecutó `npm audit fix` (correcciones **no disruptivas**); no cambió
versiones de librerías núcleo y el build + tests + typecheck siguen en
verde. Las advertencias que quedan (16: 2 bajas, 5 moderadas, 4 altas, 5
críticas) son **advisories upstream conocidos** que requieren bumps de
versión **mayor** (solo `npm audit fix --force`), no fallos del código de
NOVARA:

- `next` / `next-auth` / `@auth/core` — subir a la última de su línea.
- `next-intl` — advisory de open-redirect; actualizar a la versión parcheada.
- `sharp` / `libvips` — tooling de imagen (build); patch en una minor nueva.
- Árbol de `@aws-sdk` (`fast-xml-parser`, `@smithy/*`) — se corrige subiendo
  el SDK.
- `vitest` / `esbuild` — **solo dev** (el aviso aplica al server de la API de
  test escuchando en local); no llega a producción.

**Remediación recomendada antes del lanzamiento** (pase dedicado, con
re-test del build y de los flujos críticos — NO a ciegas):

```bash
# Revisar y, con test tras cada uno, aplicar los bumps mayores:
npm i next@latest next-auth@latest next-intl@latest sharp@latest
npm i @aws-sdk/client-s3@latest @aws-sdk/s3-request-presigner@latest
npm run typecheck && npm run test && npm run build   # re-verificar
```

No se aplicaron los bumps mayores aquí para no cambiar versiones de
framework/auth sin poder re-verificar toda la plataforma (incluidos los
e2e) en el mismo pase. Es el primer punto de la checklist de seguridad
pre-lanzamiento.

## 9. Rate limiting en producción

El limitador (`src/lib/rate-limit.ts`) es **en memoria** — válido para una
sola instancia. Con varias réplicas/serverless, sustituir por Upstash
Redis (o similar) manteniendo la firma `checkRateLimit(key, limit,
windowSeconds)`; el resto del código no cambia.

## 10. CI

`.github/workflows/ci.yml` corre formato, lint, **typecheck**, **tests
(Vitest)** y build. El lint va como paso propio (no como gate del build).
