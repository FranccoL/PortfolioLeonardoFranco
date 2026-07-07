import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";



export default function HeroSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouse = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (textRef.current) {
        textRef.current.style.transform = `translate(${x * 8}px, ${y * 5}px)`;
      }
    };

    container.addEventListener("mousemove", handleMouse);
    return () => container.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="blueprint-line-h"
            style={{ top: `${(i + 1) * 12.5}%` }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="blueprint-line-v"
            style={{ left: `${(i + 1) * 8.33}%` }}
          />
        ))}
      </div>

      <div className="relative w-full px-6 md:px-12">
        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-0 right-6 md:right-12 font-mono text-[0.65rem] text-[#6B6B6B] tracking-[0.1em] text-right"
        >
          <p>SOFTWARE ENGINEER</p>
          <p className="mt-1">SÃO PAULO — BR</p>
          <p className="mt-1">2025 — PRESENTE</p>
        </motion.div>

        {/* Main name */}
        <div ref={textRef} className="transition-transform duration-700 ease-out">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[#121212] uppercase leading-[0.85] tracking-[-0.05em]"
            style={{ fontSize: "clamp(3rem, 8vw, 10rem)" }}
          >
            LEONARDO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[#121212] uppercase leading-[0.85] tracking-[-0.05em]"
            style={{ fontSize: "clamp(3rem, 8vw, 10rem)" }}
          >
            FRANCO
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-16 max-w-lg"
        >
          <p className="font-body text-lg md:text-xl text-[#121212] leading-relaxed italic">
            Criando soluções digitais com precisão  — 
            onde lógica encontra design.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-[#3E5C76]"
          />
          <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.2em] uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}