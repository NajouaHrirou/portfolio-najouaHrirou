import React from 'react';

// Import des logos
import ENSALogo from '../assets/logos/ensa-logo.png';
import FSTLogo from '../assets/logos/fst-logo.png';
import LyceeLogo from '../assets/logos/lycee-logo.png';

export default function Formations() {
  const formations = [
    {
      degree: "MASTER SPÉCIALISÉ EN BIG DATA & BUSINESS INTELLIGENCE",
      school: "Ecole Nationale des Sciences Appliquées, Kénitra",
      period: "2025 - En cours",
      logo: ENSALogo,
      type: "ensa"
    },
    {
      degree: "LICENCE LST EN SYSTÈMES D'INFORMATION ET TRANSFORMATION DIGITALE",
      school: "Faculté des sciences et techniques, Settat",
      period: "2024 - 2025",
      logo: FSTLogo,
      type: "fst"
    },
    {
      degree: "DIPLÔME D'ÉTUDE UNIVERSITAIRE EN SCIENCES ET TECHNIQUES EN MIP",
      school: "Faculté des sciences et techniques, Settat",
      period: "2022 - 2024",
      logo: FSTLogo,
      type: "fst"
    },
    {
      degree: "BACCALAURÉAT SCIENCES PHYSIQUES",
      school: "Lycée Ibn Alhaytam, Kénitra",
      period: "2021 - 2022",
      logo: LyceeLogo,
      type: "lycee"
    }
  ];

  return (
    <section id="formations" className="formations-section">
      <h2>FORMATION</h2>
      <div className="formations-grid">
        {formations.map((formation, index) => (
          <div key={index} className="formation-card">
            <div className="formation-degree">{formation.degree}</div>
            
            <div className="formation-header">
              <div className="formation-logo">
                <img 
                  src={formation.logo} 
                  alt={`Logo ${formation.school}`}
                  className="formation-logo-img"
                  onError={(e) => {
                    // Fallback si le logo ne charge pas
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="formation-logo-placeholder"
                  style={{ display: 'none' }}
                >
                  {formation.type === 'ensa' && 'ENSA'}
                  {formation.type === 'fst' && 'FST'}
                  {formation.type === 'lycee' && 'Lycée'}
                </div>
              </div>
              
              <div className="formation-info">
                <h3>{formation.school}</h3>
                <div className="formation-period">{formation.period}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}