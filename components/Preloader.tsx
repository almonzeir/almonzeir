"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [lines, setLines] = useState<string[]>([]);

    const bootSequence = [
        "> Initializing Almonzer_OS...",
        "> Loading Neural Weights...",
        "> Optimizing Render Engine...",
        "> Establishing Uplink...",
        "> Success."
    ];

    useEffect(() => {
        let delay = 0;
        bootSequence.forEach((line, index) => {
            setTimeout(() => {
                setLines((prev) => [...prev, line]);
                if (index === bootSequence.length - 1) {
                    setTimeout(() => setLoading(false), 800);
                }
            }, delay);
            delay += 500 + Math.random() * 500;
        });

        // Safety timeout
        const safetyTimer = setTimeout(() => setLoading(false), 5500);
        return () => clearTimeout(safetyTimer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black text-cyan-500 font-mono flex items-center justify-center p-8"
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="max-w-md w-full">
                        {lines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="mb-2"
                            >
                                <span className="opacity-50 mr-2">{(i + 1).toString().padStart(2, "0")}</span>
                                {line}
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-3 h-5 bg-cyan-500 mt-2 inline-block"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
