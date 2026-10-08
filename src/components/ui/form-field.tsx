import * as React from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

function FormField({ id, label, error, className, children }: FormFieldProps) {
  const errorId = `${id}-error`;

  // El mensaje de error ya usa role="alert" (se anuncia al aparecer), pero
  // sin `aria-describedby` el campo no queda "descrito" por él para quien
  // llega al input después de que ya se anunció. Se inyecta en el/los
  // elemento(s) hijo reales (el Input/Select/etc. de este campo), sin
  // tocar nada si no hay error.
  const content = error
    ? React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const existing = (child.props as { "aria-describedby"?: string })[
          "aria-describedby"
        ];
        return React.cloneElement(
          child as React.ReactElement<{ "aria-describedby"?: string }>,
          { "aria-describedby": existing ? `${existing} ${errorId}` : errorId }
        );
      })
    : children;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id}>{label}</Label>
      {content}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export { FormField };
