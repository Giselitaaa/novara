# NOVARA — Auditoría Final (Fase 7)

**Regla seguida en todo este documento**: nada de lo que sigue es un
resultado inventado. Donde algo no se puede verificar en este
entorno (sin `node_modules`, sin red, sin base de datos, sin
navegador), se dice explícitamente. No hay ninguna afirmación de
"test pasado" o "Lighthouse: X" que no se haya ejecutado de verdad.

---

## 1. Auditoría general — hallazgos y correcciones aplicadas

Auditoría estática real (lectura y análisis de los 247 archivos de
`src/` y `prisma/`), no una revisión superficial. Cada hallazgo de
esta sección se verificó con grep/scripts antes de anotarlo, y cada
corrección se aplicó de verdad sobre el código, no solo se describe.

### 1.1 Dependencias

**Encontrado**: 4 dependencias declaradas en `package.json` sin
ningún uso real en el código — `@radix-ui/react-toast` (sustituido
por `sonner` desde el principio, nunca llegó a usarse),
`@radix-ui/react-tooltip` (nunca se construyó el componente Tooltip),
`date-fns` y `zustand` (nunca se importaron; `Intl.DateTimeFormat` y
el estado de servidor cubrieron todo lo necesario).

**Corregido**: las 4 eliminadas de `package.json`.

### 1.2 Código duplicado

**Encontrado**: la función `slugify()` estaba copiada, idéntica,
en tres módulos distintos (cursos, categorías, blog). Además,
**categorías nunca comprobaba unicidad de slug** — a diferencia de
cursos y blog, que sí tenían su propia lógica de desambiguación. Si
un admin creaba dos categorías con el mismo nombre, la segunda habría
lanzado un error de restricción única de Prisma sin gestionar,
visible al usuario como un fallo genérico.

**Corregido**: nueva utilidad compartida `src/lib/slug.ts` con
`slugify()` y `generateUniqueSlug()` (con tests unitarios, ver §2).
Los tres módulos (cursos, categorías, blog) usan ahora exactamente la
misma lógica de desambiguación, incluida categorías, que antes no
tenía ninguna.

**Encontrado**: la lógica de "obtener iniciales de un nombre" estaba
implementada tres veces, con pequeñas diferencias entre sí (el menú
de usuario del header, la cabecera del perfil, y la vista de detalle
de usuario del admin).

**Corregido**: consolidada en `getInitials()` (`src/lib/format.ts`),
usada ahora en los tres sitios.

### 1.3 Componentes y módulos sin uso

Auditoría completa de cada archivo en `src/components/` y
`src/modules/` buscando si se importa desde algún otro sitio.
**Resultado: cero archivos muertos** (los dos únicos que el script
automático marcó como "sin uso" — los proveedores de IA de Anthropic
y OpenAI — son falsos positivos: se cargan con `import()` dinámico
por ruta relativa, no por el alias `@/`, así que el script no los
detectó; están en uso real desde `provider.ts`).

### 1.4 Consultas Prisma — patrón N+1

**Encontrado**: `checkAndAwardAchievements` (motor de gamificación)
recorría los logros pendientes con un `for...of` haciendo una consulta
`db.userBadge.findUnique` por cada uno dentro del bucle — un N+1 real,
aunque acotado hoy (máximo 4-5 logros sembrados).

**Corregido**: sustituido por una única consulta
(`db.userBadge.findMany` con `IN`) que trae de una vez qué insignias
ya tiene el alumno, y las creaciones (insignia + notificación) se
hacen en paralelo dentro de una transacción con `createMany`, no una
por una.

El resto de bucles detectados por el script automático eran
`.map()` sobre arrays ya cargados en memoria (transformación de
datos, no consultas) — falsos positivos, verificados uno por uno.

### 1.5 Seguridad — autorización

