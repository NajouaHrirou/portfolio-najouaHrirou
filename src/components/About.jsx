export default function About() {
  const skills = {
    "Langages de programmation": ["C", "Java/JEE", "Dart", "JavaScript", "Python"],
    "Frontend & Web": ["Tailwind CSS", "React.js", "HTML", "CSS", "Bootstrap"],
    "Backend": ["PHP", "Node.js", "Express.js"],
    "Bases de données": ["MySQL", "Oracle", "PostgreSQL", "MongoDB"],
    "Data & IA": ["Python & R", "Statistiques", "Data Mining", "Machine Learning", "IA"],
    "Big Data & BI": ["Concepts Big Data", "ETL", "Reporting", "Dashboard"],
    "Modélisation & Architecture": ["UML", "Merise", "Architecture MVC", "Microservices"],
    "Systèmes & Réseaux": ["Linux", "OSI", "TCP/IP", "IPv4/IPv6", "HTTP/HTTPS", "LAN", "Cloud Computing"],
    "Gestion de projet": ["Méthodes Agile/Scrum"]
  };

  const languages = [
    { name: "Arabe", level: "Maternelle" },
    { name: "Français", level: "C1" },
    { name: "Anglais", level: "B1" }
  ];

  const softSkills = [
    "Autonome et rigoureuse",
    "Esprit d'équipe et sens du détail",
    "Bonne communication",
    "Curieuse et prête à apprendre"
  ];

  return (
    <section id="about" className="about-section">
      <h2>PROFIL</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Étudiante en Master Big Data & Business Intelligence à l'ENSA Kénitra, diplômée en 
            Systèmes d'Information et Transformation Digitale. Passionnée par le développement 
            web et mobile, avec une expérience sur une plateforme SVOD (Node.js, React, MongoDB). 
            Curieuse et autonome, je souhaite contribuer à des projets innovants alliant développement et data.
          </p>
          
          <div className="languages-section">
            <h3>Langues</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills-section">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Compétences Techniques</h3>
          <div className="skills-categories">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skill-items">
                  {items.map((item, index) => (
                    <span key={index} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}