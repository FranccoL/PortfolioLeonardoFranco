import React, { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const spTime = time.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <footer className="relative border-t border-[#121212]/10 px-6 md:px-12 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Local time */}
        <div>
          <span className="font-mono text-[0.55rem] text-[#6B6B6B] tracking-[0.2em] uppercase block mb-1">
            São Paulo — BRT
          </span>
          <span className="font-mono text-[0.7rem] text-[#121212] tracking-[0.1em]">
            {spTime}
          </span>
        </div>

        {/* Build version */}
        <div>
          <span className="font-mono text-[0.55rem] text-[#6B6B6B] tracking-[0.2em] uppercase block mb-1">
            Versão
          </span>
          <span className="font-mono text-[0.7rem] text-[#121212] tracking-[0.1em]">
            v2.0.0
          </span>
        </div>

        {/* Status */}
        <div>
          <span className="font-mono text-[0.55rem] text-[#6B6B6B] tracking-[0.2em] uppercase block mb-1">
            Status
          </span>
          <span className="font-mono text-[0.7rem] text-[#121212] tracking-[0.1em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Disponível para projetos
          </span>
        </div>

        {/* Copyright */}
        <div className="text-right">
          <span className="font-mono text-[0.55rem] text-[#6B6B6B] tracking-[0.2em] uppercase block mb-1">
            © {new Date().getFullYear()}
          </span>
          <span className="font-mono text-[0.7rem] text-[#121212] tracking-[0.1em]">
            Leonardo Franco
          </span>
        </div>
      </div>
    </footer>
  );
}