export default function Projects() {
  const projects = [
    {
      title: "Système de Gestion Intelligente des Poubelles - IoT",
      description: "Suivi en temps réel du remplissage des poubelles via ESP32, capteur ultrason et GPS, avec stockage des données sur Firebase",
      technologies: ["ESP32", "Capteur Ultrason", "GPS", "Firebase", "IoT"],
      category: "IoT"
    },
    {
      title: "Mini-Plateforme E-commerce - Python",
      description: "Authentification JWT - CRUD produits - Panier et commandes - Paiement simulé - Test API avec Postman",
      technologies: ["Python", "JWT", "API REST", "Postman", "CRUD"],
      category: "Développement Web"
    },
    {
      title: "Projet en Programmation Orientée Objet - Java",
      description: "Développement d'une console plateforme pour un système de gestion des projets",
      technologies: ["Java", "POO", "Système de gestion"],
      category: "Développement Logiciel"
    },
      {
      title: "Site Web E-commerce Dynamique",
      description: "Conception d'un site avec interface utilisateur intuitive",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git", "GitHub", "UML"],
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>PROJETS ACADÉMIQUES & PROFESSIONNELS</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}