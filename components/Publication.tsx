"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, BookOpen, Brain, Globe, Users } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

export default function Publication() {
    return (
        <section id="publication" className="relative py-32 px-6 lg:px-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px]" />

            {/* Animated particles/sparkles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: [0, -100],
                            x: Math.random() * 20 - 10
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${50 + Math.random() * 50}%`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="chip mb-4 inline-block">
                        <Award className="w-4 h-4 inline mr-2" />
                        Featured Publication
                    </span>
                    <h2 className="section-heading">
                        <span className="text-gradient-static">Research</span> Excellence
                    </h2>
                </motion.div>

                {/* Publication Card */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-cyan-500/30 to-violet-500/30 rounded-[2rem] blur-xl opacity-50" />

                    <div className="relative card-glass border-amber-500/20 hover:border-amber-400/40 p-8 lg:p-12 overflow-hidden">
                        {/* Top Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium">
                                🏆 Scopus Global Impact 2025
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium animate-pulse">
                                🎉 Award-winning Research
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                            🏆 Predicting GPA with Machine Learning
                            <span className="block text-lg font-normal text-amber-400/80 mt-3">
                                Global Impact Award 2025 — Scopus Indexed
                            </span>
                        </h3>

                        {/* Authors */}
                        <div className="mb-8">
                            <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Research Team</p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { initials: "AH", name: "Almonzer Hamid", color: "from-cyan-500 to-blue-500" },
                                    { initials: "BG", name: "Bakary Gibba", color: "from-violet-500 to-purple-500" },
                                    { initials: "AA", name: "Altagi Abdallah", color: "from-emerald-500 to-teal-500" },
                                ].map((author, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${author.color} flex items-center justify-center text-white text-sm font-bold`}>
                                            {author.initials}
                                        </div>
                                        <span className="text-white text-sm font-medium tracking-wide">{author.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                        {/* Key Insights Grid */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <BookOpen className="w-6 h-6 text-cyan-400 mb-3" />
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Study</p>
                                <p className="text-white text-sm">&quot;Predicting GPA Using Mobile & Study Behavior Data&quot;</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <Brain className="w-6 h-6 text-cyan-400 mb-3" />
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Core Insight</p>
                                <p className="text-white text-sm">ML links daily rhythms to GPA for equitable student support</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <Globe className="w-6 h-6 text-amber-400 mb-3" />
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Recognition</p>
                                <p className="text-white text-sm">Internationally commended at Global Impact Summit 2025</p>
                            </div>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="chip">💻 Python</span>
                            <span className="chip">scikit-learn</span>
                            <span className="chip">Mixed-Methods</span>
                            <span className="chip">🌍 Student Equity</span>
                            <span className="chip">Predictive Analytics</span>
                        </div>

                        {/* Quote */}
                        <blockquote className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
                            <p className="text-lg text-white/90 italic text-center">
                                &quot;A landmark in predictive equity for higher education.&quot;
                            </p>
                            <footer className="text-center mt-4 text-sm text-gray-500">
                                — Global Impact Review Board 2025
                            </footer>
                        </blockquote>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/posts/almonzer-hamid-aa8693249_from-doubt-to-publication-my-first-research-activity-7343861094123282433-RMDQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                🔗 View Publication
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-gray-400 text-sm">✨ See how data became destiny</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
