import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin, MessageSquare } from "lucide-react";
import { heroMetrics, profile } from "./data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
        <Reveal>
          <div className="mb-7 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
              <Image src="/Images/profile.png" alt="Almonzer Hamid" fill sizes="56px" className="object-cover" priority />
            </div>
            <div>
              <p className="font-ar text-lg text-[var(--ink-2)]" dir="rtl" lang="ar">
                {profile.nameAr}
              </p>
              <p className="eyebrow">
                {profile.role} · {profile.focus}
              </p>
            </div>
          </div>

          <h1 className="font-display text-[2.5rem] font-semibold leading-[1.05] text-[var(--ink)] sm:text-6xl">
            I build machine learning that works in <span className="text-[var(--accent)]">Arabic</span>, offline, and on cheap
            hardware.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-2)] sm:text-lg">
            {
              "I'm a native Sudanese Arabic speaker and a Computer Science (Data Science) graduate. I've shipped an offline Arabic OCR model, a medical-imaging screening pipeline, and LLM systems that check their own output. Next, I want to research how well LLMs handle low-resource Arabic dialects, starting with Sudanese."
            }
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-accent">
              See the work <ArrowDown className="h-4 w-4" />
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <FileText className="h-4 w-4" /> CV
            </a>
            <a href="#ask" className="btn btn-ghost">
              <MessageSquare className="h-4 w-4" /> Ask my AI
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-[var(--ink-3)]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--ink)]">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--ink)]">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card overflow-hidden font-mono text-[13px]">
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-2 text-[var(--ink-3)]">results.log</span>
            </div>
            <div className="space-y-1 p-4 sm:p-5">
              <p className="text-[var(--ink-3)]">$ python report.py --shipped</p>
              <div className="pt-2" />
              {heroMetrics.map((m) => (
                <div key={m.label} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-dashed border-white/[0.06] py-2.5 last:border-0">
                  <span className="truncate text-[var(--ink-2)]">{m.label}</span>
                  <span className="text-right text-base text-[var(--accent)]">{m.value}</span>
                  <span className="col-span-2 text-xs text-[var(--ink-3)]"># {m.note}</span>
                </div>
              ))}
              <p className="pt-3 text-[var(--ink-3)]">
                $ status <span className="text-[var(--ink-2)]">open to funded MSc, research and ML roles</span>
                <span className="blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[var(--accent)]" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
