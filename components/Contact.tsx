"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Send, MapPin, ExternalLink } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

const socialLinks = [
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://linkedin.com/in/almonzer-hamid-aa8693249",
        color: "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400",
        followers: "3.6k+"
    },
    {
        name: "GitHub",
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/almonzeir",
        color: "hover:bg-gray-500/20 hover:border-gray-500/50 hover:text-gray-300",
    },
    {
        name: "Instagram",
        icon: <Instagram className="w-5 h-5" />,
        href: "https://www.instagram.com/almonzer_hamid/",
        color: "hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400",
    },
    {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:monzeer2002@gmail.com",
        color: "hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-32 px-6 lg:px-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />

            <div className="max-w-5xl mx-auto relative">
                {/* Header */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="chip mb-4 inline-block">Let&apos;s Connect</span>
                    <h2 className="section-heading mb-4">
                        Ready to <span className="text-gradient-static">Collaborate?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I&apos;m always open to new opportunities, collaborations, and interesting conversations.
                        Feel free to reach out!
                    </p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left - Info */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Location Card */}
                        <div className="card-glass p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-white/10">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                                    <p className="text-gray-400">Alor Setar, Kedah, Malaysia</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-green-400 text-sm font-medium">Available for Internship · March 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="card-glass p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-white/10">
                                    <Mail className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                                    <a
                                        href="mailto:monzeer2002@gmail.com"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        monzeer2002@gmail.com
                                    </a>
                                    <p className="text-gray-500 text-sm mt-1">Usually responds within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="card-glass p-6">
                            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <a
                                    href="https://drive.google.com/file/d/1Vv_FIldUuZzcO8Jae3nYH1I2PekRRhhJ/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group"
                                >
                                    <span className="text-gray-300 group-hover:text-white transition-colors">Download CV (PDF)</span>
                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                </a>
                                <a
                                    href="#projects"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group"
                                >
                                    <span className="text-gray-300 group-hover:text-white transition-colors">View Projects</span>
                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Social + CTA */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Social Links Grid */}
                        <div className="card-glass p-6">
                            <h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all ${social.color}`}
                                    >
                                        {social.icon}
                                        <div>
                                            <span className="font-medium text-white text-sm">{social.name}</span>
                                            {social.followers && (
                                                <span className="block text-xs text-gray-500">{social.followers}</span>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-[1.5rem] blur-lg opacity-50" />
                            <div className="relative card-glass p-8 text-center border-cyan-500/20">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-white/10 mb-6">
                                    <Send className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Let&apos;s Build Something Great</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                                </p>
                                <a
                                    href="mailto:monzeer2002@gmail.com"
                                    className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                                >
                                    <Mail className="w-4 h-4" />
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 pt-8 border-t border-white/5 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Almonzer Hamid. Built with Next.js, Framer Motion & ♥
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        Powered by Groq AI · Hosted on Vercel
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
