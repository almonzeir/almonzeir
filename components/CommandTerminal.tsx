"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, X, Minimize2, Loader2, Sparkles } from "lucide-react";

interface Message {
    role: "user" | "model";
    text: string;
}

export default function CommandTerminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { role: "model", text: "Almonzer AI Online.\nAsk me anything about my projects, skills, or experience." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    // Auto-open on hash change or initial load with #chat
    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === "#chat") {
                setIsOpen(true);
                // Optional: remove hash to avoid stuck state
                // window.history.replaceState(null, "", " ");
            }
        };

        checkHash();
        window.addEventListener("hashchange", checkHash);
        return () => window.removeEventListener("hashchange", checkHash);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", text: userMsg }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMsg,
                    history: messages.slice(0, -1) // Send previous messages as history
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessages(prev => [...prev, { role: "model", text: data.reply }]);
            } else {
                throw new Error(data.error || "Unknown error");
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: "model", text: "Error: AI Service Unavailable. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        className="fixed bottom-24 right-4 md:bottom-24 md:right-8 w-[90vw] md:w-[450px] h-[550px] z-[9999] glass-panel rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono text-sm border border-cyan-500/30 backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="bg-black/60 px-4 py-3 flex items-center justify-between border-b border-white/10 select-none backdrop-blur-md">
                            <div className="flex items-center gap-2 text-cyan-400">
                                <Sparkles size={16} />
                                <span className="font-bold tracking-wider text-xs md:text-sm">ALMONZER AI</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors opacity-70 hover:opacity-100"><Minimize2 size={16} /></button>
                                <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors opacity-70 hover:opacity-100"><X size={16} /></button>
                            </div>
                        </div>

                        {/* Output Area */}
                        <div ref={scrollRef} className="flex-1 bg-black/40 p-4 overflow-y-auto space-y-4 font-sans text-sm md:text-base">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-lg ${msg.role === "user"
                                        ? "bg-cyan-600/20 text-cyan-50 border border-cyan-500/30 rounded-br-none"
                                        : "bg-gray-800/40 text-gray-200 border border-white/5 rounded-bl-none"
                                        }`}>
                                        {msg.role === "model" && (
                                            <div className="text-[10px] uppercase tracking-widest text-cyan-500 mb-1 font-mono flex items-center gap-1">
                                                <Terminal size={10} /> AI Assistant
                                            </div>
                                        )}
                                        <div className="whitespace-pre-wrap leading-relaxed">
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-800/40 text-gray-400 px-4 py-3 rounded-2xl rounded-bl-none border border-white/5 flex items-center gap-2">
                                        <Loader2 size={14} className="animate-spin text-cyan-500" />
                                        <span className="text-xs">Processing...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="bg-black/60 border-t border-white/10 p-3 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoFocus
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white font-sans focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder-gray-500"
                                placeholder="Message Almonzer AI..."
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="p-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            {!isOpen && (
                <div className="fixed bottom-28 right-6 z-[9990] group">
                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-cyan-900/90 text-cyan-100 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-cyan-500/30 pointer-events-none">
                        Chat with Almonzer AI
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-8 border-transparent border-l-cyan-900/90"></div>
                    </div>

                    <motion.button
                        onClick={() => setIsOpen(true)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-black/80 backdrop-blur-xl border border-cyan-500/50 p-4 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-cyan-500/20 animate-pulse rounded-full" />
                        <Sparkles size={24} className="text-cyan-400 relative z-10" />
                    </motion.button>
                </div>
            )}
        </>
    );
}
