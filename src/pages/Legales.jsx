import envelope from '../asset/svg/envelope-at.svg';
import geoalt from '../asset/svg/geo-alt.svg';
import map from '../asset/svg/map.svg';
import phone from '../asset/svg/phone.svg';

export default function Legales() {
  return (
    <div className="Legales">

      <div>
        <h1>Mentions légales</h1>
        <hr className="border border-primary border-2 opacity-100 mx-auto" style={{ width: "35%" }} />
      </div>

      <div className="container my-5">
        <div className="accordion" id="accordionLegales">

          {/* Editeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button 
                className="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseOne" 
                aria-expanded="true" 
                aria-controls="collapseOne">
                Editeur du site
              </button>
            </h2>
            <div 
              id="collapseOne" 
              className="accordion-collapse collapse show" 
              aria-labelledby="headingOne" 
              data-bs-parent="#accordionLegales">
              <div className="accordion-body text-start"> {/* Aligne le contenu à gauche */}
                <h3>John Doe</h3>
                <address className="d-flex flex-column">
                  <ul>
                    <li className="p-2">
                      <img src={map} alt='localisation' width="16" height="16" />
                      40 rue Laure Diebold
                    </li>
                    <li className="p-2">
                      <img src={geoalt} alt='localisation' width="16" height="16" />
                      69009 Lyon, France
                    </li>
                    <li className="p-2">
                      <img src={phone} alt="Adresse" width="16" height="16" />
                      10 20 30 40 50
                    </li>
                    <li className="p-2">
                      <img src={envelope} alt="Adresse" width="16" height="16" />
                      john.doe@gmail.com
                    </li>
                  </ul>
                </address>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseTwo" 
                aria-expanded="false" 
                aria-controls="collapseTwo">
                Hébergeur
              </button>
            </h2>
            <div 
              id="collapseTwo" 
              className="accordion-collapse collapse" 
              aria-labelledby="headingTwo" 
              data-bs-parent="#accordionLegales">
              <div className="accordion-body text-start">
                <strong>alwaysdata</strong>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
              </div>
            </div>
          </div>

          {/* Crédit */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseThree" 
                aria-expanded="false" 
                aria-controls="collapseThree">
                Crédit
              </button>
            </h2>
            <div 
              id="collapseThree" 
              className="accordion-collapse collapse" 
              aria-labelledby="headingThree" 
              data-bs-parent="#accordionLegales">
              <div className="accordion-body text-start">
                <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a>.</p>
                <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a>.</p>
                <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John Doe - Flaticon</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
