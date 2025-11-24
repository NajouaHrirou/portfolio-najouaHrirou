export default function Contact() {
  const contactInfo = {
    email: "najwahrirouo4@gmail.com",
    phone: "+212-648-31-13-71",
    linkedin: "https://linkedin.com/in/najoua-hrirou",
    portfolio: "https://najoua-hrirou-14aa38a32/"
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>CONTACT</h2>
        <p className="contact-subtitle">
          N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                {contactInfo.email}
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h3>Téléphone</h3>
              <a href={`tel:${contactInfo.phone}`} className="contact-link">
                {contactInfo.phone}
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div>
              <h3>LinkedIn</h3>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                Visiter mon profil LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <div>
              <h3>Portfolio</h3>
              <a 
                href={contactInfo.portfolio} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                Voir mon portfolio en ligne
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <p>Prêt à collaborer ? Envoyez-moi un message !</p>
          <a href={`mailto:${contactInfo.email}`} className="btn-primary">
            Me contacter par email
          </a>
        </div>
      </div>
    </section>
  );
}