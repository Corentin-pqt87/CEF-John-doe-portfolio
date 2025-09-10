import { Routes, Route, Link } from 'react-router-dom';
// Pages jsx
import Contact from './Contact';

// CSS
import "../style/Accueil.css";

// Images
import johnDoeAbout from '../asset/img/john-doe-about.jpg';

export default function Accueil() {
  return (
    <div className='Accueil'>
      <div id="header-Accueil" class="d-flex flex-column justify-content-center align-items-center text-center text-light">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>

        <Link to="/Contact" className="btn btn-danger">
          En savoir plus
        </Link>

        <Routes>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <div id='contenue' className='Contenue-box container text-start'>
        <div className='row my-5'>
          <div className='col-md-6'>

            <h3>À propos</h3>

            <hr class="border border-primary border-2 opacity-100" />

            <img src={johnDoeAbout} alt="John Doe" className='img-fluid mb-3' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis, orci vitae vestibulum ornare, diam ipsum ullamcorper felis, eget accumsan felis dui a velit. Morbi porta, lorem id viverra vulputate, quam massa sodales purus, sit amet blandit ex dolor id purus. Nullam ut viverra tellus. Suspendisse sed tristique mi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis, orci vitae vestibulum ornare, diam ipsum ullamcorper felis, eget accumsan felis dui a velit. Morbi porta, lorem id viverra vulputate, quam massa sodales purus, sit amet blandit ex dolor id purus. Nullam ut viverra tellus. Suspendisse sed tristique mi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis, orci vitae vestibulum ornare, diam ipsum ullamcorper felis, eget accumsan felis dui a velit. Morbi porta, lorem id viverra vulputate, quam massa sodales purus, sit amet blandit ex dolor id purus. Nullam ut viverra tellus. Suspendisse sed tristique mi.</p>
          </div>

          <div className='col-md-6'>

            <h3>Mes compétences</h3>

            <hr class="border border-primary border-2 opacity-100" />

            <p><strong>HTML 90%</strong></p>
            <div class="progress" style={{ height: "15px" }}>
              <div
                class="progress-bar bg-danger"
                role='progressbar'
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <p><strong>CSS 80%</strong></p>
            <div class="progress" style={{ height: "15px" }}>
              <div
                class="progress-bar bg-info"
                role='progressbar'
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <p><strong>JAVASCRIPT 70%</strong></p>
            <div class="progress" style={{ height: "15px" }}>
              <div
                class="progress-bar bg-warning"
                role='progressbar'
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <p><strong>PHP 60%</strong></p>
            <div class="progress" style={{ height: "15px" }}>
              <div
                class="progress-bar bg-success"
                role='progressbar'
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <p><strong>REACT 50%</strong></p>
            <div class="progress" style={{ height: "15px" }}>
              <div
                class="progress-bar"
                role='progressbar'
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}
