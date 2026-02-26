"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, ArrowUpRight, Heart, BookOpen, Zap, Lock, Shield, Radio, Brain } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
};

interface Project {
    title: string;
    titleAr?: string;
    category: string;
    description: string;
    bullets: string[];
    tech: string[];
    link: string;
    linkText: string;
    image: string;
    gradient: string;
    icon: React.ReactNode;
    badge?: string;
}

// AI FOR HUMANITY - Crisis & Language
const humanityProjects: Project[] = [
    {
        title: "Dalili Al-Dawaa",
        titleAr: "دليلي الدواء",
        category: "Crisis Response",
        description: "Crisis-ready triage platform connecting patients and pharmacists in Sudan. Features offline-first dashboards and SMS fallbacks for areas with no internet.",
        bullets: ["Real-time medication availability tracking", "SMS bridge for crisis zones"],
        tech: ["React", "Node.js", "Supabase", "Firebase", "OpenAI"],
        link: "https://sudannnnn.vercel.app/",
        linkText: "View Impact Story",
        image: "/Images/dalili.png",
        gradient: "from-emerald-500 to-teal-600",
        icon: <Heart className="w-5 h-5 text-emerald-400" />,
        badge: "Code for Sudan 2025"
    },
    {
        title: "Say Simple",
        category: "Language AI",
        description: "Google AI Hackathon Finalist. Gemini-powered interpreter bridging 22 Arabic accents—elevating understanding over literal translation.",
        bullets: ["Gemini-powered intent interpreter", "Voice-ready dialect harmonization"],
        tech: ["Google Cloud AI", "Gemini API", "TailwindCSS"],
        link: "https://gemini-simplify-4lcs.vercel.app/",
        linkText: "Launch Demo",
        image: "/Images/say-simple.png",
        gradient: "from-blue-600 to-violet-600",
        icon: <ExternalLink className="w-5 h-5 text-blue-400" />,
        badge: "Google AI Finalist 2025"
    },
    {
        title: "Education Compass",
        titleAr: "دليلك إلى ماليزيا",
        category: "AI Advisor",
        description: "AI-powered adviser for Arabic-speaking students selecting Malaysian universities based on budget, major, and city fit.",
        bullets: ["Bilingual ChatGPT-4o experience", "Smart tuition & cost-of-living matching"],
        tech: ["Next.js", "OpenAI API", "Firebase", "TailwindCSS"],
        link: "https://studyeasy-3dek.vercel.app/",
        linkText: "Try StudyEasy",
        image: "/Images/education-compass.png",
        gradient: "from-cyan-500 to-blue-600",
        icon: <BookOpen className="w-5 h-5 text-cyan-400" />
    },
];

// ENTERPRISE & ENGINEERING - Deep Technical Projects
const engineeringProjects: Project[] = [
    {
        title: "MaiKedah Tourism Platform",
        category: "Enterprise SaaS",
        description: "Smart tourism ecosystem featuring a 3-Level Role-Based Access Control (RBAC) system for granular admin management. Seamlessly syncs data between tourist mobile view and admin dashboard in real-time.",
        bullets: ["3-Level RBAC security architecture", "Real-time dashboard sync", "AI itinerary generation"],
        tech: ["Next.js", "TypeScript", "Supabase", "Gemini API"],
        link: "https://maikedah-admin.vercel.app",
        linkText: "View Dashboard",
        image: "/Images/maikedah.png",
        gradient: "from-sky-500 to-cyan-500",
        icon: <Shield className="w-5 h-5 text-sky-400" />,
        badge: "Enterprise RBAC"
    },
    {
        title: "IndabaX Quiz Platform",
        category: "Real-Time Multiplayer",
        description: "Developed a latency-free multiplayer game platform supporting 300+ concurrent users. Engineered custom WebSocket logic to synchronize game state across hundreds of devices simultaneously during the IndabaX Sudan event.",
        bullets: ["300+ concurrent players supported", "Custom WebSocket state sync", "Zero-latency game engine"],
        tech: ["React", "WebSocket", "Real-time DB", "Node.js"],
        link: "#",
        linkText: "Event Recap",
        image: "/Images/maikedah.png",
        gradient: "from-pink-500 to-rose-500",
        icon: <Radio className="w-5 h-5 text-pink-400" />,
        badge: "IndabaX Sudan 2025"
    },
];

