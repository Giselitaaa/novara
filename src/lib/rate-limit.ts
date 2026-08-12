import "server-only";

/**
 * Rate limiter en memoria (token bucket simplificado por ventana
 * fija). Deliberadamente simple: protege contra fuerza bruta básica
 * en login/registro/recuperación de contraseña sin añadir una
 * dependencia de infraestructura nueva (Redis) que este entorno no
 * puede levantar ni verificar.
 *
 * Limitación conocida y documentada: al vivir en memoria del proceso,
 * no es válido en un despliegue con múltiples instancias/serverless
 * — cada instancia lleva su propio contador. Para producción con
 * varias réplicas, sustituir por Upstash Redis o similar mantiene el
 * mismo contrato (`checkRateLimit`), ver comentario al final.
 */
const buckets = new Map<string, { count: number; resetAt: number }>();

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetInSeconds: number;
};

export function checkRateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    return { allowed: true, remaining: limit - 1, resetInSeconds: windowSeconds };
  }

  if (bucket.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: limit - bucket.count,
    resetInSeconds: Math.ceil((bucket.resetAt - now) / 1000),
  };
}

// Limpieza periódica para no acumular entradas caducadas indefinidamente.
setInterval(
  () => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt < now) buckets.delete(key);
    }
  },
  5 * 60 * 1000
).unref?.();

/**
 * Para producción con múltiples instancias: sustituir el `Map` de
 * arriba por una llamada a un store compartido (ej. Upstash Redis
 * `@upstash/ratelimit`), manteniendo la misma firma de
 * `checkRateLimit(key, limit, windowSeconds)` — ningún llamador
 * necesita cambiar.
 */
