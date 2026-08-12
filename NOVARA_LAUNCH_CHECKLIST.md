# NOVARA — Checklist de lanzamiento

Estado tras la intervención de auditoría y finalización. Todo lo marcado
✅ se ha **verificado en local** (mayoritariamente con navegador real vía
Playwright y/o pruebas de extremo a extremo), no solo escrito.

## Estado global verificado

| Comprobación | Resultado |
|---|---|
| `npm run typecheck` | ✅ **0 errores** |
| `npm run lint` | ✅ **0 errores, 0 warnings** |
| `npm run test` (Vitest) | ✅ **38/38 pasan** (5 archivos) |
| `npm run test:e2e` (Playwright) | ✅ **12/12 pasan** (navegador real, BD de test dedicada) |
| `npm run build` (producción) | ✅ **compila y genera el bundle** |
| Auditoría de rutas (navegador real) | ✅ **44/44 sin errores de cliente** |
| `GET /api/health` | ✅ `{"status":"ok","database":"connected"}` |
| Seed idempotente (×3) | ✅ sin duplicados; contraseña admin preservada |
| Migraciones de BD aplicadas | ✅ 8 (aditivas, sin pérdida de datos) |

## 1. Bloqueantes iniciales resueltos

- **El proyecto no compilaba ni arrancaba.** `schema.prisma` y `.env`
  estaban pisados por los de otro proyecto (e-commerce). Recuperado el
  esquema de academia, reconstruidos 4 modelos leyendo el código,
  reapuntado el `.env` a la BD real. `typecheck` pasó de fallar a 0.
- **Bugs de arranque:** 9 directivas `"use server"` mal colocadas,
  `framer-motion` incompatible con `motion-dom`, un export ilegal en un
  `"use server"`, y la fuente `Fraunces` mal configurada. Corregidos.
- **Bug de registro:** el checkbox de "aceptar términos" era invisible
  (`size-4.5` no existía en Tailwind). Corregido en el config.
- **Bug de cabecera:** `React.Children.only` en el menú de usuario
  (`asChild` con dos hijos). Corregido.

## 2. Funcionalidades completadas (por área del prompt maestro)

- **A — Huecos críticos (5/5):** bandeja de **soporte** admin (+ vista
  alumno), revisión de **proyectos finales**, corrección manual de
  **ejercicios**, **reseñas** (con moderación y recálculo de rating),
  **Q&A** (preguntar/responder). Cada acción con `requireAdmin()`,
  auditoría y notificación. *(e2e OK)*
- **B — Experiencia del alumno (4/4):** "Próximos objetivos" (datos
  reales), resumen semanal honesto, historial paginado, objetivo semanal
  configurable. *(e2e OK)*
- **C — Aprendizaje (4/4):** temario en **móvil** (slide-over), progreso
  siempre visible, tiempo restante estimado, lección favorita. *(e2e móvil OK)*
- **D — Pagos:** historial de compras, **factura PDF real** (pdf-lib),
  abstracción de proveedor con **Stripe preparado** (503 honesto sin claves).
- **E — Certificados:** **PDF real** con QR, descarga y verificación
  pública con "qué acredita" + Open Graph al compartir.
- **F — Gamificación:** **ranking** semanal/mensual/histórico con
  **privacidad respetada en la consulta** (probado e2e) y cacheado.
- **G — Emails:** plantillas de BD **conectadas al envío** con
  interpolación de variables; cron de retención protegido; baja de
  marketing respetada. *(e2e OK)*
- **H — Métricas:** gráficas de evolución temporal, usuarios activos
  reales (7/30 d), **exportación CSV** (admin-only).
- **I — Analítica de producto:** **embudo de finalización por módulo** +
  registro de eventos no bloqueante (`ActivityLog`).
- **J — Seguridad:** rate limiting ampliado (ejercicios/soporte/reseñas/
  Q&A/IA); **autorización por objeto probada activamente** (no-admin → 403).
- **K — Diseño:** `not-found`/`error`/`global-error` de marca, 6 estados
  de carga nuevos, animación de logro (respeta `prefers-reduced-motion`).
- **L — Tests:** suite de Vitest arreglada (38/38) e integrada en CI.
- **M — Almacenamiento:** interfaz de storage + proveedor S3/R2 real +
  ruta de subida prefirmada + componente `FileUpload` (degrada a URL).
