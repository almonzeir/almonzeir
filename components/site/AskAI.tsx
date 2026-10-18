"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "./data";

type Msg = { role: "user" | "assistant"; text: string };

const starters = [
  "What has he built with Arabic NLP?",
  "How did the OCR model get down to 15 MB?",
  "What does he want to research?",
  "Is he open to MSc or job offers?",
];

const greeting: Msg = {
  role: "assistant",
  text: "Hi. I answer questions about Almonzer's work, research and availability, using only what is on his CV. Ask me anything.",
};

export default function AskAI() {
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const q = text.trim().slice(0, 600);
    if (!q || loading) return;
    const history = messages.slice(1).slice(-6);
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, history }),
      });
      const data = (await res.json().catch(() => ({}))) as { reply?: string };
      if (!res.ok || !data.reply) throw new Error("bad response");
      setMessages((m) => [...m, { role: "assistant", text: data.reply as string }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: `The assistant is offline right now. You can reach Almonzer directly at ${profile.email}.` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <section id="ask" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3">
            <span className="text-[var(--accent)]">04</span> / ask
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">Ask an AI about me</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--ink-2)] sm:text-base">
            A small assistant grounded in my CV. It runs Llama 3.3 70B on Groq and is told to say so when it does not know
            something, so it should not make things up.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {starters.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => void send(s)}
                disabled={loading}
                className="rounded-full border border-white/[0.1] px-3.5 py-2 text-left text-sm text-[var(--ink-2)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)] disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card flex h-[460px] flex-col overflow-hidden sm:h-[520px]">
            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-md bg-[var(--accent)] px-4 py-2.5 text-[15px] text-[var(--accent-ink)]"
                        : "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-[15px] leading-relaxed text-[var(--ink)]"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-sm text-[var(--ink-3)]">
                  <Loader2 className="h-4 w-4 animate-spin" /> thinking
                </div>
              )}
            </div>
            <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/[0.08] p-3">
              <label htmlFor="ask-input" className="sr-only">
                Your question
              </label>
              <input
                id="ask-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={600}
                placeholder="Ask about projects, research, availability..."
                className="min-w-0 flex-1 rounded-full bg-white/[0.04] px-4 py-2.5 text-[15px] text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)] disabled:opacity-40"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
