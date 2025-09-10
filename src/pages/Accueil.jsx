import { Routes, Route, Link } from 'react-router-dom';
// Pages jsx
import Contact from './Contact';

// CSS
import "../style/Accueil.css";

export default function Accueil() {
  return (
    <div className='Accueil'>
      <div id="header" className='text-light d-flex flex-column align-items-center'>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>

        <Link to="/Contact" className="btn btn-danger">
          <button className='btn btn-danger'>En savoir plus</button>
        </Link>

        <Routes>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
