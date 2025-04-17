import './SocialMedia.css';

function SocialMedia() {
  return (
    <section className="social-container" id="contato">
      <img src="/gato.svg" alt="Foto cartoon" className="social-photo" />
      <h2 className="social-title">Redes Sociais</h2>
      <div className="social-links">
        <ul className="social-list">
          <li className="social-item" style={{ "--i": "#a955ff", "--j": "#ea51ff" }}>
            <a href="https://github.com/FranccoL" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/GitHubb.svg" alt="GitHub" className="social-icon" />
              <span className="social-label">GitHub</span>
            </a>
          </li>
          <li className="social-item" style={{ "--i": "#55CCF2", "--j": "#2F80ED" }}>
            <a href="https://www.linkedin.com/in/leonardofmoreno/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/LinkedInn.svg" alt="LinkedIn" className="social-icon" />
              <span className="social-label">LinkedIn</span>
            </a>
          </li>
          <li className="social-item" style={{ "--i": "#86be6b", "--j": "#1ba716" }}>
            <a href="https://wa.me/11977649217" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/WhatsAppp.svg" alt="WhatsApp" className="social-icon" />
              <span className="social-label">WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SocialMedia;
