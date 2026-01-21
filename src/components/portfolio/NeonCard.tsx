import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function NeonCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card/70 p-5 backdrop-blur-sm transition-transform duration-200",
        "hover:-translate-y-0.5 hover:neon-ring",
        "focus-within:neon-ring",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      {children}
    </div>
  );
}
