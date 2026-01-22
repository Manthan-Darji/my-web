import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", id: "home" },
  { label: "Works", id: "works" },
  { label: "About Me", id: "about" },
  { label: "Achievements", id: "achievements" },
  { label: "Contacts", id: "contacts" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={cn(
            "mt-4 rounded-xl border px-4 py-3 backdrop-blur",
            scrolled
              ? "bg-background/65 shadow-[0_10px_40px_-24px_hsl(var(--shadow-glow)/0.65)]"
              : "bg-background/30"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => scrollToId("home")}
              className="group inline-flex items-baseline gap-2 text-sm font-semibold tracking-tight"
              aria-label="Go to Home"
            >
               <img
                 src="/favicon.png"
                 width={16}
                 height={16}
                 alt="Manthan portfolio icon"
                 className="relative top-[1px] mr-1 inline-block h-4 w-4 rounded-sm"
                 loading="eager"
               />
              <span className="text-neon-purple">{`>`}</span>
              <span className="transition-colors group-hover:text-neon-green">
                Manthan
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToId(l.id)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition",
                    "hover:text-foreground hover:neon-ring"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="md:hidden text-xs text-muted-foreground">
              <span className="text-neon-green">/</span> menu
            </div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}
