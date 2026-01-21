import { useEffect, useMemo, useState } from "react";

type TypingTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
  showCaret?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

export function TypingText({
  text,
  className,
  speedMs = 42,
  startDelayMs = 120,
  showCaret = true,
  as = "h1",
}: TypingTextProps) {
  const Tag = as as any;
  const [count, setCount] = useState(0);

  const reduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }

    setCount(0);
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        setCount((c) => {
          const next = Math.min(text.length, c + 1);
          if (next >= text.length) window.clearInterval(id);
          return next;
        });
      }, speedMs);
      return () => window.clearInterval(id);
    }, startDelayMs);

    return () => window.clearTimeout(start);
  }, [reduced, speedMs, startDelayMs, text]);

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden>{text.slice(0, count)}</span>
      {showCaret ? (
        <span
          aria-hidden
          className="ml-1 inline-block h-[1em] w-[0.6ch] translate-y-[0.12em] bg-foreground/80 align-baseline animate-caret-blink"
        />
      ) : null}
    </Tag>
  );
}
