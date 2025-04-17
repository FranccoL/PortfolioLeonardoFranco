import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Toffa's Coffee",
      description: "Site institucional de uma empresa de café especial com design moderno e responsivo.",
      image1: "/tcp.png",
      image2: "/tcpm.png",
      siteLink: "https://toffascoffee.com.br",
      repoLink: "https://github.com/FranccoL/ToffasCoffee",
      icon: "/ReactNative.svg"
    },
    {
      title: "Nk Lab",
      description: "Laboratório veterinário com sistema de login para administradores e tutores de animais.",
      image1: "/nkd.png",
      image2: "/nkm.png",
      siteLink: "https://nk-lab.vercel.app",
      repoLink: "https://github.com/FranccoL/Nk-Lab",
      icon: "/ReactNative.svg"
    },
    {
      title: "Brazilian Hands Cooperative",
      description: "Cooperativa de artesãos brasileiros com foco em e-commerce e divulgação cultural.",
      image1: "/bc.png",
      image2: "/bcm.png",
      siteLink: "https://brazilian-hands-cooperative.vercel.app",
      repoLink: "https://github.com/FranccoL/Brazilian-Hands-Cooperative",
      icon: "/ReactNative.svg"
    },
    {
      title: "Architecture",
      description: "Portfólio de arquitetura com foco em apresentação de projetos e responsividade.",
      image1: "/arq.png",
      image2: "/arqm.png",
      siteLink: "https://projeto-react-teal.vercel.app",
      repoLink: "https://github.com/FranccoL/PrimeiroProjetoReact",
      icon: "/ReactNative.svg"
    }
  ];

  const [currentPreviews, setCurrentPreviews] = useState(
    projectList.map(project => project.image1)
  );

  const handlePreviewChange = (index, image) => {
    const updatedPreviews = [...currentPreviews];
    updatedPreviews[index] = image;
    setCurrentPreviews(updatedPreviews);
  };

  return (
    <section className="projects-section" id="projects">
      <h2>Projetos <span>Realizados</span></h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <img src={project.icon} alt="React Native" className="project-icon" />
            </div>
            <img
              src={currentPreviews[index]}
              alt={project.title}
              className="project-image"
            />
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <button onClick={() => handlePreviewChange(index, project.image1)}>Desktop</button>
              <button onClick={() => handlePreviewChange(index, project.image2)}>Mobile</button>
              <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Ver site</a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-button">Repositório</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
