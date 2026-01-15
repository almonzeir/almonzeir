"use client";

import { motion } from "framer-motion";
import { Home, User, Lightbulb, Code2, Mail, Terminal, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    { name: "Home", icon: Home, href: "#hero" },
    { name: "About", icon: User, href: "#about" },
    { name: "Projects", icon: Code2, href: "#projects" },
    { name: "Journey", icon: FileText, href: "#journey" },
    { name: "Contact", icon: Mail, href: "#contact" },
    { name: "Assistant", icon: Terminal, href: "#chat" },
];

export default function FloatingDock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="glass-pill flex items-center gap-2 px-4 py-3 rounded-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, type: "spring" }}
            >
                {navItems.map((item, index) => (
                    <Link key={item.name} href={item.href} aria-label={item.name}>
                        <motion.div
                            className="relative p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer group"
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            whileHover={{ scale: 1.25, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <item.icon size={20} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />

                            {/* Tooltip */}
                            <motion.span
                                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-md"
                                initial={{ y: 10 }}
                                animate={{ y: hoveredIndex === index ? 0 : 10 }}
                            >
                                {item.name}
                            </motion.span>

                            {/* Active Dot indicator could go here if we track scroll position */}
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}