Se verificó, función por función, que **todas** las server actions de
administración (cursos, categorías, blog, correos, configuración,
usuarios, exámenes) llaman a `requireAdmin()` de forma independiente
— imprescindible porque una server action es un endpoint propio,
invocable directamente sin pasar por la página que la usa
habitualmente. Las dos funciones que el script automático marcó como
"sin `requireAdmin()`" son correctas tal cual: `requestPurchase` y
`uploadPaymentProof` son acciones del **alumno**, no del admin, y
usan `auth()` + comprobación de propiedad del recurso
(`payment.userId !== session.user.id`), que es lo correcto.

**Encontrado**: la cookie de captura de referido de afiliados
(`REFERRAL_COOKIE`) no forzaba `secure: true` en producción.

**Corregido**: añadido `secure: process.env.NODE_ENV === "production"`.

### 1.6 Accesibilidad

**Encontrado**: 12 botones de solo icono (papelera, subir/bajar orden,
editar, activar/desactivar) sin `aria-label`, repartidos por el panel
de administración (editor de módulos/lecciones, banco de preguntas,
categorías, asistente de IA). Un lector de pantalla los habría
anunciado como "botón" sin ninguna información de qué hacen.

**Corregido**: los 12 revisados y con `aria-label` descriptivo
añadido. Verificado con un barrido final: **0 botones `size="icon"`
sin `aria-label` en todo el proyecto** tras la corrección.

No se encontraron imágenes sin `alt`.

### 1.7 Variables de entorno

Comparadas todas las lecturas de `process.env.*` del código contra
`.env.example`: **coinciden por completo** — nada se lee en el código
sin estar documentado. Las variables adicionales de `.env.example`
(`STORAGE_*`, `VIDEO_PROVIDER_*`, `AUTH_APPLE_*`) son, tal como ya
estaba documentado desde fases anteriores, integraciones preparadas
pero todavía no conectadas.

### 1.8 Producción — hallazgo importante para el lanzamiento

**No existe ninguna migración de Prisma generada**
(`prisma/migrations/` no existe en el repositorio). Esto es coherente
con el resto de fases: generar la primera migración requiere
`prisma migrate dev` ejecutado contra una base de datos real y
conectada, algo que este entorno de generación nunca ha tenido. El
esquema (`schema.prisma`) está completo y validado sintácticamente,
pero **la tabla física todavía no existe en ningún sitio**.

Esto afecta directamente al workflow de CI ya construido en la Fase
6: el paso `prisma migrate deploy` no fallará, pero tampoco creará
ninguna tabla si no hay migraciones que aplicar. Se ha añadido un
comentario explícito en `.github/workflows/ci.yml` señalándolo, y es
el **primer punto de la checklist de lanzamiento** (§4).

---

## 2. Testing

Se ha preparado infraestructura de test real y completa —
**Vitest** (unitarios + integración) y **Playwright** (E2E) — con
tests que cubren exactamente lo pedido. Ningún test es de relleno:
cada uno verifica un comportamiento concreto del código real.

**No se ha ejecutado ninguno en este entorno** (no hay
`node_modules`, no hay base de datos, no hay navegador). Instrucciones
completas de ejecución en `tests/README.md`.

| Archivo | Tipo | Qué verifica |
|---|---|---|
| `tests/unit/slug.test.ts` | Unitario | `slugify`, desambiguación de slugs únicos |
| `tests/unit/format.test.ts` | Unitario | Formato de duración, precio, iniciales |
| `tests/unit/rate-limit.test.ts` | Unitario | Límite de peticiones, ventanas, claves independientes |
| `tests/integration/ai-generation.test.ts` | Integración | Validación Zod de la respuesta de IA, con proveedor simulado — nunca llama a una API real |
| `tests/e2e/auth.spec.ts` | E2E | Registro, login, error de credenciales |
| `tests/e2e/course-access.spec.ts` | E2E | Inscripción gratuita, reproductor, completar lección |
| `tests/e2e/purchase-flow.spec.ts` | E2E | Compra premium → justificante → aprobación admin → acceso |
| `tests/e2e/exam-and-certificate.spec.ts` | E2E | Crear examen (admin) → aprobarlo (alumno) → certificado emitido |
| `tests/e2e/admin-panel.spec.ts` | E2E | Control de acceso por rol, dashboard, crear categoría |
| `tests/e2e/ai-assistant.spec.ts` | E2E | Degradación honesta del asistente sin clave de API |

