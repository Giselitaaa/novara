import { beforeEach, describe, expect, it, vi } from "vitest";

import { checkRateLimit } from "@/lib/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    vi.useRealTimers();
  });

  it("permite peticiones mientras no se supere el límite", () => {
    const key = `test-allow-${Date.now()}`;
    const first = checkRateLimit(key, 3, 60);
    const second = checkRateLimit(key, 3, 60);
    const third = checkRateLimit(key, 3, 60);

    expect(first.allowed).toBe(true);
    expect(second.allowed).toBe(true);
    expect(third.allowed).toBe(true);
    expect(third.remaining).toBe(0);
  });

  it("bloquea la petición que supera el límite dentro de la ventana", () => {
    const key = `test-block-${Date.now()}`;
    checkRateLimit(key, 2, 60);
    checkRateLimit(key, 2, 60);
    const blocked = checkRateLimit(key, 2, 60);

    expect(blocked.allowed).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.resetInSeconds).toBeGreaterThan(0);
  });

  it("usa contadores independientes por clave", () => {
    const keyA = `test-independent-a-${Date.now()}`;
    const keyB = `test-independent-b-${Date.now()}`;

    checkRateLimit(keyA, 1, 60);
    const blockedA = checkRateLimit(keyA, 1, 60);
    const allowedB = checkRateLimit(keyB, 1, 60);

    expect(blockedA.allowed).toBe(false);
    expect(allowedB.allowed).toBe(true);
  });

  it("permite de nuevo tras expirar la ventana", async () => {
    const key = `test-window-${Date.now()}`;
    checkRateLimit(key, 1, 0.1); // ventana de 100ms
    const blocked = checkRateLimit(key, 1, 0.1);
    expect(blocked.allowed).toBe(false);

    await new Promise((resolve) => setTimeout(resolve, 150));

    const allowedAgain = checkRateLimit(key, 1, 0.1);
    expect(allowedAgain.allowed).toBe(true);
  });
});
