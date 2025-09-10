import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// Pages jsx
import Acceuil from './pages/Accueil';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Realisation from './pages/Realisation';
import Legales from './pages/Legales';

export default function App() {
  return (
    <div className="container text-center">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Acceuil</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Service">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Realisation">Réalisations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Legales">Mentions Légales</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Realisation" element={<Realisation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Legales" element={<Legales />} />
        </Routes>
      </header>
    </div>
  );
}