// EDUCATION & RESEARCH
const educationProjects: Project[] = [
    {
        title: "ScholarAI Navigator",
        category: "Scholarship Intel",
        description: "AI that reads CVs to find the right scholarships. Ranks opportunities by eligibility fit and deadline urgency using profile analysis.",
        bullets: ["CV analysis & automated profiling", "Conversational guidance engine"],
        tech: ["Gemini API", "Next.js", "Supabase"],
        link: "https://scholar-ai-liart.vercel.app/",
        linkText: "Launch ScholarAI",
        image: "/Images/scholar-ai.png",
        gradient: "from-violet-600 to-purple-600",
        icon: <BookOpen className="w-5 h-5 text-violet-400" />
    },
    {
        title: "AI Content Creator",
        category: "Prompt Engineering",
        description: "Prompt framework for educators to generate lessons, assessments, and social content. Streamlines content workflows for academic teams.",
        bullets: ["Custom prompt templates", "Multi-format content generation"],
        tech: ["OpenAI API", "LangChain", "Python"],
        link: "#",
        linkText: "View Framework",
        image: "/Images/ai-content-creator.png",
        gradient: "from-amber-500 to-orange-500",
        icon: <Brain className="w-5 h-5 text-amber-400" />
    },
    {
        title: "Smart Skilled Services",
        titleAr: "منصة الحرفيين",
        category: "6-Day Hackathon Sprint",
        description: "AI marketplace for household services. Triages DIY fixes vs. professional help and connects users with local artisans through transparent bidding.",
        bullets: ["Conversational DIY triage", "Transparent bidding engine"],
        tech: ["Flutter", "Flask", "Firebase", "LangChain"],
        link: "https://www.linkedin.com/posts/almonzer-hamid-aa8693249_ai-hackathon-flutter-activity-7308757792515899393-MzyS",
        linkText: "Read Story",
        image: "/Images/smart-skilled.png",
        gradient: "from-orange-500 to-red-500",
        icon: <Zap className="w-5 h-5 text-orange-400" />,
        badge: "Arab World Hackathon"
    },
];

const colorMap: Record<string, string> = {
    "emerald": "group-hover:shadow-emerald-500/20 after:bg-emerald-500/20",
    "blue": "group-hover:shadow-blue-500/20 after:bg-blue-500/20",
    "cyan": "group-hover:shadow-cyan-500/20 after:bg-cyan-500/20",
    "violet": "group-hover:shadow-violet-500/20 after:bg-violet-500/20",
    "sky": "group-hover:shadow-sky-500/20 after:bg-sky-500/20",
    "orange": "group-hover:shadow-orange-500/20 after:bg-orange-500/20",
    "pink": "group-hover:shadow-pink-500/20 after:bg-pink-500/20",
    "amber": "group-hover:shadow-amber-500/20 after:bg-amber-500/20",
};

function Card3D({ project, index }: { project: Project; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const colorKey = project.gradient.split('-')[1];
    const shadowClass = colorMap[colorKey] || "group-hover:shadow-cyan-500/20";

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`group relative h-[520px] w-full rounded-3xl bg-black/40 border border-white/5 overflow-hidden cursor-pointer backdrop-blur-xl hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${shadowClass}`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
                }}
            />

            {/* Image Section */}
            <div className="relative h-[240px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-90" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PGZpbHRlciBpZD0ibm9pc2UiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Category + Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white tracking-wide shadow-lg border border-white/10">
                        {project.icon}
                        {project.category}
                    </span>
                    {project.badge && (
                        <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300">
                            {project.badge}
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-8 flex flex-col h-[calc(100%-240px)] justify-between z-20 bg-gradient-to-b from-transparent to-black/40">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                            {project.title}
                        </h3>
                        {project.titleAr && <span className="font-arabic text-lg text-cyan-500/80">{project.titleAr}</span>}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-cyan-100 bg-cyan-950/30 border border-cyan-500/20 rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono group-hover:text-cyan-400 transition-colors">
                        // DEPLOYED
                    </span>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all hover:pr-5 hover:border-cyan-500/30"
                    >
                        {project.linkText}
                        <ArrowUpRight className="w-4 h-4 text-cyan-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

function SectionHeader({ badge, title, highlight, description }: { badge: string, title: string, highlight: string, description: string }) {
    return (
        <div className="text-center mb-16 space-y-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase"
            >
                {badge}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{highlight}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="relative z-10">
            {/* Humanity Section */}
            <section id="projects" className="py-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Impact First"
                        title="AI for"
                        highlight="Humanity"
                        description="Engineering solutions that serve people first—bridging healthcare gaps, breaking language barriers, and democratizing access."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {humanityProjects.map((p, i) => (
                            <Card3D key={i} project={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Engineering Section */}
            <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Deep Engineering"
                        title="Enterprise &"
                        highlight="Systems"
                        description="Production-grade architectures: RBAC security, real-time multiplayer, and statistical machine learning pipelines."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {engineeringProjects.map((p, i) => (
                            <Card3D key={i} project={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Knowledge Engines"
                        title="Education &"
                        highlight="Research"
                        description="Powering the next generation of learners with intelligent tools for discovery, planning, and academic success."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {educationProjects.map((p, i) => (
                            <Card3D key={i} project={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10"
                >
                    <Lock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 font-medium">More projects in the lab...</span>
                </motion.div>
            </section>
        </div>
    );
}
