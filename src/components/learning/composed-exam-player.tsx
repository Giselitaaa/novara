"use client";

import { ChevronLeft, ChevronRight, Clock, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

import { QuestionView, type Q } from "@/components/learning/question-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  loadExamSectionDetail,
  submitComposedExam,
  type ComposedExamResult,
} from "@/modules/exams/server/attempt-actions";
import type { Response } from "@/modules/exercises/shared/question-types";

/** Metadatos de navegación — ligero, sin preguntas ni contenido pesado. */
type SectionShell = {
  id: string;
  weight: number;
  category: string;
  exerciseTitle: string;
  questionCount: number;
};

/** Contenido completo de una sección, cargado a demanda al llegar a ella. */
type SectionDetail = {
  instructions: string | null;
  config: Record<string, unknown> | null;
  questions: Q[];
};

const CAT_LABEL: Record<string, string> = {
  reading: "Comprensión lectora",
  writing: "Expresión escrita",
  listening: "Comprensión auditiva",
  speaking: "Expresión oral",
};

/**
 * Reproductor de examen compuesto. Un examen real puede tener cientos
 * de secciones (el final de C2 Proficiency: 600) — nunca se cargan ni
 * se renderizan todas a la vez: solo la sección actual existe en el
 * DOM, y su contenido se pide al servidor justo al navegar a ella
 * (`loadExamSectionDetail`), con una caché en memoria para no volver
 * a pedirla si el alumno retrocede. El envío final sigue mandando
 * TODAS las respuestas recogidas (de las secciones visitadas) en una
 * sola llamada a `submitComposedExam`, exactamente igual que antes —
 * la corrección y el certificado no cambian.
 */
