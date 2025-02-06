import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="portfolio" id="about-me">
      
      <div className="left-section">
        <img src="me.svg" alt="Foto de perfil" className="profile-photo" />
        <div className="intro-text">
          <h2>Oii,</h2>
          <p>Sou estudante de Desenvolvimento Full Stack, sempre em busca de novos desafios e oportunidades de aprendizado. Tenho uma paixão por criar soluções eficientes e funcionais, focando sempre na qualidade do código e na experiência do usuário.</p>
        </div>
      </div>

     
      <div className="right-section">
       
        <div className="intro-projects">
      
          <div className="introduction">
            <h2>Introdução <span>Sobre mim</span></h2>
            <p><strong>Leonardo Franco</strong></p>
            <p><img src="loc.svg" alt="Loc" width={30}/> São Paulo - SP / Brazil</p>
            <p><img src="Phone.svg" alt="Loc" width={30}/> +55 (11) 97764-9217</p>
            <p><img src="Mail.svg" alt="Loc" width={30}/> leofranco96@gmail.com</p>
          </div>

          
          <div className="projects">
            <h2>Experiências e Projetos</h2>
            <p><strong>Nk Lab</strong>: Em produção</p>
            <p><strong>Toffas Coffee</strong>: Desenvolvi um site moderno e responsivo para a Toffas Coffee, destacando a qualidade dos seus produtos.</p>
            <p><strong>Brazilian Hands Cooperative</strong>: Criei um site para uma empresa irlandesa que facilita a conexão entre pessoas em busca de trabalho e moradores que necessitam de serviços domésticos, proporcionando uma plataforma eficiente e fácil de usar.</p>
          </div>
        </div>

        
        <div className="skills">
          <h2>Habilidades <span>Software</span></h2>
          <div className="skills-icons">
            <img src="React Native.svg" alt="React" />
            <img src="TypeScript.svg" alt="TypeScript" />
            <img src="JavaScript.svg" alt="JavaScript" />
            <img src="CSS.svg" alt="CSS" />
            <img src="API.svg" alt="API" />
            <img src="Git.svg" alt="API" />
            <img src="Figmaa.svg" alt="API" />
          </div>
        </div>

        
        <div className="interests">
          <h2>Interesses</h2>
          <div className="interests-buttons">
            <button>FrontEnd</button>
            <button>BackEnd</button>
            <button>FullStack</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
