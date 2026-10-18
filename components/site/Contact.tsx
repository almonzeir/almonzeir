import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./data";
import Reveal from "./Reveal";

const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "almonzer-hamid", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "almonzeir", href: profile.github },
  { icon: FileText, label: "CV", value: "PDF, 2 pages", href: profile.cv },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="card relative overflow-hidden p-7 sm:p-12">
          <div className="glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <p className="eyebrow mb-3">
              <span className="text-[var(--accent)]">05</span> / contact
            </p>
            <h2 className="font-display max-w-2xl text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Looking for a funded MSc, a research role, or ML engineering work.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-[var(--ink-2)]">
              Based in {profile.location} and happy to relocate. If you work on Arabic NLP, low-resource languages or efficient
              models, I would like to hear from you.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {items.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] px-5 py-4 transition-colors hover:border-[var(--accent)]"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon className="h-5 w-5 flex-none text-[var(--ink-3)] group-hover:text-[var(--accent)]" />
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-wider text-[var(--ink-3)]">{label}</span>
                      <span className="block truncate text-[15px] text-[var(--ink)]">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 flex-none text-[var(--ink-3)] group-hover:text-[var(--ink)]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-14 flex flex-col gap-2 text-sm text-[var(--ink-3)] sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Almonzer Hamid</span>
        <span className="font-ar" dir="rtl" lang="ar">
          {profile.nameAr}
        </span>
      </footer>
    </section>
  );
}
