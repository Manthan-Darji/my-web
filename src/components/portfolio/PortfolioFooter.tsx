import { Github, Instagram, Linkedin, MessageSquare } from "lucide-react";

const socials = [
  { label: "Discord", href: "https://bit.ly/Manthan_Discord", icon: MessageSquare },
  { label: "GitHub", href: "https://github.com/Manthan-Darji", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/Manthan-Darji", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/manthan_.darji", icon: Instagram },
];

export function PortfolioFooter() {
  return (
    <footer className="border-t py-10">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2026. Made by <span className="text-foreground">Manthan</span>.
          </p>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border bg-card/40 px-3 py-2 text-xs text-muted-foreground transition hover:neon-ring hover:text-foreground"
              >
                <s.icon className="h-4 w-4 text-neon-purple transition-colors group-hover:text-neon-green" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