export function ComposedExamPlayer({
  examId,
  title,
  passingScore,
  timeLimitMinutes,
  sections,
}: {
  examId: string;
  title: string;
  passingScore: number;
  timeLimitMinutes: number | null;
  sections: SectionShell[];
}) {
  // responses[sectionId][questionId] = Response
  const [responses, setResponses] = useState<Record<string, Record<string, Response>>>(
    {}
  );
  const [details, setDetails] = useState<Record<string, SectionDetail>>({});
  const [loadingSectionId, setLoadingSectionId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<ComposedExamResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const [secondsLeft, setSecondsLeft] = useState<number | null>(
    timeLimitMinutes && timeLimitMinutes > 0 ? timeLimitMinutes * 60 : null
  );

  const current = sections[currentIndex];
  const fetchingRef = useRef<Set<string>>(new Set());

  // Carga a demanda de la sección actual (y solo esa) en cuanto cambia.
  useEffect(() => {
    if (!current || details[current.id] || fetchingRef.current.has(current.id)) return;
    fetchingRef.current.add(current.id);
    setLoadingSectionId(current.id);
    loadExamSectionDetail(examId, current.id)
      .then((detail) => {
        setDetails((prev) => ({ ...prev, [current.id]: detail as SectionDetail }));
      })
      .catch(() => {
        toast.error("No se pudo cargar esta sección. Inténtalo de nuevo.");
      })
      .finally(() => {
        fetchingRef.current.delete(current.id);
        setLoadingSectionId(null);
      });
  }, [current, details, examId]);

  // Cuenta atrás: al llegar a 0, se autoenvía el examen (una sola vez).
  useEffect(() => {
    if (secondsLeft === null || result) return;
    if (secondsLeft <= 0) {
      submit();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => (s === null ? null : s - 1)), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, result]);

  function setResp(sectionId: string, questionId: string, r: Response) {
    setResponses((prev) => ({
      ...prev,
      [sectionId]: { ...(prev[sectionId] ?? {}), [questionId]: r },
    }));
  }

  function submit() {
    // Solo se manda lo de las secciones que llegaron a cargarse — una
    // sección nunca visitada no tiene respuestas, que el servidor ya
    // trata como "sin responder" (incorrecta), el mismo resultado que
    // mandar explícitamente null en cada pregunta.
    const payload = Object.entries(details).map(([sectionId, detail]) => ({
      sectionId,
      responses: detail.questions.map((q) => responses[sectionId]?.[q.id] ?? null),
    }));
    startTransition(async () => {
      try {
        setResult(await submitComposedExam(examId, payload));
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo corregir el examen."
        );
      }
    });
  }

  const answeredCount = sections.filter(
    (s) => Object.keys(responses[s.id] ?? {}).length > 0
  ).length;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">{title}</h1>
          <p className="text-sm text-muted-foreground">
            {sections.length} sección(es) · aprobado a partir de {passingScore}%
          </p>
        </div>
        {secondsLeft !== null && !result && (
          <div
            className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-sm ${
              secondsLeft <= 60
                ? "border-destructive/40 bg-destructive/10 text-destructive"
                : "border-border"
            }`}
            aria-label="Tiempo restante"
          >
            <Clock className="size-4" />
            {String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:
            {String(secondsLeft % 60).padStart(2, "0")}
          </div>
        )}
      </div>

      {result && (
        <Card
          className={`p-5 ${result.passed ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"}`}
        >
          <p className="font-display text-2xl tracking-tighter">
            {result.finalScore}/100 — {result.passed ? "Aprobado" : "No superado"}
          </p>
          <p className="text-sm text-muted-foreground">
            Nota mínima: {result.passingScore}%.
            {result.needsManualReview &&
              " Hay secciones con respuestas abiertas que revisará el profesor."}
          </p>
          <ul className="mt-3 flex max-h-64 flex-col gap-1 overflow-y-auto text-sm">
            {result.sections.map((s, i) => (
              <li key={i} className="flex justify-between border-b border-border/50 py-1">
                <span>
                  {s.title}{" "}
                  <span className="text-muted-foreground">
                    ({CAT_LABEL[s.category] ?? s.category})
                  </span>
                </span>
                <span className="text-muted-foreground">
                  {s.score}/100 · peso {s.weight}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {!result && current && (
        <>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>
                Sección {currentIndex + 1} de {sections.length}
              </span>
              <span>{answeredCount} contestada(s)</span>
            </div>
            <Progress
              value={((currentIndex + 1) / sections.length) * 100}
              className="h-1.5"
            />
          </div>

          <Card className="flex flex-col gap-4 p-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Sección {currentIndex + 1} ·{" "}
                {CAT_LABEL[current.category] ?? current.category}
              </p>
              <h2 className="font-display text-lg tracking-tighter">
                {current.exerciseTitle}
              </h2>
            </div>

            {(() => {
              const detail = details[current.id];
              if (loadingSectionId === current.id || !detail) {
                return (
                  <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted-foreground">
                    <Loader2 className="size-4 animate-spin" /> Cargando sección…
                  </div>
                );
              }
              return (
                <SectionBody
                  sectionId={current.id}
                  detail={detail}
                  responses={responses[current.id]}
                  onChange={(questionId, r) => setResp(current.id, questionId, r)}
                />
              );
            })()}
          </Card>

          <div className="flex items-center justify-between gap-3">
            <Button
              variant="outline"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            >
              <ChevronLeft className="size-4" /> Anterior
            </Button>
            {currentIndex < sections.length - 1 ? (
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentIndex((i) => Math.min(sections.length - 1, i + 1))
                }
              >
                Siguiente <ChevronRight className="size-4" />
              </Button>
            ) : null}
            <Button
              variant="gold"
              onClick={submit}
              disabled={isPending}
              className="ml-auto"
            >
              {isPending ? "Corrigiendo…" : "Finalizar examen"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function SectionBody({
  detail,
  responses,
  onChange,
}: {
  sectionId: string;
  detail: SectionDetail;
  responses: Record<string, Response> | undefined;
  onChange: (questionId: string, r: Response) => void;
}) {
  const cfg = detail.config ?? {};
  return (
    <>
      {detail.instructions && (
        <p className="text-sm text-muted-foreground">{detail.instructions}</p>
      )}
      {typeof cfg.text === "string" && cfg.text && (
        <div className="prose prose-sm max-w-none whitespace-pre-line rounded-md border border-border bg-muted/30 p-4 dark:prose-invert">
          {cfg.text}
        </div>
      )}
      {typeof cfg.audioUrl === "string" && cfg.audioUrl && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio controls src={cfg.audioUrl} className="w-full" />
      )}

      {detail.questions.length > 0 ? (
        <div className="flex flex-col gap-3">
          {detail.questions.map((q, i) => (
            <QuestionView
              key={q.id}
              index={i}
              question={q}
              response={responses?.[q.id]}
              onChange={(r) => onChange(q.id, r)}
              disabled={false}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Sección sin preguntas auto-corregibles (se evalúa aparte).
        </p>
      )}
    </>
  );
}
