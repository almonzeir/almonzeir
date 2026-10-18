import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "./data";
import Reveal from "./Reveal";
import Section from "./Section";

function Links({ p }: { p: Project }) {
  if (!p.links?.length) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {p.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-[var(--ink)] link-u"
        >
          {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function Featured({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal delay={i * 0.05}>
      <article className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:gap-10">
        <div>
          <p className="eyebrow mb-3">{p.kicker}</p>
          <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">{p.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--ink-2)]">{p.summary}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-[var(--ink-2)]">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--accent)]" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
          <Links p={p} />
        </div>
        {p.stat && (
          <div className="flex flex-row items-baseline gap-3 border-t border-white/[0.08] pt-5 md:min-w-[170px] md:flex-col md:items-end md:border-l md:border-t-0 md:pl-8 md:pt-0 md:text-right">
            <span className="font-display text-4xl font-semibold text-[var(--accent)] sm:text-5xl">{p.stat.value}</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-3)]">{p.stat.label}</span>
          </div>
        )}
      </article>
    </Reveal>
  );
}

function Small({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal delay={(i % 2) * 0.05} className="h-full">
      <article className="card flex h-full flex-col overflow-hidden">
        {p.image && (
          <div className="relative aspect-[16/9] border-b border-white/[0.08] bg-black/40">
            <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top opacity-90" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">{p.kicker}</p>
              <h3 className="font-display text-xl font-semibold text-[var(--ink)]">{p.title}</h3>
            </div>
            {p.stat && <span className="font-display text-2xl font-semibold text-[var(--accent)]">{p.stat.value}</span>}
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-2)]">{p.summary}</p>
          {p.points.length > 1 && (
            <ul className="mt-3 space-y-1 text-sm text-[var(--ink-2)]">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--accent)]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto pt-5">
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <Links p={p} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section
      id="work"
      index="01"
      title="Selected work"
      intro="Models and systems I have built and shipped. Numbers are from held-out test sets or production use."
    >
      <div className="space-y-5">
        {featured.map((p, i) => (
          <Featured key={p.title} p={p} i={i} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((p, i) => (
          <Small key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
