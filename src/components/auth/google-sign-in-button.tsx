"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.4c-.24 1.4-1.68 4.1-5.4 4.1-3.25 0-5.9-2.7-5.9-6s2.65-6 5.9-6c1.85 0 3.1.79 3.8 1.47l2.6-2.5C16.9 3.4 14.65 2.4 12 2.4 6.78 2.4 2.55 6.63 2.55 11.85S6.78 21.3 12 21.3c6.93 0 9.6-4.87 9.6-7.39 0-.5-.05-.87-.12-1.25H12Z"
      />
    </svg>
  );
}

export function GoogleSignInButton({ callbackUrl }: { callbackUrl?: string }) {
  const [isPending, setIsPending] = useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      disabled={isPending}
      onClick={() => {
        setIsPending(true);
        signIn("google", { callbackUrl: callbackUrl ?? "/" });
      }}
    >
      <GoogleIcon />
      Continuar con Google
    </Button>
  );
}
