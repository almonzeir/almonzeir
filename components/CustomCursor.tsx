"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Inject global cursor styles
        const styleId = 'custom-cursor-styles';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                body, a, button {
                    cursor: none;
                }
                .cursor-clicked {
                    transform: scale(0.9);
                }
            `;
            document.head.appendChild(style);
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setIsVisible(true);
        };

        const handleMouseDown = () => document.body.classList.add("cursor-clicked");
        const handleMouseUp = () => document.body.classList.remove("cursor-clicked");

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-400 z-[9999] pointer-events-none mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
            {/* Trailing Glow */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-500/30 blur-lg z-[9998] pointer-events-none"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
}

