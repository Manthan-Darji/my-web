import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { Section } from "@/components/portfolio/Section";
import { usePointerGlow } from "@/components/portfolio/usePointerGlow";

const timeline = [
  {
    date: "AUG 2026",
    title: "ShadowFox — Cybersecurity Intern",
    tag: "internship",
    link: "https://lnkd.in/p/dc_qQH9Z",
    points: [
      <>
        <span className="hl">One-month virtual internship</span>
      </>,
      "Attack-surface recon, network traffic and protocol auditing",
      "Binary inspection, cryptanalysis, credential security, privilege escalation",
    ],
  },
  {
    date: "JUN 2026",
    title: "Responsible Disclosure",
    tag: "security",
    link: "https://lnkd.in/p/d9v72xr2",
    points: [
      <>
        <span className="hl">Two high-severity vulnerabilities</span> reported through
        formal channels
      </>,
      "Technical details stay private while the report is under review",
      <>
        <span className="hl">Vendor notified first</span>, shared publicly only
        after the fix
      </>,
      <>
        <span className="hl">Fix verified</span>, the issue is closed on the live
        system
      </>,
    ],
  },
  {
    date: "FEB 2026",
    title: "AI Innovation Challenge — 4th Statewide",
    tag: "hackathon",
    link: "https://lnkd.in/p/d94Hbq7p",
    points: [
      "NxVoy, AI travel agent",
      <>
        Placed <span className="hl">4th statewide</span> at i-HUB Ahmedabad
      </>,
      "35 shortlisted teams from 100+ submissions",
    ],
  },
  {
    date: "2025 — 2026",
    title: "Google Student Ambassador",
    tag: "community",
    link: "https://lnkd.in/p/d_TmqU_m",
    points: [
      "Built community, learned leadership, shipped initiatives",
      "Stepped out of my comfort zone",
      <>
        <span className="hl">Google x PING Network</span>, GEC Rajkot
      </>,
    ],
  },
];