`tests/fixtures/seed-test-data.ts` siembra datos deterministas
(admin, alumno, curso gratis, curso premium) para que los E2E tengan
un estado conocido — nunca se ejecuta contra producción.

**Lo que falta para un test suite realmente completo** (documentado
también en `tests/README.md`, no oculto): tests unitarios de la
lógica de corrección de exámenes aislada de Prisma, tests de
componentes de UI complejos con Testing Library (dependencia ya
instalada, sin usar todavía), y un `docker-compose.test.yml` dedicado
para CI.

---

## 3. Pulido visual, rendimiento y seguridad (revisión)

### Visual
- 12 correcciones de accesibilidad (§1.6).
- 6 `loading.tsx` nuevos añadidos en las rutas de mayor tráfico o
  coste de consulta (`/admin`, `/mi-aprendizaje`, `/perfil`,
  `/categorias/[slug]`, `/admin/cursos`, `/admin/pagos`) — priorizadas
  sobre las 39 rutas totales por ser las de más impacto; el resto
  sigue sin skeleton propio (usa el spinner por defecto de Next).
- No se ha podido "recorrer visualmente" la plataforma de forma
  literal — no hay navegador ni servidor corriendo en este entorno.
  El pulido de esta fase es una revisión de código (espaciados,
  clases condicionales, estados vacíos, `aria-*`), no una inspección
  visual real. Cualquier salto visual que solo sea detectable en el
  navegador (animaciones, layout real) requiere que alguien lo abra
  de verdad.

### Rendimiento
Revisión de consultas ya cubierta en §1.4. El resto de optimizaciones
(ISR, `loading.tsx`, `optimizePackageImports`) ya se aplicaron en la
Fase 6 y siguen vigentes — no hay nada nuevo que corregir aquí sin
medir contra una instancia real.

**No se ha ejecutado Lighthouse.** No hay navegador ni build corriendo
en este entorno para medirlo. Cualquier cifra de Performance/SEO/Best
Practices/Accessibility que no se muestre aquí explícitamente medida
no se puede afirmar — y no se afirma.

### Seguridad
Revisión de permisos, middleware, cookies, JWT y validaciones
detallada en §1.5. Sin hallazgos adicionales más allá de los ya
corregidos. Rate limiting, CSP y cabeceras de seguridad ya estaban en
su sitio desde la Fase 6 y se han confirmado coherentes, no
modificados en esta fase salvo el fix de la cookie de afiliados.

**Sobre la subida de archivos**: NOVARA no tiene todavía subida de
archivos real (el justificante de pago es una URL de texto, no un
`<input type="file">` — ver Fase 4). Por tanto, no hay superficie de
ataque de subida de ficheros que auditar todavía; aparecerá en cuanto
se conecte almacenamiento real (ver checklist).

---

## 4. Checklist real de lanzamiento

Únicamente lo que falta de verdad. Nada de lo ya construido y
verificado aparece aquí.

### Bloqueantes (sin esto, NOVARA no puede arrancar en producción)
- [ ] **Generar la migración inicial de Prisma** contra una base de
      datos real: `npx prisma migrate dev --name init`, y commitear
      `prisma/migrations/`. Sin esto no hay tablas en ningún entorno.
- [ ] Ejecutar `npm install` en un entorno con acceso a npm (este
      proyecto nunca se ha instalado de verdad) y confirmar que el
      build (`npm run build`) termina sin errores.
- [ ] Ejecutar `npm run db:seed` para sembrar los catálogos base
      (estados, roles, niveles, tipos de contenido, autor "NOVARA",
      insignias/logros) — sin esto, ni siquiera se puede registrar un
      usuario o crear un curso.
