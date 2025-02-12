import './SocialMedia.css';

function SocialMedia() {
    return (
        <section className="socialMedia" id="contato">
            <img src="/gato.svg" alt="Foto cartoon" className="gatoPhoto" />
            <h2>Redes Sociais</h2>
            <div className="socialMediaLinks">
                <ul>
                <li style={{ "--i": "#a955ff", "--j": "#ea51ff" }}>
                        <a href="https://github.com/FranccoL" target="_blank" rel="noopener noreferrer">
                            <img src="/GitHubb.svg" alt="GitHub" className="icon" />
                            <span className="titulo">GitHub</span>
                        </a>
                    </li>
                    <li style={{ "--i": "#55CCF2", "--j": "#2F80ED" }}>
                        <a href="https://www.linkedin.com/in/leonardofmoreno/" target="_blank" rel="noopener noreferrer">
                            <img src="/LinkedInn.svg" alt="LinkedIn" className="icon" />
                            <span className="titulo">LinkedIn</span>
                        </a>
                    </li>
                    <li style={{ "--i": "#86be6b", "--j": "#1ba716" }}>
                        <a href="https://wa.me/11977649217" target="_blank" rel="noopener noreferrer">
                            <img src="/WhatsAppp.svg" alt="WhatsApp" className="icon" />
                            <span className="titulo">WhatsApp</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default SocialMedia;
