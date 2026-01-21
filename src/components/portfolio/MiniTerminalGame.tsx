import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MiniTerminalGameProps = {
  className?: string;
  onBackToTop?: () => void;
};

type Mode = "shell" | "guess";

type Line = {
  kind: "prompt" | "out" | "err";
  text: string;
};

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function MiniTerminalGame({ className, onBackToTop }: MiniTerminalGameProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [mode, setMode] = useState<Mode>("shell");
  const [buffer, setBuffer] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "booting…" },
    { kind: "out", text: "type: help" },
  ]);

  const [secret, setSecret] = useState(() => randInt(1, 20));
  const [attempts, setAttempts] = useState(0);

  const push = (line: Line) => setLines((prev) => [...prev, line]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    if (reducedMotion) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      return;
    }
    // smooth-ish scroll without relying on container scrollIntoView jitter
    scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines, reducedMotion]);

  const resetGuess = () => {
    setSecret(randInt(1, 20));
    setAttempts(0);
  };

  const startGuess = () => {
    resetGuess();
    setMode("guess");
    push({ kind: "out", text: "guessing game: pick a number 1..20" });
    push({ kind: "out", text: "type a number, or 'exit' to quit." });
  };

  const printHelp = () => {
    push({ kind: "out", text: "commands:" });
    push({ kind: "out", text: "  help        show this list" });
    push({ kind: "out", text: "  whoami      a very short intro" });
    push({ kind: "out", text: "  socials     quick links" });
    push({ kind: "out", text: "  play guess  start a mini game" });
    push({ kind: "out", text: "  clear       clear output" });
    push({ kind: "out", text: "  top         back to top" });
  };

  const runShell = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;

    if (cmd === "help") return printHelp();
    if (cmd === "clear") {
      setLines([{ kind: "out", text: "cleared." }]);
      return;
    }
    if (cmd === "whoami") {
      push({ kind: "out", text: "Manthan Darji — building with first principles." });
      push({ kind: "out", text: "I like systems, clean UX, and neon terminals." });
      return;
    }
    if (cmd === "socials") {
      push({ kind: "out", text: "email: solankimanthan0143@gmail.com" });
      push({ kind: "out", text: "discord: manthan_darji" });
      return;
    }
    if (cmd === "top") {
      onBackToTop?.();
      push({ kind: "out", text: "jumped to top." });
      return;
    }
    if (cmd === "play guess" || cmd === "play") return startGuess();

    push({ kind: "err", text: `unknown command: ${cmd}` });
    push({ kind: "out", text: "try: help" });
  };

  const runGuess = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "exit" || cmd === "quit") {
      setMode("shell");
      push({ kind: "out", text: "exited game." });
      return;
    }
    if (cmd === "reset") {
      resetGuess();
      push({ kind: "out", text: "new number generated." });
      return;
    }
    if (cmd === "help") {
      push({ kind: "out", text: "guess mode commands:" });
      push({ kind: "out", text: "  <number>    your guess" });
      push({ kind: "out", text: "  reset       new number" });
      push({ kind: "out", text: "  exit        leave game" });
      return;
    }

    const n = Number(cmd);
    if (!Number.isFinite(n) || n < 1 || n > 20) {
      push({ kind: "err", text: "enter a number between 1 and 20." });
      return;
    }

    let nextAttempts = 0;
    setAttempts((a) => {
      nextAttempts = a + 1;
      return nextAttempts;
    });

    if (n === secret) {
      push({ kind: "out", text: `correct. attempts: ${nextAttempts}` });
      push({ kind: "out", text: "type: reset (play again) or exit" });
      return;
    }

    push({ kind: "out", text: n < secret ? "too low." : "too high." });
  };

  const onSubmit = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    push({ kind: "prompt", text: trimmed });
    if (mode === "shell") runShell(trimmed);
    else runGuess(trimmed);
  };

  return (
    <div
      className={cn(
        "rounded-xl border bg-background/30",
        "shadow-[0_0_0_1px_hsl(var(--border)/0.6),0_0_40px_hsl(var(--primary)/0.12)]",
        className,
      )}
      onClick={() => inputRef.current?.focus()}
      role="group"
      aria-label="Interactive terminal"
    >
      <div className="flex items-center justify-between gap-3 border-b bg-card/20 px-4 py-2">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">terminal</p>
          <p className="truncate text-xs text-muted-foreground">
            mode: <span className="text-foreground">{mode === "shell" ? "shell" : "guess"}</span>
          </p>
        </div>
        <button
          type="button"
          className="rounded-lg border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition hover:neon-ring hover:text-foreground"
          onClick={(e) => {
            e.stopPropagation();
            onBackToTop?.();
          }}
        >
          Back to top
        </button>
      </div>

      <div ref={scrollRef} className="max-h-[280px] overflow-auto px-4 py-3">
        <div className="space-y-1 font-mono text-xs">
          {lines.map((l, idx) => (
            <p
              key={idx}
              className={cn(
                "whitespace-pre-wrap break-words",
                l.kind === "err" && "text-destructive",
                l.kind === "out" && "text-muted-foreground",
                l.kind === "prompt" && "text-foreground",
              )}
            >
              {l.kind === "prompt" ? (
                <>
                  <span className="text-neon-green">$</span> {l.text}
                </>
              ) : (
                l.text
              )}
            </p>
          ))}
        </div>
      </div>

      <form
        className="border-t bg-card/20 px-4 py-3"
        onSubmit={(e) => {
          e.preventDefault();
          const v = buffer;
          setBuffer("");
          onSubmit(v);
        }}
      >
        <div className="flex items-center gap-3 font-mono text-sm">
          <span className="text-neon-green">$</span>
          <input
            ref={inputRef}
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            placeholder={mode === "shell" ? "help" : "guess 1..20"}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {mode === "shell" ? "tip: play guess" : "tip: exit"}
        </p>
      </form>
    </div>
  );
}
