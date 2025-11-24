import profilePhoto from '../assets/moiiiiiiiiii.jpg';
import cvPdf from './CV_Najoua_HRIROU&.pdf';

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV_Najoua_HRIROU.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero">
      <img src={profilePhoto} alt="Najoua HRIROU" />
      <div className="hero-text">
        <h2>Najoua HRIROU</h2>
        <p>Étudiante en Master spécialisé en Big Data & Business Intelligence</p>
        <div className="hero-buttons">
          <button className="btn-primary">Découvrir mon travail</button>
          <button className="btn-outline" onClick={handleDownloadCV}>
            Télécharger CV
          </button>
        </div>
      </div>
    </section>
  );
}