# NOVARA

Academia online premium. Este repositorio contiene la base técnica del proyecto.

## Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui (Radix primitives) + Framer Motion
- **Base de datos**: PostgreSQL + Prisma
- **Autenticación**: Auth.js (NextAuth v5)
- **i18n**: next-intl (es/en desde el inicio)
- **Estado de servidor**: TanStack Query
- **Formularios**: React Hook Form + Zod
- **Email transaccional**: Resend

## Arranque local

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno y rellenarlas
cp .env.example .env

# 3. Generar el cliente de Prisma y aplicar el esquema
npm run db:generate
npm run db:migrate

# 4. Arrancar en desarrollo
npm run dev
```

## Estructura del proyecto

```
src/
├── app/                    # Rutas (App Router), organizadas por [locale]
│   └── [locale]/           # Toda la plataforma vive bajo el idioma
├── components/
│   ├── ui/                 # Componentes del Design System (shadcn/ui)
│   ├── layout/              # Header, footer, shells de página
│   └── providers/           # Providers globales (tema, query, etc.)
├── modules/                 # Arquitectura modular por dominio de negocio
│   ├── users/
│   ├── courses/
│   ├── categories/
│   ├── enrollments/
│   ├── exams/
│   ├── certificates/
│   ├── payments/
│   ├── gamification/
│   ├── notifications/
│   ├── cms/
│   └── support/
│       ├── server/          # Server actions, queries, lógica de dominio
│       └── types/           # Tipos específicos del dominio
├── lib/                      # Infraestructura transversal (db, auth, utils)
├── i18n/                      # Configuración y mensajes de idioma
├── config/                    # Configuración de la aplicación (constantes)
└── types/                     # Tipos globales / ambient
```

### Por qué `modules/` y no todo en `app/`

Cada dominio de negocio (cursos, pagos, exámenes...) tiene su propia
carpeta con su lógica de servidor y sus tipos, independiente de las
rutas que la usan. Esto permite:

- Que la lógica de negocio no quede atrapada dentro de una ruta
  concreta y se pueda reutilizar desde la API, desde Server Actions,
  o desde un futuro job en background.
- Que el equipo pueda trabajar en paralelo por dominio sin pisarse.
- Que, cuando llegue la app móvil, la lógica de dominio en `modules/`
  sea reutilizable desde un backend compartido en el monorepo.

## Base de datos

El esquema completo vive en `prisma/schema.prisma` y es la traducción
directa del documento de arquitectura de datos ya aprobado. Cualquier
cambio de modelo empieza por actualizar ese documento, no al revés.

```bash
npm run db:studio   # Explorador visual de la base de datos
```

## Convenciones de código

- **Imports**: siempre con alias `@/...`, nunca rutas relativas largas
  (`../../../`). Configurado en `tsconfig.json` y forzado por ESLint.
- **Componentes de Design System**: en `components/ui`, generados con
  shadcn/ui. No se editan a mano salvo necesidad justificada — se
  regeneran con la CLI para no perder actualizaciones.
- **Server-first**: por defecto, todo componente es Server Component.
  Solo se marca `"use client"` cuando hay estado, efectos o eventos
  del navegador.
- **Estilos**: solo utilidades de Tailwind + tokens del Design System
  (variables CSS en `globals.css`). No se hardcodean colores hex en
  componentes.

## Estado del proyecto

- [x] Fase 1 — Base técnica del proyecto
- [x] Fase 2 — Layout global, Design System base y landing page definitiva
- [x] Fase 3 — Autenticación completa, catálogo de cursos, página de curso, perfil de usuario
- [x] Fase 4 — Panel de administración completo (10 módulos) y flujo de pagos manuales
- [x] Fase 5 — Experiencia del alumno: dashboard, reproductor, exámenes, certificados, gamificación
- [x] Fase 6 — IA, SEO, analíticas, afiliados, búsqueda avanzada, seguridad, rendimiento, producción
- [x] Fase 7 (última) — Auditoría, testing, pulido y checklist de lanzamiento

**Desarrollo completado.** Ver `AUDITORIA_FASE7.md` para el informe
completo de la auditoría final, las correcciones aplicadas y la
checklist real de lanzamiento — es el documento que hay que leer antes
de desplegar.

### Bootstrap del administrador (post-Fase 7)

`prisma/seed.ts` no sembraba ningún usuario con rol "administrador" —
una instalación nueva no tenía ninguna vía de entrar a `/admin`. Ahora
`npm run db:seed` crea (o reutiliza, vía `upsert`, ejecutable
infinitas veces sin duplicar nada) un administrador con:

- Email `admin@novara.local` / contraseña `Admin123!`.
- Contraseña hasheada exactamente igual que el registro real
  (`bcrypt`, coste 12 — mismo código que
  `modules/users/server/actions.ts`), nunca en texto plano.
- Rol `administrador` y estado `activo` garantizados en cada
  ejecución, pero **la contraseña nunca se sobrescribe si el usuario
  ya existe** — un admin real puede haberla cambiado desde `/perfil`,
  y un seed que corra en cada despliegue no debe poder resetearla por
  sorpresa.
- Mensaje final distinto según el caso: credenciales completas si se
  acaba de crear, aviso de reutilización si ya existía.

### Añadido después del cierre de la Fase 7

**Páginas legales y de soporte** (`/legal/terminos`, `/legal/privacidad`,
`/legal/cookies`, `/soporte`) — corrigen los 404 que colgaban del
footer. Contenido profesional real, bilingüe (es/en) vía next-intl.
`/soporte` incluye un formulario funcional que crea un `SupportTicket`
real (modelo que existía en el esquema desde la Fase 1 sin usar).

**Estándar NOVARA de curso** — ampliación aditiva del sistema de
cursos:
- `LessonPedagogy`: los 10 puntos pedagógicos por lección (objetivo,
  ejemplos, errores frecuentes, esquema visual, mapa mental, resumen,
  repaso) — editable desde el panel de admin, visible en el
  reproductor del alumno.
- `Exam.moduleId`: tests de módulo con desbloqueo real por nota
  mínima — un módulo con test bloquea (en servidor, no solo
  visualmente) las lecciones de los módulos siguientes hasta
  aprobarlo.
- `ExerciseSubmission` + corrección inteligente: el alumno entrega un
  ejercicio y el asistente de IA lo corrige al momento (mismo
  proveedor multi-IA ya construido); sin clave de API configurada,
  la entrega queda honestamente "pendiente de revisión", nunca se
  inventa una corrección.
- `CourseFinalProject` + entrega del alumno: proyecto final opcional
  por curso, con su propia página de entrega.
- **Importación de cursos completos por JSON**
  (`/admin/cursos/importar`): crea un curso entero — módulos,
  lecciones, pedagogía, tests de módulo, proyecto final — de una sola
  operación a partir de un JSON que cumple `courseImportSchema`. Es
  el mecanismo para escalar a cientos de cursos sin tocar código.

### Módulo 1 — Asistente de IA (`/admin/cursos/nuevo`, editor de curso, banco de preguntas)

Arquitectura multi-proveedor real, sin respuestas simuladas: interfaz
`AIProvider` común (`src/modules/ai/server/provider.ts`) con
implementaciones Anthropic y OpenAI vía `fetch` directo (sin SDK,
menos una dependencia). Cambiar de proveedor es una variable de
entorno (`AI_PROVIDER`), no tocar código. **Sin `ANTHROPIC_API_KEY` u
`OPENAI_API_KEY` configurada, el asistente lo dice explícitamente en
vez de fingir una respuesta** — así es como debe comportarse en este
entorno de desarrollo, que no tiene esas claves.

Genera: estructura completa de curso (objetivos, requisitos, módulos,
lecciones), contenido de lección, instrucciones de ejercicio,
preguntas de examen, resúmenes y metadatos SEO. **Nada se publica
automáticamente**: todo pasa por una pantalla de revisión editable
antes de persistirse (`createCourseFromAIStructure`,
`createQuestionsFromGenerated`), reutilizando las mismas server
actions del panel de administración normal — cero lógica duplicada.

### Módulo 2 — SEO (`lib/seo.ts`, `lib/json-ld.tsx`)

Metadata dinámica + Open Graph + Twitter Cards (curso, con patrón
replicable al resto de páginas), canonical, JSON-LD real (Organization
site-wide, Course, BreadcrumbList, FAQPage, BlogPosting),
`sitemap.xml` y `robots.txt` dinámicos (convenciones de archivo de
Next.js, consultando cursos/categorías/blog publicados), feed RSS del
blog en `/feed.xml`.

### Módulo 3 — Analíticas

Desacoplado en dos mitades independientes:
- **Externas** (`AnalyticsScripts`): GA, GTM, Clarity y Plausible,
  cada una activa solo si tiene su ID relleno en
  `/admin/configuracion`, todas apagables con un interruptor.
- **Internas** (`/admin/analiticas`): usuarios, cursos, conversión de
  pagos, finalización de cursos, tiempo medio de estudio, cursos más
  vendidos, categorías más pobladas, embudo de compra — todo calculado
  sobre datos propios de Prisma, no sobre analítica externa.

### Módulo 4 — Afiliados (arquitectura completa, desactivada por defecto)

Tres tablas nuevas y aisladas (`Affiliate`, `AffiliateReferral`,
`AffiliatePayout`). Flujo real: captura de `?ref=CODE` en cookie →
vínculo al registrarse → confirmación de comisión al aprobar el pago
del referido. Todo detrás del interruptor `affiliate_program_enabled`
(Configuración global) — apagado, ninguna de estas funciones actúa.
Panel del afiliado en `/perfil` (pestaña "Afiliados"), vista de
administración en `/admin/afiliados`.

### Módulo 5 — Búsqueda avanzada

La paleta de comandos (Cmd/Ctrl+K) ahora incluye autocompletado (ya
existente, debounced), búsquedas recientes (localStorage, sin
servidor) y tendencias — cursos con más inscripciones en 30 días, una
métrica de negocio real en vez de un contador de búsquedas inventado.

### Módulo 6 — Seguridad

Cabeceras de seguridad completas en `next.config.ts` (CSP, X-Frame-Options,
HSTS, Referrer-Policy, Permissions-Policy). Rate limiting en memoria
(`lib/rate-limit.ts`) aplicado a login, registro y recuperación de
contraseña — **limitación documentada en el propio archivo**: al vivir
en memoria del proceso, no es válido con múltiples instancias; el
contrato (`checkRateLimit`) está pensado para sustituirse por Redis
sin tocar los llamadores. CSRF: cubierto por la protección nativa de
Server Actions de Next.js (verificación de origen). XSS: React escapa
por defecto; los únicos `dangerouslySetInnerHTML` de la plataforma
están confinados a `JsonLd` y la vista previa de plantillas de correo
del admin, ambos con contenido controlado por el propio equipo, nunca
por un alumno. Inyección SQL: no aplica — Prisma parametriza todas las
consultas. Auditoría: `AuditLog` ya cubre las acciones administrativas
sensibles desde la Fase 4.

### Módulo 7 — Rendimiento

ISR real (`revalidate = 300`) en categorías y blog, que no dependen de
sesión. En la página de curso se documenta honestamente que el uso de
`auth()` fuerza renderizado dinámico pese al `revalidate` declarado —
no se finge una ganancia de caché que no existe. `loading.tsx` con
esqueletos en catálogo y curso. `optimizePackageImports` ya activo
desde la Fase 1. **Nota honesta sobre Lighthouse**: no se puede
ejecutar Lighthouse real en este entorno (sin navegador ni build
corriendo) — las optimizaciones aplicadas son las que se pueden hacer
a nivel de código; medir el 95+ real requiere ejecutar Lighthouse
sobre un despliegue de verdad.

### Módulo 8 — Preparación para producción

`Dockerfile` multi-stage (`output: "standalone"`), `docker-compose.yml`
(app + Postgres con healthcheck), endpoint `/api/health` (comprueba
también conectividad real a la base de datos, no solo que el proceso
responda), script de backup (`scripts/backup-db.sh`, con retención de
30 días), workflow de CI en GitHub Actions (`.github/workflows/ci.yml`:
lint, typecheck, migraciones, build) — listo para conectarse a
despliegue continuo en cuanto se elija proveedor.

### Experiencia del alumno (`/mi-aprendizaje`, `/cursos/[slug]/aprender`, `/examenes`)

| Módulo | Dónde | Cubre |
|---|---|---|
| Dashboard | `/mi-aprendizaje` | Bienvenida, continuar curso, en progreso/finalizados/favoritos, certificados, tiempo estudiado (total y semanal), objetivo semanal, racha, XP/nivel, calendario de estudio (14 días), actividad reciente, notificaciones, insignias, recomendados |
| Reproductor | `/cursos/[slug]/aprender/[lessonId]` | Todos los tipos de contenido, navegación prev/next, guardado automático de posición (vídeo/audio), continuar exactamente donde se quedó, notas personales, marcar completada |
| Exámenes | `/examenes/[examId]` | Instrucciones, temporizador, navegación entre preguntas, corrección automática, resultados detallados, historial de intentos |
| Certificados | `/verificar/[code]` | Diseño premium, código único, QR, verificación pública, sin necesidad de PDF en servidor (imprimible) |
| Gamificación | integrada | XP, niveles, rachas, logros/insignias con reglas basadas en datos reales (sin IA) |
| Notificaciones | campanita del header + `/notificaciones` | Leído/no leído, pagos, logros, certificados |
| Recomendaciones | dashboard | Basadas en categorías del historial real del alumno, sin IA |
| Búsqueda global | Cmd/Ctrl+K | Cursos, categorías, blog, recursos (+ FAQ de la landing en cliente) |

### Ajustes de arquitectura de esta fase

- **`LessonNote`**: única tabla nueva del esquema, aislada (no toca ningún modelo existente) — notas personales del alumno por lección, funcionalidad central de esta fase que el modelo v1 no prevenía explícitamente.
- **Certificados sin generador de PDF en servidor**: en vez de `puppeteer`/Chromium headless (no verificable en este entorno sin red), el certificado es una página HTML con diseño premium y estilos de impresión — "descargar PDF" es "Guardar como PDF" del navegador. El código/QR/verificación pública son reales y funcionan igual.
- **Objetivo semanal fijo (180 min)**: el modelo de datos no incluye un campo de objetivo personalizable por alumno; añadir uno para una sola pantalla no se justificaba. Fácil de convertir en configurable más adelante.
- **"Recursos descargados" (Módulo 9) no implementado**: no existe ningún
  mecanismo de tracking de descargas en el modelo de datos aprobado.
  Añadir uno (tabla de eventos de descarga) es sencillo, pero preferí
  dejarlo señalado aquí en vez de ampliar el esquema sin que se pidiera
  explícitamente en esta fase.
- **Exámenes**: "opción múltiple" se trata como respuesta única (una correcta por pregunta) en el corrector automático; "ordenar"/"relacionar" se corrigen por coincidencia de conjunto de opciones, no por orden exacto — corrección automática completa para los tipos de uso más común, simplificada para los dos tipos menos frecuentes.
- **Middleware**: añadidas `/mi-aprendizaje`, `/notificaciones` y `/examenes` a las rutas protegidas. `/cursos/[slug]/aprender` no se pudo añadir por prefijo sin proteger todo `/cursos` (que es público) — esa página hace su propia comprobación de sesión, mismo patrón que ya usaba `/perfil`.

### Panel de administración (`/admin`)

Protegido por rol (`requireAdmin()` en el layout — corta una sola vez para
todas las páginas). Reorganicé el enrutado en un grupo `(site)` para que
el panel no herede el header/footer públicos (ver más abajo).

| Módulo | Ruta | Cubre |
|---|---|---|
| Dashboard | `/admin` | Estadísticas reales, accesos rápidos, últimos pagos/usuarios/cursos, actividad (`AuditLog`) |
| Cursos | `/admin/cursos` | CRUD, duplicar, archivar, estados, editor completo (general/SEO/precio/objetivos/contenido/recursos) |
| Módulos y lecciones | dentro del editor de curso | Todos los tipos de contenido, reordenación, vista previa antes de publicar |
| Exámenes | `/admin/examenes` | Banco de preguntas reutilizable, constructor de examen, nota mínima/tiempo/intentos |
| Pagos | `/admin/pagos` | Cola de revisión, aprobar/rechazar con motivo, historial completo |
| Usuarios | `/admin/usuarios` | Roles, estado/bloqueo, compras, cursos, certificados, actividad |
| Categorías | `/admin/categorias` | CRUD, subcategorías, orden, activar/desactivar |
| Blog | `/admin/blog` | CRUD, SEO, programación de publicación |
| Correos | `/admin/correos` | Plantillas (crear/editar/vista previa) e historial de envío |
| Configuración | `/admin/configuracion` | Marca, redes, contacto, métodos de pago, SEO global, legal/cookies |

### Ajuste de arquitectura: grupo de rutas `(site)`

El layout raíz solo aporta `<html>`/providers/fuentes. El header y footer
públicos se movieron a `[locale]/(site)/layout.tsx`, que envuelve home,
catálogo, auth y perfil. El panel de administración vive fuera de ese
grupo, con su propio chrome (sidebar + topbar). Sin este cambio, la
navegación de marketing habría quedado incrustada dentro del panel.

### Simplificaciones deliberadas de esta fase (para que quede explícito)

- **Reordenación por botones, no arrastrar-soltar.** Módulos, lecciones y
  categorías se reordenan con flechas ↑/↓ que intercambian `sortOrder`
  por server action. Mismo resultado funcional que un drag & drop, sin
  añadir `@dnd-kit` (u otra librería) que no podía instalar ni verificar
  en este entorno sin red.
- **Vista previa de curso no publicado**: `getCourseBySlug` acepta ahora
  `{ allowUnpublished }`, y la página pública de curso lo activa solo si
  la sesión tiene rol de administrador — así el editor puede previsualizar
  un borrador con el mismo componente de la web pública, sin duplicar UI.
- **Programación de publicación de cursos**: no implementada como job en
  background (no hay infraestructura de cron en este entorno). Sí está
  implementada para el **blog** (`publishedAt` en el futuro). Para cursos,
  publicar/despublicar es una acción manual e inmediata.
- **Plantillas de correo**: el CRUD de `/admin/correos` gestiona la tabla
  `EmailTemplate` (crear, editar, vista previa, activar/desactivar), pero
  los envíos reales (verificación, pago aprobado/rechazado…) todavía usan
  HTML embebido en `lib/mail.ts` / las server actions, no leen de esta
  tabla dinámicamente. Conectar ambas cosas (con interpolación de
  variables tipo `{{nombre}}`) es un buen siguiente paso, no incluido aquí
  para no improvisar un motor de plantillas a medias.
- **Blog sin categorías/etiquetas propias**: el modelo de datos aprobado
  no incluye una relación `BlogPost`↔`Category`/`Tag` (solo course-level).
  Añadir esa relación es una migración pequeña y aislada cuando se
  necesite; preferí dejarlo explícito aquí en vez de improvisar la
  relación a medias sobre la marcha en esta fase.

### Flujo de pagos manuales — end to end

1. Alumno pulsa "Comprar acceso" en un curso premium → `/cursos/[slug]/comprar`.
2. Elige Bizum o transferencia → se crea el `Payment` en `pendiente` y se muestran las instrucciones (configurables en Módulo 10).
3. Sube la URL de su justificante → pasa a `en_revision`, se notifica a todos los administradores (`Notification`).
4. Admin revisa desde `/admin/pagos/[id]`: aprueba (concede `Enrollment`, genera `Invoice`, envía email) o rechaza (motivo obligatorio, el alumno puede volver a intentarlo).
5. Todo el historial de cambios de estado queda en `PaymentStatusHistory`.

### Correcciones de arquitectura hechas durante la Fase 3

Dos decisiones de la Fase 1 se revisaron al implementar autenticación
de verdad — documentado aquí para que quede explícito el porqué:

1. **Se retiró `@auth/prisma-adapter`.** Nuestro `User` es
   deliberadamente distinto del que espera el adaptador estándar
   (`emailVerifiedAt` en vez de `emailVerified`, perfil separado). La
   vinculación de cuentas OAuth se hace a mano en el callback
   `signIn`, usando la tabla `AuthProvider` que ya existía en el
   modelo de datos exactamente para esto.
2. **Config de Auth.js dividida en `auth.config.ts` (edge-safe) y
   `auth.ts` (Node.js completo).** El middleware corre en el Edge
   Runtime, donde ni Prisma ni `bcryptjs` pueden ejecutarse. El
   middleware construye su propia instancia ligera a partir de
   `auth.config.ts` (sin proveedores ni callbacks con I/O); el route
   handler y las server actions usan la instancia completa de
   `auth.ts`. Es el patrón oficial recomendado por Auth.js v5.
3. Se añadió el modelo `VerificationToken` (no estaba en la v1 del
   modelo de datos) para verificación de email y recuperación de
   contraseña — con `userId` + `type` explícitos en vez del par
   genérico `identifier/token` de un adaptador estándar, coherente
   con el resto del modelo (tablas explícitas, no genéricas).

### Módulo de autenticación (`src/modules/users`, `src/lib/auth*.ts`)

Registro y login por credenciales, Google OAuth (vinculación manual),
verificación de email, recuperación de contraseña, cambio de
contraseña, rutas protegidas por middleware (`/perfil`, `/admin`),
roles en el JWT. Todo el envío de correo pasa por `lib/mail.ts`, que
registra cada intento en `EmailLog` y degrada a modo desarrollo
(consola) si no hay `RESEND_API_KEY`.

### Módulo de catálogo (`src/modules/courses`, `src/modules/categories`)

`/cursos` (búsqueda, filtro por nivel/acceso, orden, paginación —
todo vía URL, sin estado oculto), `/categorias`, `/categorias/[slug]`
y `/cursos/[slug]`. La capa de consultas (`server/queries.ts` en cada
módulo) es la única vía de acceso a `db.course.*` / `db.category.*` —
así el filtro "solo publicado" no depende de que cada página se
acuerde de aplicarlo. **Sin datos de muestra**: con la base de datos
recién sembrada (solo catálogos estructurales, sin contenido), estas
páginas muestran sus estados vacíos reales, incluida la home (las
secciones de categorías/cursos destacados simplemente no se
renderizan si no hay contenido publicado) — es el comportamiento
correcto, no un defecto.

### Módulo de perfil (`/perfil`)

Protegido por middleware. Pestañas: mis cursos (con progreso real),
certificados, información personal, seguridad (cambio de contraseña),
preferencias (idioma + tema). Cursos gratuitos se inscriben al
instante (`enrollInFreeCourse`); los premium muestran el precio y un
CTA preparado para el módulo de pagos de la Fase 4.

### Componentes añadidos al Design System

`Input` · `Label` · `FormField` · `Checkbox` · `Avatar` · `Select` ·
`Switch` · `Tabs` · `Progress` · `Pagination` · `EmptyState` — todos
construidos según los necesitaban las pantallas de esta fase, listos
para reutilizarse en el panel de administración.

### Design System — identidad visual

- **Paleta**: fondo "paper" cálido neutro + tinta "ink" violeta-noche,
  con un único acento de marca — el **oro de certificación** — atado
  deliberadamente al concepto central del producto (certificados,
  estándar, logro), no un color decorativo intercambiable.
- **Tipografía**: Fraunces (display, con restraint) + Plus Jakarta Sans
  (cuerpo/interfaz) + IBM Plex Mono (datos verificables: códigos,
  duraciones, las etiquetas "ledger" de cada sección).
- **Elemento de firma**: el *sello de verificación* (`SealMark`, en
  `components/layout/logo.tsx`) y la *regla-ledger* (`.ledger-rule` /
  `.ledger-label` en `globals.css`, encapsulada en
  `components/layout/section.tsx`) — se repiten en header, hero,
  secciones y CTA final para dar coherencia visual sin decoración
  gratuita.
- Todos los tokens viven en `src/app/globals.css` (variables CSS) y se
  consumen vía `tailwind.config.ts`. Cambiar la paleta en el futuro es
  editar un único archivo.

### Componentes del Design System (`src/components/ui`)

`Button` · `Badge` · `Card` · `Separator` · `Accordion` ·
`DropdownMenu` · `Sheet` · `Skeleton` — construidos según necesidad
real de las pantallas ya implementadas. Se amplía el mismo directorio
a medida que el resto de la plataforma lo requiera (`Dialog`, `Tabs`,
`Table`, `Input`/formularios llegan con el módulo de autenticación y
el catálogo filtrable).

### Landing page (`src/components/marketing`)

Hero, presentación de marca, categorías destacadas, cursos destacados,
beneficios, cómo funciona, testimonios (con estado vacío honesto, sin
citas inventadas), FAQ y CTA final. `sample-content.ts` documenta
explícitamente que sus datos son temporales y con la forma exacta del
DTO real, para sustituirse por consultas de Prisma sin tocar ni un
componente visual.
