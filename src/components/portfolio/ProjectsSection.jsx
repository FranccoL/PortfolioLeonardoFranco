import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/portfolio/ProjectCard";

const PROJECTS = [
  {
    title: "Toffa's Coffee",
    description: "Responsável pela gestão end-to-end da presença digital da marca. O projeto evoluiu de um MVP para uma plataforma sofisticada, incorporando melhorias de design de alta fidelidade e um ecossistema de vendas integrado ao backend.",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT"],
    type: "Institucional",
    year: "2026",
    // Coloque os prints desse projeto dentro desse array
    images: [
      "homeToffa.svg",
      "toffasS.svg",
      "toffasL.svg",
      "toffaslojaa.png"
    ],
    siteUrl: "https://toffascoffee.com.br/",
    repoUrl: "https://github.com/FranccoL/ToffasCoffee",
  },
  {
    title: "NK Lab",
    description: "Desenvolvimento end-to-end de uma plataforma para laboratório veterinário. Arquitetura frontend avançada com rotas protegidas, integrando uma área restrita para tutores acessarem exames e um painel administrativo completo para gerenciamento de dados.",
    stack: ["React 19", "Auth", "API", "Full Stack", "Vite", "React Router", "EmailJS", "Framer Motion"],
    type: "Aplicação Web",
    year: "2025",
    images: [
      "nkhome.png",
      "nks.png",
      "nkex.png",
      "nks.png", 
      "nkF.png"
    ],
    siteUrl: "https://nk-lab.vercel.app/",
    repoUrl: "https://github.com/FranccoL/Nk-Lab",
  },
  {
    title: "Brazilian Hands",
    description: "Desenvolvido em ambiente colaborativo, o projeto consiste em uma plataforma de e-commerce internacional para uma cooperativa de artesãos brasileiros. Atuei no desenvolvimento de features críticas, incluindo a implementação do sistema de internacionalização (multi-idioma) com detecção automática de preferências do usuário.",
    stack: ["React", "Vite", "React i18next (Multi-idioma)", "React Router", "Swiper"],
    type: "E-Commerce",
    year: "2024",
    images: [
      "bzh.png",
      "bzs.png",
      "bzss.png",
    ],
    siteUrl: "https://brazilian-hands-cooperative.vercel.app/",
    repoUrl: "https://github.com/FranccoL/Brazilian-Hands-Cooperative",
  },
  {
    title: "Architecture",
    description: "Portfólio de arquitetura com foco em apresentação de projetos e responsividade. Design que respeita a precisão e elegância da disciplina.",
    stack: ["React", "Vite", "React Router", "CSS Responsivo", "ESLint"],
    type: "Portfólio",
    year: "2024",
    images: [
      "dnch.png",
      "dncc.png",
      "dncf.png",
    ],
    siteUrl: "https://projeto-react-teal.vercel.app/",
    repoUrl: "https://github.com/FranccoL/PrimeiroProjetoReact",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-48 px-6 md:px-12">
      {/* Header da Seção */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32"
      >
        <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.3em] uppercase">
          02 — Arquivo de Projetos
        </span>
        <h2
          className="font-display font-black text-[#121212] uppercase mt-4 tracking-[-0.04em] leading-[0.9]"
          style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
        >
          Trabalhos
          <br />
          Selecionados
        </h2>
        <div className="w-20 h-px bg-[#3E5C76] mt-8" />
      </motion.div>

      {/* Renderização de todos os cards */}
      <div className="flex flex-col gap-32 md:gap-48">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}