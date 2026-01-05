"use client";

import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    MapPin,
    Mail,
    Award,
    BookOpen,
    Brain,
    Code2,
    Globe,
    Zap,
    GraduationCap
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
};

export default function About() {
    const skills = [
        { icon: <Brain className="w-5 h-5" />, name: "AI / ML", color: "from-violet-500 to-purple-500" },
        { icon: <Code2 className="w-5 h-5" />, name: "React / Next.js", color: "from-cyan-500 to-blue-500" },
        { icon: <Globe className="w-5 h-5" />, name: "Supabase / Firebase", color: "from-green-500 to-emerald-500" },
        { icon: <Zap className="w-5 h-5" />, name: "Gemini / OpenAI", color: "from-amber-500 to-orange-500" },
    ];

    const achievements = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "Scopus Publication",
            subtitle: "Global Impact 2025",
            color: "text-amber-400"
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Google Cloud",
            subtitle: "Certified 2024",
            color: "text-blue-400"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "50+ Learners",
            subtitle: "AI Workshops",
            color: "text-emerald-400"
        },
    ];

    return (
        <section id="about" className="relative py-32 px-6 lg:px-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="chip mb-4 inline-block">About Me</span>
                    <h2 className="section-heading">
                        Building the <span className="text-gradient-static">Future</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                >
                    {/* Large Card - Mission Statement */}
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 lg:col-span-2 lg:row-span-2 card-glass p-8"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-6 border border-white/10">
                                    <Brain className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                    AI Solutions Architect
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Building intelligent digital products that blend strategy, storytelling, and emerging AI technologies.
                                    My mission is to create technology that serves people, fueled by curiosity and meaningful impact.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">Core Belief</p>
                                <p className="text-xl text-white/90 italic">
                                    "Technology should serve people, curiosity, and meaningful impact."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Card */}
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2 card-glass p-6"
                    >
                        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Tech Stack</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20 flex items-center justify-center text-white`}>
                                        {skill.icon}
                                    </div>
                                    <span className="text-white font-medium text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="card-glass p-6 flex flex-col justify-between"
                    >
                        <div>
                            <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Malaysia</h4>
                            <p className="text-gray-400 text-sm">Alor Setar, Kedah</p>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-400 text-xs font-medium">Available for Internship</span>
                        </div>
                    </motion.div>

                    {/* LinkedIn Card */}
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="card-glass p-6 group cursor-pointer"
                    >
                        <a
                            href="https://linkedin.com/in/almonzer-hamid-aa8693249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-full flex flex-col justify-between"
                        >
                            <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            <div className="mt-4">
                                <div className="text-3xl font-bold text-white mb-1">3.6k+</div>
                                <p className="text-gray-400 text-sm">Followers</p>
                            </div>
                            <span className="text-cyan-400 text-sm font-medium group-hover:underline mt-2">
                                Connect →
                            </span>
                        </a>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-2 card-glass p-6"
                    >
                        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Achievements</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {achievements.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                                    <div className={item.color}>{item.icon}</div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">{item.title}</div>
                                        <div className="text-gray-500 text-xs">{item.subtitle}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Roles Card */}
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="lg:col-span-2 card-glass p-6"
                    >
                        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Current Roles</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-500/20">
                                <div>
                                    <div className="text-white font-semibold">Head of Academic Affairs</div>
                                    <div className="text-gray-400 text-sm">Sudanese Association · 2023-Present</div>
                                </div>
                                <span className="chip text-xs">Leadership</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
                                <div>
                                    <div className="text-white font-semibold">AI Product Developer</div>
                                    <div className="text-gray-400 text-sm">Freelance · 2024-Present</div>
                                </div>
                                <span className="chip text-xs">Building</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
