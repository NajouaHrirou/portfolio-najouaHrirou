export default function Projects() {
  const projects = [
    {
      title: "Projet BI pour une banque : Analyse des crédits",
      description: "Dashboard BI pour réduire le risque financier en analysant les types de crédits, taux de remboursement, profils clients et retards de paiement",
      technologies: ["Power BI", "Business Intelligence", "Analyse financière", "Data Visualization", "Dashboard", "Analyse de risque"],
      category: "Business Intelligence"
    },
    {
      title: "Administration Linux - Serveurs NFS et Samba",
      description: "Configuration et gestion de serveurs de fichiers sous Linux avec NFS pour le partage réseau et Samba pour l'intégration avec les systèmes Windows",
      technologies: ["Linux", "NFS", "Samba", "Serveur de fichiers", "Partage réseau", "Administration système"],
      category: "Administration Système"
    },
    {
      title: "Système de Gestion Intelligente des Poubelles - IoT",
      description: "Suivi en temps réel du remplissage des poubelles via ESP32, capteur ultrason et GPS, avec stockage des données sur Firebase",
      technologies: ["ESP32", "Capteur Ultrason", "GPS", "Firebase", "IoT"],
      category: "IoT"
    },
    {
  title: "MarketData Lake - Data Lake d'entreprise",
  description: "Construction d'un Data Lake pour centraliser les données d'entreprise (ventes, clients, stocks) avec ingestion, traitement et mise à disposition des données",
  technologies: ["Data Lake", "Big Data", "ETL", "Data Warehouse", "Apache Hadoop", "Apache Spark", "Data Integration", "Data Storage"],
  category: "Big Data & Data Engineering"
},
    {
      title: "Mini-Plateforme E-commerce - Python",
      description: "Authentification JWT - CRUD produits - Panier et commandes - Paiement simulé - Test API avec Postman",
      technologies: ["Python", "JWT", "API REST", "Postman", "CRUD"],
      category: "Développement Web"
    },
     {
      title: "Site Web E-commerce Dynamique",
      description: "Conception d'un site avec interface utilisateur intuitive",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git", "GitHub", "UML"],
      category: "Web Development"
    },
    {
  title: "Plateforme de Gestion d'Événements - Java/JEE",
  description: "Application web complète avec création d'événements, inscriptions, notifications et gestion des rôles (admin/organisateur/utilisateur)",
  technologies: ["Java", "JEE", "Spring Boot", "MySQL", "Maven", "REST API", "Système d'authentification", "Notifications", "Gestion des rôles"],
  category: "Développement Web Full-Stack"
},{
      title: "API Microservices - Architecture Cloud Native",
      description: "Développement d'une architecture microservices avec conteneurisation, orchestration et déploiement automatisé",
      technologies: ["Docker", "Kubernetes", "Microservices", "API Gateway", "Node.js", "CI/CD", "Cloud Native"],
      category: "Architecture Cloud"
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