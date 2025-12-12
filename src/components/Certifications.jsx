import React from 'react';

// Import des images
import HPLifeImage from '../assets/certifications/hp-life.jpg';
import PythonCertImage from '../assets/certifications/python-365.jpg';
import PowerBICertImage from '../assets/certifications/powerbi-365.jpg';
import MernCertImage from '../assets/certifications/mern-simplilearn.jpg';
import JupyterCertImage from '../assets/certifications/jupyter-365.jpg';
import AIHPLifeImage from '../assets/certifications/ai-hp-life.jpg';

export default function Certifications() {
  const certifications = [
    {
      title: "L'IA pour les débutants",
      organization: "HP LIFE",
      date: "Décembre 2025",
      description: "Certification en intelligence artificielle couvrant les concepts fondamentaux de l'IA, ses applications pratiques, l'importance des données et les considérations éthiques.",
      image: AIHPLifeImage,
      badge: "🤖",
      skills: ["Intelligence Artificielle", "Machine Learning", "Éthique de l'IA", "Applications de l'IA", "Fondamentaux de l'IA", "Technologie IA"]
    },
    {
      title: "HP LIFE - Sciences et analyses des données",
      organization: "HP Foundation",
      date: "2024",
      description: "Certification en sciences et analyses des données couvrant les fondamentaux de l'analyse de données et les outils d'analyse.",
      image: HPLifeImage,
      badge: "🔬",
      skills: ["Analyse de données", "Collecte de données", "Traitement de données", "Outils d'analyse"]
    },
    {
      title: "Python for Data Science",
      organization: "365 Data Science",
      date: "2024",
      description: "Maîtrise de Python pour la science des données incluant pandas, numpy, matplotlib et scikit-learn.",
      image: PythonCertImage,
      badge: "🐍",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Analysis"]
    },
    {
      title: "Power BI Fundamentals",
      organization: "365 Data Science",
      date: "2025",
      description: "Certification en Power BI couvrant la création de dashboards, la modélisation de données et la visualisation interactive.",
      image: PowerBICertImage,
      badge: "📊",
      skills: ["Power BI", "Data Visualization", "DAX", "Data Modeling", "Dashboards"]
    },{
      title: "Introduction to MERN Stack",
      organization: "Simplilearn",
      date: "Avril 2025",
      description: "Certification en développement full-stack avec MongoDB, Express.js, React et Node.js, couvrant la création d'applications web modernes.",
      image: MernCertImage,
      badge: "⚛️",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Full-Stack Development", "API Development"]
    },
    {
      title: "Introduction to Jupyter",
      organization: "365 Data Science",
      date: "Novembre 2024",
      description: "Certification en utilisation de Jupyter Notebook pour l'analyse de données, la visualisation et le développement de projets data science.",
      image: JupyterCertImage,
      badge: "📓",
      skills: ["Jupyter Notebook", "Data Analysis", "Python", "Data Visualization", "Interactive Computing", "Data Science Workflow"]
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-image-container">
                <img 
                  src={cert.image} 
                  alt={`Certification ${cert.title}`}
                  className="cert-image"
                  onError={(e) => {
                    console.error(`Image non trouvée: ${cert.image}`);
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23241028'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23e38bff'%3E" + encodeURIComponent(cert.organization.split(' ')[0]) + "%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="cert-badge">
                  {cert.badge}
                </div>
              </div>
              
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-organization">{cert.organization}</p>
                <span className="cert-date">{cert.date}</span>
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  <h4>Compétences acquises:</h4>
                  <div className="skill-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}