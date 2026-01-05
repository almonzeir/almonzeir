"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Zap, Code, ExternalLink, Radio } from "lucide-react";

interface Hackathon {
    title: string;
    year: string;
    organizer: string;
    description: string;
    link?: string;
    icon: any;
    color: string;
}

const hackathons: Hackathon[] = [
    {
        title: "IndabaX Sudan 2025",
        year: "2025",
        organizer: "Deep Learning Indaba",
        description: "Organized & built a real-time multiplayer quiz platform handling 300+ concurrent WebSocket connections with zero latency.",
        icon: Radio,
        color: "from-pink-500 to-rose-500",
    },
    {
        title: "Google AI Solutions Hackathon",
        year: "2025",
        organizer: "Google Developers",
        description: "Finalist with SaySymbol—a Gemini-powered accent interpreter that elevates understanding over literal translation.",
        icon: Trophy,
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Arab World Hackathon",
        year: "2024",
        organizer: "Regional Innovators",
        description: "Delivered 'Smart Skilled Services'—AI diagnostics & artisan bidding launched in six intense days.",
        link: "https://www.linkedin.com/posts/almonzer-hamid-aa8693249_ai-hackathon-flutter-activity-7308757792515899393-MzyS",
        icon: Award,
        color: "from-orange-500 to-rose-500",
    },
    {
        title: "Bolt 1 Million Global Hackathon",
        year: "2024",
        organizer: "Bolt.AI",
        description: "Delivered AI prototypes alongside a million-developer community competing for the top innovation challenge.",
        icon: Zap,
        color: "from-yellow-400 to-orange-500",
    },
    {
        title: "Code for Sudan Hackathon",
        year: "2025",
        organizer: "Code for Sudan & Partners",
        description: "Launched Dalili Al-Dawaa—connecting patients and pharmacists with life-saving medication data during crisis.",
        icon: Code,
        color: "from-emerald-400 to-teal-500",
    },
];

export default function HackathonHighlights() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    Hackathon Highlights
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Rapid-fire innovation with global teams—shipping real AI demos under intense deadlines.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hackathons.map((hackathon, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                        <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col hover:border-cyan-500/30 transition-colors duration-500">

                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${hackathon.color} bg-opacity-20`}>
                                    <hackathon.icon className="text-white w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-cyan-400 bg-cyan-950/30">
                                    {hackathon.year}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                    {hackathon.title}
                                </h3>
                                <p className="text-xs text-blue-300 uppercase tracking-wider mb-4 font-mono">
                                    {hackathon.organizer}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {hackathon.description}
                                </p>
                            </div>

                            {/* Link if available */}
                            {hackathon.link && (
                                <a
                                    href={hackathon.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
                                >
                                    Read Recap <ExternalLink size={12} />
                                </a>
                            )}

                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-cyan-500/20 pointer-events-none transition-all duration-500`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
