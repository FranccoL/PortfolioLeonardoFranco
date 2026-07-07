import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INTENTS = [
  { id: "project", label: "Novo Projeto", desc: "Iniciar uma colaboração" },
  { id: "inquiry", label: "Consulta Técnica", desc: "Discutir uma ideia" },
  { id: "collab", label: "Colaboração", desc: "Trabalhar juntos" },
];

export default function ContactSection() {
  const [selectedIntent, setSelectedIntent] = useState(null);

  const getMailtoLink = () => {
    const subjects = {
      project: "Novo Projeto — Contato via Portfólio",
      inquiry: "Consulta Técnica — Contato via Portfólio",
      collab: "Colaboração — Contato via Portfólio",
    };
    const subject = selectedIntent ? subjects[selectedIntent] : "Contato via Portfólio";
    return `mailto:leofranco96@gmail.com?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="blueprint-line-h" style={{ top: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.3em] uppercase">
          04 — Protocolo de Comunicação
        </span>
        <h2
          className="font-display font-black text-[#121212] uppercase mt-4 tracking-[-0.04em] leading-[0.9]"
          style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
        >
          Vamos
          <br />
          Conversar
        </h2>
        <div className="w-20 h-px bg-[#3E5C76] mt-8" />
      </motion.div>

      {/* Intent selection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-16 md:mt-24"
      >
        <p className="font-mono text-[0.65rem] text-[#6B6B6B] tracking-[0.2em] uppercase mb-8">
          Selecione seu objetivo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {INTENTS.map((intent) => (
            <button
              key={intent.id}
              onClick={() => setSelectedIntent(intent.id)}
              className={`text-left p-8 border transition-all duration-300 group ${
                selectedIntent === intent.id
                  ? "border-[#3E5C76] bg-[#3E5C76] text-[#F2F0ED]"
                  : "border-[#121212]/10 hover:border-[#3E5C76]/40"
              }`}
            >
              <span
                className={`font-display text-lg font-semibold tracking-[0.05em] uppercase ${
                  selectedIntent === intent.id ? "text-[#F2F0ED]" : "text-[#121212]"
                }`}
              >
                {intent.label}
              </span>
              <p
                className={`font-body text-sm mt-2 italic ${
                  selectedIntent === intent.id ? "text-[#F2F0ED]/80" : "text-[#6B6B6B]"
                }`}
              >
                {intent.desc}
              </p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 md:mt-24"
      >
        <a
          href={getMailtoLink()}
          className="group flex items-center justify-between w-full border border-[#121212] p-6 md:p-8 hover:bg-[#121212] transition-all duration-500"
        >
          <div>
            <span className="font-display text-xl md:text-2xl font-bold text-[#121212] group-hover:text-[#F2F0ED] tracking-[0.05em] uppercase transition-colors duration-500">
              Enviar Mensagem
            </span>
            <p className="font-mono text-[0.6rem] text-[#6B6B6B] group-hover:text-[#F2F0ED]/60 tracking-[0.1em] mt-2 transition-colors duration-500">
              leofranco96@gmail.com
            </p>
          </div>
          <ArrowUpRight
            size={24}
            className="text-[#121212] group-hover:text-[#F2F0ED] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
          />
        </a>
      </motion.div>

      {/* Social links */}
      <div className="mt-16 flex flex-wrap gap-8">
        {[
          { label: "GitHub", url: "https://github.com/FranccoL" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/leonardofmoreno/" },
          { label: "WhatsApp", url: "https://wa.me/5511977649217" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#6B6B6B] hover:text-[#121212] transition-colors"
          >
            {social.label}
            <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ))}
      </div>
    </section>
  );
}