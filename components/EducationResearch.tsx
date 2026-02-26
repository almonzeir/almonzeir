"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Sparkles } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    category: string;
    description: string;
    tags: string[];
    link?: string;
    image: string;
    isLocked?: boolean;
    color: string;
}

const projects: Project[] = [
    {
        title: "ScholarAI Opportunity Navigator",
        category: "Scholarship Intel",
        description: "AI-driven platform that surfaces the right scholarships by reading your CV, evaluating eligibility, and highlighting the fastest wins first.",
        tags: ["Gemini API", "Next.js", "TailwindCSS"],
        link: "https://scholar-ai-liart.vercel.app/",
        image: "/Images/scholar-ai.png", // Ensure this matches user's file structure
        color: "from-indigo-500 to-purple-500",
    },
    {
        title: "MaiKedah Tourism Planner",
        category: "Tourism AI",
        description: "Generates personalised, day-by-day itineraries for Malaysian cities, blending culture, cuisine, and logistics.",
        tags: ["Gemini API", "Firebase", "TailwindCSS"],
        link: "https://m-yscholar-main.vercel.app/",
        image: "/Images/maikedah.png",
        color: "from-sky-500 to-blue-600",
    },
    {
        title: "AI Content Creator",
        category: "Productivity",
        description: "Structured prompt framework for educators and media teams to spin up lessons, social threads, and explainer content instantly.",
        tags: ["OpenAI API", "LangChain"],
        link: "https://www.instagram.com/almonzer_hamid/",
        image: "/Images/ai-content-creator.png",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "UltraFolio",
        category: "Coming Soon",
        description: "The next generation of portfolio builders. A locked preview of what's to come.",
        tags: ["Stealth Mode"],
        image: "/Images/profile.png", // Placeholder
        isLocked: true,
        color: "from-gray-800 to-gray-900",
    },
];

export default function EducationResearch() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    AI for Education & Research
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Opening doors to scholarships, data-driven learning, and globally recognised research.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-[#050510]"
                    >
                        {/* Background Image / Gradient */}
                        <div className="absolute inset-0 z-0">
                            {project.isLocked ? (
                                <div className="w-full h-full bg-black flex items-center justify-center opacity-50">
                                    <Lock size={64} className="text-gray-700" />
                                </div>
                            ) : (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                            <div className="mb-auto">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-opacity-20 backdrop-blur-md border border-white/10 text-white mb-4`}>
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider text-gray-400 border border-white/10 rounded-md bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {!project.isLocked && project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all duration-300 group-hover:rotate-45"
                                    >
                                        <ArrowUpRight size={20} />
                                    </a>
                                )}
                                {project.isLocked && (
                                    <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest">
                                        <Lock size={14} /> Locked Preview
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
