import { awards, education, experience, skills } from "./data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <ol className="relative border-l border-white/[0.08]">
            {experience.map((r, i) => (
              <li key={r.org + r.title} className="relative pb-10 pl-7 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-[var(--accent)] bg-[var(--bg)]" />
                <Reveal delay={i * 0.04}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-display text-lg font-semibold text-[var(--ink)]">{r.org}</h3>
                    <span className="font-mono text-xs text-[var(--ink-3)]">{r.when}</span>
                  </div>
                  <p className="mt-0.5 text-[15px] text-[var(--ink-2)]">
                    {r.title} <span className="text-[var(--ink-3)]">· {r.where}</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--ink-2)]">
                    {r.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-white/30" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-5">
          <Reveal>
            <div className="card p-6">
              <p className="eyebrow mb-3">Education</p>
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">{education.school}</h3>
              <p className="mt-1 text-[15px] text-[var(--ink-2)]">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--ink-3)]">
                {education.when} · {education.detail}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.grades.map((g) => (
                  <span key={g} className="tag">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="card p-6">
              <p className="eyebrow mb-3">Awards</p>
              <ul className="space-y-2 text-[15px] text-[var(--ink-2)]">
                {awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6">
              <p className="eyebrow mb-4">Toolkit</p>
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.group}>
                    <p className="mb-2 text-sm text-[var(--ink)]">{s.group}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span key={it} className="tag">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
