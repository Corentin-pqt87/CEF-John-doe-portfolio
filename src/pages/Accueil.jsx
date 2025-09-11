import React, {useState, useEffect} from 'react';
// Pages jsx

// CSS
import "../style/Accueil.css";

// Images
import johnDoeAbout from '../asset/img/john-doe-about.jpg'

import { ReactComponent as Person } from '../asset/svg/person.svg';
import { ReactComponent as People } from '../asset/svg/people.svg';
import { ReactComponent as Box } from '../asset/svg/box.svg';
import { ReactComponent as CardText } from '../asset/svg/card-text.svg';

export default function Accueil() {
  const [data, setData] = useState([]);
  const [showUI, setShowUI] = useState(false); 

  const getData = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div className='Accueil'>
      <div id="header-Accueil" class="d-flex flex-column justify-content-center align-items-center text-center text-light">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>

        <button className="btn btn-danger" onClick={() => setShowUI(true)}>
          En savoir plus
        </button>
        {showUI && (
          <div 
            className="floating-ui p-4 bg-light text-dark shadow rounded position-fixed top-50 start-50 translate-middle text-start" 
            style={{ zIndex: 1000, width: '80%', maxWidth: '600px' }}
          >
            <h3>Mon profil GitHub</h3>
            <div className="d-flex align-items-start gap-3">
              {/* Colonne gauche : avatar */}
              <div style={{ flex: '0 0 100px' }}>
                <img src={data.avatar_url} alt="avatar" className="img-fluid rounded" />
              </div>

              {/* Colonne droite : infos */}
              <div style={{ flex: 1 }}>
                <p><strong><Person /></strong> <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.name}</a></p>
                <p><strong><CardText /></strong> {data.bio}</p>
                <p><strong><Box /></strong> {data.public_repos} repos</p>
                <p><strong><People /></strong> {data.followers} followers</p>
                <p><strong><People /></strong> {data.following} following</p>
              </div>
            </div>

            <button className="btn btn-secondary mt-3" onClick={() => setShowUI(false)}>Fermer</button>
          </div>
        )}

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
