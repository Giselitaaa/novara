"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { moderateReview } from "@/modules/courses/server/review-actions";

export function ReviewModerationActions({
  reviewId,
  statusKey,
}: {
  reviewId: string;
  statusKey: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function decide(decision: "publicada" | "rechazada") {
    startTransition(async () => {
      await moderateReview(reviewId, decision);
      router.refresh();
    });
  }

  return (
    <div className="flex flex-wrap justify-end gap-2">
      {statusKey !== "publicada" && (
        <Button
          size="sm"
          variant="gold"
          onClick={() => decide("publicada")}
          disabled={isPending}
        >
          Publicar
        </Button>
      )}
      {statusKey !== "rechazada" && (
        <Button
          size="sm"
          variant="outline"
          onClick={() => decide("rechazada")}
          disabled={isPending}
        >
          Rechazar
        </Button>
      )}
    </div>
  );
}
