import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Nk Lab",
      description: "Site em desenvolvimento",
      preview: "https://www.seusite.com",
      link: "https://www.seusite.com"
    },
    {
      title: "Toffa's Coffee",
      description: "Desenvolvimento completo de um site para uma empresa de café, utilizando React.js com hooks como useState, useEffect e useLocation, além de navegação com react-router-dom. O projeto também incluiu um carrossel dinâmico para exibição de produtos. Criei a interface de usuário de forma responsiva para oferecer uma ótima experiência tanto em desktop quanto dispositivos móveis. O design e o desenvolvimento foram feitos de forma independente, com estrutura de pastas organizada e versionamento utilizando Git.",
      preview: "https://toffascoffee.vercel.app",
      link: "https://toffascoffee.vercel.app"
    },
    {
      title: "Bralizian Hands Cooperative",
      description: "Este projeto foi desenvolvido para uma empresa irlandesa especializada em conectar pessoas que precisavam de trabalho com moradores que buscavam serviços domésticos. Utilizando React, a aplicação foi projetada para facilitar a navegação entre usuários e profissionais de forma intuitiva e rápida. A interface foi construída com styled-components, assegurando um design responsivo e de fácil manutenção. O site conta com funcionalidades como useState, useEffect, useLocation e react-router-dom, proporcionando uma experiência fluída para o usuário.",
      preview: "https://brazilian-hands-cooperative.vercel.app",
      link: "https://brazilian-hands-cooperative.vercel.app"
    }
    ,
    {
      title: "Desafio React",
      description: "Este projeto foi o meu primeiro contato com o desenvolvimento em React, realizado com o auxílio da escola DNC. Focado na criação de uma aplicação interativa e funcional, ele me proporcionou uma compreensão mais profunda dos conceitos de componentes, estado e rotas, sendo fundamental no meu aprendizado de Frontend.",
      preview: "https://projeto-react-teal.vercel.app",
      link: "https://projeto-react-teal.vercel.app"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Projetos <span>Realizados</span></h2>
      {projectList.map((project, index) => (
        <div className="project-card" key={index}>
          <iframe src={project.preview} title={project.title} className="project-preview"></iframe>
          <div className="project-info">
            <div className="text-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">Ver Mais</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
