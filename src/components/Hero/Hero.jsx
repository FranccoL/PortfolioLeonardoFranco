import { useEffect } from 'react';
import './Hero.css';

function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Oii, eu sou o Leonardo</h2>
        <h1>Bem-vindo <br />ao meu portfólio</h1>
        <p>Explore meus projetos e entre em contato</p>
      </div>
      <img src="/gatoGif.gif" alt="Gato animado" className="hero-gif" />
    </section>
  );
}

export default Hero;
