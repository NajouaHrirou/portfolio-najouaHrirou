import ToggleTheme from './ToggleTheme';
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Najoua HRIROU</h1>
      <ul>
        <li><a href="#about">À propos</a></li>
        <li><a href="#formations">Formations</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#experience">Expériences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
