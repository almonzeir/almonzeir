"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, Calendar } from "lucide-react";

interface TimelineItem {
    year: string;
    role: string;
    organization: string;
    description: string;
    impact: string;
    icon: any;
}

const timelineData: TimelineItem[] = [
    {
        year: "2023 — Present",
        role: "Head of Academic Affairs",
        organization: "Sudanese Association",
        description: "Led AI literacy initiatives and technical workshops that empowered students to connect education with real-world innovation.",
        impact: "Impact: Enabled 50+ learners to prototype AI solutions for community challenges.",
        icon: GraduationCap,
    },
    {
        year: "2024 — Present",
        role: "AI Product Developer",
        organization: "Independent",
        description: "Designed and deployed AI web apps that automate research, content workflows, and decision support for partners across the region.",
        impact: "Impact: Delivered 5+ intelligent tools with measurable adoption and business outcomes.",
        icon: Briefcase,
    },
    {
        year: "2024",
        role: "Scopus-indexed Publication",
        organization: "AI in Education Research",
        description: "Published peer-reviewed research examining how AI augments blended learning experiences in resource-constrained environments.",
        impact: "Impact: Advanced regional academic discourse on ethical and practical AI adoption.",
        icon: Award,
    },
    {
        year: "2024 — 2025",
        role: "Certifications & Credentials",
        organization: "Google Cloud · OpenAI",
        description: "Earned Google Cloud credentials and completed the OpenAI Prompt Engineering course to stay ahead of evolving AI tooling.",
        impact: "Impact: Validated enterprise-grade infrastructure and advanced prompting expertise.",
        icon: Award,
    },
];

export default function ExperienceTimeline() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    My Journey
                </h2>
                <p className="text-gray-400 text-lg">
                    A timeline of leadership, research, and impact—connecting academic excellence with hands-on AI innovation.
                </p>
            </motion.div>

            <div className="relative">
                {/* Central Line (Desktop) / Left Line (Mobile) */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:-translate-x-1/2" />

                <div className="space-y-12">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] -translate-x-[5px] md:-translate-x-1/2 z-10" />

                            {/* Date (Mobile only) */}
                            <div className="md:hidden pl-12">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-950/30 mb-2">
                                    {item.year}
                                </span>
                            </div>

                            {/* Card */}
                            <div className="flex-1 pl-12 md:pl-0">
                                <div className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 relative group hover:border-blue-500/30
                    ${index % 2 === 0 ? "md:text-left" : "md:text-right"}
                `}>

                                    {/* Date badge tailored direction */}
                                    <div className={`hidden md:flex mb-4 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-950/30">
                                            <Calendar size={12} />
                                            {item.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                        {item.role}
                                    </h3>
                                    <p className="text-sm text-blue-300 font-medium mb-4 uppercase tracking-wider">
                                        {item.organization}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed text-sm mb-4">
                                        {item.description}
                                    </p>
                                    <p className="text-gray-500 text-xs italic border-t border-white/5 pt-3">
                                        {item.impact}
                                    </p>
                                </div>
                            </div>

                            {/* Empty space for alternate side */}
                            <div className="flex-1 hidden md:block" />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
