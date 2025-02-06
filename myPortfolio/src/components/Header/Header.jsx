import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <a href="#about-me" className="nav-item">Sobre mim</a>
        <a href="#projects" className="nav-item">Projetos</a>
        <a href="#contato" className="nav-item">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
