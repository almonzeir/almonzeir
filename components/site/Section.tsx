import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-10 sm:mb-14">
        <p className="eyebrow mb-3">
          <span className="text-[var(--accent)]">{index}</span> / {id}
        </p>
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)] sm:text-base">{intro}</p>}
      </Reveal>
      {children}
    </section>
  );
}
