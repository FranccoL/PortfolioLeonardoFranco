import './Header.css';
import { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInicioClick = (e) => {
    e.preventDefault();
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-links">
        <a href="#inicio" className="nav-item" onClick={handleInicioClick}>Início</a>
        <a href="#about-me" className="nav-item">Sobre mim</a>
        <a href="#projects" className="nav-item">Projetos</a>
        <a href="#contato" className="nav-item">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
