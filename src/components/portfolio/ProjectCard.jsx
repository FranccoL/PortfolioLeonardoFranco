import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  if (!project) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const isEven = index % 2 === 0;
  const projectImages = project.images || [];
  const totalImages = projectImages.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full"
    >
      {/* 📝 INFORMAÇÕES DO PROJETO */}
      <div
        className={`lg:col-span-4 flex flex-col justify-between h-full ${
          isEven ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
        }`}
      >
        <div>
          <span className="font-mono text-[0.6rem] text-[#6B6B6B] tracking-[0.2em] uppercase">
            Projeto {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="font-display text-4xl font-bold text-[#121212] mt-3 tracking-[-0.02em] uppercase leading-none">
            {project.title}
          </h3>

          <p className="font-body text-sm text-[#555555] mt-6 leading-relaxed">
            {project.description}
          </p>

          {/* Stack de tecnologias */}
          <div className="mt-8">
            <span className="font-mono text-[0.55rem] text-[#999] tracking-[0.1em] uppercase block mb-3">
              Tecnologias
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack?.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.6rem] tracking-[0.05em] text-[#121212] bg-[#EAEAEA] px-3 py-1.5 rounded-md uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links Externos */}
        <div className="flex flex-col gap-3 mt-12 pt-6 border-t border-black/5">
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between font-mono text-[0.7rem] tracking-[0.1em] uppercase text-[#121212] hover:text-[#3E5C76] transition-colors"
            >
              Ver site ao vivo
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between font-mono text-[0.7rem] tracking-[0.1em] uppercase text-[#6B6B6B] hover:text-[#121212] transition-colors"
            >
              Repositório
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* 🖼️ ÁREA DO CARROSSEL DE PREVIEWS */}
      <div className={`lg:col-span-8 flex flex-col w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        
        {/* Container Principal da Imagem - Reduzido de aspect-[16/10] para aspect-[16/9] (Mais baixo e largo) */}
        <div className="relative group/carousel overflow-hidden rounded-2xl bg-[#121212] aspect-[16/9] shadow-2xl border border-black/5">
          
          {/* Imagem Ativa */}
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={projectImages[activeIndex]}
                alt={`${project.title} screenshot ${activeIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                /* object-cover + object-top: Garante que as laterais fiquem encostadas nas bordas e alinha a imagem pelo início do site */
                className="w-full h-full object-cover object-top select-none"
              />
            </AnimatePresence>
          </div>

          {/* Botão Voltar */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-black/70 transition-all duration-300 z-10"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Botão Avançar */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-black/70 transition-all duration-300 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 📊 INDICADOR DE PROGRESSO */}
        <div className="flex items-center justify-between mt-6 px-2">
          <span className="font-mono text-[0.7rem] text-[#6B6B6B]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          
          <div className="flex-1 mx-4 h-[2px] bg-[#EAEAEA] relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-[#121212]"
              initial={{ width: "0%" }}
              animate={{ width: `${totalImages > 0 ? ((activeIndex + 1) / totalImages) * 100 : 0}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <span className="font-mono text-[0.7rem] text-[#6B6B6B]">
            {String(totalImages).padStart(2, "0")}
          </span>
        </div>

        {/* 🎞️ CARROSSEL DE MINIATURAS (THUMBNAILS) */}
        <div className="mt-6 w-full">
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 select-none">
            {projectImages.map((imgUrl, imgIdx) => (
              <button
                key={imgIdx}
                onClick={() => setActiveIndex(imgIdx)}
                /* Reduzido o aspect-ratio das miniaturas também para acompanhar o design principal */
                className={`relative flex-shrink-0 w-28 sm:w-36 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeIndex === imgIdx 
                    ? "border-[#121212] scale-[0.97] shadow-md" 
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img 
                  src={imgUrl} 
                  alt="Thumbnail" 
                  className="w-full h-full object-cover object-top" 
                  loading="lazy" 
                />
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-2 text-[#999999]">
            <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase">
              Clique nas miniaturas para navegar
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}