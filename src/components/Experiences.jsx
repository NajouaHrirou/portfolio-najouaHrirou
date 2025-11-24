export default function Experiences() {
  const experiences = [
    {
      title: "Stage PFE Développement Full Stack",
      company: "PRECYUS",
      period: "Avril 2025 – Juillet 2025",
      location: "Télétravail – Paris, France",
      description: [
        "Développement d'une plateforme SVOD (architecture MVC, microservices)",
        "Création d'API REST avec Node.js, Express.js et Mongoose",
        "Conception d'interfaces avec React, Tailwind CSS, HTML, JavaScript",
        "Intégration de bases de données MongoDB et PostgreSQL",
        "Sécurisation des API avec jsonwebtoken"
      ],
      technologies: ["Node.js", "React", "MongoDB", "PostgreSQL", "Express.js", "JWT", "MVC", "Microservices"]
    }
  ];

  return (
    <section id="experience" className="experiences-section">
      <h2>EXPÉRIENCES PROFESSIONNELLES</h2>
      <div className="experiences-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-section">
                <h3>{exp.title}</h3>
                <div className="experience-company">
                  {exp.company} • {exp.location}
                </div>
              </div>
              <span className="experience-period">{exp.period}</span>
            </div>
            
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            
            <div className="experience-tech">
              <h4>Technologies utilisées :</h4>
              <div className="tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}