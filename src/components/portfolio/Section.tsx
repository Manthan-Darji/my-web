import { ReactNode } from "react";

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="container">
        <header className="mb-8 sm:mb-10">
          {kicker ? (
            <p className="text-sm text-muted-foreground">{kicker}</p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <span className="text-neon-purple">$</span> {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