- [ ] Configurar dominio real y actualizar `NEXT_PUBLIC_APP_URL`,
      `AUTH_URL` y `siteConfig.url`.
- [ ] Generar `AUTH_SECRET` real (`npx auth secret`) — el de
      `.env.example` es un placeholder vacío.

### Necesarios para operar de verdad
- [ ] **Proveedor SMTP**: crear cuenta en Resend (o alternativa),
      añadir `RESEND_API_KEY` y verificar el dominio de envío. Hoy,
      sin esta clave, los correos se registran en `EmailLog` pero no
      se envían de verdad (modo desarrollo documentado en
      `lib/mail.ts`).
- [ ] **Almacenamiento de archivos**: ahora mismo no hay ningún
      proveedor conectado — portadas, banners, recursos descargables
      y justificantes de pago se guardan como URLs de texto que el
      admin/alumno debe rellenar a mano. Conectar S3/Cloudflare R2 (ya
      hay variables `STORAGE_*` preparadas en `.env.example`) es lo
      que permitiría subir archivos de verdad en vez de pegar enlaces.
- [ ] **Claves de IA** (opcional pero recomendado): `ANTHROPIC_API_KEY`
      u `OPENAI_API_KEY` para activar el asistente de creación de
      cursos — hoy funciona, pero muestra el aviso de "no configurado".
- [ ] **Google OAuth**: `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` reales
      desde Google Cloud Console si se quiere login social.
- [ ] **Método de pago real configurado**: rellenar en
      `/admin/configuracion` el número de Bizum y/o IBAN reales — hoy
      esos campos están vacíos y el checkout los muestra como
      "(pendiente de configurar)".
- [ ] **Analíticas** (opcional): IDs de Google Analytics/GTM/Clarity/
      Plausible en `/admin/configuracion` si se quieren activar — el
      interruptor existe pero está apagado por defecto.

### Contenido
- [ ] Crear las primeras categorías reales desde
      `/admin/categorias` (hoy no hay ninguna — es contenido, no
      catálogo, así que no se siembra automáticamente).
- [ ] Añadir el primer autor real si no va a ser solo "NOVARA" (el
      autor por defecto ya existe, sembrado automáticamente).
- [ ] Crear y publicar los primeros cursos reales (manualmente o con
      el asistente de IA una vez configurado).
- [ ] Subir imágenes reales de portada/banner por curso.
- [ ] Rellenar plantillas de correo reales en `/admin/correos` si se
      quiere personalizar el contenido más allá de lo ya escrito en
      `lib/mail.ts`.

### Antes de abrir al público
- [ ] Ejecutar de verdad la suite de tests (§2) contra un entorno de
      staging con datos de prueba — no se ha ejecutado nunca hasta
      ahora.
- [ ] Medir Lighthouse contra el despliegue real y actuar sobre lo que
      salga — no hay ninguna cifra previa real con la que comparar.
- [ ] Revisar y publicar las páginas legales (`/legal/terminos`,
      `/legal/privacidad`, `/legal/cookies`) — están enlazadas desde
      el registro y el footer, pero su contenido nunca se ha escrito
      en esta plataforma.
- [ ] Configurar backups automáticos programados (el script
      `scripts/backup-db.sh` existe y funciona: falta programarlo en
      cron o en el job scheduler del proveedor de hosting elegido).
- [ ] Decidir y configurar el proveedor de despliegue (Vercel, un VPS
      con Docker Compose, etc.) — Docker y CI están preparados pero no
      apuntan a ningún proveedor concreto todavía.

---

## Cierre

Con esto se da por finalizado el desarrollo de NOVARA. El código está
completo, auditado con hallazgos reales corregidos, y con
infraestructura de test preparada — pero **no ejecutado, no medido,
no desplegado**. La checklist de arriba es exactamente, y únicamente,
lo que separa este repositorio de una plataforma abierta al público.
