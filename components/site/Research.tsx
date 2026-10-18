import { ArrowUpRight } from "lucide-react";
import { publications, research } from "./data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Research() {
  return (
    <Section id="research" index="02" title="Research">
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="card h-full p-6 sm:p-8">
            <p className="eyebrow mb-3">Proposed MSc research</p>
            <h3 className="font-display text-2xl font-semibold leading-snug text-[var(--ink)]">{research.title}</h3>
            <p className="mt-4 leading-relaxed text-[var(--ink-2)]">{research.blurb}</p>
            <ol className="mt-6 space-y-3">
              {research.questions.map((q, i) => (
                <li key={q} className="grid grid-cols-[auto_1fr] gap-4 text-[15px] text-[var(--ink-2)]">
                  <span className="font-mono text-sm text-[var(--accent)]">RQ{i + 1}</span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full p-6 sm:p-8">
            <p className="eyebrow mb-5">Publications</p>
            <ul className="space-y-6">
              {publications.map((p) => (
                <li key={p.href}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
                    <span className="font-display text-[17px] font-medium leading-snug text-[var(--ink)] group-hover:text-[var(--accent)]">
                      {p.title}
                    </span>
                    <span className="mt-2 block text-sm text-[var(--ink-3)]">{p.authors}</span>
                    <span className="mt-1 block text-sm text-[var(--ink-2)]">{p.venue}</span>
                    <span className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-[var(--ink-2)]">
                      {p.linkLabel} <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
