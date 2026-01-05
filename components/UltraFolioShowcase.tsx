"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Sparkles,
    FileText,
    Wand2,
    Globe,
    ArrowRight,
    Monitor,
    Smartphone,
    Palette,
    Zap
} from "lucide-react";

const transformSteps = [
    {
        icon: <FileText className="w-6 h-6" />,
        label: "Upload CV",
        description: "Drop your PDF resume"
    },
    {
        icon: <Wand2 className="w-6 h-6" />,
        label: "AI Extracts",
        description: "Gemini parses & structures"
    },
    {
        icon: <Palette className="w-6 h-6" />,
        label: "Choose Template",
        description: "Pick your style, live preview"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        label: "Publish",
        description: "Get your unique URL"
    }
];

const highlights = [
    { stat: "500+", label: "Portfolios Created" },
    { stat: "4K+", label: "Requests/Hour" },
    { stat: "48h", label: "Launch Impact" },
    { stat: "30s", label: "CV to Website" }
];

export default function UltraFolioShowcase() {
    const ref = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section ref={ref} id="ultrafolio" className="relative py-24 lg:py-32">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header - Minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span className="text-sm font-medium text-gray-300">Featured Project</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
                        Ultra<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Folio</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        A production-grade SaaS featuring a <span className="text-white font-medium">Binary-to-JSON parsing engine</span> and
                        <span className="text-white font-medium"> Memory-State Preview system</span>. Architected to handle
                        <span className="text-cyan-400 font-bold"> 4,000+ requests/hour</span> with a debounced auto-save algorithm.
                    </p>
                </motion.div>

                {/* Transformation Pipeline - Horizontal Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12"
                >
                    {transformSteps.map((step, i) => (
                        <div key={i} className="flex items-center gap-2 md:gap-4">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-400 mb-2">
                                    {step.icon}
                                </div>
                                <span className="text-xs md:text-sm font-semibold text-white">{step.label}</span>
                                <span className="text-[10px] md:text-xs text-gray-500 hidden md:block">{step.description}</span>
                            </div>
                            {i < transformSteps.length - 1 && (
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Video Showcase - THE STAR */}
                <motion.div
                    style={{ opacity, scale }}
                    className="relative"
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                >
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-violet-500/30 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-60" />

                    {/* Video Container */}
                    <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 bg-black/50">
                        {/* Browser Chrome - Minimal */}
                        <div className="bg-black/80 backdrop-blur-sm px-4 py-3 border-b border-white/5 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 font-mono flex items-center gap-2">
                                    <Globe className="w-3 h-3" />
                                    ultrafilo.vercel.app
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Monitor className="w-4 h-4 text-gray-500" />
                                <Smartphone className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Video */}
                        <div className="relative aspect-video bg-black">
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/Images/ultrafolio_demo.mp4" type="video/mp4" />
                            </video>

                            {/* Subtle Vignette - Very Light */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

                            {/* Video Controls - Appear on Hover */}
                            <AnimatePresence>
                                {showControls && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={togglePlay}
                                                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                            >
                                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                            </button>
                                            <button
                                                onClick={toggleMute}
                                                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                            >
                                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                                            <Zap className="w-3 h-3 text-cyan-400" />
                                            <span className="text-xs text-white font-medium">Live Demo</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {highlights.map((item, i) => (
                        <div
                            key={i}
                            className="text-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors"
                        >
                            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                                {item.stat}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 mt-1">{item.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href="https://ultrafilo.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all hover:scale-105"
                    >
                        <Sparkles className="w-5 h-5" />
                        Try UltraFolio Free
                        <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                    </a>
                    <a
                        href="https://github.com/almonzeir/UTRA-FOLIO"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
                    >
                        View on GitHub
                    </a>
                </motion.div>

                {/* Tech Stack - Subtle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Powered By</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["Next.js 14", "Gemini AI", "Supabase", "Three.js", "Framer Motion"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-white/5 border border-white/5 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