- **N — Producción:** build verificado, health check, `DEPLOYMENT.md`,
  seed idempotente, `npm audit` documentado.

## 3. Pruebas ejecutadas (salida real)

```
Vitest:     Test Files  5 passed (5)   ·   Tests  38 passed (38)
Playwright: 12 passed (6 archivos)  ·  navegador real, BD de test dedicada
Build:      ✓ Compiled successfully  ·  bundle de producción generado
Health:     {"status":"ok","database":"connected"}
Rutas:      TOTAL 44 | con errores de cliente: 0  (Playwright, navegador real)
Lint:       0 errores, 0 warnings
```

Los **e2e de Playwright** (`tests/e2e/*.spec.ts`) **pasan de extremo a
extremo** contra una base de datos de test **aislada** (`neondb_test`, en
la misma instancia pero separada de los datos reales). Cubren: registro y
login, autorización del panel admin (incl. no-admin → sin acceso), acceso a
curso gratuito y progreso, degradación honesta del asistente de IA sin
clave, compra manual con aprobación del admin, y examen + certificado.
Puesta en marcha y ejecución documentadas en `tests/e2e/README.md`
(`npm run test:e2e:setup` prepara la BD de test). La suite corre contra una
BD remota, de ahí timeouts amplios y `retries: 2` para absorber latencia
transitoria (un fallo real falla en todos los intentos).

Arreglos reales hechos para que pasen (no parches de test):
- El login/registro no redirigían de forma fiable tras autenticar
  (`router.push` + `router.refresh()` síncrono se anulaban); ahora hacen
  una navegación dura que aplica la cookie de sesión — mejor UX real.
- El asistente de IA mostraba el error genérico redactado de producción;
  ahora muestra un mensaje accionable ("configura ANTHROPIC_API_KEY").

## 4. Migraciones aplicadas

Todas aditivas, sin pérdida de datos: los 4 modelos del estándar NOVARA
(pedagogía, entregas de ejercicio, proyecto final + entregas),
`exams.module_id`, `lesson_blocks` (order + urls), y campos de
`user_profiles` (`weekly_goal_minutes`, `show_in_ranking`,
`accepts_marketing`) + `lesson_progress.is_favorite`.

## 5. Dependencias añadidas

- `pdf-lib` — generación de facturas y certificados en PDF (JS puro, sin
  navegador headless: no infla el contenedor).
- `@aws-sdk/client-s3` + `@aws-sdk/s3-request-presigner` — subida directa
  a S3/R2 con URL prefirmada.
- `framer-motion` actualizado a 12.42.2 (alineado con `motion-dom`).

## 6. Lo que sigue sin funcionar y por qué (honesto)

- **Envío real de emails, IA, subida de archivos, pago con tarjeta:**
  el código está completo pero **requiere credenciales** (`RESEND_API_KEY`,
  `ANTHROPIC/OPENAI_API_KEY`, `STORAGE_*`, `STRIPE_*`). Sin ellas, cada
  función **degrada con claridad** y nunca finge un resultado.
- **Migración inicial de Prisma:** en dev se usó `db push`; hay que generar
  `prisma/migrations/` una vez con `prisma migrate dev --name init` antes de
  `migrate deploy` (ver `DEPLOYMENT.md`).
- **Docker / backup-restore:** no verificables aquí (sin Docker ni pg_dump
  del proveedor); Dockerfile revisado por inspección.
- **`npm audit`:** altas/críticas son advisories upstream (next, next-auth,
  árbol de @aws-sdk); remediación documentada en `DEPLOYMENT.md`.
- **Retención por cohortes** (Área I) y **filtro por fechas** en analíticas
  (Área H): refinamientos pendientes, no huecos funcionales.

## 7. Pasos para abrir al público (en orden)

1. Rellenar credenciales reales en `.env` (email, IA, storage, pagos según
   lo que se quiera activar).
2. Generar y commitear la migración inicial de Prisma.
3. Revisar los bumps de next/next-auth/@aws-sdk con re-test (ver
   `DEPLOYMENT.md` §8) — `npm audit fix` no aplica cambios sin `--force`.
4. Construir y probar la imagen Docker; verificar `/api/health`.
5. Programar el cron de retención y los backups; probar una restauración.
6. Cambiar la contraseña del administrador de arranque.

Los e2e de Playwright ya pasan (ver §3 y `tests/e2e/README.md`).
