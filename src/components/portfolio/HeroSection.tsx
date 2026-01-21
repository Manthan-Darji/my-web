import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
export function HeroSection({
  onContact
}: {
  onContact: () => void;
}) {
  return <section id="home" className="pt-28 sm:pt-32">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.45
          }} className="inline-flex items-center gap-2 rounded-full border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-glow-pulse" />
              <span>Hi, I Am</span>
            </motion.div>

            <TypingText as="h1" text="Manthan Darji" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl" speedMs={36} />

            <motion.p initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.45,
            delay: 0.18
          }} className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">- CSE Student | Tech Enthusiast | Learner</motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.45,
            delay: 0.28
          }} className="mt-7 flex flex-wrap items-center gap-3">
              <button type="button" onClick={onContact} className="rounded-lg border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground neon-ring transition-transform duration-200 hover:-translate-y-0.5">
                Contact Me
              </button>
              
            </motion.div>

            <motion.blockquote initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.55,
            delay: 0.38
          }} className="mt-10 border-l-2 border-neon-purple/50 pl-4 text-sm text-muted-foreground">
              “Talk is cheap. Show me the code.” <span className="text-foreground">- Linus Torvalds</span>
            </motion.blockquote>
          </div>

          <motion.aside initial={{
          opacity: 0,
          scale: 0.98
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.12
        }} className="relative overflow-hidden rounded-2xl border bg-card/40 p-6">
            <div className="pointer-events-none absolute inset-0 cyber-grid" />
            <div className="pointer-events-none absolute inset-0 scanlines" />

            <div className="relative">
              <p className="text-xs text-muted-foreground">$ whoami</p>
              <p className="mt-2 text-sm">
                <span className="text-neon-green">manthan</span>
                <span className="text-muted-foreground">@</span>
                <span className="text-neon-purple">darji</span>
              </p>
              <div className="mt-4 rounded-lg border bg-background/40 p-4">
                <p className="text-xs text-muted-foreground">status</p>
                <p className="mt-1 text-sm text-foreground">
                  Building. Learning. Shipping.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                <div className="rounded-lg border bg-background/30 p-3">
                  <p className="text-foreground">focus</p>
                  <p>System Architecture</p>
                </div>
                <div className="rounded-lg border bg-background/30 p-3">
                  <p className="text-foreground">interest</p>
                  <p>Seeking</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>;
}