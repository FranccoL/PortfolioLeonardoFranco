import React from "react";
import { motion } from "framer-motion";


const SKILLS = [
  { name: "React (v18/v19)", level: 90 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "Node.js & Express", level: 82 }, 
  { name: "MySQL / SQL", level: 80 },       
  { name: "REST APIs & Integrações", level: 85 }, 
  { name: "CSS / Tailwind", level: 88 },
  { name: "Git & GitHub", level: 85 },
  { name: "Figma", level: 80 },
];



const INTERESTS = ["Front-End", "Back-End", "Full Stack Architecture", "E-Commerce Solutions"];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-6 md:px-12">
      {/* Blueprint accents */}
      <div className="blueprint-line-h" style={{ top: 0 }} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-0">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 md:pr-16"
        >
          <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.3em] uppercase">
            03 — Sobre Mim
          </span>
          <h2
            className="font-display font-black text-[#121212] uppercase mt-4 tracking-[-0.04em] leading-[0.9]"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Transformando 
            <br />
            Ideias em Experiências
          </h2>
          <div className="w-20 h-px bg-[#3E5C76] mt-8" />

          <div className="mt-12 space-y-6">
            <p className="font-body text-lg text-[#121212] leading-relaxed italic">
              Sempre em busca de novos 
              desafios e oportunidades de aprendizado. Tenho uma paixão por criar 
              soluções eficientes, escaláveis e funcionais.
            </p>
            <p className="font-body text-lg text-[#6B6B6B] leading-relaxed italic">
              Focando tanto na arquitetura sólida do backend quanto na sofisticação visual do frontend, 
              construo aplicações completas que combinam precisão técnica com excelente experiência do usuário.
            </p>
          </div>

          {/* Personal info */}
          <div className="mt-12 space-y-3">
            {[
              { label: "Nome", value: "Leonardo Franco" },
              { label: "Localização", value: "São Paulo — SP, Brasil" },
              { label: "Telefone", value: "+55 (11) 97764-9217" },
              { label: "E-mail", value: "leofranco96@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline gap-4">
                <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.15em] uppercase w-24 shrink-0">
                  {item.label}
                </span>
                <span className="font-mono text-[0.7rem] text-[#121212] tracking-[0.05em]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column — skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 md:pl-16 md:border-l border-[#3E5C76]/10"
        >
          <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.3em] uppercase">
            Competências Técnicas
          </span>

          <div className="mt-10 space-y-8">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display text-sm font-semibold text-[#121212] tracking-[0.05em] uppercase">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[0.6rem] text-[#6B6B6B]">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-px bg-[#121212]/10 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 left-0 h-full bg-[#3E5C76]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interests */}
          <div className="mt-16">
            <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.3em] uppercase">
              Áreas de Atuação & Interesse
            </span>
            <div className="flex flex-wrap gap-3 mt-6">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="font-display text-sm font-medium text-[#3E5C76] border border-[#3E5C76]/30 px-6 py-3 tracking-[0.1em] uppercase hover:bg-[#3E5C76] hover:text-[#F2F0ED] transition-all duration-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}