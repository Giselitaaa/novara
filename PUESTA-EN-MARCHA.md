# NOVARA — Puesta en marcha (coste cero)

Todo el código está listo. Aquí están **solo los pasos que debes hacer tú**
(son tus cuentas y claves; no puedo hacerlos por ti). Cada uno son 2–3 clics.
Cuando tengas una clave, **pégala donde diga** y avísame si te atascas.

---

## 1) Correos que llegan de verdad — Brevo (gratis)
1. Entra en **brevo.com** → crea cuenta gratis.
2. Menú **Senders, Domains & IPs → Senders → Add a sender**: pon
   `novaracademy@proton.me`. Te llega un correo a Proton → pulsa **el enlace de
   verificación**.
3. Menú **SMTP & API → API Keys → Generate a new API key**. Copia la clave.
4. Pégala en Render (paso 4) en la variable **`BREVO_API_KEY`**.
   *(En local: pégala en `.env` en `BREVO_API_KEY="..."` y reinicia.)*

## 2) IA en la nube — Groq (gratis)
1. Entra en **console.groq.com** → crea cuenta gratis.
2. **API Keys → Create API Key**. Copia la clave (empieza por `gsk_`).
3. Pégala en Render en **`LOCAL_AI_API_KEY`**.
   *(Sirve para el tutor y el Speaking. La transcripción y la voz británica de
   los audios ya pregenerados funcionan; la voz en tiempo real del Speaking, en
   la nube, usará la voz del navegador — algo más básica.)*

## 3) Subir el proyecto a tu GitHub
En una terminal, dentro de la carpeta `novara`:
```
git add -A
git commit -m "NOVARA lista para desplegar"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/novara.git   # crea antes el repo vacío en github.com
git push -u origin main
```
*(Si usas GitHub Desktop: “Add existing repository” → Publish. Más fácil.)*

## 4) Publicar en Render (gratis)
1. En **render.com** → **New → Blueprint** → conecta tu repo de GitHub. Render
   detecta el archivo `render.yaml` y crea el servicio **novara**.
2. En **Environment**, rellena las variables marcadas (las tienes en tu archivo
   `.env` local): `DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, `BREVO_API_KEY`,
   `LOCAL_AI_API_KEY`, `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
   `CRON_SECRET`. Y pon `AUTH_URL` y `NEXT_PUBLIC_APP_URL` = la URL que te da
   Render (algo como `https://novara.onrender.com`).
3. **Create / Deploy**. En unos minutos tu academia estará online en esa URL.

## 5) Cobrar de verdad con Stripe (cuando quieras)
1. En **dashboard.stripe.com** activa tu cuenta (datos del negocio + cuenta
   bancaria — esto solo puedes hacerlo tú).
2. **Developers → API keys** → copia la clave **`sk_live_…`** y ponla en Render
   en `STRIPE_SECRET_KEY` (reemplaza la de test).
3. **Developers → Webhooks → Add endpoint**: URL
   `https://TU-APP.onrender.com/api/webhooks/stripe`, evento
   `checkout.session.completed`. Copia el `whsec_…` y ponlo en
   `STRIPE_WEBHOOK_SECRET`.
4. En el panel NOVARA, marca los cursos como **Premium con precio**.

---

**Importante:** nunca subas tu archivo `.env` a GitHub (ya está protegido). Las
claves van en el panel de Render, no en el código.