const skillGroups: {
  label: string;
  tiles: { name: string; icon: string; white?: boolean }[];
}[] = [
  {
    label: "Cybersecurity",
    tiles: [
      { name: "Burp Suite", icon: "burpsuite.svg", white: true },
      { name: "OWASP ZAP", icon: "owasp-zap.png" },
      { name: "Metasploit", icon: "Metasploit.svg" },
      { name: "Kali Linux", icon: "kali-linux.svg" },
      { name: "Wireshark", icon: "wireshark.png" },
      { name: "OWASP", icon: "OWASP.svg" },
      { name: "Nmap", icon: "nmap-official.svg" },
      { name: "OWASP Top 10", icon: "mdi-shield-check.svg" },
    ],
  },
  {
    label: "Gen-AI",
    tiles: [
      { name: "OpenAI", icon: "openai.svg", white: true },
      { name: "Anthropic", icon: "anthropic.svg" },
      { name: "Prompt Eng.", icon: "mdi-chat-processing.svg" },
      { name: "LLMs", icon: "mdi-brain.svg" },
      { name: "AI Agents", icon: "mdi-robot.svg" },
      { name: "MCP", icon: "mcp-white.png" },
      { name: "RAG", icon: "mdi-database-search.svg" },
    ],
  },
  {
    label: "Languages",
    tiles: [
      { name: "Python", icon: "python.svg" },
      { name: "C", icon: "c.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "HTML5", icon: "html5.svg" },
      { name: "CSS3", icon: "css3.svg" },
      { name: "SQL", icon: "mdi-database.svg" },
      { name: "Bash", icon: "Bash.svg" },
    ],
  },
  {
    label: "Systems & Tools",
    tiles: [
      { name: "Linux", icon: "linux.svg" },
      { name: "Git", icon: "git.svg" },
      { name: "GitHub", icon: "github-white.svg" },
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "React", icon: "React.svg" },
      { name: "TCP/IP", icon: "mdi-lan.svg" },
      { name: "DNS", icon: "mdi-dns.svg" },
      { name: "TLS", icon: "mdi-shield-lock.svg" },
    ],
  },
];

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

    ensureMeta("description", "Manthan Darji, Computer Engineering student at GEC Rajkot, betting on AI & CyberSecurity. ShadowFox intern, builder of Arc-Scan and NxVoy.");
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
        background: "radial-gradient(600px circle at var(--mx, 18%) var(--my, 8%), hsl(var(--primary)/0.16), transparent 55%), radial-gradient(420px circle at 85% 30%, hsl(var(--primary-2)/0.08), transparent 60%)"
      }} />
      </div>

      <PortfolioNavbar />

      <main>
        <HeroSection onContact={() => scrollTo("contacts")} />

        <Section id="achievements" num="01" title="Achievements" kicker="Checkpoint 01 — proof-of-work">
          <div className="tl">
            {timeline.map((t) => (
              <div className="tl-item" key={t.date}>
                <span className="tl-dot" />
                <span className="tl-date">{t.date}</span>
                <div className="tl-card glass">
                  <a className="tl-link" href={t.link} target="_blank" rel="noopener noreferrer" aria-label={`${t.title} — LinkedIn post`}>
                    ↗ Link
                  </a>
                  <h3>
                    {t.title} <span className="tag">{t.tag}</span>
                  </h3>
                  <ul className="pts">
                    {t.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="works" num="02" title="Projects" kicker="Checkpoint 02 — building-in-public">
          <p className="status">
            Status: <b>Shipped.</b>
          </p>
          <div className="grid2">
            <a className="brutal" href="https://github.com/Manthan-Darji/Arc-Scan" target="_blank" rel="noopener">
              <h3>
                Arc-Scan <span className="ext">↗ GitHub</span>
              </h3>
              <ul className="pts">
                <li>Terminal-based scanner for authorized network assessments</li>
                <li>Host discovery, concurrent TCP port scanning, service and banner detection, TLS checks</li>
                <li>Structured reports: terminal, JSON, CSV, XML</li>
              </ul>
              <p className="tech">
                <b>Python · Asyncio · TCP/IP · TLS</b> — 2026
              </p>
            </a>
            <a className="brutal" href="https://github.com/Manthan-Darji/nxvoy" target="_blank" rel="noopener">
              <h3>
                NxVoy, AI Travel Agent <span className="ext">↗ GitHub</span>
              </h3>
              <ul className="pts">
                <li>AI agent for dynamic travel planning</li>
                <li>
                  <span className="hl">4th statewide</span>, AI Innovation Challenge 2026,
                  i-HUB Ahmedabad
                </li>
              </ul>
              <p className="tech">
                <b>Python · LLMs · AI Agents</b> — Feb 2026
              </p>
            </a>
          </div>
        </Section>

        <Section id="skills" num="03" title="Stack" kicker="Checkpoint 03 — stack">
          {skillGroups.map((g) => (
            <div className="stack-group glass" key={g.label}>
              <p className="label">
                <b>//</b> {g.label}
              </p>
              <div className="tiles">
                {g.tiles.map((t) => (
                  <div className="tile" key={t.name}>
                    <img
                      src={`/icons/${t.icon}`}
                      alt={t.name}
                      loading="lazy"
                      className={t.white ? "w" : undefined}
                    />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="stack-group glass">
            <p className="label">
              <b>//</b> Soft Skills
            </p>
            <div className="chips">
              {["Communication", "First Principle Thinking", "Problem Breakdown"].map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education" num="04" title="Education" kicker="Checkpoint 04 — where-i-study">
          <div className="grid2">
            <div className="edu-card glass">
              <p className="label">
                2024 — 2028 <span className="tag g">SEM 5</span>
              </p>
              <h3>Govt. Engr. College, Rajkot</h3>
              <p>BE in Computer Engineering (GTU)</p>
            </div>
            <div className="edu-card glass">
              <p className="label">2022 — 2024</p>
              <h3>S.V. High School, Kadi</h3>
              <p>
                HSE - Science. <span className="hl">PR - 90.</span>
                <br />
                <span className="hl">JEE (Mains) - 86.</span>
              </p>
            </div>
          </div>
        </Section>

        <Section id="about" num="05" title="About Me" kicker="Checkpoint 05 — first-principles">
          <div className="about">
            <div className="glass">
              <p>
                I don&rsquo;t just write code. I question it.
                <br />
                <br />
                My approach is simple but rare: First Principles Thinking. While the herd follows
                tutorials step-by-step, I prefer breaking things to understand how they work from
                the core.
                <br />
                <br />
                I am driven by a relentless curiosity in tech - whether it&rsquo;s System Architecture or
                Gen-AI, I dig deep until I find the &ldquo;why&rdquo; behind the &ldquo;how&rdquo;. I don&rsquo;t settle for &ldquo;it
                works&rdquo;. I need to know why it works.
              </p>
            </div>

            <div className="fun">
              <p>Fun Facts</p>
              <div className="grid2">
                <div className="fact">
                  <span>*</span> My Music playlist is heavier than my backend logic
                </div>
                <div className="fact">
                  <span>*</span> Coffee doesn&rsquo;t wake me up. A compilation error does
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contacts" num="06" title="Contacts" kicker="Checkpoint 06 — ping-me">
          <div className="contact">
            <div className="glass">
              <ul className="pts">
                <li>Open to freelance opportunities.</li>
                <li>Other requests or questions? Just ping me.</li>
              </ul>
              <p>
                <span className="slash">//</span> Always ready to team up for something that
                actually Matters.
              </p>

              <div className="duo">
                <div>
                  <p>Email</p>
                  <a href="mailto:solankimanthan0143@gmail.com">solankimanthan0143@gmail.com</a>
                </div>
                <div>
                  <p>Discord</p>
                  <span className="val">manthan_darji</span>
                </div>
              </div>
            </div>

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
            }} className="term">
              <p>terminal</p>
              <p>$ echo &ldquo;Let&rsquo;s build something that matters !&rdquo;</p>
              <p className="term-out">Let&rsquo;s build something that matters !</p>
              <button type="button" onClick={() => scrollTo("home")} className="back">
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
