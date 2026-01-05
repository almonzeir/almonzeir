"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax Text moving slower than foreground
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Pre-calculate all scroll-based opacities for each layer (must be at top level)
  const opacityDeepest = useTransform(scrollY, [0, 300], [0.15, 0]);
  const opacityMid = useTransform(scrollY, [0, 300], [0.2, 0]);
  const opacityGlow = useTransform(scrollY, [0, 300], [0.4, 0]);
  const opacityShimmer = useTransform(scrollY, [0, 300], [0.1, 0]);

  // Mouse Interaction for 3D feel - using CSS transitions for smoothest result
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth) - 0.5,
      y: (clientY / innerHeight) - 0.5
    });
  };

  // Calculate transform values from mouse position
  const moveX = mousePos.x * 40;
  const moveY = mousePos.y * 40;
  const moveXInverse = mousePos.x * -40;
  const moveYInverse = mousePos.y * -40;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[80px] mix-blend-screen" />

      {/* LAYER 1: 3D Deep Background Text System (Behind Image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center">

        {/* Deepest shadow layer - furthest back */}
        <div
          style={{
            transform: `translate(${moveXInverse * 2}px, ${moveYInverse * 2}px)`,
            transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.h1
            style={{ y: yText, opacity: opacityDeepest }}
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter text-cyan-950 select-none whitespace-nowrap blur-[2px]"
          >
            ALMONZER
          </motion.h1>
        </div>

        {/* Mid-depth shadow layer */}
        <div
          style={{
            transform: `translate(${moveXInverse * 1.5}px, ${moveYInverse * 1.5}px)`,
            transition: 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.h1
            style={{ y: yText, opacity: opacityMid }}
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter text-indigo-950/80 select-none whitespace-nowrap blur-[1px]"
          >
            ALMONZER
          </motion.h1>
        </div>

        {/* Glowing outline layer - creates the depth pop */}
        <div
          style={{
            transform: `translate(${moveXInverse * 0.75}px, ${moveYInverse * 0.75}px)`,
            transition: 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.h1
            style={{
              y: yText,
              opacity: opacityGlow,
              WebkitTextStroke: "1px rgba(6, 182, 212, 0.3)"
            }}
            animate={{
              textShadow: [
                "0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(99, 102, 241, 0.2)",
                "0 0 60px rgba(6, 182, 212, 0.5), 0 0 100px rgba(99, 102, 241, 0.4)",
                "0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(99, 102, 241, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter text-transparent select-none whitespace-nowrap"
          >
            ALMONZER
          </motion.h1>
        </div>

        {/* Main text layer - front-most with gradient */}
        <div
          style={{
            transform: `translate(${moveXInverse}px, ${moveYInverse}px)`,
            transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="relative"
        >
          <motion.h1
            style={{
              y: yText,
              opacity: opacityText,
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(6,182,212,0.25) 25%, rgba(99,102,241,0.2) 50%, rgba(255,255,255,0.15) 75%, rgba(6,182,212,0.25) 100%)",
              backgroundSize: "200% 200%",
              WebkitTextStroke: "1px rgba(255,255,255,0.08)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter text-transparent bg-clip-text select-none whitespace-nowrap"
          >
            ALMONZER
          </motion.h1>
        </div>

        {/* Highlight shimmer layer - adds premium 3D feel */}
        <div
          style={{
            transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`,
            transition: 'transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="absolute inset-0 flex items-center justify-center mix-blend-overlay"
        >
          <motion.h1
            style={{ y: yText, opacity: opacityShimmer }}
            animate={{
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter text-white select-none whitespace-nowrap"
          >
            ALMONZER
          </motion.h1>
        </div>
      </div>

      {/* LAYER 2: Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full">

        {/* Left Col: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1 mt-12 lg:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-300 tracking-wider">AI SOLUTIONS ARCHITECT</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Turning Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligent Reality.</span>
          </h2>

          <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
            Architecting the bridge between human potential and artificial intelligence. Specializing in
            <span className="text-gray-200 font-semibold"> Full Stack Development</span>,
            <span className="text-gray-200 font-semibold"> AI Systems</span>, and
            <span className="text-gray-200 font-semibold"> Production Data Pipelines</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-md font-semibold transition-colors">
              Contact Me
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center gap-6 text-gray-400">
            <a href="https://github.com/almonzeir" className="hover:text-cyan-400 transition-colors"><Github size={24} /></a>
            <a href="http://linkedin.com/in/almonzer-hamid-aa8693249" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:monzeer2002@gmail.com" className="hover:text-purple-400 transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        {/* Right Col: The Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transform: `translate(${moveX}px, ${moveY}px)`,
            transition: 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="relative order-1 lg:order-2 flex justify-center items-center"
        >
          {/* Glowing Backdrop for Headshot */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl scale-90 animate-pulse" />

          <div className="relative w-[350px] md:w-[500px] aspect-square">
            {/* The Image */}
            <Image
              src="/Images/profile.png"
              alt="Almonzer Hamid"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] z-10"
              priority
            />

            {/* Floating Elements/Particles around head */}
            <motion.div
              onClick={() => window.location.hash = "#chat"}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-3 glass-panel rounded-2xl border border-cyan-500/30 bg-black/50 backdrop-blur-xl shadow-lg z-20 cursor-pointer hover:border-cyan-400/80 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-cyan-200 group-hover:text-cyan-100">System Online</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 p-4 glass-panel rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-xl shadow-lg z-20"
            >
              <div className="text-xs font-mono text-gray-400 mb-1">Current Focus</div>
              <div className="text-sm font-bold text-white">AI Agents &amp; UX</div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-32 md:bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}
