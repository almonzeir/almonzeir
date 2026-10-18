"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "./data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#ask", label: "Ask AI" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-[#0b0b0c]/85 backdrop-blur-md border-b border-white/[0.08]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-[15px] font-semibold text-[var(--ink)]">
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-1.5 !text-sm">
            CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-[var(--ink)] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.08] px-5 pb-5 md:hidden">
          <div className="flex flex-col pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-[var(--ink-2)] hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-3 justify-center">
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
