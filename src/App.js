import './style/App.css';
import { Routes, Route, Link } from 'react-router-dom';
// Pages jsx
import Accueil from './pages/Accueil';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Realisation from './pages/Realisation';
import Legales from './pages/Legales';

export default function App() {
  return (
    <div className="text-center">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">John Doe</Link>
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

        
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Realisation" element={<Realisation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Legales" element={<Legales />} />
        </Routes>
      </main>

      <footer className="bg-dark text-light text-center p-3 mt-4 d-flex justify-content-around flex-wrap text-center ">
        <div className="mt-3">
          <h6>John Doe</h6>
          <address>
            <Link className="text-light text-decoration-none">40 rue Laure Diebold<br />69009 Lyon, France<br /></Link>
            <Link className="text-light text-decoration-none" to={"tel:+331020304050"}>10 20 30 40 50<br /></Link>
            <Link className="text-light text-decoration-none" to={"mailto:john.doe@gmail.com"}>john.doe@gmail.com</Link>
          </address>
        </div>
        <div className="mt-3">
          <h6>Liens utiles</h6>
          <Link className="text-light text-decoration-none" to="/">Accueil<br /></Link>
          <Link className="text-light text-decoration-none" to="/Service">Services<br /></Link>
          <Link className="text-light text-decoration-none" to="/Realisation">Réalisations<br /></Link>
          <Link className="text-light text-decoration-none" to="/Contact">Contact<br /></Link>
          <Link className="text-light text-decoration-none" to="/Legales">Mentions Légales</Link>
        </div>
        <div className="mt-3">
          <h6>Mes dernières réalisations</h6>
          <p className="mb-1">Fresh Food</p>
          <p className="mb-1">Restaurent Akira</p>
          <p className="mb-1">Espace bien-être</p>
          <p className="mb-1">SEO</p>
          <p className="mb-1">Création d'une API</p>
          <p className="mb-1">Maquette d'un site</p>
        </div>
      </footer>

    </div>
  );
}
