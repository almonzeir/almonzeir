"use client";

import { motion } from "framer-motion";

const TECH_LOGOS = [
    "Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Node.js", "Python", "Gemini", "OpenAI"
];

export default function InfiniteMarquee() {
    return (
        <div className="relative flex overflow-hidden py-4 bg-white/5 rounded-xl border border-white/10">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, i) => (
                    <span key={i} className="text-xl font-bold text-gray-500 uppercase tracking-widest font-mono">
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
