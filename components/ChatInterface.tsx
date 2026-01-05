"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, Loader2, Sparkles, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "model";
  text: string;
};

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hello! I'm Almonzer's AI Twin. Ask me about his projects, skills, experience, or how you can collaborate. I'm powered by Groq for lightning-fast responses! ⚡" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "I'm experiencing some interference. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What projects have you built?",
    "Tell me about your AI experience",
    "Are you available for internship?",
    "What's your tech stack?",
  ];

  return (
    <section id="chat" className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="chip mb-4 inline-block">
            <Sparkles className="w-4 h-4 inline mr-2" />
            AI-Powered
          </span>
          <h2 className="section-heading mb-4">
            Talk to <span className="text-gradient-static">AI Almonzer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ask anything about my work, experience, or availability. Powered by Groq for ultra-fast responses.
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-50" />

          <div className="relative card-glass border-cyan-500/20 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                <Terminal className="w-4 h-4" />
                <span>almonzer-ai-twin --interactive</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Online</span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] lg:h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "user"
                        ? "bg-violet-500/20 border border-violet-500/30"
                        : "bg-cyan-500/20 border border-cyan-500/30"
                      }`}>
                      {msg.role === "user" ? (
                        <User className="w-4 h-4 text-violet-400" />
                      ) : (
                        <Bot className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`max-w-[75%] p-4 rounded-2xl ${msg.role === "user"
                          ? "bg-violet-500/10 border border-violet-500/20 rounded-tr-sm"
                          : "bg-white/5 border border-white/10 rounded-tl-sm"
                        }`}
                    >
                      {msg.role === "model" && (
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">AI Almonzer</span>
                        </div>
                      )}
                      <p className="text-gray-200 whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2 text-gray-400">
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Suggested questions</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="px-3 py-2 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/10 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AI Almonzer anything..."
                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
