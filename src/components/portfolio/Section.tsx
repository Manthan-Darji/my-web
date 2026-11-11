import { ReactNode } from "react";

export function Section({
  id,
  num,
  title,
  kicker,
  children,
}: {
  id: string;
  num?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="container">
        <header className="mb-8 sm:mb-10">
          <div className="checkpoint-head">
            {num ? (
              <span className="checkpoint-num" aria-hidden>
                {num}
              </span>
            ) : null}
            <div>
              {kicker ? <p className="section-kicker">{kicker}</p> : null}
              <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                <span className="text-neon-purple">$</span> {title}
              </h2>
            </div>
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
