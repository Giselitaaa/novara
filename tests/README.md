# Testing de NOVARA

> **Aviso honesto**: todo lo de esta carpeta se ha escrito pero **no se
> ha ejecutado** en el entorno donde se generó — ese entorno no tiene
> `node_modules` instalado, ni base de datos, ni navegador. Antes de
> confiar en estos tests, ejecútalos tú mismo. Esta documentación
> explica cómo.

## Estructura

```
tests/
├── unit/           # Funciones puras, sin base de datos (Vitest)
├── integration/     # Server actions con dependencias mockeadas (Vitest)
├── e2e/              # Flujos completos con navegador real (Playwright)
└── fixtures/         # Datos de prueba deterministas para E2E
```

## Tests unitarios e integración (Vitest)

```bash
npm install
npm run test          # una sola ejecución
npm run test:watch    # modo watch
npm run test:ui        # interfaz visual
```

Cubren:
- `lib/slug.ts` — slugify y generación de slugs únicos.
- `lib/format.ts` — formato de duración, precio, iniciales.
- `lib/rate-limit.ts` — límite de peticiones, ventanas, claves independientes.
- `modules/ai/server/generation.ts` — validación de la respuesta del
  proveedor de IA (con un proveedor simulado — nunca llama a una API
  real ni inventa una respuesta de IA de verdad).

## Tests E2E (Playwright)

Requieren la aplicación corriendo de verdad contra una base de datos
de test, **nunca contra producción**:

```bash
# 1. Base de datos de test (puede ser la del docker-compose, apuntando
#    a una DB distinta a la de desarrollo)
DATABASE_URL="postgresql://novara:novara@localhost:5432/novara_test" \
  npx prisma migrate deploy

DATABASE_URL="postgresql://novara:novara@localhost:5432/novara_test" \
  npm run db:seed

DATABASE_URL="postgresql://novara:novara@localhost:5432/novara_test" \
  npx tsx tests/fixtures/seed-test-data.ts

# 2. Arrancar la app apuntando a esa misma base de datos
DATABASE_URL="postgresql://novara:novara@localhost:5432/novara_test" \
  npm run build && npm run start

# 3. En otra terminal, ejecutar los tests
npx playwright install --with-deps chromium   # una sola vez
npm run test:e2e
```

Cubren, tal como pide esta fase:

| Spec | Cubre |
|---|---|
| `auth.spec.ts` | Registro, login, error de credenciales sin revelar si el email existe |
| `course-access.spec.ts` | Inscripción a curso gratuito, acceso al reproductor, marcar lección completada |
| `purchase-flow.spec.ts` | Compra premium → instrucciones → justificante → aprobación del admin → acceso concedido |
| `exam-and-certificate.spec.ts` | Creación de examen (admin) → intento del alumno → corrección automática → certificado emitido |
| `admin-panel.spec.ts` | Control de acceso por rol, dashboard, creación de categoría |
| `ai-assistant.spec.ts` | Degradación honesta sin clave de IA (o generación real si la hay) |

### Sobre `ai-assistant.spec.ts`

Sin `ANTHROPIC_API_KEY`/`OPENAI_API_KEY` configuradas (el caso de
cualquier entorno nuevo), este test comprueba que el asistente
muestra un error claro — nunca una respuesta inventada. Si esas
claves SÍ están configuradas al ejecutar el test, hará una llamada
real a la API (con el coste que corresponda).

## Lo que falta para un test suite realmente completo

- Tests unitarios de la lógica de corrección de exámenes
  (`gradeAndSubmitAttempt`) aislada de Prisma — hoy solo se prueba
  indirectamente vía el E2E.
- Tests de los componentes de UI más complejos (`ExamRunner`,
  `ModulesEditor`) con Testing Library — la dependencia ya está
  instalada (`@testing-library/react`) pero no se ha escrito ningún
  test de componente todavía.
- Un `docker-compose.test.yml` dedicado que levante una Postgres
  efímera solo para CI, en vez de depender de una instancia ya
  corriendo localmente.
