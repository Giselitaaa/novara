"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-40 overflow-hidden rounded-md border border-border bg-popover p-1.5",
        "text-popover-foreground shadow-lifted",
        "data-[state=open]:animate-fade-in",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    active?: boolean;
  }
>(({ className, active, children, asChild, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    asChild={asChild}
    className={cn(
      "flex cursor-pointer select-none items-center justify-between gap-2 rounded-sm",
      "px-2.5 py-2 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      className
    )}
    {...props}
  >
    {/* Con `asChild`, Radix usa Slot y exige un ÚNICO hijo: no podemos
        añadir el check como hermano o revienta con React.Children.only.
        El indicador `active` solo aplica a items normales (no-asChild). */}
    {asChild ? (
      children
    ) : (
      <>
        {children}
        {active && <Check className="size-3.5 text-gold" aria-hidden />}
      </>
    )}
  </DropdownMenuPrimitive.Item>
));
DropdownMenuItem.displayName = "DropdownMenuItem";

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
