"use client";

import { useEffect, useState } from "react";

/**
 * Animación del tema festivo (punto 13): copos de nieve en Navidad,
 * murciélagos en Halloween, pétalos en Pascua, estrellas en Ramadán,
 * corazones en San Valentín y burbujas/sol en Verano. Overlay fijo NO
 * interactivo; se oculta solo con `prefers-reduced-motion`.
 *
 * El tema es GLOBAL (lo fija la administración en `data-theme` del <html>),
 * así que se lee una vez en cliente. No renderiza nada en SSR (evita
 * desajustes de hidratación); es puramente decorativo.
 */
type Particle = { char: string; cls: string; style: React.CSSProperties };

const rand = (min: number, max: number) => min + Math.random() * (max - min);

function build(theme: string): Particle[] {
  const fall = (chars: string[], n: number, size: [number, number]): Particle[] =>
    Array.from({ length: n }, () => ({
      char: chars[Math.floor(rand(0, chars.length))]!,
      cls: "s-fall",
      style: {
        left: `${rand(0, 100)}vw`,
        fontSize: `${rand(size[0], size[1])}px`,
        animationDuration: `${rand(7, 15)}s`,
        animationDelay: `${rand(-15, 0)}s`,
        // deriva lateral personalizada por partícula
        ["--drift" as string]: `${rand(-40, 40)}px`,
        opacity: rand(0.5, 0.95),
      },
    }));

  const floatUp = (chars: string[], n: number, size: [number, number]): Particle[] =>
    Array.from({ length: n }, () => ({
      char: chars[Math.floor(rand(0, chars.length))]!,
      cls: "s-float",
      style: {
        left: `${rand(0, 100)}vw`,
        fontSize: `${rand(size[0], size[1])}px`,
        animationDuration: `${rand(9, 16)}s`,
        animationDelay: `${rand(-16, 0)}s`,
      },
    }));

  switch (theme) {
    case "navidad":
      return fall(["❄", "❅", "✦"], 26, [10, 22]);
    case "pascua":
      return fall(["🌸", "🌷", "🌼", "🍃"], 20, [16, 28]);
    case "halloween":
      return [
        ...Array.from({ length: 8 }, () => ({
          char: "🦇",
          cls: "s-fly",
          style: {
            top: `${rand(4, 60)}vh`,
            fontSize: `${rand(20, 36)}px`,
            animationDuration: `${rand(9, 16)}s`,
            animationDelay: `${rand(-16, 0)}s`,
            opacity: rand(0.6, 1),
          } as React.CSSProperties,
        })),
        ...fall(["🍂"], 8, [16, 24]),
      ];
    case "ramadan":
      return Array.from({ length: 26 }, () => ({
        char: Math.random() < 0.15 ? "🌙" : "✨",
        cls: "s-twinkle",
        style: {
          left: `${rand(0, 100)}vw`,
          top: `${rand(0, 92)}vh`,
          fontSize: `${rand(10, 22)}px`,
          animationDuration: `${rand(2, 5)}s`,
          animationDelay: `${rand(-5, 0)}s`,
        } as React.CSSProperties,
      }));
    case "san_valentin":
      return floatUp(["💗", "💕", "❤️"], 18, [14, 28]);
    case "verano":
      return floatUp(["🫧", "☀️", "🌊"], 16, [16, 30]);
    default:
      return [];
  }
}

export function SeasonAnimation() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme") ?? "";
    setParticles(build(theme));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="season-anim" aria-hidden>
      {particles.map((p, i) => (
        <span key={i} className={p.cls} style={p.style}>
          {p.char}
        </span>
      ))}
    </div>
  );
}
