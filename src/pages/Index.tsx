import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { NeonCard } from "@/components/portfolio/NeonCard";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { Section } from "@/components/portfolio/Section";
import { usePointerGlow } from "@/components/portfolio/usePointerGlow";
const Index = () => {
  usePointerGlow();
  useEffect(() => {
    document.title = "Manthan Darji | Portfolio";
    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta("description", "Cyber-hacker style personal portfolio for Manthan Darji — projects, skills, achievements, and contact.");
  }, []);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return <div className="min-h-screen">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute inset-0 scanlines" />
        <div className="absolute inset-0" style={{
        background: "radial-gradient(700px circle at var(--mx, 20%) var(--my, 10%), hsl(var(--primary)/0.18), transparent 55%), radial-gradient(500px circle at calc(var(--mx, 20%) + 120px) calc(var(--my, 10%) + 160px), hsl(var(--primary-2)/0.12), transparent 60%)"
      }} />
      </div>

      <PortfolioNavbar />

      <main>
        <HeroSection onContact={() => scrollTo("contacts")} />

        <Section id="achievements" title="Achievements" kicker="proof-of-work">
          <div className="grid gap-4 md:grid-cols-2">
            <NeonCard>
              <p className="text-xs text-muted-foreground">milestone</p>
              <h3 className="mt-2 text-base font-semibold">
                Google Student Ambassador <span className="text-neon-green">(Completed)</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Built community, learned leadership, shipped initiatives.
              </p>
            </NeonCard>
          </div>
        </Section>

        <Section id="works" title="Projects" kicker="building-in-public">
          <div className="mb-5 text-sm text-muted-foreground">
            Status: <span className="text-neon-purple">Working On It....</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <NeonCard>
              <h3 className="text-base font-semibold">Portfolio</h3>
              <p className="mt-2 text-sm text-muted-foreground">Work Under Construction 🚧</p>
            </NeonCard>
            <NeonCard>
              <h3 className="text-base font-semibold">Small Projects</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                “ Vo Bhi Bana Lenge , Time to Do 😅 ”
              </p>
            </NeonCard>
          </div>
        </Section>

        <Section id="skills" title="Skills" kicker="stack">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NeonCard className="p-6">
              <p className="text-xs text-muted-foreground">Gen-AI</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Prompt Engineering",
                  "LLMs",
                  "AI App Building",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-neon-green">*</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </NeonCard>

            <NeonCard className="p-6">
              <p className="text-xs text-muted-foreground">Core</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "C Prog.",
                  "Python",
                  "Java",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-neon-green">*</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </NeonCard>

            <NeonCard className="p-6">
              <p className="text-xs text-muted-foreground">Systems</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Linux",
                  "Git & GitHub",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-neon-green">*</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </NeonCard>

            <NeonCard className="p-6">
              <p className="text-xs text-muted-foreground">Soft Skills</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Communication",
                  "First Principle Thinkings",
                  "Problem Breakdown",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-neon-green">*</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </NeonCard>
          </div>
        </Section>

        <Section id="about" title="About Me" kicker="first-principles">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <NeonCard className="p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">I don’t just write code. I question it. 


My approach is simple but rare: First Principles Thinking. While the herd follows tutorials step-by-step, I prefer breaking things to understand how they work from the core.


I am driven by a relentless curiosity In Tech , whether it's System Architecture or Gen-AI, I dig deep until I find the 'why' behind the 'how'. I don't settle for 'it works'. I need to know why it works.</p>
            </NeonCard>

            <NeonCard className="p-6">
              <p className="text-xs text-muted-foreground">Fun Facts</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {["My coding playlist is heavier than my backend logic", "I prefer the terminal over a GUI any day", "Coffee doesn't wake me up. A compilation error does"].map(t => <li key={t} className="flex gap-2">
                    <span className="text-neon-green">*</span>
                    <span>{t}</span>
                  </li>)}
              </ul>
            </NeonCard>
          </div>
        </Section>

        <Section id="contacts" title="Contacts" kicker="ping-me">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <NeonCard className="p-6">
              <p className="text-sm text-muted-foreground">
                I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="text-neon-purple">//</span> Always ready to team up for something that actually Matters.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border bg-background/30 p-4">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a className="mt-2 block text-sm text-foreground hover:text-neon-green" href="mailto:solankimanthan0143@gmail.com">solankimanthan22@gmail.com</a>
                </div>
                <div className="rounded-lg border bg-background/30 p-4">
                  <p className="text-xs text-muted-foreground">Discord</p>
                  <p className="mt-2 text-sm text-foreground">manthan_darji</p>
                </div>
              </div>
            </NeonCard>

            <motion.div initial={{
            opacity: 0,
            y: 12
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.4
          }} transition={{
            duration: 0.4
          }} className="rounded-2xl border bg-card/30 p-6">
              <p className="text-xs text-muted-foreground">terminal</p>
              <p className="mt-3 text-sm">
                <span className="text-neon-green">$</span> echo "Let’s build something that matters."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Let’s build something that matters.</p>
              <button type="button" onClick={() => scrollTo("home")} className="mt-5 w-full rounded-lg border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition hover:neon-ring hover:text-foreground">
                Back to top
              </button>
            </motion.div>
          </div>
        </Section>
      </main>

      <PortfolioFooter />
    </div>;
};
export default Index;