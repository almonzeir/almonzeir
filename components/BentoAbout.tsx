"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Award,
    Linkedin,
    Github,
    GraduationCap,
    Sparkles,
    Brain,
    Rocket,
    FileCode2,
    Users,
    Globe2,
    Zap
} from "lucide-react";

const techStack = [
    { name: "Python", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", color: "from-white to-gray-400" },
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "Gemini AI", color: "from-violet-400 to-violet-600" },
    { name: "Supabase", color: "from-emerald-400 to-emerald-600" },
    { name: "Three.js", color: "from-purple-400 to-pink-500" },
];

const achievements = [
    { icon: <Award className="w-5 h-5" />, label: "Scopus Published Researcher", year: "2024" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Google Cloud Associate Cloud Engineer", year: "2024" },
    { icon: <Rocket className="w-5 h-5" />, label: "500+ Portfolios Built", year: "2025" },
];

export default function BentoAbout() {
    return (
        <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-4">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    About Me
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    AI Solutions Architect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Full Stack Engineer</span>
                </h2>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[140px]">

                {/* Bio Card - Large */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 lg:col-span-3 row-span-2 relative rounded-3xl overflow-hidden group"
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-[#0f1014] to-cyan-600/20" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />

                    {/* Border */}
                    <div className="absolute inset-0 rounded-3xl border border-white/10" />

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-4">
                                <Brain className="w-3 h-3" />
                                AI/ML Passionate
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                Turning ideas into<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI-powered reality</span>
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                I build intelligent digital products that blend strategy, storytelling, and emerging AI technologies.
                                From Sudan to Malaysia, I'm on a mission to make technology serve humanity.
                            </p>
                        </div>

                        {/* Achievements Pills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {achievements.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs"
                                >
                                    <span className="text-yellow-400">{item.icon}</span>
                                    <span className="text-gray-300">{item.label}</span>
                                    <span className="text-gray-600">{item.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 lg:col-span-3 row-span-1 relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform"
                >
                    {/* Dark Map Background */}
                    <div className="absolute inset-0 bg-[#0a0a0f]" />

                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Glowing Dots - Sudan & Malaysia */}
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-violet-400 font-mono whitespace-nowrap">SUDAN</span>
                    </div>
                    <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_25px_rgba(6,182,212,0.8)]" />
                        <div className="absolute inset-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-50" />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400 font-mono whitespace-nowrap">MALAYSIA</span>
                    </div>

                    {/* Connection Line */}
                    <svg className="absolute inset-0 w-full h-full opacity-30">
                        <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="8 4" />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Border */}
                    <div className="absolute inset-0 rounded-3xl border border-white/10" />

                    {/* Content */}
                    <div className="relative h-full p-5 flex items-end">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                                <Globe2 className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm">Global Impact, Local Roots</h4>
                                <p className="text-gray-500 text-xs">Building bridges across cultures</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2 lg:col-span-3 row-span-1 relative rounded-3xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f1014] to-[#0a0a0f]" />
                    <div className="absolute inset-0 rounded-3xl border border-white/10" />

                    <div className="relative h-full p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <FileCode2 className="w-4 h-4 text-violet-400" />
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Tech Stack</span>
                        </div>

                        {/* Scrolling Tech Pills */}
                        <div className="flex gap-2 flex-wrap">
                            {techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-white/30 transition-colors cursor-default"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* LinkedIn Card */}
                <motion.a
                    href="https://linkedin.com/in/almonzer-hamid-aa8693249"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-2 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-[#0077b5]/10 group-hover:bg-[#0077b5]/20 transition-colors" />
                    <div className="absolute inset-0 rounded-3xl border border-[#0077b5]/30 group-hover:border-[#0077b5]/50 transition-colors" />

                    <div className="relative h-full p-5 flex items-center justify-between">
                        <div>
                            <p className="text-[#0077b5] text-xs font-medium mb-1">LinkedIn</p>
                            <h4 className="text-3xl md:text-4xl font-black text-white group-hover:text-[#0077b5] transition-colors">3.6k+</h4>
                            <p className="text-gray-500 text-xs">Followers</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#0077b5]/20 group-hover:bg-[#0077b5]/30 transition-colors">
                            <Linkedin className="w-8 h-8 text-[#0077b5]" />
                        </div>
                    </div>
                </motion.a>

                {/* GitHub Card */}
                <motion.a
                    href="https://github.com/almonzeir"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-2 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                    <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors" />

                    <div className="relative h-full p-5 flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-medium mb-1">GitHub</p>
                            <h4 className="text-3xl md:text-4xl font-black text-white group-hover:text-gray-300 transition-colors">Open</h4>
                            <p className="text-gray-500 text-xs">Source Projects</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </motion.a>

                {/* Available for Work Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10" />
                    <div className="absolute inset-0 rounded-3xl border border-green-500/30" />

                    <div className="relative h-full p-5 flex items-center gap-4">
                        <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm">Available for Internship</h4>
                            <p className="text-green-400 text-xs font-medium">March 2026 · Kedah, Malaysia</p>
                        </div>
                        <Zap className="w-5 h-5 text-green-400 ml-auto" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
